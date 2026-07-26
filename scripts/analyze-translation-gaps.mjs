#!/usr/bin/env node
// scripts/analyze-translation-gaps.mjs
//
// Translation completeness gap finder. Loads each article module as a REAL
// evaluated object (via jiti, which transpiles TS/ESM on the fly and resolves
// the '@/' path alias exactly like the app does) and structurally counts
// fields per locale — it does not regex-scan the .ts source text.
//
// WHY THE REWRITE: the previous regex-based version located each locale's
// text with an indent-grouping heuristic over raw source, then counted
// occurrences of `fieldName:` inside that text slice. That produced a false
// positive of 96 missing instances (25% of the whole worklist) on
// prompt-engineering/context-windows-explained.ts, whose non-EN locale
// blocks are `sections: contextWindowsDe` — an IMPORTED reference, not
// inline text — so the regex saw zero occurrences of every field in every
// non-EN block despite 6 of 8 locales already being fully translated. The
// real gap was 16 instances (two whole sections missing site-wide), not 96.
//
// Loading the real object removes this whole class of bug, not just the
// import case: by the time we inspect `article[lang]`, spreads are already
// merged, imports are already resolved, and nested objects that happen to
// use locale-like keys at a non-top-level depth (e.g. a `quickAnswerTop: {
// en: {...}, de: {...} }` sub-object) can't be confused with the top-level
// per-locale blocks, because we index the real object by its real keys
// instead of guessing block boundaries from source indentation.
//
// ── What this SCANS FOR ─────────────────────────────────────────────────
//   For every article module under the 6 cluster `articles/` directories,
//   for every field in FIELDS below, the number of times that field's key
//   appears ANYWHERE in the nested `article.en` object vs. the same field's
//   key count in `article[locale]`, for each of the 8 non-EN locales. A
//   locale whose count is lower than EN's is reported as a gap.
//
//   VISIBLE fields (rendered to the reader): numberedItems, tableFormat,
//   faqs, contextTable
//   SCHEMA fields (JSON-LD only, invisible to readers): itemListSchema,
//   howToName
//
// ── What this DOES NOT detect ───────────────────────────────────────────
//   - Content QUALITY or translation correctness — a locale with the right
//     field counts but bad/lazy translation text reports clean. That's a
//     human review problem, not this script's.
//   - Fields present in EN with a count of 0 aren't compared at all (an
//     article that doesn't use a field anywhere isn't "missing" it).
//   - A field appearing MORE times in a locale than in EN is not flagged —
//     this script only measures backport debt (locale short of EN), not
//     symmetric parity. (validate-locale-schema-parity.mjs covers symmetric
//     JSON-LD @type parity separately, at the rendered-HTML level.)
//   - Modules that fail to import (a real code error, a missing runtime
//     dependency inside the article file, etc.) are reported to stderr as
//     warnings and skipped, not silently dropped — check the warning list
//     on every run.
//   - Non-string/non-plain-object values (functions, class instances) won't
//     be walked, but no article file has ever needed one — plain data only.
//
// Run: node scripts/analyze-translation-gaps.mjs > TRANSLATION_GAPS_WORKLIST.md

import { createJiti } from 'jiti'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const jiti = createJiti(import.meta.url, {
  alias: { '@': path.join(ROOT, 'src') },
  interopDefault: true,
  fsCache: false,
})

