import { localAiApps } from '@/lib/power-local-llm/apps-barrel'

export interface FounderReviewEntry {
  slug: string
  appName: string
  founderWho: string
  excerpt: string
  date: string
  url: string
}

/**
 * Directory tools with founder-supplied content, sorted by date descending.
 * Prefers `founderReviewedDate` (the fact-check credit date) and falls back
 * to `founder.providedDate` (when the founder quote itself was supplied) —
 * whichever is populated. Only 1-2 of 224 tiles have this set today
 * (founder outreach has barely started); FounderReviewsBlock's own
 * placeholder state covers the near-empty case, this loader just returns
 * whatever real entries exist.
 */
export function getFounderReviews(limit = 10): FounderReviewEntry[] {
  return localAiApps
    .filter((tool) => tool.founder != null || tool.founderReviewedDate != null)
    .map((tool) => ({
      slug: tool.slug,
      appName: tool.name,
      founderWho: tool.founder?.who.en ?? '',
      excerpt: tool.founder?.why ?? '',
      date: tool.founderReviewedDate ?? tool.founder?.providedDate ?? '',
      url: tool.reviewSlug ? `/power-local-llm/${tool.reviewSlug}` : `/power-local-llm/local-llm-software-directory#${tool.slug}`,
    }))
    .filter((entry) => entry.date !== '')
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit)
}
