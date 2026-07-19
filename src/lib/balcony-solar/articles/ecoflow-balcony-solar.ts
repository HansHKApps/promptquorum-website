// Slug: ecoflow-balcony-solar
// Phase 1 scaffold (2026-07-19) — structure/frontmatter only, no body content yet.
// Noindex + sitemap-excluded via PENDING_SLUGS in published.ts until content,
// translation, and internal-linking phases land (see TIER 6 in slugs.ts).
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Balcony Solar Money Pages',
    title: 'EcoFlow: Balcony Solar Company Profile',
    seoTitle: 'EcoFlow Balcony Solar Company Profile',
    metaDescription: 'Company profile for EcoFlow: history, ownership, product range, and role in the balcony solar market.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    audience: 'Readers researching EcoFlow as a company, distinct from buying-comparison intent',
    // TODO (internal-linking phase): reciprocal link to ecoflow-vs-anker-vs-zendure-balcony-solar (buyer-intent comparison); this page stays research-intent and must not duplicate that page's buying-decision framing.
    sections: {},
  },
}
