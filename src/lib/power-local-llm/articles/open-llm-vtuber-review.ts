// Open-LLM-VTuber Review: free, open-source, self-hosted voice chat companion with a Live2D avatar (Windows, macOS, Linux)
// Slug: open-llm-vtuber-review
// Companion to: sillytavern-vs-agnai-vs-risuai-roleplay, sillytavern-review, risuai-review, agnai-review, backyard-ai-review-local-roleplay-2026
// Sources: open-llm-vtuber.github.io (home, /en/docs/quick-start), github.com/Open-LLM-VTuber/Open-LLM-VTuber (README, MIT LICENSE, Live2D notice, commits, Releases v1.2.1 published
// 2025-08-26), github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web Releases (v1.2.1, 2025-08-21), all checked 2026-10-24 — no hands-on testing. No price: free; no storefront prices apply.
// Last upstream update recorded as 2026-02-11 (last functional commit); the newer 2026-05-15 commit only edited the README. Stale warning ON.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Creative & Roleplay',
    heroImage: '/images/open-llm-vtuber-review-hero-en.webp',
    title: 'Open-LLM-VTuber Review: Self-Hosted Voice Chat with a Live2D Avatar',
    seoTitle: 'Open-LLM-VTuber Review: Voice AI Companion with Live2D',
    intro: 'Open-LLM-VTuber is a free, open-source project that lets you talk to a language model by voice while a Live2D character answers on screen. You run it yourself on Windows, macOS or Linux and pick the speech recognition, language model and voice components. This review is based on the project website, the GitHub repository and its release pages, checked on 24 October 2026; PromptQuorum has not tested the software hands-on.',
    metaDescription: 'Open-LLM-VTuber review: free, MIT-licensed voice chat with a Live2D avatar you host yourself. Setup effort, local or cloud parts and an update warning.',
    twitterDescription: 'Open-LLM-VTuber review: self-hosted voice companion with a Live2D avatar. What the sources confirm about setup, offline use and maintenance, and what they do not.',
    audience: 'Tinkerers, streamers and roleplay fans who want a voice-first AI companion with an animated avatar under their own control, and need to know the setup effort, what stays local and how actively the project is maintained.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Open-LLM-VTuber review',
    targetKeywords: [
      'open-llm-vtuber review',
      'open-llm-vtuber',
      'live2d ai companion',
      'self-hosted voice chat ai',
      'local ai vtuber',
      'ai companion desktop pet',
      'open-llm-vtuber.github.io',
    ],
    current_models_mentioned: [
      'Ollama',
      'sherpa-onnx',
      'Faster-Whisper',
    ],
    current_hardware_mentioned: [
      'Apple silicon',
      'Nvidia GPU',
    ],
    leadAnswerBlock: '**Open-LLM-VTuber (version 1.2.1) is a free, open-source voice chat companion with a Live2D avatar that you install and run yourself on Windows, macOS or Linux.** According to the project it can run fully offline when every component is local, but it needs a terminal-based setup and the repository has had no functional change since 11 February 2026.',
    quickAnswerTop: {
      en: {
        question: 'Does Open-LLM-VTuber really run offline?',
        answer: 'Per the project, yes, if you choose local components for speech recognition, the language model and the voice. The quick-start example, however, pairs Ollama and sherpa-onnx with Edge TTS for the voice, and the guide lists a network connection as a requirement for it.',
        bullets: [
          'You can interrupt the AI by voice without headphones; the project says it will not hear its own voice.',
          'Vision input from the camera, screen recordings and screenshots is supported.',
          'The desktop client has a transparent pet mode that floats the avatar over other windows.',
          'External tools can be called through the MCP protocol.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Quick Answer',
        anchor: 'quick-answer',
      },
      {
        label: 'What Is Open-LLM-VTuber?',
        anchor: 'what-is-open-llm-vtuber',
      },
      {
        label: 'Get It',
        anchor: 'get-it',
      },
      {
        label: 'Requirements',
        anchor: 'requirements',
      },
      {
        label: 'Features Confirmed by the Sources',
        anchor: 'key-features',
      },
      {
        label: 'Local or Cloud: Data Flow',
        anchor: 'privacy',
      },
      {
        label: 'Who Should Use It',
        anchor: 'who-should-use',
      },
      {
        label: 'What We Could Not Verify',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Competitors and Alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Frequently Asked Questions',
        anchor: 'faq',
      },
      {
        label: 'Verdict',
        anchor: 'verdict',
      },
      {
        label: 'Sources',
        anchor: 'sources',
      },
      {
        label: 'Related Reading',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Open-LLM-VTuber is a self-hosted program that connects a speech recognizer, a language model and a text-to-speech voice to an animated Live2D character, so you can hold a spoken conversation with it.',
          },
          {
            type: 'plain-terms',
            text: 'You start a small server on your own computer, open its page in Chrome or the desktop client, and talk to a cartoon character; which parts run on your machine and which call a cloud service is up to you.',
          },
        ],
        items: [
          'Maintenance: the newest release is from 26 August 2025, and the README says the maintainers are concentrating on a full v2.0 rewrite and ask for no v1 feature requests.',
          'Cost: no paid tier; the README links a donation page.',
          'License: MIT for the code; the bundled Live2D sample models fall under a separate Live2D license.',
          'Setup: the backend is installed from a terminal; the Electron desktop client is only a front end.',
          'Components: speech recognition, language model and voice are separate choices, so one setup can mix local and cloud parts.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'No functional update since 11 February 2026. The latest release is 26 August 2025, and the only newer commit (15 May 2026) edited the README. The project may be unmaintained: check the repository before relying on it.',
          },
          {
            type: 'note',
            text: 'This review is based on the [project website](https://open-llm-vtuber.github.io), the [GitHub repository](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) and its release pages, checked on 24 October 2026. PromptQuorum has not installed or run the software, so audio quality, latency and avatar behavior are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-open-llm-vtuber',
        title: 'What Is Open-LLM-VTuber?',
        content: [
          '**Open-LLM-VTuber is a voice-interactive AI companion: you speak, a language model answers, and a Live2D character reacts with expressions and a synthesized voice.** The repository describes it as talking to any LLM with hands-free voice interaction and voice interruption, running locally across platforms. Its MIT-licensed code is copyrighted to Yi-Ting Chiu in the LICENSE file, and the project is run as a community on GitHub.',
          '**The name comes from the goal of recreating the closed-source AI VTuber neuro-sama with open components that run offline on systems other than Windows.** Today it is used as a general companion or character chat, with a web interface and an Electron desktop client that has a window mode and a desktop pet mode.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Open-LLM-VTuber is installed as a backend server on Windows, macOS or Linux; the desktop client and the browser page both connect to it.**',
        ],
        columns: [
          'Option',
          'How to get it',
        ],
        rows: [
          {
            Option: 'Backend (all systems)',
            'How to get it': 'Open-LLM-VTuber-v1.2.1-en.zip from the [GitHub Releases](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/releases), or git clone with the recursive flag',
          },
          {
            Option: 'Desktop client, Windows',
            'How to get it': '.exe installer from the [client releases](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases); needs the backend running',
          },
          {
            Option: 'Desktop client, macOS',
            'How to get it': '.dmg from the [client releases](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases); needs the backend running',
          },
          {
            Option: 'Website',
            'How to get it': '[open-llm-vtuber.github.io](https://open-llm-vtuber.github.io)',
          },
          {
            Option: 'Privacy policy',
            'How to get it': 'No privacy policy page was found on the website or in the repository',
          },
          {
            Option: 'Source code',
            'How to get it': '[github.com/Open-LLM-VTuber/Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber), MIT license',
          },
        ],
        note: 'Version reviewed: 1.2.1, published 26 August 2025 per the GitHub Releases page; the desktop client 1.2.1 appeared on 21 August 2025. A terminal and developer tools (Git, FFmpeg, uv, Python 3.10 to 3.12) are required for the backend, so this is not a double-click install. The quick-start docs warn that the unsigned desktop client may trigger operating-system security warnings. The app is free.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**The project sets no fixed minimum; what you need depends on which components you run locally and which you call over an API.**',
        ],
        columns: [
          'Item',
          'What the sources say',
        ],
        rows: [
          {
            Item: 'Minimum',
            'What the sources say': 'If every heavy component (speech recognition, language model, voice) uses an API, the quick-start says even a Raspberry Pi can host it',
          },
          {
            Item: 'Local use',
            'What the sources say': 'Recommended: a Mac with Apple silicon, an Nvidia GPU, a recent AMD GPU, or a CPU strong enough to replace one',
          },
          {
            Item: 'Tools',
            'What the sources say': 'Git, FFmpeg (required) and uv; Python 3.10 or newer but below 3.13; CUDA Toolkit and cuDNN for Nvidia GPU use',
          },
          {
            Item: 'Browser',
            'What the sources say': 'Chrome only is recommended; Edge and Safari have known issues',
          },
          {
            Item: 'Remote access',
            'What the sources say': 'Using the server from another device needs HTTPS, because browsers only allow the microphone in a secure context',
          },
        ],
        note: 'These are the project\'s own statements; PromptQuorum did not measure memory use or speed on any hardware.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the website, the quick-start guide or the README; none has been independently tested.**',
        ],
        items: [
          '**Voice conversation.** Real-time speech input, voice interruption without headphones, optional AI-initiated speech and a display of the AI\'s inner thoughts that is not spoken aloud.',
          '**Live2D avatar.** Cubism 3 to 5 models, expression mapping controlled from the backend, touch interaction and your own imported models.',
          '**Vision and tools.** Camera, screen and screenshot input, MCP tool calls, and, per the website, browser control.',
          '**Pluggable models.** Language models via Ollama, any OpenAI-compatible API, Gemini, Claude, Mistral, DeepSeek, GGUF, LM Studio or vLLM; recognition via sherpa-onnx, FunASR or Whisper variants; voices via sherpa-onnx, Coqui-TTS, Bark, Fish Audio, Azure and others.',
          '**Streaming and groups.** A built-in Bilibili live-chat client, group chat with several AI characters and saved chat history.',
        ],
        note: 'The website describes Letta-based long-term memory, while the README says long-term memory is temporarily removed; see the unverified list.',
      },
      privacy: {
        id: 'privacy',
        title: 'Local or Cloud: Data Flow',
        content: [
          '**The project says everything can run offline with local models and that conversations then stay on your device; it publishes no privacy policy, and the pages we read do not mention telemetry.** In a fully local setup (for example Ollama for the model and a local recognizer and voice) audio and text are processed on your computer. The software itself is open source, so the claim can be checked in the code.',
          '**Each component you switch to a cloud option sends data to that provider.** The supported cloud choices include OpenAI-compatible APIs, Gemini, Claude, Groq Whisper and Azure, and the quick-start example uses Edge TTS for the voice, which needs an internet connection. Models and dependencies are downloaded during setup, so the first install is online.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maintainers\' declarations, not audit results. PromptQuorum has not read the code or inspected network traffic, and a setup is only as private as its least private component.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Tinkerers and developers** who want to wire their own speech, language and voice components to an avatar.',
          '**Streamers and character-chat fans** who want a talking Live2D character they control, including a desktop pet.',
          '**Privacy-minded users** who are willing to run every component locally and verify it themselves.',
        ],
      },
      whoShouldNot: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Quality and speed.** PromptQuorum did not measure latency, recognition accuracy, voice quality or the hardware needed for a smooth conversation.',
          '**Maintenance outlook.** The README says a full v2.0 rewrite is in early planning and asks for no v1 feature requests; whether v1 will receive further fixes is not stated.',
          '**Long-term memory.** The website describes Letta-based memory, the README says it is temporarily removed; which statement holds for version 1.2.1 was not checked.',
          '**Commercial use of the avatars.** The README says the Live2D sample models may need extra permission from Live2D Inc. for medium or large companies; other models carry their own licenses.',
          '**Desktop client signing.** The docs say the client is unsigned and may trigger security warnings; whether the installers are otherwise safe was not checked.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: [
          'App',
          'Platforms',
          'Price / license',
          'Key difference',
        ],
        rows: [
          {
            App: '[SillyTavern](/local-llms/sillytavern-review)',
            Platforms: 'macOS, Windows, Linux, web',
            'Price / license': 'Free / AGPL 3.0',
            'Key difference': 'Text-focused roleplay frontend built around lorebooks and persona management',
          },
          {
            App: '[RisuAI](/power-local-llm/risuai-review)',
            Platforms: 'Web, macOS, Windows, Linux',
            'Price / license': 'Free / GPL 3.0',
            'Key difference': 'Mobile-friendly roleplay frontend with desktop builds',
          },
          {
            App: '[Agnai](/power-local-llm/agnai-review)',
            Platforms: 'Web',
            'Price / license': 'Free / AGPL-3.0',
            'Key difference': 'Roleplay frontend with character cards and multi-user group conversations',
          },
          {
            App: '[Backyard AI](/power-local-llm/backyard-ai-review-local-roleplay-2026)',
            Platforms: 'macOS, Windows',
            'Price / license': 'Freemium / Closed source',
            'Key difference': 'Desktop character-chat client with a built-in Character Hub and one installer',
          },
        ],
        note: 'These are same-category apps from the PromptQuorum directory; confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I run it without a GPU?',
            a: 'Yes, if you send the heavy parts to APIs: the quick-start says each component can use an API, and a lighter local model or a CPU-friendly recognizer is possible. Local use is recommended on Apple silicon, an Nvidia GPU or a recent AMD GPU.',
          },
          {
            q: 'Can I use my own Live2D model?',
            a: 'Yes: put the model folder in live2d-models, register it in model_dict.json and select it in the character configuration. Cubism 3 to 5 models work, Cubism 2 does not, and you should check the model\'s own license.',
          },
          {
            q: 'Can I talk to it from my phone?',
            a: 'The project says you can run the server on one computer and open it from another device, but the browser microphone only works over localhost or HTTPS, so remote use needs an HTTPS setup.',
          },
          {
            q: 'Can it join a live stream?',
            a: 'It has a built-in Bilibili live-chat client that receives viewer messages; other platforms need an interface you implement yourself.',
          },
          {
            q: 'Which browser works best?',
            a: 'The quick-start recommends Chrome only and names known problems with Edge and Safari.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Open-LLM-VTuber is a free, open-source way to build a voice-driven Live2D companion from components you choose, with a documented route to running everything offline. Against that, setup is a developer-style install, the example configuration still uses an online voice, the repository shows no functional update since 11 February 2026, and none of its quality claims could be checked here. It suits tinkerers who can use a terminal and are happy to treat it as a project that may no longer be maintained; anyone who needs a supported, polished app should test it carefully first.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Open-LLM-VTuber website](https://open-llm-vtuber.github.io) — project overview and feature list, checked 24 October 2026.',
          '[Quick Start guide](https://open-llm-vtuber.github.io/en/docs/quick-start) — requirements, installation steps and desktop client notes, checked 24 October 2026.',
          '[Open-LLM-VTuber on GitHub](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) — README, MIT license, Live2D notice and commit history, checked 24 October 2026.',
          '[Backend releases](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/releases) — version 1.2.1 and download files, checked 24 October 2026.',
          '[Desktop client releases](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases) — Windows and macOS installers, checked 24 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[SillyTavern vs. Agnai vs. RisuAI](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — three roleplay frontends compared.',
          '[HiWaifu Review](/power-local-llm/hiwaifu-review) — an AI companion app for phones.',
          '[SillyTavern Review](/local-llms/sillytavern-review) — a self-hosted character-chat frontend with lorebooks.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Open-LLM-VTuber Review: Self-Hosted Voice Chat with a Live2D Avatar',
      description: 'Open-LLM-VTuber review: a free, open-source voice chat companion with a Live2D avatar for Windows, macOS and Linux. Setup, offline use, data flow and an update warning.',
      url: 'https://www.promptquorum.com/power-local-llm/open-llm-vtuber-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: {
        '@type': 'Audience',
        audienceType: 'Tinkerers, streamers and roleplay fans evaluating a self-hosted voice AI companion',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Open-LLM-VTuber',
        },
        {
          '@type': 'Thing',
          name: 'AI companion',
        },
        {
          '@type': 'Thing',
          name: 'Live2D',
        },
        {
          '@type': 'Thing',
          name: 'Voice chat',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/open-llm-vtuber-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://www.promptquorum.com/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Open-LLM-VTuber Review',
          item: 'https://www.promptquorum.com/power-local-llm/open-llm-vtuber-review',
        },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Creative & Roleplay',
    heroImage: '/images/open-llm-vtuber-review-hero-de.webp',
    title: 'Open-LLM-VTuber-Rezension: Selbst gehosteter Sprach-Chat mit Live2D-Avatar',
    seoTitle: 'Open-LLM-VTuber-Rezension: Sprach-KI-Begleiter, Live2D',
    intro: 'Open-LLM-VTuber ist ein kostenloses Open-Source-Projekt, mit dem Sie per Sprache mit einem Sprachmodell sprechen, während eine Live2D-Figur auf dem Bildschirm antwortet. Sie betreiben es selbst unter Windows, macOS oder Linux und wählen Spracherkennung, Sprachmodell und Stimme selbst aus. Diese Rezension stützt sich auf die Projektwebsite, das GitHub-Repository und die Release-Seiten (Stand: 24. Oktober 2026); PromptQuorum hat die Software nicht selbst getestet.',
    metaDescription: 'Open-LLM-VTuber-Rezension: kostenloser Sprach-Chat (MIT) mit Live2D-Avatar zum Selbsthosten. Einrichtungsaufwand, lokale oder Cloud-Teile, Update-Warnung.',
    twitterDescription: 'Open-LLM-VTuber-Rezension: selbst gehosteter Sprachbegleiter mit Live2D-Avatar. Was die Quellen zu Einrichtung, Offline-Betrieb und Pflege bestätigen und was nicht.',
    audience: 'Bastler, Streamer und Rollenspiel-Fans, die einen sprachbasierten KI-Begleiter mit animiertem Avatar selbst kontrollieren wollen und wissen müssen, wie aufwendig die Einrichtung ist, was lokal bleibt und wie aktiv das Projekt gepflegt wird.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Open-LLM-VTuber Rezension',
    targetKeywords: [
      'open-llm-vtuber rezension',
      'open-llm-vtuber',
      'live2d ki begleiter',
      'selbst gehosteter sprach chat ki',
      'lokaler ki vtuber',
      'ki begleiter desktop pet',
      'open-llm-vtuber.github.io',
    ],
    current_models_mentioned: [
      'Ollama',
      'sherpa-onnx',
      'Faster-Whisper',
    ],
    current_hardware_mentioned: [
      'Apple silicon',
      'Nvidia GPU',
    ],
    leadAnswerBlock: '**Open-LLM-VTuber (Version 1.2.1) ist ein kostenloser, quelloffener Sprach-Chat-Begleiter mit Live2D-Avatar, den Sie unter Windows, macOS oder Linux selbst installieren und betreiben.** Laut Projekt kann er vollständig offline laufen, wenn alle Komponenten lokal sind, doch die Einrichtung erfolgt im Terminal, und das Repository zeigt seit dem 11. Februar 2026 keine funktionale Änderung mehr.',
    quickAnswerTop: {
      de: {
        question: 'Läuft Open-LLM-VTuber wirklich offline?',
        answer: 'Laut Projekt ja, wenn Sie für Spracherkennung, Sprachmodell und Stimme lokale Komponenten wählen. Das Beispiel im Schnellstart kombiniert jedoch Ollama und sherpa-onnx mit Edge TTS als Stimme, und die Anleitung nennt dafür eine Netzwerkverbindung als Voraussetzung.',
        bullets: [
          'Sie können die KI per Sprache unterbrechen, auch ohne Kopfhörer; laut Projekt hört sie ihre eigene Stimme nicht.',
          'Bildeingabe über Kamera, Bildschirmaufnahme und Screenshots wird unterstützt.',
          'Der Desktop-Client hat einen transparenten Pet-Modus, der den Avatar über andere Fenster legt.',
          'Externe Werkzeuge lassen sich über das MCP-Protokoll aufrufen.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Kurzantwort',
        anchor: 'quick-answer',
      },
      {
        label: 'Was ist Open-LLM-VTuber?',
        anchor: 'what-is-open-llm-vtuber',
      },
      {
        label: 'Bezugsquellen',
        anchor: 'get-it',
      },
      {
        label: 'Voraussetzungen',
        anchor: 'requirements',
      },
      {
        label: 'Von den Quellen bestätigte Funktionen',
        anchor: 'key-features',
      },
      {
        label: 'Lokal oder Cloud: Datenfluss',
        anchor: 'privacy',
      },
      {
        label: 'Für wen es sich eignet',
        anchor: 'who-should-use',
      },
      {
        label: 'Was wir nicht überprüfen konnten',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Alternativen und Mitbewerber',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Häufig gestellte Fragen',
        anchor: 'faq',
      },
      {
        label: 'Fazit',
        anchor: 'verdict',
      },
      {
        label: 'Quellen',
        anchor: 'sources',
      },
      {
        label: 'Weiterführende Artikel',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Open-LLM-VTuber ist ein selbst gehostetes Programm, das Spracherkennung, Sprachmodell und eine Text-to-Speech-Stimme mit einer animierten Live2D-Figur verbindet, sodass Sie ein gesprochenes Gespräch führen können.',
          },
          {
            type: 'plain-terms',
            text: 'Sie starten einen kleinen Server auf Ihrem eigenen Rechner, öffnen dessen Seite in Chrome oder im Desktop-Client und sprechen mit einer Zeichentrickfigur; welche Teile auf Ihrem Rechner laufen und welche einen Cloud-Dienst aufrufen, entscheiden Sie.',
          },
        ],
        items: [
          'Pflege: Das neueste Release stammt vom 26. August 2025; laut README konzentrieren sich die Betreuer auf ein komplett neues v2.0 und bitten um keine v1-Funktionswünsche.',
          'Kosten: keine Bezahlstufe; die README verlinkt eine Spendenseite.',
          'Lizenz: MIT für den Code; die mitgelieferten Live2D-Beispielmodelle unterliegen einer eigenen Live2D-Lizenz.',
          'Einrichtung: Das Backend wird im Terminal installiert; der Electron-Desktop-Client ist nur eine Oberfläche.',
          'Komponenten: Spracherkennung, Sprachmodell und Stimme sind getrennte Entscheidungen, eine Konfiguration kann also lokale und Cloud-Teile mischen.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Keine funktionale Aktualisierung seit dem 11. Februar 2026. Das neueste Release stammt vom 26. August 2025, und der einzige jüngere Commit (15. Mai 2026) hat nur die README geändert. Das Projekt wird möglicherweise nicht mehr gepflegt: Prüfen Sie das Repository, bevor Sie sich darauf verlassen.',
          },
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf die [Projektwebsite](https://open-llm-vtuber.github.io), das [GitHub-Repository](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) und die Release-Seiten (Stand: 24. Oktober 2026). PromptQuorum hat die Software weder installiert noch ausgeführt; Audioqualität, Latenz und Avatar-Verhalten wurden daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-open-llm-vtuber',
        title: 'Was ist Open-LLM-VTuber?',
        content: [
          '**Open-LLM-VTuber ist ein sprachgesteuerter KI-Begleiter: Sie sprechen, ein Sprachmodell antwortet, und eine Live2D-Figur reagiert mit Mimik und synthetischer Stimme.** Das Repository beschreibt es als Gespräch mit jedem LLM per freihändiger Sprachinteraktion und Sprachunterbrechung, lokal und plattformübergreifend. Der MIT-lizenzierte Code trägt in der LICENSE-Datei das Copyright von Yi-Ting Chiu; das Projekt wird als Community auf GitHub betrieben.',
          '**Der Name stammt vom Ziel, den Closed-Source-KI-VTuber neuro-sama mit offenen Komponenten nachzubauen, die auch außerhalb von Windows offline laufen.** Heute dient es als allgemeiner Begleiter oder Figuren-Chat, mit einer Weboberfläche und einem Electron-Desktop-Client mit Fenstermodus und Desktop-Pet-Modus.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquellen',
        content: [
          '**Open-LLM-VTuber wird als Backend-Server unter Windows, macOS oder Linux installiert; Desktop-Client und Browserseite verbinden sich damit.**',
        ],
        columns: [
          'Option',
          'So bekommen Sie es',
        ],
        rows: [
          {
            Option: 'Backend (alle Systeme)',
            'So bekommen Sie es': 'Open-LLM-VTuber-v1.2.1-en.zip von den [GitHub Releases](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/releases) oder git clone mit dem Rekursiv-Flag',
          },
          {
            Option: 'Desktop-Client, Windows',
            'So bekommen Sie es': '.exe-Installer von den [Client-Releases](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases); das Backend muss laufen',
          },
          {
            Option: 'Desktop-Client, macOS',
            'So bekommen Sie es': '.dmg von den [Client-Releases](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases); das Backend muss laufen',
          },
          {
            Option: 'Website',
            'So bekommen Sie es': '[open-llm-vtuber.github.io](https://open-llm-vtuber.github.io)',
          },
          {
            Option: 'Datenschutzerklärung',
            'So bekommen Sie es': 'Auf der Website und im Repository wurde keine Datenschutzerklärung gefunden',
          },
          {
            Option: 'Quellcode',
            'So bekommen Sie es': '[github.com/Open-LLM-VTuber/Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber), MIT-Lizenz',
          },
        ],
        note: 'Geprüfte Version: 1.2.1, laut GitHub-Releases-Seite am 26. August 2025 veröffentlicht; der Desktop-Client 1.2.1 erschien am 21. August 2025. Für das Backend sind ein Terminal und Entwicklerwerkzeuge (Git, FFmpeg, uv, Python 3.10 bis 3.12) nötig, es ist also keine Installation per Doppelklick. Die Schnellstart-Doku warnt, dass der nicht signierte Desktop-Client Sicherheitswarnungen des Betriebssystems auslösen kann. Die App ist kostenlos.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Voraussetzungen',
        content: [
          '**Das Projekt nennt kein festes Minimum; was Sie brauchen, hängt davon ab, welche Komponenten Sie lokal betreiben und welche über eine API laufen.**',
        ],
        columns: [
          'Punkt',
          'Was die Quellen sagen',
        ],
        rows: [
          {
            Punkt: 'Minimum',
            'Was die Quellen sagen': 'Nutzen alle schweren Komponenten (Spracherkennung, Sprachmodell, Stimme) eine API, kann laut Schnellstart sogar ein Raspberry Pi den Server hosten',
          },
          {
            Punkt: 'Lokaler Betrieb',
            'Was die Quellen sagen': 'Empfohlen: ein Mac mit Apple silicon, eine Nvidia-GPU, eine aktuelle AMD-GPU oder eine CPU, die stark genug ist, eine GPU zu ersetzen',
          },
          {
            Punkt: 'Werkzeuge',
            'Was die Quellen sagen': 'Git, FFmpeg (erforderlich) und uv; Python 3.10 oder neuer, aber unter 3.13; CUDA Toolkit und cuDNN für die Nvidia-GPU-Nutzung',
          },
          {
            Punkt: 'Browser',
            'Was die Quellen sagen': 'Empfohlen wird nur Chrome; bei Edge und Safari gibt es bekannte Probleme',
          },
          {
            Punkt: 'Fernzugriff',
            'Was die Quellen sagen': 'Die Nutzung von einem anderen Gerät erfordert HTTPS, weil Browser das Mikrofon nur in einem sicheren Kontext erlauben',
          },
        ],
        note: 'Das sind die eigenen Angaben des Projekts; PromptQuorum hat weder Speicherbedarf noch Geschwindigkeit auf irgendeiner Hardware gemessen.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Alles Folgende stammt von der Website, der Schnellstart-Anleitung oder der README; nichts davon wurde unabhängig getestet.**',
        ],
        items: [
          '**Sprachgespräch.** Spracheingabe in Echtzeit, Sprachunterbrechung ohne Kopfhörer, optional von der KI angestoßenes Sprechen und eine Anzeige der inneren Gedanken der KI, die nicht vorgelesen werden.',
          '**Live2D-Avatar.** Modelle der Cubism-Versionen 3 bis 5, vom Backend gesteuerte Mimik-Zuordnung, Berührungsinteraktion und eigene importierte Modelle.',
          '**Bild und Werkzeuge.** Kamera-, Bildschirm- und Screenshot-Eingabe, MCP-Werkzeugaufrufe und laut Website Browsersteuerung.',
          '**Austauschbare Modelle.** Sprachmodelle über Ollama, jede OpenAI-kompatible API, Gemini, Claude, Mistral, DeepSeek, GGUF, LM Studio oder vLLM; Erkennung über sherpa-onnx, FunASR oder Whisper-Varianten; Stimmen über sherpa-onnx, Coqui-TTS, Bark, Fish Audio, Azure und weitere.',
          '**Streaming und Gruppen.** Ein eingebauter Bilibili-Live-Chat-Client, Gruppenchat mit mehreren KI-Figuren und gespeicherter Chatverlauf.',
        ],
        note: 'Die Website beschreibt ein auf Letta basierendes Langzeitgedächtnis, während die README sagt, das Langzeitgedächtnis sei vorübergehend entfernt; siehe die Liste der nicht überprüften Punkte.',
      },
      privacy: {
        id: 'privacy',
        title: 'Lokal oder Cloud: Datenfluss',
        content: [
          '**Das Projekt sagt, alles könne mit lokalen Modellen offline laufen und Gespräche blieben dann auf Ihrem Gerät; es veröffentlicht keine Datenschutzerklärung, und die gelesenen Seiten erwähnen Telemetrie nicht.** In einer rein lokalen Konfiguration (etwa Ollama für das Modell sowie lokale Erkennung und Stimme) werden Audio und Text auf Ihrem Rechner verarbeitet. Die Software selbst ist quelloffen, die Aussage lässt sich also im Code prüfen.',
          '**Jede Komponente, die Sie auf eine Cloud-Option umstellen, sendet Daten an diesen Anbieter.** Zu den unterstützten Cloud-Optionen zählen OpenAI-kompatible APIs, Gemini, Claude, Groq Whisper und Azure; das Beispiel im Schnellstart nutzt Edge TTS als Stimme, was eine Internetverbindung braucht. Modelle und Abhängigkeiten werden bei der Einrichtung heruntergeladen, die Erstinstallation läuft also online.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Angaben der Betreuer, keine Prüfergebnisse. PromptQuorum hat weder den Code gelesen noch den Netzwerkverkehr untersucht, und eine Konfiguration ist nur so privat wie ihre am wenigsten private Komponente.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen es sich eignet',
        items: [
          '**Bastler und Entwickler**, die eigene Sprach-, Sprachmodell- und Stimmkomponenten mit einem Avatar verbinden wollen.',
          '**Streamer und Fans von Figuren-Chats**, die eine sprechende Live2D-Figur unter eigener Kontrolle wollen, auch als Desktop-Pet.',
          '**Datenschutzbewusste Nutzer**, die bereit sind, jede Komponente lokal zu betreiben und selbst zu überprüfen.',
        ],
      },
      whoShouldNot: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Qualität und Geschwindigkeit.** PromptQuorum hat weder Latenz noch Erkennungsgenauigkeit, Stimmqualität oder die für ein flüssiges Gespräch nötige Hardware gemessen.',
          '**Pflegeaussichten.** Die README sagt, ein komplettes v2.0 sei in früher Planung, und bittet um keine v1-Funktionswünsche; ob v1 weitere Korrekturen erhält, steht dort nicht.',
          '**Langzeitgedächtnis.** Die Website beschreibt ein Letta-basiertes Gedächtnis, die README sagt, es sei vorübergehend entfernt; welche Aussage für Version 1.2.1 gilt, wurde nicht geprüft.',
          '**Kommerzielle Nutzung der Avatare.** Laut README brauchen mittlere und große Unternehmen für die Live2D-Beispielmodelle möglicherweise zusätzliche Erlaubnis von Live2D Inc.; andere Modelle haben eigene Lizenzen.',
          '**Signatur des Desktop-Clients.** Die Doku sagt, der Client sei nicht signiert und könne Sicherheitswarnungen auslösen; ob die Installer ansonsten unbedenklich sind, wurde nicht geprüft.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Alternativen und Mitbewerber',
        columns: [
          'App',
          'Plattformen',
          'Preis / Lizenz',
          'Hauptunterschied',
        ],
        rows: [
          {
            App: '[SillyTavern](/de/local-llms/sillytavern-review)',
            Plattformen: 'macOS, Windows, Linux, Web',
            'Preis / Lizenz': 'Kostenlos / AGPL 3.0',
            Hauptunterschied: 'Textorientiertes Rollenspiel-Frontend rund um Lorebooks und Persona-Verwaltung',
          },
          {
            App: '[RisuAI](/de/power-local-llm/risuai-review)',
            Plattformen: 'Web, macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / GPL 3.0',
            Hauptunterschied: 'Mobilfreundliches Rollenspiel-Frontend mit Desktop-Builds',
          },
          {
            App: '[Agnai](/de/power-local-llm/agnai-review)',
            Plattformen: 'Web',
            'Preis / Lizenz': 'Kostenlos / AGPL-3.0',
            Hauptunterschied: 'Rollenspiel-Frontend mit Charakterkarten und Mehrbenutzer-Gruppenunterhaltungen',
          },
          {
            App: '[Backyard AI](/de/power-local-llm/backyard-ai-review-local-roleplay-2026)',
            Plattformen: 'macOS, Windows',
            'Preis / Lizenz': 'Freemium / Closed Source',
            Hauptunterschied: 'Desktop-Client für Figuren-Chats mit eingebautem Character Hub und einem Installer',
          },
        ],
        note: 'Das sind Apps derselben Kategorie aus dem PromptQuorum-Verzeichnis; prüfen Sie aktuellen Preis, Lizenz und Plattformen auf der jeweiligen Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Läuft es ohne GPU?',
            a: 'Ja, wenn Sie die schweren Teile an APIs auslagern: Laut Schnellstart kann jede Komponente eine API nutzen, und ein kleineres lokales Modell oder eine CPU-taugliche Erkennung ist möglich. Für den lokalen Betrieb werden Apple silicon, eine Nvidia-GPU oder eine aktuelle AMD-GPU empfohlen.',
          },
          {
            q: 'Kann ich ein eigenes Live2D-Modell verwenden?',
            a: 'Ja: Legen Sie den Modellordner in live2d-models ab, tragen Sie ihn in model_dict.json ein und wählen Sie ihn in der Charakterkonfiguration aus. Modelle der Cubism-Versionen 3 bis 5 funktionieren, Cubism 2 nicht; prüfen Sie außerdem die Lizenz des Modells.',
          },
          {
            q: 'Kann ich mit dem Smartphone mit ihm sprechen?',
            a: 'Laut Projekt können Sie den Server auf einem Rechner starten und von einem anderen Gerät aus öffnen, doch das Browser-Mikrofon funktioniert nur über localhost oder HTTPS; für den Fernzugriff ist also eine HTTPS-Einrichtung nötig.',
          },
          {
            q: 'Kann es an einem Livestream teilnehmen?',
            a: 'Es hat einen eingebauten Bilibili-Live-Chat-Client, der Zuschauernachrichten empfängt; andere Plattformen erfordern eine selbst implementierte Schnittstelle.',
          },
          {
            q: 'Welcher Browser funktioniert am besten?',
            a: 'Der Schnellstart empfiehlt nur Chrome und nennt bekannte Probleme mit Edge und Safari.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Open-LLM-VTuber ist ein kostenloser, quelloffener Weg, aus frei gewählten Komponenten einen sprachgesteuerten Live2D-Begleiter zu bauen, mit dokumentiertem Weg zum vollständigen Offline-Betrieb. Dagegen steht eine Einrichtung im Stil einer Entwicklerinstallation, eine Beispielkonfiguration mit Online-Stimme, keine funktionale Aktualisierung im Repository seit dem 11. Februar 2026 und Qualitätsaussagen, die hier nicht überprüft werden konnten. Es eignet sich für Bastler, die ein Terminal bedienen können und das Projekt als möglicherweise nicht mehr gepflegt akzeptieren; wer eine unterstützte, ausgereifte App braucht, sollte es zuerst sorgfältig testen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von Open-LLM-VTuber](https://open-llm-vtuber.github.io) — Projektüberblick und Funktionsliste, geprüft am 24. Oktober 2026.',
          '[Schnellstart-Anleitung](https://open-llm-vtuber.github.io/en/docs/quick-start) — Voraussetzungen, Installationsschritte und Hinweise zum Desktop-Client, geprüft am 24. Oktober 2026.',
          '[Open-LLM-VTuber auf GitHub](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) — README, MIT-Lizenz, Live2D-Hinweis und Commit-Verlauf, geprüft am 24. Oktober 2026.',
          '[Backend-Releases](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/releases) — Version 1.2.1 und Download-Dateien, geprüft am 24. Oktober 2026.',
          '[Desktop-Client-Releases](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases) — Installer für Windows und macOS, geprüft am 24. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[SillyTavern, Agnai und RisuAI im Vergleich](/de/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — drei Rollenspiel-Frontends im Vergleich.',
          '[HiWaifu-Rezension](/de/power-local-llm/hiwaifu-review) — eine KI-Begleiter-App für Smartphones.',
          '[SillyTavern-Rezension](/de/local-llms/sillytavern-review) — ein selbst gehostetes Frontend für Figuren-Chats mit Lorebooks.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Creative & Roleplay',
    heroImage: '/images/open-llm-vtuber-review-hero-es.webp',
    title: 'Reseña de Open-LLM-VTuber: chat de voz autoalojado con avatar Live2D',
    seoTitle: 'Reseña de Open-LLM-VTuber: compañero de voz con IA, Live2D',
    intro: 'Open-LLM-VTuber es un proyecto gratuito y de código abierto que permite hablar por voz con un modelo de lenguaje mientras un personaje Live2D responde en pantalla. Lo ejecutas tú mismo en Windows, macOS o Linux y eliges los componentes de reconocimiento de voz, modelo de lenguaje y voz. Esta reseña se basa en el sitio del proyecto, el repositorio de GitHub y sus páginas de versiones, consultados el 24 de octubre de 2026; PromptQuorum no ha probado el software en la práctica.',
    metaDescription: 'Reseña de Open-LLM-VTuber: chat de voz gratuito (MIT) con avatar Live2D para autoalojar. Instalación, partes locales o en la nube y aviso de actualización.',
    twitterDescription: 'Reseña de Open-LLM-VTuber: compañero de voz autoalojado con avatar Live2D. Qué confirman las fuentes sobre instalación, uso sin conexión y mantenimiento, y qué no.',
    audience: 'Aficionados, streamers y fans del rol que quieren un compañero de IA por voz con avatar animado bajo su control, y necesitan saber el esfuerzo de instalación, qué se queda en local y cuánto se mantiene el proyecto.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña Open-LLM-VTuber',
    targetKeywords: [
      'reseña open-llm-vtuber',
      'open-llm-vtuber',
      'compañero ia live2d',
      'chat de voz ia autoalojado',
      'vtuber ia local',
      'compañero ia escritorio',
      'open-llm-vtuber.github.io',
    ],
    current_models_mentioned: [
      'Ollama',
      'sherpa-onnx',
      'Faster-Whisper',
    ],
    current_hardware_mentioned: [
      'Apple silicon',
      'Nvidia GPU',
    ],
    leadAnswerBlock: '**Open-LLM-VTuber (versión 1.2.1) es un compañero de chat de voz gratuito y de código abierto con avatar Live2D, que instalas y ejecutas tú mismo en Windows, macOS o Linux.** Según el proyecto, puede funcionar totalmente sin conexión si todos los componentes son locales, pero la instalación se hace en terminal y el repositorio no muestra cambios funcionales desde el 11 de febrero de 2026.',
    quickAnswerTop: {
      es: {
        question: '¿Open-LLM-VTuber funciona de verdad sin conexión?',
        answer: 'Según el proyecto, sí, si eliges componentes locales para el reconocimiento de voz, el modelo de lenguaje y la voz. Sin embargo, el ejemplo de la guía de inicio combina Ollama y sherpa-onnx con Edge TTS para la voz, y la guía indica una conexión de red como requisito para ella.',
        bullets: [
          'Puedes interrumpir a la IA con la voz sin auriculares; el proyecto dice que no oye su propia voz.',
          'Se admite la entrada de imagen desde la cámara, grabaciones de pantalla y capturas.',
          'El cliente de escritorio tiene un modo mascota transparente que hace flotar el avatar sobre otras ventanas.',
          'Se pueden llamar herramientas externas mediante el protocolo MCP.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Respuesta rápida',
        anchor: 'quick-answer',
      },
      {
        label: '¿Qué es Open-LLM-VTuber?',
        anchor: 'what-is-open-llm-vtuber',
      },
      {
        label: 'Cómo obtenerlo',
        anchor: 'get-it',
      },
      {
        label: 'Requisitos',
        anchor: 'requirements',
      },
      {
        label: 'Funciones confirmadas por las fuentes',
        anchor: 'key-features',
      },
      {
        label: 'Local o nube: flujo de datos',
        anchor: 'privacy',
      },
      {
        label: 'Para quién es',
        anchor: 'who-should-use',
      },
      {
        label: 'Lo que no pudimos verificar',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Competidores y alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Preguntas frecuentes',
        anchor: 'faq',
      },
      {
        label: 'Veredicto',
        anchor: 'verdict',
      },
      {
        label: 'Fuentes',
        anchor: 'sources',
      },
      {
        label: 'Lecturas relacionadas',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Open-LLM-VTuber es un programa autoalojado que conecta un reconocedor de voz, un modelo de lenguaje y una voz de síntesis con un personaje Live2D animado, para mantener una conversación hablada con él.',
          },
          {
            type: 'plain-terms',
            text: 'Inicias un pequeño servidor en tu propio equipo, abres su página en Chrome o en el cliente de escritorio y hablas con un personaje de dibujos; tú decides qué partes se ejecutan en tu equipo y cuáles llaman a un servicio en la nube.',
          },
        ],
        items: [
          'Mantenimiento: la versión más reciente es del 26 de agosto de 2025; según el README, los mantenedores se centran en una reescritura completa v2.0 y piden no abrir solicitudes de funciones para la v1.',
          'Coste: sin nivel de pago; el README enlaza una página de donaciones.',
          'Licencia: MIT para el código; los modelos Live2D de muestra incluidos están bajo una licencia de Live2D aparte.',
          'Instalación: el backend se instala desde una terminal; el cliente de escritorio Electron es solo una interfaz.',
          'Componentes: reconocimiento de voz, modelo de lenguaje y voz se eligen por separado, así que una configuración puede mezclar partes locales y en la nube.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Sin actualización funcional desde el 11 de febrero de 2026. La última versión es del 26 de agosto de 2025 y el único commit posterior (15 de mayo de 2026) solo editó el README. Puede que el proyecto ya no tenga mantenimiento: revisa el repositorio antes de depender de él.',
          },
          {
            type: 'note',
            text: 'Esta reseña se basa en el [sitio del proyecto](https://open-llm-vtuber.github.io), el [repositorio de GitHub](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) y sus páginas de versiones, consultados el 24 de octubre de 2026. PromptQuorum no ha instalado ni ejecutado el software, así que no se evalúan la calidad del audio, la latencia ni el comportamiento del avatar.',
          },
        ],
      },
      overview: {
        id: 'what-is-open-llm-vtuber',
        title: '¿Qué es Open-LLM-VTuber?',
        content: [
          '**Open-LLM-VTuber es un compañero de IA de interacción por voz: tú hablas, un modelo de lenguaje responde y un personaje Live2D reacciona con expresiones y una voz sintetizada.** El repositorio lo describe como hablar con cualquier LLM con interacción de voz manos libres e interrupción por voz, en local y en varias plataformas. Su código con licencia MIT figura a nombre de Yi-Ting Chiu en el archivo LICENSE, y el proyecto funciona como una comunidad en GitHub.',
          '**El nombre viene del objetivo de recrear el VTuber de IA de código cerrado neuro-sama con componentes abiertos que funcionen sin conexión en sistemas distintos de Windows.** Hoy se usa como compañero general o chat con personajes, con una interfaz web y un cliente de escritorio Electron con modo ventana y modo mascota de escritorio.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerlo',
        content: [
          '**Open-LLM-VTuber se instala como servidor backend en Windows, macOS o Linux; el cliente de escritorio y la página del navegador se conectan a él.**',
        ],
        columns: [
          'Opción',
          'Cómo conseguirlo',
        ],
        rows: [
          {
            'Opción': 'Backend (todos los sistemas)',
            'Cómo conseguirlo': 'Open-LLM-VTuber-v1.2.1-en.zip desde las [GitHub Releases](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/releases), o git clone con la opción recursiva',
          },
          {
            'Opción': 'Cliente de escritorio, Windows',
            'Cómo conseguirlo': 'Instalador .exe desde las [versiones del cliente](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases); el backend debe estar en marcha',
          },
          {
            'Opción': 'Cliente de escritorio, macOS',
            'Cómo conseguirlo': 'Archivo .dmg desde las [versiones del cliente](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases); el backend debe estar en marcha',
          },
          {
            'Opción': 'Sitio web',
            'Cómo conseguirlo': '[open-llm-vtuber.github.io](https://open-llm-vtuber.github.io)',
          },
          {
            'Opción': 'Política de privacidad',
            'Cómo conseguirlo': 'No se encontró ninguna página de política de privacidad en el sitio web ni en el repositorio',
          },
          {
            'Opción': 'Código fuente',
            'Cómo conseguirlo': '[github.com/Open-LLM-VTuber/Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber), licencia MIT',
          },
        ],
        note: 'Versión revisada: 1.2.1, publicada el 26 de agosto de 2025 según la página de GitHub Releases; el cliente de escritorio 1.2.1 apareció el 21 de agosto de 2025. Para el backend hacen falta una terminal y herramientas de desarrollo (Git, FFmpeg, uv, Python 3.10 a 3.12), así que no es una instalación con doble clic. La documentación de inicio advierte de que el cliente de escritorio sin firmar puede provocar avisos de seguridad del sistema operativo. La app es gratuita.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**El proyecto no fija un mínimo; lo que necesitas depende de qué componentes ejecutes en local y cuáles uses mediante una API.**',
        ],
        columns: [
          'Elemento',
          'Qué dicen las fuentes',
        ],
        rows: [
          {
            Elemento: 'Mínimo',
            'Qué dicen las fuentes': 'Si todos los componentes pesados (reconocimiento de voz, modelo de lenguaje, voz) usan una API, la guía dice que incluso una Raspberry Pi puede alojarlo',
          },
          {
            Elemento: 'Uso local',
            'Qué dicen las fuentes': 'Recomendado: un Mac con Apple silicon, una GPU Nvidia, una GPU AMD reciente o una CPU lo bastante potente para sustituirla',
          },
          {
            Elemento: 'Herramientas',
            'Qué dicen las fuentes': 'Git, FFmpeg (obligatorio) y uv; Python 3.10 o superior pero inferior a 3.13; CUDA Toolkit y cuDNN para usar una GPU Nvidia',
          },
          {
            Elemento: 'Navegador',
            'Qué dicen las fuentes': 'Solo se recomienda Chrome; Edge y Safari tienen problemas conocidos',
          },
          {
            Elemento: 'Acceso remoto',
            'Qué dicen las fuentes': 'Usar el servidor desde otro dispositivo requiere HTTPS, porque los navegadores solo permiten el micrófono en un contexto seguro',
          },
        ],
        note: 'Son declaraciones del propio proyecto; PromptQuorum no midió el uso de memoria ni la velocidad en ningún equipo.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Todo lo siguiente procede del sitio web, la guía de inicio o el README; nada se ha probado de forma independiente.**',
        ],
        items: [
          '**Conversación por voz.** Entrada de voz en tiempo real, interrupción por voz sin auriculares, habla iniciada por la IA como opción y una vista de los pensamientos internos de la IA que no se leen en voz alta.',
          '**Avatar Live2D.** Modelos Cubism 3 a 5, asignación de expresiones controlada desde el backend, interacción táctil y modelos propios importados.',
          '**Visión y herramientas.** Entrada de cámara, pantalla y capturas, llamadas a herramientas MCP y, según el sitio, control del navegador.',
          '**Modelos intercambiables.** Modelos de lenguaje mediante Ollama, cualquier API compatible con OpenAI, Gemini, Claude, Mistral, DeepSeek, GGUF, LM Studio o vLLM; reconocimiento con sherpa-onnx, FunASR o variantes de Whisper; voces con sherpa-onnx, Coqui-TTS, Bark, Fish Audio, Azure y otras.',
          '**Streaming y grupos.** Un cliente integrado de chat en directo de Bilibili, chat de grupo con varios personajes de IA e historial de chat guardado.',
        ],
        note: 'El sitio describe una memoria a largo plazo basada en Letta, mientras que el README dice que está retirada temporalmente; consulta la lista de puntos sin verificar.',
      },
      privacy: {
        id: 'privacy',
        title: 'Local o nube: flujo de datos',
        content: [
          '**El proyecto dice que todo puede funcionar sin conexión con modelos locales y que entonces las conversaciones se quedan en tu dispositivo; no publica una política de privacidad, y las páginas que leímos no mencionan la telemetría.** En una configuración totalmente local (por ejemplo Ollama para el modelo y reconocimiento y voz locales), el audio y el texto se procesan en tu equipo. El software es de código abierto, así que la afirmación se puede comprobar en el código.',
          '**Cada componente que cambies a una opción en la nube envía datos a ese proveedor.** Entre las opciones en la nube admitidas están las API compatibles con OpenAI, Gemini, Claude, Groq Whisper y Azure; el ejemplo de la guía usa Edge TTS para la voz, lo que requiere conexión a internet. Los modelos y dependencias se descargan durante la instalación, así que la primera instalación es con conexión.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones de los mantenedores, no resultados de una auditoría. PromptQuorum no ha leído el código ni inspeccionado el tráfico de red, y una configuración solo es tan privada como su componente menos privado.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Aficionados y desarrolladores** que quieren conectar sus propios componentes de voz, lenguaje y síntesis a un avatar.',
          '**Streamers y fans del chat con personajes** que quieren un personaje Live2D parlante bajo su control, incluso como mascota de escritorio.',
          '**Usuarios preocupados por la privacidad** dispuestos a ejecutar cada componente en local y a verificarlo ellos mismos.',
        ],
      },
      whoShouldNot: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad y velocidad.** PromptQuorum no midió la latencia, la precisión del reconocimiento, la calidad de la voz ni el hardware necesario para una conversación fluida.',
          '**Perspectivas de mantenimiento.** El README dice que una reescritura completa v2.0 está en planificación inicial y pide no abrir solicitudes de funciones para la v1; no indica si la v1 recibirá más correcciones.',
          '**Memoria a largo plazo.** El sitio describe una memoria basada en Letta y el README dice que está retirada temporalmente; no comprobamos cuál de las dos afirmaciones vale para la versión 1.2.1.',
          '**Uso comercial de los avatares.** Según el README, las empresas medianas o grandes pueden necesitar un permiso adicional de Live2D Inc. para los modelos Live2D de muestra; los demás modelos tienen sus propias licencias.',
          '**Firma del cliente de escritorio.** La documentación dice que el cliente no está firmado y puede provocar avisos de seguridad; no comprobamos si los instaladores son seguros por lo demás.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: [
          'App',
          'Plataformas',
          'Precio / licencia',
          'Diferencia principal',
        ],
        rows: [
          {
            App: '[SillyTavern](/es/local-llms/sillytavern-review)',
            Plataformas: 'macOS, Windows, Linux, web',
            'Precio / licencia': 'Gratis / AGPL 3.0',
            'Diferencia principal': 'Interfaz de rol centrada en el texto, basada en lorebooks y gestión de personas',
          },
          {
            App: '[RisuAI](/es/power-local-llm/risuai-review)',
            Plataformas: 'Web, macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / GPL 3.0',
            'Diferencia principal': 'Interfaz de rol adaptada al móvil, con versiones de escritorio',
          },
          {
            App: '[Agnai](/es/power-local-llm/agnai-review)',
            Plataformas: 'Web',
            'Precio / licencia': 'Gratis / AGPL-3.0',
            'Diferencia principal': 'Interfaz de rol con fichas de personaje y conversaciones de grupo multiusuario',
          },
          {
            App: '[Backyard AI](/es/power-local-llm/backyard-ai-review-local-roleplay-2026)',
            Plataformas: 'macOS, Windows',
            'Precio / licencia': 'Freemium / Código cerrado',
            'Diferencia principal': 'Cliente de escritorio para chat con personajes, con Character Hub integrado y un solo instalador',
          },
        ],
        note: 'Son apps de la misma categoría del directorio de PromptQuorum; confirma el precio, la licencia y las plataformas actuales en la página de cada una.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Se puede usar sin GPU?',
            a: 'Sí, si envías las partes pesadas a APIs: según la guía de inicio, cada componente puede usar una API, y es posible un modelo local más ligero o un reconocedor apto para CPU. Para el uso local se recomienda Apple silicon, una GPU Nvidia o una GPU AMD reciente.',
          },
          {
            q: '¿Puedo usar mi propio modelo Live2D?',
            a: 'Sí: coloca la carpeta del modelo en live2d-models, regístrala en model_dict.json y selecciónala en la configuración del personaje. Funcionan los modelos Cubism 3 a 5, no Cubism 2; revisa también la licencia del modelo.',
          },
          {
            q: '¿Puedo hablar con él desde el móvil?',
            a: 'El proyecto dice que puedes ejecutar el servidor en un equipo y abrirlo desde otro dispositivo, pero el micrófono del navegador solo funciona en localhost o con HTTPS; el acceso remoto requiere por tanto configurar HTTPS.',
          },
          {
            q: '¿Puede unirse a un directo?',
            a: 'Incluye un cliente de chat en directo de Bilibili que recibe los mensajes de los espectadores; otras plataformas necesitan una interfaz que implementes tú.',
          },
          {
            q: '¿Qué navegador funciona mejor?',
            a: 'La guía de inicio recomienda solo Chrome y menciona problemas conocidos con Edge y Safari.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Open-LLM-VTuber es una forma gratuita y de código abierto de montar un compañero Live2D controlado por voz con los componentes que elijas, con una vía documentada para ejecutarlo todo sin conexión. En contra: una instalación de estilo desarrollador, una configuración de ejemplo que aún usa una voz en línea, ningún cambio funcional en el repositorio desde el 11 de febrero de 2026 y afirmaciones de calidad que no pudimos comprobar. Encaja con aficionados que manejan una terminal y aceptan tratarlo como un proyecto que quizá ya no se mantiene; quien necesite una app con soporte y pulida debería probarla con cuidado antes.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Open-LLM-VTuber](https://open-llm-vtuber.github.io) — descripción del proyecto y lista de funciones, consultado el 24 de octubre de 2026.',
          '[Guía de inicio](https://open-llm-vtuber.github.io/en/docs/quick-start) — requisitos, pasos de instalación y notas del cliente de escritorio, consultada el 24 de octubre de 2026.',
          '[Open-LLM-VTuber en GitHub](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) — README, licencia MIT, aviso de Live2D e historial de commits, consultados el 24 de octubre de 2026.',
          '[Versiones del backend](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/releases) — versión 1.2.1 y archivos de descarga, consultados el 24 de octubre de 2026.',
          '[Versiones del cliente de escritorio](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases) — instaladores para Windows y macOS, consultados el 24 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[SillyTavern, Agnai y RisuAI comparados](/es/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — tres interfaces de rol comparadas.',
          '[Reseña de HiWaifu](/es/power-local-llm/hiwaifu-review) — una app de compañero de IA para el móvil.',
          '[Reseña de SillyTavern](/es/local-llms/sillytavern-review) — una interfaz autoalojada de chat con personajes y lorebooks.',
          '[Directorio de software de LLM locales](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Creative & Roleplay',
    heroImage: '/images/open-llm-vtuber-review-hero-fr.webp',
    title: 'Test d’Open-LLM-VTuber : chat vocal auto-hébergé avec avatar Live2D',
    seoTitle: 'Test d’Open-LLM-VTuber : compagnon IA vocal, Live2D',
    intro: 'Open-LLM-VTuber est un projet libre et gratuit qui permet de parler à un modèle de langage à voix haute pendant qu’un personnage Live2D répond à l’écran. Vous l’exécutez vous-même sous Windows, macOS ou Linux et choisissez les composants de reconnaissance vocale, de modèle de langage et de voix. Ce test s’appuie sur le site du projet, le dépôt GitHub et ses pages de versions, consultés le 24 octobre 2026 ; PromptQuorum n’a pas testé le logiciel en pratique.',
    metaDescription: 'Test d’Open-LLM-VTuber : chat vocal gratuit (MIT) avec avatar Live2D à héberger soi-même. Installation, parties locales ou cloud, alerte de mise à jour.',
    twitterDescription: 'Test d’Open-LLM-VTuber : compagnon vocal auto-hébergé avec avatar Live2D. Ce que les sources confirment sur l’installation, l’usage hors ligne et la maintenance, et ce qu’elles ne confirment pas.',
    audience: 'Bricoleurs, streamers et amateurs de jeu de rôle qui veulent un compagnon IA vocal avec avatar animé sous leur contrôle, et qui doivent connaître l’effort d’installation, ce qui reste en local et le niveau de maintenance du projet.',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test Open-LLM-VTuber',
    targetKeywords: [
      'test open-llm-vtuber',
      'open-llm-vtuber',
      'compagnon ia live2d',
      'chat vocal ia auto-hébergé',
      'vtuber ia local',
      'compagnon ia bureau',
      'open-llm-vtuber.github.io',
    ],
    current_models_mentioned: [
      'Ollama',
      'sherpa-onnx',
      'Faster-Whisper',
    ],
    current_hardware_mentioned: [
      'Apple silicon',
      'Nvidia GPU',
    ],
    leadAnswerBlock: '**Open-LLM-VTuber (version 1.2.1) est un compagnon de chat vocal libre et gratuit avec avatar Live2D, que vous installez et exécutez vous-même sous Windows, macOS ou Linux.** Selon le projet, il peut fonctionner entièrement hors ligne si tous les composants sont locaux, mais l’installation se fait au terminal et le dépôt n’a connu aucune modification fonctionnelle depuis le 11 février 2026.',
    quickAnswerTop: {
      fr: {
        question: 'Open-LLM-VTuber fonctionne-t-il vraiment hors ligne ?',
        answer: 'Selon le projet, oui, si vous choisissez des composants locaux pour la reconnaissance vocale, le modèle de langage et la voix. L’exemple du guide de démarrage associe pourtant Ollama et sherpa-onnx à Edge TTS pour la voix, et le guide indique une connexion réseau comme prérequis pour celle-ci.',
        bullets: [
          'Vous pouvez interrompre l’IA à la voix sans casque ; le projet indique qu’elle n’entend pas sa propre voix.',
          'L’entrée visuelle par caméra, enregistrement d’écran et captures d’écran est prise en charge.',
          'Le client de bureau propose un mode « pet » transparent qui fait flotter l’avatar au-dessus des autres fenêtres.',
          'Des outils externes peuvent être appelés via le protocole MCP.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Réponse rapide',
        anchor: 'quick-answer',
      },
      {
        label: 'Qu’est-ce qu’Open-LLM-VTuber ?',
        anchor: 'what-is-open-llm-vtuber',
      },
      {
        label: 'Où l’obtenir',
        anchor: 'get-it',
      },
      {
        label: 'Prérequis',
        anchor: 'requirements',
      },
      {
        label: 'Fonctions confirmées par les sources',
        anchor: 'key-features',
      },
      {
        label: 'Local ou cloud : flux de données',
        anchor: 'privacy',
      },
      {
        label: 'Pour qui',
        anchor: 'who-should-use',
      },
      {
        label: 'Ce que nous n’avons pas pu vérifier',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Concurrents et alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Questions fréquentes',
        anchor: 'faq',
      },
      {
        label: 'Verdict',
        anchor: 'verdict',
      },
      {
        label: 'Sources',
        anchor: 'sources',
      },
      {
        label: 'Lectures complémentaires',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Open-LLM-VTuber est un programme auto-hébergé qui relie un outil de reconnaissance vocale, un modèle de langage et une voix de synthèse à un personnage Live2D animé, pour tenir une conversation parlée avec lui.',
          },
          {
            type: 'plain-terms',
            text: 'Vous lancez un petit serveur sur votre propre ordinateur, ouvrez sa page dans Chrome ou dans le client de bureau, et parlez à un personnage de dessin animé ; vous décidez quelles parties tournent sur votre machine et lesquelles appellent un service cloud.',
          },
        ],
        items: [
          'Maintenance : la version la plus récente date du 26 août 2025 ; selon le README, les mainteneurs se concentrent sur une réécriture complète en v2.0 et demandent de ne pas soumettre de demandes de fonctions pour la v1.',
          'Coût : pas d’offre payante ; le README renvoie vers une page de dons.',
          'Licence : MIT pour le code ; les modèles Live2D d’exemple fournis relèvent d’une licence Live2D distincte.',
          'Installation : le backend s’installe depuis un terminal ; le client de bureau Electron n’est qu’une interface.',
          'Composants : reconnaissance vocale, modèle de langage et voix sont des choix séparés, donc une même configuration peut mêler parties locales et cloud.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Aucune mise à jour fonctionnelle depuis le 11 février 2026. La dernière version date du 26 août 2025, et le seul commit plus récent (15 mai 2026) a modifié le README. Le projet n’est peut-être plus maintenu : vérifiez le dépôt avant de vous y fier.',
          },
          {
            type: 'note',
            text: 'Ce test s’appuie sur le [site du projet](https://open-llm-vtuber.github.io), le [dépôt GitHub](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) et ses pages de versions, consultés le 24 octobre 2026. PromptQuorum n’a ni installé ni exécuté le logiciel : la qualité audio, la latence et le comportement de l’avatar ne sont donc pas évalués.',
          },
        ],
      },
      overview: {
        id: 'what-is-open-llm-vtuber',
        title: 'Qu’est-ce qu’Open-LLM-VTuber ?',
        content: [
          '**Open-LLM-VTuber est un compagnon IA à interaction vocale : vous parlez, un modèle de langage répond, et un personnage Live2D réagit par des expressions et une voix de synthèse.** Le dépôt le décrit comme un moyen de parler à n’importe quel LLM avec interaction vocale mains libres et interruption vocale, en local et sur plusieurs plateformes. Son code sous licence MIT est attribué à Yi-Ting Chiu dans le fichier LICENSE, et le projet est mené comme une communauté sur GitHub.',
          '**Son nom vient de l’objectif de recréer le VTuber IA propriétaire neuro-sama avec des composants ouverts, utilisables hors ligne ailleurs que sous Windows.** Il sert aujourd’hui de compagnon général ou de chat avec personnages, avec une interface web et un client de bureau Electron offrant un mode fenêtre et un mode « pet » de bureau.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Open-LLM-VTuber s’installe comme serveur backend sous Windows, macOS ou Linux ; le client de bureau et la page du navigateur s’y connectent.**',
        ],
        columns: [
          'Option',
          'Comment l’obtenir',
        ],
        rows: [
          {
            Option: 'Backend (tous systèmes)',
            'Comment l’obtenir': 'Open-LLM-VTuber-v1.2.1-en.zip depuis les [GitHub Releases](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/releases), ou git clone avec l’option récursive',
          },
          {
            Option: 'Client de bureau, Windows',
            'Comment l’obtenir': 'Installeur .exe depuis les [versions du client](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases) ; le backend doit être lancé',
          },
          {
            Option: 'Client de bureau, macOS',
            'Comment l’obtenir': 'Fichier .dmg depuis les [versions du client](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases) ; le backend doit être lancé',
          },
          {
            Option: 'Site web',
            'Comment l’obtenir': '[open-llm-vtuber.github.io](https://open-llm-vtuber.github.io)',
          },
          {
            Option: 'Politique de confidentialité',
            'Comment l’obtenir': 'Aucune page de politique de confidentialité n’a été trouvée sur le site ni dans le dépôt',
          },
          {
            Option: 'Code source',
            'Comment l’obtenir': '[github.com/Open-LLM-VTuber/Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber), licence MIT',
          },
        ],
        note: 'Version testée : 1.2.1, publiée le 26 août 2025 selon la page GitHub Releases ; le client de bureau 1.2.1 est paru le 21 août 2025. Un terminal et des outils de développement (Git, FFmpeg, uv, Python 3.10 à 3.12) sont nécessaires pour le backend : ce n’est pas une installation par double-clic. La documentation de démarrage avertit que le client de bureau non signé peut déclencher des alertes de sécurité du système. L’application est gratuite.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**Le projet ne fixe pas de minimum précis ; ce qu’il vous faut dépend des composants exécutés en local et de ceux appelés via une API.**',
        ],
        columns: [
          'Élément',
          'Ce que disent les sources',
        ],
        rows: [
          {
            'Élément': 'Minimum',
            'Ce que disent les sources': 'Si tous les composants lourds (reconnaissance vocale, modèle de langage, voix) passent par une API, le guide indique qu’un Raspberry Pi peut même héberger le serveur',
          },
          {
            'Élément': 'Usage local',
            'Ce que disent les sources': 'Recommandé : un Mac Apple silicon, un GPU Nvidia, un GPU AMD récent ou un CPU assez puissant pour en tenir lieu',
          },
          {
            'Élément': 'Outils',
            'Ce que disent les sources': 'Git, FFmpeg (obligatoire) et uv ; Python 3.10 ou plus, mais inférieur à 3.13 ; CUDA Toolkit et cuDNN pour un GPU Nvidia',
          },
          {
            'Élément': 'Navigateur',
            'Ce que disent les sources': 'Seul Chrome est recommandé ; Edge et Safari ont des problèmes connus',
          },
          {
            'Élément': 'Accès à distance',
            'Ce que disent les sources': 'Utiliser le serveur depuis un autre appareil exige HTTPS, car les navigateurs n’autorisent le micro que dans un contexte sécurisé',
          },
        ],
        note: 'Il s’agit des déclarations du projet lui-même ; PromptQuorum n’a mesuré ni la mémoire utilisée ni la vitesse sur aucun matériel.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Tout ce qui suit provient du site, du guide de démarrage ou du README ; rien n’a été testé de façon indépendante.**',
        ],
        items: [
          '**Conversation vocale.** Entrée vocale en temps réel, interruption vocale sans casque, prise de parole initiée par l’IA en option et affichage des pensées intérieures de l’IA, qui ne sont pas lues à voix haute.',
          '**Avatar Live2D.** Modèles Cubism 3 à 5, correspondance des expressions pilotée par le backend, interaction tactile et modèles personnels importés.',
          '**Vision et outils.** Entrée caméra, écran et captures d’écran, appels d’outils MCP et, selon le site, contrôle du navigateur.',
          '**Modèles interchangeables.** Modèles de langage via Ollama, toute API compatible OpenAI, Gemini, Claude, Mistral, DeepSeek, GGUF, LM Studio ou vLLM ; reconnaissance via sherpa-onnx, FunASR ou des variantes de Whisper ; voix via sherpa-onnx, Coqui-TTS, Bark, Fish Audio, Azure et d’autres.',
          '**Streaming et groupes.** Un client intégré de chat en direct Bilibili, le chat de groupe avec plusieurs personnages IA et un historique de discussions enregistré.',
        ],
        note: 'Le site décrit une mémoire à long terme fondée sur Letta, alors que le README indique qu’elle est temporairement retirée ; voir la liste des points non vérifiés.',
      },
      privacy: {
        id: 'privacy',
        title: 'Local ou cloud : flux de données',
        content: [
          '**Le projet affirme que tout peut fonctionner hors ligne avec des modèles locaux et que les conversations restent alors sur votre appareil ; il ne publie pas de politique de confidentialité, et les pages consultées ne mentionnent pas la télémétrie.** Dans une configuration entièrement locale (par exemple Ollama pour le modèle, plus une reconnaissance et une voix locales), l’audio et le texte sont traités sur votre ordinateur. Le logiciel est libre, l’affirmation peut donc être vérifiée dans le code.',
          '**Chaque composant que vous basculez vers une option cloud envoie des données à ce fournisseur.** Les choix cloud pris en charge incluent les API compatibles OpenAI, Gemini, Claude, Groq Whisper et Azure ; l’exemple du guide utilise Edge TTS pour la voix, ce qui exige une connexion internet. Les modèles et dépendances sont téléchargés pendant l’installation : la première installation se fait donc en ligne.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations des mainteneurs, pas des résultats d’audit. PromptQuorum n’a ni lu le code ni inspecté le trafic réseau, et une configuration n’est jamais plus privée que son composant le moins privé.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        items: [
          '**Bricoleurs et développeurs** qui veulent relier leurs propres composants de voix, de langage et de synthèse à un avatar.',
          '**Streamers et amateurs de chat avec personnages** qui veulent un personnage Live2D parlant sous leur contrôle, y compris en « pet » de bureau.',
          '**Utilisateurs soucieux de confidentialité** prêts à exécuter chaque composant en local et à le vérifier eux-mêmes.',
        ],
      },
      whoShouldNot: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité et vitesse.** PromptQuorum n’a mesuré ni la latence, ni la précision de reconnaissance, ni la qualité de la voix, ni le matériel nécessaire pour une conversation fluide.',
          '**Perspectives de maintenance.** Le README indique qu’une réécriture complète en v2.0 est en phase de planification et demande de ne pas soumettre de demandes de fonctions pour la v1 ; il ne dit pas si la v1 recevra d’autres correctifs.',
          '**Mémoire à long terme.** Le site décrit une mémoire fondée sur Letta, le README la dit temporairement retirée ; nous n’avons pas vérifié laquelle des deux affirmations vaut pour la version 1.2.1.',
          '**Usage commercial des avatars.** Selon le README, les moyennes et grandes entreprises peuvent avoir besoin d’une autorisation supplémentaire de Live2D Inc. pour les modèles Live2D d’exemple ; les autres modèles ont leurs propres licences.',
          '**Signature du client de bureau.** La documentation indique que le client n’est pas signé et peut déclencher des alertes de sécurité ; nous n’avons pas vérifié si les installeurs sont sûrs par ailleurs.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: [
          'Appli',
          'Plateformes',
          'Prix / licence',
          'Différence principale',
        ],
        rows: [
          {
            Appli: '[SillyTavern](/fr/local-llms/sillytavern-review)',
            Plateformes: 'macOS, Windows, Linux, web',
            'Prix / licence': 'Gratuit / AGPL 3.0',
            'Différence principale': 'Interface de jeu de rôle centrée sur le texte, articulée autour des lorebooks et de la gestion de personas',
          },
          {
            Appli: '[RisuAI](/fr/power-local-llm/risuai-review)',
            Plateformes: 'Web, macOS, Windows, Linux',
            'Prix / licence': 'Gratuit / GPL 3.0',
            'Différence principale': 'Interface de jeu de rôle adaptée au mobile, avec des versions de bureau',
          },
          {
            Appli: '[Agnai](/fr/power-local-llm/agnai-review)',
            Plateformes: 'Web',
            'Prix / licence': 'Gratuit / AGPL-3.0',
            'Différence principale': 'Interface de jeu de rôle avec fiches de personnages et conversations de groupe multi-utilisateurs',
          },
          {
            Appli: '[Backyard AI](/fr/power-local-llm/backyard-ai-review-local-roleplay-2026)',
            Plateformes: 'macOS, Windows',
            'Prix / licence': 'Freemium / Code fermé',
            'Différence principale': 'Client de bureau pour chat avec personnages, avec Character Hub intégré et un seul installeur',
          },
        ],
        note: 'Ce sont des applications de la même catégorie issues du répertoire PromptQuorum ; vérifiez prix, licence et plateformes actuels sur la page de chacune.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Peut-on l’utiliser sans GPU ?',
            a: 'Oui, si vous confiez les parties lourdes à des API : selon le guide de démarrage, chaque composant peut utiliser une API, et un modèle local plus léger ou une reconnaissance adaptée au CPU est possible. Pour un usage local, Apple silicon, un GPU Nvidia ou un GPU AMD récent sont recommandés.',
          },
          {
            q: 'Puis-je utiliser mon propre modèle Live2D ?',
            a: 'Oui : placez le dossier du modèle dans live2d-models, déclarez-le dans model_dict.json et sélectionnez-le dans la configuration du personnage. Les modèles Cubism 3 à 5 fonctionnent, pas Cubism 2 ; vérifiez aussi la licence du modèle.',
          },
          {
            q: 'Puis-je lui parler depuis mon téléphone ?',
            a: 'Le projet indique qu’on peut lancer le serveur sur un ordinateur et l’ouvrir depuis un autre appareil, mais le micro du navigateur ne fonctionne qu’en localhost ou en HTTPS ; l’accès à distance demande donc une configuration HTTPS.',
          },
          {
            q: 'Peut-il participer à un live ?',
            a: 'Il dispose d’un client intégré de chat en direct Bilibili qui reçoit les messages des spectateurs ; les autres plateformes nécessitent une interface que vous implémentez vous-même.',
          },
          {
            q: 'Quel navigateur fonctionne le mieux ?',
            a: 'Le guide de démarrage recommande uniquement Chrome et signale des problèmes connus avec Edge et Safari.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Open-LLM-VTuber est un moyen libre et gratuit de bâtir un compagnon Live2D à commande vocale à partir de composants de votre choix, avec une voie documentée vers un fonctionnement entièrement hors ligne. En face : une installation de type développeur, une configuration d’exemple qui utilise encore une voix en ligne, aucune mise à jour fonctionnelle du dépôt depuis le 11 février 2026, et des affirmations de qualité que nous n’avons pas pu vérifier. Il convient aux bricoleurs à l’aise avec un terminal, prêts à le traiter comme un projet peut-être plus maintenu ; qui veut une application suivie et aboutie doit d’abord le tester avec soin.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site d’Open-LLM-VTuber](https://open-llm-vtuber.github.io) — présentation du projet et liste des fonctions, consulté le 24 octobre 2026.',
          '[Guide de démarrage](https://open-llm-vtuber.github.io/en/docs/quick-start) — prérequis, étapes d’installation et notes sur le client de bureau, consulté le 24 octobre 2026.',
          '[Open-LLM-VTuber sur GitHub](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) — README, licence MIT, mention Live2D et historique des commits, consultés le 24 octobre 2026.',
          '[Versions du backend](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/releases) — version 1.2.1 et fichiers à télécharger, consultés le 24 octobre 2026.',
          '[Versions du client de bureau](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases) — installeurs Windows et macOS, consultés le 24 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[SillyTavern, Agnai et RisuAI comparés](/fr/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — trois interfaces de jeu de rôle comparées.',
          '[Test de HiWaifu](/fr/power-local-llm/hiwaifu-review) — une application de compagnon IA pour téléphone.',
          '[Test de SillyTavern](/fr/local-llms/sillytavern-review) — une interface auto-hébergée de chat avec personnages et lorebooks.',
          '[Répertoire des logiciels de LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Creative & Roleplay',
    heroImage: '/images/open-llm-vtuber-review-hero-ja.webp',
    title: 'Open-LLM-VTuber レビュー：Live2Dアバター付きの自前ホスト型音声チャット',
    seoTitle: 'Open-LLM-VTuber レビュー：Live2D音声AIコンパニオン',
    intro: 'Open-LLM-VTuberは、音声で言語モデルと会話し、画面上のLive2Dキャラクターが返答する無料のオープンソースプロジェクトです。Windows、macOS、Linuxで自分で動かし、音声認識・言語モデル・音声合成の各部品を自分で選びます。本レビューは、プロジェクトのウェブサイト、GitHubリポジトリ、リリースページ（2026年10月24日確認）に基づいており、PromptQuorumは実機での動作テストを行っていません。',
    metaDescription: 'Open-LLM-VTuberのレビュー。Live2Dアバター付きの無料（MIT）音声チャットを自前で動かす方法。導入の手間、ローカルとクラウドの部分、更新停止の警告を整理します。',
    twitterDescription: 'Open-LLM-VTuberのレビュー：Live2Dアバター付きの自前ホスト型音声コンパニオン。導入、オフライン利用、保守状況について、情報源が確認していることと確認していないこと。',
    audience: 'アニメーションするアバター付きの音声AIコンパニオンを自分の管理下で使いたい開発好きの人、配信者、ロールプレイ愛好者。導入の手間、ローカルに残るもの、プロジェクトの保守状況を知りたい方向けです。',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Open-LLM-VTuber レビュー',
    targetKeywords: [
      'open-llm-vtuber レビュー',
      'open-llm-vtuber',
      'live2d aiコンパニオン',
      '自前ホスト 音声チャット ai',
      'ローカル ai vtuber',
      'aiコンパニオン デスクトップペット',
      'open-llm-vtuber.github.io',
    ],
    current_models_mentioned: [
      'Ollama',
      'sherpa-onnx',
      'Faster-Whisper',
    ],
    current_hardware_mentioned: [
      'Apple silicon',
      'Nvidia GPU',
    ],
    leadAnswerBlock: '**Open-LLM-VTuber（バージョン1.2.1）は、Live2Dアバター付きの無料のオープンソース音声チャットコンパニオンで、Windows、macOS、Linuxに自分でインストールして動かします。** プロジェクトによれば、すべての部品をローカルにすれば完全オフラインで動作しますが、導入はターミナルで行う必要があり、リポジトリには2026年2月11日以降、機能面の変更がありません。',
    quickAnswerTop: {
      ja: {
        question: 'Open-LLM-VTuberは本当にオフラインで動きますか？',
        answer: 'プロジェクトによれば、音声認識・言語モデル・音声合成にローカルの部品を選べば動きます。ただしクイックスタートの例ではOllamaとsherpa-onnxにEdge TTSの音声を組み合わせており、ガイドはその音声にネットワーク接続が必要だと記しています。',
        bullets: [
          'ヘッドホンなしでも音声でAIの発話を遮れます。プロジェクトによれば、AIは自分の声を聞き取りません。',
          'カメラ、画面録画、スクリーンショットによる画像入力に対応しています。',
          'デスクトップクライアントには、アバターを他のウィンドウの上に浮かべる透過のペットモードがあります。',
          'MCPプロトコルで外部ツールを呼び出せます。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '簡単な回答',
        anchor: 'quick-answer',
      },
      {
        label: 'Open-LLM-VTuberとは',
        anchor: 'what-is-open-llm-vtuber',
      },
      {
        label: '入手方法',
        anchor: 'get-it',
      },
      {
        label: '動作要件',
        anchor: 'requirements',
      },
      {
        label: '情報源で確認できた機能',
        anchor: 'key-features',
      },
      {
        label: 'ローカルかクラウドか：データの流れ',
        anchor: 'privacy',
      },
      {
        label: 'こんな人に向いています',
        anchor: 'who-should-use',
      },
      {
        label: '確認できなかったこと',
        anchor: 'who-should-not-use',
      },
      {
        label: '競合と代替',
        anchor: 'vs-alternatives',
      },
      {
        label: 'よくある質問',
        anchor: 'faq',
      },
      {
        label: '総評',
        anchor: 'verdict',
      },
      {
        label: '情報源',
        anchor: 'sources',
      },
      {
        label: '関連記事',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Open-LLM-VTuberは、音声認識、言語モデル、音声合成をアニメーションするLive2Dキャラクターにつなぎ、声で会話できるようにする自前ホスト型のプログラムです。',
          },
          {
            type: 'plain-terms',
            text: '自分のコンピューターで小さなサーバーを起動し、Chromeまたはデスクトップクライアントでそのページをひらいてアニメ風のキャラクターと会話します。どの部品を手元で動かし、どれをクラウドサービスに任せるかは自分で決められます。',
          },
        ],
        items: [
          '保守：最新リリースは2025年8月26日で、READMEによればメンテナーはv2.0への全面書き直しに集中しており、v1への機能要望は控えるよう求めています。',
          '費用：有料プランはなく、READMEに寄付ページへのリンクがあります。',
          'ライセンス：コードはMIT。同梱のLive2Dサンプルモデルは別のLive2Dライセンスです。',
          '導入：バックエンドはターミナルからインストールします。Electron製のデスクトップクライアントは画面側だけです。',
          '構成：音声認識、言語モデル、音声は別々に選べるため、ローカルとクラウドを混在できます。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '2026年2月11日以降、機能面の更新はありません。最新リリースは2025年8月26日で、それより新しい唯一のコミット（2026年5月15日）はREADMEの修正でした。プロジェクトは保守されていない可能性があります。頼る前にリポジトリを確認してください。',
          },
          {
            type: 'note',
            text: '本レビューは、[プロジェクトのウェブサイト](https://open-llm-vtuber.github.io)、[GitHubリポジトリ](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber)、およびリリースページ（2026年10月24日確認）に基づきます。PromptQuorumはソフトウェアをインストールも実行もしていないため、音質、遅延、アバターの挙動は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-open-llm-vtuber',
        title: 'Open-LLM-VTuberとは',
        content: [
          '**Open-LLM-VTuberは音声で対話するAIコンパニオンです。話しかけると言語モデルが答え、Live2Dキャラクターが表情と合成音声で反応します。** リポジトリは、ハンズフリーの音声対話と音声による割り込みで任意のLLMと話せるもので、複数のプラットフォームでローカルに動くと説明しています。MITライセンスのコードはLICENSEファイルでYi-Ting Chiu氏の著作権とされており、プロジェクトはGitHub上のコミュニティとして運営されています。',
          '**名前は、Windows以外でもオフラインで動くオープンな部品で、クローズドソースのAI VTuber「neuro-sama」を再現するという当初の目標に由来します。** 現在は汎用のコンパニオンやキャラクターチャットとして使われ、Webインターフェースと、ウィンドウモードおよびデスクトップペットモードを備えたElectron製デスクトップクライアントがあります。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Open-LLM-VTuberは、Windows、macOS、Linux上のバックエンドサーバーとしてインストールし、デスクトップクライアントやブラウザのページがそこへ接続します。**',
        ],
        columns: [
          '項目',
          '入手方法',
        ],
        rows: [
          {
            '項目': 'バックエンド（全OS）',
            '入手方法': '[GitHub Releases](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/releases)のOpen-LLM-VTuber-v1.2.1-en.zip、またはrecursiveオプション付きのgit clone',
          },
          {
            '項目': 'デスクトップクライアント（Windows）',
            '入手方法': '[クライアントのリリース](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases)の.exeインストーラー。バックエンドの起動が前提',
          },
          {
            '項目': 'デスクトップクライアント（macOS）',
            '入手方法': '[クライアントのリリース](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases)の.dmg。バックエンドの起動が前提',
          },
          {
            '項目': 'ウェブサイト',
            '入手方法': '[open-llm-vtuber.github.io](https://open-llm-vtuber.github.io)',
          },
          {
            '項目': 'プライバシーポリシー',
            '入手方法': 'ウェブサイトにもリポジトリにも、プライバシーポリシーのページは見つかりませんでした',
          },
          {
            '項目': 'ソースコード',
            '入手方法': '[github.com/Open-LLM-VTuber/Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber)、MITライセンス',
          },
        ],
        note: '確認したバージョンは1.2.1で、GitHub Releasesページによれば2025年8月26日の公開です。デスクトップクライアントの1.2.1は2025年8月21日に出ています。バックエンドにはターミナルと開発ツール（Git、FFmpeg、uv、Python 3.10〜3.12）が必要で、ダブルクリックで入るタイプではありません。クイックスタートの文書は、署名のないデスクトップクライアントがOSのセキュリティ警告を出すことがあると注意しています。アプリは無料です。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: [
          '**プロジェクトは固定の最低要件を示していません。必要なものは、どの部品をローカルで動かし、どれをAPIで呼ぶかによって変わります。**',
        ],
        columns: [
          '項目',
          '情報源の記述',
        ],
        rows: [
          {
            '項目': '最低限',
            '情報源の記述': '重い部品（音声認識、言語モデル、音声）をすべてAPIにすれば、クイックスタートによればRaspberry Piでもホストできます',
          },
          {
            '項目': 'ローカル利用',
            '情報源の記述': '推奨：Apple siliconのMac、Nvidia GPU、最近のAMD GPU、またはGPUの代わりになる強力なCPU',
          },
          {
            '項目': 'ツール',
            '情報源の記述': 'Git、FFmpeg（必須）、uv。Python 3.10以上3.13未満。Nvidia GPUの利用にはCUDA ToolkitとcuDNN',
          },
          {
            '項目': 'ブラウザ',
            '情報源の記述': '推奨はChromeのみ。EdgeとSafariには既知の問題があります',
          },
          {
            '項目': 'リモート接続',
            '情報源の記述': '別の端末から使うにはHTTPSが必要です。ブラウザはマイクを安全なコンテキストでのみ許可するためです',
          },
        ],
        note: 'これらはプロジェクト自身の記述です。PromptQuorumはどのハードウェアでもメモリ使用量や速度を測定していません。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下はすべてウェブサイト、クイックスタート、READMEの記述に基づくもので、独自のテストは行っていません。**',
        ],
        items: [
          '**音声会話。** リアルタイムの音声入力、ヘッドホンなしの音声割り込み、AIからの発話開始（任意）、読み上げられないAIの内心の表示。',
          '**Live2Dアバター。** Cubism 3〜5のモデル、バックエンドから制御する表情マッピング、タッチ操作、自分のモデルの読み込み。',
          '**画像とツール。** カメラ、画面、スクリーンショットの入力、MCPツール呼び出し、ウェブサイトによればブラウザ操作。',
          '**差し替え可能なモデル。** 言語モデルはOllama、OpenAI互換API、Gemini、Claude、Mistral、DeepSeek、GGUF、LM Studio、vLLMなど。音声認識はsherpa-onnx、FunASR、Whisper系。音声合成はsherpa-onnx、Coqui-TTS、Bark、Fish Audio、Azureなど。',
          '**配信とグループ。** Bilibiliライブチャットのクライアント内蔵、複数のAIキャラクターによるグループチャット、チャット履歴の保存。',
        ],
        note: 'ウェブサイトはLettaによる長期記憶を説明していますが、READMEは長期記憶が一時的に削除されていると述べています。未確認事項の一覧を参照してください。',
      },
      privacy: {
        id: 'privacy',
        title: 'ローカルかクラウドか：データの流れ',
        content: [
          '**プロジェクトは、ローカルモデルを使えばすべてオフラインで動作し、会話は端末内に残ると述べています。ただしプライバシーポリシーは公開されておらず、確認したページにテレメトリへの言及もありません。** 完全にローカルな構成（たとえばモデルにOllama、認識と音声もローカル）では、音声とテキストは自分のコンピューター上で処理されます。ソフトウェア自体はオープンソースなので、この主張はコードで確認できます。',
          '**クラウドの選択肢に切り替えた部品は、その事業者にデータを送ります。** 対応するクラウドの選択肢には、OpenAI互換API、Gemini、Claude、Groq Whisper、Azureなどがあり、クイックスタートの例は音声にEdge TTSを使うためインターネット接続が必要です。モデルや依存ファイルはセットアップ中にダウンロードされるので、初回のインストールはオンラインで行います。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらはメンテナーの表明であり、監査結果ではありません。PromptQuorumはコードを読んでおらず、ネットワーク通信も検査していません。構成のプライバシーは、最もプライバシーに配慮の薄い部品の水準にとどまります。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'こんな人に向いています',
        items: [
          '**開発好きの人と開発者**：自分の音声・言語・合成の部品をアバターにつなぎたい人。',
          '**配信者とキャラクターチャットの愛好者**：デスクトップペットを含め、話すLive2Dキャラクターを自分の管理下で使いたい人。',
          '**プライバシーを重視する人**：すべての部品をローカルで動かし、自分で検証する意思のある人。',
        ],
      },
      whoShouldNot: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        items: [
          '**品質と速度。** PromptQuorumは、遅延、認識精度、音声品質、滑らかな会話に必要なハードウェアを測定していません。',
          '**保守の見通し。** READMEはv2.0への全面書き直しが初期の計画段階にあるとし、v1への機能要望は控えるよう求めていますが、v1に今後修正が入るかは書かれていません。',
          '**長期記憶。** ウェブサイトはLettaによる記憶を説明し、READMEは一時的に削除されていると述べています。バージョン1.2.1でどちらが正しいかは確認していません。',
          '**アバターの商用利用。** READMEによれば、中規模以上の企業がLive2Dサンプルモデルを使う場合はLive2D Inc.の追加許諾が必要になることがあります。他のモデルには各自のライセンスがあります。',
          '**デスクトップクライアントの署名。** 文書はクライアントが未署名でセキュリティ警告が出ることがあると述べています。インストーラーがそれ以外の点で安全かは確認していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替',
        columns: [
          'アプリ',
          '対応環境',
          '価格／ライセンス',
          '主な違い',
        ],
        rows: [
          {
            'アプリ': '[SillyTavern](/ja/local-llms/sillytavern-review)',
            '対応環境': 'macOS、Windows、Linux、Web',
            '価格／ライセンス': '無料／AGPL 3.0',
            '主な違い': 'ロアブックとペルソナ管理を軸にした、テキスト中心のロールプレイ用フロントエンド',
          },
          {
            'アプリ': '[RisuAI](/ja/power-local-llm/risuai-review)',
            '対応環境': 'Web、macOS、Windows、Linux',
            '価格／ライセンス': '無料／GPL 3.0',
            '主な違い': 'モバイル向けに使いやすいロールプレイ用フロントエンド。デスクトップ版あり',
          },
          {
            'アプリ': '[Agnai](/ja/power-local-llm/agnai-review)',
            '対応環境': 'Web',
            '価格／ライセンス': '無料／AGPL-3.0',
            '主な違い': 'キャラクターカードと複数ユーザーのグループ会話に対応したロールプレイ用フロントエンド',
          },
          {
            'アプリ': '[Backyard AI](/ja/power-local-llm/backyard-ai-review-local-roleplay-2026)',
            '対応環境': 'macOS、Windows',
            '価格／ライセンス': 'フリーミアム／クローズドソース',
            '主な違い': 'Character Hub内蔵で、インストーラー1つのキャラクターチャット用デスクトップクライアント',
          },
        ],
        note: 'いずれもPromptQuorumのディレクトリにある同カテゴリのアプリです。最新の価格・ライセンス・対応環境は各アプリのページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'GPUなしでも動きますか？',
            a: '重い部分をAPIに任せれば動きます。クイックスタートによれば各部品はAPIを使えますし、軽いローカルモデルやCPU向けの音声認識も選べます。ローカル利用にはApple silicon、Nvidia GPU、最近のAMD GPUが推奨されています。',
          },
          {
            q: '自分のLive2Dモデルは使えますか？',
            a: '使えます。モデルのフォルダーをlive2d-modelsに置き、model_dict.jsonに登録して、キャラクター設定で選びます。Cubism 3〜5のモデルは動作し、Cubism 2は動作しません。モデル自体のライセンスも確認してください。',
          },
          {
            q: 'スマートフォンから話しかけられますか？',
            a: 'プロジェクトによれば、サーバーを1台のコンピューターで動かし、別の端末から開けます。ただしブラウザのマイクはlocalhostかHTTPSでしか動かないため、リモート利用にはHTTPSの設定が必要です。',
          },
          {
            q: 'ライブ配信に参加できますか？',
            a: '視聴者のメッセージを受け取るBilibiliライブチャットのクライアントが内蔵されています。他のプラットフォームには、自分でインターフェースを実装する必要があります。',
          },
          {
            q: 'どのブラウザが最適ですか？',
            a: 'クイックスタートはChromeのみを推奨し、EdgeとSafariには既知の問題があるとしています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'Open-LLM-VTuberは、自分で選んだ部品から音声操作のLive2Dコンパニオンを組み立てられる無料のオープンソースの選択肢で、すべてをオフラインで動かす手順も文書化されています。一方で、導入は開発者向けの手順で、例示の構成には依然としてオンライン音声が含まれ、リポジトリには2026年2月11日以降の機能面の更新がなく、品質に関する主張はここでは確認できませんでした。ターミナルを使えて、すでに保守されていないかもしれないプロジェクトとして付き合える開発好きの人に向いています。サポートと完成度が必要な人は、まず慎重に試してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Open-LLM-VTuberのウェブサイト](https://open-llm-vtuber.github.io) — プロジェクト概要と機能一覧（2026年10月24日確認）。',
          '[クイックスタートガイド](https://open-llm-vtuber.github.io/en/docs/quick-start) — 要件、インストール手順、デスクトップクライアントの注意（2026年10月24日確認）。',
          '[GitHubのOpen-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) — README、MITライセンス、Live2Dの注記、コミット履歴（2026年10月24日確認）。',
          '[バックエンドのリリース](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/releases) — バージョン1.2.1とダウンロードファイル（2026年10月24日確認）。',
          '[デスクトップクライアントのリリース](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases) — WindowsとmacOSのインストーラー（2026年10月24日確認）。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[SillyTavern・Agnai・RisuAIの比較](/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 3つのロールプレイ用フロントエンドの比較。',
          '[HiWaifuレビュー](/ja/power-local-llm/hiwaifu-review) — スマートフォン向けのAIコンパニオンアプリ。',
          '[SillyTavernレビュー](/ja/local-llms/sillytavern-review) — ロアブックに対応した自前ホスト型のキャラクターチャット用フロントエンド。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Creative & Roleplay',
    heroImage: '/images/open-llm-vtuber-review-hero-pt.webp',
    title: 'Análise do Open-LLM-VTuber: chat de voz auto-hospedado com avatar Live2D',
    seoTitle: 'Análise do Open-LLM-VTuber: companheiro de voz com IA',
    intro: 'O Open-LLM-VTuber é um projeto gratuito e de código aberto que permite conversar por voz com um modelo de linguagem enquanto um personagem Live2D responde na tela. Você mesmo o executa no Windows, macOS ou Linux e escolhe os componentes de reconhecimento de voz, modelo de linguagem e voz. Esta análise se baseia no site do projeto, no repositório do GitHub e nas páginas de versões, consultados em 24 de outubro de 2026; a PromptQuorum não testou o software na prática.',
    metaDescription: 'Análise do Open-LLM-VTuber: chat de voz gratuito (MIT) com avatar Live2D para auto-hospedar. Instalação, partes locais ou na nuvem e alerta de atualização.',
    twitterDescription: 'Análise do Open-LLM-VTuber: companheiro de voz auto-hospedado com avatar Live2D. O que as fontes confirmam sobre instalação, uso offline e manutenção, e o que não confirmam.',
    audience: 'Entusiastas, streamers e fãs de RPG que querem um companheiro de IA por voz com avatar animado sob seu controle e precisam saber o esforço de instalação, o que fica local e o quanto o projeto é mantido.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise Open-LLM-VTuber',
    targetKeywords: [
      'análise open-llm-vtuber',
      'open-llm-vtuber',
      'companheiro ia live2d',
      'chat de voz ia auto-hospedado',
      'vtuber ia local',
      'companheiro ia desktop',
      'open-llm-vtuber.github.io',
    ],
    current_models_mentioned: [
      'Ollama',
      'sherpa-onnx',
      'Faster-Whisper',
    ],
    current_hardware_mentioned: [
      'Apple silicon',
      'Nvidia GPU',
    ],
    leadAnswerBlock: '**O Open-LLM-VTuber (versão 1.2.1) é um companheiro de chat de voz gratuito e de código aberto com avatar Live2D, que você instala e executa por conta própria no Windows, macOS ou Linux.** Segundo o projeto, ele pode rodar totalmente offline quando todos os componentes são locais, mas a instalação é feita no terminal e o repositório não tem alteração funcional desde 11 de fevereiro de 2026.',
    quickAnswerTop: {
      pt: {
        question: 'O Open-LLM-VTuber realmente funciona offline?',
        answer: 'Segundo o projeto, sim, se você escolher componentes locais para o reconhecimento de voz, o modelo de linguagem e a voz. O exemplo do guia de início, porém, combina Ollama e sherpa-onnx com o Edge TTS para a voz, e o guia lista uma conexão de rede como requisito para ele.',
        bullets: [
          'Você pode interromper a IA por voz sem fones de ouvido; o projeto diz que ela não ouve a própria voz.',
          'Há suporte a entrada de imagem por câmera, gravações de tela e capturas de tela.',
          'O cliente desktop tem um modo pet transparente que deixa o avatar flutuando sobre outras janelas.',
          'Ferramentas externas podem ser chamadas pelo protocolo MCP.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Resposta rápida',
        anchor: 'quick-answer',
      },
      {
        label: 'O que é o Open-LLM-VTuber?',
        anchor: 'what-is-open-llm-vtuber',
      },
      {
        label: 'Como obter',
        anchor: 'get-it',
      },
      {
        label: 'Requisitos',
        anchor: 'requirements',
      },
      {
        label: 'Recursos confirmados pelas fontes',
        anchor: 'key-features',
      },
      {
        label: 'Local ou nuvem: fluxo de dados',
        anchor: 'privacy',
      },
      {
        label: 'Para quem serve',
        anchor: 'who-should-use',
      },
      {
        label: 'O que não conseguimos verificar',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Concorrentes e alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Perguntas frequentes',
        anchor: 'faq',
      },
      {
        label: 'Veredito',
        anchor: 'verdict',
      },
      {
        label: 'Fontes',
        anchor: 'sources',
      },
      {
        label: 'Leituras relacionadas',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Open-LLM-VTuber é um programa auto-hospedado que liga um reconhecedor de voz, um modelo de linguagem e uma voz de síntese a um personagem Live2D animado, para você conversar falando com ele.',
          },
          {
            type: 'plain-terms',
            text: 'Você inicia um pequeno servidor no seu próprio computador, abre a página dele no Chrome ou no cliente desktop e conversa com um personagem de desenho; você decide quais partes rodam na sua máquina e quais chamam um serviço na nuvem.',
          },
        ],
        items: [
          'Manutenção: a versão mais recente é de 26 de agosto de 2025; segundo o README, os mantenedores estão concentrados em uma reescrita completa v2.0 e pedem que não se abram solicitações de recursos para a v1.',
          'Custo: sem plano pago; o README aponta uma página de doações.',
          'Licença: MIT para o código; os modelos Live2D de exemplo incluídos ficam sob uma licença separada da Live2D.',
          'Instalação: o backend é instalado pelo terminal; o cliente desktop Electron é apenas uma interface.',
          'Componentes: reconhecimento de voz, modelo de linguagem e voz são escolhas separadas, então uma configuração pode misturar partes locais e na nuvem.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Nenhuma atualização funcional desde 11 de fevereiro de 2026. A versão mais recente é de 26 de agosto de 2025, e o único commit posterior (15 de maio de 2026) só alterou o README. O projeto pode não estar mais sendo mantido: verifique o repositório antes de depender dele.',
          },
          {
            type: 'note',
            text: 'Esta análise se baseia no [site do projeto](https://open-llm-vtuber.github.io), no [repositório do GitHub](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) e nas páginas de versões, consultados em 24 de outubro de 2026. A PromptQuorum não instalou nem executou o software, portanto qualidade de áudio, latência e comportamento do avatar não foram avaliados.',
          },
        ],
      },
      overview: {
        id: 'what-is-open-llm-vtuber',
        title: 'O que é o Open-LLM-VTuber?',
        content: [
          '**O Open-LLM-VTuber é um companheiro de IA de interação por voz: você fala, um modelo de linguagem responde e um personagem Live2D reage com expressões e uma voz sintetizada.** O repositório o descreve como conversar com qualquer LLM com interação de voz sem as mãos e interrupção por voz, rodando localmente em várias plataformas. O código, sob licença MIT, está em nome de Yi-Ting Chiu no arquivo LICENSE, e o projeto funciona como uma comunidade no GitHub.',
          '**O nome vem do objetivo de recriar o VTuber de IA de código fechado neuro-sama com componentes abertos que rodem offline em sistemas além do Windows.** Hoje é usado como companheiro geral ou chat com personagens, com interface web e um cliente desktop Electron com modo janela e modo pet de área de trabalho.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O Open-LLM-VTuber é instalado como servidor backend no Windows, macOS ou Linux; o cliente desktop e a página do navegador se conectam a ele.**',
        ],
        columns: [
          'Opção',
          'Como obter',
        ],
        rows: [
          {
            'Opção': 'Backend (todos os sistemas)',
            'Como obter': 'Open-LLM-VTuber-v1.2.1-en.zip nas [GitHub Releases](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/releases), ou git clone com a opção recursiva',
          },
          {
            'Opção': 'Cliente desktop, Windows',
            'Como obter': 'Instalador .exe nas [versões do cliente](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases); o backend precisa estar em execução',
          },
          {
            'Opção': 'Cliente desktop, macOS',
            'Como obter': 'Arquivo .dmg nas [versões do cliente](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases); o backend precisa estar em execução',
          },
          {
            'Opção': 'Site',
            'Como obter': '[open-llm-vtuber.github.io](https://open-llm-vtuber.github.io)',
          },
          {
            'Opção': 'Política de privacidade',
            'Como obter': 'Nenhuma página de política de privacidade foi encontrada no site nem no repositório',
          },
          {
            'Opção': 'Código-fonte',
            'Como obter': '[github.com/Open-LLM-VTuber/Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber), licença MIT',
          },
        ],
        note: 'Versão analisada: 1.2.1, publicada em 26 de agosto de 2025 segundo a página do GitHub Releases; o cliente desktop 1.2.1 saiu em 21 de agosto de 2025. O backend exige terminal e ferramentas de desenvolvimento (Git, FFmpeg, uv, Python 3.10 a 3.12), então não é uma instalação com clique duplo. A documentação de início avisa que o cliente desktop sem assinatura pode gerar alertas de segurança do sistema operacional. O app é gratuito.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**O projeto não define um mínimo fixo; o que você precisa depende de quais componentes roda localmente e de quais usa por API.**',
        ],
        columns: [
          'Item',
          'O que as fontes dizem',
        ],
        rows: [
          {
            Item: 'Mínimo',
            'O que as fontes dizem': 'Se todos os componentes pesados (reconhecimento de voz, modelo de linguagem, voz) usarem uma API, o guia diz que até um Raspberry Pi pode hospedá-lo',
          },
          {
            Item: 'Uso local',
            'O que as fontes dizem': 'Recomendado: um Mac com Apple silicon, uma GPU Nvidia, uma GPU AMD recente ou uma CPU forte o bastante para substituí-la',
          },
          {
            Item: 'Ferramentas',
            'O que as fontes dizem': 'Git, FFmpeg (obrigatório) e uv; Python 3.10 ou superior, mas abaixo de 3.13; CUDA Toolkit e cuDNN para usar GPU Nvidia',
          },
          {
            Item: 'Navegador',
            'O que as fontes dizem': 'Só o Chrome é recomendado; Edge e Safari têm problemas conhecidos',
          },
          {
            Item: 'Acesso remoto',
            'O que as fontes dizem': 'Usar o servidor de outro dispositivo exige HTTPS, pois os navegadores só permitem o microfone em contexto seguro',
          },
        ],
        note: 'Estas são declarações do próprio projeto; a PromptQuorum não mediu uso de memória nem velocidade em nenhum hardware.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Tudo abaixo vem do site, do guia de início ou do README; nada foi testado de forma independente.**',
        ],
        items: [
          '**Conversa por voz.** Entrada de voz em tempo real, interrupção por voz sem fones, fala iniciada pela IA como opção e uma exibição dos pensamentos internos da IA que não são lidos em voz alta.',
          '**Avatar Live2D.** Modelos Cubism 3 a 5, mapeamento de expressões controlado pelo backend, interação por toque e modelos próprios importados.',
          '**Visão e ferramentas.** Entrada de câmera, tela e capturas de tela, chamadas de ferramentas MCP e, segundo o site, controle do navegador.',
          '**Modelos intercambiáveis.** Modelos de linguagem via Ollama, qualquer API compatível com OpenAI, Gemini, Claude, Mistral, DeepSeek, GGUF, LM Studio ou vLLM; reconhecimento via sherpa-onnx, FunASR ou variantes do Whisper; vozes via sherpa-onnx, Coqui-TTS, Bark, Fish Audio, Azure e outras.',
          '**Transmissão e grupos.** Um cliente integrado de chat ao vivo do Bilibili, chat em grupo com vários personagens de IA e histórico de conversas salvo.',
        ],
        note: 'O site descreve uma memória de longo prazo baseada no Letta, enquanto o README diz que ela foi removida temporariamente; veja a lista de itens não verificados.',
      },
      privacy: {
        id: 'privacy',
        title: 'Local ou nuvem: fluxo de dados',
        content: [
          '**O projeto diz que tudo pode rodar offline com modelos locais e que as conversas ficam então no seu dispositivo; ele não publica política de privacidade, e as páginas que lemos não mencionam telemetria.** Numa configuração totalmente local (por exemplo, Ollama para o modelo e reconhecimento e voz locais), áudio e texto são processados no seu computador. O software é de código aberto, então a afirmação pode ser conferida no código.',
          '**Cada componente que você troca para uma opção na nuvem envia dados a esse provedor.** As opções de nuvem compatíveis incluem APIs compatíveis com OpenAI, Gemini, Claude, Groq Whisper e Azure; o exemplo do guia usa o Edge TTS para a voz, o que exige conexão com a internet. Modelos e dependências são baixados durante a instalação, então a primeira instalação é online.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas são declarações dos mantenedores, não resultados de auditoria. A PromptQuorum não leu o código nem inspecionou o tráfego de rede, e uma configuração é tão privada quanto seu componente menos privado.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Entusiastas e desenvolvedores** que querem ligar seus próprios componentes de voz, linguagem e síntese a um avatar.',
          '**Streamers e fãs de chat com personagens** que querem um personagem Live2D falante sob seu controle, inclusive como pet de área de trabalho.',
          '**Usuários atentos à privacidade** dispostos a rodar cada componente localmente e verificá-lo por conta própria.',
        ],
      },
      whoShouldNot: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade e velocidade.** A PromptQuorum não mediu latência, precisão do reconhecimento, qualidade da voz nem o hardware necessário para uma conversa fluida.',
          '**Perspectiva de manutenção.** O README diz que uma reescrita completa v2.0 está em planejamento inicial e pede que não se abram solicitações de recursos para a v1; não informa se a v1 receberá novas correções.',
          '**Memória de longo prazo.** O site descreve uma memória baseada no Letta, o README diz que foi removida temporariamente; não verificamos qual afirmação vale para a versão 1.2.1.',
          '**Uso comercial dos avatares.** Segundo o README, empresas de médio ou grande porte podem precisar de permissão adicional da Live2D Inc. para os modelos Live2D de exemplo; outros modelos têm licenças próprias.',
          '**Assinatura do cliente desktop.** A documentação diz que o cliente não é assinado e pode gerar alertas de segurança; não verificamos se os instaladores são seguros em outros aspectos.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: [
          'App',
          'Plataformas',
          'Preço / licença',
          'Diferença principal',
        ],
        rows: [
          {
            App: '[SillyTavern](/pt/local-llms/sillytavern-review)',
            Plataformas: 'macOS, Windows, Linux, web',
            'Preço / licença': 'Grátis / AGPL 3.0',
            'Diferença principal': 'Interface de roleplay focada em texto, construída em torno de lorebooks e gestão de personas',
          },
          {
            App: '[RisuAI](/pt/power-local-llm/risuai-review)',
            Plataformas: 'Web, macOS, Windows, Linux',
            'Preço / licença': 'Grátis / GPL 3.0',
            'Diferença principal': 'Interface de roleplay amigável ao celular, com versões para desktop',
          },
          {
            App: '[Agnai](/pt/power-local-llm/agnai-review)',
            Plataformas: 'Web',
            'Preço / licença': 'Grátis / AGPL-3.0',
            'Diferença principal': 'Interface de roleplay com fichas de personagem e conversas em grupo para vários usuários',
          },
          {
            App: '[Backyard AI](/pt/power-local-llm/backyard-ai-review-local-roleplay-2026)',
            Plataformas: 'macOS, Windows',
            'Preço / licença': 'Freemium / Código fechado',
            'Diferença principal': 'Cliente desktop de chat com personagens, com Character Hub integrado e um único instalador',
          },
        ],
        note: 'São apps da mesma categoria do diretório da PromptQuorum; confirme preço, licença e plataformas atuais na página de cada um.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Dá para rodar sem GPU?',
            a: 'Sim, se você enviar as partes pesadas para APIs: segundo o guia de início, cada componente pode usar uma API, e é possível um modelo local mais leve ou um reconhecedor adequado à CPU. Para uso local, recomenda-se Apple silicon, uma GPU Nvidia ou uma GPU AMD recente.',
          },
          {
            q: 'Posso usar meu próprio modelo Live2D?',
            a: 'Sim: coloque a pasta do modelo em live2d-models, registre-a em model_dict.json e selecione-a na configuração do personagem. Modelos Cubism 3 a 5 funcionam, Cubism 2 não; confira também a licença do modelo.',
          },
          {
            q: 'Posso falar com ele pelo celular?',
            a: 'O projeto diz que você pode rodar o servidor em um computador e abri-lo em outro dispositivo, mas o microfone do navegador só funciona em localhost ou HTTPS; o acesso remoto exige, portanto, uma configuração HTTPS.',
          },
          {
            q: 'Ele consegue participar de uma live?',
            a: 'Tem um cliente integrado de chat ao vivo do Bilibili que recebe as mensagens dos espectadores; outras plataformas exigem uma interface que você mesmo implemente.',
          },
          {
            q: 'Qual navegador funciona melhor?',
            a: 'O guia de início recomenda apenas o Chrome e cita problemas conhecidos com Edge e Safari.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: 'O Open-LLM-VTuber é um caminho gratuito e de código aberto para montar um companheiro Live2D controlado por voz com os componentes que você escolher, com uma rota documentada para rodar tudo offline. Em contrapartida, a instalação é no estilo de desenvolvedor, a configuração de exemplo ainda usa voz online, o repositório não mostra alteração funcional desde 11 de fevereiro de 2026 e nenhuma de suas afirmações de qualidade pôde ser verificada aqui. Serve para entusiastas que usam o terminal e aceitam tratá-lo como um projeto que talvez não seja mais mantido; quem precisa de um app com suporte e acabamento deve testá-lo com cuidado antes.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Open-LLM-VTuber](https://open-llm-vtuber.github.io) — visão geral do projeto e lista de recursos, consultado em 24 de outubro de 2026.',
          '[Guia de início](https://open-llm-vtuber.github.io/en/docs/quick-start) — requisitos, passos de instalação e notas sobre o cliente desktop, consultado em 24 de outubro de 2026.',
          '[Open-LLM-VTuber no GitHub](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) — README, licença MIT, aviso da Live2D e histórico de commits, consultados em 24 de outubro de 2026.',
          '[Versões do backend](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/releases) — versão 1.2.1 e arquivos para download, consultados em 24 de outubro de 2026.',
          '[Versões do cliente desktop](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases) — instaladores para Windows e macOS, consultados em 24 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[SillyTavern, Agnai e RisuAI comparados](/pt/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — três interfaces de roleplay comparadas.',
          '[Análise do HiWaifu](/pt/power-local-llm/hiwaifu-review) — um app de companheiro de IA para celular.',
          '[Análise do SillyTavern](/pt/local-llms/sillytavern-review) — uma interface auto-hospedada de chat com personagens e lorebooks.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Creative & Roleplay',
    heroImage: '/images/open-llm-vtuber-review-hero-ar.webp',
    title: 'مراجعة Open-LLM-VTuber: محادثة صوتية ذاتية الاستضافة مع شخصية Live2D',
    seoTitle: 'مراجعة Open-LLM-VTuber: رفيق ذكاء اصطناعي صوتي Live2D',
    intro: 'Open-LLM-VTuber مشروع مجاني ومفتوح المصدر يتيح لك التحدث صوتيًا مع نموذج لغوي بينما تردّ شخصية Live2D على الشاشة. تشغّله بنفسك على Windows أو macOS أو Linux وتختار مكوّنات التعرف على الكلام والنموذج اللغوي والصوت. تستند هذه المراجعة إلى موقع المشروع ومستودع GitHub وصفحات الإصدارات، وقد جرى فحصها في 24 أكتوبر 2026؛ ولم تختبر PromptQuorum البرنامج عمليًا.',
    metaDescription: 'مراجعة Open-LLM-VTuber: محادثة صوتية مجانية (MIT) مع شخصية Live2D تستضيفها بنفسك. جهد التثبيت والأجزاء المحلية أو السحابية وتحذير توقف التحديثات.',
    twitterDescription: 'مراجعة Open-LLM-VTuber: رفيق صوتي ذاتي الاستضافة مع شخصية Live2D. ما تؤكده المصادر عن التثبيت والاستخدام دون اتصال والصيانة، وما لا تؤكده.',
    audience: 'للهواة والمذيعين ومحبي لعب الأدوار الذين يريدون رفيقًا صوتيًا بالذكاء الاصطناعي مع شخصية متحركة تحت سيطرتهم، ويحتاجون إلى معرفة جهد التثبيت وما يبقى محليًا ومدى صيانة المشروع.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Open-LLM-VTuber',
    targetKeywords: [
      'مراجعة open-llm-vtuber',
      'open-llm-vtuber',
      'رفيق ذكاء اصطناعي live2d',
      'محادثة صوتية ذكاء اصطناعي ذاتية الاستضافة',
      'vtuber محلي بالذكاء الاصطناعي',
      'رفيق ذكاء اصطناعي سطح المكتب',
      'open-llm-vtuber.github.io',
    ],
    current_models_mentioned: [
      'Ollama',
      'sherpa-onnx',
      'Faster-Whisper',
    ],
    current_hardware_mentioned: [
      'Apple silicon',
      'Nvidia GPU',
    ],
    leadAnswerBlock: '**Open-LLM-VTuber (الإصدار 1.2.1) رفيق محادثة صوتية مجاني ومفتوح المصدر مع شخصية Live2D، تثبّته وتشغّله بنفسك على Windows أو macOS أو Linux.** وفق المشروع يمكنه العمل دون اتصال بالكامل إذا كانت كل المكوّنات محلية، لكنه يحتاج إلى تثبيت عبر الطرفية، ولا يُظهر المستودع أي تغيير وظيفي منذ 11 فبراير 2026.',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل Open-LLM-VTuber فعلًا دون اتصال بالإنترنت؟',
        answer: 'وفق المشروع نعم، إذا اخترت مكوّنات محلية للتعرف على الكلام والنموذج اللغوي والصوت. لكن المثال في دليل البدء السريع يجمع Ollama وsherpa-onnx مع Edge TTS للصوت، ويذكر الدليل أن الاتصال بالشبكة شرط لهذا الصوت.',
        bullets: [
          'يمكنك مقاطعة الذكاء الاصطناعي بصوتك دون سماعات؛ ويقول المشروع إنه لا يسمع صوته.',
          'يدعم إدخال الصورة من الكاميرا وتسجيل الشاشة ولقطات الشاشة.',
          'لعميل سطح المكتب وضع حيوان مكتبي شفاف يُبقي الشخصية طافية فوق النوافذ الأخرى.',
          'يمكن استدعاء أدوات خارجية عبر بروتوكول MCP.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'إجابة سريعة',
        anchor: 'quick-answer',
      },
      {
        label: 'ما هو Open-LLM-VTuber؟',
        anchor: 'what-is-open-llm-vtuber',
      },
      {
        label: 'كيف تحصل عليه',
        anchor: 'get-it',
      },
      {
        label: 'المتطلبات',
        anchor: 'requirements',
      },
      {
        label: 'الميزات التي أكدتها المصادر',
        anchor: 'key-features',
      },
      {
        label: 'محلي أم سحابي: مسار البيانات',
        anchor: 'privacy',
      },
      {
        label: 'لمن يناسب',
        anchor: 'who-should-use',
      },
      {
        label: 'ما لم نتمكن من التحقق منه',
        anchor: 'who-should-not-use',
      },
      {
        label: 'المنافسون والبدائل',
        anchor: 'vs-alternatives',
      },
      {
        label: 'الأسئلة الشائعة',
        anchor: 'faq',
      },
      {
        label: 'الحكم النهائي',
        anchor: 'verdict',
      },
      {
        label: 'المصادر',
        anchor: 'sources',
      },
      {
        label: 'قراءات ذات صلة',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Open-LLM-VTuber برنامج ذاتي الاستضافة يربط أداة تعرف على الكلام ونموذجًا لغويًا وصوتًا لتحويل النص إلى كلام بشخصية Live2D متحركة، لتجري معها محادثة منطوقة.',
          },
          {
            type: 'plain-terms',
            text: 'تشغّل خادمًا صغيرًا على حاسوبك، وتفتح صفحته في Chrome أو في عميل سطح المكتب، وتتحدث مع شخصية كرتونية؛ وأنت من يقرر أي الأجزاء يعمل على جهازك وأيها يستدعي خدمة سحابية.',
          },
        ],
        items: [
          'الصيانة: أحدث إصدار صدر في 26 أغسطس 2025، ووفق ملف README يركّز القائمون على إعادة كتابة كاملة بالإصدار v2.0 ويطلبون عدم تقديم طلبات ميزات للإصدار v1.',
          'التكلفة: لا توجد باقة مدفوعة؛ ويرتبط README بصفحة تبرعات.',
          'الترخيص: MIT للشيفرة؛ ونماذج Live2D التجريبية المرفقة تخضع لترخيص Live2D منفصل.',
          'التثبيت: يُثبَّت الخادم الخلفي من الطرفية؛ وعميل سطح المكتب Electron مجرد واجهة.',
          'المكوّنات: التعرف على الكلام والنموذج اللغوي والصوت خيارات منفصلة، لذا قد يمزج إعداد واحد بين أجزاء محلية وسحابية.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'لا يوجد تحديث وظيفي منذ 11 فبراير 2026. أحدث إصدار في 26 أغسطس 2025، والالتزام الوحيد الأحدث (15 مايو 2026) عدّل ملف README فقط. قد يكون المشروع غير مُصان: افحص المستودع قبل الاعتماد عليه.',
          },
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى [موقع المشروع](https://open-llm-vtuber.github.io) و[مستودع GitHub](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) وصفحات الإصدارات، وقد جرى فحصها في 24 أكتوبر 2026. لم تثبّت PromptQuorum البرنامج ولم تشغّله، لذا لم تُقيَّم جودة الصوت ولا زمن الاستجابة ولا سلوك الشخصية.',
          },
        ],
      },
      overview: {
        id: 'what-is-open-llm-vtuber',
        title: 'ما هو Open-LLM-VTuber؟',
        content: [
          '**Open-LLM-VTuber رفيق ذكاء اصطناعي يتفاعل صوتيًا: تتحدث أنت، فيجيب نموذج لغوي، وتتفاعل شخصية Live2D بالتعابير وصوت مُركَّب.** يصفه المستودع بأنه وسيلة للتحدث مع أي نموذج لغوي بتفاعل صوتي دون استخدام اليدين ومقاطعة صوتية، ويعمل محليًا على منصات متعددة. شيفرته المرخّصة بـ MIT منسوبة في ملف LICENSE إلى Yi-Ting Chiu، ويُدار المشروع كمجتمع على GitHub.',
          '**يأتي الاسم من هدف إعادة إنتاج مذيع الذكاء الاصطناعي مغلق المصدر neuro-sama بمكوّنات مفتوحة تعمل دون اتصال على أنظمة غير Windows.** ويُستخدم اليوم رفيقًا عامًا أو محادثة مع شخصيات، مع واجهة ويب وعميل سطح مكتب Electron يوفّر وضع النافذة ووضع الحيوان المكتبي.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُثبَّت Open-LLM-VTuber كخادم خلفي على Windows أو macOS أو Linux، ويتصل به عميل سطح المكتب وصفحة المتصفح.**',
        ],
        columns: [
          'الخيار',
          'كيفية الحصول عليه',
        ],
        rows: [
          {
            'الخيار': 'الخادم الخلفي (كل الأنظمة)',
            'كيفية الحصول عليه': 'الملف Open-LLM-VTuber-v1.2.1-en.zip من [GitHub Releases](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/releases)، أو git clone مع خيار التكرار',
          },
          {
            'الخيار': 'عميل سطح المكتب، Windows',
            'كيفية الحصول عليه': 'مثبّت .exe من [إصدارات العميل](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases)؛ ويلزم تشغيل الخادم الخلفي',
          },
          {
            'الخيار': 'عميل سطح المكتب، macOS',
            'كيفية الحصول عليه': 'ملف .dmg من [إصدارات العميل](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases)؛ ويلزم تشغيل الخادم الخلفي',
          },
          {
            'الخيار': 'الموقع',
            'كيفية الحصول عليه': '[open-llm-vtuber.github.io](https://open-llm-vtuber.github.io)',
          },
          {
            'الخيار': 'سياسة الخصوصية',
            'كيفية الحصول عليه': 'لم نعثر على صفحة لسياسة الخصوصية في الموقع ولا في المستودع',
          },
          {
            'الخيار': 'الشيفرة المصدرية',
            'كيفية الحصول عليه': '[github.com/Open-LLM-VTuber/Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber)، ترخيص MIT',
          },
        ],
        note: 'الإصدار الذي رُوجع: 1.2.1، نُشر في 26 أغسطس 2025 وفق صفحة GitHub Releases؛ وصدر عميل سطح المكتب 1.2.1 في 21 أغسطس 2025. يتطلب الخادم الخلفي طرفية وأدوات تطوير (Git وFFmpeg وuv وPython من 3.10 إلى 3.12)، فهو ليس تثبيتًا بنقرة مزدوجة. تحذّر وثائق البدء السريع من أن عميل سطح المكتب غير الموقَّع قد يثير تحذيرات أمان من نظام التشغيل. التطبيق مجاني.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**لا يحدد المشروع حدًا أدنى ثابتًا؛ وما تحتاجه يتوقف على المكوّنات التي تشغّلها محليًا وتلك التي تستدعيها عبر واجهة API.**',
        ],
        columns: [
          'البند',
          'ما تقوله المصادر',
        ],
        rows: [
          {
            'البند': 'الحد الأدنى',
            'ما تقوله المصادر': 'إذا استخدمت كل المكوّنات الثقيلة (التعرف على الكلام والنموذج اللغوي والصوت) عبر API، يقول دليل البدء السريع إن Raspberry Pi يكفي لاستضافته',
          },
          {
            'البند': 'الاستخدام المحلي',
            'ما تقوله المصادر': 'الموصى به: جهاز Mac بمعالج Apple silicon أو وحدة Nvidia GPU أو AMD GPU حديثة أو معالج CPU قوي بما يكفي ليحل محلها',
          },
          {
            'البند': 'الأدوات',
            'ما تقوله المصادر': 'Git وFFmpeg (إلزامي) وuv؛ وPython بإصدار 3.10 أو أحدث وأقل من 3.13؛ وCUDA Toolkit وcuDNN لاستخدام Nvidia GPU',
          },
          {
            'البند': 'المتصفح',
            'ما تقوله المصادر': 'يُوصى بمتصفح Chrome فقط؛ وهناك مشكلات معروفة في Edge وSafari',
          },
          {
            'البند': 'الوصول عن بُعد',
            'ما تقوله المصادر': 'استخدام الخادم من جهاز آخر يتطلب HTTPS لأن المتصفحات لا تسمح بالميكروفون إلا في سياق آمن',
          },
        ],
        note: 'هذه تصريحات المشروع نفسه؛ ولم تقِس PromptQuorum استهلاك الذاكرة ولا السرعة على أي جهاز.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل ما يلي مأخوذ من الموقع أو دليل البدء السريع أو ملف README؛ ولم يُختبر أي منه بشكل مستقل.**',
        ],
        items: [
          '**المحادثة الصوتية.** إدخال صوتي فوري، ومقاطعة صوتية دون سماعات، وبدء الكلام من الذكاء الاصطناعي اختياريًا، وعرض أفكار الذكاء الاصطناعي الداخلية دون نطقها.',
          '**شخصية Live2D.** نماذج Cubism من 3 إلى 5، وربط التعابير يتحكم فيه الخادم الخلفي، وتفاعل باللمس، واستيراد نماذجك الخاصة.',
          '**الرؤية والأدوات.** إدخال من الكاميرا والشاشة ولقطات الشاشة، واستدعاء أدوات MCP، وتحكم في المتصفح وفق الموقع.',
          '**نماذج قابلة للتبديل.** نماذج لغوية عبر Ollama أو أي API متوافق مع OpenAI أو Gemini أو Claude أو Mistral أو DeepSeek أو GGUF أو LM Studio أو vLLM؛ وتعرّف عبر sherpa-onnx أو FunASR أو متغيرات Whisper؛ وأصوات عبر sherpa-onnx وCoqui-TTS وBark وFish Audio وAzure وغيرها.',
          '**البث والمجموعات.** عميل دردشة مباشرة مدمج لـ Bilibili، ومحادثة جماعية مع عدة شخصيات ذكاء اصطناعي، وسجل محادثات محفوظ.',
        ],
        note: 'يصف الموقع ذاكرة طويلة المدى مبنية على Letta، بينما يقول README إن الذاكرة طويلة المدى أُزيلت مؤقتًا؛ راجع قائمة ما لم يُتحقق منه.',
      },
      privacy: {
        id: 'privacy',
        title: 'محلي أم سحابي: مسار البيانات',
        content: [
          '**يقول المشروع إن كل شيء يمكن أن يعمل دون اتصال بنماذج محلية وإن المحادثات تبقى حينها على جهازك؛ لكنه لا ينشر سياسة خصوصية والصفحات التي قرأناها لا تذكر القياس عن بُعد.** في إعداد محلي بالكامل (مثل Ollama للنموذج مع تعرّف وصوت محليين) تُعالَج الصوتيات والنصوص على حاسوبك. والبرنامج نفسه مفتوح المصدر، لذا يمكن التحقق من هذا الادعاء في الشيفرة.',
          '**كل مكوّن تحوّله إلى خيار سحابي يرسل البيانات إلى ذلك المزوّد.** تشمل الخيارات السحابية المدعومة واجهات API المتوافقة مع OpenAI وGemini وClaude وGroq Whisper وAzure؛ ومثال البدء السريع يستخدم Edge TTS للصوت، وهو يحتاج إلى اتصال بالإنترنت. تُنزَّل النماذج والاعتماديات أثناء التثبيت، لذا يتم التثبيت الأول عبر الإنترنت.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات القائمين على المشروع وليست نتائج تدقيق. لم تقرأ PromptQuorum الشيفرة ولم تفحص حركة الشبكة، ولا يكون أي إعداد أكثر خصوصية من أقل مكوّناته خصوصية.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**الهواة والمطوّرون** الذين يريدون ربط مكوّناتهم الخاصة للصوت واللغة والتركيب بشخصية متحركة.',
          '**المذيعون ومحبو المحادثة مع الشخصيات** الذين يريدون شخصية Live2D ناطقة تحت سيطرتهم، بما في ذلك كحيوان مكتبي.',
          '**المهتمون بالخصوصية** الراغبون في تشغيل كل مكوّن محليًا والتحقق منه بأنفسهم.',
        ],
      },
      whoShouldNot: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الجودة والسرعة.** لم تقِس PromptQuorum زمن الاستجابة ولا دقة التعرف ولا جودة الصوت ولا العتاد اللازم لمحادثة سلسة.',
          '**آفاق الصيانة.** يقول README إن إعادة الكتابة الكاملة v2.0 في مرحلة تخطيط مبكرة ويطلب عدم تقديم طلبات ميزات للإصدار v1؛ ولا يذكر هل سيحصل v1 على إصلاحات أخرى.',
          '**الذاكرة طويلة المدى.** يصف الموقع ذاكرة مبنية على Letta ويقول README إنها أُزيلت مؤقتًا؛ ولم نتحقق أي القولين ينطبق على الإصدار 1.2.1.',
          '**الاستخدام التجاري للشخصيات.** وفق README قد تحتاج الشركات المتوسطة أو الكبيرة إلى إذن إضافي من Live2D Inc. لنماذج Live2D التجريبية؛ وللنماذج الأخرى تراخيصها الخاصة.',
          '**توقيع عميل سطح المكتب.** تقول الوثائق إن العميل غير موقَّع وقد يثير تحذيرات أمان؛ ولم نتحقق هل المثبّتات آمنة من جوانب أخرى.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: [
          'التطبيق',
          'المنصات',
          'السعر / الترخيص',
          'الفارق الرئيسي',
        ],
        rows: [
          {
            'التطبيق': '[SillyTavern](/ar/local-llms/sillytavern-review)',
            'المنصات': 'macOS وWindows وLinux وويب',
            'السعر / الترخيص': 'مجاني / AGPL 3.0',
            'الفارق الرئيسي': 'واجهة لعب أدوار نصية الطابع مبنية على lorebooks وإدارة الشخصيات',
          },
          {
            'التطبيق': '[RisuAI](/ar/power-local-llm/risuai-review)',
            'المنصات': 'ويب وmacOS وWindows وLinux',
            'السعر / الترخيص': 'مجاني / GPL 3.0',
            'الفارق الرئيسي': 'واجهة لعب أدوار ملائمة للجوال مع إصدارات لسطح المكتب',
          },
          {
            'التطبيق': '[Agnai](/ar/power-local-llm/agnai-review)',
            'المنصات': 'ويب',
            'السعر / الترخيص': 'مجاني / AGPL-3.0',
            'الفارق الرئيسي': 'واجهة لعب أدوار ببطاقات شخصيات ومحادثات جماعية متعددة المستخدمين',
          },
          {
            'التطبيق': '[Backyard AI](/ar/power-local-llm/backyard-ai-review-local-roleplay-2026)',
            'المنصات': 'macOS وWindows',
            'السعر / الترخيص': 'مجاني جزئيًا / مغلق المصدر',
            'الفارق الرئيسي': 'عميل سطح مكتب للمحادثة مع الشخصيات يتضمن Character Hub ومثبّتًا واحدًا',
          },
        ],
        note: 'هذه تطبيقات من الفئة نفسها في دليل PromptQuorum؛ تحقق من السعر والترخيص والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكن تشغيله دون وحدة GPU؟',
            a: 'نعم، إذا أرسلت الأجزاء الثقيلة إلى واجهات API: وفق دليل البدء السريع يمكن لكل مكوّن استخدام API، كما يمكن اختيار نموذج محلي أخف أو أداة تعرف ملائمة للمعالج. للاستخدام المحلي يُوصى بـ Apple silicon أو Nvidia GPU أو AMD GPU حديثة.',
          },
          {
            q: 'هل يمكنني استخدام نموذج Live2D الخاص بي؟',
            a: 'نعم: ضع مجلد النموذج في live2d-models وسجّله في model_dict.json ثم اختره في إعدادات الشخصية. تعمل نماذج Cubism من 3 إلى 5 ولا يعمل Cubism 2؛ وراجع كذلك ترخيص النموذج نفسه.',
          },
          {
            q: 'هل يمكنني التحدث معه من هاتفي؟',
            a: 'يقول المشروع إنه يمكنك تشغيل الخادم على حاسوب وفتحه من جهاز آخر، لكن ميكروفون المتصفح لا يعمل إلا عبر localhost أو HTTPS؛ لذا يتطلب الاستخدام عن بُعد إعداد HTTPS.',
          },
          {
            q: 'هل يمكنه المشاركة في بث مباشر؟',
            a: 'فيه عميل دردشة مباشرة مدمج لـ Bilibili يستقبل رسائل المشاهدين؛ أما المنصات الأخرى فتحتاج إلى واجهة تنفّذها بنفسك.',
          },
          {
            q: 'أي متصفح يعمل بأفضل شكل؟',
            a: 'يوصي دليل البدء السريع بمتصفح Chrome فقط ويذكر مشكلات معروفة في Edge وSafari.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content: 'Open-LLM-VTuber طريقة مجانية ومفتوحة المصدر لبناء رفيق Live2D يُدار بالصوت من مكوّنات تختارها، مع مسار موثّق لتشغيل كل شيء دون اتصال. في المقابل، التثبيت بأسلوب المطوّرين، والإعداد المثالي ما زال يستخدم صوتًا عبر الإنترنت، ولا يُظهر المستودع أي تحديث وظيفي منذ 11 فبراير 2026، ولم نتمكن هنا من التحقق من أي من ادعاءات الجودة. يناسب الهواة الذين يجيدون استخدام الطرفية ويقبلون التعامل معه كمشروع قد لا يكون مُصانًا؛ ومن يحتاج إلى تطبيق مدعوم ومصقول فعليه اختباره بعناية أولًا.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Open-LLM-VTuber](https://open-llm-vtuber.github.io) — نظرة عامة على المشروع وقائمة الميزات، فُحص في 24 أكتوبر 2026.',
          '[دليل البدء السريع](https://open-llm-vtuber.github.io/en/docs/quick-start) — المتطلبات وخطوات التثبيت وملاحظات عميل سطح المكتب، فُحص في 24 أكتوبر 2026.',
          '[Open-LLM-VTuber على GitHub](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) — README وترخيص MIT وإشعار Live2D وسجل الالتزامات، فُحصت في 24 أكتوبر 2026.',
          '[إصدارات الخادم الخلفي](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/releases) — الإصدار 1.2.1 وملفات التنزيل، فُحصت في 24 أكتوبر 2026.',
          '[إصدارات عميل سطح المكتب](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases) — مثبّتات Windows وmacOS، فُحصت في 24 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مقارنة SillyTavern وAgnai وRisuAI](/ar/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — ثلاث واجهات للعب الأدوار في مقارنة.',
          '[مراجعة HiWaifu](/ar/power-local-llm/hiwaifu-review) — تطبيق رفيق ذكاء اصطناعي للهاتف.',
          '[مراجعة SillyTavern](/ar/local-llms/sillytavern-review) — واجهة ذاتية الاستضافة للمحادثة مع الشخصيات تدعم lorebooks.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Creative & Roleplay',
    heroImage: '/images/open-llm-vtuber-review-hero-zh.webp',
    title: 'Open-LLM-VTuber 评测：自托管的 Live2D 虚拟形象语音聊天',
    seoTitle: 'Open-LLM-VTuber 评测：Live2D 语音 AI 伴侣',
    intro: 'Open-LLM-VTuber 是一个免费开源项目，可以用语音与语言模型对话，同时由屏幕上的 Live2D 角色作答。你在 Windows、macOS 或 Linux 上自行运行，并自选语音识别、语言模型和语音合成组件。本评测基于项目网站、GitHub 仓库及其发布页面（核查于2026年10月24日）；PromptQuorum 没有对该软件做实机测试。',
    metaDescription: 'Open-LLM-VTuber 评测：可自行托管、带 Live2D 虚拟形象的免费（MIT）语音聊天。部署难度、本地与云端部分，以及更新停滞的提示。',
    twitterDescription: 'Open-LLM-VTuber 评测：自托管、带 Live2D 虚拟形象的语音伴侣。来源能确认的部署、离线使用与维护情况，以及无法确认的部分。',
    audience: '想自主掌控带动画虚拟形象的语音 AI 伴侣的爱好者、主播和角色扮演玩家，需要了解部署难度、哪些内容留在本地以及项目的维护活跃度。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Open-LLM-VTuber 评测',
    targetKeywords: [
      'open-llm-vtuber 评测',
      'open-llm-vtuber',
      'live2d ai 伴侣',
      '自托管 语音聊天 ai',
      '本地 ai vtuber',
      'ai 伴侣 桌宠',
      'open-llm-vtuber.github.io',
    ],
    current_models_mentioned: [
      'Ollama',
      'sherpa-onnx',
      'Faster-Whisper',
    ],
    current_hardware_mentioned: [
      'Apple silicon',
      'Nvidia GPU',
    ],
    leadAnswerBlock: '**Open-LLM-VTuber（1.2.1 版）是一款带 Live2D 虚拟形象的免费开源语音聊天伴侣，由你在 Windows、macOS 或 Linux 上自行安装并运行。** 据项目称，所有组件都使用本地方案时可完全离线运行，但需要通过终端部署，且仓库自2026年2月11日以来没有功能性变更。',
    quickAnswerTop: {
      zh: {
        question: 'Open-LLM-VTuber 真的能离线运行吗？',
        answer: '据项目称，只要语音识别、语言模型和语音合成都选用本地组件即可。不过快速开始指南的示例配置把 Ollama 和 sherpa-onnx 与 Edge TTS 语音搭配使用，指南也把网络连接列为该语音的前提。',
        bullets: [
          '无需耳机即可用语音打断 AI；据项目称，AI 听不到自己的声音。',
          '支持通过摄像头、屏幕录制和截图输入画面。',
          '桌面客户端有透明的桌宠模式，可让形象悬浮在其他窗口之上。',
          '可通过 MCP 协议调用外部工具。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '快速回答',
        anchor: 'quick-answer',
      },
      {
        label: 'Open-LLM-VTuber 是什么？',
        anchor: 'what-is-open-llm-vtuber',
      },
      {
        label: '获取方式',
        anchor: 'get-it',
      },
      {
        label: '运行要求',
        anchor: 'requirements',
      },
      {
        label: '来源确认的功能',
        anchor: 'key-features',
      },
      {
        label: '本地还是云端：数据流向',
        anchor: 'privacy',
      },
      {
        label: '适合谁用',
        anchor: 'who-should-use',
      },
      {
        label: '我们未能核实的内容',
        anchor: 'who-should-not-use',
      },
      {
        label: '竞品与替代方案',
        anchor: 'vs-alternatives',
      },
      {
        label: '常见问题',
        anchor: 'faq',
      },
      {
        label: '结论',
        anchor: 'verdict',
      },
      {
        label: '资料来源',
        anchor: 'sources',
      },
      {
        label: '延伸阅读',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Open-LLM-VTuber 是一个自托管程序，把语音识别器、语言模型和文字转语音的声音接到会动的 Live2D 角色上，让你能与它进行语音对话。',
          },
          {
            type: 'plain-terms',
            text: '你在自己的电脑上启动一个小型服务器，用 Chrome 或桌面客户端打开它的页面，与卡通角色交谈；哪些部分在本机运行、哪些调用云服务，由你决定。',
          },
        ],
        items: [
          '维护：最新版本发布于2025年8月26日；据 README，维护者正集中精力做 v2.0 的全面重写，并请大家不要再为 v1 提功能需求。',
          '费用：没有付费档位；README 附有捐赠页面链接。',
          '许可：代码为 MIT；随附的 Live2D 示例模型适用 Live2D 另行的许可。',
          '部署：后端需在终端中安装；Electron 桌面客户端只是前端界面。',
          '组件：语音识别、语言模型和语音是分别选择的，因此同一配置可以混用本地与云端部分。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '自2026年2月11日以来没有功能性更新。最新版本发布于2025年8月26日，之后唯一的提交（2026年5月15日）只修改了 README。该项目可能已无人维护：依赖它之前请先查看仓库。',
          },
          {
            type: 'note',
            text: '本评测基于[项目网站](https://open-llm-vtuber.github.io)、[GitHub 仓库](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber)及其发布页面（核查于2026年10月24日）。PromptQuorum 没有安装或运行该软件，因此未评估音质、延迟和形象表现。',
          },
        ],
      },
      overview: {
        id: 'what-is-open-llm-vtuber',
        title: 'Open-LLM-VTuber 是什么？',
        content: [
          '**Open-LLM-VTuber 是一款语音交互的 AI 伴侣：你说话，语言模型作答，Live2D 角色以表情和合成语音回应。** 仓库把它描述为：以免提语音交互和语音打断的方式与任意 LLM 对话，可在多个平台本地运行。LICENSE 文件中，MIT 许可的代码版权归 Yi-Ting Chiu，项目以社区形式在 GitHub 上运作。',
          '**这个名字源于最初的目标：用可在 Windows 以外系统离线运行的开放组件，复现闭源的 AI 虚拟主播 neuro-sama。** 如今它被用作通用伴侣或角色聊天，提供网页界面，以及带窗口模式和桌宠模式的 Electron 桌面客户端。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Open-LLM-VTuber 以后端服务器的形式安装在 Windows、macOS 或 Linux 上，桌面客户端和浏览器页面都连接到它。**',
        ],
        columns: [
          '选项',
          '获取方式',
        ],
        rows: [
          {
            '选项': '后端（所有系统）',
            '获取方式': '[GitHub Releases](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/releases) 中的 Open-LLM-VTuber-v1.2.1-en.zip，或带递归选项的 git clone',
          },
          {
            '选项': '桌面客户端，Windows',
            '获取方式': '[客户端发布页](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases)的 .exe 安装包；需先运行后端',
          },
          {
            '选项': '桌面客户端，macOS',
            '获取方式': '[客户端发布页](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases)的 .dmg；需先运行后端',
          },
          {
            '选项': '网站',
            '获取方式': '[open-llm-vtuber.github.io](https://open-llm-vtuber.github.io)',
          },
          {
            '选项': '隐私政策',
            '获取方式': '在网站和仓库中都没有找到隐私政策页面',
          },
          {
            '选项': '源代码',
            '获取方式': '[github.com/Open-LLM-VTuber/Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber)，MIT 许可',
          },
        ],
        note: '评测版本：1.2.1，据 GitHub Releases 页面发布于2025年8月26日；桌面客户端 1.2.1 发布于2025年8月21日。后端需要终端和开发工具（Git、FFmpeg、uv、Python 3.10 至 3.12），不是双击安装。快速开始文档提醒，未签名的桌面客户端可能触发操作系统的安全警告。该应用免费。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: [
          '**项目没有给出固定的最低配置；所需配置取决于哪些组件在本地运行、哪些通过 API 调用。**',
        ],
        columns: [
          '项目',
          '来源的说法',
        ],
        rows: [
          {
            '项目': '最低要求',
            '来源的说法': '如果所有重量级组件（语音识别、语言模型、语音）都用 API，快速开始指南称连树莓派也能托管',
          },
          {
            '项目': '本地运行',
            '来源的说法': '推荐：Apple silicon 的 Mac、Nvidia GPU、较新的 AMD GPU，或强到足以替代 GPU 的 CPU',
          },
          {
            '项目': '工具',
            '来源的说法': 'Git、FFmpeg（必需）和 uv；Python 3.10 及以上、低于 3.13；使用 Nvidia GPU 需 CUDA Toolkit 和 cuDNN',
          },
          {
            '项目': '浏览器',
            '来源的说法': '仅推荐 Chrome；Edge 和 Safari 存在已知问题',
          },
          {
            '项目': '远程访问',
            '来源的说法': '从其他设备使用需要 HTTPS，因为浏览器只在安全上下文中允许使用麦克风',
          },
        ],
        note: '以上是项目自己的说法；PromptQuorum 没有在任何硬件上测量内存占用或速度。',
      },
      features: {
        id: 'key-features',
        title: '来源确认的功能',
        content: [
          '**以下每一项都来自网站、快速开始指南或 README；没有一项经过独立测试。**',
        ],
        items: [
          '**语音对话。** 实时语音输入、无需耳机的语音打断、可选的 AI 主动发言，以及显示但不朗读的 AI 内心想法。',
          '**Live2D 形象。** Cubism 3 至 5 模型、由后端控制的表情映射、触摸互动，以及导入自己的模型。',
          '**视觉与工具。** 摄像头、屏幕和截图输入、MCP 工具调用，据网站称还有浏览器控制。',
          '**可更换的模型。** 语言模型可通过 Ollama、任何 OpenAI 兼容 API、Gemini、Claude、Mistral、DeepSeek、GGUF、LM Studio 或 vLLM 接入；识别可用 sherpa-onnx、FunASR 或 Whisper 系列；语音可用 sherpa-onnx、Coqui-TTS、Bark、Fish Audio、Azure 等。',
          '**直播与群聊。** 内置 Bilibili 直播聊天客户端、多个 AI 角色的群聊，以及保存的聊天记录。',
        ],
        note: '网站介绍了基于 Letta 的长期记忆，而 README 称长期记忆被暂时移除；见未核实内容清单。',
      },
      privacy: {
        id: 'privacy',
        title: '本地还是云端：数据流向',
        content: [
          '**项目称，使用本地模型时一切都可离线运行，对话会留在你的设备上；但它没有公布隐私政策，我们查阅的页面也没有提到遥测。** 在完全本地的配置中（例如用 Ollama 作模型，识别和语音也用本地方案），音频和文字都在你的电脑上处理。软件本身开源，因此这一说法可以在代码中核对。',
          '**每个切换到云端选项的组件，都会把数据发送给相应的服务商。** 支持的云端选项包括 OpenAI 兼容 API、Gemini、Claude、Groq Whisper 和 Azure；快速开始的示例用 Edge TTS 作语音，需要联网。模型和依赖在安装过程中下载，所以首次安装需要联网。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是维护者的声明，不是审计结果。PromptQuorum 没有阅读代码，也没有检查网络流量；一套配置的隐私程度取决于其中最不注重隐私的那个组件。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        items: [
          '**爱好者和开发者**：想把自己的语音、语言和合成组件接到一个虚拟形象上。',
          '**主播和角色聊天爱好者**：想自主掌控一个会说话的 Live2D 角色，包括桌宠形式。',
          '**注重隐私的用户**：愿意把每个组件都放在本地运行并自行核验。',
        ],
      },
      whoShouldNot: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**质量与速度。** PromptQuorum 没有测量延迟、识别准确率、语音质量，也没有测量流畅对话所需的硬件。',
          '**维护前景。** README 称 v2.0 全面重写仍处于早期规划阶段，并请大家不要为 v1 提功能需求；是否还会为 v1 提供修复，文中没有说明。',
          '**长期记忆。** 网站介绍基于 Letta 的记忆，README 称其被暂时移除；1.2.1 版以哪个说法为准，我们没有核实。',
          '**形象的商业使用。** 据 README，中型或大型企业使用 Live2D 示例模型可能需要 Live2D Inc. 的额外许可；其他模型有各自的许可。',
          '**桌面客户端签名。** 文档称客户端未签名，可能触发安全警告；安装包在其他方面是否安全，我们没有核实。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: [
          '应用',
          '平台',
          '价格 / 许可',
          '主要区别',
        ],
        rows: [
          {
            '应用': '[SillyTavern](/zh/local-llms/sillytavern-review)',
            '平台': 'macOS、Windows、Linux、网页',
            '价格 / 许可': '免费 / AGPL 3.0',
            '主要区别': '以文本为主的角色扮演前端，围绕 lorebook 和角色设定管理构建',
          },
          {
            '应用': '[RisuAI](/zh/power-local-llm/risuai-review)',
            '平台': '网页、macOS、Windows、Linux',
            '价格 / 许可': '免费 / GPL 3.0',
            '主要区别': '适合手机使用的角色扮演前端，另有桌面版本',
          },
          {
            '应用': '[Agnai](/zh/power-local-llm/agnai-review)',
            '平台': '网页',
            '价格 / 许可': '免费 / AGPL-3.0',
            '主要区别': '带角色卡和多用户群组对话的角色扮演前端',
          },
          {
            '应用': '[Backyard AI](/zh/power-local-llm/backyard-ai-review-local-roleplay-2026)',
            '平台': 'macOS、Windows',
            '价格 / 许可': '免费增值 / 闭源',
            '主要区别': '内置 Character Hub、只需一个安装包的角色聊天桌面客户端',
          },
        ],
        note: '这些是 PromptQuorum 目录中同类别的应用；请到各应用页面确认当前的价格、许可和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '没有 GPU 能运行吗？',
            a: '可以，只要把重量级部分交给 API：据快速开始指南，每个组件都可以使用 API，也可以选更轻量的本地模型或适合 CPU 的识别器。本地运行推荐 Apple silicon、Nvidia GPU 或较新的 AMD GPU。',
          },
          {
            q: '可以使用自己的 Live2D 模型吗？',
            a: '可以：把模型文件夹放进 live2d-models，在 model_dict.json 中登记，并在角色配置里选用。Cubism 3 至 5 的模型可用，Cubism 2 不可用；还应查看模型本身的许可。',
          },
          {
            q: '能用手机和它对话吗？',
            a: '据项目称，可以在一台电脑上运行服务器，再从另一台设备打开；但浏览器麦克风只在 localhost 或 HTTPS 下可用，所以远程使用需要配置 HTTPS。',
          },
          {
            q: '能参与直播吗？',
            a: '它内置 Bilibili 直播聊天客户端，可接收观众消息；其他平台需要你自己实现接口。',
          },
          {
            q: '哪个浏览器效果最好？',
            a: '快速开始指南只推荐 Chrome，并指出 Edge 和 Safari 存在已知问题。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Open-LLM-VTuber 是一种免费开源的方式，可用你自选的组件搭建语音驱动的 Live2D 伴侣，并有文档化的全离线运行路径。不利的一面是：部署属于开发者式安装，示例配置仍使用在线语音，仓库自2026年2月11日以来没有功能性更新，其质量方面的说法在此无法核实。它适合会用终端、并愿意把它当作可能已不再维护的项目来对待的爱好者；需要有支持、成品化应用的人，应先仔细试用。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Open-LLM-VTuber 网站](https://open-llm-vtuber.github.io) — 项目概述和功能列表，核查于2026年10月24日。',
          '[快速开始指南](https://open-llm-vtuber.github.io/en/docs/quick-start) — 运行要求、安装步骤和桌面客户端说明，核查于2026年10月24日。',
          '[GitHub 上的 Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) — README、MIT 许可、Live2D 声明和提交历史，核查于2026年10月24日。',
          '[后端发布页](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/releases) — 1.2.1 版和下载文件，核查于2026年10月24日。',
          '[桌面客户端发布页](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases) — Windows 和 macOS 安装包，核查于2026年10月24日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[SillyTavern、Agnai 与 RisuAI 对比](/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 三个角色扮演前端的对比。',
          '[HiWaifu 评测](/zh/power-local-llm/hiwaifu-review) — 一款手机端的 AI 伴侣应用。',
          '[SillyTavern 评测](/zh/local-llms/sillytavern-review) — 支持 lorebook 的自托管角色聊天前端。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Creative & Roleplay',
    heroImage: '/images/open-llm-vtuber-review-hero-ko.webp',
    title: 'Open-LLM-VTuber 리뷰: Live2D 아바타가 있는 자체 호스팅 음성 채팅',
    seoTitle: 'Open-LLM-VTuber 리뷰: Live2D 음성 AI 동반자',
    intro: 'Open-LLM-VTuber는 음성으로 언어 모델과 대화하고 화면의 Live2D 캐릭터가 답하는 무료 오픈소스 프로젝트입니다. Windows, macOS, Linux에서 직접 실행하며 음성 인식, 언어 모델, 음성 합성 구성 요소를 직접 고릅니다. 이 리뷰는 프로젝트 웹사이트, GitHub 저장소, 릴리스 페이지(2026년 10월 24일 확인)를 바탕으로 하며, PromptQuorum은 소프트웨어를 직접 사용해 테스트하지 않았습니다.',
    metaDescription: 'Open-LLM-VTuber 리뷰: Live2D 아바타가 있는 무료(MIT) 자체 호스팅 음성 채팅. 설치 난이도, 로컬과 클라우드 구성, 업데이트 중단 경고를 정리했습니다.',
    twitterDescription: 'Open-LLM-VTuber 리뷰: Live2D 아바타가 있는 자체 호스팅 음성 동반자. 설치, 오프라인 사용, 유지 관리에 대해 출처가 확인하는 것과 확인하지 않는 것.',
    audience: '애니메이션 아바타가 있는 음성 AI 동반자를 직접 관리하고 싶은 개발 애호가, 스트리머, 롤플레이 팬으로, 설치 난이도와 로컬에 남는 것, 프로젝트의 유지 관리 상태를 알고 싶은 분을 위한 글입니다.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Open-LLM-VTuber 리뷰',
    targetKeywords: [
      'open-llm-vtuber 리뷰',
      'open-llm-vtuber',
      'live2d ai 동반자',
      '자체 호스팅 음성 채팅 ai',
      '로컬 ai vtuber',
      'ai 동반자 데스크톱 펫',
      'open-llm-vtuber.github.io',
    ],
    current_models_mentioned: [
      'Ollama',
      'sherpa-onnx',
      'Faster-Whisper',
    ],
    current_hardware_mentioned: [
      'Apple silicon',
      'Nvidia GPU',
    ],
    leadAnswerBlock: '**Open-LLM-VTuber(버전 1.2.1)는 Live2D 아바타가 있는 무료 오픈소스 음성 채팅 동반자로, Windows, macOS, Linux에 직접 설치해 실행합니다.** 프로젝트에 따르면 모든 구성 요소를 로컬로 두면 완전히 오프라인으로 동작하지만, 설치는 터미널에서 해야 하며 저장소에는 2026년 2월 11일 이후 기능 변경이 없습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Open-LLM-VTuber는 정말 오프라인에서 동작합니까?',
        answer: '프로젝트에 따르면 음성 인식, 언어 모델, 음성 합성에 로컬 구성 요소를 고르면 동작합니다. 다만 빠른 시작 가이드의 예시 구성은 Ollama와 sherpa-onnx에 Edge TTS 음성을 조합하며, 가이드는 그 음성에 네트워크 연결이 필요하다고 적고 있습니다.',
        bullets: [
          '헤드폰 없이도 음성으로 AI의 말을 끊을 수 있으며, 프로젝트에 따르면 AI는 자기 목소리를 듣지 않습니다.',
          '카메라, 화면 녹화, 스크린샷을 통한 이미지 입력을 지원합니다.',
          '데스크톱 클라이언트에는 아바타를 다른 창 위에 띄우는 투명 펫 모드가 있습니다.',
          'MCP 프로토콜로 외부 도구를 호출할 수 있습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '간단한 답변',
        anchor: 'quick-answer',
      },
      {
        label: 'Open-LLM-VTuber란?',
        anchor: 'what-is-open-llm-vtuber',
      },
      {
        label: '구하는 방법',
        anchor: 'get-it',
      },
      {
        label: '요구 사항',
        anchor: 'requirements',
      },
      {
        label: '출처로 확인된 기능',
        anchor: 'key-features',
      },
      {
        label: '로컬 또는 클라우드: 데이터 흐름',
        anchor: 'privacy',
      },
      {
        label: '이런 분께 적합합니다',
        anchor: 'who-should-use',
      },
      {
        label: '확인하지 못한 내용',
        anchor: 'who-should-not-use',
      },
      {
        label: '경쟁 제품과 대안',
        anchor: 'vs-alternatives',
      },
      {
        label: '자주 묻는 질문',
        anchor: 'faq',
      },
      {
        label: '총평',
        anchor: 'verdict',
      },
      {
        label: '출처',
        anchor: 'sources',
      },
      {
        label: '관련 글',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Open-LLM-VTuber는 음성 인식기, 언어 모델, 음성 합성 목소리를 움직이는 Live2D 캐릭터에 연결해 음성으로 대화할 수 있게 하는 자체 호스팅 프로그램입니다.',
          },
          {
            type: 'plain-terms',
            text: '내 컴퓨터에서 작은 서버를 띄우고 Chrome이나 데스크톱 클라이언트로 그 페이지를 열어 만화 캐릭터와 대화합니다. 어떤 부분을 내 기기에서 돌리고 어떤 부분을 클라우드 서비스에 맡길지는 직접 정합니다.',
          },
        ],
        items: [
          '유지 관리: 최신 릴리스는 2025년 8월 26일에 나왔으며, README에 따르면 관리자들은 v2.0 전면 재작성에 집중하고 있어 v1에 대한 기능 요청은 삼가 달라고 합니다.',
          '비용: 유료 플랜은 없으며 README에 후원 페이지 링크가 있습니다.',
          '라이선스: 코드는 MIT이고, 함께 들어 있는 Live2D 샘플 모델은 별도의 Live2D 라이선스를 따릅니다.',
          '설치: 백엔드는 터미널에서 설치하며, Electron 데스크톱 클라이언트는 화면 부분일 뿐입니다.',
          '구성: 음성 인식, 언어 모델, 음성은 따로 고르므로 한 구성에 로컬과 클라우드를 섞을 수 있습니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '2026년 2월 11일 이후 기능 업데이트가 없습니다. 최신 릴리스는 2025년 8월 26일이며, 그 이후의 유일한 커밋(2026년 5월 15일)은 README 수정이었습니다. 프로젝트가 더 이상 관리되지 않을 수 있으니 의존하기 전에 저장소를 확인하십시오.',
          },
          {
            type: 'note',
            text: '이 리뷰는 [프로젝트 웹사이트](https://open-llm-vtuber.github.io), [GitHub 저장소](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber), 릴리스 페이지(2026년 10월 24일 확인)를 바탕으로 합니다. PromptQuorum은 소프트웨어를 설치하거나 실행하지 않았으므로 음질, 지연 시간, 아바타 동작은 평가하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-open-llm-vtuber',
        title: 'Open-LLM-VTuber란?',
        content: [
          '**Open-LLM-VTuber는 음성으로 상호작용하는 AI 동반자입니다. 말을 걸면 언어 모델이 답하고, Live2D 캐릭터가 표정과 합성 음성으로 반응합니다.** 저장소는 이를 핸즈프리 음성 상호작용과 음성 끼어들기로 어떤 LLM과도 대화할 수 있고 여러 플랫폼에서 로컬로 실행되는 도구라고 설명합니다. MIT 라이선스 코드는 LICENSE 파일에서 Yi-Ting Chiu의 저작권으로 표시되어 있으며, 프로젝트는 GitHub의 커뮤니티로 운영됩니다.',
          '**이름은 Windows 이외에서도 오프라인으로 돌아가는 오픈 구성 요소로 비공개 AI VTuber neuro-sama를 재현하겠다는 초기 목표에서 왔습니다.** 지금은 범용 동반자나 캐릭터 채팅으로 쓰이며, 웹 인터페이스와 창 모드 및 데스크톱 펫 모드를 갖춘 Electron 데스크톱 클라이언트가 있습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '구하는 방법',
        content: [
          '**Open-LLM-VTuber는 Windows, macOS, Linux에 백엔드 서버로 설치하며, 데스크톱 클라이언트와 브라우저 페이지가 여기에 접속합니다.**',
        ],
        columns: [
          '항목',
          '구하는 방법',
        ],
        rows: [
          {
            '항목': '백엔드(모든 OS)',
            '구하는 방법': '[GitHub Releases](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/releases)의 Open-LLM-VTuber-v1.2.1-en.zip 또는 recursive 옵션을 붙인 git clone',
          },
          {
            '항목': '데스크톱 클라이언트, Windows',
            '구하는 방법': '[클라이언트 릴리스](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases)의 .exe 설치 파일. 백엔드가 실행 중이어야 함',
          },
          {
            '항목': '데스크톱 클라이언트, macOS',
            '구하는 방법': '[클라이언트 릴리스](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases)의 .dmg. 백엔드가 실행 중이어야 함',
          },
          {
            '항목': '웹사이트',
            '구하는 방법': '[open-llm-vtuber.github.io](https://open-llm-vtuber.github.io)',
          },
          {
            '항목': '개인정보 처리방침',
            '구하는 방법': '웹사이트와 저장소 어디에서도 개인정보 처리방침 페이지를 찾지 못했습니다',
          },
          {
            '항목': '소스 코드',
            '구하는 방법': '[github.com/Open-LLM-VTuber/Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber), MIT 라이선스',
          },
        ],
        note: '검토한 버전은 1.2.1이며 GitHub Releases 페이지에 따르면 2025년 8월 26일에 공개되었습니다. 데스크톱 클라이언트 1.2.1은 2025년 8월 21일에 나왔습니다. 백엔드에는 터미널과 개발 도구(Git, FFmpeg, uv, Python 3.10~3.12)가 필요해 더블클릭으로 설치하는 방식이 아닙니다. 빠른 시작 문서는 서명되지 않은 데스크톱 클라이언트가 운영체제의 보안 경고를 띄울 수 있다고 안내합니다. 앱은 무료입니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: [
          '**프로젝트는 고정된 최소 사양을 제시하지 않으며, 필요한 사양은 어떤 구성 요소를 로컬에서 돌리고 어떤 것을 API로 호출하는지에 따라 달라집니다.**',
        ],
        columns: [
          '항목',
          '출처의 설명',
        ],
        rows: [
          {
            '항목': '최소',
            '출처의 설명': '무거운 구성 요소(음성 인식, 언어 모델, 음성)를 모두 API로 쓰면 빠른 시작 가이드에 따라 Raspberry Pi에서도 호스팅할 수 있음',
          },
          {
            '항목': '로컬 사용',
            '출처의 설명': '권장: Apple silicon Mac, Nvidia GPU, 최신 AMD GPU 또는 GPU를 대신할 만큼 강력한 CPU',
          },
          {
            '항목': '도구',
            '출처의 설명': 'Git, FFmpeg(필수), uv. Python 3.10 이상 3.13 미만. Nvidia GPU 사용에는 CUDA Toolkit과 cuDNN',
          },
          {
            '항목': '브라우저',
            '출처의 설명': 'Chrome만 권장하며 Edge와 Safari에는 알려진 문제가 있음',
          },
          {
            '항목': '원격 접속',
            '출처의 설명': '다른 기기에서 쓰려면 HTTPS가 필요함. 브라우저는 보안 컨텍스트에서만 마이크를 허용하기 때문',
          },
        ],
        note: '이는 프로젝트 자체의 설명이며, PromptQuorum은 어떤 하드웨어에서도 메모리 사용량이나 속도를 측정하지 않았습니다.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 웹사이트, 빠른 시작 가이드, README에서 가져온 것이며 독자적으로 테스트하지 않았습니다.**',
        ],
        items: [
          '**음성 대화.** 실시간 음성 입력, 헤드폰 없는 음성 끼어들기, AI가 먼저 말을 거는 기능(선택), 소리 내어 읽지 않는 AI의 속마음 표시.',
          '**Live2D 아바타.** Cubism 3~5 모델, 백엔드에서 제어하는 표정 매핑, 터치 상호작용, 직접 가져온 모델.',
          '**시각 입력과 도구.** 카메라, 화면, 스크린샷 입력, MCP 도구 호출, 웹사이트에 따르면 브라우저 제어.',
          '**교체 가능한 모델.** 언어 모델은 Ollama, OpenAI 호환 API, Gemini, Claude, Mistral, DeepSeek, GGUF, LM Studio, vLLM 등. 인식은 sherpa-onnx, FunASR, Whisper 계열. 음성은 sherpa-onnx, Coqui-TTS, Bark, Fish Audio, Azure 등.',
          '**방송과 그룹.** 내장 Bilibili 라이브 채팅 클라이언트, 여러 AI 캐릭터와의 그룹 채팅, 저장되는 채팅 기록.',
        ],
        note: '웹사이트는 Letta 기반 장기 기억을 설명하지만 README는 장기 기억이 일시적으로 제거되었다고 적고 있습니다. 확인하지 못한 내용 목록을 참고하십시오.',
      },
      privacy: {
        id: 'privacy',
        title: '로컬 또는 클라우드: 데이터 흐름',
        content: [
          '**프로젝트는 로컬 모델을 쓰면 모든 것이 오프라인으로 실행되고 대화가 기기에 남는다고 밝히지만, 개인정보 처리방침은 공개하지 않았고 확인한 페이지에는 텔레메트리에 대한 언급도 없습니다.** 완전히 로컬인 구성(예: 모델은 Ollama, 인식과 음성도 로컬)에서는 오디오와 텍스트가 내 컴퓨터에서 처리됩니다. 소프트웨어 자체가 오픈소스이므로 이 주장은 코드에서 확인할 수 있습니다.',
          '**클라우드 옵션으로 바꾼 구성 요소는 해당 제공업체로 데이터를 보냅니다.** 지원되는 클라우드 옵션에는 OpenAI 호환 API, Gemini, Claude, Groq Whisper, Azure 등이 있으며, 빠른 시작 예시는 음성에 Edge TTS를 사용하므로 인터넷 연결이 필요합니다. 모델과 의존 파일은 설치 중에 내려받으므로 첫 설치는 온라인으로 진행됩니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 관리자들의 선언이지 감사 결과가 아닙니다. PromptQuorum은 코드를 읽거나 네트워크 트래픽을 점검하지 않았으며, 구성의 프라이버시는 가장 덜 사적인 구성 요소 수준을 넘지 못합니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**개발 애호가와 개발자**: 직접 고른 음성, 언어, 합성 구성 요소를 아바타에 연결하려는 분.',
          '**스트리머와 캐릭터 채팅 팬**: 데스크톱 펫을 포함해 말하는 Live2D 캐릭터를 직접 관리하려는 분.',
          '**프라이버시를 중시하는 사용자**: 모든 구성 요소를 로컬에서 돌리고 직접 검증할 의향이 있는 분.',
        ],
      },
      whoShouldNot: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        items: [
          '**품질과 속도.** PromptQuorum은 지연 시간, 인식 정확도, 음성 품질, 매끄러운 대화에 필요한 하드웨어를 측정하지 않았습니다.',
          '**유지 관리 전망.** README는 v2.0 전면 재작성이 초기 기획 단계라고 하며 v1 기능 요청을 삼가 달라고 하지만, v1에 추가 수정이 있을지는 밝히지 않습니다.',
          '**장기 기억.** 웹사이트는 Letta 기반 기억을 설명하고 README는 일시적으로 제거되었다고 합니다. 버전 1.2.1에서 어느 쪽이 맞는지는 확인하지 않았습니다.',
          '**아바타의 상업적 사용.** README에 따르면 중견 이상 기업이 Live2D 샘플 모델을 쓰려면 Live2D Inc.의 추가 허가가 필요할 수 있으며, 다른 모델에는 각자의 라이선스가 있습니다.',
          '**데스크톱 클라이언트 서명.** 문서는 클라이언트가 서명되지 않아 보안 경고가 뜰 수 있다고 합니다. 설치 파일이 그 밖의 면에서 안전한지는 확인하지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: [
          '앱',
          '플랫폼',
          '가격 / 라이선스',
          '주요 차이점',
        ],
        rows: [
          {
            '앱': '[SillyTavern](/ko/local-llms/sillytavern-review)',
            '플랫폼': 'macOS, Windows, Linux, 웹',
            '가격 / 라이선스': '무료 / AGPL 3.0',
            '주요 차이점': '로어북과 페르소나 관리를 중심으로 한 텍스트 위주의 롤플레이 프런트엔드',
          },
          {
            '앱': '[RisuAI](/ko/power-local-llm/risuai-review)',
            '플랫폼': '웹, macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / GPL 3.0',
            '주요 차이점': '모바일 친화적인 롤플레이 프런트엔드로 데스크톱 빌드도 있음',
          },
          {
            '앱': '[Agnai](/ko/power-local-llm/agnai-review)',
            '플랫폼': '웹',
            '가격 / 라이선스': '무료 / AGPL-3.0',
            '주요 차이점': '캐릭터 카드와 다중 사용자 그룹 대화를 지원하는 롤플레이 프런트엔드',
          },
          {
            '앱': '[Backyard AI](/ko/power-local-llm/backyard-ai-review-local-roleplay-2026)',
            '플랫폼': 'macOS, Windows',
            '가격 / 라이선스': '프리미엄 / 비공개 소스',
            '주요 차이점': 'Character Hub가 내장되고 설치 파일이 하나인 캐릭터 채팅 데스크톱 클라이언트',
          },
        ],
        note: '모두 PromptQuorum 디렉터리의 같은 범주 앱입니다. 현재 가격, 라이선스, 플랫폼은 각 앱의 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'GPU 없이도 실행할 수 있습니까?',
            a: '무거운 부분을 API에 맡기면 가능합니다. 빠른 시작 가이드에 따르면 각 구성 요소가 API를 쓸 수 있고, 가벼운 로컬 모델이나 CPU에 맞는 인식기도 선택할 수 있습니다. 로컬 사용에는 Apple silicon, Nvidia GPU, 최신 AMD GPU가 권장됩니다.',
          },
          {
            q: '내 Live2D 모델을 쓸 수 있습니까?',
            a: '가능합니다. 모델 폴더를 live2d-models에 두고 model_dict.json에 등록한 뒤 캐릭터 설정에서 선택합니다. Cubism 3~5 모델은 동작하고 Cubism 2는 동작하지 않으며, 모델 자체의 라이선스도 확인해야 합니다.',
          },
          {
            q: '스마트폰으로 대화할 수 있습니까?',
            a: '프로젝트에 따르면 서버를 한 컴퓨터에서 돌리고 다른 기기에서 열 수 있지만, 브라우저 마이크는 localhost나 HTTPS에서만 동작하므로 원격 사용에는 HTTPS 설정이 필요합니다.',
          },
          {
            q: '라이브 방송에 참여할 수 있습니까?',
            a: '시청자 메시지를 받는 Bilibili 라이브 채팅 클라이언트가 내장되어 있으며, 다른 플랫폼은 직접 인터페이스를 구현해야 합니다.',
          },
          {
            q: '어떤 브라우저가 가장 좋습니까?',
            a: '빠른 시작 가이드는 Chrome만 권장하며 Edge와 Safari에는 알려진 문제가 있다고 밝힙니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content: 'Open-LLM-VTuber는 직접 고른 구성 요소로 음성으로 조작하는 Live2D 동반자를 만들 수 있는 무료 오픈소스 방법이며, 모든 것을 오프라인으로 돌리는 경로도 문서화되어 있습니다. 반면 설치는 개발자 방식이고, 예시 구성은 여전히 온라인 음성을 쓰며, 저장소에는 2026년 2월 11일 이후 기능 업데이트가 없고, 품질 관련 주장은 여기서 확인하지 못했습니다. 터미널을 다룰 수 있고 이미 관리되지 않을 수 있는 프로젝트로 받아들일 수 있는 개발 애호가에게 적합하며, 지원과 완성도가 필요한 분은 먼저 꼼꼼히 시험해 보셔야 합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Open-LLM-VTuber 웹사이트](https://open-llm-vtuber.github.io) — 프로젝트 개요와 기능 목록, 2026년 10월 24일 확인.',
          '[빠른 시작 가이드](https://open-llm-vtuber.github.io/en/docs/quick-start) — 요구 사항, 설치 단계, 데스크톱 클라이언트 안내, 2026년 10월 24일 확인.',
          '[GitHub의 Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) — README, MIT 라이선스, Live2D 고지, 커밋 기록, 2026년 10월 24일 확인.',
          '[백엔드 릴리스](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/releases) — 버전 1.2.1과 다운로드 파일, 2026년 10월 24일 확인.',
          '[데스크톱 클라이언트 릴리스](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases) — Windows와 macOS 설치 파일, 2026년 10월 24일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[SillyTavern, Agnai, RisuAI 비교](/ko/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 세 가지 롤플레이 프런트엔드 비교.',
          '[HiWaifu 리뷰](/ko/power-local-llm/hiwaifu-review) — 스마트폰용 AI 동반자 앱.',
          '[SillyTavern 리뷰](/ko/local-llms/sillytavern-review) — 로어북을 지원하는 자체 호스팅 캐릭터 채팅 프런트엔드.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
        ],
      },
    },
  },
}
