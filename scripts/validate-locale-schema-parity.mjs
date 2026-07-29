#!/usr/bin/env node
// scripts/validate-locale-schema-parity.mjs
//
// Locale schema-parity validator — see LOCALE_PARITY_VALIDATOR_SPEC.md.
//
// WHAT THIS CHECKS — two severities, not one:
//   MISSING (blocks): presence/absence of an ARTICLE_LEVEL_TYPE (see below)
//     must match EN exactly. If EN emits TechArticle/FAQPage/HowTo and a
//     locale emits only BreadcrumbList, that's structural drift.
//   COUNT (report-only, never blocks): multiplicity of any type — including
//     repeatable top-level graph nodes like ImageObject, and any type outside
//     ARTICLE_LEVEL_TYPES — differing between EN and a locale. A German
//     article can legitimately have a different number of HowTo steps, FAQ
//     questions, or embedded images than the Korean one; that's article
//     length, not a schema-shape defect. Originally this script compared the
//     full multiset (all types, count-aware) as a single severity, which
//     conflated the two and flagged legitimate length variation as drift —
//     corrected per spec addendum.
//
// ARTICLE_LEVEL_TYPES (the only types whose PRESENCE is checked):
//   TechArticle, FAQPage, HowTo, WebPage, ItemList, BreadcrumbList,
//   LearningResource, DefinedTerm, Article, BlogPosting
//
// WHAT THIS DOES NOT CHECK:
//   - Content/translation correctness. That's validate-translation-integrity.mjs.
//   - Nested @type nodes (Question inside FAQPage.mainEntity, HowToStep inside
//     HowTo.step, Person/ImageObject nested inside another node's properties,
//     etc). These aren't collected at all — only top-level graph nodes are.
//   - Whether a locale renders at all. A 404 (page not found for that locale)
//     is reported separately as "not applicable," not as a parity mismatch —
//     that's a translation-coverage decision, not a schema-shape defect.
//
// DESIGN NOTE — deviation from the spec's stated assumption:
//   The spec assumes prerendered HTML can be read straight off disk with "no
//   server needed for statically generated routes." That's true for EN only.
//   Every non-EN locale across every cluster checked here uses
//   `generateStaticParams() { return [] }` with ISR (`revalidate`), i.e.
//   on-demand rendering — nothing is written to .next/server/app for those
//   routes until a request actually hits them. A pure disk read would see EN
//   pages and silently see NOTHING for the other 8 locales, which defeats the
//   point of this validator. So, like test-cluster-noindex.mjs, this script
//   boots `next start` and fetches every URL over HTTP — that's the only way
//   to force ISR routes to materialize and to read what they actually emit.
//
// NO NETWORK CALLS TO THE OUTSIDE WORLD — every request in this script goes to
// 127.0.0.1 against the locally built app. Nothing here calls production or
// any third party.
//
// RSC hydration payload: Next.js emits the JSON-LD string twice — once in the
// real `<script type="application/ld+json">` tag, once serialized inside the
// `self.__next_f.push(...)` RSC flight script (which does NOT carry that
// `type` attribute). We only match `<script type="application/ld+json">`
// elements, so the RSC duplicate is never counted.
//
// STATUS: report-only. Not wired into postbuild. See "Rollout" in the spec —
// this only becomes a BLOCK-mode postbuild gate once a run against merged
// `main` comes back clean on MISSING (COUNT never gates) or every MISSING
// finding has a merged fix or a declared PARITY_EXCEPTIONS entry.

import { spawn } from 'node:child_process'
import { readFileSync, existsSync } from 'node:fs'
import { setTimeout as sleep } from 'node:timers/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const PORT = process.env.PARITY_TEST_PORT || '3018'
const HOST = `http://127.0.0.1:${PORT}`
const READY_TIMEOUT_MS = 60_000
const REQUEST_TIMEOUT_MS = 15_000
const CONCURRENCY = 10

