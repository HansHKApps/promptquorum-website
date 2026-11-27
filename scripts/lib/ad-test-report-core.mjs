// Pure math of the ad display test report and revenue simulator (docs/ad-display-test.md).
export const POSITIONS = ['P1', 'P2', 'P3']
export const CREATIVES = ['ask-hans', 'directory', 'academy']
export const FILL_RATES = [0.7, 0.85, 0.95]
export const CPMS = [1, 2, 3, 5]

/** 95% Wilson interval for k of n. */
export function wilson(k, n, z = 1.96) {
  if (!n) return null
  const p = k / n
  const d = 1 + (z * z) / n
  const mid = (p + (z * z) / (2 * n)) / d
  const half = (z * Math.sqrt((p * (1 - p)) / n + (z * z) / (4 * n * n))) / d
  return [Math.max(0, mid - half), Math.min(1, mid + half)]
}

export function simulateRevenue({ pageviews, adsPerPage, fillRate, cpm, adblock = 0 }) {
  return (pageviews * adsPerPage * fillRate * (1 - adblock) * cpm) / 1000
}

function checkCount(v, name) {
  if (!Number.isInteger(v) || v < 0) throw new Error(`${name} must be a whole number >= 0, got ${JSON.stringify(v)}`)
  return v
}

/** counts = { days, measureShare, pageviews, requests, impressions: {cell: n}, clicks: {cell: n} } */
export function analyse(counts) {
  const days = checkCount(counts.days, 'days')
  const pageviews = checkCount(counts.pageviews, 'pageviews')
  const requests = checkCount(counts.requests, 'requests')
  const share = counts.measureShare
  if (!days || !pageviews || !requests) throw new Error('days, pageviews and requests must be above 0')
  if (!(share > 0 && share <= 1)) throw new Error('measureShare must be in (0, 1]')
  const valid = new Set(POSITIONS.flatMap((p) => CREATIVES.map((c) => `${p}:${c}`)))
  for (const key of ['impressions', 'clicks']) {
    for (const [cell, n] of Object.entries(counts[key] ?? {})) {
      if (!valid.has(cell)) throw new Error(`unknown cell in ${key}: ${cell}`)
      checkCount(n, `${key}.${cell}`)
    }
  }
  const sum = (obj, match) => Object.entries(obj ?? {}).reduce((a, [cell, n]) => a + (match(cell) ? n : 0), 0)
  const row = (name, match) => {
    const impressions = sum(counts.impressions, match)
    // every measured view has each position once and each creative once, so both have `requests` opportunities
    if (impressions > requests) throw new Error(`${name}: ${impressions} impressions but only ${requests} requests`)
    const clicks = sum(counts.clicks, match)
    // clicks are counted on all views, impressions on the measured share only
    return { name, opportunities: requests, impressions, rate: impressions / requests, interval: wilson(impressions, requests), clicks, ctr: impressions ? clicks / (impressions / share) : null }
  }
  const positions = POSITIONS.map((p) => row(p, (cell) => cell.startsWith(`${p}:`)))
  const creatives = CREATIVES.map((c) => row(c, (cell) => cell.endsWith(`:${c}`)))
  const displayed = positions.reduce((a, r) => a + r.impressions, 0)
  return {
    days,
    pageviews,
    requests,
    coverage: requests / (pageviews * share),
    displayed,
    displayRate: displayed / (requests * POSITIONS.length),
    // "N ads per page" = the first N positions, P1 first
    perPage: [1, 2, 3].map((n) => ({ ads: n, displayed: positions.slice(0, n).reduce((a, r) => a + r.rate, 0) })),
    monthlyPageviews: (pageviews * 30) / days,
    positions,
    creatives,
  }
}

const pct = (v) => (v == null ? '-' : `${(v * 100).toFixed(1)}%`)
const int = (v) => Math.round(v).toLocaleString('en-US')

export function renderReport(a, { adblock = 0 } = {}) {
  const table = (title, rows) => [
    `## ${title}`,
    '| | Opportunities | Displayed | Display rate (95% interval) | Clicks (all views) | CTR (estimate) |',
    '|---|---|---|---|---|---|',
    ...rows.map((r) => `| ${r.name} | ${int(r.opportunities)} | ${int(r.impressions)} | ${pct(r.rate)} (${pct(r.interval[0])} to ${pct(r.interval[1])}) | ${int(r.clicks)} | ${pct(r.ctr)} |`),
    '',
  ]
  const out = [
    '# Ad display test report',
    '',
    `Window: ${a.days} days. Umami page views of the test pages: ${int(a.pageviews)}. Measured ad requests (page views): ${int(a.requests)}.`,
    `Tracking coverage (requests vs the measured share of page views): ${pct(a.coverage)}.${a.coverage < 0.85 || a.coverage > 1.15 ? ' **CHECK:** outside 85-115%. Same pages, same dates, same sample share? Do not use the numbers until explained.' : ''}`,
    ...(a.requests < 1000 ? ['**Thin data:** below 1,000 measured page views.'] : []),
    '',
    `**Overall display rate: ${pct(a.displayRate)}** of ad opportunities (3 per page view) were really displayed.`,
    '',
    ...table('By position', a.positions),
    ...table('By ad (rotated through all positions)', a.creatives),
    '## Ads displayed per page view',
    '| Ads per page | Displayed per page view |',
    '|---|---|',
    ...a.perPage.map((p) => `| ${p.ads} (${POSITIONS.slice(0, p.ads).join(' + ')}) | ${p.displayed.toFixed(2)} |`),
    '',
    '## Revenue simulator (assumptions, NOT revenue)',
    `Per month, from ${int(a.monthlyPageviews)} page views. Display rates are measured; fill rate and CPM are assumed. CPM is applied to DISPLAYED (viewable) ads. Extra ad-block deduction: ${pct(adblock)}.`,
    '',
    `| Ads per page | Fill rate | ${CPMS.map((c) => `CPM €${c}`).join(' | ')} |`,
    `|---|---|${CPMS.map(() => '---|').join('')}`,
  ]
  for (const p of a.perPage) {
    for (const fillRate of FILL_RATES) {
      const cells = CPMS.map((cpm) => `€${simulateRevenue({ pageviews: a.monthlyPageviews, adsPerPage: p.displayed, fillRate, cpm, adblock }).toFixed(2)}`)
      out.push(`| ${p.ads} | ${pct(fillRate)} | ${cells.join(' | ')} |`)
    }
  }
  out.push('', 'Limits: visitors who block Umami are in neither page views nor events. A real network would also be blocked more often than our own ads, and may show fewer ads on adult-adjacent ("uncensored") pages. Fill rate cannot be measured with own ads.', '')
  return out.join('\n')
}
