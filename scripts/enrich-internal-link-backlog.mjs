#!/usr/bin/env node
// scripts/enrich-internal-link-backlog.mjs
//
// PHASE 1 (enrich, don't fix). One-off sidecar that classifies every unresolved
// internal link found by validate-internal-links.mjs into:
//   RENAMED     — a redirect OR a near-identical live slug resolves it (canonical recorded)
//   TITLE_MATCH — a real published article's title clearly matches the broken slug
//   PHANTOM     — no slug, no redirect, no plausible candidate
//   AMBIGUOUS   — 2+ plausible targets, none exact (human decision needed)
//
// Heuristic (slug-token + title-token similarity). NOT authoritative — a triage aid.
// Read-only on article content. Writes ONLY reports/internal-link-backlog.md.

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const LANGS = ['de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
const CLUSTER_SLUGFILES = {
  'local-llms': 'src/lib/local-llms/slugs.ts',
  'prompt-engineering': 'src/lib/prompt-engineering/slugs.ts',
  'power-local-llm': 'src/lib/power-local-llm/slugs.ts',
  'prompt-bites': 'src/lib/prompt-bites/slugs.ts',
  'smart-home': 'src/lib/smart-home/slugs.ts',
  'blog': 'src/lib/blogSlugs.ts',
}
const ARTICLE_DIRS = {
  'local-llms': 'src/lib/local-llms/articles',
  'prompt-engineering': 'src/lib/prompt-engineering/articles',
  'power-local-llm': 'src/lib/power-local-llm/articles',
  'prompt-bites': 'src/lib/prompt-bites/articles',
  'smart-home': 'src/lib/smart-home/articles',
}
const STATIC_ALLOW = new Set([
  '/', '/features', '/features/optimization', '/features/quorum',
  '/how-it-works', '/compare', '/faq', '/about', '/blog', '/waitlist',
  '/privacy', '/terms', '/glossary', '/contact',
])
const UNVALIDATED_CLUSTERS = new Set(['frameworks'])
const STOP = new Set(['the','a','an','to','for','of','and','or','in','on','with','how','what','why','is','are','your','you','vs','guide','&'])

function read(file) { const p = path.join(ROOT, file); return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '' }

// slug map -> [ [urlSlug, key], ... ]
function readSlugMap(file) {
  const out = []
  const re = /^\s*'([a-z0-9-]+)'\s*:\s*'([^']+)'/gm
  let m; const src = read(file)
  while ((m = re.exec(src))) out.push([m[1], m[2]])
  return out
}
function readRedirects() {
  const map = new Map()
  const src = read('next.config.ts')
  const re = /source:\s*'([^']+)'\s*,\s*destination:\s*'([^']+)'/g
  let m
  while ((m = re.exec(src))) map.set(m[1].replace(/\/$/, ''), m[2])
  return map
}
// key -> article title (first title: in the file = EN article title)
function buildKeyTitles() {
  const kt = {}
  for (const dir of Object.values(ARTICLE_DIRS)) {
    const abs = path.join(ROOT, dir)
    if (!fs.existsSync(abs)) continue
    for (const f of fs.readdirSync(abs)) {
      if (!f.endsWith('.ts')) continue
      const src = fs.readFileSync(path.join(abs, f), 'utf8')
      const m = src.match(/title:\s*'((?:[^'\\]|\\.)*)'/)
      kt[f.replace(/\.ts$/, '')] = m ? m[1].replace(/\\'/g, "'") : ''
    }
  }
  return kt
}

// cluster -> Set of existing article file basenames (key/slug for split-file clusters)
function buildFileKeys() {
  const fk = {}
  for (const [cluster, dir] of Object.entries(ARTICLE_DIRS)) {
    const abs = path.join(ROOT, dir)
    fk[cluster] = new Set()
    if (!fs.existsSync(abs)) continue
    for (const f of fs.readdirSync(abs)) if (f.endsWith('.ts')) fk[cluster].add(f.replace(/\.ts$/, ''))
  }
  return fk
}

const redirects = readRedirects()
const keyTitles = buildKeyTitles()
const fileKeys = buildFileKeys()
// catalog: cluster -> [ {slug, title} ]
const catalog = {}
const slugSets = {}
const keyToUrlSlug = {} // cluster -> { key: urlSlug } (a link using the internal key should point at urlSlug)
for (const [cluster, file] of Object.entries(CLUSTER_SLUGFILES)) {
  const pairs = readSlugMap(file)
  slugSets[cluster] = new Set(pairs.map(([s]) => s))
  catalog[cluster] = pairs.map(([slug, key]) => ({ slug, title: keyTitles[key] || '' }))
  keyToUrlSlug[cluster] = {}
  for (const [slug, key] of pairs) if (key !== slug && !keyToUrlSlug[cluster][key]) keyToUrlSlug[cluster][key] = slug
}

