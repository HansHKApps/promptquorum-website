// Power Local LLM — Jarvis (Mac) Review: Offline Voice AI for macOS
// Slug: jarvis-mac-review-2026
// Category: Voice, Speech & Multimodal
// Companion to: loci-ai-review-offline-local-ai, build-local-voice-assistant-2026

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/jarvis-mac-review-2026-hero-en.webp',
    title: 'Jarvis (Mac) Review 2026: Offline Voice AI for macOS',
    seoTitle: 'Jarvis for Mac Review 2026: Offline Voice AI App',
    intro:
      'Jarvis (Mac) — not to be confused with the fictional Marvel AI, Amazon Alexa, Apple Intelligence, or any other product also named "Jarvis" — is a macOS app built by an independent developer on the Lovable app-builder platform (hosted at jarvis-mac.lovable.app). It runs a full voice-assistant pipeline on-device: Whisper for speech recognition, a local Llama 3.2 3B language model for reasoning, and Kokoro for text-to-speech, all processed via Apple\'s Metal GPU. The developer\'s stated positioning is "Fully offline. Fully yours" — once installed, voice commands are handled without sending audio or text to a server, and without requiring an API key.',
    metaDescription:
      'Jarvis (Mac) review: an indie macOS app running Whisper STT, local Llama 3.2 3B, and Kokoro TTS on Apple Metal. Requirements and who it fits.',
    twitterDescription:
      'Jarvis (Mac) review 2026: offline voice AI for macOS built on Llama 3.2 3B, Whisper, and Kokoro TTS via Apple Metal. Indie Lovable-built app — what to expect, requirements, and trade-offs.',
    audience:
      'macOS users evaluating an indie, on-device voice assistant for private voice control of their Mac — deciding whether a Lovable-built app with a fixed Llama 3.2 3B/Whisper/Kokoro stack fits their needs versus building a custom pipeline or using a larger cross-platform app.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Jarvis Mac review',
    targetKeywords: [
      'jarvis mac review',
      'jarvis for mac',
      'offline voice assistant mac',
      'llama 3.2 3b mac metal',
      'whisper kokoro tts mac',
      'private voice ai macos',
      'jarvis ai voice assistant mac',
      'offline ai app macos',
    ],
    current_models_mentioned: ['Llama 3.2 3B', 'Whisper', 'Kokoro'],
    current_hardware_mentioned: ['Apple Silicon Mac', 'macOS 13'],
    leadAnswerBlock:
      '**Jarvis (Mac) is an indie macOS app, built with the Lovable app-builder platform, that runs an entire voice pipeline on-device: Whisper for speech-to-text, a local Llama 3.2 3B model for reasoning, and Kokoro for text-to-speech, all processed through Apple\'s Metal GPU.** The developer positions it as "Fully offline. Fully yours" — after the initial app and model setup, voice commands do not require an internet connection or an API key. It runs on macOS 13 or later, with Apple Silicon recommended for running Llama 3.2 3B locally. Because it is a single-developer project hosted on the Lovable platform rather than a product from a funded company, expect a smaller support surface than commercial voice-AI vendors and verify current details on the official site before relying on it for anything critical.',
    quickAnswerTop: {
      en: {
        question: 'Should I use Jarvis (Mac) for offline voice control of my Mac?',
        answer:
          'Use Jarvis (Mac) if you want to try a straightforward, no-configuration offline voice assistant on macOS built on a fixed Llama 3.2 3B + Whisper + Kokoro stack. Skip it if you need a documented enterprise support channel, want to choose your own model or quantization, or need it to run on Windows or Linux — it is macOS-only and built by an independent developer, not a funded vendor.',
        bullets: [
          'Runs Llama 3.2 3B locally on Apple Metal GPU for reasoning.',
          'Whisper handles speech-to-text; Kokoro handles text-to-speech — both run on-device.',
          'Positioned as fully offline after setup: no internet or API key required to issue voice commands.',
          'Requires macOS 13 or later; Apple Silicon is recommended for local inference.',
          'Built and hosted on the Lovable app-builder platform by an independent developer, not a large commercial vendor — pricing, company details, and support channels are not independently verified here.',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Jarvis (Mac) Is', anchor: 'what-is-jarvis-mac' },
      { label: 'How Jarvis (Mac) Works', anchor: 'how-jarvis-works' },
      { label: 'It Is an Indie, Lovable-Built Project', anchor: 'indie-project-note' },
      { label: 'Platform and Requirements', anchor: 'platform-requirements' },
      { label: 'Who Should Use Jarvis (Mac)', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Jarvis (Mac)', anchor: 'who-should-not-use' },
      { label: 'Jarvis (Mac) vs. Alternatives', anchor: 'vs-alternatives' },
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
        items: [
          'Jarvis (Mac) is a macOS voice-assistant app that runs Whisper (speech-to-text), Llama 3.2 3B (reasoning), and Kokoro (text-to-speech) on-device via Apple\'s Metal GPU.',
          'The developer\'s positioning is "Fully offline. Fully yours" — after setup, voice commands do not require an internet connection or an API key.',
          'Requires macOS 13 or later; Apple Silicon is recommended for running Llama 3.2 3B locally.',
          'It is built and hosted on the Lovable app-builder platform (jarvis-mac.lovable.app) by an independent developer, not a large commercial vendor — treat pricing, company identity, and support commitments as unverified until checked on the official site.',
          'Not to be confused with the fictional Marvel AI J.A.R.V.I.S., Amazon Alexa, Apple Intelligence, or any other unrelated product also branded "Jarvis."',
          'This review covers the app\'s stated architecture and positioning, not independently measured benchmarks, ratings, or download counts — none of those are publicly verifiable for this app at the time of writing.',
        ],
      },
      whatIsJarvisMac: {
        id: 'what-is-jarvis-mac',
        title: 'What Jarvis (Mac) Is',
        content: [
          '**Jarvis (Mac) is a macOS application, available at [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/), that positions itself as a fully offline AI voice assistant.** It is built and hosted on the Lovable app-builder platform, a tool independent developers use to build and ship web and app projects — this is not a product from a large, funded AI company.',
          'The name "Jarvis" is used by many unrelated products and fictional characters, including Marvel\'s fictional AI J.A.R.V.I.S., business software with the same name, and various unrelated apps. This review covers only the macOS app at jarvis-mac.lovable.app. It has no confirmed affiliation with Marvel, Apple, Amazon, or any other company or product using the "Jarvis" name.',
          'The developer\'s marketing line for the app is "Fully offline. Fully yours" — the stated intent is that speech processing happens locally on the Mac, without routing audio or text through a cloud server, and that the app lets you control your Mac by voice entirely on-device once it is set up.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Jarvis (Mac) is an indie, Lovable-built macOS app that pairs Whisper speech-to-text with a local Llama 3.2 3B model and Kokoro text-to-speech, running entirely on Apple Metal GPU hardware.',
          },
          {
            type: 'plain-terms',
            text: 'Jarvis (Mac) lets you talk to your Mac and hear a spoken response without your voice or text leaving the machine — everything runs locally once the app and model are installed.',
          },
        ],
      },
      howJarvisWorks: {
        id: 'how-jarvis-works',
        title: 'How Jarvis (Mac) Works',
        content: [
          '**Jarvis (Mac) combines three on-device components into one voice pipeline.** Each piece handles a different stage of a voice interaction — listening, thinking, and speaking — and all three run locally on the Mac rather than calling out to a cloud API.',
        ],
        items: [
          '**Whisper (speech-to-text)** — converts spoken audio into text on-device. Whisper is an established open speech-recognition model; Jarvis uses it as the listening layer of the pipeline.',
          '**Llama 3.2 3B (reasoning, via Apple Metal GPU)** — a 3-billion-parameter local language model handles understanding the transcribed request and generating a response. It runs on the Mac\'s GPU through Apple\'s Metal framework rather than on a remote server, which is what makes voice commands work without an internet connection after setup.',
          '**Kokoro (text-to-speech)** — converts the model\'s text response back into spoken audio on-device, completing the voice loop without a cloud TTS service.',
          '**Voice control of the Mac** — the app\'s stated purpose is to let a user issue voice commands to control their Mac using this local pipeline, without needing to keep API keys for a cloud AI provider or maintain an internet connection for the core voice interaction once everything is installed.',
        ],
        note: 'This section describes the architecture and positioning as stated by the developer. PromptQuorum has not independently benchmarked Jarvis (Mac)\'s latency, transcription accuracy, or voice-command reliability — verify current behavior on your own hardware before relying on it.',
      },
      indieProjectNote: {
        id: 'indie-project-note',
        title: 'It Is an Indie, Lovable-Built Project',
        content: [
          '**Jarvis (Mac) is hosted at a Lovable subdomain (jarvis-mac.lovable.app), which signals it was built using the Lovable app-builder platform rather than by an in-house engineering team at a funded software company.** This matters for what you should expect from it.',
        ],
        items: [
          '**Set expectations for support.** An indie, single-developer (or small-team) project built on an app-builder platform typically has a smaller support surface than a commercial vendor — there may be no dedicated support team, published SLA, or enterprise contact.',
          '**Verify claims independently before relying on the app for sensitive use.** No company name, funding, or team size is publicly confirmed for this project as of this review; treat privacy and data-handling claims as developer statements to verify on the official site rather than as independently audited facts.',
          '**Expect the app and its documentation to evolve.** Indie apps built on platforms like Lovable can change quickly, including URL, pricing, and feature set — check [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/) directly for the current state before installing.',
        ],
      },
      platformRequirements: {
        id: 'platform-requirements',
        title: 'Platform and Requirements',
        itemHeadings: true,
        columns: ['Requirement', 'What it means for you'],
        rows: [
          {
            'Requirement': 'macOS 13 or later',
            'What it means for you': 'Jarvis (Mac) requires macOS 13 (Ventura) or a newer macOS version. Confirm your current macOS version in About This Mac before installing, since older macOS releases are not supported.',
          },
          {
            'Requirement': 'Apple Silicon recommended',
            'What it means for you': 'The developer recommends Apple Silicon (M-series chip) for running Jarvis (Mac). Local inference of Llama 3.2 3B is compute-intensive, and Apple\'s Metal GPU framework — used to run the model on-device — is optimized for Apple Silicon rather than older Intel-based Macs.',
          },
          {
            'Requirement': 'On-device model storage',
            'What it means for you': 'Because Llama 3.2 3B, Whisper, and Kokoro all run locally, the app needs local disk space to store the model files. Exact storage and RAM requirements are not published by the developer at the time of writing — check the official site for current specifications before installing.',
          },
          {
            'Requirement': 'Internet for initial setup only (per developer claim)',
            'What it means for you': 'The "Fully offline. Fully yours" positioning applies to voice commands after setup. Downloading the app and the model files for the first time requires an internet connection, consistent with how most local-AI apps handle first-run setup.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Jarvis (Mac)',
        items: [
          '**Mac users curious about voice control without a cloud subscription.** If you want to try controlling your Mac by voice using a local model rather than a cloud assistant, Jarvis (Mac) is built specifically for that on macOS.',
          '**Privacy-conscious users who want speech processed locally.** Because Whisper, Llama 3.2 3B, and Kokoro all run on-device per the developer\'s positioning, voice interactions are not routed through a third-party AI API for the core pipeline.',
          '**Users comfortable trying software from an independent developer.** If you are fine evaluating a smaller, Lovable-built project rather than a commercial product with a dedicated support team, Jarvis (Mac) is a reasonable app to test.',
          '**Apple Silicon Mac owners.** Since Apple Silicon is recommended for running Llama 3.2 3B locally via Metal, users with an M-series Mac are best positioned to get a smooth experience.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Jarvis (Mac)',
        items: [
          '**Users who need Windows or Linux support.** Jarvis (Mac) is macOS-only. Users on other operating systems should look at cross-platform local-AI apps such as [Loci](/power-local-llm/loci-ai-review-offline-local-ai) or build a custom pipeline.',
          '**Users who need frontier reasoning quality.** Llama 3.2 3B is a compact, 3-billion-parameter model. It faces the same parameter-count ceiling as other small local models and is not a substitute for larger cloud models on complex, multi-step reasoning tasks.',
          '**Users who need enterprise support commitments.** Because Jarvis (Mac) is an indie project built on the Lovable platform, it does not carry the documented support SLAs, published company details, or account-management structure that a funded commercial vendor would offer.',
          '**Users who want to choose their own model or fine-tune the pipeline.** Jarvis (Mac) ships with a fixed stack — Whisper, Llama 3.2 3B, and Kokoro. Users who want to swap models, choose quantization formats, or customize the STT/TTS layers should instead build a custom pipeline; see [Build a Fully Offline Voice Assistant](/power-local-llm/build-local-voice-assistant-2026) for a from-scratch guide.',
          '**Users who need vendor-verified privacy or security guarantees for sensitive work.** Before using any indie app for confidential or regulated data, verify the current privacy policy directly on the developer\'s site — this review reports the developer\'s stated positioning, not an independent privacy audit.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Jarvis (Mac) vs. Alternatives',
        itemHeadings: true,
        columns: ['Option', 'Best for', 'Platform', 'Key difference'],
        rows: [
          {
            'Option': 'Jarvis (Mac)',
            'Best for': 'Trying a ready-made offline voice assistant on macOS',
            'Platform': 'macOS 13+ only',
            'Key difference': 'Fixed stack (Whisper + Llama 3.2 3B + Kokoro); indie, Lovable-built project',
          },
          {
            'Option': 'Loci',
            'Best for': 'Cross-platform private on-device chat',
            'Platform': 'iPhone/iPad/Android/Mac/Windows',
            'Key difference': 'Broader curated model library; not primarily voice-command focused. See the [Loci AI review](/power-local-llm/loci-ai-review-offline-local-ai).',
          },
          {
            'Option': 'Custom voice pipeline',
            'Best for': 'Users who want full control over models and code',
            'Platform': 'Any OS you build it for',
            'Key difference': 'You choose the STT/LLM/TTS components and can swap them; more setup effort. See [Build a Fully Offline Voice Assistant](/power-local-llm/build-local-voice-assistant-2026).',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Jarvis (Mac) related to Marvel\'s J.A.R.V.I.S., Apple, or Amazon Alexa?',
            a: 'No. Jarvis (Mac) is an independent macOS app hosted at jarvis-mac.lovable.app. It has no confirmed affiliation with Marvel\'s fictional AI character J.A.R.V.I.S., Apple, Amazon Alexa, or any other product that also uses the name "Jarvis." The name is shared by many unrelated products.',
          },
          {
            q: 'What models does Jarvis (Mac) use?',
            a: 'Jarvis (Mac) uses Whisper for speech-to-text, Llama 3.2 3B (a 3-billion-parameter language model) for reasoning, and Kokoro for text-to-speech. All three run locally on the Mac via Apple\'s Metal GPU framework, per the developer\'s stated architecture.',
          },
          {
            q: 'Does Jarvis (Mac) work without an internet connection?',
            a: 'The developer\'s positioning — "Fully offline. Fully yours" — states that voice commands work on-device without an internet connection once the app and models are installed. Initial download and setup requires internet, consistent with most local-AI apps.',
          },
          {
            q: 'Do I need an API key to use Jarvis (Mac)?',
            a: 'No, according to the developer\'s stated design. Because inference runs locally via Llama 3.2 3B on Apple Metal, Jarvis (Mac) is positioned as not requiring an API key or account with a cloud AI provider for its core voice functions.',
          },
          {
            q: 'What Mac do I need to run Jarvis (Mac)?',
            a: 'Jarvis (Mac) requires macOS 13 or later. Apple Silicon (an M-series chip) is recommended, since local inference of Llama 3.2 3B via Apple\'s Metal GPU framework is compute-intensive and is optimized for Apple Silicon rather than older Intel Macs.',
          },
          {
            q: 'Who makes Jarvis (Mac)?',
            a: 'Jarvis (Mac) is built and hosted on the Lovable app-builder platform, which independent developers use to build and ship apps. No company name, funding status, or team size is publicly confirmed for this project — it should be evaluated as an indie project rather than a product from a large commercial vendor.',
          },
          {
            q: 'How much does Jarvis (Mac) cost?',
            a: 'Pricing is not independently verified for this review. Check the current pricing directly on [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/) before installing, since indie apps built on platforms like Lovable can change pricing without notice.',
          },
          {
            q: 'Can Jarvis (Mac) replace Siri or a cloud voice assistant?',
            a: 'For voice commands handled entirely by its local Llama 3.2 3B model, Jarvis (Mac) is positioned as an offline alternative to cloud-based voice assistants. It faces the same reasoning ceiling as other 3-billion-parameter local models, so it is not positioned as a replacement for tasks that require frontier-level reasoning or live web knowledge.',
          },
          {
            q: 'How is Jarvis (Mac) different from Loci or a custom voice-assistant build?',
            a: 'Jarvis (Mac) is macOS-only with a fixed model stack (Whisper, Llama 3.2 3B, Kokoro) and minimal setup. [Loci](/power-local-llm/loci-ai-review-offline-local-ai) covers five platforms with a broader model library but is not primarily voice-command focused. A [custom voice pipeline](/power-local-llm/build-local-voice-assistant-2026) gives full control over which models to use, at the cost of manual setup.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Jarvis (Mac) is worth trying if you specifically want a macOS app that lets you control your Mac by voice using a local Whisper + Llama 3.2 3B + Kokoro pipeline, without keeping cloud API keys or an internet connection for the core interaction. Its main strengths, per the developer\'s stated design, are a fixed, no-configuration local voice stack and Apple Metal GPU acceleration on Apple Silicon. Its main limitations are the same ones any 3-billion-parameter local model faces — a lower reasoning ceiling than frontier cloud models — plus the practical reality that it is a single-developer or small-team project built on the Lovable app-builder platform, not a funded commercial vendor, so pricing, support, and long-term maintenance commitments should be verified directly on [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/) rather than assumed. Users who want cross-platform support or deeper model control should compare it with [Loci](/power-local-llm/loci-ai-review-offline-local-ai) or a [custom voice pipeline](/power-local-llm/build-local-voice-assistant-2026).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Jarvis (Mac) official site](https://jarvis-mac.lovable.app/) — product positioning, "Fully offline. Fully yours" marketing line, current app details.',
          '[Lovable](https://lovable.dev) — the app-builder platform Jarvis (Mac) is built and hosted on.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Loci AI Review: Offline AI for iPhone, Android, iPad, Mac and Windows](/power-local-llm/loci-ai-review-offline-local-ai) — a cross-platform on-device AI app comparison.',
          '[Build a Fully Offline Voice Assistant in 2026: Whisper + LLM + Piper](/power-local-llm/build-local-voice-assistant-2026) — a from-scratch guide for readers who want to choose their own STT/LLM/TTS stack.',
          '[Local Whisper STT Comparison 2026](/power-local-llm/local-whisper-stt-comparison-2026) — a closer look at the speech-to-text layer used in pipelines like this one.',
          '[Local TTS and Voice Cloning 2026: Piper vs Coqui vs XTTS v2](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — comparison of text-to-speech options beyond Kokoro.',
          '[Apple Silicon Local LLM Guide 2026](/local-llms/apple-silicon-local-llm-guide-2026) — background on running local models via Apple\'s Metal GPU framework.',
          '[Ollama on Mac (Apple Silicon) Setup 2026](/local-llms/ollama-on-mac-apple-silicon-setup-2026) — for readers who want to run local models on a Mac outside of a packaged app like Jarvis.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/jarvis-mac-review-2026-hero-de.webp',
    title: 'Jarvis (Mac) Review 2026: Offline-Sprach-KI für macOS',
    seoTitle: 'Jarvis für Mac Review 2026: Offline-Sprach-KI',
    intro:
      'Jarvis (Mac) — nicht zu verwechseln mit der fiktiven Marvel-KI, Amazon Alexa, Apple Intelligence oder anderen Produkten, die ebenfalls „Jarvis" heißen — ist eine macOS-App eines unabhängigen Entwicklers auf der App-Builder-Plattform Lovable (gehostet unter jarvis-mac.lovable.app). Sie führt eine vollständige Sprachassistenten-Pipeline lokal auf dem Gerät aus: Whisper für die Spracherkennung, ein lokales Llama-3.2-3B-Sprachmodell für das Reasoning und Kokoro für die Sprachausgabe — alles verarbeitet über Apples Metal-GPU. Die Positionierung des Entwicklers lautet „Fully offline. Fully yours" — nach der Installation werden Sprachbefehle verarbeitet, ohne Audio oder Text an einen Server zu senden, und ohne dass ein API-Key erforderlich ist.',
    metaDescription:
      'Jarvis (Mac) Review: eine unabhängige macOS-App mit Whisper-STT, lokalem Llama 3.2 3B und Kokoro-TTS auf Apple Metal. Anforderungen und Eignung im Überblick.',
    twitterDescription:
      'Jarvis (Mac) Review 2026: Offline-Sprach-KI für macOS auf Basis von Llama 3.2 3B, Whisper und Kokoro TTS über Apple Metal. Unabhängiges, mit Lovable gebautes Projekt — Erwartungen, Anforderungen und Kompromisse.',
    audience:
      'macOS-Nutzer, die einen unabhängigen, lokalen Sprachassistenten für die private Sprachsteuerung ihres Macs evaluieren — und entscheiden möchten, ob eine mit Lovable gebaute App mit fest verdrahtetem Llama-3.2-3B/Whisper/Kokoro-Stack zu ihnen passt oder ob eine eigene Pipeline bzw. eine größere plattformübergreifende App besser geeignet ist.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Jarvis Mac review',
    targetKeywords: [
      'jarvis mac review',
      'jarvis für mac',
      'offline sprachassistent mac',
      'llama 3.2 3b mac metal',
      'whisper kokoro tts mac',
      'private sprach-ki macos',
      'jarvis ki sprachassistent mac',
      'offline ki app macos',
    ],
    current_models_mentioned: ['Llama 3.2 3B', 'Whisper', 'Kokoro'],
    current_hardware_mentioned: ['Apple Silicon Mac', 'macOS 13'],
    leadAnswerBlock:
      '**Jarvis (Mac) ist eine von einem unabhängigen Entwickler mit der App-Builder-Plattform Lovable gebaute macOS-App, die eine komplette Sprach-Pipeline lokal ausführt: Whisper für Speech-to-Text, ein lokales Llama-3.2-3B-Modell für das Reasoning und Kokoro für Text-to-Speech — alles verarbeitet über Apples Metal-GPU.** Der Entwickler positioniert die App als „Fully offline. Fully yours" — nach der einmaligen Einrichtung von App und Modell benötigen Sprachbefehle weder eine Internetverbindung noch einen API-Key. Sie läuft ab macOS 13, wobei Apple Silicon für die lokale Ausführung von Llama 3.2 3B empfohlen wird. Da es sich um ein Einzelentwickler-Projekt auf der Lovable-Plattform handelt und nicht um ein Produkt eines finanzierten Unternehmens, sollten Sie einen kleineren Support-Umfang als bei kommerziellen Sprach-KI-Anbietern erwarten und aktuelle Details vor jeder kritischen Nutzung auf der offiziellen Website prüfen.',
    quickAnswerTop: {
      de: {
        question: 'Sollte ich Jarvis (Mac) für die Offline-Sprachsteuerung meines Macs nutzen?',
        answer:
          'Nutzen Sie Jarvis (Mac), wenn Sie einen unkomplizierten, konfigurationsfreien Offline-Sprachassistenten für macOS auf Basis eines festen Llama-3.2-3B- + Whisper- + Kokoro-Stacks ausprobieren möchten. Verzichten Sie darauf, wenn Sie einen dokumentierten Enterprise-Support-Kanal benötigen, Ihr eigenes Modell oder eine eigene Quantisierung wählen möchten, oder Windows/Linux-Unterstützung benötigen — die App läuft nur auf macOS und wird von einem unabhängigen Entwickler gebaut, nicht von einem finanzierten Anbieter.',
        bullets: [
          'Führt Llama 3.2 3B lokal auf Apples Metal-GPU für das Reasoning aus.',
          'Whisper übernimmt Speech-to-Text, Kokoro übernimmt Text-to-Speech — beide laufen lokal.',
          'Positioniert als vollständig offline nach der Einrichtung: kein Internet oder API-Key für Sprachbefehle erforderlich.',
          'Erfordert macOS 13 oder neuer; Apple Silicon wird für die lokale Inferenz empfohlen.',
          'Gebaut und gehostet auf der App-Builder-Plattform Lovable von einem unabhängigen Entwickler, nicht von einem großen kommerziellen Anbieter — Preise, Unternehmensdetails und Support-Kanäle sind hier nicht unabhängig verifiziert.',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: 'Schnelle Antwort', anchor: 'quick-answer' },
      { label: 'Was Jarvis (Mac) ist', anchor: 'what-is-jarvis-mac' },
      { label: 'Wie Jarvis (Mac) funktioniert', anchor: 'how-jarvis-works' },
      { label: 'Ein unabhängiges, mit Lovable gebautes Projekt', anchor: 'indie-project-note' },
      { label: 'Plattform und Voraussetzungen', anchor: 'platform-requirements' },
      { label: 'Für wen sich Jarvis (Mac) eignet', anchor: 'who-should-use' },
      { label: 'Für wen sich Jarvis (Mac) nicht eignet', anchor: 'who-should-not-use' },
      { label: 'Jarvis (Mac) im Vergleich', anchor: 'vs-alternatives' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Ressourcen', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Zusammenfassung',
        isTldr: true,
        items: [
          'Jarvis (Mac) ist eine macOS-Sprachassistenten-App, die Whisper (Speech-to-Text), Llama 3.2 3B (Reasoning) und Kokoro (Text-to-Speech) lokal über Apples Metal-GPU ausführt.',
          'Die Positionierung des Entwicklers lautet „Fully offline. Fully yours" — nach der Einrichtung benötigen Sprachbefehle weder Internetverbindung noch API-Key.',
          'Erfordert macOS 13 oder neuer; Apple Silicon wird für die lokale Ausführung von Llama 3.2 3B empfohlen.',
          'Gebaut und gehostet auf der App-Builder-Plattform Lovable (jarvis-mac.lovable.app) von einem unabhängigen Entwickler, nicht von einem großen kommerziellen Anbieter — Preise, Unternehmensidentität und Support-Zusagen gelten als unverifiziert, bis sie auf der offiziellen Website geprüft wurden.',
          'Nicht zu verwechseln mit der fiktiven Marvel-KI J.A.R.V.I.S., Amazon Alexa, Apple Intelligence oder anderen unabhängigen Produkten, die ebenfalls unter dem Namen „Jarvis" laufen.',
          'Diese Review behandelt die vom Entwickler angegebene Architektur und Positionierung, nicht unabhängig gemessene Benchmarks, Bewertungen oder Download-Zahlen — keine dieser Angaben ist zum Zeitpunkt der Erstellung öffentlich verifizierbar.',
        ],
      },
      whatIsJarvisMac: {
        id: 'what-is-jarvis-mac',
        title: 'Was Jarvis (Mac) ist',
        content: [
          '**Jarvis (Mac) ist eine macOS-Anwendung, verfügbar unter [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/), die sich als vollständig offline arbeitende KI-Sprachassistentin positioniert.** Sie wird auf der App-Builder-Plattform Lovable gebaut und gehostet, einem Tool, das unabhängige Entwickler nutzen, um Web- und App-Projekte zu erstellen und zu veröffentlichen — dies ist kein Produkt eines großen, finanzierten KI-Unternehmens.',
          'Der Name „Jarvis" wird von vielen nicht verwandten Produkten und fiktiven Figuren verwendet, darunter Marvels fiktive KI J.A.R.V.I.S., Business-Software mit demselben Namen und diverse unabhängige Apps. Diese Review behandelt ausschließlich die macOS-App unter jarvis-mac.lovable.app. Es besteht keine bestätigte Verbindung zu Marvel, Apple, Amazon oder anderen Unternehmen bzw. Produkten mit dem Namen „Jarvis".',
          'Die Marketing-Zeile des Entwicklers für die App lautet „Fully offline. Fully yours" — die erklärte Absicht ist, dass die Sprachverarbeitung lokal auf dem Mac erfolgt, ohne Audio oder Text über einen Cloud-Server zu leiten, und dass die App eine vollständig lokale Sprachsteuerung des Macs nach der Einrichtung ermöglicht.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Jarvis (Mac) ist eine unabhängige, mit Lovable gebaute macOS-App, die Whisper-Speech-to-Text mit einem lokalen Llama-3.2-3B-Modell und Kokoro-Text-to-Speech kombiniert und vollständig auf Apples Metal-GPU läuft.',
          },
          {
            type: 'plain-terms',
            text: 'Jarvis (Mac) ermöglicht es Ihnen, mit Ihrem Mac zu sprechen und eine gesprochene Antwort zu erhalten, ohne dass Ihre Stimme oder Ihr Text das Gerät verlassen — nach der Installation von App und Modell läuft alles lokal.',
          },
        ],
      },
      howJarvisWorks: {
        id: 'how-jarvis-works',
        title: 'Wie Jarvis (Mac) funktioniert',
        content: [
          '**Jarvis (Mac) kombiniert drei lokale Komponenten zu einer Sprach-Pipeline.** Jede Komponente übernimmt eine andere Phase einer Sprachinteraktion — Zuhören, Denken und Sprechen —, und alle drei laufen lokal auf dem Mac, statt eine Cloud-API aufzurufen.',
        ],
        items: [
          '**Whisper (Speech-to-Text)** — wandelt gesprochenes Audio lokal in Text um. Whisper ist ein etabliertes Open-Source-Spracherkennungsmodell; Jarvis nutzt es als Hörschicht der Pipeline.',
          '**Llama 3.2 3B (Reasoning, über Apple Metal-GPU)** — ein lokales Sprachmodell mit 3 Milliarden Parametern übernimmt das Verständnis der transkribierten Anfrage und die Antwortgenerierung. Es läuft über Apples Metal-Framework auf der GPU des Macs statt auf einem entfernten Server — das ermöglicht es, dass Sprachbefehle nach der Einrichtung ohne Internetverbindung funktionieren.',
          '**Kokoro (Text-to-Speech)** — wandelt die Textantwort des Modells lokal zurück in gesprochenes Audio und schließt die Sprachschleife ohne einen Cloud-TTS-Dienst.',
          '**Sprachsteuerung des Macs** — der angegebene Zweck der App ist es, Nutzern zu ermöglichen, ihren Mac über diese lokale Pipeline per Sprachbefehl zu steuern, ohne API-Keys für einen Cloud-KI-Anbieter zu verwalten oder eine Internetverbindung für die zentrale Sprachinteraktion aufrechtzuerhalten, sobald alles installiert ist.',
        ],
        note: 'Dieser Abschnitt beschreibt die vom Entwickler angegebene Architektur und Positionierung. PromptQuorum hat Latenz, Transkriptionsgenauigkeit oder Zuverlässigkeit der Sprachbefehle von Jarvis (Mac) nicht unabhängig gemessen — prüfen Sie das aktuelle Verhalten auf Ihrer eigenen Hardware, bevor Sie sich darauf verlassen.',
      },
      indieProjectNote: {
        id: 'indie-project-note',
        title: 'Ein unabhängiges, mit Lovable gebautes Projekt',
        content: [
          '**Jarvis (Mac) wird unter einer Lovable-Subdomain (jarvis-mac.lovable.app) gehostet, was darauf hindeutet, dass die App mit der App-Builder-Plattform Lovable gebaut wurde und nicht von einem internen Entwicklerteam eines finanzierten Softwareunternehmens.** Das ist relevant für Ihre Erwartungen.',
        ],
        items: [
          '**Erwartungen an den Support anpassen.** Ein unabhängiges Ein-Personen- oder Kleinteam-Projekt auf einer App-Builder-Plattform hat typischerweise einen kleineren Support-Umfang als ein kommerzieller Anbieter — es gibt möglicherweise kein dediziertes Support-Team, keine veröffentlichte SLA und keinen Enterprise-Kontakt.',
          '**Angaben unabhängig prüfen, bevor Sie die App für sensible Zwecke nutzen.** Zum Zeitpunkt dieser Review sind weder Firmenname noch Finanzierung noch Teamgröße für dieses Projekt öffentlich bestätigt; behandeln Sie Datenschutz- und Datenverarbeitungsangaben als zu prüfende Entwicklerangaben, nicht als unabhängig geprüfte Fakten.',
          '**Mit Weiterentwicklung von App und Dokumentation rechnen.** Unabhängige Apps auf Plattformen wie Lovable können sich schnell ändern, einschließlich URL, Preisgestaltung und Funktionsumfang — prüfen Sie [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/) direkt auf den aktuellen Stand, bevor Sie installieren.',
        ],
      },
      platformRequirements: {
        id: 'platform-requirements',
        title: 'Plattform und Voraussetzungen',
        itemHeadings: true,
        columns: ['Voraussetzung', 'Was das für Sie bedeutet'],
        rows: [
          {
            'Voraussetzung': 'macOS 13 oder neuer',
            'Was das für Sie bedeutet': 'Jarvis (Mac) erfordert macOS 13 (Ventura) oder eine neuere Version. Prüfen Sie Ihre aktuelle macOS-Version unter „Über diesen Mac", bevor Sie installieren, da ältere macOS-Versionen nicht unterstützt werden.',
          },
          {
            'Voraussetzung': 'Apple Silicon empfohlen',
            'Was das für Sie bedeutet': 'Der Entwickler empfiehlt Apple Silicon (einen M-Chip) für den Betrieb von Jarvis (Mac). Die lokale Inferenz von Llama 3.2 3B ist rechenintensiv, und Apples Metal-GPU-Framework — mit dem das Modell lokal ausgeführt wird — ist für Apple Silicon optimiert, nicht für ältere Intel-Macs.',
          },
          {
            'Voraussetzung': 'Lokaler Modell-Speicherplatz',
            'Was das für Sie bedeutet': 'Da Llama 3.2 3B, Whisper und Kokoro alle lokal laufen, benötigt die App lokalen Speicherplatz für die Modelldateien. Genaue Speicher- und RAM-Anforderungen sind zum Zeitpunkt der Erstellung nicht vom Entwickler veröffentlicht — prüfen Sie vor der Installation die aktuellen Angaben auf der offiziellen Website.',
          },
          {
            'Voraussetzung': 'Internet nur für die erste Einrichtung (laut Entwicklerangabe)',
            'Was das für Sie bedeutet': 'Die Positionierung „Fully offline. Fully yours" gilt für Sprachbefehle nach der Einrichtung. Der erstmalige Download von App und Modelldateien erfordert eine Internetverbindung, wie bei den meisten lokalen KI-Apps üblich.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich Jarvis (Mac) eignet',
        items: [
          '**Mac-Nutzer, die neugierig auf Sprachsteuerung ohne Cloud-Abonnement sind.** Wer seinen Mac per Sprache mit einem lokalen Modell statt eines Cloud-Assistenten steuern möchte, findet in Jarvis (Mac) eine speziell dafür gebaute macOS-App.',
          '**Datenschutzbewusste Nutzer, die eine lokale Sprachverarbeitung wünschen.** Da Whisper, Llama 3.2 3B und Kokoro laut Positionierung des Entwicklers alle lokal laufen, wird die Kernpipeline der Sprachinteraktion nicht über eine externe KI-API geleitet.',
          '**Nutzer, die Software von unabhängigen Entwicklern ausprobieren möchten.** Wer bereit ist, ein kleineres, mit Lovable gebautes Projekt statt eines kommerziellen Produkts mit dediziertem Support-Team zu testen, kann Jarvis (Mac) sinnvoll ausprobieren.',
          '**Besitzer eines Apple-Silicon-Macs.** Da Apple Silicon für die lokale Ausführung von Llama 3.2 3B über Metal empfohlen wird, sind Nutzer mit einem M-Chip-Mac für ein reibungsloses Erlebnis am besten aufgestellt.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen sich Jarvis (Mac) nicht eignet',
        items: [
          '**Nutzer, die Windows- oder Linux-Unterstützung benötigen.** Jarvis (Mac) läuft ausschließlich auf macOS. Nutzer anderer Betriebssysteme sollten plattformübergreifende lokale KI-Apps wie [Loci](/de/power-local-llm/loci-ai-review-offline-local-ai) prüfen oder eine eigene Pipeline aufbauen.',
          '**Nutzer, die Reasoning auf Spitzenniveau benötigen.** Llama 3.2 3B ist ein kompaktes Modell mit 3 Milliarden Parametern. Es unterliegt derselben Parameteranzahl-Obergrenze wie andere kleine lokale Modelle und ersetzt keine größeren Cloud-Modelle bei komplexen, mehrstufigen Reasoning-Aufgaben.',
          '**Nutzer, die Enterprise-Support-Zusagen benötigen.** Da Jarvis (Mac) ein unabhängiges, auf der Lovable-Plattform gebautes Projekt ist, bietet es nicht die dokumentierten Support-SLAs, veröffentlichten Unternehmensdaten oder Account-Management-Strukturen eines finanzierten kommerziellen Anbieters.',
          '**Nutzer, die ihr eigenes Modell wählen oder die Pipeline anpassen möchten.** Jarvis (Mac) kommt mit einem festen Stack — Whisper, Llama 3.2 3B und Kokoro. Wer Modelle austauschen, Quantisierungsformate wählen oder die STT-/TTS-Schicht anpassen möchte, sollte stattdessen eine eigene Pipeline bauen; siehe [Einen vollständig offline Sprachassistenten bauen](/de/power-local-llm/build-local-voice-assistant-2026) für eine Anleitung von Grund auf.',
          '**Nutzer, die anbieterseitig geprüfte Datenschutz- oder Sicherheitsgarantien für sensible Arbeit benötigen.** Prüfen Sie vor der Nutzung jeder unabhängigen App für vertrauliche oder regulierte Daten die aktuelle Datenschutzerklärung direkt auf der Website des Entwicklers — diese Review gibt die angegebene Positionierung des Entwicklers wieder, kein unabhängiges Datenschutz-Audit.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Jarvis (Mac) im Vergleich',
        itemHeadings: true,
        columns: ['Option', 'Am besten für', 'Plattform', 'Wesentlicher Unterschied'],
        rows: [
          {
            'Option': 'Jarvis (Mac)',
            'Am besten für': 'Einen fertigen Offline-Sprachassistenten auf macOS ausprobieren',
            'Plattform': 'Nur macOS 13+',
            'Wesentlicher Unterschied': 'Fester Stack (Whisper + Llama 3.2 3B + Kokoro); unabhängiges, mit Lovable gebautes Projekt',
          },
          {
            'Option': 'Loci',
            'Am besten für': 'Plattformübergreifenden privaten lokalen Chat',
            'Plattform': 'iPhone/iPad/Android/Mac/Windows',
            'Wesentlicher Unterschied': 'Breitere kuratierte Modellbibliothek; nicht primär auf Sprachbefehle ausgerichtet. Siehe die [Loci-AI-Review](/de/power-local-llm/loci-ai-review-offline-local-ai).',
          },
          {
            'Option': 'Eigene Sprach-Pipeline',
            'Am besten für': 'Nutzer, die volle Kontrolle über Modelle und Code wollen',
            'Plattform': 'Jedes Betriebssystem, für das Sie sie bauen',
            'Wesentlicher Unterschied': 'Sie wählen die STT-/LLM-/TTS-Komponenten und können sie austauschen; höherer Einrichtungsaufwand. Siehe [Einen vollständig offline Sprachassistenten bauen](/de/power-local-llm/build-local-voice-assistant-2026).',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Steht Jarvis (Mac) in Verbindung mit Marvels J.A.R.V.I.S., Apple oder Amazon Alexa?',
            a: 'Nein. Jarvis (Mac) ist eine unabhängige macOS-App, gehostet unter jarvis-mac.lovable.app. Es besteht keine bestätigte Verbindung zu Marvels fiktiver KI-Figur J.A.R.V.I.S., zu Apple, Amazon Alexa oder anderen Produkten mit dem Namen „Jarvis". Der Name wird von vielen nicht verwandten Produkten geteilt.',
          },
          {
            q: 'Welche Modelle nutzt Jarvis (Mac)?',
            a: 'Jarvis (Mac) nutzt Whisper für Speech-to-Text, Llama 3.2 3B (ein Sprachmodell mit 3 Milliarden Parametern) für das Reasoning und Kokoro für Text-to-Speech. Alle drei laufen laut angegebener Architektur des Entwicklers lokal auf dem Mac über Apples Metal-GPU-Framework.',
          },
          {
            q: 'Funktioniert Jarvis (Mac) ohne Internetverbindung?',
            a: 'Die Positionierung des Entwicklers — „Fully offline. Fully yours" — besagt, dass Sprachbefehle nach der Installation von App und Modellen lokal ohne Internetverbindung funktionieren. Der erste Download und die Einrichtung erfordern Internet, wie bei den meisten lokalen KI-Apps.',
          },
          {
            q: 'Benötige ich einen API-Key, um Jarvis (Mac) zu nutzen?',
            a: 'Laut angegebenem Design des Entwicklers nein. Da die Inferenz lokal über Llama 3.2 3B auf Apple Metal läuft, ist Jarvis (Mac) so positioniert, dass für die Kernfunktionen der Sprachsteuerung kein API-Key und kein Konto bei einem Cloud-KI-Anbieter erforderlich ist.',
          },
          {
            q: 'Welchen Mac benötige ich für Jarvis (Mac)?',
            a: 'Jarvis (Mac) erfordert macOS 13 oder neuer. Apple Silicon (ein M-Chip) wird empfohlen, da die lokale Inferenz von Llama 3.2 3B über Apples Metal-GPU-Framework rechenintensiv ist und für Apple Silicon optimiert wurde, nicht für ältere Intel-Macs.',
          },
          {
            q: 'Wer entwickelt Jarvis (Mac)?',
            a: 'Jarvis (Mac) wird auf der App-Builder-Plattform Lovable gebaut und gehostet, die unabhängige Entwickler zum Bauen und Veröffentlichen von Apps nutzen. Weder Firmenname noch Finanzierungsstatus noch Teamgröße sind für dieses Projekt öffentlich bestätigt — es sollte als unabhängiges Projekt bewertet werden, nicht als Produkt eines großen kommerziellen Anbieters.',
          },
          {
            q: 'Was kostet Jarvis (Mac)?',
            a: 'Die Preisgestaltung ist für diese Review nicht unabhängig verifiziert. Prüfen Sie die aktuellen Preise direkt auf [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/) vor der Installation, da unabhängige Apps auf Plattformen wie Lovable Preise ohne Vorankündigung ändern können.',
          },
          {
            q: 'Kann Jarvis (Mac) Siri oder einen Cloud-Sprachassistenten ersetzen?',
            a: 'Für Sprachbefehle, die vollständig von seinem lokalen Llama-3.2-3B-Modell verarbeitet werden, ist Jarvis (Mac) als Offline-Alternative zu Cloud-basierten Sprachassistenten positioniert. Es unterliegt derselben Reasoning-Obergrenze wie andere lokale Modelle mit 3 Milliarden Parametern und ist daher nicht als Ersatz für Aufgaben positioniert, die Reasoning auf Spitzenniveau oder aktuelles Webwissen erfordern.',
          },
          {
            q: 'Wie unterscheidet sich Jarvis (Mac) von Loci oder einer selbst gebauten Sprachassistenten-Lösung?',
            a: 'Jarvis (Mac) läuft ausschließlich auf macOS mit einem festen Modell-Stack (Whisper, Llama 3.2 3B, Kokoro) und minimaler Einrichtung. [Loci](/de/power-local-llm/loci-ai-review-offline-local-ai) deckt fünf Plattformen mit einer breiteren Modellbibliothek ab, ist aber nicht primär auf Sprachbefehle ausgerichtet. Eine [eigene Sprach-Pipeline](/de/power-local-llm/build-local-voice-assistant-2026) bietet volle Kontrolle über die verwendeten Modelle, erfordert aber manuelle Einrichtung.',
          },
          {
            q: 'Muss ich bei der Nutzung von Jarvis (Mac) die DSGVO beachten?',
            a: 'Da Sprachverarbeitung laut Entwicklerangabe lokal auf Ihrem Mac stattfindet und keine Audiodaten an einen Server gesendet werden, entstehen für die Kern-Sprachfunktion in der Regel keine zusätzlichen DSGVO-Übermittlungspflichten wie bei einem Cloud-Dienst. Dennoch bleiben Sie als Nutzer für die Einhaltung der DSGVO verantwortlich, etwa wenn Sie die App für Daten Dritter einsetzen — prüfen Sie die aktuelle Datenschutzerklärung des Entwicklers, da diese Review keine rechtliche Bewertung darstellt.',
          },
          {
            q: 'Ist Jarvis (Mac) für den deutschen Mittelstand geeignet?',
            a: 'Für einzelne Mitarbeitende, die lokale Sprachsteuerung auf einem Apple-Silicon-Mac ausprobieren möchten, ist Jarvis (Mac) technisch nutzbar. Für den unternehmensweiten Einsatz im Mittelstand fehlen jedoch die dokumentierten Support-SLAs, IT-Sicherheitsnachweise (z. B. BSI-Grundschutz-Bezug) und Account-Management-Strukturen eines kommerziellen Anbieters — für regulierte oder unternehmenskritische Einsätze empfiehlt sich eine eigene, auditierbare Pipeline wie in [Einen vollständig offline Sprachassistenten bauen](/de/power-local-llm/build-local-voice-assistant-2026) beschrieben.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Jarvis (Mac) lohnt sich für alle, die gezielt eine macOS-App suchen, mit der sie ihren Mac per Sprache über eine lokale Whisper- + Llama-3.2-3B- + Kokoro-Pipeline steuern können, ohne Cloud-API-Keys oder eine Internetverbindung für die zentrale Interaktion zu benötigen. Die wesentlichen Stärken laut angegebenem Design des Entwicklers sind ein fester, konfigurationsfreier lokaler Sprach-Stack und die Beschleunigung über Apples Metal-GPU auf Apple Silicon. Die wesentlichen Einschränkungen entsprechen denen jedes lokalen Modells mit 3 Milliarden Parametern — eine niedrigere Reasoning-Obergrenze als bei Cloud-Spitzenmodellen — sowie der praktischen Tatsache, dass es sich um ein Einzelentwickler- oder Kleinteam-Projekt auf der App-Builder-Plattform Lovable handelt und nicht um einen finanzierten kommerziellen Anbieter; Preise, Support und langfristige Pflege sollten daher direkt auf [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/) geprüft statt vorausgesetzt werden. Wer plattformübergreifende Unterstützung oder tiefere Modellkontrolle benötigt, sollte [Loci](/de/power-local-llm/loci-ai-review-offline-local-ai) oder eine [eigene Sprach-Pipeline](/de/power-local-llm/build-local-voice-assistant-2026) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Offizielle Jarvis-(Mac)-Website](https://jarvis-mac.lovable.app/) — Produktpositionierung, Marketing-Zeile „Fully offline. Fully yours", aktuelle App-Details.',
          '[Lovable](https://lovable.dev) — die App-Builder-Plattform, auf der Jarvis (Mac) gebaut und gehostet wird.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Ressourcen',
        items: [
          '[Loci AI Review: Offline-KI für iPhone, Android, iPad, Mac und Windows](/de/power-local-llm/loci-ai-review-offline-local-ai) — ein Vergleich plattformübergreifender lokaler KI-Apps.',
          '[Einen vollständig offline Sprachassistenten bauen 2026: Whisper + LLM + Piper](/de/power-local-llm/build-local-voice-assistant-2026) — eine Anleitung von Grund auf für Leser, die ihren eigenen STT-/LLM-/TTS-Stack wählen möchten.',
          '[Lokaler Whisper-STT-Vergleich 2026](/de/power-local-llm/local-whisper-stt-comparison-2026) — ein genauerer Blick auf die Speech-to-Text-Schicht solcher Pipelines.',
          '[Lokales TTS und Voice Cloning 2026: Piper vs. Coqui vs. XTTS v2](/de/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Vergleich von Text-to-Speech-Optionen jenseits von Kokoro.',
          '[Apple-Silicon-Leitfaden für lokale LLMs 2026](/de/local-llms/apple-silicon-local-llm-guide-2026) — Hintergrund zum Ausführen lokaler Modelle über Apples Metal-GPU-Framework.',
          '[Ollama auf dem Mac (Apple Silicon) einrichten 2026](/de/local-llms/ollama-on-mac-apple-silicon-setup-2026) — für Leser, die lokale Modelle auf einem Mac außerhalb einer fertigen App wie Jarvis ausführen möchten.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/jarvis-mac-review-2026-hero-es.webp',
    title: 'Jarvis (Mac) Review 2026: IA de voz offline para macOS',
    seoTitle: 'Jarvis para Mac Review 2026: IA de voz offline',
    intro:
      'Jarvis (Mac) — que no debe confundirse con la IA ficticia de Marvel, Amazon Alexa, Apple Intelligence ni ningún otro producto llamado también "Jarvis" — es una app de macOS creada por un desarrollador independiente en la plataforma Lovable (alojada en jarvis-mac.lovable.app). Ejecuta un pipeline completo de asistente de voz en el dispositivo: Whisper para el reconocimiento de voz, un modelo de lenguaje local Llama 3.2 3B para el razonamiento, y Kokoro para la conversión de texto a voz, todo procesado a través de la GPU Metal de Apple. El lema del desarrollador es "Fully offline. Fully yours" — una vez instalada, los comandos de voz se procesan sin enviar audio ni texto a un servidor, y sin necesidad de una clave de API.',
    metaDescription:
      'Jarvis (Mac) review: una app de macOS independiente con Whisper STT, Llama 3.2 3B local y Kokoro TTS en Apple Metal. Requisitos y para quién es adecuada.',
    twitterDescription:
      'Jarvis (Mac) review 2026: IA de voz offline para macOS con Llama 3.2 3B, Whisper y Kokoro TTS vía Apple Metal. Proyecto independiente creado con Lovable — qué esperar, requisitos y limitaciones.',
    audience:
      'Usuarios de macOS que evalúan un asistente de voz independiente y local para controlar su Mac por voz de forma privada — decidiendo si una app creada con Lovable con un stack fijo de Llama 3.2 3B/Whisper/Kokoro les conviene frente a construir su propio pipeline o usar una app más grande multiplataforma.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Jarvis Mac review',
    targetKeywords: [
      'jarvis mac review',
      'jarvis para mac',
      'asistente de voz offline mac',
      'llama 3.2 3b mac metal',
      'whisper kokoro tts mac',
      'ia de voz privada macos',
      'jarvis ia asistente de voz mac',
      'app de ia offline macos',
    ],
    current_models_mentioned: ['Llama 3.2 3B', 'Whisper', 'Kokoro'],
    current_hardware_mentioned: ['Apple Silicon Mac', 'macOS 13'],
    leadAnswerBlock:
      '**Jarvis (Mac) es una app independiente de macOS, creada con la plataforma Lovable, que ejecuta un pipeline de voz completo en el dispositivo: Whisper para speech-to-text, un modelo local Llama 3.2 3B para el razonamiento, y Kokoro para text-to-speech, todo procesado a través de la GPU Metal de Apple.** El desarrollador la posiciona como "Fully offline. Fully yours" — tras la configuración inicial de la app y el modelo, los comandos de voz no requieren conexión a internet ni una clave de API. Funciona desde macOS 13, y se recomienda Apple Silicon para ejecutar Llama 3.2 3B localmente. Al tratarse de un proyecto de un solo desarrollador alojado en la plataforma Lovable, y no de un producto de una empresa financiada, espera un soporte más limitado que el de proveedores comerciales de IA de voz y verifica los detalles actuales en el sitio oficial antes de usarla para algo crítico.',
    quickAnswerTop: {
      es: {
        question: '¿Debería usar Jarvis (Mac) para controlar mi Mac por voz sin conexión?',
        answer:
          'Usa Jarvis (Mac) si quieres probar un asistente de voz offline sencillo y sin configuración para macOS, construido sobre un stack fijo de Llama 3.2 3B + Whisper + Kokoro. Evítala si necesitas un canal de soporte empresarial documentado, quieres elegir tu propio modelo o cuantización, o necesitas que funcione en Windows o Linux — es exclusiva de macOS y la construye un desarrollador independiente, no un proveedor financiado.',
        bullets: [
          'Ejecuta Llama 3.2 3B localmente en la GPU Metal de Apple para el razonamiento.',
          'Whisper gestiona el speech-to-text; Kokoro gestiona el text-to-speech — ambos se ejecutan en el dispositivo.',
          'Posicionada como totalmente offline tras la configuración: no requiere internet ni clave de API para emitir comandos de voz.',
          'Requiere macOS 13 o posterior; se recomienda Apple Silicon para la inferencia local.',
          'Creada y alojada en la plataforma Lovable por un desarrollador independiente, no un gran proveedor comercial — el precio, los detalles de la empresa y los canales de soporte no están verificados de forma independiente aquí.',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Qué es Jarvis (Mac)', anchor: 'what-is-jarvis-mac' },
      { label: 'Cómo funciona Jarvis (Mac)', anchor: 'how-jarvis-works' },
      { label: 'Es un proyecto independiente creado con Lovable', anchor: 'indie-project-note' },
      { label: 'Plataforma y requisitos', anchor: 'platform-requirements' },
      { label: 'Para quién es Jarvis (Mac)', anchor: 'who-should-use' },
      { label: 'Para quién no es Jarvis (Mac)', anchor: 'who-should-not-use' },
      { label: 'Jarvis (Mac) frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lectura relacionada', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Jarvis (Mac) es una app de asistente de voz para macOS que ejecuta Whisper (speech-to-text), Llama 3.2 3B (razonamiento) y Kokoro (text-to-speech) en el dispositivo a través de la GPU Metal de Apple.',
          'El posicionamiento del desarrollador es "Fully offline. Fully yours" — tras la configuración, los comandos de voz no requieren conexión a internet ni clave de API.',
          'Requiere macOS 13 o posterior; se recomienda Apple Silicon para ejecutar Llama 3.2 3B localmente.',
          'Está creada y alojada en la plataforma Lovable (jarvis-mac.lovable.app) por un desarrollador independiente, no un gran proveedor comercial — trata el precio, la identidad de la empresa y los compromisos de soporte como no verificados hasta comprobarlos en el sitio oficial.',
          'No debe confundirse con la IA ficticia de Marvel J.A.R.V.I.S., Amazon Alexa, Apple Intelligence ni ningún otro producto no relacionado también llamado "Jarvis".',
          'Esta review cubre la arquitectura y el posicionamiento indicados por el desarrollador, no benchmarks, valoraciones o cifras de descargas medidas de forma independiente — ninguno de esos datos es verificable públicamente para esta app en el momento de escribir esto.',
        ],
      },
      whatIsJarvisMac: {
        id: 'what-is-jarvis-mac',
        title: 'Qué es Jarvis (Mac)',
        content: [
          '**Jarvis (Mac) es una aplicación de macOS, disponible en [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/), que se posiciona como un asistente de voz de IA totalmente offline.** Está creada y alojada en la plataforma Lovable, una herramienta que usan desarrolladores independientes para construir y publicar proyectos web y de app — no es un producto de una gran empresa de IA financiada.',
          'El nombre "Jarvis" lo comparten muchos productos y personajes ficticios no relacionados, incluida la IA ficticia de Marvel J.A.R.V.I.S., software empresarial con el mismo nombre y varias apps sin relación entre sí. Esta review cubre únicamente la app de macOS en jarvis-mac.lovable.app. No tiene ninguna afiliación confirmada con Marvel, Apple, Amazon ni ninguna otra empresa o producto que use el nombre "Jarvis".',
          'El lema de marketing del desarrollador para la app es "Fully offline. Fully yours" — la intención declarada es que el procesamiento de voz ocurra localmente en el Mac, sin enrutar audio o texto a través de un servidor en la nube, y que la app permita controlar el Mac por voz de forma totalmente local una vez configurada.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Jarvis (Mac) es una app independiente de macOS, creada con Lovable, que combina speech-to-text de Whisper con un modelo local Llama 3.2 3B y text-to-speech de Kokoro, todo ejecutándose en hardware con GPU Metal de Apple.',
          },
          {
            type: 'plain-terms',
            text: 'Jarvis (Mac) te permite hablarle a tu Mac y escuchar una respuesta hablada sin que tu voz o texto salgan del equipo — todo se ejecuta localmente una vez instalados la app y el modelo.',
          },
        ],
      },
      howJarvisWorks: {
        id: 'how-jarvis-works',
        title: 'Cómo funciona Jarvis (Mac)',
        content: [
          '**Jarvis (Mac) combina tres componentes locales en un único pipeline de voz.** Cada pieza gestiona una etapa distinta de la interacción por voz — escuchar, pensar y hablar — y las tres se ejecutan localmente en el Mac en lugar de llamar a una API en la nube.',
        ],
        items: [
          '**Whisper (speech-to-text)** — convierte el audio hablado en texto en el dispositivo. Whisper es un modelo abierto y consolidado de reconocimiento de voz; Jarvis lo usa como la capa de escucha del pipeline.',
          '**Llama 3.2 3B (razonamiento, vía GPU Metal de Apple)** — un modelo de lenguaje local de 3.000 millones de parámetros gestiona la comprensión de la solicitud transcrita y la generación de la respuesta. Se ejecuta en la GPU del Mac a través del framework Metal de Apple en lugar de en un servidor remoto, lo que permite que los comandos de voz funcionen sin conexión a internet tras la configuración.',
          '**Kokoro (text-to-speech)** — convierte la respuesta en texto del modelo de nuevo en audio hablado en el dispositivo, completando el ciclo de voz sin un servicio de TTS en la nube.',
          '**Control por voz del Mac** — el propósito declarado de la app es permitir que el usuario emita comandos de voz para controlar su Mac usando este pipeline local, sin necesidad de mantener claves de API para un proveedor de IA en la nube ni una conexión a internet para la interacción de voz principal una vez que todo está instalado.',
        ],
        note: 'Esta sección describe la arquitectura y el posicionamiento tal como los indica el desarrollador. PromptQuorum no ha medido de forma independiente la latencia, la precisión de la transcripción ni la fiabilidad de los comandos de voz de Jarvis (Mac) — verifica el comportamiento actual en tu propio hardware antes de confiar en ella.',
      },
      indieProjectNote: {
        id: 'indie-project-note',
        title: 'Es un proyecto independiente creado con Lovable',
        content: [
          '**Jarvis (Mac) está alojada en un subdominio de Lovable (jarvis-mac.lovable.app), lo que indica que se construyó usando la plataforma Lovable en lugar de un equipo de ingeniería interno de una empresa de software financiada.** Esto importa para lo que debes esperar de ella.',
        ],
        items: [
          '**Ajusta tus expectativas de soporte.** Un proyecto independiente de un solo desarrollador (o equipo pequeño) construido sobre una plataforma de creación de apps suele tener un soporte más limitado que un proveedor comercial — puede no haber un equipo de soporte dedicado, un SLA publicado ni un contacto empresarial.',
          '**Verifica las afirmaciones de forma independiente antes de usarla para algo sensible.** No hay ningún nombre de empresa, financiación ni tamaño de equipo confirmado públicamente para este proyecto al momento de esta review; trata las afirmaciones sobre privacidad y manejo de datos como declaraciones del desarrollador que hay que verificar en el sitio oficial, no como hechos auditados de forma independiente.',
          '**Espera que la app y su documentación evolucionen.** Las apps independientes creadas en plataformas como Lovable pueden cambiar rápidamente, incluyendo la URL, el precio y las funciones — consulta [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/) directamente para ver el estado actual antes de instalarla.',
        ],
      },
      platformRequirements: {
        id: 'platform-requirements',
        title: 'Plataforma y requisitos',
        itemHeadings: true,
        columns: ['Requisito', 'Qué significa para ti'],
        rows: [
          {
            'Requisito': 'macOS 13 o posterior',
            'Qué significa para ti': 'Jarvis (Mac) requiere macOS 13 (Ventura) o una versión más reciente. Confirma tu versión actual de macOS en "Acerca de este Mac" antes de instalar, ya que las versiones anteriores no son compatibles.',
          },
          {
            'Requisito': 'Se recomienda Apple Silicon',
            'Qué significa para ti': 'El desarrollador recomienda Apple Silicon (un chip de la serie M) para ejecutar Jarvis (Mac). La inferencia local de Llama 3.2 3B exige mucho cómputo, y el framework Metal GPU de Apple — usado para ejecutar el modelo en el dispositivo — está optimizado para Apple Silicon y no para los Mac Intel más antiguos.',
          },
          {
            'Requisito': 'Almacenamiento local del modelo',
            'Qué significa para ti': 'Como Llama 3.2 3B, Whisper y Kokoro se ejecutan localmente, la app necesita espacio en disco para almacenar los archivos del modelo. El desarrollador no publica requisitos exactos de almacenamiento ni RAM al momento de escribir esto — consulta el sitio oficial para ver las especificaciones actuales antes de instalar.',
          },
          {
            'Requisito': 'Internet solo para la configuración inicial (según el desarrollador)',
            'Qué significa para ti': 'El posicionamiento "Fully offline. Fully yours" se aplica a los comandos de voz tras la configuración. Descargar la app y los archivos del modelo por primera vez requiere conexión a internet, como en la mayoría de las apps de IA locales.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es Jarvis (Mac)',
        items: [
          '**Usuarios de Mac curiosos por el control por voz sin suscripción en la nube.** Si quieres probar controlar tu Mac por voz usando un modelo local en lugar de un asistente en la nube, Jarvis (Mac) está diseñada específicamente para eso en macOS.',
          '**Usuarios preocupados por la privacidad que quieren el procesamiento de voz local.** Como Whisper, Llama 3.2 3B y Kokoro se ejecutan en el dispositivo según el posicionamiento del desarrollador, las interacciones de voz no pasan por una API de IA de terceros en el pipeline principal.',
          '**Usuarios cómodos probando software de un desarrollador independiente.** Si te parece bien evaluar un proyecto más pequeño, creado con Lovable, en lugar de un producto comercial con equipo de soporte dedicado, Jarvis (Mac) es una app razonable para probar.',
          '**Propietarios de un Mac con Apple Silicon.** Como se recomienda Apple Silicon para ejecutar Llama 3.2 3B localmente vía Metal, los usuarios con un Mac de la serie M están mejor posicionados para una experiencia fluida.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quién no es Jarvis (Mac)',
        items: [
          '**Usuarios que necesitan compatibilidad con Windows o Linux.** Jarvis (Mac) es exclusiva de macOS. Los usuarios de otros sistemas operativos deberían mirar apps de IA local multiplataforma como [Loci](/es/power-local-llm/loci-ai-review-offline-local-ai) o construir un pipeline propio.',
          '**Usuarios que necesitan una calidad de razonamiento de vanguardia.** Llama 3.2 3B es un modelo compacto de 3.000 millones de parámetros. Enfrenta el mismo techo de tamaño que otros modelos locales pequeños y no sustituye a modelos en la nube más grandes en tareas de razonamiento complejo y de varios pasos.',
          '**Usuarios que necesitan compromisos de soporte empresarial.** Al ser un proyecto independiente creado en la plataforma Lovable, Jarvis (Mac) no ofrece los SLA de soporte documentados, los datos de empresa publicados ni la estructura de gestión de cuentas de un proveedor comercial financiado.',
          '**Usuarios que quieren elegir su propio modelo o personalizar el pipeline.** Jarvis (Mac) viene con un stack fijo — Whisper, Llama 3.2 3B y Kokoro. Quien quiera cambiar de modelo, elegir formatos de cuantización o personalizar las capas STT/TTS debería construir un pipeline propio; consulta [Construye un asistente de voz totalmente offline](/es/power-local-llm/build-local-voice-assistant-2026) para una guía desde cero.',
          '**Usuarios que necesitan garantías de privacidad o seguridad verificadas por el proveedor para trabajo sensible.** Antes de usar cualquier app independiente para datos confidenciales o regulados, verifica la política de privacidad actual directamente en el sitio del desarrollador — esta review recoge el posicionamiento declarado por el desarrollador, no una auditoría de privacidad independiente.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Jarvis (Mac) frente a alternativas',
        itemHeadings: true,
        columns: ['Opción', 'Mejor para', 'Plataforma', 'Diferencia clave'],
        rows: [
          {
            'Opción': 'Jarvis (Mac)',
            'Mejor para': 'Probar un asistente de voz offline ya construido en macOS',
            'Plataforma': 'Solo macOS 13+',
            'Diferencia clave': 'Stack fijo (Whisper + Llama 3.2 3B + Kokoro); proyecto independiente creado con Lovable',
          },
          {
            'Opción': 'Loci',
            'Mejor para': 'Chat privado local multiplataforma',
            'Plataforma': 'iPhone/iPad/Android/Mac/Windows',
            'Diferencia clave': 'Biblioteca de modelos curada más amplia; no está centrada principalmente en comandos de voz. Consulta la [review de Loci AI](/es/power-local-llm/loci-ai-review-offline-local-ai).',
          },
          {
            'Opción': 'Pipeline de voz propio',
            'Mejor para': 'Usuarios que quieren control total sobre modelos y código',
            'Plataforma': 'Cualquier sistema operativo para el que lo construyas',
            'Diferencia clave': 'Eliges los componentes de STT/LLM/TTS y puedes cambiarlos; más esfuerzo de configuración. Consulta [Construye un asistente de voz totalmente offline](/es/power-local-llm/build-local-voice-assistant-2026).',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Jarvis (Mac) está relacionado con el J.A.R.V.I.S. de Marvel, Apple o Amazon Alexa?',
            a: 'No. Jarvis (Mac) es una app independiente de macOS alojada en jarvis-mac.lovable.app. No tiene ninguna afiliación confirmada con el personaje ficticio de IA de Marvel J.A.R.V.I.S., con Apple, con Amazon Alexa ni con ningún otro producto que también use el nombre "Jarvis". El nombre lo comparten muchos productos no relacionados.',
          },
          {
            q: '¿Qué modelos usa Jarvis (Mac)?',
            a: 'Jarvis (Mac) usa Whisper para speech-to-text, Llama 3.2 3B (un modelo de lenguaje de 3.000 millones de parámetros) para el razonamiento, y Kokoro para text-to-speech. Los tres se ejecutan localmente en el Mac vía el framework Metal GPU de Apple, según la arquitectura declarada por el desarrollador.',
          },
          {
            q: '¿Jarvis (Mac) funciona sin conexión a internet?',
            a: 'El posicionamiento del desarrollador — "Fully offline. Fully yours" — indica que los comandos de voz funcionan en el dispositivo sin conexión a internet una vez instalados la app y los modelos. La descarga y configuración inicial requieren internet, como en la mayoría de las apps de IA locales.',
          },
          {
            q: '¿Necesito una clave de API para usar Jarvis (Mac)?',
            a: 'No, según el diseño declarado por el desarrollador. Como la inferencia se ejecuta localmente vía Llama 3.2 3B en Apple Metal, Jarvis (Mac) se posiciona como una app que no requiere clave de API ni cuenta con un proveedor de IA en la nube para sus funciones de voz principales.',
          },
          {
            q: '¿Qué Mac necesito para ejecutar Jarvis (Mac)?',
            a: 'Jarvis (Mac) requiere macOS 13 o posterior. Se recomienda Apple Silicon (un chip de la serie M), ya que la inferencia local de Llama 3.2 3B vía el framework Metal GPU de Apple exige mucho cómputo y está optimizada para Apple Silicon, no para los Mac Intel más antiguos.',
          },
          {
            q: '¿Quién crea Jarvis (Mac)?',
            a: 'Jarvis (Mac) está creada y alojada en la plataforma Lovable, que usan desarrolladores independientes para construir y publicar apps. No hay nombre de empresa, estado de financiación ni tamaño de equipo confirmados públicamente para este proyecto — debería evaluarse como un proyecto independiente, no como un producto de un gran proveedor comercial.',
          },
          {
            q: '¿Cuánto cuesta Jarvis (Mac)?',
            a: 'El precio no está verificado de forma independiente para esta review. Consulta el precio actual directamente en [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/) antes de instalarla, ya que las apps independientes creadas en plataformas como Lovable pueden cambiar de precio sin previo aviso.',
          },
          {
            q: '¿Puede Jarvis (Mac) reemplazar a Siri o a un asistente de voz en la nube?',
            a: 'Para los comandos de voz gestionados enteramente por su modelo local Llama 3.2 3B, Jarvis (Mac) se posiciona como una alternativa offline a los asistentes de voz basados en la nube. Enfrenta el mismo techo de razonamiento que otros modelos locales de 3.000 millones de parámetros, así que no se posiciona como sustituto para tareas que requieren razonamiento de vanguardia o conocimiento web en tiempo real.',
          },
          {
            q: '¿En qué se diferencia Jarvis (Mac) de Loci o de construir un asistente de voz propio?',
            a: 'Jarvis (Mac) es exclusiva de macOS con un stack de modelos fijo (Whisper, Llama 3.2 3B, Kokoro) y una configuración mínima. [Loci](/es/power-local-llm/loci-ai-review-offline-local-ai) cubre cinco plataformas con una biblioteca de modelos más amplia, pero no está centrada principalmente en comandos de voz. Un [pipeline de voz propio](/es/power-local-llm/build-local-voice-assistant-2026) da control total sobre qué modelos usar, a costa de una configuración manual.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Jarvis (Mac) merece la pena si específicamente quieres una app de macOS que te permita controlar tu Mac por voz usando un pipeline local de Whisper + Llama 3.2 3B + Kokoro, sin mantener claves de API en la nube ni conexión a internet para la interacción principal. Sus principales fortalezas, según el diseño declarado por el desarrollador, son un stack de voz local fijo y sin configuración, y la aceleración por GPU Metal de Apple en Apple Silicon. Sus principales limitaciones son las mismas que enfrenta cualquier modelo local de 3.000 millones de parámetros — un techo de razonamiento más bajo que los modelos en la nube de vanguardia — además de la realidad práctica de que es un proyecto de un solo desarrollador o equipo pequeño, construido en la plataforma Lovable, y no un proveedor comercial financiado, por lo que el precio, el soporte y los compromisos de mantenimiento a largo plazo deben verificarse directamente en [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/) en lugar de darse por sentado. Quien necesite soporte multiplataforma o un control más profundo del modelo debería comparar con [Loci](/es/power-local-llm/loci-ai-review-offline-local-ai) o un [pipeline de voz propio](/es/power-local-llm/build-local-voice-assistant-2026).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio oficial de Jarvis (Mac)](https://jarvis-mac.lovable.app/) — posicionamiento del producto, lema de marketing "Fully offline. Fully yours", detalles actuales de la app.',
          '[Lovable](https://lovable.dev) — la plataforma de creación de apps sobre la que se construye y aloja Jarvis (Mac).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        items: [
          '[Loci AI Review: IA offline para iPhone, Android, iPad, Mac y Windows](/es/power-local-llm/loci-ai-review-offline-local-ai) — una comparación de apps de IA local multiplataforma.',
          '[Construye un asistente de voz totalmente offline en 2026: Whisper + LLM + Piper](/es/power-local-llm/build-local-voice-assistant-2026) — una guía desde cero para quienes quieran elegir su propio stack STT/LLM/TTS.',
          '[Comparativa de Whisper STT local 2026](/es/power-local-llm/local-whisper-stt-comparison-2026) — una mirada más de cerca a la capa de speech-to-text usada en pipelines como este.',
          '[TTS local y clonación de voz 2026: Piper vs Coqui vs XTTS v2](/es/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — comparación de opciones de text-to-speech más allá de Kokoro.',
          '[Guía de LLM local en Apple Silicon 2026](/es/local-llms/apple-silicon-local-llm-guide-2026) — contexto sobre cómo ejecutar modelos locales vía el framework Metal GPU de Apple.',
          '[Configurar Ollama en Mac (Apple Silicon) 2026](/es/local-llms/ollama-on-mac-apple-silicon-setup-2026) — para quienes quieran ejecutar modelos locales en un Mac fuera de una app empaquetada como Jarvis.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/jarvis-mac-review-2026-hero-fr.webp',
    title: 'Jarvis (Mac) : avis 2026 sur l\'IA vocale hors ligne pour macOS',
    seoTitle: 'Jarvis pour Mac : avis 2026 sur l\'IA vocale offline',
    intro:
      'Jarvis (Mac) — à ne pas confondre avec l\'IA fictive de Marvel, Amazon Alexa, Apple Intelligence ou tout autre produit également nommé « Jarvis » — est une application macOS conçue par un développeur indépendant sur la plateforme Lovable (hébergée sur jarvis-mac.lovable.app). Elle exécute un pipeline complet d\'assistant vocal en local : Whisper pour la reconnaissance vocale, un modèle de langage local Llama 3.2 3B pour le raisonnement, et Kokoro pour la synthèse vocale, le tout traité via le GPU Metal d\'Apple. Le positionnement affiché par le développeur est « Fully offline. Fully yours » — une fois installée, l\'app traite les commandes vocales sans envoyer d\'audio ni de texte vers un serveur, et sans nécessiter de clé API.',
    metaDescription:
      'Jarvis (Mac), avis : une app macOS indépendante avec Whisper STT, Llama 3.2 3B local et Kokoro TTS sur Apple Metal. Prérequis et public cible.',
    twitterDescription:
      'Jarvis (Mac), avis 2026 : IA vocale hors ligne pour macOS basée sur Llama 3.2 3B, Whisper et Kokoro TTS via Apple Metal. Projet indépendant construit avec Lovable — attentes, prérequis et limites.',
    audience:
      'Utilisateurs macOS évaluant un assistant vocal indépendant et local pour contrôler leur Mac à la voix de façon privée — cherchant à savoir si une app construite avec Lovable, avec une pile fixe Llama 3.2 3B/Whisper/Kokoro, leur convient plutôt que de construire leur propre pipeline ou d\'utiliser une app multiplateforme plus importante.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Jarvis Mac review',
    targetKeywords: [
      'jarvis mac avis',
      'jarvis pour mac',
      'assistant vocal offline mac',
      'llama 3.2 3b mac metal',
      'whisper kokoro tts mac',
      'ia vocale privée macos',
      'jarvis ia assistant vocal mac',
      'app ia offline macos',
    ],
    current_models_mentioned: ['Llama 3.2 3B', 'Whisper', 'Kokoro'],
    current_hardware_mentioned: ['Apple Silicon Mac', 'macOS 13'],
    leadAnswerBlock:
      '**Jarvis (Mac) est une application macOS indépendante, construite avec la plateforme Lovable, qui exécute un pipeline vocal complet en local : Whisper pour la transcription, un modèle local Llama 3.2 3B pour le raisonnement, et Kokoro pour la synthèse vocale, le tout via le GPU Metal d\'Apple.** Le développeur la positionne comme « Fully offline. Fully yours » — après la configuration initiale de l\'app et du modèle, les commandes vocales ne nécessitent ni connexion internet ni clé API. Elle fonctionne à partir de macOS 13, avec Apple Silicon recommandé pour exécuter Llama 3.2 3B en local. S\'agissant d\'un projet développé par une seule personne sur la plateforme Lovable, et non d\'un produit d\'une entreprise financée, attendez-vous à un support plus limité que celui des éditeurs commerciaux d\'IA vocale, et vérifiez les informations actuelles sur le site officiel avant toute utilisation critique.',
    quickAnswerTop: {
      fr: {
        question: 'Dois-je utiliser Jarvis (Mac) pour contrôler mon Mac à la voix hors ligne ?',
        answer:
          'Utilisez Jarvis (Mac) si vous voulez essayer un assistant vocal hors ligne simple et sans configuration pour macOS, construit sur une pile fixe Llama 3.2 3B + Whisper + Kokoro. Évitez-la si vous avez besoin d\'un canal de support entreprise documenté, si vous voulez choisir votre propre modèle ou quantification, ou si vous avez besoin d\'une prise en charge Windows ou Linux — elle est exclusive à macOS et développée par un indépendant, pas par un éditeur financé.',
        bullets: [
          'Exécute Llama 3.2 3B en local sur le GPU Metal d\'Apple pour le raisonnement.',
          'Whisper gère la transcription, Kokoro gère la synthèse vocale — les deux tournent en local.',
          'Positionnée comme entièrement hors ligne après la configuration : aucune connexion internet ni clé API requise pour les commandes vocales.',
          'Nécessite macOS 13 ou version ultérieure ; Apple Silicon est recommandé pour l\'inférence locale.',
          'Construite et hébergée sur la plateforme Lovable par un développeur indépendant, et non un grand éditeur commercial — tarifs, informations sur l\'entreprise et canaux de support ne sont pas vérifiés de façon indépendante ici.',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Ce qu\'est Jarvis (Mac)', anchor: 'what-is-jarvis-mac' },
      { label: 'Comment fonctionne Jarvis (Mac)', anchor: 'how-jarvis-works' },
      { label: 'Un projet indépendant construit avec Lovable', anchor: 'indie-project-note' },
      { label: 'Plateforme et prérequis', anchor: 'platform-requirements' },
      { label: 'Pour qui Jarvis (Mac) est adapté', anchor: 'who-should-use' },
      { label: 'Pour qui Jarvis (Mac) n\'est pas adapté', anchor: 'who-should-not-use' },
      { label: 'Jarvis (Mac) face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lecture complémentaire', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Points clés',
        isTldr: true,
        items: [
          'Jarvis (Mac) est une app d\'assistant vocal pour macOS qui exécute Whisper (transcription), Llama 3.2 3B (raisonnement) et Kokoro (synthèse vocale) en local via le GPU Metal d\'Apple.',
          'Le positionnement du développeur est « Fully offline. Fully yours » — après configuration, les commandes vocales ne nécessitent ni connexion internet ni clé API.',
          'Nécessite macOS 13 ou version ultérieure ; Apple Silicon est recommandé pour exécuter Llama 3.2 3B en local.',
          'Elle est construite et hébergée sur la plateforme Lovable (jarvis-mac.lovable.app) par un développeur indépendant, et non un grand éditeur commercial — considérez les tarifs, l\'identité de l\'entreprise et les engagements de support comme non vérifiés tant qu\'ils n\'ont pas été confirmés sur le site officiel.',
          'À ne pas confondre avec l\'IA fictive de Marvel J.A.R.V.I.S., Amazon Alexa, Apple Intelligence ou tout autre produit sans lien également nommé « Jarvis ».',
          'Cet avis couvre l\'architecture et le positionnement déclarés par le développeur, pas des benchmarks, notes ou chiffres de téléchargement mesurés de façon indépendante — aucune de ces informations n\'est publiquement vérifiable pour cette app au moment de la rédaction.',
        ],
      },
      whatIsJarvisMac: {
        id: 'what-is-jarvis-mac',
        title: 'Ce qu\'est Jarvis (Mac)',
        content: [
          '**Jarvis (Mac) est une application macOS, disponible sur [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/), qui se positionne comme un assistant vocal IA entièrement hors ligne.** Elle est construite et hébergée sur la plateforme Lovable, un outil que des développeurs indépendants utilisent pour créer et publier des projets web et applicatifs — ce n\'est pas un produit d\'une grande entreprise d\'IA financée.',
          'Le nom « Jarvis » est utilisé par de nombreux produits et personnages fictifs sans lien entre eux, dont l\'IA fictive de Marvel J.A.R.V.I.S., des logiciels d\'entreprise portant le même nom, et diverses apps sans rapport. Cet avis ne couvre que l\'application macOS sur jarvis-mac.lovable.app. Elle n\'a aucune affiliation confirmée avec Marvel, Apple, Amazon ou toute autre entreprise ou produit utilisant le nom « Jarvis ».',
          'Le slogan marketing du développeur pour l\'app est « Fully offline. Fully yours » — l\'intention affichée est que le traitement vocal se fasse localement sur le Mac, sans faire transiter l\'audio ou le texte par un serveur cloud, et que l\'app permette de contrôler le Mac à la voix entièrement en local une fois configurée.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Jarvis (Mac) est une app macOS indépendante, construite avec Lovable, qui associe la transcription Whisper à un modèle local Llama 3.2 3B et à la synthèse vocale Kokoro, le tout fonctionnant entièrement sur le GPU Metal d\'Apple.',
          },
          {
            type: 'plain-terms',
            text: 'Jarvis (Mac) permet de parler à son Mac et d\'entendre une réponse vocale sans que la voix ou le texte ne quitte la machine — tout fonctionne en local une fois l\'app et le modèle installés.',
          },
        ],
      },
      howJarvisWorks: {
        id: 'how-jarvis-works',
        title: 'Comment fonctionne Jarvis (Mac)',
        content: [
          '**Jarvis (Mac) combine trois composants locaux en un seul pipeline vocal.** Chaque composant gère une étape différente de l\'interaction vocale — écouter, réfléchir, parler — et les trois fonctionnent en local sur le Mac plutôt que d\'appeler une API cloud.',
        ],
        items: [
          '**Whisper (transcription)** — convertit l\'audio parlé en texte en local. Whisper est un modèle de reconnaissance vocale open source établi ; Jarvis l\'utilise comme couche d\'écoute du pipeline.',
          '**Llama 3.2 3B (raisonnement, via le GPU Metal d\'Apple)** — un modèle de langage local de 3 milliards de paramètres gère la compréhension de la requête transcrite et la génération de la réponse. Il tourne sur le GPU du Mac via le framework Metal d\'Apple plutôt que sur un serveur distant, ce qui permet aux commandes vocales de fonctionner sans connexion internet après configuration.',
          '**Kokoro (synthèse vocale)** — reconvertit la réponse textuelle du modèle en audio parlé, en local, bouclant l\'interaction vocale sans service TTS cloud.',
          '**Contrôle vocal du Mac** — l\'objectif affiché de l\'app est de permettre à l\'utilisateur d\'émettre des commandes vocales pour contrôler son Mac via ce pipeline local, sans avoir à conserver de clés API pour un fournisseur d\'IA cloud ni de connexion internet pour l\'interaction vocale principale, une fois tout installé.',
        ],
        note: 'Cette section décrit l\'architecture et le positionnement tels qu\'indiqués par le développeur. PromptQuorum n\'a pas mesuré de façon indépendante la latence, la précision de transcription ni la fiabilité des commandes vocales de Jarvis (Mac) — vérifiez le comportement actuel sur votre propre matériel avant de vous y fier.',
      },
      indieProjectNote: {
        id: 'indie-project-note',
        title: 'Un projet indépendant construit avec Lovable',
        content: [
          '**Jarvis (Mac) est hébergée sur un sous-domaine Lovable (jarvis-mac.lovable.app), ce qui indique qu\'elle a été construite avec la plateforme Lovable plutôt que par une équipe d\'ingénierie interne d\'une entreprise de logiciels financée.** Cela influence ce que vous devez en attendre.',
        ],
        items: [
          '**Ajustez vos attentes de support.** Un projet indépendant, développé par une personne seule (ou une petite équipe) sur une plateforme de création d\'apps, offre en général un support plus limité qu\'un éditeur commercial — il peut n\'y avoir ni équipe de support dédiée, ni SLA publié, ni contact entreprise.',
          '**Vérifiez les affirmations de façon indépendante avant toute utilisation sensible.** Aucun nom d\'entreprise, financement ni taille d\'équipe n\'est publiquement confirmé pour ce projet à la date de cet avis ; traitez les affirmations sur la confidentialité et le traitement des données comme des déclarations du développeur à vérifier sur le site officiel, pas comme des faits audités de façon indépendante.',
          '**Attendez-vous à une évolution de l\'app et de sa documentation.** Les apps indépendantes construites sur des plateformes comme Lovable peuvent changer rapidement, y compris l\'URL, le tarif et les fonctionnalités — consultez directement [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/) pour l\'état actuel avant d\'installer.',
        ],
      },
      platformRequirements: {
        id: 'platform-requirements',
        title: 'Plateforme et prérequis',
        itemHeadings: true,
        columns: ['Prérequis', 'Ce que cela signifie pour vous'],
        rows: [
          {
            'Prérequis': 'macOS 13 ou version ultérieure',
            'Ce que cela signifie pour vous': 'Jarvis (Mac) nécessite macOS 13 (Ventura) ou une version plus récente. Vérifiez votre version actuelle de macOS dans « À propos de ce Mac » avant d\'installer, les versions antérieures n\'étant pas prises en charge.',
          },
          {
            'Prérequis': 'Apple Silicon recommandé',
            'Ce que cela signifie pour vous': 'Le développeur recommande Apple Silicon (une puce de la série M) pour faire tourner Jarvis (Mac). L\'inférence locale de Llama 3.2 3B est gourmande en calcul, et le framework GPU Metal d\'Apple — utilisé pour exécuter le modèle en local — est optimisé pour Apple Silicon plutôt que pour les Mac Intel plus anciens.',
          },
          {
            'Prérequis': 'Stockage local du modèle',
            'Ce que cela signifie pour vous': 'Comme Llama 3.2 3B, Whisper et Kokoro tournent tous en local, l\'app a besoin d\'espace disque pour stocker les fichiers du modèle. Les besoins exacts en stockage et en RAM ne sont pas publiés par le développeur à la date de rédaction — consultez le site officiel pour les spécifications actuelles avant d\'installer.',
          },
          {
            'Prérequis': 'Internet requis uniquement pour la configuration initiale (selon le développeur)',
            'Ce que cela signifie pour vous': 'Le positionnement « Fully offline. Fully yours » s\'applique aux commandes vocales après configuration. Le premier téléchargement de l\'app et des fichiers du modèle nécessite une connexion internet, comme pour la plupart des apps d\'IA locale.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui Jarvis (Mac) est adapté',
        items: [
          '**Utilisateurs Mac curieux du contrôle vocal sans abonnement cloud.** Si vous voulez essayer de contrôler votre Mac à la voix avec un modèle local plutôt qu\'un assistant cloud, Jarvis (Mac) est conçue spécifiquement pour cela sur macOS.',
          '**Utilisateurs soucieux de confidentialité qui veulent un traitement vocal local.** Comme Whisper, Llama 3.2 3B et Kokoro tournent tous en local selon le positionnement du développeur, les interactions vocales ne transitent pas par une API IA tierce pour le pipeline principal.',
          '**Utilisateurs à l\'aise avec les logiciels d\'un développeur indépendant.** Si évaluer un projet plus modeste, construit avec Lovable, plutôt qu\'un produit commercial doté d\'une équipe de support dédiée vous convient, Jarvis (Mac) est une app raisonnable à tester.',
          '**Propriétaires d\'un Mac Apple Silicon.** Apple Silicon étant recommandé pour exécuter Llama 3.2 3B en local via Metal, les utilisateurs disposant d\'un Mac de la série M sont les mieux placés pour une expérience fluide.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Pour qui Jarvis (Mac) n\'est pas adapté',
        items: [
          '**Utilisateurs ayant besoin de Windows ou Linux.** Jarvis (Mac) est exclusive à macOS. Les utilisateurs d\'autres systèmes d\'exploitation devraient regarder des apps d\'IA locale multiplateformes comme [Loci](/fr/power-local-llm/loci-ai-review-offline-local-ai) ou construire leur propre pipeline.',
          '**Utilisateurs ayant besoin d\'une qualité de raisonnement de pointe.** Llama 3.2 3B est un modèle compact de 3 milliards de paramètres. Il fait face au même plafond lié au nombre de paramètres que les autres petits modèles locaux et ne remplace pas des modèles cloud plus grands pour un raisonnement complexe et en plusieurs étapes.',
          '**Utilisateurs ayant besoin d\'engagements de support entreprise.** S\'agissant d\'un projet indépendant construit sur la plateforme Lovable, Jarvis (Mac) n\'offre pas les SLA de support documentés, les informations d\'entreprise publiées ni la structure de gestion de compte d\'un éditeur commercial financé.',
          '**Utilisateurs voulant choisir leur propre modèle ou personnaliser le pipeline.** Jarvis (Mac) est livrée avec une pile fixe — Whisper, Llama 3.2 3B et Kokoro. Ceux qui veulent changer de modèle, choisir un format de quantification ou personnaliser les couches STT/TTS devraient plutôt construire leur propre pipeline ; voir [Construire un assistant vocal entièrement hors ligne](/fr/power-local-llm/build-local-voice-assistant-2026) pour un guide de A à Z.',
          '**Utilisateurs ayant besoin de garanties de confidentialité ou de sécurité vérifiées par l\'éditeur pour un usage sensible.** Avant d\'utiliser une app indépendante pour des données confidentielles ou réglementées, vérifiez la politique de confidentialité actuelle directement sur le site du développeur — cet avis rapporte le positionnement déclaré par le développeur, pas un audit de confidentialité indépendant.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Jarvis (Mac) face aux alternatives',
        itemHeadings: true,
        columns: ['Option', 'Idéal pour', 'Plateforme', 'Différence clé'],
        rows: [
          {
            'Option': 'Jarvis (Mac)',
            'Idéal pour': 'Essayer un assistant vocal hors ligne clé en main sur macOS',
            'Plateforme': 'macOS 13+ uniquement',
            'Différence clé': 'Pile fixe (Whisper + Llama 3.2 3B + Kokoro) ; projet indépendant construit avec Lovable',
          },
          {
            'Option': 'Loci',
            'Idéal pour': 'Chat local privé multiplateforme',
            'Plateforme': 'iPhone/iPad/Android/Mac/Windows',
            'Différence clé': 'Bibliothèque de modèles curatée plus large ; pas principalement centrée sur les commandes vocales. Voir l\'[avis Loci AI](/fr/power-local-llm/loci-ai-review-offline-local-ai).',
          },
          {
            'Option': 'Pipeline vocal sur mesure',
            'Idéal pour': 'Utilisateurs voulant un contrôle total sur les modèles et le code',
            'Plateforme': 'N\'importe quel OS pour lequel vous le construisez',
            'Différence clé': 'Vous choisissez les composants STT/LLM/TTS et pouvez les changer ; plus d\'effort de configuration. Voir [Construire un assistant vocal entièrement hors ligne](/fr/power-local-llm/build-local-voice-assistant-2026).',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Jarvis (Mac) est-il lié au J.A.R.V.I.S. de Marvel, à Apple ou à Amazon Alexa ?',
            a: 'Non. Jarvis (Mac) est une app macOS indépendante hébergée sur jarvis-mac.lovable.app. Elle n\'a aucune affiliation confirmée avec le personnage d\'IA fictif de Marvel J.A.R.V.I.S., avec Apple, avec Amazon Alexa, ni avec aucun autre produit utilisant également le nom « Jarvis ». Ce nom est partagé par de nombreux produits sans lien entre eux.',
          },
          {
            q: 'Quels modèles Jarvis (Mac) utilise-t-il ?',
            a: 'Jarvis (Mac) utilise Whisper pour la transcription, Llama 3.2 3B (un modèle de langage de 3 milliards de paramètres) pour le raisonnement, et Kokoro pour la synthèse vocale. Les trois tournent en local sur le Mac via le framework GPU Metal d\'Apple, selon l\'architecture déclarée par le développeur.',
          },
          {
            q: 'Jarvis (Mac) fonctionne-t-il sans connexion internet ?',
            a: 'Le positionnement du développeur — « Fully offline. Fully yours » — indique que les commandes vocales fonctionnent en local sans connexion internet une fois l\'app et les modèles installés. Le téléchargement et la configuration initiale nécessitent internet, comme pour la plupart des apps d\'IA locale.',
          },
          {
            q: 'Ai-je besoin d\'une clé API pour utiliser Jarvis (Mac) ?',
            a: 'Non, selon la conception déclarée par le développeur. L\'inférence tournant en local via Llama 3.2 3B sur Apple Metal, Jarvis (Mac) est positionnée comme ne nécessitant ni clé API ni compte auprès d\'un fournisseur d\'IA cloud pour ses fonctions vocales principales.',
          },
          {
            q: 'De quel Mac ai-je besoin pour Jarvis (Mac) ?',
            a: 'Jarvis (Mac) nécessite macOS 13 ou une version ultérieure. Apple Silicon (une puce de la série M) est recommandé, car l\'inférence locale de Llama 3.2 3B via le framework GPU Metal d\'Apple est gourmande en calcul et optimisée pour Apple Silicon, pas pour les Mac Intel plus anciens.',
          },
          {
            q: 'Qui développe Jarvis (Mac) ?',
            a: 'Jarvis (Mac) est construite et hébergée sur la plateforme Lovable, utilisée par des développeurs indépendants pour créer et publier des apps. Aucun nom d\'entreprise, statut de financement ni taille d\'équipe n\'est publiquement confirmé pour ce projet — il doit être évalué comme un projet indépendant, pas comme le produit d\'un grand éditeur commercial.',
          },
          {
            q: 'Combien coûte Jarvis (Mac) ?',
            a: 'Le tarif n\'est pas vérifié de façon indépendante pour cet avis. Consultez le tarif actuel directement sur [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/) avant d\'installer, les apps indépendantes construites sur des plateformes comme Lovable pouvant changer de tarif sans préavis.',
          },
          {
            q: 'Jarvis (Mac) peut-il remplacer Siri ou un assistant vocal cloud ?',
            a: 'Pour les commandes vocales entièrement gérées par son modèle local Llama 3.2 3B, Jarvis (Mac) se positionne comme une alternative hors ligne aux assistants vocaux basés sur le cloud. Elle fait face au même plafond de raisonnement que les autres modèles locaux de 3 milliards de paramètres, elle n\'est donc pas positionnée comme un substitut pour des tâches nécessitant un raisonnement de pointe ou des connaissances web en direct.',
          },
          {
            q: 'En quoi Jarvis (Mac) diffère-t-il de Loci ou d\'un assistant vocal construit soi-même ?',
            a: 'Jarvis (Mac) est exclusive à macOS avec une pile de modèles fixe (Whisper, Llama 3.2 3B, Kokoro) et une configuration minimale. [Loci](/fr/power-local-llm/loci-ai-review-offline-local-ai) couvre cinq plateformes avec une bibliothèque de modèles plus large, mais n\'est pas principalement centrée sur les commandes vocales. Un [pipeline vocal sur mesure](/fr/power-local-llm/build-local-voice-assistant-2026) offre un contrôle total sur les modèles utilisés, au prix d\'une configuration manuelle.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Jarvis (Mac) vaut la peine d\'être essayée si vous cherchez spécifiquement une app macOS permettant de contrôler votre Mac à la voix via un pipeline local Whisper + Llama 3.2 3B + Kokoro, sans conserver de clés API cloud ni de connexion internet pour l\'interaction principale. Ses principaux atouts, selon la conception déclarée par le développeur, sont une pile vocale locale fixe et sans configuration, et l\'accélération GPU Metal d\'Apple sur Apple Silicon. Ses principales limites sont celles de tout modèle local de 3 milliards de paramètres — un plafond de raisonnement plus bas que les modèles cloud de pointe — ainsi que la réalité pratique qu\'il s\'agit d\'un projet développé par une personne seule ou une petite équipe, construit sur la plateforme Lovable, et non par un éditeur commercial financé ; le tarif, le support et les engagements de maintenance à long terme doivent donc être vérifiés directement sur [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/) plutôt que présumés. Ceux qui ont besoin d\'un support multiplateforme ou d\'un contrôle plus poussé du modèle devraient comparer avec [Loci](/fr/power-local-llm/loci-ai-review-offline-local-ai) ou un [pipeline vocal sur mesure](/fr/power-local-llm/build-local-voice-assistant-2026).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site officiel de Jarvis (Mac)](https://jarvis-mac.lovable.app/) — positionnement produit, slogan marketing « Fully offline. Fully yours », détails actuels de l\'app.',
          '[Lovable](https://lovable.dev) — la plateforme de création d\'apps sur laquelle Jarvis (Mac) est construite et hébergée.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecture complémentaire',
        items: [
          '[Avis Loci AI : IA hors ligne pour iPhone, Android, iPad, Mac et Windows](/fr/power-local-llm/loci-ai-review-offline-local-ai) — une comparaison d\'apps d\'IA locale multiplateformes.',
          '[Construire un assistant vocal entièrement hors ligne en 2026 : Whisper + LLM + Piper](/fr/power-local-llm/build-local-voice-assistant-2026) — un guide de A à Z pour choisir sa propre pile STT/LLM/TTS.',
          '[Comparatif Whisper STT local 2026](/fr/power-local-llm/local-whisper-stt-comparison-2026) — un examen approfondi de la couche de transcription utilisée dans des pipelines comme celui-ci.',
          '[TTS local et clonage vocal 2026 : Piper vs Coqui vs XTTS v2](/fr/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — comparaison d\'options de synthèse vocale au-delà de Kokoro.',
          '[Guide des LLM locaux sur Apple Silicon 2026](/fr/local-llms/apple-silicon-local-llm-guide-2026) — contexte sur l\'exécution de modèles locaux via le framework GPU Metal d\'Apple.',
          '[Configurer Ollama sur Mac (Apple Silicon) 2026](/fr/local-llms/ollama-on-mac-apple-silicon-setup-2026) — pour exécuter des modèles locaux sur un Mac en dehors d\'une app packagée comme Jarvis.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/jarvis-mac-review-2026-hero-ja.webp',
    title: 'Jarvis（Mac）レビュー 2026：macOS向けオフライン音声AI',
    seoTitle: 'Jarvis for Mac レビュー2026：オフライン音声AI',
    intro:
      'Jarvis（Mac）— MarvelのフィクションAIやAmazon Alexa、Apple Intelligence、その他「Jarvis」を名乗る製品とは無関係です — は、独立系開発者がLovableというアプリビルダー基盤（jarvis-mac.lovable.appでホスト）上に構築したmacOSアプリです。音声認識にWhisper、推論にローカルのLlama 3.2 3B言語モデル、音声合成にKokoroを使い、これらすべてをApple Metal GPU経由でデバイス上で処理する、フルの音声アシスタント・パイプラインを実行します。開発者が掲げるポジショニングは「Fully offline. Fully yours」— インストール後は、音声やテキストをサーバーへ送信せず、APIキーも不要な状態で音声コマンドを処理します。',
    metaDescription:
      'Jarvis（Mac）レビュー：Whisper STT、ローカルLlama 3.2 3B、Kokoro TTSをApple Metal上で動かす独立系macOSアプリ。要件と向いているユーザーを解説。',
    twitterDescription:
      'Jarvis（Mac）レビュー2026：Llama 3.2 3B、Whisper、Kokoro TTSをApple Metal経由で動かすmacOS向けオフライン音声AI。Lovableで構築された独立系プロジェクト — 期待値、要件、トレードオフ。',
    audience:
      'Macを声でプライベートに操作できる独立系のオンデバイス音声アシスタントを検討しているmacOSユーザー — Llama 3.2 3B／Whisper／Kokoroの固定スタックを持つLovable製アプリが自分に合うか、自作パイプラインやより大きなクロスプラットフォームアプリと比較して判断したい層。',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Jarvis Mac review',
    targetKeywords: [
      'jarvis mac レビュー',
      'jarvis for mac',
      'オフライン音声アシスタント mac',
      'llama 3.2 3b mac metal',
      'whisper kokoro tts mac',
      'プライベート音声ai macos',
      'jarvis ai 音声アシスタント mac',
      'オフラインaiアプリ macos',
    ],
    current_models_mentioned: ['Llama 3.2 3B', 'Whisper', 'Kokoro'],
    current_hardware_mentioned: ['Apple Silicon Mac', 'macOS 13'],
    leadAnswerBlock:
      '**Jarvis（Mac）は、Lovableというアプリビルダー基盤で構築された独立系macOSアプリで、音声パイプライン全体をデバイス上で完結させます：Speech-to-TextにWhisper、推論にローカルのLlama 3.2 3Bモデル、Text-to-SpeechにKokoroを使い、すべてApple Metal GPU経由で処理します。**開発者は「Fully offline. Fully yours」と位置づけており、アプリとモデルの初回セットアップ後は、音声コマンドの処理にインターネット接続もAPIキーも不要です。macOS 13以降で動作し、Llama 3.2 3Bをローカルで実行するにはApple Siliconが推奨されます。資金調達を受けた企業の製品ではなく、Lovable基盤上の個人開発プロジェクトであるため、商用音声AIベンダーより限定的なサポート体制を想定し、重要な用途で利用する前に公式サイトで最新情報を確認してください。',
    quickAnswerTop: {
      ja: {
        question: 'Macのオフライン音声操作にJarvis（Mac）を使うべきか？',
        answer:
          'Llama 3.2 3B + Whisper + Kokoroの固定スタック上で動く、シンプルで設定不要なmacOS向けオフライン音声アシスタントを試したいならJarvis（Mac）を使ってください。ドキュメント化されたエンタープライズサポート窓口が必要な場合、自分でモデルや量子化形式を選びたい場合、WindowsやLinuxでの動作が必要な場合は避けてください — macOS専用で、資金調達を受けたベンダーではなく独立系開発者が開発しています。',
        bullets: [
          '推論にはApple Metal GPU上でLlama 3.2 3Bをローカル実行。',
          'WhisperがSpeech-to-Textを、KokoroがText-to-Speechを担当 — どちらもデバイス上で動作。',
          'セットアップ後は完全オフラインと位置づけ：音声コマンドにインターネットやAPIキーは不要。',
          'macOS 13以降が必須。ローカル推論にはApple Siliconが推奨。',
          '大手商用ベンダーではなく、Lovableアプリビルダー基盤上で独立系開発者が構築・ホストしている — 価格、企業情報、サポート窓口はここでは独自検証していない。',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Jarvis（Mac）とは', anchor: 'what-is-jarvis-mac' },
      { label: 'Jarvis（Mac）の仕組み', anchor: 'how-jarvis-works' },
      { label: 'Lovable製の独立系プロジェクトである点', anchor: 'indie-project-note' },
      { label: 'プラットフォームと要件', anchor: 'platform-requirements' },
      { label: 'Jarvis（Mac）が向いている人', anchor: 'who-should-use' },
      { label: 'Jarvis（Mac）が向いていない人', anchor: 'who-should-not-use' },
      { label: 'Jarvis（Mac）と代替案の比較', anchor: 'vs-alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '重要ポイント',
        isTldr: true,
        items: [
          'Jarvis（Mac）は、Whisper（Speech-to-Text）、Llama 3.2 3B（推論）、Kokoro（Text-to-Speech）をApple Metal GPU経由でデバイス上で実行するmacOS向け音声アシスタントアプリです。',
          '開発者のポジショニングは「Fully offline. Fully yours」— セットアップ後、音声コマンドにインターネット接続やAPIキーは不要です。',
          'macOS 13以降が必須。Llama 3.2 3Bをローカルで実行するにはApple Siliconが推奨されます。',
          '大手商用ベンダーではなく、Lovableアプリビルダー基盤（jarvis-mac.lovable.app）上で独立系開発者が構築・ホストしている — 価格、企業の実体、サポートに関する約束は、公式サイトで確認するまで未検証として扱ってください。',
          'MarvelのフィクションAI「J.A.R.V.I.S.」、Amazon Alexa、Apple Intelligence、その他無関係の「Jarvis」ブランド製品とは無関係です。',
          '本レビューは開発者が示すアーキテクチャとポジショニングを扱っており、独自に測定したベンチマーク、評価、ダウンロード数ではありません — 執筆時点でこれらは公に検証可能ではありません。',
        ],
      },
      whatIsJarvisMac: {
        id: 'what-is-jarvis-mac',
        title: 'Jarvis（Mac）とは',
        content: [
          '**Jarvis（Mac）は、[jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/)で公開されているmacOSアプリで、完全オフラインのAI音声アシスタントと位置づけられています。**アプリビルダー基盤Lovable上で構築・ホストされており、これは独立系開発者がWebやアプリのプロジェクトを構築・公開するために使うツールです — 資金調達を受けた大手AI企業の製品ではありません。',
          '「Jarvis」という名前は、MarvelのフィクションAI「J.A.R.V.I.S.」、同名のビジネスソフトウェア、その他無関係な様々なアプリなど、多くの無関係な製品やフィクションのキャラクターに使われています。本レビューはjarvis-mac.lovable.appのmacOSアプリのみを扱います。Marvel、Apple、Amazon、その他「Jarvis」の名前を使う企業や製品との確認された提携関係はありません。',
          '開発者がこのアプリに掲げるマーケティング上のキャッチフレーズは「Fully offline. Fully yours」です — 音声処理はクラウドサーバーを経由せずMac上でローカルに行われ、セットアップ後はMacを完全にオンデバイスで音声操作できることを意図しています。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Jarvis（Mac）は、Whisperによる音声認識とローカルのLlama 3.2 3Bモデル、Kokoroによる音声合成を組み合わせ、すべてApple Metal GPU上で動作するLovable製の独立系macOSアプリです。',
          },
          {
            type: 'plain-terms',
            text: 'Jarvis（Mac）を使うと、声や文字がマシンの外に出ることなくMacに話しかけて音声で返答を受け取れます — アプリとモデルをインストールすれば、すべてローカルで動作します。',
          },
        ],
      },
      howJarvisWorks: {
        id: 'how-jarvis-works',
        title: 'Jarvis（Mac）の仕組み',
        content: [
          '**Jarvis（Mac）は3つのオンデバイス・コンポーネントを1つの音声パイプラインに組み合わせています。**それぞれが音声インタラクションの異なる段階 — 聞く、考える、話す — を担当し、3つともクラウドAPIを呼び出すのではなくMac上でローカルに動作します。',
        ],
        items: [
          '**Whisper（Speech-to-Text）** — 発話音声をデバイス上でテキストに変換します。Whisperは実績のあるオープンな音声認識モデルで、Jarvisはパイプラインの「聞く」レイヤーとして利用しています。',
          '**Llama 3.2 3B（推論、Apple Metal GPU経由）** — 30億パラメータのローカル言語モデルが、文字起こしされたリクエストの理解と応答生成を担当します。リモートサーバーではなくApple社のMetalフレームワークを介してMacのGPU上で動作するため、セットアップ後に音声コマンドがインターネット接続なしで機能します。',
          '**Kokoro（Text-to-Speech）** — モデルのテキスト応答をデバイス上で音声に戻し、クラウドTTSサービスなしで音声ループを完結させます。',
          '**Macの音声操作** — アプリの目的として掲げられているのは、この各種ローカルパイプラインを使ってユーザーが音声コマンドでMacを操作できるようにすることであり、すべてインストール後は、クラウドAIプロバイダーのAPIキーを保持する必要も、中核となる音声インタラクションのためにインターネット接続を維持する必要もありません。',
        ],
        note: 'このセクションは開発者が示すアーキテクチャとポジショニングを説明したものです。PromptQuorumはJarvis（Mac）のレイテンシ、文字起こし精度、音声コマンドの信頼性を独自に測定していません — 依存する前に自分のハードウェアで現在の動作を確認してください。',
      },
      indieProjectNote: {
        id: 'indie-project-note',
        title: 'Lovable製の独立系プロジェクトである点',
        content: [
          '**Jarvis（Mac）はLovableのサブドメイン（jarvis-mac.lovable.app）でホストされており、資金調達を受けたソフトウェア企業の社内エンジニアリングチームではなく、アプリビルダー基盤Lovableを使って構築されたことを示しています。**これは、このアプリに何を期待すべきかに関わります。',
        ],
        items: [
          '**サポートに対する期待値を調整する。**アプリビルダー基盤上の個人（または小規模チーム）の独立系プロジェクトは、一般的に商用ベンダーよりサポート体制が限定的です — 専任サポートチーム、公開SLA、エンタープライズ窓口がない場合があります。',
          '**機密性の高い用途で利用する前に、主張内容を独自に確認する。**本レビュー執筆時点で、このプロジェクトの企業名、資金調達状況、チーム規模は公に確認されていません。プライバシーとデータ取り扱いに関する主張は、独立監査済みの事実ではなく、公式サイトで確認すべき開発者の発言として扱ってください。',
          '**アプリとドキュメントが今後変化することを見込んでおく。**Lovableのような基盤上で構築された独立系アプリは、URL、価格、機能を含めて急速に変化する可能性があります — インストール前に[jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/)で直接最新状況を確認してください。',
        ],
      },
      platformRequirements: {
        id: 'platform-requirements',
        title: 'プラットフォームと要件',
        itemHeadings: true,
        columns: ['要件', 'ユーザーへの意味'],
        rows: [
          {
            '要件': 'macOS 13以降',
            'ユーザーへの意味': 'Jarvis（Mac）にはmacOS 13（Ventura）以降が必要です。古いmacOSはサポートされていないため、インストール前に「このMacについて」で現在のmacOSバージョンを確認してください。',
          },
          {
            '要件': 'Apple Siliconを推奨',
            'ユーザーへの意味': '開発者はJarvis（Mac）の実行にApple Silicon（Mシリーズチップ）を推奨しています。Llama 3.2 3Bのローカル推論は計算負荷が高く、モデルをデバイス上で実行するApple社のMetal GPUフレームワークは、古いIntel Macではなく Apple Siliconに最適化されています。',
          },
          {
            '要件': 'モデルのローカルストレージ',
            'ユーザーへの意味': 'Llama 3.2 3B、Whisper、Kokoroがすべてローカルで動作するため、アプリはモデルファイルを保存するためのローカルディスク容量を必要とします。執筆時点で開発者は正確なストレージおよびRAM要件を公開していません — インストール前に公式サイトで最新の仕様を確認してください。',
          },
          {
            '要件': '初回セットアップ時のみインターネットが必要（開発者の説明による）',
            'ユーザーへの意味': '「Fully offline. Fully yours」というポジショニングは、セットアップ後の音声コマンドに適用されます。アプリとモデルファイルの初回ダウンロードにはインターネット接続が必要で、これはほとんどのローカルAIアプリの初回セットアップと同様です。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Jarvis（Mac）が向いている人',
        items: [
          '**クラウドサブスクリプションなしの音声操作に興味があるMacユーザー。**クラウドアシスタントではなくローカルモデルでMacを音声操作したいなら、Jarvis（Mac）はmacOS向けにまさにそのために作られています。',
          '**音声処理をローカルで行いたいプライバシー重視のユーザー。**開発者のポジショニングによれば、Whisper、Llama 3.2 3B、Kokoroはすべてデバイス上で動作するため、中核となる音声パイプラインはサードパーティのAI APIを経由しません。',
          '**独立系開発者のソフトウェアを試すことに抵抗がないユーザー。**専任サポートチームを持つ商用製品ではなく、Lovable製の小規模なプロジェクトを評価することに問題がなければ、Jarvis（Mac）は試す価値のあるアプリです。',
          '**Apple Silicon Macの所有者。**Llama 3.2 3BをMetal経由でローカル実行するにはApple Siliconが推奨されるため、Mシリーズ搭載Macのユーザーが最も快適に利用しやすい立場にあります。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Jarvis（Mac）が向いていない人',
        items: [
          '**WindowsやLinuxが必要なユーザー。**Jarvis（Mac）はmacOS専用です。他のOSのユーザーは、[Loci](/ja/power-local-llm/loci-ai-review-offline-local-ai)のようなクロスプラットフォームのローカルAIアプリを検討するか、自分でパイプラインを構築するべきです。',
          '**最高水準の推論品質が必要なユーザー。**Llama 3.2 3Bは30億パラメータのコンパクトなモデルです。他の小型ローカルモデルと同じパラメータ数の上限に直面しており、複雑で複数ステップの推論タスクにおいて大型クラウドモデルの代替にはなりません。',
          '**エンタープライズのサポート保証が必要なユーザー。**Jarvis（Mac）はLovable基盤上に構築された独立系プロジェクトであるため、資金調達を受けた商用ベンダーが提供するような文書化されたサポートSLA、公開された企業情報、アカウント管理体制はありません。',
          '**自分でモデルを選んだり、パイプラインをカスタマイズしたいユーザー。**Jarvis（Mac）はWhisper、Llama 3.2 3B、Kokoroという固定スタックで提供されます。モデルの入れ替え、量子化形式の選択、STT/TTSレイヤーのカスタマイズをしたいユーザーは、代わりに自分でパイプラインを構築すべきです。ゼロから構築するガイドは[完全オフライン音声アシスタントの構築](/ja/power-local-llm/build-local-voice-assistant-2026)を参照してください。',
          '**機密作業のためにベンダーが検証したプライバシーやセキュリティの保証が必要なユーザー。**機密または規制対象のデータに独立系アプリを使う前に、開発者のサイトで最新のプライバシーポリシーを直接確認してください — 本レビューは開発者が示すポジショニングを報告するものであり、独立したプライバシー監査ではありません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Jarvis（Mac）と代替案の比較',
        itemHeadings: true,
        columns: ['選択肢', '最適な用途', 'プラットフォーム', '主な違い'],
        rows: [
          {
            '選択肢': 'Jarvis（Mac）',
            '最適な用途': 'macOS上で完成済みのオフライン音声アシスタントを試す',
            'プラットフォーム': 'macOS 13+のみ',
            '主な違い': '固定スタック（Whisper + Llama 3.2 3B + Kokoro）；Lovable製の独立系プロジェクト',
          },
          {
            '選択肢': 'Loci',
            '最適な用途': 'クロスプラットフォームのプライベートなローカルチャット',
            'プラットフォーム': 'iPhone/iPad/Android/Mac/Windows',
            '主な違い': 'より広いキュレーション済みモデルライブラリを持つが、主に音声コマンドに特化しているわけではない。[Loci AIレビュー](/ja/power-local-llm/loci-ai-review-offline-local-ai)を参照。',
          },
          {
            '選択肢': '自作の音声パイプライン',
            '最適な用途': 'モデルとコードを完全に制御したいユーザー',
            'プラットフォーム': '構築する任意のOS',
            '主な違い': 'STT/LLM/TTSの各コンポーネントを自由に選択・変更できるが、セットアップの手間が増える。[完全オフライン音声アシスタントの構築](/ja/power-local-llm/build-local-voice-assistant-2026)を参照。',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Jarvis（Mac）はMarvelのJ.A.R.V.I.S.、Apple、Amazon Alexaと関係がありますか？',
            a: 'いいえ。Jarvis（Mac）はjarvis-mac.lovable.appでホストされている独立系macOSアプリです。MarvelのフィクションAIキャラクターJ.A.R.V.I.S.、Apple、Amazon Alexa、その他「Jarvis」という名前を使う製品との確認された提携関係はありません。この名前は多くの無関係な製品で共有されています。',
          },
          {
            q: 'Jarvis（Mac）はどのモデルを使っていますか？',
            a: '開発者が示すアーキテクチャによると、Jarvis（Mac）はSpeech-to-TextにWhisper、推論に30億パラメータの言語モデルLlama 3.2 3B、Text-to-SpeechにKokoroを使用しています。3つともApple社のMetal GPUフレームワーク経由でMac上でローカルに動作します。',
          },
          {
            q: 'Jarvis（Mac）はインターネット接続なしで動作しますか？',
            a: '開発者のポジショニング「Fully offline. Fully yours」によれば、アプリとモデルをインストールした後、音声コマンドはインターネット接続なしでデバイス上で動作します。初回のダウンロードとセットアップにはインターネットが必要で、これはほとんどのローカルAIアプリと同様です。',
          },
          {
            q: 'Jarvis（Mac）の利用にAPIキーは必要ですか？',
            a: '開発者が示す設計によれば不要です。推論はApple Metal上でLlama 3.2 3Bを介してローカルで実行されるため、Jarvis（Mac）は中核となる音声機能にAPIキーやクラウドAIプロバイダーのアカウントを必要としないと位置づけられています。',
          },
          {
            q: 'Jarvis（Mac）を実行するにはどのMacが必要ですか？',
            a: 'Jarvis（Mac）にはmacOS 13以降が必要です。Apple社のMetal GPUフレームワーク経由のLlama 3.2 3Bのローカル推論は計算負荷が高く、古いIntel MacではなくApple Siliconに最適化されているため、Apple Silicon（Mシリーズチップ）が推奨されます。',
          },
          {
            q: 'Jarvis（Mac）は誰が作っていますか？',
            a: 'Jarvis（Mac）は、独立系開発者がアプリの構築・公開に使うアプリビルダー基盤Lovable上で構築・ホストされています。このプロジェクトについて、企業名、資金調達状況、チーム規模は公に確認されていません — 大手商用ベンダーの製品ではなく、独立系プロジェクトとして評価すべきです。',
          },
          {
            q: 'Jarvis（Mac）の料金はいくらですか？',
            a: '本レビューでは料金を独自に検証していません。Lovableのような基盤上で構築された独立系アプリは予告なく価格を変更する可能性があるため、インストール前に[jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/)で直接現在の料金を確認してください。',
          },
          {
            q: 'Jarvis（Mac）はSiriやクラウド音声アシスタントの代替になりますか？',
            a: 'ローカルのLlama 3.2 3Bモデルだけで完結する音声コマンドについては、Jarvis（Mac）はクラウドベースの音声アシスタントに対するオフラインの代替として位置づけられています。他の30億パラメータのローカルモデルと同じ推論の上限に直面しているため、最高水準の推論やリアルタイムのウェブ知識が必要なタスクの代替としては位置づけられていません。',
          },
          {
            q: 'Jarvis（Mac）はLociや自作の音声アシスタントとどう違いますか？',
            a: 'Jarvis（Mac）は、固定のモデルスタック（Whisper、Llama 3.2 3B、Kokoro）と最小限のセットアップでmacOS専用です。[Loci](/ja/power-local-llm/loci-ai-review-offline-local-ai)はより広いモデルライブラリで5つのプラットフォームをカバーしますが、主に音声コマンドに特化しているわけではありません。[自作の音声パイプライン](/ja/power-local-llm/build-local-voice-assistant-2026)は、使用するモデルを完全にコントロールできますが、その分手動でのセットアップが必要です。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Jarvis（Mac）は、クラウドAPIキーや中核インタラクションのためのインターネット接続を維持することなく、ローカルのWhisper + Llama 3.2 3B + Kokoroパイプラインを使ってMacを音声操作できるmacOSアプリを特に求めているなら、試す価値があります。開発者が示す設計による主な強みは、固定で設定不要なローカル音声スタックと、Apple SiliconにおけるApple Metal GPUによる高速化です。主な限界は、他の30億パラメータのローカルモデルが直面するものと同じ — 最高水準のクラウドモデルより低い推論の上限 — に加え、資金調達を受けた商用ベンダーではなく、Lovableアプリビルダー基盤上に構築された個人または小規模チームのプロジェクトであるという現実的な事実です。そのため、価格、サポート、長期的な保守への取り組みは、前提とせずに[jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/)で直接確認すべきです。クロスプラットフォーム対応やより深いモデル制御が必要なユーザーは、[Loci](/ja/power-local-llm/loci-ai-review-offline-local-ai)や[自作の音声パイプライン](/ja/power-local-llm/build-local-voice-assistant-2026)と比較検討してください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Jarvis（Mac）公式サイト](https://jarvis-mac.lovable.app/) — 製品のポジショニング、マーケティングのキャッチフレーズ「Fully offline. Fully yours」、現在のアプリの詳細。',
          '[Lovable](https://lovable.dev) — Jarvis（Mac）が構築・ホストされているアプリビルダー基盤。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Loci AIレビュー：iPhone、Android、iPad、Mac、Windows向けオフラインAI](/ja/power-local-llm/loci-ai-review-offline-local-ai) — クロスプラットフォームのオンデバイスAIアプリの比較。',
          '[2026年版 完全オフライン音声アシスタントの構築：Whisper + LLM + Piper](/ja/power-local-llm/build-local-voice-assistant-2026) — 自分でSTT/LLM/TTSスタックを選びたい読者向けのゼロからのガイド。',
          '[2026年版 ローカルWhisper STT比較](/ja/power-local-llm/local-whisper-stt-comparison-2026) — このようなパイプラインで使われる音声認識レイヤーを詳しく解説。',
          '[2026年版 ローカルTTSと音声クローニング：Piper vs Coqui vs XTTS v2](/ja/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Kokoro以外の音声合成の選択肢を比較。',
          '[2026年版 Apple Silicon ローカルLLMガイド](/ja/local-llms/apple-silicon-local-llm-guide-2026) — Apple社のMetal GPUフレームワーク経由でローカルモデルを実行する背景知識。',
          '[2026年版 Mac（Apple Silicon）でのOllamaセットアップ](/ja/local-llms/ollama-on-mac-apple-silicon-setup-2026) — Jarvisのようなパッケージ化されたアプリを使わずにMac上でローカルモデルを実行したい読者向け。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/jarvis-mac-review-2026-hero-zh.webp',
    title: 'Jarvis（Mac）评测 2026：macOS离线语音AI',
    seoTitle: 'Jarvis for Mac 评测2026：离线语音AI应用',
    intro:
      'Jarvis（Mac）——请勿与漫威虚构AI、Amazon Alexa、Apple Intelligence或其他同名为"Jarvis"的产品混淆——是一款由独立开发者基于Lovable应用构建平台开发的macOS应用（托管于jarvis-mac.lovable.app）。它在设备本地运行完整的语音助手管线：Whisper负责语音识别，本地Llama 3.2 3B语言模型负责推理，Kokoro负责文本转语音，全部通过Apple Metal GPU处理。开发者的宣传定位是"Fully offline. Fully yours"——安装后，语音指令的处理无需将音频或文本发送到服务器，也无需API密钥。',
    metaDescription:
      'Jarvis（Mac）评测：一款独立开发的macOS应用，在Apple Metal上运行Whisper STT、本地Llama 3.2 3B和Kokoro TTS。使用要求及适用人群。',
    twitterDescription:
      'Jarvis（Mac）评测2026：基于Llama 3.2 3B、Whisper和Kokoro TTS、通过Apple Metal运行的macOS离线语音AI。Lovable构建的独立项目——预期、要求与权衡。',
    audience:
      '正在评估独立开发的本地语音助手、希望私密地用语音控制Mac的macOS用户——想了解这款基于固定Llama 3.2 3B/Whisper/Kokoro技术栈、由Lovable构建的应用是否适合自己，还是应该自建管线或使用更大的跨平台应用。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Jarvis Mac review',
    targetKeywords: [
      'jarvis mac 评测',
      'jarvis for mac',
      '离线语音助手 mac',
      'llama 3.2 3b mac metal',
      'whisper kokoro tts mac',
      '私密语音ai macos',
      'jarvis ai 语音助手 mac',
      '离线ai应用 macos',
    ],
    current_models_mentioned: ['Llama 3.2 3B', 'Whisper', 'Kokoro'],
    current_hardware_mentioned: ['Apple Silicon Mac', 'macOS 13'],
    leadAnswerBlock:
      '**Jarvis（Mac）是一款由独立开发者使用Lovable应用构建平台开发的macOS应用，在设备本地运行完整的语音管线：Whisper负责语音转文本，本地Llama 3.2 3B模型负责推理，Kokoro负责文本转语音，全部通过Apple Metal GPU处理。**开发者将其定位为"Fully offline. Fully yours"——完成应用和模型的初始设置后，语音指令无需联网也无需API密钥。它可在macOS 13及更高版本上运行，本地运行Llama 3.2 3B推荐使用Apple Silicon。由于这是一个基于Lovable平台的独立开发者项目，而非获得融资的公司产品，用户应预期其支持范围小于商业语音AI厂商，并在用于任何关键场景前，在官方网站核实最新信息。',
    quickAnswerTop: {
      zh: {
        question: '应该使用Jarvis（Mac）来离线语音控制我的Mac吗？',
        answer:
          '如果你想尝试一款基于固定Llama 3.2 3B + Whisper + Kokoro技术栈、简单易用且无需配置的macOS离线语音助手，可以使用Jarvis（Mac）。如果你需要有文档记录的企业支持渠道、想自行选择模型或量化方式，或需要Windows/Linux支持，则不建议使用——它仅支持macOS，且由独立开发者开发，而非获得融资的厂商。',
        bullets: [
          '在Apple Metal GPU上本地运行Llama 3.2 3B进行推理。',
          'Whisper负责语音转文本，Kokoro负责文本转语音——两者均在设备本地运行。',
          '定位为设置完成后完全离线：发出语音指令无需联网或API密钥。',
          '需要macOS 13或更高版本；本地推理推荐使用Apple Silicon。',
          '由独立开发者在Lovable应用构建平台上开发和托管，而非大型商业厂商——本文未对其定价、公司信息和支持渠道进行独立核实。',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'Jarvis（Mac）是什么', anchor: 'what-is-jarvis-mac' },
      { label: 'Jarvis（Mac）如何运作', anchor: 'how-jarvis-works' },
      { label: '这是一个Lovable构建的独立项目', anchor: 'indie-project-note' },
      { label: '平台与系统要求', anchor: 'platform-requirements' },
      { label: '谁适合使用Jarvis（Mac）', anchor: 'who-should-use' },
      { label: '谁不适合使用Jarvis（Mac）', anchor: 'who-should-not-use' },
      { label: 'Jarvis（Mac）与替代方案对比', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '核心要点',
        isTldr: true,
        items: [
          'Jarvis（Mac）是一款macOS语音助手应用，通过Apple Metal GPU在设备本地运行Whisper（语音转文本）、Llama 3.2 3B（推理）和Kokoro（文本转语音）。',
          '开发者的定位是"Fully offline. Fully yours"——设置完成后，语音指令无需联网或API密钥。',
          '需要macOS 13或更高版本；本地运行Llama 3.2 3B推荐使用Apple Silicon。',
          '它由独立开发者在Lovable应用构建平台（jarvis-mac.lovable.app）上开发和托管，而非大型商业厂商——在官方网站核实之前，应将定价、公司身份和支持承诺视为未经验证的信息。',
          '请勿与漫威虚构AI"J.A.R.V.I.S."、Amazon Alexa、Apple Intelligence，或其他同样使用"Jarvis"品牌的无关产品混淆。',
          '本评测涵盖开发者所述的架构和定位，而非独立测量的基准测试、评分或下载量——截至撰写本文时，这些数据均无法公开核实。',
        ],
      },
      whatIsJarvisMac: {
        id: 'what-is-jarvis-mac',
        title: 'Jarvis（Mac）是什么',
        content: [
          '**Jarvis（Mac）是一款macOS应用，可在[jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/)获取，定位为完全离线的AI语音助手。**它基于Lovable应用构建平台开发和托管，这是独立开发者用于构建和发布Web及应用项目的工具——这不是一家获得融资的大型AI公司的产品。',
          '"Jarvis"这一名称被许多无关的产品和虚构角色使用，包括漫威虚构AI角色"J.A.R.V.I.S."、同名商业软件以及各种无关应用。本评测仅涵盖jarvis-mac.lovable.app上的macOS应用。它与漫威、Apple、Amazon或任何其他使用"Jarvis"名称的公司或产品均无已确认的关联。',
          '开发者为该应用打出的宣传标语是"Fully offline. Fully yours"——其表达的意图是语音处理在Mac本地进行，不通过云服务器传输音频或文本，且应用设置完成后可让用户完全在本地通过语音控制Mac。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Jarvis（Mac）是一款Lovable构建的独立macOS应用，将Whisper语音转文本与本地Llama 3.2 3B模型和Kokoro文本转语音结合，全部运行在Apple Metal GPU硬件上。',
          },
          {
            type: 'plain-terms',
            text: 'Jarvis（Mac）让你可以对着Mac说话并听到语音回复，而你的语音或文本不会离开设备——安装好应用和模型后，一切都在本地运行。',
          },
        ],
      },
      howJarvisWorks: {
        id: 'how-jarvis-works',
        title: 'Jarvis（Mac）如何运作',
        content: [
          '**Jarvis（Mac）将三个设备本地组件整合为一个语音管线。**每个组件负责语音交互的不同阶段——聆听、思考和说话——三者均在Mac本地运行，而非调用云端API。',
        ],
        items: [
          '**Whisper（语音转文本）**——在设备本地将语音转换为文本。Whisper是一个成熟的开源语音识别模型；Jarvis将其用作管线的"聆听"层。',
          '**Llama 3.2 3B（推理，通过Apple Metal GPU）**——这个30亿参数的本地语言模型负责理解转录后的请求并生成回复。它通过Apple的Metal框架在Mac的GPU上运行，而非在远程服务器上运行，这正是让语音指令在设置完成后无需联网即可工作的原因。',
          '**Kokoro（文本转语音）**——在设备本地将模型的文本回复转换回语音，完成语音闭环，无需云端TTS服务。',
          '**Mac语音控制**——该应用所述的目的是让用户通过这一本地管线发出语音指令来控制Mac，一旦所有组件安装完毕，就无需为云端AI服务商保留API密钥，也无需为核心语音交互保持联网。',
        ],
        note: '本节描述的是开发者所述的架构和定位。PromptQuorum并未独立测试Jarvis（Mac）的延迟、转录准确性或语音指令可靠性——在依赖它之前，请在自己的硬件上核实当前的实际表现。',
      },
      indieProjectNote: {
        id: 'indie-project-note',
        title: '这是一个Lovable构建的独立项目',
        content: [
          '**Jarvis（Mac）托管在一个Lovable子域名（jarvis-mac.lovable.app）上，这表明它是使用Lovable应用构建平台开发的，而不是由一家获得融资的软件公司的内部工程团队开发的。**这一点关系到你应该对它抱有怎样的预期。',
        ],
        items: [
          '**调整对支持服务的预期。**基于应用构建平台的独立个人（或小团队）项目通常提供的支持范围小于商业厂商——可能没有专职支持团队、公开的服务级别协议（SLA）或企业联系渠道。',
          '**在用于敏感场景前独立核实相关说法。**截至本评测撰写时，该项目的公司名称、融资情况和团队规模均未公开确认；请将隐私和数据处理相关的说法视为需要在官方网站核实的开发者声明，而非经过独立审计的事实。',
          '**预期应用及其文档会不断变化。**基于Lovable等平台构建的独立应用可能迅速变化，包括URL、定价和功能集——安装前请直接访问[jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/)查看当前状态。',
        ],
      },
      platformRequirements: {
        id: 'platform-requirements',
        title: '平台与系统要求',
        itemHeadings: true,
        columns: ['要求', '对你意味着什么'],
        rows: [
          {
            '要求': 'macOS 13或更高版本',
            '对你意味着什么': 'Jarvis（Mac）需要macOS 13（Ventura）或更新版本。安装前请在"关于本机"中确认当前的macOS版本，因为不支持更早的macOS版本。',
          },
          {
            '要求': '推荐使用Apple Silicon',
            '对你意味着什么': '开发者建议使用Apple Silicon（M系列芯片）运行Jarvis（Mac）。Llama 3.2 3B的本地推理计算量较大，而用于在设备本地运行模型的Apple Metal GPU框架针对Apple Silicon做了优化，而非针对较旧的Intel Mac。',
          },
          {
            '要求': '本地模型存储空间',
            '对你意味着什么': '由于Llama 3.2 3B、Whisper和Kokoro均在本地运行，应用需要本地磁盘空间来存储模型文件。截至撰写本文时，开发者尚未公布确切的存储和内存要求——安装前请在官方网站查看当前规格。',
          },
          {
            '要求': '仅初始设置需要联网（据开发者说明）',
            '对你意味着什么': '"Fully offline. Fully yours"的定位适用于设置完成后的语音指令。首次下载应用和模型文件需要联网，这与大多数本地AI应用的首次设置流程一致。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁适合使用Jarvis（Mac）',
        items: [
          '**对无需云订阅的语音控制感兴趣的Mac用户。**如果你想用本地模型而非云端助手来通过语音控制Mac，Jarvis（Mac）正是专为此在macOS上打造的。',
          '**希望本地处理语音的隐私意识用户。**据开发者所述定位，Whisper、Llama 3.2 3B和Kokoro均在设备本地运行，核心管线的语音交互不会经过第三方AI API。',
          '**愿意尝试独立开发者软件的用户。**如果你愿意评估一个由Lovable构建的小型项目，而非拥有专职支持团队的商业产品，Jarvis（Mac）是一款值得测试的应用。',
          '**Apple Silicon Mac的拥有者。**由于本地通过Metal运行Llama 3.2 3B推荐使用Apple Silicon，配备M系列芯片的Mac用户最有可能获得流畅的体验。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不适合使用Jarvis（Mac）',
        items: [
          '**需要Windows或Linux支持的用户。**Jarvis（Mac）仅支持macOS。其他操作系统的用户应考虑[Loci](/zh/power-local-llm/loci-ai-review-offline-local-ai)等跨平台本地AI应用，或自行搭建管线。',
          '**需要顶尖推理质量的用户。**Llama 3.2 3B是一款紧凑的30亿参数模型。它面临与其他小型本地模型相同的参数量上限，在复杂的多步骤推理任务上无法替代更大的云端模型。',
          '**需要企业级支持承诺的用户。**由于Jarvis（Mac）是构建在Lovable平台上的独立项目，它不具备获得融资的商业厂商所提供的成文支持SLA、公开的公司信息或客户管理结构。',
          '**想自行选择模型或定制管线的用户。**Jarvis（Mac）附带的是固定技术栈——Whisper、Llama 3.2 3B和Kokoro。想更换模型、选择量化格式或定制STT/TTS层的用户，应改为自行搭建管线；从零开始的指南请参见[搭建完全离线的语音助手](/zh/power-local-llm/build-local-voice-assistant-2026)。',
          '**从事敏感工作、需要厂商验证的隐私或安全保证的用户。**在将任何独立应用用于机密或受监管数据之前，请直接在开发者网站上核实当前的隐私政策——本评测反映的是开发者所述的定位，而非独立的隐私审计。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Jarvis（Mac）与替代方案对比',
        itemHeadings: true,
        columns: ['选项', '最适合', '平台', '主要差异'],
        rows: [
          {
            '选项': 'Jarvis（Mac）',
            '最适合': '在macOS上尝试一款现成的离线语音助手',
            '平台': '仅限macOS 13+',
            '主要差异': '固定技术栈（Whisper + Llama 3.2 3B + Kokoro）；Lovable构建的独立项目',
          },
          {
            '选项': 'Loci',
            '最适合': '跨平台私密本地聊天',
            '平台': 'iPhone/iPad/Android/Mac/Windows',
            '主要差异': '拥有更广泛的精选模型库；并非主要聚焦语音指令。参见[Loci AI评测](/zh/power-local-llm/loci-ai-review-offline-local-ai)。',
          },
          {
            '选项': '自建语音管线',
            '最适合': '希望完全掌控模型和代码的用户',
            '平台': '你搭建时所选的任意操作系统',
            '主要差异': '可自行选择并更换STT/LLM/TTS组件；设置成本更高。参见[搭建完全离线的语音助手](/zh/power-local-llm/build-local-voice-assistant-2026)。',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Jarvis（Mac）与漫威的J.A.R.V.I.S.、Apple或Amazon Alexa有关吗？',
            a: '没有关系。Jarvis（Mac）是一款独立的macOS应用，托管于jarvis-mac.lovable.app。它与漫威虚构AI角色J.A.R.V.I.S.、Apple、Amazon Alexa或任何其他同样使用"Jarvis"名称的产品均无已确认的关联。这个名称被许多无关产品共用。',
          },
          {
            q: 'Jarvis（Mac）使用了哪些模型？',
            a: '据开发者所述架构，Jarvis（Mac）使用Whisper进行语音转文本，使用30亿参数的语言模型Llama 3.2 3B进行推理，使用Kokoro进行文本转语音。三者均通过Apple的Metal GPU框架在Mac本地运行。',
          },
          {
            q: 'Jarvis（Mac）能在没有网络连接的情况下工作吗？',
            a: '开发者的定位——"Fully offline. Fully yours"——表示在应用和模型安装完成后，语音指令可在设备本地无需联网工作。首次下载和设置需要联网，这与大多数本地AI应用一致。',
          },
          {
            q: '使用Jarvis（Mac）需要API密钥吗？',
            a: '根据开发者所述的设计，不需要。由于推理通过Llama 3.2 3B在Apple Metal上本地运行，Jarvis（Mac）的定位是核心语音功能无需API密钥或云端AI服务商账户。',
          },
          {
            q: '运行Jarvis（Mac）需要什么样的Mac？',
            a: 'Jarvis（Mac）需要macOS 13或更高版本。建议使用Apple Silicon（M系列芯片），因为通过Apple的Metal GPU框架进行Llama 3.2 3B本地推理的计算量较大，且针对Apple Silicon而非较旧的Intel Mac做了优化。',
          },
          {
            q: 'Jarvis（Mac）是谁开发的？',
            a: 'Jarvis（Mac）是在Lovable应用构建平台上开发和托管的，独立开发者使用该平台构建和发布应用。这个项目的公司名称、融资状况和团队规模均未公开确认——应将其视为独立项目来评估，而非大型商业厂商的产品。',
          },
          {
            q: 'Jarvis（Mac）的价格是多少？',
            a: '本评测未对定价进行独立核实。安装前请直接在[jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/)查看当前价格，因为基于Lovable等平台构建的独立应用可能在没有通知的情况下更改定价。',
          },
          {
            q: 'Jarvis（Mac）能取代Siri或云端语音助手吗？',
            a: '对于完全由其本地Llama 3.2 3B模型处理的语音指令，Jarvis（Mac）的定位是云端语音助手的离线替代方案。它面临与其他30亿参数本地模型相同的推理上限，因此并未被定位为需要顶尖推理能力或实时网络知识的任务的替代品。',
          },
          {
            q: 'Jarvis（Mac）与Loci或自建语音助手有什么不同？',
            a: 'Jarvis（Mac）仅支持macOS，采用固定的模型技术栈（Whisper、Llama 3.2 3B、Kokoro），设置极简。[Loci](/zh/power-local-llm/loci-ai-review-offline-local-ai)覆盖五个平台，拥有更广泛的模型库，但并非主要聚焦语音指令。[自建语音管线](/zh/power-local-llm/build-local-voice-assistant-2026)可完全掌控所使用的模型，但代价是需要手动设置。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          '如果你特别想要一款macOS应用，能通过本地Whisper + Llama 3.2 3B + Kokoro管线用语音控制Mac，而无需为核心交互保留云端API密钥或联网，那么Jarvis（Mac）值得一试。据开发者所述设计，其主要优势在于固定、无需配置的本地语音技术栈，以及在Apple Silicon上由Apple Metal GPU提供的加速。其主要局限与任何30亿参数本地模型相同——推理上限低于顶尖云端模型——再加上一个现实情况：它是一个基于Lovable应用构建平台的个人或小团队项目，而非获得融资的商业厂商，因此定价、支持和长期维护承诺应直接在[jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/)核实，而非想当然地假设。需要跨平台支持或更深入模型控制的用户，应将其与[Loci](/zh/power-local-llm/loci-ai-review-offline-local-ai)或[自建语音管线](/zh/power-local-llm/build-local-voice-assistant-2026)进行比较。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Jarvis（Mac）官方网站](https://jarvis-mac.lovable.app/)——产品定位、宣传标语"Fully offline. Fully yours"、当前应用详情。',
          '[Lovable](https://lovable.dev)——Jarvis（Mac）所构建和托管的应用构建平台。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Loci AI评测：面向iPhone、Android、iPad、Mac和Windows的离线AI](/zh/power-local-llm/loci-ai-review-offline-local-ai)——一款跨平台设备端AI应用的对比评测。',
          '[2026年搭建完全离线的语音助手：Whisper + LLM + Piper](/zh/power-local-llm/build-local-voice-assistant-2026)——面向想自行选择STT/LLM/TTS技术栈读者的从零开始指南。',
          '[2026年本地Whisper STT对比](/zh/power-local-llm/local-whisper-stt-comparison-2026)——深入了解此类管线中使用的语音转文本层。',
          '[2026年本地TTS与语音克隆：Piper vs Coqui vs XTTS v2](/zh/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)——Kokoro之外的文本转语音选项对比。',
          '[2026年Apple Silicon本地LLM指南](/zh/local-llms/apple-silicon-local-llm-guide-2026)——关于通过Apple Metal GPU框架运行本地模型的背景知识。',
          '[2026年在Mac（Apple Silicon）上设置Ollama](/zh/local-llms/ollama-on-mac-apple-silicon-setup-2026)——面向想在Mac上不使用Jarvis这类打包应用而运行本地模型的读者。',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/jarvis-mac-review-2026-hero-pt.webp',
    title: 'Jarvis (Mac) Review 2026: IA de voz offline para macOS',
    seoTitle: 'Jarvis para Mac Review 2026: IA de voz offline',
    intro:
      'O Jarvis (Mac) — que não deve ser confundido com a IA fictícia da Marvel, a Amazon Alexa, a Apple Intelligence ou qualquer outro produto também chamado "Jarvis" — é um app de macOS criado por um desenvolvedor independente na plataforma de criação de apps Lovable (hospedado em jarvis-mac.lovable.app). Ele executa um pipeline completo de assistente de voz no dispositivo: Whisper para reconhecimento de fala, um modelo de linguagem local Llama 3.2 3B para raciocínio, e Kokoro para conversão de texto em fala, tudo processado via GPU Metal da Apple. O posicionamento declarado pelo desenvolvedor é "Fully offline. Fully yours" — depois de instalado, os comandos de voz são processados sem enviar áudio ou texto a um servidor, e sem exigir uma chave de API.',
    metaDescription:
      'Jarvis (Mac) review: um app de macOS independente com Whisper STT, Llama 3.2 3B local e Kokoro TTS no Apple Metal. Requisitos e para quem é indicado.',
    twitterDescription:
      'Jarvis (Mac) review 2026: IA de voz offline para macOS com Llama 3.2 3B, Whisper e Kokoro TTS via Apple Metal. Projeto independente criado com Lovable — expectativas, requisitos e limitações.',
    audience:
      'Usuários de macOS avaliando um assistente de voz local e independente para controlar o Mac por voz de forma privada — decidindo se um app criado com Lovable, com um stack fixo de Llama 3.2 3B/Whisper/Kokoro, atende às suas necessidades em comparação a construir um pipeline próprio ou usar um app multiplataforma maior.',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Jarvis Mac review',
    targetKeywords: [
      'jarvis mac review',
      'jarvis para mac',
      'assistente de voz offline mac',
      'llama 3.2 3b mac metal',
      'whisper kokoro tts mac',
      'ia de voz privada macos',
      'jarvis ia assistente de voz mac',
      'app de ia offline macos',
    ],
    current_models_mentioned: ['Llama 3.2 3B', 'Whisper', 'Kokoro'],
    current_hardware_mentioned: ['Apple Silicon Mac', 'macOS 13'],
    leadAnswerBlock:
      '**O Jarvis (Mac) é um app de macOS independente, criado com a plataforma Lovable, que executa um pipeline de voz completo no dispositivo: Whisper para speech-to-text, um modelo local Llama 3.2 3B para raciocínio, e Kokoro para text-to-speech, tudo processado via GPU Metal da Apple.** O desenvolvedor o posiciona como "Fully offline. Fully yours" — após a configuração inicial do app e do modelo, os comandos de voz não exigem conexão com a internet nem uma chave de API. Ele funciona a partir do macOS 13, com Apple Silicon recomendado para executar o Llama 3.2 3B localmente. Por se tratar de um projeto de um único desenvolvedor hospedado na plataforma Lovable, e não de um produto de uma empresa com investimento, espere um suporte mais limitado do que o de fornecedores comerciais de IA de voz, e verifique os detalhes atuais no site oficial antes de usá-lo para algo crítico.',
    quickAnswerTop: {
      pt: {
        question: 'Devo usar o Jarvis (Mac) para controlar meu Mac por voz offline?',
        answer:
          'Use o Jarvis (Mac) se quiser experimentar um assistente de voz offline simples e sem configuração para macOS, construído sobre um stack fixo de Llama 3.2 3B + Whisper + Kokoro. Evite-o se precisar de um canal de suporte empresarial documentado, quiser escolher seu próprio modelo ou quantização, ou precisar de suporte para Windows ou Linux — ele é exclusivo para macOS e é desenvolvido por um desenvolvedor independente, não por um fornecedor com investimento.',
        bullets: [
          'Executa o Llama 3.2 3B localmente na GPU Metal da Apple para o raciocínio.',
          'O Whisper cuida do speech-to-text; o Kokoro cuida do text-to-speech — ambos rodam localmente.',
          'Posicionado como totalmente offline após a configuração: não exige internet ou chave de API para emitir comandos de voz.',
          'Requer macOS 13 ou posterior; Apple Silicon é recomendado para a inferência local.',
          'Criado e hospedado na plataforma Lovable por um desenvolvedor independente, não por um grande fornecedor comercial — preço, dados da empresa e canais de suporte não foram verificados de forma independente aqui.',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Jarvis (Mac)', anchor: 'what-is-jarvis-mac' },
      { label: 'Como o Jarvis (Mac) funciona', anchor: 'how-jarvis-works' },
      { label: 'É um projeto independente criado com Lovable', anchor: 'indie-project-note' },
      { label: 'Plataforma e requisitos', anchor: 'platform-requirements' },
      { label: 'Para quem o Jarvis (Mac) é indicado', anchor: 'who-should-use' },
      { label: 'Para quem o Jarvis (Mac) não é indicado', anchor: 'who-should-not-use' },
      { label: 'Jarvis (Mac) x alternativas', anchor: 'vs-alternatives' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leitura relacionada', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Pontos principais',
        isTldr: true,
        items: [
          'O Jarvis (Mac) é um app de assistente de voz para macOS que executa Whisper (speech-to-text), Llama 3.2 3B (raciocínio) e Kokoro (text-to-speech) localmente via GPU Metal da Apple.',
          'O posicionamento do desenvolvedor é "Fully offline. Fully yours" — após a configuração, os comandos de voz não exigem conexão com a internet nem chave de API.',
          'Requer macOS 13 ou posterior; Apple Silicon é recomendado para executar o Llama 3.2 3B localmente.',
          'Ele é criado e hospedado na plataforma Lovable (jarvis-mac.lovable.app) por um desenvolvedor independente, não por um grande fornecedor comercial — trate preço, identidade da empresa e compromissos de suporte como não verificados até checar no site oficial.',
          'Não deve ser confundido com a IA fictícia da Marvel J.A.R.V.I.S., a Amazon Alexa, a Apple Intelligence ou qualquer outro produto sem relação também chamado "Jarvis".',
          'Esta review cobre a arquitetura e o posicionamento declarados pelo desenvolvedor, não benchmarks, avaliações ou números de download medidos de forma independente — nenhum desses dados é publicamente verificável para este app no momento da redação.',
        ],
      },
      whatIsJarvisMac: {
        id: 'what-is-jarvis-mac',
        title: 'O que é o Jarvis (Mac)',
        content: [
          '**O Jarvis (Mac) é um aplicativo de macOS, disponível em [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/), que se posiciona como um assistente de voz de IA totalmente offline.** Ele é criado e hospedado na plataforma de criação de apps Lovable, uma ferramenta que desenvolvedores independentes usam para construir e publicar projetos web e de aplicativos — não é um produto de uma grande empresa de IA com investimento.',
          'O nome "Jarvis" é usado por muitos produtos e personagens fictícios sem relação entre si, incluindo a IA fictícia da Marvel J.A.R.V.I.S., softwares empresariais com o mesmo nome e diversos apps não relacionados. Esta review cobre apenas o app de macOS em jarvis-mac.lovable.app. Ele não tem nenhuma afiliação confirmada com a Marvel, a Apple, a Amazon ou qualquer outra empresa ou produto que use o nome "Jarvis".',
          'O slogan de marketing do desenvolvedor para o app é "Fully offline. Fully yours" — a intenção declarada é que o processamento de voz aconteça localmente no Mac, sem enviar áudio ou texto por um servidor na nuvem, e que o app permita controlar o Mac por voz totalmente no dispositivo depois de configurado.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Jarvis (Mac) é um app de macOS independente, criado com Lovable, que combina speech-to-text do Whisper com um modelo local Llama 3.2 3B e text-to-speech do Kokoro, rodando inteiramente em hardware com GPU Metal da Apple.',
          },
          {
            type: 'plain-terms',
            text: 'O Jarvis (Mac) permite que você fale com seu Mac e ouça uma resposta falada sem que sua voz ou texto saiam da máquina — depois de instalar o app e o modelo, tudo roda localmente.',
          },
        ],
      },
      howJarvisWorks: {
        id: 'how-jarvis-works',
        title: 'Como o Jarvis (Mac) funciona',
        content: [
          '**O Jarvis (Mac) combina três componentes locais em um único pipeline de voz.** Cada componente cuida de uma etapa diferente da interação por voz — ouvir, pensar e falar — e os três rodam localmente no Mac em vez de chamar uma API na nuvem.',
        ],
        items: [
          '**Whisper (speech-to-text)** — converte o áudio falado em texto no dispositivo. O Whisper é um modelo de reconhecimento de voz open source consolidado; o Jarvis o usa como a camada de escuta do pipeline.',
          '**Llama 3.2 3B (raciocínio, via GPU Metal da Apple)** — um modelo de linguagem local de 3 bilhões de parâmetros cuida do entendimento da solicitação transcrita e da geração da resposta. Ele roda na GPU do Mac por meio do framework Metal da Apple, em vez de em um servidor remoto, o que permite que os comandos de voz funcionem sem conexão com a internet após a configuração.',
          '**Kokoro (text-to-speech)** — converte a resposta em texto do modelo de volta em áudio falado no dispositivo, completando o ciclo de voz sem um serviço de TTS na nuvem.',
          '**Controle de voz do Mac** — o propósito declarado do app é permitir que o usuário emita comandos de voz para controlar seu Mac usando esse pipeline local, sem precisar manter chaves de API para um provedor de IA na nuvem nem manter uma conexão com a internet para a interação de voz principal depois que tudo estiver instalado.',
        ],
        note: 'Esta seção descreve a arquitetura e o posicionamento conforme declarados pelo desenvolvedor. A PromptQuorum não testou de forma independente a latência, a precisão de transcrição ou a confiabilidade dos comandos de voz do Jarvis (Mac) — verifique o comportamento atual no seu próprio hardware antes de confiar nele.',
      },
      indieProjectNote: {
        id: 'indie-project-note',
        title: 'É um projeto independente criado com Lovable',
        content: [
          '**O Jarvis (Mac) está hospedado em um subdomínio da Lovable (jarvis-mac.lovable.app), o que indica que foi criado usando a plataforma Lovable em vez de uma equipe de engenharia interna de uma empresa de software com investimento.** Isso importa para o que você deve esperar dele.',
        ],
        items: [
          '**Ajuste as expectativas de suporte.** Um projeto independente de um único desenvolvedor (ou equipe pequena) criado em uma plataforma de criação de apps costuma ter um suporte mais limitado do que um fornecedor comercial — pode não haver equipe de suporte dedicada, SLA publicado ou contato empresarial.',
          '**Verifique as afirmações de forma independente antes de usar para algo sensível.** No momento desta review, não há nome de empresa, financiamento nem tamanho de equipe confirmados publicamente para este projeto; trate as afirmações sobre privacidade e tratamento de dados como declarações do desenvolvedor a serem verificadas no site oficial, não como fatos auditados de forma independente.',
          '**Espere que o app e sua documentação evoluam.** Apps independentes criados em plataformas como a Lovable podem mudar rapidamente, incluindo URL, preço e conjunto de funcionalidades — verifique diretamente em [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/) o estado atual antes de instalar.',
        ],
      },
      platformRequirements: {
        id: 'platform-requirements',
        title: 'Plataforma e requisitos',
        itemHeadings: true,
        columns: ['Requisito', 'O que isso significa para você'],
        rows: [
          {
            'Requisito': 'macOS 13 ou posterior',
            'O que isso significa para você': 'O Jarvis (Mac) exige macOS 13 (Ventura) ou uma versão mais recente. Confirme sua versão atual do macOS em "Sobre este Mac" antes de instalar, já que versões mais antigas do macOS não são compatíveis.',
          },
          {
            'Requisito': 'Apple Silicon recomendado',
            'O que isso significa para você': 'O desenvolvedor recomenda Apple Silicon (um chip da série M) para rodar o Jarvis (Mac). A inferência local do Llama 3.2 3B exige bastante processamento, e o framework de GPU Metal da Apple — usado para rodar o modelo no dispositivo — é otimizado para Apple Silicon, não para Macs Intel mais antigos.',
          },
          {
            'Requisito': 'Armazenamento local do modelo',
            'O que isso significa para você': 'Como o Llama 3.2 3B, o Whisper e o Kokoro rodam todos localmente, o app precisa de espaço em disco local para armazenar os arquivos do modelo. Requisitos exatos de armazenamento e RAM não são divulgados pelo desenvolvedor no momento da redação — verifique as especificações atuais no site oficial antes de instalar.',
          },
          {
            'Requisito': 'Internet apenas para a configuração inicial (segundo o desenvolvedor)',
            'O que isso significa para você': 'O posicionamento "Fully offline. Fully yours" se aplica aos comandos de voz após a configuração. Baixar o app e os arquivos do modelo pela primeira vez exige conexão com a internet, como na maioria dos apps de IA local.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o Jarvis (Mac) é indicado',
        items: [
          '**Usuários de Mac curiosos sobre controle por voz sem assinatura na nuvem.** Se você quer experimentar controlar seu Mac por voz usando um modelo local em vez de um assistente na nuvem, o Jarvis (Mac) foi construído especificamente para isso no macOS.',
          '**Usuários preocupados com privacidade que querem o processamento de voz local.** Como Whisper, Llama 3.2 3B e Kokoro rodam todos no dispositivo, segundo o posicionamento do desenvolvedor, as interações de voz não passam por uma API de IA de terceiros no pipeline principal.',
          '**Usuários dispostos a experimentar software de um desenvolvedor independente.** Se você não se importa em avaliar um projeto menor, criado com Lovable, em vez de um produto comercial com equipe de suporte dedicada, o Jarvis (Mac) é um app razoável para testar.',
          '**Proprietários de Mac com Apple Silicon.** Como o Apple Silicon é recomendado para rodar o Llama 3.2 3B localmente via Metal, usuários com um Mac de chip da série M estão em melhor posição para ter uma experiência tranquila.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o Jarvis (Mac) não é indicado',
        items: [
          '**Usuários que precisam de suporte a Windows ou Linux.** O Jarvis (Mac) é exclusivo para macOS. Usuários de outros sistemas operacionais devem procurar apps de IA local multiplataforma como o [Loci](/pt/power-local-llm/loci-ai-review-offline-local-ai) ou construir um pipeline próprio.',
          '**Usuários que precisam de qualidade de raciocínio de ponta.** O Llama 3.2 3B é um modelo compacto de 3 bilhões de parâmetros. Ele enfrenta o mesmo teto de contagem de parâmetros de outros modelos locais pequenos e não substitui modelos maiores na nuvem em tarefas de raciocínio complexo e de múltiplas etapas.',
          '**Usuários que precisam de compromissos de suporte empresarial.** Por ser um projeto independente construído na plataforma Lovable, o Jarvis (Mac) não oferece os SLAs de suporte documentados, os dados de empresa publicados nem a estrutura de gestão de contas de um fornecedor comercial com investimento.',
          '**Usuários que querem escolher seu próprio modelo ou personalizar o pipeline.** O Jarvis (Mac) vem com um stack fixo — Whisper, Llama 3.2 3B e Kokoro. Quem quiser trocar de modelo, escolher formatos de quantização ou personalizar as camadas de STT/TTS deve, em vez disso, construir um pipeline próprio; veja [Construa um assistente de voz totalmente offline](/pt/power-local-llm/build-local-voice-assistant-2026) para um guia do zero.',
          '**Usuários que precisam de garantias de privacidade ou segurança verificadas pelo fornecedor para trabalho sensível.** Antes de usar qualquer app independente para dados confidenciais ou regulados, verifique a política de privacidade atual diretamente no site do desenvolvedor — esta review relata o posicionamento declarado pelo desenvolvedor, não uma auditoria de privacidade independente.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Jarvis (Mac) x alternativas',
        itemHeadings: true,
        columns: ['Opção', 'Melhor para', 'Plataforma', 'Diferença principal'],
        rows: [
          {
            'Opção': 'Jarvis (Mac)',
            'Melhor para': 'Experimentar um assistente de voz offline pronto no macOS',
            'Plataforma': 'Apenas macOS 13+',
            'Diferença principal': 'Stack fixo (Whisper + Llama 3.2 3B + Kokoro); projeto independente criado com Lovable',
          },
          {
            'Opção': 'Loci',
            'Melhor para': 'Chat privado local multiplataforma',
            'Plataforma': 'iPhone/iPad/Android/Mac/Windows',
            'Diferença principal': 'Biblioteca de modelos selecionada mais ampla; não é focado principalmente em comandos de voz. Veja a [review do Loci AI](/pt/power-local-llm/loci-ai-review-offline-local-ai).',
          },
          {
            'Opção': 'Pipeline de voz próprio',
            'Melhor para': 'Usuários que querem controle total sobre modelos e código',
            'Plataforma': 'Qualquer SO para o qual você construir',
            'Diferença principal': 'Você escolhe os componentes de STT/LLM/TTS e pode trocá-los; mais esforço de configuração. Veja [Construa um assistente de voz totalmente offline](/pt/power-local-llm/build-local-voice-assistant-2026).',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Jarvis (Mac) tem relação com o J.A.R.V.I.S. da Marvel, a Apple ou a Amazon Alexa?',
            a: 'Não. O Jarvis (Mac) é um app de macOS independente hospedado em jarvis-mac.lovable.app. Ele não tem nenhuma afiliação confirmada com o personagem fictício de IA da Marvel J.A.R.V.I.S., com a Apple, com a Amazon Alexa, nem com qualquer outro produto que também use o nome "Jarvis". O nome é compartilhado por muitos produtos sem relação entre si.',
          },
          {
            q: 'Quais modelos o Jarvis (Mac) usa?',
            a: 'O Jarvis (Mac) usa o Whisper para speech-to-text, o Llama 3.2 3B (um modelo de linguagem de 3 bilhões de parâmetros) para raciocínio, e o Kokoro para text-to-speech. Os três rodam localmente no Mac via o framework de GPU Metal da Apple, segundo a arquitetura declarada pelo desenvolvedor.',
          },
          {
            q: 'O Jarvis (Mac) funciona sem conexão com a internet?',
            a: 'O posicionamento do desenvolvedor — "Fully offline. Fully yours" — afirma que os comandos de voz funcionam no dispositivo sem conexão com a internet depois que o app e os modelos são instalados. O download e a configuração iniciais exigem internet, como na maioria dos apps de IA local.',
          },
          {
            q: 'Preciso de uma chave de API para usar o Jarvis (Mac)?',
            a: 'Não, de acordo com o design declarado pelo desenvolvedor. Como a inferência roda localmente via Llama 3.2 3B no Apple Metal, o Jarvis (Mac) é posicionado como um app que não exige chave de API nem conta com um provedor de IA na nuvem para suas funções de voz principais.',
          },
          {
            q: 'De qual Mac preciso para rodar o Jarvis (Mac)?',
            a: 'O Jarvis (Mac) exige macOS 13 ou posterior. Apple Silicon (um chip da série M) é recomendado, já que a inferência local do Llama 3.2 3B via o framework de GPU Metal da Apple exige bastante processamento e é otimizada para Apple Silicon, não para Macs Intel mais antigos.',
          },
          {
            q: 'Quem desenvolve o Jarvis (Mac)?',
            a: 'O Jarvis (Mac) é criado e hospedado na plataforma Lovable, que desenvolvedores independentes usam para construir e publicar apps. Nenhum nome de empresa, status de financiamento ou tamanho de equipe é confirmado publicamente para este projeto — ele deve ser avaliado como um projeto independente, não como um produto de um grande fornecedor comercial.',
          },
          {
            q: 'Quanto custa o Jarvis (Mac)?',
            a: 'O preço não foi verificado de forma independente para esta review. Confira o preço atual diretamente em [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/) antes de instalar, já que apps independentes criados em plataformas como a Lovable podem mudar de preço sem aviso.',
          },
          {
            q: 'O Jarvis (Mac) pode substituir a Siri ou um assistente de voz na nuvem?',
            a: 'Para comandos de voz tratados inteiramente pelo seu modelo local Llama 3.2 3B, o Jarvis (Mac) é posicionado como uma alternativa offline aos assistentes de voz baseados na nuvem. Ele enfrenta o mesmo teto de raciocínio de outros modelos locais de 3 bilhões de parâmetros, então não é posicionado como substituto para tarefas que exigem raciocínio de ponta ou conhecimento de web em tempo real.',
          },
          {
            q: 'Qual a diferença entre o Jarvis (Mac) e o Loci ou um assistente de voz construído do zero?',
            a: 'O Jarvis (Mac) é exclusivo para macOS, com um stack de modelos fixo (Whisper, Llama 3.2 3B, Kokoro) e configuração mínima. O [Loci](/pt/power-local-llm/loci-ai-review-offline-local-ai) cobre cinco plataformas com uma biblioteca de modelos mais ampla, mas não é focado principalmente em comandos de voz. Um [pipeline de voz próprio](/pt/power-local-llm/build-local-voice-assistant-2026) oferece controle total sobre quais modelos usar, ao custo de uma configuração manual.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Jarvis (Mac) vale a pena experimentar se você quer especificamente um app de macOS que permita controlar seu Mac por voz usando um pipeline local de Whisper + Llama 3.2 3B + Kokoro, sem manter chaves de API na nuvem ou conexão com a internet para a interação principal. Seus principais pontos fortes, segundo o design declarado pelo desenvolvedor, são um stack de voz local fixo e sem configuração, e a aceleração por GPU Metal da Apple em Apple Silicon. Suas principais limitações são as mesmas de qualquer modelo local de 3 bilhões de parâmetros — um teto de raciocínio mais baixo do que modelos de ponta na nuvem — somadas à realidade prática de ser um projeto de um único desenvolvedor ou equipe pequena, construído na plataforma Lovable, e não um fornecedor comercial com investimento; por isso, preço, suporte e compromissos de manutenção de longo prazo devem ser verificados diretamente em [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/), em vez de presumidos. Usuários que precisam de suporte multiplataforma ou controle mais profundo do modelo devem comparar com o [Loci](/pt/power-local-llm/loci-ai-review-offline-local-ai) ou um [pipeline de voz próprio](/pt/power-local-llm/build-local-voice-assistant-2026).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site oficial do Jarvis (Mac)](https://jarvis-mac.lovable.app/) — posicionamento do produto, slogan de marketing "Fully offline. Fully yours", detalhes atuais do app.',
          '[Lovable](https://lovable.dev) — a plataforma de criação de apps na qual o Jarvis (Mac) é construído e hospedado.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Review do Loci AI: IA offline para iPhone, Android, iPad, Mac e Windows](/pt/power-local-llm/loci-ai-review-offline-local-ai) — uma comparação de apps de IA local multiplataforma.',
          '[Construa um assistente de voz totalmente offline em 2026: Whisper + LLM + Piper](/pt/power-local-llm/build-local-voice-assistant-2026) — um guia do zero para quem quiser escolher seu próprio stack de STT/LLM/TTS.',
          '[Comparativo de Whisper STT local 2026](/pt/power-local-llm/local-whisper-stt-comparison-2026) — um olhar mais de perto sobre a camada de speech-to-text usada em pipelines como este.',
          '[TTS local e clonagem de voz 2026: Piper vs Coqui vs XTTS v2](/pt/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — comparação de opções de text-to-speech além do Kokoro.',
          '[Guia de LLM local em Apple Silicon 2026](/pt/local-llms/apple-silicon-local-llm-guide-2026) — contexto sobre como rodar modelos locais via o framework de GPU Metal da Apple.',
          '[Configurar o Ollama no Mac (Apple Silicon) 2026](/pt/local-llms/ollama-on-mac-apple-silicon-setup-2026) — para quem quiser rodar modelos locais em um Mac fora de um app empacotado como o Jarvis.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/jarvis-mac-review-2026-hero-ar.webp',
    title: 'مراجعة Jarvis (Mac) 2026: مساعد صوتي يعمل بدون إنترنت لنظام macOS',
    seoTitle: 'مراجعة Jarvis for Mac 2026: ذكاء صوتي أوفلاين',
    intro:
      'تطبيق Jarvis (Mac) — ولا ينبغي الخلط بينه وبين الذكاء الاصطناعي الخيالي من Marvel، أو Amazon Alexa، أو Apple Intelligence، أو أي منتج آخر يحمل اسم "Jarvis" — هو تطبيق macOS طوّره مطوّر مستقل باستخدام منصة بناء التطبيقات Lovable (مستضاف على jarvis-mac.lovable.app). يشغّل خط معالجة كامل للمساعد الصوتي على الجهاز نفسه: Whisper للتعرف على الكلام، ونموذج لغوي محلي Llama 3.2 3B للاستدلال، وKokoro لتحويل النص إلى كلام، وتتم معالجة كل ذلك عبر معالج Metal الرسومي من Apple. الموقع التسويقي المعلن من المطوّر هو "Fully offline. Fully yours" — فبعد التثبيت، تُعالَج الأوامر الصوتية دون إرسال الصوت أو النص إلى خادم، ودون الحاجة إلى مفتاح API.',
    metaDescription:
      'مراجعة Jarvis (Mac): تطبيق macOS مستقل يشغّل Whisper STT وLlama 3.2 3B محليًا وKokoro TTS عبر Apple Metal. المتطلبات ومن يناسبه هذا التطبيق.',
    twitterDescription:
      'مراجعة Jarvis (Mac) 2026: مساعد صوتي أوفلاين لنظام macOS مبني على Llama 3.2 3B وWhisper وKokoro TTS عبر Apple Metal. مشروع مستقل بُني باستخدام Lovable — التوقعات والمتطلبات والمقايضات.',
    audience:
      'مستخدمو macOS الذين يقيّمون مساعدًا صوتيًا محليًا ومستقلًا للتحكم الصوتي الخاص في أجهزة Mac الخاصة بهم — ويريدون معرفة ما إذا كان تطبيق بُني باستخدام Lovable بحزمة ثابتة من Llama 3.2 3B وWhisper وKokoro يناسبهم، مقارنة ببناء خط معالجة خاص بهم أو استخدام تطبيق أكبر يعمل على منصات متعددة.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Jarvis Mac review',
    targetKeywords: [
      'مراجعة jarvis mac',
      'jarvis for mac',
      'مساعد صوتي أوفلاين mac',
      'llama 3.2 3b mac metal',
      'whisper kokoro tts mac',
      'ذكاء صوتي خاص macos',
      'jarvis ai مساعد صوتي mac',
      'تطبيق ذكاء اصطناعي أوفلاين macos',
    ],
    current_models_mentioned: ['Llama 3.2 3B', 'Whisper', 'Kokoro'],
    current_hardware_mentioned: ['Apple Silicon Mac', 'macOS 13'],
    leadAnswerBlock:
      '**تطبيق Jarvis (Mac) هو تطبيق macOS مستقل، بُني باستخدام منصة بناء التطبيقات Lovable، يشغّل خط معالجة صوتي كامل على الجهاز: Whisper لتحويل الكلام إلى نص، ونموذج محلي Llama 3.2 3B للاستدلال، وKokoro لتحويل النص إلى كلام، وتتم معالجة كل ذلك عبر معالج Metal الرسومي من Apple.** يضع المطوّر التطبيق في موقع "Fully offline. Fully yours" — فبعد الإعداد الأولي للتطبيق والنموذج، لا تحتاج الأوامر الصوتية إلى اتصال بالإنترنت أو مفتاح API. يعمل التطبيق ابتداءً من macOS 13، ويُنصح باستخدام Apple Silicon لتشغيل Llama 3.2 3B محليًا. وبما أن هذا مشروع مطوّر واحد مستضاف على منصة Lovable، وليس منتجًا لشركة ممولة، فتوقّع نطاق دعم أصغر من مزوّدي الذكاء الاصطناعي الصوتي التجاريين، وتحقق من التفاصيل الحالية على الموقع الرسمي قبل الاعتماد عليه في أي استخدام حساس.',
    quickAnswerTop: {
      ar: {
        question: 'هل يجب أن أستخدم Jarvis (Mac) للتحكم الصوتي في جهاز Mac الخاص بي دون إنترنت؟',
        answer:
          'استخدم Jarvis (Mac) إذا كنت تريد تجربة مساعد صوتي بسيط وبدون إعداد يعمل دون إنترنت على macOS، مبني على حزمة ثابتة من Llama 3.2 3B وWhisper وKokoro. تجنّبه إذا كنت بحاجة إلى قناة دعم مؤسسي موثّقة، أو تريد اختيار النموذج أو صيغة الضغط الخاصة بك، أو تحتاج إلى دعم Windows أو Linux — فهو حصري لنظام macOS ويطوّره مطوّر مستقل، وليس مزوّدًا ممولًا.',
        bullets: [
          'يشغّل Llama 3.2 3B محليًا على معالج Metal الرسومي من Apple لأغراض الاستدلال.',
          'يتولى Whisper تحويل الكلام إلى نص، ويتولى Kokoro تحويل النص إلى كلام — ويعمل كلاهما محليًا.',
          'يوضع في موقع "أوفلاين بالكامل" بعد الإعداد: لا حاجة إلى إنترنت أو مفتاح API لإصدار الأوامر الصوتية.',
          'يتطلب macOS 13 أو أحدث؛ ويُنصح باستخدام Apple Silicon للاستدلال المحلي.',
          'بُني واستُضيف على منصة بناء التطبيقات Lovable من قِبل مطوّر مستقل، وليس مزوّدًا تجاريًا كبيرًا — لم يتم التحقق بشكل مستقل من السعر وتفاصيل الشركة وقنوات الدعم في هذه المراجعة.',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Jarvis (Mac)', anchor: 'what-is-jarvis-mac' },
      { label: 'كيف يعمل Jarvis (Mac)', anchor: 'how-jarvis-works' },
      { label: 'مشروع مستقل بُني باستخدام Lovable', anchor: 'indie-project-note' },
      { label: 'المنصة والمتطلبات', anchor: 'platform-requirements' },
      { label: 'لمن يناسب Jarvis (Mac)', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب Jarvis (Mac)', anchor: 'who-should-not-use' },
      { label: 'Jarvis (Mac) مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم النهائي', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'النقاط الرئيسية',
        isTldr: true,
        items: [
          'Jarvis (Mac) تطبيق مساعد صوتي لنظام macOS يشغّل Whisper (تحويل الكلام إلى نص) وLlama 3.2 3B (الاستدلال) وKokoro (تحويل النص إلى كلام) محليًا عبر معالج Metal الرسومي من Apple.',
          'موقع المطوّر المعلن هو "Fully offline. Fully yours" — فبعد الإعداد، لا تحتاج الأوامر الصوتية إلى اتصال بالإنترنت أو مفتاح API.',
          'يتطلب macOS 13 أو أحدث؛ ويُنصح باستخدام Apple Silicon لتشغيل Llama 3.2 3B محليًا.',
          'بُني واستُضيف على منصة بناء التطبيقات Lovable (jarvis-mac.lovable.app) من قِبل مطوّر مستقل، وليس مزوّدًا تجاريًا كبيرًا — تعامل مع السعر وهوية الشركة والتزامات الدعم كمعلومات غير موثقة حتى التحقق منها على الموقع الرسمي.',
          'لا ينبغي الخلط بينه وبين الذكاء الاصطناعي الخيالي J.A.R.V.I.S. من Marvel، أو Amazon Alexa، أو Apple Intelligence، أو أي منتج آخر غير ذي صلة يحمل اسم "Jarvis" أيضًا.',
          'تتناول هذه المراجعة البنية والموقع المعلنين من المطوّر، وليس معايير أداء أو تقييمات أو أعداد تنزيلات تم قياسها بشكل مستقل — فلا شيء من هذه البيانات متاح للتحقق العلني لهذا التطبيق وقت كتابة هذه المراجعة.',
        ],
      },
      whatIsJarvisMac: {
        id: 'what-is-jarvis-mac',
        title: 'ما هو Jarvis (Mac)',
        content: [
          '**Jarvis (Mac) هو تطبيق macOS، متاح على [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/)، ويضع نفسه كمساعد صوتي بالذكاء الاصطناعي يعمل بالكامل دون إنترنت.** بُني واستُضيف على منصة بناء التطبيقات Lovable، وهي أداة يستخدمها المطوّرون المستقلون لبناء مشاريع الويب والتطبيقات ونشرها — وهو ليس منتجًا لشركة ذكاء اصطناعي كبيرة وممولة.',
          'اسم "Jarvis" يستخدمه العديد من المنتجات والشخصيات الخيالية غير ذات الصلة، بما في ذلك الذكاء الاصطناعي الخيالي J.A.R.V.I.S. من Marvel، وبرمجيات أعمال تحمل الاسم نفسه، وتطبيقات متنوعة غير مرتبطة. تتناول هذه المراجعة فقط تطبيق macOS على jarvis-mac.lovable.app. لا توجد له أي علاقة مؤكدة بشركة Marvel أو Apple أو Amazon أو أي شركة أو منتج آخر يستخدم اسم "Jarvis".',
          'الشعار التسويقي الذي يطرحه المطوّر لهذا التطبيق هو "Fully offline. Fully yours" — والقصد المعلن هو أن معالجة الصوت تتم محليًا على جهاز Mac، دون توجيه الصوت أو النص عبر خادم سحابي، وأن التطبيق يتيح التحكم في جهاز Mac بالصوت بالكامل محليًا بعد إعداده.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Jarvis (Mac) تطبيق macOS مستقل، بُني باستخدام Lovable، يجمع بين تحويل الكلام إلى نص عبر Whisper ونموذج محلي Llama 3.2 3B وتحويل النص إلى كلام عبر Kokoro، ويعمل بالكامل على أجهزة تحتوي معالج Metal الرسومي من Apple.',
          },
          {
            type: 'plain-terms',
            text: 'يتيح لك Jarvis (Mac) التحدث إلى جهاز Mac الخاص بك وسماع رد صوتي دون أن يغادر صوتك أو نصك الجهاز — فبعد تثبيت التطبيق والنموذج، يعمل كل شيء محليًا.',
          },
        ],
      },
      howJarvisWorks: {
        id: 'how-jarvis-works',
        title: 'كيف يعمل Jarvis (Mac)',
        content: [
          '**يجمع Jarvis (Mac) بين ثلاثة مكونات محلية في خط معالجة صوتي واحد.** يتولى كل مكون مرحلة مختلفة من التفاعل الصوتي — الاستماع والتفكير والتحدث — وتعمل المكونات الثلاثة محليًا على جهاز Mac بدلًا من استدعاء واجهة برمجية سحابية.',
        ],
        items: [
          '**Whisper (تحويل الكلام إلى نص)** — يحوّل الصوت المنطوق إلى نص على الجهاز نفسه. Whisper نموذج مفتوح المصدر ومعتمد للتعرف على الكلام؛ يستخدمه Jarvis كطبقة الاستماع في خط المعالجة.',
          '**Llama 3.2 3B (الاستدلال، عبر معالج Metal الرسومي من Apple)** — يتولى نموذج لغوي محلي بحجم 3 مليارات معلمة فهم الطلب المكتوب من التفريغ الصوتي وتوليد الرد. يعمل على معالج Mac الرسومي عبر إطار عمل Metal من Apple بدلًا من خادم بعيد، وهذا ما يجعل الأوامر الصوتية تعمل دون اتصال بالإنترنت بعد الإعداد.',
          '**Kokoro (تحويل النص إلى كلام)** — يحوّل الرد النصي من النموذج مرة أخرى إلى صوت منطوق على الجهاز نفسه، مكمّلًا دورة التفاعل الصوتي دون خدمة تحويل نص إلى كلام سحابية.',
          '**التحكم الصوتي في جهاز Mac** — الغرض المعلن من التطبيق هو تمكين المستخدم من إصدار أوامر صوتية للتحكم في جهاز Mac الخاص به باستخدام خط المعالجة المحلي هذا، دون الحاجة إلى الاحتفاظ بمفاتيح API لمزوّد ذكاء اصطناعي سحابي أو الحفاظ على اتصال بالإنترنت للتفاعل الصوتي الأساسي بمجرد تثبيت كل شيء.',
        ],
        note: 'يصف هذا القسم البنية والموقع كما ذكرهما المطوّر. لم تختبر PromptQuorum بشكل مستقل زمن الاستجابة أو دقة التفريغ الصوتي أو موثوقية الأوامر الصوتية لتطبيق Jarvis (Mac) — تحقق من السلوك الحالي على أجهزتك الخاصة قبل الاعتماد عليه.',
      },
      indieProjectNote: {
        id: 'indie-project-note',
        title: 'مشروع مستقل بُني باستخدام Lovable',
        content: [
          '**يُستضاف Jarvis (Mac) على نطاق فرعي تابع لـ Lovable (jarvis-mac.lovable.app)، ما يشير إلى أنه بُني باستخدام منصة بناء التطبيقات Lovable بدلًا من فريق هندسي داخلي في شركة برمجيات ممولة.** هذا أمر مهم لما يجب أن تتوقعه منه.',
        ],
        items: [
          '**اضبط توقعاتك بشأن الدعم.** عادةً ما يقدّم مشروع مستقل لمطوّر واحد (أو فريق صغير) بُني على منصة بناء تطبيقات نطاق دعم أصغر من مزوّد تجاري — فقد لا يوجد فريق دعم مخصص أو اتفاقية مستوى خدمة معلنة أو جهة اتصال للشركات.',
          '**تحقق من الادعاءات بشكل مستقل قبل الاعتماد على التطبيق في استخدامات حساسة.** لا يتوفر اسم شركة أو تمويل أو حجم فريق مؤكد للجمهور لهذا المشروع حتى وقت هذه المراجعة؛ تعامل مع تصريحات الخصوصية ومعالجة البيانات كإفادات من المطوّر يجب التحقق منها على الموقع الرسمي، وليست حقائق مدققة بشكل مستقل.',
          '**توقّع تطور التطبيق ووثائقه.** يمكن للتطبيقات المستقلة المبنية على منصات مثل Lovable أن تتغير بسرعة، بما في ذلك الرابط والسعر ومجموعة الميزات — تحقق مباشرة من [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/) لمعرفة الحالة الحالية قبل التثبيت.',
        ],
      },
      platformRequirements: {
        id: 'platform-requirements',
        title: 'المنصة والمتطلبات',
        itemHeadings: true,
        columns: ['المتطلب', 'ماذا يعني ذلك لك'],
        rows: [
          {
            'المتطلب': 'macOS 13 أو أحدث',
            'ماذا يعني ذلك لك': 'يتطلب Jarvis (Mac) نظام macOS 13 (Ventura) أو إصدارًا أحدث. تحقق من إصدار macOS الحالي لديك عبر "About This Mac" قبل التثبيت، فإصدارات macOS الأقدم غير مدعومة.',
          },
          {
            'المتطلب': 'يُنصح باستخدام Apple Silicon',
            'ماذا يعني ذلك لك': 'يوصي المطوّر باستخدام Apple Silicon (شريحة من سلسلة M) لتشغيل Jarvis (Mac). الاستدلال المحلي لـ Llama 3.2 3B يتطلب قدرًا كبيرًا من المعالجة، وإطار عمل معالج Metal الرسومي من Apple — المستخدم لتشغيل النموذج على الجهاز — مُحسَّن لشرائح Apple Silicon وليس لأجهزة Mac القديمة بمعالج Intel.',
          },
          {
            'المتطلب': 'مساحة تخزين محلية للنموذج',
            'ماذا يعني ذلك لك': 'بما أن Llama 3.2 3B وWhisper وKokoro تعمل جميعها محليًا، يحتاج التطبيق إلى مساحة تخزين محلية على القرص لحفظ ملفات النموذج. لا يعلن المطوّر عن متطلبات دقيقة للتخزين وذاكرة الوصول العشوائي وقت كتابة هذه المراجعة — تحقق من المواصفات الحالية على الموقع الرسمي قبل التثبيت.',
          },
          {
            'المتطلب': 'الإنترنت مطلوب للإعداد الأولي فقط (حسب إفادة المطوّر)',
            'ماذا يعني ذلك لك': 'ينطبق موقع "أوفلاين بالكامل" على الأوامر الصوتية بعد الإعداد. يتطلب تنزيل التطبيق وملفات النموذج للمرة الأولى اتصالًا بالإنترنت، على غرار معظم تطبيقات الذكاء الاصطناعي المحلية.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب Jarvis (Mac)',
        items: [
          '**مستخدمو Mac الفضوليون بشأن التحكم الصوتي دون اشتراك سحابي.** إذا كنت تريد تجربة التحكم في جهاز Mac بالصوت باستخدام نموذج محلي بدلًا من مساعد سحابي، فإن Jarvis (Mac) مصمم خصيصًا لذلك على macOS.',
          '**المستخدمون المهتمون بالخصوصية والراغبون في معالجة الصوت محليًا.** بما أن Whisper وLlama 3.2 3B وKokoro تعمل جميعها على الجهاز حسب موقع المطوّر المعلن، فإن تفاعلات الصوت لا تمر عبر واجهة برمجية للذكاء الاصطناعي من طرف ثالث في خط المعالجة الأساسي.',
          '**المستخدمون المرتاحون لتجربة برمجيات من مطوّر مستقل.** إذا كنت مرتاحًا لتقييم مشروع أصغر بُني باستخدام Lovable بدلًا من منتج تجاري بفريق دعم مخصص، فإن Jarvis (Mac) تطبيق معقول لتجربته.',
          '**أصحاب أجهزة Mac التي تعمل بمعالج Apple Silicon.** بما أن Apple Silicon موصى به لتشغيل Llama 3.2 3B محليًا عبر Metal، فإن المستخدمين الذين يمتلكون جهاز Mac بشريحة من سلسلة M هم الأقرب للحصول على تجربة سلسة.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب Jarvis (Mac)',
        items: [
          '**المستخدمون الذين يحتاجون إلى دعم Windows أو Linux.** Jarvis (Mac) حصري لنظام macOS. على مستخدمي أنظمة التشغيل الأخرى النظر في تطبيقات ذكاء اصطناعي محلية تعمل على منصات متعددة مثل [Loci](/ar/power-local-llm/loci-ai-review-offline-local-ai) أو بناء خط معالجة خاص بهم.',
          '**المستخدمون الذين يحتاجون إلى جودة استدلال بمستوى أحدث النماذج.** Llama 3.2 3B نموذج مدمج بحجم 3 مليارات معلمة. يواجه سقفًا مماثلًا لسقف عدد المعلمات لدى النماذج المحلية الصغيرة الأخرى، ولا يُعد بديلًا عن النماذج السحابية الأكبر في مهام الاستدلال المعقدة متعددة الخطوات.',
          '**المستخدمون الذين يحتاجون إلى التزامات دعم مؤسسي.** بما أن Jarvis (Mac) مشروع مستقل بُني على منصة Lovable، فهو لا يقدّم اتفاقيات مستوى خدمة موثقة، أو بيانات شركة معلنة، أو هيكل إدارة حسابات كما يقدّمه مزوّد تجاري ممول.',
          '**المستخدمون الذين يريدون اختيار نموذجهم الخاص أو تخصيص خط المعالجة.** يأتي Jarvis (Mac) بحزمة ثابتة — Whisper وLlama 3.2 3B وKokoro. من يريد استبدال النماذج، أو اختيار صيغ الضغط، أو تخصيص طبقتي تحويل الكلام إلى نص والنص إلى كلام، عليه بدلًا من ذلك بناء خط معالجة خاص به؛ راجع [بناء مساعد صوتي يعمل بالكامل دون إنترنت](/ar/power-local-llm/build-local-voice-assistant-2026) للحصول على دليل من الصفر.',
          '**المستخدمون الذين يحتاجون إلى ضمانات خصوصية أو أمان موثّقة من المزوّد للعمل الحساس.** قبل استخدام أي تطبيق مستقل لبيانات سرية أو خاضعة للتنظيم، تحقق من سياسة الخصوصية الحالية مباشرة على موقع المطوّر — تنقل هذه المراجعة الموقع المعلن من المطوّر، وليست تدقيقًا مستقلًا للخصوصية.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Jarvis (Mac) مقابل البدائل',
        itemHeadings: true,
        columns: ['الخيار', 'الأنسب لـ', 'المنصة', 'الفرق الرئيسي'],
        rows: [
          {
            'الخيار': 'Jarvis (Mac)',
            'الأنسب لـ': 'تجربة مساعد صوتي جاهز يعمل دون إنترنت على macOS',
            'المنصة': 'macOS 13+ فقط',
            'الفرق الرئيسي': 'حزمة ثابتة (Whisper + Llama 3.2 3B + Kokoro)؛ مشروع مستقل بُني باستخدام Lovable',
          },
          {
            'الخيار': 'Loci',
            'الأنسب لـ': 'محادثة محلية خاصة تعمل على منصات متعددة',
            'المنصة': 'iPhone/iPad/Android/Mac/Windows',
            'الفرق الرئيسي': 'مكتبة نماذج منتقاة أوسع؛ وليس مركّزًا في الأساس على الأوامر الصوتية. راجع [مراجعة Loci AI](/ar/power-local-llm/loci-ai-review-offline-local-ai).',
          },
          {
            'الخيار': 'خط معالجة صوتي مخصص',
            'الأنسب لـ': 'المستخدمون الراغبون في تحكم كامل بالنماذج والكود',
            'المنصة': 'أي نظام تشغيل تبنيه من أجله',
            'الفرق الرئيسي': 'تختار مكونات تحويل الكلام إلى نص/النموذج اللغوي/تحويل النص إلى كلام ويمكنك استبدالها؛ جهد إعداد أكبر. راجع [بناء مساعد صوتي يعمل بالكامل دون إنترنت](/ar/power-local-llm/build-local-voice-assistant-2026).',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يرتبط Jarvis (Mac) بشخصية J.A.R.V.I.S. من Marvel، أو بـ Apple، أو بـ Amazon Alexa؟',
            a: 'لا. Jarvis (Mac) تطبيق macOS مستقل مستضاف على jarvis-mac.lovable.app. لا توجد له أي علاقة مؤكدة بشخصية الذكاء الاصطناعي الخيالية J.A.R.V.I.S. من Marvel، أو بشركة Apple، أو بـ Amazon Alexa، أو بأي منتج آخر يستخدم اسم "Jarvis" أيضًا. الاسم مشترك بين العديد من المنتجات غير ذات الصلة.',
          },
          {
            q: 'ما النماذج التي يستخدمها Jarvis (Mac)؟',
            a: 'يستخدم Jarvis (Mac) نموذج Whisper لتحويل الكلام إلى نص، ونموذج Llama 3.2 3B (نموذج لغوي بحجم 3 مليارات معلمة) للاستدلال، ونموذج Kokoro لتحويل النص إلى كلام. تعمل الثلاثة محليًا على جهاز Mac عبر إطار عمل معالج Metal الرسومي من Apple، وفقًا للبنية المعلنة من المطوّر.',
          },
          {
            q: 'هل يعمل Jarvis (Mac) دون اتصال بالإنترنت؟',
            a: 'يشير موقع المطوّر المعلن — "Fully offline. Fully yours" — إلى أن الأوامر الصوتية تعمل محليًا دون اتصال بالإنترنت بعد تثبيت التطبيق والنماذج. يتطلب التنزيل والإعداد الأوليان اتصالًا بالإنترنت، على غرار معظم تطبيقات الذكاء الاصطناعي المحلية.',
          },
          {
            q: 'هل أحتاج إلى مفتاح API لاستخدام Jarvis (Mac)؟',
            a: 'لا، بحسب التصميم المعلن من المطوّر. بما أن الاستدلال يعمل محليًا عبر Llama 3.2 3B على معالج Apple Metal، يوضع Jarvis (Mac) كتطبيق لا يتطلب مفتاح API أو حسابًا لدى مزوّد ذكاء اصطناعي سحابي لوظائفه الصوتية الأساسية.',
          },
          {
            q: 'ما نوع جهاز Mac الذي أحتاجه لتشغيل Jarvis (Mac)؟',
            a: 'يتطلب Jarvis (Mac) نظام macOS 13 أو أحدث. ويُنصح باستخدام Apple Silicon (شريحة من سلسلة M)، إذ إن الاستدلال المحلي لـ Llama 3.2 3B عبر إطار عمل معالج Metal الرسومي من Apple يتطلب قدرًا كبيرًا من المعالجة، وهو مُحسَّن لشرائح Apple Silicon وليس لأجهزة Mac القديمة بمعالج Intel.',
          },
          {
            q: 'من يطوّر Jarvis (Mac)؟',
            a: 'بُني Jarvis (Mac) واستُضيف على منصة بناء التطبيقات Lovable، التي يستخدمها المطوّرون المستقلون لبناء التطبيقات ونشرها. لا يتوفر اسم شركة أو حالة تمويل أو حجم فريق مؤكد للجمهور لهذا المشروع — وينبغي تقييمه كمشروع مستقل، وليس كمنتج لمزوّد تجاري كبير.',
          },
          {
            q: 'كم تبلغ تكلفة Jarvis (Mac)؟',
            a: 'لم يتم التحقق من التسعير بشكل مستقل في هذه المراجعة. تحقق من السعر الحالي مباشرة على [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/) قبل التثبيت، إذ يمكن للتطبيقات المستقلة المبنية على منصات مثل Lovable تغيير التسعير دون إشعار.',
          },
          {
            q: 'هل يمكن لـ Jarvis (Mac) أن يحل محل Siri أو مساعد صوتي سحابي؟',
            a: 'بالنسبة للأوامر الصوتية التي يعالجها نموذجه المحلي Llama 3.2 3B بالكامل، يوضع Jarvis (Mac) كبديل يعمل دون إنترنت للمساعدات الصوتية القائمة على السحابة. يواجه سقف الاستدلال نفسه الذي تواجهه النماذج المحلية الأخرى بحجم 3 مليارات معلمة، لذا فهو لا يوضع كبديل للمهام التي تتطلب استدلالًا بمستوى أحدث النماذج أو معرفة ويب مباشرة.',
          },
          {
            q: 'ما الفرق بين Jarvis (Mac) وLoci أو بناء مساعد صوتي خاص؟',
            a: 'يعمل Jarvis (Mac) حصريًا على macOS بحزمة نماذج ثابتة (Whisper وLlama 3.2 3B وKokoro) وإعداد بسيط للغاية. يغطي [Loci](/ar/power-local-llm/loci-ai-review-offline-local-ai) خمس منصات بمكتبة نماذج أوسع، لكنه ليس مركّزًا في الأساس على الأوامر الصوتية. يمنحك [خط معالجة صوتي مخصص](/ar/power-local-llm/build-local-voice-assistant-2026) تحكمًا كاملًا في النماذج المستخدمة، مقابل الحاجة إلى إعداد يدوي.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content:
          'يستحق Jarvis (Mac) التجربة إذا كنت تريد تحديدًا تطبيق macOS يتيح لك التحكم في جهاز Mac بالصوت باستخدام خط معالجة محلي من Whisper وLlama 3.2 3B وKokoro، دون الاحتفاظ بمفاتيح API سحابية أو اتصال بالإنترنت للتفاعل الأساسي. أبرز نقاط قوته، حسب التصميم المعلن من المطوّر، هي حزمة صوتية محلية ثابتة وبدون إعداد، وتسريع عبر معالج Metal الرسومي من Apple على شرائح Apple Silicon. أما أبرز قيوده فهي نفس القيود التي يواجهها أي نموذج محلي بحجم 3 مليارات معلمة — سقف استدلال أقل من النماذج السحابية الأحدث — إضافة إلى الحقيقة العملية بأنه مشروع مطوّر واحد أو فريق صغير، بُني على منصة بناء التطبيقات Lovable، وليس مزوّدًا تجاريًا ممولًا؛ لذا ينبغي التحقق من السعر والدعم والتزامات الصيانة طويلة المدى مباشرة على [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/) بدلًا من افتراضها. من يحتاج إلى دعم متعدد المنصات أو تحكم أعمق في النموذج، عليه المقارنة مع [Loci](/ar/power-local-llm/loci-ai-review-offline-local-ai) أو [خط معالجة صوتي مخصص](/ar/power-local-llm/build-local-voice-assistant-2026).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[الموقع الرسمي لـ Jarvis (Mac)](https://jarvis-mac.lovable.app/) — موقع المنتج، الشعار التسويقي "Fully offline. Fully yours"، تفاصيل التطبيق الحالية.',
          '[Lovable](https://lovable.dev) — منصة بناء التطبيقات التي بُني واستُضيف عليها Jarvis (Mac).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Loci AI: ذكاء اصطناعي يعمل دون إنترنت لأجهزة iPhone وAndroid وiPad وMac وWindows](/ar/power-local-llm/loci-ai-review-offline-local-ai) — مقارنة تطبيقات ذكاء اصطناعي محلية تعمل على منصات متعددة.',
          '[بناء مساعد صوتي يعمل بالكامل دون إنترنت في 2026: Whisper + LLM + Piper](/ar/power-local-llm/build-local-voice-assistant-2026) — دليل من الصفر للقراء الراغبين في اختيار حزمة STT/LLM/TTS الخاصة بهم.',
          '[مقارنة Whisper STT المحلي 2026](/ar/power-local-llm/local-whisper-stt-comparison-2026) — نظرة أقرب على طبقة تحويل الكلام إلى نص المستخدمة في خطوط معالجة كهذه.',
          '[تحويل النص إلى كلام المحلي واستنساخ الصوت 2026: Piper مقابل Coqui مقابل XTTS v2](/ar/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — مقارنة خيارات تحويل النص إلى كلام إلى جانب Kokoro.',
          '[دليل النماذج اللغوية المحلية على Apple Silicon 2026](/ar/local-llms/apple-silicon-local-llm-guide-2026) — خلفية عن تشغيل النماذج المحلية عبر إطار عمل معالج Metal الرسومي من Apple.',
          '[إعداد Ollama على جهاز Mac (Apple Silicon) 2026](/ar/local-llms/ollama-on-mac-apple-silicon-setup-2026) — للقراء الراغبين في تشغيل نماذج محلية على جهاز Mac خارج تطبيق جاهز مثل Jarvis.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/jarvis-mac-review-2026-hero-ko.webp',
    title: 'Jarvis (Mac) 리뷰 2026: macOS용 오프라인 음성 AI',
    seoTitle: 'Jarvis for Mac 리뷰 2026: 오프라인 음성 AI',
    intro:
      'Jarvis (Mac)는 — Marvel의 가상 AI, Amazon Alexa, Apple Intelligence, 또는 "Jarvis"라는 이름을 사용하는 다른 제품들과 혼동해서는 안 됩니다 — 독립 개발자가 Lovable 앱 빌더 플랫폼(jarvis-mac.lovable.app에서 호스팅)에서 만든 macOS 앱입니다. 음성 인식에는 Whisper, 추론에는 로컬 Llama 3.2 3B 언어 모델, 음성 합성에는 Kokoro를 사용하는 완전한 음성 어시스턴트 파이프라인을 기기에서 직접 실행하며, 이 모든 처리는 Apple Metal GPU를 통해 이루어집니다. 개발자가 밝힌 포지셔닝은 "Fully offline. Fully yours"입니다 — 설치 후에는 오디오나 텍스트를 서버로 전송하지 않고, API 키도 필요 없이 음성 명령을 처리합니다.',
    metaDescription:
      'Jarvis (Mac) 리뷰: Apple Metal에서 Whisper STT, 로컬 Llama 3.2 3B, Kokoro TTS를 실행하는 독립 개발 macOS 앱입니다. 요구 사항과 적합한 사용자를 확인하십시오.',
    twitterDescription:
      'Jarvis (Mac) 리뷰 2026: Apple Metal을 통해 Llama 3.2 3B, Whisper, Kokoro TTS로 구동되는 macOS용 오프라인 음성 AI입니다. Lovable로 만든 독립 프로젝트 — 기대치, 요구 사항, 트레이드오프를 다룹니다.',
    audience:
      'Mac을 사적으로 음성 제어할 수 있는 독립적인 온디바이스 음성 어시스턴트를 검토 중인 macOS 사용자 — Llama 3.2 3B/Whisper/Kokoro로 고정된 스택을 가진 Lovable 제작 앱이 자신에게 맞는지, 아니면 직접 파이프라인을 구축하거나 더 큰 크로스플랫폼 앱을 사용하는 것이 나을지 판단하려는 사용자.',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Jarvis Mac review',
    targetKeywords: [
      'jarvis mac 리뷰',
      'jarvis for mac',
      '오프라인 음성 어시스턴트 mac',
      'llama 3.2 3b mac metal',
      'whisper kokoro tts mac',
      '프라이빗 음성 ai macos',
      'jarvis ai 음성 어시스턴트 mac',
      '오프라인 ai 앱 macos',
    ],
    current_models_mentioned: ['Llama 3.2 3B', 'Whisper', 'Kokoro'],
    current_hardware_mentioned: ['Apple Silicon Mac', 'macOS 13'],
    leadAnswerBlock:
      '**Jarvis (Mac)는 Lovable 앱 빌더 플랫폼으로 제작된 독립 macOS 앱으로, Speech-to-Text용 Whisper, 추론용 로컬 Llama 3.2 3B 모델, Text-to-Speech용 Kokoro로 구성된 전체 음성 파이프라인을 기기에서 실행하며, 이 모든 처리는 Apple Metal GPU를 통해 이루어집니다.** 개발자는 이를 "Fully offline. Fully yours"로 포지셔닝합니다 — 앱과 모델의 초기 설정을 마치면, 음성 명령에는 인터넷 연결이나 API 키가 필요하지 않습니다. macOS 13부터 실행되며, Llama 3.2 3B를 로컬에서 실행하려면 Apple Silicon이 권장됩니다. 이는 자금을 지원받은 기업의 제품이 아니라 Lovable 플랫폼에서 만든 단일 개발자 프로젝트이므로, 상업용 음성 AI 벤더보다 제한적인 지원 범위를 예상해야 하며, 중요한 용도로 사용하기 전에 공식 사이트에서 최신 정보를 확인해야 합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Mac을 오프라인 음성으로 제어하기 위해 Jarvis (Mac)를 사용해야 합니까?',
        answer:
          '고정된 Llama 3.2 3B + Whisper + Kokoro 스택으로 구성된, 설정이 필요 없는 간단한 macOS 오프라인 음성 어시스턴트를 사용해보고 싶다면 Jarvis (Mac)를 사용하십시오. 문서화된 엔터프라이즈 지원 채널이 필요하거나, 직접 모델이나 양자화 방식을 선택하고 싶거나, Windows나 Linux 지원이 필요하다면 피하십시오 — macOS 전용이며 자금을 지원받은 벤더가 아닌 독립 개발자가 만든 앱입니다.',
        bullets: [
          '추론을 위해 Apple Metal GPU에서 Llama 3.2 3B를 로컬로 실행합니다.',
          'Whisper가 Speech-to-Text를, Kokoro가 Text-to-Speech를 담당합니다 — 둘 다 기기에서 실행됩니다.',
          '설정 후에는 완전한 오프라인으로 포지셔닝됩니다: 음성 명령을 내리는 데 인터넷이나 API 키가 필요 없습니다.',
          'macOS 13 이상이 필요합니다. 로컬 추론에는 Apple Silicon이 권장됩니다.',
          '대형 상업 벤더가 아닌 독립 개발자가 Lovable 앱 빌더 플랫폼에서 제작하고 호스팅합니다 — 가격, 회사 정보, 지원 채널은 이 리뷰에서 독립적으로 검증되지 않았습니다.',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Jarvis (Mac)란 무엇인가', anchor: 'what-is-jarvis-mac' },
      { label: 'Jarvis (Mac)의 작동 방식', anchor: 'how-jarvis-works' },
      { label: 'Lovable로 만든 독립 프로젝트입니다', anchor: 'indie-project-note' },
      { label: '플랫폼 및 요구 사항', anchor: 'platform-requirements' },
      { label: 'Jarvis (Mac)에 적합한 사용자', anchor: 'who-should-use' },
      { label: 'Jarvis (Mac)에 적합하지 않은 사용자', anchor: 'who-should-not-use' },
      { label: 'Jarvis (Mac) 대안 비교', anchor: 'vs-alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '핵심 내용',
        isTldr: true,
        items: [
          'Jarvis (Mac)는 Apple Metal GPU를 통해 Whisper(Speech-to-Text), Llama 3.2 3B(추론), Kokoro(Text-to-Speech)를 기기에서 실행하는 macOS 음성 어시스턴트 앱입니다.',
          '개발자의 포지셔닝은 "Fully offline. Fully yours"입니다 — 설정 후 음성 명령에는 인터넷 연결이나 API 키가 필요하지 않습니다.',
          'macOS 13 이상이 필요합니다. Llama 3.2 3B를 로컬에서 실행하려면 Apple Silicon이 권장됩니다.',
          '대형 상업 벤더가 아닌 독립 개발자가 Lovable 앱 빌더 플랫폼(jarvis-mac.lovable.app)에서 제작하고 호스팅합니다 — 가격, 회사 정체성, 지원 약속은 공식 사이트에서 확인하기 전까지는 검증되지 않은 것으로 취급하십시오.',
          'Marvel의 가상 AI J.A.R.V.I.S., Amazon Alexa, Apple Intelligence, 또는 "Jarvis"라는 이름을 사용하는 관련 없는 다른 제품과 혼동해서는 안 됩니다.',
          '이 리뷰는 개발자가 밝힌 아키텍처와 포지셔닝을 다루며, 독립적으로 측정된 벤치마크, 평점, 다운로드 수는 다루지 않습니다 — 작성 시점 기준 이 앱에 대해 공개적으로 검증 가능한 그러한 데이터는 없습니다.',
        ],
      },
      whatIsJarvisMac: {
        id: 'what-is-jarvis-mac',
        title: 'Jarvis (Mac)란 무엇인가',
        content: [
          '**Jarvis (Mac)는 [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/)에서 제공되는 macOS 애플리케이션으로, 완전한 오프라인 AI 음성 어시스턴트로 포지셔닝되어 있습니다.** 독립 개발자들이 웹 및 앱 프로젝트를 구축하고 배포하는 데 사용하는 도구인 Lovable 앱 빌더 플랫폼에서 제작 및 호스팅됩니다 — 자금을 지원받은 대형 AI 기업의 제품이 아닙니다.',
          '"Jarvis"라는 이름은 Marvel의 가상 AI J.A.R.V.I.S., 동일한 이름의 비즈니스 소프트웨어, 그리고 서로 관련 없는 다양한 앱을 포함해 많은 관련 없는 제품과 가상 캐릭터가 사용하고 있습니다. 이 리뷰는 jarvis-mac.lovable.app의 macOS 앱만 다룹니다. Marvel, Apple, Amazon 또는 "Jarvis"라는 이름을 사용하는 다른 회사나 제품과의 확인된 제휴 관계는 없습니다.',
          '개발자가 이 앱에 붙인 마케팅 문구는 "Fully offline. Fully yours"입니다 — 음성 처리가 클라우드 서버를 거치지 않고 Mac에서 로컬로 이루어지며, 설정을 마치면 앱이 Mac을 완전히 온디바이스에서 음성으로 제어할 수 있게 한다는 것이 밝혀진 의도입니다.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Jarvis (Mac)는 Whisper Speech-to-Text와 로컬 Llama 3.2 3B 모델, Kokoro Text-to-Speech를 결합한 Lovable 제작 독립 macOS 앱으로, 전체가 Apple Metal GPU 하드웨어에서 실행됩니다.',
          },
          {
            type: 'plain-terms',
            text: 'Jarvis (Mac)를 사용하면 음성이나 텍스트가 기기 밖으로 나가지 않고 Mac에 말을 걸고 음성으로 답변을 들을 수 있습니다 — 앱과 모델을 설치하면 모든 것이 로컬에서 실행됩니다.',
          },
        ],
      },
      howJarvisWorks: {
        id: 'how-jarvis-works',
        title: 'Jarvis (Mac)의 작동 방식',
        content: [
          '**Jarvis (Mac)는 세 가지 온디바이스 구성 요소를 하나의 음성 파이프라인으로 결합합니다.** 각 구성 요소는 음성 상호작용의 서로 다른 단계 — 듣기, 생각하기, 말하기 — 를 담당하며, 세 가지 모두 클라우드 API를 호출하는 대신 Mac에서 로컬로 실행됩니다.',
        ],
        items: [
          '**Whisper(Speech-to-Text)** — 음성 오디오를 기기에서 텍스트로 변환합니다. Whisper는 검증된 오픈소스 음성 인식 모델이며, Jarvis는 이를 파이프라인의 청취 레이어로 사용합니다.',
          '**Llama 3.2 3B(추론, Apple Metal GPU 경유)** — 30억 매개변수 규모의 로컬 언어 모델이 전사된 요청을 이해하고 응답을 생성합니다. 원격 서버가 아닌 Apple의 Metal 프레임워크를 통해 Mac의 GPU에서 실행되며, 이 덕분에 설정 후 음성 명령이 인터넷 연결 없이 작동합니다.',
          '**Kokoro(Text-to-Speech)** — 모델의 텍스트 응답을 기기에서 다시 음성 오디오로 변환하여, 클라우드 TTS 서비스 없이 음성 루프를 완성합니다.',
          '**Mac 음성 제어** — 이 앱이 밝힌 목적은 사용자가 이 로컬 파이프라인을 사용해 음성 명령으로 Mac을 제어할 수 있도록 하는 것이며, 모든 설치가 완료되면 클라우드 AI 제공업체용 API 키를 유지하거나 핵심 음성 상호작용을 위한 인터넷 연결을 유지할 필요가 없습니다.',
        ],
        note: '이 섹션은 개발자가 밝힌 아키텍처와 포지셔닝을 설명한 것입니다. PromptQuorum은 Jarvis (Mac)의 지연 시간, 전사 정확도, 음성 명령 신뢰성을 독립적으로 벤치마크하지 않았습니다 — 이에 의존하기 전에 직접 사용하는 하드웨어에서 현재 동작을 확인하십시오.',
      },
      indieProjectNote: {
        id: 'indie-project-note',
        title: 'Lovable로 만든 독립 프로젝트입니다',
        content: [
          '**Jarvis (Mac)는 Lovable 서브도메인(jarvis-mac.lovable.app)에서 호스팅되며, 이는 자금을 지원받은 소프트웨어 기업의 사내 엔지니어링 팀이 아니라 Lovable 앱 빌더 플랫폼을 사용해 제작되었음을 나타냅니다.** 이는 이 앱에서 무엇을 기대해야 하는지와 관련이 있습니다.',
        ],
        items: [
          '**지원에 대한 기대치를 조정하십시오.** 앱 빌더 플랫폼 위에 구축된 단일 개발자(또는 소규모 팀) 독립 프로젝트는 일반적으로 상업 벤더보다 지원 범위가 제한적입니다 — 전담 지원팀, 공개된 SLA, 엔터프라이즈 연락처가 없을 수 있습니다.',
          '**민감한 용도로 사용하기 전에 주장을 독립적으로 검증하십시오.** 이 리뷰 작성 시점 기준으로 이 프로젝트의 회사명, 자금 조달 상황, 팀 규모는 공개적으로 확인되지 않았습니다. 개인정보 보호 및 데이터 처리 관련 주장은 독립적으로 감사된 사실이 아니라 공식 사이트에서 확인해야 할 개발자의 진술로 취급하십시오.',
          '**앱과 문서가 계속 변경될 것으로 예상하십시오.** Lovable과 같은 플랫폼에서 제작된 독립 앱은 URL, 가격, 기능을 포함해 빠르게 변경될 수 있습니다 — 설치하기 전에 [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/)에서 직접 최신 상태를 확인하십시오.',
        ],
      },
      platformRequirements: {
        id: 'platform-requirements',
        title: '플랫폼 및 요구 사항',
        itemHeadings: true,
        columns: ['요구 사항', '사용자에게 의미하는 것'],
        rows: [
          {
            '요구 사항': 'macOS 13 이상',
            '사용자에게 의미하는 것': 'Jarvis (Mac)에는 macOS 13(Ventura) 이상이 필요합니다. 이전 버전의 macOS는 지원되지 않으므로, 설치하기 전에 "이 Mac에 관하여"에서 현재 macOS 버전을 확인하십시오.',
          },
          {
            '요구 사항': 'Apple Silicon 권장',
            '사용자에게 의미하는 것': '개발자는 Jarvis (Mac) 실행에 Apple Silicon(M 시리즈 칩)을 권장합니다. Llama 3.2 3B의 로컬 추론은 연산 집약적이며, 모델을 기기에서 실행하는 데 사용되는 Apple의 Metal GPU 프레임워크는 이전 Intel Mac이 아닌 Apple Silicon에 최적화되어 있습니다.',
          },
          {
            '요구 사항': '모델을 위한 로컬 저장 공간',
            '사용자에게 의미하는 것': 'Llama 3.2 3B, Whisper, Kokoro가 모두 로컬에서 실행되므로, 앱은 모델 파일을 저장할 로컬 디스크 공간이 필요합니다. 작성 시점 기준으로 개발자는 정확한 저장 공간 및 RAM 요구 사항을 공개하지 않았습니다 — 설치하기 전에 공식 사이트에서 최신 사양을 확인하십시오.',
          },
          {
            '요구 사항': '초기 설정에만 인터넷 필요(개발자 설명 기준)',
            '사용자에게 의미하는 것': '"Fully offline. Fully yours" 포지셔닝은 설정 이후의 음성 명령에 적용됩니다. 앱과 모델 파일을 처음 다운로드할 때는 인터넷 연결이 필요하며, 이는 대부분의 로컬 AI 앱의 초기 설정 방식과 일치합니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Jarvis (Mac)에 적합한 사용자',
        items: [
          '**클라우드 구독 없이 음성 제어를 시도해보고 싶은 Mac 사용자.** 클라우드 어시스턴트가 아닌 로컬 모델을 사용해 Mac을 음성으로 제어해보고 싶다면, Jarvis (Mac)는 macOS에서 바로 그 목적을 위해 만들어진 앱입니다.',
          '**음성 처리를 로컬에서 하고 싶은 개인정보 보호에 민감한 사용자.** 개발자의 포지셔닝에 따르면 Whisper, Llama 3.2 3B, Kokoro가 모두 기기에서 실행되므로, 핵심 파이프라인의 음성 상호작용은 제3자 AI API를 거치지 않습니다.',
          '**독립 개발자의 소프트웨어를 시도해보는 것이 괜찮은 사용자.** 전담 지원팀을 갖춘 상업 제품이 아니라 Lovable로 제작된 소규모 프로젝트를 평가하는 데 문제가 없다면, Jarvis (Mac)는 테스트해볼 만한 합리적인 앱입니다.',
          '**Apple Silicon Mac 소유자.** Llama 3.2 3B를 Metal을 통해 로컬로 실행하는 데 Apple Silicon이 권장되므로, M 시리즈 칩이 탑재된 Mac 사용자가 원활한 경험을 얻기에 가장 유리합니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Jarvis (Mac)에 적합하지 않은 사용자',
        items: [
          '**Windows나 Linux 지원이 필요한 사용자.** Jarvis (Mac)는 macOS 전용입니다. 다른 운영체제 사용자는 [Loci](/ko/power-local-llm/loci-ai-review-offline-local-ai)와 같은 크로스플랫폼 로컬 AI 앱을 찾아보거나 직접 파이프라인을 구축해야 합니다.',
          '**최고 수준의 추론 품질이 필요한 사용자.** Llama 3.2 3B는 30억 매개변수 규모의 소형 모델입니다. 다른 소형 로컬 모델과 동일한 매개변수 수 한계에 직면하며, 복잡하고 다단계적인 추론 작업에서 더 큰 클라우드 모델을 대체할 수 없습니다.',
          '**엔터프라이즈 지원 약속이 필요한 사용자.** Jarvis (Mac)는 Lovable 플랫폼에서 제작된 독립 프로젝트이므로, 자금을 지원받은 상업 벤더가 제공하는 문서화된 지원 SLA, 공개된 회사 정보, 계정 관리 체계를 제공하지 않습니다.',
          '**직접 모델을 선택하거나 파이프라인을 커스터마이즈하고 싶은 사용자.** Jarvis (Mac)는 Whisper, Llama 3.2 3B, Kokoro로 구성된 고정 스택으로 제공됩니다. 모델을 교체하거나 양자화 형식을 선택하거나 STT/TTS 레이어를 커스터마이즈하고 싶은 사용자는 대신 직접 파이프라인을 구축해야 합니다. 처음부터 만드는 가이드는 [완전 오프라인 음성 어시스턴트 만들기](/ko/power-local-llm/build-local-voice-assistant-2026)를 참조하십시오.',
          '**민감한 작업을 위해 벤더가 검증한 개인정보 보호 또는 보안 보장이 필요한 사용자.** 기밀 정보나 규제 대상 데이터에 독립 앱을 사용하기 전, 개발자 사이트에서 현재 개인정보 처리방침을 직접 확인하십시오 — 이 리뷰는 개발자가 밝힌 포지셔닝을 전달하는 것이며, 독립적인 개인정보 보호 감사가 아닙니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Jarvis (Mac) 대안 비교',
        itemHeadings: true,
        columns: ['옵션', '적합한 용도', '플랫폼', '핵심 차이'],
        rows: [
          {
            '옵션': 'Jarvis (Mac)',
            '적합한 용도': 'macOS에서 완성된 오프라인 음성 어시스턴트를 사용해보기',
            '플랫폼': 'macOS 13+ 전용',
            '핵심 차이': '고정 스택(Whisper + Llama 3.2 3B + Kokoro); Lovable로 만든 독립 프로젝트',
          },
          {
            '옵션': 'Loci',
            '적합한 용도': '크로스플랫폼 프라이빗 로컬 채팅',
            '플랫폼': 'iPhone/iPad/Android/Mac/Windows',
            '핵심 차이': '더 폭넓게 큐레이션된 모델 라이브러리를 제공하지만, 주로 음성 명령에 초점을 맞추지는 않습니다. [Loci AI 리뷰](/ko/power-local-llm/loci-ai-review-offline-local-ai)를 참조하십시오.',
          },
          {
            '옵션': '직접 구축한 음성 파이프라인',
            '적합한 용도': '모델과 코드에 대한 완전한 제어가 필요한 사용자',
            '플랫폼': '구축하는 모든 OS',
            '핵심 차이': 'STT/LLM/TTS 구성 요소를 직접 선택하고 교체할 수 있지만, 설정 노력이 더 필요합니다. [완전 오프라인 음성 어시스턴트 만들기](/ko/power-local-llm/build-local-voice-assistant-2026)를 참조하십시오.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Jarvis (Mac)는 Marvel의 J.A.R.V.I.S., Apple, Amazon Alexa와 관련이 있습니까?',
            a: '아닙니다. Jarvis (Mac)는 jarvis-mac.lovable.app에서 호스팅되는 독립 macOS 앱입니다. Marvel의 가상 AI 캐릭터 J.A.R.V.I.S., Apple, Amazon Alexa, 또는 "Jarvis"라는 이름을 사용하는 다른 제품과의 확인된 제휴 관계는 없습니다. 이 이름은 서로 관련 없는 많은 제품이 공유하고 있습니다.',
          },
          {
            q: 'Jarvis (Mac)는 어떤 모델을 사용합니까?',
            a: '개발자가 밝힌 아키텍처에 따르면, Jarvis (Mac)는 Speech-to-Text에 Whisper, 추론에 30억 매개변수 언어 모델인 Llama 3.2 3B, Text-to-Speech에 Kokoro를 사용합니다. 세 가지 모두 Apple의 Metal GPU 프레임워크를 통해 Mac에서 로컬로 실행됩니다.',
          },
          {
            q: 'Jarvis (Mac)는 인터넷 연결 없이 작동합니까?',
            a: '개발자의 포지셔닝인 "Fully offline. Fully yours"는 앱과 모델을 설치한 후에는 음성 명령이 인터넷 연결 없이 기기에서 작동한다고 밝히고 있습니다. 최초 다운로드와 설정에는 대부분의 로컬 AI 앱과 마찬가지로 인터넷이 필요합니다.',
          },
          {
            q: 'Jarvis (Mac)를 사용하는 데 API 키가 필요합니까?',
            a: '개발자가 밝힌 설계에 따르면 필요하지 않습니다. 추론이 Apple Metal에서 Llama 3.2 3B를 통해 로컬로 실행되므로, Jarvis (Mac)는 핵심 음성 기능에 API 키나 클라우드 AI 제공업체 계정이 필요 없는 것으로 포지셔닝되어 있습니다.',
          },
          {
            q: 'Jarvis (Mac)를 실행하려면 어떤 Mac이 필요합니까?',
            a: 'Jarvis (Mac)에는 macOS 13 이상이 필요합니다. Apple의 Metal GPU 프레임워크를 통한 Llama 3.2 3B의 로컬 추론은 연산 집약적이며 이전 Intel Mac이 아닌 Apple Silicon에 최적화되어 있으므로, Apple Silicon(M 시리즈 칩)이 권장됩니다.',
          },
          {
            q: 'Jarvis (Mac)는 누가 만듭니까?',
            a: 'Jarvis (Mac)는 독립 개발자들이 앱을 제작하고 배포하는 데 사용하는 Lovable 앱 빌더 플랫폼에서 제작 및 호스팅됩니다. 이 프로젝트의 회사명, 자금 조달 상태, 팀 규모는 공개적으로 확인되지 않았습니다 — 대형 상업 벤더의 제품이 아니라 독립 프로젝트로 평가해야 합니다.',
          },
          {
            q: 'Jarvis (Mac)의 가격은 얼마입니까?',
            a: '이 리뷰에서는 가격을 독립적으로 검증하지 않았습니다. Lovable과 같은 플랫폼에서 제작된 독립 앱은 예고 없이 가격을 변경할 수 있으므로, 설치하기 전에 [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/)에서 직접 현재 가격을 확인하십시오.',
          },
          {
            q: 'Jarvis (Mac)가 Siri나 클라우드 음성 어시스턴트를 대체할 수 있습니까?',
            a: '로컬 Llama 3.2 3B 모델만으로 처리되는 음성 명령의 경우, Jarvis (Mac)는 클라우드 기반 음성 어시스턴트의 오프라인 대안으로 포지셔닝되어 있습니다. 다른 30억 매개변수 로컬 모델과 동일한 추론 한계에 직면하므로, 최고 수준의 추론이나 실시간 웹 지식이 필요한 작업의 대체재로 포지셔닝되어 있지는 않습니다.',
          },
          {
            q: 'Jarvis (Mac)는 Loci나 직접 구축한 음성 어시스턴트와 어떻게 다릅니까?',
            a: 'Jarvis (Mac)는 고정된 모델 스택(Whisper, Llama 3.2 3B, Kokoro)과 최소한의 설정으로 macOS 전용으로 제공됩니다. [Loci](/ko/power-local-llm/loci-ai-review-offline-local-ai)는 더 폭넓은 모델 라이브러리로 다섯 개 플랫폼을 지원하지만, 주로 음성 명령에 초점을 맞추지는 않습니다. [직접 구축한 음성 파이프라인](/ko/power-local-llm/build-local-voice-assistant-2026)은 수동 설정이라는 비용을 치르는 대신 사용할 모델에 대한 완전한 제어권을 제공합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Jarvis (Mac)는 클라우드 API 키를 유지하거나 핵심 상호작용을 위한 인터넷 연결을 유지하지 않고, 로컬 Whisper + Llama 3.2 3B + Kokoro 파이프라인을 사용해 Mac을 음성으로 제어할 수 있는 macOS 앱을 특별히 원한다면 시도해볼 가치가 있습니다. 개발자가 밝힌 설계에 따른 주요 강점은 고정되고 설정이 필요 없는 로컬 음성 스택과 Apple Silicon에서의 Apple Metal GPU 가속입니다. 주요 한계는 다른 30억 매개변수 로컬 모델이 직면하는 것과 동일합니다 — 최고 수준 클라우드 모델보다 낮은 추론 한계 — 여기에 더해, 자금을 지원받은 상업 벤더가 아니라 Lovable 앱 빌더 플랫폼에서 만든 단일 개발자 또는 소규모 팀 프로젝트라는 실질적인 사실이 있으므로, 가격, 지원, 장기적인 유지보수 약속은 전제로 삼지 말고 [jarvis-mac.lovable.app](https://jarvis-mac.lovable.app/)에서 직접 확인해야 합니다. 크로스플랫폼 지원이나 더 깊은 모델 제어가 필요한 사용자는 [Loci](/ko/power-local-llm/loci-ai-review-offline-local-ai)나 [직접 구축한 음성 파이프라인](/ko/power-local-llm/build-local-voice-assistant-2026)과 비교해봐야 합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Jarvis (Mac) 공식 사이트](https://jarvis-mac.lovable.app/) — 제품 포지셔닝, 마케팅 문구 "Fully offline. Fully yours", 현재 앱 세부 정보.',
          '[Lovable](https://lovable.dev) — Jarvis (Mac)가 제작 및 호스팅되는 앱 빌더 플랫폼.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Loci AI 리뷰: iPhone, Android, iPad, Mac, Windows용 오프라인 AI](/ko/power-local-llm/loci-ai-review-offline-local-ai) — 크로스플랫폼 온디바이스 AI 앱 비교.',
          '[2026년 완전 오프라인 음성 어시스턴트 만들기: Whisper + LLM + Piper](/ko/power-local-llm/build-local-voice-assistant-2026) — 직접 STT/LLM/TTS 스택을 선택하고 싶은 독자를 위한 처음부터 만드는 가이드.',
          '[2026년 로컬 Whisper STT 비교](/ko/power-local-llm/local-whisper-stt-comparison-2026) — 이런 파이프라인에서 사용되는 Speech-to-Text 레이어를 자세히 살펴봅니다.',
          '[2026년 로컬 TTS 및 음성 복제: Piper vs Coqui vs XTTS v2](/ko/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Kokoro 이외의 Text-to-Speech 옵션 비교.',
          '[2026년 Apple Silicon 로컬 LLM 가이드](/ko/local-llms/apple-silicon-local-llm-guide-2026) — Apple의 Metal GPU 프레임워크를 통해 로컬 모델을 실행하는 배경 지식.',
          '[2026년 Mac(Apple Silicon)에서 Ollama 설정](/ko/local-llms/ollama-on-mac-apple-silicon-setup-2026) — Jarvis 같은 패키지 앱 없이 Mac에서 로컬 모델을 실행하고 싶은 독자를 위한 가이드.',
        ],
      },
    },
  },
}
