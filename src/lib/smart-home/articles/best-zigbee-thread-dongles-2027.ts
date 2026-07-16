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
    title: 'Best Zigbee and Thread USB Dongles (2027)',
    seoTitle: 'Best Zigbee + Thread Dongles (2027)',
    intro:
      'A USB Zigbee coordinator or Thread border router dongle is what turns a mini PC or Raspberry Pi running Home Assistant into a full smart home hub capable of pairing Zigbee and Thread devices directly. [VERIFY: current specific dongle models, chipsets, and pricing] before recommending a product — this category has a history of silent chipset revisions under the same product name.',
    metaDescription:
      'Best Zigbee and Thread USB dongles for Home Assistant in 2027: what chipset differences mean and how to pair a dongle with a mini PC or Pi hub.',
    twitterDescription:
      'Buying guide for Zigbee coordinator and Thread border router USB dongles — chipset differences and what to check before buying.',
    readTime: '6 min read',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant users adding Zigbee or Thread device support to a mini PC or Pi hub',
    primaryTerm: 'best zigbee dongle home assistant',
    targetKeywords: [
      'best zigbee dongle home assistant',
      'thread border router usb dongle',
      'zigbee coordinator usb',
      'home assistant zigbee2mqtt dongle',
      'thread dongle raspberry pi',
    ],
    leadAnswerBlock:
      '**A USB Zigbee coordinator dongle adds Zigbee device pairing to a Home Assistant hub that doesn\'t have it built in, and a Thread border router dongle does the same for Thread devices — the chipset inside the dongle, not just the brand name, determines range and reliability.** [VERIFY: current specific dongle models, their chipsets, and pricing] before buying, since this category has seen silent chipset changes under the same product name.',
    quickAnswerTop: {
      en: {
        question: 'What USB dongle do I need for Zigbee or Thread devices with Home Assistant?',
        answer:
          'A Zigbee coordinator dongle (commonly paired with the Zigbee2MQTT or ZHA integration) lets Home Assistant pair and control Zigbee devices directly; a Thread border router dongle does the equivalent for Thread devices, though many Thread border routers are built into existing smart speakers/hubs rather than needing a dedicated dongle. [VERIFY: current specific product recommendations, their chipsets, and prices] — check the chipset (not just the product name) since some manufacturers have changed the internal chipset of the same product line without renaming it.',
        bullets: [
          'Zigbee coordinator dongle: needed if your hub has no built-in Zigbee radio',
          'Thread border router: often already built into an existing smart speaker/hub — check before buying a dedicated dongle',
          '[VERIFY: chipset, not just product name] — this category has seen silent internal revisions',
          'A USB extension cable improves range/reliability by moving the dongle away from a mini PC\'s own radio interference',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Zigbee Coordinator Dongles', anchor: 'zigbee-dongles' },
      { label: 'Thread Border Router Dongles', anchor: 'thread-dongles' },
      { label: 'Setup Tips', anchor: 'setup-tips' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: "A USB Zigbee coordinator dongle or Thread border router dongle adds device-pairing radio support to a Home Assistant hub — check the chipset specifically, since product names don't always reflect internal chipset changes." },
      { type: 'plain-terms', content: 'A mini PC or Raspberry Pi running Home Assistant usually doesn\'t have a built-in radio for Zigbee devices like sensors and bulbs. A small USB dongle adds that radio. The same applies to Thread, though many people already own a Thread-capable device (like a smart speaker) without realizing it.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          "Zigbee coordinator dongle: needed if your Home Assistant hub has no built-in Zigbee radio",
          'Thread border router: check if you already have one built into an existing smart speaker/hub before buying a dedicated dongle',
          '[VERIFY: chipset details for current product recommendations] — this category has seen silent chipset revisions under the same product name',
          'A USB extension cable moving the dongle away from the hub\'s own electronics often improves reliability',
        ],
      },
      zigbeeDongles: {
        id: 'zigbee-dongles',
        title: 'Zigbee Coordinator Dongles',
        content:
          '**A Zigbee coordinator dongle plugs into your Home Assistant hub via USB and pairs with the Zigbee2MQTT or ZHA integration — the specific radio chipset inside determines range and reliability more than the outer product branding.**',
        items: [
          '[VERIFY: current recommended chipsets and specific product models] — Zigbee coordinator hardware has a track record of manufacturers revising the internal chipset of a product line without changing its name, which can affect compatibility and performance.',
          'Check current Zigbee2MQTT or Home Assistant ZHA documentation for confirmed-compatible chipsets before buying, rather than relying on generic marketplace listings.',
          'A USB extension cable (a few dollars) moving the dongle 1-2 meters away from a mini PC\'s own USB 3.0 ports and Wi-Fi radio commonly improves Zigbee range and reliability, since USB 3.0 can interfere with the 2.4GHz Zigbee band.',
        ],
      },
      threadDongles: {
        id: 'thread-dongles',
        title: 'Thread Border Router Dongles',
        content:
          '**A dedicated Thread border router dongle is only needed if you don\'t already have one built into an existing smart speaker or hub — check your current hardware first.**',
        items: [
          'Many households already have a Thread border router without realizing it, built into an existing smart speaker or hub from a major ecosystem — see the Thread/Wi-Fi routers guide for how to check.',
          'A dedicated Thread border router dongle for a Home Assistant hub is useful if you want Thread coverage independent of another ecosystem\'s hardware, or additional border routers to extend mesh coverage.',
          '[VERIFY: current specific Thread border router dongle products and their Home Assistant compatibility] before purchasing.',
        ],
      },
      setupTips: {
        id: 'setup-tips',
        title: 'Setup Tips',
        content:
          '**Use a USB extension cable, avoid USB hubs for the radio dongle specifically, and check firmware update requirements before first use.**',
        items: [
          'Plug the dongle directly into a hub port (via extension cable) rather than through a USB hub, which can introduce latency or interference for radio devices.',
          'Some coordinator dongles need a firmware flash before first use to run the correct Zigbee2MQTT/ZHA-compatible firmware — check the specific product\'s setup documentation.',
          'Position the dongle (via its extension cable) away from other 2.4GHz sources (Wi-Fi routers, USB 3.0 ports) for the most reliable range.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Do I need both a Zigbee dongle and a Thread dongle?', a: 'Only if you have devices of both types and no existing Thread border router. Many households already have Thread coverage via an existing smart speaker or hub.' },
          { q: 'Does the product name guarantee the same chipset over time?', a: 'No — this category has seen manufacturers change the internal chipset of a product line without renaming it. Check current documentation and community reports for the specific chipset, not just the product name.' },
          { q: 'Why use a USB extension cable for the dongle?', a: 'It moves the radio dongle away from a mini PC\'s own USB 3.0 ports and Wi-Fi radio, both of which can interfere with the Zigbee 2.4GHz band, generally improving range and reliability.' },
          { q: 'Zigbee2MQTT or ZHA — does the dongle choice matter?', a: 'Check the specific integration\'s (Zigbee2MQTT or ZHA) current supported-chipset list before buying, since not every dongle is supported identically by both.' },
          { q: 'Can I use a Thread dongle instead of my existing smart speaker\'s border router?', a: 'You can run multiple Thread border routers simultaneously — they cooperate to extend mesh coverage rather than conflict, so adding a dedicated one is additive, not a replacement requirement.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Matter, Thread, Zigbee, Z-Wave: Protocols Explained](/smart-home/smart-home-protocols-explained) — protocol fundamentals',
          '[Thread and Wi-Fi 7 Routers for Smart Homes](/smart-home/thread-14-wifi-7-routers-guide) — Thread border router basics',
          '[Best Hardware for a Local Smart Home + Local AI](/smart-home/best-hardware-for-local-smart-home) — the hub hardware this pairs with',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Zigbee and Thread USB Dongles (2027)',
      description: 'Best Zigbee and Thread USB dongles for Home Assistant: chipset differences and what to check before buying.',
      url: 'https://www.promptquorum.com/smart-home/best-zigbee-thread-dongles-2027',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Zigbee coordinator' }, { '@type': 'Thing', name: 'Thread border router' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Do I need both a Zigbee dongle and a Thread dongle?', acceptedAnswer: { '@type': 'Answer', text: 'Only if you have devices of both types and no existing Thread border router.' } },
        { '@type': 'Question', name: 'Does the product name guarantee the same chipset over time?', acceptedAnswer: { '@type': 'Answer', text: 'No — manufacturers have changed internal chipsets of a product line without renaming it.' } },
        { '@type': 'Question', name: 'Why use a USB extension cable for the dongle?', acceptedAnswer: { '@type': 'Answer', text: 'It moves the radio dongle away from USB 3.0 ports and Wi-Fi, both of which can interfere with the Zigbee band.' } },
      ],
    },
  },
}
