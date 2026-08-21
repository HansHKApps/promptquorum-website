import { NextRequest, NextResponse } from 'next/server'
import { put, list } from '@vercel/blob'
import crypto from 'crypto'

export const runtime = 'nodejs'

// Vercel Drains relay (Verdict Phase 6 §7) — Drains are push-only, and
// Verdict is a local Electron app with no public URL to receive that push.
// This route is the public-URL relay: Vercel POSTs NDJSON here on its own
// delivery schedule, we append it into a per-day Blob, and Verdict pulls
// from Blob on its own schedule later (db/vercel-drains-sync.js in the
// Verdict repo) — same pull shape it already uses for GSC and Umami.
//
// UNVERIFIED AGAINST A LIVE DELIVERY: signature algorithm (HMAC-SHA1 over
// the raw body) and the NDJSON line shape are per Vercel's documented
// Drains format at the time this was written, not confirmed against an
// actual payload — the brief that scoped this flagged the same gap.
// Confirm both once the Drain in Step 2 sends its first real delivery
// (check this function's logs), and adjust here if reality differs.

async function readRawBody(req: NextRequest): Promise<Buffer> {
  const arrayBuffer = await req.arrayBuffer()
  return Buffer.from(arrayBuffer)
}

export async function POST(req: NextRequest) {
  const rawBody = await readRawBody(req)
  const signature = req.headers.get('x-vercel-signature')
  const secret = process.env.DRAIN_SIGNING_SECRET

  if (!secret) {
    console.error('[drains/analytics] DRAIN_SIGNING_SECRET not configured')
    return NextResponse.json({ error: 'not configured' }, { status: 500 })
  }

  const expected = crypto.createHmac('sha1', secret).update(rawBody).digest('hex')
  if (!signature || signature !== expected) {
    return NextResponse.json({ error: 'invalid signature' }, { status: 401 })
  }

  const lines = rawBody.toString('utf8').split('\n').filter(Boolean)
  const events = lines
    .map((line) => {
      try {
        return JSON.parse(line)
      } catch {
        return null
      }
    })
    .filter((e): e is Record<string, unknown> => e !== null && e.eventType === 'event')

  if (events.length === 0) return NextResponse.json({ received: 0 })

  const dateKey = new Date().toISOString().slice(0, 10) // YYYY-MM-DD
  const blobPath = `analytics/events-${dateKey}.ndjson`

  // Blob has no true append — fetch-and-concat the day's file. Cheap at this
  // site's real event volume (a few hundred/month); if two deliveries land
  // close together this can race and drop one write. If volume grows,
  // switch to one-blob-per-event (analytics/events-<date>/<uuid>.json) and
  // have the Verdict-side puller list+merge the day's folder instead.
  let existing = ''
  try {
    const { blobs } = await list({ prefix: blobPath })
    if (blobs.length > 0) {
      const resp = await fetch(blobs[0].url)
      existing = await resp.text()
    }
  } catch (err) {
    console.error('[drains/analytics] list/read existing blob failed, starting fresh:', err)
  }

  const newContent = existing + events.map((e) => JSON.stringify(e)).join('\n') + '\n'

  try {
    await put(blobPath, newContent, {
      access: 'public', // reassess against current @vercel/blob access-control options before shipping — private/token-gated reads may be available by the time this ships
      addRandomSuffix: false,
      allowOverwrite: true,
    })
  } catch (err) {
    console.error('[drains/analytics] blob write failed:', err)
    return NextResponse.json({ error: 'storage write failed' }, { status: 500 })
  }

  return NextResponse.json({ received: events.length })
}
