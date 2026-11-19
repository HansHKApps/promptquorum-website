// PromptQuorum Academy — one aggregate, PII-free usage counter: how many learning programmes were created.
// No IP, no subject, no identifier is recorded, only a total (same contract as src/lib/mcp/usage.ts).
// Shown on the homepage "By the numbers" block.

import { unstable_cache } from 'next/cache'
import { redis } from '@/lib/redis'

const KEY = 'academy:programmes:total'

/** Never throws: a Redis outage must not break a programme response. */
export async function recordAcademyProgramme(): Promise<void> {
  try {
    await redis.incr(KEY)
  } catch (err) {
    console.error('[academy usage] failed to record programme', err instanceof Error ? err.message : err)
  }
}

async function readTotal(): Promise<number> {
  try {
    return Number((await redis.get<number>(KEY)) ?? 0)
  } catch (err) {
    console.error('[academy usage] failed to read total', err instanceof Error ? err.message : err)
    return 0
  }
}

/** Cached like the MCP counter, so the statically rendered homepage stays static (refreshes once a day). */
export const getAcademyProgrammesTotal = unstable_cache(readTotal, ['academy-programmes-total'], { revalidate: 86400, tags: ['academy-usage'] })
