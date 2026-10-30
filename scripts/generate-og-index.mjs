#!/usr/bin/env node
// Generates src/generated/og-index.json — the only article data
// src/app/api/og/[slug]/route.tsx needs (title + intro per slug and language),
// so the route stops value-importing every cluster's full content barrel.
// Those barrels made the function 250.6 MB, over Vercel's 250 MB limit
// (2026-10-30). Lookup order and legacy-slug aliasing mirror the route:
// prompt-engineering → local-llms → power-local-llm → prompt-bites →
// smart-home → balcony-solar → frameworks; first match wins.
//
// Usage: node scripts/generate-og-index.mjs
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUTPUT_PATH = path.join(ROOT, 'src/generated/og-index.json')
const jiti = createJiti(import.meta.url, { tsconfigPaths: true })
const LANGS = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']

const load = (p) => jiti(path.join(ROOT, p))
const { peContent } = load('src/lib/prompt-engineering/content.ts')
const { PE_SLUG_TO_KEY } = load('src/lib/prompt-engineering/slugs.ts')
const { llmContent } = load('src/lib/local-llms/content.ts')
const { LLM_SLUG_TO_KEY } = load('src/lib/local-llms/slugs.ts')
const { powerLLMContent } = load('src/lib/power-local-llm/content.ts')
const { POWER_LLM_SLUG_TO_KEY } = load('src/lib/power-local-llm/slugs.ts')
const { promptBitesContent } = load('src/lib/prompt-bites/articles-barrel.ts')
const { PROMPT_BITES_SLUG_TO_KEY } = load('src/lib/prompt-bites/slugs.ts')
const { smartHomeContent } = load('src/lib/smart-home/content.ts')
const { SMART_HOME_SLUG_TO_KEY } = load('src/lib/smart-home/slugs.ts')
const { balconySolarContent } = load('src/lib/balcony-solar/content.ts')
const { BALCONY_SOLAR_SLUG_TO_KEY } = load('src/lib/balcony-solar/slugs.ts')
const { getFrameworkLocalized, FRAMEWORK_SLUGS } = load('src/lib/frameworksData.ts')

const index = {}

function addCluster(slugToKey, content, extraSlugs = []) {
  const slugs = new Set([...Object.keys(slugToKey), ...extraSlugs])
  for (const slug of slugs) {
    if (index[slug]) continue // earlier cluster wins, as in the route
    const key = slugToKey[slug] ?? slug
    const byLang = content[key]
    if (!byLang) continue
    const entry = {}
    for (const lang of LANGS) {
      const a = byLang[lang]
      if (a) entry[lang] = [a.title ?? '', a.intro ?? '']
    }
    if (entry.en) index[slug] = entry
  }
}

addCluster(PE_SLUG_TO_KEY, peContent)
// Legacy OG URLs used the content key, which differs from the URL slug for renamed articles.
addCluster(LLM_SLUG_TO_KEY, llmContent, Object.values(LLM_SLUG_TO_KEY))
addCluster(POWER_LLM_SLUG_TO_KEY, powerLLMContent)
addCluster(PROMPT_BITES_SLUG_TO_KEY, promptBitesContent)
addCluster(SMART_HOME_SLUG_TO_KEY, smartHomeContent)
addCluster(BALCONY_SOLAR_SLUG_TO_KEY, balconySolarContent)

for (const slug of FRAMEWORK_SLUGS) {
  if (index[slug]) continue
  const entry = {}
  for (const lang of LANGS) {
    const fw = getFrameworkLocalized(slug, lang)
    if (fw) entry[lang] = [`${fw.name} Prompt Framework`, fw.tagline ?? '']
  }
  if (entry.en) index[slug] = entry
}

fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true })
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(index))
console.log(`✅ og-index.json: ${Object.keys(index).length} slugs (${(fs.statSync(OUTPUT_PATH).size / 1024).toFixed(0)} KB)`)
