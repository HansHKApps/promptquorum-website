#!/usr/bin/env node
/**
 * check-locale-coverage.mjs — pre-deploy guard against locale gaps on LIVE articles.
 *
 * Korean (ko), Brazilian Portuguese (pt) and Arabic (ar) are all indexed and served
 * under /ko/, /pt/ and /ar/ URLs. An article that ships an `es:` block but is missing
 * any of ko/pt/ar serves broken / English-fallback content on a live, crawled URL —
 * which actively hurts SEO. This script fails the build when that happens.
 *
 * Detection is INDENT-BASED, not substring-based. A naive `grep "es:"` matches
 * `dependencies:`, `sources:`, `siblingBites:` etc., and a naive `grep "ar:"` matches
 * Spanish prose ("...a abordar:"). Instead we find the smallest-indented set of
 * `<lang>: {` keys — those are the top-level language blocks — and only count a
 * language as present when it appears at exactly that base indent. Nested keys such
 * as quickAnswerTop's `en:` / `pt:` / `ar:` sub-keys sit at a deeper indent and are
 * correctly ignored.
 *
 * Usage:  node scripts/check-locale-coverage.mjs
 * Exit 0 = every es-bearing article also has ko + pt + ar at the top level.
 * Exit 1 = at least one gap; offending files + missing langs are listed.
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()

// Article source directories, one per content cluster.
const CLUSTER_DIRS = [
  'src/lib/local-llms/articles',
  'src/lib/prompt-engineering/articles',
  'src/lib/power-local-llm/articles',
  'src/lib/prompt-bites/articles',
  'src/lib/smart-home/articles',
  'src/lib/balcony-solar/articles',
]

// All path-prefix-routed languages. `es` is the canonical mirror source for the
// wave; ko/pt/ar are the live locales that must never lag behind it.
const REQUIRED_IF_ES = ['ko', 'pt', 'ar']
const LANG_CODES = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']

// Non-article files that live in the articles dirs but are not article data.
const SKIP_FILES = new Set(['index.ts', 'articles-barrel.ts', 'slugs.ts', 'types.ts'])

// Matches a `<lang>: {` line. We capture the leading whitespace to measure indent.
const LANG_OPEN_RE = new RegExp(`^(\\s+)(${LANG_CODES.join('|')})\\s*:\\s*\\{\\s*$`)

/**
 * Return the set of top-level language keys in an article file.
 * Strategy: collect every `<lang>: {` line with its indent width, take the minimum
 * indent (the article object's direct children), and return only the langs at that
 * indent. Returns null if no language block is found at all (not an article file).
 */
function topLevelLangs(source) {
  const hits = []
  for (const line of source.split('\n')) {
    const m = line.match(LANG_OPEN_RE)
    if (m) hits.push({ indent: m[1].length, lang: m[2] })
  }
  if (hits.length === 0) return null
  const baseIndent = Math.min(...hits.map(h => h.indent))
  return new Set(hits.filter(h => h.indent === baseIndent).map(h => h.lang))
}

const gaps = []
let scanned = 0

for (const dir of CLUSTER_DIRS) {
  const abs = join(ROOT, dir)
  if (!existsSync(abs)) continue
  for (const file of readdirSync(abs)) {
    if (!file.endsWith('.ts')) continue
    if (SKIP_FILES.has(file)) continue
    const source = readFileSync(join(abs, file), 'utf8')
    const langs = topLevelLangs(source)
    if (!langs || !langs.has('es')) continue // only es-bearing articles are in scope
    scanned++
    const missing = REQUIRED_IF_ES.filter(l => !langs.has(l))
    if (missing.length > 0) {
      gaps.push({ file: `${dir}/${file}`, missing })
    }
  }
}

if (gaps.length > 0) {
  console.error('\n❌ LOCALE COVERAGE CHECK FAILED\n')
  console.error('These LIVE es-bearing articles are missing required locale blocks')
  console.error('(ko/pt/ar are indexed — a gap serves broken content on a crawled URL):\n')
  for (const { file, missing } of gaps) {
    console.error(`  ${file}`)
    console.error(`    missing: ${missing.join(', ')}`)
  }
  console.error(`\n${gaps.length} file(s) with gaps. Add the missing top-level language block(s), mirroring es:.\n`)
  process.exit(1)
}

console.log(`✅ Locale coverage OK — ${scanned} es-bearing article(s), all have ko + pt + ar.`)
