// Anarlog Review: Open-Source AI Meeting Notepad (formerly Hyprnote)
// Slug: anarlog-review
// Companion to: meetily-review, macwhisper-review, local-llm-voice-audio-compared
// Sources: anarlog.so (home, llms.txt, /privacy last updated 2026-10-21), docs.anarlog.so (install, offline, data-and-privacy, models-and-providers, FAQ),
// github.com/fastrepl/anarlog (README, MIT licence, Releases desktop_v1.4.31), all checked 2026-10-24 — no hands-on testing. The pricing page renders with
// JavaScript and could not be read; Pro price ($14/month or $140/year, USD) is from the docs FAQ and is not converted.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/anarlog-review-hero-en.webp',
    title: 'Anarlog Review: Open-Source AI Meeting Notes, Formerly Hyprnote',
    seoTitle: 'Anarlog Review: Bot-Free AI Meeting Notes (ex-Hyprnote)',
    intro:
      'Anarlog is an open-source AI meeting notepad from [Fastrepl, Inc.](https://anarlog.so) for macOS, Windows and Linux that records your computer\'s audio without sending a bot into the call. This review is based on the official website, documentation, privacy policy and GitHub repository, checked on 24 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'Anarlog review: open-source, bot-free AI meeting notepad, formerly Hyprnote. Records on your device, can run locally on Apple Silicon Macs; untested.',
    twitterDescription:
      'Anarlog review: open-source AI meeting notes without a bot, formerly Hyprnote. What runs locally, what goes to the cloud, and what stays unconfirmed.',
    audience:
      'People who take their own meeting notes and want AI summaries without a bot in the call, and need to know what runs locally, what costs money and what the sources leave open.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Anarlog review',
    targetKeywords: [
      'anarlog review',
      'hyprnote anarlog',
      'open source ai meeting notes',
      'bot-free meeting notetaker',
      'local ai meeting transcription',
      'granola alternative open source',
      'private ai notepad for meetings',
    ],
    current_models_mentioned: ['Soniqo', 'Parakeet', 'Whisper'],
    current_hardware_mentioned: ['Apple Silicon', 'Mac'],
    leadAnswerBlock:
      '**Anarlog (version 1.4.31, released on 20 October 2026; repository last updated on 24 October 2026) is an open-source notepad that records meetings on your device and turns them into editable AI summaries.** Fully local use is possible but needs an Apple Silicon Mac; every statement here comes from the project\'s own website, documentation and repository.',
    quickAnswerTop: {
      en: {
        question: 'Can Anarlog work without sending my meetings to the cloud?',
        answer:
          'Per the project, yes: choose an on-device transcription model and a local summary model and the content stays on the computer. Built-in on-device transcription is limited to Apple Silicon, so Windows, Linux and Intel Macs need a local Deepgram-compatible server or a cloud provider for the transcript.',
        bullets: [
          'Audio capture covers microphone and system sound, with no bot in the participant list.',
          'Notes and transcripts sit in a local database and can be exported as Markdown.',
          'Summaries and chat can use a local model, your own API key or the paid Anarlog Cloud.',
          'A dictation mode types speech into other apps with a shortcut.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Anarlog?', anchor: 'what-is-anarlog' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Requirements', anchor: 'requirements' },
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
          {
            type: 'one-sentence',
            text: 'Anarlog is an MIT-licensed meeting notepad that captures your computer\'s audio, transcribes it with the model you pick and writes an editable summary.',
          },
          {
            type: 'plain-terms',
            text: 'You jot notes while a call runs, the app listens on your own machine instead of joining the call, and afterwards it turns your notes and the transcript into a summary.',
          },
        ],
        items: [
          'Maintenance: seven stable desktop releases appeared between 20 September and 20 October 2026, so no stale-project warning applies.',
          'License: the community app is MIT; the enterprise folder is source-visible but commercially licensed.',
          'AI choice: transcription and summaries are separate settings, each on-device, your own key or Anarlog Cloud.',
          'Cost: a free plan covers on-device and own-key use; hosted AI is a paid plan.',
          'Maturity: macOS is the main platform, while the Windows, Linux and mobile apps are labelled beta.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum has not installed or run the app, so transcript and summary quality are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-anarlog',
        title: 'What Is Anarlog?',
        content: [
            '**Anarlog is an open-source AI notepad for meetings: you type notes during a call, it records your computer\'s audio without joining as a bot, and afterwards it produces an editable summary.** It is made by Fastrepl, Inc., and the repository describes it as an open-source alternative to Granola.',
            'The project started as Hyprnote and briefly used the name Char; the README says the team later split the work, so [char.com](https://char.com) is now a separate productivity app and Anarlog is this meeting notepad. Some file paths in the documentation still say "hyprnote".',
          ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Anarlog is a free download for macOS, Windows and Linux; the macOS and Windows installers need no terminal.**',
        ],
        columns: [
          'Option',
          'How to get it',
        ],
        rows: [
          { 'Option': 'macOS', 'How to get it': 'DMG for Apple Silicon and Intel from the [download page](https://anarlog.so/download) or [GitHub Releases](https://github.com/fastrepl/anarlog/releases)' },
          { 'Option': 'Windows', 'How to get it': 'x64 installer (beta) or the [Microsoft Store](https://apps.microsoft.com/detail/XPDLN196NKSW10) listing' },
          { 'Option': 'Linux', 'How to get it': 'AppImage and DEB for x64 and ARM64 (beta), an APT repository and an Arch PKGBUILD' },
          { 'Option': 'Pricing', 'How to get it': 'Free plan; Pro (Cloud) is $14 per month or $140 per year, in USD per the documentation' },
          { 'Option': 'Mobile beta', 'How to get it': '[TestFlight](https://testflight.apple.com/join/y7WJCXvG) for iOS and [Google Play beta](https://play.google.com/apps/testing/so.anarlog.mobile) for Android' },
          { 'Option': 'Website', 'How to get it': '[anarlog.so](https://anarlog.so)' },
          { 'Option': 'Privacy policy', 'How to get it': '[anarlog.so/privacy](https://anarlog.so/privacy)' },
          { 'Option': 'Source code', 'How to get it': '[github.com/fastrepl/anarlog](https://github.com/fastrepl/anarlog)' },
        ],
        note: 'The pricing page renders with JavaScript and could not be read here, so the prices come from the official documentation; plan contents beyond the free and Pro split were not checked.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**Anarlog needs macOS 15 or later, and its built-in local transcription needs an Apple Silicon Mac.**',
        ],
        columns: [
          'Item',
          'What the sources say',
        ],
        rows: [
          { 'Item': 'macOS', 'What the sources say': 'macOS 15 or later, with Apple Silicon and Intel builds' },
          { 'Item': 'Windows and Linux', 'What the sources say': 'Both are in beta: Windows x64, Linux x64 and ARM64' },
          { 'Item': 'On-device transcription', 'What the sources say': 'Apple Silicon only: Soniqo models, Apple Speech on macOS 26, or a whisper.cpp .bin file you supply' },
          { 'Item': 'Local summaries', 'What the sources say': 'A model served by Ollama, LM Studio or Unsloth, or experimental text-only Apple Intelligence on an eligible Mac' },
          { 'Item': 'Hardware', 'What the sources say': 'No RAM or GPU requirement is stated; speed depends on the computer and the model' },
        ],
        note: 'Microphone detection, auto-stop and meeting-chat capture work on macOS and Linux only, and Apple Calendar integration is macOS only.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the documentation or the README; none has been tested by PromptQuorum.**',
        ],
        items: [
          '**Automatic capture.** Calendar-backed meetings can start on schedule, and the app can prompt you when it detects an unscheduled call.',
          '**Editable notes and transcripts.** You write your own memo during the call, edit transcript text, assign speakers and resume listening to add audio to the same note.',
          '**Summaries and chat.** Templates and a customizable Auto summary produce the notes, and chat can answer questions about one meeting or several.',
          '**Imports.** Upload an audio, SRT or VTT file, or bring in meeting history from other assistants, including Granola exports.',
          '**Agents and automation.** A command-line tool and a local MCP server read the local database, and webhooks and starter workflows can export Markdown or file notes.',
        ],
        note: 'Sharing and Cloud Sync are optional extras that need an account.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
            '**Recording happens on your device, and the project says every cloud feature is optional.** According to the privacy policy, last updated on 21 October 2026, notes, transcripts and meeting data are stored locally, and the README names a local SQLite database.',
            'Where content goes depends on your settings: hosted transcription sends audio to speech-to-text providers that the policy says delete it once the job completes, hosted summaries send text through an AI gateway, and your own key or local server receives it directly. Per the policy, Cloud Sync is end-to-end encrypted, a shared note is stored readable on the servers, and the opt-in Cloud API keeps a separate readable copy.',
            'Usage analytics (PostHog) and a sampled masked session replay run while "Share usage data" is on and can be switched off under Settings → Privacy.',
          ],
        callouts: [
          {
            type: 'note',
            text: 'These are the project\'s declarations, not audit results, and PromptQuorum has not inspected the app\'s network traffic. The policy says crash reports stay on when usage sharing is off, while the documentation describes a separate switch for them.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Mac users** who want transcript and summary to stay on their own machine.',
          '**People replacing a bot-based notetaker** who prefer capture from their own device.',
          '**Users who already pay for an AI subscription** and want to reuse it for summaries.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Transcript and summary quality.** PromptQuorum did not run a meeting through the app, so accuracy, speaker labels and summary quality are not assessed.',
          '**Local performance.** Speed and battery use of on-device models on long calls are untested; the documentation says results depend on the computer.',
          '**Security and privacy claims.** Encryption, deletion and no-training statements are the project\'s own and have not been audited here.',
          '**Current pricing.** The Pro price comes from the documentation FAQ because the pricing page could not be read.',
          '**Windows, Linux and mobile.** The project labels these builds beta, and they were not examined.',
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
          { 'App': '[Meetily](/power-local-llm/meetily-review)', 'Platforms': 'Windows, macOS', 'Price / license': 'Free Community Edition / MIT', 'Key difference': 'Self-hosted notetaker whose summaries run through a local Ollama model; per the project, no cloud is required' },
          { 'App': '[MacWhisper](/power-local-llm/macwhisper-review)', 'Platforms': 'macOS', 'Price / license': 'Freemium / proprietary', 'Key difference': 'One-time-purchase Mac app for local Whisper and Parakeet transcription, per the directory entry' },
          { 'App': '[Handy](/power-local-llm/handy-review)', 'Platforms': 'macOS, Windows, Linux', 'Price / license': 'Free / MIT', 'Key difference': 'Push-to-talk dictation into any app rather than a meeting notepad' },
        ],
        note: 'Confirm each app\'s current price, license and platforms on its own listing before choosing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Do I have to tell people I am recording?',
            a: 'The privacy policy and the documentation both say you are responsible for notice and consent where the law requires it, because recordings can include other people\'s voices. Anarlog does not add a participant to the call, so nobody is told automatically.',
          },
          {
            q: 'How long does Anarlog keep the audio?',
            a: 'Under Settings → Meetings → Audio file retention you can choose Don\'t save, 1 day, 3 days, 1 week, 1 month or Forever. After that period the recording is gone, while the note and transcript remain.',
          },
          {
            q: 'Which languages does it transcribe?',
            a: 'The Cloud picker covers a long list that includes Arabic, Japanese, Korean and Chinese. Soniqo transcribes 25 European languages, Apple Speech handles one supported language at a time, and your own provider sets its own list.',
          },
          {
            q: 'Can I use my ChatGPT or Claude subscription for summaries?',
            a: 'Yes, per the documentation: under Settings → Intelligence you can connect Claude, ChatGPT, Grok, GitHub Copilot or Kimi Code, so no separate API key is needed. Each device is connected separately.',
          },
          {
            q: 'Does the project train AI models on my meetings?',
            a: 'The privacy policy says it never uses notes, transcripts, audio or calendar data to train AI models. With your own provider, that provider\'s retention and training policy applies instead.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Anarlog is an actively released, open-source way to take meeting notes without a bot, with a real choice between local and cloud AI for each step. Against that, built-in local transcription is limited to Apple Silicon, the Windows, Linux and mobile apps are beta, hosted AI is a paid plan, and none of the quality or privacy claims could be checked here. It suits Mac users who want to keep meetings on their own machine and can test the free plan first; teams with strict confidentiality needs should read the privacy policy and the provider settings carefully before relying on it.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Anarlog website](https://anarlog.so) — product positioning, download and pricing pages, checked 24 October 2026.',
          '[Anarlog privacy policy](https://anarlog.so/privacy) — data collection, providers and opt-outs, last updated 21 October 2026.',
          '[Anarlog documentation](https://docs.anarlog.so) — installation, offline use, models and providers, data and privacy, FAQ, checked 24 October 2026.',
          '[Anarlog on GitHub](https://github.com/fastrepl/anarlog) — README, MIT license and Releases page (desktop 1.4.31), checked 24 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Meetily Review](/power-local-llm/meetily-review) — a local, open-source meeting notetaker that summarizes through Ollama.',
          '[MacWhisper Review](/power-local-llm/macwhisper-review) — a Mac app for local Whisper and Parakeet transcription.',
          '[Voice and Audio Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — the category comparison this review belongs to.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Anarlog Review: Open-Source AI Meeting Notes, Formerly Hyprnote',
      description:
        'Anarlog review: an open-source, bot-free AI meeting notepad, formerly Hyprnote. Platforms, pricing, what runs locally, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/anarlog-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'People evaluating a bot-free AI meeting notepad' },
      about: [
        { '@type': 'Thing', name: 'Anarlog' },
        { '@type': 'Thing', name: 'AI meeting notes' },
        { '@type': 'Thing', name: 'Local transcription' },
        { '@type': 'Thing', name: 'Hyprnote' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/anarlog-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Anarlog Review', item: 'https://www.promptquorum.com/power-local-llm/anarlog-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/anarlog-review-hero-de.webp',
    title: 'Anarlog-Rezension: Open-Source-KI-Meetingnotizen, früher Hyprnote',
    seoTitle: 'Anarlog-Rezension: KI-Meetingnotizen ohne Bot (Hyprnote)',
    intro:
      'Anarlog ist ein quelloffenes KI-Notizbuch für Meetings von [Fastrepl, Inc.](https://anarlog.so) für macOS, Windows und Linux, das den Ton Ihres Rechners aufzeichnet, ohne einen Bot in den Call zu schicken. Diese Rezension stützt sich auf die offizielle Website, die Dokumentation, die Datenschutzerklärung und das GitHub-Repository, geprüft am 24. Oktober 2026; PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'Anarlog-Rezension: quelloffenes KI-Notizbuch für Meetings ohne Bot, früher Hyprnote. Nimmt lokal auf, läuft auf Apple-Silicon-Macs lokal; ungetestet.',
    twitterDescription:
      'Anarlog-Rezension: quelloffene KI-Meetingnotizen ohne Bot, früher Hyprnote. Was lokal läuft, was in die Cloud geht und was unbestätigt bleibt.',
    audience:
      'Menschen, die ihre Meetings selbst mitschreiben und KI-Zusammenfassungen ohne Bot im Call wünschen und wissen müssen, was lokal läuft, was Geld kostet und was die Quellen offenlassen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Anarlog Rezension',
    targetKeywords: [
      'anarlog rezension',
      'hyprnote anarlog',
      'open source ki meetingnotizen',
      'meeting notetaker ohne bot',
      'lokale ki meeting transkription',
      'granola alternative open source',
      'privates ki notizbuch für meetings',
    ],
    current_models_mentioned: ['Soniqo', 'Parakeet', 'Whisper'],
    current_hardware_mentioned: ['Apple Silicon', 'Mac'],
    leadAnswerBlock:
      '**Anarlog (Version 1.4.31, veröffentlicht am 20. Oktober 2026; Repository zuletzt aktualisiert am 24. Oktober 2026) ist ein quelloffenes Notizbuch, das Meetings auf Ihrem Gerät aufzeichnet und daraus bearbeitbare KI-Zusammenfassungen macht.** Vollständig lokale Nutzung ist möglich, erfordert aber einen Mac mit Apple Silicon; jede Aussage hier stammt von der Website, der Dokumentation und dem Repository des Projekts selbst.',
    quickAnswerTop: {
      de: {
        question: 'Kann Anarlog arbeiten, ohne meine Meetings in die Cloud zu schicken?',
        answer:
          'Laut Projekt ja: Wählen Sie ein Transkriptionsmodell auf dem Gerät und ein lokales Zusammenfassungsmodell, dann bleibt der Inhalt auf dem Rechner. Die eingebaute lokale Transkription setzt einen Mac mit Apple Silicon voraus; unter Windows, Linux und auf Intel-Macs brauchen Sie für das Transkript einen lokalen Deepgram-kompatiblen Server oder einen Cloud-Anbieter.',
        bullets: [
          'Die Aufnahme erfasst Mikrofon und Systemton, ohne dass ein Bot in der Teilnehmerliste erscheint.',
          'Notizen und Transkripte liegen in einer lokalen Datenbank und lassen sich als Markdown exportieren.',
          'Zusammenfassungen und Chat können ein lokales Modell, Ihren eigenen API-Schlüssel oder die kostenpflichtige Anarlog Cloud nutzen.',
          'Ein Diktiermodus tippt Gesprochenes per Tastenkürzel in andere Apps.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Anarlog?', anchor: 'what-is-anarlog' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Anforderungen', anchor: 'requirements' },
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
          {
            type: 'one-sentence',
            text: 'Anarlog ist ein Meeting-Notizbuch unter MIT-Lizenz, das den Ton Ihres Rechners aufnimmt, mit dem gewählten Modell transkribiert und eine bearbeitbare Zusammenfassung schreibt.',
          },
          {
            type: 'plain-terms',
            text: 'Sie notieren während des Calls, die App hört auf Ihrem eigenen Rechner mit, statt dem Call beizutreten, und macht danach aus Ihren Notizen und dem Transkript eine Zusammenfassung.',
          },
        ],
        items: [
          'Pflege: Zwischen dem 20. September und dem 20. Oktober 2026 erschienen sieben stabile Desktop-Releases; ein Warnhinweis für veraltete Projekte entfällt daher.',
          'Lizenz: Die Community-App steht unter MIT; der Ordner für Unternehmen ist einsehbar, aber kommerziell lizenziert.',
          'KI-Wahl: Transkription und Zusammenfassung sind getrennte Einstellungen, jeweils auf dem Gerät, mit eigenem Schlüssel oder über die Anarlog Cloud.',
          'Kosten: Ein kostenloser Tarif deckt die Nutzung auf dem Gerät und mit eigenem Schlüssel ab; gehostete KI ist kostenpflichtig.',
          'Reife: macOS ist die Hauptplattform, die Apps für Windows, Linux und Mobilgeräte sind als Beta gekennzeichnet.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum hat die App weder installiert noch ausgeführt; die Qualität von Transkript und Zusammenfassung wird daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-anarlog',
        title: 'Was ist Anarlog?',
        content: [
            '**Anarlog ist ein quelloffenes KI-Notizbuch für Meetings: Sie schreiben während des Calls mit, die App zeichnet den Ton Ihres Rechners auf, ohne als Bot beizutreten, und erstellt danach eine bearbeitbare Zusammenfassung.** Hersteller ist Fastrepl, Inc.; das Repository beschreibt die App als Open-Source-Alternative zu Granola.',
            'Das Projekt begann als Hyprnote und trug kurz den Namen Char; laut README hat das Team die Arbeit später aufgeteilt, sodass [char.com](https://char.com) heute eine eigene Produktivitäts-App ist und Anarlog dieses Meeting-Notizbuch. In der Dokumentation tauchen noch Dateipfade mit „hyprnote“ auf.',
          ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Anarlog ist ein kostenloser Download für macOS, Windows und Linux; die Installer für macOS und Windows kommen ohne Terminal aus.**',
        ],
        columns: [
          'Option',
          'Bezug',
        ],
        rows: [
          { 'Option': 'macOS', 'Bezug': 'DMG für Apple Silicon und Intel von der [Download-Seite](https://anarlog.so/download) oder aus den [GitHub-Releases](https://github.com/fastrepl/anarlog/releases)' },
          { 'Option': 'Windows', 'Bezug': 'x64-Installer (Beta) oder der Eintrag im [Microsoft Store](https://apps.microsoft.com/detail/XPDLN196NKSW10)' },
          { 'Option': 'Linux', 'Bezug': 'AppImage und DEB für x64 und ARM64 (Beta), ein APT-Repository und ein Arch-PKGBUILD' },
          { 'Option': 'Preis', 'Bezug': 'Kostenloser Tarif; Pro (Cloud) kostet laut Dokumentation 14 $ pro Monat oder 140 $ pro Jahr, in US-Dollar' },
          { 'Option': 'Mobile Beta', 'Bezug': '[TestFlight](https://testflight.apple.com/join/y7WJCXvG) für iOS und [Google-Play-Beta](https://play.google.com/apps/testing/so.anarlog.mobile) für Android' },
          { 'Option': 'Website', 'Bezug': '[anarlog.so](https://anarlog.so)' },
          { 'Option': 'Datenschutzerklärung', 'Bezug': '[anarlog.so/privacy](https://anarlog.so/privacy)' },
          { 'Option': 'Quellcode', 'Bezug': '[github.com/fastrepl/anarlog](https://github.com/fastrepl/anarlog)' },
        ],
        note: 'Die Preisseite wird mit JavaScript gerendert und ließ sich hier nicht auslesen; die Preise stammen deshalb aus der offiziellen Dokumentation, und Tarifinhalte über die Aufteilung in kostenlos und Pro hinaus wurden nicht geprüft.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
          '**Anarlog setzt macOS 15 oder neuer voraus, und die eingebaute lokale Transkription benötigt einen Mac mit Apple Silicon.**',
        ],
        columns: [
          'Punkt',
          'Angaben der Quellen',
        ],
        rows: [
          { 'Punkt': 'macOS', 'Angaben der Quellen': 'macOS 15 oder neuer, Builds für Apple Silicon und Intel' },
          { 'Punkt': 'Windows und Linux', 'Angaben der Quellen': 'Beide sind in der Beta: Windows x64, Linux x64 und ARM64' },
          { 'Punkt': 'Transkription auf dem Gerät', 'Angaben der Quellen': 'Nur Apple Silicon: Soniqo-Modelle, Apple Speech unter macOS 26 oder eine selbst bereitgestellte whisper.cpp-.bin-Datei' },
          { 'Punkt': 'Lokale Zusammenfassungen', 'Angaben der Quellen': 'Ein Modell über Ollama, LM Studio oder Unsloth oder das experimentelle, reine Text-Apple-Intelligence auf einem geeigneten Mac' },
          { 'Punkt': 'Hardware', 'Angaben der Quellen': 'Es werden keine RAM- oder GPU-Anforderungen genannt; die Geschwindigkeit hängt von Rechner und Modell ab' },
        ],
        note: 'Mikrofonerkennung, automatisches Beenden und Erfassen des Meeting-Chats funktionieren nur unter macOS und Linux, die Apple-Kalender-Anbindung nur unter macOS.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt aus der Dokumentation oder der README; PromptQuorum hat keinen davon getestet.**',
        ],
        items: [
          '**Automatische Aufnahme.** Kalendergestützte Meetings können planmäßig starten, und die App kann Sie fragen, wenn sie einen ungeplanten Call erkennt.',
          '**Bearbeitbare Notizen und Transkripte.** Sie schreiben während des Calls Ihr eigenes Memo, bearbeiten den Transkripttext, ordnen Sprecher zu und setzen die Aufnahme in derselben Notiz fort.',
          '**Zusammenfassungen und Chat.** Vorlagen und eine anpassbare Auto-Zusammenfassung erzeugen die Notizen, und der Chat kann Fragen zu einem oder mehreren Meetings beantworten.',
          '**Importe.** Laden Sie eine Audio-, SRT- oder VTT-Datei hoch oder übernehmen Sie den Meetingverlauf anderer Assistenten, darunter Granola-Exporte.',
          '**Agenten und Automatisierung.** Ein Kommandozeilenwerkzeug und ein lokaler MCP-Server lesen die lokale Datenbank, und Webhooks sowie Startvorlagen können Markdown exportieren oder Notizen ablegen.',
        ],
        note: 'Teilen und Cloud Sync sind optionale Extras, die ein Konto erfordern.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
            '**Die Aufnahme findet auf Ihrem Gerät statt, und laut Projekt ist jede Cloud-Funktion optional.** Nach der Datenschutzerklärung, zuletzt aktualisiert am 21. Oktober 2026, werden Notizen, Transkripte und Meetingdaten lokal gespeichert; die README nennt eine lokale SQLite-Datenbank.',
            'Wohin Inhalte gelangen, hängt von Ihren Einstellungen ab: Gehostete Transkription schickt Audio an Spracherkennungsanbieter, die es laut Erklärung nach Abschluss des Auftrags löschen, gehostete Zusammenfassungen senden Text über ein KI-Gateway, und Ihr eigener Schlüssel oder lokaler Server erhält ihn direkt. Laut Erklärung ist Cloud Sync Ende-zu-Ende-verschlüsselt, eine geteilte Notiz liegt lesbar auf den Servern, und die optionale Cloud API hält eine separate lesbare Kopie vor.',
            'Nutzungsanalysen (PostHog) und eine stichprobenartige maskierte Sitzungsaufzeichnung laufen, solange „Share usage data“ aktiv ist, und lassen sich unter „Settings → Privacy“ abschalten.',
          ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Angaben des Projekts, keine Prüfergebnisse, und PromptQuorum hat den Netzwerkverkehr der App nicht untersucht. Laut Erklärung bleiben Absturzberichte auch bei abgeschalteter Nutzungsdatenfreigabe aktiv, während die Dokumentation einen eigenen Schalter dafür beschreibt.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Mac-Nutzer**, die Transkript und Zusammenfassung auf dem eigenen Rechner behalten wollen.',
          '**Wer einen Bot-Notetaker ersetzen möchte** und die Aufnahme vom eigenen Gerät bevorzugt.',
          '**Nutzer mit bestehendem KI-Abo**, das sie für Zusammenfassungen weiterverwenden wollen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Qualität von Transkript und Zusammenfassung.** PromptQuorum hat kein Meeting durch die App laufen lassen; Genauigkeit, Sprecherzuordnung und Qualität der Zusammenfassung werden daher nicht bewertet.',
          '**Lokale Leistung.** Geschwindigkeit und Akkuverbrauch lokaler Modelle bei langen Calls sind ungetestet; laut Dokumentation hängen die Ergebnisse vom Rechner ab.',
          '**Sicherheits- und Datenschutzangaben.** Aussagen zu Verschlüsselung, Löschung und Verzicht auf Training stammen vom Projekt selbst und wurden hier nicht geprüft.',
          '**Aktuelle Preise.** Der Pro-Preis stammt aus den FAQ der Dokumentation, weil die Preisseite nicht lesbar war.',
          '**Windows, Linux und Mobilgeräte.** Das Projekt kennzeichnet diese Builds als Beta, und sie wurden nicht untersucht.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: [
          'App',
          'Plattformen',
          'Preis / Lizenz',
          'Wichtigster Unterschied',
        ],
        rows: [
          { 'App': '[Meetily](/de/power-local-llm/meetily-review)', 'Plattformen': 'Windows, macOS', 'Preis / Lizenz': 'Kostenlose Community Edition / MIT', 'Wichtigster Unterschied': 'Selbst gehosteter Notetaker, dessen Zusammenfassungen über ein lokales Ollama-Modell laufen; laut Projekt ist keine Cloud nötig' },
          { 'App': '[MacWhisper](/de/power-local-llm/macwhisper-review)', 'Plattformen': 'macOS', 'Preis / Lizenz': 'Freemium / proprietär', 'Wichtigster Unterschied': 'Mac-App im Einmalkauf für lokale Whisper- und Parakeet-Transkription, laut Verzeichniseintrag' },
          { 'App': '[Handy](/de/power-local-llm/handy-review)', 'Plattformen': 'macOS, Windows, Linux', 'Preis / Lizenz': 'Kostenlos / MIT', 'Wichtigster Unterschied': 'Diktat per Push-to-talk in jede App, kein Meeting-Notizbuch' },
        ],
        note: 'Prüfen Sie Preis, Lizenz und Plattformen jeder App vor der Wahl im jeweiligen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Muss ich den Teilnehmern sagen, dass ich aufnehme?',
            a: 'Datenschutzerklärung und Dokumentation sagen beide, dass Sie selbst für Hinweis und Einwilligung zuständig sind, wo das Recht sie verlangt, da Aufnahmen auch die Stimmen anderer enthalten können. Anarlog fügt dem Call keinen Teilnehmer hinzu, sodass niemand automatisch informiert wird.',
          },
          {
            q: 'Wie lange speichert Anarlog das Audio?',
            a: 'Unter „Settings → Meetings → Audio file retention“ wählen Sie „Don\'t save“, 1 day, 3 days, 1 week, 1 month oder „Forever“. Danach ist die Aufnahme weg, während Notiz und Transkript bleiben.',
          },
          {
            q: 'Welche Sprachen werden transkribiert?',
            a: 'Die Cloud-Auswahl umfasst eine lange Liste, darunter Arabisch, Japanisch, Koreanisch und Chinesisch. Soniqo transkribiert 25 europäische Sprachen, Apple Speech jeweils eine unterstützte Sprache, und Ihr eigener Anbieter legt seine Liste selbst fest.',
          },
          {
            q: 'Kann ich mein ChatGPT- oder Claude-Abo für Zusammenfassungen nutzen?',
            a: 'Ja, laut Dokumentation: Unter „Settings → Intelligence“ können Sie Claude, ChatGPT, Grok, GitHub Copilot oder Kimi Code verbinden, sodass kein separater API-Schlüssel nötig ist. Jedes Gerät wird einzeln verbunden.',
          },
          {
            q: 'Trainiert das Projekt KI-Modelle mit meinen Meetings?',
            a: 'Die Datenschutzerklärung sagt, dass Notizen, Transkripte, Audio und Kalenderdaten nie zum Training von KI-Modellen verwendet werden. Bei einem eigenen Anbieter gelten stattdessen dessen Aufbewahrungs- und Trainingsrichtlinien.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Anarlog ist ein aktiv veröffentlichter, quelloffener Weg, Meetingnotizen ohne Bot zu führen, mit echter Wahl zwischen lokaler und Cloud-KI für jeden Schritt. Dagegen setzt die eingebaute lokale Transkription einen Mac mit Apple Silicon voraus, die Apps für Windows, Linux und Mobilgeräte sind Beta, gehostete KI ist kostenpflichtig, und keine der Qualitäts- oder Datenschutzangaben ließ sich hier prüfen. Es eignet sich für Mac-Nutzer, die Meetings auf dem eigenen Rechner behalten wollen und den kostenlosen Tarif erst testen können; Teams mit strengen Vertraulichkeitsanforderungen sollten Datenschutzerklärung und Anbietereinstellungen sorgfältig lesen, bevor sie sich darauf verlassen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von Anarlog](https://anarlog.so) — Produktbeschreibung, Download- und Preisseiten, geprüft am 24. Oktober 2026.',
          '[Datenschutzerklärung von Anarlog](https://anarlog.so/privacy) — Datenerhebung, Dienstleister und Abschaltmöglichkeiten, zuletzt aktualisiert am 21. Oktober 2026.',
          '[Dokumentation von Anarlog](https://docs.anarlog.so) — Installation, Offline-Nutzung, Modelle und Anbieter, Daten und Datenschutz, FAQ, geprüft am 24. Oktober 2026.',
          '[Anarlog auf GitHub](https://github.com/fastrepl/anarlog) — README, MIT-Lizenz und Releases-Seite (Desktop 1.4.31), geprüft am 24. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Meetily-Rezension](/de/power-local-llm/meetily-review) — ein lokaler, quelloffener Meeting-Notetaker, der über Ollama zusammenfasst.',
          '[MacWhisper-Rezension](/de/power-local-llm/macwhisper-review) — eine Mac-App für lokale Whisper- und Parakeet-Transkription.',
          '[Sprach- und Audio-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — der Kategorievergleich, zu dem diese Rezension gehört.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/anarlog-review-hero-es.webp',
    title: 'Reseña de Anarlog: notas de reuniones con IA de código abierto, antes Hyprnote',
    seoTitle: 'Reseña de Anarlog: notas de reuniones con IA, sin bot',
    intro:
      'Anarlog es un bloc de notas con IA de código abierto para reuniones, de [Fastrepl, Inc.](https://anarlog.so), para macOS, Windows y Linux, que graba el audio de tu ordenador sin enviar un bot a la llamada. Esta reseña se basa en el sitio oficial, la documentación, la política de privacidad y el repositorio de GitHub, consultados el 24 de octubre de 2026; PromptQuorum no ha probado la app en la práctica.',
    metaDescription:
      'Reseña de Anarlog: bloc de notas con IA de código abierto y sin bot, antes Hyprnote. Graba en tu equipo; en local en Mac con Apple Silicon. Sin probar.',
    twitterDescription:
      'Reseña de Anarlog: notas de reuniones con IA de código abierto sin bot, antes Hyprnote. Qué corre en local, qué va a la nube y qué sigue sin confirmar.',
    audience:
      'Personas que toman sus propias notas de reuniones, quieren resúmenes con IA sin un bot en la llamada y necesitan saber qué se ejecuta en local, qué cuesta dinero y qué dejan abierto las fuentes.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Anarlog',
    targetKeywords: [
      'reseña anarlog',
      'hyprnote anarlog',
      'notas de reuniones con ia de código abierto',
      'notetaker de reuniones sin bot',
      'transcripción de reuniones con ia en local',
      'alternativa a granola de código abierto',
      'bloc de notas con ia privado para reuniones',
    ],
    current_models_mentioned: ['Soniqo', 'Parakeet', 'Whisper'],
    current_hardware_mentioned: ['Apple Silicon', 'Mac'],
    leadAnswerBlock:
      '**Anarlog (versión 1.4.31, publicada el 20 de octubre de 2026; repositorio actualizado por última vez el 24 de octubre de 2026) es un bloc de notas de código abierto que graba las reuniones en tu equipo y las convierte en resúmenes con IA editables.** El uso totalmente local es posible, pero requiere un Mac con Apple Silicon; cada afirmación de aquí procede del sitio, la documentación y el repositorio del propio proyecto.',
    quickAnswerTop: {
      es: {
        question: '¿Puede Anarlog funcionar sin enviar mis reuniones a la nube?',
        answer:
          'Según el proyecto, sí: elige un modelo de transcripción en el dispositivo y un modelo de resumen local, y el contenido se queda en el equipo. La transcripción local integrada requiere un Mac con Apple Silicon; en Windows, Linux y Mac con Intel necesitas un servidor local compatible con Deepgram o un proveedor en la nube para la transcripción.',
        bullets: [
          'La captura cubre micrófono y sonido del sistema, sin ningún bot en la lista de participantes.',
          'Las notas y transcripciones se guardan en una base de datos local y se exportan a Markdown.',
          'Los resúmenes y el chat pueden usar un modelo local, tu propia clave de API o Anarlog Cloud, de pago.',
          'Un modo de dictado escribe lo que dices en otras apps con un atajo.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Anarlog?', anchor: 'what-is-anarlog' },
      { label: 'Dónde conseguirlo', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
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
          {
            type: 'one-sentence',
            text: 'Anarlog es un bloc de notas para reuniones con licencia MIT que captura el audio de tu ordenador, lo transcribe con el modelo que elijas y redacta un resumen editable.',
          },
          {
            type: 'plain-terms',
            text: 'Tomas notas mientras dura la llamada, la app escucha en tu propio equipo en vez de unirse a la llamada y después convierte tus notas y la transcripción en un resumen.',
          },
        ],
        items: [
          'Mantenimiento: entre el 20 de septiembre y el 20 de octubre de 2026 salieron siete versiones estables de escritorio, por lo que no se aplica ningún aviso de proyecto abandonado.',
          'Licencia: la app comunitaria es MIT; la carpeta empresarial es visible, pero con licencia comercial.',
          'Elección de IA: transcripción y resúmenes son ajustes separados, cada uno en el dispositivo, con tu clave o con Anarlog Cloud.',
          'Coste: un plan gratuito cubre el uso en el dispositivo y con clave propia; la IA alojada es de pago.',
          'Madurez: macOS es la plataforma principal, mientras que las apps de Windows, Linux y móvil figuran como beta.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum no ha instalado ni ejecutado la app, así que no se evalúa la calidad de las transcripciones ni de los resúmenes.',
          },
        ],
      },
      overview: {
        id: 'what-is-anarlog',
        title: '¿Qué es Anarlog?',
        content: [
            '**Anarlog es un bloc de notas con IA de código abierto para reuniones: escribes notas durante la llamada, graba el audio de tu ordenador sin unirse como bot y después genera un resumen editable.** Lo desarrolla Fastrepl, Inc., y el repositorio lo describe como una alternativa de código abierto a Granola.',
            'El proyecto empezó como Hyprnote y usó brevemente el nombre Char; según el README, el equipo dividió después el trabajo, de modo que [char.com](https://char.com) es ahora una app de productividad aparte y Anarlog es este bloc de notas para reuniones. Algunas rutas de archivos de la documentación aún dicen «hyprnote».',
          ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**Anarlog se descarga gratis para macOS, Windows y Linux; los instaladores de macOS y Windows no requieren terminal.**',
        ],
        columns: [
          'Opción',
          'Cómo conseguirlo',
        ],
        rows: [
          { 'Opción': 'macOS', 'Cómo conseguirlo': 'DMG para Apple Silicon e Intel desde la [página de descarga](https://anarlog.so/download) o las [versiones de GitHub](https://github.com/fastrepl/anarlog/releases)' },
          { 'Opción': 'Windows', 'Cómo conseguirlo': 'Instalador x64 (beta) o la ficha de [Microsoft Store](https://apps.microsoft.com/detail/XPDLN196NKSW10)' },
          { 'Opción': 'Linux', 'Cómo conseguirlo': 'AppImage y DEB para x64 y ARM64 (beta), un repositorio APT y un PKGBUILD para Arch' },
          { 'Opción': 'Precio', 'Cómo conseguirlo': 'Plan gratuito; Pro (Cloud): 14 $ al mes o 140 $ al año, en dólares según la documentación' },
          { 'Opción': 'Beta móvil', 'Cómo conseguirlo': '[TestFlight](https://testflight.apple.com/join/y7WJCXvG) para iOS y [beta de Google Play](https://play.google.com/apps/testing/so.anarlog.mobile) para Android' },
          { 'Opción': 'Sitio web', 'Cómo conseguirlo': '[anarlog.so](https://anarlog.so)' },
          { 'Opción': 'Política de privacidad', 'Cómo conseguirlo': '[anarlog.so/privacy](https://anarlog.so/privacy)' },
          { 'Opción': 'Código fuente', 'Cómo conseguirlo': '[github.com/fastrepl/anarlog](https://github.com/fastrepl/anarlog)' },
        ],
        note: 'La página de precios se genera con JavaScript y no pudo leerse aquí, por lo que los precios proceden de la documentación oficial; no se comprobó el contenido de los planes más allá de la división entre gratuito y Pro.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**Anarlog necesita macOS 15 o posterior, y su transcripción local integrada requiere un Mac con Apple Silicon.**',
        ],
        columns: [
          'Elemento',
          'Qué dicen las fuentes',
        ],
        rows: [
          { 'Elemento': 'macOS', 'Qué dicen las fuentes': 'macOS 15 o posterior, con versiones para Apple Silicon e Intel' },
          { 'Elemento': 'Windows y Linux', 'Qué dicen las fuentes': 'Ambos están en beta: Windows x64, Linux x64 y ARM64' },
          { 'Elemento': 'Transcripción en el dispositivo', 'Qué dicen las fuentes': 'Solo Apple Silicon: modelos Soniqo, Apple Speech en macOS 26 o un archivo whisper.cpp .bin que aportes' },
          { 'Elemento': 'Resúmenes locales', 'Qué dicen las fuentes': 'Un modelo servido por Ollama, LM Studio o Unsloth, o Apple Intelligence experimental, solo texto, en un Mac compatible' },
          { 'Elemento': 'Hardware', 'Qué dicen las fuentes': 'No se indica ningún requisito de RAM ni de GPU; la velocidad depende del equipo y del modelo' },
        ],
        note: 'La detección del micrófono, la parada automática y la captura del chat de la reunión solo funcionan en macOS y Linux, y la integración con Apple Calendar solo en macOS.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada punto de abajo procede de la documentación o del README; PromptQuorum no ha probado ninguno.**',
        ],
        items: [
          '**Captura automática.** Las reuniones vinculadas al calendario pueden empezar a la hora prevista, y la app puede avisarte cuando detecta una llamada no programada.',
          '**Notas y transcripciones editables.** Escribes tu propio memo durante la llamada, editas el texto de la transcripción, asignas hablantes y reanudas la escucha en la misma nota.',
          '**Resúmenes y chat.** Plantillas y un resumen Auto personalizable generan las notas, y el chat responde preguntas sobre una o varias reuniones.',
          '**Importaciones.** Sube un archivo de audio, SRT o VTT, o trae el historial de reuniones de otros asistentes, incluidas exportaciones de Granola.',
          '**Agentes y automatización.** Una herramienta de línea de comandos y un servidor MCP local leen la base de datos local, y webhooks y flujos de partida pueden exportar Markdown o archivar notas.',
        ],
        note: 'Compartir y Cloud Sync son extras opcionales que requieren una cuenta.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
            '**La grabación ocurre en tu dispositivo y, según el proyecto, toda función en la nube es opcional.** Según la política de privacidad, actualizada el 21 de octubre de 2026, las notas, transcripciones y datos de reuniones se almacenan en local; el README menciona una base de datos SQLite local.',
            'El destino del contenido depende de tus ajustes: la transcripción alojada envía el audio a proveedores de voz a texto que, según la política, lo eliminan al terminar la tarea; los resúmenes alojados envían texto a través de una pasarela de IA, y tu propia clave o servidor local lo recibe directamente. Según la política, Cloud Sync está cifrado de extremo a extremo, una nota compartida se guarda legible en los servidores y la Cloud API opcional mantiene una copia legible aparte.',
            'Las analíticas de uso (PostHog) y una reproducción de sesión enmascarada por muestreo funcionan mientras «Share usage data» esté activado y pueden desactivarse en «Settings → Privacy».',
          ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del proyecto, no resultados de una auditoría, y PromptQuorum no ha inspeccionado el tráfico de red de la app. La política dice que los informes de fallos siguen activos cuando se desactiva el uso compartido de datos, mientras que la documentación describe un interruptor aparte para ellos.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Usuarios de Mac** que quieren mantener transcripción y resumen en su propio equipo.',
          '**Quienes sustituyen un notetaker con bot** y prefieren capturar desde su propio dispositivo.',
          '**Usuarios con una suscripción de IA** que quieren reutilizarla para los resúmenes.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad de transcripciones y resúmenes.** PromptQuorum no pasó ninguna reunión por la app, así que no se evalúan la precisión, la asignación de hablantes ni la calidad de los resúmenes.',
          '**Rendimiento local.** La velocidad y el consumo de batería de los modelos en el dispositivo en llamadas largas no se han probado; según la documentación, los resultados dependen del equipo.',
          '**Afirmaciones de seguridad y privacidad.** Las declaraciones sobre cifrado, borrado y ausencia de entrenamiento son del propio proyecto y no se han auditado aquí.',
          '**Precios actuales.** El precio de Pro procede de las preguntas frecuentes de la documentación porque la página de precios no pudo leerse.',
          '**Windows, Linux y móvil.** El proyecto marca estas versiones como beta y no se examinaron.',
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
          'Diferencia clave',
        ],
        rows: [
          { 'App': '[Meetily](/es/power-local-llm/meetily-review)', 'Plataformas': 'Windows, macOS', 'Precio / licencia': 'Community Edition gratuita / MIT', 'Diferencia clave': 'Notetaker autoalojado cuyos resúmenes pasan por un modelo local de Ollama; según el proyecto, no hace falta la nube' },
          { 'App': '[MacWhisper](/es/power-local-llm/macwhisper-review)', 'Plataformas': 'macOS', 'Precio / licencia': 'Freemium / propietario', 'Diferencia clave': 'App de Mac de compra única para transcripción local con Whisper y Parakeet, según la ficha del directorio' },
          { 'App': '[Handy](/es/power-local-llm/handy-review)', 'Plataformas': 'macOS, Windows, Linux', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Dictado con pulsar para hablar en cualquier app, no un bloc de notas de reuniones' },
        ],
        note: 'Confirma el precio, la licencia y las plataformas de cada app en su propia ficha antes de elegir.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Tengo que avisar de que estoy grabando?',
            a: 'La política de privacidad y la documentación dicen que eres responsable del aviso y del consentimiento donde la ley los exija, porque las grabaciones pueden incluir las voces de otras personas. Anarlog no añade ningún participante a la llamada, así que nadie recibe un aviso automático.',
          },
          {
            q: '¿Cuánto tiempo conserva Anarlog el audio?',
            a: 'En «Settings → Meetings → Audio file retention» puedes elegir Don’t save, 1 day, 3 days, 1 week, 1 month o Forever. Pasado ese plazo la grabación desaparece, mientras que la nota y la transcripción permanecen.',
          },
          {
            q: '¿Qué idiomas transcribe?',
            a: 'El selector de Cloud cubre una lista larga que incluye árabe, japonés, coreano y chino. Soniqo transcribe 25 idiomas europeos, Apple Speech un idioma compatible a la vez, y tu propio proveedor define su lista.',
          },
          {
            q: '¿Puedo usar mi suscripción de ChatGPT o Claude para los resúmenes?',
            a: 'Sí, según la documentación: en «Settings → Intelligence» puedes conectar Claude, ChatGPT, Grok, GitHub Copilot o Kimi Code, sin clave de API aparte. Cada dispositivo se conecta por separado.',
          },
          {
            q: '¿Entrena el proyecto modelos de IA con mis reuniones?',
            a: 'La política de privacidad dice que nunca usa notas, transcripciones, audio ni datos del calendario para entrenar modelos de IA. Con tu propio proveedor se aplican en su lugar las políticas de retención y entrenamiento de ese proveedor.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Anarlog es una forma de código abierto y con lanzamientos activos de tomar notas de reuniones sin bot, con una elección real entre IA local y en la nube en cada paso. En contra, la transcripción local integrada requiere un Mac con Apple Silicon, las apps de Windows, Linux y móvil están en beta, la IA alojada es de pago y no se pudo comprobar ninguna afirmación de calidad ni de privacidad. Encaja con usuarios de Mac que quieren mantener las reuniones en su equipo y pueden probar antes el plan gratuito; los equipos con requisitos estrictos de confidencialidad deberían leer con atención la política de privacidad y los ajustes de proveedor antes de depender de ella.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Anarlog](https://anarlog.so) — presentación del producto, páginas de descarga y precios, consultadas el 24 de octubre de 2026.',
          '[Política de privacidad de Anarlog](https://anarlog.so/privacy) — recogida de datos, proveedores y opciones de desactivación, actualizada el 21 de octubre de 2026.',
          '[Documentación de Anarlog](https://docs.anarlog.so) — instalación, uso sin conexión, modelos y proveedores, datos y privacidad, preguntas frecuentes, consultada el 24 de octubre de 2026.',
          '[Anarlog en GitHub](https://github.com/fastrepl/anarlog) — README, licencia MIT y página de versiones (escritorio 1.4.31), consultados el 24 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Meetily](/es/power-local-llm/meetily-review) — un notetaker de reuniones local y de código abierto que resume mediante Ollama.',
          '[Reseña de MacWhisper](/es/power-local-llm/macwhisper-review) — una app de Mac para transcripción local con Whisper y Parakeet.',
          '[Herramientas de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — la comparativa de categoría a la que pertenece esta reseña.',
          '[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/anarlog-review-hero-fr.webp',
    title: 'Test d’Anarlog : notes de réunion IA open source, ex-Hyprnote',
    seoTitle: 'Test d’Anarlog : notes de réunion IA sans robot (Hyprnote)',
    intro:
      'Anarlog est un bloc-notes IA open source pour réunions, édité par [Fastrepl, Inc.](https://anarlog.so), disponible sur macOS, Windows et Linux, qui enregistre le son de votre ordinateur sans envoyer de robot dans l’appel. Ce test s’appuie sur le site officiel, la documentation, la politique de confidentialité et le dépôt GitHub, consultés le 24 octobre 2026 ; PromptQuorum n’a pas testé l’application en conditions réelles.',
    metaDescription:
      'Test d’Anarlog : bloc-notes IA open source sans robot, ex-Hyprnote. Enregistre sur l’appareil, fonctionne en local sur Mac Apple Silicon ; non testé.',
    twitterDescription:
      'Test d’Anarlog : notes de réunion IA open source sans robot, ex-Hyprnote. Ce qui tourne en local, ce qui part dans le cloud et ce qui reste non confirmé.',
    audience:
      'Les personnes qui prennent elles-mêmes leurs notes de réunion, veulent des résumés IA sans robot dans l’appel et doivent savoir ce qui tourne en local, ce qui est payant et ce que les sources laissent ouvert.',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test Anarlog',
    targetKeywords: [
      'test anarlog',
      'hyprnote anarlog',
      'notes de réunion ia open source',
      'prise de notes de réunion sans robot',
      'transcription de réunion ia locale',
      'alternative granola open source',
      'bloc-notes ia privé pour réunions',
    ],
    current_models_mentioned: ['Soniqo', 'Parakeet', 'Whisper'],
    current_hardware_mentioned: ['Apple Silicon', 'Mac'],
    leadAnswerBlock:
      '**Anarlog (version 1.4.31, publiée le 20 octobre 2026 ; dépôt mis à jour le 24 octobre 2026) est un bloc-notes open source qui enregistre vos réunions sur votre appareil et en tire des résumés IA modifiables.** Une utilisation entièrement locale est possible mais exige un Mac Apple Silicon ; chaque affirmation ici provient du site, de la documentation et du dépôt du projet lui-même.',
    quickAnswerTop: {
      fr: {
        question: 'Anarlog peut-il fonctionner sans envoyer mes réunions dans le cloud ?',
        answer:
          'Selon le projet, oui : choisissez un modèle de transcription sur l’appareil et un modèle de résumé local, et le contenu reste sur l’ordinateur. La transcription locale intégrée exige un Mac Apple Silicon ; sous Windows, Linux et sur les Mac Intel, il faut un serveur local compatible Deepgram ou un fournisseur cloud pour la transcription.',
        bullets: [
          'La capture couvre le micro et le son système, sans robot dans la liste des participants.',
          'Notes et transcriptions sont stockées dans une base locale et exportables en Markdown.',
          'Résumés et chat peuvent utiliser un modèle local, votre propre clé API ou Anarlog Cloud, payant.',
          'Un mode dictée saisit la voix dans d’autres applications via un raccourci.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce que Anarlog ?', anchor: 'what-is-anarlog' },
      { label: 'Où l’obtenir', anchor: 'get-it' },
      { label: 'Prérequis', anchor: 'requirements' },
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
          {
            type: 'one-sentence',
            text: 'Anarlog est un bloc-notes de réunion sous licence MIT qui capte le son de votre ordinateur, le transcrit avec le modèle choisi et rédige un résumé modifiable.',
          },
          {
            type: 'plain-terms',
            text: 'Vous prenez des notes pendant l’appel, l’application écoute sur votre propre machine au lieu de rejoindre l’appel, puis transforme vos notes et la transcription en résumé.',
          },
        ],
        items: [
          'Maintenance : sept versions stables du bureau sont sorties entre le 20 septembre et le 20 octobre 2026 ; aucun avertissement de projet abandonné ne s’applique.',
          'Licence : l’application communautaire est sous MIT ; le dossier entreprise est consultable mais sous licence commerciale.',
          'Choix de l’IA : transcription et résumés sont deux réglages distincts, chacun sur l’appareil, avec votre clé ou via Anarlog Cloud.',
          'Coût : une offre gratuite couvre l’usage sur l’appareil et avec votre clé ; l’IA hébergée est payante.',
          'Maturité : macOS est la plateforme principale, les applications Windows, Linux et mobiles sont signalées comme bêta.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum n’a ni installé ni exécuté l’application ; la qualité des transcriptions et des résumés n’est donc pas évaluée.',
          },
        ],
      },
      overview: {
        id: 'what-is-anarlog',
        title: 'Qu’est-ce que Anarlog ?',
        content: [
            '**Anarlog est un bloc-notes IA open source pour réunions : vous prenez des notes pendant l’appel, il enregistre le son de votre ordinateur sans rejoindre l’appel comme robot, puis produit un résumé modifiable.** Il est édité par Fastrepl, Inc., et le dépôt le présente comme une alternative open source à Granola.',
            'Le projet a débuté sous le nom Hyprnote et a brièvement porté celui de Char ; selon le README, l’équipe a ensuite scindé le travail : [char.com](https://char.com) est désormais une application de productivité distincte et Anarlog est ce bloc-notes de réunion. Certains chemins de fichiers de la documentation contiennent encore « hyprnote ».',
          ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Anarlog se télécharge gratuitement pour macOS, Windows et Linux ; les installateurs macOS et Windows ne demandent pas de terminal.**',
        ],
        columns: [
          'Option',
          'Comment l’obtenir',
        ],
        rows: [
          { 'Option': 'macOS', 'Comment l’obtenir': 'DMG pour Apple Silicon et Intel depuis la [page de téléchargement](https://anarlog.so/download) ou les [versions GitHub](https://github.com/fastrepl/anarlog/releases)' },
          { 'Option': 'Windows', 'Comment l’obtenir': 'Installateur x64 (bêta) ou fiche du [Microsoft Store](https://apps.microsoft.com/detail/XPDLN196NKSW10)' },
          { 'Option': 'Linux', 'Comment l’obtenir': 'AppImage et DEB pour x64 et ARM64 (bêta), un dépôt APT et un PKGBUILD Arch' },
          { 'Option': 'Tarif', 'Comment l’obtenir': 'Offre gratuite ; Pro (Cloud) coûte 14 $ par mois ou 140 $ par an, en dollars américains selon la documentation' },
          { 'Option': 'Bêta mobile', 'Comment l’obtenir': '[TestFlight](https://testflight.apple.com/join/y7WJCXvG) pour iOS et [bêta Google Play](https://play.google.com/apps/testing/so.anarlog.mobile) pour Android' },
          { 'Option': 'Site web', 'Comment l’obtenir': '[anarlog.so](https://anarlog.so)' },
          { 'Option': 'Confidentialité', 'Comment l’obtenir': '[anarlog.so/privacy](https://anarlog.so/privacy)' },
          { 'Option': 'Code source', 'Comment l’obtenir': '[github.com/fastrepl/anarlog](https://github.com/fastrepl/anarlog)' },
        ],
        note: 'La page des tarifs s’affiche avec JavaScript et n’a pas pu être lue ici ; les prix proviennent donc de la documentation officielle, et le contenu des offres au-delà de la séparation gratuit et Pro n’a pas été vérifié.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**Anarlog exige macOS 15 ou plus récent, et sa transcription locale intégrée demande un Mac Apple Silicon.**',
        ],
        columns: [
          'Élément',
          'Ce que disent les sources',
        ],
        rows: [
          { 'Élément': 'macOS', 'Ce que disent les sources': 'macOS 15 ou plus récent, versions Apple Silicon et Intel' },
          { 'Élément': 'Windows et Linux', 'Ce que disent les sources': 'Tous deux en bêta : Windows x64, Linux x64 et ARM64' },
          { 'Élément': 'Transcription sur l’appareil', 'Ce que disent les sources': 'Apple Silicon uniquement : modèles Soniqo, Apple Speech sous macOS 26, ou un fichier whisper.cpp .bin que vous fournissez' },
          { 'Élément': 'Résumés locaux', 'Ce que disent les sources': 'Un modèle servi par Ollama, LM Studio ou Unsloth, ou Apple Intelligence expérimental, texte seul, sur un Mac compatible' },
          { 'Élément': 'Matériel', 'Ce que disent les sources': 'Aucune exigence de RAM ou de GPU n’est indiquée ; la vitesse dépend de l’ordinateur et du modèle' },
        ],
        note: 'La détection du micro, l’arrêt automatique et la capture du chat de réunion ne fonctionnent que sous macOS et Linux, et l’intégration d’Apple Calendar que sous macOS.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque point ci-dessous provient de la documentation ou du README ; PromptQuorum n’en a testé aucun.**',
        ],
        items: [
          '**Capture automatique.** Les réunions liées à l’agenda peuvent démarrer à l’heure prévue, et l’application peut vous proposer d’enregistrer quand elle détecte un appel non planifié.',
          '**Notes et transcriptions modifiables.** Vous rédigez votre propre mémo pendant l’appel, modifiez le texte de la transcription, attribuez les intervenants et reprenez l’écoute dans la même note.',
          '**Résumés et chat.** Des modèles et un résumé Auto personnalisable produisent les notes, et le chat répond à des questions sur une ou plusieurs réunions.',
          '**Imports.** Importez un fichier audio, SRT ou VTT, ou l’historique de réunions d’autres assistants, dont les exports Granola.',
          '**Agents et automatisation.** Un outil en ligne de commande et un serveur MCP local lisent la base locale, et des webhooks et modèles de démarrage peuvent exporter en Markdown ou classer les notes.',
        ],
        note: 'Le partage et Cloud Sync sont des options qui nécessitent un compte.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
            '**L’enregistrement se fait sur votre appareil, et selon le projet toutes les fonctions cloud sont facultatives.** D’après la politique de confidentialité, mise à jour le 21 octobre 2026, notes, transcriptions et données de réunion sont stockées localement ; le README mentionne une base SQLite locale.',
            'La destination du contenu dépend de vos réglages : la transcription hébergée envoie l’audio à des fournisseurs de reconnaissance vocale que la politique dit le supprimer une fois la tâche terminée, les résumés hébergés envoient du texte via une passerelle IA, et votre propre clé ou serveur local le reçoit directement. Selon la politique, Cloud Sync est chiffré de bout en bout, une note partagée est stockée en clair sur les serveurs, et l’API cloud facultative conserve une copie lisible distincte.',
            'Les statistiques d’usage (PostHog) et un échantillon d’enregistrements de session masqués fonctionnent tant que « Share usage data » est activé, et se désactivent sous « Settings → Privacy ».',
          ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations du projet, pas des résultats d’audit, et PromptQuorum n’a pas inspecté le trafic réseau de l’application. La politique indique que les rapports de plantage restent actifs quand le partage des données d’usage est coupé, alors que la documentation décrit un interrupteur distinct.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle s’adresse',
        items: [
          '**Utilisateurs de Mac** qui veulent garder transcription et résumé sur leur machine.',
          '**Ceux qui remplacent un outil à robot** et préfèrent capter depuis leur propre appareil.',
          '**Utilisateurs d’un abonnement IA existant** qu’ils veulent réutiliser pour les résumés.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité des transcriptions et résumés.** PromptQuorum n’a fait passer aucune réunion dans l’application ; précision, attribution des intervenants et qualité des résumés ne sont donc pas évaluées.',
          '**Performance locale.** La vitesse et la consommation de batterie des modèles sur l’appareil pour de longs appels n’ont pas été testées ; selon la documentation, les résultats dépendent de l’ordinateur.',
          '**Affirmations de sécurité et de confidentialité.** Les déclarations sur le chiffrement, la suppression et l’absence d’entraînement viennent du projet et n’ont pas été auditées ici.',
          '**Tarifs actuels.** Le prix Pro provient de la FAQ de la documentation, la page des tarifs n’étant pas lisible.',
          '**Windows, Linux et mobile.** Le projet signale ces versions comme bêta, et elles n’ont pas été examinées.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: [
          'Application',
          'Plateformes',
          'Prix / licence',
          'Différence clé',
        ],
        rows: [
          { 'Application': '[Meetily](/fr/power-local-llm/meetily-review)', 'Plateformes': 'Windows, macOS', 'Prix / licence': 'Community Edition gratuite / MIT', 'Différence clé': 'Outil auto-hébergé dont les résumés passent par un modèle Ollama local ; selon le projet, aucun cloud n’est requis' },
          { 'Application': '[MacWhisper](/fr/power-local-llm/macwhisper-review)', 'Plateformes': 'macOS', 'Prix / licence': 'Freemium / propriétaire', 'Différence clé': 'Application Mac en achat unique pour la transcription locale Whisper et Parakeet, selon la fiche de l’annuaire' },
          { 'Application': '[Handy](/fr/power-local-llm/handy-review)', 'Plateformes': 'macOS, Windows, Linux', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Dictée push-to-talk dans n’importe quelle application, pas un bloc-notes de réunion' },
        ],
        note: 'Vérifiez le prix, la licence et les plateformes de chaque application sur sa propre fiche avant de choisir.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Dois-je prévenir les participants que j’enregistre ?',
            a: 'La politique de confidentialité et la documentation indiquent toutes deux que vous êtes responsable de l’information et du consentement quand la loi l’exige, car les enregistrements peuvent contenir la voix d’autres personnes. Anarlog n’ajoute aucun participant à l’appel, personne n’est donc prévenu automatiquement.',
          },
          {
            q: 'Combien de temps Anarlog conserve-t-il l’audio ?',
            a: 'Sous « Settings → Meetings → Audio file retention », vous choisissez Don’t save, 1 day, 3 days, 1 week, 1 month ou Forever. Passé ce délai, l’enregistrement disparaît, tandis que la note et la transcription restent.',
          },
          {
            q: 'Quelles langues sont transcrites ?',
            a: 'Le sélecteur Cloud couvre une longue liste incluant l’arabe, le japonais, le coréen et le chinois. Soniqo transcrit 25 langues européennes, Apple Speech une seule langue prise en charge à la fois, et votre propre fournisseur fixe sa liste.',
          },
          {
            q: 'Puis-je utiliser mon abonnement ChatGPT ou Claude pour les résumés ?',
            a: 'Oui, selon la documentation : sous « Settings → Intelligence », vous pouvez connecter Claude, ChatGPT, Grok, GitHub Copilot ou Kimi Code, sans clé API distincte. Chaque appareil se connecte séparément.',
          },
          {
            q: 'Le projet entraîne-t-il des modèles d’IA avec mes réunions ?',
            a: 'La politique de confidentialité indique qu’elle n’utilise jamais notes, transcriptions, audio ou données d’agenda pour entraîner des modèles d’IA. Avec votre propre fournisseur, ce sont ses règles de conservation et d’entraînement qui s’appliquent.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Anarlog est un moyen open source, publié activement, de prendre des notes de réunion sans robot, avec un vrai choix entre IA locale et cloud à chaque étape. En contrepartie, la transcription locale intégrée exige un Mac Apple Silicon, les applications Windows, Linux et mobiles sont en bêta, l’IA hébergée est payante, et aucune affirmation de qualité ou de confidentialité n’a pu être vérifiée ici. Il convient aux utilisateurs de Mac qui veulent garder leurs réunions sur leur machine et peuvent d’abord essayer l’offre gratuite ; les équipes soumises à de fortes exigences de confidentialité devraient lire attentivement la politique de confidentialité et les réglages des fournisseurs avant de s’y fier.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site d’Anarlog](https://anarlog.so) — présentation du produit, pages de téléchargement et de tarifs, consultés le 24 octobre 2026.',
          '[Politique de confidentialité d’Anarlog](https://anarlog.so/privacy) — collecte de données, prestataires et options de désactivation, mise à jour le 21 octobre 2026.',
          '[Documentation d’Anarlog](https://docs.anarlog.so) — installation, usage hors ligne, modèles et fournisseurs, données et confidentialité, FAQ, consultées le 24 octobre 2026.',
          '[Anarlog sur GitHub](https://github.com/fastrepl/anarlog) — README, licence MIT et page des versions (bureau 1.4.31), consultés le 24 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Meetily](/fr/power-local-llm/meetily-review) — un outil de notes de réunion local et open source qui résume via Ollama.',
          '[Test de MacWhisper](/fr/power-local-llm/macwhisper-review) — une application Mac de transcription locale Whisper et Parakeet.',
          '[Comparatif des outils voix et audio](/fr/power-local-llm/local-llm-voice-audio-compared) — le comparatif de catégorie auquel appartient ce test.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/anarlog-review-hero-ja.webp',
    title: 'Anarlogレビュー：旧Hyprnote、オープンソースのAI議事メモ',
    seoTitle: 'Anarlogレビュー：ボット不要のAI議事メモ（旧Hyprnote）',
    intro:
      'Anarlogは[Fastrepl, Inc.](https://anarlog.so)が提供する、macOS・Windows・Linux向けのオープンソースAI議事メモアプリで、会議にボットを参加させずにパソコンの音声を録音します。このレビューは公式サイト、ドキュメント、プライバシーポリシー、GitHubリポジトリ（2026年10月24日確認）に基づいており、PromptQuorumは実機での検証を行っていません。',
    metaDescription:
      'Anarlogのレビュー。旧Hyprnoteのオープンソース製AI議事メモで、ボット不要。端末内で録音し、Apple SiliconのMacではローカル処理も可能。未検証。',
    twitterDescription:
      'Anarlogレビュー：旧Hyprnoteのボット不要オープンソースAI議事メモ。ローカルで動く部分、クラウドに送られる部分、未確認の点を整理します。',
    audience:
      '自分で会議メモを取りつつ、ボットなしのAI要約を使いたい方。ローカルで動く部分、料金がかかる部分、情報源が明らかにしていない点を知りたい方向けです。',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Anarlog レビュー',
    targetKeywords: [
      'anarlog レビュー',
      'hyprnote anarlog',
      'オープンソース ai 議事メモ',
      'ボットなし 議事録アプリ',
      'ローカル ai 会議 文字起こし',
      'granola 代替 オープンソース',
      '会議用 プライベート ai メモ',
    ],
    current_models_mentioned: ['Soniqo', 'Parakeet', 'Whisper'],
    current_hardware_mentioned: ['Apple Silicon', 'Mac'],
    leadAnswerBlock:
      '**Anarlog（バージョン1.4.31、2026年10月20日公開。リポジトリの最終更新は2026年10月24日）は、会議を端末上で録音し、編集可能なAI要約にまとめるオープンソースのメモアプリです。** 完全なローカル利用は可能ですが、Apple SiliconのMacが必要です。本文の記述はすべてプロジェクト自身のサイト、ドキュメント、リポジトリに基づきます。',
    quickAnswerTop: {
      ja: {
        question: 'Anarlogは会議の内容をクラウドに送らずに使えますか？',
        answer:
          'プロジェクトによれば可能です。端末内の文字起こしモデルとローカルの要約モデルを選べば、内容はパソコンの外に出ません。内蔵のローカル文字起こしはApple SiliconのMacが前提で、Windows、Linux、Intel Macでは、ローカルのDeepgram互換サーバーかクラウドのプロバイダーが文字起こしに必要です。',
        bullets: [
          'マイクとシステム音声を録音し、参加者リストにボットは現れません。',
          'メモと文字起こしはローカルのデータベースに保存され、Markdownで書き出せます。',
          '要約とチャットには、ローカルモデル、自分のAPIキー、有料のAnarlog Cloudを使えます。',
          'ショートカットで音声を他のアプリに入力するディクテーション機能があります。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Anarlogとは', anchor: 'what-is-anarlog' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '動作要件', anchor: 'requirements' },
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
          {
            type: 'one-sentence',
            text: 'AnarlogはMITライセンスの会議メモアプリで、パソコンの音声を取り込み、選んだモデルで文字起こしし、編集可能な要約を作成します。',
          },
          {
            type: 'plain-terms',
            text: '通話中にメモを取ると、アプリは会議に参加せず自分のパソコンで音声を聞き取り、終了後にメモと文字起こしから要約を作ります。',
          },
        ],
        items: [
          '保守状況：2026年9月20日から10月20日の間に安定版のデスクトップリリースが7回あり、放置プロジェクトの警告は該当しません。',
          'ライセンス：コミュニティ版はMITで、エンタープライズ用フォルダーはソースが見られるものの商用ライセンスです。',
          'AIの選択：文字起こしと要約は別設定で、それぞれ端末内、自分のキー、Anarlog Cloudから選べます。',
          '費用：無料プランで端末内と自分のキーを使え、ホスト型AIは有料プランです。',
          '成熟度：主力はmacOSで、Windows、Linux、モバイル版はベータと表示されています。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorumはアプリをインストール・実行しておらず、文字起こしと要約の品質は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-anarlog',
        title: 'Anarlogとは',
        content: [
            '**Anarlogは会議向けのオープンソースAIメモアプリです。通話中にメモを取ると、ボットとして参加せずにパソコンの音声を録音し、終了後に編集可能な要約を作成します。** 開発元はFastrepl, Inc.で、リポジトリはGranolaのオープンソース代替と説明しています。',
            'プロジェクトはHyprnoteとして始まり、一時期Charという名前でした。READMEによれば、その後チームが作業を分割し、[char.com](https://char.com)は別の生産性アプリ、Anarlogはこの会議メモアプリになりました。ドキュメント内のファイルパスには今も「hyprnote」と書かれている箇所があります。',
          ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**AnarlogはmacOS・Windows・Linux向けに無料でダウンロードでき、macOSとWindowsのインストーラーはターミナル不要です。**',
        ],
        columns: [
          '項目',
          '入手方法',
        ],
        rows: [
          { '項目': 'macOS', '入手方法': 'Apple Silicon版とIntel版のDMGを[ダウンロードページ](https://anarlog.so/download)または[GitHubリリース](https://github.com/fastrepl/anarlog/releases)から入手' },
          { '項目': 'Windows', '入手方法': 'x64インストーラー（ベータ）または[Microsoft Store](https://apps.microsoft.com/detail/XPDLN196NKSW10)の掲載ページ' },
          { '項目': 'Linux', '入手方法': 'x64とARM64向けのAppImageとDEB（ベータ）、APTリポジトリ、Arch用PKGBUILD' },
          { '項目': '料金', '入手方法': '無料プランあり。Pro（Cloud）はドキュメントによれば月額14ドルまたは年額140ドル（米ドル表記）' },
          { '項目': 'モバイルベータ', '入手方法': 'iOSは[TestFlight](https://testflight.apple.com/join/y7WJCXvG)、Androidは[Google Playベータ](https://play.google.com/apps/testing/so.anarlog.mobile)' },
          { '項目': '公式サイト', '入手方法': '[anarlog.so](https://anarlog.so)' },
          { '項目': 'プライバシーポリシー', '入手方法': '[anarlog.so/privacy](https://anarlog.so/privacy)' },
          { '項目': 'ソースコード', '入手方法': '[github.com/fastrepl/anarlog](https://github.com/fastrepl/anarlog)' },
        ],
        note: '料金ページはJavaScriptで描画されるため今回は読み取れず、価格は公式ドキュメントに基づきます。無料プランとProの区分を超えるプランの内容は確認していません。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: [
          '**AnarlogはmacOS 15以降が必要で、内蔵のローカル文字起こしにはApple SiliconのMacが必要です。**',
        ],
        columns: [
          '項目',
          '情報源の記載',
        ],
        rows: [
          { '項目': 'macOS', '情報源の記載': 'macOS 15以降。Apple Silicon版とIntel版あり' },
          { '項目': 'WindowsとLinux', '情報源の記載': 'どちらもベータ：Windows x64、Linux x64とARM64' },
          { '項目': '端末内の文字起こし', '情報源の記載': 'Apple Siliconのみ：Soniqoモデル、macOS 26のApple Speech、または自分で用意したwhisper.cppの.binファイル' },
          { '項目': 'ローカル要約', '情報源の記載': 'Ollama、LM Studio、Unslothで提供するモデル、または対応Macの実験的なテキスト専用Apple Intelligence' },
          { '項目': 'ハードウェア', '情報源の記載': 'RAMやGPUの要件は記載なし。速度はパソコンとモデルによって変わります' },
        ],
        note: 'マイク検出、自動停止、会議チャットの取り込みはmacOSとLinuxのみで、Apple CalendarとのつながりはmacOSのみです。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下はいずれもドキュメントまたはREADMEの記述で、PromptQuorumは検証していません。**',
        ],
        items: [
          '**自動キャプチャ。** カレンダー連携の会議を予定時刻に開始でき、予定外の通話を検出すると録音を促します。',
          '**編集できるメモと文字起こし。** 通話中に自分のメモを書き、文字起こしの文章を編集し、話者を割り当て、同じノートで録音を再開できます。',
          '**要約とチャット。** テンプレートとカスタマイズ可能なAuto要約でノートを作り、チャットで1件または複数の会議について質問できます。',
          '**インポート。** 音声、SRT、VTTファイルのほか、Granolaのエクスポートを含む他のアシスタントの会議履歴を取り込めます。',
          '**エージェントと自動化。** コマンドラインツールとローカルMCPサーバーがローカルのデータベースを読み、Webhookやスターター用ワークフローでMarkdownの書き出しやノートの整理ができます。',
        ],
        note: '共有とCloud Syncはアカウントが必要な任意の追加機能です。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
            '**録音は端末上で行われ、プロジェクトによればクラウド機能はすべて任意です。** 2026年10月21日更新のプライバシーポリシーによると、メモ、文字起こし、会議データはローカルに保存され、READMEはローカルのSQLiteデータベースに言及しています。',
            '内容の送信先は設定次第です。ホスト型の文字起こしは音声を音声認識プロバイダーに送り、ポリシーによれば処理完了後に削除されます。ホスト型の要約はAIゲートウェイ経由でテキストを送り、自分のキーやローカルサーバーなら直接送られます。ポリシーによれば、Cloud Syncはエンドツーエンドで暗号化され、共有ノートはサーバー上で読める形で保存され、任意のCloud APIは別の読める形のコピーを保持します。',
            '利用状況の分析（PostHog）と、サンプリングされたマスク付きセッションリプレイは「Share usage data」がオンの間動作し、「Settings → Privacy」でオフにできます。',
          ],
        callouts: [
          {
            type: 'note',
            text: 'これらはプロジェクト自身の表明であり、監査結果ではありません。PromptQuorumはアプリの通信を調べていません。ポリシーは利用データの共有をオフにしてもクラッシュレポートは続くとしていますが、ドキュメントには別のスイッチがあると書かれています。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**Macユーザー**で、文字起こしと要約を自分のパソコン内に留めたい方。',
          '**ボット型の議事録ツールからの乗り換え**で、自分の端末から録音したい方。',
          '**AIサブスクリプション契約済み**で、要約にも使い回したい方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**文字起こしと要約の品質。** PromptQuorumはアプリで会議を処理していないため、精度、話者の判別、要約の質は評価していません。',
          '**ローカルでの性能。** 長い通話での端末内モデルの速度とバッテリー消費は未検証で、ドキュメントでも結果はパソコン次第とされています。',
          '**セキュリティとプライバシーの表明。** 暗号化、削除、学習に使わないという記述はプロジェクト自身のもので、ここでは監査していません。',
          '**現在の料金。** 料金ページを読み取れなかったため、Proの価格はドキュメントのFAQに基づきます。',
          '**Windows、Linux、モバイル。** プロジェクトがベータと表示しており、確認していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: [
          'アプリ',
          '対応プラットフォーム',
          '価格／ライセンス',
          '主な違い',
        ],
        rows: [
          { 'アプリ': '[Meetily](/ja/power-local-llm/meetily-review)', '対応プラットフォーム': 'Windows、macOS', '価格／ライセンス': '無料のCommunity Edition／MIT', '主な違い': 'ローカルのOllamaモデルで要約するセルフホスト型の議事録ツール。プロジェクトによればクラウドは不要' },
          { 'アプリ': '[MacWhisper](/ja/power-local-llm/macwhisper-review)', '対応プラットフォーム': 'macOS', '価格／ライセンス': 'フリーミアム／プロプライエタリ', '主な違い': 'ローカルのWhisperとParakeetで文字起こしする買い切り型Macアプリ（ディレクトリの記載による）' },
          { 'アプリ': '[Handy](/ja/power-local-llm/handy-review)', '対応プラットフォーム': 'macOS、Windows、Linux', '価格／ライセンス': '無料／MIT', '主な違い': '会議メモではなく、どのアプリにも入力できるプッシュトゥトーク型ディクテーション' },
        ],
        note: '選ぶ前に、各アプリの価格、ライセンス、対応プラットフォームをそれぞれの掲載ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '録音していることを参加者に伝える必要はありますか？',
            a: 'プライバシーポリシーとドキュメントの両方が、法律で求められる場合の通知と同意は利用者の責任だとしています。録音には他の人の声が含まれ得るためです。Anarlogは通話に参加者を追加しないので、誰にも自動では通知されません。',
          },
          {
            q: '音声はどのくらい保存されますか？',
            a: '「Settings → Meetings → Audio file retention」で、Don’t save、1 day、3 days、1 week、1 month、Foreverから選べます。期間が過ぎると録音は消え、ノートと文字起こしは残ります。',
          },
          {
            q: 'どの言語を文字起こしできますか？',
            a: 'Cloudの選択肢にはアラビア語、日本語、韓国語、中国語を含む長い一覧があります。Soniqoは欧州の25言語、Apple Speechは対応言語を1つずつ、自分のプロバイダーはそのプロバイダー独自の一覧に従います。',
          },
          {
            q: 'ChatGPTやClaudeの契約を要約に使えますか？',
            a: 'ドキュメントによれば使えます。「Settings → Intelligence」でClaude、ChatGPT、Grok、GitHub Copilot、Kimi Codeを接続すれば、別のAPIキーは不要です。端末ごとに個別に接続します。',
          },
          {
            q: '会議の内容をAIの学習に使いますか？',
            a: 'プライバシーポリシーは、メモ、文字起こし、音声、カレンダーデータをAIモデルの学習に使うことはないとしています。自分のプロバイダーを使う場合は、そのプロバイダーの保持・学習ポリシーが適用されます。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Anarlogは、ボットなしで会議メモを取れる、リリースが活発なオープンソースの選択肢で、各段階でローカルAIとクラウドAIを実際に選べます。一方で、内蔵のローカル文字起こしにはApple SiliconのMacが必要で、Windows、Linux、モバイル版はベータ、ホスト型AIは有料であり、品質やプライバシーに関する表明はここでは検証できていません。会議を自分のパソコン内に留めたいMacユーザーで、まず無料プランを試せる方に向いています。機密性の要件が厳しいチームは、頼る前にプライバシーポリシーとプロバイダー設定をよく読んでください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Anarlog公式サイト](https://anarlog.so) — 製品の位置づけ、ダウンロードと料金のページ（2026年10月24日確認）。',
          '[Anarlogのプライバシーポリシー](https://anarlog.so/privacy) — データ収集、委託先、オプトアウト（2026年10月21日更新）。',
          '[Anarlogドキュメント](https://docs.anarlog.so) — インストール、オフライン利用、モデルとプロバイダー、データとプライバシー、FAQ（2026年10月24日確認）。',
          '[GitHubのAnarlog](https://github.com/fastrepl/anarlog) — README、MITライセンス、リリースページ（デスクトップ1.4.31）（2026年10月24日確認）。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Meetilyレビュー](/ja/power-local-llm/meetily-review) — Ollamaで要約するローカルのオープンソース会議メモツール。',
          '[MacWhisperレビュー](/ja/power-local-llm/macwhisper-review) — ローカルのWhisperとParakeetで文字起こしするMacアプリ。',
          '[音声・オーディオツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — このレビューが属するカテゴリ比較。',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/anarlog-review-hero-pt.webp',
    title: 'Análise do Anarlog: notas de reuniões com IA de código aberto, antes Hyprnote',
    seoTitle: 'Análise do Anarlog: notas de reuniões com IA, sem bot',
    intro:
      'O Anarlog é um bloco de notas com IA de código aberto para reuniões, da [Fastrepl, Inc.](https://anarlog.so), para macOS, Windows e Linux, que grava o áudio do seu computador sem enviar um bot para a chamada. Esta análise se baseia no site oficial, na documentação, na política de privacidade e no repositório do GitHub, consultados em 24 de outubro de 2026; a PromptQuorum não testou o app na prática.',
    metaDescription:
      'Análise do Anarlog: bloco de notas com IA de código aberto e sem bot, antes Hyprnote. Grava no aparelho; roda local em Macs Apple Silicon. Não testado.',
    twitterDescription:
      'Análise do Anarlog: notas de reuniões com IA de código aberto sem bot, antes Hyprnote. O que roda localmente, o que vai para a nuvem e o que segue sem confirmação.',
    audience:
      'Pessoas que fazem as próprias anotações de reuniões, querem resumos com IA sem um bot na chamada e precisam saber o que roda localmente, o que custa dinheiro e o que as fontes deixam em aberto.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Anarlog',
    targetKeywords: [
      'análise anarlog',
      'hyprnote anarlog',
      'notas de reuniões com ia de código aberto',
      'notetaker de reuniões sem bot',
      'transcrição de reuniões com ia local',
      'alternativa ao granola de código aberto',
      'bloco de notas com ia privado para reuniões',
    ],
    current_models_mentioned: ['Soniqo', 'Parakeet', 'Whisper'],
    current_hardware_mentioned: ['Apple Silicon', 'Mac'],
    leadAnswerBlock:
      '**O Anarlog (versão 1.4.31, lançada em 20 de outubro de 2026; repositório atualizado pela última vez em 24 de outubro de 2026) é um bloco de notas de código aberto que grava reuniões no seu aparelho e as transforma em resumos de IA editáveis.** O uso totalmente local é possível, mas exige um Mac com Apple Silicon; cada afirmação aqui vem do site, da documentação e do repositório do próprio projeto.',
    quickAnswerTop: {
      pt: {
        question: 'O Anarlog funciona sem enviar minhas reuniões para a nuvem?',
        answer:
          'Segundo o projeto, sim: escolha um modelo de transcrição no aparelho e um modelo de resumo local, e o conteúdo fica no computador. A transcrição local integrada exige um Mac com Apple Silicon; no Windows, no Linux e em Macs Intel você precisa de um servidor local compatível com Deepgram ou de um provedor na nuvem para a transcrição.',
        bullets: [
          'A captura cobre microfone e som do sistema, sem nenhum bot na lista de participantes.',
          'Notas e transcrições ficam em um banco de dados local e podem ser exportadas em Markdown.',
          'Resumos e chat podem usar um modelo local, sua própria chave de API ou o Anarlog Cloud, pago.',
          'Um modo de ditado digita o que você fala em outros apps com um atalho.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Anarlog?', anchor: 'what-is-anarlog' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
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
          {
            type: 'one-sentence',
            text: 'O Anarlog é um bloco de notas para reuniões com licença MIT que captura o áudio do seu computador, transcreve com o modelo escolhido e escreve um resumo editável.',
          },
          {
            type: 'plain-terms',
            text: 'Você anota durante a chamada, o app escuta no seu próprio computador em vez de entrar na chamada e depois transforma suas notas e a transcrição em um resumo.',
          },
        ],
        items: [
          'Manutenção: entre 20 de setembro e 20 de outubro de 2026 saíram sete versões estáveis para desktop, então não se aplica aviso de projeto abandonado.',
          'Licença: o app da comunidade é MIT; a pasta empresarial é visível, mas com licença comercial.',
          'Escolha de IA: transcrição e resumos são ajustes separados, cada um no aparelho, com sua chave ou pelo Anarlog Cloud.',
          'Custo: um plano gratuito cobre o uso no aparelho e com chave própria; a IA hospedada é paga.',
          'Maturidade: o macOS é a plataforma principal, enquanto os apps para Windows, Linux e celular estão marcados como beta.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A PromptQuorum não instalou nem executou o app, por isso a qualidade das transcrições e dos resumos não é avaliada.',
          },
        ],
      },
      overview: {
        id: 'what-is-anarlog',
        title: 'O que é o Anarlog?',
        content: [
            '**O Anarlog é um bloco de notas com IA de código aberto para reuniões: você anota durante a chamada, ele grava o áudio do seu computador sem entrar como bot e depois gera um resumo editável.** Ele é feito pela Fastrepl, Inc., e o repositório o descreve como uma alternativa de código aberto ao Granola.',
            'O projeto começou como Hyprnote e usou brevemente o nome Char; segundo o README, a equipe depois dividiu o trabalho, de modo que o [char.com](https://char.com) hoje é um app de produtividade separado e o Anarlog é este bloco de notas para reuniões. Alguns caminhos de arquivos na documentação ainda dizem “hyprnote”.',
          ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Anarlog é um download gratuito para macOS, Windows e Linux; os instaladores de macOS e Windows dispensam o terminal.**',
        ],
        columns: [
          'Opção',
          'Onde obter',
        ],
        rows: [
          { 'Opção': 'macOS', 'Onde obter': 'DMG para Apple Silicon e Intel na [página de download](https://anarlog.so/download) ou nas [versões do GitHub](https://github.com/fastrepl/anarlog/releases)' },
          { 'Opção': 'Windows', 'Onde obter': 'Instalador x64 (beta) ou a página da [Microsoft Store](https://apps.microsoft.com/detail/XPDLN196NKSW10)' },
          { 'Opção': 'Linux', 'Onde obter': 'AppImage e DEB para x64 e ARM64 (beta), um repositório APT e um PKGBUILD para Arch' },
          { 'Opção': 'Preço', 'Onde obter': 'Plano gratuito; Pro (Cloud): US$ 14 por mês ou US$ 140 por ano, em dólares segundo a documentação' },
          { 'Opção': 'Beta móvel', 'Onde obter': '[TestFlight](https://testflight.apple.com/join/y7WJCXvG) para iOS e [beta do Google Play](https://play.google.com/apps/testing/so.anarlog.mobile) para Android' },
          { 'Opção': 'Site', 'Onde obter': '[anarlog.so](https://anarlog.so)' },
          { 'Opção': 'Política de privacidade', 'Onde obter': '[anarlog.so/privacy](https://anarlog.so/privacy)' },
          { 'Opção': 'Código-fonte', 'Onde obter': '[github.com/fastrepl/anarlog](https://github.com/fastrepl/anarlog)' },
        ],
        note: 'A página de preços é renderizada com JavaScript e não pôde ser lida aqui, por isso os preços vêm da documentação oficial; o conteúdo dos planos além da divisão entre gratuito e Pro não foi verificado.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**O Anarlog exige macOS 15 ou posterior, e sua transcrição local integrada requer um Mac com Apple Silicon.**',
        ],
        columns: [
          'Item',
          'O que dizem as fontes',
        ],
        rows: [
          { 'Item': 'macOS', 'O que dizem as fontes': 'macOS 15 ou posterior, com versões para Apple Silicon e Intel' },
          { 'Item': 'Windows e Linux', 'O que dizem as fontes': 'Ambos estão em beta: Windows x64, Linux x64 e ARM64' },
          { 'Item': 'Transcrição no aparelho', 'O que dizem as fontes': 'Somente Apple Silicon: modelos Soniqo, Apple Speech no macOS 26 ou um arquivo whisper.cpp .bin que você fornece' },
          { 'Item': 'Resumos locais', 'O que dizem as fontes': 'Um modelo servido por Ollama, LM Studio ou Unsloth, ou Apple Intelligence experimental, somente texto, em um Mac compatível' },
          { 'Item': 'Hardware', 'O que dizem as fontes': 'Nenhum requisito de RAM ou GPU é informado; a velocidade depende do computador e do modelo' },
        ],
        note: 'A detecção do microfone, a parada automática e a captura do chat da reunião só funcionam no macOS e no Linux, e a integração com o Apple Calendar só no macOS.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem da documentação ou do README; a PromptQuorum não testou nenhum.**',
        ],
        items: [
          '**Captura automática.** Reuniões ligadas à agenda podem começar no horário previsto, e o app pode avisar você quando detecta uma chamada não agendada.',
          '**Notas e transcrições editáveis.** Você escreve seu próprio memorando durante a chamada, edita o texto da transcrição, atribui falantes e retoma a escuta na mesma nota.',
          '**Resumos e chat.** Modelos e um resumo Auto personalizável geram as notas, e o chat responde a perguntas sobre uma ou várias reuniões.',
          '**Importações.** Envie um arquivo de áudio, SRT ou VTT, ou traga o histórico de reuniões de outros assistentes, incluindo exportações do Granola.',
          '**Agentes e automação.** Uma ferramenta de linha de comando e um servidor MCP local leem o banco de dados local, e webhooks e fluxos iniciais podem exportar Markdown ou arquivar notas.',
        ],
        note: 'Compartilhamento e Cloud Sync são extras opcionais que exigem uma conta.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
            '**A gravação acontece no seu aparelho e, segundo o projeto, todo recurso de nuvem é opcional.** Conforme a política de privacidade, atualizada em 21 de outubro de 2026, notas, transcrições e dados de reuniões ficam armazenados localmente; o README cita um banco de dados SQLite local.',
            'Para onde o conteúdo vai depende das suas configurações: a transcrição hospedada envia o áudio a provedores de fala para texto que, segundo a política, o excluem ao concluir a tarefa; os resumos hospedados enviam texto por um gateway de IA, e sua própria chave ou servidor local o recebe diretamente. Segundo a política, o Cloud Sync é criptografado de ponta a ponta, uma nota compartilhada fica legível nos servidores e a Cloud API opcional mantém uma cópia legível separada.',
            'As análises de uso (PostHog) e uma gravação de sessão mascarada por amostragem funcionam enquanto “Share usage data” estiver ativado e podem ser desligadas em “Settings → Privacy”.',
          ],
        callouts: [
          {
            type: 'note',
            text: 'São declarações do projeto, não resultados de auditoria, e a PromptQuorum não inspecionou o tráfego de rede do app. A política diz que os relatórios de falhas continuam ativos quando o compartilhamento de dados de uso está desligado, enquanto a documentação descreve uma chave separada para eles.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Usuários de Mac** que querem manter transcrição e resumo no próprio computador.',
          '**Quem quer trocar um notetaker com bot** e prefere capturar do próprio aparelho.',
          '**Quem já paga uma assinatura de IA** e quer reutilizá-la nos resumos.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade de transcrições e resumos.** A PromptQuorum não passou nenhuma reunião pelo app, então precisão, atribuição de falantes e qualidade dos resumos não são avaliadas.',
          '**Desempenho local.** Velocidade e consumo de bateria dos modelos no aparelho em chamadas longas não foram testados; segundo a documentação, os resultados dependem do computador.',
          '**Afirmações de segurança e privacidade.** As declarações sobre criptografia, exclusão e ausência de treinamento são do próprio projeto e não foram auditadas aqui.',
          '**Preços atuais.** O preço do Pro vem do FAQ da documentação porque a página de preços não pôde ser lida.',
          '**Windows, Linux e celular.** O projeto marca essas versões como beta, e elas não foram examinadas.',
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
          { 'App': '[Meetily](/pt/power-local-llm/meetily-review)', 'Plataformas': 'Windows, macOS', 'Preço / licença': 'Community Edition gratuita / MIT', 'Diferença principal': 'Notetaker auto-hospedado cujos resumos passam por um modelo local do Ollama; segundo o projeto, não exige nuvem' },
          { 'App': '[MacWhisper](/pt/power-local-llm/macwhisper-review)', 'Plataformas': 'macOS', 'Preço / licença': 'Freemium / proprietário', 'Diferença principal': 'App de Mac de compra única para transcrição local com Whisper e Parakeet, segundo a ficha do diretório' },
          { 'App': '[Handy](/pt/power-local-llm/handy-review)', 'Plataformas': 'macOS, Windows, Linux', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Ditado com apertar para falar em qualquer app, não um bloco de notas de reuniões' },
        ],
        note: 'Confirme preço, licença e plataformas de cada app na própria ficha antes de escolher.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Preciso avisar que estou gravando?',
            a: 'A política de privacidade e a documentação dizem que você é responsável pelo aviso e pelo consentimento onde a lei os exigir, pois as gravações podem incluir a voz de outras pessoas. O Anarlog não adiciona nenhum participante à chamada, então ninguém é avisado automaticamente.',
          },
          {
            q: 'Por quanto tempo o Anarlog guarda o áudio?',
            a: 'Em “Settings → Meetings → Audio file retention” você escolhe Don’t save, 1 day, 3 days, 1 week, 1 month ou Forever. Passado o prazo, a gravação some, enquanto a nota e a transcrição permanecem.',
          },
          {
            q: 'Quais idiomas ele transcreve?',
            a: 'O seletor do Cloud cobre uma lista longa que inclui árabe, japonês, coreano e chinês. O Soniqo transcreve 25 idiomas europeus, o Apple Speech um idioma compatível por vez, e seu próprio provedor define a lista dele.',
          },
          {
            q: 'Posso usar minha assinatura do ChatGPT ou do Claude nos resumos?',
            a: 'Sim, segundo a documentação: em “Settings → Intelligence” você pode conectar Claude, ChatGPT, Grok, GitHub Copilot ou Kimi Code, sem chave de API separada. Cada dispositivo é conectado separadamente.',
          },
          {
            q: 'O projeto treina modelos de IA com minhas reuniões?',
            a: 'A política de privacidade diz que nunca usa notas, transcrições, áudio ou dados de calendário para treinar modelos de IA. Com um provedor próprio, valem as políticas de retenção e treinamento desse provedor.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O Anarlog é um jeito de código aberto, com lançamentos ativos, de fazer anotações de reuniões sem bot, com uma escolha real entre IA local e na nuvem em cada etapa. Em contrapartida, a transcrição local integrada exige um Mac com Apple Silicon, os apps para Windows, Linux e celular estão em beta, a IA hospedada é paga e nenhuma afirmação de qualidade ou privacidade pôde ser verificada aqui. Serve para usuários de Mac que querem manter as reuniões no próprio computador e podem testar antes o plano gratuito; equipes com exigências rígidas de confidencialidade devem ler com atenção a política de privacidade e as configurações de provedor antes de depender dele.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Anarlog](https://anarlog.so) — posicionamento do produto, páginas de download e preços, consultadas em 24 de outubro de 2026.',
          '[Política de privacidade do Anarlog](https://anarlog.so/privacy) — coleta de dados, provedores e formas de desativar, atualizada em 21 de outubro de 2026.',
          '[Documentação do Anarlog](https://docs.anarlog.so) — instalação, uso offline, modelos e provedores, dados e privacidade, FAQ, consultada em 24 de outubro de 2026.',
          '[Anarlog no GitHub](https://github.com/fastrepl/anarlog) — README, licença MIT e página de versões (desktop 1.4.31), consultados em 24 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Meetily](/pt/power-local-llm/meetily-review) — um notetaker de reuniões local e de código aberto que resume via Ollama.',
          '[Análise do MacWhisper](/pt/power-local-llm/macwhisper-review) — um app de Mac para transcrição local com Whisper e Parakeet.',
          '[Ferramentas de voz e áudio comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — a comparação de categoria à qual esta análise pertence.',
          '[Diretório de software para LLMs locais](/pt/directory) — o catálogo completo de ferramentas de IA local.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/anarlog-review-hero-ar.webp',
    title: 'مراجعة Anarlog: ملاحظات اجتماعات بالذكاء الاصطناعي مفتوحة المصدر، كان اسمه Hyprnote',
    seoTitle: 'مراجعة Anarlog: ملاحظات اجتماعات بالذكاء الاصطناعي بلا بوت',
    intro:
      'Anarlog دفتر ملاحظات اجتماعات بالذكاء الاصطناعي ومفتوح المصدر من [Fastrepl, Inc.](https://anarlog.so) يعمل على macOS وWindows وLinux، ويسجّل صوت حاسوبك دون إرسال بوت إلى المكالمة. تستند هذه المراجعة إلى الموقع الرسمي والوثائق وسياسة الخصوصية ومستودع GitHub، وجرى الاطلاع عليها في 24 أكتوبر 2026؛ ولم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'مراجعة Anarlog: دفتر ملاحظات اجتماعات مفتوح المصدر وبلا بوت، كان Hyprnote. يسجّل على جهازك ويعمل محليًا على Mac بمعالج Apple Silicon؛ لم نختبره.',
    twitterDescription:
      'مراجعة Anarlog: ملاحظات اجتماعات مفتوحة المصدر بلا بوت، كان اسمه Hyprnote. ما يعمل محليًا وما يذهب إلى السحابة وما لا يزال غير مؤكد.',
    audience:
      'من يدوّنون اجتماعاتهم بأنفسهم ويريدون ملخصات بالذكاء الاصطناعي دون بوت في المكالمة، ويحتاجون إلى معرفة ما يعمل محليًا وما يكلّف مالًا وما تتركه المصادر مفتوحًا.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Anarlog',
    targetKeywords: [
      'مراجعة anarlog',
      'hyprnote anarlog',
      'ملاحظات اجتماعات بالذكاء الاصطناعي مفتوحة المصدر',
      'تدوين اجتماعات بلا بوت',
      'تفريغ اجتماعات محلي بالذكاء الاصطناعي',
      'بديل granola مفتوح المصدر',
      'دفتر ملاحظات خاص للاجتماعات',
    ],
    current_models_mentioned: ['Soniqo', 'Parakeet', 'Whisper'],
    current_hardware_mentioned: ['Apple Silicon', 'Mac'],
    leadAnswerBlock:
      '**Anarlog (الإصدار 1.4.31، صدر في 20 أكتوبر 2026؛ وآخر تحديث للمستودع في 24 أكتوبر 2026) دفتر ملاحظات مفتوح المصدر يسجّل الاجتماعات على جهازك ويحوّلها إلى ملخصات قابلة للتحرير بالذكاء الاصطناعي.** الاستخدام المحلي الكامل ممكن لكنه يتطلب جهاز Mac بمعالج Apple Silicon؛ وكل عبارة هنا مصدرها موقع المشروع ووثائقه ومستودعه.',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل Anarlog دون إرسال اجتماعاتي إلى السحابة؟',
        answer:
          'وفق المشروع، نعم: اختر نموذج تفريغ يعمل على الجهاز ونموذج تلخيص محليًا فيبقى المحتوى على الحاسوب. التفريغ المحلي المدمج يتطلب جهاز Mac بمعالج Apple Silicon؛ أما على Windows وLinux وأجهزة Mac بمعالج Intel فتحتاج إلى خادم محلي متوافق مع Deepgram أو إلى مزوّد سحابي للتفريغ.',
        bullets: [
          'يسجّل الميكروفون وصوت النظام معًا، دون ظهور بوت في قائمة المشاركين.',
          'تُحفظ الملاحظات والنصوص المفرّغة في قاعدة بيانات محلية ويمكن تصديرها بصيغة Markdown.',
          'يمكن للملخصات والدردشة استخدام نموذج محلي أو مفتاح API الخاص بك أو Anarlog Cloud المدفوع.',
          'يتيح وضع الإملاء كتابة ما تقوله في تطبيقات أخرى باختصار لوحة المفاتيح.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Anarlog؟', anchor: 'what-is-anarlog' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'المتطلبات', anchor: 'requirements' },
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
          {
            type: 'one-sentence',
            text: 'Anarlog دفتر ملاحظات للاجتماعات بترخيص MIT يلتقط صوت حاسوبك ويفرّغه بالنموذج الذي تختاره ويكتب ملخصًا قابلًا للتحرير.',
          },
          {
            type: 'plain-terms',
            text: 'تدوّن ملاحظاتك أثناء المكالمة، ويستمع التطبيق على حاسوبك بدل الانضمام إلى المكالمة، ثم يحوّل ملاحظاتك والنص المفرّغ إلى ملخص.',
          },
        ],
        items: [
          'الصيانة: صدرت سبعة إصدارات مستقرة لسطح المكتب بين 20 سبتمبر و20 أكتوبر 2026، فلا ينطبق تحذير المشروع المتوقف.',
          'الترخيص: التطبيق المجتمعي بترخيص MIT؛ ومجلد المؤسسات مرئي المصدر لكنه بترخيص تجاري.',
          'اختيار الذكاء الاصطناعي: التفريغ والتلخيص إعدادان منفصلان، لكلٍّ منهما الجهاز أو مفتاحك أو Anarlog Cloud.',
          'التكلفة: خطة مجانية تغطي الاستخدام على الجهاز ومع مفتاحك؛ أما الذكاء الاصطناعي المستضاف فبخطة مدفوعة.',
          'النضج: macOS هي المنصة الرئيسية، بينما تطبيقات Windows وLinux والجوال موسومة بأنها تجريبية.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'لم تثبّت PromptQuorum التطبيق ولم تشغّله، لذا لا تُقيَّم جودة التفريغ والملخصات.',
          },
        ],
      },
      overview: {
        id: 'what-is-anarlog',
        title: 'ما هو Anarlog؟',
        content: [
            '**Anarlog دفتر ملاحظات مفتوح المصدر للاجتماعات بالذكاء الاصطناعي: تدوّن ملاحظاتك أثناء المكالمة، فيسجّل صوت حاسوبك دون الانضمام كبوت، ثم يُنتج ملخصًا قابلًا للتحرير.** تطوره شركة Fastrepl, Inc.، ويصفه المستودع بأنه بديل مفتوح المصدر لـ Granola.',
            'بدأ المشروع باسم Hyprnote واستخدم اسم Char لفترة قصيرة؛ وبحسب ملف README قسّم الفريق العمل لاحقًا، فصار [char.com](https://char.com) تطبيق إنتاجية مستقلًا وصار Anarlog هو دفتر ملاحظات الاجتماعات هذا. وما زالت بعض مسارات الملفات في الوثائق تحمل اسم «hyprnote».',
          ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يمكن تنزيل Anarlog مجانًا لأنظمة macOS وWindows وLinux، ومثبّتا macOS وWindows لا يحتاجان إلى الطرفية.**',
        ],
        columns: [
          'الخيار',
          'مصدر الحصول عليه',
        ],
        rows: [
          { 'الخيار': 'macOS', 'مصدر الحصول عليه': 'ملف DMG لمعالجي Apple Silicon وIntel من [صفحة التنزيل](https://anarlog.so/download) أو من [إصدارات GitHub](https://github.com/fastrepl/anarlog/releases)' },
          { 'الخيار': 'Windows', 'مصدر الحصول عليه': 'مثبّت x64 (تجريبي) أو صفحة التطبيق في [Microsoft Store](https://apps.microsoft.com/detail/XPDLN196NKSW10)' },
          { 'الخيار': 'Linux', 'مصدر الحصول عليه': 'AppImage وDEB لمعمارية x64 وARM64 (تجريبي)، ومستودع APT، وملف PKGBUILD لـ Arch' },
          { 'الخيار': 'السعر', 'مصدر الحصول عليه': 'خطة مجانية؛ وPro (Cloud) بسعر 14 دولارًا شهريًا أو 140 دولارًا سنويًا وفق الوثائق (بالدولار الأمريكي)' },
          { 'الخيار': 'النسخة التجريبية للجوال', 'مصدر الحصول عليه': '[TestFlight](https://testflight.apple.com/join/y7WJCXvG) لـ iOS و[بيتا Google Play](https://play.google.com/apps/testing/so.anarlog.mobile) لـ Android' },
          { 'الخيار': 'الموقع', 'مصدر الحصول عليه': '[anarlog.so](https://anarlog.so)' },
          { 'الخيار': 'سياسة الخصوصية', 'مصدر الحصول عليه': '[anarlog.so/privacy](https://anarlog.so/privacy)' },
          { 'الخيار': 'الشيفرة المصدرية', 'مصدر الحصول عليه': '[github.com/fastrepl/anarlog](https://github.com/fastrepl/anarlog)' },
        ],
        note: 'صفحة الأسعار تُعرض عبر JavaScript ولم يمكن قراءتها هنا، لذا جاءت الأسعار من الوثائق الرسمية؛ ولم يُتحقق من محتوى الخطط بما يتجاوز التقسيم بين المجاني وPro.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**يتطلب Anarlog نظام macOS 15 أو أحدث، ويتطلب تفريغه المحلي المدمج جهاز Mac بمعالج Apple Silicon.**',
        ],
        columns: [
          'البند',
          'ما تقوله المصادر',
        ],
        rows: [
          { 'البند': 'macOS', 'ما تقوله المصادر': 'macOS 15 أو أحدث، مع إصدارين لمعالجي Apple Silicon وIntel' },
          { 'البند': 'Windows وLinux', 'ما تقوله المصادر': 'كلاهما تجريبي: Windows x64 وLinux x64 وARM64' },
          { 'البند': 'التفريغ على الجهاز', 'ما تقوله المصادر': 'Apple Silicon فقط: نماذج Soniqo أو Apple Speech على macOS 26 أو ملف whisper.cpp .bin توفّره بنفسك' },
          { 'البند': 'الملخصات المحلية', 'ما تقوله المصادر': 'نموذج تقدمه Ollama أو LM Studio أو Unsloth، أو Apple Intelligence التجريبي للنصوص فقط على جهاز Mac مؤهل' },
          { 'البند': 'العتاد', 'ما تقوله المصادر': 'لا يُذكر أي شرط للذاكرة RAM أو GPU؛ وتعتمد السرعة على الحاسوب والنموذج' },
        ],
        note: 'اكتشاف الميكروفون والإيقاف التلقائي والتقاط دردشة الاجتماع تعمل على macOS وLinux فقط، وتكامل Apple Calendar على macOS فقط.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل بند أدناه مأخوذ من الوثائق أو من ملف README، ولم تختبر PromptQuorum أيًّا منها.**',
        ],
        items: [
          '**التقاط تلقائي.** يمكن أن تبدأ الاجتماعات المرتبطة بالتقويم في موعدها، وقد ينبّهك التطبيق عندما يكتشف مكالمة غير مجدولة.',
          '**ملاحظات ونصوص قابلة للتحرير.** تكتب مذكرتك أثناء المكالمة، وتحرّر نص التفريغ، وتحدّد المتحدثين، وتستأنف التسجيل في الملاحظة نفسها.',
          '**الملخصات والدردشة.** تُنتج القوالب وملخص Auto القابل للتخصيص الملاحظات، وتجيب الدردشة عن أسئلة حول اجتماع واحد أو عدة اجتماعات.',
          '**الاستيراد.** ارفع ملف صوت أو SRT أو VTT، أو استورد سجل اجتماعات من مساعدين آخرين، بما في ذلك ملفات تصدير Granola.',
          '**الوكلاء والأتمتة.** أداة سطر أوامر وخادم MCP محلي يقرآن قاعدة البيانات المحلية، ويمكن لخطافات الويب وقوالب البدء تصدير Markdown أو حفظ الملاحظات في مجلدات.',
        ],
        note: 'المشاركة وCloud Sync إضافتان اختياريتان تتطلبان حسابًا.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
            '**يجري التسجيل على جهازك، ووفق المشروع فإن كل ميزة سحابية اختيارية.** وبحسب سياسة الخصوصية المحدّثة في 21 أكتوبر 2026، تُخزَّن الملاحظات والنصوص المفرّغة وبيانات الاجتماعات محليًا، ويذكر ملف README قاعدة بيانات SQLite محلية.',
            'وجهة المحتوى تعتمد على إعداداتك: التفريغ المستضاف يرسل الصوت إلى مزوّدي التعرف على الكلام، وتقول السياسة إنهم يحذفونه عند انتهاء المهمة؛ والملخصات المستضافة ترسل النص عبر بوابة ذكاء اصطناعي؛ أما مفتاحك الخاص أو خادمك المحلي فيستلمه مباشرة. وبحسب السياسة، فإن Cloud Sync مشفّر من طرف إلى طرف، والملاحظة المشاركة تُخزَّن بصيغة مقروءة على الخوادم، وواجهة Cloud API الاختيارية تحتفظ بنسخة مقروءة منفصلة.',
            'تعمل تحليلات الاستخدام (PostHog) وإعادة تشغيل الجلسات المقنّعة على عيّنة منها ما دام خيار «Share usage data» مفعّلًا، ويمكن إيقافها من «Settings → Privacy».',
          ],
        callouts: [
          {
            type: 'note',
            text: 'هذه إفادات من المشروع نفسه وليست نتائج تدقيق، ولم تفحص PromptQuorum حركة الشبكة الصادرة من التطبيق. وتقول السياسة إن تقارير الأعطال تبقى مفعّلة عند إيقاف مشاركة بيانات الاستخدام، بينما تصف الوثائق مفتاحًا منفصلًا لها.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مستخدمو Mac** الذين يريدون إبقاء التفريغ والملخص على حاسوبهم.',
          '**من يريدون استبدال أداة تدوين تعتمد على بوت** ويفضلون الالتقاط من جهازهم.',
          '**من لديهم اشتراك ذكاء اصطناعي** ويريدون إعادة استخدامه في الملخصات.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**جودة التفريغ والملخصات.** لم تمرّر PromptQuorum أي اجتماع عبر التطبيق، لذا لا تُقيَّم الدقة ولا تمييز المتحدثين ولا جودة الملخصات.',
          '**الأداء المحلي.** سرعة النماذج على الجهاز واستهلاك البطارية في المكالمات الطويلة لم تُختبر؛ وتقول الوثائق إن النتائج تعتمد على الحاسوب.',
          '**ادعاءات الأمان والخصوصية.** العبارات حول التشفير والحذف وعدم التدريب صادرة عن المشروع نفسه ولم تُدقَّق هنا.',
          '**الأسعار الحالية.** سعر Pro مأخوذ من الأسئلة الشائعة في الوثائق لأن صفحة الأسعار تعذّرت قراءتها.',
          '**Windows وLinux والجوال.** يصف المشروع هذه الإصدارات بأنها تجريبية، ولم نفحصها.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: [
          'التطبيق',
          'المنصات',
          'السعر / الرخصة',
          'الفرق الأبرز',
        ],
        rows: [
          { 'التطبيق': '[Meetily](/ar/power-local-llm/meetily-review)', 'المنصات': 'Windows وmacOS', 'السعر / الرخصة': 'نسخة مجتمعية مجانية / MIT', 'الفرق الأبرز': 'أداة تدوين مستضافة ذاتيًا تُنتج ملخصاتها عبر نموذج Ollama محلي؛ ووفق المشروع لا حاجة إلى السحابة' },
          { 'التطبيق': '[MacWhisper](/ar/power-local-llm/macwhisper-review)', 'المنصات': 'macOS', 'السعر / الرخصة': 'مجاني جزئيًا / مملوك', 'الفرق الأبرز': 'تطبيق Mac بشراء لمرة واحدة للتفريغ المحلي بـ Whisper وParakeet، وفق مدخل الدليل' },
          { 'التطبيق': '[Handy](/ar/power-local-llm/handy-review)', 'المنصات': 'macOS وWindows وLinux', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'إملاء بالضغط والتحدث في أي تطبيق، وليس دفتر ملاحظات للاجتماعات' },
        ],
        note: 'تحقق من السعر والرخصة والمنصات لكل تطبيق في صفحته الخاصة قبل الاختيار.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل عليّ إخبار الآخرين بأنني أسجّل؟',
            a: 'تقول سياسة الخصوصية والوثائق معًا إنك المسؤول عن الإشعار والموافقة حيث يشترط القانون ذلك، لأن التسجيلات قد تتضمن أصوات أشخاص آخرين. ولا يضيف Anarlog مشاركًا إلى المكالمة، فلا يُخطَر أحد تلقائيًا.',
          },
          {
            q: 'كم يحتفظ Anarlog بالصوت؟',
            a: 'من «Settings → Meetings → Audio file retention» يمكنك اختيار Don’t save أو 1 day أو 3 days أو 1 week أو 1 month أو Forever. بعد انقضاء المدة يُحذف التسجيل، وتبقى الملاحظة والنص المفرّغ.',
          },
          {
            q: 'ما اللغات التي يفرّغها؟',
            a: 'تشمل قائمة Cloud لغات كثيرة منها العربية واليابانية والكورية والصينية. ويفرّغ Soniqo خمسًا وعشرين لغة أوروبية، ويعالج Apple Speech لغة مدعومة واحدة في كل مرة، ويحدد مزوّدك الخاص قائمته بنفسه.',
          },
          {
            q: 'هل أستخدم اشتراك ChatGPT أو Claude في الملخصات؟',
            a: 'نعم وفق الوثائق: من «Settings → Intelligence» يمكنك ربط Claude أو ChatGPT أو Grok أو GitHub Copilot أو Kimi Code دون مفتاح API منفصل. ويُربط كل جهاز على حدة.',
          },
          {
            q: 'هل يدرّب المشروع نماذج ذكاء اصطناعي على اجتماعاتي؟',
            a: 'تقول سياسة الخصوصية إنه لا يستخدم الملاحظات ولا النصوص المفرّغة ولا الصوت ولا بيانات التقويم لتدريب نماذج الذكاء الاصطناعي. ومع مزوّدك الخاص تسري سياسة الاحتفاظ والتدريب لدى ذلك المزوّد.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Anarlog طريقة مفتوحة المصدر ونشطة الإصدارات لتدوين الاجتماعات دون بوت، مع خيار حقيقي بين الذكاء الاصطناعي المحلي والسحابي في كل خطوة. في المقابل، يتطلب التفريغ المحلي المدمج جهاز Mac بمعالج Apple Silicon، وتطبيقات Windows وLinux والجوال تجريبية، والذكاء الاصطناعي المستضاف مدفوع، ولم يمكن التحقق هنا من أي ادعاء يخص الجودة أو الخصوصية. يناسب مستخدمي Mac الذين يريدون إبقاء اجتماعاتهم على حاسوبهم ويمكنهم تجربة الخطة المجانية أولًا؛ أما الفرق ذات متطلبات السرية الصارمة فعليها قراءة سياسة الخصوصية وإعدادات المزوّد بعناية قبل الاعتماد عليه.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Anarlog](https://anarlog.so) — تعريف المنتج وصفحتا التنزيل والأسعار، جرى الاطلاع عليها في 24 أكتوبر 2026.',
          '[سياسة خصوصية Anarlog](https://anarlog.so/privacy) — جمع البيانات والمزوّدون وخيارات الإيقاف، آخر تحديث 21 أكتوبر 2026.',
          '[وثائق Anarlog](https://docs.anarlog.so) — التثبيت والاستخدام دون اتصال والنماذج والمزوّدون والبيانات والخصوصية والأسئلة الشائعة، جرى الاطلاع عليها في 24 أكتوبر 2026.',
          '[Anarlog على GitHub](https://github.com/fastrepl/anarlog) — ملف README ورخصة MIT وصفحة الإصدارات (سطح المكتب 1.4.31)، جرى الاطلاع عليها في 24 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Meetily](/ar/power-local-llm/meetily-review) — أداة تدوين اجتماعات محلية ومفتوحة المصدر تلخّص عبر Ollama.',
          '[مراجعة MacWhisper](/ar/power-local-llm/macwhisper-review) — تطبيق Mac للتفريغ المحلي بـ Whisper وParakeet.',
          '[مقارنة أدوات الصوت والكلام](/ar/power-local-llm/local-llm-voice-audio-compared) — مقارنة الفئة التي تنتمي إليها هذه المراجعة.',
          '[دليل برامج LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/anarlog-review-hero-zh.webp',
    title: 'Anarlog 评测：开源 AI 会议笔记，前身为 Hyprnote',
    seoTitle: 'Anarlog 评测：无机器人的 AI 会议笔记（前身 Hyprnote）',
    intro:
      'Anarlog 是 [Fastrepl, Inc.](https://anarlog.so) 推出的开源 AI 会议笔记应用，支持 macOS、Windows 和 Linux，无需向会议派出机器人即可录制电脑音频。本评测基于官网、文档、隐私政策和 GitHub 仓库（2026 年 10 月 24 日核对）；PromptQuorum 未对该应用做实际测试。',
    metaDescription:
      'Anarlog 评测：前身为 Hyprnote 的开源 AI 会议笔记，无需会议机器人。在本机录音，Apple Silicon Mac 上可本地处理；未经实测。',
    twitterDescription:
      'Anarlog 评测：前身为 Hyprnote 的无机器人开源 AI 会议笔记。哪些在本地运行、哪些会发送到云端、哪些尚未证实。',
    audience:
      '自己记录会议、想用无机器人 AI 摘要，并需要了解哪些环节在本地运行、哪些要付费、哪些来源没有说明的读者。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Anarlog 评测',
    targetKeywords: [
      'anarlog 评测',
      'hyprnote anarlog',
      '开源 ai 会议笔记',
      '无机器人会议记录',
      '本地 ai 会议转写',
      'granola 开源替代',
      '私密 ai 会议记事本',
    ],
    current_models_mentioned: ['Soniqo', 'Parakeet', 'Whisper'],
    current_hardware_mentioned: ['Apple Silicon', 'Mac'],
    leadAnswerBlock:
      '**Anarlog（版本 1.4.31，2026 年 10 月 20 日发布；仓库最近更新于 2026 年 10 月 24 日）是一款开源记事本，在你的设备上录制会议，并生成可编辑的 AI 摘要。** 可以完全本地使用，但需要 Apple Silicon Mac；本文所有表述均来自项目自己的官网、文档和仓库。',
    quickAnswerTop: {
      zh: {
        question: 'Anarlog 能在不把会议发送到云端的情况下使用吗？',
        answer:
          '据项目介绍可以：选择设备端转写模型和本地摘要模型，内容就留在电脑上。内置的本地转写需要 Apple Silicon Mac；在 Windows、Linux 和 Intel Mac 上，转写需要本地的 Deepgram 兼容服务器或云端服务商。',
        bullets: [
          '同时录制麦克风和系统声音，参会者列表中不会出现机器人。',
          '笔记和转写保存在本地数据库中，可导出为 Markdown。',
          '摘要和聊天可使用本地模型、你自己的 API 密钥或付费的 Anarlog Cloud。',
          '听写模式可通过快捷键把语音输入到其他应用。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Anarlog 是什么？', anchor: 'what-is-anarlog' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '运行要求', anchor: 'requirements' },
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
          {
            type: 'one-sentence',
            text: 'Anarlog 是采用 MIT 许可证的会议记事本，采集电脑音频，用你选的模型转写，并生成可编辑的摘要。',
          },
          {
            type: 'plain-terms',
            text: '通话时你记笔记，应用在你自己的电脑上收听而不加入会议，结束后把你的笔记和转写整理成摘要。',
          },
        ],
        items: [
          '维护情况：2026 年 9 月 20 日至 10 月 20 日之间发布了七个稳定版桌面端，因此不适用“项目停更”警告。',
          '许可证：社区版为 MIT；企业目录可查看源码，但采用商业许可。',
          'AI 选择：转写和摘要是两项独立设置，各自可用设备端、自带密钥或 Anarlog Cloud。',
          '费用：免费方案涵盖设备端和自带密钥的使用，托管 AI 为付费方案。',
          '成熟度：macOS 是主要平台，Windows、Linux 和移动端标注为测试版。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum 没有安装或运行该应用，因此不评估转写和摘要质量。',
          },
        ],
      },
      overview: {
        id: 'what-is-anarlog',
        title: 'Anarlog 是什么？',
        content: [
            '**Anarlog 是面向会议的开源 AI 记事本：你在通话中记笔记，它录制电脑音频而不以机器人身份加入，之后生成可编辑的摘要。** 开发方为 Fastrepl, Inc.，仓库将其描述为 Granola 的开源替代品。',
            '该项目最初名为 Hyprnote，后来短暂使用过 Char 这个名字；据 README，团队随后拆分了工作，[char.com](https://char.com) 现在是另一款效率应用，而 Anarlog 就是这款会议记事本。文档中的部分文件路径仍写着“hyprnote”。',
          ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Anarlog 可免费下载，支持 macOS、Windows 和 Linux；macOS 和 Windows 安装包无需终端。**',
        ],
        columns: [
          '选项',
          '获取方式',
        ],
        rows: [
          { '选项': 'macOS', '获取方式': 'Apple Silicon 和 Intel 版 DMG，可从[下载页](https://anarlog.so/download)或 [GitHub Releases](https://github.com/fastrepl/anarlog/releases) 获取' },
          { '选项': 'Windows', '获取方式': 'x64 安装包（测试版）或 [Microsoft Store](https://apps.microsoft.com/detail/XPDLN196NKSW10) 上的页面' },
          { '选项': 'Linux', '获取方式': '适用于 x64 和 ARM64 的 AppImage 与 DEB（测试版）、APT 软件源和 Arch 的 PKGBUILD' },
          { '选项': '价格', '获取方式': '有免费方案；Pro（Cloud）按文档为每月 $14 或每年 $140（美元）' },
          { '选项': '移动端测试版', '获取方式': 'iOS 用 [TestFlight](https://testflight.apple.com/join/y7WJCXvG)，Android 用 [Google Play 测试版](https://play.google.com/apps/testing/so.anarlog.mobile)' },
          { '选项': '官网', '获取方式': '[anarlog.so](https://anarlog.so)' },
          { '选项': '隐私政策', '获取方式': '[anarlog.so/privacy](https://anarlog.so/privacy)' },
          { '选项': '源代码', '获取方式': '[github.com/fastrepl/anarlog](https://github.com/fastrepl/anarlog)' },
        ],
        note: '定价页面依赖 JavaScript 渲染，这里无法读取，因此价格取自官方文档；免费与 Pro 划分之外的方案内容未做核实。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: [
          '**Anarlog 需要 macOS 15 或更高版本，其内置本地转写需要 Apple Silicon Mac。**',
        ],
        columns: [
          '项目',
          '来源说明',
        ],
        rows: [
          { '项目': 'macOS', '来源说明': 'macOS 15 或更高，提供 Apple Silicon 和 Intel 版本' },
          { '项目': 'Windows 和 Linux', '来源说明': '两者均为测试版：Windows x64、Linux x64 和 ARM64' },
          { '项目': '设备端转写', '来源说明': '仅限 Apple Silicon：Soniqo 模型、macOS 26 上的 Apple Speech，或你自备的 whisper.cpp .bin 文件' },
          { '项目': '本地摘要', '来源说明': '由 Ollama、LM Studio 或 Unsloth 提供的模型，或兼容 Mac 上实验性的纯文本 Apple Intelligence' },
          { '项目': '硬件', '来源说明': '未说明 RAM 或 GPU 要求；速度取决于电脑和模型' },
        ],
        note: '麦克风检测、自动停止和会议聊天采集仅支持 macOS 和 Linux，Apple Calendar 集成仅支持 macOS。',
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: [
          '**以下每一项都来自文档或 README，PromptQuorum 均未测试。**',
        ],
        items: [
          '**自动采集。** 与日历关联的会议可按时自动开始，检测到计划外通话时应用会提示你。',
          '**可编辑的笔记和转写。** 通话中你写自己的备忘，可编辑转写文字、分配发言人，并在同一条笔记中继续录音。',
          '**摘要与聊天。** 模板和可自定义的 Auto 摘要生成笔记，聊天可回答关于一场或多场会议的问题。',
          '**导入。** 可上传音频、SRT 或 VTT 文件，也可导入其他助手的会议历史，包括 Granola 的导出。',
          '**智能体与自动化。** 命令行工具和本地 MCP 服务器读取本地数据库，Webhook 和入门工作流可导出 Markdown 或归档笔记。',
        ],
        note: '共享和 Cloud Sync 是需要账号的可选附加功能。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
            '**录音在你的设备上进行，据项目称所有云功能都是可选的。** 根据 2026 年 10 月 21 日更新的隐私政策，笔记、转写和会议数据存储在本地，README 提到了本地 SQLite 数据库。',
            '内容去向取决于你的设置：托管转写会把音频发送给语音识别服务商，政策称任务完成后会删除；托管摘要经由 AI 网关发送文本；你自己的密钥或本地服务器则直接接收。据政策，Cloud Sync 为端到端加密，共享笔记以可读形式存放在服务器上，可选的 Cloud API 会另存一份可读副本。',
            '只要“Share usage data”处于开启状态，就会运行使用分析（PostHog）和抽样的遮罩会话回放，可在“Settings → Privacy”中关闭。',
          ],
        callouts: [
          {
            type: 'note',
            text: '这些是项目自己的声明，而非审计结果，PromptQuorum 没有检查该应用的网络流量。政策称关闭使用数据共享后崩溃报告仍会发送，而文档则描述了一个单独的开关。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**Mac 用户**，希望转写和摘要都留在自己的电脑上。',
          '**想替换机器人式记录工具的人**，更愿意从自己的设备采集。',
          '**已订阅 AI 服务的用户**，想把它用于摘要。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**转写和摘要质量。** PromptQuorum 没有用该应用处理过会议，因此不评估准确率、发言人区分和摘要质量。',
          '**本地性能。** 设备端模型在长通话中的速度和耗电未经测试；文档称结果取决于电脑。',
          '**安全与隐私声明。** 关于加密、删除和不用于训练的说法出自项目本身，此处未经审计。',
          '**当前价格。** 由于定价页面无法读取，Pro 的价格取自文档中的常见问题。',
          '**Windows、Linux 和移动端。** 项目将这些版本标为测试版，我们未做检查。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: [
          '应用',
          '平台',
          '价格 / 许可证',
          '主要区别',
        ],
        rows: [
          { '应用': '[Meetily](/zh/power-local-llm/meetily-review)', '平台': 'Windows、macOS', '价格 / 许可证': '免费 Community Edition / MIT', '主要区别': '自托管记录工具，摘要通过本地 Ollama 模型生成；据项目称无需云端' },
          { '应用': '[MacWhisper](/zh/power-local-llm/macwhisper-review)', '平台': 'macOS', '价格 / 许可证': '免费增值 / 专有', '主要区别': '买断制 Mac 应用，使用本地 Whisper 和 Parakeet 转写（据目录条目）' },
          { '应用': '[Handy](/zh/power-local-llm/handy-review)', '平台': 'macOS、Windows、Linux', '价格 / 许可证': '免费 / MIT', '主要区别': '可向任意应用输入的按键说话式听写，不是会议记事本' },
        ],
        note: '选择之前，请在各应用自己的页面上确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '我需要告知别人我在录音吗？',
            a: '隐私政策和文档都说明，在法律要求的地方，通知和取得同意是你的责任，因为录音可能包含他人的声音。Anarlog 不会向通话添加参与者，所以不会自动通知任何人。',
          },
          {
            q: 'Anarlog 会保留音频多久？',
            a: '在“Settings → Meetings → Audio file retention”中可选择 Don’t save、1 day、3 days、1 week、1 month 或 Forever。期限过后录音会被删除，而笔记和转写会保留。',
          },
          {
            q: '支持转写哪些语言？',
            a: 'Cloud 选择器涵盖一长串语言，包括阿拉伯语、日语、韩语和中文。Soniqo 可转写 25 种欧洲语言，Apple Speech 一次只处理一种受支持的语言，你自己的服务商则按其自身的语言列表。',
          },
          {
            q: '可以用我的 ChatGPT 或 Claude 订阅来生成摘要吗？',
            a: '可以，据文档：在“Settings → Intelligence”中可连接 Claude、ChatGPT、Grok、GitHub Copilot 或 Kimi Code，无需另外的 API 密钥。每台设备需单独连接。',
          },
          {
            q: '项目会用我的会议训练 AI 模型吗？',
            a: '隐私政策称绝不会把笔记、转写、音频或日历数据用于训练 AI 模型。如果使用你自己的服务商，则适用该服务商的保留和训练政策。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Anarlog 是一个发布活跃的开源方案，可以在没有机器人的情况下记录会议，并在每个环节真正选择本地或云端 AI。不足之处是：内置本地转写需要 Apple Silicon Mac，Windows、Linux 和移动端为测试版，托管 AI 需付费，而质量和隐私方面的声明在此都无法核实。它适合想把会议留在自己电脑上、并能先试用免费方案的 Mac 用户；对保密要求严格的团队，在依赖它之前应仔细阅读隐私政策和服务商设置。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Anarlog 官网](https://anarlog.so) — 产品定位、下载和定价页面（2026 年 10 月 24 日核对）。',
          '[Anarlog 隐私政策](https://anarlog.so/privacy) — 数据收集、服务商和退出选项（2026 年 10 月 21 日更新）。',
          '[Anarlog 文档](https://docs.anarlog.so) — 安装、离线使用、模型与服务商、数据与隐私、常见问题（2026 年 10 月 24 日核对）。',
          '[GitHub 上的 Anarlog](https://github.com/fastrepl/anarlog) — README、MIT 许可证和 Releases 页面（桌面端 1.4.31）（2026 年 10 月 24 日核对）。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Meetily 评测](/zh/power-local-llm/meetily-review) — 通过 Ollama 生成摘要的本地开源会议记录工具。',
          '[MacWhisper 评测](/zh/power-local-llm/macwhisper-review) — 使用本地 Whisper 和 Parakeet 转写的 Mac 应用。',
          '[语音与音频工具对比](/zh/power-local-llm/local-llm-voice-audio-compared) — 本评测所属的类别对比。',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/anarlog-review-hero-ko.webp',
    title: 'Anarlog 리뷰: 이전 이름 Hyprnote, 오픈소스 AI 회의 노트',
    seoTitle: 'Anarlog 리뷰: 봇 없는 AI 회의 노트(전 Hyprnote)',
    intro:
      'Anarlog는 [Fastrepl, Inc.](https://anarlog.so)가 만든 macOS, Windows, Linux용 오픈소스 AI 회의 노트 앱으로, 통화에 봇을 보내지 않고 컴퓨터의 오디오를 녹음합니다. 이 리뷰는 공식 웹사이트, 문서, 개인정보 처리방침, GitHub 저장소(2026년 10월 24일 확인)를 바탕으로 하며, PromptQuorum은 앱을 직접 사용해 보지 않았습니다.',
    metaDescription:
      'Anarlog 리뷰: 이전 이름이 Hyprnote인 오픈소스 AI 회의 노트로 봇이 필요 없습니다. 기기에서 녹음하고 Apple Silicon Mac에서는 로컬 처리도 가능합니다. 미검증.',
    twitterDescription:
      'Anarlog 리뷰: 이전 이름 Hyprnote, 봇 없는 오픈소스 AI 회의 노트. 로컬에서 도는 부분, 클라우드로 가는 부분, 확인되지 않은 점을 정리했습니다.',
    audience:
      '회의 노트를 직접 작성하면서 통화에 봇 없이 AI 요약을 쓰고 싶고, 무엇이 로컬에서 돌고 무엇이 유료이며 출처가 무엇을 밝히지 않았는지 알아야 하는 분입니다.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Anarlog 리뷰',
    targetKeywords: [
      'anarlog 리뷰',
      'hyprnote anarlog',
      '오픈소스 ai 회의 노트',
      '봇 없는 회의록 앱',
      '로컬 ai 회의 전사',
      'granola 대안 오픈소스',
      '회의용 비공개 ai 노트',
    ],
    current_models_mentioned: ['Soniqo', 'Parakeet', 'Whisper'],
    current_hardware_mentioned: ['Apple Silicon', 'Mac'],
    leadAnswerBlock:
      '**Anarlog(버전 1.4.31, 2026년 10월 20일 출시, 저장소 최종 업데이트 2026년 10월 24일)는 회의를 기기에서 녹음해 편집 가능한 AI 요약으로 만들어 주는 오픈소스 노트 앱입니다.** 완전한 로컬 사용이 가능하지만 Apple Silicon Mac이 필요하며, 이 글의 모든 서술은 프로젝트 자체의 웹사이트, 문서, 저장소에서 나온 것입니다.',
    quickAnswerTop: {
      ko: {
        question: 'Anarlog는 회의를 클라우드로 보내지 않고도 쓸 수 있습니까?',
        answer:
          '프로젝트에 따르면 가능합니다. 기기 내 전사 모델과 로컬 요약 모델을 고르면 내용이 컴퓨터 밖으로 나가지 않습니다. 내장 로컬 전사는 Apple Silicon Mac이 필요하므로, Windows, Linux, Intel Mac에서는 전사를 위해 로컬 Deepgram 호환 서버나 클라우드 제공업체가 필요합니다.',
        bullets: [
          '마이크와 시스템 소리를 녹음하며 참가자 목록에 봇이 나타나지 않습니다.',
          '노트와 전사본은 로컬 데이터베이스에 저장되며 Markdown으로 내보낼 수 있습니다.',
          '요약과 채팅에는 로컬 모델, 본인의 API 키, 유료 Anarlog Cloud를 쓸 수 있습니다.',
          '단축키로 음성을 다른 앱에 입력하는 받아쓰기 모드가 있습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Anarlog란?', anchor: 'what-is-anarlog' },
      { label: '입수 방법', anchor: 'get-it' },
      { label: '요구 사항', anchor: 'requirements' },
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
          {
            type: 'one-sentence',
            text: 'Anarlog는 MIT 라이선스의 회의 노트 앱으로, 컴퓨터의 오디오를 받아 선택한 모델로 전사하고 편집 가능한 요약을 작성합니다.',
          },
          {
            type: 'plain-terms',
            text: '통화 중에 메모를 적으면 앱은 통화에 참여하지 않고 내 컴퓨터에서 소리를 듣다가, 끝난 뒤 메모와 전사본으로 요약을 만듭니다.',
          },
        ],
        items: [
          '유지보수: 2026년 9월 20일부터 10월 20일 사이에 안정 버전 데스크톱 릴리스가 일곱 번 나왔으므로 방치된 프로젝트 경고는 해당하지 않습니다.',
          '라이선스: 커뮤니티 앱은 MIT이며, 엔터프라이즈 폴더는 소스를 볼 수 있지만 상용 라이선스입니다.',
          'AI 선택: 전사와 요약은 별도 설정이며 각각 기기 내, 본인 키, Anarlog Cloud 중에서 고릅니다.',
          '비용: 무료 플랜으로 기기 내 처리와 본인 키 사용이 가능하고, 호스팅 AI는 유료 플랜입니다.',
          '성숙도: 주력 플랫폼은 macOS이며, Windows, Linux, 모바일 앱은 베타로 표시됩니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum은 앱을 설치하거나 실행하지 않았으므로 전사와 요약의 품질은 평가하지 않습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-anarlog',
        title: 'Anarlog란?',
        content: [
            '**Anarlog는 회의용 오픈소스 AI 노트 앱입니다. 통화 중에 메모를 적으면 봇으로 참여하지 않고 컴퓨터의 오디오를 녹음하고, 끝난 뒤 편집 가능한 요약을 만듭니다.** 제작사는 Fastrepl, Inc.이며, 저장소는 Granola의 오픈소스 대안이라고 설명합니다.',
            '프로젝트는 Hyprnote로 시작해 잠시 Char라는 이름을 썼습니다. README에 따르면 이후 팀이 작업을 나누어 [char.com](https://char.com)은 별도의 생산성 앱이 되었고 Anarlog는 이 회의 노트 앱입니다. 문서의 일부 파일 경로에는 아직 “hyprnote”라고 적혀 있습니다.',
          ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Anarlog는 macOS, Windows, Linux용으로 무료 다운로드할 수 있으며 macOS와 Windows 설치 파일은 터미널이 필요 없습니다.**',
        ],
        columns: [
          '옵션',
          '입수 방법',
        ],
        rows: [
          { '옵션': 'macOS', '입수 방법': 'Apple Silicon용과 Intel용 DMG를 [다운로드 페이지](https://anarlog.so/download) 또는 [GitHub 릴리스](https://github.com/fastrepl/anarlog/releases)에서 받을 수 있습니다' },
          { '옵션': 'Windows', '입수 방법': 'x64 설치 파일(베타) 또는 [Microsoft Store](https://apps.microsoft.com/detail/XPDLN196NKSW10) 등록 페이지' },
          { '옵션': 'Linux', '입수 방법': 'x64와 ARM64용 AppImage 및 DEB(베타), APT 저장소, Arch용 PKGBUILD' },
          { '옵션': '가격', '입수 방법': '무료 플랜이 있으며 Pro(Cloud)는 문서에 따르면 월 14달러 또는 연 140달러(미국 달러 기준)' },
          { '옵션': '모바일 베타', '입수 방법': 'iOS는 [TestFlight](https://testflight.apple.com/join/y7WJCXvG), Android는 [Google Play 베타](https://play.google.com/apps/testing/so.anarlog.mobile)' },
          { '옵션': '웹사이트', '입수 방법': '[anarlog.so](https://anarlog.so)' },
          { '옵션': '개인정보 처리방침', '입수 방법': '[anarlog.so/privacy](https://anarlog.so/privacy)' },
          { '옵션': '소스 코드', '입수 방법': '[github.com/fastrepl/anarlog](https://github.com/fastrepl/anarlog)' },
        ],
        note: '요금 페이지는 JavaScript로 렌더링되어 여기서는 읽을 수 없었기 때문에 가격은 공식 문서를 따랐으며, 무료와 Pro 구분을 넘어서는 플랜 내용은 확인하지 않았습니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: [
          '**Anarlog는 macOS 15 이상이 필요하며, 내장 로컬 전사에는 Apple Silicon Mac이 필요합니다.**',
        ],
        columns: [
          '항목',
          '출처의 설명',
        ],
        rows: [
          { '항목': 'macOS', '출처의 설명': 'macOS 15 이상, Apple Silicon용과 Intel용 빌드 제공' },
          { '항목': 'Windows와 Linux', '출처의 설명': '둘 다 베타: Windows x64, Linux x64와 ARM64' },
          { '항목': '기기 내 전사', '출처의 설명': 'Apple Silicon 전용: Soniqo 모델, macOS 26의 Apple Speech, 또는 직접 준비한 whisper.cpp .bin 파일' },
          { '항목': '로컬 요약', '출처의 설명': 'Ollama, LM Studio, Unsloth가 제공하는 모델 또는 호환 Mac의 실험적인 텍스트 전용 Apple Intelligence' },
          { '항목': '하드웨어', '출처의 설명': 'RAM이나 GPU 요구 사항은 명시되어 있지 않으며 속도는 컴퓨터와 모델에 따라 달라집니다' },
        ],
        note: '마이크 감지, 자동 중지, 회의 채팅 캡처는 macOS와 Linux에서만 동작하고, Apple Calendar 연동은 macOS 전용입니다.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 문서 또는 README에서 가져온 것이며 PromptQuorum이 테스트한 것은 없습니다.**',
        ],
        items: [
          '**자동 캡처.** 캘린더와 연결된 회의를 예정된 시간에 시작할 수 있고, 예정에 없던 통화를 감지하면 알려 줍니다.',
          '**편집 가능한 노트와 전사본.** 통화 중에 직접 메모를 쓰고, 전사 텍스트를 편집하고, 화자를 지정하며, 같은 노트에서 녹음을 이어 갈 수 있습니다.',
          '**요약과 채팅.** 템플릿과 맞춤 설정이 가능한 Auto 요약으로 노트를 만들고, 채팅으로 한 개 또는 여러 회의에 대해 질문할 수 있습니다.',
          '**가져오기.** 오디오, SRT, VTT 파일을 올리거나 Granola 내보내기를 포함한 다른 어시스턴트의 회의 기록을 가져올 수 있습니다.',
          '**에이전트와 자동화.** 명령줄 도구와 로컬 MCP 서버가 로컬 데이터베이스를 읽고, 웹훅과 시작용 워크플로로 Markdown을 내보내거나 노트를 정리할 수 있습니다.',
        ],
        note: '공유와 Cloud Sync는 계정이 필요한 선택형 추가 기능입니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
            '**녹음은 기기에서 이루어지며, 프로젝트에 따르면 모든 클라우드 기능은 선택 사항입니다.** 2026년 10월 21일에 업데이트된 개인정보 처리방침에 따르면 노트, 전사본, 회의 데이터는 로컬에 저장되며 README는 로컬 SQLite 데이터베이스를 언급합니다.',
            '내용이 어디로 가는지는 설정에 달려 있습니다. 호스팅 전사는 오디오를 음성 인식 제공업체에 보내며 방침에 따르면 작업이 끝나면 삭제됩니다. 호스팅 요약은 AI 게이트웨이를 통해 텍스트를 보내고, 본인 키나 로컬 서버는 직접 받습니다. 방침에 따르면 Cloud Sync는 종단간 암호화되고, 공유 노트는 서버에 읽을 수 있는 형태로 저장되며, 선택 사항인 Cloud API는 읽을 수 있는 별도 사본을 보관합니다.',
            '사용 분석(PostHog)과 표본 추출된 마스킹 세션 재생은 “Share usage data”가 켜져 있는 동안 작동하며 “Settings → Privacy”에서 끌 수 있습니다.',
          ],
        callouts: [
          {
            type: 'note',
            text: '이는 프로젝트 자체의 선언이지 감사 결과가 아니며, PromptQuorum은 앱의 네트워크 트래픽을 검사하지 않았습니다. 방침은 사용 데이터 공유를 꺼도 충돌 보고서는 계속 전송된다고 하지만, 문서에는 이를 위한 별도 스위치가 설명되어 있습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**Mac 사용자**로 전사와 요약을 자기 컴퓨터에 두고 싶은 분.',
          '**봇 방식 노트 도구를 대체하려는 분**으로 자기 기기에서 캡처하길 원하는 분.',
          '**AI 구독을 이미 쓰는 분**으로 요약에도 활용하고 싶은 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**전사와 요약 품질.** PromptQuorum은 앱으로 회의를 처리해 보지 않았으므로 정확도, 화자 구분, 요약 품질은 평가하지 않습니다.',
          '**로컬 성능.** 긴 통화에서 기기 내 모델의 속도와 배터리 소모는 검증되지 않았으며, 문서도 결과가 컴퓨터에 따라 다르다고 합니다.',
          '**보안과 개인정보 주장.** 암호화, 삭제, 학습 미사용에 관한 진술은 프로젝트 자체의 것이며 여기서 감사하지 않았습니다.',
          '**현재 가격.** 요금 페이지를 읽을 수 없어 Pro 가격은 문서의 FAQ를 따랐습니다.',
          '**Windows, Linux, 모바일.** 프로젝트가 베타로 표시한 빌드이며 직접 살펴보지 않았습니다.',
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
          '핵심 차이점',
        ],
        rows: [
          { '앱': '[Meetily](/ko/power-local-llm/meetily-review)', '플랫폼': 'Windows, macOS', '가격 / 라이선스': '무료 Community Edition / MIT', '핵심 차이점': '로컬 Ollama 모델로 요약하는 자체 호스팅 노트 도구이며, 프로젝트에 따르면 클라우드가 필요 없습니다' },
          { '앱': '[MacWhisper](/ko/power-local-llm/macwhisper-review)', '플랫폼': 'macOS', '가격 / 라이선스': '프리미엄 / 독점', '핵심 차이점': '로컬 Whisper와 Parakeet으로 전사하는 1회 구매형 Mac 앱(디렉터리 항목 기준)' },
          { '앱': '[Handy](/ko/power-local-llm/handy-review)', '플랫폼': 'macOS, Windows, Linux', '가격 / 라이선스': '무료 / MIT', '핵심 차이점': '회의 노트가 아니라 어떤 앱에든 입력하는 푸시투토크 받아쓰기' },
        ],
        note: '선택하기 전에 각 앱의 가격, 라이선스, 플랫폼을 해당 앱의 자체 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '녹음 중이라고 참가자에게 알려야 합니까?',
            a: '개인정보 처리방침과 문서 모두 법이 요구하는 경우의 고지와 동의는 사용자의 책임이라고 밝힙니다. 녹음에는 다른 사람의 목소리가 포함될 수 있기 때문입니다. Anarlog는 통화에 참가자를 추가하지 않으므로 누구에게도 자동으로 알려지지 않습니다.',
          },
          {
            q: '오디오는 얼마나 보관됩니까?',
            a: '“Settings → Meetings → Audio file retention”에서 Don’t save, 1 day, 3 days, 1 week, 1 month, Forever 중에서 고를 수 있습니다. 기간이 지나면 녹음은 사라지고 노트와 전사본은 남습니다.',
          },
          {
            q: '어떤 언어를 전사합니까?',
            a: 'Cloud 선택 목록에는 아랍어, 일본어, 한국어, 중국어를 포함한 긴 언어 목록이 있습니다. Soniqo는 유럽 언어 25개를, Apple Speech는 지원 언어를 한 번에 하나씩 처리하며, 본인 제공업체는 그 제공업체의 목록을 따릅니다.',
          },
          {
            q: 'ChatGPT나 Claude 구독을 요약에 쓸 수 있습니까?',
            a: '문서에 따르면 가능합니다. “Settings → Intelligence”에서 Claude, ChatGPT, Grok, GitHub Copilot, Kimi Code를 연결하면 별도의 API 키가 필요 없습니다. 기기마다 따로 연결합니다.',
          },
          {
            q: '프로젝트가 제 회의로 AI 모델을 학습시킵니까?',
            a: '개인정보 처리방침은 노트, 전사본, 오디오, 캘린더 데이터를 AI 모델 학습에 쓰지 않는다고 밝힙니다. 본인 제공업체를 쓰면 그 제공업체의 보관 및 학습 정책이 적용됩니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Anarlog는 봇 없이 회의 노트를 작성할 수 있는, 릴리스가 활발한 오픈소스 선택지이며 각 단계에서 로컬 AI와 클라우드 AI를 실제로 고를 수 있습니다. 반면 내장 로컬 전사는 Apple Silicon Mac이 필요하고, Windows, Linux, 모바일 앱은 베타이며, 호스팅 AI는 유료이고, 품질과 개인정보에 관한 주장은 여기서 확인하지 못했습니다. 회의를 자기 컴퓨터에 두고 싶고 먼저 무료 플랜을 써 볼 수 있는 Mac 사용자에게 적합하며, 기밀 요건이 엄격한 팀은 의존하기 전에 개인정보 처리방침과 제공업체 설정을 꼼꼼히 읽어야 합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Anarlog 웹사이트](https://anarlog.so) — 제품 소개, 다운로드 및 요금 페이지(2026년 10월 24일 확인).',
          '[Anarlog 개인정보 처리방침](https://anarlog.so/privacy) — 데이터 수집, 제공업체, 수신 거부 방법(2026년 10월 21일 업데이트).',
          '[Anarlog 문서](https://docs.anarlog.so) — 설치, 오프라인 사용, 모델과 제공업체, 데이터와 개인정보, FAQ(2026년 10월 24일 확인).',
          '[GitHub의 Anarlog](https://github.com/fastrepl/anarlog) — README, MIT 라이선스, 릴리스 페이지(데스크톱 1.4.31)(2026년 10월 24일 확인).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Meetily 리뷰](/ko/power-local-llm/meetily-review) — Ollama로 요약하는 로컬 오픈소스 회의 노트 도구.',
          '[MacWhisper 리뷰](/ko/power-local-llm/macwhisper-review) — 로컬 Whisper와 Parakeet으로 전사하는 Mac 앱.',
          '[음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 이 리뷰가 속한 카테고리 비교.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 목록.',
        ],
      },
    },
  },
}
