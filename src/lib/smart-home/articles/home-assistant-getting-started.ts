import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Home Assistant: Complete Getting-Started Guide (2026)',
    seoTitle: 'Home Assistant Getting Started (2026)',
    intro:
      'Home Assistant is the leading local-first smart home hub: install it on a Raspberry Pi or mini PC, add integrations, and control everything locally with no cloud. This getting-started guide covers why Home Assistant, the install options, first integrations, the dashboard, your first automation, and where to add local AI later — without re-explaining the LLM mechanics.',
    metaDescription:
      'Get started with Home Assistant in 2026: install options (HAOS, container, Pi vs mini PC), first integrations, dashboards, and your first local automation.',
    twitterDescription:
      'Home Assistant getting-started guide: install on a Pi or mini PC, add integrations, build your first local automation. The local-first hub.',
    readTime: '10 min read',
    educationalLevel: 'Intermediate',
    audience: 'People setting up their first Home Assistant hub',
    primaryTerm: 'Home Assistant getting started',
    targetKeywords: [
      'home assistant getting started',
      'home assistant setup',
      'home assistant install',
      'home assistant raspberry pi vs mini pc',
      'home assistant beginner guide',
    ],
    leadAnswerBlock:
      '**Home Assistant is free, open-source, local-first smart home software you install on a Raspberry Pi or mini PC — add integrations, build a dashboard, and control devices locally with no cloud.** Use Home Assistant OS (HAOS) on dedicated hardware for the easiest start.',
    quickAnswerTop: {
      en: {
        question: 'How do I get started with Home Assistant?',
        answer:
          'Install Home Assistant OS on a Raspberry Pi, a mini PC, or dedicated Home Assistant hardware, open the web interface, and add integrations for your devices. Build a dashboard, create a first automation, and add a Zigbee or Z-Wave coordinator for local devices. Everything runs locally with no cloud account required.',
        bullets: [
          'Install Home Assistant OS (HAOS) for the easiest setup',
          'Run it on a Raspberry Pi (basics) or mini PC (basics + local AI)',
          'Add integrations for your devices through the UI',
          'Add a Zigbee/Z-Wave coordinator for local protocols',
          'Build a dashboard and a first automation — all local',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Why Home Assistant', anchor: 'why-ha' },
      { label: 'Install Options', anchor: 'install' },
      { label: 'First Integrations', anchor: 'integrations' },
      { label: 'The Dashboard', anchor: 'dashboard' },
      { label: 'Your First Automation', anchor: 'automation' },
      { label: 'Adding AI Later', anchor: 'ai-later' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant is free, open-source, local-first hub software you install on a Pi or mini PC to control devices locally with no cloud.' },
      { type: 'plain-terms', content: 'Home Assistant is the software that runs your smart home on your own hardware instead of a company cloud. You install it on a small computer, connect your devices, and build dashboards and automations. It is the foundation of a private, local-first smart home.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Home Assistant is free, open-source, and local-first — the standard private smart home hub',
          'Install Home Assistant OS (HAOS) on dedicated hardware for the easiest start',
          'Raspberry Pi handles the basics; a mini PC is better if you also want local AI',
          'Add integrations through the UI; no coding needed for common devices',
          'Add a Zigbee or Z-Wave coordinator (USB stick) for local protocols',
          'Add a local LLM brain later — link out for the LLM mechanics',
        ],
      },
      whyHa: {
        id: 'why-ha',
        title: 'Why Home Assistant?',
        content:
          '**Home Assistant is the foundation of a local smart home because it runs on your own hardware, speaks every major local protocol, and keeps automations working offline.** It is the most flexible and private hub.',
        items: [
          'Local-first: control and automations run without the cloud.',
          'Broad support: thousands of integrations across brands and protocols.',
          'Foundation for local AI — see [running your smart home on a local LLM](/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      install: {
        id: 'install',
        title: 'Which Install Option Should You Choose?',
        content:
          '**Use Home Assistant OS (HAOS) on dedicated hardware for the simplest setup, a container install if you already run a server, and choose a Raspberry Pi for basics or a mini PC if you want local AI.** HAOS includes the add-on system you will want.',
        columns: ['Install method', 'Difficulty', 'Best for'],
        rows: [
          { 'Install method': 'HAOS on dedicated device', 'Difficulty': 'Easiest', 'Best for': 'Most users; full add-on support' },
          { 'Install method': 'HAOS on Raspberry Pi', 'Difficulty': 'Easy', 'Best for': 'Basics, low power' },
          { 'Install method': 'HAOS on mini PC', 'Difficulty': 'Easy', 'Best for': 'Basics + local AI' },
          { 'Install method': 'Container (Docker)', 'Difficulty': 'Moderate', 'Best for': 'Existing home servers/NAS' },
        ],
        items: [
          'For hardware sizing including a local LLM, see [best hardware for a local smart home](/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      integrations: {
        id: 'integrations',
        title: 'Adding Your First Integrations',
        content:
          '**Add integrations through Settings → Devices & Services; many devices are auto-discovered on your network.** For Zigbee or Z-Wave devices, add a coordinator first.',
        items: [
          'Auto-discovery finds many Wi-Fi and Matter devices automatically.',
          'Add a Zigbee coordinator (and the ZHA or Zigbee2MQTT integration) for Zigbee devices — see [smart home protocols explained](/smart-home/smart-home-protocols-explained).',
          'Expose only the entities you want, especially before connecting voice or AI.',
        ],
      },
      dashboard: {
        id: 'dashboard',
        title: 'The Dashboard',
        content:
          '**Home Assistant auto-generates a dashboard you can customise with cards for your devices.** Start with the default and refine it over time.',
        items: [
          'The default dashboard lists your devices and areas automatically.',
          'Add cards for the controls you use most.',
          'Create per-room views as your setup grows.',
        ],
      },
      automation: {
        id: 'automation',
        title: 'Your First Automation',
        content:
          '**Create a simple automation in Settings → Automations using the visual editor — for example, turn on a light at sunset.** No coding is required for common rules.',
        numberedItems: [
          'Open Settings → Automations & Scenes → Create Automation.',
          'Choose a trigger (time, sunset, or a sensor state).',
          'Choose an action (turn on a light, send a notification).',
          'Save and test it, then refine.',
          'For context-aware rules later, see [AI automations with a local LLM](/smart-home/ai-automations-local-llm).',
        ],
      },
      aiLater: {
        id: 'ai-later',
        title: 'Adding AI Later',
        content:
          '**Once the basics work, add a local LLM as a conversation agent — but do that after your devices and automations are stable.** This guide does not re-explain Ollama; link out for that.',
        items: [
          'Wire a local model via the [Ollama integration](/smart-home/home-assistant-ollama-integration).',
          'For Ollama setup and model choice, see [how to install Ollama](/local-llms/how-to-install-ollama) (cross-cluster).',
          'Add a local voice front-end with [the local voice assistant guide](/smart-home/local-voice-assistant-smart-home).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Raspberry Pi or mini PC for Home Assistant?', a: 'A Raspberry Pi runs Home Assistant well for typical smart home use. Choose a mini PC if you also want to run a local LLM, larger Whisper models, or Frigate camera detection on the same box, since those need more compute.' },
          { q: 'Is Home Assistant free?', a: 'Yes. Home Assistant is free and open-source. You only pay for the hardware it runs on and any optional extras (for example, a cloud relay for easy remote access). Core local control needs no subscription.' },
          { q: 'Do I need to code to use Home Assistant?', a: 'No. Common setups, dashboards, and automations are built through a graphical interface. YAML configuration is available for advanced automations but is optional for getting started.' },
          { q: 'Can Home Assistant run AI?', a: 'Yes. Home Assistant integrates with Ollama so a local model can act as a conversation agent, and it supports local voice with Whisper and Piper. Running these on a mini PC keeps everything local. See the Ollama integration guide for setup.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — the full local-first stack',
          '[Connect Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration) — add a local AI agent',
          '[Best Hardware for a Local Smart Home](/smart-home/best-hardware-for-local-smart-home) — choose the right box',
          '[How to Install Ollama](/local-llms/how-to-install-ollama) — cross-cluster: run a local model',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant: Complete Getting-Started Guide (2026)',
      description: 'Get started with Home Assistant in 2026: install options (HAOS, container, Pi vs mini PC), first integrations, dashboards, and your first local automation.',
      url: 'https://www.promptquorum.com/smart-home/home-assistant-getting-started',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Home automation' }, { '@type': 'Thing', name: 'Local control' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Raspberry Pi or mini PC for Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'A Raspberry Pi runs Home Assistant well for typical use. Choose a mini PC if you also want a local LLM, larger Whisper models, or Frigate detection on the same box.' } },
        { '@type': 'Question', name: 'Is Home Assistant free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. It is free and open-source. You pay only for hardware and optional extras like a cloud relay for remote access. Core local control needs no subscription.' } },
        { '@type': 'Question', name: 'Do I need to code to use Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'No. Common setups, dashboards, and automations are built through a graphical interface. YAML is optional for advanced automations.' } },
        { '@type': 'Question', name: 'Can Home Assistant run AI?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. It integrates with Ollama for a local conversation agent and supports local voice with Whisper and Piper. Running these on a mini PC keeps everything local.' } },
      ],
    },
  },
}