function normalize(p) { return p.split('#')[0].split('?')[0].replace(/\/$/, '') || '/' }
function stripLang(p) {
  const m = p.match(/^\/([a-z]{2})(\/|$)/)
  return (m && LANGS.includes(m[1])) ? (p.slice(m[1].length + 1) || '/') : p
}
function tokens(str) {
  return str.toLowerCase().split(/[^a-z0-9]+/).filter(t => t && !STOP.has(t))
}
function jaccard(a, b) {
  const A = new Set(a), B = new Set(b); if (!A.size || !B.size) return 0
  let inter = 0; for (const x of A) if (B.has(x)) inter++
  return inter / (A.size + B.size - inter)
}
function coverage(needle, hay) { // fraction of needle tokens present in hay
  if (!needle.length) return 0
  const H = new Set(hay); let c = 0; for (const t of needle) if (H.has(t)) c++
  return c / needle.length
}

// ── resolution (mirror validator) ────────────────────────────────────────────
function isResolved(rawPath) {
  const p = normalize(rawPath)
  if (STATIC_ALLOW.has(p) || redirects.has(p)) return true
  const rest = stripLang(p)
  if (STATIC_ALLOW.has(rest) || redirects.has(rest)) return true
  const seg = rest.split('/').filter(Boolean)
  if (!seg.length) return true
  const cluster = seg[0]
  if (seg.length === 1) return Object.keys(CLUSTER_SLUGFILES).includes(cluster) || UNVALIDATED_CLUSTERS.has(cluster)
  if (UNVALIDATED_CLUSTERS.has(cluster)) return true
  if (!(cluster in slugSets)) return false
  return slugSets[cluster].has(seg[1])
}

// ── classify one broken link ─────────────────────────────────────────────────
function classify(rawPath, anchorTitle) {
  const p = normalize(rawPath)
  const rest = stripLang(p)
  // 1. RENAMED via redirect
  if (redirects.has(p)) return { cat: 'RENAMED', target: redirects.get(p), title: '(redirect)' }
  if (redirects.has(rest)) return { cat: 'RENAMED', target: redirects.get(rest), title: '(redirect)' }

  const seg = rest.split('/').filter(Boolean)
  const cluster = seg[0]
  const slug = seg[1] || ''
  if (!slug) return { cat: 'PHANTOM', target: '', title: '' }
  // external / malformed (domain-looking)
  if (cluster.includes('.')) return { cat: 'PHANTOM', target: '', title: '(external/malformed)' }
  // 2. RENAMED — link used the article's internal KEY; a live url-slug maps to it
  if (keyToUrlSlug[cluster] && keyToUrlSlug[cluster][slug]) {
    const url = keyToUrlSlug[cluster][slug]
    return { cat: 'RENAMED', target: url, title: `${keyTitles[slug] || ''} — link uses internal key; repoint to url-slug` }
  }
  // 3. UNREGISTERED — article file exists but its key is in NO slug map (404 despite real content)
  if (fileKeys[cluster] && fileKeys[cluster].has(slug)) {
    return { cat: 'UNREGISTERED', target: slug, title: `${keyTitles[slug] || '(file exists)'} — register slug in slugs.ts + barrel` }
  }
  const pool = catalog[cluster] || []
  if (!pool.length) return { cat: 'PHANTOM', target: '', title: `(unknown cluster "${cluster}")` }

  const sTok = slug.split('-').filter(t => !STOP.has(t))
  const aTok = tokens(anchorTitle || '')
  const scored = pool.map(c => {
    const slugScore = jaccard(sTok, c.slug.split('-').filter(t => !STOP.has(t)))
    const cTitleTok = tokens(c.title)
    // title score: best of (broken-slug tokens in candidate title) and (anchor tokens in candidate title)
    const titleScore = Math.max(coverage(sTok, cTitleTok), aTok.length ? coverage(aTok, cTitleTok) : 0)
    return { ...c, slugScore, titleScore, best: Math.max(slugScore, titleScore) }
  }).sort((x, y) => y.best - x.best)

  const strongSlug = scored.filter(c => c.slugScore >= 0.7)
  const strongTitle = scored.filter(c => c.titleScore >= 0.66)
  const moderate = scored.filter(c => c.slugScore >= 0.4 || c.titleScore >= 0.45)

  if (strongSlug.length === 1 && (strongTitle.length <= 1)) {
    return { cat: 'RENAMED', target: strongSlug[0].slug, title: strongSlug[0].title }
  }
  if (strongSlug.length >= 2) {
    return { cat: 'AMBIGUOUS', target: strongSlug.slice(0,3).map(c=>c.slug).join(' | '), title: strongSlug.slice(0,3).map(c=>c.title).join(' | ') }
  }
  if (strongTitle.length === 1) {
    return { cat: 'TITLE_MATCH', target: strongTitle[0].slug, title: strongTitle[0].title }
  }
  if (strongTitle.length >= 2) {
    return { cat: 'AMBIGUOUS', target: strongTitle.slice(0,3).map(c=>c.slug).join(' | '), title: strongTitle.slice(0,3).map(c=>c.title).join(' | ') }
  }
  if (moderate.length >= 2) {
    return { cat: 'AMBIGUOUS', target: moderate.slice(0,3).map(c=>c.slug).join(' | '), title: moderate.slice(0,3).map(c=>c.title).join(' | ') }
  }
  if (moderate.length === 1 && moderate[0].titleScore >= 0.5) {
    return { cat: 'TITLE_MATCH', target: moderate[0].slug, title: moderate[0].title }
  }
  return { cat: 'PHANTOM', target: '', title: '' }
}

