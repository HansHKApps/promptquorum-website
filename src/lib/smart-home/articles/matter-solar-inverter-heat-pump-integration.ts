import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    title: 'Matter Integration for Solar Inverters and Heat Pumps (2027)',
    seoTitle: 'Matter for Solar Inverters + Heat Pumps (2027)',
    intro:
      'Matter\'s energy-management device types let a solar inverter, battery, EV charger, or heat pump report status and accept commands through Home Assistant directly, as a local device — not through the manufacturer\'s cloud app. This guide explains what Matter exposes for these device classes today, [VERIFY: which manufacturers currently ship Matter support for inverters and heat pumps, and how complete that support is], and how this differs from the monitoring-and-dashboard integrations already covered for balcony solar.',
    metaDescription:
      'Matter integration for solar inverters and heat pumps in 2027: local device control for energy hardware through Home Assistant, without a vendor cloud app.',
    twitterDescription:
      'Connecting solar inverters and heat pumps to Home Assistant via Matter — local device control instead of a manufacturer cloud app.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    audience: 'Smart home owners with a solar inverter, battery, or heat pump who want local Matter control instead of a vendor cloud app',
    primaryTerm: 'matter solar inverter heat pump integration',
    targetKeywords: [
      'matter smart home inverter heat pump',
      'matter energy management device types',
      'home assistant matter solar inverter',
      'matter heat pump integration',
      'local control solar inverter',
    ],
    leadAnswerBlock:
      '**Matter defines device types for energy management — including inverters, batteries, EV chargers, and heat pumps — so these devices can report status and accept commands locally through Home Assistant, instead of exclusively through a manufacturer\'s cloud app.** [VERIFY: current breadth of real-world manufacturer support for these device types] determines how much of this you can use today versus which devices still require a vendor bridge.',
    quickAnswerTop: {
      en: {
        question: 'Can I control my solar inverter or heat pump locally with Matter?',
        answer:
          'Matter includes energy-management device types built for exactly this — inverters, battery storage, EV chargers, and heat pumps can expose their state and accept commands as native Matter devices, which Home Assistant then controls locally. Whether your specific hardware supports this depends on the manufacturer\'s current firmware and Matter certification — [VERIFY: check the manufacturer\'s current Matter support status before assuming your model works this way].',
        bullets: [
          'Matter has dedicated device types for inverters, batteries, EV chargers, and heat pumps',
          'A Matter-certified device works locally through Home Assistant, no vendor cloud round-trip needed',
          'This is a different angle from monitoring dashboards (like those covered for balcony solar) — Matter here means device-level local control, not just usage graphs',
          '[VERIFY: manufacturer-by-manufacturer support] before assuming a specific inverter or heat pump model supports Matter energy device types today',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What Matter Defines for Energy Hardware', anchor: 'what-matter-defines' },
      { label: 'Inverters and Batteries', anchor: 'inverters-batteries' },
      { label: 'Heat Pumps', anchor: 'heat-pumps' },
      { label: 'How This Differs from Monitoring-Only Integrations', anchor: 'differs-from-monitoring' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Matter\'s energy-management device types let inverters, batteries, EV chargers, and heat pumps report status and accept commands locally through Home Assistant instead of a manufacturer\'s cloud app, though real-world manufacturer support varies and should be checked per device.' },
      { type: 'plain-terms', content: 'Matter is a shared language that smart devices use to talk to a hub like Home Assistant. It now includes definitions for energy hardware — solar inverters, home batteries, EV chargers, and heat pumps — so a Matter-certified version of one of these devices can be controlled the same local way as a Matter light bulb, instead of needing the manufacturer\'s own app and cloud account.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Matter defines device types specifically for energy management: inverters, batteries, EV chargers, and heat pumps',
          'A Matter-certified device of these types is controlled locally through Home Assistant — no vendor cloud dependency',
          '[VERIFY: which manufacturers currently ship working Matter support] for these device types — this is a thin, fast-moving market, check before buying based on a Matter-support claim',
          'This is distinct from the monitoring/dashboard integrations already covered in the balcony solar cluster — those read usage data; this is native local device control',
          'If your hardware isn\'t Matter-certified yet, monitoring-only integration (CT clamp, vendor local API) still works — see the local energy management overview',
        ],
      },
      whatMatterDefines: {
        id: 'what-matter-defines',
        title: 'What Matter Defines for Energy Hardware',
        content:
          '**Matter\'s energy-management cluster covers device state (charging, discharging, generating, idle), power/energy readings, and command support (start/stop, mode changes) for the device types it defines.** This is a protocol-level capability, not a guarantee that a specific product implements all of it.',
        items: [
          'Device types include: electrical energy meters, solar inverters, battery storage systems, EV chargers, and heat pumps.',
          'A device advertises which of these it implements and Home Assistant discovers that automatically over the local network — the same commissioning flow as any other Matter device.',
          'Not every manufacturer ships full support for every field in a device type\'s spec — some expose read-only status without accepting commands, for example. [VERIFY: exact support level for a specific product] against its current documentation before assuming full control.',
        ],
      },
      invertersBatteries: {
        id: 'inverters-batteries',
        title: 'Inverters and Batteries',
        content:
          '**A Matter-certified inverter or battery reports generation, state of charge, and charge/discharge status locally, and can accept mode commands (e.g., prioritize self-consumption vs. grid export) from Home Assistant automations.**',
        items: [
          'This lets an automation like the load-shifting examples in the local energy management overview react to real-time generation and battery state, not just a fixed schedule.',
          'For actual current-generation battery products and their local integration options today (which may or may not use Matter specifically, depending on the manufacturer), see the balcony solar cluster\'s battery buying guides.',
          '[VERIFY: which specific inverter/battery brands and models currently ship Matter certification] — this article describes the Matter device-type capability, not a confirmed list of compliant products.',
        ],
      },
      heatPumps: {
        id: 'heat-pumps',
        title: 'Heat Pumps',
        content:
          '**A Matter heat pump device type exposes mode, target temperature, and running state, letting Home Assistant automate it alongside solar generation — for example, running the heat pump harder during high-solar hours.**',
        items: [
          'This is the same pattern as a Matter thermostat, extended to a heat pump\'s specific operating modes.',
          'Pairing this with the local energy monitoring described in the overview article lets an automation prefer heat-pump operation when local generation is high, rather than a fixed time-of-day schedule.',
          '[VERIFY: which heat pump manufacturers currently ship Matter support] — as with inverters, this is an emerging category and support varies significantly by brand and region.',
        ],
      },
      differsFromMonitoring: {
        id: 'differs-from-monitoring',
        title: 'How This Differs from Monitoring-Only Integrations',
        content:
          '**Monitoring-only integration reads usage or generation data (via a CT clamp, or a vendor\'s local API) without native device control; Matter integration means the device itself speaks the same local protocol Home Assistant already uses for lights and locks.**',
        items: [
          'The balcony solar cluster\'s existing Home Assistant integration content is monitoring/dashboard-focused — reading inverter output into Home Assistant. That remains valid and useful even without Matter.',
          'Matter integration is a step further: the inverter or heat pump becomes a first-class local device, discoverable and controllable the same way as any other Matter device, without a vendor-specific integration.',
          'If your hardware isn\'t Matter-certified, the monitoring approach in the balcony solar guides is still the right starting point — Matter support is additive, not a replacement requirement.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Does Matter support solar inverters today?', a: 'Matter\'s specification includes a device type for solar inverters, but [VERIFY: actual manufacturer adoption] — check your inverter\'s current documentation or manufacturer announcements rather than assuming Matter support because the spec exists.' },
          { q: 'Can I control my heat pump\'s temperature through Home Assistant via Matter?', a: 'If your heat pump is Matter-certified and implements the heat pump device type, yes — mode and target temperature become standard Home Assistant entities. [VERIFY: whether your specific model has shipped this support].' },
          { q: 'Is this the same as the balcony solar Home Assistant integration guides?', a: 'No. Those guides cover reading inverter data into Home Assistant for monitoring. This article covers Matter-native device control, a different and newer integration path that not all hardware supports yet.' },
          { q: 'What happens if my inverter isn\'t Matter-certified?', a: 'Monitoring-only integration (via a manufacturer local API or a CT clamp) still works for usage tracking and basic automation — you just don\'t get native device-type control until the hardware ships Matter support.' },
          { q: 'Do I need a new inverter to get Matter support?', a: 'Possibly — this depends on whether your current inverter\'s manufacturer offers a firmware update path to Matter certification. [VERIFY: your specific manufacturer\'s update roadmap] rather than assuming existing hardware will gain support.' },
          { q: 'Does Matter energy support work with battery-only setups (no solar)?', a: 'Yes — the battery storage device type is independent of the inverter device type, so a battery-only local backup setup can use Matter for local status and control without solar generation being involved.' },
          { q: 'Can an automation combine Matter energy data with a local LLM?', a: 'Yes — once inverter, battery, or heat pump state is exposed as standard Home Assistant entities via Matter, a local LLM automation (see the local LLM smart home guide) can reason over that data the same way it does for any other entity.' },
          { q: 'Where do I check current Matter certification for a specific product?', a: 'Check the manufacturer\'s own product documentation or the Connectivity Standards Alliance\'s certified-products listing directly — do not rely on marketing copy alone, since certification for a specific device type is more specific than general "Matter compatible" branding.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Smart Home Energy Management](/smart-home/local-smart-home-energy-management-2027) — the overview this article narrows into',
          '[Matter 2.0 Explained: What\'s New](/smart-home/matter-2-0-explained) — the broader spec update',
          '[Matter & Local Control: An Internet-Independent Smart Home](/smart-home/matter-local-control-guide) — local commissioning fundamentals',
          '[Best Balcony Solar Microinverters](/balcony-solar/best-balcony-solar-microinverters) — cross-cluster: current inverter hardware picks',
          '[Home Assistant + Balcony Solar, No Cloud](/balcony-solar/home-assistant-balcony-solar-no-cloud) — cross-cluster: the monitoring-only integration path',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter Integration for Solar Inverters and Heat Pumps (2027)',
      description: 'Matter integration for solar inverters and heat pumps in 2027: local device control for energy hardware through Home Assistant, without a vendor cloud app.',
      url: 'https://www.promptquorum.com/smart-home/matter-solar-inverter-heat-pump-integration',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Matter energy management' }, { '@type': 'Thing', name: 'Solar inverter' }, { '@type': 'Thing', name: 'Heat pump' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Does Matter support solar inverters today?', acceptedAnswer: { '@type': 'Answer', text: 'Matter\'s specification includes a device type for solar inverters, but actual manufacturer adoption varies — check your inverter\'s current documentation rather than assuming support because the spec exists.' } },
        { '@type': 'Question', name: 'Can I control my heat pump\'s temperature through Home Assistant via Matter?', acceptedAnswer: { '@type': 'Answer', text: 'If your heat pump is Matter-certified and implements the heat pump device type, yes — mode and target temperature become standard Home Assistant entities, if your specific model has shipped that support.' } },
        { '@type': 'Question', name: 'Is this the same as the balcony solar Home Assistant integration guides?', acceptedAnswer: { '@type': 'Answer', text: 'No. Those guides cover reading inverter data into Home Assistant for monitoring. This article covers Matter-native device control, a different and newer integration path.' } },
        { '@type': 'Question', name: 'What happens if my inverter isn\'t Matter-certified?', acceptedAnswer: { '@type': 'Answer', text: 'Monitoring-only integration via a manufacturer local API or a CT clamp still works for usage tracking and basic automation, without native device-type control.' } },
        { '@type': 'Question', name: 'Where do I check current Matter certification for a specific product?', acceptedAnswer: { '@type': 'Answer', text: 'Check the manufacturer\'s own product documentation or the Connectivity Standards Alliance\'s certified-products listing directly, rather than relying on general marketing claims.' } },
      ],
    },
  },
}
