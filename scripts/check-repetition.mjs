#!/usr/bin/env node
/**
 * Repetition / claim-budget checker for FeatureAppPost (and similar) article files.
 *
 * Why: a FeatureAppPost can pass every existing validator (TOC anchors resolve, schema
 * fields are present, tables fit their character budgets) while still restating the same
 * fact 6-8 times across the TL;DR, body sections, and FAQ, and while stacking more than
 * the GEO-mandated 3 summary blocks above the first real H2. Nothing currently catches
 * that. This is a standalone lint, not yet wired into `npm run build` or `npm run lint` —
 * run it by hand against one article at a time.
 *
 * Checks (EN locale block only, since that's the block writers draft first):
 *   1. Any normalized 5-consecutive-word phrase occurring more than twice in the body text.
 *   2. More than 3 "blocks" stacked above the first non-TL;DR section (leadAnswerBlock,
 *      quickAnswerTop, and each isTldr:true section each count as one block).
 *   3. Sections with a title but no body content (content/items/rows/faqs/subsections/
 *      snippetBlocks all absent or empty) — a heading with nothing under it.
 *   4. `toc[]` entries whose anchor either matches no section id at all, or matches an
 *      `isTldr: true` section (whose title is never rendered — see PowerLocalLLMPostClient.tsx
 *      `section.title && !section.isTldr`) and whose label doesn't say "Key Takeaways"
 *      (the hardcoded fallback heading id normally shows instead).
 *
 * Usage:
 *   node scripts/check-repetition.mjs <path-to-article.ts>
 *   node scripts/check-repetition.mjs src/lib/power-local-llm/articles   (all .ts in a dir)
 *   node scripts/check-repetition.mjs --locale=de <path-to-article.ts>   (check one non-EN block)
 *   node scripts/check-repetition.mjs --all-locales <path-to-article.ts> (check every locale block)
 *
 * Generic across any power-local-llm (or sibling-cluster) article file that follows the
 * `sections: { key: { ... } }` shape — it does not assume a fixed set of section keys, only
 * that locale blocks are found by `localeBlocks()` and that sections live under a `sections:`
 * object. Files without a `sections:` object simply report zero sections/empty-section findings.
 *
 * Exits non-zero if any file has a violation. Not wired into package.json build scripts.
 */

import fs from 'node:fs'
import path from 'node:path'
import { localeBlocks } from './lib/article-locale-blocks.mjs'

const ALL_LOCALES = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
const PHRASE_LEN = 5
const MAX_PHRASE_OCCURRENCES = 2
const MAX_TOP_BLOCKS = 3

// Words too generic to be a useful "repeated fact" signal on their own — a 5-gram made
// entirely of these (e.g. "on the free tier for") is noise, not a repetition finding.
const STOPWORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'of', 'to', 'in', 'on', 'is', 'it', 'its', 'that', 'this',
  'for', 'with', 'as', 'at', 'by', 'be', 'are', 'not', 'no', 'per',
])

function readTarget(target) {
  const stat = fs.statSync(target)
  if (stat.isDirectory()) {
    return fs
      .readdirSync(target)
      .filter((f) => f.endsWith('.ts'))
      .map((f) => path.join(target, f))
  }
  return [target]
}

