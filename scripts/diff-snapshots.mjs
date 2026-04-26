#!/usr/bin/env node

/**
 * Diff two snapshot directories produced by snapshot-routes.mjs.
 *
 * Usage:
 *   node scripts/diff-snapshots.mjs --before /tmp/baseline-pre --after /tmp/baseline-post
 *
 * Tier rules:
 *   Tier 0 (sitemap)  — _sitemap.xml: byte-diff
 *   Tier 1 (PE pages) — HTML byte-diff + JSON-LD byte-diff
 *   Tier 2 (other)    — JSON-LD byte-diff + HTML metadata diff (title, description, canonical)
 *   URL set changes   — additions or removals are hard-fail
 *
 * Output:
 *   stdout: human-readable summary with diff details (truncated to 10 examples per category)
 *   <after>/_diff-detail.log: full per-URL diff log (when issues exist)
 *
 * Exit codes:
 *   0 — no issues at any tier
 *   1 — issues found
 *   2 — usage error
 */

import fs from 'node:fs/promises'
import path from 'node:path'

// ─── Argument parsing ──────────────────────────────────────────────

function parseArgs(argv) {
  const args = { before: null, after: null }
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--before') args.before = argv[++i]
    else if (argv[i] === '--after') args.after = argv[++i]
    else if (argv[i] === '--help' || argv[i] === '-h') {
      console.log('Usage: diff-snapshots.mjs --before <dir> --after <dir>')
      process.exit(0)
    }
  }
  if (!args.before || !args.after) {
    console.error('Error: --before <dir> and --after <dir> are required')
    process.exit(2)
  }
  return args
}

// ─── Helpers ───────────────────────────────────────────────────────

async function loadManifest(dir) {
  const json = await fs.readFile(path.join(dir, 'manifest.json'), 'utf-8')
  return JSON.parse(json)
}

async function readMaybe(p) {
  try {
    return await fs.readFile(p, 'utf-8')
  } catch (e) {
    if (e.code === 'ENOENT') return null
    throw e
  }
}

function extractMeta(html) {
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? ''
  const description =
    html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)?.[1] ?? ''
  const canonical =
    html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/i)?.[1] ?? ''
  return { title, description, canonical }
}

function truncate(s, n) {
  if (s.length <= n) return s
  return s.slice(0, n) + '… (truncated)'
}

// ─── Main ──────────────────────────────────────────────────────────

