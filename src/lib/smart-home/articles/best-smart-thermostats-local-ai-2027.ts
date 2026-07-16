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
    // Verified 2026-07-16 against official sources: sinopetech.com (Zigbee thermostats, ~$80,
    // ZHA/Zigbee2MQTT local), Aqara/Amazon/Best Buy (Thermostat Hub W200, $159.99, Matter),
    // GoKeyless (2GIG-STZ-1, $123.60, Z-Wave Plus) — this replaces the GoControl GC-TBZ48, which
    // is confirmed DISCONTINUED and replaced by the 2GIG-STZ-1 per its own retailer listing (a
    // genuine swap, not part of the original spec). Ecobee is cited as a real, sourced cautionary
    // example, not a recommendation: Home Assistant's own ecobee integration docs confirm its IoT
    // class is "Cloud Polling," not local, despite being one of the most Home-Assistant-integrated
    // thermostat brands.
    title: 'Best Smart Thermostats for Local AI Control (2027)',
    seoTitle: 'Best Local-AI Thermostats (2027)',
    intro:
      'The best smart thermostats for local AI control expose a local API or Home Assistant integration, letting a local LLM automation adjust temperature without a cloud round-trip. Sinopé\'s Zigbee thermostats, Aqara\'s Thermostat Hub W200 (Matter), and the 2GIG-STZ-1 (Z-Wave Plus) all confirm genuine local operation (checked 2026-07-16); Ecobee, despite deep Home Assistant integration, is confirmed cloud-polling by Home Assistant\'s own documentation — a clear example of why "integrates with Home Assistant" isn\'t the same as "local."',
    metaDescription:
      'Best smart thermostats for local AI control in 2027: models with a genuine local API or Home Assistant integration. Several major brands are cloud-only — verify before buying.',
    twitterDescription:
      'Thermostat buying guide for local AI control — which brands expose a genuine local API vs. cloud-only operation.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    audience: 'Smart home buyers wanting a thermostat that works with local automation and a local LLM',
    primaryTerm: 'best smart thermostat local ai',
    targetKeywords: [
      'best smart thermostat home assistant local',
      'local ai thermostat control',
      'thermostat local api home assistant',
      'thermostat no cloud',
      'zigbee z-wave thermostat',
    ],
    leadAnswerBlock:
      '**The best smart thermostats for local AI control expose either a native local API or a Zigbee/Z-Wave/Matter integration that Home Assistant can use directly, letting a local LLM adjust climate settings without a cloud round-trip.** Confirmed current options (checked 2026-07-16): Sinopé\'s Zigbee thermostats (~$80, ZHA/Zigbee2MQTT), Aqara\'s Thermostat Hub W200 (Matter, $159.99), and the 2GIG-STZ-1 (Z-Wave Plus, ~$124). Ecobee is a well-known counter-example — confirmed cloud-polling, not local, by Home Assistant\'s own integration docs.',
    quickAnswerTop: {
      en: {
        question: 'Which smart thermostats work with local AI automation?',
        answer:
          "Look for thermostats using Zigbee, Z-Wave, or Matter, or those with a documented local API — these let Home Assistant (and, by extension, a local LLM automation) read and adjust the thermostat without going through the manufacturer's cloud service. Confirmed current options (checked 2026-07-16): Sinopé's Zigbee thermostats (~$80, pair via ZHA or Zigbee2MQTT), Aqara's Thermostat Hub W200 ($159.99, Matter, also a presence sensor and Matter hub), and the 2GIG-STZ-1 (~$124, Z-Wave Plus 700-series — the current successor to the now-discontinued GoControl GC-TBZ48). Ecobee is the clearest counter-example: despite being one of the most Home-Assistant-integrated thermostat brands, Home Assistant's own integration documentation lists its IoT class as \"Cloud Polling,\" not local — exactly the gap this guide is about.",
        bullets: [
          'Look for: Zigbee, Z-Wave, or Matter protocol support, or a documented local API',
          'Confirmed local picks: Sinopé Zigbee (~$80), Aqara Thermostat Hub W200 (Matter, $159.99), 2GIG-STZ-1 (Z-Wave Plus, ~$124)',
          'Watch for: Ecobee — deep Home Assistant integration, but confirmed "Cloud Polling," not local, per Home Assistant\'s own docs',
          'A locally-controlled thermostat lets an LLM automation (see the AI automations guide) adjust climate settings directly',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Local vs Cloud-Relayed Integration', anchor: 'local-vs-cloud-relayed' },
      { label: 'What to Verify Before Buying', anchor: 'what-to-verify' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Smart thermostats with genuine local control (Zigbee, Z-Wave, Matter, or a documented local API) let Home Assistant and a local LLM adjust climate settings without a cloud round-trip — several major brands remain cloud-only.' },
      { type: 'plain-terms', content: 'Some thermostats that say they "integrate with Home Assistant" actually still send every command through the manufacturer\'s cloud service first, even though it looks local to you. This guide is about finding thermostats where the connection genuinely stays on your own network.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Look for Zigbee, Z-Wave, or Matter protocol support, or a documented local API',
          '"Home Assistant integration" doesn\'t always mean local — some route through the manufacturer\'s cloud even when integrated',
          'Confirmed local picks (checked 2026-07-16): Sinopé Zigbee (~$80), Aqara Thermostat Hub W200 (Matter, $159.99), 2GIG-STZ-1 (Z-Wave Plus, ~$124)',
          'A locally-controlled thermostat is what lets AI automations (see that guide) adjust climate without a cloud dependency',
        ],
      },
      localVsCloudRelayed: {
        id: 'local-vs-cloud-relayed',
        title: 'Local vs Cloud-Relayed Integration',
        content:
          "**A thermostat's Home Assistant integration can be genuinely local (Zigbee/Z-Wave/Matter, or a local API) or cloud-relayed (the integration works, but every command still round-trips through the manufacturer's servers) — check which type before assuming full local control.**",
        items: [
          "Genuinely local: the thermostat communicates directly with your Home Assistant instance over your local network, continuing to work during an internet outage. Sinopé's Zigbee thermostats (~$80, via ZHA or Zigbee2MQTT), Aqara's Thermostat Hub W200 ($159.99, Matter), and the 2GIG-STZ-1 (~$124, Z-Wave Plus) all confirm this.",
          "Cloud-relayed: Home Assistant talks to the manufacturer's cloud API, which then talks to the thermostat — this stops working if your internet or the manufacturer's service is down, even though it looks integrated day-to-day. Ecobee is the clearest current example: Home Assistant's own integration page lists its IoT class as \"Cloud Polling,\" confirmed as of this writing.",
          "Check Home Assistant's own integration documentation for the specific model's IoT class (local push, local polling, or cloud polling) — this is stated explicitly on each integration's page and is more reliable than a manufacturer's marketing claims.",
        ],
        affiliateLinks: [
          { label: 'Sinopé Zigbee Thermostat', url: 'https://www.sinopetech.com/en/products/zigbee-thermostat-electric-baseboard', productName: 'Sinopé Zigbee Thermostat', productCategory: 'Smart thermostat' },
          { label: 'Aqara Thermostat Hub W200', url: 'https://us.aqara.com/products/thermostat-hub-w200', productName: 'Aqara Thermostat Hub W200', productCategory: 'Smart thermostat' },
          { label: '2GIG-STZ-1 Z-Wave Thermostat', url: 'https://2gig.com/product/2gig-stz-1-programmable-thermostat/', productName: '2GIG-STZ-1', productCategory: 'Smart thermostat' },
        ],
      },
      whatToVerify: {
        id: 'what-to-verify',
        title: 'What to Verify Before Buying',
        content:
          "**Check Home Assistant's own integration documentation for the specific thermostat model to see whether it's listed as local push/local polling versus cloud-dependent, before relying on general marketing claims.**",
        items: [
          'Home Assistant\'s integration listings typically specify the connection type (local push, local polling, or cloud) for each supported device — this is the most reliable source, more so than the thermostat manufacturer\'s own marketing.',
          'Check for discontinuations before buying based on an older recommendation: the once-common GoControl GC-TBZ48 Z-Wave thermostat is discontinued, replaced by the 2GIG-STZ-1 — the same model name doesn\'t always stay purchasable, so confirm current availability at a retailer, not just a product\'s existence.',
          'If a local LLM automation adjusting climate settings matters to you specifically, prioritize confirmed local push/polling support over other features when comparing models.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Does "works with Home Assistant" mean a thermostat is local?', a: 'Not always — some integrations relay through the manufacturer\'s cloud even when Home Assistant support exists. Check whether the specific integration is documented as local push/polling or cloud-dependent.' },
          { q: 'Are Zigbee or Z-Wave thermostats always local?', a: 'Generally yes, since those protocols communicate directly with a local coordinator rather than a manufacturer cloud service — this is one of the more reliable signals of genuine local control.' },
          { q: 'Can a local LLM adjust my thermostat directly?', a: 'Yes, if the thermostat is exposed as a standard Home Assistant entity via local integration — see the AI automations and home-assistant-ollama-integration guides for how this connects.' },
          { q: 'What happens to a cloud-relayed thermostat during an internet outage?', a: 'It typically stops responding to Home Assistant commands until connectivity is restored, since the command has to round-trip through the manufacturer\'s servers.' },
          { q: 'Does this affect energy-dashboard integration too?', a: 'If the thermostat reports usage/state locally, yes, it can feed into the Energy dashboard the same way — see that setup guide for details.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Smarter Home Automations with a Local LLM](/smart-home/ai-automations-local-llm) — what local thermostat control enables',
          '[Home Assistant Energy Dashboard: Complete Setup Guide](/smart-home/home-assistant-energy-dashboard-guide) — feeding thermostat data into the dashboard',
          '[Matter, Thread, Zigbee, Z-Wave: Protocols Explained](/smart-home/smart-home-protocols-explained) — protocol fundamentals',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Smart Thermostats for Local AI Control (2027)',
      description: 'Best smart thermostats for local AI control: models with a genuine local API or Home Assistant integration.',
      url: 'https://www.promptquorum.com/smart-home/best-smart-thermostats-local-ai-2027',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Smart thermostat' }, { '@type': 'Thing', name: 'Local API' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Does "works with Home Assistant" mean a thermostat is local?', acceptedAnswer: { '@type': 'Answer', text: 'Not always — some integrations relay through the manufacturer\'s cloud even when Home Assistant support exists.' } },
        { '@type': 'Question', name: 'Are Zigbee or Z-Wave thermostats always local?', acceptedAnswer: { '@type': 'Answer', text: 'Generally yes, since those protocols communicate directly with a local coordinator rather than a manufacturer cloud service.' } },
        { '@type': 'Question', name: 'What happens to a cloud-relayed thermostat during an internet outage?', acceptedAnswer: { '@type': 'Answer', text: 'It typically stops responding to Home Assistant commands until connectivity is restored.' } },
      ],
    },
  },
}
