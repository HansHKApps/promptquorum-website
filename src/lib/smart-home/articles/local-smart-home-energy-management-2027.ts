import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    title: 'Local Smart Home Energy Management (2027)',
    seoTitle: 'Local Smart Home Energy Management (2027)',
    intro:
      'Local smart home energy management means tracking and automating solar, battery, and appliance usage entirely on your own hardware, with Home Assistant\'s Energy dashboard as the hub — no usage data leaves your network. This guide covers why cloud energy apps expose granular usage patterns, how a local setup replaces them device by device, and where to go next for inverter/heat-pump integration, the dashboard setup itself, and whole-home battery backup.',
    metaDescription:
      'Local smart home energy management in 2027: run solar, battery, and appliance monitoring through Home Assistant\'s Energy dashboard, with no usage data sent to the cloud.',
    twitterDescription:
      'Local energy management for smart homes: Home Assistant\'s Energy dashboard, local smart plugs, and load-shifting automations — no cloud usage tracking.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'Smart home owners with solar, a battery, or several monitored appliances who want energy data to stay local',
    primaryTerm: 'local smart home energy management',
    targetKeywords: [
      'smart home energy management local',
      'local energy monitoring home assistant',
      'home assistant energy without cloud',
      'local load shifting automation',
      'private home energy dashboard',
    ],
    leadAnswerBlock:
      '**Local smart home energy management runs on three layers: local monitoring (smart plugs and CT clamps reporting straight to Home Assistant), a local dashboard (Home Assistant\'s built-in Energy dashboard, not a vendor cloud app), and local automations that shift load to cheap or solar-generation hours.** None of the three requires sending usage data outside your network.',
    quickAnswerTop: {
      en: {
        question: 'How do I manage smart home energy locally, without a cloud dashboard?',
        answer:
          'Use Home Assistant\'s built-in Energy dashboard as the single source of truth. Feed it from local-reporting devices — a CT clamp on the main feed, energy-monitoring smart plugs on individual appliances, and a local solar/battery integration if you have one. Build automations directly in Home Assistant that shift high-draw appliances (EV charging, water heating, laundry) to low-cost or high-solar-generation hours. None of this data needs to reach a manufacturer\'s cloud service.',
        bullets: [
          'Hub: Home Assistant\'s built-in Energy dashboard',
          'Monitoring: a CT clamp on the main feed + energy-monitoring smart plugs per appliance',
          'Automation: shift load to cheap-tariff or high-solar hours, all logic runs locally',
          'Avoid: vendor cloud apps that only expose usage data through their own dashboard',
          'Next steps: inverter/heat-pump integration, then the dashboard setup guide',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Why Local Energy Management', anchor: 'why-local' },
      { label: 'What to Monitor', anchor: 'what-to-monitor' },
      { label: 'Load-Shifting Automations', anchor: 'automations' },
      { label: 'Where This Fits in the Stack', anchor: 'stack-fit' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Local smart home energy management uses Home Assistant\'s Energy dashboard fed by local smart plugs and a CT clamp, with load-shifting automations that never send usage data to a cloud service.' },
      { type: 'plain-terms', content: 'Instead of checking your solar or battery usage in a manufacturer\'s phone app, the same data flows into Home Assistant on your own network. A small clamp sensor reads your main power feed, and smart plugs read individual appliances. Home Assistant then uses that data to decide when to run appliances — for example, only charging an EV when solar output is high.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Use Home Assistant\'s built-in Energy dashboard as the single local hub for solar, battery, and appliance usage',
          'Feed it with a CT clamp on the main feed and energy-monitoring smart plugs on individual appliances',
          'Build load-shifting automations (EV charging, water heating, laundry) directly in Home Assistant — no cloud round-trip',
          'Cloud energy apps expose granular per-device usage patterns to the manufacturer; local monitoring keeps that data on your network',
          'This is the overview article — see the dashboard setup guide, the Matter inverter/heat-pump integration guide, and the microgrid/battery-backup guide for the specifics',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Why Manage Energy Locally',
        content:
          '**A cloud energy-monitoring app sends your per-device usage patterns — when you run laundry, how often you charge an EV, your daily routine — to the manufacturer\'s servers.** A local setup keeps that same data on your own network and still gets automation and historical tracking.',
        items: [
          'Granular energy data reveals occupancy patterns and daily routines — the same information a cloud camera or voice assistant would expose, just inferred from power draw instead.',
          'Many vendor energy apps require an account and internet connectivity even to view local usage, and can stop working if the vendor discontinues the app or changes its terms.',
          'A local setup keeps working during an internet outage — the load-shifting automations that save money don\'t depend on a cloud service being reachable.',
        ],
      },
      whatToMonitor: {
        id: 'what-to-monitor',
        title: 'What to Monitor',
        content:
          '**Start with whole-home usage via a CT clamp on the main feed, then add smart plugs on the appliances that matter for automation — not everything needs its own sensor.**',
        items: [
          'A CT (current transformer) clamp on the main feed gives whole-home wattage without touching individual circuits — this is the baseline the Energy dashboard needs.',
          'Add energy-monitoring smart plugs on high-draw or schedulable appliances: EV charger, water heater, washer/dryer, dishwasher. These are the ones worth automating around.',
          'If you have solar and/or a battery, their own local integration (see the Matter inverter/heat-pump integration guide) feeds generation and state-of-charge into the same dashboard.',
          'Skip monitoring low-draw always-on devices individually — they add dashboard noise without giving you anything to automate.',
        ],
      },
      automations: {
        id: 'automations',
        title: 'Load-Shifting Automations',
        content:
          '**The payoff for local energy monitoring is automations that shift high-draw appliances to the cheapest or greenest hours, running entirely on your own hub.**',
        items: [
          'Time-of-use tariff shifting: run the dishwasher, washer, and EV charger during off-peak-rate hours, using Home Assistant\'s scheduling and your utility\'s published rate windows.',
          'Solar-following automations: only start high-draw appliances when local solar generation (fed from your inverter integration) exceeds a threshold, maximizing self-consumption over grid draw.',
          'Battery-aware automations: prioritize battery discharge for evening peak-rate hours if you have home battery storage, rather than drawing from the grid.',
          'All of this runs as standard Home Assistant automations — no cloud service needs to be reachable for the logic to execute.',
        ],
      },
      stackFit: {
        id: 'stack-fit',
        title: 'Where This Fits in the Stack',
        content:
          '**This article is the overview; the next three cover the specific pieces — Matter-based inverter/heat-pump integration, the Home Assistant Energy dashboard setup itself, and whole-home battery backup.**',
        items: [
          'For connecting a solar inverter or heat pump as a local, Matter-controlled device rather than through a vendor cloud app, see the Matter solar inverter + heat pump integration guide.',
          'For the actual dashboard configuration — adding sensors, setting up cost tracking, reading the charts — see the Home Assistant Energy dashboard setup guide.',
          'For using a home battery as backup during outages, see the home energy microgrid guide.',
          'If you don\'t yet have solar hardware, see the balcony solar cluster for what a small-scale local setup looks like before you plan whole-home energy management around it.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Do I need solar panels for local energy management to be worth it?', a: 'No. A CT clamp plus a few energy-monitoring smart plugs gives you load-shifting automations (time-of-use tariffs, avoiding peak-rate hours) even without any solar generation. Solar and battery integration add more automation options but aren\'t required to start.' },
          { q: 'What does Home Assistant\'s Energy dashboard need to get started?', a: 'At minimum, a grid-consumption sensor — usually a CT clamp on the main feed, or a smart meter integration if your utility supports one. Everything else (per-appliance plugs, solar, battery) is additive.' },
          { q: 'Does this replace my utility\'s own energy app?', a: 'It can, for usage tracking and automation. Some utilities still require their own app for billing or tariff-switching, but day-to-day monitoring and automation work entirely through Home Assistant once it\'s wired up.' },
          { q: 'Is a CT clamp difficult to install?', a: 'Most clamp-style CT sensors clip around an existing cable inside the breaker panel without cutting wires, though working inside a panel means turning off power first and following the sensor\'s installation instructions. If you\'re not comfortable inside a breaker panel, use a licensed electrician for that step.' },
          { q: 'Can I automate around a variable electricity tariff?', a: 'Yes — if your utility publishes rate windows (or you can enter them manually), Home Assistant automations can schedule high-draw appliances for the cheapest hours using the same scheduling tools as any other automation.' },
          { q: 'How is this different from a smart thermostat\'s built-in energy reports?', a: 'A thermostat\'s own app only reports on itself and usually requires its cloud service. The Energy dashboard aggregates every monitored device — thermostat, EV charger, appliances, solar, battery — into one local view and lets automations act across all of them together.' },
          { q: 'Do smart plugs need to be locally controlled to work with this?', a: 'For the monitoring and automation described here, the plug needs to report its data into Home Assistant, ideally over a local integration (Zigbee, Z-Wave, or a locally-polled Wi-Fi integration) rather than only through the vendor\'s cloud API, so the automation keeps working offline.' },
          { q: 'What if I only have a few smart plugs and no solar?', a: 'Start there. A handful of energy-monitoring plugs on your highest-draw appliances, feeding the Energy dashboard, already enables time-of-use load shifting — solar and battery integration are additions you can make later without starting over.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Home Assistant Energy Dashboard: Complete Setup Guide](/smart-home/home-assistant-energy-dashboard-guide) — the how-to',
          '[Matter Integration for Solar Inverters and Heat Pumps](/smart-home/matter-solar-inverter-heat-pump-integration) — connecting generation hardware locally',
          '[Turning Your Home Into an Energy Microgrid](/smart-home/home-as-energy-microgrid-2027) — battery backup and outage independence',
          '[Best Hardware for a Local Smart Home + Local AI](/smart-home/best-hardware-for-local-smart-home) — the hub hardware this runs on',
          '[What Is Balcony Solar?](/balcony-solar/what-is-balcony-solar) — cross-cluster: small-scale local solar basics',
          '[Connect Balcony Solar to Home Assistant, No Cloud](/balcony-solar/connect-balcony-solar-home-assistant-local) — cross-cluster: local balcony-solar integration',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Local Smart Home Energy Management (2027)',
      description: 'Local smart home energy management in 2027: run solar, battery, and appliance monitoring through Home Assistant\'s Energy dashboard, with no usage data sent to the cloud.',
      url: 'https://www.promptquorum.com/smart-home/local-smart-home-energy-management-2027',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Home Assistant Energy dashboard' }, { '@type': 'Thing', name: 'Local energy monitoring' }, { '@type': 'Thing', name: 'Load-shifting automation' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Do I need solar panels for local energy management to be worth it?', acceptedAnswer: { '@type': 'Answer', text: 'No. A CT clamp plus a few energy-monitoring smart plugs gives you load-shifting automations even without any solar generation. Solar and battery integration add more automation options but aren\'t required to start.' } },
        { '@type': 'Question', name: 'What does Home Assistant\'s Energy dashboard need to get started?', acceptedAnswer: { '@type': 'Answer', text: 'At minimum, a grid-consumption sensor — usually a CT clamp on the main feed, or a smart meter integration if supported. Everything else is additive.' } },
        { '@type': 'Question', name: 'Does this replace my utility\'s own energy app?', acceptedAnswer: { '@type': 'Answer', text: 'It can, for usage tracking and automation. Some utilities still require their own app for billing, but day-to-day monitoring and automation work entirely through Home Assistant once configured.' } },
        { '@type': 'Question', name: 'Is a CT clamp difficult to install?', acceptedAnswer: { '@type': 'Answer', text: 'Most clip around an existing cable inside the breaker panel without cutting wires, though this means working inside the panel with the power off — use a licensed electrician if you\'re not comfortable doing that yourself.' } },
        { '@type': 'Question', name: 'Can I automate around a variable electricity tariff?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — if your utility publishes rate windows, Home Assistant automations can schedule high-draw appliances for the cheapest hours using standard scheduling tools.' } },
      ],
    },
  },
}
