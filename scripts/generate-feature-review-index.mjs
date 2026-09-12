#!/usr/bin/env node
// Generates src/generated/feature-review-index.json — the AUTHORITATIVE map
// from each Local AI App Directory tool (src/lib/power-local-llm/apps/*.ts,
// one ToolRecord per tool, aggregated in apps-barrel.ts's `localAiApps`) to
// its own dedicated, single-subject PromptQuorum review article, if one
// exists.
//
// Source of truth: the ToolRecord's own `reviewSlug` field (the article's
// barrel-key/filename, e.g. 'gpt4all-review'), which the tool's author sets
// deliberately once a dedicated review is written. This is NOT the same
// mechanism as tool-article-index.json (scripts/generate-tool-article-index.mjs),
// which fuzzy-matches tool NAMES against article prose/headings to answer
// "which articles mention this tool" — a heuristic that has no guarantee the
// matched article's primary subject is actually that tool. This index answers
// a narrower, stricter question: "does this exact tool have its own dedicated
// review, and if so, what is its live URL" — used for the "Feature Article"
// badge/link on the directory card and drawer.
//
// For each app with `reviewSlug` set, this script:
//   1. Looks up that key in both clusters that host app reviews —
//      power-local-llm and local-llms — via their articles-barrel.ts content
//      maps (the article must actually exist and be registered there; a
//      `reviewSlug` pointing at nothing is a build-time warning, not a
//      failure — same tolerance as tool-article-index.json's own reviewSlug
//      pin).
//   2. Resolves the public URL slug for that article from the cluster's
//      slugs.ts (`{cluster}_SLUG_TO_KEY`: urlSlug -> article object key) —
//      the URL slug and the barrel key are NOT always identical (e.g.
//      AutoGPT's review key is 'autogpt-local-review-2026' but its live URL
//      is /power-local-llm/autogpt-local-review).
//
// Usage:
//   node scripts/generate-feature-review-index.mjs          # write the file
//   node scripts/generate-feature-review-index.mjs --check  # fail if stale

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OUTPUT_PATH = path.join(ROOT, 'src/generated/feature-review-index.json')

const jiti = createJiti(import.meta.url, { tsconfigPaths: true })

// Clusters known to host dedicated app-review articles, with the module
// paths for their content barrel and their urlSlug -> articleKey map.
const CLUSTERS = [
  {
    name: 'power-local-llm',
    contentModule: '@/lib/power-local-llm/articles-barrel',
    contentExport: 'powerLLMContent',
    slugsModule: '@/lib/power-local-llm/slugs',
    slugsExport: 'POWER_LLM_SLUG_TO_KEY',
  },
  {
    name: 'local-llms',
    contentModule: '@/lib/local-llms/articles-barrel',
    contentExport: 'llmContent',
    slugsModule: '@/lib/local-llms/slugs',
    slugsExport: 'LLM_SLUG_TO_KEY',
  },
]

function enUrl(cluster, urlSlug) {
  return `/${cluster}/${urlSlug}`
}

async function main() {
  // ── 1. Tool list, read live from apps-barrel.ts's localAiApps ──
  const { localAiApps } = await jiti.import('@/lib/power-local-llm/apps-barrel')
  if (!Array.isArray(localAiApps) || localAiApps.length === 0) {
    throw new Error('Could not load localAiApps from apps-barrel.ts')
  }

  const appsWithReviewSlug = []
  const seen = new Set()
  for (const tool of localAiApps) {
    const slug = (tool.slug ?? '').trim()
    if (!slug || seen.has(slug)) continue
    seen.add(slug)
    if (tool.reviewSlug) appsWithReviewSlug.push({ appSlug: slug, appName: tool.name, reviewSlug: tool.reviewSlug })
  }
  console.log(`Found ${appsWithReviewSlug.length} apps with a reviewSlug set.`)

  // ── 2. Load each cluster's content map + urlSlug->key map ──
  const clusterData = []
  for (const cluster of CLUSTERS) {
    const contentMod = await jiti.import(cluster.contentModule)
    const slugsMod = await jiti.import(cluster.slugsModule)
    const contentMap = contentMod[cluster.contentExport]
    const slugToKey = slugsMod[cluster.slugsExport]
    if (!contentMap) throw new Error(`Could not load ${cluster.contentExport} from ${cluster.contentModule}`)
    if (!slugToKey) throw new Error(`Could not load ${cluster.slugsExport} from ${cluster.slugsModule}`)

    // Reverse map: article key -> its (first) public URL slug.
    const keyToUrlSlug = new Map()
    for (const [urlSlug, key] of Object.entries(slugToKey)) {
      if (!keyToUrlSlug.has(key)) keyToUrlSlug.set(key, urlSlug)
    }
    clusterData.push({ name: cluster.name, contentMap, keyToUrlSlug })
  }

  // ── 3. Resolve each app's reviewSlug against both clusters ──
  const result = {}
  for (const { appSlug, appName, reviewSlug } of appsWithReviewSlug) {
    let resolved = null
    for (const cluster of clusterData) {
      const en = cluster.contentMap[reviewSlug]?.en
      if (!en) continue // not registered / no content in this cluster
      const urlSlug = cluster.keyToUrlSlug.get(reviewSlug)
      if (!urlSlug) {
        console.warn(`⚠️  ${appName} (${appSlug}): reviewSlug '${reviewSlug}' has content in ${cluster.name}'s barrel but no entry in its slugs.ts — cannot resolve a public URL.`)
        continue
      }
      resolved = { cluster: cluster.name, urlSlug, url: enUrl(cluster.name, urlSlug) }
      break
    }
    if (resolved) {
      result[appSlug] = resolved
    } else {
      console.warn(`⚠️  ${appName} (${appSlug}): reviewSlug '${reviewSlug}' not found registered in power-local-llm or local-llms — check the slug.`)
    }
  }

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true })
  const json = JSON.stringify(result, null, 2) + '\n'

  if (process.argv.includes('--check')) {
    const existing = fs.existsSync(OUTPUT_PATH) ? fs.readFileSync(OUTPUT_PATH, 'utf-8') : null
    if (existing !== json) {
      console.error('')
      console.error('❌ src/generated/feature-review-index.json is stale.')
      console.error('   Run `node scripts/generate-feature-review-index.mjs` and commit the result.')
      process.exit(1)
    }
    console.log('✅ feature-review-index.json is up to date')
    return
  }

  fs.writeFileSync(OUTPUT_PATH, json)
  console.log(`✅ Wrote ${OUTPUT_PATH} (${Object.keys(result).length} apps with a resolved dedicated review)`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
