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
const PENDING_SLUGS: ReadonlySet<string> = new Set([])

export const BALCONY_SOLAR_PUBLISHED_SLUGS: ReadonlySet<string> = new Set(
  Object.keys(BALCONY_SOLAR_SLUG_TO_KEY).filter(slug => !PENDING_SLUGS.has(slug))
)

export const BALCONY_SOLAR_HUB_PUBLISHED = true

export function isBalconySolarArticlePublished(slug: string, _lang: string): boolean {
  return BALCONY_SOLAR_PUBLISHED_SLUGS.has(slug)
}

export function isBalconySolarHubPublished(_lang: string): boolean {
  return BALCONY_SOLAR_HUB_PUBLISHED
}
