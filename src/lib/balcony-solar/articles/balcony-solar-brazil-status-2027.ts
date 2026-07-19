// Slug: balcony-solar-brazil-status-2027
// BSOL-32 — Tier 5 (2027 Trends), legislation/market status, semi_annual.
// SCOPE NOTE: balcony-solar-portugal-brazil.ts already covers Brazil's legal-status
// facts (ANEEL REN 1.059/2023, informal gray zone, INMETRO certification) as half of
// a Portugal/Brazil comparison. This article is a deeper Brazil-only country dossier:
// it goes further on the regulatory lineage (RN 482/2012 -> Lei 14.300/2022 ->
// REN 1.059/2023), covers Brazil's broader distributed-generation market scale to
// contrast with the balcony-specific gap, and is NOT a subsidy-program piece — Brazil's
// large distributed-generation solar market is explicitly NOT balcony-plug-in-specific,
// and this article does not conflate the two. Cross-links to and from
// balcony-solar-portugal-brazil.ts rather than duplicating its Portugal comparison.
// EN-only scaffold, noindex until authorized (see published.ts PENDING_SLUGS).
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-18',
    theme: 'Balcony Solar Legislation',
    title: 'Balcony Solar in Brazil: Status Report 2027',
    seoTitle: 'Balcony Solar in Brazil: Status Report 2027',
    intro: 'Brazil has one of the world\'s largest distributed-generation solar markets — but that infrastructure and market culture is not balcony-plug-in-specific. This page is a status report on the specific gap: no dedicated regulation exists yet for direct-to-outlet, plug-and-play balcony solar, even though the general distributed-generation framework it would fall under is well established and heavily used.',
    metaDescription: 'Brazil\'s Lei 14.300/2022 regulates micro- and mini-geração distribuída, building on ANEEL\'s Resolução Normativa 482/2012. But plug-and-play balcony solar specifically has no dedicated regulation, per MIT Technology Review Brasil (May 2026) — despite Brazil adding 5+ GW in distributed generation in early 2025 alone.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    audience: 'Balcony solar buyers and market watchers assessing Brazil beyond the Portugal/Brazil legal comparison',
    primaryTerm: 'balcony solar brazil status',
    targetKeywords: ['balcony solar brazil', 'plug-in solar brazil legal', 'brazil distributed generation solar 2027'],
    leadAnswerBlock: '**Brazil has no dedicated regulation for plug-and-play, direct-to-outlet balcony solar — a Brazilian source (MIT Technology Review Brasil, May 2026) explicitly states the category still has no specific rules, making its adoption "more incipient" than in markets with dedicated frameworks.** This is distinct from Brazil\'s general distributed-generation solar market, which is large and well-regulated: Lei 14.300/2022 governs micro-geração distribuída (up to 75kW) and mini-geração distribuída (75kW-5MW), building on the earlier Resolução Normativa (RN) 482/2012 from Brazil\'s national electricity regulator, ANEEL. That general framework is heavily used — Brazil added more than 5 GW in micro/mini distributed generation in early 2025 alone, surpassing 42 GW installed and benefiting more than 5.4 million consumer units, per ANEEL data cited in Brazilian press — but none of that scale is balcony-plug-in-specific. Brazil has the infrastructure and market culture for distributed solar broadly; the specific plug-in-balcony product category is the part still waiting on dedicated rules.',
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in Brazil?',
        answer: 'Not banned, but not specifically regulated either — per MIT Technology Review Brasil (May 2026), the plug-and-play, direct-to-outlet balcony solar model still has no specific regulation in Brazil, making its adoption more incipient than in markets with dedicated frameworks. This is separate from Brazil\'s large general distributed-generation solar market: Lei 14.300/2022 (building on ANEEL\'s earlier RN 482/2012) regulates micro-geração distribuída up to 75kW and mini-geração distribuída from 75kW to 5MW, and Brazil added over 5 GW in distributed generation in early 2025 alone, surpassing 42 GW installed across 5.4M+ consumer units. That scale reflects rooftop-owned systems under net-metering-style credits, not the plug-in-balcony category specifically.',
        bullets: [
          'MIT Technology Review Brasil (May 2026) explicitly states plug-and-play balcony solar has no specific regulation in Brazil, calling its adoption "more incipient" than in international markets with dedicated frameworks',
          'Regulatory lineage for Brazil\'s general distributed-generation framework: ANEEL\'s Resolução Normativa 482/2012 first established rules, later superseded/updated by Lei 14.300/2022, which is implemented via ANEEL\'s REN 1.059/2023',
          'Lei 14.300/2022 covers micro-geração distribuída (up to 75kW) and mini-geração distribuída (75kW-5MW) — general rooftop/owned-system categories, with no documented small-plug-in-kit carve-out',
          'Brazil added 5+ GW in micro/mini distributed generation in early 2025 alone, surpassing 42 GW installed and benefiting 5.4M+ consumer units, per ANEEL data — general DG market scale, explicitly not balcony-specific',
          'Frame: Brazil has the infrastructure and market culture for distributed solar broadly; the plug-in-balcony product category specifically has no dedicated rules yet — an emerging/gap story, not a subsidy-program story',
        ],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'The Regulatory Gap: Plug-In Solar Specifically', anchor: '#regulatory-gap' },
      { label: 'The Framework It Would Fall Under', anchor: '#dg-framework' },
      { label: 'Brazil\'s Distributed Generation Market Is Not the Same Thing', anchor: '#dg-market-scale' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MIT Technology Review Brasil (May 2026) explicitly states plug-and-play, direct-to-outlet balcony solar still has no specific regulation in Brazil — this is the headline fact of this status report.',
          'Brazil\'s general distributed-generation framework has a clear regulatory lineage: ANEEL\'s Resolução Normativa 482/2012 (2012) established the original rules, superseded/updated by Lei 14.300/2022, implemented in detail via ANEEL\'s REN 1.059/2023.',
          'Lei 14.300/2022 covers micro-geração distribuída (up to 75kW) and mini-geração distribuída (75kW-5MW) — general categories for owned, typically rooftop, systems with no documented plug-in-kit-specific carve-out.',
          'Brazil added more than 5 GW in micro/mini distributed generation in early 2025 alone, surpassing 42 GW installed and benefiting 5.4M+ consumer units, per ANEEL data — a huge market, but a general one, not a balcony-plug-in one.',
          'The correct framing: Brazil has the infrastructure and market culture for distributed solar broadly, but the plug-in-balcony product category specifically has no dedicated regulation yet — do not conflate Brazil\'s large general DG market with a balcony-solar subsidy program, because no such program exists.',
        ],
      },
      regulatoryGap: {
        id: 'regulatory-gap',
        title: 'The Regulatory Gap: Plug-In Solar Specifically',
        content: [
          '**A Brazilian source — MIT Technology Review Brasil, May 2026 — explicitly states that the plug-and-play, direct-to-outlet balcony solar model still has no specific regulation in Brazil, making its adoption "more incipient" compared to international markets that have dedicated frameworks.** This is the central finding of this status report: Brazil is not short on distributed solar policy in general (see below), but the specific plug-in-balcony product category — small, consumer-installed, direct-to-outlet kits, as distinct from professionally installed rooftop systems — has not been separately addressed by regulators.',
          'This is a similar shape to the gap findings for Japan and other emerging markets covered elsewhere in this cluster: a country with substantial solar infrastructure and policy, where the specific balcony/plug-in product category simply has not been separately legislated yet.',
        ],
      },
      dgFramework: {
        id: 'dg-framework',
        title: 'The Framework It Would Fall Under',
        content: [
          '**Brazil\'s general distributed-generation solar regulation has a clear lineage.** ANEEL\'s Resolução Normativa (RN) 482/2012 first established Brazil\'s net-metering-style compensation system for distributed generation. That framework was substantially updated and given statutory backing by Lei 14.300/2022, Brazil\'s Distributed Generation Legal Framework law, which formally defines micro-geração distribuída (systems up to 75kW) and mini-geração distribuída (75kW to 5MW). ANEEL\'s REN 1.059/2023 is the regulator\'s implementing resolution that operationalizes Lei 14.300/2022\'s provisions in technical detail — connection requests, technical study requirements, bidirectional metering, and INMETRO-certified inverter documentation, applied uniformly regardless of system size.',
          'None of these three instruments — RN 482/2012, Lei 14.300/2022, or REN 1.059/2023 — carve out a separate, lighter-touch process for small plug-in kits. A balcony solar system in Brazil technically falls under the same micro-geração process as a full rooftop installation, which is the structural reason the category remains, per MIT Technology Review Brasil, more incipient than in markets with a dedicated small-system exemption.',
        ],
      },
      dgMarketScale: {
        id: 'dg-market-scale',
        title: 'Brazil\'s Distributed Generation Market Is Not the Same Thing',
        content: [
          '**Brazil added more than 5 GW in micro- and mini-geração distribuída in early 2025 alone, surpassing 42 GW of installed distributed-generation capacity and benefiting more than 5.4 million consumer units, according to ANEEL data cited in Brazilian press.** This is one of the largest distributed-generation solar markets in the world by these measures.',
          'That scale reflects owned, typically rooftop-installed systems operating under Lei 14.300/2022\'s net-metering-style credit system — it is general distributed-generation market growth, not evidence of a balcony-plug-in-specific market or program. It is easy to read Brazil\'s large DG numbers and assume a dedicated balcony solar subsidy or adoption program exists; that would be a conflation this page deliberately avoids. Brazil has the underlying infrastructure, grid-interconnection process, and market familiarity with distributed solar that could support balcony solar adoption — but the specific product category has not yet been addressed with dedicated rules.',
        ],
        callouts: [
          { type: 'warning', text: 'Do not read Brazil\'s 5+ GW / 42 GW / 5.4M-consumer-unit distributed-generation figures as balcony-solar-specific statistics. They describe the general DG market under Lei 14.300/2022, which balcony solar would technically fall under but which has no dedicated small-plug-in-kit carve-out or separate reporting category.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Is balcony solar legal in Brazil?', a: 'It\'s not banned, but plug-and-play balcony solar specifically has no dedicated regulation — per MIT Technology Review Brasil (May 2026), this makes its adoption more incipient than in markets with dedicated frameworks. It would technically fall under Brazil\'s general micro-geração distribuída process (Lei 14.300/2022), which has no small-kit carve-out.' },
          { q: 'What is Lei 14.300/2022?', a: 'Brazil\'s Distributed Generation Legal Framework law, which formally defines micro-geração distribuída (up to 75kW) and mini-geração distribuída (75kW-5MW), building on ANEEL\'s earlier Resolução Normativa 482/2012 and implemented in technical detail via ANEEL\'s REN 1.059/2023.' },
          { q: 'Does Brazil have a balcony solar subsidy program?', a: 'No. Brazil has a large general distributed-generation solar market — 5+ GW added in early 2025 alone, 42 GW+ installed, 5.4M+ consumer units — but this reflects owned/rooftop systems under Lei 14.300/2022\'s net-metering-style framework, not a balcony-plug-in-specific program. No dedicated balcony solar subsidy or adoption program exists.' },
          { q: 'Why is balcony solar adoption slower in Brazil than in some other markets?', a: 'Per MIT Technology Review Brasil (May 2026), the structural reason is the lack of a dedicated regulatory carve-out — plug-in kits fall under the same formal micro-geração process as full rooftop installations, with no lighter-touch registration path for small systems, unlike markets with an explicit small-system exemption.' },
          { q: 'How does this relate to the Portugal/Brazil legal comparison on this site?', a: 'The Portugal/Brazil comparison article covers Brazil\'s legal-status gray zone alongside Portugal\'s codified exemption. This page goes deeper on Brazil specifically: the regulatory lineage (RN 482/2012 to Lei 14.300/2022 to REN 1.059/2023) and the contrast between Brazil\'s large general distributed-generation market and the still-unaddressed balcony-plug-in category.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Balcony Solar in Portugal & Brazil: Legal Status Compared](/balcony-solar/balcony-solar-portugal-brazil) — the Portugal/Brazil legal-status comparison this dossier expands on',
          '[Is Balcony Solar Legal? A Country-by-Country Guide](/balcony-solar/is-balcony-solar-legal-country-guide) — global legal tracker',
          '[Is Balcony Solar Legal in Japan? 2027 Status Report](/balcony-solar/balcony-solar-japan-status-2027) — a similarly shaped emerging/gap market',
        ],
      },
    },
  },
}
