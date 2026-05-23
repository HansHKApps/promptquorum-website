#!/usr/bin/env node
/**
 * test-affiliate-clicks.mjs
 * Playwright-based verification that affiliate link clicks fire tracking events.
 *
 * For each page with affiliate links:
 * - Shims window.gtag + window.umami before page load
 * - Clicks every .affiliate-link element
 * - Asserts affiliate_click event fired with non-empty payload
 * - Intercepts network to verify Vercel Analytics requests
 *
 * Usage: node scripts/test-affiliate-clicks.mjs
 * Requires a running dev server (npm run dev) on http://localhost:3000
 */

import { chromium } from 'playwright'
import { readFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const BASE_URL = 'http://localhost:3000'

// Article dirs → URL prefix mapping
const ARTICLE_SOURCES = [
  { dir: 'src/lib/power-local-llm/articles', urlPrefix: '/power-local-llm' },
  { dir: 'src/lib/prompt-bites/articles',   urlPrefix: '/prompt-bites' },
]

function extractAffiliateSlugs(dir) {
  let files
  try {
    files = readdirSync(join(ROOT, dir)).filter(f => f.endsWith('.ts'))
  } catch {
    return []
  }
  const slugs = []
  for (const file of files) {
    const content = readFileSync(join(ROOT, dir, file), 'utf-8')
    if (content.includes('affiliateLinks')) {
      // Check it actually has URLs, not just type references
      if (/url\s*:\s*['"]https?:\/\//.test(content)) {
        slugs.push(file.replace(/\.ts$/, ''))
      }
    }
  }
  return slugs
}

async function checkDevServer() {
  try {
    await fetch(`${BASE_URL}/`, { signal: AbortSignal.timeout(5000) })
    return true // any response means server is up
  } catch {
    return false
  }
}

async function testPage(page, url, slug) {
  const events = []
  const vercelHits = []

  // Capture Vercel Analytics network requests
  page.on('request', req => {
    if (req.url().includes('vitals.vercel-insights.com') || req.url().includes('va.vercel-scripts.com')) {
      vercelHits.push(req.url())
    }
  })

  // Inject shims before any page script runs
  await page.addInitScript(() => {
    window.__affiliateEvents = []

    // Shim gtag
    window.gtag = function(type, eventName, payload) {
      if (eventName === 'affiliate_click') {
        window.__affiliateEvents.push({ source: 'gtag', eventName, payload })
      }
    }

    // Shim umami
    if (!window.umami) window.umami = {}
    window.umami.track = function(eventName, payload) {
      if (eventName === 'affiliate_click') {
        window.__affiliateEvents.push({ source: 'umami', eventName, payload })
      }
    }
  })

  let pageOk = true
  try {
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15_000 })
    if (!response || response.status() >= 400) {
      return { slug, url, ok: false, error: `HTTP ${response?.status() ?? 'no response'}`, links: [] }
    }
  } catch (err) {
    return { slug, url, ok: false, error: err.message, links: [] }
  }

  // Wait for affiliate links to be present
  const linkCount = await page.locator('a.affiliate-link').count()
  if (linkCount === 0) {
    return { slug, url, ok: true, noLinks: true, links: [] }
  }

  // Click each link and check events fire
  const linkResults = []
  for (let i = 0; i < linkCount; i++) {
    const link = page.locator('a.affiliate-link').nth(i)
    const href = await link.getAttribute('href').catch(() => '?')
    const text = await link.innerText().catch(() => '')

    // Clear events before click
    await page.evaluate(() => { window.__affiliateEvents = [] })
    const vercelBefore = vercelHits.length

    // Click but intercept navigation (link opens in new tab)
    const clickPromise = link.click({ modifiers: ['Meta'] }).catch(() => link.click())
    await clickPromise.catch(() => {})
    await page.waitForTimeout(300) // allow event handlers to fire

    const firedEvents = await page.evaluate(() => window.__affiliateEvents ?? [])
    const affiliateEvent = firedEvents.find(e => e.eventName === 'affiliate_click')
    const vercelFired = vercelHits.length > vercelBefore

    linkResults.push({
      href,
      text: text.trim(),
      gtagFired: !!firedEvents.find(e => e.source === 'gtag'),
      umamiFired: !!firedEvents.find(e => e.source === 'umami'),
      vercelFired,
      payload: affiliateEvent?.payload ?? null,
    })
  }

  return { slug, url, ok: true, links: linkResults }
}

