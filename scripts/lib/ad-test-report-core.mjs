// Pure math of the page view reality check report (docs/ad-display-test.md).
// Compares three measurements of the same pages and days: GSC, our own counter, Umami.

/** counter field = <event>|<source>|<locale>|<page> */
function tally(dayCounts, match) {
  let n = 0
  for (const [field, value] of Object.entries(dayCounts)) {
    const [event, source, locale, page] = field.split('|')
    if (match({ event, source, locale, page })) n += Number(value)
  }
  return n
}

/** Accepts the GSC tool output ({rows:[{keys:[date,page],clicks,impressions}]}) with dimensions date, page. */
export function gscRows(gsc, pages) {
  return (gsc.rows ?? []).flatMap((r) => {
    const [date, url] = r.keys
    const m = /^https:\/\/www\.promptquorum\.com(?:\/(de|fr|es|pt|ja|zh|ko|ar))?\/power-local-llm\/([a-z0-9-]+)$/.exec(url)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error('GSC rows need dimensions ["date","page"], in that order')
    return m && pages.has(m[2]) ? [{ date, locale: m[1] ?? 'en', page: m[2], clicks: r.clicks, impressions: r.impressions }] : []
  })
}

const sum = (list, f) => list.reduce((a, x) => a + f(x), 0)
export const ratio = (a, b) => (b ? a / b : null)

function metrics(counterDays, dates, rows, filter = () => true) {
  const count = (match) => sum(dates, (d) => tally(counterDays[d], (f) => filter(f) && match(f)))
  const visitors = (event) => (f) => f.event === event && f.source !== 'auto'
  const mine = rows.filter((r) => dates.includes(r.date) && filter(r))
  return {
    gscImpressions: sum(mine, (r) => r.impressions),
    gscClicks: sum(mine, (r) => r.clicks),
    loads: count(visitors('load')),
    googleLoads: count((f) => f.event === 'load' && f.source === 'google'),
    shownViews: count(visitors('first')),
    googleShownViews: count((f) => f.event === 'first' && f.source === 'google'),
    humanViews: count(visitors('human')),
    googleHumanViews: count((f) => f.event === 'human' && f.source === 'google'),
    adsShown: count((f) => f.event.startsWith('ad:') && f.source !== 'auto'),
    clicks: count((f) => f.event.startsWith('click:') && f.source !== 'auto'),
    automatedLoads: count((f) => f.event === 'load' && f.source === 'auto'),
  }
}

/** counter = {days:{date:{field:n}}}. A day is compared only if BOTH GSC and the counter have data for it. */
export function analyse({ counter, gsc, pages, umami = null }) {
  const rows = gscRows(gsc, pages)
  const counterDates = Object.keys(counter.days).sort()
  if (!counterDates.length) throw new Error('the counter export has no days')
  const dates = []
  const excluded = []
  for (const d of counterDates) {
    const hasGsc = rows.some((r) => r.date === d)
    const hasCounter = tally(counter.days[d], (f) => f.event === 'load') > 0
    if (hasGsc && hasCounter) dates.push(d)
    else excluded.push({ date: d, reason: !hasCounter ? 'counter has no data (not started, or storage failed)' : 'no GSC data yet' })
  }
  if (!dates.length) throw new Error('no day has both GSC data and counter data')
  const split = (key, values) => values.map((v) => ({ name: v, ...metrics(counter.days, dates, rows, (f) => f[key] === v) }))
  return {
    dates,
    excluded,
    umami,
    total: metrics(counter.days, dates, rows),
    byDay: dates.map((d) => ({ name: d, ...metrics(counter.days, [d], rows) })),
    byLocale: split('locale', ['en', 'de', 'fr', 'es', 'pt', 'ja', 'zh', 'ko', 'ar']).filter((r) => r.gscClicks || r.loads),
    bySource: ['google', 'search', 'site', 'internal', 'direct', 'repeat', 'auto'].map((s) => ({ name: s, loads: sum(dates, (d) => tally(counter.days[d], (f) => f.event === 'load' && f.source === s)) })),
  }
}

