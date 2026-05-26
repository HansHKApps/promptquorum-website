import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'crypto'
import { redis } from '@/lib/redis'

const TTL_SECONDS = 60 * 60 * 24 * 30 * 25 // 25 months

type ConsentBody = {
  state?: 'granted' | 'denied' | 'custom'
  analytics?: boolean
  marketing?: boolean
  version?: number
  lang?: string
}

function hashIp(ip: string): string {
  const salt = process.env.IP_HASH_SALT
  if (!salt && process.env.NODE_ENV === 'production') {
    console.warn('[consent] IP_HASH_SALT not set in production')
  }
  return createHash('sha256').update(ip + (salt ?? '')).digest('hex').slice(0, 16)
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ConsentBody
    if (!body || typeof body.state !== 'string') {
      return NextResponse.json({ error: 'Invalid body.' }, { status: 400 })
    }

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '0.0.0.0'
    const ua = (req.headers.get('user-agent') ?? '').slice(0, 120)
    const ts = Date.now()
    const hashedIp = hashIp(ip)

    const record = {
      state: body.state,
      analytics: !!body.analytics,
      marketing: !!body.marketing,
      version: body.version ?? 1,
      lang: typeof body.lang === 'string' ? body.lang.slice(0, 8) : 'en',
      ts,
      ua,
    }

    await redis.set(`consent:${hashedIp}:${ts}`, JSON.stringify(record), { ex: TTL_SECONDS })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[consent]', err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
