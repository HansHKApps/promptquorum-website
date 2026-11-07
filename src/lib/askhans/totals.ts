// Ask Hans — aggregated usage totals (server only). Anonymous counters: no visitor ID, no text, no IP.
// Since 2026-11-07 (owner decision) they count only visitors who said "Yes" to the statistics.
//
//   askhans:total        hash  { requests, answers, opens, since }   lifetime
//   askhans:day:<date>   hash  same field names, per UTC day (shared with the consent-based counters)

import { redis } from '@/lib/redis'

const TOTAL_KEY = 'askhans:total'
const DAY_TTL_S = 90 * 86_400

export type TotalField = 'requests' | 'answers' | 'opens'

/** Power Mode: one finished report. All visitors, no ID: lifetime + per-day total and a per-process day counter. */
export async function bumpPower(processId: string, tools: string[] = []): Promise<void> {
  try {
    const day = new Date().toISOString().slice(0, 10)
    const dayKey = `askhans:day:${day}`
    const pipe = redis.pipeline()
    pipe.hincrby(TOTAL_KEY, 'power', 1)
    pipe.hsetnx(TOTAL_KEY, 'since', day)
    pipe.hincrby(dayKey, 'total_power', 1)
    pipe.hincrby(dayKey, `power:${processId}`, 1)
    // MCP tools the report used (allowlisted names only) feed the same "Tools" table as chat answers.
    for (const t of tools.slice(0, 10)) if (/^[a-z_]{3,40}$/.test(t)) pipe.hincrby(dayKey, `tool:${t}`, 1)
    pipe.expire(dayKey, DAY_TTL_S)
    await pipe.exec()
  } catch (err) {
    console.error('[askhans] power totals failed', err instanceof Error ? err.message : err)
  }
}

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
  /** Power Mode reports finished */
  power: number
  /** ISO date (UTC) the counters started, or null if nothing was counted yet */
  since: string | null
}

export async function getAskHansTotals(): Promise<AskHansTotals> {
  try {
    const h = (await redis.hgetall<Record<string, string | number>>(TOTAL_KEY)) ?? {}
    const n = (k: string) => Number(h[k] ?? 0) || 0
    return { requests: n('requests'), answers: n('answers'), opens: n('opens'), power: n('power'), since: typeof h.since === 'string' ? h.since : null }
  } catch {
    return { requests: 0, answers: 0, opens: 0, power: 0, since: null }
  }
}
