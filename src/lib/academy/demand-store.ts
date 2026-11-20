// PromptQuorum Academy — Redis side of the topic-demand tracker (see demand.ts for the privacy contract).
// Keys: academy:demand:subjects[:<lang>] and :trained (sorted sets: normalised subject -> count),
// academy:demand:week:<ISO week> (sorted set, expires after 13 weeks), academy:demand:dims (hash of totals:
// theme / language / level / minutes / test mode per stage). Never throws: a Redis outage must not break a learner.

import { redis } from '@/lib/redis'
import {
  ACADEMY_DEMAND_MIN_PUBLIC,
  ACADEMY_DEMAND_TOP_N,
  DEMAND_OTHER_THEME,
  classifySubject,
  demandLanguage,
  isoWeekKey,
  normalizeSubject,
  type DemandInput,
  type DemandStage,
} from './demand'

const ALL = 'academy:demand:subjects'
const TRAINED = 'academy:demand:trained'
const DIMS = 'academy:demand:dims'
const weekKey = (w: string) => `academy:demand:week:${w}`
const langKey = (l: string) => `${ALL}:${l}`
/** Keeps the sets bounded: when a set grows past this, the rarest entries are dropped. */
const MAX_ENTRIES = 5000
const WEEK_TTL_SECONDS = 13 * 7 * 86_400

export async function recordDemand(stage: DemandStage, input: DemandInput): Promise<void> {
  try {
    const subject = normalizeSubject(input.subject)
    const lang = demandLanguage(input.language)
    const theme = subject ? classifySubject(subject) : DEMAND_OTHER_THEME
    const p = redis.pipeline()
    p.hincrby(DIMS, `${stage}:theme:${theme}`, 1)
    p.hincrby(DIMS, `${stage}:lang:${lang}`, 1)
    if (stage === 'programme') {
      if (input.level) p.hincrby(DIMS, `programme:level:${input.level}`, 1)
      if (input.minutes) p.hincrby(DIMS, `programme:minutes:${input.minutes}`, 1)
      if (input.testMode) p.hincrby(DIMS, `programme:mode:${input.testMode}`, 1)
    }
    if (subject) {
      if (stage === 'programme') {
        const week = weekKey(isoWeekKey(new Date()))
        p.zincrby(ALL, 1, subject)
        p.zincrby(langKey(lang), 1, subject)
        p.zincrby(week, 1, subject)
        p.expire(week, WEEK_TTL_SECONDS)
      } else if (stage === 'test') {
        p.zincrby(TRAINED, 1, subject)
      }
    }
    await p.exec()
    // Occasional trim; a failed trim is harmless.
    if (stage === 'programme' && subject && Math.random() < 0.02) {
      await Promise.all([ALL, TRAINED, langKey(lang)].map((k) => redis.zremrangebyrank(k, 0, -(MAX_ENTRIES + 1))))
    }
  } catch (err) {
    console.error('[academy demand] failed to record', stage, err instanceof Error ? err.message : err)
  }
}

export interface DemandEntry {
  subject: string
  count: number
}

function pairs(flat: unknown): DemandEntry[] {
  if (!Array.isArray(flat)) return []
  const out: DemandEntry[] = []
  for (let i = 0; i + 1 < flat.length; i += 2) out.push({ subject: String(flat[i]), count: Number(flat[i + 1]) })
  return out
}

async function top(key: string, limit: number, minCount: number): Promise<DemandEntry[]> {
  const flat = await redis.zrange(key, 0, limit * 3 - 1, { rev: true, withScores: true })
  return pairs(flat).filter((e) => e.count >= minCount).slice(0, limit)
}

/** Public: the most requested subjects in one site language, only those asked for at least MIN_PUBLIC times. */
export async function popularSubjects(lang: string, limit = ACADEMY_DEMAND_TOP_N): Promise<string[]> {
  try {
    return (await top(langKey(lang), limit, ACADEMY_DEMAND_MIN_PUBLIC)).map((e) => e.subject)
  } catch (err) {
    console.error('[academy demand] failed to read popular', err instanceof Error ? err.message : err)
    return []
  }
}

export interface DemandReport {
  since: string | null
  /** Subjects at or above the public threshold (what the owner may quote and publish). */
  topSubjects: DemandEntry[]
  topTrained: DemandEntry[]
  /** Subjects below the threshold: shown to the owner only as a count, never listed. */
  belowThreshold: number
  weeks: { week: string; top: DemandEntry[] }[]
  dims: Record<string, number>
}

export async function readDemandReport(limit = 25, weeksBack = 8): Promise<DemandReport> {
  const empty: DemandReport = { since: null, topSubjects: [], topTrained: [], belowThreshold: 0, weeks: [], dims: {} }
  try {
    const now = new Date()
    const weekIds = Array.from({ length: weeksBack }, (_, i) => isoWeekKey(new Date(now.getTime() - i * 7 * 86_400_000)))
    const [topSubjects, topTrained, size, dimsRaw, since, ...weekTop] = await Promise.all([
      top(ALL, limit, ACADEMY_DEMAND_MIN_PUBLIC),
      top(TRAINED, limit, ACADEMY_DEMAND_MIN_PUBLIC),
      redis.zcard(ALL),
      redis.hgetall<Record<string, number | string>>(DIMS),
      redis.get<string>('academy:count:since'),
      ...weekIds.map((w) => top(weekKey(w), 10, ACADEMY_DEMAND_MIN_PUBLIC)),
    ])
    const dims: Record<string, number> = {}
    for (const [k, v] of Object.entries(dimsRaw ?? {})) dims[k] = Number(v)
    return {
      since: typeof since === 'string' ? since : null,
      topSubjects,
      topTrained,
      belowThreshold: Math.max(0, Number(size) - topSubjects.length),
      weeks: weekIds.map((week, i) => ({ week, top: weekTop[i] })).filter((w) => w.top.length > 0),
      dims,
    }
  } catch (err) {
    console.error('[academy demand] failed to read report', err instanceof Error ? err.message : err)
    return empty
  }
}
