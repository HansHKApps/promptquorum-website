// Whispy Review: private audio-file transcription for Mac and Windows
// Slug: whispy-review
// Companion to: macwhisper-review, buzz-captions-review, sablate-review, whisper-cpp-review, local-llm-voice-audio-compared
// Facts verified 2026-11-20 against usewhispy.com (home, pricing, download flow, privacy policy last updated 8 June 2026, benchmarks page; read from the site's bundled app code because the pages render with JavaScript)
// and GitHub Releases fzsheik/whispy-releases (v0.1.11, published 2026-11-17: .dmg, .exe, .msi). Maker note from Fawaz Sheik received 2026-11-20 (published attributed to the maker).
// Not hands-on tested. Stale-project warning is OFF (3 days since the last update on 2026-11-20). founderReviewedDate NOT set: the maker supplied a comment, not an approval of the finished text.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-20',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whispy-review-hero-en.webp',
    title: 'Whispy Review: Private Audio Transcription for Mac and Windows',
    seoTitle: 'Whispy Review: Private Local Transcription App',
    intro: "Whispy is a free-to-start transcription app for Mac and Windows: you drop in an interview, lecture or meeting recording and it writes the transcript on your own computer, with optional speaker labels in the paid Pro plan. This review covers what it does, how it installs, what it costs, what its privacy policy says and where it falls short. It rests on the maker's public pages, its release page and a note from the maker, not on hands-on testing.",
    metaDescription: 'Whispy review: Mac and Windows app that, per its maker, transcribes audio on your computer with no cloud mode. Free core, Pro from $8 a month. Not tested.',
    twitterDescription: 'Whispy review: private audio transcription for Mac and Windows with local models and TXT/SRT export. Price, privacy, limits and alternatives.',
    audience: 'Journalists, researchers, students and anyone who transcribes sensitive recordings on a Mac or Windows PC — covers price, install, models, privacy, limits and alternatives.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Whispy review',
    targetKeywords: [
      'whispy review',
      'whispy transcription',
      'private audio transcription mac windows',
      'local transcription app',
      'offline speech to text desktop',
      'transcribe interviews without cloud',
      'speaker labels local transcription',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: "**Whispy is a closed-source transcription app for Mac and Windows that turns audio files into text on your own computer, and its maker says it has no cloud mode at all.** The core app is free; speaker labels and batch processing sit behind a paid Pro plan. The newest release is version 0.1.11 from 17 November 2026. This review rests on the maker's public website, its privacy policy, its release page and a note from the maker, not on hands-on testing.",
    quickAnswerTop: {
      en: {
        question: 'Is Whispy a local transcription app?',
        answer: 'According to its maker and its privacy policy, yes: transcription runs on your Mac or Windows PC and audio is not uploaded to Whispy. The internet is still used to download the app and its speech model, and for the account, payments and diagnostics described in the privacy policy. The code is closed and PromptQuorum did not inspect network traffic, so the claim is the maker\'s own.',
        bullets: [
          'Drop in an audio or video file, pick a fast or an accurate model, and read, copy or export the transcript.',
          'Core transcription, a transcript library, notes and TXT or SRT export are free.',
          'Apple Silicon Macs and 64-bit Windows only; the speech model needs about 2 GB of disk space.',
          'A free in-browser version also exists, using smaller Whisper models.',
          'The project is young: the version number is 0.1.11.',
        ],
        updatedDate: '2026-11-20',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get Whispy', anchor: 'get-it' },
      { label: 'Whispy at a Glance', anchor: 'at-a-glance' },
      { label: 'What Whispy Is', anchor: 'what-is-whispy' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Features', anchor: 'features' },
      { label: 'Models and Hardware', anchor: 'models-hardware' },
      { label: 'Privacy, License and Cost', anchor: 'privacy' },
      { label: 'From the Maker', anchor: 'from-the-maker' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Whispy vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Whispy', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Whispy', anchor: 'who-should-not-use' },
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
            text: 'Whispy is a transcription app for Mac and Windows that, per its maker, turns recordings into text on your own computer instead of a cloud service.',
          },
          {
            type: 'plain-terms',
            text: 'Think of a typist who sits inside your computer: you hand over the recording, and the text comes back without the audio ever travelling to a company server.',
          },
        ],
        items: [
          'Local claim: the maker says there is no cloud mode, and the privacy policy says audio is not uploaded; the account, payments and diagnostics still use online services.',
          'License: proprietary and closed source; the linked GitHub repository only hosts release installers.',
          'Price: a free core app, with speaker detection and batch processing in Pro.',
          'Maintenance: version 0.1.11 was released on 17 November 2026, so the project is actively updated, though still early.',
          'Gaps: no Intel Mac, Linux or mobile app, and no hands-on testing by PromptQuorum.',
        ],
      },
      getItWhispy: {
        id: 'get-it',
        title: 'Get Whispy',
        content: [
          '**Whispy installs like any desktop app, so no terminal is needed.** Download the installer for your system from the official site; the speech model is fetched during setup.',
        ],
        columns: ['Platform', 'Get It'],
        rows: [
          {
            Platform: 'Mac',
            'Get It': '[Download for Mac](https://usewhispy.com/download) — .dmg (about 72 MB), Apple Silicon (M1 or later), macOS 11 or newer',
          },
          {
            Platform: 'Windows',
            'Get It': '[Download for Windows](https://usewhispy.com/download) — .exe installer (about 100 MB), Windows 10 or 11, 64-bit Intel or AMD',
          },
          {
            Platform: 'Browser',
            'Get It': '[Try Whispy in the browser](https://usewhispy.com) — free, no account, smaller Whisper models',
          },
          {
            Platform: 'Release notes',
            'Get It': '[GitHub Releases](https://github.com/fzsheik/whispy-releases/releases)',
          },
          {
            Platform: 'Website',
            'Get It': '[usewhispy.com](https://usewhispy.com)',
          },
          {
            Platform: 'Privacy policy',
            'Get It': '[Whispy privacy policy](https://usewhispy.com/privacy)',
          },
          {
            Platform: 'Source code',
            'Get It': 'Closed source; the GitHub repository hosts release installers only',
          },
        ],
        note: 'The download page lists Apple Silicon Macs and Windows x64 only; no Intel Mac, Linux, iOS or Android build is offered.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Whispy at a Glance',
        columns: ['Attribute', 'Whispy'],
        rows: [
          { Attribute: 'Platform', Whispy: 'Apple Silicon Mac (macOS 11+), Windows 10/11 x64, plus a browser version' },
          { Attribute: 'Price', Whispy: 'Free core; Pro $12/month, $8/month billed yearly ($96), or $79 once' },
          { Attribute: 'License', Whispy: 'Proprietary, closed source' },
          { Attribute: 'Runs', Whispy: 'On your computer; internet for the download, account and payments' },
          { Attribute: 'Languages', Whispy: 'Not counted on the site; the models cover 25 European languages plus Chinese, Japanese and Korean' },
          { Attribute: 'Speaker labels', Whispy: 'Yes, in the Pro plan' },
          { Attribute: 'Real-time transcription', Whispy: 'Not stated; the app works on recorded files' },
          { Attribute: 'Usable on CPU only', Whispy: 'Not stated' },
          { Attribute: 'Local API server', Whispy: 'Not stated' },
        ],
        note: 'Attributes follow the speech-to-text comparison used in the Local LLM Software Directory. A missing statement on the site means unknown, not unsupported.',
      },
      whatIsWhispy: {
        id: 'what-is-whispy',
        title: 'What Whispy Is',
        content: [
          '**Whispy is an audio-file transcriber, not a dictation tool and not a meeting bot.** You give it a recording you already have, such as a voice memo, interview or lecture, and it returns a transcript with timestamps that you can edit, copy or export.',
          'The maker is Fawaz Sheik, who says he built it because the recordings people most need transcribed are often the ones they should not upload anywhere. The site names journalists, researchers, lawyers, therapists and students as its audience.',
          'This review draws on the website, the privacy policy, the benchmarks page, the GitHub release page and the maker\'s note below. It involved no hands-on testing, so accuracy, speed and stability are not rated here.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is an install, a model download and a file drop.** The steps follow the website.',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Download the .dmg for Mac or the .exe for Windows from the [download page](https://usewhispy.com/download); no account is needed for the free core.',
          },
          {
            title: 'Let the speech model download',
            whyItMatters: 'The installer note asks for about 2 GB of free space for the model fetched during setup.',
          },
          {
            title: 'Choose accuracy',
            whyItMatters: 'The site describes a choice between a fast transcription for quick reviews and a highly accurate one for detailed notes; the model choice sits in settings.',
          },
          {
            title: 'Drop your file and export',
            whyItMatters: 'Drag in a voice memo, meeting recording or interview, then copy the text or export it as TXT or SRT.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The feature set centres on turning private recordings into usable text.** Everything below comes from the website and its pricing page.',
        ],
        items: [
          '**Transcript library and notes.** Transcripts and notes are kept on your own drive.',
          '**Exports.** Plain TXT and SRT subtitles are free; you can also send a transcript to ChatGPT, Claude or Gemini with your own instructions, and you choose what gets shared.',
          '**Send from phone.** Scan a QR code and send recordings from your phone over your own Wi-Fi; the free plan takes one file at a time.',
          '**Custom words.** Add names and jargon before transcribing; the site says this works with Whisper and Qwen3-ASR.',
          '**Pro features.** Batch processing, speaker detection and speaker editing (rename or merge speakers), auto-export, and transcription from a YouTube or social media link.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Models and Hardware',
        content: [
          '**The desktop app offers several local speech models.** The benchmarks page names Whisper Large v3 Turbo, Parakeet Ultra (25 European languages) and Qwen3-ASR (Chinese, Japanese, Korean and more), and the site says you pick the model for your language in settings. The browser version uses the smaller Whisper Tiny, Base and Small models.',
          'Speaker detection is described as running locally. The privacy policy names pyannote models; a what\'s-new notice in the app names NVIDIA Nemotron-3, up to 8 speakers, with one free trial use.',
          'The site publishes its own benchmark page, the Whispy Index, which scores three models on the maker\'s own English, European and Asian test sets. PromptQuorum did not reproduce those scores. No RAM requirement is stated; the installer asks for about 2 GB of disk space for the model.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy, License and Cost',
        content: [
          '**The privacy policy says audio, transcripts and notes stay on your device and that Whispy has no server that receives them.** The policy was last updated on 8 June 2026. The only personal data it says Whispy holds is the email address used for an account, needed for Pro, and the subscription status.',
          'The policy also names the services behind that: Supabase for authentication, Polar for payments, PostHog for cookieless analytics and Sentry for error tracking. Some marketing copy says "no accounts" and "no tracking"; read it alongside the policy, which describes the free core without an account and the analytics and diagnostics tools. The code is closed and PromptQuorum did not examine network traffic, so these statements are the maker\'s own.',
          'The free plan includes the desktop app, the browser version, the library and TXT and SRT export, and the pricing page says there is no free trial of Pro. Pro costs $12 a month, $8 a month billed yearly ($96) or $79 once. The site does not say whether prices include tax, so check at checkout.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'From the Maker',
        content: [
          'Fawaz Sheik, the maker of Whispy, sent this note to PromptQuorum. It is the maker\'s own account, not PromptQuorum\'s independent assessment, and PromptQuorum has not run the app.',
          '“I believe people should get the power of AI without being forced to give up their data. We live in an age where your history and personal data are arguably more valuable than you are, and I understand that this data is what trains models. We shouldn\'t be forced to make that compromise when safe, private, local options exist.”',
          '“That\'s why I built Whispy. The recordings people most need transcribed, like interviews, lectures, meetings and calls, are often the ones they shouldn\'t upload anywhere, and most tools ask you to trade privacy for accuracy. Whispy has no cloud mode at all. Your audio never leaves your computer, and the transcription runs on your own Mac or Windows PC.”',
          '“The main advantage is accurate text in your language, with who said what. You can pick from several local models depending on how fast or how accurate you want it, add speaker labels to long multi-speaker recordings, upload a recording from your phone, and export to TXT or SRT. People have already transcribed more than 12,000 hours of audio with it.”',
          '“My goal for Whispy is to build the most accurate private transcription you can get in your own language, then grow from recordings to live meetings and notes, all while staying on your device.”',
        ],
        note: '— Fawaz Sheik, maker of Whispy',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            Benefit: 'Transcription on your computer',
            'What it means in real use': 'Recordings are processed on the machine, with no audio upload to Whispy.',
            'Limitation / caveat': 'Closed source, so the claim cannot be checked; the internet is still used for the download, account and payments.',
          },
          {
            Benefit: 'Free core app',
            'What it means in real use': 'Transcription, library, notes and TXT/SRT export cost nothing.',
            'Limitation / caveat': 'Speaker labels and batch processing need Pro.',
          },
          {
            Benefit: 'Several local models',
            'What it means in real use': 'Pick a faster or a more accurate model, including options for Asian and European languages.',
            'Limitation / caveat': 'No accuracy or speed figures were reproduced here; the maker\'s own benchmarks are unverified.',
          },
          {
            Benefit: 'Send from phone',
            'What it means in real use': 'Move a recording to the computer over your own Wi-Fi.',
            'Limitation / caveat': 'The free plan takes one file at a time.',
          },
          {
            Benefit: 'Lifetime option',
            'What it means in real use': 'A $79 one-time purchase avoids a subscription.',
            'Limitation / caveat': 'No free trial of Pro.',
          },
          {
            Benefit: 'Active development',
            'What it means in real use': 'Version 0.1.11 shipped on 17 November 2026.',
            'Limitation / caveat': 'A 0.1.x number signals an early product; no Intel Mac, Linux or mobile app.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Whispy vs. Alternatives',
        content: [
          'These are the closest file-transcription tools in the directory: a Mac transcription app, a free open-source app for three desktop systems and a subtitle app for Mac and Windows.',
        ],
        columns: ['App', 'Platforms', 'Price and license', 'Role', 'Key difference'],
        rows: [
          {
            App: 'Whispy',
            Platforms: 'Mac, Windows, browser',
            'Price and license': 'Free core, Pro from $8/month or $79 once, proprietary',
            Role: 'Private file transcription',
            'Key difference': 'Local models with Pro speaker labels; closed source',
          },
          {
            App: '[MacWhisper](/power-local-llm/macwhisper-review)',
            Platforms: 'macOS',
            'Price and license': 'Freemium, proprietary',
            Role: 'Mac transcription app',
            'Key difference': 'Mac only and a longer track record',
          },
          {
            App: '[Buzz](/power-local-llm/buzz-captions-review)',
            Platforms: 'Mac, Windows, Linux',
            'Price and license': 'Free, MIT',
            Role: 'Transcription and captions',
            'Key difference': 'Open source and free; adds Linux',
          },
          {
            App: '[Sablate](/power-local-llm/sablate-review)',
            Platforms: 'Windows, Mac',
            'Price and license': 'Freemium, proprietary',
            Role: 'Subtitle workflow',
            'Key difference': 'Adds translation, editing and burn-in',
          },
        ],
        note: "Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each project's own page before deciding.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Whispy',
        items: [
          '**Journalists and researchers.** Interviews stay on the computer, per the maker.',
          '**Students.** A free core handles lectures and seminars.',
          '**Multi-speaker recordings.** Pro adds speaker labels you can rename and merge.',
          '**Buyers who prefer paying once.** A $79 lifetime license sits next to the subscriptions.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Whispy',
        items: [
          '**Intel Mac, Linux, iPhone and Android users.** Only Apple Silicon Mac and Windows x64 builds are offered.',
          '**Anyone who needs auditable software.** The code is closed and the privacy claims cannot be inspected.',
          '**Anyone who needs live transcription.** The app works on recorded files; live meetings are on the maker\'s roadmap only.',
          '**Anyone who wants fully free software.** Buzz is free and open source.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Whispy work offline?',
            a: 'The site says that once you start using it you do not need an internet connection. The first run needs one to download the app and its speech model. PromptQuorum did not test it offline.',
          },
          {
            q: 'Does Whispy have a cloud mode?',
            a: 'The maker says it has no cloud mode at all. One Pro feature, transcribing from a YouTube or social media link, starts from an online address; the site does not explain how that works.',
          },
          {
            q: 'Is there a browser version?',
            a: 'Yes. The free browser version runs smaller Whisper models in your browser tab and needs no account; the maker says it works offline after the first load.',
          },
          {
            q: 'Who makes Whispy?',
            a: 'Fawaz Sheik, per his note to PromptQuorum. The site names no company or location.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Whispy is a good fit if you transcribe recordings on a Mac or Windows PC and want, per the maker, the work done on your own computer, with a free core and an optional Pro plan for speaker labels. It has a recent release, a lifetime option and a browser version for a quick try.',
          'The caveats are maturity and verifiability: a 0.1.x version number, closed code, privacy and accuracy claims that PromptQuorum could not check, and no Intel Mac, Linux or mobile app. Try the free core before you pay for Pro.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Whispy website](https://usewhispy.com) — features and download flow.',
          '[Pricing page](https://usewhispy.com/pricing) — plans and Pro features.',
          '[Privacy policy](https://usewhispy.com/privacy) — data handling, last updated 8 June 2026.',
          '[Benchmarks page](https://usewhispy.com/benchmarks) — the maker\'s own model scores.',
          '[GitHub Releases](https://github.com/fzsheik/whispy-releases/releases) — installer assets and release date of version 0.1.11.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Voice and Speech Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — text-to-speech, speech-to-text and voice agents side by side.',
          '[MacWhisper Review](/power-local-llm/macwhisper-review) — a Mac transcription app.',
          '[Buzz Review](/power-local-llm/buzz-captions-review) — a free open-source transcription and captions app.',
          '[Sablate Review](/power-local-llm/sablate-review) — a local subtitle app for Mac and Windows.',
          '[Whisper.cpp Review](/power-local-llm/whisper-cpp-review) — the open engine behind many local Whisper apps.',
          '[The Complete Local LLM Software Directory](/directory) — a broader directory of local AI tools across platforms.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-20',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whispy-review-hero-de.webp',
    title: 'Whispy Rezension: Private Audio-Transkription für Mac und Windows',
    seoTitle: 'Whispy Rezension: Private Transkription für Mac & Windows',
    intro: 'Whispy ist eine Transkriptions-App für Mac und Windows mit kostenlosem Einstieg: Sie ziehen eine Aufnahme von Interview, Vorlesung oder Besprechung hinein, und die App erstellt das Transkript auf Ihrem eigenen Computer; Sprecherzuordnung gibt es optional im kostenpflichtigen Pro-Tarif. Diese Rezension behandelt, was die App kann, wie sie installiert wird, was sie kostet, was ihre Datenschutzerklärung sagt und wo sie Grenzen hat. Sie stützt sich auf die öffentlichen Seiten des Herstellers, seine Release-Seite und eine Mitteilung des Herstellers, nicht auf einen eigenen Praxistest.',
    metaDescription: 'Whispy Rezension: Mac- und Windows-App, die laut Hersteller lokal transkribiert, ganz ohne Cloud-Modus. Gratis-Kern, Pro ab 8 $/Monat. Nicht getestet.',
    twitterDescription: 'Whispy Rezension: private Audio-Transkription für Mac und Windows mit lokalen Modellen und TXT-/SRT-Export. Preis, Datenschutz, Grenzen und Alternativen.',
    audience: 'Journalisten, Forschende, Studierende und alle, die sensible Aufnahmen auf einem Mac oder Windows-PC transkribieren — behandelt Preis, Installation, Modelle, Datenschutz, Grenzen und Alternativen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Whispy review',
    targetKeywords: [
      'whispy rezension',
      'whispy transkription',
      'private audio-transkription mac windows',
      'lokale transkriptions-app',
      'offline spracherkennung desktop',
      'interviews ohne cloud transkribieren',
      'sprecherzuordnung lokale transkription',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: '**Whispy ist eine nicht quelloffene Transkriptions-App für Mac und Windows, die Audiodateien auf Ihrem eigenen Computer in Text umwandelt; laut Hersteller gibt es überhaupt keinen Cloud-Modus.** Die Kern-App ist kostenlos; Sprecherzuordnung und Stapelverarbeitung liegen hinter einem kostenpflichtigen Pro-Tarif. Die neueste Version ist 0.1.11 vom 17. November 2026. Diese Rezension stützt sich auf Website, Datenschutzerklärung und Release-Seite des Herstellers sowie auf eine Mitteilung des Herstellers, nicht auf einen eigenen Praxistest.',
    quickAnswerTop: {
      de: {
        question: 'Ist Whispy eine lokale Transkriptions-App?',
        answer: 'Laut Hersteller und Datenschutzerklärung ja: Die Transkription läuft auf Ihrem Mac oder Windows-PC, und Audio wird nicht zu Whispy hochgeladen. Das Internet wird dennoch für den Download von App und Sprachmodell sowie für Konto, Zahlungen und Diagnosedaten genutzt, die die Datenschutzerklärung beschreibt. Der Code ist nicht offen, und PromptQuorum hat den Netzwerkverkehr nicht untersucht; die Aussage stammt also vom Hersteller selbst.',
        bullets: [
          'Audio- oder Videodatei hineinziehen, ein schnelles oder ein genaues Modell wählen und das Transkript lesen, kopieren oder exportieren.',
          'Kern-Transkription, Transkript-Bibliothek, Notizen und TXT- oder SRT-Export sind kostenlos.',
          'Nur Apple-Silicon-Macs und 64-Bit-Windows; das Sprachmodell braucht etwa 2 GB Speicherplatz.',
          'Eine kostenlose Version im Browser gibt es ebenfalls, mit kleineren Whisper-Modellen.',
          'Das Projekt ist jung: Die Versionsnummer lautet 0.1.11.',
        ],
        updatedDate: '2026-11-20',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Whispy herunterladen', anchor: 'get-it' },
      { label: 'Whispy im Überblick', anchor: 'at-a-glance' },
      { label: 'Was Whispy ist', anchor: 'what-is-whispy' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Modelle und Hardware', anchor: 'models-hardware' },
      { label: 'Datenschutz, Lizenz und Kosten', anchor: 'privacy' },
      { label: 'Vom Entwickler', anchor: 'from-the-maker' },
      { label: 'Abwägungen: Vorteile und Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Whispy im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen Whispy geeignet ist', anchor: 'who-should-use' },
      { label: 'Für wen Whispy nicht geeignet ist', anchor: 'who-should-not-use' },
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
            text: 'Whispy ist eine Transkriptions-App für Mac und Windows, die Aufnahmen laut Hersteller auf Ihrem eigenen Computer statt in einem Cloud-Dienst in Text umwandelt.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich eine Schreibkraft vor, die in Ihrem Computer sitzt: Sie geben die Aufnahme ab, und der Text kommt zurück, ohne dass das Audio je zu einem Firmenserver wandert.',
          },
        ],
        items: [
          'Lokale Aussage: Laut Hersteller gibt es keinen Cloud-Modus, und die Datenschutzerklärung sagt, Audio werde nicht hochgeladen; Konto, Zahlungen und Diagnosedaten nutzen weiterhin Online-Dienste.',
          'Lizenz: proprietär und nicht quelloffen; das verlinkte GitHub-Repository enthält nur Installationsdateien der Releases.',
          'Preis: eine kostenlose Kern-App, mit Sprecherzuordnung und Stapelverarbeitung in Pro.',
          'Pflege: Version 0.1.11 erschien am 17. November 2026, das Projekt wird also aktiv aktualisiert, ist aber noch jung.',
          'Lücken: keine App für Intel-Macs, Linux oder Mobilgeräte, und kein eigener Praxistest durch PromptQuorum.',
        ],
      },
      getItWhispy: {
        id: 'get-it',
        title: 'Whispy herunterladen',
        content: [
          '**Whispy wird wie jede Desktop-App installiert, ein Terminal ist nicht nötig.** Laden Sie das Installationsprogramm für Ihr System von der offiziellen Website herunter; das Sprachmodell wird bei der Einrichtung nachgeladen.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            Plattform: 'Mac',
            Bezugsquelle: '[Download für Mac](https://usewhispy.com/download) — .dmg (etwa 72 MB), Apple Silicon (M1 oder neuer), macOS 11 oder neuer',
          },
          {
            Plattform: 'Windows',
            Bezugsquelle: '[Download für Windows](https://usewhispy.com/download) — .exe-Installationsprogramm (etwa 100 MB), Windows 10 oder 11, 64-Bit Intel oder AMD',
          },
          {
            Plattform: 'Browser',
            Bezugsquelle: '[Whispy im Browser ausprobieren](https://usewhispy.com) — kostenlos, ohne Konto, kleinere Whisper-Modelle',
          },
          {
            Plattform: 'Versionshinweise',
            Bezugsquelle: '[GitHub Releases](https://github.com/fzsheik/whispy-releases/releases)',
          },
          {
            Plattform: 'Website',
            Bezugsquelle: '[usewhispy.com](https://usewhispy.com)',
          },
          {
            Plattform: 'Datenschutzerklärung',
            Bezugsquelle: '[Datenschutzerklärung von Whispy](https://usewhispy.com/privacy)',
          },
          {
            Plattform: 'Quellcode',
            Bezugsquelle: 'Nicht quelloffen; das GitHub-Repository enthält nur Installationsdateien der Releases',
          },
        ],
        note: 'Die Download-Seite nennt nur Apple-Silicon-Macs und Windows x64; ein Build für Intel-Macs, Linux, iOS oder Android wird nicht angeboten.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Whispy im Überblick',
        columns: ['Merkmal', 'Whispy'],
        rows: [
          { Merkmal: 'Plattform', Whispy: 'Apple-Silicon-Mac (macOS 11+), Windows 10/11 x64 sowie eine Browser-Version' },
          { Merkmal: 'Preis', Whispy: 'Kostenloser Kern; Pro 12 $/Monat, 8 $/Monat bei jährlicher Zahlung (96 $) oder einmalig 79 $' },
          { Merkmal: 'Lizenz', Whispy: 'Proprietär, nicht quelloffen' },
          { Merkmal: 'Ausführung', Whispy: 'Auf Ihrem Computer; Internet für Download, Konto und Zahlungen' },
          { Merkmal: 'Sprachen', Whispy: 'Auf der Website nicht beziffert; die Modelle decken 25 europäische Sprachen sowie Chinesisch, Japanisch und Koreanisch ab' },
          { Merkmal: 'Sprecherzuordnung', Whispy: 'Ja, im Pro-Tarif' },
          { Merkmal: 'Echtzeit-Transkription', Whispy: 'Nicht angegeben; die App arbeitet mit aufgezeichneten Dateien' },
          { Merkmal: 'Nur mit CPU nutzbar', Whispy: 'Nicht angegeben' },
          { Merkmal: 'Lokaler API-Server', Whispy: 'Nicht angegeben' },
        ],
        note: 'Die Merkmale folgen dem Spracherkennungs-Vergleich im Local LLM Software Directory. Eine fehlende Angabe auf der Website bedeutet unbekannt, nicht nicht unterstützt.',
      },
      whatIsWhispy: {
        id: 'what-is-whispy',
        title: 'Was Whispy ist',
        content: [
          '**Whispy ist ein Transkriptionswerkzeug für Audiodateien, kein Diktier-Tool und kein Meeting-Bot.** Sie geben ihm eine Aufnahme, die Sie schon haben, etwa eine Sprachnotiz, ein Interview oder eine Vorlesung, und erhalten ein Transkript mit Zeitstempeln, das Sie bearbeiten, kopieren oder exportieren können.',
          'Hersteller ist Fawaz Sheik, der nach eigener Aussage die App gebaut hat, weil die Aufnahmen, die Menschen am dringendsten transkribieren müssen, oft die sind, die sie nirgends hochladen sollten. Die Website nennt Journalisten, Forschende, Anwälte, Therapeuten und Studierende als Zielgruppe.',
          'Diese Rezension stützt sich auf Website, Datenschutzerklärung, die Benchmark-Seite, die GitHub-Release-Seite und die untenstehende Mitteilung des Herstellers. Es gab keinen eigenen Praxistest, daher werden Genauigkeit, Geschwindigkeit und Stabilität hier nicht bewertet.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus Installation, Modell-Download und dem Ablegen einer Datei.** Die Schritte folgen der Website.',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Laden Sie auf der [Download-Seite](https://usewhispy.com/download) die .dmg für Mac oder die .exe für Windows herunter; für den kostenlosen Kern ist kein Konto nötig.',
          },
          {
            title: 'Sprachmodell herunterladen lassen',
            whyItMatters: 'Der Hinweis im Installationsprogramm nennt etwa 2 GB freien Speicherplatz für das Modell, das bei der Einrichtung geladen wird.',
          },
          {
            title: 'Genauigkeit wählen',
            whyItMatters: 'Die Website beschreibt die Wahl zwischen einer schnellen Transkription für einen raschen Überblick und einer sehr genauen für detaillierte Notizen; die Modellauswahl liegt in den Einstellungen.',
          },
          {
            title: 'Datei ablegen und exportieren',
            whyItMatters: 'Ziehen Sie eine Sprachnotiz, eine Besprechungsaufnahme oder ein Interview hinein, kopieren Sie dann den Text oder exportieren Sie ihn als TXT oder SRT.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Der Funktionsumfang konzentriert sich darauf, private Aufnahmen in nutzbaren Text zu verwandeln.** Alles Folgende stammt von der Website und ihrer Preisseite.',
        ],
        items: [
          '**Transkript-Bibliothek und Notizen.** Transkripte und Notizen liegen auf Ihrer eigenen Festplatte.',
          '**Exporte.** Reines TXT und SRT-Untertitel sind kostenlos; außerdem können Sie ein Transkript mit eigenen Anweisungen an ChatGPT, Claude oder Gemini senden, wobei Sie entscheiden, was geteilt wird.',
          '**Vom Handy senden.** Per QR-Code senden Sie Aufnahmen vom Handy über Ihr eigenes WLAN; der kostenlose Tarif nimmt jeweils eine Datei an.',
          '**Eigene Wörter.** Ergänzen Sie Namen und Fachbegriffe vor der Transkription; laut Website funktioniert das mit Whisper und Qwen3-ASR.',
          '**Pro-Funktionen.** Stapelverarbeitung, Sprecherzuordnung und Sprecherbearbeitung (Sprecher umbenennen oder zusammenführen), automatischer Export und Transkription über einen YouTube- oder Social-Media-Link.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelle und Hardware',
        content: [
          '**Die Desktop-App bietet mehrere lokale Sprachmodelle.** Die Benchmark-Seite nennt Whisper Large v3 Turbo, Parakeet Ultra (25 europäische Sprachen) und Qwen3-ASR (Chinesisch, Japanisch, Koreanisch und mehr), und laut Website wählen Sie das Modell für Ihre Sprache in den Einstellungen. Die Browser-Version nutzt die kleineren Whisper-Modelle Tiny, Base und Small.',
          'Die Sprecherzuordnung läuft laut Beschreibung lokal. Die Datenschutzerklärung nennt pyannote-Modelle; ein Neuigkeiten-Hinweis in der App nennt NVIDIA Nemotron-3, bis zu 8 Sprecher, mit einer kostenlosen Testnutzung.',
          'Die Website veröffentlicht eine eigene Benchmark-Seite, den Whispy Index, der drei Modelle auf den eigenen englischen, europäischen und asiatischen Testsätzen des Herstellers bewertet. PromptQuorum hat diese Werte nicht nachgestellt. Ein RAM-Bedarf wird nicht angegeben; das Installationsprogramm nennt etwa 2 GB Speicherplatz für das Modell.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz, Lizenz und Kosten',
        content: [
          '**Die Datenschutzerklärung sagt, Audio, Transkripte und Notizen blieben auf Ihrem Gerät und Whispy habe keinen Server, der sie empfängt.** Die Erklärung wurde zuletzt am 8. Juni 2026 aktualisiert. Als einzige personenbezogene Daten nennt sie die E-Mail-Adresse für ein Konto, das für Pro nötig ist, sowie den Abo-Status.',
          'Die Erklärung nennt auch die Dienste dahinter: Supabase für die Authentifizierung, Polar für Zahlungen, PostHog für cookiefreie Analyse und Sentry für die Fehlerverfolgung. Manche Werbetexte sagen „keine Konten“ und „kein Tracking“; lesen Sie sie zusammen mit der Erklärung, die den kostenlosen Kern ohne Konto beschreibt und die Analyse- und Diagnosewerkzeuge nennt. Der Code ist nicht offen, und PromptQuorum hat den Netzwerkverkehr nicht untersucht; diese Aussagen stammen also vom Hersteller selbst.',
          'Der kostenlose Tarif umfasst die Desktop-App, die Browser-Version, die Bibliothek und den TXT- und SRT-Export; laut Preisseite gibt es keine kostenlose Testphase für Pro. Pro kostet 12 $ im Monat, 8 $ im Monat bei jährlicher Zahlung (96 $) oder einmalig 79 $. Die Website sagt nicht, ob die Preise Steuern enthalten; prüfen Sie das an der Kasse.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'Vom Entwickler',
        content: [
          'Fawaz Sheik, der Entwickler von Whispy, hat PromptQuorum diese Mitteilung geschickt. Es ist die eigene Darstellung des Herstellers, keine unabhängige Einschätzung von PromptQuorum, und PromptQuorum hat die App nicht ausgeführt.',
          '„Ich glaube, dass Menschen die Leistungsfähigkeit von KI nutzen können sollten, ohne ihre Daten preisgeben zu müssen. Wir leben in einer Zeit, in der Ihr Verlauf und Ihre persönlichen Daten wohl wertvoller sind als Sie selbst, und mir ist klar, dass genau diese Daten Modelle trainieren. Wir sollten nicht gezwungen sein, diesen Kompromiss einzugehen, wenn es sichere, private, lokale Alternativen gibt.“',
          '„Deshalb habe ich Whispy gebaut. Die Aufnahmen, die Menschen am dringendsten transkribieren müssen, wie Interviews, Vorlesungen, Besprechungen und Anrufe, sind oft diejenigen, die sie nirgends hochladen sollten, und die meisten Werkzeuge verlangen, Privatsphäre gegen Genauigkeit einzutauschen. Whispy hat überhaupt keinen Cloud-Modus. Ihr Audio verlässt Ihren Computer nie, und die Transkription läuft auf Ihrem eigenen Mac oder Windows-PC.“',
          '„Der wichtigste Vorteil ist ein genauer Text in Ihrer Sprache, mit Angabe, wer was gesagt hat. Sie können unter mehreren lokalen Modellen wählen, je nachdem, wie schnell oder wie genau es sein soll, bei langen Aufnahmen mit mehreren Sprechern Sprecherzuordnungen hinzufügen, eine Aufnahme von Ihrem Handy hochladen und als TXT oder SRT exportieren. Menschen haben damit bereits mehr als 12.000 Stunden Audio transkribiert.“',
          '„Mein Ziel für Whispy ist die genaueste private Transkription, die Sie in Ihrer eigenen Sprache bekommen können, und von Aufnahmen aus weiterzuwachsen zu Live-Besprechungen und Notizen, immer auf Ihrem Gerät.“',
        ],
        note: '— Fawaz Sheik, Entwickler von Whispy',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile und Einschränkungen',
        columns: ['Vorteil', 'Was das im Alltag bedeutet', 'Einschränkung / Hinweis'],
        rows: [
          {
            Vorteil: 'Transkription auf Ihrem Computer',
            'Was das im Alltag bedeutet': 'Aufnahmen werden auf dem Rechner verarbeitet, ohne Audio-Upload zu Whispy.',
            'Einschränkung / Hinweis': 'Nicht quelloffen, die Aussage lässt sich nicht prüfen; für Download, Konto und Zahlungen wird weiterhin das Internet genutzt.',
          },
          {
            Vorteil: 'Kostenlose Kern-App',
            'Was das im Alltag bedeutet': 'Transkription, Bibliothek, Notizen und TXT-/SRT-Export kosten nichts.',
            'Einschränkung / Hinweis': 'Sprecherzuordnung und Stapelverarbeitung brauchen Pro.',
          },
          {
            Vorteil: 'Mehrere lokale Modelle',
            'Was das im Alltag bedeutet': 'Ein schnelleres oder genaueres Modell wählen, auch mit Optionen für asiatische und europäische Sprachen.',
            'Einschränkung / Hinweis': 'Genauigkeits- oder Geschwindigkeitswerte wurden hier nicht nachgestellt; die eigenen Benchmarks des Herstellers sind ungeprüft.',
          },
          {
            Vorteil: 'Vom Handy senden',
            'Was das im Alltag bedeutet': 'Eine Aufnahme über das eigene WLAN auf den Computer bringen.',
            'Einschränkung / Hinweis': 'Der kostenlose Tarif nimmt jeweils eine Datei an.',
          },
          {
            Vorteil: 'Lifetime-Option',
            'Was das im Alltag bedeutet': 'Ein Einmalkauf für 79 $ erspart ein Abo.',
            'Einschränkung / Hinweis': 'Keine kostenlose Testphase für Pro.',
          },
          {
            Vorteil: 'Aktive Entwicklung',
            'Was das im Alltag bedeutet': 'Version 0.1.11 erschien am 17. November 2026.',
            'Einschränkung / Hinweis': 'Eine Nummer 0.1.x deutet auf ein frühes Produkt hin; keine App für Intel-Macs, Linux oder Mobilgeräte.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Whispy im Vergleich zu Alternativen',
        content: [
          'Das sind die ähnlichsten Werkzeuge zur Dateitranskription im Verzeichnis: eine Mac-Transkriptions-App, eine kostenlose Open-Source-App für drei Desktop-Systeme und eine Untertitel-App für Mac und Windows.',
        ],
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Rolle', 'Wichtigster Unterschied'],
        rows: [
          {
            App: 'Whispy',
            Plattformen: 'Mac, Windows, Browser',
            'Preis und Lizenz': 'Kostenloser Kern, Pro ab 8 $/Monat oder 79 $ einmalig, proprietär',
            Rolle: 'Private Dateitranskription',
            'Wichtigster Unterschied': 'Lokale Modelle mit Sprecherzuordnung in Pro; nicht quelloffen',
          },
          {
            App: '[MacWhisper](/de/power-local-llm/macwhisper-review)',
            Plattformen: 'macOS',
            'Preis und Lizenz': 'Freemium, proprietär',
            Rolle: 'Mac-Transkriptions-App',
            'Wichtigster Unterschied': 'Nur Mac und mit längerer Laufzeit am Markt',
          },
          {
            App: '[Buzz](/de/power-local-llm/buzz-captions-review)',
            Plattformen: 'Mac, Windows, Linux',
            'Preis und Lizenz': 'Kostenlos, MIT',
            Rolle: 'Transkription und Untertitel',
            'Wichtigster Unterschied': 'Quelloffen und kostenlos; zusätzlich Linux',
          },
          {
            App: '[Sablate](/de/power-local-llm/sablate-review)',
            Plattformen: 'Windows, Mac',
            'Preis und Lizenz': 'Freemium, proprietär',
            Rolle: 'Untertitel-Workflow',
            'Wichtigster Unterschied': 'Ergänzt Übersetzung, Bearbeitung und Einbrennen',
          },
        ],
        note: 'Angaben zu Plattformen, Preisen und Funktionen von Drittanbieter-Apps ändern sich häufig. Prüfen Sie die aktuellen Details auf der Seite des jeweiligen Projekts, bevor Sie entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen Whispy geeignet ist',
        items: [
          '**Journalisten und Forschende.** Interviews bleiben laut Hersteller auf dem Computer.',
          '**Studierende.** Ein kostenloser Kern bewältigt Vorlesungen und Seminare.',
          '**Aufnahmen mit mehreren Sprechern.** Pro ergänzt Sprecherzuordnungen, die Sie umbenennen und zusammenführen können.',
          '**Käufer, die lieber einmal zahlen.** Neben den Abos gibt es eine Lifetime-Lizenz für 79 $.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen Whispy nicht geeignet ist',
        items: [
          '**Nutzer von Intel-Macs, Linux, iPhone und Android.** Es gibt nur Builds für Apple-Silicon-Macs und Windows x64.',
          '**Alle, die prüfbare Software brauchen.** Der Code ist nicht offen, und die Datenschutzaussagen lassen sich nicht einsehen.',
          '**Alle, die Live-Transkription brauchen.** Die App arbeitet mit aufgezeichneten Dateien; Live-Besprechungen stehen nur auf der Roadmap des Herstellers.',
          '**Alle, die vollständig kostenlose Software wollen.** Buzz ist kostenlos und quelloffen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Funktioniert Whispy offline?',
            a: 'Laut Website brauchen Sie nach dem Start keine Internetverbindung mehr. Der erste Start benötigt eine, um die App und ihr Sprachmodell herunterzuladen. PromptQuorum hat es nicht offline getestet.',
          },
          {
            q: 'Hat Whispy einen Cloud-Modus?',
            a: 'Laut Hersteller gibt es überhaupt keinen Cloud-Modus. Eine Pro-Funktion, die Transkription über einen YouTube- oder Social-Media-Link, geht von einer Online-Adresse aus; die Website erklärt nicht, wie das funktioniert.',
          },
          {
            q: 'Gibt es eine Browser-Version?',
            a: 'Ja. Die kostenlose Browser-Version führt kleinere Whisper-Modelle in Ihrem Browser-Tab aus und braucht kein Konto; laut Hersteller funktioniert sie nach dem ersten Laden offline.',
          },
          {
            q: 'Wer entwickelt Whispy?',
            a: 'Fawaz Sheik, laut seiner Mitteilung an PromptQuorum. Die Website nennt weder ein Unternehmen noch einen Standort.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'Whispy passt, wenn Sie Aufnahmen auf einem Mac oder Windows-PC transkribieren und die Arbeit laut Hersteller auf Ihrem eigenen Computer erledigt sehen möchten, mit einem kostenlosen Kern und einem optionalen Pro-Tarif für Sprecherzuordnung. Es gibt ein aktuelles Release, eine Lifetime-Option und eine Browser-Version zum schnellen Ausprobieren.',
          'Die Einschränkungen betreffen Reife und Überprüfbarkeit: eine Versionsnummer 0.1.x, nicht offener Code, Datenschutz- und Genauigkeitsaussagen, die PromptQuorum nicht prüfen konnte, und keine App für Intel-Macs, Linux oder Mobilgeräte. Probieren Sie den kostenlosen Kern aus, bevor Sie für Pro zahlen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von Whispy](https://usewhispy.com) — Funktionen und Download-Ablauf.',
          '[Preisseite](https://usewhispy.com/pricing) — Tarife und Pro-Funktionen.',
          '[Datenschutzerklärung](https://usewhispy.com/privacy) — Umgang mit Daten, zuletzt aktualisiert am 8. Juni 2026.',
          '[Benchmark-Seite](https://usewhispy.com/benchmarks) — die eigenen Modellwerte des Herstellers.',
          '[GitHub Releases](https://github.com/fzsheik/whispy-releases/releases) — Installationsdateien und Veröffentlichungsdatum von Version 0.1.11.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokale Sprach- und Audio-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — Text-to-Speech, Spracherkennung und Sprachassistenten nebeneinander.',
          '[MacWhisper Rezension](/de/power-local-llm/macwhisper-review) — eine Mac-Transkriptions-App.',
          '[Buzz Rezension](/de/power-local-llm/buzz-captions-review) — eine kostenlose Open-Source-App für Transkription und Untertitel.',
          '[Sablate Rezension](/de/power-local-llm/sablate-review) — eine lokale Untertitel-App für Mac und Windows.',
          '[Whisper.cpp Rezension](/de/power-local-llm/whisper-cpp-review) — die offene Engine hinter vielen lokalen Whisper-Apps.',
          '[Das vollständige Local LLM Software Directory](/de/directory) — ein breiteres Verzeichnis lokaler KI-Werkzeuge über Plattformen hinweg.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-20',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whispy-review-hero-fr.webp',
    title: 'Test de Whispy : transcription audio privée pour Mac et Windows',
    seoTitle: 'Test de Whispy : transcription locale pour Mac et Windows',
    intro: "Whispy est une application de transcription pour Mac et Windows, gratuite pour démarrer : vous déposez un enregistrement d'entretien, de cours ou de réunion, et elle rédige la transcription sur votre propre ordinateur, avec l'identification des locuteurs en option dans l'offre payante Pro. Ce test présente ce que fait l'application, comment elle s'installe, ce qu'elle coûte, ce que dit sa politique de confidentialité et où elle atteint ses limites. Il s'appuie sur les pages publiques de l'éditeur, sa page de versions et une note de l'éditeur, pas sur un essai pratique.",
    metaDescription: "Test de Whispy : application Mac et Windows qui, selon l'éditeur, transcrit en local, sans mode cloud. Base gratuite, Pro dès 8 $/mois. Non testée.",
    twitterDescription: "Test de Whispy : transcription audio privée pour Mac et Windows avec des modèles locaux et export TXT/SRT. Prix, confidentialité, limites et alternatives.",
    audience: "Journalistes, chercheurs, étudiants et toute personne qui transcrit des enregistrements sensibles sur un Mac ou un PC Windows — couvre le prix, l'installation, les modèles, la confidentialité, les limites et les alternatives.",
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Whispy review',
    targetKeywords: [
      'test whispy',
      'whispy transcription',
      'transcription audio privée mac windows',
      'application de transcription locale',
      'reconnaissance vocale hors ligne bureau',
      'transcrire des entretiens sans cloud',
      'identification des locuteurs transcription locale',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: "**Whispy est une application de transcription propriétaire pour Mac et Windows qui transforme des fichiers audio en texte sur votre propre ordinateur ; selon son éditeur, elle n'a aucun mode cloud.** L'application de base est gratuite ; l'identification des locuteurs et le traitement par lots sont réservés à l'offre payante Pro. La version la plus récente est la 0.1.11, du 17 novembre 2026. Ce test s'appuie sur le site public de l'éditeur, sa politique de confidentialité, sa page de versions et une note de l'éditeur, pas sur un essai pratique.",
    quickAnswerTop: {
      fr: {
        question: 'Whispy est-elle une application de transcription locale ?',
        answer: "Selon son éditeur et sa politique de confidentialité, oui : la transcription s'exécute sur votre Mac ou votre PC Windows et l'audio n'est pas envoyé à Whispy. Internet reste utilisé pour télécharger l'application et son modèle vocal, ainsi que pour le compte, les paiements et les diagnostics décrits dans la politique de confidentialité. Le code est fermé et PromptQuorum n'a pas inspecté le trafic réseau : l'affirmation est celle de l'éditeur.",
        bullets: [
          "Déposez un fichier audio ou vidéo, choisissez un modèle rapide ou précis, puis lisez, copiez ou exportez la transcription.",
          "La transcription de base, une bibliothèque de transcriptions, des notes et l'export TXT ou SRT sont gratuits.",
          "Mac Apple Silicon et Windows 64 bits uniquement ; le modèle vocal demande environ 2 Go d'espace disque.",
          "Une version gratuite dans le navigateur existe aussi, avec des modèles Whisper plus petits.",
          "Le projet est jeune : le numéro de version est 0.1.11.",
        ],
        updatedDate: '2026-11-20',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir Whispy', anchor: 'get-it' },
      { label: "Whispy en un coup d'œil", anchor: 'at-a-glance' },
      { label: "Ce qu'est Whispy", anchor: 'what-is-whispy' },
      { label: 'Premiers pas', anchor: 'how-to-get-started' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Modèles et matériel', anchor: 'models-hardware' },
      { label: 'Confidentialité, licence et coût', anchor: 'privacy' },
      { label: 'Le mot du développeur', anchor: 'from-the-maker' },
      { label: 'Compromis : avantages et limites', anchor: 'tradeoffs' },
      { label: 'Whispy face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Pour qui Whispy est adaptée', anchor: 'who-should-use' },
      { label: "Pour qui Whispy n'est pas adaptée", anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures associées', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: "Whispy est une application de transcription pour Mac et Windows qui, selon son éditeur, transforme les enregistrements en texte sur votre propre ordinateur plutôt que dans un service cloud.",
          },
          {
            type: 'plain-terms',
            text: "Imaginez un dactylo installé dans votre ordinateur : vous lui remettez l'enregistrement, et le texte revient sans que l'audio ne voyage jamais vers le serveur d'une entreprise.",
          },
        ],
        items: [
          "Affirmation locale : selon l'éditeur, il n'y a pas de mode cloud, et la politique de confidentialité indique que l'audio n'est pas envoyé ; le compte, les paiements et les diagnostics utilisent tout de même des services en ligne.",
          "Licence : propriétaire et code fermé ; le dépôt GitHub lié ne contient que les installateurs des versions.",
          "Prix : une application de base gratuite, avec l'identification des locuteurs et le traitement par lots dans Pro.",
          "Maintenance : la version 0.1.11 est sortie le 17 novembre 2026, le projet est donc mis à jour activement, mais encore jeune.",
          "Lacunes : pas d'application pour Mac Intel, Linux ni mobile, et aucun essai pratique par PromptQuorum.",
        ],
      },
      getItWhispy: {
        id: 'get-it',
        title: 'Obtenir Whispy',
        content: [
          "**Whispy s'installe comme n'importe quelle application de bureau, aucun terminal n'est nécessaire.** Téléchargez l'installateur de votre système sur le site officiel ; le modèle vocal est récupéré pendant l'installation.",
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            Plateforme: 'Mac',
            'Où la trouver': '[Télécharger pour Mac](https://usewhispy.com/download) — .dmg (environ 72 Mo), Apple Silicon (M1 ou ultérieur), macOS 11 ou ultérieur',
          },
          {
            Plateforme: 'Windows',
            'Où la trouver': "[Télécharger pour Windows](https://usewhispy.com/download) — installateur .exe (environ 100 Mo), Windows 10 ou 11, Intel ou AMD 64 bits",
          },
          {
            Plateforme: 'Navigateur',
            'Où la trouver': '[Essayer Whispy dans le navigateur](https://usewhispy.com) — gratuit, sans compte, modèles Whisper plus petits',
          },
          {
            Plateforme: 'Notes de version',
            'Où la trouver': '[Versions GitHub](https://github.com/fzsheik/whispy-releases/releases)',
          },
          {
            Plateforme: 'Site web',
            'Où la trouver': '[usewhispy.com](https://usewhispy.com)',
          },
          {
            Plateforme: 'Politique de confidentialité',
            'Où la trouver': '[Politique de confidentialité de Whispy](https://usewhispy.com/privacy)',
          },
          {
            Plateforme: 'Code source',
            'Où la trouver': "Code fermé ; le dépôt GitHub ne contient que les installateurs des versions",
          },
        ],
        note: "La page de téléchargement ne cite que les Mac Apple Silicon et Windows x64 ; aucune version Mac Intel, Linux, iOS ni Android n'est proposée.",
      },
      atAGlance: {
        id: 'at-a-glance',
        title: "Whispy en un coup d'œil",
        columns: ['Attribut', 'Whispy'],
        rows: [
          { Attribut: 'Plateforme', Whispy: 'Mac Apple Silicon (macOS 11+), Windows 10/11 x64, plus une version navigateur' },
          { Attribut: 'Prix', Whispy: 'Base gratuite ; Pro 12 $/mois, 8 $/mois facturés à l\'année (96 $), ou 79 $ en une fois' },
          { Attribut: 'Licence', Whispy: 'Propriétaire, code fermé' },
          { Attribut: 'Exécution', Whispy: 'Sur votre ordinateur ; Internet pour le téléchargement, le compte et les paiements' },
          { Attribut: 'Langues', Whispy: "Non chiffré sur le site ; les modèles couvrent 25 langues européennes ainsi que le chinois, le japonais et le coréen" },
          { Attribut: 'Étiquettes de locuteurs', Whispy: 'Oui, dans l\'offre Pro' },
          { Attribut: 'Transcription en temps réel', Whispy: "Non précisé ; l'application travaille sur des fichiers enregistrés" },
          { Attribut: 'Utilisable sur CPU seul', Whispy: 'Non précisé' },
          { Attribut: 'Serveur API local', Whispy: 'Non précisé' },
        ],
        note: "Les attributs suivent la comparaison de reconnaissance vocale utilisée dans le Répertoire des logiciels de LLM locaux. Une absence de mention sur le site signifie « inconnu », pas « non pris en charge ».",
      },
      whatIsWhispy: {
        id: 'what-is-whispy',
        title: "Ce qu'est Whispy",
        content: [
          "**Whispy est un outil de transcription de fichiers audio, pas un outil de dictée ni un bot de réunion.** Vous lui donnez un enregistrement que vous avez déjà, comme une note vocale, un entretien ou un cours, et il renvoie une transcription horodatée que vous pouvez modifier, copier ou exporter.",
          "L'éditeur est Fawaz Sheik, qui dit l'avoir créée parce que les enregistrements que l'on a le plus besoin de transcrire sont souvent ceux qu'on ne devrait téléverser nulle part. Le site cite les journalistes, les chercheurs, les avocats, les thérapeutes et les étudiants comme public.",
          "Ce test s'appuie sur le site, la politique de confidentialité, la page des benchmarks, la page de versions GitHub et la note de l'éditeur ci-dessous. Il n'a donné lieu à aucun essai pratique : la précision, la vitesse et la stabilité ne sont donc pas évaluées ici.",
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Premiers pas',
        content: [
          "**La mise en route tient en une installation, un téléchargement de modèle et un fichier déposé.** Les étapes suivent le site.",
        ],
        numberedItems: [
          {
            title: "Installer l'application",
            whyItMatters: "Téléchargez le .dmg pour Mac ou le .exe pour Windows depuis la [page de téléchargement](https://usewhispy.com/download) ; aucun compte n'est nécessaire pour la base gratuite.",
          },
          {
            title: 'Laisser le modèle vocal se télécharger',
            whyItMatters: "La note de l'installateur demande environ 2 Go d'espace libre pour le modèle récupéré pendant l'installation.",
          },
          {
            title: 'Choisir la précision',
            whyItMatters: "Le site décrit un choix entre une transcription rapide pour un survol et une transcription très précise pour des notes détaillées ; le choix du modèle se trouve dans les réglages.",
          },
          {
            title: 'Déposer le fichier et exporter',
            whyItMatters: "Glissez une note vocale, un enregistrement de réunion ou un entretien, puis copiez le texte ou exportez-le en TXT ou SRT.",
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          "**L'ensemble des fonctions vise à transformer des enregistrements privés en texte exploitable.** Tout ce qui suit provient du site et de sa page de tarifs.",
        ],
        items: [
          "**Bibliothèque de transcriptions et notes.** Les transcriptions et les notes sont conservées sur votre propre disque.",
          "**Exports.** Le TXT brut et les sous-titres SRT sont gratuits ; vous pouvez aussi envoyer une transcription à ChatGPT, Claude ou Gemini avec vos propres instructions, et vous choisissez ce qui est partagé.",
          "**Envoi depuis le téléphone.** Scannez un code QR et envoyez des enregistrements depuis votre téléphone via votre propre Wi-Fi ; l'offre gratuite accepte un fichier à la fois.",
          "**Mots personnalisés.** Ajoutez des noms et du jargon avant de transcrire ; selon le site, cela fonctionne avec Whisper et Qwen3-ASR.",
          "**Fonctions Pro.** Traitement par lots, identification des locuteurs et édition des locuteurs (renommer ou fusionner), export automatique, et transcription à partir d'un lien YouTube ou de réseau social.",
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modèles et matériel',
        content: [
          "**L'application de bureau propose plusieurs modèles vocaux locaux.** La page des benchmarks cite Whisper Large v3 Turbo, Parakeet Ultra (25 langues européennes) et Qwen3-ASR (chinois, japonais, coréen et plus), et le site indique que l'on choisit le modèle de sa langue dans les réglages. La version navigateur utilise les modèles Whisper plus petits Tiny, Base et Small.",
          "L'identification des locuteurs est décrite comme s'exécutant localement. La politique de confidentialité cite des modèles pyannote ; une notice de nouveautés dans l'application cite NVIDIA Nemotron-3, jusqu'à 8 locuteurs, avec un essai gratuit.",
          "Le site publie sa propre page de benchmarks, le Whispy Index, qui note trois modèles sur les jeux de test anglais, européens et asiatiques de l'éditeur. PromptQuorum n'a pas reproduit ces scores. Aucune exigence de RAM n'est indiquée ; l'installateur demande environ 2 Go d'espace disque pour le modèle.",
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité, licence et coût',
        content: [
          "**La politique de confidentialité indique que l'audio, les transcriptions et les notes restent sur votre appareil et que Whispy n'a aucun serveur qui les reçoive.** La politique a été mise à jour pour la dernière fois le 8 juin 2026. Les seules données personnelles qu'elle dit détenir sont l'adresse e-mail d'un compte, nécessaire pour Pro, et le statut d'abonnement.",
          "La politique cite aussi les services qui s'y rattachent : Supabase pour l'authentification, Polar pour les paiements, PostHog pour des analyses sans cookies et Sentry pour le suivi des erreurs. Certains textes marketing disent « pas de comptes » et « pas de suivi » ; lisez-les avec la politique, qui décrit la base gratuite sans compte et cite les outils d'analyse et de diagnostic. Le code est fermé et PromptQuorum n'a pas examiné le trafic réseau : ces déclarations sont celles de l'éditeur.",
          "L'offre gratuite comprend l'application de bureau, la version navigateur, la bibliothèque et l'export TXT et SRT ; la page de tarifs précise qu'il n'y a pas d'essai gratuit de Pro. Pro coûte 12 $ par mois, 8 $ par mois facturés à l'année (96 $) ou 79 $ en une fois. Le site n'indique pas si les prix incluent les taxes : vérifiez au moment du paiement.",
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'Le mot du développeur',
        content: [
          "Fawaz Sheik, créateur de Whispy, a envoyé cette note à PromptQuorum. C'est le récit de l'éditeur lui-même, pas une évaluation indépendante de PromptQuorum, et PromptQuorum n'a pas fait fonctionner l'application.",
          "« Je crois que les gens devraient pouvoir profiter de la puissance de l'IA sans être forcés d'abandonner leurs données. Nous vivons à une époque où votre historique et vos données personnelles valent sans doute plus que vous, et je comprends que ces données servent à entraîner les modèles. Nous ne devrions pas être forcés d'accepter ce compromis alors que des solutions sûres, privées et locales existent. »",
          "« C'est pour cela que j'ai créé Whispy. Les enregistrements que l'on a le plus besoin de transcrire, comme les entretiens, les cours, les réunions et les appels, sont souvent ceux qu'on ne devrait téléverser nulle part, et la plupart des outils demandent d'échanger la confidentialité contre la précision. Whispy n'a aucun mode cloud. Votre audio ne quitte jamais votre ordinateur, et la transcription s'exécute sur votre propre Mac ou PC Windows. »",
          "« Le principal avantage est un texte précis dans votre langue, avec l'indication de qui a dit quoi. Vous pouvez choisir parmi plusieurs modèles locaux selon la vitesse ou la précision voulues, ajouter des étiquettes de locuteurs aux longs enregistrements à plusieurs voix, envoyer un enregistrement depuis votre téléphone et exporter en TXT ou SRT. Des utilisateurs ont déjà transcrit plus de 12 000 heures d'audio avec l'application. »",
          "« Mon objectif pour Whispy est de proposer la transcription privée la plus précise possible dans votre propre langue, puis de passer des enregistrements aux réunions en direct et aux notes, toujours sur votre appareil. »",
        ],
        note: '— Fawaz Sheik, créateur de Whispy',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: ['Avantage', "Ce que cela donne à l'usage", 'Limite / réserve'],
        rows: [
          {
            Avantage: 'Transcription sur votre ordinateur',
            "Ce que cela donne à l'usage": "Les enregistrements sont traités sur la machine, sans envoi d'audio à Whispy.",
            'Limite / réserve': "Code fermé, l'affirmation ne peut pas être vérifiée ; Internet sert tout de même au téléchargement, au compte et aux paiements.",
          },
          {
            Avantage: 'Application de base gratuite',
            "Ce que cela donne à l'usage": "La transcription, la bibliothèque, les notes et l'export TXT/SRT ne coûtent rien.",
            'Limite / réserve': "L'identification des locuteurs et le traitement par lots exigent Pro.",
          },
          {
            Avantage: 'Plusieurs modèles locaux',
            "Ce que cela donne à l'usage": 'Choisir un modèle plus rapide ou plus précis, avec des options pour les langues asiatiques et européennes.',
            'Limite / réserve': "Aucune mesure de précision ou de vitesse n'a été reproduite ici ; les benchmarks de l'éditeur ne sont pas vérifiés.",
          },
          {
            Avantage: 'Envoi depuis le téléphone',
            "Ce que cela donne à l'usage": "Transférer un enregistrement vers l'ordinateur via votre propre Wi-Fi.",
            'Limite / réserve': "L'offre gratuite accepte un fichier à la fois.",
          },
          {
            Avantage: 'Option à vie',
            "Ce que cela donne à l'usage": 'Un achat unique à 79 $ évite un abonnement.',
            'Limite / réserve': 'Pas d\'essai gratuit de Pro.',
          },
          {
            Avantage: 'Développement actif',
            "Ce que cela donne à l'usage": 'La version 0.1.11 est sortie le 17 novembre 2026.',
            'Limite / réserve': "Un numéro 0.1.x signale un produit jeune ; pas d'application pour Mac Intel, Linux ni mobile.",
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Whispy face aux alternatives',
        content: [
          "Voici les outils de transcription de fichiers les plus proches du répertoire : une application de transcription pour Mac, une application libre et gratuite pour trois systèmes de bureau et une application de sous-titrage pour Mac et Windows.",
        ],
        columns: ['Application', 'Plateformes', 'Prix et licence', 'Rôle', 'Différence clé'],
        rows: [
          {
            Application: 'Whispy',
            Plateformes: 'Mac, Windows, navigateur',
            'Prix et licence': 'Base gratuite, Pro dès 8 $/mois ou 79 $ en une fois, propriétaire',
            Rôle: 'Transcription privée de fichiers',
            'Différence clé': "Modèles locaux avec identification des locuteurs dans Pro ; code fermé",
          },
          {
            Application: '[MacWhisper](/fr/power-local-llm/macwhisper-review)',
            Plateformes: 'macOS',
            'Prix et licence': 'Freemium, propriétaire',
            Rôle: 'Application de transcription pour Mac',
            'Différence clé': 'Mac uniquement et plus ancienne sur le marché',
          },
          {
            Application: '[Buzz](/fr/power-local-llm/buzz-captions-review)',
            Plateformes: 'Mac, Windows, Linux',
            'Prix et licence': 'Gratuit, MIT',
            Rôle: 'Transcription et sous-titres',
            'Différence clé': 'Libre et gratuite ; ajoute Linux',
          },
          {
            Application: '[Sablate](/fr/power-local-llm/sablate-review)',
            Plateformes: 'Windows, Mac',
            'Prix et licence': 'Freemium, propriétaire',
            Rôle: 'Flux de travail de sous-titrage',
            'Différence clé': "Ajoute traduction, édition et incrustation",
          },
        ],
        note: "Les plateformes, les prix et les fonctions des applications tierces changent fréquemment. Vérifiez les détails actuels sur la page de chaque projet avant de décider.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui Whispy est adaptée',
        items: [
          "**Journalistes et chercheurs.** Les entretiens restent sur l'ordinateur, selon l'éditeur.",
          "**Étudiants.** Une base gratuite suffit pour les cours et les séminaires.",
          "**Enregistrements à plusieurs voix.** Pro ajoute des étiquettes de locuteurs que vous pouvez renommer et fusionner.",
          "**Acheteurs qui préfèrent payer une seule fois.** Une licence à vie à 79 $ existe à côté des abonnements.",
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: "Pour qui Whispy n'est pas adaptée",
        items: [
          "**Utilisateurs de Mac Intel, de Linux, d'iPhone et d'Android.** Seules des versions Mac Apple Silicon et Windows x64 sont proposées.",
          "**Quiconque a besoin d'un logiciel auditable.** Le code est fermé et les affirmations de confidentialité ne peuvent pas être inspectées.",
          "**Quiconque a besoin de transcription en direct.** L'application travaille sur des fichiers enregistrés ; les réunions en direct figurent seulement sur la feuille de route de l'éditeur.",
          "**Quiconque veut un logiciel entièrement gratuit.** Buzz est gratuit et libre.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Whispy fonctionne-t-elle hors ligne ?',
            a: "Le site indique qu'une fois l'application utilisée, aucune connexion Internet n'est nécessaire. Le premier lancement en demande une pour télécharger l'application et son modèle vocal. PromptQuorum ne l'a pas testée hors ligne.",
          },
          {
            q: 'Whispy a-t-elle un mode cloud ?',
            a: "L'éditeur affirme qu'elle n'a aucun mode cloud. Une fonction Pro, la transcription à partir d'un lien YouTube ou de réseau social, part d'une adresse en ligne ; le site n'explique pas comment cela fonctionne.",
          },
          {
            q: 'Existe-t-il une version navigateur ?',
            a: "Oui. La version navigateur gratuite exécute des modèles Whisper plus petits dans votre onglet et ne demande aucun compte ; l'éditeur indique qu'elle fonctionne hors ligne après le premier chargement.",
          },
          {
            q: 'Qui édite Whispy ?',
            a: "Fawaz Sheik, selon sa note à PromptQuorum. Le site ne nomme ni société ni lieu.",
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          "Whispy convient si vous transcrivez des enregistrements sur un Mac ou un PC Windows et voulez, selon l'éditeur, que le travail se fasse sur votre propre ordinateur, avec une base gratuite et une offre Pro facultative pour l'identification des locuteurs. Elle propose une version récente, une option à vie et une version navigateur pour un essai rapide.",
          "Les réserves tiennent à la maturité et à la vérifiabilité : un numéro de version 0.1.x, un code fermé, des affirmations de confidentialité et de précision que PromptQuorum n'a pas pu vérifier, et pas d'application pour Mac Intel, Linux ni mobile. Essayez la base gratuite avant de payer pour Pro.",
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de Whispy](https://usewhispy.com) — fonctions et parcours de téléchargement.',
          '[Page de tarifs](https://usewhispy.com/pricing) — offres et fonctions Pro.',
          '[Politique de confidentialité](https://usewhispy.com/privacy) — traitement des données, dernière mise à jour le 8 juin 2026.',
          "[Page des benchmarks](https://usewhispy.com/benchmarks) — les scores de modèles propres à l'éditeur.",
          "[Versions GitHub](https://github.com/fzsheik/whispy-releases/releases) — fichiers d'installation et date de publication de la version 0.1.11.",
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Outils vocaux locaux comparés](/fr/power-local-llm/local-llm-voice-audio-compared) — synthèse vocale, reconnaissance vocale et agents vocaux côte à côte.',
          '[Test de MacWhisper](/fr/power-local-llm/macwhisper-review) — une application de transcription pour Mac.',
          '[Test de Buzz](/fr/power-local-llm/buzz-captions-review) — une application libre et gratuite de transcription et de sous-titres.',
          '[Test de Sablate](/fr/power-local-llm/sablate-review) — une application locale de sous-titrage pour Mac et Windows.',
          '[Test de Whisper.cpp](/fr/power-local-llm/whisper-cpp-review) — le moteur ouvert derrière de nombreuses applications Whisper locales.',
          "[Le répertoire complet des logiciels de LLM locaux](/fr/directory) — un répertoire plus large des outils d'IA locale, toutes plateformes.",
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-20',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whispy-review-hero-ja.webp',
    title: 'Whispy レビュー：Mac・Windows向けプライベート文字起こしアプリ',
    seoTitle: 'Whispyレビュー：Mac・Windows向けローカル文字起こしアプリ',
    intro: 'Whispyは、Mac・Windows向けの無料で始められる文字起こしアプリです。インタビュー、講義、会議の録音ファイルを取り込むと、お使いのコンピューター上で文字起こしを行い、有料のProプランでは話者ラベルも付けられます。このレビューでは、機能、インストール方法、料金、プライバシーポリシーの記載、足りない点をまとめます。開発元の公開ページ、リリースページ、開発元からのメモに基づいており、実機での検証は行っていません。',
    metaDescription: 'Whispyのレビュー：開発元によると、クラウドモードなしでMac・Windows上で音声を文字起こしするアプリ。基本機能は無料、Proは月8ドルから。実機検証なし。',
    twitterDescription: 'Whispyのレビュー：ローカルモデルとTXT・SRT書き出しに対応した、Mac・Windows向けのプライベート文字起こしアプリ。価格、プライバシー、制限、代替ツールを解説します。',
    audience: 'MacまたはWindows PCで機密性の高い録音を文字起こしするジャーナリスト、研究者、学生など向け。価格、インストール、モデル、プライバシー、制限、代替ツールを扱います。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Whispy review',
    targetKeywords: [
      'whispy レビュー',
      'whispy 文字起こし',
      'プライベート 文字起こし mac windows',
      'ローカル 文字起こしアプリ',
      'オフライン 音声認識 デスクトップ',
      'クラウドなし インタビュー 文字起こし',
      '話者ラベル ローカル 文字起こし',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: '**Whispyは、音声ファイルをお使いのコンピューター上でテキストに変換するMac・Windows向けのクローズドソースの文字起こしアプリで、開発元はクラウドモードは一切ないとしています。** 基本機能は無料で、話者ラベルとバッチ処理は有料のProプランにあります。最新リリースは2026年11月17日のバージョン0.1.11です。このレビューは、開発元の公式サイト、プライバシーポリシー、リリースページ、開発元からのメモに基づいており、実機での検証は行っていません。',
    quickAnswerTop: {
      ja: {
        question: 'Whispyはローカルで動く文字起こしアプリですか？',
        answer: '開発元とプライバシーポリシーによると、はい。文字起こしはMacまたはWindows PC上で実行され、音声はWhispyにアップロードされません。ただし、アプリと音声認識モデルのダウンロード、およびプライバシーポリシーに記載されているアカウント、決済、診断にはインターネットが使われます。コードは非公開で、PromptQuorumはネットワーク通信を調べていないため、この主張は開発元自身によるものです。',
        bullets: [
          '音声または動画ファイルを取り込み、速いモデルか精度の高いモデルを選んで、文字起こしを読む、コピーする、書き出す、のいずれかができます。',
          '基本の文字起こし、文字起こしライブラリ、ノート、TXT・SRT書き出しは無料です。',
          '対応はApple Silicon搭載Macと64ビットWindowsのみで、音声認識モデルには約2GBの空き容量が必要です。',
          '無料のブラウザー版もあり、より小さいWhisperモデルを使います。',
          'プロジェクトはまだ若く、バージョン番号は0.1.11です。',
        ],
        updatedDate: '2026-11-20',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Whispyの入手方法', anchor: 'get-it' },
      { label: 'Whispyの概要', anchor: 'at-a-glance' },
      { label: 'Whispyとは', anchor: 'what-is-whispy' },
      { label: 'はじめ方', anchor: 'how-to-get-started' },
      { label: '機能', anchor: 'features' },
      { label: 'モデルとハードウェア', anchor: 'models-hardware' },
      { label: 'プライバシー・ライセンス・費用', anchor: 'privacy' },
      { label: '開発者より', anchor: 'from-the-maker' },
      { label: 'メリットと制限', anchor: 'tradeoffs' },
      { label: 'Whispyと代替ツールの比較', anchor: 'vs-alternatives' },
      { label: 'Whispyが向いている人', anchor: 'who-should-use' },
      { label: 'Whispyが向いていない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
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
            text: 'Whispyは、開発元によると、クラウドサービスではなくお使いのコンピューター上で録音をテキストに変換する、Mac・Windows向けの文字起こしアプリです。',
          },
          {
            type: 'plain-terms',
            text: 'コンピューターの中に座っているタイピストのようなものだと考えてください。録音を渡すとテキストが返ってきて、音声が企業のサーバーに送られることはありません。',
          },
        ],
        items: [
          'ローカルの主張：開発元はクラウドモードはないとしており、プライバシーポリシーは音声がアップロードされないとしています。アカウント、決済、診断にはオンラインのサービスが使われます。',
          'ライセンス：プロプライエタリのクローズドソースで、リンクされているGitHubリポジトリはリリース用インストーラーを置いているだけです。',
          '価格：基本機能は無料で、話者検出とバッチ処理はProにあります。',
          'メンテナンス：バージョン0.1.11が2026年11月17日にリリースされており、継続的に更新されていますが、まだ初期段階です。',
          '不足点：Intel Mac、Linux、モバイルのアプリはなく、PromptQuorumによる実機検証も行っていません。',
        ],
      },
      getItWhispy: {
        id: 'get-it',
        title: 'Whispyの入手方法',
        content: [
          '**Whispyはほかのデスクトップアプリと同じようにインストールでき、ターミナルは不要です。** 公式サイトからお使いのシステム用のインストーラーをダウンロードします。音声認識モデルはセットアップ中に取得されます。',
        ],
        columns: [
          'プラットフォーム',
          '入手先',
        ],
        rows: [
          {
            'プラットフォーム': 'Mac',
            '入手先': '[Mac版をダウンロード](https://usewhispy.com/download) — .dmg（約72MB）、Apple Silicon（M1以降）、macOS 11以降',
          },
          {
            'プラットフォーム': 'Windows',
            '入手先': '[Windows版をダウンロード](https://usewhispy.com/download) — .exeインストーラー（約100MB）、Windows 10または11、64ビットのIntelまたはAMD',
          },
          {
            'プラットフォーム': 'ブラウザー',
            '入手先': '[ブラウザーでWhispyを試す](https://usewhispy.com) — 無料、アカウント不要、より小さいWhisperモデル',
          },
          {
            'プラットフォーム': 'リリースノート',
            '入手先': '[GitHubリリース](https://github.com/fzsheik/whispy-releases/releases)',
          },
          {
            'プラットフォーム': '公式サイト',
            '入手先': '[usewhispy.com](https://usewhispy.com)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[Whispyのプライバシーポリシー](https://usewhispy.com/privacy)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': 'クローズドソース。GitHubリポジトリはリリース用インストーラーのみ',
          },
        ],
        note: 'ダウンロードページが挙げているのはApple Silicon搭載MacとWindows x64だけで、Intel Mac、Linux、iOS、Androidのビルドは提供されていません。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Whispyの概要',
        columns: [
          '項目',
          'Whispy',
        ],
        rows: [
          { '項目': 'プラットフォーム', 'Whispy': 'Apple Silicon搭載Mac（macOS 11以降）、Windows 10・11 x64、ブラウザー版' },
          { '項目': '価格', 'Whispy': '基本機能は無料。Proは月12ドル、年払いで月8ドル（年96ドル）、または79ドルの買い切り' },
          { '項目': 'ライセンス', 'Whispy': 'プロプライエタリ、クローズドソース' },
          { '項目': '実行場所', 'Whispy': 'お使いのコンピューター上。ダウンロード、アカウント、決済にはインターネット' },
          { '項目': '対応言語', 'Whispy': 'サイトに言語数の記載なし。モデルは欧州25言語と中国語・日本語・韓国語に対応' },
          { '項目': '話者ラベル', 'Whispy': 'あり。Proプラン' },
          { '項目': 'リアルタイム文字起こし', 'Whispy': '記載なし。アプリは録音済みファイルを対象とする' },
          { '項目': 'CPUのみで利用可能', 'Whispy': '記載なし' },
          { '項目': 'ローカルAPIサーバー', 'Whispy': '記載なし' },
        ],
        note: '項目は、Local LLM Software Directoryで使われている音声認識の比較に沿っています。サイトに記載がない項目は、未対応ではなく不明という意味です。',
      },
      whatIsWhispy: {
        id: 'what-is-whispy',
        title: 'Whispyとは',
        content: [
          '**Whispyは音声ファイルの文字起こしアプリであり、音声入力ツールでも会議ボットでもありません。** ボイスメモ、インタビュー、講義など、すでにある録音を渡すと、編集、コピー、書き出しができるタイムスタンプ付きの文字起こしが返ってきます。',
          '開発者はFawaz Sheik氏で、最も文字起こしが必要な録音は、どこにもアップロードすべきでないものであることが多いと考え、このアプリを作ったと述べています。サイトは、ジャーナリスト、研究者、弁護士、セラピスト、学生を想定読者として挙げています。',
          'このレビューは、公式サイト、プライバシーポリシー、ベンチマークページ、GitHubのリリースページ、下記の開発者からのメモに基づいています。実機での検証は行っていないため、精度、速度、安定性は評価していません。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'はじめ方',
        content: [
          '**セットアップは、インストール、モデルのダウンロード、ファイルのドロップの3ステップです。** 手順は公式サイトに沿っています。',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: '[ダウンロードページ](https://usewhispy.com/download)からMac用の.dmgまたはWindows用の.exeをダウンロードします。無料の基本機能にアカウントは不要です。',
          },
          {
            title: '音声認識モデルのダウンロードを待つ',
            whyItMatters: 'インストーラーの注記では、セットアップ中に取得するモデルのために約2GBの空き容量が必要とされています。',
          },
          {
            title: '精度を選ぶ',
            whyItMatters: 'サイトは、手早く確認するための高速な文字起こしと、詳細なノート向けの高精度な文字起こしから選べると説明しています。モデルの選択は設定にあります。',
          },
          {
            title: 'ファイルをドロップして書き出す',
            whyItMatters: 'ボイスメモ、会議の録音、インタビューをドラッグして取り込み、テキストをコピーするか、TXTまたはSRTとして書き出します。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**機能は、プライベートな録音を使えるテキストに変えることを中心にしています。** 以下はすべて公式サイトと料金ページに基づいています。',
        ],
        items: [
          '**文字起こしライブラリとノート。** 文字起こしとノートはお使いのドライブに保存されます。',
          '**書き出し。** プレーンテキスト（TXT）とSRT字幕は無料です。ご自身の指示を添えて、文字起こしをChatGPT、Claude、Geminiに送ることもでき、共有する内容は自分で選べます。',
          '**スマートフォンから送信。** QRコードをスキャンして、お使いのWi-Fi経由でスマートフォンから録音を送れます。無料プランでは一度に1ファイルです。',
          '**カスタム単語。** 文字起こしの前に名前や専門用語を追加できます。サイトによると、WhisperとQwen3-ASRで使えます。',
          '**Pro機能。** バッチ処理、話者検出と話者の編集（名前の変更や統合）、自動書き出し、YouTubeやSNSのリンクからの文字起こし。',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'モデルとハードウェア',
        content: [
          '**デスクトップ版には、複数のローカル音声認識モデルがあります。** ベンチマークページが挙げているのは、Whisper Large v3 Turbo、Parakeet Ultra（欧州25言語）、Qwen3-ASR（中国語、日本語、韓国語など）で、サイトによると、言語に合ったモデルを設定で選びます。ブラウザー版は、より小さいWhisperのTiny、Base、Smallモデルを使います。',
          '話者検出はローカルで動作すると説明されています。プライバシーポリシーはpyannoteモデルを挙げており、アプリ内の新機能のお知らせはNVIDIA Nemotron-3、最大8人の話者、1回の無料お試し利用を挙げています。',
          'サイトは独自のベンチマークページ「Whispy Index」を公開しており、開発元自身の英語・欧州言語・アジア言語のテストセットで3つのモデルを採点しています。PromptQuorumはそのスコアを再現していません。RAMの要件は記載されておらず、インストーラーはモデル用に約2GBのディスク容量を求めています。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー・ライセンス・費用',
        content: [
          '**プライバシーポリシーは、音声、文字起こし、ノートはお使いのデバイスに残り、Whispyにはそれらを受け取るサーバーがないとしています。** ポリシーの最終更新は2026年6月8日です。Whispyが保有するとされる個人データは、アカウント（Proに必要）に使うメールアドレスと、サブスクリプションの状態だけです。',
          'ポリシーは、その裏側のサービスも挙げています。認証にSupabase、決済にPolar、Cookieを使わないアナリティクスにPostHog、エラー追跡にSentryです。マーケティング文には「アカウント不要」「トラッキングなし」とあるものがあるため、ポリシーとあわせてお読みください。ポリシーは、無料の基本機能がアカウントなしで使えること、そしてアナリティクスと診断のツールがあることを説明しています。コードは非公開で、PromptQuorumはネットワーク通信を調べていないため、これらの記述は開発元自身によるものです。',
          '無料プランには、デスクトップ版、ブラウザー版、ライブラリ、TXT・SRT書き出しが含まれ、料金ページはProの無料体験はないとしています。Proは月12ドル、年払いで月8ドル（年96ドル）、または79ドルの買い切りです。サイトは価格に税が含まれるかを明記していないため、購入時にご確認ください。',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '開発者より',
        content: [
          'Whispyの開発者であるFawaz Sheik氏が、このメモをPromptQuorumに送ってくれました。これは開発者自身の説明であり、PromptQuorumによる独立した評価ではありません。PromptQuorumはこのアプリを実行していません。',
          '「私は、人々が自分のデータを手放すことを強いられずに、AIの力を使えるべきだと考えています。今は、あなたの履歴や個人データが、おそらくあなた自身よりも価値を持つ時代です。そのデータがモデルの学習に使われることも理解しています。安全でプライベートなローカルの選択肢があるのに、そのような妥協を強いられるべきではありません。」',
          '「だからWhispyを作りました。インタビュー、講義、会議、通話など、人々が最も文字起こしを必要とする録音は、どこにもアップロードすべきでないものであることが多く、ほとんどのツールはプライバシーと引き換えに精度を求めてきます。Whispyにはクラウドモードが一切ありません。音声がコンピューターの外に出ることはなく、文字起こしはお使いのMacまたはWindows PC上で実行されます。」',
          '「最大の強みは、誰が何を話したかも含めて、お使いの言語で正確なテキストが得られることです。速さや精度の希望に応じて複数のローカルモデルから選べ、長い複数話者の録音に話者ラベルを付け、スマートフォンから録音をアップロードし、TXTやSRTに書き出せます。すでに1万2,000時間を超える音声がWhispyで文字起こしされています。」',
          '「Whispyの目標は、お使いの言語で得られる最も正確なプライベート文字起こしを作り、録音からライブの会議やノートへと広げることです。そのすべてを、お使いのデバイス上のまま実現します。」',
        ],
        note: '— Fawaz Sheik、Whispy開発者',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'メリットと制限',
        columns: [
          'メリット',
          '実際の使い勝手',
          '制限・注意点',
        ],
        rows: [
          {
            'メリット': 'お使いのコンピューター上での文字起こし',
            '実際の使い勝手': '録音はマシン上で処理され、Whispyに音声はアップロードされません。',
            '制限・注意点': 'クローズドソースのため主張を検証できません。ダウンロード、アカウント、決済にはインターネットが使われます。',
          },
          {
            'メリット': '無料の基本機能',
            '実際の使い勝手': '文字起こし、ライブラリ、ノート、TXT・SRT書き出しは無料です。',
            '制限・注意点': '話者ラベルとバッチ処理にはProが必要です。',
          },
          {
            'メリット': '複数のローカルモデル',
            '実際の使い勝手': 'アジア言語と欧州言語向けの選択肢を含め、速いモデルか精度の高いモデルを選べます。',
            '制限・注意点': '精度や速度の数値は再現しておらず、開発元自身のベンチマークは未検証です。',
          },
          {
            'メリット': 'スマートフォンから送信',
            '実際の使い勝手': 'お使いのWi-Fi経由で、録音をコンピューターに移せます。',
            '制限・注意点': '無料プランでは一度に1ファイルです。',
          },
          {
            'メリット': '買い切りの選択肢',
            '実際の使い勝手': '79ドルの買い切りで、サブスクリプションを避けられます。',
            '制限・注意点': 'Proの無料体験はありません。',
          },
          {
            'メリット': '活発な開発',
            '実際の使い勝手': 'バージョン0.1.11が2026年11月17日に公開されました。',
            '制限・注意点': '0.1.xという番号は初期段階の製品であることを示します。Intel Mac、Linux、モバイルのアプリはありません。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Whispyと代替ツールの比較',
        content: [
          'ディレクトリ内で最も近いファイル文字起こしツールは、Mac向け文字起こしアプリ、3つのデスクトップOSに対応する無料のオープンソースアプリ、MacとWindows向けの字幕アプリです。',
        ],
        columns: [
          'アプリ',
          '対応',
          '価格とライセンス',
          '役割',
          '主な違い',
        ],
        rows: [
          {
            'アプリ': 'Whispy',
            '対応': 'Mac、Windows、ブラウザー',
            '価格とライセンス': '基本機能は無料、Proは月8ドルから、または79ドルの買い切り、プロプライエタリ',
            '役割': 'プライベートなファイル文字起こし',
            '主な違い': 'ローカルモデルで、話者ラベルはPro。クローズドソース',
          },
          {
            'アプリ': '[MacWhisper](/ja/power-local-llm/macwhisper-review)',
            '対応': 'macOS',
            '価格とライセンス': 'フリーミアム、プロプライエタリ',
            '役割': 'Mac向け文字起こしアプリ',
            '主な違い': 'Mac専用で、実績が長い',
          },
          {
            'アプリ': '[Buzz](/ja/power-local-llm/buzz-captions-review)',
            '対応': 'Mac、Windows、Linux',
            '価格とライセンス': '無料、MIT',
            '役割': '文字起こしと字幕',
            '主な違い': 'オープンソースで無料。Linuxにも対応',
          },
          {
            'アプリ': '[Sablate](/ja/power-local-llm/sablate-review)',
            '対応': 'Windows、Mac',
            '価格とライセンス': 'フリーミアム、プロプライエタリ',
            '役割': '字幕ワークフロー',
            '主な違い': '翻訳、編集、焼き込みを追加',
          },
        ],
        note: 'サードパーティ製アプリの対応環境、価格、機能は頻繁に変わります。決める前に各プロジェクトの公式ページで最新情報をご確認ください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Whispyが向いている人',
        items: [
          '**ジャーナリストと研究者。** 開発元によると、インタビューはコンピューター上に残ります。',
          '**学生。** 無料の基本機能で講義やゼミに対応できます。',
          '**複数話者の録音。** Proでは、名前を変更したり統合したりできる話者ラベルが付けられます。',
          '**一度だけ支払いたい方。** サブスクリプションのほかに、79ドルの買い切りライセンスがあります。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Whispyが向いていない人',
        items: [
          '**Intel Mac、Linux、iPhone、Androidのユーザー。** 提供されているのはApple Silicon搭載MacとWindows x64のビルドだけです。',
          '**監査可能なソフトウェアが必要な方。** コードは非公開で、プライバシーの主張を検証できません。',
          '**ライブ文字起こしが必要な方。** アプリは録音済みファイルが対象で、ライブ会議は開発元のロードマップにあるだけです。',
          '**完全に無料のソフトウェアを求める方。** Buzzは無料のオープンソースです。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Whispyはオフラインで使えますか？',
            a: 'サイトによると、使い始めればインターネット接続は不要です。初回はアプリと音声認識モデルのダウンロードに接続が必要です。PromptQuorumはオフラインでは試していません。',
          },
          {
            q: 'Whispyにクラウドモードはありますか？',
            a: '開発元は、クラウドモードは一切ないとしています。Proの機能の一つである、YouTubeやSNSのリンクからの文字起こしはオンラインのアドレスから始まりますが、サイトはその仕組みを説明していません。',
          },
          {
            q: 'ブラウザー版はありますか？',
            a: 'あります。無料のブラウザー版は、より小さいWhisperモデルをブラウザーのタブ内で実行し、アカウントは不要です。開発元によると、初回の読み込み後はオフラインでも動作します。',
          },
          {
            q: 'Whispyは誰が作っていますか？',
            a: 'PromptQuorumへのメモによると、Fawaz Sheik氏です。サイトには企業名も所在地も記載されていません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: [
          'MacまたはWindows PCで録音を文字起こしし、開発元によるとその作業が自分のコンピューター上で行われること、無料の基本機能と、話者ラベル用の任意のProプランがあることを望む方にWhispyは向いています。最近のリリース、買い切りの選択肢、手軽に試せるブラウザー版があります。',
          '注意点は成熟度と検証可能性です。0.1.xというバージョン番号、非公開のコード、PromptQuorumでは確認できなかったプライバシーと精度の主張、そしてIntel Mac、Linux、モバイルのアプリがないことです。Proに支払う前に、無料の基本機能をお試しください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Whispy公式サイト](https://usewhispy.com) — 機能とダウンロードの流れ。',
          '[料金ページ](https://usewhispy.com/pricing) — プランとPro機能。',
          '[プライバシーポリシー](https://usewhispy.com/privacy) — データの取り扱い。最終更新は2026年6月8日。',
          '[ベンチマークページ](https://usewhispy.com/benchmarks) — 開発元自身によるモデルのスコア。',
          '[GitHubリリース](https://github.com/fzsheik/whispy-releases/releases) — インストーラーのアセットとバージョン0.1.11のリリース日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカル音声・オーディオツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — 音声合成、音声認識、音声エージェントを並べて比較。',
          '[MacWhisperレビュー](/ja/power-local-llm/macwhisper-review) — Mac向け文字起こしアプリ。',
          '[Buzzレビュー](/ja/power-local-llm/buzz-captions-review) — 無料のオープンソース文字起こし・字幕アプリ。',
          '[Sablateレビュー](/ja/power-local-llm/sablate-review) — MacとWindows向けのローカル字幕アプリ。',
          '[Whisper.cppレビュー](/ja/power-local-llm/whisper-cpp-review) — 多くのローカルWhisperアプリの基盤となるオープンなエンジン。',
          '[Local LLM Software Directory全体](/ja/directory) — プラットフォームを横断してローカルAIツールを集めた、より広いディレクトリ。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-20',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whispy-review-hero-zh.webp',
    title: 'Whispy评测：适用于Mac和Windows的私密音频转录应用',
    seoTitle: 'Whispy评测：适用于Mac和Windows的本地私密音频转录应用',
    intro: 'Whispy是一款适用于Mac和Windows的转录应用，可免费开始使用：把访谈、讲座或会议录音拖进去，它就在你自己的电脑上生成文字稿，付费的Pro套餐还可加上说话人标签。本评测梳理它的功能、安装方式、价格、隐私政策的说法以及不足之处。内容依据开发者的公开页面、发布页面和开发者提供的说明，未经实际测试。',
    metaDescription: 'Whispy评测：适用于Mac和Windows的应用，据开发者称没有任何云端模式，在你的电脑上转录音频。核心功能免费，Pro每月8美元起，未经实测。',
    twitterDescription: 'Whispy评测：适用于Mac和Windows的私密音频转录应用，使用本地模型，支持导出TXT和SRT。价格、隐私、限制与替代方案。',
    audience: '在Mac或Windows电脑上转录敏感录音的记者、研究人员、学生等——涵盖价格、安装、模型、隐私、限制和替代方案。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Whispy review',
    targetKeywords: [
      'whispy 评测',
      'whispy 转录',
      '私密音频转录 mac windows',
      '本地转录应用',
      '离线语音转文字 桌面',
      '不用云端转录访谈',
      '说话人标签 本地转录',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: '**Whispy是一款适用于Mac和Windows的闭源转录应用，在你自己的电脑上把音频文件转成文字，开发者称它完全没有云端模式。** 核心应用免费；说话人标签和批量处理在付费的Pro套餐中。最新版本是2026年11月17日发布的0.1.11。本评测依据开发者的公开官网、隐私政策、发布页面和开发者提供的说明，未经实际测试。',
    quickAnswerTop: {
      zh: {
        question: 'Whispy是本地转录应用吗？',
        answer: '据开发者及其隐私政策称，是的：转录在你的Mac或Windows电脑上运行，音频不会上传到Whispy。联网仍用于下载应用及其语音模型，以及隐私政策中描述的账户、支付和诊断。代码闭源，PromptQuorum没有检查网络流量，因此该说法出自开发者本人。',
        bullets: [
          '拖入音频或视频文件，选择速度快或精度高的模型，然后阅读、复制或导出文字稿。',
          '核心转录、文字稿库、笔记以及TXT或SRT导出都是免费的。',
          '仅支持Apple Silicon Mac和64位Windows；语音模型约需2 GB磁盘空间。',
          '另有免费的浏览器版，使用较小的Whisper模型。',
          '项目还很年轻：版本号是0.1.11。',
        ],
        updatedDate: '2026-11-20',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: '获取Whispy', anchor: 'get-it' },
      { label: 'Whispy概览', anchor: 'at-a-glance' },
      { label: 'Whispy是什么', anchor: 'what-is-whispy' },
      { label: '入门步骤', anchor: 'how-to-get-started' },
      { label: '功能', anchor: 'features' },
      { label: '模型与硬件', anchor: 'models-hardware' },
      { label: '隐私、许可与费用', anchor: 'privacy' },
      { label: '来自开发者', anchor: 'from-the-maker' },
      { label: '优势与局限', anchor: 'tradeoffs' },
      { label: 'Whispy与替代方案对比', anchor: 'vs-alternatives' },
      { label: '适合使用Whispy的人', anchor: 'who-should-use' },
      { label: '不适合使用Whispy的人', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
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
            text: 'Whispy是一款适用于Mac和Windows的转录应用，据开发者称，它在你自己的电脑上而不是云服务中把录音转成文字。',
          },
          {
            type: 'plain-terms',
            text: '可以把它想象成住在你电脑里的打字员：你交出录音，文字就回来了，音频从不经过公司的服务器。',
          },
        ],
        items: [
          '本地说法：开发者称没有云端模式，隐私政策称音频不会上传；账户、支付和诊断仍使用在线服务。',
          '许可：专有闭源；链接的GitHub仓库只存放发布用的安装包。',
          '价格：核心应用免费，说话人检测和批量处理在Pro中。',
          '维护：版本0.1.11于2026年11月17日发布，项目在持续更新，但仍处于早期。',
          '不足：没有Intel Mac、Linux或移动版应用，PromptQuorum也没有实际测试。',
        ],
      },
      getItWhispy: {
        id: 'get-it',
        title: '获取Whispy',
        content: [
          '**Whispy的安装方式和普通桌面应用一样，不需要终端。** 从官网下载适合你系统的安装包；语音模型在安装过程中获取。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'Mac',
            '获取方式': '[下载Mac版](https://usewhispy.com/download) — .dmg（约72 MB），Apple Silicon（M1或更新），macOS 11或更高版本',
          },
          {
            '平台': 'Windows',
            '获取方式': '[下载Windows版](https://usewhispy.com/download) — .exe安装程序（约100 MB），Windows 10或11，64位Intel或AMD',
          },
          {
            '平台': '浏览器',
            '获取方式': '[在浏览器中试用Whispy](https://usewhispy.com) — 免费，无需账户，使用较小的Whisper模型',
          },
          {
            '平台': '发布说明',
            '获取方式': '[GitHub Releases](https://github.com/fzsheik/whispy-releases/releases)',
          },
          {
            '平台': '官网',
            '获取方式': '[usewhispy.com](https://usewhispy.com)',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[Whispy隐私政策](https://usewhispy.com/privacy)',
          },
          {
            '平台': '源代码',
            '获取方式': '闭源；GitHub仓库只存放发布用的安装包',
          },
        ],
        note: '下载页面只列出Apple Silicon Mac和Windows x64；没有提供Intel Mac、Linux、iOS或Android版本。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Whispy概览',
        columns: ['属性', 'Whispy'],
        rows: [
          { '属性': '平台', 'Whispy': 'Apple Silicon Mac（macOS 11+）、Windows 10/11 x64，另有浏览器版' },
          { '属性': '价格', 'Whispy': '核心免费；Pro每月12美元，按年付费每月8美元（共96美元），或一次性79美元' },
          { '属性': '许可', 'Whispy': '专有，闭源' },
          { '属性': '运行方式', 'Whispy': '在你的电脑上运行；下载、账户和支付需要联网' },
          { '属性': '支持语言', 'Whispy': '官网未给出语言数量；模型覆盖25种欧洲语言以及中文、日语和韩语' },
          { '属性': '说话人标签', 'Whispy': '有，在Pro套餐中' },
          { '属性': '实时转录', 'Whispy': '未说明；应用处理的是已录好的文件' },
          { '属性': '仅用CPU可用', 'Whispy': '未说明' },
          { '属性': '本地API服务器', 'Whispy': '未说明' },
        ],
        note: '各属性沿用Local LLM Software Directory中语音转文字对比所用的项目。官网未提及，表示未知，而不是不支持。',
      },
      whatIsWhispy: {
        id: 'what-is-whispy',
        title: 'Whispy是什么',
        content: [
          '**Whispy是音频文件转录工具，不是听写工具，也不是会议机器人。** 你把已有的录音交给它，比如语音备忘录、访谈或讲座，它会返回带时间戳的文字稿，可编辑、复制或导出。',
          '开发者是Fawaz Sheik，他说自己做这款应用，是因为人们最需要转录的录音，往往正是不该上传到任何地方的那些。官网把记者、研究人员、律师、心理治疗师和学生列为目标用户。',
          '本评测依据官网、隐私政策、基准测试页面、GitHub发布页面以及下方开发者的说明。评测没有实际测试，因此不评价准确度、速度和稳定性。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '入门步骤',
        content: [
          '**设置就是安装、下载模型、拖入文件。** 步骤依据官网。',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '从[下载页面](https://usewhispy.com/download)下载Mac版.dmg或Windows版.exe；使用免费核心功能无需账户。',
          },
          {
            title: '等待语音模型下载',
            whyItMatters: '安装程序的说明要求约2 GB的可用空间，用于安装过程中获取的模型。',
          },
          {
            title: '选择精度',
            whyItMatters: '官网描述的选择是：快速转录用于快速查看，高精度转录用于详细、清晰的笔记；模型选择在设置中。',
          },
          {
            title: '拖入文件并导出',
            whyItMatters: '拖入语音备忘录、会议录音或访谈，然后复制文字，或导出为TXT或SRT。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**功能围绕把私密录音变成可用文字展开。** 以下内容均来自官网及其价格页面。',
        ],
        items: [
          '**文字稿库和笔记。** 文字稿和笔记保存在你自己的硬盘上。',
          '**导出。** 纯文本TXT和SRT字幕免费；你还可以带上自己的指令，把文字稿发送到ChatGPT、Claude或Gemini，分享什么由你自己决定。',
          '**从手机发送。** 扫描二维码，通过你自己的Wi-Fi从手机发送录音；免费套餐一次只能发送一个文件。',
          '**自定义词汇。** 转录前添加人名和行业术语；官网称这适用于Whisper和Qwen3-ASR。',
          '**Pro功能。** 批量处理、说话人检测和说话人编辑（重命名或合并说话人）、自动导出，以及通过YouTube或社交媒体链接转录。',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '模型与硬件',
        content: [
          '**桌面版提供多个本地语音模型。** 基准测试页面列出了Whisper Large v3 Turbo、Parakeet Ultra（25种欧洲语言）和Qwen3-ASR（中文、日语、韩语等），官网称你可在设置中按语言选择模型。浏览器版使用较小的Whisper Tiny、Base和Small模型。',
          '说话人检测被描述为在本地运行。隐私政策提到pyannote模型；应用内的新功能提示提到NVIDIA Nemotron-3，最多8位说话人，并可免费试用一次。',
          '官网发布了自己的基准测试页面Whispy Index，用开发者自己的英语、欧洲语言和亚洲语言测试集给三个模型打分。PromptQuorum没有复现这些分数。官网未说明内存要求；安装程序要求约2 GB磁盘空间用于模型。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私、许可与费用',
        content: [
          '**隐私政策称，音频、文字稿和笔记都留在你的设备上，Whispy没有接收这些内容的服务器。** 该政策最后更新于2026年6月8日。政策称Whispy持有的唯一个人数据是用于账户（Pro需要）的电子邮件地址和订阅状态。',
          '政策还列出了背后的服务：用于身份验证的Supabase、用于支付的Polar、用于无Cookie分析的PostHog，以及用于错误追踪的Sentry。部分宣传文案写着“无需账户”和“无跟踪”；请结合政策阅读，政策描述的是免费核心功能无需账户，同时存在分析和诊断工具。代码闭源，PromptQuorum没有检查网络流量，因此这些说法出自开发者本人。',
          '免费套餐包含桌面版、浏览器版、文字稿库以及TXT和SRT导出，价格页面称Pro没有免费试用。Pro每月12美元，按年付费每月8美元（共96美元），或一次性79美元。官网没有说明价格是否含税，请在结账时确认。',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '来自开发者',
        content: [
          'Whispy的开发者Fawaz Sheik向PromptQuorum发来了这段说明。这是开发者本人的说法，不是PromptQuorum的独立评估，PromptQuorum也没有运行过这款应用。',
          '“我相信，人们应该能在不被迫交出数据的前提下享受AI的力量。我们生活在这样一个时代：你的历史记录和个人数据可以说比你本人更有价值，而我也明白，这些数据正是用来训练模型的。既然存在安全、私密的本地方案，我们就不该被迫做出这种妥协。”',
          '“这就是我做Whispy的原因。人们最需要转录的录音，比如访谈、讲座、会议和通话，往往正是不该上传到任何地方的那些，而大多数工具却要你用隐私去换准确度。Whispy完全没有云端模式。你的音频不会离开你的电脑，转录就在你自己的Mac或Windows电脑上运行。”',
          '“主要优势是用你的语言得到准确的文字，并且知道谁说了什么。你可以根据想要的速度或准确度，从多个本地模型中选择，给长时间的多人录音添加说话人标签，从手机上传录音，并导出为TXT或SRT。已经有人用它转录了超过12,000小时的音频。”',
          '“我对Whispy的目标，是做出你能用自己的语言得到的最准确的私密转录，然后从录音扩展到实时会议和笔记，同时始终留在你的设备上。”',
        ],
        note: '— Fawaz Sheik，Whispy开发者',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '优势与局限',
        columns: ['优势', '实际使用中的意义', '局限 / 注意事项'],
        rows: [
          {
            '优势': '在你的电脑上转录',
            '实际使用中的意义': '录音在本机处理，不会把音频上传到Whispy。',
            '局限 / 注意事项': '闭源，因此该说法无法核实；下载、账户和支付仍会使用互联网。',
          },
          {
            '优势': '免费核心应用',
            '实际使用中的意义': '转录、文字稿库、笔记和TXT/SRT导出不花钱。',
            '局限 / 注意事项': '说话人标签和批量处理需要Pro。',
          },
          {
            '优势': '多个本地模型',
            '实际使用中的意义': '可选更快或更准确的模型，包括面向亚洲和欧洲语言的选项。',
            '局限 / 注意事项': '本文没有复现准确度或速度数据；开发者自己的基准测试未经核实。',
          },
          {
            '优势': '从手机发送',
            '实际使用中的意义': '通过你自己的Wi-Fi把录音传到电脑。',
            '局限 / 注意事项': '免费套餐一次只能发送一个文件。',
          },
          {
            '优势': '买断选项',
            '实际使用中的意义': '一次性79美元，可避免订阅。',
            '局限 / 注意事项': 'Pro没有免费试用。',
          },
          {
            '优势': '开发活跃',
            '实际使用中的意义': '版本0.1.11于2026年11月17日发布。',
            '局限 / 注意事项': '0.1.x的版本号表示产品尚处早期；没有Intel Mac、Linux或移动版应用。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Whispy与替代方案对比',
        content: [
          '以下是目录中最接近的文件转录工具：一款Mac转录应用、一款支持三种桌面系统的免费开源应用，以及一款适用于Mac和Windows的字幕应用。',
        ],
        columns: ['应用', '平台', '价格与许可', '定位', '主要区别'],
        rows: [
          {
            '应用': 'Whispy',
            '平台': 'Mac、Windows、浏览器',
            '价格与许可': '核心免费，Pro每月8美元起或一次性79美元，专有',
            '定位': '私密文件转录',
            '主要区别': '本地模型，说话人标签在Pro中；闭源',
          },
          {
            '应用': '[MacWhisper](/zh/power-local-llm/macwhisper-review)',
            '平台': 'macOS',
            '价格与许可': '免费增值，专有',
            '定位': 'Mac转录应用',
            '主要区别': '仅限Mac，口碑积累更久',
          },
          {
            '应用': '[Buzz](/zh/power-local-llm/buzz-captions-review)',
            '平台': 'Mac、Windows、Linux',
            '价格与许可': '免费，MIT',
            '定位': '转录和字幕',
            '主要区别': '开源免费；另支持Linux',
          },
          {
            '应用': '[Sablate](/zh/power-local-llm/sablate-review)',
            '平台': 'Windows、Mac',
            '价格与许可': '免费增值，专有',
            '定位': '字幕工作流',
            '主要区别': '增加翻译、编辑和烧录',
          },
        ],
        note: '第三方应用的平台、价格和功能经常变化。决定之前，请在各项目自己的页面上核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合使用Whispy的人',
        items: [
          '**记者和研究人员。** 据开发者称，访谈内容留在电脑上。',
          '**学生。** 免费核心功能可处理讲座和研讨课。',
          '**多人录音。** Pro增加可重命名和合并的说话人标签。',
          '**偏好一次付费的人。** 订阅之外还有79美元的买断许可。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '不适合使用Whispy的人',
        items: [
          '**Intel Mac、Linux、iPhone和Android用户。** 只提供Apple Silicon Mac和Windows x64版本。',
          '**需要可审计软件的人。** 代码闭源，隐私说法无法检验。',
          '**需要实时转录的人。** 应用处理的是已录好的文件；实时会议只在开发者的规划中。',
          '**想要完全免费软件的人。** Buzz免费且开源。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Whispy可以离线使用吗？',
            a: '官网称，开始使用后就不需要联网。首次运行需要联网来下载应用及其语音模型。PromptQuorum没有测试离线使用。',
          },
          {
            q: 'Whispy有云端模式吗？',
            a: '开发者称它完全没有云端模式。Pro的一项功能，通过YouTube或社交媒体链接转录，是从在线地址开始的；官网没有解释它是如何工作的。',
          },
          {
            q: '有浏览器版吗？',
            a: '有。免费的浏览器版在浏览器标签页中运行较小的Whisper模型，无需账户；开发者称首次加载之后可离线使用。',
          },
          {
            q: '谁开发了Whispy？',
            a: '据他发给PromptQuorum的说明，是Fawaz Sheik。官网没有列出公司或所在地。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '如果你在Mac或Windows电脑上转录录音，并希望据开发者称这项工作在你自己的电脑上完成，有免费的核心功能，再加一个用于说话人标签的可选Pro套餐，Whispy是个合适的选择。它有近期发布的版本、买断选项，还有可快速试用的浏览器版。',
          '需要注意的是成熟度和可验证性：0.1.x的版本号、闭源代码、PromptQuorum无法核实的隐私和准确度说法，以及没有Intel Mac、Linux或移动版应用。付费升级Pro之前，请先试用免费核心功能。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Whispy官网](https://usewhispy.com) — 功能和下载流程。',
          '[价格页面](https://usewhispy.com/pricing) — 套餐和Pro功能。',
          '[隐私政策](https://usewhispy.com/privacy) — 数据处理，最后更新于2026年6月8日。',
          '[基准测试页面](https://usewhispy.com/benchmarks) — 开发者自己的模型评分。',
          '[GitHub Releases](https://github.com/fzsheik/whispy-releases/releases) — 安装包文件和版本0.1.11的发布日期。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地语音和音频工具对比](/zh/power-local-llm/local-llm-voice-audio-compared) — 文字转语音、语音转文字和语音代理并排比较。',
          '[MacWhisper评测](/zh/power-local-llm/macwhisper-review) — 一款Mac转录应用。',
          '[Buzz评测](/zh/power-local-llm/buzz-captions-review) — 一款免费开源的转录和字幕应用。',
          '[Sablate评测](/zh/power-local-llm/sablate-review) — 适用于Mac和Windows的本地字幕应用。',
          '[Whisper.cpp评测](/zh/power-local-llm/whisper-cpp-review) — 许多本地Whisper应用背后的开放引擎。',
          '[完整的Local LLM Software Directory](/zh/directory) — 涵盖多个平台的本地AI工具的更广泛目录。',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-20',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whispy-review-hero-es.webp',
    title: 'Reseña de Whispy: transcripción de audio privada para Mac y Windows',
    seoTitle: 'Reseña de Whispy: transcripción privada en Mac y PC',
    intro: 'Whispy es una app de transcripción para Mac y Windows que puedes empezar a usar gratis: sueltas una entrevista, una clase o la grabación de una reunión y escribe la transcripción en tu propio ordenador, con etiquetas de hablante opcionales en el plan de pago Pro. Esta reseña explica qué hace, cómo se instala, cuánto cuesta, qué dice su política de privacidad y dónde se queda corta. Se basa en las páginas públicas del fabricante, en su página de versiones y en una nota del propio fabricante, no en una prueba práctica.',
    metaDescription: 'Reseña de Whispy: app para Mac y Windows que, según su fabricante, transcribe audio en tu equipo, sin nube. Base gratis; Pro desde $8/mes. No probada.',
    twitterDescription: 'Reseña de Whispy: transcripción de audio privada para Mac y Windows con modelos locales y exportación a TXT/SRT. Precio, privacidad, límites y alternativas.',
    audience: 'Periodistas, investigadores, estudiantes y cualquiera que transcriba grabaciones sensibles en un Mac o un PC con Windows — cubre precio, instalación, modelos, privacidad, límites y alternativas.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Whispy review',
    targetKeywords: [
      'reseña whispy',
      'whispy transcripción',
      'transcripción de audio privada mac windows',
      'app de transcripción local',
      'voz a texto sin conexión en el escritorio',
      'transcribir entrevistas sin la nube',
      'etiquetas de hablante transcripción local',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: '**Whispy es una app de transcripción de código cerrado para Mac y Windows que convierte archivos de audio en texto en tu propio ordenador, y su fabricante afirma que no tiene ningún modo en la nube.** La app base es gratuita; las etiquetas de hablante y el procesamiento por lotes están en un plan Pro de pago. La versión más reciente es la 0.1.11, del 17 de noviembre de 2026. Esta reseña se basa en la web pública del fabricante, su política de privacidad, su página de versiones y una nota del fabricante, no en una prueba práctica.',
    quickAnswerTop: {
      es: {
        question: '¿Es Whispy una app de transcripción local?',
        answer: 'Según su fabricante y su política de privacidad, sí: la transcripción se ejecuta en tu Mac o PC con Windows y el audio no se sube a Whispy. Internet se sigue usando para descargar la app y su modelo de voz, y para la cuenta, los pagos y los diagnósticos que describe la política de privacidad. El código es cerrado y PromptQuorum no inspeccionó el tráfico de red, así que la afirmación es del propio fabricante.',
        bullets: [
          'Suelta un archivo de audio o vídeo, elige un modelo rápido o uno preciso, y lee, copia o exporta la transcripción.',
          'La transcripción básica, una biblioteca de transcripciones, las notas y la exportación a TXT o SRT son gratuitas.',
          'Solo Mac con Apple Silicon y Windows de 64 bits; el modelo de voz necesita unos 2 GB de espacio en disco.',
          'También existe una versión gratuita en el navegador, con modelos Whisper más pequeños.',
          'El proyecto es joven: el número de versión es 0.1.11.',
        ],
        updatedDate: '2026-11-20',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Conseguir Whispy', anchor: 'get-it' },
      { label: 'Whispy de un vistazo', anchor: 'at-a-glance' },
      { label: 'Qué es Whispy', anchor: 'what-is-whispy' },
      { label: 'Primeros pasos', anchor: 'how-to-get-started' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Modelos y hardware', anchor: 'models-hardware' },
      { label: 'Privacidad, licencia y coste', anchor: 'privacy' },
      { label: 'La palabra del desarrollador', anchor: 'from-the-maker' },
      { label: 'Equilibrio: ventajas y limitaciones', anchor: 'tradeoffs' },
      { label: 'Whispy frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar Whispy', anchor: 'who-should-use' },
      { label: 'Quién no debería usar Whispy', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
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
            text: 'Whispy es una app de transcripción para Mac y Windows que, según su fabricante, convierte grabaciones en texto en tu propio ordenador en lugar de en un servicio en la nube.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en un mecanógrafo que vive dentro de tu ordenador: le entregas la grabación y el texto vuelve sin que el audio viaje nunca al servidor de una empresa.',
          },
        ],
        items: [
          'Afirmación de uso local: el fabricante dice que no hay modo en la nube y la política de privacidad dice que el audio no se sube; la cuenta, los pagos y los diagnósticos siguen usando servicios en línea.',
          'Licencia: propietaria y de código cerrado; el repositorio de GitHub enlazado solo aloja instaladores de las versiones.',
          'Precio: una app base gratuita, con detección de hablantes y procesamiento por lotes en Pro.',
          'Mantenimiento: la versión 0.1.11 salió el 17 de noviembre de 2026, así que el proyecto se actualiza de forma activa, aunque aún está en una fase temprana.',
          'Carencias: sin Mac con Intel, Linux ni app móvil, y sin prueba práctica de PromptQuorum.',
        ],
      },
      getItWhispy: {
        id: 'get-it',
        title: 'Conseguir Whispy',
        content: [
          '**Whispy se instala como cualquier app de escritorio, no hace falta terminal.** Descarga el instalador para tu sistema desde la web oficial; el modelo de voz se descarga durante la configuración.',
        ],
        columns: ['Plataforma', 'Dónde conseguirla'],
        rows: [
          {
            Plataforma: 'Mac',
            'Dónde conseguirla': '[Descargar para Mac](https://usewhispy.com/download) — .dmg (unos 72 MB), Apple Silicon (M1 o posterior), macOS 11 o posterior',
          },
          {
            Plataforma: 'Windows',
            'Dónde conseguirla': '[Descargar para Windows](https://usewhispy.com/download) — instalador .exe (unos 100 MB), Windows 10 u 11, Intel o AMD de 64 bits',
          },
          {
            Plataforma: 'Navegador',
            'Dónde conseguirla': '[Probar Whispy en el navegador](https://usewhispy.com) — gratis, sin cuenta, modelos Whisper más pequeños',
          },
          {
            Plataforma: 'Notas de versión',
            'Dónde conseguirla': '[Versiones de GitHub](https://github.com/fzsheik/whispy-releases/releases)',
          },
          {
            Plataforma: 'Sitio web',
            'Dónde conseguirla': '[usewhispy.com](https://usewhispy.com)',
          },
          {
            Plataforma: 'Política de privacidad',
            'Dónde conseguirla': '[Política de privacidad de Whispy](https://usewhispy.com/privacy)',
          },
          {
            Plataforma: 'Código fuente',
            'Dónde conseguirla': 'Código cerrado; el repositorio de GitHub solo aloja instaladores',
          },
        ],
        note: 'La página de descarga solo lista Mac con Apple Silicon y Windows x64; no se ofrece ninguna compilación para Mac con Intel, Linux, iOS ni Android.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Whispy de un vistazo',
        columns: ['Atributo', 'Whispy'],
        rows: [
          { Atributo: 'Plataforma', Whispy: 'Mac con Apple Silicon (macOS 11+), Windows 10/11 x64 y una versión en el navegador' },
          { Atributo: 'Precio', Whispy: 'Base gratuita; Pro $12/mes, $8/mes facturado anualmente ($96) o $79 único' },
          { Atributo: 'Licencia', Whispy: 'Propietaria, código cerrado' },
          { Atributo: 'Ejecución', Whispy: 'En tu ordenador; internet para la descarga, la cuenta y los pagos' },
          { Atributo: 'Idiomas', Whispy: 'La web no los cuenta; los modelos cubren 25 idiomas europeos además de chino, japonés y coreano' },
          { Atributo: 'Etiquetas de hablante', Whispy: 'Sí, en el plan Pro' },
          { Atributo: 'Transcripción en tiempo real', Whispy: 'No indicado; la app trabaja con archivos grabados' },
          { Atributo: 'Usable solo con CPU', Whispy: 'No indicado' },
          { Atributo: 'Servidor de API local', Whispy: 'No indicado' },
        ],
        note: 'Los atributos siguen la comparación de voz a texto del Local LLM Software Directory. Que la web no mencione algo significa desconocido, no no compatible.',
      },
      whatIsWhispy: {
        id: 'what-is-whispy',
        title: 'Qué es Whispy',
        content: [
          '**Whispy es un transcriptor de archivos de audio, no una herramienta de dictado ni un bot de reuniones.** Le das una grabación que ya tienes, como una nota de voz, una entrevista o una clase, y devuelve una transcripción con marcas de tiempo que puedes editar, copiar o exportar.',
          'El fabricante es Fawaz Sheik, que dice que la creó porque las grabaciones que más necesitan transcribir las personas suelen ser las que no deberían subir a ningún sitio. La web cita a periodistas, investigadores, abogados, terapeutas y estudiantes como su público.',
          'Esta reseña se basa en la web, la política de privacidad, la página de pruebas comparativas, la página de versiones de GitHub y la nota del fabricante que figura más abajo. No hubo prueba práctica, así que aquí no se valoran la precisión, la velocidad ni la estabilidad.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeros pasos',
        content: [
          '**La puesta en marcha es una instalación, una descarga de modelo y soltar un archivo.** Los pasos siguen la web.',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Descarga el .dmg para Mac o el .exe para Windows desde la [página de descarga](https://usewhispy.com/download); la versión base gratuita no requiere cuenta.',
          },
          {
            title: 'Deja que se descargue el modelo de voz',
            whyItMatters: 'La nota del instalador pide unos 2 GB de espacio libre para el modelo que se descarga durante la configuración.',
          },
          {
            title: 'Elige la precisión',
            whyItMatters: 'La web describe una elección entre una transcripción rápida para revisiones puntuales y una muy precisa para notas detalladas; la elección del modelo está en los ajustes.',
          },
          {
            title: 'Suelta tu archivo y exporta',
            whyItMatters: 'Arrastra una nota de voz, la grabación de una reunión o una entrevista, y luego copia el texto o expórtalo como TXT o SRT.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El conjunto de funciones se centra en convertir grabaciones privadas en texto utilizable.** Todo lo siguiente procede de la web y de su página de precios.',
        ],
        items: [
          '**Biblioteca de transcripciones y notas.** Las transcripciones y las notas se guardan en tu propio disco.',
          '**Exportaciones.** El TXT sin formato y los subtítulos SRT son gratuitos; también puedes enviar una transcripción a ChatGPT, Claude o Gemini con tus propias instrucciones, y tú decides qué se comparte.',
          '**Enviar desde el móvil.** Escanea un código QR y envía grabaciones desde tu móvil por tu propia red wifi; el plan gratuito admite un archivo cada vez.',
          '**Palabras personalizadas.** Añade nombres y jerga antes de transcribir; la web dice que funciona con Whisper y Qwen3-ASR.',
          '**Funciones Pro.** Procesamiento por lotes, detección de hablantes y edición de hablantes (renombrar o fusionar), exportación automática y transcripción desde un enlace de YouTube o de redes sociales.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelos y hardware',
        content: [
          '**La app de escritorio ofrece varios modelos de voz locales.** La página de pruebas comparativas cita Whisper Large v3 Turbo, Parakeet Ultra (25 idiomas europeos) y Qwen3-ASR (chino, japonés, coreano y más), y la web dice que eliges el modelo para tu idioma en los ajustes. La versión del navegador usa los modelos Whisper Tiny, Base y Small, más pequeños.',
          'Se describe que la detección de hablantes se ejecuta en local. La política de privacidad cita modelos pyannote; un aviso de novedades de la app cita NVIDIA Nemotron-3, hasta 8 hablantes, con un uso de prueba gratuito.',
          'La web publica su propia página de pruebas comparativas, el Whispy Index, que puntúa tres modelos con los conjuntos de prueba en inglés, europeos y asiáticos del fabricante. PromptQuorum no reprodujo esas puntuaciones. No se indica ningún requisito de RAM; el instalador pide unos 2 GB de disco para el modelo.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad, licencia y coste',
        content: [
          '**La política de privacidad dice que el audio, las transcripciones y las notas se quedan en tu dispositivo y que Whispy no tiene ningún servidor que los reciba.** La política se actualizó por última vez el 8 de junio de 2026. El único dato personal que dice que Whispy conserva es el correo electrónico de la cuenta, necesaria para Pro, y el estado de la suscripción.',
          'La política también nombra los servicios que hay detrás: Supabase para la autenticación, Polar para los pagos, PostHog para analítica sin cookies y Sentry para el seguimiento de errores. Parte del texto de marketing dice «sin cuentas» y «sin seguimiento»; léelo junto con la política, que describe la versión base gratuita sin cuenta y las herramientas de analítica y diagnóstico. El código es cerrado y PromptQuorum no examinó el tráfico de red, así que estas afirmaciones son del propio fabricante.',
          'El plan gratuito incluye la app de escritorio, la versión del navegador, la biblioteca y la exportación a TXT y SRT, y la página de precios dice que no hay prueba gratuita de Pro. Pro cuesta $12 al mes, $8 al mes facturado anualmente ($96) o $79 una sola vez. La web no dice si los precios incluyen impuestos, así que compruébalo al pagar.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'La palabra del desarrollador',
        content: [
          'Fawaz Sheik, el creador de Whispy, envió esta nota a PromptQuorum. Es el relato del propio fabricante, no una evaluación independiente de PromptQuorum, y PromptQuorum no ha ejecutado la app.',
          '«Creo que las personas deberían disfrutar del poder de la IA sin verse obligadas a renunciar a sus datos. Vivimos en una época en la que tu historial y tus datos personales valen, posiblemente, más que tú, y entiendo que esos datos son lo que entrena los modelos. No deberíamos vernos obligados a aceptar ese compromiso cuando existen opciones seguras, privadas y locales.»',
          '«Por eso creé Whispy. Las grabaciones que más necesitan transcribir las personas, como entrevistas, clases, reuniones y llamadas, suelen ser las que no deberían subir a ningún sitio, y la mayoría de las herramientas te piden que cambies privacidad por precisión. Whispy no tiene ningún modo en la nube. Tu audio nunca sale de tu ordenador y la transcripción se ejecuta en tu propio Mac o PC con Windows.»',
          '«La principal ventaja es un texto preciso en tu idioma, con quién dijo qué. Puedes elegir entre varios modelos locales según lo rápido o preciso que lo quieras, añadir etiquetas de hablante a grabaciones largas con varias voces, subir una grabación desde tu móvil y exportar a TXT o SRT. Con él ya se han transcrito más de 12 000 horas de audio.»',
          '«Mi objetivo con Whispy es crear la transcripción privada más precisa que puedas conseguir en tu propio idioma y luego pasar de las grabaciones a las reuniones en directo y las notas, siempre sin salir de tu dispositivo.»',
        ],
        note: '— Fawaz Sheik, creador de Whispy',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Equilibrio: ventajas y limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / advertencia'],
        rows: [
          {
            Ventaja: 'Transcripción en tu ordenador',
            'Qué significa en el uso real': 'Las grabaciones se procesan en el equipo, sin subir audio a Whispy.',
            'Limitación / advertencia': 'Código cerrado, así que la afirmación no se puede comprobar; internet se sigue usando para la descarga, la cuenta y los pagos.',
          },
          {
            Ventaja: 'App base gratuita',
            'Qué significa en el uso real': 'La transcripción, la biblioteca, las notas y la exportación a TXT/SRT no cuestan nada.',
            'Limitación / advertencia': 'Las etiquetas de hablante y el procesamiento por lotes requieren Pro.',
          },
          {
            Ventaja: 'Varios modelos locales',
            'Qué significa en el uso real': 'Elige un modelo más rápido o más preciso, con opciones para idiomas asiáticos y europeos.',
            'Limitación / advertencia': 'Aquí no se reprodujo ninguna cifra de precisión ni de velocidad; las pruebas comparativas del propio fabricante no están verificadas.',
          },
          {
            Ventaja: 'Enviar desde el móvil',
            'Qué significa en el uso real': 'Pasa una grabación al ordenador por tu propia red wifi.',
            'Limitación / advertencia': 'El plan gratuito admite un archivo cada vez.',
          },
          {
            Ventaja: 'Opción vitalicia',
            'Qué significa en el uso real': 'Una compra única de $79 evita la suscripción.',
            'Limitación / advertencia': 'Sin prueba gratuita de Pro.',
          },
          {
            Ventaja: 'Desarrollo activo',
            'Qué significa en el uso real': 'La versión 0.1.11 salió el 17 de noviembre de 2026.',
            'Limitación / advertencia': 'Un número 0.1.x indica un producto temprano; sin Mac con Intel, Linux ni app móvil.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Whispy frente a alternativas',
        content: [
          'Estas son las herramientas de transcripción de archivos más cercanas del directorio: una app de transcripción para Mac, una app gratuita de código abierto para tres sistemas de escritorio y una app de subtítulos para Mac y Windows.',
        ],
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Papel', 'Diferencia clave'],
        rows: [
          {
            App: 'Whispy',
            Plataformas: 'Mac, Windows, navegador',
            'Precio y licencia': 'Base gratuita, Pro desde $8/mes o $79 único, propietaria',
            Papel: 'Transcripción privada de archivos',
            'Diferencia clave': 'Modelos locales con etiquetas de hablante en Pro; código cerrado',
          },
          {
            App: '[MacWhisper](/es/power-local-llm/macwhisper-review)',
            Plataformas: 'macOS',
            'Precio y licencia': 'Freemium, propietaria',
            Papel: 'App de transcripción para Mac',
            'Diferencia clave': 'Solo Mac y con más trayectoria',
          },
          {
            App: '[Buzz](/es/power-local-llm/buzz-captions-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Precio y licencia': 'Gratis, MIT',
            Papel: 'Transcripción y subtítulos',
            'Diferencia clave': 'Código abierto y gratuita; añade Linux',
          },
          {
            App: '[Sablate](/es/power-local-llm/sablate-review)',
            Plataformas: 'Windows, Mac',
            'Precio y licencia': 'Freemium, propietaria',
            Papel: 'Flujo de trabajo de subtítulos',
            'Diferencia clave': 'Añade traducción, edición e incrustación de subtítulos',
          },
        ],
        note: 'Las plataformas, precios y funciones de las apps de terceros cambian con frecuencia. Verifica los detalles actuales en la página de cada proyecto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar Whispy',
        items: [
          '**Periodistas e investigadores.** Las entrevistas se quedan en el ordenador, según el fabricante.',
          '**Estudiantes.** Una base gratuita sirve para clases y seminarios.',
          '**Grabaciones con varias voces.** Pro añade etiquetas de hablante que puedes renombrar y fusionar.',
          '**Compradores que prefieren pagar una vez.** Existe una licencia vitalicia de $79 junto a las suscripciones.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Whispy',
        items: [
          '**Usuarios de Mac con Intel, Linux, iPhone y Android.** Solo se ofrecen compilaciones para Mac con Apple Silicon y Windows x64.',
          '**Quien necesite software auditable.** El código es cerrado y las afirmaciones de privacidad no se pueden inspeccionar.',
          '**Quien necesite transcripción en directo.** La app trabaja con archivos grabados; las reuniones en directo solo figuran en la hoja de ruta del fabricante.',
          '**Quien quiera software totalmente gratuito.** Buzz es gratuita y de código abierto.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona Whispy sin conexión?',
            a: 'La web dice que, una vez que empiezas a usarla, no necesitas conexión a internet. La primera ejecución la necesita para descargar la app y su modelo de voz. PromptQuorum no la probó sin conexión.',
          },
          {
            q: '¿Tiene Whispy un modo en la nube?',
            a: 'El fabricante dice que no tiene ningún modo en la nube. Una función Pro, transcribir desde un enlace de YouTube o de redes sociales, parte de una dirección en línea; la web no explica cómo funciona.',
          },
          {
            q: '¿Hay una versión para el navegador?',
            a: 'Sí. La versión gratuita para el navegador ejecuta modelos Whisper más pequeños en la pestaña y no requiere cuenta; el fabricante dice que funciona sin conexión después de la primera carga.',
          },
          {
            q: '¿Quién hace Whispy?',
            a: 'Fawaz Sheik, según su nota a PromptQuorum. La web no nombra ninguna empresa ni ubicación.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'Whispy encaja si transcribes grabaciones en un Mac o PC con Windows y quieres, según el fabricante, que el trabajo se haga en tu propio ordenador, con una base gratuita y un plan Pro opcional para las etiquetas de hablante. Tiene una versión reciente, una opción vitalicia y una versión para el navegador con la que probarla rápido.',
          'Las advertencias son la madurez y la verificabilidad: un número de versión 0.1.x, código cerrado, afirmaciones de privacidad y de precisión que PromptQuorum no pudo comprobar, y sin Mac con Intel, Linux ni app móvil. Prueba la versión base gratuita antes de pagar por Pro.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Web de Whispy](https://usewhispy.com) — funciones y proceso de descarga.',
          '[Página de precios](https://usewhispy.com/pricing) — planes y funciones Pro.',
          '[Política de privacidad](https://usewhispy.com/privacy) — tratamiento de datos, actualizada por última vez el 8 de junio de 2026.',
          '[Página de pruebas comparativas](https://usewhispy.com/benchmarks) — las puntuaciones de modelos del propio fabricante.',
          '[Versiones de GitHub](https://github.com/fzsheik/whispy-releases/releases) — archivos del instalador y fecha de lanzamiento de la versión 0.1.11.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Herramientas locales de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — texto a voz, voz a texto y agentes de voz lado a lado.',
          '[Reseña de MacWhisper](/es/power-local-llm/macwhisper-review) — una app de transcripción para Mac.',
          '[Reseña de Buzz](/es/power-local-llm/buzz-captions-review) — una app gratuita y de código abierto de transcripción y subtítulos.',
          '[Reseña de Sablate](/es/power-local-llm/sablate-review) — una app local de subtítulos para Mac y Windows.',
          '[Reseña de Whisper.cpp](/es/power-local-llm/whisper-cpp-review) — el motor abierto detrás de muchas apps locales de Whisper.',
          '[El Local LLM Software Directory completo](/es/directory) — un directorio más amplio de herramientas de IA local para todas las plataformas.',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-20',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whispy-review-hero-pt.webp',
    title: 'Análise do Whispy: transcrição de áudio privada para Mac e Windows',
    seoTitle: 'Análise do Whispy: transcrição privada no Mac e no PC',
    intro: 'O Whispy é um app de transcrição para Mac e Windows que você pode começar a usar de graça: você solta uma entrevista, uma aula ou a gravação de uma reunião e ele escreve a transcrição no seu próprio computador, com rótulos de falante opcionais no plano pago Pro. Esta análise explica o que ele faz, como se instala, quanto custa, o que diz a política de privacidade e onde ele deixa a desejar. Ela se baseia nas páginas públicas do fabricante, na página de versões e em uma nota do próprio fabricante, não em um teste prático.',
    metaDescription: 'Análise do Whispy: app para Mac e Windows que, segundo o fabricante, transcreve áudio no seu PC, sem nuvem. Base grátis; Pro de US$ 8/mês. Não testado.',
    twitterDescription: 'Análise do Whispy: transcrição de áudio privada para Mac e Windows com modelos locais e exportação em TXT/SRT. Preço, privacidade, limites e alternativas.',
    audience: 'Jornalistas, pesquisadores, estudantes e qualquer pessoa que transcreva gravações sensíveis em um Mac ou PC com Windows — cobre preço, instalação, modelos, privacidade, limites e alternativas.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Whispy review',
    targetKeywords: [
      'análise whispy',
      'whispy transcrição',
      'transcrição de áudio privada mac windows',
      'app de transcrição local',
      'fala para texto offline no desktop',
      'transcrever entrevistas sem nuvem',
      'rótulos de falante transcrição local',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: '**O Whispy é um app de transcrição de código fechado para Mac e Windows que transforma arquivos de áudio em texto no seu próprio computador, e o fabricante diz que ele não tem nenhum modo na nuvem.** O app base é gratuito; os rótulos de falante e o processamento em lote ficam em um plano Pro pago. A versão mais recente é a 0.1.11, de 17 de novembro de 2026. Esta análise se baseia no site público do fabricante, na política de privacidade, na página de versões e em uma nota do fabricante, não em um teste prático.',
    quickAnswerTop: {
      pt: {
        question: 'O Whispy é um app de transcrição local?',
        answer: 'Segundo o fabricante e a política de privacidade, sim: a transcrição roda no seu Mac ou PC com Windows e o áudio não é enviado ao Whispy. A internet ainda é usada para baixar o app e o modelo de fala, e para a conta, os pagamentos e os diagnósticos descritos na política de privacidade. O código é fechado e o PromptQuorum não inspecionou o tráfego de rede, então a afirmação é do próprio fabricante.',
        bullets: [
          'Solte um arquivo de áudio ou vídeo, escolha um modelo rápido ou um preciso, e leia, copie ou exporte a transcrição.',
          'A transcrição básica, uma biblioteca de transcrições, as notas e a exportação em TXT ou SRT são gratuitas.',
          'Apenas Macs com Apple Silicon e Windows de 64 bits; o modelo de fala precisa de cerca de 2 GB de espaço em disco.',
          'Também existe uma versão gratuita no navegador, com modelos Whisper menores.',
          'O projeto é jovem: o número da versão é 0.1.11.',
        ],
        updatedDate: '2026-11-20',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Obter o Whispy', anchor: 'get-it' },
      { label: 'Whispy em resumo', anchor: 'at-a-glance' },
      { label: 'O que é o Whispy', anchor: 'what-is-whispy' },
      { label: 'Primeiros passos', anchor: 'how-to-get-started' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Modelos e hardware', anchor: 'models-hardware' },
      { label: 'Privacidade, licença e custo', anchor: 'privacy' },
      { label: 'A palavra do desenvolvedor', anchor: 'from-the-maker' },
      { label: 'Prós e contras', anchor: 'tradeoffs' },
      { label: 'Whispy e as alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem o Whispy serve', anchor: 'who-should-use' },
      { label: 'Para quem o Whispy não serve', anchor: 'who-should-not-use' },
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
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Whispy é um app de transcrição para Mac e Windows que, segundo o fabricante, transforma gravações em texto no seu próprio computador em vez de em um serviço na nuvem.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em um digitador que mora dentro do seu computador: você entrega a gravação e o texto volta sem que o áudio viaje até o servidor de uma empresa.',
          },
        ],
        items: [
          'Afirmação de uso local: o fabricante diz que não há modo na nuvem e a política de privacidade diz que o áudio não é enviado; a conta, os pagamentos e os diagnósticos ainda usam serviços online.',
          'Licença: proprietária e de código fechado; o repositório do GitHub vinculado apenas hospeda instaladores das versões.',
          'Preço: um app base gratuito, com detecção de falantes e processamento em lote no Pro.',
          'Manutenção: a versão 0.1.11 saiu em 17 de novembro de 2026, então o projeto é atualizado ativamente, embora ainda esteja no começo.',
          'Lacunas: sem Mac com Intel, Linux nem app para celular, e sem teste prático do PromptQuorum.',
        ],
      },
      getItWhispy: {
        id: 'get-it',
        title: 'Obter o Whispy',
        content: [
          '**O Whispy se instala como qualquer app de desktop, sem precisar de terminal.** Baixe o instalador para o seu sistema no site oficial; o modelo de fala é baixado durante a configuração.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            Plataforma: 'Mac',
            'Onde obter': '[Baixar para Mac](https://usewhispy.com/download) — .dmg (cerca de 72 MB), Apple Silicon (M1 ou mais recente), macOS 11 ou mais recente',
          },
          {
            Plataforma: 'Windows',
            'Onde obter': '[Baixar para Windows](https://usewhispy.com/download) — instalador .exe (cerca de 100 MB), Windows 10 ou 11, Intel ou AMD de 64 bits',
          },
          {
            Plataforma: 'Navegador',
            'Onde obter': '[Experimentar o Whispy no navegador](https://usewhispy.com) — grátis, sem conta, modelos Whisper menores',
          },
          {
            Plataforma: 'Notas de versão',
            'Onde obter': '[Versões no GitHub](https://github.com/fzsheik/whispy-releases/releases)',
          },
          {
            Plataforma: 'Site',
            'Onde obter': '[usewhispy.com](https://usewhispy.com)',
          },
          {
            Plataforma: 'Política de privacidade',
            'Onde obter': '[Política de privacidade do Whispy](https://usewhispy.com/privacy)',
          },
          {
            Plataforma: 'Código-fonte',
            'Onde obter': 'Código fechado; o repositório do GitHub apenas hospeda instaladores',
          },
        ],
        note: 'A página de download lista apenas Macs com Apple Silicon e Windows x64; não há versão para Mac com Intel, Linux, iOS ou Android.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Whispy em resumo',
        columns: ['Atributo', 'Whispy'],
        rows: [
          { Atributo: 'Plataforma', Whispy: 'Mac com Apple Silicon (macOS 11+), Windows 10/11 x64 e uma versão no navegador' },
          { Atributo: 'Preço', Whispy: 'Base gratuita; Pro US$ 12/mês, US$ 8/mês cobrado anualmente (US$ 96) ou US$ 79 único' },
          { Atributo: 'Licença', Whispy: 'Proprietária, código fechado' },
          { Atributo: 'Execução', Whispy: 'No seu computador; internet para o download, a conta e os pagamentos' },
          { Atributo: 'Idiomas', Whispy: 'O site não os contabiliza; os modelos cobrem 25 idiomas europeus além de chinês, japonês e coreano' },
          { Atributo: 'Rótulos de falante', Whispy: 'Sim, no plano Pro' },
          { Atributo: 'Transcrição em tempo real', Whispy: 'Não informado; o app trabalha com arquivos gravados' },
          { Atributo: 'Utilizável só com CPU', Whispy: 'Não informado' },
          { Atributo: 'Servidor de API local', Whispy: 'Não informado' },
        ],
        note: 'Os atributos seguem a comparação de voz para texto usada no Diretório de Software de LLM Local. Uma informação ausente no site significa desconhecido, não sem suporte.',
      },
      whatIsWhispy: {
        id: 'what-is-whispy',
        title: 'O que é o Whispy',
        content: [
          '**O Whispy é um transcritor de arquivos de áudio, não uma ferramenta de ditado nem um bot de reuniões.** Você entrega uma gravação que já tem, como um memorando de voz, uma entrevista ou uma aula, e ele devolve uma transcrição com marcações de tempo que você pode editar, copiar ou exportar.',
          'O fabricante é Fawaz Sheik, que diz tê-lo criado porque as gravações que as pessoas mais precisam transcrever costumam ser as que não deveriam enviar a lugar nenhum. O site cita jornalistas, pesquisadores, advogados, terapeutas e estudantes como seu público.',
          'Esta análise se baseia no site, na política de privacidade, na página de benchmarks, na página de versões do GitHub e na nota do fabricante abaixo. Não houve teste prático, então precisão, velocidade e estabilidade não são avaliadas aqui.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeiros passos',
        content: [
          '**A configuração é uma instalação, um download de modelo e soltar um arquivo.** Os passos seguem o site.',
        ],
        numberedItems: [
          {
            title: 'Instale o app',
            whyItMatters: 'Baixe o .dmg para Mac ou o .exe para Windows na [página de download](https://usewhispy.com/download); o app base gratuito não exige conta.',
          },
          {
            title: 'Deixe o modelo de fala ser baixado',
            whyItMatters: 'A nota do instalador pede cerca de 2 GB de espaço livre para o modelo baixado durante a configuração.',
          },
          {
            title: 'Escolha a precisão',
            whyItMatters: 'O site descreve uma escolha entre uma transcrição rápida para revisões rápidas e uma muito precisa para anotações detalhadas; a escolha do modelo fica nas configurações.',
          },
          {
            title: 'Solte o arquivo e exporte',
            whyItMatters: 'Arraste um memorando de voz, a gravação de uma reunião ou uma entrevista, depois copie o texto ou exporte como TXT ou SRT.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O conjunto de recursos gira em torno de transformar gravações privadas em texto utilizável.** Tudo abaixo vem do site e da página de preços.',
        ],
        items: [
          '**Biblioteca de transcrições e notas.** As transcrições e as notas ficam no seu próprio disco.',
          '**Exportações.** TXT simples e legendas SRT são gratuitos; você também pode enviar uma transcrição ao ChatGPT, Claude ou Gemini com as suas próprias instruções, e você decide o que é compartilhado.',
          '**Enviar do celular.** Escaneie um QR code e envie gravações do celular pela sua própria rede Wi-Fi; o plano gratuito aceita um arquivo por vez.',
          '**Palavras personalizadas.** Adicione nomes e jargões antes de transcrever; o site diz que isso funciona com Whisper e Qwen3-ASR.',
          '**Recursos Pro.** Processamento em lote, detecção de falantes e edição de falantes (renomear ou mesclar), exportação automática e transcrição a partir de um link do YouTube ou de redes sociais.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelos e hardware',
        content: [
          '**O app de desktop oferece vários modelos de fala locais.** A página de benchmarks cita Whisper Large v3 Turbo, Parakeet Ultra (25 idiomas europeus) e Qwen3-ASR (chinês, japonês, coreano e mais), e o site diz que você escolhe o modelo do seu idioma nas configurações. A versão do navegador usa os modelos Whisper Tiny, Base e Small, menores.',
          'A detecção de falantes é descrita como executada localmente. A política de privacidade cita modelos pyannote; um aviso de novidades no app cita o NVIDIA Nemotron-3, até 8 falantes, com um uso de teste gratuito.',
          'O site publica sua própria página de benchmarks, o Whispy Index, que pontua três modelos nos conjuntos de teste em inglês, europeus e asiáticos do fabricante. O PromptQuorum não reproduziu essas pontuações. Nenhum requisito de RAM é informado; o instalador pede cerca de 2 GB de disco para o modelo.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade, licença e custo',
        content: [
          '**A política de privacidade diz que áudio, transcrições e notas ficam no seu dispositivo e que o Whispy não tem servidor que os receba.** A política foi atualizada pela última vez em 8 de junho de 2026. O único dado pessoal que ela diz que o Whispy mantém é o e-mail usado na conta, necessária para o Pro, e o status da assinatura.',
          'A política também nomeia os serviços por trás disso: Supabase para autenticação, Polar para pagamentos, PostHog para análises sem cookies e Sentry para rastreamento de erros. Parte do texto de marketing diz "sem contas" e "sem rastreamento"; leia-o junto com a política, que descreve o app base gratuito sem conta e as ferramentas de análise e diagnóstico. O código é fechado e o PromptQuorum não examinou o tráfego de rede, então essas afirmações são do próprio fabricante.',
          'O plano gratuito inclui o app de desktop, a versão do navegador, a biblioteca e a exportação em TXT e SRT, e a página de preços diz que não há teste grátis do Pro. O Pro custa US$ 12 por mês, US$ 8 por mês cobrado anualmente (US$ 96) ou US$ 79 uma única vez. O site não diz se os preços incluem impostos, então confira no checkout.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'A palavra do desenvolvedor',
        content: [
          'Fawaz Sheik, criador do Whispy, enviou esta nota ao PromptQuorum. É o relato do próprio fabricante, não uma avaliação independente do PromptQuorum, e o PromptQuorum não executou o app.',
          '“Acredito que as pessoas devem ter o poder da IA sem serem obrigadas a abrir mão dos seus dados. Vivemos numa era em que o seu histórico e os seus dados pessoais valem, possivelmente, mais do que você, e entendo que esses dados são o que treina os modelos. Não deveríamos ser obrigados a fazer esse sacrifício quando existem opções seguras, privadas e locais.”',
          '“Foi por isso que criei o Whispy. As gravações que as pessoas mais precisam transcrever, como entrevistas, aulas, reuniões e chamadas, costumam ser as que não deveriam enviar a lugar nenhum, e a maioria das ferramentas pede que você troque privacidade por precisão. O Whispy não tem nenhum modo na nuvem. O seu áudio nunca sai do seu computador, e a transcrição roda no seu próprio Mac ou PC com Windows.”',
          '“A principal vantagem é um texto preciso no seu idioma, com quem disse o quê. Você pode escolher entre vários modelos locais conforme queira mais rapidez ou mais precisão, adicionar rótulos de falante a gravações longas com várias vozes, enviar uma gravação do celular e exportar em TXT ou SRT. As pessoas já transcreveram mais de 12.000 horas de áudio com ele.”',
          '“Meu objetivo com o Whispy é criar a transcrição privada mais precisa que você pode ter no seu próprio idioma e depois evoluir das gravações para reuniões ao vivo e anotações, sempre sem sair do seu dispositivo.”',
        ],
        note: '— Fawaz Sheik, criador do Whispy',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras',
        columns: ['Vantagem', 'O que significa na prática', 'Limitação / ressalva'],
        rows: [
          {
            Vantagem: 'Transcrição no seu computador',
            'O que significa na prática': 'As gravações são processadas na máquina, sem envio de áudio ao Whispy.',
            'Limitação / ressalva': 'Código fechado, então a afirmação não pode ser verificada; a internet ainda é usada para o download, a conta e os pagamentos.',
          },
          {
            Vantagem: 'App base gratuito',
            'O que significa na prática': 'Transcrição, biblioteca, notas e exportação em TXT/SRT não custam nada.',
            'Limitação / ressalva': 'Rótulos de falante e processamento em lote exigem o Pro.',
          },
          {
            Vantagem: 'Vários modelos locais',
            'O que significa na prática': 'Escolha um modelo mais rápido ou mais preciso, incluindo opções para idiomas asiáticos e europeus.',
            'Limitação / ressalva': 'Nenhum número de precisão ou velocidade foi reproduzido aqui; os benchmarks do próprio fabricante não foram verificados.',
          },
          {
            Vantagem: 'Enviar do celular',
            'O que significa na prática': 'Leve uma gravação para o computador pela sua própria rede Wi-Fi.',
            'Limitação / ressalva': 'O plano gratuito aceita um arquivo por vez.',
          },
          {
            Vantagem: 'Opção vitalícia',
            'O que significa na prática': 'Uma compra única de US$ 79 evita a assinatura.',
            'Limitação / ressalva': 'Sem teste grátis do Pro.',
          },
          {
            Vantagem: 'Desenvolvimento ativo',
            'O que significa na prática': 'A versão 0.1.11 saiu em 17 de novembro de 2026.',
            'Limitação / ressalva': 'Um número 0.1.x indica um produto inicial; sem Mac com Intel, Linux nem app para celular.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Whispy e as alternativas',
        content: [
          'Estas são as ferramentas de transcrição de arquivos mais próximas do diretório: um app de transcrição para Mac, um app gratuito de código aberto para três sistemas de desktop e um app de legendas para Mac e Windows.',
        ],
        columns: ['App', 'Plataformas', 'Preço e licença', 'Função', 'Diferença principal'],
        rows: [
          {
            App: 'Whispy',
            Plataformas: 'Mac, Windows, navegador',
            'Preço e licença': 'Base gratuita, Pro a partir de US$ 8/mês ou US$ 79 único, proprietária',
            Função: 'Transcrição privada de arquivos',
            'Diferença principal': 'Modelos locais com rótulos de falante no Pro; código fechado',
          },
          {
            App: '[MacWhisper](/pt/power-local-llm/macwhisper-review)',
            Plataformas: 'macOS',
            'Preço e licença': 'Freemium, proprietária',
            Função: 'App de transcrição para Mac',
            'Diferença principal': 'Só para Mac e com mais histórico',
          },
          {
            App: '[Buzz](/pt/power-local-llm/buzz-captions-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Preço e licença': 'Grátis, MIT',
            Função: 'Transcrição e legendas',
            'Diferença principal': 'Código aberto e gratuito; inclui Linux',
          },
          {
            App: '[Sablate](/pt/power-local-llm/sablate-review)',
            Plataformas: 'Windows, Mac',
            'Preço e licença': 'Freemium, proprietária',
            Função: 'Fluxo de trabalho de legendas',
            'Diferença principal': 'Acrescenta tradução, edição e legendas gravadas no vídeo',
          },
        ],
        note: 'Plataformas, preços e recursos de apps de terceiros mudam com frequência. Confira os dados atuais na página de cada projeto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o Whispy serve',
        items: [
          '**Jornalistas e pesquisadores.** As entrevistas ficam no computador, segundo o fabricante.',
          '**Estudantes.** Uma base gratuita dá conta de aulas e seminários.',
          '**Gravações com várias vozes.** O Pro acrescenta rótulos de falante que você pode renomear e mesclar.',
          '**Quem prefere pagar uma vez.** Há uma licença vitalícia de US$ 79 ao lado das assinaturas.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o Whispy não serve',
        items: [
          '**Usuários de Mac com Intel, Linux, iPhone e Android.** Só há versões para Mac com Apple Silicon e Windows x64.',
          '**Quem precisa de software auditável.** O código é fechado e as afirmações de privacidade não podem ser inspecionadas.',
          '**Quem precisa de transcrição ao vivo.** O app trabalha com arquivos gravados; reuniões ao vivo estão apenas no plano futuro do fabricante.',
          '**Quem quer software totalmente gratuito.** O Buzz é gratuito e de código aberto.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Whispy funciona offline?',
            a: 'O site diz que, depois que você começa a usá-lo, não precisa de conexão com a internet. A primeira execução precisa de uma para baixar o app e o modelo de fala. O PromptQuorum não o testou offline.',
          },
          {
            q: 'O Whispy tem modo na nuvem?',
            a: 'O fabricante diz que ele não tem nenhum modo na nuvem. Um recurso Pro, transcrever a partir de um link do YouTube ou de redes sociais, parte de um endereço online; o site não explica como isso funciona.',
          },
          {
            q: 'Existe uma versão para navegador?',
            a: 'Sim. A versão gratuita para navegador executa modelos Whisper menores na aba e não exige conta; o fabricante diz que ela funciona offline depois do primeiro carregamento.',
          },
          {
            q: 'Quem faz o Whispy?',
            a: 'Fawaz Sheik, segundo a nota dele ao PromptQuorum. O site não nomeia nenhuma empresa nem local.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O Whispy é uma boa opção se você transcreve gravações em um Mac ou PC com Windows e quer, segundo o fabricante, que o trabalho seja feito no seu próprio computador, com uma base gratuita e um plano Pro opcional para rótulos de falante. Ele tem uma versão recente, uma opção vitalícia e uma versão para navegador para um teste rápido.',
          'As ressalvas são maturidade e verificabilidade: um número de versão 0.1.x, código fechado, afirmações de privacidade e de precisão que o PromptQuorum não pôde verificar, e nenhum app para Mac com Intel, Linux ou celular. Experimente o app base gratuito antes de pagar pelo Pro.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Whispy](https://usewhispy.com) — recursos e fluxo de download.',
          '[Página de preços](https://usewhispy.com/pricing) — planos e recursos Pro.',
          '[Política de privacidade](https://usewhispy.com/privacy) — tratamento de dados, atualizada pela última vez em 8 de junho de 2026.',
          '[Página de benchmarks](https://usewhispy.com/benchmarks) — as pontuações de modelos do próprio fabricante.',
          '[Versões no GitHub](https://github.com/fzsheik/whispy-releases/releases) — arquivos do instalador e data de lançamento da versão 0.1.11.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Ferramentas locais de voz e áudio comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — texto para fala, fala para texto e agentes de voz lado a lado.',
          '[Análise do MacWhisper](/pt/power-local-llm/macwhisper-review) — um app de transcrição para Mac.',
          '[Análise do Buzz](/pt/power-local-llm/buzz-captions-review) — um app gratuito e de código aberto de transcrição e legendas.',
          '[Análise do Sablate](/pt/power-local-llm/sablate-review) — um app local de legendas para Mac e Windows.',
          '[Análise do Whisper.cpp](/pt/power-local-llm/whisper-cpp-review) — o motor aberto por trás de muitos apps locais de Whisper.',
          '[O Diretório completo de Software de LLM Local](/pt/directory) — um diretório mais amplo de ferramentas de IA local em várias plataformas.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-20',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whispy-review-hero-ar.webp',
    title: 'مراجعة Whispy: تفريغ صوتي خاص لأجهزة Mac وWindows',
    seoTitle: 'مراجعة Whispy: تفريغ صوتي محلي وخاص لأجهزة Mac وWindows',
    intro: 'Whispy تطبيق تفريغ صوتي لأجهزة Mac وWindows يبدأ مجانيًا: تضع فيه تسجيل مقابلة أو محاضرة أو اجتماع فيكتب النص على حاسوبك، مع تمييز اختياري للمتحدثين في خطة Pro المدفوعة. تلخّص هذه المراجعة ما يفعله التطبيق وطريقة تثبيته وتكلفته وما تقوله سياسة الخصوصية وأين يقصّر. وهي تعتمد على صفحات المطوّر العامة وصفحة الإصدارات وملاحظة من المطوّر، وليس على اختبار عملي.',
    metaDescription: 'مراجعة Whispy: تطبيق لأجهزة Mac وWindows يفرّغ الصوت على حاسوبك دون وضع سحابي بحسب مطوّره. التطبيق الأساسي مجاني وPro من 8 USD شهريًا. لم يُختبر.',
    twitterDescription: 'مراجعة Whispy: تفريغ صوتي خاص لأجهزة Mac وWindows بنماذج محلية وتصدير TXT وSRT. السعر والخصوصية والحدود والبدائل.',
    audience: 'الصحفيون والباحثون والطلاب وكل من يفرّغ تسجيلات حساسة على جهاز Mac أو Windows — يغطي السعر والتثبيت والنماذج والخصوصية والحدود والبدائل.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Whispy review',
    targetKeywords: [
      'مراجعة whispy',
      'تفريغ whispy',
      'تفريغ صوتي خاص mac windows',
      'تطبيق تفريغ صوتي محلي',
      'تحويل الكلام إلى نص دون اتصال على سطح المكتب',
      'تفريغ المقابلات دون سحابة',
      'تمييز المتحدثين في التفريغ المحلي',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: '**Whispy تطبيق تفريغ صوتي مغلق المصدر لأجهزة Mac وWindows يحوّل ملفات الصوت إلى نص على حاسوبك، ويقول مطوّره إنه لا يملك وضعًا سحابيًا إطلاقًا.** التطبيق الأساسي مجاني؛ أما تمييز المتحدثين والمعالجة الدفعية فخلف خطة Pro المدفوعة. وأحدث إصدار هو 0.1.11 الصادر في 17 نوفمبر 2026. تعتمد هذه المراجعة على الموقع العام للمطوّر وسياسة الخصوصية وصفحة الإصدارات وملاحظة من المطوّر، وليس على اختبار عملي.',
    quickAnswerTop: {
      ar: {
        question: 'هل Whispy تطبيق تفريغ صوتي محلي؟',
        answer: 'بحسب مطوّره وسياسة الخصوصية نعم: يعمل التفريغ على جهاز Mac أو Windows لديك ولا يُرفع الصوت إلى Whispy. ويُستخدم الإنترنت مع ذلك لتنزيل التطبيق ونموذج الكلام، وللحساب والمدفوعات والتشخيصات التي تصفها سياسة الخصوصية. الشيفرة مغلقة ولم تفحص PromptQuorum حركة الشبكة، لذا فالادعاء من المطوّر نفسه.',
        bullets: [
          'ضع ملف صوت أو فيديو، واختر نموذجًا سريعًا أو دقيقًا، ثم اقرأ النص أو انسخه أو صدّره.',
          'التفريغ الأساسي ومكتبة النصوص والملاحظات والتصدير بصيغتي TXT وSRT مجانية.',
          'أجهزة Mac بمعالج Apple Silicon وWindows بمعالج 64 بت فقط؛ ويحتاج نموذج الكلام إلى نحو 2 GB من مساحة القرص.',
          'توجد أيضًا نسخة مجانية داخل المتصفح تستخدم نماذج Whisper أصغر.',
          'المشروع حديث: رقم الإصدار هو 0.1.11.',
        ],
        updatedDate: '2026-11-20',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'الحصول على Whispy', anchor: 'get-it' },
      { label: 'Whispy في لمحة', anchor: 'at-a-glance' },
      { label: 'ما هو Whispy', anchor: 'what-is-whispy' },
      { label: 'البدء', anchor: 'how-to-get-started' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'النماذج والعتاد', anchor: 'models-hardware' },
      { label: 'الخصوصية والترخيص والتكلفة', anchor: 'privacy' },
      { label: 'من مطوّر التطبيق', anchor: 'from-the-maker' },
      { label: 'المزايا والقيود', anchor: 'tradeoffs' },
      { label: 'Whispy مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'لمن يناسب Whispy', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب Whispy', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
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
            text: 'Whispy تطبيق تفريغ صوتي لأجهزة Mac وWindows يحوّل التسجيلات إلى نص على حاسوبك بدل خدمة سحابية، بحسب مطوّره.',
          },
          {
            type: 'plain-terms',
            text: 'فكّر فيه ككاتب على الآلة الكاتبة يجلس داخل حاسوبك: تسلّمه التسجيل فيعيد لك النص دون أن يسافر الصوت إلى خادم شركة.',
          },
        ],
        items: [
          'الادعاء المحلي: يقول المطوّر إنه لا يوجد وضع سحابي، وتقول سياسة الخصوصية إن الصوت لا يُرفع؛ ويظل الحساب والمدفوعات والتشخيصات تستخدم خدمات عبر الإنترنت.',
          'الترخيص: مملوك ومغلق المصدر؛ ومستودع GitHub المرتبط يستضيف مثبّتات الإصدارات فقط.',
          'السعر: تطبيق أساسي مجاني، مع تمييز المتحدثين والمعالجة الدفعية في Pro.',
          'الصيانة: صدر الإصدار 0.1.11 في 17 نوفمبر 2026، فالمشروع يُحدَّث بنشاط وإن كان ما زال في بداياته.',
          'الثغرات: لا نسخة لأجهزة Mac بمعالج Intel أو لنظام Linux أو للجوال، ولا اختبار عملي من PromptQuorum.',
        ],
      },
      getItWhispy: {
        id: 'get-it',
        title: 'الحصول على Whispy',
        content: [
          '**يُثبَّت Whispy مثل أي تطبيق مكتبي، ولا حاجة إلى الطرفية.** نزّل المثبّت المناسب لنظامك من الموقع الرسمي؛ ويُجلب نموذج الكلام أثناء الإعداد.',
        ],
        columns: [
          'المنصة',
          'مصدر الحصول',
        ],
        rows: [
          {
            'المنصة': 'Mac',
            'مصدر الحصول': '[التنزيل لـ Mac](https://usewhispy.com/download) — ملف .dmg (نحو 72 MB)، معالج Apple Silicon (M1 أو أحدث)، macOS 11 أو أحدث',
          },
          {
            'المنصة': 'Windows',
            'مصدر الحصول': '[التنزيل لـ Windows](https://usewhispy.com/download) — مثبّت .exe (نحو 100 MB)، Windows 10 أو 11، معالج Intel أو AMD بنظام 64 بت',
          },
          {
            'المنصة': 'المتصفح',
            'مصدر الحصول': '[جرّب Whispy في المتصفح](https://usewhispy.com) — مجاني، دون حساب، بنماذج Whisper أصغر',
          },
          {
            'المنصة': 'ملاحظات الإصدار',
            'مصدر الحصول': '[إصدارات GitHub](https://github.com/fzsheik/whispy-releases/releases)',
          },
          {
            'المنصة': 'الموقع',
            'مصدر الحصول': '[usewhispy.com](https://usewhispy.com)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مصدر الحصول': '[سياسة خصوصية Whispy](https://usewhispy.com/privacy)',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'مصدر الحصول': 'مغلق المصدر؛ ومستودع GitHub يستضيف مثبّتات الإصدارات فقط',
          },
        ],
        note: 'تعرض صفحة التنزيل أجهزة Mac بمعالج Apple Silicon وWindows x64 فقط؛ ولا تتوفر نسخة لأجهزة Mac بمعالج Intel أو لنظام Linux أو iOS أو Android.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Whispy في لمحة',
        columns: [
          'الخاصية',
          'Whispy',
        ],
        rows: [
          {
            'الخاصية': 'المنصة',
            'Whispy': 'Mac بمعالج Apple Silicon (macOS 11+)، وWindows 10/11 بنظام x64، إضافة إلى نسخة للمتصفح',
          },
          {
            'الخاصية': 'السعر',
            'Whispy': 'تطبيق أساسي مجاني؛ Pro بسعر 12 USD شهريًا، أو 8 USD شهريًا تُدفع سنويًا (96 USD)، أو 79 USD لمرة واحدة',
          },
          {
            'الخاصية': 'الترخيص',
            'Whispy': 'مملوك، مغلق المصدر',
          },
          {
            'الخاصية': 'مكان التشغيل',
            'Whispy': 'على حاسوبك؛ إنترنت للتنزيل والحساب والمدفوعات',
          },
          {
            'الخاصية': 'اللغات',
            'Whispy': 'لا يذكر الموقع عددًا؛ وتغطي النماذج 25 لغة أوروبية إضافة إلى الصينية واليابانية والكورية',
          },
          {
            'الخاصية': 'تمييز المتحدثين',
            'Whispy': 'نعم، في خطة Pro',
          },
          {
            'الخاصية': 'التحويل الفوري',
            'Whispy': 'غير مذكور؛ يعمل التطبيق على الملفات المسجّلة',
          },
          {
            'الخاصية': 'يعمل بالمعالج المركزي فقط',
            'Whispy': 'غير مذكور',
          },
          {
            'الخاصية': 'خادم API محلي',
            'Whispy': 'غير مذكور',
          },
        ],
        note: 'تتبع الخصائص مقارنة تحويل الكلام إلى نص المستخدمة في Local LLM Software Directory. غياب الذكر في الموقع يعني غير معروف، لا غير مدعوم.',
      },
      whatIsWhispy: {
        id: 'what-is-whispy',
        title: 'ما هو Whispy',
        content: [
          '**Whispy يفرّغ ملفات الصوت إلى نص؛ وليس أداة إملاء ولا روبوت اجتماعات.** تعطيه تسجيلًا لديك أصلًا، كمذكرة صوتية أو مقابلة أو محاضرة، فيعيد لك نصًا مع طوابع زمنية يمكنك تحريره أو نسخه أو تصديره.',
          'المطوّر هو Fawaz Sheik، ويقول إنه بناه لأن التسجيلات التي يحتاج الناس إلى تفريغها أكثر هي غالبًا تلك التي لا ينبغي رفعها إلى أي مكان. ويسمّي الموقع الصحفيين والباحثين والمحامين والمعالجين النفسيين والطلاب جمهورًا له.',
          'تعتمد هذه المراجعة على الموقع وسياسة الخصوصية وصفحة المقاييس وصفحة الإصدارات على GitHub وملاحظة المطوّر أدناه. ولم يُجرَ اختبار عملي، لذا لا تُقيَّم هنا الدقة والسرعة والاستقرار.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'البدء',
        content: [
          '**الإعداد هو تثبيت وتنزيل نموذج وإسقاط ملف.** تتبع الخطوات الموقع.',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'نزّل ملف .dmg لـ Mac أو ملف .exe لـ Windows من [صفحة التنزيل](https://usewhispy.com/download)؛ ولا حاجة إلى حساب للتطبيق الأساسي المجاني.',
          },
          {
            title: 'اترك نموذج الكلام يُنزَّل',
            whyItMatters: 'تطلب ملاحظة المثبّت نحو 2 GB من المساحة الحرة للنموذج الذي يُجلب أثناء الإعداد.',
          },
          {
            title: 'اختر مستوى الدقة',
            whyItMatters: 'يصف الموقع خيارًا بين تفريغ سريع للمراجعات العاجلة وتفريغ عالي الدقة للملاحظات المفصلة؛ ويوجد اختيار النموذج في الإعدادات.',
          },
          {
            title: 'أسقط ملفك ثم صدّر',
            whyItMatters: 'اسحب مذكرة صوتية أو تسجيل اجتماع أو مقابلة، ثم انسخ النص أو صدّره بصيغة TXT أو SRT.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**تتمحور الميزات حول تحويل التسجيلات الخاصة إلى نص قابل للاستخدام.** كل ما يلي مصدره الموقع وصفحة الأسعار.',
        ],
        items: [
          '**مكتبة النصوص والملاحظات.** تُحفظ النصوص والملاحظات على قرصك.',
          '**التصدير.** صيغتا TXT وSRT للترجمة النصية مجانيتان؛ ويمكنك أيضًا إرسال النص إلى ChatGPT أو Claude أو Gemini مع تعليماتك الخاصة، وأنت من يحدد ما يُشارَك.',
          '**الإرسال من الهاتف.** امسح رمز QR وأرسل التسجيلات من هاتفك عبر شبكة Wi-Fi الخاصة بك؛ والخطة المجانية تقبل ملفًا واحدًا في كل مرة.',
          '**كلمات مخصصة.** أضف الأسماء والمصطلحات قبل التفريغ؛ ويقول الموقع إن هذا يعمل مع Whisper وQwen3-ASR.',
          '**ميزات Pro.** المعالجة الدفعية، وتمييز المتحدثين وتحريرهم (إعادة تسميتهم أو دمجهم)، والتصدير التلقائي، والتفريغ من رابط YouTube أو وسائل التواصل الاجتماعي.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'النماذج والعتاد',
        content: [
          '**يقدّم تطبيق سطح المكتب عدة نماذج كلام محلية.** تذكر صفحة المقاييس نموذج Whisper Large v3 Turbo ونموذج Parakeet Ultra (25 لغة أوروبية) ونموذج Qwen3-ASR (الصينية واليابانية والكورية وغيرها)، ويقول الموقع إنك تختار النموذج المناسب للغتك في الإعدادات. وتستخدم نسخة المتصفح نماذج Whisper Tiny وBase وSmall الأصغر.',
          'يوصف تمييز المتحدثين بأنه يعمل محليًا. وتذكر سياسة الخصوصية نماذج pyannote؛ بينما يذكر إشعار «الجديد» داخل التطبيق NVIDIA Nemotron-3 حتى 8 متحدثين، مع استخدام تجريبي مجاني واحد.',
          'ينشر الموقع صفحة مقاييس خاصة به تسمى Whispy Index تقيّم ثلاثة نماذج على مجموعات اختبار المطوّر الإنجليزية والأوروبية والآسيوية. ولم تعِد PromptQuorum إنتاج تلك الدرجات. ولا يُذكر متطلب للذاكرة العشوائية؛ أما المثبّت فيطلب نحو 2 GB من مساحة القرص للنموذج.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والترخيص والتكلفة',
        content: [
          '**تقول سياسة الخصوصية إن الصوت والنصوص المحوّلة والملاحظات تبقى على جهازك، وإنه لا يوجد لدى Whispy خادم يستقبلها.** وكان آخر تحديث للسياسة في 8 يونيو 2026. وتقول إن البيانات الشخصية الوحيدة التي يحتفظ بها Whispy هي البريد الإلكتروني المستخدم للحساب، المطلوب لخطة Pro، وحالة الاشتراك.',
          'وتسمّي السياسة أيضًا الخدمات الواقفة خلف ذلك: Supabase للمصادقة، وPolar للمدفوعات، وPostHog للتحليلات دون ملفات تعريف الارتباط، وSentry لتتبع الأخطاء. وتقول بعض المواد التسويقية «بلا حسابات» و«بلا تتبع»؛ فاقرأها مع السياسة التي تصف التطبيق الأساسي المجاني دون حساب وأدوات التحليلات والتشخيص. الشيفرة مغلقة ولم تفحص PromptQuorum حركة الشبكة، لذا فهذه الأقوال من المطوّر نفسه.',
          'تشمل الخطة المجانية تطبيق سطح المكتب ونسخة المتصفح والمكتبة والتصدير بصيغتي TXT وSRT، وتقول صفحة الأسعار إنه لا توجد تجربة مجانية لخطة Pro. وتكلّف Pro مبلغ 12 USD شهريًا أو 8 USD شهريًا تُدفع سنويًا (96 USD) أو 79 USD لمرة واحدة. ولا يوضح الموقع ما إذا كانت الأسعار تشمل الضريبة، لذا تحقق عند الدفع.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'من مطوّر التطبيق',
        content: [
          'أرسل Fawaz Sheik، مطوّر Whispy، هذه الملاحظة إلى PromptQuorum. وهي رواية المطوّر نفسه، وليست تقييمًا مستقلًا من PromptQuorum، ولم تشغّل PromptQuorum التطبيق.',
          '«أؤمن بأن من حق الناس أن يحصلوا على قوة الذكاء الاصطناعي دون أن يُجبروا على التخلي عن بياناتهم. نعيش في عصر قد تكون فيه سجلاتك وبياناتك الشخصية أغلى من قيمتك أنت، وأفهم أن هذه البيانات هي ما يدرّب النماذج. لا ينبغي أن نُجبر على هذا التنازل ما دامت توجد خيارات آمنة وخاصة ومحلية.»',
          '«لهذا بنيت Whispy. التسجيلات التي يحتاج الناس إلى تفريغها أكثر، كالمقابلات والمحاضرات والاجتماعات والمكالمات، هي غالبًا تلك التي لا ينبغي رفعها إلى أي مكان، ومعظم الأدوات تطلب منك أن تبادل الخصوصية بالدقة. لا يملك Whispy وضعًا سحابيًا إطلاقًا. صوتك لا يغادر حاسوبك أبدًا، ويجري التفريغ على جهاز Mac أو Windows الخاص بك.»',
          '«الميزة الرئيسية هي نص دقيق بلغتك، مع معرفة من قال ماذا. يمكنك الاختيار من بين عدة نماذج محلية بحسب مقدار السرعة أو الدقة الذي تريده، وإضافة تمييز للمتحدثين في التسجيلات الطويلة متعددة المتحدثين، ورفع تسجيل من هاتفك، والتصدير بصيغة TXT أو SRT. وقد فرّغ الناس بالفعل أكثر من 12,000 ساعة من الصوت بواسطته.»',
          '«هدفي لـ Whispy أن أبني أدق تفريغ خاص يمكنك الحصول عليه بلغتك، ثم أنتقل من التسجيلات إلى الاجتماعات المباشرة والملاحظات، وكل ذلك مع بقائه على جهازك.»',
        ],
        note: '— Fawaz Sheik، مطوّر Whispy',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المزايا والقيود',
        columns: [
          'الميزة',
          'ما تعنيه في الاستخدام الفعلي',
          'القيد / تنبيه',
        ],
        rows: [
          {
            'الميزة': 'تفريغ على حاسوبك',
            'ما تعنيه في الاستخدام الفعلي': 'تُعالَج التسجيلات على الجهاز دون رفع الصوت إلى Whispy.',
            'القيد / تنبيه': 'مغلق المصدر، لذا لا يمكن التحقق من الادعاء؛ ويظل الإنترنت مستخدمًا للتنزيل والحساب والمدفوعات.',
          },
          {
            'الميزة': 'تطبيق أساسي مجاني',
            'ما تعنيه في الاستخدام الفعلي': 'التفريغ والمكتبة والملاحظات والتصدير بصيغتي TXT وSRT دون مقابل.',
            'القيد / تنبيه': 'تمييز المتحدثين والمعالجة الدفعية يحتاجان إلى Pro.',
          },
          {
            'الميزة': 'عدة نماذج محلية',
            'ما تعنيه في الاستخدام الفعلي': 'اختر نموذجًا أسرع أو أدق، بما في ذلك خيارات للغات الآسيوية والأوروبية.',
            'القيد / تنبيه': 'لم يُعَد إنتاج أي أرقام للدقة أو السرعة هنا؛ ومقاييس المطوّر نفسه لم يُتحقق منها.',
          },
          {
            'الميزة': 'الإرسال من الهاتف',
            'ما تعنيه في الاستخدام الفعلي': 'انقل تسجيلًا إلى الحاسوب عبر شبكة Wi-Fi الخاصة بك.',
            'القيد / تنبيه': 'الخطة المجانية تقبل ملفًا واحدًا في كل مرة.',
          },
          {
            'الميزة': 'خيار الترخيص الدائم',
            'ما تعنيه في الاستخدام الفعلي': 'شراء لمرة واحدة بسعر 79 USD يغني عن الاشتراك.',
            'القيد / تنبيه': 'لا توجد تجربة مجانية لخطة Pro.',
          },
          {
            'الميزة': 'تطوير نشط',
            'ما تعنيه في الاستخدام الفعلي': 'صدر الإصدار 0.1.11 في 17 نوفمبر 2026.',
            'القيد / تنبيه': 'رقم 0.1.x يشير إلى منتج في بداياته؛ ولا نسخة لأجهزة Mac بمعالج Intel أو لنظام Linux أو للجوال.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Whispy مقابل البدائل',
        content: [
          'هذه أقرب أدوات تفريغ الملفات في الدليل: تطبيق تفريغ لأجهزة Mac، وتطبيق مجاني مفتوح المصدر لثلاثة أنظمة مكتبية، وتطبيق ترجمة نصية لأجهزة Mac وWindows.',
        ],
        columns: [
          'التطبيق',
          'المنصات',
          'السعر والترخيص',
          'الدور',
          'الفرق الرئيسي',
        ],
        rows: [
          {
            'التطبيق': 'Whispy',
            'المنصات': 'Mac وWindows والمتصفح',
            'السعر والترخيص': 'تطبيق أساسي مجاني، وPro من 8 USD شهريًا أو 79 USD لمرة واحدة، مملوك',
            'الدور': 'تفريغ ملفات خاص',
            'الفرق الرئيسي': 'نماذج محلية مع تمييز المتحدثين في Pro؛ مغلق المصدر',
          },
          {
            'التطبيق': '[MacWhisper](/ar/power-local-llm/macwhisper-review)',
            'المنصات': 'macOS',
            'السعر والترخيص': 'مجاني جزئيًا، مملوك',
            'الدور': 'تطبيق تفريغ لأجهزة Mac',
            'الفرق الرئيسي': 'لأجهزة Mac فقط وسجل أطول',
          },
          {
            'التطبيق': '[Buzz](/ar/power-local-llm/buzz-captions-review)',
            'المنصات': 'Mac وWindows وLinux',
            'السعر والترخيص': 'مجاني، MIT',
            'الدور': 'تفريغ وترجمة نصية',
            'الفرق الرئيسي': 'مفتوح المصدر ومجاني؛ ويضيف Linux',
          },
          {
            'التطبيق': '[Sablate](/ar/power-local-llm/sablate-review)',
            'المنصات': 'Windows وMac',
            'السعر والترخيص': 'مجاني جزئيًا، مملوك',
            'الدور': 'سير عمل الترجمة النصية',
            'الفرق الرئيسي': 'يضيف الترجمة والتحرير والدمج في الفيديو',
          },
        ],
        note: 'تتغير منصات التطبيقات الخارجية وأسعارها وميزاتها كثيرًا. تحقق من التفاصيل الحالية في صفحة كل مشروع قبل أن تقرر.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب Whispy',
        items: [
          '**الصحفيون والباحثون.** تبقى المقابلات على الحاسوب، بحسب المطوّر.',
          '**الطلاب.** تكفي النسخة الأساسية المجانية للمحاضرات والندوات.',
          '**التسجيلات متعددة المتحدثين.** يضيف Pro تمييزًا للمتحدثين يمكنك إعادة تسميته ودمجه.',
          '**من يفضّلون الدفع مرة واحدة.** يوجد ترخيص دائم بسعر 79 USD إلى جانب الاشتراكات.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب Whispy',
        items: [
          '**مستخدمو Mac بمعالج Intel وLinux وiPhone وAndroid.** لا تتوفر سوى نسختي Mac بمعالج Apple Silicon وWindows x64.',
          '**من يحتاجون إلى برنامج قابل للتدقيق.** الشيفرة مغلقة ولا يمكن فحص ادعاءات الخصوصية.',
          '**من يحتاجون إلى تفريغ مباشر.** يعمل التطبيق على الملفات المسجّلة؛ أما الاجتماعات المباشرة فهي في خارطة طريق المطوّر فقط.',
          '**من يريدون برنامجًا مجانيًا بالكامل.** Buzz مجاني ومفتوح المصدر.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل Whispy دون اتصال بالإنترنت؟',
            a: 'يقول الموقع إنك لا تحتاج إلى اتصال بالإنترنت بمجرد أن تبدأ الاستخدام. ويحتاج التشغيل الأول إلى اتصال لتنزيل التطبيق ونموذج الكلام. ولم تختبره PromptQuorum دون اتصال.',
          },
          {
            q: 'هل لدى Whispy وضع سحابي؟',
            a: 'يقول المطوّر إنه لا يملك وضعًا سحابيًا إطلاقًا. وهناك ميزة واحدة في Pro، هي التفريغ من رابط YouTube أو وسائل التواصل الاجتماعي، تبدأ من عنوان عبر الإنترنت؛ ولا يشرح الموقع كيف تعمل.',
          },
          {
            q: 'هل توجد نسخة للمتصفح؟',
            a: 'نعم. تشغّل النسخة المجانية للمتصفح نماذج Whisper أصغر داخل علامة تبويب المتصفح ولا تحتاج إلى حساب؛ ويقول المطوّر إنها تعمل دون اتصال بعد التحميل الأول.',
          },
          {
            q: 'من يصنع Whispy؟',
            a: 'Fawaz Sheik، بحسب ملاحظته إلى PromptQuorum. ولا يذكر الموقع شركة ولا موقعًا.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          'يناسب Whispy من يفرّغ تسجيلات على Mac أو Windows ويريد، بحسب المطوّر، أن يجري العمل على حاسوبه، مع تطبيق أساسي مجاني وخطة Pro اختيارية لتمييز المتحدثين. وله إصدار حديث وخيار ترخيص دائم ونسخة للمتصفح لتجربة سريعة.',
          'التحفظات تخص النضج وإمكانية التحقق: رقم إصدار 0.1.x، وشيفرة مغلقة، وادعاءات خصوصية ودقة لم تتمكن PromptQuorum من فحصها، ولا نسخة لأجهزة Mac بمعالج Intel أو لنظام Linux أو للجوال. جرّب التطبيق الأساسي المجاني قبل أن تدفع مقابل Pro.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Whispy](https://usewhispy.com) — الميزات وخطوات التنزيل.',
          '[صفحة الأسعار](https://usewhispy.com/pricing) — الخطط وميزات Pro.',
          '[سياسة الخصوصية](https://usewhispy.com/privacy) — التعامل مع البيانات، آخر تحديث في 8 يونيو 2026.',
          '[صفحة المقاييس](https://usewhispy.com/benchmarks) — درجات النماذج من المطوّر نفسه.',
          '[إصدارات GitHub](https://github.com/fzsheik/whispy-releases/releases) — ملفات المثبّت وتاريخ إصدار النسخة 0.1.11.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مقارنة أدوات الصوت والكلام المحلية](/ar/power-local-llm/local-llm-voice-audio-compared) — تحويل النص إلى كلام والكلام إلى نص ووكلاء الصوت جنبًا إلى جنب.',
          '[مراجعة MacWhisper](/ar/power-local-llm/macwhisper-review) — تطبيق تفريغ لأجهزة Mac.',
          '[مراجعة Buzz](/ar/power-local-llm/buzz-captions-review) — تطبيق مجاني ومفتوح المصدر للتفريغ والترجمة النصية.',
          '[مراجعة Sablate](/ar/power-local-llm/sablate-review) — تطبيق ترجمة نصية محلي لأجهزة Mac وWindows.',
          '[مراجعة Whisper.cpp](/ar/power-local-llm/whisper-cpp-review) — المحرك المفتوح خلف كثير من تطبيقات Whisper المحلية.',
          '[دليل Local LLM Software Directory الكامل](/ar/directory) — دليل أوسع لأدوات الذكاء الاصطناعي المحلي عبر المنصات.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-20',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whispy-review-hero-ko.webp',
    title: 'Whispy 리뷰: Mac·Windows용 비공개 오디오 전사 앱',
    seoTitle: 'Whispy 리뷰: Mac·Windows용 비공개 로컬 음성 전사 앱',
    intro: 'Whispy는 무료로 시작할 수 있는 Mac·Windows용 전사 앱입니다. 인터뷰, 강의, 회의 녹음을 넣으면 사용자의 컴퓨터에서 전사본을 만들어 주며, 유료 Pro 플랜에서는 화자 구분을 선택적으로 쓸 수 있습니다. 이 리뷰는 앱이 하는 일, 설치 방법, 비용, 개인정보 처리방침의 내용과 부족한 점을 정리합니다. 개발사의 공개 페이지, 릴리스 페이지, 개발사의 메모에 근거하며 직접 사용해 본 테스트는 아닙니다.',
    metaDescription: 'Whispy 리뷰: 개발사에 따르면 클라우드 모드 없이 PC에서 전사하는 Mac·Windows 앱. 기본 기능 무료, Pro 월 8 USD부터. 직접 테스트하지 않았습니다.',
    twitterDescription: 'Whispy 리뷰: 로컬 모델과 TXT·SRT 내보내기를 갖춘 Mac·Windows용 비공개 오디오 전사 앱. 가격, 개인정보 보호, 한계, 대안을 정리했습니다.',
    audience: 'Mac이나 Windows PC에서 민감한 녹음을 전사하는 기자, 연구자, 학생 등을 위한 글입니다. 가격, 설치, 모델, 개인정보 보호, 한계, 대안을 다룹니다.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Whispy review',
    targetKeywords: [
      'whispy 리뷰',
      'whispy 전사',
      '비공개 오디오 전사 mac windows',
      '로컬 전사 앱',
      '오프라인 음성 인식 데스크톱',
      '클라우드 없이 인터뷰 전사',
      '로컬 전사 화자 구분',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: '**Whispy는 오디오 파일을 사용자의 컴퓨터에서 텍스트로 바꿔 주는 Mac·Windows용 비공개 소스 전사 앱이며, 개발사는 클라우드 모드가 전혀 없다고 밝힙니다.** 기본 앱은 무료이고, 화자 구분과 일괄 처리는 유료 Pro 플랜에 있습니다. 최신 릴리스는 2026년 11월 17일의 버전 0.1.11입니다. 이 리뷰는 개발사의 공개 웹사이트, 개인정보 처리방침, 릴리스 페이지, 개발사의 메모에 근거하며 직접 사용해 본 테스트는 아닙니다.',
    quickAnswerTop: {
      ko: {
        question: 'Whispy는 로컬 전사 앱입니까?',
        answer: '개발사와 개인정보 처리방침에 따르면 그렇습니다. 전사는 Mac 또는 Windows PC에서 실행되며 오디오는 Whispy로 업로드되지 않습니다. 다만 앱과 음성 모델 다운로드, 그리고 개인정보 처리방침에 설명된 계정, 결제, 진단에는 여전히 인터넷이 사용됩니다. 코드는 비공개이고 PromptQuorum은 네트워크 트래픽을 확인하지 않았으므로, 이 주장은 개발사 자체의 설명입니다.',
        bullets: [
          '오디오나 동영상 파일을 넣고 빠른 모델 또는 정확한 모델을 고른 뒤, 전사본을 읽고 복사하거나 내보냅니다.',
          '기본 전사, 전사본 라이브러리, 메모, TXT·SRT 내보내기는 무료입니다.',
          'Apple Silicon Mac과 64비트 Windows 전용이며, 음성 모델에 디스크 약 2 GB가 필요합니다.',
          '더 작은 Whisper 모델을 쓰는 무료 브라우저 버전도 있습니다.',
          '프로젝트는 초기 단계로, 버전 번호는 0.1.11입니다.',
        ],
        updatedDate: '2026-11-20',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Whispy 받기', anchor: 'get-it' },
      { label: 'Whispy 한눈에 보기', anchor: 'at-a-glance' },
      { label: 'Whispy란', anchor: 'what-is-whispy' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '기능', anchor: 'features' },
      { label: '모델과 하드웨어', anchor: 'models-hardware' },
      { label: '개인정보 보호, 라이선스, 비용', anchor: 'privacy' },
      { label: '개발자의 말', anchor: 'from-the-maker' },
      { label: '장점과 한계', anchor: 'tradeoffs' },
      { label: 'Whispy와 대안 비교', anchor: 'vs-alternatives' },
      { label: 'Whispy를 쓰면 좋은 사용자', anchor: 'who-should-use' },
      { label: 'Whispy를 쓰지 말아야 할 사용자', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
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
            text: 'Whispy는 개발사에 따르면 클라우드 서비스 대신 사용자의 컴퓨터에서 녹음을 텍스트로 바꿔 주는 Mac·Windows용 전사 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '컴퓨터 안에 앉아 있는 타이피스트라고 생각하면 됩니다. 녹음을 넘기면 오디오가 회사 서버로 가지 않은 채 텍스트가 돌아옵니다.',
          },
        ],
        items: [
          '로컬 주장: 개발사는 클라우드 모드가 없다고 하고 개인정보 처리방침은 오디오가 업로드되지 않는다고 밝히지만, 계정, 결제, 진단에는 여전히 온라인 서비스가 쓰입니다.',
          '라이선스: 독점 소프트웨어이며 비공개 소스입니다. 연결된 GitHub 저장소는 릴리스 설치 파일만 호스팅합니다.',
          '가격: 기본 앱은 무료이며, 화자 구분과 일괄 처리는 Pro에 있습니다.',
          '유지보수: 버전 0.1.11이 2026년 11월 17일에 출시되어 프로젝트가 활발히 업데이트되고 있으나 아직 초기 단계입니다.',
          '공백: Intel Mac, Linux, 모바일 앱이 없고 PromptQuorum이 직접 테스트하지 않았습니다.',
        ],
      },
      getItWhispy: {
        id: 'get-it',
        title: 'Whispy 받기',
        content: [
          '**Whispy는 다른 데스크톱 앱처럼 설치하며 터미널이 필요 없습니다.** 공식 사이트에서 사용 중인 시스템용 설치 파일을 내려받으면 되고, 음성 모델은 설치 중에 받습니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'Mac',
            '받는 곳': '[Mac용 다운로드](https://usewhispy.com/download) — .dmg(약 72 MB), Apple Silicon(M1 이상), macOS 11 이상',
          },
          {
            '플랫폼': 'Windows',
            '받는 곳': '[Windows용 다운로드](https://usewhispy.com/download) — .exe 설치 파일(약 100 MB), Windows 10 또는 11, 64비트 Intel 또는 AMD',
          },
          {
            '플랫폼': '브라우저',
            '받는 곳': '[브라우저에서 Whispy 체험](https://usewhispy.com) — 무료, 계정 불필요, 더 작은 Whisper 모델',
          },
          {
            '플랫폼': '릴리스 노트',
            '받는 곳': '[GitHub Releases](https://github.com/fzsheik/whispy-releases/releases)',
          },
          {
            '플랫폼': '공식 사이트',
            '받는 곳': '[usewhispy.com](https://usewhispy.com)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[Whispy 개인정보 처리방침](https://usewhispy.com/privacy)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '비공개 소스이며, GitHub 저장소는 릴리스 설치 파일만 호스팅합니다',
          },
        ],
        note: '다운로드 페이지에는 Apple Silicon Mac과 Windows x64만 나와 있으며, Intel Mac, Linux, iOS, Android 빌드는 제공되지 않습니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Whispy 한눈에 보기',
        columns: ['항목', 'Whispy'],
        rows: [
          { '항목': '플랫폼', 'Whispy': 'Apple Silicon Mac(macOS 11 이상), Windows 10/11 x64, 그리고 브라우저 버전' },
          { '항목': '가격', 'Whispy': '기본 무료, Pro는 월 12 USD, 연간 결제 시 월 8 USD(96 USD), 또는 79 USD 일회성' },
          { '항목': '라이선스', 'Whispy': '독점, 비공개 소스' },
          { '항목': '실행 위치', 'Whispy': '컴퓨터에서 실행, 다운로드·계정·결제에는 인터넷 사용' },
          { '항목': '언어', 'Whispy': '사이트에 개수는 없으며, 모델은 유럽 언어 25개와 중국어·일본어·한국어를 다룸' },
          { '항목': '화자 구분', 'Whispy': '예, Pro 플랜에서 지원' },
          { '항목': '실시간 전사', 'Whispy': '명시되지 않음, 앱은 녹음된 파일을 대상으로 작동' },
          { '항목': 'CPU만으로 사용 가능', 'Whispy': '명시되지 않음' },
          { '항목': '로컬 API 서버', 'Whispy': '명시되지 않음' },
        ],
        note: '항목은 Local LLM Software Directory에서 사용하는 음성 인식 비교를 따릅니다. 사이트에 언급이 없는 항목은 지원하지 않는다는 뜻이 아니라 알 수 없다는 뜻입니다.',
      },
      whatIsWhispy: {
        id: 'what-is-whispy',
        title: 'Whispy란',
        content: [
          '**Whispy는 오디오 파일 전사 앱이며 받아쓰기 도구도, 회의 봇도 아닙니다.** 음성 메모, 인터뷰, 강의처럼 이미 가진 녹음을 넣으면 편집, 복사, 내보내기가 가능한 타임스탬프 포함 전사본을 돌려줍니다.',
          '개발자는 Fawaz Sheik이며, 사람들이 가장 전사하고 싶은 녹음이 어디에도 업로드해서는 안 되는 경우가 많기 때문에 이 앱을 만들었다고 밝힙니다. 사이트는 기자, 연구자, 변호사, 심리치료사, 학생을 대상으로 꼽습니다.',
          '이 리뷰는 공식 사이트, 개인정보 처리방침, 벤치마크 페이지, GitHub 릴리스 페이지, 아래의 개발자 메모에 근거합니다. 직접 사용해 본 테스트는 하지 않았으므로 정확도, 속도, 안정성은 평가하지 않습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**설정은 설치, 모델 다운로드, 파일 넣기로 이루어집니다.** 단계는 공식 사이트를 따릅니다.',
        ],
        numberedItems: [
          {
            title: '앱 설치',
            whyItMatters: '[다운로드 페이지](https://usewhispy.com/download)에서 Mac용 .dmg 또는 Windows용 .exe를 내려받습니다. 무료 기본 기능에는 계정이 필요하지 않습니다.',
          },
          {
            title: '음성 모델 다운로드 대기',
            whyItMatters: '설치 파일 안내에 따르면 설치 중에 받는 모델을 위해 여유 디스크 공간 약 2 GB가 필요합니다.',
          },
          {
            title: '정확도 선택',
            whyItMatters: '사이트는 빠른 검토용의 빠른 전사와 상세한 메모용의 고정확도 전사 중에서 고르는 방식을 설명하며, 모델 선택은 설정에 있습니다.',
          },
          {
            title: '파일을 넣고 내보내기',
            whyItMatters: '음성 메모, 회의 녹음, 인터뷰를 끌어다 놓은 뒤 텍스트를 복사하거나 TXT 또는 SRT로 내보냅니다.',
          },
        ],
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**기능은 비공개 녹음을 쓸 수 있는 텍스트로 바꾸는 데 집중되어 있습니다.** 아래 내용은 모두 공식 사이트와 가격 페이지에서 가져왔습니다.',
        ],
        items: [
          '**전사본 라이브러리와 메모.** 전사본과 메모는 사용자의 드라이브에 보관됩니다.',
          '**내보내기.** TXT와 SRT 자막은 무료이며, 전사본을 사용자 지침과 함께 ChatGPT, Claude, Gemini로 보낼 수도 있고 무엇을 공유할지는 사용자가 정합니다.',
          '**휴대폰에서 보내기.** QR 코드를 스캔해 같은 Wi-Fi로 휴대폰의 녹음을 보낼 수 있으며, 무료 플랜은 한 번에 파일 하나를 받습니다.',
          '**사용자 단어.** 전사 전에 이름과 전문 용어를 추가할 수 있으며, 사이트는 이 기능이 Whisper와 Qwen3-ASR에서 작동한다고 밝힙니다.',
          '**Pro 기능.** 일괄 처리, 화자 구분과 화자 편집(이름 변경 또는 병합), 자동 내보내기, YouTube 또는 소셜 미디어 링크로 전사.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '모델과 하드웨어',
        content: [
          '**데스크톱 앱은 여러 로컬 음성 모델을 제공합니다.** 벤치마크 페이지에는 Whisper Large v3 Turbo, Parakeet Ultra(유럽 언어 25개), Qwen3-ASR(중국어, 일본어, 한국어 등)이 나오며, 사이트는 설정에서 자신의 언어에 맞는 모델을 고른다고 밝힙니다. 브라우저 버전은 더 작은 Whisper Tiny, Base, Small 모델을 사용합니다.',
          '화자 구분은 로컬에서 실행된다고 설명됩니다. 개인정보 처리방침에는 pyannote 모델이, 앱 안의 새 소식 안내에는 NVIDIA Nemotron-3(최대 8명, 무료 체험 1회)가 나옵니다.',
          '사이트는 개발사 자체의 영어, 유럽어, 아시아어 테스트 세트에서 모델 세 개의 점수를 매기는 Whispy Index라는 자체 벤치마크 페이지를 게시합니다. PromptQuorum은 그 점수를 재현하지 않았습니다. RAM 요구 사항은 명시되지 않았고, 설치 파일은 모델용으로 디스크 약 2 GB를 요구합니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호, 라이선스, 비용',
        content: [
          '**개인정보 처리방침에 따르면 오디오, 전사본, 메모는 사용자의 기기에 남으며 Whispy에는 이를 받는 서버가 없습니다.** 방침의 최종 갱신일은 2026년 6월 8일입니다. Whispy가 보유한다고 밝히는 개인 데이터는 Pro에 필요한 계정에 쓰는 이메일 주소와 구독 상태뿐입니다.',
          '방침은 그 뒤에 있는 서비스도 밝힙니다. 인증에는 Supabase, 결제에는 Polar, 쿠키 없는 분석에는 PostHog, 오류 추적에는 Sentry입니다. 일부 마케팅 문구는 "계정 없음"과 "추적 없음"이라고 하므로, 계정 없이 쓰는 무료 기본 기능과 분석·진단 도구를 설명하는 방침과 함께 읽으십시오. 코드는 비공개이고 PromptQuorum은 네트워크 트래픽을 조사하지 않았으므로, 이런 진술은 개발사 자체의 설명입니다.',
          '무료 플랜에는 데스크톱 앱, 브라우저 버전, 라이브러리, TXT·SRT 내보내기가 포함되며, 가격 페이지는 Pro 무료 체험이 없다고 밝힙니다. Pro는 월 12 USD, 연간 결제 시 월 8 USD(96 USD), 또는 79 USD 일회성입니다. 사이트에는 가격에 세금이 포함되는지 나와 있지 않으므로 결제 단계에서 확인하십시오.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '개발자의 말',
        content: [
          'Whispy를 만든 Fawaz Sheik이 PromptQuorum에 이 메모를 보냈습니다. 개발자 본인의 설명이며 PromptQuorum의 독립적인 평가가 아닙니다. PromptQuorum은 이 앱을 실행해 보지 않았습니다.',
          '“저는 사람들이 데이터를 포기하도록 강요받지 않고도 AI의 힘을 누려야 한다고 믿습니다. 우리는 여러분의 기록과 개인 데이터가 어쩌면 여러분 자신보다 더 값진 시대에 살고 있고, 이 데이터가 모델을 학습시킨다는 것도 이해합니다. 안전하고 비공개이며 로컬로 쓸 수 있는 선택지가 있는데도 그런 타협을 강요받아서는 안 됩니다.”',
          '“그래서 Whispy를 만들었습니다. 인터뷰, 강의, 회의, 통화처럼 사람들이 가장 전사하고 싶은 녹음은 어디에도 업로드해서는 안 되는 경우가 많은데, 대부분의 도구는 정확도를 위해 개인정보를 내놓으라고 요구합니다. Whispy에는 클라우드 모드가 전혀 없습니다. 오디오는 컴퓨터 밖으로 나가지 않으며, 전사는 사용자의 Mac 또는 Windows PC에서 실행됩니다.”',
          '“가장 큰 장점은 사용자의 언어로 정확한 텍스트를, 누가 무엇을 말했는지와 함께 얻는 것입니다. 원하는 속도나 정확도에 따라 여러 로컬 모델 중에서 고르고, 화자가 여럿인 긴 녹음에 화자 구분을 더하고, 휴대폰의 녹음을 올리고, TXT 또는 SRT로 내보낼 수 있습니다. 이미 사람들이 이 앱으로 12,000시간이 넘는 오디오를 전사했습니다.”',
          '“Whispy의 목표는 사용자의 언어로 얻을 수 있는 가장 정확한 비공개 전사를 만들고, 녹음에서 실시간 회의와 메모로 넓혀 가되 그 모든 것을 사용자의 기기 안에 두는 것입니다.”',
        ],
        note: '— Fawaz Sheik, Whispy 개발자',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장점과 한계',
        columns: ['장점', '실제 사용에서의 의미', '한계 / 주의점'],
        rows: [
          {
            '장점': '내 컴퓨터에서 전사',
            '실제 사용에서의 의미': '녹음이 기기에서 처리되며 Whispy로 오디오가 업로드되지 않습니다.',
            '한계 / 주의점': '비공개 소스라 이 주장은 검증할 수 없고, 다운로드, 계정, 결제에는 여전히 인터넷이 사용됩니다.',
          },
          {
            '장점': '무료 기본 앱',
            '실제 사용에서의 의미': '전사, 라이브러리, 메모, TXT·SRT 내보내기가 무료입니다.',
            '한계 / 주의점': '화자 구분과 일괄 처리에는 Pro가 필요합니다.',
          },
          {
            '장점': '여러 로컬 모델',
            '실제 사용에서의 의미': '아시아 언어와 유럽 언어용 옵션을 포함해 더 빠른 모델 또는 더 정확한 모델을 고를 수 있습니다.',
            '한계 / 주의점': '여기서는 정확도나 속도 수치를 재현하지 않았으며, 개발사 자체 벤치마크는 검증되지 않았습니다.',
          },
          {
            '장점': '휴대폰에서 보내기',
            '실제 사용에서의 의미': '같은 Wi-Fi로 녹음을 컴퓨터로 옮길 수 있습니다.',
            '한계 / 주의점': '무료 플랜은 한 번에 파일 하나만 받습니다.',
          },
          {
            '장점': '평생 라이선스 옵션',
            '실제 사용에서의 의미': '79 USD 일회성 결제로 구독을 피할 수 있습니다.',
            '한계 / 주의점': 'Pro 무료 체험이 없습니다.',
          },
          {
            '장점': '활발한 개발',
            '실제 사용에서의 의미': '버전 0.1.11이 2026년 11월 17일에 출시되었습니다.',
            '한계 / 주의점': '0.1.x 번호는 초기 제품임을 뜻하며, Intel Mac, Linux, 모바일 앱이 없습니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Whispy와 대안 비교',
        content: [
          '디렉터리에서 가장 가까운 파일 전사 도구는 Mac 전사 앱, 세 가지 데스크톱 시스템용 무료 오픈 소스 앱, Mac·Windows용 자막 앱입니다.',
        ],
        columns: ['앱', '플랫폼', '가격과 라이선스', '역할', '주요 차이'],
        rows: [
          {
            '앱': 'Whispy',
            '플랫폼': 'Mac, Windows, 브라우저',
            '가격과 라이선스': '기본 무료, Pro 월 8 USD부터 또는 79 USD 일회성, 독점',
            '역할': '비공개 파일 전사',
            '주요 차이': 'Pro에서 화자 구분을 지원하는 로컬 모델, 비공개 소스',
          },
          {
            '앱': '[MacWhisper](/ko/power-local-llm/macwhisper-review)',
            '플랫폼': 'macOS',
            '가격과 라이선스': '프리미엄, 독점',
            '역할': 'Mac 전사 앱',
            '주요 차이': 'Mac 전용이며 사용 이력이 더 김',
          },
          {
            '앱': '[Buzz](/ko/power-local-llm/buzz-captions-review)',
            '플랫폼': 'Mac, Windows, Linux',
            '가격과 라이선스': '무료, MIT',
            '역할': '전사와 자막',
            '주요 차이': '오픈 소스이며 무료, Linux 추가 지원',
          },
          {
            '앱': '[Sablate](/ko/power-local-llm/sablate-review)',
            '플랫폼': 'Windows, Mac',
            '가격과 라이선스': '프리미엄, 독점',
            '역할': '자막 작업 흐름',
            '주요 차이': '번역, 편집, 번인 추가',
          },
        ],
        note: '서드파티 앱의 플랫폼, 가격, 기능은 자주 바뀝니다. 결정하기 전에 각 프로젝트의 공식 페이지에서 최신 정보를 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Whispy를 쓰면 좋은 사용자',
        items: [
          '**기자와 연구자.** 개발사에 따르면 인터뷰가 컴퓨터 안에 남습니다.',
          '**학생.** 무료 기본 기능으로 강의와 세미나를 처리할 수 있습니다.',
          '**화자가 여럿인 녹음.** Pro는 이름을 바꾸거나 병합할 수 있는 화자 구분을 더합니다.',
          '**한 번만 결제하고 싶은 구매자.** 구독과 함께 79 USD 평생 라이선스가 있습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Whispy를 쓰지 말아야 할 사용자',
        items: [
          '**Intel Mac, Linux, iPhone, Android 사용자.** Apple Silicon Mac과 Windows x64 빌드만 제공됩니다.',
          '**검증 가능한 소프트웨어가 필요한 사람.** 코드가 비공개라 개인정보 보호 주장을 직접 확인할 수 없습니다.',
          '**실시간 전사가 필요한 사람.** 앱은 녹음된 파일을 대상으로 작동하며, 실시간 회의는 개발자의 계획에만 있습니다.',
          '**완전 무료 소프트웨어를 원하는 사람.** Buzz는 무료 오픈 소스입니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Whispy는 오프라인에서 작동합니까?',
            a: '사이트는 사용을 시작한 뒤에는 인터넷 연결이 필요 없다고 밝힙니다. 첫 실행에는 앱과 음성 모델을 내려받기 위한 연결이 필요합니다. PromptQuorum은 오프라인에서 테스트하지 않았습니다.',
          },
          {
            q: 'Whispy에 클라우드 모드가 있습니까?',
            a: '개발사는 클라우드 모드가 전혀 없다고 밝힙니다. Pro 기능 중 YouTube 또는 소셜 미디어 링크로 전사하는 기능은 온라인 주소에서 시작하며, 사이트는 그 방식을 설명하지 않습니다.',
          },
          {
            q: '브라우저 버전이 있습니까?',
            a: '네. 무료 브라우저 버전은 더 작은 Whisper 모델을 브라우저 탭 안에서 실행하며 계정이 필요 없고, 개발사는 첫 로드 후 오프라인에서 작동한다고 밝힙니다.',
          },
          {
            q: 'Whispy는 누가 만듭니까?',
            a: 'PromptQuorum에 보낸 메모에 따르면 Fawaz Sheik입니다. 사이트에는 회사나 소재지가 나와 있지 않습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          'Mac이나 Windows PC에서 녹음을 전사하고, 개발사에 따르면 그 작업이 사용자의 컴퓨터에서 이루어지기를 원하며, 무료 기본 기능과 화자 구분용 선택형 Pro 플랜이 맞는다면 Whispy가 잘 맞습니다. 최근 릴리스, 평생 라이선스 옵션, 빠르게 써 볼 수 있는 브라우저 버전이 있습니다.',
          '주의할 점은 성숙도와 검증 가능성입니다. 0.1.x 버전 번호, 비공개 코드, PromptQuorum이 확인하지 못한 개인정보 보호와 정확도 주장이 있고, Intel Mac, Linux, 모바일 앱이 없습니다. Pro를 결제하기 전에 무료 기본 기능을 먼저 써 보십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Whispy 공식 사이트](https://usewhispy.com) — 기능과 다운로드 흐름.',
          '[가격 페이지](https://usewhispy.com/pricing) — 플랜과 Pro 기능.',
          '[개인정보 처리방침](https://usewhispy.com/privacy) — 데이터 처리, 최종 갱신일 2026년 6월 8일.',
          '[벤치마크 페이지](https://usewhispy.com/benchmarks) — 개발사 자체의 모델 점수.',
          '[GitHub Releases](https://github.com/fzsheik/whispy-releases/releases) — 설치 파일과 버전 0.1.11의 출시일.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[로컬 음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 음성 합성, 음성 인식, 음성 에이전트를 나란히 비교합니다.',
          '[MacWhisper 리뷰](/ko/power-local-llm/macwhisper-review) — Mac 전사 앱.',
          '[Buzz 리뷰](/ko/power-local-llm/buzz-captions-review) — 무료 오픈 소스 전사·자막 앱.',
          '[Sablate 리뷰](/ko/power-local-llm/sablate-review) — Mac·Windows용 로컬 자막 앱.',
          '[Whisper.cpp 리뷰](/ko/power-local-llm/whisper-cpp-review) — 많은 로컬 Whisper 앱의 바탕이 되는 오픈 엔진.',
          '[Local LLM Software Directory 전체 보기](/ko/directory) — 여러 플랫폼의 로컬 AI 도구를 더 폭넓게 모은 디렉터리.',
        ],
      },
    },
  },
}
