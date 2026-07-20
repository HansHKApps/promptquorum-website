// Slug: enphase-microinverter-balcony-solar
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
    title: 'Enphase: Balcony Solar Microinverter Company Profile',
    seoTitle: 'Enphase Balcony Solar Microinverter Profile',
    metaDescription: 'Company profile for Enphase: history, ownership, and microinverter product range for balcony solar.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    audience: 'Readers researching Enphase as a microinverter company',
    // No cross-link requirement specified for this profile in Phase 1.
    sections: {
      snapshot: { title: 'Enphase: Company Snapshot', image: '/images/enphase-microinverter-balcony-solar-snapshot-en.svg', imageCaption: 'Founded 2006 in Fremont, California; NASDAQ-listed (ENPH). A large rooftop-inverter incumbent, not a dedicated balcony-solar company.' },
      timeline: { title: 'Balcony Entry Timeline', image: '/images/enphase-microinverter-balcony-solar-timeline-en.svg', imageCaption: 'Both launch dates confirmed directly via Enphase’s own press releases.' },
      lineup: { title: 'IQ Balcony System', image: '/images/enphase-microinverter-balcony-solar-lineup-en.svg', imageCaption: 'Configuration as officially described — base kit plus expansion path.' },
      markets: { title: 'Confirmed Markets — Narrow, Recent', image: '/images/enphase-microinverter-balcony-solar-markets-en.svg', imageCaption: 'Only two countries were confirmed in this research — this is a recent, limited entry, not an established balcony-solar footprint.' },
      position: { title: 'Where Enphase Sits', image: '/images/enphase-microinverter-balcony-solar-position-en.svg', imageCaption: 'Enphase’s core business is rooftop residential microinverters; balcony solar is a small, recent extension into a different market segment.' },
      scaleContext: { title: 'Scale Context', image: '/images/enphase-microinverter-balcony-solar-scale-context-en.svg', imageCaption: 'Company-wide shipment figures are real but describe Enphase’s rooftop business overall, not a balcony-specific number — shown here for context, not as a balcony-market claim.' },
    },
  },
}
