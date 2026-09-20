#!/usr/bin/env node
// Generates src/generated/home-content-feed.json — a small, flat list of
// {lang, title, excerpt, publishDate, dateModified, url, cluster} for every
// published article, in every locale it's actually translated into, across
// the 6 live content clusters. Used by the homepage's Latest Posts /
// Recently Updated blocks (src/lib/home/content-feed.ts), one entry per
// (article, locale) pair so each of the 9 homepages shows its own language's
// titles/excerpts rather than falling back to English.
//
// Why generated, not a live import at request time: src/lib/home/content-feed.ts
// originally imported the 6 clusters' full content barrels directly into the
// homepage's server component tree. That crashed Next's dev webpack bundler
// with "Cannot create a string longer than 0x1fffffe8 characters" — the
// combined raw source of 780+ articles across 9 locales each is too large
// for webpack's dev bundle/sourcemap string concatenation once it's part of
// a PAGE's component graph (an API-route-only consumer like
// src/lib/search/build-search-entries.ts doesn't hit this — routes bundle
// differently). This script does the same live import, but at generation
// time via jiti (same pattern as generate-tool-article-index.mjs), so the
// runtime app only ever touches a small JSON file.
//
// Run manually (`node scripts/generate-home-content-feed.mjs`) after adding
// or updating articles in any of the 6 clusters. Also runs weekly via
// .github/workflows/homepage-feed-refresh.yml.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OUTPUT_PATH = path.join(ROOT, 'src/generated/home-content-feed.json')
const LOCALES = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']

const jiti = createJiti(import.meta.url, { tsconfigPaths: true })

function invertMap(map) {
  const result = {}
  for (const [slug, key] of Object.entries(map)) result[key] = slug
  return result
}

function articleUrl(hub, slug, lang) {
  return lang === 'en' ? `/${hub}/${slug}` : `/${lang}/${hub}/${slug}`
}

// Malformed dates sort wrong silently instead of erroring (e.g. a stray
// 'May 17, 2026' human-readable string sorts ABOVE ISO dates in a
// descending string compare, since 'M' > '2' — found live on
// eu-cloud-gpu-gdpr-2026.ts's publishDate and fixed at the source, but
// guard here too so a similar slip elsewhere gets dropped, not silently
// corrupting Latest Posts' order again).
const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/

function toEntry(hub, slug, lang, block) {
  if (!block?.title || !block?.publishDate) return null
  if (!ISO_DATE_RE.test(block.publishDate) || (block.dateModified && !ISO_DATE_RE.test(block.dateModified))) {
    console.warn(`  [SKIP] ${hub}/${slug} (${lang}): non-ISO date (publishDate='${block.publishDate}', dateModified='${block.dateModified}')`)
    return null
  }
  return {
    lang,
    title: block.title,
    excerpt: block.metaDescription ?? block.intro ?? '',
    publishDate: block.publishDate,
    dateModified: block.dateModified ?? block.publishDate,
    url: articleUrl(hub, slug, lang),
    cluster: hub,
  }
}

// Pushes one entry per locale the article is actually translated into
// (checked via that locale's own block, not just the presence of a key —
// many locale blocks are `undefined` for newer articles that haven't been
// translated yet). English gate (title + sections + gate check) decides
// whether the article counts as published at all; other locales only need
// their own title + publishDate to be considered translated.
function pushAllLocales(entries, hub, slug, langMap) {
  for (const lang of LOCALES) {
    const entry = toEntry(hub, slug, lang, langMap[lang])
    if (entry) entries.push(entry)
  }
}

