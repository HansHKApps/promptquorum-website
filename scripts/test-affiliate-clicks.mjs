#!/usr/bin/env node
/**
 * test-affiliate-clicks.mjs
 * Playwright verification that affiliate link clicks fire the Umami `affiliate_click` event.
 *
 * Detection strategy:
 *  - Umami: intercept the same-origin beacon POST /lib/s/api/send (rewritten to
 *    cloud.umami.is in next.config.ts) and check the JSON body for
 *    payload.name === 'affiliate_click'. This is the real network signal, so it
 *    works regardless of how window.umami is initialised.
 *
 * GA4 and Vercel Analytics were removed from the site; they are no longer checked.
 *
 * Usage:   BASE_URL=http://localhost:3000 [LIMIT=3] node scripts/test-affiliate-clicks.mjs
 * Requires: a running server (prefer `npx next start`; `npm run dev` is broken)
 *           reachable at BASE_URL (default http://localhost:3000), and the
 *           Umami script must be able to load (it is fetched via /lib/s/script.js).
 */

import { chromium } from 'playwright'
import { readFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000'

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

async function checkServer() {
  try {
    await fetch(`${BASE_URL}/`, { signal: AbortSignal.timeout(5000) })
    return true
  } catch { return false }
}

function isAffiliateBeacon(req) {
  if (req.method() !== 'POST' || !req.url().includes('/lib/s/api/send')) return false
  try {
    const body = JSON.parse(req.postData() ?? '{}')
    return body?.payload?.name === 'affiliate_click'
  } catch { return false }
}

async function testPage(page, url, slug) {
  const beacons = []
  page.on('request', req => {
    if (isAffiliateBeacon(req)) beacons.push(req.url())
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

    const before = beacons.length

    // Dispatch click event (don't trigger navigation for target=_blank)
    await page.evaluate((idx) => {
      const links = document.querySelectorAll('a.affiliate-link')
      if (links[idx]) links[idx].dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }))
    }, i)

    await page.waitForTimeout(800)

    linkResults.push({ href, text, umamiFired: beacons.length > before })
  }

  return { slug, url, ok: true, httpStatus, links: linkResults }
}

async function main() {
  const today = new Date().toISOString().slice(0, 10)
  console.log(`\n📊 Affiliate Click-Tracking Test (Umami) — ${today}\n`)

  if (!(await checkServer())) {
    console.error(`🔴 Server not responding at ${BASE_URL}. Run: npx next start`)
    process.exit(1)
  }
  console.log(`✅ Server reachable at ${BASE_URL}\n`)

  const testPages = []
  for (const { dir, urlPrefix } of ARTICLE_SOURCES) {
    for (const slug of extractAffiliateSlugs(dir)) {
      testPages.push({ slug, url: `${BASE_URL}${urlPrefix}/${slug}`, urlPrefix })
    }
  }
  const limit = Number(process.env.LIMIT ?? 0)
  if (limit > 0) testPages.splice(limit)
  console.log(`Testing ${testPages.length} pages...\n`)

  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({ bypassCSP: true })
  // Observe but never forward analytics beacons.
  await context.route('**/lib/s/api/send', route => route.fulfill({ status: 200, contentType: 'application/json', body: '{}' }))

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
      const failed = result.links.filter(l => !l.umamiFired)
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
    const allOk = r.links.every(l => l.umamiFired)
    console.log(`${allOk ? '✅' : '🔴'} ${r.slug} (${r.links.length} links, HTTP ${r.httpStatus})`)
    for (const l of r.links) {
      let domain = '?'
      try { domain = new URL(l.href).hostname } catch {}
      console.log(`   ${domain}  "${l.text}"`)
      console.log(`   ${l.umamiFired ? '✅ Umami' : '🔴 Umami'}\n`)
    }
  }

  console.log('═'.repeat(80))
  console.log('\nSUMMARY')
  console.log(`  Pages tested: ${testPages.length}`)
  console.log(`  Links total:  ${totalLinks}`)
  console.log(`  ✅ Umami firing: ${totalOk}`)
  console.log(`  🔴 Not firing: ${totalFailed}`)

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
