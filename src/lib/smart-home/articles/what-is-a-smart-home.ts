import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'What Is a Smart Home? A 2026 Beginner\'s Guide',
    seoTitle: 'What Is a Smart Home? 2026 Beginner\'s Guide',
    intro:
      'A smart home is a set of connected devices you monitor, automate, and control by app or voice. This beginner\'s guide explains the core idea, the device categories, how hubs tie devices together, the cloud-versus-local choice that defines privacy in 2026, the major ecosystems, and where to go next if you want a private setup.',
    metaDescription:
      'A smart home is connected devices you control by app or voice. The 2026 beginner\'s guide: categories, hubs, the cloud-vs-local choice, and major ecosystems.',
    twitterDescription:
      'What is a smart home? Connected devices you automate and control by app or voice. The 2026 beginner\'s guide to categories, hubs, and cloud vs local.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    audience: 'Newcomers planning their first smart home',
    primaryTerm: 'smart home',
    targetKeywords: [
      'what is a smart home',
      'smart home explained',
      'smart home basics',
      'smart home for beginners',
      'cloud vs local smart home',
    ],
    leadAnswerBlock:
      '**A smart home is a collection of internet- or hub-connected devices — lights, thermostats, locks, cameras, sensors — that you can monitor, automate, and control from an app or by voice.** The biggest 2026 decision is cloud versus local control, because it determines your privacy and reliability.',
    quickAnswerTop: {
      en: {
        question: 'What is a smart home?',
        answer:
          'A smart home is a home where connected devices can be controlled and automated through an app, a hub, or voice commands. Devices span lighting, climate, security, entertainment, and sensors. Whether they run through a manufacturer cloud or locally on a hub determines how private and reliable the system is.',
        bullets: [
          'Connected devices controlled by app, hub, or voice',
          'Categories: lighting, climate, security, entertainment, sensors',
          'A hub ties devices together and runs automations',
          'Cloud vs local control is the key 2026 choice',
          'Major ecosystems: Alexa, Google Home, Apple Home, Home Assistant',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'The Core Idea', anchor: 'core-idea' },
      { label: 'The Device Categories', anchor: 'categories' },
      { label: 'Hubs and How Devices Talk', anchor: 'hubs' },
      { label: 'Cloud vs Local', anchor: 'cloud-vs-local' },
      { label: 'The Major Ecosystems', anchor: 'ecosystems' },
      { label: 'Where to Go Next', anchor: 'next' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'A smart home is connected devices — lights, thermostats, locks, cameras, sensors — that you monitor, automate, and control by app or voice.' },
      { type: 'plain-terms', content: 'A smart home just means everyday devices that can talk to each other and to you. You can turn the lights off from your phone, have the heating drop when you leave, or ask a speaker to lock the door. The big choice is whether all of that runs through a company\'s cloud or stays on a hub in your home.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'A smart home is connected devices controlled by app, hub, or voice',
          'The five common categories are lighting, climate, security, entertainment, and sensors',
          'A hub coordinates devices and runs automations so they work together',
          'Cloud control routes commands through a vendor server; local control keeps them at home',
          'Local control means more privacy and offline reliability — the key 2026 distinction',
          'The four major ecosystems are Amazon Alexa, Google Home, Apple Home, and Home Assistant',
        ],
      },
      coreIdea: {
        id: 'core-idea',
        title: 'The Core Idea',
        content:
          '**A smart home turns ordinary devices into ones you can monitor, automate, and control remotely or by voice.** Automation — devices acting on their own based on triggers — is what separates a smart home from a collection of remote-controlled gadgets.',
        items: [
          '**Monitor:** see device state (is the door locked, is it warm) from anywhere.',
          '**Automate:** set rules ("turn the porch light on at sunset") so devices act without you.',
          '**Control:** use an app or a voice assistant to operate devices directly.',
        ],
      },
      categories: {
        id: 'categories',
        title: 'The Five Smart Home Device Categories',
        content:
          '**Most smart home devices fall into five categories: lighting, climate, security, entertainment, and sensors.** Many devices come in both cloud-only and local-capable versions.',
        columns: ['Category', 'Example devices', 'Cloud or local'],
        rows: [
          { 'Category': 'Lighting', 'Example devices': 'Smart bulbs, switches, plugs', 'Cloud or local': 'Both (Zigbee/Matter are local)' },
          { 'Category': 'Climate', 'Example devices': 'Thermostats, smart radiator valves', 'Cloud or local': 'Both' },
          { 'Category': 'Security', 'Example devices': 'Cameras, smart locks, doorbells', 'Cloud or local': 'Often cloud; local options exist' },
          { 'Category': 'Entertainment', 'Example devices': 'Speakers, TVs, streaming devices', 'Cloud or local': 'Mostly cloud' },
          { 'Category': 'Sensors', 'Example devices': 'Motion, door/window, temperature', 'Cloud or local': 'Both (Zigbee/Z-Wave are local)' },
        ],
      },
      hubs: {
        id: 'hubs',
        title: 'What Is a Smart Home Hub?',
        content:
          '**A hub is the coordinator that lets devices talk to each other and run automations, often bridging different wireless protocols.** Some ecosystems use a dedicated hub; others use a speaker or your phone.',
        items: [
          'A hub bridges protocols like Zigbee and Z-Wave to your network — see [smart home protocols explained](/smart-home/smart-home-protocols-explained).',
          'Local hubs (like Home Assistant) run automations without the internet.',
          'Cloud ecosystems may not need a separate hub but depend on their servers.',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: 'Cloud vs Local: The 2026 Dividing Line',
        content:
          '**Cloud control sends your commands to a vendor server; local control keeps them inside your home.** This is the choice that determines privacy, offline reliability, and whether a vendor can change or discontinue your devices.',
        items: [
          '**Cloud:** easy setup, but data leaves your home and features can stop if the service does.',
          '**Local:** more setup, but private, offline-capable, and not dependent on a vendor cloud — see [the complete local smart home guide](/smart-home/local-smart-home-complete-guide).',
          '**Why beginners should care:** the choice is hard to reverse later, so it is worth deciding early.',
        ],
      },
      ecosystems: {
        id: 'ecosystems',
        title: 'The Major Ecosystems',
        content:
          '**The four major ecosystems are Amazon Alexa, Google Home, Apple Home, and Home Assistant — they differ most on privacy and local control.** Home Assistant is the local/private champion; Alexa and Google are cloud-first.',
        items: [
          '**Amazon Alexa:** wide device support, cloud-first, voice-led.',
          '**Google Home:** broad support and strong voice, cloud-first.',
          '**Apple Home:** more privacy-focused, with some local control via a home hub.',
          '**Home Assistant:** open-source, local-first, the most private — compared in [ecosystems compared](/smart-home/smart-home-ecosystems-compared).',
        ],
      },
      next: {
        id: 'next',
        title: 'Where to Go Next',
        content:
          '**If privacy matters, start down the local-first path; if you just want convenience, a cloud ecosystem is the quickest start.** Either way, begin with one room.',
        items: [
          'New and want a step-by-step path? See [smart home for beginners: where to start](/smart-home/smart-home-for-beginners-where-to-start).',
          'Care about privacy? See [the complete local smart home guide](/smart-home/local-smart-home-complete-guide).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Do I need a hub for a smart home?', a: 'Not always. Wi-Fi devices and cloud ecosystems can work without a dedicated hub, but a hub is needed for local protocols like Zigbee and Z-Wave and for running automations locally. A local hub like Home Assistant also keeps your system working offline.' },
          { q: 'Is a smart home secure?', a: 'It can be, but security depends on the devices and setup. Cloud devices expose data to vendor servers; local setups keep data at home. Use strong passwords, keep firmware updated, and prefer local-capable devices for sensitive areas like cameras.' },
          { q: 'Cloud or local — which is better for beginners?', a: 'Cloud ecosystems are easier to start with; local setups take more effort but offer privacy and offline reliability. If privacy matters to you, starting local-first avoids a harder migration later.' },
          { q: 'What is the cheapest way to start a smart home?', a: 'Begin with one room and a few inexpensive local-capable devices (a couple of smart bulbs or plugs and a sensor) plus a hub. Expanding gradually avoids overspending and lets you learn before committing to an ecosystem.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — the private, no-cloud path',
          '[The History of Smart Home Technology](/smart-home/history-of-smart-home-technology) — how we got here',
          '[Smart Home for Beginners: Where to Start](/smart-home/smart-home-for-beginners-where-to-start) — your first steps',
          '[Smart Home Ecosystems Compared](/smart-home/smart-home-ecosystems-compared) — pick a platform',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'What Is a Smart Home? A 2026 Beginner\'s Guide',
      description: 'A smart home is connected devices you control by app or voice. The 2026 beginner\'s guide: categories, hubs, the cloud-vs-local choice, and major ecosystems.',
      url: 'https://www.promptquorum.com/smart-home/what-is-a-smart-home',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Smart home' }, { '@type': 'Thing', name: 'Home automation' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Do I need a hub for a smart home?', acceptedAnswer: { '@type': 'Answer', text: 'Not always. Wi-Fi and cloud ecosystems can work without one, but a hub is needed for local protocols like Zigbee and Z-Wave and for running automations locally.' } },
        { '@type': 'Question', name: 'Is a smart home secure?', acceptedAnswer: { '@type': 'Answer', text: 'It can be, depending on devices and setup. Cloud devices expose data to vendor servers; local setups keep data at home. Use strong passwords, update firmware, and prefer local-capable devices for cameras.' } },
        { '@type': 'Question', name: 'Cloud or local — which is better for beginners?', acceptedAnswer: { '@type': 'Answer', text: 'Cloud is easier to start; local takes more effort but offers privacy and offline reliability. If privacy matters, starting local-first avoids a harder migration later.' } },
        { '@type': 'Question', name: 'What is the cheapest way to start a smart home?', acceptedAnswer: { '@type': 'Answer', text: 'Begin with one room and a few inexpensive local-capable devices plus a hub, then expand gradually.' } },
      ],
    },
  },
}
