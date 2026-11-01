// Ask Hans — confidence tag per directory app, attached to every tool result that names an app (by slug).
//   high   = PromptQuorum hands-on tested it
//   medium = the founder/maintainer checked the entry's specs (badge still valid, 365 days)
//   low    = only the maker's statements and directory data; not independently tested
// The model turns the tag into a short label in the visitor's language and adds a disclaimer for medium/low only.

import { findApp } from '@/lib/power-local-llm/app-search'
import { HANDS_ON_TEST_SLUGS } from '@/lib/hands-on-tests/links'
import { isFounderStarActive } from '@/components/local-ai-directory/founderStar'

export type Confidence = 'high' | 'medium' | 'low'

export interface ConfidenceInfo {
  confidence: Confidence
  confidenceBasis: string
}

export function confidenceFor(slug: string): ConfidenceInfo | null {
  let app
  try {
    app = findApp(slug)
  } catch {
    return null
  }
  if (HANDS_ON_TEST_SLUGS.includes(app.slug)) {
    return { confidence: 'high', confidenceBasis: 'PromptQuorum hands-on tested this app' }
  }
  if (isFounderStarActive(app.founderReviewedDate)) {
    return { confidence: 'medium', confidenceBasis: `the maker checked this entry (${app.founderReviewedDate}); PromptQuorum has not hands-on tested the app` }
  }
  return { confidence: 'low', confidenceBasis: "based on the maker's own statements and directory data; not tested or checked by PromptQuorum" }
}

/** Adds confidence + confidenceBasis to every object in a tool result that has a directory-app `slug` and a `name`. */
export function withConfidence<T>(value: T, depth = 0): T {
  if (depth > 6 || value === null || typeof value !== 'object') return value
  if (Array.isArray(value)) return value.map((v) => withConfidence(v, depth + 1)) as unknown as T
  const obj = value as Record<string, unknown>
  const out: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(obj)) out[k] = withConfidence(v, depth + 1)
  if (typeof obj.slug === 'string' && typeof obj.name === 'string' && !('confidence' in obj)) {
    const info = confidenceFor(obj.slug)
    if (info) Object.assign(out, info)
  }
  return out as T
}
