// What the MCP server was asked about, as anonymous per-day counters (same footing as the per-tool counters in
// usage.ts): which directory apps, which directory categories, which languages. Written from the tool ARGUMENTS
// but only after each value is checked against a closed list (real directory slug, real category key, one of the
// 9 site languages), so free text can never be stored. No IP, no user agent, no profile code, no query text.
//
//   mcp:day:<YYYY-MM-DD>   hash  app:<slug> | dircat:<key> | lang:<xx>   (400-day TTL)
//   mcp:dims:since         first day any of these was counted

import { redis } from '@/lib/redis'
import { localAiApps } from '@/lib/power-local-llm/apps-barrel'
import { CATEGORY_SUB_LABEL } from '@/lib/power-local-llm/apps/categories'

const DAY_TTL_S = 400 * 86_400
const APP_SLUGS = new Set<string>(localAiApps.map((a) => a.slug))
const CATEGORY_KEYS = new Set<string>(Object.keys(CATEGORY_SUB_LABEL))
const LANGS = new Set(['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'])

function strings(v: unknown): string[] {
  if (typeof v === 'string') return [v]
  if (Array.isArray(v)) return v.filter((x): x is string => typeof x === 'string')
  return []
}

/** Pure: which counter fields a tool call adds, from its raw arguments. Exported for the unit test. */
export function dimensionFields(args: unknown): string[] {
  if (!args || typeof args !== 'object') return []
  const a = args as Record<string, unknown>
  const fields = new Set<string>()
  for (const v of [...strings(a.slug), ...strings(a.slugs), ...strings(a.app)]) {
    const slug = v.trim().toLowerCase()
    if (APP_SLUGS.has(slug)) fields.add(`app:${slug}`)
  }
  for (const v of strings(a.category)) {
    const key = v.trim().toLowerCase()
    if (CATEGORY_KEYS.has(key)) fields.add(`dircat:${key}`)
  }
  for (const v of strings(a.lang)) {
    const lang = v.trim().toLowerCase()
    if (LANGS.has(lang)) fields.add(`lang:${lang}`)
  }
  return [...fields]
}

/** Same contract as recordMcpCall: never throws, a Redis outage must not break a tool response. */
export async function recordMcpDimensions(args: unknown): Promise<void> {
  const fields = dimensionFields(args)
  if (fields.length === 0) return
  try {
    const day = new Date().toISOString().slice(0, 10)
    const key = `mcp:day:${day}`
    const pipe = redis.pipeline()
    for (const f of fields) pipe.hincrby(key, f, 1)
    pipe.expire(key, DAY_TTL_S)
    pipe.setnx('mcp:dims:since', day)
    await pipe.exec()
  } catch (err) {
    console.error('[mcp usage] failed to record dimensions', err instanceof Error ? err.message : err)
  }
}
