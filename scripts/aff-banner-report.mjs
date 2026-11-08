#!/usr/bin/env node
// Affiliate-banner pilot report (Affiliate Optimizer, part A/B/C). Reads Umami counts (API or normalized JSON) plus an optional
// GSC export and writes: report markdown (cells, format, merchant count, locale, cluster, with/without the uncensored page,
// incremental outbound clicks vs control with cluster-bootstrap intervals, difference in differences, cannibalization,
// guardrail) and a merchant-readiness sheet with empty columns for programme terms Hans collects by hand.
//
// Inputs (pick one):
//   --input file.json  {"pilot":W,"baseline":W,"breakdowns":{"vendor":{...},"category":{...},"device":{...},"market":{...},"slot":{...},"placement":{...}},
//                       "gsc":{"pilot":{"/path":{"clicks":n,"impressions":n}},"baseline":{...}}}   W = {"pageviews":{"/path":n},
//                       "events":{"aff_banner_view":{"/path":n},"aff_banner_click":{...},"affiliate_click":{...}}}
//   --umami            Umami Cloud API. Needs env UMAMI_API_KEY (+ optional UMAMI_WEBSITE_ID, UMAMI_API_URL). The endpoint calls are
//                      UNVERIFIED (same adapter as the promo report); a failing endpoint is named in the error.
// Options: --launch YYYY-MM-DD (required for --umami) --end YYYY-MM-DD --baseline-days 28 --min-views 1000 --min-clicks 20
//          --out report.md --merchants merchants.md --json out.json --reps 2000
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'
import { analyse, merchantSheet, shareTable } from './lib/aff-banner-report-core.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const arg = (n, d) => { const i = process.argv.indexOf(`--${n}`); return i === -1 ? d : (process.argv[i + 1]?.startsWith('--') || process.argv[i + 1] == null ? true : process.argv[i + 1]) }
const day = (d) => new Date(d + 'T00:00:00Z')
const iso = (d) => d.toISOString().slice(0, 10)
const addDays = (d, n) => new Date(d.getTime() + n * 86400000)

const jiti = createJiti(import.meta.url, { tsconfigPaths: true })
const { AFF_BANNER_GROUPS, AFF_BANNER_CONTROLS } = await jiti.import(path.join(ROOT, 'src/lib/affiliate-banners/assignment.ts'))
const treated = AFF_BANNER_GROUPS
const controls = [...AFF_BANNER_CONTROLS]

const minViews = Number(arg('min-views', 1000)), minClicks = Number(arg('min-clicks', 20)), reps = Number(arg('reps', 2000))
const today = iso(new Date())
const launch = arg('launch', null) ? String(arg('launch')) : null
const end = String(arg('end', today))
const baseDays = Number(arg('baseline-days', 28))

const BANNER_EVENTS = [['aff_banner_view', 'page'], ['aff_banner_click', 'page'], ['affiliate_click', 'source_page']]
const PROPS = ['vendor', 'category', 'device', 'market', 'slot', 'placement', 'cell']

async function fromUmami(startDate, endDate, withProps) {
  const key = process.env.UMAMI_API_KEY
  if (!key) throw new Error('UMAMI_API_KEY is not set. Create an API key in Umami Cloud (Settings > API keys) and add it as a secret.')
  const id = process.env.UMAMI_WEBSITE_ID || '1a0d1160-11ea-4882-a110-90fd9e5ebb75'
  const base = process.env.UMAMI_API_URL || 'https://api.umami.is/v1'
  const startAt = day(startDate).getTime(), endAt = day(endDate).getTime() + 86400000 - 1
  const get = async (p, q) => {
    const r = await fetch(`${base}/websites/${id}/${p}?${new URLSearchParams(q)}`, { headers: { 'x-umami-api-key': key, accept: 'application/json' } })
    if (!r.ok) throw new Error(`Umami API ${p} (${JSON.stringify(q)}) -> HTTP ${r.status}`)
    return r.json()
  }
  const pageviews = {}
  for (const row of await get('metrics', { startAt, endAt, type: 'path', limit: 20000 })) pageviews[row.x] = row.y
  const events = {}
  for (const [name, prop] of BANNER_EVENTS) {
    events[name] = {}
    for (const r of await get('event-data/values', { startAt, endAt, eventName: name, propertyName: prop })) events[name][r.value] = r.total
  }
  const breakdowns = {}
  if (withProps) for (const prop of PROPS) {
    breakdowns[prop] = {}
    for (const r of await get('event-data/values', { startAt, endAt, eventName: 'aff_banner_click', propertyName: prop })) breakdowns[prop][r.value] = r.total
  }
  return { w: { pageviews, events }, breakdowns }
}

