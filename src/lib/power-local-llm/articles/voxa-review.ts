import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/voxa-review-hero-en.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-04',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    educationalLevel: 'Intermediate',
    audience: 'Privacy-conscious desktop users and self-hosters deciding whether a floating voice-orb assistant with optional local inference fits their workflow better than a browser-based cloud assistant',
    primaryTerm: 'Voxa',
    title: 'Voxa Review 2026: Private Voice Assistant Orb for Desktop',
    seoTitle: 'Voxa Review 2026: Private Voice Assistant Orb for Desktop',
    intro: 'Voxa, available at [askvoxa.dev](https://askvoxa.dev/), is an open-source desktop voice assistant that presents itself as a frameless, always-on-top orb you tap to start a realtime voice conversation. It is built with Tauri v2 and released under the MIT license, and it searches and saves local notes as plain Markdown files on your machine. Voxa is hybrid rather than exclusively on-device: it can route conversations through cloud realtime voice models (Google Gemini Live or OpenAI Realtime) or through a self-hosted local daemon you configure yourself.',
    metaDescription: 'Voxa review: an open-source, MIT-licensed voice-orb assistant for Windows, macOS, and Linux. How the hybrid cloud/local-daemon setup works, Markdown note storage, and who should use it.',
    readTime: '9 min read',
    targetKeywords: [
      'Voxa review',
      'Voxa voice assistant',
      'Voxa AI orb',
      'Voxa local voice assistant',
      '[askvoxa.dev](https://askvoxa.dev/)',
    ],
    leadAnswerBlock: '**Voxa is an open-source, MIT-licensed desktop voice assistant (Tauri v2) that runs as a floating, always-on-top orb — tap it to start a realtime voice conversation.** It is not exclusively local: it can use cloud realtime voice models (Gemini Live or OpenAI Realtime) or a self-hosted local daemon you configure yourself, and it saves notes as plain Markdown files on your own machine.',
    quickAnswerTop: {
      en: {
        question: 'Is Voxa a fully local, offline voice assistant?',
        answer: 'No — Voxa is hybrid, not exclusively on-device. By default it is built to route realtime voice conversations through a cloud provider (Google Gemini Live or OpenAI Realtime), which requires an internet connection and that provider\'s own API access. A local-only setup is possible, but it requires you to configure and run a self-hosted local daemon yourself — it is not the out-of-the-box default.',
        bullets: [
          'Open source, MIT license, built with Tauri v2 — confirmed at [askvoxa.dev](https://askvoxa.dev/)',
          'Two backend paths: cloud realtime voice models (Gemini Live, OpenAI Realtime) or a self-hosted local daemon',
          'Notes are saved as plain Markdown files on your machine, not in a proprietary format',
          'Configuration, data, and API keys stay on your machine — no proprietary backend server run by Voxa itself',
          'UI is a frameless, always-on-top orb rather than a browser tab or chat window',
          'Platforms: Windows (WebView2), macOS (WKWebView), Linux (WebKitGTK 4.1)',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What Is Voxa?', anchor: 'what-is-voxa' },
      { label: 'Core Features', anchor: 'core-features' },
      { label: 'Is Voxa Actually Local?', anchor: 'is-voxa-local' },
      { label: 'Voxa on Windows, macOS, and Linux', anchor: 'platforms' },
      { label: 'Who Should Use Voxa', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Voxa', anchor: 'who-should-not-use' },
      { label: 'Common Mistakes', anchor: 'common-mistakes' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR — Voxa in 2026',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Voxa is an open-source, MIT-licensed desktop voice assistant built with Tauri v2 that appears as a floating, always-on-top orb, supports realtime voice conversation through either a cloud provider (Gemini Live or OpenAI Realtime) or a self-hosted local daemon, and saves notes as plain Markdown files on the user\'s own machine.' },
          { type: 'plain-terms', text: 'Instead of opening a browser tab or an app window, you get a small floating circle that sits on top of your other windows. Tap it and start talking; it can use a cloud AI voice service or, if you set one up yourself, a voice model running on your own computer, and it writes down notes as plain text files you can open in any editor.' },
        ],
        items: [
          'Built with Tauri v2, released under the MIT license — no proprietary backend software required to run the app itself',
          'UI: a frameless, always-on-top orb rather than a conventional window or browser tab',
          'Hybrid model backend: cloud realtime voice (Google Gemini Live or OpenAI Realtime) or a self-hosted local daemon you configure yourself',
          'Notes and search results are saved as plain Markdown files on the local filesystem, not a proprietary database',
          'Configuration, data, and API keys are stored on the user\'s own machine',
          'Available for Windows (WebView2), macOS (WKWebView), and Linux (WebKitGTK 4.1)',
          'Official site: [askvoxa.dev](https://askvoxa.dev/)',
        ],
        callouts: [
          { type: 'note', text: 'Voxa is not exclusively an on-device tool. The cloud backend (Gemini Live or OpenAI Realtime) is the simpler path and depends on that provider\'s API and an internet connection; a fully local setup requires you to run and point Voxa at your own self-hosted daemon. See "Is Voxa Actually Local?" below before assuming this is a no-cloud, no-setup local app.' },
        ],
      },
      overview: {
        id: 'what-is-voxa',
        title: 'What Is Voxa?',
        content: 'Voxa is an open-source desktop voice assistant, published at [askvoxa.dev](https://askvoxa.dev/) and built with Tauri v2, a framework for building lightweight cross-platform desktop apps with a web-based UI wrapped in a native shell. Voxa is released under the MIT license.',
        items: [
          'Core interaction model: a frameless, always-on-top orb that floats above your other windows — you tap it to start a realtime voice conversation, rather than opening a separate chat window or browser tab',
          'Model backend is configurable, not fixed to one provider: cloud realtime voice models (Google Gemini Live or OpenAI Realtime) or a self-hosted local daemon',
          'Built with Tauri v2, which renders the UI using the operating system\'s own web engine (WebView2 on Windows, WKWebView on macOS, WebKitGTK 4.1 on Linux) instead of bundling a separate browser engine like Electron does',
          'Notes and information the assistant looks up or is asked to save are written as plain Markdown files on the local filesystem',
          'No proprietary backend server run by Voxa itself — the app\'s own configuration, data, and API keys stay on your machine; any cloud calls go directly to the model provider you configure (Google or OpenAI), not to a Voxa-operated server',
        ],
        note: 'Voxa is under active development; verify current feature scope, supported model providers, and platform requirements directly at [askvoxa.dev](https://askvoxa.dev/) before making a decision that depends on a specific capability.',
      },
      coreFeatures: {
        id: 'core-features',
        title: 'What Are Voxa\'s Core Features?',
        content: '**Voxa\'s three defining features are the always-on-top voice orb, Markdown-based note storage, and its open-source Tauri v2 foundation.** Each shapes how the app behaves compared with a browser-based or subscription voice assistant.',
        subsections: [
          {
            title: 'The floating voice orb',
            content: 'Voxa\'s interface is a frameless, always-on-top orb rather than a full application window or browser tab. It stays visible above other windows so a realtime voice conversation can start with a single tap, without switching focus away from whatever you were working on.',
          },
          {
            title: 'Markdown-based notes and search',
            content: 'When Voxa searches for information or is asked to save something, the result is written as a plain Markdown file on your local filesystem — not locked into a proprietary database or a cloud-only note store. Because Markdown is a plain-text format, those files stay readable and editable in any text editor or note app, independent of whether Voxa is running.',
          },
          {
            title: 'Open source: Tauri v2 and MIT license',
            content: 'Voxa is built with Tauri v2 and released under the MIT license, a permissive open-source license with no restriction on inspecting, modifying, or redistributing the source. Tauri apps use the operating system\'s own web-rendering engine for the UI instead of bundling a separate browser engine, which is why supported-platform requirements are tied to a specific OS web-engine version on each platform (see the platform section below).',
          },
        ],
      },
      isVoxaLocal: {
        id: 'is-voxa-local',
        title: 'Is Voxa Actually Local?',
        content: '**Voxa is a hybrid app, not an exclusively on-device one — be clear about this distinction before choosing it as a "local AI" tool.** It supports two separate backend paths for the realtime voice model, and only one of them keeps model inference on your own hardware.',
        items: [
          '**Cloud realtime voice models** — Voxa can route the realtime voice conversation through Google Gemini Live or OpenAI Realtime. This path requires an internet connection and your own API access/credentials with that provider; the voice model itself runs on that provider\'s servers, not on your device.',
          '**Self-hosted local daemon** — Voxa can instead be pointed at a local daemon you configure and run yourself, keeping voice-model inference on your own machine or network rather than sending audio to a cloud provider. This is the path that makes Voxa function as a local AI tool, but it is opt-in setup work on your part, not the default, zero-configuration behavior.',
        ],
        callouts: [
          { type: 'note', text: 'What stays local regardless of which backend you choose: the app\'s own configuration, your notes (saved as plain Markdown files), and your API keys — these are stored on your machine, not on a Voxa-operated server. What does not stay local by default: the realtime voice model itself, unless you have configured the self-hosted local-daemon path.' },
        ],
        note: 'If a fully offline, no-cloud-dependency setup is the requirement, confirm the self-hosted local daemon is configured and reachable before relying on Voxa without an internet connection — the cloud realtime-voice path (Gemini Live or OpenAI Realtime) will not function offline.',
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'Voxa on Windows, macOS, and Linux',
        columns: ['Platform', 'What to expect'],
        rows: [
          {
            'Platform': 'Windows',
            'What to expect': 'Voxa renders its UI using WebView2, the Chromium-based web engine Microsoft ships with modern Windows. A current WebView2 runtime is required for the app\'s orb interface and voice UI to display correctly.',
          },
          {
            'Platform': 'macOS',
            'What to expect': 'Voxa uses WKWebView, Apple\'s built-in web-rendering engine, for its UI. Because Tauri relies on the OS-provided engine rather than bundling its own, behavior tracks whatever WKWebView version ships with your macOS release.',
          },
          {
            'Platform': 'Linux',
            'What to expect': 'Voxa uses WebKitGTK 4.1 for its UI on Linux. This is a specific WebKitGTK version, not just "any WebKit build" — confirm your distribution packages WebKitGTK 4.1 (or a compatible version) before installing, since older distro package versions may not match.',
          },
        ],
        note: 'Because Tauri v2 renders the UI through each operating system\'s own web engine instead of a bundled browser engine, the exact minimum OS/engine version for each platform is not something this article can pin down as a permanent number — confirm current platform requirements directly at [askvoxa.dev](https://askvoxa.dev/) before installing.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Voxa?',
        content: 'The right fit depends on whether an always-visible voice orb and Markdown-based notes match how you want to talk to an assistant, and whether you are willing to set up a local daemon if full local inference matters to you.',
        subsections: [
          {
            title: 'Use Voxa if',
            list: [
              'You want a voice assistant that stays visible as a small floating orb rather than a full window or browser tab you have to switch to',
              'You want your notes stored as plain Markdown files you can open, search, and edit outside the app, instead of a proprietary format',
              'You are comfortable using a cloud realtime voice provider (Gemini Live or OpenAI Realtime) with your own API access, or you are willing to configure a self-hosted local daemon if you want inference to stay on your own hardware',
              'You want an open-source, MIT-licensed app where you can inspect or modify the source, rather than a closed-source subscription assistant',
            ],
          },
          {
            title: 'Consider a different tool if',
            list: [
              'You need a fully local, zero-configuration voice assistant out of the box — Voxa\'s default path is cloud-backed, and local-only operation requires you to set up the self-hosted daemon yourself',
              'You want a mobile app rather than a desktop tool — Voxa targets Windows, macOS, and Linux desktop, not iOS or Android',
              'You need a fully documented, end-to-end open-source voice pipeline (speech-to-text, LLM, text-to-speech) with every component specified — see [Build a Local Voice Assistant on Your Phone](/power-local-llm/voice-assistant-local-mobile-offline) or [Build a Local Voice Assistant: Full Guide](/power-local-llm/build-local-voice-assistant-2026) for that kind of fully specified pipeline',
            ],
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes When Evaluating Voxa',
        content: 'Most confusion about Voxa comes from assuming it behaves like either a purely local app or a purely cloud app, when it is designed as a configurable hybrid of both.',
        subsections: [
          {
            title: 'Mistake 1: Assuming Voxa runs fully offline by default',
            content: 'Voxa\'s default, lowest-friction path is a cloud realtime voice model (Gemini Live or OpenAI Realtime), which needs an internet connection and that provider\'s API access. Offline, fully local operation is possible, but only after you configure and run the self-hosted local daemon yourself.',
          },
          {
            title: 'Mistake 2: Assuming "open source" means "no cloud calls"',
            content: 'Voxa\'s own application code being open source (MIT license, Tauri v2) is a separate fact from which voice-model backend you choose to use. Open-source app code can still be configured to send realtime audio to a third-party cloud provider — check which backend path you have actually configured, not just the app\'s license.',
          },
          {
            title: 'Mistake 3: Expecting the same Markdown notes across every device automatically',
            content: 'Notes are saved as plain Markdown files on the local filesystem of the machine Voxa is running on. Unless you separately set up your own sync (a cloud-drive folder, a git repo, or similar), notes on one machine are not automatically available on another.',
          },
          {
            title: 'Mistake 4: Installing without checking the platform web-engine requirement',
            content: 'Because Voxa is built with Tauri v2, its UI depends on the operating system\'s own web engine — WebView2 on Windows, WKWebView on macOS, WebKitGTK 4.1 on Linux — rather than a bundled browser engine. An outdated or missing engine on your system can prevent the orb UI from rendering correctly; confirm your platform\'s engine is current before assuming an install issue is a Voxa bug.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'What is Voxa?', a: 'Voxa is an open-source, MIT-licensed desktop voice assistant built with Tauri v2, available at [askvoxa.dev](https://askvoxa.dev/). It presents itself as a frameless, always-on-top orb you tap to start a realtime voice conversation, and it can use a cloud realtime voice model or a self-hosted local daemon as its backend.' },
          { q: 'Is Voxa free?', a: 'Voxa\'s own application code is open source under the MIT license. If you use the cloud realtime voice backend (Gemini Live or OpenAI Realtime), you are subject to that provider\'s own pricing and API terms, separate from Voxa itself. Confirm current pricing for Gemini Live or OpenAI Realtime directly with Google or OpenAI.' },
          { q: 'Does Voxa run fully offline?', a: 'Only if you configure the self-hosted local daemon path. By default, Voxa is set up to use a cloud realtime voice provider (Gemini Live or OpenAI Realtime), which requires an internet connection. A fully offline setup is possible but requires you to run and point Voxa at your own local daemon.' },
          { q: 'What platforms does Voxa support?', a: 'Windows (using the WebView2 engine), macOS (using WKWebView), and Linux (using WebKitGTK 4.1). Voxa is a desktop app built with Tauri v2, not a mobile app for iOS or Android.' },
          { q: 'Where does Voxa store my notes?', a: 'As plain Markdown files on your local filesystem, not in a proprietary database or a cloud-only format. This means notes remain readable and editable in any text editor independent of whether Voxa is installed or running.' },
          { q: 'Does Voxa send my API keys or data anywhere?', a: 'Configuration, data, and API keys are stored on your own machine. If you use the cloud realtime voice backend, your audio and conversation data is sent to whichever provider you configured (Google Gemini Live or OpenAI Realtime), under that provider\'s own data-handling terms — not to a separate Voxa-operated server.' },
          { q: 'What is the difference between the cloud backend and the local daemon backend in Voxa?', a: 'The cloud backend (Gemini Live or OpenAI Realtime) routes the realtime voice model through that provider\'s servers and requires an internet connection and API access with that provider. The self-hosted local daemon backend keeps voice-model inference on hardware you control, but you have to set up and run that daemon yourself — it is not preconfigured.' },
          { q: 'Is Voxa open source?', a: 'Yes. Voxa is built with Tauri v2 and released under the MIT license, a permissive license that allows inspecting, modifying, and redistributing the source code without restriction on commercial use.' },
          { q: 'Can I use Voxa without an internet connection?', a: 'Only if you have configured and are running the self-hosted local daemon as your voice-model backend. The cloud realtime-voice path (Gemini Live or OpenAI Realtime) requires connectivity to function.' },
          { q: 'Does Voxa require a specific browser engine on my system?', a: 'Yes, indirectly — because it is built with Tauri v2, Voxa renders its UI through the operating system\'s own web engine: WebView2 on Windows, WKWebView on macOS, and WebKitGTK 4.1 on Linux. Make sure the relevant engine is present and current on your system before installing.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        links: [
          { url: 'https://[askvoxa.dev](https://askvoxa.dev/)/', title: 'Voxa official site', description: 'Product overview, platform availability, and setup information for Voxa, the source for the facts in this review.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Build a Local Voice Assistant: Full Guide (2026)](/power-local-llm/build-local-voice-assistant-2026) — a fully specified open-source voice pipeline (speech-to-text, local LLM, text-to-speech) for readers who want every component documented.',
          '[Build a Local Voice Assistant on Your Phone: Whisper + Local LLM (No Cloud)](/power-local-llm/voice-assistant-local-mobile-offline) — the mobile-focused counterpart, with measured latency and battery data.',
          '[Local Whisper STT Comparison 2026](/power-local-llm/local-whisper-stt-comparison-2026) — for readers comparing local speech-to-text options rather than a hybrid cloud/local app like Voxa.',
          '[Local TTS and Voice Cloning: Piper, Coqui, XTTS](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — local text-to-speech options for a fully offline voice pipeline.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory) — the full catalog of local AI tools and apps this review belongs to.',
        ],
      },
    },
  },
  de: {
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/voxa-review-hero-de.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-04',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    educationalLevel: 'Intermediate',
    audience: 'Datenschutzbewusste Desktop-Nutzer und Self-Hoster, die entscheiden möchten, ob ein schwebender Sprach-Orb-Assistent mit optionaler lokaler Inferenz besser zu ihrem Workflow passt als ein browserbasierter Cloud-Assistent',
    primaryTerm: 'Voxa',
    title: 'Voxa Review 2026: Privater Sprachassistent-Orb für den Desktop',
    seoTitle: 'Voxa Review 2026: Privater Sprachassistent-Orb für Desktop',
    intro: 'Voxa, verfügbar unter [askvoxa.dev](https://askvoxa.dev/), ist ein Open-Source-Desktop-Sprachassistent, der sich als rahmenloser, immer im Vordergrund bleibender Orb präsentiert, den man antippt, um ein Echtzeit-Sprachgespräch zu starten. Er wurde mit Tauri v2 gebaut und steht unter der MIT-Lizenz, und er sucht und speichert lokale Notizen als reine Markdown-Dateien auf dem eigenen Rechner. Voxa ist hybrid statt ausschließlich lokal: Es kann Gespräche entweder über Cloud-Echtzeit-Sprachmodelle (Google Gemini Live oder OpenAI Realtime) oder über einen selbst gehosteten lokalen Daemon führen, den man selbst konfiguriert.',
    metaDescription: 'Voxa Review: ein Open-Source, MIT-lizenzierter Sprach-Orb-Assistent für Windows, macOS und Linux. Wie das hybride Cloud/lokale-Daemon-Setup funktioniert, Markdown-Notizen und für wen es geeignet ist.',
    readTime: '9 Min. Lesezeit',
    targetKeywords: [
      'Voxa Review',
      'Voxa Sprachassistent',
      'Voxa AI Orb',
      'Voxa lokaler Sprachassistent',
      '[askvoxa.dev](https://askvoxa.dev/)',
    ],
    leadAnswerBlock: '**Voxa ist ein Open-Source, MIT-lizenzierter Desktop-Sprachassistent (Tauri v2), der als schwebender, immer im Vordergrund bleibender Orb läuft — antippen, um ein Echtzeit-Sprachgespräch zu starten.** Er ist nicht ausschließlich lokal: Er kann Cloud-Echtzeit-Sprachmodelle (Gemini Live oder OpenAI Realtime) oder einen selbst gehosteten lokalen Daemon nutzen, und er speichert Notizen als reine Markdown-Dateien auf dem eigenen Rechner.',
    quickAnswerTop: {
      de: {
        question: 'Ist Voxa ein vollständig lokaler, offline nutzbarer Sprachassistent?',
        answer: 'Nein — Voxa ist hybrid, nicht ausschließlich lokal auf dem Gerät. Standardmäßig ist es so gebaut, dass Echtzeit-Sprachgespräche über einen Cloud-Anbieter (Google Gemini Live oder OpenAI Realtime) laufen, was eine Internetverbindung und den eigenen API-Zugang bei diesem Anbieter erfordert. Ein rein lokales Setup ist möglich, erfordert aber, dass man selbst einen selbst gehosteten lokalen Daemon konfiguriert und betreibt — das ist nicht der Standardzustand ohne weitere Einrichtung.',
        bullets: [
          'Open Source, MIT-Lizenz, gebaut mit Tauri v2 — bestätigt auf [askvoxa.dev](https://askvoxa.dev/)',
          'Zwei Backend-Wege: Cloud-Echtzeit-Sprachmodelle (Gemini Live, OpenAI Realtime) oder ein selbst gehosteter lokaler Daemon',
          'Notizen werden als reine Markdown-Dateien auf dem eigenen Rechner gespeichert, nicht in einem proprietären Format',
          'Konfiguration, Daten und API-Schlüssel bleiben auf dem eigenen Rechner — kein proprietärer Backend-Server von Voxa selbst',
          'Die Oberfläche ist ein rahmenloser, immer im Vordergrund bleibender Orb statt eines Browser-Tabs oder Chatfensters',
          'Plattformen: Windows (WebView2), macOS (WKWebView), Linux (WebKitGTK 4.1)',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'Was ist Voxa?', anchor: 'what-is-voxa' },
      { label: 'Kernfunktionen', anchor: 'core-features' },
      { label: 'Ist Voxa wirklich lokal?', anchor: 'is-voxa-local' },
      { label: 'Voxa unter Windows, macOS und Linux', anchor: 'platforms' },
      { label: 'Für wen eignet sich Voxa', anchor: 'who-should-use' },
      { label: 'Für wen eignet sich Voxa nicht', anchor: 'who-should-not-use' },
      { label: 'Häufige Fehler', anchor: 'common-mistakes' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung — Voxa im Jahr 2026',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Voxa ist ein Open-Source, MIT-lizenzierter Desktop-Sprachassistent, gebaut mit Tauri v2, der als schwebender, immer im Vordergrund bleibender Orb erscheint, Echtzeit-Sprachgespräche entweder über einen Cloud-Anbieter (Gemini Live oder OpenAI Realtime) oder über einen selbst gehosteten lokalen Daemon unterstützt und Notizen als reine Markdown-Dateien auf dem eigenen Rechner speichert.' },
          { type: 'plain-terms', text: 'Statt einen Browser-Tab oder ein Programmfenster zu öffnen, bekommt man einen kleinen schwebenden Kreis, der über den anderen Fenstern liegt. Antippen und loslegen: Er kann einen Cloud-KI-Sprachdienst nutzen oder, wenn man ihn selbst einrichtet, ein Sprachmodell auf dem eigenen Rechner — und er schreibt Notizen als reine Textdateien, die man in jedem Editor öffnen kann.' },
        ],
        items: [
          'Gebaut mit Tauri v2, veröffentlicht unter der MIT-Lizenz — für die App selbst ist keine proprietäre Backend-Software nötig',
          'Oberfläche: ein rahmenloser, immer im Vordergrund bleibender Orb statt eines gewöhnlichen Fensters oder Browser-Tabs',
          'Hybrides Modell-Backend: Cloud-Echtzeit-Sprache (Google Gemini Live oder OpenAI Realtime) oder ein selbst gehosteter lokaler Daemon, den man selbst konfiguriert',
          'Notizen und Suchergebnisse werden als reine Markdown-Dateien im lokalen Dateisystem gespeichert, nicht in einer proprietären Datenbank',
          'Konfiguration, Daten und API-Schlüssel werden auf dem eigenen Rechner gespeichert',
          'Verfügbar für Windows (WebView2), macOS (WKWebView) und Linux (WebKitGTK 4.1)',
          'Offizielle Website: [askvoxa.dev](https://askvoxa.dev/)',
        ],
        callouts: [
          { type: 'note', text: 'Voxa ist kein ausschließlich lokales Tool. Das Cloud-Backend (Gemini Live oder OpenAI Realtime) ist der einfachere Weg und hängt von der API dieses Anbieters und einer Internetverbindung ab; ein vollständig lokales Setup erfordert, dass man Voxa selbst auf einen eigenen, selbst gehosteten Daemon zeigt. Siehe „Ist Voxa wirklich lokal?" weiter unten, bevor man davon ausgeht, dass dies eine cloudfreie, einrichtungsfreie lokale App ist.' },
        ],
      },
      overview: {
        id: 'what-is-voxa',
        title: 'Was ist Voxa?',
        content: 'Voxa ist ein Open-Source-Desktop-Sprachassistent, veröffentlicht unter [askvoxa.dev](https://askvoxa.dev/) und gebaut mit Tauri v2, einem Framework zum Bau leichtgewichtiger, plattformübergreifender Desktop-Apps mit webbasierter Oberfläche in einer nativen Hülle. Voxa steht unter der MIT-Lizenz.',
        items: [
          'Kern-Interaktionsmodell: ein rahmenloser, immer im Vordergrund bleibender Orb, der über den anderen Fenstern schwebt — antippen startet ein Echtzeit-Sprachgespräch, statt ein separates Chatfenster oder einen Browser-Tab zu öffnen',
          'Das Modell-Backend ist konfigurierbar, nicht auf einen Anbieter festgelegt: Cloud-Echtzeit-Sprachmodelle (Google Gemini Live oder OpenAI Realtime) oder ein selbst gehosteter lokaler Daemon',
          'Gebaut mit Tauri v2, das die Oberfläche über die eigene Web-Engine des Betriebssystems rendert (WebView2 unter Windows, WKWebView unter macOS, WebKitGTK 4.1 unter Linux), statt wie Electron eine eigene Browser-Engine mitzuliefern',
          'Notizen und Informationen, die der Assistent nachschlägt oder speichern soll, werden als reine Markdown-Dateien im lokalen Dateisystem geschrieben',
          'Kein proprietärer Backend-Server von Voxa selbst — die eigene Konfiguration, Daten und API-Schlüssel der App bleiben auf dem eigenen Rechner; Cloud-Aufrufe gehen direkt an den konfigurierten Modellanbieter (Google oder OpenAI), nicht an einen von Voxa betriebenen Server',
        ],
        note: 'Voxa wird aktiv weiterentwickelt; aktuellen Funktionsumfang, unterstützte Modellanbieter und Plattformanforderungen direkt auf [askvoxa.dev](https://askvoxa.dev/) prüfen, bevor eine Entscheidung von einer bestimmten Funktion abhängt.',
      },
      coreFeatures: {
        id: 'core-features',
        title: 'Was sind die Kernfunktionen von Voxa?',
        content: '**Voxas drei prägende Merkmale sind der immer im Vordergrund bleibende Sprach-Orb, die Markdown-basierte Notizspeicherung und die Open-Source-Basis mit Tauri v2.** Jedes prägt, wie sich die App im Vergleich zu einem browserbasierten oder abo-pflichtigen Sprachassistenten verhält.',
        subsections: [
          {
            title: 'Der schwebende Sprach-Orb',
            content: 'Voxas Oberfläche ist ein rahmenloser, immer im Vordergrund bleibender Orb statt eines vollständigen Anwendungsfensters oder Browser-Tabs. Er bleibt über anderen Fenstern sichtbar, sodass ein Echtzeit-Sprachgespräch mit einem einzigen Antippen starten kann, ohne den Fokus von der aktuellen Arbeit wegzunehmen.',
          },
          {
            title: 'Markdown-basierte Notizen und Suche',
            content: 'Wenn Voxa Informationen sucht oder etwas gespeichert werden soll, wird das Ergebnis als reine Markdown-Datei im lokalen Dateisystem geschrieben — nicht in einer proprietären Datenbank oder einem reinen Cloud-Notizspeicher eingeschlossen. Da Markdown ein reines Textformat ist, bleiben diese Dateien in jedem Texteditor oder jeder Notiz-App lesbar und bearbeitbar, unabhängig davon, ob Voxa läuft.',
          },
          {
            title: 'Open Source: Tauri v2 und MIT-Lizenz',
            content: 'Voxa ist mit Tauri v2 gebaut und steht unter der MIT-Lizenz, einer freizügigen Open-Source-Lizenz ohne Einschränkung für das Einsehen, Verändern oder Weiterverbreiten des Quellcodes. Tauri-Apps nutzen für die Oberfläche die eigene Web-Rendering-Engine des Betriebssystems statt einer separat mitgelieferten Browser-Engine — deshalb sind die Plattformanforderungen an eine bestimmte Version der jeweiligen OS-Web-Engine gebunden (siehe Plattformabschnitt unten).',
          },
        ],
      },
      isVoxaLocal: {
        id: 'is-voxa-local',
        title: 'Ist Voxa wirklich lokal?',
        content: '**Voxa ist eine hybride App, keine ausschließlich lokal auf dem Gerät laufende — dieser Unterschied sollte klar sein, bevor man es als „lokales KI"-Tool wählt.** Es unterstützt zwei getrennte Backend-Wege für das Echtzeit-Sprachmodell, und nur einer davon hält die Inferenz auf der eigenen Hardware.',
        items: [
          '**Cloud-Echtzeit-Sprachmodelle** — Voxa kann das Echtzeit-Sprachgespräch über Google Gemini Live oder OpenAI Realtime führen. Dieser Weg erfordert eine Internetverbindung und eigenen API-Zugang/Zugangsdaten bei diesem Anbieter; das Sprachmodell selbst läuft auf den Servern dieses Anbieters, nicht auf dem eigenen Gerät.',
          '**Selbst gehosteter lokaler Daemon** — Voxa kann stattdessen auf einen selbst konfigurierten und betriebenen lokalen Daemon zeigen, sodass die Sprachmodell-Inferenz auf dem eigenen Rechner oder Netzwerk bleibt, statt Audio an einen Cloud-Anbieter zu senden. Das ist der Weg, der Voxa zu einem lokalen KI-Tool macht, aber es ist eine optionale Einrichtungsarbeit auf eigene Faust, nicht das Standardverhalten ohne Konfiguration.',
        ],
        callouts: [
          { type: 'note', text: 'Was unabhängig vom gewählten Backend lokal bleibt: die eigene Konfiguration der App, die Notizen (gespeichert als reine Markdown-Dateien) und die API-Schlüssel — diese liegen auf dem eigenen Rechner, nicht auf einem von Voxa betriebenen Server. Was standardmäßig nicht lokal bleibt: das Echtzeit-Sprachmodell selbst, sofern nicht der selbst gehostete lokale Daemon-Weg konfiguriert wurde.' },
        ],
        note: 'Falls ein vollständig offline nutzbares Setup ohne Cloud-Abhängigkeit die Anforderung ist, vor der Nutzung ohne Internetverbindung prüfen, dass der selbst gehostete lokale Daemon konfiguriert und erreichbar ist — der Cloud-Echtzeit-Sprachweg (Gemini Live oder OpenAI Realtime) funktioniert offline nicht.',
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'Voxa unter Windows, macOS und Linux',
        columns: ['Plattform', 'Was zu erwarten ist'],
        rows: [
          {
            'Plattform': 'Windows',
            'Was zu erwarten ist': 'Voxa rendert seine Oberfläche über WebView2, die Chromium-basierte Web-Engine, die Microsoft mit modernem Windows ausliefert. Ein aktuelles WebView2-Runtime ist nötig, damit die Orb-Oberfläche und die Sprach-UI korrekt angezeigt werden.',
          },
          {
            'Plattform': 'macOS',
            'Was zu erwarten ist': 'Voxa nutzt WKWebView, Apples integrierte Web-Rendering-Engine, für seine Oberfläche. Da Tauri auf die vom OS bereitgestellte Engine setzt, statt eine eigene mitzuliefern, richtet sich das Verhalten nach der WKWebView-Version, die mit der jeweiligen macOS-Version ausgeliefert wird.',
          },
          {
            'Plattform': 'Linux',
            'Was zu erwarten ist': 'Voxa nutzt WebKitGTK 4.1 für seine Oberfläche unter Linux. Das ist eine spezifische WebKitGTK-Version, nicht „irgendein WebKit-Build" — vor der Installation prüfen, ob die eigene Distribution WebKitGTK 4.1 (oder eine kompatible Version) paketiert, da ältere Distro-Paketversionen nicht passen könnten.',
          },
        ],
        note: 'Da Tauri v2 die Oberfläche über die eigene Web-Engine jedes Betriebssystems rendert statt über eine mitgelieferte Browser-Engine, lässt sich die genaue Mindestversion von OS/Engine für jede Plattform hier nicht als dauerhafte Zahl festlegen — aktuelle Plattformanforderungen vor der Installation direkt auf [askvoxa.dev](https://askvoxa.dev/) prüfen.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen eignet sich Voxa?',
        content: 'Die richtige Wahl hängt davon ab, ob ein dauerhaft sichtbarer Sprach-Orb und Markdown-basierte Notizen zur gewünschten Art passen, mit einem Assistenten zu sprechen, und ob man bereit ist, bei Bedarf einen lokalen Daemon selbst einzurichten, wenn vollständig lokale Inferenz wichtig ist.',
        subsections: [
          {
            title: 'Voxa nutzen, wenn',
            list: [
              'ein Sprachassistent gewünscht ist, der als kleiner schwebender Orb sichtbar bleibt, statt zu einem vollständigen Fenster oder Browser-Tab gewechselt werden zu müssen',
              'Notizen als reine Markdown-Dateien gespeichert werden sollen, die man außerhalb der App öffnen, durchsuchen und bearbeiten kann, statt in einem proprietären Format',
              'man bereit ist, einen Cloud-Echtzeit-Sprachanbieter (Gemini Live oder OpenAI Realtime) mit eigenem API-Zugang zu nutzen, oder bereit ist, bei Bedarf einen selbst gehosteten lokalen Daemon zu konfigurieren, damit die Inferenz auf der eigenen Hardware bleibt',
              'eine Open-Source-, MIT-lizenzierte App gewünscht ist, deren Quellcode man einsehen oder verändern kann, statt eines closed-source Abo-Assistenten',
            ],
          },
          {
            title: 'Ein anderes Tool in Betracht ziehen, wenn',
            list: [
              'ein vollständig lokaler, einrichtungsfreier Sprachassistent von Haus aus gewünscht wird — Voxas Standardweg ist cloudgestützt, und rein lokaler Betrieb erfordert die eigene Einrichtung des selbst gehosteten Daemons',
              'eine mobile App statt eines Desktop-Tools gewünscht wird — Voxa zielt auf Windows-, macOS- und Linux-Desktop, nicht auf iOS oder Android',
              'eine vollständig dokumentierte End-to-End-Open-Source-Sprachpipeline (Speech-to-Text, LLM, Text-to-Speech) mit jeder spezifizierten Komponente gewünscht wird — siehe [Einen lokalen Sprachassistenten auf dem Smartphone bauen](/de/power-local-llm/voice-assistant-local-mobile-offline) oder [Einen lokalen Sprachassistenten bauen: Vollständige Anleitung](/de/power-local-llm/build-local-voice-assistant-2026) für eine solche vollständig spezifizierte Pipeline',
            ],
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler bei der Einschätzung von Voxa',
        content: 'Die meiste Verwirrung um Voxa entsteht, wenn man davon ausgeht, es verhalte sich entweder wie eine rein lokale oder eine rein cloudbasierte App, obwohl es als konfigurierbares Hybrid aus beidem konzipiert ist.',
        subsections: [
          {
            title: 'Fehler 1: Annehmen, Voxa laufe standardmäßig vollständig offline',
            content: 'Voxas Standardweg mit dem geringsten Aufwand ist ein Cloud-Echtzeit-Sprachmodell (Gemini Live oder OpenAI Realtime), das eine Internetverbindung und den API-Zugang dieses Anbieters benötigt. Offline, vollständig lokaler Betrieb ist möglich, aber erst nach eigener Konfiguration und Betrieb des selbst gehosteten lokalen Daemons.',
          },
          {
            title: 'Fehler 2: Annehmen, „Open Source" bedeute „keine Cloud-Aufrufe"',
            content: 'Dass Voxas eigener Anwendungscode Open Source ist (MIT-Lizenz, Tauri v2), ist eine separate Tatsache vom gewählten Sprachmodell-Backend. Open-Source-App-Code kann trotzdem so konfiguriert sein, dass Echtzeit-Audio an einen Cloud-Anbieter eines Drittanbieters gesendet wird — prüfen, welcher Backend-Weg tatsächlich konfiguriert ist, nicht nur die Lizenz der App.',
          },
          {
            title: 'Fehler 3: Automatisch dieselben Markdown-Notizen auf jedem Gerät erwarten',
            content: 'Notizen werden als reine Markdown-Dateien im lokalen Dateisystem des Rechners gespeichert, auf dem Voxa läuft. Ohne separat eingerichtete eigene Synchronisierung (ein Cloud-Ordner, ein Git-Repository oder Ähnliches) sind Notizen auf einem Rechner nicht automatisch auf einem anderen verfügbar.',
          },
          {
            title: 'Fehler 4: Installation ohne Prüfung der Plattform-Web-Engine-Anforderung',
            content: 'Da Voxa mit Tauri v2 gebaut ist, hängt seine Oberfläche von der eigenen Web-Engine des Betriebssystems ab — WebView2 unter Windows, WKWebView unter macOS, WebKitGTK 4.1 unter Linux — statt einer mitgelieferten Browser-Engine. Eine veraltete oder fehlende Engine kann verhindern, dass die Orb-Oberfläche korrekt gerendert wird; vor der Annahme, ein Installationsproblem sei ein Voxa-Fehler, prüfen, ob die Engine der eigenen Plattform aktuell ist.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Was ist Voxa?', a: 'Voxa ist ein Open-Source, MIT-lizenzierter Desktop-Sprachassistent, gebaut mit Tauri v2, verfügbar unter [askvoxa.dev](https://askvoxa.dev/). Er präsentiert sich als rahmenloser, immer im Vordergrund bleibender Orb, den man antippt, um ein Echtzeit-Sprachgespräch zu starten, und kann als Backend ein Cloud-Echtzeit-Sprachmodell oder einen selbst gehosteten lokalen Daemon nutzen.' },
          { q: 'Ist Voxa kostenlos?', a: 'Voxas eigener Anwendungscode ist Open Source unter der MIT-Lizenz. Bei Nutzung des Cloud-Echtzeit-Sprach-Backends (Gemini Live oder OpenAI Realtime) gelten die eigenen Preise und API-Bedingungen dieses Anbieters, getrennt von Voxa selbst. Aktuelle Preise für Gemini Live oder OpenAI Realtime direkt bei Google oder OpenAI prüfen.' },
          { q: 'Läuft Voxa vollständig offline?', a: 'Nur wenn der selbst gehostete lokale Daemon-Weg konfiguriert wird. Standardmäßig ist Voxa so eingerichtet, dass es einen Cloud-Echtzeit-Sprachanbieter (Gemini Live oder OpenAI Realtime) nutzt, was eine Internetverbindung erfordert. Ein vollständig offline nutzbares Setup ist möglich, erfordert aber, dass man einen eigenen lokalen Daemon betreibt und Voxa darauf zeigt.' },
          { q: 'Welche Plattformen unterstützt Voxa?', a: 'Windows (mit der WebView2-Engine), macOS (mit WKWebView) und Linux (mit WebKitGTK 4.1). Voxa ist eine Desktop-App, gebaut mit Tauri v2, keine mobile App für iOS oder Android.' },
          { q: 'Wo speichert Voxa meine Notizen?', a: 'Als reine Markdown-Dateien im lokalen Dateisystem, nicht in einer proprietären Datenbank oder einem reinen Cloud-Format. Das bedeutet, Notizen bleiben in jedem Texteditor lesbar und bearbeitbar, unabhängig davon, ob Voxa installiert ist oder läuft.' },
          { q: 'Sendet Voxa meine API-Schlüssel oder Daten irgendwohin?', a: 'Konfiguration, Daten und API-Schlüssel werden auf dem eigenen Rechner gespeichert. Bei Nutzung des Cloud-Echtzeit-Sprach-Backends werden Audio- und Gesprächsdaten an den konfigurierten Anbieter (Google Gemini Live oder OpenAI Realtime) gesendet, gemäß dessen eigenen Datenschutzbedingungen — nicht an einen separaten, von Voxa betriebenen Server.' },
          { q: 'Was ist der Unterschied zwischen dem Cloud-Backend und dem lokalen Daemon-Backend in Voxa?', a: 'Das Cloud-Backend (Gemini Live oder OpenAI Realtime) führt das Echtzeit-Sprachmodell über die Server dieses Anbieters und erfordert eine Internetverbindung sowie eigenen API-Zugang bei diesem Anbieter. Das selbst gehostete lokale Daemon-Backend hält die Sprachmodell-Inferenz auf eigener Hardware, erfordert aber, dass man diesen Daemon selbst einrichtet und betreibt — er ist nicht vorkonfiguriert.' },
          { q: 'Ist Voxa Open Source?', a: 'Ja. Voxa ist mit Tauri v2 gebaut und steht unter der MIT-Lizenz, einer freizügigen Lizenz, die das Einsehen, Verändern und Weiterverbreiten des Quellcodes ohne Einschränkung der kommerziellen Nutzung erlaubt.' },
          { q: 'Kann ich Voxa ohne Internetverbindung nutzen?', a: 'Nur wenn der selbst gehostete lokale Daemon als Sprachmodell-Backend konfiguriert ist und läuft. Der Cloud-Echtzeit-Sprachweg (Gemini Live oder OpenAI Realtime) benötigt eine Verbindung, um zu funktionieren.' },
          { q: 'Benötigt Voxa eine bestimmte Browser-Engine auf meinem System?', a: 'Ja, indirekt — da es mit Tauri v2 gebaut ist, rendert Voxa seine Oberfläche über die eigene Web-Engine des Betriebssystems: WebView2 unter Windows, WKWebView unter macOS und WebKitGTK 4.1 unter Linux. Vor der Installation sicherstellen, dass die jeweilige Engine vorhanden und aktuell ist.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        links: [
          { url: 'https://[askvoxa.dev](https://askvoxa.dev/)/', title: 'Voxa offizielle Website', description: 'Produktübersicht, Plattformverfügbarkeit und Einrichtungsinformationen für Voxa, die Quelle für die Fakten in diesem Review.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Einen lokalen Sprachassistenten bauen: Vollständige Anleitung (2026)](/de/power-local-llm/build-local-voice-assistant-2026) — eine vollständig spezifizierte Open-Source-Sprachpipeline (Speech-to-Text, lokales LLM, Text-to-Speech) für Leser, die jede Komponente dokumentiert haben möchten.',
          '[Einen lokalen Sprachassistenten auf dem Smartphone bauen: Whisper + lokales LLM (ohne Cloud)](/de/power-local-llm/voice-assistant-local-mobile-offline) — das mobile Gegenstück, mit gemessenen Latenz- und Akkudaten.',
          '[Vergleich lokaler Whisper-STT-Optionen 2026](/de/power-local-llm/local-whisper-stt-comparison-2026) — für Leser, die lokale Speech-to-Text-Optionen statt einer hybriden Cloud/lokal-App wie Voxa vergleichen möchten.',
          '[Lokale TTS und Voice Cloning: Piper, Coqui, XTTS](/de/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — lokale Text-to-Speech-Optionen für eine vollständig offline nutzbare Sprachpipeline.',
          '[Local LLM Software Directory 2026](/de/power-local-llm/local-llm-software-directory) — der vollständige Katalog lokaler KI-Tools und -Apps, zu dem dieses Review gehört.',
        ],
      },
    },
  },
  fr: {
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/voxa-review-hero-fr.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-04',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs de bureau soucieux de leur confidentialité et adeptes de l\'auto-hébergement qui hésitent entre un assistant vocal flottant avec inférence locale optionnelle et un assistant cloud dans le navigateur',
    primaryTerm: 'Voxa',
    title: 'Voxa : avis 2026 sur l\'assistant vocal privé pour bureau',
    seoTitle: 'Voxa avis 2026 : assistant vocal privé pour bureau',
    intro: 'Voxa, disponible sur [askvoxa.dev](https://askvoxa.dev/), est un assistant vocal de bureau open source qui se présente sous la forme d\'un orbe sans bordure, toujours au premier plan, que l\'on touche pour démarrer une conversation vocale en temps réel. Il est construit avec Tauri v2 et publié sous licence MIT, et il recherche et enregistre les notes locales sous forme de fichiers Markdown en clair sur votre machine. Voxa est hybride plutôt qu\'exclusivement local : il peut acheminer les conversations via des modèles vocaux temps réel cloud (Google Gemini Live ou OpenAI Realtime) ou via un démon local auto-hébergé que vous configurez vous-même.',
    metaDescription: 'Avis Voxa : assistant vocal open source sous licence MIT, sous forme d\'orbe, pour Windows, macOS et Linux. Fonctionnement hybride cloud/démon local, notes en Markdown, et pour qui il convient.',
    readTime: '9 min de lecture',
    targetKeywords: [
      'Voxa avis',
      'Voxa assistant vocal',
      'Voxa orbe IA',
      'Voxa assistant vocal local',
      '[askvoxa.dev](https://askvoxa.dev/)',
    ],
    leadAnswerBlock: '**Voxa est un assistant vocal de bureau open source sous licence MIT (Tauri v2) qui se présente sous forme d\'orbe flottant, toujours au premier plan — le toucher pour démarrer une conversation vocale en temps réel.** Il n\'est pas exclusivement local : il peut utiliser des modèles vocaux temps réel cloud (Gemini Live ou OpenAI Realtime) ou un démon local auto-hébergé que vous configurez vous-même, et il enregistre les notes sous forme de fichiers Markdown en clair sur votre propre machine.',
    quickAnswerTop: {
      fr: {
        question: 'Voxa est-il un assistant vocal entièrement local et utilisable hors ligne ?',
        answer: 'Non — Voxa est hybride, pas exclusivement local. Par défaut, il est conçu pour acheminer les conversations vocales en temps réel via un fournisseur cloud (Google Gemini Live ou OpenAI Realtime), ce qui nécessite une connexion internet et votre propre accès API chez ce fournisseur. Une configuration entièrement locale est possible, mais elle exige de configurer et faire tourner vous-même un démon local auto-hébergé — ce n\'est pas le comportement par défaut sans configuration.',
        bullets: [
          'Open source, licence MIT, construit avec Tauri v2 — confirmé sur [askvoxa.dev](https://askvoxa.dev/)',
          'Deux voies de backend : modèles vocaux temps réel cloud (Gemini Live, OpenAI Realtime) ou démon local auto-hébergé',
          'Les notes sont enregistrées en fichiers Markdown en clair sur votre machine, pas dans un format propriétaire',
          'Configuration, données et clés API restent sur votre machine — aucun serveur backend propriétaire exploité par Voxa lui-même',
          'L\'interface est un orbe sans bordure, toujours au premier plan, plutôt qu\'un onglet de navigateur ou une fenêtre de chat',
          'Plateformes : Windows (WebView2), macOS (WKWebView), Linux (WebKitGTK 4.1)',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Qu\'est-ce que Voxa ?', anchor: 'what-is-voxa' },
      { label: 'Fonctionnalités clés', anchor: 'core-features' },
      { label: 'Voxa est-il vraiment local ?', anchor: 'is-voxa-local' },
      { label: 'Voxa sur Windows, macOS et Linux', anchor: 'platforms' },
      { label: 'Qui devrait utiliser Voxa', anchor: 'who-should-use' },
      { label: 'Qui ne devrait pas utiliser Voxa', anchor: 'who-should-not-use' },
      { label: 'Erreurs courantes', anchor: 'common-mistakes' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'À lire aussi', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés — Voxa en 2026',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Voxa est un assistant vocal de bureau open source sous licence MIT, construit avec Tauri v2, qui se présente comme un orbe flottant toujours au premier plan, prend en charge la conversation vocale en temps réel via un fournisseur cloud (Gemini Live ou OpenAI Realtime) ou un démon local auto-hébergé, et enregistre les notes en fichiers Markdown en clair sur la machine de l\'utilisateur.' },
          { type: 'plain-terms', text: 'Au lieu d\'ouvrir un onglet de navigateur ou une fenêtre d\'application, on obtient un petit cercle flottant qui reste au-dessus des autres fenêtres. On le touche et on parle : il peut utiliser un service vocal cloud ou, si on le configure soi-même, un modèle vocal tournant sur son propre ordinateur, et il écrit les notes sous forme de fichiers texte que l\'on peut ouvrir dans n\'importe quel éditeur.' },
        ],
        items: [
          'Construit avec Tauri v2, publié sous licence MIT — aucun logiciel backend propriétaire requis pour faire tourner l\'application elle-même',
          'Interface : un orbe sans bordure, toujours au premier plan, plutôt qu\'une fenêtre classique ou un onglet de navigateur',
          'Backend hybride : voix temps réel cloud (Google Gemini Live ou OpenAI Realtime) ou démon local auto-hébergé que l\'on configure soi-même',
          'Les notes et résultats de recherche sont enregistrés en fichiers Markdown en clair sur le système de fichiers local, pas dans une base de données propriétaire',
          'Configuration, données et clés API sont stockées sur la machine de l\'utilisateur',
          'Disponible pour Windows (WebView2), macOS (WKWebView) et Linux (WebKitGTK 4.1)',
          'Site officiel : [askvoxa.dev](https://askvoxa.dev/)',
        ],
        callouts: [
          { type: 'note', text: 'Voxa n\'est pas un outil exclusivement local. Le backend cloud (Gemini Live ou OpenAI Realtime) est la voie la plus simple et dépend de l\'API de ce fournisseur et d\'une connexion internet ; une configuration entièrement locale exige de faire pointer Voxa vers son propre démon auto-hébergé. Voir « Voxa est-il vraiment local ? » ci-dessous avant de supposer qu\'il s\'agit d\'un outil local sans cloud ni configuration.' },
        ],
      },
      overview: {
        id: 'what-is-voxa',
        title: 'Qu\'est-ce que Voxa ?',
        content: 'Voxa est un assistant vocal de bureau open source, publié sur [askvoxa.dev](https://askvoxa.dev/) et construit avec Tauri v2, un framework pour créer des applications de bureau multiplateformes légères avec une interface web enveloppée dans une coque native. Voxa est publié sous licence MIT.',
        items: [
          'Modèle d\'interaction principal : un orbe sans bordure, toujours au premier plan, qui flotte au-dessus des autres fenêtres — le toucher démarre une conversation vocale en temps réel, plutôt que d\'ouvrir une fenêtre de chat séparée ou un onglet de navigateur',
          'Le backend de modèle est configurable, pas figé sur un seul fournisseur : modèles vocaux temps réel cloud (Google Gemini Live ou OpenAI Realtime) ou démon local auto-hébergé',
          'Construit avec Tauri v2, qui affiche l\'interface via le moteur web du système d\'exploitation (WebView2 sous Windows, WKWebView sous macOS, WebKitGTK 4.1 sous Linux) au lieu d\'embarquer un moteur de navigateur séparé comme le fait Electron',
          'Les notes et informations que l\'assistant recherche ou est chargé d\'enregistrer sont écrites en fichiers Markdown en clair sur le système de fichiers local',
          'Aucun serveur backend propriétaire exploité par Voxa lui-même — la configuration, les données et les clés API de l\'application restent sur votre machine ; les appels cloud vont directement au fournisseur de modèle configuré (Google ou OpenAI), pas à un serveur exploité par Voxa',
        ],
        note: 'Voxa est en développement actif ; vérifiez le périmètre de fonctionnalités actuel, les fournisseurs de modèles pris en charge et les exigences de plateforme directement sur [askvoxa.dev](https://askvoxa.dev/) avant de prendre une décision qui dépend d\'une fonctionnalité précise.',
      },
      coreFeatures: {
        id: 'core-features',
        title: 'Quelles sont les fonctionnalités clés de Voxa ?',
        content: '**Les trois caractéristiques déterminantes de Voxa sont l\'orbe vocal toujours au premier plan, le stockage des notes en Markdown et sa base open source Tauri v2.** Chacune façonne le comportement de l\'application par rapport à un assistant vocal cloud dans le navigateur ou par abonnement.',
        subsections: [
          {
            title: 'L\'orbe vocal flottant',
            content: 'L\'interface de Voxa est un orbe sans bordure, toujours au premier plan, plutôt qu\'une fenêtre d\'application complète ou un onglet de navigateur. Il reste visible au-dessus des autres fenêtres, si bien qu\'une conversation vocale en temps réel peut démarrer d\'un simple geste, sans détourner le focus de la tâche en cours.',
          },
          {
            title: 'Notes et recherche basées sur Markdown',
            content: 'Quand Voxa recherche une information ou reçoit l\'ordre d\'enregistrer quelque chose, le résultat est écrit en fichier Markdown en clair sur le système de fichiers local — pas enfermé dans une base de données propriétaire ou un stockage de notes exclusivement cloud. Le Markdown étant un format texte en clair, ces fichiers restent lisibles et modifiables dans n\'importe quel éditeur de texte ou application de notes, que Voxa soit en cours d\'exécution ou non.',
          },
          {
            title: 'Open source : Tauri v2 et licence MIT',
            content: 'Voxa est construit avec Tauri v2 et publié sous licence MIT, une licence open source permissive sans restriction pour consulter, modifier ou redistribuer le code source. Les applications Tauri utilisent le moteur de rendu web propre au système d\'exploitation pour l\'interface au lieu d\'embarquer un moteur de navigateur séparé, d\'où le fait que les exigences de plateforme soient liées à une version précise du moteur web du système sur chaque plateforme (voir la section plateformes ci-dessous).',
          },
        ],
      },
      isVoxaLocal: {
        id: 'is-voxa-local',
        title: 'Voxa est-il vraiment local ?',
        content: '**Voxa est une application hybride, pas exclusivement locale — il faut être clair sur cette distinction avant de le choisir comme outil « IA locale ».** Il prend en charge deux voies de backend distinctes pour le modèle vocal, et une seule maintient l\'inférence sur votre propre matériel.',
        items: [
          '**Modèles vocaux temps réel cloud** — Voxa peut acheminer la conversation vocale en temps réel via Google Gemini Live ou OpenAI Realtime. Cette voie nécessite une connexion internet et vos propres identifiants/accès API chez ce fournisseur ; le modèle vocal lui-même tourne sur les serveurs de ce fournisseur, pas sur votre appareil.',
          '**Démon local auto-hébergé** — Voxa peut à la place pointer vers un démon local que vous configurez et faites tourner vous-même, gardant l\'inférence du modèle vocal sur votre propre machine ou réseau plutôt que d\'envoyer l\'audio à un fournisseur cloud. C\'est cette voie qui fait de Voxa un outil d\'IA locale, mais c\'est une configuration facultative à faire soi-même, pas le comportement par défaut sans configuration.',
        ],
        callouts: [
          { type: 'note', text: 'Ce qui reste local quel que soit le backend choisi : la configuration propre de l\'application, vos notes (enregistrées en fichiers Markdown en clair) et vos clés API — stockées sur votre machine, pas sur un serveur exploité par Voxa. Ce qui ne reste pas local par défaut : le modèle vocal temps réel lui-même, sauf si la voie du démon local auto-hébergé a été configurée.' },
        ],
        note: 'Si une configuration entièrement hors ligne, sans dépendance cloud, est requise, vérifiez que le démon local auto-hébergé est configuré et accessible avant de compter sur Voxa sans connexion internet — la voie vocale temps réel cloud (Gemini Live ou OpenAI Realtime) ne fonctionnera pas hors ligne.',
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'Voxa sur Windows, macOS et Linux',
        columns: ['Plateforme', 'À quoi s\'attendre'],
        rows: [
          {
            'Plateforme': 'Windows',
            'À quoi s\'attendre': 'Voxa affiche son interface via WebView2, le moteur web basé sur Chromium que Microsoft fournit avec les versions modernes de Windows. Un runtime WebView2 à jour est nécessaire pour que l\'interface de l\'orbe et l\'interface vocale s\'affichent correctement.',
          },
          {
            'Plateforme': 'macOS',
            'À quoi s\'attendre': 'Voxa utilise WKWebView, le moteur de rendu web intégré d\'Apple, pour son interface. Tauri s\'appuyant sur le moteur fourni par le système plutôt que d\'en embarquer un, le comportement suit la version de WKWebView livrée avec votre version de macOS.',
          },
          {
            'Plateforme': 'Linux',
            'À quoi s\'attendre': 'Voxa utilise WebKitGTK 4.1 pour son interface sous Linux. Il s\'agit d\'une version précise de WebKitGTK, pas d\'« un build WebKit quelconque » — vérifiez que votre distribution empaquette WebKitGTK 4.1 (ou une version compatible) avant l\'installation, car les versions plus anciennes des paquets de distribution peuvent ne pas correspondre.',
          },
        ],
        note: 'Tauri v2 affichant l\'interface via le moteur web propre à chaque système d\'exploitation plutôt qu\'un moteur de navigateur embarqué, la version minimale exacte d\'OS/moteur pour chaque plateforme ne peut pas être fixée ici comme un chiffre permanent — vérifiez les exigences de plateforme actuelles directement sur [askvoxa.dev](https://askvoxa.dev/) avant l\'installation.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Qui devrait utiliser Voxa ?',
        content: 'Le bon choix dépend de la question de savoir si un orbe vocal toujours visible et des notes en Markdown correspondent à la façon dont on souhaite parler à un assistant, et si l\'on est prêt à configurer un démon local si l\'inférence entièrement locale est importante.',
        subsections: [
          {
            title: 'Utiliser Voxa si',
            list: [
              'un assistant vocal qui reste visible sous forme de petit orbe flottant est souhaité, plutôt qu\'une fenêtre complète ou un onglet de navigateur vers lequel il faut basculer',
              'les notes doivent être stockées en fichiers Markdown en clair, ouvrables, cherchables et modifiables en dehors de l\'application, plutôt que dans un format propriétaire',
              'on est à l\'aise avec l\'utilisation d\'un fournisseur vocal temps réel cloud (Gemini Live ou OpenAI Realtime) avec son propre accès API, ou prêt à configurer un démon local auto-hébergé si l\'inférence doit rester sur son propre matériel',
              'une application open source sous licence MIT est souhaitée, dont on peut consulter ou modifier le code source, plutôt qu\'un assistant par abonnement au code fermé',
            ],
          },
          {
            title: 'Envisager un autre outil si',
            list: [
              'un assistant vocal entièrement local, sans aucune configuration, est nécessaire dès l\'installation — la voie par défaut de Voxa est adossée au cloud, et un fonctionnement purement local exige de configurer soi-même le démon auto-hébergé',
              'une application mobile est recherchée plutôt qu\'un outil de bureau — Voxa cible le bureau Windows, macOS et Linux, pas iOS ou Android',
              'une pipeline vocale open source de bout en bout, entièrement documentée (reconnaissance vocale, LLM, synthèse vocale), avec chaque composant spécifié, est recherchée — voir [Construire un assistant vocal local sur son téléphone](/fr/power-local-llm/voice-assistant-local-mobile-offline) ou [Construire un assistant vocal local : guide complet](/fr/power-local-llm/build-local-voice-assistant-2026) pour ce type de pipeline entièrement spécifiée',
            ],
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes à propos de Voxa',
        content: 'La plupart des confusions à propos de Voxa viennent du fait de supposer qu\'il se comporte soit comme une application purement locale, soit comme une application purement cloud, alors qu\'il est conçu comme un hybride configurable des deux.',
        subsections: [
          {
            title: 'Erreur 1 : supposer que Voxa tourne entièrement hors ligne par défaut',
            content: 'La voie par défaut de Voxa, la moins contraignante, est un modèle vocal temps réel cloud (Gemini Live ou OpenAI Realtime), qui nécessite une connexion internet et l\'accès API de ce fournisseur. Un fonctionnement hors ligne, entièrement local, est possible, mais seulement après avoir configuré et fait tourner soi-même le démon local auto-hébergé.',
          },
          {
            title: 'Erreur 2 : supposer que « open source » signifie « aucun appel cloud »',
            content: 'Le fait que le code de l\'application Voxa lui-même soit open source (licence MIT, Tauri v2) est un fait distinct du backend de modèle vocal choisi. Un code d\'application open source peut très bien être configuré pour envoyer l\'audio en temps réel à un fournisseur cloud tiers — vérifiez quelle voie de backend est réellement configurée, pas seulement la licence de l\'application.',
          },
          {
            title: 'Erreur 3 : s\'attendre aux mêmes notes Markdown sur chaque appareil automatiquement',
            content: 'Les notes sont enregistrées en fichiers Markdown en clair sur le système de fichiers local de la machine sur laquelle Voxa tourne. Sans mise en place séparée d\'une synchronisation (un dossier cloud, un dépôt git ou équivalent), les notes d\'une machine ne sont pas automatiquement disponibles sur une autre.',
          },
          {
            title: 'Erreur 4 : installer sans vérifier l\'exigence de moteur web de la plateforme',
            content: 'Voxa étant construit avec Tauri v2, son interface dépend du moteur web propre au système d\'exploitation — WebView2 sous Windows, WKWebView sous macOS, WebKitGTK 4.1 sous Linux — plutôt que d\'un moteur de navigateur embarqué. Un moteur obsolète ou absent sur votre système peut empêcher l\'interface de l\'orbe de s\'afficher correctement ; vérifiez que le moteur de votre plateforme est à jour avant de supposer qu\'un problème d\'installation est un bug de Voxa.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          { q: 'Qu\'est-ce que Voxa ?', a: 'Voxa est un assistant vocal de bureau open source sous licence MIT, construit avec Tauri v2, disponible sur [askvoxa.dev](https://askvoxa.dev/). Il se présente sous forme d\'orbe sans bordure, toujours au premier plan, que l\'on touche pour démarrer une conversation vocale en temps réel, et peut utiliser comme backend un modèle vocal temps réel cloud ou un démon local auto-hébergé.' },
          { q: 'Voxa est-il gratuit ?', a: 'Le code de l\'application Voxa lui-même est open source sous licence MIT. En cas d\'utilisation du backend vocal temps réel cloud (Gemini Live ou OpenAI Realtime), les tarifs et conditions API propres à ce fournisseur s\'appliquent, indépendamment de Voxa lui-même. Vérifiez les tarifs actuels de Gemini Live ou OpenAI Realtime directement auprès de Google ou d\'OpenAI.' },
          { q: 'Voxa fonctionne-t-il entièrement hors ligne ?', a: 'Seulement si la voie du démon local auto-hébergé est configurée. Par défaut, Voxa est configuré pour utiliser un fournisseur vocal temps réel cloud (Gemini Live ou OpenAI Realtime), ce qui nécessite une connexion internet. Une configuration entièrement hors ligne est possible mais exige de faire tourner son propre démon local et d\'y faire pointer Voxa.' },
          { q: 'Quelles plateformes Voxa prend-il en charge ?', a: 'Windows (avec le moteur WebView2), macOS (avec WKWebView) et Linux (avec WebKitGTK 4.1). Voxa est une application de bureau construite avec Tauri v2, pas une application mobile pour iOS ou Android.' },
          { q: 'Où Voxa stocke-t-il mes notes ?', a: 'Sous forme de fichiers Markdown en clair sur le système de fichiers local, pas dans une base de données propriétaire ou un format exclusivement cloud. Les notes restent donc lisibles et modifiables dans n\'importe quel éditeur de texte, que Voxa soit installé ou en cours d\'exécution.' },
          { q: 'Voxa envoie-t-il mes clés API ou mes données quelque part ?', a: 'La configuration, les données et les clés API sont stockées sur votre propre machine. En cas d\'utilisation du backend vocal temps réel cloud, l\'audio et les données de conversation sont envoyés au fournisseur configuré (Google Gemini Live ou OpenAI Realtime), selon les conditions de traitement des données propres à ce fournisseur — pas à un serveur séparé exploité par Voxa.' },
          { q: 'Quelle est la différence entre le backend cloud et le backend démon local dans Voxa ?', a: 'Le backend cloud (Gemini Live ou OpenAI Realtime) achemine le modèle vocal temps réel via les serveurs de ce fournisseur et nécessite une connexion internet et un accès API chez ce fournisseur. Le backend démon local auto-hébergé garde l\'inférence du modèle vocal sur du matériel que vous contrôlez, mais il faut configurer et faire tourner ce démon soi-même — il n\'est pas préconfiguré.' },
          { q: 'Voxa est-il open source ?', a: 'Oui. Voxa est construit avec Tauri v2 et publié sous licence MIT, une licence permissive qui autorise la consultation, la modification et la redistribution du code source sans restriction sur l\'usage commercial.' },
          { q: 'Puis-je utiliser Voxa sans connexion internet ?', a: 'Seulement si le démon local auto-hébergé est configuré et en cours d\'exécution comme backend de modèle vocal. La voie vocale temps réel cloud (Gemini Live ou OpenAI Realtime) nécessite une connexion pour fonctionner.' },
          { q: 'Voxa nécessite-t-il un moteur de navigateur précis sur mon système ?', a: 'Oui, indirectement — étant construit avec Tauri v2, Voxa affiche son interface via le moteur web propre au système d\'exploitation : WebView2 sous Windows, WKWebView sous macOS et WebKitGTK 4.1 sous Linux. Assurez-vous que le moteur concerné est présent et à jour sur votre système avant l\'installation.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        links: [
          { url: 'https://[askvoxa.dev](https://askvoxa.dev/)/', title: 'Site officiel de Voxa', description: 'Présentation du produit, disponibilité par plateforme et informations de configuration pour Voxa, source des faits de cet avis.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'À lire aussi',
        items: [
          '[Construire un assistant vocal local : guide complet (2026)](/fr/power-local-llm/build-local-voice-assistant-2026) — une pipeline vocale open source entièrement spécifiée (reconnaissance vocale, LLM local, synthèse vocale) pour les lecteurs qui veulent chaque composant documenté.',
          '[Construire un assistant vocal local sur son téléphone : Whisper + LLM local (sans cloud)](/fr/power-local-llm/voice-assistant-local-mobile-offline) — le pendant mobile, avec des données de latence et d\'autonomie mesurées.',
          '[Comparatif des options Whisper STT locales 2026](/fr/power-local-llm/local-whisper-stt-comparison-2026) — pour les lecteurs comparant des options de reconnaissance vocale locale plutôt qu\'une application hybride cloud/locale comme Voxa.',
          '[Synthèse vocale et clonage de voix locaux : Piper, Coqui, XTTS](/fr/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — options de synthèse vocale locale pour une pipeline vocale entièrement hors ligne.',
          '[Local LLM Software Directory 2026](/fr/power-local-llm/local-llm-software-directory) — le catalogue complet d\'outils et d\'applications d\'IA locale auquel appartient cet avis.',
        ],
      },
    },
  },
  es: {
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/voxa-review-hero-es.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-04',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    educationalLevel: 'Intermediate',
    audience: 'Usuarios de escritorio interesados en la privacidad y personas que hacen self-hosting, decidiendo si un asistente de voz flotante con inferencia local opcional encaja mejor en su flujo de trabajo que un asistente en la nube basado en navegador',
    primaryTerm: 'Voxa',
    title: 'Voxa: reseña 2026 del asistente de voz privado para escritorio',
    seoTitle: 'Voxa reseña 2026: asistente de voz privado para escritorio',
    intro: 'Voxa, disponible en [askvoxa.dev](https://askvoxa.dev/), es un asistente de voz de escritorio de código abierto que se presenta como un orbe sin bordes, siempre visible sobre las demás ventanas, que tocas para iniciar una conversación de voz en tiempo real. Está construido con Tauri v2 y publicado bajo licencia MIT, y busca y guarda notas locales como archivos Markdown planos en tu equipo. Voxa es híbrido, no exclusivamente local: puede enrutar las conversaciones a través de modelos de voz en tiempo real en la nube (Google Gemini Live u OpenAI Realtime) o a través de un daemon local autoalojado que tú mismo configuras.',
    metaDescription: 'Reseña de Voxa: asistente de voz de código abierto bajo licencia MIT, en forma de orbe, para Windows, macOS y Linux. Cómo funciona la configuración híbrida nube/daemon local, notas en Markdown y para quién es.',
    readTime: '9 min de lectura',
    targetKeywords: [
      'Voxa reseña',
      'Voxa asistente de voz',
      'Voxa orbe IA',
      'Voxa asistente de voz local',
      '[askvoxa.dev](https://askvoxa.dev/)',
    ],
    leadAnswerBlock: '**Voxa es un asistente de voz de escritorio de código abierto bajo licencia MIT (Tauri v2) que funciona como un orbe flotante, siempre visible — tócalo para iniciar una conversación de voz en tiempo real.** No es exclusivamente local: puede usar modelos de voz en tiempo real en la nube (Gemini Live u OpenAI Realtime) o un daemon local autoalojado que configuras tú mismo, y guarda notas como archivos Markdown planos en tu propio equipo.',
    quickAnswerTop: {
      es: {
        question: '¿Es Voxa un asistente de voz totalmente local y utilizable sin conexión?',
        answer: 'No: Voxa es híbrido, no exclusivamente local. Por defecto está diseñado para enrutar las conversaciones de voz en tiempo real a través de un proveedor en la nube (Google Gemini Live u OpenAI Realtime), lo que requiere conexión a internet y tu propio acceso API con ese proveedor. Una configuración totalmente local es posible, pero requiere que configures y ejecutes tú mismo un daemon local autoalojado; no es el comportamiento predeterminado sin configuración adicional.',
        bullets: [
          'Código abierto, licencia MIT, construido con Tauri v2 — confirmado en [askvoxa.dev](https://askvoxa.dev/)',
          'Dos vías de backend: modelos de voz en tiempo real en la nube (Gemini Live, OpenAI Realtime) o un daemon local autoalojado',
          'Las notas se guardan como archivos Markdown planos en tu equipo, no en un formato propietario',
          'La configuración, los datos y las claves API permanecen en tu equipo — sin servidor backend propietario operado por Voxa',
          'La interfaz es un orbe sin bordes, siempre visible, en lugar de una pestaña de navegador o una ventana de chat',
          'Plataformas: Windows (WebView2), macOS (WKWebView), Linux (WebKitGTK 4.1)',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: '¿Qué es Voxa?', anchor: 'what-is-voxa' },
      { label: 'Funciones principales', anchor: 'core-features' },
      { label: '¿Voxa es realmente local?', anchor: 'is-voxa-local' },
      { label: 'Voxa en Windows, macOS y Linux', anchor: 'platforms' },
      { label: 'Quién debería usar Voxa', anchor: 'who-should-use' },
      { label: 'Quién no debería usar Voxa', anchor: 'who-should-not-use' },
      { label: 'Errores comunes', anchor: 'common-mistakes' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave — Voxa en 2026',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Voxa es un asistente de voz de escritorio de código abierto bajo licencia MIT, construido con Tauri v2, que aparece como un orbe flotante siempre visible, admite conversación de voz en tiempo real mediante un proveedor en la nube (Gemini Live u OpenAI Realtime) o un daemon local autoalojado, y guarda notas como archivos Markdown planos en el equipo del usuario.' },
          { type: 'plain-terms', text: 'En vez de abrir una pestaña del navegador o una ventana de aplicación, obtienes un pequeño círculo flotante que se mantiene sobre tus demás ventanas. Lo tocas y empiezas a hablar: puede usar un servicio de voz en la nube o, si lo configuras tú mismo, un modelo de voz que corre en tu propio equipo, y guarda las notas como archivos de texto que puedes abrir en cualquier editor.' },
        ],
        items: [
          'Construido con Tauri v2, publicado bajo licencia MIT — no requiere software backend propietario para ejecutar la app en sí',
          'Interfaz: un orbe sin bordes, siempre visible, en lugar de una ventana convencional o una pestaña de navegador',
          'Backend de modelo híbrido: voz en tiempo real en la nube (Google Gemini Live u OpenAI Realtime) o un daemon local autoalojado que configuras tú mismo',
          'Las notas y resultados de búsqueda se guardan como archivos Markdown planos en el sistema de archivos local, no en una base de datos propietaria',
          'La configuración, los datos y las claves API se almacenan en el equipo del usuario',
          'Disponible para Windows (WebView2), macOS (WKWebView) y Linux (WebKitGTK 4.1)',
          'Sitio oficial: [askvoxa.dev](https://askvoxa.dev/)',
        ],
        callouts: [
          { type: 'note', text: 'Voxa no es una herramienta exclusivamente local. El backend en la nube (Gemini Live u OpenAI Realtime) es la vía más sencilla y depende de la API de ese proveedor y de una conexión a internet; una configuración totalmente local requiere apuntar Voxa a tu propio daemon autoalojado. Consulta "¿Voxa es realmente local?" más abajo antes de asumir que es una app local sin nube ni configuración.' },
        ],
      },
      overview: {
        id: 'what-is-voxa',
        title: '¿Qué es Voxa?',
        content: 'Voxa es un asistente de voz de escritorio de código abierto, publicado en [askvoxa.dev](https://askvoxa.dev/) y construido con Tauri v2, un framework para crear aplicaciones de escritorio multiplataforma ligeras con una interfaz web envuelta en una capa nativa. Voxa se publica bajo licencia MIT.',
        items: [
          'Modelo de interacción principal: un orbe sin bordes, siempre visible, que flota sobre tus demás ventanas — tocarlo inicia una conversación de voz en tiempo real, en lugar de abrir una ventana de chat separada o una pestaña de navegador',
          'El backend de modelo es configurable, no está fijo a un solo proveedor: modelos de voz en tiempo real en la nube (Google Gemini Live u OpenAI Realtime) o un daemon local autoalojado',
          'Construido con Tauri v2, que renderiza la interfaz usando el motor web propio del sistema operativo (WebView2 en Windows, WKWebView en macOS, WebKitGTK 4.1 en Linux) en lugar de empaquetar un motor de navegador aparte como hace Electron',
          'Las notas e información que el asistente busca o guarda se escriben como archivos Markdown planos en el sistema de archivos local',
          'Sin servidor backend propietario operado por Voxa — la configuración, los datos y las claves API de la app permanecen en tu equipo; las llamadas a la nube van directamente al proveedor de modelo que configures (Google u OpenAI), no a un servidor operado por Voxa',
        ],
        note: 'Voxa está en desarrollo activo; verifica el alcance de funciones actual, los proveedores de modelo compatibles y los requisitos de plataforma directamente en [askvoxa.dev](https://askvoxa.dev/) antes de tomar una decisión que dependa de una función específica.',
      },
      coreFeatures: {
        id: 'core-features',
        title: '¿Cuáles son las funciones principales de Voxa?',
        content: '**Las tres características que definen a Voxa son el orbe de voz siempre visible, el almacenamiento de notas basado en Markdown y su base de código abierto con Tauri v2.** Cada una determina cómo se comporta la app frente a un asistente de voz basado en navegador o por suscripción.',
        subsections: [
          {
            title: 'El orbe de voz flotante',
            content: 'La interfaz de Voxa es un orbe sin bordes, siempre visible, en lugar de una ventana de aplicación completa o una pestaña de navegador. Permanece visible sobre las demás ventanas, de modo que una conversación de voz en tiempo real puede iniciarse con un solo toque, sin cambiar el foco de lo que estabas haciendo.',
          },
          {
            title: 'Notas y búsqueda basadas en Markdown',
            content: 'Cuando Voxa busca información o se le pide guardar algo, el resultado se escribe como un archivo Markdown plano en tu sistema de archivos local, no queda encerrado en una base de datos propietaria ni en un almacén de notas exclusivo de la nube. Al ser Markdown un formato de texto plano, esos archivos siguen siendo legibles y editables en cualquier editor de texto o app de notas, independientemente de si Voxa está en ejecución.',
          },
          {
            title: 'Código abierto: Tauri v2 y licencia MIT',
            content: 'Voxa está construido con Tauri v2 y publicado bajo licencia MIT, una licencia de código abierto permisiva sin restricciones para inspeccionar, modificar o redistribuir el código fuente. Las apps de Tauri usan el motor de renderizado web propio del sistema operativo para la interfaz, en lugar de empaquetar un motor de navegador aparte, por lo que los requisitos de plataforma están ligados a una versión específica del motor web del sistema en cada plataforma (ver la sección de plataformas más abajo).',
          },
        ],
      },
      isVoxaLocal: {
        id: 'is-voxa-local',
        title: '¿Voxa es realmente local?',
        content: '**Voxa es una app híbrida, no exclusivamente local — conviene tener clara esta distinción antes de elegirla como herramienta de "IA local".** Admite dos vías de backend separadas para el modelo de voz, y solo una de ellas mantiene la inferencia en tu propio hardware.',
        items: [
          '**Modelos de voz en tiempo real en la nube** — Voxa puede enrutar la conversación de voz en tiempo real a través de Google Gemini Live u OpenAI Realtime. Esta vía requiere conexión a internet y tu propio acceso/credenciales API con ese proveedor; el modelo de voz en sí corre en los servidores de ese proveedor, no en tu dispositivo.',
          '**Daemon local autoalojado** — Voxa puede en cambio apuntar a un daemon local que tú configuras y ejecutas, manteniendo la inferencia del modelo de voz en tu propio equipo o red en lugar de enviar audio a un proveedor en la nube. Esta es la vía que hace que Voxa funcione como herramienta de IA local, pero es una configuración opcional que debes hacer tú, no el comportamiento predeterminado sin configurar nada.',
        ],
        callouts: [
          { type: 'note', text: 'Lo que permanece local sin importar el backend elegido: la configuración propia de la app, tus notas (guardadas como archivos Markdown planos) y tus claves API — se almacenan en tu equipo, no en un servidor operado por Voxa. Lo que no permanece local por defecto: el modelo de voz en tiempo real en sí, a menos que hayas configurado la vía del daemon local autoalojado.' },
        ],
        note: 'Si el requisito es una configuración totalmente offline, sin dependencia de la nube, confirma que el daemon local autoalojado esté configurado y accesible antes de depender de Voxa sin conexión a internet — la vía de voz en tiempo real en la nube (Gemini Live u OpenAI Realtime) no funcionará sin conexión.',
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'Voxa en Windows, macOS y Linux',
        columns: ['Plataforma', 'Qué esperar'],
        rows: [
          {
            'Plataforma': 'Windows',
            'Qué esperar': 'Voxa renderiza su interfaz usando WebView2, el motor web basado en Chromium que Microsoft distribuye con las versiones modernas de Windows. Se necesita un runtime de WebView2 actualizado para que la interfaz del orbe y la UI de voz se muestren correctamente.',
          },
          {
            'Plataforma': 'macOS',
            'Qué esperar': 'Voxa usa WKWebView, el motor de renderizado web integrado de Apple, para su interfaz. Como Tauri se apoya en el motor provisto por el sistema en lugar de empaquetar el suyo propio, el comportamiento sigue la versión de WKWebView incluida en tu versión de macOS.',
          },
          {
            'Plataforma': 'Linux',
            'Qué esperar': 'Voxa usa WebKitGTK 4.1 para su interfaz en Linux. Es una versión específica de WebKitGTK, no "cualquier build de WebKit" — confirma que tu distribución empaqueta WebKitGTK 4.1 (o una versión compatible) antes de instalar, ya que versiones de paquetes de distros más antiguas podrían no coincidir.',
          },
        ],
        note: 'Como Tauri v2 renderiza la interfaz a través del motor web propio de cada sistema operativo en lugar de un motor de navegador empaquetado, la versión mínima exacta de SO/motor para cada plataforma no puede fijarse aquí como un número permanente — confirma los requisitos de plataforma actuales directamente en [askvoxa.dev](https://askvoxa.dev/) antes de instalar.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '¿Quién debería usar Voxa?',
        content: 'La elección correcta depende de si un orbe de voz siempre visible y notas basadas en Markdown encajan con la forma en que quieres hablar con un asistente, y de si estás dispuesto a configurar un daemon local si la inferencia totalmente local te importa.',
        subsections: [
          {
            title: 'Usa Voxa si',
            list: [
              'quieres un asistente de voz que permanezca visible como un pequeño orbe flotante, en lugar de una ventana completa o una pestaña de navegador a la que tengas que cambiar',
              'quieres que tus notas se guarden como archivos Markdown planos que puedas abrir, buscar y editar fuera de la app, en lugar de un formato propietario',
              'te resulta cómodo usar un proveedor de voz en tiempo real en la nube (Gemini Live u OpenAI Realtime) con tu propio acceso API, o estás dispuesto a configurar un daemon local autoalojado si quieres que la inferencia permanezca en tu propio hardware',
              'prefieres una app de código abierto bajo licencia MIT cuyo código fuente puedas inspeccionar o modificar, en lugar de un asistente por suscripción de código cerrado',
            ],
          },
          {
            title: 'Considera otra herramienta si',
            list: [
              'necesitas un asistente de voz totalmente local, sin configuración, listo de fábrica — la vía predeterminada de Voxa depende de la nube, y el funcionamiento exclusivamente local requiere que configures tú mismo el daemon autoalojado',
              'buscas una app móvil en lugar de una herramienta de escritorio — Voxa está orientado a Windows, macOS y Linux de escritorio, no a iOS ni Android',
              'necesitas una canalización de voz de código abierto completamente documentada de extremo a extremo (reconocimiento de voz, LLM, síntesis de voz) con cada componente especificado — consulta [Construye un asistente de voz local en tu teléfono](/es/power-local-llm/voice-assistant-local-mobile-offline) o [Construye un asistente de voz local: guía completa](/es/power-local-llm/build-local-voice-assistant-2026) para ese tipo de canalización totalmente especificada',
            ],
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes al evaluar Voxa',
        content: 'La mayor parte de la confusión sobre Voxa viene de asumir que se comporta como una app puramente local o puramente en la nube, cuando en realidad está diseñada como un híbrido configurable de ambas.',
        subsections: [
          {
            title: 'Error 1: asumir que Voxa funciona totalmente sin conexión por defecto',
            content: 'La vía predeterminada de Voxa, la de menor fricción, es un modelo de voz en tiempo real en la nube (Gemini Live u OpenAI Realtime), que necesita conexión a internet y el acceso API de ese proveedor. El funcionamiento sin conexión, totalmente local, es posible, pero solo tras configurar y ejecutar tú mismo el daemon local autoalojado.',
          },
          {
            title: 'Error 2: asumir que "código abierto" significa "sin llamadas a la nube"',
            content: 'Que el propio código de la app de Voxa sea de código abierto (licencia MIT, Tauri v2) es un hecho independiente del backend de modelo de voz que elijas usar. El código de una app de código abierto puede seguir configurándose para enviar audio en tiempo real a un proveedor externo en la nube — verifica qué vía de backend está realmente configurada, no solo la licencia de la app.',
          },
          {
            title: 'Error 3: esperar las mismas notas en Markdown en todos los dispositivos automáticamente',
            content: 'Las notas se guardan como archivos Markdown planos en el sistema de archivos local del equipo donde corre Voxa. A menos que configures por separado tu propia sincronización (una carpeta en la nube, un repositorio git o similar), las notas de un equipo no están automáticamente disponibles en otro.',
          },
          {
            title: 'Error 4: instalar sin verificar el requisito de motor web de la plataforma',
            content: 'Como Voxa está construido con Tauri v2, su interfaz depende del motor web propio del sistema operativo — WebView2 en Windows, WKWebView en macOS, WebKitGTK 4.1 en Linux — en lugar de un motor de navegador empaquetado. Un motor desactualizado o ausente en tu sistema puede impedir que la interfaz del orbe se renderice correctamente; confirma que el motor de tu plataforma esté actualizado antes de asumir que un problema de instalación es un fallo de Voxa.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Qué es Voxa?', a: 'Voxa es un asistente de voz de escritorio de código abierto bajo licencia MIT, construido con Tauri v2, disponible en [askvoxa.dev](https://askvoxa.dev/). Se presenta como un orbe sin bordes, siempre visible, que tocas para iniciar una conversación de voz en tiempo real, y puede usar como backend un modelo de voz en tiempo real en la nube o un daemon local autoalojado.' },
          { q: '¿Voxa es gratis?', a: 'El propio código de la app de Voxa es de código abierto bajo licencia MIT. Si usas el backend de voz en tiempo real en la nube (Gemini Live u OpenAI Realtime), quedas sujeto a los precios y condiciones API propios de ese proveedor, aparte de Voxa. Confirma los precios actuales de Gemini Live u OpenAI Realtime directamente con Google u OpenAI.' },
          { q: '¿Voxa funciona totalmente sin conexión?', a: 'Solo si configuras la vía del daemon local autoalojado. Por defecto, Voxa está configurado para usar un proveedor de voz en tiempo real en la nube (Gemini Live u OpenAI Realtime), lo que requiere conexión a internet. Una configuración totalmente sin conexión es posible, pero requiere que ejecutes tu propio daemon local y apuntes Voxa hacia él.' },
          { q: '¿Qué plataformas admite Voxa?', a: 'Windows (usando el motor WebView2), macOS (usando WKWebView) y Linux (usando WebKitGTK 4.1). Voxa es una app de escritorio construida con Tauri v2, no una app móvil para iOS o Android.' },
          { q: '¿Dónde guarda Voxa mis notas?', a: 'Como archivos Markdown planos en tu sistema de archivos local, no en una base de datos propietaria ni en un formato exclusivo de la nube. Esto significa que las notas siguen siendo legibles y editables en cualquier editor de texto, independientemente de si Voxa está instalado o en ejecución.' },
          { q: '¿Voxa envía mis claves API o datos a algún lugar?', a: 'La configuración, los datos y las claves API se almacenan en tu propio equipo. Si usas el backend de voz en tiempo real en la nube, tu audio y datos de conversación se envían al proveedor que hayas configurado (Google Gemini Live u OpenAI Realtime), bajo los propios términos de manejo de datos de ese proveedor, no a un servidor separado operado por Voxa.' },
          { q: '¿Cuál es la diferencia entre el backend en la nube y el backend de daemon local en Voxa?', a: 'El backend en la nube (Gemini Live u OpenAI Realtime) enruta el modelo de voz en tiempo real a través de los servidores de ese proveedor y requiere conexión a internet y acceso API con ese proveedor. El backend de daemon local autoalojado mantiene la inferencia del modelo de voz en hardware que tú controlas, pero tienes que configurar y ejecutar ese daemon tú mismo — no viene preconfigurado.' },
          { q: '¿Voxa es de código abierto?', a: 'Sí. Voxa está construido con Tauri v2 y publicado bajo licencia MIT, una licencia permisiva que permite inspeccionar, modificar y redistribuir el código fuente sin restricción para el uso comercial.' },
          { q: '¿Puedo usar Voxa sin conexión a internet?', a: 'Solo si has configurado y tienes en ejecución el daemon local autoalojado como backend de modelo de voz. La vía de voz en tiempo real en la nube (Gemini Live u OpenAI Realtime) requiere conexión para funcionar.' },
          { q: '¿Voxa requiere un motor de navegador específico en mi sistema?', a: 'Sí, de forma indirecta — al estar construido con Tauri v2, Voxa renderiza su interfaz a través del motor web propio del sistema operativo: WebView2 en Windows, WKWebView en macOS y WebKitGTK 4.1 en Linux. Asegúrate de que el motor correspondiente esté presente y actualizado en tu sistema antes de instalar.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        links: [
          { url: 'https://[askvoxa.dev](https://askvoxa.dev/)/', title: 'Sitio oficial de Voxa', description: 'Descripción del producto, disponibilidad por plataforma e información de configuración de Voxa, la fuente de los datos de esta reseña.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Construye un asistente de voz local: guía completa (2026)](/es/power-local-llm/build-local-voice-assistant-2026) — una canalización de voz de código abierto totalmente especificada (reconocimiento de voz, LLM local, síntesis de voz) para quienes quieren cada componente documentado.',
          '[Construye un asistente de voz local en tu teléfono: Whisper + LLM local (sin nube)](/es/power-local-llm/voice-assistant-local-mobile-offline) — la contraparte móvil, con datos medidos de latencia y batería.',
          '[Comparativa de opciones locales de Whisper STT 2026](/es/power-local-llm/local-whisper-stt-comparison-2026) — para quienes comparan opciones de reconocimiento de voz local en lugar de una app híbrida nube/local como Voxa.',
          '[TTS local y clonación de voz: Piper, Coqui, XTTS](/es/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — opciones de síntesis de voz local para una canalización de voz totalmente sin conexión.',
          '[Local LLM Software Directory 2026](/es/power-local-llm/local-llm-software-directory) — el catálogo completo de herramientas y apps de IA local al que pertenece esta reseña.',
        ],
      },
    },
  },
  pt: {
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/voxa-review-hero-pt.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-04',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    educationalLevel: 'Intermediate',
    audience: 'Usuários de desktop preocupados com privacidade e adeptos do self-hosting que estão decidindo se um assistente de voz flutuante com inferência local opcional se encaixa melhor no fluxo de trabalho do que um assistente em nuvem baseado em navegador',
    primaryTerm: 'Voxa',
    title: 'Voxa: análise 2026 do assistente de voz privado para desktop',
    seoTitle: 'Voxa análise 2026: assistente de voz privado para desktop',
    intro: 'O Voxa, disponível em [askvoxa.dev](https://askvoxa.dev/), é um assistente de voz de desktop de código aberto que se apresenta como um orbe sem bordas, sempre visível sobre as demais janelas, que você toca para iniciar uma conversa de voz em tempo real. Ele é construído com Tauri v2 e distribuído sob a licença MIT, e pesquisa e salva notas locais como arquivos Markdown simples no seu computador. O Voxa é híbrido, não exclusivamente local: pode encaminhar conversas por meio de modelos de voz em tempo real na nuvem (Google Gemini Live ou OpenAI Realtime) ou por meio de um daemon local auto-hospedado que você mesmo configura.',
    metaDescription: 'Análise do Voxa: assistente de voz de código aberto sob licença MIT, em formato de orbe, para Windows, macOS e Linux. Como funciona a configuração híbrida nuvem/daemon local, notas em Markdown e para quem é indicado.',
    readTime: '9 min de leitura',
    targetKeywords: [
      'Voxa análise',
      'Voxa assistente de voz',
      'Voxa orbe de IA',
      'Voxa assistente de voz local',
      '[askvoxa.dev](https://askvoxa.dev/)',
    ],
    leadAnswerBlock: '**O Voxa é um assistente de voz de desktop de código aberto sob licença MIT (Tauri v2) que funciona como um orbe flutuante, sempre visível — toque nele para iniciar uma conversa de voz em tempo real.** Ele não é exclusivamente local: pode usar modelos de voz em tempo real na nuvem (Gemini Live ou OpenAI Realtime) ou um daemon local auto-hospedado que você mesmo configura, e salva notas como arquivos Markdown simples no seu próprio computador.',
    quickAnswerTop: {
      pt: {
        question: 'O Voxa é um assistente de voz totalmente local e utilizável offline?',
        answer: 'Não — o Voxa é híbrido, não exclusivamente local no dispositivo. Por padrão, ele é projetado para encaminhar conversas de voz em tempo real por meio de um provedor em nuvem (Google Gemini Live ou OpenAI Realtime), o que exige conexão com a internet e seu próprio acesso à API desse provedor. Uma configuração totalmente local é possível, mas exige que você configure e execute você mesmo um daemon local auto-hospedado — não é o comportamento padrão sem configuração adicional.',
        bullets: [
          'Código aberto, licença MIT, construído com Tauri v2 — confirmado em [askvoxa.dev](https://askvoxa.dev/)',
          'Dois caminhos de backend: modelos de voz em tempo real na nuvem (Gemini Live, OpenAI Realtime) ou um daemon local auto-hospedado',
          'As notas são salvas como arquivos Markdown simples no seu computador, não em um formato proprietário',
          'Configuração, dados e chaves de API permanecem no seu computador — sem servidor backend proprietário operado pelo próprio Voxa',
          'A interface é um orbe sem bordas, sempre visível, em vez de uma aba de navegador ou janela de chat',
          'Plataformas: Windows (WebView2), macOS (WKWebView), Linux (WebKitGTK 4.1)',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: 'tldr' },
      { label: 'O que é o Voxa?', anchor: 'what-is-voxa' },
      { label: 'Principais recursos', anchor: 'core-features' },
      { label: 'O Voxa é realmente local?', anchor: 'is-voxa-local' },
      { label: 'Voxa no Windows, macOS e Linux', anchor: 'platforms' },
      { label: 'Quem deveria usar o Voxa', anchor: 'who-should-use' },
      { label: 'Quem não deveria usar o Voxa', anchor: 'who-should-not-use' },
      { label: 'Erros comuns', anchor: 'common-mistakes' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais — Voxa em 2026',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'O Voxa é um assistente de voz de desktop de código aberto sob licença MIT, construído com Tauri v2, que aparece como um orbe flutuante sempre visível, suporta conversa de voz em tempo real por meio de um provedor em nuvem (Gemini Live ou OpenAI Realtime) ou de um daemon local auto-hospedado, e salva notas como arquivos Markdown simples no computador do usuário.' },
          { type: 'plain-terms', text: 'Em vez de abrir uma aba do navegador ou uma janela de aplicativo, você tem um pequeno círculo flutuante que fica sobre as suas outras janelas. Você toca nele e começa a falar: ele pode usar um serviço de voz em nuvem ou, se você mesmo configurar, um modelo de voz rodando no seu próprio computador, e grava notas como arquivos de texto simples que você pode abrir em qualquer editor.' },
        ],
        items: [
          'Construído com Tauri v2, distribuído sob a licença MIT — nenhum software backend proprietário é necessário para rodar o app em si',
          'Interface: um orbe sem bordas, sempre visível, em vez de uma janela convencional ou aba de navegador',
          'Backend de modelo híbrido: voz em tempo real na nuvem (Google Gemini Live ou OpenAI Realtime) ou um daemon local auto-hospedado que você mesmo configura',
          'Notas e resultados de pesquisa são salvos como arquivos Markdown simples no sistema de arquivos local, não em um banco de dados proprietário',
          'Configuração, dados e chaves de API são armazenados no computador do usuário',
          'Disponível para Windows (WebView2), macOS (WKWebView) e Linux (WebKitGTK 4.1)',
          'Site oficial: [askvoxa.dev](https://askvoxa.dev/)',
        ],
        callouts: [
          { type: 'note', text: 'O Voxa não é uma ferramenta exclusivamente local. O backend em nuvem (Gemini Live ou OpenAI Realtime) é o caminho mais simples e depende da API desse provedor e de uma conexão com a internet; uma configuração totalmente local exige apontar o Voxa para o seu próprio daemon auto-hospedado. Veja "O Voxa é realmente local?" abaixo antes de presumir que se trata de um app local sem nuvem e sem configuração.' },
        ],
      },
      overview: {
        id: 'what-is-voxa',
        title: 'O que é o Voxa?',
        content: 'O Voxa é um assistente de voz de desktop de código aberto, publicado em [askvoxa.dev](https://askvoxa.dev/) e construído com Tauri v2, um framework para criar aplicativos de desktop multiplataforma leves com interface baseada em web dentro de uma casca nativa. O Voxa é distribuído sob a licença MIT.',
        items: [
          'Modelo de interação principal: um orbe sem bordas, sempre visível, que flutua sobre as demais janelas — tocar nele inicia uma conversa de voz em tempo real, em vez de abrir uma janela de chat separada ou uma aba de navegador',
          'O backend de modelo é configurável, não fixo em um único provedor: modelos de voz em tempo real na nuvem (Google Gemini Live ou OpenAI Realtime) ou um daemon local auto-hospedado',
          'Construído com Tauri v2, que renderiza a interface usando o mecanismo web próprio do sistema operacional (WebView2 no Windows, WKWebView no macOS, WebKitGTK 4.1 no Linux) em vez de empacotar um mecanismo de navegador separado como faz o Electron',
          'Notas e informações que o assistente pesquisa ou é solicitado a salvar são gravadas como arquivos Markdown simples no sistema de arquivos local',
          'Nenhum servidor backend proprietário operado pelo próprio Voxa — a configuração, os dados e as chaves de API do app permanecem no seu computador; chamadas para a nuvem vão diretamente ao provedor de modelo que você configurar (Google ou OpenAI), não a um servidor operado pelo Voxa',
        ],
        note: 'O Voxa está em desenvolvimento ativo; verifique o escopo atual de recursos, os provedores de modelo suportados e os requisitos de plataforma diretamente em [askvoxa.dev](https://askvoxa.dev/) antes de tomar uma decisão que dependa de um recurso específico.',
      },
      coreFeatures: {
        id: 'core-features',
        title: 'Quais são os principais recursos do Voxa?',
        content: '**As três características que definem o Voxa são o orbe de voz sempre visível, o armazenamento de notas baseado em Markdown e sua base de código aberto com Tauri v2.** Cada uma molda como o app se comporta em comparação com um assistente de voz baseado em navegador ou por assinatura.',
        subsections: [
          {
            title: 'O orbe de voz flutuante',
            content: 'A interface do Voxa é um orbe sem bordas, sempre visível, em vez de uma janela de aplicativo completa ou aba de navegador. Ele permanece visível sobre as demais janelas, de modo que uma conversa de voz em tempo real pode começar com um único toque, sem tirar o foco do que você estava fazendo.',
          },
          {
            title: 'Notas e busca baseadas em Markdown',
            content: 'Quando o Voxa pesquisa uma informação ou recebe a instrução de salvar algo, o resultado é gravado como um arquivo Markdown simples no seu sistema de arquivos local — não fica preso em um banco de dados proprietário ou em um armazenamento de notas exclusivo da nuvem. Como Markdown é um formato de texto simples, esses arquivos permanecem legíveis e editáveis em qualquer editor de texto ou app de notas, independentemente de o Voxa estar em execução.',
          },
          {
            title: 'Código aberto: Tauri v2 e licença MIT',
            content: 'O Voxa é construído com Tauri v2 e distribuído sob a licença MIT, uma licença de código aberto permissiva sem restrição para inspecionar, modificar ou redistribuir o código-fonte. Apps Tauri usam o mecanismo de renderização web do próprio sistema operacional para a interface, em vez de empacotar um mecanismo de navegador separado — por isso os requisitos de plataforma estão atrelados a uma versão específica do mecanismo web do sistema em cada plataforma (veja a seção de plataformas abaixo).',
          },
        ],
      },
      isVoxaLocal: {
        id: 'is-voxa-local',
        title: 'O Voxa é realmente local?',
        content: '**O Voxa é um app híbrido, não exclusivamente local no dispositivo — é importante ter clareza sobre essa distinção antes de escolhê-lo como ferramenta de "IA local".** Ele suporta dois caminhos de backend separados para o modelo de voz, e apenas um deles mantém a inferência no seu próprio hardware.',
        items: [
          '**Modelos de voz em tempo real na nuvem** — o Voxa pode encaminhar a conversa de voz em tempo real por meio do Google Gemini Live ou OpenAI Realtime. Esse caminho exige conexão com a internet e suas próprias credenciais/acesso de API com esse provedor; o modelo de voz em si roda nos servidores desse provedor, não no seu dispositivo.',
          '**Daemon local auto-hospedado** — o Voxa pode, em vez disso, apontar para um daemon local que você mesmo configura e executa, mantendo a inferência do modelo de voz no seu próprio computador ou rede em vez de enviar áudio a um provedor em nuvem. Esse é o caminho que faz o Voxa funcionar como ferramenta de IA local, mas é uma configuração opcional feita por você, não o comportamento padrão sem qualquer configuração.',
        ],
        callouts: [
          { type: 'note', text: 'O que permanece local independentemente do backend escolhido: a configuração do próprio app, suas notas (salvas como arquivos Markdown simples) e suas chaves de API — armazenadas no seu computador, não em um servidor operado pelo Voxa. O que não permanece local por padrão: o modelo de voz em tempo real em si, a menos que o caminho do daemon local auto-hospedado tenha sido configurado.' },
        ],
        note: 'Se uma configuração totalmente offline, sem dependência de nuvem, for o requisito, confirme que o daemon local auto-hospedado está configurado e acessível antes de depender do Voxa sem conexão com a internet — o caminho de voz em tempo real na nuvem (Gemini Live ou OpenAI Realtime) não funcionará offline.',
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'Voxa no Windows, macOS e Linux',
        columns: ['Plataforma', 'O que esperar'],
        rows: [
          {
            'Plataforma': 'Windows',
            'O que esperar': 'O Voxa renderiza sua interface usando o WebView2, o mecanismo web baseado em Chromium que a Microsoft distribui com versões modernas do Windows. Um runtime WebView2 atualizado é necessário para que a interface do orbe e a UI de voz sejam exibidas corretamente.',
          },
          {
            'Plataforma': 'macOS',
            'O que esperar': 'O Voxa usa o WKWebView, o mecanismo de renderização web integrado da Apple, para sua interface. Como o Tauri depende do mecanismo fornecido pelo sistema operacional em vez de empacotar o seu próprio, o comportamento segue a versão do WKWebView que acompanha a sua versão do macOS.',
          },
          {
            'Plataforma': 'Linux',
            'O que esperar': 'O Voxa usa o WebKitGTK 4.1 para sua interface no Linux. Trata-se de uma versão específica do WebKitGTK, não "qualquer build do WebKit" — confirme se a sua distribuição empacota o WebKitGTK 4.1 (ou uma versão compatível) antes de instalar, já que versões mais antigas de pacotes de distribuições podem não corresponder.',
          },
        ],
        note: 'Como o Tauri v2 renderiza a interface pelo mecanismo web próprio de cada sistema operacional, em vez de um mecanismo de navegador empacotado, a versão mínima exata de SO/mecanismo para cada plataforma não pode ser fixada aqui como um número permanente — confirme os requisitos de plataforma atuais diretamente em [askvoxa.dev](https://askvoxa.dev/) antes de instalar.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deveria usar o Voxa?',
        content: 'A escolha certa depende de um orbe de voz sempre visível e notas baseadas em Markdown combinarem com a forma como você quer falar com um assistente, e de você estar disposto a configurar um daemon local caso a inferência totalmente local seja importante.',
        subsections: [
          {
            title: 'Use o Voxa se',
            list: [
              'você quer um assistente de voz que permaneça visível como um pequeno orbe flutuante, em vez de uma janela completa ou aba de navegador para a qual você precise alternar',
              'você quer que suas notas sejam salvas como arquivos Markdown simples que você possa abrir, pesquisar e editar fora do app, em vez de um formato proprietário',
              'você está confortável usando um provedor de voz em tempo real na nuvem (Gemini Live ou OpenAI Realtime) com seu próprio acesso de API, ou está disposto a configurar um daemon local auto-hospedado se quiser que a inferência permaneça no seu próprio hardware',
              'você prefere um app de código aberto sob licença MIT, cujo código-fonte você pode inspecionar ou modificar, em vez de um assistente por assinatura de código fechado',
            ],
          },
          {
            title: 'Considere outra ferramenta se',
            list: [
              'você precisa de um assistente de voz totalmente local, sem configuração, pronto para uso — o caminho padrão do Voxa depende da nuvem, e o funcionamento exclusivamente local exige que você mesmo configure o daemon auto-hospedado',
              'você procura um app móvel em vez de uma ferramenta de desktop — o Voxa é voltado para desktop Windows, macOS e Linux, não para iOS ou Android',
              'você precisa de um pipeline de voz de código aberto totalmente documentado, de ponta a ponta (reconhecimento de voz, LLM, síntese de voz), com cada componente especificado — veja [Construa um assistente de voz local no seu celular](/pt/power-local-llm/voice-assistant-local-mobile-offline) ou [Construa um assistente de voz local: guia completo](/pt/power-local-llm/build-local-voice-assistant-2026) para esse tipo de pipeline totalmente especificado',
            ],
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns ao avaliar o Voxa',
        content: 'A maior parte da confusão sobre o Voxa vem de presumir que ele se comporta como um app puramente local ou puramente em nuvem, quando na verdade foi projetado como um híbrido configurável dos dois.',
        subsections: [
          {
            title: 'Erro 1: presumir que o Voxa roda totalmente offline por padrão',
            content: 'O caminho padrão do Voxa, de menor esforço, é um modelo de voz em tempo real na nuvem (Gemini Live ou OpenAI Realtime), que precisa de conexão com a internet e do acesso de API desse provedor. O funcionamento offline, totalmente local, é possível, mas só depois de você configurar e executar o daemon local auto-hospedado.',
          },
          {
            title: 'Erro 2: presumir que "código aberto" significa "sem chamadas à nuvem"',
            content: 'O fato de o próprio código do app Voxa ser de código aberto (licença MIT, Tauri v2) é um fato separado de qual backend de modelo de voz você escolhe usar. Código de app de código aberto ainda pode ser configurado para enviar áudio em tempo real a um provedor de nuvem terceiro — verifique qual caminho de backend está realmente configurado, não apenas a licença do app.',
          },
          {
            title: 'Erro 3: esperar as mesmas notas em Markdown em todos os dispositivos automaticamente',
            content: 'As notas são salvas como arquivos Markdown simples no sistema de arquivos local do computador em que o Voxa está rodando. A menos que você configure separadamente sua própria sincronização (uma pasta na nuvem, um repositório git ou similar), notas em um computador não ficam automaticamente disponíveis em outro.',
          },
          {
            title: 'Erro 4: instalar sem verificar o requisito de mecanismo web da plataforma',
            content: 'Como o Voxa é construído com Tauri v2, sua interface depende do mecanismo web próprio do sistema operacional — WebView2 no Windows, WKWebView no macOS, WebKitGTK 4.1 no Linux — em vez de um mecanismo de navegador empacotado. Um mecanismo desatualizado ou ausente no seu sistema pode impedir que a interface do orbe seja renderizada corretamente; confirme se o mecanismo da sua plataforma está atualizado antes de presumir que um problema de instalação é um bug do Voxa.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'O que é o Voxa?', a: 'O Voxa é um assistente de voz de desktop de código aberto sob licença MIT, construído com Tauri v2, disponível em [askvoxa.dev](https://askvoxa.dev/). Ele se apresenta como um orbe sem bordas, sempre visível, que você toca para iniciar uma conversa de voz em tempo real, e pode usar como backend um modelo de voz em tempo real na nuvem ou um daemon local auto-hospedado.' },
          { q: 'O Voxa é gratuito?', a: 'O próprio código do app Voxa é de código aberto sob a licença MIT. Se você usar o backend de voz em tempo real na nuvem (Gemini Live ou OpenAI Realtime), você fica sujeito aos preços e termos de API próprios desse provedor, separados do Voxa em si. Confirme os preços atuais do Gemini Live ou OpenAI Realtime diretamente com o Google ou a OpenAI.' },
          { q: 'O Voxa roda totalmente offline?', a: 'Somente se você configurar o caminho do daemon local auto-hospedado. Por padrão, o Voxa é configurado para usar um provedor de voz em tempo real na nuvem (Gemini Live ou OpenAI Realtime), o que exige conexão com a internet. Uma configuração totalmente offline é possível, mas exige que você execute seu próprio daemon local e aponte o Voxa para ele.' },
          { q: 'Quais plataformas o Voxa suporta?', a: 'Windows (usando o mecanismo WebView2), macOS (usando WKWebView) e Linux (usando WebKitGTK 4.1). O Voxa é um app de desktop construído com Tauri v2, não um app móvel para iOS ou Android.' },
          { q: 'Onde o Voxa armazena minhas notas?', a: 'Como arquivos Markdown simples no seu sistema de arquivos local, não em um banco de dados proprietário ou formato exclusivo de nuvem. Isso significa que as notas permanecem legíveis e editáveis em qualquer editor de texto, independentemente de o Voxa estar instalado ou em execução.' },
          { q: 'O Voxa envia minhas chaves de API ou dados para algum lugar?', a: 'Configuração, dados e chaves de API são armazenados no seu próprio computador. Se você usar o backend de voz em tempo real na nuvem, seu áudio e dados de conversa são enviados ao provedor que você configurou (Google Gemini Live ou OpenAI Realtime), sob os próprios termos de tratamento de dados desse provedor — não a um servidor separado operado pelo Voxa.' },
          { q: 'Qual é a diferença entre o backend em nuvem e o backend de daemon local no Voxa?', a: 'O backend em nuvem (Gemini Live ou OpenAI Realtime) encaminha o modelo de voz em tempo real pelos servidores desse provedor e exige conexão com a internet e acesso de API com esse provedor. O backend de daemon local auto-hospedado mantém a inferência do modelo de voz em hardware que você controla, mas você precisa configurar e executar esse daemon você mesmo — ele não vem pré-configurado.' },
          { q: 'O Voxa é de código aberto?', a: 'Sim. O Voxa é construído com Tauri v2 e distribuído sob a licença MIT, uma licença permissiva que permite inspecionar, modificar e redistribuir o código-fonte sem restrição para uso comercial.' },
          { q: 'Posso usar o Voxa sem conexão com a internet?', a: 'Somente se você tiver configurado e estiver executando o daemon local auto-hospedado como backend de modelo de voz. O caminho de voz em tempo real na nuvem (Gemini Live ou OpenAI Realtime) exige conexão para funcionar.' },
          { q: 'O Voxa exige um mecanismo de navegador específico no meu sistema?', a: 'Sim, indiretamente — por ser construído com Tauri v2, o Voxa renderiza sua interface pelo mecanismo web próprio do sistema operacional: WebView2 no Windows, WKWebView no macOS e WebKitGTK 4.1 no Linux. Certifique-se de que o mecanismo correspondente esteja presente e atualizado no seu sistema antes de instalar.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        links: [
          { url: 'https://[askvoxa.dev](https://askvoxa.dev/)/', title: 'Site oficial do Voxa', description: 'Visão geral do produto, disponibilidade por plataforma e informações de configuração do Voxa, a fonte dos fatos desta análise.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Construa um assistente de voz local: guia completo (2026)](/pt/power-local-llm/build-local-voice-assistant-2026) — um pipeline de voz de código aberto totalmente especificado (reconhecimento de voz, LLM local, síntese de voz) para quem quer cada componente documentado.',
          '[Construa um assistente de voz local no seu celular: Whisper + LLM local (sem nuvem)](/pt/power-local-llm/voice-assistant-local-mobile-offline) — o equivalente para dispositivos móveis, com dados medidos de latência e bateria.',
          '[Comparativo de opções locais de Whisper STT 2026](/pt/power-local-llm/local-whisper-stt-comparison-2026) — para quem compara opções de reconhecimento de voz local em vez de um app híbrido nuvem/local como o Voxa.',
          '[TTS local e clonagem de voz: Piper, Coqui, XTTS](/pt/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — opções de síntese de voz local para um pipeline de voz totalmente offline.',
          '[Local LLM Software Directory 2026](/pt/power-local-llm/local-llm-software-directory) — o catálogo completo de ferramentas e apps de IA local ao qual esta análise pertence.',
        ],
      },
    },
  },
  ja: {
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/voxa-review-hero-ja.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-04',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    educationalLevel: 'Intermediate',
    audience: 'ブラウザベースのクラウドアシスタントより、ローカル推論をオプションで使えるフローティング音声オーブ型アシスタントが自分のワークフローに合うか検討しているプライバシー重視のデスクトップユーザーとセルフホスト志向のユーザー',
    primaryTerm: 'Voxa',
    title: 'Voxaレビュー2026：デスクトップ向けプライベート音声アシスタントオーブ',
    seoTitle: 'Voxaレビュー2026：プライベート音声アシスタントオーブ',
    intro: '[askvoxa.dev](https://askvoxa.dev/)で公開されているVoxaは、タップするとリアルタイム音声会話が始まる、枠のない常時最前面表示のオーブとして提示されるオープンソースのデスクトップ音声アシスタントです。Tauri v2で構築されMITライセンスの下で公開されており、ローカルのメモを検索・保存する際はプレーンなMarkdownファイルとしてユーザーのマシン上に保存します。Voxaは完全にオンデバイスというわけではなく、ハイブリッド型です。クラウドのリアルタイム音声モデル（Google Gemini LiveまたはOpenAI Realtime）を経由するか、自分で設定するセルフホスト型のローカルデーモンを経由するかを選べます。',
    metaDescription: 'Voxaレビュー：Windows・macOS・Linux向けのMITライセンスのオープンソース音声オーブアシスタント。クラウド/ローカルデーモンのハイブリッド構成、Markdownメモ、向いている人を解説。',
    readTime: '9分で読める',
    targetKeywords: [
      'Voxa レビュー',
      'Voxa 音声アシスタント',
      'Voxa AIオーブ',
      'Voxa ローカル音声アシスタント',
      '[askvoxa.dev](https://askvoxa.dev/)',
    ],
    leadAnswerBlock: '**Voxaは、フローティングの常時最前面表示オーブとして動作する、MITライセンスのオープンソースデスクトップ音声アシスタント（Tauri v2）です。タップするとリアルタイム音声会話が始まります。** 完全にローカルというわけではなく、クラウドのリアルタイム音声モデル（Gemini LiveまたはOpenAI Realtime）か、自分で設定するセルフホスト型のローカルデーモンを使用でき、メモは自分のマシン上にプレーンなMarkdownファイルとして保存されます。',
    quickAnswerTop: {
      ja: {
        question: 'Voxaは完全にローカルでオフライン利用できる音声アシスタントですか？',
        answer: 'いいえ。Voxaはハイブリッド型であり、完全にオンデバイスというわけではありません。デフォルトでは、リアルタイム音声会話をクラウドプロバイダー（Google Gemini LiveまたはOpenAI Realtime）経由で行うよう設計されており、インターネット接続とそのプロバイダー自身のAPIアクセスが必要です。完全にローカルな構成も可能ですが、セルフホスト型のローカルデーモンを自分で設定・実行する必要があり、追加設定なしのデフォルト動作ではありません。',
        bullets: [
          'オープンソース、MITライセンス、Tauri v2で構築 — [askvoxa.dev](https://askvoxa.dev/)で確認済み',
          '2つのバックエンド経路：クラウドのリアルタイム音声モデル（Gemini Live、OpenAI Realtime）またはセルフホスト型のローカルデーモン',
          'メモは自分のマシン上にプレーンなMarkdownファイルとして保存され、独自形式ではない',
          '設定・データ・APIキーは自分のマシン上に留まる — Voxa自体が運用する独自バックエンドサーバーは存在しない',
          'UIはブラウザタブやチャットウィンドウではなく、枠のない常時最前面表示のオーブ',
          '対応プラットフォーム：Windows（WebView2）、macOS（WKWebView）、Linux（WebKitGTK 4.1）',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: 'tldr' },
      { label: 'Voxaとは何か', anchor: 'what-is-voxa' },
      { label: '主な機能', anchor: 'core-features' },
      { label: 'Voxaは本当にローカルか', anchor: 'is-voxa-local' },
      { label: 'Windows・macOS・LinuxでのVoxa', anchor: 'platforms' },
      { label: 'Voxaが向いている人', anchor: 'who-should-use' },
      { label: 'Voxaが向いていない人', anchor: 'who-should-not-use' },
      { label: 'よくある誤解', anchor: 'common-mistakes' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント — 2026年のVoxa',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'VoxaはTauri v2で構築されたMITライセンスのオープンソースデスクトップ音声アシスタントで、常時最前面表示のフローティングオーブとして表示され、クラウドプロバイダー（Gemini LiveまたはOpenAI Realtime）またはセルフホスト型のローカルデーモンを経由したリアルタイム音声会話に対応し、メモをユーザーのマシン上にプレーンなMarkdownファイルとして保存する。' },
          { type: 'plain-terms', text: 'ブラウザのタブやアプリのウィンドウを開く代わりに、他のウィンドウの上に浮かぶ小さな円形のUIが表示されます。タップして話しかけると、クラウドの音声AIサービスを使うか、自分で設定すれば自分のパソコン上で動く音声モデルを使うことができ、メモはどんなエディタでも開けるプレーンテキストファイルとして記録されます。' },
        ],
        items: [
          'Tauri v2で構築され、MITライセンスの下で公開 — アプリ自体を動かすのに独自のバックエンドソフトウェアは不要',
          'UI：通常のウィンドウやブラウザタブではなく、枠のない常時最前面表示のオーブ',
          'ハイブリッドなモデルバックエンド：クラウドのリアルタイム音声（Google Gemini LiveまたはOpenAI Realtime）か、自分で設定するセルフホスト型のローカルデーモン',
          'メモや検索結果はプレーンなMarkdownファイルとしてローカルのファイルシステムに保存され、独自データベースではない',
          '設定・データ・APIキーはユーザー自身のマシンに保存される',
          'Windows（WebView2）、macOS（WKWebView）、Linux（WebKitGTK 4.1）で利用可能',
          '公式サイト：[askvoxa.dev](https://askvoxa.dev/)',
        ],
        callouts: [
          { type: 'note', text: 'Voxaは完全にローカル専用のツールではありません。クラウドバックエンド（Gemini LiveまたはOpenAI Realtime）はより簡単な経路ですが、そのプロバイダーのAPIとインターネット接続に依存します。完全にローカルな構成には、Voxaを自分自身がセルフホストするデーモンに向ける設定が必要です。クラウド不要・設定不要のローカルアプリだと思い込む前に、以下の「Voxaは本当にローカルか」を参照してください。' },
        ],
      },
      overview: {
        id: 'what-is-voxa',
        title: 'Voxaとは何か',
        content: 'Voxaは[askvoxa.dev](https://askvoxa.dev/)で公開されているオープンソースのデスクトップ音声アシスタントで、Tauri v2（ネイティブシェルにWebベースのUIを包んだ、軽量なクロスプラットフォームデスクトップアプリを構築するためのフレームワーク）で構築されています。VoxaはMITライセンスの下で公開されています。',
        items: [
          '中心となる操作モデル：他のウィンドウの上に浮かぶ、枠のない常時最前面表示のオーブ — 別のチャットウィンドウやブラウザタブを開く代わりに、タップするとリアルタイム音声会話が始まる',
          'モデルバックエンドは設定可能で、単一のプロバイダーに固定されていない：クラウドのリアルタイム音声モデル（Google Gemini LiveまたはOpenAI Realtime）か、セルフホスト型のローカルデーモン',
          'Tauri v2で構築されており、Electronのように別のブラウザエンジンを同梱するのではなく、OS自身のWebエンジン（Windowsの場合WebView2、macOSの場合WKWebView、LinuxのはWebKitGTK 4.1）を使ってUIを描画する',
          'アシスタントが検索したり保存を求められたりしたメモや情報は、ローカルのファイルシステムにプレーンなMarkdownファイルとして書き込まれる',
          'Voxa自体が運用する独自バックエンドサーバーは存在しない — アプリ自体の設定・データ・APIキーは自分のマシン上に留まり、クラウド呼び出しは設定したモデルプロバイダー（GoogleまたはOpenAI）に直接送られ、Voxaが運用するサーバーには送られない',
        ],
        note: 'Voxaは現在も活発に開発が続いているため、特定の機能に依存した判断を行う前に、現在の機能範囲・対応モデルプロバイダー・プラットフォーム要件を[askvoxa.dev](https://askvoxa.dev/)で直接確認してください。',
      },
      coreFeatures: {
        id: 'core-features',
        title: 'Voxaの主な機能は何か',
        content: '**Voxaを特徴づける3つの要素は、常時最前面表示の音声オーブ、Markdownベースのメモ保存、そしてTauri v2によるオープンソース基盤です。** それぞれが、ブラウザベースやサブスクリプション型の音声アシスタントと比べたVoxaの挙動を形作っています。',
        subsections: [
          {
            title: 'フローティング音声オーブ',
            content: 'Voxaのインターフェースは、完全なアプリケーションウィンドウやブラウザタブではなく、枠のない常時最前面表示のオーブです。他のウィンドウの上に表示され続けるため、作業中のウィンドウからフォーカスを移すことなく、ワンタップでリアルタイム音声会話を開始できます。',
          },
          {
            title: 'Markdownベースのメモと検索',
            content: 'Voxaが情報を検索したり何かを保存するよう求められたりすると、その結果はローカルのファイルシステムにプレーンなMarkdownファイルとして書き込まれます。独自データベースやクラウド専用のメモストアに閉じ込められることはありません。Markdownはプレーンテキスト形式なので、Voxaが動作しているかどうかに関わらず、これらのファイルはどんなテキストエディタやメモアプリでも読み書きできます。',
          },
          {
            title: 'オープンソース：Tauri v2とMITライセンス',
            content: 'Voxaは Tauri v2で構築され、ソースコードの検証・変更・再配布に制限のない寛容なオープンソースライセンスであるMITライセンスの下で公開されています。TauriアプリはUIに別途ブラウザエンジンを同梱するのではなく、OS自身のWebレンダリングエンジンを使用するため、プラットフォームごとの要件は各プラットフォームのOS Webエンジンの特定バージョンに紐づいています（下記のプラットフォームセクションを参照）。',
          },
        ],
      },
      isVoxaLocal: {
        id: 'is-voxa-local',
        title: 'Voxaは本当にローカルか',
        content: '**Voxaは完全にオンデバイス専用ではなく、ハイブリッド型のアプリです。「ローカルAI」ツールとして選ぶ前に、この違いを明確にしておく必要があります。** リアルタイム音声モデルには2つの独立したバックエンド経路があり、そのうち自分のハードウェア上に推論を留められるのは片方だけです。',
        items: [
          '**クラウドのリアルタイム音声モデル** — VoxaはGoogle Gemini LiveまたはOpenAI Realtime経由でリアルタイム音声会話を行える。この経路にはインターネット接続と、そのプロバイダーに対する自分自身のAPIアクセス・認証情報が必要で、音声モデル自体はそのプロバイダーのサーバー上で動作し、自分のデバイス上では動作しない',
          '**セルフホスト型のローカルデーモン** — 代わりにVoxaを、自分で設定・実行するローカルデーモンに向けることもできる。これにより音声モデルの推論を自分のマシンやネットワーク上に留め、クラウドプロバイダーへ音声を送信しない。この経路がVoxaをローカルAIツールとして機能させるものだが、これはオプトインの設定作業であり、デフォルトのゼロコンフィグ動作ではない',
        ],
        callouts: [
          { type: 'note', text: 'どちらのバックエンドを選んでもローカルに留まるもの：アプリ自体の設定、メモ（プレーンなMarkdownファイルとして保存）、APIキー — これらはVoxaが運用するサーバーではなく、自分のマシン上に保存される。デフォルトでローカルに留まらないもの：セルフホスト型のローカルデーモン経路を設定していない限り、リアルタイム音声モデル自体。' },
        ],
        note: '完全にオフラインでクラウド依存のない構成が要件である場合は、インターネット接続なしでVoxaに頼る前に、セルフホスト型のローカルデーモンが設定・到達可能であることを確認してください。クラウドのリアルタイム音声経路（Gemini LiveまたはOpenAI Realtime）はオフラインでは機能しません。',
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'Windows・macOS・LinuxでのVoxa',
        columns: ['プラットフォーム', '想定される動作'],
        rows: [
          {
            'プラットフォーム': 'Windows',
            '想定される動作': 'Voxaは、Microsoftが最新のWindowsに同梱するChromiumベースのWebエンジンであるWebView2を使ってUIを描画する。オーブUIと音声UIが正しく表示されるには、最新のWebView2ランタイムが必要。',
          },
          {
            'プラットフォーム': 'macOS',
            '想定される動作': 'VoxaはUIにAppleの組み込みWebレンダリングエンジンであるWKWebViewを使用する。TauriはOS自身のエンジンに依存し独自のものを同梱しないため、動作は使用中のmacOSに付属するWKWebViewのバージョンに従う。',
          },
          {
            'プラットフォーム': 'Linux',
            '想定される動作': 'VoxaはLinux上のUIにWebKitGTK 4.1を使用する。これは「何らかのWebKitビルド」ではなく特定バージョンのWebKitGTKであるため、インストール前に自分のディストリビューションがWebKitGTK 4.1（または互換バージョン）をパッケージしているか確認すること。古いディストリビューションのパッケージバージョンでは一致しない可能性がある。',
          },
        ],
        note: 'Tauri v2は同梱ブラウザエンジンではなく各OS自身のWebエンジンを通じてUIを描画するため、各プラットフォームの正確な最小OS/エンジンバージョンをここで恒久的な数値として固定することはできない。インストール前に、現在のプラットフォーム要件を[askvoxa.dev](https://askvoxa.dev/)で直接確認すること。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Voxaが向いている人',
        content: '正しい選択は、常時表示される音声オーブとMarkdownベースのメモがアシスタントとの対話スタイルに合うかどうか、そして完全なローカル推論が重要な場合にローカルデーモンを設定する意思があるかどうかによって決まる。',
        subsections: [
          {
            title: 'こういう場合にVoxaを使う',
            list: [
              '完全なウィンドウやブラウザタブに切り替える必要のある、小さなフローティングオーブとして表示され続ける音声アシスタントが欲しい場合',
              '独自形式ではなく、アプリの外で開いて検索・編集できるプレーンなMarkdownファイルとしてメモを保存したい場合',
              'クラウドのリアルタイム音声プロバイダー（Gemini LiveまたはOpenAI Realtime）を自分自身のAPIアクセスで使うことに抵抗がない、または推論を自分のハードウェア上に留めたい場合はセルフホスト型のローカルデーモンを設定する意思がある場合',
              'クローズドソースのサブスクリプション型アシスタントではなく、ソースコードを検証・変更できるオープンソースかつMITライセンスのアプリを好む場合',
            ],
          },
          {
            title: 'こういう場合は別のツールを検討する',
            list: [
              '追加設定不要で完全にローカルな音声アシスタントが最初から必要な場合 — Voxaのデフォルト経路はクラウドに依存しており、完全にローカルな運用には自分自身でセルフホスト型デーモンを設定する必要がある',
              'デスクトップツールではなくモバイルアプリを探している場合 — Voxaが対象とするのはWindows・macOS・Linuxのデスクトップであり、iOSやAndroidではない',
              '各コンポーネントが明記された、完全に文書化されたエンドツーエンドのオープンソース音声パイプライン（音声認識・LLM・音声合成）が必要な場合 — そのような完全に仕様化されたパイプラインについては[スマートフォンでローカル音声アシスタントを構築する](/ja/power-local-llm/voice-assistant-local-mobile-offline)や[ローカル音声アシスタントを構築する：完全ガイド](/ja/power-local-llm/build-local-voice-assistant-2026)を参照',
            ],
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Voxaを評価する際によくある誤解',
        content: 'Voxaに関する混乱の多くは、実際には両者を組み合わせた設定可能なハイブリッドとして設計されているにもかかわらず、純粋にローカルなアプリか純粋にクラウドなアプリのどちらかとして振る舞うと思い込むことから生じる。',
        subsections: [
          {
            title: '誤解1：Voxaがデフォルトで完全にオフライン動作すると思い込む',
            content: 'Voxaのデフォルトで最も手間のかからない経路は、インターネット接続とそのプロバイダーのAPIアクセスを必要とするクラウドのリアルタイム音声モデル（Gemini LiveまたはOpenAI Realtime）である。完全にローカルなオフライン動作は可能だが、それはセルフホスト型のローカルデーモンを自分自身で設定・実行した後に限られる。',
          },
          {
            title: '誤解2：「オープンソース」＝「クラウド呼び出しなし」と思い込む',
            content: 'Voxaのアプリ自体のコードがオープンソース（MITライセンス、Tauri v2）であることと、どの音声モデルバックエンドを使うかは別の事実である。オープンソースのアプリコードであっても、リアルタイム音声をサードパーティのクラウドプロバイダーに送信するよう設定できる — アプリのライセンスだけでなく、実際にどのバックエンド経路が設定されているかを確認すること。',
          },
          {
            title: '誤解3：すべてのデバイスで同じMarkdownメモが自動的に同期されると期待する',
            content: 'メモは、Voxaが動作しているマシンのローカルファイルシステムにプレーンなMarkdownファイルとして保存される。クラウドフォルダやgitリポジトリなど、自分自身で同期を別途設定しない限り、あるマシンのメモが別のマシンで自動的に利用できるわけではない。',
          },
          {
            title: '誤解4：プラットフォームのWebエンジン要件を確認せずにインストールする',
            content: 'VoxaはTauri v2で構築されているため、そのUIは同梱のブラウザエンジンではなく、OS自身のWebエンジン（Windowsの場合WebView2、macOSの場合WKWebView、LinuxのはWebKitGTK 4.1）に依存する。システム上のエンジンが古い、または存在しない場合、オーブUIが正しく描画されないことがある。インストールの問題をVoxaのバグだと判断する前に、自分のプラットフォームのエンジンが最新であることを確認すること。',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Voxaとは何ですか？', a: 'VoxaはTauri v2で構築されたMITライセンスのオープンソースデスクトップ音声アシスタントで、[askvoxa.dev](https://askvoxa.dev/)で利用できます。タップするとリアルタイム音声会話が始まる枠のない常時最前面表示のオーブとして提示され、バックエンドとしてクラウドのリアルタイム音声モデルかセルフホスト型のローカルデーモンを使用できます。' },
          { q: 'Voxaは無料ですか？', a: 'Voxaのアプリ自体のコードはMITライセンスの下でオープンソースです。クラウドのリアルタイム音声バックエンド（Gemini LiveまたはOpenAI Realtime）を使用する場合、Voxa自体とは別に、そのプロバイダー独自の料金とAPI利用規約が適用されます。Gemini LiveまたはOpenAI Realtimeの現在の料金はGoogleまたはOpenAIに直接確認してください。' },
          { q: 'Voxaは完全にオフラインで動作しますか？', a: 'セルフホスト型のローカルデーモン経路を設定した場合のみです。デフォルトでは、Voxaはインターネット接続を必要とするクラウドのリアルタイム音声プロバイダー（Gemini LiveまたはOpenAI Realtime）を使用するよう設定されています。完全にオフラインな構成は可能ですが、自分自身のローカルデーモンを実行し、Voxaをそこに向ける必要があります。' },
          { q: 'Voxaはどのプラットフォームに対応していますか？', a: 'WebView2エンジンを使用するWindows、WKWebViewを使用するmacOS、WebKitGTK 4.1を使用するLinuxです。VoxaはTauri v2で構築されたデスクトップアプリであり、iOSやAndroid向けのモバイルアプリではありません。' },
          { q: 'Voxaはメモをどこに保存しますか？', a: '独自データベースやクラウド専用形式ではなく、ローカルのファイルシステムにプレーンなMarkdownファイルとして保存します。これにより、Voxaがインストールされているか動作しているかに関わらず、メモはどんなテキストエディタでも読み書きできる状態を保ちます。' },
          { q: 'VoxaはAPIキーやデータをどこかに送信しますか？', a: '設定・データ・APIキーは自分自身のマシンに保存されます。クラウドのリアルタイム音声バックエンドを使用する場合、音声と会話データは設定したプロバイダー（Google Gemini LiveまたはOpenAI Realtime）に、そのプロバイダー独自のデータ取扱条件の下で送信され、Voxaが別途運用するサーバーには送信されません。' },
          { q: 'Voxaにおけるクラウドバックエンドとローカルデーモンバックエンドの違いは何ですか？', a: 'クラウドバックエンド（Gemini LiveまたはOpenAI Realtime）は、そのプロバイダーのサーバーを通じてリアルタイム音声モデルを実行し、インターネット接続とそのプロバイダーに対するAPIアクセスが必要です。セルフホスト型のローカルデーモンバックエンドは、音声モデルの推論を自分が管理するハードウェア上に留めますが、そのデーモン自体を自分で設定・実行する必要があり、事前設定済みではありません。' },
          { q: 'Voxaはオープンソースですか？', a: 'はい。VoxaはTauri v2で構築され、商用利用に制限のない、ソースコードの検証・変更・再配布を許可する寛容なライセンスであるMITライセンスの下で公開されています。' },
          { q: 'インターネット接続なしでVoxaを使用できますか？', a: 'セルフホスト型のローカルデーモンを音声モデルバックエンドとして設定・実行している場合のみです。クラウドのリアルタイム音声経路（Gemini LiveまたはOpenAI Realtime）が機能するには接続が必要です。' },
          { q: 'Voxaはシステム上に特定のブラウザエンジンを必要としますか？', a: 'はい、間接的にです。Tauri v2で構築されているため、VoxaはOS自身のWebエンジンを通じてUIを描画します：WindowsではWebView2、macOSではWKWebView、LinuxではWebKitGTK 4.1です。インストール前に、該当するエンジンがシステム上に存在し、最新であることを確認してください。' },
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        links: [
          { url: 'https://[askvoxa.dev](https://askvoxa.dev/)/', title: 'Voxa公式サイト', description: 'この記事のファクトの出典であるVoxaの製品概要、プラットフォーム対応状況、セットアップ情報。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカル音声アシスタントを構築する：完全ガイド（2026年）](/ja/power-local-llm/build-local-voice-assistant-2026) — すべてのコンポーネントが文書化された、完全に仕様化されたオープンソース音声パイプライン（音声認識、ローカルLLM、音声合成）。',
          '[スマートフォンでローカル音声アシスタントを構築する：Whisper + ローカルLLM（クラウド不要）](/ja/power-local-llm/voice-assistant-local-mobile-offline) — 測定されたレイテンシとバッテリーデータを含む、モバイル向けの対をなす記事。',
          '[ローカルWhisper STT比較2026](/ja/power-local-llm/local-whisper-stt-comparison-2026) — Voxaのようなクラウド/ローカルのハイブリッドアプリではなく、ローカルの音声認識オプションを比較したい読者向け。',
          '[ローカルTTSと音声クローニング：Piper、Coqui、XTTS](/ja/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — 完全にオフラインな音声パイプラインのためのローカル音声合成オプション。',
          '[Local LLM Software Directory 2026](/ja/power-local-llm/local-llm-software-directory) — このレビューが属する、ローカルAIツールとアプリの完全なカタログ。',
        ],
      },
    },
  },
  zh: {
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/voxa-review-hero-zh.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-04',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    educationalLevel: 'Intermediate',
    audience: '正在权衡浮动语音悬浮球助手（可选本地推理）与基于浏览器的云端助手哪个更适合自己工作流程的注重隐私的桌面用户和自托管爱好者',
    primaryTerm: 'Voxa',
    title: 'Voxa评测2026：桌面端私密语音助手悬浮球',
    seoTitle: 'Voxa评测2026：桌面端私密语音助手悬浮球',
    intro: 'Voxa（官网[askvoxa.dev](https://askvoxa.dev/)）是一款开源桌面语音助手，以无边框、始终置顶的悬浮球形式呈现，点击即可开始实时语音对话。它基于Tauri v2构建，采用MIT许可证发布，会将搜索结果和笔记以纯Markdown文件形式保存在用户自己的机器上。Voxa是混合型而非完全本地：它既可以通过云端实时语音模型（Google Gemini Live或OpenAI Realtime）路由对话，也可以通过用户自行配置的自托管本地守护进程运行。',
    metaDescription: 'Voxa评测：一款MIT许可的开源语音悬浮球助手，支持Windows、macOS和Linux。解析云端/本地守护进程混合架构、Markdown笔记存储，以及适合哪些用户。',
    readTime: '阅读约9分钟',
    targetKeywords: [
      'Voxa 评测',
      'Voxa 语音助手',
      'Voxa AI悬浮球',
      'Voxa 本地语音助手',
      '[askvoxa.dev](https://askvoxa.dev/)',
    ],
    leadAnswerBlock: '**Voxa是一款MIT许可的开源桌面语音助手（基于Tauri v2构建），以浮动、始终置顶的悬浮球形式运行——点击即可开始实时语音对话。** 它并非完全本地运行：既可以使用云端实时语音模型（Gemini Live或OpenAI Realtime），也可以使用用户自行配置的自托管本地守护进程，并将笔记以纯Markdown文件形式保存在用户自己的机器上。',
    quickAnswerTop: {
      zh: {
        question: 'Voxa是完全本地、可离线使用的语音助手吗？',
        answer: '不是——Voxa是混合型架构，并非完全在设备端运行。默认情况下，它被设计为通过云端提供商（Google Gemini Live或OpenAI Realtime）路由实时语音对话，这需要互联网连接以及用户自己在该提供商处的API访问权限。完全本地的配置是可行的，但需要用户自行配置并运行自托管本地守护进程——这不是无需额外设置的默认行为。',
        bullets: [
          '开源，MIT许可证，基于Tauri v2构建——已在[askvoxa.dev](https://askvoxa.dev/)确认',
          '两条后端路径：云端实时语音模型（Gemini Live、OpenAI Realtime）或自托管本地守护进程',
          '笔记以纯Markdown文件形式保存在用户机器上，而非专有格式',
          '配置、数据和API密钥均保留在用户自己的机器上——Voxa本身不运行任何专有后端服务器',
          '界面是无边框、始终置顶的悬浮球，而非浏览器标签页或聊天窗口',
          '支持平台：Windows（WebView2）、macOS（WKWebView）、Linux（WebKitGTK 4.1）',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: 'Voxa是什么', anchor: 'what-is-voxa' },
      { label: '核心功能', anchor: 'core-features' },
      { label: 'Voxa真的是本地运行的吗', anchor: 'is-voxa-local' },
      { label: 'Voxa在Windows、macOS和Linux上的表现', anchor: 'platforms' },
      { label: '谁适合使用Voxa', anchor: 'who-should-use' },
      { label: '谁不适合使用Voxa', anchor: 'who-should-not-use' },
      { label: '常见误解', anchor: 'common-mistakes' },
      { label: '常见问题', anchor: 'faq' },
      { label: '来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点 — 2026年的Voxa',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Voxa是一款基于Tauri v2构建的MIT许可开源桌面语音助手，以始终置顶的浮动悬浮球形式呈现，支持通过云端提供商（Gemini Live或OpenAI Realtime）或自托管本地守护进程进行实时语音对话，并将笔记以纯Markdown文件形式保存在用户自己的机器上。' },
          { type: 'plain-terms', text: '它不是浏览器标签页或应用窗口，而是一个悬浮在其他窗口上方的小圆圈。点击它就能开始说话：它可以使用云端AI语音服务，也可以在用户自行配置后使用运行在自己电脑上的语音模型，并将笔记写成任何编辑器都能打开的纯文本文件。' },
        ],
        items: [
          '基于Tauri v2构建，以MIT许可证发布——运行应用本身不需要任何专有后端软件',
          '界面：无边框、始终置顶的悬浮球，而非普通窗口或浏览器标签页',
          '混合模型后端：云端实时语音（Google Gemini Live或OpenAI Realtime）或用户自行配置的自托管本地守护进程',
          '笔记和搜索结果以纯Markdown文件形式保存在本地文件系统中，而非专有数据库',
          '配置、数据和API密钥均存储在用户自己的机器上',
          '支持Windows（WebView2）、macOS（WKWebView）和Linux（WebKitGTK 4.1）',
          '官方网站：[askvoxa.dev](https://askvoxa.dev/)',
        ],
        callouts: [
          { type: 'note', text: 'Voxa并非一款纯粹本地运行的工具。云端后端（Gemini Live或OpenAI Realtime）是更简单的路径，但依赖该提供商的API和互联网连接；要实现完全本地化配置，需要将Voxa指向用户自己搭建的自托管守护进程。在假设这是一款无需云端、无需配置的本地应用之前，请参阅下方的"Voxa真的是本地运行的吗"部分。' },
        ],
      },
      overview: {
        id: 'what-is-voxa',
        title: 'Voxa是什么',
        content: 'Voxa是一款开源桌面语音助手，发布于[askvoxa.dev](https://askvoxa.dev/)，基于Tauri v2构建——这是一个用于构建轻量级跨平台桌面应用的框架，将基于Web的界面封装在原生外壳中。Voxa以MIT许可证发布。',
        items: [
          '核心交互模式：一个悬浮在其他窗口上方的无边框、始终置顶悬浮球——点击它即可开始实时语音对话，而不必打开单独的聊天窗口或浏览器标签页',
          '模型后端可配置，并非固定于单一提供商：云端实时语音模型（Google Gemini Live或OpenAI Realtime）或自托管本地守护进程',
          '基于Tauri v2构建，使用操作系统自带的Web引擎渲染界面（Windows上为WebView2，macOS上为WKWebView，Linux上为WebKitGTK 4.1），而不像Electron那样捆绑单独的浏览器引擎',
          '助手搜索或被要求保存的笔记和信息，会以纯Markdown文件形式写入本地文件系统',
          'Voxa本身不运行任何专有后端服务器——应用自身的配置、数据和API密钥保留在用户机器上；云端调用直接发送到用户配置的模型提供商（Google或OpenAI），而非发送到Voxa运营的服务器',
        ],
        note: 'Voxa正在积极开发中；在做出依赖特定功能的决定之前，请直接在[askvoxa.dev](https://askvoxa.dev/)确认当前的功能范围、支持的模型提供商和平台要求。',
      },
      coreFeatures: {
        id: 'core-features',
        title: 'Voxa的核心功能有哪些',
        content: '**Voxa的三大标志性特征是始终置顶的语音悬浮球、基于Markdown的笔记存储，以及基于Tauri v2的开源架构。** 每一项都决定了它与基于浏览器或订阅制语音助手相比的行为方式。',
        subsections: [
          {
            title: '浮动语音悬浮球',
            content: 'Voxa的界面是一个无边框、始终置顶的悬浮球，而非完整的应用窗口或浏览器标签页。它始终显示在其他窗口上方，因此只需轻轻一点即可开始实时语音对话，无需将焦点从正在进行的工作中移开。',
          },
          {
            title: '基于Markdown的笔记与搜索',
            content: 'Voxa在搜索信息或被要求保存内容时，结果会以纯Markdown文件形式写入本地文件系统——不会被锁定在专有数据库或纯云端笔记存储中。由于Markdown是纯文本格式，无论Voxa是否在运行，这些文件都可以在任何文本编辑器或笔记应用中读取和编辑。',
          },
          {
            title: '开源：Tauri v2与MIT许可证',
            content: 'Voxa基于Tauri v2构建，以MIT许可证发布——这是一种宽松的开源许可证，对查看、修改或再分发源代码没有限制。Tauri应用使用操作系统自身的Web渲染引擎来渲染界面，而不是捆绑单独的浏览器引擎，因此各平台的要求都绑定在该平台特定版本的操作系统Web引擎上（见下方平台部分）。',
          },
        ],
      },
      isVoxaLocal: {
        id: 'is-voxa-local',
        title: 'Voxa真的是本地运行的吗',
        content: '**Voxa是一款混合型应用，而非完全在设备端运行的应用——在将其作为"本地AI"工具选用之前，务必厘清这一区别。** 它为实时语音模型支持两条独立的后端路径，其中只有一条能将推理保留在用户自己的硬件上。',
        items: [
          '**云端实时语音模型**——Voxa可以通过Google Gemini Live或OpenAI Realtime路由实时语音对话。此路径需要互联网连接以及用户在该提供商处的API访问权限/凭证；语音模型本身运行在该提供商的服务器上，而非用户设备上。',
          '**自托管本地守护进程**——Voxa也可以指向用户自行配置和运行的本地守护进程，将语音模型推理保留在自己的机器或网络上，而不是将音频发送给云端提供商。这条路径才是让Voxa发挥本地AI工具作用的方式，但这是需要用户自行完成的可选设置，而非默认行为。',
        ],
        callouts: [
          { type: 'note', text: '无论选择哪种后端，始终保留在本地的内容：应用自身的配置、笔记（保存为纯Markdown文件）和API密钥——这些都存储在用户自己的机器上，而非Voxa运营的服务器上。默认情况下不会保留在本地的内容：实时语音模型本身，除非已配置自托管本地守护进程路径。' },
        ],
        note: '如果要求完全离线、无云端依赖的配置，请在没有互联网连接时依赖Voxa之前，确认自托管本地守护进程已配置且可访问——云端实时语音路径（Gemini Live或OpenAI Realtime）在离线状态下无法运行。',
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'Voxa在Windows、macOS和Linux上的表现',
        columns: ['平台', '预期表现'],
        rows: [
          {
            '平台': 'Windows',
            '预期表现': 'Voxa使用WebView2渲染界面，这是微软随现代版Windows附带的基于Chromium的Web引擎。需要最新的WebView2运行时，悬浮球界面和语音UI才能正确显示。',
          },
          {
            '平台': 'macOS',
            '预期表现': 'Voxa使用苹果内置的Web渲染引擎WKWebView来渲染界面。由于Tauri依赖操作系统提供的引擎而非自带引擎，其行为会随macOS版本自带的WKWebView版本而变化。',
          },
          {
            '平台': 'Linux',
            '预期表现': 'Voxa在Linux上使用WebKitGTK 4.1渲染界面。这是一个具体的WebKitGTK版本，而非"任意WebKit构建版本"——安装前请确认所用发行版打包了WebKitGTK 4.1（或兼容版本），因为较旧的发行版软件包版本可能不匹配。',
          },
        ],
        note: '由于Tauri v2通过各操作系统自身的Web引擎（而非捆绑的浏览器引擎）渲染界面，各平台准确的最低操作系统/引擎版本无法在此固定为一个永久数字——安装前请直接在[askvoxa.dev](https://askvoxa.dev/)确认当前的平台要求。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁适合使用Voxa',
        content: '正确的选择取决于始终可见的语音悬浮球和基于Markdown的笔记是否符合用户与助手交流的方式，以及在完全本地推理很重要的情况下，用户是否愿意自行配置本地守护进程。',
        subsections: [
          {
            title: '在以下情况使用Voxa',
            list: [
              '需要一款以小型浮动悬浮球形式保持可见的语音助手，而不是必须切换到的完整窗口或浏览器标签页',
              '希望笔记以纯Markdown文件形式保存，可以在应用之外打开、搜索和编辑，而非专有格式',
              '愿意使用带有自己API访问权限的云端实时语音提供商（Gemini Live或OpenAI Realtime），或者如果需要推理保留在自己硬件上，愿意自行配置自托管本地守护进程',
              '倾向于选择可查看或修改源代码的开源MIT许可应用，而非闭源订阅制助手',
            ],
          },
          {
            title: '在以下情况考虑其他工具',
            list: [
              '需要开箱即用、完全本地、零配置的语音助手——Voxa的默认路径依赖云端，纯本地运行需要用户自行配置自托管守护进程',
              '寻找的是移动应用而非桌面工具——Voxa面向Windows、macOS和Linux桌面，而非iOS或Android',
              '需要每个组件都明确说明的、完全文档化的端到端开源语音管线（语音转文本、LLM、文本转语音）——可参阅[在手机上搭建本地语音助手](/zh/power-local-llm/voice-assistant-local-mobile-offline)或[搭建本地语音助手：完整指南](/zh/power-local-llm/build-local-voice-assistant-2026)，了解这类完全明确说明的管线',
            ],
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '评估Voxa时的常见误解',
        content: '关于Voxa的大部分困惑，源于假设它要么表现得像纯本地应用，要么表现得像纯云端应用，而实际上它被设计为二者可配置的混合体。',
        subsections: [
          {
            title: '误解1：认为Voxa默认完全离线运行',
            content: 'Voxa默认、摩擦最小的路径是云端实时语音模型（Gemini Live或OpenAI Realtime），需要互联网连接以及该提供商的API访问权限。完全本地的离线运行是可行的，但仅限于用户自行配置并运行自托管本地守护进程之后。',
          },
          {
            title: '误解2：认为"开源"意味着"没有云端调用"',
            content: 'Voxa自身应用代码是开源的（MIT许可证、Tauri v2）这一事实，与用户选择使用哪种语音模型后端是两回事。开源应用代码依然可以被配置为将实时音频发送给第三方云端提供商——需要检查实际配置的是哪条后端路径，而不仅仅是应用的许可证。',
          },
          {
            title: '误解3：期望在每台设备上自动获得相同的Markdown笔记',
            content: '笔记以纯Markdown文件形式保存在运行Voxa的机器的本地文件系统中。除非用户另行设置自己的同步方式（云盘文件夹、git仓库或类似方式），否则一台机器上的笔记不会自动出现在另一台机器上。',
          },
          {
            title: '误解4：安装前未检查平台Web引擎要求',
            content: '由于Voxa基于Tauri v2构建，其界面依赖操作系统自身的Web引擎——Windows上为WebView2，macOS上为WKWebView，Linux上为WebKitGTK 4.1——而非捆绑的浏览器引擎。系统上引擎过时或缺失可能导致悬浮球界面无法正确渲染；在认定安装问题是Voxa本身的缺陷之前，请先确认所用平台的引擎是否为最新版本。',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: 'Voxa是什么？', a: 'Voxa是一款基于Tauri v2构建的MIT许可开源桌面语音助手，可在[askvoxa.dev](https://askvoxa.dev/)获取。它以无边框、始终置顶的悬浮球形式呈现，点击即可开始实时语音对话，后端可以使用云端实时语音模型或自托管本地守护进程。' },
          { q: 'Voxa是免费的吗？', a: 'Voxa自身的应用代码以MIT许可证开源。如果使用云端实时语音后端（Gemini Live或OpenAI Realtime），则需遵循该提供商自己的定价和API条款，这与Voxa本身无关。请直接向Google或OpenAI确认Gemini Live或OpenAI Realtime的当前定价。' },
          { q: 'Voxa能完全离线运行吗？', a: '只有在配置了自托管本地守护进程路径的情况下才可以。默认情况下，Voxa被设置为使用云端实时语音提供商（Gemini Live或OpenAI Realtime），这需要互联网连接。完全离线的配置是可行的，但需要用户运行自己的本地守护进程并将Voxa指向它。' },
          { q: 'Voxa支持哪些平台？', a: 'Windows（使用WebView2引擎）、macOS（使用WKWebView）和Linux（使用WebKitGTK 4.1）。Voxa是基于Tauri v2构建的桌面应用，而非iOS或Android的移动应用。' },
          { q: 'Voxa将笔记存储在哪里？', a: '以纯Markdown文件形式存储在本地文件系统中，而非专有数据库或纯云端格式。这意味着无论Voxa是否已安装或正在运行，笔记都可以在任何文本编辑器中读取和编辑。' },
          { q: 'Voxa会将我的API密钥或数据发送到其他地方吗？', a: '配置、数据和API密钥存储在用户自己的机器上。如果使用云端实时语音后端，音频和对话数据会被发送到用户配置的提供商（Google Gemini Live或OpenAI Realtime），遵循该提供商自己的数据处理条款——而不是发送到Voxa单独运营的服务器。' },
          { q: 'Voxa中云端后端和本地守护进程后端有什么区别？', a: '云端后端（Gemini Live或OpenAI Realtime）通过该提供商的服务器运行实时语音模型，需要互联网连接以及该提供商的API访问权限。自托管本地守护进程后端将语音模型推理保留在用户自己控制的硬件上，但用户需要自行配置和运行该守护进程——它并非预先配置好的。' },
          { q: 'Voxa是开源的吗？', a: '是的。Voxa基于Tauri v2构建，以MIT许可证发布，这是一种允许查看、修改和再分发源代码、且不限制商业用途的宽松许可证。' },
          { q: '我能在没有互联网连接的情况下使用Voxa吗？', a: '只有在已配置并正在运行自托管本地守护进程作为语音模型后端的情况下才可以。云端实时语音路径（Gemini Live或OpenAI Realtime）需要网络连接才能运行。' },
          { q: 'Voxa是否需要我的系统上有特定的浏览器引擎？', a: '是的，间接需要——由于基于Tauri v2构建，Voxa通过操作系统自身的Web引擎渲染界面：Windows上为WebView2，macOS上为WKWebView，Linux上为WebKitGTK 4.1。安装前请确保相应引擎存在于系统上且为最新版本。' },
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        links: [
          { url: 'https://[askvoxa.dev](https://askvoxa.dev/)/', title: 'Voxa官方网站', description: 'Voxa的产品概览、平台可用性和安装信息，本评测中事实内容的来源。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[搭建本地语音助手：完整指南（2026年）](/zh/power-local-llm/build-local-voice-assistant-2026) — 一套完全说明的开源语音管线（语音转文本、本地LLM、文本转语音），适合希望每个组件都有文档记录的读者。',
          '[在手机上搭建本地语音助手：Whisper + 本地LLM（无需云端）](/zh/power-local-llm/voice-assistant-local-mobile-offline) — 面向移动端的对应文章，附有实测延迟和电池数据。',
          '[本地Whisper语音识别对比2026](/zh/power-local-llm/local-whisper-stt-comparison-2026) — 适合想比较本地语音识别选项，而非Voxa这类云端/本地混合应用的读者。',
          '[本地文本转语音与声音克隆：Piper、Coqui、XTTS](/zh/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — 用于完全离线语音管线的本地文本转语音选项。',
          '[Local LLM Software Directory 2026](/zh/power-local-llm/local-llm-software-directory) — 本评测所属的本地AI工具和应用完整目录。',
        ],
      },
    },
  },
  ar: {
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/voxa-review-hero-ar.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-04',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    educationalLevel: 'Intermediate',
    audience: 'مستخدمو أجهزة الكمبيوتر المكتبية المهتمون بالخصوصية ومستضيفو الخدمات ذاتياً الذين يقررون ما إذا كان مساعد صوتي عائم بشكل كرة مع استدلال محلي اختياري يناسب سير عملهم أفضل من مساعد سحابي يعمل عبر المتصفح',
    primaryTerm: 'Voxa',
    title: 'مراجعة Voxa 2026: مساعد صوتي خاص على شكل كرة عائمة لسطح المكتب',
    seoTitle: 'مراجعة Voxa 2026: مساعد صوتي خاص لسطح المكتب',
    intro: 'Voxa، المتاح على [askvoxa.dev](https://askvoxa.dev/)، هو مساعد صوتي مفتوح المصدر لسطح المكتب يقدَّم على شكل كرة عائمة بلا إطار وتظل دائماً في المقدمة، تنقر عليها لبدء محادثة صوتية فورية. تم بناؤه باستخدام Tauri v2 ونُشر بموجب رخصة MIT، ويبحث ويحفظ الملاحظات المحلية كملفات Markdown نصية بسيطة على جهاز المستخدم. Voxa هجين وليس محلياً حصرياً: يمكنه توجيه المحادثات عبر نماذج صوتية سحابية فورية (Google Gemini Live أو OpenAI Realtime) أو عبر خدمة خلفية (daemon) محلية ذاتية الاستضافة يقوم المستخدم بتهيئتها بنفسه.',
    metaDescription: 'مراجعة Voxa: مساعد صوتي مفتوح المصدر برخصة MIT على شكل كرة، لأنظمة Windows وmacOS وLinux. كيف يعمل الإعداد الهجين بين السحابة والخدمة المحلية، وتخزين الملاحظات بصيغة Markdown، ولمن يناسب.',
    readTime: '9 دقائق للقراءة',
    targetKeywords: [
      'Voxa review',
      'Voxa مساعد صوتي',
      'Voxa AI orb',
      'Voxa مساعد صوتي محلي',
      '[askvoxa.dev](https://askvoxa.dev/)',
    ],
    leadAnswerBlock: '**Voxa مساعد صوتي مفتوح المصدر لسطح المكتب برخصة MIT (مبني على Tauri v2) يعمل ككرة عائمة تظل دائماً في المقدمة — انقر عليها لبدء محادثة صوتية فورية.** وهو ليس محلياً حصرياً: يمكنه استخدام نماذج صوتية سحابية فورية (Gemini Live أو OpenAI Realtime) أو خدمة خلفية محلية ذاتية الاستضافة يقوم المستخدم بتهيئتها بنفسه، ويحفظ الملاحظات كملفات Markdown نصية بسيطة على جهاز المستخدم الخاص.',
    quickAnswerTop: {
      ar: {
        question: 'هل Voxa مساعد صوتي محلي بالكامل ويعمل دون اتصال بالإنترنت؟',
        answer: 'لا — Voxa هجين وليس محلياً حصرياً على الجهاز. بشكل افتراضي، تم تصميمه لتوجيه المحادثات الصوتية الفورية عبر مزود سحابي (Google Gemini Live أو OpenAI Realtime)، وهو ما يتطلب اتصالاً بالإنترنت وحق وصول API خاصاً بالمستخدم لدى ذلك المزود. الإعداد المحلي بالكامل ممكن، لكنه يتطلب من المستخدم تهيئة وتشغيل خدمة خلفية محلية ذاتية الاستضافة بنفسه — وهذا ليس السلوك الافتراضي دون إعداد إضافي.',
        bullets: [
          'مفتوح المصدر، رخصة MIT، مبني على Tauri v2 — مؤكَّد على [askvoxa.dev](https://askvoxa.dev/)',
          'مساران للخلفية: نماذج صوتية سحابية فورية (Gemini Live، OpenAI Realtime) أو خدمة خلفية محلية ذاتية الاستضافة',
          'تُحفظ الملاحظات كملفات Markdown نصية بسيطة على جهاز المستخدم، وليس بصيغة خاصة',
          'يبقى الإعداد والبيانات ومفاتيح API على جهاز المستخدم — لا يوجد خادم خلفي خاص تشغّله Voxa نفسها',
          'الواجهة كرة عائمة بلا إطار تظل دائماً في المقدمة، بدلاً من تبويب متصفح أو نافذة محادثة',
          'المنصات المدعومة: Windows (WebView2)، macOS (WKWebView)، Linux (WebKitGTK 4.1)',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'ما هو Voxa؟', anchor: 'what-is-voxa' },
      { label: 'الميزات الأساسية', anchor: 'core-features' },
      { label: 'هل Voxa محلي فعلاً؟', anchor: 'is-voxa-local' },
      { label: 'Voxa على Windows وmacOS وLinux', anchor: 'platforms' },
      { label: 'لمن يناسب Voxa', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب Voxa', anchor: 'who-should-not-use' },
      { label: 'أخطاء شائعة', anchor: 'common-mistakes' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية — Voxa في 2026',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Voxa مساعد صوتي مفتوح المصدر لسطح المكتب برخصة MIT، مبني على Tauri v2، يظهر ككرة عائمة تظل دائماً في المقدمة، ويدعم المحادثة الصوتية الفورية عبر مزود سحابي (Gemini Live أو OpenAI Realtime) أو عبر خدمة خلفية محلية ذاتية الاستضافة، ويحفظ الملاحظات كملفات Markdown نصية بسيطة على جهاز المستخدم.' },
          { type: 'plain-terms', text: 'بدلاً من فتح تبويب متصفح أو نافذة تطبيق، تحصل على دائرة صغيرة عائمة تبقى فوق نوافذك الأخرى. تنقر عليها وتبدأ بالحديث: يمكنها استخدام خدمة صوتية سحابية للذكاء الاصطناعي، أو — إذا قمت بإعدادها بنفسك — نموذجاً صوتياً يعمل على جهاز الكمبيوتر الخاص بك، وتكتب الملاحظات كملفات نصية بسيطة يمكنك فتحها في أي محرر نصوص.' },
        ],
        items: [
          'مبني على Tauri v2، ومنشور بموجب رخصة MIT — لا حاجة إلى برمجيات خلفية خاصة لتشغيل التطبيق نفسه',
          'الواجهة: كرة عائمة بلا إطار تظل دائماً في المقدمة، بدلاً من نافذة تقليدية أو تبويب متصفح',
          'خلفية نموذج هجينة: صوت فوري سحابي (Google Gemini Live أو OpenAI Realtime) أو خدمة خلفية محلية ذاتية الاستضافة يقوم المستخدم بتهيئتها بنفسه',
          'تُحفظ الملاحظات ونتائج البحث كملفات Markdown نصية بسيطة على نظام الملفات المحلي، وليس في قاعدة بيانات خاصة',
          'يُخزَّن الإعداد والبيانات ومفاتيح API على جهاز المستخدم نفسه',
          'متاح لأنظمة Windows (WebView2) وmacOS (WKWebView) وLinux (WebKitGTK 4.1)',
          'الموقع الرسمي: [askvoxa.dev](https://askvoxa.dev/)',
        ],
        callouts: [
          { type: 'note', text: 'Voxa ليس أداة محلية حصرياً. الخلفية السحابية (Gemini Live أو OpenAI Realtime) هي المسار الأبسط وتعتمد على واجهة برمجة التطبيقات الخاصة بذلك المزود وعلى اتصال بالإنترنت؛ أما الإعداد المحلي بالكامل فيتطلب توجيه Voxa إلى خدمة خلفية ذاتية الاستضافة خاصة بالمستخدم. راجع "هل Voxa محلي فعلاً؟" أدناه قبل افتراض أن هذا تطبيق محلي بلا سحابة وبلا إعداد.' },
        ],
      },
      overview: {
        id: 'what-is-voxa',
        title: 'ما هو Voxa؟',
        content: 'Voxa مساعد صوتي مفتوح المصدر لسطح المكتب، منشور على [askvoxa.dev](https://askvoxa.dev/) ومبني باستخدام Tauri v2، وهو إطار عمل لبناء تطبيقات سطح مكتب خفيفة متعددة المنصات بواجهة مبنية على الويب داخل غلاف أصلي. Voxa منشور بموجب رخصة MIT.',
        items: [
          'نموذج التفاعل الأساسي: كرة عائمة بلا إطار تظل دائماً في المقدمة فوق نوافذك الأخرى — النقر عليها يبدأ محادثة صوتية فورية، بدلاً من فتح نافذة محادثة منفصلة أو تبويب متصفح',
          'خلفية النموذج قابلة للتهيئة، وليست ثابتة على مزود واحد: نماذج صوتية سحابية فورية (Google Gemini Live أو OpenAI Realtime) أو خدمة خلفية محلية ذاتية الاستضافة',
          'مبني على Tauri v2، الذي يعرض الواجهة باستخدام محرك الويب الخاص بنظام التشغيل نفسه (WebView2 على Windows، وWKWebView على macOS، وWebKitGTK 4.1 على Linux) بدلاً من تضمين محرك متصفح منفصل كما يفعل Electron',
          'تُكتب الملاحظات والمعلومات التي يبحث عنها المساعد أو يُطلب منه حفظها كملفات Markdown نصية بسيطة على نظام الملفات المحلي',
          'لا يوجد خادم خلفي خاص تشغّله Voxa نفسها — يبقى إعداد التطبيق وبياناته ومفاتيح API الخاصة به على جهاز المستخدم؛ وتذهب استدعاءات السحابة مباشرة إلى مزود النموذج الذي يقوم المستخدم بتهيئته (Google أو OpenAI)، وليس إلى خادم تشغّله Voxa',
        ],
        note: 'Voxa قيد التطوير النشط؛ تحقق من نطاق الميزات الحالي ومزودي النماذج المدعومين ومتطلبات المنصة مباشرة على [askvoxa.dev](https://askvoxa.dev/) قبل اتخاذ قرار يعتمد على ميزة محددة.',
      },
      coreFeatures: {
        id: 'core-features',
        title: 'ما هي الميزات الأساسية لـ Voxa؟',
        content: '**السمات الثلاث المميزة لـ Voxa هي كرة الصوت التي تظل دائماً في المقدمة، وتخزين الملاحظات القائم على Markdown، وأساسه مفتوح المصدر المبني على Tauri v2.** كل واحدة منها تشكّل طريقة عمل التطبيق مقارنة بمساعد صوتي يعمل عبر المتصفح أو بالاشتراك.',
        subsections: [
          {
            title: 'كرة الصوت العائمة',
            content: 'واجهة Voxa هي كرة عائمة بلا إطار تظل دائماً في المقدمة، بدلاً من نافذة تطبيق كاملة أو تبويب متصفح. تبقى مرئية فوق النوافذ الأخرى، بحيث يمكن بدء محادثة صوتية فورية بنقرة واحدة، دون تحويل التركيز عما كنت تعمل عليه.',
          },
          {
            title: 'الملاحظات والبحث القائمان على Markdown',
            content: 'عندما يبحث Voxa عن معلومة أو يُطلب منه حفظ شيء ما، تُكتب النتيجة كملف Markdown نصي بسيط على نظام الملفات المحلي — وليست محبوسة في قاعدة بيانات خاصة أو مخزن ملاحظات سحابي حصري. ولأن Markdown صيغة نصية بسيطة، تظل هذه الملفات قابلة للقراءة والتعديل في أي محرر نصوص أو تطبيق ملاحظات، بغض النظر عن تشغيل Voxa من عدمه.',
          },
          {
            title: 'مفتوح المصدر: Tauri v2 ورخصة MIT',
            content: 'Voxa مبني باستخدام Tauri v2 ومنشور بموجب رخصة MIT، وهي رخصة مفتوحة المصدر متساهلة لا تقيّد فحص الكود المصدري أو تعديله أو إعادة توزيعه. تستخدم تطبيقات Tauri محرك عرض الويب الخاص بنظام التشغيل نفسه للواجهة بدلاً من تضمين محرك متصفح منفصل، ولهذا ترتبط متطلبات كل منصة بإصدار محدد من محرك الويب الخاص بنظام التشغيل على تلك المنصة (انظر قسم المنصات أدناه).',
          },
        ],
      },
      isVoxaLocal: {
        id: 'is-voxa-local',
        title: 'هل Voxa محلي فعلاً؟',
        content: '**Voxa تطبيق هجين وليس محلياً حصرياً على الجهاز — من المهم توضيح هذا الفرق قبل اختياره كأداة "ذكاء اصطناعي محلي".** فهو يدعم مسارين منفصلين للخلفية الخاصة بالنموذج الصوتي، ومسار واحد فقط منهما يبقي الاستدلال على أجهزة المستخدم الخاصة.',
        items: [
          '**النماذج الصوتية السحابية الفورية** — يمكن لـ Voxa توجيه المحادثة الصوتية الفورية عبر Google Gemini Live أو OpenAI Realtime. يتطلب هذا المسار اتصالاً بالإنترنت وحق وصول/بيانات اعتماد API خاصة بالمستخدم لدى ذلك المزود؛ ويعمل النموذج الصوتي نفسه على خوادم ذلك المزود، وليس على جهاز المستخدم.',
          '**الخدمة الخلفية المحلية ذاتية الاستضافة** — يمكن لـ Voxa بدلاً من ذلك توجيه الاتصال إلى خدمة خلفية محلية يقوم المستخدم بتهيئتها وتشغيلها بنفسه، مما يبقي استدلال النموذج الصوتي على جهازه أو شبكته الخاصة بدلاً من إرسال الصوت إلى مزود سحابي. هذا هو المسار الذي يجعل Voxa يعمل كأداة ذكاء اصطناعي محلية، لكنه عمل إعداد اختياري يقوم به المستخدم بنفسه، وليس السلوك الافتراضي دون أي تهيئة.',
        ],
        callouts: [
          { type: 'note', text: 'ما يبقى محلياً بغض النظر عن الخلفية المختارة: إعداد التطبيق نفسه، وملاحظاتك (المحفوظة كملفات Markdown نصية بسيطة)، ومفاتيح API الخاصة بك — تُخزَّن على جهازك، وليس على خادم تشغّله Voxa. ما لا يبقى محلياً افتراضياً: النموذج الصوتي الفوري نفسه، ما لم تكن قد هيّأت مسار الخدمة الخلفية المحلية ذاتية الاستضافة.' },
        ],
        note: 'إذا كان الشرط هو إعداد يعمل دون اتصال بالإنترنت تماماً وبلا اعتماد على السحابة، تأكد من أن الخدمة الخلفية المحلية ذاتية الاستضافة مهيَّأة ويمكن الوصول إليها قبل الاعتماد على Voxa بلا اتصال بالإنترنت — فمسار الصوت الفوري السحابي (Gemini Live أو OpenAI Realtime) لن يعمل دون اتصال.',
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'Voxa على Windows وmacOS وLinux',
        columns: ['المنصة', 'ما يمكن توقعه'],
        rows: [
          {
            'المنصة': 'Windows',
            'ما يمكن توقعه': 'يعرض Voxa واجهته باستخدام WebView2، وهو محرك الويب المبني على Chromium الذي توزعه Microsoft مع إصدارات Windows الحديثة. يلزم وجود إصدار حديث من WebView2 حتى تظهر واجهة الكرة وواجهة الصوت بشكل صحيح.',
          },
          {
            'المنصة': 'macOS',
            'ما يمكن توقعه': 'يستخدم Voxa محرك WKWebView المدمج الخاص بشركة Apple لعرض واجهته. ولأن Tauri يعتمد على المحرك الذي يوفره نظام التشغيل بدلاً من تضمين محرك خاص به، فإن السلوك يتبع إصدار WKWebView المرفق بإصدار macOS المستخدم.',
          },
          {
            'المنصة': 'Linux',
            'ما يمكن توقعه': 'يستخدم Voxa على Linux محرك WebKitGTK 4.1 لعرض واجهته. وهذا إصدار محدد من WebKitGTK وليس "أي بناء WebKit" — تحقق قبل التثبيت من أن توزيعتك تحزم WebKitGTK 4.1 (أو إصداراً متوافقاً)، إذ قد لا تتطابق إصدارات الحزم الأقدم في بعض التوزيعات.',
          },
        ],
        note: 'نظراً لأن Tauri v2 يعرض الواجهة عبر محرك الويب الخاص بكل نظام تشغيل بدلاً من محرك متصفح مضمَّن، لا يمكن تحديد الإصدار الأدنى الدقيق لنظام التشغيل/المحرك في كل منصة كرقم ثابت دائم هنا — تحقق من متطلبات المنصة الحالية مباشرة على [askvoxa.dev](https://askvoxa.dev/) قبل التثبيت.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب Voxa؟',
        content: 'يعتمد الاختيار الصحيح على ما إذا كانت كرة صوتية مرئية باستمرار وملاحظات قائمة على Markdown تناسب الطريقة التي تريد بها التحدث مع مساعد، وما إذا كنت مستعداً لتهيئة خدمة خلفية محلية إذا كان الاستدلال المحلي الكامل مهماً بالنسبة لك.',
        subsections: [
          {
            title: 'استخدم Voxa إذا',
            list: [
              'كنت تريد مساعداً صوتياً يبقى مرئياً ككرة عائمة صغيرة بدلاً من نافذة كاملة أو تبويب متصفح يجب التبديل إليه',
              'كنت تريد حفظ ملاحظاتك كملفات Markdown نصية بسيطة يمكنك فتحها والبحث فيها وتعديلها خارج التطبيق، بدلاً من صيغة خاصة',
              'كنت مرتاحاً لاستخدام مزود صوتي سحابي فوري (Gemini Live أو OpenAI Realtime) بحق وصول API خاص بك، أو مستعداً لتهيئة خدمة خلفية محلية ذاتية الاستضافة إذا أردت أن يبقى الاستدلال على جهازك الخاص',
              'كنت تفضل تطبيقاً مفتوح المصدر برخصة MIT يمكنك فحص أو تعديل كوده المصدري، بدلاً من مساعد اشتراك مغلق المصدر',
            ],
          },
          {
            title: 'فكّر في أداة أخرى إذا',
            list: [
              'كنت تحتاج إلى مساعد صوتي محلي بالكامل وبلا أي تهيئة من الصندوق مباشرة — مسار Voxa الافتراضي مدعوم بالسحابة، ويتطلب التشغيل المحلي حصرياً تهيئة الخدمة الخلفية ذاتية الاستضافة بنفسك',
              'كنت تبحث عن تطبيق للهاتف المحمول وليس أداة لسطح المكتب — يستهدف Voxa سطح مكتب Windows وmacOS وLinux، وليس iOS أو Android',
              'كنت تحتاج إلى خط أنابيب صوتي مفتوح المصدر موثق بالكامل من طرف إلى طرف (تحويل الصوت إلى نص، نموذج لغوي، تحويل النص إلى صوت) مع تحديد كل مكوّن — راجع [بناء مساعد صوتي محلي على هاتفك](/ar/power-local-llm/voice-assistant-local-mobile-offline) أو [بناء مساعد صوتي محلي: دليل كامل](/ar/power-local-llm/build-local-voice-assistant-2026) لهذا النوع من خطوط الأنابيب المحددة بالكامل',
            ],
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'أخطاء شائعة عند تقييم Voxa',
        content: 'يأتي معظم اللبس حول Voxa من افتراض أنه يتصرف إما كتطبيق محلي بحت أو كتطبيق سحابي بحت، بينما هو مصمم كنظام هجين قابل للتهيئة بين الاثنين.',
        subsections: [
          {
            title: 'الخطأ 1: افتراض أن Voxa يعمل دون اتصال بالكامل افتراضياً',
            content: 'مسار Voxa الافتراضي الأقل مقاومة هو نموذج صوتي سحابي فوري (Gemini Live أو OpenAI Realtime)، وهو ما يحتاج إلى اتصال بالإنترنت وحق وصول API لدى ذلك المزود. التشغيل دون اتصال بالكامل ومحلياً ممكن، لكن فقط بعد تهيئة وتشغيل الخدمة الخلفية المحلية ذاتية الاستضافة بنفسك.',
          },
          {
            title: 'الخطأ 2: افتراض أن "مفتوح المصدر" تعني "بلا استدعاءات سحابية"',
            content: 'كون كود تطبيق Voxa نفسه مفتوح المصدر (رخصة MIT، Tauri v2) حقيقة منفصلة عن خلفية النموذج الصوتي التي تختار استخدامها. يمكن لكود تطبيق مفتوح المصدر أن يُهيَّأ لإرسال الصوت الفوري إلى مزود سحابي تابع لجهة خارجية — تحقق من مسار الخلفية المهيَّأ فعلياً، وليس من رخصة التطبيق فقط.',
          },
          {
            title: 'الخطأ 3: توقّع نفس ملاحظات Markdown تلقائياً على كل جهاز',
            content: 'تُحفظ الملاحظات كملفات Markdown نصية بسيطة على نظام الملفات المحلي للجهاز الذي يعمل عليه Voxa. ما لم تقم بإعداد مزامنة خاصة بك بشكل منفصل (مجلد سحابي، مستودع git، أو ما شابه)، فإن الملاحظات على جهاز واحد لن تكون متاحة تلقائياً على جهاز آخر.',
          },
          {
            title: 'الخطأ 4: التثبيت دون التحقق من متطلب محرك الويب الخاص بالمنصة',
            content: 'بما أن Voxa مبني باستخدام Tauri v2، تعتمد واجهته على محرك الويب الخاص بنظام التشغيل — WebView2 على Windows، وWKWebView على macOS، وWebKitGTK 4.1 على Linux — بدلاً من محرك متصفح مضمَّن. قد يمنع محرك قديم أو مفقود على نظامك عرض واجهة الكرة بشكل صحيح؛ تحقق من أن محرك منصتك محدَّث قبل افتراض أن مشكلة التثبيت هي خلل في Voxa.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'ما هو Voxa؟', a: 'Voxa مساعد صوتي مفتوح المصدر لسطح المكتب برخصة MIT، مبني باستخدام Tauri v2، ومتاح على [askvoxa.dev](https://askvoxa.dev/). يُقدَّم على شكل كرة عائمة بلا إطار تظل دائماً في المقدمة، تنقر عليها لبدء محادثة صوتية فورية، ويمكن أن يستخدم كخلفية نموذجاً صوتياً سحابياً فورياً أو خدمة خلفية محلية ذاتية الاستضافة.' },
          { q: 'هل Voxa مجاني؟', a: 'كود تطبيق Voxa نفسه مفتوح المصدر بموجب رخصة MIT. إذا استخدمت الخلفية الصوتية السحابية الفورية (Gemini Live أو OpenAI Realtime)، فإنك تخضع لتسعير وشروط API الخاصة بذلك المزود، بمعزل عن Voxa نفسه. تحقق من التسعير الحالي لـ Gemini Live أو OpenAI Realtime مباشرة لدى Google أو OpenAI.' },
          { q: 'هل يعمل Voxa دون اتصال بالإنترنت بالكامل؟', a: 'فقط إذا هيّأت مسار الخدمة الخلفية المحلية ذاتية الاستضافة. افتراضياً، تتم تهيئة Voxa لاستخدام مزود صوتي سحابي فوري (Gemini Live أو OpenAI Realtime)، وهو ما يتطلب اتصالاً بالإنترنت. الإعداد الذي يعمل دون اتصال بالكامل ممكن، لكنه يتطلب تشغيل خدمتك الخلفية المحلية الخاصة وتوجيه Voxa إليها.' },
          { q: 'ما هي المنصات التي يدعمها Voxa؟', a: 'Windows (باستخدام محرك WebView2)، وmacOS (باستخدام WKWebView)، وLinux (باستخدام WebKitGTK 4.1). Voxa تطبيق سطح مكتب مبني باستخدام Tauri v2، وليس تطبيقاً للهاتف المحمول على iOS أو Android.' },
          { q: 'أين يحفظ Voxa ملاحظاتي؟', a: 'كملفات Markdown نصية بسيطة على نظام الملفات المحلي، وليس في قاعدة بيانات خاصة أو صيغة سحابية حصرية. هذا يعني أن الملاحظات تظل قابلة للقراءة والتعديل في أي محرر نصوص بغض النظر عن تثبيت Voxa أو تشغيله.' },
          { q: 'هل يرسل Voxa مفاتيح API أو بياناتي إلى أي مكان؟', a: 'يُخزَّن الإعداد والبيانات ومفاتيح API على جهازك الخاص. إذا استخدمت الخلفية الصوتية السحابية الفورية، تُرسَل بيانات الصوت والمحادثة إلى المزود الذي هيّأته (Google Gemini Live أو OpenAI Realtime)، بموجب شروط معالجة البيانات الخاصة بذلك المزود — وليس إلى خادم منفصل تشغّله Voxa.' },
          { q: 'ما الفرق بين الخلفية السحابية وخلفية الخدمة المحلية في Voxa؟', a: 'الخلفية السحابية (Gemini Live أو OpenAI Realtime) توجّه النموذج الصوتي الفوري عبر خوادم ذلك المزود وتتطلب اتصالاً بالإنترنت وحق وصول API لدى ذلك المزود. أما خلفية الخدمة المحلية ذاتية الاستضافة فتبقي استدلال النموذج الصوتي على أجهزة يتحكم فيها المستخدم، لكن عليه إعداد وتشغيل تلك الخدمة بنفسه — فهي ليست مهيَّأة مسبقاً.' },
          { q: 'هل Voxa مفتوح المصدر؟', a: 'نعم. Voxa مبني باستخدام Tauri v2 ومنشور بموجب رخصة MIT، وهي رخصة متساهلة تسمح بفحص الكود المصدري وتعديله وإعادة توزيعه دون قيود على الاستخدام التجاري.' },
          { q: 'هل يمكنني استخدام Voxa دون اتصال بالإنترنت؟', a: 'فقط إذا كنت قد هيّأت وشغّلت الخدمة الخلفية المحلية ذاتية الاستضافة كخلفية للنموذج الصوتي. يحتاج مسار الصوت الفوري السحابي (Gemini Live أو OpenAI Realtime) إلى اتصال حتى يعمل.' },
          { q: 'هل يحتاج Voxa إلى محرك متصفح معين على نظامي؟', a: 'نعم، بشكل غير مباشر — بما أنه مبني باستخدام Tauri v2، يعرض Voxa واجهته عبر محرك الويب الخاص بنظام التشغيل: WebView2 على Windows، وWKWebView على macOS، وWebKitGTK 4.1 على Linux. تأكد من وجود المحرك المناسب وأنه محدَّث على نظامك قبل التثبيت.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        links: [
          { url: 'https://[askvoxa.dev](https://askvoxa.dev/)/', title: 'الموقع الرسمي لـ Voxa', description: 'نظرة عامة على المنتج، وتوافر المنصات، ومعلومات الإعداد الخاصة بـ Voxa، وهي مصدر الحقائق الواردة في هذه المراجعة.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[بناء مساعد صوتي محلي: دليل كامل (2026)](/ar/power-local-llm/build-local-voice-assistant-2026) — خط أنابيب صوتي مفتوح المصدر محدد بالكامل (تحويل الصوت إلى نص، نموذج لغوي محلي، تحويل النص إلى صوت) للقراء الراغبين في توثيق كل مكوّن.',
          '[بناء مساعد صوتي محلي على هاتفك: Whisper + نموذج لغوي محلي (بلا سحابة)](/ar/power-local-llm/voice-assistant-local-mobile-offline) — النظير الموجّه للهواتف المحمولة، مع بيانات زمن استجابة وبطارية مقاسة فعلياً.',
          '[مقارنة خيارات Whisper المحلية لتحويل الصوت إلى نص 2026](/ar/power-local-llm/local-whisper-stt-comparison-2026) — للقراء الذين يقارنون خيارات تحويل الصوت إلى نص المحلية بدلاً من تطبيق هجين سحابي/محلي مثل Voxa.',
          '[تحويل النص إلى صوت واستنساخ الصوت محلياً: Piper وCoqui وXTTS](/ar/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — خيارات تحويل نص إلى صوت محلية لخط أنابيب صوتي يعمل دون اتصال بالكامل.',
          '[Local LLM Software Directory 2026](/ar/power-local-llm/local-llm-software-directory) — الدليل الكامل لأدوات وتطبيقات الذكاء الاصطناعي المحلي الذي تنتمي إليه هذه المراجعة.',
        ],
      },
    },
  },
  ko: {
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/voxa-review-hero-ko.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-04',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    educationalLevel: 'Intermediate',
    audience: '브라우저 기반 클라우드 어시스턴트보다 선택적 로컬 추론을 지원하는 플로팅 음성 오브 어시스턴트가 자신의 작업 흐름에 더 적합한지 판단하려는 프라이버시 중시 데스크톱 사용자 및 셀프 호스팅 이용자',
    primaryTerm: 'Voxa',
    title: 'Voxa 리뷰 2026: 데스크톱용 프라이빗 음성 어시스턴트 오브',
    seoTitle: 'Voxa 리뷰 2026: 데스크톱용 프라이빗 음성 어시스턴트 오브',
    intro: '[askvoxa.dev](https://askvoxa.dev/)에서 제공되는 Voxa는 테두리 없이 항상 최상단에 표시되는 오브 형태로 나타나는 오픈소스 데스크톱 음성 어시스턴트입니다. 탭하면 실시간 음성 대화가 시작됩니다. Tauri v2로 구축되었으며 MIT 라이선스로 배포되고, 로컬 메모를 검색하고 저장할 때 순수 Markdown 파일로 사용자의 기기에 저장합니다. Voxa는 완전히 온디바이스로 작동하는 것이 아니라 하이브리드 방식입니다. 클라우드 실시간 음성 모델(Google Gemini Live 또는 OpenAI Realtime)을 사용하거나, 사용자가 직접 설정하는 셀프 호스팅 로컬 데몬을 통해 대화를 처리할 수 있습니다.',
    metaDescription: 'Voxa 리뷰: Windows, macOS, Linux를 지원하는 MIT 라이선스 오픈소스 음성 오브 어시스턴트. 하이브리드 클라우드/로컬 데몬 구성, Markdown 메모 저장 방식, 적합한 사용자를 다룹니다.',
    readTime: '9분 읽기',
    targetKeywords: [
      'Voxa 리뷰',
      'Voxa 음성 어시스턴트',
      'Voxa AI 오브',
      'Voxa 로컬 음성 어시스턴트',
      '[askvoxa.dev](https://askvoxa.dev/)',
    ],
    leadAnswerBlock: '**Voxa는 항상 최상단에 표시되는 플로팅 오브 형태로 작동하는 MIT 라이선스 오픈소스 데스크톱 음성 어시스턴트(Tauri v2 기반)입니다. 탭하면 실시간 음성 대화가 시작됩니다.** 완전히 로컬로만 작동하지는 않습니다. 클라우드 실시간 음성 모델(Gemini Live 또는 OpenAI Realtime)이나 사용자가 직접 설정하는 셀프 호스팅 로컬 데몬을 사용할 수 있으며, 메모는 순수 Markdown 파일로 사용자 자신의 기기에 저장됩니다.',
    quickAnswerTop: {
      ko: {
        question: 'Voxa는 완전히 로컬에서 작동하며 오프라인으로 사용할 수 있는 음성 어시스턴트입니까?',
        answer: '아닙니다. Voxa는 하이브리드 방식이며 완전히 온디바이스로만 작동하지는 않습니다. 기본적으로 실시간 음성 대화를 클라우드 제공업체(Google Gemini Live 또는 OpenAI Realtime)를 통해 처리하도록 설계되어 있으며, 이는 인터넷 연결과 해당 제공업체에 대한 사용자 자신의 API 접근 권한을 필요로 합니다. 완전한 로컬 구성도 가능하지만, 사용자가 직접 셀프 호스팅 로컬 데몬을 설정하고 실행해야 하며, 이는 추가 설정 없이 작동하는 기본 동작이 아닙니다.',
        bullets: [
          '오픈소스, MIT 라이선스, Tauri v2로 구축 — [askvoxa.dev](https://askvoxa.dev/)에서 확인됨',
          '두 가지 백엔드 경로: 클라우드 실시간 음성 모델(Gemini Live, OpenAI Realtime) 또는 셀프 호스팅 로컬 데몬',
          '메모는 독점 형식이 아닌 순수 Markdown 파일로 사용자 기기에 저장됨',
          '설정, 데이터, API 키는 사용자 기기에 유지됨 — Voxa 자체가 운영하는 독점 백엔드 서버는 없음',
          'UI는 브라우저 탭이나 채팅 창이 아닌 테두리 없이 항상 최상단에 표시되는 오브',
          '지원 플랫폼: Windows(WebView2), macOS(WKWebView), Linux(WebKitGTK 4.1)',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: 'Voxa란 무엇인가', anchor: 'what-is-voxa' },
      { label: '핵심 기능', anchor: 'core-features' },
      { label: 'Voxa는 실제로 로컬입니까', anchor: 'is-voxa-local' },
      { label: 'Windows, macOS, Linux에서의 Voxa', anchor: 'platforms' },
      { label: 'Voxa를 사용해야 하는 사람', anchor: 'who-should-use' },
      { label: 'Voxa를 사용하지 말아야 하는 사람', anchor: 'who-should-not-use' },
      { label: '흔한 오해', anchor: 'common-mistakes' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용 — 2026년의 Voxa',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Voxa는 Tauri v2로 구축된 MIT 라이선스 오픈소스 데스크톱 음성 어시스턴트로, 항상 최상단에 표시되는 플로팅 오브로 나타나며, 클라우드 제공업체(Gemini Live 또는 OpenAI Realtime) 또는 셀프 호스팅 로컬 데몬을 통한 실시간 음성 대화를 지원하고, 메모를 사용자 기기에 순수 Markdown 파일로 저장합니다.' },
          { type: 'plain-terms', text: '브라우저 탭이나 애플리케이션 창을 여는 대신, 다른 창 위에 떠 있는 작은 원형 UI를 사용합니다. 탭해서 말을 걸면, 클라우드 음성 AI 서비스를 사용하거나 직접 설정한 경우 자신의 컴퓨터에서 실행되는 음성 모델을 사용할 수 있으며, 메모는 어떤 편집기에서도 열 수 있는 일반 텍스트 파일로 기록됩니다.' },
        ],
        items: [
          'Tauri v2로 구축되었고 MIT 라이선스로 배포됨 — 앱 자체를 실행하는 데 독점 백엔드 소프트웨어가 필요하지 않음',
          'UI: 일반적인 창이나 브라우저 탭이 아닌, 테두리 없이 항상 최상단에 표시되는 오브',
          '하이브리드 모델 백엔드: 클라우드 실시간 음성(Google Gemini Live 또는 OpenAI Realtime) 또는 사용자가 직접 설정하는 셀프 호스팅 로컬 데몬',
          '메모와 검색 결과는 독점 데이터베이스가 아닌 순수 Markdown 파일로 로컬 파일 시스템에 저장됨',
          '설정, 데이터, API 키는 사용자 자신의 기기에 저장됨',
          'Windows(WebView2), macOS(WKWebView), Linux(WebKitGTK 4.1)에서 사용 가능',
          '공식 사이트: [askvoxa.dev](https://askvoxa.dev/)',
        ],
        callouts: [
          { type: 'note', text: 'Voxa는 완전히 로컬 전용 도구가 아닙니다. 클라우드 백엔드(Gemini Live 또는 OpenAI Realtime)는 더 간단한 경로이지만 해당 제공업체의 API와 인터넷 연결에 의존합니다. 완전한 로컬 구성을 하려면 Voxa를 사용자가 직접 셀프 호스팅하는 데몬으로 지정해야 합니다. 클라우드나 설정이 필요 없는 로컬 앱이라고 가정하기 전에 아래 "Voxa는 실제로 로컬입니까"를 참고하십시오.' },
        ],
      },
      overview: {
        id: 'what-is-voxa',
        title: 'Voxa란 무엇인가',
        content: 'Voxa는 [askvoxa.dev](https://askvoxa.dev/)에서 공개된 오픈소스 데스크톱 음성 어시스턴트로, 네이티브 셸에 웹 기반 UI를 감싼 경량 크로스 플랫폼 데스크톱 앱을 만들기 위한 프레임워크인 Tauri v2로 구축되었습니다. Voxa는 MIT 라이선스로 배포됩니다.',
        items: [
          '핵심 상호작용 모델: 다른 창 위에 떠 있는, 테두리 없이 항상 최상단에 표시되는 오브 — 별도의 채팅 창이나 브라우저 탭을 여는 대신 탭하면 실시간 음성 대화가 시작됨',
          '모델 백엔드는 단일 제공업체에 고정되지 않고 설정 가능함: 클라우드 실시간 음성 모델(Google Gemini Live 또는 OpenAI Realtime) 또는 셀프 호스팅 로컬 데몬',
          'Tauri v2로 구축되어, Electron처럼 별도의 브라우저 엔진을 번들로 포함하는 대신 운영체제 자체의 웹 엔진(Windows에서는 WebView2, macOS에서는 WKWebView, Linux에서는 WebKitGTK 4.1)을 사용해 UI를 렌더링함',
          '어시스턴트가 검색하거나 저장을 요청받은 메모와 정보는 순수 Markdown 파일로 로컬 파일 시스템에 기록됨',
          'Voxa 자체가 운영하는 독점 백엔드 서버는 없음 — 앱 자체의 설정, 데이터, API 키는 사용자 기기에 유지되며, 클라우드 호출은 Voxa가 운영하는 서버가 아니라 사용자가 설정한 모델 제공업체(Google 또는 OpenAI)로 직접 전송됨',
        ],
        note: 'Voxa는 활발히 개발 중입니다. 특정 기능에 의존하는 결정을 내리기 전에 현재 기능 범위, 지원되는 모델 제공업체, 플랫폼 요구사항을 [askvoxa.dev](https://askvoxa.dev/)에서 직접 확인하십시오.',
      },
      coreFeatures: {
        id: 'core-features',
        title: 'Voxa의 핵심 기능은 무엇입니까',
        content: '**Voxa를 특징짓는 세 가지 요소는 항상 최상단에 표시되는 음성 오브, Markdown 기반 메모 저장, 그리고 Tauri v2 기반의 오픈소스 토대입니다.** 각 요소는 브라우저 기반 또는 구독형 음성 어시스턴트와 비교했을 때 이 앱이 어떻게 작동하는지를 결정합니다.',
        subsections: [
          {
            title: '플로팅 음성 오브',
            content: 'Voxa의 인터페이스는 완전한 애플리케이션 창이나 브라우저 탭이 아니라 테두리 없이 항상 최상단에 표시되는 오브입니다. 다른 창 위에 계속 표시되므로, 하던 작업의 포커스를 옮기지 않고도 한 번의 탭으로 실시간 음성 대화를 시작할 수 있습니다.',
          },
          {
            title: 'Markdown 기반 메모와 검색',
            content: 'Voxa가 정보를 검색하거나 무언가를 저장하라는 요청을 받으면, 그 결과는 독점 데이터베이스나 클라우드 전용 메모 저장소에 갇히지 않고 로컬 파일 시스템에 순수 Markdown 파일로 기록됩니다. Markdown은 일반 텍스트 형식이므로, Voxa 실행 여부와 관계없이 이 파일들은 어떤 텍스트 편집기나 메모 앱에서도 읽고 편집할 수 있습니다.',
          },
          {
            title: '오픈소스: Tauri v2와 MIT 라이선스',
            content: 'Voxa는 Tauri v2로 구축되었으며, 소스 코드를 검사, 수정, 재배포하는 데 제약이 없는 관대한 오픈소스 라이선스인 MIT 라이선스로 배포됩니다. Tauri 앱은 UI에 별도의 브라우저 엔진을 번들로 포함하는 대신 운영체제 자체의 웹 렌더링 엔진을 사용하므로, 플랫폼 요구사항은 각 플랫폼의 특정 OS 웹 엔진 버전에 연결됩니다(아래 플랫폼 섹션 참조).',
          },
        ],
      },
      isVoxaLocal: {
        id: 'is-voxa-local',
        title: 'Voxa는 실제로 로컬입니까',
        content: '**Voxa는 완전히 온디바이스 전용 앱이 아니라 하이브리드 앱입니다. "로컬 AI" 도구로 선택하기 전에 이 차이를 명확히 알아야 합니다.** 실시간 음성 모델에 대해 두 가지 별개의 백엔드 경로를 지원하며, 그중 하나만이 추론을 사용자 자신의 하드웨어에 유지합니다.',
        items: [
          '**클라우드 실시간 음성 모델** — Voxa는 Google Gemini Live 또는 OpenAI Realtime을 통해 실시간 음성 대화를 처리할 수 있습니다. 이 경로는 인터넷 연결과 해당 제공업체에 대한 사용자 자신의 API 접근 권한/자격 증명이 필요합니다. 음성 모델 자체는 사용자 기기가 아니라 해당 제공업체의 서버에서 실행됩니다.',
          '**셀프 호스팅 로컬 데몬** — Voxa는 대신 사용자가 직접 설정하고 실행하는 로컬 데몬을 가리키도록 할 수 있으며, 이를 통해 오디오를 클라우드 제공업체로 보내지 않고 음성 모델 추론을 자신의 기기나 네트워크에 유지합니다. 이것이 Voxa를 로컬 AI 도구로 작동하게 만드는 경로이지만, 이는 기본 동작이 아니라 사용자가 직접 수행해야 하는 선택적 설정 작업입니다.',
        ],
        callouts: [
          { type: 'note', text: '어떤 백엔드를 선택하든 로컬에 유지되는 것: 앱 자체의 설정, 메모(순수 Markdown 파일로 저장), API 키 — 이들은 Voxa가 운영하는 서버가 아니라 사용자 기기에 저장됩니다. 기본적으로 로컬에 유지되지 않는 것: 셀프 호스팅 로컬 데몬 경로를 설정하지 않은 경우의 실시간 음성 모델 자체입니다.' },
        ],
        note: '클라우드 의존성이 전혀 없는 완전한 오프라인 구성이 요구 사항이라면, 인터넷 연결 없이 Voxa에 의존하기 전에 셀프 호스팅 로컬 데몬이 설정되어 있고 접근 가능한지 확인하십시오. 클라우드 실시간 음성 경로(Gemini Live 또는 OpenAI Realtime)는 오프라인에서 작동하지 않습니다.',
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'Windows, macOS, Linux에서의 Voxa',
        columns: ['플랫폼', '예상되는 동작'],
        rows: [
          {
            '플랫폼': 'Windows',
            '예상되는 동작': 'Voxa는 Microsoft가 최신 Windows에 기본 제공하는 Chromium 기반 웹 엔진인 WebView2를 사용해 UI를 렌더링합니다. 오브 인터페이스와 음성 UI가 올바르게 표시되려면 최신 WebView2 런타임이 필요합니다.',
          },
          {
            '플랫폼': 'macOS',
            '예상되는 동작': 'Voxa는 Apple의 내장 웹 렌더링 엔진인 WKWebView를 UI에 사용합니다. Tauri는 자체 엔진을 번들로 포함하는 대신 OS가 제공하는 엔진에 의존하므로, 동작은 사용 중인 macOS 버전에 포함된 WKWebView 버전을 따릅니다.',
          },
          {
            '플랫폼': 'Linux',
            '예상되는 동작': 'Voxa는 Linux에서 UI에 WebKitGTK 4.1을 사용합니다. 이는 "아무 WebKit 빌드"가 아니라 특정 WebKitGTK 버전이므로, 설치 전에 사용 중인 배포판이 WebKitGTK 4.1(또는 호환 버전)을 패키징하는지 확인하십시오. 오래된 배포판 패키지 버전은 일치하지 않을 수 있습니다.',
          },
        ],
        note: 'Tauri v2는 번들된 브라우저 엔진이 아니라 각 운영체제 자체의 웹 엔진을 통해 UI를 렌더링하므로, 각 플랫폼의 정확한 최소 OS/엔진 버전을 여기에 고정된 숫자로 명시할 수 없습니다. 설치 전에 현재 플랫폼 요구사항을 [askvoxa.dev](https://askvoxa.dev/)에서 직접 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Voxa를 사용해야 하는 사람은 누구입니까',
        content: '올바른 선택은 항상 표시되는 음성 오브와 Markdown 기반 메모가 어시스턴트와 대화하고 싶은 방식에 맞는지, 그리고 완전한 로컬 추론이 중요한 경우 로컬 데몬을 직접 설정할 의향이 있는지에 따라 달라집니다.',
        subsections: [
          {
            title: '다음의 경우 Voxa를 사용하십시오',
            list: [
              '전환해야 하는 전체 창이나 브라우저 탭이 아니라 작은 플로팅 오브로 계속 표시되는 음성 어시스턴트를 원하는 경우',
              '메모를 독점 형식이 아니라 앱 밖에서도 열고 검색하고 편집할 수 있는 순수 Markdown 파일로 저장하고 싶은 경우',
              '자신의 API 접근 권한으로 클라우드 실시간 음성 제공업체(Gemini Live 또는 OpenAI Realtime)를 사용하는 것이 괜찮거나, 추론을 자신의 하드웨어에 유지하고 싶다면 셀프 호스팅 로컬 데몬을 설정할 의향이 있는 경우',
              '폐쇄형 소스 구독 어시스턴트가 아니라 소스 코드를 검사하거나 수정할 수 있는 오픈소스, MIT 라이선스 앱을 원하는 경우',
            ],
          },
          {
            title: '다음의 경우 다른 도구를 고려하십시오',
            list: [
              '완전히 로컬이면서 설정이 전혀 필요 없는 음성 어시스턴트가 처음부터 필요한 경우 — Voxa의 기본 경로는 클라우드에 의존하며, 로컬 전용 운영을 하려면 셀프 호스팅 데몬을 직접 설정해야 함',
              '데스크톱 도구가 아니라 모바일 앱을 찾고 있는 경우 — Voxa는 iOS나 Android가 아니라 Windows, macOS, Linux 데스크톱을 대상으로 함',
              '모든 구성 요소가 명시된, 완전히 문서화된 종단 간 오픈소스 음성 파이프라인(음성 인식, LLM, 음성 합성)이 필요한 경우 — 이런 완전히 명시된 파이프라인에 대해서는 [휴대폰에서 로컬 음성 어시스턴트 구축하기](/ko/power-local-llm/voice-assistant-local-mobile-offline) 또는 [로컬 음성 어시스턴트 구축: 완전 가이드](/ko/power-local-llm/build-local-voice-assistant-2026)를 참고',
            ],
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Voxa 평가 시 흔한 오해',
        content: 'Voxa에 대한 대부분의 혼란은 이 앱이 실제로는 둘의 설정 가능한 하이브리드로 설계되었음에도, 순전히 로컬이거나 순전히 클라우드 앱처럼 동작할 것이라고 가정하는 데서 비롯됩니다.',
        subsections: [
          {
            title: '오해 1: Voxa가 기본적으로 완전히 오프라인으로 작동한다고 가정',
            content: 'Voxa의 가장 마찰이 적은 기본 경로는 인터넷 연결과 해당 제공업체의 API 접근 권한이 필요한 클라우드 실시간 음성 모델(Gemini Live 또는 OpenAI Realtime)입니다. 완전히 로컬로 오프라인 작동하는 것은 가능하지만, 셀프 호스팅 로컬 데몬을 직접 설정하고 실행한 이후에만 가능합니다.',
          },
          {
            title: '오해 2: "오픈소스"가 "클라우드 호출 없음"을 의미한다고 가정',
            content: 'Voxa 자체 애플리케이션 코드가 오픈소스(MIT 라이선스, Tauri v2)라는 사실은 어떤 음성 모델 백엔드를 사용할지와는 별개의 문제입니다. 오픈소스 앱 코드라도 실시간 오디오를 제3자 클라우드 제공업체로 전송하도록 설정될 수 있습니다. 앱의 라이선스만이 아니라 실제로 어떤 백엔드 경로가 설정되어 있는지 확인하십시오.',
          },
          {
            title: '오해 3: 모든 기기에서 동일한 Markdown 메모가 자동으로 동기화된다고 기대',
            content: '메모는 Voxa가 실행 중인 기기의 로컬 파일 시스템에 순수 Markdown 파일로 저장됩니다. 클라우드 드라이브 폴더나 git 저장소 등 별도로 자체 동기화를 설정하지 않는 한, 한 기기의 메모가 다른 기기에서 자동으로 사용 가능한 것은 아닙니다.',
          },
          {
            title: '오해 4: 플랫폼 웹 엔진 요구사항을 확인하지 않고 설치',
            content: 'Voxa는 Tauri v2로 구축되었기 때문에, UI는 번들된 브라우저 엔진이 아니라 운영체제 자체의 웹 엔진(Windows에서는 WebView2, macOS에서는 WKWebView, Linux에서는 WebKitGTK 4.1)에 의존합니다. 시스템에 엔진이 오래되었거나 없으면 오브 UI가 올바르게 렌더링되지 않을 수 있습니다. 설치 문제를 Voxa의 버그로 판단하기 전에 사용 중인 플랫폼의 엔진이 최신 상태인지 확인하십시오.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'Voxa란 무엇입니까?', a: 'Voxa는 Tauri v2로 구축된 MIT 라이선스 오픈소스 데스크톱 음성 어시스턴트로, [askvoxa.dev](https://askvoxa.dev/)에서 이용할 수 있습니다. 탭하면 실시간 음성 대화가 시작되는, 테두리 없이 항상 최상단에 표시되는 오브 형태로 제공되며, 백엔드로 클라우드 실시간 음성 모델이나 셀프 호스팅 로컬 데몬을 사용할 수 있습니다.' },
          { q: 'Voxa는 무료입니까?', a: 'Voxa 자체 애플리케이션 코드는 MIT 라이선스로 오픈소스화되어 있습니다. 클라우드 실시간 음성 백엔드(Gemini Live 또는 OpenAI Realtime)를 사용하는 경우, Voxa 자체와는 별개로 해당 제공업체 고유의 가격 정책과 API 약관이 적용됩니다. Gemini Live 또는 OpenAI Realtime의 현재 가격은 Google 또는 OpenAI에 직접 확인하십시오.' },
          { q: 'Voxa는 완전히 오프라인으로 작동합니까?', a: '셀프 호스팅 로컬 데몬 경로를 설정한 경우에만 가능합니다. 기본적으로 Voxa는 인터넷 연결이 필요한 클라우드 실시간 음성 제공업체(Gemini Live 또는 OpenAI Realtime)를 사용하도록 설정되어 있습니다. 완전히 오프라인 구성도 가능하지만, 자신의 로컬 데몬을 실행하고 Voxa를 그쪽으로 지정해야 합니다.' },
          { q: 'Voxa는 어떤 플랫폼을 지원합니까?', a: 'WebView2 엔진을 사용하는 Windows, WKWebView를 사용하는 macOS, WebKitGTK 4.1을 사용하는 Linux입니다. Voxa는 Tauri v2로 구축된 데스크톱 앱이며, iOS나 Android용 모바일 앱이 아닙니다.' },
          { q: 'Voxa는 제 메모를 어디에 저장합니까?', a: '독점 데이터베이스나 클라우드 전용 형식이 아니라 로컬 파일 시스템에 순수 Markdown 파일로 저장합니다. 이는 Voxa가 설치되어 있는지 실행 중인지와 관계없이 메모가 어떤 텍스트 편집기에서도 읽고 편집할 수 있는 상태로 유지됨을 의미합니다.' },
          { q: 'Voxa는 제 API 키나 데이터를 어딘가로 전송합니까?', a: '설정, 데이터, API 키는 사용자 자신의 기기에 저장됩니다. 클라우드 실시간 음성 백엔드를 사용하는 경우, 오디오와 대화 데이터는 Voxa가 별도로 운영하는 서버가 아니라 사용자가 설정한 제공업체(Google Gemini Live 또는 OpenAI Realtime)로 전송되며, 해당 제공업체 자체의 데이터 처리 약관을 따릅니다.' },
          { q: 'Voxa의 클라우드 백엔드와 로컬 데몬 백엔드의 차이는 무엇입니까?', a: '클라우드 백엔드(Gemini Live 또는 OpenAI Realtime)는 해당 제공업체의 서버를 통해 실시간 음성 모델을 처리하며, 인터넷 연결과 해당 제공업체에 대한 API 접근 권한이 필요합니다. 셀프 호스팅 로컬 데몬 백엔드는 음성 모델 추론을 사용자가 제어하는 하드웨어에 유지하지만, 사용자가 직접 해당 데몬을 설정하고 실행해야 하며 사전 설정되어 있지 않습니다.' },
          { q: 'Voxa는 오픈소스입니까?', a: '예. Voxa는 Tauri v2로 구축되었으며, 상업적 이용에 제한 없이 소스 코드를 검사, 수정, 재배포할 수 있는 관대한 라이선스인 MIT 라이선스로 배포됩니다.' },
          { q: '인터넷 연결 없이 Voxa를 사용할 수 있습니까?', a: '셀프 호스팅 로컬 데몬을 음성 모델 백엔드로 설정하고 실행 중인 경우에만 가능합니다. 클라우드 실시간 음성 경로(Gemini Live 또는 OpenAI Realtime)는 작동하려면 연결이 필요합니다.' },
          { q: 'Voxa는 제 시스템에 특정 브라우저 엔진을 요구합니까?', a: '예, 간접적으로 그렇습니다. Tauri v2로 구축되었기 때문에 Voxa는 운영체제 자체의 웹 엔진을 통해 UI를 렌더링합니다: Windows에서는 WebView2, macOS에서는 WKWebView, Linux에서는 WebKitGTK 4.1입니다. 설치 전에 해당 엔진이 시스템에 존재하고 최신 상태인지 확인하십시오.' },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        links: [
          { url: 'https://[askvoxa.dev](https://askvoxa.dev/)/', title: 'Voxa 공식 사이트', description: '이 리뷰에 담긴 사실의 출처인 Voxa의 제품 개요, 플랫폼 지원 현황, 설정 정보.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[로컬 음성 어시스턴트 구축: 완전 가이드(2026년)](/ko/power-local-llm/build-local-voice-assistant-2026) — 모든 구성 요소가 문서화되기를 원하는 독자를 위한, 완전히 명시된 오픈소스 음성 파이프라인(음성 인식, 로컬 LLM, 음성 합성).',
          '[휴대폰에서 로컬 음성 어시스턴트 구축하기: Whisper + 로컬 LLM(클라우드 불필요)](/ko/power-local-llm/voice-assistant-local-mobile-offline) — 실측 지연 시간과 배터리 데이터를 포함한 모바일 중심의 대응편.',
          '[로컬 Whisper STT 비교 2026](/ko/power-local-llm/local-whisper-stt-comparison-2026) — Voxa와 같은 클라우드/로컬 하이브리드 앱이 아니라 로컬 음성 인식 옵션을 비교하려는 독자를 위한 글.',
          '[로컬 TTS 및 음성 클로닝: Piper, Coqui, XTTS](/ko/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — 완전히 오프라인인 음성 파이프라인을 위한 로컬 텍스트 음성 변환 옵션.',
          '[Local LLM Software Directory 2026](/ko/power-local-llm/local-llm-software-directory) — 이 리뷰가 속한 로컬 AI 도구 및 앱의 전체 카탈로그.',
        ],
      },
    },
  },
}