/** Strip markdown/punctuation and lowercase, for phrase-shingling. */
function normalize(text) {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // markdown links -> label text
    .replace(/\*\*/g, '')
    .replace(/[`_#>]/g, '')
    .replace(/['’"“”]/g, '')
    .replace(/[^a-z0-9\s]/gi, ' ')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
}

/** Pull every quoted string literal's *value* out of a locale block body (regex-based,
 *  matching this repo's existing validator style — not a full TS parse). Skips obvious
 *  non-prose fields (url, anchor, id, slug, type, tone, datetime-ish fields). */
function extractProseStrings(body) {
  const SKIP_KEYS = new Set([
    'id', 'anchor', 'url', 'slug', 'type', 'tone', 'lang', 'theme', 'freshness_tier',
    'next_refresh_due', 'publishDate', 'dateModified', 'specific_year', 'educationalLevel',
    'updatedDate', 'heroImage', 'label',
  ])
  const strings = []
  const re = /([A-Za-z_][A-Za-z0-9_]*)\s*:\s*'((?:[^'\\]|\\.)*)'|([A-Za-z_][A-Za-z0-9_]*)\s*:\s*"((?:[^"\\]|\\.)*)"/g
  let m
  while ((m = re.exec(body))) {
    const key = m[1] ?? m[3]
    const val = m[2] ?? m[4]
    if (SKIP_KEYS.has(key)) continue
    if (val.length < 8) continue
    strings.push(val.replace(/\\'/g, "'").replace(/\\"/g, '"'))
  }
  // Bare array string items (q/a in faqs, list[] entries) that aren't `key: '...'`.
  const bareRe = /^\s*'((?:[^'\\]|\\.)*)',?\s*$/gm
  while ((m = bareRe.exec(body))) {
    const val = m[1]
    if (val.length >= 8) strings.push(val.replace(/\\'/g, "'"))
  }
  return strings
}

function findRepeatedPhrases(strings) {
  const counts = new Map() // normalized phrase -> count
  for (const s of strings) {
    const words = normalize(s).split(' ').filter(Boolean)
    for (let i = 0; i + PHRASE_LEN <= words.length; i++) {
      const gram = words.slice(i, i + PHRASE_LEN)
      if (gram.every((w) => STOPWORDS.has(w))) continue
      const phrase = gram.join(' ')
      counts.set(phrase, (counts.get(phrase) ?? 0) + 1)
    }
  }
  return [...counts.entries()]
    .filter(([, c]) => c > MAX_PHRASE_OCCURRENCES)
    .sort((a, b) => b[1] - a[1])
}

/** Split `sections: { key: { ... }, key2: { ... } }` into ordered {key, body} entries. */
function extractSections(body) {
  const sectionsStart = body.search(/\bsections\s*:\s*\{/)
  if (sectionsStart === -1) return []
  const braceStart = body.indexOf('{', sectionsStart)
  let depth = 0
  let end = -1
  for (let i = braceStart; i < body.length; i++) {
    if (body[i] === '{') depth++
    else if (body[i] === '}') { depth--; if (depth === 0) { end = i; break } }
  }
  if (end === -1) return []
  const inner = body.slice(braceStart + 1, end)

  const entries = []
  const keyRe = /(?:^|\n)\s*([A-Za-z_][A-Za-z0-9_]*)\s*:\s*\{/g
  let m
  const starts = []
  while ((m = keyRe.exec(inner))) starts.push({ key: m[1], at: m.index + m[0].lastIndexOf('{') })
  for (let i = 0; i < starts.length; i++) {
    let d = 0
    let sEnd = -1
    for (let j = starts[i].at; j < inner.length; j++) {
      if (inner[j] === '{') d++
      else if (inner[j] === '}') { d--; if (d === 0) { sEnd = j; break } }
    }
    if (sEnd === -1) continue
    entries.push({ key: starts[i].key, body: inner.slice(starts[i].at, sEnd + 1) })
  }
  return entries
}

function fieldStr(body, field) {
  const m = body.match(new RegExp(`\\b${field}\\s*:\\s*'((?:[^'\\\\]|\\\\.)*)'`))
  return m ? m[1] : null
}

function hasNonEmptyContent(body) {
  const contentFields = ['content', 'items', 'rows', 'faqs', 'subsections', 'snippetBlocks', 'links', 'blockquote']
  for (const f of contentFields) {
    const re = new RegExp(`\\b${f}\\s*:\\s*(\\[|'|"|\\{)`)
    const m = body.match(re)
    if (!m) continue
    if (m[1] === '[') {
      // empty array check: field: [] with nothing but whitespace inside
      const idx = body.indexOf(m[0])
      const after = body.slice(idx + m[0].length)
      if (!/^\s*\]/.test(after)) return true
    } else {
      return true
    }
  }
  return false
}

function checkTopBlocks(body) {
  const hasLeadAnswer = /\bleadAnswerBlock\s*:/.test(body)
  const hasQuickAnswerTop = /\bquickAnswerTop\s*:/.test(body)
  const sections = extractSections(body)
  let count = (hasLeadAnswer ? 1 : 0) + (hasQuickAnswerTop ? 1 : 0)
  const firstRealSection = sections.find((s) => !/isTldr\s*:\s*true/.test(s.body))
  for (const s of sections) {
    if (s === firstRealSection) break
    if (/isTldr\s*:\s*true/.test(s.body)) count++
  }
  return { count, hasLeadAnswer, hasQuickAnswerTop, tldrSections: sections.filter((s) => /isTldr\s*:\s*true/.test(s.body)).map((s) => s.key) }
}

