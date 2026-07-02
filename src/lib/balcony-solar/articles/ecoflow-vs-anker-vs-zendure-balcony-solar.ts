// Slug: ecoflow-vs-anker-vs-zendure-balcony-solar
// BSOL-17 — Tier 4, brand comparison, semi_annual, ★ MONEY.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-02',
    last_full_refresh: '2026-07-02',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra', 'Zendure SolarFlow', 'Anker SOLIX Solarbank'],
    theme: 'Balcony Solar Money Pages',
    title: 'EcoFlow vs. Anker vs. Zendure: Balcony Solar Ecosystem Compared',
    seoTitle: 'EcoFlow vs. Anker vs. Zendure Balcony Solar (2026)',
    intro: 'These three brands dominate the balcony-solar-with-storage conversation, but they\'re not interchangeable — one isn\'t even sold in the US, and the other two take opposite approaches to cloud vs. local control.',
    metaDescription: 'EcoFlow vs. Anker vs. Zendure for balcony solar: ecosystem comparison, cloud vs. local monitoring per brand, and US availability — verified July 2026.',
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '9 min read',
    educationalLevel: 'Advanced',
    audience: 'Balcony solar buyers comparing EcoFlow, Anker, and Zendure ecosystems',
    primaryTerm: 'ecoflow vs anker vs zendure',
    targetKeywords: ['ecoflow vs anker vs zendure', 'zendure solarflow home assistant', 'anker solix balcony solar us', 'ecoflow stream ultra vs zendure'],
    leadAnswerBlock: '**Anker SOLIX Solarbank models are not sold or certified for the US market — confirmed directly against Anker\'s own US storefront (ankersolix.com), which lists 17 portable power-station products but no Solarbank, plus the absence of any UL 1741 grid-interactive inverter certification, which is legally required for grid-connected sale in the US.** Between the two brands that are US-viable, EcoFlow\'s STREAM Ultra leads on raw specs but requires its cloud app with no verified local-API path, while Zendure\'s SolarFlow line has the most mature local-control ecosystem of any balcony battery brand, via community zenSDK REST API integrations that need no cloud account at all.',
    quickAnswerTop: {
      en: {
        question: 'Which balcony solar ecosystem should I choose: EcoFlow, Anker, or Zendure?',
        answer: 'If you\'re in the US, Anker SOLIX isn\'t an option — it\'s not sold or certified for this market. Between EcoFlow and Zendure: choose EcoFlow\'s STREAM Ultra for the strongest raw specs (currently Utah-only for installation), or Zendure\'s SolarFlow line if local control without a cloud account is your priority, since it has the most mature open-source Home Assistant integration of the three brands.',
        bullets: [
          'Anker SOLIX: not sold or certified for the US market — rule it out immediately for US buyers',
          'EcoFlow STREAM Ultra: strongest specs (1.92–11.52 kWh), cloud app required, currently Utah-only for installation',
          'Zendure SolarFlow: most mature local-control ecosystem — community zenSDK REST API integrations, no cloud required',
          'Cloud-vs-local is the clearest differentiator between EcoFlow and Zendure — the two are not equivalent on this axis',
          'None of the three has a US-verified local-API path confirmed for EcoFlow specifically — treat that gap as real, not an oversight',
        ],
        updatedDate: '2026-07-02',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Ecosystem Comparison Table', anchor: '#comparison-table' },
      { label: 'Cloud vs. Local Per Brand', anchor: '#cloud-vs-local' },
      { label: 'Why Isn\'t Anker Available in the US?', anchor: '#trade-note' },
      { label: 'Price & Warranty by Region', anchor: '#price-warranty' },
      { label: 'Verdict by Use Case', anchor: '#verdict' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Anker SOLIX Solarbank models are not sold or certified for the US market — rule this brand out immediately if you\'re shopping from the US.',
          'EcoFlow\'s STREAM Ultra has the strongest specs of the US-viable options (1.92 kWh, expandable to 11.52 kWh) but requires its cloud app — no verified local-API path was found for EcoFlow.',
          'Zendure\'s SolarFlow line has the most mature local-control ecosystem of any balcony battery brand — community-built zenSDK REST API integrations give full Home Assistant control with no cloud account, MQTT bridge, or HACS dependency required.',
          'Cloud-vs-local is the single clearest differentiator between the two US-viable brands — don\'t assume they\'re interchangeable on this dimension just because their hardware specs are comparable.',
          'EcoFlow\'s STREAM Ultra is currently sold and installable only in Utah, a meaningful availability constraint independent of the cloud/local question.',
          'This comparison covers three brands specifically because they\'re the ones most commonly searched together — it\'s not an exhaustive market survey.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Ecosystem Comparison Table',
        rows: [
          { brand: 'EcoFlow (STREAM Ultra)', usAvailability: 'Utah only', control: 'Cloud app (no verified local API)', capacity: '1.92–11.52 kWh' },
          { brand: 'Anker (SOLIX Solarbank)', usAvailability: 'Not sold/certified in US', control: 'N/A for US buyers', capacity: 'N/A for US buyers' },
          { brand: 'Zendure (SolarFlow)', usAvailability: 'Check current state legality per model', control: 'Local zenSDK REST API (no cloud)', capacity: 'Varies by model (Hub 1200/2000, Hyper)' },
        ],
        columns: ['brand', 'usAvailability', 'control', 'capacity'],
        tableFormat: true,
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: 'Cloud vs. Local Per Brand',
        content: [
          '**Zendure is the clear choice if local control matters to you — its SolarFlow line has community-built zenSDK REST API integrations that give Home Assistant full local control with no cloud account, MQTT bridge, or HACS dependency required, the most mature setup of any balcony battery brand covered in this guide.** EcoFlow, by contrast, generally requires its cloud app for monitoring and control; no verified local-API path was found for the STREAM series specifically, which is a real gap if a no-cloud setup is a hard requirement for you rather than a preference.',
          'Anker\'s local-control story is moot for US buyers regardless of its merits elsewhere, since SOLIX Solarbank models aren\'t sold or certified for this market at all.',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: 'Why Isn\'t Anker Available in the US?',
        content: [
          '**Anker\'s absence from the US Solarbank market reads as a genuine certification and regulatory gap — no UL 1741 listing, no FCC equipment authorization filed — rather than a deliberate trade-policy block; Anker has scoped its recent Solarbank launches (including the Solarbank 4 Pro, unveiled in Berlin with pre-orders opened June 2026) explicitly to Germany, Austria, and the EU, with press coverage noting only that North America may follow "later," with no stated date.** Anker, EcoFlow, and Zendure are all China-manufactured (Shenzhen-based) brands, so the April 2026 China PV-component export-tax rebate removal affecting component costs applies to all three regardless of where final assembly or branding happens — Anker\'s US absence specifically is a separate, certification-driven issue, not a symptom of that trade dynamic.',
        ],
      },
      priceWarranty: {
        id: 'price-warranty',
        title: 'Price & Warranty by Region',
        content: [
          '**EcoFlow\'s STREAM Ultra is priced at $1,279 (list $1,899) with a 10-year warranty on its LFP cells, rated for 6,000 cycles at 70% capacity retention — pulled directly from EcoFlow\'s own US product page (us.ecoflow.com/products/stream-ultra) at write-time, 2026-07-02.** Zendure\'s SolarFlow line was not independently priced in this research pass; check current pricing directly given how quickly this product category moves. Anker\'s pricing is not applicable here given its confirmed absence from the US market.',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict by Use Case',
        content: [
          '**If you\'re in Utah and want the strongest specs available today, EcoFlow\'s STREAM Ultra is the pick.** If local control without a cloud account is a hard requirement, Zendure\'s SolarFlow line is the stronger choice given its mature zenSDK integration ecosystem. If you\'re outside the US, Anker SOLIX becomes viable and worth researching separately — this guide\'s US-market focus doesn\'t cover its merits there.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        links: [
          { url: 'https://us.ecoflow.com/products/stream-ultra', title: 'EcoFlow STREAM Ultra — official US product page', description: 'Pricing, specs, and Utah-only installation restriction, pulled directly at write-time' },
          { url: 'https://ankersolix.com', title: 'Anker SOLIX US storefront', description: 'Confirms Solarbank is absent from the 17-product US catalog as of write-time' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Can I buy Anker SOLIX for balcony solar in the US?', a: 'No — Anker SOLIX Solarbank models are not sold or certified for the US market, despite wide availability in Europe. This is a common point of confusion for US buyers researching this comparison.' },
          { q: 'Does EcoFlow have a local API for Home Assistant?', a: 'No verified local-API path was found for EcoFlow\'s STREAM series in this research — it generally requires the cloud app for monitoring and control, unlike Zendure.' },
          { q: 'Which brand has the best Home Assistant integration?', a: 'Zendure — its SolarFlow line has community-built zenSDK REST API integrations offering full local control with no cloud account, MQTT bridge, or HACS dependency required.' },
          { q: 'Is EcoFlow\'s STREAM Ultra available outside Utah?', a: 'Not currently for plug-and-play installation — EcoFlow\'s own product page confirms it\'s sold and installable only in Utah as of write-time.' },
          { q: 'Are these the only three balcony solar brands worth considering?', a: 'No — this comparison covers these three specifically because they\'re the most commonly searched together, not because they\'re an exhaustive survey of the market. See the dedicated kit, battery, and microinverter buyer\'s guides for broader coverage.' },
          { q: 'How much does Zendure\'s SolarFlow cost?', a: 'Not independently priced in this research pass — check current pricing directly, since this product category and its pricing move quickly.' },
          { q: 'Is Anker a bad brand for balcony solar generally?', a: 'This guide can\'t assess that for US buyers specifically since the product isn\'t sold or certified here — its merits or drawbacks in markets where it is available (e.g. Europe) aren\'t covered by this US-focused comparison.' },
          { q: 'Which is the safer bet if I want to avoid vendor lock-in?', a: 'Zendure\'s local-API approach reduces dependency on the vendor\'s own cloud infrastructure specifically, which is a meaningful form of avoiding lock-in even though it doesn\'t address other lock-in factors like proprietary hardware connectors.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'EcoFlow vs. Anker vs. Zendure: Balcony Solar Ecosystem Compared',
      description: 'EcoFlow vs. Anker vs. Zendure for balcony solar: ecosystem comparison, cloud vs. local monitoring per brand, and US availability — verified July 2026.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      url: 'https://www.promptquorum.com/balcony-solar/ecoflow-vs-anker-vs-zendure-balcony-solar',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: { '@type': 'Audience', audienceType: 'Balcony solar buyers comparing EcoFlow, Anker, and Zendure ecosystems' },
      about: ['EcoFlow STREAM Ultra', 'Zendure SolarFlow', 'Anker SOLIX', 'Balcony solar battery comparison'],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'EcoFlow STREAM Ultra', description: 'Strongest specs among US-viable options; cloud app required; Utah-only.' },
        { '@type': 'ListItem', position: 2, name: 'Zendure SolarFlow', description: 'Most mature local-control ecosystem; no cloud account required.' },
        { '@type': 'ListItem', position: 3, name: 'Anker SOLIX Solarbank', description: 'Not sold or certified for the US market.' },
      ],
    },
  },
};
