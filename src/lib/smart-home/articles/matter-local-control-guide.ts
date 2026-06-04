import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Matter & Local Control: An Internet-Independent Smart Home (2026)',
    seoTitle: 'Matter Local Control 2026: No-Cloud Smart Home',
    intro:
      'Matter over Thread can run a genuinely local smart home through a local controller like Home Assistant — no manufacturer cloud required. This guide clears up the nuance of whether Matter means local, explains Thread border routers and local-only commissioning, shows how to avoid cloud bridges, and walks through a local Matter setup with Home Assistant.',
    metaDescription:
      'Use Matter and Thread for genuinely local smart home control: Thread border routers, local-only commissioning, avoiding cloud bridges, and a Home Assistant setup.',
    twitterDescription:
      'Matter and Thread can run fully local through a controller like Home Assistant — no manufacturer cloud. How to commission locally and avoid cloud bridges.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'Users building an internet-independent Matter setup',
    primaryTerm: 'Matter local control',
    targetKeywords: [
      'matter local control no cloud',
      'matter thread local',
      'matter home assistant local',
      'thread border router',
      'internet independent smart home',
    ],
    leadAnswerBlock:
      '**Matter over Thread can run fully locally through a local controller such as Home Assistant — you commission the device to your local fabric, no manufacturer cloud needed.** A Thread border router connects Thread devices to your network; Home Assistant acts as the local controller.',
    quickAnswerTop: {
      en: {
        question: 'Does Matter work without the cloud?',
        answer:
          'Matter can work fully locally: when you commission a Matter device to a local controller like Home Assistant, control happens on your network with no manufacturer cloud. Thread-based Matter devices need a Thread border router. Some devices also offer cloud features, but local control does not require them.',
        bullets: [
          'Matter can run locally via a local controller (e.g. Home Assistant)',
          'Thread devices need a Thread border router',
          'Commission devices to your local fabric, not a vendor app',
          'Avoid cloud bridges to keep control internet-independent',
          'Some devices add optional cloud features you can skip',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Does Matter Mean Local?', anchor: 'matter-local' },
      { label: 'Thread Border Routers', anchor: 'border-routers' },
      { label: 'Local-Only Commissioning', anchor: 'commissioning' },
      { label: 'Avoiding Cloud Bridges', anchor: 'avoid-bridges' },
      { label: 'Setup with Home Assistant', anchor: 'ha-setup' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Matter over Thread runs fully locally through a controller like Home Assistant; a Thread border router links Thread devices, and no manufacturer cloud is needed.' },
      { type: 'plain-terms', content: 'Matter is designed to work locally, but whether your setup actually stays off the cloud depends on how you commission devices and which controller you use. Pairing a Matter device to a local controller like Home Assistant — rather than only a vendor app — keeps control on your own network.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Matter can run fully locally through a local controller such as Home Assistant',
          'Thread-based Matter devices require a Thread border router on your network',
          'Commission devices to your local fabric, not just a manufacturer cloud app',
          'Avoid cloud bridges that route control through a vendor server',
          'Home Assistant acts as a local Matter controller for internet-independent control',
          'Some devices offer optional cloud features you can ignore for local control',
        ],
      },
      matterLocal: {
        id: 'matter-local',
        title: 'Does Matter Mean Local?',
        content:
          '**Matter is designed for local control, but whether your setup stays local depends on the controller and how you commission devices.** Pairing to a local controller keeps control on your network.',
        items: [
          'Matter control between a device and a local controller happens on your LAN.',
          'Using only a vendor app may route some features through that vendor\'s cloud.',
          'For the protocol background, see [smart home protocols explained](/smart-home/smart-home-protocols-explained).',
        ],
      },
      borderRouters: {
        id: 'border-routers',
        title: 'Thread Border Routers',
        content:
          '**Thread-based Matter devices need a Thread border router to bridge the Thread mesh to your IP network.** Many hubs and some speakers include one.',
        items: [
          'A border router connects low-power Thread devices to your LAN.',
          'Matter-over-Wi-Fi devices do not need Thread, but Thread suits battery devices.',
          'Check your controller or a compatible device provides a border router.',
        ],
      },
      commissioning: {
        id: 'commissioning',
        title: 'Local-Only Commissioning',
        content:
          '**Commission Matter devices directly to your local controller so control stays on your network.** Matter\'s multi-admin feature lets a device join more than one fabric.',
        numberedItems: [
          'Add the Matter integration in your local controller (e.g. Home Assistant).',
          'Scan the device\'s Matter QR/pairing code from the controller.',
          'Commission it to your local fabric on your network.',
          'Verify control works with the manufacturer app closed.',
        ],
      },
      avoidBridges: {
        id: 'avoid-bridges',
        title: 'Avoiding Cloud Bridges',
        content:
          '**Avoid cloud bridges that relay device control through a vendor server, which defeats local operation.** Prefer direct local commissioning and local controllers.',
        items: [
          'Some ecosystems bridge Matter devices via their cloud — prefer a local controller instead.',
          'Keep the Thread border router and controller on your own network.',
          'Test that control survives an internet outage to confirm it is local.',
        ],
      },
      haSetup: {
        id: 'ha-setup',
        title: 'Setup with Home Assistant',
        content:
          '**Home Assistant acts as a local Matter controller, so you commission devices to it and control them with no manufacturer cloud.** This is the cleanest path to internet-independent Matter.',
        items: [
          'Use the Home Assistant Matter integration as your controller — see [Home Assistant getting started](/smart-home/home-assistant-getting-started).',
          'Pair a Thread border router so Thread devices join your network.',
          'For the full local picture, see [the complete local smart home guide](/smart-home/local-smart-home-complete-guide).',
        ],
      },
      haSetupTable: {
        id: 'ha-setup-table',
        title: 'Setup Paths Compared',
        content:
          '**Local commissioning to a local controller is internet-independent; vendor-cloud-only pairing is not.** Pick the local path.',
        columns: ['Setup path', 'Local-only?', 'Needs cloud bridge?'],
        rows: [
          { 'Setup path': 'Commission to Home Assistant (local controller)', 'Local-only?': 'Yes', 'Needs cloud bridge?': 'No' },
          { 'Setup path': 'Matter-over-Thread + local Thread border router', 'Local-only?': 'Yes', 'Needs cloud bridge?': 'No' },
          { 'Setup path': 'Vendor-app-only pairing', 'Local-only?': 'Partial', 'Needs cloud bridge?': 'Sometimes' },
          { 'Setup path': 'Cloud-bridged ecosystem', 'Local-only?': 'No', 'Needs cloud bridge?': 'Yes' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Is Matter always local?', a: 'Matter is designed for local control, but whether your setup stays local depends on the controller and commissioning. Pairing devices to a local controller like Home Assistant keeps control on your network; relying only on a vendor cloud app may route features through the cloud.' },
          { q: 'Do I need a Thread border router?', a: 'Only for Thread-based Matter devices, which use the low-power Thread mesh. A Thread border router bridges them to your IP network and is built into some hubs and speakers. Matter-over-Wi-Fi devices do not need one.' },
          { q: 'Can I avoid the manufacturer app?', a: 'Often, yes. With Matter\'s commissioning you can pair a device directly to a local controller such as Home Assistant and control it without the manufacturer app. Some initial setup may use the app, but ongoing control can be local.' },
          { q: 'Does Matter work with Home Assistant?', a: 'Yes. Home Assistant includes a Matter integration and can act as a local Matter controller, commissioning devices to your local fabric and controlling them with no manufacturer cloud.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Smart Home Protocols Explained](/smart-home/smart-home-protocols-explained) — Matter, Thread, Zigbee, Z-Wave',
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — the local-first stack',
          '[Home Assistant: Getting-Started Guide](/smart-home/home-assistant-getting-started) — the local Matter controller',
          '[Why a Local Smart Home Beats the Cloud](/smart-home/why-local-smart-home-beats-cloud) — why internet-independence matters',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter & Local Control: An Internet-Independent Smart Home (2026)',
      description: 'Use Matter and Thread for genuinely local smart home control: Thread border routers, local-only commissioning, avoiding cloud bridges, and a Home Assistant setup.',
      url: 'https://www.promptquorum.com/smart-home/matter-local-control-guide',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Matter' }, { '@type': 'Thing', name: 'Thread' }, { '@type': 'Thing', name: 'Local control' }, { '@type': 'Thing', name: 'Home Assistant' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Is Matter always local?', acceptedAnswer: { '@type': 'Answer', text: 'Matter is designed for local control, but whether your setup stays local depends on the controller and commissioning. Pairing to a local controller like Home Assistant keeps control on your network.' } },
        { '@type': 'Question', name: 'Do I need a Thread border router?', acceptedAnswer: { '@type': 'Answer', text: 'Only for Thread-based Matter devices. A Thread border router bridges them to your IP network and is built into some hubs and speakers. Matter-over-Wi-Fi devices do not need one.' } },
        { '@type': 'Question', name: 'Can I avoid the manufacturer app?', acceptedAnswer: { '@type': 'Answer', text: 'Often, yes. With Matter commissioning you can pair a device directly to a local controller like Home Assistant and control it without the manufacturer app.' } },
        { '@type': 'Question', name: 'Does Matter work with Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Home Assistant includes a Matter integration and can act as a local Matter controller with no manufacturer cloud.' } },
      ],
    },
  },
}
