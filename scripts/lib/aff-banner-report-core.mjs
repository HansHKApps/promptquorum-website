// Pure functions for the affiliate-banner pilot report (no I/O), so they can be tested with synthetic fixtures.
// Unit of analysis: a PAGE GROUP (English path + its 8 locale versions). Counts arrive per URL path and are summed per group.
// Headline: incremental outbound clicks per 1,000 page views = (banner clicks + in-text affiliate_click) on treated groups minus
// in-text affiliate_click on control groups; also versus the 28 days before launch (difference in differences). Intervals: 95%
// bootstrap, resampling whole page groups (treated and control independently). Banner events never double count with
// affiliate_click (banners do not fire it). PromptQuorum earns nothing from these clicks: this measures behaviour only.
import { groupPath, localeOf, mulberry32, median } from './promo-report-core.mjs'

export { groupPath, localeOf, mulberry32, median }
export const CELLS = ['A1', 'A3', 'B1', 'B3']
export const SOLO = 'solo'

const sumByGroup = (map = {}) => {
  const out = {}
  for (const [p, n] of Object.entries(map)) out[groupPath(p)] = (out[groupPath(p)] ?? 0) + n
  return out
}
export const clusterOf = (gp) => gp.split('/')[1] ?? 'other'

/** Wilson 95% interval for k successes in n trials. */
export function wilson(k, n, z = 1.96) {
  if (!n) return null
  const p = k / n, z2 = z * z
  const d = 1 + z2 / n
  const c = (p + z2 / (2 * n)) / d
  const h = (z * Math.sqrt((p * (1 - p)) / n + z2 / (4 * n * n))) / d
  return { p, lo: Math.max(0, c - h), hi: Math.min(1, c + h) }
}

/** Per-group numbers for one window. w = {pageviews:{path:n}, events:{aff_banner_view,aff_banner_click,affiliate_click:{path:n}}}. */
export function groupRows(w, treated, controls) {
  const pv = sumByGroup(w?.pageviews), v = sumByGroup(w?.events?.aff_banner_view), c = sumByGroup(w?.events?.aff_banner_click), a = sumByGroup(w?.events?.affiliate_click)
  const row = (gp, meta) => ({ gp, ...meta, pv: pv[gp] ?? 0, views: v[gp] ?? 0, bannerClicks: c[gp] ?? 0, textClicks: a[gp] ?? 0 })
  return {
    treated: Object.entries(treated).map(([gp, m]) => row(gp, m)),
    controls: controls.map((gp) => row(gp, {})),
  }
}

const rate = (rows, f) => {
  const pv = rows.reduce((s, r) => s + r.pv, 0)
  return pv > 0 ? (rows.reduce((s, r) => s + f(r), 0) * 1000) / pv : null
}
const outbound = (r) => r.bannerClicks + r.textClicks
const text = (r) => r.textClicks

/** Treated minus control per 1,000 page views. T/C: row arrays. f: per-row count. Optional baseline rows pair by index. */
function diffEst(T, C, f) {
  const t = rate(T, f), c = rate(C, f)
  return t == null || c == null ? null : t - c
}

/**
 * Bootstrap of treated-minus-control (pilot) and the difference in differences, resampling whole groups.
 * T,C: pilot rows. Tb,Cb: baseline rows aligned by group (same gp). f: count function (baseline banner clicks are 0).
 */
export function bootstrapDiff(T, C, Tb, Cb, f, { reps = 2000, seed = 20261108, minGroups = 5 } = {}) {
  const est = diffEst(T, C, f)
  const base = Tb && Cb ? diffEst(Tb, Cb, f) : null
  const did = est != null && base != null ? est - base : null
  if (T.length < minGroups || C.length < minGroups || est == null) return { est, base, did, n: [T.length, C.length], note: `fewer than ${minGroups} groups per arm: no interval` }
  const rnd = mulberry32(seed)
  const idx = (n) => Array.from({ length: n }, () => Math.floor(rnd() * n))
  const pick = (rows, ix) => ix.map((i) => rows[i])
  const dp = [], dd = []
  for (let r = 0; r < reps; r++) {
    const it = idx(T.length), ic = idx(C.length)
    const e = diffEst(pick(T, it), pick(C, ic), f)
    if (e == null) continue
    dp.push(e)
    if (Tb && Cb) {
      const b = diffEst(pick(Tb, it), pick(Cb, ic), f)
      if (b != null) dd.push(e - b)
    }
  }
  const q = (xs, p) => { xs.sort((a, b) => a - b); return xs[Math.min(xs.length - 1, Math.max(0, Math.floor(p * xs.length)))] }
  const out = { est, base, did, n: [T.length, C.length], lo: q(dp, 0.025), hi: q(dp, 0.975) }
  if (dd.length) { out.didLo = q(dd, 0.025); out.didHi = q(dd, 0.975) }
  return out
}

const byGp = (rows) => new Map(rows.map((r) => [r.gp, r]))
const align = (rows, base) => { const m = byGp(base); return rows.map((r) => m.get(r.gp) ?? { ...r, pv: 0, views: 0, bannerClicks: 0, textClicks: 0 }) }

