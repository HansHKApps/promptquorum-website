import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Local Smart Home: The Complete No-Cloud Guide (2026)',
    seoTitle: 'Local Smart Home 2026: The Complete No-Cloud Guide',
    intro:
      'A local smart home runs every device, automation, and voice command on hardware you own, with no cloud account in the loop. This guide defines the local-first model, explains why it is growing in 2026, breaks down the stack layer by layer — hub, protocols, voice, and a local AI brain — and shows what you can run at home today, what it costs, and how to start.',
    metaDescription:
      'A local smart home runs every device and automation on your own hardware — no cloud, works offline, full privacy. The complete 2026 local-first stack guide.',
    twitterDescription:
      'Build a smart home with no cloud: every device, automation, and voice command runs on your own hardware. The complete 2026 local-first stack.',
    readTime: '11 min read',
    educationalLevel: 'Intermediate',
    audience: 'Privacy-conscious homeowners building a self-hosted smart home',
    primaryTerm: 'local smart home',
    targetKeywords: [
      'local smart home no cloud',
      'local smart home',
      'self-hosted smart home',
      'private smart home',
      'offline smart home',
    ],
    leadAnswerBlock:
      '**A local smart home processes every device, automation, and voice command on your own hardware — no cloud account, no data leaving the house, and full function when the internet is down.** The stack is a local hub (Home Assistant), local protocols (Matter/Thread, Zigbee, Z-Wave), local voice, and — new in 2026 — a local LLM as the automation brain.',
    quickAnswerTop: {
      en: {
        question: 'What is a local smart home?',
        answer:
          'A local smart home is a setup where the hub, devices, automations, and voice control all run on hardware in your home rather than a manufacturer cloud. It keeps working offline, requires no subscriptions, and sends no usage data to third parties. Home Assistant is the most widely used local-first hub.',
        bullets: [
          'Control plane runs in your house (Home Assistant), not a vendor cloud',
          'Works during internet or vendor-cloud outages',
          'No subscriptions and no third-party data processor',
          'Local voice (Whisper + Piper) replaces Alexa/Google',
          'A local LLM can act as the natural-language automation brain',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What It Means', anchor: 'what-it-means' },
      { label: 'Why Local Is Growing', anchor: 'why-local' },
      { label: 'The Local-First Stack', anchor: 'the-stack' },
      { label: 'What You Can Run Locally', anchor: 'what-you-can-run' },
      { label: 'Cost and Effort', anchor: 'cost-effort' },
      { label: 'How to Start', anchor: 'how-to-start' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'A local smart home runs the hub, devices, automations, and voice control on hardware you own — no cloud account, and it keeps working offline.' },
      { type: 'plain-terms', content: 'Most smart homes route commands through a manufacturer cloud: you tap a button, the request travels to a company server, and the server tells your device what to do. A local smart home cuts the server out. A hub in your house (usually Home Assistant) talks directly to your devices over local protocols, so nothing breaks when the internet drops and no usage data leaves your network.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Local control means the hub-to-device command path stays inside your home; cloud control routes it through a vendor server',
          'Use a local hub (Home Assistant on a Raspberry Pi or mini PC) as the foundation',
          'Prefer devices that speak Matter/Thread, Zigbee, or Z-Wave — these work locally without a manufacturer bridge',
          'Replace Alexa/Google with local voice: Home Assistant Assist + Whisper (speech-to-text) + Piper (text-to-speech)',
          'New in 2026: a local LLM via Ollama can run natural-language control and context-aware automations on the same box',
          'Trade-off: more upfront setup effort in exchange for privacy, offline reliability, and no subscriptions',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'What a Local Smart Home Actually Means',
        content:
          '**A local smart home keeps the control path — the link between "I want the light on" and the light turning on — entirely inside your home.** Cloud smart homes send that command to a manufacturer server first; local smart homes do not. The dividing line is where the decision is made, not which brand you buy.',
        items: [
          '**Cloud control:** Your app or voice assistant sends the command to a vendor cloud, which relays it to the device. If the cloud or your internet is down, the device stops responding.',
          '**Local control:** A hub in your home (Home Assistant) sends the command directly to the device over a local protocol. No internet round-trip, no third-party server.',
          '**Why the distinction matters:** Local control determines privacy (no usage logs leave the house), reliability (works offline), and longevity (a vendor cloud shutdown cannot brick the device).',
        ],
        columns: ['Dimension', 'Cloud smart home', 'Local smart home'],
        rows: [
          { 'Dimension': 'Privacy', 'Cloud smart home': 'Usage, voice, and camera data on vendor servers', 'Local smart home': 'Data stays on your hardware' },
          { 'Dimension': 'Works offline', 'Cloud smart home': 'No — most features need the cloud', 'Local smart home': 'Yes — runs on your LAN' },
          { 'Dimension': 'Subscriptions', 'Cloud smart home': 'Common (camera storage, premium features)', 'Local smart home': 'None — one-time hardware cost' },
          { 'Dimension': 'Data location', 'Cloud smart home': 'Vendor data centre (often another country)', 'Local smart home': 'Your home' },
          { 'Dimension': 'Setup effort', 'Cloud smart home': 'Low — app-guided', 'Local smart home': 'Higher — you run the hub' },
          { 'Dimension': 'AI capability', 'Cloud smart home': 'Cloud assistant (Alexa, Google)', 'Local smart home': 'Local voice + optional local LLM' },
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Why Local-First Is Growing in 2026',
        content:
          '**Local-first adoption is rising because the cloud trade-offs became concrete: shutdowns bricking hardware, recurring fees, outages, and privacy exposure — while local AI is now runnable at home.** Each of these is a specific, verifiable reason rather than a general preference.',
        items: [
          '**Cloud shutdowns brick devices:** When a vendor discontinues a product cloud, dependent devices can lose core functions overnight. Local devices keep working because nothing external is required.',
          '**Reliability:** A local smart home responds during internet outages and vendor-cloud incidents. Lights, locks, and automations do not depend on a remote server being up.',
          '**Privacy:** Cloud devices collect usage patterns, voice recordings, and camera feeds. Local control removes the third-party processor entirely — see [smart home privacy risks](/smart-home/smart-home-privacy-risks).',
          '**No subscriptions:** Local camera recording and local automations avoid the monthly fees that cloud ecosystems attach to storage and premium features.',
          '**Local AI is now practical:** Small, capable models run on a mini PC, so a local LLM can act as the automation brain — a capability that did not exist for home users a few years ago. See [running your smart home on a local LLM](/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      theStack: {
        id: 'the-stack',
        title: 'The Local-First Stack, Layer by Layer',
        content:
          '**A local smart home is four layers: a hub, local device protocols, local voice, and an optional local AI brain.** Build them in that order — the hub first, AI last.',
        numberedItems: [
          { title: 'Hub — Home Assistant', whyItMatters: 'The control plane. Home Assistant is open-source software that runs on a Raspberry Pi, mini PC, or NAS and talks directly to your devices. Start here — see [Home Assistant getting started](/smart-home/home-assistant-getting-started).' },
          { title: 'Protocols — Matter/Thread, Zigbee, Z-Wave', whyItMatters: 'How devices communicate locally. Zigbee and Z-Wave are mature low-power mesh standards; Thread is the modern mesh; Matter is the unifying layer. These work without a manufacturer cloud — see [Matter local control](/smart-home/matter-local-control-guide).' },
          { title: 'Local voice — Assist + Whisper + Piper', whyItMatters: 'Replaces Alexa and Google. Home Assistant Assist handles intent, Whisper does speech-to-text, and Piper does text-to-speech, all offline — see [build a fully local voice assistant](/smart-home/local-voice-assistant-smart-home).' },
          { title: 'AI brain — a local LLM via Ollama', whyItMatters: 'Optional top layer. A local model turns rigid rules into natural-language control and context-aware automations, running on the same hardware with no cloud.' },
        ],
      },
      whatYouCanRun: {
        id: 'what-you-can-run',
        title: 'What You Can Run Locally Today',
        content:
          '**Lighting, climate, security, sensors, voice, and AI automations all run locally in 2026 — the cloud is optional, not required.** The table below maps each category to its local option.',
        columns: ['Category', 'Local option', 'Notes'],
        rows: [
          { 'Category': 'Lighting', 'Local option': 'Zigbee/Matter bulbs + Home Assistant', 'Notes': 'Instant local response; no app cloud login needed' },
          { 'Category': 'Climate', 'Local option': 'Local thermostats / TRVs over Zigbee or Z-Wave', 'Notes': 'Schedules and automations run on the hub' },
          { 'Category': 'Security', 'Local option': 'Local cameras + Frigate', 'Notes': 'On-device AI detection; see local AI cameras below' },
          { 'Category': 'Sensors', 'Local option': 'Zigbee/Z-Wave motion, door, temperature', 'Notes': 'Trigger automations with no internet' },
          { 'Category': 'Voice', 'Local option': 'Assist + Whisper + Piper', 'Notes': 'Fully offline wake-word and commands' },
          { 'Category': 'AI automations', 'Local option': 'Local LLM via Ollama', 'Notes': 'Natural-language control and context-aware rules' },
        ],
        items: [
          'For private AI cameras specifically, [Frigate](/smart-home/local-ai-security-camera) runs object and person detection locally with no subscription.',
          'For the hardware to run all of this — including a local LLM — see [best hardware for a local smart home](/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      costEffort: {
        id: 'cost-effort',
        title: 'What It Costs and the Effort It Takes',
        content:
          '**A local smart home trades higher upfront setup effort for zero subscriptions and long-term control.** The honest summary: you spend a weekend and one-time hardware money instead of monthly fees and vendor lock-in.',
        items: [
          '**Hardware:** A Raspberry Pi runs a basic local hub; a mini PC is the better pick if you also want to run a local LLM. Plan one-time hardware cost, not recurring fees.',
          '**Effort:** Expect a learning curve setting up Home Assistant, pairing devices, and writing your first automations. The payoff is a system no vendor can change or discontinue.',
          '**Use a local-first path if:** privacy, offline reliability, or avoiding subscriptions matter to you.',
          '**Stay with cloud if:** you want zero maintenance and never touch configuration — but accept the data, outage, and subscription trade-offs in [why local beats cloud](/smart-home/why-local-smart-home-beats-cloud).',
        ],
      },
      howToStart: {
        id: 'how-to-start',
        title: 'How to Start a Local Smart Home',
        content:
          '**Start with the hub and one room, then expand — do not buy a houseful of devices first.** The fastest reliable path is Home Assistant on a Raspberry Pi or mini PC, a Zigbee coordinator, and a few local devices.',
        numberedItems: [
          'Install Home Assistant on a Raspberry Pi or mini PC — [getting-started guide](/smart-home/home-assistant-getting-started).',
          'Pick hardware with room to grow if you want local AI — [hardware guide](/smart-home/best-hardware-for-local-smart-home).',
          'Add local-by-default devices over Matter/Thread, Zigbee, or Z-Wave — [Matter local control](/smart-home/matter-local-control-guide).',
          'Add local voice once devices work — [local voice assistant](/smart-home/local-voice-assistant-smart-home).',
          'Add a local LLM brain last — [running your smart home on a local LLM](/smart-home/local-llm-smart-home-complete-guide).',
          'For EU readers, confirm the privacy posture — [GDPR-friendly private smart home](/smart-home/private-smart-home-gdpr).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Is a local smart home hard to set up?', a: 'It takes more effort than a plug-and-play cloud setup, mainly installing Home Assistant and pairing devices. Most people get a working hub and first automation running in a weekend, then expand gradually. No coding is required for common setups, though YAML configuration is available for advanced automations.' },
          { q: 'Does a local smart home work without internet?', a: 'Yes. Because the hub and devices communicate over your local network, lights, locks, sensors, and automations keep working during an internet or vendor-cloud outage. You only lose internet-dependent extras like remote access away from home and cloud notifications.' },
          { q: 'Do I need a subscription for a local smart home?', a: 'No. Home Assistant is free and open-source, and local devices have no recurring fees. You pay one-time hardware costs. Optional paid extras exist (for example, a cloud relay for easy remote access), but core local control needs no subscription.' },
          { q: 'Can I run AI locally for my smart home?', a: 'Yes. A local LLM via Ollama can act as the conversation agent and automation brain inside Home Assistant, running natural-language device control on your own hardware with no cloud. A mini PC handles small models comfortably; see the local LLM smart home guide.' },
          { q: 'Is a local smart home GDPR-compliant?', a: 'Local processing keeps device, voice, and camera data on hardware in your home, which supports GDPR data-minimization and residency by design because no third-party processor is involved. See the GDPR-friendly private smart home guide for the EU buyer checklist.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Home Assistant: Getting-Started Guide](/smart-home/home-assistant-getting-started) — install the local hub that anchors the stack',
          '[Why a Local Smart Home Beats the Cloud](/smart-home/why-local-smart-home-beats-cloud) — the reliability, privacy, and cost case',
          '[Running Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — add a natural-language AI brain',
          '[Build a Fully Local Voice Assistant](/smart-home/local-voice-assistant-smart-home) — replace Alexa with Assist + Whisper + Piper',
          '[How to Install Ollama](/local-llms/how-to-install-ollama) — run a local model (cross-cluster: the LLM mechanics)',
          '[Easiest Local AI App](/power-local-llm/easiest-local-ai-app-windows-mac-linux) — local AI apps you can run on the same hardware',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Local Smart Home: The Complete No-Cloud Guide (2026)',
      description: 'A local smart home runs every device and automation on your own hardware — no cloud, works offline, full privacy. The complete 2026 local-first stack guide.',
      url: 'https://www.promptquorum.com/smart-home/local-smart-home-complete-guide',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Local smart home' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Home automation privacy' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Is a local smart home hard to set up?', acceptedAnswer: { '@type': 'Answer', text: 'It takes more effort than a cloud setup — mainly installing Home Assistant and pairing devices — but most people get a working hub and first automation running in a weekend. No coding is required for common setups.' } },
        { '@type': 'Question', name: 'Does a local smart home work without internet?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The hub and devices communicate over your local network, so lights, locks, sensors, and automations keep working during an internet or vendor-cloud outage.' } },
        { '@type': 'Question', name: 'Do I need a subscription for a local smart home?', acceptedAnswer: { '@type': 'Answer', text: 'No. Home Assistant is free and open-source and local devices have no recurring fees. You pay one-time hardware costs only.' } },
        { '@type': 'Question', name: 'Can I run AI locally for my smart home?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A local LLM via Ollama can act as the automation brain inside Home Assistant, running natural-language device control on your own hardware with no cloud.' } },
        { '@type': 'Question', name: 'Is a local smart home GDPR-compliant?', acceptedAnswer: { '@type': 'Answer', text: 'Local processing keeps device, voice, and camera data in your home, supporting GDPR data-minimization and residency by design because no third-party processor is involved.' } },
      ],
    },
  },
}
