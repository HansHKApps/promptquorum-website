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

// 2027 Trends expansion (BSOL-25..29) — held back from publish until explicit
// go-ahead. Remove entries from this set to flip a slug live.
const PENDING_SLUGS: ReadonlySet<string> = new Set([
  'us-balcony-solar-legalization-2027',
  'balcony-solar-battery-storage-standard-2027',
  'eu-800w-balcony-solar-standard-2027',
  'balcony-solar-housing-associations-b2b-2027',
  'net-metering-rollback-balcony-solar-2027',
])

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
