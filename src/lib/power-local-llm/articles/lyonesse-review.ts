// Lyonesse Review: Offline AI Transcription and Meeting Notes for iPhone and Mac
// Slug: lyonesse-review
// Companion to: whisper-notes-review, macwhisper-review, meetily-review, local-llm-voice-audio-compared
// Sources: the App Store listing (apps.apple.com/us/app/id6754086711, iTunes lookup API, per-storefront in-app prices), lyonesse.app, lyonesse.app/privacy.html
// (last updated 2026-10-09), lyonesse.app/terms.html (last updated 2025-10-28) and the maker's two measurement posts, all checked 2026-10-26 — no hands-on testing.
// In-app prices are per-storefront App Store prices (US $7.99 / $29.99 / $59.99, DE/ES/FR 8,99 / 34,99 / 69,99 EUR, JP JPY 1,300 / 5,000 / 10,000,
// KR KRW 12,000 / 49,000 / 99,000, BR R$ 49,90 / 199,90 / 399,90), never converted.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/lyonesse-review-hero-en.webp',
    title: 'Lyonesse Review: Offline AI Transcription and Meeting Notes for iPhone and Mac',
    seoTitle: 'Lyonesse Review: Offline AI Transcription for iPhone, Mac',
    intro:
      'Lyonesse is an iPhone, iPad and Mac app that transcribes recordings, summarises meetings and answers questions about your notes and documents, and says all of it runs on the device with no account. It is free to download with one recording included, then sold as a subscription or a one-time lifetime purchase. This review is based on the App Store listing and the maker\'s [website](https://lyonesse.app), privacy policy, terms and two measurement posts, checked on 26 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'Lyonesse review: iPhone, iPad and Mac app for offline AI transcription, meeting notes and document chat. Free first recording, lifetime option; untested.',
    twitterDescription:
      'Lyonesse review: offline transcription, meeting notes and document chat for iPhone, iPad and Mac. Pricing, privacy, requirements and what the sources leave unconfirmed.',
    audience:
      'iPhone and Mac users who want private transcription and meeting notes and need to know what the sources confirm, what the maker only claims and what it costs.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Lyonesse review',
    targetKeywords: [
      'lyonesse review',
      'lyonesse ai transcript and chat',
      'offline transcription app iphone',
      'private meeting notes app mac',
      'on-device ai transcription',
      'offline ai meeting notes',
      'chat with pdf offline iphone',
    ],
    current_models_mentioned: ['Apple Speech', 'NVIDIA Parakeet', 'Apple Intelligence'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Watch', 'iPhone 15 Pro'],
    leadAnswerBlock:
      '**Lyonesse (version 2.0.7, updated on 23 October 2026) is an iPhone, iPad and Mac app for offline transcription, meeting notes and chat with your own documents.** The maker says audio, transcripts and documents are processed on the device and that no account is needed; every statement here comes from the App Store listing and the maker\'s own pages.',
    quickAnswerTop: {
      en: {
        question: 'Does Lyonesse really work offline on iPhone and Mac?',
        answer:
          'Per the maker, yes: after the speech and AI models download once, recording, transcription, summaries and questions work in airplane mode. The privacy policy adds that audio never leaves the device, while anonymized usage and crash data are collected.',
        bullets: [
          'Live transcription with speaker labels in 15 languages, using Apple Speech or NVIDIA Parakeet.',
          'Summaries, key points and an Action Center that lists tasks, owners and due dates.',
          'Ask Lyonesse answers questions across notes, transcripts, PDFs and images, with citations.',
          'On the Mac it records microphone and system audio, so no meeting bot joins the call.',
        ],
        updatedDate: '2026-10-26',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Lyonesse?', anchor: 'what-is-lyonesse' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Lyonesse at a Glance', anchor: 'at-a-glance' },
      { label: 'Requirements', anchor: 'requirements' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'The Maker\'s Own Measurements', anchor: 'maker-measurements' },
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
            text: 'Lyonesse is a closed-source Apple-platform app that records or imports audio and documents, transcribes and summarises them, and answers questions about them without an account.',
          },
          {
            type: 'plain-terms',
            text: 'You record a lecture or meeting, or import a file, and get a transcript with speakers, a summary and a task list; you can then ask the app questions about everything you saved.',
          },
        ],
        items: [
          'Maintenance: version 2.0.7 was released on 23 October 2026 after eight releases since 27 August, so no stale-project warning applies.',
          'Cost: free with one recording; after that a monthly or yearly subscription or a one-time lifetime purchase.',
          'Requirements: iOS, iPadOS or macOS 26.0 or later; the on-device AI works best on recent Apple hardware.',
          'Maker: an independent developer, with no published source code; the App Store seller also sells [Castmates](/power-local-llm/castmates-review).',
          'Evidence: the speed and privacy figures are the maker\'s own measurements, not independent tests.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum has not installed, recorded with or benchmarked the app, so transcription and summary quality are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-lyonesse',
        title: 'What Is Lyonesse?',
        content: [
          '**Lyonesse is an Apple-platform app that records or imports audio, transcribes it, summarises it and lets you ask questions about your notes, PDFs, Office files and photos, all described as running on the device.** The App Store lists it as "Lyonesse: AI Transcript & Chat" in Productivity, from the seller Josip Markovic (copyright "Markovic Software, obrt za usluge"); the website, privacy policy and terms name no person or company. The listing first appeared on 31 October 2025, and version 2.0.1 on 3 September 2026 renamed the app from Inscribe to Lyonesse.',
          'The App Store title varies by storefront, for example "Lyonesse: KI Transkript & Chat" in Germany and "Lyonesse: AI文字起こし・チャット" in Japan; all refer to the same app.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Lyonesse is an App Store download for iPhone, iPad and Mac; no Android, Windows or web version is listed.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          { 'Option': 'iPhone and iPad', 'How to get it': '[Lyonesse on the App Store](https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711), free with in-app purchases' },
          { 'Option': 'Mac', 'How to get it': 'Same App Store entry, macOS 26.0 or later per the listing' },
          { 'Option': 'Apple Watch', 'How to get it': 'Recorder app, watchOS 11.0 or later; added in version 2.0.5' },
          { 'Option': 'Paid options', 'How to get it': 'Monthly $7.99, yearly $29.99 or lifetime $59.99 (US store)' },
          { 'Option': 'Website', 'How to get it': '[lyonesse.app](https://lyonesse.app)' },
          { 'Option': 'Privacy policy', 'How to get it': '[lyonesse.app/privacy](https://lyonesse.app/privacy.html)' },
          { 'Option': 'Terms', 'How to get it': '[lyonesse.app/terms](https://lyonesse.app/terms.html)' },
          { 'Option': 'Source code', 'How to get it': 'Not published' },
        ],
        note: 'Version reviewed: 2.0.7, released on 23 October 2026 per the App Store; the app is 68.9 MB before its model downloads. The free download includes one recording with all features. Prices are from the US storefront and vary by country. PromptQuorum did not install the Mac or Watch builds.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Lyonesse at a Glance',
        columns: ['Attribute', 'Lyonesse'],
        rows: [
          { 'Attribute': 'Platform', 'Lyonesse': 'iPhone, iPad, Mac; Apple Watch recorder' },
          { 'Attribute': 'Price', 'Lyonesse': 'Free first recording; subscription or lifetime' },
          { 'Attribute': 'License', 'Lyonesse': 'Proprietary, closed source' },
          { 'Attribute': 'Runs', 'Lyonesse': 'On the device; models download once' },
          { 'Attribute': 'Languages', 'Lyonesse': '15 for transcription and summaries' },
          { 'Attribute': 'Real-time transcription', 'Lyonesse': 'Yes; live transcription and captions' },
          { 'Attribute': 'Speaker labels', 'Lyonesse': 'Yes' },
          { 'Attribute': 'Usable on CPU only', 'Lyonesse': 'Not stated; Apple hardware only' },
          { 'Attribute': 'Local API server', 'Lyonesse': 'Not stated' },
        ],
        note: 'Attributes follow the speech-to-text comparison used in the Local LLM Software Directory. A missing statement on the site means unknown, not unsupported.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**The App Store lists iOS, iPadOS and macOS 26.0 as the minimum, and the maker says the on-device AI works best on recent Apple hardware.**',
        ],
        columns: ['Item', 'What the sources say'],
        rows: [
          { 'Item': 'Operating system', 'What the sources say': 'iOS, iPadOS, macOS and visionOS 26.0 or later; watchOS 11.0 for the Watch recorder (App Store)' },
          { 'Item': 'Best hardware', 'What the sources say': 'iPhone 15 Pro or later, iPad with an M-series chip, Mac with Apple silicon (maker\'s site)' },
          { 'Item': 'AI engines', 'What the sources say': 'Apple Speech or NVIDIA Parakeet for transcription; Apple Intelligence or a downloadable local model for summaries and chat' },
          { 'Item': 'Model download', 'What the sources say': 'Needed once, over a network; the maker\'s benchmark post lists Parakeet TDT v3 at about 467 MB' },
          { 'Item': 'Memory', 'What the sources say': 'No RAM figure is stated anywhere' },
        ],
        note: 'The App Store entry decides whether the app installs; the maker\'s site lists no operating-system version.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**The steps follow the maker\'s own description; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Install and download the models',
            whyItMatters: 'Install Lyonesse from the App Store and let it download its speech and AI models once.',
          },
          {
            title: 'Record or import',
            whyItMatters: 'Record on the iPhone, Mac or Apple Watch, or import audio, video, PDFs, Word, Excel and PowerPoint files and photos.',
          },
          {
            title: 'Review the notes',
            whyItMatters: 'Read the transcript with speaker labels, the summary, the key points and the tasks in the Action Center.',
          },
          {
            title: 'Ask and export',
            whyItMatters: 'Ask questions with Ask Lyonesse, then export notes or send action items to Apple Reminders.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the App Store description, its version history or the maker\'s website; none has been independently tested.**',
        ],
        items: [
          '**Transcription.** Live transcription with speaker labels in 15 languages; version 2.0.4 added live translated captions, custom vocabulary and a clean verbatim view.',
          '**Summaries and tasks.** AI summaries, key points and decisions, plus an Action Center that extracts tasks, owners and due dates.',
          '**Ask Lyonesse and document chat.** Questions across notes, transcripts, PDFs, Word, Excel, PowerPoint and images, with citations and on-device OCR; Projects group recordings and documents.',
          '**Meeting assistant.** Calendar linking, live captions, name-mention alerts, AI-drafted minutes and action items sent to Apple Reminders; on the Mac it records the microphone and system audio, so no bot joins the call.',
          '**Apple ecosystem.** A Watch recorder (version 2.0.5), widgets, Siri and Shortcuts support (version 2.0.1) and optional iCloud sync.',
        ],
        note: 'Version 2.0.6 reorganised the app into Notes, Tasks and Folders tabs plus Search, with meetings now inside Notes.',
      },
      makerMeasurements: {
        id: 'maker-measurements',
        title: 'The Maker\'s Own Measurements',
        content: [
          '**Lyonesse links two measurement posts from its home page; both were run by the maker and neither has been reproduced by PromptQuorum.**',
          'In the speech benchmark, published on 15 July 2026, the maker compared eight engines on the English LibriSpeech corpus on one Apple M2 Pro. It reports word error rates on clean and noisier speech of 2.12% and 4.56% for Apple SpeechAnalyzer and 2.51% and 4.28% for Parakeet TDT v3. It also reports that version 1.8.9 dropped Whisper and that the automatic mode prefers Apple SpeechAnalyzer where a language is supported. The post states that it covers English only, read audiobook speech rather than meetings, and one machine.',
          'In the upload measurement, the maker played a 10-minute meeting clip on one Mac and logged network bytes per process. It reports that Lyonesse 2.0.4 sent 0.02 MB while recording, against 115.7 MB for Notion AI Meeting Notes 7.39.0. The post calls itself a vendor self-test of one network on one day, with two of five planned apps, bytes only and no security audit, and notes that Lyonesse also downloaded about 18 MB of speaker-detection models once and synced about 0.4 MB of note text through iCloud.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**The privacy policy, last updated on 9 October 2026, says audio recordings never leave the device and that transcription, summaries and document analysis run on it, with no data sent to external servers for processing.** No account is needed, and the policy states that Lyonesse integrates no third-party analytics, advertising or tracking services and does not collect recordings, transcripts, documents, names, emails, location or contacts.',
          'Some data does move. The policy describes anonymized usage statistics (app opens, feature use, device type, system and app version) and crash reports without naming the tooling or saying how they are sent; the App Store privacy labels list device ID, product interaction and crash data as collected and not linked to you. Transcripts and summaries sync between your own devices through iCloud, and device backups include app data. The maker says it runs no sync servers and cannot see iCloud data. Apple Intelligence, the App Store, iCloud and backups fall under Apple\'s own policies.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the developer\'s declarations, not audit results, and the source code is not published. PromptQuorum has not inspected the app\'s network traffic. The policy and terms name no legal entity or postal address; the App Store copyright line reads "Markovic Software, obrt za usluge" and the terms apply Croatian law.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Students and interviewers** who record lectures or conversations and want a transcript, summary and searchable library without an account.',
          '**Mac users in many calls** who want notes without a bot joining the meeting.',
          '**Buyers who dislike subscriptions** and want a lifetime-purchase option after trying the free recording.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Accuracy in practice.** PromptQuorum did not record or transcribe anything, so transcript quality, speaker-label accuracy, summary quality and coverage of all 15 languages are not assessed.',
          '**Sync default.** The privacy policy says iCloud sync is on by default, while the App Store description says optional iCloud sync is off by default.',
          '**"Nothing leaves your device."** The site says nothing is uploaded, while the policy and App Store labels describe anonymized analytics and crash data; where those go is not stated.',
          '**Hardware requirement.** The terms, last updated on 28 October 2025, say the app requires Apple Intelligence-capable hardware, while the site describes a downloadable local model as an alternative.',
          '**Track record.** The App Store showed only a handful of ratings when checked, and the app carried the name Inscribe until 3 September 2026.',
          '**Regulated use.** Suitability for medical, legal or other regulated recording was not assessed.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[Whisper Notes](/power-local-llm/whisper-notes-review)', 'Platforms': 'iPhone, iPad, Mac', 'Price / license': 'One-time / closed source', 'Key difference': 'Offline transcription with speaker labels, but no meeting assistant or document chat; text appears after you stop recording' },
          { 'App': '[MacWhisper](/power-local-llm/macwhisper-review)', 'Platforms': 'macOS', 'Price / license': 'Freemium / proprietary', 'Key difference': 'One-time-purchase Mac app for local Whisper and Parakeet transcription; no iPhone version' },
          { 'App': '[Meetily](/power-local-llm/meetily-review)', 'Platforms': 'macOS, Windows', 'Price / license': 'Freemium / MIT', 'Key difference': 'Open-source meeting notes with local transcription and Ollama summaries; runs on Windows too' },
        ],
        note: 'Confirm each app\'s current price, license and platforms on its own listing before choosing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What does Lyonesse cost outside the United States?',
            a: 'On the App Store storefronts checked on 26 October 2026, Monthly / Annual / lifetime Unlimited cost 8,99 € / 34,99 € / 69,99 € in Germany, Spain and France, ¥1,300 / ¥5,000 / ¥10,000 in Japan, ₩12,000 / ₩49,000 / ₩99,000 in South Korea and R$ 49,90 / R$ 199,90 / R$ 399,90 in Brazil.',
          },
          {
            q: 'Do I need permission to record a meeting?',
            a: 'The terms make you solely responsible for complying with the recording laws that apply to you, which in some places require consent from everyone on the call; the maker accepts no liability for violations.',
          },
          {
            q: 'How do renewals and refunds work?',
            a: 'Per the terms, subscriptions renew automatically unless cancelled at least 24 hours before the period ends in your Apple ID settings, the lifetime purchase has no recurring fees, and purchases are final except where the law requires a refund.',
          },
          {
            q: 'Is there a Windows or Android version?',
            a: 'None is listed: the App Store entry covers Apple platforms only, and the maker\'s site names no other platform.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Lyonesse is a broad, actively updated way to get transcripts, meeting notes and document chat on an iPhone or Mac, with one free recording to try it and a lifetime-purchase option next to the subscriptions. Against that, it is closed-source, comes from one independent developer, needs a 26-series operating system, rests its privacy and speed claims on the maker\'s own measurements, and states the iCloud sync default two different ways. It suits people with recent Apple hardware who want account-free notes and can test the free recording first; anyone recording sensitive or regulated material should read the privacy policy and the sync setting themselves before relying on it.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Lyonesse on the App Store](https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711) — description, version history, requirements, privacy labels and in-app purchase prices per storefront, checked 26 October 2026.',
          '[Lyonesse website](https://lyonesse.app) — feature list, pricing text and comparison table, checked 26 October 2026.',
          '[Lyonesse privacy policy](https://lyonesse.app/privacy.html) — data collection and sync, last updated 9 October 2026.',
          '[Lyonesse terms](https://lyonesse.app/terms.html) — subscriptions, refunds and recording consent, last updated 28 October 2025.',
          '[Speech benchmark post](https://lyonesse.app/blog/parakeet-moss-apple-speech-benchmark.html) and [upload measurement post](https://lyonesse.app/blog/meeting-notes-upload-measured.html) — the maker\'s own measurements.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Whisper Notes Review](/power-local-llm/whisper-notes-review) — offline speech-to-text for iPhone, iPad and Mac.',
          '[MacWhisper Review](/power-local-llm/macwhisper-review) — local Whisper and Parakeet transcription on the Mac.',
          '[Meetily Review](/power-local-llm/meetily-review) — open-source meeting notes with local models.',
          '[Castmates Review](/power-local-llm/castmates-review) — an offline iPhone character-chat app from the same App Store seller.',
          '[Pajdo Review](/power-local-llm/pajdo-review) — an Apple Health companion from the same developer, with questions answered on the iPhone.',
          '[Voice and Audio Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — the category comparison this review belongs to.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Lyonesse Review: Offline AI Transcription and Meeting Notes for iPhone and Mac',
      description:
        'Lyonesse review: an iPhone, iPad and Mac app for offline AI transcription, meeting notes and document chat. Pricing, requirements, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/lyonesse-review',
      inLanguage: 'en',
      datePublished: '2026-10-26',
      dateModified: '2026-10-26',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'iPhone and Mac users evaluating an offline AI transcription and meeting-notes app' },
      about: [
        { '@type': 'Thing', name: 'Lyonesse' },
        { '@type': 'Thing', name: 'Speech-to-text' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'Meeting notes' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/lyonesse-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Lyonesse Review', item: 'https://www.promptquorum.com/power-local-llm/lyonesse-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/lyonesse-review-hero-de.webp',
    title: 'Lyonesse-Rezension: Offline-KI-Transkription und Meeting-Notizen für iPhone und Mac',
    seoTitle: 'Lyonesse-Rezension: Offline-Transkription für iPhone, Mac',
    intro:
      'Lyonesse ist eine App für iPhone, iPad und Mac, die Aufnahmen transkribiert, Meetings zusammenfasst und Fragen zu Ihren Notizen und Dokumenten beantwortet; laut Hersteller läuft alles auf dem Gerät und ohne Konto. Der Download ist kostenlos und enthält eine Aufnahme, danach gibt es ein Abo oder einen einmaligen Lifetime-Kauf. Diese Rezension stützt sich auf den App-Store-Eintrag sowie auf [Website](https://lyonesse.app), Datenschutzerklärung, Nutzungsbedingungen und zwei Messberichte des Herstellers, geprüft am 26. Oktober 2026; PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'Lyonesse-Rezension: iPhone-, iPad- und Mac-App für Offline-KI-Transkription, Meeting-Notizen und Dokument-Chat. Erste Aufnahme gratis; ungetestet.',
    twitterDescription:
      'Lyonesse-Rezension: Offline-Transkription, Meeting-Notizen und Dokument-Chat für iPhone, iPad und Mac. Preise, Datenschutz, Anforderungen und was die Quellen offenlassen.',
    audience:
      'iPhone- und Mac-Nutzer, die private Transkription und Meeting-Notizen suchen und wissen müssen, was die Quellen bestätigen, was der Hersteller nur behauptet und was die App kostet.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Lyonesse Rezension',
    targetKeywords: [
      'lyonesse rezension',
      'lyonesse ki transkript und chat',
      'offline transkription app iphone',
      'private meeting notizen app mac',
      'ki transkription auf dem gerät',
      'offline ki meeting notizen',
      'mit pdf chatten offline iphone',
    ],
    current_models_mentioned: ['Apple Speech', 'NVIDIA Parakeet', 'Apple Intelligence'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Watch', 'iPhone 15 Pro'],
    leadAnswerBlock:
      '**Lyonesse (Version 2.0.7, aktualisiert am 23. Oktober 2026) ist eine App für iPhone, iPad und Mac für Offline-Transkription, Meeting-Notizen und den Chat mit Ihren eigenen Dokumenten.** Laut Hersteller werden Audio, Transkripte und Dokumente auf dem Gerät verarbeitet, und ein Konto ist nicht nötig; jede Aussage hier stammt aus dem App-Store-Eintrag und den eigenen Seiten des Herstellers.',
    quickAnswerTop: {
      de: {
        question: 'Funktioniert Lyonesse auf iPhone und Mac wirklich offline?',
        answer:
          'Laut Hersteller ja: Nachdem die Sprach- und KI-Modelle einmalig heruntergeladen wurden, funktionieren Aufnahme, Transkription, Zusammenfassungen und Fragen im Flugmodus. Die Datenschutzerklärung ergänzt, dass Audio das Gerät nie verlässt, anonymisierte Nutzungs- und Absturzdaten jedoch erfasst werden.',
        bullets: [
          'Live-Transkription mit Sprecherkennzeichnung in 15 Sprachen, mit Apple Speech oder NVIDIA Parakeet.',
          'Zusammenfassungen, Kernpunkte und ein Action Center, das Aufgaben, Verantwortliche und Fristen auflistet.',
          'Ask Lyonesse beantwortet Fragen zu Notizen, Transkripten, PDFs und Bildern, mit Quellenangaben.',
          'Auf dem Mac nimmt die App Mikrofon und Systemton auf, sodass kein Meeting-Bot dem Gespräch beitritt.',
        ],
        updatedDate: '2026-10-26',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Lyonesse?', anchor: 'what-is-lyonesse' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Lyonesse im Überblick', anchor: 'at-a-glance' },
      { label: 'Anforderungen', anchor: 'requirements' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Die eigenen Messungen des Herstellers', anchor: 'maker-measurements' },
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
            text: 'Lyonesse ist eine quellgeschlossene App für Apple-Plattformen, die Audio und Dokumente aufnimmt oder importiert, transkribiert, zusammenfasst und Fragen dazu ohne Konto beantwortet.',
          },
          {
            type: 'plain-terms',
            text: 'Sie nehmen eine Vorlesung oder ein Meeting auf oder importieren eine Datei und erhalten ein Transkript mit Sprechern, eine Zusammenfassung und eine Aufgabenliste; anschließend können Sie der App Fragen zu allem Gespeicherten stellen.',
          },
        ],
        items: [
          'Pflege: Version 2.0.7 erschien am 23. Oktober 2026 nach acht Releases seit dem 27. August; ein Warnhinweis für veraltete Projekte entfällt daher.',
          'Kosten: kostenlos mit einer Aufnahme; danach ein Monats- oder Jahresabo oder ein einmaliger Lifetime-Kauf.',
          'Anforderungen: iOS, iPadOS oder macOS 26.0 oder neuer; die KI auf dem Gerät arbeitet am besten auf aktueller Apple-Hardware.',
          'Hersteller: ein unabhängiger Entwickler, ohne veröffentlichten Quellcode; der App-Store-Anbieter verkauft auch [Castmates](/de/power-local-llm/castmates-review).',
          'Belege: Die Angaben zu Tempo und Datenschutz sind eigene Messungen des Herstellers, keine unabhängigen Tests.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum hat die App weder installiert noch damit aufgenommen oder gemessen; die Qualität von Transkription und Zusammenfassung wird daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-lyonesse',
        title: 'Was ist Lyonesse?',
        content: [
          '**Lyonesse ist eine App für Apple-Plattformen, die Audio aufnimmt oder importiert, transkribiert, zusammenfasst und Fragen zu Ihren Notizen, PDFs, Office-Dateien und Fotos beantwortet; all das soll laut Beschreibung auf dem Gerät laufen.** Der App Store führt die App als „Lyonesse: AI Transcript & Chat“ in der Kategorie Produktivität, Anbieter ist Josip Markovic (Copyright „Markovic Software, obrt za usluge“); Website, Datenschutzerklärung und Nutzungsbedingungen nennen weder eine Person noch ein Unternehmen. Der Eintrag erschien erstmals am 31. Oktober 2025, und Version 2.0.1 benannte die App am 3. September 2026 von Inscribe in Lyonesse um.',
          'Der Titel im App Store unterscheidet sich je nach Land, etwa „Lyonesse: KI Transkript & Chat“ in Deutschland und „Lyonesse: AI文字起こし・チャット“ in Japan; gemeint ist jeweils dieselbe App.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Lyonesse gibt es als Download im App Store für iPhone, iPad und Mac; eine Android-, Windows- oder Web-Version ist nicht gelistet.**',
        ],
        columns: ['Option', 'Bezug'],
        rows: [
          { 'Option': 'iPhone und iPad', 'Bezug': '[Lyonesse im App Store](https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711), kostenlos mit In-App-Käufen' },
          { 'Option': 'Mac', 'Bezug': 'Derselbe App-Store-Eintrag, laut Eintrag macOS 26.0 oder neuer' },
          { 'Option': 'Apple Watch', 'Bezug': 'Recorder-App, watchOS 11.0 oder neuer; mit Version 2.0.5 hinzugekommen' },
          { 'Option': 'Bezahloptionen', 'Bezug': 'Monatlich 8,99 €, jährlich 34,99 € oder Lifetime 69,99 € (deutscher Store)' },
          { 'Option': 'Website', 'Bezug': '[lyonesse.app](https://lyonesse.app)' },
          { 'Option': 'Datenschutzerklärung', 'Bezug': '[lyonesse.app/privacy](https://lyonesse.app/privacy.html)' },
          { 'Option': 'Nutzungsbedingungen', 'Bezug': '[lyonesse.app/terms](https://lyonesse.app/terms.html)' },
          { 'Option': 'Quellcode', 'Bezug': 'Nicht veröffentlicht' },
        ],
        note: 'Geprüfte Version: 2.0.7, laut App Store am 23. Oktober 2026 veröffentlicht; die App ist vor den Modell-Downloads 68,9 MB groß. Der kostenlose Download enthält eine Aufnahme mit allen Funktionen. Die Preise stammen aus dem deutschen App Store und variieren je nach Land. PromptQuorum hat die Mac- und Watch-Versionen nicht installiert.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Lyonesse im Überblick',
        columns: ['Merkmal', 'Lyonesse'],
        rows: [
          { 'Merkmal': 'Plattform', 'Lyonesse': 'iPhone, iPad, Mac; Recorder für die Apple Watch' },
          { 'Merkmal': 'Preis', 'Lyonesse': 'Erste Aufnahme gratis; Abo oder Lifetime' },
          { 'Merkmal': 'Lizenz', 'Lyonesse': 'Proprietär, quellgeschlossen' },
          { 'Merkmal': 'Ausführung', 'Lyonesse': 'Auf dem Gerät; Modelle werden einmal geladen' },
          { 'Merkmal': 'Sprachen', 'Lyonesse': '15 für Transkription und Zusammenfassungen' },
          { 'Merkmal': 'Echtzeit-Transkription', 'Lyonesse': 'Ja; Live-Transkription und Untertitel' },
          { 'Merkmal': 'Sprecherkennzeichnung', 'Lyonesse': 'Ja' },
          { 'Merkmal': 'Nur mit CPU nutzbar', 'Lyonesse': 'Nicht angegeben; nur Apple-Hardware' },
          { 'Merkmal': 'Lokaler API-Server', 'Lyonesse': 'Nicht angegeben' },
        ],
        note: 'Die Merkmale folgen dem Spracherkennungs-Vergleich im Verzeichnis lokaler LLM-Software. Fehlt eine Angabe auf der Website, bedeutet das „unbekannt“, nicht „nicht unterstützt“.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
          '**Der App Store nennt iOS, iPadOS und macOS 26.0 als Mindestversion, und laut Hersteller arbeitet die KI auf dem Gerät am besten auf aktueller Apple-Hardware.**',
        ],
        columns: ['Punkt', 'Angaben der Quellen'],
        rows: [
          { 'Punkt': 'Betriebssystem', 'Angaben der Quellen': 'iOS, iPadOS, macOS und visionOS 26.0 oder neuer; watchOS 11.0 für den Watch-Recorder (App Store)' },
          { 'Punkt': 'Beste Hardware', 'Angaben der Quellen': 'iPhone 15 Pro oder neuer, iPad mit M-Chip, Mac mit Apple Silicon (Website des Herstellers)' },
          { 'Punkt': 'KI-Engines', 'Angaben der Quellen': 'Apple Speech oder NVIDIA Parakeet für die Transkription; Apple Intelligence oder ein ladbares lokales Modell für Zusammenfassungen und Chat' },
          { 'Punkt': 'Modell-Download', 'Angaben der Quellen': 'Einmal über ein Netzwerk nötig; der Benchmark-Beitrag des Herstellers nennt für Parakeet TDT v3 etwa 467 MB' },
          { 'Punkt': 'Arbeitsspeicher', 'Angaben der Quellen': 'Nirgends wird ein RAM-Wert genannt' },
        ],
        note: 'Maßgeblich dafür, ob die App installiert werden kann, ist der App-Store-Eintrag; die Website des Herstellers nennt keine Betriebssystemversion.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Schritte folgen der eigenen Beschreibung des Herstellers; PromptQuorum hat sie nicht selbst durchgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Installieren und Modelle laden',
            whyItMatters: 'Installieren Sie Lyonesse aus dem App Store und lassen Sie die App ihre Sprach- und KI-Modelle einmalig herunterladen.',
          },
          {
            title: 'Aufnehmen oder importieren',
            whyItMatters: 'Nehmen Sie auf iPhone, Mac oder Apple Watch auf, oder importieren Sie Audio, Video, PDFs, Word-, Excel- und PowerPoint-Dateien sowie Fotos.',
          },
          {
            title: 'Notizen durchsehen',
            whyItMatters: 'Lesen Sie das Transkript mit Sprecherkennzeichnung, die Zusammenfassung, die Kernpunkte und die Aufgaben im Action Center.',
          },
          {
            title: 'Fragen stellen und exportieren',
            whyItMatters: 'Stellen Sie Fragen mit Ask Lyonesse, exportieren Sie dann die Notizen oder senden Sie Aufgaben an Apple Erinnerungen.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt aus der App-Store-Beschreibung, ihrem Versionsverlauf oder von der Website des Herstellers; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Transkription.** Live-Transkription mit Sprecherkennzeichnung in 15 Sprachen; Version 2.0.4 brachte übersetzte Live-Untertitel, ein eigenes Vokabular und eine bereinigte Wortlaut-Ansicht.',
          '**Zusammenfassungen und Aufgaben.** KI-Zusammenfassungen, Kernpunkte und Entscheidungen sowie ein Action Center, das Aufgaben, Verantwortliche und Fristen extrahiert.',
          '**Ask Lyonesse und Dokument-Chat.** Fragen zu Notizen, Transkripten, PDFs, Word, Excel, PowerPoint und Bildern, mit Quellenangaben und OCR auf dem Gerät; Projekte bündeln Aufnahmen und Dokumente.',
          '**Meeting-Assistent.** Kalenderverknüpfung, Live-Untertitel, Hinweise bei Namensnennung, von der KI entworfene Protokolle und Aufgaben, die an Apple Erinnerungen gesendet werden; auf dem Mac nimmt die App Mikrofon und Systemton auf, sodass kein Bot dem Gespräch beitritt.',
          '**Apple-Umfeld.** Ein Watch-Recorder (Version 2.0.5), Widgets, Siri- und Kurzbefehle-Unterstützung (Version 2.0.1) und optionale iCloud-Synchronisierung.',
        ],
        note: 'Version 2.0.6 ordnete die App neu in die Tabs Notizen, Aufgaben und Ordner plus Suche; Meetings liegen nun in den Notizen.',
      },
      makerMeasurements: {
        id: 'maker-measurements',
        title: 'Die eigenen Messungen des Herstellers',
        content: [
          '**Lyonesse verlinkt auf der Startseite zwei Messberichte; beide stammen vom Hersteller, und PromptQuorum hat keinen davon nachgebildet.**',
          'Im Sprach-Benchmark, veröffentlicht am 15. Juli 2026, verglich der Hersteller acht Engines auf dem englischen LibriSpeech-Korpus auf einem Apple M2 Pro. Er nennt Wortfehlerraten bei klarer und schwierigerer Sprache von 2,12 % und 4,56 % für Apple SpeechAnalyzer sowie 2,51 % und 4,28 % für Parakeet TDT v3. Außerdem gibt er an, dass Version 1.8.9 Whisper entfernte und der Automatikmodus Apple SpeechAnalyzer bevorzugt, wo eine Sprache unterstützt wird. Der Beitrag selbst betont, dass er nur Englisch, vorgelesene Hörbuchsprache statt Meetings und eine einzelne Maschine abdeckt.',
          'In der Upload-Messung spielte der Hersteller einen 10-minütigen Meeting-Clip auf einem Mac ab und protokollierte die Netzwerk-Bytes je Prozess. Er gibt an, dass Lyonesse 2.0.4 während der Aufnahme 0,02 MB sendete, gegenüber 115,7 MB bei Notion AI Meeting Notes 7.39.0. Der Beitrag bezeichnet sich als Selbsttest des Herstellers in einem Netzwerk an einem Tag, mit zwei von fünf geplanten Apps, nur Bytes und ohne Sicherheitsprüfung, und vermerkt, dass Lyonesse außerdem einmalig etwa 18 MB Modelle zur Sprechererkennung lud und etwa 0,4 MB Notiztext über iCloud synchronisierte.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Laut Datenschutzerklärung, zuletzt aktualisiert am 9. Oktober 2026, verlassen Audioaufnahmen das Gerät nie, und Transkription, Zusammenfassungen und Dokumentanalyse laufen darauf, ohne dass Daten zur Verarbeitung an externe Server gehen.** Ein Konto ist nicht nötig, und die Erklärung gibt an, dass Lyonesse keine Analyse-, Werbe- oder Tracking-Dienste von Drittanbietern einbindet und weder Aufnahmen, Transkripte, Dokumente, Namen, E-Mail-Adressen, Standort noch Kontakte erfasst.',
          'Einige Daten bewegen sich dennoch. Die Erklärung beschreibt anonymisierte Nutzungsstatistiken (App-Starts, Funktionsnutzung, Gerätetyp, System- und App-Version) und Absturzberichte, ohne die eingesetzten Werkzeuge zu nennen oder zu sagen, wie sie gesendet werden; die Datenschutzangaben im App Store führen Geräte-ID, Produktinteraktion und Absturzdaten als erfasst und nicht mit Ihnen verknüpft auf. Transkripte und Zusammenfassungen werden über iCloud zwischen Ihren eigenen Geräten synchronisiert, und Geräte-Backups enthalten App-Daten. Der Hersteller gibt an, keine Sync-Server zu betreiben und iCloud-Daten nicht einsehen zu können. Apple Intelligence, der App Store, iCloud und Backups unterliegen Apples eigenen Richtlinien.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Angaben des Entwicklers, keine Prüfergebnisse, und der Quellcode ist nicht veröffentlicht. PromptQuorum hat den Netzwerkverkehr der App nicht untersucht. Erklärung und Bedingungen nennen weder ein Unternehmen noch eine Postanschrift; die Copyright-Zeile im App Store lautet „Markovic Software, obrt za usluge“, und die Bedingungen wenden kroatisches Recht an.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Studierende und Interviewer**, die Vorlesungen oder Gespräche aufnehmen und ein Transkript, eine Zusammenfassung und eine durchsuchbare Bibliothek ohne Konto möchten.',
          '**Mac-Nutzer mit vielen Calls**, die Notizen ohne Bot im Meeting möchten.',
          '**Käufer, die Abos nicht mögen** und nach dem Test der kostenlosen Aufnahme eine Lifetime-Option wünschen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Genauigkeit in der Praxis.** PromptQuorum hat nichts aufgenommen oder transkribiert; Qualität des Transkripts, Genauigkeit der Sprecherkennzeichnung, Qualität der Zusammenfassungen und die Abdeckung aller 15 Sprachen werden daher nicht bewertet.',
          '**Standard der Synchronisierung.** Laut Datenschutzerklärung ist die iCloud-Synchronisierung standardmäßig aktiv, während die App-Store-Beschreibung sagt, die optionale iCloud-Synchronisierung sei standardmäßig aus.',
          '**„Nothing leaves your device.“** Die Website sagt, nichts werde hochgeladen, während Erklärung und App-Store-Angaben anonymisierte Analyse- und Absturzdaten beschreiben; wohin diese gehen, ist nicht angegeben.',
          '**Hardware-Voraussetzung.** Die Bedingungen, zuletzt aktualisiert am 28. Oktober 2025, sagen, die App setze Apple-Intelligence-fähige Hardware voraus, während die Website ein ladbares lokales Modell als Alternative beschreibt.',
          '**Erfahrungswerte.** Der App Store zeigte bei der Prüfung nur wenige Bewertungen, und die App hieß bis zum 3. September 2026 Inscribe.',
          '**Regulierter Einsatz.** Die Eignung für medizinische, juristische oder andere regulierte Aufnahmen wurde nicht bewertet.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          { 'App': '[Whisper Notes](/de/power-local-llm/whisper-notes-review)', 'Plattformen': 'iPhone, iPad, Mac', 'Preis / Lizenz': 'Einmalkauf / quellgeschlossen', 'Wichtigster Unterschied': 'Offline-Transkription mit Sprecherkennzeichnung, aber ohne Meeting-Assistent und Dokument-Chat; der Text erscheint, nachdem Sie die Aufnahme beenden' },
          { 'App': '[MacWhisper](/de/power-local-llm/macwhisper-review)', 'Plattformen': 'macOS', 'Preis / Lizenz': 'Freemium / proprietär', 'Wichtigster Unterschied': 'Mac-App im Einmalkauf für lokale Whisper- und Parakeet-Transkription; keine iPhone-Version' },
          { 'App': '[Meetily](/de/power-local-llm/meetily-review)', 'Plattformen': 'macOS, Windows', 'Preis / Lizenz': 'Freemium / MIT', 'Wichtigster Unterschied': 'Quelloffene Meeting-Notizen mit lokaler Transkription und Zusammenfassungen über Ollama; läuft auch unter Windows' },
        ],
        note: 'Prüfen Sie aktuellen Preis, Lizenz und Plattformen jeder App in ihrem eigenen Eintrag, bevor Sie sich entscheiden.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was kostet Lyonesse außerhalb der USA?',
            a: 'In den am 26. Oktober 2026 geprüften App-Store-Ländern kosteten Monthly / Annual / lebenslanges Unlimited 8,99 € / 34,99 € / 69,99 € in Deutschland, Spanien und Frankreich, 1.300 ¥ / 5.000 ¥ / 10.000 ¥ in Japan, 12.000 ₩ / 49.000 ₩ / 99.000 ₩ in Südkorea und R$ 49,90 / R$ 199,90 / R$ 399,90 in Brasilien.',
          },
          {
            q: 'Brauche ich eine Erlaubnis, um ein Meeting aufzunehmen?',
            a: 'Laut Bedingungen sind allein Sie dafür verantwortlich, die für Sie geltenden Aufnahmegesetze einzuhalten, die mancherorts die Zustimmung aller Gesprächsteilnehmer verlangen; der Hersteller übernimmt keine Haftung für Verstöße.',
          },
          {
            q: 'Wie funktionieren Verlängerung und Erstattung?',
            a: 'Laut Bedingungen verlängern sich Abos automatisch, sofern sie nicht mindestens 24 Stunden vor Ablauf des Zeitraums in den Apple-ID-Einstellungen gekündigt werden; der Lifetime-Kauf hat keine wiederkehrenden Kosten, und Käufe sind endgültig, außer wo das Gesetz eine Erstattung verlangt.',
          },
          {
            q: 'Gibt es eine Windows- oder Android-Version?',
            a: 'Keine ist gelistet: Der App-Store-Eintrag deckt nur Apple-Plattformen ab, und die Website des Herstellers nennt keine andere Plattform.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Lyonesse ist ein breit angelegter, aktiv gepflegter Weg, auf dem iPhone oder Mac Transkripte, Meeting-Notizen und Dokument-Chat zu erhalten, mit einer kostenlosen Aufnahme zum Ausprobieren und einer Lifetime-Option neben den Abos. Dem stehen gegenüber: Die App ist quellgeschlossen, stammt von einem einzelnen unabhängigen Entwickler, braucht ein Betriebssystem der Version 26, stützt ihre Aussagen zu Datenschutz und Tempo auf eigene Messungen des Herstellers und nennt den Standard der iCloud-Synchronisierung auf zwei verschiedene Arten. Sie passt zu Menschen mit aktueller Apple-Hardware, die Notizen ohne Konto möchten und zuerst die kostenlose Aufnahme testen können; wer sensible oder regulierte Inhalte aufnimmt, sollte die Datenschutzerklärung und die Sync-Einstellung selbst lesen, bevor er sich darauf verlässt.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Lyonesse im App Store](https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711) — Beschreibung, Versionsverlauf, Anforderungen, Datenschutzangaben und In-App-Kaufpreise je Land, geprüft am 26. Oktober 2026.',
          '[Website von Lyonesse](https://lyonesse.app) — Funktionsliste, Preistext und Vergleichstabelle, geprüft am 26. Oktober 2026.',
          '[Datenschutzerklärung von Lyonesse](https://lyonesse.app/privacy.html) — Datenerhebung und Synchronisierung, zuletzt aktualisiert am 9. Oktober 2026.',
          '[Nutzungsbedingungen von Lyonesse](https://lyonesse.app/terms.html) — Abos, Erstattungen und Aufnahmeeinwilligung, zuletzt aktualisiert am 28. Oktober 2025.',
          '[Sprach-Benchmark](https://lyonesse.app/blog/parakeet-moss-apple-speech-benchmark.html) und [Upload-Messung](https://lyonesse.app/blog/meeting-notes-upload-measured.html) — die eigenen Messungen des Herstellers.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Whisper-Notes-Rezension](/de/power-local-llm/whisper-notes-review) — Offline-Spracherkennung für iPhone, iPad und Mac.',
          '[MacWhisper-Rezension](/de/power-local-llm/macwhisper-review) — lokale Whisper- und Parakeet-Transkription auf dem Mac.',
          '[Meetily-Rezension](/de/power-local-llm/meetily-review) — quelloffene Meeting-Notizen mit lokalen Modellen.',
          '[Castmates-Rezension](/de/power-local-llm/castmates-review) — eine Offline-Charakter-Chat-App für das iPhone vom selben App-Store-Anbieter.',
          '[Pajdo-Rezension](/de/power-local-llm/pajdo-review) — ein Apple-Health-Begleiter vom selben Entwickler, dessen Fragen auf dem iPhone beantwortet werden.',
          '[Sprach- und Audio-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — der Kategorievergleich, zu dem diese Rezension gehört.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/lyonesse-review-hero-es.webp',
    title: 'Reseña de Lyonesse: transcripción con IA y notas de reuniones en iPhone y Mac',
    seoTitle: 'Reseña de Lyonesse: transcripción con IA sin conexión',
    intro:
      'Lyonesse es una app para iPhone, iPad y Mac que transcribe grabaciones, resume reuniones y responde preguntas sobre tus notas y documentos, y según su creador todo ello se ejecuta en el dispositivo y sin cuenta. Se descarga gratis con una grabación incluida y después se vende como suscripción o como compra única vitalicia. Esta reseña se basa en la ficha de la App Store y en el [sitio web](https://lyonesse.app), la política de privacidad, los términos y dos publicaciones de mediciones del creador, comprobados el 26 de octubre de 2026; PromptQuorum no ha probado la app.',
    metaDescription:
      'Reseña de Lyonesse: app de iPhone, iPad y Mac para transcripción con IA sin conexión, notas de reuniones y chat con documentos. Primera grabación gratis.',
    twitterDescription:
      'Reseña de Lyonesse: transcripción sin conexión, notas de reuniones y chat con documentos en iPhone, iPad y Mac. Precios, privacidad, requisitos y lo que las fuentes no confirman.',
    audience:
      'Usuarios de iPhone y Mac que quieren transcripción y notas de reuniones privadas y necesitan saber qué confirman las fuentes, qué solo afirma el creador y cuánto cuesta.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Lyonesse',
    targetKeywords: [
      'reseña lyonesse',
      'lyonesse ai transcript and chat',
      'app de transcripción sin conexión para iphone',
      'app privada de notas de reuniones para mac',
      'transcripción con ia en el dispositivo',
      'notas de reuniones con ia sin conexión',
      'chat con pdf sin conexión en iphone',
    ],
    current_models_mentioned: ['Apple Speech', 'NVIDIA Parakeet', 'Apple Intelligence'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Watch', 'iPhone 15 Pro'],
    leadAnswerBlock:
      '**Lyonesse (versión 2.0.7, actualizada el 23 de octubre de 2026) es una app para iPhone, iPad y Mac de transcripción sin conexión, notas de reuniones y chat con tus propios documentos.** Según el creador, el audio, las transcripciones y los documentos se procesan en el dispositivo y no hace falta cuenta; todo lo que se afirma aquí procede de la ficha de la App Store y de las páginas del propio creador.',
    quickAnswerTop: {
      es: {
        question: '¿Lyonesse funciona de verdad sin conexión en iPhone y Mac?',
        answer:
          'Según el creador, sí: tras descargar una sola vez los modelos de voz y de IA, la grabación, la transcripción, los resúmenes y las preguntas funcionan en modo avión. La política de privacidad añade que el audio nunca sale del dispositivo, aunque se recopilan datos anónimos de uso y de fallos.',
        bullets: [
          'Transcripción en directo con etiquetas de hablante en 15 idiomas, con Apple Speech o NVIDIA Parakeet.',
          'Resúmenes, puntos clave y un Action Center que lista tareas, responsables y fechas límite.',
          'Ask Lyonesse responde preguntas sobre notas, transcripciones, PDF e imágenes, con citas.',
          'En el Mac graba el micrófono y el audio del sistema, así que ningún bot se une a la llamada.',
        ],
        updatedDate: '2026-10-26',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Lyonesse?', anchor: 'what-is-lyonesse' },
      { label: 'Dónde conseguirlo', anchor: 'get-it' },
      { label: 'Lyonesse de un vistazo', anchor: 'at-a-glance' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Las mediciones del propio creador', anchor: 'maker-measurements' },
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
            text: 'Lyonesse es una app de código cerrado para plataformas Apple que graba o importa audio y documentos, los transcribe y resume, y responde preguntas sobre ellos sin necesidad de cuenta.',
          },
          {
            type: 'plain-terms',
            text: 'Grabas una clase o una reunión, o importas un archivo, y obtienes una transcripción con hablantes, un resumen y una lista de tareas; después puedes hacerle preguntas a la app sobre todo lo que guardaste.',
          },
        ],
        items: [
          'Mantenimiento: la versión 2.0.7 se publicó el 23 de octubre de 2026 tras ocho versiones desde el 27 de agosto, así que no se aplica ninguna advertencia de proyecto abandonado.',
          'Coste: gratis con una grabación; después, suscripción mensual o anual, o compra única vitalicia.',
          'Requisitos: iOS, iPadOS o macOS 26.0 o posterior; la IA en el dispositivo funciona mejor con hardware Apple reciente.',
          'Creador: un desarrollador independiente, sin código fuente publicado; el vendedor de la App Store también vende [Castmates](/es/power-local-llm/castmates-review).',
          'Evidencia: las cifras de velocidad y privacidad son mediciones del propio creador, no pruebas independientes.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum no ha instalado la app, ni grabado con ella, ni la ha medido, así que no se evalúa la calidad de la transcripción ni de los resúmenes.',
          },
        ],
      },
      overview: {
        id: 'what-is-lyonesse',
        title: '¿Qué es Lyonesse?',
        content: [
          '**Lyonesse es una app para plataformas Apple que graba o importa audio, lo transcribe, lo resume y te permite hacer preguntas sobre tus notas, PDF, archivos de Office y fotos, todo ello descrito como ejecutado en el dispositivo.** La App Store la muestra como "Lyonesse: AI Transcript & Chat" en Productividad, con Josip Markovic como vendedor (copyright "Markovic Software, obrt za usluge"); el sitio web, la política de privacidad y los términos no nombran a ninguna persona ni empresa. La ficha apareció por primera vez el 31 de octubre de 2025, y la versión 2.0.1, del 3 de septiembre de 2026, cambió el nombre de la app de Inscribe a Lyonesse.',
          'El título en la App Store cambia según la tienda de cada país, por ejemplo "Lyonesse: KI Transkript & Chat" en Alemania y "Lyonesse: AI文字起こし・チャット" en Japón; todos se refieren a la misma app.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**Lyonesse se descarga desde la App Store para iPhone, iPad y Mac; no figura ninguna versión para Android, Windows ni web.**',
        ],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
          { 'Opción': 'iPhone y iPad', 'Cómo conseguirlo': '[Lyonesse en la App Store](https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711), gratis con compras dentro de la app' },
          { 'Opción': 'Mac', 'Cómo conseguirlo': 'Misma ficha de la App Store, macOS 26.0 o posterior según la ficha' },
          { 'Opción': 'Apple Watch', 'Cómo conseguirlo': 'App de grabación, watchOS 11.0 o posterior; añadida en la versión 2.0.5' },
          { 'Opción': 'Opciones de pago', 'Cómo conseguirlo': 'Mensual 8,99 €, anual 34,99 € o vitalicia 69,99 € (tienda española)' },
          { 'Opción': 'Sitio web', 'Cómo conseguirlo': '[lyonesse.app](https://lyonesse.app)' },
          { 'Opción': 'Política de privacidad', 'Cómo conseguirlo': '[lyonesse.app/privacy](https://lyonesse.app/privacy.html)' },
          { 'Opción': 'Términos', 'Cómo conseguirlo': '[lyonesse.app/terms](https://lyonesse.app/terms.html)' },
          { 'Opción': 'Código fuente', 'Cómo conseguirlo': 'No publicado' },
        ],
        note: 'Versión revisada: 2.0.7, publicada el 23 de octubre de 2026 según la App Store; la app ocupa 68.9 MB antes de descargar los modelos. La descarga gratuita incluye una grabación con todas las funciones. Los precios son los de la tienda española de la App Store y varían según el país. PromptQuorum no instaló las versiones para Mac ni para Watch.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Lyonesse de un vistazo',
        columns: ['Atributo', 'Lyonesse'],
        rows: [
          { 'Atributo': 'Plataforma', 'Lyonesse': 'iPhone, iPad, Mac; app de grabación para Apple Watch' },
          { 'Atributo': 'Precio', 'Lyonesse': 'Primera grabación gratis; suscripción o compra vitalicia' },
          { 'Atributo': 'Licencia', 'Lyonesse': 'Propietaria, código cerrado' },
          { 'Atributo': 'Se ejecuta', 'Lyonesse': 'En el dispositivo; los modelos se descargan una vez' },
          { 'Atributo': 'Idiomas', 'Lyonesse': '15 para transcripción y resúmenes' },
          { 'Atributo': 'Transcripción en tiempo real', 'Lyonesse': 'Sí; transcripción y subtítulos en directo' },
          { 'Atributo': 'Etiquetas de hablante', 'Lyonesse': 'Sí' },
          { 'Atributo': 'Usable solo con CPU', 'Lyonesse': 'No se indica; solo hardware Apple' },
          { 'Atributo': 'Servidor API local', 'Lyonesse': 'No se indica' },
        ],
        note: 'Los atributos siguen la comparativa de voz a texto del Directorio de software de LLM local. Si el sitio no menciona algo, significa que se desconoce, no que no sea compatible.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**La App Store indica iOS, iPadOS y macOS 26.0 como mínimo, y el creador afirma que la IA en el dispositivo funciona mejor con hardware Apple reciente.**',
        ],
        columns: ['Elemento', 'Qué dicen las fuentes'],
        rows: [
          { 'Elemento': 'Sistema operativo', 'Qué dicen las fuentes': 'iOS, iPadOS, macOS y visionOS 26.0 o posterior; watchOS 11.0 para la app de grabación del Watch (App Store)' },
          { 'Elemento': 'Mejor hardware', 'Qué dicen las fuentes': 'iPhone 15 Pro o posterior, iPad con chip de la serie M, Mac con Apple silicon (sitio del creador)' },
          { 'Elemento': 'Motores de IA', 'Qué dicen las fuentes': 'Apple Speech o NVIDIA Parakeet para la transcripción; Apple Intelligence o un modelo local descargable para resúmenes y chat' },
          { 'Elemento': 'Descarga de modelos', 'Qué dicen las fuentes': 'Necesaria una vez, con conexión; la publicación de pruebas del creador indica unos 467 MB para Parakeet TDT v3' },
          { 'Elemento': 'Memoria', 'Qué dicen las fuentes': 'No se indica ninguna cifra de RAM en ninguna fuente' },
        ],
        note: 'La ficha de la App Store es la que decide si la app se instala; el sitio del creador no indica ninguna versión del sistema operativo.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Los pasos siguen la descripción del propio creador; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Instala la app y descarga los modelos',
            whyItMatters: 'Instala Lyonesse desde la App Store y deja que descargue una sola vez sus modelos de voz y de IA.',
          },
          {
            title: 'Graba o importa',
            whyItMatters: 'Graba en el iPhone, el Mac o el Apple Watch, o importa audio, vídeo, PDF, archivos de Word, Excel y PowerPoint, y fotos.',
          },
          {
            title: 'Revisa las notas',
            whyItMatters: 'Lee la transcripción con etiquetas de hablante, el resumen, los puntos clave y las tareas del Action Center.',
          },
          {
            title: 'Pregunta y exporta',
            whyItMatters: 'Haz preguntas con Ask Lyonesse y después exporta las notas o envía las tareas a Recordatorios de Apple.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada punto de esta lista procede de la descripción de la App Store, de su historial de versiones o del sitio web del creador; ninguno se ha probado de forma independiente.**',
        ],
        items: [
          '**Transcripción.** Transcripción en directo con etiquetas de hablante en 15 idiomas; la versión 2.0.4 añadió subtítulos traducidos en directo, vocabulario personalizado y una vista literal limpia.',
          '**Resúmenes y tareas.** Resúmenes con IA, puntos clave y decisiones, además de un Action Center que extrae tareas, responsables y fechas límite.',
          '**Ask Lyonesse y chat con documentos.** Preguntas sobre notas, transcripciones, PDF, Word, Excel, PowerPoint e imágenes, con citas y OCR en el dispositivo; los Projects agrupan grabaciones y documentos.',
          '**Asistente de reuniones.** Vinculación con el calendario, subtítulos en directo, avisos cuando se menciona tu nombre, actas redactadas con IA y tareas enviadas a Recordatorios de Apple; en el Mac graba el micrófono y el audio del sistema, así que ningún bot se une a la llamada.',
          '**Ecosistema Apple.** Una app de grabación para Watch (versión 2.0.5), widgets, compatibilidad con Siri y Atajos (versión 2.0.1) y sincronización opcional con iCloud.',
        ],
        note: 'La versión 2.0.6 reorganizó la app en las pestañas Notas, Tareas y Carpetas más Búsqueda, y las reuniones pasaron a estar dentro de Notas.',
      },
      makerMeasurements: {
        id: 'maker-measurements',
        title: 'Las mediciones del propio creador',
        content: [
          '**Lyonesse enlaza desde su página de inicio dos publicaciones de mediciones; ambas las realizó el creador y PromptQuorum no ha reproducido ninguna.**',
          'En la prueba de reconocimiento de voz, publicada el 15 de julio de 2026, el creador comparó ocho motores con el corpus inglés LibriSpeech en un Apple M2 Pro. Informa de tasas de error de palabras en voz limpia y en voz con más ruido de 2.12% y 4.56% para Apple SpeechAnalyzer y de 2.51% y 4.28% para Parakeet TDT v3. También indica que la versión 1.8.9 eliminó Whisper y que el modo automático prefiere Apple SpeechAnalyzer cuando se admite el idioma. La publicación aclara que cubre solo inglés, voz leída de audiolibros en lugar de reuniones, y una sola máquina.',
          'En la medición de subida de datos, el creador reprodujo un clip de reunión de 10 minutos en un Mac y registró los bytes de red por proceso. Informa de que Lyonesse 2.0.4 envió 0.02 MB durante la grabación, frente a 115.7 MB de Notion AI Meeting Notes 7.39.0. La publicación se define como una autoprueba del fabricante, con una red en un solo día, dos de las cinco apps previstas, solo bytes y sin auditoría de seguridad, y señala que Lyonesse también descargó una vez unos 18 MB de modelos de detección de hablantes y sincronizó unos 0.4 MB de texto de notas a través de iCloud.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**La política de privacidad, actualizada por última vez el 9 de octubre de 2026, dice que las grabaciones de audio nunca salen del dispositivo y que la transcripción, los resúmenes y el análisis de documentos se ejecutan en él, sin enviar datos a servidores externos para su procesamiento.** No hace falta cuenta, y la política afirma que Lyonesse no integra servicios de analítica, publicidad ni rastreo de terceros y que no recopila grabaciones, transcripciones, documentos, nombres, correos electrónicos, ubicación ni contactos.',
          'Algunos datos sí se mueven. La política describe estadísticas de uso anonimizadas (aperturas de la app, uso de funciones, tipo de dispositivo, versión del sistema y de la app) e informes de fallos, sin nombrar las herramientas ni explicar cómo se envían; las etiquetas de privacidad de la App Store indican que se recopilan el identificador del dispositivo, la interacción con el producto y los datos de fallos, sin vincularlos a ti. Las transcripciones y los resúmenes se sincronizan entre tus propios dispositivos a través de iCloud, y las copias de seguridad del dispositivo incluyen los datos de la app. El creador dice que no gestiona servidores de sincronización y que no puede ver los datos de iCloud. Apple Intelligence, la App Store, iCloud y las copias de seguridad se rigen por las políticas de Apple.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del desarrollador, no resultados de una auditoría, y el código fuente no está publicado. PromptQuorum no ha inspeccionado el tráfico de red de la app. La política y los términos no nombran ninguna entidad jurídica ni dirección postal; el copyright de la App Store dice "Markovic Software, obrt za usluge" y los términos aplican la ley croata.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Estudiantes y entrevistadores** que graban clases o conversaciones y quieren una transcripción, un resumen y una biblioteca con búsqueda, sin cuenta.',
          '**Usuarios de Mac con muchas llamadas** que quieren notas sin que un bot se una a la reunión.',
          '**Compradores a los que no les gustan las suscripciones** y quieren una opción de compra vitalicia después de probar la grabación gratuita.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Precisión en la práctica.** PromptQuorum no grabó ni transcribió nada, así que no se evalúan la calidad de las transcripciones, la precisión de las etiquetas de hablante, la calidad de los resúmenes ni la cobertura de los 15 idiomas.',
          '**Sincronización por defecto.** La política de privacidad dice que la sincronización con iCloud está activada por defecto, mientras que la descripción de la App Store dice que la sincronización opcional con iCloud está desactivada por defecto.',
          '**"Nada sale de tu dispositivo".** El sitio dice que no se sube nada, mientras que la política y las etiquetas de la App Store describen analítica anonimizada y datos de fallos; no se indica adónde van.',
          '**Requisito de hardware.** Los términos, actualizados por última vez el 28 de octubre de 2025, dicen que la app requiere hardware compatible con Apple Intelligence, mientras que el sitio describe un modelo local descargable como alternativa.',
          '**Trayectoria.** La App Store mostraba solo un puñado de valoraciones al consultarla, y la app se llamó Inscribe hasta el 3 de septiembre de 2026.',
          '**Uso regulado.** No se evaluó su idoneidad para grabaciones médicas, jurídicas u otras reguladas.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[Whisper Notes](/es/power-local-llm/whisper-notes-review)', 'Plataformas': 'iPhone, iPad, Mac', 'Precio / licencia': 'Pago único / código cerrado', 'Diferencia clave': 'Transcripción sin conexión con etiquetas de hablante, pero sin asistente de reuniones ni chat con documentos; el texto aparece al dejar de grabar' },
          { 'App': '[MacWhisper](/es/power-local-llm/macwhisper-review)', 'Plataformas': 'macOS', 'Precio / licencia': 'Freemium / propietaria', 'Diferencia clave': 'App de Mac de pago único para transcripción local con Whisper y Parakeet; sin versión para iPhone' },
          { 'App': '[Meetily](/es/power-local-llm/meetily-review)', 'Plataformas': 'macOS, Windows', 'Precio / licencia': 'Freemium / MIT', 'Diferencia clave': 'Notas de reuniones de código abierto con transcripción local y resúmenes con Ollama; también funciona en Windows' },
        ],
        note: 'Confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha antes de elegir.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cuánto cuesta Lyonesse fuera de Estados Unidos?',
            a: 'En las tiendas de la App Store consultadas el 26 de octubre de 2026, los planes mensual, anual y vitalicio Unlimited costaban 8,99 € / 34,99 € / 69,99 € en Alemania, España y Francia, ¥1,300 / ¥5,000 / ¥10,000 en Japón, ₩12,000 / ₩49,000 / ₩99,000 en Corea del Sur y R$ 49,90 / R$ 199,90 / R$ 399,90 en Brasil.',
          },
          {
            q: '¿Necesito permiso para grabar una reunión?',
            a: 'Los términos te hacen único responsable de cumplir las leyes de grabación que te sean aplicables, que en algunos lugares exigen el consentimiento de todos los participantes de la llamada; el creador no asume ninguna responsabilidad por los incumplimientos.',
          },
          {
            q: '¿Cómo funcionan las renovaciones y los reembolsos?',
            a: 'Según los términos, las suscripciones se renuevan automáticamente salvo que las canceles al menos 24 horas antes de que termine el periodo en los ajustes de tu ID de Apple, la compra vitalicia no tiene cargos recurrentes y las compras son definitivas, salvo que la ley exija un reembolso.',
          },
          {
            q: '¿Hay una versión para Windows o Android?',
            a: 'No figura ninguna: la ficha de la App Store cubre solo plataformas Apple, y el sitio del creador no nombra ninguna otra plataforma.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Lyonesse es una forma amplia y con actualizaciones activas de conseguir transcripciones, notas de reuniones y chat con documentos en un iPhone o un Mac, con una grabación gratuita para probarla y una opción de compra vitalicia junto a las suscripciones. En contra, es de código cerrado, procede de un único desarrollador independiente, necesita un sistema operativo de la serie 26, basa sus afirmaciones de privacidad y velocidad en mediciones del propio creador y indica de dos formas distintas la sincronización con iCloud por defecto. Encaja con quienes tienen hardware Apple reciente, quieren notas sin cuenta y pueden probar antes la grabación gratuita; quien grabe material sensible o regulado debería leer por sí mismo la política de privacidad y el ajuste de sincronización antes de fiarse de la app.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Lyonesse en la App Store](https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711) — descripción, historial de versiones, requisitos, etiquetas de privacidad y precios de compras dentro de la app por tienda, comprobado el 26 de octubre de 2026.',
          '[Sitio web de Lyonesse](https://lyonesse.app) — lista de funciones, texto de precios y tabla comparativa, comprobado el 26 de octubre de 2026.',
          '[Política de privacidad de Lyonesse](https://lyonesse.app/privacy.html) — recopilación de datos y sincronización, actualizada por última vez el 9 de octubre de 2026.',
          '[Términos de Lyonesse](https://lyonesse.app/terms.html) — suscripciones, reembolsos y consentimiento para grabar, actualizados por última vez el 28 de octubre de 2025.',
          '[Publicación de la prueba de voz](https://lyonesse.app/blog/parakeet-moss-apple-speech-benchmark.html) y [publicación de la medición de subida de datos](https://lyonesse.app/blog/meeting-notes-upload-measured.html) — las mediciones del propio creador.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Whisper Notes](/es/power-local-llm/whisper-notes-review) — voz a texto sin conexión para iPhone, iPad y Mac.',
          '[Reseña de MacWhisper](/es/power-local-llm/macwhisper-review) — transcripción local con Whisper y Parakeet en el Mac.',
          '[Reseña de Meetily](/es/power-local-llm/meetily-review) — notas de reuniones de código abierto con modelos locales.',
          '[Reseña de Castmates](/es/power-local-llm/castmates-review) — una app de chat con personajes sin conexión para iPhone del mismo vendedor de la App Store.',
          '[Reseña de Pajdo](/es/power-local-llm/pajdo-review) — un compañero de Apple Salud del mismo desarrollador, con preguntas respondidas en el iPhone.',
          '[Herramientas de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — la comparativa de categoría a la que pertenece esta reseña.',
          '[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/lyonesse-review-hero-fr.webp',
    title: 'Test de Lyonesse : transcription IA hors ligne et notes de réunion pour iPhone et Mac',
    seoTitle: 'Test de Lyonesse : transcription IA hors ligne, iPhone/Mac',
    intro:
      'Lyonesse est une application pour iPhone, iPad et Mac qui transcrit des enregistrements, résume des réunions et répond à des questions sur vos notes et documents ; selon son développeur, tout s’exécute sur l’appareil, sans compte. Le téléchargement est gratuit avec un enregistrement inclus, puis l’application se vend par abonnement ou en achat unique à vie. Ce test repose sur la fiche App Store et sur le [site](https://lyonesse.app), la politique de confidentialité, les conditions d’utilisation et deux articles de mesure du développeur, consultés le 26 octobre 2026 ; PromptQuorum n’a pas testé l’application en conditions réelles.',
    metaDescription:
      'Test de Lyonesse : app iPhone, iPad et Mac de transcription IA hors ligne, notes de réunion, chat de documents. 1er enregistrement gratuit ; non testée.',
    twitterDescription:
      'Test de Lyonesse : transcription hors ligne, notes de réunion et chat de documents pour iPhone, iPad et Mac. Prix, confidentialité, prérequis et ce que les sources ne confirment pas.',
    audience:
      'Utilisateurs d’iPhone et de Mac qui veulent une transcription et des notes de réunion privées et ont besoin de savoir ce que les sources confirment, ce que le développeur se contente d’affirmer et ce que cela coûte.',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test lyonesse',
    targetKeywords: [
      'test lyonesse',
      'lyonesse ai transcript and chat',
      'application de transcription hors ligne iphone',
      'notes de réunion privées mac',
      'transcription ia sur l’appareil',
      'notes de réunion ia hors ligne',
      'chat avec pdf hors ligne iphone',
    ],
    current_models_mentioned: ['Apple Speech', 'NVIDIA Parakeet', 'Apple Intelligence'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Watch', 'iPhone 15 Pro'],
    leadAnswerBlock:
      '**Lyonesse (version 2.0.7, mise à jour le 23 octobre 2026) est une application iPhone, iPad et Mac de transcription hors ligne, de notes de réunion et de chat avec vos propres documents.** Selon le développeur, l’audio, les transcriptions et les documents sont traités sur l’appareil et aucun compte n’est nécessaire ; chaque affirmation ici provient de la fiche App Store et des pages du développeur.',
    quickAnswerTop: {
      fr: {
        question: 'Lyonesse fonctionne-t-elle vraiment hors ligne sur iPhone et Mac ?',
        answer:
          'Selon le développeur, oui : une fois les modèles de reconnaissance vocale et d’IA téléchargés, l’enregistrement, la transcription, les résumés et les questions fonctionnent en mode avion. La politique de confidentialité précise que l’audio ne quitte jamais l’appareil, mais que des données d’usage anonymisées et des rapports de plantage sont collectés.',
        bullets: [
          'Transcription en direct avec étiquettes de locuteurs dans 15 langues, via Apple Speech ou NVIDIA Parakeet.',
          'Résumés, points clés et un Action Center qui liste tâches, responsables et échéances.',
          'Ask Lyonesse répond à des questions sur les notes, transcriptions, PDF et images, avec citations.',
          'Sur Mac, elle enregistre le micro et l’audio système : aucun bot de réunion ne rejoint l’appel.',
        ],
        updatedDate: '2026-10-26',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce que Lyonesse ?', anchor: 'what-is-lyonesse' },
      { label: 'Où l’obtenir', anchor: 'get-it' },
      { label: 'Lyonesse en un coup d’œil', anchor: 'at-a-glance' },
      { label: 'Prérequis', anchor: 'requirements' },
      { label: 'Premiers pas', anchor: 'getting-started' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Les mesures du développeur', anchor: 'maker-measurements' },
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
            text: 'Lyonesse est une application à code fermé pour les plateformes Apple qui enregistre ou importe de l’audio et des documents, les transcrit et les résume, et répond à des questions à leur sujet sans compte.',
          },
          {
            type: 'plain-terms',
            text: 'Vous enregistrez un cours ou une réunion, ou vous importez un fichier, et vous obtenez une transcription avec les locuteurs, un résumé et une liste de tâches ; vous pouvez ensuite poser des questions à l’application sur tout ce que vous avez enregistré.',
          },
        ],
        items: [
          'Maintenance : la version 2.0.7 est sortie le 23 octobre 2026, après huit versions depuis le 27 août ; aucun avertissement de projet délaissé ne s’applique.',
          'Coût : gratuite avec un enregistrement ; ensuite, abonnement mensuel ou annuel, ou achat unique à vie.',
          'Prérequis : iOS, iPadOS ou macOS 26.0 ou ultérieur ; l’IA sur l’appareil fonctionne mieux sur du matériel Apple récent.',
          'Éditeur : un développeur indépendant, sans code source publié ; le vendeur App Store propose aussi [Castmates](/fr/power-local-llm/castmates-review).',
          'Preuves : les chiffres de vitesse et de confidentialité sont des mesures du développeur, pas des tests indépendants.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum n’a ni installé l’application, ni enregistré avec elle, ni réalisé de mesures : la qualité des transcriptions et des résumés n’est donc pas évaluée.',
          },
        ],
      },
      overview: {
        id: 'what-is-lyonesse',
        title: 'Qu’est-ce que Lyonesse ?',
        content: [
          '**Lyonesse est une application pour les plateformes Apple qui enregistre ou importe de l’audio, le transcrit, le résume et permet de poser des questions sur vos notes, PDF, fichiers Office et photos, le tout présenté comme exécuté sur l’appareil.** L’App Store la référence sous le nom « Lyonesse: AI Transcript & Chat » dans la catégorie Productivité, vendue par Josip Markovic (copyright « Markovic Software, obrt za usluge ») ; le site, la politique de confidentialité et les conditions n’indiquent ni personne ni société. La fiche est apparue le 31 octobre 2025, et la version 2.0.1, le 3 septembre 2026, a rebaptisé l’application d’Inscribe en Lyonesse.',
          'Le titre sur l’App Store varie selon le pays, par exemple « Lyonesse: KI Transkript & Chat » en Allemagne et « Lyonesse: AI文字起こし・チャット » au Japon ; il s’agit toujours de la même application.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Lyonesse se télécharge sur l’App Store pour iPhone, iPad et Mac ; aucune version Android, Windows ou web n’est proposée.**',
        ],
        columns: ['Option', 'Comment l’obtenir'],
        rows: [
          { 'Option': 'iPhone et iPad', 'Comment l’obtenir': '[Lyonesse sur l’App Store](https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711), gratuite avec achats intégrés' },
          { 'Option': 'Mac', 'Comment l’obtenir': 'Même fiche App Store, macOS 26.0 ou ultérieur selon la fiche' },
          { 'Option': 'Apple Watch', 'Comment l’obtenir': 'App d’enregistrement, watchOS 11.0 ou ultérieur ; ajoutée en version 2.0.5' },
          { 'Option': 'Options payantes', 'Comment l’obtenir': 'Mensuel 8,99 €, annuel 34,99 € ou à vie 69,99 € (App Store français)' },
          { 'Option': 'Site web', 'Comment l’obtenir': '[lyonesse.app](https://lyonesse.app)' },
          { 'Option': 'Confidentialité', 'Comment l’obtenir': '[lyonesse.app/privacy](https://lyonesse.app/privacy.html)' },
          { 'Option': 'Conditions', 'Comment l’obtenir': '[lyonesse.app/terms](https://lyonesse.app/terms.html)' },
          { 'Option': 'Code source', 'Comment l’obtenir': 'Non publié' },
        ],
        note: 'Version testée : 2.0.7, publiée le 23 octobre 2026 selon l’App Store ; l’application pèse 68.9 MB avant le téléchargement des modèles. Le téléchargement gratuit inclut un enregistrement avec toutes les fonctions. Les prix proviennent de l’App Store français et varient selon le pays. PromptQuorum n’a pas installé les versions Mac et Watch.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Lyonesse en un coup d’œil',
        columns: ['Attribut', 'Lyonesse'],
        rows: [
          { 'Attribut': 'Plateforme', 'Lyonesse': 'iPhone, iPad, Mac ; app d’enregistrement Apple Watch' },
          { 'Attribut': 'Prix', 'Lyonesse': 'Premier enregistrement gratuit ; abonnement ou achat à vie' },
          { 'Attribut': 'Licence', 'Lyonesse': 'Propriétaire, code fermé' },
          { 'Attribut': 'Exécution', 'Lyonesse': 'Sur l’appareil ; modèles téléchargés une fois' },
          { 'Attribut': 'Langues', 'Lyonesse': '15 pour la transcription et les résumés' },
          { 'Attribut': 'Transcription en temps réel', 'Lyonesse': 'Oui ; transcription et sous-titres en direct' },
          { 'Attribut': 'Étiquettes de locuteurs', 'Lyonesse': 'Oui' },
          { 'Attribut': 'Utilisable sur CPU seul', 'Lyonesse': 'Non précisé ; matériel Apple uniquement' },
          { 'Attribut': 'Serveur d’API local', 'Lyonesse': 'Non précisé' },
        ],
        note: 'Les attributs suivent le comparatif de reconnaissance vocale utilisé dans l’annuaire des logiciels LLM locaux. L’absence d’indication sur le site signifie « inconnu », pas « non pris en charge ».',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**L’App Store exige au minimum iOS, iPadOS et macOS 26.0, et le développeur indique que l’IA sur l’appareil fonctionne mieux sur du matériel Apple récent.**',
        ],
        columns: ['Élément', 'Ce que disent les sources'],
        rows: [
          { 'Élément': 'Système', 'Ce que disent les sources': 'iOS, iPadOS, macOS et visionOS 26.0 ou ultérieur ; watchOS 11.0 pour l’app Watch (App Store)' },
          { 'Élément': 'Meilleur matériel', 'Ce que disent les sources': 'iPhone 15 Pro ou plus récent, iPad avec puce M, Mac à puce Apple (site du développeur)' },
          { 'Élément': 'Moteurs d’IA', 'Ce que disent les sources': 'Apple Speech ou NVIDIA Parakeet pour la transcription ; Apple Intelligence ou un modèle local téléchargeable pour résumés et chat' },
          { 'Élément': 'Téléchargement des modèles', 'Ce que disent les sources': 'Nécessaire une fois, via le réseau ; l’article de benchmark du développeur indique environ 467 MB pour Parakeet TDT v3' },
          { 'Élément': 'Mémoire', 'Ce que disent les sources': 'Aucune valeur de RAM n’est indiquée nulle part' },
        ],
        note: 'C’est la fiche App Store qui détermine si l’application s’installe ; le site du développeur n’indique aucune version du système.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Les étapes suivent la description du développeur ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Installer et télécharger les modèles',
            whyItMatters: 'Installez Lyonesse depuis l’App Store et laissez-la télécharger une fois ses modèles de reconnaissance vocale et d’IA.',
          },
          {
            title: 'Enregistrer ou importer',
            whyItMatters: 'Enregistrez sur l’iPhone, le Mac ou l’Apple Watch, ou importez de l’audio, des vidéos, des PDF, des fichiers Word, Excel et PowerPoint et des photos.',
          },
          {
            title: 'Relire les notes',
            whyItMatters: 'Lisez la transcription avec les étiquettes de locuteurs, le résumé, les points clés et les tâches de l’Action Center.',
          },
          {
            title: 'Poser des questions et exporter',
            whyItMatters: 'Posez vos questions avec Ask Lyonesse, puis exportez les notes ou envoyez les actions à Rappels d’Apple.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque point ci-dessous provient de la description App Store, de son historique des versions ou du site du développeur ; aucun n’a été testé de manière indépendante.**',
        ],
        items: [
          '**Transcription.** Transcription en direct avec étiquettes de locuteurs dans 15 langues ; la version 2.0.4 a ajouté les sous-titres traduits en direct, le vocabulaire personnalisé et un affichage verbatim propre.',
          '**Résumés et tâches.** Résumés IA, points clés et décisions, plus un Action Center qui extrait tâches, responsables et échéances.',
          '**Ask Lyonesse et chat de documents.** Questions sur les notes, transcriptions, PDF, fichiers Word, Excel, PowerPoint et images, avec citations et OCR sur l’appareil ; les Projets regroupent enregistrements et documents.',
          '**Assistant de réunion.** Liaison au calendrier, sous-titres en direct, alertes de mention de votre nom, comptes rendus rédigés par l’IA et actions envoyées à Rappels d’Apple ; sur Mac, elle enregistre le micro et l’audio système, sans bot dans l’appel.',
          '**Écosystème Apple.** Une app d’enregistrement Watch (version 2.0.5), des widgets, la prise en charge de Siri et des Raccourcis (version 2.0.1) et une synchronisation iCloud facultative.',
        ],
        note: 'La version 2.0.6 a réorganisé l’application en onglets Notes, Tâches et Dossiers, plus la recherche, les réunions étant désormais dans Notes.',
      },
      makerMeasurements: {
        id: 'maker-measurements',
        title: 'Les mesures du développeur',
        content: [
          '**Lyonesse renvoie depuis sa page d’accueil vers deux articles de mesure ; tous deux ont été réalisés par le développeur et aucun n’a été reproduit par PromptQuorum.**',
          'Dans le benchmark vocal, publié le 15 juillet 2026, le développeur a comparé huit moteurs sur le corpus anglais LibriSpeech, sur un seul Apple M2 Pro. Il indique des taux d’erreur de mots sur parole claire et plus bruitée de 2.12 % et 4.56 % pour Apple SpeechAnalyzer, et de 2.51 % et 4.28 % pour Parakeet TDT v3. Il précise aussi que la version 1.8.9 a abandonné Whisper et que le mode automatique privilégie Apple SpeechAnalyzer lorsqu’une langue est prise en charge. L’article indique qu’il ne couvre que l’anglais, de la parole lue issue de livres audio plutôt que des réunions, et une seule machine.',
          'Dans la mesure d’envoi de données, le développeur a diffusé un extrait de réunion de 10 minutes sur un seul Mac et relevé les octets réseau par processus. Il indique que Lyonesse 2.0.4 a envoyé 0.02 MB pendant l’enregistrement, contre 115.7 MB pour Notion AI Meeting Notes 7.39.0. L’article se présente comme un autotest du fournisseur, sur un réseau et un jour, avec deux applications sur cinq prévues, mesurant uniquement les octets et sans audit de sécurité ; il note aussi que Lyonesse a téléchargé une fois environ 18 MB de modèles de détection des locuteurs et synchronisé environ 0.4 MB de texte de notes via iCloud.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**Selon la politique de confidentialité, mise à jour le 9 octobre 2026, les enregistrements audio ne quittent jamais l’appareil, et la transcription, les résumés et l’analyse de documents s’y exécutent, sans envoi de données à des serveurs externes pour le traitement.** Aucun compte n’est requis, et la politique indique que Lyonesse n’intègre aucun service tiers d’analyse, de publicité ou de suivi et ne collecte ni enregistrements, ni transcriptions, ni documents, ni noms, ni e-mails, ni localisation, ni contacts.',
          'Certaines données circulent toutefois. La politique décrit des statistiques d’usage anonymisées (ouvertures de l’app, utilisation des fonctions, type d’appareil, versions du système et de l’app) et des rapports de plantage, sans nommer les outils ni dire comment ils sont envoyés ; les étiquettes de confidentialité de l’App Store listent l’identifiant de l’appareil, l’interaction avec le produit et les données de plantage comme collectés et non liés à vous. Transcriptions et résumés se synchronisent entre vos propres appareils via iCloud, et les sauvegardes de l’appareil incluent les données de l’app. Le développeur indique ne pas exploiter de serveurs de synchronisation et ne pas voir les données iCloud. Apple Intelligence, l’App Store, iCloud et les sauvegardes relèvent des politiques d’Apple.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Il s’agit de déclarations du développeur, pas de résultats d’audit, et le code source n’est pas publié. PromptQuorum n’a pas inspecté le trafic réseau de l’application. La politique et les conditions n’indiquent ni entité juridique ni adresse postale ; le copyright de l’App Store est « Markovic Software, obrt za usluge » et les conditions appliquent le droit croate.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle s’adresse',
        items: [
          '**Étudiants et intervieweurs** qui enregistrent des cours ou des conversations et veulent une transcription, un résumé et une bibliothèque consultable sans compte.',
          '**Utilisateurs de Mac enchaînant les appels** qui veulent des notes sans bot dans la réunion.',
          '**Acheteurs réfractaires aux abonnements** qui veulent une option d’achat à vie après avoir essayé l’enregistrement gratuit.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Précision en pratique.** PromptQuorum n’a rien enregistré ni transcrit : qualité des transcriptions, exactitude des étiquettes de locuteurs, qualité des résumés et couverture des 15 langues ne sont pas évaluées.',
          '**Synchronisation par défaut.** La politique de confidentialité indique que la synchronisation iCloud est activée par défaut, tandis que la description App Store indique que la synchronisation iCloud facultative est désactivée par défaut.',
          '**« Rien ne quitte votre appareil. »** Le site indique que rien n’est envoyé, alors que la politique et les étiquettes de l’App Store décrivent des statistiques anonymisées et des données de plantage ; leur destination n’est pas précisée.',
          '**Matériel requis.** Les conditions, mises à jour le 28 octobre 2025, indiquent que l’application exige un matériel compatible Apple Intelligence, alors que le site présente un modèle local téléchargeable comme alternative.',
          '**Historique.** L’App Store n’affichait que quelques notes lors de la consultation, et l’application s’appelait Inscribe jusqu’au 3 septembre 2026.',
          '**Usage réglementé.** L’adéquation à des enregistrements médicaux, juridiques ou autrement réglementés n’a pas été évaluée.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'Application': '[Whisper Notes](/fr/power-local-llm/whisper-notes-review)', 'Plateformes': 'iPhone, iPad, Mac', 'Prix / licence': 'Achat unique / code fermé', 'Différence clé': 'Transcription hors ligne avec étiquettes de locuteurs, mais sans assistant de réunion ni chat de documents ; le texte apparaît après l’arrêt de l’enregistrement' },
          { 'Application': '[MacWhisper](/fr/power-local-llm/macwhisper-review)', 'Plateformes': 'macOS', 'Prix / licence': 'Freemium / propriétaire', 'Différence clé': 'Application Mac en achat unique pour une transcription locale avec Whisper et Parakeet ; pas de version iPhone' },
          { 'Application': '[Meetily](/fr/power-local-llm/meetily-review)', 'Plateformes': 'macOS, Windows', 'Prix / licence': 'Freemium / MIT', 'Différence clé': 'Notes de réunion open source avec transcription locale et résumés via Ollama ; fonctionne aussi sous Windows' },
        ],
        note: 'Vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre fiche avant de choisir.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Combien coûte Lyonesse en dehors des États-Unis ?',
            a: 'Sur les App Store consultés le 26 octobre 2026, les formules mensuelle, annuelle et à vie (Unlimited) coûtaient 8,99 € / 34,99 € / 69,99 € en Allemagne, en Espagne et en France, 1 300 ¥ / 5 000 ¥ / 10 000 ¥ au Japon, 12 000 ₩ / 49 000 ₩ / 99 000 ₩ en Corée du Sud et 49,90 R$ / 199,90 R$ / 399,90 R$ au Brésil.',
          },
          {
            q: 'Ai-je besoin d’une autorisation pour enregistrer une réunion ?',
            a: 'Les conditions vous rendent seul responsable du respect des lois sur l’enregistrement qui s’appliquent à vous, lesquelles exigent parfois le consentement de tous les participants à l’appel ; le développeur décline toute responsabilité en cas de violation.',
          },
          {
            q: 'Comment fonctionnent les renouvellements et les remboursements ?',
            a: 'Selon les conditions, les abonnements se renouvellent automatiquement sauf résiliation au moins 24 heures avant la fin de la période dans les réglages de votre identifiant Apple, l’achat à vie n’entraîne aucuns frais récurrents, et les achats sont définitifs sauf si la loi impose un remboursement.',
          },
          {
            q: 'Existe-t-il une version Windows ou Android ?',
            a: 'Aucune n’est indiquée : la fiche App Store ne couvre que les plateformes Apple, et le site du développeur ne mentionne aucune autre plateforme.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Lyonesse est un moyen large et activement mis à jour d’obtenir transcriptions, notes de réunion et chat de documents sur un iPhone ou un Mac, avec un enregistrement gratuit pour l’essayer et une option d’achat à vie à côté des abonnements. En contrepartie, son code est fermé, il provient d’un seul développeur indépendant, exige un système de la série 26, appuie ses affirmations de confidentialité et de vitesse sur les mesures du développeur, et présente de deux façons la synchronisation iCloud par défaut. Elle convient aux personnes disposant d’un matériel Apple récent qui veulent des notes sans compte et peuvent d’abord essayer l’enregistrement gratuit ; quiconque enregistre des contenus sensibles ou réglementés doit lire lui-même la politique de confidentialité et le réglage de synchronisation avant de s’y fier.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Lyonesse sur l’App Store](https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711) — description, historique des versions, prérequis, étiquettes de confidentialité et prix des achats intégrés par pays, consultés le 26 octobre 2026.',
          '[Site de Lyonesse](https://lyonesse.app) — liste des fonctions, texte tarifaire et tableau comparatif, consultés le 26 octobre 2026.',
          '[Politique de confidentialité de Lyonesse](https://lyonesse.app/privacy.html) — collecte de données et synchronisation, mise à jour le 9 octobre 2026.',
          '[Conditions d’utilisation de Lyonesse](https://lyonesse.app/terms.html) — abonnements, remboursements et consentement à l’enregistrement, mises à jour le 28 octobre 2025.',
          '[Article de benchmark vocal](https://lyonesse.app/blog/parakeet-moss-apple-speech-benchmark.html) et [article de mesure des envois](https://lyonesse.app/blog/meeting-notes-upload-measured.html) — les mesures du développeur.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Whisper Notes](/fr/power-local-llm/whisper-notes-review) — reconnaissance vocale hors ligne pour iPhone, iPad et Mac.',
          '[Test de MacWhisper](/fr/power-local-llm/macwhisper-review) — transcription locale avec Whisper et Parakeet sur Mac.',
          '[Test de Meetily](/fr/power-local-llm/meetily-review) — notes de réunion open source avec modèles locaux.',
          '[Test de Castmates](/fr/power-local-llm/castmates-review) — une application de chat de personnages hors ligne pour iPhone, du même vendeur App Store.',
          '[Test de Pajdo](/fr/power-local-llm/pajdo-review) — un compagnon Apple Santé du même développeur, dont les questions sont traitées sur l\'iPhone.',
          '[Comparatif des outils voix et audio](/fr/power-local-llm/local-llm-voice-audio-compared) — le comparatif de catégorie auquel appartient ce test.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/lyonesse-review-hero-ja.webp',
    title: 'Lyonesseレビュー：iPhone・Mac向けオフラインAI文字起こしと会議メモ',
    seoTitle: 'Lyonesseレビュー：iPhone・Mac向けオフラインAI文字起こし',
    intro:
      'Lyonesseは、録音の文字起こし、会議の要約、メモやドキュメントに関する質問への回答を行うiPhone・iPad・Mac向けのアプリです。開発者によれば、すべてアカウント不要で端末上で動作します。ダウンロードは無料で、最初の1回の録音が付属し、その後はサブスクリプションまたは買い切りで利用します。このレビューは、2026年10月26日に確認したApp Storeの掲載情報と、開発者の[公式サイト](https://lyonesse.app)、プライバシーポリシー、利用規約、2本の計測記事に基づきます。PromptQuorumは実機でのテストを行っていません。',
    metaDescription:
      'Lyonesseレビュー：iPhone・iPad・Mac向けのオフラインAI文字起こし・会議メモ・ドキュメントチャットアプリ。最初の1回は無料で、買い切りも選べます。未検証の点も解説。',
    twitterDescription:
      'Lyonesseレビュー：iPhone・iPad・Mac向けのオフライン文字起こし、会議メモ、ドキュメントチャット。料金、プライバシー、動作要件、情報源で確認できなかった点。',
    audience:
      'プライベートな文字起こしや会議メモを求めるiPhone・Macユーザー。情報源で確認できる点、開発者の主張にとどまる点、費用を知りたい方向けです。',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'lyonesse レビュー',
    targetKeywords: [
      'lyonesse レビュー',
      'lyonesse ai 文字起こし チャット',
      'オフライン 文字起こし アプリ iphone',
      'プライベート 会議メモ アプリ mac',
      'オンデバイス ai 文字起こし',
      'オフライン ai 議事録',
      'pdf チャット オフライン iphone',
    ],
    current_models_mentioned: ['Apple Speech', 'NVIDIA Parakeet', 'Apple Intelligence'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Watch', 'iPhone 15 Pro'],
    leadAnswerBlock:
      '**Lyonesse（バージョン2.0.7、2026年10月23日更新）は、オフラインでの文字起こし、会議メモ、自分のドキュメントとのチャットに対応したiPhone・iPad・Mac向けアプリです。**開発者によれば、音声、文字起こし、ドキュメントは端末上で処理され、アカウントは不要です。本記事の記載はすべて、App Storeの掲載情報と開発者自身のページに基づきます。',
    quickAnswerTop: {
      ja: {
        question: 'LyonesseはiPhoneやMacで本当にオフラインで使えますか？',
        answer:
          '開発者によれば可能です。音声モデルとAIモデルを一度ダウンロードした後は、録音、文字起こし、要約、質問を機内モードでも利用できます。プライバシーポリシーでは、音声が端末の外に出ることはない一方、匿名化された利用データとクラッシュデータは収集されるとしています。',
        bullets: [
          '15言語に対応し、話者ラベル付きのライブ文字起こしをApple SpeechまたはNVIDIA Parakeetで行います。',
          '要約、要点、タスク・担当者・期限を一覧にするAction Centerを備えます。',
          'Ask Lyonesseは、メモ、文字起こし、PDF、画像をまたいで引用付きで質問に答えます。',
          'Macではマイクとシステム音声を録音するため、会議にボットが参加しません。',
        ],
        updatedDate: '2026-10-26',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Lyonesseとは', anchor: 'what-is-lyonesse' },
      { label: '入手方法', anchor: 'get-it' },
      { label: 'Lyonesseの概要', anchor: 'at-a-glance' },
      { label: '動作要件', anchor: 'requirements' },
      { label: '始め方', anchor: 'getting-started' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: '開発者自身の計測', anchor: 'maker-measurements' },
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
            text: 'Lyonesseは、音声やドキュメントを録音・取り込み、文字起こしと要約を行い、それらに関する質問にアカウントなしで答える、クローズドソースのApple向けアプリです。',
          },
          {
            type: 'plain-terms',
            text: '講義や会議を録音するかファイルを取り込むと、話者付きの文字起こし、要約、タスク一覧が得られ、保存した内容についてアプリに質問できます。',
          },
        ],
        items: [
          'メンテナンス：バージョン2.0.7は2026年10月23日に公開され、8月27日以降に8回のリリースがあるため、更新停止の警告は対象外です。',
          '費用：最初の1回の録音は無料で、その後は月額または年額のサブスクリプション、もしくは買い切りです。',
          '動作要件：iOS、iPadOS、macOS 26.0以降。オンデバイスAIは新しめのApple製ハードウェアで最もよく動作します。',
          '開発元：独立系の開発者で、ソースコードは公開されていません。App Storeの販売元は[Castmates](/ja/power-local-llm/castmates-review)も販売しています。',
          '根拠：速度とプライバシーの数値は開発者自身の計測であり、第三者によるテストではありません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、2026年10月26日に確認したApp Storeの掲載情報と、開発者のサイト、プライバシーポリシー、利用規約、計測記事に基づきます。PromptQuorumはアプリのインストール、録音、ベンチマークを行っていないため、文字起こしや要約の品質は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-lyonesse',
        title: 'Lyonesseとは',
        content: [
          '**Lyonesseは、音声を録音または取り込んで文字起こしと要約を行い、メモ、PDF、Officeファイル、写真について質問できる、Appleプラットフォーム向けのアプリです。いずれも端末上で動作すると説明されています。**App Storeでは「Lyonesse: AI Transcript & Chat」として「仕事効率化」カテゴリに掲載され、販売元はJosip Markovic（著作権表示は「Markovic Software, obrt za usluge」）です。公式サイト、プライバシーポリシー、利用規約には個人名も会社名も記載されていません。掲載が初めて確認できるのは2025年10月31日で、2026年9月3日のバージョン2.0.1でアプリ名がInscribeからLyonesseに変更されました。',
          'App Storeのタイトルはストアごとに異なり、たとえばドイツでは「Lyonesse: KI Transkript & Chat」、日本では「Lyonesse: AI文字起こし・チャット」ですが、いずれも同じアプリです。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**LyonesseはiPhone、iPad、Mac向けにApp Storeから入手します。Android版、Windows版、Web版は掲載されていません。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          { '項目': 'iPhoneとiPad', '入手方法': '[App StoreのLyonesse](https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711)、無料（App内課金あり）' },
          { '項目': 'Mac', '入手方法': '同じApp Storeの掲載ページ。掲載情報ではmacOS 26.0以降' },
          { '項目': 'Apple Watch', '入手方法': 'レコーダーアプリ、watchOS 11.0以降。バージョン2.0.5で追加' },
          { '項目': '有料オプション', '入手方法': '月額¥1,300、年額¥5,000、買い切り¥10,000（日本のApp Store）' },
          { '項目': '公式サイト', '入手方法': '[lyonesse.app](https://lyonesse.app)' },
          { '項目': 'プライバシーポリシー', '入手方法': '[lyonesse.app/privacy](https://lyonesse.app/privacy.html)' },
          { '項目': '利用規約', '入手方法': '[lyonesse.app/terms](https://lyonesse.app/terms.html)' },
          { '項目': 'ソースコード', '入手方法': '非公開' },
        ],
        note: 'レビュー対象のバージョン：2.0.7（App Storeによれば2026年10月23日公開）。モデルのダウンロード前のアプリサイズは68.9 MBです。無料版には、すべての機能を使える録音1回分が含まれます。価格は国や地域のストアによって異なります。PromptQuorumはMac版とWatch版をインストールしていません。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Lyonesseの概要',
        columns: ['項目', 'Lyonesse'],
        rows: [
          { '項目': 'プラットフォーム', 'Lyonesse': 'iPhone、iPad、Mac。Apple Watchレコーダー' },
          { '項目': '価格', 'Lyonesse': '最初の1回は無料。サブスクまたは買い切り' },
          { '項目': 'ライセンス', 'Lyonesse': 'プロプライエタリ、クローズドソース' },
          { '項目': '動作場所', 'Lyonesse': '端末上。モデルは初回のみダウンロード' },
          { '項目': '対応言語', 'Lyonesse': '文字起こしと要約で15言語' },
          { '項目': 'リアルタイム文字起こし', 'Lyonesse': '対応。ライブ文字起こしとライブキャプション' },
          { '項目': '話者ラベル', 'Lyonesse': '対応' },
          { '項目': 'CPUのみで利用可能', 'Lyonesse': '記載なし。Apple製ハードウェアのみ' },
          { '項目': 'ローカルAPIサーバー', 'Lyonesse': '記載なし' },
        ],
        note: '項目は、ローカルLLMソフトウェアディレクトリで使われている音声認識の比較に沿っています。サイトに記載がない場合は、未対応ではなく不明を意味します。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: [
          '**App Storeでは最小要件はiOS、iPadOS、macOS 26.0とされ、開発者はオンデバイスAIが新しめのApple製ハードウェアで最もよく動作するとしています。**',
        ],
        columns: ['項目', '情報源の記載'],
        rows: [
          { '項目': 'OS', '情報源の記載': 'iOS、iPadOS、macOS、visionOS 26.0以降。WatchレコーダーはwatchOS 11.0（App Store）' },
          { '項目': '推奨ハードウェア', '情報源の記載': 'iPhone 15 Pro以降、Mシリーズ搭載のiPad、AppleシリコンのMac（開発者のサイト）' },
          { '項目': 'AIエンジン', '情報源の記載': '文字起こしはApple SpeechまたはNVIDIA Parakeet。要約とチャットはApple Intelligenceまたはダウンロード型ローカルモデル' },
          { '項目': 'モデルのダウンロード', '情報源の記載': 'ネットワーク経由で一度だけ必要。開発者のベンチマーク記事ではParakeet TDT v3は約467 MB' },
          { '項目': 'メモリ', '情報源の記載': 'RAMの数値はどこにも記載されていません' },
        ],
        note: 'アプリをインストールできるかどうかを決めるのはApp Storeの記載です。開発者のサイトにはOSのバージョンの記載がありません。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**以下の手順は開発者自身の説明に沿ったもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'インストールしてモデルをダウンロードする',
            whyItMatters: 'App StoreからLyonesseをインストールし、音声モデルとAIモデルを一度ダウンロードします。',
          },
          {
            title: '録音または取り込みをする',
            whyItMatters: 'iPhone、Mac、Apple Watchで録音するか、音声、動画、PDF、Word・Excel・PowerPointファイル、写真を取り込みます。',
          },
          {
            title: 'メモを確認する',
            whyItMatters: '話者ラベル付きの文字起こし、要約、要点、Action Centerのタスクを確認します。',
          },
          {
            title: '質問して書き出す',
            whyItMatters: 'Ask Lyonesseで質問し、メモを書き出すか、アクションアイテムをApple リマインダーに送ります。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下の項目はすべてApp Storeの説明文、バージョン履歴、または開発者のサイトによるもので、独自のテストは行っていません。**',
        ],
        items: [
          '**文字起こし。**15言語で話者ラベル付きのライブ文字起こしに対応。バージョン2.0.4でライブ翻訳キャプション、カスタム語彙、クリーンな逐語表示が追加されました。',
          '**要約とタスク。**AIによる要約、要点、決定事項に加え、タスク、担当者、期限を抽出するAction Centerがあります。',
          '**Ask Lyonesseとドキュメントチャット。**メモ、文字起こし、PDF、Word、Excel、PowerPoint、画像をまたいで、引用付きで質問できます。オンデバイスOCRにも対応し、Projectsで録音とドキュメントをまとめられます。',
          '**会議アシスタント。**カレンダー連携、ライブキャプション、名前呼びかけの通知、AIによる議事録の下書き、Apple リマインダーへのアクションアイテム送信に対応します。Macではマイクとシステム音声を録音するため、ボットが会議に参加しません。',
          '**Appleのエコシステム。**Watchレコーダー（バージョン2.0.5）、ウィジェット、Siriとショートカットのサポート（バージョン2.0.1）、オプションのiCloud同期に対応します。',
        ],
        note: 'バージョン2.0.6で、アプリはメモ、タスク、フォルダの3つのタブと検索に整理され、会議はメモの中に含まれるようになりました。',
      },
      makerMeasurements: {
        id: 'maker-measurements',
        title: '開発者自身の計測',
        content: [
          '**Lyonesseはホームページから2本の計測記事にリンクしています。どちらも開発者自身が実施したもので、PromptQuorumによる再現は行っていません。**',
          '2026年7月15日公開の音声認識ベンチマークでは、開発者が英語のLibriSpeechコーパスで8つのエンジンを、Apple M2 Pro 1台で比較しています。クリーンな音声とノイズの多い音声での単語誤り率は、Apple SpeechAnalyzerが2.12%と4.56%、Parakeet TDT v3が2.51%と4.28%と報告されています。また、バージョン1.8.9でWhisperを廃止し、言語が対応している場合は自動モードがApple SpeechAnalyzerを優先するとしています。記事自体が、対象は英語のみで、会議ではなく朗読音声であり、マシンは1台だけだと明記しています。',
          '送信量の計測では、開発者が10分間の会議クリップをMac 1台で再生し、プロセスごとのネットワークバイト数を記録しています。録音中に送信したのは、Lyonesse 2.0.4が0.02 MB、Notion AI Meeting Notes 7.39.0が115.7 MBと報告されています。この記事は、1日・1つのネットワークでのベンダー自身のテストで、予定した5アプリのうち2つのみ、バイト数だけで、セキュリティ監査ではないと自ら説明しています。また、Lyonesseは話者検出モデル約18 MBを一度ダウンロードし、メモのテキスト約0.4 MBをiCloudで同期したとも記しています。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**2026年10月9日に最終更新されたプライバシーポリシーによれば、音声の録音が端末の外に出ることはなく、文字起こし、要約、ドキュメント解析は端末上で実行され、処理のために外部サーバーへデータが送られることはありません。**アカウントは不要で、ポリシーでは、Lyonesseはサードパーティのアナリティクス、広告、トラッキングサービスを組み込んでおらず、録音、文字起こし、ドキュメント、氏名、メールアドレス、位置情報、連絡先を収集しないとしています。',
          '一方で、一部のデータは移動します。ポリシーには、匿名化された利用統計（アプリの起動、機能の利用、端末の種類、システムとアプリのバージョン）とクラッシュレポートが記載されていますが、ツール名や送信方法は示されていません。App Storeのプライバシーラベルでは、デバイスID、製品の操作、クラッシュデータが収集され、ユーザーには紐づけられないと記載されています。文字起こしと要約は、お持ちのデバイス間でiCloud経由で同期され、デバイスのバックアップにはアプリのデータが含まれます。開発者は、同期用のサーバーを運用しておらず、iCloudのデータを見ることはできないとしています。Apple Intelligence、App Store、iCloud、バックアップにはAppleのポリシーが適用されます。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発者の申告であり監査結果ではなく、ソースコードも公開されていません。PromptQuorumはアプリのネットワーク通信を調べていません。ポリシーと利用規約には法人名も所在地も記載されていません。App Storeの著作権表示は「Markovic Software, obrt za usluge」で、利用規約にはクロアチア法が適用されるとあります。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**学生やインタビュアー。**講義や会話を録音し、アカウントなしで文字起こし、要約、検索できるライブラリが欲しい方。',
          '**通話の多いMacユーザー。**ボットを会議に参加させずにメモを取りたい方。',
          '**サブスクリプションを避けたい方。**無料の1回の録音を試したうえで、買い切りの選択肢が欲しい方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実際の精度。**PromptQuorumは録音も文字起こしも行っていないため、文字起こしの品質、話者ラベルの精度、要約の品質、15言語すべての対応状況は評価していません。',
          '**同期の初期設定。**プライバシーポリシーではiCloud同期は初期状態でオンとされている一方、App Storeの説明文ではオプションのiCloud同期は初期状態でオフとされています。',
          '**「データは端末の外に出ません」。**サイトでは何もアップロードされないとされていますが、ポリシーとApp Storeのラベルでは匿名化された分析データとクラッシュデータが記載されており、その送信先は示されていません。',
          '**ハードウェア要件。**2025年10月28日に最終更新された利用規約では、アプリにはApple Intelligence対応のハードウェアが必要とされている一方、サイトではダウンロード型のローカルモデルが代替手段として説明されています。',
          '**実績。**確認時点でApp Storeの評価は少数にとどまり、アプリは2026年9月3日までInscribeという名前でした。',
          '**規制対象の用途。**医療、法律などの規制対象となる録音への適合性は評価していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[Whisper Notes](/ja/power-local-llm/whisper-notes-review)', '対応プラットフォーム': 'iPhone、iPad、Mac', '価格／ライセンス': '買い切り／クローズドソース', '主な違い': '話者ラベル付きのオフライン文字起こし。会議アシスタントやドキュメントチャットはなく、録音を止めた後にテキストが表示される' },
          { 'アプリ': '[MacWhisper](/ja/power-local-llm/macwhisper-review)', '対応プラットフォーム': 'macOS', '価格／ライセンス': 'フリーミアム／プロプライエタリ', '主な違い': 'ローカルのWhisperとParakeetで文字起こしする買い切りのMacアプリ。iPhone版はなし' },
          { 'アプリ': '[Meetily](/ja/power-local-llm/meetily-review)', '対応プラットフォーム': 'macOS、Windows', '価格／ライセンス': 'フリーミアム／MIT', '主な違い': 'ローカル文字起こしとOllamaによる要約に対応したオープンソースの会議メモ。Windowsでも動作する' },
        ],
        note: '選ぶ前に、各アプリの最新の価格、ライセンス、対応プラットフォームをそれぞれの掲載ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '米国以外ではLyonesseの料金はいくらですか？',
            a: '2026年10月26日に確認したApp Storeの各ストアでは、月額／年額／買い切り（Unlimited）は、ドイツ・スペイン・フランスで€8.99／€34.99／€69.99、日本で¥1,300／¥5,000／¥10,000、韓国で₩12,000／₩49,000／₩99,000、ブラジルでR$49.90／R$199.90／R$399.90でした。',
          },
          {
            q: '会議を録音するのに許可は必要ですか？',
            a: '利用規約では、適用される録音に関する法律の順守はご自身の責任とされており、地域によっては通話の参加者全員の同意が必要です。違反について開発者は責任を負わないとしています。',
          },
          {
            q: '更新と返金はどうなっていますか？',
            a: '利用規約によれば、サブスクリプションは、期間終了の24時間前までにApple IDの設定で解約しない限り自動更新されます。買い切りには継続課金がなく、法律で返金が義務付けられている場合を除き、購入は最終的なものです。',
          },
          {
            q: 'WindowsやAndroid版はありますか？',
            a: '掲載されていません。App Storeの掲載ページはAppleプラットフォームのみが対象で、開発者のサイトにも他のプラットフォームの記載はありません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Lyonesseは、iPhoneやMacで文字起こし、会議メモ、ドキュメントチャットを手に入れるための、幅広く活発に更新されているアプリです。試せる無料の録音が1回あり、サブスクリプションと並んで買い切りの選択肢もあります。一方で、クローズドソースで、開発者は独立系の1人であり、26系のOSが必要で、プライバシーと速度に関する主張は開発者自身の計測に基づき、iCloud同期の初期設定の説明も2通りあります。新しめのApple製ハードウェアを使い、アカウント不要のメモを求め、先に無料の録音を試せる方に向いています。機密性の高い内容や規制対象の内容を録音する方は、利用する前にプライバシーポリシーと同期設定をご自身で確認してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[App StoreのLyonesse](https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711) — 説明文、バージョン履歴、動作要件、プライバシーラベル、ストアごとのApp内課金価格（2026年10月26日確認）。',
          '[Lyonesse公式サイト](https://lyonesse.app) — 機能一覧、料金の説明、比較表（2026年10月26日確認）。',
          '[Lyonesseプライバシーポリシー](https://lyonesse.app/privacy.html) — データ収集と同期（2026年10月9日最終更新）。',
          '[Lyonesse利用規約](https://lyonesse.app/terms.html) — サブスクリプション、返金、録音の同意（2025年10月28日最終更新）。',
          '[音声認識ベンチマーク記事](https://lyonesse.app/blog/parakeet-moss-apple-speech-benchmark.html)と[送信量の計測記事](https://lyonesse.app/blog/meeting-notes-upload-measured.html) — 開発者自身による計測。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Whisper Notesレビュー](/ja/power-local-llm/whisper-notes-review) — iPhone、iPad、Mac向けのオフライン音声認識。',
          '[MacWhisperレビュー](/ja/power-local-llm/macwhisper-review) — Mac上でのローカルWhisperとParakeetによる文字起こし。',
          '[Meetilyレビュー](/ja/power-local-llm/meetily-review) — ローカルモデルを使うオープンソースの会議メモ。',
          '[Castmatesレビュー](/ja/power-local-llm/castmates-review) — 同じApp Store販売元によるオフラインのiPhoneキャラクターチャットアプリ。',
          '[Pajdoレビュー](/ja/power-local-llm/pajdo-review) — 同じ開発者によるApple Healthコンパニオン。質問への回答はiPhone上で行われます。',
          '[音声・オーディオツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — このレビューが属するカテゴリの比較記事。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/lyonesse-review-hero-pt.webp',
    title: 'Análise do Lyonesse: transcrição e notas de reunião com IA offline para iPhone e Mac',
    seoTitle: 'Análise do Lyonesse: transcrição com IA offline no iPhone',
    intro:
      'O Lyonesse é um app para iPhone, iPad e Mac que transcreve gravações, resume reuniões e responde a perguntas sobre suas notas e seus documentos e, segundo o desenvolvedor, faz tudo isso no próprio aparelho, sem conta. O download é gratuito e inclui uma gravação; depois, o app é vendido por assinatura ou por uma compra vitalícia única. Esta análise se baseia na página da App Store e no [site](https://lyonesse.app), na política de privacidade, nos termos e em duas publicações de medição do desenvolvedor, verificados em 26 de outubro de 2026; a PromptQuorum não testou o app na prática.',
    metaDescription:
      'Análise do Lyonesse: app para iPhone, iPad e Mac de transcrição com IA offline, notas de reunião e chat com documentos. 1ª gravação grátis; sem teste.',
    twitterDescription:
      'Análise do Lyonesse: transcrição offline, notas de reunião e chat com documentos para iPhone, iPad e Mac. Preços, privacidade, requisitos e o que as fontes não confirmam.',
    audience:
      'Usuários de iPhone e Mac que querem transcrição e notas de reunião privadas e precisam saber o que as fontes confirmam, o que o desenvolvedor apenas afirma e quanto custa.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do lyonesse',
    targetKeywords: [
      'análise lyonesse',
      'lyonesse ai transcript e chat',
      'app de transcrição offline para iphone',
      'app de notas de reunião privado para mac',
      'transcrição com ia no aparelho',
      'notas de reunião com ia offline',
      'chat com pdf offline no iphone',
    ],
    current_models_mentioned: ['Apple Speech', 'NVIDIA Parakeet', 'Apple Intelligence'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Watch', 'iPhone 15 Pro'],
    leadAnswerBlock:
      '**O Lyonesse (versão 2.0.7, atualizada em 23 de outubro de 2026) é um app para iPhone, iPad e Mac de transcrição offline, notas de reunião e chat com seus próprios documentos.** O desenvolvedor afirma que áudio, transcrições e documentos são processados no aparelho e que não é preciso criar conta; tudo o que consta aqui vem da página da App Store e das páginas do próprio desenvolvedor.',
    quickAnswerTop: {
      pt: {
        question: 'O Lyonesse realmente funciona offline no iPhone e no Mac?',
        answer:
          'Segundo o desenvolvedor, sim: depois de um download único dos modelos de fala e de IA, gravação, transcrição, resumos e perguntas funcionam no modo avião. A política de privacidade acrescenta que o áudio nunca sai do aparelho, enquanto dados anônimos de uso e de falhas são coletados.',
        bullets: [
          'Transcrição ao vivo com rótulos de falante em 15 idiomas, com Apple Speech ou NVIDIA Parakeet.',
          'Resumos, pontos-chave e uma Central de ações que lista tarefas, responsáveis e prazos.',
          'O Ask Lyonesse responde a perguntas sobre notas, transcrições, PDFs e imagens, com citações.',
          'No Mac, ele grava o microfone e o áudio do sistema, então nenhum bot entra na chamada.',
        ],
        updatedDate: '2026-10-26',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Lyonesse?', anchor: 'what-is-lyonesse' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'Lyonesse em resumo', anchor: 'at-a-glance' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'As medições do próprio desenvolvedor', anchor: 'maker-measurements' },
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
            text: 'O Lyonesse é um app de código fechado para plataformas Apple que grava ou importa áudio e documentos, transcreve e resume o conteúdo e responde a perguntas sobre ele, sem exigir conta.',
          },
          {
            type: 'plain-terms',
            text: 'Você grava uma aula ou reunião, ou importa um arquivo, e recebe uma transcrição com os falantes, um resumo e uma lista de tarefas; depois, pode fazer perguntas ao app sobre tudo o que salvou.',
          },
        ],
        items: [
          'Manutenção: a versão 2.0.7 foi lançada em 23 de outubro de 2026, após oito versões desde 27 de agosto, então não se aplica nenhum aviso de projeto parado.',
          'Custo: grátis com uma gravação; depois, assinatura mensal ou anual ou uma compra vitalícia única.',
          'Requisitos: iOS, iPadOS ou macOS 26.0 ou posterior; a IA no aparelho funciona melhor em hardware Apple recente.',
          'Desenvolvedor: independente, sem código-fonte publicado; o vendedor na App Store também vende o [Castmates](/pt/power-local-llm/castmates-review).',
          'Evidências: os números de velocidade e de privacidade são medições do próprio desenvolvedor, não testes independentes.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A PromptQuorum não instalou o app, não gravou com ele nem o submeteu a benchmarks, então a qualidade da transcrição e dos resumos não é avaliada.',
          },
        ],
      },
      overview: {
        id: 'what-is-lyonesse',
        title: 'O que é o Lyonesse?',
        content: [
          '**O Lyonesse é um app para plataformas Apple que grava ou importa áudio, transcreve, resume e permite fazer perguntas sobre suas notas, PDFs, arquivos do Office e fotos, tudo descrito como executado no aparelho.** A App Store o lista como "Lyonesse: AI Transcript & Chat" na categoria Produtividade, do vendedor Josip Markovic (copyright "Markovic Software, obrt za usluge"); o site, a política de privacidade e os termos não citam nenhuma pessoa nem empresa. A página apareceu pela primeira vez em 31 de outubro de 2025, e a versão 2.0.1, de 3 de setembro de 2026, mudou o nome do app de Inscribe para Lyonesse.',
          'O título na App Store varia conforme a loja, por exemplo "Lyonesse: KI Transkript & Chat" na Alemanha e "Lyonesse: AI文字起こし・チャット" no Japão; todos se referem ao mesmo app.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Lyonesse é baixado pela App Store para iPhone, iPad e Mac; não há versão listada para Android, Windows ou web.**',
        ],
        columns: ['Opção', 'Onde obter'],
        rows: [
          { 'Opção': 'iPhone e iPad', 'Onde obter': '[Lyonesse na App Store](https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711), grátis com compras no app' },
          { 'Opção': 'Mac', 'Onde obter': 'Mesma página da App Store, macOS 26.0 ou posterior segundo a página' },
          { 'Opção': 'Apple Watch', 'Onde obter': 'App gravador, watchOS 11.0 ou posterior; adicionado na versão 2.0.5' },
          { 'Opção': 'Opções pagas', 'Onde obter': 'Mensal R$ 49,90, anual R$ 199,90 ou vitalícia R$ 399,90 (loja brasileira)' },
          { 'Opção': 'Site', 'Onde obter': '[lyonesse.app](https://lyonesse.app)' },
          { 'Opção': 'Política de privacidade', 'Onde obter': '[lyonesse.app/privacy](https://lyonesse.app/privacy.html)' },
          { 'Opção': 'Termos', 'Onde obter': '[lyonesse.app/terms](https://lyonesse.app/terms.html)' },
          { 'Opção': 'Código-fonte', 'Onde obter': 'Não publicado' },
        ],
        note: 'Versão analisada: 2.0.7, lançada em 23 de outubro de 2026 segundo a App Store; o app tem 68.9 MB antes do download dos modelos. O download gratuito inclui uma gravação com todos os recursos. Os preços são da loja brasileira e variam conforme o país. A PromptQuorum não instalou as versões para Mac e Watch.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Lyonesse em resumo',
        columns: ['Atributo', 'Lyonesse'],
        rows: [
          { 'Atributo': 'Plataforma', 'Lyonesse': 'iPhone, iPad, Mac; gravador para Apple Watch' },
          { 'Atributo': 'Preço', 'Lyonesse': 'Primeira gravação grátis; assinatura ou vitalícia' },
          { 'Atributo': 'Licença', 'Lyonesse': 'Proprietária, código fechado' },
          { 'Atributo': 'Execução', 'Lyonesse': 'No aparelho; modelos baixados uma vez' },
          { 'Atributo': 'Idiomas', 'Lyonesse': '15 para transcrição e resumos' },
          { 'Atributo': 'Transcrição em tempo real', 'Lyonesse': 'Sim; transcrição e legendas ao vivo' },
          { 'Atributo': 'Rótulos de falante', 'Lyonesse': 'Sim' },
          { 'Atributo': 'Utilizável só com CPU', 'Lyonesse': 'Não informado; apenas hardware Apple' },
          { 'Atributo': 'Servidor de API local', 'Lyonesse': 'Não informado' },
        ],
        note: 'Os atributos seguem a comparação de voz para texto usada no diretório de software de LLM local. Uma informação ausente no site significa «desconhecido», não «sem suporte».',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**A App Store indica iOS, iPadOS e macOS 26.0 como mínimo, e o desenvolvedor diz que a IA no aparelho funciona melhor em hardware Apple recente.**',
        ],
        columns: ['Item', 'O que as fontes dizem'],
        rows: [
          { 'Item': 'Sistema operacional', 'O que as fontes dizem': 'iOS, iPadOS, macOS e visionOS 26.0 ou posterior; watchOS 11.0 para o gravador do Watch (App Store)' },
          { 'Item': 'Melhor hardware', 'O que as fontes dizem': 'iPhone 15 Pro ou posterior, iPad com chip da série M, Mac com Apple silicon (site do desenvolvedor)' },
          { 'Item': 'Mecanismos de IA', 'O que as fontes dizem': 'Apple Speech ou NVIDIA Parakeet para transcrição; Apple Intelligence ou um modelo local baixável para resumos e chat' },
          { 'Item': 'Download dos modelos', 'O que as fontes dizem': 'Necessário uma vez, pela rede; a publicação de benchmark do desenvolvedor indica cerca de 467 MB para o Parakeet TDT v3' },
          { 'Item': 'Memória', 'O que as fontes dizem': 'Nenhuma fonte informa a quantidade de RAM' },
        ],
        note: 'Quem decide se o app é instalado é a página da App Store; o site do desenvolvedor não indica nenhuma versão do sistema operacional.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Os passos seguem a descrição do próprio desenvolvedor; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Instale e baixe os modelos',
            whyItMatters: 'Instale o Lyonesse pela App Store e deixe que ele baixe os modelos de fala e de IA uma única vez.',
          },
          {
            title: 'Grave ou importe',
            whyItMatters: 'Grave no iPhone, no Mac ou no Apple Watch, ou importe áudio, vídeo, PDFs, arquivos do Word, Excel e PowerPoint e fotos.',
          },
          {
            title: 'Revise as notas',
            whyItMatters: 'Leia a transcrição com rótulos de falante, o resumo, os pontos-chave e as tarefas na Central de ações.',
          },
          {
            title: 'Pergunte e exporte',
            whyItMatters: 'Faça perguntas com o Ask Lyonesse e depois exporte as notas ou envie as ações ao app Lembretes da Apple.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Tudo o que está abaixo vem da descrição na App Store, do histórico de versões ou do site do desenvolvedor; nada foi testado de forma independente.**',
        ],
        items: [
          '**Transcrição.** Transcrição ao vivo com rótulos de falante em 15 idiomas; a versão 2.0.4 acrescentou legendas traduzidas ao vivo, vocabulário personalizado e uma visualização literal limpa.',
          '**Resumos e tarefas.** Resumos com IA, pontos-chave e decisões, além de uma Central de ações que extrai tarefas, responsáveis e prazos.',
          '**Ask Lyonesse e chat com documentos.** Perguntas sobre notas, transcrições, PDFs, Word, Excel, PowerPoint e imagens, com citações e OCR no aparelho; os Projetos agrupam gravações e documentos.',
          '**Assistente de reuniões.** Vínculo com o calendário, legendas ao vivo, alertas de menção ao seu nome, atas redigidas por IA e ações enviadas ao app Lembretes da Apple; no Mac, grava o microfone e o áudio do sistema, então nenhum bot entra na chamada.',
          '**Ecossistema Apple.** Um gravador para o Watch (versão 2.0.5), widgets, suporte a Siri e Atalhos (versão 2.0.1) e sincronização opcional pelo iCloud.',
        ],
        note: 'A versão 2.0.6 reorganizou o app em abas Notas, Tarefas e Pastas mais Busca, com as reuniões agora dentro de Notas.',
      },
      makerMeasurements: {
        id: 'maker-measurements',
        title: 'As medições do próprio desenvolvedor',
        content: [
          '**A página inicial do Lyonesse aponta para duas publicações de medição; ambas foram feitas pelo próprio desenvolvedor e nenhuma foi reproduzida pela PromptQuorum.**',
          'No benchmark de fala, publicado em 15 de julho de 2026, o desenvolvedor comparou oito mecanismos no corpus inglês LibriSpeech, em um único Apple M2 Pro. Ele informa taxas de erro de palavras em fala limpa e mais ruidosa de 2.12% e 4.56% para o Apple SpeechAnalyzer e de 2.51% e 4.28% para o Parakeet TDT v3. Informa também que a versão 1.8.9 removeu o Whisper e que o modo automático prefere o Apple SpeechAnalyzer quando o idioma é compatível. A publicação afirma que cobre apenas inglês, fala lida de audiolivros e não reuniões, e uma só máquina.',
          'Na medição de envio de dados, o desenvolvedor reproduziu um trecho de reunião de 10 minutos em um Mac e registrou os bytes de rede por processo. Ele informa que o Lyonesse 2.0.4 enviou 0.02 MB durante a gravação, contra 115.7 MB do Notion AI Meeting Notes 7.39.0. A publicação se descreve como um autoteste do fabricante, em uma rede e em um dia, com dois de cinco apps planejados, só bytes e sem auditoria de segurança, e observa que o Lyonesse também baixou uma vez cerca de 18 MB de modelos de detecção de falantes e sincronizou cerca de 0.4 MB de texto de notas pelo iCloud.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**A política de privacidade, atualizada pela última vez em 9 de outubro de 2026, diz que as gravações de áudio nunca saem do aparelho e que a transcrição, os resumos e a análise de documentos são executados nele, sem envio de dados a servidores externos para processamento.** Não é preciso conta, e a política afirma que o Lyonesse não integra serviços de análise, publicidade ou rastreamento de terceiros e não coleta gravações, transcrições, documentos, nomes, e-mails, localização nem contatos.',
          'Alguns dados, porém, se movem. A política descreve estatísticas de uso anonimizadas (aberturas do app, uso de recursos, tipo de aparelho, versão do sistema e do app) e relatórios de falhas, sem citar as ferramentas nem como são enviados; os rótulos de privacidade da App Store listam ID do dispositivo, interação com o produto e dados de falhas como coletados e não vinculados a você. Transcrições e resumos são sincronizados entre os seus próprios aparelhos pelo iCloud, e os backups do aparelho incluem os dados do app. O desenvolvedor diz que não mantém servidores de sincronização e não vê os dados do iCloud. Apple Intelligence, App Store, iCloud e backups seguem as políticas da própria Apple.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas são declarações do desenvolvedor, não resultados de auditoria, e o código-fonte não é publicado. A PromptQuorum não inspecionou o tráfego de rede do app. A política e os termos não citam nenhuma entidade jurídica nem endereço postal; a linha de copyright da App Store diz "Markovic Software, obrt za usluge" e os termos aplicam a lei croata.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Estudantes e entrevistadores** que gravam aulas ou conversas e querem transcrição, resumo e biblioteca pesquisável sem conta.',
          '**Usuários de Mac com muitas chamadas** que querem notas sem que um bot entre na reunião.',
          '**Quem não gosta de assinaturas** e quer uma opção de compra vitalícia depois de testar a gravação gratuita.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Precisão na prática.** A PromptQuorum não gravou nem transcreveu nada, então a qualidade da transcrição, a precisão dos rótulos de falante, a qualidade dos resumos e a cobertura dos 15 idiomas não são avaliadas.',
          '**Padrão da sincronização.** A política de privacidade diz que a sincronização pelo iCloud vem ativada por padrão, enquanto a descrição na App Store diz que a sincronização opcional pelo iCloud vem desativada por padrão.',
          '**"Nada sai do seu aparelho."** O site diz que nada é enviado, enquanto a política e os rótulos da App Store descrevem análises anonimizadas e dados de falhas; não se informa para onde eles vão.',
          '**Requisito de hardware.** Os termos, atualizados pela última vez em 28 de outubro de 2025, dizem que o app exige hardware compatível com o Apple Intelligence, enquanto o site descreve um modelo local baixável como alternativa.',
          '**Histórico.** A App Store mostrava apenas algumas avaliações quando conferimos, e o app se chamou Inscribe até 3 de setembro de 2026.',
          '**Uso regulamentado.** A adequação para gravações médicas, jurídicas ou de outras áreas regulamentadas não foi avaliada.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[Whisper Notes](/pt/power-local-llm/whisper-notes-review)', 'Plataformas': 'iPhone, iPad, Mac', 'Preço / licença': 'Pagamento único / código fechado', 'Diferença principal': 'Transcrição offline com rótulos de falante, mas sem assistente de reuniões nem chat com documentos; o texto aparece depois que você para de gravar' },
          { 'App': '[MacWhisper](/pt/power-local-llm/macwhisper-review)', 'Plataformas': 'macOS', 'Preço / licença': 'Freemium / proprietário', 'Diferença principal': 'App para Mac de pagamento único para transcrição local com Whisper e Parakeet; sem versão para iPhone' },
          { 'App': '[Meetily](/pt/power-local-llm/meetily-review)', 'Plataformas': 'macOS, Windows', 'Preço / licença': 'Freemium / MIT', 'Diferença principal': 'Notas de reunião de código aberto com transcrição local e resumos pelo Ollama; também roda no Windows' },
        ],
        note: 'Confirme o preço, a licença e as plataformas atuais de cada app na página dele antes de escolher.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Quanto o Lyonesse custa fora dos Estados Unidos?',
            a: 'Nas lojas da App Store conferidas em 26 de outubro de 2026, os planos Mensal / Anual / Unlimited vitalício custavam 8,99 € / 34,99 € / 69,99 € na Alemanha, Espanha e França, ¥1,300 / ¥5,000 / ¥10,000 no Japão, ₩12,000 / ₩49,000 / ₩99,000 na Coreia do Sul e R$ 49,90 / R$ 199,90 / R$ 399,90 no Brasil.',
          },
          {
            q: 'Preciso de permissão para gravar uma reunião?',
            a: 'Os termos tornam você o único responsável por cumprir as leis de gravação que valem para você, que em alguns lugares exigem o consentimento de todos na chamada; o desenvolvedor não assume responsabilidade por violações.',
          },
          {
            q: 'Como funcionam as renovações e os reembolsos?',
            a: 'Segundo os termos, as assinaturas são renovadas automaticamente, a menos que sejam canceladas pelo menos 24 horas antes do fim do período nos ajustes do seu ID Apple; a compra vitalícia não tem cobranças recorrentes, e as compras são definitivas, salvo quando a lei exigir reembolso.',
          },
          {
            q: 'Existe versão para Windows ou Android?',
            a: 'Nenhuma é listada: a página da App Store cobre apenas plataformas Apple, e o site do desenvolvedor não cita nenhuma outra plataforma.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O Lyonesse é uma forma ampla e ativamente atualizada de ter transcrições, notas de reunião e chat com documentos no iPhone ou no Mac, com uma gravação gratuita para testar e uma compra vitalícia ao lado das assinaturas. Em contrapartida, tem código fechado, vem de um único desenvolvedor independente, exige um sistema operacional da série 26, baseia as afirmações de privacidade e velocidade nas medições do próprio desenvolvedor e descreve o padrão da sincronização pelo iCloud de duas maneiras diferentes. Serve para quem tem hardware Apple recente, quer notas sem conta e pode testar primeiro a gravação gratuita; quem grava material sensível ou regulamentado deve ler a política de privacidade e conferir a configuração de sincronização por conta própria antes de confiar no app.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Lyonesse na App Store](https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711) — descrição, histórico de versões, requisitos, rótulos de privacidade e preços das compras no app por loja, conferidos em 26 de outubro de 2026.',
          '[Site do Lyonesse](https://lyonesse.app) — lista de recursos, texto de preços e tabela comparativa, conferidos em 26 de outubro de 2026.',
          '[Política de privacidade do Lyonesse](https://lyonesse.app/privacy.html) — coleta de dados e sincronização, atualizada pela última vez em 9 de outubro de 2026.',
          '[Termos do Lyonesse](https://lyonesse.app/terms.html) — assinaturas, reembolsos e consentimento para gravação, atualizados pela última vez em 28 de outubro de 2025.',
          '[Publicação do benchmark de fala](https://lyonesse.app/blog/parakeet-moss-apple-speech-benchmark.html) e [publicação da medição de envio de dados](https://lyonesse.app/blog/meeting-notes-upload-measured.html) — as medições do próprio desenvolvedor.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Whisper Notes](/pt/power-local-llm/whisper-notes-review) — transcrição de fala offline para iPhone, iPad e Mac.',
          '[Análise do MacWhisper](/pt/power-local-llm/macwhisper-review) — transcrição local com Whisper e Parakeet no Mac.',
          '[Análise do Meetily](/pt/power-local-llm/meetily-review) — notas de reunião de código aberto com modelos locais.',
          '[Análise do Castmates](/pt/power-local-llm/castmates-review) — um app de chat com personagens offline para iPhone, do mesmo vendedor na App Store.',
          '[Análise do Pajdo](/pt/power-local-llm/pajdo-review) — um companheiro do Apple Saúde do mesmo desenvolvedor, com as perguntas respondidas no iPhone.',
          '[Ferramentas de voz e áudio comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — a comparação de categoria à qual esta análise pertence.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA locais.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/lyonesse-review-hero-ar.webp',
    title: 'مراجعة Lyonesse: تفريغ صوتي ومحاضر اجتماعات بالذكاء الاصطناعي دون اتصال على أجهزة Apple',
    seoTitle: 'مراجعة Lyonesse: تفريغ صوتي بالذكاء الاصطناعي على Mac',
    intro:
      'Lyonesse تطبيق لأجهزة iPhone وiPad وMac يفرّغ التسجيلات صوتيًا ويلخّص الاجتماعات ويجيب عن الأسئلة حول ملاحظاتك ومستنداتك، ويقول المطوّر إن كل ذلك يعمل على الجهاز نفسه دون حساب. تنزيله مجاني مع تسجيل واحد مشمول، ثم يُباع باشتراك أو بشراء دائم لمرة واحدة. تستند هذه المراجعة إلى صفحة التطبيق في App Store و[موقع](https://lyonesse.app) المطوّر وسياسة الخصوصية والشروط ومنشورَي قياس، وقد رُوجعت في 26 أكتوبر 2026؛ ولم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'مراجعة Lyonesse: تطبيق لـ iPhone وiPad وMac للتفريغ الصوتي ومحاضر الاجتماعات والدردشة مع المستندات دون اتصال. أول تسجيل مجاني وشراء دائم؛ لم نختبره.',
    twitterDescription:
      'مراجعة Lyonesse: تفريغ صوتي ومحاضر اجتماعات ودردشة مع المستندات دون اتصال على iPhone وiPad وMac. السعر والخصوصية والمتطلبات وما لا تؤكده المصادر.',
    audience:
      'مستخدمو iPhone وMac الذين يريدون تفريغًا صوتيًا ومحاضر اجتماعات خاصة، ويحتاجون إلى معرفة ما تؤكده المصادر وما يكتفي المطوّر بادعائه وكم تبلغ التكلفة.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Lyonesse',
    targetKeywords: [
      'مراجعة lyonesse',
      'lyonesse ai transcript and chat',
      'تطبيق تفريغ صوتي بدون إنترنت iphone',
      'تطبيق محاضر اجتماعات خاص mac',
      'تفريغ صوتي بالذكاء الاصطناعي على الجهاز',
      'محاضر اجتماعات بالذكاء الاصطناعي بدون إنترنت',
      'الدردشة مع ملفات pdf بدون إنترنت iphone',
    ],
    current_models_mentioned: ['Apple Speech', 'NVIDIA Parakeet', 'Apple Intelligence'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Watch', 'iPhone 15 Pro'],
    leadAnswerBlock:
      '**Lyonesse (الإصدار 2.0.7، حُدِّث في 23 أكتوبر 2026) تطبيق لأجهزة iPhone وiPad وMac للتفريغ الصوتي ومحاضر الاجتماعات والدردشة مع مستنداتك دون اتصال.** يقول المطوّر إن الصوت والنصوص المفرَّغة والمستندات تُعالَج على الجهاز وإنه لا يلزم حساب؛ وكل ما يرد هنا مصدره صفحة App Store وصفحات المطوّر نفسه.',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل Lyonesse فعلًا دون اتصال على iPhone وMac؟',
        answer:
          'وفق المطوّر، نعم: بعد تنزيل نماذج الكلام والذكاء الاصطناعي مرة واحدة، تعمل التسجيلات والتفريغ والملخصات والأسئلة في وضع الطيران. وتضيف سياسة الخصوصية أن الصوت لا يغادر الجهاز أبدًا، بينما تُجمع بيانات استخدام مجهولة وبيانات أعطال.',
        bullets: [
          'تفريغ صوتي مباشر مع تسمية المتحدثين بـ 15 لغة، باستخدام Apple Speech أو NVIDIA Parakeet.',
          'ملخصات ونقاط رئيسية ومركز إجراءات (Action Center) يسرد المهام ومسؤوليها ومواعيدها.',
          'يجيب Ask Lyonesse عن الأسئلة عبر الملاحظات والنصوص المفرَّغة وملفات PDF والصور مع الاستشهاد بالمصادر.',
          'على Mac يسجّل الميكروفون وصوت النظام، فلا ينضم أي بوت اجتماعات إلى المكالمة.',
        ],
        updatedDate: '2026-10-26',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Lyonesse؟', anchor: 'what-is-lyonesse' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'Lyonesse في لمحة', anchor: 'at-a-glance' },
      { label: 'المتطلبات', anchor: 'requirements' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'الميزات التي أكدتها المصادر', anchor: 'key-features' },
      { label: 'قياسات المطوّر نفسه', anchor: 'maker-measurements' },
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
            text: 'Lyonesse تطبيق مغلق المصدر لمنصات Apple يسجّل الصوت والمستندات أو يستورده ويفرّغه ويلخّصه ويجيب عن الأسئلة حوله دون حساب.',
          },
          {
            type: 'plain-terms',
            text: 'تسجّل محاضرة أو اجتماعًا، أو تستورد ملفًا، فتحصل على نص مفرَّغ مع المتحدثين وملخص وقائمة مهام؛ ثم تسأل التطبيق عن كل ما حفظته.',
          },
        ],
        items: [
          'الصيانة: صدر الإصدار 2.0.7 في 23 أكتوبر 2026 بعد ثمانية إصدارات منذ 27 أغسطس، لذا لا ينطبق تحذير المشروع المتوقف.',
          'التكلفة: مجاني مع تسجيل واحد؛ وبعده اشتراك شهري أو سنوي أو شراء دائم لمرة واحدة.',
          'المتطلبات: iOS أو iPadOS أو macOS الإصدار 26.0 أو أحدث؛ ويعمل الذكاء الاصطناعي على الجهاز بأفضل صورة على عتاد Apple الحديث.',
          'المطوّر: مطوّر مستقل، وبلا شيفرة مصدرية منشورة؛ والبائع نفسه في App Store يبيع أيضًا [Castmates](/ar/power-local-llm/castmates-review).',
          'الدليل: أرقام السرعة والخصوصية هي قياسات المطوّر نفسه، لا اختبارات مستقلة.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'لم تثبّت PromptQuorum التطبيق ولم تسجّل به ولم تقِس أداءه، لذا لا تقيّم المراجعة جودة التفريغ ولا جودة الملخصات.',
          },
        ],
      },
      overview: {
        id: 'what-is-lyonesse',
        title: 'ما هو Lyonesse؟',
        content: [
          '**Lyonesse تطبيق لمنصات Apple يسجّل الصوت أو يستورده ويفرّغه ويلخّصه ويتيح لك طرح أسئلة حول ملاحظاتك وملفات PDF وملفات Office والصور، وكل ذلك موصوف بأنه يعمل على الجهاز.** يدرجه App Store باسم "Lyonesse: AI Transcript & Chat" ضمن فئة الإنتاجية، والبائع Josip Markovic (حقوق النشر "Markovic Software, obrt za usluge")؛ ولا يذكر الموقع ولا سياسة الخصوصية ولا الشروط أي شخص أو شركة. ظهرت صفحة التطبيق لأول مرة في 31 أكتوبر 2025، وغيّر الإصدار 2.0.1 في 3 سبتمبر 2026 اسم التطبيق من Inscribe إلى Lyonesse.',
          'يختلف اسم التطبيق في App Store من متجر لآخر، فهو مثلًا "Lyonesse: KI Transkript & Chat" في ألمانيا و"Lyonesse: AI文字起こし・チャット" في اليابان؛ وكلها تشير إلى التطبيق نفسه.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**Lyonesse متاح للتنزيل من App Store على iPhone وiPad وMac؛ ولا توجد نسخة مدرجة لـ Android أو Windows أو للويب.**',
        ],
        columns: ['الخيار', 'مصدر الحصول عليه'],
        rows: [
          { 'الخيار': 'iPhone وiPad', 'مصدر الحصول عليه': '[Lyonesse على App Store](https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711)، مجاني مع شراء داخل التطبيق' },
          { 'الخيار': 'Mac', 'مصدر الحصول عليه': 'صفحة App Store نفسها، macOS 26.0 أو أحدث وفق الصفحة' },
          { 'الخيار': 'Apple Watch', 'مصدر الحصول عليه': 'تطبيق تسجيل، watchOS 11.0 أو أحدث؛ أُضيف في الإصدار 2.0.5' },
          { 'الخيار': 'الخيارات المدفوعة', 'مصدر الحصول عليه': 'شهري $7.99 أو سنوي $29.99 أو دائم $59.99 (المتجر الأمريكي)' },
          { 'الخيار': 'الموقع', 'مصدر الحصول عليه': '[lyonesse.app](https://lyonesse.app)' },
          { 'الخيار': 'سياسة الخصوصية', 'مصدر الحصول عليه': '[lyonesse.app/privacy](https://lyonesse.app/privacy.html)' },
          { 'الخيار': 'الشروط', 'مصدر الحصول عليه': '[lyonesse.app/terms](https://lyonesse.app/terms.html)' },
          { 'الخيار': 'الشيفرة المصدرية', 'مصدر الحصول عليه': 'غير منشورة' },
        ],
        note: 'الإصدار الذي رُوجع: 2.0.7، صدر في 23 أكتوبر 2026 وفق App Store؛ وحجم التطبيق 68.9 MB قبل تنزيل النماذج. يشمل التنزيل المجاني تسجيلًا واحدًا بجميع الميزات. الأسعار من المتجر الأمريكي وتختلف حسب البلد. لم تثبّت PromptQuorum نسختي Mac وWatch.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Lyonesse في لمحة',
        columns: ['السمة', 'Lyonesse'],
        rows: [
          { 'السمة': 'المنصة', 'Lyonesse': 'iPhone وiPad وMac؛ مع تطبيق تسجيل لـ Apple Watch' },
          { 'السمة': 'السعر', 'Lyonesse': 'أول تسجيل مجاني؛ اشتراك أو شراء دائم' },
          { 'السمة': 'الرخصة', 'Lyonesse': 'ملكية خاصة، مغلق المصدر' },
          { 'السمة': 'مكان التشغيل', 'Lyonesse': 'على الجهاز؛ تُنزَّل النماذج مرة واحدة' },
          { 'السمة': 'اللغات', 'Lyonesse': '15 للتفريغ والملخصات' },
          { 'السمة': 'التفريغ الفوري', 'Lyonesse': 'نعم؛ تفريغ وترجمة نصية مباشرة' },
          { 'السمة': 'تسمية المتحدثين', 'Lyonesse': 'نعم' },
          { 'السمة': 'يعمل بالمعالج فقط', 'Lyonesse': 'غير مذكور؛ عتاد Apple فقط' },
          { 'السمة': 'خادم API محلي', 'Lyonesse': 'غير مذكور' },
        ],
        note: 'تتبع السمات مقارنة تحويل الكلام إلى نص المستخدمة في دليل برامج LLM المحلية. غياب التصريح في الموقع يعني أن الأمر غير معروف، لا أنه غير مدعوم.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**يحدد App Store الإصدار 26.0 من iOS وiPadOS وmacOS حدًا أدنى، ويقول المطوّر إن الذكاء الاصطناعي على الجهاز يعمل بأفضل صورة على عتاد Apple الحديث.**',
        ],
        columns: ['البند', 'ما تقوله المصادر'],
        rows: [
          { 'البند': 'نظام التشغيل', 'ما تقوله المصادر': 'iOS وiPadOS وmacOS وvisionOS الإصدار 26.0 أو أحدث؛ وwatchOS 11.0 لتطبيق Watch (App Store)' },
          { 'البند': 'أفضل عتاد', 'ما تقوله المصادر': 'iPhone 15 Pro أو أحدث، وiPad بمعالج من سلسلة M، وMac بمعالج Apple silicon (موقع المطوّر)' },
          { 'البند': 'محرّكات الذكاء الاصطناعي', 'ما تقوله المصادر': 'Apple Speech أو NVIDIA Parakeet للتفريغ؛ وApple Intelligence أو نموذج محلي قابل للتنزيل للملخصات والدردشة' },
          { 'البند': 'تنزيل النماذج', 'ما تقوله المصادر': 'مطلوب مرة واحدة عبر الشبكة؛ ويذكر منشور القياس لدى المطوّر أن Parakeet TDT v3 يبلغ نحو 467 MB' },
          { 'البند': 'الذاكرة', 'ما تقوله المصادر': 'لا يرد أي رقم لذاكرة RAM في أي مصدر' },
        ],
        note: 'صفحة App Store هي التي تحدد إن كان التطبيق سيُثبَّت؛ ولا يذكر موقع المطوّر أي إصدار لنظام التشغيل.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع الخطوات وصف المطوّر نفسه؛ ولم تنفّذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق ونزّل النماذج',
            whyItMatters: 'ثبّت Lyonesse من App Store ودعه ينزّل نماذج الكلام والذكاء الاصطناعي مرة واحدة.',
          },
          {
            title: 'سجّل أو استورد',
            whyItMatters: 'سجّل على iPhone أو Mac أو Apple Watch، أو استورد ملفات الصوت والفيديو وPDF وWord وExcel وPowerPoint والصور.',
          },
          {
            title: 'راجع الملاحظات',
            whyItMatters: 'اقرأ النص المفرَّغ مع تسمية المتحدثين والملخص والنقاط الرئيسية والمهام في Action Center.',
          },
          {
            title: 'اسأل وصدّر',
            whyItMatters: 'اطرح أسئلتك عبر Ask Lyonesse، ثم صدّر الملاحظات أو أرسل بنود الإجراءات إلى تطبيق Apple Reminders.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل بند أدناه مصدره وصف App Store أو سجل إصداراته أو موقع المطوّر؛ ولم يُختبر أي منها اختبارًا مستقلًا.**',
        ],
        items: [
          '**التفريغ الصوتي.** تفريغ مباشر مع تسمية المتحدثين بـ 15 لغة؛ وأضاف الإصدار 2.0.4 ترجمة نصية مباشرة ومفردات مخصصة وعرضًا حرفيًا نظيفًا.',
          '**الملخصات والمهام.** ملخصات بالذكاء الاصطناعي ونقاط رئيسية وقرارات، إضافة إلى Action Center الذي يستخرج المهام ومسؤوليها ومواعيدها.',
          '**Ask Lyonesse والدردشة مع المستندات.** أسئلة عبر الملاحظات والنصوص المفرَّغة وملفات PDF وWord وExcel وPowerPoint والصور، مع استشهادات وتعرّف ضوئي على الحروف (OCR) على الجهاز؛ وتجمع Projects التسجيلات والمستندات.',
          '**مساعد الاجتماعات.** ربط بالتقويم وترجمة نصية مباشرة وتنبيهات عند ذكر اسمك ومحاضر مصوغة بالذكاء الاصطناعي وبنود إجراءات تُرسل إلى Apple Reminders؛ وعلى Mac يسجّل الميكروفون وصوت النظام، فلا ينضم أي بوت إلى المكالمة.',
          '**منظومة Apple.** تطبيق تسجيل لـ Watch (الإصدار 2.0.5)، وأدوات (Widgets)، ودعم Siri وShortcuts (الإصدار 2.0.1)، ومزامنة iCloud اختيارية.',
        ],
        note: 'أعاد الإصدار 2.0.6 تنظيم التطبيق في تبويبات Notes وTasks وFolders إضافة إلى Search، وأصبحت الاجتماعات داخل Notes.',
      },
      makerMeasurements: {
        id: 'maker-measurements',
        title: 'قياسات المطوّر نفسه',
        content: [
          '**يربط Lyonesse من صفحته الرئيسية منشورَي قياس؛ أجرى المطوّر كليهما، ولم تعد PromptQuorum إنتاج أي منهما.**',
          'في اختبار الكلام المنشور في 15 يوليو 2026، قارن المطوّر ثمانية محرّكات على مجموعة LibriSpeech الإنجليزية على جهاز Apple M2 Pro واحد. ويورد معدلات خطأ الكلمات على الكلام النظيف والأكثر ضجيجًا: 2.12% و4.56% لـ Apple SpeechAnalyzer، و2.51% و4.28% لـ Parakeet TDT v3. ويذكر أيضًا أن الإصدار 1.8.9 أزال Whisper وأن الوضع التلقائي يفضّل Apple SpeechAnalyzer حيثما تكون اللغة مدعومة. وينص المنشور على أنه يغطي الإنجليزية فقط، وكلامًا مقروءًا من كتب صوتية لا اجتماعات، وجهازًا واحدًا.',
          'في قياس الرفع، شغّل المطوّر مقطع اجتماع مدته 10 دقائق على جهاز Mac واحد وسجّل بايتات الشبكة لكل عملية. ويورد أن Lyonesse 2.0.4 أرسل 0.02 MB أثناء التسجيل، مقابل 115.7 MB لـ Notion AI Meeting Notes 7.39.0. ويصف المنشور نفسه بأنه اختبار ذاتي من المطوّر على شبكة واحدة في يوم واحد، مع تطبيقين من خمسة مخططة، وللبايتات فقط ودون تدقيق أمني، ويشير إلى أن Lyonesse نزّل أيضًا نحو 18 MB من نماذج اكتشاف المتحدثين مرة واحدة وزامن نحو 0.4 MB من نص الملاحظات عبر iCloud.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**تقول سياسة الخصوصية، المحدَّثة آخر مرة في 9 أكتوبر 2026، إن التسجيلات الصوتية لا تغادر الجهاز أبدًا وإن التفريغ والملخصات وتحليل المستندات تعمل عليه، دون إرسال بيانات إلى خوادم خارجية للمعالجة.** لا يلزم حساب، وتنص السياسة على أن Lyonesse لا يدمج أي خدمات تحليلات أو إعلانات أو تتبع تابعة لجهات خارجية ولا يجمع التسجيلات ولا النصوص المفرَّغة ولا المستندات ولا الأسماء ولا عناوين البريد ولا الموقع ولا جهات الاتصال.',
          'لكن بعض البيانات تنتقل. تصف السياسة إحصاءات استخدام مجهولة (مرات فتح التطبيق واستخدام الميزات ونوع الجهاز وإصدار النظام والتطبيق) وتقارير أعطال دون ذكر الأدوات المستخدمة أو طريقة إرسالها؛ وتدرج ملصقات الخصوصية في App Store معرّف الجهاز والتفاعل مع المنتج وبيانات الأعطال بوصفها بيانات تُجمع وغير مرتبطة بك. تُزامَن النصوص المفرَّغة والملخصات بين أجهزتك عبر iCloud، وتشمل النسخ الاحتياطية للجهاز بيانات التطبيق. ويقول المطوّر إنه لا يشغّل خوادم مزامنة ولا يستطيع رؤية بيانات iCloud. وتخضع Apple Intelligence وApp Store وiCloud والنسخ الاحتياطية لسياسات Apple نفسها.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات المطوّر وليست نتائج تدقيق، والشيفرة المصدرية غير منشورة. لم تفحص PromptQuorum حركة الشبكة الصادرة عن التطبيق. ولا تذكر السياسة ولا الشروط أي كيان قانوني أو عنوان بريدي؛ ويرد في سطر حقوق النشر في App Store "Markovic Software, obrt za usluge"، وتطبّق الشروط القانون الكرواتي.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**الطلاب ومُجرو المقابلات** الذين يسجّلون محاضرات أو محادثات ويريدون نصًا مفرَّغًا وملخصًا ومكتبة قابلة للبحث دون حساب.',
          '**مستخدمو Mac الكثيرو المكالمات** الذين يريدون ملاحظات دون انضمام بوت إلى الاجتماع.',
          '**المشترون الذين لا يحبون الاشتراكات** ويريدون خيار شراء دائم بعد تجربة التسجيل المجاني.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الدقة عمليًا.** لم تسجّل PromptQuorum أو تفرّغ أي شيء، لذا لم تُقيَّم جودة النص المفرَّغ ولا دقة تسمية المتحدثين ولا جودة الملخصات ولا تغطية اللغات الخمس عشرة كلها.',
          '**الإعداد الافتراضي للمزامنة.** تقول سياسة الخصوصية إن مزامنة iCloud مفعّلة افتراضيًا، بينما يقول وصف App Store إن مزامنة iCloud الاختيارية متوقفة افتراضيًا.',
          '**"لا شيء يغادر جهازك".** يقول الموقع إن لا شيء يُرفع، بينما تصف السياسة وملصقات App Store تحليلات مجهولة وبيانات أعطال؛ ولا يُذكر إلى أين تُرسل.',
          '**متطلب العتاد.** تقول الشروط، المحدَّثة آخر مرة في 28 أكتوبر 2025، إن التطبيق يتطلب عتادًا يدعم Apple Intelligence، بينما يصف الموقع نموذجًا محليًا قابلًا للتنزيل بديلًا.',
          '**السجل العملي.** أظهر App Store عددًا قليلًا فقط من التقييمات عند المراجعة، وحمل التطبيق اسم Inscribe حتى 3 سبتمبر 2026.',
          '**الاستخدام المنظَّم.** لم تُقيَّم مدى ملاءمته للتسجيل الطبي أو القانوني أو غيره من المجالات المنظَّمة.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          { 'التطبيق': '[Whisper Notes](/ar/power-local-llm/whisper-notes-review)', 'المنصات': 'iPhone وiPad وMac', 'السعر / الرخصة': 'دفعة واحدة / مغلق المصدر', 'الفرق الأبرز': 'تفريغ صوتي دون اتصال مع تسمية المتحدثين، لكن بلا مساعد اجتماعات ولا دردشة مع المستندات؛ ويظهر النص بعد إيقاف التسجيل' },
          { 'التطبيق': '[MacWhisper](/ar/power-local-llm/macwhisper-review)', 'المنصات': 'macOS', 'السعر / الرخصة': 'مجاني جزئيًا / ملكية خاصة', 'الفرق الأبرز': 'تطبيق Mac بشراء لمرة واحدة للتفريغ المحلي عبر Whisper وParakeet؛ بلا نسخة لـ iPhone' },
          { 'التطبيق': '[Meetily](/ar/power-local-llm/meetily-review)', 'المنصات': 'macOS وWindows', 'السعر / الرخصة': 'مجاني جزئيًا / MIT', 'الفرق الأبرز': 'محاضر اجتماعات مفتوحة المصدر بتفريغ محلي وملخصات عبر Ollama؛ ويعمل على Windows أيضًا' },
        ],
        note: 'تحقّق من السعر والرخصة والمنصات الحالية لكل تطبيق في صفحته الخاصة قبل الاختيار.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'كم يكلّف Lyonesse خارج الولايات المتحدة؟',
            a: 'في متاجر App Store التي رُوجعت في 26 أكتوبر 2026، كانت أسعار الاشتراك الشهري / السنوي / Unlimited الدائم 8.99 € / 34.99 € / 69.99 € في ألمانيا وإسبانيا وفرنسا، و¥1,300 / ¥5,000 / ¥10,000 في اليابان، و₩12,000 / ₩49,000 / ₩99,000 في كوريا الجنوبية، وR$ 49.90 / R$ 199.90 / R$ 399.90 في البرازيل.',
          },
          {
            q: 'هل أحتاج إلى إذن لتسجيل اجتماع؟',
            a: 'تجعلك الشروط وحدك مسؤولًا عن الالتزام بقوانين التسجيل السارية عليك، والتي تشترط في بعض الأماكن موافقة جميع المشاركين في المكالمة؛ ولا يقبل المطوّر أي مسؤولية عن المخالفات.',
          },
          {
            q: 'كيف يعمل التجديد واسترداد المبالغ؟',
            a: 'وفق الشروط، تتجدد الاشتراكات تلقائيًا ما لم تُلغَ قبل 24 ساعة على الأقل من نهاية المدة في إعدادات Apple ID، وليس على الشراء الدائم أي رسوم متكررة، والمشتريات نهائية إلا حيث يوجب القانون استرداد المبلغ.',
          },
          {
            q: 'هل توجد نسخة لـ Windows أو Android؟',
            a: 'لا توجد نسخة مدرجة: صفحة App Store تغطي منصات Apple فقط، ولا يذكر موقع المطوّر أي منصة أخرى.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Lyonesse وسيلة واسعة ومحدَّثة باستمرار للحصول على نصوص مفرَّغة ومحاضر اجتماعات ودردشة مع المستندات على iPhone أو Mac، مع تسجيل مجاني واحد للتجربة وخيار شراء دائم إلى جانب الاشتراكات. في المقابل، هو مغلق المصدر، ويأتي من مطوّر مستقل واحد، ويتطلب نظام تشغيل من سلسلة 26، ويقيم ادعاءاته عن الخصوصية والسرعة على قياسات المطوّر نفسه، ويذكر الإعداد الافتراضي لمزامنة iCloud بصيغتين مختلفتين. يناسب أصحاب عتاد Apple الحديث الذين يريدون ملاحظات دون حساب ويمكنهم تجربة التسجيل المجاني أولًا؛ أما من يسجّل مواد حساسة أو منظَّمة فعليه قراءة سياسة الخصوصية وإعداد المزامنة بنفسه قبل الاعتماد عليه.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Lyonesse على App Store](https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711) — الوصف وسجل الإصدارات والمتطلبات وملصقات الخصوصية وأسعار الشراء داخل التطبيق لكل متجر، رُوجعت في 26 أكتوبر 2026.',
          '[موقع Lyonesse](https://lyonesse.app) — قائمة الميزات ونص التسعير وجدول المقارنة، رُوجع في 26 أكتوبر 2026.',
          '[سياسة خصوصية Lyonesse](https://lyonesse.app/privacy.html) — جمع البيانات والمزامنة، آخر تحديث في 9 أكتوبر 2026.',
          '[شروط Lyonesse](https://lyonesse.app/terms.html) — الاشتراكات واسترداد المبالغ وموافقة التسجيل، آخر تحديث في 28 أكتوبر 2025.',
          '[منشور اختبار الكلام](https://lyonesse.app/blog/parakeet-moss-apple-speech-benchmark.html) و[منشور قياس الرفع](https://lyonesse.app/blog/meeting-notes-upload-measured.html) — قياسات المطوّر نفسه.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Whisper Notes](/ar/power-local-llm/whisper-notes-review) — تحويل الكلام إلى نص دون اتصال على iPhone وiPad وMac.',
          '[مراجعة MacWhisper](/ar/power-local-llm/macwhisper-review) — تفريغ محلي عبر Whisper وParakeet على Mac.',
          '[مراجعة Meetily](/ar/power-local-llm/meetily-review) — محاضر اجتماعات مفتوحة المصدر بنماذج محلية.',
          '[مراجعة Castmates](/ar/power-local-llm/castmates-review) — تطبيق دردشة شخصيات دون اتصال على iPhone من البائع نفسه في App Store.',
          '[مراجعة Pajdo](/ar/power-local-llm/pajdo-review) — رفيق لتطبيق Apple Health من المطوّر نفسه، تُجاب أسئلته على iPhone.',
          '[مقارنة أدوات الصوت والكلام](/ar/power-local-llm/local-llm-voice-audio-compared) — مقارنة الفئة التي تنتمي إليها هذه المراجعة.',
          '[دليل برامج LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/lyonesse-review-hero-zh.webp',
    title: 'Lyonesse 评测：适用于 iPhone 和 Mac 的离线 AI 转录与会议笔记应用',
    seoTitle: 'Lyonesse 评测：iPhone 和 Mac 离线 AI 转录应用',
    intro:
      'Lyonesse 是一款适用于 iPhone、iPad 和 Mac 的应用，可转录录音、总结会议，并回答关于你的笔记和文档的问题；开发者表示这一切都在设备本机运行，无需账号。应用可免费下载并含一次录音，之后可订阅，也可一次性买断终身使用。本评测基于 2026年10月26日核对的 App Store 页面，以及开发者的[官网](https://lyonesse.app)、隐私政策、服务条款和两篇测量文章；PromptQuorum 未上手实测该应用。',
    metaDescription:
      'Lyonesse 评测：适用于 iPhone、iPad 和 Mac 的离线 AI 转录、会议笔记与文档对话应用。首次录音免费，可选终身买断；PromptQuorum 未实测。',
    twitterDescription:
      'Lyonesse 评测：适用于 iPhone、iPad 和 Mac 的离线转录、会议笔记与文档对话。价格、隐私、运行要求，以及来源未能证实的内容。',
    audience:
      '希望获得私密转录和会议笔记的 iPhone 与 Mac 用户，需要了解来源证实了什么、哪些只是开发者的说法，以及费用是多少。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'lyonesse 评测',
    targetKeywords: [
      'lyonesse 评测',
      'lyonesse ai transcript and chat',
      'iphone 离线转录 app',
      'mac 私密会议笔记 app',
      '端侧 ai 转录',
      '离线 ai 会议笔记',
      'iphone 离线 pdf 对话',
    ],
    current_models_mentioned: ['Apple Speech', 'NVIDIA Parakeet', 'Apple Intelligence'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Watch', 'iPhone 15 Pro'],
    leadAnswerBlock:
      '**Lyonesse（版本 2.0.7，2026年10月23日更新）是一款适用于 iPhone、iPad 和 Mac 的应用，提供离线转录、会议笔记以及与你自己的文档对话的功能。**开发者表示，音频、转录文本和文档都在设备本机处理，且无需账号；本文所有说法均来自 App Store 页面和开发者自己的网页。',
    quickAnswerTop: {
      zh: {
        question: 'Lyonesse 真的能在 iPhone 和 Mac 上离线使用吗？',
        answer:
          '按开发者的说法，可以：语音和 AI 模型一次性下载后，录音、转录、摘要和提问在飞行模式下也能使用。隐私政策还说明，音频不会离开设备，但会收集匿名的使用数据和崩溃数据。',
        bullets: [
          '实时转录并标注说话人，支持 15 种语言，使用 Apple Speech 或 NVIDIA Parakeet。',
          '生成摘要、要点，并通过 Action Center 列出任务、负责人和截止日期。',
          'Ask Lyonesse 可跨笔记、转录文本、PDF 和图片回答问题，并附带引用。',
          '在 Mac 上可录制麦克风和系统音频，因此无需会议机器人加入通话。',
        ],
        updatedDate: '2026-10-26',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Lyonesse 是什么？', anchor: 'what-is-lyonesse' },
      { label: '获取方式', anchor: 'get-it' },
      { label: 'Lyonesse 一览', anchor: 'at-a-glance' },
      { label: '运行要求', anchor: 'requirements' },
      { label: '上手步骤', anchor: 'getting-started' },
      { label: '来源已证实的功能', anchor: 'key-features' },
      { label: '开发者自己的测量', anchor: 'maker-measurements' },
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
            text: 'Lyonesse 是一款闭源的苹果平台应用，可录制或导入音频和文档，对其进行转录和总结，并在无需账号的情况下回答相关问题。',
          },
          {
            type: 'plain-terms',
            text: '你录下一场讲座或会议，或导入一个文件，就能得到带说话人的转录文本、摘要和任务清单；之后还可以向应用询问你保存的所有内容。',
          },
        ],
        items: [
          '维护状态：版本 2.0.7 于 2026年10月23日发布，自 8 月 27 日以来已发布八个版本，因此无需显示项目停更警告。',
          '费用：免费下载并含一次录音；之后可选月付或年付订阅，或一次性买断终身使用。',
          '运行要求：iOS、iPadOS 或 macOS 26.0 及以上；端侧 AI 在较新的 Apple 硬件上效果最好。',
          '开发者：一位独立开发者，未公开源代码；该 App Store 销售者还发布了 [Castmates](/zh/power-local-llm/castmates-review)。',
          '证据：速度和隐私方面的数据是开发者自己的测量结果，并非独立测试。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum 没有安装、录音或跑分测试该应用，因此不评价转录和摘要的质量。',
          },
        ],
      },
      overview: {
        id: 'what-is-lyonesse',
        title: 'Lyonesse 是什么？',
        content: [
          '**Lyonesse 是一款苹果平台应用，可录制或导入音频，对其转录和总结，并让你就笔记、PDF、Office 文件和照片提问，据称这一切都在设备本机运行。**它在 App Store 上的名称为“Lyonesse: AI Transcript & Chat”，归入“效率”类别，销售者为 Josip Markovic（版权信息为“Markovic Software, obrt za usluge”）；官网、隐私政策和服务条款都没有列出任何个人或公司名称。该应用于 2025年10月31日首次上架，2026年9月3日发布的 2.0.1 版将应用名称从 Inscribe 改为 Lyonesse。',
          'App Store 上的应用名称因地区而异，例如德国为“Lyonesse: KI Transkript & Chat”，日本为“Lyonesse: AI文字起こし・チャット”；它们都是同一款应用。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Lyonesse 通过 App Store 下载，适用于 iPhone、iPad 和 Mac；未列出 Android、Windows 或网页版本。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          { '选项': 'iPhone 和 iPad', '获取方式': '[App Store 上的 Lyonesse](https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711)，免费下载，含 App 内购买' },
          { '选项': 'Mac', '获取方式': '同一个 App Store 条目，据页面标注需 macOS 26.0 及以上' },
          { '选项': 'Apple Watch', '获取方式': '录音应用，需 watchOS 11.0 及以上；2.0.5 版新增' },
          { '选项': '付费选项', '获取方式': '月付 $7.99、年付 $29.99 或终身 $59.99（美国商店）' },
          { '选项': '官网', '获取方式': '[lyonesse.app](https://lyonesse.app)' },
          { '选项': '隐私政策', '获取方式': '[lyonesse.app/privacy](https://lyonesse.app/privacy.html)' },
          { '选项': '服务条款', '获取方式': '[lyonesse.app/terms](https://lyonesse.app/terms.html)' },
          { '选项': '源代码', '获取方式': '未公开' },
        ],
        note: '本次评测版本：2.0.7，据 App Store 于 2026年10月23日发布；下载模型前应用大小为 68.9 MB。免费下载包含一次可使用全部功能的录音。价格取自美国区，各国/地区有所不同。PromptQuorum 未安装 Mac 和 Watch 版本。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Lyonesse 一览',
        columns: ['属性', 'Lyonesse'],
        rows: [
          { '属性': '平台', 'Lyonesse': 'iPhone、iPad、Mac；Apple Watch 录音应用' },
          { '属性': '价格', 'Lyonesse': '首次录音免费；订阅或终身买断' },
          { '属性': '许可证', 'Lyonesse': '专有软件，闭源' },
          { '属性': '运行方式', 'Lyonesse': '在设备本机运行；模型仅下载一次' },
          { '属性': '语言', 'Lyonesse': '转录和摘要支持 15 种' },
          { '属性': '实时转录', 'Lyonesse': '支持；实时转录和实时字幕' },
          { '属性': '说话人标签', 'Lyonesse': '支持' },
          { '属性': '仅 CPU 可用', 'Lyonesse': '未说明；仅限 Apple 硬件' },
          { '属性': '本地 API 服务器', 'Lyonesse': '未说明' },
        ],
        note: '这些属性与本地 LLM 软件目录中的语音转文字对比保持一致。官网未提及某项功能，表示未知，而不是不支持。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: [
          '**App Store 标注的最低系统为 iOS、iPadOS 和 macOS 26.0；开发者称端侧 AI 在较新的 Apple 硬件上效果最好。**',
        ],
        columns: ['项目', '来源说明'],
        rows: [
          { '项目': '操作系统', '来源说明': 'iOS、iPadOS、macOS 和 visionOS 26.0 及以上；Watch 录音应用需 watchOS 11.0（App Store）' },
          { '项目': '推荐硬件', '来源说明': 'iPhone 15 Pro 或更新机型、搭载 M 系列芯片的 iPad、搭载 Apple 芯片的 Mac（开发者官网）' },
          { '项目': 'AI 引擎', '来源说明': '转录使用 Apple Speech 或 NVIDIA Parakeet；摘要和对话使用 Apple Intelligence 或可下载的本地模型' },
          { '项目': '模型下载', '来源说明': '需联网下载一次；开发者的基准测试文章称 Parakeet TDT v3 约 467 MB' },
          { '项目': '内存', '来源说明': '各处均未给出内存（RAM）要求' },
        ],
        note: '能否安装以 App Store 条目为准；开发者官网没有列出操作系统版本。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤按开发者自己的说明整理；PromptQuorum 未实际操作。**',
        ],
        numberedItems: [
          {
            title: '安装并下载模型',
            whyItMatters: '从 App Store 安装 Lyonesse，并让它一次性下载语音和 AI 模型。',
          },
          {
            title: '录制或导入',
            whyItMatters: '在 iPhone、Mac 或 Apple Watch 上录音，或导入音频、视频、PDF、Word、Excel、PowerPoint 文件和照片。',
          },
          {
            title: '查看笔记',
            whyItMatters: '阅读带说话人标签的转录文本、摘要、要点，以及 Action Center 中的任务。',
          },
          {
            title: '提问并导出',
            whyItMatters: '用 Ask Lyonesse 提问，然后导出笔记，或把待办事项发送到 Apple“提醒事项”。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: [
          '**以下各项均来自 App Store 描述、版本历史或开发者官网，均未经独立测试。**',
        ],
        items: [
          '**转录。**实时转录并标注说话人，支持 15 种语言；2.0.4 版新增实时翻译字幕、自定义词汇和纯净逐字视图。',
          '**摘要与任务。**AI 摘要、要点和决定，外加可提取任务、负责人和截止日期的 Action Center。',
          '**Ask Lyonesse 与文档对话。**可跨笔记、转录文本、PDF、Word、Excel、PowerPoint 和图片提问，附带引用和端侧 OCR；Projects 可把录音和文档归类到一起。',
          '**会议助手。**关联日历、实时字幕、被点名提醒、AI 起草的会议纪要，以及发送到 Apple“提醒事项”的待办事项；在 Mac 上可录制麦克风和系统音频，因此无需机器人加入通话。',
          '**Apple 生态。**Watch 录音应用（2.0.5 版）、小组件、Siri 和快捷指令支持（2.0.1 版），以及可选的 iCloud 同步。',
        ],
        note: '2.0.6 版把应用重新整理为“笔记”“任务”“文件夹”三个标签页外加搜索，会议现在归入“笔记”。',
      },
      makerMeasurements: {
        id: 'maker-measurements',
        title: '开发者自己的测量',
        content: [
          '**Lyonesse 在首页链接了两篇测量文章；两篇都由开发者自己完成，PromptQuorum 均未复现。**',
          '在 2026年7月15日发布的语音基准测试中，开发者在一台 Apple M2 Pro 上用英语 LibriSpeech 语料比较了八个引擎。它报告的干净语音和较嘈杂语音词错误率分别为：Apple SpeechAnalyzer 为 2.12% 和 4.56%，Parakeet TDT v3 为 2.51% 和 4.28%。文章还称 1.8.9 版移除了 Whisper，且自动模式在语言受支持时优先使用 Apple SpeechAnalyzer。文章自己说明，测试只涵盖英语、朗读的有声书语音（而非会议）以及一台机器。',
          '在上传量测量中，开发者在一台 Mac 上播放一段 10 分钟的会议片段，并按进程记录网络字节数。它报告称，Lyonesse 2.0.4 在录音期间发送了 0.02 MB，而 Notion AI Meeting Notes 7.39.0 为 115.7 MB。文章自称这是厂商自测：一个网络、一天、五个计划测试的应用中只测了两个，只统计字节数，也不是安全审计；同时说明 Lyonesse 还一次性下载了约 18 MB 的说话人检测模型，并通过 iCloud 同步了约 0.4 MB 的笔记文本。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**隐私政策（最后更新于 2026年10月9日）称，音频录音绝不会离开设备，转录、摘要和文档分析都在设备上运行，不会把数据发送到外部服务器进行处理。**无需账号；政策声明 Lyonesse 未集成任何第三方分析、广告或追踪服务，也不收集录音、转录文本、文档、姓名、邮箱、位置或联系人。',
          '部分数据确实会流出。政策描述了匿名的使用统计（应用打开次数、功能使用情况、设备类型、系统和应用版本）以及崩溃报告，但没有说明所用工具，也没有说明如何发送；App Store 隐私标签则把设备 ID、产品交互和崩溃数据列为“已收集但未与你关联”。转录文本和摘要通过 iCloud 在你自己的设备之间同步，设备备份也包含应用数据。开发者称自己不运行同步服务器，也看不到 iCloud 数据。Apple Intelligence、App Store、iCloud 和备份适用 Apple 自己的政策。',
        ],
        callouts: [
          {
            type: 'note',
            text: '以上是开发者的声明，并非审计结果，且源代码未公开。PromptQuorum 未检查该应用的网络流量。政策和条款都没有列出法律实体或邮寄地址；App Store 的版权信息为“Markovic Software, obrt za usluge”，条款适用克罗地亚法律。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**学生和采访者**：录制讲座或对话，想要无需账号的转录文本、摘要和可搜索的资料库。',
          '**经常开会的 Mac 用户**：希望记笔记时不用机器人加入会议。',
          '**不喜欢订阅的买家**：试用免费录音后，想要终身买断选项。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**实际准确度。**PromptQuorum 没有录制或转录任何内容，因此不评价转录质量、说话人标签的准确度、摘要质量，以及全部 15 种语言的覆盖情况。',
          '**同步默认设置。**隐私政策称 iCloud 同步默认开启，而 App Store 描述称可选的 iCloud 同步默认关闭。',
          '**“数据不会离开你的设备。”**官网称不会上传任何内容，而政策和 App Store 标签描述了匿名分析和崩溃数据；这些数据发往何处并未说明。',
          '**硬件要求。**最后更新于 2025年10月28日的条款称，应用需要支持 Apple Intelligence 的硬件，而官网则把可下载的本地模型描述为替代方案。',
          '**过往记录。**核对时 App Store 上只有寥寥几条评分，且该应用在 2026年9月3日之前一直叫 Inscribe。',
          '**受监管场景。**未评估其是否适用于医疗、法律或其他受监管的录音场景。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[Whisper Notes](/zh/power-local-llm/whisper-notes-review)', '平台': 'iPhone、iPad、Mac', '价格 / 许可证': '一次性买断 / 闭源', '主要区别': '离线转录并标注说话人，但没有会议助手或文档对话；文字在停止录音后才出现' },
          { '应用': '[MacWhisper](/zh/power-local-llm/macwhisper-review)', '平台': 'macOS', '价格 / 许可证': '免费增值 / 专有', '主要区别': '一次性买断的 Mac 应用，用于本地 Whisper 和 Parakeet 转录；没有 iPhone 版本' },
          { '应用': '[Meetily](/zh/power-local-llm/meetily-review)', '平台': 'macOS、Windows', '价格 / 许可证': '免费增值 / MIT', '主要区别': '开源会议笔记，本地转录并用 Ollama 生成摘要；也可在 Windows 上运行' },
        ],
        note: '选择之前，请在各应用的官方页面核实当前价格、许可证和支持平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Lyonesse 在美国以外的价格是多少？',
            a: '在 2026年10月26日核对的各地区 App Store 中，月付 / 年付 / 终身 Unlimited 的价格在德国、西班牙和法国为 €8.99 / €34.99 / €69.99，日本为 ¥1,300 / ¥5,000 / ¥10,000（日元），韩国为 ₩12,000 / ₩49,000 / ₩99,000，巴西为 R$49.90 / R$199.90 / R$399.90。',
          },
          {
            q: '录制会议需要获得许可吗？',
            a: '条款规定，你须自行负责遵守适用于你的录音法律，其中一些地区要求获得通话中所有人的同意；对于违规行为，开发者不承担责任。',
          },
          {
            q: '续订和退款是怎么规定的？',
            a: '按条款，订阅会自动续订，除非在当前周期结束前至少 24 小时于 Apple ID 设置中取消；终身买断没有后续费用；除法律要求退款的情形外，购买一律不可退款。',
          },
          {
            q: '有 Windows 或 Android 版本吗？',
            a: '没有列出：App Store 条目只涵盖苹果平台，开发者官网也没有提及其他平台。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Lyonesse 覆盖面广、更新活跃，可在 iPhone 或 Mac 上获得转录文本、会议笔记和文档对话，提供一次免费录音供试用，并在订阅之外提供终身买断选项。另一方面，它闭源、出自一位独立开发者、需要 26 系列操作系统，其隐私和速度方面的说法依赖开发者自己的测量，而且对 iCloud 同步的默认设置有两种不同的说法。它适合使用较新 Apple 硬件、想要无需账号的笔记并能先试用免费录音的用户；录制敏感或受监管内容的用户，在依赖它之前应自行阅读隐私政策并确认同步设置。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[App Store 上的 Lyonesse](https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711) — 描述、版本历史、运行要求、隐私标签及各地区 App 内购买价格，核对于 2026年10月26日。',
          '[Lyonesse 官网](https://lyonesse.app) — 功能列表、定价说明和对比表，核对于 2026年10月26日。',
          '[Lyonesse 隐私政策](https://lyonesse.app/privacy.html) — 数据收集与同步，最后更新于 2026年10月9日。',
          '[Lyonesse 服务条款](https://lyonesse.app/terms.html) — 订阅、退款和录音同意，最后更新于 2025年10月28日。',
          '[语音基准测试文章](https://lyonesse.app/blog/parakeet-moss-apple-speech-benchmark.html)和[上传量测量文章](https://lyonesse.app/blog/meeting-notes-upload-measured.html) — 开发者自己的测量。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Whisper Notes 评测](/zh/power-local-llm/whisper-notes-review) — 适用于 iPhone、iPad 和 Mac 的离线语音转文字。',
          '[MacWhisper 评测](/zh/power-local-llm/macwhisper-review) — 在 Mac 上进行本地 Whisper 和 Parakeet 转录。',
          '[Meetily 评测](/zh/power-local-llm/meetily-review) — 使用本地模型的开源会议笔记。',
          '[Castmates 评测](/zh/power-local-llm/castmates-review) — 来自同一 App Store 销售者的 iPhone 离线角色聊天应用。',
          '[Pajdo 评测](/zh/power-local-llm/pajdo-review) — 同一开发者推出的 Apple 健康助手，问题在 iPhone 上回答。',
          '[语音与音频工具对比](/zh/power-local-llm/local-llm-voice-audio-compared) — 本评测所属类别的对比文章。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具完整目录。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/lyonesse-review-hero-ko.webp',
    title: 'Lyonesse 리뷰: iPhone·Mac용 오프라인 AI 받아쓰기와 회의 노트',
    seoTitle: 'Lyonesse 리뷰: iPhone·Mac 오프라인 AI 받아쓰기',
    intro:
      'Lyonesse는 녹음을 텍스트로 옮기고, 회의를 요약하고, 노트와 문서에 대한 질문에 답하는 iPhone·iPad·Mac 앱으로, 이 모든 작업이 계정 없이 기기에서 실행된다고 밝히고 있습니다. 다운로드는 무료이며 녹음 1건이 포함되어 있고, 이후에는 구독 또는 1회 평생 구매로 판매합니다. 이 리뷰는 2026년 10월 26일에 확인한 App Store 페이지와 개발자의 [웹사이트](https://lyonesse.app), 개인정보 처리방침, 이용 약관, 측정 게시물 2건을 바탕으로 하며, PromptQuorum은 앱을 직접 사용해 보지 않았습니다.',
    metaDescription:
      'Lyonesse 리뷰: 오프라인 AI 받아쓰기, 회의 노트, 문서 채팅을 제공하는 iPhone·iPad·Mac 앱입니다. 첫 녹음 무료, 평생 구매 옵션이 있으며 직접 테스트하지는 않았습니다.',
    twitterDescription:
      'Lyonesse 리뷰: iPhone·iPad·Mac용 오프라인 받아쓰기, 회의 노트, 문서 채팅. 가격, 개인정보, 요구 사항, 그리고 출처가 확인하지 못한 사항.',
    audience:
      '비공개로 받아쓰기와 회의 노트를 사용하고 싶으며, 출처가 무엇을 확인해 주고 개발자가 무엇을 주장할 뿐이며 비용이 얼마인지 알고 싶은 iPhone·Mac 사용자를 위한 글입니다.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'lyonesse 리뷰',
    targetKeywords: [
      'lyonesse 리뷰',
      'lyonesse ai 받아쓰기 챗',
      '오프라인 받아쓰기 앱 아이폰',
      '비공개 회의 노트 앱 맥',
      '온디바이스 ai 받아쓰기',
      '오프라인 ai 회의 노트',
      '오프라인 pdf 채팅 아이폰',
    ],
    current_models_mentioned: ['Apple Speech', 'NVIDIA Parakeet', 'Apple Intelligence'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Watch', 'iPhone 15 Pro'],
    leadAnswerBlock:
      '**Lyonesse(버전 2.0.7, 2026년 10월 23일 업데이트)는 오프라인 받아쓰기, 회의 노트, 내 문서와의 채팅을 제공하는 iPhone·iPad·Mac 앱입니다.** 개발자는 오디오, 대화 내용, 문서가 기기에서 처리되며 계정이 필요 없다고 밝힙니다. 이 글의 모든 내용은 App Store 페이지와 개발자의 자체 페이지에 근거합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Lyonesse는 정말 iPhone과 Mac에서 오프라인으로 작동합니까?',
        answer:
          '개발자에 따르면 그렇습니다. 음성 모델과 AI 모델을 한 번 내려받은 뒤에는 녹음, 받아쓰기, 요약, 질문이 비행기 모드에서도 작동합니다. 개인정보 처리방침은 오디오가 기기를 떠나지 않는다고 덧붙이며, 익명 처리된 사용 데이터와 충돌 데이터는 수집됩니다.',
        bullets: [
          'Apple Speech 또는 NVIDIA Parakeet을 사용해 15개 언어로 화자 구분과 함께 실시간 받아쓰기를 제공합니다.',
          '요약, 핵심 포인트, 작업·담당자·기한을 정리하는 Action Center를 제공합니다.',
          'Ask Lyonesse는 노트, 대화 내용, PDF, 이미지 전반에 걸친 질문에 출처 표시와 함께 답합니다.',
          'Mac에서는 마이크와 시스템 오디오를 녹음하므로 회의 봇이 통화에 참여하지 않습니다.',
        ],
        updatedDate: '2026-10-26',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Lyonesse란?', anchor: 'what-is-lyonesse' },
      { label: '입수 방법', anchor: 'get-it' },
      { label: 'Lyonesse 한눈에 보기', anchor: 'at-a-glance' },
      { label: '요구 사항', anchor: 'requirements' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '출처로 확인된 기능', anchor: 'key-features' },
      { label: '개발자 자체 측정 결과', anchor: 'maker-measurements' },
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
            text: 'Lyonesse는 오디오와 문서를 녹음하거나 가져와 받아쓰기와 요약을 하고, 계정 없이 그 내용에 대한 질문에 답하는 비공개 소스 Apple 플랫폼 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '강의나 회의를 녹음하거나 파일을 가져오면 화자가 구분된 대화 내용, 요약, 할 일 목록을 얻고, 저장한 모든 내용에 대해 앱에 질문할 수 있습니다.',
          },
        ],
        items: [
          '유지 관리: 8월 27일 이후 여덟 차례 릴리스된 끝에 버전 2.0.7이 2026년 10월 23일에 출시되었으므로, 업데이트 중단 경고는 해당하지 않습니다.',
          '비용: 녹음 1건은 무료이며, 이후에는 월간 또는 연간 구독이나 1회 평생 구매로 이용합니다.',
          '요구 사항: iOS, iPadOS 또는 macOS 26.0 이상이며, 온디바이스 AI는 최신 Apple 기기에서 가장 잘 작동합니다.',
          '개발자: 독립 개발자 1인이 만들며 공개된 소스 코드는 없습니다. App Store 판매자는 [Castmates](/ko/power-local-llm/castmates-review)도 판매합니다.',
          '근거: 속도와 개인정보 보호 수치는 독립적인 테스트가 아니라 개발자 자체 측정 결과입니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum은 앱을 설치하거나 녹음해 보거나 벤치마크하지 않았으므로 받아쓰기와 요약의 품질은 평가하지 않습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-lyonesse',
        title: 'Lyonesse란?',
        content: [
          '**Lyonesse는 오디오를 녹음하거나 가져와 받아쓰기와 요약을 하고, 노트·PDF·Office 파일·사진에 대해 질문할 수 있게 해 주는 Apple 플랫폼 앱이며, 이 모든 작업이 기기에서 실행된다고 설명됩니다.** App Store에는 판매자 Josip Markovic(저작권 표기 "Markovic Software, obrt za usluge")의 "Lyonesse: AI Transcript & Chat"으로 생산성 카테고리에 등록되어 있으며, 웹사이트, 개인정보 처리방침, 이용 약관에는 개인이나 회사 이름이 나오지 않습니다. 이 앱은 2025년 10월 31일에 처음 등록되었고, 2026년 9월 3일의 버전 2.0.1에서 이름이 Inscribe에서 Lyonesse로 바뀌었습니다.',
          'App Store의 앱 이름은 국가별 스토어마다 달라서 독일에서는 "Lyonesse: KI Transkript & Chat", 일본에서는 "Lyonesse: AI文字起こし・チャット"로 표시되지만 모두 같은 앱입니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Lyonesse는 App Store에서 내려받는 iPhone·iPad·Mac 앱이며, Android, Windows, 웹 버전은 등록되어 있지 않습니다.**',
        ],
        columns: ['옵션', '입수 방법'],
        rows: [
          { '옵션': 'iPhone 및 iPad', '입수 방법': '[App Store의 Lyonesse](https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711), 무료 다운로드, 앱 내 구입 있음' },
          { '옵션': 'Mac', '입수 방법': 'App Store 페이지 기준 같은 항목, macOS 26.0 이상' },
          { '옵션': 'Apple Watch', '입수 방법': '레코더 앱, watchOS 11.0 이상, 버전 2.0.5에서 추가' },
          { '옵션': '유료 옵션', '입수 방법': '월 ₩12,000, 연 ₩49,000, 평생 ₩99,000(한국 스토어)' },
          { '옵션': '웹사이트', '입수 방법': '[lyonesse.app](https://lyonesse.app)' },
          { '옵션': '개인정보 처리방침', '입수 방법': '[lyonesse.app/privacy](https://lyonesse.app/privacy.html)' },
          { '옵션': '이용 약관', '입수 방법': '[lyonesse.app/terms](https://lyonesse.app/terms.html)' },
          { '옵션': '소스 코드', '입수 방법': '공개되지 않음' },
        ],
        note: '리뷰 대상 버전: App Store 기준 2026년 10월 23일에 출시된 2.0.7이며, 앱 크기는 모델 다운로드 전 68.9 MB입니다. 무료 다운로드에는 모든 기능을 쓸 수 있는 녹음 1건이 포함됩니다. 가격은 한국 스토어 기준이며 국가마다 다릅니다(미국 스토어는 월 $7.99, 연 $29.99, 평생 $59.99). PromptQuorum은 Mac 및 Watch 버전을 설치하지 않았습니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Lyonesse 한눈에 보기',
        columns: ['속성', 'Lyonesse'],
        rows: [
          { '속성': '플랫폼', 'Lyonesse': 'iPhone, iPad, Mac / Apple Watch 레코더' },
          { '속성': '가격', 'Lyonesse': '첫 녹음 무료 / 구독 또는 평생 구매' },
          { '속성': '라이선스', 'Lyonesse': '독점, 비공개 소스' },
          { '속성': '실행 위치', 'Lyonesse': '기기에서 실행 / 모델은 1회 다운로드' },
          { '속성': '언어', 'Lyonesse': '받아쓰기와 요약 15개 언어' },
          { '속성': '실시간 받아쓰기', 'Lyonesse': '지원 / 실시간 받아쓰기와 자막' },
          { '속성': '화자 구분', 'Lyonesse': '지원' },
          { '속성': 'CPU만으로 사용 가능', 'Lyonesse': '명시 없음 / Apple 기기 전용' },
          { '속성': '로컬 API 서버', 'Lyonesse': '명시 없음' },
        ],
        note: '속성은 로컬 LLM 소프트웨어 디렉터리에서 사용하는 음성 인식 비교 항목을 따릅니다. 사이트에 언급이 없다는 것은 미지원이 아니라 알 수 없다는 뜻입니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: [
          '**App Store에는 최소 iOS, iPadOS, macOS 26.0이 표시되어 있으며, 개발자는 온디바이스 AI가 최신 Apple 기기에서 가장 잘 작동한다고 말합니다.**',
        ],
        columns: ['항목', '출처의 설명'],
        rows: [
          { '항목': '운영체제', '출처의 설명': 'iOS, iPadOS, macOS, visionOS 26.0 이상 / Watch 레코더는 watchOS 11.0(App Store)' },
          { '항목': '권장 하드웨어', '출처의 설명': 'iPhone 15 Pro 이상, M 시리즈 칩 탑재 iPad, Apple silicon Mac(개발자 사이트)' },
          { '항목': 'AI 엔진', '출처의 설명': '받아쓰기는 Apple Speech 또는 NVIDIA Parakeet / 요약과 채팅은 Apple Intelligence 또는 내려받는 로컬 모델' },
          { '항목': '모델 다운로드', '출처의 설명': '네트워크를 통해 1회 필요 / 개발자의 벤치마크 게시물은 Parakeet TDT v3를 약 467 MB로 표기' },
          { '항목': '메모리', '출처의 설명': 'RAM 수치는 어디에도 명시되어 있지 않음' },
        ],
        note: '앱 설치 가능 여부를 결정하는 것은 App Store 항목이며, 개발자 사이트에는 운영체제 버전이 표기되어 있지 않습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**아래 단계는 개발자가 직접 제시한 설명을 따른 것이며, PromptQuorum이 실행해 보지는 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '설치하고 모델 내려받기',
            whyItMatters: 'App Store에서 Lyonesse를 설치하고, 음성 모델과 AI 모델을 한 번 내려받습니다.',
          },
          {
            title: '녹음하거나 가져오기',
            whyItMatters: 'iPhone, Mac 또는 Apple Watch에서 녹음하거나, 오디오, 동영상, PDF, Word·Excel·PowerPoint 파일, 사진을 가져옵니다.',
          },
          {
            title: '노트 확인하기',
            whyItMatters: '화자가 구분된 대화 내용, 요약, 핵심 포인트, Action Center의 작업 목록을 확인합니다.',
          },
          {
            title: '질문하고 내보내기',
            whyItMatters: 'Ask Lyonesse로 질문한 뒤 노트를 내보내거나 실행 항목을 Apple 미리 알림으로 보냅니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 App Store 설명, 버전 기록 또는 개발자 웹사이트에 근거하며, 독립적으로 테스트한 것은 없습니다.**',
        ],
        items: [
          '**받아쓰기.** 15개 언어로 화자 구분과 함께 실시간 받아쓰기를 제공하며, 버전 2.0.4에서 실시간 번역 자막, 사용자 지정 어휘, 깔끔한 원문 보기가 추가되었습니다.',
          '**요약과 작업.** AI 요약, 핵심 포인트, 결정 사항과 함께 작업, 담당자, 기한을 추출하는 Action Center를 제공합니다.',
          '**Ask Lyonesse와 문서 채팅.** 노트, 대화 내용, PDF, Word, Excel, PowerPoint, 이미지 전반에 걸친 질문에 출처 표시와 온디바이스 OCR로 답하며, Projects로 녹음과 문서를 묶을 수 있습니다.',
          '**회의 어시스턴트.** 캘린더 연동, 실시간 자막, 이름 언급 알림, AI가 작성한 회의록, Apple 미리 알림으로 보내는 실행 항목을 제공합니다. Mac에서는 마이크와 시스템 오디오를 녹음하므로 봇이 통화에 참여하지 않습니다.',
          '**Apple 생태계.** Watch 레코더(버전 2.0.5), 위젯, Siri 및 단축어 지원(버전 2.0.1), 선택형 iCloud 동기화를 제공합니다.',
        ],
        note: '버전 2.0.6에서 앱이 노트, 작업, 폴더 탭과 검색으로 재구성되었으며, 회의는 이제 노트 안에 포함됩니다.',
      },
      makerMeasurements: {
        id: 'maker-measurements',
        title: '개발자 자체 측정 결과',
        content: [
          '**Lyonesse는 홈페이지에서 측정 게시물 2건을 링크하고 있으며, 두 건 모두 개발자가 직접 수행한 것이고 PromptQuorum은 재현하지 않았습니다.**',
          '2026년 7월 15일에 게시된 음성 벤치마크에서 개발자는 Apple M2 Pro 한 대에서 영어 LibriSpeech 코퍼스로 엔진 8종을 비교했습니다. 깨끗한 음성과 잡음이 있는 음성에서의 단어 오류율은 Apple SpeechAnalyzer가 2.12%와 4.56%, Parakeet TDT v3가 2.51%와 4.28%라고 보고합니다. 또한 버전 1.8.9에서 Whisper를 제거했으며, 언어가 지원되는 경우 자동 모드가 Apple SpeechAnalyzer를 우선한다고 밝힙니다. 이 게시물은 영어만 다루고, 회의가 아닌 낭독 오디오북 음성이며, 기기 한 대에서 측정했다고 명시합니다.',
          '업로드 측정에서 개발자는 Mac 한 대에서 10분짜리 회의 클립을 재생하고 프로세스별 네트워크 바이트를 기록했습니다. Lyonesse 2.0.4는 녹음 중 0.02 MB를 전송한 반면 Notion AI Meeting Notes 7.39.0은 115.7 MB를 전송했다고 보고합니다. 이 게시물은 스스로를 하루 동안 한 네트워크에서 계획된 앱 5개 중 2개만 대상으로 한, 바이트만 본 개발자 자체 테스트이며 보안 감사가 아니라고 밝히고, Lyonesse가 화자 감지 모델 약 18 MB를 한 번 내려받고 노트 텍스트 약 0.4 MB를 iCloud로 동기화했다고도 덧붙입니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**2026년 10월 9일에 마지막으로 업데이트된 개인정보 처리방침에 따르면 오디오 녹음은 기기를 떠나지 않으며, 받아쓰기, 요약, 문서 분석은 기기에서 실행되고 처리를 위해 외부 서버로 전송되는 데이터는 없습니다.** 계정이 필요 없으며, 처리방침은 Lyonesse가 제3자 분석, 광고, 추적 서비스를 연동하지 않고 녹음, 대화 내용, 문서, 이름, 이메일, 위치, 연락처를 수집하지 않는다고 명시합니다.',
          '이동하는 데이터도 있습니다. 처리방침은 익명 처리된 사용 통계(앱 실행, 기능 사용, 기기 유형, 시스템 및 앱 버전)와 충돌 보고서를 설명하지만 사용 도구의 이름이나 전송 방식은 밝히지 않으며, App Store 개인정보 레이블에는 기기 ID, 제품 상호작용, 충돌 데이터가 수집되며 사용자에게 연결되지 않는 항목으로 표시되어 있습니다. 대화 내용과 요약은 iCloud를 통해 사용자의 기기 간에 동기화되며, 기기 백업에는 앱 데이터가 포함됩니다. 개발자는 자체 동기화 서버를 운영하지 않으며 iCloud 데이터를 볼 수 없다고 밝힙니다. Apple Intelligence, App Store, iCloud, 백업에는 Apple의 자체 정책이 적용됩니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발자의 선언이지 감사 결과가 아니며, 소스 코드도 공개되지 않았습니다. PromptQuorum은 앱의 네트워크 트래픽을 점검하지 않았습니다. 처리방침과 약관에는 법인명이나 우편 주소가 없으며, App Store 저작권 표기는 "Markovic Software, obrt za usluge"이고 약관은 크로아티아 법을 적용합니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**학생과 인터뷰 진행자** 중 강의나 대화를 녹음하며 계정 없이 대화 내용, 요약, 검색 가능한 라이브러리를 원하는 분.',
          '**통화가 많은 Mac 사용자** 중 회의 봇이 참여하지 않는 노트를 원하는 분.',
          '**구독을 싫어하는 구매자** 중 무료 녹음으로 먼저 써 본 뒤 평생 구매 옵션을 원하는 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**실제 정확도.** PromptQuorum은 녹음이나 받아쓰기를 해 보지 않았으므로 대화 내용의 품질, 화자 구분의 정확도, 요약의 품질, 15개 언어 전체의 지원 수준은 평가하지 않았습니다.',
          '**동기화 기본값.** 개인정보 처리방침은 iCloud 동기화가 기본으로 켜져 있다고 설명하지만, App Store 설명은 선택형 iCloud 동기화가 기본으로 꺼져 있다고 설명합니다.',
          '**"기기 밖으로 나가는 것은 없습니다."** 사이트는 아무것도 업로드되지 않는다고 말하지만, 처리방침과 App Store 레이블은 익명 처리된 분석 및 충돌 데이터를 설명하며 그 데이터가 어디로 가는지는 명시되어 있지 않습니다.',
          '**하드웨어 요구 사항.** 2025년 10월 28일에 마지막으로 업데이트된 약관은 앱이 Apple Intelligence 지원 하드웨어를 필요로 한다고 말하지만, 사이트는 내려받는 로컬 모델을 대안으로 설명합니다.',
          '**실적.** 확인 시점에 App Store의 평점 수는 얼마 되지 않았으며, 앱은 2026년 9월 3일까지 Inscribe라는 이름이었습니다.',
          '**규제 대상 용도.** 의료, 법률 등 규제 대상 녹음에 대한 적합성은 평가하지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이점'],
        rows: [
          { '앱': '[Whisper Notes](/ko/power-local-llm/whisper-notes-review)', '플랫폼': 'iPhone, iPad, Mac', '가격 / 라이선스': '1회 구매 / 비공개 소스', '핵심 차이점': '화자 구분이 있는 오프라인 받아쓰기이지만 회의 어시스턴트와 문서 채팅은 없으며, 녹음을 멈춘 뒤에 텍스트가 나타납니다' },
          { '앱': '[MacWhisper](/ko/power-local-llm/macwhisper-review)', '플랫폼': 'macOS', '가격 / 라이선스': '프리미엄 / 독점', '핵심 차이점': '로컬 Whisper 및 Parakeet 받아쓰기를 위한 1회 구매형 Mac 앱이며, iPhone 버전은 없습니다' },
          { '앱': '[Meetily](/ko/power-local-llm/meetily-review)', '플랫폼': 'macOS, Windows', '가격 / 라이선스': '프리미엄 / MIT', '핵심 차이점': '로컬 받아쓰기와 Ollama 요약을 쓰는 오픈소스 회의 노트이며, Windows에서도 실행됩니다' },
        ],
        note: '선택하기 전에 각 앱의 현재 가격, 라이선스, 플랫폼을 해당 앱의 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '미국 외 지역에서 Lyonesse 가격은 얼마입니까?',
            a: '2026년 10월 26일에 확인한 App Store 스토어별 월간 / 연간 / 평생(Unlimited) 가격은 독일·스페인·프랑스 €8.99 / €34.99 / €69.99, 일본 ¥1,300 / ¥5,000 / ¥10,000, 한국 ₩12,000 / ₩49,000 / ₩99,000, 브라질 R$49.90 / R$199.90 / R$399.90이었습니다.',
          },
          {
            q: '회의를 녹음하려면 허락이 필요합니까?',
            a: '약관은 사용자에게 적용되는 녹음 관련 법률을 준수할 책임을 전적으로 사용자에게 지우며, 지역에 따라 통화 참가자 전원의 동의가 필요할 수 있습니다. 개발자는 위반에 대해 책임을 지지 않는다고 밝힙니다.',
          },
          {
            q: '갱신과 환불은 어떻게 처리됩니까?',
            a: '약관에 따르면 구독은 Apple ID 설정에서 기간 종료 최소 24시간 전에 취소하지 않으면 자동 갱신되고, 평생 구매에는 반복 요금이 없으며, 법률이 환불을 요구하는 경우를 제외하고 구매는 환불되지 않습니다.',
          },
          {
            q: 'Windows나 Android 버전이 있습니까?',
            a: '등록된 것은 없습니다. App Store 항목은 Apple 플랫폼만 다루며, 개발자 사이트에도 다른 플랫폼은 나와 있지 않습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Lyonesse는 iPhone이나 Mac에서 대화 내용, 회의 노트, 문서 채팅을 얻을 수 있는, 폭넓고 활발히 업데이트되는 앱으로, 체험용 무료 녹음 1건과 구독 옆에 평생 구매 옵션을 제공합니다. 반면 비공개 소스이고 독립 개발자 1인이 만들며, 26 계열 운영체제가 필요하고, 개인정보 보호와 속도에 관한 주장이 개발자 자체 측정 결과에 의존하며, iCloud 동기화 기본값을 두 가지로 다르게 설명합니다. 최신 Apple 기기를 사용하며 계정 없는 노트를 원하고 먼저 무료 녹음으로 시험해 볼 수 있는 분께 적합합니다. 민감하거나 규제 대상인 내용을 녹음하는 분은 의존하기 전에 개인정보 처리방침과 동기화 설정을 직접 확인해야 합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 Lyonesse](https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711) — 설명, 버전 기록, 요구 사항, 개인정보 레이블, 스토어별 앱 내 구입 가격, 2026년 10월 26일 확인.',
          '[Lyonesse 웹사이트](https://lyonesse.app) — 기능 목록, 가격 안내 문구, 비교표, 2026년 10월 26일 확인.',
          '[Lyonesse 개인정보 처리방침](https://lyonesse.app/privacy.html) — 데이터 수집과 동기화, 2026년 10월 9일 최종 업데이트.',
          '[Lyonesse 이용 약관](https://lyonesse.app/terms.html) — 구독, 환불, 녹음 동의, 2025년 10월 28일 최종 업데이트.',
          '[음성 벤치마크 게시물](https://lyonesse.app/blog/parakeet-moss-apple-speech-benchmark.html)과 [업로드 측정 게시물](https://lyonesse.app/blog/meeting-notes-upload-measured.html) — 개발자 자체 측정 결과.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Whisper Notes 리뷰](/ko/power-local-llm/whisper-notes-review) — iPhone, iPad, Mac용 오프라인 음성 인식.',
          '[MacWhisper 리뷰](/ko/power-local-llm/macwhisper-review) — Mac에서의 로컬 Whisper 및 Parakeet 받아쓰기.',
          '[Meetily 리뷰](/ko/power-local-llm/meetily-review) — 로컬 모델을 쓰는 오픈소스 회의 노트.',
          '[Castmates 리뷰](/ko/power-local-llm/castmates-review) — 같은 App Store 판매자의 오프라인 iPhone 캐릭터 채팅 앱.',
          '[Pajdo 리뷰](/ko/power-local-llm/pajdo-review) — 같은 개발자가 만든 Apple 건강 도우미로, 질문에 대한 답변이 iPhone에서 생성됩니다.',
          '[음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 이 리뷰가 속한 카테고리 비교 글.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 목록.',
        ],
      },
    },
  },
}
