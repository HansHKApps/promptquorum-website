// Whisper Notes Review: offline speech-to-text for iPhone, iPad and Mac
// Slug: whisper-notes-review
// Companion to: macwhisper-review, aquavoice-review, transcriptionsuite-review, whisper-cpp-review

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-18',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whisper-notes-review-hero-en.webp',
    title: 'Whisper Notes Review: Offline Speech-to-Text for iPhone, iPad and Mac',
    seoTitle: 'Whisper Notes Review: Offline Speech-to-Text App',
    intro:
      'Whisper Notes is a paid, closed-source app that transcribes speech on your iPhone, iPad or Apple silicon Mac without sending audio anywhere, with speaker labels and a one-time price instead of a subscription. This review covers what its website, App Store listing and changelog document, what they leave out, and how it compares with other speech-to-text tools in the directory.',
    metaDescription:
      'Whisper Notes review: $7.99 one-time offline speech-to-text app for iPhone, iPad and Apple silicon Mac with speaker labels. Not hands-on tested.',
    twitterDescription:
      'Whisper Notes review: a one-time-purchase offline transcription app for iPhone, iPad and Mac with speaker labels. Price, models, privacy, limits and alternatives.',
    audience:
      'Apple users who want private, subscription-free transcription of voice memos, meetings and lectures — covers price, install, models, privacy, limits and alternatives.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Whisper Notes review',
    targetKeywords: [
      'whisper notes review',
      'whisper notes app',
      'offline speech to text iphone',
      'offline transcription mac',
      'speaker labels offline transcription',
      'one-time purchase transcription app',
      'parakeet whisper sensevoice app',
    ],
    current_hardware_mentioned: ['iPhone 12', 'Apple silicon', 'Apple Neural Engine'],
    leadAnswerBlock:
      '**Whisper Notes is a closed-source speech-to-text app for iPhone, iPad and Apple silicon Macs that runs Whisper, Parakeet and SenseVoice models on the device, adds speaker labels, and costs $7.99 once on the App Store.** Its privacy policy says audio and transcripts never leave your device. This review covers iOS version 1.8.8 and Mac direct-download version 1.6.3 and is based on the public website, App Store listing and changelog, not on hands-on testing.',
    quickAnswerTop: {
      en: {
        question: 'Is Whisper Notes worth buying for offline transcription on an iPhone or Mac?',
        answer:
          'Probably, if you own a recent iPhone or an Apple silicon Mac and want private transcripts with speaker labels without a subscription. Check three things first: it is Apple-only, it is closed source, and it does not transcribe live while you speak.',
        bullets: [
          'One-time $7.99 App Store purchase for iPhone, iPad and the Mac App Store build; a separate Mac download is free up to 5,000 words a week or $14 once.',
          'Three models (Parakeet, Whisper, SenseVoice) with 100+ languages claimed.',
          'Speaker labels, SRT, VTT and TXT export, and Voice Memos or Shortcuts integration.',
          'The Mac download adds voice typing, meeting recording and an on-device AI assistant.',
          'Needs an iPhone 12 or newer on iOS 18, or an Apple silicon Mac; no Intel Mac, Windows or Android.',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get Whisper Notes', anchor: 'get-it' },
      { label: 'Whisper Notes at a Glance', anchor: 'at-a-glance' },
      { label: 'What Whisper Notes Is', anchor: 'what-is-whisper-notes' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Features', anchor: 'features' },
      { label: 'Models and Hardware', anchor: 'models-hardware' },
      { label: 'Privacy, License and Cost', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Whisper Notes vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Whisper Notes', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Whisper Notes', anchor: 'who-should-not-use' },
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
            text: 'Whisper Notes is a paid Apple-only app that transcribes recordings on the device with open speech models and labels the speakers.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a voice-memo transcriber that never phones home: you pay once, record or import audio, and get a text transcript with who-said-what labels, even in airplane mode.',
          },
        ],
        items: [
          'Version reviewed: iOS 1.8.8 (18 September 2026) and Mac direct download 1.6.3 (6 October 2026); the newest update is under two weeks old, so no stale-project warning applies.',
          'License and price: proprietary, closed source; $7.99 once on the US App Store, and a Mac download that is free up to 5,000 words a week or $14 once.',
          'Platforms: iPhone 12 or newer on iOS 18, iPad, and Apple silicon Macs.',
          'Standout features: speaker labels, three model families, voice typing and meeting recording on the Mac.',
          'Maturity: about 654 App Store ratings averaging 4.7, but no named maker on the site and no public source code.',
        ],
      },
      getItWhisperNotes: {
        id: 'get-it',
        title: 'Get Whisper Notes',
        content: [
          '**Whisper Notes installs like any Apple app, so no terminal is needed.** There are two routes on the Mac: the App Store, which shares one purchase with iPhone and iPad, and a direct download from the website with its own licence.',
        ],
        columns: ['Platform', 'Get It'],
        rows: [
          { 'Platform': 'iPhone and iPad (iOS 18+)', 'Get It': '[Whisper Notes on the App Store](https://apps.apple.com/us/app/whisper-notes-speech-to-text/id6447090616) — $7.99 once (US store)' },
          { 'Platform': 'Mac, App Store build', 'Get It': '[Mac App Store](https://apps.apple.com/us/app/whisper-notes-speech-to-text/id6447090616) — same $7.99 purchase as iPhone and iPad' },
          { 'Platform': 'Mac, direct download (DMG)', 'Get It': '[whispernotes.app](https://whispernotes.app/) — free up to 5,000 words a week, or $14 once' },
          { 'Platform': 'Website', 'Get It': '[whispernotes.app](https://whispernotes.app/)' },
          { 'Platform': 'Privacy policy', 'Get It': '[Whisper Notes privacy policy](https://whispernotes.app/privacy)' },
          { 'Platform': 'Source code', 'Get It': 'None; the app is closed source' },
        ],
        note: 'Only the direct Mac download includes voice typing, Qwen3-ASR (beta), the command-line tool and the MCP server. The site lists no Windows, Android or Intel Mac version and says none is planned. The App Store seller is SmashMelon LLC; the website names no maker.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Whisper Notes at a Glance',
        columns: ['Attribute', 'Whisper Notes'],
        rows: [
          { 'Attribute': 'Platform', 'Whisper Notes': 'iPhone, iPad, Mac (Apple silicon)' },
          { 'Attribute': 'Price', 'Whisper Notes': '$7.99 once (App Store); Mac download free tier or $14' },
          { 'Attribute': 'License', 'Whisper Notes': 'Proprietary, closed source' },
          { 'Attribute': 'Runs', 'Whisper Notes': 'On the device, offline; models download in the app' },
          { 'Attribute': 'Languages', 'Whisper Notes': '100+ claimed; Parakeet covers 25 European ones' },
          { 'Attribute': 'Real-time transcription', 'Whisper Notes': 'No; text streams in after you stop recording' },
          { 'Attribute': 'Speaker labels', 'Whisper Notes': 'Yes, on iPhone and Mac' },
          { 'Attribute': 'Usable on CPU only', 'Whisper Notes': 'No; needs Apple silicon or a recent iPhone' },
          { 'Attribute': 'Local API server', 'Whisper Notes': 'No; Mac download has a CLI and MCP server' },
        ],
        note: 'Attributes follow the speech-to-text comparison used in the Local LLM Software Directory. A missing statement on the site means unknown, not unsupported.',
      },
      whatIsWhisperNotes: {
        id: 'what-is-whisper-notes',
        title: 'What Whisper Notes Is',
        content: [
          '**Whisper Notes is a native transcription app, not a cloud service.** The site describes it as running the same open-source Whisper models as OpenAI\'s Whisper, plus NVIDIA Parakeet and SenseVoice, on the Apple Neural Engine, with no Python or command line required.',
          'It records from the Lock Screen, imports audio and video, and labels speakers. The Mac download from the website adds system-wide voice typing, recording of Zoom, Teams and Google Meet calls, and an on-device AI assistant. The site says it is "chosen by 70,000+ professionals", a vendor claim this review could not verify.',
          'This review draws on the website, FAQ, privacy policy and changelog, and the App Store listing. It involved no hands-on testing, so accuracy, speed and stability are not rated here.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is an install, a first-run model download and a recording.** The steps follow the FAQ and App Store listing.',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Buy it on the [App Store](https://apps.apple.com/us/app/whisper-notes-speech-to-text/id6447090616) for iPhone, iPad and Mac, or download the Mac version from [whispernotes.app](https://whispernotes.app/) and try it free.',
          },
          {
            title: 'Let the models download',
            whyItMatters: 'The models download inside the app on first use; after that it works offline, and the listing says you can turn on airplane mode before you record.',
          },
          {
            title: 'Record or import audio',
            whyItMatters: 'Record from the Lock Screen or the Action Button, share a memo from Voice Memos, or import audio and video from other apps.',
          },
          {
            title: 'Turn on speaker labels and export',
            whyItMatters: 'Tap the speaker icon on a transcript, rename the speakers, and export TXT, SRT or VTT with timestamps and speaker names.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The feature set centres on private transcription of recordings.** Everything below comes from the website and App Store listing.',
        ],
        items: [
          '**Fast capture.** Start recording from the Lock Screen, widgets, the Action Button or "Hey Siri", with no recording time limit.',
          '**Import and share.** Bring in audio and video from WhatsApp, Photos and Voice Memos, and extract subtitles from video.',
          '**Speaker labels.** On-device diarization with renamable speakers; rename a speaker once and the label updates throughout.',
          '**Export.** TXT, SRT and VTT with timestamps; the Mac app also saves Markdown files that an Obsidian vault can use.',
          '**Shortcuts actions.** Five actions, including Start Recording, Stop Recording and Transcribe Audio.',
          '**Mac extras (website download).** Hold Fn for system-wide voice typing, automatic meeting recording, summaries and chat with a local AI model (Gemma 4), and a command-line tool with a built-in MCP server.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Models and Hardware',
        content: [
          '**You pick the model: Parakeet is the default, Whisper covers 100+ languages and SenseVoice targets Chinese, Japanese and Korean.** Parakeet V3 supports 25 European languages. On iPhone, Apple Speech can also be chosen on iOS 26, and the Mac download offers Qwen3-ASR (beta, 30 languages, 16 GB of memory recommended).',
          'It needs an iPhone 12 or newer on iOS 18, or any Apple silicon Mac; the site recommends 8 GB or more of memory for Whisper Large V3 Turbo. The developer reports Parakeet transcribing 35 minutes in about 18 seconds on an M4 Pro, a 6.32% word error rate, and about 18 seconds for 5 minutes on an iPhone 15. These are the vendor\'s own tests and were not reproduced.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy, License and Cost',
        content: [
          '**The privacy policy says your voice, transcripts and user data never leave your device.** It states the app uses no analytics or tracking, collects and transmits no personal data, and that the developer has no access to your audio. The FAQ adds that deleting the app deletes your recordings, so export what you need.',
          'The models download inside the app, so the first run needs internet access. Sharing a transcript to another app is your choice and falls outside that promise. The code is not open, so these statements cannot be inspected, and this review did not examine network traffic.',
          'It is a paid, proprietary product: $7.99 once in the US App Store, covering iPhone, iPad and the Mac App Store build, with no subscription or in-app purchases. The separate Mac download has a free tier of 5,000 words a week or a $14 licence. A refund can be requested in the app\'s settings.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Fully offline',
            'What it means in real use': 'Audio stays on your device, even on a flight.',
            'Limitation / caveat': 'Closed source, so the claim cannot be checked.',
          },
          {
            'Benefit': 'One-time price',
            'What it means in real use': 'No subscription for transcription.',
            'Limitation / caveat': 'The Mac download is licensed separately.',
          },
          {
            'Benefit': 'Speaker labels',
            'What it means in real use': 'See who said what in meetings.',
            'Limitation / caveat': 'Accuracy is not published; similar voices need a manual speaker count.',
          },
          {
            'Benefit': 'Three model families',
            'What it means in real use': 'Choose speed or language coverage.',
            'Limitation / caveat': 'You switch to SenseVoice yourself for CJK languages.',
          },
          {
            'Benefit': 'Native Apple app',
            'What it means in real use': 'Lock Screen, Shortcuts and Voice Memos integration.',
            'Limitation / caveat': 'No live transcription, and no Windows, Android or Intel Mac.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Whisper Notes vs. Alternatives',
        content: [
          'These are the closest speech-to-text tools in the directory: a Mac-only rival, a cloud dictation app for contrast, a free cross-platform app and a developer engine.',
        ],
        columns: ['App', 'Platforms', 'Price and license', 'Role', 'Key difference'],
        rows: [
          {
            'App': 'Whisper Notes',
            'Platforms': 'iPhone, iPad, Mac',
            'Price and license': '$7.99 once, proprietary',
            'Role': 'Offline transcription app',
            'Key difference': 'iPhone and Mac in one purchase; speaker labels',
          },
          {
            'App': '[MacWhisper](/power-local-llm/macwhisper-review)',
            'Platforms': 'macOS',
            'Price and license': 'Freemium, proprietary',
            'Role': 'Mac transcription app',
            'Key difference': 'Listed for macOS only in the directory',
          },
          {
            'App': '[Aqua Voice](/power-local-llm/aquavoice-review)',
            'Platforms': 'Mac, Windows, iOS, Android',
            'Price and license': 'Freemium, proprietary',
            'Role': 'Dictation app',
            'Key difference': 'Listed as cloud-based, so audio leaves the device',
          },
          {
            'App': '[TranscriptionSuite](/power-local-llm/transcriptionsuite-review)',
            'Platforms': 'Windows, macOS, Linux',
            'Price and license': 'Free, GPL-3.0',
            'Role': 'Open-source transcription app',
            'Key difference': 'Open source and cross-platform; Docker on Windows and Linux',
          },
          {
            'App': '[whisper.cpp](/power-local-llm/whisper-cpp-review)',
            'Platforms': 'Windows, macOS, Linux',
            'Price and license': 'Free, MIT',
            'Role': 'Command-line engine',
            'Key difference': 'For developers; no app interface',
          },
        ],
        note: 'Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each project\'s own page before deciding.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Whisper Notes',
        items: [
          '**People who transcribe on an iPhone.** Lock Screen capture and Voice Memos sharing suit interviews and lectures.',
          '**Subscription-averse Mac users.** A one-time price replaces monthly transcription fees.',
          '**Privacy-minded professionals.** Journalists and researchers who cannot upload recordings can keep them on the device.',
          '**Mac users who dictate.** The website build adds hold-Fn voice typing in any app.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Whisper Notes',
        items: [
          '**Windows, Android and Intel Mac users.** None is supported or planned.',
          '**Owners of older iPhones.** The iPhone 11 and older are not supported.',
          '**Anyone who needs live captions.** It transcribes after you stop recording.',
          '**People who require open source.** The code is closed; look at the open alternatives in the table.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does it work in airplane mode?',
            a: 'Yes, once the models are downloaded; the App Store description says to turn on airplane mode before recording and notes that it works exactly the same.',
          },
          {
            q: 'Is the Mac app the same purchase as the iPhone app?',
            a: 'The App Store purchase covers iPhone, iPad and the Mac App Store build. The direct Mac download is separate: free up to 5,000 words a week, or $14 once.',
          },
          {
            q: 'Does it summarize transcripts?',
            a: 'On the Mac, after you download an on-device model, yes. On iPhone there are no AI summaries yet, and you copy the text into another tool.',
          },
          {
            q: 'Does it transcribe in real time?',
            a: 'No. Text appears gradually during transcription, but only after you finish recording.',
          },
          {
            q: 'Who makes it?',
            a: 'The App Store lists SmashMelon LLC as seller. The website names no company or person.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Whisper Notes is a good fit if you want private, subscription-free transcription on an iPhone or Apple silicon Mac: it installs like any app, labels speakers and keeps the audio on the device, by its own account.',
          'The caveats are transparency and scope: closed source, no named maker on the website, speed and accuracy figures that are the vendor\'s own, and no live transcription or non-Apple platforms. Try the free Mac tier before buying.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Whisper Notes website](https://whispernotes.app/) — features, pricing, FAQ and supported devices.',
          '[Whisper Notes privacy policy](https://whispernotes.app/privacy) — data handling and offline operation.',
          '[Whisper Notes changelog](https://whispernotes.app/changelog) — Mac direct-download versions and dates.',
          '[Whisper Notes on the App Store](https://apps.apple.com/us/app/whisper-notes-speech-to-text/id6447090616) — price, version, seller and description.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Voice and Speech Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — text-to-speech, speech-to-text and voice agents side by side.',
          '[MacWhisper Review](/power-local-llm/macwhisper-review) — the closest Mac-only transcription app.',
          '[Whisper.cpp Review](/power-local-llm/whisper-cpp-review) — the open engine behind many local Whisper apps.',
          '[Build a Local Voice Assistant](/power-local-llm/build-local-voice-assistant-2026) — wiring speech-to-text into a voice assistant.',
          '[The Complete Local LLM Software Directory](/directory) — a broader directory of local AI tools across platforms.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-18',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whisper-notes-review-hero-de.webp',
    title: 'Whisper Notes Rezension: Offline-Spracherkennung für iPhone, iPad und Mac',
    seoTitle: 'Whisper Notes Rezension: Offline-Spracherkennung',
    intro:
      'Whisper Notes ist eine kostenpflichtige, nicht quelloffene App, die Sprache auf Ihrem iPhone, iPad oder Apple-silicon-Mac in Text umwandelt, ohne Audio irgendwohin zu senden, mit Sprecherzuordnung und einem Einmalpreis statt Abo. Diese Rezension fasst zusammen, was Website, App-Store-Eintrag und Changelog dokumentieren, was sie auslassen und wie die App im Vergleich zu anderen Spracherkennungs-Werkzeugen im Verzeichnis abschneidet.',
    metaDescription:
      'Whisper Notes Rezension: Offline-Spracherkennung für iPhone, iPad und Mac für einmalig 8,99 € im deutschen App Store, mit Sprecherzuordnung.',
    twitterDescription:
      'Whisper Notes Rezension: eine Offline-Transkriptions-App mit Einmalkauf für iPhone, iPad und Mac mit Sprecherzuordnung. Preis, Modelle, Datenschutz, Grenzen und Alternativen.',
    audience:
      'Apple-Nutzer, die Sprachmemos, Besprechungen und Vorlesungen privat und ohne Abo transkribieren möchten — behandelt Preis, Installation, Modelle, Datenschutz, Grenzen und Alternativen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Whisper Notes review',
    targetKeywords: [
      'whisper notes rezension',
      'whisper notes app',
      'offline spracherkennung iphone',
      'offline transkription mac',
      'sprecherzuordnung offline transkription',
      'transkriptions-app einmalkauf',
      'parakeet whisper sensevoice app',
    ],
    current_hardware_mentioned: ['iPhone 12', 'Apple silicon', 'Apple Neural Engine'],
    leadAnswerBlock:
      '**Whisper Notes ist eine nicht quelloffene Spracherkennungs-App für iPhone, iPad und Apple-silicon-Macs, die Whisper-, Parakeet- und SenseVoice-Modelle auf dem Gerät ausführt, Sprecher zuordnet und im deutschen App Store einmalig 8,99 € kostet.** Laut Datenschutzerklärung verlassen Audio und Transkripte Ihr Gerät nie. Diese Rezension bezieht sich auf iOS-Version 1.8.8 und den Mac-Direkt-Download in Version 1.6.3 und stützt sich auf die öffentliche Website, den App-Store-Eintrag und den Changelog, nicht auf einen eigenen Praxistest.',
    quickAnswerTop: {
      de: {
        question: 'Lohnt sich der Kauf von Whisper Notes für Offline-Transkription auf iPhone oder Mac?',
        answer:
          'Wahrscheinlich, wenn Sie ein aktuelles iPhone oder einen Apple-silicon-Mac besitzen und private Transkripte mit Sprecherzuordnung ohne Abo wünschen. Prüfen Sie vorher drei Dinge: Die App gibt es nur für Apple-Geräte, sie ist nicht quelloffen, und sie transkribiert nicht live während des Sprechens.',
        bullets: [
          'Einmalkauf im App Store für 8,99 € (deutscher Store) für iPhone, iPad und die Mac-App-Store-Version; ein separater Mac-Download ist bis 5.000 Wörter pro Woche kostenlos oder einmalig 14 $ (USD) teuer.',
          'Drei Modelle (Parakeet, Whisper, SenseVoice) mit angeblich über 100 Sprachen.',
          'Sprecherzuordnung, Export als SRT, VTT und TXT sowie Anbindung an Sprachmemos und Kurzbefehle.',
          'Der Mac-Download ergänzt Sprachtippen, Besprechungsaufnahme und einen KI-Assistenten auf dem Gerät.',
          'Benötigt ein iPhone 12 oder neuer mit iOS 18 oder einen Apple-silicon-Mac; kein Intel-Mac, Windows oder Android.',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Whisper Notes herunterladen', anchor: 'get-it' },
      { label: 'Whisper Notes im Überblick', anchor: 'at-a-glance' },
      { label: 'Was Whisper Notes ist', anchor: 'what-is-whisper-notes' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Modelle und Hardware', anchor: 'models-hardware' },
      { label: 'Datenschutz, Lizenz und Kosten', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile und Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Whisper Notes im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen Whisper Notes geeignet ist', anchor: 'who-should-use' },
      { label: 'Für wen Whisper Notes nicht geeignet ist', anchor: 'who-should-not-use' },
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
            text: 'Whisper Notes ist eine kostenpflichtige App nur für Apple-Geräte, die Aufnahmen mit offenen Sprachmodellen auf dem Gerät transkribiert und die Sprecher kennzeichnet.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als Sprachmemo-Transkribierer vor, der nie nach Hause telefoniert: Sie zahlen einmal, nehmen auf oder importieren Audio und erhalten ein Textprotokoll mit Sprecherlabels, sogar im Flugmodus.',
          },
        ],
        items: [
          'Geprüfte Version: iOS 1.8.8 (18. September 2026) und Mac-Direkt-Download 1.6.3 (6. Oktober 2026); das neueste Update ist weniger als zwei Wochen alt, daher gilt keine Warnung vor einem ruhenden Projekt.',
          'Lizenz und Preis: proprietär, nicht quelloffen; 8,99 € einmalig im deutschen App Store sowie ein Mac-Download, der bis 5.000 Wörter pro Woche kostenlos ist oder einmalig 14 $ (USD) kostet.',
          'Plattformen: iPhone 12 oder neuer mit iOS 18, iPad und Macs mit Apple silicon.',
          'Besondere Funktionen: Sprecherzuordnung, drei Modellfamilien, Sprachtippen und Besprechungsaufnahme auf dem Mac.',
          'Reife: rund 654 App-Store-Bewertungen mit durchschnittlich 4,7, aber kein genannter Hersteller auf der Website und kein öffentlicher Quellcode.',
        ],
      },
      getItWhisperNotes: {
        id: 'get-it',
        title: 'Whisper Notes herunterladen',
        content: [
          '**Whisper Notes installieren Sie wie jede Apple-App, ein Terminal ist nicht nötig.** Auf dem Mac gibt es zwei Wege: den App Store, der einen Kauf mit iPhone und iPad teilt, und einen direkten Download von der Website mit eigener Lizenz.',
        ],
        columns: ['Plattform', 'Download'],
        rows: [
          { 'Plattform': 'iPhone und iPad (iOS 18+)', 'Download': '[Whisper Notes im App Store](https://apps.apple.com/de/app/id6447090616) — einmalig 8,99 € (deutscher Store)' },
          { 'Plattform': 'Mac, App-Store-Version', 'Download': '[Mac App Store](https://apps.apple.com/de/app/id6447090616) — derselbe Kauf wie für iPhone und iPad' },
          { 'Plattform': 'Mac, Direkt-Download (DMG)', 'Download': '[whispernotes.app](https://whispernotes.app/) — bis 5.000 Wörter pro Woche kostenlos oder einmalig 14 $ (USD)' },
          { 'Plattform': 'Website', 'Download': '[whispernotes.app](https://whispernotes.app/)' },
          { 'Plattform': 'Datenschutzerklärung', 'Download': '[Datenschutzerklärung von Whisper Notes](https://whispernotes.app/privacy)' },
          { 'Plattform': 'Quellcode', 'Download': 'Keiner; die App ist nicht quelloffen' },
        ],
        note: 'Nur der direkte Mac-Download enthält Sprachtippen, Qwen3-ASR (Beta), das Kommandozeilen-Werkzeug und den MCP-Server. Die Website nennt keine Version für Windows, Android oder Intel-Macs und sagt, eine solche sei nicht geplant. Als Verkäufer im App Store steht SmashMelon LLC; die Website nennt keinen Hersteller.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Whisper Notes im Überblick',
        columns: ['Merkmal', 'Whisper Notes'],
        rows: [
          { 'Merkmal': 'Plattform', 'Whisper Notes': 'iPhone, iPad, Mac (Apple silicon)' },
          { 'Merkmal': 'Preis', 'Whisper Notes': '8,99 € einmalig (App Store); Mac-Download kostenlose Stufe oder 14 $' },
          { 'Merkmal': 'Lizenz', 'Whisper Notes': 'Proprietär, nicht quelloffen' },
          { 'Merkmal': 'Ausführung', 'Whisper Notes': 'Auf dem Gerät, offline; Modelle werden in der App geladen' },
          { 'Merkmal': 'Sprachen', 'Whisper Notes': 'Über 100 angegeben; Parakeet deckt 25 europäische ab' },
          { 'Merkmal': 'Echtzeit-Transkription', 'Whisper Notes': 'Nein; der Text erscheint nach dem Ende der Aufnahme' },
          { 'Merkmal': 'Sprecherzuordnung', 'Whisper Notes': 'Ja, auf iPhone und Mac' },
          { 'Merkmal': 'Nur mit CPU nutzbar', 'Whisper Notes': 'Nein; braucht Apple silicon oder ein aktuelles iPhone' },
          { 'Merkmal': 'Lokaler API-Server', 'Whisper Notes': 'Nein; der Mac-Download hat CLI und MCP-Server' },
        ],
        note: 'Die Merkmale folgen dem Spracherkennungs-Vergleich im Verzeichnis lokaler LLM-Software. Eine fehlende Angabe auf der Website bedeutet „unbekannt“, nicht „nicht unterstützt“.',
      },
      whatIsWhisperNotes: {
        id: 'what-is-whisper-notes',
        title: 'Was Whisper Notes ist',
        content: [
          '**Whisper Notes ist eine native Transkriptions-App, kein Cloud-Dienst.** Die Website beschreibt, dass dieselben quelloffenen Whisper-Modelle wie bei OpenAI sowie NVIDIA Parakeet und SenseVoice auf der Apple Neural Engine laufen, ganz ohne Python oder Kommandozeile.',
          'Die App nimmt vom Sperrbildschirm aus auf, importiert Audio und Video und ordnet Sprecher zu. Der Mac-Download von der Website ergänzt systemweites Sprachtippen, die Aufnahme von Zoom-, Teams- und Google-Meet-Anrufen und einen KI-Assistenten auf dem Gerät. Die Website nennt die App „chosen by 70,000+ professionals“ — eine Herstellerangabe, die diese Rezension nicht überprüfen konnte.',
          'Diese Rezension stützt sich auf die Website, die FAQ, die Datenschutzerklärung und den Changelog sowie den App-Store-Eintrag. Einen eigenen Praxistest gab es nicht, daher werden Genauigkeit, Tempo und Stabilität hier nicht bewertet.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus Installation, Modell-Download beim ersten Start und einer Aufnahme.** Die Schritte folgen der FAQ und dem App-Store-Eintrag.',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Kaufen Sie sie im [App Store](https://apps.apple.com/de/app/id6447090616) für iPhone, iPad und Mac, oder laden Sie die Mac-Version von [whispernotes.app](https://whispernotes.app/) herunter und testen Sie sie kostenlos.',
          },
          {
            title: 'Modelle herunterladen lassen',
            whyItMatters: 'Die Modelle werden beim ersten Einsatz in der App geladen; danach funktioniert sie offline, und laut Eintrag können Sie vor der Aufnahme den Flugmodus einschalten.',
          },
          {
            title: 'Aufnehmen oder Audio importieren',
            whyItMatters: 'Nehmen Sie vom Sperrbildschirm oder der Aktionstaste aus auf, teilen Sie ein Memo aus Sprachmemos oder importieren Sie Audio und Video aus anderen Apps.',
          },
          {
            title: 'Sprecherzuordnung einschalten und exportieren',
            whyItMatters: 'Tippen Sie auf das Sprechersymbol eines Transkripts, benennen Sie die Sprecher um und exportieren Sie TXT, SRT oder VTT mit Zeitstempeln und Sprechernamen.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Der Funktionsumfang dreht sich um die private Transkription von Aufnahmen.** Alles Folgende stammt von der Website und aus dem App-Store-Eintrag.',
        ],
        items: [
          '**Schnelle Aufnahme.** Aufnahme per Sperrbildschirm, Widgets, Aktionstaste oder „Hey Siri“, ohne Zeitlimit.',
          '**Import und Teilen.** Audio und Video aus WhatsApp, Fotos und Sprachmemos übernehmen und Untertitel aus Videos extrahieren.',
          '**Sprecherzuordnung.** Sprecherzuordnung auf dem Gerät mit umbenennbaren Sprechern; ein einmal umbenannter Sprecher wird im ganzen Transkript aktualisiert.',
          '**Export.** TXT, SRT und VTT mit Zeitstempeln; die Mac-App speichert zudem Markdown-Dateien, die ein Obsidian-Vault nutzen kann.',
          '**Kurzbefehle-Aktionen.** Fünf Aktionen, darunter „Aufnahme starten“, „Aufnahme stoppen“ und „Audio transkribieren“.',
          '**Mac-Extras (Download von der Website).** Sprachtippen per gedrückter Fn-Taste, automatische Besprechungsaufnahme, Zusammenfassungen und Chat mit einem lokalen KI-Modell (Gemma 4) sowie ein Kommandozeilen-Werkzeug mit eingebautem MCP-Server.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelle und Hardware',
        content: [
          '**Sie wählen das Modell: Parakeet ist Standard, Whisper deckt über 100 Sprachen ab und SenseVoice zielt auf Chinesisch, Japanisch und Koreanisch.** Parakeet V3 unterstützt 25 europäische Sprachen. Auf dem iPhone lässt sich unter iOS 26 zusätzlich Apple Speech wählen, und der Mac-Download bietet Qwen3-ASR (Beta, 30 Sprachen, 16 GB Arbeitsspeicher empfohlen).',
          'Erforderlich sind ein iPhone 12 oder neuer mit iOS 18 oder ein beliebiger Apple-silicon-Mac; für Whisper Large V3 Turbo empfiehlt die Website 8 GB oder mehr Arbeitsspeicher. Der Entwickler gibt an, Parakeet transkribiere 35 Minuten in rund 18 Sekunden auf einem M4 Pro, bei 6,32 % Wortfehlerrate, und 5 Minuten in rund 18 Sekunden auf einem iPhone 15. Das sind eigene Tests des Herstellers, die nicht nachgemessen wurden.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz, Lizenz und Kosten',
        content: [
          '**Laut Datenschutzerklärung verlassen Ihre Stimme, Transkripte und Nutzerdaten Ihr Gerät nie.** Sie nennt keine Analyse- oder Tracking-Werkzeuge, keine Erhebung oder Übermittlung personenbezogener Daten und keinen Zugriff des Entwicklers auf Ihr Audio. Die FAQ ergänzt, dass beim Löschen der App auch Ihre Aufnahmen gelöscht werden; exportieren Sie also, was Sie behalten möchten.',
          'Die Modelle werden in der App geladen, daher braucht der erste Start Internet. Das Teilen eines Transkripts mit einer anderen App ist Ihre Entscheidung und fällt nicht unter dieses Versprechen. Der Code ist nicht offen, die Aussagen lassen sich also nicht prüfen, und diese Rezension hat den Netzwerkverkehr nicht untersucht.',
          'Es ist ein kostenpflichtiges, proprietäres Produkt: einmalig 8,99 € im deutschen App Store für iPhone, iPad und die Mac-App-Store-Version, ohne Abo und ohne In-App-Käufe. Der separate Mac-Download hat eine kostenlose Stufe mit 5.000 Wörtern pro Woche oder eine Lizenz für 14 $ (USD). Eine Rückerstattung lässt sich in den Einstellungen der App anfordern.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile und Einschränkungen',
        columns: ['Vorteil', 'Bedeutung im Alltag', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'Vollständig offline',
            'Bedeutung im Alltag': 'Audio bleibt auf Ihrem Gerät, auch im Flugzeug.',
            'Einschränkung / Hinweis': 'Nicht quelloffen, die Aussage lässt sich also nicht prüfen.',
          },
          {
            'Vorteil': 'Einmaliger Preis',
            'Bedeutung im Alltag': 'Kein Abo für die Transkription.',
            'Einschränkung / Hinweis': 'Der Mac-Download wird separat lizenziert.',
          },
          {
            'Vorteil': 'Sprecherzuordnung',
            'Bedeutung im Alltag': 'Erkennen, wer in Besprechungen was sagt.',
            'Einschränkung / Hinweis': 'Genauigkeit unveröffentlicht; ähnliche Stimmen brauchen eine manuelle Sprecherzahl.',
          },
          {
            'Vorteil': 'Drei Modellfamilien',
            'Bedeutung im Alltag': 'Tempo oder Sprachabdeckung wählen.',
            'Einschränkung / Hinweis': 'Für CJK-Sprachen wechseln Sie selbst zu SenseVoice.',
          },
          {
            'Vorteil': 'Native Apple-App',
            'Bedeutung im Alltag': 'Anbindung an Sperrbildschirm, Kurzbefehle und Sprachmemos.',
            'Einschränkung / Hinweis': 'Keine Live-Transkription und kein Windows, Android oder Intel-Mac.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Whisper Notes im Vergleich zu Alternativen',
        content: [
          'Dies sind die nächsten Spracherkennungs-Werkzeuge im Verzeichnis: ein reiner Mac-Konkurrent, eine Cloud-Diktier-App zum Kontrast, eine kostenlose plattformübergreifende App und eine Entwickler-Engine.',
        ],
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Rolle', 'Wichtigster Unterschied'],
        rows: [
          {
            'App': 'Whisper Notes',
            'Plattformen': 'iPhone, iPad, Mac',
            'Preis und Lizenz': '8,99 € einmalig, proprietär',
            'Rolle': 'Offline-Transkriptions-App',
            'Wichtigster Unterschied': 'iPhone und Mac in einem Kauf; Sprecherzuordnung',
          },
          {
            'App': '[MacWhisper](/de/power-local-llm/macwhisper-review)',
            'Plattformen': 'macOS',
            'Preis und Lizenz': 'Freemium, proprietär',
            'Rolle': 'Mac-Transkriptions-App',
            'Wichtigster Unterschied': 'Im Verzeichnis nur für macOS geführt',
          },
          {
            'App': '[Aqua Voice](/de/power-local-llm/aquavoice-review)',
            'Plattformen': 'Mac, Windows, iOS, Android',
            'Preis und Lizenz': 'Freemium, proprietär',
            'Rolle': 'Diktier-App',
            'Wichtigster Unterschied': 'Als cloudbasiert geführt, das Audio verlässt also das Gerät',
          },
          {
            'App': '[TranscriptionSuite](/de/power-local-llm/transcriptionsuite-review)',
            'Plattformen': 'Windows, macOS, Linux',
            'Preis und Lizenz': 'Kostenlos, GPL-3.0',
            'Rolle': 'Quelloffene Transkriptions-App',
            'Wichtigster Unterschied': 'Quelloffen und plattformübergreifend; Docker unter Windows und Linux',
          },
          {
            'App': '[whisper.cpp](/de/power-local-llm/whisper-cpp-review)',
            'Plattformen': 'Windows, macOS, Linux',
            'Preis und Lizenz': 'Kostenlos, MIT',
            'Rolle': 'Kommandozeilen-Engine',
            'Wichtigster Unterschied': 'Für Entwickler; keine App-Oberfläche',
          },
        ],
        note: 'Plattform-, Preis- und Funktionsangaben zu Drittanbieter-Apps ändern sich häufig. Prüfen Sie die aktuellen Angaben auf der Seite des jeweiligen Projekts, bevor Sie sich entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen Whisper Notes geeignet ist',
        items: [
          '**Menschen, die auf dem iPhone transkribieren.** Aufnahme per Sperrbildschirm und Teilen aus Sprachmemos passen zu Interviews und Vorlesungen.',
          '**Mac-Nutzer ohne Lust auf Abos.** Ein Einmalpreis ersetzt monatliche Transkriptionsgebühren.',
          '**Datenschutzbewusste Berufstätige.** Journalisten und Forschende, die Aufnahmen nicht hochladen dürfen, können sie auf dem Gerät behalten.',
          '**Mac-Nutzer, die diktieren.** Die Version von der Website ergänzt Sprachtippen per Fn-Taste in jeder App.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen Whisper Notes nicht geeignet ist',
        items: [
          '**Nutzer von Windows, Android und Intel-Macs.** Nichts davon wird unterstützt oder ist geplant.',
          '**Besitzer älterer iPhones.** Das iPhone 11 und ältere Modelle werden nicht unterstützt.',
          '**Alle, die Live-Untertitel brauchen.** Die App transkribiert nach dem Ende der Aufnahme.',
          '**Menschen, die Open Source verlangen.** Der Code ist geschlossen; schauen Sie sich die offenen Alternativen in der Tabelle an.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Funktioniert es im Flugmodus?',
            a: 'Ja, sobald die Modelle geladen sind; die App-Store-Beschreibung rät, vor der Aufnahme den Flugmodus einzuschalten, und sagt, es funktioniere genau gleich.',
          },
          {
            q: 'Ist die Mac-App derselbe Kauf wie die iPhone-App?',
            a: 'Der App-Store-Kauf deckt iPhone, iPad und die Mac-App-Store-Version ab. Der direkte Mac-Download ist getrennt: bis 5.000 Wörter pro Woche kostenlos oder einmalig 14 $ (USD).',
          },
          {
            q: 'Fasst es Transkripte zusammen?',
            a: 'Auf dem Mac ja, nachdem Sie ein KI-Modell auf dem Gerät geladen haben. Auf dem iPhone gibt es noch keine KI-Zusammenfassungen; Sie kopieren den Text in ein anderes Werkzeug.',
          },
          {
            q: 'Transkribiert es in Echtzeit?',
            a: 'Nein. Der Text erscheint während der Transkription nach und nach, aber erst nachdem Sie die Aufnahme beendet haben.',
          },
          {
            q: 'Wer steckt dahinter?',
            a: 'Der App Store nennt SmashMelon LLC als Verkäufer. Die Website nennt weder eine Firma noch eine Person.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'Whisper Notes passt gut, wenn Sie auf dem iPhone oder einem Apple-silicon-Mac privat und ohne Abo transkribieren möchten: Es lässt sich wie jede App installieren, ordnet Sprecher zu und hält das Audio nach eigener Angabe auf dem Gerät.',
          'Die Vorbehalte betreffen Transparenz und Umfang: nicht quelloffen, kein genannter Hersteller auf der Website, Tempo- und Genauigkeitsangaben nur vom Hersteller selbst sowie keine Live-Transkription und keine Nicht-Apple-Plattformen. Probieren Sie die kostenlose Mac-Stufe aus, bevor Sie kaufen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Whisper-Notes-Website](https://whispernotes.app/) — Funktionen, Preise, FAQ und unterstützte Geräte.',
          '[Datenschutzerklärung von Whisper Notes](https://whispernotes.app/privacy) — Datenverarbeitung und Offline-Betrieb.',
          '[Whisper-Notes-Changelog](https://whispernotes.app/changelog) — Versionen und Daten des Mac-Direkt-Downloads.',
          '[Whisper Notes im App Store](https://apps.apple.com/de/app/id6447090616) — Preis, Version, Verkäufer und Beschreibung.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokale Sprach- und Audio-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — Sprachausgabe, Spracherkennung und Sprachagenten nebeneinander.',
          '[MacWhisper Rezension](/de/power-local-llm/macwhisper-review) — die nächstliegende reine Mac-Transkriptions-App.',
          '[Whisper.cpp Rezension](/de/power-local-llm/whisper-cpp-review) — die offene Engine hinter vielen lokalen Whisper-Apps.',
          '[Einen lokalen Sprachassistenten bauen](/de/power-local-llm/build-local-voice-assistant-2026) — Spracherkennung in einen Sprachassistenten einbinden.',
          '[Das vollständige Verzeichnis lokaler LLM-Software](/de/directory) — ein breiteres Verzeichnis lokaler KI-Werkzeuge für alle Plattformen.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-18',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whisper-notes-review-hero-fr.webp',
    title: 'Test de Whisper Notes : reconnaissance vocale hors ligne pour iPhone, iPad et Mac',
    seoTitle: 'Test de Whisper Notes : reconnaissance vocale hors ligne',
    intro:
      'Whisper Notes est une application payante à code source fermé qui transcrit la parole sur votre iPhone, votre iPad ou votre Mac Apple silicon sans envoyer l’audio nulle part, avec étiquettes de locuteurs et un prix unique au lieu d’un abonnement. Ce test résume ce que documentent le site, la fiche App Store et le journal des modifications, ce qu’ils omettent, et comment l’application se situe face aux autres outils de reconnaissance vocale de l’annuaire.',
    metaDescription:
      'Test de Whisper Notes : reconnaissance vocale hors ligne pour iPhone, iPad et Mac à 8,99 € une fois sur l’App Store français. Sans essai pratique.',
    twitterDescription:
      'Test de Whisper Notes : une application de transcription hors ligne à achat unique pour iPhone, iPad et Mac avec étiquettes de locuteurs. Prix, modèles, confidentialité, limites et alternatives.',
    audience:
      'Utilisateurs Apple qui veulent transcrire en privé et sans abonnement des mémos vocaux, réunions et cours — prix, installation, modèles, confidentialité, limites et alternatives.',
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Whisper Notes review',
    targetKeywords: [
      'test whisper notes',
      'application whisper notes',
      'reconnaissance vocale hors ligne iphone',
      'transcription hors ligne mac',
      'étiquettes de locuteurs transcription hors ligne',
      'application de transcription achat unique',
      'parakeet whisper sensevoice application',
    ],
    current_hardware_mentioned: ['iPhone 12', 'Apple silicon', 'Apple Neural Engine'],
    leadAnswerBlock:
      '**Whisper Notes est une application de reconnaissance vocale à code source fermé pour iPhone, iPad et Mac Apple silicon qui exécute des modèles Whisper, Parakeet et SenseVoice sur l’appareil, ajoute des étiquettes de locuteurs et coûte 8,99 € une seule fois sur l’App Store français.** Selon sa politique de confidentialité, l’audio et les transcriptions ne quittent jamais votre appareil. Ce test porte sur la version iOS 1.8.8 et sur le téléchargement direct Mac en version 1.6.3, et s’appuie sur le site public, la fiche App Store et le journal des modifications, non sur un essai pratique.',
    quickAnswerTop: {
      fr: {
        question: 'Whisper Notes vaut-il l’achat pour une transcription hors ligne sur iPhone ou Mac ?',
        answer:
          'Probablement, si vous avez un iPhone récent ou un Mac Apple silicon et voulez des transcriptions privées avec étiquettes de locuteurs sans abonnement. Vérifiez d’abord trois points : elle ne fonctionne que sur Apple, son code est fermé et elle ne transcrit pas en direct pendant que vous parlez.',
        bullets: [
          'Achat unique de 8,99 € sur l’App Store français pour iPhone, iPad et la version Mac App Store ; un téléchargement Mac séparé est gratuit jusqu’à 5 000 mots par semaine ou 14 $ (USD) une fois.',
          'Trois modèles (Parakeet, Whisper, SenseVoice) avec plus de 100 langues annoncées.',
          'Étiquettes de locuteurs, export SRT, VTT et TXT, et intégration à Dictaphone et Raccourcis.',
          'Le téléchargement Mac ajoute la saisie vocale, l’enregistrement de réunions et un assistant IA sur l’appareil.',
          'Il faut un iPhone 12 ou plus récent sous iOS 18, ou un Mac Apple silicon ; ni Mac Intel, ni Windows, ni Android.',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir Whisper Notes', anchor: 'get-it' },
      { label: 'Whisper Notes en un coup d’œil', anchor: 'at-a-glance' },
      { label: 'Ce qu’est Whisper Notes', anchor: 'what-is-whisper-notes' },
      { label: 'Premiers pas', anchor: 'how-to-get-started' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Modèles et matériel', anchor: 'models-hardware' },
      { label: 'Confidentialité, licence et coût', anchor: 'privacy' },
      { label: 'Compromis : avantages et limites', anchor: 'tradeoffs' },
      { label: 'Whisper Notes face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Pour qui Whisper Notes convient', anchor: 'who-should-use' },
      { label: 'Pour qui Whisper Notes ne convient pas', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Pour aller plus loin', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Whisper Notes est une application payante réservée à Apple qui transcrit des enregistrements sur l’appareil avec des modèles vocaux ouverts et identifie les locuteurs.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-y un transcripteur de mémos vocaux qui ne téléphone jamais à la maison : vous payez une fois, enregistrez ou importez de l’audio et obtenez un texte avec les étiquettes « qui a dit quoi », même en mode avion.',
          },
        ],
        items: [
          'Version testée : iOS 1.8.8 (18 septembre 2026) et téléchargement direct Mac 1.6.3 (6 octobre 2026) ; la mise à jour la plus récente date de moins de deux semaines, l’avertissement de projet peu actif ne s’applique donc pas.',
          'Licence et prix : propriétaire, code fermé ; 8,99 € une fois sur l’App Store français et un téléchargement Mac gratuit jusqu’à 5 000 mots par semaine ou 14 $ (USD) une fois.',
          'Plateformes : iPhone 12 ou plus récent sous iOS 18, iPad et Mac Apple silicon.',
          'Points forts : étiquettes de locuteurs, trois familles de modèles, saisie vocale et enregistrement de réunions sur Mac.',
          'Maturité : environ 654 notes sur l’App Store, moyenne de 4,7, mais aucun éditeur nommé sur le site et aucun code source public.',
        ],
      },
      getItWhisperNotes: {
        id: 'get-it',
        title: 'Obtenir Whisper Notes',
        content: [
          '**Whisper Notes s’installe comme n’importe quelle application Apple, aucun terminal n’est nécessaire.** Sur Mac, il y a deux voies : l’App Store, qui partage un seul achat avec l’iPhone et l’iPad, et un téléchargement direct depuis le site avec sa propre licence.',
        ],
        columns: ['Plateforme', 'Téléchargement'],
        rows: [
          { 'Plateforme': 'iPhone et iPad (iOS 18+)', 'Téléchargement': '[Whisper Notes sur l’App Store](https://apps.apple.com/fr/app/id6447090616) — 8,99 € une fois (boutique française)' },
          { 'Plateforme': 'Mac, version App Store', 'Téléchargement': '[Mac App Store](https://apps.apple.com/fr/app/id6447090616) — même achat que pour l’iPhone et l’iPad' },
          { 'Plateforme': 'Mac, téléchargement direct (DMG)', 'Téléchargement': '[whispernotes.app](https://whispernotes.app/) — gratuit jusqu’à 5 000 mots par semaine, ou 14 $ (USD) une fois' },
          { 'Plateforme': 'Site web', 'Téléchargement': '[whispernotes.app](https://whispernotes.app/)' },
          { 'Plateforme': 'Politique de confidentialité', 'Téléchargement': '[Politique de confidentialité de Whisper Notes](https://whispernotes.app/privacy)' },
          { 'Plateforme': 'Code source', 'Téléchargement': 'Aucun ; l’application est à code source fermé' },
        ],
        note: 'Seul le téléchargement direct Mac inclut la saisie vocale, Qwen3-ASR (bêta), l’outil en ligne de commande et le serveur MCP. Le site ne liste aucune version pour Windows, Android ou Mac Intel et dit qu’aucune n’est prévue. Le vendeur sur l’App Store est SmashMelon LLC ; le site ne nomme aucun éditeur.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Whisper Notes en un coup d’œil',
        columns: ['Attribut', 'Whisper Notes'],
        rows: [
          { 'Attribut': 'Plateforme', 'Whisper Notes': 'iPhone, iPad, Mac (Apple silicon)' },
          { 'Attribut': 'Prix', 'Whisper Notes': '8,99 € une fois (App Store) ; Mac : offre gratuite ou 14 $' },
          { 'Attribut': 'Licence', 'Whisper Notes': 'Propriétaire, code fermé' },
          { 'Attribut': 'Exécution', 'Whisper Notes': 'Sur l’appareil, hors ligne ; modèles téléchargés dans l’app' },
          { 'Attribut': 'Langues', 'Whisper Notes': 'Plus de 100 annoncées ; Parakeet en couvre 25 européennes' },
          { 'Attribut': 'Transcription en temps réel', 'Whisper Notes': 'Non ; le texte apparaît après l’arrêt de l’enregistrement' },
          { 'Attribut': 'Étiquettes de locuteurs', 'Whisper Notes': 'Oui, sur iPhone et Mac' },
          { 'Attribut': 'Utilisable sur processeur seul', 'Whisper Notes': 'Non ; exige Apple silicon ou un iPhone récent' },
          { 'Attribut': 'Serveur d’API local', 'Whisper Notes': 'Non ; le téléchargement Mac a une CLI et un serveur MCP' },
        ],
        note: 'Les attributs suivent la comparaison de reconnaissance vocale de l’annuaire des logiciels de LLM locaux. L’absence d’indication sur le site signifie « inconnu », pas « non pris en charge ».',
      },
      whatIsWhisperNotes: {
        id: 'what-is-whisper-notes',
        title: 'Ce qu’est Whisper Notes',
        content: [
          '**Whisper Notes est une application de transcription native, pas un service cloud.** Le site explique qu’elle exécute les mêmes modèles Whisper open source que ceux d’OpenAI, ainsi que NVIDIA Parakeet et SenseVoice, sur l’Apple Neural Engine, sans Python ni ligne de commande.',
          'Elle enregistre depuis l’écran verrouillé, importe de l’audio et de la vidéo et identifie les locuteurs. Le téléchargement Mac depuis le site ajoute la saisie vocale à l’échelle du système, l’enregistrement des appels Zoom, Teams et Google Meet, et un assistant IA sur l’appareil. Le site affirme être « chosen by 70,000+ professionals », une déclaration de l’éditeur que ce test n’a pas pu vérifier.',
          'Ce test s’appuie sur le site, la FAQ, la politique de confidentialité et le journal des modifications, ainsi que sur la fiche App Store. Il n’a donné lieu à aucun essai pratique : la précision, la vitesse et la stabilité ne sont donc pas évaluées ici.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Premiers pas',
        content: [
          '**La mise en route consiste à installer l’application, télécharger les modèles au premier lancement, puis enregistrer.** Les étapes suivent la FAQ et la fiche App Store.',
        ],
        numberedItems: [
          {
            title: 'Installer l’application',
            whyItMatters: 'Achetez-la sur l’[App Store](https://apps.apple.com/fr/app/id6447090616) pour iPhone, iPad et Mac, ou téléchargez la version Mac sur [whispernotes.app](https://whispernotes.app/) et essayez-la gratuitement.',
          },
          {
            title: 'Laisser les modèles se télécharger',
            whyItMatters: 'Les modèles se téléchargent dans l’application à la première utilisation ; ensuite elle fonctionne hors ligne, et la fiche indique que vous pouvez activer le mode avion avant d’enregistrer.',
          },
          {
            title: 'Enregistrer ou importer de l’audio',
            whyItMatters: 'Enregistrez depuis l’écran verrouillé ou le bouton Action, partagez un mémo depuis Dictaphone, ou importez de l’audio et de la vidéo depuis d’autres applications.',
          },
          {
            title: 'Activer les étiquettes de locuteurs et exporter',
            whyItMatters: 'Touchez l’icône de locuteur d’une transcription, renommez les locuteurs et exportez en TXT, SRT ou VTT avec horodatage et noms de locuteurs.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**Les fonctionnalités tournent autour de la transcription privée d’enregistrements.** Tout ce qui suit provient du site et de la fiche App Store.',
        ],
        items: [
          '**Capture rapide.** Lancez l’enregistrement depuis l’écran verrouillé, les widgets, le bouton Action ou « Dis Siri », sans limite de durée.',
          '**Import et partage.** Importez de l’audio et de la vidéo depuis WhatsApp, Photos et Dictaphone, et extrayez les sous-titres d’une vidéo.',
          '**Étiquettes de locuteurs.** Diarisation sur l’appareil avec locuteurs renommables ; renommez un locuteur une fois et l’étiquette se met à jour dans toute la transcription.',
          '**Export.** TXT, SRT et VTT avec horodatage ; l’application Mac enregistre aussi des fichiers Markdown qu’un coffre Obsidian peut utiliser.',
          '**Actions Raccourcis.** Cinq actions, dont Démarrer l’enregistrement, Arrêter l’enregistrement et Transcrire l’audio.',
          '**Extras Mac (téléchargement depuis le site).** Saisie vocale en maintenant Fn, enregistrement automatique des réunions, résumés et conversation avec un modèle IA local (Gemma 4), plus un outil en ligne de commande avec serveur MCP intégré.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modèles et matériel',
        content: [
          '**Vous choisissez le modèle : Parakeet est le choix par défaut, Whisper couvre plus de 100 langues et SenseVoice vise le chinois, le japonais et le coréen.** Parakeet V3 prend en charge 25 langues européennes. Sur iPhone, Apple Speech peut aussi être choisi sous iOS 26, et le téléchargement Mac propose Qwen3-ASR (bêta, 30 langues, 16 Go de mémoire recommandés).',
          'Il faut un iPhone 12 ou plus récent sous iOS 18, ou n’importe quel Mac Apple silicon ; le site recommande 8 Go de mémoire ou plus pour Whisper Large V3 Turbo. Le développeur indique que Parakeet transcrit 35 minutes en environ 18 secondes sur un M4 Pro, avec un taux d’erreur de 6,32 %, et 5 minutes en environ 18 secondes sur un iPhone 15. Ce sont des tests de l’éditeur, non reproduits.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité, licence et coût',
        content: [
          '**La politique de confidentialité dit que votre voix, vos transcriptions et vos données d’utilisateur ne quittent jamais votre appareil.** Elle indique qu’aucun outil d’analyse ou de suivi n’est utilisé, qu’aucune donnée personnelle n’est collectée ni transmise et que le développeur n’a aucun accès à votre audio. La FAQ ajoute que supprimer l’application supprime aussi vos enregistrements : exportez donc ce que vous voulez garder.',
          'Les modèles se téléchargent dans l’application, le premier lancement exige donc un accès internet. Partager une transcription vers une autre application relève de votre choix et sort de cette promesse. Le code n’est pas ouvert, ces affirmations ne peuvent donc pas être inspectées, et ce test n’a pas examiné le trafic réseau.',
          'C’est un produit payant et propriétaire : 8,99 € une fois sur l’App Store français, pour l’iPhone, l’iPad et la version Mac App Store, sans abonnement ni achat intégré. Le téléchargement Mac séparé propose une offre gratuite de 5 000 mots par semaine ou une licence à 14 $ (USD). Un remboursement peut être demandé dans les réglages de l’application.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: ['Avantage', 'En pratique', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Entièrement hors ligne',
            'En pratique': 'L’audio reste sur votre appareil, même en avion.',
            'Limite / réserve': 'Code fermé : l’affirmation ne peut pas être vérifiée.',
          },
          {
            'Avantage': 'Prix unique',
            'En pratique': 'Aucun abonnement pour la transcription.',
            'Limite / réserve': 'Le téléchargement Mac est sous licence séparée.',
          },
          {
            'Avantage': 'Étiquettes de locuteurs',
            'En pratique': 'Voir qui parle dans les réunions.',
            'Limite / réserve': 'Précision non publiée ; des voix proches exigent un nombre de locuteurs manuel.',
          },
          {
            'Avantage': 'Trois familles de modèles',
            'En pratique': 'Choisir vitesse ou couverture linguistique.',
            'Limite / réserve': 'Vous passez vous-même à SenseVoice pour le chinois, le japonais et le coréen.',
          },
          {
            'Avantage': 'Application Apple native',
            'En pratique': 'Intégration à l’écran verrouillé, Raccourcis et Dictaphone.',
            'Limite / réserve': 'Pas de transcription en direct, ni Windows, ni Android, ni Mac Intel.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Whisper Notes face aux alternatives',
        content: [
          'Voici les outils de reconnaissance vocale les plus proches de l’annuaire : un concurrent réservé au Mac, une application de dictée cloud pour contraste, une application gratuite multiplateforme et un moteur pour développeurs.',
        ],
        columns: ['Application', 'Plateformes', 'Prix et licence', 'Rôle', 'Différence principale'],
        rows: [
          {
            'Application': 'Whisper Notes',
            'Plateformes': 'iPhone, iPad, Mac',
            'Prix et licence': '8,99 € une fois, propriétaire',
            'Rôle': 'Application de transcription hors ligne',
            'Différence principale': 'iPhone et Mac en un seul achat ; étiquettes de locuteurs',
          },
          {
            'Application': '[MacWhisper](/fr/power-local-llm/macwhisper-review)',
            'Plateformes': 'macOS',
            'Prix et licence': 'Freemium, propriétaire',
            'Rôle': 'Application de transcription pour Mac',
            'Différence principale': 'Répertoriée pour macOS uniquement dans l’annuaire',
          },
          {
            'Application': '[Aqua Voice](/fr/power-local-llm/aquavoice-review)',
            'Plateformes': 'Mac, Windows, iOS, Android',
            'Prix et licence': 'Freemium, propriétaire',
            'Rôle': 'Application de dictée',
            'Différence principale': 'Répertoriée comme basée sur le cloud : l’audio quitte l’appareil',
          },
          {
            'Application': '[TranscriptionSuite](/fr/power-local-llm/transcriptionsuite-review)',
            'Plateformes': 'Windows, macOS, Linux',
            'Prix et licence': 'Gratuit, GPL-3.0',
            'Rôle': 'Application de transcription open source',
            'Différence principale': 'Open source et multiplateforme ; Docker sous Windows et Linux',
          },
          {
            'Application': '[whisper.cpp](/fr/power-local-llm/whisper-cpp-review)',
            'Plateformes': 'Windows, macOS, Linux',
            'Prix et licence': 'Gratuit, MIT',
            'Rôle': 'Moteur en ligne de commande',
            'Différence principale': 'Pour développeurs ; pas d’interface d’application',
          },
        ],
        note: 'Les plateformes, prix et fonctionnalités des applications tierces changent souvent. Vérifiez les informations actuelles sur la page de chaque projet avant de décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui Whisper Notes convient',
        items: [
          '**Ceux qui transcrivent sur iPhone.** L’enregistrement depuis l’écran verrouillé et le partage depuis Dictaphone conviennent aux entretiens et aux cours.',
          '**Les utilisateurs de Mac réfractaires aux abonnements.** Un prix unique remplace des frais de transcription mensuels.',
          '**Les professionnels soucieux de confidentialité.** Journalistes et chercheurs qui ne peuvent pas téléverser leurs enregistrements peuvent les garder sur l’appareil.',
          '**Les utilisateurs de Mac qui dictent.** La version du site ajoute la saisie vocale en maintenant Fn dans n’importe quelle application.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Pour qui Whisper Notes ne convient pas',
        items: [
          '**Les utilisateurs de Windows, Android et Mac Intel.** Aucune de ces plateformes n’est prise en charge ni prévue.',
          '**Les propriétaires d’anciens iPhone.** L’iPhone 11 et les modèles plus anciens ne sont pas pris en charge.',
          '**Ceux qui ont besoin de sous-titres en direct.** L’application transcrit après l’arrêt de l’enregistrement.',
          '**Ceux qui exigent l’open source.** Le code est fermé ; regardez les alternatives ouvertes du tableau.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Fonctionne-t-elle en mode avion ?',
            a: 'Oui, une fois les modèles téléchargés ; la description de l’App Store conseille d’activer le mode avion avant d’enregistrer et dit que tout fonctionne exactement pareil.',
          },
          {
            q: 'L’application Mac est-elle le même achat que l’application iPhone ?',
            a: 'L’achat sur l’App Store couvre l’iPhone, l’iPad et la version Mac App Store. Le téléchargement direct Mac est distinct : gratuit jusqu’à 5 000 mots par semaine, ou 14 $ (USD) une fois.',
          },
          {
            q: 'Résume-t-elle les transcriptions ?',
            a: 'Sur Mac, oui, après avoir téléchargé un modèle IA sur l’appareil. Sur iPhone, il n’y a pas encore de résumés IA ; vous copiez le texte dans un autre outil.',
          },
          {
            q: 'Transcrit-elle en temps réel ?',
            a: 'Non. Le texte apparaît progressivement pendant la transcription, mais seulement après la fin de l’enregistrement.',
          },
          {
            q: 'Qui la développe ?',
            a: 'L’App Store indique SmashMelon LLC comme vendeur. Le site ne nomme ni entreprise ni personne.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Whisper Notes convient si vous voulez transcrire en privé et sans abonnement sur un iPhone ou un Mac Apple silicon : elle s’installe comme n’importe quelle application, identifie les locuteurs et garde l’audio sur l’appareil, selon ses propres dires.',
          'Les réserves tiennent à la transparence et au périmètre : code fermé, aucun éditeur nommé sur le site, chiffres de vitesse et de précision fournis par l’éditeur lui-même, pas de transcription en direct et aucune plateforme hors Apple. Essayez l’offre gratuite sur Mac avant d’acheter.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de Whisper Notes](https://whispernotes.app/) — fonctionnalités, tarifs, FAQ et appareils pris en charge.',
          '[Politique de confidentialité de Whisper Notes](https://whispernotes.app/privacy) — traitement des données et fonctionnement hors ligne.',
          '[Journal des modifications de Whisper Notes](https://whispernotes.app/changelog) — versions et dates du téléchargement direct Mac.',
          '[Whisper Notes sur l’App Store](https://apps.apple.com/fr/app/id6447090616) — prix, version, vendeur et description.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Pour aller plus loin',
        items: [
          '[Outils vocaux locaux comparés](/fr/power-local-llm/local-llm-voice-audio-compared) — synthèse vocale, reconnaissance vocale et agents vocaux côte à côte.',
          '[Test de MacWhisper](/fr/power-local-llm/macwhisper-review) — l’application de transcription réservée au Mac la plus proche.',
          '[Test de Whisper.cpp](/fr/power-local-llm/whisper-cpp-review) — le moteur ouvert derrière de nombreuses applications Whisper locales.',
          '[Créer un assistant vocal local](/fr/power-local-llm/build-local-voice-assistant-2026) — intégrer la reconnaissance vocale à un assistant vocal.',
          '[L’annuaire complet des logiciels de LLM locaux](/fr/directory) — un annuaire plus large d’outils d’IA locale pour toutes les plateformes.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-18',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whisper-notes-review-hero-ja.webp',
    title: 'Whisper Notesレビュー：iPhone・iPad・Mac向けのオフライン音声認識アプリ',
    seoTitle: 'Whisper Notesレビュー：オフライン音声認識アプリ',
    intro:
      'Whisper Notesは、音声をどこにも送らずにiPhone、iPad、Apple silicon搭載Macで文字起こしする、有料でクローズドソースのアプリです。話者ラベルに対応し、サブスクリプションではなく買い切り価格です。このレビューでは、公式サイト・App Storeの掲載情報・更新履歴で確認できる内容と記載のない点、そしてディレクトリ内の他の音声認識ツールとの違いをまとめます。',
    metaDescription:
      'Whisper Notesレビュー：日本のApp Storeで800円の買い切り、話者ラベル対応のiPhone・iPad・Apple silicon Mac向けオフライン音声認識アプリ。実機テストなし。',
    twitterDescription:
      'Whisper Notesレビュー：iPhone・iPad・Macで使える、話者ラベル付きの買い切り型オフライン文字起こしアプリ。価格、モデル、プライバシー、制限、代替ツールを解説します。',
    audience:
      'ボイスメモ、会議、講義をプライベートかつサブスクなしで文字起こししたいApple製品のユーザー向けに、価格、導入、モデル、プライバシー、制限、代替ツールを解説します。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Whisper Notes review',
    targetKeywords: [
      'whisper notes レビュー',
      'whisper notes アプリ',
      'iphone オフライン 音声認識',
      'mac オフライン 文字起こし',
      '話者ラベル オフライン 文字起こし',
      '買い切り 文字起こしアプリ',
      'parakeet whisper sensevoice アプリ',
    ],
    current_hardware_mentioned: ['iPhone 12', 'Apple silicon', 'Apple Neural Engine'],
    leadAnswerBlock:
      '**Whisper Notesは、iPhone、iPad、Apple silicon搭載Mac向けのクローズドソースの音声認識アプリで、Whisper、Parakeet、SenseVoiceのモデルを端末上で実行し、話者ラベルを付け、日本のApp Storeでは800円の買い切りです。** プライバシーポリシーによると、音声と文字起こし結果が端末の外に出ることはありません。本レビューはiOS版1.8.8とMac直接ダウンロード版1.6.3が対象で、公式サイト、App Storeの掲載情報、更新履歴に基づいており、実機テストは行っていません。',
    quickAnswerTop: {
      ja: {
        question: 'iPhoneやMacでオフライン文字起こしをするために、Whisper Notesは買う価値がありますか？',
        answer:
          '最近のiPhoneかApple silicon搭載Macをお持ちで、サブスクなしで話者ラベル付きのプライベートな文字起こしが欲しいなら、おそらく向いています。先に3点を確認してください。Apple製品専用であること、クローズドソースであること、話している最中のリアルタイム文字起こしはしないことです。',
        bullets: [
          '日本のApp Storeで800円の買い切り。iPhone、iPad、Mac App Store版で使え、別配布のMac版は週5,000語まで無料、または14ドル（USD）の買い切りです。',
          '3つのモデル（Parakeet、Whisper、SenseVoice）で100以上の言語をうたっています。',
          '話者ラベル、SRT・VTT・TXT書き出し、ボイスメモやショートカットとの連携。',
          'Mac版（直接ダウンロード）には、音声入力、会議の録音、端末上のAIアシスタントが加わります。',
          'iOS 18のiPhone 12以降またはApple silicon搭載Macが必要で、Intel Mac、Windows、Androidは非対応です。',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Whisper Notesを入手する', anchor: 'get-it' },
      { label: 'Whisper Notesの概要', anchor: 'at-a-glance' },
      { label: 'Whisper Notesとは', anchor: 'what-is-whisper-notes' },
      { label: '始め方', anchor: 'how-to-get-started' },
      { label: '機能', anchor: 'features' },
      { label: 'モデルとハードウェア', anchor: 'models-hardware' },
      { label: 'プライバシー、ライセンス、費用', anchor: 'privacy' },
      { label: 'メリットと制限', anchor: 'tradeoffs' },
      { label: 'Whisper Notesと代替ツールの比較', anchor: 'vs-alternatives' },
      { label: 'Whisper Notesが向いている人', anchor: 'who-should-use' },
      { label: 'Whisper Notesが向いていない人', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '情報源', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Whisper Notesは、オープンな音声モデルで録音を端末上で文字起こしし、話者にラベルを付ける、Apple製品専用の有料アプリです。',
          },
          {
            type: 'plain-terms',
            text: '外部に一切送信しないボイスメモ文字起こしツールだと考えてください。一度支払えば、録音または音声の取り込みだけで、機内モードでも「誰が話したか」付きのテキストが得られます。',
          },
        ],
        items: [
          '確認したバージョン：iOS版1.8.8（2026年9月18日）とMac直接ダウンロード版1.6.3（2026年10月6日）。最新の更新は2週間以内のため、更新停止の警告は当てはまりません。',
          'ライセンスと価格：プロプライエタリでクローズドソース。日本のApp Storeで800円の買い切りで、別配布のMac版は週5,000語まで無料、または14ドル（USD）の買い切りです。',
          '対応環境：iOS 18のiPhone 12以降、iPad、Apple silicon搭載Mac。',
          '主な特長：話者ラベル、3つのモデルファミリー、Macでの音声入力と会議録音。',
          '成熟度：App Storeの評価は約654件で平均4.7ですが、サイトに制作者の記載はなく、ソースコードも非公開です。',
        ],
      },
      getItWhisperNotes: {
        id: 'get-it',
        title: 'Whisper Notesを入手する',
        content: [
          '**Whisper Notesは他のApple製アプリと同じようにインストールでき、ターミナルは不要です。** Macには2つの入手経路があります。iPhone・iPadと1回の購入を共有するApp Storeと、独自のライセンスを持つ公式サイトからの直接ダウンロードです。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          { 'プラットフォーム': 'iPhoneとiPad（iOS 18以降）', '入手先': '[App StoreのWhisper Notes](https://apps.apple.com/jp/app/id6447090616) — 800円の買い切り（日本のストア）' },
          { 'プラットフォーム': 'Mac、App Store版', '入手先': '[Mac App Store](https://apps.apple.com/jp/app/id6447090616) — iPhone・iPadと同じ購入' },
          { 'プラットフォーム': 'Mac、直接ダウンロード（DMG）', '入手先': '[whispernotes.app](https://whispernotes.app/) — 週5,000語まで無料、または14ドル（USD）の買い切り' },
          { 'プラットフォーム': '公式サイト', '入手先': '[whispernotes.app](https://whispernotes.app/)' },
          { 'プラットフォーム': 'プライバシーポリシー', '入手先': '[Whisper Notesのプライバシーポリシー](https://whispernotes.app/privacy)' },
          { 'プラットフォーム': 'ソースコード', '入手先': 'なし。アプリはクローズドソースです' },
        ],
        note: '音声入力、Qwen3-ASR（ベータ）、コマンドラインツール、MCPサーバーが使えるのは、Macの直接ダウンロード版だけです。サイトにはWindows、Android、Intel Mac向けの版はなく、予定もないと書かれています。App Storeの販売元はSmashMelon LLCで、サイトには制作者の記載がありません。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Whisper Notesの概要',
        columns: ['項目', 'Whisper Notes'],
        rows: [
          { '項目': '対応環境', 'Whisper Notes': 'iPhone、iPad、Mac（Apple silicon）' },
          { '項目': '価格', 'Whisper Notes': '800円の買い切り（App Store）。Mac直接版は無料枠または14ドル' },
          { '項目': 'ライセンス', 'Whisper Notes': 'プロプライエタリ、クローズドソース' },
          { '項目': '実行場所', 'Whisper Notes': '端末上でオフライン。モデルはアプリ内でダウンロード' },
          { '項目': '対応言語', 'Whisper Notes': '100以上をうたう。Parakeetは欧州の25言語' },
          { '項目': 'リアルタイム文字起こし', 'Whisper Notes': '非対応。録音停止後にテキストが流れて表示される' },
          { '項目': '話者ラベル', 'Whisper Notes': '対応（iPhoneとMac）' },
          { '項目': 'CPUのみで利用可能', 'Whisper Notes': '不可。Apple siliconまたは新しいiPhoneが必要' },
          { '項目': 'ローカルAPIサーバー', 'Whisper Notes': 'なし。Mac直接版にCLIとMCPサーバーあり' },
        ],
        note: 'この項目は、ローカルLLMソフトウェアディレクトリで使っている音声認識の比較に沿っています。サイトに記載がないことは「不明」を意味し、「非対応」ではありません。',
      },
      whatIsWhisperNotes: {
        id: 'what-is-whisper-notes',
        title: 'Whisper Notesとは',
        content: [
          '**Whisper Notesはネイティブの文字起こしアプリであり、クラウドサービスではありません。** サイトによると、OpenAIのWhisperと同じオープンソースのWhisperモデルに加え、NVIDIA ParakeetとSenseVoiceをApple Neural Engine上で動かし、Pythonやコマンドラインは不要です。',
          'ロック画面から録音でき、音声や動画を取り込み、話者にラベルを付けます。公式サイトで配布されるMac版は、システム全体で使える音声入力、Zoom・Teams・Google Meetの通話の録音、端末上のAIアシスタントを加えます。サイトは「chosen by 70,000+ professionals」と述べていますが、これは提供元の主張で、本レビューでは確認できませんでした。',
          '本レビューは、公式サイト、FAQ、プライバシーポリシー、更新履歴、およびApp Storeの掲載情報に基づいています。実機テストは行っていないため、精度、速度、安定性は評価していません。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '始め方',
        content: [
          '**セットアップは、インストール、初回のモデルダウンロード、そして録音です。** 手順はFAQとApp Storeの掲載情報に沿っています。',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: 'iPhone・iPad・Mac向けには[App Store](https://apps.apple.com/jp/app/id6447090616)で購入するか、Mac版を[whispernotes.app](https://whispernotes.app/)からダウンロードして無料で試せます。',
          },
          {
            title: 'モデルのダウンロードを待つ',
            whyItMatters: 'モデルは初回利用時にアプリ内でダウンロードされ、その後はオフラインで動作します。掲載情報には、録音前に機内モードをオンにしてよいと書かれています。',
          },
          {
            title: '録音または音声を取り込む',
            whyItMatters: 'ロック画面やアクションボタンから録音するか、ボイスメモから共有するか、他のアプリから音声や動画を取り込みます。',
          },
          {
            title: '話者ラベルをオンにして書き出す',
            whyItMatters: '文字起こしの話者アイコンをタップし、話者の名前を変更して、タイムスタンプと話者名付きでTXT、SRT、VTTに書き出します。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**機能の中心は、録音のプライベートな文字起こしです。** 以下はすべて公式サイトとApp Storeの掲載情報に基づいています。',
        ],
        items: [
          '**すばやい録音開始。** ロック画面、ウィジェット、アクションボタン、「Hey Siri」から録音を始められ、録音時間の上限はありません。',
          '**取り込みと共有。** WhatsApp、写真、ボイスメモから音声や動画を取り込み、動画から字幕を抽出できます。',
          '**話者ラベル。** 端末上の話者分離で、話者名を変更できます。一度名前を変えると文字起こし全体のラベルが更新されます。',
          '**書き出し。** タイムスタンプ付きのTXT、SRT、VTT。Mac版はObsidianのVaultで使えるMarkdownファイルも保存します。',
          '**ショートカットのアクション。** 録音開始、録音停止、音声の文字起こしなど5つのアクションがあります。',
          '**Mac版の追加機能（公式サイトからのダウンロード）。** Fnキー長押しの音声入力、会議の自動録音、ローカルAIモデル（Gemma 4）による要約とチャット、MCPサーバー内蔵のコマンドラインツール。',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'モデルとハードウェア',
        content: [
          '**モデルは選べます。Parakeetが既定で、Whisperは100以上の言語に対応し、SenseVoiceは中国語・日本語・韓国語向けです。** Parakeet V3は欧州の25言語に対応します。iPhoneではiOS 26でApple Speechも選べ、Mac直接版にはQwen3-ASR（ベータ、30言語、16 GBのメモリを推奨）があります。',
          'iOS 18のiPhone 12以降、またはApple silicon搭載Macが必要で、Whisper Large V3 Turboには8 GB以上のメモリをサイトが推奨しています。開発元は、M4 Proでの35分の音声をParakeetが約18秒で文字起こしし単語誤り率は6.32%、iPhone 15では5分の音声を約18秒で処理すると述べています。これらは提供元自身のテストで、再現していません。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー、ライセンス、費用',
        content: [
          '**プライバシーポリシーによると、音声、文字起こし、ユーザーデータが端末の外に出ることはありません。** 分析・トラッキングツールは使わず、個人データの収集や送信もなく、開発元は音声にアクセスできないとしています。FAQには、アプリを削除すると録音も消えるため、必要なものは書き出してほしいとあります。',
          'モデルはアプリ内でダウンロードされるため、初回起動にはインターネット接続が必要です。文字起こしを他のアプリに共有するのは利用者の判断で、この約束の対象外です。コードは公開されていないため、これらの説明は検証できず、本レビューでは通信内容も確認していません。',
          '有料のプロプライエタリ製品で、日本のApp Storeで800円の買い切りです。iPhone、iPad、Mac App Store版で使え、サブスクリプションやアプリ内課金はありません。別配布のMac版は週5,000語までの無料枠か、14ドル（USD）のライセンスです。返金はアプリの設定から申請できます。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'メリットと制限',
        columns: ['メリット', '実際の使い勝手', '制限・注意点'],
        rows: [
          {
            'メリット': '完全オフライン',
            '実際の使い勝手': '機内でも音声は端末の外に出ません。',
            '制限・注意点': 'クローズドソースのため、主張を検証できません。',
          },
          {
            'メリット': '買い切り価格',
            '実際の使い勝手': '文字起こしにサブスクは不要です。',
            '制限・注意点': 'Mac直接版は別ライセンスです。',
          },
          {
            'メリット': '話者ラベル',
            '実際の使い勝手': '会議で誰が話したか分かります。',
            '制限・注意点': '精度は非公開で、声が似ている場合は話者数を手動で指定します。',
          },
          {
            'メリット': '3つのモデルファミリー',
            '実際の使い勝手': '速度か対応言語かを選べます。',
            '制限・注意点': '中国語・日本語・韓国語では自分でSenseVoiceに切り替えます。',
          },
          {
            'メリット': 'ネイティブのApple製アプリ',
            '実際の使い勝手': 'ロック画面、ショートカット、ボイスメモと連携します。',
            '制限・注意点': 'ライブ文字起こしはなく、Windows、Android、Intel Macも非対応です。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Whisper Notesと代替ツールの比較',
        content: [
          'ディレクトリ内で最も近い音声認識ツールは、Mac専用の競合、対比用のクラウド型口述アプリ、無料のクロスプラットフォームアプリ、そして開発者向けエンジンです。',
        ],
        columns: ['アプリ', '対応環境', '価格とライセンス', '役割', '主な違い'],
        rows: [
          {
            'アプリ': 'Whisper Notes',
            '対応環境': 'iPhone、iPad、Mac',
            '価格とライセンス': '800円の買い切り、プロプライエタリ',
            '役割': 'オフライン文字起こしアプリ',
            '主な違い': 'iPhoneとMacが1回の購入で使え、話者ラベルに対応',
          },
          {
            'アプリ': '[MacWhisper](/ja/power-local-llm/macwhisper-review)',
            '対応環境': 'macOS',
            '価格とライセンス': 'フリーミアム、プロプライエタリ',
            '役割': 'Mac向け文字起こしアプリ',
            '主な違い': 'ディレクトリではmacOS専用として掲載',
          },
          {
            'アプリ': '[Aqua Voice](/ja/power-local-llm/aquavoice-review)',
            '対応環境': 'Mac、Windows、iOS、Android',
            '価格とライセンス': 'フリーミアム、プロプライエタリ',
            '役割': '口述入力アプリ',
            '主な違い': 'クラウド型として掲載されており、音声が端末の外に出る',
          },
          {
            'アプリ': '[TranscriptionSuite](/ja/power-local-llm/transcriptionsuite-review)',
            '対応環境': 'Windows、macOS、Linux',
            '価格とライセンス': '無料、GPL-3.0',
            '役割': 'オープンソースの文字起こしアプリ',
            '主な違い': 'オープンソースでマルチプラットフォーム。WindowsとLinuxではDockerが必要',
          },
          {
            'アプリ': '[whisper.cpp](/ja/power-local-llm/whisper-cpp-review)',
            '対応環境': 'Windows、macOS、Linux',
            '価格とライセンス': '無料、MIT',
            '役割': 'コマンドラインエンジン',
            '主な違い': '開発者向けで、アプリの画面はない',
          },
        ],
        note: '他社アプリの対応環境、価格、機能は頻繁に変わります。決める前に、各プロジェクトの公式ページで最新情報を確認してください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Whisper Notesが向いている人',
        items: [
          '**iPhoneで文字起こしする人。** ロック画面からの録音とボイスメモからの共有は、インタビューや講義に向いています。',
          '**サブスクを避けたいMacユーザー。** 買い切り価格が毎月の文字起こし料金の代わりになります。',
          '**プライバシーを重視する専門職。** 録音をアップロードできないジャーナリストや研究者も、端末内に留められます。',
          '**Macで口述入力したい人。** 公式サイト版は、どのアプリでもFnキー長押しの音声入力が使えます。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Whisper Notesが向いていない人',
        items: [
          '**Windows、Android、Intel Macのユーザー。** いずれも非対応で、予定もありません。',
          '**古いiPhoneをお使いの人。** iPhone 11以前は非対応です。',
          '**ライブ字幕が必要な人。** 文字起こしは録音停止後に行われます。',
          '**オープンソースが必須の人。** コードは非公開です。表のオープンな代替ツールを検討してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '機内モードで使えますか？',
            a: 'はい。モデルをダウンロードした後なら使えます。App Storeの説明には、録音前に機内モードをオンにしても全く同じように動作すると書かれています。',
          },
          {
            q: 'Mac版はiPhone版と同じ購入ですか？',
            a: 'App Storeでの購入は、iPhone、iPad、Mac App Store版をカバーします。公式サイトのMac直接版は別で、週5,000語まで無料、または14ドル（USD）の買い切りです。',
          },
          {
            q: '文字起こしを要約できますか？',
            a: 'Macでは、端末上のAIモデルをダウンロードすれば可能です。iPhoneにはまだAI要約がなく、テキストを他のツールにコピーして使います。',
          },
          {
            q: 'リアルタイムで文字起こしできますか？',
            a: 'いいえ。文字起こし中にテキストが少しずつ表示されますが、録音を終えた後に行われます。',
          },
          {
            q: '誰が作っていますか？',
            a: 'App Storeの販売元はSmashMelon LLCです。公式サイトには会社名も個人名も記載がありません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          'iPhoneやApple silicon搭載Macで、サブスクなしでプライベートに文字起こししたい方には、Whisper Notesは向いています。通常のアプリと同じようにインストールでき、話者にラベルを付け、提供元の説明では音声を端末内にとどめます。',
          '懸念点は透明性と対応範囲です。クローズドソースであること、サイトに制作者の記載がないこと、速度や精度の数値が提供元自身のものであること、ライブ文字起こしやApple以外のプラットフォームに対応しないことです。購入前にMacの無料枠で試してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Whisper Notes公式サイト](https://whispernotes.app/) — 機能、価格、FAQ、対応デバイス。',
          '[Whisper Notesのプライバシーポリシー](https://whispernotes.app/privacy) — データの扱いとオフライン動作。',
          '[Whisper Notesの更新履歴](https://whispernotes.app/changelog) — Mac直接ダウンロード版のバージョンと日付。',
          '[App StoreのWhisper Notes](https://apps.apple.com/jp/app/id6447090616) — 価格、バージョン、販売元、説明。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカル音声ツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — 音声合成、音声認識、音声エージェントを並べて比較。',
          '[MacWhisperレビュー](/ja/power-local-llm/macwhisper-review) — 最も近いMac専用の文字起こしアプリ。',
          '[Whisper.cppレビュー](/ja/power-local-llm/whisper-cpp-review) — 多くのローカルWhisperアプリの基盤となるオープンなエンジン。',
          '[ローカル音声アシスタントの作り方](/ja/power-local-llm/build-local-voice-assistant-2026) — 音声認識を音声アシスタントに組み込む方法。',
          '[ローカルLLMソフトウェア完全ディレクトリ](/ja/directory) — 全プラットフォームのローカルAIツールを集めた幅広いディレクトリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-18',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whisper-notes-review-hero-zh.webp',
    title: 'Whisper Notes评测：适用于iPhone、iPad和Mac的离线语音转文字应用',
    seoTitle: 'Whisper Notes评测：适用于苹果设备的离线语音转文字应用',
    intro:
      'Whisper Notes是一款付费闭源应用，可在iPhone、iPad或Apple芯片Mac上把语音转成文字，音频不会发往任何地方，支持说话人标注，并采用一次性买断而非订阅。本评测梳理其官网、App Store页面和更新日志记录了什么、遗漏了什么，以及它与目录中其他语音转文字工具相比如何。',
    metaDescription:
      'Whisper Notes评测：一次性买断7.99美元的离线语音转文字应用，支持iPhone、iPad和Apple芯片Mac，带说话人标注，无需云端。未做实际测试。',
    twitterDescription:
      'Whisper Notes评测：适用于iPhone、iPad和Mac的一次性买断离线转录应用，支持说话人标注。价格、模型、隐私、局限与替代工具。',
    audience:
      '想私密且无需订阅地转录语音备忘录、会议和课程的苹果用户——涵盖价格、安装、模型、隐私、局限与替代工具。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Whisper Notes review',
    targetKeywords: [
      'whisper notes评测',
      'whisper notes 应用',
      'iphone 离线语音转文字',
      'mac 离线转录',
      '说话人标注 离线转录',
      '一次性买断 转录应用',
      'parakeet whisper sensevoice 应用',
    ],
    current_hardware_mentioned: ['iPhone 12', 'Apple silicon', 'Apple Neural Engine'],
    leadAnswerBlock:
      '**Whisper Notes是一款适用于iPhone、iPad和Apple芯片Mac的闭源语音转文字应用，在设备上运行Whisper、Parakeet和SenseVoice模型，支持说话人标注，在App Store一次性买断价为7.99美元。** 其隐私政策称，音频和转录文本不会离开你的设备。本评测对应iOS版1.8.8和Mac直接下载版1.6.3，依据公开的官网、App Store页面和更新日志撰写，并未实际测试。',
    quickAnswerTop: {
      zh: {
        question: 'Whisper Notes值得购买，用来在iPhone或Mac上离线转录吗？',
        answer:
          '如果你有较新的iPhone或Apple芯片Mac，想要不订阅、带说话人标注的私密转录，那大概值得一试。请先确认三点：它只支持苹果设备、是闭源的，而且不会在你说话时实时转录。',
        bullets: [
          'App Store一次性买断7.99美元，可用于iPhone、iPad和Mac App Store版；另有单独的Mac下载版，每周5,000词内免费，或一次性14美元。',
          '三种模型（Parakeet、Whisper、SenseVoice），官方称支持100多种语言。',
          '说话人标注、SRT、VTT和TXT导出，以及与“语音备忘录”和“快捷指令”的集成。',
          'Mac下载版另有语音输入、会议录制和设备端AI助手。',
          '需要iOS 18的iPhone 12或更新机型，或Apple芯片Mac；不支持Intel版Mac、Windows或Android。',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: '获取Whisper Notes', anchor: 'get-it' },
      { label: 'Whisper Notes概览', anchor: 'at-a-glance' },
      { label: 'Whisper Notes是什么', anchor: 'what-is-whisper-notes' },
      { label: '入门步骤', anchor: 'how-to-get-started' },
      { label: '功能', anchor: 'features' },
      { label: '模型与硬件', anchor: 'models-hardware' },
      { label: '隐私、许可证与费用', anchor: 'privacy' },
      { label: '优势与限制', anchor: 'tradeoffs' },
      { label: 'Whisper Notes与替代工具对比', anchor: 'vs-alternatives' },
      { label: '适合使用Whisper Notes的人', anchor: 'who-should-use' },
      { label: '不适合使用Whisper Notes的人', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Whisper Notes是一款仅限苹果设备的付费应用，用开放的语音模型在设备上转录录音，并标注说话人。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作一个从不“回家汇报”的语音备忘录转录工具：付费一次，录音或导入音频，即使在飞行模式下也能得到带“谁说了什么”标注的文字。',
          },
        ],
        items: [
          '评测版本：iOS版1.8.8（2026年9月18日）和Mac直接下载版1.6.3（2026年10月6日）；最新更新不到两周，因此不适用项目沉寂警告。',
          '许可证与价格：专有、闭源；美国App Store一次性7.99美元，另有Mac下载版，每周5,000词内免费，或一次性14美元。',
          '平台：iOS 18的iPhone 12或更新机型、iPad，以及Apple芯片Mac。',
          '亮点：说话人标注、三个模型系列，Mac上的语音输入和会议录制。',
          '成熟度：App Store约654个评分，平均4.7分，但官网没有注明开发者，也没有公开源代码。',
        ],
      },
      getItWhisperNotes: {
        id: 'get-it',
        title: '获取Whisper Notes',
        content: [
          '**Whisper Notes像其他苹果应用一样安装，无需使用终端。** Mac上有两条途径：与iPhone和iPad共用一次购买的App Store，以及带独立许可的官网直接下载。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          { '平台': 'iPhone和iPad（iOS 18及以上）', '获取方式': '[App Store上的Whisper Notes](https://apps.apple.com/us/app/whisper-notes-speech-to-text/id6447090616) — 一次性7.99美元（美国商店）' },
          { '平台': 'Mac，App Store版', '获取方式': '[Mac App Store](https://apps.apple.com/us/app/whisper-notes-speech-to-text/id6447090616) — 与iPhone和iPad同一次购买' },
          { '平台': 'Mac，直接下载（DMG）', '获取方式': '[whispernotes.app](https://whispernotes.app/) — 每周5,000词内免费，或一次性14美元' },
          { '平台': '官网', '获取方式': '[whispernotes.app](https://whispernotes.app/)' },
          { '平台': '隐私政策', '获取方式': '[Whisper Notes隐私政策](https://whispernotes.app/privacy)' },
          { '平台': '源代码', '获取方式': '无；应用为闭源' },
        ],
        note: '只有Mac直接下载版包含语音输入、Qwen3-ASR（测试版）、命令行工具和MCP服务器。官网没有列出Windows、Android或Intel版Mac的版本，并称没有此类计划。App Store上的卖家是SmashMelon LLC；官网未注明开发者。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Whisper Notes概览',
        columns: ['属性', 'Whisper Notes'],
        rows: [
          { '属性': '平台', 'Whisper Notes': 'iPhone、iPad、Mac（Apple芯片）' },
          { '属性': '价格', 'Whisper Notes': 'App Store一次性7.99美元；Mac直接下载版有免费额度或14美元' },
          { '属性': '许可证', 'Whisper Notes': '专有，闭源' },
          { '属性': '运行位置', 'Whisper Notes': '在设备上离线运行；模型在应用内下载' },
          { '属性': '语言', 'Whisper Notes': '官方称100多种；Parakeet覆盖25种欧洲语言' },
          { '属性': '实时转录', 'Whisper Notes': '不支持；停止录音后文字逐步出现' },
          { '属性': '说话人标注', 'Whisper Notes': '支持，iPhone和Mac均可' },
          { '属性': '仅用CPU即可运行', 'Whisper Notes': '不可以；需要Apple芯片或较新的iPhone' },
          { '属性': '本地API服务器', 'Whisper Notes': '没有；Mac直接下载版提供命令行和MCP服务器' },
        ],
        note: '这些属性沿用本地LLM软件目录中的语音转文字对比。官网未提及表示“未知”，而不是“不支持”。',
      },
      whatIsWhisperNotes: {
        id: 'what-is-whisper-notes',
        title: 'Whisper Notes是什么',
        content: [
          '**Whisper Notes是一款原生转录应用，不是云服务。** 官网称，它在Apple神经网络引擎上运行与OpenAI的Whisper相同的开源Whisper模型，以及NVIDIA Parakeet和SenseVoice，无需Python或命令行。',
          '它可从锁屏开始录音、导入音频和视频，并标注说话人。从官网下载的Mac版另有系统级语音输入、Zoom、Teams和Google Meet通话录制，以及设备端AI助手。官网称“chosen by 70,000+ professionals”，这是厂商的说法，本评测无法核实。',
          '本评测依据官网、FAQ、隐私政策和更新日志，以及App Store页面。未做实际测试，因此这里不评价准确率、速度和稳定性。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '入门步骤',
        content: [
          '**设置过程是：安装、首次运行时下载模型，然后录音。** 步骤依据FAQ和App Store页面。',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '在[App Store](https://apps.apple.com/us/app/whisper-notes-speech-to-text/id6447090616)购买以用于iPhone、iPad和Mac，或从[whispernotes.app](https://whispernotes.app/)下载Mac版免费试用。',
          },
          {
            title: '等待模型下载',
            whyItMatters: '模型在首次使用时于应用内下载；之后可离线工作，页面称你可以在录音前打开飞行模式。',
          },
          {
            title: '录音或导入音频',
            whyItMatters: '可从锁屏或操作按钮录音，从“语音备忘录”分享录音，或从其他应用导入音频和视频。',
          },
          {
            title: '打开说话人标注并导出',
            whyItMatters: '点按转录文本上的说话人图标，重命名说话人，并带时间戳和说话人姓名导出TXT、SRT或VTT。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**功能围绕录音的私密转录展开。** 以下内容均来自官网和App Store页面。',
        ],
        items: [
          '**快速录音。** 可从锁屏、小组件、操作按钮或“嘿Siri”开始录音，录音时长没有限制。',
          '**导入与分享。** 可从WhatsApp、照片和语音备忘录导入音频和视频，并从视频中提取字幕。',
          '**说话人标注。** 设备端说话人分离，说话人可重命名；重命名一次，整份转录里的标签都会更新。',
          '**导出。** 带时间戳的TXT、SRT和VTT；Mac版还会保存Markdown文件，可用于Obsidian库。',
          '**快捷指令动作。** 共五个动作，包括开始录音、停止录音和转录音频。',
          '**Mac额外功能（官网下载版）。** 按住Fn键语音输入、自动会议录制、用本地AI模型（Gemma 4）生成摘要和对话，以及内置MCP服务器的命令行工具。',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '模型与硬件',
        content: [
          '**模型由你选择：默认是Parakeet，Whisper覆盖100多种语言，SenseVoice面向中文、日语和韩语。** Parakeet V3支持25种欧洲语言。在iPhone上，iOS 26还可选择Apple Speech；Mac直接下载版提供Qwen3-ASR（测试版，30种语言，推荐16 GB内存）。',
          '需要iOS 18的iPhone 12或更新机型，或任何Apple芯片Mac；官网建议运行Whisper Large V3 Turbo时内存在8 GB以上。开发者称，Parakeet在M4 Pro上约18秒转录35分钟音频，词错误率为6.32%，在iPhone 15上约18秒转录5分钟。这些是厂商自己的测试，未经复现。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私、许可证与费用',
        content: [
          '**隐私政策称，你的语音、转录文本和用户数据永远不会离开你的设备。** 政策称不使用分析或跟踪工具，不收集或传输个人数据，开发者也无法访问你的音频。FAQ补充说，删除应用会同时删除你的录音，所以请把需要的内容导出。',
          '模型在应用内下载，因此首次运行需要联网。把转录文本分享给其他应用由你自行决定，不在这一承诺范围内。代码不公开，这些说法无法核查，本评测也未检查网络流量。',
          '这是付费的专有产品：美国App Store一次性7.99美元，涵盖iPhone、iPad和Mac App Store版，没有订阅和应用内购买。单独的Mac下载版有每周5,000词的免费额度，或14美元的许可。可在应用设置中申请退款。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '优势与限制',
        columns: ['优势', '实际使用中的意义', '限制 / 注意事项'],
        rows: [
          {
            '优势': '完全离线',
            '实际使用中的意义': '音频留在设备上，飞行途中也一样。',
            '限制 / 注意事项': '闭源，因此该说法无法核实。',
          },
          {
            '优势': '一次性价格',
            '实际使用中的意义': '转录无需订阅。',
            '限制 / 注意事项': 'Mac直接下载版需单独授权。',
          },
          {
            '优势': '说话人标注',
            '实际使用中的意义': '看清会议中谁说了什么。',
            '限制 / 注意事项': '未公布准确率；声音相近时需手动设定说话人数量。',
          },
          {
            '优势': '三个模型系列',
            '实际使用中的意义': '可在速度和语言覆盖之间选择。',
            '限制 / 注意事项': '中日韩语言需要你自己切换到SenseVoice。',
          },
          {
            '优势': '原生苹果应用',
            '实际使用中的意义': '集成锁屏、快捷指令和语音备忘录。',
            '限制 / 注意事项': '没有实时转录，也不支持Windows、Android或Intel版Mac。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Whisper Notes与替代工具对比',
        content: [
          '这些是目录中最接近的语音转文字工具：一款仅限Mac的对手、一款作对照的云端听写应用、一款免费的跨平台应用，以及一个开发者引擎。',
        ],
        columns: ['应用', '平台', '价格与许可证', '角色', '主要区别'],
        rows: [
          {
            '应用': 'Whisper Notes',
            '平台': 'iPhone、iPad、Mac',
            '价格与许可证': '一次性7.99美元，专有',
            '角色': '离线转录应用',
            '主要区别': 'iPhone和Mac一次购买；支持说话人标注',
          },
          {
            '应用': '[MacWhisper](/zh/power-local-llm/macwhisper-review)',
            '平台': 'macOS',
            '价格与许可证': '免费增值，专有',
            '角色': 'Mac转录应用',
            '主要区别': '目录中仅列为macOS应用',
          },
          {
            '应用': '[Aqua Voice](/zh/power-local-llm/aquavoice-review)',
            '平台': 'Mac、Windows、iOS、Android',
            '价格与许可证': '免费增值，专有',
            '角色': '听写应用',
            '主要区别': '目录中列为云端应用，音频会离开设备',
          },
          {
            '应用': '[TranscriptionSuite](/zh/power-local-llm/transcriptionsuite-review)',
            '平台': 'Windows、macOS、Linux',
            '价格与许可证': '免费，GPL-3.0',
            '角色': '开源转录应用',
            '主要区别': '开源且跨平台；Windows和Linux需要Docker',
          },
          {
            '应用': '[whisper.cpp](/zh/power-local-llm/whisper-cpp-review)',
            '平台': 'Windows、macOS、Linux',
            '价格与许可证': '免费，MIT',
            '角色': '命令行引擎',
            '主要区别': '面向开发者；没有应用界面',
          },
        ],
        note: '第三方应用的平台、价格和功能经常变化。决定之前，请在各项目自己的页面上核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合使用Whisper Notes的人',
        items: [
          '**在iPhone上做转录的人。** 锁屏录音和从语音备忘录分享，适合访谈和课程。',
          '**不愿订阅的Mac用户。** 一次性价格取代每月转录费用。',
          '**重视隐私的从业者。** 不能上传录音的记者和研究人员可以把录音留在设备上。',
          '**在Mac上做口述输入的人。** 官网版本增加了在任何应用里按住Fn键语音输入的功能。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '不适合使用Whisper Notes的人',
        items: [
          '**Windows、Android和Intel版Mac用户。** 均不支持，也没有计划。',
          '**使用旧款iPhone的人。** 不支持iPhone 11及更早机型。',
          '**需要实时字幕的人。** 它在你停止录音后才转录。',
          '**要求开源的人。** 代码是闭源的；请看表中的开放替代工具。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '飞行模式下能用吗？',
            a: '可以，只要模型已下载；App Store说明建议录音前打开飞行模式，并称其工作方式完全一样。',
          },
          {
            q: 'Mac应用和iPhone应用是同一次购买吗？',
            a: 'App Store购买涵盖iPhone、iPad和Mac App Store版。直接下载的Mac版是另行计费的：每周5,000词内免费，或一次性14美元。',
          },
          {
            q: '它能总结转录文本吗？',
            a: '在Mac上可以，需先下载设备端AI模型。iPhone上暂时没有AI摘要，你需要把文字复制到其他工具中。',
          },
          {
            q: '它支持实时转录吗？',
            a: '不支持。转录过程中文字会逐渐出现，但要在你结束录音之后。',
          },
          {
            q: '它是谁做的？',
            a: 'App Store列出的卖家是SmashMelon LLC。官网没有注明公司或个人。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '如果你想在iPhone或Apple芯片Mac上私密、免订阅地转录，Whisper Notes很合适：它像普通应用一样安装，能标注说话人，并且据其自述把音频留在设备上。',
          '需要保留的是透明度和适用范围：闭源，官网没有注明开发者，速度和准确率数据均来自厂商自己，没有实时转录，也不支持非苹果平台。购买前先试用Mac免费额度。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Whisper Notes官网](https://whispernotes.app/) — 功能、价格、FAQ和支持的设备。',
          '[Whisper Notes隐私政策](https://whispernotes.app/privacy) — 数据处理与离线运行。',
          '[Whisper Notes更新日志](https://whispernotes.app/changelog) — Mac直接下载版的版本和日期。',
          '[App Store上的Whisper Notes](https://apps.apple.com/us/app/whisper-notes-speech-to-text/id6447090616) — 价格、版本、卖家和说明。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地语音与音频工具对比](/zh/power-local-llm/local-llm-voice-audio-compared) — 文字转语音、语音转文字和语音智能体并排对比。',
          '[MacWhisper评测](/zh/power-local-llm/macwhisper-review) — 最接近的仅限Mac的转录应用。',
          '[Whisper.cpp评测](/zh/power-local-llm/whisper-cpp-review) — 许多本地Whisper应用背后的开放引擎。',
          '[搭建本地语音助手](/zh/power-local-llm/build-local-voice-assistant-2026) — 把语音转文字接入语音助手。',
          '[本地LLM软件完整目录](/zh/directory) — 涵盖各平台本地AI工具的更广泛目录。',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-18',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whisper-notes-review-hero-es.webp',
    title: 'Reseña de Whisper Notes: voz a texto sin conexión para iPhone, iPad y Mac',
    seoTitle: 'Reseña de Whisper Notes: voz a texto sin conexión',
    intro:
      'Whisper Notes es una app de pago y de código cerrado que transcribe voz en tu iPhone, iPad o Mac con Apple silicon sin enviar el audio a ningún sitio, con etiquetas de hablante y un precio único en lugar de una suscripción. Esta reseña recoge lo que documentan su sitio web, su ficha de la App Store y su registro de cambios, lo que omiten y cómo se compara con otras herramientas de voz a texto del directorio.',
    metaDescription:
      'Reseña de Whisper Notes: voz a texto sin conexión para iPhone, iPad y Mac por 8,99 € una vez en la App Store de España. Sin prueba práctica.',
    twitterDescription:
      'Reseña de Whisper Notes: una app de transcripción sin conexión de pago único para iPhone, iPad y Mac con etiquetas de hablante. Precio, modelos, privacidad, límites y alternativas.',
    audience:
      'Usuarios de Apple que quieren transcribir notas de voz, reuniones y clases de forma privada y sin suscripción: precio, instalación, modelos, privacidad, límites y alternativas.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Whisper Notes review',
    targetKeywords: [
      'reseña whisper notes',
      'app whisper notes',
      'voz a texto sin conexión iphone',
      'transcripción sin conexión mac',
      'etiquetas de hablante transcripción sin conexión',
      'app de transcripción de pago único',
      'parakeet whisper sensevoice app',
    ],
    current_hardware_mentioned: ['iPhone 12', 'Apple silicon', 'Apple Neural Engine'],
    leadAnswerBlock:
      '**Whisper Notes es una app de voz a texto de código cerrado para iPhone, iPad y Mac con Apple silicon que ejecuta modelos Whisper, Parakeet y SenseVoice en el dispositivo, añade etiquetas de hablante y cuesta 8,99 € una sola vez en la App Store de España.** Según su política de privacidad, el audio y las transcripciones nunca salen de tu dispositivo. Esta reseña cubre la versión 1.8.8 de iOS y la descarga directa para Mac en su versión 1.6.3, y se basa en el sitio web público, la ficha de la App Store y el registro de cambios, no en una prueba práctica.',
    quickAnswerTop: {
      es: {
        question: '¿Vale la pena comprar Whisper Notes para transcribir sin conexión en iPhone o Mac?',
        answer:
          'Probablemente, si tienes un iPhone reciente o un Mac con Apple silicon y quieres transcripciones privadas con etiquetas de hablante sin suscripción. Antes comprueba tres cosas: es solo para Apple, es de código cerrado y no transcribe en directo mientras hablas.',
        bullets: [
          'Compra única de 8,99 € en la App Store de España para iPhone, iPad y la versión de la Mac App Store; una descarga aparte para Mac es gratis hasta 5.000 palabras por semana o 14 $ (USD) una vez.',
          'Tres modelos (Parakeet, Whisper, SenseVoice) con más de 100 idiomas anunciados.',
          'Etiquetas de hablante, exportación a SRT, VTT y TXT, e integración con Notas de voz y Atajos.',
          'La descarga para Mac añade dictado por voz, grabación de reuniones y un asistente de IA en el dispositivo.',
          'Requiere un iPhone 12 o posterior con iOS 18, o un Mac con Apple silicon; no hay Mac con Intel, Windows ni Android.',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Conseguir Whisper Notes', anchor: 'get-it' },
      { label: 'Whisper Notes de un vistazo', anchor: 'at-a-glance' },
      { label: 'Qué es Whisper Notes', anchor: 'what-is-whisper-notes' },
      { label: 'Primeros pasos', anchor: 'how-to-get-started' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Modelos y hardware', anchor: 'models-hardware' },
      { label: 'Privacidad, licencia y coste', anchor: 'privacy' },
      { label: 'Ventajas y limitaciones', anchor: 'tradeoffs' },
      { label: 'Whisper Notes frente a las alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quién es Whisper Notes', anchor: 'who-should-use' },
      { label: 'Para quién no es Whisper Notes', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Whisper Notes es una app de pago solo para Apple que transcribe grabaciones en el dispositivo con modelos de voz abiertos y etiqueta a los hablantes.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en un transcriptor de notas de voz que nunca llama a casa: pagas una vez, grabas o importas audio y obtienes un texto con etiquetas de «quién dijo qué», incluso en modo avión.',
          },
        ],
        items: [
          'Versión revisada: iOS 1.8.8 (18 de septiembre de 2026) y descarga directa para Mac 1.6.3 (6 de octubre de 2026); la actualización más reciente tiene menos de dos semanas, así que no se aplica la advertencia de proyecto parado.',
          'Licencia y precio: propietaria, código cerrado; 8,99 € una vez en la App Store de España y una descarga para Mac que es gratis hasta 5.000 palabras por semana o 14 $ (USD) una vez.',
          'Plataformas: iPhone 12 o posterior con iOS 18, iPad y Mac con Apple silicon.',
          'Funciones destacadas: etiquetas de hablante, tres familias de modelos, dictado por voz y grabación de reuniones en Mac.',
          'Madurez: unas 654 valoraciones en la App Store con media de 4,7, pero sin fabricante nombrado en el sitio ni código fuente público.',
        ],
      },
      getItWhisperNotes: {
        id: 'get-it',
        title: 'Conseguir Whisper Notes',
        content: [
          '**Whisper Notes se instala como cualquier app de Apple, así que no hace falta terminal.** En Mac hay dos vías: la App Store, que comparte una compra con iPhone y iPad, y una descarga directa desde el sitio web con su propia licencia.',
        ],
        columns: ['Plataforma', 'Descarga'],
        rows: [
          { 'Plataforma': 'iPhone y iPad (iOS 18+)', 'Descarga': '[Whisper Notes en la App Store](https://apps.apple.com/es/app/id6447090616) — 8,99 € una vez (tienda de España)' },
          { 'Plataforma': 'Mac, versión de la App Store', 'Descarga': '[Mac App Store](https://apps.apple.com/es/app/id6447090616) — la misma compra que en iPhone y iPad' },
          { 'Plataforma': 'Mac, descarga directa (DMG)', 'Descarga': '[whispernotes.app](https://whispernotes.app/) — gratis hasta 5.000 palabras por semana, o 14 $ (USD) una vez' },
          { 'Plataforma': 'Sitio web', 'Descarga': '[whispernotes.app](https://whispernotes.app/)' },
          { 'Plataforma': 'Política de privacidad', 'Descarga': '[Política de privacidad de Whisper Notes](https://whispernotes.app/privacy)' },
          { 'Plataforma': 'Código fuente', 'Descarga': 'Ninguno; la app es de código cerrado' },
        ],
        note: 'Solo la descarga directa para Mac incluye dictado por voz, Qwen3-ASR (beta), la herramienta de línea de comandos y el servidor MCP. El sitio no lista ninguna versión para Windows, Android ni Mac con Intel y dice que no hay planes. El vendedor en la App Store es SmashMelon LLC; el sitio no nombra ningún fabricante.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Whisper Notes de un vistazo',
        columns: ['Atributo', 'Whisper Notes'],
        rows: [
          { 'Atributo': 'Plataforma', 'Whisper Notes': 'iPhone, iPad, Mac (Apple silicon)' },
          { 'Atributo': 'Precio', 'Whisper Notes': '8,99 € una vez (App Store); descarga para Mac con nivel gratis o 14 $' },
          { 'Atributo': 'Licencia', 'Whisper Notes': 'Propietaria, código cerrado' },
          { 'Atributo': 'Ejecución', 'Whisper Notes': 'En el dispositivo, sin conexión; modelos descargados en la app' },
          { 'Atributo': 'Idiomas', 'Whisper Notes': 'Más de 100 anunciados; Parakeet cubre 25 europeos' },
          { 'Atributo': 'Transcripción en tiempo real', 'Whisper Notes': 'No; el texto aparece al terminar la grabación' },
          { 'Atributo': 'Etiquetas de hablante', 'Whisper Notes': 'Sí, en iPhone y Mac' },
          { 'Atributo': 'Utilizable solo con CPU', 'Whisper Notes': 'No; necesita Apple silicon o un iPhone reciente' },
          { 'Atributo': 'Servidor de API local', 'Whisper Notes': 'No; la descarga para Mac tiene CLI y servidor MCP' },
        ],
        note: 'Los atributos siguen la comparación de voz a texto del directorio de software de LLM locales. Que falte una indicación en el sitio significa «desconocido», no «no compatible».',
      },
      whatIsWhisperNotes: {
        id: 'what-is-whisper-notes',
        title: 'Qué es Whisper Notes',
        content: [
          '**Whisper Notes es una app de transcripción nativa, no un servicio en la nube.** El sitio explica que ejecuta los mismos modelos Whisper de código abierto que los de OpenAI, además de NVIDIA Parakeet y SenseVoice, en el Neural Engine de Apple, sin Python ni línea de comandos.',
          'Graba desde la pantalla de bloqueo, importa audio y vídeo y etiqueta a los hablantes. La descarga para Mac desde el sitio añade dictado por voz en todo el sistema, grabación de llamadas de Zoom, Teams y Google Meet, y un asistente de IA en el dispositivo. El sitio dice que es «chosen by 70,000+ professionals», una afirmación del fabricante que esta reseña no pudo verificar.',
          'Esta reseña se basa en el sitio web, las preguntas frecuentes, la política de privacidad y el registro de cambios, además de la ficha de la App Store. No incluyó ninguna prueba práctica, así que aquí no se valoran la precisión, la velocidad ni la estabilidad.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeros pasos',
        content: [
          '**La puesta en marcha es instalar, descargar los modelos en el primer inicio y grabar.** Los pasos siguen las preguntas frecuentes y la ficha de la App Store.',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Cómprala en la [App Store](https://apps.apple.com/es/app/id6447090616) para iPhone, iPad y Mac, o descarga la versión para Mac desde [whispernotes.app](https://whispernotes.app/) y pruébala gratis.',
          },
          {
            title: 'Deja que se descarguen los modelos',
            whyItMatters: 'Los modelos se descargan dentro de la app la primera vez; después funciona sin conexión, y la ficha dice que puedes activar el modo avión antes de grabar.',
          },
          {
            title: 'Graba o importa audio',
            whyItMatters: 'Graba desde la pantalla de bloqueo o el botón de acción, comparte una nota desde Notas de voz o importa audio y vídeo desde otras apps.',
          },
          {
            title: 'Activa las etiquetas de hablante y exporta',
            whyItMatters: 'Toca el icono de hablante de una transcripción, renombra a los hablantes y exporta TXT, SRT o VTT con marcas de tiempo y nombres.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**Las funciones giran en torno a la transcripción privada de grabaciones.** Todo lo siguiente procede del sitio web y de la ficha de la App Store.',
        ],
        items: [
          '**Captura rápida.** Empieza a grabar desde la pantalla de bloqueo, los widgets, el botón de acción o «Oye Siri», sin límite de tiempo.',
          '**Importar y compartir.** Trae audio y vídeo de WhatsApp, Fotos y Notas de voz, y extrae subtítulos de un vídeo.',
          '**Etiquetas de hablante.** Diarización en el dispositivo con hablantes renombrables; renombra a un hablante una vez y la etiqueta se actualiza en toda la transcripción.',
          '**Exportar.** TXT, SRT y VTT con marcas de tiempo; la app de Mac también guarda archivos Markdown que puede usar una bóveda de Obsidian.',
          '**Acciones de Atajos.** Cinco acciones, entre ellas Iniciar grabación, Detener grabación y Transcribir audio.',
          '**Extras para Mac (descarga desde el sitio).** Dictado por voz manteniendo Fn, grabación automática de reuniones, resúmenes y chat con un modelo de IA local (Gemma 4), y una herramienta de línea de comandos con servidor MCP integrado.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelos y hardware',
        content: [
          '**Tú eliges el modelo: Parakeet es el predeterminado, Whisper cubre más de 100 idiomas y SenseVoice apunta al chino, el japonés y el coreano.** Parakeet V3 admite 25 idiomas europeos. En iPhone también se puede elegir Apple Speech con iOS 26, y la descarga para Mac ofrece Qwen3-ASR (beta, 30 idiomas, 16 GB de memoria recomendados).',
          'Necesita un iPhone 12 o posterior con iOS 18, o cualquier Mac con Apple silicon; el sitio recomienda 8 GB o más de memoria para Whisper Large V3 Turbo. El desarrollador informa de que Parakeet transcribe 35 minutos en unos 18 segundos en un M4 Pro, con un 6,32 % de tasa de error de palabras, y 5 minutos en unos 18 segundos en un iPhone 15. Son pruebas del propio fabricante y no se reprodujeron.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad, licencia y coste',
        content: [
          '**La política de privacidad dice que tu voz, tus transcripciones y tus datos de usuario nunca salen de tu dispositivo.** Afirma que no usa herramientas de analítica ni de seguimiento, que no recopila ni transmite datos personales y que el desarrollador no tiene acceso a tu audio. Las preguntas frecuentes añaden que borrar la app borra tus grabaciones, así que exporta lo que quieras conservar.',
          'Los modelos se descargan dentro de la app, por lo que el primer inicio necesita internet. Compartir una transcripción con otra app es decisión tuya y queda fuera de esa promesa. El código no es abierto, así que estas afirmaciones no se pueden inspeccionar, y esta reseña no examinó el tráfico de red.',
          'Es un producto de pago y propietario: 8,99 € una vez en la App Store de España, que cubre iPhone, iPad y la versión de la Mac App Store, sin suscripción ni compras dentro de la app. La descarga aparte para Mac tiene un nivel gratis de 5.000 palabras por semana o una licencia de 14 $ (USD). Se puede pedir un reembolso desde los ajustes de la app.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Ventajas y limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / salvedad'],
        rows: [
          {
            'Ventaja': 'Totalmente sin conexión',
            'Qué significa en el uso real': 'El audio se queda en tu dispositivo, incluso en un vuelo.',
            'Limitación / salvedad': 'Código cerrado, así que la afirmación no se puede comprobar.',
          },
          {
            'Ventaja': 'Precio único',
            'Qué significa en el uso real': 'Sin suscripción para transcribir.',
            'Limitación / salvedad': 'La descarga para Mac se licencia aparte.',
          },
          {
            'Ventaja': 'Etiquetas de hablante',
            'Qué significa en el uso real': 'Ver quién habla en las reuniones.',
            'Limitación / salvedad': 'No se publica la precisión; con voces parecidas hay que fijar el número de hablantes.',
          },
          {
            'Ventaja': 'Tres familias de modelos',
            'Qué significa en el uso real': 'Elegir velocidad o cobertura de idiomas.',
            'Limitación / salvedad': 'Cambias tú mismo a SenseVoice para chino, japonés y coreano.',
          },
          {
            'Ventaja': 'App nativa de Apple',
            'Qué significa en el uso real': 'Integración con pantalla de bloqueo, Atajos y Notas de voz.',
            'Limitación / salvedad': 'Sin transcripción en directo y sin Windows, Android ni Mac con Intel.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Whisper Notes frente a las alternativas',
        content: [
          'Estas son las herramientas de voz a texto más cercanas del directorio: un rival solo para Mac, una app de dictado en la nube como contraste, una app gratuita multiplataforma y un motor para desarrolladores.',
        ],
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Función', 'Diferencia clave'],
        rows: [
          {
            'App': 'Whisper Notes',
            'Plataformas': 'iPhone, iPad, Mac',
            'Precio y licencia': '8,99 € una vez, propietaria',
            'Función': 'App de transcripción sin conexión',
            'Diferencia clave': 'iPhone y Mac en una sola compra; etiquetas de hablante',
          },
          {
            'App': '[MacWhisper](/es/power-local-llm/macwhisper-review)',
            'Plataformas': 'macOS',
            'Precio y licencia': 'Freemium, propietaria',
            'Función': 'App de transcripción para Mac',
            'Diferencia clave': 'En el directorio figura solo para macOS',
          },
          {
            'App': '[Aqua Voice](/es/power-local-llm/aquavoice-review)',
            'Plataformas': 'Mac, Windows, iOS, Android',
            'Precio y licencia': 'Freemium, propietaria',
            'Función': 'App de dictado',
            'Diferencia clave': 'Figura como basada en la nube, así que el audio sale del dispositivo',
          },
          {
            'App': '[TranscriptionSuite](/es/power-local-llm/transcriptionsuite-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Precio y licencia': 'Gratis, GPL-3.0',
            'Función': 'App de transcripción de código abierto',
            'Diferencia clave': 'Código abierto y multiplataforma; Docker en Windows y Linux',
          },
          {
            'App': '[whisper.cpp](/es/power-local-llm/whisper-cpp-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Precio y licencia': 'Gratis, MIT',
            'Función': 'Motor de línea de comandos',
            'Diferencia clave': 'Para desarrolladores; sin interfaz de app',
          },
        ],
        note: 'Las plataformas, los precios y las funciones de las apps de terceros cambian con frecuencia. Comprueba los datos actuales en la página de cada proyecto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es Whisper Notes',
        items: [
          '**Quienes transcriben en iPhone.** Grabar desde la pantalla de bloqueo y compartir desde Notas de voz encaja con entrevistas y clases.',
          '**Usuarios de Mac reacios a las suscripciones.** Un precio único sustituye las cuotas mensuales de transcripción.',
          '**Profesionales atentos a la privacidad.** Periodistas e investigadores que no pueden subir grabaciones pueden conservarlas en el dispositivo.',
          '**Usuarios de Mac que dictan.** La versión del sitio añade dictado por voz manteniendo Fn en cualquier app.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quién no es Whisper Notes',
        items: [
          '**Usuarios de Windows, Android y Mac con Intel.** Ninguno está admitido ni previsto.',
          '**Dueños de iPhone antiguos.** El iPhone 11 y los anteriores no están admitidos.',
          '**Quienes necesiten subtítulos en directo.** Transcribe después de que termines de grabar.',
          '**Quienes exijan código abierto.** El código es cerrado; mira las alternativas abiertas de la tabla.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona en modo avión?',
            a: 'Sí, una vez descargados los modelos; la descripción de la App Store aconseja activar el modo avión antes de grabar y dice que funciona exactamente igual.',
          },
          {
            q: '¿La app de Mac es la misma compra que la de iPhone?',
            a: 'La compra en la App Store cubre iPhone, iPad y la versión de la Mac App Store. La descarga directa para Mac es aparte: gratis hasta 5.000 palabras por semana, o 14 $ (USD) una vez.',
          },
          {
            q: '¿Resume las transcripciones?',
            a: 'En Mac sí, después de descargar un modelo de IA en el dispositivo. En iPhone todavía no hay resúmenes de IA; copias el texto en otra herramienta.',
          },
          {
            q: '¿Transcribe en tiempo real?',
            a: 'No. El texto aparece poco a poco durante la transcripción, pero solo después de terminar la grabación.',
          },
          {
            q: '¿Quién está detrás?',
            a: 'La App Store indica SmashMelon LLC como vendedor. El sitio no nombra ninguna empresa ni persona.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'Whisper Notes encaja si quieres transcribir de forma privada y sin suscripción en un iPhone o un Mac con Apple silicon: se instala como cualquier app, etiqueta a los hablantes y, según su propia versión, mantiene el audio en el dispositivo.',
          'Las salvedades son la transparencia y el alcance: código cerrado, ningún fabricante nombrado en el sitio, cifras de velocidad y precisión que son del propio fabricante, y sin transcripción en directo ni plataformas ajenas a Apple. Prueba el nivel gratis de Mac antes de comprar.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Whisper Notes](https://whispernotes.app/) — funciones, precios, preguntas frecuentes y dispositivos compatibles.',
          '[Política de privacidad de Whisper Notes](https://whispernotes.app/privacy) — tratamiento de datos y funcionamiento sin conexión.',
          '[Registro de cambios de Whisper Notes](https://whispernotes.app/changelog) — versiones y fechas de la descarga directa para Mac.',
          '[Whisper Notes en la App Store](https://apps.apple.com/es/app/id6447090616) — precio, versión, vendedor y descripción.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Herramientas de voz y audio locales comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — texto a voz, voz a texto y agentes de voz, lado a lado.',
          '[Reseña de MacWhisper](/es/power-local-llm/macwhisper-review) — la app de transcripción solo para Mac más cercana.',
          '[Reseña de Whisper.cpp](/es/power-local-llm/whisper-cpp-review) — el motor abierto detrás de muchas apps de Whisper locales.',
          '[Crear un asistente de voz local](/es/power-local-llm/build-local-voice-assistant-2026) — integrar la voz a texto en un asistente de voz.',
          '[El directorio completo de software de LLM locales](/es/directory) — un directorio más amplio de herramientas de IA local para todas las plataformas.',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-18',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whisper-notes-review-hero-pt.webp',
    title: 'Análise do Whisper Notes: voz para texto offline para iPhone, iPad e Mac',
    seoTitle: 'Análise do Whisper Notes: voz para texto offline',
    intro:
      'O Whisper Notes é um aplicativo pago e de código fechado que transcreve fala no seu iPhone, iPad ou Mac com Apple silicon sem enviar o áudio para lugar nenhum, com rótulos de falante e um preço único em vez de assinatura. Esta análise reúne o que o site, a página da App Store e o registro de mudanças documentam, o que deixam de fora e como ele se compara a outras ferramentas de voz para texto do diretório.',
    metaDescription:
      'Análise do Whisper Notes: voz para texto offline para iPhone, iPad e Mac por R$ 19,90 uma única vez na App Store brasileira. Sem teste prático.',
    twitterDescription:
      'Análise do Whisper Notes: um app de transcrição offline de compra única para iPhone, iPad e Mac com rótulos de falante. Preço, modelos, privacidade, limites e alternativas.',
    audience:
      'Usuários da Apple que querem transcrever memos de voz, reuniões e aulas com privacidade e sem assinatura — cobre preço, instalação, modelos, privacidade, limites e alternativas.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Whisper Notes review',
    targetKeywords: [
      'análise whisper notes',
      'app whisper notes',
      'voz para texto offline iphone',
      'transcrição offline mac',
      'rótulos de falante transcrição offline',
      'app de transcrição compra única',
      'parakeet whisper sensevoice app',
    ],
    current_hardware_mentioned: ['iPhone 12', 'Apple silicon', 'Apple Neural Engine'],
    leadAnswerBlock:
      '**O Whisper Notes é um app de voz para texto de código fechado para iPhone, iPad e Macs com Apple silicon que executa modelos Whisper, Parakeet e SenseVoice no dispositivo, acrescenta rótulos de falante e custa R$ 19,90 uma única vez na App Store brasileira.** Segundo a política de privacidade, o áudio e as transcrições nunca saem do seu dispositivo. Esta análise cobre a versão 1.8.8 do iOS e o download direto para Mac na versão 1.6.3, e se baseia no site público, na página da App Store e no registro de mudanças, não em um teste prático.',
    quickAnswerTop: {
      pt: {
        question: 'Vale a pena comprar o Whisper Notes para transcrição offline no iPhone ou no Mac?',
        answer:
          'Provavelmente, se você tem um iPhone recente ou um Mac com Apple silicon e quer transcrições privadas com rótulos de falante sem assinatura. Antes, confira três coisas: ele é só para Apple, é de código fechado e não transcreve ao vivo enquanto você fala.',
        bullets: [
          'Compra única de R$ 19,90 na App Store brasileira para iPhone, iPad e a versão da Mac App Store; um download separado para Mac é grátis até 5.000 palavras por semana ou US$ 14 (USD) uma vez.',
          'Três modelos (Parakeet, Whisper, SenseVoice) com mais de 100 idiomas anunciados.',
          'Rótulos de falante, exportação em SRT, VTT e TXT e integração com Gravador de Voz e Atalhos.',
          'O download para Mac acrescenta ditado por voz, gravação de reuniões e um assistente de IA no dispositivo.',
          'Exige um iPhone 12 ou mais novo com iOS 18, ou um Mac com Apple silicon; sem Mac com Intel, Windows ou Android.',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Obter o Whisper Notes', anchor: 'get-it' },
      { label: 'Whisper Notes em resumo', anchor: 'at-a-glance' },
      { label: 'O que é o Whisper Notes', anchor: 'what-is-whisper-notes' },
      { label: 'Primeiros passos', anchor: 'how-to-get-started' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Modelos e hardware', anchor: 'models-hardware' },
      { label: 'Privacidade, licença e custo', anchor: 'privacy' },
      { label: 'Vantagens e limitações', anchor: 'tradeoffs' },
      { label: 'Whisper Notes e as alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem o Whisper Notes serve', anchor: 'who-should-use' },
      { label: 'Para quem o Whisper Notes não serve', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Whisper Notes é um app pago só para Apple que transcreve gravações no dispositivo com modelos de voz abertos e identifica os falantes.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como um transcritor de memos de voz que nunca liga para casa: você paga uma vez, grava ou importa áudio e recebe um texto com rótulos de «quem disse o quê», até no modo avião.',
          },
        ],
        items: [
          'Versão analisada: iOS 1.8.8 (18 de setembro de 2026) e download direto para Mac 1.6.3 (6 de outubro de 2026); a atualização mais recente tem menos de duas semanas, então o aviso de projeto parado não se aplica.',
          'Licença e preço: proprietária, código fechado; R$ 19,90 uma vez na App Store brasileira e um download para Mac que é grátis até 5.000 palavras por semana ou US$ 14 (USD) uma vez.',
          'Plataformas: iPhone 12 ou mais novo com iOS 18, iPad e Macs com Apple silicon.',
          'Destaques: rótulos de falante, três famílias de modelos, ditado por voz e gravação de reuniões no Mac.',
          'Maturidade: cerca de 654 avaliações na App Store com média de 4,7, mas sem fabricante nomeado no site e sem código-fonte público.',
        ],
      },
      getItWhisperNotes: {
        id: 'get-it',
        title: 'Obter o Whisper Notes',
        content: [
          '**O Whisper Notes se instala como qualquer app da Apple, então não precisa de terminal.** No Mac há dois caminhos: a App Store, que divide uma compra com iPhone e iPad, e um download direto pelo site com licença própria.',
        ],
        columns: ['Plataforma', 'Download'],
        rows: [
          { 'Plataforma': 'iPhone e iPad (iOS 18+)', 'Download': '[Whisper Notes na App Store](https://apps.apple.com/br/app/id6447090616) — R$ 19,90 uma vez (loja brasileira)' },
          { 'Plataforma': 'Mac, versão da App Store', 'Download': '[Mac App Store](https://apps.apple.com/br/app/id6447090616) — a mesma compra do iPhone e do iPad' },
          { 'Plataforma': 'Mac, download direto (DMG)', 'Download': '[whispernotes.app](https://whispernotes.app/) — grátis até 5.000 palavras por semana, ou US$ 14 (USD) uma vez' },
          { 'Plataforma': 'Site', 'Download': '[whispernotes.app](https://whispernotes.app/)' },
          { 'Plataforma': 'Política de privacidade', 'Download': '[Política de privacidade do Whisper Notes](https://whispernotes.app/privacy)' },
          { 'Plataforma': 'Código-fonte', 'Download': 'Nenhum; o app é de código fechado' },
        ],
        note: 'Só o download direto para Mac inclui ditado por voz, Qwen3-ASR (beta), a ferramenta de linha de comando e o servidor MCP. O site não lista versão para Windows, Android nem Mac com Intel e diz que não há planos. A vendedora na App Store é a SmashMelon LLC; o site não nomeia nenhum fabricante.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Whisper Notes em resumo',
        columns: ['Atributo', 'Whisper Notes'],
        rows: [
          { 'Atributo': 'Plataforma', 'Whisper Notes': 'iPhone, iPad, Mac (Apple silicon)' },
          { 'Atributo': 'Preço', 'Whisper Notes': 'R$ 19,90 uma vez (App Store); download para Mac com nível grátis ou US$ 14' },
          { 'Atributo': 'Licença', 'Whisper Notes': 'Proprietária, código fechado' },
          { 'Atributo': 'Execução', 'Whisper Notes': 'No dispositivo, offline; modelos baixados no app' },
          { 'Atributo': 'Idiomas', 'Whisper Notes': 'Mais de 100 anunciados; o Parakeet cobre 25 europeus' },
          { 'Atributo': 'Transcrição em tempo real', 'Whisper Notes': 'Não; o texto aparece depois de parar a gravação' },
          { 'Atributo': 'Rótulos de falante', 'Whisper Notes': 'Sim, no iPhone e no Mac' },
          { 'Atributo': 'Utilizável só com CPU', 'Whisper Notes': 'Não; exige Apple silicon ou um iPhone recente' },
          { 'Atributo': 'Servidor de API local', 'Whisper Notes': 'Não; o download para Mac tem CLI e servidor MCP' },
        ],
        note: 'Os atributos seguem a comparação de voz para texto usada no diretório de software de LLM local. Uma informação ausente no site significa «desconhecido», não «sem suporte».',
      },
      whatIsWhisperNotes: {
        id: 'what-is-whisper-notes',
        title: 'O que é o Whisper Notes',
        content: [
          '**O Whisper Notes é um app de transcrição nativo, não um serviço na nuvem.** O site explica que ele executa os mesmos modelos Whisper de código aberto da OpenAI, além de NVIDIA Parakeet e SenseVoice, no Neural Engine da Apple, sem Python nem linha de comando.',
          'Ele grava a partir da tela de bloqueio, importa áudio e vídeo e identifica os falantes. O download para Mac pelo site acrescenta ditado por voz em todo o sistema, gravação de chamadas do Zoom, Teams e Google Meet e um assistente de IA no dispositivo. O site diz ser «chosen by 70,000+ professionals», uma afirmação do fabricante que esta análise não pôde verificar.',
          'Esta análise se baseia no site, no FAQ, na política de privacidade e no registro de mudanças, além da página da App Store. Não houve teste prático, então precisão, velocidade e estabilidade não são avaliadas aqui.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeiros passos',
        content: [
          '**A configuração é instalar, baixar os modelos na primeira abertura e gravar.** Os passos seguem o FAQ e a página da App Store.',
        ],
        numberedItems: [
          {
            title: 'Instale o app',
            whyItMatters: 'Compre na [App Store](https://apps.apple.com/br/app/id6447090616) para iPhone, iPad e Mac, ou baixe a versão para Mac em [whispernotes.app](https://whispernotes.app/) e teste de graça.',
          },
          {
            title: 'Deixe os modelos baixarem',
            whyItMatters: 'Os modelos são baixados dentro do app no primeiro uso; depois ele funciona offline, e a página diz que você pode ligar o modo avião antes de gravar.',
          },
          {
            title: 'Grave ou importe áudio',
            whyItMatters: 'Grave pela tela de bloqueio ou pelo Botão de Ação, compartilhe um memo do Gravador de Voz ou importe áudio e vídeo de outros apps.',
          },
          {
            title: 'Ative os rótulos de falante e exporte',
            whyItMatters: 'Toque no ícone de falante de uma transcrição, renomeie os falantes e exporte TXT, SRT ou VTT com marcas de tempo e nomes.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**Os recursos giram em torno da transcrição privada de gravações.** Tudo a seguir vem do site e da página da App Store.',
        ],
        items: [
          '**Captura rápida.** Comece a gravar pela tela de bloqueio, widgets, Botão de Ação ou «E aí, Siri», sem limite de tempo.',
          '**Importar e compartilhar.** Traga áudio e vídeo do WhatsApp, Fotos e Gravador de Voz e extraia legendas de vídeos.',
          '**Rótulos de falante.** Diarização no dispositivo com falantes renomeáveis; renomeie um falante uma vez e o rótulo se atualiza em toda a transcrição.',
          '**Exportação.** TXT, SRT e VTT com marcas de tempo; o app do Mac também salva arquivos Markdown que um cofre do Obsidian pode usar.',
          '**Ações dos Atalhos.** Cinco ações, entre elas Iniciar Gravação, Parar Gravação e Transcrever Áudio.',
          '**Extras do Mac (download pelo site).** Ditado por voz segurando Fn, gravação automática de reuniões, resumos e chat com um modelo de IA local (Gemma 4) e uma ferramenta de linha de comando com servidor MCP embutido.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelos e hardware',
        content: [
          '**Você escolhe o modelo: o Parakeet é o padrão, o Whisper cobre mais de 100 idiomas e o SenseVoice mira chinês, japonês e coreano.** O Parakeet V3 suporta 25 idiomas europeus. No iPhone, o Apple Speech também pode ser escolhido no iOS 26, e o download para Mac oferece o Qwen3-ASR (beta, 30 idiomas, 16 GB de memória recomendados).',
          'Exige um iPhone 12 ou mais novo com iOS 18, ou qualquer Mac com Apple silicon; o site recomenda 8 GB ou mais de memória para o Whisper Large V3 Turbo. O desenvolvedor informa que o Parakeet transcreve 35 minutos em cerca de 18 segundos em um M4 Pro, com taxa de erro de palavras de 6,32%, e 5 minutos em cerca de 18 segundos em um iPhone 15. São testes do próprio fabricante, não reproduzidos.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade, licença e custo',
        content: [
          '**A política de privacidade diz que sua voz, suas transcrições e seus dados de usuário nunca saem do seu dispositivo.** Ela afirma que não usa ferramentas de análise nem de rastreamento, que não coleta nem transmite dados pessoais e que o desenvolvedor não tem acesso ao seu áudio. O FAQ acrescenta que apagar o app apaga suas gravações, então exporte o que quiser guardar.',
          'Os modelos são baixados dentro do app, então a primeira execução precisa de internet. Compartilhar uma transcrição com outro app é decisão sua e fica fora dessa promessa. O código não é aberto, então essas afirmações não podem ser inspecionadas, e esta análise não examinou o tráfego de rede.',
          'É um produto pago e proprietário: R$ 19,90 uma vez na App Store brasileira, cobrindo iPhone, iPad e a versão da Mac App Store, sem assinatura nem compras dentro do app. O download separado para Mac tem um nível grátis de 5.000 palavras por semana ou uma licença de US$ 14 (USD). É possível pedir reembolso nos ajustes do app.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Vantagens e limitações',
        columns: ['Vantagem', 'O que significa no uso real', 'Limitação / ressalva'],
        rows: [
          {
            'Vantagem': 'Totalmente offline',
            'O que significa no uso real': 'O áudio fica no dispositivo, até em um voo.',
            'Limitação / ressalva': 'Código fechado, então a afirmação não pode ser verificada.',
          },
          {
            'Vantagem': 'Preço único',
            'O que significa no uso real': 'Sem assinatura para transcrever.',
            'Limitação / ressalva': 'O download para Mac é licenciado à parte.',
          },
          {
            'Vantagem': 'Rótulos de falante',
            'O que significa no uso real': 'Ver quem fala nas reuniões.',
            'Limitação / ressalva': 'A precisão não é publicada; vozes parecidas exigem definir o número de falantes.',
          },
          {
            'Vantagem': 'Três famílias de modelos',
            'O que significa no uso real': 'Escolher entre velocidade e cobertura de idiomas.',
            'Limitação / ressalva': 'Você mesmo troca para o SenseVoice em chinês, japonês e coreano.',
          },
          {
            'Vantagem': 'App nativo da Apple',
            'O que significa no uso real': 'Integração com tela de bloqueio, Atalhos e Gravador de Voz.',
            'Limitação / ressalva': 'Sem transcrição ao vivo e sem Windows, Android ou Mac com Intel.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Whisper Notes e as alternativas',
        content: [
          'Estas são as ferramentas de voz para texto mais próximas do diretório: um rival só para Mac, um app de ditado na nuvem como contraste, um app gratuito multiplataforma e um motor para desenvolvedores.',
        ],
        columns: ['App', 'Plataformas', 'Preço e licença', 'Papel', 'Diferença principal'],
        rows: [
          {
            'App': 'Whisper Notes',
            'Plataformas': 'iPhone, iPad, Mac',
            'Preço e licença': 'R$ 19,90 uma vez, proprietária',
            'Papel': 'App de transcrição offline',
            'Diferença principal': 'iPhone e Mac em uma só compra; rótulos de falante',
          },
          {
            'App': '[MacWhisper](/pt/power-local-llm/macwhisper-review)',
            'Plataformas': 'macOS',
            'Preço e licença': 'Freemium, proprietária',
            'Papel': 'App de transcrição para Mac',
            'Diferença principal': 'No diretório consta só para macOS',
          },
          {
            'App': '[Aqua Voice](/pt/power-local-llm/aquavoice-review)',
            'Plataformas': 'Mac, Windows, iOS, Android',
            'Preço e licença': 'Freemium, proprietária',
            'Papel': 'App de ditado',
            'Diferença principal': 'Consta como baseado na nuvem, então o áudio sai do dispositivo',
          },
          {
            'App': '[TranscriptionSuite](/pt/power-local-llm/transcriptionsuite-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Preço e licença': 'Grátis, GPL-3.0',
            'Papel': 'App de transcrição de código aberto',
            'Diferença principal': 'Código aberto e multiplataforma; Docker no Windows e no Linux',
          },
          {
            'App': '[whisper.cpp](/pt/power-local-llm/whisper-cpp-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Preço e licença': 'Grátis, MIT',
            'Papel': 'Motor de linha de comando',
            'Diferença principal': 'Para desenvolvedores; sem interface de app',
          },
        ],
        note: 'Plataformas, preços e recursos de apps de terceiros mudam com frequência. Confira os dados atuais na página de cada projeto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o Whisper Notes serve',
        items: [
          '**Quem transcreve no iPhone.** Gravar pela tela de bloqueio e compartilhar do Gravador de Voz combina com entrevistas e aulas.',
          '**Usuários de Mac que fogem de assinaturas.** Um preço único substitui mensalidades de transcrição.',
          '**Profissionais atentos à privacidade.** Jornalistas e pesquisadores que não podem enviar gravações podem mantê-las no dispositivo.',
          '**Usuários de Mac que ditam.** A versão do site acrescenta ditado por voz segurando Fn em qualquer app.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o Whisper Notes não serve',
        items: [
          '**Usuários de Windows, Android e Mac com Intel.** Nenhum é suportado nem planejado.',
          '**Donos de iPhones antigos.** O iPhone 11 e os anteriores não são suportados.',
          '**Quem precisa de legendas ao vivo.** Ele transcreve depois que você para de gravar.',
          '**Quem exige código aberto.** O código é fechado; veja as alternativas abertas da tabela.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Funciona no modo avião?',
            a: 'Sim, depois que os modelos forem baixados; a descrição da App Store recomenda ligar o modo avião antes de gravar e diz que funciona exatamente igual.',
          },
          {
            q: 'O app do Mac é a mesma compra do app do iPhone?',
            a: 'A compra na App Store cobre iPhone, iPad e a versão da Mac App Store. O download direto para Mac é separado: grátis até 5.000 palavras por semana, ou US$ 14 (USD) uma vez.',
          },
          {
            q: 'Ele resume transcrições?',
            a: 'No Mac sim, depois de baixar um modelo de IA no dispositivo. No iPhone ainda não há resumos de IA; você copia o texto para outra ferramenta.',
          },
          {
            q: 'Ele transcreve em tempo real?',
            a: 'Não. O texto aparece aos poucos durante a transcrição, mas só depois que você termina a gravação.',
          },
          {
            q: 'Quem faz o app?',
            a: 'A App Store lista a SmashMelon LLC como vendedora. O site não nomeia nenhuma empresa nem pessoa.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O Whisper Notes serve se você quer transcrever com privacidade e sem assinatura em um iPhone ou em um Mac com Apple silicon: ele se instala como qualquer app, identifica os falantes e, pela própria descrição, mantém o áudio no dispositivo.',
          'As ressalvas são transparência e alcance: código fechado, nenhum fabricante nomeado no site, números de velocidade e precisão que são do próprio fabricante e nenhuma transcrição ao vivo ou plataforma fora da Apple. Teste o nível grátis do Mac antes de comprar.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Whisper Notes](https://whispernotes.app/) — recursos, preços, FAQ e dispositivos compatíveis.',
          '[Política de privacidade do Whisper Notes](https://whispernotes.app/privacy) — tratamento de dados e funcionamento offline.',
          '[Registro de mudanças do Whisper Notes](https://whispernotes.app/changelog) — versões e datas do download direto para Mac.',
          '[Whisper Notes na App Store](https://apps.apple.com/br/app/id6447090616) — preço, versão, vendedora e descrição.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Ferramentas locais de voz e áudio comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — texto para voz, voz para texto e agentes de voz lado a lado.',
          '[Análise do MacWhisper](/pt/power-local-llm/macwhisper-review) — o app de transcrição só para Mac mais próximo.',
          '[Análise do Whisper.cpp](/pt/power-local-llm/whisper-cpp-review) — o motor aberto por trás de muitos apps Whisper locais.',
          '[Criar um assistente de voz local](/pt/power-local-llm/build-local-voice-assistant-2026) — integrar voz para texto em um assistente de voz.',
          '[O diretório completo de software de LLM local](/pt/directory) — um diretório mais amplo de ferramentas de IA local para todas as plataformas.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-18',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whisper-notes-review-hero-ar.webp',
    title: 'مراجعة Whisper Notes: تحويل الكلام إلى نص دون اتصال لأجهزة iPhone وiPad وMac',
    seoTitle: 'مراجعة Whisper Notes: كلام إلى نص دون اتصال لأجهزة Apple',
    intro:
      'Whisper Notes تطبيق مدفوع ومغلق المصدر ينسخ الكلام على iPhone أو iPad أو Mac بمعالج Apple silicon دون إرسال الصوت إلى أي مكان، مع تمييز المتحدثين وسعر لمرة واحدة بدلًا من الاشتراك. تلخّص هذه المراجعة ما يوثّقه موقعه وصفحته في App Store وسجل التغييرات، وما تتركه دون ذكر، وكيف يقارن بأدوات تحويل الكلام إلى نص الأخرى في الدليل.',
    metaDescription:
      'مراجعة Whisper Notes: تطبيق نسخ دون اتصال بسعر 7.99 دولار لمرة واحدة لأجهزة iPhone وiPad وMac بمعالج Apple silicon مع تمييز المتحدثين. دون اختبار عملي.',
    twitterDescription:
      'مراجعة Whisper Notes: تطبيق نسخ دون اتصال بشراء لمرة واحدة لأجهزة iPhone وiPad وMac مع تمييز المتحدثين. السعر والنماذج والخصوصية والقيود والبدائل.',
    audience:
      'لمستخدمي أجهزة Apple الذين يريدون نسخ المذكرات الصوتية والاجتماعات والمحاضرات بخصوصية ودون اشتراك — يغطي السعر والتثبيت والنماذج والخصوصية والقيود والبدائل.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Whisper Notes review',
    targetKeywords: [
      'مراجعة whisper notes',
      'تطبيق whisper notes',
      'تحويل الكلام إلى نص دون اتصال iphone',
      'نسخ دون اتصال mac',
      'تمييز المتحدثين نسخ دون اتصال',
      'تطبيق نسخ بشراء لمرة واحدة',
      'parakeet whisper sensevoice تطبيق',
    ],
    current_hardware_mentioned: ['iPhone 12', 'Apple silicon', 'Apple Neural Engine'],
    leadAnswerBlock:
      '**Whisper Notes تطبيق مغلق المصدر لتحويل الكلام إلى نص على iPhone وiPad وأجهزة Mac بمعالج Apple silicon، يشغّل نماذج Whisper وParakeet وSenseVoice على الجهاز، ويضيف تمييزًا للمتحدثين، ويكلّف 7.99 دولار لمرة واحدة في App Store.** تقول سياسة الخصوصية إن الصوت والنصوص لا تغادر جهازك أبدًا. تغطي هذه المراجعة إصدار iOS 1.8.8 وإصدار التنزيل المباشر لـ Mac 1.6.3، وتستند إلى الموقع العام وصفحة App Store وسجل التغييرات، لا إلى اختبار عملي.',
    quickAnswerTop: {
      ar: {
        question: 'هل يستحق Whisper Notes الشراء للنسخ دون اتصال على iPhone أو Mac؟',
        answer:
          'غالبًا نعم، إن كان لديك iPhone حديث أو Mac بمعالج Apple silicon وتريد نسخًا خاصًا مع تمييز المتحدثين ودون اشتراك. تحقق أولًا من ثلاثة أمور: هو لأجهزة Apple فقط، ومغلق المصدر، ولا ينسخ مباشرة أثناء حديثك.',
        bullets: [
          'شراء لمرة واحدة بسعر 7.99 دولار في App Store لأجهزة iPhone وiPad ونسخة Mac App Store؛ وتنزيل Mac منفصل مجاني حتى 5,000 كلمة أسبوعيًا أو 14 دولارًا لمرة واحدة.',
          'ثلاثة نماذج (Parakeet وWhisper وSenseVoice) مع أكثر من 100 لغة بحسب الموقع.',
          'تمييز المتحدثين وتصدير SRT وVTT وTXT وتكامل مع المذكرات الصوتية والاختصارات.',
          'يضيف تنزيل Mac الكتابة الصوتية وتسجيل الاجتماعات ومساعد ذكاء اصطناعي على الجهاز.',
          'يتطلب iPhone 12 أو أحدث مع iOS 18، أو Mac بمعالج Apple silicon؛ ولا يدعم Mac بمعالج Intel ولا Windows ولا Android.',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'الحصول على Whisper Notes', anchor: 'get-it' },
      { label: 'Whisper Notes في لمحة', anchor: 'at-a-glance' },
      { label: 'ما هو Whisper Notes', anchor: 'what-is-whisper-notes' },
      { label: 'كيف تبدأ', anchor: 'how-to-get-started' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'النماذج والعتاد', anchor: 'models-hardware' },
      { label: 'الخصوصية والترخيص والتكلفة', anchor: 'privacy' },
      { label: 'المزايا والقيود', anchor: 'tradeoffs' },
      { label: 'Whisper Notes مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'لمن يناسب Whisper Notes', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب Whisper Notes', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Whisper Notes تطبيق مدفوع لأجهزة Apple فقط ينسخ التسجيلات على الجهاز بنماذج صوتية مفتوحة ويميّز المتحدثين.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله ناسخًا للمذكرات الصوتية لا يتصل بأحد أبدًا: تدفع مرة واحدة، وتسجّل أو تستورد صوتًا، فتحصل على نص مع تمييز «من قال ماذا»، حتى في وضع الطيران.',
          },
        ],
        items: [
          'الإصدار الذي راجعناه: iOS 1.8.8 (18 سبتمبر 2026) وتنزيل Mac المباشر 1.6.3 (6 أكتوبر 2026)؛ وأحدث تحديث عمره أقل من أسبوعين، لذا لا ينطبق تحذير المشروع الهادئ.',
          'الترخيص والسعر: مملوك ومغلق المصدر؛ 7.99 دولار لمرة واحدة في App Store الأمريكي، وتنزيل لـ Mac مجاني حتى 5,000 كلمة أسبوعيًا أو 14 دولارًا لمرة واحدة.',
          'المنصات: iPhone 12 أو أحدث مع iOS 18، وiPad، وأجهزة Mac بمعالج Apple silicon.',
          'أبرز الميزات: تمييز المتحدثين وثلاث عائلات نماذج، والكتابة الصوتية وتسجيل الاجتماعات على Mac.',
          'النضج: نحو 654 تقييمًا في App Store بمتوسط 4.7، لكن دون اسم صانع على الموقع ودون شيفرة مصدرية عامة.',
        ],
      },
      getItWhisperNotes: {
        id: 'get-it',
        title: 'الحصول على Whisper Notes',
        content: [
          '**يُثبَّت Whisper Notes مثل أي تطبيق من Apple، فلا حاجة إلى الطرفية.** على Mac هناك طريقان: App Store الذي يشارك عملية شراء واحدة مع iPhone وiPad، وتنزيل مباشر من الموقع بترخيص مستقل.',
        ],
        columns: ['المنصة', 'التنزيل'],
        rows: [
          { 'المنصة': 'iPhone وiPad (iOS 18 فأحدث)', 'التنزيل': '[Whisper Notes على App Store](https://apps.apple.com/us/app/whisper-notes-speech-to-text/id6447090616) — 7.99 دولار لمرة واحدة (المتجر الأمريكي)' },
          { 'المنصة': 'Mac، نسخة App Store', 'التنزيل': '[Mac App Store](https://apps.apple.com/us/app/whisper-notes-speech-to-text/id6447090616) — الشراء نفسه لـ iPhone وiPad' },
          { 'المنصة': 'Mac، تنزيل مباشر (DMG)', 'التنزيل': '[whispernotes.app](https://whispernotes.app/) — مجاني حتى 5,000 كلمة أسبوعيًا، أو 14 دولارًا لمرة واحدة' },
          { 'المنصة': 'الموقع الرسمي', 'التنزيل': '[whispernotes.app](https://whispernotes.app/)' },
          { 'المنصة': 'سياسة الخصوصية', 'التنزيل': '[سياسة خصوصية Whisper Notes](https://whispernotes.app/privacy)' },
          { 'المنصة': 'الشيفرة المصدرية', 'التنزيل': 'لا توجد؛ التطبيق مغلق المصدر' },
        ],
        note: 'تنزيل Mac المباشر وحده يتضمن الكتابة الصوتية وQwen3-ASR (تجريبي) وأداة سطر الأوامر وخادم MCP. لا يعرض الموقع نسخة لـ Windows أو Android أو Mac بمعالج Intel، ويقول إن لا خطط لذلك. البائع في App Store هو SmashMelon LLC؛ ولا يذكر الموقع اسم صانع.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Whisper Notes في لمحة',
        columns: ['الخاصية', 'Whisper Notes'],
        rows: [
          { 'الخاصية': 'المنصة', 'Whisper Notes': 'iPhone وiPad وMac (Apple silicon)' },
          { 'الخاصية': 'السعر', 'Whisper Notes': '7.99 دولار لمرة واحدة (App Store)؛ وتنزيل Mac بشريحة مجانية أو 14 دولارًا' },
          { 'الخاصية': 'الترخيص', 'Whisper Notes': 'مملوك، مغلق المصدر' },
          { 'الخاصية': 'مكان التشغيل', 'Whisper Notes': 'على الجهاز دون اتصال؛ تُنزَّل النماذج داخل التطبيق' },
          { 'الخاصية': 'اللغات', 'Whisper Notes': 'أكثر من 100 بحسب الموقع؛ ويغطي Parakeet 25 لغة أوروبية' },
          { 'الخاصية': 'النسخ في الوقت الحقيقي', 'Whisper Notes': 'لا؛ يظهر النص بعد إيقاف التسجيل' },
          { 'الخاصية': 'تمييز المتحدثين', 'Whisper Notes': 'نعم، على iPhone وMac' },
          { 'الخاصية': 'يعمل على CPU فقط', 'Whisper Notes': 'لا؛ يحتاج Apple silicon أو iPhone حديثًا' },
          { 'الخاصية': 'خادم API محلي', 'Whisper Notes': 'لا؛ وتنزيل Mac يضم أداة CLI وخادم MCP' },
        ],
        note: 'تتبع الخصائص مقارنة تحويل الكلام إلى نص المستخدمة في دليل برمجيات LLM المحلية. غياب الذكر في الموقع يعني «غير معروف» لا «غير مدعوم».',
      },
      whatIsWhisperNotes: {
        id: 'what-is-whisper-notes',
        title: 'ما هو Whisper Notes',
        content: [
          '**Whisper Notes تطبيق نسخ أصيل، وليس خدمة سحابية.** يوضح الموقع أنه يشغّل نماذج Whisper المفتوحة المصدر نفسها التي تقدمها OpenAI، إضافة إلى NVIDIA Parakeet وSenseVoice، على Apple Neural Engine، دون Python أو سطر أوامر.',
          'يسجّل من شاشة القفل، ويستورد الصوت والفيديو، ويميّز المتحدثين. ويضيف تنزيل Mac من الموقع كتابة صوتية على مستوى النظام وتسجيل مكالمات Zoom وTeams وGoogle Meet ومساعد ذكاء اصطناعي على الجهاز. يقول الموقع إنه «chosen by 70,000+ professionals»، وهو ادعاء من الصانع لم تستطع هذه المراجعة التحقق منه.',
          'تستند هذه المراجعة إلى الموقع وFAQ وسياسة الخصوصية وسجل التغييرات، وإلى صفحة App Store. لم يكن هناك اختبار عملي، لذا لا تُقيَّم هنا الدقة ولا السرعة ولا الاستقرار.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'كيف تبدأ',
        content: [
          '**الإعداد هو تثبيت ثم تنزيل النماذج عند أول تشغيل ثم التسجيل.** تتبع الخطوات FAQ وصفحة App Store.',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'اشتره من [App Store](https://apps.apple.com/us/app/whisper-notes-speech-to-text/id6447090616) لأجهزة iPhone وiPad وMac، أو نزّل نسخة Mac من [whispernotes.app](https://whispernotes.app/) وجرّبها مجانًا.',
          },
          {
            title: 'دع النماذج تُنزَّل',
            whyItMatters: 'تُنزَّل النماذج داخل التطبيق عند أول استخدام؛ وبعدها يعمل دون اتصال، وتقول الصفحة إنه يمكنك تشغيل وضع الطيران قبل التسجيل.',
          },
          {
            title: 'سجّل أو استورد صوتًا',
            whyItMatters: 'سجّل من شاشة القفل أو زر الإجراء، أو شارك مذكرة من تطبيق المذكرات الصوتية، أو استورد صوتًا وفيديو من تطبيقات أخرى.',
          },
          {
            title: 'فعّل تمييز المتحدثين وصدّر',
            whyItMatters: 'اضغط أيقونة المتحدث في النص، وغيّر أسماء المتحدثين، وصدّر TXT أو SRT أو VTT مع الطوابع الزمنية وأسماء المتحدثين.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**تدور الميزات حول النسخ الخاص للتسجيلات.** كل ما يلي مصدره الموقع وصفحة App Store.',
        ],
        items: [
          '**تسجيل سريع.** ابدأ التسجيل من شاشة القفل أو الأدوات المصغّرة أو زر الإجراء أو «Hey Siri»، دون حد زمني.',
          '**الاستيراد والمشاركة.** أحضر الصوت والفيديو من WhatsApp وPhotos والمذكرات الصوتية، واستخرج الترجمات من الفيديو.',
          '**تمييز المتحدثين.** فصل متحدثين على الجهاز مع إمكانية إعادة تسميتهم؛ غيّر اسم متحدث مرة واحدة فيُحدَّث الاسم في النص كله.',
          '**التصدير.** TXT وSRT وVTT مع الطوابع الزمنية؛ ويحفظ تطبيق Mac أيضًا ملفات Markdown يمكن لخزنة Obsidian استخدامها.',
          '**إجراءات الاختصارات.** خمسة إجراءات، منها بدء التسجيل وإيقافه ونسخ الصوت.',
          '**إضافات Mac (التنزيل من الموقع).** كتابة صوتية بالضغط على Fn، وتسجيل تلقائي للاجتماعات، وملخصات ودردشة مع نموذج ذكاء اصطناعي محلي (Gemma 4)، وأداة سطر أوامر مع خادم MCP مدمج.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'النماذج والعتاد',
        content: [
          '**أنت تختار النموذج: Parakeet هو الافتراضي، وWhisper يغطي أكثر من 100 لغة، وSenseVoice موجّه إلى الصينية واليابانية والكورية.** يدعم Parakeet V3 خمسًا وعشرين لغة أوروبية. وعلى iPhone يمكن اختيار Apple Speech أيضًا مع iOS 26، ويقدّم تنزيل Mac نموذج Qwen3-ASR (تجريبي، 30 لغة، ويُنصح بذاكرة 16 GB).',
          'يتطلب iPhone 12 أو أحدث مع iOS 18، أو أي Mac بمعالج Apple silicon؛ ويوصي الموقع بذاكرة 8 GB أو أكثر لـ Whisper Large V3 Turbo. ويذكر المطوّر أن Parakeet ينسخ 35 دقيقة في نحو 18 ثانية على M4 Pro بمعدل خطأ كلمات 6.32%، وخمس دقائق في نحو 18 ثانية على iPhone 15. هذه اختبارات من الصانع نفسه ولم تُعَد.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والترخيص والتكلفة',
        content: [
          '**تقول سياسة الخصوصية إن صوتك ونصوصك وبيانات المستخدم لا تغادر جهازك أبدًا.** وتذكر أنه لا يستخدم أدوات تحليلات أو تتبع، ولا يجمع بيانات شخصية ولا ينقلها، وأن المطوّر لا يملك وصولًا إلى صوتك. ويضيف FAQ أن حذف التطبيق يحذف تسجيلاتك، فصدّر ما تريد الاحتفاظ به.',
          'تُنزَّل النماذج داخل التطبيق، لذا يحتاج التشغيل الأول إلى الإنترنت. ومشاركة نص مع تطبيق آخر قرارك أنت، وتقع خارج هذا الوعد. الشيفرة غير مفتوحة، لذا لا يمكن فحص هذه الأقوال، ولم تفحص هذه المراجعة حركة الشبكة.',
          'هو منتج مدفوع ومملوك: 7.99 دولار لمرة واحدة في App Store الأمريكي، يغطي iPhone وiPad ونسخة Mac App Store، دون اشتراك أو مشتريات داخل التطبيق. وتنزيل Mac المنفصل له شريحة مجانية بحد 5,000 كلمة أسبوعيًا أو ترخيص بـ 14 دولارًا. ويمكن طلب استرداد من إعدادات التطبيق.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المزايا والقيود',
        columns: ['الميزة', 'ما تعنيه في الاستخدام الفعلي', 'القيد / تنبيه'],
        rows: [
          {
            'الميزة': 'يعمل دون اتصال بالكامل',
            'ما تعنيه في الاستخدام الفعلي': 'يبقى الصوت على جهازك حتى في الطائرة.',
            'القيد / تنبيه': 'مغلق المصدر، فلا يمكن التحقق من هذا الادعاء.',
          },
          {
            'الميزة': 'سعر لمرة واحدة',
            'ما تعنيه في الاستخدام الفعلي': 'دون اشتراك للنسخ.',
            'القيد / تنبيه': 'تنزيل Mac المباشر يُرخَّص على حدة.',
          },
          {
            'الميزة': 'تمييز المتحدثين',
            'ما تعنيه في الاستخدام الفعلي': 'معرفة من يتحدث في الاجتماعات.',
            'القيد / تنبيه': 'لا تُنشر الدقة؛ والأصوات المتشابهة تحتاج تحديد عدد المتحدثين يدويًا.',
          },
          {
            'الميزة': 'ثلاث عائلات نماذج',
            'ما تعنيه في الاستخدام الفعلي': 'اختيار السرعة أو تغطية اللغات.',
            'القيد / تنبيه': 'تنتقل بنفسك إلى SenseVoice للغات الصينية واليابانية والكورية.',
          },
          {
            'الميزة': 'تطبيق أصيل لأجهزة Apple',
            'ما تعنيه في الاستخدام الفعلي': 'تكامل مع شاشة القفل والاختصارات والمذكرات الصوتية.',
            'القيد / تنبيه': 'لا نسخ مباشر، ولا Windows أو Android أو Mac بمعالج Intel.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Whisper Notes مقابل البدائل',
        content: [
          'هذه أقرب أدوات تحويل الكلام إلى نص في الدليل: منافس خاص بـ Mac، وتطبيق إملاء سحابي للمقارنة، وتطبيق مجاني متعدد المنصات، ومحرك للمطورين.',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر والترخيص', 'الدور', 'الفرق الأهم'],
        rows: [
          {
            'التطبيق': 'Whisper Notes',
            'المنصات': 'iPhone وiPad وMac',
            'السعر والترخيص': '7.99 دولار لمرة واحدة، مملوك',
            'الدور': 'تطبيق نسخ دون اتصال',
            'الفرق الأهم': 'iPhone وMac في عملية شراء واحدة؛ وتمييز المتحدثين',
          },
          {
            'التطبيق': '[MacWhisper](/ar/power-local-llm/macwhisper-review)',
            'المنصات': 'macOS',
            'السعر والترخيص': 'مجاني جزئيًا، مملوك',
            'الدور': 'تطبيق نسخ لأجهزة Mac',
            'الفرق الأهم': 'مُدرج في الدليل لنظام macOS فقط',
          },
          {
            'التطبيق': '[Aqua Voice](/ar/power-local-llm/aquavoice-review)',
            'المنصات': 'Mac وWindows وiOS وAndroid',
            'السعر والترخيص': 'مجاني جزئيًا، مملوك',
            'الدور': 'تطبيق إملاء',
            'الفرق الأهم': 'مُدرج في الدليل كتطبيق سحابي، فيغادر الصوت الجهاز',
          },
          {
            'التطبيق': '[TranscriptionSuite](/ar/power-local-llm/transcriptionsuite-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر والترخيص': 'مجاني، GPL-3.0',
            'الدور': 'تطبيق نسخ مفتوح المصدر',
            'الفرق الأهم': 'مفتوح المصدر ومتعدد المنصات؛ ويلزم Docker على Windows وLinux',
          },
          {
            'التطبيق': '[whisper.cpp](/ar/power-local-llm/whisper-cpp-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر والترخيص': 'مجاني، MIT',
            'الدور': 'محرك بسطر الأوامر',
            'الفرق الأهم': 'للمطورين؛ دون واجهة تطبيق',
          },
        ],
        note: 'تتغير المنصات والأسعار والميزات في تطبيقات الجهات الخارجية كثيرًا. تحقق من التفاصيل الحالية في صفحة كل مشروع قبل أن تقرر.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب Whisper Notes',
        items: [
          '**من ينسخون على iPhone.** يناسب التسجيل من شاشة القفل والمشاركة من المذكرات الصوتية المقابلات والمحاضرات.',
          '**مستخدمو Mac الذين يتجنبون الاشتراكات.** يحل السعر لمرة واحدة محل رسوم النسخ الشهرية.',
          '**المهنيون المهتمون بالخصوصية.** يستطيع الصحفيون والباحثون الذين لا يمكنهم رفع التسجيلات إبقاءها على الجهاز.',
          '**مستخدمو Mac الذين يُملون.** تضيف نسخة الموقع كتابة صوتية بالضغط على Fn في أي تطبيق.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب Whisper Notes',
        items: [
          '**مستخدمو Windows وAndroid وMac بمعالج Intel.** لا شيء منها مدعوم أو مخطط له.',
          '**أصحاب أجهزة iPhone القديمة.** لا يُدعم iPhone 11 وما قبله.',
          '**من يحتاجون ترجمات مباشرة.** ينسخ التطبيق بعد أن توقف التسجيل.',
          '**من يشترطون المصدر المفتوح.** الشيفرة مغلقة؛ راجع البدائل المفتوحة في الجدول.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل في وضع الطيران؟',
            a: 'نعم، بعد تنزيل النماذج؛ ويوصي وصف App Store بتشغيل وضع الطيران قبل التسجيل ويقول إنه يعمل بالطريقة نفسها تمامًا.',
          },
          {
            q: 'هل تطبيق Mac هو الشراء نفسه لتطبيق iPhone؟',
            a: 'يغطي الشراء من App Store أجهزة iPhone وiPad ونسخة Mac App Store. أما تنزيل Mac المباشر فمنفصل: مجاني حتى 5,000 كلمة أسبوعيًا، أو 14 دولارًا لمرة واحدة.',
          },
          {
            q: 'هل يلخّص النصوص؟',
            a: 'على Mac نعم، بعد تنزيل نموذج ذكاء اصطناعي على الجهاز. وعلى iPhone لا توجد ملخصات بالذكاء الاصطناعي بعد، فتنسخ النص إلى أداة أخرى.',
          },
          {
            q: 'هل ينسخ في الوقت الحقيقي؟',
            a: 'لا. يظهر النص تدريجيًا أثناء النسخ، لكن بعد أن تنهي التسجيل.',
          },
          {
            q: 'من يقف خلفه؟',
            a: 'يذكر App Store شركة SmashMelon LLC بائعًا. ولا يذكر الموقع شركة ولا شخصًا.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          'يناسب Whisper Notes من يريد نسخًا خاصًا ودون اشتراك على iPhone أو Mac بمعالج Apple silicon: يُثبَّت مثل أي تطبيق، ويميّز المتحدثين، ويبقي الصوت على الجهاز بحسب وصفه هو.',
          'التحفظات تتعلق بالشفافية والنطاق: مغلق المصدر، ولا اسم صانع على الموقع، وأرقام السرعة والدقة من الصانع نفسه، ولا نسخ مباشر ولا منصات غير Apple. جرّب الشريحة المجانية على Mac قبل الشراء.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Whisper Notes](https://whispernotes.app/) — الميزات والأسعار وFAQ والأجهزة المدعومة.',
          '[سياسة خصوصية Whisper Notes](https://whispernotes.app/privacy) — معالجة البيانات والعمل دون اتصال.',
          '[سجل تغييرات Whisper Notes](https://whispernotes.app/changelog) — إصدارات وتواريخ تنزيل Mac المباشر.',
          '[Whisper Notes على App Store](https://apps.apple.com/us/app/whisper-notes-speech-to-text/id6447090616) — السعر والإصدار والبائع والوصف.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مقارنة أدوات الصوت والكلام المحلية](/ar/power-local-llm/local-llm-voice-audio-compared) — تحويل النص إلى كلام والكلام إلى نص ووكلاء الصوت جنبًا إلى جنب.',
          '[مراجعة MacWhisper](/ar/power-local-llm/macwhisper-review) — أقرب تطبيق نسخ خاص بأجهزة Mac.',
          '[مراجعة Whisper.cpp](/ar/power-local-llm/whisper-cpp-review) — المحرك المفتوح وراء كثير من تطبيقات Whisper المحلية.',
          '[بناء مساعد صوتي محلي](/ar/power-local-llm/build-local-voice-assistant-2026) — دمج تحويل الكلام إلى نص في مساعد صوتي.',
          '[الدليل الكامل لبرمجيات LLM المحلية](/ar/directory) — دليل أوسع لأدوات الذكاء الاصطناعي المحلية لجميع المنصات.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-18',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whisper-notes-review-hero-ko.webp',
    title: 'Whisper Notes 리뷰: iPhone, iPad, Mac용 오프라인 음성 인식 앱',
    seoTitle: 'Whisper Notes 리뷰: 오프라인 음성 인식 앱',
    intro:
      'Whisper Notes는 오디오를 어디에도 보내지 않고 iPhone, iPad, Apple silicon Mac에서 음성을 텍스트로 바꿔 주는 유료 비공개 소스 앱입니다. 화자 구분을 지원하며 구독 대신 한 번만 결제합니다. 이 리뷰는 공식 사이트, App Store 목록, 변경 내역에서 확인되는 내용과 빠진 내용, 그리고 디렉터리의 다른 음성 인식 도구와 비교한 결과를 정리합니다.',
    metaDescription:
      'Whisper Notes 리뷰: 한국 App Store에서 6,000원에 한 번 결제하는 화자 구분 지원 오프라인 음성 인식 앱입니다. 직접 테스트는 하지 않았습니다.',
    twitterDescription:
      'Whisper Notes 리뷰: 화자 구분을 지원하는 iPhone, iPad, Mac용 일회성 구매 오프라인 전사 앱. 가격, 모델, 개인정보, 한계, 대안을 다룹니다.',
    audience:
      '음성 메모, 회의, 강의를 구독 없이 비공개로 전사하고 싶은 Apple 사용자를 위해 가격, 설치, 모델, 개인정보, 한계, 대안을 다룹니다.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Whisper Notes review',
    targetKeywords: [
      'whisper notes 리뷰',
      'whisper notes 앱',
      'iphone 오프라인 음성 인식',
      'mac 오프라인 전사',
      '화자 구분 오프라인 전사',
      '일회성 구매 전사 앱',
      'parakeet whisper sensevoice 앱',
    ],
    current_hardware_mentioned: ['iPhone 12', 'Apple silicon', 'Apple Neural Engine'],
    leadAnswerBlock:
      '**Whisper Notes는 Whisper, Parakeet, SenseVoice 모델을 기기에서 실행하고 화자 구분을 더한 iPhone, iPad, Apple silicon Mac용 비공개 소스 음성 인식 앱이며, 한국 App Store에서는 6,000원에 한 번 결제합니다.** 개인정보 처리방침에 따르면 오디오와 전사 결과는 기기를 벗어나지 않습니다. 이 리뷰는 iOS 버전 1.8.8과 Mac 직접 내려받기 버전 1.6.3을 다루며, 공개된 사이트, App Store 목록, 변경 내역에 근거하고 직접 테스트는 하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'iPhone이나 Mac에서 오프라인 전사를 하려고 Whisper Notes를 구매할 만한가요?',
        answer:
          '최신 iPhone이나 Apple silicon Mac이 있고 구독 없이 화자 구분이 되는 비공개 전사를 원한다면 아마도 그렇습니다. 먼저 세 가지를 확인하십시오. Apple 기기 전용이고, 비공개 소스이며, 말하는 동안 실시간으로 전사하지 않는다는 점입니다.',
        bullets: [
          '한국 App Store에서 6,000원 일회성 구매로 iPhone, iPad, Mac App Store 버전에 쓸 수 있고, 별도로 배포되는 Mac 버전은 주당 5,000단어까지 무료이거나 14달러(USD) 일회성입니다.',
          '세 가지 모델(Parakeet, Whisper, SenseVoice)로 100개 이상의 언어를 지원한다고 합니다.',
          '화자 구분, SRT·VTT·TXT 내보내기, 음성 메모와 단축어 연동.',
          'Mac 내려받기 버전에는 음성 입력, 회의 녹음, 기기 내 AI 어시스턴트가 추가됩니다.',
          'iOS 18의 iPhone 12 이상 또는 Apple silicon Mac이 필요하며 Intel Mac, Windows, Android는 지원하지 않습니다.',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Whisper Notes 받기', anchor: 'get-it' },
      { label: 'Whisper Notes 한눈에 보기', anchor: 'at-a-glance' },
      { label: 'Whisper Notes란', anchor: 'what-is-whisper-notes' },
      { label: '시작하기', anchor: 'how-to-get-started' },
      { label: '기능', anchor: 'features' },
      { label: '모델과 하드웨어', anchor: 'models-hardware' },
      { label: '개인정보, 라이선스, 비용', anchor: 'privacy' },
      { label: '장점과 한계', anchor: 'tradeoffs' },
      { label: 'Whisper Notes와 대안 비교', anchor: 'vs-alternatives' },
      { label: 'Whisper Notes가 적합한 사용자', anchor: 'who-should-use' },
      { label: 'Whisper Notes가 적합하지 않은 사용자', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 글', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Whisper Notes는 공개된 음성 모델로 녹음을 기기에서 전사하고 화자를 표시하는, Apple 기기 전용 유료 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '밖으로 연락하지 않는 음성 메모 전사 도구라고 생각하시면 됩니다. 한 번 결제하고 녹음하거나 오디오를 가져오면 비행기 모드에서도 \'누가 말했는지\'가 표시된 텍스트를 얻을 수 있습니다.',
          },
        ],
        items: [
          '검토한 버전: iOS 1.8.8(2026년 9월 18일)과 Mac 직접 내려받기 1.6.3(2026년 10월 6일)입니다. 최신 업데이트가 2주 이내이므로 업데이트 정체 경고는 적용되지 않습니다.',
          '라이선스와 가격: 독점, 비공개 소스이며 한국 App Store에서 6,000원 일회성입니다. 별도 배포되는 Mac 버전은 주당 5,000단어까지 무료이거나 14달러(USD) 일회성입니다.',
          '플랫폼: iOS 18의 iPhone 12 이상, iPad, Apple silicon Mac.',
          '주요 기능: 화자 구분, 세 가지 모델 계열, Mac의 음성 입력과 회의 녹음.',
          '성숙도: App Store 평점 약 654개에 평균 4.7이지만 사이트에는 제작자 이름이 없고 소스 코드도 공개되어 있지 않습니다.',
        ],
      },
      getItWhisperNotes: {
        id: 'get-it',
        title: 'Whisper Notes 받기',
        content: [
          '**Whisper Notes는 다른 Apple 앱처럼 설치하며 터미널이 필요하지 않습니다.** Mac에는 두 가지 경로가 있습니다. iPhone·iPad와 구매를 공유하는 App Store, 그리고 별도 라이선스가 적용되는 공식 사이트 직접 내려받기입니다.',
        ],
        columns: ['플랫폼', '받기'],
        rows: [
          { '플랫폼': 'iPhone과 iPad(iOS 18 이상)', '받기': '[App Store의 Whisper Notes](https://apps.apple.com/kr/app/id6447090616) — 6,000원 일회성(한국 스토어)' },
          { '플랫폼': 'Mac, App Store 버전', '받기': '[Mac App Store](https://apps.apple.com/kr/app/id6447090616) — iPhone·iPad와 같은 구매' },
          { '플랫폼': 'Mac, 직접 내려받기(DMG)', '받기': '[whispernotes.app](https://whispernotes.app/) — 주당 5,000단어까지 무료 또는 14달러(USD) 일회성' },
          { '플랫폼': '공식 사이트', '받기': '[whispernotes.app](https://whispernotes.app/)' },
          { '플랫폼': '개인정보 처리방침', '받기': '[Whisper Notes 개인정보 처리방침](https://whispernotes.app/privacy)' },
          { '플랫폼': '소스 코드', '받기': '없음. 앱은 비공개 소스입니다' },
        ],
        note: '음성 입력, Qwen3-ASR(베타), 명령줄 도구, MCP 서버는 Mac 직접 내려받기 버전에만 포함됩니다. 사이트에는 Windows, Android, Intel Mac 버전이 없으며 계획도 없다고 되어 있습니다. App Store 판매자는 SmashMelon LLC이며 사이트에는 제작자가 명시되어 있지 않습니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Whisper Notes 한눈에 보기',
        columns: ['항목', 'Whisper Notes'],
        rows: [
          { '항목': '플랫폼', 'Whisper Notes': 'iPhone, iPad, Mac(Apple silicon)' },
          { '항목': '가격', 'Whisper Notes': '6,000원 일회성(App Store). Mac 직접 버전은 무료 구간 또는 14달러' },
          { '항목': '라이선스', 'Whisper Notes': '독점, 비공개 소스' },
          { '항목': '실행 위치', 'Whisper Notes': '기기에서 오프라인 실행. 모델은 앱에서 내려받음' },
          { '항목': '언어', 'Whisper Notes': '100개 이상이라고 안내. Parakeet은 유럽 25개 언어' },
          { '항목': '실시간 전사', 'Whisper Notes': '미지원. 녹음을 멈춘 뒤 텍스트가 나타남' },
          { '항목': '화자 구분', 'Whisper Notes': '지원(iPhone과 Mac)' },
          { '항목': 'CPU만으로 사용 가능', 'Whisper Notes': '불가. Apple silicon 또는 최신 iPhone 필요' },
          { '항목': '로컬 API 서버', 'Whisper Notes': '없음. Mac 직접 버전에 CLI와 MCP 서버 있음' },
        ],
        note: '이 항목은 로컬 LLM 소프트웨어 디렉터리에서 쓰는 음성 인식 비교를 따릅니다. 사이트에 언급이 없다는 것은 “알 수 없음”이지 “지원하지 않음”이 아닙니다.',
      },
      whatIsWhisperNotes: {
        id: 'what-is-whisper-notes',
        title: 'Whisper Notes란',
        content: [
          '**Whisper Notes는 네이티브 전사 앱이며 클라우드 서비스가 아닙니다.** 사이트는 OpenAI의 Whisper와 같은 오픈소스 Whisper 모델에 NVIDIA Parakeet과 SenseVoice를 더해 Apple Neural Engine에서 실행하며, Python이나 명령줄이 필요 없다고 설명합니다.',
          '잠금 화면에서 바로 녹음하고, 오디오와 영상을 가져오며, 화자를 구분합니다. 공식 사이트에서 내려받는 Mac 버전은 시스템 전체 음성 입력, Zoom·Teams·Google Meet 통화 녹음, 기기 내 AI 어시스턴트를 더합니다. 사이트는 \'chosen by 70,000+ professionals\'라고 밝히는데, 이는 제공자의 주장으로 이 리뷰에서는 확인하지 못했습니다.',
          '이 리뷰는 공식 사이트, FAQ, 개인정보 처리방침, 변경 내역, 그리고 App Store 목록에 근거합니다. 직접 테스트는 하지 않았으므로 정확도, 속도, 안정성은 여기서 평가하지 않습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하기',
        content: [
          '**설정은 설치, 처음 실행할 때의 모델 내려받기, 그리고 녹음입니다.** 단계는 FAQ와 App Store 목록을 따릅니다.',
        ],
        numberedItems: [
          {
            title: '앱 설치하기',
            whyItMatters: 'iPhone, iPad, Mac용으로는 [App Store](https://apps.apple.com/kr/app/id6447090616)에서 구매하거나, Mac 버전을 [whispernotes.app](https://whispernotes.app/)에서 내려받아 무료로 써 볼 수 있습니다.',
          },
          {
            title: '모델이 내려받아지도록 두기',
            whyItMatters: '모델은 처음 사용할 때 앱 안에서 내려받으며, 이후에는 오프라인으로 작동합니다. 목록에는 녹음 전에 비행기 모드를 켜도 된다고 적혀 있습니다.',
          },
          {
            title: '녹음하거나 오디오 가져오기',
            whyItMatters: '잠금 화면이나 동작 버튼에서 녹음하거나, 음성 메모에서 공유하거나, 다른 앱의 오디오와 영상을 가져옵니다.',
          },
          {
            title: '화자 구분을 켜고 내보내기',
            whyItMatters: '전사 화면의 화자 아이콘을 눌러 화자 이름을 바꾸고, 타임스탬프와 화자 이름이 포함된 TXT, SRT, VTT로 내보냅니다.',
          },
        ],
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**기능은 녹음을 비공개로 전사하는 데 맞춰져 있습니다.** 아래 내용은 모두 공식 사이트와 App Store 목록에서 가져왔습니다.',
        ],
        items: [
          '**빠른 녹음 시작.** 잠금 화면, 위젯, 동작 버튼, \'시리야\'로 녹음을 시작할 수 있으며 녹음 시간 제한이 없습니다.',
          '**가져오기와 공유.** WhatsApp, 사진, 음성 메모의 오디오와 영상을 가져오고 영상에서 자막을 추출합니다.',
          '**화자 구분.** 기기 내 화자 분리로 화자 이름을 바꿀 수 있으며, 한 번 바꾸면 전체 전사 내용의 표시가 갱신됩니다.',
          '**내보내기.** 타임스탬프가 있는 TXT, SRT, VTT. Mac 앱은 Obsidian 보관함에서 쓸 수 있는 Markdown 파일도 저장합니다.',
          '**단축어 동작.** 녹음 시작, 녹음 중지, 오디오 전사를 포함한 다섯 가지 동작.',
          '**Mac 추가 기능(공식 사이트 내려받기).** Fn 키를 누른 채 말하는 음성 입력, 자동 회의 녹음, 로컬 AI 모델(Gemma 4)로 하는 요약과 대화, MCP 서버가 내장된 명령줄 도구.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '모델과 하드웨어',
        content: [
          '**모델은 직접 고릅니다. Parakeet이 기본이고, Whisper는 100개 이상의 언어를 다루며, SenseVoice는 중국어·일본어·한국어를 겨냥합니다.** Parakeet V3는 유럽 25개 언어를 지원합니다. iPhone에서는 iOS 26에서 Apple Speech도 고를 수 있고, Mac 직접 버전에는 Qwen3-ASR(베타, 30개 언어, 16 GB 메모리 권장)이 있습니다.',
          'iOS 18의 iPhone 12 이상 또는 Apple silicon Mac이 필요하며, Whisper Large V3 Turbo에는 8 GB 이상의 메모리를 사이트가 권장합니다. 개발자는 Parakeet이 M4 Pro에서 35분 분량을 약 18초에 전사하고 단어 오류율은 6.32%이며, iPhone 15에서 5분 분량을 약 18초에 처리한다고 밝힙니다. 이는 제공자 자체 테스트이며 재현하지 않았습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보, 라이선스, 비용',
        content: [
          '**개인정보 처리방침에 따르면 음성, 전사 결과, 사용자 데이터는 기기를 벗어나지 않습니다.** 분석이나 추적 도구를 쓰지 않고, 개인 데이터를 수집하거나 전송하지 않으며, 개발자가 오디오에 접근할 수 없다고 밝힙니다. FAQ는 앱을 삭제하면 녹음도 함께 삭제되므로 보관할 내용은 내보내라고 덧붙입니다.',
          '모델은 앱 안에서 내려받으므로 처음 실행할 때는 인터넷이 필요합니다. 전사 결과를 다른 앱에 공유하는 것은 사용자의 선택이며 이 약속의 범위 밖입니다. 코드가 공개되어 있지 않아 이 설명들을 직접 검증할 수 없고, 이 리뷰는 네트워크 트래픽도 검사하지 않았습니다.',
          '유료 독점 제품으로, 한국 App Store에서 6,000원 일회성이며 iPhone, iPad, Mac App Store 버전을 포함하고 구독이나 앱 내 구매는 없습니다. 별도 배포되는 Mac 버전에는 주당 5,000단어의 무료 구간 또는 14달러(USD) 라이선스가 있습니다. 환불은 앱 설정에서 요청할 수 있습니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장점과 한계',
        columns: ['장점', '실제 사용에서의 의미', '한계 / 유의 사항'],
        rows: [
          {
            '장점': '완전한 오프라인',
            '실제 사용에서의 의미': '비행기 안에서도 오디오가 기기에 머뭅니다.',
            '한계 / 유의 사항': '비공개 소스이므로 이 주장을 확인할 수 없습니다.',
          },
          {
            '장점': '일회성 가격',
            '실제 사용에서의 의미': '전사에 구독이 필요 없습니다.',
            '한계 / 유의 사항': 'Mac 직접 버전은 라이선스가 따로입니다.',
          },
          {
            '장점': '화자 구분',
            '실제 사용에서의 의미': '회의에서 누가 말했는지 알 수 있습니다.',
            '한계 / 유의 사항': '정확도는 공개되지 않았고, 목소리가 비슷하면 화자 수를 직접 지정해야 합니다.',
          },
          {
            '장점': '세 가지 모델 계열',
            '실제 사용에서의 의미': '속도나 언어 범위를 고를 수 있습니다.',
            '한계 / 유의 사항': '중국어·일본어·한국어는 직접 SenseVoice로 바꿔야 합니다.',
          },
          {
            '장점': '네이티브 Apple 앱',
            '실제 사용에서의 의미': '잠금 화면, 단축어, 음성 메모와 연동됩니다.',
            '한계 / 유의 사항': '실시간 전사가 없고 Windows, Android, Intel Mac은 지원하지 않습니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Whisper Notes와 대안 비교',
        content: [
          '디렉터리에서 가장 가까운 음성 인식 도구는 Mac 전용 경쟁 앱, 대비를 위한 클라우드 받아쓰기 앱, 무료 크로스 플랫폼 앱, 개발자용 엔진입니다.',
        ],
        columns: ['앱', '플랫폼', '가격과 라이선스', '역할', '핵심 차이'],
        rows: [
          {
            '앱': 'Whisper Notes',
            '플랫폼': 'iPhone, iPad, Mac',
            '가격과 라이선스': '6,000원 일회성, 독점',
            '역할': '오프라인 전사 앱',
            '핵심 차이': 'iPhone과 Mac을 한 번 구매로 사용, 화자 구분 지원',
          },
          {
            '앱': '[MacWhisper](/ko/power-local-llm/macwhisper-review)',
            '플랫폼': 'macOS',
            '가격과 라이선스': '프리미엄, 독점',
            '역할': 'Mac용 전사 앱',
            '핵심 차이': '디렉터리에는 macOS 전용으로 등재',
          },
          {
            '앱': '[Aqua Voice](/ko/power-local-llm/aquavoice-review)',
            '플랫폼': 'Mac, Windows, iOS, Android',
            '가격과 라이선스': '프리미엄, 독점',
            '역할': '받아쓰기 앱',
            '핵심 차이': '디렉터리에 클라우드 기반으로 등재되어 오디오가 기기를 벗어남',
          },
          {
            '앱': '[TranscriptionSuite](/ko/power-local-llm/transcriptionsuite-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격과 라이선스': '무료, GPL-3.0',
            '역할': '오픈소스 전사 앱',
            '핵심 차이': '오픈소스이며 크로스 플랫폼. Windows와 Linux는 Docker 필요',
          },
          {
            '앱': '[whisper.cpp](/ko/power-local-llm/whisper-cpp-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격과 라이선스': '무료, MIT',
            '역할': '명령줄 엔진',
            '핵심 차이': '개발자용이며 앱 화면 없음',
          },
        ],
        note: '타사 앱의 플랫폼, 가격, 기능은 자주 바뀝니다. 결정하기 전에 각 프로젝트의 공식 페이지에서 최신 정보를 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Whisper Notes가 적합한 사용자',
        items: [
          '**iPhone에서 전사하는 사람.** 잠금 화면 녹음과 음성 메모 공유는 인터뷰와 강의에 잘 맞습니다.',
          '**구독을 피하려는 Mac 사용자.** 일회성 가격이 매달 나가는 전사 비용을 대신합니다.',
          '**개인정보를 중시하는 전문가.** 녹음을 업로드할 수 없는 기자와 연구자는 녹음을 기기 안에 둘 수 있습니다.',
          '**Mac에서 받아쓰는 사람.** 공식 사이트 버전은 어느 앱에서든 Fn 키를 누른 채 말하는 음성 입력을 더합니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Whisper Notes가 적합하지 않은 사용자',
        items: [
          '**Windows, Android, Intel Mac 사용자.** 어느 것도 지원하거나 계획되어 있지 않습니다.',
          '**오래된 iPhone 사용자.** iPhone 11 이하는 지원하지 않습니다.',
          '**실시간 자막이 필요한 사람.** 녹음을 멈춘 뒤에 전사합니다.',
          '**오픈소스가 필수인 사람.** 코드가 비공개이니 표의 오픈소스 대안을 살펴보십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '비행기 모드에서 작동하나요?',
            a: '예, 모델을 내려받은 뒤에는 작동합니다. App Store 설명은 녹음 전에 비행기 모드를 켜도 똑같이 작동한다고 안내합니다.',
          },
          {
            q: 'Mac 앱은 iPhone 앱과 같은 구매인가요?',
            a: 'App Store 구매는 iPhone, iPad, Mac App Store 버전을 포함합니다. Mac 직접 내려받기는 별개로, 주당 5,000단어까지 무료이거나 14달러(USD) 일회성입니다.',
          },
          {
            q: '전사 내용을 요약해 주나요?',
            a: 'Mac에서는 기기 내 AI 모델을 내려받으면 가능합니다. iPhone에는 아직 AI 요약이 없어 텍스트를 다른 도구에 복사해야 합니다.',
          },
          {
            q: '실시간으로 전사하나요?',
            a: '아니요. 전사하는 동안 텍스트가 조금씩 나타나지만, 녹음을 끝낸 뒤의 일입니다.',
          },
          {
            q: '누가 만들었나요?',
            a: 'App Store는 SmashMelon LLC를 판매자로 표시합니다. 사이트에는 회사나 개인이 명시되어 있지 않습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          'iPhone이나 Apple silicon Mac에서 구독 없이 비공개로 전사하고 싶다면 Whisper Notes가 잘 맞습니다. 일반 앱처럼 설치되고, 화자를 구분하며, 자체 설명에 따르면 오디오를 기기에 둡니다.',
          '유의할 점은 투명성과 범위입니다. 비공개 소스이고, 사이트에 제작자가 없으며, 속도와 정확도 수치가 제공자 자체의 것이고, 실시간 전사와 Apple 외 플랫폼이 없습니다. 구매 전에 Mac 무료 구간으로 먼저 써 보십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Whisper Notes 공식 사이트](https://whispernotes.app/) — 기능, 가격, FAQ, 지원 기기.',
          '[Whisper Notes 개인정보 처리방침](https://whispernotes.app/privacy) — 데이터 처리와 오프라인 작동.',
          '[Whisper Notes 변경 내역](https://whispernotes.app/changelog) — Mac 직접 내려받기 버전과 날짜.',
          '[App Store의 Whisper Notes](https://apps.apple.com/kr/app/id6447090616) — 가격, 버전, 판매자, 설명.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[로컬 음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 음성 합성, 음성 인식, 음성 에이전트를 나란히 비교합니다.',
          '[MacWhisper 리뷰](/ko/power-local-llm/macwhisper-review) — 가장 가까운 Mac 전용 전사 앱.',
          '[Whisper.cpp 리뷰](/ko/power-local-llm/whisper-cpp-review) — 많은 로컬 Whisper 앱의 바탕이 되는 오픈 엔진.',
          '[로컬 음성 어시스턴트 만들기](/ko/power-local-llm/build-local-voice-assistant-2026) — 음성 인식을 음성 어시스턴트에 연결하는 방법.',
          '[로컬 LLM 소프트웨어 전체 디렉터리](/ko/directory) — 모든 플랫폼의 로컬 AI 도구를 모은 폭넓은 디렉터리.',
        ],
      },
    },
  },
}