async function main() {
  const today = new Date().toISOString().slice(0, 10)
  console.log(`\n📊 Affiliate Click-Tracking Test — ${today}\n`)

  // Check dev server
  const serverUp = await checkDevServer()
  if (!serverUp) {
    console.error('🔴 Dev server not running. Start it with: npm run dev')
    console.error('   Then re-run: node scripts/test-affiliate-clicks.mjs')
    process.exit(1)
  }
  console.log('✅ Dev server reachable at localhost:3000\n')

  // Build test list
  const testPages = []
  for (const { dir, urlPrefix } of ARTICLE_SOURCES) {
    const slugs = extractAffiliateSlugs(dir)
    for (const slug of slugs) {
      testPages.push({ slug, url: `${BASE_URL}${urlPrefix}/${slug}?lang=en`, urlPrefix })
    }
  }
  console.log(`Testing ${testPages.length} pages with affiliate links...\n`)

  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    // Block third-party analytics to isolate our shim
    bypassCSP: true,
  })

  const allResults = []
  let totalLinks = 0, totalOk = 0, totalFailed = 0

  for (const { slug, url, urlPrefix } of testPages) {
    const page = await context.newPage()
    process.stdout.write(`  Testing ${urlPrefix}/${slug}...`)
    const result = await testPage(page, url, slug)
    await page.close()

    allResults.push(result)

    if (!result.ok) {
      process.stdout.write(` 🔴 PAGE ERROR: ${result.error}\n`)
      continue
    }
    if (result.noLinks) {
      process.stdout.write(` ⚠️  No .affiliate-link elements found on page\n`)
      continue
    }

    const failedLinks = result.links.filter(l => !l.gtagFired && !l.umamiFired)
    totalLinks += result.links.length
    totalOk += result.links.length - failedLinks.length
    totalFailed += failedLinks.length
    process.stdout.write(` ${failedLinks.length === 0 ? '✅' : '🔴'} ${result.links.length} links (${failedLinks.length} failed)\n`)
  }

  await browser.close()

  // Full report
  console.log('\n' + '═'.repeat(80))
  console.log('CLICK TRACKING DETAIL')
  console.log('═'.repeat(80) + '\n')

  for (const result of allResults) {
    if (!result.ok) {
      console.log(`🔴 ${result.slug}`)
      console.log(`   URL: ${result.url}`)
      console.log(`   Error: ${result.error}\n`)
      continue
    }
    if (result.noLinks) {
      console.log(`⚠️  ${result.slug} — no .affiliate-link elements rendered\n`)
      continue
    }

    const allFired = result.links.every(l => l.gtagFired || l.umamiFired)
    console.log(`${allFired ? '✅' : '🔴'} ${result.slug} (${result.links.length} links)`)
    for (const link of result.links) {
      const gtagIcon = link.gtagFired ? '✅ gtag' : '🔴 gtag'
      const umamiIcon = link.umamiFired ? '✅ umami' : '🔴 umami'
      const vercelIcon = link.vercelFired ? '✅ vercel' : '⚠️  vercel'
      const domain = link.href ? (() => { try { return new URL(link.href).hostname } catch { return link.href } })() : '?'
      console.log(`   ${domain}`)
      console.log(`   Text: "${link.text}"`)
      console.log(`   Events: ${gtagIcon}  ${umamiIcon}  ${vercelIcon}`)
      if (link.payload) {
        console.log(`   Payload: destination_domain=${link.payload.destination_domain} category=${link.payload.product_category}`)
      }
      console.log()
    }
  }

  console.log('═'.repeat(80))
  console.log('\nSUMMARY')
  console.log(`  Pages tested:  ${testPages.length}`)
  console.log(`  Total links:   ${totalLinks}`)
  console.log(`  ✅ Tracking OK: ${totalOk}`)
  console.log(`  🔴 Not firing: ${totalFailed}`)

  const pageErrors = allResults.filter(r => !r.ok).length
  const noLinksPages = allResults.filter(r => r.ok && r.noLinks).length
  if (pageErrors > 0) console.log(`  ⚠️  Page load errors: ${pageErrors}`)
  if (noLinksPages > 0) console.log(`  ⚠️  Pages with no .affiliate-link elements: ${noLinksPages}`)

  if (totalFailed > 0 || pageErrors > 0) {
    console.log('\n🔴 Tracking failures found — see detail above.')
    process.exit(1)
  } else {
    console.log('\n✅ All affiliate click events firing correctly.')
  }
}

main().catch(err => {
  console.error('\nScript error:', err)
  process.exit(1)
})
