#!/usr/bin/env node
// Guards against publishing an article without adding it to its cluster's hub
// page category listing (HUB_THEMES / themes.ts / categories.ts). That listing
// is a hand-maintained array separate from articles-barrel.ts + slugs.ts +
// published.ts, so it's easy to publish an article correctly and still leave
// it with no link path from the hub once it ages out of the 14-day "New This
// Month" spotlight. Found 2026-09-25: 145/323 power-local-llm articles + 11
// more across local-llms/prompt-engineering/balcony-solar were in this state.
// Regex-based on purpose, like the other validators here: no TS toolchain
// needed at prebuild.

import { readFileSync } from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const read = (p) => readFileSync(path.join(ROOT, p), 'utf8')
const errors = []

// Extracts every 'slug' string literal inside all `<arrayField>: [ ... ]` blocks in a file.
function slugsInArrays(src, arrayField) {
  const set = new Set()
  const re = new RegExp(`${arrayField}:\\s*\\[([^\\]]*)\\]`, 'gs')
  for (const m of src.matchAll(re)) {
    for (const s of m[1].matchAll(/'([a-z0-9-]+)'/g)) set.add(s[1])
  }
  return set
}

function checkCluster({ name, publishedSlugs, hubFile, hubField }) {
  const hubSrc = read(hubFile)
  const hubSlugs = slugsInArrays(hubSrc, hubField)
  const missing = [...publishedSlugs].filter((s) => !hubSlugs.has(s))
  if (missing.length > 0) {
    errors.push(
      `${name}: ${missing.length} published article(s) missing from ${hubFile} (field "${hubField}"):\n` +
        missing.map((s) => `      - ${s}`).join('\n'),
    )
  }
}

// --- power-local-llm: published.ts is the allowlist; HUB_THEMES is a flat array of { slugs: [...] }
{
  const published = read('src/lib/power-local-llm/published.ts')
  const publishedSlugs = new Set([...published.matchAll(/'([a-z0-9-]+)'/g)].map((m) => m[1]))
  checkCluster({
    name: 'power-local-llm',
    publishedSlugs,
    hubFile: 'src/lib/power-local-llm/page-helpers.tsx',
    hubField: 'slugs',
  })
}

// --- local-llms: no allowlist — every registered slug not in COMING_SOON_SLUGS is live
{
  const slugsTs = read('src/lib/local-llms/slugs.ts')
  const allSlugs = new Set([...slugsTs.matchAll(/^\s*'([a-z0-9-]+)':/gm)].map((m) => m[1]))
  const comingSoon = read('src/lib/local-llms/comingSoon.ts')
  const comingSoonSlugs = new Set([...comingSoon.matchAll(/'([a-z0-9-]+)'/g)].map((m) => m[1]))
  const publishedSlugs = new Set([...allSlugs].filter((s) => !comingSoonSlugs.has(s)))
  checkCluster({
    name: 'local-llms',
    publishedSlugs,
    hubFile: 'src/lib/local-llms/themes.ts',
    hubField: 'articleKeys',
  })
}

// --- prompt-engineering: no allowlist — every registered slug is live
{
  const slugsTs = read('src/lib/prompt-engineering/slugs.ts')
  const publishedSlugs = new Set([...slugsTs.matchAll(/'([a-z0-9-]+)':\s*'([a-z0-9-]+)'/g)].map((m) => m[1]))
  checkCluster({
    name: 'prompt-engineering',
    publishedSlugs,
    hubFile: 'src/lib/prompt-engineering/themes.ts',
    hubField: 'articleKeys',
  })
}

// --- smart-home: published.ts is the allowlist; categories.ts holds { articleSlugs: [...] }
{
  const published = read('src/lib/smart-home/published.ts')
  const publishedSlugs = new Set([...published.matchAll(/'([a-z0-9-]+)'/g)].map((m) => m[1]))
  checkCluster({
    name: 'smart-home',
    publishedSlugs,
    hubFile: 'src/lib/smart-home/categories.ts',
    hubField: 'articleSlugs',
  })
}

// --- balcony-solar: published.ts derives from slugs.ts minus PENDING_SLUGS
{
  const slugsTs = read('src/lib/balcony-solar/slugs.ts')
  const allSlugs = new Set([...slugsTs.matchAll(/^\s*'([a-z0-9-]+)':/gm)].map((m) => m[1]))
  const publishedTs = read('src/lib/balcony-solar/published.ts')
  const pendingMatch = publishedTs.match(/PENDING_SLUGS[^=]*=\s*new Set\(\[([^\]]*)\]\)/s)
  const pendingSlugs = new Set(pendingMatch ? [...pendingMatch[1].matchAll(/'([a-z0-9-]+)'/g)].map((m) => m[1]) : [])
  const publishedSlugs = new Set([...allSlugs].filter((s) => !pendingSlugs.has(s)))
  checkCluster({
    name: 'balcony-solar',
    publishedSlugs,
    hubFile: 'src/lib/balcony-solar/categories.ts',
    hubField: 'articleSlugs',
  })
}

// prompt-bites is intentionally excluded: its hub (src/lib/prompt-bites/hub-data.ts) builds
// liveSlugs dynamically from promptBitesContent — there is no hand-maintained list to drift.

if (errors.length) {
  console.error(`✗ hub coverage validation failed (${errors.length} cluster(s)):`)
  for (const e of errors) console.error('  ' + e)
  console.error(
    '\n  Fix: add each missing slug to the matching category/theme array in the file above,\n' +
      '  in whichever bucket matches the article\'s own topic/theme field.',
  )
  process.exit(1)
}
console.log('✓ hub coverage validation passed — every published article is reachable from its cluster hub')
