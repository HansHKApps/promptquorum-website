import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

// Verified 2026-07-16 against the Connectivity Standards Alliance's own newsroom page:
// csa-iot.org/newsroom/matter-enabling-universal-grid-friendly-integration-for-energy-smart-appliances-and-more/
// CSA's own text: Matter 1.3 added device-type support for EV charging, air conditioning, and
// general household appliance loads, "with additional device types to follow in 1.4 and the
// future, such as heat pumps, solar, batteries, and water heaters." That page names zero shipping
// manufacturers or certified products for inverters/batteries/heat pumps specifically — this is a
// case where the spec is ahead of the market, not a confirmed list of compliant hardware. Reframed
// below as an early-mover/what's-coming explainer instead of a claims-heavy "this works today"
// piece, per the SH_26_45_VERIFICATION_LIST.md close-out decision (2026-07-16).

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    title: 'Matter for Solar Inverters and Heat Pumps: What\'s Coming (2027)',
    seoTitle: 'Matter for Solar Inverters + Heat Pumps: Not Yet (2027)',
    intro:
      'Matter\'s specification has defined device types for energy-management hardware — solar inverters, battery storage, EV chargers, and heat pumps — since Matter 1.4+ (per the Connectivity Standards Alliance\'s own roadmap announcement), but as of write-time no shipping, Matter-certified inverter, battery, or heat pump product from any manufacturer has been confirmed. This is an early-mover explainer: what the spec defines today, and what to watch for before it becomes a real buying option, not a guide to hardware you can use right now. It also explains how this differs from the monitoring-and-dashboard integrations already covered for balcony solar, which do work today.',
    metaDescription:
      'Matter defines device types for solar inverters and heat pumps (Matter 1.4+), but no shipping certified products exist yet as of July 2026 — what\'s coming, not what works today.',
    twitterDescription:
      'Matter has a spec for solar inverters and heat pumps — but no shipping certified products yet. What the spec defines, and what to watch for.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    audience: 'Smart home owners with a solar inverter, battery, or heat pump who want to know when local Matter control becomes a real option',
    primaryTerm: 'matter solar inverter heat pump integration',
    targetKeywords: [
      'matter smart home inverter heat pump',
      'matter energy management device types',
      'home assistant matter solar inverter',
      'matter heat pump integration',
      'is matter solar inverter support real',
    ],
    leadAnswerBlock:
      '**Not yet, as a real buying decision — Matter\'s specification has defined device types for energy management (inverters, batteries, EV chargers, heat pumps) since Matter 1.4+, but as of July 2026 no shipping, Matter-certified product in these categories has been confirmed from any manufacturer.** The Connectivity Standards Alliance\'s own roadmap announcement named these device types as planned additions following Matter 1.3, without naming a single manufacturer or product shipping them today. Treat this article as "what to watch for," not "what you can buy."',
    quickAnswerTop: {
      en: {
        question: 'Can I control my solar inverter or heat pump locally with Matter today?',
        answer:
          'Not yet, for the specific "Matter-certified inverter/heat pump" scenario. Matter\'s specification has included energy-management device types (inverters, battery storage, EV chargers, heat pumps) since Matter 1.4+, letting a certified device report status and accept commands locally through Home Assistant instead of a manufacturer cloud app — but no shipping, Matter-certified product in these categories was confirmed as of write-time (July 2026), per the Connectivity Standards Alliance\'s own materials. The capability exists in the spec; the products don\'t exist in the market yet.',
        bullets: [
          'Matter has defined device types for inverters, batteries, EV chargers, and heat pumps since Matter 1.4+',
          'No shipping, Matter-certified product in these categories was confirmed as of July 2026 — this is a spec-ahead-of-market situation, not a buying guide',
          'Monitoring dashboards (already covered for balcony solar) are a different, working-today approach — this article is about native device-level control, which isn\'t available yet',
          'Check the manufacturer\'s own current documentation before assuming any specific product ships this support',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What Matter Defines for Energy Hardware', anchor: 'what-matter-defines' },
      { label: 'Inverters and Batteries: What\'s Coming', anchor: 'inverters-batteries' },
      { label: 'Heat Pumps: What\'s Coming', anchor: 'heat-pumps' },
      { label: 'How This Differs from Monitoring-Only Integrations', anchor: 'differs-from-monitoring' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Matter has defined device types for inverters, batteries, EV chargers, and heat pumps since Matter 1.4+, but no shipping Matter-certified product in these categories was confirmed as of July 2026 — this is an early-mover explainer, not a current buying guide.' },
      { type: 'plain-terms', content: 'Matter is a shared language that smart devices use to talk to a hub like Home Assistant. Matter\'s spec now includes definitions for energy hardware — solar inverters, home batteries, EV chargers, and heat pumps — but defining a device type in the spec isn\'t the same as a manufacturer actually building and certifying a product against it. As of mid-2026, that product side hasn\'t caught up yet.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Matter has defined device types for energy management — inverters, batteries, EV chargers, heat pumps — since Matter 1.4+',
          'As of write-time (July 2026), no shipping, Matter-certified product in these categories was confirmed from any manufacturer, per the Connectivity Standards Alliance\'s own materials',
          'This is a spec-ahead-of-market situation: the capability is defined, the hardware isn\'t here yet — treat this as an early-mover explainer, not a buying guide',
          'This is distinct from the monitoring/dashboard integrations already covered in the balcony solar cluster — those read usage data, work today, and don\'t depend on Matter certification',
          'If you want something that works right now, monitoring-only integration (CT clamp, vendor local API) is the current path — see the local energy management overview',
        ],
      },
      whatMatterDefines: {
        id: 'what-matter-defines',
        title: 'What Matter Defines for Energy Hardware',
        content:
          '**Matter\'s energy-management device types cover device state (charging, discharging, generating, idle), power/energy readings, and command support (start/stop, mode changes) — a protocol-level capability that manufacturers can build against, not something any confirmed shipping product currently implements.**',
        items: [
          'Device types include: electrical energy meters, solar inverters, battery storage systems, EV chargers, and heat pumps — added to the spec starting with Matter 1.4, per the Connectivity Standards Alliance\'s own roadmap announcement following Matter 1.3.',
          'A device that did implement one of these would advertise it and get discovered by Home Assistant automatically, the same commissioning flow as any other Matter device — but this article does not point to a confirmed product that does this today.',
          'Even once products do ship, expect partial implementations at first — a device type\'s full spec (e.g., accepting commands, not just reporting read-only status) is often adopted incrementally by early manufacturer implementations. Check a specific product\'s documentation once one actually exists, rather than assuming full control from the device-type name alone.',
        ],
      },
      invertersBatteries: {
        id: 'inverters-batteries',
        title: 'Inverters and Batteries: What\'s Coming',
        content:
          '**Once a manufacturer ships a Matter-certified inverter or battery, it would be able to report generation, state of charge, and charge/discharge status locally, and accept mode commands (e.g., prioritize self-consumption vs. grid export) from Home Assistant automations — but as of write-time, no such shipping product was confirmed.**',
        items: [
          'This would eventually let an automation like the load-shifting examples in the local energy management overview react to real-time generation and battery state, not just a fixed schedule — once the hardware exists.',
          'For actual current-generation battery products and their local integration options today (which use manufacturer-specific local APIs or monitoring, not Matter energy device types), see the balcony solar cluster\'s battery buying guides — that\'s the working-today path, separate from what this article describes.',
          'This article describes the Matter device-type capability as defined in the spec, not a confirmed list of compliant products — check a manufacturer\'s current announcements directly before assuming a specific inverter or battery model has shipped this support.',
        ],
      },
      heatPumps: {
        id: 'heat-pumps',
        title: 'Heat Pumps: What\'s Coming',
        content:
          '**A Matter heat pump device type, once implemented by a shipping product, would expose mode, target temperature, and running state, letting Home Assistant automate it alongside solar generation — for example, running the heat pump harder during high-solar hours — but no confirmed shipping product implements this as of write-time.**',
        items: [
          'This would follow the same pattern as a Matter thermostat, extended to a heat pump\'s specific operating modes, once a manufacturer ships it.',
          'Pairing this with the local energy monitoring described in the overview article would eventually let an automation prefer heat-pump operation when local generation is high, rather than a fixed time-of-day schedule — a "still coming" scenario, not a current one.',
          'As with inverters, this is an emerging category on the spec side with no confirmed shipping manufacturer support as of write-time — check heat pump manufacturers\' own current announcements rather than assuming support because the device type exists in Matter.',
        ],
      },
      differsFromMonitoring: {
        id: 'differs-from-monitoring',
        title: 'How This Differs from Monitoring-Only Integrations',
        content:
          '**Monitoring-only integration reads usage or generation data (via a CT clamp, or a vendor\'s local API) without native device control, and works today; Matter device-level integration for these categories does not yet, since no certified products ship.**',
        items: [
          'The balcony solar cluster\'s existing Home Assistant integration content is monitoring/dashboard-focused — reading inverter output into Home Assistant. That works now and remains the practical option.',
          'Matter integration, once real products exist, would be a step further: the inverter or heat pump becomes a first-class local device, discoverable and controllable the same way as any other Matter device, without a vendor-specific integration.',
          'Given no Matter-certified inverter, battery, or heat pump product was confirmed shipping as of write-time, the monitoring approach in the balcony solar guides is the only working starting point today — Matter support here is a future addition, not a current alternative.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Does Matter support solar inverters today?', a: 'The specification does — Matter has included a device type for solar inverters since Matter 1.4+ — but no shipping, Matter-certified inverter product was confirmed as of July 2026, per the Connectivity Standards Alliance\'s own materials. Check your inverter manufacturer\'s current documentation or announcements; don\'t assume support exists just because the spec defines it.' },
          { q: 'Can I control my heat pump\'s temperature through Home Assistant via Matter?', a: 'Not yet, as of write-time — no confirmed shipping heat pump product implements Matter\'s heat pump device type. Once a manufacturer does ship one, mode and target temperature would become standard Home Assistant entities the same way a Matter thermostat\'s do today.' },
          { q: 'Is this the same as the balcony solar Home Assistant integration guides?', a: 'No. Those guides cover reading inverter data into Home Assistant for monitoring, and work today. This article covers Matter-native device control, a capability defined in the spec but not yet available in any confirmed shipping product.' },
          { q: 'What happens if my inverter isn\'t Matter-certified?', a: 'That describes every inverter on the market as of write-time — none are confirmed Matter-certified for energy device types. Monitoring-only integration (via a manufacturer local API or a CT clamp) is the current working option for usage tracking and basic automation; see the balcony solar cluster\'s integration guides.' },
          { q: 'Do I need a new inverter to get Matter support?', a: 'The question is premature as of write-time — no inverter, new or existing, has confirmed Matter energy device-type certification yet. Once products do ship, whether your existing hardware gains support will depend on your specific manufacturer offering a firmware update path; check their roadmap directly once certified products exist.' },
          { q: 'Does Matter energy support work with battery-only setups (no solar)?', a: 'In the spec, yes — the battery storage device type is defined independently of the inverter device type, so a battery-only local backup setup would be able to use Matter for local status and control without solar generation being involved, once a certified product exists. As of write-time, that\'s still a "when it ships" scenario like the rest of this article.' },
          { q: 'Can an automation combine Matter energy data with a local LLM?', a: 'Once inverter, battery, or heat pump state is exposed as standard Home Assistant entities via Matter — which requires a certified product that doesn\'t exist yet — a local LLM automation (see the local LLM smart home guide) would be able to reason over that data the same way it does for any other entity. This is a future capability, not a current one.' },
          { q: 'Where do I check current Matter certification for a specific product?', a: 'Check the manufacturer\'s own product documentation or the Connectivity Standards Alliance\'s certified-products listing directly — do not rely on marketing copy alone, since "Matter compatible" branding is often broader than certification for a specific energy device type.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Smart Home Energy Management](/smart-home/local-smart-home-energy-management-2027) — the overview this article narrows into',
          '[Matter 1.6 Explained: What\'s New](/smart-home/matter-1-6-explained) — the broader spec update',
          '[Matter & Local Control: An Internet-Independent Smart Home](/smart-home/matter-local-control-guide) — local commissioning fundamentals',
          '[Best Balcony Solar Microinverters](/balcony-solar/best-balcony-solar-microinverters) — cross-cluster: current inverter hardware picks that work today',
          '[Home Assistant + Balcony Solar, No Cloud](/balcony-solar/home-assistant-balcony-solar-no-cloud) — cross-cluster: the monitoring-only integration path that works today',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter for Solar Inverters and Heat Pumps: What\'s Coming (2027)',
      description: 'Matter defines device types for solar inverters and heat pumps (Matter 1.4+), but no shipping certified products exist yet as of July 2026 — what\'s coming, not what works today.',
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
        { '@type': 'Question', name: 'Does Matter support solar inverters today?', acceptedAnswer: { '@type': 'Answer', text: 'The specification has included a device type for solar inverters since Matter 1.4+, but no shipping, Matter-certified inverter product was confirmed as of July 2026.' } },
        { '@type': 'Question', name: 'Can I control my heat pump\'s temperature through Home Assistant via Matter?', acceptedAnswer: { '@type': 'Answer', text: 'Not yet as of write-time — no confirmed shipping heat pump product implements Matter\'s heat pump device type.' } },
        { '@type': 'Question', name: 'Is this the same as the balcony solar Home Assistant integration guides?', acceptedAnswer: { '@type': 'Answer', text: 'No. Those guides cover reading inverter data into Home Assistant for monitoring and work today. This article covers Matter-native device control, which is not yet available in any confirmed shipping product.' } },
        { '@type': 'Question', name: 'What happens if my inverter isn\'t Matter-certified?', acceptedAnswer: { '@type': 'Answer', text: 'That describes every inverter on the market as of write-time. Monitoring-only integration via a manufacturer local API or a CT clamp is the current working option.' } },
        { '@type': 'Question', name: 'Where do I check current Matter certification for a specific product?', acceptedAnswer: { '@type': 'Answer', text: 'Check the manufacturer\'s own product documentation or the Connectivity Standards Alliance\'s certified-products listing directly, rather than relying on general marketing claims.' } },
      ],
    },
  },
}
