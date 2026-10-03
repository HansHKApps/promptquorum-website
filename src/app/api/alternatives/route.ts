import { NextRequest, NextResponse } from 'next/server'
import { createHash, timingSafeEqual } from 'crypto'
import { Ratelimit } from '@upstash/ratelimit'
import { redis } from '@/lib/redis'
import { ALL_CLOUD_APPS, isLoggableQuery, matchCloudApp, normalizeQuery, MAX_LOGGED_MISS_WORDS } from '@/lib/power-local-llm/alternatives/match'

// Cloud-app → local-alternative lookup: anonymous search log (image + voice/audio pilot).
// Stores ONLY normalized query text + counters. No cookie, no user id, no hardware profile.
// The rate limiter keeps a salted SHA-256 hash of the IP (never the raw IP) for the 1 h window; it is never
// linked to the search text.
// POST: client sends the raw query; the SERVER re-runs the matcher (client cannot spoof hit/miss).
// GET : owner-only export (Authorization: Bearer ALTERNATIVES_LOG_TOKEN). ?format=csv for a file.

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const MISS_KEY = 'alt:miss'           // hash: normalized query -> count
const MISS_LAST_KEY = 'alt:miss:last' // hash: normalized query -> ISO timestamp
const HIT_KEY = 'alt:hit'             // hash: cloud app id -> count
const MAX_MISS_FIELDS = 5000          // hard cap so the log cannot be flooded

const ipLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(30, '1 h'),
  prefix: 'rl:alt:ip',
})

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '127.0.0.1'
  const ipKey = createHash('sha256').update(`${process.env.ALTERNATIVES_LOG_TOKEN ?? ''}:${ip}`).digest('hex')
  const limit = await ipLimiter.limit(ipKey)
  if (!limit.success) {
    return NextResponse.json({ error: 'Too many requests.' }, { status: 429, headers: { 'Retry-After': '3600' } })
  }

  try {
    const body: unknown = await req.json()
    const raw =
      typeof body === 'object' && body !== null && 'query' in body && typeof (body as { query: unknown }).query === 'string'
        ? (body as { query: string }).query.slice(0, 120)
        : ''
    if (!isLoggableQuery(raw)) return NextResponse.json({ logged: false })

    const result = matchCloudApp(raw)
    if (result.kind === 'hit') {
      await redis.hincrby(HIT_KEY, result.app.id, 1)
      return NextResponse.json({ logged: true, outcome: 'hit' })
    }
    if (result.kind === 'miss') {
      if (result.normalized.split(' ').length > MAX_LOGGED_MISS_WORDS) return NextResponse.json({ logged: false })
      const known = await redis.hexists(MISS_KEY, result.normalized)
      if (!known) {
        const size = await redis.hlen(MISS_KEY)
        if (size >= MAX_MISS_FIELDS) return NextResponse.json({ logged: false })
      }
      await redis.hincrby(MISS_KEY, result.normalized, 1)
      await redis.hset(MISS_LAST_KEY, { [result.normalized]: new Date().toISOString() })
      return NextResponse.json({ logged: true, outcome: 'miss' })
    }
    return NextResponse.json({ logged: false })
  } catch (err) {
    console.error('[alternatives:post]', err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}

function authorized(req: NextRequest): boolean {
  const token = process.env.ALTERNATIVES_LOG_TOKEN
  if (!token) return false
  const header = req.headers.get('authorization') ?? ''
  const given = header.startsWith('Bearer ') ? header.slice(7) : ''
  const a = Buffer.from(given)
  const b = Buffer.from(token)
  return a.length === b.length && timingSafeEqual(a, b)
}

function csvCell(value: string | number): string {
  let s = String(value)
  if (/^[=+\-@]/.test(s)) s = `'${s}` // neutralise spreadsheet formula injection
  return `"${s.replace(/"/g, '""')}"`
}

export async function GET(req: NextRequest) {
  if (!authorized(req)) return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })

  const [missCounts, missLast, hitCounts] = await Promise.all([
    redis.hgetall<Record<string, number | string>>(MISS_KEY),
    redis.hgetall<Record<string, number | string>>(MISS_LAST_KEY),
    redis.hgetall<Record<string, number | string>>(HIT_KEY),
  ])

  const misses = Object.entries(missCounts ?? {})
    .map(([query, count]) => ({
      query: normalizeQuery(query) || query,
      count: Number(count),
      lastSeen: String((missLast ?? {})[query] ?? ''),
      status: 'not mapped',
    }))
    .sort((x, y) => y.count - x.count)

  const hits = ALL_CLOUD_APPS.map((app) => ({
    appId: app.id,
    category: app.category,
    name: app.name,
    count: Number((hitCounts ?? {})[app.id] ?? 0),
    mappedLocalTools: app.localMatches.length,
  })).sort((x, y) => y.count - x.count)

  const knownGaps = ALL_CLOUD_APPS.filter((a) => a.localMatches.length === 0).map((a) => ({ appId: a.id, name: a.name, gapNote: a.gapNote ?? '' }))

  if (new URL(req.url).searchParams.get('format') === 'csv') {
    const lines = ['query,count,last_seen,status', ...misses.map((m) => [m.query, m.count, m.lastSeen, m.status].map(csvCell).join(','))]
    return new NextResponse(lines.join('\n'), {
      headers: { 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': 'attachment; filename="alternatives-misses.csv"', 'Cache-Control': 'no-store' },
    })
  }
  return NextResponse.json({ generatedAt: new Date().toISOString(), misses, hits, knownGaps }, { headers: { 'Cache-Control': 'no-store' } })
}
