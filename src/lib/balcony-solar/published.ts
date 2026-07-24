// Balcony Solar — public-launch allowlist.
// Slugs in this set are publicly indexable (robots: index,follow) and included
// in sitemap.xml across all locales. All other slugs in the cluster remain
// noindex + sitemap-excluded until they pass audit and are added here.
//
// LAUNCH STATE: the original 24 slugs from BALCONY_SOLAR_SLUG_TO_KEY are published.
// Importing from slugs.ts keeps this in sync with the slug map automatically —
// adding a slug there is enough to publish it, EXCEPT for slugs listed in
// PENDING_SLUGS below, which stay noindex until explicitly authorized (see
// feat/balcony-solar-2027-trends Phase 7).
import { BALCONY_SOLAR_SLUG_TO_KEY } from './slugs'

// 2027 Trends expansion (BSOL-26..29) — published 2026-07-18 (Phase 7,
// explicit authorization). Previously held back in this set pending
// Phase 3 EN review, Phase 4 translation, and Phase 5 internal linking;
// all four cleared and are now live.
// BSOL-25 (us-balcony-solar-legalization-2027) dropped, not held back — see slugs.ts.
//
// Country expansion (BSOL-30..34) — published 2026-07-19 (Phase 7, explicit
// authorization). Previously held back pending review, translation (all 9
// languages), and internal linking; all five cleared and are now live.
//
// Company profiles + market pillars (BSOL-35..51) — published 2026-07-20 on
// explicit authorization, image-only (no prose/FAQ/TL;DR yet). Previously
// held back pending body content, translation, and internal linking; owner
// confirmed indexing the image-only pages as-is rather than waiting.
const PENDING_SLUGS: ReadonlySet<string> = new Set([])

export const BALCONY_SOLAR_PUBLISHED_SLUGS: ReadonlySet<string> = new Set(
  Object.keys(BALCONY_SOLAR_SLUG_TO_KEY).filter(slug => !PENDING_SLUGS.has(slug))
)

export const BALCONY_SOLAR_HUB_PUBLISHED = true

// Per-language rollout gate — layered ON TOP of BALCONY_SOLAR_PUBLISHED_SLUGS above.
// A (slug, lang) pair must clear BOTH gates to be indexable: the slug must be in
// BALCONY_SOLAR_PUBLISHED_SLUGS, and the language must be listed here (or the slug
// must be absent from this map, meaning "no rollout in progress — every language
// published", the default for every slug outside the BSOL-35..51 batch).
//
// Company profiles + market pillars (BSOL-35..51) — body content + FAQ/TL;DR were
// authored and translated to all 9 languages starting 2026-07-20. All languages
// cleared review on 2026-07-24 (owner authorized indexing every language at once),
// so the rollout gate is empty — every slug behaves as fully published.
const LANG_ROLLOUT: Readonly<Record<string, ReadonlySet<string>>> = {}

export function isBalconySolarLangPublished(slug: string, lang: string): boolean {
  const rollout = LANG_ROLLOUT[slug]
  if (!rollout) return true // not in rollout — every language published, as before
  return rollout.has(lang)
}

export function isBalconySolarArticlePublished(slug: string, lang: string): boolean {
  return BALCONY_SOLAR_PUBLISHED_SLUGS.has(slug) && isBalconySolarLangPublished(slug, lang)
}

export function isBalconySolarHubPublished(_lang: string): boolean {
  return BALCONY_SOLAR_HUB_PUBLISHED
}
