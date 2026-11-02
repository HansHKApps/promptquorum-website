// POST /api/ask — Ask Hans chat endpoint (streams NDJSON).
//
// Claude answers from PromptQuorum's own MCP tool functions (in-process, see
// src/lib/askhans/tools.ts). Nothing from the conversation is stored on the server.
// Rate limiting uses a salted hash of the IP as a short-lived Redis key; the IP itself is
// never written or logged.
//
// Stream events (one JSON object per line):
//   {t:'text', v}            answer text delta
//   {t:'tool', v}            a tool is being used (name only)
//   {t:'category', v}        category key for the marketing panel
//   {t:'done', category, tools, topics}   topics = whitelisted directory apps/categories looked up
//   {t:'error', code}        code: disabled | unavailable | rate | limit | refused | failed

import { NextRequest } from 'next/server'
import { createHash } from 'crypto'
import Anthropic from '@anthropic-ai/sdk'
import { Ratelimit } from '@upstash/ratelimit'
import { redis } from '@/lib/redis'
import { ASK_HANS_DEFAULT_MODEL, ASK_HANS_LIMITS } from '@/lib/askhans/config'
import { buildSystemPrompt } from '@/lib/askhans/system-prompt'
import { generateFollowups } from '@/lib/askhans/followups'
import { missingSourcesMarkdown } from '@/lib/askhans/sources'
import { bumpTotals } from '@/lib/askhans/totals'
import { mergeTopics, type AnswerTopics } from '@/lib/askhans/topics'
import { buildToolDefinitions, runTool, SET_CATEGORY_TOOL } from '@/lib/askhans/tools'

export const runtime = 'nodejs'
export const maxDuration = 60

const limiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(ASK_HANS_LIMITS.rateLimitRequests, ASK_HANS_LIMITS.rateLimitWindow),
  prefix: 'rl:askhans:ip',
})

const MAX_HISTORY_MESSAGES = ASK_HANS_LIMITS.maxMessagesPerVisit * 2
const MAX_ASSISTANT_CHARS = 8000

type ErrorCode = 'disabled' | 'unavailable' | 'rate' | 'limit' | 'refused' | 'failed' | 'rephrase'

