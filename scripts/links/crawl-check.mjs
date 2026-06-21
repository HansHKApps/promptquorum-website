#!/usr/bin/env node
/**
 * Full-site link health crawler for promptquorum.com
 *
 * Phase 1: Fetch every sitemap URL, record HTTP status.
 * Phase 2: On each fetched page extract all <a href> links, deduplicate, check each.
 * Output: link-crawl-report.json + FULL_SITE_LINK_CRAWL_REPORT.md
 *
 * Usage:
 *   node scripts/links/crawl-check.mjs [--concurrency=N] [--skip-external]
 *
 * Reads /tmp/sitemap-urls.txt (already fetched). Falls back to fetching sitemap live.
 */

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve } from 'path'

const BASE = 'https://www.promptquorum.com'
const CONCURRENCY = parseInt(process.argv.find(a => a.startsWith('--concurrency='))?.split('=')[1] ?? '20')
const SKIP_EXTERNAL = process.argv.includes('--skip-external')
const TIMEOUT_MS = 12000

// Domains to skip entirely (social / rate-limited / login-walled)
const SKIP_DOMAINS = [
  'twitter.com', 'x.com', 'linkedin.com', 'discord.com', 'discord.gg',
  'instagram.com', 'facebook.com', 'youtube.com', 'tiktok.com',
  'reddit.com', 't.me', 'github.com',  // github often rate-limits; skip for speed
]

const LOCALE_PREFIXES = ['de','fr','ja','zh','es','pt','ar','ko']
const CLUSTER_PATHS = ['local-llms','power-local-llm','prompt-bites','prompt-engineering','smart-home']

// ── helpers ──────────────────────────────────────────────────────────────────

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

async function fetchStatus(url, redirectCount = 0) {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(url, {
      method: 'HEAD',
      redirect: 'manual',
      signal: ctrl.signal,
      headers: { 'User-Agent': 'PromptQuorum-LinkChecker/1.0' },
    })
    clearTimeout(timer)
    const status = res.status
    const location = res.headers.get('location')
    if ((status === 301 || status === 302 || status === 307 || status === 308) && location && redirectCount < 5) {
      const target = location.startsWith('http') ? location : BASE + location
      return { status, redirect: target, chain: redirectCount + 1 }
    }
    return { status }
  } catch (e) {
    clearTimeout(timer)
    if (e.name === 'AbortError') return { status: 'TIMEOUT' }
    return { status: 'ERROR', error: String(e.message ?? e) }
  }
}

async function fetchHtml(url) {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      signal: ctrl.signal,
      headers: { 'User-Agent': 'PromptQuorum-LinkChecker/1.0' },
    })
    clearTimeout(timer)
    if (!res.ok) return null
    const ct = res.headers.get('content-type') ?? ''
    if (!ct.includes('text/html')) return null
    return await res.text()
  } catch {
    clearTimeout(timer)
    return null
  }
}

