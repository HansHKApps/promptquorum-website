#!/usr/bin/env node
/**
 * test-affiliate-clicks.mjs
 * Playwright verification that affiliate link clicks fire tracking events.
 *
 * Detection strategy:
 *  - GA4:     Patch window.dataLayer.push BEFORE page scripts run →
 *             captures every gtag('event', ...) call regardless of script order
 *  - Vercel:  Intercept /_vercel/insights/event same-origin POST
 *  - Umami:   Not configured in layout.tsx — expected to always be absent
 *
 * Usage: node scripts/test-affiliate-clicks.mjs
 * Requires: npm run dev running on http://localhost:3000
 */

import { chromium } from 'playwright'
import { readFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const BASE_URL = 'http://localhost:3000'

const ARTICLE_SOURCES = [
  { dir: 'src/lib/power-local-llm/articles', urlPrefix: '/power-local-llm' },
  { dir: 'src/lib/prompt-bites/articles',   urlPrefix: '/prompt-bites' },
]

function extractAffiliateSlugs(dir) {
  let files
  try {
    files = readdirSync(join(ROOT, dir)).filter(f => f.endsWith('.ts'))
  } catch { return [] }
  return files
    .filter(f => {
      const c = readFileSync(join(ROOT, dir, f), 'utf-8')
      return c.includes('affiliateLinks') && /url\s*:\s*['"]https?:\/\//.test(c)
    })
    .map(f => f.replace(/\.ts$/, ''))
}

async function checkDevServer() {
  try {
    await fetch(`${BASE_URL}/power-local-llm/best-vpn-ai-privacy-local-llm-2026?lang=en`,
      { signal: AbortSignal.timeout(5000) })
    return true
  } catch { return false }
}

async function testPage(page, url, slug) {
  const vercelEvents = []

  // Intercept Vercel Analytics requests (same-origin POST)
  page.on('request', req => {
    const u = req.url()
    if (u.includes('/_vercel/insights') || u.includes('vitals.vercel') || u.includes('vercel-analytics')) {
      vercelEvents.push(u)
    }
  })

  // Patch window.dataLayer BEFORE any page scripts run
  // GA4 init script does: window.dataLayer = window.dataLayer || []
  // It reuses our pre-existing array with the patched push.
  await page.addInitScript(() => {
    window.__affiliateGa4Events = []
    window.__onClickFired = 0

    // Pre-seed dataLayer with our patched push
    const patchedArr = []
    patchedArr.push = function(...args) {
      for (const item of args) {
        // gtag() calls push with arguments-object; item[0]='event', item[1]=eventName, item[2]=payload
        if (item && item[0] === 'event' && item[1] === 'affiliate_click') {
          window.__affiliateGa4Events.push(item[2])
        }
      }
      return Array.prototype.push.apply(this, args)
    }
    window.dataLayer = patchedArr

    // Also shim umami so we can detect if it ever loads
    window.__umamiEvents = []
    window.umami = {
      track: function(name, payload) {
        if (name === 'affiliate_click') window.__umamiEvents.push(payload)
      }
    }
  })

  let httpStatus = null
  try {
    const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 20_000 })
    httpStatus = response?.status() ?? 0
    if (httpStatus >= 400) {
      return { slug, url, ok: false, error: `HTTP ${httpStatus}`, links: [] }
    }
  } catch (err) {
    return { slug, url, ok: false, error: err.message, links: [] }
  }

  const linkCount = await page.locator('a.affiliate-link').count()
  if (linkCount === 0) {
    return { slug, url, ok: true, noLinks: true, httpStatus, links: [] }
  }

  const linkResults = []
  for (let i = 0; i < linkCount; i++) {
    const link = page.locator('a.affiliate-link').nth(i)
    const href = await link.getAttribute('href').catch(() => '?')
    const text = (await link.innerText().catch(() => '')).trim()

    // Clear captured events before each click
    await page.evaluate(() => {
      window.__affiliateGa4Events = []
      window.__umamiEvents = []
    })
    const vercelBefore = vercelEvents.length

    // Dispatch click event (don't trigger navigation for target=_blank)
    await page.evaluate((idx) => {
      const links = document.querySelectorAll('a.affiliate-link')
      if (links[idx]) links[idx].dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }))
    }, i)

    await page.waitForTimeout(500)

    const ga4Events = await page.evaluate(() => window.__affiliateGa4Events ?? [])
    const umamiEvents = await page.evaluate(() => window.__umamiEvents ?? [])
    const vercelFired = vercelEvents.length > vercelBefore

    linkResults.push({
      href,
      text,
      ga4Fired: ga4Events.length > 0,
      umamiFired: umamiEvents.length > 0,
      vercelFired,
      ga4Payload: ga4Events[0] ?? null,
    })
  }

  return { slug, url, ok: true, httpStatus, links: linkResults }
}