// Article clusters that share the per-locale [slug]/page.tsx architecture
// described in CLAUDE.md. Each entry's slugsFile is parsed with the same
// 'slug': 'key' regex test-cluster-noindex.mjs uses (tolerates camelCase
// values and trailing comments).
const CLUSTERS = [
  { name: 'local-llms', basePath: '/local-llms', slugsFile: 'src/lib/local-llms/slugs.ts' },
  { name: 'prompt-engineering', basePath: '/prompt-engineering', slugsFile: 'src/lib/prompt-engineering/slugs.ts' },
  { name: 'power-local-llm', basePath: '/power-local-llm', slugsFile: 'src/lib/power-local-llm/slugs.ts' },
  { name: 'balcony-solar', basePath: '/balcony-solar', slugsFile: 'src/lib/balcony-solar/slugs.ts' },
  { name: 'smart-home', basePath: '/smart-home', slugsFile: 'src/lib/smart-home/slugs.ts' },
  { name: 'prompt-bites', basePath: '/prompt-bites', slugsFile: 'src/lib/prompt-bites/slugs.ts' },
  { name: 'blog', basePath: '/blog', slugsFile: 'src/lib/blogSlugs.ts' },
]

// Declared exceptions — routes that are legitimately not N-way parity checked.
// Each entry needs a one-line justification. An undeclared asymmetry fails;
// an asymmetry that can't be justified in one line is a bug, not an exception
// (see spec). Keyed as `${cluster}:${slug}` or `${cluster}:${slug}:${locale}`.
const PARITY_EXCEPTIONS = {
  // (none declared yet — populate only with a one-line reason per entry)
}

function readLocales() {
  const src = readFileSync(path.join(ROOT, 'src/lib/i18n/constants.ts'), 'utf8')
  const m = src.match(/export const ALL_LANGS = \[([^\]]+)\]/)
  if (!m) throw new Error('Could not find ALL_LANGS in src/lib/i18n/constants.ts')
  return [...m[1].matchAll(/'([a-z-]+)'/g)].map((x) => x[1])
}

function readSlugs(slugsFile) {
  const src = readFileSync(path.join(ROOT, slugsFile), 'utf8')
  const re = /^\s+'([a-z0-9-]+)':\s*'[A-Za-z0-9-]+',?(?:\s*\/\/.*)?\s*$/gm
  const slugs = []
  let m
  while ((m = re.exec(src)) !== null) slugs.push(m[1])
  if (slugs.length === 0) {
    throw new Error(`Failed to parse slugs from ${slugsFile}`)
  }
  return slugs
}

async function waitForReady(url, deadline) {
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url, { method: 'HEAD' })
      if (res.status < 500) return true
    } catch {
      // server not up yet
    }
    await sleep(500)
  }
  return false
}

// Extract only genuine <script type="application/ld+json"> payloads —
// deliberately NOT a raw-HTML substring match, so the RSC hydration
// duplicate (self.__next_f.push(...)) is never picked up.
function extractLdJsonBlocks(html) {
  const blocks = []
  const re = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g
  let m
  while ((m = re.exec(html)) !== null) blocks.push(m[1])
  return blocks
}

// Collect only TOP-LEVEL @type values: the node itself, entries of a
// top-level array, or entries of a top-level @graph array. Does not recurse
// into nested properties (author, mainEntity, step, image, etc) — those
// legitimately vary in count/shape per locale.
function collectTopLevelTypes(parsed, types) {
  if (Array.isArray(parsed)) {
    for (const node of parsed) pushTypeOf(node, types)
    return
  }
  if (parsed && typeof parsed === 'object') {
    if (Array.isArray(parsed['@graph'])) {
      for (const node of parsed['@graph']) pushTypeOf(node, types)
      return
    }
    pushTypeOf(parsed, types)
  }
}

