// Slug: meyer-burger-solarwatt-heckert-balcony-solar
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
    title: 'Meyer Burger, Solarwatt, and Heckert Solar: German Panel Maker Profile',
    seoTitle: 'Meyer Burger, Solarwatt, Heckert Solar Profile',
    metaDescription: 'Combined company profile for Meyer Burger, Solarwatt, and Heckert Solar: German balcony solar panel makers, history, and product range.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    audience: 'Readers researching German balcony solar panel manufacturers',
    // No cross-link requirement specified for this profile in Phase 1.
    sections: {
      snapshot: { title: 'Three German Panel Makers, Three Different Situations', image: '/images/meyer-burger-solarwatt-heckert-balcony-solar-snapshot-en.svg', imageCaption: 'Meyer Burger has a real balcony kit but is in active insolvency proceedings — the single most important fact on this page.' },
      timeline: { title: 'Meyer Burger: Insolvency Timeline', image: '/images/meyer-burger-solarwatt-heckert-balcony-solar-timeline-en.svg', imageCaption: 'This is the fact that should govern any purchase advice involving Meyer Burger’s balcony kit.' },
      lineup: { title: 'Balcony-Specific Product Confirmed?', image: '/images/meyer-burger-solarwatt-heckert-balcony-solar-lineup-en.svg', imageCaption: 'Only Heckert Solar’s balcony line is fully confirmed with named modules; Solarwatt has advisory content but no confirmed SKUs; Meyer Burger’s kit exists but fulfillment is in doubt.' },
      markets: { title: 'Confirmed HQs', image: '/images/meyer-burger-solarwatt-heckert-balcony-solar-markets-en.svg', imageCaption: 'All three are established, long-running German-speaking-market manufacturers — not startups.' },
      position: { title: 'Where All Three Sit', image: '/images/meyer-burger-solarwatt-heckert-balcony-solar-position-en.svg', imageCaption: 'All three are panel manufacturers, distinct from the microinverter/battery makers and kit resellers covered elsewhere in this cluster.' },
      statusNote: { title: 'Financial Status — Verify Before Purchase Advice', image: '/images/meyer-burger-solarwatt-heckert-balcony-solar-status-note-en.svg', imageCaption: 'Meyer Burger’s manufacturing subsidiaries entered insolvency proceedings in 2025; current ability to fulfill balcony-kit orders should be confirmed directly before any buying recommendation.' },
    },
  },
}
