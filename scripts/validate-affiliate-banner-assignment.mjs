#!/usr/bin/env node
// Checks the affiliate-banner pilot assignment (src/lib/affiliate-banners/assignment.ts): 60 treated groups (15 each in
// A1/A3/B1/B3), 20 controls, no overlap with the promo pilot (groups or controls), every page exists and is an
// affiliate-regime page (affiliateDisclosure: true), controls are not treated. Run: npm run test:affiliate-banner-assignment
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const jiti = createJiti(import.meta.url, { tsconfigPaths: true })
const { AFF_BANNER_GROUPS, AFF_BANNER_CONTROLS } = await jiti.import(path.join(ROOT, 'src/lib/affiliate-banners/assignment.ts'))
const { PILOT_GROUPS, PILOT_CONTROLS } = await jiti.import(path.join(ROOT, 'src/lib/promo/pilot.ts'))
const maps = {
  'local-llms': (await jiti.import(path.join(ROOT, 'src/lib/local-llms/slugs.ts'))).LLM_SLUG_TO_KEY,
  'power-local-llm': (await jiti.import(path.join(ROOT, 'src/lib/power-local-llm/slugs.ts'))).POWER_LLM_SLUG_TO_KEY,
}
const { AFF_BANNER_PAGE_OFFERS } = await jiti.import(path.join(ROOT, 'src/lib/affiliate-banners/page-offers.ts'))
const { BANNER_OFFERS } = await jiti.import(path.join(ROOT, 'src/lib/affiliate-banners/offers.ts'))
const { BANNER_UI } = await jiti.import(path.join(ROOT, 'src/lib/affiliate-banners/copy.ts'))
const errors = []
const fail = (m) => errors.push(m)

const treated = Object.entries(AFF_BANNER_GROUPS)
if (treated.length !== 60) fail(`expected 60 treated groups, got ${treated.length}`)
const per = {}
for (const [, e] of treated) per[e.cell] = (per[e.cell] ?? 0) + 1
for (const c of ['A1', 'A3', 'B1', 'B3']) if (per[c] !== 15) fail(`${c}: expected 15 groups, got ${per[c] ?? 0}`)
if (AFF_BANNER_CONTROLS.length !== 20) fail(`expected 20 controls, got ${AFF_BANNER_CONTROLS.length}`)
if (new Set(AFF_BANNER_CONTROLS).size !== AFF_BANNER_CONTROLS.length) fail('duplicate controls')

const promo = new Set([...Object.keys(PILOT_GROUPS), ...Object.values(PILOT_CONTROLS)])
const all = [...treated.map(([k]) => k), ...AFF_BANNER_CONTROLS]
const treatedSet = new Set(treated.map(([k]) => k))
for (const k of AFF_BANNER_CONTROLS) if (treatedSet.has(k)) fail(`${k}: is both treated and control`)
for (const k of all) if (promo.has(k)) fail(`${k}: overlaps the promo pilot (groups or controls)`)

const file = (k) => {
  const [, c, slug] = k.split('/')
  const name = maps[c]?.[slug] ?? slug
  return path.join(ROOT, 'src/lib', c, 'articles', name + '.ts')
}
for (const k of all) {
  const f = file(k)
  if (!fs.existsSync(f)) { fail(`${k}: article file not found (${path.relative(ROOT, f)})`); continue }
  if (!fs.readFileSync(f, 'utf8').includes('affiliateDisclosure: true')) fail(`${k}: not an affiliate-regime page`)
}
const u = '/power-local-llm/uncensored-local-llm-creative-writing-ethics'
if (AFF_BANNER_GROUPS[u]?.tier !== 'solo') fail('the uncensored page must be its own stratum (tier solo)')

// Offers: A cells need 1 offer, B cells 2 (distinct); every offer has 9-locale copy and enough merchants; plain URLs only.
const LOCALES = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
for (const [k, e] of treated) {
  const ids = AFF_BANNER_PAGE_OFFERS[k] ?? []
  const need = e.cell.startsWith('B') ? 2 : 1
  if (ids.length !== need) fail(`${k}: cell ${e.cell} needs ${need} offer(s), has ${ids.length}`)
  if (new Set(ids).size !== ids.length) fail(`${k}: duplicate offers`)
  for (const id of ids) if (!BANNER_OFFERS[id]) fail(`${k}: unknown offer ${id}`)
}
for (const k of Object.keys(AFF_BANNER_PAGE_OFFERS)) if (!AFF_BANNER_GROUPS[k]) fail(`${k}: offers set for a page that is not a treated group`)
for (const [id, o] of Object.entries(BANNER_OFFERS)) {
  for (const l of LOCALES) {
    const c = o.copy[l]
    if (!c?.headline || !c?.reason || !c?.bestFor) fail(`offer ${id}/${l}: missing copy`)
    const m = o.merchantsByLocale[l] ?? []
    if (m.length < 3) fail(`offer ${id}/${l}: ${m.length} merchants, need 3 for the 3-merchant arms`)
    for (const x of m) {
      if (!/^https:\/\//.test(x.url)) fail(`offer ${id}/${l}: ${x.vendor} url is not https`)
      if (/[?&](tag|aff|affid|affiliate|ref|utm_)[a-z_]*=/i.test(x.url)) fail(`offer ${id}/${l}: ${x.vendor} url carries a tracking/affiliate parameter`)
      if (x.affiliateStatus !== 'none') fail(`offer ${id}/${l}: ${x.vendor} affiliateStatus must be 'none' during the pilot`)
      if (x.verifiedAt || x.priceRange) fail(`offer ${id}/${l}: ${x.vendor} carries a price; the pilot shows none`)
    }
  }
}
// Disclosure: 9 locales, must never claim the link is an ad/sponsored/affiliate-paid.
for (const l of LOCALES) {
  const u = BANNER_UI[l]
  if (!u?.disclosure || !u?.cta?.includes('{vendor}') || !u?.tag || !u?.label) fail(`BANNER_UI.${l}: incomplete`)
  if (/\b(sponsored|anzeige|werbung|publicit[eé]|sponsoris[eé]|広告|广告|publicidad|patrocinado|إعلان|광고)\b/i.test(u.disclosure)) fail(`BANNER_UI.${l}: disclosure must not call the banner an ad`)
}

if (errors.length) { console.error('affiliate-banner assignment: FAIL\n' + errors.map((e) => ' - ' + e).join('\n')); process.exit(1) }
console.log(`affiliate-banner assignment: OK (${treated.length} treated, ${AFF_BANNER_CONTROLS.length} controls, ${JSON.stringify(per)})`)
