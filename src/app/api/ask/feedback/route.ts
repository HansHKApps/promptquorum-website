// POST /api/ask/feedback — star rating (1–5) with an optional comment from the Ask Hans window.
//
// Anonymous: no visit ID, no IP, no conversation text is stored or mailed. What happens with a submission:
//   1. an aggregate counter in Redis (askhans:day:<date> → rating:<n>, rating_count, rating_sum, fb_lang:<xx>),
//      read by `npm run askhans:stats`;
//   2. a notification mail to the site owner via Resend (rating and language only; no free text is accepted).
// Written feedback goes through the visitor's own mail program (see FeedbackBar), never through this route.

import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'crypto'
import { Resend } from 'resend'
import { Ratelimit } from '@upstash/ratelimit'
import { redis } from '@/lib/redis'

export const runtime = 'nodejs'

const OWNER_EMAIL = 'hello@promptquorum.com'
const LANGS = new Set(['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'])
const DAY_TTL_S = 400 * 86_400

const limiter = new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(6, '1 h'), prefix: 'rl:askhans:feedback' })

export async function POST(req: NextRequest) {
  if (process.env.ASK_HANS_ENABLED !== 'true') return new NextResponse(null, { status: 404 })

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '127.0.0.1'
  const rlKey = createHash('sha256').update(`${process.env.IP_HASH_SALT ?? ''}|${ip}`).digest('hex').slice(0, 32)
  try {
    if (!(await limiter.limit(rlKey)).success) return new NextResponse(null, { status: 429 })
  } catch (err) {
    console.error('[askhans] feedback limiter failed', err instanceof Error ? err.message : err)
    if (process.env.NODE_ENV === 'production') return new NextResponse(null, { status: 503 })
  }

  let b: Record<string, unknown>
  try {
    b = await req.json()
  } catch {
    return new NextResponse(null, { status: 400 })
  }

  const rating = typeof b.rating === 'number' && Number.isInteger(b.rating) && b.rating >= 1 && b.rating <= 5 ? b.rating : null
  if (!rating) return new NextResponse(null, { status: 400 })
  const lang = typeof b.lang === 'string' && LANGS.has(b.lang) ? b.lang : 'en'

  try {
    const dayKey = `askhans:day:${new Date().toISOString().slice(0, 10)}`
    const pipe = redis.pipeline()
    pipe.hincrby(dayKey, `rating:${rating}`, 1)
    pipe.hincrby(dayKey, 'rating_count', 1)
    pipe.hincrby(dayKey, 'rating_sum', rating)
    pipe.hincrby(dayKey, `fb_lang:${lang}`, 1)
    pipe.expire(dayKey, DAY_TTL_S)
    await pipe.exec()
  } catch (err) {
    console.error('[askhans] feedback counter failed', err instanceof Error ? err.message : err)
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'PromptQuorum <noreply@promptquorum.com>',
      to: OWNER_EMAIL,
      subject: `Ask Hans feedback: ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)} (${lang})`,
      text: `Rating: ${rating} / 5\nLanguage: ${lang}`,
    })
  } catch (err) {
    console.error('[askhans] feedback mail failed', err instanceof Error ? err.message : err)
    // The counter above already recorded the rating; the visitor still gets a normal answer.
  }

  return NextResponse.json({ success: true })
}
