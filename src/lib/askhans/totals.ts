// Ask Hans — aggregated usage totals (server only). Anonymous counters: no visitor ID, no text, no IP.
// They count everything (not only visitors who agreed to the detailed statistics) so the numbers are honest
// totals, e.g. for the /askhans page and the homepage tile.
//
//   askhans:total        hash  { requests, answers, opens, since }   lifetime
//   askhans:day:<date>   hash  same field names, per UTC day (shared with the consent-based counters)

import { redis } from '@/lib/redis'

const TOTAL_KEY = 'askhans:total'
const DAY_TTL_S = 400 * 86_400

export type TotalField = 'requests' | 'answers' | 'opens'

export async function bumpTotals(field: TotalField): Promise<void> {
  try {
    const now = new Date()
    const day = now.toISOString().slice(0, 10)
    const dayKey = `askhans:day:${day}`
    const pipe = redis.pipeline()
    pipe.hincrby(TOTAL_KEY, field, 1)
    pipe.hsetnx(TOTAL_KEY, 'since', day)
    pipe.hincrby(dayKey, `total_${field}`, 1)
    pipe.expire(dayKey, DAY_TTL_S)
    await pipe.exec()
  } catch (err) {
    console.error('[askhans] totals failed', err instanceof Error ? err.message : err)
  }
}

export interface AskHansTotals {
  requests: number
  answers: number
  opens: number
  /** ISO date (UTC) the counters started, or null if nothing was counted yet */
  since: string | null
}

export async function getAskHansTotals(): Promise<AskHansTotals> {
  try {
    const h = (await redis.hgetall<Record<string, string | number>>(TOTAL_KEY)) ?? {}
    const n = (k: string) => Number(h[k] ?? 0) || 0
    return { requests: n('requests'), answers: n('answers'), opens: n('opens'), since: typeof h.since === 'string' ? h.since : null }
  } catch {
    return { requests: 0, answers: 0, opens: 0, since: null }
  }
}
