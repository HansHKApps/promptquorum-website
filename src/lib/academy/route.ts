// PromptQuorum Academy — shared plumbing for the /api/academy/* route handlers, same rules as /api/ask:
// kill switch, per-IP rate limit keyed by a salted hash of the IP (the IP itself is never stored or logged),
// fail closed in production when Redis is down, typed error codes, no learner text in logs.

import Anthropic from '@anthropic-ai/sdk'
import { createHash } from 'crypto'
import { Ratelimit } from '@upstash/ratelimit'
import type { NextRequest } from 'next/server'
import type { z } from 'zod'
import { redis } from '@/lib/redis'
import { academyEnabled } from './config'
import { AcademyGenerationError } from './generate'
import type { AcademyErrorCode } from './route-errors'

export type { AcademyErrorCode }


export const ACADEMY_TIMEOUT_MS = 50_000

export function academyError(code: AcademyErrorCode, status: number): Response {
  return Response.json({ error: code }, { status, headers: { 'Cache-Control': 'no-store' } })
}

export function academyJson(body: unknown): Response {
  return Response.json(body, { headers: { 'Cache-Control': 'no-store' } })
}

const limiters = new Map<string, Ratelimit>()
function limiter(name: string, requests: number, window: `${number} ${'m' | 'h'}`): Ratelimit {
  let l = limiters.get(name)
  if (!l) {
    l = new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(requests, window), prefix: `rl:academy:${name}` })
    limiters.set(name, l)
  }
  return l
}

function ipKey(req: NextRequest): string {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '127.0.0.1'
  return createHash('sha256').update(`${process.env.IP_HASH_SALT ?? ''}|${ip}`).digest('hex').slice(0, 32)
}

/**
 * Common entry checks. Returns the parsed body, or a Response to send back as-is.
 * Rate limits protect the API credit (SPEC 11); a Redis outage closes the endpoint in production.
 */
export async function academyGuard<S extends z.ZodType>(
  req: NextRequest,
  opts: { name: string; schema: S; requests: number; window: `${number} ${'m' | 'h'}` },
): Promise<{ body: z.infer<S> } | { response: Response }> {
  if (!academyEnabled()) return { response: academyError('disabled', 404) }
  if (!process.env.ANTHROPIC_API_KEY) return { response: academyError('unavailable', 503) }

  let raw: unknown
  try {
    raw = await req.json()
  } catch {
    return { response: academyError('invalid_input', 400) }
  }
  const parsed = opts.schema.safeParse(raw)
  if (!parsed.success) return { response: academyError('invalid_input', 400) }

  try {
    const rl = await limiter(opts.name, opts.requests, opts.window).limit(ipKey(req))
    if (!rl.success) return { response: academyError('rate', 429) }
  } catch (err) {
    console.error('[academy] rate limiter failed', err instanceof Error ? err.message : err)
    if (process.env.NODE_ENV === 'production') return { response: academyError('unavailable', 503) }
  }
  return { body: parsed.data }
}

export function academyClient(): Anthropic {
  return new Anthropic({ maxRetries: 1, timeout: ACADEMY_TIMEOUT_MS })
}

/** Maps a thrown error to a response; logs the reason without learner text. */
export function academyFailure(label: string, err: unknown): Response {
  if (err instanceof AcademyGenerationError) {
    console.error(`[academy] ${label} generation failed`, err.code, err.message.slice(0, 300))
    return err.code === 'refused' ? academyError('refused', 422) : academyError('generation', 502)
  }
  if (err instanceof Anthropic.APIError) {
    console.error(`[academy] ${label} API error`, err.status, err.name)
    return academyError('unavailable', 503)
  }
  console.error(`[academy] ${label} failed`, err instanceof Error ? `${err.name}: ${err.message.slice(0, 200)}` : err)
  return academyError('failed', 500)
}