function pushTypeOf(node, types) {
  if (!node || typeof node !== 'object' || !('@type' in node)) return
  const t = Array.isArray(node['@type']) ? node['@type'] : [node['@type']]
  for (const ty of t) types.push(String(ty))
}

function multisetFromTypes(types) {
  const counts = new Map()
  for (const t of types) counts.set(t, (counts.get(t) || 0) + 1)
  return counts
}

async function fetchTypeMultiset(url) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)
  try {
    const res = await fetch(url, { signal: controller.signal })
    if (res.status === 404) return { status: 404 }
    if (res.status >= 400) return { status: res.status, error: `HTTP ${res.status}` }
    const html = await res.text()
    const types = []
    for (const block of extractLdJsonBlocks(html)) {
      try {
        collectTopLevelTypes(JSON.parse(block), types)
      } catch (err) {
        return { status: res.status, error: `JSON.parse failed on an ld+json block: ${err.message}` }
      }
    }
    return { status: res.status, multiset: multisetFromTypes(types) }
  } catch (err) {
    return { status: null, error: err.message }
  } finally {
    clearTimeout(timer)
  }
}

async function runPool(items, worker, concurrency) {
  const results = new Array(items.length)
  let next = 0
  async function runNext() {
    while (next < items.length) {
      const i = next++
      results[i] = await worker(items[i], i)
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, runNext))
  return results
}

// Presence of these types must match EN exactly (MISSING severity, blocks).
// Everything else is multiplicity-only (COUNT severity, report-only) — that
// covers repeatable top-level graph nodes like ImageObject as well as any
// type not in this list, regardless of whether it's 0-vs-N or N-vs-M.
const ARTICLE_LEVEL_TYPES = new Set([
  'TechArticle', 'FAQPage', 'HowTo', 'WebPage', 'ItemList', 'BreadcrumbList',
  'LearningResource', 'DefinedTerm', 'Article', 'BlogPosting',
])

function diffMultisets(enSet, locSet) {
  const missing = [] // article-level type present in EN, absent in locale
  const extraType = [] // article-level type present in locale, absent in EN
  const countDiffs = [] // any type, same presence, different multiplicity (or non-article-level type differing at all)
  const allTypes = new Set([...enSet.keys(), ...locSet.keys()])
  for (const t of allTypes) {
    const enCount = enSet.get(t) || 0
    const locCount = locSet.get(t) || 0
    if (enCount === locCount) continue

    if (ARTICLE_LEVEL_TYPES.has(t)) {
      const enHas = enCount > 0
      const locHas = locCount > 0
      if (enHas && !locHas) {
        missing.push(`${t} (EN:${enCount} vs locale:${locCount})`)
        continue
      }
      if (!enHas && locHas) {
        extraType.push(`${t} (EN:${enCount} vs locale:${locCount})`)
        continue
      }
      // Both present, different count (e.g. two BreadcrumbList nodes) —
      // that's still a count difference on an article-level type, not a
      // presence mismatch.
      countDiffs.push(`${t} (EN:${enCount} vs locale:${locCount})`)
    } else {
      countDiffs.push(`${t} (EN:${enCount} vs locale:${locCount})`)
    }
  }
  return { missing, extraType, countDiffs }
}

