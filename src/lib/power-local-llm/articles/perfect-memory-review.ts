// Perfect Memory AI Review: Searchable Screen and Meeting Memory for Windows and Mac
// Slug: perfect-memory-review
// Companion to: anarlog-review, meetily-review, local-llm-voice-audio-compared
// Sources: perfectmemory.ai (home, /pricing, /pricing/pro-offline, /private-by-design, /mcp, /blog, /download, install guide), the privacy policy
// (last updated 2026-06-30) and the GitHub Releases update feed DariusKocar/PerfectMemoryMac-releases (v0.17.25, 2026-10-17), all checked 2026-10-30 —
// no hands-on testing. Prices are the maker's USD figures, never converted. Locale blocks written with docs/geo-translation.md applied.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/perfect-memory-review-hero-en.webp',
    title: 'Perfect Memory AI Review: Searchable Screen and Meeting Memory',
    seoTitle: 'Perfect Memory AI Review: Searchable Screen and Meetings',
    intro:
      'Perfect Memory AI is a Windows and Mac app from [Perfect Memory llc](https://www.perfectmemory.ai) that records what appears on your screen and transcribes your meetings on your own machine, so you can search and ask about them later. Its AI answers are only local if you connect Ollama, LM Studio or Jan; otherwise they go through the maker\'s server. This review is based on the maker\'s website, privacy policy and release feed, checked on 30 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'Perfect Memory AI review: Windows and Mac app that records your screen and meetings locally. AI answers stay local only with Ollama, LM Studio or Jan.',
    twitterDescription:
      'Perfect Memory AI review: searchable screen and meeting memory for Windows and Mac. Recording is local, AI answers only with Ollama, LM Studio or Jan.',
    audience:
      'People who want a searchable record of their screen and meetings and need to know which parts run locally, which parts reach the cloud and what the sources leave unconfirmed.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Perfect Memory AI review',
    targetKeywords: [
      'perfect memory ai review',
      'perfectmemory.ai',
      'local screen recording search',
      'ai meeting transcription windows mac',
      'rewind alternative windows',
      'ollama screen memory app',
      'mcp screen history claude',
    ],
    current_models_mentioned: ['ChatGPT', 'Ollama', 'LM Studio', 'Jan'],
    current_hardware_mentioned: ['Windows 10', 'Windows 11', 'macOS 14', 'Apple silicon'],
    leadAnswerBlock:
      '**Perfect Memory AI (Mac version 0.17.25, released on 17 October 2026) is a Windows and Mac app that records your screen and transcribes your meetings on your own computer so you can search them.** It is a hybrid, not a fully local tool: the AI that answers your questions can run in the cloud.',
    quickAnswerTop: {
      en: {
        question: 'Is Perfect Memory AI a local LLM app?',
        answer:
          'Only if you set it up that way. Recording, text recognition and speech recognition run on your computer, but the built-in AI sends your question through the maker\'s server to an AI provider; pointing the assistant at a model in Ollama, LM Studio or Jan keeps the answer local.',
        bullets: [
          'Screen history is read as text and can be searched by keyword or meaning.',
          'Meetings in Zoom, Google Meet, Teams, Slack, Webex and WhatsApp are transcribed.',
          'An assistant answers questions about what you saw, said or heard.',
          'An optional MCP connection lets Claude, ChatGPT or Cursor query your history.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Perfect Memory AI?', anchor: 'what-is-perfect-memory' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Local vs. Cloud: Data Flow and Privacy', anchor: 'privacy' },
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
            text: 'Perfect Memory AI is a closed-source desktop app that logs your screen and meetings on your computer and lets an AI assistant answer questions about them.',
          },
          {
            type: 'plain-terms',
            text: 'It keeps a searchable diary of what you have seen on screen and said in meetings; you choose whether the AI that reads that diary runs on your machine or in the cloud.',
          },
        ],
        items: [
          'Maintenance: the Mac build 0.17.25 was released on 17 October 2026 after frequent 0.17.x builds since September, so no stale-project warning applies.',
          'Cost: a free plan, Pro at $15 a month billed yearly, and a one-time Pro Offline plan for people who bring their own AI.',
          'Platforms: Windows 10 and 11, and macOS 14 or later on Apple silicon.',
          'Maker: Perfect Memory llc, with no published source code.',
          'Integrations: an optional MCP connection for Claude, ChatGPT and other assistants, off by default.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the maker\'s website, privacy policy and release feed, checked on 30 October 2026. PromptQuorum has not installed or benchmarked the app, so capture quality, search accuracy and local-model results are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-perfect-memory',
        title: 'What Is Perfect Memory AI?',
        content: [
          '**Perfect Memory AI records your screen and your meetings on a Windows PC or Mac, reads the text on screen, and lets you search and question that history.** The maker, Perfect Memory llc, calls it a way to ask about "anything you\'ve seen, said or heard". It is sold in a free plan, a yearly Pro plan and a one-time Pro Offline plan.',
          'The Mac app is labelled new on the download page. The Windows app has its own download and a Microsoft Store listing. The maker also publishes comparison pages against Microsoft Recall, Screenpipe, Rewind and Granola on its blog; these are the maker\'s own views and were not evaluated here.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Perfect Memory AI is a double-click install on Windows and Mac; there is no Linux, mobile or web version listed.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          { 'Option': 'Windows', 'How to get it': '[Microsoft Store listing](https://apps.microsoft.com/detail/xp9m33wlfs472f) or [MSI installer](https://www.perfectmemory.ai/download/windows); Windows 10 and 11' },
          { 'Option': 'macOS', 'How to get it': '[DMG download](https://www.perfectmemory.ai/download); macOS 14 or later, Apple silicon (M1 or newer)' },
          { 'Option': 'Plans', 'How to get it': 'Free $0; Pro $15 a month billed yearly; Pro Offline $79 one-time, bring your own AI' },
          { 'Option': 'Website', 'How to get it': '[perfectmemory.ai](https://www.perfectmemory.ai)' },
          { 'Option': 'Privacy policy', 'How to get it': '[perfectmemory.ai/privacy](https://www.perfectmemory.ai/privacy)' },
          { 'Option': 'Source code', 'How to get it': 'Not published' },
        ],
        note: 'Version reviewed: Mac 0.17.25, published on 17 October 2026 on the maker\'s release feed. The Windows installer is served from a folder named 4.0.187, but the site does not say whether that is the app version, so no Windows release date is given. Prices are the maker\'s USD figures and are not converted; the free plan includes 10 AI assists and 30 AI meetings a month.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**The steps follow the maker\'s install guide; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Run the Windows installer or open the Mac disk image and drag Perfect Memory into Applications.',
          },
          {
            title: 'Grant permissions',
            whyItMatters: 'On a Mac, allow Screen Recording first, because nothing is captured without it, then Microphone for meeting transcripts.',
          },
          {
            title: 'Pick your AI',
            whyItMatters: 'Use the built-in assistant, or connect Ollama, LM Studio or Jan if you want answers to stay on your computer.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the maker\'s website or blog; none has been independently tested.**',
        ],
        items: [
          '**Screen history search.** Text on your screen is read and indexed, so you can search by keyword or meaning and filter by app, website and date.',
          '**Meeting transcripts.** The app recognises meetings in Zoom, Google Meet, Teams, Slack, Webex and WhatsApp and transcribes what you say and hear, with no bot joining the call.',
          '**AI assistant.** Ask about what you saw, said or heard; paid plans add standup updates, one-on-one agenda suggestions, a daily brief and research summaries.',
          '**MCP tools.** Connected assistants can call search_history, get_moment, get_meeting and get_timeline to read your history.',
        ],
        note: 'The free plan includes unlimited search, recordings, transcripts and MCP calls; the limits apply to AI assists and AI meetings.',
      },
      privacy: {
        id: 'privacy',
        title: 'Local vs. Cloud: Data Flow and Privacy',
        content: [
          '**Screenshots, the text read from them and meeting transcripts are made and stored on your own computer, and the maker says it does not upload recordings.** The privacy policy, last updated on 30 June 2026, says that by default no screenshots, video or audio leave the device. Usage analytics and crash reports can be switched off; the policy lists Vercel, AppCenter, Sentry, Fathom and Segment as analytics partners.',
          '**AI answers are the hybrid part.** If you point the assistant at a model on your computer through Ollama, LM Studio or Jan, the maker says questions are answered there. With the built-in AI, your question and the parts of your history it needs go through the maker\'s server to the AI provider, which the policy names as OpenAI, without your account details; where that processing happens is not stated.',
          'The Claude and ChatGPT connection is off until you turn it on. When an assistant asks, a cloud relay passes the request to your computer and the result back without keeping either; the content then reaches that assistant\'s provider under its own terms. You choose whether it can read screen history, meetings or both.',
          'The maker says that on a Mac every screenshot is encrypted with AES-256 and the key sits in the Keychain; on Windows the database, including recognised text, is encrypted automatically and screenshots can be encrypted in Settings. The search index is not encrypted by the app, so it relies on FileVault or BitLocker. Recording pauses in private and incognito browser windows, apps such as a password manager can be excluded, and you can delete the last 15 minutes or everything.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maker\'s declarations, not audit results, and no source code is published. PromptQuorum has not inspected the app\'s network traffic. Recording screens and meetings can capture other people\'s information, so check consent rules for your situation; this is not legal advice.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**People who lose track of what they saw** and want one search box across their screen history.',
          '**Meeting-heavy workers** who want transcripts without a bot in the call.',
          '**Ollama, LM Studio or Jan users** who want a local model to answer questions about their own history.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Local-model results.** PromptQuorum did not run a local model with the app, so answer quality, speed and the hardware needed are unknown; the site states no system requirements beyond the operating system.',
          '**Security and audits.** No source code or independent audit is published, and the privacy policy does not name the country where the company is incorporated or where OpenAI processing takes place.',
          '**Windows version and date.** The site gives no Windows version number or release date, and the Mac app carries early 0.x version numbers and recent pre-release builds.',
          '**Pro Offline scope.** The pricing page says it requires your own AI and is a one-time payment, but does not list what else it includes.',
          '**Capture quality and cost.** Text-recognition accuracy, meeting-transcript quality, disk use and battery impact of continuous recording are untested.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[Anarlog](/power-local-llm/anarlog-review)', 'Platforms': 'macOS, Windows, Linux', 'Price / license': 'Free plan / MIT', 'Key difference': 'Open-source, bot-free meeting notepad that records on your device; local or cloud AI' },
          { 'App': '[Meetily](/power-local-llm/meetily-review)', 'Platforms': 'Windows, macOS', 'Price / license': 'Free Community Edition / MIT', 'Key difference': 'Self-hosted meeting notetaker; local transcription, summaries via Ollama' },
        ],
        note: 'No other screen-history app has a PromptQuorum review yet, so these are the nearest reviewed meeting-notes tools; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I use it without sending data to OpenAI?',
            a: 'Yes, per the maker: point the assistant at a model running on your own computer. You then need hardware that can run that model, and PromptQuorum has not tested the result.',
          },
          {
            q: 'What does the $79 Pro Offline plan buy?',
            a: 'The pricing page describes it as a one-time payment with "unlimited everything with your own AI", meaning you supply the model. It does not say how long updates are included.',
          },
          {
            q: 'Can I delete what it recorded?',
            a: 'The maker says you can delete the last 15 minutes or everything in a couple of clicks, and exclude apps from recording. Whether the search index is cleared with it is not stated.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Perfect Memory AI is an actively updated way to get a searchable record of your screen and meetings on Windows and Mac, with a free plan to try and a real route to local AI. Against that, the default AI path goes through the maker\'s server to OpenAI, the code is closed, no Windows version is published, and none of the privacy or accuracy claims could be checked here. It suits people who are prepared to connect their own local model and test the free plan first; anyone who handles confidential material should read the privacy policy and the encryption notes before recording.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Perfect Memory AI website](https://www.perfectmemory.ai) — features, MCP page and blog, checked 30 October 2026.',
          '[Pricing](https://www.perfectmemory.ai/pricing) and [Pro Offline pricing](https://www.perfectmemory.ai/pricing/pro-offline) — plans and one-time payment, checked 30 October 2026.',
          '[Private by design](https://www.perfectmemory.ai/private-by-design) — local AI, encryption and recording controls, checked 30 October 2026.',
          '[Privacy policy](https://www.perfectmemory.ai/privacy) — data collection and third parties, last updated 30 June 2026.',
          '[Download page](https://www.perfectmemory.ai/download) and [install guide](https://www.perfectmemory.ai/support/getting-started/how-to-install) — platforms and requirements, checked 30 October 2026.',
          '[Mac release feed](https://github.com/DariusKocar/PerfectMemoryMac-releases/releases) — version 0.17.25 and release dates, read 30 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Anarlog Review](/power-local-llm/anarlog-review) — an open-source meeting notepad with a local or cloud AI choice.',
          '[Meetily Review](/power-local-llm/meetily-review) — a self-hosted meeting notetaker with local summaries.',
          '[Voice and Audio Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — the category comparison for transcription tools.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Perfect Memory AI Review: Searchable Screen and Meeting Memory',
      description:
        'Perfect Memory AI review: a Windows and Mac app that records your screen and meetings on your machine. Plans, requirements, data flow, local LLM options and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/perfect-memory-review',
      inLanguage: 'en',
      datePublished: '2026-10-30',
      dateModified: '2026-10-30',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'People evaluating a searchable screen and meeting memory app' },
      about: [
        { '@type': 'Thing', name: 'Perfect Memory AI' },
        { '@type': 'Thing', name: 'Screen history search' },
        { '@type': 'Thing', name: 'Meeting transcription' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/perfect-memory-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Perfect Memory AI Review', item: 'https://www.promptquorum.com/power-local-llm/perfect-memory-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/perfect-memory-review-hero-de.webp',
    title: 'Perfect Memory AI im Test: durchsuchbares Bildschirm- und Meeting-Gedächtnis',
    seoTitle: 'Perfect Memory AI im Test: Bildschirm und Meetings suchen',
    intro:
      'Perfect Memory AI ist eine Windows- und Mac-App von [Perfect Memory llc](https://www.perfectmemory.ai), die aufzeichnet, was auf Ihrem Bildschirm erscheint, und Ihre Meetings auf Ihrem eigenen Rechner transkribiert, sodass Sie später suchen und nachfragen können. Die KI-Antworten bleiben nur lokal, wenn Sie Ollama, LM Studio oder Jan anbinden; sonst laufen sie über den Server des Herstellers. Diese Rezension stützt sich auf Website, Datenschutzerklärung und Release-Feed des Herstellers, geprüft am 30. Oktober 2026; PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'Perfect Memory AI im Test: Windows- und Mac-App, die Bildschirm und Meetings lokal aufzeichnet. KI-Antworten nur mit Ollama, LM Studio oder Jan lokal.',
    twitterDescription:
      'Perfect Memory AI im Test: durchsuchbares Bildschirm- und Meeting-Gedächtnis für Windows und Mac. Aufzeichnung lokal, KI lokal nur mit Ollama, LM Studio oder Jan.',
    audience:
      'Menschen, die ein durchsuchbares Protokoll ihres Bildschirms und ihrer Meetings wollen und wissen müssen, was lokal läuft, was in die Cloud gelangt und was die Quellen offenlassen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Perfect Memory AI Test',
    targetKeywords: [
      'perfect memory ai test',
      'perfectmemory.ai',
      'bildschirmaufzeichnung lokal durchsuchen',
      'ki meeting transkription windows mac',
      'rewind alternative windows',
      'ollama bildschirm gedächtnis app',
      'mcp bildschirmverlauf claude',
    ],
    current_models_mentioned: ['ChatGPT', 'Ollama', 'LM Studio', 'Jan'],
    current_hardware_mentioned: ['Windows 10', 'Windows 11', 'macOS 14', 'Apple silicon'],
    leadAnswerBlock:
      '**Perfect Memory AI (Mac-Version 0.17.25, veröffentlicht am 17. Oktober 2026) ist eine Windows- und Mac-App, die Ihren Bildschirm aufzeichnet und Ihre Meetings auf Ihrem eigenen Rechner transkribiert, damit Sie beides durchsuchen können.** Sie ist ein Hybrid und kein rein lokales Werkzeug: Die KI, die Ihre Fragen beantwortet, kann in der Cloud laufen.',
    quickAnswerTop: {
      de: {
        question: 'Ist Perfect Memory AI eine App mit lokalem LLM?',
        answer:
          'Nur, wenn Sie sie so einrichten. Aufzeichnung, Texterkennung und Spracherkennung laufen auf Ihrem Rechner, doch die eingebaute KI schickt Ihre Frage über den Server des Herstellers an einen KI-Anbieter; zeigt der Assistent auf ein Modell in Ollama, LM Studio oder Jan, bleibt die Antwort lokal.',
        bullets: [
          'Der Bildschirmverlauf wird als Text gelesen und lässt sich nach Stichwort oder Bedeutung durchsuchen.',
          'Meetings in Zoom, Google Meet, Teams, Slack, Webex und WhatsApp werden transkribiert.',
          'Ein Assistent beantwortet Fragen dazu, was Sie gesehen, gesagt oder gehört haben.',
          'Eine optionale MCP-Verbindung lässt Claude, ChatGPT oder Cursor Ihren Verlauf abfragen.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Perfect Memory AI?', anchor: 'what-is-perfect-memory' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Lokal oder Cloud: Datenfluss und Datenschutz', anchor: 'privacy' },
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
            text: 'Perfect Memory AI ist eine Closed-Source-App für Windows und Mac, die Ihren Bildschirm und Ihre Meetings auf Ihrem Rechner aufzeichnet und einen KI-Assistenten Fragen dazu beantworten lässt.',
          },
          {
            type: 'plain-terms',
            text: 'Sie führt ein durchsuchbares Tagebuch dessen, was Sie auf dem Bildschirm gesehen und in Meetings gesagt haben; Sie entscheiden, ob die KI, die dieses Tagebuch liest, auf Ihrem Rechner oder in der Cloud läuft.',
          },
        ],
        items: [
          'Pflege: Der Mac-Build 0.17.25 erschien am 17. Oktober 2026, nach häufigen 0.17.x-Builds seit September; eine Warnung vor einem eingeschlafenen Projekt entfällt daher.',
          'Kosten: ein kostenloser Tarif, Pro für 15 $ im Monat bei jährlicher Zahlung und ein einmaliger Tarif Pro Offline für alle, die eine eigene KI mitbringen.',
          'Plattformen: Windows 10 und 11 sowie macOS 14 oder neuer auf Apple Silicon.',
          'Hersteller: Perfect Memory llc, ohne veröffentlichten Quellcode.',
          'Integrationen: eine optionale MCP-Verbindung für Claude, ChatGPT und andere Assistenten, standardmäßig aus.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf Website, Datenschutzerklärung und Release-Feed des Herstellers, geprüft am 30. Oktober 2026. PromptQuorum hat die App weder installiert noch gemessen; Aufzeichnungsqualität, Suchgenauigkeit und Ergebnisse mit lokalen Modellen sind daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-perfect-memory',
        title: 'Was ist Perfect Memory AI?',
        content: [
          '**Perfect Memory AI zeichnet Ihren Bildschirm und Ihre Meetings auf einem Windows-PC oder Mac auf, liest den Text auf dem Bildschirm und lässt Sie diesen Verlauf durchsuchen und befragen.** Der Hersteller Perfect Memory llc beschreibt es als Möglichkeit, nach „allem, was Sie gesehen, gesagt oder gehört haben“ zu fragen. Es gibt einen kostenlosen Tarif, einen jährlichen Pro-Tarif und einen einmaligen Pro-Offline-Tarif.',
          'Die Mac-App ist auf der Download-Seite als neu gekennzeichnet. Die Windows-App hat einen eigenen Download und einen Eintrag im Microsoft Store. Der Hersteller veröffentlicht in seinem Blog außerdem Vergleichsseiten zu Microsoft Recall, Screenpipe, Rewind und Granola; das sind seine eigenen Einschätzungen, die hier nicht bewertet wurden.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Perfect Memory AI wird unter Windows und Mac per Doppelklick installiert; eine Version für Linux, Mobilgeräte oder den Browser ist nicht aufgeführt.**',
        ],
        columns: ['Option', 'So erhalten Sie sie'],
        rows: [
          { 'Option': 'Windows', 'So erhalten Sie sie': '[Eintrag im Microsoft Store](https://apps.microsoft.com/detail/xp9m33wlfs472f) oder [MSI-Installer](https://www.perfectmemory.ai/download/windows); Windows 10 und 11' },
          { 'Option': 'macOS', 'So erhalten Sie sie': '[DMG-Download](https://www.perfectmemory.ai/download); macOS 14 oder neuer, Apple Silicon (M1 oder neuer)' },
          { 'Option': 'Tarife', 'So erhalten Sie sie': 'Free 0 $; Pro 15 $ im Monat bei jährlicher Zahlung; Pro Offline 79 $ einmalig, eigene KI nötig' },
          { 'Option': 'Website', 'So erhalten Sie sie': '[perfectmemory.ai](https://www.perfectmemory.ai)' },
          { 'Option': 'Datenschutzerklärung', 'So erhalten Sie sie': '[perfectmemory.ai/privacy](https://www.perfectmemory.ai/privacy)' },
          { 'Option': 'Quellcode', 'So erhalten Sie sie': 'Nicht veröffentlicht' },
        ],
        note: 'Geprüfte Version: Mac 0.17.25, am 17. Oktober 2026 im Release-Feed des Herstellers veröffentlicht. Der Windows-Installer liegt in einem Ordner namens 4.0.187; ob das die App-Version ist, sagt die Website nicht, daher wird kein Windows-Veröffentlichungsdatum genannt. Die Preise sind die US-Dollar-Angaben des Herstellers und nicht umgerechnet; der kostenlose Tarif enthält 10 KI-Anfragen und 30 KI-Meetings im Monat.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Schritte folgen der Installationsanleitung des Herstellers; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Starten Sie den Windows-Installer oder öffnen Sie das Mac-Disk-Image und ziehen Sie Perfect Memory in den Ordner „Programme“.',
          },
          {
            title: 'Berechtigungen erteilen',
            whyItMatters: 'Erlauben Sie am Mac zuerst die Bildschirmaufnahme, denn ohne sie wird nichts erfasst, danach das Mikrofon für Meeting-Transkripte.',
          },
          {
            title: 'KI auswählen',
            whyItMatters: 'Nutzen Sie den eingebauten Assistenten oder binden Sie Ollama, LM Studio oder Jan an, wenn die Antworten auf Ihrem Rechner bleiben sollen.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt von der Website oder dem Blog des Herstellers; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Suche im Bildschirmverlauf.** Der Text auf Ihrem Bildschirm wird gelesen und indexiert, sodass Sie nach Stichwort oder Bedeutung suchen und nach App, Website und Datum filtern können.',
          '**Meeting-Transkripte.** Die App erkennt Meetings in Zoom, Google Meet, Teams, Slack, Webex und WhatsApp und transkribiert, was Sie sagen und hören, ohne dass ein Bot dem Gespräch beitritt.',
          '**KI-Assistent.** Fragen Sie nach dem, was Sie gesehen, gesagt oder gehört haben; die Bezahltarife ergänzen Standup-Updates, Agenda-Vorschläge für Einzelgespräche, einen Tagesüberblick und Recherche-Zusammenfassungen.',
          '**MCP-Werkzeuge.** Angebundene Assistenten können search_history, get_moment, get_meeting und get_timeline aufrufen, um Ihren Verlauf zu lesen.',
        ],
        note: 'Der kostenlose Tarif enthält unbegrenzte Suche, Aufzeichnungen, Transkripte und MCP-Aufrufe; die Grenzen gelten für KI-Anfragen und KI-Meetings.',
      },
      privacy: {
        id: 'privacy',
        title: 'Lokal oder Cloud: Datenfluss und Datenschutz',
        content: [
          '**Screenshots, der daraus gelesene Text und Meeting-Transkripte entstehen auf Ihrem eigenen Rechner und werden dort gespeichert; laut Hersteller lädt er keine Aufnahmen hoch.** Die Datenschutzerklärung, zuletzt aktualisiert am 30. Juni 2026, sagt, dass standardmäßig keine Screenshots, Videos oder Audiodaten das Gerät verlassen. Nutzungsanalyse und Absturzberichte lassen sich abschalten; die Erklärung nennt Vercel, AppCenter, Sentry, Fathom und Segment als Analysepartner.',
          '**Die KI-Antworten sind der hybride Teil.** Zeigen Sie den Assistenten über Ollama, LM Studio oder Jan auf ein Modell auf Ihrem Rechner, werden Fragen laut Hersteller dort beantwortet. Bei der eingebauten KI laufen Ihre Frage und die benötigten Teile Ihres Verlaufs über den Server des Herstellers zum KI-Anbieter, den die Erklärung als OpenAI nennt, ohne Ihre Kontodaten; wo diese Verarbeitung stattfindet, wird nicht genannt.',
          'Die Verbindung zu Claude und ChatGPT ist aus, bis Sie sie einschalten. Fragt ein Assistent an, leitet ein Cloud-Relay die Anfrage an Ihren Rechner und das Ergebnis zurück, ohne beides zu speichern; der Inhalt erreicht dann den Anbieter dieses Assistenten nach dessen eigenen Bedingungen. Sie legen fest, ob er Bildschirmverlauf, Meetings oder beides lesen darf.',
          'Laut Hersteller wird am Mac jeder Screenshot mit AES-256 verschlüsselt, der Schlüssel liegt im Schlüsselbund; unter Windows wird die Datenbank samt erkanntem Text automatisch verschlüsselt, Screenshots lassen sich in den Einstellungen verschlüsseln. Der Suchindex wird von der App nicht verschlüsselt und verlässt sich auf FileVault oder BitLocker. In privaten Browserfenstern pausiert die Aufzeichnung, Apps wie ein Passwortmanager lassen sich ausschließen, und Sie können die letzten 15 Minuten oder alles löschen.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Angaben des Herstellers, keine Prüfergebnisse, und Quellcode ist nicht veröffentlicht. PromptQuorum hat den Netzwerkverkehr der App nicht untersucht. Wer Bildschirme und Meetings aufzeichnet, erfasst möglicherweise Informationen anderer Personen; prüfen Sie die Einwilligungsregeln für Ihren Fall. Das ist keine Rechtsberatung.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Menschen, die den Überblick über Gesehenes verlieren** und ein Suchfeld für ihren gesamten Bildschirmverlauf wollen.',
          '**Beschäftigte mit vielen Meetings**, die Transkripte ohne Bot im Gespräch möchten.',
          '**Nutzer von Ollama, LM Studio oder Jan**, die ein lokales Modell Fragen zum eigenen Verlauf beantworten lassen wollen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Ergebnisse mit lokalen Modellen.** PromptQuorum hat kein lokales Modell mit der App betrieben; Antwortqualität, Tempo und nötige Hardware sind unbekannt, und die Website nennt außer dem Betriebssystem keine Systemanforderungen.',
          '**Sicherheit und Prüfungen.** Weder Quellcode noch eine unabhängige Prüfung sind veröffentlicht, und die Datenschutzerklärung nennt weder das Land der Unternehmensgründung noch den Ort der OpenAI-Verarbeitung.',
          '**Windows-Version und -Datum.** Die Website nennt keine Windows-Versionsnummer und kein Veröffentlichungsdatum, und die Mac-App trägt frühe 0.x-Versionsnummern und aktuelle Vorabversionen.',
          '**Umfang von Pro Offline.** Die Preisseite sagt, dass eine eigene KI nötig und die Zahlung einmalig ist, listet aber nicht auf, was sonst enthalten ist.',
          '**Aufzeichnungsqualität und Aufwand.** Genauigkeit der Texterkennung, Qualität der Meeting-Transkripte, Speicherbedarf und Akkuverbrauch der Daueraufzeichnung sind ungetestet.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wesentlicher Unterschied'],
        rows: [
          { 'App': '[Anarlog](/de/power-local-llm/anarlog-review)', 'Plattformen': 'macOS, Windows, Linux', 'Preis / Lizenz': 'Gratis-Tarif / MIT', 'Wesentlicher Unterschied': 'Quelloffenes Meeting-Notizbuch ohne Bot, das auf Ihrem Gerät aufnimmt; lokale oder Cloud-KI' },
          { 'App': '[Meetily](/de/power-local-llm/meetily-review)', 'Plattformen': 'Windows, macOS', 'Preis / Lizenz': 'Kostenlose Community Edition / MIT', 'Wesentlicher Unterschied': 'Selbst gehosteter Meeting-Notizer; lokale Transkription, Zusammenfassungen über Ollama' },
        ],
        note: 'Keine andere App für Bildschirmverläufe hat bisher eine PromptQuorum-Rezension, daher sind dies die nächstliegenden rezensierten Meeting-Notiz-Werkzeuge; prüfen Sie Preis, Lizenz und Plattformen jeder App im jeweiligen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich sie nutzen, ohne Daten an OpenAI zu senden?',
            a: 'Ja, laut Hersteller: Richten Sie den Assistenten auf ein Modell, das auf Ihrem eigenen Rechner läuft. Dafür brauchen Sie Hardware, die dieses Modell ausführen kann, und PromptQuorum hat das Ergebnis nicht getestet.',
          },
          {
            q: 'Was bekommt man für den Tarif Pro Offline zu 79 $?',
            a: 'Die Preisseite beschreibt ihn als Einmalzahlung mit „allem unbegrenzt mit Ihrer eigenen KI“, das Modell stellen also Sie. Sie sagt nicht, wie lange Updates enthalten sind.',
          },
          {
            q: 'Kann ich Aufgezeichnetes löschen?',
            a: 'Laut Hersteller lassen sich die letzten 15 Minuten oder alles mit wenigen Klicks löschen, und Apps können von der Aufzeichnung ausgenommen werden. Ob dabei auch der Suchindex geleert wird, ist nicht angegeben.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Perfect Memory AI ist ein aktiv gepflegter Weg zu einem durchsuchbaren Protokoll von Bildschirm und Meetings unter Windows und Mac, mit kostenlosem Tarif zum Ausprobieren und einem echten Weg zu lokaler KI. Dagegen läuft der Standardweg der KI über den Server des Herstellers zu OpenAI, der Code ist geschlossen, eine Windows-Version ist nicht veröffentlicht, und keine der Aussagen zu Datenschutz oder Genauigkeit ließ sich hier prüfen. Die App eignet sich für Menschen, die ein eigenes lokales Modell anbinden und zuerst den kostenlosen Tarif testen; wer vertrauliches Material verarbeitet, sollte vor dem Aufzeichnen die Datenschutzerklärung und die Hinweise zur Verschlüsselung lesen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von Perfect Memory AI](https://www.perfectmemory.ai) — Funktionen, MCP-Seite und Blog, geprüft am 30. Oktober 2026.',
          '[Preise](https://www.perfectmemory.ai/pricing) und [Preise Pro Offline](https://www.perfectmemory.ai/pricing/pro-offline) — Tarife und Einmalzahlung, geprüft am 30. Oktober 2026.',
          '[Private by design](https://www.perfectmemory.ai/private-by-design) — lokale KI, Verschlüsselung und Aufzeichnungssteuerung, geprüft am 30. Oktober 2026.',
          '[Datenschutzerklärung](https://www.perfectmemory.ai/privacy) — Datenerhebung und Drittanbieter, zuletzt aktualisiert am 30. Juni 2026.',
          '[Download-Seite](https://www.perfectmemory.ai/download) und [Installationsanleitung](https://www.perfectmemory.ai/support/getting-started/how-to-install) — Plattformen und Anforderungen, geprüft am 30. Oktober 2026.',
          '[Mac-Release-Feed](https://github.com/DariusKocar/PerfectMemoryMac-releases/releases) — Version 0.17.25 und Veröffentlichungsdaten, gelesen am 30. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Anarlog-Rezension](/de/power-local-llm/anarlog-review) — ein quelloffenes Meeting-Notizbuch mit lokaler oder Cloud-KI zur Wahl.',
          '[Meetily-Rezension](/de/power-local-llm/meetily-review) — ein selbst gehosteter Meeting-Notizer mit lokalen Zusammenfassungen.',
          '[Sprach- und Audio-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — der Kategorievergleich für Transkriptionswerkzeuge.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/perfect-memory-review-hero-es.webp',
    title: 'Reseña de Perfect Memory AI: memoria de pantalla y reuniones con búsqueda',
    seoTitle: 'Reseña de Perfect Memory AI: pantalla y reuniones',
    intro:
      'Perfect Memory AI es una app para Windows y Mac de [Perfect Memory llc](https://www.perfectmemory.ai) que graba lo que aparece en tu pantalla y transcribe tus reuniones en tu propio equipo, para que puedas buscarlas y consultarlas después. Sus respuestas de IA solo son locales si conectas Ollama, LM Studio o Jan; si no, pasan por el servidor del fabricante. Esta reseña se basa en el sitio web, la política de privacidad y el feed de versiones del fabricante, revisados el 30 de octubre de 2026; PromptQuorum no ha probado la app personalmente.',
    metaDescription:
      'Reseña de Perfect Memory AI: app para Windows y Mac que graba pantalla y reuniones en local. La IA es local solo con Ollama, LM Studio o Jan.',
    twitterDescription:
      'Reseña de Perfect Memory AI: memoria de pantalla y reuniones con búsqueda para Windows y Mac. Grabación local, IA local solo con Ollama, LM Studio o Jan.',
    audience:
      'Personas que quieren un registro buscable de su pantalla y sus reuniones y necesitan saber qué se queda en local, qué llega a la nube y qué dejan abierto las fuentes.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña Perfect Memory AI',
    targetKeywords: [
      'reseña perfect memory ai',
      'perfectmemory.ai',
      'grabación de pantalla local búsqueda',
      'transcripción de reuniones con ia windows mac',
      'alternativa a rewind windows',
      'ollama app memoria de pantalla',
      'mcp historial de pantalla claude',
    ],
    current_models_mentioned: ['ChatGPT', 'Ollama', 'LM Studio', 'Jan'],
    current_hardware_mentioned: ['Windows 10', 'Windows 11', 'macOS 14', 'Apple silicon'],
    leadAnswerBlock:
      '**Perfect Memory AI (versión para Mac 0.17.25, publicada el 17 de octubre de 2026) es una app para Windows y Mac que graba tu pantalla y transcribe tus reuniones en tu propio equipo para que puedas buscarlas.** Es una herramienta híbrida, no totalmente local: la IA que responde a tus preguntas puede ejecutarse en la nube.',
    quickAnswerTop: {
      es: {
        question: '¿Es Perfect Memory AI una app de LLM local?',
        answer:
          'Solo si la configuras así. La grabación, el reconocimiento de texto y el reconocimiento de voz se ejecutan en tu equipo, pero la IA integrada envía tu pregunta a través del servidor del fabricante a un proveedor de IA; si el asistente apunta a un modelo de Ollama, LM Studio o Jan, la respuesta se queda en local.',
        bullets: [
          'El historial de pantalla se lee como texto y se busca por palabra clave o por significado.',
          'Se transcriben las reuniones de Zoom, Google Meet, Teams, Slack, Webex y WhatsApp.',
          'Un asistente responde preguntas sobre lo que viste, dijiste o escuchaste.',
          'Una conexión MCP opcional permite que Claude, ChatGPT o Cursor consulten tu historial.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Perfect Memory AI?', anchor: 'what-is-perfect-memory' },
      { label: 'Dónde conseguirla', anchor: 'get-it' },
      { label: 'Primeros pasos', anchor: 'getting-started' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Local o nube: flujo de datos y privacidad', anchor: 'privacy' },
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
            text: 'Perfect Memory AI es una app de código cerrado para Windows y Mac que graba tu pantalla y tus reuniones en tu equipo y deja que un asistente de IA responda preguntas sobre ellas.',
          },
          {
            type: 'plain-terms',
            text: 'Mantiene un diario buscable de lo que has visto en pantalla y dicho en reuniones; tú eliges si la IA que lee ese diario se ejecuta en tu equipo o en la nube.',
          },
        ],
        items: [
          'Mantenimiento: la compilación para Mac 0.17.25 salió el 17 de octubre de 2026 tras frecuentes compilaciones 0.17.x desde septiembre, así que no se aplica la advertencia de proyecto abandonado.',
          'Coste: un plan gratuito, Pro a $15 al mes con facturación anual y un plan Pro Offline de pago único para quien aporta su propia IA.',
          'Plataformas: Windows 10 y 11, y macOS 14 o posterior en Apple Silicon.',
          'Fabricante: Perfect Memory llc, sin código fuente publicado.',
          'Integraciones: una conexión MCP opcional para Claude, ChatGPT y otros asistentes, desactivada por defecto.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web, la política de privacidad y el feed de versiones del fabricante, revisados el 30 de octubre de 2026. PromptQuorum no ha instalado ni medido la app, así que no se evalúan la calidad de captura, la precisión de la búsqueda ni los resultados con modelos locales.',
          },
        ],
      },
      overview: {
        id: 'what-is-perfect-memory',
        title: '¿Qué es Perfect Memory AI?',
        content: [
          '**Perfect Memory AI graba tu pantalla y tus reuniones en un PC con Windows o un Mac, lee el texto que aparece y te deja buscar y consultar ese historial.** El fabricante, Perfect Memory llc, lo presenta como una forma de preguntar por «todo lo que has visto, dicho u oído». Se vende con un plan gratuito, un plan Pro anual y un plan Pro Offline de pago único.',
          'La app para Mac aparece como novedad en la página de descarga. La app para Windows tiene su propia descarga y una ficha en Microsoft Store. El fabricante también publica en su blog páginas comparativas con Microsoft Recall, Screenpipe, Rewind y Granola; son opiniones suyas y no se evaluaron aquí.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirla',
        content: [
          '**Perfect Memory AI se instala con doble clic en Windows y Mac; no se indica versión para Linux, móvil ni web.**',
        ],
        columns: ['Opción', 'Cómo conseguirla'],
        rows: [
          { 'Opción': 'Windows', 'Cómo conseguirla': '[Ficha de Microsoft Store](https://apps.microsoft.com/detail/xp9m33wlfs472f) o [instalador MSI](https://www.perfectmemory.ai/download/windows); Windows 10 y 11' },
          { 'Opción': 'macOS', 'Cómo conseguirla': '[Descarga DMG](https://www.perfectmemory.ai/download); macOS 14 o posterior, Apple Silicon (M1 o más reciente)' },
          { 'Opción': 'Planes', 'Cómo conseguirla': 'Free $0; Pro $15 al mes con facturación anual; Pro Offline $79 único, requiere tu propia IA' },
          { 'Opción': 'Sitio web', 'Cómo conseguirla': '[perfectmemory.ai](https://www.perfectmemory.ai)' },
          { 'Opción': 'Política de privacidad', 'Cómo conseguirla': '[perfectmemory.ai/privacy](https://www.perfectmemory.ai/privacy)' },
          { 'Opción': 'Código fuente', 'Cómo conseguirla': 'No publicado' },
        ],
        note: 'Versión revisada: Mac 0.17.25, publicada el 17 de octubre de 2026 en el feed de versiones del fabricante. El instalador de Windows se sirve desde una carpeta llamada 4.0.187, pero el sitio no dice si esa es la versión de la app, así que no se da fecha de lanzamiento para Windows. Los precios son las cifras en dólares estadounidenses del fabricante, sin convertir; el plan gratuito incluye 10 consultas de IA y 30 reuniones de IA al mes.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Primeros pasos',
        content: [
          '**Los pasos siguen la guía de instalación del fabricante; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Ejecuta el instalador de Windows o abre la imagen de disco de Mac y arrastra Perfect Memory a Aplicaciones.',
          },
          {
            title: 'Concede los permisos',
            whyItMatters: 'En Mac, permite primero la grabación de pantalla, porque sin ella no se captura nada, y después el micrófono para las transcripciones de reuniones.',
          },
          {
            title: 'Elige tu IA',
            whyItMatters: 'Usa el asistente integrado o conecta Ollama, LM Studio o Jan si quieres que las respuestas se queden en tu equipo.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada punto siguiente procede del sitio web o del blog del fabricante; ninguno se ha probado de forma independiente.**',
        ],
        items: [
          '**Búsqueda en el historial de pantalla.** El texto de tu pantalla se lee y se indexa, de modo que puedes buscar por palabra clave o por significado y filtrar por app, sitio web y fecha.',
          '**Transcripciones de reuniones.** La app reconoce reuniones de Zoom, Google Meet, Teams, Slack, Webex y WhatsApp y transcribe lo que dices y oyes, sin que un bot se una a la llamada.',
          '**Asistente de IA.** Pregunta por lo que viste, dijiste u oíste; los planes de pago añaden actualizaciones para la reunión diaria, sugerencias de agenda para reuniones individuales, un resumen diario y resúmenes de investigación.',
          '**Herramientas MCP.** Los asistentes conectados pueden llamar a search_history, get_moment, get_meeting y get_timeline para leer tu historial.',
        ],
        note: 'El plan gratuito incluye búsqueda, grabaciones, transcripciones y llamadas MCP ilimitadas; los límites se aplican a las consultas de IA y a las reuniones de IA.',
      },
      privacy: {
        id: 'privacy',
        title: 'Local o nube: flujo de datos y privacidad',
        content: [
          '**Las capturas de pantalla, el texto que se lee de ellas y las transcripciones de reuniones se generan y guardan en tu propio equipo, y el fabricante dice que no sube las grabaciones.** La política de privacidad, actualizada el 30 de junio de 2026, indica que por defecto no sale del dispositivo ninguna captura, vídeo ni audio. Las analíticas de uso y los informes de fallos pueden desactivarse; la política cita a Vercel, AppCenter, Sentry, Fathom y Segment como socios de analítica.',
          '**Las respuestas de IA son la parte híbrida.** Si diriges el asistente a un modelo de tu equipo mediante Ollama, LM Studio o Jan, el fabricante dice que las preguntas se responden allí. Con la IA integrada, tu pregunta y las partes de tu historial que necesita pasan por el servidor del fabricante hasta el proveedor de IA, que la política nombra como OpenAI, sin los datos de tu cuenta; no se indica dónde se realiza ese procesamiento.',
          'La conexión con Claude y ChatGPT está desactivada hasta que la actives. Cuando un asistente hace una petición, un relé en la nube la pasa a tu equipo y devuelve el resultado sin conservar ni una ni otro; el contenido llega entonces al proveedor de ese asistente bajo sus propias condiciones. Tú eliges si puede leer el historial de pantalla, las reuniones o ambos.',
          'Según el fabricante, en Mac cada captura se cifra con AES-256 y la clave se guarda en el Llavero; en Windows la base de datos, con el texto reconocido, se cifra automáticamente y las capturas pueden cifrarse en Ajustes. La app no cifra el índice de búsqueda, que depende de FileVault o BitLocker. La grabación se pausa en ventanas de navegación privada, se pueden excluir apps como un gestor de contraseñas y puedes borrar los últimos 15 minutos o todo.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del fabricante, no resultados de una auditoría, y no hay código fuente publicado. PromptQuorum no ha inspeccionado el tráfico de red de la app. Grabar pantallas y reuniones puede captar información de otras personas, así que revisa las normas de consentimiento de tu situación; esto no es asesoramiento jurídico.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Quien pierde el hilo de lo que vio** y quiere un único cuadro de búsqueda para todo su historial de pantalla.',
          '**Quien vive en reuniones** y quiere transcripciones sin un bot en la llamada.',
          '**Usuarios de Ollama, LM Studio o Jan** que quieren que un modelo local responda preguntas sobre su propio historial.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Resultados con modelos locales.** PromptQuorum no ejecutó ningún modelo local con la app, así que se desconocen la calidad de las respuestas, la velocidad y el hardware necesario; el sitio no indica requisitos de sistema más allá del sistema operativo.',
          '**Seguridad y auditorías.** No se publica código fuente ni auditoría independiente, y la política de privacidad no nombra el país de constitución de la empresa ni dónde se procesa en OpenAI.',
          '**Versión y fecha de Windows.** El sitio no da número de versión ni fecha de lanzamiento para Windows, y la app de Mac lleva números 0.x tempranos y compilaciones preliminares recientes.',
          '**Alcance de Pro Offline.** La página de precios dice que requiere tu propia IA y que el pago es único, pero no enumera qué más incluye.',
          '**Calidad de captura y coste.** No se han probado la precisión del reconocimiento de texto, la calidad de las transcripciones, el uso de disco ni el impacto en la batería de la grabación continua.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia principal'],
        rows: [
          { 'App': '[Anarlog](/es/power-local-llm/anarlog-review)', 'Plataformas': 'macOS, Windows, Linux', 'Precio / licencia': 'Plan gratuito / MIT', 'Diferencia principal': 'Bloc de notas de reuniones de código abierto, sin bot, que graba en tu dispositivo; IA local o en la nube' },
          { 'App': '[Meetily](/es/power-local-llm/meetily-review)', 'Plataformas': 'Windows, macOS', 'Precio / licencia': 'Edición Community gratuita / MIT', 'Diferencia principal': 'Tomador de notas de reuniones autoalojado; transcripción local, resúmenes mediante Ollama' },
        ],
        note: 'Ninguna otra app de historial de pantalla tiene aún una reseña de PromptQuorum, así que estas son las herramientas de notas de reuniones reseñadas más cercanas; confirma el precio, la licencia y las plataformas de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo usarla sin enviar datos a OpenAI?',
            a: 'Sí, según el fabricante: dirige el asistente a un modelo que se ejecute en tu propio equipo. Para eso necesitas hardware capaz de ejecutar ese modelo, y PromptQuorum no ha probado el resultado.',
          },
          {
            q: '¿Qué incluye el plan Pro Offline de $79?',
            a: 'La página de precios lo describe como un pago único con «todo ilimitado con tu propia IA», es decir, el modelo lo aportas tú. No dice durante cuánto tiempo incluye actualizaciones.',
          },
          {
            q: '¿Puedo borrar lo que grabó?',
            a: 'El fabricante dice que se pueden borrar los últimos 15 minutos o todo con un par de clics, y excluir apps de la grabación. No se indica si el índice de búsqueda se vacía a la vez.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Perfect Memory AI es una forma activamente actualizada de tener un registro buscable de tu pantalla y tus reuniones en Windows y Mac, con un plan gratuito para probar y un camino real hacia la IA local. A cambio, la ruta de IA por defecto pasa por el servidor del fabricante hasta OpenAI, el código es cerrado, no se publica versión de Windows y no se pudo comprobar aquí ninguna afirmación sobre privacidad o precisión. Encaja con quien está dispuesto a conectar su propio modelo local y probar primero el plan gratuito; quien maneje material confidencial debería leer la política de privacidad y las notas de cifrado antes de grabar.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Perfect Memory AI](https://www.perfectmemory.ai) — funciones, página de MCP y blog, revisados el 30 de octubre de 2026.',
          '[Precios](https://www.perfectmemory.ai/pricing) y [precios de Pro Offline](https://www.perfectmemory.ai/pricing/pro-offline) — planes y pago único, revisados el 30 de octubre de 2026.',
          '[Private by design](https://www.perfectmemory.ai/private-by-design) — IA local, cifrado y controles de grabación, revisados el 30 de octubre de 2026.',
          '[Política de privacidad](https://www.perfectmemory.ai/privacy) — recogida de datos y terceros, actualizada el 30 de junio de 2026.',
          '[Página de descarga](https://www.perfectmemory.ai/download) y [guía de instalación](https://www.perfectmemory.ai/support/getting-started/how-to-install) — plataformas y requisitos, revisadas el 30 de octubre de 2026.',
          '[Feed de versiones para Mac](https://github.com/DariusKocar/PerfectMemoryMac-releases/releases) — versión 0.17.25 y fechas de lanzamiento, leído el 30 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Anarlog](/es/power-local-llm/anarlog-review) — un bloc de notas de reuniones de código abierto con IA local o en la nube a elegir.',
          '[Reseña de Meetily](/es/power-local-llm/meetily-review) — un tomador de notas de reuniones autoalojado con resúmenes locales.',
          '[Herramientas de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — la comparación de categoría para herramientas de transcripción.',
          '[Directorio de software LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/perfect-memory-review-hero-fr.webp',
    title: 'Test de Perfect Memory AI : mémoire d\'écran et de réunions consultable',
    seoTitle: 'Test de Perfect Memory AI : écran et réunions consultables',
    intro:
      'Perfect Memory AI est une application Windows et Mac de [Perfect Memory llc](https://www.perfectmemory.ai) qui enregistre ce qui s\'affiche à l\'écran et transcrit vos réunions sur votre propre machine, pour que vous puissiez les rechercher et les interroger plus tard. Ses réponses IA ne restent locales que si vous connectez Ollama, LM Studio ou Jan ; sinon, elles passent par le serveur de l\'éditeur. Ce test s\'appuie sur le site, la politique de confidentialité et le flux de versions de l\'éditeur, consultés le 30 octobre 2026 ; PromptQuorum n\'a pas testé l\'application lui-même.',
    metaDescription:
      'Test de Perfect Memory AI : application Windows et Mac qui enregistre écran et réunions en local. IA locale seulement avec Ollama, LM Studio ou Jan.',
    twitterDescription:
      'Test de Perfect Memory AI : mémoire d\'écran et de réunions consultable sur Windows et Mac. Enregistrement local, IA locale seulement avec Ollama, LM Studio ou Jan.',
    audience:
      'Les personnes qui veulent garder une trace consultable de leur écran et de leurs réunions et doivent savoir ce qui reste en local, ce qui part dans le cloud et ce que les sources laissent ouvert.',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test Perfect Memory AI',
    targetKeywords: [
      'test perfect memory ai',
      'perfectmemory.ai',
      'enregistrement d\'écran local recherche',
      'transcription de réunions ia windows mac',
      'alternative à rewind windows',
      'ollama application mémoire d\'écran',
      'mcp historique d\'écran claude',
    ],
    current_models_mentioned: ['ChatGPT', 'Ollama', 'LM Studio', 'Jan'],
    current_hardware_mentioned: ['Windows 10', 'Windows 11', 'macOS 14', 'Apple silicon'],
    leadAnswerBlock:
      '**Perfect Memory AI (version Mac 0.17.25, publiée le 17 octobre 2026) est une application Windows et Mac qui enregistre votre écran et transcrit vos réunions sur votre propre ordinateur afin que vous puissiez les rechercher.** C\'est un outil hybride, non entièrement local : l\'IA qui répond à vos questions peut tourner dans le cloud.',
    quickAnswerTop: {
      fr: {
        question: 'Perfect Memory AI est-elle une application de LLM local ?',
        answer:
          'Seulement si vous la configurez ainsi. L\'enregistrement, la reconnaissance de texte et la reconnaissance vocale tournent sur votre ordinateur, mais l\'IA intégrée envoie votre question via le serveur de l\'éditeur à un fournisseur d\'IA ; si l\'assistant pointe vers un modèle dans Ollama, LM Studio ou Jan, la réponse reste locale.',
        bullets: [
          'L\'historique d\'écran est lu comme du texte et se recherche par mot-clé ou par sens.',
          'Les réunions Zoom, Google Meet, Teams, Slack, Webex et WhatsApp sont transcrites.',
          'Un assistant répond aux questions sur ce que vous avez vu, dit ou entendu.',
          'Une connexion MCP facultative permet à Claude, ChatGPT ou Cursor d\'interroger votre historique.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que Perfect Memory AI ?', anchor: 'what-is-perfect-memory' },
      { label: 'Où l\'obtenir', anchor: 'get-it' },
      { label: 'Premiers pas', anchor: 'getting-started' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Local ou cloud : flux de données et confidentialité', anchor: 'privacy' },
      { label: 'À qui s\'adresse-t-elle ?', anchor: 'who-should-use' },
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
            text: 'Perfect Memory AI est une application Windows et Mac à code fermé qui enregistre votre écran et vos réunions sur votre ordinateur et laisse un assistant IA répondre à vos questions à ce sujet.',
          },
          {
            type: 'plain-terms',
            text: 'Elle tient un journal consultable de ce que vous avez vu à l\'écran et dit en réunion ; vous choisissez si l\'IA qui lit ce journal tourne sur votre machine ou dans le cloud.',
          },
        ],
        items: [
          'Maintenance : la version Mac 0.17.25 est sortie le 17 octobre 2026 après de fréquentes versions 0.17.x depuis septembre, donc aucun avertissement de projet abandonné ne s\'applique.',
          'Coût : une offre gratuite, Pro à 15 $ par mois facturés à l\'année, et une offre Pro Offline à paiement unique pour ceux qui apportent leur propre IA.',
          'Plateformes : Windows 10 et 11, et macOS 14 ou plus récent sur Apple Silicon.',
          'Éditeur : Perfect Memory llc, sans code source publié.',
          'Intégrations : une connexion MCP facultative pour Claude, ChatGPT et d\'autres assistants, désactivée par défaut.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s\'appuie sur le site, la politique de confidentialité et le flux de versions de l\'éditeur, consultés le 30 octobre 2026. PromptQuorum n\'a ni installé ni mesuré l\'application ; la qualité de capture, la précision de la recherche et les résultats avec des modèles locaux ne sont donc pas évalués.',
          },
        ],
      },
      overview: {
        id: 'what-is-perfect-memory',
        title: 'Qu\'est-ce que Perfect Memory AI ?',
        content: [
          '**Perfect Memory AI enregistre votre écran et vos réunions sur un PC Windows ou un Mac, lit le texte affiché et vous laisse rechercher et interroger cet historique.** L\'éditeur, Perfect Memory llc, la présente comme un moyen de poser des questions sur « tout ce que vous avez vu, dit ou entendu ». Elle est proposée en offre gratuite, en offre Pro annuelle et en offre Pro Offline à paiement unique.',
          'L\'application Mac est signalée comme nouvelle sur la page de téléchargement. L\'application Windows dispose de son propre téléchargement et d\'une fiche Microsoft Store. L\'éditeur publie aussi sur son blog des pages comparatives avec Microsoft Recall, Screenpipe, Rewind et Granola ; ce sont ses propres avis, non évalués ici.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l\'obtenir',
        content: [
          '**Perfect Memory AI s\'installe d\'un double-clic sous Windows et Mac ; aucune version Linux, mobile ou web n\'est indiquée.**',
        ],
        columns: ['Option', 'Comment l\'obtenir'],
        rows: [
          { 'Option': 'Windows', 'Comment l\'obtenir': '[Fiche Microsoft Store](https://apps.microsoft.com/detail/xp9m33wlfs472f) ou [installeur MSI](https://www.perfectmemory.ai/download/windows) ; Windows 10 et 11' },
          { 'Option': 'macOS', 'Comment l\'obtenir': '[Téléchargement DMG](https://www.perfectmemory.ai/download) ; macOS 14 ou plus récent, Apple Silicon (M1 ou plus récent)' },
          { 'Option': 'Offres', 'Comment l\'obtenir': 'Free 0 $ ; Pro 15 $ par mois facturés à l\'année ; Pro Offline 79 $ unique, IA personnelle requise' },
          { 'Option': 'Site web', 'Comment l\'obtenir': '[perfectmemory.ai](https://www.perfectmemory.ai)' },
          { 'Option': 'Politique de confidentialité', 'Comment l\'obtenir': '[perfectmemory.ai/privacy](https://www.perfectmemory.ai/privacy)' },
          { 'Option': 'Code source', 'Comment l\'obtenir': 'Non publié' },
        ],
        note: 'Version testée : Mac 0.17.25, publiée le 17 octobre 2026 sur le flux de versions de l\'éditeur. L\'installeur Windows est servi depuis un dossier nommé 4.0.187, mais le site ne dit pas s\'il s\'agit de la version de l\'application ; aucune date de sortie Windows n\'est donc donnée. Les prix sont les montants en dollars américains de l\'éditeur, sans conversion ; l\'offre gratuite inclut 10 requêtes IA et 30 réunions IA par mois.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Les étapes suivent le guide d\'installation de l\'éditeur ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Installer l\'application',
            whyItMatters: 'Lancez l\'installeur Windows ou ouvrez l\'image disque Mac et faites glisser Perfect Memory dans Applications.',
          },
          {
            title: 'Accorder les autorisations',
            whyItMatters: 'Sur Mac, autorisez d\'abord l\'enregistrement de l\'écran, car sans lui rien n\'est capturé, puis le micro pour les transcriptions de réunions.',
          },
          {
            title: 'Choisir son IA',
            whyItMatters: 'Utilisez l\'assistant intégré, ou connectez Ollama, LM Studio ou Jan si vous voulez que les réponses restent sur votre ordinateur.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque point ci-dessous provient du site ou du blog de l\'éditeur ; aucun n\'a été testé de façon indépendante.**',
        ],
        items: [
          '**Recherche dans l\'historique d\'écran.** Le texte affiché est lu et indexé, ce qui permet de chercher par mot-clé ou par sens et de filtrer par application, site web et date.',
          '**Transcriptions de réunions.** L\'application reconnaît les réunions Zoom, Google Meet, Teams, Slack, Webex et WhatsApp et transcrit ce que vous dites et entendez, sans robot qui rejoint l\'appel.',
          '**Assistant IA.** Posez des questions sur ce que vous avez vu, dit ou entendu ; les offres payantes ajoutent des points de stand-up, des suggestions d\'ordre du jour pour les entretiens individuels, un bilan quotidien et des synthèses de recherche.',
          '**Outils MCP.** Les assistants connectés peuvent appeler search_history, get_moment, get_meeting et get_timeline pour lire votre historique.',
        ],
        note: 'L\'offre gratuite inclut la recherche, les enregistrements, les transcriptions et les appels MCP sans limite ; les plafonds portent sur les requêtes IA et les réunions IA.',
      },
      privacy: {
        id: 'privacy',
        title: 'Local ou cloud : flux de données et confidentialité',
        content: [
          '**Les captures d\'écran, le texte qui en est extrait et les transcriptions de réunions sont produits et stockés sur votre propre ordinateur, et l\'éditeur affirme ne pas téléverser les enregistrements.** La politique de confidentialité, mise à jour le 30 juin 2026, indique que par défaut aucune capture, vidéo ni audio ne quitte l\'appareil. Les statistiques d\'usage et les rapports de plantage peuvent être désactivés ; la politique cite Vercel, AppCenter, Sentry, Fathom et Segment comme partenaires d\'analyse.',
          '**Les réponses IA constituent la partie hybride.** Si vous orientez l\'assistant vers un modèle de votre ordinateur via Ollama, LM Studio ou Jan, l\'éditeur indique que les questions y reçoivent leur réponse. Avec l\'IA intégrée, votre question et les parties de votre historique nécessaires transitent par le serveur de l\'éditeur vers le fournisseur d\'IA, que la politique nomme OpenAI, sans vos données de compte ; le lieu de ce traitement n\'est pas précisé.',
          'La connexion à Claude et à ChatGPT est désactivée tant que vous ne l\'activez pas. Quand un assistant fait une demande, un relais cloud la transmet à votre ordinateur et renvoie le résultat sans conserver ni l\'une ni l\'autre ; le contenu parvient ensuite au fournisseur de cet assistant selon ses propres conditions. Vous choisissez s\'il peut lire l\'historique d\'écran, les réunions ou les deux.',
          'Selon l\'éditeur, sur Mac, chaque capture est chiffrée en AES-256 et la clé reste dans le Trousseau ; sous Windows, la base de données, texte reconnu compris, est chiffrée automatiquement et les captures peuvent l\'être dans les réglages. L\'index de recherche n\'est pas chiffré par l\'application et s\'appuie sur FileVault ou BitLocker. L\'enregistrement se met en pause dans les fenêtres de navigation privée, des applications comme un gestionnaire de mots de passe peuvent être exclues, et vous pouvez supprimer les 15 dernières minutes ou tout.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations de l\'éditeur, non des résultats d\'audit, et aucun code source n\'est publié. PromptQuorum n\'a pas inspecté le trafic réseau de l\'application. Enregistrer des écrans et des réunions peut capter des informations sur d\'autres personnes ; vérifiez les règles de consentement applicables à votre situation. Ceci n\'est pas un conseil juridique.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui s\'adresse-t-elle ?',
        items: [
          '**Les personnes qui perdent le fil de ce qu\'elles ont vu** et veulent un seul champ de recherche pour tout leur historique d\'écran.',
          '**Les professionnels enchaînant les réunions** qui veulent des transcriptions sans robot dans l\'appel.',
          '**Les utilisateurs d\'Ollama, LM Studio ou Jan** qui veulent qu\'un modèle local réponde aux questions sur leur propre historique.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Résultats avec des modèles locaux.** PromptQuorum n\'a pas fait fonctionner de modèle local avec l\'application ; la qualité des réponses, la vitesse et le matériel requis sont inconnus, et le site n\'indique aucune configuration minimale hormis le système d\'exploitation.',
          '**Sécurité et audits.** Ni code source ni audit indépendant ne sont publiés, et la politique de confidentialité ne nomme ni le pays d\'immatriculation de l\'entreprise ni le lieu du traitement par OpenAI.',
          '**Version et date Windows.** Le site ne donne ni numéro de version ni date de sortie pour Windows, et l\'application Mac porte des numéros 0.x précoces et des préversions récentes.',
          '**Contenu de Pro Offline.** La page des tarifs indique qu\'une IA personnelle est requise et que le paiement est unique, sans préciser ce qui est inclus par ailleurs.',
          '**Qualité de capture et coût.** La précision de la reconnaissance de texte, la qualité des transcriptions, l\'espace disque et l\'impact sur la batterie d\'un enregistrement continu n\'ont pas été testés.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence principale'],
        rows: [
          { 'Application': '[Anarlog](/fr/power-local-llm/anarlog-review)', 'Plateformes': 'macOS, Windows, Linux', 'Prix / licence': 'Offre gratuite / MIT', 'Différence principale': 'Bloc-notes de réunion open source, sans robot, qui enregistre sur votre appareil ; IA locale ou cloud' },
          { 'Application': '[Meetily](/fr/power-local-llm/meetily-review)', 'Plateformes': 'Windows, macOS', 'Prix / licence': 'Édition communautaire gratuite / MIT', 'Différence principale': 'Preneur de notes de réunion auto-hébergé ; transcription locale, résumés via Ollama' },
        ],
        note: 'Aucune autre application d\'historique d\'écran n\'a encore de test PromptQuorum ; ce sont donc les outils de notes de réunion déjà passés en revue les plus proches ; vérifiez le prix, la licence et les plateformes de chaque application sur sa fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Puis-je l\'utiliser sans envoyer de données à OpenAI ?',
            a: 'Oui, selon l\'éditeur : orientez l\'assistant vers un modèle qui tourne sur votre propre ordinateur. Il faut alors un matériel capable d\'exécuter ce modèle, et PromptQuorum n\'a pas testé le résultat.',
          },
          {
            q: 'Que donne l\'offre Pro Offline à 79 $ ?',
            a: 'La page des tarifs la décrit comme un paiement unique avec « tout en illimité avec votre propre IA », c\'est-à-dire que vous fournissez le modèle. Elle ne précise pas la durée des mises à jour incluses.',
          },
          {
            q: 'Puis-je supprimer ce qui a été enregistré ?',
            a: 'L\'éditeur indique que l\'on peut supprimer les 15 dernières minutes ou tout en quelques clics, et exclure des applications de l\'enregistrement. Il n\'est pas précisé si l\'index de recherche est vidé en même temps.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Perfect Memory AI est un moyen activement mis à jour d\'obtenir une trace consultable de votre écran et de vos réunions sous Windows et Mac, avec une offre gratuite pour essayer et une vraie voie vers l\'IA locale. En revanche, le chemin IA par défaut passe par le serveur de l\'éditeur puis OpenAI, le code est fermé, aucune version Windows n\'est publiée, et aucune des affirmations sur la confidentialité ou la précision n\'a pu être vérifiée ici. Elle convient à ceux qui sont prêts à connecter leur propre modèle local et à tester d\'abord l\'offre gratuite ; qui traite des documents confidentiels devrait lire la politique de confidentialité et les notes sur le chiffrement avant d\'enregistrer.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de Perfect Memory AI](https://www.perfectmemory.ai) — fonctions, page MCP et blog, consultés le 30 octobre 2026.',
          '[Tarifs](https://www.perfectmemory.ai/pricing) et [tarifs Pro Offline](https://www.perfectmemory.ai/pricing/pro-offline) — offres et paiement unique, consultés le 30 octobre 2026.',
          '[Private by design](https://www.perfectmemory.ai/private-by-design) — IA locale, chiffrement et contrôles d\'enregistrement, consultés le 30 octobre 2026.',
          '[Politique de confidentialité](https://www.perfectmemory.ai/privacy) — collecte de données et tiers, mise à jour le 30 juin 2026.',
          '[Page de téléchargement](https://www.perfectmemory.ai/download) et [guide d\'installation](https://www.perfectmemory.ai/support/getting-started/how-to-install) — plateformes et prérequis, consultés le 30 octobre 2026.',
          '[Flux de versions Mac](https://github.com/DariusKocar/PerfectMemoryMac-releases/releases) — version 0.17.25 et dates de sortie, lus le 30 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test d\'Anarlog](/fr/power-local-llm/anarlog-review) — un bloc-notes de réunion open source avec IA locale ou cloud au choix.',
          '[Test de Meetily](/fr/power-local-llm/meetily-review) — un preneur de notes de réunion auto-hébergé avec résumés locaux.',
          '[Outils vocaux et audio comparés](/fr/power-local-llm/local-llm-voice-audio-compared) — la comparaison de catégorie pour les outils de transcription.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d\'IA locale.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/perfect-memory-review-hero-ja.webp',
    title: 'Perfect Memory AI レビュー：画面と会議を検索できる記憶アプリ',
    seoTitle: 'Perfect Memory AI レビュー：画面と会議を検索',
    intro:
      'Perfect Memory AIは、[Perfect Memory llc](https://www.perfectmemory.ai)が提供するWindows／Mac向けアプリです。画面に表示された内容を記録し、会議を自分のPC上で文字起こしして、後から検索したり質問したりできます。AIの回答がローカルで完結するのは、Ollama・LM Studio・Janを接続した場合のみで、それ以外は提供元のサーバーを経由します。このレビューは、提供元のWebサイト、プライバシーポリシー、リリースフィードを2026年10月30日に確認した内容に基づいており、PromptQuorumは実機での検証を行っていません。',
    metaDescription:
      'Perfect Memory AIのレビュー。画面と会議をローカルで記録するWindows／Mac向けアプリです。AI回答がローカルになるのはOllama、LM Studio、Janを使う場合のみ。未検証です。',
    twitterDescription:
      'Perfect Memory AIのレビュー：画面と会議を検索できるWindows／Mac向けアプリ。記録はローカル、AIがローカルになるのはOllama・LM Studio・Jan利用時のみ。',
    audience:
      '画面や会議を検索できる形で残したい方で、どこがローカルで動き、どこがクラウドに送られ、情報源が何を確認していないのかを知りたい方向けの記事です。',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Perfect Memory AI レビュー',
    targetKeywords: [
      'perfect memory ai レビュー',
      'perfectmemory.ai',
      '画面録画 ローカル 検索',
      'AI 会議 文字起こし windows mac',
      'rewind 代替 windows',
      'ollama 画面 記憶 アプリ',
      'mcp 画面履歴 claude',
    ],
    current_models_mentioned: ['ChatGPT', 'Ollama', 'LM Studio', 'Jan'],
    current_hardware_mentioned: ['Windows 10', 'Windows 11', 'macOS 14', 'Apple silicon'],
    leadAnswerBlock:
      '**Perfect Memory AI（Mac版0.17.25、2026年10月17日公開）は、画面を記録し、会議を自分のPC上で文字起こしして検索できるようにするWindows／Mac向けアプリです。** 完全なローカルツールではなくハイブリッド型で、質問に答えるAIはクラウドで動く場合があります。',
    quickAnswerTop: {
      ja: {
        question: 'Perfect Memory AIはローカルLLMアプリですか？',
        answer:
          '設定次第です。記録、文字認識、音声認識はお使いのPC上で動きますが、内蔵AIは質問を提供元のサーバー経由でAIプロバイダーへ送ります。アシスタントの接続先をOllama、LM Studio、Janのモデルにすれば、回答はローカルで完結します。',
        bullets: [
          '画面履歴はテキストとして読み取られ、キーワードや意味で検索できます。',
          'Zoom、Google Meet、Teams、Slack、Webex、WhatsAppの会議を文字起こしします。',
          '見たこと、話したこと、聞いたことについてアシスタントが質問に答えます。',
          '任意のMCP接続により、Claude、ChatGPT、Cursorから履歴を照会できます。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Perfect Memory AIとは', anchor: 'what-is-perfect-memory' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '使い始める手順', anchor: 'getting-started' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: 'ローカルかクラウドか：データの流れとプライバシー', anchor: 'privacy' },
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
            text: 'Perfect Memory AIは、画面と会議をPC上で記録し、AIアシスタントがそれについての質問に答える、クローズドソースのWindows／Mac向けアプリです。',
          },
          {
            type: 'plain-terms',
            text: '画面で見たことや会議で話したことを検索できる日記のように残します。その日記を読むAIを自分のマシンで動かすか、クラウドで動かすかは利用者が選べます。',
          },
        ],
        items: [
          'メンテナンス：Mac版0.17.25は2026年10月17日に公開され、9月以降も0.17.x系が頻繁にリリースされているため、放置プロジェクトの警告は該当しません。',
          '料金：無料プラン、年払いで月額$15のPro、自分のAIを用意する人向けの買い切りのPro Offlineがあります。',
          '対応プラットフォーム：Windows 10／11、およびApple SiliconのmacOS 14以降です。',
          '提供元：Perfect Memory llcで、ソースコードは公開されていません。',
          '連携：Claude、ChatGPTなど向けの任意のMCP接続があり、初期状態ではオフです。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、提供元のWebサイト、プライバシーポリシー、リリースフィードを2026年10月30日に確認した内容に基づいています。PromptQuorumはアプリをインストールも計測もしていないため、記録品質、検索精度、ローカルモデルでの結果は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-perfect-memory',
        title: 'Perfect Memory AIとは',
        content: [
          '**Perfect Memory AIは、WindowsのPCまたはMac上で画面と会議を記録し、表示されたテキストを読み取って、その履歴を検索・質問できるようにします。** 提供元のPerfect Memory llcは、「見たこと、話したこと、聞いたことのすべて」について質問できるものと説明しています。無料プラン、年払いのProプラン、買い切りのPro Offlineプランがあります。',
          'ダウンロードページでは、Mac版は新登場として表示されています。Windows版には専用のダウンロードとMicrosoft Storeのページがあります。提供元はブログで、Microsoft Recall、Screenpipe、Rewind、Granolaとの比較ページも公開していますが、これは提供元自身の見解であり、ここでは評価していません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Perfect Memory AIはWindowsとMacでダブルクリックでインストールできます。Linux、モバイル、Web版は掲載されていません。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          { '項目': 'Windows', '入手方法': '[Microsoft Storeのページ](https://apps.microsoft.com/detail/xp9m33wlfs472f)または[MSIインストーラー](https://www.perfectmemory.ai/download/windows)。Windows 10／11' },
          { '項目': 'macOS', '入手方法': '[DMGをダウンロード](https://www.perfectmemory.ai/download)。macOS 14以降、Apple Silicon（M1以降）' },
          { '項目': 'プラン', '入手方法': 'Free $0、Pro 年払いで月額$15、Pro Offline $79買い切り（自分のAIが必要）' },
          { '項目': '公式サイト', '入手方法': '[perfectmemory.ai](https://www.perfectmemory.ai)' },
          { '項目': 'プライバシーポリシー', '入手方法': '[perfectmemory.ai/privacy](https://www.perfectmemory.ai/privacy)' },
          { '項目': 'ソースコード', '入手方法': '非公開' },
        ],
        note: '確認したバージョン：Mac版0.17.25で、提供元のリリースフィードで2026年10月17日に公開されています。Windowsのインストーラーは4.0.187というフォルダーから配信されていますが、これがアプリのバージョンかどうかはサイトに記載がないため、Windows版の公開日は記載していません。価格は提供元の米ドル表示のままで、換算していません。無料プランにはAIアシスト月10回とAI会議月30回が含まれます。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '使い始める手順',
        content: [
          '**手順は提供元のインストールガイドに沿ったもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: 'Windowsではインストーラーを実行し、Macではディスクイメージを開いてPerfect Memoryを「アプリケーション」へドラッグします。',
          },
          {
            title: '権限を許可する',
            whyItMatters: 'Macでは、これがないと何も記録されないため、まず画面収録を許可し、続いて会議の文字起こし用にマイクを許可します。',
          },
          {
            title: '使うAIを選ぶ',
            whyItMatters: '内蔵アシスタントを使うか、回答を自分のPC内にとどめたい場合はOllama、LM Studio、Janを接続します。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下の項目はすべて提供元のWebサイトまたはブログに基づくもので、独自の検証は行っていません。**',
        ],
        items: [
          '**画面履歴の検索。** 画面上のテキストが読み取られてインデックス化され、キーワードや意味で検索し、アプリ・Webサイト・日付で絞り込めます。',
          '**会議の文字起こし。** Zoom、Google Meet、Teams、Slack、Webex、WhatsAppの会議を認識し、話した内容と聞こえた内容を、ボットを通話に参加させずに文字起こしします。',
          '**AIアシスタント。** 見たこと、話したこと、聞いたことについて質問できます。有料プランでは、スタンドアップ用の更新、1対1面談のアジェンダ提案、デイリーブリーフ、調査の要約が加わります。',
          '**MCPツール。** 接続したアシスタントは、search_history、get_moment、get_meeting、get_timelineを呼び出して履歴を読み取れます。',
        ],
        note: '無料プランでも検索、録画、文字起こし、MCP呼び出しは無制限で、上限があるのはAIアシストとAI会議です。',
      },
      privacy: {
        id: 'privacy',
        title: 'ローカルかクラウドか：データの流れとプライバシー',
        content: [
          '**スクリーンショット、そこから読み取ったテキスト、会議の文字起こしは自分のPC上で作成・保存され、提供元は録画をアップロードしないとしています。** 2026年6月30日更新のプライバシーポリシーには、初期設定ではスクリーンショット、動画、音声がデバイスの外に出ないと記載されています。利用状況の分析とクラッシュレポートはオフにでき、ポリシーは分析パートナーとしてVercel、AppCenter、Sentry、Fathom、Segmentを挙げています。',
          '**AIの回答がハイブリッドな部分です。** アシスタントをOllama、LM Studio、Janを通じて自分のPC上のモデルに向ければ、質問はそこで処理されると提供元は述べています。内蔵AIでは、質問と必要な履歴の一部が提供元のサーバーを経由してAIプロバイダーに送られます。ポリシーはこれをOpenAIとしており、アカウント情報は渡りません。この処理がどこで行われるかは記載がありません。',
          'ClaudeやChatGPTとの接続は、オンにするまで無効です。アシスタントから要求があると、クラウドのリレーが要求を自分のPCへ渡して結果を返し、どちらも保存しません。内容はその後、そのアシスタントの提供元に、その提供元の規約のもとで渡ります。画面履歴、会議、またはその両方のどれを読ませるかは利用者が選べます。',
          '提供元によれば、Macでは各スクリーンショットがAES-256で暗号化され、鍵はキーチェーンに保管されます。Windowsでは認識されたテキストを含むデータベースが自動で暗号化され、スクリーンショットも設定で暗号化できます。検索インデックスはアプリでは暗号化されないため、FileVaultやBitLockerに頼ることになります。プライベートブラウズのウィンドウでは記録が一時停止し、パスワードマネージャーなどのアプリを除外でき、直近15分または全データを削除できます。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは提供元の表明であり、監査結果ではありません。ソースコードも公開されておらず、PromptQuorumはアプリの通信を調べていません。画面や会議の記録には他の人の情報が含まれることがあるため、ご自身の状況での同意に関するルールを確認してください。これは法的助言ではありません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**見たものを見失いがちな人**で、画面履歴全体を1つの検索ボックスで探したい人。',
          '**会議の多い人**で、ボットを通話に入れずに文字起こしが欲しい人。',
          '**Ollama、LM Studio、Janを使う人**で、ローカルモデルに自分の履歴について答えさせたい人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**ローカルモデルでの結果。** PromptQuorumはローカルモデルをこのアプリと組み合わせて動かしていないため、回答品質、速度、必要なハードウェアは不明です。サイトにはOS以外のシステム要件の記載がありません。',
          '**セキュリティと監査。** ソースコードも独立した監査結果も公開されておらず、プライバシーポリシーには会社の設立国もOpenAIでの処理場所も記載がありません。',
          '**Windows版のバージョンと日付。** サイトにはWindows版のバージョン番号も公開日もなく、Mac版は初期の0.x系の番号で、最近はプレリリースのビルドも出ています。',
          '**Pro Offlineの内容。** 料金ページには自分のAIが必要で買い切りと書かれていますが、それ以外に何が含まれるかは記載されていません。',
          '**記録品質とコスト。** 文字認識の精度、会議の文字起こしの品質、常時記録によるディスク使用量とバッテリーへの影響は検証していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[Anarlog](/ja/power-local-llm/anarlog-review)', '対応プラットフォーム': 'macOS、Windows、Linux', '価格／ライセンス': '無料プラン／MIT', '主な違い': 'ボットなしでデバイス上に録音するオープンソースの議事メモアプリ。ローカルAIもクラウドAIも選べる' },
          { 'アプリ': '[Meetily](/ja/power-local-llm/meetily-review)', '対応プラットフォーム': 'Windows、macOS', '価格／ライセンス': '無料のCommunity Edition／MIT', '主な違い': 'セルフホスト型の議事録ツール。文字起こしはローカル、要約はOllama経由' },
        ],
        note: '画面履歴アプリでPromptQuorumのレビューがあるものはまだ他にないため、ここにはレビュー済みの最も近い会議メモツールを挙げています。各アプリの最新の価格、ライセンス、対応プラットフォームは、それぞれのページでご確認ください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'OpenAIにデータを送らずに使えますか？',
            a: '提供元によれば可能です。アシスタントを自分のPCで動くモデルに向けます。そのモデルを動かせるハードウェアが必要で、PromptQuorumは結果を検証していません。',
          },
          {
            q: '79ドルのPro Offlineで何が得られますか？',
            a: '料金ページでは、「自分のAIですべて無制限」の買い切り払いと説明されており、モデルは利用者が用意します。アップデートがどれだけの期間含まれるかは記載がありません。',
          },
          {
            q: '記録したものを削除できますか？',
            a: '提供元によれば、直近15分または全データを数回のクリックで削除でき、アプリを記録対象から除外できます。検索インデックスも同時に消えるかどうかは記載がありません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Perfect Memory AIは、WindowsとMacで画面と会議を検索できる形で残せる、活発に更新されているアプリです。試せる無料プランがあり、ローカルAIにも実際につなげられます。一方で、標準のAI経路は提供元のサーバーを経由してOpenAIへ送られ、コードは非公開で、Windows版のバージョンも公開されておらず、プライバシーや精度に関する表明はここでは確認できませんでした。自分のローカルモデルを接続し、まず無料プランで試せる人に向いています。機密性の高い資料を扱う人は、記録を始める前にプライバシーポリシーと暗号化に関する注記を読んでください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Perfect Memory AIの公式サイト](https://www.perfectmemory.ai) — 機能、MCPのページ、ブログ。2026年10月30日確認。',
          '[料金](https://www.perfectmemory.ai/pricing)と[Pro Offlineの料金](https://www.perfectmemory.ai/pricing/pro-offline) — プランと買い切り。2026年10月30日確認。',
          '[Private by design](https://www.perfectmemory.ai/private-by-design) — ローカルAI、暗号化、記録の制御。2026年10月30日確認。',
          '[プライバシーポリシー](https://www.perfectmemory.ai/privacy) — データ収集と第三者。2026年6月30日更新。',
          '[ダウンロードページ](https://www.perfectmemory.ai/download)と[インストールガイド](https://www.perfectmemory.ai/support/getting-started/how-to-install) — 対応プラットフォームと要件。2026年10月30日確認。',
          '[Mac版リリースフィード](https://github.com/DariusKocar/PerfectMemoryMac-releases/releases) — バージョン0.17.25と公開日。2026年10月30日参照。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Anarlogレビュー](/ja/power-local-llm/anarlog-review) — ローカルAIとクラウドAIを選べるオープンソースの議事メモアプリ。',
          '[Meetilyレビュー](/ja/power-local-llm/meetily-review) — ローカル要約に対応するセルフホスト型の議事録ツール。',
          '[音声・オーディオツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — 文字起こしツールのカテゴリ比較。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/perfect-memory-review-hero-pt.webp',
    title: 'Análise do Perfect Memory AI: memória de tela e reuniões com busca',
    seoTitle: 'Análise do Perfect Memory AI: tela e reuniões pesquisáveis',
    intro:
      'O Perfect Memory AI é um app para Windows e Mac da [Perfect Memory llc](https://www.perfectmemory.ai) que grava o que aparece na sua tela e transcreve suas reuniões no seu próprio computador, para você pesquisar e consultar depois. As respostas de IA só ficam locais se você conectar Ollama, LM Studio ou Jan; caso contrário, passam pelo servidor do fabricante. Esta análise se baseia no site, na política de privacidade e no feed de versões do fabricante, consultados em 30 de outubro de 2026; a PromptQuorum não testou o app na prática.',
    metaDescription:
      'Análise do Perfect Memory AI: app para Windows e Mac que grava tela e reuniões localmente. IA local só com Ollama, LM Studio ou Jan. Não testado.',
    twitterDescription:
      'Análise do Perfect Memory AI: memória de tela e reuniões com busca para Windows e Mac. Gravação local, IA local só com Ollama, LM Studio ou Jan.',
    audience:
      'Pessoas que querem um registro pesquisável da tela e das reuniões e precisam saber o que roda localmente, o que vai para a nuvem e o que as fontes deixam em aberto.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise Perfect Memory AI',
    targetKeywords: [
      'análise perfect memory ai',
      'perfectmemory.ai',
      'gravação de tela local pesquisa',
      'transcrição de reuniões com ia windows mac',
      'alternativa ao rewind windows',
      'ollama app memória de tela',
      'mcp histórico de tela claude',
    ],
    current_models_mentioned: ['ChatGPT', 'Ollama', 'LM Studio', 'Jan'],
    current_hardware_mentioned: ['Windows 10', 'Windows 11', 'macOS 14', 'Apple silicon'],
    leadAnswerBlock:
      '**O Perfect Memory AI (versão para Mac 0.17.25, lançada em 17 de outubro de 2026) é um app para Windows e Mac que grava sua tela e transcreve suas reuniões no seu próprio computador para que você possa pesquisá-las.** É uma ferramenta híbrida, não totalmente local: a IA que responde às suas perguntas pode rodar na nuvem.',
    quickAnswerTop: {
      pt: {
        question: 'O Perfect Memory AI é um app com LLM local?',
        answer:
          'Só se você o configurar assim. Gravação, reconhecimento de texto e reconhecimento de fala rodam no seu computador, mas a IA integrada envia sua pergunta pelo servidor do fabricante a um provedor de IA; se o assistente apontar para um modelo no Ollama, LM Studio ou Jan, a resposta fica local.',
        bullets: [
          'O histórico de tela é lido como texto e pode ser pesquisado por palavra-chave ou significado.',
          'Reuniões no Zoom, Google Meet, Teams, Slack, Webex e WhatsApp são transcritas.',
          'Um assistente responde a perguntas sobre o que você viu, disse ou ouviu.',
          'Uma conexão MCP opcional permite que Claude, ChatGPT ou Cursor consultem seu histórico.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Perfect Memory AI?', anchor: 'what-is-perfect-memory' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'Primeiros passos', anchor: 'getting-started' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Local ou nuvem: fluxo de dados e privacidade', anchor: 'privacy' },
      { label: 'Para quem é', anchor: 'who-should-use' },
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
            text: 'O Perfect Memory AI é um app de código fechado para Windows e Mac que grava sua tela e suas reuniões no seu computador e deixa um assistente de IA responder a perguntas sobre elas.',
          },
          {
            type: 'plain-terms',
            text: 'Ele mantém um diário pesquisável do que você viu na tela e disse em reuniões; você decide se a IA que lê esse diário roda na sua máquina ou na nuvem.',
          },
        ],
        items: [
          'Manutenção: a versão para Mac 0.17.25 saiu em 17 de outubro de 2026, depois de versões 0.17.x frequentes desde setembro, então não se aplica o aviso de projeto abandonado.',
          'Custo: um plano gratuito, o Pro a $15 por mês cobrados anualmente e um plano Pro Offline de pagamento único para quem traz a própria IA.',
          'Plataformas: Windows 10 e 11, e macOS 14 ou posterior em Apple Silicon.',
          'Fabricante: Perfect Memory llc, sem código-fonte publicado.',
          'Integrações: uma conexão MCP opcional para Claude, ChatGPT e outros assistentes, desativada por padrão.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site, na política de privacidade e no feed de versões do fabricante, consultados em 30 de outubro de 2026. A PromptQuorum não instalou nem mediu o app, então qualidade de captura, precisão da busca e resultados com modelos locais não são avaliados.',
          },
        ],
      },
      overview: {
        id: 'what-is-perfect-memory',
        title: 'O que é o Perfect Memory AI?',
        content: [
          '**O Perfect Memory AI grava sua tela e suas reuniões em um PC com Windows ou em um Mac, lê o texto exibido e permite pesquisar e consultar esse histórico.** O fabricante, Perfect Memory llc, o descreve como uma forma de perguntar sobre «tudo o que você viu, disse ou ouviu». Ele é oferecido em um plano gratuito, um plano Pro anual e um plano Pro Offline de pagamento único.',
          'O app para Mac aparece como novidade na página de download. O app para Windows tem download próprio e uma página na Microsoft Store. O fabricante também publica em seu blog páginas comparativas com Microsoft Recall, Screenpipe, Rewind e Granola; são opiniões dele e não foram avaliadas aqui.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Perfect Memory AI se instala com um duplo clique no Windows e no Mac; não há versão para Linux, celular ou web listada.**',
        ],
        columns: ['Opção', 'Como obter'],
        rows: [
          { 'Opção': 'Windows', 'Como obter': '[Página na Microsoft Store](https://apps.microsoft.com/detail/xp9m33wlfs472f) ou [instalador MSI](https://www.perfectmemory.ai/download/windows); Windows 10 e 11' },
          { 'Opção': 'macOS', 'Como obter': '[Download do DMG](https://www.perfectmemory.ai/download); macOS 14 ou posterior, Apple Silicon (M1 ou mais novo)' },
          { 'Opção': 'Planos', 'Como obter': 'Free $0; Pro $15 por mês cobrados anualmente; Pro Offline $79 único, exige IA própria' },
          { 'Opção': 'Site', 'Como obter': '[perfectmemory.ai](https://www.perfectmemory.ai)' },
          { 'Opção': 'Política de privacidade', 'Como obter': '[perfectmemory.ai/privacy](https://www.perfectmemory.ai/privacy)' },
          { 'Opção': 'Código-fonte', 'Como obter': 'Não publicado' },
        ],
        note: 'Versão analisada: Mac 0.17.25, publicada em 17 de outubro de 2026 no feed de versões do fabricante. O instalador do Windows é servido de uma pasta chamada 4.0.187, mas o site não diz se essa é a versão do app, então nenhuma data de lançamento do Windows é informada. Os preços são os valores em dólares americanos do fabricante, sem conversão; o plano gratuito inclui 10 consultas de IA e 30 reuniões de IA por mês.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Primeiros passos',
        content: [
          '**Os passos seguem o guia de instalação do fabricante; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Instale o app',
            whyItMatters: 'Execute o instalador do Windows ou abra a imagem de disco do Mac e arraste o Perfect Memory para Aplicativos.',
          },
          {
            title: 'Conceda as permissões',
            whyItMatters: 'No Mac, permita primeiro a Gravação de Tela, pois sem ela nada é capturado, e depois o Microfone para as transcrições de reuniões.',
          },
          {
            title: 'Escolha sua IA',
            whyItMatters: 'Use o assistente integrado ou conecte Ollama, LM Studio ou Jan se quiser que as respostas fiquem no seu computador.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem do site ou do blog do fabricante; nenhum foi testado de forma independente.**',
        ],
        items: [
          '**Busca no histórico de tela.** O texto da sua tela é lido e indexado, para você pesquisar por palavra-chave ou significado e filtrar por app, site e data.',
          '**Transcrições de reuniões.** O app reconhece reuniões no Zoom, Google Meet, Teams, Slack, Webex e WhatsApp e transcreve o que você diz e ouve, sem bot entrando na chamada.',
          '**Assistente de IA.** Pergunte sobre o que você viu, disse ou ouviu; os planos pagos acrescentam atualizações para a reunião diária, sugestões de pauta para conversas individuais, um resumo diário e resumos de pesquisa.',
          '**Ferramentas MCP.** Assistentes conectados podem chamar search_history, get_moment, get_meeting e get_timeline para ler seu histórico.',
        ],
        note: 'O plano gratuito inclui busca, gravações, transcrições e chamadas MCP ilimitadas; os limites valem para consultas de IA e reuniões de IA.',
      },
      privacy: {
        id: 'privacy',
        title: 'Local ou nuvem: fluxo de dados e privacidade',
        content: [
          '**Capturas de tela, o texto lido delas e as transcrições de reuniões são geradas e guardadas no seu próprio computador, e o fabricante diz que não envia as gravações.** A política de privacidade, atualizada em 30 de junho de 2026, afirma que, por padrão, nenhuma captura, vídeo ou áudio sai do dispositivo. Análises de uso e relatórios de falhas podem ser desativados; a política cita Vercel, AppCenter, Sentry, Fathom e Segment como parceiros de análise.',
          '**As respostas de IA são a parte híbrida.** Se você apontar o assistente para um modelo no seu computador por meio de Ollama, LM Studio ou Jan, o fabricante diz que as perguntas são respondidas ali. Com a IA integrada, sua pergunta e as partes do histórico de que ela precisa passam pelo servidor do fabricante até o provedor de IA, que a política identifica como OpenAI, sem os dados da sua conta; o local desse processamento não é informado.',
          'A conexão com Claude e ChatGPT fica desativada até você ativá-la. Quando um assistente faz um pedido, um relé na nuvem o repassa ao seu computador e devolve o resultado sem guardar nenhum dos dois; o conteúdo chega então ao provedor desse assistente, sob os termos dele. Você escolhe se ele pode ler o histórico de tela, as reuniões ou ambos.',
          'Segundo o fabricante, no Mac, cada captura é criptografada com AES-256 e a chave fica no Chaveiro; no Windows, o banco de dados, inclusive o texto reconhecido, é criptografado automaticamente e as capturas podem ser criptografadas nos Ajustes. O índice de busca não é criptografado pelo app e depende do FileVault ou do BitLocker. A gravação pausa em janelas de navegação privada, apps como um gerenciador de senhas podem ser excluídos, e você pode apagar os últimos 15 minutos ou tudo.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São declarações do fabricante, não resultados de auditoria, e não há código-fonte publicado. A PromptQuorum não inspecionou o tráfego de rede do app. Gravar telas e reuniões pode captar informações de outras pessoas, então verifique as regras de consentimento do seu caso; isto não é aconselhamento jurídico.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é',
        items: [
          '**Quem perde o fio do que viu** e quer uma única caixa de busca para todo o histórico de tela.',
          '**Quem vive em reuniões** e quer transcrições sem bot na chamada.',
          '**Usuários de Ollama, LM Studio ou Jan** que querem que um modelo local responda a perguntas sobre o próprio histórico.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Resultados com modelos locais.** A PromptQuorum não executou nenhum modelo local com o app, então qualidade das respostas, velocidade e hardware necessário são desconhecidos; o site não informa requisitos de sistema além do sistema operacional.',
          '**Segurança e auditorias.** Não há código-fonte nem auditoria independente publicados, e a política de privacidade não informa o país de constituição da empresa nem onde ocorre o processamento na OpenAI.',
          '**Versão e data do Windows.** O site não dá número de versão nem data de lançamento para o Windows, e o app do Mac traz números 0.x iniciais e versões preliminares recentes.',
          '**Alcance do Pro Offline.** A página de preços diz que ele exige IA própria e que o pagamento é único, mas não lista o que mais está incluído.',
          '**Qualidade de captura e custo.** Precisão do reconhecimento de texto, qualidade das transcrições, uso de disco e impacto na bateria da gravação contínua não foram testados.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[Anarlog](/pt/power-local-llm/anarlog-review)', 'Plataformas': 'macOS, Windows, Linux', 'Preço / licença': 'Plano gratuito / MIT', 'Diferença principal': 'Bloco de notas de reuniões de código aberto, sem bot, que grava no seu dispositivo; IA local ou na nuvem' },
          { 'App': '[Meetily](/pt/power-local-llm/meetily-review)', 'Plataformas': 'Windows, macOS', 'Preço / licença': 'Edição Community gratuita / MIT', 'Diferença principal': 'Anotador de reuniões auto-hospedado; transcrição local, resumos via Ollama' },
        ],
        note: 'Nenhum outro app de histórico de tela tem ainda uma análise da PromptQuorum, então estas são as ferramentas de notas de reuniões analisadas mais próximas; confirme preço, licença e plataformas de cada app na própria página.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso usar sem enviar dados à OpenAI?',
            a: 'Sim, segundo o fabricante: aponte o assistente para um modelo que rode no seu próprio computador. Para isso você precisa de hardware capaz de executar esse modelo, e a PromptQuorum não testou o resultado.',
          },
          {
            q: 'O que o plano Pro Offline de $79 oferece?',
            a: 'A página de preços o descreve como pagamento único com «tudo ilimitado com a sua própria IA», ou seja, o modelo é por sua conta. Ela não diz por quanto tempo as atualizações estão incluídas.',
          },
          {
            q: 'Posso apagar o que foi gravado?',
            a: 'O fabricante diz que dá para apagar os últimos 15 minutos ou tudo com poucos cliques, e excluir apps da gravação. Não é informado se o índice de busca é limpo junto.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Perfect Memory AI é um jeito ativamente atualizado de ter um registro pesquisável da tela e das reuniões no Windows e no Mac, com um plano gratuito para experimentar e um caminho real para IA local. Em contrapartida, o caminho de IA padrão passa pelo servidor do fabricante até a OpenAI, o código é fechado, não há versão do Windows publicada e nenhuma das afirmações sobre privacidade ou precisão pôde ser verificada aqui. Serve para quem está disposto a conectar o próprio modelo local e testar antes o plano gratuito; quem lida com material confidencial deve ler a política de privacidade e as notas de criptografia antes de gravar.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Perfect Memory AI](https://www.perfectmemory.ai) — recursos, página de MCP e blog, consultados em 30 de outubro de 2026.',
          '[Preços](https://www.perfectmemory.ai/pricing) e [preços do Pro Offline](https://www.perfectmemory.ai/pricing/pro-offline) — planos e pagamento único, consultados em 30 de outubro de 2026.',
          '[Private by design](https://www.perfectmemory.ai/private-by-design) — IA local, criptografia e controles de gravação, consultados em 30 de outubro de 2026.',
          '[Política de privacidade](https://www.perfectmemory.ai/privacy) — coleta de dados e terceiros, atualizada em 30 de junho de 2026.',
          '[Página de download](https://www.perfectmemory.ai/download) e [guia de instalação](https://www.perfectmemory.ai/support/getting-started/how-to-install) — plataformas e requisitos, consultados em 30 de outubro de 2026.',
          '[Feed de versões para Mac](https://github.com/DariusKocar/PerfectMemoryMac-releases/releases) — versão 0.17.25 e datas de lançamento, lido em 30 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Anarlog](/pt/power-local-llm/anarlog-review) — um bloco de notas de reuniões de código aberto com IA local ou na nuvem à escolha.',
          '[Análise do Meetily](/pt/power-local-llm/meetily-review) — um anotador de reuniões auto-hospedado com resumos locais.',
          '[Ferramentas de voz e áudio comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — a comparação de categoria para ferramentas de transcrição.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/perfect-memory-review-hero-ar.webp',
    title: 'مراجعة Perfect Memory AI: ذاكرة قابلة للبحث للشاشة والاجتماعات',
    seoTitle: 'مراجعة Perfect Memory AI: بحث في الشاشة والاجتماعات',
    intro:
      'Perfect Memory AI تطبيق لنظامي Windows وMac من [Perfect Memory llc](https://www.perfectmemory.ai) يسجّل ما يظهر على شاشتك ويفرّغ اجتماعاتك نصيًا على جهازك، لتبحث فيها وتسأل عنها لاحقًا. تبقى إجابات الذكاء الاصطناعي محلية فقط إذا ربطت Ollama أو LM Studio أو Jan؛ وإلا فإنها تمر عبر خادم الشركة المطورة. تستند هذه المراجعة إلى موقع الشركة وسياسة الخصوصية وقناة الإصدارات، وقد روجعت في 30 أكتوبر 2026؛ ولم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'مراجعة Perfect Memory AI: تطبيق Windows وMac يسجّل الشاشة والاجتماعات محليًا. الذكاء الاصطناعي محلي فقط مع Ollama أو LM Studio أو Jan.',
    twitterDescription:
      'مراجعة Perfect Memory AI: ذاكرة قابلة للبحث للشاشة والاجتماعات على Windows وMac. التسجيل محلي، والذكاء الاصطناعي محلي فقط مع Ollama أو LM Studio أو Jan.',
    audience:
      'من يريدون سجلًا قابلًا للبحث لشاشتهم واجتماعاتهم ويحتاجون إلى معرفة ما يعمل محليًا وما يصل إلى السحابة وما تتركه المصادر دون تأكيد.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Perfect Memory AI',
    targetKeywords: [
      'مراجعة perfect memory ai',
      'perfectmemory.ai',
      'تسجيل الشاشة محليًا والبحث',
      'تفريغ الاجتماعات بالذكاء الاصطناعي windows mac',
      'بديل rewind على windows',
      'ollama تطبيق ذاكرة الشاشة',
      'mcp سجل الشاشة claude',
    ],
    current_models_mentioned: ['ChatGPT', 'Ollama', 'LM Studio', 'Jan'],
    current_hardware_mentioned: ['Windows 10', 'Windows 11', 'macOS 14', 'Apple silicon'],
    leadAnswerBlock:
      '**Perfect Memory AI (إصدار Mac رقم 0.17.25، صدر في 17 أكتوبر 2026) تطبيق لنظامي Windows وMac يسجّل شاشتك ويفرّغ اجتماعاتك نصيًا على جهازك لتتمكن من البحث فيها.** هو أداة هجينة لا محلية بالكامل: فقد يعمل الذكاء الاصطناعي الذي يجيب عن أسئلتك في السحابة.',
    quickAnswerTop: {
      ar: {
        question: 'هل Perfect Memory AI تطبيق بنموذج لغوي محلي؟',
        answer:
          'فقط إذا أعددته على هذا النحو. يعمل التسجيل والتعرف على النص والتعرف على الكلام على جهازك، لكن الذكاء الاصطناعي المدمج يرسل سؤالك عبر خادم الشركة إلى مزوّد ذكاء اصطناعي؛ وإذا وجّهت المساعد إلى نموذج في Ollama أو LM Studio أو Jan بقيت الإجابة محلية.',
        bullets: [
          'يُقرأ سجل الشاشة نصًا ويمكن البحث فيه بالكلمة المفتاحية أو بالمعنى.',
          'تُفرَّغ نصيًا اجتماعات Zoom وGoogle Meet وTeams وSlack وWebex وWhatsApp.',
          'يجيب مساعد عن أسئلة حول ما رأيته أو قلته أو سمعته.',
          'يتيح اتصال MCP الاختياري لـ Claude أو ChatGPT أو Cursor الاستعلام عن سجلك.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'ما هو Perfect Memory AI؟', anchor: 'what-is-perfect-memory' },
      { label: 'طريقة الحصول عليه', anchor: 'get-it' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'الميزات المؤكدة من المصادر', anchor: 'key-features' },
      { label: 'محلي أم سحابي: تدفق البيانات والخصوصية', anchor: 'privacy' },
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
            text: 'Perfect Memory AI تطبيق مغلق المصدر لنظامي Windows وMac يسجّل شاشتك واجتماعاتك على جهازك ويدع مساعدًا بالذكاء الاصطناعي يجيب عن أسئلتك بشأنها.',
          },
          {
            type: 'plain-terms',
            text: 'يحتفظ بمفكرة قابلة للبحث لما رأيته على الشاشة وما قلته في الاجتماعات، وأنت من يقرر هل يعمل الذكاء الاصطناعي الذي يقرأ هذه المفكرة على جهازك أم في السحابة.',
          },
        ],
        items: [
          'الصيانة: صدر إصدار Mac رقم 0.17.25 في 17 أكتوبر 2026 بعد إصدارات 0.17.x متكررة منذ سبتمبر، لذا لا ينطبق تحذير المشروع المتوقف.',
          'التكلفة: خطة مجانية، وخطة Pro بسعر 15 دولارًا شهريًا تُدفع سنويًا، وخطة Pro Offline بدفعة واحدة لمن يجلبون ذكاءهم الاصطناعي بأنفسهم.',
          'المنصات: Windows 10 و11، وmacOS 14 أو أحدث على معالجات Apple Silicon.',
          'الشركة المطورة: Perfect Memory llc، دون شيفرة مصدرية منشورة.',
          'التكاملات: اتصال MCP اختياري لـ Claude وChatGPT ومساعدين آخرين، وهو متوقف افتراضيًا.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى موقع الشركة وسياسة الخصوصية وقناة الإصدارات، وقد روجعت في 30 أكتوبر 2026. لم تثبّت PromptQuorum التطبيق ولم تقِسه، لذا لم تُقيَّم جودة الالتقاط ودقة البحث ونتائج النماذج المحلية.',
          },
        ],
      },
      overview: {
        id: 'what-is-perfect-memory',
        title: 'ما هو Perfect Memory AI؟',
        content: [
          '**يسجّل Perfect Memory AI شاشتك واجتماعاتك على حاسوب Windows أو Mac، ويقرأ النص الظاهر، ويتيح لك البحث في هذا السجل والاستعلام عنه.** تصفه الشركة، Perfect Memory llc، بأنه وسيلة للسؤال عن «كل ما رأيته أو قلته أو سمعته». يُباع بخطة مجانية وخطة Pro سنوية وخطة Pro Offline بدفعة واحدة.',
          'يظهر تطبيق Mac في صفحة التنزيل على أنه جديد. وللنسخة على Windows تنزيل مستقل وصفحة في Microsoft Store. وتنشر الشركة في مدونتها أيضًا صفحات مقارنة مع Microsoft Recall وScreenpipe وRewind وGranola؛ وهي آراؤها الخاصة ولم تُقيَّم هنا.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'طريقة الحصول عليه',
        content: [
          '**يُثبَّت Perfect Memory AI بنقرة مزدوجة على Windows وMac، ولا تُذكر نسخة لـ Linux أو الهاتف أو الويب.**',
        ],
        columns: ['الخيار', 'طريقة الحصول عليه'],
        rows: [
          { 'الخيار': 'Windows', 'طريقة الحصول عليه': '[صفحة Microsoft Store](https://apps.microsoft.com/detail/xp9m33wlfs472f) أو [مثبّت MSI](https://www.perfectmemory.ai/download/windows)؛ Windows 10 و11' },
          { 'الخيار': 'macOS', 'طريقة الحصول عليه': '[تنزيل DMG](https://www.perfectmemory.ai/download)؛ macOS 14 أو أحدث، Apple Silicon (M1 أو أحدث)' },
          { 'الخيار': 'الخطط', 'طريقة الحصول عليه': 'Free 0 دولار؛ Pro 15 دولارًا شهريًا سنويًا؛ Pro Offline 79 دولارًا مرة واحدة، بذكاء خاص بك' },
          { 'الخيار': 'الموقع', 'طريقة الحصول عليه': '[perfectmemory.ai](https://www.perfectmemory.ai)' },
          { 'الخيار': 'سياسة الخصوصية', 'طريقة الحصول عليه': '[perfectmemory.ai/privacy](https://www.perfectmemory.ai/privacy)' },
          { 'الخيار': 'الشيفرة المصدرية', 'طريقة الحصول عليه': 'غير منشورة' },
        ],
        note: 'الإصدار الذي رُوجع: Mac رقم 0.17.25، نُشر في 17 أكتوبر 2026 على قناة إصدارات الشركة. يُقدَّم مثبّت Windows من مجلد باسم 4.0.187، لكن الموقع لا يذكر هل هذا هو رقم إصدار التطبيق، لذلك لا يُذكر تاريخ إصدار لنسخة Windows. الأسعار هي أرقام الشركة بالدولار الأمريكي دون تحويل؛ وتشمل الخطة المجانية 10 استعانات بالذكاء الاصطناعي و30 اجتماعًا بالذكاء الاصطناعي شهريًا.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع الخطوات دليل التثبيت الصادر عن الشركة؛ ولم تنفذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'شغّل مثبّت Windows أو افتح صورة القرص على Mac واسحب Perfect Memory إلى مجلد التطبيقات.',
          },
          {
            title: 'امنح الأذونات',
            whyItMatters: 'على Mac اسمح أولًا بتسجيل الشاشة لأنه بدونه لا يُلتقط شيء، ثم بالميكروفون لتفريغ الاجتماعات نصيًا.',
          },
          {
            title: 'اختر الذكاء الاصطناعي',
            whyItMatters: 'استخدم المساعد المدمج، أو اربط Ollama أو LM Studio أو Jan إن أردت أن تبقى الإجابات على جهازك.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات المؤكدة من المصادر',
        content: [
          '**كل بند أدناه مصدره موقع الشركة أو مدونتها؛ ولم يُختبر أي منها بشكل مستقل.**',
        ],
        items: [
          '**البحث في سجل الشاشة.** يُقرأ النص الظاهر على شاشتك ويُفهرس، فيمكنك البحث بالكلمة المفتاحية أو بالمعنى والتصفية حسب التطبيق والموقع والتاريخ.',
          '**تفريغ الاجتماعات نصيًا.** يتعرف التطبيق على اجتماعات Zoom وGoogle Meet وTeams وSlack وWebex وWhatsApp ويفرّغ ما تقوله وتسمعه، دون أن ينضم بوت إلى المكالمة.',
          '**مساعد الذكاء الاصطناعي.** اسأل عما رأيته أو قلته أو سمعته؛ وتضيف الخطط المدفوعة تحديثات الاجتماع اليومي واقتراحات جدول أعمال اللقاءات الفردية وملخصًا يوميًا وملخصات بحثية.',
          '**أدوات MCP.** يمكن للمساعدين المتصلين استدعاء search_history وget_moment وget_meeting وget_timeline لقراءة سجلك.',
        ],
        note: 'تشمل الخطة المجانية بحثًا وتسجيلات وتفريغًا نصيًا واستدعاءات MCP غير محدودة؛ وتنطبق الحدود على الاستعانات بالذكاء الاصطناعي والاجتماعات بالذكاء الاصطناعي.',
      },
      privacy: {
        id: 'privacy',
        title: 'محلي أم سحابي: تدفق البيانات والخصوصية',
        content: [
          '**تُنشأ لقطات الشاشة والنص المقروء منها وتفريغات الاجتماعات على حاسوبك وتُخزَّن عليه، وتقول الشركة إنها لا ترفع التسجيلات.** تذكر سياسة الخصوصية، التي حُدّثت في 30 يونيو 2026، أنه لا تغادر الجهاز افتراضيًا أي لقطات شاشة أو فيديو أو صوت. يمكن إيقاف تحليلات الاستخدام وتقارير الأعطال؛ وتذكر السياسة Vercel وAppCenter وSentry وFathom وSegment شركاءَ تحليلات.',
          '**إجابات الذكاء الاصطناعي هي الجزء الهجين.** إذا وجّهت المساعد إلى نموذج على حاسوبك عبر Ollama أو LM Studio أو Jan، تقول الشركة إن الأسئلة تُجاب هناك. أما مع الذكاء الاصطناعي المدمج فيمر سؤالك والأجزاء اللازمة من سجلك عبر خادم الشركة إلى مزوّد الذكاء الاصطناعي، وتسميه السياسة OpenAI، دون بيانات حسابك؛ ولا يُذكر أين تجري هذه المعالجة.',
          'اتصال Claude وChatGPT متوقف إلى أن تفعّله. وحين يطلب مساعد شيئًا، يمرر مرحّل سحابي الطلب إلى حاسوبك ويعيد النتيجة دون الاحتفاظ بأي منهما؛ ثم يصل المحتوى إلى مزوّد ذلك المساعد وفق شروطه هو. وأنت تختار هل يقرأ سجل الشاشة أو الاجتماعات أو كليهما.',
          'تذكر الشركة أنه على Mac تُشفَّر كل لقطة بـ AES-256 ويبقى المفتاح في سلسلة المفاتيح؛ وعلى Windows تُشفَّر قاعدة البيانات، بما فيها النص المعروف، تلقائيًا ويمكن تشفير اللقطات من الإعدادات. ولا يشفّر التطبيق فهرس البحث، فيعتمد على FileVault أو BitLocker. يتوقف التسجيل مؤقتًا في نوافذ التصفح الخاص، ويمكن استثناء تطبيقات مثل مدير كلمات المرور، ويمكنك حذف آخر 15 دقيقة أو كل شيء.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات من الشركة لا نتائج تدقيق، ولا توجد شيفرة مصدرية منشورة. لم تفحص PromptQuorum حركة شبكة التطبيق. قد يلتقط تسجيل الشاشات والاجتماعات معلومات عن أشخاص آخرين، فتحقق من قواعد الموافقة المناسبة لحالتك؛ وهذا ليس استشارة قانونية.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**من يفقدون أثر ما رأوه** ويريدون مربع بحث واحدًا لكل سجل شاشتهم.',
          '**أصحاب الاجتماعات الكثيرة** الذين يريدون تفريغًا نصيًا دون بوت في المكالمة.',
          '**مستخدمو Ollama وLM Studio وJan** الذين يريدون أن يجيب نموذج محلي عن أسئلة تخص سجلهم.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**نتائج النماذج المحلية.** لم تشغّل PromptQuorum أي نموذج محلي مع التطبيق، لذا فجودة الإجابات وسرعتها والعتاد المطلوب غير معروفة؛ ولا يذكر الموقع متطلبات نظام سوى نظام التشغيل.',
          '**الأمان والتدقيق.** لا توجد شيفرة مصدرية ولا تدقيق مستقل منشوران، ولا تذكر سياسة الخصوصية بلد تأسيس الشركة ولا مكان معالجة OpenAI.',
          '**إصدار Windows وتاريخه.** لا يعطي الموقع رقم إصدار ولا تاريخ إصدار لنسخة Windows، ويحمل تطبيق Mac أرقام إصدارات 0.x مبكرة وإصدارات تمهيدية حديثة.',
          '**نطاق Pro Offline.** تذكر صفحة الأسعار أنه يتطلب ذكاءً اصطناعيًا خاصًا بك وأن الدفع مرة واحدة، لكنها لا تسرد ما يشمله غير ذلك.',
          '**جودة الالتقاط والتكلفة.** لم تُختبر دقة التعرف على النص، ولا جودة تفريغ الاجتماعات، ولا استهلاك القرص وأثر التسجيل المستمر على البطارية.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الرئيسي'],
        rows: [
          { 'التطبيق': '[Anarlog](/ar/power-local-llm/anarlog-review)', 'المنصات': 'macOS وWindows وLinux', 'السعر / الترخيص': 'خطة مجانية / MIT', 'الفرق الرئيسي': 'دفتر ملاحظات اجتماعات مفتوح المصدر دون بوت يسجّل على جهازك؛ ذكاء اصطناعي محلي أو سحابي' },
          { 'التطبيق': '[Meetily](/ar/power-local-llm/meetily-review)', 'المنصات': 'Windows وmacOS', 'السعر / الترخيص': 'نسخة مجتمعية مجانية / MIT', 'الفرق الرئيسي': 'مدوّن اجتماعات ذاتي الاستضافة؛ تفريغ نصي محلي وملخصات عبر Ollama' },
        ],
        note: 'لا يوجد تطبيق آخر لسجل الشاشة له مراجعة في PromptQuorum حتى الآن، لذا فهذه أقرب أدوات ملاحظات الاجتماعات التي سبقت مراجعتها؛ تحقق من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكنني استخدامه دون إرسال بيانات إلى OpenAI؟',
            a: 'نعم، بحسب الشركة: وجّه المساعد إلى نموذج يعمل على حاسوبك. ستحتاج حينها إلى عتاد يستطيع تشغيل ذلك النموذج، ولم تختبر PromptQuorum النتيجة.',
          },
          {
            q: 'ماذا تقدّم خطة Pro Offline بسعر 79 دولارًا؟',
            a: 'تصفها صفحة الأسعار بأنها دفعة واحدة مع «كل شيء غير محدود بذكائك الاصطناعي الخاص»، أي أنك توفّر النموذج بنفسك. ولا تذكر مدة التحديثات المشمولة.',
          },
          {
            q: 'هل يمكنني حذف ما سُجّل؟',
            a: 'تقول الشركة إنه يمكن حذف آخر 15 دقيقة أو كل شيء ببضع نقرات، واستثناء تطبيقات من التسجيل. ولا يُذكر هل يُفرَّغ فهرس البحث معها.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Perfect Memory AI وسيلة محدَّثة باستمرار للحصول على سجل قابل للبحث لشاشتك واجتماعاتك على Windows وMac، مع خطة مجانية للتجربة وطريق حقيقي إلى الذكاء الاصطناعي المحلي. في المقابل، يمر مسار الذكاء الاصطناعي الافتراضي عبر خادم الشركة إلى OpenAI، والشيفرة مغلقة، ولا يُنشر إصدار لـ Windows، ولم يمكن التحقق هنا من أي ادعاء يخص الخصوصية أو الدقة. يناسب من هم مستعدون لربط نموذجهم المحلي الخاص وتجربة الخطة المجانية أولًا؛ ومن يتعاملون مع مواد سرية فعليهم قراءة سياسة الخصوصية وملاحظات التشفير قبل التسجيل.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Perfect Memory AI](https://www.perfectmemory.ai) — الميزات وصفحة MCP والمدونة، روجعت في 30 أكتوبر 2026.',
          '[الأسعار](https://www.perfectmemory.ai/pricing) و[أسعار Pro Offline](https://www.perfectmemory.ai/pricing/pro-offline) — الخطط والدفعة الواحدة، روجعت في 30 أكتوبر 2026.',
          '[Private by design](https://www.perfectmemory.ai/private-by-design) — الذكاء الاصطناعي المحلي والتشفير وضوابط التسجيل، روجعت في 30 أكتوبر 2026.',
          '[سياسة الخصوصية](https://www.perfectmemory.ai/privacy) — جمع البيانات والأطراف الثالثة، حُدّثت في 30 يونيو 2026.',
          '[صفحة التنزيل](https://www.perfectmemory.ai/download) و[دليل التثبيت](https://www.perfectmemory.ai/support/getting-started/how-to-install) — المنصات والمتطلبات، روجعت في 30 أكتوبر 2026.',
          '[قناة إصدارات Mac](https://github.com/DariusKocar/PerfectMemoryMac-releases/releases) — الإصدار 0.17.25 وتواريخ الإصدار، قُرئت في 30 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Anarlog](/ar/power-local-llm/anarlog-review) — دفتر ملاحظات اجتماعات مفتوح المصدر مع خيار الذكاء الاصطناعي المحلي أو السحابي.',
          '[مراجعة Meetily](/ar/power-local-llm/meetily-review) — مدوّن اجتماعات ذاتي الاستضافة بملخصات محلية.',
          '[أدوات الصوت والتسجيلات الصوتية: مقارنة](/ar/power-local-llm/local-llm-voice-audio-compared) — مقارنة الفئة لأدوات التفريغ النصي.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/perfect-memory-review-hero-zh.webp',
    title: 'Perfect Memory AI 评测：可搜索的屏幕与会议记忆应用',
    seoTitle: 'Perfect Memory AI 评测：可搜索屏幕与会议',
    intro:
      'Perfect Memory AI 是 [Perfect Memory llc](https://www.perfectmemory.ai) 推出的 Windows 和 Mac 应用，在你自己的电脑上记录屏幕内容并转写会议，方便日后搜索和提问。只有连接 Ollama、LM Studio 或 Jan 时，AI 回答才会留在本机；否则会经由厂商的服务器。本评测基于厂商网站、隐私政策和发布源，核查日期为 2026 年 10 月 30 日；PromptQuorum 没有亲自实测该应用。',
    metaDescription:
      'Perfect Memory AI 评测：在本机记录屏幕和会议的 Windows 与 Mac 应用。仅在使用 Ollama、LM Studio 或 Jan 时，AI 回答才留在本地。未经实测。',
    twitterDescription:
      'Perfect Memory AI 评测：Windows 和 Mac 上可搜索的屏幕与会议记忆。记录在本地，仅连接 Ollama、LM Studio 或 Jan 时 AI 才在本地。',
    audience:
      '想把屏幕和会议变成可搜索记录，并需要弄清哪些部分在本地运行、哪些会进入云端、哪些内容来源并未确认的读者。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Perfect Memory AI 评测',
    targetKeywords: [
      'perfect memory ai 评测',
      'perfectmemory.ai',
      '本地屏幕录制 搜索',
      'ai 会议转写 windows mac',
      'rewind 替代 windows',
      'ollama 屏幕记忆 应用',
      'mcp 屏幕历史 claude',
    ],
    current_models_mentioned: ['ChatGPT', 'Ollama', 'LM Studio', 'Jan'],
    current_hardware_mentioned: ['Windows 10', 'Windows 11', 'macOS 14', 'Apple silicon'],
    leadAnswerBlock:
      '**Perfect Memory AI（Mac 版 0.17.25，2026 年 10 月 17 日发布）是一款 Windows 和 Mac 应用，在你自己的电脑上记录屏幕并转写会议，让你可以搜索这些内容。** 它是混合型而非完全本地的工具：回答你问题的 AI 可能在云端运行。',
    quickAnswerTop: {
      zh: {
        question: 'Perfect Memory AI 是本地 LLM 应用吗？',
        answer:
          '取决于你的设置。录制、文字识别和语音识别都在你的电脑上运行，但内置 AI 会把你的问题经厂商服务器发送给 AI 提供商；如果让助手指向 Ollama、LM Studio 或 Jan 中的模型，回答就留在本地。',
        bullets: [
          '屏幕历史会被读取为文本，可按关键词或语义搜索。',
          '可转写 Zoom、Google Meet、Teams、Slack、Webex 和 WhatsApp 中的会议。',
          '助手可回答关于你看到、说过或听到的内容的问题。',
          '可选的 MCP 连接让 Claude、ChatGPT 或 Cursor 查询你的历史记录。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Perfect Memory AI 是什么？', anchor: 'what-is-perfect-memory' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '上手步骤', anchor: 'getting-started' },
      { label: '来源已证实的功能', anchor: 'key-features' },
      { label: '本地还是云端：数据流向与隐私', anchor: 'privacy' },
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
            text: 'Perfect Memory AI 是一款闭源的 Windows 和 Mac 应用，在你的电脑上记录屏幕和会议，并让 AI 助手回答关于这些内容的问题。',
          },
          {
            type: 'plain-terms',
            text: '它为你看过的屏幕内容和会议中说过的话保存一本可搜索的日记；读取这本日记的 AI 是在你的机器上运行还是在云端运行，由你选择。',
          },
        ],
        items: [
          '维护情况：Mac 版 0.17.25 于 2026 年 10 月 17 日发布，9 月以来 0.17.x 版本更新频繁，因此不适用停止维护警告。',
          '费用：有免费方案、按年计费的 Pro（每月 $15），以及面向自带 AI 用户的一次性买断 Pro Offline。',
          '平台：Windows 10 和 11，以及 Apple Silicon 上的 macOS 14 或更高版本。',
          '厂商：Perfect Memory llc，未公开源代码。',
          '集成：面向 Claude、ChatGPT 等助手的可选 MCP 连接，默认关闭。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于厂商网站、隐私政策和发布源，核查日期为 2026 年 10 月 30 日。PromptQuorum 没有安装或测量该应用，因此录制质量、搜索准确度和本地模型的效果均未评估。',
          },
        ],
      },
      overview: {
        id: 'what-is-perfect-memory',
        title: 'Perfect Memory AI 是什么？',
        content: [
          '**Perfect Memory AI 在 Windows 电脑或 Mac 上记录你的屏幕和会议，读取屏幕上的文字，并让你搜索和查询这份历史记录。** 厂商 Perfect Memory llc 称它可以用来询问“你看过、说过或听到的一切”。它提供免费方案、按年计费的 Pro 方案和一次性买断的 Pro Offline 方案。',
          '下载页将 Mac 版标注为新版本。Windows 版有独立下载，并有 Microsoft Store 页面。厂商还在博客上发布了与 Microsoft Recall、Screenpipe、Rewind 和 Granola 的对比页面；这些是厂商自己的看法，此处未作评估。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Perfect Memory AI 在 Windows 和 Mac 上双击即可安装，未列出 Linux、移动端或网页版。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          { '选项': 'Windows', '获取方式': '[Microsoft Store 页面](https://apps.microsoft.com/detail/xp9m33wlfs472f)或 [MSI 安装包](https://www.perfectmemory.ai/download/windows)；Windows 10 和 11' },
          { '选项': 'macOS', '获取方式': '[DMG 下载](https://www.perfectmemory.ai/download)；macOS 14 或更高，Apple Silicon（M1 及更新）' },
          { '选项': '方案', '获取方式': 'Free $0；Pro 按年计费，每月 $15；Pro Offline $79 一次性，需自带 AI' },
          { '选项': '官方网站', '获取方式': '[perfectmemory.ai](https://www.perfectmemory.ai)' },
          { '选项': '隐私政策', '获取方式': '[perfectmemory.ai/privacy](https://www.perfectmemory.ai/privacy)' },
          { '选项': '源代码', '获取方式': '未公开' },
        ],
        note: '核查的版本：Mac 0.17.25，于 2026 年 10 月 17 日发布在厂商的发布源上。Windows 安装包位于名为 4.0.187 的文件夹，但网站没有说明这是否就是应用版本号，因此不给出 Windows 版发布日期。价格为厂商给出的美元金额，未作换算；免费方案每月包含 10 次 AI 协助和 30 次 AI 会议。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**这些步骤依据厂商的安装指南，PromptQuorum 未实际执行。**',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '在 Windows 上运行安装程序；在 Mac 上打开磁盘映像，把 Perfect Memory 拖到“应用程序”。',
          },
          {
            title: '授予权限',
            whyItMatters: '在 Mac 上先允许屏幕录制，因为没有它就不会捕获任何内容，然后允许麦克风以转写会议。',
          },
          {
            title: '选择 AI',
            whyItMatters: '使用内置助手；如果希望回答留在你的电脑上，就连接 Ollama、LM Studio 或 Jan。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: [
          '**以下每一项都来自厂商网站或博客，均未经过独立测试。**',
        ],
        items: [
          '**屏幕历史搜索。** 屏幕上的文字会被读取并建立索引，你可以按关键词或语义搜索，并按应用、网站和日期筛选。',
          '**会议转写。** 应用能识别 Zoom、Google Meet、Teams、Slack、Webex 和 WhatsApp 中的会议，转写你说的和听到的内容，无需机器人加入通话。',
          '**AI 助手。** 可询问你看到、说过或听到的内容；付费方案还提供站会更新、一对一面谈议程建议、每日简报和研究摘要。',
          '**MCP 工具。** 已连接的助手可以调用 search_history、get_moment、get_meeting 和 get_timeline 来读取你的历史记录。',
        ],
        note: '免费方案包含不限次数的搜索、录制、转写和 MCP 调用；限额只针对 AI 协助和 AI 会议。',
      },
      privacy: {
        id: 'privacy',
        title: '本地还是云端：数据流向与隐私',
        content: [
          '**截图、从中读取的文字和会议转写都在你自己的电脑上生成并保存，厂商称不会上传录制内容。** 隐私政策最近更新于 2026 年 6 月 30 日，其中说明默认情况下不会有截图、视频或音频离开设备。使用情况分析和崩溃报告可以关闭；政策列出 Vercel、AppCenter、Sentry、Fathom 和 Segment 为分析合作方。',
          '**AI 回答是混合的部分。** 如果通过 Ollama、LM Studio 或 Jan 把助手指向你电脑上的模型，厂商称问题会在本地得到回答。使用内置 AI 时，你的问题和它所需的那部分历史记录会经厂商服务器发送给 AI 提供商，政策指明为 OpenAI，且不含你的账户信息；这一处理发生在何处并未说明。',
          '与 Claude 和 ChatGPT 的连接在你开启之前是关闭的。助手发出请求时，云端中继会把请求转给你的电脑并把结果送回，两者都不保存；内容随后按该助手提供商自己的条款到达其手中。你可以选择它能读取屏幕历史、会议，还是两者。',
          '据厂商所述，在 Mac 上，每张截图都用 AES-256 加密，密钥保存在钥匙串中；在 Windows 上，包含识别文字的数据库会自动加密，截图可在设置中加密。搜索索引不由应用加密，因此依赖 FileVault 或 BitLocker。在隐私或无痕浏览窗口中录制会暂停，可以排除密码管理器等应用，也可以删除最近 15 分钟或全部内容。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是厂商的声明，不是审计结果，也没有公开源代码。PromptQuorum 没有检查该应用的网络流量。录制屏幕和会议可能捕获他人的信息，请核对适用于你情形的同意规则；这不是法律意见。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**容易忘记自己看过什么的人**，想用一个搜索框查遍整个屏幕历史。',
          '**会议很多的人**，想要不带机器人入会的转写。',
          '**Ollama、LM Studio 或 Jan 用户**，想让本地模型回答关于自己历史记录的问题。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**本地模型的效果。** PromptQuorum 没有让任何本地模型与该应用搭配运行，因此回答质量、速度和所需硬件均不明；网站除操作系统外没有给出系统要求。',
          '**安全与审计。** 既没有公开源代码，也没有独立审计，隐私政策没有写明公司注册所在国，也没有说明 OpenAI 的处理发生在哪里。',
          '**Windows 版本与日期。** 网站没有给出 Windows 版本号或发布日期，Mac 版的版本号仍是早期的 0.x，且近期有预发布构建。',
          '**Pro Offline 的范围。** 价格页说明它需要自带 AI 且为一次性付款，但没有列出还包含什么。',
          '**录制质量与开销。** 文字识别准确度、会议转写质量、持续录制的磁盘占用和电池影响均未测试。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格／许可', '主要区别'],
        rows: [
          { '应用': '[Anarlog](/zh/power-local-llm/anarlog-review)', '平台': 'macOS、Windows、Linux', '价格／许可': '免费方案／MIT', '主要区别': '无需机器人、在设备上录音的开源会议笔记应用；可选本地或云端 AI' },
          { '应用': '[Meetily](/zh/power-local-llm/meetily-review)', '平台': 'Windows、macOS', '价格／许可': '免费社区版／MIT', '主要区别': '自托管的会议记录工具；本地转写，通过 Ollama 生成摘要' },
        ],
        note: '目前还没有其他屏幕历史类应用有 PromptQuorum 的评测，所以这里列出的是已评测的最接近的会议笔记工具；请在各应用自己的页面上确认当前价格、许可和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '可以在不向 OpenAI 发送数据的情况下使用吗？',
            a: '据厂商所述可以：让助手指向在你自己的电脑上运行的模型。这需要能运行该模型的硬件，PromptQuorum 没有测试其效果。',
          },
          {
            q: '79 美元的 Pro Offline 买到什么？',
            a: '价格页将其描述为一次性付款，“自带 AI，一切不限量”，也就是模型由你自己提供。页面没有说明包含多长时间的更新。',
          },
          {
            q: '可以删除已录制的内容吗？',
            a: '厂商表示，可以几次点击删除最近 15 分钟或全部内容，也可以把应用排除在录制之外。删除时是否同时清除搜索索引并未说明。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Perfect Memory AI 是一款在 Windows 和 Mac 上持续更新、能让屏幕与会议变成可搜索记录的应用，有免费方案可试用，也确实能接入本地 AI。另一方面，默认的 AI 路径会经厂商服务器到达 OpenAI，代码闭源，没有公布 Windows 版本，关于隐私或准确度的说法在这里都无法核实。它适合愿意连接自己的本地模型并先试用免费方案的人；处理机密材料的人在开始录制前，应先阅读隐私政策和加密说明。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Perfect Memory AI 官网](https://www.perfectmemory.ai) — 功能、MCP 页面和博客，核查于 2026 年 10 月 30 日。',
          '[价格](https://www.perfectmemory.ai/pricing)和 [Pro Offline 价格](https://www.perfectmemory.ai/pricing/pro-offline) — 方案与一次性付款，核查于 2026 年 10 月 30 日。',
          '[Private by design](https://www.perfectmemory.ai/private-by-design) — 本地 AI、加密和录制控制，核查于 2026 年 10 月 30 日。',
          '[隐私政策](https://www.perfectmemory.ai/privacy) — 数据收集和第三方，最近更新于 2026 年 6 月 30 日。',
          '[下载页](https://www.perfectmemory.ai/download)和[安装指南](https://www.perfectmemory.ai/support/getting-started/how-to-install) — 平台与要求，核查于 2026 年 10 月 30 日。',
          '[Mac 发布源](https://github.com/DariusKocar/PerfectMemoryMac-releases/releases) — 0.17.25 版本及发布日期，读取于 2026 年 10 月 30 日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Anarlog 评测](/zh/power-local-llm/anarlog-review) — 可选本地或云端 AI 的开源会议笔记应用。',
          '[Meetily 评测](/zh/power-local-llm/meetily-review) — 支持本地摘要的自托管会议记录工具。',
          '[语音与音频工具对比](/zh/power-local-llm/local-llm-voice-audio-compared) — 转写工具的分类对比。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/perfect-memory-review-hero-ko.webp',
    title: 'Perfect Memory AI 리뷰: 검색 가능한 화면·회의 기억 앱',
    seoTitle: 'Perfect Memory AI 리뷰: 화면·회의 검색',
    intro:
      'Perfect Memory AI는 [Perfect Memory llc](https://www.perfectmemory.ai)가 만든 Windows·Mac 앱으로, 화면에 나타난 내용을 기록하고 회의를 내 컴퓨터에서 전사하여 나중에 검색하고 질문할 수 있게 해 줍니다. Ollama, LM Studio 또는 Jan을 연결할 때만 AI 답변이 기기 안에 머무르며, 그렇지 않으면 제작사의 서버를 거칩니다. 이 리뷰는 제작사의 웹사이트, 개인정보 처리방침, 릴리스 피드를 2026년 10월 30일에 확인한 내용에 근거하며, PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription:
      'Perfect Memory AI 리뷰: 화면과 회의를 로컬에서 기록하는 Windows·Mac 앱입니다. Ollama, LM Studio, Jan 사용 시에만 AI가 로컬입니다.',
    twitterDescription:
      'Perfect Memory AI 리뷰: Windows·Mac에서 화면과 회의를 검색하는 기억 앱. 기록은 로컬이며 AI는 Ollama, LM Studio, Jan 연결 시에만 로컬입니다.',
    audience:
      '화면과 회의를 검색 가능한 기록으로 남기고 싶으며, 어떤 부분이 로컬에서 실행되고 어떤 부분이 클라우드로 가는지, 출처가 무엇을 확인하지 않았는지 알고 싶은 분들을 위한 글입니다.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Perfect Memory AI 리뷰',
    targetKeywords: [
      'perfect memory ai 리뷰',
      'perfectmemory.ai',
      '로컬 화면 녹화 검색',
      'ai 회의 전사 windows mac',
      'rewind 대안 windows',
      'ollama 화면 기억 앱',
      'mcp 화면 기록 claude',
    ],
    current_models_mentioned: ['ChatGPT', 'Ollama', 'LM Studio', 'Jan'],
    current_hardware_mentioned: ['Windows 10', 'Windows 11', 'macOS 14', 'Apple silicon'],
    leadAnswerBlock:
      '**Perfect Memory AI(Mac 버전 0.17.25, 2026년 10월 17일 공개)는 화면을 기록하고 회의를 내 컴퓨터에서 전사하여 검색할 수 있게 해 주는 Windows·Mac 앱입니다.** 완전한 로컬 도구가 아니라 하이브리드 방식이며, 질문에 답하는 AI는 클라우드에서 실행될 수 있습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Perfect Memory AI는 로컬 LLM 앱인가요?',
        answer:
          '설정하기에 달려 있습니다. 녹화, 텍스트 인식, 음성 인식은 내 컴퓨터에서 실행되지만, 내장 AI는 질문을 제작사의 서버를 거쳐 AI 제공업체로 보냅니다. 어시스턴트가 Ollama, LM Studio 또는 Jan의 모델을 가리키도록 하면 답변이 로컬에 머뭅니다.',
        bullets: [
          '화면 기록은 텍스트로 읽혀 키워드나 의미로 검색할 수 있습니다.',
          'Zoom, Google Meet, Teams, Slack, Webex, WhatsApp 회의를 전사합니다.',
          '보고, 말하고, 들은 내용에 대한 질문에 어시스턴트가 답합니다.',
          '선택 사항인 MCP 연결로 Claude, ChatGPT, Cursor가 내 기록을 조회할 수 있습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Perfect Memory AI란?', anchor: 'what-is-perfect-memory' },
      { label: '받는 방법', anchor: 'get-it' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '출처로 확인된 기능', anchor: 'key-features' },
      { label: '로컬과 클라우드: 데이터 흐름과 개인정보', anchor: 'privacy' },
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
            text: 'Perfect Memory AI는 컴퓨터에서 화면과 회의를 기록하고 AI 어시스턴트가 그에 대한 질문에 답하는, 소스가 공개되지 않은 Windows·Mac 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '화면에서 본 것과 회의에서 말한 것을 검색 가능한 일기처럼 남깁니다. 그 일기를 읽는 AI를 내 기기에서 돌릴지 클라우드에서 돌릴지는 사용자가 고릅니다.',
          },
        ],
        items: [
          '유지 관리: Mac 빌드 0.17.25는 2026년 10월 17일에 공개되었고 9월 이후 0.17.x 빌드가 자주 나왔으므로, 방치된 프로젝트 경고는 해당하지 않습니다.',
          '비용: 무료 요금제, 연 단위 결제 시 월 $15인 Pro, 자체 AI를 가져오는 사용자를 위한 1회 결제 Pro Offline이 있습니다.',
          '플랫폼: Windows 10·11, 그리고 Apple Silicon의 macOS 14 이상입니다.',
          '제작사: Perfect Memory llc이며, 소스 코드는 공개되어 있지 않습니다.',
          '연동: Claude, ChatGPT 등을 위한 선택적 MCP 연결이 있으며 기본값은 꺼짐입니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 제작사의 웹사이트, 개인정보 처리방침, 릴리스 피드를 2026년 10월 30일에 확인한 내용에 근거합니다. PromptQuorum은 앱을 설치하거나 측정하지 않았으므로 기록 품질, 검색 정확도, 로컬 모델 결과는 평가하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-perfect-memory',
        title: 'Perfect Memory AI란?',
        content: [
          '**Perfect Memory AI는 Windows PC 또는 Mac에서 화면과 회의를 기록하고, 화면의 텍스트를 읽어 그 기록을 검색하고 질문할 수 있게 해 줍니다.** 제작사인 Perfect Memory llc는 “보고, 말하고, 들은 모든 것”에 대해 물어볼 수 있는 도구라고 소개합니다. 무료 요금제, 연간 Pro 요금제, 1회 결제 Pro Offline 요금제로 제공됩니다.',
          '다운로드 페이지에서는 Mac 앱이 신규로 표시됩니다. Windows 앱은 별도 다운로드와 Microsoft Store 페이지가 있습니다. 제작사는 블로그에 Microsoft Recall, Screenpipe, Rewind, Granola와의 비교 페이지도 게시하는데, 이는 제작사 자신의 견해이며 여기서는 평가하지 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '받는 방법',
        content: [
          '**Perfect Memory AI는 Windows와 Mac에서 더블클릭으로 설치하며, Linux, 모바일, 웹 버전은 표시되어 있지 않습니다.**',
        ],
        columns: ['항목', '받는 방법'],
        rows: [
          { '항목': 'Windows', '받는 방법': '[Microsoft Store 페이지](https://apps.microsoft.com/detail/xp9m33wlfs472f) 또는 [MSI 설치 파일](https://www.perfectmemory.ai/download/windows), Windows 10·11' },
          { '항목': 'macOS', '받는 방법': '[DMG 다운로드](https://www.perfectmemory.ai/download), macOS 14 이상, Apple Silicon(M1 이상)' },
          { '항목': '요금제', '받는 방법': 'Free $0, Pro 연 결제 시 월 $15, Pro Offline $79 1회 결제(자체 AI 필요)' },
          { '항목': '웹사이트', '받는 방법': '[perfectmemory.ai](https://www.perfectmemory.ai)' },
          { '항목': '개인정보 처리방침', '받는 방법': '[perfectmemory.ai/privacy](https://www.perfectmemory.ai/privacy)' },
          { '항목': '소스 코드', '받는 방법': '공개되지 않음' },
        ],
        note: '확인한 버전: Mac 0.17.25로, 제작사의 릴리스 피드에 2026년 10월 17일에 공개되었습니다. Windows 설치 파일은 4.0.187이라는 폴더에서 제공되지만 이것이 앱 버전인지는 사이트에 나와 있지 않으므로 Windows 공개일은 적지 않았습니다. 가격은 제작사가 표시한 미국 달러 금액이며 환산하지 않았습니다. 무료 요금제에는 월 AI 어시스트 10회와 AI 회의 30회가 포함됩니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**이 단계는 제작사의 설치 가이드를 따른 것이며, PromptQuorum이 직접 실행해 보지는 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '앱 설치',
            whyItMatters: 'Windows에서는 설치 프로그램을 실행하고, Mac에서는 디스크 이미지를 열어 Perfect Memory를 응용 프로그램 폴더로 끌어다 놓습니다.',
          },
          {
            title: '권한 허용',
            whyItMatters: 'Mac에서는 화면 녹화를 먼저 허용해야 하며, 허용하지 않으면 아무것도 캡처되지 않습니다. 그다음 회의 전사를 위해 마이크를 허용합니다.',
          },
          {
            title: '사용할 AI 선택',
            whyItMatters: '내장 어시스턴트를 쓰거나, 답변을 내 컴퓨터에 두고 싶다면 Ollama, LM Studio 또는 Jan을 연결합니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 제작사의 웹사이트나 블로그에서 가져온 것이며, 독립적으로 테스트하지 않았습니다.**',
        ],
        items: [
          '**화면 기록 검색.** 화면의 텍스트를 읽어 색인하므로 키워드나 의미로 검색하고 앱, 웹사이트, 날짜로 걸러낼 수 있습니다.',
          '**회의 전사.** Zoom, Google Meet, Teams, Slack, Webex, WhatsApp의 회의를 인식하여 내가 말하고 들은 내용을 전사하며, 봇이 통화에 참여하지 않습니다.',
          '**AI 어시스턴트.** 보고, 말하고, 들은 내용을 물어볼 수 있으며, 유료 요금제에는 스탠드업 업데이트, 일대일 면담 안건 제안, 데일리 브리프, 조사 요약이 추가됩니다.',
          '**MCP 도구.** 연결된 어시스턴트는 search_history, get_moment, get_meeting, get_timeline을 호출하여 기록을 읽을 수 있습니다.',
        ],
        note: '무료 요금제에도 검색, 녹화, 전사, MCP 호출은 무제한으로 포함되며, 한도는 AI 어시스트와 AI 회의에 적용됩니다.',
      },
      privacy: {
        id: 'privacy',
        title: '로컬과 클라우드: 데이터 흐름과 개인정보',
        content: [
          '**스크린샷, 그로부터 읽은 텍스트, 회의 전사본은 내 컴퓨터에서 만들어져 저장되며, 제작사는 녹화본을 업로드하지 않는다고 밝힙니다.** 2026년 6월 30일에 갱신된 개인정보 처리방침은 기본적으로 스크린샷, 영상, 음성이 기기 밖으로 나가지 않는다고 설명합니다. 사용 분석과 오류 보고는 끌 수 있으며, 방침은 분석 파트너로 Vercel, AppCenter, Sentry, Fathom, Segment를 들고 있습니다.',
          '**AI 답변이 하이브리드인 부분입니다.** Ollama, LM Studio 또는 Jan을 통해 어시스턴트가 내 컴퓨터의 모델을 가리키게 하면 질문이 그곳에서 처리된다고 제작사는 밝힙니다. 내장 AI를 쓰면 질문과 필요한 기록 일부가 제작사의 서버를 거쳐 AI 제공업체로 전달되며, 방침은 이를 OpenAI로 명시하고 계정 정보는 전달되지 않는다고 합니다. 이 처리가 어디에서 이루어지는지는 나와 있지 않습니다.',
          'Claude 및 ChatGPT 연결은 켜기 전까지 꺼져 있습니다. 어시스턴트가 요청하면 클라우드 릴레이가 요청을 내 컴퓨터에 전달하고 결과를 되돌려 보내며 둘 다 저장하지 않습니다. 이후 내용은 해당 어시스턴트 제공업체의 약관에 따라 그쪽으로 전달됩니다. 화면 기록, 회의, 또는 둘 다 중 무엇을 읽게 할지는 사용자가 선택합니다.',
          '제작사에 따르면 Mac에서는 모든 스크린샷이 AES-256으로 암호화되고 키는 키체인에 보관됩니다. Windows에서는 인식된 텍스트를 포함한 데이터베이스가 자동으로 암호화되며 스크린샷은 설정에서 암호화할 수 있습니다. 검색 색인은 앱이 암호화하지 않으므로 FileVault나 BitLocker에 의존합니다. 비공개·시크릿 브라우저 창에서는 녹화가 일시 중지되고, 비밀번호 관리자 같은 앱은 제외할 수 있으며, 최근 15분 또는 전체를 삭제할 수 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 제작사의 표명이지 감사 결과가 아니며 소스 코드도 공개되어 있지 않습니다. PromptQuorum은 앱의 네트워크 트래픽을 검사하지 않았습니다. 화면과 회의를 녹화하면 다른 사람의 정보가 담길 수 있으므로 본인 상황에 맞는 동의 규정을 확인하십시오. 이는 법률 자문이 아닙니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**본 내용을 놓치기 쉬운 분**으로, 화면 기록 전체를 하나의 검색창으로 찾고 싶은 경우.',
          '**회의가 많은 분**으로, 통화에 봇 없이 전사본을 원하는 경우.',
          '**Ollama, LM Studio, Jan 사용자**로, 로컬 모델이 자신의 기록에 대한 질문에 답하게 하고 싶은 경우.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        items: [
          '**로컬 모델 결과.** PromptQuorum은 로컬 모델을 이 앱과 함께 실행해 보지 않았으므로 답변 품질, 속도, 필요한 하드웨어는 알 수 없으며, 사이트에는 운영체제 외의 시스템 요구 사항이 없습니다.',
          '**보안과 감사.** 소스 코드도 독립 감사도 공개되어 있지 않고, 개인정보 처리방침에는 회사의 설립 국가도 OpenAI 처리 위치도 나와 있지 않습니다.',
          '**Windows 버전과 날짜.** 사이트에는 Windows 버전 번호도 공개일도 없으며, Mac 앱은 초기 단계의 0.x 버전 번호를 쓰고 최근 사전 공개 빌드도 있습니다.',
          '**Pro Offline의 범위.** 요금 페이지에는 자체 AI가 필요하고 1회 결제라고만 적혀 있을 뿐 그 밖에 무엇이 포함되는지는 나와 있지 않습니다.',
          '**기록 품질과 부담.** 텍스트 인식 정확도, 회의 전사 품질, 상시 녹화의 디스크 사용량과 배터리 영향은 테스트하지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격／라이선스', '주요 차이점'],
        rows: [
          { '앱': '[Anarlog](/ko/power-local-llm/anarlog-review)', '플랫폼': 'macOS, Windows, Linux', '가격／라이선스': '무료 요금제／MIT', '주요 차이점': '봇 없이 기기에서 녹음하는 오픈소스 회의 노트 앱으로, 로컬 또는 클라우드 AI 선택 가능' },
          { '앱': '[Meetily](/ko/power-local-llm/meetily-review)', '플랫폼': 'Windows, macOS', '가격／라이선스': '무료 Community Edition／MIT', '주요 차이점': '자체 호스팅 회의록 도구로, 전사는 로컬, 요약은 Ollama 사용' },
        ],
        note: '화면 기록 앱 중 PromptQuorum 리뷰가 있는 다른 앱은 아직 없으므로, 여기에는 리뷰가 있는 가장 가까운 회의 노트 도구를 실었습니다. 각 앱의 최신 가격, 라이선스, 플랫폼은 해당 앱의 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'OpenAI에 데이터를 보내지 않고 쓸 수 있나요?',
            a: '제작사에 따르면 가능합니다. 어시스턴트가 내 컴퓨터에서 실행되는 모델을 가리키게 합니다. 그 모델을 돌릴 수 있는 하드웨어가 필요하며, PromptQuorum은 그 결과를 테스트하지 않았습니다.',
          },
          {
            q: '$79 Pro Offline으로 무엇을 얻나요?',
            a: '요금 페이지는 이를 “자체 AI로 모든 것을 무제한”으로 쓰는 1회 결제라고 설명하며, 모델은 사용자가 마련해야 합니다. 업데이트가 얼마 동안 포함되는지는 나와 있지 않습니다.',
          },
          {
            q: '기록된 내용을 삭제할 수 있나요?',
            a: '제작사에 따르면 몇 번의 클릭으로 최근 15분 또는 전체를 삭제할 수 있고, 앱을 녹화 대상에서 제외할 수 있습니다. 검색 색인도 함께 지워지는지는 나와 있지 않습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Perfect Memory AI는 Windows와 Mac에서 화면과 회의를 검색 가능한 기록으로 남길 수 있는, 활발히 업데이트되는 앱입니다. 써 볼 수 있는 무료 요금제가 있고, 로컬 AI로 연결하는 현실적인 방법도 있습니다. 반면 기본 AI 경로는 제작사의 서버를 거쳐 OpenAI로 가고, 코드는 비공개이며, Windows 버전이 공개되어 있지 않고, 개인정보나 정확도에 관한 주장은 여기서 확인하지 못했습니다. 자신의 로컬 모델을 연결하고 먼저 무료 요금제를 써 볼 수 있는 분께 적합합니다. 기밀 자료를 다루는 분은 녹화하기 전에 개인정보 처리방침과 암호화 관련 설명을 읽으십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Perfect Memory AI 웹사이트](https://www.perfectmemory.ai) — 기능, MCP 페이지, 블로그. 2026년 10월 30일 확인.',
          '[요금](https://www.perfectmemory.ai/pricing) 및 [Pro Offline 요금](https://www.perfectmemory.ai/pricing/pro-offline) — 요금제와 1회 결제. 2026년 10월 30일 확인.',
          '[Private by design](https://www.perfectmemory.ai/private-by-design) — 로컬 AI, 암호화, 녹화 제어. 2026년 10월 30일 확인.',
          '[개인정보 처리방침](https://www.perfectmemory.ai/privacy) — 데이터 수집과 제3자. 2026년 6월 30일 갱신.',
          '[다운로드 페이지](https://www.perfectmemory.ai/download) 및 [설치 가이드](https://www.perfectmemory.ai/support/getting-started/how-to-install) — 플랫폼과 요구 사항. 2026년 10월 30일 확인.',
          '[Mac 릴리스 피드](https://github.com/DariusKocar/PerfectMemoryMac-releases/releases) — 버전 0.17.25와 공개일. 2026년 10월 30일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Anarlog 리뷰](/ko/power-local-llm/anarlog-review) — 로컬 또는 클라우드 AI를 고를 수 있는 오픈소스 회의 노트 앱.',
          '[Meetily 리뷰](/ko/power-local-llm/meetily-review) — 로컬 요약을 지원하는 자체 호스팅 회의록 도구.',
          '[음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 전사 도구의 카테고리 비교.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 목록.',
        ],
      },
    },
  },
}
