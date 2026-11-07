// Pure functions for the promo pilot report (no I/O), so they can be tested with fixtures.
// Unit of analysis: a PAGE GROUP = one English path plus its 8 locale versions. Counts arrive per URL path and are
// summed over the group. Matched pairs (treatment group + control group) are the clusters for the intervals.

export const LOCALES = ['de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
const LOCALE_RE = new RegExp(`^/(?:${LOCALES.join('|')})(?=/|$)`)

/** English path of any locale URL ('/de/local-llms/x' -> '/local-llms/x'; '/de' -> '/'). */
export function groupPath(p) {
  const s = p.split('?')[0].split('#')[0].replace(LOCALE_RE, '').replace(/\/+$/, '')
  return s || '/'
}
export function localeOf(p) {
  const m = LOCALE_RE.exec(p.split('?')[0])
  return m ? m[0].slice(1) : 'en'
}

/** Usage event that counts as "adoption" of each promoted product. MCP use happens outside the site: no usage event. */
export const USAGE_EVENT = {
  'ask-hans': 'ask_hans_question',
  'power-mode': 'power_report_started',
  directory: 'directory_app_view',
  mcp: null,
}

/** Sum a {path: n} map per group path. */
export function sumByGroup(map = {}) {
  const out = {}
  for (const [p, n] of Object.entries(map)) out[groupPath(p)] = (out[groupPath(p)] ?? 0) + n
  return out
}

/** Per-locale sum of a {path: n} map for one group path. */
export function sumGroupByLocale(map = {}, gp) {
  const out = {}
  for (const [p, n] of Object.entries(map)) if (groupPath(p) === gp) out[localeOf(p)] = (out[localeOf(p)] ?? 0) + n
  return out
}

const div = (a, b) => (b > 0 ? a / b : null)

/** Metrics of one treatment group inside one window. `w` = {pageviews, events:{name:{path:n}}}. */
export function groupMetrics(w, gp, target) {
  const g = (name) => sumByGroup(w.events?.[name])[gp] ?? 0
  const pv = sumByGroup(w.pageviews)[gp] ?? 0
  const views = g('promo_view')
  const clicks = g('promo_click')
  const opens = g('promo_open')
  const ue = USAGE_EVENT[target]
  const usage = ue ? g(ue) : null
  return {
    pv, views, clicks, opens, usage,
    reach: div(views, pv),
    ctr: div(clicks, views),
    openRate: target === 'ask-hans' || target === 'power-mode' ? div(opens, clicks) : null,
    usagePerClick: usage == null ? null : div(usage, clicks),
    usagePerView: usage == null ? null : div(usage, views),
    usagePer1000: usage == null ? null : div(usage * 1000, pv),
  }
}

/** Usage per 1,000 page views of a group (works for control pages too: the product events happen there as well). */
export function usagePer1000(w, gp, target) {
  const ue = USAGE_EVENT[target]
  if (!ue) return null
  const u = sumByGroup(w.events?.[ue])[gp] ?? 0
  const pv = sumByGroup(w.pageviews)[gp] ?? 0
  return { usage: u, pv }
}

// ---- seeded bootstrap -------------------------------------------------------------------------------------------
export function mulberry32(seed) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** pairs: [{tU, tPv, cU, cPv}] (usage and pageviews, treatment and control). Pooled difference per 1,000 pageviews. */
export function pooledDiff(pairs) {
  const sum = (k) => pairs.reduce((s, p) => s + p[k], 0)
  const tPv = sum('tPv'), cPv = sum('cPv')
  if (tPv <= 0 || cPv <= 0) return null
  return (sum('tU') * 1000) / tPv - (sum('cU') * 1000) / cPv
}

/** Cluster bootstrap over matched pairs (the cluster is the page-group pair). Returns {est, lo, hi, n} or {est, n, note}. */
export function clusteredCI(pairs, { reps = 2000, seed = 20261107, minPairs = 3 } = {}) {
  const est = pooledDiff(pairs)
  if (pairs.length < minPairs || est == null) return { est, n: pairs.length, note: `fewer than ${minPairs} matched pairs: no interval` }
  const rnd = mulberry32(seed)
  const draws = []
  for (let r = 0; r < reps; r++) {
    const s = []
    for (let i = 0; i < pairs.length; i++) s.push(pairs[Math.floor(rnd() * pairs.length)])
    const d = pooledDiff(s)
    if (d != null) draws.push(d)
  }
  draws.sort((a, b) => a - b)
  const q = (p) => draws[Math.min(draws.length - 1, Math.max(0, Math.floor(p * draws.length)))]
  return { est, lo: q(0.025), hi: q(0.975), n: pairs.length }
}

export function median(xs) {
  const a = xs.filter((x) => x != null).sort((x, y) => x - y)
  if (!a.length) return null
  const m = Math.floor(a.length / 2)
  return a.length % 2 ? a[m] : (a[m - 1] + a[m]) / 2
}

/**
 * Cells: target x placement, except MCP and Power Mode which are judged POOLED across placements.
 * groups: [{path, placement, target, control|null}]
 */
export function cellKey(g) {
  return g.target === 'mcp' || g.target === 'power-mode' ? g.target : `${g.target} / ${g.placement}`
}

/**
 * Builds the full analysis. `pilot` and `baseline` are windows {pageviews, events}.
 * opts: {minViews, minClicks, reps, seed}
 */
export function analyse({ groups, pilot, baseline, opts }) {
  const { minViews = 1000, minClicks = 20, reps = 2000, seed = 20261107 } = opts ?? {}
  const rows = groups.map((g) => {
    const m = groupMetrics(pilot, g.path, g.target)
    return { ...g, m }
  })
  const cells = new Map()
  for (const r of rows) {
    const k = cellKey(r)
    if (!cells.has(k)) cells.set(k, { key: k, target: r.target, rows: [] })
    cells.get(k).rows.push(r)
  }
  const out = []
  for (const c of cells.values()) {
    const sum = (f) => c.rows.reduce((s, r) => s + (f(r) ?? 0), 0)
    const pv = sum((r) => r.m.pv), views = sum((r) => r.m.views), clicks = sum((r) => r.m.clicks), opens = sum((r) => r.m.opens)
    const ue = USAGE_EVENT[c.target]
    const usage = ue ? sum((r) => r.m.usage) : null
    // matched pairs with a control (hubs have none)
    const paired = c.rows.filter((r) => r.control)
    const pairsFor = (w) => paired.map((r) => {
      const t = usagePer1000(w, r.path, r.target), k = usagePer1000(w, r.control, r.target)
      return t && k ? { tU: t.usage, tPv: t.pv, cU: k.usage, cPv: k.pv } : null
    }).filter(Boolean)
    const pPilot = ue ? pairsFor(pilot) : []
    const pBase = ue && baseline ? pairsFor(baseline) : []
    const incr = ue ? clusteredCI(pPilot, { reps, seed }) : null
    const incrBase = ue && baseline ? clusteredCI(pBase, { reps, seed: seed + 1 }) : null
    // difference-in-differences needs the same pairs in both windows: resample pair INDICES together
    let did = null
    if (ue && baseline && pPilot.length >= 3 && pPilot.length === pBase.length) {
      const idx = pPilot.map((_, i) => i)
      const f = (ix) => {
        const a = pooledDiff(ix.map((i) => pPilot[i])), b = pooledDiff(ix.map((i) => pBase[i]))
        return a == null || b == null ? null : a - b
      }
      const est = f(idx)
      const rnd = mulberry32(seed + 2)
      const draws = []
      for (let r = 0; r < reps; r++) {
        const ix = idx.map(() => Math.floor(rnd() * idx.length))
        const d = f(ix)
        if (d != null) draws.push(d)
      }
      draws.sort((a, b) => a - b)
      did = { est, lo: draws[Math.floor(0.025 * draws.length)], hi: draws[Math.min(draws.length - 1, Math.floor(0.975 * draws.length))], n: idx.length }
    }
    out.push({
      key: c.key, target: c.target, groups: c.rows.length, pairs: paired.length,
      pv, views, clicks, opens, usage,
      reach: div(views, pv), ctr: div(clicks, views),
      openRate: c.target === 'ask-hans' || c.target === 'power-mode' ? div(opens, clicks) : null,
      usagePerClick: usage == null ? null : div(usage, clicks),
      usagePerView: usage == null ? null : div(usage, views),
      incr, incrBase, did,
      eligible: views >= minViews && clicks >= minClicks,
    })
  }
  const med = median(out.filter((c) => c.eligible).map((c) => c.ctr))
  for (const c of out) {
    if (!c.eligible) c.verdict = 'INSUFFICIENT DATA'
    else {
      const aboveMedian = c.ctr != null && med != null && c.ctr > med
      const incrOk = c.incr?.lo != null ? c.incr.lo > 0 : null
      c.verdict = !aboveMedian ? 'ELIGIBLE, not a winner (CTR at or below median)'
        : incrOk === true ? 'WINNER (CTR above median, incremental adoption interval above 0)'
        : incrOk === false ? 'CTR above median, but adoption not proven (interval includes 0)'
        : 'CTR above median, adoption not measurable (no usage event or too few pairs)'
    }
  }
  out.sort((a, b) => a.key.localeCompare(b.key))
  return { cells: out, medianCtr: med, opts: { minViews, minClicks, reps, seed } }
}

/** Views/clicks per locale for one target-cell, only where views >= 100; the rest pooled as 'other'. */
export function localeTable(groups, pilot, minViews = 100) {
  const acc = {}
  for (const g of groups) {
    const v = sumGroupByLocale(pilot.events?.promo_view, g.path), c = sumGroupByLocale(pilot.events?.promo_click, g.path)
    for (const l of ['en', ...LOCALES]) {
      acc[l] ??= { views: 0, clicks: 0 }
      acc[l].views += v[l] ?? 0
      acc[l].clicks += c[l] ?? 0
    }
  }
  const rows = [], other = { views: 0, clicks: 0, locales: [] }
  for (const [l, x] of Object.entries(acc)) {
    if (x.views >= minViews) rows.push({ locale: l, ...x, ctr: div(x.clicks, x.views) })
    else { other.views += x.views; other.clicks += x.clicks; other.locales.push(l) }
  }
  return { rows, other }
}
