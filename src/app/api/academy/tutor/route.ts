// POST /api/academy/tutor — streaming tutor answer (SPEC 8). Plain text stream. Stateless; the lesson context comes
// with every call. Nothing the learner writes is logged or stored: only token counts are logged.

import type { NextRequest } from 'next/server'
import { ACADEMY_DEFAULT_MODEL } from '@/lib/academy/generate'
import { ACADEMY_TIMEOUT_MS, academyClient, academyGuard } from '@/lib/academy/route'
import { findMaterialForQuestion, readGrounding } from '@/lib/academy/lesson'
import { TUTOR_MAX_OUTPUT_TOKENS, TUTOR_SOURCES_MARK, TUTOR_SYSTEM, tutorRequestSchema, tutorUserMessage, type TutorSource } from '@/lib/academy/tutor'

export const runtime = 'nodejs'
export const maxDuration = 60

export async function POST(req: NextRequest): Promise<Response> {
  const guard = await academyGuard(req, { name: 'tutor', schema: tutorRequestSchema, requests: 60, window: '1 h' })
  if ('response' in guard) return guard.response
  const body = guard.body
  const client = academyClient()
  const encoder = new TextEncoder()
  // Free questions about the lesson are answered with PromptQuorum guides found for the question (named, with links under
  // the answer) and, when ACADEMY_TUTOR_WEB_SEARCH=true, a few web searches. The magic wand (scope "section") never leaves its text.
  const open = (body.trigger === 'ask' || body.trigger === 'chip') && body.scope !== 'section'
  const material = open && body.message ? findMaterialForQuestion(body.message, body.subject, body.language).slice(0, 3) : []
  const grounding = material.length ? readGrounding(material, body.language, 3) : ''
  const web = open && process.env.ACADEMY_TUTOR_WEB_SEARCH === 'true'
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const s = client.messages.stream(
          {
            model: process.env.ACADEMY_TUTOR_MODEL || process.env.ACADEMY_MODEL || ACADEMY_DEFAULT_MODEL,
            max_tokens: TUTOR_MAX_OUTPUT_TOKENS,
            system: [
              { type: 'text', text: TUTOR_SYSTEM, cache_control: { type: 'ephemeral' } },
              ...(web ? [{ type: 'text' as const, text: 'A web search tool is available for questions about specific models, apps or hardware, or anything that changes over time. Use it at most twice, prefer official sources, and say in one sentence that the information comes from the web and may change.' }] : []),
            ],
            messages: [{ role: 'user', content: tutorUserMessage(body, grounding) }],
            output_config: { effort: 'low' },
            ...(web ? { tools: [{ type: 'web_search_20250305', name: 'web_search', max_uses: 2 }] as never } : {}),
          },
          { signal: AbortSignal.timeout(ACADEMY_TIMEOUT_MS) },
        )
        s.on('text', (t) => controller.enqueue(encoder.encode(t)))
        const final = await s.finalMessage()
        console.log('[academy] tutor', { trigger: body.trigger, in: final.usage?.input_tokens, out: final.usage?.output_tokens, guides: material.length, web })
        // Sources go at the very end of the stream: the guides that were offered for the question, then pages the web search read.
        const sources: TutorSource[] = material.map((m) => ({ title: m.title, url: m.url }))
        if (web) {
          for (const block of final.content as unknown as { type: string; content?: unknown }[]) {
            if (block.type !== 'web_search_tool_result' || !Array.isArray(block.content)) continue
            for (const r of block.content as { url?: string; title?: string }[]) if (r.url && r.title && /^https:\/\//.test(r.url) && !sources.some((x) => x.url === r.url)) sources.push({ title: r.title.slice(0, 160), url: r.url, web: true })
          }
        }
        if (sources.length) controller.enqueue(encoder.encode(`${TUTOR_SOURCES_MARK}${JSON.stringify(sources.slice(0, 6))}`))
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