function checkToc(body, sections) {
  const tocMatch = body.match(/\btoc\s*:\s*\[([\s\S]*?)\n\s*\],?\n/)
  if (!tocMatch) return []
  const entries = [...tocMatch[1].matchAll(/\{\s*label:\s*'((?:[^'\\]|\\.)*)'\s*,\s*anchor:\s*'#?([^']+)'\s*\}/g)]
    .map((m) => ({ label: m[1], anchor: m[2] }))
  const KNOWN_RENDERER_IDS = new Set(['quick-answer', 'facts-disclaimer'])
  const issues = []
  for (const { label, anchor } of entries) {
    if (KNOWN_RENDERER_IDS.has(anchor)) continue
    const section = sections.find((s) => fieldStr(s.body, 'id') === anchor || s.key === anchor)
    if (!section) {
      issues.push(`"${label}" (#${anchor}) — no matching section id`)
      continue
    }
    const isTldr = /isTldr\s*:\s*true/.test(section.body)
    if (isTldr && label.trim().toLowerCase() !== 'key takeaways') {
      issues.push(`"${label}" (#${anchor}) — section is isTldr:true, its title never renders (renderer shows the hardcoded "Key Takeaways" label instead, not "${label}")`)
    }
  }
  return issues
}

function checkFile(file, locale) {
  const src = fs.readFileSync(file, 'utf8')
  const blocks = localeBlocks(src, ALL_LOCALES).filter((b) => b.loc === locale)
  if (!blocks.length) return null
  const body = src.slice(blocks[0].start, blocks[0].end)

  const strings = extractProseStrings(body)
  const repeated = findRepeatedPhrases(strings)

  const top = checkTopBlocks(body)
  const sections = extractSections(body)
  const emptySections = sections
    .filter((s) => fieldStr(s.body, 'title') && !hasNonEmptyContent(s.body))
    .map((s) => ({ key: s.key, title: fieldStr(s.body, 'title') }))
  const tocIssues = checkToc(body, sections)

  return { file, locale, repeated, top, emptySections, tocIssues }
}

function printReport(result) {
  const { file, locale, repeated, top, emptySections, tocIssues } = result
  console.log(`\n=== ${file} (${locale}) ===`)

  console.log(`\n-- Top-of-page blocks above first non-TL;DR section: ${top.count} (budget: ${MAX_TOP_BLOCKS}) --`)
  console.log(`   leadAnswerBlock: ${top.hasLeadAnswer ? 'present' : 'absent'}, quickAnswerTop: ${top.hasQuickAnswerTop ? 'present' : 'absent'}, isTldr sections before first real section: ${top.tldrSections.join(', ') || 'none'}`)
  if (top.count > MAX_TOP_BLOCKS) console.log(`   VIOLATION: ${top.count} > ${MAX_TOP_BLOCKS}`)

  console.log(`\n-- Repeated 5-word phrases (>${MAX_PHRASE_OCCURRENCES} occurrences) --`)
  if (!repeated.length) {
    console.log('   none')
  } else {
    console.log('   count | phrase')
    for (const [phrase, count] of repeated) console.log(`   ${String(count).padStart(5)} | ${phrase}`)
  }

  console.log(`\n-- Empty sections (title, no body content) --`)
  if (!emptySections.length) {
    console.log('   none')
  } else {
    for (const s of emptySections) console.log(`   ${s.key}: "${s.title}"`)
  }

  console.log(`\n-- TOC entries with no matching rendered heading --`)
  if (!tocIssues.length) {
    console.log('   none')
  } else {
    for (const issue of tocIssues) console.log(`   ${issue}`)
  }

  const violations =
    (top.count > MAX_TOP_BLOCKS ? 1 : 0) + repeated.length + emptySections.length + tocIssues.length
  return violations
}

const rawArgs = process.argv.slice(2)
let locales = ['en']
const args = []
for (const a of rawArgs) {
  if (a === '--all-locales') locales = ALL_LOCALES
  else if (a.startsWith('--locale=')) locales = [a.slice('--locale='.length)]
  else args.push(a)
}
if (!args.length) {
  console.error('Usage: node scripts/check-repetition.mjs [--locale=xx | --all-locales] <path-to-article.ts | directory>')
  process.exit(2)
}

let totalViolations = 0
for (const target of args) {
  const files = readTarget(target)
  for (const file of files) {
    for (const locale of locales) {
      const result = checkFile(file, locale)
      if (!result) {
        console.log(`\n=== ${file} (${locale}) ===\n   no '${locale}' locale block found — skipped`)
        continue
      }
      totalViolations += printReport(result)
    }
  }
}

console.log(`\n${totalViolations} total violation(s).`)
process.exit(totalViolations > 0 ? 1 : 0)
