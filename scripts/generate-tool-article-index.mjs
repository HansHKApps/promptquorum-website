#!/usr/bin/env node
// Generates src/generated/tool-article-index.json — maps each tool in the
// Local AI App Directory (src/lib/power-local-llm/apps-barrel.ts, one
// ToolRecord per tool) to the site's own local-llms / power-local-llm
// articles that discuss it, sorted by importance. Powers the "Articles about
// {tool}" collapsible block on the directory page (PowerLocalLLMPostClient.tsx,
// itemHeadings render path via ArticlesBlock.tsx).
//
// Tool list: read live from apps-barrel.ts's `localAiApps` (name + slug per
// tool) — never hardcoded, so it stays in sync as the directory's structured
// data is edited. (Formerly scanned local-llm-software-directory-2026.ts's
// markdown table rows directly; that article's rows are now stale relative
// to the real tool roster in apps-barrel.ts, so the source of tool names
// changed — the matching/tiering logic below is unchanged.)
//
// Matching: a case-insensitive whole-word/phrase scan of each candidate
// article file's raw source text (all locale blocks, not just EN) against
// each tool name. Cheap and sufficient here — tool names are proper nouns
// kept in Latin script across locales, so cross-locale false positives are
// unlikely. Ambiguous short/common-word tool names (e.g. "Jan") are printed
// as warnings for manual spot-check, not blocked.
//
// Tiering: each match is classified against the article's EN content —
// Tier 1 ("about") if the tool name appears in the title/seoTitle, in a
// section heading (H2/H3 `title` field), or gets >=2 sentences of specific
// detail (a digit/measurement alongside the name) somewhere in the body.
// Everything else that matched is Tier 2 ("mentioned") — a passing namedrop.
//
// Sorting + cap: within each tier, newest dateModified first. Tier 1 is
// shown first (up to MAX_VISIBLE), Tier 2 fills any remaining slots. If the
// combined pool exceeds MAX_VISIBLE, the excess is reported via
// totalCount/capped so the UI can render a "+N more" affordance instead of
// silently truncating or dumping the full list.
//
// reviewSlug pin: pure recency sort has one failure mode — a newer article
// that only discusses a tool in passing outranks that tool's own dedicated
// review. If the tool's ToolRecord sets `reviewSlug`, that article is pinned
// to position 1 regardless of date. Set `reviewSlug` on a tool once its own
// review exists; a mismatch (slug set but not found among its matches) is a
// build-time warning, not a failure.
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
const DIRECTORY_SLUG = 'local-llm-software-directory-2026'
const MAX_VISIBLE = 10

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

// Flatten an EN article's prose into plain-text blocks (section body content
// and list items) so tier classification can scan sentences without caring
// about the section shape (string vs string[] vs items[]).
function collectTextBlocks(en) {
  const blocks = []
  for (const section of Object.values(en.sections ?? {})) {
    if (!section) continue
    if (typeof section.content === 'string') blocks.push(section.content)
    else if (Array.isArray(section.content)) blocks.push(...section.content.filter((c) => typeof c === 'string'))
    if (Array.isArray(section.items)) blocks.push(...section.items.filter((i) => typeof i === 'string'))
  }
  return blocks
}

// Tier 1 ("about") if the tool is in the title/heading, or gets >=2
// sentences of specific detail (a digit/measurement near the mention).
// Everything else that matched the coarse scan is Tier 2 ("mentioned").
function classifyTier(pattern, en) {
  if (pattern.test(en.title ?? '') || pattern.test(en.seoTitle ?? '')) return 'about'

  for (const section of Object.values(en.sections ?? {})) {
    if (section?.title && pattern.test(section.title)) return 'about'
  }

  let detailSentences = 0
  for (const block of collectTextBlocks(en)) {
    for (const sentence of block.split(/(?<=[.!?])\s+/)) {
      if (!pattern.test(sentence)) continue
      if (/\d/.test(sentence) || sentence.length > 120) detailSentences++
    }
  }
  return detailSentences >= 2 ? 'about' : 'mentioned'
}

async function main() {
  // ── 1. Tool list, read live from apps-barrel.ts's localAiApps ──
  const { localAiApps } = await jiti.import('@/lib/power-local-llm/apps-barrel')
  if (!Array.isArray(localAiApps) || localAiApps.length === 0) {
    throw new Error('Could not load localAiApps from apps-barrel.ts')
  }

  const toolNames = []
  const reviewSlugByName = new Map() // tool name -> its own dedicated-review article slug, if set
  const seen = new Set()
  for (const tool of localAiApps) {
    const name = (tool.name ?? '').trim()
    if (!name || seen.has(name)) continue
    seen.add(name)
    toolNames.push(name)
    if (tool.reviewSlug) reviewSlugByName.set(name, tool.reviewSlug)
  }
  console.log(`Found ${toolNames.length} unique tools in the directory.`)

  // Directory article content, still needed as a candidate article (matching
  // step below scans every local-llms/power-local-llm article, including it).
  const { powerLLMContent } = await jiti.import('@/lib/power-local-llm/articles-barrel')
  if (!powerLLMContent[DIRECTORY_SLUG]?.en) {
    throw new Error(`Could not load EN content for ${DIRECTORY_SLUG} from the power-local-llm barrel`)
  }

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
        en,
      })
    }
  }
  console.log(`Scanning ${candidates.length} candidate articles (local-llms + power-local-llm).`)

  // ── 3. Match (coarse scan) + classify each match into a tier ──
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
        tier: classifyTier(pattern, c.en),
      }))
    if (matches.length > 0) index[toolName] = matches
  }

  // ── 4. Sort (most recent first) + cap: Tier 1 first, Tier 2 fills the rest ──
  // Exception: if the tool has a `reviewSlug` (its own dedicated review), that
  // article is pinned to position 1 ahead of the recency sort — a newer article
  // that merely discusses the tool must never outrank the tool's own review.
  const byRecency = (a, b) => (b.dateModified ?? '').localeCompare(a.dateModified ?? '')

  const result = {}
  for (const [toolName, list] of Object.entries(index)) {
    const about = list.filter((a) => a.tier === 'about').sort(byRecency)
    const mentioned = list.filter((a) => a.tier === 'mentioned').sort(byRecency)

    const reviewSlug = reviewSlugByName.get(toolName)
    let ordered = [...about, ...mentioned]
    if (reviewSlug) {
      const pinIndex = ordered.findIndex((a) => a.slug === reviewSlug)
      if (pinIndex > 0) {
        const [pinned] = ordered.splice(pinIndex, 1)
        ordered.unshift(pinned)
      } else if (pinIndex === -1) {
        console.warn(`⚠️  ${toolName}: reviewSlug '${reviewSlug}' set but no matching article found in its index entry — check the slug.`)
      }
    }

    const totalCount = ordered.length
    const articles = ordered.slice(0, MAX_VISIBLE)
    result[toolName] = {
      articles,
      totalCount,
      capped: totalCount > MAX_VISIBLE,
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