// ── collect unresolved links across article files ────────────────────────────
const findings = []
for (const [cluster, dir] of Object.entries(ARTICLE_DIRS)) {
  const abs = path.join(ROOT, dir)
  if (!fs.existsSync(abs)) continue
  for (const f of fs.readdirSync(abs)) {
    if (!f.endsWith('.ts')) continue
    const src = fs.readFileSync(path.join(abs, f), 'utf8')
    src.split('\n').forEach((line, i) => {
      const links = []
      let m
      const urlRe = /url:\s*'(\/[^']*)'/g
      while ((m = urlRe.exec(line))) { const t = line.match(/title:\s*'((?:[^'\\]|\\.)*)'/); links.push({ url: m[1], title: t ? t[1] : '' }) }
      const mdRe = /\]\((\/[^)]*)\)/g
      while ((m = mdRe.exec(line))) links.push({ url: m[1], title: '' })
      for (const lk of links) {
        if (isResolved(lk.url)) continue
        const lang = (lk.url.match(/^\/([a-z]{2})\//) || [])[1]
        const cls = classify(lk.url, lk.title)
        findings.push({
          fileCluster: cluster,
          file: `${dir}/${f}`,
          locale: LANGS.includes(lang) ? lang : 'en',
          anchor: lk.title,
          url: lk.url,
          ...cls,
        })
      }
    })
  }
}

// ── write enriched report ────────────────────────────────────────────────────
const CATS = ['RENAMED', 'UNREGISTERED', 'TITLE_MATCH', 'AMBIGUOUS', 'PHANTOM']
// linkCluster = cluster from the url (where it points), used for grouping
function urlCluster(u) { const seg = stripLang(normalize(u)).split('/').filter(Boolean); return seg[0] || '(root)' }
for (const f of findings) f.linkCluster = urlCluster(f.url)

const clustersOrder = ['prompt-engineering', 'local-llms', 'power-local-llm', 'prompt-bites', 'smart-home', 'blog']
const seenClusters = [...new Set(findings.map(f => f.linkCluster))]
const orderedClusters = clustersOrder.filter(c => seenClusters.includes(c)).concat(seenClusters.filter(c => !clustersOrder.includes(c)))

function esc(s) { return (s || '').replace(/\|/g, '\\|') }
const lines = []
const now = new Date().toISOString().slice(0, 16).replace('T', ' ')
lines.push(`# Internal-link backlog — ENRICHED (Phase 1 classification)`)
lines.push(`Generated ${now} UTC by scripts/enrich-internal-link-backlog.mjs`)
lines.push(`Total unresolved links: ${findings.length}. Heuristic slug-token + title-token classification — NOT authoritative; TITLE_MATCH/AMBIGUOUS need human review. Phase 1 = enrich only, no edits.`)
lines.push('')
lines.push(`## Summary — counts per category per cluster`)
lines.push('')
lines.push(`| cluster | ${CATS.join(' | ')} | total |`)
lines.push(`|---|${CATS.map(() => '---').join('|')}|---|`)
const totals = Object.fromEntries(CATS.map(c => [c, 0]))
for (const c of orderedClusters) {
  const sub = findings.filter(f => f.linkCluster === c)
  const counts = CATS.map(cat => sub.filter(f => f.cat === cat).length)
  CATS.forEach((cat, i) => totals[cat] += counts[i])
  lines.push(`| ${c} | ${counts.join(' | ')} | ${sub.length} |`)
}
lines.push(`| **all** | ${CATS.map(c => `**${totals[c]}**`).join(' | ')} | **${findings.length}** |`)
lines.push('')

for (const c of orderedClusters) {
  const sub = findings.filter(f => f.linkCluster === c)
  lines.push(`## Cluster: ${c} (${sub.length})`)
  lines.push('')
  for (const cat of CATS) {
    const rows = sub.filter(f => f.cat === cat)
    if (!rows.length) continue
    lines.push(`### ${cat} (${rows.length})`)
    lines.push('')
    lines.push(`| file | locale | anchor title | broken url | candidate target | candidate real title |`)
    lines.push(`|---|---|---|---|---|---|`)
    for (const r of rows.sort((a, b) => a.file.localeCompare(b.file) || a.locale.localeCompare(b.locale))) {
      lines.push(`| ${esc(r.file.replace('src/lib/', ''))} | ${r.locale} | ${esc(r.anchor)} | ${esc(r.url)} | ${esc(r.target)} | ${esc(r.title)} |`)
    }
    lines.push('')
  }
}

fs.writeFileSync(path.join(ROOT, 'reports/internal-link-backlog.md'), lines.join('\n') + '\n')
console.log(`Enriched ${findings.length} links → reports/internal-link-backlog.md`)
console.log(`Categories: RENAMED=${totals.RENAMED} TITLE_MATCH=${totals.TITLE_MATCH} AMBIGUOUS=${totals.AMBIGUOUS} PHANTOM=${totals.PHANTOM}`)
