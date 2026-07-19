// Slug: green-solar-pluginenergy-balcony-solar
// Phase 1 scaffold (2026-07-19) — structure/frontmatter only, no body content yet.
// Noindex + sitemap-excluded via PENDING_SLUGS in published.ts until content,
// translation, and internal-linking phases land (see TIER 6 in slugs.ts).
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Balcony Solar Money Pages',
    title: 'Green Solar and PluginEnergy: Balcony Solar Reseller Profile',
    seoTitle: 'Green Solar and PluginEnergy Balcony Solar Profile',
    metaDescription: 'Combined company profile for Green Solar and PluginEnergy: smaller-volume balcony solar resellers, history, and product range.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    audience: 'Readers researching smaller-volume balcony solar resellers',
    // No cross-link requirement specified for this profile in Phase 1.
    sections: {},
  },
}
