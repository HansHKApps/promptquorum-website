// POST /api/academy/event — anonymous counter for browser-side events (currently only "certificate downloaded").
// The PDF is created in the browser, so the server learns about it only through this call. Body: { type }, nothing
// else is read or stored; the counter is a plain total.

import type { NextRequest } from 'next/server'
import { z } from 'zod'
import { academyError, academyGuard, academyJson } from '@/lib/academy/route'
import { recordAcademy } from '@/lib/academy/usage'

export const runtime = 'nodejs'

const eventSchema = z.object({ type: z.literal('certificate') })

export async function POST(req: NextRequest): Promise<Response> {
  const guard = await academyGuard(req, { name: 'event', schema: eventSchema, requests: 20, window: '1 h' })
  if ('response' in guard) return guard.response
  try {
    await recordAcademy(guard.body.type)
    return academyJson({ ok: true })
  } catch {
    return academyError('failed', 500)
  }
}
