// PocketLLM Lite Review: Local-First AI Chat App for Android
// Slug: pocketllm-lite-review
// Companion to: pocketpal-ai-review, maid-review, local-llm-chat-assistants-compared
// Sources: pocketllm-lite.vercel.app (product site), github.com/PocketLLM/pocketllm-lite (README, docs/KNOWN_LIMITATIONS.md, SECURITY.md) and the
// GitHub release v1.0.40 (published 2026-10-15), all checked 2026-10-24 — no hands-on testing. The site says "On-device GGUF"; the README says
// GGUF cannot be loaded on the phone (Cactus bundles only) — the review follows the README and states the conflict.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocketllm-lite-review-hero-en.webp',
    title: 'PocketLLM Lite Review: Local-First AI Chat App for Android',
    seoTitle: 'PocketLLM Lite Review: Local-First AI Chat for Android',
    intro:
      'PocketLLM Lite is a free, MIT-licensed Android chat app that runs compatible models on the phone or connects to your own Ollama or OpenAI-compatible server. No developer is named; the code lives in the [PocketLLM GitHub organisation](https://github.com/PocketLLM/pocketllm-lite) and the product has its own site at [pocketllm-lite.vercel.app](https://pocketllm-lite.vercel.app). This review is based on that site, GitHub release v1.0.40 and the repository documents, checked on 24 October 2026; PromptQuorum has not installed or tested the app.',
    metaDescription:
      'PocketLLM Lite review: free, MIT-licensed Android app that runs models on the phone or uses your own Ollama server. Untested; sources checked.',
    twitterDescription:
      'PocketLLM Lite review: a local-first Android chat app, on-device or via your own server. Free and MIT-licensed; what the sources confirm and what they do not.',
    audience:
      'Android users and tinkerers who want a local-first chat and document app and need to know what the project documents, what it admits is unverified and what it costs.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'PocketLLM Lite review',
    targetKeywords: [
      'pocketllm lite review',
      'pocketllm lite android',
      'local ai chat app android',
      'offline llm app android',
      'android ollama client',
      'open source android llm app',
      'on-device llm android apk',
    ],
    current_models_mentioned: ['Whisper'],
    current_hardware_mentioned: ['Android phone', 'arm64-v8a'],
    leadAnswerBlock:
      '**PocketLLM Lite (version 1.0.40, released on 15 October 2026) is a free, open-source Android chat app that runs models on the phone or on a server you control.** On-device inference loads only Cactus-format model bundles, not GGUF files, and the project labels its APKs as debug-signed engineering builds.',
    quickAnswerTop: {
      en: {
        question: 'Does PocketLLM Lite run AI models on the phone itself?',
        answer:
          'Per the project, yes, but only in the arm64-v8a APK and only with Cactus-format bundles; the release notes say on-device token generation has not been verified on a physical phone. Other builds, and anything else such as GGUF files, work through a server like Ollama.',
        bullets: [
          'Chat keeps history, branches, personas and per-chat system prompts.',
          'PDF, TXT, Markdown and CSV files can be searched by keyword, semantic or hybrid retrieval.',
          'Strict Offline Mode blocks the app\'s non-loopback traffic, and an audit log lists network destinations.',
          'A web edition runs in the browser against your own Ollama or OpenAI-compatible endpoint.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is PocketLLM Lite?', anchor: 'what-is-pocketllm-lite' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Data Flow and Privacy', anchor: 'privacy' },
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
  { type: 'one-sentence', text: 'PocketLLM Lite is an MIT-licensed Android app that chats with models running on the phone or on your own Ollama or OpenAI-compatible server.' },
  { type: 'plain-terms', text: 'You install an APK from GitHub, download a small model into the app or point it at a server at home, and then chat or ask questions about your own documents without an account.' },
],
        items: [
  'Maintenance: the repository was last pushed on 15 October 2026 and several releases have followed since August, so no stale-project warning applies.',
  'Cost: free, with no account, and per the README no ads or analytics SDKs.',
  'Runtimes: on-device Cactus bundles, an Ollama server or any OpenAI-compatible endpoint.',
  'Signing: release APKs are debug-signed, and the maintainers call them engineering builds.',
  'Maker: no named developer; the project is run by a GitHub organisation.',
],
        callouts: [
  { type: 'note', text: 'This review is based on the project\'s website, GitHub release v1.0.40 and repository documents, checked on 24 October 2026. PromptQuorum has not installed or tested the app, so speed, answer quality and stability are not assessed.' },
],
      },
      overview: {
        id: 'what-is-pocketllm-lite',
        title: 'What Is PocketLLM Lite?',
        content: [
  '**PocketLLM Lite is a local-first AI workspace for Android, built with Flutter, with a companion web edition.** The project describes it as an app where chats, documents, memories and models stay under the user\'s control; the GitHub repository was created on 9 December 2025.',
  'It separates the app from the inference backend and offers three routes: on-device models through the Cactus runtime, an Ollama server on loopback or a trusted local network, and any configurable OpenAI-compatible endpoint.',
],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
  '**PocketLLM Lite is distributed as APK files on GitHub Releases, plus a browser edition; no store listing is linked and no iOS app is offered.**',
],
        columns: ['Option', 'How to get it'],
        rows: [
  { 'Option': 'Android, most phones', 'How to get it': '[arm64-v8a APK](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40), about 60 MB, includes the on-device runtime' },
  { 'Option': 'Android, older or x86', 'How to get it': '[armeabi-v7a and x86_64 APKs](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40); servers, OCR and documents only' },
  { 'Option': 'Web edition', 'How to get it': '[Open the web app](https://pocketllm-lite.vercel.app/#/app); needs your own Ollama or OpenAI-compatible endpoint' },
  { 'Option': 'Website', 'How to get it': '[pocketllm-lite.vercel.app](https://pocketllm-lite.vercel.app)' },
  { 'Option': 'Source code', 'How to get it': '[GitHub repository](https://github.com/PocketLLM/pocketllm-lite), MIT license' },
],
        note: 'Version reviewed: 1.0.40, published on 15 October 2026 with a SHA256SUMS file; Android 7.0 (API 24) or newer is required. The APKs are debug-signed, so Android shows no verified publisher, and installing needs permission for unknown sources. According to the README, a 1B-parameter model at Q4 takes roughly 0.7 to 1 GB.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
  '**The steps follow the project\'s own five-minute quick start; PromptQuorum has not run them.**',
],
        numberedItems: [
  {
    title: 'Install the APK',
    whyItMatters: 'Download the arm64-v8a file from the release page, compare it with SHA256SUMS.txt and install it.',
  },
  {
    title: 'Finish onboarding',
    whyItMatters: 'Choose your network permissions; update checks and online model browsing are optional.',
  },
  {
    title: 'Pick a runtime',
    whyItMatters: 'Download a small catalog model for on-device use, or enter the URL of an Ollama or OpenAI-compatible server in settings.',
  },
  {
    title: 'Chat or import documents',
    whyItMatters: 'Per the README, the selected model produces every answer, and the app says so when a prerequisite is missing instead of faking a reply.',
  },
],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
  '**Every item below comes from the README or the release notes; none has been independently tested.**',
],
        items: [
  '**Chat workspace.** Streaming chat with history, branches, tags, personas, prompts, skills and per-chat system prompts.',
  '**Documents and memory.** PDF, TXT, Markdown and CSV import with source references; semantic search needs an installed embedding model, and local memories can be inspected, pinned and disabled.',
  '**Voice and OCR.** On-device Whisper transcription after a checksum-verified model install, text-to-speech, and Android OCR for Latin text.',
  '**Tools.** Validated JSON tool calls such as math, notes, reminders, clipboard and policy-gated web search; state-changing tools ask first.',
  '**Developer features.** Prompt Lab, side-by-side model comparison, on-device benchmarks and an authenticated OpenAI-compatible server inside the app, bound to loopback by default.',
],
        note: 'Version 1.0.40 added a share-to-PocketLLM flow for text, links and files and fixed model-load errors for catalog bundles. The interface is English only.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
  '**The README says chats, documents, indexes and memories stay in the app sandbox, on-device inference sends nothing out, and no ads, analytics or tracking SDKs are included.** A regression test in the repository is said to fail the build if such SDKs appear.',
  'Network use is meant to be explicit: model discovery and downloads, update checks, web search through Tavily with your own key and remote runtimes you configure contact their displayed destinations. Strict Offline Mode blocks non-loopback traffic from the app, an audit log lists destinations, and backups use AES-256-GCM with a password-derived key. A prompt sent to an Ollama or OpenAI-compatible server leaves the phone for that server.',
],
        callouts: [
  { type: 'note', text: 'Strict Offline is an application-level boundary, not a device firewall, and the project\'s security notes say the optional in-app API server has no TLS and no CORS allowlist, so it belongs on loopback or a trusted network. These are the project\'s own statements; PromptQuorum has not inspected network traffic.' },
],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
  '**Android users who already run Ollama** and want a phone client with document search and an audit log.',
  '**Tinkerers who want an MIT-licensed codebase** they can read, build with Flutter and adapt.',
  '**People curious about on-device models** who accept sideloaded, debug-signed builds and an unproven runtime.',
],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
  '**On-device inference.** The release notes say token generation was not verified on a physical phone and model loading only on an emulator, so speed, memory fit and stability are unknown.',
  '**Site versus repository.** The website lists "On-device GGUF", while the README says GGUF files cannot run on the phone; the repository description also mentions iOS although the README covers Android only. This review follows the README.',
  '**Signing and publisher.** Debug-signed APKs give no publisher identity, and no developer is named.',
  '**Runtime upkeep.** The known-limitations file says the Cactus Flutter package is archived upstream as of July 2026 and lists that as a maintenance risk.',
  '**Privacy and quality.** The no-tracking claim, the audit log and backup encryption were not inspected, and answer quality was not assessed.',
],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
  { 'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)', 'Platforms': 'iOS, Android', 'Price / license': 'Free / MIT', 'Key difference': 'Runs GGUF models on the phone and lists App Store and Google Play versions' },
  { 'App': '[Maid](/power-local-llm/maid-review)', 'Platforms': 'Android, iOS', 'Price / license': 'Free / MIT', 'Key difference': 'Open-source Flutter app that also works with Ollama and OpenAI-compatible APIs' },
  { 'App': '[MLC Chat](/power-local-llm/mlc-chat-review)', 'Platforms': 'iOS, Android', 'Price / license': 'Free / Apache 2.0', 'Key difference': 'Cross-platform mobile runtime built on MLC LLM' },
],
        note: 'These are the nearest mobile chat reviews on PromptQuorum; confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
  {
    q: 'What does the web edition do?',
    a: 'It is a Next.js browser version that keeps its data in IndexedDB and talks to an Ollama or OpenAI-compatible endpoint you control; the README says it does not include the Android on-device runtime.',
  },
  {
    q: 'Which APK should I download?',
    a: 'Use arm64-v8a for most phones from 2017 onward. The armeabi-v7a and x86_64 builds cannot run on-device models because the runtime library is packaged for arm64-v8a only.',
  },
  {
    q: 'Does it work without internet?',
    a: 'The project says on-device chat needs no network once a model is installed, and Strict Offline Mode can block the app\'s own non-loopback traffic; the first model download and web search do need a connection.',
  },
  {
    q: 'Is the app available in other languages?',
    a: 'No. The README says the interface is English only today; translation files for six languages exist but hold 15 strings and are not wired in.',
  },
],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
  'PocketLLM Lite is an actively updated, MIT-licensed way to put a documented local-first chat and document workspace on an Android phone, with a clear choice between on-device models and your own server. Against that, it has no named developer, ships debug-signed engineering builds, depends on an upstream runtime package it lists as archived, and its authors say on-device generation has not been verified on a real phone. It suits technical Android users who can sideload, read the repository and test the app themselves; anyone who needs a signed, store-distributed app with verified performance should wait for those to appear.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
  '[PocketLLM Lite website](https://pocketllm-lite.vercel.app) — features, runtimes and download overview, checked 24 October 2026.',
  '[PocketLLM Lite v1.0.40 release](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40) — APK list, signing notice and verification notes, published 15 October 2026.',
  '[PocketLLM Lite repository](https://github.com/PocketLLM/pocketllm-lite) — README, known-limitations file and security notes, checked 24 October 2026.',
],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
  '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client for iOS and Android.',
  '[Maid Review](/power-local-llm/maid-review) — an open-source Flutter app for local and remote models.',
  '[Chat Assistants Compared](/power-local-llm/local-llm-chat-assistants-compared) — the category comparison this review belongs to.',
  '[Local LLM Software Directory](/power-local-llm/local-llm-software-directory) — the full catalogue of local AI tools.',
],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'PocketLLM Lite Review: Local-First AI Chat App for Android',
      description:
        'PocketLLM Lite review: a free, MIT-licensed Android chat app that runs Cactus-format models on the phone or uses your own Ollama or OpenAI-compatible server. Requirements, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/pocketllm-lite-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Android users and developers evaluating a local-first AI chat app' },
      about: [
        { '@type': 'Thing', name: 'PocketLLM Lite' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'Android' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/pocketllm-lite-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'PocketLLM Lite Review', item: 'https://www.promptquorum.com/power-local-llm/pocketllm-lite-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocketllm-lite-review-hero-de.webp',
    title: 'PocketLLM Lite im Test: Lokale KI-Chat-App für Android',
    seoTitle: 'PocketLLM Lite im Test: Lokale KI-Chat-App für Android',
    intro:
      'PocketLLM Lite ist eine kostenlose Android-Chat-App unter MIT-Lizenz, die kompatible Modelle auf dem Telefon ausführt oder sich mit Ihrem eigenen Ollama- oder OpenAI-kompatiblen Server verbindet. Ein Entwickler wird nicht genannt; der Code liegt in der [GitHub-Organisation PocketLLM](https://github.com/PocketLLM/pocketllm-lite), und das Produkt hat eine eigene Website unter [pocketllm-lite.vercel.app](https://pocketllm-lite.vercel.app). Diese Rezension stützt sich auf diese Website, die GitHub-Version v1.0.40 und die Dokumente im Repository, geprüft am 24. Oktober 2026; PromptQuorum hat die App weder installiert noch getestet.',
    metaDescription:
      'PocketLLM Lite im Test: kostenlose Android-App (MIT), die Modelle auf dem Telefon ausführt oder Ihren Ollama-Server nutzt. Ungetestet; Quellen geprüft.',
    twitterDescription:
      'PocketLLM Lite im Test: lokale Android-Chat-App, auf dem Gerät oder über Ihren eigenen Server. Gratis, MIT-Lizenz; was die Quellen bestätigen und was nicht.',
    audience:
      'Android-Nutzer und Tüftler, die eine lokale Chat- und Dokument-App suchen und wissen müssen, was das Projekt dokumentiert, was es selbst als ungeprüft einräumt und was es kostet.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'PocketLLM Lite Test',
    targetKeywords: [
      'pocketllm lite test',
      'pocketllm lite android',
      'lokale ki chat app android',
      'offline llm app android',
      'ollama client android',
      'open source llm app android',
      'on-device llm android apk',
    ],
    current_models_mentioned: ['Whisper'],
    current_hardware_mentioned: ['Android phone', 'arm64-v8a'],
    leadAnswerBlock:
      '**PocketLLM Lite (Version 1.0.40, veröffentlicht am 15. Oktober 2026) ist eine kostenlose Open-Source-Chat-App für Android, die Modelle auf dem Telefon oder auf einem Server unter Ihrer Kontrolle ausführt.** Die Inferenz auf dem Gerät lädt nur Modellpakete im Cactus-Format, keine GGUF-Dateien, und das Projekt bezeichnet seine APKs als mit dem Debug-Zertifikat signierte Entwicklungs-Builds.',
    quickAnswerTop: {
      de: {
        question: 'Führt PocketLLM Lite KI-Modelle auf dem Telefon selbst aus?',
        answer:
          'Laut Projekt ja, aber nur in der APK für arm64-v8a und nur mit Paketen im Cactus-Format; die Versionshinweise sagen, dass die Token-Erzeugung auf dem Gerät nicht auf einem echten Telefon geprüft wurde. Andere Builds und alles übrige, etwa GGUF-Dateien, laufen über einen Server wie Ollama.',
        bullets: [
          'Der Chat bietet Verlauf, Verzweigungen, Personas und Systemprompts pro Chat.',
          'PDF-, TXT-, Markdown- und CSV-Dateien lassen sich per Stichwort-, semantischer oder hybrider Suche durchsuchen.',
          'Der Strict-Offline-Modus blockiert den Netzwerkverkehr der App außerhalb von Loopback, ein Protokoll listet die Netzwerkziele.',
          'Eine Web-Edition läuft im Browser mit Ihrem eigenen Ollama- oder OpenAI-kompatiblen Endpunkt.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist PocketLLM Lite?', anchor: 'what-is-pocketllm-lite' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Datenfluss und Datenschutz', anchor: 'privacy' },
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
  { type: 'one-sentence', text: 'PocketLLM Lite ist eine Android-App unter MIT-Lizenz, die mit Modellen chattet, die auf dem Telefon oder auf Ihrem eigenen Ollama- oder OpenAI-kompatiblen Server laufen.' },
  { type: 'plain-terms', text: 'Sie installieren eine APK von GitHub, laden ein kleines Modell in die App oder verweisen auf einen Server zu Hause und chatten dann oder stellen Fragen zu Ihren eigenen Dokumenten, ohne Konto.' },
],
        items: [
  'Pflege: Das Repository wurde zuletzt am 15. Oktober 2026 aktualisiert, und seit August sind mehrere Versionen erschienen; ein Warnhinweis auf ein verwaistes Projekt entfällt.',
  'Kosten: kostenlos, ohne Konto und laut README ohne Werbung oder Analyse-SDKs.',
  'Laufzeiten: Cactus-Pakete auf dem Gerät, ein Ollama-Server oder ein beliebiger OpenAI-kompatibler Endpunkt.',
  'Signatur: Die Release-APKs sind mit dem Debug-Zertifikat signiert, und die Betreuer nennen sie Entwicklungs-Builds.',
  'Hersteller: kein genannter Entwickler; das Projekt wird von einer GitHub-Organisation betrieben.',
],
        callouts: [
  { type: 'note', text: 'Diese Rezension stützt sich auf die Website des Projekts, die GitHub-Version v1.0.40 und Dokumente im Repository, geprüft am 24. Oktober 2026. PromptQuorum hat die App weder installiert noch getestet; Geschwindigkeit, Antwortqualität und Stabilität sind daher nicht bewertet.' },
],
      },
      overview: {
        id: 'what-is-pocketllm-lite',
        title: 'Was ist PocketLLM Lite?',
        content: [
  '**PocketLLM Lite ist ein lokal ausgerichteter KI-Arbeitsbereich für Android, mit Flutter entwickelt und ergänzt durch eine Web-Edition.** Das Projekt beschreibt die App als Ort, an dem Chats, Dokumente, Erinnerungen und Modelle unter der Kontrolle der Nutzer bleiben; das GitHub-Repository wurde am 9. Dezember 2025 angelegt.',
  'Die App trennt sich vom Inferenz-Backend und bietet drei Wege: Modelle auf dem Gerät über die Cactus-Laufzeit, einen Ollama-Server per Loopback oder in einem vertrauenswürdigen lokalen Netz sowie einen frei konfigurierbaren OpenAI-kompatiblen Endpunkt.',
],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
  '**PocketLLM Lite wird als APK-Datei über GitHub Releases verteilt, dazu gibt es eine Browser-Edition; ein Store-Eintrag ist nicht verlinkt, und eine iOS-App gibt es nicht.**',
],
        columns: ['Option', 'Bezug'],
        rows: [
  { 'Option': 'Android, die meisten Telefone', 'Bezug': '[APK für arm64-v8a](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40), rund 60 MB, mit Laufzeit für das Gerät' },
  { 'Option': 'Android, ältere Geräte oder x86', 'Bezug': '[APKs für armeabi-v7a und x86_64](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40); nur Server, OCR und Dokumente' },
  { 'Option': 'Web-Edition', 'Bezug': '[Web-App öffnen](https://pocketllm-lite.vercel.app/#/app); braucht Ihren eigenen Ollama- oder OpenAI-kompatiblen Endpunkt' },
  { 'Option': 'Website', 'Bezug': '[pocketllm-lite.vercel.app](https://pocketllm-lite.vercel.app)' },
  { 'Option': 'Quellcode', 'Bezug': '[GitHub-Repository](https://github.com/PocketLLM/pocketllm-lite), MIT-Lizenz' },
],
        note: 'Geprüfte Version: 1.0.40, veröffentlicht am 15. Oktober 2026 mit einer Datei SHA256SUMS; erforderlich ist Android 7.0 (API 24) oder neuer. Die APKs sind mit dem Debug-Zertifikat signiert, Android zeigt daher keinen geprüften Herausgeber an, und die Installation verlangt die Erlaubnis für unbekannte Quellen. Laut README belegt ein Modell mit 1 Mrd. Parametern bei Q4 etwa 0,7 bis 1 GB.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
  '**Die Schritte folgen dem Fünf-Minuten-Schnellstart des Projekts; PromptQuorum hat sie nicht ausgeführt.**',
],
        numberedItems: [
  {
    title: 'APK installieren',
    whyItMatters: 'Laden Sie die Datei für arm64-v8a von der Release-Seite herunter, vergleichen Sie sie mit SHA256SUMS.txt und installieren Sie sie.',
  },
  {
    title: 'Einrichtung abschließen',
    whyItMatters: 'Legen Sie Ihre Netzwerkberechtigungen fest; Update-Prüfungen und die Online-Modellsuche sind optional.',
  },
  {
    title: 'Laufzeit wählen',
    whyItMatters: 'Laden Sie ein kleines Katalogmodell für den Betrieb auf dem Gerät herunter oder tragen Sie in den Einstellungen die URL eines Ollama- oder OpenAI-kompatiblen Servers ein.',
  },
  {
    title: 'Chatten oder Dokumente importieren',
    whyItMatters: 'Laut README erzeugt das gewählte Modell jede Antwort, und die App weist darauf hin, wenn eine Voraussetzung fehlt, statt eine Antwort vorzutäuschen.',
  },
],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
  '**Jeder Punkt stammt aus der README oder den Versionshinweisen; keiner wurde unabhängig getestet.**',
],
        items: [
  '**Chat-Arbeitsbereich.** Streaming-Chat mit Verlauf, Verzweigungen, Tags, Personas, Prompts, Skills und Systemprompts pro Chat.',
  '**Dokumente und Gedächtnis.** Import von PDF, TXT, Markdown und CSV mit Quellenangaben; die semantische Suche braucht ein installiertes Embedding-Modell, und lokale Erinnerungen lassen sich einsehen, anheften und deaktivieren.',
  '**Sprache und OCR.** Whisper-Transkription auf dem Gerät nach einer per Prüfsumme verifizierten Modellinstallation, Sprachausgabe und Android-OCR für lateinische Schrift.',
  '**Werkzeuge.** Validierte JSON-Werkzeugaufrufe wie Rechnen, Notizen, Erinnerungen, Zwischenablage und richtliniengesteuerte Websuche; Aktionen, die etwas ändern, fragen vorher nach.',
  '**Entwicklerfunktionen.** Prompt Lab, Modellvergleich nebeneinander, Benchmarks auf dem Gerät und ein authentifizierter OpenAI-kompatibler Server in der App, standardmäßig nur an Loopback gebunden.',
],
        note: 'Version 1.0.40 brachte einen Teilen-Weg an PocketLLM für Text, Links und Dateien und behob Ladefehler bei Katalogpaketen. Die Oberfläche gibt es nur auf Englisch.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
  '**Laut README bleiben Chats, Dokumente, Indizes und Erinnerungen in der App-Sandbox, die Inferenz auf dem Gerät sendet nichts nach außen, und es sind keine Werbe-, Analyse- oder Tracking-SDKs enthalten.** Ein Regressionstest im Repository soll den Build scheitern lassen, falls solche SDKs auftauchen.',
  'Netzwerkzugriffe sollen ausdrücklich erfolgen: Modellsuche und Downloads, Update-Prüfungen, Websuche über Tavily mit Ihrem eigenen Schlüssel und von Ihnen konfigurierte entfernte Laufzeiten kontaktieren die angezeigten Ziele. Der Strict-Offline-Modus blockiert Datenverkehr der App außerhalb von Loopback, ein Protokoll listet die Ziele, und Backups nutzen AES-256-GCM mit einem aus dem Passwort abgeleiteten Schlüssel. Ein Prompt, der an einen Ollama- oder OpenAI-kompatiblen Server geht, verlässt das Telefon in Richtung dieses Servers.',
],
        callouts: [
  { type: 'note', text: 'Strict Offline ist eine Grenze auf Anwendungsebene und keine Geräte-Firewall, und laut den Sicherheitshinweisen des Projekts hat der optionale API-Server in der App weder TLS noch eine CORS-Freigabeliste; er gehört daher an Loopback oder in ein vertrauenswürdiges Netz. Das sind Aussagen des Projekts selbst; PromptQuorum hat den Netzwerkverkehr nicht untersucht.' },
],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
  '**Android-Nutzer, die bereits Ollama betreiben** und einen Client für das Telefon mit Dokumentensuche und Protokoll wollen.',
  '**Tüftler, die eine Codebasis unter MIT-Lizenz möchten**, die sie lesen, mit Flutter bauen und anpassen können.',
  '**Neugierige auf Modelle direkt auf dem Gerät**, die nachinstallierte, mit dem Debug-Zertifikat signierte Builds und eine unerprobte Laufzeit in Kauf nehmen.',
],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
  '**Inferenz auf dem Gerät.** Die Versionshinweise sagen, dass die Token-Erzeugung nicht auf einem echten Telefon und das Laden von Modellen nur auf einem Emulator geprüft wurde; Geschwindigkeit, Speicherbedarf und Stabilität sind daher unbekannt.',
  '**Website gegenüber Repository.** Die Website nennt „On-device GGUF“, die README dagegen sagt, GGUF-Dateien ließen sich nicht auf dem Telefon ausführen; die Repository-Beschreibung erwähnt außerdem iOS, obwohl die README nur Android behandelt. Diese Rezension folgt der README.',
  '**Signatur und Herausgeber.** Mit dem Debug-Zertifikat signierte APKs geben keine Herausgeber-Identität an, und ein Entwickler wird nicht genannt.',
  '**Pflege der Laufzeit.** Laut der Datei zu bekannten Einschränkungen ist das Cactus-Flutter-Paket seit Juli 2026 im Upstream archiviert; das Projekt führt dies als Wartungsrisiko auf.',
  '**Datenschutz und Qualität.** Die Aussage zum fehlenden Tracking, das Protokoll und die Backup-Verschlüsselung wurden nicht geprüft, die Antwortqualität ebenfalls nicht.',
],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
  { 'App': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)', 'Plattformen': 'iOS, Android', 'Preis / Lizenz': 'Gratis / MIT', 'Wichtigster Unterschied': 'Führt GGUF-Modelle auf dem Telefon aus und hat Versionen für App Store und Google Play' },
  { 'App': '[Maid](/de/power-local-llm/maid-review)', 'Plattformen': 'Android, iOS', 'Preis / Lizenz': 'Gratis / MIT', 'Wichtigster Unterschied': 'Quelloffene Flutter-App, die auch mit Ollama und OpenAI-kompatiblen APIs arbeitet' },
  { 'App': '[MLC Chat](/de/power-local-llm/mlc-chat-review)', 'Plattformen': 'iOS, Android', 'Preis / Lizenz': 'Gratis / Apache 2.0', 'Wichtigster Unterschied': 'Plattformübergreifende mobile Laufzeit auf Basis von MLC LLM' },
],
        note: 'Das sind die nächstliegenden Rezensionen zu mobilen Chat-Apps auf PromptQuorum; prüfen Sie Preis, Lizenz und Plattformen jeder App auf deren eigener Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
  {
    q: 'Was leistet die Web-Edition?',
    a: 'Sie ist eine Browser-Version auf Basis von Next.js, die ihre Daten in IndexedDB hält und mit einem Ollama- oder OpenAI-kompatiblen Endpunkt unter Ihrer Kontrolle spricht; laut README enthält sie die Android-Laufzeit für das Gerät nicht.',
  },
  {
    q: 'Welche APK sollte ich herunterladen?',
    a: 'Für die meisten Telefone ab 2017 passt arm64-v8a. Die Builds für armeabi-v7a und x86_64 können keine Modelle auf dem Gerät ausführen, weil die Laufzeitbibliothek nur für arm64-v8a verpackt ist.',
  },
  {
    q: 'Funktioniert die App ohne Internet?',
    a: 'Laut Projekt braucht der Chat auf dem Gerät kein Netz, sobald ein Modell installiert ist, und der Strict-Offline-Modus kann den eigenen Datenverkehr der App außerhalb von Loopback blockieren; der erste Modell-Download und die Websuche benötigen eine Verbindung.',
  },
  {
    q: 'Gibt es die App in anderen Sprachen?',
    a: 'Nein. Laut README ist die Oberfläche derzeit nur auf Englisch verfügbar; Übersetzungsdateien für sechs Sprachen existieren, enthalten aber 15 Texte und sind nicht eingebunden.',
  },
],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
  'PocketLLM Lite ist ein aktiv gepflegter Weg unter MIT-Lizenz, einen dokumentierten, lokal ausgerichteten Chat- und Dokumentenarbeitsbereich auf ein Android-Telefon zu bringen, mit klarer Wahl zwischen Modellen auf dem Gerät und Ihrem eigenen Server. Dagegen stehen: kein genannter Entwickler, mit dem Debug-Zertifikat signierte Entwicklungs-Builds, die Abhängigkeit von einem Laufzeitpaket, das das Projekt selbst als archiviert aufführt, und die Angabe der Autoren, die Erzeugung auf dem Gerät sei auf einem echten Telefon nicht geprüft. Die App passt zu technisch versierten Android-Nutzern, die Apps nachinstallieren, das Repository lesen und selbst testen können; wer eine signierte, über einen Store verteilte App mit geprüfter Leistung braucht, sollte warten, bis es sie gibt.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
  '[Website von PocketLLM Lite](https://pocketllm-lite.vercel.app) — Funktionen, Laufzeiten und Download-Überblick, geprüft am 24. Oktober 2026.',
  '[PocketLLM Lite v1.0.40](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40) — APK-Liste, Signaturhinweis und Prüfvermerke, veröffentlicht am 15. Oktober 2026.',
  '[Repository von PocketLLM Lite](https://github.com/PocketLLM/pocketllm-lite) — README, Datei zu bekannten Einschränkungen und Sicherheitshinweise, geprüft am 24. Oktober 2026.',
],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
  '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener Chat-Client für iOS und Android mit Modellen auf dem Gerät.',
  '[Maid-Rezension](/de/power-local-llm/maid-review) — eine quelloffene Flutter-App für lokale und entfernte Modelle.',
  '[Chat-Assistenten im Vergleich](/de/power-local-llm/local-llm-chat-assistants-compared) — der Kategorievergleich, zu dem diese Rezension gehört.',
  '[Verzeichnis lokaler LLM-Software](/de/power-local-llm/local-llm-software-directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
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
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocketllm-lite-review-hero-es.webp',
    title: 'Reseña de PocketLLM Lite: app de chat con IA local para Android',
    seoTitle: 'Reseña de PocketLLM Lite: chat con IA local en Android',
    intro:
      'PocketLLM Lite es una app de chat para Android, gratuita y con licencia MIT, que ejecuta modelos compatibles en el teléfono o se conecta a tu propio servidor Ollama o compatible con OpenAI. No se nombra a ningún desarrollador; el código está en la [organización PocketLLM de GitHub](https://github.com/PocketLLM/pocketllm-lite) y el producto tiene su propio sitio en [pocketllm-lite.vercel.app](https://pocketllm-lite.vercel.app). Esta reseña se basa en ese sitio, la versión v1.0.40 de GitHub y los documentos del repositorio, consultados el 24 de octubre de 2026; PromptQuorum no ha instalado ni probado la app.',
    metaDescription:
      'Reseña de PocketLLM Lite: app Android gratuita (MIT) que ejecuta modelos en el teléfono o usa tu servidor Ollama. Sin probar; fuentes revisadas.',
    twitterDescription:
      'Reseña de PocketLLM Lite: app de chat local para Android, en el dispositivo o con tu propio servidor. Gratis y con licencia MIT; qué confirman las fuentes y qué no.',
    audience:
      'Usuarios de Android y aficionados que quieren una app de chat y documentos local y necesitan saber qué documenta el proyecto, qué admite que no está verificado y cuánto cuesta.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de PocketLLM Lite',
    targetKeywords: [
      'reseña pocketllm lite',
      'pocketllm lite android',
      'app de chat con ia local android',
      'app llm sin conexión android',
      'cliente ollama android',
      'app llm de código abierto android',
      'llm en el dispositivo apk android',
    ],
    current_models_mentioned: ['Whisper'],
    current_hardware_mentioned: ['Android phone', 'arm64-v8a'],
    leadAnswerBlock:
      '**PocketLLM Lite (versión 1.0.40, publicada el 15 de octubre de 2026) es una app de chat para Android, gratuita y de código abierto, que ejecuta modelos en el teléfono o en un servidor que controlas.** La inferencia en el dispositivo carga solo paquetes de modelos en formato Cactus, no archivos GGUF, y el proyecto califica sus APK como compilaciones de ingeniería firmadas con el certificado de depuración.',
    quickAnswerTop: {
      es: {
        question: '¿PocketLLM Lite ejecuta modelos de IA en el propio teléfono?',
        answer:
          'Según el proyecto, sí, pero solo en la APK arm64-v8a y solo con paquetes en formato Cactus; las notas de la versión indican que la generación de tokens en el dispositivo no se ha verificado en un teléfono físico. Las demás compilaciones, y cualquier otra cosa como los archivos GGUF, funcionan mediante un servidor como Ollama.',
        bullets: [
          'El chat guarda historial, ramas, personas e indicaciones de sistema por chat.',
          'Los archivos PDF, TXT, Markdown y CSV se pueden consultar con búsqueda por palabras clave, semántica o híbrida.',
          'El modo Strict Offline bloquea el tráfico de la app fuera de loopback y un registro de auditoría lista los destinos de red.',
          'Una edición web funciona en el navegador con tu propio endpoint de Ollama o compatible con OpenAI.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es PocketLLM Lite?', anchor: 'what-is-pocketllm-lite' },
      { label: 'Dónde conseguirlo', anchor: 'get-it' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Flujo de datos y privacidad', anchor: 'privacy' },
      { label: 'Para quién es', anchor: 'who-should-use' },
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
  { type: 'one-sentence', text: 'PocketLLM Lite es una app de Android con licencia MIT que conversa con modelos que se ejecutan en el teléfono o en tu propio servidor Ollama o compatible con OpenAI.' },
  { type: 'plain-terms', text: 'Instalas una APK desde GitHub, descargas un modelo pequeño en la app o la apuntas a un servidor en casa, y después chateas o haces preguntas sobre tus propios documentos sin cuenta.' },
],
        items: [
  'Mantenimiento: el repositorio recibió su último cambio el 15 de octubre de 2026 y desde agosto han salido varias versiones, así que no se aplica aviso de proyecto abandonado.',
  'Coste: gratis, sin cuenta y, según el README, sin anuncios ni SDK de analítica.',
  'Entornos de ejecución: paquetes Cactus en el dispositivo, un servidor Ollama o cualquier endpoint compatible con OpenAI.',
  'Firma: las APK de la versión están firmadas con el certificado de depuración y los responsables las llaman compilaciones de ingeniería.',
  'Autor: no se nombra a ningún desarrollador; el proyecto lo gestiona una organización de GitHub.',
],
        callouts: [
  { type: 'note', text: 'Esta reseña se basa en el sitio web del proyecto, la versión v1.0.40 de GitHub y los documentos del repositorio, consultados el 24 de octubre de 2026. PromptQuorum no ha instalado ni probado la app, por lo que no se evalúan la velocidad, la calidad de las respuestas ni la estabilidad.' },
],
      },
      overview: {
        id: 'what-is-pocketllm-lite',
        title: '¿Qué es PocketLLM Lite?',
        content: [
  '**PocketLLM Lite es un espacio de trabajo de IA local para Android, creado con Flutter y con una edición web complementaria.** El proyecto lo describe como una app donde los chats, los documentos, las memorias y los modelos quedan bajo el control del usuario; el repositorio de GitHub se creó el 9 de diciembre de 2025.',
  'Separa la app del motor de inferencia y ofrece tres vías: modelos en el dispositivo mediante el entorno Cactus, un servidor Ollama en loopback o en una red local de confianza y cualquier endpoint configurable compatible con OpenAI.',
],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
  '**PocketLLM Lite se distribuye como archivos APK en GitHub Releases, más una edición para el navegador; no se enlaza ninguna ficha de tienda y no hay app para iOS.**',
],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
  { 'Opción': 'Android, la mayoría de teléfonos', 'Cómo conseguirlo': '[APK arm64-v8a](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40), unos 60 MB, incluye el entorno en el dispositivo' },
  { 'Opción': 'Android, antiguos o x86', 'Cómo conseguirlo': '[APK armeabi-v7a y x86_64](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40); solo servidores, OCR y documentos' },
  { 'Opción': 'Edición web', 'Cómo conseguirlo': '[Abrir la app web](https://pocketllm-lite.vercel.app/#/app); requiere tu propio endpoint de Ollama o compatible con OpenAI' },
  { 'Opción': 'Sitio web', 'Cómo conseguirlo': '[pocketllm-lite.vercel.app](https://pocketllm-lite.vercel.app)' },
  { 'Opción': 'Código fuente', 'Cómo conseguirlo': '[Repositorio de GitHub](https://github.com/PocketLLM/pocketllm-lite), licencia MIT' },
],
        note: 'Versión revisada: 1.0.40, publicada el 15 de octubre de 2026 con un archivo SHA256SUMS; se requiere Android 7.0 (API 24) o posterior. Las APK están firmadas con el certificado de depuración, por lo que Android no muestra un editor verificado, y la instalación necesita permiso para orígenes desconocidos. Según el README, un modelo de 1B de parámetros en Q4 ocupa aproximadamente de 0.7 a 1 GB.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
  '**Los pasos siguen la guía de inicio de cinco minutos del propio proyecto; PromptQuorum no los ha ejecutado.**',
],
        numberedItems: [
  {
    title: 'Instala la APK',
    whyItMatters: 'Descarga el archivo arm64-v8a de la página de la versión, compáralo con SHA256SUMS.txt e instálalo.',
  },
  {
    title: 'Completa la configuración inicial',
    whyItMatters: 'Elige tus permisos de red; las comprobaciones de actualizaciones y la búsqueda de modelos en línea son opcionales.',
  },
  {
    title: 'Elige el entorno',
    whyItMatters: 'Descarga un modelo pequeño del catálogo para usarlo en el dispositivo o introduce en los ajustes la URL de un servidor Ollama o compatible con OpenAI.',
  },
  {
    title: 'Chatea o importa documentos',
    whyItMatters: 'Según el README, el modelo seleccionado genera cada respuesta, y la app avisa cuando falta un requisito en lugar de simular una respuesta.',
  },
],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
  '**Cada punto procede del README o de las notas de la versión; ninguno se ha probado de forma independiente.**',
],
        items: [
  '**Espacio de chat.** Chat con respuesta en streaming, historial, ramas, etiquetas, personas, prompts, skills e indicaciones de sistema por chat.',
  '**Documentos y memoria.** Importación de PDF, TXT, Markdown y CSV con referencias a las fuentes; la búsqueda semántica necesita un modelo de embeddings instalado, y las memorias locales se pueden revisar, fijar y desactivar.',
  '**Voz y OCR.** Transcripción con Whisper en el dispositivo tras una instalación de modelo verificada por suma de comprobación, síntesis de voz y OCR de Android para texto latino.',
  '**Herramientas.** Llamadas a herramientas en JSON validadas, como cálculo, notas, recordatorios, portapapeles y búsqueda web controlada por políticas; las que cambian algo piden confirmación.',
  '**Funciones para desarrolladores.** Prompt Lab, comparación de modelos en paralelo, pruebas de rendimiento en el dispositivo y un servidor autenticado compatible con OpenAI dentro de la app, enlazado solo a loopback por defecto.',
],
        note: 'La versión 1.0.40 añadió un flujo para compartir con PocketLLM texto, enlaces y archivos, y corrigió errores de carga de los paquetes del catálogo. La interfaz solo está en inglés.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
  '**El README afirma que los chats, documentos, índices y memorias permanecen en el sandbox de la app, que la inferencia en el dispositivo no envía nada al exterior y que no incluye SDK de anuncios, analítica ni seguimiento.** Según se indica, una prueba de regresión del repositorio hace fallar la compilación si aparecen.',
  'El uso de la red pretende ser explícito: el descubrimiento y la descarga de modelos, las comprobaciones de actualización, la búsqueda web con Tavily y tu propia clave, y los entornos remotos que configures contactan con los destinos mostrados. El modo Strict Offline bloquea el tráfico de la app fuera de loopback, un registro de auditoría lista los destinos y las copias de seguridad usan AES-256-GCM con una clave derivada de una contraseña. Un prompt enviado a un servidor Ollama o compatible con OpenAI sale del teléfono hacia ese servidor.',
],
        callouts: [
  { type: 'note', text: 'Strict Offline es un límite a nivel de aplicación, no un cortafuegos del dispositivo, y las notas de seguridad del proyecto indican que el servidor de API opcional de la app no tiene TLS ni lista de permitidos CORS, por lo que debe limitarse a loopback o a una red de confianza. Son declaraciones del propio proyecto; PromptQuorum no ha inspeccionado el tráfico de red.' },
],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
  '**Usuarios de Android que ya usan Ollama** y quieren un cliente para el teléfono con búsqueda en documentos y registro de auditoría.',
  '**Aficionados que quieren una base de código con licencia MIT** que puedan leer, compilar con Flutter y adaptar.',
  '**Curiosos de los modelos en el dispositivo** que aceptan compilaciones instaladas manualmente y firmadas con el certificado de depuración, y un entorno sin contrastar.',
],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
  '**Inferencia en el dispositivo.** Las notas de la versión indican que la generación de tokens no se verificó en un teléfono físico y la carga de modelos solo en un emulador, así que se desconocen la velocidad, el ajuste de memoria y la estabilidad.',
  '**Sitio frente a repositorio.** El sitio web indica «On-device GGUF», mientras que el README dice que los archivos GGUF no se pueden ejecutar en el teléfono; además, la descripción del repositorio menciona iOS aunque el README solo trata Android. Esta reseña sigue el README.',
  '**Firma y editor.** Las APK firmadas con el certificado de depuración no dan una identidad de editor, y no se nombra a ningún desarrollador.',
  '**Mantenimiento del entorno.** El archivo de limitaciones conocidas dice que el paquete Cactus para Flutter está archivado en origen desde julio de 2026 y lo enumera como riesgo de mantenimiento.',
  '**Privacidad y calidad.** No se inspeccionaron la afirmación de que no hay seguimiento, el registro de auditoría ni el cifrado de las copias, y tampoco se evaluó la calidad de las respuestas.',
],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
  { 'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)', 'Plataformas': 'iOS, Android', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Ejecuta modelos GGUF en el teléfono y tiene versiones en App Store y Google Play' },
  { 'App': '[Maid](/es/power-local-llm/maid-review)', 'Plataformas': 'Android, iOS', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'App de código abierto en Flutter que también funciona con Ollama y APIs compatibles con OpenAI' },
  { 'App': '[MLC Chat](/es/power-local-llm/mlc-chat-review)', 'Plataformas': 'iOS, Android', 'Precio / licencia': 'Gratis / Apache 2.0', 'Diferencia clave': 'Entorno móvil multiplataforma basado en MLC LLM' },
],
        note: 'Son las reseñas de chat móvil más cercanas en PromptQuorum; confirma el precio, la licencia y las plataformas actuales de cada app en su propia página.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
  {
    q: '¿Qué hace la edición web?',
    a: 'Es una versión de navegador basada en Next.js que guarda sus datos en IndexedDB y se comunica con un endpoint de Ollama o compatible con OpenAI que tú controlas; según el README, no incluye el entorno de Android para el dispositivo.',
  },
  {
    q: '¿Qué APK debo descargar?',
    a: 'Usa arm64-v8a en la mayoría de los teléfonos desde 2017. Las compilaciones armeabi-v7a y x86_64 no pueden ejecutar modelos en el dispositivo porque la biblioteca del entorno solo se empaqueta para arm64-v8a.',
  },
  {
    q: '¿Funciona sin internet?',
    a: 'Según el proyecto, el chat en el dispositivo no necesita red una vez instalado un modelo, y el modo Strict Offline puede bloquear el tráfico propio de la app fuera de loopback; la primera descarga de un modelo y la búsqueda web sí necesitan conexión.',
  },
  {
    q: '¿Está disponible en otros idiomas?',
    a: 'No. El README indica que la interfaz solo está en inglés por ahora; existen archivos de traducción para seis idiomas, pero contienen 15 textos y no están conectados.',
  },
],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
  'PocketLLM Lite es una forma activa y con licencia MIT de llevar a un teléfono Android un espacio de chat y documentos local bien documentado, con una elección clara entre modelos en el dispositivo y tu propio servidor. En contra: no se nombra a ningún desarrollador, distribuye compilaciones de ingeniería firmadas con el certificado de depuración, depende de un paquete de entorno que el propio proyecto lista como archivado, y sus autores dicen que la generación en el dispositivo no se ha verificado en un teléfono real. Encaja con usuarios técnicos de Android que pueden instalar manualmente, leer el repositorio y probar la app por su cuenta; quien necesite una app firmada, distribuida en una tienda y con rendimiento verificado debería esperar a que existan.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
  '[Sitio web de PocketLLM Lite](https://pocketllm-lite.vercel.app) — funciones, entornos de ejecución y resumen de descargas, consultado el 24 de octubre de 2026.',
  '[PocketLLM Lite v1.0.40](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40) — lista de APK, aviso de firma y notas de verificación, publicada el 15 de octubre de 2026.',
  '[Repositorio de PocketLLM Lite](https://github.com/PocketLLM/pocketllm-lite) — README, archivo de limitaciones conocidas y notas de seguridad, consultados el 24 de octubre de 2026.',
],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
  '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat gratuito y de código abierto con modelos en el dispositivo para iOS y Android.',
  '[Reseña de Maid](/es/power-local-llm/maid-review) — una app de código abierto en Flutter para modelos locales y remotos.',
  '[Asistentes de chat comparados](/es/power-local-llm/local-llm-chat-assistants-compared) — la comparativa de categoría a la que pertenece esta reseña.',
  '[Directorio de software de LLM locales](/es/power-local-llm/local-llm-software-directory) — el catálogo completo de herramientas de IA local.',
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
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocketllm-lite-review-hero-fr.webp',
    title: 'Test de PocketLLM Lite : appli de chat IA locale pour Android',
    seoTitle: 'Test de PocketLLM Lite : chat IA locale sur Android',
    intro:
      'PocketLLM Lite est une appli de chat pour Android, gratuite et sous licence MIT, qui exécute des modèles compatibles sur le téléphone ou se connecte à votre propre serveur Ollama ou compatible OpenAI. Aucun développeur n’est nommé ; le code se trouve dans l’[organisation GitHub PocketLLM](https://github.com/PocketLLM/pocketllm-lite) et le produit dispose de son propre site sur [pocketllm-lite.vercel.app](https://pocketllm-lite.vercel.app). Ce test s’appuie sur ce site, la version v1.0.40 sur GitHub et les documents du dépôt, consultés le 24 octobre 2026 ; PromptQuorum n’a ni installé ni testé l’appli.',
    metaDescription:
      'Test de PocketLLM Lite : appli Android gratuite (MIT) exécutant des modèles sur le téléphone ou via votre serveur Ollama. Non testée ; sources vérifiées.',
    twitterDescription:
      'Test de PocketLLM Lite : appli de chat locale pour Android, sur l’appareil ou via votre serveur. Gratuite, licence MIT ; ce que les sources confirment ou non.',
    audience:
      'Utilisateurs Android et bricoleurs qui cherchent une appli de chat et de documents locale et veulent savoir ce que le projet documente, ce qu’il admet ne pas avoir vérifié et ce qu’il coûte.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test PocketLLM Lite',
    targetKeywords: [
      'test pocketllm lite',
      'pocketllm lite android',
      'appli chat ia locale android',
      'appli llm hors ligne android',
      'client ollama android',
      'appli llm open source android',
      'llm sur l’appareil apk android',
    ],
    current_models_mentioned: ['Whisper'],
    current_hardware_mentioned: ['Android phone', 'arm64-v8a'],
    leadAnswerBlock:
      '**PocketLLM Lite (version 1.0.40, publiée le 15 octobre 2026) est une appli de chat Android gratuite et open source qui exécute des modèles sur le téléphone ou sur un serveur que vous contrôlez.** L’inférence sur l’appareil ne charge que des paquets de modèles au format Cactus, pas de fichiers GGUF, et le projet qualifie ses APK de versions d’ingénierie signées avec le certificat de débogage.',
    quickAnswerTop: {
      fr: {
        question: 'PocketLLM Lite exécute-t-elle des modèles d’IA sur le téléphone lui-même ?',
        answer:
          'Selon le projet, oui, mais uniquement dans l’APK arm64-v8a et uniquement avec des paquets au format Cactus ; les notes de version précisent que la génération de jetons sur l’appareil n’a pas été vérifiée sur un téléphone physique. Les autres versions, et tout le reste comme les fichiers GGUF, passent par un serveur tel qu’Ollama.',
        bullets: [
          'Le chat conserve l’historique, les branches, les personas et des prompts système par conversation.',
          'Les fichiers PDF, TXT, Markdown et CSV peuvent être interrogés par recherche par mots-clés, sémantique ou hybride.',
          'Le mode Strict Offline bloque le trafic de l’appli hors loopback, et un journal d’audit liste les destinations réseau.',
          'Une édition web fonctionne dans le navigateur avec votre propre point d’accès Ollama ou compatible OpenAI.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce que PocketLLM Lite ?', anchor: 'what-is-pocketllm-lite' },
      { label: 'Où l’obtenir', anchor: 'get-it' },
      { label: 'Premiers pas', anchor: 'getting-started' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Flux de données et confidentialité', anchor: 'privacy' },
      { label: 'À qui elle s’adresse', anchor: 'who-should-use' },
      { label: 'Ce que nous n’avons pas pu vérifier', anchor: 'who-should-not-use' },
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
  { type: 'one-sentence', text: 'PocketLLM Lite est une appli Android sous licence MIT qui dialogue avec des modèles exécutés sur le téléphone ou sur votre propre serveur Ollama ou compatible OpenAI.' },
  { type: 'plain-terms', text: 'Vous installez un APK depuis GitHub, téléchargez un petit modèle dans l’appli ou la dirigez vers un serveur chez vous, puis vous discutez ou posez des questions sur vos propres documents, sans compte.' },
],
        items: [
  'Maintenance : le dépôt a reçu son dernier envoi le 15 octobre 2026 et plusieurs versions ont paru depuis août, donc aucun avertissement de projet abandonné ne s’applique.',
  'Coût : gratuit, sans compte et, selon le README, sans publicité ni SDK d’analyse.',
  'Moteurs d’exécution : paquets Cactus sur l’appareil, serveur Ollama ou tout point d’accès compatible OpenAI.',
  'Signature : les APK de la version sont signés avec le certificat de débogage, et les mainteneurs les appellent des versions d’ingénierie.',
  'Éditeur : aucun développeur nommé ; le projet est géré par une organisation GitHub.',
],
        callouts: [
  { type: 'note', text: 'Ce test s’appuie sur le site du projet, la version v1.0.40 sur GitHub et les documents du dépôt, consultés le 24 octobre 2026. PromptQuorum n’a ni installé ni testé l’appli : la vitesse, la qualité des réponses et la stabilité ne sont donc pas évaluées.' },
],
      },
      overview: {
        id: 'what-is-pocketllm-lite',
        title: 'Qu’est-ce que PocketLLM Lite ?',
        content: [
  '**PocketLLM Lite est un espace de travail IA local pour Android, développé avec Flutter et complété par une édition web.** Le projet le décrit comme une appli où les conversations, documents, mémoires et modèles restent sous le contrôle de l’utilisateur ; le dépôt GitHub a été créé le 9 décembre 2025.',
  'Elle sépare l’appli du moteur d’inférence et propose trois voies : des modèles sur l’appareil via l’environnement Cactus, un serveur Ollama en loopback ou sur un réseau local de confiance, et tout point d’accès configurable compatible OpenAI.',
],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
  '**PocketLLM Lite est distribuée sous forme de fichiers APK sur GitHub Releases, plus une édition pour navigateur ; aucune fiche de boutique n’est liée et il n’existe pas d’appli iOS.**',
],
        columns: ['Option', 'Comment l’obtenir'],
        rows: [
  { 'Option': 'Android, la plupart des téléphones', 'Comment l’obtenir': '[APK arm64-v8a](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40), environ 60 Mo, avec l’environnement sur l’appareil' },
  { 'Option': 'Android, anciens ou x86', 'Comment l’obtenir': '[APK armeabi-v7a et x86_64](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40) ; serveurs, OCR et documents uniquement' },
  { 'Option': 'Édition web', 'Comment l’obtenir': '[Ouvrir l’appli web](https://pocketllm-lite.vercel.app/#/app) ; nécessite votre propre point d’accès Ollama ou compatible OpenAI' },
  { 'Option': 'Site web', 'Comment l’obtenir': '[pocketllm-lite.vercel.app](https://pocketllm-lite.vercel.app)' },
  { 'Option': 'Code source', 'Comment l’obtenir': '[Dépôt GitHub](https://github.com/PocketLLM/pocketllm-lite), licence MIT' },
],
        note: 'Version testée : 1.0.40, publiée le 15 octobre 2026 avec un fichier SHA256SUMS ; Android 7.0 (API 24) ou plus récent est requis. Les APK sont signés avec le certificat de débogage, Android n’affiche donc aucun éditeur vérifié, et l’installation exige l’autorisation des sources inconnues. Selon le README, un modèle de 1 Md de paramètres en Q4 occupe environ 0.7 à 1 Go.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
  '**Les étapes suivent le démarrage rapide de cinq minutes du projet ; PromptQuorum ne les a pas exécutées.**',
],
        numberedItems: [
  {
    title: 'Installer l’APK',
    whyItMatters: 'Téléchargez le fichier arm64-v8a depuis la page de la version, comparez-le à SHA256SUMS.txt puis installez-le.',
  },
  {
    title: 'Terminer la configuration initiale',
    whyItMatters: 'Choisissez vos autorisations réseau ; les vérifications de mises à jour et la recherche de modèles en ligne sont facultatives.',
  },
  {
    title: 'Choisir un moteur',
    whyItMatters: 'Téléchargez un petit modèle du catalogue pour un usage sur l’appareil, ou saisissez dans les réglages l’URL d’un serveur Ollama ou compatible OpenAI.',
  },
  {
    title: 'Discuter ou importer des documents',
    whyItMatters: 'Selon le README, le modèle sélectionné produit chaque réponse, et l’appli l’indique quand un prérequis manque au lieu de simuler une réponse.',
  },
],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
  '**Chaque point provient du README ou des notes de version ; aucun n’a été testé de façon indépendante.**',
],
        items: [
  '**Espace de chat.** Chat en continu avec historique, branches, étiquettes, personas, prompts, skills et prompts système par conversation.',
  '**Documents et mémoire.** Import de PDF, TXT, Markdown et CSV avec renvois aux sources ; la recherche sémantique nécessite un modèle d’embeddings installé, et les mémoires locales peuvent être consultées, épinglées et désactivées.',
  '**Voix et OCR.** Transcription Whisper sur l’appareil après une installation de modèle vérifiée par somme de contrôle, synthèse vocale et OCR Android pour l’écriture latine.',
  '**Outils.** Appels d’outils JSON validés comme le calcul, les notes, les rappels, le presse-papiers et la recherche web encadrée par des règles ; les actions qui modifient quelque chose demandent confirmation.',
  '**Fonctions pour développeurs.** Prompt Lab, comparaison de modèles côte à côte, tests de performance sur l’appareil et serveur authentifié compatible OpenAI intégré, lié à loopback par défaut.',
],
        note: 'La version 1.0.40 a ajouté un partage vers PocketLLM pour le texte, les liens et les fichiers, et corrigé des erreurs de chargement des paquets du catalogue. L’interface n’existe qu’en anglais.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
  '**Le README indique que les conversations, documents, index et mémoires restent dans le bac à sable de l’appli, que l’inférence sur l’appareil n’envoie rien à l’extérieur et qu’aucun SDK publicitaire, d’analyse ou de suivi n’est inclus.** Un test de non-régression du dépôt ferait échouer la compilation si de tels SDK apparaissaient.',
  'L’usage du réseau se veut explicite : la recherche et le téléchargement de modèles, les vérifications de mises à jour, la recherche web via Tavily avec votre propre clé et les moteurs distants que vous configurez contactent les destinations affichées. Le mode Strict Offline bloque le trafic de l’appli hors loopback, un journal d’audit liste les destinations et les sauvegardes utilisent AES-256-GCM avec une clé dérivée d’un mot de passe. Un prompt envoyé à un serveur Ollama ou compatible OpenAI quitte le téléphone vers ce serveur.',
],
        callouts: [
  { type: 'note', text: 'Strict Offline est une limite au niveau de l’application, pas un pare-feu de l’appareil, et les notes de sécurité du projet indiquent que le serveur d’API facultatif intégré n’a ni TLS ni liste d’autorisation CORS ; il doit rester sur loopback ou sur un réseau de confiance. Ce sont les déclarations du projet lui-même ; PromptQuorum n’a pas inspecté le trafic réseau.' },
],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle s’adresse',
        items: [
  '**Aux utilisateurs Android qui font déjà tourner Ollama** et veulent un client pour le téléphone avec recherche dans les documents et journal d’audit.',
  '**Aux bricoleurs qui veulent une base de code sous licence MIT** qu’ils peuvent lire, compiler avec Flutter et adapter.',
  '**Aux curieux des modèles sur l’appareil** qui acceptent des versions installées hors boutique, signées avec le certificat de débogage, et un moteur non éprouvé.',
],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
  '**Inférence sur l’appareil.** Les notes de version indiquent que la génération de jetons n’a pas été vérifiée sur un téléphone physique et le chargement de modèles seulement sur un émulateur ; vitesse, tenue en mémoire et stabilité sont donc inconnues.',
  '**Site contre dépôt.** Le site mentionne « On-device GGUF », alors que le README dit que les fichiers GGUF ne peuvent pas s’exécuter sur le téléphone ; la description du dépôt évoque aussi iOS alors que le README ne traite qu’Android. Ce test suit le README.',
  '**Signature et éditeur.** Les APK signés avec le certificat de débogage n’indiquent aucune identité d’éditeur, et aucun développeur n’est nommé.',
  '**Entretien du moteur.** Le fichier des limites connues indique que le paquet Cactus pour Flutter est archivé en amont depuis juillet 2026 et le classe parmi les risques de maintenance.',
  '**Confidentialité et qualité.** L’affirmation d’absence de suivi, le journal d’audit et le chiffrement des sauvegardes n’ont pas été inspectés, et la qualité des réponses n’a pas été évaluée.',
],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
  { 'Application': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)', 'Plateformes': 'iOS, Android', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Exécute des modèles GGUF sur le téléphone, avec des versions App Store et Google Play' },
  { 'Application': '[Maid](/fr/power-local-llm/maid-review)', 'Plateformes': 'Android, iOS', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Appli Flutter open source qui fonctionne aussi avec Ollama et les API compatibles OpenAI' },
  { 'Application': '[MLC Chat](/fr/power-local-llm/mlc-chat-review)', 'Plateformes': 'iOS, Android', 'Prix / licence': 'Gratuit / Apache 2.0', 'Différence clé': 'Environnement mobile multiplateforme fondé sur MLC LLM' },
],
        note: 'Ce sont les tests d’applis de chat mobiles les plus proches sur PromptQuorum ; vérifiez le prix, la licence et les plateformes actuels de chaque appli sur sa propre page.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
  {
    q: 'Que fait l’édition web ?',
    a: 'C’est une version pour navigateur basée sur Next.js, qui garde ses données dans IndexedDB et dialogue avec un point d’accès Ollama ou compatible OpenAI que vous contrôlez ; selon le README, elle n’inclut pas l’environnement Android sur l’appareil.',
  },
  {
    q: 'Quel APK télécharger ?',
    a: 'Prenez arm64-v8a pour la plupart des téléphones depuis 2017. Les versions armeabi-v7a et x86_64 ne peuvent pas exécuter de modèles sur l’appareil, car la bibliothèque du moteur n’est empaquetée que pour arm64-v8a.',
  },
  {
    q: 'Fonctionne-t-elle sans internet ?',
    a: 'Selon le projet, le chat sur l’appareil n’a pas besoin de réseau une fois un modèle installé, et le mode Strict Offline peut bloquer le trafic propre de l’appli hors loopback ; le premier téléchargement de modèle et la recherche web exigent une connexion.',
  },
  {
    q: 'L’appli existe-t-elle dans d’autres langues ?',
    a: 'Non. Le README indique que l’interface n’est disponible qu’en anglais pour l’instant ; des fichiers de traduction pour six langues existent, mais ils contiennent 15 textes et ne sont pas branchés.',
  },
],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
  'PocketLLM Lite est une façon active et sous licence MIT d’installer sur un téléphone Android un espace de chat et de documents local bien documenté, avec un choix clair entre modèles sur l’appareil et votre propre serveur. En face : aucun développeur nommé, des versions d’ingénierie signées avec le certificat de débogage, la dépendance à un paquet que le projet lui-même classe comme archivé, et des auteurs qui disent que la génération sur l’appareil n’a pas été vérifiée sur un vrai téléphone. Elle convient aux utilisateurs Android techniques qui savent installer hors boutique, lire le dépôt et tester l’appli eux-mêmes ; qui a besoin d’une appli signée, distribuée par une boutique et aux performances vérifiées devrait attendre qu’elle existe.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
  '[Site de PocketLLM Lite](https://pocketllm-lite.vercel.app) — fonctions, moteurs d’exécution et aperçu des téléchargements, consulté le 24 octobre 2026.',
  '[PocketLLM Lite v1.0.40](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40) — liste des APK, avis de signature et notes de vérification, publiée le 15 octobre 2026.',
  '[Dépôt de PocketLLM Lite](https://github.com/PocketLLM/pocketllm-lite) — README, fichier des limites connues et notes de sécurité, consultés le 24 octobre 2026.',
],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
  '[Test de PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat gratuit et open source avec modèles sur l’appareil pour iOS et Android.',
  '[Test de Maid](/fr/power-local-llm/maid-review) — une appli Flutter open source pour modèles locaux et distants.',
  '[Assistants de chat comparés](/fr/power-local-llm/local-llm-chat-assistants-compared) — la comparaison de catégorie à laquelle appartient ce test.',
  '[Répertoire des logiciels LLM locaux](/fr/power-local-llm/local-llm-software-directory) — le catalogue complet des outils d’IA locale.',
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
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocketllm-lite-review-hero-ja.webp',
    title: 'PocketLLM Liteレビュー：Android向けローカルAIチャットアプリ',
    seoTitle: 'PocketLLM Liteレビュー：AndroidのローカルAIチャット',
    intro:
      'PocketLLM Liteは、対応モデルを端末上で実行するか、自分のOllamaまたはOpenAI互換サーバーに接続する、無料でMITライセンスのAndroid用チャットアプリです。開発者名は公表されておらず、コードは[GitHub組織PocketLLM](https://github.com/PocketLLM/pocketllm-lite)にあり、製品専用サイトは[pocketllm-lite.vercel.app](https://pocketllm-lite.vercel.app)です。このレビューは、そのサイト、GitHubのリリースv1.0.40、リポジトリの文書に基づき、2026年10月24日に確認しました。PromptQuorumはアプリをインストールもテストもしていません。',
    metaDescription:
      'PocketLLM Liteレビュー：Cactus形式モデルを端末上で実行、または自分のOllamaサーバーを使えるMITライセンスの無料Androidアプリ。未テストで出典を確認済み。',
    twitterDescription:
      'PocketLLM Liteレビュー：端末上でも自分のサーバーでも使えるAndroid用ローカルチャットアプリ。無料でMIT。出典で確認できた点とできなかった点。',
    audience:
      'ローカル志向のチャット・文書アプリを探すAndroidユーザーや技術愛好家向けに、プロジェクトが文書化していること、未検証と認めていること、費用を整理します。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'PocketLLM Liteレビュー',
    targetKeywords: [
      'pocketllm lite レビュー',
      'pocketllm lite android',
      'ローカル ai チャット android',
      'オフライン llm アプリ android',
      'android ollama クライアント',
      'オープンソース llm アプリ android',
      'オンデバイス llm apk',
    ],
    current_models_mentioned: ['Whisper'],
    current_hardware_mentioned: ['Android phone', 'arm64-v8a'],
    leadAnswerBlock:
      '**PocketLLM Lite（バージョン1.0.40、2026年10月15日公開）は、モデルを端末上または自分で管理するサーバーで動かす、無料のオープンソースAndroidチャットアプリです。** 端末上の推論が読み込むのはCactus形式のモデルのみでGGUFファイルは不可、APKはデバッグ署名のエンジニアリングビルドとプロジェクト自身が説明しています。',
    quickAnswerTop: {
      ja: {
        question: 'PocketLLM Liteは端末上でAIモデルを実行できますか。',
        answer:
          'プロジェクトによれば可能ですが、arm64-v8aのAPKで、Cactus形式のモデルに限られます。リリースノートには、端末上のトークン生成は実機で検証されていないとあります。ほかのビルドやGGUFファイルなどは、Ollamaなどのサーバー経由で使います。',
        bullets: [
          'チャットは履歴、分岐、ペルソナ、チャットごとのシステムプロンプトに対応。',
          'PDF、TXT、Markdown、CSVをキーワード・セマンティック・ハイブリッドで検索可能。',
          'Strict Offlineモードはアプリのループバック以外の通信を遮断し、監査ログが通信先を一覧表示。',
          'ブラウザ版は自分のOllamaまたはOpenAI互換エンドポイントに接続して動作。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'PocketLLM Liteとは', anchor: 'what-is-pocketllm-lite' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '始め方', anchor: 'getting-started' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: 'データの流れとプライバシー', anchor: 'privacy' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかった点', anchor: 'who-should-not-use' },
      { label: '競合と代替ツール', anchor: 'vs-alternatives' },
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
  { type: 'one-sentence', text: 'PocketLLM Liteは、端末上または自分のOllama・OpenAI互換サーバー上のモデルとチャットする、MITライセンスのAndroidアプリです。' },
  { type: 'plain-terms', text: 'GitHubからAPKを入れ、小さなモデルをアプリに取り込むか自宅のサーバーを指定すれば、アカウントなしでチャットや自分の文書への質問ができます。' },
],
        items: [
  '保守：リポジトリの最終更新は2026年10月15日で、8月以降に複数回リリースされているため、放置プロジェクトの警告は付きません。',
  '費用：無料でアカウント不要。READMEによれば広告や分析SDKもありません。',
  '実行環境：端末上のCactusモデル、Ollamaサーバー、OpenAI互換エンドポイントのいずれか。',
  '署名：リリースAPKはデバッグ署名で、開発側もエンジニアリングビルドと呼んでいます。',
  '開発元：開発者名は非公開で、GitHub組織が運営しています。',
],
        callouts: [
  { type: 'note', text: 'このレビューは、プロジェクトのサイト、GitHubのリリースv1.0.40、リポジトリの文書に基づき、2026年10月24日に確認しました。PromptQuorumはインストールもテストもしていないため、速度、回答品質、安定性は評価していません。' },
],
      },
      overview: {
        id: 'what-is-pocketllm-lite',
        title: 'PocketLLM Liteとは',
        content: [
  '**PocketLLM Liteは、Flutterで作られたAndroid向けのローカル志向AIワークスペースで、Web版も用意されています。** プロジェクトは、チャット、文書、メモリ、モデルを利用者の管理下に置くアプリと説明しています。GitHubリポジトリは2025年12月9日に作成されました。',
  'アプリと推論バックエンドを分け、Cactusランタイムによる端末上のモデル、ループバックまたは信頼できるローカルネットワーク上のOllamaサーバー、設定可能なOpenAI互換エンドポイントの3つの経路を用意しています。',
],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
  '**PocketLLM LiteはGitHub ReleasesのAPKファイルとブラウザ版で配布されています。ストアの掲載ページへのリンクはなく、iOSアプリもありません。**',
],
        columns: ['項目', '入手方法'],
        rows: [
  { '項目': 'Android（多くの端末）', '入手方法': '[arm64-v8a APK](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40)。約60 MBで端末上のランタイムを含む' },
  { '項目': 'Android（旧型・x86）', '入手方法': '[armeabi-v7aとx86_64のAPK](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40)。サーバー、OCR、文書のみ' },
  { '項目': 'Web版', '入手方法': '[Webアプリを開く](https://pocketllm-lite.vercel.app/#/app)。自分のOllamaまたはOpenAI互換エンドポイントが必要' },
  { '項目': '公式サイト', '入手方法': '[pocketllm-lite.vercel.app](https://pocketllm-lite.vercel.app)' },
  { '項目': 'ソースコード', '入手方法': '[GitHubリポジトリ](https://github.com/PocketLLM/pocketllm-lite)、MITライセンス' },
],
        note: '確認したバージョンは1.0.40で、2026年10月15日にSHA256SUMSファイル付きで公開されました。Android 7.0（API 24）以降が必要です。APKはデバッグ署名のため、Androidには検証済みの発行元が表示されず、インストールには提供元不明アプリの許可が必要です。READMEによれば、1BパラメータのモデルはQ4でおよそ0.7〜1 GBです。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
  '**手順はプロジェクト自身の5分クイックスタートに沿っています。PromptQuorumは実行していません。**',
],
        numberedItems: [
  {
    title: 'APKをインストールする',
    whyItMatters: 'リリースページからarm64-v8aのファイルをダウンロードし、SHA256SUMS.txtと照合してインストールします。',
  },
  {
    title: '初期設定を終える',
    whyItMatters: 'ネットワークの許可を選びます。更新確認とオンラインのモデル検索は任意です。',
  },
  {
    title: '実行環境を選ぶ',
    whyItMatters: '端末上で使う小さなカタログモデルをダウンロードするか、設定にOllamaまたはOpenAI互換サーバーのURLを入力します。',
  },
  {
    title: 'チャットまたは文書の取り込み',
    whyItMatters: 'READMEによれば、すべての回答は選択したモデルが生成し、前提が足りない場合は偽の返答をせずアプリがその旨を伝えます。',
  },
],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
  '**以下はすべてREADMEまたはリリースノートの記載で、独自には検証していません。**',
],
        items: [
  '**チャット環境。** ストリーミング表示、履歴、分岐、タグ、ペルソナ、プロンプト、スキル、チャットごとのシステムプロンプト。',
  '**文書とメモリ。** PDF、TXT、Markdown、CSVを出典付きで取り込み。セマンティック検索には埋め込みモデルのインストールが必要で、ローカルメモリは確認・固定・無効化できます。',
  '**音声とOCR。** チェックサム検証済みモデルの導入後に端末上でWhisper文字起こし、音声読み上げ、ラテン文字向けのAndroid OCR。',
  '**ツール。** 計算、メモ、リマインダー、クリップボード、ポリシー制御付きWeb検索などの検証済みJSONツール呼び出し。状態を変える操作は事前に確認します。',
  '**開発者向け機能。** Prompt Lab、モデルの並べて比較、端末上のベンチマーク、アプリ内の認証付きOpenAI互換サーバー（既定はループバックのみ）。',
],
        note: 'バージョン1.0.40では、テキスト・リンク・ファイルをPocketLLMへ共有する機能を追加し、カタログモデルの読み込みエラーを修正しました。画面は英語のみです。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
  '**READMEによれば、チャット、文書、インデックス、メモリはアプリのサンドボックス内にあり、端末上の推論は外部に何も送らず、広告・分析・トラッキングのSDKは含まれません。** そうしたSDKが追加されるとビルドが失敗する回帰テストがリポジトリにあるとされています。',
  '通信は明示的に行う設計です。モデルの検索とダウンロード、更新確認、自分のキーによるTavily経由のWeb検索、設定したリモート環境は、表示された宛先に接続します。Strict Offlineモードはアプリのループバック以外の通信を遮断し、監査ログが宛先を一覧表示し、バックアップはパスワード由来の鍵でAES-256-GCMにより暗号化されます。OllamaやOpenAI互換サーバーに送ったプロンプトは、そのサーバーに向けて端末の外へ出ます。',
],
        callouts: [
  { type: 'note', text: 'Strict Offlineはアプリ単位の境界で、端末のファイアウォールではありません。プロジェクトのセキュリティ文書によれば、任意のアプリ内APIサーバーにはTLSもCORS許可リストもないため、ループバックか信頼できるネットワークに限るべきです。これらはプロジェクト自身の記述で、PromptQuorumは通信を検査していません。' },
],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
  '**すでにOllamaを使っているAndroidユーザー**で、文書検索と監査ログ付きのスマートフォン用クライアントがほしい人。',
  '**MITライセンスのコードベースがほしい技術愛好家**で、読んで、Flutterでビルドし、改造したい人。',
  '**端末上のモデルに関心がある人**で、サイドロードのデバッグ署名ビルドと未検証のランタイムを受け入れられる人。',
],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
  '**端末上の推論。** リリースノートには、トークン生成は実機で、モデル読み込みはエミュレーターでのみ検証したとあり、速度、メモリ適合、安定性は不明です。',
  '**サイトとリポジトリの食い違い。** サイトは「On-device GGUF」としていますが、READMEはGGUFファイルを端末上で実行できないとしています。リポジトリの説明文はiOSにも触れますが、READMEはAndroidのみです。このレビューはREADMEに従います。',
  '**署名と発行元。** デバッグ署名のAPKは発行元の身元を示さず、開発者名も公表されていません。',
  '**ランタイムの保守。** 既知の制限の文書によれば、Cactus用Flutterパッケージは2026年7月時点で上流でアーカイブ済みで、保守リスクとして挙げられています。',
  '**プライバシーと品質。** 追跡なしという主張、監査ログ、バックアップの暗号化は検査しておらず、回答品質も評価していません。',
],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
  { 'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)', '対応プラットフォーム': 'iOS、Android', '価格／ライセンス': '無料／MIT', '主な違い': 'GGUFモデルを端末上で実行し、App StoreとGoogle Play版がある' },
  { 'アプリ': '[Maid](/ja/power-local-llm/maid-review)', '対応プラットフォーム': 'Android、iOS', '価格／ライセンス': '無料／MIT', '主な違い': 'オープンソースのFlutterアプリで、OllamaやOpenAI互換APIにも対応' },
  { 'アプリ': '[MLC Chat](/ja/power-local-llm/mlc-chat-review)', '対応プラットフォーム': 'iOS、Android', '価格／ライセンス': '無料／Apache 2.0', '主な違い': 'MLC LLMをベースにしたクロスプラットフォームのモバイルランタイム' },
],
        note: 'PromptQuorumで最も近いモバイルチャットアプリのレビューです。価格、ライセンス、対応プラットフォームは各アプリのページで最新の情報を確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
  {
    q: 'Web版では何ができますか。',
    a: 'Next.jsによるブラウザ版で、データはIndexedDBに保存され、自分で管理するOllamaまたはOpenAI互換エンドポイントと通信します。READMEによれば、Androidの端末上ランタイムは含まれません。',
  },
  {
    q: 'どのAPKをダウンロードすべきですか。',
    a: '2017年以降の多くの端末にはarm64-v8aを使います。armeabi-v7aとx86_64のビルドは、ランタイムのライブラリがarm64-v8aにしか含まれないため、端末上のモデルを実行できません。',
  },
  {
    q: 'インターネットなしで使えますか。',
    a: 'プロジェクトによれば、モデルを導入した後の端末上チャットにネットワークは不要で、Strict Offlineモードでアプリ自身のループバック以外の通信を遮断できます。最初のモデルのダウンロードとWeb検索には接続が必要です。',
  },
  {
    q: 'ほかの言語に対応していますか。',
    a: 'いいえ。READMEによれば、画面は今のところ英語のみです。6言語分の翻訳ファイルはありますが15文字列しかなく、組み込まれていません。',
  },
],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
  'PocketLLM Liteは、文書化されたローカル志向のチャット・文書ワークスペースをAndroid端末に導入できる、活発に更新されるMITライセンスの選択肢で、端末上のモデルと自分のサーバーのどちらを使うかを明確に選べます。一方で、開発者名がなく、デバッグ署名のエンジニアリングビルドで配布され、プロジェクト自身がアーカイブ済みと記す上流のランタイムパッケージに依存し、端末上の生成が実機で検証されていないと開発側が述べています。サイドロードができ、リポジトリを読み、自分でテストできる技術志向のAndroidユーザー向けです。署名済みでストア配布され、性能が検証されたアプリが必要な人は、それが登場するのを待つのが適切です。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
  '[PocketLLM Liteのサイト](https://pocketllm-lite.vercel.app) — 機能、実行環境、ダウンロードの概要。2026年10月24日確認。',
  '[PocketLLM Lite v1.0.40](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40) — APK一覧、署名に関する注意、検証メモ。2026年10月15日公開。',
  '[PocketLLM Liteのリポジトリ](https://github.com/PocketLLM/pocketllm-lite) — README、既知の制限の文書、セキュリティ文書。2026年10月24日確認。',
],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
  '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOSとAndroid向けの無料のオープンソース端末上チャットクライアント。',
  '[Maidレビュー](/ja/power-local-llm/maid-review) — ローカルとリモートのモデルに対応するオープンソースのFlutterアプリ。',
  '[チャットアシスタント比較](/ja/power-local-llm/local-llm-chat-assistants-compared) — このレビューが属するカテゴリ比較。',
  '[ローカルLLMソフトウェアディレクトリ](/ja/power-local-llm/local-llm-software-directory) — ローカルAIツールの全カタログ。',
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
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocketllm-lite-review-hero-pt.webp',
    title: 'Análise do PocketLLM Lite: app de chat com IA local para Android',
    seoTitle: 'Análise do PocketLLM Lite: chat com IA local no Android',
    intro:
      'O PocketLLM Lite é um app de chat para Android, gratuito e com licença MIT, que executa modelos compatíveis no celular ou se conecta ao seu próprio servidor Ollama ou compatível com OpenAI. Nenhum desenvolvedor é citado; o código fica na [organização PocketLLM no GitHub](https://github.com/PocketLLM/pocketllm-lite) e o produto tem site próprio em [pocketllm-lite.vercel.app](https://pocketllm-lite.vercel.app). Esta análise se baseia nesse site, na versão v1.0.40 do GitHub e nos documentos do repositório, consultados em 24 de outubro de 2026; a PromptQuorum não instalou nem testou o app.',
    metaDescription:
      'Análise do PocketLLM Lite: app Android gratuito (MIT) que executa modelos no celular ou usa o seu servidor Ollama. Não testado; fontes conferidas.',
    twitterDescription:
      'Análise do PocketLLM Lite: app de chat local para Android, no aparelho ou no seu servidor. Gratuito e com licença MIT; o que as fontes confirmam e o que não.',
    audience:
      'Usuários de Android e entusiastas que querem um app local de chat e documentos e precisam saber o que o projeto documenta, o que admite não ter verificado e quanto custa.',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise PocketLLM Lite',
    targetKeywords: [
      'análise pocketllm lite',
      'pocketllm lite android',
      'app de chat com ia local android',
      'app llm offline android',
      'cliente ollama android',
      'app llm de código aberto android',
      'llm no aparelho apk android',
    ],
    current_models_mentioned: ['Whisper'],
    current_hardware_mentioned: ['Android phone', 'arm64-v8a'],
    leadAnswerBlock:
      '**O PocketLLM Lite (versão 1.0.40, lançada em 15 de outubro de 2026) é um app de chat para Android, gratuito e de código aberto, que executa modelos no celular ou em um servidor que você controla.** A inferência no aparelho carrega apenas pacotes de modelo no formato Cactus, não arquivos GGUF, e o projeto descreve seus APKs como builds de engenharia assinados com o certificado de depuração.',
    quickAnswerTop: {
      pt: {
        question: 'O PocketLLM Lite executa modelos de IA no próprio celular?',
        answer:
          'Segundo o projeto, sim, mas só no APK arm64-v8a e só com pacotes no formato Cactus; as notas da versão dizem que a geração de tokens no aparelho não foi verificada em um celular físico. Os outros builds, e o restante, como arquivos GGUF, funcionam por meio de um servidor como o Ollama.',
        bullets: [
          'O chat guarda histórico, ramificações, personas e prompts de sistema por conversa.',
          'Arquivos PDF, TXT, Markdown e CSV podem ser consultados por busca por palavras-chave, semântica ou híbrida.',
          'O modo Strict Offline bloqueia o tráfego do app fora do loopback, e um registro de auditoria lista os destinos de rede.',
          'Uma edição web roda no navegador com o seu próprio endpoint Ollama ou compatível com OpenAI.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o PocketLLM Lite?', anchor: 'what-is-pocketllm-lite' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Fluxo de dados e privacidade', anchor: 'privacy' },
      { label: 'Para quem serve', anchor: 'who-should-use' },
      { label: 'O que não conseguimos verificar', anchor: 'who-should-not-use' },
      { label: 'Concorrentes e alternativas', anchor: 'vs-alternatives' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
  { type: 'one-sentence', text: 'O PocketLLM Lite é um app Android com licença MIT que conversa com modelos executados no celular ou no seu próprio servidor Ollama ou compatível com OpenAI.' },
  { type: 'plain-terms', text: 'Você instala um APK do GitHub, baixa um modelo pequeno no app ou o aponta para um servidor em casa e então conversa ou faz perguntas sobre os seus próprios documentos, sem conta.' },
],
        items: [
  'Manutenção: o repositório recebeu o último envio em 15 de outubro de 2026 e várias versões saíram desde agosto, então não se aplica aviso de projeto parado.',
  'Custo: gratuito, sem conta e, segundo o README, sem anúncios nem SDKs de análise.',
  'Ambientes de execução: pacotes Cactus no aparelho, um servidor Ollama ou qualquer endpoint compatível com OpenAI.',
  'Assinatura: os APKs da versão são assinados com o certificado de depuração, e os mantenedores os chamam de builds de engenharia.',
  'Autor: nenhum desenvolvedor citado; o projeto é mantido por uma organização do GitHub.',
],
        callouts: [
  { type: 'note', text: 'Esta análise se baseia no site do projeto, na versão v1.0.40 do GitHub e nos documentos do repositório, consultados em 24 de outubro de 2026. A PromptQuorum não instalou nem testou o app, portanto velocidade, qualidade das respostas e estabilidade não foram avaliadas.' },
],
      },
      overview: {
        id: 'what-is-pocketllm-lite',
        title: 'O que é o PocketLLM Lite?',
        content: [
  '**O PocketLLM Lite é um espaço de trabalho de IA com foco local para Android, feito em Flutter e acompanhado de uma edição web.** O projeto o descreve como um app em que conversas, documentos, memórias e modelos ficam sob o controle do usuário; o repositório do GitHub foi criado em 9 de dezembro de 2025.',
  'Ele separa o app do mecanismo de inferência e oferece três caminhos: modelos no aparelho pelo ambiente Cactus, um servidor Ollama em loopback ou em uma rede local confiável e qualquer endpoint configurável compatível com OpenAI.',
],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
  '**O PocketLLM Lite é distribuído como arquivos APK no GitHub Releases, além de uma edição para navegador; nenhuma página de loja é indicada e não há app para iOS.**',
],
        columns: ['Opção', 'Onde obter'],
        rows: [
  { 'Opção': 'Android, a maioria dos celulares', 'Onde obter': '[APK arm64-v8a](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40), cerca de 60 MB, inclui o ambiente no aparelho' },
  { 'Opção': 'Android, antigos ou x86', 'Onde obter': '[APKs armeabi-v7a e x86_64](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40); só servidores, OCR e documentos' },
  { 'Opção': 'Edição web', 'Onde obter': '[Abrir o app web](https://pocketllm-lite.vercel.app/#/app); exige o seu próprio endpoint Ollama ou compatível com OpenAI' },
  { 'Opção': 'Site', 'Onde obter': '[pocketllm-lite.vercel.app](https://pocketllm-lite.vercel.app)' },
  { 'Opção': 'Código-fonte', 'Onde obter': '[Repositório no GitHub](https://github.com/PocketLLM/pocketllm-lite), licença MIT' },
],
        note: 'Versão analisada: 1.0.40, publicada em 15 de outubro de 2026 com um arquivo SHA256SUMS; é preciso Android 7.0 (API 24) ou mais recente. Os APKs são assinados com o certificado de depuração, então o Android não mostra um editor verificado, e a instalação exige permissão para fontes desconhecidas. Segundo o README, um modelo de 1B de parâmetros em Q4 ocupa cerca de 0.7 a 1 GB.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
  '**Os passos seguem o início rápido de cinco minutos do próprio projeto; a PromptQuorum não os executou.**',
],
        numberedItems: [
  {
    title: 'Instale o APK',
    whyItMatters: 'Baixe o arquivo arm64-v8a na página da versão, compare-o com o SHA256SUMS.txt e instale.',
  },
  {
    title: 'Conclua a configuração inicial',
    whyItMatters: 'Escolha suas permissões de rede; as verificações de atualização e a busca de modelos on-line são opcionais.',
  },
  {
    title: 'Escolha o ambiente de execução',
    whyItMatters: 'Baixe um modelo pequeno do catálogo para uso no aparelho ou informe nas configurações a URL de um servidor Ollama ou compatível com OpenAI.',
  },
  {
    title: 'Converse ou importe documentos',
    whyItMatters: 'Segundo o README, o modelo selecionado produz cada resposta, e o app avisa quando falta um pré-requisito em vez de simular uma resposta.',
  },
],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
  '**Cada item abaixo vem do README ou das notas da versão; nenhum foi testado de forma independente.**',
],
        items: [
  '**Espaço de chat.** Chat com resposta em streaming, histórico, ramificações, etiquetas, personas, prompts, skills e prompts de sistema por conversa.',
  '**Documentos e memória.** Importação de PDF, TXT, Markdown e CSV com referências às fontes; a busca semântica exige um modelo de embeddings instalado, e as memórias locais podem ser vistas, fixadas e desativadas.',
  '**Voz e OCR.** Transcrição com Whisper no aparelho após uma instalação de modelo verificada por checksum, síntese de voz e OCR do Android para texto latino.',
  '**Ferramentas.** Chamadas de ferramentas em JSON validadas, como cálculo, notas, lembretes, área de transferência e busca web controlada por políticas; ações que alteram algo pedem confirmação antes.',
  '**Recursos para desenvolvedores.** Prompt Lab, comparação de modelos lado a lado, benchmarks no aparelho e um servidor autenticado compatível com OpenAI dentro do app, ligado só ao loopback por padrão.',
],
        note: 'A versão 1.0.40 acrescentou um fluxo de compartilhamento com o PocketLLM para texto, links e arquivos e corrigiu erros de carregamento dos pacotes do catálogo. A interface existe só em inglês.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
  '**O README afirma que conversas, documentos, índices e memórias ficam na sandbox do app, que a inferência no aparelho não envia nada para fora e que não há SDKs de anúncios, análise ou rastreamento.** Segundo o projeto, um teste de regressão no repositório faz a compilação falhar se tais SDKs aparecerem.',
  'O uso da rede pretende ser explícito: descoberta e download de modelos, verificações de atualização, busca web via Tavily com a sua própria chave e ambientes remotos que você configurar contatam os destinos exibidos. O modo Strict Offline bloqueia o tráfego do app fora do loopback, um registro de auditoria lista os destinos e os backups usam AES-256-GCM com uma chave derivada de senha. Um prompt enviado a um servidor Ollama ou compatível com OpenAI sai do celular rumo a esse servidor.',
],
        callouts: [
  { type: 'note', text: 'O Strict Offline é um limite no nível do aplicativo, não um firewall do aparelho, e as notas de segurança do projeto dizem que o servidor de API opcional do app não tem TLS nem lista de permissão CORS, devendo ficar no loopback ou em uma rede confiável. São declarações do próprio projeto; a PromptQuorum não inspecionou o tráfego de rede.' },
],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
  '**Usuários de Android que já rodam Ollama** e querem um cliente para o celular com busca em documentos e registro de auditoria.',
  '**Entusiastas que querem uma base de código com licença MIT** que possam ler, compilar com Flutter e adaptar.',
  '**Curiosos por modelos no aparelho** que aceitam builds instalados manualmente e assinados com o certificado de depuração, e um ambiente ainda não comprovado.',
],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
  '**Inferência no aparelho.** As notas da versão dizem que a geração de tokens não foi verificada em um celular físico e o carregamento de modelos só em um emulador, então velocidade, uso de memória e estabilidade são desconhecidos.',
  '**Site versus repositório.** O site indica "On-device GGUF", enquanto o README diz que arquivos GGUF não rodam no celular; a descrição do repositório também menciona iOS, embora o README trate só de Android. Esta análise segue o README.',
  '**Assinatura e editor.** APKs assinados com o certificado de depuração não indicam a identidade do editor, e nenhum desenvolvedor é citado.',
  '**Manutenção do ambiente de execução.** O arquivo de limitações conhecidas diz que o pacote Cactus para Flutter está arquivado no repositório de origem desde julho de 2026 e o lista como risco de manutenção.',
  '**Privacidade e qualidade.** A alegação de ausência de rastreamento, o registro de auditoria e a criptografia dos backups não foram inspecionados, e a qualidade das respostas não foi avaliada.',
],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
  { 'App': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)', 'Plataformas': 'iOS, Android', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Executa modelos GGUF no celular e tem versões na App Store e no Google Play' },
  { 'App': '[Maid](/pt/power-local-llm/maid-review)', 'Plataformas': 'Android, iOS', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'App Flutter de código aberto que também funciona com Ollama e APIs compatíveis com OpenAI' },
  { 'App': '[MLC Chat](/pt/power-local-llm/mlc-chat-review)', 'Plataformas': 'iOS, Android', 'Preço / licença': 'Grátis / Apache 2.0', 'Diferença principal': 'Ambiente móvel multiplataforma baseado no MLC LLM' },
],
        note: 'São as análises de chat móvel mais próximas na PromptQuorum; confirme preço, licença e plataformas atuais de cada app na página dele.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
  {
    q: 'O que a edição web faz?',
    a: 'É uma versão para navegador baseada em Next.js, que guarda os dados no IndexedDB e conversa com um endpoint Ollama ou compatível com OpenAI sob o seu controle; segundo o README, ela não inclui o ambiente de execução do Android no aparelho.',
  },
  {
    q: 'Qual APK devo baixar?',
    a: 'Use arm64-v8a na maioria dos celulares a partir de 2017. Os builds armeabi-v7a e x86_64 não executam modelos no aparelho, porque a biblioteca do ambiente só é empacotada para arm64-v8a.',
  },
  {
    q: 'Funciona sem internet?',
    a: 'Segundo o projeto, o chat no aparelho não precisa de rede depois que um modelo é instalado, e o modo Strict Offline pode bloquear o tráfego do próprio app fora do loopback; o primeiro download de modelo e a busca web precisam de conexão.',
  },
  {
    q: 'O app está disponível em outros idiomas?',
    a: 'Não. O README diz que a interface por enquanto é só em inglês; existem arquivos de tradução para seis idiomas, mas com 15 textos e ainda não conectados.',
  },
],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
  'O PocketLLM Lite é um caminho ativo e com licença MIT para levar a um celular Android um espaço de chat e documentos local e bem documentado, com escolha clara entre modelos no aparelho e o seu próprio servidor. Em contrapartida, não cita desenvolvedor, distribui builds de engenharia assinados com o certificado de depuração, depende de um pacote de ambiente que o próprio projeto lista como arquivado, e os autores dizem que a geração no aparelho não foi verificada em um celular real. Serve para usuários técnicos de Android que sabem instalar manualmente, ler o repositório e testar o app por conta própria; quem precisa de um app assinado, distribuído em loja e com desempenho verificado deve esperar até que exista.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
  '[Site do PocketLLM Lite](https://pocketllm-lite.vercel.app) — recursos, ambientes de execução e visão geral dos downloads, consultado em 24 de outubro de 2026.',
  '[PocketLLM Lite v1.0.40](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40) — lista de APKs, aviso de assinatura e notas de verificação, publicada em 15 de outubro de 2026.',
  '[Repositório do PocketLLM Lite](https://github.com/PocketLLM/pocketllm-lite) — README, arquivo de limitações conhecidas e notas de segurança, consultados em 24 de outubro de 2026.',
],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
  '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat gratuito e de código aberto com modelos no aparelho para iOS e Android.',
  '[Análise do Maid](/pt/power-local-llm/maid-review) — um app Flutter de código aberto para modelos locais e remotos.',
  '[Assistentes de chat comparados](/pt/power-local-llm/local-llm-chat-assistants-compared) — a comparação de categoria a que esta análise pertence.',
  '[Diretório de software de LLM local](/pt/power-local-llm/local-llm-software-directory) — o catálogo completo de ferramentas de IA local.',
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
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocketllm-lite-review-hero-ar.webp',
    title: 'مراجعة PocketLLM Lite: تطبيق دردشة بالذكاء الاصطناعي المحلي لـ Android',
    seoTitle: 'مراجعة PocketLLM Lite: دردشة ذكاء اصطناعي محلية لـ Android',
    intro:
      'PocketLLM Lite تطبيق دردشة لنظام Android، مجاني وبترخيص MIT، يشغّل نماذج متوافقة على الهاتف أو يتصل بخادم Ollama أو خادم متوافق مع OpenAI تملكه. لا يُذكر اسم مطوّر؛ فالشيفرة في [منظمة PocketLLM على GitHub](https://github.com/PocketLLM/pocketllm-lite) وللمنتج موقع خاص على [pocketllm-lite.vercel.app](https://pocketllm-lite.vercel.app). تستند هذه المراجعة إلى ذلك الموقع وإصدار GitHub رقم v1.0.40 ووثائق المستودع، وقد جرى التحقق منها في 24 أكتوبر 2026؛ ولم تثبّت PromptQuorum التطبيق ولم تختبره.',
    metaDescription:
      'مراجعة PocketLLM Lite: تطبيق Android مجاني بترخيص MIT يشغّل نماذج بصيغة Cactus على الهاتف أو يستخدم خادم Ollama لديك. لم يُختبر؛ المصادر راجعناها.',
    twitterDescription:
      'مراجعة PocketLLM Lite: تطبيق دردشة محلي لـ Android على الجهاز أو عبر خادمك. مجاني وبترخيص MIT؛ ما تؤكده المصادر وما لا تؤكده.',
    audience:
      'مستخدمو Android والمهتمون بالتجريب الذين يريدون تطبيق دردشة ومستندات محلي الطابع ويحتاجون إلى معرفة ما يوثّقه المشروع وما يقرّ بأنه لم يُتحقق منه وكم يكلّف.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة PocketLLM Lite',
    targetKeywords: [
      'مراجعة pocketllm lite',
      'pocketllm lite android',
      'تطبيق دردشة ذكاء اصطناعي محلي android',
      'تطبيق llm بدون إنترنت android',
      'عميل ollama لنظام android',
      'تطبيق llm مفتوح المصدر android',
      'llm على الجهاز apk',
    ],
    current_models_mentioned: ['Whisper'],
    current_hardware_mentioned: ['Android phone', 'arm64-v8a'],
    leadAnswerBlock:
      '**PocketLLM Lite (الإصدار 1.0.40، صدر في 15 أكتوبر 2026) تطبيق دردشة مجاني ومفتوح المصدر لنظام Android يشغّل النماذج على الهاتف أو على خادم تتحكم به.** يحمّل الاستدلال على الجهاز حزم نماذج بصيغة Cactus فقط، لا ملفات GGUF، ويصف المشروع ملفات APK الخاصة به بأنها إصدارات هندسية موقّعة بشهادة التصحيح.',
    quickAnswerTop: {
      ar: {
        question: 'هل يشغّل PocketLLM Lite نماذج الذكاء الاصطناعي على الهاتف نفسه؟',
        answer:
          'بحسب المشروع نعم، لكن فقط في ملف APK الخاص بـ arm64-v8a ومع حزم بصيغة Cactus؛ وتذكر ملاحظات الإصدار أن توليد الرموز على الجهاز لم يُتحقق منه على هاتف فعلي. أما الإصدارات الأخرى وأي شيء آخر مثل ملفات GGUF فتعمل عبر خادم مثل Ollama.',
        bullets: [
          'تحفظ الدردشة السجل والتفرعات والشخصيات وتعليمات النظام لكل محادثة.',
          'يمكن البحث في ملفات PDF وTXT وMarkdown وCSV بالكلمات المفتاحية أو دلاليًا أو بطريقة هجينة.',
          'يحظر وضع Strict Offline حركة مرور التطبيق خارج loopback، ويسرد سجل التدقيق وجهات الشبكة.',
          'تعمل نسخة ويب في المتصفح مع نقطة Ollama أو نقطة متوافقة مع OpenAI تملكها.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو PocketLLM Lite؟', anchor: 'what-is-pocketllm-lite' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'الميزات التي أكدتها المصادر', anchor: 'key-features' },
      { label: 'تدفق البيانات والخصوصية', anchor: 'privacy' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'ما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
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
  { type: 'one-sentence', text: 'PocketLLM Lite تطبيق Android بترخيص MIT يدردش مع نماذج تعمل على الهاتف أو على خادم Ollama أو خادم متوافق مع OpenAI تملكه.' },
  { type: 'plain-terms', text: 'تثبّت ملف APK من GitHub، وتنزّل نموذجًا صغيرًا إلى التطبيق أو توجّهه إلى خادم في منزلك، ثم تدردش أو تسأل عن مستنداتك دون حساب.' },
],
        items: [
  'الصيانة: آخر دفع إلى المستودع كان في 15 أكتوبر 2026 وصدرت عدة إصدارات منذ أغسطس، لذا لا ينطبق تحذير المشروع المتوقف.',
  'التكلفة: مجاني ودون حساب، وبحسب README دون إعلانات أو حزم SDK للتحليلات.',
  'بيئات التشغيل: حزم Cactus على الجهاز أو خادم Ollama أو أي نقطة متوافقة مع OpenAI.',
  'التوقيع: ملفات APK الخاصة بالإصدار موقّعة بشهادة التصحيح، ويسميها المشرفون إصدارات هندسية.',
  'الجهة المطوّرة: لا يُذكر اسم مطوّر؛ ويديره منظمة على GitHub.',
],
        callouts: [
  { type: 'note', text: 'تستند هذه المراجعة إلى موقع المشروع وإصدار GitHub رقم v1.0.40 ووثائق المستودع، وقد جرى التحقق منها في 24 أكتوبر 2026. لم تثبّت PromptQuorum التطبيق ولم تختبره، لذلك لم تُقيَّم السرعة ولا جودة الإجابات ولا الاستقرار.' },
],
      },
      overview: {
        id: 'what-is-pocketllm-lite',
        title: 'ما هو PocketLLM Lite؟',
        content: [
  '**PocketLLM Lite مساحة عمل ذكاء اصطناعي محلية الطابع لنظام Android، مبنية بـ Flutter ومعها نسخة ويب مرافقة.** يصفه المشروع بأنه تطبيق تبقى فيه المحادثات والمستندات والذكريات والنماذج تحت سيطرة المستخدم؛ وأُنشئ مستودع GitHub في 9 ديسمبر 2025.',
  'يفصل التطبيق عن محرك الاستدلال ويقدّم ثلاثة مسارات: نماذج على الجهاز عبر بيئة Cactus، وخادم Ollama على loopback أو على شبكة محلية موثوقة، وأي نقطة قابلة للضبط متوافقة مع OpenAI.',
],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
  '**يُوزَّع PocketLLM Lite بوصفه ملفات APK على GitHub Releases مع نسخة للمتصفح؛ ولا يوجد رابط لصفحة متجر ولا تطبيق لنظام iOS.**',
],
        columns: ['الخيار', 'كيف تحصل عليه'],
        rows: [
  { 'الخيار': 'Android، معظم الهواتف', 'كيف تحصل عليه': '[ملف APK لـ arm64-v8a](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40)، نحو 60 MB، يتضمن بيئة التشغيل على الجهاز' },
  { 'الخيار': 'Android، الأقدم أو x86', 'كيف تحصل عليه': '[ملفا APK لـ armeabi-v7a وx86_64](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40)؛ خوادم وOCR ومستندات فقط' },
  { 'الخيار': 'نسخة الويب', 'كيف تحصل عليه': '[افتح تطبيق الويب](https://pocketllm-lite.vercel.app/#/app)؛ يتطلب نقطة Ollama أو نقطة متوافقة مع OpenAI تملكها' },
  { 'الخيار': 'الموقع', 'كيف تحصل عليه': '[pocketllm-lite.vercel.app](https://pocketllm-lite.vercel.app)' },
  { 'الخيار': 'الشيفرة المصدرية', 'كيف تحصل عليه': '[مستودع GitHub](https://github.com/PocketLLM/pocketllm-lite)، ترخيص MIT' },
],
        note: 'الإصدار الذي رُوجع: 1.0.40، نُشر في 15 أكتوبر 2026 مع ملف SHA256SUMS؛ ويلزم Android 7.0 (API 24) أو أحدث. ملفات APK موقّعة بشهادة التصحيح، لذلك لا يعرض Android ناشرًا موثّقًا، ويتطلب التثبيت السماح بالمصادر غير المعروفة. بحسب README يشغل نموذج بمليار معامل بصيغة Q4 نحو 0.7 إلى 1 GB.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
  '**تتبع الخطوات دليل البدء السريع الذي يقدّمه المشروع نفسه (خمس دقائق)؛ ولم تنفّذها PromptQuorum.**',
],
        numberedItems: [
  {
    title: 'ثبّت ملف APK',
    whyItMatters: 'نزّل ملف arm64-v8a من صفحة الإصدار وقارنه بملف SHA256SUMS.txt ثم ثبّته.',
  },
  {
    title: 'أكمل الإعداد الأولي',
    whyItMatters: 'اختر أذونات الشبكة؛ فالتحقق من التحديثات وتصفح النماذج عبر الإنترنت اختياريان.',
  },
  {
    title: 'اختر بيئة التشغيل',
    whyItMatters: 'نزّل نموذجًا صغيرًا من الفهرس للاستخدام على الجهاز، أو أدخل في الإعدادات عنوان خادم Ollama أو خادم متوافق مع OpenAI.',
  },
  {
    title: 'دردش أو استورد مستندات',
    whyItMatters: 'بحسب README يولّد النموذج المحدد كل إجابة، وينبّه التطبيق عند غياب أحد المتطلبات بدل اصطناع رد.',
  },
],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
  '**كل بند أدناه مأخوذ من README أو ملاحظات الإصدار، ولم يُختبر أي منها بصورة مستقلة.**',
],
        items: [
  '**مساحة الدردشة.** دردشة متدفقة مع السجل والتفرعات والوسوم والشخصيات والمطالبات والمهارات وتعليمات النظام لكل محادثة.',
  '**المستندات والذاكرة.** استيراد PDF وTXT وMarkdown وCSV مع إشارات إلى المصادر؛ ويتطلب البحث الدلالي نموذج تضمين مثبّتًا، ويمكن عرض الذكريات المحلية وتثبيتها وتعطيلها.',
  '**الصوت وOCR.** نسخ صوتي بـ Whisper على الجهاز بعد تثبيت نموذج مُتحقَّق منه بمجموع اختباري، وتحويل النص إلى كلام، وOCR في Android للنص اللاتيني.',
  '**الأدوات.** استدعاءات أدوات بصيغة JSON مُتحقَّق منها مثل الحساب والملاحظات والتذكيرات والحافظة والبحث على الويب الخاضع لسياسات؛ وتطلب الأدوات التي تغيّر الحالة تأكيدًا أولًا.',
  '**ميزات المطورين.** Prompt Lab ومقارنة النماذج جنبًا إلى جنب واختبارات أداء على الجهاز وخادم متوافق مع OpenAI ومزوّد بمصادقة داخل التطبيق، مرتبط بـ loopback افتراضيًا.',
],
        note: 'أضاف الإصدار 1.0.40 مسار مشاركة النصوص والروابط والملفات إلى PocketLLM وأصلح أخطاء تحميل حزم الفهرس. الواجهة بالإنجليزية فقط.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
  '**يذكر README أن المحادثات والمستندات والفهارس والذكريات تبقى داخل صندوق عزل التطبيق، وأن الاستدلال على الجهاز لا يرسل شيئًا إلى الخارج، وأنه لا تتضمن حزم SDK للإعلانات أو التحليلات أو التتبع.** ويقال إن اختبار انحدار في المستودع يُفشل البناء إذا ظهرت مثل هذه الحزم.',
  'يُراد لاستخدام الشبكة أن يكون صريحًا: اكتشاف النماذج وتنزيلها، والتحقق من التحديثات، والبحث على الويب عبر Tavily بمفتاحك، وبيئات التشغيل البعيدة التي تضبطها، كلها تتصل بالوجهات المعروضة. يحظر وضع Strict Offline حركة مرور التطبيق خارج loopback، ويسرد سجل التدقيق الوجهات، وتستخدم النسخ الاحتياطية AES-256-GCM بمفتاح مشتق من كلمة مرور. وأي مطالبة ترسل إلى خادم Ollama أو خادم متوافق مع OpenAI تغادر الهاتف إلى ذلك الخادم.',
],
        callouts: [
  { type: 'note', text: 'Strict Offline حدّ على مستوى التطبيق وليس جدارًا ناريًا للجهاز، وتذكر ملاحظات الأمان في المشروع أن خادم API الاختياري داخل التطبيق لا يوفر TLS ولا قائمة سماح CORS، لذا ينبغي إبقاؤه على loopback أو على شبكة موثوقة. هذه أقوال المشروع نفسه؛ ولم تفحص PromptQuorum حركة الشبكة.' },
],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
  '**مستخدمو Android الذين يشغّلون Ollama أصلًا** ويريدون عميلًا للهاتف مع بحث في المستندات وسجل تدقيق.',
  '**المهتمون بالتجريب الذين يريدون شيفرة بترخيص MIT** يمكنهم قراءتها وبناءها بـ Flutter وتعديلها.',
  '**الفضوليون تجاه النماذج على الجهاز** ممن يقبلون إصدارات مثبّتة يدويًا وموقّعة بشهادة التصحيح وبيئة تشغيل لم تثبت بعد.',
],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
  '**الاستدلال على الجهاز.** تقول ملاحظات الإصدار إن توليد الرموز لم يُتحقق منه على هاتف فعلي وإن تحميل النموذج جُرّب على محاكٍ فقط، لذا فالسرعة وملاءمة الذاكرة والاستقرار غير معروفة.',
  '**الموقع مقابل المستودع.** يذكر الموقع "On-device GGUF" بينما يقول README إن ملفات GGUF لا تعمل على الهاتف؛ كما يذكر وصف المستودع نظام iOS مع أن README يتناول Android فقط. تتبع هذه المراجعة README.',
  '**التوقيع والناشر.** ملفات APK الموقّعة بشهادة التصحيح لا تعطي هوية ناشر، ولا يُذكر اسم مطوّر.',
  '**صيانة بيئة التشغيل.** يقول ملف القيود المعروفة إن حزمة Cactus لـ Flutter مؤرشفة في المصدر الأصلي اعتبارًا من يوليو 2026، ويعدّ ذلك خطرًا على الصيانة.',
  '**الخصوصية والجودة.** لم تُفحص دعوى عدم التتبع ولا سجل التدقيق ولا تشفير النسخ الاحتياطية، ولم تُقيَّم جودة الإجابات.',
],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
  { 'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)', 'المنصات': 'iOS وAndroid', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'يشغّل نماذج GGUF على الهاتف وله إصدارات في App Store وGoogle Play' },
  { 'التطبيق': '[Maid](/ar/power-local-llm/maid-review)', 'المنصات': 'Android وiOS', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'تطبيق Flutter مفتوح المصدر يعمل أيضًا مع Ollama وواجهات متوافقة مع OpenAI' },
  { 'التطبيق': '[MLC Chat](/ar/power-local-llm/mlc-chat-review)', 'المنصات': 'iOS وAndroid', 'السعر / الرخصة': 'مجاني / Apache 2.0', 'الفرق الأبرز': 'بيئة تشغيل للجوال متعددة المنصات مبنية على MLC LLM' },
],
        note: 'هذه أقرب مراجعات تطبيقات الدردشة للجوال على PromptQuorum؛ تحقق من السعر والرخصة والمنصات الحالية لكل تطبيق في صفحته.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
  {
    q: 'ماذا تفعل نسخة الويب؟',
    a: 'هي نسخة متصفح مبنية على Next.js تحفظ بياناتها في IndexedDB وتتحدث مع نقطة Ollama أو نقطة متوافقة مع OpenAI تتحكم بها؛ وبحسب README لا تتضمن بيئة التشغيل الخاصة بـ Android على الجهاز.',
  },
  {
    q: 'أي ملف APK أنزّل؟',
    a: 'استخدم arm64-v8a لمعظم الهواتف منذ 2017. لا تستطيع نسختا armeabi-v7a وx86_64 تشغيل النماذج على الجهاز لأن مكتبة بيئة التشغيل مُحزَّمة لـ arm64-v8a فقط.',
  },
  {
    q: 'هل يعمل دون إنترنت؟',
    a: 'بحسب المشروع لا تحتاج الدردشة على الجهاز إلى شبكة بعد تثبيت نموذج، ويمكن لوضع Strict Offline حظر حركة التطبيق خارج loopback؛ أما أول تنزيل لنموذج والبحث على الويب فيحتاجان إلى اتصال.',
  },
  {
    q: 'هل التطبيق متاح بلغات أخرى؟',
    a: 'لا. يذكر README أن الواجهة بالإنجليزية فقط حاليًا؛ توجد ملفات ترجمة لست لغات لكنها تضم 15 نصًا ولم تُربط بالتطبيق.',
  },
],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
  'PocketLLM Lite طريق نشط وبترخيص MIT لوضع مساحة دردشة ومستندات محلية موثقة جيدًا على هاتف Android، مع خيار واضح بين النماذج على الجهاز وخادمك الخاص. في المقابل لا يُذكر مطوّر، ويوزّع إصدارات هندسية موقّعة بشهادة التصحيح، ويعتمد على حزمة بيئة تشغيل يدرجها المشروع نفسه على أنها مؤرشفة، ويقول مؤلفوه إن التوليد على الجهاز لم يُتحقق منه على هاتف حقيقي. يناسب مستخدمي Android التقنيين القادرين على التثبيت اليدوي وقراءة المستودع واختبار التطبيق بأنفسهم؛ ومن يحتاج تطبيقًا موقّعًا وموزّعًا عبر متجر وبأداء مُتحقَّق منه فعليه الانتظار حتى يتوفر ذلك.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
  '[موقع PocketLLM Lite](https://pocketllm-lite.vercel.app) — الميزات وبيئات التشغيل ونظرة عامة على التنزيل، جرى التحقق منها في 24 أكتوبر 2026.',
  '[PocketLLM Lite v1.0.40](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40) — قائمة APK وتنبيه التوقيع وملاحظات التحقق، نُشر في 15 أكتوبر 2026.',
  '[مستودع PocketLLM Lite](https://github.com/PocketLLM/pocketllm-lite) — README وملف القيود المعروفة وملاحظات الأمان، جرى التحقق منها في 24 أكتوبر 2026.',
],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
  '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني ومفتوح المصدر بنماذج على الجهاز لنظامي iOS وAndroid.',
  '[مراجعة Maid](/ar/power-local-llm/maid-review) — تطبيق Flutter مفتوح المصدر للنماذج المحلية والبعيدة.',
  '[مقارنة مساعدي الدردشة](/ar/power-local-llm/local-llm-chat-assistants-compared) — مقارنة الفئة التي تنتمي إليها هذه المراجعة.',
  '[دليل برامج LLM المحلية](/ar/power-local-llm/local-llm-software-directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلي.',
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
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocketllm-lite-review-hero-zh.webp',
    title: 'PocketLLM Lite 评测：Android 本地优先 AI 聊天应用',
    seoTitle: 'PocketLLM Lite 评测：Android 本地 AI 聊天应用',
    intro:
      'PocketLLM Lite 是一款免费、采用 MIT 许可的 Android 聊天应用，可在手机上运行兼容模型，或连接你自己的 Ollama 或兼容 OpenAI 的服务器。项目未公布开发者姓名，代码位于 [GitHub 组织 PocketLLM](https://github.com/PocketLLM/pocketllm-lite)，产品另有专属网站 [pocketllm-lite.vercel.app](https://pocketllm-lite.vercel.app)。本评测基于该网站、GitHub 发布版 v1.0.40 和仓库文档，核查日期为 2026 年 10 月 24 日；PromptQuorum 未安装也未测试该应用。',
    metaDescription:
      'PocketLLM Lite 评测：免费、MIT 许可的 Android 应用，可在手机上运行 Cactus 格式模型或使用你自己的 Ollama 服务器。未实测，已核对来源。',
    twitterDescription:
      'PocketLLM Lite 评测：本地优先的 Android 聊天应用，可在设备上运行或连接自己的服务器。免费、MIT 许可；来源证实了什么、没证实什么。',
    audience:
      '想要本地优先聊天与文档应用的 Android 用户和技术爱好者，需要了解项目记录了什么、承认哪些尚未验证，以及费用如何。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'PocketLLM Lite 评测',
    targetKeywords: [
      'pocketllm lite 评测',
      'pocketllm lite android',
      '本地 ai 聊天应用 android',
      '离线 llm 应用 android',
      'android ollama 客户端',
      '开源 llm 应用 android',
      '设备端 llm apk',
    ],
    current_models_mentioned: ['Whisper'],
    current_hardware_mentioned: ['Android phone', 'arm64-v8a'],
    leadAnswerBlock:
      '**PocketLLM Lite（版本 1.0.40，2026 年 10 月 15 日发布）是一款免费开源的 Android 聊天应用，可在手机上或你掌控的服务器上运行模型。** 设备端推理只加载 Cactus 格式的模型包，不支持 GGUF 文件，项目自己也把 APK 称为使用调试证书签名的工程构建。',
    quickAnswerTop: {
      zh: {
        question: 'PocketLLM Lite 能在手机本机运行 AI 模型吗？',
        answer:
          '据项目所述可以，但仅限 arm64-v8a 的 APK 和 Cactus 格式的模型包；发布说明称设备端生成 token 尚未在真机上验证。其他构建以及 GGUF 文件等，需要通过 Ollama 之类的服务器使用。',
        bullets: [
          '聊天支持历史记录、分支、人设和每个聊天独立的系统提示词。',
          'PDF、TXT、Markdown 和 CSV 可用关键词、语义或混合检索。',
          'Strict Offline 模式会阻止应用的非回环流量，审计日志列出网络目的地。',
          '网页版在浏览器中运行，连接你自己的 Ollama 或兼容 OpenAI 的端点。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'PocketLLM Lite 是什么？', anchor: 'what-is-pocketllm-lite' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '上手步骤', anchor: 'getting-started' },
      { label: '来源已证实的功能', anchor: 'key-features' },
      { label: '数据流向与隐私', anchor: 'privacy' },
      { label: '适合哪些人', anchor: 'who-should-use' },
      { label: '我们未能核实的内容', anchor: 'who-should-not-use' },
      { label: '竞品与替代方案', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
  { type: 'one-sentence', text: 'PocketLLM Lite 是采用 MIT 许可的 Android 应用，可与运行在手机上或你自己的 Ollama、兼容 OpenAI 的服务器上的模型聊天。' },
  { type: 'plain-terms', text: '你从 GitHub 安装 APK，把一个小模型下载进应用，或让它指向家中的服务器，然后无需账号即可聊天，或就自己的文档提问。' },
],
        items: [
  '维护：仓库最近一次推送是 2026 年 10 月 15 日，8 月以来已发布多个版本，因此不适用“项目停滞”警告。',
  '费用：免费、无需账号，据 README 也没有广告或分析 SDK。',
  '运行环境：设备端 Cactus 模型包、Ollama 服务器或任何兼容 OpenAI 的端点。',
  '签名：发布版 APK 使用调试证书签名，维护者称其为工程构建。',
  '开发者：未公布开发者姓名，项目由一个 GitHub 组织运营。',
],
        callouts: [
  { type: 'note', text: '本评测基于项目网站、GitHub 发布版 v1.0.40 和仓库文档，核查日期为 2026 年 10 月 24 日。PromptQuorum 未安装也未测试该应用，因此速度、回答质量和稳定性均未评估。' },
],
      },
      overview: {
        id: 'what-is-pocketllm-lite',
        title: 'PocketLLM Lite 是什么？',
        content: [
  '**PocketLLM Lite 是一个用 Flutter 构建的 Android 本地优先 AI 工作空间，并配有网页版。** 项目将其描述为让聊天、文档、记忆和模型保持在用户掌控之中的应用；GitHub 仓库创建于 2025 年 12 月 9 日。',
  '它把应用与推理后端分开，提供三条路径：通过 Cactus 运行时在设备上运行模型、使用回环或可信局域网上的 Ollama 服务器，以及任何可配置的兼容 OpenAI 的端点。',
],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
  '**PocketLLM Lite 通过 GitHub Releases 分发 APK 文件，另有浏览器版；未链接任何应用商店页面，也没有 iOS 应用。**',
],
        columns: ['选项', '获取方式'],
        rows: [
  { '选项': 'Android，多数手机', '获取方式': '[arm64-v8a APK](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40)，约 60 MB，含设备端运行时' },
  { '选项': 'Android，旧机型或 x86', '获取方式': '[armeabi-v7a 与 x86_64 APK](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40)；仅支持服务器、OCR 和文档' },
  { '选项': '网页版', '获取方式': '[打开网页应用](https://pocketllm-lite.vercel.app/#/app)；需要你自己的 Ollama 或兼容 OpenAI 的端点' },
  { '选项': '官方网站', '获取方式': '[pocketllm-lite.vercel.app](https://pocketllm-lite.vercel.app)' },
  { '选项': '源代码', '获取方式': '[GitHub 仓库](https://github.com/PocketLLM/pocketllm-lite)，MIT 许可' },
],
        note: '评测版本：1.0.40，2026 年 10 月 15 日发布，附 SHA256SUMS 文件；需要 Android 7.0（API 24）或更高版本。APK 使用调试证书签名，因此 Android 不显示已验证的发布者，安装时需允许未知来源。据 README，1B 参数的模型在 Q4 下约占 0.7 至 1 GB。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
  '**以下步骤依据项目自己的五分钟快速入门；PromptQuorum 未实际运行。**',
],
        numberedItems: [
  {
    title: '安装 APK',
    whyItMatters: '从发布页下载 arm64-v8a 文件，与 SHA256SUMS.txt 核对后安装。',
  },
  {
    title: '完成首次引导',
    whyItMatters: '选择网络权限；更新检查和在线浏览模型都是可选的。',
  },
  {
    title: '选择运行方式',
    whyItMatters: '下载目录中的小模型供设备端使用，或在设置中填入 Ollama 或兼容 OpenAI 的服务器地址。',
  },
  {
    title: '聊天或导入文档',
    whyItMatters: '据 README，每条回答都由所选模型生成，缺少前提条件时应用会明确提示，而不是伪造回复。',
  },
],
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: [
  '**以下每一项都来自 README 或发布说明，未经独立测试。**',
],
        items: [
  '**聊天工作区。** 流式聊天，含历史记录、分支、标签、人设、提示词、技能和每个聊天独立的系统提示词。',
  '**文档与记忆。** 导入 PDF、TXT、Markdown 和 CSV 并给出来源引用；语义检索需要安装嵌入模型，本地记忆可查看、置顶和停用。',
  '**语音与 OCR。** 经校验和验证安装模型后可在设备端用 Whisper 转写，另有文字转语音和针对拉丁文字的 Android OCR。',
  '**工具。** 经校验的 JSON 工具调用，如计算、笔记、提醒、剪贴板和受策略控制的网络搜索；会改变状态的操作会先征求确认。',
  '**开发者功能。** Prompt Lab、模型并排对比、设备端基准测试，以及应用内带认证的兼容 OpenAI 的服务器，默认仅绑定回环地址。',
],
        note: '1.0.40 版新增了向 PocketLLM 分享文本、链接和文件的流程，并修复了目录模型包的加载错误。界面仅有英文。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
  '**README 称，聊天、文档、索引和记忆都保存在应用沙盒内，设备端推理不向外发送任何内容，也不含广告、分析或追踪 SDK。** 据称仓库中有一项回归测试，一旦出现此类 SDK 就会让构建失败。',
  '网络使用被设计为明确可见：模型发现与下载、更新检查、使用你自己密钥的 Tavily 网络搜索，以及你配置的远程运行环境，都会连接所显示的目的地。Strict Offline 模式会阻止应用的非回环流量，审计日志列出目的地，备份使用由密码派生的密钥以 AES-256-GCM 加密。发送给 Ollama 或兼容 OpenAI 的服务器的提示词会离开手机，前往该服务器。',
],
        callouts: [
  { type: 'note', text: 'Strict Offline 是应用层面的边界，不是设备防火墙；项目的安全说明称，应用内可选的 API 服务器没有 TLS 和 CORS 允许列表，因此应只在回环或可信网络中使用。这些是项目自己的说法，PromptQuorum 未检查网络流量。' },
],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
  '**已经在运行 Ollama 的 Android 用户**，想要带文档检索和审计日志的手机客户端。',
  '**想要 MIT 许可代码库的技术爱好者**，可以阅读、用 Flutter 构建并改造。',
  '**对设备端模型感兴趣的人**，能接受侧载的调试签名构建和尚未验证的运行时。',
],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
  '**设备端推理。** 发布说明称，token 生成未在真机上验证，模型加载仅在模拟器上验证，因此速度、内存适配和稳定性均未知。',
  '**网站与仓库不一致。** 网站写的是“On-device GGUF”，而 README 称 GGUF 文件无法在手机上运行；仓库简介还提到 iOS，但 README 只涉及 Android。本评测以 README 为准。',
  '**签名与发布者。** 调试签名的 APK 不提供发布者身份，也未公布开发者姓名。',
  '**运行时维护。** 已知限制文件称 Cactus 的 Flutter 包截至 2026 年 7 月已在上游归档，并将其列为维护风险。',
  '**隐私与质量。** 未检查“无追踪”的说法、审计日志和备份加密，也未评估回答质量。',
],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
  { '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)', '平台': 'iOS、Android', '价格 / 许可证': '免费 / MIT', '主要区别': '在手机上运行 GGUF 模型，并有 App Store 和 Google Play 版本' },
  { '应用': '[Maid](/zh/power-local-llm/maid-review)', '平台': 'Android、iOS', '价格 / 许可证': '免费 / MIT', '主要区别': '开源 Flutter 应用，也支持 Ollama 和兼容 OpenAI 的 API' },
  { '应用': '[MLC Chat](/zh/power-local-llm/mlc-chat-review)', '平台': 'iOS、Android', '价格 / 许可证': '免费 / Apache 2.0', '主要区别': '基于 MLC LLM 的跨平台移动运行时' },
],
        note: '这些是 PromptQuorum 上最接近的移动聊天应用评测；请在各应用自己的页面确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
  {
    q: '网页版有什么用？',
    a: '它是基于 Next.js 的浏览器版本，数据保存在 IndexedDB，与你自己掌控的 Ollama 或兼容 OpenAI 的端点通信；据 README，它不含 Android 设备端运行时。',
  },
  {
    q: '应该下载哪个 APK？',
    a: '2017 年以后的多数手机请用 arm64-v8a。armeabi-v7a 和 x86_64 构建无法运行设备端模型，因为运行时库只为 arm64-v8a 打包。',
  },
  {
    q: '没有网络能用吗？',
    a: '据项目所述，安装模型后设备端聊天不需要网络，Strict Offline 模式可阻止应用自身的非回环流量；首次下载模型和网络搜索则需要联网。',
  },
  {
    q: '有其他语言版本吗？',
    a: '没有。README 称界面目前只有英文；六种语言的翻译文件虽然存在，但只有 15 条文本，且尚未接入。',
  },
],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
  'PocketLLM Lite 是一个更新活跃、采用 MIT 许可的选择，可把文档完备的本地优先聊天与文档工作区装进 Android 手机，并能在设备端模型和你自己的服务器之间做出清晰选择。另一方面，它没有公布开发者姓名，发布的是调试签名的工程构建，依赖一个项目自己列为已归档的上游运行时包，作者也表示设备端生成尚未在真机上验证。它适合能侧载安装、阅读仓库并自行测试的技术型 Android 用户；需要已签名、通过应用商店分发且性能经过验证的应用的人，应等这些条件具备后再考虑。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
  '[PocketLLM Lite 网站](https://pocketllm-lite.vercel.app) — 功能、运行环境和下载概览，核查于 2026 年 10 月 24 日。',
  '[PocketLLM Lite v1.0.40](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40) — APK 列表、签名说明和验证备注，发布于 2026 年 10 月 15 日。',
  '[PocketLLM Lite 仓库](https://github.com/PocketLLM/pocketllm-lite) — README、已知限制文件和安全说明，核查于 2026 年 10 月 24 日。',
],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
  '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 面向 iOS 和 Android 的免费开源设备端聊天客户端。',
  '[Maid 评测](/zh/power-local-llm/maid-review) — 支持本地与远程模型的开源 Flutter 应用。',
  '[聊天助手对比](/zh/power-local-llm/local-llm-chat-assistants-compared) — 本评测所属的类别对比。',
  '[本地 LLM 软件目录](/zh/power-local-llm/local-llm-software-directory) — 本地 AI 工具的完整目录。',
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
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocketllm-lite-review-hero-ko.webp',
    title: 'PocketLLM Lite 리뷰: Android용 로컬 우선 AI 채팅 앱',
    seoTitle: 'PocketLLM Lite 리뷰: Android 로컬 AI 채팅 앱',
    intro:
      'PocketLLM Lite는 호환 모델을 휴대폰에서 실행하거나 직접 운영하는 Ollama 또는 OpenAI 호환 서버에 연결하는, 무료 MIT 라이선스 Android 채팅 앱입니다. 개발자 이름은 공개되어 있지 않으며, 코드는 [GitHub 조직 PocketLLM](https://github.com/PocketLLM/pocketllm-lite)에 있고 제품 전용 사이트는 [pocketllm-lite.vercel.app](https://pocketllm-lite.vercel.app)입니다. 이 리뷰는 해당 사이트, GitHub 릴리스 v1.0.40, 저장소 문서를 바탕으로 2026년 10월 24일에 확인했습니다. PromptQuorum은 앱을 설치하거나 테스트하지 않았습니다.',
    metaDescription:
      'PocketLLM Lite 리뷰: Cactus 형식 모델을 휴대폰에서 실행하거나 자체 Ollama 서버를 쓰는 무료 MIT 라이선스 Android 앱. 미테스트, 출처 확인 완료.',
    twitterDescription:
      'PocketLLM Lite 리뷰: 기기 또는 자체 서버로 쓰는 로컬 우선 Android 채팅 앱. 무료, MIT 라이선스. 출처가 확인한 것과 확인하지 못한 것.',
    audience:
      '로컬 우선 채팅·문서 앱을 찾는 Android 사용자와 기술 애호가를 위해, 프로젝트가 문서화한 내용과 미검증으로 인정한 내용, 비용을 정리합니다.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'PocketLLM Lite 리뷰',
    targetKeywords: [
      'pocketllm lite 리뷰',
      'pocketllm lite android',
      '로컬 ai 채팅 앱 android',
      '오프라인 llm 앱 android',
      'android ollama 클라이언트',
      '오픈소스 llm 앱 android',
      '온디바이스 llm apk',
    ],
    current_models_mentioned: ['Whisper'],
    current_hardware_mentioned: ['Android phone', 'arm64-v8a'],
    leadAnswerBlock:
      '**PocketLLM Lite(버전 1.0.40, 2026년 10월 15일 출시)는 모델을 휴대폰이나 직접 관리하는 서버에서 실행하는 무료 오픈소스 Android 채팅 앱입니다.** 기기 내 추론은 Cactus 형식 모델 번들만 불러오며 GGUF 파일은 지원하지 않고, 프로젝트는 자사 APK를 디버그 서명된 엔지니어링 빌드라고 밝힙니다.',
    quickAnswerTop: {
      ko: {
        question: 'PocketLLM Lite는 AI 모델을 휴대폰에서 직접 실행합니까?',
        answer:
          '프로젝트에 따르면 그렇지만, arm64-v8a APK와 Cactus 형식 번들에 한정됩니다. 릴리스 노트는 기기 내 토큰 생성을 실제 휴대폰에서 검증하지 않았다고 밝힙니다. 다른 빌드와 GGUF 파일 등은 Ollama 같은 서버를 통해 사용합니다.',
        bullets: [
          '채팅은 기록, 분기, 페르소나, 채팅별 시스템 프롬프트를 지원합니다.',
          'PDF, TXT, Markdown, CSV를 키워드·시맨틱·하이브리드 검색으로 찾을 수 있습니다.',
          'Strict Offline 모드는 앱의 루프백 외 트래픽을 차단하고, 감사 로그가 네트워크 대상을 나열합니다.',
          '웹 버전은 브라우저에서 직접 운영하는 Ollama 또는 OpenAI 호환 엔드포인트와 연결해 동작합니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'PocketLLM Lite란?', anchor: 'what-is-pocketllm-lite' },
      { label: '입수 방법', anchor: 'get-it' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '출처로 확인된 기능', anchor: 'key-features' },
      { label: '데이터 흐름과 개인정보', anchor: 'privacy' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 사항', anchor: 'who-should-not-use' },
      { label: '경쟁 제품과 대안', anchor: 'vs-alternatives' },
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
  { type: 'one-sentence', text: 'PocketLLM Lite는 휴대폰 또는 직접 운영하는 Ollama·OpenAI 호환 서버에서 실행되는 모델과 대화하는 MIT 라이선스 Android 앱입니다.' },
  { type: 'plain-terms', text: 'GitHub에서 APK를 설치하고 작은 모델을 앱에 내려받거나 집의 서버를 지정하면, 계정 없이 채팅하거나 자신의 문서에 대해 질문할 수 있습니다.' },
],
        items: [
  '유지 관리: 저장소의 마지막 푸시는 2026년 10월 15일이며 8월 이후 여러 차례 릴리스되어 방치 프로젝트 경고는 해당되지 않습니다.',
  '비용: 무료이며 계정이 필요 없고, README에 따르면 광고나 분석 SDK도 없습니다.',
  '실행 환경: 기기 내 Cactus 번들, Ollama 서버 또는 OpenAI 호환 엔드포인트.',
  '서명: 릴리스 APK는 디버그 서명이며 관리자들도 엔지니어링 빌드라고 부릅니다.',
  '제작자: 개발자 이름은 공개되지 않았고 GitHub 조직이 운영합니다.',
],
        callouts: [
  { type: 'note', text: '이 리뷰는 프로젝트 웹사이트, GitHub 릴리스 v1.0.40, 저장소 문서를 바탕으로 2026년 10월 24일에 확인했습니다. PromptQuorum은 앱을 설치하거나 테스트하지 않았으므로 속도, 답변 품질, 안정성은 평가하지 않았습니다.' },
],
      },
      overview: {
        id: 'what-is-pocketllm-lite',
        title: 'PocketLLM Lite란?',
        content: [
  '**PocketLLM Lite는 Flutter로 만든 Android용 로컬 우선 AI 작업 공간이며 웹 버전도 함께 제공됩니다.** 프로젝트는 채팅, 문서, 메모리, 모델을 사용자의 통제 아래 두는 앱이라고 설명합니다. GitHub 저장소는 2025년 12월 9일에 만들어졌습니다.',
  '앱과 추론 백엔드를 분리하여 세 가지 경로를 제공합니다. Cactus 런타임을 통한 기기 내 모델, 루프백 또는 신뢰할 수 있는 로컬 네트워크의 Ollama 서버, 설정 가능한 OpenAI 호환 엔드포인트입니다.',
],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
  '**PocketLLM Lite는 GitHub Releases의 APK 파일과 브라우저 버전으로 배포됩니다. 스토어 페이지 링크는 없으며 iOS 앱도 없습니다.**',
],
        columns: ['옵션', '입수 방법'],
        rows: [
  { '옵션': 'Android, 대부분의 휴대폰', '입수 방법': '[arm64-v8a APK](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40), 약 60 MB, 기기 내 런타임 포함' },
  { '옵션': 'Android, 구형 또는 x86', '입수 방법': '[armeabi-v7a·x86_64 APK](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40). 서버, OCR, 문서만 가능' },
  { '옵션': '웹 버전', '입수 방법': '[웹 앱 열기](https://pocketllm-lite.vercel.app/#/app). 직접 운영하는 Ollama 또는 OpenAI 호환 엔드포인트 필요' },
  { '옵션': '웹사이트', '입수 방법': '[pocketllm-lite.vercel.app](https://pocketllm-lite.vercel.app)' },
  { '옵션': '소스 코드', '입수 방법': '[GitHub 저장소](https://github.com/PocketLLM/pocketllm-lite), MIT 라이선스' },
],
        note: '확인한 버전은 1.0.40이며 2026년 10월 15일에 SHA256SUMS 파일과 함께 공개되었습니다. Android 7.0(API 24) 이상이 필요합니다. APK는 디버그 서명이라 Android가 검증된 게시자를 표시하지 않으며, 설치하려면 출처를 알 수 없는 앱 허용이 필요합니다. README에 따르면 1B 파라미터 모델은 Q4에서 대략 0.7~1 GB입니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
  '**아래 단계는 프로젝트 자체의 5분 빠른 시작을 따른 것이며 PromptQuorum이 실행해 보지는 않았습니다.**',
],
        numberedItems: [
  {
    title: 'APK 설치',
    whyItMatters: '릴리스 페이지에서 arm64-v8a 파일을 내려받아 SHA256SUMS.txt와 대조한 뒤 설치합니다.',
  },
  {
    title: '초기 설정 마치기',
    whyItMatters: '네트워크 권한을 선택합니다. 업데이트 확인과 온라인 모델 검색은 선택 사항입니다.',
  },
  {
    title: '실행 환경 선택',
    whyItMatters: '기기에서 쓸 작은 카탈로그 모델을 내려받거나, 설정에 Ollama 또는 OpenAI 호환 서버의 URL을 입력합니다.',
  },
  {
    title: '채팅 또는 문서 가져오기',
    whyItMatters: 'README에 따르면 모든 답변은 선택한 모델이 생성하며, 전제 조건이 없으면 앱이 가짜 응답을 만드는 대신 그 사실을 알려 줍니다.',
  },
],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
  '**아래 항목은 모두 README 또는 릴리스 노트에서 가져온 것이며 독립적으로 테스트하지 않았습니다.**',
],
        items: [
  '**채팅 작업 공간.** 스트리밍 채팅, 기록, 분기, 태그, 페르소나, 프롬프트, 스킬, 채팅별 시스템 프롬프트.',
  '**문서와 메모리.** PDF, TXT, Markdown, CSV를 출처 표시와 함께 가져오기. 시맨틱 검색에는 임베딩 모델 설치가 필요하며, 로컬 메모리는 확인·고정·비활성화할 수 있습니다.',
  '**음성과 OCR.** 체크섬으로 검증한 모델 설치 후 기기에서 Whisper 받아쓰기, 음성 읽기, 라틴 문자용 Android OCR.',
  '**도구.** 계산, 메모, 알림, 클립보드, 정책으로 제어되는 웹 검색 등 검증된 JSON 도구 호출. 상태를 바꾸는 도구는 먼저 확인을 요청합니다.',
  '**개발자 기능.** Prompt Lab, 모델 나란히 비교, 기기 내 벤치마크, 앱 내 인증형 OpenAI 호환 서버(기본값은 루프백에만 바인딩).',
],
        note: '버전 1.0.40에서는 텍스트, 링크, 파일을 PocketLLM으로 공유하는 기능이 추가되고 카탈로그 번들의 로드 오류가 수정되었습니다. 인터페이스는 영어만 제공됩니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
  '**README에 따르면 채팅, 문서, 색인, 메모리는 앱 샌드박스 안에 남고, 기기 내 추론은 아무것도 외부로 보내지 않으며, 광고·분석·추적 SDK는 포함되지 않습니다.** 그런 SDK가 나타나면 빌드가 실패하도록 하는 회귀 테스트가 저장소에 있다고 합니다.',
  '네트워크 사용은 명시적으로 이루어지도록 설계되었습니다. 모델 검색과 다운로드, 업데이트 확인, 직접 발급한 키를 쓰는 Tavily 웹 검색, 사용자가 설정한 원격 런타임은 표시된 대상에 연결합니다. Strict Offline 모드는 앱의 루프백 외 트래픽을 차단하고, 감사 로그가 대상을 나열하며, 백업은 비밀번호에서 파생한 키로 AES-256-GCM 암호화합니다. Ollama나 OpenAI 호환 서버로 보낸 프롬프트는 휴대폰을 떠나 해당 서버로 전달됩니다.',
],
        callouts: [
  { type: 'note', text: 'Strict Offline은 앱 수준의 경계이며 기기 방화벽이 아닙니다. 프로젝트의 보안 안내에 따르면 선택 사항인 앱 내 API 서버에는 TLS와 CORS 허용 목록이 없으므로 루프백이나 신뢰할 수 있는 네트워크에서만 써야 합니다. 이는 프로젝트 자체의 설명이며 PromptQuorum은 네트워크 트래픽을 검사하지 않았습니다.' },
],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
  '**이미 Ollama를 운영하는 Android 사용자**로서 문서 검색과 감사 로그가 있는 휴대폰용 클라이언트를 원하는 분.',
  '**MIT 라이선스 코드베이스를 원하는 기술 애호가**로서 읽고, Flutter로 빌드하고, 수정하려는 분.',
  '**기기 내 모델에 관심이 있는 분**으로서 직접 설치하는 디버그 서명 빌드와 검증되지 않은 런타임을 감수할 수 있는 분.',
],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
  '**기기 내 추론.** 릴리스 노트에 따르면 토큰 생성은 실제 휴대폰에서, 모델 로드는 에뮬레이터에서만 검증되었으므로 속도, 메모리 적합성, 안정성은 알 수 없습니다.',
  '**사이트와 저장소의 불일치.** 사이트는 "On-device GGUF"라고 하지만 README는 GGUF 파일을 휴대폰에서 실행할 수 없다고 합니다. 저장소 설명은 iOS도 언급하지만 README는 Android만 다룹니다. 이 리뷰는 README를 따릅니다.',
  '**서명과 게시자.** 디버그 서명 APK는 게시자 신원을 제공하지 않으며 개발자 이름도 공개되지 않았습니다.',
  '**런타임 유지 관리.** 알려진 제한 사항 문서에 따르면 Cactus Flutter 패키지는 2026년 7월 기준 업스트림에서 보관(archived) 처리되었으며, 프로젝트는 이를 유지 관리 위험으로 꼽습니다.',
  '**개인정보와 품질.** 추적이 없다는 주장, 감사 로그, 백업 암호화는 검사하지 않았고 답변 품질도 평가하지 않았습니다.',
],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이점'],
        rows: [
  { '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)', '플랫폼': 'iOS, Android', '가격 / 라이선스': '무료 / MIT', '핵심 차이점': 'GGUF 모델을 휴대폰에서 실행하며 App Store와 Google Play 버전이 있음' },
  { '앱': '[Maid](/ko/power-local-llm/maid-review)', '플랫폼': 'Android, iOS', '가격 / 라이선스': '무료 / MIT', '핵심 차이점': 'Ollama와 OpenAI 호환 API도 지원하는 오픈소스 Flutter 앱' },
  { '앱': '[MLC Chat](/ko/power-local-llm/mlc-chat-review)', '플랫폼': 'iOS, Android', '가격 / 라이선스': '무료 / Apache 2.0', '핵심 차이점': 'MLC LLM 기반의 크로스플랫폼 모바일 런타임' },
],
        note: 'PromptQuorum에서 가장 가까운 모바일 채팅 앱 리뷰입니다. 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
  {
    q: '웹 버전은 무엇을 합니까?',
    a: 'Next.js 기반 브라우저 버전으로, 데이터를 IndexedDB에 보관하고 직접 관리하는 Ollama 또는 OpenAI 호환 엔드포인트와 통신합니다. README에 따르면 Android 기기 내 런타임은 포함되지 않습니다.',
  },
  {
    q: '어떤 APK를 받아야 합니까?',
    a: '2017년 이후 대부분의 휴대폰에는 arm64-v8a를 사용하십시오. armeabi-v7a와 x86_64 빌드는 런타임 라이브러리가 arm64-v8a용으로만 패키징되어 있어 기기 내 모델을 실행할 수 없습니다.',
  },
  {
    q: '인터넷 없이 작동합니까?',
    a: '프로젝트에 따르면 모델을 설치한 뒤에는 기기 내 채팅에 네트워크가 필요 없고, Strict Offline 모드로 앱 자체의 루프백 외 트래픽을 차단할 수 있습니다. 첫 모델 다운로드와 웹 검색에는 연결이 필요합니다.',
  },
  {
    q: '다른 언어로도 제공됩니까?',
    a: '아닙니다. README에 따르면 현재 인터페이스는 영어뿐입니다. 6개 언어의 번역 파일이 있지만 15개 문자열만 담고 있으며 연결되어 있지 않습니다.',
  },
],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
  'PocketLLM Lite는 잘 문서화된 로컬 우선 채팅·문서 작업 공간을 Android 휴대폰에 들이는, 활발히 업데이트되는 MIT 라이선스 선택지이며 기기 내 모델과 자체 서버 중 하나를 분명하게 고를 수 있습니다. 반면 개발자 이름이 없고, 디버그 서명된 엔지니어링 빌드로 배포되며, 프로젝트 스스로 보관 처리되었다고 적은 업스트림 런타임 패키지에 의존하고, 기기 내 생성이 실제 휴대폰에서 검증되지 않았다고 제작진이 밝힙니다. 직접 설치하고 저장소를 읽고 스스로 테스트할 수 있는 기술 지향 Android 사용자에게 맞으며, 서명되고 스토어로 배포되며 성능이 검증된 앱이 필요한 분은 그런 앱이 나올 때까지 기다리는 것이 좋습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
  '[PocketLLM Lite 웹사이트](https://pocketllm-lite.vercel.app) — 기능, 실행 환경, 다운로드 개요. 2026년 10월 24일 확인.',
  '[PocketLLM Lite v1.0.40](https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40) — APK 목록, 서명 관련 안내, 검증 메모. 2026년 10월 15일 공개.',
  '[PocketLLM Lite 저장소](https://github.com/PocketLLM/pocketllm-lite) — README, 알려진 제한 사항 문서, 보안 안내. 2026년 10월 24일 확인.',
],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
  '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS와 Android용 무료 오픈소스 기기 내 채팅 클라이언트.',
  '[Maid 리뷰](/ko/power-local-llm/maid-review) — 로컬과 원격 모델을 지원하는 오픈소스 Flutter 앱.',
  '[채팅 어시스턴트 비교](/ko/power-local-llm/local-llm-chat-assistants-compared) — 이 리뷰가 속한 카테고리 비교.',
  '[로컬 LLM 소프트웨어 디렉터리](/ko/power-local-llm/local-llm-software-directory) — 로컬 AI 도구 전체 카탈로그.',
],
      },
    },
  },
}
