// Rate limiter that keeps working when Redis does not (owner decision 2026-11-22, Upstash request quota exhausted).
//
// Normal case: the shared Upstash sliding window, exactly as before.
// Redis error / quota exhausted: an in-memory sliding window per server instance. It is weaker than the shared one
// (every serverless instance counts on its own, so a determined abuser gets up to N x the limit), but it still stops a
// single client hammering one instance, and the endpoints stay UP instead of failing closed. After a failure Redis is
// not tried again for REDIS_RETRY_MS, so a dead database costs no latency and no wasted requests.
//
// Temporary-mode marker: when the fallback is used it logs `[ratelimit] Redis unavailable, using in-memory limit`
// (at most once a minute per prefix), so the outage is visible in the Vercel logs.

import { Ratelimit } from '@upstash/ratelimit'
import { redis } from '@/lib/redis'

type Unit = 's' | 'm' | 'h' | 'd'
export type RateWindow = `${number} ${Unit}`

export interface LimitResult {
  success: boolean
  /** epoch ms when the oldest counted request leaves the window */
  reset: number
  limit: number
  remaining: number
}

const REDIS_RETRY_MS = 60_000
const MAX_KEYS = 5_000
const UNIT_MS: Record<Unit, number> = { s: 1_000, m: 60_000, h: 3_600_000, d: 86_400_000 }

let redisDownUntil = 0
const lastLog = new Map<string, number>()

/** True while Redis is considered down (a call failed less than REDIS_RETRY_MS ago). */
export const redisIsDown = (): boolean => Date.now() < redisDownUntil
export const markRedisDown = (): void => {
  redisDownUntil = Date.now() + REDIS_RETRY_MS
}

function windowMs(window: RateWindow): number {
  const [n, unit] = window.split(' ')
  return Number(n) * UNIT_MS[unit as Unit]
}

function logOnce(prefix: string, err?: unknown): void {
  const now = Date.now()
  if (now - (lastLog.get(prefix) ?? 0) < 60_000) return
  lastLog.set(prefix, now)
  console.error(`[ratelimit] Redis unavailable, using in-memory limit (${prefix}):`, err instanceof Error ? err.message : err ?? 'circuit open')
}

export class SafeRatelimit {
  private readonly hits = new Map<string, number[]>()
  private readonly ms: number
  private readonly remote: Ratelimit

  constructor(
    private readonly requests: number,
    window: RateWindow,
    private readonly prefix: string,
  ) {
    this.ms = windowMs(window)
    this.remote = new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(requests, window), prefix })
  }

  async limit(key: string): Promise<LimitResult> {
    if (!redisIsDown()) {
      try {
        const r = await this.remote.limit(key)
        return { success: r.success, reset: r.reset, limit: r.limit, remaining: r.remaining }
      } catch (err) {
        markRedisDown()
        logOnce(this.prefix, err)
      }
    } else {
      logOnce(this.prefix)
    }
    return this.local(key)
  }

  private local(key: string): LimitResult {
    const now = Date.now()
    const from = now - this.ms
    const recent = (this.hits.get(key) ?? []).filter((t) => t > from)
    const success = recent.length < this.requests
    if (success) recent.push(now)
    this.hits.set(key, recent)
    if (this.hits.size > MAX_KEYS) {
      for (const [k, v] of this.hits) if (!v.length || v[v.length - 1] <= from) this.hits.delete(k)
      // Still too big (many active keys): drop the oldest entries instead of growing without bound.
      while (this.hits.size > MAX_KEYS) this.hits.delete(this.hits.keys().next().value as string)
    }
    return { success, reset: (recent[0] ?? now) + this.ms, limit: this.requests, remaining: Math.max(0, this.requests - recent.length) }
  }
}