function ndjson(stream: (send: (obj: unknown) => void) => Promise<void>): Response {
  const encoder = new TextEncoder()
  const body = new ReadableStream({
    async start(controller) {
      const send = (obj: unknown) => controller.enqueue(encoder.encode(`${JSON.stringify(obj)}\n`))
      try {
        await stream(send)
      } catch (err) {
        console.error('[askhans] stream failed', err instanceof Error ? err.message : err)
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

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

function parseBody(raw: unknown): { visitId: string; lang: string; messages: ChatMessage[] } | null {
  const b = raw as { visitId?: unknown; lang?: unknown; messages?: unknown } | null
  if (!b || typeof b.visitId !== 'string' || !/^[a-zA-Z0-9-]{8,64}$/.test(b.visitId)) return null
  if (!Array.isArray(b.messages) || b.messages.length === 0 || b.messages.length > MAX_HISTORY_MESSAGES) return null
  const messages: ChatMessage[] = []
  for (const m of b.messages) {
    const mm = m as { role?: unknown; content?: unknown }
    if ((mm.role !== 'user' && mm.role !== 'assistant') || typeof mm.content !== 'string' || !mm.content.trim()) return null
    const max = mm.role === 'user' ? ASK_HANS_LIMITS.maxMessageChars : MAX_ASSISTANT_CHARS
    if (mm.content.length > max) return null
    messages.push({ role: mm.role, content: mm.content })
  }
  if (messages[0].role !== 'user' || messages[messages.length - 1].role !== 'user') return null
  for (let i = 1; i < messages.length; i++) if (messages[i].role === messages[i - 1].role) return null
  const lang = typeof b.lang === 'string' && /^[a-z]{2}$/.test(b.lang) ? b.lang : 'de'
  return { visitId: b.visitId, lang, messages }
}

function classify(err: unknown): ErrorCode {
  if (err instanceof Anthropic.APIError) {
    // Out of credit comes back as a 400 "credit balance is too low"; overloaded/rate as 429/529: those are outages.
    // Any other 400-class rejection means the service is up but refused this particular request → ask to rephrase.
    const rejected = err.status === 400 || err.status === 413 || err.status === 422
    if (rejected && !/credit balance|billing|api[_ ]key|authentication/i.test(err.message)) return 'rephrase'
    return 'unavailable'
  }
  return 'failed'
}

export async function POST(req: NextRequest): Promise<Response> {
  // Runtime kill switch: the API is closed even if an old page still shows the widget.
  if (process.env.ASK_HANS_ENABLED !== 'true') return errorResponse('disabled', 404)
  if (!process.env.ANTHROPIC_API_KEY) return errorResponse('unavailable', 503)

  let parsed: ReturnType<typeof parseBody>
  try {
    parsed = parseBody(await req.json())
  } catch {
    parsed = null
  }
  if (!parsed) return errorResponse('failed', 400)

  // Rate limiting protects Hans's API credit: in production a Redis outage closes the endpoint
  // (fail closed); only local development without Redis lets requests through.
  try {
    const rl = await limiter.limit(ipKey(req))
    if (!rl.success) return errorResponse('rate', 429)
  } catch (err) {
    console.error('[askhans] rate limiter failed', err instanceof Error ? err.message : err)
    if (process.env.NODE_ENV === 'production') return errorResponse('unavailable', 503)
  }

  await bumpTotals('requests')

  // Per-visit cap: count visitor messages per anonymous visit ID (24 h). Redis failure must not block the visitor.
  try {
    const key = `askhans:visitmsgs:${parsed.visitId}`
    const n = await redis.incr(key)
    if (n === 1) await redis.expire(key, 86_400)
    if (n > ASK_HANS_LIMITS.maxMessagesPerVisit) return errorResponse('limit', 429)
  } catch (err) {
    console.error('[askhans] visit counter failed', err instanceof Error ? err.message : err)
  }

  const { lang, messages: history } = parsed
  const model = process.env.ASK_HANS_MODEL || ASK_HANS_DEFAULT_MODEL
  const client = new Anthropic({ maxRetries: 1, timeout: ASK_HANS_LIMITS.answerTimeoutMs })
  const tools = buildToolDefinitions()
  const system = buildSystemPrompt(lang)
  const abort = AbortSignal.timeout(ASK_HANS_LIMITS.answerTimeoutMs)
  const startedAt = Date.now()

  return ndjson(async (send) => {
    const messages: Anthropic.MessageParam[] = history.map((m) => ({ role: m.role, content: m.content }))
    const toolsUsed: string[] = []
    const topics: AnswerTopics = { apps: [], dirCats: [] }
    let category = 'default'
    let toolCalls = 0
    let emittedText = false
    let spoken = ''
    const pageTitles: Record<string, string> = {}
    let onlyCategoryLastTurn = false
    let nudged = false

    try {
      for (let turn = 0; turn < ASK_HANS_LIMITS.maxToolCallsPerAnswer + 2; turn++) {
        // Once the tool budget is spent, withhold tools so the model has to answer in text.
        const budgetSpent = toolCalls >= ASK_HANS_LIMITS.maxToolCallsPerAnswer
        const stream = client.messages.stream(
          {
            model,
            max_tokens: ASK_HANS_LIMITS.maxOutputTokens,
            system: [{ type: 'text', text: system, cache_control: { type: 'ephemeral' } }],
            // The tools list must stay identical on every turn: the API binds earlier thinking blocks to it and
            // rejects the request (400) if it changes. Once the budget is spent, forbid tool use via tool_choice.
            tools,
            ...(budgetSpent || nudged ? { tool_choice: { type: 'none' as const } } : {}),
            messages,
            output_config: { effort: 'low' },
          },
          { signal: abort },
        )
        // Text that follows an earlier turn's text is held back: models sometimes call set_category after the
        // answer and then write the whole answer a second time. Repeats are dropped, new text is appended.
        const holdBack = emittedText && onlyCategoryLastTurn
        let held = ''
        let firstDelta = true
        let turnHadText = false
        stream.on('text', (delta) => {
          if (holdBack) {
            held += delta
            return
          }
          // Text before and after a real tool call belongs to separate paragraphs.
          const v = firstDelta && emittedText ? `\n\n${delta}` : delta
          send({ t: 'text', v })
          spoken += v
          firstDelta = false
          emittedText = true
          turnHadText = true
        })
        const message = await stream.finalMessage()
        if (holdBack && held.trim()) {
          turnHadText = true
          const norm = (t: string) => t.replace(/\s+/g, ' ').trim()
          const probe = norm(held).slice(0, 60)
          if (!norm(spoken).includes(probe)) {
            send({ t: 'text', v: `\n\n${held}` })
            spoken += `\n\n${held}`
          }
        }

        console.log('[askhans] turn', JSON.stringify({ turn, stop: message.stop_reason, outTokens: message.usage?.output_tokens, text: turnHadText, toolCalls }))

        if (message.stop_reason === 'refusal') {
          send({ t: 'error', code: 'refused' satisfies ErrorCode })
          return
        }
        const toolUses = message.content.filter((b): b is Anthropic.ToolUseBlock => b.type === 'tool_use')
        // Only a clean tool_use stop runs tools (never calls cut off by max_tokens).
        if (message.stop_reason !== 'tool_use' || toolUses.length === 0) {
          // After reading tool results the model sometimes ends its turn without any text (or runs out of tokens
          // while thinking). Ask once more, without tools, for the actual answer.
          if (!turnHadText && toolCalls > 0 && !nudged) {
            nudged = true
            messages.push({ role: 'user', content: 'Write the answer for the visitor now, based on the tool results above. Do not call any tool.' })
            continue
          }
          break
        }

        // Keep every block (incl. thinking) unchanged in the history.
        messages.push({ role: 'assistant', content: message.content })
        onlyCategoryLastTurn = toolUses.every((u) => u.name === SET_CATEGORY_TOOL)
        const results: Anthropic.ToolResultBlockParam[] = []
        for (const use of toolUses) {
          toolCalls += use.name === SET_CATEGORY_TOOL ? 0 : 1
          if (toolCalls > ASK_HANS_LIMITS.maxToolCallsPerAnswer) {
            results.push({ type: 'tool_result', tool_use_id: use.id, content: 'Tool budget for this answer is used up. Answer with what you have.', is_error: true })
            continue
          }
          if (use.name !== SET_CATEGORY_TOOL) {
            toolsUsed.push(use.name)
            send({ t: 'tool', v: use.name })
          }
          const outcome = await runTool(use.name, use.input, { lang })
          if (outcome.pages) Object.assign(pageTitles, outcome.pages)
          if (outcome.topics) mergeTopics(topics, outcome.topics)
          if (outcome.category) {
            category = outcome.category
            send({ t: 'category', v: category })
          }
          results.push({ type: 'tool_result', tool_use_id: use.id, content: outcome.content, ...(outcome.isError ? { is_error: true } : {}) })
        }
        messages.push({ role: 'user', content: results })
      }
      // Safety net: an answer built from PromptQuorum pages must show them, even if the model forgot to cite.
      const lastQuestion = history[history.length - 1]?.content ?? ''
      const sources = missingSourcesMarkdown(spoken, lastQuestion, pageTitles, lang)
      if (sources) {
        send({ t: 'text', v: sources })
        spoken += sources
      }
      if (Object.keys(pageTitles).length) send({ t: 'titles', v: Object.fromEntries(Object.entries(pageTitles).slice(0, 60)) })
      // Suggested next questions: best effort, skipped when the answer already took long (function time limit).
      if (spoken.trim() && Date.now() - startedAt < ASK_HANS_LIMITS.followupDeadlineMs) {
        try {
          const followups = await generateFollowups(client, model, history, spoken, AbortSignal.timeout(ASK_HANS_LIMITS.followupTimeoutMs))
          if (followups.length) send({ t: 'followups', v: followups })
        } catch (err) {
          console.error('[askhans] followups failed', err instanceof Error ? `${err.name}: ${err.message}` : err)
        }
      }
      if (spoken.trim()) await bumpTotals('answers')
      send({ t: 'done', category, tools: [...new Set(toolsUsed)], topics })
    } catch (err) {
      console.error('[askhans] model call failed', err instanceof Error ? `${err.name}: ${err.message}` : err)
      send({ t: 'error', code: classify(err) })
    }
  })
}
