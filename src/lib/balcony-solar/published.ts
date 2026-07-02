// Balcony Solar — public-launch allowlist.
// Slugs in this set are publicly indexable (robots: index,follow) and included
// in sitemap.xml across all locales. All other slugs in the cluster remain
// noindex + sitemap-excluded until they pass audit and are added here.
//
// LAUNCH STATE: all 20 slugs from BALCONY_SOLAR_SLUG_TO_KEY are published.
// Importing from slugs.ts keeps this in sync with the slug map automatically —
// adding a slug there is enough to publish it; no list to maintain here.
import { BALCONY_SOLAR_SLUG_TO_KEY } from './slugs'

export const BALCONY_SOLAR_PUBLISHED_SLUGS: ReadonlySet<string> = new Set(
  Object.keys(BALCONY_SOLAR_SLUG_TO_KEY)
)

export const BALCONY_SOLAR_HUB_PUBLISHED = true

export function isBalconySolarArticlePublished(slug: string, _lang: string): boolean {
  return BALCONY_SOLAR_PUBLISHED_SLUGS.has(slug)
}

export function isBalconySolarHubPublished(_lang: string): boolean {
  return BALCONY_SOLAR_HUB_PUBLISHED
}
