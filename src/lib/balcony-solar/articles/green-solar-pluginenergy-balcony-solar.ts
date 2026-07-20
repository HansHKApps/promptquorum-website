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
    sections: {
      snapshot: { title: 'Green Solar & PluginEnergy: Snapshot', image: '/images/green-solar-pluginenergy-balcony-solar-snapshot-en.svg', imageCaption: 'Two separate, smaller German-speaking-market resellers — Green Solar (Austria) and PluginEnergy (Germany).' },
      timeline: { title: 'Registration Timeline', image: '/images/green-solar-pluginenergy-balcony-solar-timeline-en.svg', imageCaption: 'Both companies are young GmbHs, formally registered within the last five years.' },
      lineup: { title: 'PluginEnergy Kit Range', image: '/images/green-solar-pluginenergy-balcony-solar-lineup-en.svg', imageCaption: 'Output range as officially listed; PluginEnergy sources modules from named third-party manufacturers.' },
      markets: { title: 'Confirmed Markets', image: '/images/green-solar-pluginenergy-balcony-solar-markets-en.svg', imageCaption: 'Green Solar sells in Austria and Germany (incl. via OBI retail); PluginEnergy is Germany-focused.' },
      position: { title: 'Where Both Sit', image: '/images/green-solar-pluginenergy-balcony-solar-position-en.svg', imageCaption: 'Neither company manufactures cells, modules, or inverters — both are kit assemblers sourcing from named third-party brands.' },
      partners: { title: 'Confirmed Component Suppliers (PluginEnergy)', image: '/images/green-solar-pluginenergy-balcony-solar-partners-en.svg', imageCaption: 'Named directly in PluginEnergy’s product materials; Green Solar’s specific module suppliers were not confirmed in this research.' },
    },
  },
}
