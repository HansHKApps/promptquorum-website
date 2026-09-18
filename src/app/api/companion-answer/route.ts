import { NextRequest, NextResponse } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { redis } from '@/lib/redis'

// Roland's "companion" Q&A tool (companion.roschuel.com) — a separate
// question-answering service built on scraped PromptQuorum content, wired in
// for the German locale only (see src/components/search/SearchTrigger.tsx).
// This route proxies to it instead of calling it client-side because:
// - Roland's server requires the `Origin` header, which browser `fetch` is
//   forbidden to set manually.
// - A client-direct call would need companion.roschuel.com added to this
//   site's CSP `connect-src` allowlist (next.config.ts) for a feature scoped
//   to 1 of 9 locales; a same-origin proxy needs no CSP change.
// - Once Roland enables the API key check, it must never reach the browser.

const COMPANION_ORIGIN_HEADER = 'https://www.promptquorum.com'
// Roland confirmed ~35s typical response time (2026-09-18) and asked for a
// generous timeout while he moves to shorter/streamed answers.
const COMPANION_TIMEOUT_MS = 60_000
const MAX_QUESTION_LENGTH = 500

const ipLimiter = new Ratelimit({
  redis,
  // Roland has no fixed rate limit yet and asked (2026-09-18) for one
  // in-flight question per visitor — the client enforces that by disabling
  // the ask button while loading. This IP limit is a coarser backstop so a
  // single visitor's retries/multiple tabs can't hammer his unstable API.
  limiter: Ratelimit.slidingWindow(5, '1 m'),
  prefix: 'rl:companion-answer:ip',
})

type CompanionSource = { title: string; url: string }
type CompanionSuccess = { ok: true; answer: string; sources: CompanionSource[] }
type CompanionFailure = { ok: false }

function isCompanionSource(v: unknown): v is CompanionSource {
  return (
    !!v &&
    typeof v === 'object' &&
    typeof (v as Record<string, unknown>).title === 'string' &&
    typeof (v as Record<string, unknown>).url === 'string'
  )
}

export async function POST(req: NextRequest): Promise<NextResponse<CompanionSuccess | CompanionFailure>> {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '127.0.0.1'
  const ipResult = await ipLimiter.limit(ip)
  if (!ipResult.success) {
    return NextResponse.json({ ok: false }, { status: 429 })
  }

  let question: string
  try {
    const body = await req.json()
    question = typeof body?.question === 'string' ? body.question.trim() : ''
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  if (!question || question.length > MAX_QUESTION_LENGTH) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  const apiUrl = process.env.COMPANION_API_URL
  if (!apiUrl) {
    console.warn('[companion-answer] COMPANION_API_URL is not set — falling back to classic search.')
    return NextResponse.json({ ok: false })
  }

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Origin: COMPANION_ORIGIN_HEADER,
  }
  // Roland does not enforce an API key yet (2026-09-18) but plans to; once he
  // shares the header name, set it here from process.env.COMPANION_API_KEY.
  // Leaving the slot ready now avoids a second round-trip through this file.
  if (process.env.COMPANION_API_KEY) {
    headers['X-API-Key'] = process.env.COMPANION_API_KEY
  }

  try {
    const upstream = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({ question }),
      signal: AbortSignal.timeout(COMPANION_TIMEOUT_MS),
    })

    if (!upstream.ok) {
      console.warn(`[companion-answer] upstream returned ${upstream.status}`)
      return NextResponse.json({ ok: false })
    }

    const data = await upstream.json()
    const answer = typeof data?.answer === 'string' ? data.answer : ''
    const rawSources = Array.isArray(data?.sources) ? data.sources : []
    const sources = rawSources.filter(isCompanionSource)

    if (!answer) {
      console.warn('[companion-answer] upstream response missing answer text')
      return NextResponse.json({ ok: false })
    }

    return NextResponse.json({ ok: true, answer, sources })
  } catch (err) {
    console.error('[companion-answer]', err)
    return NextResponse.json({ ok: false })
  }
}
