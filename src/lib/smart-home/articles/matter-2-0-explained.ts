import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: '2027 Protocols & Regulation',
    title: "Matter 2.0 Explained: What's New (2027)",
    seoTitle: 'Matter 2.0 Explained (2027)',
    intro:
      'Matter 2.0 is a spec revision to the Matter smart home standard, adding new device types (including the energy-management types covered elsewhere in this cluster) while remaining backward-compatible with 1.x devices. [VERIFY: the current spec version number and exact ratification date at time of writing] before treating "2.0" as the confirmed current designation. This article explains what changed at the spec level and how it differs from the general protocol primer and local-control guide already on this site.',
    metaDescription:
      "What's new in Matter 2.0: new device types, backward compatibility with 1.x, and what it means for existing Matter devices. [VERIFY current spec version before publishing.]",
    twitterDescription:
      "Matter's spec update explained: new device types, backward compatibility, and how it differs from the general Matter/Thread/Zigbee primer already on this site.",
    readTime: '6 min read',
    educationalLevel: 'Intermediate',
    audience: 'Smart home owners and Home Assistant users tracking what changed in the Matter specification',
    primaryTerm: 'matter 2.0 smart home',
    targetKeywords: [
      'matter 2.0 smart home',
      'what is new in matter 2.0',
      'matter spec update',
      'matter backward compatibility',
      'matter device types 2027',
    ],
    leadAnswerBlock:
      '**A Matter spec revision (referred to here as "2.0" — [VERIFY: exact version number at time of reading]) adds new device types, including the energy-management types (inverters, batteries, heat pumps) covered elsewhere in this cluster, while remaining backward-compatible with existing 1.x-certified devices.** Existing devices keep working; new device types simply expand what Matter can natively describe.',
    quickAnswerTop: {
      en: {
        question: "What's new in Matter's latest spec revision?",
        answer:
          'The headline addition is new device-type support — most notably for energy-management hardware (inverters, batteries, EV chargers, heat pumps), extending Matter beyond its original lighting/lock/sensor focus. Existing 1.x-certified devices remain compatible; the revision adds capability rather than replacing the base protocol. [VERIFY: the full list of new device types and the exact version/ratification date] against the Connectivity Standards Alliance\'s current published spec before treating any specific version number as current.',
        bullets: [
          'Adds new device types, notably energy management (inverters, batteries, heat pumps, EV chargers)',
          'Existing Matter 1.x devices remain compatible — this is additive, not a breaking change',
          'Distinct from Thread (the networking layer) and from this cluster\'s general protocol primer and local-control guide',
          '[VERIFY: exact current version number and ratification date] before citing a specific version as current',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What Changed', anchor: 'what-changed' },
      { label: 'Backward Compatibility', anchor: 'backward-compatibility' },
      { label: 'How This Differs From Other Matter Content Here', anchor: 'differs' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: "Matter's spec revision adds new device types — most notably energy management — while remaining backward-compatible with existing 1.x devices." },
      { type: 'plain-terms', content: 'Matter is regularly updated with new capabilities, similar to how an operating system gets version updates. This revision mainly adds support for describing energy hardware like solar inverters and heat pumps as native Matter devices. Devices you already own that use an older Matter version keep working exactly as before.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'The headline change is new device-type support, especially for energy-management hardware',
          'Existing Matter 1.x devices remain fully compatible — nothing breaks',
          'This is distinct from Thread (the network layer under Matter) and from Thread/Wi-Fi 7 router considerations',
          'Also distinct from this cluster\'s general protocol primer (Matter/Thread/Zigbee/Z-Wave overview) and local-control guide (commissioning/avoiding cloud bridges)',
          '[VERIFY: exact version number and ratification date] before citing a specific figure — check the Connectivity Standards Alliance\'s current published spec',
        ],
      },
      whatChanged: {
        id: 'what-changed',
        title: 'What Changed',
        content:
          '**The most significant addition is device-type support for energy-management hardware — solar inverters, home batteries, EV chargers, and heat pumps — described in detail in this cluster\'s Matter inverter/heat-pump integration guide.**',
        items: [
          'New device types let energy hardware expose state and accept commands the same standardized way a Matter light bulb or lock already does.',
          '[VERIFY: any additional device types or protocol-level changes beyond energy management] included in the actual current revision — this article should not be treated as an exhaustive changelog without checking the source spec.',
          'The revision is additive at the protocol level: it defines new things Matter *can* describe, without removing or breaking support for existing device types.',
        ],
      },
      backwardCompatibility: {
        id: 'backward-compatibility',
        title: 'Backward Compatibility',
        content:
          '**A device certified against an older Matter version continues to work with a hub or controller running the newer spec — you do not need to replace existing Matter devices.**',
        items: [
          'Your existing Matter lights, locks, and sensors need no changes when Home Assistant or another controller adds support for the newer spec revision.',
          'New device types (like energy management) are only usable if a specific product implements them — owning older Matter hardware doesn\'t retroactively grant it new capabilities.',
          '[VERIFY: whether any existing device types received breaking changes] in the actual current revision — spec updates occasionally deprecate or modify fields, and this should be checked against release notes rather than assumed.',
        ],
      },
      differs: {
        id: 'differs',
        title: 'How This Differs From Other Matter Content Here',
        content:
          '**This article covers the spec revision itself; the general protocol primer explains Matter/Thread/Zigbee/Z-Wave at a conceptual level, and the local-control guide covers commissioning and avoiding cloud bridges — read all three for the full picture.**',
        items: [
          'If you\'re asking "what is Matter and how does it compare to Zigbee/Z-Wave," start with the general protocol primer.',
          'If you\'re asking "how do I commission a Matter device locally without a cloud bridge," see the local-control guide.',
          'If you\'re asking "what changed in the spec recently, and does my hardware need an update," this article is the one — and it points to the energy-integration guide for the biggest practical change.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Do I need to update my existing Matter devices?', a: 'No — existing 1.x-certified devices continue working without any update. New device types only matter if you\'re buying new hardware that implements them.' },
          { q: 'What is the biggest practical change in this revision?', a: 'Energy-management device types — inverters, batteries, EV chargers, and heat pumps can now be described as native Matter devices, covered in detail in the Matter inverter/heat-pump integration guide.' },
          { q: 'Does this affect Thread?', a: 'Thread is the networking layer Matter often runs over; this revision is a change to the Matter application layer, not to Thread itself. See the Thread 1.4 and Wi-Fi 7 routers guide for networking-layer changes.' },
          { q: 'Is my hub software compatible with the new spec?', a: 'Hub software (like Home Assistant) needs its own update to support new device types once they\'re defined — [VERIFY: current Home Assistant support status for the newest device types] rather than assuming day-one support.' },
          { q: 'How is this different from the general Matter/Thread/Zigbee explainer on this site?', a: 'That article explains the protocols conceptually and compares them. This article covers what specifically changed in the newest Matter spec revision — a narrower, update-focused scope.' },
          { q: 'Where can I check the current official spec version?', a: 'The Connectivity Standards Alliance publishes the current Matter specification directly — check there rather than relying on secondary sources or marketing materials for the exact version number.' },
          { q: 'Do all Matter controllers support the new device types immediately?', a: '[VERIFY: current controller support] — a spec revision being published doesn\'t mean every hub (Home Assistant, Apple Home, Google Home, SmartThings) implements support for new device types on the same day; check your specific controller\'s release notes.' },
          { q: 'Does this change how Matter devices are commissioned?', a: 'No — commissioning (pairing a new device to your network) uses the same process regardless of which device types the spec defines. See the local-control guide for the commissioning walkthrough.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Matter, Thread, Zigbee, Z-Wave: Protocols Explained](/smart-home/smart-home-protocols-explained) — the general primer',
          '[Matter & Local Control: An Internet-Independent Smart Home](/smart-home/matter-local-control-guide) — commissioning and avoiding cloud bridges',
          '[Matter Integration for Solar Inverters and Heat Pumps](/smart-home/matter-solar-inverter-heat-pump-integration) — the biggest practical change from this revision',
          '[Thread 1.4 and Wi-Fi 7 Routers for Smart Homes](/smart-home/thread-14-wifi-7-routers-guide) — the networking layer',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: "Matter 2.0 Explained: What's New (2027)",
      description: "What's new in Matter's spec revision: new device types, backward compatibility with 1.x, and what it means for existing Matter devices.",
      url: 'https://www.promptquorum.com/smart-home/matter-2-0-explained',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Matter smart home protocol' }, { '@type': 'Thing', name: 'Matter device types' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Do I need to update my existing Matter devices?', acceptedAnswer: { '@type': 'Answer', text: 'No — existing 1.x-certified devices continue working without any update.' } },
        { '@type': 'Question', name: 'What is the biggest practical change in this revision?', acceptedAnswer: { '@type': 'Answer', text: 'Energy-management device types — inverters, batteries, EV chargers, and heat pumps can now be described as native Matter devices.' } },
        { '@type': 'Question', name: 'Does this affect Thread?', acceptedAnswer: { '@type': 'Answer', text: 'Thread is the networking layer Matter often runs over; this revision is a change to the Matter application layer, not to Thread itself.' } },
        { '@type': 'Question', name: 'Where can I check the current official spec version?', acceptedAnswer: { '@type': 'Answer', text: 'The Connectivity Standards Alliance publishes the current Matter specification directly.' } },
        { '@type': 'Question', name: 'Does this change how Matter devices are commissioned?', acceptedAnswer: { '@type': 'Answer', text: 'No — commissioning uses the same process regardless of which device types the spec defines.' } },
      ],
    },
  },
}
