// Ask Hans button-wording experiment (askhans-cta-v1). Pure constants + pure helpers: safe on server and client.
//
// Question: does "Chat with Ask Hans" (A, brand-led), "Start an AI conversation" (B, function-led) or
// "Get your personal AI recommendation" (C, benefit-led) make more visitors start and continue a conversation?
// Only the wording and its subtitle differ; the button, its position and what it opens stay as they were.
// Copy lives in src/components/askhans/copy/*.ts (`ctaVariants`), the same 9-language files as the rest of Ask Hans.

export const CTA_EXPERIMENT_ID = 'askhans-cta-v1'
export const CTA_VARIANTS = ['A', 'B', 'C'] as const
export type CtaVariant = (typeof CTA_VARIANTS)[number]

/** On/off switch (build-time env). Off = the original "Ask Hans" wording everywhere, no assignment, no events. */
export const CTA_EXPERIMENT_ENABLED = process.env.NEXT_PUBLIC_ASK_HANS_CTA_EXPERIMENT === 'true' && process.env.NEXT_PUBLIC_ASK_HANS_ENABLED === 'true'

/**
 * Rollout policy once the experiment is stopped: set NEXT_PUBLIC_ASK_HANS_CTA_WINNER=A|B|C (and switch the experiment
 * off) to show that wording to everybody. No assignment, no events. Unset = back to the original "Ask Hans" wording.
 */
export function ctaWinner(): CtaVariant | null {
  const w = process.env.NEXT_PUBLIC_ASK_HANS_CTA_WINNER
  return w === 'A' || w === 'B' || w === 'C' ? w : null
}

/** Minimum evidence before the dashboard may call a leader (documented in docs/askhans-cta-experiment.md). */
export const CTA_MIN_DAYS = 14
export const CTA_MIN_EXPOSED_PER_VARIANT = 3000
export const CTA_MIN_CONVERSIONS_PER_VARIANT = 30
export const CTA_WIN_PROBABILITY = 0.95
/** Relative improvement over the runner-up that counts as practically meaningful. */
export const CTA_PRACTICAL_LIFT = 0.1
/** Subgroup rows with fewer exposures per variant are shown greyed out and never interpreted. */
export const CTA_MIN_SUBGROUP_IMPRESSIONS = 500

/** Where a button sits. Sent as `via` on click/opened, so openings can be attributed to the experiment buttons. */
export const CTA_PLACEMENTS = ['header', 'floating', 'about', 'page'] as const
export type CtaPlacement = (typeof CTA_PLACEMENTS)[number]

/**
 * Funnel events. `consent: false` ones are anonymous counters sent like Umami (cookieless, no visitor ID); the others
 * follow the existing Ask Hans rule and are sent only after the visitor said "Yes" in the consent step.
 */
export const CTA_EVENTS = {
  ask_hans_button_impression: { consent: false },
  ask_hans_button_click: { consent: false },
  ask_hans_opened: { consent: false },
  ask_hans_first_question: { consent: true },
  ask_hans_second_question: { consent: true },
  ask_hans_three_questions: { consent: true },
  ask_hans_conversation_completed: { consent: true },
  ask_hans_return_visit: { consent: true },
  ask_hans_power_mode_used: { consent: true },
  ask_hans_session_end: { consent: true },
  /** the visitor answered the consent step (extra: choice yes|no). Anonymous counter; lets the dashboard check that the consent share is equal across variants. */
  ask_hans_consent_choice: { consent: false },
} as const
export type CtaEvent = keyof typeof CTA_EVENTS

export const CTA_LANGS = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'] as const
export const CTA_DEVICES = ['mobile', 'desktop'] as const
export const CTA_CATEGORIES = [
  'home', 'directory', 'app-review', 'comparison', 'local-llms', 'power-local-llm', 'prompt-engineering', 'prompt-bites',
  'smart-home', 'balcony-solar', 'blog', 'about', 'askhans', 'tools', 'other',
] as const
export type CtaCategory = (typeof CTA_CATEGORIES)[number]

const LOCALE_PREFIX = /^\/(?:de|fr|ja|zh|es|pt|ar|ko)(?=\/|$)/

/** Coarse page category from the path (locale prefix ignored). Reviews and comparisons are told apart by slug. */
export function pageCategory(pathname: string): CtaCategory {
  const parts = pathname.replace(LOCALE_PREFIX, '').split('/').filter(Boolean)
  const first = parts[0] ?? ''
  const slug = parts[1] ?? ''
  if (!first) return 'home'
  if (first === 'directory') return 'directory'
  if (first === 'compare') return 'comparison'
  if (first === 'power-local-llm' || first === 'local-llms') {
    if (/-review$/.test(slug)) return 'app-review'
    if (/(^|-)vs(-|$)|compar|alternatives/.test(slug)) return 'comparison'
    return first
  }
  if ((CTA_CATEGORIES as readonly string[]).includes(first)) return first as CtaCategory
  if (first === 'about') return 'about'
  if (first === 'askhans') return 'askhans'
  if (first === 'tools' || first === 'mcp-stats' || first === 'pq-apps') return 'tools'
  return 'other'
}
