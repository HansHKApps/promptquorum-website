#!/usr/bin/env node
/**
 * One-off codemod: reconcile authored `toc[].anchor` values with the ids the renderer emits.
 *
 * Two distinct defects hide behind an unresolved anchor, and they need opposite fixes:
 *
 *   A. "id gap"  — the section exists but carries no explicit `id`, so the renderer falls
 *                  back to slugifying its (translated) title, which never matches the
 *                  English anchor. Fix: give the section `id: '<anchor>'`.
 *   B. "orphan"  — the TOC promises a section that was never written (e.g. '#related-reading'
 *                  on articles with no related-reading section). Fix: drop the TOC entry;
 *                  inventing an id would only move the dead click.
 *
 * A section is matched to an anchor by its object key (`relatedReading` → 'related-reading',
 * `tldr` → 'tldr'), which is stable across locales — unlike the title.
 *
 * Usage:
 *   node scripts/fix-toc-anchors.mjs            # dry run, prints the plan
 *   node scripts/fix-toc-anchors.mjs --write    # apply
 */

import fs from 'node:fs'
import path from 'node:path'
import { localeBlocks as splitLocales } from './lib/article-locale-blocks.mjs'

const localeBlocks = (src) => splitLocales(src, LOCALES)

const CLUSTERS = ['local-llms', 'power-local-llm', 'prompt-engineering', 'smart-home', 'balcony-solar']
const LOCALES = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
const WRITE = process.argv.includes('--write')

// ids the article renderers emit themselves, outside the sections map:
// QuickAnswer.tsx (#quick-answer) and the FactsDisclaimer wrapper (#facts-disclaimer).
const RENDERER_IDS = ['quick-answer', 'facts-disclaimer']


const slugify = (s) => s.toLowerCase().replace(/[^\p{Letter}\p{Number}]+/gu, '-').replace(/^-+|-+$/g, '')
/**
 * Compare a section key against an anchor ignoring the separator convention, since the
 * corpus mixes all three: `relatedReading`, `related_reading` and `related-reading` all
 * refer to the same section.
 */
const normalizeKey = (k) => k.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase().replace(/[-_]/g, '')



/**
 * Section object keys, in source order, with the offset of their opening brace line.
 *
 * Nesting depth is not uniform across the corpus — some files put `sections:` two levels
 * deep, others three — so the indent is read from the `sections:` line rather than assumed.
 */
function sectionsIn(body) {
  const out = []
  const open = body.match(/\n([ ]*)sections: \{/)
  if (!open) return out
  const secIdx = open.index
  const childIndent = ' '.repeat(open[1].length + 2)
  const re = new RegExp(`\\n${childIndent}([a-zA-Z_][\\w]*): \\{`, 'g')
  for (const m of body.slice(secIdx + 1).matchAll(re)) {
    out.push({ key: m[1], at: secIdx + 1 + m.index + 1, header: m[0], indent: childIndent })
  }
  return out
}

function renderedIds(body) {
  const ids = new Set()
  for (const m of body.matchAll(/\bid:\s*'([^']+)'/g)) ids.add(m[1])
  for (const m of body.matchAll(/\btitle:\s*'((?:[^'\\]|\\.)*)'/g)) {
    const s = slugify(m[1])
    if (s) ids.add(s)
  }
  if (/isTldr:\s*true/.test(body)) ids.add('key-takeaways')
  for (const id of RENDERER_IDS) ids.add(id)
  return ids
}

/**
 * Which section does this anchor mean?
 *
 * Anchors are authored once (in English) and copied verbatim into every locale, while
 * section titles are translated — so resolving by title only ever works for `en`. Resolving
 * to a section *key* gives an answer that holds for all nine locales.
 */
