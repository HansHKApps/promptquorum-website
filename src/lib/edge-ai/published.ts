// Edge AI — public-launch allowlist.
// Slugs in this set are publicly indexable (robots: index,follow) and included
// in sitemap.xml. All other slugs in the cluster remain noindex + sitemap-excluded
// until they pass editorial + risk-checker review and are added here.
// Mirrors src/lib/power-local-llm/published.ts.

export const EDGE_AI_PUBLISHED_SLUGS: ReadonlySet<string> = new Set([
  // Launched once E1/E2/E3 pass risk-checker + validation — see docs/edge-ai launch note.
])

export const EDGE_AI_HUB_PUBLISHED = false

export function isEdgeAiArticlePublished(slug: string, _lang: string): boolean {
  return EDGE_AI_PUBLISHED_SLUGS.has(slug)
}

export function isEdgeAiHubPublished(_lang: string): boolean {
  return EDGE_AI_HUB_PUBLISHED
}
