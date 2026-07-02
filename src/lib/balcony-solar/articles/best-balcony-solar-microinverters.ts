// Slug: best-balcony-solar-microinverters
// BSOL-04 — Tier 1 buyer's guide, semi_annual, money page. US-first.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-02',
    last_full_refresh: '2026-07-02',
    current_hardware_mentioned: ['Hoymiles HMS-800-2T-NA', 'Deye SUN600-1000G3', 'APsystems EZ1-M'],
    theme: 'Balcony Solar Money Pages',
    title: 'Best Balcony Solar Micro-Inverters (2026): Hoymiles vs. Deye vs. APsystems',
    seoTitle: 'Best Balcony Solar Micro-Inverters 2026: Local vs. Cloud',
    intro: 'The micro-inverter is the component that actually determines whether your balcony solar system needs a cloud account to monitor — and whether it will play nicely with Home Assistant. Hoymiles, Deye, and APsystems dominate the US plug-in market, but they take very different approaches to local vs. cloud control.',
    metaDescription: 'Hoymiles, Deye, and APsystems balcony solar micro-inverters compared on price, monitoring, and local control — including the only one with a native local API, verified July 2026.',
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '9 min read',
    educationalLevel: 'Advanced',
    audience: 'DIY balcony solar buyers comparing micro-inverter brands, especially Home Assistant users',
    primaryTerm: 'balcony solar micro-inverter',
    targetKeywords: ['best balcony solar microinverter', 'hoymiles vs deye vs apsystems', 'apsystems ez1 review', 'balcony solar local api', 'ul 3700 microinverter'],
    leadAnswerBlock: '**APsystems\' EZ1-M is the only one of the three major balcony-solar micro-inverter brands (Hoymiles, Deye, APsystems) with a manufacturer-native local API — no cloud account or workaround required.** Hoymiles defaults to its S-Miles cloud platform with only DIY/reverse-engineered local access, while Deye offers an unofficial cloud-free path that depends on running an older firmware version. None of the three has a UL 3700-certified product on the market yet as of write-time.',
    quickAnswerTop: {
      en: {
        question: 'Which balcony solar micro-inverter brand has the best local control?',
        answer: 'APsystems\' EZ1-M is the clear choice for local control: it ships with an official, documented local HTTP API (enabled via Bluetooth: Settings > Local Mode) and a manufacturer-adjacent open-source Home Assistant integration that requires no cloud account. Hoymiles and Deye both default to cloud monitoring, with only unofficial or firmware-dependent local workarounds.',
        bullets: [
          'APsystems EZ1-M: $325 direct from APsystems\' US store, native local API, official-style Home Assistant integration',
          'Hoymiles HMS-800-2T-NA: ~$279–290, S-Miles cloud is the intended path, local access only via community Modbus/DTU workarounds',
          'Deye SUN600–1000G3: local access exists via community tooling but depends on an older firmware version that newer updates may remove',
          'No brand has a UL 3700-certified product yet — the standard launched Jan 2026 but certification testing is still pending industry-wide',
          'All three carry pre-existing UL 1741 / IEEE 1547 grid-interconnection compliance, which is separate from and older than UL 3700',
        ],
        updatedDate: '2026-07-02',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'What Does a Micro-Inverter Do?', anchor: '#what-it-does' },
      { label: 'Hoymiles vs. Deye vs. APsystems: How We Compared Them', anchor: '#how-we-chose' },
      { label: 'Cloud vs. Local Monitoring: The No-Cloud Angle', anchor: '#cloud-vs-local' },
      { label: 'Grid-Code Compliance: UL 1741, IEEE 1547, and UL 3700', anchor: '#grid-code' },
      { label: 'Comparison Table', anchor: '#comparison-table' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'APsystems EZ1-M ($325, direct from APsystems US) is the only major brand with a manufacturer-native local API — no cloud account or reverse engineering required.',
          'Hoymiles HMS-800-2T-NA (~$279–290) defaults to S-Miles cloud monitoring; local access exists only through community DTU/Modbus workarounds, not an official feature.',
          'Deye SUN600–1000G3 has a documented cloud-free community tool, but it depends on an older firmware version (~1.57) that newer updates may lock out — verify your unit\'s firmware before assuming local access.',
          'No micro-inverter from any brand has achieved UL 3700 certification as of write-time (Jul 2026) — the standard launched Jan 2026 but certification testing is still pending across the industry.',
          'All three brands already carry UL 1741 and IEEE 1547 compliance, the pre-existing grid-interconnection standards — these are not the same thing as UL 3700 and predate it by years.',
          'For a genuinely no-cloud setup, hardware choice matters more than software configuration — Home Assistant cannot add local access to a device that doesn\'t expose it.',
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'What Does a Micro-Inverter Do?',
        content: [
          '**A micro-inverter converts the direct current (DC) your solar panel produces into the alternating current (AC) your home\'s outlets and appliances use, and synchronizes that output with your grid connection\'s voltage and frequency.** For balcony solar, it also typically handles the monitoring layer — reporting production data to whatever app or dashboard the manufacturer provides.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'A micro-inverter converts solar panel DC output into grid-synchronized AC power your home can use directly.' },
          { type: 'plain-terms', text: 'It\'s the translator between what your panel makes (DC) and what your outlets expect (AC) — without it, the panel\'s output is unusable in a standard home.' },
        ],
      },
      howWeChose: {
        id: 'how-we-chose',
        title: 'Hoymiles vs. Deye vs. APsystems: How We Compared Them',
        content: [
          '**We evaluated each brand on three criteria: current US availability and price, whether local (non-cloud) monitoring is an official supported feature or an unofficial workaround, and pre-existing grid-code compliance.** Hoymiles and Deye are established, high-volume brands; APsystems entered direct US retail more recently but ships hardware built specifically around local control.',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: 'Cloud vs. Local Monitoring: The No-Cloud Angle',
        content: [
          '**If local control is your priority, APsystems\' EZ1-M is the only one of the three with a documented, manufacturer-supported local HTTP API — enabled directly on the device via Bluetooth (Settings > Local Mode) with no cloud account needed at all.** An open-source, manufacturer-adjacent Home Assistant integration is built directly against that local API, so setup doesn\'t require reverse engineering.',
          '**Hoymiles routes monitoring through its S-Miles Cloud platform by default**, and while community tools exist to pull data locally via the DTU\'s Modbus (RS485/RTU or TCP) support, these are DIY workarounds rather than an officially documented local mode — expect more setup effort and less vendor support if something breaks.',
          '**Deye\'s SUN600–1000G3 line is monitored via the SOLARMAN cloud platform** (a shared platform used across many budget-inverter brands, not Deye-exclusive), but an open-source community project documents a genuinely cloud-free local reading method via Modbus. The catch: it depends on an older firmware version (~1.57), and newer firmware updates may remove this access — check your specific unit\'s firmware before counting on it.',
        ],
        callouts: [
          { type: 'warning', text: 'Firmware updates can change local-access behavior after purchase. What works today on a specific Deye or Hoymiles unit is not guaranteed to keep working after the next update.' },
        ],
      },
      gridCode: {
        id: 'grid-code',
        title: 'Grid-Code Compliance: UL 1741, IEEE 1547, and UL 3700',
        content: [
          '**UL 1741 and IEEE 1547 are the long-established US grid-interconnection standards that Hoymiles, Deye, and APsystems micro-inverters already comply with — UL 3700 is a newer, separate, balcony-solar-specific standard that launched in January 2026 and is not yet yielding certified products from any brand.** Do not confuse a product\'s existing UL 1741/IEEE 1547 compliance with UL 3700 certification; they are different standards covering different scope, and as of write-time no micro-inverter has completed UL 3700 certification testing.',
          'This is a fast-moving area — UL Solutions opened the certification program in January 2026 and certified products are expected to start appearing later in 2026, so re-verify current status before publishing or relying on this claim in the future.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Comparison Table',
        rows: [
          { brand: 'Hoymiles', model: 'HMS-800-2T-NA', price: '~$279–290', monitoring: 'S-Miles Cloud (default); local via DIY Modbus/DTU workarounds', ul3700: 'Not certified' },
          { brand: 'Deye', model: 'SUN600–1000G3', price: 'US price uncertain — EU pricing found only', monitoring: 'SOLARMAN Cloud (default); unofficial cloud-free local tool, firmware-dependent', ul3700: 'Not certified' },
          { brand: 'APsystems', model: 'EZ1-M', price: '$325 (direct, APsystems US)', monitoring: 'Native local API (official) + optional cloud', ul3700: 'Not certified' },
        ],
        columns: ['brand', 'model', 'price', 'monitoring', 'ul3700'],
        tableFormat: true,
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Which balcony solar micro-inverter works with Home Assistant without a cloud account?', a: 'APsystems\' EZ1-M is the only one of the three major brands with a manufacturer-native local API and an official-style open-source Home Assistant integration that requires no cloud account.' },
          { q: 'Is Hoymiles or Deye completely cloud-locked?', a: 'Not completely — both have community-developed local access methods (Modbus-based for Hoymiles\' DTU, a cloud-free tool for Deye), but neither is an officially documented manufacturer feature, and Deye\'s depends on an older firmware version.' },
          { q: 'Does UL 3700 certification exist yet for any micro-inverter?', a: 'No. As of write-time, no product from any brand has completed UL 3700 certification — the standard launched in January 2026 and certification testing is still pending industry-wide.' },
          { q: 'Are Hoymiles, Deye, and APsystems micro-inverters safe to use without UL 3700 certification?', a: 'They already carry UL 1741 and IEEE 1547 compliance, the established grid-interconnection safety standards that predate UL 3700 by years. UL 3700 is a newer, additional, balcony-solar-specific standard — its absence doesn\'t mean the hardware is uncertified generally.' },
          { q: 'Can I buy a micro-inverter separately from a full balcony solar kit?', a: 'Yes — all three brands covered here sell micro-inverters as standalone components for DIY setups, not only as part of bundled kits.' },
          { q: 'Will a firmware update break my micro-inverter\'s local access?', a: 'It can, particularly for Deye units relying on the community cloud-free tool tied to an older firmware version. Check current community reports for your specific model before assuming local access will persist.' },
          { q: 'What\'s the price difference between these three brands?', a: 'Hoymiles runs roughly $279–290 for its HMS-800-2T-NA model. APsystems\' EZ1-M is priced at $325 direct from the manufacturer. Deye\'s US pricing was not reliably found at write-time — only EU pricing was available.' },
          { q: 'Do I need an electrician to install a micro-inverter?', a: 'For plug-in balcony solar kits, typically no in markets that permit self-installation — but always confirm local regulations, since requirements vary by country and, in the US, by state.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Balcony Solar Micro-Inverters (2026): Hoymiles vs. Deye vs. APsystems',
      description: 'Hoymiles, Deye, and APsystems balcony solar micro-inverters compared on price, monitoring, and local control — including the only one with a native local API, verified July 2026.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      url: 'https://www.promptquorum.com/balcony-solar/best-balcony-solar-microinverters',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: { '@type': 'Audience', audienceType: 'DIY balcony solar buyers comparing micro-inverter brands, especially Home Assistant users' },
      about: ['Balcony solar', 'Micro-inverter', 'Hoymiles', 'Deye', 'APsystems', 'UL 3700', 'Home Assistant'],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'APsystems EZ1-M', description: 'Best for local control — native local API, no cloud account required. $325 direct from APsystems US.' },
        { '@type': 'ListItem', position: 2, name: 'Hoymiles HMS-800-2T-NA', description: 'Widely available, ~$279–290; cloud-first monitoring via S-Miles, local access is a DIY workaround.' },
        { '@type': 'ListItem', position: 3, name: 'Deye SUN600–1000G3', description: 'Community-documented cloud-free local access exists but is firmware-version-dependent; US pricing uncertain.' },
      ],
    },
  },
};