async function main() {
  if (process.env.VERCEL) {
    console.log('⏭ Skipping locale schema-parity check on Vercel (runs locally and in CI only).')
    return
  }
  if (!existsSync(path.join(ROOT, '.next'))) {
    console.error('✗ .next directory missing — run `npm run build` first.')
    process.exit(1)
  }

  const locales = readLocales()
  const nonEnLocales = locales.filter((l) => l !== 'en')
  console.log(`▶ Locales: ${locales.join(', ')} (from ALL_LANGS)`)

  for (const cluster of CLUSTERS) {
    cluster.slugs = readSlugs(cluster.slugsFile)
    console.log(`▶ Loaded ${cluster.slugs.length} slugs for ${cluster.name} from ${cluster.slugsFile}`)
  }

  console.log(`▶ Starting next start on port ${PORT}…`)
  const server = spawn('npx', ['next', 'start', '-p', PORT], {
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, NODE_ENV: 'production' },
    detached: true,
  })

  let serverOutput = ''
  server.stdout.on('data', (d) => { serverOutput += d.toString() })
  server.stderr.on('data', (d) => { serverOutput += d.toString() })

  let cleanedUp = false
  const cleanup = () => {
    if (cleanedUp) return
    cleanedUp = true
    if (!server.pid) return
    try {
      process.kill(-server.pid, 'SIGTERM')
    } catch {
      // group may already be gone
    }
    setTimeout(() => {
      try { process.kill(-server.pid, 'SIGKILL') } catch {}
    }, 3000).unref()
  }
  process.on('exit', cleanup)
  for (const sig of ['SIGINT', 'SIGTERM', 'SIGHUP']) {
    process.on(sig, () => {
      cleanup()
      process.exit(sig === 'SIGINT' ? 130 : 143)
    })
  }
  process.on('uncaughtException', (err) => {
    console.error('✗ uncaughtException:', err)
    cleanup()
    process.exit(1)
  })
  process.on('unhandledRejection', (err) => {
    console.error('✗ unhandledRejection:', err)
    cleanup()
    process.exit(1)
  })

  const ready = await waitForReady(HOST, Date.now() + READY_TIMEOUT_MS)
  if (!ready) {
    console.error(`✗ next start did not become ready within ${READY_TIMEOUT_MS}ms`)
    console.error(serverOutput.slice(-2000))
    cleanup()
    process.exit(1)
  }
  console.log('✓ Server ready\n')

  const missingFindings = [] // blocking severity
  const countFindings = [] // report-only severity
  const notApplicable = []
  const errors = []
  let checked = 0

  for (const cluster of CLUSTERS) {
    // EN baseline first, sequentially isn't required but keep it simple and
    // bounded by the same pool.
    const enResults = await runPool(cluster.slugs, async (slug) => {
      const url = `${HOST}${cluster.basePath}/${slug}`
      const result = await fetchTypeMultiset(url)
      return { slug, url, result }
    }, CONCURRENCY)

    const enBySlug = new Map(enResults.map((r) => [r.slug, r]))

    for (const { slug, url, result } of enResults) {
      if (result.status === 404) {
        notApplicable.push({ cluster: cluster.name, slug, locale: 'en', reason: '404 on EN baseline itself' })
        continue
      }
      if (result.error) {
        errors.push({ cluster: cluster.name, slug, locale: 'en', url, error: result.error })
      }
    }

    for (const locale of nonEnLocales) {
      const localeResults = await runPool(cluster.slugs, async (slug) => {
        const exceptionKey3 = `${cluster.name}:${slug}:${locale}`
        const exceptionKey2 = `${cluster.name}:${slug}`
        if (PARITY_EXCEPTIONS[exceptionKey3] || PARITY_EXCEPTIONS[exceptionKey2]) {
          return { slug, skipped: true }
        }
        const url = `${HOST}/${locale}${cluster.basePath}/${slug}`
        const result = await fetchTypeMultiset(url)
        return { slug, url, result }
      }, CONCURRENCY)

      for (const entry of localeResults) {
        checked++
        if (entry.skipped) continue
        const { slug, url, result } = entry
        const enEntry = enBySlug.get(slug)

        if (result.status === 404) {
          notApplicable.push({ cluster: cluster.name, slug, locale, reason: '404 — not rendered for this locale' })
          continue
        }
        if (result.error) {
          errors.push({ cluster: cluster.name, slug, locale, url, error: result.error })
          continue
        }
        if (!enEntry || enEntry.result.status === 404 || enEntry.result.error) {
          // Can't compare against a baseline that itself failed/404'd.
          continue
        }

        const { missing, extraType, countDiffs } = diffMultisets(enEntry.result.multiset, result.multiset)
        if (missing.length > 0 || extraType.length > 0) {
          missingFindings.push({ cluster: cluster.name, slug, locale, missing, extraType })
        }
        if (countDiffs.length > 0) {
          countFindings.push({ cluster: cluster.name, slug, locale, countDiffs })
        }
      }
    }
    console.log(`  ✓ ${cluster.name}: checked`)
  }

  cleanup()

  console.log(`\n▶ ${checked} locale/slug combination(s) checked across ${CLUSTERS.length} clusters`)

  if (Object.keys(PARITY_EXCEPTIONS).length > 0) {
    console.log(`\n▶ Declared exceptions (${Object.keys(PARITY_EXCEPTIONS).length}):`)
    for (const [key, reason] of Object.entries(PARITY_EXCEPTIONS)) {
      console.log(`  ${key} — ${reason}`)
    }
  }

  if (notApplicable.length > 0) {
    console.log(`\n▶ ${notApplicable.length} route(s) not applicable (404, not a parity failure):`)
    for (const n of notApplicable) {
      console.log(`  ${n.cluster}/${n.slug} [${n.locale}] — ${n.reason}`)
    }
  }

  if (errors.length > 0) {
    console.log(`\n⚠️  ${errors.length} route(s) errored during fetch/parse (not counted as mismatches):`)
    for (const e of errors) {
      console.log(`  ${e.cluster}/${e.slug} [${e.locale}] ${e.url} — ${e.error}`)
    }
  }

  if (countFindings.length > 0) {
    const byCluster = new Map()
    for (const f of countFindings) byCluster.set(f.cluster, (byCluster.get(f.cluster) || 0) + 1)
    console.log(`\nℹ️  ${countFindings.length} COUNT-severity difference(s) (report-only, never blocks — article-length variation):`)
    for (const [cluster, n] of byCluster) console.log(`  ${cluster}: ${n}`)
    console.log('  (per-finding detail omitted from default output — these don\'t gate anything;')
    console.log('   rerun with PARITY_VERBOSE=1 to see every one.)')
    if (process.env.PARITY_VERBOSE) {
      for (const f of countFindings) {
        console.log(`    ${f.cluster}/${f.slug} [${f.locale}] — ${f.countDiffs.join(', ')}`)
      }
    }
  }

  if (missingFindings.length === 0) {
    console.log('\n✅ No MISSING-severity drift found. Every locale matches EN on article-level type presence')
    console.log('   (TechArticle/FAQPage/HowTo/WebPage/ItemList/BreadcrumbList/LearningResource/DefinedTerm/Article/BlogPosting).')
    process.exit(0)
  }

  const byClusterMissing = new Map()
  for (const f of missingFindings) byClusterMissing.set(f.cluster, (byClusterMissing.get(f.cluster) || 0) + 1)

  console.log(`\n❌ ${missingFindings.length} MISSING-severity mismatch(es) (blocking):\n`)
  console.log('  By cluster:')
  for (const [cluster, n] of byClusterMissing) console.log(`    ${cluster}: ${n}`)
  console.log('')
  for (const m of missingFindings) {
    console.log(`  ${m.cluster}/${m.slug} [${m.locale}]`)
    if (m.missing.length > 0) console.log(`    missing (in EN, not here): ${m.missing.join(', ')}`)
    if (m.extraType.length > 0) console.log(`    extra (here, not in EN):   ${m.extraType.join(', ')}`)
  }

  console.log('\n❌ Build blocked: MISSING-severity schema-shape drift found above. Fix the locale page or add a')
  console.log('   justified PARITY_EXCEPTIONS entry — an undeclared asymmetry is a bug, not a variant.')
  process.exit(1)
}

main().catch((err) => {
  console.error('✗ validate-locale-schema-parity crashed:', err)
  process.exit(1)
})