/**
 * Full analysis. treated: {path:{cell,tier}}, controls: [path]. pilot/baseline: windows. gsc (optional): {pilot:{path:{clicks,impressions}}, baseline:{...}}.
 * opts: {minViews, minClicks, reps, seed}.
 */
export function analyse({ treated, controls, pilot, baseline, gsc, opts = {} }) {
  const { minViews = 1000, minClicks = 20, reps = 2000, seed = 20261108 } = opts
  const P = groupRows(pilot, treated, controls)
  const B = baseline ? groupRows(baseline, treated, controls) : null
  const sets = {
    all: (r) => true,
    'format A (single card)': (r) => r.cell.startsWith('A'),
    'format B (compare)': (r) => r.cell.startsWith('B'),
    '1 merchant': (r) => r.cell.endsWith('1'),
    '3 merchants': (r) => r.cell.endsWith('3'),
    ...Object.fromEntries(CELLS.map((c) => [`cell ${c}`, (r) => r.cell === c])),
  }
  const out = { cells: [], variants: ['with the uncensored page', 'without the uncensored page'] }
  for (const excludeSolo of [false, true]) {
    const rows = []
    for (const [name, pred] of Object.entries(sets)) {
      const T = P.treated.filter((r) => pred(r) && !(excludeSolo && r.tier === SOLO))
      if (!T.length) continue
      const Tb = B ? align(T, B.treated) : null
      const C = P.controls, Cb = B ? align(C, B.controls) : null
      const views = T.reduce((s, r) => s + r.views, 0), clicks = T.reduce((s, r) => s + r.bannerClicks, 0), pv = T.reduce((s, r) => s + r.pv, 0)
      const incr = bootstrapDiff(T, C, Tb, Cb, outbound, { reps, seed })
      const cannibal = bootstrapDiff(T, C, Tb, Cb, text, { reps, seed })
      const eligible = views >= minViews && clicks >= minClicks
      const win = incr.lo != null && incr.lo > 0
      rows.push({
        set: name, groups: T.length, pv, views, clicks, reach: pv ? views / pv : null, ctr: wilson(clicks, views),
        incr, cannibal, eligible,
        verdict: !eligible ? `too few (need ${minViews} views and ${minClicks} clicks)` : win ? 'candidate winner (check guardrail)' : incr.lo == null ? 'undecided (no interval)' : 'undecided',
      })
    }
    out.cells.push({ excludeSolo, rows })
  }
  out.guardrail = gsc ? guardrail(P, B, gsc) : null
  out.byLocale = breakdownByPath(pilot, treated, (p) => localeOf(p))
  out.byCluster = breakdownByPath(pilot, treated, (p) => clusterOf(groupPath(p)))
  return out
}

/** Banner views/clicks per key of the URL path (locale, cluster). */
export function breakdownByPath(w, treated, keyFn) {
  const acc = {}
  const inT = (p) => !!treated[groupPath(p)]
  for (const [p, n] of Object.entries(w?.events?.aff_banner_view ?? {})) if (inT(p)) (acc[keyFn(p)] ??= { views: 0, clicks: 0 }).views += n
  for (const [p, n] of Object.entries(w?.events?.aff_banner_click ?? {})) if (inT(p)) (acc[keyFn(p)] ??= { views: 0, clicks: 0 }).clicks += n
  return Object.entries(acc).map(([key, v]) => ({ key, ...v, ctr: wilson(v.clicks, v.views) })).sort((a, b) => b.views - a.views)
}

/** Share table for a property breakdown {value:n}. */
export function shareTable(map = {}) {
  const total = Object.values(map).reduce((s, n) => s + n, 0)
  return Object.entries(map).map(([k, n]) => ({ key: k, n, share: total ? n / total : null })).sort((a, b) => b.n - a.n)
}

/** Page-health guardrail: GSC clicks of treated groups vs control, pilot vs baseline. Relative change of the ratio (treated/control). */
export function guardrail(P, B, gsc) {
  const sum = (rows, win) => rows.reduce((s, r) => s + (sumByGroup(Object.fromEntries(Object.entries(gsc[win] ?? {}).map(([p, v]) => [p, v.clicks])))[r.gp] ?? 0), 0)
  const tP = sum(P.treated, 'pilot'), cP = sum(P.controls, 'pilot')
  const tB = sum(P.treated, 'baseline'), cB = sum(P.controls, 'baseline')
  if (!tB || !cB || !cP) return { note: 'GSC baseline or control clicks missing' }
  const change = tP / cP / (tB / cB) - 1
  return { treatedClicks: [tB, tP], controlClicks: [cB, cP], relativeChange: change, flag: change < -0.1 }
}

/** Merchant-readiness rows. breakdowns: {vendor:{name:n}, category:{...}, device:{...}}; clickRows optional [{vendor,page,category,device}]. */
export function merchantSheet({ breakdowns, pilot, treated }) {
  const vendors = shareTable(breakdowns?.vendor)
  const topPages = Object.entries(sumByGroup(pilot?.events?.aff_banner_click)).filter(([gp]) => treated[gp]).sort((a, b) => b[1] - a[1]).slice(0, 10)
  return { vendors, categories: shareTable(breakdowns?.category), devices: shareTable(breakdowns?.device), markets: shareTable(breakdowns?.market), slots: shareTable(breakdowns?.slot), topPages }
}
