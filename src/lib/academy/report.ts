// PromptQuorum Academy — usage report for the public /academy page. Same windows as Ask Hans and the MCP report
// (today, yesterday, last 7 days, last 30 days, all time) and the same shared shapes (src/lib/usage/report-types.ts).
// Reads the anonymous per-day hashes written by day-store.ts plus the lifetime counters. Only totals; never names,
// IPs, subjects or learner text. A Redis outage yields an all-zero report, so the page never fails because of it.

import { redis } from '@/lib/redis'
import { keepLastGood } from '@/lib/lastGood'
import { DURATION_BUCKETS } from '@/lib/askhans/engagement'
import { REPORT_DAYS, lastNDaysUtc, rankRows, windowsOf, zeroCounts } from '@/lib/usage/report-types'
import type { ReportRow, WindowCounts } from '@/lib/usage/report-types'
import { ACADEMY_DAY_PREFIX, ACADEMY_DAY_SINCE_KEY } from './day-store'
import { getAcademyTotalsLive, type AcademyTotals } from './usage'

export type { ReportRow, WindowCounts }

export const ACADEMY_HEADLINE = ['programme', 'lesson', 'test', 'certificate'] as const
export type AcademyHeadlineKey = (typeof ACADEMY_HEADLINE)[number]

export interface AcademyRatingKind {
  /** ratings per star (index 0 = 1 star) in each window */
  stars: WindowCounts[]
  /** lifetime distribution from the lifetime feedback hash */
  allStars: number[]
}

export interface AcademyReport {
  generatedAt: string
  /** first day the lifetime totals were counted, or null */
  since: string | null
  /** first day the per-day breakdowns were counted, or null (windows before it show zeros) */
  breakdownSince: string | null
  headline: { key: AcademyHeadlineKey; win: WindowCounts; all: number }[]
  /** lessons generated per UTC day, oldest first, ending today */
  days: { date: string; count: number }[]
  langs: ReportRow[]
  levels: ReportRow[]
  minutes: ReportRow[]
  modes: ReportRow[]
  ratings: { lesson: AcademyRatingKind; programme: AcademyRatingKind }
  tutor: { messages: WindowCounts; up: WindowCounts; down: WindowCounts; allMessages: number; allUp: number; allDown: number }
  /** share / growth / launcher counters per window and lifetime */
  actions: ReportRow[]
  engagement: { sessions: WindowCounts; duration: Record<string, WindowCounts> }
}

const num = (v: unknown) => Number(v ?? 0) || 0
const ACTION_FIELDS = ['launcher:click', 'share:certificate', 'share:image', 'share:documentation', 'growth:share_card', 'growth:challenge_shared', 'growth:challenge_landed', 'growth:linkedin', 'growth:reminder', 'growth:next_topic', 'mail:rating', 'mail:report']

function emptyKind(): AcademyRatingKind {
  return { stars: [1, 2, 3, 4, 5].map(zeroCounts), allStars: [0, 0, 0, 0, 0] }
}

function emptyReport(dates: string[]): AcademyReport {
  return {
    generatedAt: new Date().toISOString(),
    since: null,
    breakdownSince: null,
    headline: ACADEMY_HEADLINE.map((key) => ({ key, win: zeroCounts(), all: 0 })),
    days: dates.map((date) => ({ date, count: 0 })),
    langs: [],
    levels: [],
    minutes: [],
    modes: [],
    ratings: { lesson: emptyKind(), programme: emptyKind() },
    tutor: { messages: zeroCounts(), up: zeroCounts(), down: zeroCounts(), allMessages: 0, allUp: 0, allDown: 0 },
    actions: [],
    engagement: { sessions: zeroCounts(), duration: Object.fromEntries(DURATION_BUCKETS.map((b) => [b, zeroCounts()])) },
  }
}

const lifetimeOf = (t: AcademyTotals, key: AcademyHeadlineKey): number =>
  key === 'programme' ? t.programmes : key === 'lesson' ? t.lessons : key === 'test' ? t.tests : t.certificates

