#!/usr/bin/env node
// scripts/check-index-rate-by-locale.mjs
//
// Tests the hypothesis: non-EN locale pages are indexed by Google at a
// materially lower rate than EN pages, and that under-indexing — not content
// volume — is what drives the low search-capture rates seen for pt/ar in
// particular (see language-capture-rate table in the task this script was
// built for: pt 13.2%, ar 9.5%, vs de 36.3%, ko 53.2%).
//
// CAVEATS — read before trusting the output:
//
//   1. Google does not expose the Page Indexing report (the 4.98k indexed /
//      5.75k not-indexed breakdown from Search Console's UI) via any API.
//      This script can only sample URLs that are IN THE SITEMAP and ask
//      Google's per-URL inspection endpoint whether each one is indexed.
//      It cannot tell you anything about the 5.75k "not indexed" URLs if
//      those URLs were never submitted to the sitemap in the first place —
//      that would show up here as "sitemap composition" being thin for a
//      locale, not as a low index rate among sampled URLs. Read step 3's
//      output (sitemap composition) together with the index-rate numbers:
//      thin sitemap presence and low index rate are two different failure
//      modes with two different fixes.
//   2. At the default 120 samples/locale, the margin of error on a
//      proportion is roughly ±9 percentage points (95% CI, worst-case
//      p=0.5). This is enough to detect a 10pp+ gap against EN but not to
//      distinguish, say, a 5pp real gap from noise.
//   3. Sampling is stratified (per locale) but still simple random within
//      each locale's URL list — it does not stratify further by cluster
//      (local-llms vs prompt-engineering vs blog etc), so a locale's result
//      could be skewed if one cluster dominates its sitemap share.
//
// USAGE:
//   export GSC_SA_KEY=/path/to/service-account.json
//   node scripts/check-index-rate-by-locale.mjs --dry-run     # sitemap composition only, 0 API calls
//   node scripts/check-index-rate-by-locale.mjs               # full run, default 120 samples/locale
//   node scripts/check-index-rate-by-locale.mjs --per-locale=60 --out=my-report.json
//
// Run --dry-run first. If pt/ar simply have far fewer sitemap URLs than
// de/ko, the low capture rate is a content-volume problem, not an indexing
// one, and the full API run (which burns API quota and takes minutes) is
// unnecessary.

import { readFileSync } from 'node:fs'
import { writeFileSync } from 'node:fs'
import { google } from 'googleapis'

