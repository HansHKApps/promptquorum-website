import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    affiliateDisclosure: true,
    // Verified 2026-07-16 against official sources: home-assistant.io/green (Home Assistant Green,
    // $199 — Nabu Casa raised the price twice from a $99 2023 launch, citing RAM component costs),
    // hubitat.com (Elevation C-8 Pro, $179.95, Zigbee 3.0/Z-Wave 800 LR/Matter 1.5 controller/BLE),
    // homey.app (Homey Pro, $449 as of a June 1 2026 price increase from $399, Wi-Fi/BLE/Matter
    // v1.3/Thread border router/Zigbee 3.0/Z-Wave 700/433MHz/IR — the broadest protocol coverage of
    // the three).
    title: 'Best Smart Home Hubs for Local Control (2027)',
    seoTitle: 'Best Smart Home Hubs (2027)',
    intro:
      'This guide compares off-the-shelf hub appliances (Home Assistant Green, Hubitat Elevation C-8 Pro, Homey Pro) for buyers who want ready-to-run hardware rather than assembling a mini-PC or Raspberry Pi build themselves. All three are confirmed current products with current prices (checked 2026-07-16) — and two of the three have already had a price increase in 2026, on top of Home Assistant Yellow\'s prior discontinuation, underscoring how fast this category moves. This is distinct from the ecosystem comparison (Alexa vs Google vs Apple vs Home Assistant) and the broader DIY hardware guide already on this site.',
    metaDescription:
      "Best smart home hubs for local control in 2027: off-the-shelf hub appliances compared, for buyers who want ready-to-run hardware over a DIY mini-PC build.",
    twitterDescription:
      'Comparing off-the-shelf smart home hub appliances for local control — for buyers who want plug-and-play hardware, not a DIY mini-PC build.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    audience: 'Smart home buyers who want a ready-to-run hub appliance rather than a DIY hardware build',
    primaryTerm: 'best smart home hub 2027',
    targetKeywords: [
      'best smart home hub 2027',
      'home assistant green vs hubitat vs homey',
      'ready to run smart home hub',
      'off the shelf home assistant hub',
      'smart home hub appliance',
    ],
    leadAnswerBlock:
      "**This guide compares dedicated hub appliances — Home Assistant Green ($199), Hubitat Elevation C-8 Pro ($179.95), and Homey Pro ($449) — for buyers who want ready-to-run hardware, not a DIY mini-PC or Raspberry Pi build.** All three prices confirmed directly from the manufacturers on 2026-07-16; this category moves fast, with Home Assistant Yellow already discontinued and two of these three hubs raising prices earlier in 2026. If you want the DIY path instead, see the best hardware for a local smart home guide.",
    quickAnswerTop: {
      en: {
        question: 'What is the best off-the-shelf smart home hub?',
        answer:
          "For a ready-to-run appliance rather than a DIY build, Home Assistant Green ($199), Hubitat Elevation C-8 Pro ($179.95), and Homey Pro ($449) are the three current dedicated hub options — each with different trade-offs. Home Assistant Green runs the actual Home Assistant software you'd otherwise self-host; Nabu Casa raised its price twice in 2026 (from a $99 2023 launch) citing RAM component costs. Hubitat's C-8 Pro runs its own local-processing-focused platform with Zigbee 3.0, Z-Wave 800 Long Range, and Matter 1.5 controller support. Homey Pro has the broadest built-in radio support of the three (Wi-Fi, Bluetooth, Matter, Thread border router, Zigbee, Z-Wave, 433MHz, infrared) but also runs its own separate platform, and its price rose from $399 to $449 on June 1, 2026.",
        bullets: [
          'Home Assistant Green ($199): plug-and-play access to the full Home Assistant ecosystem',
          'Hubitat Elevation C-8 Pro ($179.95): local-processing focus, Zigbee 3.0/Z-Wave 800 LR/Matter 1.5, own automation engine',
          'Homey Pro ($449): broadest out-of-box protocol support (adds Thread border router, 433MHz, IR), own app ecosystem',
          'All three prices confirmed 2026-07-16 — this category has already seen a discontinuation (HA Yellow) and two 2026 price increases',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Hub Appliance vs DIY Build', anchor: 'appliance-vs-diy' },
      { label: 'What Differs Between Hubs', anchor: 'what-differs' },
      { label: 'How This Differs From the Ecosystem Comparison', anchor: 'differs-from-ecosystem' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Off-the-shelf smart home hub appliances (Home Assistant Green-class, Hubitat, Homey) trade DIY flexibility for ready-to-run hardware — verify current specific SKUs and pricing before buying, since this category has already seen a discontinuation.' },
      { type: 'plain-terms', content: 'Instead of building your own smart home hub from a mini PC or Raspberry Pi, you can buy a device made specifically for this — plug it in and it\'s already set up to run. This guide compares those ready-made options, separate from the general software-platform comparison (Alexa vs Google vs Home Assistant) already on this site.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          "This guide covers off-the-shelf hub appliances — Home Assistant Green ($199), Hubitat Elevation C-8 Pro ($179.95), Homey Pro ($449) — for a DIY mini-PC/Pi build instead, see the best hardware for a local smart home guide",
          'All 3 prices confirmed directly from manufacturers 2026-07-16 — this category has already seen a discontinuation (Home Assistant Yellow) and 2 price increases in 2026 alone',
          'Different from the ecosystem comparison guide, which compares software platforms (Alexa, Google, Apple, Home Assistant), not hub hardware',
          'Priorities to compare: local-processing depth, protocol support (Zigbee/Z-Wave/Thread/Matter), and whether the app ecosystem locks you in',
        ],
      },
      applianceVsDiy: {
        id: 'appliance-vs-diy',
        title: 'Hub Appliance vs DIY Build',
        content:
          '**A dedicated hub appliance is ready to run out of the box; a DIY mini-PC or Raspberry Pi build (see the best hardware guide) offers more flexibility and headroom to add local AI, at the cost of more setup effort.**',
        items: [
          'Choose an appliance if you want the simplest path to a working local-first smart home without researching individual hardware components.',
          'Choose a DIY build if you want to run additional workloads on the same box — a local LLM, Frigate camera detection with a dedicated accelerator — since a dedicated hub appliance is typically not sized for that.',
          'Both paths can run Home Assistant\'s software; the difference is packaged hardware versus assembled hardware, not a different software experience for Home Assistant specifically (Hubitat and Homey run their own separate platforms).',
        ],
      },
      whatDiffers: {
        id: 'what-differs',
        title: 'What Differs Between Hubs',
        content:
          '**The main differences between hub appliances are which software platform they run (Home Assistant vs a proprietary platform), built-in protocol radios, and how much local processing versus cloud dependency each requires.**',
        items: [
          "Home Assistant Green ($199, confirmed on home-assistant.io) runs the actual Home Assistant software — the same platform covered throughout this cluster — in a plug-and-play appliance form factor. Nabu Casa has raised its price twice in 2026 from an original $99 at 2023 launch, citing rising RAM component costs.",
          "Hubitat's Elevation C-8 Pro ($179.95, confirmed on hubitat.com) runs its own separate automation platform with a stated local-processing focus, supporting Zigbee 3.0, Z-Wave 800 Long Range, Matter 1.5 (as a controller), and Bluetooth — distinct from Home Assistant's ecosystem and community integrations.",
          "Homey Pro ($449, confirmed on homey.app — raised from $399 on June 1, 2026) runs its own platform too, with the broadest built-in protocol support of the three: Wi-Fi, Bluetooth, Matter v1.3, Thread border router, Zigbee 3.0, Z-Wave 700, 433MHz, and infrared, on a 1.5GHz quad-core processor with 4GB RAM.",
        ],
        affiliateLinks: [
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
          { label: 'Hubitat Elevation C-8 Pro', url: 'https://hubitat.com/products/7194320273451', productName: 'Hubitat Elevation C-8 Pro', productCategory: 'Smart home hub' },
          { label: 'Homey Pro', url: 'https://homey.app/en-us/homey-pro/', productName: 'Homey Pro', productCategory: 'Smart home hub' },
        ],
      },
      differsFromEcosystem: {
        id: 'differs-from-ecosystem',
        title: 'How This Differs From the Ecosystem Comparison',
        content:
          '**The ecosystem comparison guide compares software platforms and their voice assistants (Alexa, Google Home, Apple Home, Home Assistant); this guide compares physical hub hardware for buyers who\'ve already decided they want a dedicated appliance.**',
        items: [
          'Read the ecosystem comparison first if you\'re deciding which platform/voice-assistant approach fits you.',
          'Read this guide once you know you want a dedicated hub appliance and need to choose the physical hardware.',
          'Read the best hardware for a local smart home guide instead if you\'d rather build a mini-PC/Pi hub yourself.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Is a hub appliance better than a DIY mini-PC build?', a: 'Neither is universally better — an appliance is simpler to set up; a DIY build offers more flexibility for additional workloads like a local LLM or Frigate camera detection. Choose based on whether you want simplicity or headroom.' },
          { q: 'Do Hubitat and Homey run Home Assistant software?', a: 'No — they run their own separate automation platforms, distinct from Home Assistant. This is an important distinction from a Home Assistant Green-class device, which runs the actual Home Assistant software.' },
          { q: 'Is Home Assistant Yellow still available?', a: "No — Home Assistant Yellow was discontinued in early 2026. Home Assistant Green ($199, confirmed on home-assistant.io) is the current official appliance option." },
          { q: 'Can I add local AI or camera detection to a hub appliance?', a: "Generally, dedicated hub appliances are sized for hub duties, not additional heavy workloads — see the best hardware for a local smart home guide if you want a single box that also runs a local LLM or Frigate." },
          { q: 'Which hub has the best built-in protocol support?', a: "Homey Pro ($449) has the broadest confirmed radio support of the three — Wi-Fi, Bluetooth, Matter v1.3, Thread border router, Zigbee 3.0, Z-Wave 700, 433MHz, and infrared. Hubitat's C-8 Pro ($179.95) covers Zigbee 3.0, Z-Wave 800 Long Range, Matter 1.5 (controller), and Bluetooth. Home Assistant Green ($199) relies on USB dongles (see the Zigbee/Thread dongles guide) for radio support rather than building it all in." },
          { q: 'Have these hub prices changed recently?', a: 'Yes — both Home Assistant Green (twice in 2026, from an original $99 at 2023 launch) and Homey Pro (from $399 to $449 on June 1, 2026) have raised prices this year, both manufacturers citing rising component costs.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Smart Home Ecosystems Compared](/smart-home/smart-home-ecosystems-compared) — the software/platform comparison, not hardware',
          '[Best Hardware for a Local Smart Home + Local AI](/smart-home/best-hardware-for-local-smart-home) — the DIY mini-PC/Pi alternative',
          "[IKEA's Matter Ecosystem: Complete Guide](/smart-home/ikea-matter-ecosystem-guide-2027) — a budget device-plus-hub alternative",
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Smart Home Hubs for Local Control (2027)',
      description: 'Best smart home hubs for local control: off-the-shelf hub appliances compared, for buyers who want ready-to-run hardware.',
      url: 'https://www.promptquorum.com/smart-home/best-smart-home-hubs-2027',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Smart home hub' }, { '@type': 'Thing', name: 'Home Assistant Green' }, { '@type': 'Thing', name: 'Hubitat' }, { '@type': 'Thing', name: 'Homey' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Is a hub appliance better than a DIY mini-PC build?', acceptedAnswer: { '@type': 'Answer', text: 'Neither is universally better — an appliance is simpler; a DIY build offers more flexibility for additional workloads.' } },
        { '@type': 'Question', name: 'Do Hubitat and Homey run Home Assistant software?', acceptedAnswer: { '@type': 'Answer', text: 'No — they run their own separate automation platforms, distinct from Home Assistant.' } },
        { '@type': 'Question', name: 'Is Home Assistant Yellow still available?', acceptedAnswer: { '@type': 'Answer', text: 'No — Home Assistant Yellow was discontinued in early 2026.' } },
      ],
    },
  },
}
