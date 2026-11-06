// POST /api/ask/solution — Ask Hans Power Mode report endpoint (streams NDJSON).
//
// The visitor answers a deterministic questionnaire in the browser; this route validates the answers,
// computes the grounding facts (src/lib/askhans/solutions/facts.ts) and lets a stronger model write one
// markdown report, using the same in-process PromptQuorum tools as the chat. Nothing is stored on the
// server; the answers exist only for the duration of the request. The rate limit key is a salted hash
// of the IP, never the IP itself.
//
// Stream events (one JSON object per line), a subset of /api/ask:
//   {t:'text', v}     report text delta
//   {t:'tool', v}     a tool is being used (name only)
//   {t:'done', tools}
//   {t:'error', code} code: disabled | unavailable | rate | limit | refused | failed | rephrase

import { NextRequest } from 'next/server'
import { createHash } from 'crypto'
import Anthropic from '@anthropic-ai/sdk'
import { Ratelimit } from '@upstash/ratelimit'
import { redis } from '@/lib/redis'
import { bumpPower } from '@/lib/askhans/totals'
import { ASK_HANS_SOLUTION_DEFAULT_MODEL, ASK_HANS_SOLUTION_LIMITS } from '@/lib/askhans/config'
import { parseAnswers } from '@/lib/askhans/solutions/processes'
import { SOLUTION_TOOL_ALLOWLIST, buildSolutionSystemPrompt, buildSolutionUserMessage } from '@/lib/askhans/solutions/prompt'
import { isProcessId } from '@/lib/askhans/solutions/types'
import { buildToolDefinitions, runTool } from '@/lib/askhans/tools'

export const runtime = 'nodejs'
// Reports are long (up to ~6000 output tokens plus tool calls). Needs a Vercel plan that allows 120 s functions.
export const maxDuration = 120

const limiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(ASK_HANS_SOLUTION_LIMITS.rateLimitRequests, ASK_HANS_SOLUTION_LIMITS.rateLimitWindow),
  prefix: 'rl:askhans:solution:ip',
})

type ErrorCode = 'disabled' | 'unavailable' | 'rate' | 'limit' | 'refused' | 'failed' | 'rephrase'

const ALLOWED = new Set<string>(SOLUTION_TOOL_ALLOWLIST)

function ndjson(stream: (send: (obj: unknown) => void) => Promise<void>): Response {
  const encoder = new TextEncoder()
  const body = new ReadableStream({
    async start(controller) {
      const send = (obj: unknown) => controller.enqueue(encoder.encode(`${JSON.stringify(obj)}\n`))
      try {
        await stream(send)
      } catch (err) {
        console.error('[askhans-solution] stream failed', err instanceof Error ? err.message : err)
        send({ t: 'error', code: 'failed' satisfies ErrorCode })
      } finally {
        controller.close()
      }
    },
  })
  return new Response(body, { headers: { 'Content-Type': 'application/x-ndjson; charset=utf-8', 'Cache-Control': 'no-store' } })
}

function errorResponse(code: ErrorCode, status: number): Response {
  return new Response(JSON.stringify({ t: 'error', code }) + '\n', {
    status,
    headers: { 'Content-Type': 'application/x-ndjson; charset=utf-8', 'Cache-Control': 'no-store' },
  })
}

function ipKey(req: NextRequest): string {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '127.0.0.1'
  return createHash('sha256').update(`${process.env.IP_HASH_SALT ?? ''}|${ip}`).digest('hex').slice(0, 32)
}

function classify(err: unknown): ErrorCode {
  if (err instanceof Anthropic.APIError) {
    const rejected = err.status === 400 || err.status === 413 || err.status === 422
    if (rejected && !/credit balance|billing|api[_ ]key|authentication/i.test(err.message)) return 'rephrase'
    return 'unavailable'
  }
  return 'failed'
}

