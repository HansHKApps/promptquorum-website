// Prompt Bites — publish allowlist.
// Phase 1: All articles start as noindex, nofollow.
// Switch individual slugs to index only after the full LAUNCH_CHECKLIST passes.
// Rationale: atomic launch — Google rewards complete topical clusters over drip-fed pages.

export const PROMPT_BITES_PUBLISHED_SLUGS: ReadonlySet<string> = new Set([
  // Empty intentionally. Add slugs here after passing the LAUNCH_CHECKLIST.
])

export const PROMPT_BITES_HUB_PUBLISHED = false

export function isPromptBitePublished(slug: string, _lang: string): boolean {
  return PROMPT_BITES_PUBLISHED_SLUGS.has(slug)
}

export function isPromptBitesHubPublished(_lang: string): boolean {
  return PROMPT_BITES_HUB_PUBLISHED
}
