import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    title: 'Home Assistant Energy Dashboard: Complete Setup Guide (2027)',
    seoTitle: 'Home Assistant Energy Dashboard Setup (2027)',
    intro:
      'Home Assistant\'s built-in Energy dashboard tracks grid consumption, solar generation, battery state, and individual-device usage in one local view — the setup takes adding a few sensor entities, not writing any automation code. This guide walks through adding a grid sensor, solar and battery sensors if you have them, individual device tracking, and reading the resulting cost and usage charts.',
    metaDescription:
      'Set up Home Assistant\'s Energy dashboard in 2027: add grid, solar, battery, and device sensors, configure cost tracking, and read the usage charts.',
    twitterDescription:
      'Step-by-step Home Assistant Energy dashboard setup: grid sensor, solar/battery integration, per-device tracking, and cost configuration.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    audience: 'Home Assistant users setting up energy tracking for the first time',
    primaryTerm: 'home assistant energy dashboard setup',
    targetKeywords: [
      'home assistant energy dashboard setup',
      'how to configure ha energy dashboard',
      'home assistant energy tracking',
      'home assistant solar dashboard',
      'home assistant cost tracking energy',
    ],
    leadAnswerBlock:
      '**Set up Home Assistant\'s Energy dashboard by adding a grid-consumption sensor first (from Settings → Dashboards → Energy), then adding solar, battery, and individual-device sensors as optional extras — each addition just points the dashboard at an existing sensor entity, no coding required.** The dashboard builds its charts automatically once sensors are configured.',
    quickAnswerTop: {
      en: {
        question: 'How do I set up the Home Assistant Energy dashboard?',
        answer:
          'Go to Settings → Dashboards → Energy in Home Assistant. Add a grid-consumption sensor first — this can come from a CT clamp integration, a smart meter integration, or any sensor entity that reports energy in kWh. Then optionally add solar production, battery charge/discharge, and gas/water if metered. For individual devices, add each energy-monitoring smart plug as an "individual device" under the same Energy configuration page. Set your electricity tariff (fixed rate or time-of-use) so the dashboard can calculate cost, not just usage.',
        bullets: [
          'Step 1: add a grid-consumption sensor (CT clamp or smart meter integration)',
          'Step 2 (optional): add solar production and battery sensors',
          'Step 3 (optional): add individual devices — one entry per energy-monitoring smart plug',
          'Step 4: set your tariff so the dashboard shows cost, not just kWh',
          'The dashboard needs at least 24 hours of data before charts become meaningful',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Before You Start', anchor: 'before-you-start' },
      { label: 'Adding a Grid Sensor', anchor: 'grid-sensor' },
      { label: 'Adding Solar and Battery', anchor: 'solar-battery' },
      { label: 'Adding Individual Devices', anchor: 'individual-devices' },
      { label: 'Setting Up Cost Tracking', anchor: 'cost-tracking' },
      { label: 'Reading the Dashboard', anchor: 'reading-dashboard' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Set up Home Assistant\'s Energy dashboard from Settings → Dashboards → Energy by adding a grid-consumption sensor first, then optional solar, battery, and individual-device sensors, and your electricity tariff for cost tracking.' },
      { type: 'plain-terms', content: 'The Energy dashboard is a built-in Home Assistant screen that turns raw sensor readings into usage charts and cost estimates. You don\'t write any code — you just tell it which existing sensor represents your grid power, your solar panels, your battery, and any individually-monitored devices, and it draws the graphs from there.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Go to Settings → Dashboards → Energy to start configuration — no YAML editing required',
          'Add a grid-consumption sensor first (CT clamp or smart meter integration) — this is the only required step',
          'Solar, battery, gas/water, and individual devices are all optional additions on the same page',
          'Set your electricity tariff (fixed or time-of-use) so the dashboard shows cost alongside usage',
          'Give it at least 24 hours before expecting meaningful charts — the dashboard aggregates hourly data',
        ],
      },
      beforeYouStart: {
        id: 'before-you-start',
        title: 'Before You Start',
        content:
          '**You need at least one sensor entity reporting energy in kWh (or power in W, which Home Assistant can integrate into kWh) before the Energy dashboard has anything to display.**',
        items: [
          'This is usually a CT clamp integration (many brands report directly into Home Assistant), a smart meter integration if your utility/region supports one, or a whole-home monitor.',
          'If you don\'t have any energy sensor yet, see the local smart home energy management overview and the best hardware for a local smart home guide for hardware options before returning here.',
          'You don\'t need solar, a battery, or any individual-device sensors to get started — those are additive.',
        ],
      },
      gridSensor: {
        id: 'grid-sensor',
        title: 'Adding a Grid Sensor',
        content:
          '**In Settings → Dashboards → Energy, click "Add Consumption" under Electricity grid, and select your grid-consumption sensor entity.**',
        items: [
          'If your sensor reports power (W) rather than energy (kWh), Home Assistant\'s Riemann sum integration helper converts it — the Energy dashboard setup flow prompts for this automatically when needed.',
          'If you have solar, also mark whether your grid sensor already nets out solar production (some smart meters do) or reports gross consumption — this affects whether you need a separate "return to grid" sensor.',
          'This single step is enough to start seeing a basic usage chart; everything else in this guide is optional refinement.',
        ],
      },
      solarBattery: {
        id: 'solar-battery',
        title: 'Adding Solar and Battery',
        content:
          '**If you have solar generation and/or battery storage, add them as separate sensor entities on the same Energy configuration page — "Solar Panels" and "Home Battery Storage" sections.**',
        items: [
          'Solar production needs its own sensor entity, typically from your inverter\'s local integration (see the Matter solar inverter integration guide, or your inverter\'s existing local API integration).',
          'Battery storage needs two sensor entities — energy going into the battery and energy coming out — so the dashboard can show charge/discharge separately from grid and solar.',
          'Once both are configured, the dashboard\'s energy distribution chart shows how much of your consumption came from solar, battery, or grid at any point in time.',
        ],
      },
      individualDevices: {
        id: 'individual-devices',
        title: 'Adding Individual Devices',
        content:
          '**Under "Individual devices," add each energy-monitoring smart plug or built-in appliance sensor you want tracked separately — this is what lets you see which appliance is driving your usage.**',
        items: [
          'Any sensor entity reporting energy in kWh can be added here, most commonly an energy-monitoring smart plug on an EV charger, water heater, or major appliance.',
          'You don\'t need to monitor everything — see the local energy management overview for guidance on which devices are worth individually tracking.',
          'Individual devices appear as their own line items in the dashboard\'s usage breakdown, letting you compare appliances directly.',
        ],
      },
      costTracking: {
        id: 'cost-tracking',
        title: 'Setting Up Cost Tracking',
        content:
          '**Configure your electricity tariff under the grid consumption sensor\'s settings to turn kWh usage into cost estimates — either a fixed rate or a time-of-use schedule.**',
        items: [
          'A fixed rate is a single price per kWh, entered once.',
          'A time-of-use tariff lets you define rate windows (e.g., peak/off-peak hours) so the dashboard\'s cost calculation matches your actual bill — this is also what load-shifting automations (see the local energy management overview) key off of.',
          'If you have solar with a feed-in tariff (paid for exporting to the grid), configure that under the solar sensor\'s settings to see net cost, not just consumption cost.',
        ],
      },
      readingDashboard: {
        id: 'reading-dashboard',
        title: 'Reading the Dashboard',
        content:
          '**The dashboard shows a daily/weekly/monthly usage graph, an energy-distribution chart (grid vs. solar vs. battery), and a cost summary — give it 24 hours before expecting the first full day of data.**',
        items: [
          'The usage graph lets you compare days or weeks to spot patterns — a good first check after setup is whether your grid draw drops during solar-generation hours as expected.',
          'The distribution chart is the fastest way to see self-consumption ratio if you have solar — how much of your usage came from your own generation versus the grid.',
          'Individual-device entries let you sanity-check that a specific appliance\'s usage matches expectations, which is also useful for catching a miswired or misconfigured sensor early.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Do I need a smart meter for the Energy dashboard to work?', a: 'No — a CT clamp on your main feed works without a smart meter and is the more common setup. A smart meter integration is an alternative if your utility and region support one.' },
          { q: 'Can I use the Energy dashboard without solar or a battery?', a: 'Yes. Grid-consumption tracking alone gives you usage and cost charts. Solar and battery sections are entirely optional and can be added later.' },
          { q: 'Why is my dashboard empty right after setup?', a: 'The Energy dashboard aggregates data hourly, so it typically needs a full day before showing a complete usage graph. This is expected — check back after 24 hours.' },
          { q: 'What if my region uses a time-of-use tariff with more than two rate periods?', a: 'Home Assistant\'s tariff configuration supports multiple rate periods, not just peak/off-peak — enter each window and its rate under the grid sensor\'s cost settings.' },
          { q: 'Can I add individual devices later without redoing the setup?', a: 'Yes — individual devices, solar, and battery can all be added or removed independently at any time from the same Energy configuration page, without affecting the grid sensor already configured.' },
          { q: 'Does this dashboard require an internet connection?', a: 'No — once sensors are configured, the Energy dashboard runs entirely on your local Home Assistant instance and continues working during an internet outage, though any cloud-hosted sensor integration you\'ve chosen to use would not.' },
          { q: 'How is this different from a generic Home Assistant dashboard?', a: 'The Energy dashboard is a purpose-built, auto-generated view specifically for energy sensors — it handles unit conversion, cost calculation, and the distribution chart automatically, which a manually built dashboard would need custom cards and templates to replicate.' },
          { q: 'Can automations use Energy dashboard data directly?', a: 'Yes — the underlying sensor entities the Energy dashboard reads from are standard Home Assistant entities, so any automation (including the load-shifting examples in the local energy management overview) can reference them directly.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Smart Home Energy Management](/smart-home/local-smart-home-energy-management-2027) — the overview this guide implements',
          '[Home Assistant: Complete Getting-Started Guide](/smart-home/home-assistant-getting-started) — general first-install setup',
          '[Matter Integration for Solar Inverters and Heat Pumps](/smart-home/matter-solar-inverter-heat-pump-integration) — connecting generation hardware',
          '[Connect Balcony Solar to Home Assistant, No Cloud](/balcony-solar/connect-balcony-solar-home-assistant-local) — cross-cluster: feeding solar data in',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant Energy Dashboard: Complete Setup Guide (2027)',
      description: 'Set up Home Assistant\'s Energy dashboard in 2027: add grid, solar, battery, and device sensors, configure cost tracking, and read the usage charts.',
      url: 'https://www.promptquorum.com/smart-home/home-assistant-energy-dashboard-guide',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Home Assistant Energy dashboard' }, { '@type': 'Thing', name: 'Energy monitoring' }, { '@type': 'Thing', name: 'Cost tracking' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Set Up the Home Assistant Energy Dashboard',
      description: 'Configure grid, solar, battery, and individual-device sensors in Home Assistant\'s built-in Energy dashboard.',
      step: [
        { '@type': 'HowToStep', name: 'Add a grid sensor', text: 'Go to Settings → Dashboards → Energy and add your grid-consumption sensor entity.' },
        { '@type': 'HowToStep', name: 'Add solar and battery (optional)', text: 'Add solar production and battery charge/discharge sensor entities if you have that hardware.' },
        { '@type': 'HowToStep', name: 'Add individual devices (optional)', text: 'Add each energy-monitoring smart plug or appliance sensor under Individual Devices.' },
        { '@type': 'HowToStep', name: 'Configure your tariff', text: 'Enter your fixed rate or time-of-use tariff under the grid sensor settings for cost tracking.' },
        { '@type': 'HowToStep', name: 'Wait for data', text: 'Allow at least 24 hours for the dashboard to aggregate a full day of usage before reading the charts.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Do I need a smart meter for the Energy dashboard to work?', acceptedAnswer: { '@type': 'Answer', text: 'No — a CT clamp on your main feed works without a smart meter and is the more common setup.' } },
        { '@type': 'Question', name: 'Can I use the Energy dashboard without solar or a battery?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Grid-consumption tracking alone gives you usage and cost charts; solar and battery sections are optional.' } },
        { '@type': 'Question', name: 'Why is my dashboard empty right after setup?', acceptedAnswer: { '@type': 'Answer', text: 'The Energy dashboard aggregates data hourly and typically needs a full day before showing a complete usage graph.' } },
        { '@type': 'Question', name: 'Does this dashboard require an internet connection?', acceptedAnswer: { '@type': 'Answer', text: 'No — once sensors are configured, the Energy dashboard runs entirely on your local Home Assistant instance.' } },
        { '@type': 'Question', name: 'Can automations use Energy dashboard data directly?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — the underlying sensor entities are standard Home Assistant entities that any automation can reference directly.' } },
      ],
    },
  },
}
