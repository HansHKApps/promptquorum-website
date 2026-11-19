// PromptQuorum Academy — aggregate, PII-free usage counters (same contract as src/lib/mcp/usage.ts): only totals,
// no IP, no subject, no identifier. Shown on the /academy page and as the homepage "By the numbers" tile.

import { unstable_cache } from 'next/cache'
import { redis } from '@/lib/redis'

export const ACADEMY_COUNTERS = ['programme', 'lesson', 'test', 'certificate'] as const
export type AcademyCounter = (typeof ACADEMY_COUNTERS)[number]

const key = (c: AcademyCounter) => `academy:count:${c}`
const SINCE_KEY = 'academy:count:since'
/** Programmes were already counted under this key before the other counters existed. */
const LEGACY_PROGRAMMES_KEY = 'academy:programmes:total'

/** Never throws: a Redis outage must not break a learner's request. */
export async function recordAcademy(counter: AcademyCounter): Promise<void> {
  try {
    await Promise.all([redis.incr(key(counter)), redis.set(SINCE_KEY, new Date().toISOString().slice(0, 10), { nx: true })])
  } catch (err) {
    console.error('[academy usage] failed to record', counter, err instanceof Error ? err.message : err)
  }
}

export const recordAcademyProgramme = () => recordAcademy('programme')

export interface AcademyTotals {
  programmes: number
  lessons: number
  tests: number
  certificates: number
  /** ISO date of the first counted event, or null */
  since: string | null
}

async function readTotals(): Promise<AcademyTotals> {
  const zero: AcademyTotals = { programmes: 0, lessons: 0, tests: 0, certificates: 0, since: null }
  try {
    const [programmes, legacy, lessons, tests, certificates, since] = await redis.mget<(number | string | null)[]>(
      key('programme'),
      LEGACY_PROGRAMMES_KEY,
      key('lesson'),
      key('test'),
      key('certificate'),
      SINCE_KEY,
    )
    return {
      programmes: Number(programmes ?? 0) + Number(legacy ?? 0),
      lessons: Number(lessons ?? 0),
      tests: Number(tests ?? 0),
      certificates: Number(certificates ?? 0),
      since: typeof since === 'string' && /^\d{4}-\d{2}-\d{2}/.test(since) ? since : null,
    }
  } catch (err) {
    console.error('[academy usage] failed to read totals', err instanceof Error ? err.message : err)
    return zero
  }
}

/** Cached like the MCP counter, so statically rendered pages stay static (refreshes once a day). */
export const getAcademyTotals = unstable_cache(readTotals, ['academy-totals'], { revalidate: 86400, tags: ['academy-usage'] })
export const getAcademyProgrammesTotal = async () => (await getAcademyTotals()).programmes
