'use client'

import { useCallback, useState } from 'react'

export type CompanionSource = { title: string; url: string }
type CompanionResult =
  | { ok: true; answer: string; sources: CompanionSource[] }
  | { ok: false }

// Client-side timeout as a second safety net in case the proxy route itself
// hangs beyond its own AbortSignal — slightly above the route's 60s so the
// route's own classification (logged server-side) wins in the normal case.
const CLIENT_TIMEOUT_MS = 65_000

export function useCompanionAnswer() {
  const [isLoading, setIsLoading] = useState(false)

  const ask = useCallback(async (question: string): Promise<CompanionResult> => {
    setIsLoading(true)
    try {
      const res = await fetch('/api/companion-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
        signal: AbortSignal.timeout(CLIENT_TIMEOUT_MS),
      })
      if (!res.ok) return { ok: false }
      const data = await res.json()
      if (!data?.ok || typeof data.answer !== 'string') return { ok: false }
      return { ok: true, answer: data.answer, sources: Array.isArray(data.sources) ? data.sources : [] }
    } catch {
      return { ok: false }
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { ask, isLoading }
}
