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
    // Verified 2026-07-16 against official sources: aqara.com/Amazon (Aqara Smart Plug, ~$25-35,
    // Zigbee, ZHA/Zigbee2MQTT local, confirmed energy monitoring), getzooz.com (Zooz ZEN15, $39.95,
    // Z-Wave 800 series, W/A/V/kWh reporting), shelly-api-docs.shelly.cloud (every Shelly device
    // ships a documented local HTTP/CoAP/MQTT API by design — a real architectural fact, not
    // marketing). One item stays an open flag rather than a guess: the Shelly Plus Plug US is
    // confirmed DISCONTINUED, replaced by the Shelly Plug US Gen4, but its current exact price
    // could not be confirmed from available sources — flagged in the article rather than invented.
    // Also cites a real, sourced cautionary example: Sonoff's S31 (Wi-Fi) has energy monitoring but
    // its S31 Lite ZB (Zigbee) sibling does not, per Sonoff's own product pages — a live instance of
    // this article's own "check the specific model, not just the family name" warning.
    title: 'Best Energy-Monitoring Smart Plugs (2027)',
    seoTitle: 'Best Energy-Monitoring Smart Plugs (2027)',
    intro:
      "The best energy-monitoring smart plugs report wattage/kWh directly into Home Assistant's Energy dashboard over a local integration, rather than gating usage data behind a manufacturer's cloud app. Aqara's Zigbee Smart Plug and Zooz's ZEN15 (Z-Wave) both confirm genuine local energy reporting (checked 2026-07-16); Shelly's plugs ship a documented local API by design, though the Shelly Plus Plug US specifically is discontinued and replaced by the Gen4. Sonoff's own lineup shows why checking the specific model matters: its Wi-Fi S31 has energy monitoring, but its Zigbee sibling (S31 Lite ZB) does not.",
    metaDescription:
      'Best energy-monitoring smart plugs for Home Assistant in 2027: plugs that report local energy data, not just local on/off control. What to verify before buying.',
    twitterDescription:
      'Energy-monitoring smart plug buying guide — plugs that report wattage/kWh locally into Home Assistant, not just local on/off control.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    audience: 'Smart home owners choosing plugs for individual-device energy monitoring',
    primaryTerm: 'best energy monitoring smart plug home assistant',
    targetKeywords: [
      'best energy monitoring smart plug home assistant',
      'local energy monitoring smart plug 2027',
      'smart plug wattage home assistant',
      'zigbee energy monitoring plug',
      'smart plug energy dashboard',
    ],
    leadAnswerBlock:
      "**The best energy-monitoring smart plugs for a local-first setup report wattage/kWh directly into Home Assistant via a local integration (Zigbee, Z-Wave, or a locally-polled Wi-Fi integration), not just local on/off switching with energy data gated behind the manufacturer's cloud app.** Confirmed current options (checked 2026-07-16): Aqara's Smart Plug (Zigbee, ~$25-35) and Zooz's ZEN15 (Z-Wave, $39.95). Shelly's plugs ship a documented local API by design, but check the specific model — the Shelly Plus Plug US is discontinued (replaced by the Gen4), and its current price couldn't be confirmed here.",
    quickAnswerTop: {
      en: {
        question: 'Which smart plugs report energy usage locally to Home Assistant?',
        answer:
          "Look specifically for plugs where the energy-monitoring data (not just on/off control) is confirmed to work through a local integration — Zigbee and Z-Wave plugs generally handle this well, while some Wi-Fi plugs report on/off state locally but still route detailed wattage data through the manufacturer's cloud API. Confirmed current options (checked 2026-07-16): Aqara's Smart Plug (Zigbee, ~$25-35 on Amazon, works via ZHA or Zigbee2MQTT with full local energy sensors) and Zooz's ZEN15 (Z-Wave 800 series, $39.95 on getzooz.com, reports wattage/amperage/voltage/kWh). Shelly's entire lineup documents a local HTTP/CoAP/MQTT API by design, but check the specific model: the Shelly Plus Plug US is confirmed discontinued, replaced by the Shelly Plug US Gen4, whose current exact price wasn't confirmable here — check us.shelly.com directly. Sonoff's own lineup shows why the specific model matters: its Wi-Fi S31 has energy monitoring, but the Zigbee S31 Lite ZB does not, per Sonoff's own product pages.",
        bullets: [
          'Check specifically: local energy-data reporting, not just local on/off control — these can differ',
          'Confirmed current picks: Aqara Smart Plug (Zigbee, ~$25-35), Zooz ZEN15 (Z-Wave, $39.95)',
          'Shelly: documented local API by design, but the Plus Plug US is discontinued (→ Gen4) — price not confirmable here, check us.shelly.com',
          'Watch for: Sonoff\'s Wi-Fi S31 has energy monitoring; its Zigbee sibling S31 Lite ZB does not — same family, different capability',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Local On/Off vs Local Energy Reporting', anchor: 'onoff-vs-energy-reporting' },
      { label: 'What to Check Before Buying', anchor: 'what-to-check' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'The best energy-monitoring smart plugs report wattage/kWh directly into Home Assistant via a local integration — check this specifically, since local on/off control and local energy-data reporting are not always the same feature.' },
      { type: 'plain-terms', content: 'Some smart plugs let you turn a device on and off locally through Home Assistant, but still send the detailed power-usage numbers only to the manufacturer\'s own app. This guide is about finding plugs where the actual wattage data — not just on/off — stays local too, so it can feed into your Energy dashboard.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Check specifically for local energy-data reporting, not just local on/off control — these are sometimes separate features on the same plug',
          'Zigbee and Z-Wave plugs generally handle local energy reporting reliably',
          'Confirmed current picks (checked 2026-07-16): Aqara Smart Plug (Zigbee, ~$25-35), Zooz ZEN15 (Z-Wave, $39.95) — Shelly Plus Plug US is discontinued, replaced by Gen4',
          "See the Energy dashboard setup guide for how these plugs feed into Home Assistant once chosen",
        ],
      },
      onoffVsEnergyReporting: {
        id: 'onoff-vs-energy-reporting',
        title: 'Local On/Off vs Local Energy Reporting',
        content:
          '**A smart plug can be locally controllable (on/off works through Home Assistant without the cloud) while still reporting its detailed energy-usage data only through the manufacturer\'s cloud API — these are separate capabilities that don\'t always come together.**',
        items: [
          'This distinction matters specifically for feeding the Energy dashboard (see that setup guide) — a plug that only controls locally but reports energy via cloud won\'t give you fully local monitoring for that device.',
          'Check Home Assistant\'s own integration documentation for the specific plug model, which typically states explicitly whether energy attributes are available locally or require the cloud integration.',
          "Sonoff's own lineup is a real, current example of this exact split: the Wi-Fi S31 has built-in energy monitoring, but the Zigbee S31 Lite ZB does not, per Sonoff's own product pages — the same brand, a different capability by model, not just by protocol.",
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'What to Check Before Buying',
        content:
          '**Confirm local energy-reporting specifically (not just on/off), check the protocol (Zigbee/Z-Wave are generally more reliable for this than Wi-Fi), and verify current Home Assistant integration support for the exact model.**',
        items: [
          'Search Home Assistant\'s integration documentation for the exact plug model and confirm energy/power sensor entities are listed as locally available, not cloud-only.',
          "Zigbee and Z-Wave energy-monitoring plugs generally have a more consistent track record of fully local reporting than Wi-Fi plugs. Aqara's Smart Plug (~$25-35, confirmed on Aqara/Amazon) exposes full energy sensors locally via ZHA or Zigbee2MQTT; Zooz's ZEN15 (Z-Wave 800 series, $39.95, confirmed on getzooz.com) reports wattage, amperage, voltage, and kWh.",
          "Shelly's plugs document a local HTTP/CoAP/MQTT API across the whole lineup by design (per Shelly's own API documentation), but check availability of the specific current model — the Shelly Plus Plug US is discontinued, replaced by the Shelly Plug US Gen4; its current exact price wasn't confirmable from available sources, so check us.shelly.com directly before buying.",
        ],
        affiliateLinks: [
          { label: 'Aqara Smart Plug', url: 'https://www.aqara.com/en/product/smart-plug/', productName: 'Aqara Smart Plug', productCategory: 'Energy-monitoring smart plug' },
          { label: 'Zooz ZEN15 Power Switch', url: 'https://www.getzooz.com/zooz-zen15-power-switch/', productName: 'Zooz ZEN15', productCategory: 'Energy-monitoring smart plug' },
          { label: 'Shelly Plug US Gen4', url: 'https://us.shelly.com/products/shelly-plug-us-gen4-black', productName: 'Shelly Plug US Gen4', productCategory: 'Energy-monitoring smart plug' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Does local on/off control mean energy data is also local?', a: 'Not necessarily — some plugs separate these, controlling on/off locally while still routing detailed wattage data through the manufacturer\'s cloud. Check specifically for local energy-reporting support.' },
          { q: 'Are Zigbee plugs better than Wi-Fi plugs for energy monitoring?', a: 'Generally, yes, for confirmed local reporting — Zigbee and Z-Wave plugs have a more consistent track record here than Wi-Fi plugs, though check the specific model rather than assuming based on protocol alone.' },
          { q: 'How do these plugs connect to the Energy dashboard?', a: 'Once confirmed to report locally, add the plug\'s energy sensor entity under "Individual Devices" in the Energy dashboard setup — see that guide for the full walkthrough.' },
          { q: 'Can I mix protocols (some Zigbee, some Wi-Fi plugs)?', a: 'Yes — Home Assistant can combine sensor entities from different protocols into the same Energy dashboard view without issue, as long as each individually reports locally.' },
          { q: 'Do I need one plug per appliance, or can I monitor a whole circuit?', a: 'Smart plugs monitor individual appliances plugged into them; for whole-circuit or whole-home monitoring, a CT clamp on the breaker panel (see the local energy management overview) is the appropriate tool instead.' },
          { q: 'Does every plug in a product line have the same features?', a: "No — Sonoff's Wi-Fi S31 has built-in energy monitoring, but its Zigbee sibling, the S31 Lite ZB, does not, per Sonoff's own product pages. Check the specific model page, not just the brand or family name." },
          { q: 'Is the Shelly Plus Plug US still available?', a: "No — it's discontinued and replaced by the Shelly Plug US Gen4. Shelly's whole lineup documents a local HTTP/CoAP/MQTT API by design, but confirm current model availability and price at us.shelly.com before buying." },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Home Assistant Energy Dashboard: Complete Setup Guide](/smart-home/home-assistant-energy-dashboard-guide) — where these plugs feed in',
          '[Local Smart Home Energy Management](/smart-home/local-smart-home-energy-management-2027) — the broader monitoring strategy',
          '[Best Zigbee and Thread USB Dongles](/smart-home/best-zigbee-thread-dongles-2027) — the radio hardware Zigbee plugs pair with',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Energy-Monitoring Smart Plugs (2027)',
      description: 'Best energy-monitoring smart plugs for Home Assistant: plugs that report local energy data, not just local on/off control.',
      url: 'https://www.promptquorum.com/smart-home/best-energy-monitoring-smart-plugs-2027',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Energy-monitoring smart plug' }, { '@type': 'Thing', name: 'Home Assistant Energy dashboard' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Does local on/off control mean energy data is also local?', acceptedAnswer: { '@type': 'Answer', text: 'Not necessarily — some plugs control on/off locally while routing detailed wattage data through the manufacturer\'s cloud.' } },
        { '@type': 'Question', name: 'Are Zigbee plugs better than Wi-Fi plugs for energy monitoring?', acceptedAnswer: { '@type': 'Answer', text: 'Generally yes for confirmed local reporting, though check the specific model rather than assuming based on protocol alone.' } },
        { '@type': 'Question', name: 'Do I need one plug per appliance, or can I monitor a whole circuit?', acceptedAnswer: { '@type': 'Answer', text: 'Smart plugs monitor individual appliances; for whole-circuit monitoring, a CT clamp on the breaker panel is the appropriate tool.' } },
      ],
    },
  },
}
