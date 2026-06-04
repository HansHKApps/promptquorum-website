import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'Matter, Thread, Zigbee, Z-Wave: Protocols Explained (2026)',
    seoTitle: 'Smart Home Protocols Explained (2026)',
    intro:
      'Smart home protocols decide how your devices communicate, how far they reach, and whether they work locally. This plain-English guide explains Zigbee, Z-Wave, Thread, and Matter — their range, power use, interoperability, and which are local by default — so you can choose the right ones for a reliable, private setup.',
    metaDescription:
      'Matter, Thread, Zigbee, Z-Wave explained in plain English: range, power, mesh, interoperability, and which are local by default. Choose the right protocol.',
    twitterDescription:
      'Zigbee vs Z-Wave vs Thread vs Matter: plain-English guide to range, power, interoperability, and which protocols are local by default.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'People choosing smart home devices by protocol',
    primaryTerm: 'smart home protocols',
    targetKeywords: [
      'matter thread zigbee z-wave difference',
      'smart home protocols explained',
      'zigbee vs z-wave',
      'what is matter smart home',
      'thread protocol smart home',
    ],
    leadAnswerBlock:
      '**Zigbee and Z-Wave are mature low-power mesh protocols, Thread is the modern IP-based low-power mesh, and Matter is the application-layer standard that runs over Thread, Wi-Fi, and Ethernet to unify devices.** Zigbee, Z-Wave, and Thread are local by default; Matter can run locally through a local controller.',
    quickAnswerTop: {
      en: {
        question: 'What is the difference between Matter, Thread, Zigbee, and Z-Wave?',
        answer:
          'Zigbee and Z-Wave are established low-power wireless mesh protocols for sensors and controls. Thread is a newer IP-based low-power mesh. Matter is not a radio but a standard that runs over Thread, Wi-Fi, and Ethernet so devices from different brands work together. Zigbee, Z-Wave, and Thread are local by default.',
        bullets: [
          'Zigbee: 2.4 GHz open mesh, huge device range',
          'Z-Wave: sub-GHz mesh, less interference, long range',
          'Thread: modern IP-based low-power mesh',
          'Matter: a standard over Thread/Wi-Fi/Ethernet, not a radio',
          'Zigbee, Z-Wave, Thread are local by default',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Why Protocols Matter', anchor: 'why-protocols' },
      { label: 'Zigbee', anchor: 'zigbee' },
      { label: 'Z-Wave', anchor: 'z-wave' },
      { label: 'Thread', anchor: 'thread' },
      { label: 'Matter (the Unifier)', anchor: 'matter' },
      { label: 'Which to Choose', anchor: 'which-to-choose' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Zigbee and Z-Wave are mature low-power mesh radios, Thread is the modern IP-based mesh, and Matter is a standard that runs over them to unify devices.' },
      { type: 'plain-terms', content: 'Protocols are the languages smart home devices speak. Zigbee and Z-Wave are older, reliable wireless meshes. Thread is a newer mesh built on internet standards. Matter is not a radio at all — it is a shared standard that lets devices from different brands work together, and it can run without the cloud.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Zigbee: 2.4 GHz open mesh with the widest device ecosystem; needs a coordinator',
          'Z-Wave: sub-GHz mesh with less interference and good range; mature and reliable',
          'Thread: modern IP-based low-power mesh that underpins much of Matter',
          'Matter: an application-layer standard (not a radio) over Thread, Wi-Fi, and Ethernet',
          'Zigbee, Z-Wave, and Thread are local by default; Matter runs locally via a local controller',
          'Choose by device availability and whether you want sub-GHz range (Z-Wave) or broad choice (Zigbee)',
        ],
      },
      whyProtocols: {
        id: 'why-protocols',
        title: 'Why Protocols Matter',
        content:
          '**The protocol a device uses determines its range, battery life, reliability, and whether it can work without the cloud.** Picking compatible protocols avoids a drawer of incompatible gadgets.',
        items: [
          '**Reliability:** mesh protocols relay signals between devices, extending coverage.',
          '**Local control:** local protocols work through a hub with no internet — see [the complete local smart home guide](/smart-home/local-smart-home-complete-guide).',
          '**Compatibility:** a hub that speaks your devices\' protocols ties them together.',
        ],
      },
      zigbee: {
        id: 'zigbee',
        title: 'Zigbee',
        content:
          '**Zigbee is an open 2.4 GHz low-power mesh protocol with the widest range of affordable devices.** It needs a coordinator (a USB stick or hub) and relays through mains-powered devices.',
        items: [
          'Huge ecosystem of bulbs, sensors, plugs, and switches.',
          'Shares the 2.4 GHz band with Wi-Fi, so placement matters.',
          'Local by default through a Zigbee coordinator on your hub.',
        ],
      },
      zwave: {
        id: 'z-wave',
        title: 'Z-Wave',
        content:
          '**Z-Wave is a sub-GHz low-power mesh protocol with less interference and good range, known for reliable home-control devices.** It uses a separate frequency band from Wi-Fi and Zigbee.',
        items: [
          'Operates in sub-GHz bands (regional frequencies), avoiding 2.4 GHz congestion.',
          'Strong reputation for reliable locks, sensors, and controls.',
          'Local by default through a Z-Wave controller.',
        ],
      },
      thread: {
        id: 'thread',
        title: 'Thread',
        content:
          '**Thread is a modern IPv6-based low-power mesh that gives each device an IP address and underpins much of Matter.** It needs a Thread border router to connect to your network.',
        items: [
          'IP-based, so it integrates cleanly with modern networks.',
          'Requires a Thread border router (built into some hubs and speakers).',
          'A foundation for Matter devices — see [Matter local control](/smart-home/matter-local-control-guide).',
        ],
      },
      matter: {
        id: 'matter',
        title: 'Matter: The Unifier',
        content:
          '**Matter is an application-layer standard — not a radio — that runs over Thread, Wi-Fi, and Ethernet so devices from different brands interoperate.** It can run locally through a local controller, reducing cloud dependence.',
        items: [
          'Matter standardises how devices are described and controlled across brands.',
          'It runs on top of Thread (low-power devices) or Wi-Fi/Ethernet (mains devices).',
          'Local control is possible with a local Matter controller like Home Assistant.',
        ],
      },
      whichToChoose: {
        id: 'which-to-choose',
        title: 'Which Protocol Should You Choose?',
        content:
          '**Choose Zigbee for the widest affordable device choice, Z-Wave for sub-GHz range and less interference, and Matter-over-Thread for future-proof interoperability.** A hub like Home Assistant can speak all of them.',
        columns: ['Protocol', 'Band / range', 'Power', 'Mesh', 'Local by default', 'Maturity'],
        rows: [
          { 'Protocol': 'Zigbee', 'Band / range': '2.4 GHz, medium', 'Power': 'Low', 'Mesh': 'Yes', 'Local by default': 'Yes', 'Maturity': 'Mature' },
          { 'Protocol': 'Z-Wave', 'Band / range': 'Sub-GHz, good', 'Power': 'Low', 'Mesh': 'Yes', 'Local by default': 'Yes', 'Maturity': 'Mature' },
          { 'Protocol': 'Thread', 'Band / range': '2.4 GHz, medium', 'Power': 'Low', 'Mesh': 'Yes', 'Local by default': 'Yes', 'Maturity': 'Growing' },
          { 'Protocol': 'Matter', 'Band / range': 'Over Thread/Wi-Fi', 'Power': 'Varies', 'Mesh': 'Via Thread', 'Local by default': 'With local controller', 'Maturity': 'Growing' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Is Matter a protocol or a standard?', a: 'Matter is an application-layer standard, not a radio protocol. It defines how devices are described and controlled and runs on top of transport layers like Thread, Wi-Fi, and Ethernet, which is why it can unify devices from different brands.' },
          { q: 'Do I need Thread?', a: 'Only if you use Thread-based or Matter-over-Thread devices, which need a Thread border router. Many hubs and some speakers include one. Zigbee and Z-Wave devices do not use Thread and need their own coordinator instead.' },
          { q: 'Zigbee vs Z-Wave — which is better?', a: 'Zigbee offers the widest, most affordable device selection on the 2.4 GHz band; Z-Wave uses sub-GHz frequencies with less interference and good range. Choose Zigbee for device choice and Z-Wave for reliability in congested 2.4 GHz environments.' },
          { q: 'Are these protocols local or cloud?', a: 'Zigbee, Z-Wave, and Thread are local by default and work through a hub with no internet. Matter can run locally through a local controller, though some Matter devices may also offer cloud features.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Matter & Local Control](/smart-home/matter-local-control-guide) — using Matter and Thread without cloud bridges',
          '[Home Assistant: Getting-Started Guide](/smart-home/home-assistant-getting-started) — a hub that speaks all these protocols',
          '[Smart Home Ecosystems Compared](/smart-home/smart-home-ecosystems-compared) — platforms built on these protocols',
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — the local-first picture',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter, Thread, Zigbee, Z-Wave: Protocols Explained (2026)',
      description: 'Matter, Thread, Zigbee, Z-Wave explained in plain English: range, power, mesh, interoperability, and which are local by default. Choose the right protocol.',
      url: 'https://www.promptquorum.com/smart-home/smart-home-protocols-explained',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Zigbee' }, { '@type': 'Thing', name: 'Z-Wave' }, { '@type': 'Thing', name: 'Thread' }, { '@type': 'Thing', name: 'Matter' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Is Matter a protocol or a standard?', acceptedAnswer: { '@type': 'Answer', text: 'Matter is an application-layer standard, not a radio. It defines how devices are described and controlled and runs over transport layers like Thread, Wi-Fi, and Ethernet.' } },
        { '@type': 'Question', name: 'Do I need Thread?', acceptedAnswer: { '@type': 'Answer', text: 'Only if you use Thread-based or Matter-over-Thread devices, which need a Thread border router. Zigbee and Z-Wave devices do not use Thread.' } },
        { '@type': 'Question', name: 'Zigbee vs Z-Wave — which is better?', acceptedAnswer: { '@type': 'Answer', text: 'Zigbee offers the widest affordable device selection on 2.4 GHz; Z-Wave uses sub-GHz with less interference and good range. Choose by device choice vs interference.' } },
        { '@type': 'Question', name: 'Are these protocols local or cloud?', acceptedAnswer: { '@type': 'Answer', text: 'Zigbee, Z-Wave, and Thread are local by default through a hub. Matter can run locally via a local controller.' } },
      ],
    },
  },
}
