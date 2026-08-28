#!/usr/bin/env node
/**
 * Validate that every authored `toc[].anchor` resolves to an id the renderer actually emits.
 *
 * Why: an anchor with no matching id is a click that changes the URL and does nothing else.
 * Microsoft Clarity logged this as the site's largest UX signal — 10.38% of sessions with a
 * dead click. At the time this script was written, 67% of prompt-engineering TOC anchors
 * resolved to nothing.
 *
 * The renderer's id precedence is `section.id` → slugified title → `section-<key>`
 * (see src/lib/sectionAnchor.ts). This script mirrors that, per article *per locale*, since
 * anchors are typically authored once in English while section titles are translated.
 *
 * Usage:
 *   node scripts/validate-toc-anchors.mjs           # report, exit 0
 *   node scripts/validate-toc-anchors.mjs --strict  # exit 1 if any anchor is unresolved
 */

import fs from 'node:fs'
import path from 'node:path'
import { localeBlocks } from './lib/article-locale-blocks.mjs'

const CLUSTERS = ['local-llms', 'power-local-llm', 'prompt-engineering', 'smart-home', 'balcony-solar']
const LOCALES = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
const STRICT = process.argv.includes('--strict')

// ids the article renderers emit themselves, outside the sections map:
// QuickAnswer.tsx (#quick-answer) and the FactsDisclaimer wrapper (#facts-disclaimer).
const RENDERER_IDS = ['quick-answer', 'facts-disclaimer']

/** Mirrors slugifyAnchor() in src/lib/sectionAnchor.ts. */
const slugify = (s) => s.toLowerCase().replace(/[^\p{Letter}\p{Number}]+/gu, '-').replace(/^-+|-+$/g, '')

/** Every id the renderer could emit for this locale block. */
function renderedIds(body) {
  const ids = new Set()
  for (const m of body.matchAll(/\bid:\s*'([^']+)'/g)) ids.add(m[1])
  for (const m of body.matchAll(/\btitle:\s*'((?:[^'\\]|\\.)*)'/g)) {
    const s = slugify(m[1])
    if (s) ids.add(s)
  }
  for (const m of body.matchAll(/\btitle:\s*"((?:[^"\\]|\\.)*)"/g)) {
    const s = slugify(m[1])
    if (s) ids.add(s)
  }
  // isTldr sections fall back to this fixed id when they carry no explicit one.
  if (/isTldr:\s*true/.test(body)) ids.add('key-takeaways')
  for (const id of RENDERER_IDS) ids.add(id)
  return ids
}

let files = 0
let anchors = 0
let dead = 0
const offenders = []

for (const cluster of CLUSTERS) {
  const dir = path.join('src/lib', cluster, 'articles')
  if (!fs.existsSync(dir)) continue

  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.ts'))) {
    const src = fs.readFileSync(path.join(dir, file), 'utf8')
    if (!/\btoc:\s*\[/.test(src)) continue
    files++

    for (const { loc, start, end } of localeBlocks(src, LOCALES)) {
      const body = src.slice(start, end)
      const found = [...body.matchAll(/anchor:\s*'#?([^']+)'/g)].map((m) => m[1].replace(/^#/, ''))
      if (!found.length) continue

      const ids = renderedIds(body)
      const missing = [...new Set(found.filter((a) => !ids.has(a)))]
      anchors += found.length
      dead += missing.length
      if (missing.length) offenders.push({ where: `${cluster}/${file}`, loc, missing })
    }
  }
}

for (const { where, loc, missing } of offenders) {
  console.log(`${where} [${loc}]  ${missing.join(', ')}`)
}

const pct = anchors ? ((dead / anchors) * 100).toFixed(1) : '0.0'
console.log(
  `\nTOC anchors: ${anchors} checked across ${files} files × locales — ${dead} unresolved (${pct}%)`
)

if (dead && STRICT) {
  console.error('\nUnresolved TOC anchors are dead clicks. Give the section an explicit `id`.')
  process.exit(1)
}
