import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { Ratelimit } from '@upstash/ratelimit'
import { redis } from '@/lib/redis'

// Homepage feedback block ("What's your biggest local LLM headache?").
// Deliberately anonymous — no email collected, no persistent contact list,
// no recurring email sent back to the submitter — so this sidesteps the
// GDPR consent/audit-log machinery src/app/api/waitlist/route.ts needs for
// its double opt-in marketing flow. Just a one-directional notification
// email to the site owner via Resend, modeled on the waitlist route's
// rate-limiting pattern.

const ipLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '1 h'),
  prefix: 'rl:feedback:ip',
})

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '127.0.0.1'
  const ipResult = await ipLimiter.limit(ip)
  if (!ipResult.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429, headers: { 'Retry-After': '3600' } }
    )
  }

  try {
    const body = await req.json()
    const answer: string = (body.answer ?? '').toString().trim().slice(0, 1000)

    if (!answer) {
      return NextResponse.json({ error: 'Feedback text is required.' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'PromptQuorum <noreply@promptquorum.com>',
      to: 'hello@promptquorum.com',
      subject: 'Homepage feedback: biggest local LLM headache',
      text: answer,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[feedback]', err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