async function main() {
  const args = parseArgs(process.argv)

  console.log(`🔬 Diff snapshots`)
  console.log(`   before: ${args.before}`)
  console.log(`   after:  ${args.after}`)
  console.log()

  const beforeManifest = await loadManifest(args.before)
  const afterManifest = await loadManifest(args.after)

  const beforeMap = new Map(beforeManifest.map((m) => [m.url, m]))
  const afterMap = new Map(afterManifest.map((m) => [m.url, m]))

  const additions = [...afterMap.keys()].filter((u) => !beforeMap.has(u))
  const removals = [...beforeMap.keys()].filter((u) => !afterMap.has(u))
  const common = [...beforeMap.keys()].filter((u) => afterMap.has(u))

  const detailLog = []
  let sitemapDiff = false
  let urlSetDiff = additions.length + removals.length
  let tier1HtmlDiffs = 0
  let tier1JsonLdDiffs = 0
  let tier2JsonLdDiffs = 0
  let tier2MetaDiffs = 0

  // Tier 0: sitemap byte-diff
  const beforeSitemap = await readMaybe(path.join(args.before, '_sitemap.xml'))
  const afterSitemap = await readMaybe(path.join(args.after, '_sitemap.xml'))
  if (beforeSitemap === null || afterSitemap === null) {
    console.log(`⚠️  SITEMAP: missing in one or both directories`)
    sitemapDiff = true
  } else if (beforeSitemap !== afterSitemap) {
    console.log(`❌ SITEMAP: byte-diff detected`)
    detailLog.push('=== SITEMAP DIFF ===\nFiles _sitemap.xml differ; inspect manually.')
    sitemapDiff = true
  } else {
    console.log(`✅ SITEMAP: identical (${beforeSitemap.length} bytes)`)
  }

  // URL set check
  if (urlSetDiff > 0) {
    console.log(`❌ URL SET CHANGED: +${additions.length} additions, -${removals.length} removals`)
    additions.slice(0, 10).forEach((u) => console.log(`   + ${u}`))
    if (additions.length > 10) console.log(`   + ... and ${additions.length - 10} more`)
    removals.slice(0, 10).forEach((u) => console.log(`   - ${u}`))
    if (removals.length > 10) console.log(`   - ... and ${removals.length - 10} more`)
    detailLog.push(
      '=== URL SET CHANGES ===',
      ...additions.map((u) => `+ ${u}`),
      ...removals.map((u) => `- ${u}`),
    )
  } else {
    console.log(`✅ URL SET: ${common.length} URLs unchanged`)
  }

  // Per-URL diffs
  const tier1HtmlExamples = []
  const tier1JsonLdExamples = []
  const tier2JsonLdExamples = []
  const tier2MetaExamples = []

  for (const url of common) {
    const m = beforeMap.get(url)
    const sha = m.sha
    const tier = m.tier

    const htmlBefore = await readMaybe(path.join(args.before, 'pages', `${sha}.html`))
    const htmlAfter = await readMaybe(path.join(args.after, 'pages', `${sha}.html`))
    const jsonldBefore = await readMaybe(path.join(args.before, 'jsonld', `${sha}.json`))
    const jsonldAfter = await readMaybe(path.join(args.after, 'jsonld', `${sha}.json`))

    if (htmlBefore === null || htmlAfter === null) {
      detailLog.push(`MISSING HTML for ${url}`)
      continue
    }

    if (tier === 1) {
      // Strict: byte-diff HTML and JSON-LD
      if (htmlBefore !== htmlAfter) {
        tier1HtmlDiffs++
        if (tier1HtmlExamples.length < 10) tier1HtmlExamples.push(url)
        detailLog.push(`TIER1 HTML diff: ${url} (before=${htmlBefore.length}B, after=${htmlAfter.length}B)`)
      }
      if ((jsonldBefore ?? '') !== (jsonldAfter ?? '')) {
        tier1JsonLdDiffs++
        if (tier1JsonLdExamples.length < 10) tier1JsonLdExamples.push(url)
        detailLog.push(`TIER1 JSON-LD diff: ${url}`)
      }
    } else {
      // Lenient: JSON-LD byte-diff + HTML metadata only
      if ((jsonldBefore ?? '') !== (jsonldAfter ?? '')) {
        tier2JsonLdDiffs++
        if (tier2JsonLdExamples.length < 10) tier2JsonLdExamples.push(url)
        detailLog.push(`TIER2 JSON-LD diff: ${url}`)
      }
      const metaBefore = extractMeta(htmlBefore)
      const metaAfter = extractMeta(htmlAfter)
      for (const k of ['title', 'description', 'canonical']) {
        if (metaBefore[k] !== metaAfter[k]) {
          tier2MetaDiffs++
          if (tier2MetaExamples.length < 10) {
            tier2MetaExamples.push(`${url} [${k}]`)
          }
          detailLog.push(
            `TIER2 ${k} diff: ${url}`,
            `  before: ${truncate(metaBefore[k], 200)}`,
            `  after:  ${truncate(metaAfter[k], 200)}`,
          )
        }
      }
    }
  }

  // Tier 1 examples
  if (tier1HtmlDiffs > 0) {
    console.log()
    console.log(`❌ TIER 1 HTML diffs: ${tier1HtmlDiffs}`)
    tier1HtmlExamples.forEach((u) => console.log(`   • ${u}`))
    if (tier1HtmlDiffs > 10) console.log(`   ... and ${tier1HtmlDiffs - 10} more`)
  }
  if (tier1JsonLdDiffs > 0) {
    console.log()
    console.log(`❌ TIER 1 JSON-LD diffs: ${tier1JsonLdDiffs}`)
    tier1JsonLdExamples.forEach((u) => console.log(`   • ${u}`))
    if (tier1JsonLdDiffs > 10) console.log(`   ... and ${tier1JsonLdDiffs - 10} more`)
  }

  // Tier 2 examples
  if (tier2JsonLdDiffs > 0) {
    console.log()
    console.log(`❌ TIER 2 JSON-LD diffs: ${tier2JsonLdDiffs}`)
    tier2JsonLdExamples.forEach((u) => console.log(`   • ${u}`))
    if (tier2JsonLdDiffs > 10) console.log(`   ... and ${tier2JsonLdDiffs - 10} more`)
  }
  if (tier2MetaDiffs > 0) {
    console.log()
    console.log(`❌ TIER 2 metadata diffs (title/description/canonical): ${tier2MetaDiffs}`)
    tier2MetaExamples.forEach((u) => console.log(`   • ${u}`))
    if (tier2MetaDiffs > 10) console.log(`   ... and ${tier2MetaDiffs - 10} more`)
  }

  // Summary
  const totalIssues =
    (sitemapDiff ? 1 : 0) +
    urlSetDiff +
    tier1HtmlDiffs +
    tier1JsonLdDiffs +
    tier2JsonLdDiffs +
    tier2MetaDiffs

  console.log()
  console.log('═══ SUMMARY ═══')
  console.log(`  Sitemap byte-diff:        ${sitemapDiff ? '❌ DIFFERS' : '✅ identical'}`)
  console.log(`  URL set changes:          +${additions.length} -${removals.length}`)
  console.log(`  Tier 1 HTML diffs:        ${tier1HtmlDiffs}`)
  console.log(`  Tier 1 JSON-LD diffs:     ${tier1JsonLdDiffs}`)
  console.log(`  Tier 2 JSON-LD diffs:     ${tier2JsonLdDiffs}`)
  console.log(`  Tier 2 metadata diffs:    ${tier2MetaDiffs}`)
  console.log(`  Total issues:             ${totalIssues}`)

  // Write detail log if there were issues
  if (detailLog.length > 0) {
    const logPath = path.join(args.after, '_diff-detail.log')
    await fs.writeFile(logPath, detailLog.join('\n') + '\n')
    console.log(`  Detail log:               ${logPath}`)
  }

  process.exit(totalIssues > 0 ? 1 : 0)
}

main().catch((e) => {
  console.error('Diff failed:', e.message)
  process.exit(1)
})
