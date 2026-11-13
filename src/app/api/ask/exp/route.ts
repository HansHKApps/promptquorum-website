// POST /api/ask/exp: anonymous counters for the Ask Hans button-wording experiment (askhans-cta-v1).
//
// Separate from /api/ask/event on purpose: the existing endpoint, its rate limit and its counters are untouched.
// Storage: Upstash Redis (already used). Nothing personal is stored:
//   - no IP address, no free text, no visitor ID;
//   - `sid` (random per browser session, sent by the client) is only fed into a HyperLogLog (PFADD) to estimate
//     "unique sessions"; HyperLogLog keeps no list of IDs, so individual IDs cannot be read back.
// Consent: ask_hans_button_impression / _click / _opened are sent without consent, like Umami (cookieless,
// anonymous). All funnel events after the first question are sent by the client only after "Yes" (see CTA_EVENTS).
//
// Keys (all expire after 120 days):
//   askhans:exp:<id>                hash   since, consent:<V>:yes|no, <ev>:<V>, <ev>:<V>:lang:<xx>|dev:<d>|cat:<c>, via:<ev>:<V>:<placement>,
//                                          sum:convs:<V>, sum:qs:<V>, sum:secs:<V>
//   askhans:exp:<id>:u:<ev>:<V>     hyperloglog of unique sessions per event and variant

import { NextRequest, NextResponse } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { createHash } from 'crypto'
import { redis } from '@/lib/redis'
import {
  CTA_CATEGORIES, CTA_DEVICES, CTA_EVENTS, CTA_EXPERIMENT_ENABLED, CTA_EXPERIMENT_ID, CTA_LANGS, CTA_PLACEMENTS, CTA_VARIANTS,
} from '@/lib/askhans/experiment/config'

export const runtime = 'nodejs'

const limiter = new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(120, '1 m'), prefix: 'rl:askhans:exp' })
const TTL_S = 120 * 86_400
const SID = /^[a-zA-Z0-9-]{8,64}$/
const has = (list: readonly string[], v: unknown): v is string => typeof v === 'string' && list.includes(v)
const int = (v: unknown, max: number): number | null => (typeof v === 'number' && Number.isInteger(v) && v >= 0 && v <= max ? v : null)

export async function POST(req: NextRequest) {
  if (process.env.ASK_HANS_ENABLED !== 'true' || !CTA_EXPERIMENT_ENABLED) return new NextResponse(null, { status: 404 })

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '127.0.0.1'
  const rlKey = createHash('sha256').update(`${process.env.IP_HASH_SALT ?? ''}|${ip}`).digest('hex').slice(0, 32)
  if (!(await limiter.limit(rlKey)).success) return new NextResponse(null, { status: 429 })

  let b: Record<string, unknown>
  try {
    b = await req.json()
  } catch {
    return new NextResponse(null, { status: 400 })
  }

  // Only the running experiment is accepted; everything else must match a fixed whitelist (never stored as free text).
  if (b.exp !== CTA_EXPERIMENT_ID) return new NextResponse(null, { status: 400 })
  if (!has(Object.keys(CTA_EVENTS), b.ev) || !has(CTA_VARIANTS, b.variant)) return new NextResponse(null, { status: 400 })
  if (!has(CTA_LANGS, b.lang) || !has(CTA_DEVICES, b.device) || !has(CTA_CATEGORIES, b.cat)) return new NextResponse(null, { status: 400 })
  const ev = b.ev
  const v = b.variant
  const key = `askhans:exp:${CTA_EXPERIMENT_ID}`
  const day = new Date().toISOString().slice(0, 10)

  try {
    const pipe = redis.pipeline()
    pipe.hsetnx(key, 'since', day)
    if (ev === 'ask_hans_consent_choice') {
      if (b.choice !== 'yes' && b.choice !== 'no') return new NextResponse(null, { status: 400 })
      pipe.hincrby(key, `consent:${v}:${b.choice}`, 1)
    } else if (ev === 'ask_hans_session_end') {
      const convs = int(b.convs, 50)
      const qs = int(b.qs, 500)
      const secs = int(b.secs, 7200)
      if (convs === null || qs === null || secs === null || convs < 1) return new NextResponse(null, { status: 400 })
      pipe.hincrby(key, `${ev}:${v}`, 1)
      pipe.hincrby(key, `sum:convs:${v}`, convs)
      pipe.hincrby(key, `sum:qs:${v}`, qs)
      pipe.hincrby(key, `sum:secs:${v}`, secs)
    } else {
      pipe.hincrby(key, `${ev}:${v}`, 1)
      pipe.hincrby(key, `${ev}:${v}:lang:${b.lang}`, 1)
      pipe.hincrby(key, `${ev}:${v}:dev:${b.device}`, 1)
      pipe.hincrby(key, `${ev}:${v}:cat:${b.cat}`, 1)
      if (has(CTA_PLACEMENTS, b.via) || b.via === 'other') pipe.hincrby(key, `via:${ev}:${v}:${b.via}`, 1)
      if (typeof b.sid === 'string' && SID.test(b.sid)) {
        const hll = `${key}:u:${ev}:${v}`
        pipe.pfadd(hll, b.sid)
        pipe.expire(hll, TTL_S)
      }
    }
    pipe.expire(key, TTL_S)
    await pipe.exec()
  } catch (err) {
    console.error('[askhans] exp event failed', err instanceof Error ? err.message : err)
    return new NextResponse(null, { status: 500 })
  }
  return new NextResponse(null, { status: 204 })
}