let pilot, baseline, breakdowns = {}, gsc
if (arg('umami', false)) {
  if (!launch) { console.error('--umami needs --launch YYYY-MM-DD'); process.exit(2) }
  const p = await fromUmami(launch, end, true)
  pilot = p.w; breakdowns = p.breakdowns
  baseline = (await fromUmami(iso(addDays(day(launch), -baseDays)), iso(addDays(day(launch), -1)), false)).w
} else if (typeof arg('input', false) === 'string') {
  const j = JSON.parse(fs.readFileSync(String(arg('input')), 'utf8'))
  pilot = j.pilot; baseline = j.baseline ?? null; breakdowns = j.breakdowns ?? {}; gsc = j.gsc
} else {
  console.error('Usage: aff-banner-report.mjs --input counts.json | --umami --launch YYYY-MM-DD   [--out report.md --merchants merchants.md]')
  process.exit(2)
}

const res = analyse({ treated, controls, pilot, baseline, gsc, opts: { minViews, minClicks, reps } })
const f = (x, d = 2) => (x == null ? 'n/a' : x.toFixed(d))
const pct = (x) => (x == null ? 'n/a' : (x * 100).toFixed(2) + '%')
const ci = (c) => (!c ? 'n/a' : c.lo == null ? `${f(c.est)} (${c.note ?? 'no interval'})` : `${f(c.est)} [${f(c.lo)}, ${f(c.hi)}]`)
const did = (c) => (!c || c.did == null ? 'n/a' : c.didLo == null ? f(c.did) : `${f(c.did)} [${f(c.didLo)}, ${f(c.didHi)}]`)
const wil = (w) => (w ? `${pct(w.p)} [${pct(w.lo)}, ${pct(w.hi)}]` : 'n/a')

const L = ['# Affiliate banner pilot report', '',
  `${launch ? `Pilot window: ${launch} to ${end}. ` : ''}Generated ${today}. Groups: ${Object.keys(treated).length} treated, ${controls.length} controls. Thresholds: at least ${minViews} banner views and ${minClicks} banner clicks before a cell can be called. Intervals: 95% bootstrap, whole page groups resampled (${reps} resamples). CTR: Wilson 95%.`, '',
  '**What this measures:** outbound clicks only (banners are plain product links, no affiliate tag, no commission). Headline = (banner clicks + in-text `affiliate_click`) per 1,000 page views on treated groups minus in-text `affiliate_click` on control groups. It cannot show conversions, order value or EPC. Do not declare a winner on CTR alone.', '']
