// PromptQuorum Academy — per-day anonymous counters for the public usage report on /academy (same contract as
// src/lib/askhans/report.ts): one Redis hash per UTC day, `academy:day:<YYYY-MM-DD>`, plain totals only. No IP, no
// text, no identifier, no subject. Fields:
//   programme / lesson / test / certificate / feedback_mail      learning activity (all visitors)
//   lang:<xx|other>                                              language of the programme / lesson / test
//   level:<level>, minutes:<n>, mode:<testMode>                  what was chosen on the setup screen (programmes)
//   rating:<lesson|programme>:<1-5>                              star ratings
//   tutor:message|up|down, mail:*, share:*, growth:*, launcher:click   engagement counters (mirrors academy:feedback)
//   sessions, dur:<bucket>                                       one Academy window use and its active time bucket
// Days expire after DAY_TTL_SECONDS. Never throws: a Redis outage must not break a learner's request.

import { redis } from '@/lib/redis'
import { isDurationBucket } from '@/lib/askhans/engagement'

export const ACADEMY_DAY_PREFIX = 'academy:day:'
export const ACADEMY_DAY_SINCE_KEY = 'academy:day:since'
const DAY_TTL_SECONDS = 400 * 86_400

export const academyDayKey = (d: Date = new Date()): string => `${ACADEMY_DAY_PREFIX}${d.toISOString().slice(0, 10)}`

export async function recordAcademyDay(fields: string[]): Promise<void> {
  if (fields.length === 0) return
  try {
    const key = academyDayKey()
    const p = redis.pipeline()
    for (const f of fields) p.hincrby(key, f, 1)
    p.expire(key, DAY_TTL_SECONDS)
    p.set(ACADEMY_DAY_SINCE_KEY, new Date().toISOString().slice(0, 10), { nx: true })
    await p.exec()
  } catch (err) {
    console.error('[academy day] failed to record', err instanceof Error ? err.message : err)
  }
}

/** One closed Academy window: only the coarse active-time bucket leaves the browser (never exact seconds). */
export async function recordAcademySession(bucket: unknown): Promise<void> {
  if (!isDurationBucket(bucket)) return
  await recordAcademyDay(['sessions', `dur:${bucket}`])
}