function sectionIndexForAnchor(body, sections, anchor) {
  const byKey = sections.findIndex((s) => normalizeKey(s.key) === normalizeKey(anchor))
  if (byKey !== -1) return byKey

  // `faqSection` ⇄ `#faq`, `sourcesSection` ⇄ `#sources`, …
  const byKeySuffix = sections.findIndex(
    (s) => normalizeKey(s.key.replace(/section$/i, '')) === normalizeKey(anchor)
  )
  if (byKeySuffix !== -1) return byKeySuffix

  const titles = sections.map((s, i) => {
    const to = i + 1 < sections.length ? sections[i + 1].at : body.length
    return body.slice(s.at, to).match(/\btitle:\s*'((?:[^'\\]|\\.)*)'/)?.[1] ?? ''
  })

  const byTitle = titles.findIndex((t) => t && slugify(t) === anchor)
  if (byTitle !== -1) return byTitle

  // Anchors are routinely a shortened form of the heading — '#the-12-item-checklist' for
  // "The 12-Item Security Checklist", '#telemetry-settings' for "Telemetry Settings by Tool".
  // Accept an anchor whose words appear in the title in order, but only when exactly one
  // section matches, so an ambiguous anchor is left alone rather than mis-assigned.
  const want = anchor.split('-').filter(Boolean)
  const candidates = titles.reduce((acc, t, i) => {
    if (!t) return acc
    const have = slugify(t).split('-')
    let at = 0
    for (const w of want) {
      at = have.indexOf(w, at)
      if (at === -1) return acc
      at++
    }
    acc.push(i)
    return acc
  }, [])
  return candidates.length === 1 ? candidates[0] : -1
}

/** The `id:` this section already declares, if any. */
function explicitId(body, sections, i) {
  const from = sections[i].at
  const to = i + 1 < sections.length ? sections[i + 1].at : body.length
  const re = new RegExp(`\\n${sections[i].indent}  id:\\s*'([^']+)'`)
  return body.slice(from, to).match(re)?.[1] ?? null
}

let addedIds = 0
let retargeted = 0
let removedEntries = 0
let unresolved = 0
const touched = new Set()