const int = (v) => Math.round(v).toLocaleString('en-US')
const pct = (a, b) => (b ? `${((a / b) * 100).toFixed(0)}%` : '-')
const per = (a, b) => (b ? (a / b).toFixed(2) : '-')

export function renderReport(a) {
  const t = a.total
  const detail = (title, list) => [
    `## ${title}`,
    '| | GSC impressions | GSC clicks | Counted from Google | Counted / GSC clicks | Ad shown, from Google | All counted page views | With human input |',
    '|---|---|---|---|---|---|---|---|',
    ...list.map((r) => `| ${r.name} | ${int(r.gscImpressions)} | ${int(r.gscClicks)} | ${int(r.googleLoads)} | ${pct(r.googleLoads, r.gscClicks)} | ${int(r.googleShownViews)} | ${int(r.loads)} | ${int(r.humanViews)} |`),
    '',
  ]
  return [
    '# Are the page views real?',
    '',
    `Compared days (Pacific Time, as in GSC): ${a.dates.length}, ${a.dates[0]} to ${a.dates.at(-1)}.`,
    ...(a.excluded.length ? [`**Left out:** ${a.excluded.map((e) => `${e.date} (${e.reason})`).join('; ')}.`] : []),
    '',
    '## 1. Google traffic: GSC against our counter',
    '| Measurement | Count | Share of GSC clicks |',
    '|---|---|---|',
    `| GSC clicks | ${int(t.gscClicks)} | 100% |`,
    `| Our counter: page views arriving from Google | ${int(t.googleLoads)} | ${pct(t.googleLoads, t.gscClicks)} |`,
    `| ... of these, an ad was really shown | ${int(t.googleShownViews)} | ${pct(t.googleShownViews, t.gscClicks)} |`,
    `| ... of these, ad shown AND human input | ${int(t.googleHumanViews)} | ${pct(t.googleHumanViews, t.gscClicks)} |`,
    '',
    `For context: ${int(t.gscImpressions)} GSC impressions. An impression is a listing in Google's results, not an opened page, so no ad can be shown on it.`,
    '',
    '## 2. All traffic: our counter against Umami',
    '| Measurement | Count | Share of Umami page views |',
    '|---|---|---|',
    `| Umami page views | ${a.umami == null ? 'not given' : int(a.umami)} | ${a.umami == null ? '-' : '100%'} |`,
    `| Our counter: page views | ${int(t.loads)} | ${pct(t.loads, a.umami)} |`,
    `| ... an ad was really shown | ${int(t.shownViews)} | ${pct(t.shownViews, a.umami)} |`,
    `| ... ad shown AND human input | ${int(t.humanViews)} | ${pct(t.humanViews, a.umami)} |`,
    `| Counted separately, not included above: automated browsers and crawlers | ${int(t.automatedLoads)} | |`,
    ...(a.umami != null && a.excluded.length ? ['', '**CHECK:** days were left out; the Umami number must cover exactly the compared days.'] : []),
    '',
    '## 3. How often ads were shown',
    `Ads shown: **${int(t.adsShown)}** (${int(t.clicks)} clicks).`,
    `Per GSC click: ${per(t.adsShown, t.gscClicks)} (includes ads shown to visitors from every source). Per GSC impression: ${per(t.adsShown, t.gscImpressions)}. Per counted page view: ${per(t.adsShown, t.loads)} of 3 possible.`,
    '',
    '## Where the counted page views came from',
    '| Source | Page views |',
    '|---|---|',
    ...a.bySource.map((s) => `| ${s.name} | ${int(s.loads)} |`),
    '',
    ...detail('By day', a.byDay),
    ...detail('By language', a.byLocale),
  ].join('\n')
}
