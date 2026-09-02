#!/usr/bin/env node
// Generates src/generated/tool-article-index.json — maps each tool listed in
// the Local LLM Software Directory (src/lib/power-local-llm/articles/
// local-llm-software-directory-2026.ts) to the site's own local-llms /
// power-local-llm articles that discuss it, sorted by importance. Powers the
// "Articles about {tool}" collapsible block on the directory page
// (PowerLocalLLMPostClient.tsx, itemHeadings render path).
//
// Tool list: read live from the directory article's EN sections (columns[0]
// === 'Tool') — never hardcoded, so it stays in sync as the directory is
// edited.
//
// Matching: a case-insensitive whole-word/phrase scan of each candidate
// article file's raw source text (all locale blocks, not just EN) against
// each tool name. Cheap and sufficient here — tool names are proper nouns
// kept in Latin script across locales, so cross-locale false positives are
// unlikely. Ambiguous short/common-word tool names (e.g. "Jan") are printed
// as warnings for manual spot-check, not blocked.
//
// Sorting: <=3 matches for a tool → newest dateModified first. >3 matches →
// ranked by GSC clicks from docs/gsc-page-performance.json (a point-in-time
// snapshot; see that file's header for how to refresh it), joined on
// (cluster, slug); articles with no GSC entry (new/unindexed) sort last,
// ordered among themselves by dateModified. Raw click counts are never
// written to the output — they are an internal ranking signal only.
//
// Usage:
//   node scripts/generate-tool-article-index.mjs          # write the file
//   node scripts/generate-tool-article-index.mjs --check  # fail if stale

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OUTPUT_PATH = path.join(ROOT, 'src/generated/tool-article-index.json')
const GSC_PATH = path.join(ROOT, 'docs/gsc-page-performance.json')
const DIRECTORY_SLUG = 'local-llm-software-directory-2026'
const MAX_VISIBLE = 12

const jiti = createJiti(import.meta.url, { tsconfigPaths: true })

const CLUSTERS = [
  { name: 'local-llms', dir: 'src/lib/local-llms/articles' },
  { name: 'power-local-llm', dir: 'src/lib/power-local-llm/articles' },
]

// Short or dictionary-word tool names that risk false-positive matches
// against ordinary prose — flagged for a human spot-check, not blocked.
const COMMON_WORDS = new Set([
  'jan', 'bark', 'maid', 'big', 'draw', 'page', 'code', 'chat', 'agent',
  'continue', 'cline', 'leon', 'tabby', 'twinny', 'khoj', 'quivr',
])

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function isAmbiguous(name) {
  if (name.length < 5) return true
  const words = name.toLowerCase().split(/\s+/)
  return words.every((w) => COMMON_WORDS.has(w))
}

function enUrl(cluster, slug) {
  return `/${cluster}/${slug}`
}

