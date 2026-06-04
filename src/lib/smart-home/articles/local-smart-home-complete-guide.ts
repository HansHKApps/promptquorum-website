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

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Lokales Smart Home: Der komplette No-Cloud-Leitfaden (2026)',
    seoTitle: 'Lokales Smart Home 2026: No-Cloud-Leitfaden',
    intro:
      'Ein lokales Smart Home verarbeitet jedes Gerät, jede Automatisierung und jeden Sprachbefehl auf Ihrer eigenen Hardware – ganz ohne Cloud-Konto. Dieser Leitfaden definiert das Local-First-Modell, erklärt, warum es 2026 wächst, und gliedert den Stack Schicht für Schicht auf: Hub, Protokolle, Sprache und ein lokales KI-Gehirn. Sie erfahren, was heute zu Hause läuft, was es kostet und wie Sie starten.',
    metaDescription:
      'Ein lokales Smart Home betreibt jedes Gerät und jede Automatisierung auf eigener Hardware – ohne Cloud, offline-fähig, vollständig privat. Der 2026-Leitfaden.',
    twitterDescription:
      'Smart Home ohne Cloud: Geräte, Automatisierungen und Sprachsteuerung laufen auf Ihrer eigenen Hardware. Der komplette Local-First-Stack für 2026.',
    readTime: '11 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Datenschutzbewusste Hausbesitzer, die ein selbst gehostetes Smart Home aufbauen',
    primaryTerm: 'local smart home',
    targetKeywords: [
      'lokales smart home ohne cloud',
      'lokales smart home',
      'self-hosted smart home',
      'privates smart home',
      'offline smart home',
    ],
    leadAnswerBlock:
      '**Ein lokales Smart Home verarbeitet jedes Gerät, jede Automatisierung und jeden Sprachbefehl auf Ihrer eigenen Hardware – kein Cloud-Konto, keine Daten, die das Haus verlassen, und volle Funktion auch bei Internetausfall.** Der Stack besteht aus einem lokalen Hub (Home Assistant), lokalen Protokollen (Matter/Thread, Zigbee, Z-Wave), lokaler Sprache und – neu 2026 – einem lokalen LLM als Automatisierungs-Gehirn.',
    quickAnswerTop: {
      de: {
        question: 'Was ist ein lokales Smart Home?',
        answer:
          'Ein lokales Smart Home ist eine Konfiguration, bei der Hub, Geräte, Automatisierungen und Sprachsteuerung auf Hardware bei Ihnen zu Hause laufen statt in einer Hersteller-Cloud. Es funktioniert offline, benötigt keine Abonnements und sendet keine Nutzungsdaten an Dritte. Home Assistant ist der meistgenutzte Local-First-Hub.',
        bullets: [
          'Die Steuerungsebene läuft im Haus (Home Assistant), nicht in einer Hersteller-Cloud',
          'Funktioniert bei Internet- oder Hersteller-Cloud-Ausfällen',
          'Keine Abonnements und kein externer Datenverarbeiter',
          'Lokale Sprache (Whisper + Piper) ersetzt Alexa/Google',
          'Ein lokales LLM kann als natürlichsprachliches Automatisierungs-Gehirn dienen',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Was es bedeutet', anchor: 'what-it-means' },
      { label: 'Warum lokal wächst', anchor: 'why-local' },
      { label: 'Der Local-First-Stack', anchor: 'the-stack' },
      { label: 'Was lokal läuft', anchor: 'what-you-can-run' },
      { label: 'Kosten und Aufwand', anchor: 'cost-effort' },
      { label: 'So starten Sie', anchor: 'how-to-start' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Ein lokales Smart Home betreibt Hub, Geräte, Automatisierungen und Sprachsteuerung auf eigener Hardware – ohne Cloud-Konto und offline-fähig.' },
      { type: 'plain-terms', content: 'Die meisten Smart Homes leiten Befehle über eine Hersteller-Cloud: Sie tippen auf einen Schalter, die Anfrage geht an einen Firmenserver, und der Server steuert Ihr Gerät. Ein lokales Smart Home schaltet den Server aus. Ein Hub bei Ihnen zu Hause (meist Home Assistant) spricht direkt mit Ihren Geräten über lokale Protokolle – so bricht nichts ab, wenn das Internet ausfällt, und keine Nutzungsdaten verlassen Ihr Netzwerk.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Lokale Steuerung heißt: Der Befehlsweg vom Hub zum Gerät bleibt im Haus; Cloud-Steuerung leitet ihn über einen Hersteller-Server',
          'Nutzen Sie einen lokalen Hub (Home Assistant auf einem Raspberry Pi oder Mini-PC) als Grundlage',
          'Bevorzugen Sie Geräte mit Matter/Thread, Zigbee oder Z-Wave – sie funktionieren lokal ohne Hersteller-Bridge',
          'Ersetzen Sie Alexa/Google durch lokale Sprache: Home Assistant Assist + Whisper (Sprache-zu-Text) + Piper (Text-zu-Sprache)',
          'Neu 2026: Ein lokales LLM via Ollama steuert natürlichsprachlich und führt kontextbewusste Automatisierungen auf derselben Hardware aus',
          'Kompromiss: mehr Einrichtungsaufwand im Tausch gegen Datenschutz, Offline-Zuverlässigkeit und keine Abonnements',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'Was ein lokales Smart Home wirklich bedeutet',
        content:
          '**Ein lokales Smart Home hält den Steuerweg – die Verbindung zwischen „Ich will das Licht an" und dem tatsächlichen Einschalten – vollständig im Haus.** Cloud-Smart-Homes senden diesen Befehl zuerst an einen Hersteller-Server; lokale tun das nicht. Die Trennlinie ist, wo die Entscheidung fällt, nicht welche Marke Sie kaufen.',
        items: [
          '**Cloud-Steuerung:** Ihre App oder Ihr Sprachassistent sendet den Befehl an eine Hersteller-Cloud, die ihn an das Gerät weiterleitet. Fällt die Cloud oder Ihr Internet aus, reagiert das Gerät nicht mehr.',
          '**Lokale Steuerung:** Ein Hub bei Ihnen zu Hause (Home Assistant) sendet den Befehl direkt über ein lokales Protokoll an das Gerät. Kein Internet-Umweg, kein Drittanbieter-Server.',
          '**Warum das wichtig ist:** Lokale Steuerung bestimmt Datenschutz (keine Nutzungsprotokolle verlassen das Haus), Zuverlässigkeit (offline-fähig) und Langlebigkeit (eine Cloud-Abschaltung kann das Gerät nicht unbrauchbar machen).',
        ],
        columns: ['Dimension', 'Cloud-Smart-Home', 'Lokales Smart Home'],
        rows: [
          { 'Dimension': 'Datenschutz', 'Cloud-Smart-Home': 'Nutzungs-, Sprach- und Kameradaten auf Hersteller-Servern', 'Lokales Smart Home': 'Daten bleiben auf Ihrer Hardware' },
          { 'Dimension': 'Offline-fähig', 'Cloud-Smart-Home': 'Nein – die meisten Funktionen brauchen die Cloud', 'Lokales Smart Home': 'Ja – läuft in Ihrem LAN' },
          { 'Dimension': 'Abonnements', 'Cloud-Smart-Home': 'Üblich (Kameraspeicher, Premium-Funktionen)', 'Lokales Smart Home': 'Keine – einmalige Hardwarekosten' },
          { 'Dimension': 'Datenstandort', 'Cloud-Smart-Home': 'Hersteller-Rechenzentrum (oft im Ausland)', 'Lokales Smart Home': 'Ihr Zuhause' },
          { 'Dimension': 'Einrichtungsaufwand', 'Cloud-Smart-Home': 'Gering – per App geführt', 'Lokales Smart Home': 'Höher – Sie betreiben den Hub' },
          { 'Dimension': 'KI-Fähigkeit', 'Cloud-Smart-Home': 'Cloud-Assistent (Alexa, Google)', 'Lokales Smart Home': 'Lokale Sprache + optionales lokales LLM' },
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Warum Local-First 2026 wächst',
        content:
          '**Die Verbreitung von Local-First steigt, weil die Cloud-Nachteile konkret wurden: Abschaltungen machen Hardware unbrauchbar, wiederkehrende Gebühren, Ausfälle und Datenschutzrisiken – während lokale KI jetzt zu Hause läuft.** Jeder Punkt ist ein konkreter, überprüfbarer Grund statt einer allgemeinen Vorliebe.',
        items: [
          '**Cloud-Abschaltungen machen Geräte unbrauchbar:** Stellt ein Hersteller eine Produkt-Cloud ein, können abhängige Geräte über Nacht Kernfunktionen verlieren. Lokale Geräte laufen weiter, weil nichts Externes nötig ist.',
          '**Zuverlässigkeit:** Ein lokales Smart Home reagiert bei Internetausfällen und Cloud-Störungen. Licht, Schlösser und Automatisierungen hängen nicht davon ab, dass ein entfernter Server läuft.',
          '**Datenschutz:** Cloud-Geräte sammeln Nutzungsmuster, Sprachaufnahmen und Kamerafeeds. Lokale Steuerung entfernt den externen Verarbeiter vollständig – siehe [Smart-Home-Datenschutzrisiken](/de/smart-home/smart-home-privacy-risks).',
          '**Keine Abonnements:** Lokale Kameraaufzeichnung und lokale Automatisierungen vermeiden die monatlichen Gebühren, die Cloud-Ökosysteme an Speicher und Premium-Funktionen knüpfen.',
          '**Lokale KI ist jetzt praxistauglich:** Kleine, leistungsfähige Modelle laufen auf einem Mini-PC, sodass ein lokales LLM als Automatisierungs-Gehirn dienen kann – eine Möglichkeit, die es für Privatanwender vor wenigen Jahren nicht gab. Siehe [Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      theStack: {
        id: 'the-stack',
        title: 'Der Local-First-Stack, Schicht für Schicht',
        content:
          '**Ein lokales Smart Home besteht aus vier Schichten: einem Hub, lokalen Geräteprotokollen, lokaler Sprache und einem optionalen lokalen KI-Gehirn.** Bauen Sie sie in dieser Reihenfolge auf – den Hub zuerst, die KI zuletzt.',
        numberedItems: [
          { title: 'Hub – Home Assistant', whyItMatters: 'Die Steuerungsebene. Home Assistant ist Open-Source-Software, die auf einem Raspberry Pi, Mini-PC oder NAS läuft und direkt mit Ihren Geräten spricht. Beginnen Sie hier – siehe [Home Assistant: Erste Schritte](/de/smart-home/home-assistant-getting-started).' },
          { title: 'Protokolle – Matter/Thread, Zigbee, Z-Wave', whyItMatters: 'Wie Geräte lokal kommunizieren. Zigbee und Z-Wave sind ausgereifte Low-Power-Mesh-Standards; Thread ist das moderne Mesh; Matter ist die vereinheitlichende Schicht. Sie funktionieren ohne Hersteller-Cloud – siehe [Matter lokale Steuerung](/de/smart-home/matter-local-control-guide).' },
          { title: 'Lokale Sprache – Assist + Whisper + Piper', whyItMatters: 'Ersetzt Alexa und Google. Home Assistant Assist verarbeitet die Absicht, Whisper macht Sprache-zu-Text und Piper Text-zu-Sprache, alles offline – siehe [einen vollständig lokalen Sprachassistenten bauen](/de/smart-home/local-voice-assistant-smart-home).' },
          { title: 'KI-Gehirn – ein lokales LLM via Ollama', whyItMatters: 'Optionale oberste Schicht. Ein lokales Modell macht aus starren Regeln natürlichsprachliche Steuerung und kontextbewusste Automatisierungen, auf derselben Hardware und ohne Cloud.' },
        ],
      },
      whatYouCanRun: {
        id: 'what-you-can-run',
        title: 'Was Sie heute lokal betreiben können',
        content:
          '**Beleuchtung, Klima, Sicherheit, Sensoren, Sprache und KI-Automatisierungen laufen 2026 alle lokal – die Cloud ist optional, nicht erforderlich.** Die folgende Tabelle ordnet jede Kategorie ihrer lokalen Option zu.',
        columns: ['Kategorie', 'Lokale Option', 'Hinweise'],
        rows: [
          { 'Kategorie': 'Beleuchtung', 'Lokale Option': 'Zigbee/Matter-Leuchtmittel + Home Assistant', 'Hinweise': 'Sofortige lokale Reaktion; kein App-Cloud-Login nötig' },
          { 'Kategorie': 'Klima', 'Lokale Option': 'Lokale Thermostate / Heizkörperventile über Zigbee oder Z-Wave', 'Hinweise': 'Zeitpläne und Automatisierungen laufen auf dem Hub' },
          { 'Kategorie': 'Sicherheit', 'Lokale Option': 'Lokale Kameras + Frigate', 'Hinweise': 'KI-Erkennung auf dem Gerät; siehe lokale KI-Kameras unten' },
          { 'Kategorie': 'Sensoren', 'Lokale Option': 'Zigbee/Z-Wave Bewegung, Tür, Temperatur', 'Hinweise': 'Lösen Automatisierungen ohne Internet aus' },
          { 'Kategorie': 'Sprache', 'Lokale Option': 'Assist + Whisper + Piper', 'Hinweise': 'Vollständig offline, Aktivierungswort und Befehle' },
          { 'Kategorie': 'KI-Automatisierungen', 'Lokale Option': 'Lokales LLM via Ollama', 'Hinweise': 'Natürlichsprachliche Steuerung und kontextbewusste Regeln' },
        ],
        items: [
          'Für private KI-Kameras im Speziellen führt [Frigate](/de/smart-home/local-ai-security-camera) Objekt- und Personenerkennung lokal aus, ohne Abonnement.',
          'Für die Hardware, die all das betreibt – inklusive eines lokalen LLM – siehe [beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      costEffort: {
        id: 'cost-effort',
        title: 'Was es kostet und welchen Aufwand es bedeutet',
        content:
          '**Ein lokales Smart Home tauscht höheren Einrichtungsaufwand gegen null Abonnements und langfristige Kontrolle.** Ehrlich zusammengefasst: Sie investieren ein Wochenende und einmalige Hardwarekosten statt monatlicher Gebühren und Hersteller-Bindung.',
        items: [
          '**Hardware:** Ein Raspberry Pi betreibt einen einfachen lokalen Hub; ein Mini-PC ist die bessere Wahl, wenn Sie auch ein lokales LLM betreiben wollen. Rechnen Sie mit einmaligen Hardwarekosten, nicht mit wiederkehrenden Gebühren.',
          '**Aufwand:** Erwarten Sie eine Lernkurve beim Einrichten von Home Assistant, beim Koppeln von Geräten und beim Schreiben Ihrer ersten Automatisierungen. Der Lohn ist ein System, das kein Hersteller ändern oder einstellen kann.',
          '**Wählen Sie den Local-First-Weg, wenn:** Datenschutz, Offline-Zuverlässigkeit oder das Vermeiden von Abonnements für Sie zählen.',
          '**Bleiben Sie bei der Cloud, wenn:** Sie null Wartung wollen und nie Konfiguration anfassen – akzeptieren Sie aber die Daten-, Ausfall- und Abo-Nachteile aus [warum lokal die Cloud schlägt](/de/smart-home/why-local-smart-home-beats-cloud).',
        ],
      },
      howToStart: {
        id: 'how-to-start',
        title: 'So starten Sie ein lokales Smart Home',
        content:
          '**Beginnen Sie mit dem Hub und einem Raum, dann erweitern Sie – kaufen Sie nicht zuerst ein ganzes Haus voller Geräte.** Der schnellste zuverlässige Weg ist Home Assistant auf einem Raspberry Pi oder Mini-PC, ein Zigbee-Koordinator und ein paar lokale Geräte.',
        numberedItems: [
          'Installieren Sie Home Assistant auf einem Raspberry Pi oder Mini-PC – [Erste-Schritte-Leitfaden](/de/smart-home/home-assistant-getting-started).',
          'Wählen Sie Hardware mit Wachstumsreserve, wenn Sie lokale KI wollen – [Hardware-Leitfaden](/de/smart-home/best-hardware-for-local-smart-home).',
          'Fügen Sie lokal-standardmäßige Geräte über Matter/Thread, Zigbee oder Z-Wave hinzu – [Matter lokale Steuerung](/de/smart-home/matter-local-control-guide).',
          'Fügen Sie lokale Sprache hinzu, sobald die Geräte laufen – [lokaler Sprachassistent](/de/smart-home/local-voice-assistant-smart-home).',
          'Fügen Sie zuletzt ein lokales LLM-Gehirn hinzu – [Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide).',
          'Für EU-Leser: Prüfen Sie die Datenschutzlage – [DSGVO-freundliches privates Smart Home](/de/smart-home/private-smart-home-gdpr).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Ist ein lokales Smart Home schwer einzurichten?', a: 'Es erfordert mehr Aufwand als eine Plug-and-Play-Cloud-Lösung, vor allem die Installation von Home Assistant und das Koppeln von Geräten. Die meisten bekommen an einem Wochenende einen funktionierenden Hub und eine erste Automatisierung zum Laufen und erweitern dann schrittweise. Für übliche Einrichtungen ist kein Programmieren nötig, für fortgeschrittene Automatisierungen steht jedoch YAML zur Verfügung.' },
          { q: 'Funktioniert ein lokales Smart Home ohne Internet?', a: 'Ja. Da Hub und Geräte über Ihr lokales Netzwerk kommunizieren, funktionieren Licht, Schlösser, Sensoren und Automatisierungen bei einem Internet- oder Cloud-Ausfall weiter. Sie verlieren nur internetabhängige Extras wie den Fernzugriff von unterwegs und Cloud-Benachrichtigungen.' },
          { q: 'Brauche ich ein Abonnement für ein lokales Smart Home?', a: 'Nein. Home Assistant ist kostenlos und Open Source, und lokale Geräte haben keine wiederkehrenden Gebühren. Sie zahlen einmalige Hardwarekosten. Optionale kostenpflichtige Extras existieren (etwa ein Cloud-Relay für einfachen Fernzugriff), doch die lokale Kernsteuerung benötigt kein Abonnement.' },
          { q: 'Kann ich KI lokal für mein Smart Home betreiben?', a: 'Ja. Ein lokales LLM via Ollama kann als Konversations-Agent und Automatisierungs-Gehirn in Home Assistant dienen und natürlichsprachliche Gerätesteuerung auf Ihrer eigenen Hardware ohne Cloud ausführen. Ein Mini-PC bewältigt kleine Modelle problemlos; siehe den Leitfaden zum lokalen LLM-Smart-Home.' },
          { q: 'Ist ein lokales Smart Home DSGVO-konform?', a: 'Lokale Verarbeitung hält Geräte-, Sprach- und Kameradaten auf Hardware bei Ihnen zu Hause, was Datenminimierung und Datenresidenz im Sinne der DSGVO von vornherein unterstützt, da kein externer Verarbeiter beteiligt ist. Siehe den Leitfaden zum DSGVO-freundlichen privaten Smart Home für die EU-Checkliste.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Home Assistant: Erste Schritte](/de/smart-home/home-assistant-getting-started) – installieren Sie den lokalen Hub, der den Stack trägt',
          '[Warum ein lokales Smart Home die Cloud schlägt](/de/smart-home/why-local-smart-home-beats-cloud) – der Fall für Zuverlässigkeit, Datenschutz und Kosten',
          '[Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide) – ein natürlichsprachliches KI-Gehirn hinzufügen',
          '[Einen vollständig lokalen Sprachassistenten bauen](/de/smart-home/local-voice-assistant-smart-home) – Alexa durch Assist + Whisper + Piper ersetzen',
          '[Ollama installieren](/de/local-llms/how-to-install-ollama) – ein lokales Modell betreiben (clusterübergreifend: die LLM-Mechanik)',
          '[Einfachste lokale KI-App](/de/power-local-llm/easiest-local-ai-app-windows-mac-linux) – lokale KI-Apps auf derselben Hardware',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Lokales Smart Home: Der komplette No-Cloud-Leitfaden (2026)',
      description: 'Ein lokales Smart Home betreibt jedes Gerät und jede Automatisierung auf eigener Hardware – ohne Cloud, offline-fähig, vollständig privat. Der 2026-Leitfaden.',
      url: 'https://www.promptquorum.com/de/smart-home/local-smart-home-complete-guide',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Lokales Smart Home' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Datenschutz in der Heimautomation' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Ist ein lokales Smart Home schwer einzurichten?', acceptedAnswer: { '@type': 'Answer', text: 'Es erfordert mehr Aufwand als eine Cloud-Lösung – vor allem die Installation von Home Assistant und das Koppeln von Geräten –, aber die meisten bekommen an einem Wochenende einen funktionierenden Hub und eine erste Automatisierung zum Laufen. Für übliche Einrichtungen ist kein Programmieren nötig.' } },
        { '@type': 'Question', name: 'Funktioniert ein lokales Smart Home ohne Internet?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Hub und Geräte kommunizieren über Ihr lokales Netzwerk, sodass Licht, Schlösser, Sensoren und Automatisierungen bei einem Internet- oder Cloud-Ausfall weiterlaufen.' } },
        { '@type': 'Question', name: 'Brauche ich ein Abonnement für ein lokales Smart Home?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Home Assistant ist kostenlos und Open Source, und lokale Geräte haben keine wiederkehrenden Gebühren. Sie zahlen nur einmalige Hardwarekosten.' } },
        { '@type': 'Question', name: 'Kann ich KI lokal für mein Smart Home betreiben?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Ein lokales LLM via Ollama kann als Automatisierungs-Gehirn in Home Assistant dienen und natürlichsprachliche Gerätesteuerung auf Ihrer eigenen Hardware ohne Cloud ausführen.' } },
        { '@type': 'Question', name: 'Ist ein lokales Smart Home DSGVO-konform?', acceptedAnswer: { '@type': 'Answer', text: 'Lokale Verarbeitung hält Geräte-, Sprach- und Kameradaten in Ihrem Zuhause und unterstützt Datenminimierung und Datenresidenz im Sinne der DSGVO, da kein externer Verarbeiter beteiligt ist.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Smart Home Local: La Guía Completa Sin Nube (2026)',
    seoTitle: 'Smart Home Local 2026: Guía Completa Sin Nube',
    intro:
      'Un smart home local procesa cada dispositivo, automatización y comando de voz en tu propio hardware, sin ninguna cuenta en la nube. Esta guía define el modelo local-first, explica por qué crece en 2026 y desglosa la arquitectura capa por capa: hub, protocolos, voz y un cerebro de IA local. Verás qué puedes ejecutar en casa hoy, cuánto cuesta y cómo empezar.',
    metaDescription:
      'Un smart home local ejecuta cada dispositivo y automatización en tu propio hardware: sin nube, funciona sin conexión y con total privacidad. Guía 2026.',
    twitterDescription:
      'Smart home sin nube: cada dispositivo, automatización y comando de voz corre en tu propio hardware. La arquitectura local-first completa para 2026.',
    readTime: '11 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Propietarios preocupados por la privacidad que montan un smart home autoalojado',
    primaryTerm: 'local smart home',
    targetKeywords: [
      'smart home local sin nube',
      'smart home local',
      'smart home autoalojado',
      'smart home privado',
      'smart home sin conexión',
    ],
    leadAnswerBlock:
      '**Un smart home local procesa cada dispositivo, automatización y comando de voz en tu propio hardware: sin cuenta en la nube, sin datos que salgan de casa y con funcionamiento completo aunque se caiga internet.** La arquitectura es un hub local (Home Assistant), protocolos locales (Matter/Thread, Zigbee, Z-Wave), voz local y —nuevo en 2026— un LLM local como cerebro de automatización.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es un smart home local?',
        answer:
          'Un smart home local es una configuración donde el hub, los dispositivos, las automatizaciones y el control por voz corren en hardware de tu casa en lugar de en la nube de un fabricante. Funciona sin conexión, no requiere suscripciones y no envía datos de uso a terceros. Home Assistant es el hub local-first más utilizado.',
        bullets: [
          'El plano de control corre en tu casa (Home Assistant), no en la nube de un fabricante',
          'Funciona durante caídas de internet o de la nube del fabricante',
          'Sin suscripciones y sin procesador de datos externo',
          'La voz local (Whisper + Piper) reemplaza a Alexa/Google',
          'Un LLM local puede actuar como cerebro de automatización en lenguaje natural',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Qué significa', anchor: 'what-it-means' },
      { label: 'Por qué crece lo local', anchor: 'why-local' },
      { label: 'La arquitectura local-first', anchor: 'the-stack' },
      { label: 'Qué corre en local', anchor: 'what-you-can-run' },
      { label: 'Coste y esfuerzo', anchor: 'cost-effort' },
      { label: 'Cómo empezar', anchor: 'how-to-start' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Un smart home local ejecuta el hub, los dispositivos, las automatizaciones y el control por voz en hardware propio, sin cuenta en la nube y sin conexión.' },
      { type: 'plain-terms', content: 'La mayoría de los smart homes envían los comandos a través de la nube de un fabricante: tocas un botón, la petición viaja a un servidor de la empresa y el servidor le dice a tu dispositivo qué hacer. Un smart home local elimina el servidor. Un hub en tu casa (normalmente Home Assistant) habla directamente con tus dispositivos por protocolos locales, así que nada falla cuando se cae internet y ningún dato de uso sale de tu red.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Control local significa que la ruta del comando del hub al dispositivo se queda en casa; el control en la nube la enruta por un servidor del fabricante',
          'Usa un hub local (Home Assistant en una Raspberry Pi o un mini PC) como base',
          'Prefiere dispositivos con Matter/Thread, Zigbee o Z-Wave: funcionan en local sin un puente del fabricante',
          'Reemplaza Alexa/Google con voz local: Home Assistant Assist + Whisper (voz a texto) + Piper (texto a voz)',
          'Nuevo en 2026: un LLM local vía Ollama puede ejecutar control en lenguaje natural y automatizaciones contextuales en el mismo equipo',
          'Compromiso: más esfuerzo inicial de configuración a cambio de privacidad, fiabilidad sin conexión y sin suscripciones',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'Qué significa realmente un smart home local',
        content:
          '**Un smart home local mantiene la ruta de control —el enlace entre "quiero la luz encendida" y la luz que se enciende— enteramente dentro de casa.** Los smart homes en la nube envían ese comando primero a un servidor del fabricante; los locales no. La línea divisoria es dónde se toma la decisión, no qué marca compras.',
        items: [
          '**Control en la nube:** tu app o asistente de voz envía el comando a la nube del fabricante, que lo retransmite al dispositivo. Si la nube o tu internet se caen, el dispositivo deja de responder.',
          '**Control local:** un hub en tu casa (Home Assistant) envía el comando directamente al dispositivo por un protocolo local. Sin viaje de ida y vuelta por internet, sin servidor de terceros.',
          '**Por qué importa la distinción:** el control local determina la privacidad (ningún registro de uso sale de casa), la fiabilidad (funciona sin conexión) y la longevidad (el cierre de una nube no puede inutilizar el dispositivo).',
        ],
        columns: ['Dimensión', 'Smart home en la nube', 'Smart home local'],
        rows: [
          { 'Dimensión': 'Privacidad', 'Smart home en la nube': 'Datos de uso, voz y cámara en servidores del fabricante', 'Smart home local': 'Los datos se quedan en tu hardware' },
          { 'Dimensión': 'Funciona sin conexión', 'Smart home en la nube': 'No: la mayoría de funciones necesitan la nube', 'Smart home local': 'Sí: corre en tu LAN' },
          { 'Dimensión': 'Suscripciones', 'Smart home en la nube': 'Habituales (almacenamiento de cámara, funciones premium)', 'Smart home local': 'Ninguna: coste único de hardware' },
          { 'Dimensión': 'Ubicación de los datos', 'Smart home en la nube': 'Centro de datos del fabricante (a menudo en otro país)', 'Smart home local': 'Tu casa' },
          { 'Dimensión': 'Esfuerzo de configuración', 'Smart home en la nube': 'Bajo: guiado por app', 'Smart home local': 'Mayor: tú gestionas el hub' },
          { 'Dimensión': 'Capacidad de IA', 'Smart home en la nube': 'Asistente en la nube (Alexa, Google)', 'Smart home local': 'Voz local + LLM local opcional' },
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Por qué lo local-first crece en 2026',
        content:
          '**La adopción de local-first sube porque los inconvenientes de la nube se volvieron concretos: cierres que inutilizan hardware, cuotas recurrentes, caídas y exposición de la privacidad, mientras la IA local ya se puede ejecutar en casa.** Cada uno es una razón concreta y verificable, no una preferencia general.',
        items: [
          '**Los cierres de la nube inutilizan dispositivos:** cuando un fabricante discontinúa la nube de un producto, los dispositivos dependientes pueden perder funciones clave de un día para otro. Los dispositivos locales siguen funcionando porque no necesitan nada externo.',
          '**Fiabilidad:** un smart home local responde durante caídas de internet e incidentes de la nube. Las luces, cerraduras y automatizaciones no dependen de que un servidor remoto esté activo.',
          '**Privacidad:** los dispositivos en la nube recopilan patrones de uso, grabaciones de voz y vídeo de cámaras. El control local elimina al procesador externo por completo: consulta [riesgos de privacidad en el smart home](/es/smart-home/smart-home-privacy-risks).',
          '**Sin suscripciones:** la grabación local de cámaras y las automatizaciones locales evitan las cuotas mensuales que los ecosistemas en la nube asocian al almacenamiento y a las funciones premium.',
          '**La IA local ya es práctica:** modelos pequeños y capaces corren en un mini PC, así que un LLM local puede actuar como cerebro de automatización, algo que no existía para usuarios domésticos hace pocos años. Consulta [ejecutar tu smart home con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      theStack: {
        id: 'the-stack',
        title: 'La arquitectura local-first, capa por capa',
        content:
          '**Un smart home local son cuatro capas: un hub, protocolos locales de dispositivo, voz local y un cerebro de IA local opcional.** Constrúyelas en ese orden: el hub primero, la IA al final.',
        numberedItems: [
          { title: 'Hub — Home Assistant', whyItMatters: 'El plano de control. Home Assistant es software de código abierto que corre en una Raspberry Pi, un mini PC o un NAS y habla directamente con tus dispositivos. Empieza aquí: consulta [Home Assistant: primeros pasos](/es/smart-home/home-assistant-getting-started).' },
          { title: 'Protocolos — Matter/Thread, Zigbee, Z-Wave', whyItMatters: 'Cómo se comunican los dispositivos en local. Zigbee y Z-Wave son estándares mesh de bajo consumo maduros; Thread es el mesh moderno; Matter es la capa unificadora. Funcionan sin nube del fabricante: consulta [control local con Matter](/es/smart-home/matter-local-control-guide).' },
          { title: 'Voz local — Assist + Whisper + Piper', whyItMatters: 'Reemplaza a Alexa y Google. Home Assistant Assist gestiona la intención, Whisper hace voz a texto y Piper texto a voz, todo sin conexión: consulta [montar un asistente de voz totalmente local](/es/smart-home/local-voice-assistant-smart-home).' },
          { title: 'Cerebro de IA — un LLM local vía Ollama', whyItMatters: 'Capa superior opcional. Un modelo local convierte reglas rígidas en control en lenguaje natural y automatizaciones contextuales, en el mismo equipo y sin nube.' },
        ],
      },
      whatYouCanRun: {
        id: 'what-you-can-run',
        title: 'Qué puedes ejecutar en local hoy',
        content:
          '**Iluminación, clima, seguridad, sensores, voz y automatizaciones de IA corren todas en local en 2026: la nube es opcional, no obligatoria.** La tabla siguiente asigna cada categoría a su opción local.',
        columns: ['Categoría', 'Opción local', 'Notas'],
        rows: [
          { 'Categoría': 'Iluminación', 'Opción local': 'Bombillas Zigbee/Matter + Home Assistant', 'Notas': 'Respuesta local inmediata; sin login en la nube de la app' },
          { 'Categoría': 'Clima', 'Opción local': 'Termostatos locales / válvulas por Zigbee o Z-Wave', 'Notas': 'Los horarios y automatizaciones corren en el hub' },
          { 'Categoría': 'Seguridad', 'Opción local': 'Cámaras locales + Frigate', 'Notas': 'Detección por IA en el dispositivo; ver cámaras de IA local abajo' },
          { 'Categoría': 'Sensores', 'Opción local': 'Movimiento, puerta, temperatura Zigbee/Z-Wave', 'Notas': 'Disparan automatizaciones sin internet' },
          { 'Categoría': 'Voz', 'Opción local': 'Assist + Whisper + Piper', 'Notas': 'Palabra de activación y comandos totalmente sin conexión' },
          { 'Categoría': 'Automatizaciones de IA', 'Opción local': 'LLM local vía Ollama', 'Notas': 'Control en lenguaje natural y reglas contextuales' },
        ],
        items: [
          'Para cámaras de IA privadas en concreto, [Frigate](/es/smart-home/local-ai-security-camera) ejecuta detección de objetos y personas en local sin suscripción.',
          'Para el hardware que ejecuta todo esto —incluido un LLM local— consulta [mejor hardware para un smart home local](/es/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      costEffort: {
        id: 'cost-effort',
        title: 'Cuánto cuesta y qué esfuerzo requiere',
        content:
          '**Un smart home local cambia más esfuerzo inicial de configuración por cero suscripciones y control a largo plazo.** El resumen honesto: inviertes un fin de semana y un coste único de hardware en lugar de cuotas mensuales y dependencia del fabricante.',
        items: [
          '**Hardware:** una Raspberry Pi ejecuta un hub local básico; un mini PC es mejor opción si además quieres correr un LLM local. Cuenta con un coste único de hardware, no con cuotas recurrentes.',
          '**Esfuerzo:** espera una curva de aprendizaje al configurar Home Assistant, emparejar dispositivos y escribir tus primeras automatizaciones. La recompensa es un sistema que ningún fabricante puede cambiar ni discontinuar.',
          '**Elige la vía local-first si:** la privacidad, la fiabilidad sin conexión o evitar suscripciones te importan.',
          '**Quédate con la nube si:** quieres cero mantenimiento y no tocar nunca la configuración, pero asume los inconvenientes de datos, caídas y suscripciones de [por qué lo local supera a la nube](/es/smart-home/why-local-smart-home-beats-cloud).',
        ],
      },
      howToStart: {
        id: 'how-to-start',
        title: 'Cómo empezar un smart home local',
        content:
          '**Empieza con el hub y una habitación, y luego amplía: no compres una casa entera de dispositivos primero.** La vía más rápida y fiable es Home Assistant en una Raspberry Pi o un mini PC, un coordinador Zigbee y unos pocos dispositivos locales.',
        numberedItems: [
          'Instala Home Assistant en una Raspberry Pi o un mini PC — [guía de primeros pasos](/es/smart-home/home-assistant-getting-started).',
          'Elige hardware con margen de crecimiento si quieres IA local — [guía de hardware](/es/smart-home/best-hardware-for-local-smart-home).',
          'Añade dispositivos locales por defecto con Matter/Thread, Zigbee o Z-Wave — [control local con Matter](/es/smart-home/matter-local-control-guide).',
          'Añade voz local cuando los dispositivos funcionen — [asistente de voz local](/es/smart-home/local-voice-assistant-smart-home).',
          'Añade un cerebro LLM local al final — [ejecutar tu smart home con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide).',
          'Para lectores de la UE, confirma la postura de privacidad — [smart home privado y compatible con el RGPD](/es/smart-home/private-smart-home-gdpr).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Es difícil configurar un smart home local?', a: 'Requiere más esfuerzo que una configuración en la nube de tipo plug-and-play, sobre todo instalar Home Assistant y emparejar dispositivos. La mayoría consigue un hub funcionando y una primera automatización en un fin de semana, y luego amplía poco a poco. No hace falta programar para configuraciones habituales, aunque hay YAML disponible para automatizaciones avanzadas.' },
          { q: '¿Funciona un smart home local sin internet?', a: 'Sí. Como el hub y los dispositivos se comunican por tu red local, las luces, cerraduras, sensores y automatizaciones siguen funcionando durante una caída de internet o de la nube. Solo pierdes extras que dependen de internet, como el acceso remoto desde fuera de casa y las notificaciones en la nube.' },
          { q: '¿Necesito una suscripción para un smart home local?', a: 'No. Home Assistant es gratuito y de código abierto, y los dispositivos locales no tienen cuotas recurrentes. Pagas un coste único de hardware. Existen extras de pago opcionales (por ejemplo, un relay en la nube para acceso remoto fácil), pero el control local básico no necesita suscripción.' },
          { q: '¿Puedo ejecutar IA en local para mi smart home?', a: 'Sí. Un LLM local vía Ollama puede actuar como agente de conversación y cerebro de automatización dentro de Home Assistant, ejecutando control de dispositivos en lenguaje natural en tu propio hardware sin nube. Un mini PC maneja modelos pequeños con holgura; consulta la guía del smart home con LLM local.' },
          { q: '¿Es un smart home local compatible con el RGPD?', a: 'El procesamiento local mantiene los datos de dispositivos, voz y cámara en hardware de tu casa, lo que respalda la minimización de datos y la residencia de datos del RGPD por diseño, porque no interviene ningún procesador externo. Consulta la guía del smart home privado compatible con el RGPD para la lista de comprobación de la UE.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Home Assistant: primeros pasos](/es/smart-home/home-assistant-getting-started) — instala el hub local que ancla la arquitectura',
          '[Por qué un smart home local supera a la nube](/es/smart-home/why-local-smart-home-beats-cloud) — el caso de fiabilidad, privacidad y coste',
          '[Ejecutar tu smart home con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide) — añade un cerebro de IA en lenguaje natural',
          '[Montar un asistente de voz totalmente local](/es/smart-home/local-voice-assistant-smart-home) — reemplaza Alexa con Assist + Whisper + Piper',
          '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) — ejecuta un modelo local (entre clústeres: la mecánica del LLM)',
          '[La app de IA local más fácil](/es/power-local-llm/easiest-local-ai-app-windows-mac-linux) — apps de IA local en el mismo hardware',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Smart Home Local: La Guía Completa Sin Nube (2026)',
      description: 'Un smart home local ejecuta cada dispositivo y automatización en tu propio hardware: sin nube, funciona sin conexión y con total privacidad. Guía 2026.',
      url: 'https://www.promptquorum.com/es/smart-home/local-smart-home-complete-guide',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Smart home local' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Privacidad en la domótica' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Es difícil configurar un smart home local?', acceptedAnswer: { '@type': 'Answer', text: 'Requiere más esfuerzo que una configuración en la nube —sobre todo instalar Home Assistant y emparejar dispositivos—, pero la mayoría consigue un hub funcionando y una primera automatización en un fin de semana. No hace falta programar para configuraciones habituales.' } },
        { '@type': 'Question', name: '¿Funciona un smart home local sin internet?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. El hub y los dispositivos se comunican por tu red local, así que las luces, cerraduras, sensores y automatizaciones siguen funcionando durante una caída de internet o de la nube.' } },
        { '@type': 'Question', name: '¿Necesito una suscripción para un smart home local?', acceptedAnswer: { '@type': 'Answer', text: 'No. Home Assistant es gratuito y de código abierto y los dispositivos locales no tienen cuotas recurrentes. Solo pagas un coste único de hardware.' } },
        { '@type': 'Question', name: '¿Puedo ejecutar IA en local para mi smart home?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Un LLM local vía Ollama puede actuar como cerebro de automatización dentro de Home Assistant, ejecutando control de dispositivos en lenguaje natural en tu propio hardware sin nube.' } },
        { '@type': 'Question', name: '¿Es un smart home local compatible con el RGPD?', acceptedAnswer: { '@type': 'Answer', text: 'El procesamiento local mantiene los datos de dispositivos, voz y cámara en tu casa, respaldando la minimización y la residencia de datos del RGPD por diseño, porque no interviene ningún procesador externo.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Maison Connectée Locale : Le Guide Complet Sans Cloud (2026)',
    seoTitle: 'Maison Connectée Locale 2026 : Guide Sans Cloud',
    intro:
      'Une maison connectée locale traite chaque appareil, automatisation et commande vocale sur votre propre matériel, sans aucun compte cloud. Ce guide définit le modèle local-first, explique pourquoi il progresse en 2026 et détaille l\'architecture couche par couche : hub, protocoles, voix et un cerveau IA local. Vous verrez ce qui fonctionne chez vous aujourd\'hui, ce que cela coûte et comment démarrer.',
    metaDescription:
      'Une maison connectée locale exécute chaque appareil et automatisation sur votre matériel : sans cloud, hors ligne et entièrement privée. Le guide 2026.',
    twitterDescription:
      'Maison connectée sans cloud : chaque appareil, automatisation et commande vocale tourne sur votre propre matériel. L\'architecture local-first complète pour 2026.',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Propriétaires soucieux de leur vie privée qui montent une maison connectée auto-hébergée',
    primaryTerm: 'local smart home',
    targetKeywords: [
      'maison connectée locale sans cloud',
      'maison connectée locale',
      'maison connectée auto-hébergée',
      'maison connectée privée',
      'maison connectée hors ligne',
    ],
    leadAnswerBlock:
      '**Une maison connectée locale traite chaque appareil, automatisation et commande vocale sur votre propre matériel : aucun compte cloud, aucune donnée qui quitte la maison, et un fonctionnement complet même en cas de coupure internet.** L\'architecture : un hub local (Home Assistant), des protocoles locaux (Matter/Thread, Zigbee, Z-Wave), la voix locale et — nouveauté 2026 — un LLM local comme cerveau d\'automatisation.',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce qu\'une maison connectée locale ?',
        answer:
          'Une maison connectée locale est une configuration où le hub, les appareils, les automatisations et la commande vocale tournent sur du matériel chez vous plutôt que dans le cloud d\'un fabricant. Elle fonctionne hors ligne, ne nécessite aucun abonnement et n\'envoie aucune donnée d\'usage à des tiers. Home Assistant est le hub local-first le plus utilisé.',
        bullets: [
          'Le plan de contrôle tourne chez vous (Home Assistant), pas dans le cloud d\'un fabricant',
          'Fonctionne pendant les pannes d\'internet ou de cloud du fabricant',
          'Aucun abonnement et aucun sous-traitant de données externe',
          'La voix locale (Whisper + Piper) remplace Alexa/Google',
          'Un LLM local peut servir de cerveau d\'automatisation en langage naturel',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Ce que cela signifie', anchor: 'what-it-means' },
      { label: 'Pourquoi le local progresse', anchor: 'why-local' },
      { label: 'L\'architecture local-first', anchor: 'the-stack' },
      { label: 'Ce qui tourne en local', anchor: 'what-you-can-run' },
      { label: 'Coût et effort', anchor: 'cost-effort' },
      { label: 'Comment démarrer', anchor: 'how-to-start' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Une maison connectée locale exécute le hub, les appareils, les automatisations et la commande vocale sur votre matériel, sans compte cloud et hors ligne.' },
      { type: 'plain-terms', content: 'La plupart des maisons connectées font passer les commandes par le cloud d\'un fabricant : vous appuyez sur un bouton, la requête voyage vers un serveur de l\'entreprise, et le serveur indique à votre appareil quoi faire. Une maison connectée locale supprime le serveur. Un hub chez vous (généralement Home Assistant) parle directement à vos appareils via des protocoles locaux, donc rien ne tombe en panne quand internet coupe et aucune donnée d\'usage ne quitte votre réseau.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Le contrôle local signifie que le chemin de la commande du hub à l\'appareil reste dans la maison ; le contrôle cloud le fait passer par un serveur du fabricant',
          'Utilisez un hub local (Home Assistant sur une Raspberry Pi ou un mini-PC) comme fondation',
          'Privilégiez les appareils en Matter/Thread, Zigbee ou Z-Wave : ils fonctionnent en local sans pont du fabricant',
          'Remplacez Alexa/Google par la voix locale : Home Assistant Assist + Whisper (parole vers texte) + Piper (texte vers parole)',
          'Nouveauté 2026 : un LLM local via Ollama peut assurer la commande en langage naturel et des automatisations contextuelles sur la même machine',
          'Compromis : plus d\'effort de configuration au départ en échange de la confidentialité, de la fiabilité hors ligne et de l\'absence d\'abonnements',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'Ce qu\'une maison connectée locale signifie vraiment',
        content:
          '**Une maison connectée locale garde le chemin de contrôle — le lien entre « je veux la lumière allumée » et l\'allumage effectif — entièrement dans la maison.** Les maisons cloud envoient d\'abord cette commande à un serveur du fabricant ; les locales non. La ligne de partage est l\'endroit où la décision est prise, pas la marque que vous achetez.',
        items: [
          '**Contrôle cloud :** votre application ou assistant vocal envoie la commande au cloud du fabricant, qui la relaie à l\'appareil. Si le cloud ou votre internet tombe, l\'appareil ne répond plus.',
          '**Contrôle local :** un hub chez vous (Home Assistant) envoie la commande directement à l\'appareil via un protocole local. Aucun aller-retour internet, aucun serveur tiers.',
          '**Pourquoi la distinction compte :** le contrôle local détermine la confidentialité (aucun journal d\'usage ne quitte la maison), la fiabilité (fonctionne hors ligne) et la longevité (la fermeture d\'un cloud ne peut pas rendre l\'appareil inutilisable).',
        ],
        columns: ['Dimension', 'Maison connectée cloud', 'Maison connectée locale'],
        rows: [
          { 'Dimension': 'Confidentialité', 'Maison connectée cloud': 'Données d\'usage, voix et caméra sur les serveurs du fabricant', 'Maison connectée locale': 'Les données restent sur votre matériel' },
          { 'Dimension': 'Fonctionne hors ligne', 'Maison connectée cloud': 'Non : la plupart des fonctions nécessitent le cloud', 'Maison connectée locale': 'Oui : tourne sur votre LAN' },
          { 'Dimension': 'Abonnements', 'Maison connectée cloud': 'Fréquents (stockage caméra, fonctions premium)', 'Maison connectée locale': 'Aucun : coût matériel unique' },
          { 'Dimension': 'Localisation des données', 'Maison connectée cloud': 'Centre de données du fabricant (souvent à l\'étranger)', 'Maison connectée locale': 'Votre domicile' },
          { 'Dimension': 'Effort de configuration', 'Maison connectée cloud': 'Faible : guidé par l\'app', 'Maison connectée locale': 'Plus élevé : vous gérez le hub' },
          { 'Dimension': 'Capacité IA', 'Maison connectée cloud': 'Assistant cloud (Alexa, Google)', 'Maison connectée locale': 'Voix locale + LLM local optionnel' },
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Pourquoi le local-first progresse en 2026',
        content:
          '**L\'adoption du local-first augmente parce que les compromis du cloud sont devenus concrets : fermetures qui rendent le matériel inutilisable, frais récurrents, pannes et exposition de la vie privée, tandis que l\'IA locale tourne désormais à la maison.** Chacun est une raison concrète et vérifiable, pas une préférence générale.',
        items: [
          '**Les fermetures de cloud rendent les appareils inutilisables :** quand un fabricant abandonne le cloud d\'un produit, les appareils dépendants peuvent perdre des fonctions clés du jour au lendemain. Les appareils locaux continuent de fonctionner car rien d\'externe n\'est requis.',
          '**Fiabilité :** une maison connectée locale répond pendant les coupures internet et les incidents cloud. Lumières, serrures et automatisations ne dépendent pas d\'un serveur distant.',
          '**Confidentialité :** les appareils cloud collectent des habitudes d\'usage, des enregistrements vocaux et des flux de caméra. Le contrôle local supprime entièrement le sous-traitant externe : voir [risques de confidentialité de la maison connectée](/fr/smart-home/smart-home-privacy-risks).',
          '**Aucun abonnement :** l\'enregistrement caméra local et les automatisations locales évitent les frais mensuels que les écosystèmes cloud attachent au stockage et aux fonctions premium.',
          '**L\'IA locale est désormais pratique :** des modèles petits et capables tournent sur un mini-PC, donc un LLM local peut servir de cerveau d\'automatisation — une possibilité inexistante pour les particuliers il y a quelques années. Voir [faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      theStack: {
        id: 'the-stack',
        title: 'L\'architecture local-first, couche par couche',
        content:
          '**Une maison connectée locale, c\'est quatre couches : un hub, des protocoles d\'appareils locaux, la voix locale et un cerveau IA local optionnel.** Construisez-les dans cet ordre : le hub d\'abord, l\'IA en dernier.',
        numberedItems: [
          { title: 'Hub — Home Assistant', whyItMatters: 'Le plan de contrôle. Home Assistant est un logiciel open source qui tourne sur une Raspberry Pi, un mini-PC ou un NAS et parle directement à vos appareils. Commencez ici : voir [Home Assistant : premiers pas](/fr/smart-home/home-assistant-getting-started).' },
          { title: 'Protocoles — Matter/Thread, Zigbee, Z-Wave', whyItMatters: 'Comment les appareils communiquent en local. Zigbee et Z-Wave sont des standards mesh basse consommation matures ; Thread est le mesh moderne ; Matter est la couche unificatrice. Ils fonctionnent sans cloud du fabricant : voir [contrôle local avec Matter](/fr/smart-home/matter-local-control-guide).' },
          { title: 'Voix locale — Assist + Whisper + Piper', whyItMatters: 'Remplace Alexa et Google. Home Assistant Assist gère l\'intention, Whisper fait la parole vers texte et Piper le texte vers parole, le tout hors ligne : voir [construire un assistant vocal entièrement local](/fr/smart-home/local-voice-assistant-smart-home).' },
          { title: 'Cerveau IA — un LLM local via Ollama', whyItMatters: 'Couche supérieure optionnelle. Un modèle local transforme des règles rigides en commande en langage naturel et en automatisations contextuelles, sur le même matériel et sans cloud.' },
        ],
      },
      whatYouCanRun: {
        id: 'what-you-can-run',
        title: 'Ce que vous pouvez exécuter en local aujourd\'hui',
        content:
          '**Éclairage, climat, sécurité, capteurs, voix et automatisations IA tournent tous en local en 2026 : le cloud est optionnel, pas requis.** Le tableau ci-dessous associe chaque catégorie à son option locale.',
        columns: ['Catégorie', 'Option locale', 'Remarques'],
        rows: [
          { 'Catégorie': 'Éclairage', 'Option locale': 'Ampoules Zigbee/Matter + Home Assistant', 'Remarques': 'Réponse locale instantanée ; pas de connexion cloud de l\'app' },
          { 'Catégorie': 'Climat', 'Option locale': 'Thermostats locaux / vannes par Zigbee ou Z-Wave', 'Remarques': 'Les programmes et automatisations tournent sur le hub' },
          { 'Catégorie': 'Sécurité', 'Option locale': 'Caméras locales + Frigate', 'Remarques': 'Détection IA sur l\'appareil ; voir caméras IA locales ci-dessous' },
          { 'Catégorie': 'Capteurs', 'Option locale': 'Mouvement, porte, température Zigbee/Z-Wave', 'Remarques': 'Déclenchent des automatisations sans internet' },
          { 'Catégorie': 'Voix', 'Option locale': 'Assist + Whisper + Piper', 'Remarques': 'Mot d\'activation et commandes entièrement hors ligne' },
          { 'Catégorie': 'Automatisations IA', 'Option locale': 'LLM local via Ollama', 'Remarques': 'Commande en langage naturel et règles contextuelles' },
        ],
        items: [
          'Pour les caméras IA privées en particulier, [Frigate](/fr/smart-home/local-ai-security-camera) exécute la détection d\'objets et de personnes en local, sans abonnement.',
          'Pour le matériel qui fait tourner tout cela — y compris un LLM local — voir [le meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      costEffort: {
        id: 'cost-effort',
        title: 'Ce que cela coûte et l\'effort requis',
        content:
          '**Une maison connectée locale échange plus d\'effort de configuration au départ contre zéro abonnement et un contrôle durable.** Le résumé honnête : vous investissez un week-end et un coût matériel unique au lieu de frais mensuels et d\'une dépendance au fabricant.',
        items: [
          '**Matériel :** une Raspberry Pi fait tourner un hub local de base ; un mini-PC est le meilleur choix si vous voulez aussi un LLM local. Prévoyez un coût matériel unique, pas des frais récurrents.',
          '**Effort :** attendez-vous à une courbe d\'apprentissage pour configurer Home Assistant, appairer les appareils et écrire vos premières automatisations. La récompense : un système qu\'aucun fabricant ne peut modifier ni abandonner.',
          '**Choisissez la voie local-first si :** la confidentialité, la fiabilité hors ligne ou éviter les abonnements comptent pour vous.',
          '**Restez sur le cloud si :** vous voulez zéro maintenance et ne jamais toucher à la configuration, mais acceptez les compromis de données, de pannes et d\'abonnements de [pourquoi le local bat le cloud](/fr/smart-home/why-local-smart-home-beats-cloud).',
        ],
      },
      howToStart: {
        id: 'how-to-start',
        title: 'Comment démarrer une maison connectée locale',
        content:
          '**Commencez par le hub et une pièce, puis étendez — n\'achetez pas une maison entière d\'appareils d\'abord.** La voie la plus rapide et fiable : Home Assistant sur une Raspberry Pi ou un mini-PC, un coordinateur Zigbee et quelques appareils locaux.',
        numberedItems: [
          'Installez Home Assistant sur une Raspberry Pi ou un mini-PC — [guide de démarrage](/fr/smart-home/home-assistant-getting-started).',
          'Choisissez du matériel avec de la marge si vous voulez de l\'IA locale — [guide du matériel](/fr/smart-home/best-hardware-for-local-smart-home).',
          'Ajoutez des appareils locaux par défaut via Matter/Thread, Zigbee ou Z-Wave — [contrôle local avec Matter](/fr/smart-home/matter-local-control-guide).',
          'Ajoutez la voix locale une fois les appareils en place — [assistant vocal local](/fr/smart-home/local-voice-assistant-smart-home).',
          'Ajoutez un cerveau LLM local en dernier — [faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide).',
          'Pour les lecteurs de l\'UE, vérifiez la posture de confidentialité — [maison connectée privée conforme au RGPD](/fr/smart-home/private-smart-home-gdpr).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Une maison connectée locale est-elle difficile à configurer ?', a: 'Elle demande plus d\'effort qu\'une configuration cloud prête à l\'emploi, surtout l\'installation de Home Assistant et l\'appairage des appareils. La plupart obtiennent un hub fonctionnel et une première automatisation en un week-end, puis étendent progressivement. Aucune programmation n\'est requise pour les configurations courantes, mais le YAML est disponible pour les automatisations avancées.' },
          { q: 'Une maison connectée locale fonctionne-t-elle sans internet ?', a: 'Oui. Comme le hub et les appareils communiquent via votre réseau local, lumières, serrures, capteurs et automatisations continuent de fonctionner pendant une coupure internet ou cloud. Vous ne perdez que les extras dépendants d\'internet, comme l\'accès à distance hors de chez vous et les notifications cloud.' },
          { q: 'Ai-je besoin d\'un abonnement pour une maison connectée locale ?', a: 'Non. Home Assistant est gratuit et open source, et les appareils locaux n\'ont pas de frais récurrents. Vous payez un coût matériel unique. Des extras payants optionnels existent (par exemple un relais cloud pour un accès à distance facile), mais le contrôle local de base ne nécessite aucun abonnement.' },
          { q: 'Puis-je exécuter de l\'IA en local pour ma maison connectée ?', a: 'Oui. Un LLM local via Ollama peut servir d\'agent de conversation et de cerveau d\'automatisation dans Home Assistant, en assurant la commande des appareils en langage naturel sur votre propre matériel sans cloud. Un mini-PC gère aisément les petits modèles ; voir le guide de la maison connectée à LLM local.' },
          { q: 'Une maison connectée locale est-elle conforme au RGPD ?', a: 'Le traitement local conserve les données d\'appareils, de voix et de caméra sur du matériel chez vous, ce qui soutient la minimisation et la résidence des données du RGPD par conception, car aucun sous-traitant externe n\'intervient. Voir le guide de la maison connectée privée conforme au RGPD pour la checklist UE.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Home Assistant : premiers pas](/fr/smart-home/home-assistant-getting-started) — installez le hub local qui ancre l\'architecture',
          '[Pourquoi une maison connectée locale bat le cloud](/fr/smart-home/why-local-smart-home-beats-cloud) — l\'argument fiabilité, confidentialité et coût',
          '[Faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide) — ajoutez un cerveau IA en langage naturel',
          '[Construire un assistant vocal entièrement local](/fr/smart-home/local-voice-assistant-smart-home) — remplacez Alexa par Assist + Whisper + Piper',
          '[Comment installer Ollama](/fr/local-llms/how-to-install-ollama) — faire tourner un modèle local (inter-clusters : la mécanique du LLM)',
          '[L\'app d\'IA locale la plus simple](/fr/power-local-llm/easiest-local-ai-app-windows-mac-linux) — des apps d\'IA locale sur le même matériel',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Maison Connectée Locale : Le Guide Complet Sans Cloud (2026)',
      description: 'Une maison connectée locale exécute chaque appareil et automatisation sur votre matériel : sans cloud, hors ligne et entièrement privée. Le guide 2026.',
      url: 'https://www.promptquorum.com/fr/smart-home/local-smart-home-complete-guide',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Maison connectée locale' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Confidentialité domotique' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Une maison connectée locale est-elle difficile à configurer ?', acceptedAnswer: { '@type': 'Answer', text: 'Elle demande plus d\'effort qu\'une configuration cloud — surtout installer Home Assistant et appairer les appareils — mais la plupart obtiennent un hub fonctionnel et une première automatisation en un week-end. Aucune programmation n\'est requise pour les configurations courantes.' } },
        { '@type': 'Question', name: 'Une maison connectée locale fonctionne-t-elle sans internet ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Le hub et les appareils communiquent via votre réseau local, donc lumières, serrures, capteurs et automatisations continuent de fonctionner pendant une coupure internet ou cloud.' } },
        { '@type': 'Question', name: 'Ai-je besoin d\'un abonnement pour une maison connectée locale ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. Home Assistant est gratuit et open source et les appareils locaux n\'ont pas de frais récurrents. Vous payez seulement un coût matériel unique.' } },
        { '@type': 'Question', name: 'Puis-je exécuter de l\'IA en local pour ma maison connectée ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Un LLM local via Ollama peut servir de cerveau d\'automatisation dans Home Assistant, en assurant la commande des appareils en langage naturel sur votre propre matériel sans cloud.' } },
        { '@type': 'Question', name: 'Une maison connectée locale est-elle conforme au RGPD ?', acceptedAnswer: { '@type': 'Answer', text: 'Le traitement local conserve les données d\'appareils, de voix et de caméra chez vous, soutenant la minimisation et la résidence des données du RGPD par conception, car aucun sous-traitant externe n\'intervient.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'ローカルスマートホーム完全ガイド：クラウド不要（2026）',
    seoTitle: 'ローカルスマートホーム2026：クラウド不要の完全ガイド',
    intro:
      'ローカルスマートホームは、すべてのデバイス・自動化・音声コマンドを自分のハードウェア上で処理し、クラウドアカウントを一切使いません。本ガイドではローカルファーストの考え方を定義し、2026年に普及が進む理由を説明し、ハブ・プロトコル・音声・ローカルAIの頭脳という層ごとにスタックを分解します。今すぐ自宅で動かせるもの、費用、始め方がわかります。',
    metaDescription:
      'ローカルスマートホームはすべてのデバイスと自動化を自分のハードウェアで動かします。クラウド不要、オフライン動作、完全プライベート。2026年版完全ガイド。',
    twitterDescription:
      'クラウド不要のスマートホーム：デバイス、自動化、音声コマンドをすべて自分のハードウェアで実行。2026年版の完全なローカルファースト構成。',
    readTime: '11分で読める',
    educationalLevel: 'Intermediate',
    audience: 'プライバシーを重視し、自己ホスト型スマートホームを構築する住宅所有者',
    primaryTerm: 'local smart home',
    targetKeywords: [
      'ローカル スマートホーム クラウド不要',
      'ローカル スマートホーム',
      '自己ホスト スマートホーム',
      'プライベート スマートホーム',
      'オフライン スマートホーム',
    ],
    leadAnswerBlock:
      '**ローカルスマートホームは、すべてのデバイス・自動化・音声コマンドを自分のハードウェアで処理します——クラウドアカウントなし、家からデータが出ない、インターネットが落ちても完全に動作します。** 構成はローカルハブ（Home Assistant）、ローカルプロトコル（Matter/Thread、Zigbee、Z-Wave）、ローカル音声、そして2026年の新要素であるローカルLLMを自動化の頭脳として使います。',
    quickAnswerTop: {
      ja: {
        question: 'ローカルスマートホームとは何ですか？',
        answer:
          'ローカルスマートホームとは、ハブ・デバイス・自動化・音声制御がメーカーのクラウドではなく自宅のハードウェアで動く構成です。オフラインで動作し、サブスクリプションは不要で、利用データを第三者に送りません。Home Assistant が最も広く使われるローカルファーストのハブです。',
        bullets: [
          '制御の中枢は自宅で動作（Home Assistant）——メーカーのクラウドではない',
          'インターネットやメーカークラウドの障害時も動作',
          'サブスクリプション不要、外部のデータ処理者なし',
          'ローカル音声（Whisper + Piper）が Alexa/Google を置き換える',
          'ローカルLLMが自然言語の自動化の頭脳として機能できる',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: '意味するもの', anchor: 'what-it-means' },
      { label: 'ローカルが伸びる理由', anchor: 'why-local' },
      { label: 'ローカルファースト構成', anchor: 'the-stack' },
      { label: 'ローカルで動かせるもの', anchor: 'what-you-can-run' },
      { label: '費用と手間', anchor: 'cost-effort' },
      { label: '始め方', anchor: 'how-to-start' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'ローカルスマートホームは、ハブ・デバイス・自動化・音声制御を自分のハードウェアで動かし、クラウドアカウントなしでオフラインでも動作します。' },
      { type: 'plain-terms', content: '多くのスマートホームはコマンドをメーカーのクラウド経由で送ります。ボタンを押すと、リクエストが企業のサーバーへ届き、サーバーがデバイスに指示を出します。ローカルスマートホームはこのサーバーを取り除きます。自宅のハブ（通常は Home Assistant）がローカルプロトコルで直接デバイスと通信するため、インターネットが切れても止まらず、利用データがネットワークの外へ出ません。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'ローカル制御とは、ハブからデバイスへのコマンド経路が家の中にとどまること。クラウド制御はそれをメーカーのサーバー経由にする',
          'ローカルハブ（Raspberry Pi または ミニPC 上の Home Assistant）を土台にする',
          'Matter/Thread、Zigbee、Z-Wave 対応デバイスを優先——メーカーのブリッジなしでローカル動作する',
          'Alexa/Google をローカル音声で置き換える：Home Assistant Assist + Whisper（音声→テキスト）+ Piper（テキスト→音声）',
          '2026年の新要素：Ollama 経由のローカルLLMが、同じ機器上で自然言語制御と文脈を踏まえた自動化を実行できる',
          'トレードオフ：初期設定の手間が増える代わりに、プライバシー、オフラインの信頼性、サブスク不要が得られる',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'ローカルスマートホームが本当に意味すること',
        content:
          '**ローカルスマートホームは、制御の経路——「ライトをつけたい」とライトが実際につくことの間のつながり——を完全に家の中に保ちます。** クラウド型はまずそのコマンドをメーカーのサーバーへ送りますが、ローカル型は送りません。分かれ目は、どこで判断が下されるかであって、どのブランドを買うかではありません。',
        items: [
          '**クラウド制御：** アプリや音声アシスタントがコマンドをメーカーのクラウドへ送り、それがデバイスへ中継されます。クラウドやインターネットが落ちるとデバイスは反応しなくなります。',
          '**ローカル制御：** 自宅のハブ（Home Assistant）がローカルプロトコルで直接デバイスへコマンドを送ります。インターネットの往復も、第三者サーバーもありません。',
          '**この区別が重要な理由：** ローカル制御はプライバシー（利用ログが家から出ない）、信頼性（オフラインで動く）、寿命（クラウド終了でデバイスが使えなくなることがない）を左右します。',
        ],
        columns: ['観点', 'クラウド型スマートホーム', 'ローカル型スマートホーム'],
        rows: [
          { '観点': 'プライバシー', 'クラウド型スマートホーム': '利用・音声・カメラのデータがメーカーのサーバー上', 'ローカル型スマートホーム': 'データは自分のハードウェアに残る' },
          { '観点': 'オフライン動作', 'クラウド型スマートホーム': '不可——多くの機能はクラウドが必要', 'ローカル型スマートホーム': '可——自分の LAN で動作' },
          { '観点': 'サブスクリプション', 'クラウド型スマートホーム': '一般的（カメラ保存、プレミアム機能）', 'ローカル型スマートホーム': 'なし——一度きりのハードウェア費用' },
          { '観点': 'データの所在', 'クラウド型スマートホーム': 'メーカーのデータセンター（多くは国外）', 'ローカル型スマートホーム': 'あなたの家' },
          { '観点': '設定の手間', 'クラウド型スマートホーム': '少ない——アプリ案内式', 'ローカル型スマートホーム': '多い——ハブを自分で運用' },
          { '観点': 'AI 能力', 'クラウド型スマートホーム': 'クラウドアシスタント（Alexa、Google）', 'ローカル型スマートホーム': 'ローカル音声 + 任意のローカルLLM' },
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: '2026年にローカルファーストが伸びる理由',
        content:
          '**ローカルファーストが広がるのは、クラウドの欠点が具体化したからです：終了によるハードウェアの無効化、継続課金、障害、プライバシーの露出——一方でローカルAIが自宅で動くようになりました。** いずれも一般的な好みではなく、具体的で検証可能な理由です。',
        items: [
          '**クラウド終了でデバイスが使えなくなる：** メーカーが製品のクラウドを終了すると、依存するデバイスが一夜で主要機能を失うことがあります。ローカルデバイスは外部を必要としないため動き続けます。',
          '**信頼性：** ローカルスマートホームはインターネット障害やクラウド障害の間も応答します。照明・施錠・自動化はリモートサーバーの稼働に依存しません。',
          '**プライバシー：** クラウドデバイスは利用パターン、音声録音、カメラ映像を収集します。ローカル制御は外部処理者を完全に取り除きます——[スマートホームのプライバシーリスク](/ja/smart-home/smart-home-privacy-risks)を参照。',
          '**サブスク不要：** ローカルのカメラ録画とローカル自動化は、クラウド系が保存やプレミアム機能に付ける月額料金を避けます。',
          '**ローカルAIが実用的に：** 小型で高性能なモデルがミニPCで動くため、ローカルLLMを自動化の頭脳にできます——数年前まで個人ユーザーには不可能でした。[ローカルLLMでスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide)を参照。',
        ],
      },
      theStack: {
        id: 'the-stack',
        title: 'ローカルファースト構成を層ごとに',
        content:
          '**ローカルスマートホームは4つの層です：ハブ、ローカルのデバイスプロトコル、ローカル音声、そして任意のローカルAIの頭脳。** この順番で構築します——ハブを最初に、AIを最後に。',
        numberedItems: [
          { title: 'ハブ — Home Assistant', whyItMatters: '制御の中枢です。Home Assistant は Raspberry Pi、ミニPC、NAS で動くオープンソースソフトで、デバイスと直接通信します。ここから始めます——[Home Assistant 入門](/ja/smart-home/home-assistant-getting-started)を参照。' },
          { title: 'プロトコル — Matter/Thread、Zigbee、Z-Wave', whyItMatters: 'デバイスがローカルで通信する方法です。Zigbee と Z-Wave は成熟した低消費電力メッシュ規格、Thread は新しいメッシュ、Matter は統一層です。メーカーのクラウドなしで動作します——[Matter のローカル制御](/ja/smart-home/matter-local-control-guide)を参照。' },
          { title: 'ローカル音声 — Assist + Whisper + Piper', whyItMatters: 'Alexa と Google を置き換えます。Home Assistant Assist が意図を処理し、Whisper が音声→テキスト、Piper がテキスト→音声を、すべてオフラインで行います——[完全ローカルの音声アシスタントを作る](/ja/smart-home/local-voice-assistant-smart-home)を参照。' },
          { title: 'AIの頭脳 — Ollama 経由のローカルLLM', whyItMatters: '任意の最上層です。ローカルモデルは硬直したルールを自然言語制御と文脈に応じた自動化に変え、同じ機器上でクラウドなしに動きます。' },
        ],
      },
      whatYouCanRun: {
        id: 'what-you-can-run',
        title: '今ローカルで動かせるもの',
        content:
          '**照明、空調、セキュリティ、センサー、音声、AI自動化は2026年にはすべてローカルで動きます——クラウドは任意であって必須ではありません。** 次の表は各カテゴリーをローカルの選択肢に対応づけます。',
        columns: ['カテゴリー', 'ローカルの選択肢', '備考'],
        rows: [
          { 'カテゴリー': '照明', 'ローカルの選択肢': 'Zigbee/Matter 電球 + Home Assistant', '備考': '即時のローカル反応；アプリのクラウドログイン不要' },
          { 'カテゴリー': '空調', 'ローカルの選択肢': 'Zigbee/Z-Wave のローカルサーモスタット/バルブ', '備考': 'スケジュールと自動化はハブ上で動作' },
          { 'カテゴリー': 'セキュリティ', 'ローカルの選択肢': 'ローカルカメラ + Frigate', '備考': 'デバイス上でのAI検出；下のローカルAIカメラ参照' },
          { 'カテゴリー': 'センサー', 'ローカルの選択肢': 'Zigbee/Z-Wave の人感・ドア・温度', '備考': 'インターネットなしで自動化を起動' },
          { 'カテゴリー': '音声', 'ローカルの選択肢': 'Assist + Whisper + Piper', '備考': 'ウェイクワードとコマンドが完全オフライン' },
          { 'カテゴリー': 'AI自動化', 'ローカルの選択肢': 'Ollama 経由のローカルLLM', '備考': '自然言語制御と文脈に応じたルール' },
        ],
        items: [
          'プライベートなAIカメラに関しては、[Frigate](/ja/smart-home/local-ai-security-camera)がサブスクなしで物体・人物検出をローカル実行します。',
          'これらすべて——ローカルLLMを含む——を動かすハードウェアは、[ローカルスマートホームに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home)を参照。',
        ],
      },
      costEffort: {
        id: 'cost-effort',
        title: '費用と必要な手間',
        content:
          '**ローカルスマートホームは、初期の設定の手間を、サブスク不要と長期的な主導権と引き換えにします。** 率直に言えば、月額料金やメーカー依存ではなく、週末の時間と一度きりのハードウェア費用を投じます。',
        items: [
          '**ハードウェア：** Raspberry Pi は基本的なローカルハブを動かせます。ローカルLLMも動かしたいならミニPCが適します。継続課金ではなく一度きりのハードウェア費用と考えてください。',
          '**手間：** Home Assistant の設定、デバイスのペアリング、最初の自動化づくりには学習曲線があります。見返りは、どのメーカーも変更・終了できないシステムです。',
          '**ローカルファーストを選ぶべき場合：** プライバシー、オフラインの信頼性、サブスク回避が重要なとき。',
          '**クラウドにとどまる場合：** 保守ゼロで設定に一切触れたくないとき——ただし[ローカルがクラウドに勝る理由](/ja/smart-home/why-local-smart-home-beats-cloud)のデータ・障害・サブスクのトレードオフは受け入れてください。',
        ],
      },
      howToStart: {
        id: 'how-to-start',
        title: 'ローカルスマートホームの始め方',
        content:
          '**ハブと一部屋から始め、そこから広げます——最初から家じゅうの機器を買い込まないこと。** 最も速く確実な道は、Raspberry Pi または ミニPC 上の Home Assistant、Zigbee コーディネーター、そして少数のローカルデバイスです。',
        numberedItems: [
          'Raspberry Pi または ミニPC に Home Assistant をインストールする——[入門ガイド](/ja/smart-home/home-assistant-getting-started)。',
          'ローカルAIをやるなら拡張余地のあるハードウェアを選ぶ——[ハードウェアガイド](/ja/smart-home/best-hardware-for-local-smart-home)。',
          'Matter/Thread、Zigbee、Z-Wave のローカル標準デバイスを追加する——[Matter のローカル制御](/ja/smart-home/matter-local-control-guide)。',
          'デバイスが動いたらローカル音声を追加する——[ローカル音声アシスタント](/ja/smart-home/local-voice-assistant-smart-home)。',
          '最後にローカルLLMの頭脳を追加する——[ローカルLLMでスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide)。',
          'EU の読者はプライバシー姿勢を確認——[GDPR に配慮したプライベートなスマートホーム](/ja/smart-home/private-smart-home-gdpr)。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'ローカルスマートホームの設定は難しいですか？', a: 'プラグアンドプレイのクラウド構成より手間がかかり、主に Home Assistant のインストールとデバイスのペアリングが必要です。多くの人は週末で動くハブと最初の自動化を用意し、その後少しずつ拡張します。一般的な設定にプログラミングは不要ですが、高度な自動化には YAML が使えます。' },
          { q: 'ローカルスマートホームはインターネットなしで動きますか？', a: 'はい。ハブとデバイスはローカルネットワークで通信するため、インターネットやクラウドの障害中も照明・施錠・センサー・自動化は動き続けます。失われるのは外出先からのリモートアクセスやクラウド通知など、インターネット依存の付加機能だけです。' },
          { q: 'ローカルスマートホームにサブスクリプションは必要ですか？', a: 'いいえ。Home Assistant は無料のオープンソースで、ローカルデバイスに継続課金はありません。支払うのは一度きりのハードウェア費用です。任意の有料オプション（例：簡単なリモートアクセス用のクラウドリレー）はありますが、ローカルの基本制御にサブスクは不要です。' },
          { q: 'スマートホームのためにAIをローカルで動かせますか？', a: 'はい。Ollama 経由のローカルLLMが Home Assistant 内で会話エージェント兼自動化の頭脳として機能し、自分のハードウェア上でクラウドなしに自然言語のデバイス制御を行えます。ミニPCなら小型モデルを余裕で扱えます。ローカルLLMスマートホームのガイドを参照してください。' },
          { q: 'ローカルスマートホームは GDPR に準拠しますか？', a: 'ローカル処理はデバイス・音声・カメラのデータを自宅のハードウェアに保つため、外部処理者が関与せず、GDPR のデータ最小化とデータ所在を設計上支えます。EU 向けチェックリストは GDPR 配慮のプライベートスマートホームのガイドを参照してください。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Home Assistant 入門](/ja/smart-home/home-assistant-getting-started) — 構成の土台となるローカルハブをインストール',
          '[ローカルスマートホームがクラウドに勝る理由](/ja/smart-home/why-local-smart-home-beats-cloud) — 信頼性・プライバシー・費用の論拠',
          '[ローカルLLMでスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide) — 自然言語のAIの頭脳を追加',
          '[完全ローカルの音声アシスタントを作る](/ja/smart-home/local-voice-assistant-smart-home) — Alexa を Assist + Whisper + Piper で置き換える',
          '[Ollama のインストール方法](/ja/local-llms/how-to-install-ollama) — ローカルモデルを動かす（クラスター横断：LLMの仕組み）',
          '[最も簡単なローカルAIアプリ](/ja/power-local-llm/easiest-local-ai-app-windows-mac-linux) — 同じハードウェアで動くローカルAIアプリ',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ローカルスマートホーム完全ガイド：クラウド不要（2026）',
      description: 'ローカルスマートホームはすべてのデバイスと自動化を自分のハードウェアで動かします。クラウド不要、オフライン動作、完全プライベート。2026年版完全ガイド。',
      url: 'https://www.promptquorum.com/ja/smart-home/local-smart-home-complete-guide',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'ローカルスマートホーム' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'ホームオートメーションのプライバシー' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'ローカルスマートホームの設定は難しいですか？', acceptedAnswer: { '@type': 'Answer', text: 'クラウド構成より手間がかかり、主に Home Assistant のインストールとデバイスのペアリングが必要ですが、多くの人は週末で動くハブと最初の自動化を用意できます。一般的な設定にプログラミングは不要です。' } },
        { '@type': 'Question', name: 'ローカルスマートホームはインターネットなしで動きますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。ハブとデバイスはローカルネットワークで通信するため、インターネットやクラウドの障害中も照明・施錠・センサー・自動化は動き続けます。' } },
        { '@type': 'Question', name: 'ローカルスマートホームにサブスクリプションは必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。Home Assistant は無料のオープンソースで、ローカルデバイスに継続課金はありません。支払うのは一度きりのハードウェア費用だけです。' } },
        { '@type': 'Question', name: 'スマートホームのためにAIをローカルで動かせますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。Ollama 経由のローカルLLMが Home Assistant 内で自動化の頭脳として機能し、自分のハードウェア上でクラウドなしに自然言語のデバイス制御を行えます。' } },
        { '@type': 'Question', name: 'ローカルスマートホームは GDPR に準拠しますか？', acceptedAnswer: { '@type': 'Answer', text: 'ローカル処理はデバイス・音声・カメラのデータを自宅に保ち、外部処理者が関与しないため、GDPR のデータ最小化とデータ所在を設計上支えます。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Casa Inteligente Local: O Guia Completo Sem Nuvem (2026)',
    seoTitle: 'Casa Inteligente Local 2026: Guia Sem Nuvem',
    intro:
      'Uma casa inteligente local processa cada dispositivo, automação e comando de voz no seu próprio hardware, sem nenhuma conta na nuvem. Este guia define o modelo local-first, explica por que ele cresce em 2026 e detalha a arquitetura camada por camada: hub, protocolos, voz e um cérebro de IA local. Você vai ver o que dá para rodar em casa hoje, quanto custa e como começar.',
    metaDescription:
      'Uma casa inteligente local roda cada dispositivo e automação no seu próprio hardware: sem nuvem, funciona offline e com total privacidade. Guia 2026.',
    twitterDescription:
      'Casa inteligente sem nuvem: cada dispositivo, automação e comando de voz roda no seu próprio hardware. A arquitetura local-first completa para 2026.',
    readTime: '11 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Donos de casa preocupados com privacidade que montam uma casa inteligente auto-hospedada',
    primaryTerm: 'local smart home',
    targetKeywords: [
      'casa inteligente local sem nuvem',
      'casa inteligente local',
      'casa inteligente auto-hospedada',
      'casa inteligente privada',
      'casa inteligente offline',
    ],
    leadAnswerBlock:
      '**Uma casa inteligente local processa cada dispositivo, automação e comando de voz no seu próprio hardware: sem conta na nuvem, sem dados saindo de casa e com funcionamento completo mesmo se a internet cair.** A arquitetura é um hub local (Home Assistant), protocolos locais (Matter/Thread, Zigbee, Z-Wave), voz local e — novidade em 2026 — um LLM local como cérebro de automação.',
    quickAnswerTop: {
      pt: {
        question: 'O que é uma casa inteligente local?',
        answer:
          'Uma casa inteligente local é uma configuração em que o hub, os dispositivos, as automações e o controle por voz rodam em hardware na sua casa, e não na nuvem de um fabricante. Funciona offline, não exige assinaturas e não envia dados de uso a terceiros. O Home Assistant é o hub local-first mais usado.',
        bullets: [
          'O plano de controle roda na sua casa (Home Assistant), não na nuvem de um fabricante',
          'Funciona durante quedas de internet ou da nuvem do fabricante',
          'Sem assinaturas e sem processador de dados externo',
          'A voz local (Whisper + Piper) substitui Alexa/Google',
          'Um LLM local pode atuar como cérebro de automação em linguagem natural',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'O que significa', anchor: 'what-it-means' },
      { label: 'Por que o local cresce', anchor: 'why-local' },
      { label: 'A arquitetura local-first', anchor: 'the-stack' },
      { label: 'O que roda em local', anchor: 'what-you-can-run' },
      { label: 'Custo e esforço', anchor: 'cost-effort' },
      { label: 'Como começar', anchor: 'how-to-start' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Uma casa inteligente local roda o hub, os dispositivos, as automações e o controle por voz em hardware próprio, sem conta na nuvem e offline.' },
      { type: 'plain-terms', content: 'A maioria das casas inteligentes envia os comandos pela nuvem de um fabricante: você toca um botão, a solicitação viaja até um servidor da empresa e o servidor diz ao seu dispositivo o que fazer. Uma casa inteligente local elimina o servidor. Um hub na sua casa (geralmente o Home Assistant) fala diretamente com os dispositivos por protocolos locais, então nada para de funcionar quando a internet cai e nenhum dado de uso sai da sua rede.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'Controle local significa que o caminho do comando do hub ao dispositivo fica dentro de casa; o controle na nuvem o roteia por um servidor do fabricante',
          'Use um hub local (Home Assistant em uma Raspberry Pi ou mini PC) como base',
          'Prefira dispositivos com Matter/Thread, Zigbee ou Z-Wave: funcionam em local sem uma ponte do fabricante',
          'Substitua Alexa/Google por voz local: Home Assistant Assist + Whisper (voz para texto) + Piper (texto para voz)',
          'Novidade em 2026: um LLM local via Ollama pode rodar controle em linguagem natural e automações contextuais na mesma máquina',
          'Compromisso: mais esforço inicial de configuração em troca de privacidade, confiabilidade offline e nenhuma assinatura',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'O que uma casa inteligente local realmente significa',
        content:
          '**Uma casa inteligente local mantém o caminho de controle — o elo entre "quero a luz acesa" e a luz acendendo — inteiramente dentro de casa.** Casas na nuvem enviam esse comando primeiro a um servidor do fabricante; as locais não. A linha divisória é onde a decisão é tomada, não qual marca você compra.',
        items: [
          '**Controle na nuvem:** seu app ou assistente de voz envia o comando à nuvem do fabricante, que o repassa ao dispositivo. Se a nuvem ou a sua internet cair, o dispositivo para de responder.',
          '**Controle local:** um hub na sua casa (Home Assistant) envia o comando diretamente ao dispositivo por um protocolo local. Sem ida e volta pela internet, sem servidor de terceiros.',
          '**Por que a distinção importa:** o controle local define a privacidade (nenhum registro de uso sai de casa), a confiabilidade (funciona offline) e a longevidade (o encerramento de uma nuvem não inutiliza o dispositivo).',
        ],
        columns: ['Dimensão', 'Casa inteligente na nuvem', 'Casa inteligente local'],
        rows: [
          { 'Dimensão': 'Privacidade', 'Casa inteligente na nuvem': 'Dados de uso, voz e câmera em servidores do fabricante', 'Casa inteligente local': 'Os dados ficam no seu hardware' },
          { 'Dimensão': 'Funciona offline', 'Casa inteligente na nuvem': 'Não: a maioria das funções precisa da nuvem', 'Casa inteligente local': 'Sim: roda na sua LAN' },
          { 'Dimensão': 'Assinaturas', 'Casa inteligente na nuvem': 'Comuns (armazenamento de câmera, recursos premium)', 'Casa inteligente local': 'Nenhuma: custo único de hardware' },
          { 'Dimensão': 'Localização dos dados', 'Casa inteligente na nuvem': 'Data center do fabricante (muitas vezes em outro país)', 'Casa inteligente local': 'Sua casa' },
          { 'Dimensão': 'Esforço de configuração', 'Casa inteligente na nuvem': 'Baixo: guiado por app', 'Casa inteligente local': 'Maior: você cuida do hub' },
          { 'Dimensão': 'Capacidade de IA', 'Casa inteligente na nuvem': 'Assistente na nuvem (Alexa, Google)', 'Casa inteligente local': 'Voz local + LLM local opcional' },
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Por que o local-first cresce em 2026',
        content:
          '**A adoção do local-first sobe porque as desvantagens da nuvem ficaram concretas: encerramentos que inutilizam hardware, taxas recorrentes, quedas e exposição da privacidade, enquanto a IA local já roda em casa.** Cada um é um motivo concreto e verificável, não uma preferência genérica.',
        items: [
          '**Encerramentos da nuvem inutilizam dispositivos:** quando um fabricante descontinua a nuvem de um produto, os dispositivos dependentes podem perder funções essenciais de um dia para o outro. Dispositivos locais continuam funcionando porque nada externo é necessário.',
          '**Confiabilidade:** uma casa inteligente local responde durante quedas de internet e incidentes na nuvem. Luzes, fechaduras e automações não dependem de um servidor remoto no ar.',
          '**Privacidade:** dispositivos na nuvem coletam padrões de uso, gravações de voz e imagens de câmera. O controle local elimina o processador externo por completo: veja [riscos de privacidade da casa inteligente](/pt/smart-home/smart-home-privacy-risks).',
          '**Sem assinaturas:** gravação local de câmeras e automações locais evitam as taxas mensais que os ecossistemas na nuvem prendem ao armazenamento e a recursos premium.',
          '**A IA local já é prática:** modelos pequenos e capazes rodam em um mini PC, então um LLM local pode atuar como cérebro de automação — algo que não existia para usuários domésticos há poucos anos. Veja [rodar sua casa inteligente em um LLM local](/pt/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      theStack: {
        id: 'the-stack',
        title: 'A arquitetura local-first, camada por camada',
        content:
          '**Uma casa inteligente local são quatro camadas: um hub, protocolos locais de dispositivo, voz local e um cérebro de IA local opcional.** Construa nessa ordem: o hub primeiro, a IA por último.',
        numberedItems: [
          { title: 'Hub — Home Assistant', whyItMatters: 'O plano de controle. O Home Assistant é um software de código aberto que roda em uma Raspberry Pi, mini PC ou NAS e fala diretamente com seus dispositivos. Comece aqui: veja [Home Assistant: primeiros passos](/pt/smart-home/home-assistant-getting-started).' },
          { title: 'Protocolos — Matter/Thread, Zigbee, Z-Wave', whyItMatters: 'Como os dispositivos se comunicam em local. Zigbee e Z-Wave são padrões mesh de baixo consumo maduros; Thread é o mesh moderno; Matter é a camada unificadora. Funcionam sem a nuvem do fabricante: veja [controle local com Matter](/pt/smart-home/matter-local-control-guide).' },
          { title: 'Voz local — Assist + Whisper + Piper', whyItMatters: 'Substitui Alexa e Google. O Home Assistant Assist trata a intenção, o Whisper faz voz para texto e o Piper texto para voz, tudo offline: veja [montar um assistente de voz totalmente local](/pt/smart-home/local-voice-assistant-smart-home).' },
          { title: 'Cérebro de IA — um LLM local via Ollama', whyItMatters: 'Camada superior opcional. Um modelo local transforma regras rígidas em controle por linguagem natural e automações contextuais, na mesma máquina e sem nuvem.' },
        ],
      },
      whatYouCanRun: {
        id: 'what-you-can-run',
        title: 'O que você pode rodar em local hoje',
        content:
          '**Iluminação, climatização, segurança, sensores, voz e automações de IA rodam todas em local em 2026: a nuvem é opcional, não obrigatória.** A tabela abaixo associa cada categoria à sua opção local.',
        columns: ['Categoria', 'Opção local', 'Observações'],
        rows: [
          { 'Categoria': 'Iluminação', 'Opção local': 'Lâmpadas Zigbee/Matter + Home Assistant', 'Observações': 'Resposta local instantânea; sem login na nuvem do app' },
          { 'Categoria': 'Climatização', 'Opção local': 'Termostatos locais / válvulas por Zigbee ou Z-Wave', 'Observações': 'Agendamentos e automações rodam no hub' },
          { 'Categoria': 'Segurança', 'Opção local': 'Câmeras locais + Frigate', 'Observações': 'Detecção por IA no dispositivo; veja câmeras de IA local abaixo' },
          { 'Categoria': 'Sensores', 'Opção local': 'Movimento, porta, temperatura Zigbee/Z-Wave', 'Observações': 'Disparam automações sem internet' },
          { 'Categoria': 'Voz', 'Opção local': 'Assist + Whisper + Piper', 'Observações': 'Palavra de ativação e comandos totalmente offline' },
          { 'Categoria': 'Automações de IA', 'Opção local': 'LLM local via Ollama', 'Observações': 'Controle em linguagem natural e regras contextuais' },
        ],
        items: [
          'Para câmeras de IA privadas especificamente, o [Frigate](/pt/smart-home/local-ai-security-camera) roda detecção de objetos e pessoas em local, sem assinatura.',
          'Para o hardware que roda tudo isso — incluindo um LLM local — veja [o melhor hardware para uma casa inteligente local](/pt/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      costEffort: {
        id: 'cost-effort',
        title: 'Quanto custa e que esforço exige',
        content:
          '**Uma casa inteligente local troca mais esforço inicial de configuração por zero assinaturas e controle a longo prazo.** O resumo honesto: você investe um fim de semana e um custo único de hardware em vez de taxas mensais e dependência do fabricante.',
        items: [
          '**Hardware:** uma Raspberry Pi roda um hub local básico; um mini PC é a melhor escolha se você também quiser rodar um LLM local. Conte com um custo único de hardware, não com taxas recorrentes.',
          '**Esforço:** espere uma curva de aprendizado para configurar o Home Assistant, parear dispositivos e escrever suas primeiras automações. A recompensa é um sistema que nenhum fabricante pode alterar ou descontinuar.',
          '**Escolha o caminho local-first se:** privacidade, confiabilidade offline ou evitar assinaturas importam para você.',
          '**Fique com a nuvem se:** você quer zero manutenção e nunca mexer na configuração — mas aceite as desvantagens de dados, quedas e assinaturas em [por que o local supera a nuvem](/pt/smart-home/why-local-smart-home-beats-cloud).',
        ],
      },
      howToStart: {
        id: 'how-to-start',
        title: 'Como começar uma casa inteligente local',
        content:
          '**Comece pelo hub e por um cômodo, depois expanda — não compre uma casa inteira de dispositivos primeiro.** O caminho mais rápido e confiável é o Home Assistant em uma Raspberry Pi ou mini PC, um coordenador Zigbee e alguns dispositivos locais.',
        numberedItems: [
          'Instale o Home Assistant em uma Raspberry Pi ou mini PC — [guia de primeiros passos](/pt/smart-home/home-assistant-getting-started).',
          'Escolha hardware com margem de crescimento se quiser IA local — [guia de hardware](/pt/smart-home/best-hardware-for-local-smart-home).',
          'Adicione dispositivos locais por padrão via Matter/Thread, Zigbee ou Z-Wave — [controle local com Matter](/pt/smart-home/matter-local-control-guide).',
          'Adicione voz local quando os dispositivos funcionarem — [assistente de voz local](/pt/smart-home/local-voice-assistant-smart-home).',
          'Adicione um cérebro LLM local por último — [rodar sua casa inteligente em um LLM local](/pt/smart-home/local-llm-smart-home-complete-guide).',
          'Para leitores da UE, confirme a postura de privacidade — [casa inteligente privada e compatível com o GDPR](/pt/smart-home/private-smart-home-gdpr).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'É difícil configurar uma casa inteligente local?', a: 'Exige mais esforço do que uma configuração na nuvem do tipo plug-and-play, principalmente instalar o Home Assistant e parear dispositivos. A maioria coloca um hub funcionando e uma primeira automação no ar em um fim de semana e depois expande aos poucos. Não é preciso programar para configurações comuns, embora haja YAML disponível para automações avançadas.' },
          { q: 'Uma casa inteligente local funciona sem internet?', a: 'Sim. Como o hub e os dispositivos se comunicam pela sua rede local, luzes, fechaduras, sensores e automações continuam funcionando durante uma queda de internet ou da nuvem. Você só perde extras que dependem de internet, como o acesso remoto fora de casa e as notificações na nuvem.' },
          { q: 'Preciso de uma assinatura para uma casa inteligente local?', a: 'Não. O Home Assistant é gratuito e de código aberto, e dispositivos locais não têm taxas recorrentes. Você paga um custo único de hardware. Existem extras pagos opcionais (por exemplo, um relay na nuvem para acesso remoto fácil), mas o controle local básico não precisa de assinatura.' },
          { q: 'Posso rodar IA em local para minha casa inteligente?', a: 'Sim. Um LLM local via Ollama pode atuar como agente de conversa e cérebro de automação dentro do Home Assistant, rodando controle de dispositivos em linguagem natural no seu próprio hardware sem nuvem. Um mini PC dá conta de modelos pequenos com folga; veja o guia da casa inteligente com LLM local.' },
          { q: 'Uma casa inteligente local é compatível com o GDPR?', a: 'O processamento local mantém dados de dispositivos, voz e câmera em hardware na sua casa, o que apoia a minimização e a residência de dados do GDPR por design, porque nenhum processador externo está envolvido. Veja o guia da casa inteligente privada compatível com o GDPR para a checklist da UE.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Home Assistant: primeiros passos](/pt/smart-home/home-assistant-getting-started) — instale o hub local que ancora a arquitetura',
          '[Por que uma casa inteligente local supera a nuvem](/pt/smart-home/why-local-smart-home-beats-cloud) — o argumento de confiabilidade, privacidade e custo',
          '[Rodar sua casa inteligente em um LLM local](/pt/smart-home/local-llm-smart-home-complete-guide) — adicione um cérebro de IA em linguagem natural',
          '[Montar um assistente de voz totalmente local](/pt/smart-home/local-voice-assistant-smart-home) — substitua a Alexa por Assist + Whisper + Piper',
          '[Como instalar o Ollama](/pt/local-llms/how-to-install-ollama) — rode um modelo local (entre clusters: a mecânica do LLM)',
          '[O app de IA local mais fácil](/pt/power-local-llm/easiest-local-ai-app-windows-mac-linux) — apps de IA local no mesmo hardware',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Casa Inteligente Local: O Guia Completo Sem Nuvem (2026)',
      description: 'Uma casa inteligente local roda cada dispositivo e automação no seu próprio hardware: sem nuvem, funciona offline e com total privacidade. Guia 2026.',
      url: 'https://www.promptquorum.com/pt/smart-home/local-smart-home-complete-guide',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Casa inteligente local' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Privacidade em automação residencial' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'É difícil configurar uma casa inteligente local?', acceptedAnswer: { '@type': 'Answer', text: 'Exige mais esforço do que uma configuração na nuvem — principalmente instalar o Home Assistant e parear dispositivos — mas a maioria coloca um hub funcionando e uma primeira automação no ar em um fim de semana. Não é preciso programar para configurações comuns.' } },
        { '@type': 'Question', name: 'Uma casa inteligente local funciona sem internet?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. O hub e os dispositivos se comunicam pela sua rede local, então luzes, fechaduras, sensores e automações continuam funcionando durante uma queda de internet ou da nuvem.' } },
        { '@type': 'Question', name: 'Preciso de uma assinatura para uma casa inteligente local?', acceptedAnswer: { '@type': 'Answer', text: 'Não. O Home Assistant é gratuito e de código aberto e dispositivos locais não têm taxas recorrentes. Você paga apenas um custo único de hardware.' } },
        { '@type': 'Question', name: 'Posso rodar IA em local para minha casa inteligente?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Um LLM local via Ollama pode atuar como cérebro de automação dentro do Home Assistant, rodando controle de dispositivos em linguagem natural no seu próprio hardware sem nuvem.' } },
        { '@type': 'Question', name: 'Uma casa inteligente local é compatível com o GDPR?', acceptedAnswer: { '@type': 'Answer', text: 'O processamento local mantém dados de dispositivos, voz e câmera na sua casa, apoiando a minimização e a residência de dados do GDPR por design, porque nenhum processador externo está envolvido.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: '本地智能家居完整指南：无需云端（2026）',
    seoTitle: '本地智能家居2026：无云端完整指南',
    intro:
      '本地智能家居在你自己的硬件上处理每一个设备、自动化和语音指令，完全不使用云账户。本指南定义本地优先模式，解释它为何在2026年增长，并按层拆解整个架构：中枢、协议、语音以及本地AI大脑。你将了解今天能在家中运行什么、成本如何，以及如何开始。',
    metaDescription:
      '本地智能家居在你自己的硬件上运行每个设备和自动化：无云端、可离线、完全私密。2026年完整本地优先架构指南。',
    twitterDescription:
      '无云端智能家居：每个设备、自动化和语音指令都在你自己的硬件上运行。2026年完整的本地优先架构。',
    readTime: '阅读约11分钟',
    educationalLevel: 'Intermediate',
    audience: '注重隐私、搭建自托管智能家居的住户',
    primaryTerm: 'local smart home',
    targetKeywords: [
      '本地智能家居 无云端',
      '本地智能家居',
      '自托管智能家居',
      '私密智能家居',
      '离线智能家居',
    ],
    leadAnswerBlock:
      '**本地智能家居在你自己的硬件上处理每个设备、自动化和语音指令——没有云账户、没有数据离开家、即使断网也能完整运行。** 其架构是一个本地中枢（Home Assistant）、本地协议（Matter/Thread、Zigbee、Z-Wave）、本地语音，以及2026年的新要素——作为自动化大脑的本地LLM。',
    quickAnswerTop: {
      zh: {
        question: '什么是本地智能家居？',
        answer:
          '本地智能家居是一种配置：中枢、设备、自动化和语音控制都在你家中的硬件上运行，而不是在厂商云端。它可离线运行，不需要订阅，也不向第三方发送使用数据。Home Assistant 是使用最广泛的本地优先中枢。',
        bullets: [
          '控制中枢在你家中运行（Home Assistant），而非厂商云端',
          '在断网或厂商云端故障时仍可运行',
          '无需订阅，没有外部数据处理方',
          '本地语音（Whisper + Piper）取代 Alexa/Google',
          '本地LLM可作为自然语言的自动化大脑',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '它意味着什么', anchor: 'what-it-means' },
      { label: '本地为何增长', anchor: 'why-local' },
      { label: '本地优先架构', anchor: 'the-stack' },
      { label: '本地能运行什么', anchor: 'what-you-can-run' },
      { label: '成本与投入', anchor: 'cost-effort' },
      { label: '如何开始', anchor: 'how-to-start' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '本地智能家居在自有硬件上运行中枢、设备、自动化和语音控制，无云账户且可离线。' },
      { type: 'plain-terms', content: '大多数智能家居通过厂商云端转发指令：你按一个按钮，请求传到公司服务器，服务器再告诉设备做什么。本地智能家居去掉了服务器。你家中的中枢（通常是 Home Assistant）通过本地协议直接与设备通信，因此断网时不会瘫痪，使用数据也不会离开你的网络。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          '本地控制意味着从中枢到设备的指令路径留在家里；云端控制则将其经过厂商服务器',
          '以本地中枢（运行在 Raspberry Pi 或迷你 PC 上的 Home Assistant）为基础',
          '优先选择支持 Matter/Thread、Zigbee 或 Z-Wave 的设备——它们无需厂商网桥即可本地运行',
          '用本地语音替代 Alexa/Google：Home Assistant Assist + Whisper（语音转文字）+ Piper（文字转语音）',
          '2026年新要素：通过 Ollama 的本地LLM可在同一台机器上实现自然语言控制和情境化自动化',
          '权衡：前期配置投入更多，换来隐私、离线可靠性和无需订阅',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: '本地智能家居究竟意味着什么',
        content:
          '**本地智能家居将控制路径——从"我要开灯"到灯真正亮起之间的连接——完全保留在家中。** 云端家居会先把该指令发到厂商服务器；本地家居不会。分界线在于决策在哪里做出，而不是你买哪个品牌。',
        items: [
          '**云端控制：** 你的应用或语音助手把指令发到厂商云端，再由云端转发给设备。云端或网络中断时，设备便不再响应。',
          '**本地控制：** 你家中的中枢（Home Assistant）通过本地协议直接把指令发给设备。没有网络往返，没有第三方服务器。',
          '**为何这一区分重要：** 本地控制决定了隐私（使用日志不出家门）、可靠性（可离线运行）和寿命（云端关停无法让设备变砖）。',
        ],
        columns: ['维度', '云端智能家居', '本地智能家居'],
        rows: [
          { '维度': '隐私', '云端智能家居': '使用、语音和摄像头数据在厂商服务器上', '本地智能家居': '数据留在你的硬件上' },
          { '维度': '离线运行', '云端智能家居': '否——多数功能需要云端', '本地智能家居': '是——在你的 LAN 上运行' },
          { '维度': '订阅', '云端智能家居': '常见（摄像头存储、高级功能）', '本地智能家居': '无——一次性硬件成本' },
          { '维度': '数据位置', '云端智能家居': '厂商数据中心（常在境外）', '本地智能家居': '你的家中' },
          { '维度': '配置投入', '云端智能家居': '低——应用引导', '本地智能家居': '较高——你来运维中枢' },
          { '维度': 'AI 能力', '云端智能家居': '云端助手（Alexa、Google）', '本地智能家居': '本地语音 + 可选本地LLM' },
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: '为何本地优先在2026年增长',
        content:
          '**本地优先的采用上升，是因为云端的弊端变得具体：关停使硬件作废、持续收费、故障以及隐私暴露——而本地AI如今已能在家中运行。** 每一点都是具体、可验证的理由，而非笼统偏好。',
        items: [
          '**云端关停使设备作废：** 厂商停用某产品云端后，依赖它的设备可能一夜之间丧失核心功能。本地设备无需任何外部依赖，因此照常运行。',
          '**可靠性：** 本地智能家居在网络中断和云端事故期间仍可响应。灯光、门锁和自动化不依赖某台远程服务器在线。',
          '**隐私：** 云端设备会收集使用模式、语音录音和摄像头画面。本地控制彻底去除外部处理方——参见[智能家居隐私风险](/zh/smart-home/smart-home-privacy-risks)。',
          '**无需订阅：** 本地摄像头录制和本地自动化避免了云端生态对存储和高级功能收取的月费。',
          '**本地AI已实用：** 小而强的模型可在迷你 PC 上运行，因此本地LLM能充当自动化大脑——这在几年前对家庭用户还不可能。参见[用本地LLM运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide)。',
        ],
      },
      theStack: {
        id: 'the-stack',
        title: '逐层拆解本地优先架构',
        content:
          '**本地智能家居由四层组成：中枢、本地设备协议、本地语音，以及可选的本地AI大脑。** 按此顺序搭建——先中枢，最后 AI。',
        numberedItems: [
          { title: '中枢 — Home Assistant', whyItMatters: '控制中枢。Home Assistant 是开源软件，可运行在 Raspberry Pi、迷你 PC 或 NAS 上，并直接与设备通信。从这里开始——参见[Home Assistant 入门](/zh/smart-home/home-assistant-getting-started)。' },
          { title: '协议 — Matter/Thread、Zigbee、Z-Wave', whyItMatters: '设备如何在本地通信。Zigbee 和 Z-Wave 是成熟的低功耗 mesh 标准；Thread 是现代 mesh；Matter 是统一层。它们无需厂商云端即可工作——参见[Matter 本地控制](/zh/smart-home/matter-local-control-guide)。' },
          { title: '本地语音 — Assist + Whisper + Piper', whyItMatters: '取代 Alexa 和 Google。Home Assistant Assist 处理意图，Whisper 做语音转文字，Piper 做文字转语音，全部离线——参见[搭建完全本地的语音助手](/zh/smart-home/local-voice-assistant-smart-home)。' },
          { title: 'AI 大脑 — 通过 Ollama 的本地LLM', whyItMatters: '可选的最上层。本地模型把僵硬的规则变成自然语言控制和情境化自动化，在同一台机器上运行且无需云端。' },
        ],
      },
      whatYouCanRun: {
        id: 'what-you-can-run',
        title: '今天你能在本地运行什么',
        content:
          '**照明、温控、安防、传感器、语音和AI自动化在2026年都能本地运行——云端是可选项，而非必需。** 下表把每个类别对应到其本地选项。',
        columns: ['类别', '本地选项', '说明'],
        rows: [
          { '类别': '照明', '本地选项': 'Zigbee/Matter 灯泡 + Home Assistant', '说明': '本地即时响应；无需应用云端登录' },
          { '类别': '温控', '本地选项': '通过 Zigbee 或 Z-Wave 的本地温控器/阀门', '说明': '日程和自动化在中枢上运行' },
          { '类别': '安防', '本地选项': '本地摄像头 + Frigate', '说明': '设备端 AI 检测；见下文本地 AI 摄像头' },
          { '类别': '传感器', '本地选项': 'Zigbee/Z-Wave 的人体、门窗、温度', '说明': '无需网络即可触发自动化' },
          { '类别': '语音', '本地选项': 'Assist + Whisper + Piper', '说明': '唤醒词与指令完全离线' },
          { '类别': 'AI 自动化', '本地选项': '通过 Ollama 的本地LLM', '说明': '自然语言控制与情境化规则' },
        ],
        items: [
          '专门针对私密 AI 摄像头，[Frigate](/zh/smart-home/local-ai-security-camera)在本地运行物体和人物检测，无需订阅。',
          '运行这一切——包括本地LLM——所需的硬件，参见[本地智能家居的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home)。',
        ],
      },
      costEffort: {
        id: 'cost-effort',
        title: '成本与所需投入',
        content:
          '**本地智能家居用更多的前期配置投入，换取零订阅和长期掌控。** 坦白说：你投入一个周末和一次性硬件成本，而不是月费和厂商绑定。',
        items: [
          '**硬件：** Raspberry Pi 可运行一个基础本地中枢；若还想运行本地LLM，迷你 PC 是更好的选择。按一次性硬件成本而非持续收费来规划。',
          '**投入：** 配置 Home Assistant、配对设备和编写首批自动化会有学习曲线。回报是一套任何厂商都无法更改或停用的系统。',
          '**在以下情况选择本地优先：** 隐私、离线可靠性或避免订阅对你很重要。',
          '**在以下情况保留云端：** 你想要零维护、从不碰配置——但要接受[本地为何胜过云端](/zh/smart-home/why-local-smart-home-beats-cloud)中关于数据、故障和订阅的权衡。',
        ],
      },
      howToStart: {
        id: 'how-to-start',
        title: '如何开始一个本地智能家居',
        content:
          '**从中枢和一个房间开始，再逐步扩展——不要一开始就买满整屋设备。** 最快且可靠的路径是：运行在 Raspberry Pi 或迷你 PC 上的 Home Assistant、一个 Zigbee 协调器，以及少量本地设备。',
        numberedItems: [
          '在 Raspberry Pi 或迷你 PC 上安装 Home Assistant——[入门指南](/zh/smart-home/home-assistant-getting-started)。',
          '若想要本地 AI，选择有扩展余量的硬件——[硬件指南](/zh/smart-home/best-hardware-for-local-smart-home)。',
          '通过 Matter/Thread、Zigbee 或 Z-Wave 添加默认本地的设备——[Matter 本地控制](/zh/smart-home/matter-local-control-guide)。',
          '设备就绪后添加本地语音——[本地语音助手](/zh/smart-home/local-voice-assistant-smart-home)。',
          '最后添加本地LLM大脑——[用本地LLM运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide)。',
          '欧盟读者请确认隐私态势——[符合 GDPR 的私密智能家居](/zh/smart-home/private-smart-home-gdpr)。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '本地智能家居难配置吗？', a: '比即插即用的云端方案更费功夫，主要是安装 Home Assistant 和配对设备。多数人能在一个周末让中枢和首个自动化跑起来，再逐步扩展。常规配置无需编程，高级自动化可使用 YAML。' },
          { q: '本地智能家居在断网时能用吗？', a: '能。由于中枢与设备通过本地网络通信，灯光、门锁、传感器和自动化在断网或云端故障期间仍可运行。你只会失去依赖网络的附加功能，如在外远程访问和云端通知。' },
          { q: '本地智能家居需要订阅吗？', a: '不需要。Home Assistant 免费且开源，本地设备没有持续收费。你支付一次性硬件成本。存在可选的付费附加项（例如便于远程访问的云中继），但本地核心控制无需订阅。' },
          { q: '我能为智能家居在本地运行 AI 吗？', a: '能。通过 Ollama 的本地LLM可在 Home Assistant 内充当对话代理和自动化大脑，在你自己的硬件上以自然语言控制设备且无需云端。迷你 PC 可轻松运行小型模型；参见本地LLM智能家居指南。' },
          { q: '本地智能家居符合 GDPR 吗？', a: '本地处理把设备、语音和摄像头数据保留在你家中的硬件上，由于不涉及外部处理方，从设计上支持 GDPR 的数据最小化与数据驻留。欧盟清单参见符合 GDPR 的私密智能家居指南。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Home Assistant 入门](/zh/smart-home/home-assistant-getting-started) — 安装支撑整套架构的本地中枢',
          '[本地智能家居为何胜过云端](/zh/smart-home/why-local-smart-home-beats-cloud) — 可靠性、隐私与成本的论据',
          '[用本地LLM运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide) — 加入自然语言的 AI 大脑',
          '[搭建完全本地的语音助手](/zh/smart-home/local-voice-assistant-smart-home) — 用 Assist + Whisper + Piper 取代 Alexa',
          '[如何安装 Ollama](/zh/local-llms/how-to-install-ollama) — 运行本地模型（跨集群：LLM 机制）',
          '[最简单的本地 AI 应用](/zh/power-local-llm/easiest-local-ai-app-windows-mac-linux) — 同一硬件上的本地 AI 应用',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '本地智能家居完整指南：无需云端（2026）',
      description: '本地智能家居在你自己的硬件上运行每个设备和自动化：无云端、可离线、完全私密。2026年完整本地优先架构指南。',
      url: 'https://www.promptquorum.com/zh/smart-home/local-smart-home-complete-guide',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: '本地智能家居' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: '家庭自动化隐私' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '本地智能家居难配置吗？', acceptedAnswer: { '@type': 'Answer', text: '比即插即用的云端方案更费功夫，主要是安装 Home Assistant 和配对设备，但多数人能在一个周末让中枢和首个自动化跑起来。常规配置无需编程。' } },
        { '@type': 'Question', name: '本地智能家居在断网时能用吗？', acceptedAnswer: { '@type': 'Answer', text: '能。中枢与设备通过本地网络通信，因此灯光、门锁、传感器和自动化在断网或云端故障期间仍可运行。' } },
        { '@type': 'Question', name: '本地智能家居需要订阅吗？', acceptedAnswer: { '@type': 'Answer', text: '不需要。Home Assistant 免费且开源，本地设备没有持续收费。你只支付一次性硬件成本。' } },
        { '@type': 'Question', name: '我能为智能家居在本地运行 AI 吗？', acceptedAnswer: { '@type': 'Answer', text: '能。通过 Ollama 的本地LLM可在 Home Assistant 内充当自动化大脑，在你自己的硬件上以自然语言控制设备且无需云端。' } },
        { '@type': 'Question', name: '本地智能家居符合 GDPR 吗？', acceptedAnswer: { '@type': 'Answer', text: '本地处理把设备、语音和摄像头数据保留在你家中，由于不涉及外部处理方，从设计上支持 GDPR 的数据最小化与数据驻留。' } },
      ],
    },
  },
}
