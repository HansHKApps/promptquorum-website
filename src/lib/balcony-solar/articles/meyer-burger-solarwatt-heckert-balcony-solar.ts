// Slug: meyer-burger-solarwatt-heckert-balcony-solar
// Phase 1 scaffold (2026-07-19) — structure/frontmatter only, no body content yet.
// Noindex + sitemap-excluded via PENDING_SLUGS in published.ts until content,
// translation, and internal-linking phases land (see TIER 6 in slugs.ts).
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Balcony Solar Money Pages',
    title: 'Meyer Burger, Solarwatt, and Heckert Solar: German Panel Maker Profile',
    seoTitle: 'Meyer Burger, Solarwatt, Heckert Solar Profile',
    metaDescription: 'Combined company profile for Meyer Burger, Solarwatt, and Heckert Solar: German balcony solar panel makers, history, and product range.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    audience: 'Readers researching German balcony solar panel manufacturers',
    // No cross-link requirement specified for this profile in Phase 1.
    sections: {},
  },
}
