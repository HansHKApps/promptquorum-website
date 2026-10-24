// IIMAGINE Desktop Review: open-source local AI chat app (macOS, Windows, Linux)
// Slug: iimagine-desktop-review
// Companion to: jan-review, gpt4all-review, lm-studio-review
// Sources: iimagine.ai/open-source, /downloads, /features/local-ai, /privacy (updated August 2026), github.com/iimagine-ai/desktop (README, MIT licence,
// release v0.1.2 published 2026-08-31 with .dmg/.exe/.AppImage assets), all checked 2026-10-24 — no hands-on testing.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/iimagine-desktop-review-hero-en.webp',
    title: 'IIMAGINE Desktop Review: Open-Source Local AI Chat App',
    seoTitle: 'IIMAGINE Desktop Review: Open-Source Local AI Chat',
    intro: 'IIMAGINE Desktop is a free, MIT-licensed desktop chat app from [IIMAGINE](https://www.iimagine.ai/open-source) for macOS, Windows and Linux. It bundles a local inference engine, chats with your documents, speaks, and exposes an OpenAI-compatible API on localhost, with optional cloud providers. This review is based on the maker\'s website, its GitHub repository and release page, and its privacy policy, checked on 24 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription: 'IIMAGINE Desktop review: open-source (MIT) desktop app with a bundled local engine, document chat, voice and a localhost API. Version 0.1.2; untested.',
    twitterDescription: 'IIMAGINE Desktop review: free MIT desktop chat app with a bundled local engine, optional cloud keys and a localhost API. What the sources confirm and what they do not.',
    audience: 'Desktop users who want a free, open-source chat app that runs local models without a terminal and need to know what the sources confirm, what stays optional cloud and what is still unproven.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'IIMAGINE Desktop review',
    targetKeywords: [
      'iimagine desktop review',
      'iimagine desktop',
      'open-source local ai desktop app',
      'local ai chat app with localhost api',
      'private ai desktop app mit license',
      'iimagine local ai',
    ],
    current_models_mentioned: ['Gemma 4', 'Kokoro'],
    current_hardware_mentioned: ['Apple Silicon', 'Windows 10', 'Ubuntu 20.04'],
    leadAnswerBlock: '**IIMAGINE Desktop (version 0.1.2, released on 31 August 2026) is an open-source desktop chat app that runs local models through a bundled engine and treats cloud providers as an option.** It needs no account and costs nothing; the privacy and quality claims here come from the maker\'s own pages, not from tests.',
    quickAnswerTop: {
      en: {
        question: 'Is IIMAGINE Desktop fully local?',
        answer: 'By default, per the maker: models run through the bundled engine and, in local mode, no data leaves the machine. It is a hybrid tool, though: you can switch a conversation to cloud providers with your own API keys, use opt-in web search or cloud text-to-speech, and install paid premium plugins.',
        bullets: [
          'Chat with PDF, Word, CSV and Markdown files through a local knowledge base.',
          'Voice input, voice chat and local text-to-speech with the Kokoro model.',
          'MCP client, agent runner, skills, personas and a plugin system.',
          'An OpenAI-compatible endpoint on localhost for other apps.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is IIMAGINE Desktop?', anchor: 'what-is-iimagine-desktop' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Requirements', anchor: 'requirements' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Local and Cloud Data Flow', anchor: 'privacy' },
      { label: 'Who Should Use It', anchor: 'who-should-use' },
      { label: 'What We Could Not Verify', anchor: 'who-should-not-use' },
      { label: 'Competitors and Alternatives', anchor: 'vs-alternatives' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'IIMAGINE Desktop is an open-source Electron app that downloads GGUF models, runs them on your computer and chats with your files, with cloud providers as an opt-in extra.',
          },
          {
            type: 'plain-terms',
            text: 'You install it like any app, let it pick a model that fits your RAM, and chat; nothing needs an account, and sending a chat to a cloud provider is a choice you make per conversation.',
          },
        ],
        items: [
          'Maintenance: version 0.1.2 was published on 31 August 2026, 54 days before this check, so no stale-project warning applies.',
          'Maturity: a 0.x line with two releases since July 2026, so expect rough edges.',
          'Engine: a bundled "iimagine-engine" that the maker says is built on llama.cpp, running GGUF models from Hugging Face.',
          'Reach: cloud providers, opt-in web search, cloud text-to-speech and paid premium plugins all sit outside the local default.',
          'Maker: IIMAGINE, which also sells a separate cloud platform that this review does not cover.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on iimagine.ai, the GitHub repository and its release page, and the privacy policy, checked on 24 October 2026. PromptQuorum has not installed, run or benchmarked the app, so speed and answer quality are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-iimagine-desktop',
        title: 'What Is IIMAGINE Desktop?',
        content: [
          '**IIMAGINE Desktop is a standalone desktop app for chatting with open models on your own machine, published under the MIT license in the GitHub repository iimagine-ai/desktop.** It is built with Electron, stores conversations in an encrypted SQLite database and, per the maker, works without an account.',
          'The company IIMAGINE also runs a separate cloud platform with accounts and credit-based plans. That platform is a different product; this review covers only the desktop app, and it treats the maker\'s cloud options as part of the app only where the app itself offers them.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**The app is a normal installer download for macOS, Windows and Linux; the files are hosted as GitHub release assets and linked from the maker\'s download page.**',
        ],
        columns: ['Platform', 'How to get it'],
        rows: [
          {
            Platform: 'macOS',
            'How to get it': '[.dmg for Apple Silicon](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop-0.1.2-arm64.dmg), macOS 12 or later, 132 MB',
          },
          {
            Platform: 'Windows',
            'How to get it': '[Setup .exe, 64-bit](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop.Setup.0.1.2.exe), Windows 10 or later, 266 MB',
          },
          {
            Platform: 'Linux',
            'How to get it': '[.AppImage](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop-0.1.2.AppImage), Ubuntu 20.04 or equivalent, 139 MB',
          },
          {
            Platform: 'Website',
            'How to get it': '[iimagine.ai/open-source](https://www.iimagine.ai/open-source) and [downloads page](https://www.iimagine.ai/downloads)',
          },
          {
            Platform: 'Privacy policy',
            'How to get it': '[iimagine.ai/privacy](https://www.iimagine.ai/privacy)',
          },
          {
            Platform: 'Source code',
            'How to get it': '[github.com/iimagine-ai/desktop](https://github.com/iimagine-ai/desktop), MIT',
          },
        ],
        note: 'Version reviewed: 0.1.2. The macOS build is for Apple Silicon only (no Intel build is offered) and is described as signed and notarized; the Windows installer is not code-signed, so SmartScreen may warn, and the Linux AppImage appears for the first time in 0.1.2. The app is free and needs no account; building from source with Node.js 18 or later is the developer path in the README.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**The sources give operating-system minimums but no RAM or disk requirement for the app; the models you download decide what your machine needs.**',
        ],
        columns: ['Item', 'What the sources say'],
        rows: [
          {
            Item: 'Operating system',
            'What the sources say': 'macOS 12 or later (Apple Silicon), Windows 10 or later (64-bit), Ubuntu 20.04 or equivalent',
          },
          {
            Item: 'Model choice',
            'What the sources say': 'A Model Advisor scans RAM and GPU and recommends a model; the README maps 4, 8, 16 and 32 GB or more to four Gemma 4 sizes',
          },
          {
            Item: 'Model download',
            'What the sources say': 'GGUF files come from Hugging Face through the in-app Model Browser, so the first model needs internet',
          },
          {
            Item: 'GPU',
            'What the sources say': 'GPU offloading is supported; a GPU is not stated as required',
          },
          {
            Item: 'Disk space',
            'What the sources say': 'Not stated for the app; each model is a separate download',
          },
        ],
        note: 'The maker\'s page shows sample model sizes (for example Llama 3.1 8B at 4.7 GB) as an illustration of the catalog; PromptQuorum did not open the in-app catalog to confirm which models it lists.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the maker\'s website or README; none has been independently tested.**',
        ],
        items: [
          '**Chat and models.** Streaming chat, conversation history and model switching on a bundled engine, with a curated GGUF catalog, resumable downloads and a hardware-based recommendation.',
          '**Documents.** A knowledge base for PDF, Word, CSV and Markdown files with vector search, plus Folder Connect, which indexes a folder and watches it for changes.',
          '**Voice.** Voice input, a voice chat mode and local text-to-speech with the Kokoro model; the README also mentions cloud text-to-speech.',
          '**Tools and extensions.** An MCP client, an agent runner for multi-step tasks with tool calling, markdown skills, personas, a prompt manager, opt-in web search and a hook-based plugin system.',
          '**Local API.** An OpenAI-compatible endpoint on localhost, which the maker says other tools such as Cursor and VS Code can use.',
          '**Storage.** Conversations are kept in SQLite with SQLCipher (AES-256) encryption on your disk.',
        ],
        note: 'Premium plugins (memory, client management, industry tools) are sold separately on the maker\'s plugin marketplace and require a subscription; the base app does not.',
      },
      privacy: {
        id: 'privacy',
        title: 'Local and Cloud Data Flow',
        content: [
          '**The maker describes three privacy levels you choose per conversation: local models on your machine, your organization\'s regional cloud (Azure, AWS or Google Cloud) with your own credentials, or third-party providers such as OpenAI, Anthropic, Google or OpenRouter with your own API keys.** Only the first keeps data on the device. The README adds that every message shows whether it stayed local or went to a cloud provider.',
          'The site and README state that the app collects no telemetry and needs no account, and that a local model makes no network calls. Model downloads, web search, cloud text-to-speech and the premium plugin marketplace do need the internet by their nature. The privacy policy (updated August 2026) lists "desktop applications" in its scope but describes data handling for the web platform and a future "Desktop Companion"; it does not mention IIMAGINE Desktop 0.1.2 or the no-telemetry claim.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maker\'s declarations, not audit results. The source code is public, but PromptQuorum has not read it or inspected the app\'s network traffic, so treat "no telemetry" and "zero bytes leave your device" as unverified here.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Privacy-minded desktop users** who want to download an installer, pick a local model and chat with their own documents without a terminal.',
          '**Developers** who want an OpenAI-compatible localhost endpoint and an MIT-licensed codebase they can read.',
          '**Teams that also use approved cloud models** and want one app that can switch between local and their own cloud credentials.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Real-world behavior.** PromptQuorum did not run the app, so speed, stability, answer quality and document-chat accuracy are not assessed.',
          '**Privacy claims.** "No telemetry" and "zero network calls" come from the README and website; the policy has no desktop-specific section for this release and the traffic was not inspected.',
          '**Model catalog.** The README names Gemma 4 sizes while the maker\'s feature page shows Llama and Mistral examples; which models the in-app catalog lists today is unconfirmed.',
          '**Maturity.** The repository was created on 11 July 2026, has two releases and showed 0 stars on 24 October 2026, so there is little community track record.',
          '**Local API security.** The sources do not say whether the localhost endpoint is on by default or protected by a key.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            App: '[Jan](/power-local-llm/jan-review)',
            Platforms: 'macOS, Windows, Linux',
            'Price / license': 'Free / Apache 2.0 variant',
            'Key difference': 'Open-source desktop chat app with its own model hub, MCP support and optional cloud connections',
          },
          {
            App: '[GPT4All](/power-local-llm/gpt4all-review)',
            Platforms: 'macOS, Windows, Linux',
            'Price / license': 'Free / MIT',
            'Key difference': 'Local-first desktop app with LocalDocs file chat',
          },
          {
            App: '[LM Studio](/power-local-llm/lm-studio-review)',
            Platforms: 'macOS, Windows, Linux',
            'Price / license': 'Free / closed source',
            'Key difference': 'Polished model runner with a local server; the app itself is not open source',
          },
        ],
        note: 'Confirm each app\'s current price, license and platforms on its own page before choosing; this table is a starting point, not a ranking.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Do I need an IIMAGINE account?',
            a: 'No, per the maker: the desktop app works without an account. Premium plugins and the company\'s separate cloud platform are the places where an account or subscription comes in.',
          },
          {
            q: 'Does it run on an Intel Mac?',
            a: 'Not according to the download page, which lists Apple Silicon (M1 to M4) only. Windows and Linux builds are 64-bit.',
          },
          {
            q: 'Why does Windows show a security warning?',
            a: 'The maker states that the Windows installer is not yet code-signed, so SmartScreen may show a warning that you have to click through with "More info" and "Run anyway".',
          },
          {
            q: 'Can other apps use its models?',
            a: 'The maker says it serves an OpenAI-compatible API on localhost that tools such as Cursor and VS Code can connect to. Whether it is enabled by default or needs a key is not stated.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'IIMAGINE Desktop is a promising, recently updated way to get an open-source desktop chat app that installs like normal software, runs local models, chats with your files and offers a localhost API, with cloud providers kept optional. Against that, it is an early 0.x release with no public track record, an Apple-Silicon-only Mac build, an unsigned Windows installer and privacy claims that rest on the maker\'s own pages. It suits desktop users who want to try a free, readable MIT codebase and accept early-stage rough edges; anyone handling sensitive data should confirm for themselves, for example in local-only mode with the network monitored, that nothing leaves the machine.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[IIMAGINE Desktop on iimagine.ai](https://www.iimagine.ai/open-source) — feature list, technology stack, privacy levels and platforms, checked 24 October 2026.',
          '[IIMAGINE Desktop downloads](https://www.iimagine.ai/downloads) — version 0.1.2, platform requirements and installation notes, checked 24 October 2026.',
          '[IIMAGINE Desktop on GitHub](https://github.com/iimagine-ai/desktop) — README, MIT license and the v0.1.2 release (31 August 2026) with its assets, checked 24 October 2026.',
          '[Local AI page](https://www.iimagine.ai/features/local-ai) — the maker\'s description of the desktop app, local API and model recommendations, checked 24 October 2026.',
          '[IIMAGINE privacy policy](https://www.iimagine.ai/privacy) — scope, third parties and the Desktop Companion section, last updated August 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Jan Review](/power-local-llm/jan-review) — an open-source offline desktop chat app.',
          '[GPT4All Review](/power-local-llm/gpt4all-review) — a local-first desktop app with document chat.',
          '[LM Studio Review](/power-local-llm/lm-studio-review) — a desktop model runner with a local server.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'IIMAGINE Desktop Review: Open-Source Local AI Chat App',
      description: 'IIMAGINE Desktop review: an MIT-licensed desktop chat app with a bundled local engine, document chat, voice and a localhost API. Platforms, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/iimagine-desktop-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: {
        '@type': 'Audience',
        audienceType: 'Desktop users evaluating an open-source local AI chat app',
      },
      about: [
        { '@type': 'Thing', name: 'IIMAGINE Desktop' },
        { '@type': 'Thing', name: 'Local AI chat app' },
        { '@type': 'Thing', name: 'Open-source software' },
        { '@type': 'Thing', name: 'Desktop application' },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/iimagine-desktop-review',
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
          name: 'IIMAGINE Desktop Review',
          item: 'https://www.promptquorum.com/power-local-llm/iimagine-desktop-review',
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
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/iimagine-desktop-review-hero-de.webp',
    title: 'IIMAGINE Desktop im Test: quelloffene lokale KI-Chat-App',
    seoTitle: 'IIMAGINE Desktop Rezension: Lokaler KI-Chat, Open Source',
    intro: 'IIMAGINE Desktop ist eine kostenlose Desktop-Chat-App von [IIMAGINE](https://www.iimagine.ai/open-source) unter MIT-Lizenz für macOS, Windows und Linux. Sie bringt eine lokale Inferenz-Engine mit, chattet mit Ihren Dokumenten, spricht und stellt auf localhost eine OpenAI-kompatible API bereit; Cloud-Anbieter sind optional. Diese Rezension stützt sich auf die Website des Herstellers, sein GitHub-Repository samt Release-Seite und seine Datenschutzerklärung, geprüft am 24. Oktober 2026; PromptQuorum hat die App nicht selbst getestet.',
    metaDescription: 'IIMAGINE Desktop Rezension: quelloffene MIT-App mit eigener lokaler Engine, Dokumenten-Chat, Sprache und localhost-API. Version 0.1.2, ungetestet.',
    twitterDescription: 'IIMAGINE Desktop Rezension: kostenlose MIT-Desktop-Chat-App mit lokaler Engine, optionalen Cloud-Schlüsseln und localhost-API. Was die Quellen bestätigen und was nicht.',
    audience: 'Desktop-Nutzer, die eine kostenlose, quelloffene Chat-App suchen, die lokale Modelle ohne Terminal ausführt, und wissen müssen, was die Quellen bestätigen, was optional in der Cloud läuft und was unbewiesen ist.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'IIMAGINE Desktop Rezension',
    targetKeywords: [
      'iimagine desktop rezension',
      'iimagine desktop',
      'quelloffene lokale ki desktop app',
      'lokale ki chat app mit localhost api',
      'private ki desktop app mit mit-lizenz',
      'iimagine lokale ki',
    ],
    current_models_mentioned: ['Gemma 4', 'Kokoro'],
    current_hardware_mentioned: ['Apple Silicon', 'Windows 10', 'Ubuntu 20.04'],
    leadAnswerBlock: '**IIMAGINE Desktop (Version 0.1.2, veröffentlicht am 31. August 2026) ist eine quelloffene Desktop-Chat-App, die lokale Modelle über eine mitgelieferte Engine ausführt und Cloud-Anbieter nur als Option behandelt.** Sie braucht kein Konto und kostet nichts; die Aussagen zu Datenschutz und Qualität stammen von den eigenen Seiten des Herstellers, nicht aus Tests.',
    quickAnswerTop: {
      de: {
        question: 'Läuft IIMAGINE Desktop vollständig lokal?',
        answer: 'Standardmäßig laut Hersteller ja: Die Modelle laufen über die mitgelieferte Engine, und im lokalen Modus verlassen keine Daten den Rechner. Es ist aber ein Hybrid-Werkzeug: Sie können einzelne Unterhaltungen mit eigenen API-Schlüsseln an Cloud-Anbieter schicken, die optionale Websuche oder Cloud-Sprachausgabe nutzen und kostenpflichtige Premium-Plugins installieren.',
        bullets: [
          'Chat mit PDF-, Word-, CSV- und Markdown-Dateien über eine lokale Wissensdatenbank.',
          'Spracheingabe, Sprachchat und lokale Sprachausgabe mit dem Modell Kokoro.',
          'MCP-Client, Agent-Runner, Skills, Personas und ein Plugin-System.',
          'Ein OpenAI-kompatibler Endpunkt auf localhost für andere Programme.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist IIMAGINE Desktop?', anchor: 'what-is-iimagine-desktop' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Anforderungen', anchor: 'requirements' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Datenfluss: lokal und Cloud', anchor: 'privacy' },
      { label: 'Für wen sich die App eignet', anchor: 'who-should-use' },
      { label: 'Was wir nicht überprüfen konnten', anchor: 'who-should-not-use' },
      { label: 'Wettbewerber und Alternativen', anchor: 'vs-alternatives' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'IIMAGINE Desktop ist eine quelloffene Electron-App, die GGUF-Modelle lädt, auf Ihrem Computer ausführt und mit Ihren Dateien chattet; Cloud-Anbieter sind ein optionales Extra.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren sie wie jede andere App, lassen sich ein zum Arbeitsspeicher passendes Modell vorschlagen und chatten; ein Konto ist nicht nötig, und ob ein Chat an einen Cloud-Anbieter geht, entscheiden Sie pro Unterhaltung.',
          },
        ],
        items: [
          'Pflege: Version 0.1.2 erschien am 31. August 2026, 54 Tage vor dieser Prüfung; ein Warnhinweis für veraltete Projekte entfällt daher.',
          'Reifegrad: eine 0.x-Linie mit zwei Releases seit Juli 2026, mit entsprechenden Ecken und Kanten.',
          'Engine: eine mitgelieferte „iimagine-engine“, die laut Hersteller auf llama.cpp basiert und GGUF-Modelle von Hugging Face ausführt.',
          'Reichweite: Cloud-Anbieter, optionale Websuche, Cloud-Sprachausgabe und kostenpflichtige Premium-Plugins liegen außerhalb des lokalen Standards.',
          'Hersteller: IIMAGINE, das außerdem eine separate Cloud-Plattform verkauft, die diese Rezension nicht behandelt.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf iimagine.ai, das GitHub-Repository mit Release-Seite und die Datenschutzerklärung, geprüft am 24. Oktober 2026. PromptQuorum hat die App weder installiert noch ausgeführt oder gemessen; Geschwindigkeit und Antwortqualität werden daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-iimagine-desktop',
        title: 'Was ist IIMAGINE Desktop?',
        content: [
          '**IIMAGINE Desktop ist eine eigenständige Desktop-App zum Chatten mit offenen Modellen auf Ihrem eigenen Rechner, veröffentlicht unter der MIT-Lizenz im GitHub-Repository iimagine-ai/desktop.** Sie basiert auf Electron, speichert Unterhaltungen in einer verschlüsselten SQLite-Datenbank und funktioniert laut Hersteller ohne Konto.',
          'Das Unternehmen IIMAGINE betreibt außerdem eine separate Cloud-Plattform mit Konten und Guthaben-Tarifen. Das ist ein anderes Produkt; diese Rezension behandelt nur die Desktop-App und die Cloud-Optionen des Herstellers nur dort, wo die App selbst sie anbietet.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Die App ist ein normaler Installer-Download für macOS, Windows und Linux; die Dateien liegen als GitHub-Release-Assets und sind von der Download-Seite des Herstellers verlinkt.**',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            Plattform: 'macOS',
            Bezugsquelle: '[.dmg für Apple Silicon](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop-0.1.2-arm64.dmg), macOS 12 oder neuer, 132 MB',
          },
          {
            Plattform: 'Windows',
            Bezugsquelle: '[Setup-.exe, 64-Bit](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop.Setup.0.1.2.exe), Windows 10 oder neuer, 266 MB',
          },
          {
            Plattform: 'Linux',
            Bezugsquelle: '[.AppImage](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop-0.1.2.AppImage), Ubuntu 20.04 oder gleichwertig, 139 MB',
          },
          {
            Plattform: 'Website',
            Bezugsquelle: '[iimagine.ai/open-source](https://www.iimagine.ai/open-source) und [Download-Seite](https://www.iimagine.ai/downloads)',
          },
          {
            Plattform: 'Datenschutzerklärung',
            Bezugsquelle: '[iimagine.ai/privacy](https://www.iimagine.ai/privacy)',
          },
          {
            Plattform: 'Quellcode',
            Bezugsquelle: '[github.com/iimagine-ai/desktop](https://github.com/iimagine-ai/desktop), MIT',
          },
        ],
        note: 'Geprüfte Version: 0.1.2. Der macOS-Build läuft nur auf Apple Silicon (ein Intel-Build wird nicht angeboten) und ist laut Hersteller signiert und notarisiert; der Windows-Installer ist nicht code-signiert, sodass SmartScreen warnen kann, und das Linux-AppImage taucht erstmals in 0.1.2 auf. Die App ist kostenlos und braucht kein Konto; der Selbstbau aus dem Quellcode mit Node.js 18 oder neuer ist der Entwicklerweg aus der README.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
          '**Die Quellen nennen Mindestversionen des Betriebssystems, aber keine RAM- oder Speicheranforderung für die App; welche Hardware Sie brauchen, bestimmen die heruntergeladenen Modelle.**',
        ],
        columns: ['Punkt', 'Angaben der Quellen'],
        rows: [
          {
            Punkt: 'Betriebssystem',
            'Angaben der Quellen': 'macOS 12 oder neuer (Apple Silicon), Windows 10 oder neuer (64-Bit), Ubuntu 20.04 oder gleichwertig',
          },
          {
            Punkt: 'Modellwahl',
            'Angaben der Quellen': 'Ein Model Advisor prüft RAM und GPU und empfiehlt ein Modell; die README ordnet 4, 8, 16 und 32 GB oder mehr vier Gemma-4-Größen zu',
          },
          {
            Punkt: 'Modell-Download',
            'Angaben der Quellen': 'GGUF-Dateien kommen über den integrierten Model Browser von Hugging Face, das erste Modell braucht also Internet',
          },
          {
            Punkt: 'GPU',
            'Angaben der Quellen': 'GPU-Offloading wird unterstützt; eine GPU ist nicht als Pflicht genannt',
          },
          {
            Punkt: 'Speicherplatz',
            'Angaben der Quellen': 'Für die App nicht angegeben; jedes Modell ist ein eigener Download',
          },
        ],
        note: 'Die Seite des Herstellers zeigt Beispielgrößen (etwa Llama 3.1 8B mit 4,7 GB) als Illustration des Katalogs; PromptQuorum hat den App-Katalog nicht geöffnet und kann nicht bestätigen, welche Modelle er enthält.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt von der Website oder der README des Herstellers; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Chat und Modelle.** Streaming-Chat, Unterhaltungsverlauf und Modellwechsel auf einer mitgelieferten Engine, mit kuratiertem GGUF-Katalog, fortsetzbaren Downloads und einer hardwarebasierten Empfehlung.',
          '**Dokumente.** Eine Wissensdatenbank für PDF-, Word-, CSV- und Markdown-Dateien mit Vektorsuche sowie Folder Connect, das einen Ordner indiziert und auf Änderungen überwacht.',
          '**Sprache.** Spracheingabe, ein Sprachchat-Modus und lokale Sprachausgabe mit dem Modell Kokoro; die README erwähnt auch Cloud-Sprachausgabe.',
          '**Werkzeuge und Erweiterungen.** Ein MCP-Client, ein Agent-Runner für mehrstufige Aufgaben mit Tool-Aufrufen, Markdown-Skills, Personas, ein Prompt-Manager, optionale Websuche und ein Hook-basiertes Plugin-System.',
          '**Lokale API.** Ein OpenAI-kompatibler Endpunkt auf localhost, den laut Hersteller andere Werkzeuge wie Cursor und VS Code nutzen können.',
          '**Speicherung.** Unterhaltungen liegen in SQLite mit SQLCipher-Verschlüsselung (AES-256) auf Ihrer Festplatte.',
        ],
        note: 'Premium-Plugins (Gedächtnis, Kundenverwaltung, Branchenwerkzeuge) werden separat im Plugin-Marktplatz des Herstellers verkauft und erfordern ein Abonnement; die Basis-App nicht.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss: lokal und Cloud',
        content: [
          '**Der Hersteller beschreibt drei Datenschutzstufen, die Sie pro Unterhaltung wählen: lokale Modelle auf Ihrem Rechner, die regionale Cloud Ihrer Organisation (Azure, AWS oder Google Cloud) mit Ihren eigenen Zugangsdaten oder Drittanbieter wie OpenAI, Anthropic, Google oder OpenRouter mit Ihren eigenen API-Schlüsseln.** Nur die erste hält die Daten auf dem Gerät. Die README ergänzt, dass jede Nachricht anzeigt, ob sie lokal blieb oder an einen Cloud-Anbieter ging.',
          'Website und README geben an, dass die App keine Telemetrie erhebt und kein Konto braucht und dass ein lokales Modell keine Netzwerkaufrufe auslöst. Modell-Downloads, Websuche, Cloud-Sprachausgabe und der Marktplatz für Premium-Plugins brauchen naturgemäß Internet. Die Datenschutzerklärung (Stand August 2026) nennt „desktop applications“ in ihrem Geltungsbereich, beschreibt aber den Umgang mit Daten bei der Web-Plattform und einem künftigen „Desktop Companion“; IIMAGINE Desktop 0.1.2 und die Aussage zur fehlenden Telemetrie erwähnt sie nicht.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Erklärungen des Herstellers, keine Prüfergebnisse. Der Quellcode ist öffentlich, aber PromptQuorum hat ihn nicht gelesen und den Netzwerkverkehr der App nicht untersucht; „keine Telemetrie“ und „null Bytes verlassen Ihr Gerät“ gelten hier daher als nicht überprüft.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Datenschutzbewusste Desktop-Nutzer**, die einen Installer laden, ein lokales Modell wählen und ohne Terminal mit eigenen Dokumenten chatten möchten.',
          '**Entwickler**, die einen OpenAI-kompatiblen localhost-Endpunkt und eine lesbare, MIT-lizenzierte Codebasis wünschen.',
          '**Teams, die auch freigegebene Cloud-Modelle nutzen** und eine App möchten, die zwischen lokal und den eigenen Cloud-Zugangsdaten wechseln kann.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Praxisverhalten.** PromptQuorum hat die App nicht ausgeführt; Geschwindigkeit, Stabilität, Antwortqualität und die Genauigkeit des Dokumenten-Chats werden nicht bewertet.',
          '**Datenschutzangaben.** „Keine Telemetrie“ und „null Netzwerkaufrufe“ stammen aus README und Website; die Erklärung hat für diese Version keinen desktopspezifischen Abschnitt, und der Datenverkehr wurde nicht untersucht.',
          '**Modellkatalog.** Die README nennt Gemma-4-Größen, die Funktionsseite des Herstellers zeigt dagegen Llama- und Mistral-Beispiele; welche Modelle der App-Katalog heute enthält, ist unbestätigt.',
          '**Reife.** Das Repository entstand am 11. Juli 2026, hat zwei Releases und zeigte am 24. Oktober 2026 null Sterne; es gibt also kaum Erfahrungswerte aus der Community.',
          '**Sicherheit der lokalen API.** Die Quellen sagen nicht, ob der localhost-Endpunkt standardmäßig aktiv oder durch einen Schlüssel geschützt ist.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wesentlicher Unterschied'],
        rows: [
          {
            App: '[Jan](/de/power-local-llm/jan-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Gratis / Apache-2.0-Variante',
            'Wesentlicher Unterschied': 'Quelloffene Desktop-Chat-App mit eigenem Modell-Hub, MCP-Unterstützung und optionalen Cloud-Anbindungen',
          },
          {
            App: '[GPT4All](/de/power-local-llm/gpt4all-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Gratis / MIT',
            'Wesentlicher Unterschied': 'Lokal ausgerichtete Desktop-App mit Datei-Chat über LocalDocs',
          },
          {
            App: '[LM Studio](/de/power-local-llm/lm-studio-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Gratis / Closed Source',
            'Wesentlicher Unterschied': 'Ausgereifter Modell-Runner mit lokalem Server; die App selbst ist nicht quelloffen',
          },
        ],
        note: 'Prüfen Sie Preis, Lizenz und Plattformen jeder App vor der Wahl auf deren eigener Seite; die Tabelle ist ein Ausgangspunkt, kein Ranking.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Brauche ich ein IIMAGINE-Konto?',
            a: 'Nein, laut Hersteller funktioniert die Desktop-App ohne Konto. Ein Konto oder Abonnement kommt bei Premium-Plugins und der separaten Cloud-Plattform des Unternehmens ins Spiel.',
          },
          {
            q: 'Läuft sie auf einem Intel-Mac?',
            a: 'Laut Download-Seite nicht; dort ist nur Apple Silicon (M1 bis M4) aufgeführt. Die Windows- und Linux-Builds sind 64-Bit.',
          },
          {
            q: 'Warum zeigt Windows eine Sicherheitswarnung?',
            a: 'Der Hersteller gibt an, dass der Windows-Installer noch nicht code-signiert ist; SmartScreen kann daher eine Warnung zeigen, die Sie mit „Weitere Informationen“ und „Trotzdem ausführen“ bestätigen müssen.',
          },
          {
            q: 'Können andere Programme ihre Modelle nutzen?',
            a: 'Der Hersteller sagt, dass eine OpenAI-kompatible API auf localhost bereitsteht, mit der sich Werkzeuge wie Cursor und VS Code verbinden können. Ob sie standardmäßig aktiv ist oder einen Schlüssel braucht, steht nicht in den Quellen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'IIMAGINE Desktop ist ein vielversprechender, kürzlich aktualisierter Weg zu einer quelloffenen Desktop-Chat-App, die sich wie normale Software installieren lässt, lokale Modelle ausführt, mit Ihren Dateien chattet und eine localhost-API bietet, wobei Cloud-Anbieter optional bleiben. Dem stehen eine frühe 0.x-Version ohne öffentliche Erfahrungswerte, ein Mac-Build nur für Apple Silicon, ein nicht signierter Windows-Installer und Datenschutzangaben gegenüber, die auf den eigenen Seiten des Herstellers beruhen. Die App passt zu Desktop-Nutzern, die eine kostenlose, lesbare MIT-Codebasis ausprobieren und Ecken und Kanten einer frühen Version in Kauf nehmen; wer sensible Daten verarbeitet, sollte selbst prüfen, etwa im rein lokalen Modus mit überwachtem Netzwerk, dass nichts den Rechner verlässt.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[IIMAGINE Desktop auf iimagine.ai](https://www.iimagine.ai/open-source) — Funktionsliste, Technologie-Stack, Datenschutzstufen und Plattformen, geprüft am 24. Oktober 2026.',
          '[Downloads von IIMAGINE Desktop](https://www.iimagine.ai/downloads) — Version 0.1.2, Plattformanforderungen und Installationshinweise, geprüft am 24. Oktober 2026.',
          '[IIMAGINE Desktop auf GitHub](https://github.com/iimagine-ai/desktop) — README, MIT-Lizenz und das Release v0.1.2 (31. August 2026) mit seinen Dateien, geprüft am 24. Oktober 2026.',
          '[Seite „Local AI“](https://www.iimagine.ai/features/local-ai) — Beschreibung der Desktop-App, der lokalen API und der Modellempfehlungen durch den Hersteller, geprüft am 24. Oktober 2026.',
          '[Datenschutzerklärung von IIMAGINE](https://www.iimagine.ai/privacy) — Geltungsbereich, Drittanbieter und Abschnitt zum Desktop Companion, zuletzt aktualisiert im August 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Jan-Rezension](/de/power-local-llm/jan-review) — eine quelloffene Offline-Desktop-Chat-App.',
          '[GPT4All-Rezension](/de/power-local-llm/gpt4all-review) — eine lokal ausgerichtete Desktop-App mit Dokumenten-Chat.',
          '[LM-Studio-Rezension](/de/power-local-llm/lm-studio-review) — ein Desktop-Modell-Runner mit lokalem Server.',
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
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/iimagine-desktop-review-hero-es.webp',
    title: 'Reseña de IIMAGINE Desktop: app de chat con IA local y código abierto',
    seoTitle: 'Reseña de IIMAGINE Desktop: chat con IA local, open source',
    intro: 'IIMAGINE Desktop es una app de chat de escritorio gratuita, con licencia MIT, de [IIMAGINE](https://www.iimagine.ai/open-source) para macOS, Windows y Linux. Incluye un motor de inferencia local, chatea con tus documentos, habla y expone en localhost una API compatible con OpenAI, con proveedores en la nube como opción. Esta reseña se basa en el sitio web del fabricante, su repositorio de GitHub con la página de versiones y su política de privacidad, revisados el 24 de octubre de 2026; PromptQuorum no ha probado la app en persona.',
    metaDescription: 'Reseña de IIMAGINE Desktop: app de código abierto (MIT) con motor local, chat con documentos, voz y API localhost. Versión 0.1.2; sin probar.',
    twitterDescription: 'Reseña de IIMAGINE Desktop: app de chat MIT gratuita con motor local incluido, claves de nube opcionales y API localhost. Qué confirman las fuentes y qué no.',
    audience: 'Usuarios de escritorio que quieren una app de chat gratuita y de código abierto que ejecute modelos locales sin terminal, y necesitan saber qué confirman las fuentes, qué sigue siendo nube opcional y qué no está probado.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña IIMAGINE Desktop',
    targetKeywords: [
      'reseña iimagine desktop',
      'iimagine desktop',
      'app de escritorio de ia local de código abierto',
      'app de chat con ia local y api localhost',
      'app de ia privada para escritorio licencia mit',
      'iimagine ia local',
    ],
    current_models_mentioned: ['Gemma 4', 'Kokoro'],
    current_hardware_mentioned: ['Apple Silicon', 'Windows 10', 'Ubuntu 20.04'],
    leadAnswerBlock: '**IIMAGINE Desktop (versión 0.1.2, publicada el 31 de agosto de 2026) es una app de chat de escritorio de código abierto que ejecuta modelos locales con un motor incluido y trata los proveedores en la nube como una opción.** No necesita cuenta y no cuesta nada; las afirmaciones de privacidad y calidad proceden de las propias páginas del fabricante, no de pruebas.',
    quickAnswerTop: {
      es: {
        question: '¿IIMAGINE Desktop es totalmente local?',
        answer: 'Por defecto, según el fabricante: los modelos se ejecutan con el motor incluido y, en modo local, ningún dato sale del equipo. Aun así es una herramienta híbrida: puedes enviar una conversación a proveedores en la nube con tus propias claves de API, usar la búsqueda web opcional o la voz en la nube e instalar plugins premium de pago.',
        bullets: [
          'Chat con archivos PDF, Word, CSV y Markdown mediante una base de conocimiento local.',
          'Entrada de voz, chat de voz y síntesis de voz local con el modelo Kokoro.',
          'Cliente MCP, ejecutor de agentes, skills, personas y un sistema de plugins.',
          'Un endpoint compatible con OpenAI en localhost para otras aplicaciones.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es IIMAGINE Desktop?', anchor: 'what-is-iimagine-desktop' },
      { label: 'Cómo obtenerla', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Flujo de datos: local y nube', anchor: 'privacy' },
      { label: 'Quién debería usarla', anchor: 'who-should-use' },
      { label: 'Lo que no pudimos verificar', anchor: 'who-should-not-use' },
      { label: 'Competidores y alternativas', anchor: 'vs-alternatives' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'IIMAGINE Desktop es una app Electron de código abierto que descarga modelos GGUF, los ejecuta en tu ordenador y chatea con tus archivos; los proveedores en la nube son un extra opcional.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas como cualquier app, dejas que elija un modelo acorde con tu RAM y chateas; no hace falta cuenta, y enviar un chat a un proveedor en la nube es una decisión que tomas en cada conversación.',
          },
        ],
        items: [
          'Mantenimiento: la versión 0.1.2 se publicó el 31 de agosto de 2026, 54 días antes de esta revisión, así que no corresponde el aviso de proyecto abandonado.',
          'Madurez: una serie 0.x con dos versiones desde julio de 2026, así que cabe esperar aristas sin pulir.',
          'Motor: un «iimagine-engine» incluido que, según el fabricante, se basa en llama.cpp y ejecuta modelos GGUF de Hugging Face.',
          'Alcance: los proveedores en la nube, la búsqueda web opcional, la voz en la nube y los plugins premium de pago quedan fuera del modo local por defecto.',
          'Fabricante: IIMAGINE, que también vende una plataforma en la nube aparte que esta reseña no cubre.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en iimagine.ai, el repositorio de GitHub con su página de versiones y la política de privacidad, revisados el 24 de octubre de 2026. PromptQuorum no ha instalado, ejecutado ni medido la app, por lo que no se evalúan la velocidad ni la calidad de las respuestas.',
          },
        ],
      },
      overview: {
        id: 'what-is-iimagine-desktop',
        title: '¿Qué es IIMAGINE Desktop?',
        content: [
          '**IIMAGINE Desktop es una app de escritorio independiente para chatear con modelos abiertos en tu propio equipo, publicada con licencia MIT en el repositorio de GitHub iimagine-ai/desktop.** Está construida con Electron, guarda las conversaciones en una base de datos SQLite cifrada y, según el fabricante, funciona sin cuenta.',
          'La empresa IIMAGINE también gestiona una plataforma en la nube aparte, con cuentas y planes de créditos. Es otro producto; esta reseña cubre solo la app de escritorio y trata las opciones de nube del fabricante únicamente donde la propia app las ofrece.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerla',
        content: [
          '**La app es una descarga con instalador normal para macOS, Windows y Linux; los archivos están alojados como recursos de versiones en GitHub y enlazados desde la página de descargas del fabricante.**',
        ],
        columns: ['Plataforma', 'Cómo obtenerla'],
        rows: [
          {
            Plataforma: 'macOS',
            'Cómo obtenerla': '[.dmg para Apple Silicon](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop-0.1.2-arm64.dmg), macOS 12 o posterior, 132 MB',
          },
          {
            Plataforma: 'Windows',
            'Cómo obtenerla': '[Instalador .exe de 64 bits](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop.Setup.0.1.2.exe), Windows 10 o posterior, 266 MB',
          },
          {
            Plataforma: 'Linux',
            'Cómo obtenerla': '[.AppImage](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop-0.1.2.AppImage), Ubuntu 20.04 o equivalente, 139 MB',
          },
          {
            Plataforma: 'Sitio web',
            'Cómo obtenerla': '[iimagine.ai/open-source](https://www.iimagine.ai/open-source) y [página de descargas](https://www.iimagine.ai/downloads)',
          },
          {
            Plataforma: 'Política de privacidad',
            'Cómo obtenerla': '[iimagine.ai/privacy](https://www.iimagine.ai/privacy)',
          },
          {
            Plataforma: 'Código fuente',
            'Cómo obtenerla': '[github.com/iimagine-ai/desktop](https://github.com/iimagine-ai/desktop), MIT',
          },
        ],
        note: 'Versión revisada: 0.1.2. La compilación para macOS es solo para Apple Silicon (no se ofrece versión para Intel) y, según el fabricante, está firmada y notarizada; el instalador de Windows no está firmado con certificado de código, por lo que SmartScreen puede mostrar un aviso, y el AppImage de Linux aparece por primera vez en la 0.1.2. La app es gratuita y no necesita cuenta; compilar desde el código fuente con Node.js 18 o posterior es la vía para desarrolladores del README.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**Las fuentes indican versiones mínimas del sistema operativo, pero ningún requisito de RAM ni de disco para la app; los modelos que descargues determinan lo que necesita tu equipo.**',
        ],
        columns: ['Elemento', 'Lo que dicen las fuentes'],
        rows: [
          {
            Elemento: 'Sistema operativo',
            'Lo que dicen las fuentes': 'macOS 12 o posterior (Apple Silicon), Windows 10 o posterior (64 bits), Ubuntu 20.04 o equivalente',
          },
          {
            Elemento: 'Elección de modelo',
            'Lo que dicen las fuentes': 'Un Model Advisor analiza la RAM y la GPU y recomienda un modelo; el README asocia 4, 8, 16 y 32 GB o más con cuatro tamaños de Gemma 4',
          },
          {
            Elemento: 'Descarga de modelos',
            'Lo que dicen las fuentes': 'Los archivos GGUF vienen de Hugging Face mediante el Model Browser integrado, así que el primer modelo requiere internet',
          },
          {
            Elemento: 'GPU',
            'Lo que dicen las fuentes': 'Se admite la descarga de capas a la GPU; no se indica que sea obligatoria',
          },
          {
            Elemento: 'Espacio en disco',
            'Lo que dicen las fuentes': 'No se indica para la app; cada modelo es una descarga aparte',
          },
        ],
        note: 'La página del fabricante muestra tamaños de ejemplo (por ejemplo, Llama 3.1 8B con 4.7 GB) como ilustración del catálogo; PromptQuorum no abrió el catálogo de la app y no puede confirmar qué modelos incluye.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada punto de abajo procede del sitio web o del README del fabricante; ninguno se ha probado de forma independiente.**',
        ],
        items: [
          '**Chat y modelos.** Chat con respuesta en streaming, historial de conversaciones y cambio de modelo sobre un motor incluido, con un catálogo GGUF seleccionado, descargas reanudables y una recomendación basada en el hardware.',
          '**Documentos.** Una base de conocimiento para archivos PDF, Word, CSV y Markdown con búsqueda vectorial, más Folder Connect, que indexa una carpeta y vigila sus cambios.',
          '**Voz.** Entrada de voz, un modo de chat de voz y síntesis de voz local con el modelo Kokoro; el README también menciona síntesis de voz en la nube.',
          '**Herramientas y extensiones.** Un cliente MCP, un ejecutor de agentes para tareas de varios pasos con llamadas a herramientas, skills en Markdown, personas, un gestor de prompts, búsqueda web opcional y un sistema de plugins basado en hooks.',
          '**API local.** Un endpoint compatible con OpenAI en localhost que, según el fabricante, otras herramientas como Cursor y VS Code pueden usar.',
          '**Almacenamiento.** Las conversaciones se guardan en SQLite con cifrado SQLCipher (AES-256) en tu disco.',
        ],
        note: 'Los plugins premium (memoria, gestión de clientes, herramientas sectoriales) se venden aparte en el mercado de plugins del fabricante y requieren suscripción; la app base no.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos: local y nube',
        content: [
          '**El fabricante describe tres niveles de privacidad que eliges en cada conversación: modelos locales en tu equipo, la nube regional de tu organización (Azure, AWS o Google Cloud) con tus propias credenciales, o proveedores externos como OpenAI, Anthropic, Google u OpenRouter con tus propias claves de API.** Solo el primero mantiene los datos en el dispositivo. El README añade que cada mensaje indica si se quedó en local o fue a un proveedor en la nube.',
          'El sitio y el README afirman que la app no recopila telemetría ni necesita cuenta, y que un modelo local no realiza llamadas de red. Las descargas de modelos, la búsqueda web, la voz en la nube y el mercado de plugins premium necesitan internet por naturaleza. La política de privacidad (actualizada en agosto de 2026) menciona las «desktop applications» en su ámbito, pero describe el tratamiento de datos de la plataforma web y de un futuro «Desktop Companion»; no cita IIMAGINE Desktop 0.1.2 ni la afirmación de que no hay telemetría.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del fabricante, no resultados de una auditoría. El código fuente es público, pero PromptQuorum no lo ha leído ni ha inspeccionado el tráfico de red de la app, así que «sin telemetría» y «cero bytes salen de tu dispositivo» se consideran aquí no verificados.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usarla',
        items: [
          '**Usuarios de escritorio preocupados por la privacidad** que quieren descargar un instalador, elegir un modelo local y chatear con sus propios documentos sin terminal.',
          '**Desarrolladores** que buscan un endpoint localhost compatible con OpenAI y un código con licencia MIT que puedan leer.',
          '**Equipos que también usan modelos en la nube aprobados** y quieren una sola app que cambie entre local y sus propias credenciales de nube.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Comportamiento real.** PromptQuorum no ejecutó la app, por lo que no se evalúan la velocidad, la estabilidad, la calidad de las respuestas ni la precisión del chat con documentos.',
          '**Afirmaciones de privacidad.** «Sin telemetría» y «cero llamadas de red» proceden del README y del sitio web; la política no tiene una sección específica de escritorio para esta versión y no se inspeccionó el tráfico.',
          '**Catálogo de modelos.** El README nombra tamaños de Gemma 4, mientras que la página de funciones del fabricante muestra ejemplos de Llama y Mistral; no está confirmado qué modelos incluye hoy el catálogo de la app.',
          '**Madurez.** El repositorio se creó el 11 de julio de 2026, tiene dos versiones y mostraba 0 estrellas el 24 de octubre de 2026, así que apenas hay trayectoria en la comunidad.',
          '**Seguridad de la API local.** Las fuentes no dicen si el endpoint localhost está activo por defecto ni si lo protege una clave.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            App: '[Jan](/es/power-local-llm/jan-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / variante de Apache 2.0',
            'Diferencia clave': 'App de chat de escritorio de código abierto con su propio hub de modelos, compatibilidad con MCP y conexiones opcionales a la nube',
          },
          {
            App: '[GPT4All](/es/power-local-llm/gpt4all-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'App de escritorio centrada en lo local, con chat con archivos mediante LocalDocs',
          },
          {
            App: '[LM Studio](/es/power-local-llm/lm-studio-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / código cerrado',
            'Diferencia clave': 'Ejecutor de modelos pulido con servidor local; la propia app no es de código abierto',
          },
        ],
        note: 'Confirma el precio, la licencia y las plataformas actuales de cada app en su propia página antes de decidir; la tabla es un punto de partida, no un ranking.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Necesito una cuenta de IIMAGINE?',
            a: 'No, según el fabricante: la app de escritorio funciona sin cuenta. Una cuenta o suscripción aparece en los plugins premium y en la plataforma en la nube aparte de la empresa.',
          },
          {
            q: '¿Funciona en un Mac con Intel?',
            a: 'No según la página de descargas, que lista solo Apple Silicon (M1 a M4). Las compilaciones de Windows y Linux son de 64 bits.',
          },
          {
            q: '¿Por qué Windows muestra una advertencia de seguridad?',
            a: 'El fabricante indica que el instalador de Windows aún no está firmado con certificado de código, por lo que SmartScreen puede mostrar un aviso que debes superar con «Más información» y «Ejecutar de todas formas».',
          },
          {
            q: '¿Pueden otras apps usar sus modelos?',
            a: 'El fabricante dice que sirve una API compatible con OpenAI en localhost a la que pueden conectarse herramientas como Cursor y VS Code. Las fuentes no indican si está activa por defecto o si requiere una clave.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'IIMAGINE Desktop es una opción prometedora y actualizada hace poco para tener una app de chat de escritorio de código abierto que se instala como un programa normal, ejecuta modelos locales, chatea con tus archivos y ofrece una API localhost, con los proveedores en la nube como algo opcional. En contra, es una versión 0.x temprana sin trayectoria pública, con una compilación para Mac solo para Apple Silicon, un instalador de Windows sin firmar y afirmaciones de privacidad que descansan en las propias páginas del fabricante. Encaja con usuarios de escritorio que quieren probar un código MIT gratuito y legible y aceptan las asperezas de una versión temprana; quien maneje datos sensibles debería comprobar por su cuenta, por ejemplo en modo solo local con la red monitorizada, que nada sale del equipo.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[IIMAGINE Desktop en iimagine.ai](https://www.iimagine.ai/open-source) — lista de funciones, pila tecnológica, niveles de privacidad y plataformas, revisado el 24 de octubre de 2026.',
          '[Descargas de IIMAGINE Desktop](https://www.iimagine.ai/downloads) — versión 0.1.2, requisitos de plataforma y notas de instalación, revisado el 24 de octubre de 2026.',
          '[IIMAGINE Desktop en GitHub](https://github.com/iimagine-ai/desktop) — README, licencia MIT y la versión v0.1.2 (31 de agosto de 2026) con sus archivos, revisado el 24 de octubre de 2026.',
          '[Página Local AI](https://www.iimagine.ai/features/local-ai) — descripción del fabricante de la app de escritorio, la API local y las recomendaciones de modelos, revisada el 24 de octubre de 2026.',
          '[Política de privacidad de IIMAGINE](https://www.iimagine.ai/privacy) — ámbito, terceros y la sección del Desktop Companion, actualizada por última vez en agosto de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Jan](/es/power-local-llm/jan-review) — una app de chat de escritorio de código abierto y sin conexión.',
          '[Reseña de GPT4All](/es/power-local-llm/gpt4all-review) — una app de escritorio centrada en lo local con chat con documentos.',
          '[Reseña de LM Studio](/es/power-local-llm/lm-studio-review) — un ejecutor de modelos de escritorio con servidor local.',
          '[Directorio de software LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
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
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/iimagine-desktop-review-hero-fr.webp',
    title: 'Test d\'IIMAGINE Desktop : appli de chat IA locale open source',
    seoTitle: 'Test d\'IIMAGINE Desktop : chat IA local open source',
    intro: 'IIMAGINE Desktop est une application de chat de bureau gratuite, sous licence MIT, éditée par [IIMAGINE](https://www.iimagine.ai/open-source) pour macOS, Windows et Linux. Elle embarque un moteur d\'inférence local, discute avec vos documents, parle et expose sur localhost une API compatible OpenAI, avec des fournisseurs cloud en option. Ce test s\'appuie sur le site de l\'éditeur, son dépôt GitHub avec la page des versions et sa politique de confidentialité, consultés le 24 octobre 2026 ; PromptQuorum n\'a pas testé l\'application lui-même.',
    metaDescription: 'Test d\'IIMAGINE Desktop : appli open source (MIT) avec moteur local intégré, chat avec documents, voix et API localhost. Version 0.1.2 ; non testée.',
    twitterDescription: 'Test d\'IIMAGINE Desktop : appli de chat MIT gratuite avec moteur local, clés cloud facultatives et API localhost. Ce que confirment les sources, et ce qu\'elles ne confirment pas.',
    audience: 'Utilisateurs de bureau qui veulent une appli de chat gratuite et open source exécutant des modèles locaux sans terminal, et qui doivent savoir ce que confirment les sources, ce qui reste du cloud facultatif et ce qui n\'est pas prouvé.',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test IIMAGINE Desktop',
    targetKeywords: [
      'test iimagine desktop',
      'iimagine desktop',
      'appli de bureau ia locale open source',
      'appli de chat ia locale avec api localhost',
      'appli ia privée de bureau licence mit',
      'iimagine ia locale',
    ],
    current_models_mentioned: ['Gemma 4', 'Kokoro'],
    current_hardware_mentioned: ['Apple Silicon', 'Windows 10', 'Ubuntu 20.04'],
    leadAnswerBlock: '**IIMAGINE Desktop (version 0.1.2, publiée le 31 août 2026) est une application de chat de bureau open source qui exécute des modèles locaux grâce à un moteur intégré et traite les fournisseurs cloud comme une option.** Elle ne demande aucun compte et ne coûte rien ; les affirmations sur la confidentialité et la qualité viennent des pages de l\'éditeur, pas de tests.',
    quickAnswerTop: {
      fr: {
        question: 'IIMAGINE Desktop est-elle entièrement locale ?',
        answer: 'Par défaut, selon l\'éditeur : les modèles tournent via le moteur intégré et, en mode local, aucune donnée ne quitte la machine. C\'est toutefois un outil hybride : vous pouvez envoyer une conversation à des fournisseurs cloud avec vos propres clés d\'API, utiliser la recherche web facultative ou la voix dans le cloud, et installer des plugins premium payants.',
        bullets: [
          'Chat avec des fichiers PDF, Word, CSV et Markdown via une base de connaissances locale.',
          'Saisie vocale, chat vocal et synthèse vocale locale avec le modèle Kokoro.',
          'Client MCP, exécuteur d\'agents, skills, personas et système de plugins.',
          'Un point d\'accès compatible OpenAI sur localhost pour d\'autres applications.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce qu\'IIMAGINE Desktop ?', anchor: 'what-is-iimagine-desktop' },
      { label: 'Où l\'obtenir', anchor: 'get-it' },
      { label: 'Configuration requise', anchor: 'requirements' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Flux de données : local et cloud', anchor: 'privacy' },
      { label: 'Pour qui', anchor: 'who-should-use' },
      { label: 'Ce que nous n\'avons pas pu vérifier', anchor: 'who-should-not-use' },
      { label: 'Concurrents et alternatives', anchor: 'vs-alternatives' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures associées', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'IIMAGINE Desktop est une appli Electron open source qui télécharge des modèles GGUF, les exécute sur votre ordinateur et discute avec vos fichiers, les fournisseurs cloud étant un complément facultatif.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l\'installez comme n\'importe quelle appli, la laissez choisir un modèle adapté à votre RAM et discutez ; aucun compte n\'est requis, et envoyer une conversation à un fournisseur cloud est un choix que vous faites au cas par cas.',
          },
        ],
        items: [
          'Maintenance : la version 0.1.2 a été publiée le 31 août 2026, 54 jours avant cette vérification ; aucun avertissement de projet abandonné ne s\'applique.',
          'Maturité : une série 0.x avec deux versions depuis juillet 2026 ; attendez-vous à des aspérités.',
          'Moteur : un « iimagine-engine » intégré que l\'éditeur dit fondé sur llama.cpp, exécutant des modèles GGUF issus de Hugging Face.',
          'Portée : fournisseurs cloud, recherche web facultative, voix dans le cloud et plugins premium payants sortent du cadre local par défaut.',
          'Éditeur : IIMAGINE, qui vend aussi une plateforme cloud distincte que ce test ne couvre pas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s\'appuie sur iimagine.ai, le dépôt GitHub avec sa page des versions et la politique de confidentialité, consultés le 24 octobre 2026. PromptQuorum n\'a ni installé, ni exécuté, ni mesuré l\'application : la vitesse et la qualité des réponses ne sont donc pas évaluées.',
          },
        ],
      },
      overview: {
        id: 'what-is-iimagine-desktop',
        title: 'Qu\'est-ce qu\'IIMAGINE Desktop ?',
        content: [
          '**IIMAGINE Desktop est une application de bureau autonome pour discuter avec des modèles ouverts sur votre propre machine, publiée sous licence MIT dans le dépôt GitHub iimagine-ai/desktop.** Elle repose sur Electron, stocke les conversations dans une base SQLite chiffrée et, selon l\'éditeur, fonctionne sans compte.',
          'L\'entreprise IIMAGINE exploite aussi une plateforme cloud distincte, avec comptes et forfaits à crédits. C\'est un autre produit ; ce test ne couvre que l\'application de bureau et ne traite les options cloud de l\'éditeur que là où l\'application elle-même les propose.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l\'obtenir',
        content: [
          '**L\'application se télécharge comme un installateur classique pour macOS, Windows et Linux ; les fichiers sont hébergés comme ressources de version GitHub et liés depuis la page de téléchargement de l\'éditeur.**',
        ],
        columns: ['Plateforme', 'Où l\'obtenir'],
        rows: [
          {
            Plateforme: 'macOS',
            'Où l\'obtenir': '[.dmg pour Apple Silicon](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop-0.1.2-arm64.dmg), macOS 12 ou ultérieur, 132 Mo',
          },
          {
            Plateforme: 'Windows',
            'Où l\'obtenir': '[Installateur .exe 64 bits](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop.Setup.0.1.2.exe), Windows 10 ou ultérieur, 266 Mo',
          },
          {
            Plateforme: 'Linux',
            'Où l\'obtenir': '[.AppImage](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop-0.1.2.AppImage), Ubuntu 20.04 ou équivalent, 139 Mo',
          },
          {
            Plateforme: 'Site web',
            'Où l\'obtenir': '[iimagine.ai/open-source](https://www.iimagine.ai/open-source) et [page de téléchargement](https://www.iimagine.ai/downloads)',
          },
          {
            Plateforme: 'Confidentialité',
            'Où l\'obtenir': '[iimagine.ai/privacy](https://www.iimagine.ai/privacy)',
          },
          {
            Plateforme: 'Code source',
            'Où l\'obtenir': '[github.com/iimagine-ai/desktop](https://github.com/iimagine-ai/desktop), MIT',
          },
        ],
        note: 'Version examinée : 0.1.2. La version macOS ne fonctionne que sur Apple Silicon (aucune version Intel n\'est proposée) et est décrite comme signée et notariée ; l\'installateur Windows n\'est pas signé, si bien que SmartScreen peut afficher un avertissement, et l\'AppImage Linux apparaît pour la première fois dans la 0.1.2. L\'application est gratuite et sans compte ; la compilation depuis les sources avec Node.js 18 ou ultérieur est la voie développeur du README.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Configuration requise',
        content: [
          '**Les sources donnent des versions minimales de système, mais aucune exigence de RAM ou de disque pour l\'application ; ce sont les modèles téléchargés qui déterminent ce qu\'il faut à votre machine.**',
        ],
        columns: ['Élément', 'Ce que disent les sources'],
        rows: [
          {
            'Élément': 'Système',
            'Ce que disent les sources': 'macOS 12 ou ultérieur (Apple Silicon), Windows 10 ou ultérieur (64 bits), Ubuntu 20.04 ou équivalent',
          },
          {
            'Élément': 'Choix du modèle',
            'Ce que disent les sources': 'Un Model Advisor analyse la RAM et le GPU et recommande un modèle ; le README associe 4, 8, 16 et 32 Go ou plus à quatre tailles de Gemma 4',
          },
          {
            'Élément': 'Téléchargement',
            'Ce que disent les sources': 'Les fichiers GGUF viennent de Hugging Face via le Model Browser intégré : le premier modèle nécessite donc internet',
          },
          {
            'Élément': 'GPU',
            'Ce que disent les sources': 'Le déchargement sur GPU est pris en charge ; un GPU n\'est pas indiqué comme obligatoire',
          },
          {
            'Élément': 'Espace disque',
            'Ce que disent les sources': 'Non indiqué pour l\'application ; chaque modèle est un téléchargement distinct',
          },
        ],
        note: 'La page de l\'éditeur affiche des tailles d\'exemple (par exemple Llama 3.1 8B à 4.7 Go) pour illustrer le catalogue ; PromptQuorum n\'a pas ouvert le catalogue de l\'application et ne peut pas confirmer quels modèles il propose.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque point ci-dessous provient du site ou du README de l\'éditeur ; aucun n\'a été testé de façon indépendante.**',
        ],
        items: [
          '**Chat et modèles.** Chat en streaming, historique des conversations et changement de modèle sur un moteur intégré, avec un catalogue GGUF sélectionné, des téléchargements reprenables et une recommandation selon le matériel.',
          '**Documents.** Une base de connaissances pour les fichiers PDF, Word, CSV et Markdown avec recherche vectorielle, plus Folder Connect, qui indexe un dossier et surveille ses modifications.',
          '**Voix.** Saisie vocale, mode de chat vocal et synthèse vocale locale avec le modèle Kokoro ; le README mentionne aussi la synthèse vocale dans le cloud.',
          '**Outils et extensions.** Un client MCP, un exécuteur d\'agents pour les tâches en plusieurs étapes avec appels d\'outils, des skills en Markdown, des personas, un gestionnaire de prompts, la recherche web facultative et un système de plugins fondé sur des hooks.',
          '**API locale.** Un point d\'accès compatible OpenAI sur localhost que, selon l\'éditeur, d\'autres outils comme Cursor et VS Code peuvent utiliser.',
          '**Stockage.** Les conversations sont conservées dans SQLite avec chiffrement SQLCipher (AES-256) sur votre disque.',
        ],
        note: 'Les plugins premium (mémoire, gestion de clients, outils métiers) sont vendus séparément sur la place de marché de l\'éditeur et exigent un abonnement ; l\'application de base, non.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données : local et cloud',
        content: [
          '**L\'éditeur décrit trois niveaux de confidentialité que vous choisissez à chaque conversation : modèles locaux sur votre machine, cloud régional de votre organisation (Azure, AWS ou Google Cloud) avec vos propres identifiants, ou fournisseurs tiers comme OpenAI, Anthropic, Google ou OpenRouter avec vos propres clés d\'API.** Seul le premier garde les données sur l\'appareil. Le README ajoute que chaque message indique s\'il est resté local ou parti chez un fournisseur cloud.',
          'Le site et le README affirment que l\'application ne collecte aucune télémétrie, n\'exige pas de compte et qu\'un modèle local n\'effectue aucun appel réseau. Les téléchargements de modèles, la recherche web, la voix dans le cloud et la place de marché des plugins premium ont par nature besoin d\'internet. La politique de confidentialité (mise à jour en août 2026) cite les « desktop applications » dans son champ, mais décrit le traitement des données de la plateforme web et d\'un futur « Desktop Companion » ; elle ne mentionne ni IIMAGINE Desktop 0.1.2 ni l\'affirmation d\'absence de télémétrie.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations de l\'éditeur, pas des résultats d\'audit. Le code source est public, mais PromptQuorum ne l\'a pas lu et n\'a pas inspecté le trafic réseau de l\'application ; « pas de télémétrie » et « zéro octet ne quitte votre appareil » sont donc ici considérés comme non vérifiés.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        items: [
          '**Les utilisateurs de bureau attentifs à la confidentialité**, qui veulent télécharger un installateur, choisir un modèle local et discuter avec leurs propres documents sans terminal.',
          '**Les développeurs** qui souhaitent un point d\'accès localhost compatible OpenAI et une base de code sous licence MIT qu\'ils peuvent lire.',
          '**Les équipes qui utilisent aussi des modèles cloud approuvés** et veulent une seule appli capable de passer du local à leurs propres identifiants cloud.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Comportement réel.** PromptQuorum n\'a pas exécuté l\'application : vitesse, stabilité, qualité des réponses et exactitude du chat avec documents ne sont pas évaluées.',
          '**Affirmations de confidentialité.** « Pas de télémétrie » et « zéro appel réseau » viennent du README et du site ; la politique n\'a pas de section propre au bureau pour cette version et le trafic n\'a pas été inspecté.',
          '**Catalogue de modèles.** Le README cite des tailles de Gemma 4, alors que la page de fonctions de l\'éditeur montre des exemples Llama et Mistral ; les modèles actuellement proposés par le catalogue de l\'application ne sont pas confirmés.',
          '**Maturité.** Le dépôt a été créé le 11 juillet 2026, compte deux versions et affichait 0 étoile le 24 octobre 2026 : le recul de la communauté est faible.',
          '**Sécurité de l\'API locale.** Les sources ne disent pas si le point d\'accès localhost est actif par défaut ni s\'il est protégé par une clé.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Appli', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            Appli: '[Jan](/fr/power-local-llm/jan-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuit / variante d\'Apache 2.0',
            'Différence clé': 'Appli de chat de bureau open source avec son propre hub de modèles, la prise en charge de MCP et des connexions cloud facultatives',
          },
          {
            Appli: '[GPT4All](/fr/power-local-llm/gpt4all-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Appli de bureau axée sur le local, avec chat avec fichiers via LocalDocs',
          },
          {
            Appli: '[LM Studio](/fr/power-local-llm/lm-studio-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuit / code fermé',
            'Différence clé': 'Exécuteur de modèles abouti avec serveur local ; l\'appli elle-même n\'est pas open source',
          },
        ],
        note: 'Vérifiez le prix, la licence et les plateformes actuels de chaque appli sur sa propre page avant de choisir ; ce tableau est un point de départ, pas un classement.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Faut-il un compte IIMAGINE ?',
            a: 'Non, selon l\'éditeur : l\'application de bureau fonctionne sans compte. Un compte ou un abonnement n\'intervient que pour les plugins premium et la plateforme cloud distincte de l\'entreprise.',
          },
          {
            q: 'Fonctionne-t-elle sur un Mac Intel ?',
            a: 'Pas d\'après la page de téléchargement, qui ne liste qu\'Apple Silicon (M1 à M4). Les versions Windows et Linux sont en 64 bits.',
          },
          {
            q: 'Pourquoi Windows affiche-t-il un avertissement de sécurité ?',
            a: 'L\'éditeur indique que l\'installateur Windows n\'est pas encore signé ; SmartScreen peut donc afficher un avertissement qu\'il faut passer avec « Informations complémentaires » puis « Exécuter quand même ».',
          },
          {
            q: 'D\'autres applis peuvent-elles utiliser ses modèles ?',
            a: 'L\'éditeur indique qu\'elle sert une API compatible OpenAI sur localhost à laquelle des outils comme Cursor et VS Code peuvent se connecter. Les sources ne précisent pas si elle est active par défaut ou protégée par une clé.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'IIMAGINE Desktop est une piste prometteuse et récemment mise à jour pour obtenir une appli de chat de bureau open source qui s\'installe comme un logiciel ordinaire, exécute des modèles locaux, discute avec vos fichiers et offre une API localhost, les fournisseurs cloud restant facultatifs. En face, on trouve une version 0.x précoce sans recul public, une version Mac réservée à Apple Silicon, un installateur Windows non signé et des affirmations de confidentialité qui reposent sur les pages de l\'éditeur. Elle convient aux utilisateurs de bureau qui veulent essayer une base de code MIT gratuite et lisible et acceptent les aspérités d\'une version précoce ; quiconque traite des données sensibles devrait vérifier lui-même, par exemple en mode purement local avec le réseau surveillé, que rien ne quitte la machine.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[IIMAGINE Desktop sur iimagine.ai](https://www.iimagine.ai/open-source) — liste des fonctions, pile technique, niveaux de confidentialité et plateformes, consultée le 24 octobre 2026.',
          '[Téléchargements d\'IIMAGINE Desktop](https://www.iimagine.ai/downloads) — version 0.1.2, exigences par plateforme et notes d\'installation, consultés le 24 octobre 2026.',
          '[IIMAGINE Desktop sur GitHub](https://github.com/iimagine-ai/desktop) — README, licence MIT et la version v0.1.2 (31 août 2026) avec ses fichiers, consultés le 24 octobre 2026.',
          '[Page Local AI](https://www.iimagine.ai/features/local-ai) — description par l\'éditeur de l\'application de bureau, de l\'API locale et des recommandations de modèles, consultée le 24 octobre 2026.',
          '[Politique de confidentialité d\'IIMAGINE](https://www.iimagine.ai/privacy) — champ d\'application, tiers et section sur le Desktop Companion, mise à jour en août 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Jan](/fr/power-local-llm/jan-review) — une appli de chat de bureau open source et hors ligne.',
          '[Test de GPT4All](/fr/power-local-llm/gpt4all-review) — une appli de bureau axée sur le local avec chat avec documents.',
          '[Test de LM Studio](/fr/power-local-llm/lm-studio-review) — un exécuteur de modèles de bureau avec serveur local.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d\'IA locale.',
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
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/iimagine-desktop-review-hero-ja.webp',
    title: 'IIMAGINE Desktop レビュー：オープンソースのローカルAIチャットアプリ',
    seoTitle: 'IIMAGINE Desktop レビュー：ローカルAIチャット',
    intro: 'IIMAGINE Desktopは、[IIMAGINE](https://www.iimagine.ai/open-source)が提供する、macOS・Windows・Linux向けの無料のMITライセンス製デスクトップチャットアプリです。ローカル推論エンジンを同梱し、文書とのチャットや音声読み上げに対応し、localhostにOpenAI互換APIを公開します。クラウドのプロバイダーは任意です。このレビューは、提供元のウェブサイト、GitHubリポジトリとリリースページ、プライバシーポリシーを2026年10月24日に確認した内容に基づいており、PromptQuorumは実機での検証を行っていません。',
    metaDescription: 'IIMAGINE Desktopのレビュー。ローカルエンジン同梱、文書チャット、音声、localhost APIを備えたMITのオープンソースアプリ。バージョン0.1.2、未検証。',
    twitterDescription: 'IIMAGINE Desktopのレビュー。ローカルエンジン同梱で、クラウドキーは任意、localhost APIも備える無料のMITチャットアプリ。確認できた点とできなかった点を整理します。',
    audience: 'ターミナル不要でローカルモデルを動かせる無料のオープンソースのチャットアプリを探し、情報源が確認していること、任意のクラウド部分、未検証の点を知りたいデスクトップユーザー。',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'IIMAGINE Desktop レビュー',
    targetKeywords: [
      'iimagine desktop レビュー',
      'iimagine desktop',
      'オープンソース ローカルAI デスクトップアプリ',
      'localhost API 付き ローカルAI チャットアプリ',
      'MITライセンス プライベートAI デスクトップ',
      'iimagine ローカルAI',
    ],
    current_models_mentioned: ['Gemma 4', 'Kokoro'],
    current_hardware_mentioned: ['Apple Silicon', 'Windows 10', 'Ubuntu 20.04'],
    leadAnswerBlock: '**IIMAGINE Desktop（バージョン0.1.2、2026年8月31日公開）は、同梱エンジンでローカルモデルを動かし、クラウドのプロバイダーをオプションとして扱うオープンソースのデスクトップチャットアプリです。** アカウントは不要で無料です。プライバシーや品質に関する記述は、検証結果ではなく提供元自身のページに基づきます。',
    quickAnswerTop: {
      ja: {
        question: 'IIMAGINE Desktopは完全にローカルで動きますか？',
        answer: '提供元によれば、既定ではそうです。モデルは同梱エンジンで動作し、ローカルモードではデータが端末の外に出ません。ただしハイブリッド型のツールでもあり、会話ごとに自分のAPIキーでクラウドのプロバイダーに切り替えたり、任意のウェブ検索やクラウド音声を使ったり、有料のプレミアムプラグインを導入したりできます。',
        bullets: [
          'ローカルのナレッジベースで、PDF・Word・CSV・Markdownのファイルとチャットできます。',
          '音声入力、音声チャット、Kokoroモデルによるローカルの音声読み上げに対応しています。',
          'MCPクライアント、エージェントランナー、スキル、ペルソナ、プラグインの仕組みがあります。',
          '他のアプリから使えるOpenAI互換のエンドポイントをlocalhostで提供します。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'IIMAGINE Desktopとは', anchor: 'what-is-iimagine-desktop' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '動作要件', anchor: 'requirements' },
      { label: '情報源が確認している機能', anchor: 'key-features' },
      { label: 'ローカルとクラウドのデータの流れ', anchor: 'privacy' },
      { label: 'おすすめの人', anchor: 'who-should-use' },
      { label: '確認できなかった点', anchor: 'who-should-not-use' },
      { label: '競合と代替', anchor: 'vs-alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '情報源', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'IIMAGINE Desktopは、GGUFモデルをダウンロードして手元のPCで動かし、ファイルとチャットできるオープンソースのElectronアプリで、クラウドは任意の追加機能です。',
          },
          {
            type: 'plain-terms',
            text: '普通のアプリと同じようにインストールし、RAMに合ったモデルを選んでもらってチャットします。アカウントは不要で、会話をクラウドに送るかどうかは会話ごとに自分で決めます。',
          },
        ],
        items: [
          'メンテナンス：バージョン0.1.2は今回の確認の54日前にあたる2026年8月31日に公開されたため、放置プロジェクトの警告は該当しません。',
          '成熟度：2026年7月以降のリリースは2回の0.xシリーズで、粗い部分が残ると考えられます。',
          'エンジン：同梱の「iimagine-engine」は提供元によればllama.cppベースで、Hugging FaceのGGUFモデルを実行します。',
          '範囲：クラウドのプロバイダー、任意のウェブ検索、クラウド音声、有料のプレミアムプラグインは、ローカルという既定の外側にあります。',
          '提供元：IIMAGINEで、別のクラウドプラットフォームも販売していますが、このレビューの対象外です。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、iimagine.ai、GitHubリポジトリとそのリリースページ、プライバシーポリシーを2026年10月24日に確認した内容に基づきます。PromptQuorumはアプリのインストール、実行、計測を行っていないため、速度や回答品質は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-iimagine-desktop',
        title: 'IIMAGINE Desktopとは',
        content: [
          '**IIMAGINE Desktopは、自分のマシン上でオープンモデルとチャットするための単体のデスクトップアプリで、GitHubリポジトリiimagine-ai/desktopでMITライセンスのもと公開されています。** Electronで作られ、会話を暗号化したSQLiteデータベースに保存し、提供元によればアカウントなしで動作します。',
          'IIMAGINE社は、アカウントとクレジット制プランを持つ別のクラウドプラットフォームも運営しています。それは別の製品であり、このレビューが扱うのはデスクトップアプリのみで、提供元のクラウドの選択肢もアプリ自体が提供する範囲に限って触れます。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**macOS・Windows・Linux向けの通常のインストーラーをダウンロードする形式で、ファイルはGitHubのリリース資産として置かれ、提供元のダウンロードページからリンクされています。**',
        ],
        columns: ['プラットフォーム', '入手方法'],
        rows: [
          {
            'プラットフォーム': 'macOS',
            '入手方法': '[Apple Silicon用.dmg](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop-0.1.2-arm64.dmg)、macOS 12以降、132 MB',
          },
          {
            'プラットフォーム': 'Windows',
            '入手方法': '[64ビット用セットアップ.exe](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop.Setup.0.1.2.exe)、Windows 10以降、266 MB',
          },
          {
            'プラットフォーム': 'Linux',
            '入手方法': '[.AppImage](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop-0.1.2.AppImage)、Ubuntu 20.04または同等、139 MB',
          },
          {
            'プラットフォーム': 'ウェブサイト',
            '入手方法': '[iimagine.ai/open-source](https://www.iimagine.ai/open-source)と[ダウンロードページ](https://www.iimagine.ai/downloads)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手方法': '[iimagine.ai/privacy](https://www.iimagine.ai/privacy)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手方法': '[github.com/iimagine-ai/desktop](https://github.com/iimagine-ai/desktop)、MIT',
          },
        ],
        note: '確認したバージョンは0.1.2です。macOS版はApple Silicon専用でIntel版は提供されておらず、署名と公証済みと説明されています。Windowsのインストーラーはコード署名されていないためSmartScreenが警告を出す場合があり、LinuxのAppImageは0.1.2で初めて登場します。アプリは無料でアカウントも不要です。Node.js 18以降でソースからビルドする方法は、READMEの開発者向けの手順です。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: ['**情報源にはOSの最低バージョンはありますが、アプリ自体のRAMやディスクの要件はなく、必要なハードウェアはダウンロードするモデルで決まります。**'],
        columns: ['項目', '情報源の記述'],
        rows: [
          {
            '項目': 'OS',
            '情報源の記述': 'macOS 12以降（Apple Silicon）、Windows 10以降（64ビット）、Ubuntu 20.04または同等',
          },
          {
            '項目': 'モデル選び',
            '情報源の記述': 'Model AdvisorがRAMとGPUを調べて推奨し、READMEは4・8・16・32 GB以上をGemma 4の4サイズに対応づけています',
          },
          {
            '項目': 'モデル取得',
            '情報源の記述': 'GGUFファイルはアプリ内のModel BrowserからHugging Faceで取得するため、最初のモデルにはインターネットが必要です',
          },
          { '項目': 'GPU', '情報源の記述': 'GPUオフロードに対応しており、GPUが必須とは書かれていません' },
          { '項目': 'ディスク容量', '情報源の記述': 'アプリ自体の記載はなく、モデルは1つずつ別のダウンロードです' },
        ],
        note: '提供元のページには、カタログの例としてモデルのサイズ（たとえばLlama 3.1 8Bは4.7 GB）が示されています。PromptQuorumはアプリ内のカタログを開いていないため、実際に並ぶモデルは確認できていません。',
      },
      features: {
        id: 'key-features',
        title: '情報源が確認している機能',
        content: ['**以下の項目はすべて提供元のウェブサイトまたはREADMEに基づいており、独立した検証は行っていません。**'],
        items: [
          '**チャットとモデル。** 同梱エンジン上でのストリーミングチャット、会話履歴、モデル切り替えに加え、厳選したGGUFカタログ、再開可能なダウンロード、ハードウェアに応じた推奨があります。',
          '**文書。** PDF・Word・CSV・Markdown向けのベクター検索付きナレッジベースと、フォルダーを索引化して変更を監視するFolder Connectがあります。',
          '**音声。** 音声入力、音声チャットモード、Kokoroモデルによるローカルの音声読み上げがあり、READMEにはクラウドの音声読み上げも記載されています。',
          '**ツールと拡張。** MCPクライアント、ツール呼び出しで複数ステップの作業をこなすエージェントランナー、Markdownのスキル、ペルソナ、プロンプト管理、任意のウェブ検索、フックベースのプラグインの仕組みがあります。',
          '**ローカルAPI。** localhostのOpenAI互換エンドポイントで、提供元によればCursorやVS Codeなどのツールから使えます。',
          '**保存。** 会話はディスク上のSQLiteにSQLCipher（AES-256）で暗号化して保存されます。',
        ],
        note: 'プレミアムプラグイン（メモリ、顧客管理、業界向けツール）は提供元のプラグインマーケットプレイスで別売りで、サブスクリプションが必要です。基本アプリには不要です。',
      },
      privacy: {
        id: 'privacy',
        title: 'ローカルとクラウドのデータの流れ',
        content: [
          '**提供元は会話ごとに選べる3つのプライバシーレベルを説明しています。自分のマシン上のローカルモデル、自分の資格情報で使う組織のリージョナルクラウド（Azure・AWS・Google Cloud）、自分のAPIキーで使うOpenAI・Anthropic・Google・OpenRouterなどの外部プロバイダーです。** データが端末に残るのは最初の1つだけです。READMEには、各メッセージがローカルで処理されたかクラウドに送られたかが表示されるとも書かれています。',
          'サイトとREADMEは、テレメトリを収集せずアカウントも不要で、ローカルモデルはネットワーク通信を行わないとしています。モデルのダウンロード、ウェブ検索、クラウド音声、プレミアムプラグインのマーケットプレイスは、性質上インターネットを必要とします。プライバシーポリシー（2026年8月更新）は適用範囲に「desktop applications」を挙げていますが、説明しているのはウェブプラットフォームと将来の「Desktop Companion」のデータの扱いで、IIMAGINE Desktop 0.1.2やテレメトリなしという主張には触れていません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは提供元の主張であり、監査の結果ではありません。ソースコードは公開されていますが、PromptQuorumはコードを読んでおらず、アプリの通信も調べていないため、「テレメトリなし」や「端末外に1バイトも出ない」は未検証として扱います。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'おすすめの人',
        items: [
          '**プライバシーを重視するデスクトップユーザー。** インストーラーを入手し、ローカルモデルを選んで、ターミナルなしで自分の文書とチャットしたい人に向いています。',
          '**開発者。** OpenAI互換のlocalhostエンドポイントと、読めるMITライセンスのコードベースを求める人に向いています。',
          '**承認済みのクラウドモデルも使うチーム。** ローカルと自社のクラウド資格情報を1つのアプリで切り替えたい場合に向いています。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実際の挙動。** PromptQuorumはアプリを実行していないため、速度、安定性、回答品質、文書チャットの精度は評価していません。',
          '**プライバシーの主張。** 「テレメトリなし」「ネットワーク通信ゼロ」はREADMEとサイトの記述です。ポリシーにこのリリース向けのデスクトップ専用の節はなく、通信も調べていません。',
          '**モデルカタログ。** READMEはGemma 4のサイズを挙げる一方、提供元の機能ページにはLlamaとMistralの例が出ており、アプリ内のカタログが現在どのモデルを載せているかは未確認です。',
          '**成熟度。** リポジトリは2026年7月11日に作成され、リリースは2回、2026年10月24日時点のスターは0で、コミュニティの実績はほとんどありません。',
          '**ローカルAPIの安全性。** localhostのエンドポイントが既定で有効か、キーで保護されているかは、情報源に記載がありません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替',
        columns: ['アプリ', '対応OS', '価格・ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[Jan](/ja/power-local-llm/jan-review)',
            '対応OS': 'macOS、Windows、Linux',
            '価格・ライセンス': '無料／Apache 2.0の派生',
            '主な違い': '独自のモデルハブ、MCP対応、任意のクラウド接続を備えたオープンソースのデスクトップチャットアプリ',
          },
          {
            'アプリ': '[GPT4All](/ja/power-local-llm/gpt4all-review)',
            '対応OS': 'macOS、Windows、Linux',
            '価格・ライセンス': '無料／MIT',
            '主な違い': 'LocalDocsでファイルとチャットできる、ローカル重視のデスクトップアプリ',
          },
          {
            'アプリ': '[LM Studio](/ja/power-local-llm/lm-studio-review)',
            '対応OS': 'macOS、Windows、Linux',
            '価格・ライセンス': '無料／クローズドソース',
            '主な違い': 'ローカルサーバー付きの洗練されたモデル実行アプリで、アプリ自体はオープンソースではありません',
          },
        ],
        note: '選ぶ前に、各アプリの現在の価格、ライセンス、対応OSをそれぞれの公式ページで確認してください。この表は出発点であり、順位づけではありません。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'IIMAGINEのアカウントは必要ですか？',
            a: '提供元によれば不要で、デスクトップアプリはアカウントなしで動作します。アカウントやサブスクリプションが関わるのは、プレミアムプラグインと同社の別のクラウドプラットフォームです。',
          },
          {
            q: 'IntelのMacで動きますか？',
            a: 'ダウンロードページにはApple Silicon（M1〜M4）のみが記載されているため、動かない見込みです。WindowsとLinuxのビルドは64ビットです。',
          },
          {
            q: 'Windowsでセキュリティ警告が出るのはなぜですか？',
            a: '提供元は、Windows版のインストーラーがまだコード署名されていないと説明しています。そのためSmartScreenの警告が出る場合があり、「詳細情報」から「実行」を選んで進みます。',
          },
          {
            q: '他のアプリからモデルを使えますか？',
            a: '提供元は、CursorやVS Codeなどのツールが接続できるOpenAI互換APIをlocalhostで提供するとしています。既定で有効か、キーが必要かは情報源に記載がありません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'IIMAGINE Desktopは、通常のソフトのようにインストールでき、ローカルモデルを動かし、ファイルとチャットし、localhost APIも備えたオープンソースのデスクトップチャットアプリで、クラウドは任意のまま使えるという点で有望で、更新も最近です。一方で、公開された実績のない初期の0.xリリースであり、Mac版はApple Silicon専用、Windowsのインストーラーは未署名で、プライバシーの主張も提供元自身のページに頼っています。無料で読みやすいMITのコードを試し、初期版の粗さを受け入れられるデスクトップユーザーに向いています。機密データを扱う場合は、ローカル専用モードでネットワークを監視するなどして、何も外に出ないことを自分で確かめてください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[iimagine.aiのIIMAGINE Desktop](https://www.iimagine.ai/open-source) — 機能一覧、技術スタック、プライバシーレベル、対応OS。2026年10月24日に確認。',
          '[IIMAGINE Desktopのダウンロード](https://www.iimagine.ai/downloads) — バージョン0.1.2、プラットフォーム別の要件、インストール手順。2026年10月24日に確認。',
          '[GitHubのIIMAGINE Desktop](https://github.com/iimagine-ai/desktop) — README、MITライセンス、ファイル付きのv0.1.2リリース（2026年8月31日）。2026年10月24日に確認。',
          '[Local AIのページ](https://www.iimagine.ai/features/local-ai) — 提供元によるデスクトップアプリ、ローカルAPI、モデル推奨の説明。2026年10月24日に確認。',
          '[IIMAGINEのプライバシーポリシー](https://www.iimagine.ai/privacy) — 適用範囲、第三者、Desktop Companionの節。最終更新は2026年8月。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Janのレビュー](/ja/power-local-llm/jan-review) — オープンソースのオフライン向けデスクトップチャットアプリ。',
          '[GPT4Allのレビュー](/ja/power-local-llm/gpt4all-review) — 文書チャットを備えたローカル重視のデスクトップアプリ。',
          '[LM Studioのレビュー](/ja/power-local-llm/lm-studio-review) — ローカルサーバー付きのデスクトップ向けモデル実行アプリ。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの完全なカタログ。',
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
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/iimagine-desktop-review-hero-pt.webp',
    title: 'Análise do IIMAGINE Desktop: app de chat com IA local e código aberto',
    seoTitle: 'Análise do IIMAGINE Desktop: chat com IA local',
    intro: 'O IIMAGINE Desktop é um app de chat para desktop gratuito, com licença MIT, da [IIMAGINE](https://www.iimagine.ai/open-source) para macOS, Windows e Linux. Ele traz um motor de inferência local, conversa com seus documentos, fala e expõe no localhost uma API compatível com a OpenAI, com provedores em nuvem como opção. Esta análise se baseia no site do fabricante, no repositório do GitHub com a página de versões e na política de privacidade, verificados em 24 de outubro de 2026; o PromptQuorum não testou o app pessoalmente.',
    metaDescription: 'Análise do IIMAGINE Desktop: app de código aberto (MIT) com motor local, chat com documentos, voz e API localhost. Versão 0.1.2; não testado.',
    twitterDescription: 'Análise do IIMAGINE Desktop: app de chat MIT gratuito com motor local, chaves de nuvem opcionais e API localhost. O que as fontes confirmam e o que não confirmam.',
    audience: 'Usuários de desktop que querem um app de chat gratuito e de código aberto que rode modelos locais sem terminal e precisam saber o que as fontes confirmam, o que continua sendo nuvem opcional e o que ainda não foi comprovado.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise IIMAGINE Desktop',
    targetKeywords: [
      'análise iimagine desktop',
      'iimagine desktop',
      'app de desktop de ia local de código aberto',
      'app de chat com ia local e api localhost',
      'app de ia privado para desktop licença mit',
      'iimagine ia local',
    ],
    current_models_mentioned: ['Gemma 4', 'Kokoro'],
    current_hardware_mentioned: ['Apple Silicon', 'Windows 10', 'Ubuntu 20.04'],
    leadAnswerBlock: '**O IIMAGINE Desktop (versão 0.1.2, publicada em 31 de agosto de 2026) é um app de chat para desktop de código aberto que executa modelos locais com um motor incluído e trata os provedores em nuvem como opção.** Ele não exige conta e não custa nada; as afirmações sobre privacidade e qualidade vêm das próprias páginas do fabricante, não de testes.',
    quickAnswerTop: {
      pt: {
        question: 'O IIMAGINE Desktop é totalmente local?',
        answer: 'Por padrão, segundo o fabricante: os modelos rodam pelo motor incluído e, no modo local, nenhum dado sai do computador. Mesmo assim, é uma ferramenta híbrida: você pode enviar uma conversa a provedores em nuvem com suas próprias chaves de API, usar a busca na web opcional ou a voz em nuvem e instalar plugins premium pagos.',
        bullets: [
          'Chat com arquivos PDF, Word, CSV e Markdown por meio de uma base de conhecimento local.',
          'Entrada de voz, chat por voz e síntese de voz local com o modelo Kokoro.',
          'Cliente MCP, executor de agentes, skills, personas e um sistema de plugins.',
          'Um endpoint compatível com a OpenAI no localhost para outros aplicativos.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o IIMAGINE Desktop?', anchor: 'what-is-iimagine-desktop' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Fluxo de dados: local e nuvem', anchor: 'privacy' },
      { label: 'Quem deve usar', anchor: 'who-should-use' },
      { label: 'O que não conseguimos verificar', anchor: 'who-should-not-use' },
      { label: 'Concorrentes e alternativas', anchor: 'vs-alternatives' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O IIMAGINE Desktop é um app Electron de código aberto que baixa modelos GGUF, executa no seu computador e conversa com seus arquivos; os provedores em nuvem são um extra opcional.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala como qualquer app, deixa que ele escolha um modelo compatível com sua RAM e conversa; não é preciso conta, e enviar um chat a um provedor em nuvem é uma escolha sua a cada conversa.',
          },
        ],
        items: [
          'Manutenção: a versão 0.1.2 foi publicada em 31 de agosto de 2026, 54 dias antes desta verificação; por isso, não vale o aviso de projeto parado.',
          'Maturidade: uma linha 0.x com duas versões desde julho de 2026; espere arestas ainda por aparar.',
          'Motor: um "iimagine-engine" incluído que, segundo o fabricante, se baseia no llama.cpp e executa modelos GGUF do Hugging Face.',
          'Alcance: provedores em nuvem, busca na web opcional, voz em nuvem e plugins premium pagos ficam fora do padrão local.',
          'Fabricante: a IIMAGINE, que também vende uma plataforma em nuvem separada, não coberta por esta análise.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no iimagine.ai, no repositório do GitHub com sua página de versões e na política de privacidade, verificados em 24 de outubro de 2026. O PromptQuorum não instalou, executou nem mediu o app, então velocidade e qualidade das respostas não são avaliadas.',
          },
        ],
      },
      overview: {
        id: 'what-is-iimagine-desktop',
        title: 'O que é o IIMAGINE Desktop?',
        content: [
          '**O IIMAGINE Desktop é um app de desktop independente para conversar com modelos abertos no seu próprio computador, publicado sob a licença MIT no repositório do GitHub iimagine-ai/desktop.** Ele é construído com Electron, guarda as conversas em um banco SQLite criptografado e, segundo o fabricante, funciona sem conta.',
          'A empresa IIMAGINE também mantém uma plataforma em nuvem separada, com contas e planos de créditos. Esse é outro produto; esta análise cobre apenas o app de desktop e só trata das opções de nuvem do fabricante quando o próprio app as oferece.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O app é um download com instalador comum para macOS, Windows e Linux; os arquivos ficam hospedados como recursos de versão no GitHub e são linkados na página de downloads do fabricante.**',
        ],
        columns: ['Plataforma', 'Como obter'],
        rows: [
          {
            Plataforma: 'macOS',
            'Como obter': '[.dmg para Apple Silicon](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop-0.1.2-arm64.dmg), macOS 12 ou posterior, 132 MB',
          },
          {
            Plataforma: 'Windows',
            'Como obter': '[Instalador .exe de 64 bits](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop.Setup.0.1.2.exe), Windows 10 ou posterior, 266 MB',
          },
          {
            Plataforma: 'Linux',
            'Como obter': '[.AppImage](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop-0.1.2.AppImage), Ubuntu 20.04 ou equivalente, 139 MB',
          },
          {
            Plataforma: 'Site',
            'Como obter': '[iimagine.ai/open-source](https://www.iimagine.ai/open-source) e [página de downloads](https://www.iimagine.ai/downloads)',
          },
          {
            Plataforma: 'Política de privacidade',
            'Como obter': '[iimagine.ai/privacy](https://www.iimagine.ai/privacy)',
          },
          {
            Plataforma: 'Código-fonte',
            'Como obter': '[github.com/iimagine-ai/desktop](https://github.com/iimagine-ai/desktop), MIT',
          },
        ],
        note: 'Versão analisada: 0.1.2. A versão para macOS é só para Apple Silicon (não há build para Intel) e é descrita como assinada e notarizada; o instalador do Windows não tem assinatura de código, então o SmartScreen pode exibir um aviso, e o AppImage do Linux aparece pela primeira vez na 0.1.2. O app é gratuito e dispensa conta; compilar a partir do código-fonte com Node.js 18 ou posterior é o caminho para desenvolvedores descrito no README.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**As fontes informam versões mínimas do sistema operacional, mas nenhum requisito de RAM ou disco para o app; o que seu computador precisa depende dos modelos que você baixar.**',
        ],
        columns: ['Item', 'O que as fontes dizem'],
        rows: [
          {
            Item: 'Sistema operacional',
            'O que as fontes dizem': 'macOS 12 ou posterior (Apple Silicon), Windows 10 ou posterior (64 bits), Ubuntu 20.04 ou equivalente',
          },
          {
            Item: 'Escolha do modelo',
            'O que as fontes dizem': 'Um Model Advisor analisa RAM e GPU e recomenda um modelo; o README associa 4, 8, 16 e 32 GB ou mais a quatro tamanhos do Gemma 4',
          },
          {
            Item: 'Download de modelos',
            'O que as fontes dizem': 'Os arquivos GGUF vêm do Hugging Face pelo Model Browser integrado, então o primeiro modelo exige internet',
          },
          {
            Item: 'GPU',
            'O que as fontes dizem': 'Há suporte a offload para a GPU; não se diz que ela seja obrigatória',
          },
          {
            Item: 'Espaço em disco',
            'O que as fontes dizem': 'Não informado para o app; cada modelo é um download separado',
          },
        ],
        note: 'A página do fabricante mostra tamanhos de exemplo (por exemplo, Llama 3.1 8B com 4.7 GB) como ilustração do catálogo; o PromptQuorum não abriu o catálogo do app e não pode confirmar quais modelos ele lista.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem do site ou do README do fabricante; nenhum foi testado de forma independente.**',
        ],
        items: [
          '**Chat e modelos.** Chat com resposta em streaming, histórico de conversas e troca de modelo sobre um motor incluído, com um catálogo GGUF selecionado, downloads retomáveis e uma recomendação baseada no hardware.',
          '**Documentos.** Uma base de conhecimento para arquivos PDF, Word, CSV e Markdown com busca vetorial, mais o Folder Connect, que indexa uma pasta e monitora suas alterações.',
          '**Voz.** Entrada de voz, um modo de chat por voz e síntese de voz local com o modelo Kokoro; o README também menciona síntese de voz em nuvem.',
          '**Ferramentas e extensões.** Um cliente MCP, um executor de agentes para tarefas em várias etapas com chamadas de ferramentas, skills em Markdown, personas, um gerenciador de prompts, busca na web opcional e um sistema de plugins baseado em hooks.',
          '**API local.** Um endpoint compatível com a OpenAI no localhost que, segundo o fabricante, outras ferramentas como Cursor e VS Code podem usar.',
          '**Armazenamento.** As conversas ficam em SQLite com criptografia SQLCipher (AES-256) no seu disco.',
        ],
        note: 'Os plugins premium (memória, gestão de clientes, ferramentas setoriais) são vendidos à parte no marketplace de plugins do fabricante e exigem assinatura; o app básico, não.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados: local e nuvem',
        content: [
          '**O fabricante descreve três níveis de privacidade que você escolhe a cada conversa: modelos locais no seu computador, a nuvem regional da sua organização (Azure, AWS ou Google Cloud) com suas próprias credenciais, ou provedores externos como OpenAI, Anthropic, Google ou OpenRouter com suas próprias chaves de API.** Só o primeiro mantém os dados no dispositivo. O README acrescenta que cada mensagem mostra se ficou no local ou foi para um provedor em nuvem.',
          'O site e o README afirmam que o app não coleta telemetria nem exige conta, e que um modelo local não faz chamadas de rede. Downloads de modelos, busca na web, voz em nuvem e o marketplace de plugins premium precisam de internet por natureza. A política de privacidade (atualizada em agosto de 2026) cita "desktop applications" em seu escopo, mas descreve o tratamento de dados da plataforma web e de um futuro "Desktop Companion"; ela não menciona o IIMAGINE Desktop 0.1.2 nem a afirmação de ausência de telemetria.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São declarações do fabricante, não resultados de auditoria. O código-fonte é público, mas o PromptQuorum não o leu nem inspecionou o tráfego de rede do app; por isso, "sem telemetria" e "zero bytes saem do seu dispositivo" são tratados aqui como não verificados.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deve usar',
        items: [
          '**Usuários de desktop atentos à privacidade**, que querem baixar um instalador, escolher um modelo local e conversar com seus próprios documentos sem terminal.',
          '**Desenvolvedores** que buscam um endpoint localhost compatível com a OpenAI e uma base de código com licença MIT que possam ler.',
          '**Equipes que também usam modelos em nuvem aprovados** e querem um único app capaz de alternar entre o local e as próprias credenciais de nuvem.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Comportamento real.** O PromptQuorum não executou o app, então velocidade, estabilidade, qualidade das respostas e precisão do chat com documentos não são avaliadas.',
          '**Afirmações de privacidade.** "Sem telemetria" e "zero chamadas de rede" vêm do README e do site; a política não tem uma seção específica de desktop para esta versão, e o tráfego não foi inspecionado.',
          '**Catálogo de modelos.** O README cita tamanhos do Gemma 4, enquanto a página de recursos do fabricante mostra exemplos de Llama e Mistral; não está confirmado quais modelos o catálogo do app lista hoje.',
          '**Maturidade.** O repositório foi criado em 11 de julho de 2026, tem duas versões e mostrava 0 estrelas em 24 de outubro de 2026, então quase não há histórico na comunidade.',
          '**Segurança da API local.** As fontes não dizem se o endpoint localhost vem ativo por padrão nem se é protegido por chave.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            App: '[Jan](/pt/power-local-llm/jan-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Grátis / variante da Apache 2.0',
            'Diferença principal': 'App de chat para desktop de código aberto com hub de modelos próprio, suporte a MCP e conexões opcionais com a nuvem',
          },
          {
            App: '[GPT4All](/pt/power-local-llm/gpt4all-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'App de desktop focado no local, com chat com arquivos via LocalDocs',
          },
          {
            App: '[LM Studio](/pt/power-local-llm/lm-studio-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Grátis / código fechado',
            'Diferença principal': 'Executor de modelos refinado com servidor local; o app em si não é de código aberto',
          },
        ],
        note: 'Confirme o preço, a licença e as plataformas atuais de cada app na própria página antes de escolher; a tabela é um ponto de partida, não um ranking.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Preciso de uma conta IIMAGINE?',
            a: 'Não, segundo o fabricante: o app de desktop funciona sem conta. Conta ou assinatura entram nos plugins premium e na plataforma em nuvem separada da empresa.',
          },
          {
            q: 'Funciona em um Mac com Intel?',
            a: 'Não segundo a página de downloads, que lista apenas Apple Silicon (M1 a M4). As versões para Windows e Linux são de 64 bits.',
          },
          {
            q: 'Por que o Windows mostra um aviso de segurança?',
            a: 'O fabricante informa que o instalador do Windows ainda não tem assinatura de código; o SmartScreen pode exibir um aviso que você precisa superar com "Mais informações" e "Executar mesmo assim".',
          },
          {
            q: 'Outros apps podem usar os modelos dele?',
            a: 'O fabricante diz que serve uma API compatível com a OpenAI no localhost à qual ferramentas como Cursor e VS Code podem se conectar. As fontes não dizem se ela vem ativa por padrão ou se exige chave.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: 'O IIMAGINE Desktop é uma opção promissora e atualizada recentemente para ter um app de chat para desktop de código aberto que se instala como um programa comum, roda modelos locais, conversa com seus arquivos e oferece uma API localhost, com os provedores em nuvem mantidos como opcionais. Em contrapartida, é uma versão 0.x inicial, sem histórico público, com build para Mac só para Apple Silicon, instalador do Windows sem assinatura e afirmações de privacidade que se apoiam nas páginas do próprio fabricante. Serve a usuários de desktop que querem experimentar um código MIT gratuito e legível e aceitam as arestas de uma versão inicial; quem lida com dados sensíveis deve verificar por conta própria, por exemplo no modo somente local com a rede monitorada, que nada sai do computador.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[IIMAGINE Desktop no iimagine.ai](https://www.iimagine.ai/open-source) — lista de recursos, pilha tecnológica, níveis de privacidade e plataformas, verificado em 24 de outubro de 2026.',
          '[Downloads do IIMAGINE Desktop](https://www.iimagine.ai/downloads) — versão 0.1.2, requisitos por plataforma e notas de instalação, verificados em 24 de outubro de 2026.',
          '[IIMAGINE Desktop no GitHub](https://github.com/iimagine-ai/desktop) — README, licença MIT e a versão v0.1.2 (31 de agosto de 2026) com seus arquivos, verificados em 24 de outubro de 2026.',
          '[Página Local AI](https://www.iimagine.ai/features/local-ai) — descrição do fabricante sobre o app de desktop, a API local e as recomendações de modelos, verificada em 24 de outubro de 2026.',
          '[Política de privacidade da IIMAGINE](https://www.iimagine.ai/privacy) — escopo, terceiros e a seção do Desktop Companion, atualizada pela última vez em agosto de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Jan](/pt/power-local-llm/jan-review) — um app de chat para desktop de código aberto e offline.',
          '[Análise do GPT4All](/pt/power-local-llm/gpt4all-review) — um app de desktop focado no local, com chat com documentos.',
          '[Análise do LM Studio](/pt/power-local-llm/lm-studio-review) — um executor de modelos para desktop com servidor local.',
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
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/iimagine-desktop-review-hero-ar.webp',
    title: 'مراجعة IIMAGINE Desktop: تطبيق دردشة بذكاء اصطناعي محلي مفتوح المصدر',
    seoTitle: 'مراجعة IIMAGINE Desktop: دردشة ذكاء اصطناعي محلية',
    intro: 'IIMAGINE Desktop تطبيق دردشة مجاني لسطح المكتب بترخيص MIT من [IIMAGINE](https://www.iimagine.ai/open-source) يعمل على macOS وWindows وLinux. يضم محرك استدلال محليًا، ويدردش مع مستنداتك، وينطق الردود، ويتيح واجهة API متوافقة مع OpenAI على localhost، مع مزوّدي سحابة اختياريين. تستند هذه المراجعة إلى موقع الشركة المطوّرة ومستودعها على GitHub وصفحة الإصدارات وسياسة الخصوصية، وقد جرى الاطلاع عليها في 24 أكتوبر 2026؛ ولم يجرّب PromptQuorum التطبيق عمليًا.',
    metaDescription: 'مراجعة IIMAGINE Desktop: تطبيق سطح مكتب مفتوح المصدر (MIT) بمحرك محلي مدمج ودردشة مع المستندات وصوت وواجهة API على localhost. الإصدار 0.1.2؛ لم يُختبر.',
    twitterDescription: 'مراجعة IIMAGINE Desktop: تطبيق دردشة مجاني بترخيص MIT بمحرك محلي ومفاتيح سحابة اختيارية وواجهة localhost. ما تؤكده المصادر وما لا تؤكده.',
    audience: 'مستخدمو سطح المكتب الذين يريدون تطبيق دردشة مجانيًا ومفتوح المصدر يشغّل النماذج المحلية دون طرفية، ويحتاجون إلى معرفة ما تؤكده المصادر وما يبقى سحابة اختيارية وما لم يثبت بعد.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة IIMAGINE Desktop',
    targetKeywords: [
      'مراجعة iimagine desktop',
      'iimagine desktop',
      'تطبيق ذكاء اصطناعي محلي مفتوح المصدر لسطح المكتب',
      'تطبيق دردشة ذكاء اصطناعي محلي مع واجهة localhost',
      'تطبيق ذكاء اصطناعي خاص لسطح المكتب بترخيص MIT',
      'iimagine ذكاء اصطناعي محلي',
    ],
    current_models_mentioned: ['Gemma 4', 'Kokoro'],
    current_hardware_mentioned: ['Apple Silicon', 'Windows 10', 'Ubuntu 20.04'],
    leadAnswerBlock: '**IIMAGINE Desktop (الإصدار 0.1.2، نُشر في 31 أغسطس 2026) تطبيق دردشة مفتوح المصدر لسطح المكتب يشغّل النماذج المحلية عبر محرك مدمج ويعامل مزوّدي السحابة كخيار إضافي.** لا يحتاج إلى حساب وهو مجاني؛ أما ما يُقال عن الخصوصية والجودة فمصدره صفحات الشركة نفسها لا الاختبارات.',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل IIMAGINE Desktop محليًا بالكامل؟',
        answer: 'افتراضيًا نعم بحسب الشركة: تعمل النماذج عبر المحرك المدمج، وفي الوضع المحلي لا تغادر البيانات الجهاز. لكنه أداة هجينة أيضًا: يمكنك تحويل محادثة إلى مزوّدي السحابة بمفاتيح API الخاصة بك، واستخدام البحث على الويب الاختياري أو الصوت السحابي، وتثبيت إضافات مميزة مدفوعة.',
        bullets: [
          'الدردشة مع ملفات PDF وWord وCSV وMarkdown عبر قاعدة معرفة محلية.',
          'إدخال صوتي ودردشة صوتية ونطق محلي بنموذج Kokoro.',
          'عميل MCP ومشغّل وكلاء ومهارات وشخصيات ونظام إضافات.',
          'نقطة نهاية متوافقة مع OpenAI على localhost لتستخدمها تطبيقات أخرى.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'ما هو IIMAGINE Desktop؟', anchor: 'what-is-iimagine-desktop' },
      { label: 'كيفية الحصول عليه', anchor: 'get-it' },
      { label: 'المتطلبات', anchor: 'requirements' },
      { label: 'المزايا التي تؤكدها المصادر', anchor: 'key-features' },
      { label: 'تدفق البيانات: محلي وسحابي', anchor: 'privacy' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'ما لم نستطع التحقق منه', anchor: 'who-should-not-use' },
      { label: 'المنافسون والبدائل', anchor: 'vs-alternatives' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'IIMAGINE Desktop تطبيق Electron مفتوح المصدر ينزّل نماذج GGUF ويشغّلها على حاسوبك ويدردش مع ملفاتك، ومزوّدو السحابة إضافة اختيارية.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته كأي تطبيق، وتدعه يقترح نموذجًا يناسب ذاكرتك، ثم تدردش؛ لا حاجة إلى حساب، وقرار إرسال محادثة إلى مزوّد سحابي يعود إليك في كل محادثة.',
          },
        ],
        items: [
          'الصيانة: نُشر الإصدار 0.1.2 في 31 أغسطس 2026، أي قبل 54 يومًا من هذا الفحص، فلا ينطبق تحذير المشروع المتوقف.',
          'النضج: سلسلة 0.x بإصدارين فقط منذ يوليو 2026، فتوقّع بعض الجوانب غير المصقولة.',
          'المحرك: «iimagine-engine» مدمج تقول الشركة إنه مبني على llama.cpp ويشغّل نماذج GGUF من Hugging Face.',
          'النطاق: مزوّدو السحابة والبحث الاختياري على الويب والصوت السحابي والإضافات المميزة المدفوعة تقع خارج الوضع المحلي الافتراضي.',
          'الشركة: IIMAGINE، وتبيع أيضًا منصة سحابية منفصلة لا تشملها هذه المراجعة.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى iimagine.ai ومستودع GitHub وصفحة إصداراته وسياسة الخصوصية، وقد جرى الاطلاع عليها في 24 أكتوبر 2026. لم يثبّت PromptQuorum التطبيق ولم يشغّله ولم يقِس أداءه، لذلك لا تُقيَّم السرعة ولا جودة الإجابات.',
          },
        ],
      },
      overview: {
        id: 'what-is-iimagine-desktop',
        title: 'ما هو IIMAGINE Desktop؟',
        content: [
          '**IIMAGINE Desktop تطبيق مستقل لسطح المكتب للدردشة مع النماذج المفتوحة على جهازك، ويُنشر بترخيص MIT في مستودع GitHub باسم iimagine-ai/desktop.** بُني بـ Electron، ويحفظ المحادثات في قاعدة بيانات SQLite مشفّرة، ويعمل بحسب الشركة دون حساب.',
          'تدير شركة IIMAGINE أيضًا منصة سحابية منفصلة بحسابات وخطط قائمة على الأرصدة. وهي منتج آخر؛ تغطي هذه المراجعة تطبيق سطح المكتب وحده، ولا تتناول خيارات السحابة لدى الشركة إلا حيث يوفّرها التطبيق نفسه.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيفية الحصول عليه',
        content: [
          '**التطبيق تنزيل عادي بمثبّت لأنظمة macOS وWindows وLinux؛ وتُستضاف الملفات كأصول إصدار على GitHub وتُربط من صفحة التنزيل لدى الشركة.**',
        ],
        columns: ['المنصة', 'كيفية الحصول عليه'],
        rows: [
          {
            'المنصة': 'macOS',
            'كيفية الحصول عليه': '[ملف .dmg لمعالجات Apple Silicon](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop-0.1.2-arm64.dmg)، macOS 12 أو أحدث، 132 MB',
          },
          {
            'المنصة': 'Windows',
            'كيفية الحصول عليه': '[مثبّت .exe بنظام 64 بت](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop.Setup.0.1.2.exe)، Windows 10 أو أحدث، 266 MB',
          },
          {
            'المنصة': 'Linux',
            'كيفية الحصول عليه': '[ملف .AppImage](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop-0.1.2.AppImage)، Ubuntu 20.04 أو ما يعادله، 139 MB',
          },
          {
            'المنصة': 'الموقع',
            'كيفية الحصول عليه': '[iimagine.ai/open-source](https://www.iimagine.ai/open-source) و[صفحة التنزيل](https://www.iimagine.ai/downloads)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'كيفية الحصول عليه': '[iimagine.ai/privacy](https://www.iimagine.ai/privacy)',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'كيفية الحصول عليه': '[github.com/iimagine-ai/desktop](https://github.com/iimagine-ai/desktop)، MIT',
          },
        ],
        note: 'الإصدار الذي رُوجع: 0.1.2. إصدار macOS مخصص لمعالجات Apple Silicon فقط (لا يوجد إصدار لـ Intel) ويوصف بأنه موقّع وموثَّق؛ أما مثبّت Windows فغير موقّع رقميًا، لذا قد يعرض SmartScreen تحذيرًا، ويظهر ملف AppImage لنظام Linux لأول مرة في الإصدار 0.1.2. التطبيق مجاني ولا يحتاج إلى حساب؛ والبناء من الشيفرة المصدرية باستخدام Node.js 18 أو أحدث هو مسار المطوّرين في ملف README.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**تذكر المصادر الحد الأدنى لإصدار نظام التشغيل، لكنها لا تذكر متطلبات للذاكرة أو القرص للتطبيق نفسه؛ فالنماذج التي تنزّلها هي التي تحدد ما يحتاجه جهازك.**',
        ],
        columns: ['البند', 'ما تقوله المصادر'],
        rows: [
          {
            'البند': 'نظام التشغيل',
            'ما تقوله المصادر': 'macOS 12 أو أحدث (Apple Silicon)، وWindows 10 أو أحدث (64 بت)، وUbuntu 20.04 أو ما يعادله',
          },
          {
            'البند': 'اختيار النموذج',
            'ما تقوله المصادر': 'يفحص Model Advisor الذاكرة وGPU ويوصي بنموذج؛ ويربط README بين 4 و8 و16 و32 GB أو أكثر وأربعة أحجام من Gemma 4',
          },
          {
            'البند': 'تنزيل النماذج',
            'ما تقوله المصادر': 'تأتي ملفات GGUF من Hugging Face عبر Model Browser المدمج، فيحتاج النموذج الأول إلى الإنترنت',
          },
          {
            'البند': 'GPU',
            'ما تقوله المصادر': 'يدعم نقل جزء من الحمل إلى GPU؛ ولا يُذكر أنه إلزامي',
          },
          {
            'البند': 'مساحة القرص',
            'ما تقوله المصادر': 'غير مذكورة للتطبيق؛ وكل نموذج تنزيل مستقل',
          },
        ],
        note: 'تعرض صفحة الشركة أحجامًا مثالية للنماذج (مثل Llama 3.1 8B بحجم 4.7 GB) لتوضيح الفهرس؛ ولم يفتح PromptQuorum الفهرس داخل التطبيق، فلا يستطيع تأكيد النماذج التي يعرضها.',
      },
      features: {
        id: 'key-features',
        title: 'المزايا التي تؤكدها المصادر',
        content: [
          '**كل بند أدناه مأخوذ من موقع الشركة أو ملف README؛ ولم يُختبر أي منها بشكل مستقل.**',
        ],
        items: [
          '**الدردشة والنماذج.** دردشة بالبث المباشر وسجل محادثات وتبديل بين النماذج على محرك مدمج، مع فهرس GGUF منتقى وتنزيلات قابلة للاستئناف وتوصية مبنية على العتاد.',
          '**المستندات.** قاعدة معرفة لملفات PDF وWord وCSV وMarkdown مع بحث متجهي، إضافةً إلى Folder Connect الذي يفهرس مجلدًا ويراقب تغيّراته.',
          '**الصوت.** إدخال صوتي ووضع دردشة صوتية ونطق محلي بنموذج Kokoro؛ ويذكر README أيضًا نطقًا سحابيًا.',
          '**الأدوات والإضافات.** عميل MCP ومشغّل وكلاء للمهام متعددة الخطوات مع استدعاء الأدوات، ومهارات بصيغة Markdown، وشخصيات، ومدير للأوامر النصية، وبحث اختياري على الويب، ونظام إضافات قائم على الخطافات.',
          '**واجهة API محلية.** نقطة نهاية متوافقة مع OpenAI على localhost تقول الشركة إن أدوات مثل Cursor وVS Code تستطيع استخدامها.',
          '**التخزين.** تُحفظ المحادثات في SQLite بتشفير SQLCipher (AES-256) على قرصك.',
        ],
        note: 'تُباع الإضافات المميزة (الذاكرة وإدارة العملاء وأدوات القطاعات) بشكل منفصل في سوق الإضافات لدى الشركة وتتطلب اشتراكًا؛ أما التطبيق الأساسي فلا.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات: محلي وسحابي',
        content: [
          '**تصف الشركة ثلاثة مستويات للخصوصية تختار بينها في كل محادثة: نماذج محلية على جهازك، أو سحابة إقليمية لمؤسستك (Azure أو AWS أو Google Cloud) ببيانات اعتمادك الخاصة، أو مزوّدون خارجيون مثل OpenAI وAnthropic وGoogle وOpenRouter بمفاتيح API الخاصة بك.** والأول وحده يُبقي البيانات على الجهاز. ويضيف README أن كل رسالة تُظهر هل بقيت محليًا أم ذهبت إلى مزوّد سحابي.',
          'يذكر الموقع وREADME أن التطبيق لا يجمع بيانات قياس عن بُعد ولا يحتاج إلى حساب، وأن النموذج المحلي لا يجري أي اتصال بالشبكة. أما تنزيل النماذج والبحث على الويب والنطق السحابي وسوق الإضافات المميزة فتحتاج إلى الإنترنت بطبيعتها. وتذكر سياسة الخصوصية (المحدّثة في أغسطس 2026) «desktop applications» ضمن نطاقها، لكنها تصف معالجة البيانات للمنصة السحابية ولـ«Desktop Companion» المستقبلي؛ ولا تذكر IIMAGINE Desktop 0.1.2 ولا ادعاء غياب القياس عن بُعد.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات من الشركة وليست نتائج تدقيق. الشيفرة المصدرية متاحة للعموم، لكن PromptQuorum لم يقرأها ولم يفحص حركة الشبكة للتطبيق، لذلك يُعدّ «لا قياس عن بُعد» و«لا بايت يغادر جهازك» غير متحقَّق منهما هنا.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مستخدمو سطح المكتب المهتمون بالخصوصية** الذين يريدون تنزيل مثبّت واختيار نموذج محلي والدردشة مع مستنداتهم دون طرفية.',
          '**المطوّرون** الذين يريدون نقطة نهاية localhost متوافقة مع OpenAI وقاعدة شيفرة بترخيص MIT يمكن قراءتها.',
          '**الفرق التي تستخدم أيضًا نماذج سحابية معتمدة** وتريد تطبيقًا واحدًا يبدّل بين الوضع المحلي وبيانات اعتماد السحابة الخاصة بها.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نستطع التحقق منه',
        items: [
          '**السلوك الفعلي.** لم يشغّل PromptQuorum التطبيق، لذا لا تُقيَّم السرعة والاستقرار وجودة الإجابات ودقة الدردشة مع المستندات.',
          '**ادعاءات الخصوصية.** «لا قياس عن بُعد» و«صفر اتصالات شبكة» مصدرهما README والموقع؛ وليس في السياسة قسم خاص بسطح المكتب لهذا الإصدار، ولم تُفحص حركة الشبكة.',
          '**فهرس النماذج.** يذكر README أحجام Gemma 4 بينما تعرض صفحة المزايا لدى الشركة أمثلة من Llama وMistral؛ وما يعرضه فهرس التطبيق اليوم غير مؤكد.',
          '**النضج.** أُنشئ المستودع في 11 يوليو 2026، وله إصداران، وكان عدد نجومه 0 في 24 أكتوبر 2026، فلا يوجد سجل مجتمعي يُذكر.',
          '**أمان واجهة API المحلية.** لا تذكر المصادر هل نقطة نهاية localhost مفعّلة افتراضيًا أم محمية بمفتاح.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الأساسي'],
        rows: [
          {
            'التطبيق': '[Jan](/ar/power-local-llm/jan-review)',
            'المنصات': 'macOS وWindows وLinux',
            'السعر / الترخيص': 'مجاني / صيغة من Apache 2.0',
            'الفرق الأساسي': 'تطبيق دردشة مفتوح المصدر لسطح المكتب بمركز نماذج خاص به ودعم MCP واتصالات سحابية اختيارية',
          },
          {
            'التطبيق': '[GPT4All](/ar/power-local-llm/gpt4all-review)',
            'المنصات': 'macOS وWindows وLinux',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الأساسي': 'تطبيق سطح مكتب يركّز على المحلي مع دردشة مع الملفات عبر LocalDocs',
          },
          {
            'التطبيق': '[LM Studio](/ar/power-local-llm/lm-studio-review)',
            'المنصات': 'macOS وWindows وLinux',
            'السعر / الترخيص': 'مجاني / مغلق المصدر',
            'الفرق الأساسي': 'مشغّل نماذج مصقول بخادم محلي؛ والتطبيق نفسه ليس مفتوح المصدر',
          },
        ],
        note: 'تحقق من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته الخاصة قبل الاختيار؛ هذا الجدول نقطة بداية وليس ترتيبًا.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل أحتاج إلى حساب IIMAGINE؟',
            a: 'لا بحسب الشركة: يعمل تطبيق سطح المكتب دون حساب. ويظهر الحساب أو الاشتراك مع الإضافات المميزة ومع المنصة السحابية المنفصلة للشركة.',
          },
          {
            q: 'هل يعمل على جهاز Mac بمعالج Intel؟',
            a: 'لا بحسب صفحة التنزيل التي تذكر Apple Silicon فقط (من M1 إلى M4). أما إصدارا Windows وLinux فبنظام 64 بت.',
          },
          {
            q: 'لماذا يعرض Windows تحذيرًا أمنيًا؟',
            a: 'تذكر الشركة أن مثبّت Windows غير موقّع رقميًا بعد، لذا قد يعرض SmartScreen تحذيرًا يلزم تجاوزه بالنقر على «مزيد من المعلومات» ثم «تشغيل على أي حال».',
          },
          {
            q: 'هل تستطيع تطبيقات أخرى استخدام نماذجه؟',
            a: 'تقول الشركة إنه يقدّم واجهة API متوافقة مع OpenAI على localhost يمكن لأدوات مثل Cursor وVS Code الاتصال بها. ولا تذكر المصادر هل هي مفعّلة افتراضيًا أم تتطلب مفتاحًا.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'IIMAGINE Desktop خيار واعد وحديث التحديث للحصول على تطبيق دردشة مفتوح المصدر لسطح المكتب يُثبَّت كالبرامج العادية ويشغّل نماذج محلية ويدردش مع ملفاتك ويوفّر واجهة API على localhost، مع بقاء مزوّدي السحابة اختياريين. في المقابل، هو إصدار 0.x مبكر بلا سجل عام، وإصدار Mac مخصص لـ Apple Silicon فقط، ومثبّت Windows غير موقّع، وادعاءات خصوصية تستند إلى صفحات الشركة نفسها. يناسب مستخدمي سطح المكتب الذين يريدون تجربة شيفرة MIT مجانية وقابلة للقراءة ويقبلون خشونة الإصدارات المبكرة؛ ومن يتعامل مع بيانات حساسة فعليه أن يتحقق بنفسه، مثلًا في الوضع المحلي فقط مع مراقبة الشبكة، من أن شيئًا لا يغادر الجهاز.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[IIMAGINE Desktop على iimagine.ai](https://www.iimagine.ai/open-source) — قائمة المزايا وحزمة التقنيات ومستويات الخصوصية والمنصات، جرى الاطلاع عليها في 24 أكتوبر 2026.',
          '[تنزيلات IIMAGINE Desktop](https://www.iimagine.ai/downloads) — الإصدار 0.1.2 ومتطلبات المنصات وملاحظات التثبيت، جرى الاطلاع عليها في 24 أكتوبر 2026.',
          '[IIMAGINE Desktop على GitHub](https://github.com/iimagine-ai/desktop) — README وترخيص MIT وإصدار v0.1.2 (31 أغسطس 2026) مع ملفاته، جرى الاطلاع عليها في 24 أكتوبر 2026.',
          '[صفحة Local AI](https://www.iimagine.ai/features/local-ai) — وصف الشركة لتطبيق سطح المكتب وواجهة API المحلية وتوصيات النماذج، جرى الاطلاع عليها في 24 أكتوبر 2026.',
          '[سياسة خصوصية IIMAGINE](https://www.iimagine.ai/privacy) — النطاق والأطراف الثالثة وقسم Desktop Companion، آخر تحديث في أغسطس 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Jan](/ar/power-local-llm/jan-review) — تطبيق دردشة مفتوح المصدر لسطح المكتب يعمل دون اتصال.',
          '[مراجعة GPT4All](/ar/power-local-llm/gpt4all-review) — تطبيق سطح مكتب يركّز على المحلي مع دردشة مع المستندات.',
          '[مراجعة LM Studio](/ar/power-local-llm/lm-studio-review) — مشغّل نماذج لسطح المكتب بخادم محلي.',
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
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/iimagine-desktop-review-hero-zh.webp',
    title: 'IIMAGINE Desktop 评测：开源本地 AI 聊天应用',
    seoTitle: 'IIMAGINE Desktop 评测：开源本地 AI 聊天',
    intro: 'IIMAGINE Desktop 是 [IIMAGINE](https://www.iimagine.ai/open-source) 推出的免费桌面聊天应用，采用 MIT 许可证，支持 macOS、Windows 和 Linux。它内置本地推理引擎，可与你的文档对话、朗读回答，并在 localhost 上提供兼容 OpenAI 的 API，云端服务商为可选项。本评测依据开发方的网站、GitHub 仓库及发布页面和隐私政策，核查日期为 2026 年 10 月 24 日；PromptQuorum 未亲自测试该应用。',
    metaDescription: 'IIMAGINE Desktop 评测：内置本地引擎、支持文档对话、语音和 localhost API 的 MIT 开源桌面应用。版本 0.1.2，未经实测。',
    twitterDescription: 'IIMAGINE Desktop 评测：免费的 MIT 桌面聊天应用，内置本地引擎，云端密钥可选，并提供 localhost API。资料已证实什么，尚未证实什么。',
    audience: '希望使用免费开源聊天应用、无需终端即可运行本地模型的桌面用户，需要了解资料证实了什么、哪些属于可选云端功能、哪些尚未得到验证。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'IIMAGINE Desktop 评测',
    targetKeywords: [
      'iimagine desktop 评测',
      'iimagine desktop',
      '开源本地 AI 桌面应用',
      '带 localhost API 的本地 AI 聊天应用',
      'MIT 许可证 私有 AI 桌面应用',
      'iimagine 本地 AI',
    ],
    current_models_mentioned: ['Gemma 4', 'Kokoro'],
    current_hardware_mentioned: ['Apple Silicon', 'Windows 10', 'Ubuntu 20.04'],
    leadAnswerBlock: '**IIMAGINE Desktop（版本 0.1.2，2026 年 8 月 31 日发布）是一款开源桌面聊天应用，通过内置引擎运行本地模型，并把云端服务商视为可选项。** 它无需账号、免费使用；关于隐私和质量的说法来自开发方自己的页面，而非测试结果。',
    quickAnswerTop: {
      zh: {
        question: 'IIMAGINE Desktop 是完全本地运行的吗？',
        answer: '据开发方称，默认如此：模型通过内置引擎运行，在本地模式下数据不会离开这台电脑。但它也是混合型工具：你可以用自己的 API 密钥把某次对话切换到云端服务商，使用可选的联网搜索或云端语音，并安装付费的高级插件。',
        bullets: [
          '通过本地知识库与 PDF、Word、CSV 和 Markdown 文件对话。',
          '支持语音输入、语音聊天，以及使用 Kokoro 模型的本地语音朗读。',
          '提供 MCP 客户端、智能体运行器、技能、角色和插件系统。',
          '在 localhost 上提供兼容 OpenAI 的端点，供其他应用调用。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'IIMAGINE Desktop 是什么？', anchor: 'what-is-iimagine-desktop' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '系统要求', anchor: 'requirements' },
      { label: '资料证实的功能', anchor: 'key-features' },
      { label: '本地与云端的数据流向', anchor: 'privacy' },
      { label: '适合哪些人', anchor: 'who-should-use' },
      { label: '我们无法核实的内容', anchor: 'who-should-not-use' },
      { label: '竞品与替代方案', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'IIMAGINE Desktop 是一款开源的 Electron 应用，可下载 GGUF 模型并在你的电脑上运行，还能与你的文件对话；云端服务商只是可选的附加项。',
          },
          {
            type: 'plain-terms',
            text: '像普通软件一样安装，让它按你的内存推荐一个模型就能聊天；无需账号，是否把某次对话发送给云端服务商，由你逐次决定。',
          },
        ],
        items: [
          '维护情况：0.1.2 版于 2026 年 8 月 31 日发布，距本次核查 54 天，因此不适用“项目停更”警告。',
          '成熟度：自 2026 年 7 月以来只有两次发布，属于 0.x 阶段，预计仍有不少粗糙之处。',
          '引擎：内置的“iimagine-engine”据开发方称基于 llama.cpp，运行来自 Hugging Face 的 GGUF 模型。',
          '范围：云端服务商、可选联网搜索、云端语音和付费高级插件都在本地默认模式之外。',
          '开发方：IIMAGINE，同时销售一个独立的云平台，本评测不涉及。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测依据 iimagine.ai、GitHub 仓库及其发布页面和隐私政策，核查日期为 2026 年 10 月 24 日。PromptQuorum 未安装、运行或测评该应用，因此不评估速度和回答质量。',
          },
        ],
      },
      overview: {
        id: 'what-is-iimagine-desktop',
        title: 'IIMAGINE Desktop 是什么？',
        content: [
          '**IIMAGINE Desktop 是一款独立的桌面应用，用于在你自己的电脑上与开放模型对话，以 MIT 许可证发布在 GitHub 仓库 iimagine-ai/desktop。** 它基于 Electron 构建，把对话保存在加密的 SQLite 数据库中，据开发方称无需账号即可使用。',
          'IIMAGINE 公司另运营一个带账号和积分套餐的云平台。那是另一款产品；本评测只涉及桌面应用，并且仅在应用本身提供云端选项时才提到开发方的云端功能。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: ['**这是面向 macOS、Windows 和 Linux 的常规安装包下载；文件作为 GitHub 发布资源托管，并从开发方的下载页链接。**'],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'macOS',
            '获取方式': '[Apple Silicon 版 .dmg](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop-0.1.2-arm64.dmg)，需要 macOS 12 或更高，132 MB',
          },
          {
            '平台': 'Windows',
            '获取方式': '[64 位安装程序 .exe](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop.Setup.0.1.2.exe)，需要 Windows 10 或更高，266 MB',
          },
          {
            '平台': 'Linux',
            '获取方式': '[.AppImage](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop-0.1.2.AppImage)，Ubuntu 20.04 或同等系统，139 MB',
          },
          {
            '平台': '官方网站',
            '获取方式': '[iimagine.ai/open-source](https://www.iimagine.ai/open-source) 和[下载页](https://www.iimagine.ai/downloads)',
          },
          { '平台': '隐私政策', '获取方式': '[iimagine.ai/privacy](https://www.iimagine.ai/privacy)' },
          {
            '平台': '源代码',
            '获取方式': '[github.com/iimagine-ai/desktop](https://github.com/iimagine-ai/desktop)，MIT',
          },
        ],
        note: '评测版本：0.1.2。macOS 版仅支持 Apple Silicon（不提供 Intel 版），据称已签名并经过公证；Windows 安装程序未做代码签名，SmartScreen 可能弹出警告；Linux 的 AppImage 在 0.1.2 中首次出现。应用免费且无需账号；使用 Node.js 18 或更高版本从源码构建是 README 中面向开发者的方式。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '系统要求',
        content: ['**资料给出了操作系统的最低版本，但没有给出应用本身的内存或磁盘要求；你的电脑需要什么配置，取决于下载的模型。**'],
        columns: ['项目', '资料中的说法'],
        rows: [
          {
            '项目': '操作系统',
            '资料中的说法': 'macOS 12 或更高（Apple Silicon）、Windows 10 或更高（64 位）、Ubuntu 20.04 或同等系统',
          },
          {
            '项目': '模型选择',
            '资料中的说法': 'Model Advisor 会扫描内存和 GPU 并推荐模型；README 把 4、8、16 和 32 GB 以上分别对应四种 Gemma 4 规格',
          },
          { '项目': '模型下载', '资料中的说法': 'GGUF 文件通过应用内的 Model Browser 从 Hugging Face 获取，因此第一个模型需要联网' },
          { '项目': 'GPU', '资料中的说法': '支持 GPU 卸载；资料未说明必须有 GPU' },
          { '项目': '磁盘空间', '资料中的说法': '应用本身未说明；每个模型都是单独下载' },
        ],
        note: '开发方页面展示了示例模型大小（例如 Llama 3.1 8B 为 4.7 GB），用于说明模型目录；PromptQuorum 没有打开应用内的目录，无法确认其实际列出了哪些模型。',
      },
      features: {
        id: 'key-features',
        title: '资料证实的功能',
        content: ['**以下各项均来自开发方的网站或 README，均未经独立测试。**'],
        items: [
          '**聊天与模型。** 在内置引擎上提供流式聊天、对话历史和模型切换，附带精选的 GGUF 目录、可续传的下载，以及按硬件给出的推荐。',
          '**文档。** 支持 PDF、Word、CSV 和 Markdown 文件的向量检索知识库，以及会为文件夹建立索引并监视变化的 Folder Connect。',
          '**语音。** 提供语音输入、语音聊天模式，以及使用 Kokoro 模型的本地语音朗读；README 还提到云端语音朗读。',
          '**工具与扩展。** 包含 MCP 客户端、可调用工具完成多步任务的智能体运行器、Markdown 技能、角色、提示词管理器、可选联网搜索，以及基于钩子的插件系统。',
          '**本地 API。** 在 localhost 上提供兼容 OpenAI 的端点，据开发方称 Cursor 和 VS Code 等工具可以使用。',
          '**存储。** 对话保存在你磁盘上的 SQLite 中，并使用 SQLCipher（AES-256）加密。',
        ],
        note: '高级插件（记忆、客户管理、行业工具）在开发方的插件市场单独销售，需要订阅；基础应用则不需要。',
      },
      privacy: {
        id: 'privacy',
        title: '本地与云端的数据流向',
        content: [
          '**开发方描述了可按对话选择的三个隐私级别：在你电脑上运行的本地模型；使用你自己凭据的组织区域云（Azure、AWS 或 Google Cloud）；以及使用你自己 API 密钥的 OpenAI、Anthropic、Google 或 OpenRouter 等第三方服务商。** 只有第一种会把数据留在设备上。README 还补充说，每条消息都会显示它留在本地还是发送到了云端服务商。',
          '网站和 README 声称应用不收集遥测数据、无需账号，本地模型也不发起网络调用。模型下载、联网搜索、云端语音和高级插件市场本身都需要联网。隐私政策（2026 年 8 月更新）在适用范围中列出了“desktop applications”，但其内容讲的是网页平台和未来的“Desktop Companion”的数据处理，并未提及 IIMAGINE Desktop 0.1.2，也未提及“无遥测”的说法。',
        ],
        callouts: [
          {
            type: 'note',
            text: '以上是开发方的声明，而非审计结果。源代码是公开的，但 PromptQuorum 没有阅读代码，也没有检查应用的网络流量，因此“无遥测”和“没有任何字节离开你的设备”在此视为未经验证。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**注重隐私的桌面用户**：想下载安装包、选一个本地模型，并在不用终端的情况下与自己的文档对话。',
          '**开发者**：需要兼容 OpenAI 的 localhost 端点，以及可以阅读的 MIT 许可代码库。',
          '**同时使用已获批云端模型的团队**：希望一个应用就能在本地和自己的云端凭据之间切换。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**实际表现。** PromptQuorum 没有运行该应用，因此不评估速度、稳定性、回答质量和文档对话的准确度。',
          '**隐私说法。**“无遥测”和“零网络调用”来自 README 和网站；政策中没有针对此版本的桌面专门章节，也未检查流量。',
          '**模型目录。** README 提到 Gemma 4 规格，而开发方的功能页展示的是 Llama 和 Mistral 示例；应用内目录目前列出哪些模型尚未确认。',
          '**成熟度。** 仓库创建于 2026 年 7 月 11 日，只有两次发布，2026 年 10 月 24 日显示 0 颗星，几乎没有社区使用记录。',
          '**本地 API 的安全性。** 资料没有说明 localhost 端点是否默认开启，是否受密钥保护。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          {
            '应用': '[Jan](/zh/power-local-llm/jan-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / Apache 2.0 变体',
            '主要区别': '开源桌面聊天应用，自带模型库，支持 MCP，并可选连接云端',
          },
          {
            '应用': '[GPT4All](/zh/power-local-llm/gpt4all-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '以本地为先的桌面应用，通过 LocalDocs 与文件对话',
          },
          {
            '应用': '[LM Studio](/zh/power-local-llm/lm-studio-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / 闭源',
            '主要区别': '打磨成熟的模型运行器，带本地服务器；应用本身不开源',
          },
        ],
        note: '选择之前，请在各应用自己的页面上确认当前价格、许可证和平台；此表只是起点，不是排名。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '需要 IIMAGINE 账号吗？', a: '不需要，据开发方称桌面应用无需账号即可使用。只有高级插件和公司另外的云平台才涉及账号或订阅。' },
          {
            q: '能在 Intel 版 Mac 上运行吗？',
            a: '下载页只列出 Apple Silicon（M1 至 M4），因此看来不能。Windows 和 Linux 版本均为 64 位。',
          },
          {
            q: '为什么 Windows 会弹出安全警告？',
            a: '开发方说明 Windows 安装程序尚未做代码签名，因此 SmartScreen 可能弹出警告，需要点击“更多信息”再选择“仍要运行”。',
          },
          {
            q: '其他应用能使用它的模型吗？',
            a: '开发方称它在 localhost 上提供兼容 OpenAI 的 API，Cursor 和 VS Code 等工具可以连接。资料没有说明默认是否开启，或是否需要密钥。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'IIMAGINE Desktop 是一个有前景且近期有更新的选择：这款开源桌面聊天应用能像普通软件一样安装，运行本地模型，与你的文件对话，并提供 localhost API，云端服务商保持可选。另一方面，它是缺乏公开使用记录的早期 0.x 版本，Mac 版仅支持 Apple Silicon，Windows 安装程序未签名，隐私说法也依赖开发方自己的页面。它适合想试用免费、可读的 MIT 代码并能接受早期版本粗糙之处的桌面用户；处理敏感数据的人应自行验证，例如在纯本地模式下监控网络，确认没有数据离开电脑。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[iimagine.ai 上的 IIMAGINE Desktop](https://www.iimagine.ai/open-source) — 功能列表、技术栈、隐私级别和平台，核查于 2026 年 10 月 24 日。',
          '[IIMAGINE Desktop 下载页](https://www.iimagine.ai/downloads) — 版本 0.1.2、各平台要求和安装说明，核查于 2026 年 10 月 24 日。',
          '[GitHub 上的 IIMAGINE Desktop](https://github.com/iimagine-ai/desktop) — README、MIT 许可证，以及带文件的 v0.1.2 发布（2026 年 8 月 31 日），核查于 2026 年 10 月 24 日。',
          '[Local AI 页面](https://www.iimagine.ai/features/local-ai) — 开发方对桌面应用、本地 API 和模型推荐的说明，核查于 2026 年 10 月 24 日。',
          '[IIMAGINE 隐私政策](https://www.iimagine.ai/privacy) — 适用范围、第三方和 Desktop Companion 章节，最近更新于 2026 年 8 月。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Jan 评测](/zh/power-local-llm/jan-review) — 一款开源的离线桌面聊天应用。',
          '[GPT4All 评测](/zh/power-local-llm/gpt4all-review) — 以本地为先、支持文档对话的桌面应用。',
          '[LM Studio 评测](/zh/power-local-llm/lm-studio-review) — 带本地服务器的桌面模型运行器。',
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
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/iimagine-desktop-review-hero-ko.webp',
    title: 'IIMAGINE Desktop 리뷰: 오픈소스 로컬 AI 채팅 앱',
    seoTitle: 'IIMAGINE Desktop 리뷰: 오픈소스 로컬 AI 채팅',
    intro: 'IIMAGINE Desktop은 [IIMAGINE](https://www.iimagine.ai/open-source)이 macOS, Windows, Linux용으로 내놓은 무료 MIT 라이선스 데스크톱 채팅 앱입니다. 로컬 추론 엔진을 내장하고, 문서와 대화하며, 음성으로 읽어 주고, localhost에 OpenAI 호환 API를 제공하며, 클라우드 제공자는 선택 사항입니다. 이 리뷰는 제작사 웹사이트, GitHub 저장소와 릴리스 페이지, 개인정보 처리방침을 2026년 10월 24일에 확인한 내용에 근거하며, PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription: 'IIMAGINE Desktop 리뷰: 로컬 엔진 내장, 문서 채팅, 음성, localhost API를 갖춘 MIT 오픈소스 데스크톱 앱입니다. 버전 0.1.2이며 직접 테스트하지 않았습니다.',
    twitterDescription: 'IIMAGINE Desktop 리뷰: 로컬 엔진을 내장한 무료 MIT 채팅 앱으로 클라우드 키는 선택이며 localhost API를 제공합니다. 출처가 확인한 것과 확인하지 못한 것을 정리했습니다.',
    audience: '터미널 없이 로컬 모델을 실행하는 무료 오픈소스 채팅 앱을 찾으며, 출처가 확인한 내용과 선택적 클라우드 부분, 아직 검증되지 않은 부분을 알고 싶은 데스크톱 사용자.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'IIMAGINE Desktop 리뷰',
    targetKeywords: [
      'iimagine desktop 리뷰',
      'iimagine desktop',
      '오픈소스 로컬 AI 데스크톱 앱',
      'localhost API가 있는 로컬 AI 채팅 앱',
      'MIT 라이선스 프라이빗 AI 데스크톱 앱',
      'iimagine 로컬 AI',
    ],
    current_models_mentioned: ['Gemma 4', 'Kokoro'],
    current_hardware_mentioned: ['Apple Silicon', 'Windows 10', 'Ubuntu 20.04'],
    leadAnswerBlock: '**IIMAGINE Desktop(버전 0.1.2, 2026년 8월 31일 공개)은 내장 엔진으로 로컬 모델을 실행하고 클라우드 제공자를 선택 사항으로 다루는 오픈소스 데스크톱 채팅 앱입니다.** 계정이 필요 없고 무료이며, 개인정보와 품질에 관한 설명은 테스트 결과가 아니라 제작사 자체 페이지에 근거합니다.',
    quickAnswerTop: {
      ko: {
        question: 'IIMAGINE Desktop은 완전히 로컬에서 동작합니까?',
        answer: '제작사에 따르면 기본값은 그렇습니다. 모델은 내장 엔진으로 실행되고 로컬 모드에서는 데이터가 기기 밖으로 나가지 않습니다. 다만 하이브리드 도구이기도 해서, 대화별로 자신의 API 키로 클라우드 제공자로 전환하거나 선택형 웹 검색과 클라우드 음성을 쓰고 유료 프리미엄 플러그인을 설치할 수 있습니다.',
        bullets: [
          '로컬 지식 베이스로 PDF, Word, CSV, Markdown 파일과 대화할 수 있습니다.',
          '음성 입력, 음성 채팅, Kokoro 모델을 이용한 로컬 음성 읽기를 지원합니다.',
          'MCP 클라이언트, 에이전트 러너, 스킬, 페르소나, 플러그인 시스템이 있습니다.',
          '다른 앱이 쓸 수 있는 OpenAI 호환 엔드포인트를 localhost에서 제공합니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'IIMAGINE Desktop이란?', anchor: 'what-is-iimagine-desktop' },
      { label: '받는 방법', anchor: 'get-it' },
      { label: '요구 사항', anchor: 'requirements' },
      { label: '출처가 확인한 기능', anchor: 'key-features' },
      { label: '로컬과 클라우드의 데이터 흐름', anchor: 'privacy' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 내용', anchor: 'who-should-not-use' },
      { label: '경쟁 앱과 대안', anchor: 'vs-alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 글', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'IIMAGINE Desktop은 GGUF 모델을 내려받아 내 컴퓨터에서 실행하고 파일과 대화하는 오픈소스 Electron 앱이며, 클라우드 제공자는 선택 사항입니다.',
          },
          {
            type: 'plain-terms',
            text: '일반 앱처럼 설치하고 RAM에 맞는 모델을 추천받아 대화하면 됩니다. 계정은 필요 없으며, 대화를 클라우드 제공자에게 보낼지는 대화마다 직접 정합니다.',
          },
        ],
        items: [
          '유지보수: 버전 0.1.2는 이번 확인 54일 전인 2026년 8월 31일에 공개되어 방치된 프로젝트 경고는 해당하지 않습니다.',
          '성숙도: 2026년 7월 이후 릴리스가 두 번뿐인 0.x 계열이므로 거친 부분이 있을 수 있습니다.',
          '엔진: 내장된 "iimagine-engine"은 제작사에 따르면 llama.cpp 기반이며 Hugging Face의 GGUF 모델을 실행합니다.',
          '범위: 클라우드 제공자, 선택형 웹 검색, 클라우드 음성, 유료 프리미엄 플러그인은 로컬 기본값 밖에 있습니다.',
          '제작사: IIMAGINE이며, 이 리뷰에서 다루지 않는 별도의 클라우드 플랫폼도 판매합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 iimagine.ai, GitHub 저장소와 릴리스 페이지, 개인정보 처리방침을 2026년 10월 24일에 확인한 내용에 근거합니다. PromptQuorum은 앱을 설치하거나 실행하거나 측정하지 않았으므로 속도와 답변 품질은 평가하지 않습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-iimagine-desktop',
        title: 'IIMAGINE Desktop이란?',
        content: [
          '**IIMAGINE Desktop은 내 컴퓨터에서 오픈 모델과 대화하는 독립 실행형 데스크톱 앱으로, GitHub 저장소 iimagine-ai/desktop에 MIT 라이선스로 공개되어 있습니다.** Electron으로 만들었고, 대화를 암호화된 SQLite 데이터베이스에 저장하며, 제작사에 따르면 계정 없이 작동합니다.',
          'IIMAGINE은 계정과 크레딧 요금제가 있는 별도의 클라우드 플랫폼도 운영합니다. 그것은 다른 제품이며, 이 리뷰는 데스크톱 앱만 다루고 제작사의 클라우드 옵션도 앱 자체가 제공하는 범위에서만 언급합니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '받는 방법',
        content: [
          '**macOS, Windows, Linux용 일반 설치 파일을 내려받는 방식이며, 파일은 GitHub 릴리스 자산으로 호스팅되고 제작사의 다운로드 페이지에서 연결됩니다.**',
        ],
        columns: ['플랫폼', '받는 방법'],
        rows: [
          {
            '플랫폼': 'macOS',
            '받는 방법': '[Apple Silicon용 .dmg](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop-0.1.2-arm64.dmg), macOS 12 이상, 132 MB',
          },
          {
            '플랫폼': 'Windows',
            '받는 방법': '[64비트 설치 .exe](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop.Setup.0.1.2.exe), Windows 10 이상, 266 MB',
          },
          {
            '플랫폼': 'Linux',
            '받는 방법': '[.AppImage](https://github.com/iimagine-ai/desktop/releases/download/v0.1.2/IIMAGINE.Desktop-0.1.2.AppImage), Ubuntu 20.04 또는 동급, 139 MB',
          },
          {
            '플랫폼': '웹사이트',
            '받는 방법': '[iimagine.ai/open-source](https://www.iimagine.ai/open-source) 및 [다운로드 페이지](https://www.iimagine.ai/downloads)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 방법': '[iimagine.ai/privacy](https://www.iimagine.ai/privacy)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 방법': '[github.com/iimagine-ai/desktop](https://github.com/iimagine-ai/desktop), MIT',
          },
        ],
        note: '확인한 버전은 0.1.2입니다. macOS 빌드는 Apple Silicon 전용이며(인텔용은 제공되지 않음) 서명 및 공증을 마친 것으로 설명됩니다. Windows 설치 파일은 코드 서명이 되어 있지 않아 SmartScreen 경고가 나타날 수 있고, Linux AppImage는 0.1.2에서 처음 등장합니다. 앱은 무료이며 계정이 필요 없습니다. Node.js 18 이상으로 소스에서 빌드하는 것은 README의 개발자용 경로입니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: ['**출처에는 운영체제 최소 버전은 있지만 앱 자체의 RAM이나 디스크 요구 사항은 없으며, 필요한 사양은 내려받는 모델이 결정합니다.**'],
        columns: ['항목', '출처의 설명'],
        rows: [
          {
            '항목': '운영체제',
            '출처의 설명': 'macOS 12 이상(Apple Silicon), Windows 10 이상(64비트), Ubuntu 20.04 또는 동급',
          },
          {
            '항목': '모델 선택',
            '출처의 설명': 'Model Advisor가 RAM과 GPU를 검사해 모델을 추천하며, README는 4, 8, 16, 32 GB 이상을 Gemma 4의 네 가지 크기에 대응시킵니다',
          },
          {
            '항목': '모델 다운로드',
            '출처의 설명': 'GGUF 파일은 앱 내 Model Browser를 통해 Hugging Face에서 받으므로 첫 모델에는 인터넷이 필요합니다',
          },
          { '항목': 'GPU', '출처의 설명': 'GPU 오프로딩을 지원하며, GPU가 필수라는 언급은 없습니다' },
          { '항목': '디스크 공간', '출처의 설명': '앱 자체에 대한 언급은 없고 모델마다 별도 다운로드입니다' },
        ],
        note: '제작사 페이지는 카탈로그의 예시로 모델 크기(예: Llama 3.1 8B는 4.7 GB)를 보여 줍니다. PromptQuorum은 앱 내 카탈로그를 열어 보지 않았으므로 실제로 어떤 모델이 나열되는지는 확인하지 못했습니다.',
      },
      features: {
        id: 'key-features',
        title: '출처가 확인한 기능',
        content: ['**아래 항목은 모두 제작사의 웹사이트나 README에서 가져왔으며 독립적으로 테스트하지 않았습니다.**'],
        items: [
          '**채팅과 모델.** 내장 엔진 위에서 스트리밍 채팅, 대화 기록, 모델 전환을 제공하며, 엄선된 GGUF 카탈로그, 이어받기가 되는 다운로드, 하드웨어 기반 추천이 있습니다.',
          '**문서.** PDF, Word, CSV, Markdown 파일용 벡터 검색 지식 베이스와, 폴더를 색인하고 변경을 감시하는 Folder Connect가 있습니다.',
          '**음성.** 음성 입력, 음성 채팅 모드, Kokoro 모델을 이용한 로컬 음성 읽기를 지원하며, README에는 클라우드 음성 읽기도 언급되어 있습니다.',
          '**도구와 확장.** MCP 클라이언트, 도구 호출로 여러 단계 작업을 처리하는 에이전트 러너, Markdown 스킬, 페르소나, 프롬프트 관리자, 선택형 웹 검색, 훅 기반 플러그인 시스템이 있습니다.',
          '**로컬 API.** localhost의 OpenAI 호환 엔드포인트로, 제작사에 따르면 Cursor나 VS Code 같은 도구가 사용할 수 있습니다.',
          '**저장.** 대화는 디스크의 SQLite에 SQLCipher(AES-256) 암호화로 저장됩니다.',
        ],
        note: '프리미엄 플러그인(메모리, 고객 관리, 업종별 도구)은 제작사의 플러그인 마켓플레이스에서 따로 판매되며 구독이 필요합니다. 기본 앱에는 필요하지 않습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '로컬과 클라우드의 데이터 흐름',
        content: [
          '**제작사는 대화마다 고를 수 있는 세 가지 개인정보 보호 수준을 설명합니다. 내 컴퓨터의 로컬 모델, 내 자격 증명으로 쓰는 조직의 리전 클라우드(Azure, AWS, Google Cloud), 내 API 키로 쓰는 OpenAI, Anthropic, Google, OpenRouter 같은 외부 제공자입니다.** 데이터가 기기에 남는 것은 첫 번째뿐입니다. README는 각 메시지가 로컬에 머물렀는지 클라우드 제공자로 갔는지 표시된다고 덧붙입니다.',
          '사이트와 README는 앱이 텔레메트리를 수집하지 않고 계정도 필요 없으며 로컬 모델은 네트워크 호출을 하지 않는다고 밝힙니다. 모델 다운로드, 웹 검색, 클라우드 음성, 프리미엄 플러그인 마켓플레이스는 성격상 인터넷이 필요합니다. 개인정보 처리방침(2026년 8월 업데이트)은 적용 범위에 "desktop applications"를 포함하지만, 설명하는 것은 웹 플랫폼과 향후의 "Desktop Companion"의 데이터 처리이며 IIMAGINE Desktop 0.1.2나 텔레메트리 없음 주장은 언급하지 않습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 제작사의 선언이지 감사 결과가 아닙니다. 소스 코드는 공개되어 있지만 PromptQuorum은 코드를 읽지 않았고 앱의 네트워크 트래픽도 점검하지 않았으므로, "텔레메트리 없음"과 "기기 밖으로 나가는 데이터 0바이트"는 여기서 검증되지 않은 것으로 봅니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**개인정보를 중시하는 데스크톱 사용자**: 설치 파일을 받아 로컬 모델을 고르고 터미널 없이 자신의 문서와 대화하고 싶은 분.',
          '**개발자**: OpenAI 호환 localhost 엔드포인트와 읽을 수 있는 MIT 라이선스 코드베이스를 원하는 분.',
          '**승인된 클라우드 모델도 쓰는 팀**: 로컬과 자사 클라우드 자격 증명 사이를 하나의 앱에서 전환하고 싶은 팀.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        items: [
          '**실제 동작.** PromptQuorum은 앱을 실행하지 않았으므로 속도, 안정성, 답변 품질, 문서 채팅의 정확도는 평가하지 않습니다.',
          '**개인정보 주장.** "텔레메트리 없음"과 "네트워크 호출 0"은 README와 웹사이트의 설명입니다. 정책에는 이 릴리스를 다루는 데스크톱 전용 항목이 없고 트래픽도 점검하지 않았습니다.',
          '**모델 카탈로그.** README는 Gemma 4 크기를 언급하지만 제작사의 기능 페이지는 Llama와 Mistral 예시를 보여 주며, 앱 내 카탈로그가 현재 어떤 모델을 싣는지는 확인되지 않았습니다.',
          '**성숙도.** 저장소는 2026년 7월 11일에 만들어졌고 릴리스는 두 번이며 2026년 10월 24일 기준 스타는 0개여서 커뮤니티 이력이 거의 없습니다.',
          '**로컬 API 보안.** localhost 엔드포인트가 기본으로 켜져 있는지, 키로 보호되는지는 출처에 나와 있지 않습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '주요 차이'],
        rows: [
          {
            '앱': '[Jan](/ko/power-local-llm/jan-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / Apache 2.0 변형',
            '주요 차이': '자체 모델 허브, MCP 지원, 선택형 클라우드 연결을 갖춘 오픈소스 데스크톱 채팅 앱',
          },
          {
            '앱': '[GPT4All](/ko/power-local-llm/gpt4all-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / MIT',
            '주요 차이': 'LocalDocs로 파일과 대화하는 로컬 중심 데스크톱 앱',
          },
          {
            '앱': '[LM Studio](/ko/power-local-llm/lm-studio-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / 클로즈드 소스',
            '주요 차이': '로컬 서버를 갖춘 세련된 모델 실행기로, 앱 자체는 오픈소스가 아닙니다',
          },
        ],
        note: '선택하기 전에 각 앱의 현재 가격, 라이선스, 플랫폼을 해당 앱의 페이지에서 확인하십시오. 이 표는 출발점일 뿐 순위가 아닙니다.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'IIMAGINE 계정이 필요합니까?',
            a: '제작사에 따르면 필요 없으며 데스크톱 앱은 계정 없이 작동합니다. 계정이나 구독이 등장하는 곳은 프리미엄 플러그인과 회사의 별도 클라우드 플랫폼입니다.',
          },
          {
            q: '인텔 Mac에서 실행됩니까?',
            a: '다운로드 페이지에는 Apple Silicon(M1~M4)만 표기되어 있어 실행되지 않는 것으로 보입니다. Windows와 Linux 빌드는 64비트입니다.',
          },
          {
            q: 'Windows에서 보안 경고가 나오는 이유는 무엇입니까?',
            a: '제작사는 Windows 설치 파일에 아직 코드 서명이 없다고 밝힙니다. 그래서 SmartScreen 경고가 나타날 수 있으며 "추가 정보"와 "실행"을 눌러 진행해야 합니다.',
          },
          {
            q: '다른 앱이 이 앱의 모델을 쓸 수 있습니까?',
            a: '제작사는 Cursor나 VS Code 같은 도구가 연결할 수 있는 OpenAI 호환 API를 localhost에서 제공한다고 합니다. 기본으로 켜져 있는지, 키가 필요한지는 출처에 나와 있지 않습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'IIMAGINE Desktop은 일반 소프트웨어처럼 설치되고, 로컬 모델을 실행하며, 파일과 대화하고, localhost API를 제공하면서 클라우드 제공자는 선택 사항으로 남겨 둔 오픈소스 데스크톱 채팅 앱이라는 점에서 유망하고 최근에도 업데이트되었습니다. 반면 공개된 이력이 없는 초기 0.x 릴리스이고, Mac 빌드는 Apple Silicon 전용이며, Windows 설치 파일은 서명되지 않았고, 개인정보 주장은 제작사 자체 페이지에 의존합니다. 무료이고 읽을 수 있는 MIT 코드를 시험해 보며 초기 버전의 거친 면을 받아들일 수 있는 데스크톱 사용자에게 적합합니다. 민감한 데이터를 다루는 분은 예를 들어 로컬 전용 모드에서 네트워크를 모니터링하는 등으로 아무것도 기기 밖으로 나가지 않는지 직접 확인하십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[iimagine.ai의 IIMAGINE Desktop](https://www.iimagine.ai/open-source) — 기능 목록, 기술 스택, 개인정보 보호 수준, 플랫폼. 2026년 10월 24일 확인.',
          '[IIMAGINE Desktop 다운로드](https://www.iimagine.ai/downloads) — 버전 0.1.2, 플랫폼별 요구 사항, 설치 안내. 2026년 10월 24일 확인.',
          '[GitHub의 IIMAGINE Desktop](https://github.com/iimagine-ai/desktop) — README, MIT 라이선스, 파일이 포함된 v0.1.2 릴리스(2026년 8월 31일). 2026년 10월 24일 확인.',
          '[Local AI 페이지](https://www.iimagine.ai/features/local-ai) — 제작사의 데스크톱 앱, 로컬 API, 모델 추천 설명. 2026년 10월 24일 확인.',
          '[IIMAGINE 개인정보 처리방침](https://www.iimagine.ai/privacy) — 적용 범위, 제3자, Desktop Companion 항목. 최종 업데이트 2026년 8월.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Jan 리뷰](/ko/power-local-llm/jan-review) — 오프라인으로 쓰는 오픈소스 데스크톱 채팅 앱.',
          '[GPT4All 리뷰](/ko/power-local-llm/gpt4all-review) — 문서 채팅을 갖춘 로컬 중심 데스크톱 앱.',
          '[LM Studio 리뷰](/ko/power-local-llm/lm-studio-review) — 로컬 서버를 갖춘 데스크톱 모델 실행기.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그.',
        ],
      },
    },
  },
}