const SITE_URL = 'https://www.promptquorum.com/'
const SITEMAP_URL = 'https://www.promptquorum.com/sitemap.xml'
const LOCALES = ['de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
const GAP_THRESHOLD_PP = 10
const RATE_LIMIT_MS = 120 // ~500/min, comfortably under the 600/min cap
const DAILY_QUOTA = 2000

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

const args = process.argv.slice(2)
const isDryRun = args.includes('--dry-run')
const perLocaleArg = args.find(a => a.startsWith('--per-locale='))
const perLocale = perLocaleArg ? parseInt(perLocaleArg.split('=')[1], 10) : 120
const outArg = args.find(a => a.startsWith('--out='))
const outPath = outArg ? outArg.split('=')[1] : 'index-rate-report.json'

// ---------------------------------------------------------------------------
// Sitemap fetching — follows sitemap-index nesting, dedupes
// ---------------------------------------------------------------------------

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'promptquorum-index-audit/1.0' } })
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`)
  return res.text()
}

function extractLocs(xml) {
  const matches = xml.matchAll(/<loc>\s*([^<\s][^<]*?)\s*<\/loc>/g)
  return [...matches].map(m => m[1].trim())
}

function isSitemapIndex(xml) {
  return /<sitemapindex[\s>]/.test(xml)
}

async function fetchAllSitemapUrls(rootUrl) {
  const seen = new Set()
  const queue = [rootUrl]
  const visitedSitemaps = new Set()

  while (queue.length > 0) {
    const current = queue.shift()
    if (visitedSitemaps.has(current)) continue
    visitedSitemaps.add(current)

    console.log(`  fetching ${current} ...`)
    const xml = await fetchText(current)
    const locs = extractLocs(xml)

    if (isSitemapIndex(xml)) {
      for (const loc of locs) queue.push(loc)
    } else {
      for (const loc of locs) seen.add(loc)
    }
  }

  return [...seen]
}

// ---------------------------------------------------------------------------
// Locale bucketing
// ---------------------------------------------------------------------------

function bucketLocale(url) {
  let path
  try {
    path = new URL(url).pathname
  } catch {
    return 'en'
  }
  const firstSegment = path.split('/').filter(Boolean)[0] ?? ''
  return LOCALES.includes(firstSegment) ? firstSegment : 'en'
}

function bucketUrls(urls) {
  const buckets = { en: [] }
  for (const l of LOCALES) buckets[l] = []
  for (const url of urls) {
    buckets[bucketLocale(url)].push(url)
  }
  return buckets
}

function printComposition(buckets, total) {
  console.log('\n================================================================')
  console.log('SITEMAP COMPOSITION')
  console.log('================================================================')
  const rows = [['en', ...([['en', buckets.en.length]])].slice(0, 0)] // no-op, keep structure simple below
  const order = ['en', ...LOCALES]
  const widest = Math.max(...order.map(l => l.length))
  for (const locale of order) {
    const count = buckets[locale].length
    const pct = total > 0 ? ((count / total) * 100).toFixed(1) : '0.0'
    console.log(`  ${locale.padEnd(widest)}  ${String(count).padStart(6)} URLs  (${pct}%)`)
  }
  console.log(`  ${'TOTAL'.padEnd(widest)}  ${String(total).padStart(6)} URLs`)
  console.log('================================================================\n')
}

// ---------------------------------------------------------------------------
// Stratified sampling (simple random within each locale bucket)
// ---------------------------------------------------------------------------

function sampleLocale(urls, n) {
  if (urls.length <= n) return [...urls]
  const pool = [...urls]
  const sample = []
  for (let i = 0; i < n; i++) {
    const idx = Math.floor(Math.random() * pool.length)
    sample.push(pool[idx])
    pool.splice(idx, 1)
  }
  return sample
}

// ---------------------------------------------------------------------------
// GSC URL Inspection API
// ---------------------------------------------------------------------------

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function getSearchConsoleClient() {
  const keyPath = process.env.GSC_SA_KEY
  if (!keyPath) {
    throw new Error('GSC_SA_KEY env var is not set — point it at your service account JSON key file.')
  }
  const keyFile = JSON.parse(readFileSync(keyPath, 'utf8'))
  const auth = new google.auth.GoogleAuth({
    credentials: keyFile,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  })
  const authClient = await auth.getClient()
  return google.searchconsole({ version: 'v1', auth: authClient })
}

async function inspectUrl(client, url, retriesLeft = 2) {
  try {
    const res = await client.urlInspection.index.inspect({
      requestBody: {
        inspectionUrl: url,
        siteUrl: SITE_URL,
      },
    })
    const result = res.data.inspectionResult
    const idx = result?.indexStatusResult ?? {}
    return {
      url,
      error: null,
      verdict: idx.verdict ?? null,
      coverageState: idx.coverageState ?? null,
      robotsTxtState: idx.robotsTxtState ?? null,
      indexingState: idx.indexingState ?? null,
      googleCanonical: idx.googleCanonical ?? null,
      userCanonical: idx.userCanonical ?? null,
      lastCrawlTime: idx.lastCrawlTime ?? null,
    }
  } catch (err) {
    const status = err?.response?.status ?? err?.code
    if (status === 429 && retriesLeft > 0) {
      console.log(`    429 rate limited on ${url} — backing off 30s (${retriesLeft} retries left)`)
      await sleep(30_000)
      return inspectUrl(client, url, retriesLeft - 1)
    }
    return {
      url,
      error: err?.message ?? String(err),
      verdict: null,
      coverageState: null,
      robotsTxtState: null,
      indexingState: null,
      googleCanonical: null,
      userCanonical: null,
      lastCrawlTime: null,
    }
  }
}

function isIndexed(inspection) {
  return inspection.verdict === 'PASS'
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log('================================================================')
  console.log('INDEX RATE BY LOCALE — hypothesis test')
  console.log('================================================================')
  console.log(`Sitemap: ${SITEMAP_URL}`)
  console.log(`Mode: ${isDryRun ? 'DRY RUN (sitemap composition only, 0 API calls)' : `FULL RUN (${perLocale} samples/locale)`}\n`)

  console.log('Step 1-2: fetching sitemap tree and bucketing by locale...')
  const allUrls = await fetchAllSitemapUrls(SITEMAP_URL)
  const buckets = bucketUrls(allUrls)
  const total = allUrls.length

  console.log(`\nStep 3: composition (${total} unique URLs total)`)
  printComposition(buckets, total)

  if (isDryRun) {
    console.log('Dry run complete. Re-run without --dry-run to sample and inspect via the GSC API.')
    return
  }

  const order = ['en', ...LOCALES]
  const plannedCalls = order.reduce((sum, l) => sum + Math.min(buckets[l].length, perLocale), 0)
  console.log(`Step 4: planned API calls: ${plannedCalls} (daily quota: ${DAILY_QUOTA})`)
  if (plannedCalls > DAILY_QUOTA) {
    console.warn(`  WARNING: planned calls (${plannedCalls}) exceed the daily quota (${DAILY_QUOTA}). ` +
      `Consider a smaller --per-locale value. Continuing anyway — later calls may fail with 429.`)
  }

  const samples = {}
  for (const locale of order) {
    samples[locale] = sampleLocale(buckets[locale], perLocale)
    console.log(`  ${locale}: sampling ${samples[locale].length} of ${buckets[locale].length} URLs`)
  }

  console.log('\nStep 5: inspecting sampled URLs via GSC URL Inspection API...')
  const client = await getSearchConsoleClient()

  const inspections = {}
  let done = 0
  for (const locale of order) {
    inspections[locale] = []
    for (const url of samples[locale]) {
      const result = await inspectUrl(client, url)
      inspections[locale].push(result)
      done++
      if (done % 25 === 0 || done === plannedCalls) {
        console.log(`  progress: ${done}/${plannedCalls}`)
      }
      await sleep(RATE_LIMIT_MS)
    }
  }

  console.log('\nStep 6-7: per-locale index rates vs EN')
  console.log('================================================================')
  const localeStats = {}
  for (const locale of order) {
    const results = inspections[locale]
    const errored = results.filter(r => r.error).length
    const validResults = results.filter(r => !r.error)
    const indexedCount = validResults.filter(isIndexed).length
    const indexRate = validResults.length > 0 ? (indexedCount / validResults.length) * 100 : null
    localeStats[locale] = {
      population: buckets[locale].length,
      sampleSize: results.length,
      errored,
      indexedCount,
      indexRate,
    }
  }

  const enRate = localeStats.en.indexRate
  console.log(`  en (baseline): ${localeStats.en.indexedCount}/${localeStats.en.sampleSize} indexed ` +
    `(${enRate !== null ? enRate.toFixed(1) : 'n/a'}%), population ${localeStats.en.population}`)

  let anyConfirmed = false
  const localeVerdicts = {}
  for (const locale of LOCALES) {
    const stat = localeStats[locale]
    const rate = stat.indexRate
    const gap = (enRate !== null && rate !== null) ? (enRate - rate) : null
    const confirmed = gap !== null && gap > GAP_THRESHOLD_PP
    if (confirmed) anyConfirmed = true
    localeVerdicts[locale] = confirmed
    console.log(
      `  ${locale}: ${stat.indexedCount}/${stat.sampleSize} indexed ` +
      `(${rate !== null ? rate.toFixed(1) : 'n/a'}%), population ${stat.population}, ` +
      `errored ${stat.errored}, gap vs EN ${gap !== null ? gap.toFixed(1) + 'pp' : 'n/a'} ` +
      `${confirmed ? '⚠️  >10pp below EN' : ''}`
    )
  }

  console.log('================================================================')
  console.log(anyConfirmed
    ? '❌ CONFIRMED — at least one locale is indexed >10pp below EN. Under-indexing is a real contributor to low capture rate for that locale.'
    : '✅ NOT CONFIRMED — no locale sampled is indexed more than 10pp below EN. Low capture rates (esp. pt/ar) are more likely explained by content volume or sitemap coverage than by uneven indexing.')
  console.log('================================================================\n')

  console.log('Step 8: top non-indexed coverageState reasons (all locales combined)')
  const reasonCounts = {}
  for (const locale of order) {
    for (const r of inspections[locale]) {
      if (r.error || isIndexed(r)) continue
      const key = r.coverageState ?? '(none reported)'
      reasonCounts[key] = (reasonCounts[key] ?? 0) + 1
    }
  }
  const sortedReasons = Object.entries(reasonCounts).sort((a, b) => b[1] - a[1])
  if (sortedReasons.length === 0) {
    console.log('  (no non-indexed URLs in sample)')
  } else {
    for (const [reason, count] of sortedReasons) {
      console.log(`  ${String(count).padStart(4)}  ${reason}`)
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    siteUrl: SITE_URL,
    sitemapUrl: SITEMAP_URL,
    perLocaleSampleTarget: perLocale,
    gapThresholdPp: GAP_THRESHOLD_PP,
    composition: order.reduce((acc, l) => ({ ...acc, [l]: buckets[l].length }), {}),
    totalUrls: total,
    localeStats,
    localeVerdicts,
    overallVerdict: anyConfirmed ? 'CONFIRMED' : 'NOT_CONFIRMED',
    topNonIndexedReasons: Object.fromEntries(sortedReasons),
    inspections,
  }
  writeFileSync(outPath, JSON.stringify(report, null, 2))
  console.log(`\nFull results written to ${outPath}`)
}

main().catch(err => {
  console.error('\nFatal error:', err)
  process.exit(1)
})
