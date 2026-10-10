#!/usr/bin/env node
// One-off cleanup for the review-page directory funnel (DirectoryBlock).
//
// The old "This review is the deep-dive companion to X's entry in the Local LLM
// Software Directory …" note box is hand-authored in each review's `tldr`
// callouts. DirectoryBlock now carries that message, so the pure duplicate is
// removed — and ONLY the pure duplicate:
//
//   * The EN callout must match the exact template below with nothing after the
//     final period. Any extra sentence (a "based on its own repository, not
//     independent testing" disclaimer, say) means the note is kept, in every
//     locale.
//   * A locale's callout is removed only when EN was removed AND that locale has
//     exactly one note in the same `tldr.callouts` array linking to the
//     directory AND its length is within 0.5x–2.5x of the EN text (0.15x for
//     zh/ja/ko, which are naturally much shorter in characters).
//   * Only files whose basename is a review page (feature-review-index.json or a
//     tile `reviewSlug`) are touched.
//   * Line-based, single-line callouts only; anything else is reported, not edited.
//
// Default is a dry run. `--write` applies. Prints per-file results and a
// leftover list (notes that link to the directory but were not removed).

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const WRITE = process.argv.includes('--write')
const DIRS = ['src/lib/power-local-llm/articles', 'src/lib/local-llms/articles']
const LOCALES = ['en', 'de', 'fr', 'es', 'ja', 'zh', 'pt', 'ar', 'ko']

// --- which files are review pages ----------------------------------------
const reviewIndex = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/generated/feature-review-index.json'), 'utf8'))
const reviewNames = new Set(Object.values(reviewIndex).map((v) => v.urlSlug))
for (const f of fs.readdirSync(path.join(ROOT, 'src/lib/power-local-llm/apps'))) {
  const m = fs.readFileSync(path.join(ROOT, 'src/lib/power-local-llm/apps', f), 'utf8').match(/reviewSlug:\s*'([^']+)'/)
  if (m) reviewNames.add(m[1])
}
reviewNames.add('microsoft-agent-framework-review')

// --- templates ------------------------------------------------------------
const NOTE_LINE = /^(\s*)\{ type: 'note', text: (['"])(.*)\2 \},?\s*$/
const DIR_LINK = /\]\((?:https:\/\/www\.promptquorum\.com)?\/(?:(?:de|fr|es|ja|zh|pt|ar|ko)\/)?(?:directory|power-local-llm\/local-llm-software-directory(?:-2026)?)[^)]*\)/
const EN_PURE =
  /^This review is the deep-dive companion to .+? entry in the \[[^\]]+\]\([^)]*\) — see that page for (?:how .+? compares at a glance to dozens of other [^.]+? tools|the full catalog)\.$/

const unescape = (s) => s.replace(/\\'/g, "'").replace(/\\"/g, '"')

let removedTotal = 0
const leftovers = []
const skippedNotReview = []
const report = []

for (const dir of DIRS) {
  for (const file of fs.readdirSync(path.join(ROOT, dir)).filter((f) => f.endsWith('.ts')).sort()) {
    const abs = path.join(ROOT, dir, file)
    const src = fs.readFileSync(abs, 'utf8')
    if (!DIR_LINK.test(src)) continue
    const base = file.replace(/\.ts$/, '')
    const lines = src.split('\n')

    // Walk: locale -> tldr -> callouts arrays (single-line notes only).
    let locale = null
    let section = null
    const arrays = [] // { locale, start, end, notes: [{ i, text }] }
    for (let i = 0; i < lines.length; i++) {
      const lm = lines[i].match(/^ {2}(en|de|fr|es|ja|zh|pt|ar|ko): \{/)
      if (lm) { locale = lm[1]; section = null; continue }
      const sm = lines[i].match(/^ {6}([A-Za-z0-9_]+): \{/)
      if (sm) section = sm[1]
      if (section === 'tldr' && /^\s+callouts: \[\s*$/.test(lines[i])) {
        const arr = { locale, start: i, end: -1, notes: [], other: 0 }
        let j = i + 1
        for (; j < lines.length && !/^\s+\],?\s*$/.test(lines[j]); j++) {
          const nm = lines[j].match(NOTE_LINE)
          if (nm && DIR_LINK.test(nm[3])) arr.notes.push({ i: j, text: unescape(nm[3]) })
          else arr.other++
        }
        arr.end = j
        arrays.push(arr)
        i = j
      }
    }
    if (arrays.length === 0) continue

    const enArr = arrays.find((a) => a.locale === 'en')
    const enNote = enArr && enArr.notes.length === 1 ? enArr.notes[0] : null
    const pure = enNote && EN_PURE.test(enNote.text)
    if (!pure) {
      for (const a of arrays) for (const n of a.notes) leftovers.push(`${dir}/${file}:${n.i + 1} [${a.locale}]`)
      continue
    }
    if (!reviewNames.has(base)) { skippedNotReview.push(`${dir}/${file}`); continue }

    const kill = new Set([enNote.i])
    const emptied = []
    const enLen = enNote.text.length
    for (const a of arrays) {
      if (a.locale === 'en') continue
      if (a.notes.length !== 1) { for (const n of a.notes) leftovers.push(`${dir}/${file}:${n.i + 1} [${a.locale}] (count ${a.notes.length})`); continue }
      const n = a.notes[0]
      const ratio = n.text.length / enLen
      const lo = ['zh', 'ja', 'ko'].includes(a.locale) ? 0.15 : 0.5
      if (ratio < lo || ratio > 2.5) { leftovers.push(`${dir}/${file}:${n.i + 1} [${a.locale}] (length ratio ${ratio.toFixed(2)})`); continue }
      kill.add(n.i)
    }
    for (const a of arrays) {
      const mine = a.notes.filter((n) => kill.has(n.i)).length
      if (mine > 0 && a.notes.length === mine && a.other === 0) emptied.push(a)
    }
    // Drop `callouts: [` … `],` entirely when the array would be left empty.
    for (const a of emptied) for (let k = a.start; k <= a.end; k++) kill.add(k)

    removedTotal += [...kill].filter((k) => lines[k].match(NOTE_LINE)).length
    report.push(`${dir}/${file}: -${kill.size} lines (${[...new Set(arrays.filter((a) => a.notes.some((n) => kill.has(n.i))).map((a) => a.locale))].join(',')})`)
    if (WRITE) fs.writeFileSync(abs, lines.filter((_, i) => !kill.has(i)).join('\n'))
  }
}

console.log(report.join('\n'))
console.log(`\n${WRITE ? 'APPLIED' : 'DRY RUN'}: ${report.length} files, ${removedTotal} note callouts removed`)
if (skippedNotReview.length) console.log(`\nSkipped (not a review page):\n  ${skippedNotReview.join('\n  ')}`)
console.log(`\nLeft in place (link to the directory but not a pure duplicate): ${leftovers.length}`)
for (const l of leftovers) console.log('  ' + l)