for (const v of res.cells) {
  L.push(`## Results ${res.variants[v.excludeSolo ? 1 : 0]}`, '',
    '| Set | Groups | Page views | Banner views | Banner clicks | Reach | CTR | Incremental outbound / 1,000 pv | Difference vs 28 days before | Cannibalization (in-text clicks / 1,000 pv) | Verdict |', '|--|--|--|--|--|--|--|--|--|--|--|')
  for (const r of v.rows) L.push(`| ${r.set} | ${r.groups} | ${r.pv} | ${r.views} | ${r.clicks} | ${pct(r.reach)} | ${wil(r.ctr)} | ${ci(r.incr)} | ${did(r.incr)} | ${ci(r.cannibal)} | ${r.verdict} |`)
  L.push('')
}
L.push('## By locale (treated groups)', '', '| Locale | Banner views | Banner clicks | CTR |', '|--|--|--|--|')
for (const r of res.byLocale) L.push(`| ${r.key} | ${r.views} | ${r.clicks} | ${wil(r.ctr)} |`)
L.push('', '## By cluster (treated groups)', '', '| Cluster | Banner views | Banner clicks | CTR |', '|--|--|--|--|')
for (const r of res.byCluster) L.push(`| ${r.key} | ${r.views} | ${r.clicks} | ${wil(r.ctr)} |`)
for (const [title, key] of [['Category', 'category'], ['Merchant', 'vendor'], ['Click slot (1 = primary)', 'slot'], ['Placement', 'placement'], ['Device', 'device'], ['Market', 'market']]) {
  const t = shareTable(breakdowns[key])
  if (!t.length) continue
  L.push('', `## Banner clicks by ${title.toLowerCase()}`, '', '| Value | Clicks | Share |', '|--|--|--|')
  for (const r of t) L.push(`| ${r.key} | ${r.n} | ${pct(r.share)} |`)
}
L.push('', '## Page-health guardrail (Search Console clicks, treated vs control, versus before launch)', '')
if (!res.guardrail) L.push('No GSC data supplied. Check Search Console separately before scaling any winner.')
else if (res.guardrail.note) L.push(res.guardrail.note)
else L.push(`Relative change of treated/control click ratio: ${pct(res.guardrail.relativeChange)}. ${res.guardrail.flag ? '**Below -10%: stop rule candidate. Needs two consecutive weeks before pausing banners (brief 10).**' : 'Within the -10% stop threshold.'}`)
L.push('', '## Not in this report', '', '- Core Web Vitals / CLS: check on the Vercel preview and in field data.', '- Conversions, EPC, commission: unknown until contracts exist.', '- The merchant-readiness sheet is written separately (--merchants).')
const md = L.join('\n') + '\n'
if (typeof arg('out', false) === 'string') fs.writeFileSync(String(arg('out')), md); else process.stdout.write(md)
if (typeof arg('json', false) === 'string') fs.writeFileSync(String(arg('json')), JSON.stringify(res, null, 1))

const ms = merchantSheet({ breakdowns, pilot, treated })
const M = ['# Merchant readiness sheet', '', `Generated ${today}. Evidence pack for partner talks: banner clicks per merchant over the pilot window. The programme columns are filled by hand (network, commission, cookie window, category exclusions, minimum traffic): nothing here is a programme fact.`, '',
  '| Merchant | Banner clicks | Share | Network | Commission | Cookie window | Category exclusions | Min. traffic / approval rules | Applied (date) |', '|--|--|--|--|--|--|--|--|--|']
for (const r of ms.vendors) M.push(`| ${r.key} | ${r.n} | ${pct(r.share)} |  |  |  |  |  |  |`)
M.push('', '## Top pages by banner clicks (all merchants)', '', '| Page group | Banner clicks |', '|--|--|')
for (const [gp, n] of ms.topPages) M.push(`| ${gp} | ${n} |`)
for (const [title, t] of [['Categories', ms.categories], ['Devices', ms.devices], ['Markets', ms.markets], ['Click slot', ms.slots]]) {
  if (!t.length) continue
  M.push('', `## ${title}`, '', '| Value | Clicks | Share |', '|--|--|--|')
  for (const r of t) M.push(`| ${r.key} | ${r.n} | ${pct(r.share)} |`)
}
const mmd = M.join('\n') + '\n'
if (typeof arg('merchants', false) === 'string') fs.writeFileSync(String(arg('merchants')), mmd)
