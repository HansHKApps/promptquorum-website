// Slug: yuma-balcony-solar
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
    title: 'Yuma: Balcony Solar Company Profile',
    seoTitle: 'Yuma Balcony Solar Company Profile',
    metaDescription: 'Company profile for Yuma: history, ownership, and product range in the balcony solar market.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    audience: 'Readers researching Yuma as a company',
    // No cross-link requirement specified for this profile in Phase 1.
    sections: {
      snapshot: { title: 'Yuma: Company Snapshot', image: '/images/yuma-balcony-solar-snapshot-en.svg', imageCaption: 'Cologne, Germany; founded 2020 by three co-founders; self-funded, no external investor round found.' },
      timeline: { title: 'Timeline', image: '/images/yuma-balcony-solar-timeline-en.svg', imageCaption: 'Founding year and market presence confirmed via Yuma’s own About page and a 2022 TechCrunch mention.' },
      lineup: { title: 'Product Line (Mounting Formats)', image: '/images/yuma-balcony-solar-lineup-en.svg', imageCaption: 'Yuma assembles kits from third-party inverters/batteries — its own product is the mounting hardware, varied by installation surface.' },
      markets: { title: 'Confirmed Markets', image: '/images/yuma-balcony-solar-markets-en.svg', imageCaption: 'Germany and Austria confirmed via Yuma’s own shipping/support documentation.' },
      position: { title: 'Where Yuma Sits', image: '/images/yuma-balcony-solar-position-en.svg', imageCaption: 'Yuma sources components from other companies in this research set (Hoymiles, EcoFlow, Anker SOLIX) rather than manufacturing its own hardware.' },
      partners: { title: 'Confirmed Component Suppliers', image: '/images/yuma-balcony-solar-partners-en.svg', imageCaption: 'Named directly on Yuma’s own product page — components Yuma bundles into kits rather than manufactures itself.' },
    },
  },
}