async function main() {
  // ── 1. Tool list, read live from the directory article's EN sections ──
  const { powerLLMContent } = await jiti.import('@/lib/power-local-llm/articles-barrel')
  const directoryEn = powerLLMContent[DIRECTORY_SLUG]?.en
  if (!directoryEn) {
    throw new Error(`Could not load EN content for ${DIRECTORY_SLUG} from the power-local-llm barrel`)
  }

  const toolNames = []
  const seen = new Set()
  for (const section of Object.values(directoryEn.sections ?? {})) {
    if (!section?.itemHeadings || !section.rows || !section.columns) continue
    if (section.columns[0] !== 'Tool') continue
    for (const row of section.rows) {
      const name = (row['Tool'] ?? '').replace(/\*\*/g, '').trim()
      if (!name || seen.has(name)) continue
      seen.add(name)
      toolNames.push(name)
    }
  }
  console.log(`Found ${toolNames.length} unique tools in the directory.`)

  const ambiguous = toolNames.filter(isAmbiguous)
  if (ambiguous.length) {
    console.warn('\n⚠️  Ambiguous tool names — spot-check their matches before shipping:')
    for (const name of ambiguous) console.warn(`   - ${name}`)
    console.warn('')
  }

  // ── 2. Candidate articles ──
  const { llmContent } = await jiti.import('@/lib/local-llms/articles-barrel')
  const contentByCluster = { 'local-llms': llmContent, 'power-local-llm': powerLLMContent }

  const candidates = []
  for (const cluster of CLUSTERS) {
    const contentMap = contentByCluster[cluster.name]
    const dirPath = path.join(ROOT, cluster.dir)
    for (const file of fs.readdirSync(dirPath)) {
      if (!file.endsWith('.ts')) continue
      const slug = file.replace(/\.ts$/, '')
      if (cluster.name === 'power-local-llm' && slug === DIRECTORY_SLUG) continue
      const en = contentMap[slug]?.en
      if (!en) continue // e.g. slugs registered but not yet written (Coming Soon)
      candidates.push({
        cluster: cluster.name,
        slug,
        title: en.title ?? slug,
        dateModified: en.dateModified ?? en.publishDate ?? null,
        rawText: fs.readFileSync(path.join(dirPath, file), 'utf-8'),
      })
    }
  }
  console.log(`Scanning ${candidates.length} candidate articles (local-llms + power-local-llm).`)

  // ── 3. Match: case-insensitive whole-word/phrase scan of raw file text ──
  const index = {}
  for (const toolName of toolNames) {
    const pattern = new RegExp(`(?<![A-Za-z0-9])${escapeRegex(toolName)}(?![A-Za-z0-9])`, 'i')
    const matches = candidates
      .filter((c) => pattern.test(c.rawText))
      .map((c) => ({
        cluster: c.cluster,
        slug: c.slug,
        title: c.title,
        url: enUrl(c.cluster, c.slug),
        dateModified: c.dateModified,
      }))
    if (matches.length > 0) index[toolName] = matches
  }

  // ── 4. Sort + cap ──
  const gsc = JSON.parse(fs.readFileSync(GSC_PATH, 'utf-8'))
  const clicksByKey = new Map(gsc.pages.map((p) => [`${p.cluster}/${p.slug}`, p.clicks]))

  const result = {}
  for (const [toolName, list] of Object.entries(index)) {
    if (list.length <= 3) {
      list.sort((a, b) => (b.dateModified ?? '').localeCompare(a.dateModified ?? ''))
    } else {
      list.sort((a, b) => {
        const clicksA = clicksByKey.get(`${a.cluster}/${a.slug}`)
        const clicksB = clicksByKey.get(`${b.cluster}/${b.slug}`)
        if (clicksA == null && clicksB == null) return (b.dateModified ?? '').localeCompare(a.dateModified ?? '')
        if (clicksA == null) return 1
        if (clicksB == null) return -1
        return clicksB - clicksA
      })
    }

    const totalCount = list.length
    const capped = totalCount > MAX_VISIBLE
    result[toolName] = {
      articles: capped ? list.slice(0, MAX_VISIBLE) : list,
      totalCount,
      capped,
    }
  }

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true })
  const json = JSON.stringify(result, null, 2) + '\n'

  if (process.argv.includes('--check')) {
    const existing = fs.existsSync(OUTPUT_PATH) ? fs.readFileSync(OUTPUT_PATH, 'utf-8') : null
    if (existing !== json) {
      console.error('')
      console.error('❌ src/generated/tool-article-index.json is stale.')
      console.error('   Run `node scripts/generate-tool-article-index.mjs` and commit the result.')
      process.exit(1)
    }
    console.log('✅ tool-article-index.json is up to date')
    return
  }

  fs.writeFileSync(OUTPUT_PATH, json)
  console.log(`✅ Wrote ${OUTPUT_PATH} (${Object.keys(result).length} tools with at least one matching article)`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
