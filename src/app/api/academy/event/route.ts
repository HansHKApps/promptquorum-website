// POST /api/academy/event — anonymous counters for browser-side events: "certificate downloaded", "feedback mail
// opened", star ratings (lesson / programme, 1-5), tutor thumbs and messages, "report a problem" mail opened.
// The PDF is created in the browser, so the server learns about it only through this call. Nothing else is read or
// stored: no IP, no text, no programme, no identifier. Every counter is a plain total (see src/lib/academy/usage.ts).

import type { NextRequest } from 'next/server'
import { z } from 'zod'
import { academyError, academyGuard, academyJson } from '@/lib/academy/route'
import { recordAcademy, recordAcademyFeedback, type FeedbackField } from '@/lib/academy/usage'

export const runtime = 'nodejs'

const eventSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('certificate') }),
  z.object({ type: z.literal('feedback_mail') }),
  z.object({ type: z.literal('rating'), kind: z.enum(['lesson', 'programme']), stars: z.number().int().min(1).max(5) }),
  z.object({ type: z.literal('tutor_thumb'), up: z.boolean() }),
  z.object({ type: z.literal('tutor_message') }),
  z.object({ type: z.literal('rating_mail') }),
  z.object({ type: z.literal('report_mail') }),
  z.object({ type: z.literal('launcher_click') }),
])

export async function POST(req: NextRequest): Promise<Response> {
  const guard = await academyGuard(req, { name: 'event', schema: eventSchema, requests: 120, window: '1 h', metered: false })
  if ('response' in guard) return guard.response
  const e = guard.body
  try {
    if (e.type === 'certificate' || e.type === 'feedback_mail') await recordAcademy(e.type)
    else {
      const field: FeedbackField =
        e.type === 'rating' ? (`rating:${e.kind}:${e.stars}` as FeedbackField) : e.type === 'tutor_thumb' ? (e.up ? 'tutor:up' : 'tutor:down') : e.type === 'tutor_message' ? 'tutor:message' : e.type === 'rating_mail' ? 'mail:rating' : e.type === 'launcher_click' ? 'launcher:click' : 'mail:report'
      await recordAcademyFeedback(field)
    }
    return academyJson({ ok: true })
  } catch {
    return academyError('failed', 500)
  }
}
