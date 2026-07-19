// Slug: balcony-solar-china-2027
// BSOL-31 — Tier 5 (2027 Trends), legislation/market status, semi_annual.
// SCOPE NOTE: existing balcony-solar content mentions China extensively but only as a
// manufacturer/exporter (export-tax rebate removal, Section 301 tariffs, Shenzhen brands).
// This article covers China as a DOMESTIC ADOPTION MARKET instead — a distinct angle,
// not a duplicate of the manufacturing/export coverage elsewhere in this cluster.
// EN-only scaffold, noindex until authorized (see published.ts PENDING_SLUGS).
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-18',
    theme: 'Balcony Solar Legislation',
    title: 'Balcony Solar in China: The Domestic Market Emerging Behind the Export Boom (2027)',
    seoTitle: 'Balcony Solar in China: The Domestic Market Emerging Behind the Export Boom (2027)',
    intro: 'China is the world\'s largest exporter of balcony solar hardware — but this page is about a different, newer story: a domestic adoption market taking shape inside China itself, formalized by the country\'s first balcony-solar industry standard in May 2026 and driven by a 2025 policy shift that undercut the economics of traditional grid-subsidized household solar.',
    metaDescription: 'China published its first balcony-solar industry standard (T/GEA 001-2026) in May 2026, drafted with Hoymiles and Trina\'s household brand. Policy driver: Document No. 136 (effective May 31, 2025) pushed household solar toward self-consumption. Single-source estimates put 2024 domestic installs around 1,000 units, projecting toward 100,000+ by 2026.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    audience: 'Balcony solar market watchers and buyers assessing China\'s domestic adoption, distinct from China as a manufacturing hub',
    primaryTerm: 'balcony solar china domestic market',
    targetKeywords: ['balcony solar china', 'china balcony solar standard 2026', 'plug-in solar china market'],
    leadAnswerBlock: '**China published its first industry standard specifically for balcony solar — T/GEA 001-2026 ("阳台光伏质量与安全评价技术规范," the Balcony PV Quality and Safety Evaluation Technical Standard) — on May 21, 2026, issued by the Shanghai Minhang District Green Energy Industry Development Promotion Association.** The standard was drafted jointly with the China Distributed Solar-Storage Brand Alliance, the Shandong Solar Energy Industry Association, and the New Energy Committee of the Henan Province Industry Development Research Association, with Hoymiles (昱能科技) and Trina Solar\'s residential brand (天合富家, "Trina Household") as core drafting enterprises. The policy backdrop is China\'s "Document No. 136" (国家发改委/国家能源局《关于深化新能源上网电价市场化改革促进新能源高质量发展的通知》), effective May 31, 2025, which requires new renewable energy projects to sell into market-based trading rather than receive guaranteed feed-in pricing — undercutting the traditional "sell excess to the grid for subsidy" economics of household solar and opening a market case for self-consumption-focused balcony systems instead. [VERIFY: single-company estimate, not independently confirmed] Trina\'s household brand estimates roughly 1,000 domestic installs in 2024, projecting toward 10,000 in 2025 and potentially 100,000+ by 2026.',
    quickAnswerTop: {
      en: {
        question: 'Is there a domestic balcony solar market in China, separate from its role as a manufacturing hub?',
        answer: 'Yes — a domestic adoption market is emerging, formalized by China\'s first balcony-solar industry standard, T/GEA 001-2026, published May 21, 2026 by the Shanghai Minhang District Green Energy Industry Development Promotion Association and drafted with Hoymiles and Trina Solar\'s household brand (天合富家) as core participants. The policy driver is "Document No. 136," effective May 31, 2025, which pushed new renewable energy projects toward market-based trading instead of guaranteed feed-in pricing — undermining the economics of traditional subsidized household solar and creating a market opening for self-consumption balcony systems. Trina\'s household brand estimates (flagged here as a single-company projection, not independently verified) suggest roughly 1,000 units installed domestically in 2024, ~10,000 projected for 2025, and potentially 100,000+ by 2026.',
        bullets: [
          'T/GEA 001-2026 ("阳台光伏质量与安全评价技术规范"), China\'s first balcony-solar industry standard, published May 21, 2026 by the Shanghai Minhang District Green Energy Industry Development Promotion Association',
          'Drafted with the China Distributed Solar-Storage Brand Alliance, Shandong Solar Energy Industry Association, and Henan Province Industry Development Research Association\'s New Energy Committee; Hoymiles and Trina Solar\'s household brand (天合富家) were core drafting enterprises',
          'Policy driver: "Document No. 136," effective May 31, 2025, requires new renewable projects to enter market trading instead of guaranteed feed-in pricing — undercutting subsidized household-solar economics and opening a case for self-consumption-focused balcony solar',
          '[VERIFY: single-source, Trina household brand estimate] ~1,000 domestic units installed in 2024, ~10,000 projected for 2025, potentially 100,000+ for 2026 — not an independently confirmed or official figure',
          'This is a distinct topic from China\'s role as a manufacturing/export hub (covered elsewhere in this cluster, e.g. export-tax rebate changes and Section 301 tariffs) — this page covers domestic adoption inside China specifically',
        ],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'China\'s First Balcony Solar Standard', anchor: '#first-standard' },
      { label: 'The Policy Driver: Document No. 136', anchor: '#document-136' },
      { label: 'Market Size: Early and Single-Sourced', anchor: '#market-size' },
      { label: 'Manufacturing Hub vs. Domestic Market', anchor: '#hub-vs-domestic' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'China published its first balcony-solar industry standard, T/GEA 001-2026, on May 21, 2026 — issued by the Shanghai Minhang District Green Energy Industry Development Promotion Association.',
          'Core drafting enterprises included Hoymiles (昱能科技) and Trina Solar\'s residential brand (天合富家, "Trina Household"), alongside three industry associations spanning distributed solar-storage and regional new-energy committees.',
          '"Document No. 136," effective May 31, 2025, requires new renewable energy projects to sell into market-based trading rather than receive guaranteed feed-in pricing — this undercut traditional subsidized household-solar economics and created a market opening for self-consumption balcony solar.',
          '[VERIFY: single-source] Trina\'s household brand estimates ~1,000 domestic balcony solar installs in 2024, ~10,000 projected for 2025, and potentially 100,000+ by 2026 — treat as a company projection, not an official or independently confirmed figure.',
          'WattCycle, a Shenzhen-based manufacturer already covered elsewhere in this cluster for its export products, is a direct link between China\'s manufacturing base and this emerging domestic market.',
          'Chinese trade press explicitly frames this adoption curve as following Germany\'s earlier trajectory (Germany\'s 1M+ registered systems used as the reference benchmark) — an industry framing worth noting, not an independently verified conclusion.',
        ],
      },
      firstStandard: {
        id: 'first-standard',
        title: 'China\'s First Balcony Solar Standard',
        content: [
          '**On May 21, 2026, the Shanghai Minhang District Green Energy Industry Development Promotion Association published T/GEA 001-2026 ("阳台光伏质量与安全评价技术规范" — the Balcony PV Quality and Safety Evaluation Technical Standard), China\'s first industry standard specifically for balcony solar.** As an industry ("T/") standard rather than a national mandatory standard, it establishes quality and safety evaluation criteria for the category rather than imposing a wattage cap or registration process comparable to Germany\'s DIN VDE V 0126-95 or the EU\'s 800W convergence — it is a technical quality bar, not a legal permission framework.',
          'The standard was drafted jointly with the China Distributed Solar-Storage Brand Alliance, the Shandong Solar Energy Industry Association, and the New Energy Committee of the Henan Province Industry Development Research Association. Hoymiles (昱能科技) and Trina Solar\'s residential brand (天合富家, "Trina Household") were named as core drafting enterprises — both established solar-hardware manufacturers with existing product lines directly relevant to balcony solar quality and safety evaluation.',
        ],
      },
      document136: {
        id: 'document-136',
        title: 'The Policy Driver: Document No. 136',
        content: [
          '**China\'s "Document No. 136" (国家发改委/国家能源局《关于深化新能源上网电价市场化改革促进新能源高质量发展的通知》), effective from May 31, 2025, requires new renewable energy projects\' generation to enter market-based trading rather than receive guaranteed feed-in pricing.** This is a broad renewable-energy policy shift, not a balcony-solar-specific measure — but it has a direct knock-on effect on the category: it undermined the traditional economics of household solar built around selling excess generation back to the grid for a subsidized, guaranteed price.',
          'That shift creates a market opening for self-consumption-focused systems — balcony solar, which is typically sized and marketed around direct household use rather than grid export, benefits from a policy environment where the old subsidy-driven model no longer applies. The emergence of T/GEA 001-2026 roughly a year after Document No. 136 took effect is consistent with this timing, though this page treats that as contextual correlation rather than a directly sourced causal claim.',
        ],
      },
      marketSize: {
        id: 'market-size',
        title: 'Market Size: Early and Single-Sourced',
        content: [
          '**Market-size estimates for China\'s domestic balcony solar adoption come from a single source — Trina Solar\'s household brand (天合富家) — and should be treated as a company projection, not an independently verified or official figure.** That estimate: roughly 1,000 units installed in China in 2024, approximately 10,000 projected for 2025, and potentially 100,000+ for 2026.',
          'Chinese trade press coverage explicitly frames this trajectory as following Germany\'s earlier balcony-solar adoption curve, using Germany\'s 1M+ registered systems as the reference benchmark for where the category could eventually head in China. This framing should be attributed to the source making the comparison, not treated as this page\'s own independent conclusion — the actual scale and trajectory of China\'s domestic market remains to be confirmed by independent data as it develops.',
        ],
        callouts: [
          { type: 'warning', text: '[VERIFY: single-company estimate] The 1,000 / 10,000 / 100,000+ installation figures for 2024-2026 come from Trina\'s household brand alone — no independent or official ANEEL-style national statistics agency figure was found to corroborate this.' },
        ],
      },
      hubVsDomestic: {
        id: 'hub-vs-domestic',
        title: 'Manufacturing Hub vs. Domestic Market',
        content: [
          '**This page covers China as a domestic adoption market — a distinct topic from China\'s well-established role as the world\'s largest balcony solar manufacturing and export hub, which is covered elsewhere in this cluster.** Export-side coverage in this cluster (the 2026 export-tax rebate removal, Section 301 tariffs, and Shenzhen-based brands like Anker, EcoFlow, Zendure, BYD, Growatt, and Marstek) concerns China\'s manufacturing base selling into markets like the US and EU, not domestic Chinese households buying and installing balcony solar for their own use. The two are related but separate stories.',
          'One direct link between them: WattCycle, a Shenzhen-based manufacturer already referenced elsewhere in this cluster for its export products, sits at the intersection of China\'s manufacturing base and this emerging domestic market — a genuine connection between two already-researched facts, not a coincidence of geography alone.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Does China have a balcony solar standard?', a: 'Yes — T/GEA 001-2026, published May 21, 2026 by the Shanghai Minhang District Green Energy Industry Development Promotion Association, is China\'s first industry standard specifically for balcony solar quality and safety evaluation. It is an industry standard, not a national mandatory law with a wattage cap.' },
          { q: 'Who drafted China\'s balcony solar standard?', a: 'The China Distributed Solar-Storage Brand Alliance, the Shandong Solar Energy Industry Association, and the New Energy Committee of the Henan Province Industry Development Research Association, with Hoymiles and Trina Solar\'s household brand (天合富家) as core drafting enterprises.' },
          { q: 'Why is balcony solar growing in China now?', a: '"Document No. 136," effective May 31, 2025, requires new renewable energy projects to sell into market-based trading rather than receive guaranteed feed-in pricing. This undercut the traditional economics of subsidized household solar built around grid export, opening a market case for self-consumption-focused balcony solar instead.' },
          { q: 'How big is the domestic balcony solar market in China?', a: '[VERIFY: single-source estimate] Trina Solar\'s household brand estimates roughly 1,000 units installed in 2024, ~10,000 projected for 2025, and potentially 100,000+ by 2026 — a company projection, not an independently confirmed or official figure.' },
          { q: 'Is this the same as China\'s balcony solar export business?', a: 'No. This page covers domestic Chinese adoption; China\'s role as the dominant global manufacturer and exporter of balcony solar hardware (covered elsewhere in this cluster) is a separate, already well-established story.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Balcony Solar Payback: Is It Worth It?](/balcony-solar/balcony-solar-payback-worth-it-2026) — covers China\'s export-tax rebate changes affecting hardware pricing',
          '[EcoFlow vs. Anker vs. Zendure Balcony Solar](/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar) — Shenzhen-based export brand comparison',
          '[Is Balcony Solar Legal? A Country-by-Country Guide](/balcony-solar/is-balcony-solar-legal-country-guide) — global legal tracker',
        ],
      },
    },
  },
}