function extractLinks(html, pageUrl) {
  const links = []
  // Match href="..." or href='...'
  const re = /href=["']([^"'#][^"']*?)["']/g
  let m
  while ((m = re.exec(html)) !== null) {
    let href = m[1].trim()
    if (!href || href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:')) continue
    try {
      const abs = new URL(href, pageUrl).href.split('#')[0]
      links.push(abs)
    } catch {}
  }
  return [...new Set(links)]
}

async function pool(tasks, concurrency) {
  const results = []
  let i = 0
  async function worker() {
    while (i < tasks.length) {
      const idx = i++
      results[idx] = await tasks[idx]()
    }
  }
  const workers = Array.from({ length: Math.min(concurrency, tasks.length) }, worker)
  await Promise.all(workers)
  return results
}

// ── main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.error(`\n=== PromptQuorum Full-Site Link Crawl ===`)
  console.error(`Base: ${BASE}  |  Concurrency: ${CONCURRENCY}  |  Skip external: ${SKIP_EXTERNAL}`)

  // ── Phase 1: load sitemap URLs ──────────────────────────────────────────
  let sitemapUrls
  if (existsSync('/tmp/sitemap-urls.txt')) {
    sitemapUrls = readFileSync('/tmp/sitemap-urls.txt', 'utf8').split('\n').filter(Boolean)
    console.error(`Loaded ${sitemapUrls.length} URLs from /tmp/sitemap-urls.txt`)
  } else {
    console.error('Fetching sitemap...')
    const xml = await (await fetch(BASE + '/sitemap.xml')).text()
    sitemapUrls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])
    console.error(`Sitemap: ${sitemapUrls.length} URLs`)
  }

  // ── Phase 2: check every sitemap URL status ──────────────────────────────
  console.error(`\nPhase 1: Checking ${sitemapUrls.length} sitemap URLs...`)
  const sitemapResults = {}
  const sitemapTasks = sitemapUrls.map(url => async () => {
    const r = await fetchStatus(url)
    sitemapResults[url] = r
    if (r.status !== 200) process.stderr.write(`  [${r.status}] ${url}\n`)
    else process.stderr.write('.')
  })
  await pool(sitemapTasks, CONCURRENCY)
  console.error('\n')

  const sitemapBroken = Object.entries(sitemapResults).filter(([, r]) => r.status !== 200)
  console.error(`Sitemap broken: ${sitemapBroken.length}`)

  // ── Phase 3: fetch HTML from sitemap pages and extract links ─────────────
  // Only crawl EN pages + one per-locale sample to keep runtime sane.
  // EN = no locale prefix; grab ~400 EN pages + all locale hub pages
  const enPages = sitemapUrls.filter(u => {
    const path = u.replace(BASE, '')
    return !LOCALE_PREFIXES.some(l => path.startsWith(`/${l}/`) || path === `/${l}`)
  })
  const localeHubs = sitemapUrls.filter(u => {
    const path = u.replace(BASE, '')
    return LOCALE_PREFIXES.some(l => path === `/${l}` || CLUSTER_PATHS.some(c => path === `/${l}/${c}`))
  })
  // For locale article pages, sample 5 per locale to check for locale leaks
  const localeSamples = []
  for (const loc of LOCALE_PREFIXES) {
    const locArticles = sitemapUrls.filter(u => {
      const path = u.replace(BASE, '')
      return path.startsWith(`/${loc}/`) && CLUSTER_PATHS.some(c => path.includes(`/${c}/`))
    })
    // take first 5
    localeSamples.push(...locArticles.slice(0, 5))
  }

  const pagesToCrawl = [...new Set([...enPages, ...localeHubs, ...localeSamples])]
  console.error(`Phase 2: Crawling ${pagesToCrawl.length} pages for links...`)

  // link edge list: { from, to }
  const edges = []
  // per-page link map
  const pageLinks = {}
  // all unique targets seen
  const allTargets = new Set()

  let crawled = 0
  const htmlTasks = pagesToCrawl.map(pageUrl => async () => {
    const html = await fetchHtml(pageUrl)
    crawled++
    if (crawled % 50 === 0) process.stderr.write(`  crawled ${crawled}/${pagesToCrawl.length}\n`)
    if (!html) return
    const links = extractLinks(html, pageUrl)
    pageLinks[pageUrl] = links
    for (const lnk of links) allTargets.add(lnk)
    for (const lnk of links) edges.push({ from: pageUrl, to: lnk })
  })
  await pool(htmlTasks, CONCURRENCY)
  console.error(`\nExtracted ${edges.length} link edges, ${allTargets.size} unique targets`)

  // ── Phase 4: check all unique link targets ──────────────────────────────
  const internalTargets = [...allTargets].filter(u => u.startsWith(BASE))
  const externalTargets = [...allTargets].filter(u => !u.startsWith(BASE) && !SKIP_DOMAINS.some(d => u.includes(d)))

  const targetsToCheck = SKIP_EXTERNAL
    ? internalTargets
    : [...internalTargets, ...externalTargets]
  console.error(`Phase 3: Checking ${targetsToCheck.length} unique link targets (${internalTargets.length} internal, ${SKIP_EXTERNAL ? 'skip' : externalTargets.length} external)...`)

  const targetStatus = {}
  let checked = 0
  const checkTasks = targetsToCheck.map(url => async () => {
    const r = await fetchStatus(url)
    targetStatus[url] = r
    checked++
    if (checked % 100 === 0) process.stderr.write(`  checked ${checked}/${targetsToCheck.length}\n`)
  })
  await pool(checkTasks, CONCURRENCY)
  console.error(`\nLink checking complete.`)

  // ── Phase 5: analysis ────────────────────────────────────────────────────

  // 5a. Broken internal links (live 404/5xx)
  const brokenInternal = []
  for (const [url, r] of Object.entries(targetStatus)) {
    if (!url.startsWith(BASE)) continue
    if (r.status !== 200 && r.status !== 'TIMEOUT') {
      const sources = edges.filter(e => e.to === url).map(e => e.from)
      brokenInternal.push({ url, status: r.status, redirect: r.redirect, sources: sources.slice(0, 5) })
    }
  }

  // 5b. Broken external links
  const brokenExternal = []
  for (const [url, r] of Object.entries(targetStatus)) {
    if (url.startsWith(BASE)) continue
    if (r.status !== 200 && r.status !== 'TIMEOUT' && String(r.status).match(/^[45]/)) {
      const sources = edges.filter(e => e.to === url).map(e => e.from)
      brokenExternal.push({ url, status: r.status, sources: sources.slice(0, 3) })
    }
  }

  // 5c. Redirect chains
  const redirectLinks = []
  for (const [url, r] of Object.entries(targetStatus)) {
    if (r.redirect && url.startsWith(BASE)) {
      const sources = edges.filter(e => e.to === url).map(e => e.from)
      redirectLinks.push({ url, status: r.status, redirectTo: r.redirect, sources: sources.slice(0, 3) })
    }
  }

  // 5d. Orphans: sitemap URLs not reached by the crawl
  const crawledSet = new Set(Object.keys(pageLinks))
  const linkedToSet = new Set(edges.map(e => e.to))
  const orphans = sitemapUrls.filter(u => !linkedToSet.has(u) && !crawledSet.has(u))

  // 5e. Locale leaks: on a /xx/ page, an internal link to a non-/xx/ cluster URL
  const localeLeaks = {}
  for (const loc of LOCALE_PREFIXES) {
    localeLeaks[loc] = []
    const locPages = Object.keys(pageLinks).filter(p => p.replace(BASE, '').startsWith(`/${loc}/`))
    for (const page of locPages) {
      for (const lnk of pageLinks[page]) {
        if (!lnk.startsWith(BASE)) continue
        const lnkPath = lnk.replace(BASE, '')
        const isCluster = CLUSTER_PATHS.some(c => lnkPath.includes(`/${c}/`))
        if (!isCluster) continue
        const hasLocale = LOCALE_PREFIXES.some(l => lnkPath.startsWith(`/${l}/`))
        if (!hasLocale) {
          localeLeaks[loc].push({ page, leakyLink: lnk })
        }
      }
    }
  }

  // 5f. Sitemap URLs not returning 200
  const sitemapNon200 = Object.entries(sitemapResults)
    .filter(([, r]) => r.status !== 200)
    .map(([url, r]) => ({ url, status: r.status, redirect: r.redirect }))

  // ── Build report ──────────────────────────────────────────────────────────
  const totalLeaks = Object.values(localeLeaks).reduce((s, a) => s + a.length, 0)

  const jsonReport = {
    crawledAt: new Date().toISOString(),
    sitemapUrls: sitemapUrls.length,
    pagesCrawled: Object.keys(pageLinks).length,
    totalEdges: edges.length,
    uniqueTargets: allTargets.size,
    internalTargetsChecked: internalTargets.length,
    externalTargetsChecked: SKIP_EXTERNAL ? 0 : externalTargets.length,
    brokenInternal,
    brokenExternal,
    redirectLinks,
    orphans,
    localeLeaks,
    sitemapNon200,
  }

  writeFileSync('/tmp/link-crawl-report.json', JSON.stringify(jsonReport, null, 2))
  console.error('JSON written to /tmp/link-crawl-report.json')

  // ── Markdown report ───────────────────────────────────────────────────────
  const lines = []
  lines.push(`# Full Site Link Crawl Report`)
  lines.push(``)
  lines.push(`**Crawled:** ${new Date().toISOString().slice(0,10)}  `)
  lines.push(`**Sitemap URLs:** ${sitemapUrls.length}  `)
  lines.push(`**Pages crawled (HTML fetched):** ${Object.keys(pageLinks).length}  `)
  lines.push(`**Link edges found:** ${edges.length}  `)
  lines.push(`**Unique targets checked:** ${allTargets.size} (${internalTargets.length} internal + ${SKIP_EXTERNAL ? 'skipped' : externalTargets.length} external)`)
  lines.push(``)
  lines.push(`## Summary Table`)
  lines.push(``)
  lines.push(`| Category | Count | Notes |`)
  lines.push(`|---|---|---|`)
  lines.push(`| Sitemap URLs total | ${sitemapUrls.length} | |`)
  lines.push(`| Sitemap URLs non-200 | ${sitemapNon200.length} | |`)
  lines.push(`| Broken internal links (live 404/5xx) | ${brokenInternal.length} | vs 163 static estimate |`)
  lines.push(`| Broken external links | ${brokenExternal.length} | link rot |`)
  lines.push(`| Redirect-chain links | ${redirectLinks.length} | should point to final URL |`)
  lines.push(`| Orphan pages (in sitemap, not linked to) | ${orphans.length} | vs 44 grep estimate |`)
  lines.push(`| Locale-leak links (total across all locales) | ${totalLeaks} | live-verified |`)
  lines.push(``)

  lines.push(`## 1. Sitemap URLs Not Returning 200`)
  if (sitemapNon200.length === 0) {
    lines.push(`All ${sitemapUrls.length} sitemap URLs returned 200. ✓`)
  } else {
    for (const { url, status, redirect } of sitemapNon200) {
      lines.push(`- \`${status}\` ${url}${redirect ? ` → ${redirect}` : ''}`)
    }
  }
  lines.push(``)

  lines.push(`## 2. Broken Internal Links (Live 404/5xx)`)
  lines.push(``)
  if (brokenInternal.length === 0) {
    lines.push(`No broken internal links found. ✓`)
  } else {
    lines.push(`| Status | URL | Found on (sample) |`)
    lines.push(`|---|---|---|`)
    for (const { url, status, sources } of brokenInternal.slice(0, 100)) {
      const src = sources.slice(0, 2).map(s => s.replace(BASE, '')).join(', ')
      lines.push(`| ${status} | ${url.replace(BASE,'')} | ${src} |`)
    }
    if (brokenInternal.length > 100) lines.push(`\n*(${brokenInternal.length - 100} more not shown)*`)
  }
  lines.push(``)

  lines.push(`## 3. Broken External Links`)
  lines.push(``)
  if (brokenExternal.length === 0) {
    lines.push(`No broken external links found. ✓`)
  } else {
    for (const { url, status, sources } of brokenExternal.slice(0, 60)) {
      const src = sources[0]?.replace(BASE, '') ?? ''
      lines.push(`- \`${status}\` [${url}](${url}) — found on \`${src}\``)
    }
    if (brokenExternal.length > 60) lines.push(`\n*(${brokenExternal.length - 60} more in JSON)*`)
  }
  lines.push(``)

  lines.push(`## 4. Redirect-Chain Links`)
  lines.push(``)
  if (redirectLinks.length === 0) {
    lines.push(`No redirect links found. ✓`)
  } else {
    lines.push(`These links resolve via a redirect — update source hrefs to point at the final URL:`)
    for (const { url, status, redirectTo, sources } of redirectLinks.slice(0, 40)) {
      const src = sources[0]?.replace(BASE, '') ?? ''
      lines.push(`- \`${status}\` ${url.replace(BASE,'')} → ${redirectTo.replace(BASE,'')} (on \`${src}\`)`)
    }
  }
  lines.push(``)

  lines.push(`## 5. Orphan Pages (in sitemap, not linked from any crawled page)`)
  lines.push(``)
  lines.push(`*(Note: crawl only fetches EN pages + locale hubs + locale article samples; some locale article pages may appear as orphans here even if linked from another locale article. Cross-reference with Phase-1 static analysis for full orphan truth.)*`)
  lines.push(``)
  if (orphans.length === 0) {
    lines.push(`No orphans detected. ✓`)
  } else {
    for (const u of orphans.slice(0, 80)) {
      lines.push(`- ${u.replace(BASE, '')}`)
    }
    if (orphans.length > 80) lines.push(`\n*(${orphans.length - 80} more in JSON)*`)
  }
  lines.push(``)

  lines.push(`## 6. Locale-Leak Links (per locale)`)
  lines.push(``)
  lines.push(`A locale-leak is a link on a /xx/ page pointing to an EN cluster URL (missing /${'{locale'}}/ prefix). Only the sampled locale article pages (5 per locale) are checked here.`)
  lines.push(``)
  lines.push(`| Locale | Leaky links | Sample |`)
  lines.push(`|---|---|---|`)
  for (const loc of LOCALE_PREFIXES) {
    const leaks = localeLeaks[loc]
    const sample = leaks.slice(0,2).map(l => l.leakyLink.replace(BASE,'')).join(', ')
    lines.push(`| ${loc} | ${leaks.length} | ${sample} |`)
  }
  lines.push(``)

  if (totalLeaks > 0) {
    lines.push(`### Locale-leak detail`)
    lines.push(``)
    for (const loc of LOCALE_PREFIXES) {
      const leaks = localeLeaks[loc]
      if (!leaks.length) continue
      lines.push(`**/${loc}/:**`)
      for (const { page, leakyLink } of leaks.slice(0, 10)) {
        lines.push(`- \`${page.replace(BASE,'')}\` → \`${leakyLink.replace(BASE,'')}\``)
      }
    }
  }

  lines.push(``)
  lines.push(`---`)
  lines.push(`*Generated by scripts/links/crawl-check.mjs — re-run monthly for ongoing health checks.*`)

  const md = lines.join('\n')
  writeFileSync('FULL_SITE_LINK_CRAWL_REPORT.md', md)
  console.error('Markdown written to FULL_SITE_LINK_CRAWL_REPORT.md')

  // Print summary to stdout
  console.log(`\n=== CRAWL COMPLETE ===`)
  console.log(`Sitemap URLs:        ${sitemapUrls.length}`)
  console.log(`Pages crawled:       ${Object.keys(pageLinks).length}`)
  console.log(`Link edges:          ${edges.length}`)
  console.log(`Unique targets:      ${allTargets.size}`)
  console.log(`Broken internal:     ${brokenInternal.length}`)
  console.log(`Broken external:     ${brokenExternal.length}`)
  console.log(`Redirects:           ${redirectLinks.length}`)
  console.log(`Orphans (crawl):     ${orphans.length}`)
  console.log(`Locale leaks:        ${totalLeaks}`)
  console.log(`Sitemap non-200:     ${sitemapNon200.length}`)
}

main().catch(e => { console.error(e); process.exit(1) })
