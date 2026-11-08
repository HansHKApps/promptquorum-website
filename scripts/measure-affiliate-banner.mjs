#!/usr/bin/env node
// Measures the affiliate banner on a running site (default http://localhost:3464, started with NEXT_PUBLIC_AFF_BANNERS=true):
// natural content height per cell format / merchant count / breakpoint across all 9 locales, page-level horizontal overflow,
// and whether the reserved heights in src/lib/affiliate-banners/config.ts hold (no layout shift). Run: node scripts/measure-affiliate-banner.mjs [baseUrl]
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'
import { chromium } from 'playwright'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const base = process.argv[2] ?? 'http://localhost:3464'
const jiti = createJiti(import.meta.url, { tsconfigPaths: true })
const { AFF_BANNER_GROUPS } = await jiti.import(path.join(ROOT, 'src/lib/affiliate-banners/assignment.ts'))
const { AFF_RESERVED_HEIGHT } = await jiti.import(path.join(ROOT, 'src/lib/affiliate-banners/config.ts'))
const LOCALES = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
const WIDTHS = [320, 390, 768, 1280]
// one page per cell (the post templates share the banner component; pass more pages by editing here)
const pick = {}
for (const [p, e] of Object.entries(AFF_BANNER_GROUPS)) { pick[e.cell] ??= p }
const pages = Object.values(pick)
const browser = await chromium.launch()
const rows = []
for (const w of WIDTHS) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, reducedMotion: 'reduce' })
  const page = await ctx.newPage()
  for (const gp of pages) for (const l of LOCALES) {
    const url = base + (l === 'en' ? '' : '/' + l) + gp
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 })
      const el = page.locator('[data-aff-banner]').first()
      await el.waitFor({ state: 'attached', timeout: 60000 })
      const r = await el.evaluate((node) => {
        const s = node.style
        const keep = [s.getPropertyValue('--aff-h'), s.getPropertyValue('--aff-h-sm')]
        const reserved = node.getBoundingClientRect().height
        s.setProperty('--aff-h', '0px'); s.setProperty('--aff-h-sm', '0px')
        const natural = node.getBoundingClientRect().height
        s.setProperty('--aff-h', keep[0]); s.setProperty('--aff-h-sm', keep[1])
        const de = document.documentElement
        return { natural, reserved, overflowX: de.scrollWidth > de.clientWidth + 1, cell: node.getAttribute('data-aff-cell'), links: node.querySelectorAll('a').length }
      })
      rows.push({ w, gp, l, ...r })
    } catch (e) { rows.push({ w, gp, l, error: String(e).split('\n')[0] }) }
  }
  await ctx.close()
}
await browser.close()
const bad = rows.filter((r) => r.error)
const key = (r) => `${r.cell.startsWith('A') ? 'single' : 'compare'}${r.links > 0 && /3$/.test(r.cell) ? 3 : 1}`
const agg = {}
for (const r of rows.filter((x) => !x.error)) { const k = `${key(r)} @${r.w < 640 ? 'mobile' : 'desktop'}`; const a = (agg[k] ??= { max: 0, worst: '', n: 0 }); a.n++; if (r.natural > a.max) { a.max = r.natural; a.worst = `${r.w}px ${r.l} ${r.gp.split('/').pop()}` } }
console.log('natural height (px) per format at the worst locale/width, vs reserved:')
for (const [k, a] of Object.entries(agg).sort()) { const [cellKey, bp] = k.split(' @'); const res = AFF_RESERVED_HEIGHT[cellKey][bp === 'mobile' ? 0 : 1]; console.log(`${k.padEnd(20)} natural max ${a.max.toFixed(0).padStart(4)}  reserved ${String(res).padStart(4)}  ${a.max <= res ? 'OK' : 'TOO SMALL'}   (worst: ${a.worst}, n=${a.n})`) }
const ov = rows.filter((r) => r.overflowX)
console.log(`\nhorizontal page overflow: ${ov.length} of ${rows.length - bad.length} renders${ov.length ? '\n' + ov.slice(0, 8).map((r) => `  ${r.w}px ${r.l} ${r.gp}`).join('\n') : ''}`)
console.log(`failed loads: ${bad.length}${bad.length ? '\n' + bad.slice(0, 8).map((r) => `  ${r.w}px ${r.l} ${r.gp}: ${r.error}`).join('\n') : ''}`)
process.exit(bad.length || ov.length || Object.entries(agg).some(([k, a]) => { const [c, bp] = k.split(' @'); return a.max > AFF_RESERVED_HEIGHT[c][bp === 'mobile' ? 0 : 1] }) ? 1 : 0)
