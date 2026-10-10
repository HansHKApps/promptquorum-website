#!/usr/bin/env node
// Crawl check for the review-page directory funnel, against a running server
// (`npx next start --port 3433` after a build).
//
//   node scripts/check-directory-funnel-links.mjs [--base http://localhost:3433] [--concurrency 8] [--sample N]
//
// For every review page x 9 locales it fetches the server-rendered HTML and fails if:
//   * the page does not contain exactly one start block and one end block,
//   * any href inside a block / "Compare in directory" link does not resolve (404/5xx),
//   * a tool deep link (?tool=<slug>) points at a slug that is not in the directory,
//   * the review's own tool appears among the block's similar tools.
// It also fetches a set of NON-review pages and fails if any contains a block.

import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const arg = (n, d) => { const i = process.argv.indexOf(`--${n}`); return i > -1 ? process.argv[i + 1] : d }
const BASE = arg('base', 'http://localhost:3433')
const CONC = Number(arg('concurrency', '8'))
const SAMPLE = Number(arg('sample', '0'))

const jiti = createJiti(import.meta.url, { alias: { '@': path.join(ROOT, 'src') }, interopDefault: true })
const index = jiti('@/generated/feature-review-index.json')
const { localAiApps } = jiti('@/lib/power-local-llm/apps-barrel')
const toolSlugs = new Set(localAiApps.map((a) => a.slug))

const LANGS = ['en', 'de', 'fr', 'es', 'ja', 'zh', 'pt', 'ar', 'ko']
let pages = []
for (const [appSlug, v] of Object.entries(index)) for (const l of LANGS) pages.push({ appSlug, lang: l, url: (l === 'en' ? '' : `/${l}`) + v.url })
if (SAMPLE > 0) pages = pages.filter((_, i) => i % Math.ceil(pages.length / SAMPLE) === 0)

const NON_REVIEW = [
  '/power-local-llm/local-llm-code-review-ci-cd', '/power-local-llm/best-local-llms-code-review', '/directory',
  '/local-llms', '/power-local-llm', '/de/power-local-llm', '/', '/about',
]

const failures = []
const fail = (url, msg) => failures.push(`${url}: ${msg}`)
const pathStatus = new Map()

async function status(p) {
  const key = p.split('?')[0]
  if (pathStatus.has(key)) return pathStatus.get(key)
  const pr = (async () => {
    try {
      const r = await fetch(BASE + key, { redirect: 'follow' })
      await r.arrayBuffer()
      return r.status
    } catch (e) { return `ERR ${e.message}` }
  })()
  pathStatus.set(key, pr)
  return pr
}

function blocksOf(html) {
  const out = []
  const re = /<aside\b[^>]*data-directory-block="(start|end)"[^>]*>([\s\S]*?)<\/aside>/g
  let m
  while ((m = re.exec(html))) out.push({ position: m[1], html: m[2] })
  return out
}
const hrefs = (html) => [...html.matchAll(/href="([^"#]+)/g)].map((m) => m[1].replace(/&amp;/g, '&'))

async function checkPage(p) {
  let res
  try { res = await fetch(BASE + p.url, { redirect: 'follow' }) } catch (e) { return fail(p.url, `fetch failed: ${e.message}`) }
  if (res.status !== 200) return fail(p.url, `HTTP ${res.status}`)
  const html = await res.text()
  const blocks = blocksOf(html)
  const starts = blocks.filter((b) => b.position === 'start').length
  const ends = blocks.filter((b) => b.position === 'end').length
  if (starts !== 1 || ends !== 1) fail(p.url, `expected 1 start + 1 end block, found ${starts} + ${ends}`)

  const links = new Set(blocks.flatMap((b) => hrefs(b.html)))
  for (const m of html.matchAll(/<a\b[^>]*data-directory-compare[^>]*href="([^"]+)"|<a\b[^>]*href="([^"]+)"[^>]*data-directory-compare/g)) links.add((m[1] ?? m[2]).replace(/&amp;/g, '&'))
  for (const l of links) {
    const u = new URL(l, 'http://x.test')
    if (u.searchParams.has('tool')) {
      const t = u.searchParams.get('tool')
      if (!toolSlugs.has(t)) fail(p.url, `deep link to unknown tool "${t}"`)
    }
    const s = await status(u.pathname)
    if (s !== 200) fail(p.url, `${l} -> ${s}`)
  }
  // Competitor-row links (and any other ?tool= link) anywhere on the page: slug must exist.
  for (const m of html.matchAll(/href="((?:\/[a-z]{2})?\/directory\?[^"]*\btool=([a-z0-9._-]+)[^"]*)"/g)) {
    if (!toolSlugs.has(m[2])) fail(p.url, `deep link to unknown tool "${m[2]}"`)
  }
  // the reviewed tool must not appear among the "similar" cards (anything but the first "View X" link)
  {
    for (const b of blocks) {
      const li = [...b.html.matchAll(/<li\b[\s\S]*?<\/li>/g)].map((x) => x[0])
      if (li.some((x) => x.includes(`tool=${p.appSlug}`))) fail(p.url, 'reviewed tool listed among similar tools')
    }
  }
}

async function checkNonReview(u) {
  let res
  try { res = await fetch(BASE + u, { redirect: 'follow' }) } catch (e) { return fail(u, `fetch failed: ${e.message}`) }
  if (res.status !== 200) return // not part of this check
  const html = await res.text()
  if (html.includes('data-directory-block=') || html.includes('data-directory-compare')) fail(u, 'directory block present on a non-review page')
}

async function pool(items, n, fn) {
  let i = 0
  await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) await fn(items[i++]) }))
}

const t0 = Date.now()
await pool(pages, CONC, checkPage)
await pool(NON_REVIEW, CONC, checkNonReview)
console.log(`${pages.length} review pages + ${NON_REVIEW.length} non-review pages, ${pathStatus.size} distinct link targets, ${((Date.now() - t0) / 1000).toFixed(0)}s`)
if (failures.length) {
  console.error(`\n${failures.length} failure(s):`)
  for (const f of failures.slice(0, 60)) console.error('  - ' + f)
  process.exit(1)
}
console.log('OK — every review page has exactly one start and one end block, all links resolve, no blocks elsewhere.')
