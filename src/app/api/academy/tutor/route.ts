// POST /api/academy/tutor — streaming tutor answer (SPEC 8). Plain text stream. Stateless; the lesson context comes
// with every call. Nothing the learner writes is logged or stored: only token counts are logged.

import type { NextRequest } from 'next/server'
import { ACADEMY_DEFAULT_MODEL } from '@/lib/academy/generate'
import { ACADEMY_TIMEOUT_MS, academyClient, academyGuard } from '@/lib/academy/route'
import { TUTOR_MAX_OUTPUT_TOKENS, TUTOR_SYSTEM, tutorRequestSchema, tutorUserMessage } from '@/lib/academy/tutor'

export const runtime = 'nodejs'
export const maxDuration = 60

export async function POST(req: NextRequest): Promise<Response> {
  const guard = await academyGuard(req, { name: 'tutor', schema: tutorRequestSchema, requests: 60, window: '1 h' })
  if ('response' in guard) return guard.response
  const body = guard.body
  const client = academyClient()
  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const s = client.messages.stream(
          {
            model: process.env.ACADEMY_TUTOR_MODEL || process.env.ACADEMY_MODEL || ACADEMY_DEFAULT_MODEL,
            max_tokens: TUTOR_MAX_OUTPUT_TOKENS,
            system: [{ type: 'text', text: TUTOR_SYSTEM, cache_control: { type: 'ephemeral' } }],
            messages: [{ role: 'user', content: tutorUserMessage(body) }],
            output_config: { effort: 'low' },
          },
          { signal: AbortSignal.timeout(ACADEMY_TIMEOUT_MS) },
        )
        s.on('text', (t) => controller.enqueue(encoder.encode(t)))
        const final = await s.finalMessage()
        console.log('[academy] tutor', { trigger: body.trigger, in: final.usage?.input_tokens, out: final.usage?.output_tokens })
      } catch (err) {
        console.error('[academy] tutor failed', err instanceof Error ? err.name : 'error')
        controller.enqueue(encoder.encode('\u0000'))
      } finally {
        controller.close()
      }
    },
  })
  return new Response(stream, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store', 'X-Accel-Buffering': 'no' } })
}
