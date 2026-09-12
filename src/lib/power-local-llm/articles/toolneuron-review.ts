// ToolNeuron Review: Open-Source Encrypted On-Device AI App for Android
// Slug: toolneuron-review
// Companion to: layla-review, rikkahub-review, maid-review, pocketpal-ai-review,
// best-local-llm-apps-android-2026, local-llm-software-directory

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/toolneuron-review-hero-en.webp',
    title: 'ToolNeuron Review (2026): Open-Source Encrypted Android AI App',
    seoTitle: 'ToolNeuron Review 2026: Encrypted Android AI Chat App',
    intro:
      '[ToolNeuron](https://play.google.com/store/apps/details?id=com.dark.tool_neuron), built by developer [Siddhesh Sonar](https://github.com/Siddhesh2377) and published as open source under the [MIT license](https://github.com/Siddhesh2377/ToolNeuron/blob/re-write/LICENSE), is a free Android app that runs GGUF language models on-device via llama.cpp, with document RAG, voice input/output, an OpenAI-compatible local HTTP server, and a plugin system layered on top. Per the project\'s own README, the app makes "no Google Play services, no telemetry, no cloud" its core design goal, backing that with Android Keystore-based AES-256-GCM encryption and Argon2id authentication for stored data. This review covers what the app does, what it requires, and where it fits next to other on-device Android chat apps like Layla and RikkaHub, based on the project\'s public GitHub repository and Play Store listing rather than independent hands-on testing.',
    metaDescription:
      'ToolNeuron review 2026: free, open-source (MIT) Android app for encrypted on-device AI chat, document RAG, voice, and local image generation. Requirements, security model, and how it compares to Layla and RikkaHub.',
    twitterDescription:
      'ToolNeuron review: a free, open-source Android app that runs GGUF models fully on-device — encrypted local storage, document RAG, voice input/output, an OpenAI-compatible local server, and a plugin system. No cloud, no telemetry, per the project\'s own README.',
    audience:
      'Android users considering a free, open-source, privacy-focused on-device AI chat app — covers the security model, supported features, hardware requirements, and how it compares to other Android local-AI apps reviewed on this site.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'ToolNeuron review',
    targetKeywords: [
      'toolneuron review',
      'toolneuron android',
      'toolneuron app',
      'open source local ai android',
      'encrypted offline ai chat app',
      'on-device llm android app',
      'toolneuron vs layla',
      'free local ai app android',
    ],
    current_models_mentioned: ['Llama', 'Mistral', 'Gemma', 'GGUF models'],
    current_hardware_mentioned: ['Android 12'],
    leadAnswerBlock:
      '**ToolNeuron is a free, open-source (MIT) Android app that runs GGUF language models entirely on-device via llama.cpp, with document RAG, voice input/output, and an OpenAI-compatible local HTTP server — no cloud component, no telemetry, per the project\'s own README.** Built by developer [Siddhesh Sonar](https://github.com/Siddhesh2377), the app wraps its local storage in Android Keystore-backed AES-256-GCM encryption and Argon2id authentication, and requires Android 12 (API 31) or newer. Readers who want a comparison point should also read the [Layla review](/power-local-llm/layla-review) or [RikkaHub review](/power-local-llm/rikkahub-review).',
    quickAnswerTop: {
      en: {
        question: 'Is ToolNeuron worth installing?',
        answer:
          'Yes, if you want a free, open-source Android app that runs AI models fully on-device with encrypted local storage and no cloud dependency, and your phone runs Android 12 or newer. It adds document chat (RAG), voice input/output, and a local OpenAI-compatible API server on top of plain chat — features many single-purpose chat apps skip. Skip it if you want an iPhone app (it is Android-only) or prefer a much larger, more established curated model library; compare it against Layla or RikkaHub first.',
        bullets: [
          'Free and open source under the MIT license; no in-app purchases documented in the project\'s own repository.',
          'Runs GGUF models (Llama, Mistral, Gemma, and other GGUF-compatible families) on-device via llama.cpp, per the GitHub repository.',
          'Adds document RAG (PDF, DOCX, XLSX, and more), voice input/output via sherpa-onnx, a local OpenAI-compatible HTTP server, and a plugin system.',
          'Local storage is encrypted with Android Keystore AES-256-GCM and Argon2id authentication, per the project\'s README.',
          'Requires Android 12 (API 31) or newer on an arm64-v8a or x86_64 device, per the project\'s build configuration.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get ToolNeuron', anchor: 'get-it' },
      { label: 'What ToolNeuron Is', anchor: 'what-is-toolneuron' },
      { label: 'Who Built ToolNeuron', anchor: 'who-built-it' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Supported Models and Features', anchor: 'models-and-features' },
      { label: 'Requirements', anchor: 'requirements' },
      { label: 'Privacy and Security', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'ToolNeuron vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use ToolNeuron', anchor: 'who-should-use' },
      { label: 'Who Should Not Use ToolNeuron', anchor: 'who-should-not-use' },
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
            text: 'ToolNeuron is a free, open-source (MIT) Android app by developer Siddhesh Sonar that runs GGUF language models on-device via llama.cpp, adding encrypted local storage, document RAG, voice input/output, a local OpenAI-compatible HTTP server, and a plugin system, with no cloud component or telemetry per the project\'s own README.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a free, open-source Android chat app that also lets you talk to your own documents and use voice, all running on your phone with the encryption you would expect from a security-conscious project — not a simple wrapper around a cloud API.',
          },
        ],
        items: [
          'Price: free to [download](https://play.google.com/store/apps/details?id=com.dark.tool_neuron) and use; open source under the MIT license, no in-app purchases documented in the repository.',
          'Developer: [Siddhesh Sonar](https://github.com/Siddhesh2377).',
          'Engine: [llama.cpp](https://github.com/ggml-org/llama.cpp) for GGUF chat models, plus [sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) for voice, running entirely on-device.',
          'Features beyond chat: document RAG (PDF, DOCX, XLSX, PPTX, EPUB, and more), voice input/output, a local OpenAI-compatible HTTP server, a HuggingFace model browser, and a sandboxed plugin system, per the project\'s README.',
          'Security: local data is encrypted with Android Keystore AES-256-GCM and Argon2id authentication, per the project\'s own documentation.',
          'Requirement: Android 12 (API 31) or newer, on arm64-v8a or x86_64 hardware, per the project\'s build configuration.',
          'Open source status: MIT license, source published on [GitHub](https://github.com/Siddhesh2377/ToolNeuron) — independently auditable, unlike closed-source alternatives.',
          'Distribution: available on [Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron) and as direct APK downloads from GitHub Releases.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get ToolNeuron',
        content: [
          '**ToolNeuron is available from Google Play or as a direct APK download from its GitHub Releases page.** Both distribution channels carry the same open-source app.',
          'This review is a companion to PromptQuorum\'s [Local LLM Software Directory](/power-local-llm/local-llm-software-directory), which indexes local-AI tools across platforms, including ToolNeuron\'s own entry.',
        ],
        columns: ['Channel', 'Get It'],
        rows: [
          {
            'Channel': 'Google Play',
            'Get It': '[ToolNeuron on Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)',
          },
          {
            'Channel': 'GitHub (APK)',
            'Get It': '[ToolNeuron Releases on GitHub](https://github.com/Siddhesh2377/ToolNeuron/releases)',
          },
        ],
        note: 'The app is free either way — GitHub also hosts the full source code for readers who want to audit or build it themselves.',
      },
      whatIsToolNeuron: {
        id: 'what-is-toolneuron',
        title: 'What ToolNeuron Is',
        content: [
          '**ToolNeuron is an Android app that runs GGUF-format language models directly on the device through llama.cpp, with no server-side component.** Per the project\'s own description, it aims to be "on-device AI for Android. No Google Play services, no telemetry, no cloud" — models, chats, documents used for retrieval, and encryption key material are all designed to stay on the phone.',
          'Beyond plain chat, the app bundles document retrieval (RAG) over common file formats, voice input and output through the sherpa-onnx speech engine, a local HTTP server that exposes an OpenAI-compatible API for other apps to connect to, a built-in Hugging Face model browser, and a sandboxed plugin system for installing extra capabilities.',
          'This review relies on the project\'s public GitHub repository — its README, license file, and repository metadata — and the Google Play listing, rather than an independent code audit or hands-on benchmarking.',
        ],
      },
      whoBuiltIt: {
        id: 'who-built-it',
        title: 'Who Built ToolNeuron',
        content: [
          '**ToolNeuron is built and maintained by developer [Siddhesh Sonar](https://github.com/Siddhesh2377), who publishes the project openly on GitHub under the MIT license.** The repository shows active, detailed development: a documented security architecture, a modular codebase split across app, inference, encryption, and networking components, and a public Discord community for users and contributors.',
          'Because the source is published rather than closed, claims about what the app does — and does not do — with local data can be checked directly against the code, rather than resting solely on the developer\'s own description.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setting up ToolNeuron takes a few steps and no account creation.** The overall process, from install to a first offline response, takes a few minutes plus however long the chosen model takes to download.',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Get [ToolNeuron from Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron), or download the APK directly from [GitHub Releases](https://github.com/Siddhesh2377/ToolNeuron/releases). The app itself is free either way.',
          },
          {
            title: 'Set up local encryption',
            whyItMatters: 'The app sets up its Android Keystore-backed encryption and a 6-digit PIN on first run, per the project\'s security documentation, before chat data is stored.',
          },
          {
            title: 'Browse and download a GGUF model',
            whyItMatters: 'Use the built-in Hugging Face browser to find a compatible GGUF model, or supply your own. This step requires an internet connection; chat afterward does not.',
          },
          {
            title: 'Chat, or add documents for RAG',
            whyItMatters: 'Once a model is downloaded, chat runs fully on-device via llama.cpp. Attach a supported document (PDF, DOCX, and others) to a conversation to have the model answer from it.',
          },
          {
            title: 'Optional: enable voice or the local API server',
            whyItMatters: 'Voice input/output and the OpenAI-compatible local HTTP server are both optional features layered on top of plain chat — neither is required to use the app.',
          },
        ],
        note: 'Exact model compatibility and download sizes vary by the GGUF file chosen — confirm a model\'s size and licensing on its own Hugging Face page before downloading on a limited data plan.',
      },
      modelsAndFeatures: {
        id: 'models-and-features',
        title: 'Supported Models and Features',
        content: [
          '**ToolNeuron runs any compatible GGUF-format model, including common families such as Llama, Mistral, and Gemma, through [llama.cpp](https://github.com/ggml-org/llama.cpp).** A built-in Hugging Face browser lets readers filter available models by pipeline tag, parameter count, quantization, and license before downloading.',
          'Beyond chat, the project\'s own README lists: document RAG over PDF, DOCX, XLSX, PPTX, ODT, EPUB, RTF, Markdown, HTML, JSON, XML, CSV, and plain text; voice input and output through the sherpa-onnx engine (VITS, Piper, and Whisper voices); local image generation, added to the app in May 2026 per the project\'s changelog notes; a local HTTP server exposing an OpenAI-compatible API with its own web UI; and a sandboxed plugin system for installing community-built extensions.',
          'This is a broader feature set than a single-purpose chat client, and each feature runs through the same on-device engine rather than calling out to a cloud service, per the project\'s documentation.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements',
        content: [
          '**ToolNeuron requires Android 12 (API level 31) or newer, on arm64-v8a or x86_64 hardware, per the project\'s public build configuration.** As with any on-device LLM app, the practical hardware floor depends more on which GGUF model is loaded — its parameter count and quantization — than on a single fixed spec; a small quantized model needs far less memory than a large one.',
          'Readers on older Android versions or 32-bit-only devices should expect the app not to install, since minimum-SDK and ABI filters are enforced by the Android package itself, not just a soft recommendation.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Security',
        content: [
          '**ToolNeuron\'s stated design goal is to avoid any cloud dependency: no Google Play services requirement, no telemetry, and no server-side component for its core chat and RAG features, per the project\'s own README.**  This is reinforced by an unusually detailed, publicly documented security architecture rather than a one-line privacy claim.',
          'Local data — including the encryption key material itself — is protected with an Android Keystore-backed AES-256-GCM key (StrongBox-preferred where the device supports it) and Argon2id-based PIN authentication, per the project\'s security documentation. The same documentation describes a lockout mechanism that escalates after repeated failed PIN attempts, and an optional panic-PIN feature that wipes local app data.',
        ],
        items: [
          '**No account required.** The app can be installed and used without creating a profile or signing in.',
          '**No cloud component for core features.** Chat, RAG, and voice are all designed to run on-device, per the project\'s README.',
          '**Encrypted local storage.** Chats, documents, and encryption keys are protected with Android Keystore AES-256-GCM and Argon2id authentication, per the project\'s documentation.',
          '**Open-source code.** Because the app\'s source is published under the MIT license, its architecture and data-handling claims can be checked directly against the code rather than resting only on the developer\'s statements.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Free and open source (MIT)',
            'What it means in real use': 'No cost, and the full source is available to audit on GitHub.',
            'Limitation / caveat': 'Being open source does not by itself guarantee an independent security audit has been performed.',
          },
          {
            'Benefit': 'Broader feature set than plain chat',
            'What it means in real use': 'Document RAG, voice, a local API server, and plugins are all bundled in, not separate apps to manage.',
            'Limitation / caveat': 'More moving parts than a single-purpose chat app; this review has not independently verified every feature\'s reliability.',
          },
          {
            'Benefit': 'Detailed, documented security model',
            'What it means in real use': 'Encrypted local storage and PIN-based authentication protect data if the phone is lost or accessed by someone else.',
            'Limitation / caveat': 'The security documentation is the project\'s own; this review has not independently penetration-tested the app.',
          },
          {
            'Benefit': 'No cloud dependency for core features',
            'What it means in real use': 'Chat, RAG, and voice all run offline once a model is downloaded, per the project\'s README.',
            'Limitation / caveat': 'Android-only — no iPhone, desktop, or web version exists.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'ToolNeuron vs. Alternatives',
        columns: ['App', 'Platforms', 'Price', 'Model flexibility', 'Key difference'],
        rows: [
          {
            'App': 'ToolNeuron',
            'Platforms': 'Android only',
            'Price': 'Free, open source (MIT)',
            'Model flexibility': 'Any GGUF model via a built-in Hugging Face browser',
            'Key difference': 'Broadest feature set here — RAG, voice, local API server, and plugins alongside chat',
          },
          {
            'App': '[Layla](/power-local-llm/layla-review)',
            'Platforms': 'Android and iOS',
            'Price': '$19.99 one-time purchase, plus in-app tiers',
            'Model flexibility': 'GGUF, LiteRT-LM, and PTE model backends',
            'Key difference': 'Persona and roleplay focus, with an optional opt-in cloud mode; closed source',
          },
          {
            'App': '[RikkaHub](/power-local-llm/rikkahub-review)',
            'Platforms': 'Android only',
            'Price': 'Free, open source',
            'Model flexibility': 'GGUF models, per its own listing',
            'Key difference': 'Another free, open-source Android option — compare feature depth directly',
          },
          {
            'App': '[Maid](/power-local-llm/maid-review)',
            'Platforms': 'Android and iOS',
            'Price': 'Free, open source',
            'Model flexibility': 'GGUF models via llama.cpp',
            'Key difference': 'Cross-platform (iOS too), simpler single-purpose chat client',
          },
        ],
        note: 'Platform, price, and feature details for third-party apps change frequently — verify current specifics on each app\'s own listing before deciding.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use ToolNeuron',
        items: [
          '**Android users who want a free, open-source, on-device AI app.** The full source is public, and there is no cost to install or use it.',
          '**Readers who want more than plain chat.** Document RAG, voice input/output, and a local API server are bundled in rather than requiring separate apps.',
          '**Privacy-conscious users who value a documented security model.** Encrypted local storage and PIN-based authentication go beyond a simple privacy policy statement.',
          '**Developers who want to extend the app.** The plugin system and open-source codebase allow direct customization, unlike a closed-source alternative.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use ToolNeuron',
        items: [
          '**iPhone, desktop, or web users.** ToolNeuron is Android-only; there is no iOS, Mac, Windows, Linux, or browser-based version.',
          '**Owners of devices on Android 11 or older, or 32-bit-only hardware.** The app requires Android 12 (API 31) or newer on arm64-v8a or x86_64.',
          '**Readers who need an established track record before trusting an app.** ToolNeuron is newer and has a smaller public track record than some longer-running alternatives.',
          '**Readers who want a single, simple chat app with nothing else.** The broader feature set (RAG, voice, plugins, a local server) is a benefit for some readers and unnecessary complexity for others.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is ToolNeuron free?',
            a: 'Yes. ToolNeuron is free to install and use, and open source under the MIT license, per its GitHub repository.',
          },
          {
            q: 'Who makes ToolNeuron?',
            a: 'ToolNeuron is built and maintained by developer [Siddhesh Sonar](https://github.com/Siddhesh2377).',
          },
          {
            q: 'What models does ToolNeuron support?',
            a: 'Any compatible GGUF-format model, including common families such as Llama, Mistral, and Gemma, run through [llama.cpp](https://github.com/ggml-org/llama.cpp). A built-in Hugging Face browser helps find and download models.',
          },
          {
            q: 'Does ToolNeuron work without an internet connection?',
            a: 'Yes, for its core features. The project\'s README states the app has no cloud component and no telemetry; an internet connection is needed only to download a model or app update.',
          },
          {
            q: 'What Android version does ToolNeuron need?',
            a: 'Android 12 (API level 31) or newer, on arm64-v8a or x86_64 hardware, per the project\'s public build configuration.',
          },
          {
            q: 'Is ToolNeuron open source?',
            a: 'Yes. The app is published on [GitHub](https://github.com/Siddhesh2377/ToolNeuron) under the MIT license, and the source can be audited or built directly.',
          },
          {
            q: 'What extra features does ToolNeuron have beyond chat?',
            a: 'Document RAG over common file formats, voice input and output via sherpa-onnx, a local OpenAI-compatible HTTP server, a Hugging Face model browser, and a sandboxed plugin system, per the project\'s README.',
          },
          {
            q: 'How does ToolNeuron compare to Layla or RikkaHub?',
            a: 'ToolNeuron is free and open source with a broader built-in feature set (RAG, voice, a local API server, plugins). [Layla](/power-local-llm/layla-review) is a $19.99 paid, closed-source app for both Android and iOS with a persona/roleplay focus and an optional cloud mode. [RikkaHub](/power-local-llm/rikkahub-review) is another free, open-source Android chat app. Choose based on whether you value ToolNeuron\'s broader feature set, Layla\'s cross-platform roleplay focus, or a simpler single-purpose client.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'ToolNeuron delivers a genuinely broad, free, and open-source on-device AI app for Android: GGUF chat via llama.cpp, document RAG, voice input/output, a local OpenAI-compatible API server, and a plugin system, all backed by a documented, encryption-first security architecture rather than a vague privacy promise.',
          'The published MIT-licensed source code is a meaningful advantage over closed-source Android alternatives — readers who care about verifying what an app actually does with local data can check the code directly rather than trusting a listing alone.',
          'What keeps this review measured rather than unconditionally enthusiastic is the app\'s relative youth and the absence of independent, hands-on benchmarking of its many features by PromptQuorum specifically; readers with performance-critical needs should test the app on their own device before relying on it heavily.',
          'Android users who want a free, open-source, privacy-focused app with more than plain chat should try it; readers who want an iPhone app, a simpler single-purpose client, or a more established track record should consider [Layla](/power-local-llm/layla-review) or [RikkaHub](/power-local-llm/rikkahub-review) instead.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[ToolNeuron on Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron) — pricing and distribution.',
          '[ToolNeuron GitHub repository](https://github.com/Siddhesh2377/ToolNeuron) — README, license, security documentation, and repository metadata, checked 2026-09-12.',
          '[ToolNeuron project site](https://tool-neuron.vercel.app/) — product overview.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Layla Review](/power-local-llm/layla-review) — a paid, cross-platform on-device companion app with an optional cloud mode.',
          '[RikkaHub Review](/power-local-llm/rikkahub-review) — another free, open-source Android local-AI chat app.',
          '[Maid Review](/power-local-llm/maid-review) — a free, open-source, cross-platform (Android and iOS) chat client.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source local-AI app with iOS and some Android support.',
          '[The Complete Local LLM Software Directory](/power-local-llm/local-llm-software-directory) — a broader directory of local-LLM tools across platforms.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/toolneuron-review-hero-de.webp',
    title: 'ToolNeuron im Test (2026): Open-Source-Android-App für verschlüsselte On-Device-KI',
    seoTitle: 'ToolNeuron Test 2026: Verschlüsselte Android-KI-Chat-App',
    intro:
      '[ToolNeuron](https://play.google.com/store/apps/details?id=com.dark.tool_neuron), entwickelt von [Siddhesh Sonar](https://github.com/Siddhesh2377) und als Open Source unter der [MIT-Lizenz](https://github.com/Siddhesh2377/ToolNeuron/blob/re-write/LICENSE) veröffentlicht, ist eine kostenlose Android-App, die GGUF-Sprachmodelle über llama.cpp auf dem Gerät ausführt, mit Dokumenten-RAG, Sprachein-/ausgabe, einem OpenAI-kompatiblen lokalen HTTP-Server und einem darauf aufbauenden Plugin-System. Laut eigenem README der App ist "kein Google-Play-Dienst, keine Telemetrie, keine Cloud" das zentrale Designziel, unterlegt mit AES-256-GCM-Verschlüsselung über den Android Keystore und Argon2id-Authentifizierung für gespeicherte Daten. Dieser Test behandelt, was die App leistet, was sie benötigt, und wie sie im Vergleich zu anderen On-Device-Android-Chat-Apps wie Layla und RikkaHub steht — basierend auf dem öffentlichen GitHub-Repository und dem Play-Store-Eintrag des Projekts, nicht auf einem unabhängigen Praxistest.',
    metaDescription:
      'ToolNeuron Test 2026: kostenlose, quelloffene (MIT) Android-App für verschlüsselten On-Device-KI-Chat, Dokumenten-RAG, Sprache und lokale Bildgenerierung. Anforderungen, Sicherheitsmodell und Vergleich mit Layla und RikkaHub.',
    twitterDescription:
      'ToolNeuron Test: eine kostenlose, quelloffene Android-App, die GGUF-Modelle vollständig auf dem Gerät ausführt — verschlüsselter lokaler Speicher, Dokumenten-RAG, Sprachein-/ausgabe, ein OpenAI-kompatibler lokaler Server und ein Plugin-System. Keine Cloud, keine Telemetrie, laut eigenem README des Projekts.',
    audience:
      'Android-Nutzer, die eine kostenlose, quelloffene, auf Datenschutz ausgelegte On-Device-KI-Chat-App in Betracht ziehen — behandelt das Sicherheitsmodell, unterstützte Funktionen, Hardware-Anforderungen und den Vergleich mit anderen lokalen Android-KI-Apps auf dieser Seite.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'ToolNeuron review',
    targetKeywords: [
      'toolneuron review',
      'toolneuron android',
      'toolneuron app',
      'open source local ai android',
      'encrypted offline ai chat app',
      'on-device llm android app',
      'toolneuron vs layla',
      'free local ai app android',
    ],
    current_models_mentioned: ['Llama', 'Mistral', 'Gemma', 'GGUF models'],
    current_hardware_mentioned: ['Android 12'],
    leadAnswerBlock:
      '**ToolNeuron ist eine kostenlose, quelloffene (MIT) Android-App, die GGUF-Sprachmodelle vollständig auf dem Gerät über llama.cpp ausführt, mit Dokumenten-RAG, Sprachein-/ausgabe und einem OpenAI-kompatiblen lokalen HTTP-Server — ohne Cloud-Komponente, ohne Telemetrie, laut eigenem README des Projekts.** Entwickelt von [Siddhesh Sonar](https://github.com/Siddhesh2377), verpackt die App ihren lokalen Speicher in eine über den Android Keystore abgesicherte AES-256-GCM-Verschlüsselung mit Argon2id-Authentifizierung und benötigt Android 12 (API 31) oder neuer. Leser, die einen Vergleichspunkt suchen, sollten auch den [Layla-Test](/de/power-local-llm/layla-review) oder den [RikkaHub-Test](/de/power-local-llm/rikkahub-review) lesen.',
    quickAnswerTop: {
      en: {
        question: 'Is ToolNeuron worth installing?',
        answer:
          'Yes, if you want a free, open-source Android app that runs AI models fully on-device with encrypted local storage and no cloud dependency, and your phone runs Android 12 or newer. It adds document chat (RAG), voice input/output, and a local OpenAI-compatible API server on top of plain chat — features many single-purpose chat apps skip. Skip it if you want an iPhone app (it is Android-only) or prefer a much larger, more established curated model library; compare it against Layla or RikkaHub first.',
        bullets: [
          'Free and open source under the MIT license; no in-app purchases documented in the project\'s own repository.',
          'Runs GGUF models (Llama, Mistral, Gemma, and other GGUF-compatible families) on-device via llama.cpp, per the GitHub repository.',
          'Adds document RAG (PDF, DOCX, XLSX, and more), voice input/output via sherpa-onnx, a local OpenAI-compatible HTTP server, and a plugin system.',
          'Local storage is encrypted with Android Keystore AES-256-GCM and Argon2id authentication, per the project\'s README.',
          'Requires Android 12 (API 31) or newer on an arm64-v8a or x86_64 device, per the project\'s build configuration.',
        ],
        updatedDate: '2026-09-12',
      },
      de: {
        question: 'Lohnt sich die Installation von ToolNeuron?',
        answer:
          'Ja, wenn Sie eine kostenlose, quelloffene Android-App möchten, die KI-Modelle vollständig auf dem Gerät mit verschlüsseltem lokalem Speicher und ohne Cloud-Abhängigkeit ausführt, und Ihr Telefon Android 12 oder neuer nutzt. Sie fügt Dokumenten-Chat (RAG), Sprachein-/ausgabe und einen lokalen OpenAI-kompatiblen API-Server zum reinen Chat hinzu — Funktionen, die viele Einzelzweck-Chat-Apps auslassen. Verzichten Sie darauf, wenn Sie eine iPhone-App möchten (sie ist nur für Android) oder eine deutlich größere, etabliertere kuratierte Modellbibliothek bevorzugen; vergleichen Sie sie zunächst mit Layla oder RikkaHub.',
        bullets: [
          'Kostenlos und quelloffen unter der MIT-Lizenz; keine In-App-Käufe im eigenen Repository des Projekts dokumentiert.',
          'Führt GGUF-Modelle (Llama, Mistral, Gemma und andere GGUF-kompatible Familien) laut GitHub-Repository auf dem Gerät über llama.cpp aus.',
          'Fügt Dokumenten-RAG (PDF, DOCX, XLSX und mehr), Sprachein-/ausgabe über sherpa-onnx, einen lokalen OpenAI-kompatiblen HTTP-Server und ein Plugin-System hinzu.',
          'Der lokale Speicher ist laut README des Projekts mit Android Keystore AES-256-GCM und Argon2id-Authentifizierung verschlüsselt.',
          'Benötigt laut Build-Konfiguration des Projekts Android 12 (API 31) oder neuer auf einem arm64-v8a- oder x86_64-Gerät.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'ToolNeuron holen', anchor: 'get-it' },
      { label: 'Was ToolNeuron ist', anchor: 'what-is-toolneuron' },
      { label: 'Wer ToolNeuron entwickelt hat', anchor: 'who-built-it' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Unterstützte Modelle und Funktionen', anchor: 'models-and-features' },
      { label: 'Anforderungen', anchor: 'requirements' },
      { label: 'Datenschutz und Sicherheit', anchor: 'privacy' },
      { label: 'Kompromisse: Vorteile vs. Einschränkungen', anchor: 'tradeoffs' },
      { label: 'ToolNeuron vs. Alternativen', anchor: 'vs-alternatives' },
      { label: 'Wer ToolNeuron nutzen sollte', anchor: 'who-should-use' },
      { label: 'Wer ToolNeuron nicht nutzen sollte', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Lektüre', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ToolNeuron ist eine kostenlose, quelloffene (MIT) Android-App von Entwickler Siddhesh Sonar, die GGUF-Sprachmodelle über llama.cpp auf dem Gerät ausführt und dabei verschlüsselten lokalen Speicher, Dokumenten-RAG, Sprachein-/ausgabe, einen lokalen OpenAI-kompatiblen HTTP-Server und ein Plugin-System hinzufügt, ohne Cloud-Komponente oder Telemetrie, laut eigenem README des Projekts.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich eine kostenlose, quelloffene Android-Chat-App vor, mit der Sie auch mit Ihren eigenen Dokumenten sprechen und Sprache nutzen können — alles auf Ihrem Telefon, mit der Verschlüsselung, die man von einem sicherheitsbewussten Projekt erwartet, nicht ein einfacher Wrapper um eine Cloud-API.',
          },
        ],
        items: [
          'Preis: kostenlos zum [Herunterladen](https://play.google.com/store/apps/details?id=com.dark.tool_neuron) und nutzbar; quelloffen unter der MIT-Lizenz, keine In-App-Käufe im Repository dokumentiert.',
          'Entwickler: [Siddhesh Sonar](https://github.com/Siddhesh2377).',
          'Engine: [llama.cpp](https://github.com/ggml-org/llama.cpp) für GGUF-Chat-Modelle, plus [sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) für Sprache, alles vollständig auf dem Gerät ausgeführt.',
          'Funktionen über Chat hinaus: Dokumenten-RAG (PDF, DOCX, XLSX, PPTX, EPUB und mehr), Sprachein-/ausgabe, ein lokaler OpenAI-kompatibler HTTP-Server, ein Hugging-Face-Modellbrowser und ein sandboxed Plugin-System, laut README des Projekts.',
          'Sicherheit: lokale Daten sind laut eigener Dokumentation des Projekts mit Android Keystore AES-256-GCM und Argon2id-Authentifizierung verschlüsselt.',
          'Anforderung: Android 12 (API 31) oder neuer, auf arm64-v8a- oder x86_64-Hardware, laut Build-Konfiguration des Projekts.',
          'Open-Source-Status: MIT-Lizenz, Quellcode veröffentlicht auf [GitHub](https://github.com/Siddhesh2377/ToolNeuron) — unabhängig prüfbar, anders als quelloffen-geschlossene Alternativen.',
          'Vertrieb: verfügbar über [Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron) und als direkte APK-Downloads von GitHub Releases.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'ToolNeuron holen',
        content: [
          '**ToolNeuron ist über Google Play oder als direkter APK-Download von der GitHub-Releases-Seite erhältlich.** Beide Vertriebskanäle liefern dieselbe quelloffene App.',
          'Dieser Test ist eine Ergänzung zu PromptQuorums [Verzeichnis lokaler LLM-Software](/de/power-local-llm/local-llm-software-directory), das lokale KI-Tools über Plattformen hinweg auflistet, einschließlich des eigenen Eintrags von ToolNeuron.',
        ],
        columns: ['Kanal', 'Holen'],
        rows: [
          {
            'Kanal': 'Google Play',
            'Holen': '[ToolNeuron bei Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)',
          },
          {
            'Kanal': 'GitHub (APK)',
            'Holen': '[ToolNeuron Releases auf GitHub](https://github.com/Siddhesh2377/ToolNeuron/releases)',
          },
        ],
        note: 'Die App ist so oder so kostenlos — GitHub hostet außerdem den vollständigen Quellcode für Leser, die ihn selbst prüfen oder bauen möchten.',
      },
      whatIsToolNeuron: {
        id: 'what-is-toolneuron',
        title: 'Was ToolNeuron ist',
        content: [
          '**ToolNeuron ist eine Android-App, die GGUF-Format-Sprachmodelle direkt über llama.cpp auf dem Gerät ausführt, ohne serverseitige Komponente.** Laut eigener Beschreibung des Projekts strebt sie an, "On-Device-KI für Android" zu sein — "kein Google-Play-Dienst, keine Telemetrie, keine Cloud" — Modelle, Chats, für die Suche verwendete Dokumente und Verschlüsselungsschlüsselmaterial sind alle so konzipiert, dass sie auf dem Telefon bleiben.',
          'Über den reinen Chat hinaus bündelt die App Dokumentenabruf (RAG) über gängige Dateiformate, Sprachein- und -ausgabe über die sherpa-onnx-Sprach-Engine, einen lokalen HTTP-Server, der eine OpenAI-kompatible API für andere Apps bereitstellt, einen integrierten Hugging-Face-Modellbrowser und ein sandboxed Plugin-System zum Installieren zusätzlicher Funktionen.',
          'Dieser Test stützt sich auf das öffentliche GitHub-Repository des Projekts — dessen README, Lizenzdatei und Repository-Metadaten — sowie auf den Google-Play-Eintrag, nicht auf eine unabhängige Code-Prüfung oder praktische Benchmark-Tests.',
        ],
      },
      whoBuiltIt: {
        id: 'who-built-it',
        title: 'Wer ToolNeuron entwickelt hat',
        content: [
          '**ToolNeuron wird von Entwickler [Siddhesh Sonar](https://github.com/Siddhesh2377) gebaut und gepflegt, der das Projekt offen auf GitHub unter der MIT-Lizenz veröffentlicht.** Das Repository zeigt aktive, detaillierte Entwicklung: eine dokumentierte Sicherheitsarchitektur, eine modulare Codebasis, aufgeteilt auf App-, Inferenz-, Verschlüsselungs- und Netzwerkkomponenten, sowie eine öffentliche Discord-Community für Nutzer und Mitwirkende.',
          'Da der Quellcode veröffentlicht statt geschlossen ist, lassen sich Aussagen darüber, was die App mit lokalen Daten tut — und was nicht — direkt am Code prüfen, statt sich allein auf die Beschreibung des Entwicklers zu verlassen.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung von ToolNeuron dauert wenige Schritte und erfordert keine Kontoerstellung.** Der gesamte Vorgang, von der Installation bis zur ersten Offline-Antwort, dauert wenige Minuten plus die Zeit, die das gewählte Modell zum Herunterladen benötigt.',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Holen Sie [ToolNeuron bei Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron), oder laden Sie die APK direkt von [GitHub Releases](https://github.com/Siddhesh2377/ToolNeuron/releases) herunter. Die App selbst ist so oder so kostenlos.',
          },
          {
            title: 'Lokale Verschlüsselung einrichten',
            whyItMatters: 'Die App richtet beim ersten Start ihre über den Android Keystore abgesicherte Verschlüsselung und eine 6-stellige PIN ein, laut Sicherheitsdokumentation des Projekts, bevor Chatdaten gespeichert werden.',
          },
          {
            title: 'Ein GGUF-Modell durchsuchen und herunterladen',
            whyItMatters: 'Nutzen Sie den integrierten Hugging-Face-Browser, um ein kompatibles GGUF-Modell zu finden, oder stellen Sie ein eigenes bereit. Dieser Schritt erfordert eine Internetverbindung; das Chatten danach nicht.',
          },
          {
            title: 'Chatten oder Dokumente für RAG hinzufügen',
            whyItMatters: 'Sobald ein Modell heruntergeladen ist, läuft der Chat vollständig auf dem Gerät über llama.cpp. Fügen Sie einer Unterhaltung ein unterstütztes Dokument (PDF, DOCX und andere) hinzu, damit das Modell daraus antwortet.',
          },
          {
            title: 'Optional: Sprache oder den lokalen API-Server aktivieren',
            whyItMatters: 'Sprachein-/ausgabe und der OpenAI-kompatible lokale HTTP-Server sind beide optionale Funktionen zusätzlich zum reinen Chat — keine ist zur Nutzung der App erforderlich.',
          },
        ],
        note: 'Die genaue Modellkompatibilität und Downloadgrößen variieren je nach gewählter GGUF-Datei — prüfen Sie Größe und Lizenz eines Modells auf dessen eigener Hugging-Face-Seite, bevor Sie es bei einem begrenzten Datentarif herunterladen.',
      },
      modelsAndFeatures: {
        id: 'models-and-features',
        title: 'Unterstützte Modelle und Funktionen',
        content: [
          '**ToolNeuron führt jedes kompatible GGUF-Format-Modell aus, einschließlich gängiger Familien wie Llama, Mistral und Gemma, über [llama.cpp](https://github.com/ggml-org/llama.cpp).** Ein integrierter Hugging-Face-Browser lässt Leser verfügbare Modelle nach Pipeline-Tag, Parameteranzahl, Quantisierung und Lizenz filtern, bevor sie herunterladen.',
          'Über den Chat hinaus listet das eigene README des Projekts: Dokumenten-RAG über PDF, DOCX, XLSX, PPTX, ODT, EPUB, RTF, Markdown, HTML, JSON, XML, CSV und Klartext; Sprachein- und -ausgabe über die sherpa-onnx-Engine (VITS-, Piper- und Whisper-Stimmen); lokale Bildgenerierung, laut Changelog-Notizen des Projekts im Mai 2026 zur App hinzugefügt; einen lokalen HTTP-Server mit einer OpenAI-kompatiblen API samt eigener Web-UI; und ein sandboxed Plugin-System zum Installieren von der Community erstellter Erweiterungen.',
          'Das ist ein breiteres Funktionsspektrum als bei einem Einzelzweck-Chat-Client, und jede Funktion läuft laut Dokumentation des Projekts über dieselbe On-Device-Engine, statt einen Cloud-Dienst aufzurufen.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen',
        content: [
          '**ToolNeuron benötigt laut öffentlicher Build-Konfiguration des Projekts Android 12 (API-Level 31) oder neuer, auf arm64-v8a- oder x86_64-Hardware.** Wie bei jeder On-Device-LLM-App hängt die praktische Hardware-Untergrenze eher davon ab, welches GGUF-Modell geladen ist — dessen Parameteranzahl und Quantisierung — als von einer einzigen festen Spezifikation; ein kleines quantisiertes Modell benötigt deutlich weniger Speicher als ein großes.',
          'Leser mit älteren Android-Versionen oder reinen 32-Bit-Geräten sollten davon ausgehen, dass sich die App nicht installieren lässt, da Mindest-SDK und ABI-Filter direkt vom Android-Paket selbst erzwungen werden, nicht nur als weiche Empfehlung.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Sicherheit',
        content: [
          '**Das erklärte Designziel von ToolNeuron ist es, jede Cloud-Abhängigkeit zu vermeiden: kein Google-Play-Dienst erforderlich, keine Telemetrie und keine serverseitige Komponente für die zentralen Chat- und RAG-Funktionen, laut eigenem README des Projekts.** Untermauert wird das durch eine ungewöhnlich detaillierte, öffentlich dokumentierte Sicherheitsarchitektur statt einer einzeiligen Datenschutzbehauptung.',
          'Lokale Daten — einschließlich des Verschlüsselungsschlüsselmaterials selbst — sind laut Sicherheitsdokumentation des Projekts mit einem über den Android Keystore abgesicherten AES-256-GCM-Schlüssel (bevorzugt StrongBox, sofern das Gerät dies unterstützt) und Argon2id-basierter PIN-Authentifizierung geschützt. Dieselbe Dokumentation beschreibt einen Sperrmechanismus, der nach wiederholten fehlgeschlagenen PIN-Versuchen eskaliert, sowie eine optionale Panik-PIN-Funktion, die lokale App-Daten löscht.',
        ],
        items: [
          '**Kein Konto erforderlich.** Die App kann installiert und genutzt werden, ohne ein Profil anzulegen oder sich anzumelden.',
          '**Keine Cloud-Komponente für zentrale Funktionen.** Chat, RAG und Sprache sind laut README des Projekts alle für die On-Device-Ausführung konzipiert.',
          '**Verschlüsselter lokaler Speicher.** Chats, Dokumente und Verschlüsselungsschlüssel sind laut Dokumentation des Projekts mit Android Keystore AES-256-GCM und Argon2id-Authentifizierung geschützt.',
          '**Quelloffener Code.** Da der Quellcode der App unter der MIT-Lizenz veröffentlicht ist, lassen sich ihre Architektur- und Datenverarbeitungsangaben direkt am Code prüfen, statt sich allein auf die Aussagen des Entwicklers zu verlassen.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Kompromisse: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Was das in der Praxis bedeutet', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'Kostenlos und quelloffen (MIT)',
            'Was das in der Praxis bedeutet': 'Keine Kosten, und der vollständige Quellcode ist auf GitHub zur Prüfung verfügbar.',
            'Einschränkung / Hinweis': 'Quelloffen zu sein garantiert für sich genommen keine durchgeführte unabhängige Sicherheitsprüfung.',
          },
          {
            'Vorteil': 'Breiteres Funktionsspektrum als reiner Chat',
            'Was das in der Praxis bedeutet': 'Dokumenten-RAG, Sprache, ein lokaler API-Server und Plugins sind alle eingebunden, keine separaten Apps zu verwalten.',
            'Einschränkung / Hinweis': 'Mehr bewegliche Teile als bei einer Einzelzweck-Chat-App; dieser Test hat die Zuverlässigkeit jeder einzelnen Funktion nicht unabhängig verifiziert.',
          },
          {
            'Vorteil': 'Detailliertes, dokumentiertes Sicherheitsmodell',
            'Was das in der Praxis bedeutet': 'Verschlüsselter lokaler Speicher und PIN-basierte Authentifizierung schützen Daten, falls das Telefon verloren geht oder von jemand anderem aufgerufen wird.',
            'Einschränkung / Hinweis': 'Die Sicherheitsdokumentation stammt vom Projekt selbst; dieser Test hat die App nicht unabhängig einem Penetrationstest unterzogen.',
          },
          {
            'Vorteil': 'Keine Cloud-Abhängigkeit für zentrale Funktionen',
            'Was das in der Praxis bedeutet': 'Chat, RAG und Sprache laufen laut README des Projekts nach dem Herunterladen eines Modells alle offline.',
            'Einschränkung / Hinweis': 'Nur Android — es gibt keine iPhone-, Desktop- oder Web-Version.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'ToolNeuron vs. Alternativen',
        columns: ['App', 'Plattformen', 'Preis', 'Modellflexibilität', 'Hauptunterschied'],
        rows: [
          {
            'App': 'ToolNeuron',
            'Plattformen': 'Nur Android',
            'Preis': 'Kostenlos, quelloffen (MIT)',
            'Modellflexibilität': 'Jedes GGUF-Modell über einen integrierten Hugging-Face-Browser',
            'Hauptunterschied': 'Breitestes Funktionsspektrum hier — RAG, Sprache, lokaler API-Server und Plugins neben dem Chat',
          },
          {
            'App': '[Layla](/de/power-local-llm/layla-review)',
            'Plattformen': 'Android und iOS',
            'Preis': '19,99 $ Einmalkauf, plus In-App-Stufen',
            'Modellflexibilität': 'GGUF-, LiteRT-LM- und PTE-Modell-Backends',
            'Hauptunterschied': 'Persona- und Rollenspiel-Fokus, mit optionalem Opt-in-Cloud-Modus; quellcodegeschlossen',
          },
          {
            'App': '[RikkaHub](/de/power-local-llm/rikkahub-review)',
            'Plattformen': 'Nur Android',
            'Preis': 'Kostenlos, quelloffen',
            'Modellflexibilität': 'GGUF-Modelle, laut eigenem Eintrag',
            'Hauptunterschied': 'Eine weitere kostenlose, quelloffene Android-Option — vergleichen Sie die Funktionstiefe direkt',
          },
          {
            'App': '[Maid](/de/power-local-llm/maid-review)',
            'Plattformen': 'Android und iOS',
            'Preis': 'Kostenlos, quelloffen',
            'Modellflexibilität': 'GGUF-Modelle über llama.cpp',
            'Hauptunterschied': 'Plattformübergreifend (auch iOS), einfacherer Einzelzweck-Chat-Client',
          },
        ],
        note: 'Plattform-, Preis- und Funktionsangaben zu Drittanbieter-Apps ändern sich häufig — prüfen Sie vor einer Entscheidung die aktuellen Angaben im jeweiligen App-Eintrag.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Wer ToolNeuron nutzen sollte',
        items: [
          '**Android-Nutzer, die eine kostenlose, quelloffene On-Device-KI-App möchten.** Der vollständige Quellcode ist öffentlich, und es gibt keine Kosten für Installation oder Nutzung.',
          '**Leser, die mehr als reinen Chat möchten.** Dokumenten-RAG, Sprachein-/ausgabe und ein lokaler API-Server sind eingebunden, statt separate Apps zu erfordern.',
          '**Datenschutzbewusste Nutzer, die ein dokumentiertes Sicherheitsmodell schätzen.** Verschlüsselter lokaler Speicher und PIN-basierte Authentifizierung gehen über eine einfache Datenschutzerklärung hinaus.',
          '**Entwickler, die die App erweitern möchten.** Das Plugin-System und die quelloffene Codebasis erlauben direkte Anpassung, anders als bei einer quellcodegeschlossenen Alternative.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Wer ToolNeuron nicht nutzen sollte',
        items: [
          '**iPhone-, Desktop- oder Web-Nutzer.** ToolNeuron ist reine Android-App; es gibt keine iOS-, Mac-, Windows-, Linux- oder browserbasierte Version.',
          '**Besitzer von Geräten mit Android 11 oder älter, oder reiner 32-Bit-Hardware.** Die App benötigt Android 12 (API 31) oder neuer auf arm64-v8a oder x86_64.',
          '**Leser, die eine etablierte Erfolgsbilanz benötigen, bevor sie einer App vertrauen.** ToolNeuron ist neuer und hat eine kleinere öffentliche Erfolgsbilanz als manche länger etablierten Alternativen.',
          '**Leser, die eine einzige, einfache Chat-App ohne alles andere möchten.** Das breitere Funktionsspektrum (RAG, Sprache, Plugins, ein lokaler Server) ist für manche Leser ein Vorteil und für andere unnötige Komplexität.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist ToolNeuron kostenlos?',
            a: 'Ja. ToolNeuron ist kostenlos zu installieren und zu nutzen, und laut GitHub-Repository quelloffen unter der MIT-Lizenz.',
          },
          {
            q: 'Wer entwickelt ToolNeuron?',
            a: 'ToolNeuron wird von Entwickler [Siddhesh Sonar](https://github.com/Siddhesh2377) gebaut und gepflegt.',
          },
          {
            q: 'Welche Modelle unterstützt ToolNeuron?',
            a: 'Jedes kompatible GGUF-Format-Modell, einschließlich gängiger Familien wie Llama, Mistral und Gemma, ausgeführt über [llama.cpp](https://github.com/ggml-org/llama.cpp). Ein integrierter Hugging-Face-Browser hilft beim Finden und Herunterladen von Modellen.',
          },
          {
            q: 'Funktioniert ToolNeuron ohne Internetverbindung?',
            a: 'Ja, für seine zentralen Funktionen. Das README des Projekts erklärt, dass die App keine Cloud-Komponente und keine Telemetrie hat; eine Internetverbindung wird nur zum Herunterladen eines Modells oder App-Updates benötigt.',
          },
          {
            q: 'Welche Android-Version benötigt ToolNeuron?',
            a: 'Android 12 (API-Level 31) oder neuer, auf arm64-v8a- oder x86_64-Hardware, laut öffentlicher Build-Konfiguration des Projekts.',
          },
          {
            q: 'Ist ToolNeuron quelloffen?',
            a: 'Ja. Die App ist auf [GitHub](https://github.com/Siddhesh2377/ToolNeuron) unter der MIT-Lizenz veröffentlicht, und der Quellcode kann direkt geprüft oder gebaut werden.',
          },
          {
            q: 'Welche zusätzlichen Funktionen hat ToolNeuron über den Chat hinaus?',
            a: 'Dokumenten-RAG über gängige Dateiformate, Sprachein- und -ausgabe über sherpa-onnx, ein lokaler OpenAI-kompatibler HTTP-Server, ein Hugging-Face-Modellbrowser und ein sandboxed Plugin-System, laut README des Projekts.',
          },
          {
            q: 'Wie schneidet ToolNeuron im Vergleich zu Layla oder RikkaHub ab?',
            a: 'ToolNeuron ist kostenlos und quelloffen mit einem breiteren integrierten Funktionsspektrum (RAG, Sprache, ein lokaler API-Server, Plugins). [Layla](/de/power-local-llm/layla-review) ist eine kostenpflichtige, quellcodegeschlossene App für 19,99 $ für Android und iOS mit Persona-/Rollenspiel-Fokus und optionalem Cloud-Modus. [RikkaHub](/de/power-local-llm/rikkahub-review) ist eine weitere kostenlose, quelloffene Android-Chat-App. Wählen Sie danach, ob Ihnen ToolNeurons breiteres Funktionsspektrum, Laylas plattformübergreifender Rollenspiel-Fokus oder ein einfacherer Einzelzweck-Client wichtiger ist.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'ToolNeuron liefert eine wirklich breite, kostenlose und quelloffene On-Device-KI-App für Android: GGUF-Chat über llama.cpp, Dokumenten-RAG, Sprachein-/ausgabe, einen lokalen OpenAI-kompatiblen API-Server und ein Plugin-System, alles unterlegt mit einer dokumentierten, verschlüsselungsorientierten Sicherheitsarchitektur statt eines vagen Datenschutzversprechens.',
          'Der veröffentlichte MIT-lizenzierte Quellcode ist ein bedeutender Vorteil gegenüber quellcodegeschlossenen Android-Alternativen — Leser, denen es wichtig ist zu prüfen, was eine App tatsächlich mit lokalen Daten macht, können den Code direkt einsehen, statt allein einem Eintrag zu vertrauen.',
          'Was diesen Test eher zurückhaltend als uneingeschränkt begeistert hält, ist das relativ junge Alter der App und das Fehlen unabhängiger, praktischer Benchmark-Tests ihrer vielen Funktionen speziell durch PromptQuorum; Leser mit leistungskritischen Anforderungen sollten die App zuerst auf ihrem eigenen Gerät testen, bevor sie sich stark darauf verlassen.',
          'Android-Nutzer, die eine kostenlose, quelloffene, auf Datenschutz ausgelegte App mit mehr als reinem Chat möchten, sollten sie ausprobieren; Leser, die eine iPhone-App, einen einfacheren Einzelzweck-Client oder eine etabliertere Erfolgsbilanz möchten, sollten stattdessen [Layla](/de/power-local-llm/layla-review) oder [RikkaHub](/de/power-local-llm/rikkahub-review) in Betracht ziehen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[ToolNeuron bei Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron) — Preis und Vertrieb.',
          '[ToolNeuron GitHub-Repository](https://github.com/Siddhesh2377/ToolNeuron) — README, Lizenz, Sicherheitsdokumentation und Repository-Metadaten, geprüft am 12.09.2026.',
          '[ToolNeuron Projektseite](https://tool-neuron.vercel.app/) — Produktübersicht.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Layla-Test](/de/power-local-llm/layla-review) — eine kostenpflichtige, plattformübergreifende On-Device-Begleit-App mit optionalem Cloud-Modus.',
          '[RikkaHub-Test](/de/power-local-llm/rikkahub-review) — eine weitere kostenlose, quelloffene Android-Chat-App für lokale KI.',
          '[Maid-Test](/de/power-local-llm/maid-review) — ein kostenloser, quelloffener, plattformübergreifender (Android und iOS) Chat-Client.',
          '[PocketPal-AI-Test](/de/power-local-llm/pocketpal-ai-review) — eine kostenlose, quelloffene lokale KI-App mit iOS- und teilweiser Android-Unterstützung.',
          '[Das vollständige lokale LLM-Software-Verzeichnis](/de/power-local-llm/local-llm-software-directory) — ein umfassenderes Verzeichnis lokaler LLM-Tools über Plattformen hinweg.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/toolneuron-review-hero-fr.webp',
    title: 'Avis ToolNeuron (2026) : application Android open source pour IA chiffrée sur l\'appareil',
    seoTitle: 'Avis ToolNeuron 2026 : appli Android IA chiffrée sur l\'appareil',
    intro:
      '[ToolNeuron](https://play.google.com/store/apps/details?id=com.dark.tool_neuron), développée par [Siddhesh Sonar](https://github.com/Siddhesh2377) et publiée en open source sous [licence MIT](https://github.com/Siddhesh2377/ToolNeuron/blob/re-write/LICENSE), est une application Android gratuite qui exécute des modèles de langage au format GGUF directement sur l\'appareil via llama.cpp, avec RAG documentaire, entrée/sortie vocale, un serveur HTTP local compatible OpenAI, et un système de plugins en complément. Selon le README du projet, l\'objectif de conception central est "aucun service Google Play, aucune télémétrie, aucun cloud", appuyé par un chiffrement AES-256-GCM basé sur l\'Android Keystore et une authentification Argon2id pour les données stockées. Cet avis couvre ce que fait l\'application, ce qu\'elle nécessite, et sa place face à d\'autres applications de chat Android sur l\'appareil comme Layla et RikkaHub, sur la base du dépôt GitHub public du projet et de sa fiche Play Store plutôt que d\'un test pratique indépendant.',
    metaDescription:
      'Avis ToolNeuron 2026 : application Android gratuite et open source (MIT) pour chat IA chiffré sur l\'appareil, RAG documentaire, voix et génération d\'images locale. Prérequis, modèle de sécurité et comparaison avec Layla et RikkaHub.',
    twitterDescription:
      'Avis ToolNeuron : une application Android gratuite et open source qui exécute des modèles GGUF entièrement sur l\'appareil — stockage local chiffré, RAG documentaire, entrée/sortie vocale, un serveur local compatible OpenAI, et un système de plugins. Pas de cloud, pas de télémétrie, selon le README du projet.',
    audience:
      'Utilisateurs Android envisageant une application de chat IA gratuite, open source et axée sur la confidentialité, exécutée sur l\'appareil — couvre le modèle de sécurité, les fonctionnalités prises en charge, les prérequis matériels, et la comparaison avec d\'autres applications Android d\'IA locale passées en revue sur ce site.',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'ToolNeuron review',
    targetKeywords: [
      'toolneuron review',
      'toolneuron android',
      'toolneuron app',
      'open source local ai android',
      'encrypted offline ai chat app',
      'on-device llm android app',
      'toolneuron vs layla',
      'free local ai app android',
    ],
    current_models_mentioned: ['Llama', 'Mistral', 'Gemma', 'GGUF models'],
    current_hardware_mentioned: ['Android 12'],
    leadAnswerBlock:
      '**ToolNeuron est une application Android gratuite et open source (MIT) qui exécute des modèles de langage GGUF entièrement sur l\'appareil via llama.cpp, avec RAG documentaire, entrée/sortie vocale et un serveur HTTP local compatible OpenAI — sans composante cloud, sans télémétrie, selon le README du projet.** Développée par [Siddhesh Sonar](https://github.com/Siddhesh2377), l\'application protège son stockage local par un chiffrement AES-256-GCM adossé à l\'Android Keystore et une authentification Argon2id, et nécessite Android 12 (API 31) ou une version plus récente. Pour comparer, les lecteurs peuvent aussi lire l\'[avis Layla](/fr/power-local-llm/layla-review) ou l\'[avis RikkaHub](/fr/power-local-llm/rikkahub-review).',
    quickAnswerTop: {
      en: {
        question: 'Is ToolNeuron worth installing?',
        answer:
          'Yes, if you want a free, open-source Android app that runs AI models fully on-device with encrypted local storage and no cloud dependency, and your phone runs Android 12 or newer. It adds document chat (RAG), voice input/output, and a local OpenAI-compatible API server on top of plain chat — features many single-purpose chat apps skip. Skip it if you want an iPhone app (it is Android-only) or prefer a much larger, more established curated model library; compare it against Layla or RikkaHub first.',
        bullets: [
          'Free and open source under the MIT license; no in-app purchases documented in the project\'s own repository.',
          'Runs GGUF models (Llama, Mistral, Gemma, and other GGUF-compatible families) on-device via llama.cpp, per the GitHub repository.',
          'Adds document RAG (PDF, DOCX, XLSX, and more), voice input/output via sherpa-onnx, a local OpenAI-compatible HTTP server, and a plugin system.',
          'Local storage is encrypted with Android Keystore AES-256-GCM and Argon2id authentication, per the project\'s README.',
          'Requires Android 12 (API 31) or newer on an arm64-v8a or x86_64 device, per the project\'s build configuration.',
        ],
        updatedDate: '2026-09-12',
      },
      fr: {
        question: 'ToolNeuron vaut-elle la peine d\'être installée ?',
        answer:
          'Oui, si vous voulez une application Android gratuite et open source qui exécute des modèles d\'IA entièrement sur l\'appareil avec un stockage local chiffré et sans dépendance au cloud, et que votre téléphone tourne sous Android 12 ou une version plus récente. Elle ajoute le chat documentaire (RAG), l\'entrée/sortie vocale et un serveur API local compatible OpenAI en plus du chat simple — des fonctionnalités que beaucoup d\'applications de chat mono-fonction n\'offrent pas. Passez votre chemin si vous voulez une application iPhone (elle est réservée à Android) ou préférez une bibliothèque de modèles bien plus large et établie ; comparez-la d\'abord à Layla ou RikkaHub.',
        bullets: [
          'Gratuite et open source sous licence MIT ; aucun achat intégré documenté dans le dépôt du projet.',
          'Exécute des modèles GGUF (Llama, Mistral, Gemma et d\'autres familles compatibles GGUF) sur l\'appareil via llama.cpp, selon le dépôt GitHub.',
          'Ajoute le RAG documentaire (PDF, DOCX, XLSX et plus), l\'entrée/sortie vocale via sherpa-onnx, un serveur HTTP local compatible OpenAI et un système de plugins.',
          'Le stockage local est chiffré avec Android Keystore AES-256-GCM et une authentification Argon2id, selon le README du projet.',
          'Nécessite Android 12 (API 31) ou une version plus récente sur un appareil arm64-v8a ou x86_64, selon la configuration de build du projet.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir ToolNeuron', anchor: 'get-it' },
      { label: 'Ce qu\'est ToolNeuron', anchor: 'what-is-toolneuron' },
      { label: 'Qui a créé ToolNeuron', anchor: 'who-built-it' },
      { label: 'Comment démarrer', anchor: 'how-to-get-started' },
      { label: 'Modèles et fonctionnalités pris en charge', anchor: 'models-and-features' },
      { label: 'Prérequis', anchor: 'requirements' },
      { label: 'Confidentialité et sécurité', anchor: 'privacy' },
      { label: 'Compromis : avantages vs limites', anchor: 'tradeoffs' },
      { label: 'ToolNeuron vs alternatives', anchor: 'vs-alternatives' },
      { label: 'Qui devrait utiliser ToolNeuron', anchor: 'who-should-use' },
      { label: 'Qui ne devrait pas utiliser ToolNeuron', anchor: 'who-should-not-use' },
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
            text: 'ToolNeuron est une application Android gratuite et open source (MIT) du développeur Siddhesh Sonar qui exécute des modèles de langage GGUF sur l\'appareil via llama.cpp, en ajoutant un stockage local chiffré, du RAG documentaire, l\'entrée/sortie vocale, un serveur HTTP local compatible OpenAI et un système de plugins, sans composante cloud ni télémétrie selon le README du projet.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-la comme une application de chat Android gratuite et open source qui vous permet aussi de discuter avec vos propres documents et d\'utiliser la voix, le tout fonctionnant sur votre téléphone avec le chiffrement attendu d\'un projet soucieux de sécurité — pas un simple habillage autour d\'une API cloud.',
          },
        ],
        items: [
          'Prix : gratuite à [télécharger](https://play.google.com/store/apps/details?id=com.dark.tool_neuron) et à utiliser ; open source sous licence MIT, aucun achat intégré documenté dans le dépôt.',
          'Développeur : [Siddhesh Sonar](https://github.com/Siddhesh2377).',
          'Moteur : [llama.cpp](https://github.com/ggml-org/llama.cpp) pour les modèles de chat GGUF, plus [sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) pour la voix, le tout exécuté entièrement sur l\'appareil.',
          'Fonctionnalités au-delà du chat : RAG documentaire (PDF, DOCX, XLSX, PPTX, EPUB et plus), entrée/sortie vocale, un serveur HTTP local compatible OpenAI, un navigateur de modèles Hugging Face, et un système de plugins isolé (sandbox), selon le README du projet.',
          'Sécurité : les données locales sont chiffrées avec Android Keystore AES-256-GCM et une authentification Argon2id, selon la documentation du projet.',
          'Prérequis : Android 12 (API 31) ou plus récent, sur du matériel arm64-v8a ou x86_64, selon la configuration de build du projet.',
          'Statut open source : licence MIT, code source publié sur [GitHub](https://github.com/Siddhesh2377/ToolNeuron) — vérifiable de façon indépendante, contrairement aux alternatives à code fermé.',
          'Distribution : disponible sur [Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron) et en téléchargement direct d\'APK depuis GitHub Releases.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Obtenir ToolNeuron',
        content: [
          '**ToolNeuron est disponible sur Google Play ou en téléchargement direct d\'APK depuis sa page GitHub Releases.** Les deux canaux de distribution proposent la même application open source.',
          'Cet avis complète le [répertoire de logiciels LLM locaux](/fr/power-local-llm/local-llm-software-directory) de PromptQuorum, qui recense les outils d\'IA locale sur toutes les plateformes, y compris la propre fiche de ToolNeuron.',
        ],
        columns: ['Canal', 'Obtenir'],
        rows: [
          {
            'Canal': 'Google Play',
            'Obtenir': '[ToolNeuron sur Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)',
          },
          {
            'Canal': 'GitHub (APK)',
            'Obtenir': '[ToolNeuron Releases sur GitHub](https://github.com/Siddhesh2377/ToolNeuron/releases)',
          },
        ],
        note: 'L\'application est gratuite dans les deux cas — GitHub héberge aussi le code source complet pour les lecteurs qui souhaitent l\'auditer ou le compiler eux-mêmes.',
      },
      whatIsToolNeuron: {
        id: 'what-is-toolneuron',
        title: 'Ce qu\'est ToolNeuron',
        content: [
          '**ToolNeuron est une application Android qui exécute des modèles de langage au format GGUF directement sur l\'appareil via llama.cpp, sans composante côté serveur.** Selon sa propre description, le projet vise à être "de l\'IA sur l\'appareil pour Android. Aucun service Google Play, aucune télémétrie, aucun cloud" — modèles, conversations, documents utilisés pour la recherche et matériel de clé de chiffrement sont tous conçus pour rester sur le téléphone.',
          'Au-delà du simple chat, l\'application intègre la récupération documentaire (RAG) sur des formats de fichiers courants, l\'entrée et la sortie vocale via le moteur vocal sherpa-onnx, un serveur HTTP local exposant une API compatible OpenAI pour que d\'autres applications s\'y connectent, un navigateur de modèles Hugging Face intégré, et un système de plugins isolé (sandbox) pour installer des capacités supplémentaires.',
          'Cet avis s\'appuie sur le dépôt GitHub public du projet — son README, son fichier de licence et les métadonnées du dépôt — ainsi que sur la fiche Google Play, plutôt que sur un audit de code indépendant ou des tests de performance pratiques.',
        ],
      },
      whoBuiltIt: {
        id: 'who-built-it',
        title: 'Qui a créé ToolNeuron',
        content: [
          '**ToolNeuron est développée et maintenue par [Siddhesh Sonar](https://github.com/Siddhesh2377), qui publie le projet ouvertement sur GitHub sous licence MIT.** Le dépôt montre un développement actif et détaillé : une architecture de sécurité documentée, une base de code modulaire répartie entre composantes d\'application, d\'inférence, de chiffrement et de réseau, et une communauté Discord publique pour les utilisateurs et contributeurs.',
          'Comme le code source est publié plutôt que fermé, les affirmations sur ce que fait l\'application avec les données locales — et ce qu\'elle ne fait pas — peuvent être vérifiées directement dans le code, plutôt que de reposer uniquement sur la description du développeur.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Comment démarrer',
        content: [
          '**La configuration de ToolNeuron prend quelques étapes et ne nécessite aucune création de compte.** Le processus complet, de l\'installation à la première réponse hors ligne, prend quelques minutes plus le temps de téléchargement du modèle choisi.',
        ],
        numberedItems: [
          {
            title: 'Installer l\'application',
            whyItMatters: 'Obtenez [ToolNeuron sur Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron), ou téléchargez l\'APK directement depuis [GitHub Releases](https://github.com/Siddhesh2377/ToolNeuron/releases). L\'application elle-même est gratuite dans les deux cas.',
          },
          {
            title: 'Configurer le chiffrement local',
            whyItMatters: 'L\'application configure son chiffrement adossé à l\'Android Keystore et un code PIN à 6 chiffres au premier lancement, selon la documentation de sécurité du projet, avant que les données de chat ne soient stockées.',
          },
          {
            title: 'Parcourir et télécharger un modèle GGUF',
            whyItMatters: 'Utilisez le navigateur Hugging Face intégré pour trouver un modèle GGUF compatible, ou fournissez le vôtre. Cette étape nécessite une connexion internet ; le chat, ensuite, n\'en a pas besoin.',
          },
          {
            title: 'Discuter, ou ajouter des documents pour le RAG',
            whyItMatters: 'Une fois un modèle téléchargé, le chat fonctionne entièrement sur l\'appareil via llama.cpp. Joignez un document pris en charge (PDF, DOCX et autres) à une conversation pour que le modèle réponde à partir de celui-ci.',
          },
          {
            title: 'Facultatif : activer la voix ou le serveur API local',
            whyItMatters: 'L\'entrée/sortie vocale et le serveur HTTP local compatible OpenAI sont deux fonctionnalités facultatives ajoutées au chat simple — ni l\'une ni l\'autre n\'est nécessaire pour utiliser l\'application.',
          },
        ],
        note: 'La compatibilité exacte des modèles et les tailles de téléchargement varient selon le fichier GGUF choisi — vérifiez la taille et la licence d\'un modèle sur sa propre page Hugging Face avant de le télécharger avec un forfait de données limité.',
      },
      modelsAndFeatures: {
        id: 'models-and-features',
        title: 'Modèles et fonctionnalités pris en charge',
        content: [
          '**ToolNeuron exécute tout modèle compatible au format GGUF, y compris des familles courantes comme Llama, Mistral et Gemma, via [llama.cpp](https://github.com/ggml-org/llama.cpp).** Un navigateur Hugging Face intégré permet aux lecteurs de filtrer les modèles disponibles par tag de pipeline, nombre de paramètres, quantification et licence avant de télécharger.',
          'Au-delà du chat, le README du projet répertorie : le RAG documentaire sur PDF, DOCX, XLSX, PPTX, ODT, EPUB, RTF, Markdown, HTML, JSON, XML, CSV et texte brut ; l\'entrée et la sortie vocale via le moteur sherpa-onnx (voix VITS, Piper et Whisper) ; la génération d\'images locale, ajoutée à l\'application en mai 2026 selon les notes de changelog du projet ; un serveur HTTP local exposant une API compatible OpenAI avec sa propre interface web ; et un système de plugins isolé (sandbox) pour installer des extensions créées par la communauté.',
          'C\'est un ensemble de fonctionnalités plus large qu\'un client de chat mono-fonction, et chaque fonctionnalité passe par le même moteur sur l\'appareil plutôt que d\'appeler un service cloud, selon la documentation du projet.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Prérequis',
        content: [
          '**ToolNeuron nécessite Android 12 (niveau d\'API 31) ou plus récent, sur du matériel arm64-v8a ou x86_64, selon la configuration de build publique du projet.** Comme pour toute application LLM sur l\'appareil, le plancher matériel pratique dépend davantage du modèle GGUF chargé — son nombre de paramètres et sa quantification — que d\'une spécification fixe unique ; un petit modèle quantifié nécessite bien moins de mémoire qu\'un grand.',
          'Les lecteurs sur des versions Android plus anciennes ou des appareils 32 bits uniquement doivent s\'attendre à ce que l\'application ne s\'installe pas, puisque les filtres de SDK minimum et d\'ABI sont appliqués par le paquet Android lui-même, pas seulement recommandés.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et sécurité',
        content: [
          '**L\'objectif de conception déclaré de ToolNeuron est d\'éviter toute dépendance au cloud : aucun service Google Play requis, aucune télémétrie, et aucune composante côté serveur pour ses fonctionnalités principales de chat et de RAG, selon le README du projet.** Cela s\'appuie sur une architecture de sécurité documentée publiquement de façon inhabituellement détaillée, plutôt que sur une simple affirmation de confidentialité en une ligne.',
          'Les données locales — y compris le matériel de clé de chiffrement lui-même — sont protégées par une clé AES-256-GCM adossée à l\'Android Keystore (StrongBox privilégié quand l\'appareil le prend en charge) et une authentification par PIN basée sur Argon2id, selon la documentation de sécurité du projet. Cette même documentation décrit un mécanisme de verrouillage qui s\'aggrave après des tentatives de PIN échouées répétées, et une fonctionnalité optionnelle de PIN de panique qui efface les données locales de l\'application.',
        ],
        items: [
          '**Aucun compte requis.** L\'application peut être installée et utilisée sans créer de profil ni se connecter.',
          '**Aucune composante cloud pour les fonctionnalités principales.** Chat, RAG et voix sont tous conçus pour fonctionner sur l\'appareil, selon le README du projet.',
          '**Stockage local chiffré.** Conversations, documents et clés de chiffrement sont protégés par Android Keystore AES-256-GCM et une authentification Argon2id, selon la documentation du projet.',
          '**Code source ouvert.** Comme le code source de l\'application est publié sous licence MIT, ses affirmations d\'architecture et de traitement des données peuvent être vérifiées directement dans le code plutôt que de reposer uniquement sur les déclarations du développeur.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages vs limites',
        columns: ['Avantage', 'Ce que cela signifie en pratique', 'Limite / mise en garde'],
        rows: [
          {
            'Avantage': 'Gratuite et open source (MIT)',
            'Ce que cela signifie en pratique': 'Aucun coût, et le code source complet est disponible pour audit sur GitHub.',
            'Limite / mise en garde': 'Être open source ne garantit pas en soi qu\'un audit de sécurité indépendant a été réalisé.',
          },
          {
            'Avantage': 'Ensemble de fonctionnalités plus large que le simple chat',
            'Ce que cela signifie en pratique': 'RAG documentaire, voix, un serveur API local et des plugins sont tous intégrés, pas des applications séparées à gérer.',
            'Limite / mise en garde': 'Plus de pièces mobiles qu\'une application de chat mono-fonction ; cet avis n\'a pas vérifié de façon indépendante la fiabilité de chaque fonctionnalité.',
          },
          {
            'Avantage': 'Modèle de sécurité détaillé et documenté',
            'Ce que cela signifie en pratique': 'Le stockage local chiffré et l\'authentification par PIN protègent les données en cas de perte du téléphone ou d\'accès par un tiers.',
            'Limite / mise en garde': 'La documentation de sécurité provient du projet lui-même ; cet avis n\'a pas soumis l\'application à un test d\'intrusion indépendant.',
          },
          {
            'Avantage': 'Aucune dépendance au cloud pour les fonctionnalités principales',
            'Ce que cela signifie en pratique': 'Chat, RAG et voix fonctionnent tous hors ligne une fois un modèle téléchargé, selon le README du projet.',
            'Limite / mise en garde': 'Réservée à Android — il n\'existe aucune version iPhone, bureau ou web.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'ToolNeuron vs alternatives',
        columns: ['Appli', 'Plateformes', 'Prix', 'Flexibilité des modèles', 'Différence clé'],
        rows: [
          {
            'Appli': 'ToolNeuron',
            'Plateformes': 'Android uniquement',
            'Prix': 'Gratuite, open source (MIT)',
            'Flexibilité des modèles': 'Tout modèle GGUF via un navigateur Hugging Face intégré',
            'Différence clé': 'Ensemble de fonctionnalités le plus large ici — RAG, voix, serveur API local et plugins en plus du chat',
          },
          {
            'Appli': '[Layla](/fr/power-local-llm/layla-review)',
            'Plateformes': 'Android et iOS',
            'Prix': '19,99 $ à l\'achat, plus des paliers intégrés',
            'Flexibilité des modèles': 'Moteurs de modèles GGUF, LiteRT-LM et PTE',
            'Différence clé': 'Orientée persona et jeu de rôle, avec un mode cloud optionnel ; code fermé',
          },
          {
            'Appli': '[RikkaHub](/fr/power-local-llm/rikkahub-review)',
            'Plateformes': 'Android uniquement',
            'Prix': 'Gratuite, open source',
            'Flexibilité des modèles': 'Modèles GGUF, selon sa propre fiche',
            'Différence clé': 'Une autre option Android gratuite et open source — comparez directement la profondeur des fonctionnalités',
          },
          {
            'Appli': '[Maid](/fr/power-local-llm/maid-review)',
            'Plateformes': 'Android et iOS',
            'Prix': 'Gratuite, open source',
            'Flexibilité des modèles': 'Modèles GGUF via llama.cpp',
            'Différence clé': 'Multiplateforme (iOS aussi), client de chat mono-fonction plus simple',
          },
        ],
        note: 'Les détails de plateforme, de prix et de fonctionnalités des applications tierces changent fréquemment — vérifiez les informations actuelles sur la fiche de chaque application avant de décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Qui devrait utiliser ToolNeuron',
        items: [
          '**Les utilisateurs Android qui veulent une application d\'IA gratuite, open source et sur l\'appareil.** Le code source complet est public, et il n\'y a aucun coût à l\'installation ou à l\'utilisation.',
          '**Les lecteurs qui veulent plus qu\'un simple chat.** RAG documentaire, entrée/sortie vocale et un serveur API local sont intégrés plutôt que de nécessiter des applications séparées.',
          '**Les utilisateurs soucieux de confidentialité qui apprécient un modèle de sécurité documenté.** Le stockage local chiffré et l\'authentification par PIN vont au-delà d\'une simple déclaration de politique de confidentialité.',
          '**Les développeurs qui veulent étendre l\'application.** Le système de plugins et la base de code open source permettent une personnalisation directe, contrairement à une alternative à code fermé.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Qui ne devrait pas utiliser ToolNeuron',
        items: [
          '**Les utilisateurs iPhone, bureau ou web.** ToolNeuron est réservée à Android ; il n\'existe aucune version iOS, Mac, Windows, Linux ou basée sur navigateur.',
          '**Les propriétaires d\'appareils sous Android 11 ou antérieur, ou de matériel 32 bits uniquement.** L\'application nécessite Android 12 (API 31) ou plus récent sur arm64-v8a ou x86_64.',
          '**Les lecteurs qui ont besoin d\'un historique établi avant de faire confiance à une application.** ToolNeuron est plus récente et a un historique public plus restreint que certaines alternatives établies de longue date.',
          '**Les lecteurs qui veulent une application de chat unique et simple, sans rien d\'autre.** L\'ensemble de fonctionnalités plus large (RAG, voix, plugins, un serveur local) est un avantage pour certains lecteurs et une complexité inutile pour d\'autres.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'ToolNeuron est-elle gratuite ?',
            a: 'Oui. ToolNeuron est gratuite à installer et à utiliser, et open source sous licence MIT, selon son dépôt GitHub.',
          },
          {
            q: 'Qui développe ToolNeuron ?',
            a: 'ToolNeuron est développée et maintenue par [Siddhesh Sonar](https://github.com/Siddhesh2377).',
          },
          {
            q: 'Quels modèles ToolNeuron prend-elle en charge ?',
            a: 'Tout modèle compatible au format GGUF, y compris des familles courantes comme Llama, Mistral et Gemma, exécutés via [llama.cpp](https://github.com/ggml-org/llama.cpp). Un navigateur Hugging Face intégré aide à trouver et télécharger des modèles.',
          },
          {
            q: 'ToolNeuron fonctionne-t-elle sans connexion internet ?',
            a: 'Oui, pour ses fonctionnalités principales. Le README du projet indique que l\'application n\'a aucune composante cloud et aucune télémétrie ; une connexion internet n\'est nécessaire que pour télécharger un modèle ou une mise à jour de l\'application.',
          },
          {
            q: 'Quelle version d\'Android ToolNeuron nécessite-t-elle ?',
            a: 'Android 12 (niveau d\'API 31) ou plus récent, sur du matériel arm64-v8a ou x86_64, selon la configuration de build publique du projet.',
          },
          {
            q: 'ToolNeuron est-elle open source ?',
            a: 'Oui. L\'application est publiée sur [GitHub](https://github.com/Siddhesh2377/ToolNeuron) sous licence MIT, et le code source peut être audité ou compilé directement.',
          },
          {
            q: 'Quelles fonctionnalités supplémentaires ToolNeuron propose-t-elle au-delà du chat ?',
            a: 'RAG documentaire sur des formats de fichiers courants, entrée et sortie vocale via sherpa-onnx, un serveur HTTP local compatible OpenAI, un navigateur de modèles Hugging Face et un système de plugins isolé (sandbox), selon le README du projet.',
          },
          {
            q: 'Comment ToolNeuron se compare-t-elle à Layla ou RikkaHub ?',
            a: 'ToolNeuron est gratuite et open source avec un ensemble de fonctionnalités intégrées plus large (RAG, voix, un serveur API local, des plugins). [Layla](/fr/power-local-llm/layla-review) est une application payante à code fermé à 19,99 $ pour Android et iOS, orientée persona/jeu de rôle avec un mode cloud optionnel. [RikkaHub](/fr/power-local-llm/rikkahub-review) est une autre application de chat Android gratuite et open source. Choisissez selon que vous privilégiez l\'ensemble de fonctionnalités plus large de ToolNeuron, l\'orientation jeu de rôle multiplateforme de Layla, ou un client mono-fonction plus simple.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'ToolNeuron propose une application d\'IA sur l\'appareil pour Android véritablement large, gratuite et open source : chat GGUF via llama.cpp, RAG documentaire, entrée/sortie vocale, un serveur API local compatible OpenAI et un système de plugins, le tout appuyé par une architecture de sécurité documentée axée sur le chiffrement plutôt que par une vague promesse de confidentialité.',
          'Le code source publié sous licence MIT est un avantage significatif par rapport aux alternatives Android à code fermé — les lecteurs qui tiennent à vérifier ce qu\'une application fait réellement avec les données locales peuvent examiner le code directement plutôt que de se fier uniquement à une fiche.',
          'Ce qui garde cet avis mesuré plutôt qu\'inconditionnellement enthousiaste, c\'est la jeunesse relative de l\'application et l\'absence de tests de performance pratiques et indépendants de ses nombreuses fonctionnalités réalisés spécifiquement par PromptQuorum ; les lecteurs ayant des besoins critiques de performance devraient tester l\'application sur leur propre appareil avant de s\'y fier fortement.',
          'Les utilisateurs Android qui veulent une application gratuite, open source et axée sur la confidentialité offrant plus qu\'un simple chat devraient l\'essayer ; les lecteurs qui veulent une application iPhone, un client mono-fonction plus simple, ou un historique plus établi devraient plutôt envisager [Layla](/fr/power-local-llm/layla-review) ou [RikkaHub](/fr/power-local-llm/rikkahub-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[ToolNeuron sur Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron) — prix et distribution.',
          '[Dépôt GitHub de ToolNeuron](https://github.com/Siddhesh2377/ToolNeuron) — README, licence, documentation de sécurité et métadonnées du dépôt, vérifiés le 12/09/2026.',
          '[Site du projet ToolNeuron](https://tool-neuron.vercel.app/) — présentation du produit.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis Layla](/fr/power-local-llm/layla-review) — une application compagne payante et multiplateforme sur l\'appareil, avec un mode cloud optionnel.',
          '[Avis RikkaHub](/fr/power-local-llm/rikkahub-review) — une autre application de chat Android gratuite et open source pour l\'IA locale.',
          '[Avis Maid](/fr/power-local-llm/maid-review) — un client de chat gratuit, open source et multiplateforme (Android et iOS).',
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — une application d\'IA locale gratuite et open source avec support iOS et partiel Android.',
          '[Le répertoire complet de logiciels LLM locaux](/fr/power-local-llm/local-llm-software-directory) — un répertoire plus large d\'outils LLM locaux sur toutes les plateformes.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/toolneuron-review-hero-es.webp',
    title: 'Reseña de ToolNeuron (2026): app Android de código abierto para IA cifrada en el dispositivo',
    seoTitle: 'ToolNeuron 2026: app Android de chat IA cifrado local',
    intro:
      '[ToolNeuron](https://play.google.com/store/apps/details?id=com.dark.tool_neuron), desarrollada por [Siddhesh Sonar](https://github.com/Siddhesh2377) y publicada como código abierto bajo la [licencia MIT](https://github.com/Siddhesh2377/ToolNeuron/blob/re-write/LICENSE), es una app gratuita para Android que ejecuta modelos de lenguaje en formato GGUF en el dispositivo mediante llama.cpp, con RAG documental, entrada/salida de voz, un servidor HTTP local compatible con OpenAI y un sistema de plugins añadido. Según el propio README del proyecto, el objetivo de diseño central es "sin servicios de Google Play, sin telemetría, sin nube", respaldado con cifrado AES-256-GCM basado en Android Keystore y autenticación Argon2id para los datos almacenados. Esta reseña cubre qué hace la app, qué requiere y cómo se sitúa frente a otras apps de chat Android en el dispositivo como Layla y RikkaHub, basándose en el repositorio público de GitHub del proyecto y su ficha en Play Store, no en pruebas prácticas independientes.',
    metaDescription:
      'Reseña de ToolNeuron 2026: app Android gratuita y de código abierto (MIT) para chat de IA cifrado en el dispositivo, RAG documental, voz y generación de imágenes local. Requisitos, modelo de seguridad y comparación con Layla y RikkaHub.',
    twitterDescription:
      'Reseña de ToolNeuron: una app Android gratuita y de código abierto que ejecuta modelos GGUF totalmente en el dispositivo — almacenamiento local cifrado, RAG documental, entrada/salida de voz, un servidor local compatible con OpenAI y un sistema de plugins. Sin nube, sin telemetría, según el propio README del proyecto.',
    audience:
      'Usuarios de Android que consideran una app de chat de IA gratuita, de código abierto y centrada en la privacidad, ejecutada en el dispositivo — cubre el modelo de seguridad, las funciones compatibles, los requisitos de hardware y la comparación con otras apps de IA local para Android reseñadas en este sitio.',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'ToolNeuron review',
    targetKeywords: [
      'toolneuron review',
      'toolneuron android',
      'toolneuron app',
      'open source local ai android',
      'encrypted offline ai chat app',
      'on-device llm android app',
      'toolneuron vs layla',
      'free local ai app android',
    ],
    current_models_mentioned: ['Llama', 'Mistral', 'Gemma', 'GGUF models'],
    current_hardware_mentioned: ['Android 12'],
    leadAnswerBlock:
      '**ToolNeuron es una app Android gratuita y de código abierto (MIT) que ejecuta modelos de lenguaje GGUF por completo en el dispositivo mediante llama.cpp, con RAG documental, entrada/salida de voz y un servidor HTTP local compatible con OpenAI — sin componente en la nube, sin telemetría, según el propio README del proyecto.** Creada por [Siddhesh Sonar](https://github.com/Siddhesh2377), la app protege su almacenamiento local con cifrado AES-256-GCM respaldado por Android Keystore y autenticación Argon2id, y requiere Android 12 (API 31) o posterior. Los lectores que busquen un punto de comparación también pueden leer la [reseña de Layla](/es/power-local-llm/layla-review) o la [reseña de RikkaHub](/es/power-local-llm/rikkahub-review).',
    quickAnswerTop: {
      en: {
        question: 'Is ToolNeuron worth installing?',
        answer:
          'Yes, if you want a free, open-source Android app that runs AI models fully on-device with encrypted local storage and no cloud dependency, and your phone runs Android 12 or newer. It adds document chat (RAG), voice input/output, and a local OpenAI-compatible API server on top of plain chat — features many single-purpose chat apps skip. Skip it if you want an iPhone app (it is Android-only) or prefer a much larger, more established curated model library; compare it against Layla or RikkaHub first.',
        bullets: [
          'Free and open source under the MIT license; no in-app purchases documented in the project\'s own repository.',
          'Runs GGUF models (Llama, Mistral, Gemma, and other GGUF-compatible families) on-device via llama.cpp, per the GitHub repository.',
          'Adds document RAG (PDF, DOCX, XLSX, and more), voice input/output via sherpa-onnx, a local OpenAI-compatible HTTP server, and a plugin system.',
          'Local storage is encrypted with Android Keystore AES-256-GCM and Argon2id authentication, per the project\'s README.',
          'Requires Android 12 (API 31) or newer on an arm64-v8a or x86_64 device, per the project\'s build configuration.',
        ],
        updatedDate: '2026-09-12',
      },
      es: {
        question: '¿Vale la pena instalar ToolNeuron?',
        answer:
          'Sí, si quieres una app Android gratuita y de código abierto que ejecute modelos de IA totalmente en el dispositivo con almacenamiento local cifrado y sin dependencia de la nube, y tu teléfono usa Android 12 o posterior. Añade chat documental (RAG), entrada/salida de voz y un servidor API local compatible con OpenAI además del chat simple — funciones que muchas apps de chat de un solo propósito no ofrecen. Sáltatela si quieres una app para iPhone (es exclusiva de Android) o prefieres una biblioteca de modelos mucho más grande y consolidada; compárala primero con Layla o RikkaHub.',
        bullets: [
          'Gratuita y de código abierto bajo licencia MIT; no hay compras dentro de la app documentadas en el propio repositorio del proyecto.',
          'Ejecuta modelos GGUF (Llama, Mistral, Gemma y otras familias compatibles con GGUF) en el dispositivo mediante llama.cpp, según el repositorio de GitHub.',
          'Añade RAG documental (PDF, DOCX, XLSX y más), entrada/salida de voz mediante sherpa-onnx, un servidor HTTP local compatible con OpenAI y un sistema de plugins.',
          'El almacenamiento local está cifrado con Android Keystore AES-256-GCM y autenticación Argon2id, según el README del proyecto.',
          'Requiere Android 12 (API 31) o posterior en un dispositivo arm64-v8a o x86_64, según la configuración de compilación del proyecto.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Conseguir ToolNeuron', anchor: 'get-it' },
      { label: 'Qué es ToolNeuron', anchor: 'what-is-toolneuron' },
      { label: 'Quién creó ToolNeuron', anchor: 'who-built-it' },
      { label: 'Cómo empezar', anchor: 'how-to-get-started' },
      { label: 'Modelos y funciones compatibles', anchor: 'models-and-features' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Privacidad y seguridad', anchor: 'privacy' },
      { label: 'Ventajas frente a limitaciones', anchor: 'tradeoffs' },
      { label: 'ToolNeuron frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar ToolNeuron', anchor: 'who-should-use' },
      { label: 'Quién no debería usar ToolNeuron', anchor: 'who-should-not-use' },
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
            text: 'ToolNeuron es una app Android gratuita y de código abierto (MIT) del desarrollador Siddhesh Sonar que ejecuta modelos de lenguaje GGUF en el dispositivo mediante llama.cpp, sumando almacenamiento local cifrado, RAG documental, entrada/salida de voz, un servidor HTTP local compatible con OpenAI y un sistema de plugins, sin componente en la nube ni telemetría según el propio README del proyecto.',
          },
          {
            type: 'plain-terms',
            text: 'Piénsala como una app de chat Android gratuita y de código abierto que además te permite hablar con tus propios documentos y usar la voz, todo funcionando en tu teléfono con el cifrado que cabría esperar de un proyecto centrado en la seguridad — no un simple envoltorio sobre una API en la nube.',
          },
        ],
        items: [
          'Precio: gratuita para [descargar](https://play.google.com/store/apps/details?id=com.dark.tool_neuron) y usar; código abierto bajo licencia MIT, sin compras dentro de la app documentadas en el repositorio.',
          'Desarrollador: [Siddhesh Sonar](https://github.com/Siddhesh2377).',
          'Motor: [llama.cpp](https://github.com/ggml-org/llama.cpp) para modelos de chat GGUF, más [sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) para voz, todo ejecutado por completo en el dispositivo.',
          'Funciones más allá del chat: RAG documental (PDF, DOCX, XLSX, PPTX, EPUB y más), entrada/salida de voz, un servidor HTTP local compatible con OpenAI, un explorador de modelos de Hugging Face y un sistema de plugins aislado (sandbox), según el README del proyecto.',
          'Seguridad: los datos locales están cifrados con Android Keystore AES-256-GCM y autenticación Argon2id, según la propia documentación del proyecto.',
          'Requisito: Android 12 (API 31) o posterior, en hardware arm64-v8a o x86_64, según la configuración de compilación del proyecto.',
          'Estado de código abierto: licencia MIT, código fuente publicado en [GitHub](https://github.com/Siddhesh2377/ToolNeuron) — auditable de forma independiente, a diferencia de las alternativas de código cerrado.',
          'Distribución: disponible en [Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron) y como descargas directas de APK desde GitHub Releases.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Conseguir ToolNeuron',
        content: [
          '**ToolNeuron está disponible en Google Play o como descarga directa de APK desde su página de GitHub Releases.** Ambos canales de distribución ofrecen la misma app de código abierto.',
          'Esta reseña complementa el [directorio de software LLM local](/es/power-local-llm/local-llm-software-directory) de PromptQuorum, que cataloga herramientas de IA local en distintas plataformas, incluida la propia ficha de ToolNeuron.',
        ],
        columns: ['Canal', 'Conseguir'],
        rows: [
          {
            'Canal': 'Google Play',
            'Conseguir': '[ToolNeuron en Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)',
          },
          {
            'Canal': 'GitHub (APK)',
            'Conseguir': '[Releases de ToolNeuron en GitHub](https://github.com/Siddhesh2377/ToolNeuron/releases)',
          },
        ],
        note: 'La app es gratuita por cualquiera de las dos vías — GitHub también aloja el código fuente completo para los lectores que quieran auditarlo o compilarlo ellos mismos.',
      },
      whatIsToolNeuron: {
        id: 'what-is-toolneuron',
        title: 'Qué es ToolNeuron',
        content: [
          '**ToolNeuron es una app Android que ejecuta modelos de lenguaje en formato GGUF directamente en el dispositivo mediante llama.cpp, sin componente en el servidor.** Según la propia descripción del proyecto, su objetivo es ser "IA en el dispositivo para Android. Sin servicios de Google Play, sin telemetría, sin nube" — modelos, chats, documentos usados para recuperación y el material de las claves de cifrado están todos diseñados para quedarse en el teléfono.',
          'Más allá del chat simple, la app incluye recuperación documental (RAG) sobre formatos de archivo habituales, entrada y salida de voz mediante el motor de voz sherpa-onnx, un servidor HTTP local que expone una API compatible con OpenAI para que otras apps se conecten, un explorador de modelos de Hugging Face integrado y un sistema de plugins aislado (sandbox) para instalar capacidades adicionales.',
          'Esta reseña se basa en el repositorio público de GitHub del proyecto — su README, archivo de licencia y metadatos del repositorio — y en la ficha de Google Play, no en una auditoría de código independiente ni en pruebas de rendimiento prácticas.',
        ],
      },
      whoBuiltIt: {
        id: 'who-built-it',
        title: 'Quién creó ToolNeuron',
        content: [
          '**ToolNeuron es creada y mantenida por el desarrollador [Siddhesh Sonar](https://github.com/Siddhesh2377), quien publica el proyecto abiertamente en GitHub bajo licencia MIT.** El repositorio muestra un desarrollo activo y detallado: una arquitectura de seguridad documentada, una base de código modular dividida en componentes de app, inferencia, cifrado y red, y una comunidad pública de Discord para usuarios y colaboradores.',
          'Como el código fuente está publicado en lugar de cerrado, las afirmaciones sobre lo que la app hace — y no hace — con los datos locales pueden verificarse directamente en el código, en lugar de depender solo de la descripción del desarrollador.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Cómo empezar',
        content: [
          '**Configurar ToolNeuron lleva unos pocos pasos y no requiere crear ninguna cuenta.** El proceso completo, desde la instalación hasta la primera respuesta sin conexión, tarda unos minutos más el tiempo que tarde en descargarse el modelo elegido.',
        ],
        numberedItems: [
          {
            title: 'Instalar la app',
            whyItMatters: 'Consigue [ToolNeuron en Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron), o descarga la APK directamente desde [GitHub Releases](https://github.com/Siddhesh2377/ToolNeuron/releases). La app en sí es gratuita en ambos casos.',
          },
          {
            title: 'Configurar el cifrado local',
            whyItMatters: 'La app configura su cifrado respaldado por Android Keystore y un PIN de 6 dígitos al primer inicio, según la documentación de seguridad del proyecto, antes de que se almacenen los datos del chat.',
          },
          {
            title: 'Explorar y descargar un modelo GGUF',
            whyItMatters: 'Usa el explorador integrado de Hugging Face para encontrar un modelo GGUF compatible, o aporta el tuyo propio. Este paso requiere conexión a internet; el chat después no la necesita.',
          },
          {
            title: 'Chatear, o añadir documentos para RAG',
            whyItMatters: 'Una vez descargado un modelo, el chat se ejecuta por completo en el dispositivo mediante llama.cpp. Adjunta un documento compatible (PDF, DOCX y otros) a una conversación para que el modelo responda a partir de él.',
          },
          {
            title: 'Opcional: activar la voz o el servidor API local',
            whyItMatters: 'La entrada/salida de voz y el servidor HTTP local compatible con OpenAI son ambas funciones opcionales añadidas sobre el chat simple — ninguna de las dos es necesaria para usar la app.',
          },
        ],
        note: 'La compatibilidad exacta de modelos y los tamaños de descarga varían según el archivo GGUF elegido — confirma el tamaño y la licencia de un modelo en su propia página de Hugging Face antes de descargarlo con un plan de datos limitado.',
      },
      modelsAndFeatures: {
        id: 'models-and-features',
        title: 'Modelos y funciones compatibles',
        content: [
          '**ToolNeuron ejecuta cualquier modelo compatible en formato GGUF, incluidas familias habituales como Llama, Mistral y Gemma, mediante [llama.cpp](https://github.com/ggml-org/llama.cpp).** Un explorador de Hugging Face integrado permite a los lectores filtrar los modelos disponibles por etiqueta de pipeline, número de parámetros, cuantización y licencia antes de descargar.',
          'Más allá del chat, el propio README del proyecto enumera: RAG documental sobre PDF, DOCX, XLSX, PPTX, ODT, EPUB, RTF, Markdown, HTML, JSON, XML, CSV y texto plano; entrada y salida de voz mediante el motor sherpa-onnx (voces VITS, Piper y Whisper); generación de imágenes local, añadida a la app en mayo de 2026 según las notas de cambios del proyecto; un servidor HTTP local que expone una API compatible con OpenAI con su propia interfaz web; y un sistema de plugins aislado (sandbox) para instalar extensiones creadas por la comunidad.',
          'Es un conjunto de funciones más amplio que el de un cliente de chat de un solo propósito, y cada función pasa por el mismo motor en el dispositivo en lugar de llamar a un servicio en la nube, según la documentación del proyecto.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**ToolNeuron requiere Android 12 (nivel de API 31) o posterior, en hardware arm64-v8a o x86_64, según la configuración de compilación pública del proyecto.** Como con cualquier app de LLM en el dispositivo, el límite práctico de hardware depende más de qué modelo GGUF se cargue — su número de parámetros y su cuantización — que de una especificación fija única; un modelo pequeño cuantizado necesita mucha menos memoria que uno grande.',
          'Los lectores con versiones de Android más antiguas o dispositivos exclusivamente de 32 bits deben esperar que la app no se instale, ya que el SDK mínimo y los filtros de ABI los aplica el propio paquete de Android, no es solo una recomendación blanda.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y seguridad',
        content: [
          '**El objetivo de diseño declarado de ToolNeuron es evitar cualquier dependencia de la nube: no requiere servicios de Google Play, no hay telemetría y no hay componente en el servidor para sus funciones principales de chat y RAG, según el propio README del proyecto.** Esto se refuerza con una arquitectura de seguridad inusualmente detallada y documentada públicamente, en lugar de una afirmación de privacidad de una sola línea.',
          'Los datos locales — incluido el propio material de las claves de cifrado — están protegidos con una clave AES-256-GCM respaldada por Android Keystore (StrongBox preferido cuando el dispositivo lo admite) y autenticación por PIN basada en Argon2id, según la documentación de seguridad del proyecto. Esa misma documentación describe un mecanismo de bloqueo que se intensifica tras intentos de PIN fallidos repetidos, y una función opcional de PIN de pánico que borra los datos locales de la app.',
        ],
        items: [
          '**No se requiere cuenta.** La app puede instalarse y usarse sin crear un perfil ni iniciar sesión.',
          '**Sin componente en la nube para las funciones principales.** Chat, RAG y voz están todos diseñados para ejecutarse en el dispositivo, según el README del proyecto.',
          '**Almacenamiento local cifrado.** Chats, documentos y claves de cifrado están protegidos con Android Keystore AES-256-GCM y autenticación Argon2id, según la documentación del proyecto.',
          '**Código abierto.** Como el código fuente de la app está publicado bajo licencia MIT, sus afirmaciones de arquitectura y manejo de datos pueden verificarse directamente en el código en lugar de depender solo de las declaraciones del desarrollador.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Ventajas frente a limitaciones',
        columns: ['Ventaja', 'Qué significa en la práctica', 'Limitación / advertencia'],
        rows: [
          {
            'Ventaja': 'Gratuita y de código abierto (MIT)',
            'Qué significa en la práctica': 'Sin coste, y el código fuente completo está disponible para auditar en GitHub.',
            'Limitación / advertencia': 'Ser de código abierto no garantiza por sí solo que se haya realizado una auditoría de seguridad independiente.',
          },
          {
            'Ventaja': 'Conjunto de funciones más amplio que el chat simple',
            'Qué significa en la práctica': 'RAG documental, voz, un servidor API local y plugins vienen todos integrados, no son apps separadas que gestionar.',
            'Limitación / advertencia': 'Más piezas en movimiento que una app de chat de un solo propósito; esta reseña no ha verificado de forma independiente la fiabilidad de cada función.',
          },
          {
            'Ventaja': 'Modelo de seguridad detallado y documentado',
            'Qué significa en la práctica': 'El almacenamiento local cifrado y la autenticación por PIN protegen los datos si el teléfono se pierde o accede a él otra persona.',
            'Limitación / advertencia': 'La documentación de seguridad es del propio proyecto; esta reseña no ha sometido la app a una prueba de penetración independiente.',
          },
          {
            'Ventaja': 'Sin dependencia de la nube para las funciones principales',
            'Qué significa en la práctica': 'Chat, RAG y voz funcionan todos sin conexión una vez descargado un modelo, según el README del proyecto.',
            'Limitación / advertencia': 'Solo Android — no existe versión para iPhone, escritorio ni web.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'ToolNeuron frente a alternativas',
        columns: ['App', 'Plataformas', 'Precio', 'Flexibilidad de modelos', 'Diferencia clave'],
        rows: [
          {
            'App': 'ToolNeuron',
            'Plataformas': 'Solo Android',
            'Precio': 'Gratuita, código abierto (MIT)',
            'Flexibilidad de modelos': 'Cualquier modelo GGUF mediante un explorador de Hugging Face integrado',
            'Diferencia clave': 'El conjunto de funciones más amplio aquí — RAG, voz, servidor API local y plugins además del chat',
          },
          {
            'App': '[Layla](/es/power-local-llm/layla-review)',
            'Plataformas': 'Android e iOS',
            'Precio': '19,99 $ de pago único, más niveles dentro de la app',
            'Flexibilidad de modelos': 'Motores de modelos GGUF, LiteRT-LM y PTE',
            'Diferencia clave': 'Enfocada en personajes y rol, con un modo en la nube opcional; código cerrado',
          },
          {
            'App': '[RikkaHub](/es/power-local-llm/rikkahub-review)',
            'Plataformas': 'Solo Android',
            'Precio': 'Gratuita, código abierto',
            'Flexibilidad de modelos': 'Modelos GGUF, según su propia ficha',
            'Diferencia clave': 'Otra opción Android gratuita y de código abierto — compara directamente la profundidad de funciones',
          },
          {
            'App': '[Maid](/es/power-local-llm/maid-review)',
            'Plataformas': 'Android e iOS',
            'Precio': 'Gratuita, código abierto',
            'Flexibilidad de modelos': 'Modelos GGUF mediante llama.cpp',
            'Diferencia clave': 'Multiplataforma (también iOS), cliente de chat de un solo propósito más simple',
          },
        ],
        note: 'Los detalles de plataforma, precio y funciones de apps de terceros cambian con frecuencia — verifica los datos actuales en la ficha de cada app antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar ToolNeuron',
        items: [
          '**Usuarios de Android que quieren una app de IA gratuita, de código abierto y en el dispositivo.** El código fuente completo es público, y no hay coste alguno por instalarla o usarla.',
          '**Lectores que quieren más que un chat simple.** RAG documental, entrada/salida de voz y un servidor API local vienen integrados en lugar de requerir apps separadas.',
          '**Usuarios preocupados por la privacidad que valoran un modelo de seguridad documentado.** El almacenamiento local cifrado y la autenticación por PIN van más allá de una simple declaración de política de privacidad.',
          '**Desarrolladores que quieren ampliar la app.** El sistema de plugins y la base de código abierto permiten personalización directa, a diferencia de una alternativa de código cerrado.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar ToolNeuron',
        items: [
          '**Usuarios de iPhone, escritorio o web.** ToolNeuron es exclusiva de Android; no existe versión para iOS, Mac, Windows, Linux ni basada en navegador.',
          '**Propietarios de dispositivos con Android 11 o anterior, o hardware exclusivamente de 32 bits.** La app requiere Android 12 (API 31) o posterior en arm64-v8a o x86_64.',
          '**Lectores que necesitan un historial consolidado antes de confiar en una app.** ToolNeuron es más reciente y tiene un historial público menor que algunas alternativas más establecidas.',
          '**Lectores que quieren una app de chat única y simple, sin nada más.** El conjunto de funciones más amplio (RAG, voz, plugins, un servidor local) es una ventaja para algunos lectores y complejidad innecesaria para otros.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿ToolNeuron es gratuita?',
            a: 'Sí. ToolNeuron es gratuita para instalar y usar, y de código abierto bajo licencia MIT, según su repositorio de GitHub.',
          },
          {
            q: '¿Quién desarrolla ToolNeuron?',
            a: 'ToolNeuron es creada y mantenida por el desarrollador [Siddhesh Sonar](https://github.com/Siddhesh2377).',
          },
          {
            q: '¿Qué modelos admite ToolNeuron?',
            a: 'Cualquier modelo compatible en formato GGUF, incluidas familias habituales como Llama, Mistral y Gemma, ejecutados mediante [llama.cpp](https://github.com/ggml-org/llama.cpp). Un explorador de Hugging Face integrado ayuda a encontrar y descargar modelos.',
          },
          {
            q: '¿Funciona ToolNeuron sin conexión a internet?',
            a: 'Sí, para sus funciones principales. El README del proyecto indica que la app no tiene componente en la nube ni telemetría; solo se necesita conexión a internet para descargar un modelo o una actualización de la app.',
          },
          {
            q: '¿Qué versión de Android necesita ToolNeuron?',
            a: 'Android 12 (nivel de API 31) o posterior, en hardware arm64-v8a o x86_64, según la configuración de compilación pública del proyecto.',
          },
          {
            q: '¿ToolNeuron es de código abierto?',
            a: 'Sí. La app está publicada en [GitHub](https://github.com/Siddhesh2377/ToolNeuron) bajo licencia MIT, y el código fuente puede auditarse o compilarse directamente.',
          },
          {
            q: '¿Qué funciones adicionales tiene ToolNeuron más allá del chat?',
            a: 'RAG documental sobre formatos de archivo habituales, entrada y salida de voz mediante sherpa-onnx, un servidor HTTP local compatible con OpenAI, un explorador de modelos de Hugging Face y un sistema de plugins aislado (sandbox), según el README del proyecto.',
          },
          {
            q: '¿Cómo se compara ToolNeuron con Layla o RikkaHub?',
            a: 'ToolNeuron es gratuita y de código abierto con un conjunto de funciones integradas más amplio (RAG, voz, un servidor API local, plugins). [Layla](/es/power-local-llm/layla-review) es una app de pago y código cerrado de 19,99 $ para Android e iOS, enfocada en personajes/rol y con un modo en la nube opcional. [RikkaHub](/es/power-local-llm/rikkahub-review) es otra app de chat Android gratuita y de código abierto. Elige según si valoras más el conjunto de funciones más amplio de ToolNeuron, el enfoque de rol multiplataforma de Layla, o un cliente más simple de un solo propósito.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'ToolNeuron ofrece una app de IA en el dispositivo para Android genuinamente amplia, gratuita y de código abierto: chat GGUF mediante llama.cpp, RAG documental, entrada/salida de voz, un servidor API local compatible con OpenAI y un sistema de plugins, todo respaldado por una arquitectura de seguridad documentada centrada en el cifrado en lugar de una vaga promesa de privacidad.',
          'El código fuente publicado bajo licencia MIT es una ventaja significativa frente a las alternativas Android de código cerrado — los lectores a quienes les importa verificar qué hace realmente una app con los datos locales pueden revisar el código directamente en lugar de confiar solo en una ficha.',
          'Lo que mantiene esta reseña mesurada en lugar de incondicionalmente entusiasta es la juventud relativa de la app y la ausencia de pruebas de rendimiento prácticas e independientes de sus muchas funciones realizadas específicamente por PromptQuorum; los lectores con necesidades críticas de rendimiento deberían probar la app en su propio dispositivo antes de depender mucho de ella.',
          'Los usuarios de Android que quieran una app gratuita, de código abierto y centrada en la privacidad con más que un chat simple deberían probarla; los lectores que quieran una app para iPhone, un cliente de un solo propósito más simple o un historial más establecido deberían considerar en su lugar [Layla](/es/power-local-llm/layla-review) o [RikkaHub](/es/power-local-llm/rikkahub-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[ToolNeuron en Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron) — precio y distribución.',
          '[Repositorio de GitHub de ToolNeuron](https://github.com/Siddhesh2377/ToolNeuron) — README, licencia, documentación de seguridad y metadatos del repositorio, verificado el 12/09/2026.',
          '[Sitio del proyecto ToolNeuron](https://tool-neuron.vercel.app/) — presentación del producto.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Layla](/es/power-local-llm/layla-review) — una app compañera de pago y multiplataforma en el dispositivo, con un modo en la nube opcional.',
          '[Reseña de RikkaHub](/es/power-local-llm/rikkahub-review) — otra app de chat Android gratuita y de código abierto para IA local.',
          '[Reseña de Maid](/es/power-local-llm/maid-review) — un cliente de chat gratuito, de código abierto y multiplataforma (Android e iOS).',
          '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — una app de IA local gratuita y de código abierto con soporte para iOS y parcial para Android.',
          '[El directorio completo de software LLM local](/es/power-local-llm/local-llm-software-directory) — un directorio más amplio de herramientas de LLM local en distintas plataformas.',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/toolneuron-review-hero-pt.webp',
    title: 'Análise do ToolNeuron (2026): app Android de código aberto para IA criptografada no dispositivo',
    seoTitle: 'ToolNeuron 2026: app Android de chat de IA criptografado local',
    intro:
      'O [ToolNeuron](https://play.google.com/store/apps/details?id=com.dark.tool_neuron), desenvolvido por [Siddhesh Sonar](https://github.com/Siddhesh2377) e publicado como código aberto sob a [licença MIT](https://github.com/Siddhesh2377/ToolNeuron/blob/re-write/LICENSE), é um app Android gratuito que executa modelos de linguagem no formato GGUF no próprio dispositivo via llama.cpp, com RAG de documentos, entrada/saída de voz, um servidor HTTP local compatível com OpenAI e um sistema de plugins. Segundo o próprio README do projeto, o objetivo central de design é "nenhum serviço do Google Play, nenhuma telemetria, nenhuma nuvem", reforçado com criptografia AES-256-GCM baseada no Android Keystore e autenticação Argon2id para os dados armazenados. Esta análise aborda o que o app faz, o que ele exige e como se posiciona diante de outros apps de chat Android no dispositivo, como Layla e RikkaHub, com base no repositório público do GitHub do projeto e na ficha da Play Store, não em testes práticos independentes.',
    metaDescription:
      'Análise do ToolNeuron 2026: app Android gratuito e de código aberto (MIT) para chat de IA criptografado no dispositivo, RAG de documentos, voz e geração de imagens local. Requisitos, modelo de segurança e comparação com Layla e RikkaHub.',
    twitterDescription:
      'Análise do ToolNeuron: um app Android gratuito e de código aberto que executa modelos GGUF totalmente no dispositivo — armazenamento local criptografado, RAG de documentos, entrada/saída de voz, um servidor local compatível com OpenAI e um sistema de plugins. Sem nuvem, sem telemetria, segundo o próprio README do projeto.',
    audience:
      'Usuários Android que consideram um app de chat de IA gratuito, de código aberto e focado em privacidade, executado no dispositivo — aborda o modelo de segurança, os recursos suportados, os requisitos de hardware e a comparação com outros apps Android de IA local avaliados neste site.',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'ToolNeuron review',
    targetKeywords: [
      'toolneuron review',
      'toolneuron android',
      'toolneuron app',
      'open source local ai android',
      'encrypted offline ai chat app',
      'on-device llm android app',
      'toolneuron vs layla',
      'free local ai app android',
    ],
    current_models_mentioned: ['Llama', 'Mistral', 'Gemma', 'GGUF models'],
    current_hardware_mentioned: ['Android 12'],
    leadAnswerBlock:
      '**O ToolNeuron é um app Android gratuito e de código aberto (MIT) que executa modelos de linguagem GGUF totalmente no dispositivo via llama.cpp, com RAG de documentos, entrada/saída de voz e um servidor HTTP local compatível com OpenAI — sem componente na nuvem, sem telemetria, segundo o próprio README do projeto.** Criado por [Siddhesh Sonar](https://github.com/Siddhesh2377), o app protege seu armazenamento local com criptografia AES-256-GCM apoiada no Android Keystore e autenticação Argon2id, e exige Android 12 (API 31) ou mais recente. Leitores que buscam um ponto de comparação também podem ler a [análise do Layla](/pt/power-local-llm/layla-review) ou a [análise do RikkaHub](/pt/power-local-llm/rikkahub-review).',
    quickAnswerTop: {
      en: {
        question: 'Is ToolNeuron worth installing?',
        answer:
          'Yes, if you want a free, open-source Android app that runs AI models fully on-device with encrypted local storage and no cloud dependency, and your phone runs Android 12 or newer. It adds document chat (RAG), voice input/output, and a local OpenAI-compatible API server on top of plain chat — features many single-purpose chat apps skip. Skip it if you want an iPhone app (it is Android-only) or prefer a much larger, more established curated model library; compare it against Layla or RikkaHub first.',
        bullets: [
          'Free and open source under the MIT license; no in-app purchases documented in the project\'s own repository.',
          'Runs GGUF models (Llama, Mistral, Gemma, and other GGUF-compatible families) on-device via llama.cpp, per the GitHub repository.',
          'Adds document RAG (PDF, DOCX, XLSX, and more), voice input/output via sherpa-onnx, a local OpenAI-compatible HTTP server, and a plugin system.',
          'Local storage is encrypted with Android Keystore AES-256-GCM and Argon2id authentication, per the project\'s README.',
          'Requires Android 12 (API 31) or newer on an arm64-v8a or x86_64 device, per the project\'s build configuration.',
        ],
        updatedDate: '2026-09-12',
      },
      pt: {
        question: 'Vale a pena instalar o ToolNeuron?',
        answer:
          'Sim, se você quer um app Android gratuito e de código aberto que execute modelos de IA totalmente no dispositivo com armazenamento local criptografado e sem dependência de nuvem, e seu celular usa Android 12 ou mais recente. Ele adiciona chat com documentos (RAG), entrada/saída de voz e um servidor de API local compatível com OpenAI além do chat simples — recursos que muitos apps de chat de propósito único deixam de fora. Evite se você quer um app para iPhone (é exclusivo para Android) ou prefere uma biblioteca de modelos muito maior e mais consolidada; compare primeiro com Layla ou RikkaHub.',
        bullets: [
          'Gratuito e de código aberto sob a licença MIT; nenhuma compra no app documentada no próprio repositório do projeto.',
          'Executa modelos GGUF (Llama, Mistral, Gemma e outras famílias compatíveis com GGUF) no dispositivo via llama.cpp, segundo o repositório do GitHub.',
          'Adiciona RAG de documentos (PDF, DOCX, XLSX e mais), entrada/saída de voz via sherpa-onnx, um servidor HTTP local compatível com OpenAI e um sistema de plugins.',
          'O armazenamento local é criptografado com Android Keystore AES-256-GCM e autenticação Argon2id, segundo o README do projeto.',
          'Exige Android 12 (API 31) ou mais recente em um dispositivo arm64-v8a ou x86_64, segundo a configuração de build do projeto.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Como obter o ToolNeuron', anchor: 'get-it' },
      { label: 'O que é o ToolNeuron', anchor: 'what-is-toolneuron' },
      { label: 'Quem criou o ToolNeuron', anchor: 'who-built-it' },
      { label: 'Como começar', anchor: 'how-to-get-started' },
      { label: 'Modelos e recursos suportados', anchor: 'models-and-features' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Privacidade e segurança', anchor: 'privacy' },
      { label: 'Prós e contras: vantagens vs. limitações', anchor: 'tradeoffs' },
      { label: 'ToolNeuron vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Quem deveria usar o ToolNeuron', anchor: 'who-should-use' },
      { label: 'Quem não deveria usar o ToolNeuron', anchor: 'who-should-not-use' },
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
            text: 'O ToolNeuron é um app Android gratuito e de código aberto (MIT) do desenvolvedor Siddhesh Sonar que executa modelos de linguagem GGUF no dispositivo via llama.cpp, somando armazenamento local criptografado, RAG de documentos, entrada/saída de voz, um servidor HTTP local compatível com OpenAI e um sistema de plugins, sem componente de nuvem ou telemetria, segundo o próprio README do projeto.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como um app de chat Android gratuito e de código aberto que também permite conversar com seus próprios documentos e usar voz, tudo rodando no seu celular com a criptografia que se esperaria de um projeto preocupado com segurança — não um simples invólucro sobre uma API na nuvem.',
          },
        ],
        items: [
          'Preço: gratuito para [baixar](https://play.google.com/store/apps/details?id=com.dark.tool_neuron) e usar; código aberto sob a licença MIT, sem compras no app documentadas no repositório.',
          'Desenvolvedor: [Siddhesh Sonar](https://github.com/Siddhesh2377).',
          'Motor: [llama.cpp](https://github.com/ggml-org/llama.cpp) para modelos de chat GGUF, além de [sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) para voz, tudo executado totalmente no dispositivo.',
          'Recursos além do chat: RAG de documentos (PDF, DOCX, XLSX, PPTX, EPUB e mais), entrada/saída de voz, um servidor HTTP local compatível com OpenAI, um navegador de modelos do Hugging Face e um sistema de plugins isolado (sandbox), segundo o README do projeto.',
          'Segurança: os dados locais são criptografados com Android Keystore AES-256-GCM e autenticação Argon2id, segundo a documentação do próprio projeto.',
          'Requisito: Android 12 (API 31) ou mais recente, em hardware arm64-v8a ou x86_64, segundo a configuração de build do projeto.',
          'Status de código aberto: licença MIT, código-fonte publicado no [GitHub](https://github.com/Siddhesh2377/ToolNeuron) — auditável de forma independente, ao contrário de alternativas de código fechado.',
          'Distribuição: disponível no [Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron) e como downloads diretos de APK no GitHub Releases.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter o ToolNeuron',
        content: [
          '**O ToolNeuron está disponível no Google Play ou como download direto de APK na página do GitHub Releases.** Ambos os canais de distribuição oferecem o mesmo app de código aberto.',
          'Esta análise complementa o [Diretório de Software LLM Local](/pt/power-local-llm/local-llm-software-directory) da PromptQuorum, que cataloga ferramentas de IA local em várias plataformas, incluindo a própria entrada do ToolNeuron.',
        ],
        columns: ['Canal', 'Como obter'],
        rows: [
          {
            'Canal': 'Google Play',
            'Como obter': '[ToolNeuron no Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)',
          },
          {
            'Canal': 'GitHub (APK)',
            'Como obter': '[Releases do ToolNeuron no GitHub](https://github.com/Siddhesh2377/ToolNeuron/releases)',
          },
        ],
        note: 'O app é gratuito de qualquer forma — o GitHub também hospeda o código-fonte completo para leitores que queiram auditá-lo ou compilá-lo eles mesmos.',
      },
      whatIsToolNeuron: {
        id: 'what-is-toolneuron',
        title: 'O que é o ToolNeuron',
        content: [
          '**O ToolNeuron é um app Android que executa modelos de linguagem no formato GGUF diretamente no dispositivo via llama.cpp, sem componente do lado do servidor.** Segundo a própria descrição do projeto, o objetivo é ser "IA no dispositivo para Android. Sem serviços do Google Play, sem telemetria, sem nuvem" — modelos, chats, documentos usados na busca e o material das chaves de criptografia são todos projetados para permanecer no celular.',
          'Além do chat simples, o app reúne recuperação de documentos (RAG) em formatos de arquivo comuns, entrada e saída de voz pelo mecanismo de voz sherpa-onnx, um servidor HTTP local que expõe uma API compatível com OpenAI para outros apps se conectarem, um navegador de modelos do Hugging Face integrado e um sistema de plugins isolado (sandbox) para instalar recursos adicionais.',
          'Esta análise se baseia no repositório público do GitHub do projeto — seu README, arquivo de licença e metadados do repositório — e na ficha do Google Play, não em uma auditoria de código independente ou testes de desempenho práticos.',
        ],
      },
      whoBuiltIt: {
        id: 'who-built-it',
        title: 'Quem criou o ToolNeuron',
        content: [
          '**O ToolNeuron é criado e mantido pelo desenvolvedor [Siddhesh Sonar](https://github.com/Siddhesh2377), que publica o projeto abertamente no GitHub sob a licença MIT.** O repositório mostra desenvolvimento ativo e detalhado: uma arquitetura de segurança documentada, uma base de código modular dividida em componentes de app, inferência, criptografia e rede, e uma comunidade pública no Discord para usuários e colaboradores.',
          'Como o código-fonte é publicado, e não fechado, as afirmações sobre o que o app faz — e não faz — com os dados locais podem ser verificadas diretamente no código, em vez de depender apenas da descrição do desenvolvedor.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Como começar',
        content: [
          '**Configurar o ToolNeuron leva poucos passos e não exige criação de conta.** O processo completo, da instalação à primeira resposta offline, leva alguns minutos mais o tempo que o modelo escolhido levar para baixar.',
        ],
        numberedItems: [
          {
            title: 'Instalar o app',
            whyItMatters: 'Obtenha o [ToolNeuron no Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron), ou baixe a APK diretamente do [GitHub Releases](https://github.com/Siddhesh2377/ToolNeuron/releases). O app em si é gratuito de qualquer forma.',
          },
          {
            title: 'Configurar a criptografia local',
            whyItMatters: 'O app configura sua criptografia apoiada no Android Keystore e um PIN de 6 dígitos na primeira execução, segundo a documentação de segurança do projeto, antes de os dados do chat serem armazenados.',
          },
          {
            title: 'Explorar e baixar um modelo GGUF',
            whyItMatters: 'Use o navegador integrado do Hugging Face para encontrar um modelo GGUF compatível, ou forneça o seu próprio. Essa etapa exige conexão à internet; o chat depois não exige.',
          },
          {
            title: 'Conversar, ou adicionar documentos para RAG',
            whyItMatters: 'Depois de um modelo ser baixado, o chat roda totalmente no dispositivo via llama.cpp. Anexe um documento suportado (PDF, DOCX e outros) a uma conversa para que o modelo responda com base nele.',
          },
          {
            title: 'Opcional: ativar voz ou o servidor de API local',
            whyItMatters: 'Entrada/saída de voz e o servidor HTTP local compatível com OpenAI são recursos opcionais adicionados ao chat simples — nenhum dos dois é necessário para usar o app.',
          },
        ],
        note: 'A compatibilidade exata dos modelos e os tamanhos de download variam conforme o arquivo GGUF escolhido — confirme o tamanho e a licença de um modelo em sua própria página do Hugging Face antes de baixá-lo com um plano de dados limitado.',
      },
      modelsAndFeatures: {
        id: 'models-and-features',
        title: 'Modelos e recursos suportados',
        content: [
          '**O ToolNeuron executa qualquer modelo compatível no formato GGUF, incluindo famílias comuns como Llama, Mistral e Gemma, via [llama.cpp](https://github.com/ggml-org/llama.cpp).** Um navegador do Hugging Face integrado permite que os leitores filtrem os modelos disponíveis por tag de pipeline, número de parâmetros, quantização e licença antes de baixar.',
          'Além do chat, o próprio README do projeto lista: RAG de documentos em PDF, DOCX, XLSX, PPTX, ODT, EPUB, RTF, Markdown, HTML, JSON, XML, CSV e texto simples; entrada e saída de voz pelo mecanismo sherpa-onnx (vozes VITS, Piper e Whisper); geração de imagens local, adicionada ao app em maio de 2026 segundo as notas de changelog do projeto; um servidor HTTP local que expõe uma API compatível com OpenAI com interface web própria; e um sistema de plugins isolado (sandbox) para instalar extensões criadas pela comunidade.',
          'É um conjunto de recursos mais amplo do que um cliente de chat de propósito único, e cada recurso passa pelo mesmo mecanismo no dispositivo em vez de acionar um serviço na nuvem, segundo a documentação do projeto.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**O ToolNeuron exige Android 12 (nível de API 31) ou mais recente, em hardware arm64-v8a ou x86_64, segundo a configuração de build pública do projeto.** Como em qualquer app de LLM no dispositivo, o piso prático de hardware depende mais de qual modelo GGUF é carregado — seu número de parâmetros e sua quantização — do que de uma especificação fixa única; um modelo pequeno quantizado precisa de muito menos memória do que um grande.',
          'Leitores com versões mais antigas do Android ou dispositivos exclusivamente de 32 bits devem esperar que o app não se instale, já que os filtros de SDK mínimo e ABI são aplicados pelo próprio pacote Android, não apenas como uma recomendação branda.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e segurança',
        content: [
          '**O objetivo de design declarado do ToolNeuron é evitar qualquer dependência de nuvem: nenhum serviço do Google Play exigido, nenhuma telemetria e nenhum componente do lado do servidor para seus recursos principais de chat e RAG, segundo o próprio README do projeto.** Isso é reforçado por uma arquitetura de segurança documentada publicamente de forma incomumente detalhada, em vez de uma afirmação de privacidade de uma linha só.',
          'Os dados locais — incluindo o próprio material das chaves de criptografia — são protegidos com uma chave AES-256-GCM apoiada no Android Keystore (com preferência por StrongBox quando o dispositivo suporta) e autenticação por PIN baseada em Argon2id, segundo a documentação de segurança do projeto. A mesma documentação descreve um mecanismo de bloqueio que se intensifica após tentativas de PIN incorretas repetidas, e um recurso opcional de PIN de pânico que apaga os dados locais do app.',
        ],
        items: [
          '**Nenhuma conta necessária.** O app pode ser instalado e usado sem criar um perfil ou fazer login.',
          '**Nenhum componente de nuvem para os recursos principais.** Chat, RAG e voz são todos projetados para rodar no dispositivo, segundo o README do projeto.',
          '**Armazenamento local criptografado.** Chats, documentos e chaves de criptografia são protegidos com Android Keystore AES-256-GCM e autenticação Argon2id, segundo a documentação do projeto.',
          '**Código aberto.** Como o código-fonte do app é publicado sob a licença MIT, suas afirmações de arquitetura e manuseio de dados podem ser verificadas diretamente no código, em vez de depender apenas das declarações do desenvolvedor.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras: vantagens vs. limitações',
        columns: ['Vantagem', 'O que isso significa na prática', 'Limitação / ressalva'],
        rows: [
          {
            'Vantagem': 'Gratuito e de código aberto (MIT)',
            'O que isso significa na prática': 'Sem custo, e o código-fonte completo está disponível para auditoria no GitHub.',
            'Limitação / ressalva': 'Ser de código aberto não garante, por si só, que uma auditoria de segurança independente tenha sido realizada.',
          },
          {
            'Vantagem': 'Conjunto de recursos mais amplo do que o chat simples',
            'O que isso significa na prática': 'RAG de documentos, voz, um servidor de API local e plugins vêm todos embutidos, não são apps separados para gerenciar.',
            'Limitação / ressalva': 'Mais partes móveis do que um app de chat de propósito único; esta análise não verificou de forma independente a confiabilidade de cada recurso.',
          },
          {
            'Vantagem': 'Modelo de segurança detalhado e documentado',
            'O que isso significa na prática': 'O armazenamento local criptografado e a autenticação por PIN protegem os dados se o celular for perdido ou acessado por outra pessoa.',
            'Limitação / ressalva': 'A documentação de segurança é do próprio projeto; esta análise não submeteu o app a um teste de invasão independente.',
          },
          {
            'Vantagem': 'Nenhuma dependência de nuvem para os recursos principais',
            'O que isso significa na prática': 'Chat, RAG e voz funcionam todos offline depois que um modelo é baixado, segundo o README do projeto.',
            'Limitação / ressalva': 'Somente Android — não existe versão para iPhone, desktop ou web.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'ToolNeuron vs. alternativas',
        columns: ['App', 'Plataformas', 'Preço', 'Flexibilidade de modelos', 'Diferença principal'],
        rows: [
          {
            'App': 'ToolNeuron',
            'Plataformas': 'Somente Android',
            'Preço': 'Gratuito, código aberto (MIT)',
            'Flexibilidade de modelos': 'Qualquer modelo GGUF via navegador do Hugging Face integrado',
            'Diferença principal': 'Conjunto de recursos mais amplo aqui — RAG, voz, servidor de API local e plugins além do chat',
          },
          {
            'App': '[Layla](/pt/power-local-llm/layla-review)',
            'Plataformas': 'Android e iOS',
            'Preço': 'US$ 19,99 de compra única, mais níveis dentro do app',
            'Flexibilidade de modelos': 'Motores de modelos GGUF, LiteRT-LM e PTE',
            'Diferença principal': 'Foco em personas e interpretação de papéis, com modo de nuvem opcional; código fechado',
          },
          {
            'App': '[RikkaHub](/pt/power-local-llm/rikkahub-review)',
            'Plataformas': 'Somente Android',
            'Preço': 'Gratuito, código aberto',
            'Flexibilidade de modelos': 'Modelos GGUF, segundo sua própria ficha',
            'Diferença principal': 'Outra opção Android gratuita e de código aberto — compare diretamente a profundidade dos recursos',
          },
          {
            'App': '[Maid](/pt/power-local-llm/maid-review)',
            'Plataformas': 'Android e iOS',
            'Preço': 'Gratuito, código aberto',
            'Flexibilidade de modelos': 'Modelos GGUF via llama.cpp',
            'Diferença principal': 'Multiplataforma (também iOS), cliente de chat de propósito único mais simples',
          },
        ],
        note: 'Os detalhes de plataforma, preço e recursos de apps de terceiros mudam com frequência — verifique as informações atuais na ficha de cada app antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deveria usar o ToolNeuron',
        items: [
          '**Usuários Android que querem um app de IA gratuito, de código aberto e no dispositivo.** O código-fonte completo é público, e não há custo para instalar ou usar.',
          '**Leitores que querem mais do que um chat simples.** RAG de documentos, entrada/saída de voz e um servidor de API local vêm embutidos em vez de exigir apps separados.',
          '**Usuários preocupados com privacidade que valorizam um modelo de segurança documentado.** O armazenamento local criptografado e a autenticação por PIN vão além de uma simples declaração de política de privacidade.',
          '**Desenvolvedores que querem estender o app.** O sistema de plugins e a base de código aberto permitem personalização direta, diferente de uma alternativa de código fechado.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quem não deveria usar o ToolNeuron',
        items: [
          '**Usuários de iPhone, desktop ou web.** O ToolNeuron é exclusivo para Android; não existe versão para iOS, Mac, Windows, Linux ou baseada em navegador.',
          '**Donos de dispositivos com Android 11 ou anterior, ou hardware exclusivamente de 32 bits.** O app exige Android 12 (API 31) ou mais recente em arm64-v8a ou x86_64.',
          '**Leitores que precisam de um histórico consolidado antes de confiar em um app.** O ToolNeuron é mais novo e tem um histórico público menor do que algumas alternativas mais estabelecidas.',
          '**Leitores que querem um único app de chat simples, sem mais nada.** O conjunto de recursos mais amplo (RAG, voz, plugins, um servidor local) é uma vantagem para alguns leitores e complexidade desnecessária para outros.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O ToolNeuron é gratuito?',
            a: 'Sim. O ToolNeuron é gratuito para instalar e usar, e de código aberto sob a licença MIT, segundo seu repositório no GitHub.',
          },
          {
            q: 'Quem desenvolve o ToolNeuron?',
            a: 'O ToolNeuron é criado e mantido pelo desenvolvedor [Siddhesh Sonar](https://github.com/Siddhesh2377).',
          },
          {
            q: 'Quais modelos o ToolNeuron suporta?',
            a: 'Qualquer modelo compatível no formato GGUF, incluindo famílias comuns como Llama, Mistral e Gemma, executados via [llama.cpp](https://github.com/ggml-org/llama.cpp). Um navegador do Hugging Face integrado ajuda a encontrar e baixar modelos.',
          },
          {
            q: 'O ToolNeuron funciona sem conexão com a internet?',
            a: 'Sim, para seus recursos principais. O README do projeto declara que o app não tem componente de nuvem nem telemetria; a conexão com a internet só é necessária para baixar um modelo ou uma atualização do app.',
          },
          {
            q: 'Qual versão do Android o ToolNeuron precisa?',
            a: 'Android 12 (nível de API 31) ou mais recente, em hardware arm64-v8a ou x86_64, segundo a configuração de build pública do projeto.',
          },
          {
            q: 'O ToolNeuron é de código aberto?',
            a: 'Sim. O app é publicado no [GitHub](https://github.com/Siddhesh2377/ToolNeuron) sob a licença MIT, e o código-fonte pode ser auditado ou compilado diretamente.',
          },
          {
            q: 'Quais recursos extras o ToolNeuron tem além do chat?',
            a: 'RAG de documentos em formatos de arquivo comuns, entrada e saída de voz via sherpa-onnx, um servidor HTTP local compatível com OpenAI, um navegador de modelos do Hugging Face e um sistema de plugins isolado (sandbox), segundo o README do projeto.',
          },
          {
            q: 'Como o ToolNeuron se compara ao Layla ou ao RikkaHub?',
            a: 'O ToolNeuron é gratuito e de código aberto, com um conjunto de recursos embutidos mais amplo (RAG, voz, um servidor de API local, plugins). O [Layla](/pt/power-local-llm/layla-review) é um app pago e de código fechado de US$ 19,99 para Android e iOS, com foco em personas/interpretação de papéis e modo de nuvem opcional. O [RikkaHub](/pt/power-local-llm/rikkahub-review) é outro app de chat Android gratuito e de código aberto. Escolha com base em valorizar mais o conjunto de recursos mais amplo do ToolNeuron, o foco multiplataforma em interpretação de papéis do Layla, ou um cliente mais simples de propósito único.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O ToolNeuron entrega um app de IA no dispositivo genuinamente amplo, gratuito e de código aberto para Android: chat GGUF via llama.cpp, RAG de documentos, entrada/saída de voz, um servidor de API local compatível com OpenAI e um sistema de plugins, tudo apoiado por uma arquitetura de segurança documentada e voltada à criptografia, em vez de uma vaga promessa de privacidade.',
          'O código-fonte publicado sob licença MIT é uma vantagem significativa em relação a alternativas Android de código fechado — leitores que se importam em verificar o que um app realmente faz com os dados locais podem checar o código diretamente, em vez de confiar apenas em uma ficha.',
          'O que mantém esta análise moderada em vez de incondicionalmente entusiasmada é a relativa juventude do app e a ausência de testes de desempenho práticos e independentes de seus muitos recursos feitos especificamente pela PromptQuorum; leitores com necessidades críticas de desempenho devem testar o app em seu próprio dispositivo antes de depender muito dele.',
          'Usuários Android que querem um app gratuito, de código aberto e focado em privacidade com mais do que um chat simples devem experimentá-lo; leitores que querem um app para iPhone, um cliente de propósito único mais simples ou um histórico mais consolidado devem considerar em vez disso [Layla](/pt/power-local-llm/layla-review) ou [RikkaHub](/pt/power-local-llm/rikkahub-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[ToolNeuron no Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron) — preço e distribuição.',
          '[Repositório do ToolNeuron no GitHub](https://github.com/Siddhesh2377/ToolNeuron) — README, licença, documentação de segurança e metadados do repositório, verificado em 12/09/2026.',
          '[Site do projeto ToolNeuron](https://tool-neuron.vercel.app/) — visão geral do produto.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Layla](/pt/power-local-llm/layla-review) — um app pago e multiplataforma de companhia no dispositivo, com modo de nuvem opcional.',
          '[Análise do RikkaHub](/pt/power-local-llm/rikkahub-review) — outro app de chat Android gratuito e de código aberto para IA local.',
          '[Análise do Maid](/pt/power-local-llm/maid-review) — um cliente de chat gratuito, de código aberto e multiplataforma (Android e iOS).',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um app de IA local gratuito e de código aberto com suporte para iOS e parcial para Android.',
          '[O Diretório Completo de Software LLM Local](/pt/power-local-llm/local-llm-software-directory) — um diretório mais amplo de ferramentas de LLM local em várias plataformas.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/toolneuron-review-hero-ja.webp',
    title: 'ToolNeuronレビュー(2026年):暗号化オンデバイスAI向けオープンソースAndroidアプリ',
    seoTitle: 'ToolNeuronレビュー2026:暗号化Android AIチャットアプリ',
    intro:
      '開発者[Siddhesh Sonar](https://github.com/Siddhesh2377)が開発し、[MITライセンス](https://github.com/Siddhesh2377/ToolNeuron/blob/re-write/LICENSE)のもとでオープンソースとして公開されている[ToolNeuron](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)は、llama.cpp経由でGGUFモデルを端末上で実行する無料のAndroidアプリで、ドキュメントRAG、音声入出力、OpenAI互換のローカルHTTPサーバー、その上に構築されたプラグインシステムを備えています。プロジェクト自身のREADMEによれば、「Google Playサービス不要、テレメトリなし、クラウドなし」がアプリの中核的な設計目標であり、保存データにはAndroid Keystoreベースのアーキテクチャ上でAES-256-GCM暗号化とArgon2id認証が用いられています。本レビューでは、アプリが何を行い、何を必要とし、Layla・RikkaHubなど他のAndroidオンデバイスチャットアプリと比べてどう位置づけられるかを、独自の実機テストではなく、プロジェクトの公開GitHubリポジトリとPlayストアの掲載情報に基づいて扱います。',
    metaDescription:
      'ToolNeuronレビュー2026:無料・オープンソース(MIT)のAndroidアプリで、暗号化オンデバイスAIチャット、ドキュメントRAG、音声、ローカル画像生成に対応。要件、セキュリティモデル、LaylaやRikkaHubとの比較。',
    twitterDescription:
      'ToolNeuronレビュー:GGUFモデルを完全に端末上で実行する無料オープンソースのAndroidアプリ——暗号化されたローカルストレージ、ドキュメントRAG、音声入出力、OpenAI互換のローカルサーバー、プラグインシステムを搭載。プロジェクト自身のREADMEによれば、クラウドなし、テレメトリなし。',
    audience:
      '無料でオープンソース、プライバシー重視のオンデバイスAIチャットアプリを検討しているAndroidユーザー向け——セキュリティモデル、対応機能、ハードウェア要件、本サイトの他のAndroidローカルAIアプリとの比較を扱う。',
    readTime: '9分で読めます',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'ToolNeuron review',
    targetKeywords: [
      'toolneuron review',
      'toolneuron android',
      'toolneuron app',
      'open source local ai android',
      'encrypted offline ai chat app',
      'on-device llm android app',
      'toolneuron vs layla',
      'free local ai app android',
    ],
    current_models_mentioned: ['Llama', 'Mistral', 'Gemma', 'GGUF models'],
    current_hardware_mentioned: ['Android 12'],
    leadAnswerBlock:
      '**ToolNeuronは、[llama.cpp](https://github.com/ggml-org/llama.cpp)経由でGGUF言語モデルを完全に端末上で実行する無料・オープンソース(MIT)のAndroidアプリで、ドキュメントRAG、音声入出力、OpenAI互換のローカルHTTPサーバーを備えています——プロジェクト自身のREADMEによれば、クラウドコンポーネントもテレメトリもありません。** 開発者[Siddhesh Sonar](https://github.com/Siddhesh2377)によって作られ、Android Keystoreに裏打ちされたAES-256-GCM暗号化とArgon2id認証でローカルストレージを保護しており、Android 12(API 31)以降が必要です。比較のため、読者は[Laylaレビュー](/ja/power-local-llm/layla-review)や[RikkaHubレビュー](/ja/power-local-llm/rikkahub-review)も参照してください。',
    quickAnswerTop: {
      en: {
        question: 'Is ToolNeuron worth installing?',
        answer:
          'Yes, if you want a free, open-source Android app that runs AI models fully on-device with encrypted local storage and no cloud dependency, and your phone runs Android 12 or newer. It adds document chat (RAG), voice input/output, and a local OpenAI-compatible API server on top of plain chat — features many single-purpose chat apps skip. Skip it if you want an iPhone app (it is Android-only) or prefer a much larger, more established curated model library; compare it against Layla or RikkaHub first.',
        bullets: [
          'Free and open source under the MIT license; no in-app purchases documented in the project\'s own repository.',
          'Runs GGUF models (Llama, Mistral, Gemma, and other GGUF-compatible families) on-device via llama.cpp, per the GitHub repository.',
          'Adds document RAG (PDF, DOCX, XLSX, and more), voice input/output via sherpa-onnx, a local OpenAI-compatible HTTP server, and a plugin system.',
          'Local storage is encrypted with Android Keystore AES-256-GCM and Argon2id authentication, per the project\'s README.',
          'Requires Android 12 (API 31) or newer on an arm64-v8a or x86_64 device, per the project\'s build configuration.',
        ],
        updatedDate: '2026-09-12',
      },
      ja: {
        question: 'ToolNeuronはインストールする価値がありますか?',
        answer:
          'はい、暗号化されたローカルストレージを備え、クラウド依存なしにAIモデルを完全に端末上で実行できる無料のオープンソースAndroidアプリを求めていて、端末がAndroid 12以降を使用している場合はおすすめです。単純なチャットに加えて、ドキュメントチャット(RAG)、音声入出力、ローカルのOpenAI互換APIサーバーが追加されます——多くの単機能チャットアプリには見られない機能です。iPhoneアプリが必要な場合(Android専用のため)や、より大規模で成熟したキュレーション済みモデルライブラリを好む場合は見送り、まずLaylaやRikkaHubと比較してください。',
        bullets: [
          'MITライセンスのもとで無料かつオープンソース。プロジェクト自身のリポジトリにアプリ内課金は記載されていない。',
          'GitHubリポジトリによれば、llama.cpp経由でGGUFモデル(Llama、Mistral、Gemma、その他GGUF互換ファミリー)を端末上で実行。',
          'ドキュメントRAG(PDF、DOCX、XLSXなど)、sherpa-onnx経由の音声入出力、ローカルのOpenAI互換HTTPサーバー、プラグインシステムを追加。',
          'プロジェクトのREADMEによれば、ローカルストレージはAndroid Keystore AES-256-GCMとArgon2id認証で暗号化されている。',
          'プロジェクトのビルド構成によれば、arm64-v8aまたはx86_64端末でAndroid 12(API 31)以降が必要。',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'ToolNeuronの入手方法', anchor: 'get-it' },
      { label: 'ToolNeuronとは何か', anchor: 'what-is-toolneuron' },
      { label: '開発者について', anchor: 'who-built-it' },
      { label: '始め方', anchor: 'how-to-get-started' },
      { label: '対応モデルと機能', anchor: 'models-and-features' },
      { label: '要件', anchor: 'requirements' },
      { label: 'プライバシーとセキュリティ', anchor: 'privacy' },
      { label: 'トレードオフ:メリットと制約', anchor: 'tradeoffs' },
      { label: 'ToolNeuron対代替アプリ', anchor: 'vs-alternatives' },
      { label: 'ToolNeuronを使うべき人', anchor: 'who-should-use' },
      { label: 'ToolNeuronを使うべきでない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
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
            text: 'ToolNeuronは開発者Siddhesh Sonarによる無料・オープンソース(MIT)のAndroidアプリで、llama.cpp経由でGGUF言語モデルを端末上で実行し、暗号化されたローカルストレージ、ドキュメントRAG、音声入出力、ローカルのOpenAI互換HTTPサーバー、プラグインシステムを追加している。プロジェクト自身のREADMEによれば、クラウドコンポーネントもテレメトリもない。',
          },
          {
            type: 'plain-terms',
            text: '一度AIモデルをスマートフォンに読み込めば機内モードでも使える無料のチャットアプリだと考えてください——アカウント不要、サーバー不要、実際にチャットするためのインターネット接続も不要です。',
          },
        ],
        items: [
          '価格:[ダウンロード](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)・利用ともに無料。MITライセンスのもとでオープンソースで、リポジトリにアプリ内課金は記載されていない。',
          '開発者:[Siddhesh Sonar](https://github.com/Siddhesh2377)。',
          'エンジン:GGUFチャットモデル向けの[llama.cpp](https://github.com/ggml-org/llama.cpp)に加え、音声向けの[sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx)——すべて端末上で完結。',
          'チャットを超えた機能:ドキュメントRAG(PDF、DOCX、XLSX、PPTX、EPUBなど)、音声入出力、ローカルのOpenAI互換HTTPサーバー、Hugging Faceモデルブラウザ、サンドボックス化されたプラグインシステム(プロジェクトのREADMEによる)。',
          'セキュリティ:プロジェクト自身のドキュメントによれば、ローカルデータはAndroid Keystore AES-256-GCMとArgon2id認証で暗号化されている。',
          '要件:プロジェクトのビルド構成によれば、arm64-v8aまたはx86_64ハードウェアでAndroid 12(API 31)以降。',
          'オープンソースの状況:MITライセンスで、ソースコードは[GitHub](https://github.com/Siddhesh2377/ToolNeuron)で公開されている——クローズドソースの代替アプリとは異なり、独立して監査可能。',
          '配布:[Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)、およびGitHub Releasesからの直接APKダウンロードで入手可能。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'ToolNeuronの入手方法',
        content: [
          '**ToolNeuronはGoogle Play、またはGitHub Releasesページからの直接APKダウンロードで入手できます。** どちらの配布経路も同じオープンソースアプリです。',
          '本レビューは、プラットフォームを横断してローカルAIツールを索引化するPromptQuorumの[ローカルLLMソフトウェアディレクトリ](/ja/power-local-llm/local-llm-software-directory)の姉妹記事で、ToolNeuron自身の項目も含まれています。',
        ],
        columns: ['チャネル', '入手方法'],
        rows: [
          {
            'チャネル': 'Google Play',
            '入手方法': '[Google PlayのToolNeuron](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)',
          },
          {
            'チャネル': 'GitHub(APK)',
            '入手方法': '[GitHubのToolNeuron Releases](https://github.com/Siddhesh2377/ToolNeuron/releases)',
          },
        ],
        note: 'どちらの方法でもアプリ自体は無料です——GitHubでは、自分で監査またはビルドしたい読者向けに完全なソースコードもホストされています。',
      },
      whatIsToolNeuron: {
        id: 'what-is-toolneuron',
        title: 'ToolNeuronとは何か',
        content: [
          '**ToolNeuronは、サーバー側のコンポーネントを持たず、llama.cpp経由でGGUF形式の言語モデルを端末上で直接実行するAndroidアプリです。** プロジェクト自身の説明によれば、「Android向けのオンデバイスAI。Google Playサービス不要、テレメトリなし、クラウドなし」を目指しており、モデル・チャット・検索に使うドキュメント・暗号鍵素材はすべてスマートフォン上に留まるよう設計されています。',
          '単純なチャットに加えて、このアプリは一般的なファイル形式にわたるドキュメント検索(RAG)、sherpa-onnx音声エンジンによる音声入出力、他のアプリが接続できるOpenAI互換APIを公開するローカルHTTPサーバー、組み込みのHugging Faceモデルブラウザ、追加機能をインストールするためのサンドボックス化されたプラグインシステムを備えています。',
          '本レビューは、独自のコード監査や実機ベンチマークではなく、プロジェクトの公開GitHubリポジトリ——そのREADME、ライセンスファイル、リポジトリメタデータ——およびGoogle Playの掲載情報に基づいています。',
        ],
      },
      whoBuiltIt: {
        id: 'who-built-it',
        title: '開発者について',
        content: [
          '**ToolNeuronは開発者[Siddhesh Sonar](https://github.com/Siddhesh2377)によって構築・保守されており、MITライセンスのもとでプロジェクトをGitHub上で公開しています。** リポジトリは、文書化されたセキュリティアーキテクチャ、アプリ・推論・暗号化・ネットワーキングのコンポーネントに分割されたモジュール式コードベース、ユーザーと貢献者向けの公開Discordコミュニティなど、活発で詳細な開発状況を示しています。',
          'ソースコードが非公開ではなく公開されているため、アプリがローカルデータに対して何を行い、何を行わないかについての主張は、開発者自身の説明だけに頼るのではなく、コードに対して直接確認できます。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '始め方',
        content: [
          '**ToolNeuronのセットアップはわずかな手順で済み、アカウント作成は不要です。** インストールから最初のオフライン応答までの全体の流れは、選択したモデルのダウンロードにかかる時間を除けば数分程度です。',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: '[Google PlayでToolNeuronを入手](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)するか、[GitHub Releases](https://github.com/Siddhesh2377/ToolNeuron/releases)から直接APKをダウンロードしてください。アプリ自体はどちらの方法でも無料です。',
          },
          {
            title: 'ローカル暗号化を設定する',
            whyItMatters: 'プロジェクトのセキュリティドキュメントによれば、チャットデータが保存される前に、アプリは初回起動時にAndroid Keystoreに裏打ちされた暗号化と6桁のPINを設定します。',
          },
          {
            title: 'GGUFモデルを閲覧してダウンロードする',
            whyItMatters: '組み込みのHugging Faceブラウザを使って互換性のあるGGUFモデルを探すか、自分のモデルを用意してください。このステップにはインターネット接続が必要ですが、その後のチャットには不要です。',
          },
          {
            title: 'チャットする、またはRAG用にドキュメントを追加する',
            whyItMatters: 'モデルがダウンロードされると、チャットはllama.cpp経由で完全に端末上で実行されます。会話に対応ドキュメント(PDF、DOCXなど)を添付すれば、モデルがそこから回答します。',
          },
          {
            title: 'オプション:音声またはローカルAPIサーバーを有効にする',
            whyItMatters: '音声入出力とOpenAI互換のローカルHTTPサーバーは、いずれも単純なチャットに追加されたオプション機能です——どちらもアプリの利用に必須ではありません。',
          },
        ],
        note: '正確なモデルの互換性とダウンロードサイズは選択するGGUFファイルによって異なります——データ容量が限られた回線でダウンロードする前に、そのモデル自身のHugging Faceページでサイズとライセンスを確認してください。',
      },
      modelsAndFeatures: {
        id: 'models-and-features',
        title: '対応モデルと機能',
        content: [
          '**ToolNeuronは、Llama、Mistral、Gemmaなどの一般的なファミリーを含む、互換性のあるあらゆるGGUF形式モデルを[llama.cpp](https://github.com/ggml-org/llama.cpp)経由で実行します。** 組み込みのHugging Faceブラウザにより、読者はダウンロード前にパイプラインタグ、パラメータ数、量子化、ライセンスで利用可能なモデルを絞り込めます。',
          'チャットに加えて、プロジェクト自身のREADMEには次が挙げられています:PDF、DOCX、XLSX、PPTX、ODT、EPUB、RTF、Markdown、HTML、JSON、XML、CSV、プレーンテキストにわたるドキュメントRAG。sherpa-onnxエンジン(VITS、Piper、Whisperの各音声)による音声入出力。プロジェクトの変更履歴によれば2026年5月にアプリへ追加されたローカル画像生成。専用のWeb UIを備えたOpenAI互換APIを公開するローカルHTTPサーバー。コミュニティ制の拡張機能をインストールするためのサンドボックス化されたプラグインシステム。',
          'これは単機能のチャットクライアントよりも幅広い機能セットであり、プロジェクトのドキュメントによれば、各機能はクラウドサービスを呼び出すのではなく、同じオンデバイスエンジンを通じて動作します。',
        ],
      },
      requirements: {
        id: 'requirements',
        title: '要件',
        content: [
          '**ToolNeuronは、プロジェクトの公開ビルド構成によれば、arm64-v8aまたはx86_64ハードウェア上でAndroid 12(APIレベル31)以降を必要とします。** どのオンデバイスLLMアプリでも同様ですが、実用上のハードウェア下限は単一の固定仕様よりも、どのGGUFモデルを読み込むか——そのパラメータ数と量子化——に大きく左右されます。小さく量子化されたモデルは大きなモデルよりもはるかに少ないメモリで済みます。',
          'それより古いAndroidバージョンや32ビット専用端末の読者は、最小SDKとABIフィルタがAndroidパッケージ自体によって強制されている(単なる推奨ではない)ため、アプリがインストールできないことを想定してください。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとセキュリティ',
        content: [
          '**ToolNeuronが掲げる設計目標は、クラウド依存を一切避けることです:Google Playサービス不要、テレメトリなし、そして中核となるチャット機能とRAG機能にサーバー側コンポーネントを持たない——プロジェクト自身のREADMEによる。** これは、一文だけのプライバシー声明ではなく、異例なほど詳細に公開文書化されたセキュリティアーキテクチャによって裏付けられています。',
          'プロジェクトのセキュリティドキュメントによれば、暗号鍵素材自体を含むローカルデータは、Android Keystoreに裏打ちされたAES-256-GCM鍵(端末が対応していればStrongBoxを優先)とArgon2idベースのPIN認証で保護されています。同じドキュメントには、PIN入力の失敗が繰り返されるとエスカレートするロックアウト機構と、ローカルのアプリデータを消去するオプションのパニックPIN機能も記載されています。',
        ],
        items: [
          '**アカウント不要。** プロフィールを作成したりサインインしたりせずに、アプリをインストールして利用できる。',
          '**中核機能にクラウドコンポーネントなし。** プロジェクトのREADMEによれば、チャット・RAG・音声はすべて端末上で動作するよう設計されている。',
          '**暗号化されたローカルストレージ。** プロジェクトのドキュメントによれば、チャット・ドキュメント・暗号鍵はAndroid Keystore AES-256-GCMとArgon2id認証で保護されている。',
          '**オープンソースコード。** アプリのソースコードはMITライセンスのもとで公開されているため、開発者の発言だけに頼るのではなく、そのアーキテクチャとデータ取り扱いに関する主張をコードに対して直接確認できる。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ:メリットと制約',
        columns: ['メリット', '実際の使用における意味', '制約・注意点'],
        rows: [
          {
            'メリット': '無料・オープンソース(MIT)',
            '実際の使用における意味': '費用がかからず、完全なソースコードがGitHubで監査可能。',
            '制約・注意点': 'オープンソースであること自体は、独立したセキュリティ監査が実施されたことを保証しない。',
          },
          {
            'メリット': '単純なチャットより幅広い機能セット',
            '実際の使用における意味': 'ドキュメントRAG、音声、ローカルAPIサーバー、プラグインがすべて統合されており、別々のアプリを管理する必要がない。',
            '制約・注意点': '単機能チャットアプリより可動部分が多い。本レビューはすべての機能の信頼性を独立して検証していない。',
          },
          {
            'メリット': '詳細で文書化されたセキュリティモデル',
            '実際の使用における意味': '暗号化されたローカルストレージとPINベース認証により、端末を紛失したり他人にアクセスされたりした場合でもデータが保護される。',
            '制約・注意点': 'セキュリティドキュメントはプロジェクト自身のもの。本レビューはアプリに対する独立した侵入テストを実施していない。',
          },
          {
            'メリット': '中核機能にクラウド依存がない',
            '実際の使用における意味': 'プロジェクトのREADMEによれば、モデルをダウンロードすればチャット・RAG・音声はすべてオフラインで動作する。',
            '制約・注意点': 'Android専用——iPhone版、デスクトップ版、Web版は存在しない。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'ToolNeuron対代替アプリ',
        columns: ['アプリ', 'プラットフォーム', '価格', 'モデルの柔軟性', '主な違い'],
        rows: [
          {
            'アプリ': 'ToolNeuron',
            'プラットフォーム': 'Androidのみ',
            '価格': '無料、オープンソース(MIT)',
            'モデルの柔軟性': '組み込みのHugging Faceブラウザ経由であらゆるGGUFモデル',
            '主な違い': 'ここでは最も幅広い機能セット——チャットに加えてRAG、音声、ローカルAPIサーバー、プラグイン',
          },
          {
            'アプリ': '[Layla](/ja/power-local-llm/layla-review)',
            'プラットフォーム': 'AndroidとiOS',
            '価格': '19.99ドルの買い切り、加えてアプリ内階層',
            'モデルの柔軟性': 'GGUF、LiteRT-LM、PTEのモデルバックエンド',
            '主な違い': 'ペルソナとロールプレイに重点、オプトインのクラウドモードあり、クローズドソース',
          },
          {
            'アプリ': '[RikkaHub](/ja/power-local-llm/rikkahub-review)',
            'プラットフォーム': 'Androidのみ',
            '価格': '無料、オープンソース',
            'モデルの柔軟性': '自身の掲載情報によればGGUFモデル',
            '主な違い': 'もう一つの無料・オープンソースのAndroidの選択肢——機能の深さを直接比較する',
          },
          {
            'アプリ': '[Maid](/ja/power-local-llm/maid-review)',
            'プラットフォーム': 'AndroidとiOS',
            '価格': '無料、オープンソース',
            'モデルの柔軟性': 'llama.cpp経由のGGUFモデル',
            '主な違い': 'クロスプラットフォーム(iOSも対応)で、よりシンプルな単機能チャットクライアント',
          },
        ],
        note: 'サードパーティアプリのプラットフォーム・価格・機能の詳細は頻繁に変わります——決定する前に各アプリ自身の掲載情報で最新の詳細を確認してください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'ToolNeuronを使うべき人',
        items: [
          '**無料でオープンソースのオンデバイスAIアプリを求めるAndroidユーザー。** ソースコード全体が公開されており、インストールや利用に費用はかからない。',
          '**単純なチャット以上のものを求める読者。** ドキュメントRAG、音声入出力、ローカルAPIサーバーが統合されており、別々のアプリを必要としない。',
          '**文書化されたセキュリティモデルを重視するプライバシー意識の高いユーザー。** 暗号化されたローカルストレージとPINベース認証は、単純なプライバシーポリシーの記述以上のものを提供する。',
          '**アプリを拡張したい開発者。** プラグインシステムとオープンソースのコードベースにより、クローズドソースの代替アプリとは異なり、直接的なカスタマイズが可能。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ToolNeuronを使うべきでない人',
        items: [
          '**iPhone、デスクトップ、Webのユーザー。** ToolNeuronはAndroid専用であり、iOS版、Mac版、Windows版、Linux版、ブラウザベース版は存在しない。',
          '**Android 11以前、または32ビット専用ハードウェアの端末所有者。** アプリはarm64-v8aまたはx86_64でAndroid 12(API 31)以降を必要とする。',
          '**アプリを信頼する前に確立された実績を必要とする読者。** ToolNeuronは、長年運用されてきた代替アプリの一部と比べて新しく、公開された実績も小さい。',
          '**他に何もない単一のシンプルなチャットアプリを求める読者。** 幅広い機能セット(RAG、音声、プラグイン、ローカルサーバー)は、一部の読者にはメリットだが、他の読者には不要な複雑さとなる。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'ToolNeuronは無料ですか?',
            a: 'はい。ToolNeuronはインストールと利用が無料で、GitHubリポジトリによればMITライセンスのもとでオープンソースです。',
          },
          {
            q: 'ToolNeuronは誰が作っていますか?',
            a: 'ToolNeuronは開発者[Siddhesh Sonar](https://github.com/Siddhesh2377)によって構築・保守されています。',
          },
          {
            q: 'ToolNeuronはどのモデルに対応していますか?',
            a: 'Llama、Mistral、Gemmaなどの一般的なファミリーを含む、互換性のあるあらゆるGGUF形式モデルが、[llama.cpp](https://github.com/ggml-org/llama.cpp)経由で実行されます。組み込みのHugging Faceブラウザがモデルの検索とダウンロードを助けます。',
          },
          {
            q: 'ToolNeuronはインターネット接続なしで動作しますか?',
            a: 'はい、中核機能については動作します。プロジェクトのREADMEは、アプリにクラウドコンポーネントもテレメトリもないと述べており、インターネット接続はモデルやアプリの更新をダウンロードする際にのみ必要です。',
          },
          {
            q: 'ToolNeuronにはどのAndroidバージョンが必要ですか?',
            a: 'プロジェクトの公開ビルド構成によれば、arm64-v8aまたはx86_64ハードウェアでAndroid 12(APIレベル31)以降です。',
          },
          {
            q: 'ToolNeuronはオープンソースですか?',
            a: 'はい。アプリは[GitHub](https://github.com/Siddhesh2377/ToolNeuron)でMITライセンスのもとで公開されており、ソースコードは直接監査またはビルドできます。',
          },
          {
            q: 'ToolNeuronにはチャット以外にどのような追加機能がありますか?',
            a: 'プロジェクトのREADMEによれば、一般的なファイル形式にわたるドキュメントRAG、sherpa-onnx経由の音声入出力、ローカルのOpenAI互換HTTPサーバー、Hugging Faceモデルブラウザ、サンドボックス化されたプラグインシステムです。',
          },
          {
            q: 'ToolNeuronはLaylaやRikkaHubと比べてどうですか?',
            a: 'ToolNeuronは無料・オープンソースで、より幅広い組み込み機能セット(RAG、音声、ローカルAPIサーバー、プラグイン)を備えています。[Layla](/ja/power-local-llm/layla-review)は19.99ドルの有料・クローズドソースアプリで、AndroidとiOSの両方に対応し、ペルソナ・ロールプレイに重点を置き、オプトインのクラウドモードを備えています。[RikkaHub](/ja/power-local-llm/rikkahub-review)は、もう一つの無料・オープンソースのAndroidチャットアプリです。ToolNeuronの幅広い機能セット、Laylaのクロスプラットフォームなロールプレイへの重点、あるいはよりシンプルな単機能クライアントのどれを重視するかで選んでください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: [
          'ToolNeuronは、Android向けに真に幅広く、無料でオープンソースのオンデバイスAIアプリを提供します:llama.cpp経由のGGUFチャット、ドキュメントRAG、音声入出力、ローカルのOpenAI互換APIサーバー、プラグインシステムのすべてが、あいまいなプライバシーの約束ではなく、文書化された暗号化重視のセキュリティアーキテクチャに裏付けられています。',
          '公開されたMITライセンスのソースコードは、クローズドソースのAndroid代替アプリに対する意味のある優位性です——アプリがローカルデータに対して実際に何を行っているかを確認したい読者は、掲載情報だけを信じるのではなく、コードを直接確認できます。',
          '本レビューを無条件の絶賛ではなく慎重なものにとどめているのは、アプリの比較的若さと、PromptQuorumが特に独自にその多くの機能を実機ベンチマークしていないことです。パフォーマンスが重要な読者は、大きく依存する前に自分の端末でアプリを試すべきです。',
          '単純なチャット以上のものを備えた無料・オープンソースでプライバシー重視のアプリを求めるAndroidユーザーは試してみるべきです。iPhoneアプリ、よりシンプルな単機能クライアント、あるいはより確立された実績を求める読者は、代わりに[Layla](/ja/power-local-llm/layla-review)や[RikkaHub](/ja/power-local-llm/rikkahub-review)を検討してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Google PlayのToolNeuron](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)——価格と配布。',
          '[ToolNeuron GitHubリポジトリ](https://github.com/Siddhesh2377/ToolNeuron)——README、ライセンス、セキュリティドキュメント、リポジトリメタデータ。2026年9月12日確認。',
          '[ToolNeuronプロジェクトサイト](https://tool-neuron.vercel.app/)——製品概要。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Laylaレビュー](/ja/power-local-llm/layla-review)——オプトインのクラウドモードを備えた、有料でクロスプラットフォームのオンデバイス対話アプリ。',
          '[RikkaHubレビュー](/ja/power-local-llm/rikkahub-review)——もう一つの無料・オープンソースのAndroidローカルAIチャットアプリ。',
          '[Maidレビュー](/ja/power-local-llm/maid-review)——無料・オープンソースでクロスプラットフォーム(AndroidとiOS)のチャットクライアント。',
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review)——iOSと一部のAndroidに対応した、無料・オープンソースのローカルAIアプリ。',
          '[ローカルLLMソフトウェア完全ディレクトリ](/ja/power-local-llm/local-llm-software-directory)——プラットフォームを横断するローカルLLMツールのより広範なディレクトリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/toolneuron-review-hero-zh.webp',
    title: 'ToolNeuron评测(2026):用于端侧加密AI的开源Android应用',
    seoTitle: 'ToolNeuron评测2026:加密Android AI聊天应用',
    intro:
      '[ToolNeuron](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)由开发者[Siddhesh Sonar](https://github.com/Siddhesh2377)开发,并以[MIT许可证](https://github.com/Siddhesh2377/ToolNeuron/blob/re-write/LICENSE)开源发布,是一款免费的Android应用,通过llama.cpp在设备端运行GGUF语言模型,并配备文档RAG、语音输入输出、兼容OpenAI的本地HTTP服务器,以及构建在其上的插件系统。根据该项目自身的README,"无需Google Play服务、无遥测、无云端"是应用的核心设计目标,并通过基于Android Keystore的AES-256-GCM加密和Argon2id身份验证来保护存储数据。本评测基于该项目公开的GitHub代码库和Play商店页面,而非独立的实机测试,探讨这款应用能做什么、需要什么,以及它与Layla、RikkaHub等其他Android端侧聊天应用相比处于什么位置。',
    metaDescription:
      'ToolNeuron评测2026:免费开源(MIT)的Android应用,支持加密端侧AI聊天、文档RAG、语音和本地图像生成。要求、安全模型,以及与Layla、RikkaHub的比较。',
    twitterDescription:
      'ToolNeuron评测:一款免费开源的Android应用,完全在设备端运行GGUF模型——加密本地存储、文档RAG、语音输入输出、兼容OpenAI的本地服务器和插件系统。根据该项目自身的README,无云端,无遥测。',
    audience:
      '面向考虑使用免费、开源、注重隐私的端侧AI聊天应用的Android用户——涵盖安全模型、支持的功能、硬件要求,以及与本站评测的其他Android本地AI应用的比较。',
    readTime: '9分钟阅读',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'ToolNeuron review',
    targetKeywords: [
      'toolneuron review',
      'toolneuron android',
      'toolneuron app',
      'open source local ai android',
      'encrypted offline ai chat app',
      'on-device llm android app',
      'toolneuron vs layla',
      'free local ai app android',
    ],
    current_models_mentioned: ['Llama', 'Mistral', 'Gemma', 'GGUF models'],
    current_hardware_mentioned: ['Android 12'],
    leadAnswerBlock:
      '**ToolNeuron是一款免费开源(MIT)的Android应用,通过[llama.cpp](https://github.com/ggml-org/llama.cpp)在设备端完整运行GGUF语言模型,并配备文档RAG、语音输入输出和兼容OpenAI的本地HTTP服务器——根据该项目自身的README,没有云端组件,没有遥测。** 由开发者[Siddhesh Sonar](https://github.com/Siddhesh2377)打造,该应用使用基于Android Keystore的AES-256-GCM加密和Argon2id身份验证来保护本地存储,并要求Android 12(API 31)或更高版本。希望寻找比较对象的读者也可以阅读[Layla评测](/zh/power-local-llm/layla-review)或[RikkaHub评测](/zh/power-local-llm/rikkahub-review)。',
    quickAnswerTop: {
      en: {
        question: 'Is ToolNeuron worth installing?',
        answer:
          'Yes, if you want a free, open-source Android app that runs AI models fully on-device with encrypted local storage and no cloud dependency, and your phone runs Android 12 or newer. It adds document chat (RAG), voice input/output, and a local OpenAI-compatible API server on top of plain chat — features many single-purpose chat apps skip. Skip it if you want an iPhone app (it is Android-only) or prefer a much larger, more established curated model library; compare it against Layla or RikkaHub first.',
        bullets: [
          'Free and open source under the MIT license; no in-app purchases documented in the project\'s own repository.',
          'Runs GGUF models (Llama, Mistral, Gemma, and other GGUF-compatible families) on-device via llama.cpp, per the GitHub repository.',
          'Adds document RAG (PDF, DOCX, XLSX, and more), voice input/output via sherpa-onnx, a local OpenAI-compatible HTTP server, and a plugin system.',
          'Local storage is encrypted with Android Keystore AES-256-GCM and Argon2id authentication, per the project\'s README.',
          'Requires Android 12 (API 31) or newer on an arm64-v8a or x86_64 device, per the project\'s build configuration.',
        ],
        updatedDate: '2026-09-12',
      },
      zh: {
        question: 'ToolNeuron值得安装吗?',
        answer:
          '值得,如果你想要一款免费开源的Android应用,能够在完全加密本地存储、无需依赖云端的情况下于设备端运行AI模型,并且你的手机运行Android 12或更高版本。它在纯聊天之上增加了文档聊天(RAG)、语音输入输出,以及本地兼容OpenAI的API服务器——这些功能是许多单一用途聊天应用所不具备的。如果你需要iPhone应用(它仅支持Android)或更倾向于规模更大、更成熟的精选模型库,可以跳过它;不妨先将其与Layla或RikkaHub做比较。',
        bullets: [
          '在MIT许可证下免费且开源;该项目自身代码库中未记录任何应用内购买。',
          '根据GitHub代码库,通过llama.cpp在设备端运行GGUF模型(Llama、Mistral、Gemma及其他兼容GGUF的系列)。',
          '增加了文档RAG(PDF、DOCX、XLSX等)、通过sherpa-onnx实现的语音输入输出、本地兼容OpenAI的HTTP服务器,以及插件系统。',
          '根据该项目的README,本地存储通过Android Keystore AES-256-GCM和Argon2id身份验证加密。',
          '根据该项目的构建配置,需要在arm64-v8a或x86_64设备上运行Android 12(API 31)或更高版本。',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: '获取ToolNeuron', anchor: 'get-it' },
      { label: 'ToolNeuron是什么', anchor: 'what-is-toolneuron' },
      { label: '开发者是谁', anchor: 'who-built-it' },
      { label: '入门指南', anchor: 'how-to-get-started' },
      { label: '支持的模型与功能', anchor: 'models-and-features' },
      { label: '要求', anchor: 'requirements' },
      { label: '隐私与安全', anchor: 'privacy' },
      { label: '权衡:优势与局限', anchor: 'tradeoffs' },
      { label: 'ToolNeuron与替代方案对比', anchor: 'vs-alternatives' },
      { label: '谁应该使用ToolNeuron', anchor: 'who-should-use' },
      { label: '谁不应该使用ToolNeuron', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ToolNeuron是开发者Siddhesh Sonar打造的一款免费开源(MIT)Android应用,通过llama.cpp在设备端运行GGUF语言模型,并增加了加密本地存储、文档RAG、语音输入输出、本地兼容OpenAI的HTTP服务器和插件系统;根据该项目自身的README,没有云端组件或遥测。',
          },
          {
            type: 'plain-terms',
            text: '可以把它想象成一款免费开源的Android聊天应用,还能让你与自己的文档对话并使用语音功能,一切都在你的手机上运行,具备安全意识项目应有的加密水平——而不是简单包裹云端API的外壳。',
          },
        ],
        items: [
          '价格:[下载](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)和使用均免费;在MIT许可证下开源,代码库中未记录任何应用内购买。',
          '开发者:[Siddhesh Sonar](https://github.com/Siddhesh2377)。',
          '引擎:用于GGUF聊天模型的[llama.cpp](https://github.com/ggml-org/llama.cpp),加上用于语音的[sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx),全部在设备端运行。',
          '聊天之外的功能:根据该项目的README,包括文档RAG(PDF、DOCX、XLSX、PPTX、EPUB等)、语音输入输出、本地兼容OpenAI的HTTP服务器、Hugging Face模型浏览器,以及沙盒化的插件系统。',
          '安全性:根据该项目自身的文档,本地数据通过Android Keystore AES-256-GCM和Argon2id身份验证加密。',
          '要求:根据该项目的构建配置,需要arm64-v8a或x86_64硬件上的Android 12(API 31)或更高版本。',
          '开源状态:MIT许可证,源代码发布在[GitHub](https://github.com/Siddhesh2377/ToolNeuron)上——与闭源替代方案不同,可独立审计。',
          '分发方式:可通过[Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)获取,也可从GitHub Releases直接下载APK。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取ToolNeuron',
        content: [
          '**ToolNeuron可通过Google Play获取,也可从其GitHub Releases页面直接下载APK。** 两个分发渠道提供的是同一款开源应用。',
          '本评测是PromptQuorum[本地LLM软件目录](/zh/power-local-llm/local-llm-software-directory)的姊妹篇,该目录收录了跨平台的本地AI工具,其中也包括ToolNeuron自身的条目。',
        ],
        columns: ['渠道', '获取方式'],
        rows: [
          {
            '渠道': 'Google Play',
            '获取方式': '[Google Play上的ToolNeuron](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)',
          },
          {
            '渠道': 'GitHub(APK)',
            '获取方式': '[GitHub上的ToolNeuron发行版](https://github.com/Siddhesh2377/ToolNeuron/releases)',
          },
        ],
        note: '无论哪种方式,应用本身都是免费的——GitHub上还托管了完整的源代码,供希望自行审计或构建的读者使用。',
      },
      whatIsToolNeuron: {
        id: 'what-is-toolneuron',
        title: 'ToolNeuron是什么',
        content: [
          '**ToolNeuron是一款Android应用,通过llama.cpp直接在设备端运行GGUF格式的语言模型,没有服务器端组件。** 根据该项目自身的描述,其目标是成为"面向Android的端侧AI。无需Google Play服务、无遥测、无云端"——模型、聊天记录、用于检索的文档以及加密密钥材料都被设计为保留在手机上。',
          '除了纯聊天之外,该应用还集成了针对常见文件格式的文档检索(RAG)、通过sherpa-onnx语音引擎实现的语音输入输出、一个向其他应用暴露兼容OpenAI API的本地HTTP服务器、内置的Hugging Face模型浏览器,以及用于安装额外功能的沙盒化插件系统。',
          '本评测依赖于该项目公开的GitHub代码库——其README、许可证文件和代码库元数据——以及Google Play页面,而非独立的代码审计或实机基准测试。',
        ],
      },
      whoBuiltIt: {
        id: 'who-built-it',
        title: '开发者是谁',
        content: [
          '**ToolNeuron由开发者[Siddhesh Sonar](https://github.com/Siddhesh2377)构建和维护,他在MIT许可证下公开地将项目发布在GitHub上。** 该代码库展现了活跃而细致的开发状态:有文档记录的安全架构、划分为应用、推理、加密和网络组件的模块化代码库,以及面向用户和贡献者的公开Discord社区。',
          '由于源代码是公开发布而非闭源的,关于该应用对本地数据做了什么、没做什么的说法,可以直接对照代码进行核实,而不必仅仅依赖开发者自身的描述。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '入门指南',
        content: [
          '**设置ToolNeuron只需几个步骤,且无需创建账户。** 从安装到首次离线响应的整个过程,除了所选模型的下载时间外,只需几分钟。',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '从[Google Play获取ToolNeuron](https://play.google.com/store/apps/details?id=com.dark.tool_neuron),或直接从[GitHub Releases](https://github.com/Siddhesh2377/ToolNeuron/releases)下载APK。无论哪种方式,应用本身都是免费的。',
          },
          {
            title: '设置本地加密',
            whyItMatters: '根据该项目的安全文档,应用会在首次运行时设置基于Android Keystore的加密和6位PIN码,然后才会存储聊天数据。',
          },
          {
            title: '浏览并下载一个GGUF模型',
            whyItMatters: '使用内置的Hugging Face浏览器查找兼容的GGUF模型,或提供自己的模型。此步骤需要互联网连接;之后的聊天则不需要。',
          },
          {
            title: '聊天,或添加文档以用于RAG',
            whyItMatters: '模型下载完成后,聊天将通过llama.cpp完全在设备端运行。为对话附加一份受支持的文档(PDF、DOCX等),模型即可基于该文档作答。',
          },
          {
            title: '可选:启用语音或本地API服务器',
            whyItMatters: '语音输入输出和兼容OpenAI的本地HTTP服务器都是在纯聊天基础上添加的可选功能——使用该应用并不需要它们中的任何一个。',
          },
        ],
        note: '具体的模型兼容性和下载大小因所选的GGUF文件而异——在使用有限流量套餐下载前,请先在模型自身的Hugging Face页面确认其大小和许可证。',
      },
      modelsAndFeatures: {
        id: 'models-and-features',
        title: '支持的模型与功能',
        content: [
          '**ToolNeuron通过[llama.cpp](https://github.com/ggml-org/llama.cpp)运行任何兼容的GGUF格式模型,包括Llama、Mistral、Gemma等常见系列。** 内置的Hugging Face浏览器让读者可以在下载前按流水线标签、参数量、量化方式和许可证筛选可用模型。',
          '除聊天之外,该项目自身的README列出了以下功能:覆盖PDF、DOCX、XLSX、PPTX、ODT、EPUB、RTF、Markdown、HTML、JSON、XML、CSV和纯文本的文档RAG;通过sherpa-onnx引擎实现的语音输入输出(VITS、Piper和Whisper语音);根据该项目的更新日志,于2026年5月加入应用的本地图像生成;一个暴露兼容OpenAI API并配有自身Web UI的本地HTTP服务器;以及用于安装社区构建扩展的沙盒化插件系统。',
          '这是一个比单一用途聊天客户端更广泛的功能集,根据该项目的文档,每项功能都通过同一个端侧引擎运行,而非调用云服务。',
        ],
      },
      requirements: {
        id: 'requirements',
        title: '要求',
        content: [
          '**根据该项目公开的构建配置,ToolNeuron要求在arm64-v8a或x86_64硬件上运行Android 12(API级别31)或更高版本。** 与任何端侧LLM应用一样,实际的硬件下限更多取决于所加载的GGUF模型——其参数量和量化方式——而非单一固定规格;一个经过量化的小模型所需的内存,远少于一个大模型。',
          '使用较旧Android版本或纯32位设备的读者应预料到应用无法安装,因为最低SDK和ABI过滤器是由Android软件包本身强制执行的,而不仅仅是一项软性建议。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与安全',
        content: [
          '**根据该项目自身的README,ToolNeuron声明的设计目标是避免任何云端依赖:无需Google Play服务,没有遥测,其核心聊天和RAG功能也没有服务器端组件。** 支撑这一点的,是一套异常详尽、公开记录的安全架构,而非一句简单的隐私声明。',
          '根据该项目的安全文档,本地数据——包括加密密钥材料本身——通过基于Android Keystore的AES-256-GCM密钥(在设备支持时优先使用StrongBox)和基于Argon2id的PIN身份验证加以保护。同一份文档还描述了在多次PIN输入失败后逐步升级的锁定机制,以及一项可选的"紧急PIN"功能,可用于清除本地应用数据。',
        ],
        items: [
          '**无需账户。** 应用可以在不创建个人资料或登录的情况下安装和使用。',
          '**核心功能没有云端组件。** 根据该项目的README,聊天、RAG和语音功能都被设计为在设备端运行。',
          '**加密的本地存储。** 根据该项目的文档,聊天记录、文档和加密密钥都通过Android Keystore AES-256-GCM和Argon2id身份验证加以保护。',
          '**开源代码。** 由于该应用的源代码在MIT许可证下发布,其架构和数据处理方面的说法可以直接对照代码进行核实,而不必仅仅依赖开发者的陈述。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '权衡:优势与局限',
        columns: ['优势', '在实际使用中意味着什么', '局限/注意事项'],
        rows: [
          {
            '优势': '免费且开源(MIT)',
            '在实际使用中意味着什么': '无需付费,完整源代码可在GitHub上供审计。',
            '局限/注意事项': '开源本身并不能保证已经进行过独立的安全审计。',
          },
          {
            '优势': '比纯聊天更广泛的功能集',
            '在实际使用中意味着什么': '文档RAG、语音、本地API服务器和插件全部内置,无需管理多个独立应用。',
            '局限/注意事项': '比单一用途聊天应用有更多活动部件;本评测未对每项功能的可靠性进行独立验证。',
          },
          {
            '优势': '详尽且有文档记录的安全模型',
            '在实际使用中意味着什么': '加密本地存储和基于PIN的身份验证可在手机丢失或被他人访问时保护数据。',
            '局限/注意事项': '安全文档来自该项目自身;本评测未对该应用进行独立的渗透测试。',
          },
          {
            '优势': '核心功能不依赖云端',
            '在实际使用中意味着什么': '根据该项目的README,模型下载完成后,聊天、RAG和语音功能均可离线运行。',
            '局限/注意事项': '仅限Android——不存在iPhone、桌面或网页版本。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'ToolNeuron与替代方案对比',
        columns: ['应用', '平台', '价格', '模型灵活性', '关键差异'],
        rows: [
          {
            '应用': 'ToolNeuron',
            '平台': '仅限Android',
            '价格': '免费,开源(MIT)',
            '模型灵活性': '通过内置Hugging Face浏览器获取任意GGUF模型',
            '关键差异': '此处功能集最广泛——聊天之外还有RAG、语音、本地API服务器和插件',
          },
          {
            '应用': '[Layla](/zh/power-local-llm/layla-review)',
            '平台': 'Android和iOS',
            '价格': '19.99美元一次性购买,外加应用内分级',
            '模型灵活性': 'GGUF、LiteRT-LM和PTE模型后端',
            '关键差异': '专注于角色人设和角色扮演,提供可选的云端模式;闭源',
          },
          {
            '应用': '[RikkaHub](/zh/power-local-llm/rikkahub-review)',
            '平台': '仅限Android',
            '价格': '免费,开源',
            '模型灵活性': '根据其自身页面信息,支持GGUF模型',
            '关键差异': '另一款免费开源的Android选择——可直接比较功能深度',
          },
          {
            '应用': '[Maid](/zh/power-local-llm/maid-review)',
            '平台': 'Android和iOS',
            '价格': '免费,开源',
            '模型灵活性': '通过llama.cpp支持GGUF模型',
            '关键差异': '跨平台(也支持iOS),更简单的单一用途聊天客户端',
          },
        ],
        note: '第三方应用的平台、价格和功能详情经常变化——决定前请在各应用自身的页面上核实最新详情。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁应该使用ToolNeuron',
        items: [
          '**希望使用免费开源端侧AI应用的Android用户。** 完整源代码是公开的,安装和使用都不产生任何费用。',
          '**希望获得纯聊天之外更多功能的读者。** 文档RAG、语音输入输出和本地API服务器都已集成,无需另外安装应用。',
          '**重视文档化安全模型的隐私意识用户。** 加密本地存储和基于PIN的身份验证超越了一份简单的隐私政策声明。',
          '**希望扩展该应用的开发者。** 插件系统和开源代码库支持直接定制,这与闭源替代方案不同。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不应该使用ToolNeuron',
        items: [
          '**iPhone、桌面或网页用户。** ToolNeuron仅限Android;不存在iOS、Mac、Windows、Linux或基于浏览器的版本。',
          '**Android 11或更早版本、或纯32位硬件设备的所有者。** 该应用要求在arm64-v8a或x86_64上运行Android 12(API 31)或更高版本。',
          '**在信任一款应用之前需要成熟使用记录的读者。** 相比某些运行更久的替代方案,ToolNeuron更新,公开的使用记录也更少。',
          '**只想要一款简单、单一功能聊天应用,不需要其他东西的读者。** 更广泛的功能集(RAG、语音、插件、本地服务器)对一些读者是优势,对另一些读者则是不必要的复杂性。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'ToolNeuron免费吗?',
            a: '是的。ToolNeuron可免费安装和使用,根据其GitHub代码库,在MIT许可证下开源。',
          },
          {
            q: 'ToolNeuron是谁开发的?',
            a: 'ToolNeuron由开发者[Siddhesh Sonar](https://github.com/Siddhesh2377)构建和维护。',
          },
          {
            q: 'ToolNeuron支持哪些模型?',
            a: '任何兼容的GGUF格式模型,包括Llama、Mistral、Gemma等常见系列,通过[llama.cpp](https://github.com/ggml-org/llama.cpp)运行。内置的Hugging Face浏览器有助于查找和下载模型。',
          },
          {
            q: 'ToolNeuron能在没有互联网连接的情况下工作吗?',
            a: '就其核心功能而言,是的。该项目的README声明,应用没有云端组件,也没有遥测;只有在下载模型或应用更新时才需要互联网连接。',
          },
          {
            q: 'ToolNeuron需要什么Android版本?',
            a: '根据该项目公开的构建配置,需要在arm64-v8a或x86_64硬件上运行Android 12(API级别31)或更高版本。',
          },
          {
            q: 'ToolNeuron是开源的吗?',
            a: '是的。该应用在[GitHub](https://github.com/Siddhesh2377/ToolNeuron)上以MIT许可证发布,源代码可以直接审计或构建。',
          },
          {
            q: 'ToolNeuron除了聊天之外还有哪些额外功能?',
            a: '根据该项目的README,包括覆盖常见文件格式的文档RAG、通过sherpa-onnx实现的语音输入输出、本地兼容OpenAI的HTTP服务器、Hugging Face模型浏览器,以及沙盒化的插件系统。',
          },
          {
            q: 'ToolNeuron与Layla或RikkaHub相比如何?',
            a: 'ToolNeuron免费开源,内置功能集更广泛(RAG、语音、本地API服务器、插件)。[Layla](/zh/power-local-llm/layla-review)是一款售价19.99美元的付费闭源应用,同时支持Android和iOS,专注于角色人设/角色扮演,并提供可选的云端模式。[RikkaHub](/zh/power-local-llm/rikkahub-review)是另一款免费开源的Android聊天应用。可根据你更看重ToolNeuron更广泛的功能集、Layla的跨平台角色扮演定位,还是一款更简单的单一用途客户端来做选择。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          'ToolNeuron为Android带来了一款真正功能广泛、免费且开源的端侧AI应用:通过llama.cpp实现的GGUF聊天、文档RAG、语音输入输出、本地兼容OpenAI的API服务器和插件系统,这一切都由一套有文档记录、以加密为核心的安全架构支撑,而非一句含糊的隐私承诺。',
          '公开的MIT许可源代码,相较于闭源的Android替代方案是一项有意义的优势——在意核实应用究竟如何处理本地数据的读者,可以直接查看代码,而不必仅仅信任一个应用页面。',
          '让本评测保持审慎而非无条件热情的原因,在于该应用相对年轻,以及PromptQuorum尚未专门对其众多功能进行独立的实机基准测试;对性能有严苛要求的读者,应先在自己的设备上测试该应用,再决定是否重度依赖它。',
          '希望获得一款免费、开源、注重隐私且功能不止于纯聊天的应用的Android用户,应该尝试它;希望使用iPhone应用、更简单的单一用途客户端,或更成熟使用记录的读者,则应考虑改用[Layla](/zh/power-local-llm/layla-review)或[RikkaHub](/zh/power-local-llm/rikkahub-review)。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Google Play上的ToolNeuron](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)——价格与分发。',
          '[ToolNeuron GitHub代码库](https://github.com/Siddhesh2377/ToolNeuron)——README、许可证、安全文档和代码库元数据,核实于2026年9月12日。',
          '[ToolNeuron项目网站](https://tool-neuron.vercel.app/)——产品概述。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Layla评测](/zh/power-local-llm/layla-review)——一款付费的跨平台端侧陪伴应用,提供可选的云端模式。',
          '[RikkaHub评测](/zh/power-local-llm/rikkahub-review)——另一款免费开源的Android本地AI聊天应用。',
          '[Maid评测](/zh/power-local-llm/maid-review)——一款免费开源、跨平台(Android和iOS)的聊天客户端。',
          '[PocketPal AI评测](/zh/power-local-llm/pocketpal-ai-review)——一款免费开源的本地AI应用,支持iOS并部分支持Android。',
          '[完整本地LLM软件目录](/zh/power-local-llm/local-llm-software-directory)——一个更广泛的跨平台本地LLM工具目录。',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/toolneuron-review-hero-ar.webp',
    title: 'مراجعة ToolNeuron (2026): تطبيق أندرويد مفتوح المصدر للذكاء الاصطناعي المشفّر على الجهاز',
    seoTitle: 'مراجعة ToolNeuron 2026: تطبيق أندرويد مشفّر للدردشة بالذكاء الاصطناعي',
    intro:
      '[ToolNeuron](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)، من تطوير [Siddhesh Sonar](https://github.com/Siddhesh2377) ومنشور كمصدر مفتوح بموجب [رخصة MIT](https://github.com/Siddhesh2377/ToolNeuron/blob/re-write/LICENSE)، هو تطبيق أندرويد مجاني يشغّل نماذج لغوية بصيغة GGUF على الجهاز عبر llama.cpp، مع استرجاع معزز بالبيانات (RAG) للمستندات، وإدخال/إخراج صوتي، وخادم HTTP محلي متوافق مع OpenAI، ونظام إضافات مبني فوق ذلك. ووفق ملف README الخاص بالمشروع، فإن الهدف التصميمي الأساسي هو "لا خدمات Google Play، لا قياس عن بُعد، لا سحابة"، مدعومًا بتشفير AES-256-GCM قائم على Android Keystore ومصادقة Argon2id للبيانات المخزّنة. تتناول هذه المراجعة ما يقوم به التطبيق، ومتطلباته، وموقعه مقارنة بتطبيقات دردشة أندرويد الأخرى على الجهاز مثل Layla وRikkaHub، استنادًا إلى مستودع GitHub العام للمشروع وصفحته في متجر Play، وليس إلى اختبار عملي مستقل.',
    metaDescription:
      'مراجعة ToolNeuron 2026: تطبيق أندرويد مجاني ومفتوح المصدر (MIT) لدردشة ذكاء اصطناعي مشفّرة على الجهاز، واسترجاع معزز بالبيانات للمستندات، وصوت، وتوليد صور محلي. المتطلبات ونموذج الأمان والمقارنة مع Layla وRikkaHub.',
    twitterDescription:
      'مراجعة ToolNeuron: تطبيق أندرويد مجاني ومفتوح المصدر يشغّل نماذج GGUF بالكامل على الجهاز — تخزين محلي مشفّر، واسترجاع معزز بالبيانات للمستندات، وإدخال/إخراج صوتي، وخادم محلي متوافق مع OpenAI، ونظام إضافات. لا سحابة، ولا قياس عن بُعد، وفق ملف README الخاص بالمشروع.',
    audience:
      'مستخدمو أندرويد الذين يفكرون في تطبيق دردشة ذكاء اصطناعي مجاني ومفتوح المصدر يركّز على الخصوصية ويعمل على الجهاز — يغطي نموذج الأمان، والميزات المدعومة، ومتطلبات الأجهزة، والمقارنة مع تطبيقات أندرويد الأخرى للذكاء الاصطناعي المحلي التي راجعها هذا الموقع.',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'ToolNeuron review',
    targetKeywords: [
      'toolneuron review',
      'toolneuron android',
      'toolneuron app',
      'open source local ai android',
      'encrypted offline ai chat app',
      'on-device llm android app',
      'toolneuron vs layla',
      'free local ai app android',
    ],
    current_models_mentioned: ['Llama', 'Mistral', 'Gemma', 'GGUF models'],
    current_hardware_mentioned: ['Android 12'],
    leadAnswerBlock:
      '**ToolNeuron تطبيق أندرويد مجاني ومفتوح المصدر (MIT) يشغّل نماذج لغوية بصيغة GGUF بالكامل على الجهاز عبر [llama.cpp](https://github.com/ggml-org/llama.cpp)، مع استرجاع معزز بالبيانات للمستندات، وإدخال/إخراج صوتي، وخادم HTTP محلي متوافق مع OpenAI — دون أي مكوّن سحابي، ودون قياس عن بُعد، وفق ملف README الخاص بالمشروع.** طوّره المطوّر [Siddhesh Sonar](https://github.com/Siddhesh2377)، ويحمي التطبيق تخزينه المحلي بتشفير AES-256-GCM مدعوم بـ Android Keystore ومصادقة Argon2id، ويتطلب أندرويد 12 (واجهة برمجة التطبيقات 31) أو أحدث. يمكن للقراء الباحثين عن نقطة مقارنة الاطلاع أيضًا على [مراجعة Layla](/ar/power-local-llm/layla-review) أو [مراجعة RikkaHub](/ar/power-local-llm/rikkahub-review).',
    quickAnswerTop: {
      en: {
        question: 'Is ToolNeuron worth installing?',
        answer:
          'Yes, if you want a free, open-source Android app that runs AI models fully on-device with encrypted local storage and no cloud dependency, and your phone runs Android 12 or newer. It adds document chat (RAG), voice input/output, and a local OpenAI-compatible API server on top of plain chat — features many single-purpose chat apps skip. Skip it if you want an iPhone app (it is Android-only) or prefer a much larger, more established curated model library; compare it against Layla or RikkaHub first.',
        bullets: [
          'Free and open source under the MIT license; no in-app purchases documented in the project\'s own repository.',
          'Runs GGUF models (Llama, Mistral, Gemma, and other GGUF-compatible families) on-device via llama.cpp, per the GitHub repository.',
          'Adds document RAG (PDF, DOCX, XLSX, and more), voice input/output via sherpa-onnx, a local OpenAI-compatible HTTP server, and a plugin system.',
          'Local storage is encrypted with Android Keystore AES-256-GCM and Argon2id authentication, per the project\'s README.',
          'Requires Android 12 (API 31) or newer on an arm64-v8a or x86_64 device, per the project\'s build configuration.',
        ],
        updatedDate: '2026-09-12',
      },
      ar: {
        question: 'هل يستحق تطبيق ToolNeuron التثبيت؟',
        answer:
          'نعم، إذا كنت تريد تطبيق أندرويد مجانيًا ومفتوح المصدر يشغّل نماذج ذكاء اصطناعي بالكامل على الجهاز مع تخزين محلي مشفّر ودون اعتماد على السحابة، وهاتفك يعمل بنظام أندرويد 12 أو أحدث. يضيف التطبيق دردشة المستندات (RAG)، وإدخال/إخراج صوتي، وخادم API محلي متوافق مع OpenAI فوق الدردشة البسيطة — وهي ميزات تفتقر إليها كثير من تطبيقات الدردشة أحادية الغرض. تجاوزه إذا كنت تريد تطبيقًا لآيفون (فهو حصري لأندرويد) أو تفضّل مكتبة نماذج منسّقة أكبر وأكثر رسوخًا؛ قارنه أولًا بـ Layla أو RikkaHub.',
        bullets: [
          'مجاني ومفتوح المصدر بموجب رخصة MIT؛ لا توجد مشتريات داخل التطبيق موثّقة في مستودع المشروع نفسه.',
          'يشغّل نماذج GGUF (Llama وMistral وGemma وعائلات أخرى متوافقة مع GGUF) على الجهاز عبر llama.cpp، وفق مستودع GitHub.',
          'يضيف استرجاعًا معززًا بالبيانات للمستندات (PDF وDOCX وXLSX وغيرها)، وإدخال/إخراج صوتي عبر sherpa-onnx، وخادم HTTP محلي متوافق مع OpenAI، ونظام إضافات.',
          'وفق ملف README الخاص بالمشروع، التخزين المحلي مشفّر باستخدام Android Keystore AES-256-GCM ومصادقة Argon2id.',
          'وفق إعدادات البناء الخاصة بالمشروع، يتطلب أندرويد 12 (واجهة برمجة التطبيقات 31) أو أحدث على جهاز arm64-v8a أو x86_64.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'الحصول على ToolNeuron', anchor: 'get-it' },
      { label: 'ما هو ToolNeuron', anchor: 'what-is-toolneuron' },
      { label: 'من طوّر ToolNeuron', anchor: 'who-built-it' },
      { label: 'كيفية البدء', anchor: 'how-to-get-started' },
      { label: 'النماذج والميزات المدعومة', anchor: 'models-and-features' },
      { label: 'المتطلبات', anchor: 'requirements' },
      { label: 'الخصوصية والأمان', anchor: 'privacy' },
      { label: 'المفاضلات: المزايا مقابل القيود', anchor: 'tradeoffs' },
      { label: 'ToolNeuron مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'من ينبغي أن يستخدم ToolNeuron', anchor: 'who-should-use' },
      { label: 'من لا ينبغي أن يستخدم ToolNeuron', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'الملخص',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ToolNeuron تطبيق أندرويد مجاني ومفتوح المصدر (MIT) من المطوّر Siddhesh Sonar، يشغّل نماذج لغوية بصيغة GGUF على الجهاز عبر llama.cpp، ويضيف تخزينًا محليًا مشفّرًا، واسترجاعًا معززًا بالبيانات للمستندات، وإدخال/إخراج صوتي، وخادم HTTP محلي متوافق مع OpenAI، ونظام إضافات، دون مكوّن سحابي أو قياس عن بُعد وفق ملف README الخاص بالمشروع.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله تطبيق دردشة أندرويد مجانيًا ومفتوح المصدر يتيح لك أيضًا التحدث مع مستنداتك الخاصة واستخدام الصوت، ويعمل كله على هاتفك بمستوى التشفير الذي تتوقعه من مشروع يهتم بالأمان — لا مجرد غلاف بسيط حول واجهة برمجة تطبيقات سحابية.',
          },
        ],
        items: [
          'السعر: مجاني [للتنزيل](https://play.google.com/store/apps/details?id=com.dark.tool_neuron) والاستخدام؛ مفتوح المصدر بموجب رخصة MIT، ولا توجد مشتريات داخل التطبيق موثّقة في المستودع.',
          'المطوّر: [Siddhesh Sonar](https://github.com/Siddhesh2377).',
          'المحرك: [llama.cpp](https://github.com/ggml-org/llama.cpp) لنماذج الدردشة بصيغة GGUF، بالإضافة إلى [sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) للصوت، وكلاهما يعمل بالكامل على الجهاز.',
          'ميزات تتجاوز الدردشة: استرجاع معزز بالبيانات للمستندات (PDF وDOCX وXLSX وPPTX وEPUB وغيرها)، وإدخال/إخراج صوتي، وخادم HTTP محلي متوافق مع OpenAI، ومتصفح نماذج Hugging Face، ونظام إضافات معزول (sandbox)، وفق ملف README الخاص بالمشروع.',
          'الأمان: وفق وثائق المشروع نفسه، تُشفَّر البيانات المحلية باستخدام Android Keystore AES-256-GCM ومصادقة Argon2id.',
          'المتطلب: أندرويد 12 (واجهة برمجة التطبيقات 31) أو أحدث، على عتاد arm64-v8a أو x86_64، وفق إعدادات البناء الخاصة بالمشروع.',
          'حالة المصدر المفتوح: رخصة MIT، والشيفرة المصدرية منشورة على [GitHub](https://github.com/Siddhesh2377/ToolNeuron) — قابلة للتدقيق بشكل مستقل، على عكس البدائل مغلقة المصدر.',
          'التوزيع: متوفر عبر [Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron) وكتنزيلات APK مباشرة من GitHub Releases.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'الحصول على ToolNeuron',
        content: [
          '**يتوفر ToolNeuron عبر Google Play أو كتنزيل مباشر لملف APK من صفحته على GitHub Releases.** يقدّم كلا قناتي التوزيع نفس التطبيق مفتوح المصدر.',
          'هذه المراجعة مكمّلة لـ[دليل برمجيات نماذج اللغة المحلية](/ar/power-local-llm/local-llm-software-directory) الخاص بـ PromptQuorum، الذي يفهرس أدوات الذكاء الاصطناعي المحلية عبر المنصات، بما في ذلك مدخل ToolNeuron نفسه.',
        ],
        columns: ['القناة', 'طريقة الحصول عليه'],
        rows: [
          {
            'القناة': 'Google Play',
            'طريقة الحصول عليه': '[ToolNeuron على Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)',
          },
          {
            'القناة': 'GitHub (APK)',
            'طريقة الحصول عليه': '[إصدارات ToolNeuron على GitHub](https://github.com/Siddhesh2377/ToolNeuron/releases)',
          },
        ],
        note: 'التطبيق مجاني في الحالتين — يستضيف GitHub أيضًا الشيفرة المصدرية الكاملة للقراء الراغبين في تدقيقها أو بنائها بأنفسهم.',
      },
      whatIsToolNeuron: {
        id: 'what-is-toolneuron',
        title: 'ما هو ToolNeuron',
        content: [
          '**ToolNeuron تطبيق أندرويد يشغّل نماذج لغوية بصيغة GGUF مباشرة على الجهاز عبر llama.cpp، دون أي مكوّن من جانب الخادم.** ووفق وصف المشروع نفسه، فإنه يهدف إلى أن يكون "ذكاءً اصطناعيًا على الجهاز لأندرويد. لا خدمات Google Play، لا قياس عن بُعد، لا سحابة" — إذ صُمّمت النماذج والمحادثات والمستندات المستخدمة في الاسترجاع ومواد مفاتيح التشفير جميعها لتبقى على الهاتف.',
          'وبالإضافة إلى الدردشة البسيطة، يضم التطبيق استرجاع مستندات (RAG) عبر صيغ ملفات شائعة، وإدخالًا وإخراجًا صوتيًا عبر محرك الصوت sherpa-onnx، وخادم HTTP محلي يوفّر واجهة برمجة تطبيقات متوافقة مع OpenAI لتتصل بها تطبيقات أخرى، ومتصفح نماذج Hugging Face مدمجًا، ونظام إضافات معزول (sandbox) لتثبيت قدرات إضافية.',
          'تعتمد هذه المراجعة على مستودع GitHub العام للمشروع — ملف README الخاص به، وملف الترخيص، وبيانات وصفية للمستودع — وعلى صفحة Google Play، وليس على تدقيق مستقل للشيفرة أو اختبارات أداء عملية.',
        ],
      },
      whoBuiltIt: {
        id: 'who-built-it',
        title: 'من طوّر ToolNeuron',
        content: [
          '**يُبنى ToolNeuron ويُصان من قبل المطوّر [Siddhesh Sonar](https://github.com/Siddhesh2377)، الذي ينشر المشروع علنًا على GitHub بموجب رخصة MIT.** يُظهر المستودع تطويرًا نشطًا ومفصّلًا: بنية أمان موثّقة، وقاعدة شيفرة معيارية مقسّمة إلى مكوّنات للتطبيق والاستدلال والتشفير والشبكات، ومجتمع علني على Discord للمستخدمين والمساهمين.',
          'وبما أن الشيفرة المصدرية منشورة وليست مغلقة، يمكن التحقق مباشرة في الشيفرة من الادعاءات المتعلقة بما يفعله التطبيق — وما لا يفعله — بالبيانات المحلية، بدلًا من الاعتماد فقط على وصف المطوّر.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'كيفية البدء',
        content: [
          '**يستغرق إعداد ToolNeuron بضع خطوات ولا يتطلب إنشاء حساب.** تستغرق العملية بأكملها، من التثبيت إلى أول استجابة دون اتصال، بضع دقائق بالإضافة إلى الوقت الذي يستغرقه تنزيل النموذج المختار.',
        ],
        numberedItems: [
          {
            title: 'تثبيت التطبيق',
            whyItMatters: 'احصل على [ToolNeuron من Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)، أو نزّل ملف APK مباشرة من [GitHub Releases](https://github.com/Siddhesh2377/ToolNeuron/releases). التطبيق نفسه مجاني في كلتا الحالتين.',
          },
          {
            title: 'إعداد التشفير المحلي',
            whyItMatters: 'وفق وثائق الأمان الخاصة بالمشروع، يقوم التطبيق بإعداد تشفيره المدعوم بـ Android Keystore ورمز PIN من 6 أرقام عند أول تشغيل، قبل تخزين بيانات المحادثة.',
          },
          {
            title: 'تصفّح وتنزيل نموذج GGUF',
            whyItMatters: 'استخدم متصفح Hugging Face المدمج للعثور على نموذج GGUF متوافق، أو وفّر نموذجك الخاص. تتطلب هذه الخطوة اتصالًا بالإنترنت؛ أما الدردشة بعد ذلك فلا تتطلبه.',
          },
          {
            title: 'الدردشة، أو إضافة مستندات للاسترجاع المعزز بالبيانات',
            whyItMatters: 'بمجرد تنزيل نموذج، تعمل الدردشة بالكامل على الجهاز عبر llama.cpp. أرفق مستندًا مدعومًا (PDF أو DOCX أو غيرهما) بمحادثة ليجيب النموذج بناءً عليه.',
          },
          {
            title: 'اختياري: تفعيل الصوت أو خادم API المحلي',
            whyItMatters: 'إدخال/إخراج الصوت وخادم HTTP المحلي المتوافق مع OpenAI كلاهما ميزتان اختياريتان مضافتان فوق الدردشة البسيطة — لا حاجة لأي منهما لاستخدام التطبيق.',
          },
        ],
        note: 'يختلف توافق النماذج الدقيق وأحجام التنزيل باختلاف ملف GGUF المختار — تحقق من حجم النموذج وترخيصه على صفحته الخاصة على Hugging Face قبل تنزيله في حال كانت باقة البيانات محدودة.',
      },
      modelsAndFeatures: {
        id: 'models-and-features',
        title: 'النماذج والميزات المدعومة',
        content: [
          '**يشغّل ToolNeuron أي نموذج متوافق بصيغة GGUF، بما في ذلك عائلات شائعة مثل Llama وMistral وGemma، عبر [llama.cpp](https://github.com/ggml-org/llama.cpp).** يتيح متصفح Hugging Face المدمج للقراء تصفية النماذج المتاحة حسب علامة خط الأنابيب، وعدد المعاملات، والتكميم، والترخيص قبل التنزيل.',
          'وبالإضافة إلى الدردشة، يسرد ملف README الخاص بالمشروع نفسه: استرجاعًا معززًا بالبيانات للمستندات عبر PDF وDOCX وXLSX وPPTX وODT وEPUB وRTF وMarkdown وHTML وJSON وXML وCSV والنص العادي؛ وإدخالًا وإخراجًا صوتيًا عبر محرك sherpa-onnx (أصوات VITS وPiper وWhisper)؛ وتوليد صور محليًا، أُضيف إلى التطبيق في مايو 2026 وفق ملاحظات سجل التغييرات الخاصة بالمشروع؛ وخادم HTTP محلي يوفّر واجهة برمجة تطبيقات متوافقة مع OpenAI مع واجهة ويب خاصة به؛ ونظام إضافات معزول (sandbox) لتثبيت امتدادات من صنع المجتمع.',
          'وهذه مجموعة ميزات أوسع من عميل دردشة أحادي الغرض، وتعمل كل ميزة، وفق وثائق المشروع، عبر المحرك نفسه على الجهاز بدلًا من استدعاء خدمة سحابية.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات',
        content: [
          '**يتطلب ToolNeuron، وفق إعدادات البناء العلنية الخاصة بالمشروع، أندرويد 12 (مستوى واجهة برمجة التطبيقات 31) أو أحدث، على عتاد arm64-v8a أو x86_64.** وكما هو الحال مع أي تطبيق نماذج لغوية على الجهاز، يعتمد الحد الأدنى العملي للعتاد على النموذج المحمّل بصيغة GGUF — عدد معاملاته ومستوى تكميمه — أكثر من اعتماده على مواصفة ثابتة واحدة؛ فالنموذج الصغير المكمّم يحتاج ذاكرة أقل بكثير من نموذج كبير.',
          'ينبغي أن يتوقع القراء الذين يستخدمون إصدارات أندرويد أقدم أو أجهزة تدعم 32 بت فقط ألا يُثبَّت التطبيق، إذ يفرض حزمة أندرويد نفسها الحد الأدنى لإصدار SDK ومرشحات ABI، وليس ذلك مجرد توصية غير ملزمة.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والأمان',
        content: [
          '**وفق ملف README الخاص بالمشروع، فإن هدف التصميم المعلَن لـ ToolNeuron هو تجنّب أي اعتماد على السحابة: لا حاجة إلى خدمات Google Play، ولا قياس عن بُعد، ولا مكوّن من جانب الخادم لميزاته الأساسية في الدردشة والاسترجاع المعزز بالبيانات.** ويُعزَّز ذلك ببنية أمان موثّقة علنًا وبتفصيل غير معتاد، بدلًا من ادعاء خصوصية من سطر واحد.',
          'وفق وثائق الأمان الخاصة بالمشروع، تُحمى البيانات المحلية — بما في ذلك مواد مفتاح التشفير نفسها — بمفتاح AES-256-GCM مدعوم بـ Android Keystore (مع تفضيل StrongBox حين يدعمه الجهاز)، ومصادقة PIN قائمة على Argon2id. وتصف الوثائق نفسها آلية إغلاق تتصاعد بعد محاولات PIN فاشلة متكررة، وميزة اختيارية لرمز "PIN الطوارئ" تمسح بيانات التطبيق المحلية.',
        ],
        items: [
          '**لا حاجة لحساب.** يمكن تثبيت التطبيق واستخدامه دون إنشاء ملف شخصي أو تسجيل الدخول.',
          '**لا مكوّن سحابي للميزات الأساسية.** وفق ملف README الخاص بالمشروع، صُمّمت الدردشة والاسترجاع المعزز بالبيانات والصوت جميعها للعمل على الجهاز.',
          '**تخزين محلي مشفّر.** وفق وثائق المشروع، تُحمى المحادثات والمستندات ومفاتيح التشفير باستخدام Android Keystore AES-256-GCM ومصادقة Argon2id.',
          '**شيفرة مفتوحة المصدر.** بما أن الشيفرة المصدرية للتطبيق منشورة بموجب رخصة MIT، يمكن التحقق مباشرة في الشيفرة من ادعاءات بنيته وتعامله مع البيانات، بدلًا من الاعتماد فقط على تصريحات المطوّر.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المفاضلات: المزايا مقابل القيود',
        columns: ['الميزة', 'ما تعنيه في الاستخدام الفعلي', 'القيد / التنبيه'],
        rows: [
          {
            'الميزة': 'مجاني ومفتوح المصدر (MIT)',
            'ما تعنيه في الاستخدام الفعلي': 'لا تكلفة، والشيفرة المصدرية الكاملة متاحة للتدقيق على GitHub.',
            'القيد / التنبيه': 'كون التطبيق مفتوح المصدر لا يضمن بحد ذاته إجراء تدقيق أمني مستقل.',
          },
          {
            'الميزة': 'مجموعة ميزات أوسع من الدردشة البسيطة',
            'ما تعنيه في الاستخدام الفعلي': 'الاسترجاع المعزز بالبيانات للمستندات، والصوت، وخادم API محلي، والإضافات كلها مدمجة، وليست تطبيقات منفصلة يجب إدارتها.',
            'القيد / التنبيه': 'أجزاء متحركة أكثر من تطبيق دردشة أحادي الغرض؛ لم تتحقق هذه المراجعة بشكل مستقل من موثوقية كل ميزة.',
          },
          {
            'الميزة': 'نموذج أمان مفصّل وموثّق',
            'ما تعنيه في الاستخدام الفعلي': 'يحمي التخزين المحلي المشفّر والمصادقة القائمة على PIN البيانات في حال فقدان الهاتف أو وصول شخص آخر إليه.',
            'القيد / التنبيه': 'وثائق الأمان من المشروع نفسه؛ لم تُخضع هذه المراجعة التطبيق لاختبار اختراق مستقل.',
          },
          {
            'الميزة': 'لا اعتماد على السحابة للميزات الأساسية',
            'ما تعنيه في الاستخدام الفعلي': 'وفق ملف README الخاص بالمشروع، تعمل الدردشة والاسترجاع المعزز بالبيانات والصوت جميعها دون اتصال بعد تنزيل نموذج.',
            'القيد / التنبيه': 'حصري لأندرويد — لا توجد نسخة لآيفون أو سطح المكتب أو الويب.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'ToolNeuron مقابل البدائل',
        columns: ['التطبيق', 'المنصات', 'السعر', 'مرونة النماذج', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': 'ToolNeuron',
            'المنصات': 'أندرويد فقط',
            'السعر': 'مجاني، مفتوح المصدر (MIT)',
            'مرونة النماذج': 'أي نموذج GGUF عبر متصفح Hugging Face مدمج',
            'الفرق الرئيسي': 'أوسع مجموعة ميزات هنا — استرجاع معزز بالبيانات، وصوت، وخادم API محلي، وإضافات إلى جانب الدردشة',
          },
          {
            'التطبيق': '[Layla](/ar/power-local-llm/layla-review)',
            'المنصات': 'أندرويد وiOS',
            'السعر': '19.99 دولارًا شراء لمرة واحدة، بالإضافة إلى مستويات داخل التطبيق',
            'مرونة النماذج': 'خلفيات نماذج GGUF وLiteRT-LM وPTE',
            'الفرق الرئيسي': 'تركيز على الشخصيات وتقمص الأدوار، مع وضع سحابي اختياري؛ مغلق المصدر',
          },
          {
            'التطبيق': '[RikkaHub](/ar/power-local-llm/rikkahub-review)',
            'المنصات': 'أندرويد فقط',
            'السعر': 'مجاني، مفتوح المصدر',
            'مرونة النماذج': 'نماذج GGUF، وفق صفحته الخاصة',
            'الفرق الرئيسي': 'خيار آخر مجاني ومفتوح المصدر لأندرويد — قارن عمق الميزات مباشرة',
          },
          {
            'التطبيق': '[Maid](/ar/power-local-llm/maid-review)',
            'المنصات': 'أندرويد وiOS',
            'السعر': 'مجاني، مفتوح المصدر',
            'مرونة النماذج': 'نماذج GGUF عبر llama.cpp',
            'الفرق الرئيسي': 'عبر المنصات (iOS أيضًا)، عميل دردشة أبسط وأحادي الغرض',
          },
        ],
        note: 'تتغير تفاصيل المنصة والسعر والميزات لتطبيقات الطرف الثالث بشكل متكرر — تحقق من التفاصيل الحالية في صفحة كل تطبيق قبل اتخاذ القرار.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من ينبغي أن يستخدم ToolNeuron',
        items: [
          '**مستخدمو أندرويد الراغبون في تطبيق ذكاء اصطناعي مجاني ومفتوح المصدر يعمل على الجهاز.** الشيفرة المصدرية الكاملة علنية، ولا توجد تكلفة للتثبيت أو الاستخدام.',
          '**القراء الراغبون في أكثر من مجرد دردشة بسيطة.** الاسترجاع المعزز بالبيانات للمستندات، وإدخال/إخراج الصوت، وخادم API محلي كلها مدمجة بدلًا من أن تتطلب تطبيقات منفصلة.',
          '**المستخدمون المهتمون بالخصوصية الذين يقدّرون نموذج أمان موثّقًا.** يتجاوز التخزين المحلي المشفّر والمصادقة القائمة على PIN مجرد تصريح بسيط بسياسة خصوصية.',
          '**المطوّرون الراغبون في توسيع التطبيق.** يتيح نظام الإضافات وقاعدة الشيفرة مفتوحة المصدر تخصيصًا مباشرًا، على عكس بديل مغلق المصدر.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'من لا ينبغي أن يستخدم ToolNeuron',
        items: [
          '**مستخدمو آيفون أو سطح المكتب أو الويب.** ToolNeuron حصري لأندرويد؛ لا توجد نسخة لـ iOS أو Mac أو Windows أو Linux أو نسخة تعمل عبر المتصفح.',
          '**أصحاب الأجهزة التي تعمل بأندرويد 11 أو أقدم، أو العتاد الذي يدعم 32 بت فقط.** يتطلب التطبيق أندرويد 12 (واجهة برمجة التطبيقات 31) أو أحدث على arm64-v8a أو x86_64.',
          '**القراء الذين يحتاجون سجلًا راسخًا قبل الثقة بتطبيق ما.** ToolNeuron أحدث وله سجل علني أصغر من بعض البدائل الأكثر رسوخًا منذ زمن أطول.',
          '**القراء الراغبون في تطبيق دردشة واحد وبسيط دون أي شيء آخر.** مجموعة الميزات الأوسع (الاسترجاع المعزز بالبيانات، والصوت، والإضافات، وخادم محلي) ميزة لبعض القراء وتعقيد غير ضروري لآخرين.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل ToolNeuron مجاني؟',
            a: 'نعم. ToolNeuron مجاني للتثبيت والاستخدام، ومفتوح المصدر بموجب رخصة MIT، وفق مستودعه على GitHub.',
          },
          {
            q: 'من يطوّر ToolNeuron؟',
            a: 'يُبنى ToolNeuron ويُصان من قبل المطوّر [Siddhesh Sonar](https://github.com/Siddhesh2377).',
          },
          {
            q: 'ما النماذج التي يدعمها ToolNeuron؟',
            a: 'أي نموذج متوافق بصيغة GGUF، بما في ذلك عائلات شائعة مثل Llama وMistral وGemma، تعمل عبر [llama.cpp](https://github.com/ggml-org/llama.cpp). يساعد متصفح Hugging Face المدمج في العثور على النماذج وتنزيلها.',
          },
          {
            q: 'هل يعمل ToolNeuron دون اتصال بالإنترنت؟',
            a: 'نعم، بالنسبة لميزاته الأساسية. يذكر ملف README الخاص بالمشروع أن التطبيق لا يحتوي على مكوّن سحابي ولا قياس عن بُعد؛ ولا يلزم الاتصال بالإنترنت إلا لتنزيل نموذج أو تحديث للتطبيق.',
          },
          {
            q: 'ما إصدار أندرويد الذي يحتاجه ToolNeuron؟',
            a: 'أندرويد 12 (مستوى واجهة برمجة التطبيقات 31) أو أحدث، على عتاد arm64-v8a أو x86_64، وفق إعدادات البناء العلنية الخاصة بالمشروع.',
          },
          {
            q: 'هل ToolNeuron مفتوح المصدر؟',
            a: 'نعم. التطبيق منشور على [GitHub](https://github.com/Siddhesh2377/ToolNeuron) بموجب رخصة MIT، ويمكن تدقيق الشيفرة المصدرية أو بناؤها مباشرة.',
          },
          {
            q: 'ما الميزات الإضافية التي يمتلكها ToolNeuron إلى جانب الدردشة؟',
            a: 'وفق ملف README الخاص بالمشروع: استرجاع معزز بالبيانات للمستندات عبر صيغ ملفات شائعة، وإدخال وإخراج صوتي عبر sherpa-onnx، وخادم HTTP محلي متوافق مع OpenAI، ومتصفح نماذج Hugging Face، ونظام إضافات معزول (sandbox).',
          },
          {
            q: 'كيف يقارن ToolNeuron بـ Layla أو RikkaHub؟',
            a: 'ToolNeuron مجاني ومفتوح المصدر مع مجموعة ميزات مدمجة أوسع (استرجاع معزز بالبيانات، وصوت، وخادم API محلي، وإضافات). [Layla](/ar/power-local-llm/layla-review) تطبيق مدفوع ومغلق المصدر بسعر 19.99 دولارًا لأندرويد وiOS، يركّز على الشخصيات وتقمص الأدوار مع وضع سحابي اختياري. [RikkaHub](/ar/power-local-llm/rikkahub-review) تطبيق دردشة آخر مجاني ومفتوح المصدر لأندرويد. اختر وفق ما إذا كنت تقدّر مجموعة ميزات ToolNeuron الأوسع، أو تركيز Layla على تقمص الأدوار عبر المنصات، أو عميلًا أبسط أحادي الغرض.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          'يقدّم ToolNeuron تطبيق ذكاء اصطناعي على الجهاز لأندرويد واسع النطاق حقًا ومجاني ومفتوح المصدر: دردشة GGUF عبر llama.cpp، واسترجاع معزز بالبيانات للمستندات، وإدخال/إخراج صوتي، وخادم API محلي متوافق مع OpenAI، ونظام إضافات، وكلها مدعومة ببنية أمان موثّقة تركّز على التشفير بدلًا من وعد غامض بالخصوصية.',
          'الشيفرة المصدرية المنشورة بموجب رخصة MIT ميزة معنوية مقارنة بالبدائل مغلقة المصدر على أندرويد — يمكن للقراء المهتمين بالتحقق مما يفعله التطبيق فعليًا بالبيانات المحلية فحص الشيفرة مباشرة بدلًا من الثقة بصفحة العرض وحدها.',
          'وما يبقي هذه المراجعة معتدلة بدلًا من متحمسة دون تحفّظ هو حداثة عمر التطبيق النسبية وغياب اختبارات أداء عملية ومستقلة أجرتها PromptQuorum تحديدًا على ميزاته العديدة؛ ينبغي للقراء ذوي الاحتياجات الحرجة من حيث الأداء اختبار التطبيق على جهازهم الخاص قبل الاعتماد عليه بشكل كبير.',
          'ينبغي لمستخدمي أندرويد الراغبين في تطبيق مجاني ومفتوح المصدر يركّز على الخصوصية ويقدّم أكثر من مجرد دردشة تجربته؛ أما القراء الراغبون في تطبيق لآيفون، أو عميل أبسط أحادي الغرض، أو سجل أكثر رسوخًا، فينبغي أن يفكروا بدلًا من ذلك في [Layla](/ar/power-local-llm/layla-review) أو [RikkaHub](/ar/power-local-llm/rikkahub-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[ToolNeuron على Google Play](https://play.google.com/store/apps/details?id=com.dark.tool_neuron) — السعر والتوزيع.',
          '[مستودع ToolNeuron على GitHub](https://github.com/Siddhesh2377/ToolNeuron) — ملف README، والترخيص، ووثائق الأمان، وبيانات وصفية للمستودع، جرى التحقق منها في 12 سبتمبر 2026.',
          '[موقع مشروع ToolNeuron](https://tool-neuron.vercel.app/) — نظرة عامة على المنتج.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Layla](/ar/power-local-llm/layla-review) — تطبيق مرافق مدفوع وعبر المنصات يعمل على الجهاز، مع وضع سحابي اختياري.',
          '[مراجعة RikkaHub](/ar/power-local-llm/rikkahub-review) — تطبيق دردشة آخر مجاني ومفتوح المصدر للذكاء الاصطناعي المحلي على أندرويد.',
          '[مراجعة Maid](/ar/power-local-llm/maid-review) — عميل دردشة مجاني ومفتوح المصدر وعبر المنصات (أندرويد وiOS).',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — تطبيق ذكاء اصطناعي محلي مجاني ومفتوح المصدر بدعم لـ iOS ودعم جزئي لأندرويد.',
          '[الدليل الكامل لبرمجيات نماذج اللغة المحلية](/ar/power-local-llm/local-llm-software-directory) — دليل أوسع لأدوات نماذج اللغة المحلية عبر المنصات.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/toolneuron-review-hero-ko.webp',
    title: 'ToolNeuron 리뷰(2026):암호화된 온디바이스 AI를 위한 오픈소스 안드로이드 앱',
    seoTitle: 'ToolNeuron 리뷰 2026:암호화된 안드로이드 AI 채팅 앱',
    intro:
      '개발자 [Siddhesh Sonar](https://github.com/Siddhesh2377)가 개발하고 [MIT 라이선스](https://github.com/Siddhesh2377/ToolNeuron/blob/re-write/LICENSE)로 오픈소스 공개된 [ToolNeuron](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)은 llama.cpp를 통해 GGUF 언어 모델을 기기 내에서 실행하는 무료 안드로이드 앱으로, 문서 RAG, 음성 입출력, OpenAI 호환 로컬 HTTP 서버, 그리고 그 위에 구축된 플러그인 시스템을 제공합니다. 프로젝트 자체 README에 따르면 "구글 플레이 서비스 없음, 텔레메트리 없음, 클라우드 없음"이 핵심 설계 목표이며, 저장 데이터에는 Android Keystore 기반 AES-256-GCM 암호화와 Argon2id 인증이 뒷받침됩니다. 이 리뷰는 독립적인 실사용 테스트가 아니라 프로젝트의 공개 GitHub 저장소와 플레이 스토어 등록 정보를 바탕으로, 이 앱이 무엇을 하는지, 무엇이 필요한지, 그리고 Layla나 RikkaHub 같은 다른 안드로이드 온디바이스 채팅 앱과 비교해 어떤 위치에 있는지 다룹니다.',
    metaDescription:
      'ToolNeuron 리뷰 2026:암호화된 온디바이스 AI 채팅, 문서 RAG, 음성, 로컬 이미지 생성을 지원하는 무료 오픈소스(MIT) 안드로이드 앱. 요구 사항, 보안 모델, Layla·RikkaHub와의 비교.',
    twitterDescription:
      'ToolNeuron 리뷰:GGUF 모델을 완전히 기기 내에서 실행하는 무료 오픈소스 안드로이드 앱 — 암호화된 로컬 저장소, 문서 RAG, 음성 입출력, OpenAI 호환 로컬 서버, 플러그인 시스템. 프로젝트 자체 README에 따르면 클라우드도 텔레메트리도 없습니다.',
    audience:
      '무료·오픈소스이며 프라이버시를 중시하는 온디바이스 AI 채팅 앱을 고려하는 안드로이드 사용자 대상——보안 모델, 지원 기능, 하드웨어 요구 사항, 본 사이트에서 다룬 다른 안드로이드 로컬 AI 앱과의 비교를 다룬다.',
    readTime: '9분 분량',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'ToolNeuron review',
    targetKeywords: [
      'toolneuron review',
      'toolneuron android',
      'toolneuron app',
      'open source local ai android',
      'encrypted offline ai chat app',
      'on-device llm android app',
      'toolneuron vs layla',
      'free local ai app android',
    ],
    current_models_mentioned: ['Llama', 'Mistral', 'Gemma', 'GGUF models'],
    current_hardware_mentioned: ['Android 12'],
    leadAnswerBlock:
      '**ToolNeuron은 [llama.cpp](https://github.com/ggml-org/llama.cpp)를 통해 GGUF 언어 모델을 완전히 기기 내에서 실행하는 무료 오픈소스(MIT) 안드로이드 앱으로, 문서 RAG, 음성 입출력, OpenAI 호환 로컬 HTTP 서버를 제공합니다——프로젝트 자체 README에 따르면 클라우드 구성 요소도, 텔레메트리도 없습니다.** 개발자 [Siddhesh Sonar](https://github.com/Siddhesh2377)가 만들었으며, Android Keystore 기반 AES-256-GCM 암호화와 Argon2id 인증으로 로컬 저장소를 보호하고, 안드로이드 12(API 31) 이상이 필요합니다. 비교 대상을 찾는 독자는 [Layla 리뷰](/ko/power-local-llm/layla-review)나 [RikkaHub 리뷰](/ko/power-local-llm/rikkahub-review)도 참고하세요.',
    quickAnswerTop: {
      en: {
        question: 'Is ToolNeuron worth installing?',
        answer:
          'Yes, if you want a free, open-source Android app that runs AI models fully on-device with encrypted local storage and no cloud dependency, and your phone runs Android 12 or newer. It adds document chat (RAG), voice input/output, and a local OpenAI-compatible API server on top of plain chat — features many single-purpose chat apps skip. Skip it if you want an iPhone app (it is Android-only) or prefer a much larger, more established curated model library; compare it against Layla or RikkaHub first.',
        bullets: [
          'Free and open source under the MIT license; no in-app purchases documented in the project\'s own repository.',
          'Runs GGUF models (Llama, Mistral, Gemma, and other GGUF-compatible families) on-device via llama.cpp, per the GitHub repository.',
          'Adds document RAG (PDF, DOCX, XLSX, and more), voice input/output via sherpa-onnx, a local OpenAI-compatible HTTP server, and a plugin system.',
          'Local storage is encrypted with Android Keystore AES-256-GCM and Argon2id authentication, per the project\'s README.',
          'Requires Android 12 (API 31) or newer on an arm64-v8a or x86_64 device, per the project\'s build configuration.',
        ],
        updatedDate: '2026-09-12',
      },
      ko: {
        question: 'ToolNeuron은 설치할 가치가 있을까요?',
        answer:
          '암호화된 로컬 저장소로 클라우드 의존 없이 AI 모델을 완전히 기기 내에서 실행하는 무료 오픈소스 안드로이드 앱을 원하고, 사용 중인 휴대폰이 안드로이드 12 이상이라면 그렇습니다. 단순 채팅에 더해 문서 채팅(RAG), 음성 입출력, 로컬 OpenAI 호환 API 서버를 제공하는데, 이는 많은 단일 목적 채팅 앱에는 없는 기능입니다. 아이폰 앱이 필요하거나(이 앱은 안드로이드 전용입니다) 훨씬 더 크고 정착된 큐레이션 모델 라이브러리를 선호한다면 건너뛰고, 먼저 Layla나 RikkaHub와 비교해 보세요.',
        bullets: [
          'MIT 라이선스로 무료·오픈소스이며, 프로젝트 자체 저장소에 문서화된 인앱 구매가 없다.',
          'GitHub 저장소에 따르면 llama.cpp를 통해 GGUF 모델(Llama, Mistral, Gemma 및 기타 GGUF 호환 계열)을 기기 내에서 실행한다.',
          '문서 RAG(PDF, DOCX, XLSX 등), sherpa-onnx를 통한 음성 입출력, 로컬 OpenAI 호환 HTTP 서버, 플러그인 시스템을 추가한다.',
          '프로젝트 README에 따르면 로컬 저장소는 Android Keystore AES-256-GCM과 Argon2id 인증으로 암호화되어 있다.',
          '프로젝트 빌드 구성에 따르면 arm64-v8a 또는 x86_64 기기에서 안드로이드 12(API 31) 이상이 필요하다.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'ToolNeuron 받기', anchor: 'get-it' },
      { label: 'ToolNeuron이란', anchor: 'what-is-toolneuron' },
      { label: '누가 만들었는가', anchor: 'who-built-it' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '지원 모델 및 기능', anchor: 'models-and-features' },
      { label: '요구 사항', anchor: 'requirements' },
      { label: '개인정보 보호 및 보안', anchor: 'privacy' },
      { label: '장단점:이점 대 한계', anchor: 'tradeoffs' },
      { label: 'ToolNeuron 대 대안 앱', anchor: 'vs-alternatives' },
      { label: 'ToolNeuron을 사용해야 할 사람', anchor: 'who-should-use' },
      { label: 'ToolNeuron을 사용하지 말아야 할 사람', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '핵심 요약',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ToolNeuron은 개발자 Siddhesh Sonar가 만든 무료 오픈소스(MIT) 안드로이드 앱으로, llama.cpp를 통해 GGUF 언어 모델을 기기 내에서 실행하며, 암호화된 로컬 저장소, 문서 RAG, 음성 입출력, 로컬 OpenAI 호환 HTTP 서버, 플러그인 시스템을 더한다. 프로젝트 자체 README에 따르면 클라우드 구성 요소나 텔레메트리는 없다.',
          },
          {
            type: 'plain-terms',
            text: '한 번 AI 모델을 휴대폰에 내려받으면 비행기 모드에서도 작동하는 무료 채팅 앱이라고 생각하면 됩니다——계정도, 서버도 필요 없고, 실제로 대화하는 데 인터넷 연결도 필요하지 않습니다.',
          },
        ],
        items: [
          '가격:[다운로드](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)와 사용 모두 무료. MIT 라이선스로 오픈소스이며 저장소에 문서화된 인앱 구매는 없다.',
          '개발자:[Siddhesh Sonar](https://github.com/Siddhesh2377).',
          '엔진:GGUF 채팅 모델용 [llama.cpp](https://github.com/ggml-org/llama.cpp)와 음성용 [sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx)로, 모두 기기 내에서만 실행된다.',
          '채팅을 넘어서는 기능:프로젝트 README에 따르면 문서 RAG(PDF, DOCX, XLSX, PPTX, EPUB 등), 음성 입출력, 로컬 OpenAI 호환 HTTP 서버, Hugging Face 모델 브라우저, 샌드박스화된 플러그인 시스템.',
          '보안:프로젝트 자체 문서에 따르면 로컬 데이터는 Android Keystore AES-256-GCM과 Argon2id 인증으로 암호화된다.',
          '요구 사항:프로젝트 빌드 구성에 따르면 arm64-v8a 또는 x86_64 하드웨어에서 안드로이드 12(API 31) 이상.',
          '오픈소스 상태:MIT 라이선스이며 소스 코드가 [GitHub](https://github.com/Siddhesh2377/ToolNeuron)에 공개되어 있어——폐쇄형 소스 대안과 달리 독립적으로 감사할 수 있다.',
          '배포:[구글 플레이](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)를 통해, 그리고 GitHub Releases의 직접 APK 다운로드로 이용 가능하다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'ToolNeuron 받기',
        content: [
          '**ToolNeuron은 구글 플레이 또는 GitHub Releases 페이지에서의 직접 APK 다운로드로 이용할 수 있습니다.** 두 배포 채널 모두 동일한 오픈소스 앱을 제공합니다.',
          '이 리뷰는 플랫폼 전반의 로컬 AI 도구를 정리한 PromptQuorum의 [로컬 LLM 소프트웨어 디렉터리](/ko/power-local-llm/local-llm-software-directory)와 짝을 이루는 글로, 여기에는 ToolNeuron 자체 항목도 포함되어 있습니다.',
        ],
        columns: ['채널', '받는 방법'],
        rows: [
          {
            '채널': '구글 플레이',
            '받는 방법': '[구글 플레이의 ToolNeuron](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)',
          },
          {
            '채널': 'GitHub(APK)',
            '받는 방법': '[GitHub의 ToolNeuron 릴리스](https://github.com/Siddhesh2377/ToolNeuron/releases)',
          },
        ],
        note: '어느 쪽이든 앱 자체는 무료입니다——GitHub에는 직접 감사하거나 빌드하고 싶은 독자를 위한 전체 소스 코드도 호스팅되어 있습니다.',
      },
      whatIsToolNeuron: {
        id: 'what-is-toolneuron',
        title: 'ToolNeuron이란',
        content: [
          '**ToolNeuron은 서버 측 구성 요소 없이 llama.cpp를 통해 GGUF 형식 언어 모델을 기기에서 직접 실행하는 안드로이드 앱입니다.** 프로젝트 자체 설명에 따르면 "안드로이드를 위한 온디바이스 AI. 구글 플레이 서비스 없음, 텔레메트리 없음, 클라우드 없음"을 지향하며, 모델·채팅·검색에 사용되는 문서·암호화 키 자료는 모두 휴대폰에 머물도록 설계되어 있습니다.',
          '단순 채팅을 넘어, 이 앱은 일반적인 파일 형식에 대한 문서 검색(RAG), sherpa-onnx 음성 엔진을 통한 음성 입출력, 다른 앱이 연결할 수 있는 OpenAI 호환 API를 노출하는 로컬 HTTP 서버, 내장된 Hugging Face 모델 브라우저, 추가 기능을 설치하기 위한 샌드박스화된 플러그인 시스템을 갖추고 있습니다.',
          '이 리뷰는 독립적인 코드 감사나 실기기 벤치마킹이 아니라, 프로젝트의 공개 GitHub 저장소——README, 라이선스 파일, 저장소 메타데이터——와 구글 플레이 등록 정보에 의존합니다.',
        ],
      },
      whoBuiltIt: {
        id: 'who-built-it',
        title: '누가 만들었는가',
        content: [
          '**ToolNeuron은 개발자 [Siddhesh Sonar](https://github.com/Siddhesh2377)가 만들고 관리하며, MIT 라이선스로 GitHub에 프로젝트를 공개적으로 게시합니다.** 이 저장소는 문서화된 보안 아키텍처, 앱·추론·암호화·네트워킹 구성 요소로 나뉜 모듈식 코드베이스, 사용자와 기여자를 위한 공개 Discord 커뮤니티 등 활발하고 세밀한 개발 상황을 보여줍니다.',
          '소스 코드가 비공개가 아니라 공개되어 있으므로, 앱이 로컬 데이터로 무엇을 하고 무엇을 하지 않는지에 대한 주장은 개발자의 설명에만 의존하지 않고 코드에서 직접 확인할 수 있습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**ToolNeuron 설정은 몇 단계면 충분하며 계정 생성이 필요 없습니다.** 설치부터 첫 오프라인 응답까지 전체 과정은 선택한 모델을 내려받는 시간을 제외하면 몇 분 정도 걸립니다.',
        ],
        numberedItems: [
          {
            title: '앱 설치하기',
            whyItMatters: '[구글 플레이에서 ToolNeuron을 받거나](https://play.google.com/store/apps/details?id=com.dark.tool_neuron), [GitHub Releases](https://github.com/Siddhesh2377/ToolNeuron/releases)에서 직접 APK를 내려받으세요. 앱 자체는 어느 쪽이든 무료입니다.',
          },
          {
            title: '로컬 암호화 설정하기',
            whyItMatters: '프로젝트의 보안 문서에 따르면, 앱은 최초 실행 시 Android Keystore 기반 암호화와 6자리 PIN을 설정한 뒤 채팅 데이터를 저장합니다.',
          },
          {
            title: 'GGUF 모델 탐색 및 다운로드하기',
            whyItMatters: '내장된 Hugging Face 브라우저를 사용해 호환되는 GGUF 모델을 찾거나, 직접 준비한 모델을 사용하세요. 이 단계는 인터넷 연결이 필요하지만, 이후 채팅에는 필요하지 않습니다.',
          },
          {
            title: '채팅하거나 RAG용 문서 추가하기',
            whyItMatters: '모델을 내려받고 나면 채팅은 llama.cpp를 통해 완전히 기기 내에서 실행됩니다. 대화에 지원되는 문서(PDF, DOCX 등)를 첨부하면 모델이 그 내용을 바탕으로 답변합니다.',
          },
          {
            title: '선택 사항:음성 또는 로컬 API 서버 활성화하기',
            whyItMatters: '음성 입출력과 OpenAI 호환 로컬 HTTP 서버는 모두 단순 채팅 위에 추가된 선택 기능으로, 앱을 사용하는 데 둘 다 필요하지 않습니다.',
          },
        ],
        note: '정확한 모델 호환성과 다운로드 크기는 선택한 GGUF 파일에 따라 다릅니다——데이터 요금제가 제한적이라면 다운로드 전에 해당 모델의 Hugging Face 페이지에서 크기와 라이선스를 확인하세요.',
      },
      modelsAndFeatures: {
        id: 'models-and-features',
        title: '지원 모델 및 기능',
        content: [
          '**ToolNeuron은 Llama, Mistral, Gemma 같은 일반적인 계열을 포함해 호환되는 모든 GGUF 형식 모델을 [llama.cpp](https://github.com/ggml-org/llama.cpp)를 통해 실행합니다.** 내장된 Hugging Face 브라우저를 통해 독자는 다운로드하기 전에 파이프라인 태그, 매개변수 수, 양자화, 라이선스로 사용 가능한 모델을 걸러볼 수 있습니다.',
          '채팅을 넘어, 프로젝트 자체 README에는 다음이 나열되어 있습니다: PDF, DOCX, XLSX, PPTX, ODT, EPUB, RTF, Markdown, HTML, JSON, XML, CSV, 일반 텍스트를 아우르는 문서 RAG; sherpa-onnx 엔진(VITS, Piper, Whisper 음성)을 통한 음성 입출력; 프로젝트 변경 이력에 따르면 2026년 5월에 앱에 추가된 로컬 이미지 생성; 자체 웹 UI를 갖춘 OpenAI 호환 API를 노출하는 로컬 HTTP 서버; 커뮤니티가 만든 확장 기능을 설치하기 위한 샌드박스화된 플러그인 시스템.',
          '이는 단일 목적 채팅 클라이언트보다 더 폭넓은 기능 집합이며, 프로젝트 문서에 따르면 각 기능은 클라우드 서비스를 호출하는 대신 동일한 온디바이스 엔진을 통해 작동합니다.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항',
        content: [
          '**ToolNeuron은 프로젝트의 공개 빌드 구성에 따르면 arm64-v8a 또는 x86_64 하드웨어에서 안드로이드 12(API 레벨 31) 이상이 필요합니다.** 다른 온디바이스 LLM 앱과 마찬가지로, 실질적인 하드웨어 최소 사양은 단일 고정 사양보다 어떤 GGUF 모델을 로드하는지——그 매개변수 수와 양자화——에 더 좌우됩니다. 작게 양자화된 모델은 큰 모델보다 훨씬 적은 메모리를 필요로 합니다.',
          '더 오래된 안드로이드 버전이나 32비트 전용 기기를 사용하는 독자는 앱이 설치되지 않을 것으로 예상해야 합니다. 최소 SDK와 ABI 필터가 단순한 권장 사항이 아니라 안드로이드 패키지 자체에 의해 강제되기 때문입니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호 및 보안',
        content: [
          '**프로젝트 자체 README에 따르면 ToolNeuron이 내세우는 설계 목표는 클라우드 의존을 완전히 피하는 것입니다: 구글 플레이 서비스 불필요, 텔레메트리 없음, 핵심 채팅과 RAG 기능에 서버 측 구성 요소 없음.** 이는 한 줄짜리 개인정보 보호 주장이 아니라, 이례적으로 상세하고 공개적으로 문서화된 보안 아키텍처로 뒷받침됩니다.',
          '프로젝트의 보안 문서에 따르면 암호화 키 자료 자체를 포함한 로컬 데이터는 Android Keystore 기반 AES-256-GCM 키(기기가 지원하면 StrongBox를 우선 사용)와 Argon2id 기반 PIN 인증으로 보호됩니다. 같은 문서는 PIN 입력 실패가 반복되면 단계적으로 강화되는 잠금 메커니즘과, 로컬 앱 데이터를 삭제하는 선택적 비상 PIN 기능도 설명합니다.',
        ],
        items: [
          '**계정 불필요.** 프로필을 만들거나 로그인하지 않고도 앱을 설치하고 사용할 수 있다.',
          '**핵심 기능에 클라우드 구성 요소 없음.** 프로젝트 README에 따르면 채팅, RAG, 음성 모두 기기 내에서 실행되도록 설계되어 있다.',
          '**암호화된 로컬 저장소.** 프로젝트 문서에 따르면 채팅, 문서, 암호화 키는 Android Keystore AES-256-GCM과 Argon2id 인증으로 보호된다.',
          '**오픈소스 코드.** 앱의 소스 코드가 MIT 라이선스로 공개되어 있으므로, 개발자의 진술에만 의존하지 않고 아키텍처와 데이터 처리에 관한 주장을 코드에서 직접 확인할 수 있다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장단점:이점 대 한계',
        columns: ['이점', '실제 사용에서 의미하는 것', '한계 / 유의점'],
        rows: [
          {
            '이점': '무료·오픈소스(MIT)',
            '실제 사용에서 의미하는 것': '비용이 들지 않으며, 전체 소스 코드를 GitHub에서 감사할 수 있다.',
            '한계 / 유의점': '오픈소스라는 사실 자체가 독립적인 보안 감사가 수행되었음을 보장하지는 않는다.',
          },
          {
            '이점': '단순 채팅보다 폭넓은 기능 집합',
            '실제 사용에서 의미하는 것': '문서 RAG, 음성, 로컬 API 서버, 플러그인이 모두 내장되어 있어 별도로 관리할 앱이 필요 없다.',
            '한계 / 유의점': '단일 목적 채팅 앱보다 움직이는 부분이 많으며, 이 리뷰는 각 기능의 신뢰성을 독립적으로 검증하지 않았다.',
          },
          {
            '이점': '상세하고 문서화된 보안 모델',
            '실제 사용에서 의미하는 것': '암호화된 로컬 저장소와 PIN 기반 인증은 휴대폰을 분실하거나 타인이 접근했을 때 데이터를 보호한다.',
            '한계 / 유의점': '보안 문서는 프로젝트 자체 자료이며, 이 리뷰는 앱에 대해 독립적인 침투 테스트를 수행하지 않았다.',
          },
          {
            '이점': '핵심 기능에 클라우드 의존 없음',
            '실제 사용에서 의미하는 것': '프로젝트 README에 따르면 모델을 내려받은 뒤에는 채팅, RAG, 음성 모두 오프라인으로 작동한다.',
            '한계 / 유의점': '안드로이드 전용——아이폰, 데스크톱, 웹 버전은 존재하지 않는다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'ToolNeuron 대 대안 앱',
        columns: ['앱', '플랫폼', '가격', '모델 유연성', '핵심 차이'],
        rows: [
          {
            '앱': 'ToolNeuron',
            '플랫폼': '안드로이드 전용',
            '가격': '무료, 오픈소스(MIT)',
            '모델 유연성': '내장된 Hugging Face 브라우저를 통한 모든 GGUF 모델',
            '핵심 차이': '여기서 가장 폭넓은 기능 집합——채팅에 더해 RAG, 음성, 로컬 API 서버, 플러그인',
          },
          {
            '앱': '[Layla](/ko/power-local-llm/layla-review)',
            '플랫폼': '안드로이드 및 iOS',
            '가격': '19.99달러 일회성 구매, 추가 인앱 등급',
            '모델 유연성': 'GGUF, LiteRT-LM, PTE 모델 백엔드',
            '핵심 차이': '페르소나와 롤플레이 중심, 선택적 옵트인 클라우드 모드 포함, 폐쇄형 소스',
          },
          {
            '앱': '[RikkaHub](/ko/power-local-llm/rikkahub-review)',
            '플랫폼': '안드로이드 전용',
            '가격': '무료, 오픈소스',
            '모델 유연성': '자체 등록 정보에 따르면 GGUF 모델',
            '핵심 차이': '또 다른 무료·오픈소스 안드로이드 선택지——기능 깊이를 직접 비교',
          },
          {
            '앱': '[Maid](/ko/power-local-llm/maid-review)',
            '플랫폼': '안드로이드 및 iOS',
            '가격': '무료, 오픈소스',
            '모델 유연성': 'llama.cpp를 통한 GGUF 모델',
            '핵심 차이': '크로스 플랫폼(iOS도 지원), 더 단순한 단일 목적 채팅 클라이언트',
          },
        ],
        note: '서드파티 앱의 플랫폼, 가격, 기능 세부 사항은 자주 바뀝니다——결정하기 전에 각 앱의 자체 등록 정보에서 최신 세부 사항을 확인하세요.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'ToolNeuron을 사용해야 할 사람',
        items: [
          '**무료·오픈소스 온디바이스 AI 앱을 원하는 안드로이드 사용자.** 전체 소스 코드가 공개되어 있으며, 설치나 사용에 비용이 들지 않는다.',
          '**단순 채팅 이상을 원하는 독자.** 문서 RAG, 음성 입출력, 로컬 API 서버가 별도 앱을 요구하지 않고 내장되어 있다.',
          '**문서화된 보안 모델을 중시하는 프라이버시 중시 사용자.** 암호화된 로컬 저장소와 PIN 기반 인증은 단순한 개인정보 보호 정책 문구를 넘어선다.',
          '**앱을 확장하고 싶은 개발자.** 플러그인 시스템과 오픈소스 코드베이스는 폐쇄형 소스 대안과 달리 직접적인 커스터마이징을 허용한다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ToolNeuron을 사용하지 말아야 할 사람',
        items: [
          '**아이폰, 데스크톱, 웹 사용자.** ToolNeuron은 안드로이드 전용이며, iOS, Mac, Windows, Linux, 브라우저 기반 버전은 존재하지 않는다.',
          '**안드로이드 11 이하 또는 32비트 전용 하드웨어 기기 소유자.** 이 앱은 arm64-v8a 또는 x86_64에서 안드로이드 12(API 31) 이상이 필요하다.',
          '**앱을 신뢰하기 전에 확립된 실적을 필요로 하는 독자.** ToolNeuron은 더 오래 자리 잡은 일부 대안보다 더 새롭고 공개된 실적도 더 적다.',
          '**다른 것 없이 단순한 채팅 앱 하나만 원하는 독자.** 더 폭넓은 기능 집합(RAG, 음성, 플러그인, 로컬 서버)은 일부 독자에게는 장점이지만 다른 독자에게는 불필요한 복잡함이다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'ToolNeuron은 무료인가요?',
            a: '네. ToolNeuron은 설치와 사용이 무료이며, GitHub 저장소에 따르면 MIT 라이선스로 오픈소스입니다.',
          },
          {
            q: 'ToolNeuron은 누가 개발하나요?',
            a: 'ToolNeuron은 개발자 [Siddhesh Sonar](https://github.com/Siddhesh2377)가 만들고 관리합니다.',
          },
          {
            q: 'ToolNeuron은 어떤 모델을 지원하나요?',
            a: 'Llama, Mistral, Gemma 같은 일반적인 계열을 포함해 호환되는 모든 GGUF 형식 모델이 [llama.cpp](https://github.com/ggml-org/llama.cpp)를 통해 실행됩니다. 내장된 Hugging Face 브라우저가 모델을 찾고 내려받는 데 도움을 줍니다.',
          },
          {
            q: 'ToolNeuron은 인터넷 연결 없이 작동하나요?',
            a: '핵심 기능에 한해서는 그렇습니다. 프로젝트 README는 앱에 클라우드 구성 요소도 텔레메트리도 없다고 명시하며, 인터넷 연결은 모델이나 앱 업데이트를 내려받을 때만 필요합니다.',
          },
          {
            q: 'ToolNeuron에는 어떤 안드로이드 버전이 필요한가요?',
            a: '프로젝트의 공개 빌드 구성에 따르면 arm64-v8a 또는 x86_64 하드웨어에서 안드로이드 12(API 레벨 31) 이상입니다.',
          },
          {
            q: 'ToolNeuron은 오픈소스인가요?',
            a: '네. 이 앱은 [GitHub](https://github.com/Siddhesh2377/ToolNeuron)에 MIT 라이선스로 공개되어 있으며, 소스 코드를 직접 감사하거나 빌드할 수 있습니다.',
          },
          {
            q: 'ToolNeuron에는 채팅 외에 어떤 추가 기능이 있나요?',
            a: '프로젝트 README에 따르면 일반적인 파일 형식에 대한 문서 RAG, sherpa-onnx를 통한 음성 입출력, 로컬 OpenAI 호환 HTTP 서버, Hugging Face 모델 브라우저, 샌드박스화된 플러그인 시스템입니다.',
          },
          {
            q: 'ToolNeuron은 Layla나 RikkaHub와 비교해 어떤가요?',
            a: 'ToolNeuron은 무료·오픈소스이며 더 폭넓은 내장 기능 집합(RAG, 음성, 로컬 API 서버, 플러그인)을 갖추고 있습니다. [Layla](/ko/power-local-llm/layla-review)는 안드로이드와 iOS용 19.99달러 유료·폐쇄형 소스 앱으로, 페르소나·롤플레이에 중점을 두고 선택적 클라우드 모드를 제공합니다. [RikkaHub](/ko/power-local-llm/rikkahub-review)는 또 다른 무료·오픈소스 안드로이드 채팅 앱입니다. ToolNeuron의 더 폭넓은 기능 집합, Layla의 크로스 플랫폼 롤플레이 중심, 또는 더 단순한 단일 목적 클라이언트 중 무엇을 더 중시하는지에 따라 선택하세요.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          'ToolNeuron은 안드로이드용으로 진정으로 폭넓고 무료이며 오픈소스인 온디바이스 AI 앱을 제공합니다: llama.cpp를 통한 GGUF 채팅, 문서 RAG, 음성 입출력, 로컬 OpenAI 호환 API 서버, 플러그인 시스템까지 모두 막연한 개인정보 보호 약속이 아니라 문서화된 암호화 중심 보안 아키텍처로 뒷받침됩니다.',
          '공개된 MIT 라이선스 소스 코드는 폐쇄형 소스 안드로이드 대안에 비해 의미 있는 이점입니다——앱이 로컬 데이터로 실제로 무엇을 하는지 확인하고 싶은 독자는 등록 정보만 믿는 대신 코드를 직접 확인할 수 있습니다.',
          '이 리뷰를 무조건적인 극찬이 아니라 신중한 평가로 유지하는 것은 앱의 상대적으로 짧은 역사와, PromptQuorum이 그 많은 기능에 대해 독립적이고 실기기 기반의 벤치마크를 직접 수행하지 않았다는 점입니다. 성능이 중요한 독자는 크게 의존하기 전에 자신의 기기에서 직접 앱을 테스트해야 합니다.',
          '단순 채팅 이상을 갖춘 무료·오픈소스·프라이버시 중심 앱을 원하는 안드로이드 사용자라면 시도해 볼 만합니다. 아이폰 앱, 더 단순한 단일 목적 클라이언트, 또는 더 확립된 실적을 원하는 독자는 대신 [Layla](/ko/power-local-llm/layla-review)나 [RikkaHub](/ko/power-local-llm/rikkahub-review)를 고려해야 합니다.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[구글 플레이의 ToolNeuron](https://play.google.com/store/apps/details?id=com.dark.tool_neuron)——가격 및 배포.',
          '[ToolNeuron GitHub 저장소](https://github.com/Siddhesh2377/ToolNeuron)——README, 라이선스, 보안 문서, 저장소 메타데이터, 2026년 9월 12일 확인.',
          '[ToolNeuron 프로젝트 사이트](https://tool-neuron.vercel.app/)——제품 개요.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Layla 리뷰](/ko/power-local-llm/layla-review)——선택적 클라우드 모드를 갖춘 유료·크로스 플랫폼 온디바이스 동반 앱.',
          '[RikkaHub 리뷰](/ko/power-local-llm/rikkahub-review)——또 다른 무료·오픈소스 안드로이드 로컬 AI 채팅 앱.',
          '[Maid 리뷰](/ko/power-local-llm/maid-review)——무료·오픈소스이며 크로스 플랫폼(안드로이드 및 iOS)인 채팅 클라이언트.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review)——iOS를 지원하고 안드로이드도 일부 지원하는 무료·오픈소스 로컬 AI 앱.',
          '[전체 로컬 LLM 소프트웨어 디렉터리](/ko/power-local-llm/local-llm-software-directory)——플랫폼 전반의 로컬 LLM 도구를 아우르는 더 폭넓은 디렉터리.',
        ],
      },
    },
  },
}