const LANGS = ['de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
const VISIBLE = ['numberedItems', 'tableFormat', 'faqs', 'contextTable']
const SCHEMA = ['itemListSchema', 'howToName']
const FIELDS = [...VISIBLE, ...SCHEMA]

const CLUSTER_DIRS = [
  'src/lib/local-llms/articles',
  'src/lib/prompt-engineering/articles',
  'src/lib/power-local-llm/articles',
  'src/lib/prompt-bites/articles',
  'src/lib/smart-home/articles',
  'src/lib/balcony-solar/articles',
]

// Recursively counts every object key named `keyName` anywhere under `node`.
// `seen` guards against reference cycles (none expected in plain data, but
// cheap insurance against a hang if one is ever introduced).
function countKeyOccurrences(node, keyName, seen) {
  if (node === null || typeof node !== 'object') return 0
  if (seen.has(node)) return 0
  seen.add(node)
  let count = 0
  if (Array.isArray(node)) {
    for (const item of node) count += countKeyOccurrences(item, keyName, seen)
    return count
  }
  for (const [k, v] of Object.entries(node)) {
    if (k === keyName) count++
    count += countKeyOccurrences(v, keyName, seen)
  }
  return count
}

async function analyzeFile(absPath, clusterName, fileName) {
  let mod
  try {
    mod = await jiti.import(absPath)
  } catch (err) {
    return { error: `import failed: ${err.message}` }
  }
  const article = mod?.article
  if (!article || typeof article !== 'object') return null
  if (!article.en || typeof article.en !== 'object') return null

  const langsPresent = Object.keys(article).filter((l) => l === 'en' || LANGS.includes(l))
  if (langsPresent.length < 5) return null // mirrors old quality gate: skip sparse/non-standard files

  const rec = {
    cluster: clusterName,
    file: fileName.replace(/\.ts$/, ''),
    gaps: {},
    visMissing: 0,
    schMissing: 0,
    locales: new Set(),
  }

  for (const field of FIELDS) {
    const enCount = countKeyOccurrences(article.en, field, new Set())
    if (!enCount) continue
    for (const lang of LANGS) {
      if (!article[lang]) continue
      const c = countKeyOccurrences(article[lang], field, new Set())
      if (c < enCount) {
        const miss = enCount - c
        ;(rec.gaps[field] ||= []).push(`${lang}(${c}/${enCount})`)
        rec.locales.add(lang)
        if (VISIBLE.includes(field)) rec.visMissing += miss
        else rec.schMissing += miss
      }
    }
  }

  return rec.visMissing || rec.schMissing ? rec : null
}

async function main() {
  const out = []
  const warnings = []

  for (const dir of CLUSTER_DIRS) {
    const abs = path.join(ROOT, dir)
    if (!fs.existsSync(abs)) continue
    const clusterName = dir.split('/')[2]
    for (const file of fs.readdirSync(abs).filter((f) => f.endsWith('.ts'))) {
      const rec = await analyzeFile(path.join(abs, file), clusterName, file)
      if (rec?.error) {
        warnings.push(`${dir}/${file}: ${rec.error}`)
        continue
      }
      if (rec) out.push(rec)
    }
  }

  out.sort((a, b) => b.visMissing + b.schMissing - (a.visMissing + a.schMissing))

  if (warnings.length > 0) {
    console.error(`⚠️  ${warnings.length} file(s) failed to import — excluded from results, not counted as clean:`)
    for (const w of warnings) console.error(`  ${w}`)
    console.error('')
  }

  console.log('# Translation completeness gaps — worklist')
  console.log('')
  console.log('Generated by loading each article module as a real evaluated object')
  console.log('(via jiti) and comparing per-locale field key counts against the `en:`')
  console.log('block — not by regex-scanning source text. See the header comment in')
  console.log('scripts/analyze-translation-gaps.mjs for exactly what this does and')
  console.log("doesn't detect.")
  console.log('')
  console.log('**Visible content** (rendered to the reader):')
  console.log('`numberedItems` (step lists), `tableFormat` (comparison tables),')
  console.log('`faqs` (Q&A blocks), `contextTable`')
  console.log('')
  console.log('**Schema only** (JSON-LD, invisible to readers):')
  console.log('`itemListSchema`, `howToName`')
  console.log('')
  console.log('Notation: `de(0/7)` = the German block has 0 where English has 7.')
  console.log('')
  console.log('Sorted by total missing instances.')
  console.log('')
  console.log('| # | cluster | file | visible | schema | locales | fields affected |')
  console.log('|---|---|---|---|---|---|---|')
  out.forEach((r, i) =>
    console.log(
      `| ${i + 1} | ${r.cluster} | ${r.file} | ${r.visMissing} | ${r.schMissing} | ${r.locales.size} | ${Object.entries(r.gaps)
        .map(([k, v]) => `${k}: ${v.join(',')}`)
        .join(' • ')} |`
    )
  )
  console.log('')
  console.log(
    `TOTALS  files: ${out.length}  visible-content instances: ${out.reduce((a, r) => a + r.visMissing, 0)}  schema-only instances: ${out.reduce((a, r) => a + r.schMissing, 0)}`
  )
}

main().catch((err) => {
  console.error('✗ analyze-translation-gaps crashed:', err)
  process.exit(1)
})
