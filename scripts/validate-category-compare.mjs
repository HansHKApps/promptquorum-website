#!/usr/bin/env node
// Guards the category-comparison system (see src/lib/power-local-llm/apps/compare-schema.ts):
//  1. every key in a tool's `compare` block is defined for a segment that tool belongs to;
//  2. every category comparison article named in CATEGORY_COMPARE_ARTICLE is registered
//     (slugs.ts + articles-barrel.ts) and actually renders the generated table section;
//  3. a comparison article that is publicly indexable (in published.ts) has all 9 locale blocks;
//  4. every tool in a comparison segment that declares a reviewSlug has it resolve to a public URL
//     (feature-review-index.json), so the table's tool links never dead-end.
// Regex-based on purpose, like the other validators here: no TS toolchain needed at prebuild.

import { readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const LIB = path.join(ROOT, 'src/lib/power-local-llm')
const read = (p) => readFileSync(p, 'utf8')
const errors = []
const fail = (m) => errors.push(m)

const schema = read(path.join(LIB, 'apps/compare-schema.ts'))

// --- segments: { group -> [{ key, subs, attrs }] }
const segStart = schema.indexOf('export const COMPARE_SEGMENTS')
const segBlock = schema.slice(segStart, schema.indexOf('\n}\n', segStart))
const segments = []
for (const m of segBlock.matchAll(/key: '([a-z-]+)',\s*label: '[^']*',\s*subs: \[([^\]]*)\],\s*attributes: \[([\s\S]*?)\n\s{6}\],/g)) {
  const subs = [...m[2].matchAll(/'([a-z-]+)'/g)].map((x) => x[1])
  const attrs = [...m[3].matchAll(/key: '([A-Za-z]+)'/g)].map((x) => x[1])
  segments.push({ key: m[1], subs, attrs })
}
if (segments.length === 0) fail('could not parse any COMPARE_SEGMENTS from compare-schema.ts')

// --- tools
const appsDir = path.join(LIB, 'apps')
const slugsTs = read(path.join(LIB, 'slugs.ts'))
const barrelTs = read(path.join(LIB, 'articles-barrel.ts'))
const registered = (slug) => new RegExp(`'${slug}':`).test(slugsTs)
const reviewIndex = JSON.parse(read(path.join(ROOT, 'src/generated/feature-review-index.json')))

for (const f of readdirSync(appsDir)) {
  if (!f.endsWith('.ts') || ['categories.ts', 'types.ts', 'compare-schema.ts'].includes(f)) continue
  const src = read(path.join(appsDir, f))
  const cats = [...(src.match(/categories: \[([^\]]*)\]/)?.[1] ?? '').matchAll(/'([a-z-]+)'/g)].map((x) => x[1])
  const mine = segments.filter((s) => s.subs.some((c) => cats.includes(c)))
  const compare = src.match(/^\s*compare: \{([^}]*)\},/m)
  if (compare) {
    if (mine.length === 0) fail(`${f}: has a compare block but is in no comparison segment`)
    for (const k of [...compare[1].matchAll(/([A-Za-z]+):/g)].map((x) => x[1])) {
      if (!mine.some((s) => s.attrs.includes(k))) fail(`${f}: compare key "${k}" is not defined for its segment(s)`)
    }
  }
  if (mine.length > 0) {
    // Tools without a review are simply left out of the tables; a review that IS declared must resolve
    // to a public URL through the build-time index (the slug in the record is the article file key).
    const rev = src.match(/reviewSlug: '([a-z0-9-]+)'/)?.[1]
    const toolSlug = src.match(/slug: '([a-z0-9-]+)'/)?.[1]
    if (rev && !(toolSlug && reviewIndex[toolSlug])) fail(`${f}: reviewSlug "${rev}" does not resolve in feature-review-index.json`)
  }
}

// --- comparison articles
const mapBlock = schema.slice(schema.indexOf('export const CATEGORY_COMPARE_ARTICLE'))
const published = read(path.join(LIB, 'published.ts'))
const LOCALES = ['en', 'de', 'fr', 'es', 'ja', 'zh', 'pt', 'ar', 'ko']
for (const m of mapBlock.matchAll(/'([a-z-]+)': '([a-z0-9-]+)',/g)) {
  const [, group, slug] = m
  if (!registered(slug)) fail(`${group}: article "${slug}" is not in slugs.ts`)
  if (!new RegExp(`'${slug}':`).test(barrelTs)) fail(`${group}: article "${slug}" is not in articles-barrel.ts`)
  let art = ''
  try {
    art = read(path.join(LIB, 'articles', `${slug}.ts`))
  } catch {
    fail(`${group}: article file ${slug}.ts is missing`)
    continue
  }
  if (!art.includes("component: 'CategoryCompareTable'")) fail(`${slug}: no section renders component 'CategoryCompareTable'`)
  if (new RegExp(`'${slug}',`).test(published)) {
    for (const l of LOCALES) if (!new RegExp(`^  ${l}: \\{`, 'm').test(art)) fail(`${slug}: published but missing the "${l}" locale block`)
  }
}

if (errors.length) {
  console.error(`✗ category-compare validation failed (${errors.length}):`)
  for (const e of errors) console.error('  - ' + e)
  process.exit(1)
}
console.log(`✓ category-compare validation passed (${segments.length} segments)`)
