// PromptQuorum Academy — aggregate, PII-free usage counters (same contract as src/lib/mcp/usage.ts): only totals,
// no IP, no subject, no identifier. Shown on the /academy page and as the homepage "By the numbers" tile.

import { unstable_cache } from 'next/cache'
import { redis } from '@/lib/redis'

export const ACADEMY_COUNTERS = ['programme', 'lesson', 'test', 'certificate', 'feedback_mail'] as const
export type AcademyCounter = (typeof ACADEMY_COUNTERS)[number]

const key = (c: AcademyCounter) => `academy:count:${c}`
const SINCE_KEY = 'academy:count:since'
/** Sequential certificate number counter of the registry (src/app/api/academy/register). */
export const CERT_SEQ_KEY = 'academy:cert:seq'
/** Programmes were already counted under this key before the other counters existed. */
const LEGACY_PROGRAMMES_KEY = 'academy:programmes:total'

/** Never throws: a Redis outage must not break a learner's request. */
export async function recordAcademy(counter: AcademyCounter): Promise<void> {
  try {
    await Promise.all([redis.incr(key(counter)), redis.set(SINCE_KEY, new Date().toISOString().slice(0, 10), { nx: true })])
  } catch (err) {
    console.error('[academy usage] failed to record', counter, err instanceof Error ? err.message : err)
  }
}

/** Anonymous feedback counters in one Redis hash: rating:<lesson|programme>:<1-5>, tutor:up, tutor:down, mail:* ... Only totals. */
const FEEDBACK_KEY = 'academy:feedback'
export const FEEDBACK_FIELDS = [
  ...(['lesson', 'programme'] as const).flatMap((k) => [1, 2, 3, 4, 5].map((n) => `rating:${k}:${n}`)),
  'tutor:up',
  'tutor:down',
  'tutor:message',
  'mail:rating',
  'mail:report',
  'cert:registered_download',
] as const
export type FeedbackField = (typeof FEEDBACK_FIELDS)[number]

export async function recordAcademyFeedback(field: FeedbackField): Promise<void> {
  try {
    await redis.hincrby(FEEDBACK_KEY, field, 1)
  } catch (err) {
    console.error('[academy usage] failed to record feedback', field, err instanceof Error ? err.message : err)
  }
}

export interface AcademyRatings {
  lesson: { count: number; average: number | null; distribution: number[] }
  programme: { count: number; average: number | null; distribution: number[] }
  tutor: { up: number; down: number }
  mail: { rating: number; report: number; feedback: number }
}

/** Read-only aggregate for the (later) public ratings display and the owner's stats script. */
export async function readAcademyRatings(): Promise<AcademyRatings> {
  const empty = (): AcademyRatings['lesson'] => ({ count: 0, average: null, distribution: [0, 0, 0, 0, 0] })
  const out: AcademyRatings = { lesson: empty(), programme: empty(), tutor: { up: 0, down: 0 }, mail: { rating: 0, report: 0, feedback: 0 } }
  try {
    const [h, fb] = await Promise.all([redis.hgetall<Record<string, number | string>>(FEEDBACK_KEY), redis.get<number | string>(key('feedback_mail'))])
    const n = (f: string) => Number(h?.[f] ?? 0)
    for (const kind of ['lesson', 'programme'] as const) {
      const dist = [1, 2, 3, 4, 5].map((s) => n(`rating:${kind}:${s}`))
      const count = dist.reduce((a, b) => a + b, 0)
      out[kind] = { count, average: count ? Math.round((dist.reduce((a, c, i) => a + c * (i + 1), 0) / count) * 10) / 10 : null, distribution: dist }
    }
    out.tutor = { up: n('tutor:up'), down: n('tutor:down') }
    out.mail = { rating: n('mail:rating'), report: n('mail:report'), feedback: Number(fb ?? 0) }
  } catch (err) {
    console.error('[academy usage] failed to read ratings', err instanceof Error ? err.message : err)
  }
  return out
}

export const recordAcademyProgramme = () => recordAcademy('programme')

export interface AcademyTotals {
  programmes: number
  lessons: number
  tests: number
  certificates: number
  /** certificates registered for online verification (the sequential number of the last one) */
  certificatesRegistered: number
  /** ISO date of the first counted event, or null */
  since: string | null
}

async function readTotals(): Promise<AcademyTotals> {
  const zero: AcademyTotals = { programmes: 0, lessons: 0, tests: 0, certificates: 0, certificatesRegistered: 0, since: null }
  try {
    const [programmes, legacy, lessons, tests, certificates, registered, since] = await redis.mget<(number | string | null)[]>(
      key('programme'),
      LEGACY_PROGRAMMES_KEY,
      key('lesson'),
      key('test'),
      key('certificate'),
      CERT_SEQ_KEY,
      SINCE_KEY,
    )
    return {
      programmes: Number(programmes ?? 0) + Number(legacy ?? 0),
      lessons: Number(lessons ?? 0),
      tests: Number(tests ?? 0),
      certificates: Number(certificates ?? 0),
      certificatesRegistered: Number(registered ?? 0),
      since: typeof since === 'string' && /^\d{4}-\d{2}-\d{2}/.test(since) ? since : null,
    }
  } catch (err) {
    console.error('[academy usage] failed to read totals', err instanceof Error ? err.message : err)
    return zero
  }
}

/** Cached like the MCP counter, so statically rendered pages stay static (refreshes once a day). */
export const getAcademyTotals = unstable_cache(readTotals, ['academy-totals'], { revalidate: 86400, tags: ['academy-usage'] })
export const getAcademyProgrammesTotal = async () => (await getAcademyTotals()).programmes
