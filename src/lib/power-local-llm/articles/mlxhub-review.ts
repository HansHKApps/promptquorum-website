// MLXHub Review: On-Device MLX Chat and LAN Server for iPhone and iPad
// Slug: mlxhub-review
// Companion to: locally-ai-review, private-mind-review, oscilla-review, pocketpal-ai-review, mlx-serve-review

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-05',
    dateModified: '2026-10-05',
    next_refresh_due: '2027-04-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/mlxhub-review-hero-en.webp',
    title: 'MLXHub Review: On-Device MLX Chat and LAN Server for iPhone and iPad',
    seoTitle: 'MLXHub Review: On-Device MLX Chat and LAN Server for iPhone',
    intro:
      'MLXHub is an iPhone and iPad app that runs open models on the device with Apple\'s MLX framework, can serve them to other apps on your network, and can split one large model across several of your own devices. This review covers what its App Store listing and official site document, what is unclear, and how it compares with other iOS local-AI apps.',
    metaDescription:
      'MLXHub review: iPhone and iPad app for on-device MLX models with an OpenAI-compatible LAN server and multi-device model splitting. Pricing, iOS 26 and RAM requirements, privacy, limits.',
    twitterDescription:
      'MLXHub review: a freemium iOS/iPadOS app that runs MLX models offline, serves them over your LAN, and splits big models across devices. Requirements, pricing, privacy, limits.',
    audience:
      'iPhone and iPad owners who want to run open models offline and, optionally, use the device as a local OpenAI-compatible endpoint — covers features, requirements, pricing, privacy, limits, and alternatives.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'MLXHub review',
    targetKeywords: [
      'mlxhub review',
      'mlxhub ios app',
      'mlx iphone llm app',
      'run llm on iphone offline',
      'openai compatible server iphone',
      'distributed inference iphone ipad',
      'mlx swift app',
      'local ai ipad app',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'A17 Pro', 'M1'],
    leadAnswerBlock:
      '**MLXHub is a freemium, closed-source iOS and iPadOS app that runs open language and vision models offline on Apple silicon, can expose them as an OpenAI-compatible server on your Wi-Fi, and can pool several of your devices to load a model none of them fits alone.** Per its App Store listing it needs iOS or iPadOS 26.0 or later and is free to download, with MLXHub Plus as in-app purchases. This review covers version 2.2.0 and is based on the public listing and official site, not hands-on testing.',
    quickAnswerTop: {
      en: {
        question: 'Is MLXHub worth installing for local AI on an iPhone or iPad?',
        answer:
          'Yes, if you have an Apple silicon iPhone or iPad on iOS 26 with at least 6 GB of RAM and want offline chat plus a LAN endpoint or multi-device model splitting. Skip it if you need open source, Android, or a fixed list of free features: the code is not public and the listing does not say what MLXHub Plus unlocks. Locally AI and Private Mind are simpler on-device alternatives.',
        bullets: [
          'Free download with in-app purchases: Plus at $6.99 per month, $44.99 per year, or $229.99 lifetime.',
          'Runs open text and vision models on-device through mlx-swift; models come from Hugging Face.',
          'Optional LAN server with OpenAI-style /v1/chat/completions and /v1/embeddings routes.',
          'Distributed inference splits one model across your own paired devices on the same network.',
          'Needs iOS or iPadOS 26.0 or later on Apple silicon with 6 GB RAM or more.',
        ],
        updatedDate: '2026-10-05',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get MLXHub', anchor: 'get-it' },
      { label: 'MLXHub at a Glance', anchor: 'at-a-glance' },
      { label: 'What MLXHub Is', anchor: 'what-is-mlxhub' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Features', anchor: 'features' },
      { label: 'LAN Server and Distributed Inference', anchor: 'lan-and-distributed' },
      { label: 'Device Requirements', anchor: 'requirements' },
      { label: 'Pricing and Privacy', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'MLXHub vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use MLXHub', anchor: 'who-should-use' },
      { label: 'Who Should Not Use MLXHub', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MLXHub, by developer Juan Colilla, is a freemium iPhone and iPad app that runs open models offline on Apple\'s MLX framework, serves them to your network, and can split a model across several of your devices.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a model runner that lives in your pocket: chat works with no internet once a model is downloaded, and the same device can act as a small private AI server for other apps at home.',
          },
        ],
        items: [
          'Version reviewed: 2.2.0, as shown on the [App Store listing](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144).',
          'Price: free to download; MLXHub Plus is listed at $6.99 per month, $44.99 per year and $229.99 lifetime.',
          'Platform: iOS and iPadOS 26.0 or later; the official site asks for Apple silicon and 6 GB of RAM or more.',
          'Standout features: LAN server, multi-device model splitting, tools and skills, Hugging Face mirrors.',
          'Openness: closed source; no public repository was found.',
        ],
      },
      getItMlxhub: {
        id: 'get-it',
        title: 'Get MLXHub',
        content: [
          '**MLXHub is distributed through the Apple App Store.** The download is 73 MB and the app is a free download with in-app purchases.',
          'This review is a companion to PromptQuorum\'s [Local LLM Software Directory](/power-local-llm/local-llm-software-directory), which lists MLXHub alongside other mobile and desktop local AI tools.',
        ],
        columns: ['Channel', 'Get It'],
        rows: [
          {
            'Channel': 'Apple App Store',
            'Get It': '[MLXHub: Local AI & LLM Server on the App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144)',
          },
          {
            'Channel': 'Official site',
            'Get It': '[mlxhub.app](https://mlxhub.app)',
          },
          {
            'Channel': 'Privacy policy',
            'Get It': '[MLXHub privacy policy](https://mlxhub.app/privacy)',
          },
        ],
        note: 'No public source repository was found. There is no Android build; the listing covers Apple platforms only.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'MLXHub at a Glance',
        columns: ['Attribute', 'MLXHub'],
        rows: [
          { 'Attribute': 'Platform', 'MLXHub': 'iOS, iPadOS (26.0+)' },
          { 'Attribute': 'Price', 'MLXHub': 'Free, in-app purchases' },
          { 'Attribute': 'License', 'MLXHub': 'Closed source' },
          { 'Attribute': 'Runs fully offline', 'MLXHub': 'Yes, after a model is downloaded' },
          { 'Attribute': 'In-app model downloads', 'MLXHub': 'Yes, from Hugging Face' },
          { 'Attribute': 'Image input', 'MLXHub': 'Yes, vision-language models' },
          { 'Attribute': 'Local API server', 'MLXHub': 'Yes, OpenAI-compatible on your LAN' },
          { 'Attribute': 'Voice input / output', 'MLXHub': 'Not stated in the listing' },
        ],
        note: 'Attributes follow the mobile-chat comparison used in the Local LLM Software Directory. They come from the App Store listing and official site, which do not cover every feature.',
      },
      whatIsMlxhub: {
        id: 'what-is-mlxhub',
        title: 'What MLXHub Is',
        content: [
          '**MLXHub is an on-device model runner first and a chat client second.** The listing pitches "private offline chat & tools" and says it lets you "run supported larger models and serve chat and embeddings across your local network". The official site says it is built natively in Swift on mlx-swift, Apple\'s MLX framework for Apple silicon.',
          'It is published by Juan Colilla, with the copyright line "DreamFoundries EU". Do not confuse it with [mlxhub.ai](https://mlxhub.ai/), a separate macOS-only app by a different developer that shares the name.',
          'This review draws on the App Store listing and the official site only. It does not include hands-on testing, so speed, stability and answer quality are not rated here.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is an App Store install, then a model download from Hugging Face.** The listing does not document the first-run flow, so the steps below follow what the listing and site state.',
        ],
        numberedItems: [
          {
            title: 'Check device and OS',
            whyItMatters: 'The listing requires iOS or iPadOS 26.0 or later, and the official site asks for an Apple silicon device with 6 GB of RAM or more.',
          },
          {
            title: 'Install MLXHub',
            whyItMatters: 'Get it from the [App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144); the download is 73 MB.',
          },
          {
            title: 'Download a model',
            whyItMatters: 'Pick an open model from the in-app Hugging Face catalog. The app indicates whether it fits, but Hugging Face metadata is sometimes inconsistent.',
          },
          {
            title: 'Chat, then optionally turn on the LAN server',
            whyItMatters: 'Once a model is downloaded, chat works with no connection. The LAN server is optional and lets other apps on your Wi-Fi use the loaded models.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**MLXHub\'s selling point is breadth around the model runner.** Everything below comes from the App Store listing and the official site.',
        ],
        items: [
          '**Models.** Downloads open text and vision-language models from Hugging Face; the listing names Qwen3.6 35B-A3B, Bonsai 2 27B and Gemma models. Text-only chats load vision components only when needed, to save memory.',
          '**Memory and skills.** A memory system keeps facts from conversations, and you can create reusable custom skills.',
          '**Native tools.** Predefined tools reach Apple frameworks such as Calendar, Reminders, Health, Photos and the music library; the listing gives no detail on what each tool can do.',
          '**Speed and fit.** KV caching speeds up multi-turn chats, and a RAM stress test benchmarks your device\'s memory headroom before you load a model.',
          '**Model switching and mirrors.** Switch between text and vision models mid-conversation, and use a community Hugging Face mirror when Hugging Face is blocked.',
          '**Large-model streaming.** The listing mentions NAND expert streaming for larger models such as Qwen3.6 35B-A3B, without further detail.',
          '**Languages.** The interface is available in English plus 11 other languages.',
        ],
      },
      lanAndDistributed: {
        id: 'lan-and-distributed',
        title: 'LAN Server and Distributed Inference',
        content: [
          '**The LAN server turns your device into a small OpenAI-compatible endpoint.** The listing names the /v1/chat/completions and /v1/embeddings routes. Per the official site it also serves a lightweight chat page that anyone on the same Wi-Fi can open in a browser to talk to the loaded models, and it binds to local interfaces only, with no port forwarding.',
          '**Distributed inference pools several of your own devices.** One device hosts and the others join, each taking a slice of the model\'s layers, so a model that none of them fits alone can load. The site says the devices are paired and the traffic encrypted, and that nothing leaves the network. Throughput over Wi-Fi is not published, so expect it to be slower than a single device that fits the model.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Device Requirements',
        content: [
          '**MLXHub requires iOS or iPadOS 26.0 or later, an Apple silicon device and 6 GB of RAM or more.** The official site recommends an A17 Pro or M1 chip, or newer. The App Store listing also shows macOS 26.0 (Apple M1 or later) and visionOS 26.0 availability for the same app, without describing a separate desktop version.',
          'RAM is the real limit. Apple enforces stricter app memory limits on iPhone than on iPad, so larger models fit more often on an iPad. The site warns that a model that does not fit can occasionally still be downloaded, and that the app tries to stop it loading before iOS shuts the app down, without a guarantee.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Pricing and Privacy',
        content: [
          '**MLXHub is free to download, with MLXHub Plus listed at $6.99 per month, $44.99 per year and a $229.99 lifetime purchase.** Neither the listing nor the site says which features Plus unlocks, so check the paywall in the app before relying on a feature. Models are downloaded free from Hugging Face, with no per-token fees.',
          'The official site says inference is fully on-device, there are no accounts and nothing identifies you. It also states that since version 2.0.0 the app sends anonymous analytics and diagnostics, covering which features you use, device class and whether a model loaded, and that you can switch them off in Settings.',
          'The app is closed source and this review did not inspect network traffic, so the privacy claims are the developer\'s own. If you enable the LAN server, the data on it is as private as your Wi-Fi network.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Offline MLX inference',
            'What it means in real use': 'Chat with open models with no connection, using Apple\'s own framework.',
            'Limitation / caveat': 'Needs iOS 26 and 6 GB of RAM; iPhone memory limits cap model size.',
          },
          {
            'Benefit': 'LAN server',
            'What it means in real use': 'Other apps and browsers on your Wi-Fi can use the loaded models.',
            'Limitation / caveat': 'The device must stay awake and on the network; no throughput figures are published.',
          },
          {
            'Benefit': 'Multi-device splitting',
            'What it means in real use': 'Load a model that no single device of yours can hold.',
            'Limitation / caveat': 'Speed over Wi-Fi is undocumented and needs several compatible devices.',
          },
          {
            'Benefit': 'Tools, memory and skills',
            'What it means in real use': 'Reach Calendar, Reminders and Health from a chat.',
            'Limitation / caveat': 'The listing gives no detail on what each tool does.',
          },
          {
            'Benefit': 'Free to start',
            'What it means in real use': 'No per-token fees; models are free from Hugging Face.',
            'Limitation / caveat': 'Plus costs up to $229.99 lifetime, and what it unlocks is not stated.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'MLXHub vs. Alternatives',
        columns: ['App', 'Platforms', 'Price and license', 'Model source', 'Key difference'],
        rows: [
          {
            'App': 'MLXHub',
            'Platforms': 'iOS, iPadOS',
            'Price and license': 'Freemium, closed source',
            'Model source': 'Hugging Face (MLX)',
            'Key difference': 'LAN server and multi-device model splitting; not open source',
          },
          {
            'App': '[Locally AI](/power-local-llm/locally-ai-review)',
            'Platforms': 'iOS, Mac',
            'Price and license': 'Freemium, closed source',
            'Model source': 'In-app model catalog',
            'Key difference': 'Simpler on-device chat; no LAN server is listed',
          },
          {
            'App': '[Private Mind](/power-local-llm/private-mind-review)',
            'Platforms': 'iOS, Android',
            'Price and license': 'Free, MIT',
            'Model source': 'Hugging Face downloads',
            'Key difference': 'Open source and on Android too; no LAN server is listed',
          },
          {
            'App': '[Oscilla](/power-local-llm/oscilla-review)',
            'Platforms': 'iOS',
            'Price and license': 'Free, closed source',
            'Model source': '40+ in-app models',
            'Key difference': 'Larger fixed catalog; runtime not named',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Platforms': 'iOS, Android',
            'Price and license': 'Free, MIT',
            'Model source': 'GGUF models',
            'Key difference': 'Open source, llama.cpp-based, cross-platform',
          },
        ],
        note: 'Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each app\'s own listing before deciding.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use MLXHub',
        items: [
          '**iPad and recent iPhone owners who want the largest models their device can hold.** MLX, streaming and device pooling all target that limit.',
          '**Tinkerers who want a pocket AI server.** The OpenAI-compatible LAN endpoint lets scripts and other apps on your network use the device.',
          '**People with several Apple devices.** Multi-device splitting is the feature that most alternatives do not list.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use MLXHub',
        items: [
          '**Anyone who needs open source.** The code is not public; [Private Mind](/power-local-llm/private-mind-review) and [PocketPal AI](/power-local-llm/pocketpal-ai-review) are open source.',
          '**Android users.** Only Apple platforms are listed; PocketPal AI and Private Mind both run on Android.',
          '**Devices below iOS 26 or under 6 GB of RAM.** The listing and site set those floors.',
          '**Anyone who wants a stated feature list for the paid tier.** What MLXHub Plus unlocks is not documented; try the free tier first.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is MLXHub free?',
            a: 'It is free to download with in-app purchases: MLXHub Plus at $6.99 per month, $44.99 per year, or $229.99 lifetime, as shown on the App Store listing.',
          },
          {
            q: 'Who makes MLXHub?',
            a: 'Juan Colilla, with the copyright line "DreamFoundries EU". The mlxhub.ai app is a different, macOS-only product.',
          },
          {
            q: 'Does MLXHub send my chats anywhere?',
            a: 'The site says inference is fully on-device. Anonymous usage and diagnostics data is sent since version 2.0.0 and can be switched off in Settings.',
          },
          {
            q: 'Does MLXHub work on Android?',
            a: 'No. The listing covers iPhone, iPad and, per the store, Apple M1 Macs and Apple Vision Pro compatibility only.',
          },
          {
            q: 'Which models can I run?',
            a: 'Open MLX-format text and vision models from Hugging Face. The listing names Qwen3.6 35B-A3B, Bonsai 2 27B and Gemma models.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'MLXHub is a good fit on paper for someone with a recent iPad or iPhone who wants offline MLX chat plus the option to use the device as a local endpoint or to pool several devices for a bigger model.',
          'The caveats are transparency and age: it is closed source, the Plus features are undocumented, speed over multi-device splitting is unpublished, and the listing showed only seven ratings at the time of review.',
          'If you want open source, start with [Private Mind](/power-local-llm/private-mind-review). If you want the LAN server or multi-device splitting, try MLXHub\'s free tier first.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[MLXHub: Local AI & LLM Server on the App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144) — version, price, requirements, features and developer.',
          '[MLXHub official site](https://mlxhub.app) — feature descriptions, device requirements and FAQ, including the analytics statement.',
          '[MLXHub privacy policy](https://mlxhub.app/privacy) — policy page linked from the official site.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Locally AI Review](/power-local-llm/locally-ai-review) — a freemium on-device app for iPhone, iPad and Mac.',
          '[Private Mind Review](/power-local-llm/private-mind-review) — an open-source offline chat app for iPhone and Android.',
          '[Oscilla Review](/power-local-llm/oscilla-review) — an iOS app with a fixed catalog of on-device models.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — open-source on-device chat for iOS and Android.',
          '[mlx-serve Review](/power-local-llm/mlx-serve-review) — a native inference server for Apple silicon Macs.',
          '[The Complete Local LLM Software Directory](/power-local-llm/local-llm-software-directory) — a broader directory of local-LLM tools across platforms.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-05',
    dateModified: '2026-10-05',
    next_refresh_due: '2027-04-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/mlxhub-review-hero-de.webp',
    title: 'MLXHub-Rezension: MLX-Chat auf dem Gerät und LAN-Server für iPhone und iPad',
    seoTitle: 'MLXHub-Rezension: MLX-Chat und LAN-Server für iPhone und iPad',
    intro:
      'MLXHub ist eine iPhone- und iPad-App, die offene Modelle mit Apples MLX-Framework direkt auf dem Gerät ausführt, sie anderen Apps in Ihrem Netzwerk bereitstellen kann und ein großes Modell auf mehrere Ihrer eigenen Geräte verteilen kann. Diese Rezension beschreibt, was der App-Store-Eintrag und die offizielle Website dokumentieren, was unklar bleibt und wie MLXHub im Vergleich zu anderen lokalen KI-Apps für iOS abschneidet.',
    metaDescription:
      'MLXHub-Rezension: iPhone- und iPad-App für MLX-Modelle auf dem Gerät mit OpenAI-kompatiblem LAN-Server und Modellaufteilung auf mehrere Geräte. Preise, iOS-26- und RAM-Voraussetzungen, Datenschutz, Grenzen.',
    twitterDescription:
      'MLXHub-Rezension: eine Freemium-App für iOS/iPadOS, die MLX-Modelle offline ausführt, über Ihr LAN bereitstellt und große Modelle auf Geräte verteilt. Anforderungen, Preise, Datenschutz, Grenzen.',
    audience:
      'iPhone- und iPad-Nutzer, die offene Modelle offline ausführen und das Gerät optional als lokalen OpenAI-kompatiblen Endpunkt nutzen möchten — behandelt Funktionen, Anforderungen, Preise, Datenschutz, Grenzen und Alternativen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'MLXHub Rezension',
    targetKeywords: [
      'mlxhub test',
      'mlxhub ios app',
      'mlx iphone llm app',
      'llm offline auf iphone ausführen',
      'openai kompatibler server iphone',
      'verteilte inferenz iphone ipad',
      'mlx swift app',
      'lokale ki app ipad',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'A17 Pro', 'M1'],
    leadAnswerBlock:
      '**MLXHub ist eine nicht quelloffene Freemium-App für iOS und iPadOS, die offene Sprach- und Vision-Modelle offline auf Apple silicon ausführt, sie als OpenAI-kompatiblen Server in Ihrem WLAN bereitstellen kann und mehrere Ihrer Geräte bündeln kann, um ein Modell zu laden, das auf keines davon allein passt.** Laut App-Store-Eintrag setzt sie iOS oder iPadOS 26.0 oder neuer voraus und lässt sich kostenlos herunterladen; MLXHub Plus wird als In-App-Kauf angeboten. Diese Rezension behandelt Version 2.2.0 und beruht auf dem öffentlichen Eintrag und der offiziellen Website, nicht auf praktischen Tests.',
    quickAnswerTop: {
      de: {
        question: 'Lohnt sich MLXHub für lokale KI auf dem iPhone oder iPad?',
        answer:
          'Ja, wenn Sie ein iPhone oder iPad mit Apple silicon unter iOS 26 und mindestens 6 GB RAM haben und Offline-Chat sowie einen LAN-Endpunkt oder die Modellaufteilung auf mehrere Geräte nutzen möchten. Verzichten Sie darauf, wenn Sie Open Source, Android oder eine feste Liste kostenloser Funktionen brauchen: Der Code ist nicht öffentlich, und der Eintrag nennt nicht, was MLXHub Plus freischaltet. Locally AI und Private Mind sind einfachere On-Device-Alternativen.',
        bullets: [
          'Kostenloser Download mit In-App-Käufen: Plus für $6.99 pro Monat, $44.99 pro Jahr oder $229.99 einmalig.',
          'Führt offene Text- und Vision-Modelle über mlx-swift auf dem Gerät aus; die Modelle stammen von Hugging Face.',
          'Optionaler LAN-Server mit den OpenAI-typischen Routen /v1/chat/completions und /v1/embeddings.',
          'Verteilte Inferenz teilt ein Modell auf Ihre eigenen gekoppelten Geräte im selben Netzwerk auf.',
          'Benötigt iOS oder iPadOS 26.0 oder neuer auf Apple silicon mit mindestens 6 GB RAM.',
        ],
        updatedDate: '2026-10-05',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'MLXHub herunterladen', anchor: 'get-it' },
      { label: 'MLXHub im Überblick', anchor: 'at-a-glance' },
      { label: 'Was MLXHub ist', anchor: 'what-is-mlxhub' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'LAN-Server und verteilte Inferenz', anchor: 'lan-and-distributed' },
      { label: 'Geräteanforderungen', anchor: 'requirements' },
      { label: 'Preise und Datenschutz', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile vs. Einschränkungen', anchor: 'tradeoffs' },
      { label: 'MLXHub vs. Alternativen', anchor: 'vs-alternatives' },
      { label: 'Wer MLXHub nutzen sollte', anchor: 'who-should-use' },
      { label: 'Wer MLXHub nicht nutzen sollte', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MLXHub des Entwicklers Juan Colilla ist eine Freemium-App für iPhone und iPad, die offene Modelle mit Apples MLX-Framework offline ausführt, sie Ihrem Netzwerk bereitstellt und ein Modell auf mehrere Ihrer Geräte verteilen kann.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als Modell-Runner für die Hosentasche vor: Der Chat funktioniert ohne Internet, sobald ein Modell heruntergeladen ist, und dasselbe Gerät kann für andere Apps zu Hause als kleiner privater KI-Server dienen.',
          },
        ],
        items: [
          'Getestete Version: 2.2.0, wie im [App-Store-Eintrag](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144) angezeigt.',
          'Preis: kostenloser Download; MLXHub Plus ist mit $6.99 pro Monat, $44.99 pro Jahr und $229.99 einmalig gelistet.',
          'Plattform: iOS und iPadOS 26.0 oder neuer; die offizielle Website verlangt Apple silicon und mindestens 6 GB RAM.',
          'Besondere Funktionen: LAN-Server, Modellaufteilung auf mehrere Geräte, Tools und Skills, Hugging-Face-Mirrors.',
          'Offenheit: nicht quelloffen; es wurde kein öffentliches Repository gefunden.',
        ],
      },
      getItMlxhub: {
        id: 'get-it',
        title: 'MLXHub herunterladen',
        content: [
          '**MLXHub wird über den Apple App Store vertrieben.** Der Download umfasst 73 MB, und die App lässt sich kostenlos laden, mit In-App-Käufen.',
          'Diese Rezension ist ein Begleitartikel zum [Verzeichnis lokaler LLM-Software](/de/power-local-llm/local-llm-software-directory) von PromptQuorum, das MLXHub neben anderen mobilen und Desktop-Tools für lokale KI listet.',
        ],
        columns: ['Kanal', 'Download'],
        rows: [
          {
            'Kanal': 'Apple App Store',
            'Download': '[MLXHub: Local AI & LLM Server im App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144)',
          },
          {
            'Kanal': 'Offizielle Website',
            'Download': '[mlxhub.app](https://mlxhub.app)',
          },
          {
            'Kanal': 'Datenschutzerklärung',
            'Download': '[Datenschutzerklärung von MLXHub](https://mlxhub.app/privacy)',
          },
        ],
        note: 'Es wurde kein öffentliches Quellcode-Repository gefunden. Es gibt keine Android-Version; der Eintrag deckt nur Apple-Plattformen ab.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'MLXHub im Überblick',
        columns: ['Merkmal', 'MLXHub'],
        rows: [
          { 'Merkmal': 'Plattform', 'MLXHub': 'iOS, iPadOS (26.0+)' },
          { 'Merkmal': 'Preis', 'MLXHub': 'Kostenlos, In-App-Käufe' },
          { 'Merkmal': 'Lizenz', 'MLXHub': 'Closed Source' },
          { 'Merkmal': 'Läuft vollständig offline', 'MLXHub': 'Ja, nach dem Modell-Download' },
          { 'Merkmal': 'Modell-Downloads in der App', 'MLXHub': 'Ja, von Hugging Face' },
          { 'Merkmal': 'Bildeingabe', 'MLXHub': 'Ja, Vision-Language-Modelle' },
          { 'Merkmal': 'Lokaler API-Server', 'MLXHub': 'Ja, OpenAI-kompatibel im LAN' },
          { 'Merkmal': 'Spracheingabe / -ausgabe', 'MLXHub': 'Im Eintrag nicht angegeben' },
        ],
        note: 'Die Merkmale folgen dem Vergleichsschema für mobile Chat-Apps im Verzeichnis lokaler LLM-Software. Sie stammen aus dem App-Store-Eintrag und der offiziellen Website, die nicht jede Funktion abdecken.',
      },
      whatIsMlxhub: {
        id: 'what-is-mlxhub',
        title: 'Was MLXHub ist',
        content: [
          '**MLXHub ist zuerst ein Modell-Runner auf dem Gerät und erst in zweiter Linie ein Chat-Client.** Der englischsprachige Eintrag wirbt mit „private offline chat & tools" und sagt, die App lasse Sie „run supported larger models and serve chat and embeddings across your local network" (Zitate aus dem englischen Eintrag). Laut offizieller Website ist sie nativ in Swift auf mlx-swift gebaut, Apples MLX-Framework für Apple silicon.',
          'Veröffentlicht wird sie von Juan Colilla, mit dem Copyright-Vermerk „DreamFoundries EU". Verwechseln Sie sie nicht mit [mlxhub.ai](https://mlxhub.ai/), einer separaten, nur für macOS verfügbaren App eines anderen Entwicklers, die denselben Namen trägt.',
          'Diese Rezension stützt sich ausschließlich auf den App-Store-Eintrag und die offizielle Website. Praktische Tests sind nicht enthalten, daher werden Geschwindigkeit, Stabilität und Antwortqualität hier nicht bewertet.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus einer Installation über den App Store und anschließend einem Modell-Download von Hugging Face.** Der Eintrag dokumentiert den ersten Start nicht, daher folgen die Schritte unten dem, was Eintrag und Website angeben.',
        ],
        numberedItems: [
          {
            title: 'Gerät und Betriebssystem prüfen',
            whyItMatters: 'Der Eintrag setzt iOS oder iPadOS 26.0 oder neuer voraus, und die offizielle Website verlangt ein Gerät mit Apple silicon und mindestens 6 GB RAM.',
          },
          {
            title: 'MLXHub installieren',
            whyItMatters: 'Laden Sie die App im [App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144) herunter; der Download umfasst 73 MB.',
          },
          {
            title: 'Ein Modell herunterladen',
            whyItMatters: 'Wählen Sie ein offenes Modell aus dem Hugging-Face-Katalog in der App. Die App zeigt an, ob es passt, doch die Metadaten von Hugging Face sind mitunter widersprüchlich.',
          },
          {
            title: 'Chatten, dann optional den LAN-Server einschalten',
            whyItMatters: 'Sobald ein Modell heruntergeladen ist, funktioniert der Chat ohne Verbindung. Der LAN-Server ist optional und lässt andere Apps in Ihrem WLAN die geladenen Modelle nutzen.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**MLXHubs Stärke ist die Breite rund um den Modell-Runner.** Alles Folgende stammt aus dem App-Store-Eintrag und der offiziellen Website.',
        ],
        items: [
          '**Modelle.** Lädt offene Text- und Vision-Language-Modelle von Hugging Face herunter; der Eintrag nennt Qwen3.6 35B-A3B, Bonsai 2 27B und Gemma-Modelle. Reine Text-Chats laden Vision-Komponenten nur bei Bedarf, um Speicher zu sparen.',
          '**Gedächtnis und Skills.** Ein Gedächtnissystem behält Fakten aus Unterhaltungen, und Sie können wiederverwendbare eigene Skills anlegen.',
          '**Native Tools.** Vordefinierte Tools greifen auf Apple-Frameworks wie Kalender, Erinnerungen, Health, Fotos und die Musikbibliothek zu; der Eintrag gibt keine Details dazu, was die einzelnen Tools können.',
          '**Tempo und Passform.** KV-Caching beschleunigt Chats über mehrere Runden, und ein RAM-Stresstest misst den Speicherspielraum Ihres Geräts, bevor Sie ein Modell laden.',
          '**Modellwechsel und Mirrors.** Wechseln Sie mitten im Gespräch zwischen Text- und Vision-Modellen und nutzen Sie einen Community-Mirror von Hugging Face, wenn Hugging Face blockiert ist.',
          '**Streaming großer Modelle.** Der Eintrag erwähnt NAND-Expert-Streaming für größere Modelle wie Qwen3.6 35B-A3B, ohne weitere Details.',
          '**Sprachen.** Die Oberfläche ist auf Englisch sowie in 11 weiteren Sprachen verfügbar.',
        ],
      },
      lanAndDistributed: {
        id: 'lan-and-distributed',
        title: 'LAN-Server und verteilte Inferenz',
        content: [
          '**Der LAN-Server macht Ihr Gerät zu einem kleinen OpenAI-kompatiblen Endpunkt.** Der Eintrag nennt die Routen /v1/chat/completions und /v1/embeddings. Laut offizieller Website stellt er außerdem eine schlanke Chat-Seite bereit, die jeder im selben WLAN im Browser öffnen kann, um mit den geladenen Modellen zu sprechen; er bindet sich nur an lokale Schnittstellen, ohne Portweiterleitung.',
          '**Verteilte Inferenz bündelt mehrere Ihrer eigenen Geräte.** Ein Gerät fungiert als Host, die anderen schließen sich an und übernehmen jeweils einen Teil der Modellschichten, sodass sich ein Modell laden lässt, das auf keines davon allein passt. Die Website nennt die Geräte gekoppelt und den Datenverkehr verschlüsselt und gibt an, dass nichts das Netzwerk verlässt. Der Durchsatz über WLAN ist nicht veröffentlicht; rechnen Sie daher damit, dass es langsamer ist als auf einem einzelnen Gerät, auf das das Modell passt.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Geräteanforderungen',
        content: [
          '**MLXHub setzt iOS oder iPadOS 26.0 oder neuer, ein Gerät mit Apple silicon und mindestens 6 GB RAM voraus.** Die offizielle Website empfiehlt einen A17-Pro- oder M1-Chip oder neuer. Der App-Store-Eintrag zeigt für dieselbe App außerdem die Verfügbarkeit für macOS 26.0 (Apple M1 oder neuer) und visionOS 26.0, ohne eine eigene Desktop-Version zu beschreiben.',
          'Der RAM ist die eigentliche Grenze. Apple setzt auf dem iPhone strengere Speichergrenzen für Apps durch als auf dem iPad, daher passen größere Modelle häufiger auf ein iPad. Die Website warnt, dass sich ein Modell, das nicht passt, mitunter dennoch herunterladen lässt, und dass die App versucht, das Laden zu verhindern, bevor iOS die App beendet, ohne dass dies garantiert ist.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Preise und Datenschutz',
        content: [
          '**MLXHub lässt sich kostenlos herunterladen; MLXHub Plus ist mit $6.99 pro Monat, $44.99 pro Jahr und einem Einmalkauf für $229.99 gelistet.** Weder der Eintrag noch die Website nennen, welche Funktionen Plus freischaltet, prüfen Sie daher die Paywall in der App, bevor Sie sich auf eine Funktion verlassen. Modelle laden Sie kostenlos von Hugging Face herunter, ohne Gebühren pro Token.',
          'Laut offizieller Website läuft die Inferenz vollständig auf dem Gerät, es gibt keine Konten, und nichts identifiziert Sie. Sie gibt außerdem an, dass die App seit Version 2.0.0 anonyme Analyse- und Diagnosedaten sendet, die erfassen, welche Funktionen Sie nutzen, welche Geräteklasse vorliegt und ob ein Modell geladen wurde, und dass Sie dies in den Einstellungen abschalten können.',
          'Die App ist nicht quelloffen, und diese Rezension hat den Netzwerkverkehr nicht untersucht, die Datenschutzangaben stammen also vom Entwickler selbst. Wenn Sie den LAN-Server aktivieren, sind die Daten darauf nur so privat wie Ihr WLAN.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Bedeutung im Alltag', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'MLX-Inferenz offline',
            'Bedeutung im Alltag': 'Chat mit offenen Modellen ohne Verbindung, mit Apples eigenem Framework.',
            'Einschränkung / Hinweis': 'Braucht iOS 26 und 6 GB RAM; iPhone-Speichergrenzen begrenzen die Modellgröße.',
          },
          {
            'Vorteil': 'LAN-Server',
            'Bedeutung im Alltag': 'Andere Apps und Browser in Ihrem WLAN können die geladenen Modelle nutzen.',
            'Einschränkung / Hinweis': 'Das Gerät muss wach und im Netzwerk bleiben; keine Durchsatzwerte veröffentlicht.',
          },
          {
            'Vorteil': 'Aufteilung auf mehrere Geräte',
            'Bedeutung im Alltag': 'Laden Sie ein Modell, das auf kein einzelnes Ihrer Geräte passt.',
            'Einschränkung / Hinweis': 'Tempo über WLAN ist nicht dokumentiert; mehrere kompatible Geräte nötig.',
          },
          {
            'Vorteil': 'Tools, Gedächtnis und Skills',
            'Bedeutung im Alltag': 'Aus dem Chat auf Kalender, Erinnerungen und Health zugreifen.',
            'Einschränkung / Hinweis': 'Der Eintrag gibt keine Details dazu, was die einzelnen Tools tun.',
          },
          {
            'Vorteil': 'Kostenloser Einstieg',
            'Bedeutung im Alltag': 'Keine Gebühren pro Token; Modelle sind bei Hugging Face kostenlos.',
            'Einschränkung / Hinweis': 'Plus kostet bis zu $229.99 einmalig; was es freischaltet, ist nicht angegeben.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'MLXHub vs. Alternativen',
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Modellquelle', 'Wichtigster Unterschied'],
        rows: [
          {
            'App': 'MLXHub',
            'Plattformen': 'iOS, iPadOS',
            'Preis und Lizenz': 'Freemium, Closed Source',
            'Modellquelle': 'Hugging Face (MLX)',
            'Wichtigster Unterschied': 'LAN-Server und Modellaufteilung auf mehrere Geräte; nicht quelloffen',
          },
          {
            'App': '[Locally AI](/de/power-local-llm/locally-ai-review)',
            'Plattformen': 'iOS, Mac',
            'Preis und Lizenz': 'Freemium, Closed Source',
            'Modellquelle': 'Modellkatalog in der App',
            'Wichtigster Unterschied': 'Einfacherer On-Device-Chat; kein LAN-Server gelistet',
          },
          {
            'App': '[Private Mind](/de/power-local-llm/private-mind-review)',
            'Plattformen': 'iOS, Android',
            'Preis und Lizenz': 'Kostenlos, MIT',
            'Modellquelle': 'Hugging-Face-Downloads',
            'Wichtigster Unterschied': 'Quelloffen und auch für Android; kein LAN-Server gelistet',
          },
          {
            'App': '[Oscilla](/de/power-local-llm/oscilla-review)',
            'Plattformen': 'iOS',
            'Preis und Lizenz': 'Kostenlos, Closed Source',
            'Modellquelle': '40+ Modelle in der App',
            'Wichtigster Unterschied': 'Größerer fester Katalog; Laufzeit nicht genannt',
          },
          {
            'App': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            'Plattformen': 'iOS, Android',
            'Preis und Lizenz': 'Kostenlos, MIT',
            'Modellquelle': 'GGUF-Modelle',
            'Wichtigster Unterschied': 'Quelloffen, auf llama.cpp basierend, plattformübergreifend',
          },
        ],
        note: 'Angaben zu Plattformen, Preisen und Funktionen von Apps Dritter ändern sich häufig. Prüfen Sie die aktuellen Details im jeweiligen App-Eintrag, bevor Sie sich entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Wer MLXHub nutzen sollte',
        items: [
          '**iPad- und aktuelle iPhone-Besitzer, die die größten Modelle ausführen wollen, die ihr Gerät fassen kann.** MLX, Streaming und Geräte-Pooling zielen genau auf diese Grenze.',
          '**Tüftler, die einen KI-Server für die Hosentasche wollen.** Der OpenAI-kompatible LAN-Endpunkt lässt Skripte und andere Apps in Ihrem Netzwerk das Gerät nutzen.',
          '**Menschen mit mehreren Apple-Geräten.** Die Aufteilung auf mehrere Geräte ist die Funktion, die die meisten Alternativen nicht listen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Wer MLXHub nicht nutzen sollte',
        items: [
          '**Alle, die Open Source brauchen.** Der Code ist nicht öffentlich; [Private Mind](/de/power-local-llm/private-mind-review) und [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) sind quelloffen.',
          '**Android-Nutzer.** Es sind nur Apple-Plattformen gelistet; PocketPal AI und Private Mind laufen beide unter Android.',
          '**Geräte mit iOS unter Version 26 oder weniger als 6 GB RAM.** Eintrag und Website setzen diese Untergrenzen.',
          '**Alle, die eine angegebene Funktionsliste für die Bezahlstufe wollen.** Was MLXHub Plus freischaltet, ist nicht dokumentiert; probieren Sie zuerst die kostenlose Stufe aus.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist MLXHub kostenlos?',
            a: 'Der Download ist kostenlos, mit In-App-Käufen: MLXHub Plus für $6.99 pro Monat, $44.99 pro Jahr oder $229.99 einmalig, wie im App-Store-Eintrag angezeigt.',
          },
          {
            q: 'Wer entwickelt MLXHub?',
            a: 'Juan Colilla, mit dem Copyright-Vermerk „DreamFoundries EU". Die App mlxhub.ai ist ein anderes, nur für macOS verfügbares Produkt.',
          },
          {
            q: 'Sendet MLXHub meine Chats irgendwohin?',
            a: 'Laut Website läuft die Inferenz vollständig auf dem Gerät. Anonyme Nutzungs- und Diagnosedaten werden seit Version 2.0.0 gesendet und lassen sich in den Einstellungen abschalten.',
          },
          {
            q: 'Läuft MLXHub unter Android?',
            a: 'Nein. Der Eintrag deckt nur iPhone, iPad und laut Store die Kompatibilität mit Macs mit Apple M1 und Apple Vision Pro ab.',
          },
          {
            q: 'Welche Modelle kann ich ausführen?',
            a: 'Offene Text- und Vision-Modelle im MLX-Format von Hugging Face. Der Eintrag nennt Qwen3.6 35B-A3B, Bonsai 2 27B und Gemma-Modelle.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'MLXHub passt auf dem Papier gut zu jemandem mit einem aktuellen iPad oder iPhone, der Offline-MLX-Chat möchte, dazu die Option, das Gerät als lokalen Endpunkt zu nutzen oder mehrere Geräte für ein größeres Modell zu bündeln.',
          'Die Vorbehalte sind Transparenz und Alter: Die App ist nicht quelloffen, die Plus-Funktionen sind nicht dokumentiert, das Tempo bei der Aufteilung auf mehrere Geräte ist nicht veröffentlicht, und der Eintrag zeigte zum Zeitpunkt der Rezension nur sieben Bewertungen.',
          'Wenn Sie Open Source wollen, beginnen Sie mit [Private Mind](/de/power-local-llm/private-mind-review). Wenn Sie den LAN-Server oder die Aufteilung auf mehrere Geräte möchten, probieren Sie zuerst die kostenlose Stufe von MLXHub aus.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[MLXHub: Local AI & LLM Server im App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144) — Version, Preis, Anforderungen, Funktionen und Entwickler.',
          '[Offizielle MLXHub-Website](https://mlxhub.app) — Funktionsbeschreibungen, Geräteanforderungen und FAQ, einschließlich der Angabe zur Analyse.',
          '[Datenschutzerklärung von MLXHub](https://mlxhub.app/privacy) — von der offiziellen Website verlinkte Richtlinienseite.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Locally-AI-Rezension](/de/power-local-llm/locally-ai-review) — eine Freemium-On-Device-App für iPhone, iPad und Mac.',
          '[Private-Mind-Rezension](/de/power-local-llm/private-mind-review) — eine quelloffene Offline-Chat-App für iPhone und Android.',
          '[Oscilla-Rezension](/de/power-local-llm/oscilla-review) — eine iOS-App mit festem Katalog von On-Device-Modellen.',
          '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — quelloffener On-Device-Chat für iOS und Android.',
          '[mlx-serve-Rezension](/de/power-local-llm/mlx-serve-review) — ein nativer Inferenzserver für Macs mit Apple silicon.',
          '[Das vollständige Verzeichnis lokaler LLM-Software](/de/power-local-llm/local-llm-software-directory) — ein breiteres Verzeichnis lokaler LLM-Tools über alle Plattformen hinweg.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-05',
    dateModified: '2026-10-05',
    next_refresh_due: '2027-04-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/mlxhub-review-hero-fr.webp',
    title: 'Avis MLXHub: chat MLX sur l\'appareil et serveur LAN pour iPhone et iPad',
    seoTitle: 'Avis MLXHub: chat MLX sur l\'appareil et serveur LAN pour iPhone',
    intro:
      'MLXHub est une application iPhone et iPad qui exécute des modèles ouverts sur l\'appareil grâce au framework MLX d\'Apple, peut les servir à d\'autres applications de votre réseau et peut répartir un gros modèle sur plusieurs de vos propres appareils. Cet avis couvre ce que documentent sa fiche App Store et son site officiel, ce qui reste flou, et la comparaison de MLXHub avec d\'autres applications d\'IA locale pour iOS.',
    metaDescription:
      'Avis MLXHub : application iPhone et iPad pour modèles MLX sur l\'appareil, avec serveur LAN compatible OpenAI et répartition de modèle entre appareils. Tarifs, prérequis iOS 26 et RAM, confidentialité, limites.',
    twitterDescription:
      'Avis MLXHub : une application iOS/iPadOS freemium qui exécute des modèles MLX hors ligne, les sert sur votre réseau local et répartit les gros modèles entre appareils. Configuration requise, tarifs, confidentialité, limites.',
    audience:
      'Utilisateurs d\'iPhone et d\'iPad qui veulent exécuter des modèles ouverts hors ligne et, en option, utiliser l\'appareil comme point d\'accès local compatible OpenAI — couvre les fonctionnalités, la configuration requise, les tarifs, la confidentialité, les limites et les alternatives.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'avis MLXHub',
    targetKeywords: [
      'avis mlxhub',
      'application mlxhub ios',
      'application llm mlx iphone',
      'faire tourner un llm sur iphone hors ligne',
      'serveur compatible openai iphone',
      'inférence distribuée iphone ipad',
      'application mlx swift',
      'application ia locale ipad',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'A17 Pro', 'M1'],
    leadAnswerBlock:
      '**MLXHub est une application iOS et iPadOS freemium et à code source fermé qui exécute des modèles de langage et de vision ouverts hors ligne sur Apple silicon, peut les exposer comme serveur compatible OpenAI sur votre Wi-Fi, et peut mettre en commun plusieurs de vos appareils pour charger un modèle qu\'aucun ne peut contenir seul.** Selon sa fiche App Store, elle exige iOS ou iPadOS 26.0 ou ultérieur et se télécharge gratuitement, avec MLXHub Plus en achats intégrés. Cet avis porte sur la version 2.2.0 et s\'appuie sur la fiche publique et le site officiel, pas sur des tests pratiques.',
    quickAnswerTop: {
      fr: {
        question: 'MLXHub vaut-elle d\'être installée pour l\'IA locale sur iPhone ou iPad ?',
        answer:
          'Oui, si vous avez un iPhone ou un iPad Apple silicon sous iOS 26 avec au moins 6 Go de RAM et que vous voulez un chat hors ligne, plus un point d\'accès LAN ou la répartition de modèle entre appareils. Passez votre chemin si vous avez besoin d\'open source, d\'Android ou d\'une liste fixe de fonctionnalités gratuites : le code n\'est pas public et la fiche n\'indique pas ce que MLXHub Plus débloque. Locally AI et Private Mind sont des alternatives plus simples sur l\'appareil.',
        bullets: [
          'Téléchargement gratuit avec achats intégrés : Plus à $6.99 par mois, $44.99 par an ou $229.99 à vie.',
          'Exécute des modèles de texte et de vision ouverts sur l\'appareil via mlx-swift ; les modèles viennent de Hugging Face.',
          'Serveur LAN facultatif avec des routes de type OpenAI /v1/chat/completions et /v1/embeddings.',
          'L\'inférence distribuée répartit un modèle entre vos propres appareils appairés sur le même réseau.',
          'Nécessite iOS ou iPadOS 26.0 ou ultérieur sur Apple silicon avec 6 Go de RAM ou plus.',
        ],
        updatedDate: '2026-10-05',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir MLXHub', anchor: 'get-it' },
      { label: 'MLXHub en bref', anchor: 'at-a-glance' },
      { label: 'Ce qu\'est MLXHub', anchor: 'what-is-mlxhub' },
      { label: 'Comment commencer', anchor: 'how-to-get-started' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Serveur LAN et inférence distribuée', anchor: 'lan-and-distributed' },
      { label: 'Configuration requise', anchor: 'requirements' },
      { label: 'Tarifs et confidentialité', anchor: 'privacy' },
      { label: 'Compromis : avantages vs. limites', anchor: 'tradeoffs' },
      { label: 'MLXHub vs. alternatives', anchor: 'vs-alternatives' },
      { label: 'Qui devrait utiliser MLXHub', anchor: 'who-should-use' },
      { label: 'Qui ne devrait pas utiliser MLXHub', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MLXHub, du développeur Juan Colilla, est une application iPhone et iPad freemium qui exécute des modèles ouverts hors ligne grâce au framework MLX d\'Apple, les sert à votre réseau et peut répartir un modèle sur plusieurs de vos appareils.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-la comme un exécuteur de modèles que vous gardez dans la poche : le chat fonctionne sans internet une fois un modèle téléchargé, et le même appareil peut servir de petit serveur d\'IA privé pour d\'autres applications à la maison.',
          },
        ],
        items: [
          'Version testée : 2.2.0, telle qu\'affichée sur la [fiche App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144).',
          'Prix : téléchargement gratuit ; MLXHub Plus est listé à $6.99 par mois, $44.99 par an et $229.99 à vie.',
          'Plateforme : iOS et iPadOS 26.0 ou ultérieur ; le site officiel demande Apple silicon et 6 Go de RAM ou plus.',
          'Points forts : serveur LAN, répartition de modèle entre appareils, outils et compétences, miroirs Hugging Face.',
          'Ouverture : code source fermé ; aucun dépôt public n\'a été trouvé.',
        ],
      },
      getItMlxhub: {
        id: 'get-it',
        title: 'Obtenir MLXHub',
        content: [
          '**MLXHub est distribuée par l\'Apple App Store.** Le téléchargement pèse 73 Mo et l\'application se télécharge gratuitement, avec des achats intégrés.',
          'Cet avis est un complément au [répertoire des logiciels LLM locaux](/fr/power-local-llm/local-llm-software-directory) de PromptQuorum, qui recense MLXHub aux côtés d\'autres outils d\'IA locale mobiles et de bureau.',
        ],
        columns: ['Canal', 'Obtenir'],
        rows: [
          {
            'Canal': 'Apple App Store',
            'Obtenir': '[MLXHub: Local AI & LLM Server sur l\'App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144)',
          },
          {
            'Canal': 'Site officiel',
            'Obtenir': '[mlxhub.app](https://mlxhub.app)',
          },
          {
            'Canal': 'Politique de confidentialité',
            'Obtenir': '[Politique de confidentialité de MLXHub](https://mlxhub.app/privacy)',
          },
        ],
        note: 'Aucun dépôt de code source public n\'a été trouvé. Il n\'existe pas de version Android ; la fiche ne couvre que les plateformes Apple.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'MLXHub en bref',
        columns: ['Attribut', 'MLXHub'],
        rows: [
          { 'Attribut': 'Plateforme', 'MLXHub': 'iOS, iPadOS (26.0+)' },
          { 'Attribut': 'Prix', 'MLXHub': 'Gratuit, achats intégrés' },
          { 'Attribut': 'Licence', 'MLXHub': 'Code source fermé' },
          { 'Attribut': 'Fonctionne hors ligne', 'MLXHub': 'Oui, une fois un modèle téléchargé' },
          { 'Attribut': 'Téléchargement de modèles', 'MLXHub': 'Oui, depuis Hugging Face' },
          { 'Attribut': 'Entrée d\'images', 'MLXHub': 'Oui, modèles vision-langage' },
          { 'Attribut': 'Serveur d\'API local', 'MLXHub': 'Oui, compatible OpenAI sur votre LAN' },
          { 'Attribut': 'Entrée / sortie vocale', 'MLXHub': 'Non indiqué dans la fiche' },
        ],
        note: 'Les attributs suivent la comparaison des applications de chat mobiles utilisée dans le répertoire des logiciels LLM locaux. Ils proviennent de la fiche App Store et du site officiel, qui ne couvrent pas toutes les fonctionnalités.',
      },
      whatIsMlxhub: {
        id: 'what-is-mlxhub',
        title: 'Ce qu\'est MLXHub',
        content: [
          '**MLXHub est d\'abord un exécuteur de modèles sur l\'appareil, et ensuite seulement un client de chat.** La fiche (citations traduites de l\'anglais) met en avant un « chat privé hors ligne et des outils » et dit qu\'elle permet d\'« exécuter des modèles plus gros pris en charge et de servir le chat et les embeddings sur votre réseau local ». Le site officiel indique qu\'elle est développée nativement en Swift sur mlx-swift, le framework MLX d\'Apple pour Apple silicon.',
          'Elle est publiée par Juan Colilla, avec la mention de copyright « DreamFoundries EU ». Ne la confondez pas avec [mlxhub.ai](https://mlxhub.ai/), une application distincte réservée à macOS, d\'un autre développeur, qui porte le même nom.',
          'Cet avis s\'appuie uniquement sur la fiche App Store et le site officiel. Il n\'inclut pas de tests pratiques ; la vitesse, la stabilité et la qualité des réponses ne sont donc pas évaluées ici.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Comment commencer',
        content: [
          '**La mise en route consiste à installer l\'application depuis l\'App Store, puis à télécharger un modèle depuis Hugging Face.** La fiche ne documente pas le premier lancement ; les étapes ci-dessous suivent donc ce qu\'indiquent la fiche et le site.',
        ],
        numberedItems: [
          {
            title: 'Vérifier l\'appareil et le système',
            whyItMatters: 'La fiche exige iOS ou iPadOS 26.0 ou ultérieur, et le site officiel demande un appareil Apple silicon avec 6 Go de RAM ou plus.',
          },
          {
            title: 'Installer MLXHub',
            whyItMatters: 'Obtenez-la sur l\'[App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144) ; le téléchargement pèse 73 Mo.',
          },
          {
            title: 'Télécharger un modèle',
            whyItMatters: 'Choisissez un modèle ouvert dans le catalogue Hugging Face intégré. L\'application indique s\'il tient en mémoire, mais les métadonnées de Hugging Face sont parfois incohérentes.',
          },
          {
            title: 'Discuter, puis activer éventuellement le serveur LAN',
            whyItMatters: 'Une fois un modèle téléchargé, le chat fonctionne sans connexion. Le serveur LAN est facultatif et permet à d\'autres applications de votre Wi-Fi d\'utiliser les modèles chargés.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**L\'atout de MLXHub, c\'est l\'étendue de ce qui entoure l\'exécuteur de modèles.** Tout ce qui suit provient de la fiche App Store et du site officiel.',
        ],
        items: [
          '**Modèles.** Télécharge des modèles ouverts de texte et de vision-langage depuis Hugging Face ; la fiche cite Qwen3.6 35B-A3B, Bonsai 2 27B et des modèles Gemma. Les conversations texte seul ne chargent les composants de vision qu\'en cas de besoin, pour économiser la mémoire.',
          '**Mémoire et compétences.** Un système de mémoire conserve des faits issus des conversations, et vous pouvez créer des compétences personnalisées réutilisables.',
          '**Outils natifs.** Des outils prédéfinis accèdent aux frameworks Apple tels que Calendrier, Rappels, Santé, Photos et la médiathèque musicale ; la fiche ne détaille pas ce que fait chaque outil.',
          '**Vitesse et adéquation.** Le cache KV accélère les conversations à plusieurs tours, et un test de charge de la RAM évalue la marge mémoire de votre appareil avant de charger un modèle.',
          '**Changement de modèle et miroirs.** Passez d\'un modèle de texte à un modèle de vision en pleine conversation, et utilisez un miroir Hugging Face communautaire quand Hugging Face est bloqué.',
          '**Diffusion de gros modèles.** La fiche mentionne le streaming d\'experts depuis la NAND pour les modèles plus gros comme Qwen3.6 35B-A3B, sans plus de détails.',
          '**Langues.** L\'interface est disponible en anglais et dans 11 autres langues.',
        ],
      },
      lanAndDistributed: {
        id: 'lan-and-distributed',
        title: 'Serveur LAN et inférence distribuée',
        content: [
          '**Le serveur LAN transforme votre appareil en petit point d\'accès compatible OpenAI.** La fiche nomme les routes /v1/chat/completions et /v1/embeddings. Selon le site officiel, il sert aussi une page de chat légère que toute personne sur le même Wi-Fi peut ouvrir dans un navigateur pour dialoguer avec les modèles chargés, et il n\'écoute que sur les interfaces locales, sans redirection de port.',
          '**L\'inférence distribuée met en commun plusieurs de vos propres appareils.** Un appareil héberge et les autres le rejoignent, chacun prenant une tranche des couches du modèle, de sorte qu\'un modèle qu\'aucun ne peut contenir seul peut se charger. Le site indique que les appareils sont appairés et le trafic chiffré, et que rien ne quitte le réseau. Le débit sur Wi-Fi n\'est pas publié ; attendez-vous donc à un fonctionnement plus lent que sur un seul appareil capable de contenir le modèle.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise',
        content: [
          '**MLXHub exige iOS ou iPadOS 26.0 ou ultérieur, un appareil Apple silicon et 6 Go de RAM ou plus.** Le site officiel recommande une puce A17 Pro ou M1, ou plus récente. La fiche App Store indique aussi une disponibilité pour macOS 26.0 (Apple M1 ou ultérieur) et visionOS 26.0 pour la même application, sans décrire de version de bureau distincte.',
          'La RAM est la vraie limite. Apple impose des limites de mémoire par application plus strictes sur l\'iPhone que sur l\'iPad ; les modèles plus gros tiennent donc plus souvent sur un iPad. Le site prévient qu\'un modèle qui ne tient pas peut parfois être téléchargé quand même, et que l\'application tente d\'en empêcher le chargement avant qu\'iOS ne ferme l\'application, sans garantie.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Tarifs et confidentialité',
        content: [
          '**MLXHub se télécharge gratuitement, avec MLXHub Plus listé à $6.99 par mois, $44.99 par an et un achat à vie à $229.99.** Ni la fiche ni le site n\'indiquent quelles fonctionnalités Plus débloque ; vérifiez donc l\'écran d\'achat dans l\'application avant de compter sur une fonctionnalité. Les modèles se téléchargent gratuitement depuis Hugging Face, sans frais par token.',
          'Le site officiel indique que l\'inférence se fait entièrement sur l\'appareil, qu\'il n\'y a pas de compte et que rien ne vous identifie. Il précise aussi que, depuis la version 2.0.0, l\'application envoie des données d\'analyse et de diagnostic anonymes, couvrant les fonctionnalités utilisées, la classe d\'appareil et le chargement réussi ou non d\'un modèle, et que vous pouvez les désactiver dans les Réglages.',
          'L\'application est à code source fermé et cet avis n\'a pas inspecté le trafic réseau ; les affirmations de confidentialité sont donc celles du développeur. Si vous activez le serveur LAN, les données qui y transitent sont aussi privées que votre réseau Wi-Fi.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages vs. limites',
        columns: ['Avantage', 'Ce que cela signifie en usage réel', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Inférence MLX hors ligne',
            'Ce que cela signifie en usage réel': 'Discutez avec des modèles ouverts sans connexion, avec le framework d\'Apple.',
            'Limite / réserve': 'Exige iOS 26 et 6 Go de RAM ; les limites mémoire de l\'iPhone plafonnent la taille des modèles.',
          },
          {
            'Avantage': 'Serveur LAN',
            'Ce que cela signifie en usage réel': 'D\'autres applications et navigateurs de votre Wi-Fi peuvent utiliser les modèles chargés.',
            'Limite / réserve': 'L\'appareil doit rester allumé et connecté au réseau ; aucun chiffre de débit n\'est publié.',
          },
          {
            'Avantage': 'Répartition entre appareils',
            'Ce que cela signifie en usage réel': 'Chargez un modèle qu\'aucun de vos appareils ne peut contenir seul.',
            'Limite / réserve': 'La vitesse sur Wi-Fi n\'est pas documentée et il faut plusieurs appareils compatibles.',
          },
          {
            'Avantage': 'Outils, mémoire et compétences',
            'Ce que cela signifie en usage réel': 'Accédez à Calendrier, Rappels et Santé depuis un chat.',
            'Limite / réserve': 'La fiche ne détaille pas ce que fait chaque outil.',
          },
          {
            'Avantage': 'Gratuite pour commencer',
            'Ce que cela signifie en usage réel': 'Pas de frais par token ; les modèles sont gratuits sur Hugging Face.',
            'Limite / réserve': 'Plus coûte jusqu\'à $229.99 à vie, et ce qu\'il débloque n\'est pas indiqué.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'MLXHub vs. alternatives',
        columns: ['Application', 'Plateformes', 'Prix et licence', 'Source des modèles', 'Différence clé'],
        rows: [
          {
            'Application': 'MLXHub',
            'Plateformes': 'iOS, iPadOS',
            'Prix et licence': 'Freemium, code source fermé',
            'Source des modèles': 'Hugging Face (MLX)',
            'Différence clé': 'Serveur LAN et répartition de modèle entre appareils ; pas open source',
          },
          {
            'Application': '[Locally AI](/fr/power-local-llm/locally-ai-review)',
            'Plateformes': 'iOS, Mac',
            'Prix et licence': 'Freemium, code source fermé',
            'Source des modèles': 'Catalogue de modèles intégré',
            'Différence clé': 'Chat sur l\'appareil plus simple ; aucun serveur LAN listé',
          },
          {
            'Application': '[Private Mind](/fr/power-local-llm/private-mind-review)',
            'Plateformes': 'iOS, Android',
            'Prix et licence': 'Gratuit, MIT',
            'Source des modèles': 'Téléchargements Hugging Face',
            'Différence clé': 'Open source et aussi sur Android ; aucun serveur LAN listé',
          },
          {
            'Application': '[Oscilla](/fr/power-local-llm/oscilla-review)',
            'Plateformes': 'iOS',
            'Prix et licence': 'Gratuit, code source fermé',
            'Source des modèles': '40+ modèles intégrés',
            'Différence clé': 'Catalogue fixe plus large ; moteur non nommé',
          },
          {
            'Application': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            'Plateformes': 'iOS, Android',
            'Prix et licence': 'Gratuit, MIT',
            'Source des modèles': 'Modèles GGUF',
            'Différence clé': 'Open source, basé sur llama.cpp, multiplateforme',
          },
        ],
        note: 'Les détails de plateforme, de prix et de fonctionnalités des applications tierces changent fréquemment. Vérifiez les spécificités actuelles sur la fiche de chaque application avant de décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Qui devrait utiliser MLXHub',
        items: [
          '**Les propriétaires d\'iPad et d\'iPhone récents qui veulent les plus gros modèles que leur appareil peut contenir.** MLX, le streaming et la mise en commun d\'appareils visent tous cette limite.',
          '**Les bricoleurs qui veulent un serveur d\'IA de poche.** Le point d\'accès LAN compatible OpenAI permet à des scripts et à d\'autres applications de votre réseau d\'utiliser l\'appareil.',
          '**Les personnes qui possèdent plusieurs appareils Apple.** La répartition entre appareils est la fonctionnalité que la plupart des alternatives ne listent pas.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Qui ne devrait pas utiliser MLXHub',
        items: [
          '**Toute personne qui a besoin d\'open source.** Le code n\'est pas public ; [Private Mind](/fr/power-local-llm/private-mind-review) et [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) sont open source.',
          '**Les utilisateurs d\'Android.** Seules les plateformes Apple sont listées ; PocketPal AI et Private Mind fonctionnent tous deux sur Android.',
          '**Les appareils sous iOS 26 ou avec moins de 6 Go de RAM.** La fiche et le site fixent ces seuils.',
          '**Ceux qui veulent une liste de fonctionnalités explicite pour l\'offre payante.** Ce que MLXHub Plus débloque n\'est pas documenté ; essayez d\'abord la version gratuite.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'MLXHub est-elle gratuite ?',
            a: 'Elle se télécharge gratuitement, avec des achats intégrés : MLXHub Plus à $6.99 par mois, $44.99 par an ou $229.99 à vie, comme indiqué sur la fiche App Store.',
          },
          {
            q: 'Qui développe MLXHub ?',
            a: 'Juan Colilla, avec la mention de copyright « DreamFoundries EU ». L\'application mlxhub.ai est un produit différent, réservé à macOS.',
          },
          {
            q: 'MLXHub envoie-t-elle mes conversations quelque part ?',
            a: 'Le site indique que l\'inférence se fait entièrement sur l\'appareil. Des données d\'usage et de diagnostic anonymes sont envoyées depuis la version 2.0.0 et peuvent être désactivées dans les Réglages.',
          },
          {
            q: 'MLXHub fonctionne-t-elle sur Android ?',
            a: 'Non. La fiche ne couvre que l\'iPhone, l\'iPad et, selon le store, la compatibilité avec les Mac Apple M1 et l\'Apple Vision Pro.',
          },
          {
            q: 'Quels modèles puis-je exécuter ?',
            a: 'Des modèles ouverts de texte et de vision au format MLX depuis Hugging Face. La fiche cite Qwen3.6 35B-A3B, Bonsai 2 27B et des modèles Gemma.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Sur le papier, MLXHub convient bien à qui possède un iPad ou un iPhone récent et veut un chat MLX hors ligne, avec la possibilité d\'utiliser l\'appareil comme point d\'accès local ou de mettre plusieurs appareils en commun pour un modèle plus gros.',
          'Les réserves tiennent à la transparence et à la jeunesse du projet : le code est fermé, les fonctionnalités Plus ne sont pas documentées, la vitesse de la répartition entre appareils n\'est pas publiée, et la fiche n\'affichait que sept notes au moment de l\'avis.',
          'Si vous voulez de l\'open source, commencez par [Private Mind](/fr/power-local-llm/private-mind-review). Si vous voulez le serveur LAN ou la répartition entre appareils, essayez d\'abord la version gratuite de MLXHub.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[MLXHub: Local AI & LLM Server sur l\'App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144) — version, prix, configuration requise, fonctionnalités et développeur.',
          '[Site officiel de MLXHub](https://mlxhub.app) — descriptions des fonctionnalités, configuration requise et FAQ, y compris la déclaration sur les données d\'analyse.',
          '[Politique de confidentialité de MLXHub](https://mlxhub.app/privacy) — page de politique liée depuis le site officiel.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis Locally AI](/fr/power-local-llm/locally-ai-review) — une application freemium sur l\'appareil pour iPhone, iPad et Mac.',
          '[Avis Private Mind](/fr/power-local-llm/private-mind-review) — une application de chat hors ligne open source pour iPhone et Android.',
          '[Avis Oscilla](/fr/power-local-llm/oscilla-review) — une application iOS avec un catalogue fixe de modèles sur l\'appareil.',
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — chat open source sur l\'appareil pour iOS et Android.',
          '[Avis mlx-serve](/fr/power-local-llm/mlx-serve-review) — un serveur d\'inférence natif pour Mac Apple silicon.',
          '[Le répertoire complet des logiciels LLM locaux](/fr/power-local-llm/local-llm-software-directory) — un répertoire plus large d\'outils LLM locaux multiplateformes.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-05',
    dateModified: '2026-10-05',
    next_refresh_due: '2027-04-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/mlxhub-review-hero-ja.webp',
    title: 'MLXHubレビュー:iPhoneとiPad向けのオンデバイスMLXチャットとLANサーバー',
    seoTitle: 'MLXHubレビュー:オンデバイスMLXチャットとLANサーバー対応iPhoneアプリ',
    intro:
      'MLXHubは、AppleのMLXフレームワークでオープンモデルを端末上で実行し、ネットワーク上の他のアプリへ提供でき、1つの大きなモデルを手持ちの複数の端末に分割して読み込むこともできるiPhoneとiPad向けアプリです。本レビューでは、App Storeの掲載情報と公式サイトに記載されている内容、不明な点、そして他のiOS向けローカルAIアプリとの比較を扱います。',
    metaDescription:
      'MLXHubレビュー:オンデバイスのMLXモデル、OpenAI互換のLANサーバー、複数端末でのモデル分割に対応するiPhoneとiPad向けアプリ。料金、iOS 26とRAMの要件、プライバシー、制約を解説。',
    twitterDescription:
      'MLXHubレビュー:MLXモデルをオフラインで実行し、LAN経由で提供し、大きなモデルを複数端末に分割できるフリーミアムのiOS/iPadOSアプリ。要件、料金、プライバシー、制約を解説。',
    audience:
      'オープンモデルをオフラインで動かしたい、さらに必要なら端末をローカルのOpenAI互換エンドポイントとして使いたいiPhoneとiPadのユーザー向け——機能、要件、料金、プライバシー、制約、代替アプリを扱う。',
    readTime: '8分で読めます',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'MLXHubレビュー',
    targetKeywords: [
      'mlxhub レビュー',
      'mlxhub ios アプリ',
      'mlx iphone llm アプリ',
      'iphone オフライン llm 実行',
      'openai互換 サーバー iphone',
      'iphone ipad 分散推論',
      'mlx swift アプリ',
      'ipad ローカルai アプリ',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'A17 Pro', 'M1'],
    leadAnswerBlock:
      '**MLXHubは、Apple silicon上でオープンな言語モデルとビジョンモデルをオフライン実行でき、Wi-Fi上でOpenAI互換サーバーとして提供でき、複数の端末をまとめて、どれか1台では載らないモデルを読み込める、フリーミアムでクローズドソースのiOS/iPadOSアプリです。** App Storeの掲載情報によれば、iOSまたはiPadOS 26.0以降が必要で、ダウンロードは無料、MLXHub Plusがアプリ内課金として提供されています。本レビューはバージョン2.2.0が対象で、公開されている掲載情報と公式サイトに基づいており、実機テストは含みません。',
    quickAnswerTop: {
      ja: {
        question: 'iPhoneやiPadでローカルAIを使うために、MLXHubをインストールする価値はありますか?',
        answer:
          'はい、iOS 26でRAMが6 GB以上のApple silicon搭載iPhoneまたはiPadをお持ちで、オフラインチャットに加えてLANエンドポイントや複数端末でのモデル分割を求めるならおすすめです。オープンソースやAndroid版が必要な人、無料で使える機能の一覧を求める人は見送ってください。コードは公開されておらず、MLXHub Plusで何が使えるようになるかも掲載情報に記載がありません。もっと手軽なオンデバイスの代替アプリは、Locally AIとPrivate Mindです。',
        bullets: [
          'ダウンロードは無料でアプリ内課金あり:Plusは月額$6.99、年額$44.99、買い切り$229.99。',
          'mlx-swiftを通じてオープンなテキストモデルとビジョンモデルを端末上で実行。モデルはHugging Faceから取得。',
          '任意のLANサーバーに、OpenAI形式の/v1/chat/completionsと/v1/embeddingsのルートがある。',
          '分散推論は、同じネットワーク上でペアリングした自分の端末に1つのモデルを分割する。',
          'Apple siliconでRAM 6 GB以上のiOSまたはiPadOS 26.0以降が必要。',
        ],
        updatedDate: '2026-10-05',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'MLXHubを入手する', anchor: 'get-it' },
      { label: 'MLXHubの概要', anchor: 'at-a-glance' },
      { label: 'MLXHubとは', anchor: 'what-is-mlxhub' },
      { label: '始め方', anchor: 'how-to-get-started' },
      { label: '機能', anchor: 'features' },
      { label: 'LANサーバーと分散推論', anchor: 'lan-and-distributed' },
      { label: '必要な端末要件', anchor: 'requirements' },
      { label: '料金とプライバシー', anchor: 'privacy' },
      { label: 'トレードオフ:メリットと制約', anchor: 'tradeoffs' },
      { label: 'MLXHub 対 代替アプリ', anchor: 'vs-alternatives' },
      { label: 'MLXHubを使うべき人', anchor: 'who-should-use' },
      { label: 'MLXHubを使うべきでない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '開発者Juan Colilla氏によるMLXHubは、AppleのMLXフレームワークでオープンモデルをオフライン実行し、ネットワークへ提供でき、1つのモデルを複数の端末に分割することもできる、フリーミアムのiPhoneとiPad向けアプリである。',
          },
          {
            type: 'plain-terms',
            text: 'ポケットに入るモデル実行環境と考えてください。モデルをダウンロードしたあとはインターネットなしでチャットでき、同じ端末が、自宅の他のアプリ向けの小さなプライベートAIサーバーにもなります。',
          },
        ],
        items: [
          'レビュー対象のバージョン:2.2.0。[App Storeの掲載情報](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144)に記載のとおり。',
          '価格:ダウンロードは無料。MLXHub Plusは月額$6.99、年額$44.99、買い切り$229.99と記載されている。',
          'プラットフォーム:iOSとiPadOSの26.0以降。公式サイトはApple siliconとRAM 6 GB以上を求めている。',
          '主な機能:LANサーバー、複数端末でのモデル分割、ツールとスキル、Hugging Faceのミラー。',
          'オープン性:クローズドソース。公開リポジトリは見つからなかった。',
        ],
      },
      getItMlxhub: {
        id: 'get-it',
        title: 'MLXHubを入手する',
        content: [
          '**MLXHubはApple App Storeで配布されています。** ダウンロードサイズは73 MBで、アプリはダウンロード無料、アプリ内課金ありです。',
          '本レビューは、PromptQuorumの[ローカルLLMソフトウェアディレクトリ](/ja/power-local-llm/local-llm-software-directory)を補完するものです。このディレクトリはMLXHubを他のモバイルやデスクトップのローカルAIツールと並べて掲載しています。',
        ],
        columns: ['入手経路', '入手方法'],
        rows: [
          {
            '入手経路': 'Apple App Store',
            '入手方法': '[App StoreのMLXHub: Local AI & LLM Server](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144)',
          },
          {
            '入手経路': '公式サイト',
            '入手方法': '[mlxhub.app](https://mlxhub.app)',
          },
          {
            '入手経路': 'プライバシーポリシー',
            '入手方法': '[MLXHubのプライバシーポリシー](https://mlxhub.app/privacy)',
          },
        ],
        note: '公開されているソースリポジトリは見つかりませんでした。Android版はなく、掲載情報の対象はAppleのプラットフォームのみです。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'MLXHubの概要',
        columns: ['項目', 'MLXHub'],
        rows: [
          { '項目': 'プラットフォーム', 'MLXHub': 'iOS、iPadOS(26.0以降)' },
          { '項目': '価格', 'MLXHub': '無料、アプリ内課金あり' },
          { '項目': 'ライセンス', 'MLXHub': 'クローズドソース' },
          { '項目': '完全オフラインで動作', 'MLXHub': '可、モデルのダウンロード後' },
          { '項目': 'アプリ内モデルダウンロード', 'MLXHub': '可、Hugging Faceから' },
          { '項目': '画像入力', 'MLXHub': '可、ビジョン言語モデル' },
          { '項目': 'ローカルAPIサーバー', 'MLXHub': '可、LAN上のOpenAI互換' },
          { '項目': '音声入力/出力', 'MLXHub': '掲載情報に記載なし' },
        ],
        note: '各項目は、ローカルLLMソフトウェアディレクトリで使われているモバイルチャットの比較基準に沿っています。内容はApp Storeの掲載情報と公式サイトに基づいており、すべての機能が網羅されているわけではありません。',
      },
      whatIsMlxhub: {
        id: 'what-is-mlxhub',
        title: 'MLXHubとは',
        content: [
          '**MLXHubはモデル実行環境が第一で、チャットクライアントは第二の役割です。** 掲載情報(英語)は「private offline chat & tools」(プライベートなオフラインチャットとツール)をうたい、「run supported larger models and serve chat and embeddings across your local network」(対応する大きなモデルを実行し、ローカルネットワーク全体にチャットと埋め込みを提供する)ことができると説明しています。いずれも英語の掲載文の引用で、日本語訳は参考訳です。公式サイトによれば、Apple siliconのためのAppleのMLXフレームワークであるmlx-swiftの上に、Swiftでネイティブに構築されています。',
          '公開者はJuan Colilla氏で、著作権表示は「DreamFoundries EU」です。同じ名前を持つ、別の開発者によるmacOS専用の別アプリ[mlxhub.ai](https://mlxhub.ai/)と混同しないでください。',
          '本レビューはApp Storeの掲載情報と公式サイトのみに基づいています。実機テストは含まれていないため、速度、安定性、回答品質は評価していません。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '始め方',
        content: [
          '**セットアップは、App Storeからのインストールに続けて、Hugging Faceからのモデルのダウンロードという流れです。** 掲載情報には初回起動時の流れが記載されていないため、以下の手順は掲載情報とサイトに記載されている内容に沿っています。',
        ],
        numberedItems: [
          {
            title: '端末とOSを確認する',
            whyItMatters: '掲載情報ではiOSまたはiPadOS 26.0以降が必要で、公式サイトはRAM 6 GB以上のApple silicon搭載端末を求めています。',
          },
          {
            title: 'MLXHubをインストールする',
            whyItMatters: '[App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144)から入手します。ダウンロードサイズは73 MBです。',
          },
          {
            title: 'モデルをダウンロードする',
            whyItMatters: 'アプリ内のHugging Faceカタログからオープンモデルを選びます。アプリは端末に載るかどうかを示しますが、Hugging Faceのメタデータが一貫していないことがあります。',
          },
          {
            title: 'チャットを使い、必要ならLANサーバーをオンにする',
            whyItMatters: 'モデルをダウンロードしたあとは、接続なしでチャットできます。LANサーバーは任意で、同じWi-Fi上の他のアプリが読み込み済みのモデルを使えるようになります。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**MLXHubの売りは、モデル実行環境の周りの守備範囲の広さです。** 以下はすべて、App Storeの掲載情報と公式サイトに基づいています。',
        ],
        items: [
          '**モデル。** Hugging Faceからオープンなテキストモデルとビジョン言語モデルをダウンロードする。掲載情報にはQwen3.6 35B-A3B、Bonsai 2 27B、Gemmaのモデルが挙げられている。テキストのみのチャットでは、メモリ節約のため必要なときだけビジョン用のコンポーネントを読み込む。',
          '**メモリとスキル。** メモリ機能が会話から事実を保持し、再利用できるカスタムスキルを作成できる。',
          '**ネイティブツール。** あらかじめ定義されたツールが、カレンダー、リマインダー、ヘルスケア、写真、ミュージックライブラリなどのAppleのフレームワークにアクセスする。各ツールで何ができるかは、掲載情報に詳細がない。',
          '**速度と適合性。** KVキャッシュでマルチターンのチャットが高速になり、RAMストレステストで、モデルを読み込む前に端末のメモリの余裕をベンチマークできる。',
          '**モデルの切り替えとミラー。** 会話の途中でテキストモデルとビジョンモデルを切り替えられ、Hugging Faceがブロックされている場合はコミュニティのHugging Faceミラーを使える。',
          '**大きなモデルのストリーミング。** 掲載情報は、Qwen3.6 35B-A3Bのような大きなモデル向けのNANDエキスパートストリーミングに触れているが、詳細は記載していない。',
          '**言語。** インターフェースは英語に加えて11の言語で利用できる。',
        ],
      },
      lanAndDistributed: {
        id: 'lan-and-distributed',
        title: 'LANサーバーと分散推論',
        content: [
          '**LANサーバーは、端末を小さなOpenAI互換のエンドポイントにします。** 掲載情報には/v1/chat/completionsと/v1/embeddingsのルートが挙げられています。公式サイトによれば、同じWi-Fi上の誰でもブラウザで開いて読み込み済みのモデルと会話できる軽量なチャットページも提供し、ローカルのインターフェースにのみバインドされ、ポート転送は行いません。',
          '**分散推論は、自分の複数の端末をまとめます。** 1台がホストになり、他の端末が参加して、それぞれがモデルのレイヤーの一部を受け持つため、どの端末単体でも載らないモデルを読み込めます。サイトによれば、端末はペアリングされ、通信は暗号化され、ネットワークの外には何も出ません。Wi-Fi経由のスループットは公開されていないため、モデルが載る1台の端末より遅くなると考えてください。',
        ],
      },
      requirements: {
        id: 'requirements',
        title: '必要な端末要件',
        content: [
          '**MLXHubには、iOSまたはiPadOS 26.0以降、Apple silicon搭載端末、RAM 6 GB以上が必要です。** 公式サイトはA17 ProまたはM1以降のチップを推奨しています。App Storeの掲載情報には、同じアプリがmacOS 26.0(Apple M1以降)とvisionOS 26.0でも利用可能と表示されていますが、別のデスクトップ版についての説明はありません。',
          '実際の限界はRAMです。Appleはアプリのメモリ上限をiPhoneの方がiPadより厳しく設定しているため、大きなモデルはiPadの方が載りやすくなります。サイトは、載らないモデルでもダウンロードできてしまうことがあり、iOSがアプリを終了させる前にアプリが読み込みを止めようとするが、保証はないと警告しています。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '料金とプライバシー',
        content: [
          '**MLXHubはダウンロード無料で、MLXHub Plusは月額$6.99、年額$44.99、買い切り$229.99と記載されています。** 掲載情報にもサイトにも、Plusでどの機能が使えるようになるかは記載がないため、機能を当てにする前にアプリ内の課金画面を確認してください。モデルはHugging Faceから無料でダウンロードでき、トークン単位の料金はありません。',
          '公式サイトによれば、推論は完全に端末上で行われ、アカウントはなく、身元を特定するものは何もありません。またバージョン2.0.0以降、アプリは匿名の分析データと診断データを送信し、利用する機能、端末の種類、モデルが読み込まれたかどうかが含まれ、設定でオフにできると記されています。',
          'アプリはクローズドソースであり、本レビューではネットワーク通信を検査していないため、プライバシーに関する記述は開発者自身によるものです。LANサーバーを有効にした場合、そこを流れるデータのプライバシーはWi-Fiネットワークの安全性次第です。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ:メリットと制約',
        columns: ['メリット', '実際の利用での意味', '制約・注意点'],
        rows: [
          {
            'メリット': 'オフラインのMLX推論',
            '実際の利用での意味': '接続なしで、Apple自身のフレームワークを使ってオープンモデルとチャットできる。',
            '制約・注意点': 'iOS 26とRAM 6 GBが必要。iPhoneのメモリ上限がモデルサイズを制限する。',
          },
          {
            'メリット': 'LANサーバー',
            '実際の利用での意味': '同じWi-Fi上の他のアプリやブラウザが、読み込み済みのモデルを使える。',
            '制約・注意点': '端末をスリープさせず、ネットワークに接続したままにする必要がある。スループットの数値は公開されていない。',
          },
          {
            'メリット': '複数端末での分割',
            '実際の利用での意味': '自分のどの端末にも載らないモデルを読み込める。',
            '制約・注意点': 'Wi-Fi経由の速度は記載がなく、互換性のある端末が複数必要。',
          },
          {
            'メリット': 'ツール、メモリ、スキル',
            '実際の利用での意味': 'チャットからカレンダー、リマインダー、ヘルスケアにアクセスできる。',
            '制約・注意点': '各ツールで何ができるかは、掲載情報に詳細がない。',
          },
          {
            'メリット': '無料で始められる',
            '実際の利用での意味': 'トークン単位の料金はなく、モデルはHugging Faceから無料で入手できる。',
            '制約・注意点': 'Plusは買い切りで最大$229.99。何が使えるようになるかは記載がない。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'MLXHub 対 代替アプリ',
        columns: ['アプリ', 'プラットフォーム', '価格とライセンス', 'モデルの接続元', '主な違い'],
        rows: [
          {
            'アプリ': 'MLXHub',
            'プラットフォーム': 'iOS、iPadOS',
            '価格とライセンス': 'フリーミアム、クローズドソース',
            'モデルの接続元': 'Hugging Face(MLX)',
            '主な違い': 'LANサーバーと複数端末でのモデル分割に対応。オープンソースではない',
          },
          {
            'アプリ': '[Locally AI](/ja/power-local-llm/locally-ai-review)',
            'プラットフォーム': 'iOS、Mac',
            '価格とライセンス': 'フリーミアム、クローズドソース',
            'モデルの接続元': 'アプリ内のモデルカタログ',
            '主な違い': 'よりシンプルなオンデバイスチャット。LANサーバーの記載なし',
          },
          {
            'アプリ': '[Private Mind](/ja/power-local-llm/private-mind-review)',
            'プラットフォーム': 'iOS、Android',
            '価格とライセンス': '無料、MIT',
            'モデルの接続元': 'Hugging Faceからのダウンロード',
            '主な違い': 'オープンソースでAndroidにも対応。LANサーバーの記載なし',
          },
          {
            'アプリ': '[Oscilla](/ja/power-local-llm/oscilla-review)',
            'プラットフォーム': 'iOS',
            '価格とライセンス': '無料、クローズドソース',
            'モデルの接続元': 'アプリ内の40以上のモデル',
            '主な違い': 'より大きな固定カタログ。ランタイムは明記されていない',
          },
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            'プラットフォーム': 'iOS、Android',
            '価格とライセンス': '無料、MIT',
            'モデルの接続元': 'GGUFモデル',
            '主な違い': 'オープンソースでllama.cppベース、クロスプラットフォーム',
          },
        ],
        note: 'サードパーティアプリのプラットフォーム、価格、機能の詳細は頻繁に変更されます。決定前に各アプリ自体の掲載情報で現在の詳細を確認してください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'MLXHubを使うべき人',
        items: [
          '**端末が載せられる最大級のモデルを使いたいiPadや最近のiPhoneのユーザー。** MLX、ストリーミング、端末のプールはいずれもその限界を狙ったものです。',
          '**ポケットサイズのAIサーバーを試したい人。** OpenAI互換のLANエンドポイントにより、ネットワーク上のスクリプトや他のアプリが端末を利用できます。',
          '**複数のApple端末を持っている人。** 複数端末での分割は、多くの代替アプリが記載していない機能です。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'MLXHubを使うべきでない人',
        items: [
          '**オープンソースが必須の人。** コードは公開されていません。[Private Mind](/ja/power-local-llm/private-mind-review)と[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)はオープンソースです。',
          '**Androidユーザー。** 記載されているのはAppleのプラットフォームだけです。PocketPal AIとPrivate MindはどちらもAndroidで動作します。',
          '**iOS 26未満、またはRAMが6 GB未満の端末。** 掲載情報とサイトがその下限を定めています。',
          '**有料プランの機能一覧が明記されていてほしい人。** MLXHub Plusで何が使えるようになるかは記載がありません。まず無料版を試してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'MLXHubは無料ですか?',
            a: 'ダウンロードは無料で、App Storeの掲載情報のとおり、アプリ内課金としてMLXHub Plusが月額$6.99、年額$44.99、買い切り$229.99で提供されています。',
          },
          {
            q: 'MLXHubを開発しているのは誰ですか?',
            a: 'Juan Colilla氏で、著作権表示は「DreamFoundries EU」です。mlxhub.aiのアプリは、macOS専用の別の製品です。',
          },
          {
            q: 'MLXHubはチャットをどこかに送信しますか?',
            a: 'サイトによれば、推論は完全に端末上で行われます。バージョン2.0.0以降、匿名の利用状況データと診断データが送信されますが、設定でオフにできます。',
          },
          {
            q: 'MLXHubはAndroidで動作しますか?',
            a: 'いいえ。掲載情報が対象としているのは、iPhone、iPad、そしてストアの表示によればApple M1搭載MacとApple Vision Proでの互換性のみです。',
          },
          {
            q: 'どのモデルを実行できますか?',
            a: 'Hugging Faceにある、MLX形式のオープンなテキストモデルとビジョンモデルです。掲載情報にはQwen3.6 35B-A3B、Bonsai 2 27B、Gemmaのモデルが挙げられています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '最近のiPadやiPhoneをお持ちで、オフラインのMLXチャットに加えて、端末をローカルのエンドポイントとして使う、あるいは複数の端末をまとめてより大きなモデルを動かすという選択肢がほしい人には、書面上はよく合っています。',
          '懸念は透明性と歴史の浅さです。クローズドソースで、Plusの機能は記載がなく、複数端末分割時の速度も公開されておらず、レビュー時点で掲載情報の評価は7件しかありませんでした。',
          'オープンソースを求めるなら、[Private Mind](/ja/power-local-llm/private-mind-review)から始めてください。LANサーバーや複数端末での分割を使いたいなら、まずMLXHubの無料版を試してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[App StoreのMLXHub: Local AI & LLM Server](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144) — バージョン、価格、要件、機能、開発者。',
          '[MLXHub公式サイト](https://mlxhub.app) — 機能の説明、端末要件、分析データに関する記述を含むFAQ。',
          '[MLXHubのプライバシーポリシー](https://mlxhub.app/privacy) — 公式サイトからリンクされているポリシーのページ。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Locally AIレビュー](/ja/power-local-llm/locally-ai-review) — iPhone、iPad、Mac向けのフリーミアムのオンデバイスアプリ。',
          '[Private Mindレビュー](/ja/power-local-llm/private-mind-review) — iPhoneとAndroid向けのオープンソースのオフラインチャットアプリ。',
          '[Oscillaレビュー](/ja/power-local-llm/oscilla-review) — オンデバイスモデルの固定カタログを備えたiOSアプリ。',
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOSとAndroid向けのオープンソースのオンデバイスチャット。',
          '[mlx-serveレビュー](/ja/power-local-llm/mlx-serve-review) — Apple silicon搭載Mac向けのネイティブ推論サーバー。',
          '[完全なローカルLLMソフトウェアディレクトリ](/ja/power-local-llm/local-llm-software-directory) — プラットフォームを横断するローカルLLMツールのより広範なディレクトリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-05',
    dateModified: '2026-10-05',
    next_refresh_due: '2027-04-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/mlxhub-review-hero-zh.webp',
    title: 'MLXHub评测：适用于iPhone和iPad的设备端MLX聊天与局域网服务器',
    seoTitle: 'MLXHub评测：iPhone设备端MLX聊天与局域网服务器',
    intro:
      'MLXHub是一款iPhone和iPad应用，利用苹果的MLX框架在设备上运行开源模型，可以向您网络中的其他应用提供服务，还能把一个大模型拆分到您自己的多台设备上运行。本评测介绍它的App Store页面和官方网站记载了什么、哪些地方不明确，以及它与其他iOS本地AI应用的对比。',
    metaDescription:
      'MLXHub评测：支持设备端MLX模型、兼容OpenAI的局域网服务器和多设备模型拆分的iPhone和iPad应用。定价、iOS 26与内存要求、隐私、局限。',
    twitterDescription:
      'MLXHub评测：免费增值的iOS/iPadOS应用，离线运行MLX模型，通过局域网提供服务，并可跨设备拆分大模型。设备要求、定价、隐私、局限。',
    audience:
      '想在iPhone或iPad上离线运行开源模型，并可选择把设备用作本地OpenAI兼容端点的用户——涵盖功能、设备要求、定价、隐私、局限和替代方案。',
    readTime: '8分钟阅读',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'MLXHub评测',
    targetKeywords: [
      'mlxhub评测',
      'mlxhub iOS应用',
      'mlx iPhone大模型应用',
      'iPhone离线运行大模型',
      'iPhone OpenAI兼容服务器',
      'iPhone iPad分布式推理',
      'mlx swift应用',
      'iPad本地AI应用',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'A17 Pro', 'M1'],
    leadAnswerBlock:
      '**MLXHub是一款免费增值、闭源的iOS和iPadOS应用，可在Apple silicon上离线运行开源语言模型和视觉模型，能在您的Wi-Fi上作为兼容OpenAI的服务器对外提供服务，还能把您的多台设备组合起来，加载任何单台设备都装不下的模型。** 据其App Store页面，它需要iOS或iPadOS 26.0或更高版本，下载免费，MLXHub Plus以应用内购买的方式销售。本评测对应版本2.2.0，依据公开的应用页面和官方网站撰写，并未实际测试。',
    quickAnswerTop: {
      zh: {
        question: '想在iPhone或iPad上使用本地AI，MLXHub值得安装吗？',
        answer:
          '如果您有运行iOS 26、内存至少6 GB的Apple silicon版iPhone或iPad，并且想要离线聊天，外加局域网端点或多设备模型拆分，那么值得。如果您需要开源、Android版本，或一份明确的免费功能清单，则可以跳过：代码并未公开，页面也没有说明MLXHub Plus解锁了什么。Locally AI和Private Mind是更简单的设备端替代方案。',
        bullets: [
          '免费下载，含应用内购买：Plus为每月$6.99、每年$44.99，或$229.99买断。',
          '通过mlx-swift在设备上运行开源文本和视觉模型；模型来自Hugging Face。',
          '可选的局域网服务器，提供OpenAI风格的/v1/chat/completions和/v1/embeddings路由。',
          '分布式推理可把一个模型拆分到同一网络中您自己配对的设备上。',
          '需要Apple silicon设备上的iOS或iPadOS 26.0或更高版本，内存6 GB或以上。',
        ],
        updatedDate: '2026-10-05',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: '获取MLXHub', anchor: 'get-it' },
      { label: 'MLXHub概览', anchor: 'at-a-glance' },
      { label: 'MLXHub是什么', anchor: 'what-is-mlxhub' },
      { label: '如何开始使用', anchor: 'how-to-get-started' },
      { label: '功能', anchor: 'features' },
      { label: '局域网服务器与分布式推理', anchor: 'lan-and-distributed' },
      { label: '设备要求', anchor: 'requirements' },
      { label: '定价与隐私', anchor: 'privacy' },
      { label: '权衡：优点与局限', anchor: 'tradeoffs' },
      { label: 'MLXHub与替代方案对比', anchor: 'vs-alternatives' },
      { label: '谁适合使用MLXHub', anchor: 'who-should-use' },
      { label: '谁不适合使用MLXHub', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '要点速览',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MLXHub由开发者Juan Colilla打造，是一款免费增值的iPhone和iPad应用，基于苹果的MLX框架离线运行开源模型，可向您的网络提供服务，并能把一个模型拆分到您的多台设备上。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作装在口袋里的模型运行器：模型下载完成后，聊天无需联网；同一台设备还能充当小型私有AI服务器，供家中的其他应用使用。',
          },
        ],
        items: [
          '评测版本：2.2.0，见[App Store页面](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144)。',
          '价格：免费下载；MLXHub Plus列为每月$6.99、每年$44.99和$229.99买断。',
          '平台：iOS和iPadOS 26.0或更高版本；官方网站要求Apple silicon和6 GB或以上内存。',
          '突出功能：局域网服务器、多设备模型拆分、工具与技能、Hugging Face镜像。',
          '开放性：闭源；没有找到公开的代码仓库。',
        ],
      },
      getItMlxhub: {
        id: 'get-it',
        title: '获取MLXHub',
        content: [
          '**MLXHub通过Apple App Store发布。** 下载大小为73 MB，应用免费下载，含应用内购买。',
          '本评测是PromptQuorum[本地LLM软件目录](/zh/power-local-llm/local-llm-software-directory)的配套文章，该目录将MLXHub与其他移动端和桌面端本地AI工具一并列出。',
        ],
        columns: ['渠道', '获取方式'],
        rows: [
          {
            '渠道': 'Apple App Store',
            '获取方式': '[App Store上的MLXHub: Local AI & LLM Server](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144)',
          },
          {
            '渠道': '官方网站',
            '获取方式': '[mlxhub.app](https://mlxhub.app)',
          },
          {
            '渠道': '隐私政策',
            '获取方式': '[MLXHub隐私政策](https://mlxhub.app/privacy)',
          },
        ],
        note: '没有找到公开的源代码仓库。没有Android版本；应用页面只涵盖Apple平台。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'MLXHub概览',
        columns: ['属性', 'MLXHub'],
        rows: [
          { '属性': '平台', 'MLXHub': 'iOS、iPadOS（26.0+）' },
          { '属性': '价格', 'MLXHub': '免费，含应用内购买' },
          { '属性': '许可证', 'MLXHub': '闭源' },
          { '属性': '完全离线运行', 'MLXHub': '是，模型下载完成后' },
          { '属性': '应用内下载模型', 'MLXHub': '是，来自Hugging Face' },
          { '属性': '图像输入', 'MLXHub': '是，视觉语言模型' },
          { '属性': '本地API服务器', 'MLXHub': '是，局域网内兼容OpenAI' },
          { '属性': '语音输入/输出', 'MLXHub': '应用页面未说明' },
        ],
        note: '各属性沿用本地LLM软件目录中使用的移动端聊天对比项。它们来自App Store页面和官方网站，而这些来源并未涵盖所有功能。',
      },
      whatIsMlxhub: {
        id: 'what-is-mlxhub',
        title: 'MLXHub是什么',
        content: [
          '**MLXHub首先是设备端模型运行器，其次才是聊天客户端。** 应用页面的宣传语是英文原文“private offline chat & tools”（私密离线聊天与工具），并称可让您“run supported larger models and serve chat and embeddings across your local network”（运行受支持的较大模型，并在本地网络中提供聊天和嵌入服务）。以上两句均引自英文页面。官方网站称它以Swift原生构建，基于mlx-swift，即苹果面向Apple silicon的MLX框架。',
          '它由Juan Colilla发布，版权声明为“DreamFoundries EU”。请不要把它与[mlxhub.ai](https://mlxhub.ai/)混淆，后者是另一位开发者推出的仅限macOS的应用，只是名称相同。',
          '本评测仅依据App Store页面和官方网站撰写，不包含实际测试，因此这里不对速度、稳定性和回答质量进行评价。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '如何开始使用',
        content: [
          '**设置过程就是先从App Store安装，再从Hugging Face下载模型。** 应用页面没有记载首次运行的流程，因此以下步骤依据页面和网站所述内容整理。',
        ],
        numberedItems: [
          {
            title: '确认设备和系统版本',
            whyItMatters: '应用页面要求iOS或iPadOS 26.0或更高版本，官方网站要求Apple silicon设备且内存6 GB或以上。',
          },
          {
            title: '安装MLXHub',
            whyItMatters: '可从[App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144)获取；下载大小为73 MB。',
          },
          {
            title: '下载模型',
            whyItMatters: '从应用内的Hugging Face目录中选择一个开源模型。应用会提示它是否装得下，但Hugging Face的元数据有时并不一致。',
          },
          {
            title: '开始聊天，再按需开启局域网服务器',
            whyItMatters: '模型下载完成后，聊天无需联网。局域网服务器是可选的，可让您Wi-Fi上的其他应用使用已加载的模型。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**MLXHub的卖点是围绕模型运行器提供了广泛的配套功能。** 以下内容均来自App Store页面和官方网站。',
        ],
        items: [
          '**模型。** 从Hugging Face下载开源文本模型和视觉语言模型；页面点名了Qwen3.6 35B-A3B、Bonsai 2 27B和Gemma系列模型。纯文本聊天只在需要时才加载视觉组件，以节省内存。',
          '**记忆与技能。** 记忆系统会保存对话中的事实，您还可以创建可复用的自定义技能。',
          '**原生工具。** 预置工具可调用日历、提醒事项、健康、照片和音乐资料库等Apple框架；页面没有说明每个工具具体能做什么。',
          '**速度与适配。** KV缓存可加快多轮聊天，加载模型之前，内存压力测试会评估您设备的内存余量。',
          '**模型切换与镜像。** 可在对话中途在文本模型和视觉模型之间切换；当Hugging Face无法访问时，可使用社区提供的Hugging Face镜像。',
          '**大模型流式加载。** 页面提到了面向Qwen3.6 35B-A3B等较大模型的NAND专家流式加载，但没有给出更多细节。',
          '**语言。** 界面提供英语以及另外11种语言。',
        ],
      },
      lanAndDistributed: {
        id: 'lan-and-distributed',
        title: '局域网服务器与分布式推理',
        content: [
          '**局域网服务器可把您的设备变成一个小型的OpenAI兼容端点。** 页面点名了/v1/chat/completions和/v1/embeddings路由。据官方网站所述，它还提供一个轻量的聊天网页，同一Wi-Fi下的任何人都可以在浏览器中打开并与已加载的模型对话；它只绑定本地接口，不做端口转发。',
          '**分布式推理可把您自己的多台设备组合在一起。** 一台设备作为主机，其他设备加入，各自承担模型的一部分层，因此单台设备都装不下的模型也能加载。网站称设备之间需要配对且流量经过加密，数据不会离开该网络。Wi-Fi下的吞吐量没有公布，因此请预期它会比一台能完整装下该模型的单设备更慢。',
        ],
      },
      requirements: {
        id: 'requirements',
        title: '设备要求',
        content: [
          '**MLXHub需要iOS或iPadOS 26.0或更高版本、Apple silicon设备以及6 GB或以上内存。** 官方网站建议使用A17 Pro或M1及更新的芯片。App Store页面还显示同一应用提供macOS 26.0（Apple M1或更新芯片）和visionOS 26.0版本，但没有描述单独的桌面版。',
          '内存才是真正的上限。苹果对iPhone上应用的内存限制比iPad更严格，因此较大的模型在iPad上更常能装下。网站警告说，装不下的模型有时仍可能被下载下来，应用会在iOS强制关闭应用之前设法阻止其加载，但不作保证。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '定价与隐私',
        content: [
          '**MLXHub免费下载，MLXHub Plus列为每月$6.99、每年$44.99和$229.99买断。** 应用页面和网站都没有说明Plus解锁了哪些功能，因此在依赖某项功能之前，请先在应用内查看付费墙。模型从Hugging Face免费下载，没有按token计费。',
          '官方网站称推理完全在设备上进行，没有账号，也没有任何能识别您身份的信息。它同时说明，自2.0.0版本起，应用会发送匿名的分析和诊断数据，内容涵盖您使用了哪些功能、设备类别以及模型是否加载成功，您可以在“设置”中将其关闭。',
          '该应用是闭源的，本评测没有检查网络流量，因此隐私方面的说法来自开发者自己。如果您启用局域网服务器，其中数据的私密程度取决于您的Wi-Fi网络。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '权衡：优点与局限',
        columns: ['优点', '实际使用中的意义', '局限/注意事项'],
        rows: [
          {
            '优点': '离线MLX推理',
            '实际使用中的意义': '无需联网，借助苹果自家框架与开源模型聊天。',
            '局限/注意事项': '需要iOS 26和6 GB内存；iPhone的内存限制决定了模型大小上限。',
          },
          {
            '优点': '局域网服务器',
            '实际使用中的意义': 'Wi-Fi上的其他应用和浏览器可使用已加载的模型。',
            '局限/注意事项': '设备必须保持唤醒并在线；没有公布吞吐量数据。',
          },
          {
            '优点': '多设备拆分',
            '实际使用中的意义': '加载您任何单台设备都装不下的模型。',
            '局限/注意事项': 'Wi-Fi下的速度没有记载，且需要多台兼容设备。',
          },
          {
            '优点': '工具、记忆和技能',
            '实际使用中的意义': '在聊天中调用日历、提醒事项和健康。',
            '局限/注意事项': '页面没有说明每个工具具体能做什么。',
          },
          {
            '优点': '可免费开始',
            '实际使用中的意义': '没有按token计费；模型可从Hugging Face免费获取。',
            '局限/注意事项': 'Plus买断最高$229.99，且没有说明它解锁了什么。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'MLXHub与替代方案对比',
        columns: ['应用', '平台', '价格与许可证', '模型来源', '主要区别'],
        rows: [
          {
            '应用': 'MLXHub',
            '平台': 'iOS、iPadOS',
            '价格与许可证': '免费增值，闭源',
            '模型来源': 'Hugging Face（MLX）',
            '主要区别': '局域网服务器和多设备模型拆分；不是开源',
          },
          {
            '应用': '[Locally AI](/zh/power-local-llm/locally-ai-review)',
            '平台': 'iOS、Mac',
            '价格与许可证': '免费增值，闭源',
            '模型来源': '应用内模型目录',
            '主要区别': '设备端聊天更简单；未列出局域网服务器',
          },
          {
            '应用': '[Private Mind](/zh/power-local-llm/private-mind-review)',
            '平台': 'iOS、Android',
            '价格与许可证': '免费，MIT',
            '模型来源': 'Hugging Face下载',
            '主要区别': '开源，也支持Android；未列出局域网服务器',
          },
          {
            '应用': '[Oscilla](/zh/power-local-llm/oscilla-review)',
            '平台': 'iOS',
            '价格与许可证': '免费，闭源',
            '模型来源': '40多个应用内模型',
            '主要区别': '固定目录更大；未说明所用运行时',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iOS、Android',
            '价格与许可证': '免费，MIT',
            '模型来源': 'GGUF模型',
            '主要区别': '开源，基于llama.cpp，跨平台',
          },
        ],
        note: '第三方应用的平台、价格和功能细节经常变化。做决定前，请在各应用自己的页面上核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁适合使用MLXHub',
        items: [
          '**希望运行设备所能容纳的最大模型的iPad和较新iPhone用户。** MLX、流式加载和设备组合针对的都是这一上限。',
          '**想要一台口袋AI服务器的折腾爱好者。** 兼容OpenAI的局域网端点可让您网络中的脚本和其他应用使用这台设备。',
          '**拥有多台Apple设备的用户。** 多设备拆分是大多数替代方案没有列出的功能。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不适合使用MLXHub',
        items: [
          '**需要开源的用户。** 代码并未公开；[Private Mind](/zh/power-local-llm/private-mind-review)和[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)都是开源的。',
          '**Android用户。** 只列出了Apple平台；PocketPal AI和Private Mind都支持Android。',
          '**系统低于iOS 26或内存不足6 GB的设备。** 应用页面和网站设定了这些门槛。',
          '**想要付费版明确功能清单的用户。** MLXHub Plus解锁了什么没有记载；请先试用免费版。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'MLXHub免费吗？',
            a: '可免费下载，含应用内购买：MLXHub Plus为每月$6.99、每年$44.99，或$229.99买断，见App Store页面。',
          },
          {
            q: 'MLXHub是谁开发的？',
            a: 'Juan Colilla，版权声明为“DreamFoundries EU”。mlxhub.ai应用是另一款仅限macOS的不同产品。',
          },
          {
            q: 'MLXHub会把我的聊天内容发送到别处吗？',
            a: '网站称推理完全在设备上进行。自2.0.0版本起会发送匿名的使用和诊断数据，可在“设置”中关闭。',
          },
          {
            q: 'MLXHub能在Android上使用吗？',
            a: '不能。应用页面只涵盖iPhone、iPad，以及商店中标注的搭载Apple M1的Mac和Apple Vision Pro兼容性。',
          },
          {
            q: '我可以运行哪些模型？',
            a: '来自Hugging Face的开源MLX格式文本模型和视觉模型。页面点名了Qwen3.6 35B-A3B、Bonsai 2 27B和Gemma系列模型。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '从纸面上看，对于拥有较新iPad或iPhone、想要离线MLX聊天，并希望可以把设备用作本地端点，或组合多台设备来运行更大模型的用户，MLXHub很合适。',
          '需要注意的是透明度和成熟度：它是闭源的，Plus功能没有记载，多设备拆分的速度没有公布，评测时应用页面只有七条评分。',
          '如果您想要开源方案，请先从[Private Mind](/zh/power-local-llm/private-mind-review)开始。如果您想要局域网服务器或多设备拆分，可以先试用MLXHub的免费版。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[App Store上的MLXHub: Local AI & LLM Server](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144) — 版本、价格、要求、功能和开发者。',
          '[MLXHub官方网站](https://mlxhub.app) — 功能说明、设备要求和常见问题，包括关于分析数据的说明。',
          '[MLXHub隐私政策](https://mlxhub.app/privacy) — 官方网站链接的政策页面。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Locally AI评测](/zh/power-local-llm/locally-ai-review) — 适用于iPhone、iPad和Mac的免费增值设备端应用。',
          '[Private Mind评测](/zh/power-local-llm/private-mind-review) — 适用于iPhone和Android的开源离线聊天应用。',
          '[Oscilla评测](/zh/power-local-llm/oscilla-review) — 内置固定设备端模型目录的iOS应用。',
          '[PocketPal AI评测](/zh/power-local-llm/pocketpal-ai-review) — 适用于iOS和Android的开源设备端聊天应用。',
          '[mlx-serve评测](/zh/power-local-llm/mlx-serve-review) — 适用于Apple silicon Mac的原生推理服务器。',
          '[完整本地LLM软件目录](/zh/power-local-llm/local-llm-software-directory) — 涵盖多平台本地LLM工具的更全面目录。',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-05',
    dateModified: '2026-10-05',
    next_refresh_due: '2027-04-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/mlxhub-review-hero-es.webp',
    title: 'Reseña de MLXHub: chat MLX en el dispositivo y servidor LAN para iPhone y iPad',
    seoTitle: 'Reseña de MLXHub: chat MLX y servidor LAN para iPhone y iPad',
    intro:
      'MLXHub es una app para iPhone y iPad que ejecuta modelos abiertos en el propio dispositivo con el framework MLX de Apple, puede servirlos a otras apps de tu red y puede repartir un modelo grande entre varios de tus dispositivos. Esta reseña explica qué documentan su ficha de la App Store y su sitio oficial, qué queda poco claro y cómo se compara con otras apps de IA local para iOS.',
    metaDescription:
      'Reseña de MLXHub: app para iPhone y iPad con modelos MLX en el dispositivo, servidor LAN compatible con OpenAI y reparto de modelos entre dispositivos. Precios, requisitos de iOS 26 y RAM, privacidad, límites.',
    twitterDescription:
      'Reseña de MLXHub: una app freemium de iOS/iPadOS que ejecuta modelos MLX sin conexión, los sirve por tu LAN y reparte modelos grandes entre dispositivos. Requisitos, precios, privacidad, límites.',
    audience:
      'Usuarios de iPhone y iPad que quieren ejecutar modelos abiertos sin conexión y, opcionalmente, usar el dispositivo como endpoint local compatible con OpenAI — cubre funciones, requisitos, precios, privacidad, límites y alternativas.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de MLXHub',
    targetKeywords: [
      'reseña mlxhub',
      'mlxhub app ios',
      'app mlx iphone llm',
      'ejecutar llm en iphone sin conexión',
      'servidor compatible con openai iphone',
      'inferencia distribuida iphone ipad',
      'app mlx swift',
      'app ia local ipad',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'A17 Pro', 'M1'],
    leadAnswerBlock:
      '**MLXHub es una app freemium y de código cerrado para iOS y iPadOS que ejecuta modelos abiertos de lenguaje y visión sin conexión en Apple silicon, puede exponerlos como servidor compatible con OpenAI en tu Wi-Fi y puede combinar varios de tus dispositivos para cargar un modelo que ninguno admite por sí solo.** Según su ficha de la App Store, requiere iOS o iPadOS 26.0 o posterior y se descarga gratis, con MLXHub Plus como compras dentro de la app. Esta reseña cubre la versión 2.2.0 y se basa en la ficha pública y el sitio oficial, no en pruebas prácticas.',
    quickAnswerTop: {
      es: {
        question: '¿Vale la pena instalar MLXHub para IA local en un iPhone o iPad?',
        answer:
          'Sí, si tienes un iPhone o iPad con Apple silicon e iOS 26 y al menos 6 GB de RAM, y quieres chat sin conexión además de un endpoint LAN o reparto de modelos entre dispositivos. Descártala si necesitas código abierto, Android o una lista fija de funciones gratuitas: el código no es público y la ficha no dice qué desbloquea MLXHub Plus. Locally AI y Private Mind son alternativas más sencillas en el dispositivo.',
        bullets: [
          'Descarga gratuita con compras dentro de la app: Plus a $6.99 al mes, $44.99 al año o $229.99 de por vida.',
          'Ejecuta modelos abiertos de texto y visión en el dispositivo con mlx-swift; los modelos vienen de Hugging Face.',
          'Servidor LAN opcional con rutas al estilo OpenAI /v1/chat/completions y /v1/embeddings.',
          'La inferencia distribuida reparte un modelo entre tus propios dispositivos emparejados de la misma red.',
          'Requiere iOS o iPadOS 26.0 o posterior en Apple silicon con 6 GB de RAM o más.',
        ],
        updatedDate: '2026-10-05',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Cómo conseguir MLXHub', anchor: 'get-it' },
      { label: 'MLXHub de un vistazo', anchor: 'at-a-glance' },
      { label: 'Qué es MLXHub', anchor: 'what-is-mlxhub' },
      { label: 'Cómo empezar', anchor: 'how-to-get-started' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Servidor LAN e inferencia distribuida', anchor: 'lan-and-distributed' },
      { label: 'Requisitos del dispositivo', anchor: 'requirements' },
      { label: 'Precios y privacidad', anchor: 'privacy' },
      { label: 'Compensaciones: ventajas frente a limitaciones', anchor: 'tradeoffs' },
      { label: 'MLXHub frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar MLXHub', anchor: 'who-should-use' },
      { label: 'Quién no debería usar MLXHub', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MLXHub, del desarrollador Juan Colilla, es una app freemium para iPhone y iPad que ejecuta modelos abiertos sin conexión con el framework MLX de Apple, los sirve a tu red y puede repartir un modelo entre varios de tus dispositivos.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en ella como un ejecutor de modelos que llevas en el bolsillo: el chat funciona sin internet una vez descargado un modelo, y el mismo dispositivo puede actuar como un pequeño servidor de IA privado para otras apps de casa.',
          },
        ],
        items: [
          'Versión reseñada: 2.2.0, según la [ficha de la App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144).',
          'Precio: descarga gratuita; MLXHub Plus figura a $6.99 al mes, $44.99 al año y $229.99 de por vida.',
          'Plataforma: iOS y iPadOS 26.0 o posterior; el sitio oficial pide Apple silicon y 6 GB de RAM o más.',
          'Funciones destacadas: servidor LAN, reparto de modelos entre dispositivos, herramientas y skills, espejos de Hugging Face.',
          'Apertura: código cerrado; no se encontró ningún repositorio público.',
        ],
      },
      getItMlxhub: {
        id: 'get-it',
        title: 'Cómo conseguir MLXHub',
        content: [
          '**MLXHub se distribuye a través de la App Store de Apple.** La descarga ocupa 73 MB y la app se descarga gratis con compras dentro de la app.',
          'Esta reseña complementa el [directorio de software LLM local](/es/power-local-llm/local-llm-software-directory) de PromptQuorum, que incluye MLXHub junto a otras herramientas de IA local móviles y de escritorio.',
        ],
        columns: ['Canal', 'Cómo conseguirla'],
        rows: [
          {
            'Canal': 'App Store de Apple',
            'Cómo conseguirla': '[MLXHub: Local AI & LLM Server en la App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144)',
          },
          {
            'Canal': 'Sitio oficial',
            'Cómo conseguirla': '[mlxhub.app](https://mlxhub.app)',
          },
          {
            'Canal': 'Política de privacidad',
            'Cómo conseguirla': '[Política de privacidad de MLXHub](https://mlxhub.app/privacy)',
          },
        ],
        note: 'No se encontró ningún repositorio público de código fuente. No hay versión para Android; la ficha cubre solo plataformas de Apple.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'MLXHub de un vistazo',
        columns: ['Atributo', 'MLXHub'],
        rows: [
          { 'Atributo': 'Plataforma', 'MLXHub': 'iOS, iPadOS (26.0+)' },
          { 'Atributo': 'Precio', 'MLXHub': 'Gratis, compras dentro de la app' },
          { 'Atributo': 'Licencia', 'MLXHub': 'Código cerrado' },
          { 'Atributo': 'Funciona totalmente offline', 'MLXHub': 'Sí, tras descargar un modelo' },
          { 'Atributo': 'Descarga de modelos en la app', 'MLXHub': 'Sí, desde Hugging Face' },
          { 'Atributo': 'Entrada de imágenes', 'MLXHub': 'Sí, modelos de visión y lenguaje' },
          { 'Atributo': 'Servidor de API local', 'MLXHub': 'Sí, compatible con OpenAI en tu LAN' },
          { 'Atributo': 'Entrada / salida de voz', 'MLXHub': 'No se indica en la ficha' },
        ],
        note: 'Los atributos siguen la comparación de chats móviles usada en el directorio de software LLM local. Proceden de la ficha de la App Store y del sitio oficial, que no cubren todas las funciones.',
      },
      whatIsMlxhub: {
        id: 'what-is-mlxhub',
        title: 'Qué es MLXHub',
        content: [
          '**MLXHub es primero un ejecutor de modelos en el dispositivo y, en segundo lugar, un cliente de chat.** La ficha lo presenta como «private offline chat & tools» (chat y herramientas privados sin conexión; cita de la ficha en inglés) y dice que permite «run supported larger models and serve chat and embeddings across your local network» (ejecutar modelos grandes compatibles y servir chat y embeddings por tu red local; cita de la ficha en inglés). El sitio oficial indica que está creada de forma nativa en Swift sobre mlx-swift, el framework MLX de Apple para Apple silicon.',
          'La publica Juan Colilla, con la línea de copyright «DreamFoundries EU». No la confundas con [mlxhub.ai](https://mlxhub.ai/), una app distinta solo para macOS, de otro desarrollador, que comparte el nombre.',
          'Esta reseña se basa únicamente en la ficha de la App Store y el sitio oficial. No incluye pruebas prácticas, por lo que aquí no se valoran la velocidad, la estabilidad ni la calidad de las respuestas.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Cómo empezar',
        content: [
          '**La configuración es una instalación desde la App Store y, después, la descarga de un modelo desde Hugging Face.** La ficha no documenta el flujo del primer arranque, así que los pasos siguientes se basan en lo que indican la ficha y el sitio.',
        ],
        numberedItems: [
          {
            title: 'Comprueba el dispositivo y el sistema operativo',
            whyItMatters: 'La ficha exige iOS o iPadOS 26.0 o posterior, y el sitio oficial pide un dispositivo con Apple silicon y 6 GB de RAM o más.',
          },
          {
            title: 'Instala MLXHub',
            whyItMatters: 'Consíguela en la [App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144); la descarga ocupa 73 MB.',
          },
          {
            title: 'Descarga un modelo',
            whyItMatters: 'Elige un modelo abierto del catálogo de Hugging Face de la app. La app indica si cabe, pero los metadatos de Hugging Face a veces son incoherentes.',
          },
          {
            title: 'Chatea y, si quieres, activa el servidor LAN',
            whyItMatters: 'Una vez descargado un modelo, el chat funciona sin conexión. El servidor LAN es opcional y permite que otras apps de tu Wi-Fi usen los modelos cargados.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El punto fuerte de MLXHub es todo lo que rodea al ejecutor de modelos.** Todo lo que sigue procede de la ficha de la App Store y del sitio oficial.',
        ],
        items: [
          '**Modelos.** Descarga modelos abiertos de texto y de visión y lenguaje desde Hugging Face; la ficha nombra Qwen3.6 35B-A3B, Bonsai 2 27B y modelos Gemma. Los chats solo de texto cargan los componentes de visión únicamente cuando hacen falta, para ahorrar memoria.',
          '**Memoria y skills.** Un sistema de memoria conserva datos de las conversaciones, y puedes crear skills personalizadas reutilizables.',
          '**Herramientas nativas.** Herramientas predefinidas acceden a frameworks de Apple como Calendario, Recordatorios, Salud, Fotos y la biblioteca de música; la ficha no da detalles de lo que puede hacer cada herramienta.',
          '**Velocidad y ajuste.** La caché KV acelera los chats de varios turnos, y una prueba de estrés de RAM mide el margen de memoria de tu dispositivo antes de cargar un modelo.',
          '**Cambio de modelo y espejos.** Cambia entre modelos de texto y de visión en plena conversación y usa un espejo comunitario de Hugging Face cuando Hugging Face esté bloqueado.',
          '**Streaming de modelos grandes.** La ficha menciona el streaming de expertos desde NAND para modelos grandes como Qwen3.6 35B-A3B, sin más detalle.',
          '**Idiomas.** La interfaz está disponible en inglés y otros 11 idiomas.',
        ],
      },
      lanAndDistributed: {
        id: 'lan-and-distributed',
        title: 'Servidor LAN e inferencia distribuida',
        content: [
          '**El servidor LAN convierte tu dispositivo en un pequeño endpoint compatible con OpenAI.** La ficha nombra las rutas /v1/chat/completions y /v1/embeddings. Según el sitio oficial, también ofrece una página de chat ligera que cualquiera en el mismo Wi-Fi puede abrir en un navegador para hablar con los modelos cargados, y solo se enlaza a interfaces locales, sin reenvío de puertos.',
          '**La inferencia distribuida combina varios de tus propios dispositivos.** Uno actúa de anfitrión y los demás se unen, cada uno con una parte de las capas del modelo, de modo que puede cargarse un modelo que ninguno admite por sí solo. El sitio indica que los dispositivos se emparejan y el tráfico va cifrado, y que nada sale de la red. No se publica el rendimiento por Wi-Fi, así que cabe esperar que sea más lento que un solo dispositivo al que el modelo le quepa.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos del dispositivo',
        content: [
          '**MLXHub requiere iOS o iPadOS 26.0 o posterior, un dispositivo con Apple silicon y 6 GB de RAM o más.** El sitio oficial recomienda un chip A17 Pro o M1, o más reciente. La ficha de la App Store muestra además disponibilidad de la misma app para macOS 26.0 (Apple M1 o posterior) y visionOS 26.0, sin describir una versión de escritorio aparte.',
          'La RAM es el límite real. Apple impone límites de memoria más estrictos a las apps en iPhone que en iPad, así que los modelos grandes caben más a menudo en un iPad. El sitio advierte de que a veces puede descargarse un modelo que no cabe, y de que la app intenta impedir que se cargue antes de que iOS cierre la app, sin garantía.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Precios y privacidad',
        content: [
          '**MLXHub se descarga gratis, con MLXHub Plus a $6.99 al mes, $44.99 al año y una compra de por vida de $229.99.** Ni la ficha ni el sitio dicen qué funciones desbloquea Plus, así que revisa el muro de pago en la app antes de depender de una función. Los modelos se descargan gratis desde Hugging Face, sin tarifas por token.',
          'El sitio oficial dice que la inferencia es totalmente en el dispositivo, que no hay cuentas y que nada te identifica. También indica que, desde la versión 2.0.0, la app envía analíticas y diagnósticos anónimos, que abarcan qué funciones usas, la clase de dispositivo y si un modelo se cargó, y que puedes desactivarlos en Ajustes.',
          'La app es de código cerrado y esta reseña no inspeccionó el tráfico de red, así que las afirmaciones de privacidad son del propio desarrollador. Si activas el servidor LAN, los datos que pasan por él son tan privados como tu red Wi-Fi.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compensaciones: ventajas frente a limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / advertencia'],
        rows: [
          {
            'Ventaja': 'Inferencia MLX sin conexión',
            'Qué significa en el uso real': 'Chatea con modelos abiertos sin conexión, con el framework propio de Apple.',
            'Limitación / advertencia': 'Requiere iOS 26 y 6 GB de RAM; la memoria del iPhone limita el tamaño del modelo.',
          },
          {
            'Ventaja': 'Servidor LAN',
            'Qué significa en el uso real': 'Otras apps y navegadores de tu Wi-Fi pueden usar los modelos cargados.',
            'Limitación / advertencia': 'El dispositivo debe seguir activo y en la red; no se publican cifras de rendimiento.',
          },
          {
            'Ventaja': 'Reparto entre dispositivos',
            'Qué significa en el uso real': 'Carga un modelo que ningún dispositivo tuyo puede alojar por sí solo.',
            'Limitación / advertencia': 'La velocidad por Wi-Fi no está documentada y hacen falta varios dispositivos compatibles.',
          },
          {
            'Ventaja': 'Herramientas, memoria y skills',
            'Qué significa en el uso real': 'Accede a Calendario, Recordatorios y Salud desde un chat.',
            'Limitación / advertencia': 'La ficha no da detalles de lo que hace cada herramienta.',
          },
          {
            'Ventaja': 'Gratis para empezar',
            'Qué significa en el uso real': 'Sin tarifas por token; los modelos son gratuitos en Hugging Face.',
            'Limitación / advertencia': 'Plus cuesta hasta $229.99 de por vida y no se indica qué desbloquea.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'MLXHub frente a alternativas',
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Origen de los modelos', 'Diferencia clave'],
        rows: [
          {
            'App': 'MLXHub',
            'Plataformas': 'iOS, iPadOS',
            'Precio y licencia': 'Freemium, código cerrado',
            'Origen de los modelos': 'Hugging Face (MLX)',
            'Diferencia clave': 'Servidor LAN y reparto entre dispositivos; código cerrado',
          },
          {
            'App': '[Locally AI](/es/power-local-llm/locally-ai-review)',
            'Plataformas': 'iOS, Mac',
            'Precio y licencia': 'Freemium, código cerrado',
            'Origen de los modelos': 'Catálogo de modelos en la app',
            'Diferencia clave': 'Chat en el dispositivo más sencillo; no figura servidor LAN',
          },
          {
            'App': '[Private Mind](/es/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Precio y licencia': 'Gratis, MIT',
            'Origen de los modelos': 'Descargas de Hugging Face',
            'Diferencia clave': 'Código abierto y también en Android; no figura servidor LAN',
          },
          {
            'App': '[Oscilla](/es/power-local-llm/oscilla-review)',
            'Plataformas': 'iOS',
            'Precio y licencia': 'Gratis, código cerrado',
            'Origen de los modelos': 'Más de 40 modelos en la app',
            'Diferencia clave': 'Catálogo fijo más amplio; no se nombra el motor',
          },
          {
            'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iOS, Android',
            'Precio y licencia': 'Gratis, MIT',
            'Origen de los modelos': 'Modelos GGUF',
            'Diferencia clave': 'Código abierto, basada en llama.cpp, multiplataforma',
          },
        ],
        note: 'Los detalles de plataforma, precio y funciones de apps de terceros cambian con frecuencia. Verifica los detalles actuales en la ficha propia de cada app antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar MLXHub',
        items: [
          '**Propietarios de un iPad o de un iPhone reciente que quieren los modelos más grandes que su dispositivo pueda alojar.** MLX, el streaming y la combinación de dispositivos apuntan a ese límite.',
          '**Aficionados que quieren un servidor de IA de bolsillo.** El endpoint LAN compatible con OpenAI permite que scripts y otras apps de tu red usen el dispositivo.',
          '**Personas con varios dispositivos Apple.** El reparto entre dispositivos es la función que la mayoría de las alternativas no indica.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar MLXHub',
        items: [
          '**Cualquiera que necesite código abierto.** El código no es público; [Private Mind](/es/power-local-llm/private-mind-review) y [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) son de código abierto.',
          '**Usuarios de Android.** Solo figuran plataformas de Apple; PocketPal AI y Private Mind funcionan ambas en Android.',
          '**Dispositivos con una versión anterior a iOS 26 o con menos de 6 GB de RAM.** La ficha y el sitio fijan esos mínimos.',
          '**Quien quiera una lista declarada de funciones del nivel de pago.** No se documenta qué desbloquea MLXHub Plus; prueba primero el nivel gratuito.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es gratis MLXHub?',
            a: 'Se descarga gratis con compras dentro de la app: MLXHub Plus a $6.99 al mes, $44.99 al año o $229.99 de por vida, según la ficha de la App Store.',
          },
          {
            q: '¿Quién desarrolla MLXHub?',
            a: 'Juan Colilla, con la línea de copyright «DreamFoundries EU». La app mlxhub.ai es un producto distinto, solo para macOS.',
          },
          {
            q: '¿Envía MLXHub mis chats a algún sitio?',
            a: 'El sitio dice que la inferencia es totalmente en el dispositivo. Desde la versión 2.0.0 se envían datos anónimos de uso y diagnóstico, que pueden desactivarse en Ajustes.',
          },
          {
            q: '¿Funciona MLXHub en Android?',
            a: 'No. La ficha cubre solo iPhone, iPad y, según la tienda, compatibilidad con Mac con Apple M1 y Apple Vision Pro.',
          },
          {
            q: '¿Qué modelos puedo ejecutar?',
            a: 'Modelos abiertos de texto y visión en formato MLX desde Hugging Face. La ficha nombra Qwen3.6 35B-A3B, Bonsai 2 27B y modelos Gemma.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'Sobre el papel, MLXHub encaja bien con quien tiene un iPad o un iPhone reciente y quiere chat MLX sin conexión, con la opción de usar el dispositivo como endpoint local o de combinar varios dispositivos para un modelo más grande.',
          'Las salvedades son la transparencia y la madurez: es de código cerrado, las funciones de Plus no están documentadas, la velocidad del reparto entre dispositivos no se publica y la ficha mostraba solo siete valoraciones en el momento de la reseña.',
          'Si quieres código abierto, empieza con [Private Mind](/es/power-local-llm/private-mind-review). Si quieres el servidor LAN o el reparto entre dispositivos, prueba primero el nivel gratuito de MLXHub.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[MLXHub: Local AI & LLM Server en la App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144) — versión, precio, requisitos, funciones y desarrollador.',
          '[Sitio oficial de MLXHub](https://mlxhub.app) — descripciones de funciones, requisitos del dispositivo y preguntas frecuentes, incluida la declaración sobre analíticas.',
          '[Política de privacidad de MLXHub](https://mlxhub.app/privacy) — página de la política enlazada desde el sitio oficial.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Locally AI](/es/power-local-llm/locally-ai-review) — una app freemium en el dispositivo para iPhone, iPad y Mac.',
          '[Reseña de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat sin conexión de código abierto para iPhone y Android.',
          '[Reseña de Oscilla](/es/power-local-llm/oscilla-review) — una app de iOS con un catálogo fijo de modelos en el dispositivo.',
          '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — chat en el dispositivo de código abierto para iOS y Android.',
          '[Reseña de mlx-serve](/es/power-local-llm/mlx-serve-review) — un servidor de inferencia nativo para Macs con Apple silicon.',
          '[El directorio completo de software LLM local](/es/power-local-llm/local-llm-software-directory) — un directorio más amplio de herramientas LLM locales en todas las plataformas.',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-05',
    dateModified: '2026-10-05',
    next_refresh_due: '2027-04-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/mlxhub-review-hero-pt.webp',
    title: 'Análise do MLXHub: chat MLX no dispositivo e servidor LAN para iPhone e iPad',
    seoTitle: 'Análise do MLXHub: chat MLX no dispositivo e servidor LAN no iPhone',
    intro:
      'O MLXHub é um aplicativo para iPhone e iPad que executa modelos abertos no próprio aparelho com o framework MLX da Apple, pode servi-los a outros aplicativos da sua rede e pode dividir um modelo grande entre vários dos seus dispositivos. Esta análise cobre o que a ficha dele na App Store e o site oficial documentam, o que fica pouco claro e como ele se compara a outros aplicativos de IA local para iOS.',
    metaDescription:
      'Análise do MLXHub: app para iPhone e iPad com modelos MLX no dispositivo, servidor LAN compatível com a OpenAI e divisão de modelos entre dispositivos. Preços, exigência do iOS 26 e de RAM, privacidade e limites.',
    twitterDescription:
      'Análise do MLXHub: um app iOS/iPadOS freemium que roda modelos MLX offline, os serve pela sua LAN e divide modelos grandes entre dispositivos. Requisitos, preços, privacidade e limites.',
    audience:
      'Donos de iPhone e iPad que querem rodar modelos abertos offline e, opcionalmente, usar o aparelho como endpoint local compatível com a OpenAI — aborda recursos, requisitos, preços, privacidade, limites e alternativas.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise do MLXHub',
    targetKeywords: [
      'análise mlxhub',
      'mlxhub app ios',
      'app de llm mlx para iphone',
      'rodar llm no iphone offline',
      'servidor compatível com openai no iphone',
      'inferência distribuída iphone ipad',
      'app mlx swift',
      'app de ia local para ipad',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'A17 Pro', 'M1'],
    leadAnswerBlock:
      '**O MLXHub é um aplicativo freemium e de código fechado para iOS e iPadOS que executa modelos abertos de linguagem e visão offline em Apple silicon, pode expô-los como um servidor compatível com a OpenAI no seu Wi-Fi e pode reunir vários dos seus dispositivos para carregar um modelo que nenhum deles comporta sozinho.** Segundo a ficha dele na App Store, exige iOS ou iPadOS 26.0 ou posterior e é gratuito para baixar, com o MLXHub Plus como compras no aplicativo. Esta análise cobre a versão 2.2.0 e se baseia na ficha pública e no site oficial, não em testes práticos.',
    quickAnswerTop: {
      pt: {
        question: 'Vale a pena instalar o MLXHub para IA local em um iPhone ou iPad?',
        answer:
          'Sim, se você tem um iPhone ou iPad com Apple silicon no iOS 26 e pelo menos 6 GB de RAM e quer chat offline mais um endpoint na LAN ou a divisão de modelos entre dispositivos. Não vale a pena se você precisa de código aberto, de Android ou de uma lista fixa de recursos gratuitos: o código não é público e a ficha não diz o que o MLXHub Plus libera. O Locally AI e o Private Mind são alternativas mais simples no dispositivo.',
        bullets: [
          'Download gratuito com compras no aplicativo: Plus por $6.99 por mês, $44.99 por ano ou $229.99 vitalício.',
          'Executa modelos abertos de texto e visão no dispositivo via mlx-swift; os modelos vêm do Hugging Face.',
          'Servidor LAN opcional com rotas no estilo da OpenAI, /v1/chat/completions e /v1/embeddings.',
          'A inferência distribuída divide um modelo entre os seus próprios dispositivos pareados, na mesma rede.',
          'Exige iOS ou iPadOS 26.0 ou posterior em Apple silicon com 6 GB de RAM ou mais.',
        ],
        updatedDate: '2026-10-05',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Como obter o MLXHub', anchor: 'get-it' },
      { label: 'MLXHub em resumo', anchor: 'at-a-glance' },
      { label: 'O que é o MLXHub', anchor: 'what-is-mlxhub' },
      { label: 'Como começar', anchor: 'how-to-get-started' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Servidor LAN e inferência distribuída', anchor: 'lan-and-distributed' },
      { label: 'Requisitos do aparelho', anchor: 'requirements' },
      { label: 'Preços e privacidade', anchor: 'privacy' },
      { label: 'Prós e contras: benefícios vs. limitações', anchor: 'tradeoffs' },
      { label: 'MLXHub vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Quem deveria usar o MLXHub', anchor: 'who-should-use' },
      { label: 'Quem não deveria usar o MLXHub', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O MLXHub, do desenvolvedor Juan Colilla, é um aplicativo freemium para iPhone e iPad que executa modelos abertos offline no framework MLX da Apple, os serve à sua rede e pode dividir um modelo entre vários dos seus dispositivos.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como um executor de modelos no seu bolso: o chat funciona sem internet depois que um modelo é baixado, e o mesmo aparelho pode atuar como um pequeno servidor de IA privado para outros aplicativos em casa.',
          },
        ],
        items: [
          'Versão analisada: 2.2.0, conforme a [ficha da App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144).',
          'Preço: download gratuito; o MLXHub Plus é listado a $6.99 por mês, $44.99 por ano e $229.99 vitalício.',
          'Plataforma: iOS e iPadOS 26.0 ou posterior; o site oficial pede Apple silicon e 6 GB de RAM ou mais.',
          'Recursos de destaque: servidor LAN, divisão de modelos entre dispositivos, ferramentas e skills, espelhos do Hugging Face.',
          'Abertura: código fechado; não foi encontrado repositório público.',
        ],
      },
      getItMlxhub: {
        id: 'get-it',
        title: 'Como obter o MLXHub',
        content: [
          '**O MLXHub é distribuído pela Apple App Store.** O download tem 73 MB e o aplicativo é gratuito para baixar, com compras no aplicativo.',
          'Esta análise complementa o [diretório de software de LLM local](/pt/power-local-llm/local-llm-software-directory) da PromptQuorum, que lista o MLXHub ao lado de outras ferramentas de IA local para celular e desktop.',
        ],
        columns: ['Canal', 'Como obter'],
        rows: [
          {
            'Canal': 'Apple App Store',
            'Como obter': '[MLXHub: Local AI & LLM Server na App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144)',
          },
          {
            'Canal': 'Site oficial',
            'Como obter': '[mlxhub.app](https://mlxhub.app)',
          },
          {
            'Canal': 'Política de privacidade',
            'Como obter': '[Política de privacidade do MLXHub](https://mlxhub.app/privacy)',
          },
        ],
        note: 'Não foi encontrado repositório público de código-fonte. Não há versão para Android; a ficha cobre apenas plataformas Apple.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'MLXHub em resumo',
        columns: ['Atributo', 'MLXHub'],
        rows: [
          { 'Atributo': 'Plataforma', 'MLXHub': 'iOS, iPadOS (26.0+)' },
          { 'Atributo': 'Preço', 'MLXHub': 'Gratuito, compras no app' },
          { 'Atributo': 'Licença', 'MLXHub': 'Código fechado' },
          { 'Atributo': 'Funciona totalmente offline', 'MLXHub': 'Sim, após baixar um modelo' },
          { 'Atributo': 'Download de modelos no app', 'MLXHub': 'Sim, do Hugging Face' },
          { 'Atributo': 'Entrada de imagens', 'MLXHub': 'Sim, modelos de visão e linguagem' },
          { 'Atributo': 'Servidor de API local', 'MLXHub': 'Sim, compatível com a OpenAI na LAN' },
          { 'Atributo': 'Entrada / saída de voz', 'MLXHub': 'Não informado na ficha' },
        ],
        note: 'Os atributos seguem a comparação de chat para celular usada no Diretório de Software de LLM Local. Eles vêm da ficha da App Store e do site oficial, que não cobrem todos os recursos.',
      },
      whatIsMlxhub: {
        id: 'what-is-mlxhub',
        title: 'O que é o MLXHub',
        content: [
          '**O MLXHub é primeiro um executor de modelos no dispositivo e só depois um cliente de chat.** A ficha anuncia "private offline chat & tools" (chat e ferramentas privados e offline) e diz que ele permite "run supported larger models and serve chat and embeddings across your local network" (executar modelos maiores compatíveis e servir chat e embeddings pela sua rede local); ambas as frases são citações da ficha em inglês. O site oficial diz que ele é construído nativamente em Swift sobre o mlx-swift, o framework MLX da Apple para Apple silicon.',
          'Ele é publicado por Juan Colilla, com a linha de copyright "DreamFoundries EU". Não o confunda com o [mlxhub.ai](https://mlxhub.ai/), um aplicativo separado, só para macOS, de outro desenvolvedor, que tem o mesmo nome.',
          'Esta análise se baseia apenas na ficha da App Store e no site oficial. Ela não inclui testes práticos, por isso velocidade, estabilidade e qualidade das respostas não são avaliadas aqui.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Como começar',
        content: [
          '**A configuração é uma instalação pela App Store, seguida do download de um modelo do Hugging Face.** A ficha não documenta o fluxo da primeira execução, então os passos abaixo seguem o que a ficha e o site informam.',
        ],
        numberedItems: [
          {
            title: 'Verifique o aparelho e o sistema',
            whyItMatters: 'A ficha exige iOS ou iPadOS 26.0 ou posterior, e o site oficial pede um aparelho com Apple silicon e 6 GB de RAM ou mais.',
          },
          {
            title: 'Instale o MLXHub',
            whyItMatters: 'Baixe-o na [App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144); o download tem 73 MB.',
          },
          {
            title: 'Baixe um modelo',
            whyItMatters: 'Escolha um modelo aberto no catálogo do Hugging Face dentro do aplicativo. O app indica se ele cabe, mas os metadados do Hugging Face às vezes são inconsistentes.',
          },
          {
            title: 'Converse e, se quiser, ative o servidor LAN',
            whyItMatters: 'Depois que um modelo é baixado, o chat funciona sem conexão. O servidor LAN é opcional e permite que outros aplicativos do seu Wi-Fi usem os modelos carregados.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O diferencial do MLXHub é a amplitude em torno do executor de modelos.** Tudo abaixo vem da ficha da App Store e do site oficial.',
        ],
        items: [
          '**Modelos.** Baixa modelos abertos de texto e de visão e linguagem do Hugging Face; a ficha cita o Qwen3.6 35B-A3B, o Bonsai 2 27B e modelos Gemma. Conversas só de texto carregam os componentes de visão apenas quando necessário, para economizar memória.',
          '**Memória e skills.** Um sistema de memória guarda fatos das conversas, e você pode criar skills personalizadas reutilizáveis.',
          '**Ferramentas nativas.** Ferramentas predefinidas acessam frameworks da Apple, como Calendário, Lembretes, Saúde, Fotos e a biblioteca de música; a ficha não detalha o que cada ferramenta pode fazer.',
          '**Velocidade e adequação.** O cache KV acelera conversas de vários turnos, e um teste de estresse de RAM mede a folga de memória do seu aparelho antes de carregar um modelo.',
          '**Troca de modelos e espelhos.** Alterne entre modelos de texto e de visão no meio da conversa e use um espelho comunitário do Hugging Face quando o Hugging Face estiver bloqueado.',
          '**Streaming de modelos grandes.** A ficha menciona streaming de especialistas via NAND para modelos maiores, como o Qwen3.6 35B-A3B, sem mais detalhes.',
          '**Idiomas.** A interface está disponível em inglês e em outros 11 idiomas.',
        ],
      },
      lanAndDistributed: {
        id: 'lan-and-distributed',
        title: 'Servidor LAN e inferência distribuída',
        content: [
          '**O servidor LAN transforma o seu aparelho em um pequeno endpoint compatível com a OpenAI.** A ficha cita as rotas /v1/chat/completions e /v1/embeddings. Segundo o site oficial, ele também serve uma página de chat leve que qualquer pessoa no mesmo Wi-Fi pode abrir no navegador para conversar com os modelos carregados, e escuta apenas em interfaces locais, sem redirecionamento de portas.',
          '**A inferência distribuída reúne vários dos seus próprios dispositivos.** Um aparelho hospeda e os outros se juntam, cada um assumindo uma parte das camadas do modelo, de modo que um modelo que nenhum deles comporta sozinho pode ser carregado. O site diz que os dispositivos são pareados e o tráfego é criptografado, e que nada sai da rede. A taxa de transferência pelo Wi-Fi não é publicada, então espere algo mais lento do que um único aparelho que comporte o modelo.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos do aparelho',
        content: [
          '**O MLXHub exige iOS ou iPadOS 26.0 ou posterior, um aparelho com Apple silicon e 6 GB de RAM ou mais.** O site oficial recomenda um chip A17 Pro ou M1, ou mais novo. A ficha da App Store também mostra disponibilidade para macOS 26.0 (Apple M1 ou posterior) e visionOS 26.0 para o mesmo aplicativo, sem descrever uma versão de desktop separada.',
          'A RAM é o limite real. A Apple impõe limites de memória por aplicativo mais rígidos no iPhone do que no iPad, então modelos maiores cabem com mais frequência em um iPad. O site avisa que um modelo que não cabe pode, às vezes, ainda ser baixado, e que o app tenta impedir o carregamento antes que o iOS encerre o aplicativo, sem garantia.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Preços e privacidade',
        content: [
          '**O MLXHub é gratuito para baixar, com o MLXHub Plus listado a $6.99 por mês, $44.99 por ano e uma compra vitalícia de $229.99.** Nem a ficha nem o site dizem quais recursos o Plus libera, então confira a tela de assinatura no aplicativo antes de contar com algum recurso. Os modelos são baixados gratuitamente do Hugging Face, sem cobrança por token.',
          'O site oficial diz que a inferência acontece totalmente no dispositivo, que não há contas e que nada identifica você. Ele também informa que, desde a versão 2.0.0, o app envia análises e diagnósticos anônimos, abrangendo quais recursos você usa, a classe do aparelho e se um modelo foi carregado, e que você pode desativá-los em Ajustes.',
          'O aplicativo é de código fechado e esta análise não inspecionou o tráfego de rede, então as afirmações de privacidade são do próprio desenvolvedor. Se você ativar o servidor LAN, os dados nele são tão privados quanto a sua rede Wi-Fi.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras: benefícios vs. limitações',
        columns: ['Benefício', 'O que significa no uso real', 'Limitação / ressalva'],
        rows: [
          {
            'Benefício': 'Inferência MLX offline',
            'O que significa no uso real': 'Converse com modelos abertos sem conexão, usando o framework da própria Apple.',
            'Limitação / ressalva': 'Exige iOS 26 e 6 GB de RAM; os limites de memória do iPhone restringem o tamanho do modelo.',
          },
          {
            'Benefício': 'Servidor LAN',
            'O que significa no uso real': 'Outros aplicativos e navegadores do seu Wi-Fi podem usar os modelos carregados.',
            'Limitação / ressalva': 'O aparelho precisa ficar ativo e na rede; não há números de taxa de transferência publicados.',
          },
          {
            'Benefício': 'Divisão entre dispositivos',
            'O que significa no uso real': 'Carregue um modelo que nenhum dos seus aparelhos comporta sozinho.',
            'Limitação / ressalva': 'A velocidade pelo Wi-Fi não é documentada e exige vários dispositivos compatíveis.',
          },
          {
            'Benefício': 'Ferramentas, memória e skills',
            'O que significa no uso real': 'Acesse Calendário, Lembretes e Saúde a partir de um chat.',
            'Limitação / ressalva': 'A ficha não detalha o que cada ferramenta faz.',
          },
          {
            'Benefício': 'Gratuito para começar',
            'O que significa no uso real': 'Sem cobrança por token; os modelos são gratuitos no Hugging Face.',
            'Limitação / ressalva': 'O Plus custa até $229.99 vitalício, e o que ele libera não é informado.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'MLXHub vs. alternativas',
        columns: ['Aplicativo', 'Plataformas', 'Preço e licença', 'Fonte de modelos', 'Diferença-chave'],
        rows: [
          {
            'Aplicativo': 'MLXHub',
            'Plataformas': 'iOS, iPadOS',
            'Preço e licença': 'Freemium, código fechado',
            'Fonte de modelos': 'Hugging Face (MLX)',
            'Diferença-chave': 'Servidor LAN e divisão de modelos entre dispositivos; não é de código aberto',
          },
          {
            'Aplicativo': '[Locally AI](/pt/power-local-llm/locally-ai-review)',
            'Plataformas': 'iOS, Mac',
            'Preço e licença': 'Freemium, código fechado',
            'Fonte de modelos': 'Catálogo de modelos no app',
            'Diferença-chave': 'Chat no dispositivo mais simples; nenhum servidor LAN é listado',
          },
          {
            'Aplicativo': '[Private Mind](/pt/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Preço e licença': 'Gratuito, MIT',
            'Fonte de modelos': 'Downloads do Hugging Face',
            'Diferença-chave': 'Código aberto e também no Android; nenhum servidor LAN é listado',
          },
          {
            'Aplicativo': '[Oscilla](/pt/power-local-llm/oscilla-review)',
            'Plataformas': 'iOS',
            'Preço e licença': 'Gratuito, código fechado',
            'Fonte de modelos': 'Mais de 40 modelos no app',
            'Diferença-chave': 'Catálogo fixo maior; ambiente de execução não citado',
          },
          {
            'Aplicativo': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iOS, Android',
            'Preço e licença': 'Gratuito, MIT',
            'Fonte de modelos': 'Modelos GGUF',
            'Diferença-chave': 'Código aberto, baseado em llama.cpp, multiplataforma',
          },
        ],
        note: 'Os detalhes de plataforma, preço e recursos de aplicativos de terceiros mudam com frequência. Verifique os detalhes atuais na ficha de cada aplicativo antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deveria usar o MLXHub',
        items: [
          '**Donos de iPad e de iPhones recentes que querem os maiores modelos que o aparelho comporta.** O MLX, o streaming e a reunião de dispositivos visam justamente esse limite.',
          '**Entusiastas que querem um servidor de IA de bolso.** O endpoint LAN compatível com a OpenAI permite que scripts e outros aplicativos da sua rede usem o aparelho.',
          '**Pessoas com vários dispositivos Apple.** A divisão entre dispositivos é o recurso que a maioria das alternativas não lista.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quem não deveria usar o MLXHub',
        items: [
          '**Quem precisa de código aberto.** O código não é público; o [Private Mind](/pt/power-local-llm/private-mind-review) e o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) são de código aberto.',
          '**Usuários de Android.** Só plataformas Apple são listadas; o PocketPal AI e o Private Mind funcionam no Android.',
          '**Aparelhos abaixo do iOS 26 ou com menos de 6 GB de RAM.** A ficha e o site definem esses mínimos.',
          '**Quem quer uma lista declarada de recursos do plano pago.** O que o MLXHub Plus libera não é documentado; experimente primeiro a versão gratuita.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O MLXHub é gratuito?',
            a: 'Ele é gratuito para baixar, com compras no aplicativo: o MLXHub Plus por $6.99 por mês, $44.99 por ano ou $229.99 vitalício, conforme a ficha da App Store.',
          },
          {
            q: 'Quem faz o MLXHub?',
            a: 'Juan Colilla, com a linha de copyright "DreamFoundries EU". O app mlxhub.ai é um produto diferente, só para macOS.',
          },
          {
            q: 'O MLXHub envia as minhas conversas para algum lugar?',
            a: 'O site diz que a inferência acontece totalmente no dispositivo. Dados anônimos de uso e diagnóstico são enviados desde a versão 2.0.0 e podem ser desativados em Ajustes.',
          },
          {
            q: 'O MLXHub funciona no Android?',
            a: 'Não. A ficha cobre apenas iPhone, iPad e, segundo a loja, a compatibilidade com Macs Apple M1 e Apple Vision Pro.',
          },
          {
            q: 'Quais modelos posso executar?',
            a: 'Modelos abertos de texto e visão no formato MLX, do Hugging Face. A ficha cita o Qwen3.6 35B-A3B, o Bonsai 2 27B e modelos Gemma.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'No papel, o MLXHub é uma boa opção para quem tem um iPad ou iPhone recente e quer chat MLX offline, com a possibilidade de usar o aparelho como endpoint local ou de reunir vários dispositivos para um modelo maior.',
          'As ressalvas são a transparência e a maturidade: o código é fechado, os recursos do Plus não são documentados, a velocidade da divisão entre dispositivos não é publicada, e a ficha exibia apenas sete avaliações no momento da análise.',
          'Se você quer código aberto, comece pelo [Private Mind](/pt/power-local-llm/private-mind-review). Se quer o servidor LAN ou a divisão entre dispositivos, experimente primeiro a versão gratuita do MLXHub.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[MLXHub: Local AI & LLM Server na App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144) — versão, preço, requisitos, recursos e desenvolvedor.',
          '[Site oficial do MLXHub](https://mlxhub.app) — descrições de recursos, requisitos do aparelho e perguntas frequentes, incluindo a declaração sobre análises.',
          '[Política de privacidade do MLXHub](https://mlxhub.app/privacy) — página de política vinculada no site oficial.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Locally AI](/pt/power-local-llm/locally-ai-review) — um aplicativo freemium no dispositivo para iPhone, iPad e Mac.',
          '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline de código aberto para iPhone e Android.',
          '[Análise do Oscilla](/pt/power-local-llm/oscilla-review) — um aplicativo iOS com um catálogo fixo de modelos no dispositivo.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — chat de código aberto no dispositivo para iOS e Android.',
          '[Análise do mlx-serve](/pt/power-local-llm/mlx-serve-review) — um servidor de inferência nativo para Macs com Apple silicon.',
          '[O diretório completo de software de LLM local](/pt/power-local-llm/local-llm-software-directory) — um diretório mais amplo de ferramentas de LLM local em várias plataformas.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-05',
    dateModified: '2026-10-05',
    next_refresh_due: '2027-04-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/mlxhub-review-hero-ar.webp',
    title: 'مراجعة MLXHub: دردشة MLX على الجهاز وخادم شبكة محلية للآيفون والآيباد',
    seoTitle: 'مراجعة MLXHub: دردشة MLX على الجهاز وخادم شبكة محلية للآيفون',
    intro:
      'MLXHub تطبيق للآيفون والآيباد يشغّل نماذج مفتوحة على الجهاز نفسه عبر إطار MLX من Apple، ويمكنه تقديمها لتطبيقات أخرى على شبكتك، وتقسيم نموذج كبير واحد على عدة أجهزة تملكها. تتناول هذه المراجعة ما توثّقه صفحة التطبيق على App Store والموقع الرسمي، وما هو غير واضح، ومقارنته بتطبيقات الذكاء الاصطناعي المحلي الأخرى على iOS.',
    metaDescription:
      'مراجعة MLXHub: تطبيق للآيفون والآيباد لتشغيل نماذج MLX على الجهاز مع خادم شبكة محلية متوافق مع OpenAI وتقسيم النموذج على عدة أجهزة. الأسعار ومتطلبات iOS 26 والذاكرة العشوائية والخصوصية والقيود.',
    twitterDescription:
      'مراجعة MLXHub: تطبيق iOS/iPadOS مجاني مع مشتريات داخل التطبيق يشغّل نماذج MLX دون إنترنت، ويخدمها عبر شبكتك المحلية، ويقسّم النماذج الكبيرة على عدة أجهزة. المتطلبات والأسعار والخصوصية والقيود.',
    audience:
      'مستخدمو آيفون وآيباد الذين يريدون تشغيل نماذج مفتوحة دون إنترنت، واستخدام الجهاز اختياريًا كنقطة وصول محلية متوافقة مع OpenAI — يغطي الميزات والمتطلبات والأسعار والخصوصية والقيود والبدائل.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة MLXHub',
    targetKeywords: [
      'مراجعة mlxhub',
      'تطبيق mlxhub لنظام ios',
      'تطبيق mlx للآيفون نماذج لغوية',
      'تشغيل نموذج لغوي على الآيفون دون إنترنت',
      'خادم متوافق مع openai على الآيفون',
      'استدلال موزّع آيفون آيباد',
      'تطبيق mlx swift',
      'تطبيق ذكاء اصطناعي محلي للآيباد',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'A17 Pro', 'M1'],
    leadAnswerBlock:
      '**MLXHub تطبيق مجاني مغلق المصدر مع مشتريات داخل التطبيق لنظامي iOS وiPadOS، يشغّل نماذج لغوية ونماذج رؤية مفتوحة دون إنترنت على معالجات Apple silicon، ويمكنه عرضها كخادم متوافق مع OpenAI على شبكة Wi-Fi لديك، ويمكنه تجميع عدة أجهزة تملكها لتحميل نموذج لا يتسع له أي منها وحده.** بحسب صفحته على App Store يتطلب iOS أو iPadOS بالإصدار 26.0 أو أحدث، وتنزيله مجاني مع MLXHub Plus على شكل مشتريات داخل التطبيق. تغطي هذه المراجعة الإصدار 2.2.0 وتستند إلى الصفحة العلنية والموقع الرسمي، لا إلى اختبار عملي.',
    quickAnswerTop: {
      ar: {
        question: 'هل يستحق MLXHub التثبيت لتشغيل الذكاء الاصطناعي محليًا على الآيفون أو الآيباد؟',
        answer:
          'نعم، إذا كان لديك آيفون أو آيباد بمعالج Apple silicon وإصدار iOS 26 وذاكرة عشوائية لا تقل عن 6 GB، وتريد دردشة دون إنترنت مع نقطة وصول على الشبكة المحلية أو تقسيم النموذج على عدة أجهزة. تجاوزه إذا كنت تحتاج إلى مصدر مفتوح أو أندرويد أو قائمة ثابتة بالميزات المجانية: الشيفرة غير متاحة، ولا تذكر الصفحة ما يفتحه MLXHub Plus. يظل Locally AI وPrivate Mind بديلين أبسط يعملان على الجهاز.',
        bullets: [
          'تنزيل مجاني مع مشتريات داخل التطبيق: Plus بسعر $6.99 شهريًا أو $44.99 سنويًا أو $229.99 مدى الحياة.',
          'يشغّل نماذج نصية ونماذج رؤية مفتوحة على الجهاز عبر mlx-swift؛ وتأتي النماذج من Hugging Face.',
          'خادم شبكة محلية اختياري بمساري /v1/chat/completions و/v1/embeddings على نمط OpenAI.',
          'يقسّم الاستدلال الموزّع نموذجًا واحدًا على أجهزتك المقترنة ضمن الشبكة نفسها.',
          'يتطلب iOS أو iPadOS بالإصدار 26.0 أو أحدث على Apple silicon وذاكرة عشوائية 6 GB أو أكثر.',
        ],
        updatedDate: '2026-10-05',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'كيفية الحصول على MLXHub', anchor: 'get-it' },
      { label: 'MLXHub في لمحة', anchor: 'at-a-glance' },
      { label: 'ما هو MLXHub', anchor: 'what-is-mlxhub' },
      { label: 'كيفية البدء', anchor: 'how-to-get-started' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'خادم الشبكة المحلية والاستدلال الموزّع', anchor: 'lan-and-distributed' },
      { label: 'متطلبات الجهاز', anchor: 'requirements' },
      { label: 'الأسعار والخصوصية', anchor: 'privacy' },
      { label: 'المفاضلات: المزايا مقابل القيود', anchor: 'tradeoffs' },
      { label: 'MLXHub مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'من يجب أن يستخدم MLXHub', anchor: 'who-should-use' },
      { label: 'من لا يجب أن يستخدم MLXHub', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم النهائي', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'الخلاصة',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MLXHub، من تطوير المطوّر Juan Colilla، تطبيق للآيفون والآيباد مجاني مع مشتريات داخل التطبيق، يشغّل نماذج مفتوحة دون إنترنت على إطار MLX من Apple، ويقدّمها لشبكتك، ويمكنه تقسيم نموذج على عدة أجهزة لديك.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله مشغّل نماذج في جيبك: تعمل الدردشة دون إنترنت بعد تنزيل النموذج، ويمكن للجهاز نفسه أن يؤدي دور خادم ذكاء اصطناعي خاص صغير لتطبيقات أخرى في المنزل.',
          },
        ],
        items: [
          'الإصدار المراجَع: 2.2.0 كما يظهر في [صفحة التطبيق على App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144).',
          'السعر: التنزيل مجاني؛ ويُدرج MLXHub Plus بسعر $6.99 شهريًا و$44.99 سنويًا و$229.99 مدى الحياة.',
          'المنصة: iOS وiPadOS بالإصدار 26.0 أو أحدث؛ ويطلب الموقع الرسمي معالج Apple silicon وذاكرة عشوائية 6 GB أو أكثر.',
          'أبرز الميزات: خادم الشبكة المحلية وتقسيم النموذج على عدة أجهزة والأدوات والمهارات ومرايا Hugging Face.',
          'الانفتاح: مغلق المصدر؛ ولم يُعثر على مستودع علني.',
        ],
      },
      getItMlxhub: {
        id: 'get-it',
        title: 'كيفية الحصول على MLXHub',
        content: [
          '**يُوزَّع MLXHub عبر متجر Apple App Store.** حجم التنزيل 73 MB، والتطبيق مجاني التنزيل مع مشتريات داخل التطبيق.',
          'تكمّل هذه المراجعة [دليل برمجيات LLM المحلية](/ar/power-local-llm/local-llm-software-directory) من PromptQuorum، الذي يدرج MLXHub إلى جانب أدوات ذكاء اصطناعي محلي أخرى للجوال وسطح المكتب.',
        ],
        columns: ['القناة', 'كيفية الحصول عليه'],
        rows: [
          {
            'القناة': 'Apple App Store',
            'كيفية الحصول عليه': '[MLXHub: Local AI & LLM Server على App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144)',
          },
          {
            'القناة': 'الموقع الرسمي',
            'كيفية الحصول عليه': '[mlxhub.app](https://mlxhub.app)',
          },
          {
            'القناة': 'سياسة الخصوصية',
            'كيفية الحصول عليه': '[سياسة خصوصية MLXHub](https://mlxhub.app/privacy)',
          },
        ],
        note: 'لم يُعثر على مستودع علني للشيفرة المصدرية. ولا يوجد إصدار لأندرويد؛ فالصفحة تغطي منصات Apple فقط.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'MLXHub في لمحة',
        columns: ['الخاصية', 'MLXHub'],
        rows: [
          { 'الخاصية': 'المنصة', 'MLXHub': 'iOS وiPadOS (26.0+)' },
          { 'الخاصية': 'السعر', 'MLXHub': 'مجاني، مع مشتريات داخل التطبيق' },
          { 'الخاصية': 'الترخيص', 'MLXHub': 'مغلق المصدر' },
          { 'الخاصية': 'يعمل دون إنترنت بالكامل', 'MLXHub': 'نعم، بعد تنزيل النموذج' },
          { 'الخاصية': 'تنزيل النماذج داخل التطبيق', 'MLXHub': 'نعم، من Hugging Face' },
          { 'الخاصية': 'إدخال الصور', 'MLXHub': 'نعم، نماذج الرؤية واللغة' },
          { 'الخاصية': 'خادم API محلي', 'MLXHub': 'نعم، متوافق مع OpenAI على شبكتك' },
          { 'الخاصية': 'إدخال/إخراج صوتي', 'MLXHub': 'غير مذكور في الصفحة' },
        ],
        note: 'تتبع الخصائص مقارنة تطبيقات الدردشة على الجوال المعتمدة في دليل برمجيات LLM المحلية. وهي مستمدة من صفحة App Store والموقع الرسمي، اللذين لا يغطيان كل ميزة.',
      },
      whatIsMlxhub: {
        id: 'what-is-mlxhub',
        title: 'ما هو MLXHub',
        content: [
          '**MLXHub مشغّل نماذج على الجهاز أولًا وعميل دردشة ثانيًا.** تقدّمه الصفحة بعبارة "private offline chat & tools" (دردشة خاصة دون إنترنت وأدوات)، وتقول إنه يتيح لك "run supported larger models and serve chat and embeddings across your local network" (تشغيل النماذج الأكبر المدعومة وخدمة الدردشة والتضمينات عبر شبكتك المحلية)؛ والعبارتان مقتبستان من الصفحة الإنجليزية. ويذكر الموقع الرسمي أنه مبني أصليًا بلغة Swift على mlx-swift، وهو إطار MLX من Apple لمعالجات Apple silicon.',
          'ينشره Juan Colilla، وسطر حقوق النشر فيه "DreamFoundries EU" (اقتباس من الصفحة). لا تخلطه بـ [mlxhub.ai](https://mlxhub.ai/)، وهو تطبيق منفصل لنظام macOS فقط من مطوّر مختلف ويحمل الاسم نفسه.',
          'تعتمد هذه المراجعة على صفحة App Store والموقع الرسمي وحدهما. ولا تتضمن اختبارًا عمليًا، لذا لا تُقيَّم هنا السرعة ولا الاستقرار ولا جودة الإجابات.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'كيفية البدء',
        content: [
          '**الإعداد عبارة عن تثبيت من App Store ثم تنزيل نموذج من Hugging Face.** لا توثّق الصفحة تدفق التشغيل الأول، لذا تتبع الخطوات أدناه ما تذكره الصفحة والموقع.',
        ],
        numberedItems: [
          {
            title: 'تحقق من الجهاز ونظام التشغيل',
            whyItMatters: 'تشترط الصفحة iOS أو iPadOS بالإصدار 26.0 أو أحدث، ويطلب الموقع الرسمي جهازًا بمعالج Apple silicon وذاكرة عشوائية 6 GB أو أكثر.',
          },
          {
            title: 'ثبّت MLXHub',
            whyItMatters: 'احصل عليه من [App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144)؛ وحجم التنزيل 73 MB.',
          },
          {
            title: 'نزّل نموذجًا',
            whyItMatters: 'اختر نموذجًا مفتوحًا من كتالوج Hugging Face داخل التطبيق. يبيّن التطبيق ما إذا كان النموذج يتسع لجهازك، لكن بيانات Hugging Face الوصفية غير متسقة أحيانًا.',
          },
          {
            title: 'ادردش، ثم فعّل خادم الشبكة المحلية إن شئت',
            whyItMatters: 'بعد تنزيل النموذج تعمل الدردشة دون اتصال. وخادم الشبكة المحلية اختياري، ويتيح لتطبيقات أخرى على شبكة Wi-Fi لديك استخدام النماذج المحمّلة.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**نقطة قوة MLXHub هي اتساع ما يحيط بمشغّل النماذج.** كل ما يلي مأخوذ من صفحة App Store والموقع الرسمي.',
        ],
        items: [
          '**النماذج.** ينزّل نماذج نصية ونماذج رؤية ولغة مفتوحة من Hugging Face؛ وتذكر الصفحة Qwen3.6 35B-A3B وBonsai 2 27B ونماذج Gemma. وفي المحادثات النصية فقط لا تُحمَّل مكونات الرؤية إلا عند الحاجة، لتوفير الذاكرة.',
          '**الذاكرة والمهارات.** يحتفظ نظام ذاكرة بمعلومات من المحادثات، ويمكنك إنشاء مهارات مخصصة قابلة لإعادة الاستخدام.',
          '**الأدوات الأصلية.** تصل أدوات معرّفة مسبقًا إلى إطارات Apple مثل التقويم والتذكيرات والصحة والصور ومكتبة الموسيقى؛ ولا تعطي الصفحة تفاصيل عمّا تستطيع كل أداة فعله.',
          '**السرعة والملاءمة.** يسرّع التخزين المؤقت KV المحادثات متعددة الأدوار، ويقيس اختبار ضغط للذاكرة العشوائية هامش ذاكرة جهازك قبل تحميل النموذج.',
          '**تبديل النماذج والمرايا.** بدّل بين النماذج النصية ونماذج الرؤية في منتصف المحادثة، واستخدم مرآة مجتمعية لـ Hugging Face عندما يكون Hugging Face محجوبًا.',
          '**بث النماذج الكبيرة.** تذكر الصفحة بث خبراء NAND للنماذج الأكبر مثل Qwen3.6 35B-A3B، دون مزيد من التفاصيل.',
          '**اللغات.** الواجهة متاحة بالإنجليزية و11 لغة أخرى.',
        ],
      },
      lanAndDistributed: {
        id: 'lan-and-distributed',
        title: 'خادم الشبكة المحلية والاستدلال الموزّع',
        content: [
          '**يحوّل خادم الشبكة المحلية جهازك إلى نقطة وصول صغيرة متوافقة مع OpenAI.** تذكر الصفحة المسارين /v1/chat/completions و/v1/embeddings. وبحسب الموقع الرسمي فإنه يخدم أيضًا صفحة دردشة خفيفة يستطيع أي شخص على شبكة Wi-Fi نفسها فتحها في المتصفح للتحدث مع النماذج المحمّلة، ويرتبط بالواجهات المحلية فقط، دون إعادة توجيه المنافذ.',
          '**يجمع الاستدلال الموزّع عدة أجهزة تملكها.** يستضيف أحد الأجهزة النموذج وتنضم الأجهزة الأخرى، ويتولى كل منها شريحة من طبقات النموذج، فيمكن تحميل نموذج لا يتسع له أي منها وحده. ويقول الموقع إن الأجهزة تُقرن وإن حركة البيانات مشفّرة وإن شيئًا لا يغادر الشبكة. ولم يُنشر معدل الإنتاجية عبر Wi-Fi، فتوقّع أن يكون أبطأ من جهاز واحد يتسع للنموذج.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'متطلبات الجهاز',
        content: [
          '**يتطلب MLXHub الإصدار 26.0 أو أحدث من iOS أو iPadOS، وجهازًا بمعالج Apple silicon وذاكرة عشوائية 6 GB أو أكثر.** ويوصي الموقع الرسمي بمعالج A17 Pro أو M1 أو أحدث. وتُظهر صفحة App Store أيضًا توفر التطبيق نفسه على macOS 26.0 (معالج Apple M1 أو أحدث) وvisionOS 26.0، دون وصف إصدار منفصل لسطح المكتب.',
          'الذاكرة العشوائية هي الحد الفعلي. تفرض Apple حدودًا أشد لذاكرة التطبيقات على الآيفون مما على الآيباد، لذا تتسع النماذج الأكبر على الآيباد في كثير من الأحيان. ويحذّر الموقع من أن نموذجًا لا يتسع قد يجري تنزيله أحيانًا مع ذلك، وأن التطبيق يحاول منع تحميله قبل أن يغلق iOS التطبيق، دون ضمان.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الأسعار والخصوصية',
        content: [
          '**تنزيل MLXHub مجاني، ويُدرج MLXHub Plus بسعر $6.99 شهريًا و$44.99 سنويًا و$229.99 شراءً مدى الحياة.** لا تذكر الصفحة ولا الموقع الميزات التي يفتحها Plus، لذا افحص شاشة الدفع في التطبيق قبل الاعتماد على ميزة ما. تُنزَّل النماذج مجانًا من Hugging Face، دون رسوم لكل رمز (token).',
          'يقول الموقع الرسمي إن الاستدلال يجري بالكامل على الجهاز وإنه لا توجد حسابات ولا شيء يحدد هويتك. ويذكر أيضًا أن التطبيق يرسل منذ الإصدار 2.0.0 بيانات تحليلات وتشخيص مجهولة، تشمل الميزات التي تستخدمها وفئة الجهاز وهل جرى تحميل النموذج، وأنه يمكنك إيقافها من الإعدادات.',
          'التطبيق مغلق المصدر ولم تفحص هذه المراجعة حركة الشبكة، لذا فإن ادعاءات الخصوصية هي ادعاءات المطوّر نفسه. وإذا فعّلت خادم الشبكة المحلية فإن البيانات المارة عليه خاصة بقدر خصوصية شبكة Wi-Fi لديك.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المفاضلات: المزايا مقابل القيود',
        columns: ['الميزة', 'ما تعنيه في الاستخدام الفعلي', 'القيد / الملاحظة'],
        rows: [
          {
            'الميزة': 'استدلال MLX دون إنترنت',
            'ما تعنيه في الاستخدام الفعلي': 'ادردش مع نماذج مفتوحة دون اتصال، بإطار Apple نفسه.',
            'القيد / الملاحظة': 'يتطلب iOS 26 وذاكرة 6 GB؛ وذاكرة الآيفون تقيّد النموذج.',
          },
          {
            'الميزة': 'خادم الشبكة المحلية',
            'ما تعنيه في الاستخدام الفعلي': 'تستخدم تطبيقات ومتصفحات على Wi-Fi النماذج المحمّلة.',
            'القيد / الملاحظة': 'يجب أن يبقى الجهاز مستيقظًا ومتصلًا؛ ولا أرقام منشورة.',
          },
          {
            'الميزة': 'تقسيم النموذج على عدة أجهزة',
            'ما تعنيه في الاستخدام الفعلي': 'حمّل نموذجًا لا يتسع له أي جهاز واحد من أجهزتك.',
            'القيد / الملاحظة': 'السرعة عبر Wi-Fi غير موثّقة، ويلزم عدة أجهزة متوافقة.',
          },
          {
            'الميزة': 'الأدوات والذاكرة والمهارات',
            'ما تعنيه في الاستخدام الفعلي': 'الوصول إلى التقويم والتذكيرات والصحة من الدردشة.',
            'القيد / الملاحظة': 'لا تعطي الصفحة تفاصيل عمّا تفعله كل أداة.',
          },
          {
            'الميزة': 'مجاني للبدء',
            'ما تعنيه في الاستخدام الفعلي': 'دون رسوم لكل رمز؛ والنماذج مجانية من Hugging Face.',
            'القيد / الملاحظة': 'يبلغ Plus حتى $229.99 مدى الحياة، وما يفتحه غير مذكور.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'MLXHub مقابل البدائل',
        columns: ['التطبيق', 'المنصات', 'السعر والترخيص', 'مصدر النموذج', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': 'MLXHub',
            'المنصات': 'iOS، iPadOS',
            'السعر والترخيص': 'مجاني مع ميزات مدفوعة، مغلق المصدر',
            'مصدر النموذج': 'Hugging Face (MLX)',
            'الفرق الرئيسي': 'خادم شبكة محلية وتقسيم النموذج؛ ليس مفتوح المصدر',
          },
          {
            'التطبيق': '[Locally AI](/ar/power-local-llm/locally-ai-review)',
            'المنصات': 'iOS، ماك',
            'السعر والترخيص': 'مجاني مع ميزات مدفوعة، مغلق المصدر',
            'مصدر النموذج': 'كتالوج نماذج داخل التطبيق',
            'الفرق الرئيسي': 'دردشة أبسط على الجهاز؛ ولا يُدرج خادم شبكة محلية',
          },
          {
            'التطبيق': '[Private Mind](/ar/power-local-llm/private-mind-review)',
            'المنصات': 'iOS، أندرويد',
            'السعر والترخيص': 'مجاني، MIT',
            'مصدر النموذج': 'تنزيلات من Hugging Face',
            'الفرق الرئيسي': 'مفتوح المصدر ويعمل على أندرويد أيضًا؛ ولا يُدرج خادم شبكة محلية',
          },
          {
            'التطبيق': '[Oscilla](/ar/power-local-llm/oscilla-review)',
            'المنصات': 'iOS',
            'السعر والترخيص': 'مجاني، مغلق المصدر',
            'مصدر النموذج': 'أكثر من 40 نموذجًا داخل التطبيق',
            'الفرق الرئيسي': 'كتالوج ثابت أكبر؛ ولا يُذكر محرك التشغيل',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'iOS، أندرويد',
            'السعر والترخيص': 'مجاني، MIT',
            'مصدر النموذج': 'نماذج GGUF',
            'الفرق الرئيسي': 'مفتوح المصدر، قائم على llama.cpp، متعدد المنصات',
          },
        ],
        note: 'تتغير تفاصيل المنصة والسعر والميزات للتطبيقات الخارجية بشكل متكرر. تحقق من التفاصيل الحالية على صفحة كل تطبيق قبل اتخاذ القرار.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من يجب أن يستخدم MLXHub',
        items: [
          '**مالكو الآيباد والآيفون الحديث الذين يريدون أكبر النماذج التي يتسع لها جهازهم.** يستهدف MLX والبث وتجميع الأجهزة هذا الحد تحديدًا.',
          '**المهتمون بالتجريب الذين يريدون خادم ذكاء اصطناعي في الجيب.** تتيح نقطة الوصول المتوافقة مع OpenAI على الشبكة المحلية للنصوص البرمجية والتطبيقات الأخرى على شبكتك استخدام الجهاز.',
          '**من يملكون عدة أجهزة من Apple.** تقسيم النموذج على عدة أجهزة هو الميزة التي لا تدرجها معظم البدائل.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'من لا يجب أن يستخدم MLXHub',
        items: [
          '**كل من يحتاج إلى مصدر مفتوح.** الشيفرة غير متاحة للعموم؛ و[Private Mind](/ar/power-local-llm/private-mind-review) و[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) مفتوحا المصدر.',
          '**مستخدمو أندرويد.** تُدرج منصات Apple فقط؛ ويعمل PocketPal AI وPrivate Mind كلاهما على أندرويد.',
          '**الأجهزة التي تعمل بإصدار أقدم من iOS 26 أو بذاكرة أقل من 6 GB.** فهذان هما الحدان الأدنيان اللذان تضعهما الصفحة والموقع.',
          '**كل من يريد قائمة معلنة بميزات الشريحة المدفوعة.** ما يفتحه MLXHub Plus غير موثّق؛ فجرّب الطبقة المجانية أولًا.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل MLXHub مجاني؟',
            a: 'تنزيله مجاني مع مشتريات داخل التطبيق: MLXHub Plus بسعر $6.99 شهريًا أو $44.99 سنويًا أو $229.99 مدى الحياة، كما تعرض صفحة App Store.',
          },
          {
            q: 'من يطوّر MLXHub؟',
            a: 'Juan Colilla، وسطر حقوق النشر "DreamFoundries EU". أما تطبيق mlxhub.ai فمنتج مختلف لنظام macOS فقط.',
          },
          {
            q: 'هل يرسل MLXHub محادثاتي إلى أي مكان؟',
            a: 'يقول الموقع إن الاستدلال يجري بالكامل على الجهاز. وتُرسل بيانات استخدام وتشخيص مجهولة منذ الإصدار 2.0.0، ويمكن إيقافها من الإعدادات.',
          },
          {
            q: 'هل يعمل MLXHub على أندرويد؟',
            a: 'لا. تغطي الصفحة الآيفون والآيباد، وبحسب المتجر توافق أجهزة ماك بمعالج Apple M1 وApple Vision Pro فقط.',
          },
          {
            q: 'ما النماذج التي يمكنني تشغيلها؟',
            a: 'نماذج نصية ونماذج رؤية مفتوحة بصيغة MLX من Hugging Face. وتذكر الصفحة Qwen3.6 35B-A3B وBonsai 2 27B ونماذج Gemma.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content: [
          'يبدو MLXHub مناسبًا على الورق لمن يملك آيبادًا أو آيفون حديثًا ويريد دردشة MLX دون إنترنت، مع خيار استخدام الجهاز كنقطة وصول محلية أو تجميع عدة أجهزة لتشغيل نموذج أكبر.',
          'التحفظان هما الشفافية وحداثة التطبيق: فهو مغلق المصدر، وميزات Plus غير موثّقة، والسرعة عند تقسيم النموذج على عدة أجهزة غير منشورة، وأظهرت الصفحة سبعة تقييمات فقط وقت المراجعة.',
          'إذا كنت تريد مصدرًا مفتوحًا فابدأ بـ[Private Mind](/ar/power-local-llm/private-mind-review). وإذا أردت خادم الشبكة المحلية أو تقسيم النموذج على عدة أجهزة، فجرّب الطبقة المجانية من MLXHub أولًا.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[MLXHub: Local AI & LLM Server على App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144) — الإصدار والسعر والمتطلبات والميزات والمطوّر.',
          '[الموقع الرسمي لـ MLXHub](https://mlxhub.app) — وصف الميزات ومتطلبات الجهاز والأسئلة الشائعة، بما فيها بيان التحليلات.',
          '[سياسة خصوصية MLXHub](https://mlxhub.app/privacy) — صفحة السياسة المرتبطة من الموقع الرسمي.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Locally AI](/ar/power-local-llm/locally-ai-review) — تطبيق يعمل على الجهاز لأجهزة آيفون وآيباد وماك، مجاني مع ميزات مدفوعة.',
          '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مفتوح المصدر يعمل دون إنترنت على آيفون وأندرويد.',
          '[مراجعة Oscilla](/ar/power-local-llm/oscilla-review) — تطبيق iOS بكتالوج ثابت من النماذج على الجهاز.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — دردشة مفتوحة المصدر على الجهاز لنظامي iOS وأندرويد.',
          '[مراجعة mlx-serve](/ar/power-local-llm/mlx-serve-review) — خادم استدلال أصلي لأجهزة ماك بمعالج Apple silicon.',
          '[الدليل الكامل لبرمجيات LLM المحلية](/ar/power-local-llm/local-llm-software-directory) — دليل أوسع لأدوات LLM المحلية عبر المنصات.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-05',
    dateModified: '2026-10-05',
    next_refresh_due: '2027-04-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/mlxhub-review-hero-ko.webp',
    title: 'MLXHub 리뷰: 아이폰과 아이패드용 온디바이스 MLX 채팅 및 LAN 서버',
    seoTitle: 'MLXHub 리뷰: 아이폰용 온디바이스 MLX 채팅 및 LAN 서버',
    intro:
      'MLXHub는 Apple의 MLX 프레임워크로 오픈 모델을 기기에서 직접 실행하고, 같은 네트워크의 다른 앱에 모델을 제공하며, 큰 모델 하나를 사용자 소유의 여러 기기에 나눠 올릴 수도 있는 아이폰 및 아이패드 앱입니다. 이 리뷰는 App Store 목록과 공식 사이트에 문서화된 내용, 불분명한 부분, 그리고 다른 iOS 로컬 AI 앱과의 비교를 다룹니다.',
    metaDescription:
      'MLXHub 리뷰: OpenAI 호환 LAN 서버와 다중 기기 모델 분할을 지원하는 온디바이스 MLX 모델용 아이폰 및 아이패드 앱. 가격, iOS 26 및 RAM 요구 사항, 개인정보 보호, 한계.',
    twitterDescription:
      'MLXHub 리뷰: MLX 모델을 오프라인으로 실행하고, LAN으로 제공하며, 큰 모델을 여러 기기에 나누는 프리미엄 iOS/iPadOS 앱. 요구 사항, 가격, 개인정보 보호, 한계.',
    audience:
      '오픈 모델을 오프라인으로 실행하고, 필요하면 기기를 로컬 OpenAI 호환 엔드포인트로 쓰고 싶은 아이폰 및 아이패드 사용자 대상 — 기능, 요구 사항, 가격, 개인정보 보호, 한계, 대안을 다룹니다.',
    readTime: '8분 소요',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'MLXHub 리뷰',
    targetKeywords: [
      'mlxhub 리뷰',
      'mlxhub ios 앱',
      'mlx 아이폰 llm 앱',
      '아이폰 오프라인 llm 실행',
      '아이폰 openai 호환 서버',
      '아이폰 아이패드 분산 추론',
      'mlx swift 앱',
      '아이패드 로컬 ai 앱',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'A17 Pro', 'M1'],
    leadAnswerBlock:
      '**MLXHub는 Apple silicon에서 오픈 언어 모델과 비전 모델을 오프라인으로 실행하고, Wi-Fi에서 OpenAI 호환 서버로 제공하며, 한 기기로는 올릴 수 없는 모델을 여러 기기를 묶어 불러올 수 있는 프리미엄 방식의 비공개 소스 iOS 및 iPadOS 앱입니다.** App Store 목록에 따르면 iOS 또는 iPadOS 26.0 이상이 필요하고, 내려받는 데는 비용이 들지 않으며, 앱 내 구매로 MLXHub Plus를 판매합니다. 이 리뷰는 버전 2.2.0을 다루며, 직접 테스트한 결과가 아니라 공개 목록과 공식 사이트에 근거합니다.',
    quickAnswerTop: {
      ko: {
        question: '아이폰이나 아이패드에서 로컬 AI를 쓰려면 MLXHub를 설치할 가치가 있나요?',
        answer:
          '네, RAM 6 GB 이상에 iOS 26을 쓰는 Apple silicon 아이폰이나 아이패드가 있고, 오프라인 채팅과 함께 LAN 엔드포인트 또는 다중 기기 모델 분할을 원한다면 그렇습니다. 오픈소스, 안드로이드, 또는 확정된 무료 기능 목록이 필요하다면 건너뛰세요. 코드가 공개되어 있지 않고, 목록에는 MLXHub Plus가 무엇을 열어 주는지 나와 있지 않습니다. Locally AI와 Private Mind는 더 단순한 온디바이스 대안입니다.',
        bullets: [
          '앱 내 구매가 있는 무료 다운로드: Plus는 월 $6.99, 연 $44.99, 평생 $229.99.',
          'mlx-swift를 통해 오픈 텍스트 및 비전 모델을 기기에서 실행하며, 모델은 Hugging Face에서 받음.',
          'OpenAI 방식의 /v1/chat/completions 및 /v1/embeddings 경로를 제공하는 선택형 LAN 서버.',
          '분산 추론으로 같은 네트워크에 페어링한 내 기기들에 모델 하나를 나눠 올림.',
          '6 GB 이상 RAM의 Apple silicon에서 iOS 또는 iPadOS 26.0 이상 필요.',
        ],
        updatedDate: '2026-10-05',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'MLXHub 받기', anchor: 'get-it' },
      { label: 'MLXHub 한눈에 보기', anchor: 'at-a-glance' },
      { label: 'MLXHub란 무엇인가', anchor: 'what-is-mlxhub' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '기능', anchor: 'features' },
      { label: 'LAN 서버와 분산 추론', anchor: 'lan-and-distributed' },
      { label: '기기 요구 사항', anchor: 'requirements' },
      { label: '가격 및 개인정보 보호', anchor: 'privacy' },
      { label: '장단점: 이점과 한계', anchor: 'tradeoffs' },
      { label: 'MLXHub 대 대안 앱', anchor: 'vs-alternatives' },
      { label: 'MLXHub를 사용해야 하는 사람', anchor: 'who-should-use' },
      { label: 'MLXHub를 사용하지 말아야 하는 사람', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '총평', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '개발자 Juan Colilla가 만든 MLXHub는 Apple의 MLX 프레임워크로 오픈 모델을 오프라인에서 실행하고, 네트워크에 모델을 제공하며, 모델 하나를 여러 기기에 나눌 수도 있는 프리미엄 방식의 아이폰 및 아이패드 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '주머니 속에 들어 있는 모델 실행기라고 생각하면 됩니다. 모델을 내려받고 나면 인터넷 없이 채팅이 되고, 같은 기기가 집 안의 다른 앱을 위한 작은 비공개 AI 서버 역할도 할 수 있습니다.',
          },
        ],
        items: [
          '검토한 버전: 2.2.0, [App Store 목록](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144)에 표시된 버전.',
          '가격: 내려받기는 무료이며, MLXHub Plus는 월 $6.99, 연 $44.99, 평생 $229.99로 표시되어 있음.',
          '플랫폼: iOS 및 iPadOS 26.0 이상이며, 공식 사이트는 Apple silicon과 6 GB 이상의 RAM을 요구함.',
          '주요 기능: LAN 서버, 다중 기기 모델 분할, 도구와 스킬, Hugging Face 미러.',
          '개방성: 비공개 소스; 공개 저장소를 찾지 못함.',
        ],
      },
      getItMlxhub: {
        id: 'get-it',
        title: 'MLXHub 받기',
        content: [
          '**MLXHub는 Apple App Store로 배포됩니다.** 앱 용량은 73 MB이며 앱 내 구매가 있는 무료 앱입니다.',
          '이 리뷰는 MLXHub를 다른 모바일 및 데스크톱 로컬 AI 도구와 함께 소개하는 PromptQuorum의 [로컬 LLM 소프트웨어 디렉터리](/ko/power-local-llm/local-llm-software-directory)와 짝을 이루는 콘텐츠입니다.',
        ],
        columns: ['경로', '받는 방법'],
        rows: [
          {
            '경로': 'Apple App Store',
            '받는 방법': '[App Store의 MLXHub: Local AI & LLM Server](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144)',
          },
          {
            '경로': '공식 사이트',
            '받는 방법': '[mlxhub.app](https://mlxhub.app)',
          },
          {
            '경로': '개인정보 처리방침',
            '받는 방법': '[MLXHub 개인정보 처리방침](https://mlxhub.app/privacy)',
          },
        ],
        note: '공개 소스 저장소는 찾지 못했습니다. 안드로이드 빌드는 없으며, 목록은 Apple 플랫폼만 다룹니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'MLXHub 한눈에 보기',
        columns: ['항목', 'MLXHub'],
        rows: [
          { '항목': '플랫폼', 'MLXHub': 'iOS, iPadOS(26.0 이상)' },
          { '항목': '가격', 'MLXHub': '무료, 앱 내 구매' },
          { '항목': '라이선스', 'MLXHub': '비공개 소스' },
          { '항목': '완전 오프라인 실행', 'MLXHub': '예, 모델을 내려받은 후' },
          { '항목': '앱 내 모델 다운로드', 'MLXHub': '예, Hugging Face에서' },
          { '항목': '이미지 입력', 'MLXHub': '예, 비전-언어 모델' },
          { '항목': '로컬 API 서버', 'MLXHub': '예, LAN에서 OpenAI 호환' },
          { '항목': '음성 입력/출력', 'MLXHub': '목록에 명시되어 있지 않음' },
        ],
        note: '항목은 로컬 LLM 소프트웨어 디렉터리에서 사용하는 모바일 채팅 비교 기준을 따릅니다. App Store 목록과 공식 사이트를 근거로 하며, 두 곳이 모든 기능을 다루지는 않습니다.',
      },
      whatIsMlxhub: {
        id: 'what-is-mlxhub',
        title: 'MLXHub란 무엇인가',
        content: [
          '**MLXHub는 무엇보다 온디바이스 모델 실행기이고, 채팅 클라이언트는 그다음입니다.** 목록의 소개 문구는 "private offline chat & tools"이며, "run supported larger models and serve chat and embeddings across your local network"라고 설명합니다(둘 다 영어 목록의 원문 인용). 공식 사이트는 Apple silicon용 Apple의 MLX 프레임워크인 mlx-swift 위에서 Swift로 네이티브하게 만들었다고 밝힙니다.',
          '개발자 Juan Colilla가 배포하며 저작권 표기는 "DreamFoundries EU"입니다. 이름이 같지만 다른 개발자가 만든 macOS 전용 앱 [mlxhub.ai](https://mlxhub.ai/)와 혼동하지 마세요.',
          '이 리뷰는 App Store 목록과 공식 사이트에만 근거합니다. 직접 테스트한 내용은 포함하지 않으므로 속도, 안정성, 답변 품질은 평가하지 않았습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**설정은 App Store 설치 후 Hugging Face에서 모델을 내려받는 것입니다.** 목록은 첫 실행 과정을 문서화하지 않으므로, 아래 단계는 목록과 사이트에 명시된 내용을 따릅니다.',
        ],
        numberedItems: [
          {
            title: '기기와 운영체제 확인하기',
            whyItMatters: '목록에서 iOS 또는 iPadOS 26.0 이상을 요구하며, 공식 사이트는 6 GB 이상의 RAM을 갖춘 Apple silicon 기기를 요구합니다.',
          },
          {
            title: 'MLXHub 설치하기',
            whyItMatters: '[App Store](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144)에서 받으세요. 앱 용량은 73 MB입니다.',
          },
          {
            title: '모델 내려받기',
            whyItMatters: '앱 내 Hugging Face 카탈로그에서 오픈 모델을 고르세요. 앱이 기기에 맞는지 알려 주지만, Hugging Face 메타데이터가 일관되지 않을 때도 있습니다.',
          },
          {
            title: '채팅하고, 필요하면 LAN 서버 켜기',
            whyItMatters: '모델을 내려받고 나면 연결 없이도 채팅이 됩니다. LAN 서버는 선택 사항이며, 같은 Wi-Fi의 다른 앱이 불러온 모델을 쓸 수 있게 해 줍니다.',
          },
        ],
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**MLXHub의 강점은 모델 실행기를 둘러싼 폭넓은 기능입니다.** 아래 내용은 모두 App Store 목록과 공식 사이트에서 가져온 것입니다.',
        ],
        items: [
          '**모델.** Hugging Face에서 오픈 텍스트 모델과 비전-언어 모델을 내려받으며, 목록에는 Qwen3.6 35B-A3B, Bonsai 2 27B, Gemma 모델이 명시되어 있습니다. 텍스트 전용 채팅은 메모리를 아끼기 위해 필요할 때만 비전 구성 요소를 불러옵니다.',
          '**메모리와 스킬.** 메모리 시스템이 대화 속 정보를 기억하고, 재사용 가능한 사용자 지정 스킬을 만들 수 있습니다.',
          '**네이티브 도구.** 미리 정의된 도구가 캘린더, 미리 알림, 건강, 사진, 음악 라이브러리 같은 Apple 프레임워크에 접근하며, 각 도구가 무엇을 할 수 있는지는 목록에 나와 있지 않습니다.',
          '**속도와 적합성.** KV 캐싱이 여러 턴의 채팅 속도를 높이고, RAM 스트레스 테스트가 모델을 불러오기 전에 기기의 메모리 여유를 측정합니다.',
          '**모델 전환과 미러.** 대화 도중 텍스트 모델과 비전 모델을 전환할 수 있고, Hugging Face가 차단된 환경에서는 커뮤니티 Hugging Face 미러를 쓸 수 있습니다.',
          '**대형 모델 스트리밍.** 목록은 Qwen3.6 35B-A3B 같은 더 큰 모델을 위한 NAND 전문가 스트리밍을 언급하지만 자세한 설명은 없습니다.',
          '**언어.** 인터페이스는 영어 외에 11개 언어로 제공됩니다.',
        ],
      },
      lanAndDistributed: {
        id: 'lan-and-distributed',
        title: 'LAN 서버와 분산 추론',
        content: [
          '**LAN 서버는 기기를 작은 OpenAI 호환 엔드포인트로 바꿔 줍니다.** 목록에는 /v1/chat/completions 및 /v1/embeddings 경로가 명시되어 있습니다. 공식 사이트에 따르면 같은 Wi-Fi의 누구나 브라우저에서 열어 불러온 모델과 대화할 수 있는 간단한 채팅 페이지도 제공하며, 로컬 인터페이스에만 바인딩되고 포트 포워딩은 쓰지 않습니다.',
          '**분산 추론은 사용자 소유의 여러 기기를 묶습니다.** 한 기기가 호스트가 되고 나머지가 참여해 각각 모델 레이어의 일부를 맡으므로, 한 기기로는 올릴 수 없는 모델도 불러올 수 있습니다. 사이트는 기기가 페어링되고 통신이 암호화되며 네트워크 밖으로 아무것도 나가지 않는다고 밝힙니다. Wi-Fi에서의 처리 속도는 공개되어 있지 않으므로, 모델이 들어가는 기기 한 대보다는 느릴 것으로 예상하세요.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: '기기 요구 사항',
        content: [
          '**MLXHub에는 iOS 또는 iPadOS 26.0 이상, Apple silicon 기기, 6 GB 이상의 RAM이 필요합니다.** 공식 사이트는 A17 Pro 또는 M1 이상의 칩을 권장합니다. App Store 목록에는 같은 앱이 macOS 26.0(Apple M1 이상)과 visionOS 26.0에서도 제공된다고 표시되지만, 별도의 데스크톱 버전은 설명되어 있지 않습니다.',
          '실제 한계는 RAM입니다. Apple은 아이폰에 아이패드보다 더 엄격한 앱 메모리 제한을 적용하므로, 더 큰 모델은 아이패드에서 들어가는 경우가 더 많습니다. 사이트는 기기에 맞지 않는 모델도 간혹 내려받아질 수 있다고 경고하며, iOS가 앱을 종료하기 전에 앱이 모델 로드를 막으려 하지만 보장되지는 않는다고 밝힙니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '가격 및 개인정보 보호',
        content: [
          '**MLXHub는 내려받기는 무료이며, MLXHub Plus는 월 $6.99, 연 $44.99, 평생 구매 $229.99로 표시되어 있습니다.** 목록과 사이트 어디에도 Plus가 어떤 기능을 열어 주는지 나와 있지 않으므로, 기능에 의존하기 전에 앱 안의 결제 화면을 확인하세요. 모델은 Hugging Face에서 무료로 받으며 토큰당 요금은 없습니다.',
          '공식 사이트는 추론이 전적으로 기기에서 이루어지고, 계정이 없으며, 사용자를 식별하는 정보가 없다고 밝힙니다. 또한 버전 2.0.0부터 앱이 어떤 기능을 쓰는지, 기기 등급, 모델이 로드되었는지 여부에 대한 익명 분석 및 진단 데이터를 전송하며, 설정에서 끌 수 있다고 명시합니다.',
          '앱은 비공개 소스이고 이 리뷰에서는 네트워크 트래픽을 검사하지 않았으므로, 개인정보 보호에 관한 내용은 개발자 본인의 설명입니다. LAN 서버를 켜면 그 위의 데이터는 Wi-Fi 네트워크만큼만 비공개입니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장단점: 이점과 한계',
        columns: ['이점', '실제 사용에서의 의미', '한계 / 유의 사항'],
        rows: [
          {
            '이점': '오프라인 MLX 추론',
            '실제 사용에서의 의미': 'Apple 자체 프레임워크로 연결 없이 오픈 모델과 대화할 수 있습니다.',
            '한계 / 유의 사항': 'iOS 26과 6 GB RAM이 필요하며, 아이폰의 메모리 제한이 모델 크기를 제한합니다.',
          },
          {
            '이점': 'LAN 서버',
            '실제 사용에서의 의미': 'Wi-Fi의 다른 앱과 브라우저가 불러온 모델을 쓸 수 있습니다.',
            '한계 / 유의 사항': '기기가 켜져 있고 네트워크에 연결된 상태를 유지해야 하며, 처리 속도 수치는 공개되어 있지 않습니다.',
          },
          {
            '이점': '다중 기기 분할',
            '실제 사용에서의 의미': '내 기기 중 어느 하나로도 담을 수 없는 모델을 불러올 수 있습니다.',
            '한계 / 유의 사항': 'Wi-Fi에서의 속도는 문서화되어 있지 않으며, 호환되는 기기가 여러 대 필요합니다.',
          },
          {
            '이점': '도구, 메모리, 스킬',
            '실제 사용에서의 의미': '채팅에서 캘린더, 미리 알림, 건강 앱에 접근할 수 있습니다.',
            '한계 / 유의 사항': '목록에는 각 도구가 무엇을 하는지 설명되어 있지 않습니다.',
          },
          {
            '이점': '무료로 시작',
            '실제 사용에서의 의미': '토큰당 요금이 없고, 모델은 Hugging Face에서 무료입니다.',
            '한계 / 유의 사항': 'Plus는 평생 구매 시 최대 $229.99이며, 무엇을 열어 주는지는 명시되어 있지 않습니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'MLXHub 대 대안 앱',
        columns: ['앱', '플랫폼', '가격 및 라이선스', '모델 소스', '핵심 차이점'],
        rows: [
          {
            '앱': 'MLXHub',
            '플랫폼': 'iOS, iPadOS',
            '가격 및 라이선스': '프리미엄, 비공개 소스',
            '모델 소스': 'Hugging Face(MLX)',
            '핵심 차이점': 'LAN 서버와 다중 기기 모델 분할; 오픈소스 아님',
          },
          {
            '앱': '[Locally AI](/ko/power-local-llm/locally-ai-review)',
            '플랫폼': 'iOS, Mac',
            '가격 및 라이선스': '프리미엄, 비공개 소스',
            '모델 소스': '앱 내 모델 카탈로그',
            '핵심 차이점': '더 단순한 온디바이스 채팅; LAN 서버는 표시되어 있지 않음',
          },
          {
            '앱': '[Private Mind](/ko/power-local-llm/private-mind-review)',
            '플랫폼': 'iOS, 안드로이드',
            '가격 및 라이선스': '무료, MIT',
            '모델 소스': 'Hugging Face 다운로드',
            '핵심 차이점': '오픈소스이며 안드로이드에서도 쓸 수 있음; LAN 서버는 표시되어 있지 않음',
          },
          {
            '앱': '[Oscilla](/ko/power-local-llm/oscilla-review)',
            '플랫폼': 'iOS',
            '가격 및 라이선스': '무료, 비공개 소스',
            '모델 소스': '앱 내 모델 40개 이상',
            '핵심 차이점': '더 큰 고정 카탈로그; 런타임은 명시되어 있지 않음',
          },
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': 'iOS, 안드로이드',
            '가격 및 라이선스': '무료, MIT',
            '모델 소스': 'GGUF 모델',
            '핵심 차이점': '오픈소스, llama.cpp 기반, 크로스 플랫폼',
          },
        ],
        note: '타사 앱의 플랫폼, 가격, 기능 세부 사항은 자주 변경됩니다. 결정하기 전에 각 앱 자체의 목록에서 현재 세부 정보를 확인하세요.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'MLXHub를 사용해야 하는 사람',
        items: [
          '**기기가 담을 수 있는 가장 큰 모델을 원하는 아이패드 및 최신 아이폰 사용자.** MLX, 스트리밍, 기기 묶기는 모두 그 한계를 겨냥한 기능입니다.',
          '**주머니 속 AI 서버를 원하는 실험가.** OpenAI 호환 LAN 엔드포인트로 스크립트와 네트워크의 다른 앱이 기기를 쓸 수 있습니다.',
          '**Apple 기기를 여러 대 가진 사용자.** 다중 기기 분할은 대부분의 대안 앱이 표시하지 않는 기능입니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'MLXHub를 사용하지 말아야 하는 사람',
        items: [
          '**오픈소스가 필요한 사용자.** 코드가 공개되어 있지 않습니다. [Private Mind](/ko/power-local-llm/private-mind-review)와 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)는 오픈소스입니다.',
          '**안드로이드 사용자.** Apple 플랫폼만 표시되어 있으며, PocketPal AI와 Private Mind는 모두 안드로이드에서 실행됩니다.',
          '**iOS 26 미만이거나 RAM이 6 GB 미만인 기기.** 목록과 사이트가 그 기준을 정해 두었습니다.',
          '**유료 플랜의 확정된 기능 목록을 원하는 사용자.** MLXHub Plus가 무엇을 열어 주는지는 문서화되어 있지 않으므로 무료 이용 범위부터 써 보세요.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'MLXHub는 무료인가요?',
            a: 'App Store 목록에 표시된 대로 내려받기는 무료이며 앱 내 구매가 있습니다. MLXHub Plus는 월 $6.99, 연 $44.99, 평생 $229.99입니다.',
          },
          {
            q: 'MLXHub는 누가 만드나요?',
            a: 'Juan Colilla이며 저작권 표기는 "DreamFoundries EU"입니다. mlxhub.ai 앱은 macOS 전용인 별개의 제품입니다.',
          },
          {
            q: 'MLXHub는 내 채팅을 어딘가로 보내나요?',
            a: '사이트는 추론이 전적으로 기기에서 이루어진다고 밝힙니다. 익명 사용 및 진단 데이터는 버전 2.0.0부터 전송되며 설정에서 끌 수 있습니다.',
          },
          {
            q: 'MLXHub는 안드로이드에서 작동하나요?',
            a: '아니요. 목록은 아이폰, 아이패드, 그리고 스토어 표시에 따른 Apple M1 Mac과 Apple Vision Pro 호환성만 다룹니다.',
          },
          {
            q: '어떤 모델을 실행할 수 있나요?',
            a: 'Hugging Face의 오픈 MLX 형식 텍스트 및 비전 모델입니다. 목록에는 Qwen3.6 35B-A3B, Bonsai 2 27B, Gemma 모델이 명시되어 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content: [
          'MLXHub는 최신 아이패드나 아이폰이 있고, 오프라인 MLX 채팅과 함께 기기를 로컬 엔드포인트로 쓰거나 여러 기기를 묶어 더 큰 모델을 올리는 선택지를 원하는 사람에게 문서상으로는 잘 맞습니다.',
          '유의할 점은 투명성과 앱의 연륜입니다. 비공개 소스이고, Plus 기능은 문서화되어 있지 않으며, 다중 기기 분할의 속도는 공개되어 있지 않고, 검토 시점에 목록의 평점은 일곱 개뿐이었습니다.',
          '오픈소스를 원한다면 [Private Mind](/ko/power-local-llm/private-mind-review)부터 시작하세요. LAN 서버나 다중 기기 분할을 원한다면 MLXHub의 무료 이용 범위부터 먼저 써 보세요.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 MLXHub: Local AI & LLM Server](https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144) — 버전, 가격, 요구 사항, 기능, 개발자.',
          '[MLXHub 공식 사이트](https://mlxhub.app) — 기능 설명, 기기 요구 사항, FAQ(분석 데이터 관련 설명 포함).',
          '[MLXHub 개인정보 처리방침](https://mlxhub.app/privacy) — 공식 사이트에서 연결된 방침 페이지.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Locally AI 리뷰](/ko/power-local-llm/locally-ai-review) — 아이폰, 아이패드, Mac용 프리미엄 온디바이스 앱.',
          '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — 아이폰과 안드로이드용 오픈소스 오프라인 채팅 앱.',
          '[Oscilla 리뷰](/ko/power-local-llm/oscilla-review) — 온디바이스 모델의 고정 카탈로그를 갖춘 iOS 앱.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS와 안드로이드용 오픈소스 온디바이스 채팅.',
          '[mlx-serve 리뷰](/ko/power-local-llm/mlx-serve-review) — Apple silicon Mac용 네이티브 추론 서버.',
          '[완전한 로컬 LLM 소프트웨어 디렉터리](/ko/power-local-llm/local-llm-software-directory) — 플랫폼 전반의 로컬 LLM 도구에 대한 더 광범위한 디렉터리.',
        ],
      },
    },
  },
}