export async function POST(req: NextRequest): Promise<Response> {
  // Same kill switch as the chat: closed even if an old page still shows the widget.
  if (process.env.ASK_HANS_ENABLED !== 'true') return errorResponse('disabled', 404)
  if (!process.env.ANTHROPIC_API_KEY) return errorResponse('unavailable', 503)

  let body: { visitId?: unknown; lang?: unknown; process?: unknown; answers?: unknown } | null
  try {
    body = (await req.json()) as typeof body
  } catch {
    body = null
  }
  if (!body || typeof body.visitId !== 'string' || !/^[a-zA-Z0-9-]{8,64}$/.test(body.visitId) || !isProcessId(body.process)) return errorResponse('failed', 400)
  const answers = parseAnswers(body.process, body.answers)
  if (!answers) return errorResponse('failed', 400)
  const lang = typeof body.lang === 'string' && /^[a-z]{2}$/.test(body.lang) ? body.lang : 'en'
  const processId = body.process

  // Rate limiting protects Hans's API credit: in production a Redis outage closes the endpoint (fail closed).
  try {
    const rl = await limiter.limit(ipKey(req))
    if (!rl.success) return errorResponse('rate', 429)
  } catch (err) {
    console.error('[askhans-solution] rate limiter failed', err instanceof Error ? err.message : err)
    if (process.env.NODE_ENV === 'production') return errorResponse('unavailable', 503)
  }

  // Per-visit cap (24 h). A Redis failure must not block the visitor.
  try {
    const key = `askhans:visitsol:${body.visitId}`
    const n = await redis.incr(key)
    if (n === 1) await redis.expire(key, 86_400)
    if (n > ASK_HANS_SOLUTION_LIMITS.maxPerVisit) return errorResponse('limit', 429)
  } catch (err) {
    console.error('[askhans-solution] visit counter failed', err instanceof Error ? err.message : err)
  }

  const model = process.env.ASK_HANS_SOLUTION_MODEL || ASK_HANS_SOLUTION_DEFAULT_MODEL
  const client = new Anthropic({ maxRetries: 1, timeout: ASK_HANS_SOLUTION_LIMITS.timeoutMs })
  const tools = buildToolDefinitions().filter((t) => ALLOWED.has(t.name))
  const system = buildSolutionSystemPrompt(processId, lang)
  const abort = AbortSignal.timeout(ASK_HANS_SOLUTION_LIMITS.timeoutMs)

  return ndjson(async (send) => {
    const messages: Anthropic.MessageParam[] = [{ role: 'user', content: buildSolutionUserMessage(processId, answers) }]
    const toolsUsed: string[] = []
    let toolCalls = 0
    let spoken = false
    let nudged = false

    try {
      for (let turn = 0; turn < ASK_HANS_SOLUTION_LIMITS.maxToolCalls + 3; turn++) {
        const budgetSpent = toolCalls >= ASK_HANS_SOLUTION_LIMITS.maxToolCalls
        const stream = client.messages.stream(
          {
            model,
            max_tokens: ASK_HANS_SOLUTION_LIMITS.maxOutputTokens,
            system: [{ type: 'text', text: system, cache_control: { type: 'ephemeral' } }],
            // The tools list must stay identical on every turn (the API binds earlier thinking blocks to it).
            tools,
            ...(budgetSpent || nudged ? { tool_choice: { type: 'none' as const } } : {}),
            messages,
            output_config: { effort: 'medium' },
          },
          { signal: abort },
        )
        let firstDelta = true
        let turnHadText = false
        stream.on('text', (delta) => {
          // Text before and after a tool call belongs to separate paragraphs.
          send({ t: 'text', v: firstDelta && spoken ? `\n\n${delta}` : delta })
          firstDelta = false
          spoken = true
          turnHadText = true
        })
        const message = await stream.finalMessage()

        if (message.stop_reason === 'refusal') {
          send({ t: 'error', code: 'refused' satisfies ErrorCode })
          return
        }
        const toolUses = message.content.filter((b): b is Anthropic.ToolUseBlock => b.type === 'tool_use')
        if (message.stop_reason !== 'tool_use' || toolUses.length === 0) {
          // The model sometimes ends its turn after the tool results without writing: ask once more, without tools.
          if (!turnHadText && !spoken && !nudged) {
            nudged = true
            messages.push({ role: 'assistant', content: message.content.length ? message.content : [{ type: 'text', text: '(no text)' }] })
            messages.push({ role: 'user', content: 'Write the complete report now, based on the facts and tool results above. Do not call any tool.' })
            continue
          }
          break
        }

        messages.push({ role: 'assistant', content: message.content })
        const results: Anthropic.ToolResultBlockParam[] = []
        for (const use of toolUses) {
          toolCalls++
          if (toolCalls > ASK_HANS_SOLUTION_LIMITS.maxToolCalls || !ALLOWED.has(use.name)) {
            results.push({ type: 'tool_result', tool_use_id: use.id, content: 'This tool is not available (or the tool budget is used up). Write the report with what you have.', is_error: true })
            continue
          }
          toolsUsed.push(use.name)
          send({ t: 'tool', v: use.name })
          const outcome = await runTool(use.name, use.input, { lang })
          results.push({ type: 'tool_result', tool_use_id: use.id, content: outcome.content, ...(outcome.isError ? { is_error: true } : {}) })
        }
        messages.push({ role: 'user', content: results })
      }
      if (!spoken) {
        send({ t: 'error', code: 'failed' satisfies ErrorCode })
        return
      }
      await bumpPower(processId)
      send({ t: 'done', tools: [...new Set(toolsUsed)] })
    } catch (err) {
      console.error('[askhans-solution] model call failed', err instanceof Error ? `${err.name}: ${err.message}` : err)
      send({ t: 'error', code: classify(err) })
    }
  })
}
