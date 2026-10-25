#!/usr/bin/env node
// Warn-only check: every directory tile that has a published review, lists `ios` and/or `android`
// and is a chat/LLM app should appear in the matching hand-written platform roundup
// (best-local-llm-apps-iphone-2026 / -android-2026). Those roundups are NOT generated from the tile
// records (unlike the *-compared category tables), so nothing else notices an omission.
// Prints the missing apps and exits 0. Pass --strict to exit 1 when anything is missing
// (planned for prebuild once the backlog is cleared). Regex-based like the sibling validators.

import { readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const LIB = path.join(ROOT, 'src/lib/power-local-llm')
const read = (p) => readFileSync(p, 'utf8')
const strict = process.argv.includes('--strict')

// Categories whose apps belong in a "local LLM apps for the phone" roundup. Note/bookmark tools,
// image generators, SDKs etc. are deliberately out of scope.
const IN_SCOPE = new Set(['general-chat-clients', 'document-pdf-chat', 'personal-assistants', 'roleplay-companions'])
// Add `slug` here (with a reason) to exempt a tile that is in scope by category but not by topic.
const EXEMPT = new Set([])

const ROUNDUPS = {
  ios: 'best-local-llm-apps-iphone-2026',
  android: 'best-local-llm-apps-android-2026',
}

// EN block only (up to the next top-level locale block) — enough to see whether the app is named.
const enText = (slug) => {
  const src = read(path.join(LIB, 'articles', `${slug}.ts`))
  const start = src.search(/^ {2}en: \{/m)
  const rest = src.slice(start + 1)
  const next = rest.search(/^ {2}[a-z]{2}: \{/m)
  return (next === -1 ? rest : rest.slice(0, next)).toLowerCase()
}
const text = Object.fromEntries(Object.entries(ROUNDUPS).map(([p, s]) => [p, enText(s)]))

const appsDir = path.join(LIB, 'apps')
const missing = { ios: [], android: [] }
let checked = 0
for (const f of readdirSync(appsDir)) {
  if (!f.endsWith('.ts') || ['categories.ts', 'types.ts', 'compare-schema.ts'].includes(f)) continue
  const src = read(path.join(appsDir, f))
  const slug = src.match(/^\s*slug: '([a-z0-9-]+)'/m)?.[1]
  const name = src.match(/^\s*name: '((?:[^'\\]|\\.)*)'/m)?.[1]?.replace(/\\'/g, "'")
  const review = src.match(/reviewSlug: '([a-z0-9-]+)'/)?.[1]
  if (!slug || !name || !review || EXEMPT.has(slug)) continue
  const cats = [...(src.match(/categories: \[([^\]]*)\]/)?.[1] ?? '').matchAll(/'([a-z-]+)'/g)].map((x) => x[1])
  if (!cats.some((c) => IN_SCOPE.has(c))) continue
  const platforms = [...(src.match(/platforms: \[([^\]]*)\]/)?.[1] ?? '').matchAll(/'([a-z]+)'/g)].map((x) => x[1])
  for (const p of Object.keys(ROUNDUPS)) {
    if (!platforms.includes(p)) continue
    checked++
    const t = text[p]
    if (!t.includes(name.toLowerCase()) && !t.includes(review) && !t.includes(`/${slug}`)) missing[p].push(name)
  }
}

let total = 0
for (const [p, list] of Object.entries(missing)) {
  total += list.length
  console.log(`${p}: ${list.length} reviewed chat/LLM app(s) missing from ${ROUNDUPS[p]}`)
  for (const n of list.sort()) console.log(`  - ${n}`)
}
console.log(total ? `⚠ platform roundups incomplete (${total} of ${checked} app/platform pairs missing)` : `✓ platform roundups cover all ${checked} app/platform pairs`)
if (strict && total) process.exit(1)
