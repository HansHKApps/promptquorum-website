// GET /academy/card/<certificate id> — the preview image (1200 x 630 PNG) that WhatsApp, Telegram, LinkedIn and others
// show when a learner shares the link to a registered certificate's verification page. Reads only what the registry
// already shows publicly (subject, score, time, number; never a name). Same rate limit as the verification page,
// and an unknown ID gets a plain branded card, so IDs cannot be probed through this route.

import { createHash } from 'crypto'
import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'
import { SafeRatelimit } from '@/lib/safe-ratelimit'
import { academyEnabled } from '@/lib/academy/config'
import { CERTIFICATE_ID_PATTERN } from '@/lib/academy/certificate'
import { redis } from '@/lib/redis'

export const runtime = 'nodejs'

const limiter = new SafeRatelimit(60, '1 h', 'rl:academy:card')
/** The built-in image font covers Latin only; other scripts would render as empty boxes, so their subject is left off. */
const LATIN = /^[\p{Script=Latin}\p{N}\p{P}\p{S}\s]+$/u

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }): Promise<Response> {
  if (!academyEnabled()) return new Response('Not found', { status: 404 })
  const id = (await params).id.toUpperCase()
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '127.0.0.1'
  const key = createHash('sha256').update(`${process.env.IP_HASH_SALT ?? ''}|${ip}`).digest('hex').slice(0, 32)
  const limited = await limiter
    .limit(key)
    .then((r) => !r.success)
    .catch(() => false)
  const record = !limited && CERTIFICATE_ID_PATTERN.test(id) ? await redis.hgetall<Record<string, string | number>>(`academy:cert:${id}`).catch(() => null) : null
  const found = record && record.number
  const subject = found && LATIN.test(String(record.subject)) ? String(record.subject).slice(0, 120) : null
  const fit = (s: string) => (s.length > 70 ? 46 : s.length > 40 ? 58 : 70)

  const img = new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #3b0764, #7e22ce 55%, #d946ef)', color: 'white', textAlign: 'center', padding: 60 }}>
        <div style={{ fontSize: 40, fontWeight: 700, display: 'flex' }}>PromptQuorum Academy</div>
        {found ? (
          <>
            <div style={{ fontSize: 210, fontWeight: 800, lineHeight: 1.05, display: 'flex' }}>{`${record.percent}%`}</div>
            {subject && <div style={{ fontSize: fit(subject), fontWeight: 700, maxWidth: 1040, display: 'flex', justifyContent: 'center' }}>{subject}</div>}
            <div style={{ fontSize: 34, marginTop: 26, opacity: 0.9, display: 'flex' }}>{`${record.minutes} min · No. ${Number(record.number).toLocaleString('en-US')}`}</div>
          </>
        ) : (
          <div style={{ fontSize: 64, fontWeight: 700, marginTop: 30, display: 'flex' }}>Free, personalized AI learning</div>
        )}
        <div style={{ fontSize: 32, marginTop: 40, display: 'flex' }}>promptquorum.com/academy</div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
  img.headers.set('Cache-Control', found ? 'public, max-age=3600, s-maxage=86400' : 'public, max-age=300')
  return img
}
