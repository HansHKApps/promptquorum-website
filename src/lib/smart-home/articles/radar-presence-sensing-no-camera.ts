import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    title: 'Radar Presence Sensing: Room Occupancy Without a Camera (2027)',
    seoTitle: 'Radar Presence Sensing, No Camera (2027)',
    intro:
      'mmWave radar sensors detect room occupancy and even micro-movements like breathing without capturing any image, making them a privacy-friendlier alternative to a camera for presence-based automations. [VERIFY: specific current radar sensor models and pricing] before recommending a product, since this is a narrow, fast-evolving hardware category. This article covers how radar presence sensing works, where it beats a camera or motion sensor, and how to wire it into Home Assistant.',
    metaDescription:
      'Radar presence sensors for room occupancy detection without a camera: how mmWave sensing works and where it beats motion sensors or cameras in a smart home.',
    twitterDescription:
      'mmWave radar sensors detect room occupancy without a camera — more accurate than PIR motion sensors, more private than a camera.',
    readTime: '6 min read',
    educationalLevel: 'Intermediate',
    audience: 'Smart home owners wanting accurate presence detection without adding a camera',
    primaryTerm: 'radar presence sensor smart home',
    targetKeywords: [
      'radar presence sensor smart home',
      'mmwave occupancy sensor no camera',
      'room presence detection without camera',
      'radar sensor home assistant',
      'privacy occupancy sensor',
    ],
    leadAnswerBlock:
      '**A radar (mmWave) presence sensor detects whether a room is occupied — including a stationary person, not just motion — without capturing any image, making it more accurate than a passive-infrared motion sensor and more private than a camera for presence-based automations.** [VERIFY: current specific sensor models and prices] before recommending a purchase.',
    quickAnswerTop: {
      en: {
        question: 'Can I detect room occupancy without a camera?',
        answer:
          'Yes — mmWave radar presence sensors detect whether someone is in a room, including when they\'re sitting still, by sensing motion and micro-movement (like breathing) via radio waves, without capturing any image. This solves the main limitation of passive-infrared (PIR) motion sensors, which stop detecting a stationary person after a short timeout. [VERIFY: current specific product models and pricing] before purchasing, since this sensor category is still maturing and models change.',
        bullets: [
          'Radar sensors detect stationary occupancy, not just motion — solves PIR\'s "stops detecting when still" problem',
          'No image is captured — more private than a camera for presence detection',
          'Integrates into Home Assistant as a standard occupancy/presence entity',
          '[VERIFY: current specific models and prices] before purchasing',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'How Radar Presence Sensing Works', anchor: 'how-it-works' },
      { label: 'Radar vs PIR Motion vs Camera', anchor: 'radar-vs-alternatives' },
      { label: 'Home Assistant Integration', anchor: 'ha-integration' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Radar (mmWave) presence sensors detect room occupancy, including a stationary person, without capturing an image — more accurate than motion sensors and more private than a camera.' },
      { type: 'plain-terms', content: 'A regular motion sensor only notices when something moves, so it can think a room is empty even while you\'re sitting still reading. A radar sensor uses radio waves instead of light, and can detect that a person is present even without motion — similar to how radar detects a stationary car — all without taking a picture of the room.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'mmWave radar sensors detect occupancy including a stationary person, unlike PIR motion sensors which need movement to trigger',
          'No image is captured — presence data only, which is more private than a camera for this use case',
          '[VERIFY: current specific product models and pricing] — this is a fast-evolving, narrow hardware category',
          'Integrates into Home Assistant as a standard presence/occupancy entity, usable in any automation the same way a motion sensor would be',
          'See the sensor fusion guide for combining radar with other sensor types to reduce false positives further',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'How Radar Presence Sensing Works',
        content:
          '**A radar sensor emits low-power radio waves and measures the reflections to detect movement and even micro-movements like breathing, which is what lets it register a stationary person as "present" rather than timing out.**',
        items: [
          'This is fundamentally different from a passive-infrared (PIR) motion sensor, which only detects heat-signature changes from movement and cannot distinguish a stationary occupant from an empty room.',
          'Because it works via radio reflection rather than light or image capture, a radar sensor can also work through some materials and doesn\'t need line-of-sight the way an optical sensor does.',
          'Some radar sensors report distance and zone information in addition to a simple occupied/unoccupied state, letting automations react to where in a room someone is, not just whether the room is occupied.',
        ],
      },
      radarVsAlternatives: {
        id: 'radar-vs-alternatives',
        title: 'Radar vs PIR Motion vs Camera',
        content:
          '**Choose radar when you need accurate stationary-occupancy detection without a camera; choose PIR motion sensors for simple, low-cost trigger-on-movement automations; choose a camera when you need to identify what or who is present, not just whether the room is occupied.**',
        items: [
          'PIR motion sensors are cheaper and sufficient for automations that only need to detect movement, like a hallway light that turns on when you walk through — they aren\'t suited to "keep the lights on while someone is sitting still" automations without workarounds.',
          'A camera (see the local AI security camera guide) can identify specific objects or people, which radar cannot — use a camera when identification matters, not just presence.',
          'Radar sensors avoid the privacy trade-off of a camera entirely for automations that only need to know "is someone here," which is a meaningful privacy improvement for rooms like bedrooms or bathrooms where a camera would be undesirable.',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Home Assistant Integration',
        content:
          '**A radar presence sensor typically integrates into Home Assistant as a binary occupancy sensor (and sometimes additional zone/distance sensors), usable in any automation the same way a motion sensor entity would be.**',
        items: [
          'Most current radar sensors integrate over Zigbee or a local Wi-Fi/ESPHome-based integration — check the specific product\'s integration method before buying if local control (not a cloud dependency) matters to you.',
          'Because the entity behaves like a standard presence sensor, existing automations built around motion sensors can often be adapted to a radar sensor with minimal changes — replace the trigger entity, keep the automation logic.',
          'Combining radar with other sensor types (contact sensors, a camera, audio) via sensor fusion can reduce false positives further — see the sensor fusion in the smart home guide.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Does a radar sensor capture any images?', a: 'No — radar presence sensors detect occupancy via radio wave reflection, not image capture. This is the core privacy advantage over a camera for presence detection.' },
          { q: 'Can radar sensors detect a person who is sitting completely still?', a: 'Yes — this is the main advantage over PIR motion sensors, which rely on movement and typically time out when someone stops moving. Radar can detect micro-movements like breathing to register continued occupancy.' },
          { q: 'How much do radar presence sensors cost?', a: '[VERIFY: current pricing] — this is a narrower, faster-evolving product category than basic motion sensors; check current retailer listings rather than relying on a fixed price range.' },
          { q: 'Do radar sensors work through walls or doors?', a: 'Some can detect through certain materials to a limited degree, but this varies significantly by product and isn\'t a reliable feature to design an automation around — [VERIFY: specific product capabilities] rather than assuming through-wall detection.' },
          { q: 'Is a radar sensor better than a PIR motion sensor for every use case?', a: 'No — PIR sensors are cheaper and perfectly adequate for simple trigger-on-movement automations. Radar is worth the added cost specifically when you need accurate stationary-occupancy detection.' },
          { q: 'Can I use a radar sensor for security instead of a camera?', a: 'Radar can detect presence/intrusion but cannot identify who or what triggered it the way a camera can — for security applications requiring identification, a camera (or radar plus camera together via sensor fusion) is the more complete solution.' },
          { q: 'Does a radar sensor need internet access to work?', a: 'This depends on the specific product\'s integration — check whether it uses a local integration (Zigbee, ESPHome) versus a cloud-dependent app before buying if offline reliability matters to you.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Sensor Fusion in the Smart Home](/smart-home/sensor-fusion-smart-home-2027) — combining radar with other sensor types',
          '[Local AI Security Cameras with Frigate](/smart-home/local-ai-security-camera) — the identification alternative to presence-only radar',
          '[Smart Home Privacy Risks](/smart-home/smart-home-privacy-risks) — the broader privacy context radar sensing addresses',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Radar Presence Sensing: Room Occupancy Without a Camera (2027)',
      description: 'Radar presence sensors for room occupancy detection without a camera: how mmWave sensing works and where it beats motion sensors or cameras.',
      url: 'https://www.promptquorum.com/smart-home/radar-presence-sensing-no-camera',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Radar presence sensor' }, { '@type': 'Thing', name: 'mmWave sensing' }, { '@type': 'Thing', name: 'Occupancy detection' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Does a radar sensor capture any images?', acceptedAnswer: { '@type': 'Answer', text: 'No — radar presence sensors detect occupancy via radio wave reflection, not image capture.' } },
        { '@type': 'Question', name: 'Can radar sensors detect a person who is sitting completely still?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — radar can detect micro-movements like breathing to register continued occupancy, unlike PIR motion sensors which time out.' } },
        { '@type': 'Question', name: 'Is a radar sensor better than a PIR motion sensor for every use case?', acceptedAnswer: { '@type': 'Answer', text: 'No — PIR sensors are cheaper and adequate for simple trigger-on-movement automations. Radar is worth it for accurate stationary-occupancy detection specifically.' } },
        { '@type': 'Question', name: 'Can I use a radar sensor for security instead of a camera?', acceptedAnswer: { '@type': 'Answer', text: 'Radar can detect presence/intrusion but cannot identify who or what triggered it the way a camera can.' } },
      ],
    },
  },
}
