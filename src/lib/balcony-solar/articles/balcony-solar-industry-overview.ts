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
    sections: {
      snapshot: { title: 'Balcony Solar, in Brief', image: '/images/balcony-solar-industry-overview-snapshot-en.svg', imageCaption: 'Germany scaled from roughly 40,000 registered balcony-solar systems in 2017 to an estimated 4 million installations by 2025 — the market’s clearest verified growth signal.' },
      timeline: { title: 'Regulatory Milestones', image: '/images/balcony-solar-industry-overview-timeline-en.svg', imageCaption: 'Germany set the pace on plug-in solar rules; the US followed with its first dedicated safety standard in 2026.' },
      supplyChain: { title: 'Three Layers of the Supply Chain', image: '/images/balcony-solar-industry-overview-supply-chain-en.svg', imageCaption: 'Panel makers, microinverter/battery makers, and kit resellers are distinct businesses — most companies in this space sit in only one layer.' },
      players: { title: 'Most-Cited Companies by Layer', image: '/images/balcony-solar-industry-overview-players-en.svg', imageCaption: 'Company names most frequently cited across market comparisons — see individual company pages for verified specifics.' },
      germanyGrowth: { title: 'Germany: Registered Systems Over Time', image: '/images/balcony-solar-industry-overview-germany-growth-en.svg', imageCaption: 'Bundesnetzagentur/Marktstammdatenregister figures — the most authoritative registry-based count available.' },
      usEntry: { title: 'US Market: A 2026 Story', image: '/images/balcony-solar-industry-overview-us-entry-en.svg', imageCaption: 'UL 3700 is necessary but not sufficient — legality is still set state by state, not federally.' },
    },
  },
}
