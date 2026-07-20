// Slug: hoymiles-microinverter-balcony-solar
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
    title: 'Hoymiles: Balcony Solar Microinverter Company Profile',
    seoTitle: 'Hoymiles Balcony Solar Microinverter Profile',
    metaDescription: 'Company profile for Hoymiles: history, ownership, and microinverter product range for balcony solar.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    audience: 'Readers researching Hoymiles as a microinverter company',
    // No cross-link requirement specified for this profile in Phase 1.
    sections: {
      snapshot: { title: 'Hoymiles: Company Snapshot', image: '/images/hoymiles-microinverter-balcony-solar-snapshot-en.svg', imageCaption: 'Founded 2012 in Hangzhou, China; listed on the Shanghai Stock Exchange STAR Market since December 2021.' },
      timeline: { title: 'Microinverter Timeline', image: '/images/hoymiles-microinverter-balcony-solar-timeline-en.svg', imageCaption: 'Verified product-line milestones from Hoymiles’ own materials and PV trade press.' },
      lineup: { title: 'HMS Series Output Range', image: '/images/hoymiles-microinverter-balcony-solar-lineup-en.svg', imageCaption: 'Peak AC output as officially listed on Hoymiles’ EU product page.' },
      markets: { title: 'Confirmed Certification Regions', image: '/images/hoymiles-microinverter-balcony-solar-markets-en.svg', imageCaption: 'North America and EU/Germany/France/Poland/Netherlands confirmed via Hoymiles’ own regional product pages.' },
      position: { title: 'Where Hoymiles Sits', image: '/images/hoymiles-microinverter-balcony-solar-position-en.svg', imageCaption: 'Hoymiles is a pure microinverter manufacturer — its hardware is the component inside other brands’ balcony kits.' },
      certification: { title: 'Compliance', image: '/images/hoymiles-microinverter-balcony-solar-certification-en.svg', imageCaption: 'Certifications confirmed on Hoymiles’ own EU product documentation.' },
    },
  },
}
