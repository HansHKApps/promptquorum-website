import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: '2027 Protocols & Regulation',
    // Verified 2026-07-16 directly against CSA's own newsroom (csa-iot.org/newsroom/matter-1-6-...):
    // Matter 1.6 released June 17, 2026 — no "Matter 2.0" exists, past or planned. Renamed from
    // matter-2-0-explained (see docs/SH_26_45_VERIFICATION_LIST.md Step 2 close-out).
    // Energy-management device types (inverters, batteries, heat pumps, EV chargers) were introduced
    // progressively across Matter 1.3-1.5, NOT in 1.6 — 1.6's own headline features are NFC-based
    // commissioning, Joint Fabric (multi-admin/multi-ecosystem device sharing), and Thermostat
    // Suggestions. Reframed below to reflect that, rather than crediting 1.6 with the energy work.
    title: "Matter 1.6 Explained: What's New (2027)",
    seoTitle: 'Matter 1.6 Explained (2027)',
    intro:
      'Matter 1.6, released June 17, 2026, is the current version of the Matter smart home standard. Its headline additions are NFC-based device setup, Joint Fabric (letting multiple ecosystems co-administer the same device), and Thermostat Suggestions — not new energy-management device types, which arrived earlier across Matter 1.3-1.5 and are covered elsewhere in this cluster. This article explains what changed in 1.6 specifically and how it differs from the general protocol primer and local-control guide already on this site.',
    metaDescription:
      "What's new in Matter 1.6 (released June 17, 2026): NFC setup, Joint Fabric multi-ecosystem sharing, Thermostat Suggestions, and full backward compatibility with 1.x devices.",
    twitterDescription:
      "Matter 1.6 explained: NFC setup, Joint Fabric, Thermostat Suggestions, backward compatibility, and how it differs from the general Matter/Thread/Zigbee primer already on this site.",
    readTime: '6 min read',
    educationalLevel: 'Intermediate',
    audience: 'Smart home owners and Home Assistant users tracking what changed in the Matter specification',
    primaryTerm: 'matter 1.6 smart home',
    targetKeywords: [
      'matter 1.6 smart home',
      'what is new in matter 1.6',
      'matter spec update',
      'matter backward compatibility',
      'matter device types 2027',
    ],
    leadAnswerBlock:
      '**Matter 1.6 (released June 17, 2026 by the Connectivity Standards Alliance) is the current version of the Matter smart home standard, adding NFC-based commissioning, Joint Fabric multi-ecosystem device sharing, and Thermostat Suggestions, while remaining fully backward-compatible with existing 1.x-certified devices.** Energy-management device types (inverters, batteries, heat pumps) were added earlier, across Matter 1.3-1.5, and are covered elsewhere in this cluster — Matter 1.6 itself is a setup and multi-ecosystem release, not an energy-focused one.',
    quickAnswerTop: {
      en: {
        question: "What's new in Matter 1.6?",
        answer:
          'Matter 1.6 (released June 17, 2026) adds NFC-based device setup, Joint Fabric — which lets multiple user-authorized controllers co-administer a single shared Matter network — and Thermostat Suggestions, a standardized way for ecosystems to propose (not force) thermostat changes. Existing 1.x-certified devices remain fully compatible; the release adds capability rather than replacing the base protocol. Energy-management device types are not new in 1.6 — those arrived across Matter 1.3-1.5.',
        bullets: [
          'Matter 1.6, released June 17, 2026: NFC setup, Joint Fabric multi-ecosystem sharing, Thermostat Suggestions',
          'Existing Matter 1.x devices remain compatible — this is additive, not a breaking change',
          'Distinct from Thread (the networking layer) and from this cluster\'s general protocol primer and local-control guide',
          'Energy-management device types (inverters, batteries, heat pumps) arrived earlier, in Matter 1.3-1.5 — not new in 1.6',
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
      { type: 'one-sentence', content: 'Matter 1.6 (released June 17, 2026) adds NFC-based commissioning, Joint Fabric multi-ecosystem device sharing, and Thermostat Suggestions, while remaining backward-compatible with existing 1.x devices — energy-management device types arrived earlier, in Matter 1.3-1.5, not in 1.6.' },
      { type: 'plain-terms', content: 'Matter is regularly updated with new capabilities, similar to how an operating system gets version updates. This update mainly adds a new way to set up devices using NFC, a way for multiple smart home systems to share control of the same device, and a standard way for a thermostat to receive (and choose whether to accept) suggested temperature changes. Devices you already own that use an older Matter version keep working exactly as before.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Matter 1.6 (released June 17, 2026) is the current spec version — its headline changes are NFC setup, Joint Fabric, and Thermostat Suggestions',
          'Existing Matter 1.x devices remain fully compatible — nothing breaks',
          'This is distinct from Thread (the network layer under Matter) and from Thread/Wi-Fi 7 router considerations',
          'Also distinct from this cluster\'s general protocol primer (Matter/Thread/Zigbee/Z-Wave overview) and local-control guide (commissioning/avoiding cloud bridges)',
          'Energy-management device types (inverters, batteries, heat pumps) are not new in 1.6 — those were introduced earlier, across Matter 1.3-1.5',
        ],
      },
      whatChanged: {
        id: 'what-changed',
        title: 'What Changed',
        content:
          '**Matter 1.6\'s three headline additions are NFC-based commissioning, Joint Fabric, and Thermostat Suggestions — a focused, tooling-and-coordination release rather than a new-device-category release.**',
        items: [
          'NFC setup: the full device-commissioning exchange can now happen over NFC, rather than only QR-code scanning and Bluetooth.',
          'Joint Fabric: expands on the existing Multi-Admin toolkit so multiple user-authorized controllers can co-administer a single shared Matter network, making a device accessible across participating ecosystems instead of tied to whichever hub commissioned it first.',
          'Thermostat Suggestions: standardizes how ecosystems recommend thermostat changes — instead of sending a direct command, a controller sends a time-bound suggestion the thermostat itself evaluates.',
          'The revision is additive at the protocol level: it defines new things Matter *can* describe, without removing or breaking support for existing device types. Energy-management device types (inverters, batteries, EV chargers, heat pumps) were not part of this release — see this cluster\'s Matter inverter/heat-pump integration guide for that earlier (Matter 1.3-1.5) work.',
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
          'CSA\'s own Matter 1.6 announcement describes it as additive — no breaking changes to existing device types were mentioned in the release. As always with any spec update, check a specific device\'s release notes if you rely on a narrow or unusual field.',
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
          'If you\'re asking "what changed in the spec recently, and does my hardware need an update," this article is the one — and it points to the energy-integration guide if you\'re looking for the earlier (1.3-1.5) energy-management work specifically, since that isn\'t part of 1.6.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Do I need to update my existing Matter devices?', a: 'No — existing 1.x-certified devices continue working without any update. New capabilities like NFC setup or Joint Fabric only matter if you\'re buying new hardware or a new controller that implements them.' },
          { q: 'What is the biggest practical change in Matter 1.6?', a: 'Joint Fabric — it lets multiple user-authorized controllers co-administer a single shared Matter network, so a device can be genuinely shared across ecosystems instead of belonging to whichever hub commissioned it first. NFC setup and Thermostat Suggestions are the other two headline additions. Energy-management device types (inverters, batteries, heat pumps) are not new in this release — see the Matter inverter/heat-pump integration guide for that earlier work.' },
          { q: 'Does this affect Thread?', a: 'Thread is the networking layer Matter often runs over; Matter 1.6 is a change to the Matter application layer, not to Thread itself. See the Thread 1.4 and Wi-Fi 7 routers guide for networking-layer changes.' },
          { q: 'Is my hub software compatible with Matter 1.6?', a: 'Hub software needs its own update to support a new spec release — it isn\'t automatic. Home Assistant (verified 2026-07-16 against home-assistant.io\'s own blog) fully supports Matter 1.5.1 as of write-time, with Matter 1.6 support in active beta rather than fully released — check your specific hub\'s current release notes rather than assuming day-one support for the newest spec release.' },
          { q: 'How is this different from the general Matter/Thread/Zigbee explainer on this site?', a: 'That article explains the protocols conceptually and compares them. This article covers what specifically changed in Matter 1.6 — a narrower, update-focused scope.' },
          { q: 'Where can I check the current official spec version?', a: 'The Connectivity Standards Alliance (csa-iot.org) publishes and announces the current Matter specification directly — check there rather than relying on secondary sources or marketing materials for the exact version number.' },
          { q: 'Do all Matter controllers support Matter 1.6 immediately?', a: 'No — a spec release being published doesn\'t mean every hub implements it on day one. Home Assistant\'s own blog confirms 1.6 support is in active beta rather than fully released as of write-time; Apple Home, Google Home, and SmartThings each have their own independent rollout timelines that this article does not track — check your specific controller\'s current release notes.' },
          { q: 'Does this change how Matter devices are commissioned?', a: 'Not for existing methods — QR-code and Bluetooth commissioning still work the same way. Matter 1.6 adds NFC as an additional commissioning option; it doesn\'t remove or change the existing process. See the local-control guide for the commissioning walkthrough.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Matter, Thread, Zigbee, Z-Wave: Protocols Explained](/smart-home/smart-home-protocols-explained) — the general primer',
          '[Matter & Local Control: An Internet-Independent Smart Home](/smart-home/matter-local-control-guide) — commissioning and avoiding cloud bridges',
          '[Matter Integration for Solar Inverters and Heat Pumps](/smart-home/matter-solar-inverter-heat-pump-integration) — the energy-management device types, added earlier in Matter 1.3-1.5, not in 1.6',
          '[Thread 1.4 and Wi-Fi 7 Routers for Smart Homes](/smart-home/thread-14-wifi-7-routers-guide) — the networking layer',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: "Matter 1.6 Explained: What's New (2027)",
      description: "What's new in Matter 1.6: NFC setup, Joint Fabric, Thermostat Suggestions, and backward compatibility with 1.x devices.",
      url: 'https://www.promptquorum.com/smart-home/matter-1-6-explained',
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
        { '@type': 'Question', name: 'What is the biggest practical change in Matter 1.6?', acceptedAnswer: { '@type': 'Answer', text: 'Joint Fabric, which lets multiple user-authorized controllers co-administer a single shared Matter network — plus NFC setup and Thermostat Suggestions.' } },
        { '@type': 'Question', name: 'Does this affect Thread?', acceptedAnswer: { '@type': 'Answer', text: 'Thread is the networking layer Matter often runs over; Matter 1.6 is a change to the Matter application layer, not to Thread itself.' } },
        { '@type': 'Question', name: 'Where can I check the current official spec version?', acceptedAnswer: { '@type': 'Answer', text: 'The Connectivity Standards Alliance publishes the current Matter specification directly.' } },
        { '@type': 'Question', name: 'Does this change how Matter devices are commissioned?', acceptedAnswer: { '@type': 'Answer', text: 'No — commissioning uses the same process regardless of which device types the spec defines.' } },
      ],
    },
  },
}
