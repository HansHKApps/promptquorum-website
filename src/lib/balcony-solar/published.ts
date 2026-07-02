// Balcony Solar — public-launch allowlist.
// Slugs in this set are publicly indexable (robots: index,follow) and included
// in sitemap.xml across all locales. All other slugs in the cluster remain
// noindex + sitemap-excluded until they pass audit and are added here.
//
// SCAFFOLD STATE: this cluster is explicitly noindex/unpublished. Nothing is
// added here until a later step of the balcony-solar build (STEP 6/7) flips it live.

export const BALCONY_SOLAR_PUBLISHED_SLUGS: ReadonlySet<string> = new Set([])

export const BALCONY_SOLAR_HUB_PUBLISHED = false

export function isBalconySolarArticlePublished(slug: string, _lang: string): boolean {
  return BALCONY_SOLAR_PUBLISHED_SLUGS.has(slug)
}

export function isBalconySolarHubPublished(_lang: string): boolean {
  return BALCONY_SOLAR_HUB_PUBLISHED
}
