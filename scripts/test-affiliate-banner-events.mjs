#!/usr/bin/env node
// End-to-end check of the banner events on a running site (NEXT_PUBLIC_AFF_BANNERS=true, default http://localhost:3464):
// the banner renders on a treated page, aff_banner_view fires once after >=1 s at >=50% visible, aff_banner_click fires on a click with
// every prop of the spec, a control page and a page outside the pilot render no banner, affiliate_click is NOT fired by the banner,
// and the disclosure is visible in all 9 locales. Run: node scripts/test-affiliate-banner-events.mjs [baseUrl]
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'
import { chromium } from 'playwright'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const base = process.argv[2] ?? 'http://localhost:3464'
const jiti = createJiti(import.meta.url, { tsconfigPaths: true })
const { AFF_BANNER_CONTROLS } = await jiti.import(path.join(ROOT, 'src/lib/affiliate-banners/assignment.ts'))
const { BANNER_UI } = await jiti.import(path.join(ROOT, 'src/lib/affiliate-banners/copy.ts'))
let failed = 0
const ok = (c, m) => { if (!c) { failed++; console.error('FAIL', m) } else console.log('ok  ', m) }

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } })
await ctx.addInitScript(() => { window.__umami = []; window.umami = { track: (n, p) => window.__umami.push([n, p]) } })
const page = await ctx.newPage()
const events = () => page.evaluate(() => window.__umami)

const TREATED = '/power-local-llm/best-nas-storage-local-ai-models-2026' // A1
await page.goto(base + TREATED, { waitUntil: 'domcontentloaded', timeout: 120000 })
const banner = page.locator('[data-aff-banner]').first()
await banner.waitFor({ timeout: 60000 })
// The cookie dialog (modal) covers the page on a first visit: decline everything so it cannot intercept the click.
await page.getByRole('button', { name: /reject all/i }).click({ timeout: 8000 }).catch(() => {})
await page.waitForTimeout(300)
ok((await banner.getAttribute('data-aff-cell')) === 'A1' && (await banner.getAttribute('data-aff-placement')) === 'AP2', 'treated page renders its banner (cell A1, placement AP2)')
ok(((await events()).filter(([n]) => n === 'aff_banner_view')).length === 0, 'no view event before the banner is scrolled into view')
await banner.scrollIntoViewIfNeeded()
await page.evaluate(() => document.querySelector('[data-aff-banner]').scrollIntoView({ block: 'center' }))
await page.waitForTimeout(2200)
const views = (await events()).filter(([n]) => n === 'aff_banner_view')
ok(views.length === 1, `exactly one aff_banner_view after 1 s in view (got ${views.length})`)
const SPEC = ['banner_id', 'cell', 'format', 'merchant_count', 'placement', 'phase', 'category', 'locale', 'cluster', 'page', 'device']
ok(views[0] && SPEC.every((k) => k in views[0][1]), 'view event carries all spec props')
const link = banner.locator('a').first()
const [popup] = await Promise.all([ctx.waitForEvent('page', { timeout: 15000 }).catch(() => null), link.click()])
const clicks = (await events()).filter(([n]) => n === 'aff_banner_click')
ok(clicks.length === 1, 'one aff_banner_click per click')
ok(clicks[0] && [...SPEC, 'vendor', 'vendor_domain', 'slot', 'market', 'product_key', 'price_shown'].every((k) => k in clicks[0][1]), 'click event carries all spec props incl. vendor, slot, market, price_shown')
ok(clicks[0]?.[1].slot === 1 && clicks[0]?.[1].price_shown === false, 'slot 1 and no price shown')
ok(!(await events()).some(([n]) => n === 'affiliate_click'), 'banner click does not fire affiliate_click')
ok((await link.getAttribute('rel')) === 'nofollow noopener noreferrer' && (await link.getAttribute('target')) === '_blank', 'link has rel nofollow noopener noreferrer and opens in a new tab')
ok(!/[?&](tag|aff|utm_medium=affiliate)/i.test((await link.getAttribute('href')) ?? ''), 'link carries no affiliate parameter')
await popup?.close().catch(() => {})

// control + outside the pilot
for (const [label, p] of [['control page', AFF_BANNER_CONTROLS[0]], ['page outside the pilot', '/local-llms/what-are-local-llms']]) {
  await page.goto(base + p, { waitUntil: 'domcontentloaded', timeout: 120000 })
  await page.waitForTimeout(1500)
  ok((await page.locator('[data-aff-banner]').count()) === 0, `${label} renders no banner`)
}

// disclosure visible in all 9 locales
for (const l of ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']) {
  await page.goto(base + (l === 'en' ? '' : '/' + l) + TREATED, { waitUntil: 'domcontentloaded', timeout: 120000 })
  const b = page.locator('[data-aff-banner]').first()
  await b.waitFor({ timeout: 60000 })
  const txt = await b.innerText()
  const dir = await b.getAttribute('dir')
  ok(txt.includes(BANNER_UI[l].disclosure) && (l !== 'ar' || dir === 'rtl'), `${l}: disclosure visible${l === 'ar' ? ' and banner is rtl' : ''}`)
}
await browser.close()
if (failed) { console.error(`${failed} check(s) failed`); process.exit(1) }
console.log('affiliate banner events: all checks passed')