async function main() {
  const { peContent } = await jiti.import('@/lib/prompt-engineering/articles-barrel')
  const { llmContent } = await jiti.import('@/lib/local-llms/articles-barrel')
  const { powerLLMContent } = await jiti.import('@/lib/power-local-llm/articles-barrel')
  const { promptBitesContent } = await jiti.import('@/lib/prompt-bites/articles-barrel')
  const { balconySolarContent } = await jiti.import('@/lib/balcony-solar/articles-barrel')
  const { smartHomeContent } = await jiti.import('@/lib/smart-home/articles-barrel')

  const { PE_SLUG_TO_KEY } = await jiti.import('@/lib/prompt-engineering/slugs')
  const { LLM_SLUG_TO_KEY } = await jiti.import('@/lib/local-llms/slugs')
  const { POWER_LLM_SLUG_TO_KEY } = await jiti.import('@/lib/power-local-llm/slugs')
  const { PROMPT_BITES_SLUG_TO_KEY } = await jiti.import('@/lib/prompt-bites/slugs')
  const { BALCONY_SOLAR_SLUG_TO_KEY } = await jiti.import('@/lib/balcony-solar/slugs')
  const { SMART_HOME_SLUG_TO_KEY } = await jiti.import('@/lib/smart-home/slugs')

  const { POWER_LLM_PUBLISHED_SLUGS } = await jiti.import('@/lib/power-local-llm/published')
  const { PROMPT_BITES_PUBLISHED_SLUGS } = await jiti.import('@/lib/prompt-bites/published')
  const { BALCONY_SOLAR_PUBLISHED_SLUGS } = await jiti.import('@/lib/balcony-solar/published')
  const { SMART_HOME_PUBLISHED_SLUGS } = await jiti.import('@/lib/smart-home/published')
  const { COMING_SOON_SLUGS } = await jiti.import('@/lib/local-llms/comingSoon')

  const entries = []

  const peKeyToSlug = invertMap(PE_SLUG_TO_KEY)
  for (const [key, langMap] of Object.entries(peContent)) {
    const slug = peKeyToSlug[key]
    if (!slug) continue
    const en = langMap.en
    if (!en?.sections || Object.keys(en.sections).length === 0) continue
    pushAllLocales(entries, 'prompt-engineering', slug, langMap)
  }

  const llmKeyToSlug = invertMap(LLM_SLUG_TO_KEY)
  for (const [key, langMap] of Object.entries(llmContent)) {
    const slug = llmKeyToSlug[key]
    if (!slug || COMING_SOON_SLUGS.has(slug)) continue
    const en = langMap.en
    if (!en?.sections || Object.keys(en.sections).length === 0) continue
    pushAllLocales(entries, 'local-llms', slug, langMap)
  }

  const powerKeyToSlug = invertMap(POWER_LLM_SLUG_TO_KEY)
  for (const [key, langMap] of Object.entries(powerLLMContent)) {
    const slug = powerKeyToSlug[key]
    if (!slug || !POWER_LLM_PUBLISHED_SLUGS.has(slug)) continue
    pushAllLocales(entries, 'power-local-llm', slug, langMap)
  }

  const bitesKeyToSlug = invertMap(PROMPT_BITES_SLUG_TO_KEY)
  for (const [key, langMap] of Object.entries(promptBitesContent)) {
    const slug = bitesKeyToSlug[key]
    if (!slug || !PROMPT_BITES_PUBLISHED_SLUGS.has(slug)) continue
    pushAllLocales(entries, 'prompt-bites', slug, langMap)
  }

  const balconyKeyToSlug = invertMap(BALCONY_SOLAR_SLUG_TO_KEY)
  for (const [key, langMap] of Object.entries(balconySolarContent)) {
    const slug = balconyKeyToSlug[key]
    if (!slug || !BALCONY_SOLAR_PUBLISHED_SLUGS.has(slug)) continue
    pushAllLocales(entries, 'balcony-solar', slug, langMap)
  }

  const smartHomeKeyToSlug = invertMap(SMART_HOME_SLUG_TO_KEY)
  for (const [key, langMap] of Object.entries(smartHomeContent)) {
    const slug = smartHomeKeyToSlug[key]
    if (!slug || !SMART_HOME_PUBLISHED_SLUGS.has(slug)) continue
    pushAllLocales(entries, 'smart-home', slug, langMap)
  }

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true })
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(entries, null, 2) + '\n')
  const byLang = LOCALES.map((l) => `${l}:${entries.filter((e) => e.lang === l).length}`).join(' ')
  console.log(`Wrote ${entries.length} entries to ${path.relative(ROOT, OUTPUT_PATH)} (${byLang})`)
}

main()
