#!/usr/bin/env node
// Generates src/generated/home-content-feed.json — a small, flat list of
// {title, excerpt, publishDate, dateModified, url, cluster} for every
// published English article across the 6 live content clusters, used by
// the homepage's Latest Posts / Recently Updated blocks
// (src/lib/home/content-feed.ts).
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
// or updating articles in any of the 6 clusters. Not yet wired into
// prebuild — content-feed staleness only affects the homepage's Latest
// Posts/Recently Updated blocks, not build correctness, so it's opt-in for
// now (see follow-up note at the bottom of this file).

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OUTPUT_PATH = path.join(ROOT, 'src/generated/home-content-feed.json')

const jiti = createJiti(import.meta.url, { tsconfigPaths: true })

function invertMap(map) {
  const result = {}
  for (const [slug, key] of Object.entries(map)) result[key] = slug
  return result
}

function articleUrl(hub, slug) {
  return `/${hub}/${slug}`
}

// Malformed dates sort wrong silently instead of erroring (e.g. a stray
// 'May 17, 2026' human-readable string sorts ABOVE ISO dates in a
// descending string compare, since 'M' > '2' — found live on
// eu-cloud-gpu-gdpr-2026.ts's publishDate and fixed at the source, but
// guard here too so a similar slip elsewhere gets dropped, not silently
// corrupting Latest Posts' order again).
const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/

function toEntry(hub, slug, en) {
  if (!en?.title || !en?.publishDate) return null
  if (!ISO_DATE_RE.test(en.publishDate) || (en.dateModified && !ISO_DATE_RE.test(en.dateModified))) {
    console.warn(`  [SKIP] ${hub}/${slug}: non-ISO date (publishDate='${en.publishDate}', dateModified='${en.dateModified}')`)
    return null
  }
  return {
    title: en.title,
    excerpt: en.metaDescription ?? en.intro ?? '',
    publishDate: en.publishDate,
    dateModified: en.dateModified ?? en.publishDate,
    url: articleUrl(hub, slug),
    cluster: hub,
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
    const entry = toEntry('prompt-engineering', slug, en)
    if (entry) entries.push(entry)
  }

  const llmKeyToSlug = invertMap(LLM_SLUG_TO_KEY)
  for (const [key, langMap] of Object.entries(llmContent)) {
    const slug = llmKeyToSlug[key]
    if (!slug || COMING_SOON_SLUGS.has(slug)) continue
    const en = langMap.en
    if (!en?.sections || Object.keys(en.sections).length === 0) continue
    const entry = toEntry('local-llms', slug, en)
    if (entry) entries.push(entry)
  }

  const powerKeyToSlug = invertMap(POWER_LLM_SLUG_TO_KEY)
  for (const [key, langMap] of Object.entries(powerLLMContent)) {
    const slug = powerKeyToSlug[key]
    if (!slug || !POWER_LLM_PUBLISHED_SLUGS.has(slug)) continue
    const entry = toEntry('power-local-llm', slug, langMap.en)
    if (entry) entries.push(entry)
  }

  const bitesKeyToSlug = invertMap(PROMPT_BITES_SLUG_TO_KEY)
  for (const [key, langMap] of Object.entries(promptBitesContent)) {
    const slug = bitesKeyToSlug[key]
    if (!slug || !PROMPT_BITES_PUBLISHED_SLUGS.has(slug)) continue
    const entry = toEntry('prompt-bites', slug, langMap.en)
    if (entry) entries.push(entry)
  }

  const balconyKeyToSlug = invertMap(BALCONY_SOLAR_SLUG_TO_KEY)
  for (const [key, langMap] of Object.entries(balconySolarContent)) {
    const slug = balconyKeyToSlug[key]
    if (!slug || !BALCONY_SOLAR_PUBLISHED_SLUGS.has(slug)) continue
    const entry = toEntry('balcony-solar', slug, langMap.en)
    if (entry) entries.push(entry)
  }

  const smartHomeKeyToSlug = invertMap(SMART_HOME_SLUG_TO_KEY)
  for (const [key, langMap] of Object.entries(smartHomeContent)) {
    const slug = smartHomeKeyToSlug[key]
    if (!slug || !SMART_HOME_PUBLISHED_SLUGS.has(slug)) continue
    const entry = toEntry('smart-home', slug, langMap.en)
    if (entry) entries.push(entry)
  }

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true })
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(entries, null, 2) + '\n')
  console.log(`Wrote ${entries.length} entries to ${path.relative(ROOT, OUTPUT_PATH)}`)
}

main()

// Follow-up (not done here): wire this into prebuild alongside
// generate-content-metadata.mjs (or --check mode like it) once the
// homepage's content freshness needs to be guaranteed at deploy time rather
// than regenerated manually. Deferred because it's a bigger, separate CI
// change and the homepage rebuild itself doesn't require it to function.