async function readAcademyReport(): Promise<AcademyReport> {
  const dates = lastNDaysUtc(REPORT_DAYS)
  const report = emptyReport(dates)
  try {
    const pipe = redis.pipeline()
    for (const d of dates) pipe.hgetall(`${ACADEMY_DAY_PREFIX}${d}`)
    const [perDay, totals, fb, dims, daySince] = await Promise.all([
      pipe.exec<(Record<string, string | number> | null)[]>(),
      getAcademyTotalsLive(),
      redis.hgetall<Record<string, string | number>>('academy:feedback'),
      redis.hgetall<Record<string, string | number>>('academy:demand:dims'),
      redis.get<string>(ACADEMY_DAY_SINCE_KEY),
    ])
    report.since = totals.since
    report.breakdownSince = typeof daySince === 'string' && /^\d{4}-\d{2}-\d{2}/.test(daySince) ? daySince : null

    const head = new Map<AcademyHeadlineKey, WindowCounts>(ACADEMY_HEADLINE.map((k) => [k, zeroCounts()]))
    const langs = new Map<string, WindowCounts>()
    const levels = new Map<string, WindowCounts>()
    const minutes = new Map<string, WindowCounts>()
    const modes = new Map<string, WindowCounts>()
    const actions = new Map<string, WindowCounts>()
    const ratings = report.ratings
    const tutor = report.tutor
    const eng = report.engagement
    const buckets = { 'lang:': langs, 'level:': levels, 'minutes:': minutes, 'mode:': modes } as const

    perDay.forEach((h, i) => {
      const day = h ?? {}
      const wins = windowsOf(i, dates.length)
      for (const k of ACADEMY_HEADLINE) for (const w of wins) head.get(k)![w] += num(day[k])
      report.days[i].count = num(day.lesson)
      for (const w of wins) {
        eng.sessions[w] += num(day.sessions)
        tutor.messages[w] += num(day['tutor:message'])
        tutor.up[w] += num(day['tutor:up'])
        tutor.down[w] += num(day['tutor:down'])
        for (const b of DURATION_BUCKETS) eng.duration[b][w] += num(day[`dur:${b}`])
        for (const kind of ['lesson', 'programme'] as const) for (let s = 1; s <= 5; s++) ratings[kind].stars[s - 1][w] += num(day[`rating:${kind}:${s}`])
      }
      for (const [field, raw] of Object.entries(day)) {
        const n = num(raw)
        if (!n) continue
        for (const [prefix, m] of Object.entries(buckets)) {
          if (!field.startsWith(prefix)) continue
          const key = field.slice(prefix.length)
          const counts = m.get(key) ?? zeroCounts()
          for (const w of wins) counts[w] += n
          m.set(key, counts)
        }
        if (ACTION_FIELDS.includes(field)) {
          const counts = actions.get(field) ?? zeroCounts()
          for (const w of wins) counts[w] += n
          actions.set(field, counts)
        }
      }
    })

    const f = fb ?? {}
    const d = dims ?? {}
    report.headline = ACADEMY_HEADLINE.map((key) => ({ key, win: head.get(key)!, all: lifetimeOf(totals, key) }))
    for (const kind of ['lesson', 'programme'] as const) ratings[kind].allStars = [1, 2, 3, 4, 5].map((s) => num(f[`rating:${kind}:${s}`]))
    tutor.allMessages = num(f['tutor:message'])
    tutor.allUp = num(f['tutor:up'])
    tutor.allDown = num(f['tutor:down'])
    const withAll = (rows: ReportRow[], all: (key: string) => number | undefined): ReportRow[] => rows.map((r) => ({ ...r, allTime: all(r.key) ?? 0 }))
    report.langs = withAll(rankRows(langs), (k) => num(d[`programme:lang:${k}`]))
    report.levels = withAll(rankRows(levels), (k) => num(d[`programme:level:${k}`]))
    report.minutes = withAll(rankRows(minutes, 8).sort((a, b) => Number(a.key) - Number(b.key)), (k) => num(d[`programme:minutes:${k}`]))
    report.modes = withAll(rankRows(modes), (k) => num(d[`programme:mode:${k}`]))
    report.actions = withAll(rankRows(actions, 20), (k) => num(f[k]))
  } catch (err) {
    console.error('[academy] report failed', err instanceof Error ? err.message : err)
    throw err
  }
  return report
}

/** Never shows a failed read as zeros: on a Redis error it returns the last good report (see lastGood.ts). */
export const getAcademyReport = () => keepLastGood('academy:report', readAcademyReport, () => emptyReport(lastNDaysUtc(REPORT_DAYS)))
