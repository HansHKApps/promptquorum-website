// Smart Home — public-launch allowlist.
// Slugs in this set are publicly indexable (robots: index,follow) and included
// in sitemap.xml for the EN locale. All other slugs in the cluster — including
// every DE/FR/JA/ZH/ES/PT variant — remain noindex + sitemap-excluded until they
// pass audit and are added here.
//
// SCAFFOLD STATE (Phase 1): the set is intentionally EMPTY and the hub is
// unpublished. The entire cluster ships noindex + sitemap-excluded. Flip slugs
// live by adding them here in the launch PR (Phase 3).

export const SMART_HOME_PUBLISHED_SLUGS: ReadonlySet<string> = new Set([
  // (empty — nothing published yet)
])

export const SMART_HOME_HUB_PUBLISHED = false

export function isSmartHomeArticlePublished(slug: string, _lang: string): boolean {
  return SMART_HOME_PUBLISHED_SLUGS.has(slug)
}

export function isSmartHomeHubPublished(_lang: string): boolean {
  return SMART_HOME_HUB_PUBLISHED
}