for (const cluster of CLUSTERS) {
  const dir = path.join('src/lib', cluster, 'articles')
  if (!fs.existsSync(dir)) continue

  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.ts'))) {
    const full = path.join(dir, file)
    let src = fs.readFileSync(full, 'utf8')
    if (!/\btoc:\s*\[/.test(src)) continue

    // Resolve each anchor to a section *key* once, using the block it was authored in
    // (English, where the titles still match), then reuse that mapping for every locale.
    const anchorToKey = new Map()
    for (const { loc, start, end } of localeBlocks(src)) {
      if (loc !== 'en') continue
      const body = src.slice(start, end)
      const sections = sectionsIn(body)
      for (const m of body.matchAll(/anchor: '#?([^']+)'/g)) {
        const anchor = m[1].replace(/^#/, '')
        const i = sectionIndexForAnchor(body, sections, anchor)
        if (i !== -1) anchorToKey.set(anchor, sections[i].key)
      }
    }

    // Rebuild from the last locale backwards so earlier offsets stay valid.
    const blocks = localeBlocks(src)
    for (let b = blocks.length - 1; b >= 0; b--) {
      const { loc, start, end } = blocks[b]
      let body = src.slice(start, end)

      const ids = renderedIds(body)
      const sections = sectionsIn(body)
      const anchorLines = [...body.matchAll(/^(\s*)\{ label: (?:'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"), anchor: '#?([^']+)' \},?\n/gmu)]

      const bad = anchorLines.filter((m) => !ids.has(m[2].replace(/^#/, '')))
      if (!bad.length) continue

      // Pass A — the anchor names a section that exists (matched by object key).
      const stillBad = []
      for (const m of bad) {
        const anchor = m[2].replace(/^#/, '')
        const mappedKey = anchorToKey.get(anchor)
        const i = mappedKey
          ? sections.findIndex((s) => s.key === mappedKey)
          : sectionIndexForAnchor(body, sections, anchor)
        if (i === -1) {
          stillBad.push(m)
          continue
        }

        const existing = explicitId(body, sections, i)
        if (existing) {
          // The section already has an id under a different name (e.g. the `tldr` section
          // is rendered as `key-takeaways`). Point the TOC at the real id rather than
          // renaming the section — other articles and inbound links use that id.
          body = body.replace(m[0], m[0].replace(`anchor: '#${anchor}'`, `anchor: '#${existing}'`))
          retargeted++
        } else {
          const { header, indent } = sections[i]
          body = body.replace(header, `${header}\n${indent}  id: '${anchor}',`)
          addedIds++
        }
        touched.add(`${cluster}/${file}`)
        // Offsets shifted; recompute for the next anchor in this block.
        sections.splice(0, sections.length, ...sectionsIn(body))
      }

      // Pass A2 — unambiguous positional recovery. An anchor sitting between two anchors
      // that *did* resolve, with exactly one unclaimed section between their sections, can
      // only mean that section ('#telemetry-settings' for a `telemetry` section titled
      // "Telemetry Settings by Tool"). Anything less certain is left to pass B.
      const claimed = new Set()
      for (const m of anchorLines) {
        const a = m[2].replace(/^#/, '')
        const k = anchorToKey.get(a)
        const at = k ? sections.findIndex((s) => s.key === k) : sectionIndexForAnchor(body, sections, a)
        if (at !== -1) claimed.add(at)
      }
      const orderedClaims = [...claimed].sort((x, y) => x - y)
      const stillBad2 = []
      for (const m of stillBad) {
        const pos = anchorLines.indexOf(m)
        const prev = anchorLines.slice(0, pos).map((x) => x[2].replace(/^#/, ''))
        const next = anchorLines.slice(pos + 1).map((x) => x[2].replace(/^#/, ''))
        const idxOf = (a) => {
          const k = anchorToKey.get(a)
          return k ? sections.findIndex((s) => s.key === k) : sectionIndexForAnchor(body, sections, a)
        }
        const lo = prev.map(idxOf).filter((x) => x !== -1).pop() ?? -1
        const hi = next.map(idxOf).filter((x) => x !== -1).shift() ?? sections.length
        const gap = sections
          .map((_, i) => i)
          .filter((i) => i > lo && i < hi && !orderedClaims.includes(i))
        // Only one anchor unresolved in this gap, and only one section free in it.
        const rivals = stillBad.filter((o) => {
          const p2 = anchorLines.indexOf(o)
          return p2 > (lo === -1 ? -1 : anchorLines.findIndex((x) => idxOf(x[2].replace(/^#/, '')) === lo)) && p2 < pos + 1 + next.findIndex((a) => idxOf(a) !== -1) + 1
        })
        if (gap.length !== 1 || rivals.length > 1) {
          stillBad2.push(m)
          continue
        }
        const i = gap[0]
        const existing = explicitId(body, sections, i)
        if (existing) {
          body = body.replace(m[0], m[0].replace(`anchor: '#${m[2].replace(/^#/, '')}'`, `anchor: '#${existing}'`))
          retargeted++
        } else {
          const { header, indent } = sections[i]
          body = body.replace(header, `${header}\n${indent}  id: '${m[2].replace(/^#/, '')}',`)
          addedIds++
        }
        claimed.add(i)
        touched.add(`${cluster}/${file}`)
        sections.splice(0, sections.length, ...sectionsIn(body))
      }
      stillBad.splice(0, stillBad.length, ...stillBad2)

      // Pass B — no such section anywhere: the TOC entry is a promise the page can't keep.
      for (const m of stillBad) {
        const line = m[0]
        if (!body.includes(line)) {
          unresolved++
          continue
        }
        body = body.replace(line, '')
        removedEntries++
        touched.add(`${cluster}/${file}`)
      }

      if (!WRITE) {
        console.log(
          `${cluster}/${file} [${loc}]  fixed: ${bad.length - stillBad.length}  -entries: ${stillBad.length}`
        )
      }
      src = src.slice(0, start) + body + src.slice(end)
    }

    if (WRITE) fs.writeFileSync(full, src)
  }
}

console.log(
  `\n${WRITE ? 'Applied' : 'Would apply'}: ${addedIds} explicit ids added, ${retargeted} anchors retargeted, ${removedEntries} orphan TOC entries removed, across ${touched.size} files.` +
    (unresolved ? ` ${unresolved} anchors could not be rewritten — inspect manually.` : '')
)
if (!WRITE) console.log('Dry run. Re-run with --write to apply.')
