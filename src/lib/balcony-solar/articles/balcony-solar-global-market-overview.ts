// Slug: balcony-solar-global-market-overview
// Phase 1 scaffold (2026-07-19) — structure/frontmatter only, no body content yet.
// Noindex + sitemap-excluded via PENDING_SLUGS in published.ts until content,
// translation, and internal-linking phases land (see TIER 6 in slugs.ts).
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-19',
    theme: 'Balcony Solar Money Pages',
    title: 'Balcony Solar Global Market Overview (2026): Germany, EU, UK, US, and Asia-Pacific',
    seoTitle: 'Balcony Solar Global Market Overview (2026)',
    metaDescription: 'Region-by-region balcony solar market sizing for Germany, the EU, UK, US, and Asia-Pacific, with segment and driver breakdowns.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    audience: 'Readers comparing balcony solar market size and adoption across regions',
    // TODO (internal-linking phase): add 'see also' links to trends-2027 category (Japan/China/Brazil/Greece/Gulf status pages) instead of duplicating that content here.
    sections: {},
  },
}
