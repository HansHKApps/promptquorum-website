// Ask Hans — "what was researched": the apps and directory categories an answer looked up.
// Taken ONLY from the structured arguments of the tools Claude called, and only values that exist in our
// own directory survive (free text such as a search query or a cloud-app name is dropped). So a visitor can
// never put their own words into the statistics. Counted only for visitors who agreed to the anonymous
// statistics (the client forwards these on the consent-gated "question" event).

import { localAiApps } from '@/lib/power-local-llm/apps-barrel'
import { CATEGORY_SUB_LABEL } from '@/lib/power-local-llm/apps/categories'

export interface AnswerTopics {
  /** directory app slugs */
  apps: string[]
  /** directory sub-category keys (e.g. 'inference-engines') */
  dirCats: string[]
}

export const APP_SLUGS: ReadonlySet<string> = new Set(localAiApps.map((a) => a.slug))
export const DIR_CATEGORY_KEYS: ReadonlySet<string> = new Set(Object.keys(CATEGORY_SUB_LABEL))

const MAX_PER_KIND = 8

const str = (v: unknown) => (typeof v === 'string' ? v : null)

/** Slugs / categories named in one tool call's input; anything not in the directory is ignored. */
export function topicsFromToolInput(input: unknown): AnswerTopics {
  const out: AnswerTopics = { apps: [], dirCats: [] }
  if (!input || typeof input !== 'object') return out
  const i = input as Record<string, unknown>
  const slugs = [str(i.slug), str(i.app), ...(Array.isArray(i.slugs) ? i.slugs.map(str) : [])]
  for (const s of slugs) if (s && APP_SLUGS.has(s)) out.apps.push(s)
  const cat = str(i.category)
  if (cat && DIR_CATEGORY_KEYS.has(cat)) out.dirCats.push(cat)
  return out
}

// Tools whose goal / query is free text: the structured topic is what they returned (the shortlist), not the input.
const SHORTLIST_TOOLS = new Set(['find_best_apps', 'search_apps', 'recommend_stack', 'find_local_alternative', 'get_app_alternatives'])
const SHORTLIST_SIZE = 3
const APP_BY_SLUG = new Map(localAiApps.map((a) => [a.slug, a]))

function collectSlugs(node: unknown, out: string[], depth = 0): void {
  if (out.length >= SHORTLIST_SIZE || depth > 5 || !node || typeof node !== 'object') return
  if (Array.isArray(node)) {
    for (const n of node) collectSlugs(n, out, depth + 1)
    return
  }
  const o = node as Record<string, unknown>
  if (typeof o.slug === 'string' && APP_SLUGS.has(o.slug) && !out.includes(o.slug)) out.push(o.slug)
  for (const v of Object.values(o)) collectSlugs(v, out, depth + 1)
}

/** For shortlist tools: the top apps of the result and their main directory category. */
export function topicsFromToolResult(name: string, result: unknown): AnswerTopics {
  const out: AnswerTopics = { apps: [], dirCats: [] }
  if (!SHORTLIST_TOOLS.has(name)) return out
  collectSlugs(result, out.apps)
  for (const slug of out.apps) {
    const cat = APP_BY_SLUG.get(slug)?.categories[0]
    if (cat && DIR_CATEGORY_KEYS.has(cat) && !out.dirCats.includes(cat)) out.dirCats.push(cat)
  }
  return out
}

export function mergeTopics(into: AnswerTopics, add: AnswerTopics): void {
  for (const k of ['apps', 'dirCats'] as const) {
    for (const v of add[k]) if (!into[k].includes(v) && into[k].length < MAX_PER_KIND) into[k].push(v)
  }
}

/** Re-validates topics received from a client (the event endpoint never trusts the payload). */
export function cleanTopics(raw: unknown): AnswerTopics {
  const r = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>
  const pick = (v: unknown, allowed: ReadonlySet<string>) =>
    Array.isArray(v) ? [...new Set(v.filter((x): x is string => typeof x === 'string' && allowed.has(x)))].slice(0, MAX_PER_KIND) : []
  return { apps: pick(r.apps, APP_SLUGS), dirCats: pick(r.dirCats, DIR_CATEGORY_KEYS) }
}
