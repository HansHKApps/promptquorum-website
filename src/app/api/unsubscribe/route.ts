import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createHash } from 'crypto'
import { verifyToken } from '@/lib/token'
import { redis } from '@/lib/redis'

const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.promptquorum.com'
const VALID_LANGS = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'] as const
const UNSUB_TTL_SECONDS = 60 * 60 * 24 * 30 * 25 // 25 months

async function logUnsubscribe(email: string, source: 'click' | 'one-click') {
  try {
    const hashedEmail = createHash('sha256').update(email).digest('hex').slice(0, 16)
    const ts = Date.now()
    await redis.set(
      `unsub:${hashedEmail}:${ts}`,
      JSON.stringify({ ts, source }),
      { ex: UNSUB_TTL_SECONDS },
    )
  } catch (err) {
    console.error('[unsubscribe] audit log failed:', err)
  }
}

async function processUnsubscribe(email: string) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  // Resend allows update by email when the contact exists in the audience.
  await resend.contacts.update({
    audienceId: process.env.RESEND_AUDIENCE_ID!,
    email,
    unsubscribed: true,
  })
}

function parseLang(raw: string | null): string {
  if (raw && (VALID_LANGS as readonly string[]).includes(raw)) return raw
  return 'en'
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const email = (searchParams.get('email') ?? '').toLowerCase().trim()
  const token = searchParams.get('token') ?? ''
  const lang = parseLang(searchParams.get('lang'))

  if (!email || !token || !verifyToken(email, token, 'unsub')) {
    return NextResponse.redirect(`${BASE}/unsubscribed?status=invalid&lang=${lang}`)
  }

  try {
    await processUnsubscribe(email)
    await logUnsubscribe(email, 'click')
    return NextResponse.redirect(`${BASE}/unsubscribed?status=ok&lang=${lang}`)
  } catch (err) {
    console.error('[unsubscribe GET]', err)
    return NextResponse.redirect(`${BASE}/unsubscribed?status=error&lang=${lang}`)
  }
}

// RFC 8058 one-click POST (called directly by Gmail/Apple Mail when user clicks Unsubscribe in their UI).
export async function POST(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const email = (searchParams.get('email') ?? '').toLowerCase().trim()
  const token = searchParams.get('token') ?? ''

  if (!email || !token || !verifyToken(email, token, 'unsub')) {
    return NextResponse.json({ error: 'Invalid token.' }, { status: 400 })
  }

  try {
    await processUnsubscribe(email)
    await logUnsubscribe(email, 'one-click')
    return NextResponse.json({ status: 'unsubscribed' })
  } catch (err) {
    console.error('[unsubscribe POST]', err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
