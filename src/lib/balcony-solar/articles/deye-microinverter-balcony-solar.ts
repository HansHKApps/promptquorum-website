// Slug: deye-microinverter-balcony-solar
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
    title: 'Deye: Balcony Solar Microinverter Company Profile',
    seoTitle: 'Deye Balcony Solar Microinverter Profile',
    metaDescription: 'Company profile for Deye: history, ownership, and microinverter product range for balcony solar.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    audience: 'Readers researching Deye as a microinverter company',
    // No cross-link requirement specified for this profile in Phase 1.
    sections: {
      snapshot: { title: 'Deye: Company Snapshot', image: '/images/deye-microinverter-balcony-solar-snapshot-en.svg', imageCaption: 'Ningbo, China; restructured with new capital in 2007, listed on the Shanghai Stock Exchange since April 2021.' },
      timeline: { title: 'Product Timeline', image: '/images/deye-microinverter-balcony-solar-timeline-en.svg', imageCaption: 'G4 microinverter series and battery-storage BK series launch dates per PV trade press.' },
      lineup: { title: 'SUN-M G4 Series Output Range', image: '/images/deye-microinverter-balcony-solar-lineup-en.svg', imageCaption: 'AC output as officially listed across the G4 microinverter line.' },
      markets: { title: 'Confirmed Certification Regions', image: '/images/deye-microinverter-balcony-solar-markets-en.svg', imageCaption: 'Country-specific grid-code certifications listed directly on Deye’s product pages.' },
      position: { title: 'Where Deye Sits', image: '/images/deye-microinverter-balcony-solar-position-en.svg', imageCaption: 'Deye’s balcony-relevant microinverter line is a distinct product category from its larger hybrid/string inverter business.' },
      certification: { title: 'Compliance', image: '/images/deye-microinverter-balcony-solar-certification-en.svg', imageCaption: 'Certifications confirmed per country on Deye’s own product pages.' },
    },
  },
}
