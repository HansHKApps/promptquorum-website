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
    // Verified 2026-07-16 against Aqara's own spec page (us.aqara.com/pages/product-specs/presence-sensor-fp-2),
    // major US retailer listings (Amazon, Best Buy, Home Depot) for the Aqara FP2, and SmartHomeScene's
    // mmWave sensor module roundup + ESPHome's own LD2410 component docs for the Hi-Link LD2410/LD2410C/LD2450
    // DIY chips. Exact retail price fluctuates by retailer/promo — the range below is a checked snapshot, not
    // a fixed figure.
    intro:
      'mmWave radar sensors detect room occupancy and even micro-movements like breathing without capturing any image, making them a privacy-friendlier alternative to a camera for presence-based automations. The Aqara FP2 (around $80–85 at major US retailers) is a ready-to-use option, while Hi-Link\'s LD2410/LD2410C/LD2450 chips (around $15–25 as a DIY ESPHome build with an ESP32 board) are the common lower-cost path. This article covers how radar presence sensing works, where it beats a camera or motion sensor, and how to wire it into Home Assistant.',
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
      '**A radar (mmWave) presence sensor detects whether a room is occupied — including a stationary person, not just motion — without capturing any image, making it more accurate than a passive-infrared motion sensor and more private than a camera for presence-based automations.** The Aqara FP2 (~$80–85, ready-to-use) and Hi-Link\'s LD2410/LD2410C/LD2450 chips (~$15–25, DIY ESPHome build) are the two common paths — check current retailer pricing before buying, since promos shift the exact figure.',
    quickAnswerTop: {
      en: {
        question: 'Can I detect room occupancy without a camera?',
        answer:
          'Yes — mmWave radar presence sensors detect whether someone is in a room, including when they\'re sitting still, by sensing motion and micro-movement (like breathing) via radio waves, without capturing any image. This solves the main limitation of passive-infrared (PIR) motion sensors, which stop detecting a stationary person after a short timeout. The Aqara FP2 (~$80–85 at major US retailers, wired, Wi-Fi + Bluetooth, no hub required) is a ready-to-use option that pairs with Home Assistant locally via the HomeKit Controller integration; Hi-Link\'s LD2410/LD2410C/LD2450 chips (~$15–25 as a DIY ESPHome build with an ESP32 board) are the cheaper, more hands-on path with native ESPHome support.',
        bullets: [
          'Radar sensors detect stationary occupancy, not just motion — solves PIR\'s "stops detecting when still" problem',
          'No image is captured — more private than a camera for presence detection',
          'Aqara FP2: ~$80–85, ready-to-use, pairs with Home Assistant locally via HomeKit Controller',
          'Hi-Link LD2410/LD2410C/LD2450: ~$15–25 as a DIY ESPHome build, native ESPHome component support',
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
          'Ready-to-use option: Aqara FP2 (~$80–85, wired, no hub required, pairs locally via HomeKit Controller). DIY option: Hi-Link LD2410/LD2410C/LD2450 (~$15–25 with an ESP32 board, native ESPHome support)',
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
          'Some radar sensors report distance and zone information in addition to a simple occupied/unoccupied state, letting automations react to where in a room someone is, not just whether the room is occupied — the Aqara FP2, for example, divides a monitored room into up to 30 zones and can track up to 5 people simultaneously.',
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
          'The Aqara FP2 connects over Wi-Fi (2.4GHz) plus Bluetooth, and pairs with Home Assistant through the local HomeKit Controller integration — no Aqara hub or cloud account required. Hi-Link LD2410/LD2410C/LD2450-based DIY builds run on an ESP32 with ESPHome, which is local by design. Check the specific product\'s integration method before buying if local control matters to you — not every radar sensor on the market avoids a cloud dependency.',
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
          { q: 'How much do radar presence sensors cost?', a: 'A ready-to-use option like the Aqara FP2 runs around $80–85 at major US retailers; a DIY build using a Hi-Link LD2410, LD2410C, or LD2450 chip with an ESP32 board runs around $15–25. Check current retailer listings before buying, since promos shift the exact figure.' },
          { q: 'Do radar sensors work through walls or doors?', a: 'To a limited, unreliable degree — community testing with Hi-Link LD2410-class sensors shows they can pick up motion through glass and thin plywood, but are often oversensitive through thin walls or doors in ways that cause false positives rather than useful detection. Don\'t design an automation around deliberate through-wall sensing; tune the detection range and sensitivity down if you\'re seeing triggers from an adjacent room.' },
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
