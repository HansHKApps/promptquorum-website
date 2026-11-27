// Page view counter of the ad display test (docs/ad-display-test.md). Aggregate daily counters only:
// hash pvcheck:day:<Pacific date>, field <event>|<source>|<locale>|<page>. No IP, ID or free text is stored.
//
// Storage: Upstash Redis. PV_CHECK_REDIS_URL/_TOKEN give the counter its OWN database (recommended: the shared one
// ran out of its request quota on 2026-11-22); without them the shared database is used.
// One accepted event = one Redis command. The rate limit is in memory on purpose (no extra commands).

import { createHash, timingSafeEqual } from 'crypto'
import { Redis } from '@upstash/redis'
import { NextRequest, NextResponse } from 'next/server'
import { AUTOMATED_UA, pacificDay, PV_EVENTS, PV_LOCALES, PV_PAGES, PV_SOURCES } from '@/lib/ad-test/events'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const TTL_S = 120 * 86_400
const PER_MINUTE = 120

const db = () =>
  new Redis({
    url: process.env.PV_CHECK_REDIS_URL ?? process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.PV_CHECK_REDIS_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN!,
  })

let minute = 0
const hits = new Map<string, number>()
function limited(ip: string): boolean {
  const now = Math.floor(Date.now() / 60_000)
  if (now !== minute) {
    minute = now
    hits.clear()
  }
  const key = createHash('sha256').update(`${process.env.IP_HASH_SALT ?? ''}|${ip}`).digest('hex')
  const n = (hits.get(key) ?? 0) + 1
  hits.set(key, n)
  return n > PER_MINUTE
}

const enabled = () => process.env.NEXT_PUBLIC_AD_TEST === 'true'

export async function POST(req: NextRequest) {
  if (!enabled()) return new NextResponse(null, { status: 404 })
  // only our own pages may count
  const origin = req.headers.get('origin')
  if (!origin || new URL(origin).host !== req.headers.get('host')) return new NextResponse(null, { status: 403 })
  if (limited(req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '')) return new NextResponse(null, { status: 429 })

  let b: Record<string, unknown>
  try {
    b = await req.json()
  } catch {
    return new NextResponse(null, { status: 400 })
  }
  const { event, locale, page } = b
  if (typeof event !== 'string' || !PV_EVENTS.has(event) || typeof locale !== 'string' || !PV_LOCALES.has(locale) || typeof page !== 'string' || !PV_PAGES.has(page) || !PV_SOURCES.some((s) => s === b.source)) {
    return new NextResponse(null, { status: 400 })
  }
  const source = AUTOMATED_UA.test(req.headers.get('user-agent') ?? '') ? 'auto' : (b.source as string)

  try {
    const redis = db()
    const key = `pvcheck:day:${pacificDay(new Date())}`
    const field = `${event}|${source}|${locale}|${page}`
    // expiry is set when a load field is new (a few times per day), not on every event
    if ((await redis.hincrby(key, field, 1)) === 1 && event === 'load') await redis.expire(key, TTL_S)
  } catch (err) {
    console.error('[pv-check] count failed', err instanceof Error ? err.message : err)
    return new NextResponse(null, { status: 503 })
  }
  return new NextResponse(null, { status: 204 })
}

/** Export for the report: /api/pv-check?key=<PV_CHECK_REPORT_KEY>&from=YYYY-MM-DD&to=YYYY-MM-DD */
export async function GET(req: NextRequest) {
  const secret = process.env.PV_CHECK_REPORT_KEY
  const given = req.nextUrl.searchParams.get('key') ?? ''
  const digest = (v: string) => createHash('sha256').update(v).digest()
  if (!secret || !timingSafeEqual(digest(given), digest(secret))) return new NextResponse(null, { status: 404 })

  const from = req.nextUrl.searchParams.get('from') ?? ''
  const to = req.nextUrl.searchParams.get('to') ?? ''
  const start = Date.parse(`${from}T12:00:00Z`)
  const end = Date.parse(`${to}T12:00:00Z`)
  if (!(start <= end) || end - start > 100 * 86_400_000) return new NextResponse(null, { status: 400 })

  try {
    const redis = db()
    const days: Record<string, Record<string, number>> = {}
    for (let t = start; t <= end; t += 86_400_000) {
      const day = new Date(t).toISOString().slice(0, 10)
      days[day] = (await redis.hgetall<Record<string, number>>(`pvcheck:day:${day}`)) ?? {}
    }
    return NextResponse.json({ days }, { headers: { 'cache-control': 'no-store' } })
  } catch (err) {
    console.error('[pv-check] export failed', err instanceof Error ? err.message : err)
    return new NextResponse(null, { status: 503 })
  }
}
