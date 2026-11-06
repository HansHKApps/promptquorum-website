'use client'

// Calls POST /api/ask and parses its NDJSON stream. Used only by AskHansRoot.

import type { AskErrorCode } from './types'

export type AskStreamEvent =
  | { t: 'text'; v: string }
  | { t: 'tool'; v: string }
  | { t: 'category'; v: string }
  | { t: 'titles'; v: Record<string, string> }
  | { t: 'followups'; v: string[] }
  | { t: 'done'; category: string; tools: string[]; topics?: { apps: string[]; dirCats: string[] } }
  | { t: 'error'; code: AskErrorCode }

const CLIENT_TIMEOUT_MS = 70_000
/** Power Mode reports are long; the route allows 120 s. */
const SOLUTION_CLIENT_TIMEOUT_MS = 125_000

export async function streamAnswer(
  body: { visitId: string; lang: string; messages: { role: 'user' | 'assistant'; content: string }[] },
  onEvent: (e: AskStreamEvent) => void,
  options: { endpoint?: string; timeoutMs?: number; signal?: AbortSignal } = {},
): Promise<void> {
  return streamNdjson(body, onEvent, options)
}

/** Power Mode: POST /api/ask/solution. Same event stream (text, tool, done, error). */
export async function streamSolution(
  body: { visitId: string; lang: string; process: string; answers: unknown },
  onEvent: (e: AskStreamEvent) => void,
  signal?: AbortSignal,
): Promise<void> {
  return streamNdjson(body, onEvent, { endpoint: '/api/ask/solution', timeoutMs: SOLUTION_CLIENT_TIMEOUT_MS, signal })
}

async function streamNdjson(
  body: unknown,
  onEvent: (e: AskStreamEvent) => void,
  { endpoint = '/api/ask', timeoutMs = CLIENT_TIMEOUT_MS, signal }: { endpoint?: string; timeoutMs?: number; signal?: AbortSignal },
): Promise<void> {
  let res: Response
  try {
    res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: signal ? AbortSignal.any([signal, AbortSignal.timeout(timeoutMs)]) : AbortSignal.timeout(timeoutMs),
    })
  } catch {
    onEvent({ t: 'error', code: 'unavailable' })
    return
  }

  // Error responses are a single NDJSON line with a status code.
  if (!res.ok || !res.body) {
    let code: AskErrorCode = res.status === 429 ? 'rate' : res.status === 404 ? 'disabled' : 'unavailable'
    try {
      const parsed = JSON.parse((await res.text()).trim().split('\n')[0]) as { code?: AskErrorCode }
      if (parsed.code) code = parsed.code
    } catch {
      // keep the status-derived code
    }
    onEvent({ t: 'error', code })
    return
  }

  const reader = res.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''
  let finished = false
  try {
    for (;;) {
      const { value, done } = await reader.read()
      if (done) break
      buffer += decoder.decode(value, { stream: true })
      let nl: number
      while ((nl = buffer.indexOf('\n')) >= 0) {
        const line = buffer.slice(0, nl).trim()
        buffer = buffer.slice(nl + 1)
        if (!line) continue
        try {
          const ev = JSON.parse(line) as AskStreamEvent
          if (ev.t === 'done' || ev.t === 'error') finished = true
          onEvent(ev)
        } catch {
          // ignore a malformed line
        }
      }
    }
  } catch {
    if (!finished) onEvent({ t: 'error', code: 'unavailable' })
    return
  }
  if (!finished) onEvent({ t: 'error', code: 'unavailable' })
}

/** Fire-and-forget anonymous usage event; the caller decides whether consent allows it. */
export function logEvent(payload: Record<string, unknown>): void {
  try {
    void fetch('/api/ask/event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => undefined)
  } catch {
    // logging must never disturb the chat
  }
}
