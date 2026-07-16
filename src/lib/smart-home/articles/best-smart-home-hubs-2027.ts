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
    title: 'Best Smart Home Hubs for Local Control (2027)',
    seoTitle: 'Best Smart Home Hubs (2027)',
    intro:
      'This guide compares off-the-shelf hub appliances (Home Assistant Green-class devices, Hubitat, Homey) for buyers who want ready-to-run hardware rather than assembling a mini-PC or Raspberry Pi build themselves. [VERIFY: current specific hub SKUs, their availability, and pricing] before citing a model — hub product lines change, and at least one prior hub in this space (Home Assistant Yellow) has already been discontinued. This is distinct from the ecosystem comparison (Alexa vs Google vs Apple vs Home Assistant) and the broader DIY hardware guide already on this site.',
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
      "**This guide compares dedicated hub appliances — Home Assistant Green-class devices, Hubitat, and Homey — for buyers who want ready-to-run hardware, not a DIY mini-PC or Raspberry Pi build.** [VERIFY: current specific SKUs, availability, and prices] before citing a model, since this product category has already seen at least one discontinuation (Home Assistant Yellow) and lineups change. If you want the DIY path instead, see the best hardware for a local smart home guide.",
    quickAnswerTop: {
      en: {
        question: 'What is the best off-the-shelf smart home hub?',
        answer:
          "For a ready-to-run appliance rather than a DIY build, Home Assistant Green-class devices, Hubitat, and Homey are the main dedicated hub options — each with different trade-offs in local-vs-cloud dependency, protocol support, and app ecosystem. [VERIFY: current specific model availability, pricing, and feature sets] before recommending one — this category changes, and Home Assistant Yellow was already discontinued in early 2026 per this cluster's hardware guide.",
        bullets: [
          'Home Assistant Green-class: plug-and-play access to the full Home Assistant ecosystem',
          'Hubitat: local-processing focus with its own automation engine, distinct from Home Assistant',
          'Homey: broader out-of-box protocol support in one device, distinct app ecosystem',
          '[VERIFY: current SKUs, prices, and confirmed feature sets] — this category has already seen a discontinuation',
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
          "This guide covers off-the-shelf hub appliances (Home Assistant Green-class, Hubitat, Homey) — for a DIY mini-PC/Pi build instead, see the best hardware for a local smart home guide",
          '[VERIFY: current specific SKUs, prices, and confirmed feature sets] — this category has already seen a discontinuation (Home Assistant Yellow)',
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
          'Home Assistant Green-class devices run the actual Home Assistant software — the same platform covered throughout this cluster — in a plug-and-play appliance form factor.',
          "Hubitat runs its own separate automation platform with a stated local-processing focus, distinct from Home Assistant's ecosystem and community integrations.",
          "Homey runs its own platform too, historically differentiated by broad built-in protocol support in one device. [VERIFY: current protocol support and pricing for all three] before comparing specifics.",
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
          { q: 'Is Home Assistant Yellow still available?', a: "No — Home Assistant Yellow was discontinued in early 2026, per this cluster's hardware guide. [VERIFY: current available Home Assistant hardware options] before buying." },
          { q: 'Can I add local AI or camera detection to a hub appliance?', a: "Generally, dedicated hub appliances are sized for hub duties, not additional heavy workloads — see the best hardware for a local smart home guide if you want a single box that also runs a local LLM or Frigate." },
          { q: 'Which hub has the best built-in protocol support?', a: '[VERIFY: current specific protocol support for each] — this varies by model and changes with hardware revisions, so check current specifications rather than a fixed comparison.' },
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
