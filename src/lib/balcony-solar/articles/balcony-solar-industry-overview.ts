// Slug: balcony-solar-industry-overview
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
    title: 'Balcony Solar Industry Overview (2026): History, Supply Chain, and Market Players',
    seoTitle: 'Balcony Solar Industry Overview (2026)',
    metaDescription: 'How the balcony solar industry formed, its three-layer supply chain, and the companies driving it, updated for 2026.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    audience: 'Readers researching the balcony solar industry structure and major players',
    // TODO (internal-linking phase): cross-link to trends-2027 category pages instead of re-covering per-country trend content here.
    sections: {},
  },
}
