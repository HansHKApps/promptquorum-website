#!/usr/bin/env node
// Report for the review pages' clickable competitor tables/lists.
// Run: node scripts/report-competitor-links.mjs [--json]
//
// For every feature app post (feature-review-index.json + the one review
// without a tile) in every locale, applies linkCompetitorSections() and
// prints how many tool names were linked, kept, left as the review's own tool,
// or unresolved — with the most frequent unresolved names (candidates for
// CURATED_ALIASES in src/lib/power-local-llm/tool-alias-map.ts).

import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const jiti = createJiti(import.meta.url, { alias: { '@': path.join(ROOT, 'src') }, interopDefault: true })

const { linkCompetitorSections, emptyStats } = jiti('@/lib/power-local-llm/competitor-links')
const { getReviewedTool } = jiti('@/lib/power-local-llm/directory-funnel')
const index = jiti('@/generated/feature-review-index.json')
const { powerLLMContent } = jiti('@/lib/power-local-llm/articles-barrel')
const { POWER_LLM_SLUG_TO_KEY } = jiti('@/lib/power-local-llm/slugs')
const { llmContent } = jiti('@/lib/local-llms/content')
const { LLM_SLUG_TO_KEY } = jiti('@/lib/local-llms/slugs')

const LANGS = ['en', 'de', 'fr', 'es', 'ja', 'zh', 'pt', 'ar', 'ko']
const reviews = Object.values(index).map((v) => ({ cluster: v.cluster, urlSlug: v.urlSlug }))

const total = emptyStats()
const perLang = Object.fromEntries(LANGS.map((l) => [l, emptyStats()]))
const unresolvedEn = new Map()
const noCompetitorSection = []

for (const r of reviews) {
  const key = r.cluster === 'power-local-llm' ? POWER_LLM_SLUG_TO_KEY[r.urlSlug] : LLM_SLUG_TO_KEY[r.urlSlug]
  const content = r.cluster === 'power-local-llm' ? powerLLMContent[key] : llmContent[key]
  const self = getReviewedTool(r.cluster, r.urlSlug)?.slug ?? null
  let sectionsEn = 0
  for (const lang of LANGS) {
    const block = content?.[lang]
    if (!block) continue
    const st = emptyStats()
    linkCompetitorSections(block, lang, self, st)
    if (lang === 'en') {
      sectionsEn = st.sections
      for (const n of st.unresolved) unresolvedEn.set(n, (unresolvedEn.get(n) ?? 0) + 1)
    }
    for (const t of [total, perLang[lang]]) {
      for (const k of ['sections', 'linkedPlain', 'retargetedExternal', 'keptInternal', 'self']) t[k] += st[k]
      t.unresolved.push(...st.unresolved)
    }
  }
  if (sectionsEn === 0) noCompetitorSection.push(r.urlSlug)
}

const fmt = (s) =>
  `sections ${s.sections} | newly linked ${s.linkedPlain} | vendor→directory ${s.retargetedExternal} | kept internal ${s.keptInternal} | own tool ${s.self} | unresolved ${s.unresolved.length}`

if (process.argv.includes('--json')) {
  console.log(JSON.stringify({ total, perLang, unresolvedEn: [...unresolvedEn], noCompetitorSection }, null, 2))
} else {
  console.log(`Review pages: ${reviews.length}`)
  console.log(`ALL LOCALES  ${fmt(total)}`)
  for (const l of LANGS) console.log(`  ${l.padEnd(3)} ${fmt(perLang[l])}`)
  console.log(`\nReviews with no competitor/comparison table or list (EN): ${noCompetitorSection.length}`)
  console.log('  ' + noCompetitorSection.join(', '))
  console.log(`\nMost frequent unresolved names (EN, ${unresolvedEn.size} distinct):`)
  for (const [n, c] of [...unresolvedEn].sort((a, b) => b[1] - a[1]).slice(0, 80)) console.log(`  ${String(c).padStart(3)}  ${n}`)
}