async function main() {
  const today = new Date().toISOString().slice(0, 10)
  console.log(`\n📊 Affiliate Click-Tracking Test — ${today}\n`)

  const serverUp = await checkDevServer()
  if (!serverUp) {
    console.error('🔴 Dev server not responding. Run: npm run dev')
    process.exit(1)
  }
  console.log('✅ Dev server reachable\n')

  const testPages = []
  for (const { dir, urlPrefix } of ARTICLE_SOURCES) {
    for (const slug of extractAffiliateSlugs(dir)) {
      testPages.push({ slug, url: `${BASE_URL}${urlPrefix}/${slug}?lang=en`, urlPrefix })
    }
  }
  console.log(`Testing ${testPages.length} pages...\n`)

  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({ bypassCSP: true })

  const allResults = []
  let totalLinks = 0, totalOk = 0, totalFailed = 0

  for (const { slug, url, urlPrefix } of testPages) {
    const page = await context.newPage()
    process.stdout.write(`  ${urlPrefix}/${slug}...`)
    const result = await testPage(page, url, slug)
    await page.close()
    allResults.push(result)

    if (!result.ok) {
      process.stdout.write(` 🔴 ${result.error}\n`)
    } else if (result.noLinks) {
      process.stdout.write(` ⚠️  no .affiliate-link elements\n`)
    } else {
      const failed = result.links.filter(l => !l.ga4Fired && !l.vercelFired)
      totalLinks += result.links.length
      totalOk += result.links.length - failed.length
      totalFailed += failed.length
      process.stdout.write(` ${failed.length === 0 ? '✅' : '🔴'} ${result.links.length} links (${failed.length} not tracking)\n`)
    }
  }

  await browser.close()

  console.log('\n' + '═'.repeat(80))
  console.log('DETAIL')
  console.log('═'.repeat(80) + '\n')

  for (const r of allResults) {
    if (!r.ok) {
      console.log(`🔴 ${r.slug} — Page error: ${r.error}\n`)
      continue
    }
    if (r.noLinks) {
      console.log(`⚠️  ${r.slug} — No .affiliate-link elements rendered (HTTP ${r.httpStatus})\n`)
      continue
    }
    const allOk = r.links.every(l => l.ga4Fired || l.vercelFired)
    console.log(`${allOk ? '✅' : '🔴'} ${r.slug} (${r.links.length} links, HTTP ${r.httpStatus})`)
    for (const l of r.links) {
      let domain = '?'
      try { domain = new URL(l.href).hostname } catch {}
      const ga4Icon = l.ga4Fired ? '✅ GA4' : '🔴 GA4'
      const vercelIcon = l.vercelFired ? '✅ Vercel' : '⚠️  Vercel'
      const umamiIcon = l.umamiFired ? '✅ Umami' : '— Umami'
      console.log(`   ${domain}  "${l.text}"`)
      console.log(`   ${ga4Icon}  ${vercelIcon}  ${umamiIcon}`)
      if (l.ga4Payload) {
        console.log(`   Payload: dest=${l.ga4Payload.destination_domain} cat=${l.ga4Payload.product_category}`)
      }
      console.log()
    }
  }

  console.log('═'.repeat(80))
  console.log('\nSUMMARY')
  console.log(`  Pages tested: ${testPages.length}`)
  console.log(`  Links total:  ${totalLinks}`)
  console.log(`  ✅ GA4/Vercel firing: ${totalOk}`)
  console.log(`  🔴 Not firing: ${totalFailed}`)
  console.log(`  ℹ️  Umami: not configured in layout.tsx (expected)`)

  const pageErrors = allResults.filter(r => !r.ok).length
  const noLinkPages = allResults.filter(r => r.ok && r.noLinks).length
  if (pageErrors) console.log(`  ⚠️  Page load errors: ${pageErrors}`)
  if (noLinkPages) console.log(`  ⚠️  Pages with no rendered links: ${noLinkPages}`)

  if (totalFailed > 0 || pageErrors > 0) {
    console.log('\n🔴 Tracking failures found.')
    process.exit(1)
  } else {
    console.log('\n✅ All affiliate click events firing correctly.')
  }
}

main().catch(err => {
  console.error('Fatal:', err)
  process.exit(1)
})
