// Amical Review: free, open-source dictation for Mac and Windows with local Whisper models
// Slug: amical-review
// Companion to: handy-review, openwhispr-review, fluidvoice-review, weesper-neon-flow-review, local-llm-voice-audio-compared
// Facts verified 2026-11-09 against amical.ai (home, pricing, privacy, docs) and GitHub amicalhq/amical (README, API, Releases v1.13.0 of 2026-11-07).
// Not hands-on tested. Stale-project warning is OFF (2 days since the last update on 2026-11-09).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-09',
    dateModified: '2026-11-09',
    next_refresh_due: '2027-05-09',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/amical-review-hero-en.webp',
    title: 'Amical Review: Free Open-Source Dictation for Mac and Windows',
    seoTitle: 'Amical Review: Free Open-Source Dictation App',
    intro: "Amical is a free, MIT-licensed dictation app for Mac and Windows: you hold a shortcut, speak, and it types the text into whatever app has the cursor, running OpenAI's Whisper model on your own computer. This review covers what the maker's website, documentation and GitHub repository say, where the local path ends and the optional cloud begins, and how Amical compares with other dictation tools in the directory.",
    metaDescription: 'Amical review: free MIT-licensed dictation for Mac and Windows that runs Whisper on your PC and works offline after a model download. Not tested.',
    twitterDescription: 'Amical review: free open-source push-to-talk dictation for Mac and Windows with local Whisper. Price, privacy, limits and alternatives.',
    audience: 'Mac and Windows users who want free, open-source dictation into any app without sending their voice to a cloud service — covers price, install, models, privacy, limits and alternatives.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Amical review',
    targetKeywords: [
      'amical review',
      'amical ai dictation',
      'open source dictation app',
      'local whisper dictation mac windows',
      'offline voice dictation',
      'free speech to text desktop',
      'whisper dictation app',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: "**Amical is a free, MIT-licensed dictation app for Mac and Windows that runs OpenAI's Whisper model on your own computer and, per its documentation, works offline once a local model is downloaded.** It also offers optional cloud dictation: the paid Premium plan adds unlimited cloud use. The newest release is version 1.13.0 from 7 November 2026. This review rests on the maker's website, documentation and GitHub repository, not on hands-on testing.",
    quickAnswerTop: {
      en: {
        question: 'Is Amical a local dictation app?',
        answer: 'For the desktop app, yes by default: the documentation says transcription runs locally with Whisper, or in the cloud if you sign in, and that it works offline once a local model is set up. Cloud speech and cloud formatting send the audio of that request to the maker. The code is open, but PromptQuorum did not inspect network traffic, so the privacy claims remain the maker\'s own.',
        bullets: [
          'Hold a shortcut, speak, release: the text appears at the cursor in apps such as email, chat or an editor, formatted to suit the app.',
          'Pricing: free with unlimited local dictation; Premium adds unlimited cloud dictation for $7 a month billed yearly or $10 a month billed monthly.',
          'Six Whisper variants from Tiny (about 78 MB) to Large v3 (about 3.1 GB), downloaded inside the app.',
          'Mac (local Whisper needs macOS 15 or newer) and Windows only; the README says Linux is not supported.',
          'The documentation says telemetry is on by default and can be switched off in Settings.',
        ],
        updatedDate: '2026-11-09',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get Amical', anchor: 'get-it' },
      { label: 'Amical at a Glance', anchor: 'at-a-glance' },
      { label: 'What Amical Is', anchor: 'what-is-amical' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Features', anchor: 'features' },
      { label: 'Models and Hardware', anchor: 'models-hardware' },
      { label: 'Privacy, License and Cost', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Amical vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Amical', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Amical', anchor: 'who-should-not-use' },
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
            text: 'Amical is a free, open-source dictation app for Mac and Windows that, per its documentation, runs Whisper on your own computer and works offline after a model download.',
          },
          {
            type: 'plain-terms',
            text: 'Think of a microphone key that types for you: hold the shortcut, talk, let go, and your computer turns the speech into text, with a cloud option you can leave unused.',
          },
        ],
        items: [
          'Local claim: speech recognition runs on the device with Whisper; cloud speech, cloud formatting, sign-in, model downloads and telemetry use the internet.',
          'License and maker: MIT, open code published by the GitHub organization amicalhq.',
          'Price: free with unlimited local dictation; unlimited cloud dictation needs the paid Premium plan.',
          'Maintenance: version 1.13.0 was released on 7 November 2026 and the repository was updated on 8 November 2026, so the project is actively developed.',
          'Gaps: no Linux version, local Whisper needs macOS 15 or newer, and the AI-formatting pass is marked Alpha.',
        ],
      },
      getItAmical: {
        id: 'get-it',
        title: 'Get Amical',
        content: [
          '**Amical installs like any desktop app, so no terminal is needed.** Download the installer for your system from the official site or the GitHub release page; the Whisper model is downloaded inside the app during first-run setup.',
        ],
        columns: ['Platform', 'Get It'],
        rows: [
          {
            Platform: 'Mac',
            'Get It': '[Download for Mac](https://github.com/amicalhq/amical/releases/latest) — .dmg for Apple Silicon or Intel; also `brew install --cask amical`',
          },
          {
            Platform: 'Windows',
            'Get It': '[Download for Windows](https://github.com/amicalhq/amical/releases/latest) — .exe for x64 or arm64',
          },
          {
            Platform: 'iPhone and Android',
            'Get It': '[Mobile apps on the Amical site](https://amical.ai/) — App Store and Google Play; sign-in with an Amical account',
          },
          {
            Platform: 'Release notes',
            'Get It': '[GitHub Releases](https://github.com/amicalhq/amical/releases) and the [Amical documentation](https://amical.ai/docs)',
          },
          {
            Platform: 'Website',
            'Get It': '[amical.ai](https://amical.ai/)',
          },
          {
            Platform: 'Privacy policy',
            'Get It': '[Amical privacy policy](https://amical.ai/privacy)',
          },
          {
            Platform: 'Source code',
            'Get It': '[github.com/amicalhq/amical](https://github.com/amicalhq/amical) — MIT license',
          },
        ],
        note: 'The privacy policy page is labeled for the mobile app; PromptQuorum found no separate desktop privacy policy.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Amical at a Glance',
        columns: ['Attribute', 'Amical'],
        rows: [
          { Attribute: 'Platform', Amical: 'macOS and Windows desktop; Linux not supported' },
          { Attribute: 'Price', Amical: 'Free (local); paid Premium plan for cloud' },
          { Attribute: 'License', Amical: 'MIT, open source' },
          { Attribute: 'Runs', Amical: 'On your computer with Whisper; optional cloud when signed in' },
          { Attribute: 'Languages', Amical: '100+ per the maker (not verified)' },
          { Attribute: 'Speaker labels', Amical: 'Not stated' },
          { Attribute: 'Real-time transcription', Amical: 'Planned for meetings; dictation is push-to-talk' },
          { Attribute: 'Usable on CPU only', Amical: 'Not stated; model size from 78 MB to 3.1 GB' },
          { Attribute: 'Local API server', Amical: 'Not stated' },
        ],
        note: 'Attributes follow the speech-to-text comparison used in the Local LLM Software Directory. A missing statement on the site means unknown, not unsupported.',
      },
      whatIsAmical: {
        id: 'what-is-amical',
        title: 'What Amical Is',
        content: [
          '**Amical is a push-to-talk dictation app, not a transcription editor.** You hold a key or click the floating widget, speak, and the text lands in the app that has focus; the app detects that app and adjusts the formatting, for example a greeting on its own line in an email.',
          'The code lives under the GitHub organization amicalhq. The project also lists voice notes (in progress) and real-time meeting transcription and voice commands (planned); this review covers the dictation app only.',
          'This review draws on the website, documentation, privacy policy and the GitHub repository. It involved no hands-on testing, so accuracy, speed and stability are not rated here.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is an install, a model choice and a shortcut.** The steps follow the desktop quick-start in the documentation.',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Download the .dmg for Mac or the .exe for Windows from the [GitHub release page](https://github.com/amicalhq/amical/releases/latest), or run `brew install --cask amical` on a Mac.',
          },
          {
            title: 'Grant permissions',
            whyItMatters: 'Allow microphone access; on a Mac also allow accessibility access so Amical can paste into other apps.',
          },
          {
            title: 'Choose Local or Cloud',
            whyItMatters: 'Onboarding offers Cloud (sign-in, no setup) or Local (Whisper on your machine, offline) and recommends one based on your hardware.',
          },
          {
            title: 'Hold, speak, release',
            whyItMatters: 'Set the push-to-talk shortcut, click into any text field, hold it, speak and let go; a press shorter than 500 ms is treated as a slip and discarded.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The feature set centres on dictation into any app.** Everything below comes from the README, documentation and release notes.',
        ],
        items: [
          '**Dictation anywhere.** Text is pasted into the focused app via a push-to-talk shortcut or the floating widget.',
          '**Context-aware formatting.** An optional AI pass, marked Alpha, shapes output to the active app and needs a local language model or the Amical Cloud connection.',
          '**Languages.** 100+ languages per the maker, with automatic language detection; version 1.13.0 added regional variants and Cantonese.',
          '**Personalization.** Custom vocabulary, snippets, custom prompts, a transcription history and, since version 1.13.0, vocabulary learned from corrections after a paste.',
          '**Notes.** Voice notes are listed as in progress.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Models and Hardware',
        content: [
          '**Amical runs Whisper locally in six variants.** The documentation lists Tiny (about 78 MB), Base (about 148 MB), Small (about 488 MB), Medium (about 1.5 GB), Large v3 (about 3.1 GB) and Large v3 Turbo (about 1.5 GB), each shown with speed and accuracy ratings in Settings.',
          'The README says local Whisper requires macOS 15 or later on a Mac. No RAM or GPU requirement is stated, so pick a model that fits your machine; for the optional formatting pass, the documentation names Ollama or any OpenAI-compatible endpoint. No speed or accuracy figures were reproduced here.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy, License and Cost',
        content: [
          '**The documentation says Amical can run entirely on your machine, with no data leaving the computer and no account required.** Transcripts, notes, vocabulary and audio files are stored in the app-data folder. Cloud speech, cloud formatting and sign-in send the audio for that request and nothing else, per the FAQ.',
          'Telemetry is a separate matter. The documentation says anonymous telemetry covers app launches, errors and performance, is on by default and can be switched off under Settings, Advanced; pressing the Report flag on a history entry also sends that audio and transcript. The version 1.13.0 release notes say the app now asks for telemetry consent at sign-in, and the two statements are not reconciled on the maker\'s pages. The mobile privacy policy lists product analytics and ad measurement. The code is open and PromptQuorum did not examine network traffic, so these statements are the maker\'s own.',
          'The license is MIT. Local dictation is free and unlimited; the free plan adds 2,000 words a week of cloud dictation, and Premium is $7 a month billed yearly ($84) or $10 a month billed monthly. Enterprise is custom.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            Benefit: 'Whisper on your computer',
            'What it means in real use': 'Dictation can run offline once a model is downloaded, with no account.',
            'Limitation / caveat': 'Cloud options and telemetry exist; PromptQuorum did not inspect network traffic.',
          },
          {
            Benefit: 'Free and open source',
            'What it means in real use': 'MIT code and unlimited local dictation at no cost.',
            'Limitation / caveat': 'Unlimited cloud dictation needs the paid Premium plan.',
          },
          {
            Benefit: 'Dictate into any app',
            'What it means in real use': 'One shortcut works in email, chat, editors and documents.',
            'Limitation / caveat': 'Mac and Windows only; local Whisper needs macOS 15 or newer.',
          },
          {
            Benefit: 'Six model sizes',
            'What it means in real use': 'Small models for older machines, larger ones for accuracy.',
            'Limitation / caveat': 'Large v3 needs about 3.1 GB of disk; no speed figures are published here.',
          },
          {
            Benefit: 'Context-aware formatting',
            'What it means in real use': 'Output is shaped to the active app, such as email or chat.',
            'Limitation / caveat': 'Marked Alpha and needs a local language model or the cloud connection.',
          },
          {
            Benefit: 'Active development',
            'What it means in real use': 'Version 1.13.0 shipped on 7 November 2026.',
            'Limitation / caveat': 'Voice notes are in progress; meeting transcription is only planned.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Amical vs. Alternatives',
        content: [
          'These are the closest dictation tools in the directory: a free open-source app for three desktop systems, a free Mac-only app, a hybrid open-source app and a paid closed-source app.',
        ],
        columns: ['App', 'Platforms', 'Price and license', 'Role', 'Key difference'],
        rows: [
          {
            App: 'Amical',
            Platforms: 'Mac, Windows',
            'Price and license': 'Free local, Premium cloud, MIT',
            Role: 'Push-to-talk dictation',
            'Key difference': 'Open source; local Whisper plus optional cloud',
          },
          {
            App: '[Handy](/power-local-llm/handy-review)',
            Platforms: 'Mac, Windows, Linux',
            'Price and license': 'Free, MIT',
            Role: 'Push-to-talk dictation',
            'Key difference': 'Free and open source; adds Linux',
          },
          {
            App: '[OpenWhispr](/power-local-llm/openwhispr-review)',
            Platforms: 'Mac, Windows, Linux, iOS',
            'Price and license': 'Freemium, MIT',
            Role: 'Dictation with local or cloud modes',
            'Key difference': 'You choose local models, your own API key or its cloud',
          },
          {
            App: '[FluidVoice](/power-local-llm/fluidvoice-review)',
            Platforms: 'Mac',
            'Price and license': 'Free, GPL-3.0',
            Role: 'Mac dictation app',
            'Key difference': 'Free and open source; Mac only',
          },
          {
            App: '[Weesper Neon Flow](/power-local-llm/weesper-neon-flow-review)',
            Platforms: 'Mac, Windows',
            'Price and license': 'Trial, then paid, proprietary',
            Role: 'Push-to-talk dictation',
            'Key difference': 'Closed source and paid; Whisper on the device',
          },
        ],
        note: "Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each project's own page before deciding.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Amical',
        items: [
          '**Writers and office workers on Mac or Windows.** One shortcut dictates into email, chat and documents.',
          '**People who avoid cloud dictation.** Local Whisper keeps speech recognition on the computer, per the documentation.',
          '**Open-source users.** The MIT code is public and local dictation is free.',
          '**Multilingual users.** 100+ languages per the maker, with automatic detection.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Amical',
        items: [
          '**Linux users.** The README says Linux is not supported; Handy covers it.',
          '**Mac users on macOS 14 or older.** Local Whisper needs macOS 15 or newer.',
          '**Anyone who wants no telemetry by default.** The documentation says it is on by default and must be switched off.',
          '**Anyone who needs speaker labels or live meeting transcripts today.** Neither is documented as available.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Amical work offline?',
            a: 'The FAQ says yes, once you have downloaded a local Whisper model; the first-run setup needs a connection for that download. Cloud models need a connection. PromptQuorum did not test it offline.',
          },
          {
            q: 'Is my voice sent to the cloud?',
            a: 'Only if you choose the cloud model or cloud formatting, per the FAQ, which says those send the audio for that request. The code is open and PromptQuorum did not inspect network traffic.',
          },
          {
            q: 'Is Amical really free?',
            a: 'Per the pricing page, local dictation is free and unlimited, and the free plan adds 2,000 words a week of cloud dictation. Only unlimited cloud dictation needs the paid Premium plan.',
          },
          {
            q: 'Can I use my own language model?',
            a: 'For the Alpha formatting pass, yes: Ollama or any OpenAI-compatible local endpoint. For speech, the documentation says you pick a shipped Whisper variant or the cloud model; bringing your own speech provider is not supported.',
          },
          {
            q: 'Who makes Amical?',
            a: 'The code is published by the GitHub organization amicalhq, and the privacy policy names Exa Labs LLC as the service provider.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Amical is a good fit if you want free, open-source push-to-talk dictation on a Mac or Windows PC where, per the documentation, Whisper runs on your own computer. It has an MIT license, a free local tier and a release from this week.',
          'The caveats are scope and verifiability: no Linux version, macOS 15 for local Whisper, telemetry that is on by default per the docs, an Alpha formatting pass, and privacy claims that PromptQuorum could not check. Try the free local tier before deciding on Premium.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Amical website](https://amical.ai/) — features, platforms and pricing.',
          '[Pricing page](https://amical.ai/pricing) — Free, Premium and Enterprise plans.',
          '[Documentation](https://amical.ai/docs) — local models, AI formatting, FAQ, telemetry and quick-start guides.',
          '[Privacy policy](https://amical.ai/privacy) — data handling, labeled for the mobile app.',
          '[GitHub repository](https://github.com/amicalhq/amical) — README, MIT license and source code.',
          '[GitHub Releases](https://github.com/amicalhq/amical/releases) — installer assets and release date of version 1.13.0.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Voice and Speech Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — text-to-speech, speech-to-text and voice agents side by side.',
          '[Handy Review](/power-local-llm/handy-review) — a free open-source dictation app for Mac, Windows and Linux.',
          '[Weesper Neon Flow Review](/power-local-llm/weesper-neon-flow-review) — a paid dictation app for Mac and Windows.',
          '[Whisper.cpp Review](/power-local-llm/whisper-cpp-review) — the open engine behind many local Whisper apps.',
          '[The Complete Local LLM Software Directory](/directory) — a broader directory of local AI tools across platforms.',
          '[Sprich Review: German-Made Mac Dictation App for Apple Silicon](/power-local-llm/sprich-review) — another Mac dictation app, German-first, with a free plan and Apple Silicon only.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-09',
    dateModified: '2026-11-09',
    next_refresh_due: '2027-05-09',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/amical-review-hero-de.webp',
    title: 'Amical Rezension: Kostenloses Open-Source-Diktat für Mac und Windows',
    seoTitle: 'Amical Rezension: Kostenlose Open-Source-Diktier-App',
    intro: 'Amical ist eine kostenlose, MIT-lizenzierte Diktier-App für Mac und Windows: Sie halten ein Tastenkürzel gedrückt, sprechen, und die App tippt den Text in die App, in der gerade der Cursor steht. Dabei läuft OpenAIs Whisper-Modell auf Ihrem eigenen Computer. Diese Rezension fasst zusammen, was Website, Dokumentation und GitHub-Repository des Herstellers sagen, wo der lokale Weg endet und die optionale Cloud beginnt und wie Amical im Vergleich zu anderen Diktier-Werkzeugen im Verzeichnis abschneidet.',
    metaDescription: 'Amical Rezension: kostenloses, MIT-lizenziertes Diktat für Mac und Windows, Whisper läuft auf Ihrem PC, offline nach Modell-Download. Nicht getestet.',
    twitterDescription: 'Amical Rezension: kostenloses Open-Source-Diktat per Tastenkürzel für Mac und Windows mit lokalem Whisper. Preis, Datenschutz, Grenzen und Alternativen.',
    audience: 'Mac- und Windows-Nutzer, die kostenlos und quelloffen in jede App diktieren möchten, ohne ihre Stimme an einen Cloud-Dienst zu senden — behandelt Preis, Installation, Modelle, Datenschutz, Grenzen und Alternativen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Amical review',
    targetKeywords: [
      'amical rezension',
      'amical ki diktat',
      'open-source diktier-app',
      'lokales whisper diktat mac windows',
      'offline spracheingabe',
      'kostenlose spracherkennung desktop',
      'whisper diktier-app',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: '**Amical ist eine kostenlose, MIT-lizenzierte Diktier-App für Mac und Windows, die OpenAIs Whisper-Modell auf Ihrem eigenen Computer ausführt und laut Dokumentation offline funktioniert, sobald ein lokales Modell heruntergeladen ist.** Außerdem bietet sie optionales Cloud-Diktat: Der kostenpflichtige Tarif Premium erweitert die Cloud-Nutzung auf unbegrenzt. Die neueste Version ist 1.13.0 vom 7. November 2026. Diese Rezension stützt sich auf Website, Dokumentation und GitHub-Repository des Herstellers, nicht auf einen eigenen Praxistest.',
    quickAnswerTop: {
      de: {
        question: 'Ist Amical eine lokale Diktier-App?',
        answer: 'Für die Desktop-App ja, standardmäßig: Laut Dokumentation läuft die Transkription lokal mit Whisper oder, wenn Sie sich anmelden, in der Cloud, und sie funktioniert offline, sobald ein lokales Modell eingerichtet ist. Cloud-Spracherkennung und Cloud-Formatierung senden das Audio der jeweiligen Anfrage an den Hersteller. Der Code ist offen, aber PromptQuorum hat den Netzwerkverkehr nicht untersucht; die Datenschutzaussagen stammen also vom Hersteller selbst.',
        bullets: [
          'Kürzel halten, sprechen, loslassen: Der Text erscheint am Cursor, etwa in E-Mail, Chat oder Editor, passend zur jeweiligen App formatiert.',
          'Preise: kostenlos mit unbegrenztem lokalem Diktat; Premium erweitert das Cloud-Diktat auf unbegrenzt für 7 $ im Monat bei jährlicher Zahlung oder 10 $ im Monat bei monatlicher Zahlung.',
          'Sechs Whisper-Varianten von Tiny (etwa 78 MB) bis Large v3 (etwa 3,1 GB), Download in der App.',
          'Nur Mac (lokales Whisper braucht macOS 15 oder neuer) und Windows; laut README wird Linux nicht unterstützt.',
          'Laut Dokumentation ist die Telemetrie standardmäßig aktiv und lässt sich in den Einstellungen ausschalten.',
        ],
        updatedDate: '2026-11-09',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Amical herunterladen', anchor: 'get-it' },
      { label: 'Amical im Überblick', anchor: 'at-a-glance' },
      { label: 'Was Amical ist', anchor: 'what-is-amical' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Modelle und Hardware', anchor: 'models-hardware' },
      { label: 'Datenschutz, Lizenz und Kosten', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile und Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Amical im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen Amical geeignet ist', anchor: 'who-should-use' },
      { label: 'Für wen Amical nicht geeignet ist', anchor: 'who-should-not-use' },
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
            text: 'Amical ist eine kostenlose Open-Source-Diktier-App für Mac und Windows, die laut Dokumentation Whisper auf Ihrem eigenen Computer ausführt und nach dem Modell-Download offline funktioniert.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich eine Mikrofontaste vor, die für Sie tippt: Kürzel halten, sprechen, loslassen, und Ihr Computer macht aus der Sprache Text, mit einer Cloud-Option, die Sie ungenutzt lassen können.',
          },
        ],
        items: [
          'Lokale Aussage: Die Spracherkennung läuft mit Whisper auf dem Gerät; Cloud-Spracherkennung, Cloud-Formatierung, Anmeldung, Modell-Downloads und Telemetrie nutzen das Internet.',
          'Lizenz und Hersteller: MIT, veröffentlicht von der GitHub-Organisation amicalhq.',
          'Preis: kostenlos mit unbegrenztem lokalem Diktat; unbegrenztes Cloud-Diktat erfordert den kostenpflichtigen Premium-Tarif.',
          'Pflege: Version 1.13.0 erschien am 7. November 2026 und das Repository wurde am 8. November 2026 aktualisiert, das Projekt wird also aktiv entwickelt.',
          'Lücken: keine Version für Linux, lokales Whisper braucht macOS 15 oder neuer, und der KI-Formatierungsschritt ist als Alpha gekennzeichnet.',
        ],
      },
      getItAmical: {
        id: 'get-it',
        title: 'Amical herunterladen',
        content: [
          '**Amical wird wie jede Desktop-App installiert, ein Terminal ist nicht nötig.** Laden Sie das Installationsprogramm für Ihr System von der offiziellen Website oder der GitHub-Release-Seite herunter; das Whisper-Modell wird bei der Ersteinrichtung in der App heruntergeladen.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            Plattform: 'Mac',
            Bezugsquelle: '[Download für Mac](https://github.com/amicalhq/amical/releases/latest) — .dmg für Apple Silicon oder Intel; auch per `brew install --cask amical`',
          },
          {
            Plattform: 'Windows',
            Bezugsquelle: '[Download für Windows](https://github.com/amicalhq/amical/releases/latest) — .exe für x64 oder arm64',
          },
          {
            Plattform: 'iPhone und Android',
            Bezugsquelle: '[Mobile Apps auf der Amical-Website](https://amical.ai/) — App Store und Google Play; Anmeldung mit einem Amical-Konto',
          },
          {
            Plattform: 'Versionshinweise',
            Bezugsquelle: '[GitHub Releases](https://github.com/amicalhq/amical/releases) und die [Amical-Dokumentation](https://amical.ai/docs)',
          },
          {
            Plattform: 'Website',
            Bezugsquelle: '[amical.ai](https://amical.ai/)',
          },
          {
            Plattform: 'Datenschutzerklärung',
            Bezugsquelle: '[Datenschutzerklärung von Amical](https://amical.ai/privacy)',
          },
          {
            Plattform: 'Quellcode',
            Bezugsquelle: '[github.com/amicalhq/amical](https://github.com/amicalhq/amical) — MIT-Lizenz',
          },
        ],
        note: 'Die Seite mit der Datenschutzerklärung ist für die mobile App beschriftet; PromptQuorum fand keine eigene Datenschutzerklärung für den Desktop.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Amical im Überblick',
        columns: ['Merkmal', 'Amical'],
        rows: [
          { Merkmal: 'Plattform', Amical: 'macOS- und Windows-Desktop; Linux nicht unterstützt' },
          { Merkmal: 'Preis', Amical: 'Kostenlos (lokal); Premium-Tarif für Cloud' },
          { Merkmal: 'Lizenz', Amical: 'MIT, quelloffen' },
          { Merkmal: 'Ausführung', Amical: 'Auf Ihrem Computer mit Whisper; optionale Cloud bei Anmeldung' },
          { Merkmal: 'Sprachen', Amical: '100+ laut Hersteller (nicht geprüft)' },
          { Merkmal: 'Sprecherzuordnung', Amical: 'Nicht angegeben' },
          { Merkmal: 'Echtzeit-Transkription', Amical: 'Für Meetings geplant; Diktat per Tastenkürzel' },
          { Merkmal: 'Nur mit CPU nutzbar', Amical: 'Nicht angegeben; Modellgröße von 78 MB bis 3,1 GB' },
          { Merkmal: 'Lokaler API-Server', Amical: 'Nicht angegeben' },
        ],
        note: 'Die Merkmale folgen dem Spracherkennungs-Vergleich im Local LLM Software Directory. Eine fehlende Angabe auf der Website bedeutet unbekannt, nicht nicht unterstützt.',
      },
      whatIsAmical: {
        id: 'what-is-amical',
        title: 'Was Amical ist',
        content: [
          '**Amical ist eine Diktier-App mit Tastenkürzel, kein Transkriptions-Editor.** Sie halten eine Taste gedrückt oder klicken auf das schwebende Widget, sprechen, und der Text landet in der App, die den Fokus hat; die App erkennt diese App und passt die Formatierung an, etwa eine Anrede in einer eigenen Zeile in einer E-Mail.',
          'Der Code liegt unter der GitHub-Organisation amicalhq. Das Projekt führt außerdem Sprachnotizen (in Arbeit) sowie Echtzeit-Transkription von Meetings und Sprachbefehle (geplant) auf; diese Rezension behandelt nur die Diktier-App.',
          'Diese Rezension stützt sich auf Website, Dokumentation, Datenschutzerklärung und das GitHub-Repository. Es gab keinen eigenen Praxistest, daher werden Genauigkeit, Geschwindigkeit und Stabilität hier nicht bewertet.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus Installation, Modellwahl und Tastenkürzel.** Die Schritte folgen der Desktop-Schnellstartanleitung in der Dokumentation.',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Laden Sie auf der [GitHub-Release-Seite](https://github.com/amicalhq/amical/releases/latest) die .dmg für Mac oder die .exe für Windows herunter oder führen Sie auf dem Mac `brew install --cask amical` aus.',
          },
          {
            title: 'Berechtigungen erteilen',
            whyItMatters: 'Erlauben Sie den Mikrofonzugriff; auf dem Mac erlauben Sie zusätzlich den Bedienungshilfen-Zugriff, damit Amical in andere Apps einfügen kann.',
          },
          {
            title: 'Lokal oder Cloud wählen',
            whyItMatters: 'Die Einrichtung bietet Cloud (Anmeldung, keine weitere Einrichtung) oder Lokal (Whisper auf Ihrem Rechner, offline) an und empfiehlt eine Variante passend zu Ihrer Hardware.',
          },
          {
            title: 'Halten, sprechen, loslassen',
            whyItMatters: 'Legen Sie das Diktier-Kürzel fest, klicken Sie in ein beliebiges Textfeld, halten Sie das Kürzel gedrückt, sprechen Sie und lassen Sie los; ein Druck unter 500 ms gilt als Versehen und wird verworfen.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Der Funktionsumfang konzentriert sich auf Diktat in jede App.** Alles Folgende stammt aus README, Dokumentation und Versionshinweisen.',
        ],
        items: [
          '**Diktat überall.** Der Text wird per Diktier-Kürzel oder über das schwebende Widget in die App mit Fokus eingefügt.',
          '**Kontextbezogene Formatierung.** Ein optionaler KI-Schritt, als Alpha gekennzeichnet, passt die Ausgabe an die aktive App an und braucht ein lokales Sprachmodell oder die Verbindung zur Amical Cloud.',
          '**Sprachen.** 100+ Sprachen laut Hersteller, mit automatischer Spracherkennung; Version 1.13.0 ergänzte regionale Varianten und Kantonesisch.',
          '**Anpassung.** Eigenes Vokabular, Textbausteine, eigene Prompts, ein Transkriptionsverlauf und seit Version 1.13.0 Vokabular, das aus Korrekturen nach dem Einfügen gelernt wird.',
          '**Notizen.** Sprachnotizen sind als in Arbeit aufgeführt.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelle und Hardware',
        content: [
          '**Amical führt Whisper lokal in sechs Varianten aus.** Die Dokumentation nennt Tiny (etwa 78 MB), Base (etwa 148 MB), Small (etwa 488 MB), Medium (etwa 1,5 GB), Large v3 (etwa 3,1 GB) und Large v3 Turbo (etwa 1,5 GB), jeweils mit Geschwindigkeits- und Genauigkeitsbewertung in den Einstellungen.',
          'Laut README setzt lokales Whisper auf dem Mac macOS 15 oder neuer voraus. Anforderungen an RAM oder GPU werden nicht genannt; wählen Sie also ein Modell, das zu Ihrem Rechner passt. Für den optionalen Formatierungsschritt nennt die Dokumentation Ollama oder einen beliebigen OpenAI-kompatiblen Endpunkt. Geschwindigkeits- oder Genauigkeitswerte wurden hier nicht nachgestellt.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz, Lizenz und Kosten',
        content: [
          '**Laut Dokumentation kann Amical vollständig auf Ihrem Rechner laufen, ohne dass Daten den Computer verlassen und ohne Konto.** Transkripte, Notizen, Vokabular und Audiodateien liegen im App-Datenordner. Cloud-Spracherkennung, Cloud-Formatierung und Anmeldung senden laut FAQ das Audio der jeweiligen Anfrage und nichts darüber hinaus.',
          'Die Telemetrie ist ein eigenes Thema. Laut Dokumentation umfasst die anonyme Telemetrie App-Starts, Fehler und Leistungsdaten, ist standardmäßig aktiv und lässt sich unter Einstellungen, Erweitert ausschalten; wer bei einem Verlaufseintrag auf die Melden-Flagge drückt, sendet außerdem dieses Audio und das Transkript. Die Versionshinweise zu 1.13.0 sagen, die App frage bei der Anmeldung nun nach der Einwilligung zur Telemetrie; die beiden Aussagen werden auf den Seiten des Herstellers nicht in Einklang gebracht. Die Datenschutzerklärung der mobilen App nennt Produktanalyse und Werbemessung. Der Code ist offen, und PromptQuorum hat den Netzwerkverkehr nicht untersucht; diese Aussagen stammen also vom Hersteller selbst.',
          'Die Lizenz ist MIT. Lokales Diktat ist kostenlos und unbegrenzt; der kostenlose Tarif enthält zusätzlich 2.000 Wörter pro Woche Cloud-Diktat, und Premium kostet 7 $ im Monat bei jährlicher Zahlung (84 $) oder 10 $ im Monat bei monatlicher Zahlung. Enterprise gibt es nach Vereinbarung.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile und Einschränkungen',
        columns: ['Vorteil', 'Was das im Alltag bedeutet', 'Einschränkung / Hinweis'],
        rows: [
          {
            Vorteil: 'Whisper auf Ihrem Computer',
            'Was das im Alltag bedeutet': 'Das Diktat kann nach dem Modell-Download offline laufen, ohne Konto.',
            'Einschränkung / Hinweis': 'Cloud-Optionen und Telemetrie existieren; PromptQuorum hat den Netzwerkverkehr nicht untersucht.',
          },
          {
            Vorteil: 'Kostenlos und quelloffen',
            'Was das im Alltag bedeutet': 'MIT-Code und unbegrenztes lokales Diktat ohne Kosten.',
            'Einschränkung / Hinweis': 'Unbegrenztes Cloud-Diktat erfordert den kostenpflichtigen Tarif Premium.',
          },
          {
            Vorteil: 'Diktat in jede App',
            'Was das im Alltag bedeutet': 'Ein Kürzel funktioniert in E-Mail, Chat, Editoren und Dokumenten.',
            'Einschränkung / Hinweis': 'Nur Mac und Windows; lokales Whisper braucht macOS 15 oder neuer.',
          },
          {
            Vorteil: 'Sechs Modellgrößen',
            'Was das im Alltag bedeutet': 'Kleine Modelle für ältere Rechner, größere für mehr Genauigkeit.',
            'Einschränkung / Hinweis': 'Large v3 braucht etwa 3,1 GB Speicherplatz; Geschwindigkeitswerte werden hier nicht veröffentlicht.',
          },
          {
            Vorteil: 'Kontextbezogene Formatierung',
            'Was das im Alltag bedeutet': 'Die Ausgabe wird an die aktive App angepasst, etwa E-Mail oder Chat.',
            'Einschränkung / Hinweis': 'Als Alpha gekennzeichnet; braucht ein lokales Sprachmodell oder die Cloud-Verbindung.',
          },
          {
            Vorteil: 'Aktive Entwicklung',
            'Was das im Alltag bedeutet': 'Version 1.13.0 erschien am 7. November 2026.',
            'Einschränkung / Hinweis': 'Sprachnotizen sind in Arbeit; Meeting-Transkription ist nur geplant.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Amical im Vergleich zu Alternativen',
        content: [
          'Das sind die ähnlichsten Diktier-Werkzeuge im Verzeichnis: eine kostenlose Open-Source-App für drei Desktop-Systeme, eine kostenlose reine Mac-App, eine hybride Open-Source-App und eine kostenpflichtige App mit geschlossenem Code.',
        ],
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Rolle', 'Wichtigster Unterschied'],
        rows: [
          {
            App: 'Amical',
            Plattformen: 'Mac, Windows',
            'Preis und Lizenz': 'Lokal kostenlos, Premium Cloud, MIT',
            Rolle: 'Diktat per Tastenkürzel',
            'Wichtigster Unterschied': 'Quelloffen; lokales Whisper plus optionale Cloud',
          },
          {
            App: '[Handy](/de/power-local-llm/handy-review)',
            Plattformen: 'Mac, Windows, Linux',
            'Preis und Lizenz': 'Kostenlos, MIT',
            Rolle: 'Diktat per Tastenkürzel',
            'Wichtigster Unterschied': 'Kostenlos und quelloffen; zusätzlich Linux',
          },
          {
            App: '[OpenWhispr](/de/power-local-llm/openwhispr-review)',
            Plattformen: 'Mac, Windows, Linux, iOS',
            'Preis und Lizenz': 'Freemium, MIT',
            Rolle: 'Diktat mit lokalem oder Cloud-Modus',
            'Wichtigster Unterschied': 'Sie wählen lokale Modelle, eigenen API-Schlüssel oder die eigene Cloud',
          },
          {
            App: '[FluidVoice](/de/power-local-llm/fluidvoice-review)',
            Plattformen: 'Mac',
            'Preis und Lizenz': 'Kostenlos, GPL-3.0',
            Rolle: 'Mac-Diktier-App',
            'Wichtigster Unterschied': 'Kostenlos und quelloffen; nur Mac',
          },
          {
            App: '[Weesper Neon Flow](/de/power-local-llm/weesper-neon-flow-review)',
            Plattformen: 'Mac, Windows',
            'Preis und Lizenz': 'Testphase, dann kostenpflichtig, proprietär',
            Rolle: 'Diktat per Tastenkürzel',
            'Wichtigster Unterschied': 'Geschlossener Code, kostenpflichtig; Whisper auf dem Gerät',
          },
        ],
        note: 'Angaben zu Plattformen, Preisen und Funktionen von Drittanbieter-Apps ändern sich häufig. Prüfen Sie die aktuellen Details auf der Seite des jeweiligen Projekts, bevor Sie entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen Amical geeignet ist',
        items: [
          '**Schreibende und Büroangestellte unter Mac oder Windows.** Ein Kürzel diktiert in E-Mails, Chats und Dokumente.',
          '**Menschen, die Cloud-Diktat meiden.** Lokales Whisper hält die Spracherkennung laut Dokumentation auf dem Computer.',
          '**Open-Source-Nutzer.** Der MIT-Code ist öffentlich und lokales Diktat ist kostenlos.',
          '**Mehrsprachige Nutzer.** 100+ Sprachen laut Hersteller, mit automatischer Erkennung.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen Amical nicht geeignet ist',
        items: [
          '**Linux-Nutzer.** Laut README wird Linux nicht unterstützt; Handy deckt es ab.',
          '**Mac-Nutzer mit macOS 14 oder älter.** Lokales Whisper braucht macOS 15 oder neuer.',
          '**Alle, die standardmäßig keine Telemetrie wollen.** Laut Dokumentation ist sie standardmäßig aktiv und muss ausgeschaltet werden.',
          '**Alle, die heute Sprecherzuordnung oder Live-Meeting-Transkripte brauchen.** Beides ist nicht als verfügbar dokumentiert.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Funktioniert Amical offline?',
            a: 'Laut FAQ ja, sobald Sie ein lokales Whisper-Modell heruntergeladen haben; für diesen Download braucht die Ersteinrichtung eine Verbindung. Cloud-Modelle brauchen eine Verbindung. PromptQuorum hat es nicht offline getestet.',
          },
          {
            q: 'Wird meine Stimme in die Cloud gesendet?',
            a: 'Laut FAQ nur, wenn Sie das Cloud-Modell oder die Cloud-Formatierung wählen; beide senden das Audio der jeweiligen Anfrage. Der Code ist offen, und PromptQuorum hat den Netzwerkverkehr nicht untersucht.',
          },
          {
            q: 'Ist Amical wirklich kostenlos?',
            a: 'Laut Preisseite ist lokales Diktat kostenlos und unbegrenzt, und der kostenlose Tarif enthält zusätzlich 2.000 Wörter pro Woche Cloud-Diktat. Nur unbegrenztes Cloud-Diktat erfordert den kostenpflichtigen Premium-Tarif.',
          },
          {
            q: 'Kann ich mein eigenes Sprachmodell verwenden?',
            a: 'Für den Alpha-Formatierungsschritt ja: Ollama oder ein beliebiger OpenAI-kompatibler lokaler Endpunkt. Für die Spracherkennung wählen Sie laut Dokumentation eine mitgelieferte Whisper-Variante oder das Cloud-Modell; ein eigener Spracherkennungs-Anbieter wird nicht unterstützt.',
          },
          {
            q: 'Wer entwickelt Amical?',
            a: 'Der Code wird von der GitHub-Organisation amicalhq veröffentlicht, und die Datenschutzerklärung nennt Exa Labs LLC als Dienstanbieter.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'Amical passt, wenn Sie auf einem Mac oder Windows-PC kostenlos und quelloffen per Tastenkürzel diktieren möchten, wobei laut Dokumentation Whisper auf Ihrem eigenen Computer läuft. Es gibt eine MIT-Lizenz, einen kostenlosen lokalen Tarif und ein Release aus dieser Woche.',
          'Die Einschränkungen betreffen Umfang und Überprüfbarkeit: keine Version für Linux, macOS 15 für lokales Whisper, laut Dokumentation standardmäßig aktive Telemetrie, ein Formatierungsschritt im Alpha-Stadium und Datenschutzaussagen, die PromptQuorum nicht prüfen konnte. Probieren Sie den kostenlosen lokalen Tarif aus, bevor Sie sich für Premium entscheiden.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von Amical](https://amical.ai/) — Funktionen, Plattformen und Preise.',
          '[Preisseite](https://amical.ai/pricing) — Tarife Free, Premium und Enterprise.',
          '[Dokumentation](https://amical.ai/docs) — lokale Modelle, KI-Formatierung, FAQ, Telemetrie und Schnellstartanleitungen.',
          '[Datenschutzerklärung](https://amical.ai/privacy) — Umgang mit Daten, für die mobile App beschriftet.',
          '[GitHub-Repository](https://github.com/amicalhq/amical) — README, MIT-Lizenz und Quellcode.',
          '[GitHub Releases](https://github.com/amicalhq/amical/releases) — Installationsdateien und Veröffentlichungsdatum von Version 1.13.0.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokale Sprach- und Audio-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — Text-to-Speech, Spracherkennung und Sprachassistenten nebeneinander.',
          '[Handy Rezension](/de/power-local-llm/handy-review) — eine kostenlose Open-Source-Diktier-App für Mac, Windows und Linux.',
          '[Weesper Neon Flow Rezension](/de/power-local-llm/weesper-neon-flow-review) — eine kostenpflichtige Diktier-App für Mac und Windows.',
          '[Whisper.cpp Rezension](/de/power-local-llm/whisper-cpp-review) — die offene Engine hinter vielen lokalen Whisper-Apps.',
          '[Das vollständige Local LLM Software Directory](/de/directory) — ein breiteres Verzeichnis lokaler KI-Werkzeuge über Plattformen hinweg.',
          '[Sprich Rezension: Diktier-App aus Deutschland für den Apple-Silicon-Mac](/de/power-local-llm/sprich-review) — eine weitere Diktier-App für den Mac, auf Deutsch ausgerichtet, mit Gratis-Tarif und nur für Apple Silicon.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-09',
    dateModified: '2026-11-09',
    next_refresh_due: '2027-05-09',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/amical-review-hero-fr.webp',
    title: "Test d'Amical : dictée libre et gratuite pour Mac et Windows",
    seoTitle: "Test d'Amical : dictée libre et gratuite Mac/Windows",
    intro: "Amical est une application de dictée gratuite, sous licence MIT, pour Mac et Windows : vous maintenez un raccourci, vous parlez, et elle saisit le texte dans l'application où se trouve le curseur, en exécutant le modèle Whisper d'OpenAI sur votre propre ordinateur. Ce test résume ce que disent le site de l'éditeur, sa documentation et son dépôt GitHub, le point où s'arrête le traitement local et où commence le cloud optionnel, et comment Amical se compare aux autres outils de dictée du répertoire.",
    metaDescription: "Test d'Amical : dictée gratuite sous licence MIT pour Mac et Windows, avec Whisper sur votre PC, hors ligne après téléchargement d'un modèle. Non testée.",
    twitterDescription: "Test d'Amical : dictée par raccourci libre et gratuite pour Mac et Windows avec Whisper en local. Prix, confidentialité, limites et alternatives.",
    audience: "Utilisateurs de Mac et de Windows qui veulent une dictée libre et gratuite dans n'importe quelle application sans envoyer leur voix à un service cloud — couvre le prix, l'installation, les modèles, la confidentialité, les limites et les alternatives.",
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Amical review',
    targetKeywords: [
      'test amical',
      'amical dictée ia',
      'application de dictée open source',
      'dictée whisper locale mac windows',
      'dictée vocale hors ligne',
      'reconnaissance vocale gratuite bureau',
      'application de dictée whisper',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: "**Amical est une application de dictée gratuite, sous licence MIT, pour Mac et Windows : elle exécute le modèle Whisper d'OpenAI sur votre propre ordinateur et, selon sa documentation, fonctionne hors ligne une fois un modèle local téléchargé.** Elle propose aussi une dictée cloud optionnelle : l'offre payante Premium ajoute une utilisation cloud illimitée. La version la plus récente est la 1.13.0, du 7 novembre 2026. Ce test s'appuie sur le site de l'éditeur, sa documentation et son dépôt GitHub, pas sur un essai pratique.",
    quickAnswerTop: {
      fr: {
        question: 'Amical est-elle une application de dictée locale ?',
        answer: "Pour l'application de bureau, oui par défaut : la documentation indique que la transcription s'exécute localement avec Whisper, ou dans le cloud si vous vous connectez, et qu'elle fonctionne hors ligne une fois un modèle local installé. La reconnaissance vocale et la mise en forme dans le cloud envoient l'audio de la requête concernée à l'éditeur. Le code est ouvert, mais PromptQuorum n'a pas inspecté le trafic réseau : les affirmations de confidentialité restent celles de l'éditeur.",
        bullets: [
          "Maintenez un raccourci, parlez, relâchez : le texte apparaît au curseur dans des applications comme la messagerie, le chat ou un éditeur, mis en forme selon l'application.",
          "Tarifs : gratuit avec dictée locale illimitée ; Premium ajoute la dictée cloud illimitée pour 7 $ par mois facturés annuellement ou 10 $ par mois facturés mensuellement.",
          "Six variantes de Whisper, de Tiny (environ 78 Mo) à Large v3 (environ 3,1 Go), téléchargées depuis l'application.",
          "Mac (Whisper local exige macOS 15 ou ultérieur) et Windows uniquement ; le README indique que Linux n'est pas pris en charge.",
          "La documentation indique que la télémétrie est activée par défaut et peut être désactivée dans les Paramètres.",
        ],
        updatedDate: '2026-11-09',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir Amical', anchor: 'get-it' },
      { label: "Amical en un coup d'œil", anchor: 'at-a-glance' },
      { label: "Ce qu'est Amical", anchor: 'what-is-amical' },
      { label: 'Premiers pas', anchor: 'how-to-get-started' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Modèles et matériel', anchor: 'models-hardware' },
      { label: 'Confidentialité, licence et coût', anchor: 'privacy' },
      { label: 'Compromis : avantages et limites', anchor: 'tradeoffs' },
      { label: 'Amical face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Pour qui Amical est adaptée', anchor: 'who-should-use' },
      { label: "Pour qui Amical n'est pas adaptée", anchor: 'who-should-not-use' },
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
            text: "Amical est une application de dictée libre et gratuite pour Mac et Windows qui, selon sa documentation, exécute Whisper sur votre propre ordinateur et fonctionne hors ligne après le téléchargement d'un modèle.",
          },
          {
            type: 'plain-terms',
            text: "Imaginez une touche de micro qui tape à votre place : vous maintenez le raccourci, vous parlez, vous relâchez, et votre ordinateur transforme la voix en texte, avec une option cloud que vous pouvez ignorer.",
          },
        ],
        items: [
          "Affirmation locale : la reconnaissance vocale s'exécute sur l'appareil avec Whisper ; la reconnaissance et la mise en forme dans le cloud, la connexion, les téléchargements de modèles et la télémétrie utilisent Internet.",
          "Licence et éditeur : MIT, publiée par l'organisation GitHub amicalhq.",
          "Prix : gratuit avec dictée locale illimitée ; la dictée cloud illimitée nécessite l'offre Premium payante.",
          "Maintenance : la version 1.13.0 est sortie le 7 novembre 2026 et le dépôt a été mis à jour le 8 novembre 2026, le projet est donc développé activement.",
          "Lacunes : pas de version Linux, Whisper local exige macOS 15 ou ultérieur, et la passe de mise en forme par IA est marquée Alpha.",
        ],
      },
      getItAmical: {
        id: 'get-it',
        title: 'Obtenir Amical',
        content: [
          "**Amical s'installe comme n'importe quelle application de bureau, aucun terminal n'est nécessaire.** Téléchargez l'installateur de votre système sur le site officiel ou sur la page des versions GitHub ; le modèle Whisper est téléchargé depuis l'application lors de la configuration initiale.",
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            Plateforme: 'Mac',
            'Où la trouver': '[Télécharger pour Mac](https://github.com/amicalhq/amical/releases/latest) — .dmg pour Apple Silicon ou Intel ; aussi `brew install --cask amical`',
          },
          {
            Plateforme: 'Windows',
            'Où la trouver': '[Télécharger pour Windows](https://github.com/amicalhq/amical/releases/latest) — .exe pour x64 ou arm64',
          },
          {
            Plateforme: 'iPhone et Android',
            'Où la trouver': "[Applications mobiles sur le site d'Amical](https://amical.ai/) — App Store et Google Play ; connexion avec un compte Amical",
          },
          {
            Plateforme: 'Notes de version',
            'Où la trouver': '[Versions GitHub](https://github.com/amicalhq/amical/releases) et [documentation d\'Amical](https://amical.ai/docs)',
          },
          {
            Plateforme: 'Site web',
            'Où la trouver': '[amical.ai](https://amical.ai/)',
          },
          {
            Plateforme: 'Politique de confidentialité',
            'Où la trouver': "[Politique de confidentialité d'Amical](https://amical.ai/privacy)",
          },
          {
            Plateforme: 'Code source',
            'Où la trouver': '[github.com/amicalhq/amical](https://github.com/amicalhq/amical) — licence MIT',
          },
        ],
        note: "La page de politique de confidentialité est destinée à l'application mobile ; PromptQuorum n'a trouvé aucune politique distincte pour le bureau.",
      },
      atAGlance: {
        id: 'at-a-glance',
        title: "Amical en un coup d'œil",
        columns: ['Attribut', 'Amical'],
        rows: [
          { Attribut: 'Plateforme', Amical: 'macOS et Windows ; Linux non pris en charge' },
          { Attribut: 'Prix', Amical: 'Gratuit (local) ; offre Premium pour le cloud' },
          { Attribut: 'Licence', Amical: 'MIT, open source' },
          { Attribut: 'Exécution', Amical: "Sur votre PC avec Whisper ; cloud en option si connecté" },
          { Attribut: 'Langues', Amical: "Plus de 100 selon l'éditeur (non vérifié)" },
          { Attribut: 'Étiquettes de locuteurs', Amical: 'Non précisé' },
          { Attribut: 'Transcription en temps réel', Amical: 'Prévue pour les réunions ; dictée par raccourci' },
          { Attribut: 'Utilisable sur CPU seul', Amical: 'Non précisé ; modèles de 78 Mo à 3,1 Go' },
          { Attribut: 'Serveur API local', Amical: 'Non précisé' },
        ],
        note: "Les attributs suivent la comparaison de reconnaissance vocale utilisée dans le Répertoire des logiciels de LLM locaux. Une absence de mention sur le site signifie « inconnu », pas « non pris en charge ».",
      },
      whatIsAmical: {
        id: 'what-is-amical',
        title: "Ce qu'est Amical",
        content: [
          "**Amical est une application de dictée par raccourci, pas un éditeur de transcriptions.** Vous maintenez une touche ou cliquez sur le widget flottant, vous parlez, et le texte arrive dans l'application active ; Amical détecte cette application et adapte la mise en forme, par exemple une formule d'appel sur sa propre ligne dans un e-mail.",
          "Le code est hébergé par l'organisation GitHub amicalhq. Le projet mentionne aussi des notes vocales (en cours) ainsi que la transcription de réunions en temps réel et des commandes vocales (prévues) ; ce test ne couvre que l'application de dictée.",
          "Ce test s'appuie sur le site, la documentation, la politique de confidentialité et le dépôt GitHub. Il n'a donné lieu à aucun essai pratique : la précision, la vitesse et la stabilité ne sont donc pas évaluées ici.",
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Premiers pas',
        content: [
          "**La mise en route tient en une installation, un choix de modèle et un raccourci.** Les étapes suivent le guide de démarrage pour le bureau de la documentation.",
        ],
        numberedItems: [
          {
            title: "Installer l'application",
            whyItMatters: "Téléchargez le .dmg pour Mac ou le .exe pour Windows depuis la [page des versions GitHub](https://github.com/amicalhq/amical/releases/latest), ou exécutez `brew install --cask amical` sur un Mac.",
          },
          {
            title: 'Accorder les autorisations',
            whyItMatters: "Autorisez l'accès au micro ; sur Mac, autorisez aussi l'accès à l'accessibilité pour qu'Amical puisse coller le texte dans d'autres applications.",
          },
          {
            title: 'Choisir Local ou Cloud',
            whyItMatters: "L'intégration propose Cloud (connexion, aucune configuration) ou Local (Whisper sur votre machine, hors ligne) et en recommande un selon votre matériel.",
          },
          {
            title: 'Maintenir, parler, relâcher',
            whyItMatters: "Définissez le raccourci de dictée, cliquez dans n'importe quel champ de texte, maintenez-le, parlez puis relâchez ; un appui de moins de 500 ms est considéré comme une erreur et ignoré.",
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          "**L'ensemble des fonctions est centré sur la dictée dans n'importe quelle application.** Tout ce qui suit provient du README, de la documentation et des notes de version.",
        ],
        items: [
          "**Dictée partout.** Le texte est collé dans l'application active via un raccourci à maintenir ou le widget flottant.",
          "**Mise en forme contextuelle.** Une passe d'IA optionnelle, marquée Alpha, adapte le résultat à l'application active et exige un modèle de langage local ou la connexion à Amical Cloud.",
          "**Langues.** Plus de 100 langues selon l'éditeur, avec détection automatique de la langue ; la version 1.13.0 a ajouté des variantes régionales et le cantonais.",
          "**Personnalisation.** Un vocabulaire personnalisé, des extraits de texte, des prompts personnalisés, un historique des transcriptions et, depuis la version 1.13.0, un vocabulaire appris à partir des corrections après un collage.",
          "**Notes.** Les notes vocales sont indiquées comme en cours.",
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modèles et matériel',
        content: [
          "**Amical exécute Whisper en local, en six variantes.** La documentation cite Tiny (environ 78 Mo), Base (environ 148 Mo), Small (environ 488 Mo), Medium (environ 1,5 Go), Large v3 (environ 3,1 Go) et Large v3 Turbo (environ 1,5 Go), chacune affichée avec des notes de vitesse et de précision dans les Paramètres.",
          "Le README indique que Whisper local exige macOS 15 ou ultérieur sur Mac. Aucune exigence de RAM ou de GPU n'est précisée : choisissez donc un modèle adapté à votre machine ; pour la passe de mise en forme optionnelle, la documentation cite Ollama ou tout point de terminaison compatible OpenAI. Aucune mesure de vitesse ou de précision n'a été reproduite ici.",
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité, licence et coût',
        content: [
          "**La documentation indique qu'Amical peut fonctionner entièrement sur votre machine, sans aucune donnée qui quitte l'ordinateur et sans compte.** Les transcriptions, notes, vocabulaire et fichiers audio sont stockés dans le dossier de données de l'application. La reconnaissance vocale cloud, la mise en forme cloud et la connexion envoient l'audio de la requête concernée et rien d'autre, selon la FAQ.",
          "La télémétrie est un sujet distinct. La documentation indique que la télémétrie anonyme couvre les lancements de l'application, les erreurs et les performances, qu'elle est activée par défaut et peut être désactivée dans Paramètres, Avancé ; appuyer sur le drapeau Signaler d'une entrée de l'historique envoie aussi cet audio et cette transcription. Les notes de la version 1.13.0 indiquent que l'application demande désormais le consentement à la télémétrie lors de la connexion, et ces deux affirmations ne sont pas conciliées sur les pages de l'éditeur. La politique de confidentialité mobile mentionne des analyses de produit et de la mesure publicitaire. Le code est ouvert et PromptQuorum n'a pas examiné le trafic réseau : ces déclarations sont celles de l'éditeur.",
          "La licence est MIT. La dictée locale est gratuite et illimitée ; l'offre gratuite ajoute 2 000 mots par semaine de dictée cloud, et Premium coûte 7 $ par mois facturés annuellement (84 $) ou 10 $ par mois facturés mensuellement. L'offre Enterprise est sur mesure.",
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: ['Avantage', "Ce que cela donne à l'usage", 'Limite / réserve'],
        rows: [
          {
            Avantage: 'Whisper sur votre ordinateur',
            "Ce que cela donne à l'usage": 'La dictée peut fonctionner hors ligne une fois un modèle téléchargé, sans compte.',
            'Limite / réserve': "Des options cloud et la télémétrie existent ; PromptQuorum n'a pas inspecté le trafic réseau.",
          },
          {
            Avantage: 'Gratuite et libre',
            "Ce que cela donne à l'usage": 'Code MIT et dictée locale illimitée sans frais.',
            'Limite / réserve': "La dictée cloud illimitée exige l'offre payante Premium.",
          },
          {
            Avantage: "Dicter dans n'importe quelle application",
            "Ce que cela donne à l'usage": 'Un seul raccourci fonctionne dans les e-mails, les messageries, les éditeurs et les documents.',
            'Limite / réserve': 'Mac et Windows uniquement ; Whisper local exige macOS 15 ou ultérieur.',
          },
          {
            Avantage: 'Six tailles de modèle',
            "Ce que cela donne à l'usage": 'Des petits modèles pour les machines anciennes, des plus grands pour la précision.',
            'Limite / réserve': "Large v3 occupe environ 3,1 Go de disque ; aucune mesure de vitesse publiée ici.",
          },
          {
            Avantage: 'Mise en forme contextuelle',
            "Ce que cela donne à l'usage": "Le résultat est adapté à l'application active, par exemple e-mail ou chat.",
            'Limite / réserve': 'Marquée Alpha ; exige un modèle de langage local ou la connexion cloud.',
          },
          {
            Avantage: 'Développement actif',
            "Ce que cela donne à l'usage": 'La version 1.13.0 est sortie le 7 novembre 2026.',
            'Limite / réserve': 'Notes vocales en cours ; transcription de réunions seulement prévue.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Amical face aux alternatives',
        content: [
          "Voici les outils de dictée les plus proches du répertoire : une application libre et gratuite pour trois systèmes de bureau, une application gratuite réservée au Mac, une application libre hybride et une application payante à code fermé.",
        ],
        columns: ['Application', 'Plateformes', 'Prix et licence', 'Rôle', 'Différence clé'],
        rows: [
          {
            Application: 'Amical',
            Plateformes: 'Mac, Windows',
            'Prix et licence': 'Local gratuit, cloud Premium, MIT',
            Rôle: 'Dictée par raccourci',
            'Différence clé': 'Libre ; Whisper local plus cloud optionnel',
          },
          {
            Application: '[Handy](/fr/power-local-llm/handy-review)',
            Plateformes: 'Mac, Windows, Linux',
            'Prix et licence': 'Gratuit, MIT',
            Rôle: 'Dictée par raccourci',
            'Différence clé': 'Libre et gratuite ; ajoute Linux',
          },
          {
            Application: '[OpenWhispr](/fr/power-local-llm/openwhispr-review)',
            Plateformes: 'Mac, Windows, Linux, iOS',
            'Prix et licence': 'Freemium, MIT',
            Rôle: 'Dictée en mode local ou cloud',
            'Différence clé': 'Vous choisissez des modèles locaux, votre propre clé API ou son cloud',
          },
          {
            Application: '[FluidVoice](/fr/power-local-llm/fluidvoice-review)',
            Plateformes: 'Mac',
            'Prix et licence': 'Gratuit, GPL-3.0',
            Rôle: 'Application de dictée pour Mac',
            'Différence clé': 'Gratuite et libre ; Mac uniquement',
          },
          {
            Application: '[Weesper Neon Flow](/fr/power-local-llm/weesper-neon-flow-review)',
            Plateformes: 'Mac, Windows',
            'Prix et licence': 'Essai, puis payant, propriétaire',
            Rôle: 'Dictée par raccourci',
            'Différence clé': "Code fermé et payante ; Whisper sur l'appareil",
          },
        ],
        note: "Les plateformes, les prix et les fonctions des applications tierces changent fréquemment. Vérifiez les détails actuels sur la page de chaque projet avant de décider.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui Amical est adaptée',
        items: [
          "**Rédacteurs et employés de bureau sous Mac ou Windows.** Un seul raccourci dicte dans les e-mails, les messageries et les documents.",
          "**Personnes qui évitent la dictée cloud.** Whisper local garde la reconnaissance vocale sur l'ordinateur, selon la documentation.",
          "**Utilisateurs de logiciels libres.** Le code MIT est public et la dictée locale est gratuite.",
          "**Utilisateurs multilingues.** Plus de 100 langues selon l'éditeur, avec détection automatique.",
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: "Pour qui Amical n'est pas adaptée",
        items: [
          "**Utilisateurs de Linux.** Le README indique que Linux n'est pas pris en charge ; Handy le couvre.",
          "**Utilisateurs de Mac sous macOS 14 ou antérieur.** Whisper local exige macOS 15 ou ultérieur.",
          "**Quiconque ne veut aucune télémétrie par défaut.** La documentation indique qu'elle est activée par défaut et qu'il faut la désactiver.",
          "**Quiconque a besoin dès aujourd'hui d'étiquettes de locuteurs ou de transcriptions de réunion en direct.** Aucune des deux n'est documentée comme disponible.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: "Amical fonctionne-t-elle hors ligne ?",
            a: "La FAQ répond oui, une fois un modèle Whisper local téléchargé ; la configuration initiale exige une connexion pour ce téléchargement. Les modèles cloud exigent une connexion. PromptQuorum ne l'a pas testée hors ligne.",
          },
          {
            q: 'Ma voix est-elle envoyée dans le cloud ?',
            a: "Seulement si vous choisissez le modèle cloud ou la mise en forme cloud, selon la FAQ, qui précise que ceux-ci envoient l'audio de la requête concernée. Le code est ouvert et PromptQuorum n'a pas inspecté le trafic réseau.",
          },
          {
            q: 'Amical est-elle vraiment gratuite ?',
            a: "D'après la page des tarifs, la dictée locale est gratuite et illimitée, et l'offre gratuite ajoute 2 000 mots par semaine de dictée cloud. Seule la dictée cloud illimitée nécessite l'offre Premium payante.",
          },
          {
            q: 'Puis-je utiliser mon propre modèle de langage ?',
            a: "Pour la passe de mise en forme Alpha, oui : Ollama ou tout point de terminaison local compatible OpenAI. Pour la reconnaissance vocale, la documentation indique que vous choisissez une variante de Whisper fournie ou le modèle cloud ; apporter son propre fournisseur de reconnaissance vocale n'est pas pris en charge.",
          },
          {
            q: 'Qui édite Amical ?',
            a: "Le code est publié par l'organisation GitHub amicalhq, et la politique de confidentialité désigne Exa Labs LLC comme prestataire de service.",
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          "Amical convient si vous voulez une dictée par raccourci libre et gratuite sur un Mac ou un PC Windows où, selon la documentation, Whisper s'exécute sur votre propre ordinateur. Elle offre une licence MIT, une offre locale gratuite et une version sortie cette semaine.",
          "Les réserves tiennent à la portée et à la vérifiabilité : pas de version Linux, macOS 15 pour Whisper local, une télémétrie activée par défaut selon la documentation, une passe de mise en forme Alpha et des affirmations de confidentialité que PromptQuorum n'a pas pu vérifier. Essayez l'offre locale gratuite avant de vous décider pour Premium.",
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          "[Site d'Amical](https://amical.ai/) — fonctions, plateformes et tarifs.",
          '[Page des tarifs](https://amical.ai/pricing) — offres Free, Premium et Enterprise.',
          '[Documentation](https://amical.ai/docs) — modèles locaux, mise en forme par IA, FAQ, télémétrie et guides de démarrage.',
          '[Politique de confidentialité](https://amical.ai/privacy) — traitement des données, destinée à l\'application mobile.',
          '[Dépôt GitHub](https://github.com/amicalhq/amical) — README, licence MIT et code source.',
          "[Versions GitHub](https://github.com/amicalhq/amical/releases) — fichiers d'installation et date de publication de la version 1.13.0.",
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Outils vocaux locaux comparés](/fr/power-local-llm/local-llm-voice-audio-compared) — synthèse vocale, reconnaissance vocale et agents vocaux côte à côte.',
          '[Test de Handy](/fr/power-local-llm/handy-review) — une application de dictée libre et gratuite pour Mac, Windows et Linux.',
          '[Test de Weesper Neon Flow](/fr/power-local-llm/weesper-neon-flow-review) — une application de dictée payante pour Mac et Windows.',
          '[Test de Whisper.cpp](/fr/power-local-llm/whisper-cpp-review) — le moteur ouvert derrière de nombreuses applications Whisper locales.',
          "[Le répertoire complet des logiciels de LLM locaux](/fr/directory) — un répertoire plus large des outils d'IA locale, toutes plateformes.",
          '[Test de Sprich : application de dictée allemande pour Mac Apple Silicon](/fr/power-local-llm/sprich-review) — une autre application de dictée pour Mac, pensée d’abord pour l’allemand, avec offre gratuite et réservée à Apple Silicon.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-09',
    dateModified: '2026-11-09',
    next_refresh_due: '2027-05-09',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/amical-review-hero-ja.webp',
    title: 'Amical レビュー：Mac・Windows向けの無料オープンソース音声入力アプリ',
    seoTitle: 'Amical レビュー：無料のオープンソース音声入力アプリ',
    intro: 'Amicalは、Mac・Windows向けの無料でMITライセンスの音声入力アプリです。ショートカットを押したまま話すと、お使いのコンピューター上でOpenAIのWhisperモデルを実行し、カーソルのあるアプリにテキストを入力します。このレビューでは、開発元の公式サイト、ドキュメント、GitHubリポジトリが示している点、ローカル処理が終わりオプションのクラウドが始まる境界、ディレクトリ内の他の音声入力ツールとの比較をまとめます。',
    metaDescription: 'Amicalのレビュー：Mac・Windows向けの無料MITライセンス音声入力アプリ。PC上でWhisperを実行し、モデル取得後はオフラインでも動作。実機検証なし。',
    twitterDescription: 'Amicalのレビュー：Mac・Windows向けの無料オープンソースのプッシュトゥトーク音声入力アプリ。ローカルWhisperの価格、プライバシー、制限、代替ツールを解説します。',
    audience: '音声をクラウドサービスに送らずに、あらゆるアプリへ無料のオープンソース音声入力をしたいMac・Windowsユーザー向け。価格、インストール、モデル、プライバシー、制限、代替ツールを扱います。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Amical review',
    targetKeywords: [
      'amical レビュー',
      'amical ai 音声入力',
      'オープンソース 音声入力アプリ',
      'whisper ローカル 音声入力 mac windows',
      'オフライン 音声入力',
      '無料 音声認識 デスクトップ',
      'whisper 音声入力アプリ',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: '**Amicalは、Mac・Windows向けの無料でMITライセンスの音声入力アプリで、OpenAIのWhisperモデルをお使いのコンピューター上で実行します。ドキュメントによると、ローカルモデルをダウンロードしたあとはオフラインで動作します。** オプションのクラウド音声入力もあり、有料のPremiumプランではクラウドを無制限に使えます。最新リリースは2026年11月7日のバージョン1.13.0です。このレビューは、開発元の公式サイト、ドキュメント、GitHubリポジトリに基づいており、実機での検証は行っていません。',
    quickAnswerTop: {
      ja: {
        question: 'Amicalはローカルで動く音声入力アプリですか？',
        answer: 'デスクトップアプリは、既定ではそうです。ドキュメントによると、文字起こしはWhisperによりローカルで実行され、サインインした場合はクラウドで実行されます。ローカルモデルを設定すればオフラインで動作します。クラウド音声認識とクラウドでの整形では、そのリクエストの音声が開発元に送信されます。コードは公開されていますが、PromptQuorumはネットワーク通信を調べていないため、プライバシーに関する主張は開発元自身によるものです。',
        bullets: [
          'ショートカットを押したまま話して離すと、メール、チャット、エディターなどのカーソル位置に、アプリに合わせて整えたテキストが入力されます。',
          '価格：ローカルでの音声入力は無制限で無料です。Premiumはクラウド音声入力が無制限になり、年払いで月$7、月払いで月$10です。',
          'Whisperは、Tiny（約78MB）からLarge v3（約3.1GB）まで6種類で、アプリ内でダウンロードします。',
          '対応はMac（ローカルWhisperにはmacOS 15以降が必要）とWindowsのみです。READMEにはLinuxは非対応とあります。',
          'ドキュメントによると、テレメトリーは既定でオンで、設定からオフにできます。',
        ],
        updatedDate: '2026-11-09',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Amicalの入手方法', anchor: 'get-it' },
      { label: 'Amicalの概要', anchor: 'at-a-glance' },
      { label: 'Amicalとは', anchor: 'what-is-amical' },
      { label: 'はじめ方', anchor: 'how-to-get-started' },
      { label: '機能', anchor: 'features' },
      { label: 'モデルとハードウェア', anchor: 'models-hardware' },
      { label: 'プライバシー・ライセンス・費用', anchor: 'privacy' },
      { label: 'メリットと制限', anchor: 'tradeoffs' },
      { label: 'Amicalと代替ツールの比較', anchor: 'vs-alternatives' },
      { label: 'Amicalが向いている人', anchor: 'who-should-use' },
      { label: 'Amicalが向いていない人', anchor: 'who-should-not-use' },
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
            text: 'Amicalは、ドキュメントによると、お使いのコンピューター上でWhisperを実行し、モデルのダウンロード後はオフラインで動作する、Mac・Windows向けの無料のオープンソース音声入力アプリです。',
          },
          {
            type: 'plain-terms',
            text: '代わりに入力してくれるマイクキーだと考えてください。ショートカットを押したまま話して離すと、コンピューターが音声をテキストに変換します。クラウドのオプションは使わずにおくこともできます。',
          },
        ],
        items: [
          'ローカルの主張：音声認識はWhisperにより端末内で実行されます。クラウド音声認識、クラウドでの整形、サインイン、モデルのダウンロード、テレメトリーにはインターネットが使われます。',
          'ライセンスと開発元：MITライセンスで、GitHubのorganizationであるamicalhqが公開しています。',
          '価格：ローカルでの音声入力は無制限で無料です。無制限のクラウド音声入力には有料のPremiumプランが必要です。',
          'メンテナンス：バージョン1.13.0が2026年11月7日にリリースされ、リポジトリは2026年11月8日に更新されており、プロジェクトは活発に開発されています。',
          '不足点：Linux版はなく、ローカルWhisperにはmacOS 15以降が必要で、AIによる整形はAlpha版と表示されています。',
        ],
      },
      getItAmical: {
        id: 'get-it',
        title: 'Amicalの入手方法',
        content: [
          '**Amicalはほかのデスクトップアプリと同じようにインストールでき、ターミナルは不要です。** 公式サイトまたはGitHubのリリースページからお使いのシステム用のインストーラーをダウンロードします。Whisperモデルは、初回セットアップ中にアプリ内で取得されます。',
        ],
        columns: [
          'プラットフォーム',
          '入手先',
        ],
        rows: [
          {
            'プラットフォーム': 'Mac',
            '入手先': '[Mac版をダウンロード](https://github.com/amicalhq/amical/releases/latest) — Apple Silicon・Intel用の.dmg。`brew install --cask amical`も可',
          },
          {
            'プラットフォーム': 'Windows',
            '入手先': '[Windows版をダウンロード](https://github.com/amicalhq/amical/releases/latest) — x64・arm64用の.exe',
          },
          {
            'プラットフォーム': 'iPhone・Android',
            '入手先': '[Amicalサイトのモバイルアプリ](https://amical.ai/) — App StoreとGoogle Play。Amicalアカウントでサインイン',
          },
          {
            'プラットフォーム': 'リリースノート',
            '入手先': '[GitHubリリース](https://github.com/amicalhq/amical/releases)と[Amicalのドキュメント](https://amical.ai/docs)',
          },
          {
            'プラットフォーム': '公式サイト',
            '入手先': '[amical.ai](https://amical.ai/)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[Amicalのプライバシーポリシー](https://amical.ai/privacy)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '[github.com/amicalhq/amical](https://github.com/amicalhq/amical) — MITライセンス',
          },
        ],
        note: 'プライバシーポリシーのページはモバイルアプリ向けと表示されており、PromptQuorumはデスクトップ版の別のポリシーを見つけられませんでした。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Amicalの概要',
        columns: [
          '項目',
          'Amical',
        ],
        rows: [
          { '項目': 'プラットフォーム', 'Amical': 'macOS・Windowsデスクトップ。Linuxは非対応' },
          { '項目': '価格', 'Amical': '無料（ローカル）。クラウドは有料のPremium' },
          { '項目': 'ライセンス', 'Amical': 'MIT、オープンソース' },
          { '項目': '実行場所', 'Amical': 'お使いのPC上でWhisper。サインイン時はクラウドも選択可' },
          { '項目': '対応言語', 'Amical': '開発元によると100以上（未検証）' },
          { '項目': '話者ラベル', 'Amical': '記載なし' },
          { '項目': 'リアルタイム文字起こし', 'Amical': '会議向けに計画中。音声入力はプッシュトゥトーク' },
          { '項目': 'CPUのみで利用可能', 'Amical': '記載なし。モデルは78MBから3.1GB' },
          { '項目': 'ローカルAPIサーバー', 'Amical': '記載なし' },
        ],
        note: '項目は、Local LLM Software Directoryで使われている音声認識の比較に沿っています。サイトに記載がない項目は、未対応ではなく不明という意味です。',
      },
      whatIsAmical: {
        id: 'what-is-amical',
        title: 'Amicalとは',
        content: [
          '**Amicalは、文字起こしの編集ツールではなく、プッシュトゥトーク方式の音声入力アプリです。** キーを押したまま、またはフローティングウィジェットをクリックして話すと、フォーカスのあるアプリにテキストが入力されます。アプリはそのアプリを検出して書式を調整し、たとえばメールでは挨拶文を独立した行にします。',
          'コードはGitHubのorganizationであるamicalhqにあります。プロジェクトには、ボイスノート（開発中）と、リアルタイムの会議文字起こし・音声コマンド（計画中）も挙げられていますが、このレビューが扱うのは音声入力アプリだけです。',
          'このレビューは、公式サイト、ドキュメント、プライバシーポリシー、GitHubリポジトリに基づいています。実機での検証は行っていないため、精度、速度、安定性は評価していません。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'はじめ方',
        content: [
          '**セットアップは、インストール、モデルの選択、ショートカットの設定です。** 手順はドキュメントのデスクトップ版クイックスタートに沿っています。',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: '[GitHubのリリースページ](https://github.com/amicalhq/amical/releases/latest)からMac用の.dmgまたはWindows用の.exeをダウンロードするか、Macでは`brew install --cask amical`を実行します。',
          },
          {
            title: '権限を許可する',
            whyItMatters: 'マイクへのアクセスを許可します。Macでは、Amicalがほかのアプリに貼り付けられるよう、アクセシビリティへのアクセスも許可します。',
          },
          {
            title: 'ローカルかクラウドかを選ぶ',
            whyItMatters: 'オンボーディングでは、クラウド（サインインのみで設定不要）かローカル（お使いのマシン上のWhisper、オフライン対応）を選べ、ハードウェアに応じてどちらかが推奨されます。',
          },
          {
            title: '押して、話して、離す',
            whyItMatters: 'プッシュトゥトークのショートカットを設定し、任意のテキスト欄をクリックして、押したまま話して離します。500ミリ秒より短い押下は誤操作とみなされ、破棄されます。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**機能の中心は、あらゆるアプリへの音声入力です。** 以下はすべてREADME、ドキュメント、リリースノートによります。',
        ],
        items: [
          '**どこでも音声入力。** プッシュトゥトークのショートカットまたはフローティングウィジェットで、フォーカスのあるアプリにテキストが貼り付けられます。',
          '**コンテキストに応じた整形。** Alpha版と表示されているオプションのAI処理が、出力をアクティブなアプリに合わせて整えます。ローカルの言語モデルまたはAmical Cloud接続が必要です。',
          '**言語。** 開発元によると100以上の言語に対応し、言語を自動検出します。バージョン1.13.0で地域ごとのバリエーションと広東語が追加されました。',
          '**カスタマイズ。** カスタム辞書、スニペット、カスタムプロンプト、文字起こしの履歴があり、バージョン1.13.0以降は、貼り付け後の修正から学習した語彙も使われます。',
          '**ノート。** ボイスノートは開発中と記載されています。',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'モデルとハードウェア',
        content: [
          '**AmicalはWhisperをローカルで、6種類のバリアントで実行します。** ドキュメントには、Tiny（約78MB）、Base（約148MB）、Small（約488MB）、Medium（約1.5GB）、Large v3（約3.1GB）、Large v3 Turbo（約1.5GB）が挙げられており、設定画面でそれぞれ速度と精度の評価が表示されます。',
          'READMEによると、MacでローカルWhisperを使うにはmacOS 15以降が必要です。RAMやGPUの要件は記載されていないため、お使いのマシンに合ったモデルを選んでください。オプションの整形処理には、ドキュメントがOllamaまたはOpenAI互換のエンドポイントを挙げています。速度や精度の数値は、ここでは再現していません。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー・ライセンス・費用',
        content: [
          '**ドキュメントには、Amicalはお使いのマシン上だけで動作でき、データがコンピューターの外に出ることも、アカウントも不要だと記載されています。** 文字起こし結果、ノート、語彙、音声ファイルはアプリのデータフォルダーに保存されます。FAQによると、クラウド音声認識、クラウドでの整形、サインインでは、そのリクエストの音声だけが送信され、それ以外は送信されません。',
          'テレメトリーは別の話です。ドキュメントによると、匿名のテレメトリーはアプリの起動、エラー、パフォーマンスを対象とし、既定でオンで、設定の詳細設定からオフにできます。履歴の項目でReportフラグを押すと、その音声と文字起こし結果も送信されます。バージョン1.13.0のリリースノートには、アプリがサインイン時にテレメトリーへの同意を求めるようになったとあり、この2つの記述は開発元のページ上で整合していません。モバイル版のプライバシーポリシーには、製品分析と広告効果測定が挙げられています。コードは公開されており、PromptQuorumはネットワーク通信を調べていないため、これらの記述は開発元自身によるものです。',
          'ライセンスはMITです。ローカルでの音声入力は無制限で無料です。無料プランでは週2,000語までのクラウド音声入力も使え、Premiumは年払いで月$7（年$84）、月払いで月$10です。Enterpriseは個別見積もりです。',
        ],
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
            'メリット': 'お使いのPC上のWhisper',
            '実際の使い勝手': 'モデルのダウンロード後はオフラインで音声入力でき、アカウントも不要です。',
            '制限・注意点': 'クラウドのオプションとテレメトリーがあります。PromptQuorumはネットワーク通信を調べていません。',
          },
          {
            'メリット': '無料でオープンソース',
            '実際の使い勝手': 'MITライセンスのコードで、ローカルでの音声入力は無制限で無料です。',
            '制限・注意点': 'クラウド音声入力を無制限にするには、有料のPremiumプランが必要です。',
          },
          {
            'メリット': 'あらゆるアプリに音声入力',
            '実際の使い勝手': '1つのショートカットで、メール、チャット、エディター、文書に使えます。',
            '制限・注意点': 'MacとWindowsのみで、ローカルWhisperにはmacOS 15以降が必要です。',
          },
          {
            'メリット': '6種類のモデルサイズ',
            '実際の使い勝手': '古いマシン向けの小型モデルと、精度重視の大型モデルを選べます。',
            '制限・注意点': 'Large v3は約3.1GBのディスクが必要で、速度の数値はここでは公開していません。',
          },
          {
            'メリット': 'コンテキストに応じた整形',
            '実際の使い勝手': '出力が、メールやチャットなどアクティブなアプリに合わせて整います。',
            '制限・注意点': 'Alpha版と表示され、ローカルの言語モデルまたはクラウド接続が必要です。',
          },
          {
            'メリット': '活発な開発',
            '実際の使い勝手': 'バージョン1.13.0が2026年11月7日に公開されました。',
            '制限・注意点': 'ボイスノートは開発中で、会議の文字起こしは計画段階です。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Amicalと代替ツールの比較',
        content: [
          'ディレクトリ内で最も近い音声入力ツールは、3つのデスクトップOSに対応する無料のオープンソースアプリ、Mac専用の無料アプリ、ハイブリッド型のオープンソースアプリ、そして有料のクローズドソースアプリです。',
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
            'アプリ': 'Amical',
            '対応': 'Mac、Windows',
            '価格とライセンス': 'ローカル無料、Premiumはクラウド、MIT',
            '役割': 'プッシュトゥトーク音声入力',
            '主な違い': 'オープンソース。ローカルWhisperとオプションのクラウド',
          },
          {
            'アプリ': '[Handy](/ja/power-local-llm/handy-review)',
            '対応': 'Mac、Windows、Linux',
            '価格とライセンス': '無料、MIT',
            '役割': 'プッシュトゥトーク音声入力',
            '主な違い': '無料のオープンソース。Linuxにも対応',
          },
          {
            'アプリ': '[OpenWhispr](/ja/power-local-llm/openwhispr-review)',
            '対応': 'Mac、Windows、Linux、iOS',
            '価格とライセンス': 'フリーミアム、MIT',
            '役割': 'ローカルまたはクラウドで使える音声入力',
            '主な違い': 'ローカルモデル、自分のAPIキー、同社クラウドから選べる',
          },
          {
            'アプリ': '[FluidVoice](/ja/power-local-llm/fluidvoice-review)',
            '対応': 'Mac',
            '価格とライセンス': '無料、GPL-3.0',
            '役割': 'Mac向け音声入力アプリ',
            '主な違い': '無料のオープンソース。Mac専用',
          },
          {
            'アプリ': '[Weesper Neon Flow](/ja/power-local-llm/weesper-neon-flow-review)',
            '対応': 'Mac、Windows',
            '価格とライセンス': '体験後は有料、プロプライエタリ',
            '役割': 'プッシュトゥトーク音声入力',
            '主な違い': 'クローズドソースで有料。端末内でWhisper',
          },
        ],
        note: 'サードパーティ製アプリの対応環境、価格、機能は頻繁に変わります。決める前に各プロジェクトの公式ページで最新情報をご確認ください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Amicalが向いている人',
        items: [
          '**MacまたはWindowsで作業する書き手やオフィスワーカー。** 1つのショートカットで、メール、チャット、文書に音声入力できます。',
          '**クラウドの音声入力を避けたい人。** ドキュメントによると、ローカルのWhisperなら音声認識はコンピューター上にとどまります。',
          '**オープンソースを好む人。** MITライセンスのコードは公開されており、ローカルでの音声入力は無料です。',
          '**多言語で作業する人。** 開発元によると100以上の言語に対応し、自動検出もあります。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Amicalが向いていない人',
        items: [
          '**Linuxユーザー。** READMEにはLinuxは非対応とあります。Linuxに対応しているのはHandyです。',
          '**macOS 14以前のMacユーザー。** ローカルWhisperにはmacOS 15以降が必要です。',
          '**既定でテレメトリーを送りたくない人。** ドキュメントによると、テレメトリーは既定でオンで、自分でオフにする必要があります。',
          '**今すぐ話者ラベルやライブの会議文字起こしが必要な人。** どちらも、利用可能とはドキュメントに記載されていません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Amicalはオフラインで使えますか？',
            a: 'FAQによると、ローカルのWhisperモデルをダウンロードしたあとは使えます。そのダウンロードのため、初回セットアップには接続が必要です。クラウドモデルには接続が必要です。PromptQuorumはオフラインでの動作を検証していません。',
          },
          {
            q: '音声はクラウドに送信されますか？',
            a: 'FAQによると、クラウドモデルまたはクラウドでの整形を選んだ場合のみで、その場合はそのリクエストの音声が送信されます。コードは公開されていますが、PromptQuorumはネットワーク通信を調べていません。',
          },
          {
            q: 'Amicalは本当に無料ですか？',
            a: '料金ページによると、ローカルでの音声入力は無制限で無料で、無料プランでは週2,000語までのクラウド音声入力も使えます。無制限のクラウド音声入力だけが有料のPremiumプランを必要とします。',
          },
          {
            q: '自分の言語モデルを使えますか？',
            a: 'Alpha版の整形処理では、使えます。Ollamaまたは任意のOpenAI互換のローカルエンドポイントです。音声認識については、ドキュメントによると、同梱のWhisperバリアントかクラウドモデルを選ぶ形で、独自の音声認識プロバイダーを持ち込むことには対応していません。',
          },
          {
            q: 'Amicalは誰が作っていますか？',
            a: 'コードはGitHubのorganizationであるamicalhqが公開しており、プライバシーポリシーはExa Labs LLCをサービス提供事業者としています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: [
          'MacまたはWindows PCで、ドキュメントによるとWhisperが自分のコンピューター上で動く、無料のオープンソースのプッシュトゥトーク音声入力を使いたい方にAmicalは向いています。MITライセンス、無料のローカル版、今週のリリースがあります。',
          '注意点は対応範囲と検証可能性です。Linux版がなく、ローカルWhisperにはmacOS 15が必要で、ドキュメントによるとテレメトリーは既定でオンで、整形処理はAlpha版であり、プライバシーの主張はPromptQuorumでは確認できませんでした。Premiumを検討する前に、無料のローカル版をお試しください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Amical公式サイト](https://amical.ai/) — 機能、プラットフォーム、価格。',
          '[料金ページ](https://amical.ai/pricing) — Free、Premium、Enterpriseの各プラン。',
          '[ドキュメント](https://amical.ai/docs) — ローカルモデル、AIによる整形、FAQ、テレメトリー、クイックスタートガイド。',
          '[プライバシーポリシー](https://amical.ai/privacy) — データの取り扱い。モバイルアプリ向けと表示。',
          '[GitHubリポジトリ](https://github.com/amicalhq/amical) — README、MITライセンス、ソースコード。',
          '[GitHubリリース](https://github.com/amicalhq/amical/releases) — インストーラーのアセットとバージョン1.13.0のリリース日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカル音声・オーディオツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — 音声合成、音声認識、音声エージェントを並べて比較。',
          '[Handyレビュー](/ja/power-local-llm/handy-review) — Mac、Windows、Linux向けの無料オープンソース音声入力アプリ。',
          '[Weesper Neon Flowレビュー](/ja/power-local-llm/weesper-neon-flow-review) — Mac・Windows向けの有料音声入力アプリ。',
          '[Whisper.cppレビュー](/ja/power-local-llm/whisper-cpp-review) — 多くのローカルWhisperアプリの基盤となるオープンなエンジン。',
          '[Local LLM Software Directory全体](/ja/directory) — プラットフォームを横断してローカルAIツールを集めた、より広いディレクトリ。',
          '[Sprichレビュー：Apple Silicon搭載Mac向けドイツ製音声入力アプリ](/ja/power-local-llm/sprich-review) — ドイツ語優先のもう一つのMac用音声入力アプリ。無料プランがあり、Apple Siliconのみ対応。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-09',
    dateModified: '2026-11-09',
    next_refresh_due: '2027-05-09',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/amical-review-hero-zh.webp',
    title: 'Amical评测：适用于Mac和Windows的免费开源听写应用',
    seoTitle: 'Amical评测：适用于Mac和Windows的免费开源听写应用',
    intro: 'Amical是一款适用于Mac和Windows的免费听写应用，采用MIT许可证：按住快捷键说话，它就把文字输入到光标所在的任意应用中，并在你自己的电脑上运行OpenAI的Whisper模型。本评测梳理其官网、文档和GitHub仓库记载的内容、本地运行与可选云端之间的界线，以及它与目录中其他听写工具的对比。',
    metaDescription: 'Amical评测：适用于Mac和Windows的免费MIT开源听写应用，在你的电脑上运行Whisper，下载模型后可离线使用。价格、隐私与限制，未经实测。',
    twitterDescription: 'Amical评测：适用于Mac和Windows的免费开源按键听写工具，本地运行Whisper。价格、隐私、限制与替代方案。',
    audience: '希望在任意应用中使用免费开源听写、又不想把语音发送到云服务的Mac和Windows用户——涵盖价格、安装、模型、隐私、限制和替代方案。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Amical review',
    targetKeywords: [
      'amical 评测',
      'amical ai 听写',
      '开源听写应用',
      'mac windows 本地 whisper 听写',
      '离线语音听写',
      '免费桌面语音转文字',
      'whisper 听写应用',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: '**Amical是一款适用于Mac和Windows的免费听写应用，采用MIT许可证，在你自己的电脑上运行OpenAI的Whisper模型，据其文档称，下载本地模型后即可离线使用。** 它也提供可选的云端听写：付费的Premium方案提供不限量的云端使用。最新版本为2026年11月7日发布的1.13.0。本评测依据开发者公开的官网、文档和GitHub仓库，并非实际上手测试。',
    quickAnswerTop: {
      zh: {
        question: 'Amical是本地听写应用吗？',
        answer: '就桌面应用而言，默认是：文档称转录用Whisper在本地运行，登录后也可使用云端，并且设置好本地模型后可离线使用。云端语音和云端格式化会把该次请求的音频发送给开发者。代码是开源的，但PromptQuorum没有检查网络流量，因此隐私说法仍出自开发者自己。',
        bullets: [
          '按住快捷键、说话、松开：文字出现在邮件、聊天或编辑器等应用的光标处，并按应用调整格式。',
          '价格：免费，本地听写不限量；Premium提供不限量的云端听写，按年付费每月$7，按月付费每月$10。',
          '六种Whisper版本，从Tiny（约78 MB）到Large v3（约3.1 GB），在应用内下载。',
          '仅支持Mac（本地Whisper需要macOS 15或更高版本）和Windows；README称不支持Linux。',
          '文档称遥测默认开启，可在设置中关闭。',
        ],
        updatedDate: '2026-11-09',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: '获取Amical', anchor: 'get-it' },
      { label: 'Amical概览', anchor: 'at-a-glance' },
      { label: 'Amical是什么', anchor: 'what-is-amical' },
      { label: '入门步骤', anchor: 'how-to-get-started' },
      { label: '功能', anchor: 'features' },
      { label: '模型与硬件', anchor: 'models-hardware' },
      { label: '隐私、许可与费用', anchor: 'privacy' },
      { label: '优势与局限', anchor: 'tradeoffs' },
      { label: 'Amical与替代方案对比', anchor: 'vs-alternatives' },
      { label: '适合使用Amical的人', anchor: 'who-should-use' },
      { label: '不适合使用Amical的人', anchor: 'who-should-not-use' },
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
            text: 'Amical是一款适用于Mac和Windows的免费开源听写应用，据其文档称，它在你自己的电脑上运行Whisper，下载模型后可离线使用。',
          },
          {
            type: 'plain-terms',
            text: '把它想成一个会替你打字的麦克风键：按住快捷键、说话、松开，你的电脑就把语音转成文字，另有云端选项，不用也可以。',
          },
        ],
        items: [
          '本地说法：语音识别在设备上用Whisper运行；云端语音、云端格式化、登录、模型下载和遥测会使用互联网。',
          '许可与开发者：MIT许可证，由GitHub组织amicalhq发布。',
          '价格：免费，本地听写不限量；不限量的云端听写需要付费的Premium方案。',
          '维护状态：版本1.13.0于2026年11月7日发布，仓库于2026年11月8日更新，说明项目仍在积极开发。',
          '不足：没有Linux版本，本地Whisper需要macOS 15或更高版本，AI格式化功能标注为Alpha。',
        ],
      },
      getItAmical: {
        id: 'get-it',
        title: '获取Amical',
        content: [
          '**Amical的安装方式与其他桌面应用相同，无需使用终端。** 从官网或GitHub发布页面下载适合你系统的安装包；Whisper模型在首次运行设置时于应用内下载。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'Mac',
            '获取方式': '[下载Mac版](https://github.com/amicalhq/amical/releases/latest) — 适用于Apple Silicon或Intel的.dmg；也可用`brew install --cask amical`',
          },
          {
            '平台': 'Windows',
            '获取方式': '[下载Windows版](https://github.com/amicalhq/amical/releases/latest) — 适用于x64或arm64的.exe',
          },
          {
            '平台': 'iPhone和Android',
            '获取方式': '[Amical官网上的移动应用](https://amical.ai/) — App Store和Google Play；需用Amical账号登录',
          },
          {
            '平台': '发布说明',
            '获取方式': '[GitHub Releases](https://github.com/amicalhq/amical/releases)和[Amical文档](https://amical.ai/docs)',
          },
          {
            '平台': '官网',
            '获取方式': '[amical.ai](https://amical.ai/)',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[Amical隐私政策](https://amical.ai/privacy)',
          },
          {
            '平台': '源代码',
            '获取方式': '[github.com/amicalhq/amical](https://github.com/amicalhq/amical) — MIT许可证',
          },
        ],
        note: '隐私政策页面标注适用于移动应用；PromptQuorum没有找到单独的桌面版隐私政策。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Amical概览',
        columns: ['属性', 'Amical'],
        rows: [
          { '属性': '平台', 'Amical': 'macOS和Windows桌面版；不支持Linux' },
          { '属性': '价格', 'Amical': '免费（本地）；云端需付费Premium' },
          { '属性': '许可', 'Amical': 'MIT，开源' },
          { '属性': '运行方式', 'Amical': '在你的电脑上用Whisper运行；登录后可选云端' },
          { '属性': '语言', 'Amical': '开发者称100多种（未核实）' },
          { '属性': '说话人标注', 'Amical': '未说明' },
          { '属性': '实时转录', 'Amical': '会议功能计划中；听写为按键说话' },
          { '属性': '仅用CPU可用', 'Amical': '未说明；模型大小从78 MB到3.1 GB' },
          { '属性': '本地API服务器', 'Amical': '未说明' },
        ],
        note: '各属性沿用Local LLM Software Directory中语音转文字对比所用的项目。官网未提及，表示未知，而不是不支持。',
      },
      whatIsAmical: {
        id: 'what-is-amical',
        title: 'Amical是什么',
        content: [
          '**Amical是一款按键说话式的听写应用，而不是转录编辑器。** 你按住按键或点击悬浮小组件、说话，文字就会进入当前获得焦点的应用；应用会识别该应用并调整格式，例如在邮件中把问候语单独成行。',
          '代码托管在GitHub组织amicalhq下。项目还列出了语音笔记（开发中）以及实时会议转录和语音命令（计划中）；本评测只涵盖听写应用。',
          '本评测依据官网、文档、隐私政策和GitHub仓库，没有进行实际上手测试，因此这里不对准确度、速度和稳定性做评级。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '入门步骤',
        content: [
          '**设置包括安装、选择模型和设定快捷键。** 以下步骤依据文档中的桌面版快速入门。',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '从[GitHub发布页面](https://github.com/amicalhq/amical/releases/latest)下载Mac版的.dmg或Windows版的.exe，或在Mac上运行`brew install --cask amical`。',
          },
          {
            title: '授予权限',
            whyItMatters: '允许麦克风访问；在Mac上还要允许辅助功能访问，以便Amical粘贴到其他应用中。',
          },
          {
            title: '选择本地或云端',
            whyItMatters: '引导流程提供云端（登录即可，无需设置）或本地（在你的电脑上运行Whisper，可离线），并根据你的硬件推荐其中一种。',
          },
          {
            title: '按住、说话、松开',
            whyItMatters: '设定按键说话的快捷键，点进任意文本框，按住快捷键，说话，然后松开；短于500毫秒的按压会被视为误触并丢弃。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**功能集中在向任意应用听写。** 以下内容均来自README、文档和发布说明。',
        ],
        items: [
          '**随处听写。** 通过按键说话的快捷键或悬浮小组件，把文字粘贴到当前获得焦点的应用中。',
          '**上下文感知格式化。** 可选的AI处理（标注为Alpha）会按当前应用调整输出，需要本地语言模型或Amical Cloud连接。',
          '**语言。** 开发者称支持100多种语言并可自动检测语言；版本1.13.0新增了地区变体和粤语。',
          '**个性化。** 自定义词汇、文本片段、自定义提示、转录历史，以及自版本1.13.0起，从粘贴后的修改中学习词汇。',
          '**笔记。** 语音笔记列为开发中。',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '模型与硬件',
        content: [
          '**Amical在本地运行Whisper，提供六种版本。** 文档列出了Tiny（约78 MB）、Base（约148 MB）、Small（约488 MB）、Medium（约1.5 GB）、Large v3（约3.1 GB）和Large v3 Turbo（约1.5 GB），设置中为每个版本标注了速度和准确度评级。',
          'README称，在Mac上本地Whisper需要macOS 15或更高版本。没有说明内存或GPU要求，因此请选择适合你电脑的模型；对于可选的格式化处理，文档提到Ollama或任何兼容OpenAI的端点。这里没有复现任何速度或准确度数据。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私、许可与费用',
        content: [
          '**文档称，Amical可以完全在你的电脑上运行，没有数据离开电脑，也无需账号。** 转录、笔记、词汇和音频文件存放在应用数据文件夹中。据常见问题，云端语音、云端格式化和登录只会发送该次请求的音频，不会发送其他内容。',
          '遥测则是另一回事。文档称，匿名遥测涵盖应用启动、错误和性能，默认开启，可在“设置”“高级”中关闭；点击历史记录条目上的“报告”标记还会发送该条音频和转写文字。版本1.13.0的发布说明称，应用现在会在登录时征求遥测同意，而开发者的页面没有协调这两种说法。移动端隐私政策列出了产品分析和广告效果衡量。代码是开源的，PromptQuorum没有检查网络流量，因此这些说法出自开发者自己。',
          '许可证为MIT。本地听写免费且不限量；免费方案每周另含2,000词的云端听写，Premium按年付费每月$7（共$84），按月付费每月$10。企业版为定制。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '优势与局限',
        columns: ['优势', '实际使用中的意义', '局限 / 注意事项'],
        rows: [
          {
            '优势': 'Whisper在你的电脑上运行',
            '实际使用中的意义': '下载模型后听写可离线运行，无需账号。',
            '局限 / 注意事项': '存在云端选项和遥测；PromptQuorum没有检查网络流量。',
          },
          {
            '优势': '免费且开源',
            '实际使用中的意义': 'MIT代码，本地听写免费且不限量。',
            '局限 / 注意事项': '不限量的云端听写需要付费的Premium方案。',
          },
          {
            '优势': '可在任意应用中听写',
            '实际使用中的意义': '一个快捷键可用于邮件、聊天、编辑器和文档。',
            '局限 / 注意事项': '仅限Mac和Windows；本地Whisper需要macOS 15或更高版本。',
          },
          {
            '优势': '六种模型大小',
            '实际使用中的意义': '较小的模型适合旧电脑，较大的模型提高准确度。',
            '局限 / 注意事项': 'Large v3约需3.1 GB磁盘空间；这里没有公布速度数据。',
          },
          {
            '优势': '上下文感知格式化',
            '实际使用中的意义': '输出按当前应用调整，例如邮件或聊天。',
            '局限 / 注意事项': '标注为Alpha，需要本地语言模型或云端连接。',
          },
          {
            '优势': '积极开发',
            '实际使用中的意义': '版本1.13.0于2026年11月7日发布。',
            '局限 / 注意事项': '语音笔记开发中；会议转录仅在计划中。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Amical与替代方案对比',
        content: [
          '目录中最接近的听写工具包括：一款支持三种桌面系统的免费开源应用、一款免费的仅限Mac的应用、一款混合模式的开源应用，以及一款付费的闭源应用。',
        ],
        columns: ['应用', '平台', '价格与许可', '定位', '主要区别'],
        rows: [
          {
            '应用': 'Amical',
            '平台': 'Mac、Windows',
            '价格与许可': '本地免费，云端Premium，MIT',
            '定位': '按键听写',
            '主要区别': '开源；本地Whisper加可选云端',
          },
          {
            '应用': '[Handy](/zh/power-local-llm/handy-review)',
            '平台': 'Mac、Windows、Linux',
            '价格与许可': '免费，MIT',
            '定位': '按键听写',
            '主要区别': '免费且开源；支持Linux',
          },
          {
            '应用': '[OpenWhispr](/zh/power-local-llm/openwhispr-review)',
            '平台': 'Mac、Windows、Linux、iOS',
            '价格与许可': '免费增值，MIT',
            '定位': '本地或云端模式的听写',
            '主要区别': '可选择本地模型、自己的API密钥或其云服务',
          },
          {
            '应用': '[FluidVoice](/zh/power-local-llm/fluidvoice-review)',
            '平台': 'Mac',
            '价格与许可': '免费，GPL-3.0',
            '定位': 'Mac听写应用',
            '主要区别': '免费且开源；仅限Mac',
          },
          {
            '应用': '[Weesper Neon Flow](/zh/power-local-llm/weesper-neon-flow-review)',
            '平台': 'Mac、Windows',
            '价格与许可': '试用后付费，专有',
            '定位': '按键听写',
            '主要区别': '闭源且付费；Whisper在设备上运行',
          },
        ],
        note: '第三方应用的平台、价格和功能经常变化。决定之前，请在各项目自己的页面上核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合使用Amical的人',
        items: [
          '**Mac或Windows上的写作者和办公人员。** 一个快捷键即可在邮件、聊天和文档中听写。',
          '**回避云端听写的人。** 据文档称，本地Whisper让语音识别保留在电脑上。',
          '**开源软件用户。** MIT代码公开，本地听写免费。',
          '**使用多种语言的用户。** 开发者称支持100多种语言，并可自动检测。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '不适合使用Amical的人',
        items: [
          '**Linux用户。** README称不支持Linux；Handy支持Linux。',
          '**使用macOS 14或更早版本的Mac用户。** 本地Whisper需要macOS 15或更高版本。',
          '**希望默认不启用遥测的人。** 文档称遥测默认开启，需要手动关闭。',
          '**目前就需要说话人标注或实时会议转录的人。** 文档均未说明这两项功能可用。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Amical可以离线使用吗？',
            a: '常见问题称可以，前提是已下载本地Whisper模型；首次运行设置需要联网下载。云端模型需要联网。PromptQuorum没有在离线状态下测试。',
          },
          {
            q: '我的声音会被发送到云端吗？',
            a: '据常见问题，只有在你选择云端模型或云端格式化时才会，它称这些会发送该次请求的音频。代码是开源的，PromptQuorum没有检查网络流量。',
          },
          {
            q: 'Amical真的免费吗？',
            a: '据定价页面，本地听写免费且不限量，免费方案每周另含2,000词的云端听写。只有不限量的云端听写需要付费的Premium方案。',
          },
          {
            q: '我可以使用自己的语言模型吗？',
            a: '对于Alpha阶段的格式化处理，可以：使用Ollama或任何兼容OpenAI的本地端点。对于语音，文档称你选择内置的Whisper版本或云端模型；不支持自带语音服务提供方。',
          },
          {
            q: '谁开发了Amical？',
            a: '代码由GitHub组织amicalhq发布，隐私政策称服务提供方为Exa Labs LLC。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '如果你想在Mac或Windows电脑上使用免费开源的按键听写，并且据文档称Whisper在你自己的电脑上运行，Amical是个合适的选择。它采用MIT许可证，提供免费的本地方案，并且本周刚有新版本发布。',
          '需要注意的是适用范围和可验证性：没有Linux版本、本地Whisper需要macOS 15、据文档称遥测默认开启、格式化处理仍为Alpha，而且PromptQuorum无法核实隐私说法。在决定是否购买Premium之前，请先试用免费的本地方案。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Amical官网](https://amical.ai/) — 功能、平台和价格。',
          '[价格页面](https://amical.ai/pricing) — 免费、Premium和企业方案。',
          '[文档](https://amical.ai/docs) — 本地模型、AI格式化、常见问题、遥测和快速入门指南。',
          '[隐私政策](https://amical.ai/privacy) — 数据处理，标注适用于移动应用。',
          '[GitHub仓库](https://github.com/amicalhq/amical) — README、MIT许可证和源代码。',
          '[GitHub Releases](https://github.com/amicalhq/amical/releases) — 安装包文件和版本1.13.0的发布日期。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地语音和音频工具对比](/zh/power-local-llm/local-llm-voice-audio-compared) — 文字转语音、语音转文字和语音代理并排比较。',
          '[Handy评测](/zh/power-local-llm/handy-review) — 适用于Mac、Windows和Linux的免费开源听写应用。',
          '[Weesper Neon Flow评测](/zh/power-local-llm/weesper-neon-flow-review) — 适用于Mac和Windows的付费听写应用。',
          '[Whisper.cpp评测](/zh/power-local-llm/whisper-cpp-review) — 许多本地Whisper应用背后的开放引擎。',
          '[完整的Local LLM Software Directory](/zh/directory) — 涵盖多个平台的本地AI工具的更广泛目录。',
          '[Sprich评测：适用于 Apple Silicon Mac 的德国听写应用](/zh/power-local-llm/sprich-review) — 另一款以德语为先的 Mac 听写应用，有免费套餐，仅支持 Apple Silicon。',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-09',
    dateModified: '2026-11-09',
    next_refresh_due: '2027-05-09',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/amical-review-hero-es.webp',
    title: 'Reseña de Amical: dictado gratuito y de código abierto para Mac y Windows',
    seoTitle: 'Reseña de Amical: dictado gratuito de código abierto',
    intro: 'Amical es una app de dictado gratuita con licencia MIT para Mac y Windows: mantienes pulsado un atajo, hablas y la app escribe el texto en la aplicación que tenga el cursor, con el modelo Whisper de OpenAI ejecutándose en tu propio ordenador. Esta reseña resume lo que dicen la web, la documentación y el repositorio de GitHub del fabricante, dónde termina la ruta local y empieza la nube opcional, y cómo se compara Amical con otras herramientas de dictado del directorio.',
    metaDescription: 'Reseña de Amical: dictado gratuito con licencia MIT para Mac y Windows, con Whisper en tu PC y sin conexión tras descargar un modelo. No probada.',
    twitterDescription: 'Reseña de Amical: dictado por atajo gratuito y de código abierto para Mac y Windows con Whisper local. Precio, privacidad, límites y alternativas.',
    audience: 'Usuarios de Mac y Windows que quieren dictar gratis y con código abierto en cualquier app sin enviar su voz a un servicio en la nube — cubre precio, instalación, modelos, privacidad, límites y alternativas.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Amical review',
    targetKeywords: [
      'reseña amical',
      'amical dictado con ia',
      'app de dictado de código abierto',
      'dictado local con whisper mac windows',
      'dictado por voz sin conexión',
      'voz a texto gratis en el escritorio',
      'app de dictado whisper',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: '**Amical es una app de dictado gratuita con licencia MIT para Mac y Windows que ejecuta el modelo Whisper de OpenAI en tu propio ordenador y que, según su documentación, funciona sin conexión una vez descargado un modelo local.** También ofrece dictado opcional en la nube: el plan de pago Premium añade uso ilimitado de la nube. La versión más reciente es la 1.13.0, del 7 de noviembre de 2026. Esta reseña se basa en la web, la documentación y el repositorio de GitHub del fabricante, no en una prueba práctica.',
    quickAnswerTop: {
      es: {
        question: '¿Es Amical una app de dictado local?',
        answer: 'En la app de escritorio, sí por defecto: la documentación dice que la transcripción se ejecuta en local con Whisper, o en la nube si inicias sesión, y que funciona sin conexión una vez configurado un modelo local. El reconocimiento de voz y el formato en la nube envían al fabricante el audio de esa solicitud. El código es abierto, pero PromptQuorum no inspeccionó el tráfico de red, así que las afirmaciones de privacidad son del propio fabricante.',
        bullets: [
          'Mantén pulsado un atajo, habla y suéltalo: el texto aparece en el cursor en apps como el correo, el chat o un editor, con el formato adaptado a la app.',
          'Precio: gratis con dictado local ilimitado; Premium añade dictado ilimitado en la nube por 7 $ al mes facturados anualmente o 10 $ al mes facturados mensualmente.',
          'Seis variantes de Whisper, de Tiny (unos 78 MB) a Large v3 (unos 3,1 GB), que se descargan dentro de la app.',
          'Solo Mac (el Whisper local necesita macOS 15 o posterior) y Windows; el README dice que Linux no es compatible.',
          'La documentación dice que la telemetría está activada por defecto y se puede desactivar en Ajustes.',
        ],
        updatedDate: '2026-11-09',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Conseguir Amical', anchor: 'get-it' },
      { label: 'Amical de un vistazo', anchor: 'at-a-glance' },
      { label: 'Qué es Amical', anchor: 'what-is-amical' },
      { label: 'Primeros pasos', anchor: 'how-to-get-started' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Modelos y hardware', anchor: 'models-hardware' },
      { label: 'Privacidad, licencia y coste', anchor: 'privacy' },
      { label: 'Equilibrio: ventajas y limitaciones', anchor: 'tradeoffs' },
      { label: 'Amical frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar Amical', anchor: 'who-should-use' },
      { label: 'Quién no debería usar Amical', anchor: 'who-should-not-use' },
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
            text: 'Amical es una app de dictado gratuita y de código abierto para Mac y Windows que, según su documentación, ejecuta Whisper en tu propio ordenador y funciona sin conexión tras descargar un modelo.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en una tecla de micrófono que escribe por ti: mantienes el atajo, hablas, lo sueltas y tu ordenador convierte la voz en texto, con una opción en la nube que puedes dejar sin usar.',
          },
        ],
        items: [
          'Afirmación de uso local: el reconocimiento de voz se ejecuta en el dispositivo con Whisper; el reconocimiento y el formato en la nube, el inicio de sesión, las descargas de modelos y la telemetría usan internet.',
          'Licencia y fabricante: MIT, publicada por la organización de GitHub amicalhq.',
          'Precio: gratis con dictado local ilimitado; el dictado ilimitado en la nube requiere el plan Premium de pago.',
          'Mantenimiento: la versión 1.13.0 salió el 7 de noviembre de 2026 y el repositorio se actualizó el 8 de noviembre de 2026, así que el proyecto se desarrolla de forma activa.',
          'Carencias: sin versión para Linux, el Whisper local necesita macOS 15 o posterior y el paso de formato con IA está marcado como Alpha.',
        ],
      },
      getItAmical: {
        id: 'get-it',
        title: 'Conseguir Amical',
        content: [
          '**Amical se instala como cualquier app de escritorio, no hace falta terminal.** Descarga el instalador para tu sistema desde la web oficial o desde la página de versiones de GitHub; el modelo Whisper se descarga dentro de la app durante la configuración inicial.',
        ],
        columns: ['Plataforma', 'Dónde conseguirla'],
        rows: [
          {
            Plataforma: 'Mac',
            'Dónde conseguirla': '[Descargar para Mac](https://github.com/amicalhq/amical/releases/latest) — .dmg para Apple Silicon o Intel; también `brew install --cask amical`',
          },
          {
            Plataforma: 'Windows',
            'Dónde conseguirla': '[Descargar para Windows](https://github.com/amicalhq/amical/releases/latest) — .exe para x64 o arm64',
          },
          {
            Plataforma: 'iPhone y Android',
            'Dónde conseguirla': '[Apps móviles en la web de Amical](https://amical.ai/) — App Store y Google Play; inicio de sesión con una cuenta de Amical',
          },
          {
            Plataforma: 'Notas de versión',
            'Dónde conseguirla': '[Versiones de GitHub](https://github.com/amicalhq/amical/releases) y la [documentación de Amical](https://amical.ai/docs)',
          },
          {
            Plataforma: 'Sitio web',
            'Dónde conseguirla': '[amical.ai](https://amical.ai/)',
          },
          {
            Plataforma: 'Política de privacidad',
            'Dónde conseguirla': '[Política de privacidad de Amical](https://amical.ai/privacy)',
          },
          {
            Plataforma: 'Código fuente',
            'Dónde conseguirla': '[github.com/amicalhq/amical](https://github.com/amicalhq/amical) — licencia MIT',
          },
        ],
        note: 'La página de la política de privacidad está dirigida a la app móvil; PromptQuorum no encontró una política de privacidad independiente para el escritorio.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Amical de un vistazo',
        columns: ['Atributo', 'Amical'],
        rows: [
          { Atributo: 'Plataforma', Amical: 'Escritorio macOS y Windows; Linux no es compatible' },
          { Atributo: 'Precio', Amical: 'Gratis (local); plan Premium para la nube' },
          { Atributo: 'Licencia', Amical: 'MIT, código abierto' },
          { Atributo: 'Ejecución', Amical: 'En tu ordenador con Whisper; nube opcional al iniciar sesión' },
          { Atributo: 'Idiomas', Amical: 'Más de 100 según el fabricante (no verificado)' },
          { Atributo: 'Etiquetas de hablante', Amical: 'No indicado' },
          { Atributo: 'Transcripción en tiempo real', Amical: 'Prevista para reuniones; el dictado es por atajo' },
          { Atributo: 'Usable solo con CPU', Amical: 'No indicado; modelos de 78 MB a 3,1 GB' },
          { Atributo: 'Servidor de API local', Amical: 'No indicado' },
        ],
        note: 'Los atributos siguen la comparación de voz a texto del Local LLM Software Directory. Que la web no mencione algo significa desconocido, no no compatible.',
      },
      whatIsAmical: {
        id: 'what-is-amical',
        title: 'Qué es Amical',
        content: [
          '**Amical es una app de dictado por atajo, no un editor de transcripciones.** Mantienes pulsada una tecla o haces clic en el widget flotante, hablas y el texto llega a la app que tiene el foco; la app detecta cuál es y ajusta el formato, por ejemplo un saludo en su propia línea en un correo.',
          'El código está en la organización de GitHub amicalhq. El proyecto también cita las notas de voz (en curso) y la transcripción de reuniones en tiempo real y los comandos de voz (previstos); esta reseña cubre solo la app de dictado.',
          'Esta reseña se basa en la web, la documentación, la política de privacidad y el repositorio de GitHub. No hubo prueba práctica, así que aquí no se valoran la precisión, la velocidad ni la estabilidad.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeros pasos',
        content: [
          '**La puesta en marcha es una instalación, la elección de un modelo y un atajo.** Los pasos siguen la guía de inicio rápido de escritorio de la documentación.',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Descarga el .dmg para Mac o el .exe para Windows desde la [página de versiones de GitHub](https://github.com/amicalhq/amical/releases/latest), o ejecuta `brew install --cask amical` en un Mac.',
          },
          {
            title: 'Concede los permisos',
            whyItMatters: 'Permite el acceso al micrófono; en un Mac permite también el acceso de accesibilidad para que Amical pueda pegar en otras apps.',
          },
          {
            title: 'Elige Local o Nube',
            whyItMatters: 'La configuración inicial ofrece Nube (inicio de sesión, sin ajustes) o Local (Whisper en tu equipo, sin conexión) y recomienda una según tu hardware.',
          },
          {
            title: 'Mantén, habla, suelta',
            whyItMatters: 'Define el atajo de pulsar para hablar, haz clic en cualquier campo de texto, mantenlo pulsado, habla y suéltalo; una pulsación de menos de 500 ms se considera un despiste y se descarta.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El conjunto de funciones se centra en dictar en cualquier app.** Todo lo siguiente procede del README, la documentación y las notas de versión.',
        ],
        items: [
          '**Dictado en cualquier sitio.** El texto se pega en la app con el foco mediante un atajo de pulsar para hablar o el widget flotante.',
          '**Formato según el contexto.** Un paso opcional de IA, marcado como Alpha, adapta el resultado a la app activa y necesita un modelo de lenguaje local o la conexión con Amical Cloud.',
          '**Idiomas.** Más de 100 idiomas según el fabricante, con detección automática; la versión 1.13.0 añadió variantes regionales y cantonés.',
          '**Personalización.** Vocabulario personalizado, fragmentos de texto, prompts personalizados, un historial de transcripciones y, desde la versión 1.13.0, vocabulario aprendido de las correcciones tras un pegado.',
          '**Notas.** Las notas de voz figuran como en curso.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelos y hardware',
        content: [
          '**Amical ejecuta Whisper en local en seis variantes.** La documentación cita Tiny (unos 78 MB), Base (unos 148 MB), Small (unos 488 MB), Medium (unos 1,5 GB), Large v3 (unos 3,1 GB) y Large v3 Turbo (unos 1,5 GB), cada una con valoraciones de velocidad y precisión en Ajustes.',
          'El README dice que el Whisper local requiere macOS 15 o posterior en un Mac. No se indica ningún requisito de RAM ni de GPU, así que elige un modelo que se ajuste a tu equipo; para el paso opcional de formato, la documentación nombra Ollama o cualquier endpoint compatible con OpenAI. Aquí no se reprodujo ninguna cifra de velocidad ni de precisión.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad, licencia y coste',
        content: [
          '**La documentación dice que Amical puede ejecutarse por completo en tu equipo, sin que salgan datos del ordenador y sin necesidad de cuenta.** Las transcripciones, las notas, el vocabulario y los archivos de audio se guardan en la carpeta de datos de la app. El reconocimiento de voz en la nube, el formato en la nube y el inicio de sesión envían el audio de esa solicitud y nada más, según las preguntas frecuentes.',
          'La telemetría es un asunto aparte. La documentación dice que la telemetría anónima cubre los inicios de la app, los errores y el rendimiento, está activada por defecto y se puede desactivar en Ajustes, Avanzado; al pulsar la bandera de Informar en una entrada del historial también se envían ese audio y esa transcripción. Las notas de la versión 1.13.0 dicen que la app ahora pide el consentimiento para la telemetría al iniciar sesión, y las páginas del fabricante no concilian ambas afirmaciones. La política de privacidad móvil menciona analítica de producto y medición publicitaria. El código es abierto y PromptQuorum no examinó el tráfico de red, así que estas afirmaciones son del propio fabricante.',
          'La licencia es MIT. El dictado local es gratuito e ilimitado; el plan gratuito añade 2.000 palabras por semana de dictado en la nube, y Premium cuesta 7 $ al mes facturados anualmente (84 $) o 10 $ al mes facturados mensualmente. Enterprise es a medida.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Equilibrio: ventajas y limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / advertencia'],
        rows: [
          {
            Ventaja: 'Whisper en tu ordenador',
            'Qué significa en el uso real': 'El dictado puede funcionar sin conexión una vez descargado un modelo, sin cuenta.',
            'Limitación / advertencia': 'Existen opciones en la nube y telemetría; PromptQuorum no inspeccionó el tráfico de red.',
          },
          {
            Ventaja: 'Gratis y de código abierto',
            'Qué significa en el uso real': 'Código MIT y dictado local ilimitado sin coste.',
            'Limitación / advertencia': 'El dictado ilimitado en la nube requiere el plan de pago Premium.',
          },
          {
            Ventaja: 'Dictado en cualquier app',
            'Qué significa en el uso real': 'Un solo atajo funciona en correo, chat, editores y documentos.',
            'Limitación / advertencia': 'Solo Mac y Windows; el Whisper local necesita macOS 15 o posterior.',
          },
          {
            Ventaja: 'Seis tamaños de modelo',
            'Qué significa en el uso real': 'Modelos pequeños para equipos antiguos, mayores para más precisión.',
            'Limitación / advertencia': 'Large v3 ocupa unos 3,1 GB de disco; aquí no se publican cifras de velocidad.',
          },
          {
            Ventaja: 'Formato según el contexto',
            'Qué significa en el uso real': 'El resultado se adapta a la app activa, como el correo o el chat.',
            'Limitación / advertencia': 'Marcado como Alpha; necesita un modelo de lenguaje local o la conexión en la nube.',
          },
          {
            Ventaja: 'Desarrollo activo',
            'Qué significa en el uso real': 'La versión 1.13.0 salió el 7 de noviembre de 2026.',
            'Limitación / advertencia': 'Las notas de voz están en curso; la transcripción de reuniones solo está prevista.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Amical frente a alternativas',
        content: [
          'Estas son las herramientas de dictado más cercanas del directorio: una app gratuita de código abierto para tres sistemas de escritorio, una app gratuita solo para Mac, una app de código abierto híbrida y una app de pago de código cerrado.',
        ],
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Papel', 'Diferencia clave'],
        rows: [
          {
            App: 'Amical',
            Plataformas: 'Mac, Windows',
            'Precio y licencia': 'Local gratis, nube Premium, MIT',
            Papel: 'Dictado por atajo',
            'Diferencia clave': 'Código abierto; Whisper local más nube opcional',
          },
          {
            App: '[Handy](/es/power-local-llm/handy-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Precio y licencia': 'Gratis, MIT',
            Papel: 'Dictado por atajo',
            'Diferencia clave': 'Gratuita y de código abierto; añade Linux',
          },
          {
            App: '[OpenWhispr](/es/power-local-llm/openwhispr-review)',
            Plataformas: 'Mac, Windows, Linux, iOS',
            'Precio y licencia': 'Freemium, MIT',
            Papel: 'Dictado con modos local o en la nube',
            'Diferencia clave': 'Eliges modelos locales, tu propia clave de API o su nube',
          },
          {
            App: '[FluidVoice](/es/power-local-llm/fluidvoice-review)',
            Plataformas: 'Mac',
            'Precio y licencia': 'Gratis, GPL-3.0',
            Papel: 'App de dictado para Mac',
            'Diferencia clave': 'Gratuita y de código abierto; solo Mac',
          },
          {
            App: '[Weesper Neon Flow](/es/power-local-llm/weesper-neon-flow-review)',
            Plataformas: 'Mac, Windows',
            'Precio y licencia': 'Prueba, luego de pago, propietaria',
            Papel: 'Dictado por atajo',
            'Diferencia clave': 'Código cerrado y de pago; Whisper en el dispositivo',
          },
        ],
        note: 'Las plataformas, precios y funciones de las apps de terceros cambian con frecuencia. Verifica los detalles actuales en la página de cada proyecto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar Amical',
        items: [
          '**Redactores y personal de oficina en Mac o Windows.** Un solo atajo dicta en correo, chat y documentos.',
          '**Personas que evitan el dictado en la nube.** El Whisper local mantiene el reconocimiento de voz en el ordenador, según la documentación.',
          '**Usuarios de código abierto.** El código MIT es público y el dictado local es gratuito.',
          '**Usuarios multilingües.** Más de 100 idiomas según el fabricante, con detección automática.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Amical',
        items: [
          '**Usuarios de Linux.** El README dice que Linux no es compatible; Handy lo cubre.',
          '**Usuarios de Mac con macOS 14 o anterior.** El Whisper local necesita macOS 15 o posterior.',
          '**Quien no quiera telemetría por defecto.** La documentación dice que está activada por defecto y hay que desactivarla.',
          '**Quien necesite hoy etiquetas de hablante o transcripciones de reuniones en directo.** Ninguna de las dos figura como disponible en la documentación.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona Amical sin conexión?',
            a: 'Las preguntas frecuentes dicen que sí, una vez descargado un modelo local de Whisper; la configuración inicial necesita conexión para esa descarga. Los modelos en la nube necesitan conexión. PromptQuorum no la probó sin conexión.',
          },
          {
            q: '¿Se envía mi voz a la nube?',
            a: 'Solo si eliges el modelo en la nube o el formato en la nube, según las preguntas frecuentes, que dicen que estos envían el audio de esa solicitud. El código es abierto y PromptQuorum no inspeccionó el tráfico de red.',
          },
          {
            q: '¿Es Amical realmente gratis?',
            a: 'Según la página de precios, el dictado local es gratuito e ilimitado, y el plan gratuito añade 2.000 palabras por semana de dictado en la nube. Solo el dictado ilimitado en la nube requiere el plan Premium de pago.',
          },
          {
            q: '¿Puedo usar mi propio modelo de lenguaje?',
            a: 'Para el paso de formato en Alpha, sí: Ollama o cualquier endpoint local compatible con OpenAI. Para la voz, la documentación dice que eliges una variante de Whisper incluida o el modelo en la nube; no se admite traer tu propio proveedor de reconocimiento de voz.',
          },
          {
            q: '¿Quién hace Amical?',
            a: 'El código lo publica la organización de GitHub amicalhq, y la política de privacidad nombra a Exa Labs LLC como proveedor del servicio.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'Amical encaja si quieres dictado por atajo gratuito y de código abierto en un Mac o PC con Windows donde, según la documentación, Whisper se ejecuta en tu propio ordenador. Tiene licencia MIT, un nivel local gratuito y una versión de esta misma semana.',
          'Las advertencias son el alcance y la verificabilidad: sin versión para Linux, macOS 15 para el Whisper local, telemetría activada por defecto según la documentación, un paso de formato en Alpha y afirmaciones de privacidad que PromptQuorum no pudo comprobar. Prueba el nivel local gratuito antes de decidirte por Premium.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Web de Amical](https://amical.ai/) — funciones, plataformas y precios.',
          '[Página de precios](https://amical.ai/pricing) — planes Free, Premium y Enterprise.',
          '[Documentación](https://amical.ai/docs) — modelos locales, formato con IA, preguntas frecuentes, telemetría y guías de inicio rápido.',
          '[Política de privacidad](https://amical.ai/privacy) — tratamiento de datos, dirigida a la app móvil.',
          '[Repositorio de GitHub](https://github.com/amicalhq/amical) — README, licencia MIT y código fuente.',
          '[Versiones de GitHub](https://github.com/amicalhq/amical/releases) — archivos del instalador y fecha de lanzamiento de la versión 1.13.0.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Herramientas locales de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — texto a voz, voz a texto y agentes de voz lado a lado.',
          '[Reseña de Handy](/es/power-local-llm/handy-review) — una app de dictado gratuita y de código abierto para Mac, Windows y Linux.',
          '[Reseña de Weesper Neon Flow](/es/power-local-llm/weesper-neon-flow-review) — una app de dictado de pago para Mac y Windows.',
          '[Reseña de Whisper.cpp](/es/power-local-llm/whisper-cpp-review) — el motor abierto detrás de muchas apps locales de Whisper.',
          '[El Local LLM Software Directory completo](/es/directory) — un directorio más amplio de herramientas de IA local para todas las plataformas.',
          '[Reseña de Sprich: app de dictado alemana para Mac con Apple Silicon](/es/power-local-llm/sprich-review) — otra app de dictado para Mac, orientada primero al alemán, con plan gratuito y solo para Apple Silicon.',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-09',
    dateModified: '2026-11-09',
    next_refresh_due: '2027-05-09',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/amical-review-hero-pt.webp',
    title: 'Análise do Amical: ditado gratuito e de código aberto para Mac e Windows',
    seoTitle: 'Análise do Amical: ditado gratuito e open source',
    intro: 'O Amical é um app de ditado gratuito, com licença MIT, para Mac e Windows: você segura um atalho, fala, e ele digita o texto no app em que estiver o cursor, executando o modelo Whisper da OpenAI no seu próprio computador. Esta análise resume o que o site, a documentação e o repositório do GitHub do fabricante dizem, onde termina o caminho local e começa a nuvem opcional, e como o Amical se compara a outras ferramentas de ditado do diretório.',
    metaDescription: 'Análise do Amical: ditado gratuito com licença MIT para Mac e Windows que roda o Whisper no seu PC e funciona offline após baixar um modelo. Não testado.',
    twitterDescription: 'Análise do Amical: ditado por atalho, gratuito e de código aberto, para Mac e Windows com Whisper local. Preço, privacidade, limites e alternativas.',
    audience: 'Usuários de Mac e Windows que querem ditado gratuito e de código aberto em qualquer app sem enviar a voz para um serviço na nuvem — cobre preço, instalação, modelos, privacidade, limites e alternativas.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Amical review',
    targetKeywords: [
      'análise amical',
      'amical ai ditado',
      'app de ditado de código aberto',
      'ditado local com whisper mac windows',
      'ditado por voz offline',
      'voz para texto gratuito desktop',
      'app de ditado whisper',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: '**O Amical é um app de ditado gratuito, com licença MIT, para Mac e Windows que executa o modelo Whisper da OpenAI no seu próprio computador e, segundo a documentação, funciona offline depois que um modelo local é baixado.** Ele também oferece ditado opcional na nuvem: o plano Premium, pago, libera o uso ilimitado da nuvem. A versão mais recente é a 1.13.0, de 7 de novembro de 2026. Esta análise se baseia no site, na documentação e no repositório do GitHub do fabricante, não em um teste prático.',
    quickAnswerTop: {
      pt: {
        question: 'O Amical é um app de ditado local?',
        answer: 'No app de desktop, sim, por padrão: a documentação diz que a transcrição roda localmente com o Whisper, ou na nuvem se você fizer login, e que funciona offline depois que um modelo local é configurado. A fala na nuvem e a formatação na nuvem enviam ao fabricante o áudio daquela solicitação. O código é aberto, mas o PromptQuorum não inspecionou o tráfego de rede, então as afirmações de privacidade continuam sendo do próprio fabricante.',
        bullets: [
          'Segure um atalho, fale, solte: o texto aparece no cursor em apps como e-mail, chat ou um editor, formatado de acordo com o app.',
          'Preço: grátis com ditado local ilimitado; o Premium adiciona ditado ilimitado na nuvem por $7 por mês na cobrança anual ou $10 por mês na cobrança mensal.',
          'Seis variantes do Whisper, do Tiny (cerca de 78 MB) ao Large v3 (cerca de 3.1 GB), baixadas dentro do app.',
          'Apenas Mac (o Whisper local exige macOS 15 ou mais recente) e Windows; o README diz que o Linux não é compatível.',
          'A documentação diz que a telemetria vem ativada por padrão e pode ser desativada em Configurações.',
        ],
        updatedDate: '2026-11-09',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Obter o Amical', anchor: 'get-it' },
      { label: 'Amical em resumo', anchor: 'at-a-glance' },
      { label: 'O que é o Amical', anchor: 'what-is-amical' },
      { label: 'Primeiros passos', anchor: 'how-to-get-started' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Modelos e hardware', anchor: 'models-hardware' },
      { label: 'Privacidade, licença e custo', anchor: 'privacy' },
      { label: 'Prós e contras', anchor: 'tradeoffs' },
      { label: 'Amical e as alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem o Amical serve', anchor: 'who-should-use' },
      { label: 'Para quem o Amical não serve', anchor: 'who-should-not-use' },
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
            text: 'O Amical é um app de ditado gratuito e de código aberto para Mac e Windows que, segundo a documentação, executa o Whisper no seu próprio computador e funciona offline após o download de um modelo.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em uma tecla de microfone que digita por você: segure o atalho, fale, solte, e o seu computador transforma a fala em texto, com uma opção de nuvem que você pode deixar sem usar.',
          },
        ],
        items: [
          'Afirmação de uso local: o reconhecimento de fala roda no aparelho com o Whisper; fala na nuvem, formatação na nuvem, login, downloads de modelos e telemetria usam a internet.',
          'Licença e fabricante: MIT, publicado pela organização do GitHub amicalhq.',
          'Preço: grátis com ditado local ilimitado; o ditado ilimitado na nuvem exige o plano Premium pago.',
          'Manutenção: a versão 1.13.0 foi lançada em 7 de novembro de 2026 e o repositório foi atualizado em 8 de novembro de 2026, então o projeto recebe desenvolvimento ativo.',
          'Lacunas: sem versão para Linux, o Whisper local exige macOS 15 ou mais recente, e a etapa de formatação com IA está marcada como Alpha.',
        ],
      },
      getItAmical: {
        id: 'get-it',
        title: 'Obter o Amical',
        content: [
          '**O Amical é instalado como qualquer app de desktop, sem precisar de terminal.** Baixe o instalador do seu sistema no site oficial ou na página de versões do GitHub; o modelo Whisper é baixado dentro do app, na configuração inicial.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            Plataforma: 'Mac',
            'Onde obter': '[Baixar para Mac](https://github.com/amicalhq/amical/releases/latest) — .dmg para Apple Silicon ou Intel; também `brew install --cask amical`',
          },
          {
            Plataforma: 'Windows',
            'Onde obter': '[Baixar para Windows](https://github.com/amicalhq/amical/releases/latest) — .exe para x64 ou arm64',
          },
          {
            Plataforma: 'iPhone e Android',
            'Onde obter': '[Apps para celular no site do Amical](https://amical.ai/) — App Store e Google Play; login com conta Amical',
          },
          {
            Plataforma: 'Notas de versão',
            'Onde obter': '[Versões no GitHub](https://github.com/amicalhq/amical/releases) e a [documentação do Amical](https://amical.ai/docs)',
          },
          {
            Plataforma: 'Site',
            'Onde obter': '[amical.ai](https://amical.ai/)',
          },
          {
            Plataforma: 'Política de privacidade',
            'Onde obter': '[Política de privacidade do Amical](https://amical.ai/privacy)',
          },
          {
            Plataforma: 'Código-fonte',
            'Onde obter': '[github.com/amicalhq/amical](https://github.com/amicalhq/amical) — licença MIT',
          },
        ],
        note: 'A página da política de privacidade é voltada ao app para celular; o PromptQuorum não encontrou uma política de privacidade separada para o desktop.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Amical em resumo',
        columns: ['Atributo', 'Amical'],
        rows: [
          { Atributo: 'Plataforma', Amical: 'Desktop macOS e Windows; sem suporte a Linux' },
          { Atributo: 'Preço', Amical: 'Grátis (local); plano Premium para a nuvem' },
          { Atributo: 'Licença', Amical: 'MIT, código aberto' },
          { Atributo: 'Execução', Amical: 'No seu computador com Whisper; nuvem opcional com login' },
          { Atributo: 'Idiomas', Amical: '100+ segundo o fabricante (não verificado)' },
          { Atributo: 'Identificação de falantes', Amical: 'Não informado' },
          { Atributo: 'Transcrição em tempo real', Amical: 'Planejada para reuniões; o ditado é por atalho' },
          { Atributo: 'Roda só na CPU', Amical: 'Não informado; modelos de 78 MB a 3.1 GB' },
          { Atributo: 'Servidor de API local', Amical: 'Não informado' },
        ],
        note: 'Os atributos seguem a comparação de voz para texto usada no Diretório de Software de LLM Local. Uma informação ausente no site significa desconhecido, não sem suporte.',
      },
      whatIsAmical: {
        id: 'what-is-amical',
        title: 'O que é o Amical',
        content: [
          '**O Amical é um app de ditado por atalho, não um editor de transcrições.** Você segura uma tecla ou clica no widget flutuante, fala, e o texto cai no app em foco; o app detecta qual é e ajusta a formatação, por exemplo uma saudação em linha própria em um e-mail.',
          'O código fica na organização do GitHub amicalhq. O projeto também lista notas de voz (em andamento) e transcrição de reuniões em tempo real e comandos de voz (planejados); esta análise cobre apenas o app de ditado.',
          'Esta análise se baseia no site, na documentação, na política de privacidade e no repositório do GitHub. Não houve teste prático, então precisão, velocidade e estabilidade não são avaliadas aqui.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeiros passos',
        content: [
          '**A configuração é uma instalação, a escolha de um modelo e um atalho.** Os passos seguem o guia de início rápido do desktop na documentação.',
        ],
        numberedItems: [
          {
            title: 'Instale o app',
            whyItMatters: 'Baixe o .dmg para Mac ou o .exe para Windows na [página de versões do GitHub](https://github.com/amicalhq/amical/releases/latest), ou execute `brew install --cask amical` em um Mac.',
          },
          {
            title: 'Conceda as permissões',
            whyItMatters: 'Permita o acesso ao microfone; no Mac, permita também o acesso de acessibilidade para que o Amical possa colar em outros apps.',
          },
          {
            title: 'Escolha Local ou Nuvem',
            whyItMatters: 'A configuração inicial oferece Nuvem (login, sem configuração) ou Local (Whisper na sua máquina, offline) e recomenda uma das duas conforme o seu hardware.',
          },
          {
            title: 'Segure, fale, solte',
            whyItMatters: 'Defina o atalho de pressionar para falar, clique em qualquer campo de texto, segure o atalho, fale e solte; um toque com menos de 500 ms é tratado como engano e descartado.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O conjunto de recursos gira em torno do ditado em qualquer app.** Tudo abaixo vem do README, da documentação e das notas de versão.',
        ],
        items: [
          '**Ditado em qualquer lugar.** O texto é colado no app em foco por um atalho de pressionar para falar ou pelo widget flutuante.',
          '**Formatação com base no contexto.** Uma etapa opcional de IA, marcada como Alpha, adapta o resultado ao app ativo e exige um modelo de linguagem local ou a conexão com o Amical Cloud.',
          '**Idiomas.** Mais de 100 idiomas segundo o fabricante, com detecção automática de idioma; a versão 1.13.0 adicionou variantes regionais e o cantonês.',
          '**Personalização.** Vocabulário personalizado, atalhos de texto, prompts personalizados, histórico de transcrições e, desde a versão 1.13.0, vocabulário aprendido com as correções feitas após a colagem.',
          '**Notas.** As notas de voz constam como em andamento.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelos e hardware',
        content: [
          '**O Amical executa o Whisper localmente em seis variantes.** A documentação lista Tiny (cerca de 78 MB), Base (cerca de 148 MB), Small (cerca de 488 MB), Medium (cerca de 1.5 GB), Large v3 (cerca de 3.1 GB) e Large v3 Turbo (cerca de 1.5 GB), cada uma com notas de velocidade e precisão em Configurações.',
          'O README diz que o Whisper local exige macOS 15 ou mais recente em um Mac. Nenhum requisito de RAM ou de GPU é informado, então escolha um modelo que caiba na sua máquina; para a etapa opcional de formatação, a documentação cita o Ollama ou qualquer endpoint compatível com a OpenAI. Nenhum número de velocidade ou precisão foi reproduzido aqui.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade, licença e custo',
        content: [
          '**A documentação diz que o Amical pode rodar inteiramente na sua máquina, sem que nenhum dado saia do computador e sem exigir conta.** Transcrições, notas, vocabulário e arquivos de áudio ficam armazenados na pasta de dados do app. A fala na nuvem, a formatação na nuvem e o login enviam o áudio daquela solicitação e nada além disso, segundo o FAQ.',
          'A telemetria é um assunto à parte. A documentação diz que a telemetria anônima cobre aberturas do app, erros e desempenho, vem ativada por padrão e pode ser desativada em Configurações, Avançado; ao tocar no sinalizador Reportar em um item do histórico, o áudio e a transcrição também são enviados. As notas da versão 1.13.0 dizem que o app agora pede consentimento para a telemetria no login, e as duas afirmações não são conciliadas nas páginas do fabricante. A política de privacidade do app para celular lista análises de produto e medição de anúncios. O código é aberto e o PromptQuorum não examinou o tráfego de rede, então essas afirmações são do próprio fabricante.',
          'A licença é MIT. O ditado local é gratuito e ilimitado; o plano grátis acrescenta 2.000 palavras por semana de ditado na nuvem, e o Premium custa $7 por mês na cobrança anual ($84) ou $10 por mês na cobrança mensal. O Enterprise é sob consulta.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras',
        columns: ['Vantagem', 'O que significa na prática', 'Limitação / ressalva'],
        rows: [
          {
            Vantagem: 'Whisper no seu computador',
            'O que significa na prática': 'O ditado pode rodar offline depois de baixar um modelo, sem conta.',
            'Limitação / ressalva': 'Existem opções de nuvem e telemetria; o PromptQuorum não inspecionou o tráfego de rede.',
          },
          {
            Vantagem: 'Gratuito e de código aberto',
            'O que significa na prática': 'Código MIT e ditado local ilimitado, sem custo.',
            'Limitação / ressalva': 'O ditado ilimitado na nuvem exige o plano Premium, pago.',
          },
          {
            Vantagem: 'Ditar em qualquer app',
            'O que significa na prática': 'Um único atalho funciona em e-mail, chat, editores e documentos.',
            'Limitação / ressalva': 'Apenas Mac e Windows; o Whisper local exige macOS 15 ou mais recente.',
          },
          {
            Vantagem: 'Seis tamanhos de modelo',
            'O que significa na prática': 'Modelos pequenos para máquinas mais antigas, maiores para mais precisão.',
            'Limitação / ressalva': 'O Large v3 exige cerca de 3.1 GB de disco; não há números de velocidade publicados aqui.',
          },
          {
            Vantagem: 'Formatação com base no contexto',
            'O que significa na prática': 'O resultado é adaptado ao app ativo, como e-mail ou chat.',
            'Limitação / ressalva': 'Marcada como Alpha e exige um modelo de linguagem local ou a conexão com a nuvem.',
          },
          {
            Vantagem: 'Desenvolvimento ativo',
            'O que significa na prática': 'A versão 1.13.0 foi lançada em 7 de novembro de 2026.',
            'Limitação / ressalva': 'As notas de voz estão em andamento; a transcrição de reuniões é apenas planejada.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Amical e as alternativas',
        content: [
          'Estas são as ferramentas de ditado mais próximas do diretório: um app gratuito de código aberto para três sistemas de desktop, um app gratuito só para Mac, um app híbrido de código aberto e um app pago de código fechado.',
        ],
        columns: ['App', 'Plataformas', 'Preço e licença', 'Função', 'Diferença principal'],
        rows: [
          {
            App: 'Amical',
            Plataformas: 'Mac, Windows',
            'Preço e licença': 'Local grátis, nuvem Premium, MIT',
            Função: 'Ditado por atalho',
            'Diferença principal': 'Código aberto; Whisper local mais nuvem opcional',
          },
          {
            App: '[Handy](/pt/power-local-llm/handy-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Preço e licença': 'Grátis, MIT',
            Função: 'Ditado por atalho',
            'Diferença principal': 'Código aberto e gratuito; inclui Linux',
          },
          {
            App: '[OpenWhispr](/pt/power-local-llm/openwhispr-review)',
            Plataformas: 'Mac, Windows, Linux, iOS',
            'Preço e licença': 'Freemium, MIT',
            Função: 'Ditado com modos local ou nuvem',
            'Diferença principal': 'Você escolhe modelos locais, sua própria chave de API ou a nuvem dele',
          },
          {
            App: '[FluidVoice](/pt/power-local-llm/fluidvoice-review)',
            Plataformas: 'Mac',
            'Preço e licença': 'Grátis, GPL-3.0',
            Função: 'App de ditado para Mac',
            'Diferença principal': 'Gratuito e de código aberto; só Mac',
          },
          {
            App: '[Weesper Neon Flow](/pt/power-local-llm/weesper-neon-flow-review)',
            Plataformas: 'Mac, Windows',
            'Preço e licença': 'Teste, depois pago, proprietário',
            Função: 'Ditado por atalho',
            'Diferença principal': 'Código fechado e pago; Whisper no aparelho',
          },
        ],
        note: 'Plataformas, preços e recursos de apps de terceiros mudam com frequência. Confira os dados atuais na página de cada projeto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o Amical serve',
        items: [
          '**Quem escreve e trabalha em escritório com Mac ou Windows.** Um único atalho dita em e-mail, chat e documentos.',
          '**Quem evita o ditado na nuvem.** O Whisper local mantém o reconhecimento de fala no computador, segundo a documentação.',
          '**Usuários de código aberto.** O código MIT é público e o ditado local é gratuito.',
          '**Usuários multilíngues.** Mais de 100 idiomas segundo o fabricante, com detecção automática.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o Amical não serve',
        items: [
          '**Usuários de Linux.** O README diz que o Linux não é compatível; o Handy atende esse caso.',
          '**Usuários de Mac com macOS 14 ou anterior.** O Whisper local exige macOS 15 ou mais recente.',
          '**Quem não quer telemetria por padrão.** A documentação diz que ela vem ativada e precisa ser desativada.',
          '**Quem precisa hoje de identificação de falantes ou transcrição ao vivo de reuniões.** Nenhuma das duas consta como disponível na documentação.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Amical funciona offline?',
            a: 'O FAQ diz que sim, depois que você baixa um modelo local do Whisper; a configuração inicial precisa de conexão para esse download. Os modelos da nuvem precisam de conexão. O PromptQuorum não testou o app offline.',
          },
          {
            q: 'Minha voz é enviada para a nuvem?',
            a: 'Somente se você escolher o modelo na nuvem ou a formatação na nuvem, segundo o FAQ, que diz que ambos enviam o áudio daquela solicitação. O código é aberto e o PromptQuorum não inspecionou o tráfego de rede.',
          },
          {
            q: 'O Amical é realmente gratuito?',
            a: 'Segundo a página de preços, o ditado local é gratuito e ilimitado, e o plano grátis acrescenta 2.000 palavras por semana de ditado na nuvem. Somente o ditado ilimitado na nuvem exige o plano Premium pago.',
          },
          {
            q: 'Posso usar meu próprio modelo de linguagem?',
            a: 'Na etapa de formatação Alpha, sim: o Ollama ou qualquer endpoint local compatível com a OpenAI. Para a fala, a documentação diz que você escolhe uma variante do Whisper incluída ou o modelo da nuvem; trazer o seu próprio provedor de fala não é compatível.',
          },
          {
            q: 'Quem faz o Amical?',
            a: 'O código é publicado pela organização do GitHub amicalhq, e a política de privacidade cita a Exa Labs LLC como provedora do serviço.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O Amical serve bem se você quer ditado por atalho, gratuito e de código aberto, em um Mac ou PC com Windows em que, segundo a documentação, o Whisper roda no seu próprio computador. Ele tem licença MIT, um nível local gratuito e uma versão lançada nesta semana.',
          'As ressalvas são o alcance e a verificabilidade: sem versão para Linux, macOS 15 para o Whisper local, telemetria ativada por padrão segundo a documentação, uma etapa de formatação em Alpha e afirmações de privacidade que o PromptQuorum não pôde verificar. Experimente o nível local gratuito antes de decidir pelo Premium.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Amical](https://amical.ai/) — recursos, plataformas e preços.',
          '[Página de preços](https://amical.ai/pricing) — planos Free, Premium e Enterprise.',
          '[Documentação](https://amical.ai/docs) — modelos locais, formatação com IA, FAQ, telemetria e guias de início rápido.',
          '[Política de privacidade](https://amical.ai/privacy) — tratamento de dados, voltada ao app para celular.',
          '[Repositório no GitHub](https://github.com/amicalhq/amical) — README, licença MIT e código-fonte.',
          '[Versões no GitHub](https://github.com/amicalhq/amical/releases) — arquivos do instalador e data de lançamento da versão 1.13.0.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Ferramentas locais de voz e fala comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — texto para voz, voz para texto e agentes de voz lado a lado.',
          '[Análise do Handy](/pt/power-local-llm/handy-review) — um app de ditado gratuito e de código aberto para Mac, Windows e Linux.',
          '[Análise do Weesper Neon Flow](/pt/power-local-llm/weesper-neon-flow-review) — um app de ditado pago para Mac e Windows.',
          '[Análise do Whisper.cpp](/pt/power-local-llm/whisper-cpp-review) — o motor aberto por trás de muitos apps de Whisper local.',
          '[O diretório completo de software de LLM local](/pt/directory) — um diretório mais amplo de ferramentas de IA local em várias plataformas.',
          '[Análise do Sprich: app de ditado alemão para Mac com Apple Silicon](/pt/power-local-llm/sprich-review) — outro app de ditado para Mac, voltado primeiro ao alemão, com plano gratuito e só para Apple Silicon.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-09',
    dateModified: '2026-11-09',
    next_refresh_due: '2027-05-09',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/amical-review-hero-ar.webp',
    title: 'مراجعة Amical: إملاء مجاني ومفتوح المصدر لأجهزة Mac وWindows',
    seoTitle: 'مراجعة Amical: تطبيق إملاء مجاني ومفتوح المصدر لأجهزة Mac',
    intro: 'Amical تطبيق إملاء مجاني برخصة MIT لأجهزة Mac وWindows: تضغط على اختصار وتتحدث، فيكتب النص في أي تطبيق يوجد فيه المؤشر، مشغّلًا نموذج Whisper من OpenAI على حاسوبك. تلخّص هذه المراجعة ما يذكره موقع المطوّر ووثائقه ومستودع GitHub، وأين ينتهي المسار المحلي وتبدأ السحابة الاختيارية، وكيف يقارن Amical بأدوات الإملاء الأخرى في الدليل.',
    metaDescription: 'مراجعة Amical: إملاء مجاني برخصة MIT لأجهزة Mac وWindows يشغّل Whisper على حاسوبك ويعمل دون اتصال بعد تنزيل نموذج بحسب مطوّره. لم تختبره PromptQuorum.',
    twitterDescription: 'مراجعة Amical: إملاء مجاني ومفتوح المصدر بالضغط والتحدث لأجهزة Mac وWindows مع Whisper محلي. السعر والخصوصية والحدود والبدائل.',
    audience: 'مستخدمو Mac وWindows الذين يريدون إملاءً مجانيًا ومفتوح المصدر في أي تطبيق دون إرسال أصواتهم إلى خدمة سحابية — يغطي السعر والتثبيت والنماذج والخصوصية والحدود والبدائل.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Amical review',
    targetKeywords: [
      'مراجعة amical',
      'amical إملاء',
      'تطبيق إملاء مفتوح المصدر',
      'إملاء whisper محلي mac windows',
      'إملاء صوتي دون اتصال',
      'تحويل الكلام إلى نص مجاني لسطح المكتب',
      'تطبيق إملاء whisper',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: '**Amical تطبيق إملاء مجاني برخصة MIT لأجهزة Mac وWindows يشغّل نموذج Whisper من OpenAI على حاسوبك، ويعمل دون اتصال بحسب وثائقه بعد تنزيل نموذج محلي.** ويقدّم أيضًا إملاءً سحابيًا اختياريًا: فخطة Premium المدفوعة تضيف استخدامًا سحابيًا غير محدود. وأحدث إصدار هو 1.13.0 الصادر في 7 نوفمبر 2026. تعتمد هذه المراجعة على موقع المطوّر ووثائقه ومستودع GitHub، وليس على اختبار عملي.',
    quickAnswerTop: {
      ar: {
        question: 'هل Amical تطبيق إملاء محلي؟',
        answer: 'بالنسبة إلى تطبيق سطح المكتب نعم افتراضيًا: تقول الوثائق إن التحويل يجري محليًا بنموذج Whisper، أو في السحابة إذا سجّلت الدخول، وإنه يعمل دون اتصال بعد إعداد نموذج محلي. أما الكلام السحابي والتنسيق السحابي فيرسلان صوت ذلك الطلب إلى المطوّر. الشيفرة مفتوحة، لكن PromptQuorum لم تفحص حركة الشبكة، لذا تبقى ادعاءات الخصوصية من المطوّر نفسه.',
        bullets: [
          'اضغط على الاختصار وتحدث ثم اتركه: يظهر النص عند المؤشر في تطبيقات مثل البريد أو الدردشة أو المحرر، منسّقًا بما يناسب التطبيق.',
          'الأسعار: مجاني مع إملاء محلي غير محدود؛ وتضيف Premium إملاءً سحابيًا غير محدود مقابل $7 شهريًا بفوترة سنوية أو $10 شهريًا بفوترة شهرية.',
          'ستة إصدارات من Whisper من Tiny (نحو 78 MB) إلى Large v3 (نحو 3.1 GB)، تُنزَّل من داخل التطبيق.',
          'Mac (يتطلب Whisper المحلي macOS 15 أو أحدث) وWindows فقط؛ ويقول ملف README إن Linux غير مدعوم.',
          'تقول الوثائق إن القياس عن بُعد (telemetry) مفعّل افتراضيًا ويمكن إيقافه من الإعدادات.',
        ],
        updatedDate: '2026-11-09',
      },
    },
    toc: [
      {
        label: 'الإجابة السريعة',
        anchor: 'quick-answer',
      },
      {
        label: 'الحصول على Amical',
        anchor: 'get-it',
      },
      {
        label: 'Amical في لمحة',
        anchor: 'at-a-glance',
      },
      {
        label: 'ما هو Amical',
        anchor: 'what-is-amical',
      },
      {
        label: 'البدء',
        anchor: 'how-to-get-started',
      },
      {
        label: 'الميزات',
        anchor: 'features',
      },
      {
        label: 'النماذج والعتاد',
        anchor: 'models-hardware',
      },
      {
        label: 'الخصوصية والترخيص والتكلفة',
        anchor: 'privacy',
      },
      {
        label: 'المزايا والقيود',
        anchor: 'tradeoffs',
      },
      {
        label: 'Amical مقابل البدائل',
        anchor: 'vs-alternatives',
      },
      {
        label: 'لمن يناسب Amical',
        anchor: 'who-should-use',
      },
      {
        label: 'لمن لا يناسب Amical',
        anchor: 'who-should-not-use',
      },
      {
        label: 'الأسئلة الشائعة',
        anchor: 'faq',
      },
      {
        label: 'الخلاصة',
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
        id: 'key-takeaways',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Amical تطبيق إملاء مجاني ومفتوح المصدر لأجهزة Mac وWindows يشغّل Whisper على حاسوبك ويعمل دون اتصال بعد تنزيل نموذج، بحسب وثائقه.',
          },
          {
            type: 'plain-terms',
            text: 'فكّر فيه كمفتاح ميكروفون يكتب عنك: تضغط على الاختصار وتتحدث ثم تتركه، فيحوّل حاسوبك الكلام إلى نص، مع خيار سحابي يمكنك تركه دون استخدام.',
          },
        ],
        items: [
          'الادعاء المحلي: يعمل التعرف على الكلام على الجهاز بنموذج Whisper؛ أما الكلام السحابي والتنسيق السحابي وتسجيل الدخول وتنزيل النماذج والقياس عن بُعد فتستخدم الإنترنت.',
          'الترخيص والمطوّر: MIT، وتنشره منظمة GitHub باسم amicalhq.',
          'السعر: مجاني مع إملاء محلي غير محدود؛ ويتطلب الإملاء السحابي غير المحدود خطة Premium المدفوعة.',
          'الصيانة: صدر الإصدار 1.13.0 في 7 نوفمبر 2026 وحُدّث المستودع في 8 نوفمبر 2026، فالمشروع يُطوَّر بنشاط.',
          'الثغرات: لا نسخة لنظام Linux، ويتطلب Whisper المحلي macOS 15 أو أحدث، ومرحلة التنسيق بالذكاء الاصطناعي موسومة بأنها Alpha.',
        ],
      },
      getItAmical: {
        id: 'get-it',
        title: 'الحصول على Amical',
        content: [
          '**يُثبَّت Amical مثل أي تطبيق مكتبي، ولا حاجة إلى الطرفية.** نزّل المثبّت المناسب لنظامك من الموقع الرسمي أو من صفحة الإصدارات على GitHub؛ ويُنزَّل نموذج Whisper من داخل التطبيق أثناء الإعداد الأول.',
        ],
        columns: [
          'المنصة',
          'مصدر الحصول',
        ],
        rows: [
          {
            'المنصة': 'Mac',
            'مصدر الحصول': '[التنزيل لـ Mac](https://github.com/amicalhq/amical/releases/latest) — ملف .dmg لـ Apple Silicon أو Intel؛ وأيضًا `brew install --cask amical`',
          },
          {
            'المنصة': 'Windows',
            'مصدر الحصول': '[التنزيل لـ Windows](https://github.com/amicalhq/amical/releases/latest) — ملف .exe لمعالج x64 أو arm64',
          },
          {
            'المنصة': 'iPhone وAndroid',
            'مصدر الحصول': '[تطبيقات الجوال على موقع Amical](https://amical.ai/) — App Store وGoogle Play؛ تسجيل الدخول بحساب Amical',
          },
          {
            'المنصة': 'ملاحظات الإصدار',
            'مصدر الحصول': '[إصدارات GitHub](https://github.com/amicalhq/amical/releases) و[وثائق Amical](https://amical.ai/docs)',
          },
          {
            'المنصة': 'الموقع',
            'مصدر الحصول': '[amical.ai](https://amical.ai/)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مصدر الحصول': '[سياسة خصوصية Amical](https://amical.ai/privacy)',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'مصدر الحصول': '[github.com/amicalhq/amical](https://github.com/amicalhq/amical) — رخصة MIT',
          },
        ],
        note: 'صفحة سياسة الخصوصية معنونة لتطبيق الجوال؛ ولم تجد PromptQuorum سياسة خصوصية منفصلة لتطبيق سطح المكتب.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Amical في لمحة',
        columns: [
          'الخاصية',
          'Amical',
        ],
        rows: [
          {
            'الخاصية': 'المنصة',
            'Amical': 'macOS وWindows لسطح المكتب؛ Linux غير مدعوم',
          },
          {
            'الخاصية': 'السعر',
            'Amical': 'مجاني (محلي)؛ خطة Premium للسحابة',
          },
          {
            'الخاصية': 'الترخيص',
            'Amical': 'MIT، مفتوح المصدر',
          },
          {
            'الخاصية': 'مكان التشغيل',
            'Amical': 'على حاسوبك بنموذج Whisper؛ سحابة اختيارية عند تسجيل الدخول',
          },
          {
            'الخاصية': 'اللغات',
            'Amical': 'أكثر من 100 بحسب المطوّر (لم يُتحقق)',
          },
          {
            'الخاصية': 'تمييز المتحدثين',
            'Amical': 'غير مذكور',
          },
          {
            'الخاصية': 'التحويل الفوري',
            'Amical': 'مخطط للاجتماعات؛ والإملاء بالضغط والتحدث',
          },
          {
            'الخاصية': 'يعمل بالمعالج المركزي فقط',
            'Amical': 'غير مذكور؛ حجم النموذج من 78 MB إلى 3.1 GB',
          },
          {
            'الخاصية': 'خادم API محلي',
            'Amical': 'غير مذكور',
          },
        ],
        note: 'تتبع الخصائص مقارنة تحويل الكلام إلى نص المستخدمة في Local LLM Software Directory. غياب الذكر في الموقع يعني غير معروف، لا غير مدعوم.',
      },
      whatIsAmical: {
        id: 'what-is-amical',
        title: 'ما هو Amical',
        content: [
          '**Amical تطبيق إملاء بالضغط والتحدث، وليس محرّر تفريغ نصي.** تضغط على مفتاح أو تنقر على الأداة العائمة وتتحدث، فيصل النص إلى التطبيق الذي عليه التركيز؛ ويتعرّف التطبيق على ذلك التطبيق ويعدّل التنسيق، مثل وضع التحية في سطر مستقل في رسالة بريد.',
          'توجد الشيفرة ضمن منظمة GitHub باسم amicalhq. ويدرج المشروع أيضًا الملاحظات الصوتية (قيد التنفيذ) وتفريغ الاجتماعات الفوري والأوامر الصوتية (مخططة)؛ وتغطي هذه المراجعة تطبيق الإملاء فقط.',
          'تعتمد هذه المراجعة على الموقع والوثائق وسياسة الخصوصية ومستودع GitHub. ولم يُجرَ اختبار عملي، لذا لا تُقيَّم هنا الدقة والسرعة والاستقرار.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'البدء',
        content: [
          '**الإعداد هو تثبيت واختيار نموذج وتحديد اختصار.** تتبع الخطوات دليل البدء السريع لسطح المكتب في الوثائق.',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'نزّل ملف .dmg لـ Mac أو ملف .exe لـ Windows من [صفحة الإصدارات على GitHub](https://github.com/amicalhq/amical/releases/latest)، أو شغّل `brew install --cask amical` على Mac.',
          },
          {
            title: 'امنح الأذونات',
            whyItMatters: 'اسمح بالوصول إلى الميكروفون؛ وعلى Mac اسمح أيضًا بإذن إمكانية الوصول ليتمكن Amical من اللصق في التطبيقات الأخرى.',
          },
          {
            title: 'اختر محليًا أو سحابيًا',
            whyItMatters: 'تعرض شاشة الإعداد الأول خيار السحابة (تسجيل دخول دون إعداد) أو المحلي (Whisper على جهازك، دون اتصال)، وتوصي بأحدهما بحسب عتادك.',
          },
          {
            title: 'اضغط وتحدث ثم اترك',
            whyItMatters: 'حدّد اختصار الضغط والتحدث، وانقر داخل أي حقل نصي، واضغط عليه، وتحدث ثم اتركه؛ والضغطة الأقصر من 500 ms تُعدّ زلّة وتُهمَل.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**تتمحور الميزات حول الإملاء في أي تطبيق.** كل ما يلي مصدره ملف README والوثائق وملاحظات الإصدار.',
        ],
        items: [
          '**الإملاء في أي مكان.** يُلصق النص في التطبيق الذي عليه التركيز عبر اختصار الضغط والتحدث أو الأداة العائمة.',
          '**تنسيق واعٍ بالسياق.** مرحلة اختيارية بالذكاء الاصطناعي، موسومة بأنها Alpha، تشكّل المخرجات بحسب التطبيق النشط وتحتاج إلى نموذج لغوي محلي أو اتصال Amical Cloud.',
          '**اللغات.** أكثر من 100 لغة بحسب المطوّر، مع كشف تلقائي للغة؛ وأضاف الإصدار 1.13.0 متغيرات إقليمية واللغة الكانتونية.',
          '**التخصيص.** قاموس مخصص واختصارات نصية وموجّهات مخصصة وسجل للتفريغ، ومنذ الإصدار 1.13.0 مفردات تُتعلَّم من التصحيحات بعد اللصق.',
          '**الملاحظات.** الملاحظات الصوتية مدرجة على أنها قيد التنفيذ.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'النماذج والعتاد',
        content: [
          '**يشغّل Amical نموذج Whisper محليًا بستة إصدارات.** تذكر الوثائق Tiny (نحو 78 MB) وBase (نحو 148 MB) وSmall (نحو 488 MB) وMedium (نحو 1.5 GB) وLarge v3 (نحو 3.1 GB) وLarge v3 Turbo (نحو 1.5 GB)، ويظهر لكل منها تقييم للسرعة والدقة في الإعدادات.',
          'يقول ملف README إن Whisper المحلي يتطلب macOS 15 أو أحدث على Mac. ولم يُذكر أي متطلب للذاكرة أو لبطاقة الرسوميات، لذا اختر نموذجًا يناسب جهازك؛ وبالنسبة إلى مرحلة التنسيق الاختيارية تذكر الوثائق Ollama أو أي نقطة نهاية متوافقة مع OpenAI. ولم يُعَد إنتاج أي أرقام للسرعة أو الدقة هنا.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والترخيص والتكلفة',
        content: [
          '**تقول الوثائق إن Amical يمكنه العمل بالكامل على جهازك، دون خروج أي بيانات من الحاسوب ودون حاجة إلى حساب.** وتُخزَّن النصوص المحوّلة والملاحظات والمفردات وملفات الصوت في مجلد بيانات التطبيق. ويرسل الكلام السحابي والتنسيق السحابي وتسجيل الدخول صوت ذلك الطلب دون سواه، بحسب الأسئلة الشائعة.',
          'القياس عن بُعد مسألة منفصلة. تقول الوثائق إن القياس المجهول يشمل تشغيل التطبيق والأخطاء والأداء، وهو مفعّل افتراضيًا ويمكن إيقافه من الإعدادات ثم متقدم؛ كما أن الضغط على علامة الإبلاغ في إدخال بالسجل يرسل أيضًا ذلك الصوت والنص المحوّل. وتقول ملاحظات الإصدار 1.13.0 إن التطبيق يطلب الآن موافقة على القياس عن بُعد عند تسجيل الدخول، ولا توفّق صفحات المطوّر بين القولين. وتذكر سياسة خصوصية تطبيق الجوال تحليلات المنتج وقياس الإعلانات. الشيفرة مفتوحة ولم تفحص PromptQuorum حركة الشبكة، لذا فهذه الأقوال من المطوّر نفسه.',
          'الترخيص هو MIT. الإملاء المحلي مجاني وغير محدود؛ وتضيف الخطة المجانية 2,000 كلمة أسبوعيًا من الإملاء السحابي، وPremium بسعر $7 شهريًا بفوترة سنوية ($84) أو $10 شهريًا بفوترة شهرية. أما Enterprise فبسعر مخصص.',
        ],
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
            'الميزة': 'Whisper على حاسوبك',
            'ما تعنيه في الاستخدام الفعلي': 'يمكن أن يعمل الإملاء دون اتصال بعد تنزيل نموذج، ودون حساب.',
            'القيد / تنبيه': 'توجد خيارات سحابية وقياس عن بُعد؛ ولم تفحص PromptQuorum حركة الشبكة.',
          },
          {
            'الميزة': 'مجاني ومفتوح المصدر',
            'ما تعنيه في الاستخدام الفعلي': 'شيفرة MIT وإملاء محلي غير محدود دون تكلفة.',
            'القيد / تنبيه': 'الإملاء السحابي غير المحدود يحتاج إلى خطة Premium المدفوعة.',
          },
          {
            'الميزة': 'الإملاء في أي تطبيق',
            'ما تعنيه في الاستخدام الفعلي': 'اختصار واحد يعمل في البريد والدردشة والمحررات والمستندات.',
            'القيد / تنبيه': 'Mac وWindows فقط؛ ويتطلب Whisper المحلي macOS 15 أو أحدث.',
          },
          {
            'الميزة': 'ستة أحجام للنماذج',
            'ما تعنيه في الاستخدام الفعلي': 'نماذج صغيرة للأجهزة الأقدم وأكبر منها للدقة.',
            'القيد / تنبيه': 'يحتاج Large v3 إلى نحو 3.1 GB من القرص؛ ولا تُنشر هنا أرقام للسرعة.',
          },
          {
            'الميزة': 'تنسيق واعٍ بالسياق',
            'ما تعنيه في الاستخدام الفعلي': 'تُشكَّل المخرجات بحسب التطبيق النشط، مثل البريد أو الدردشة.',
            'القيد / تنبيه': 'موسوم بأنه Alpha ويحتاج إلى نموذج لغوي محلي أو اتصال سحابي.',
          },
          {
            'الميزة': 'تطوير نشط',
            'ما تعنيه في الاستخدام الفعلي': 'صدر الإصدار 1.13.0 في 7 نوفمبر 2026.',
            'القيد / تنبيه': 'الملاحظات الصوتية قيد التنفيذ؛ وتفريغ الاجتماعات مخطط فقط.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Amical مقابل البدائل',
        content: [
          'هذه أقرب أدوات الإملاء في الدليل: تطبيق مجاني مفتوح المصدر لثلاثة أنظمة مكتبية، وتطبيق مجاني لأجهزة Mac فقط، وتطبيق مفتوح المصدر هجين، وتطبيق مدفوع مغلق المصدر.',
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
            'التطبيق': 'Amical',
            'المنصات': 'Mac وWindows',
            'السعر والترخيص': 'محلي مجاني، Premium سحابي، MIT',
            'الدور': 'إملاء بالضغط والتحدث',
            'الفرق الرئيسي': 'مفتوح المصدر؛ Whisper محلي مع سحابة اختيارية',
          },
          {
            'التطبيق': '[Handy](/ar/power-local-llm/handy-review)',
            'المنصات': 'Mac وWindows وLinux',
            'السعر والترخيص': 'مجاني، MIT',
            'الدور': 'إملاء بالضغط والتحدث',
            'الفرق الرئيسي': 'مجاني ومفتوح المصدر؛ ويضيف Linux',
          },
          {
            'التطبيق': '[OpenWhispr](/ar/power-local-llm/openwhispr-review)',
            'المنصات': 'Mac وWindows وLinux وiOS',
            'السعر والترخيص': 'مجاني جزئيًا، MIT',
            'الدور': 'إملاء بوضع محلي أو سحابي',
            'الفرق الرئيسي': 'تختار نماذج محلية أو مفتاح API الخاص بك أو سحابته',
          },
          {
            'التطبيق': '[FluidVoice](/ar/power-local-llm/fluidvoice-review)',
            'المنصات': 'Mac',
            'السعر والترخيص': 'مجاني، GPL-3.0',
            'الدور': 'تطبيق إملاء لأجهزة Mac',
            'الفرق الرئيسي': 'مجاني ومفتوح المصدر؛ لأجهزة Mac فقط',
          },
          {
            'التطبيق': '[Weesper Neon Flow](/ar/power-local-llm/weesper-neon-flow-review)',
            'المنصات': 'Mac وWindows',
            'السعر والترخيص': 'تجربة ثم مدفوع، مملوك',
            'الدور': 'إملاء بالضغط والتحدث',
            'الفرق الرئيسي': 'مغلق المصدر ومدفوع؛ Whisper على الجهاز',
          },
        ],
        note: 'تتغير منصات التطبيقات الخارجية وأسعارها وميزاتها كثيرًا. تحقق من التفاصيل الحالية في صفحة كل مشروع قبل أن تقرر.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب Amical',
        items: [
          '**الكتّاب وموظفو المكاتب على Mac أو Windows.** اختصار واحد يملي في البريد والدردشة والمستندات.',
          '**من يتجنبون الإملاء السحابي.** يبقى التعرف على الكلام على الحاسوب بنموذج Whisper المحلي، بحسب الوثائق.',
          '**مستخدمو البرمجيات مفتوحة المصدر.** شيفرة MIT عامة والإملاء المحلي مجاني.',
          '**المستخدمون متعددو اللغات.** أكثر من 100 لغة بحسب المطوّر، مع كشف تلقائي.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب Amical',
        items: [
          '**مستخدمو Linux.** يقول ملف README إن Linux غير مدعوم؛ ويغطيه Handy.',
          '**مستخدمو Mac على macOS 14 أو أقدم.** يتطلب Whisper المحلي macOS 15 أو أحدث.',
          '**من لا يريدون قياسًا عن بُعد افتراضيًا.** تقول الوثائق إنه مفعّل افتراضيًا ويجب إيقافه.',
          '**من يحتاجون إلى تمييز المتحدثين أو تفريغ اجتماعات مباشر اليوم.** لا يُوثَّق أي منهما على أنه متاح.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل Amical دون اتصال بالإنترنت؟',
            a: 'تقول الأسئلة الشائعة نعم، بعد تنزيل نموذج Whisper محلي؛ ويحتاج الإعداد الأول إلى اتصال لذلك التنزيل. وتحتاج النماذج السحابية إلى اتصال. ولم تختبره PromptQuorum دون اتصال.',
          },
          {
            q: 'هل يُرسل صوتي إلى السحابة؟',
            a: 'فقط إذا اخترت النموذج السحابي أو التنسيق السحابي، بحسب الأسئلة الشائعة التي تقول إنهما يرسلان صوت ذلك الطلب. الشيفرة مفتوحة ولم تفحص PromptQuorum حركة الشبكة.',
          },
          {
            q: 'هل Amical مجاني فعلًا؟',
            a: 'بحسب صفحة الأسعار، الإملاء المحلي مجاني وغير محدود، وتضيف الخطة المجانية 2,000 كلمة أسبوعيًا من الإملاء السحابي. ولا يتطلب خطة Premium المدفوعة إلا الإملاء السحابي غير المحدود.',
          },
          {
            q: 'هل يمكنني استخدام نموذجي اللغوي الخاص؟',
            a: 'بالنسبة إلى مرحلة التنسيق Alpha نعم: Ollama أو أي نقطة نهاية محلية متوافقة مع OpenAI. أما بالنسبة إلى الكلام فتقول الوثائق إنك تختار إصدار Whisper المرفق أو النموذج السحابي؛ واستخدام مزوّد كلام خاص بك غير مدعوم.',
          },
          {
            q: 'من يصنع Amical؟',
            a: 'تنشر الشيفرة منظمة GitHub باسم amicalhq، وتسمّي سياسة الخصوصية شركة Exa Labs LLC كمزوّد للخدمة.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          'يناسب Amical من يريد إملاءً مجانيًا ومفتوح المصدر بالضغط والتحدث على Mac أو Windows يعمل فيه Whisper على حاسوبه، بحسب الوثائق. وله رخصة MIT وطبقة محلية مجانية وإصدار صدر هذا الأسبوع.',
          'التحفظات تخص النطاق وإمكانية التحقق: لا نسخة لنظام Linux، وmacOS 15 لـ Whisper المحلي، وقياس عن بُعد مفعّل افتراضيًا بحسب الوثائق، ومرحلة تنسيق Alpha، وادعاءات خصوصية لم تتمكن PromptQuorum من فحصها. جرّب الطبقة المحلية المجانية قبل أن تقرر بشأن Premium.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Amical](https://amical.ai/) — الميزات والمنصات والأسعار.',
          '[صفحة الأسعار](https://amical.ai/pricing) — خطط Free وPremium وEnterprise.',
          '[الوثائق](https://amical.ai/docs) — النماذج المحلية والتنسيق بالذكاء الاصطناعي والأسئلة الشائعة والقياس عن بُعد وأدلة البدء السريع.',
          '[سياسة الخصوصية](https://amical.ai/privacy) — التعامل مع البيانات، معنونة لتطبيق الجوال.',
          '[مستودع GitHub](https://github.com/amicalhq/amical) — ملف README ورخصة MIT والشيفرة المصدرية.',
          '[إصدارات GitHub](https://github.com/amicalhq/amical/releases) — ملفات المثبّت وتاريخ إصدار النسخة 1.13.0.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مقارنة أدوات الصوت والكلام المحلية](/ar/power-local-llm/local-llm-voice-audio-compared) — تحويل النص إلى كلام والكلام إلى نص ووكلاء الصوت جنبًا إلى جنب.',
          '[مراجعة Handy](/ar/power-local-llm/handy-review) — تطبيق إملاء مجاني ومفتوح المصدر لأجهزة Mac وWindows وLinux.',
          '[مراجعة Weesper Neon Flow](/ar/power-local-llm/weesper-neon-flow-review) — تطبيق إملاء مدفوع لأجهزة Mac وWindows.',
          '[مراجعة Whisper.cpp](/ar/power-local-llm/whisper-cpp-review) — المحرك المفتوح خلف كثير من تطبيقات Whisper المحلية.',
          '[دليل Local LLM Software Directory الكامل](/ar/directory) — دليل أوسع لأدوات الذكاء الاصطناعي المحلي عبر المنصات.',
          '[مراجعة Sprich: تطبيق إملاء ألماني لأجهزة Mac بمعالج Apple Silicon](/ar/power-local-llm/sprich-review) — تطبيق إملاء آخر لأجهزة Mac يركّز أولًا على الألمانية، بخطة مجانية ويعمل على Apple Silicon فقط.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-09',
    dateModified: '2026-11-09',
    next_refresh_due: '2027-05-09',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/amical-review-hero-ko.webp',
    title: 'Amical 리뷰: Mac·Windows용 무료 오픈 소스 받아쓰기 앱',
    seoTitle: 'Amical 리뷰: Mac·Windows 무료 오픈 소스 받아쓰기',
    intro: 'Amical은 Mac과 Windows용 무료 MIT 라이선스 받아쓰기 앱입니다. 단축키를 누른 채 말하면 커서가 있는 앱에 텍스트를 입력해 주며, OpenAI의 Whisper 모델을 사용자의 컴퓨터에서 실행합니다. 이 리뷰는 개발사의 웹사이트, 문서, GitHub 저장소가 밝히는 내용, 로컬 방식이 끝나고 선택형 클라우드가 시작되는 지점, 그리고 디렉터리의 다른 받아쓰기 도구와의 비교를 정리합니다.',
    metaDescription: 'Amical 리뷰: PC에서 Whisper를 실행하는 Mac·Windows용 무료 MIT 받아쓰기 앱. 모델 다운로드 후 오프라인 작동. 직접 테스트하지 않았습니다.',
    twitterDescription: 'Amical 리뷰: 로컬 Whisper를 쓰는 Mac·Windows용 무료 오픈 소스 단축키 받아쓰기 앱. 가격, 개인정보 보호, 한계, 대안을 정리했습니다.',
    audience: '음성을 클라우드 서비스로 보내지 않고 어떤 앱에든 무료 오픈 소스 받아쓰기를 하려는 Mac·Windows 사용자를 위한 글입니다. 가격, 설치, 모델, 개인정보 보호, 한계, 대안을 다룹니다.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Amical review',
    targetKeywords: [
      'amical 리뷰',
      'amical ai 받아쓰기',
      '오픈 소스 받아쓰기 앱',
      '로컬 whisper 받아쓰기 mac windows',
      '오프라인 음성 받아쓰기',
      '무료 데스크톱 음성 인식',
      'whisper 받아쓰기 앱',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
      'Windows PC',
    ],
    leadAnswerBlock: '**Amical은 OpenAI의 Whisper 모델을 사용자의 컴퓨터에서 실행하는 Mac·Windows용 무료 MIT 라이선스 받아쓰기 앱이며, 문서에 따르면 로컬 모델을 내려받고 나면 오프라인으로 작동합니다.** 선택형 클라우드 받아쓰기도 제공하며, 유료 Premium 플랜은 클라우드를 무제한으로 쓸 수 있게 해 줍니다. 최신 릴리스는 2026년 11월 7일의 버전 1.13.0입니다. 이 리뷰는 개발사의 웹사이트, 문서, GitHub 저장소에 근거하며 직접 사용해 본 테스트는 아닙니다.',
    quickAnswerTop: {
      ko: {
        question: 'Amical은 로컬 받아쓰기 앱입니까?',
        answer: '데스크톱 앱은 기본적으로 그렇습니다. 문서에 따르면 전사는 Whisper로 로컬에서 실행되거나, 로그인하면 클라우드에서 실행되며, 로컬 모델을 설정하고 나면 오프라인으로 작동합니다. 클라우드 음성 인식과 클라우드 서식 정리는 해당 요청의 오디오를 개발사로 보냅니다. 코드는 공개되어 있지만 PromptQuorum은 네트워크 트래픽을 확인하지 않았으므로, 개인정보 보호 주장은 개발사 자체의 설명입니다.',
        bullets: [
          '단축키를 누른 채 말하고 놓으면, 이메일, 채팅, 편집기 같은 앱의 커서 위치에 앱에 맞게 정리된 텍스트가 나타납니다.',
          '가격: 로컬 받아쓰기는 무료·무제한이며, Premium은 클라우드 받아쓰기를 무제한으로 제공하고 연간 결제 시 월 $7, 월간 결제 시 월 $10입니다.',
          'Whisper 변형은 Tiny(약 78 MB)부터 Large v3(약 3.1 GB)까지 6종이며, 앱 안에서 내려받습니다.',
          'Mac(로컬 Whisper는 macOS 15 이상 필요)과 Windows 전용이며, README에는 Linux를 지원하지 않는다고 적혀 있습니다.',
          '문서에 따르면 원격 측정은 기본적으로 켜져 있으며 설정에서 끌 수 있습니다.',
        ],
        updatedDate: '2026-11-09',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Amical 받기', anchor: 'get-it' },
      { label: 'Amical 한눈에 보기', anchor: 'at-a-glance' },
      { label: 'Amical이란', anchor: 'what-is-amical' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '기능', anchor: 'features' },
      { label: '모델과 하드웨어', anchor: 'models-hardware' },
      { label: '개인정보 보호, 라이선스, 비용', anchor: 'privacy' },
      { label: '장점과 한계', anchor: 'tradeoffs' },
      { label: 'Amical과 대안 비교', anchor: 'vs-alternatives' },
      { label: 'Amical을 쓰면 좋은 사용자', anchor: 'who-should-use' },
      { label: 'Amical을 쓰지 말아야 할 사용자', anchor: 'who-should-not-use' },
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
            text: 'Amical은 문서에 따르면 사용자의 컴퓨터에서 Whisper를 실행하고 모델을 내려받은 뒤에는 오프라인으로 작동하는 Mac·Windows용 무료 오픈 소스 받아쓰기 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '대신 타자를 쳐 주는 마이크 키라고 생각하면 됩니다. 단축키를 누른 채 말하고 놓으면 컴퓨터가 음성을 텍스트로 바꿔 주며, 쓰지 않아도 되는 클라우드 옵션이 있습니다.',
          },
        ],
        items: [
          '로컬 주장: 음성 인식은 기기에서 Whisper로 실행되며, 클라우드 음성 인식, 클라우드 서식 정리, 로그인, 모델 다운로드, 원격 측정에는 인터넷이 사용됩니다.',
          '라이선스와 개발사: MIT 라이선스이며 GitHub 조직 amicalhq가 공개합니다.',
          '가격: 로컬 받아쓰기는 무료·무제한이며, 무제한 클라우드 받아쓰기에는 유료 Premium 플랜이 필요합니다.',
          '유지보수: 버전 1.13.0이 2026년 11월 7일에 출시되었고 저장소는 2026년 11월 8일에 업데이트되어 프로젝트가 활발히 개발되고 있습니다.',
          '공백: Linux 버전이 없고, 로컬 Whisper는 macOS 15 이상이 필요하며, AI 서식 정리 단계는 Alpha로 표시되어 있습니다.',
        ],
      },
      getItAmical: {
        id: 'get-it',
        title: 'Amical 받기',
        content: [
          '**Amical은 다른 데스크톱 앱처럼 설치하므로 터미널이 필요 없습니다.** 공식 사이트나 GitHub 릴리스 페이지에서 사용 중인 시스템용 설치 파일을 내려받으면 되고, Whisper 모델은 첫 실행 설정 중에 앱 안에서 내려받습니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'Mac',
            '받는 곳': '[Mac용 다운로드](https://github.com/amicalhq/amical/releases/latest) — Apple Silicon 또는 Intel용 .dmg, `brew install --cask amical`도 가능',
          },
          {
            '플랫폼': 'Windows',
            '받는 곳': '[Windows용 다운로드](https://github.com/amicalhq/amical/releases/latest) — x64 또는 arm64용 .exe',
          },
          {
            '플랫폼': 'iPhone과 Android',
            '받는 곳': '[Amical 사이트의 모바일 앱](https://amical.ai/) — App Store와 Google Play, Amical 계정으로 로그인',
          },
          {
            '플랫폼': '릴리스 노트',
            '받는 곳': '[GitHub Releases](https://github.com/amicalhq/amical/releases) 및 [Amical 문서](https://amical.ai/docs)',
          },
          {
            '플랫폼': '공식 사이트',
            '받는 곳': '[amical.ai](https://amical.ai/)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[Amical 개인정보 처리방침](https://amical.ai/privacy)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '[github.com/amicalhq/amical](https://github.com/amicalhq/amical) — MIT 라이선스',
          },
        ],
        note: '개인정보 처리방침 페이지는 모바일 앱용으로 표시되어 있으며, PromptQuorum은 데스크톱용 별도 방침을 찾지 못했습니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Amical 한눈에 보기',
        columns: ['항목', 'Amical'],
        rows: [
          { '항목': '플랫폼', 'Amical': 'macOS와 Windows 데스크톱, Linux 미지원' },
          { '항목': '가격', 'Amical': '무료(로컬), 클라우드는 유료 Premium' },
          { '항목': '라이선스', 'Amical': 'MIT, 오픈 소스' },
          { '항목': '실행 위치', 'Amical': '컴퓨터에서 Whisper로 실행, 로그인 시 선택형 클라우드' },
          { '항목': '언어', 'Amical': '개발사에 따르면 100개 이상(검증하지 않음)' },
          { '항목': '화자 구분', 'Amical': '명시되지 않음' },
          { '항목': '실시간 전사', 'Amical': '회의용으로 계획 중, 받아쓰기는 단축키 방식' },
          { '항목': 'CPU만으로 사용 가능', 'Amical': '명시되지 않음, 모델 크기는 78 MB~3.1 GB' },
          { '항목': '로컬 API 서버', 'Amical': '명시되지 않음' },
        ],
        note: '항목은 Local LLM Software Directory에서 사용하는 음성 인식 비교를 따릅니다. 사이트에 언급이 없는 항목은 지원하지 않는다는 뜻이 아니라 알 수 없다는 뜻입니다.',
      },
      whatIsAmical: {
        id: 'what-is-amical',
        title: 'Amical이란',
        content: [
          '**Amical은 전사 편집기가 아니라 단축키 방식의 받아쓰기 앱입니다.** 키를 누른 채 말하거나 떠 있는 위젯을 클릭하면 포커스가 있는 앱에 텍스트가 입력됩니다. 앱은 해당 앱을 감지해 서식을 조정하며, 예를 들어 이메일에서는 인사말을 별도 줄에 둡니다.',
          '코드는 GitHub 조직 amicalhq 아래에 있습니다. 프로젝트는 음성 메모(진행 중)와 실시간 회의 전사, 음성 명령(계획 중)도 목록에 올려 두었지만, 이 리뷰는 받아쓰기 앱만 다룹니다.',
          '이 리뷰는 웹사이트, 문서, 개인정보 처리방침, GitHub 저장소에 근거합니다. 직접 사용해 본 테스트는 하지 않았으므로 정확도, 속도, 안정성은 평가하지 않습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**설정은 설치, 모델 선택, 단축키 지정으로 이루어집니다.** 단계는 문서의 데스크톱 퀵스타트를 따릅니다.',
        ],
        numberedItems: [
          {
            title: '앱 설치',
            whyItMatters: '[GitHub 릴리스 페이지](https://github.com/amicalhq/amical/releases/latest)에서 Mac용 .dmg 또는 Windows용 .exe를 내려받거나, Mac에서는 `brew install --cask amical`을 실행합니다.',
          },
          {
            title: '권한 허용',
            whyItMatters: '마이크 접근을 허용합니다. Mac에서는 Amical이 다른 앱에 붙여 넣을 수 있도록 손쉬운 사용 권한도 허용합니다.',
          },
          {
            title: '로컬 또는 클라우드 선택',
            whyItMatters: '온보딩에서 Cloud(로그인, 설정 불필요) 또는 Local(내 컴퓨터의 Whisper, 오프라인)을 고를 수 있으며, 하드웨어에 따라 하나를 추천합니다.',
          },
          {
            title: '누르고, 말하고, 놓기',
            whyItMatters: '단축키를 지정하고, 아무 텍스트 입력란을 클릭한 뒤, 누른 채 말하고 놓습니다. 500 ms보다 짧게 누르면 실수로 보고 버려집니다.',
          },
        ],
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**기능은 어떤 앱에든 받아쓰는 데 집중되어 있습니다.** 아래 내용은 모두 README, 문서, 릴리스 노트에서 가져왔습니다.',
        ],
        items: [
          '**어디서나 받아쓰기.** 단축키 또는 떠 있는 위젯으로 포커스가 있는 앱에 텍스트를 붙여 넣습니다.',
          '**맥락 인식 서식 정리.** Alpha로 표시된 선택형 AI 단계가 출력을 활성 앱에 맞게 다듬으며, 로컬 언어 모델 또는 Amical Cloud 연결이 필요합니다.',
          '**언어.** 개발사에 따르면 100개 이상의 언어를 지원하고 언어를 자동 감지하며, 버전 1.13.0에서 지역별 변형과 광둥어가 추가되었습니다.',
          '**개인화.** 사용자 사전, 텍스트 단축 입력, 사용자 지정 프롬프트, 전사 기록을 제공하며, 버전 1.13.0부터는 붙여 넣은 뒤의 수정에서 학습한 어휘도 반영합니다.',
          '**메모.** 음성 메모는 진행 중으로 표시되어 있습니다.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '모델과 하드웨어',
        content: [
          '**Amical은 Whisper를 6종의 변형으로 로컬에서 실행합니다.** 문서에는 Tiny(약 78 MB), Base(약 148 MB), Small(약 488 MB), Medium(약 1.5 GB), Large v3(약 3.1 GB), Large v3 Turbo(약 1.5 GB)가 나오며, 각각 설정에서 속도와 정확도 등급이 표시됩니다.',
          'README에는 Mac에서 로컬 Whisper를 쓰려면 macOS 15 이상이 필요하다고 적혀 있습니다. RAM이나 GPU 요구 사항은 명시되어 있지 않으므로 컴퓨터에 맞는 모델을 고르십시오. 선택형 서식 정리 단계에는 문서가 Ollama 또는 OpenAI 호환 엔드포인트를 언급합니다. 속도나 정확도 수치는 여기서 재현하지 않았습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호, 라이선스, 비용',
        content: [
          '**문서에 따르면 Amical은 데이터가 컴퓨터 밖으로 나가지 않고 계정 없이도 전적으로 내 컴퓨터에서 실행할 수 있습니다.** 전사본, 메모, 어휘, 오디오 파일은 앱 데이터 폴더에 저장됩니다. FAQ에 따르면 클라우드 음성 인식, 클라우드 서식 정리, 로그인은 해당 요청의 오디오만 전송합니다.',
          '원격 측정은 별개의 문제입니다. 문서에 따르면 익명 원격 측정은 앱 실행, 오류, 성능을 대상으로 하며 기본적으로 켜져 있고 설정의 고급 항목에서 끌 수 있습니다. 기록 항목의 신고 플래그를 누르면 해당 오디오와 전사본도 전송됩니다. 버전 1.13.0 릴리스 노트에는 이제 로그인 시 원격 측정 동의를 묻는다고 적혀 있으며, 두 진술은 개발사 페이지에서 서로 조율되어 있지 않습니다. 모바일 개인정보 처리방침에는 제품 분석과 광고 측정이 나열되어 있습니다. 코드는 공개되어 있지만 PromptQuorum은 네트워크 트래픽을 조사하지 않았으므로, 이런 진술은 개발사 자체의 설명입니다.',
          '라이선스는 MIT입니다. 로컬 받아쓰기는 무료·무제한이며, 무료 플랜에는 주당 2,000단어의 클라우드 받아쓰기가 포함됩니다. Premium은 연간 결제 시 월 $7(연 $84), 월간 결제 시 월 $10입니다. Enterprise는 맞춤 가격입니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장점과 한계',
        columns: ['장점', '실제 사용에서의 의미', '한계 / 주의점'],
        rows: [
          {
            '장점': '내 컴퓨터에서 실행되는 Whisper',
            '실제 사용에서의 의미': '모델을 내려받고 나면 계정 없이 오프라인으로 받아쓸 수 있습니다.',
            '한계 / 주의점': '클라우드 옵션과 원격 측정이 있으며, PromptQuorum은 네트워크 트래픽을 확인하지 않았습니다.',
          },
          {
            '장점': '무료이며 오픈 소스',
            '실제 사용에서의 의미': 'MIT 코드와 무료 무제한 로컬 받아쓰기를 제공합니다.',
            '한계 / 주의점': '클라우드 받아쓰기를 무제한으로 쓰려면 유료 Premium 플랜이 필요합니다.',
          },
          {
            '장점': '어떤 앱에서든 받아쓰기',
            '실제 사용에서의 의미': '단축키 하나로 이메일, 채팅, 편집기, 문서에서 쓸 수 있습니다.',
            '한계 / 주의점': 'Mac과 Windows 전용이며, 로컬 Whisper는 macOS 15 이상이 필요합니다.',
          },
          {
            '장점': '6종의 모델 크기',
            '실제 사용에서의 의미': '오래된 컴퓨터에는 작은 모델, 정확도가 필요하면 큰 모델을 쓸 수 있습니다.',
            '한계 / 주의점': 'Large v3는 디스크 약 3.1 GB가 필요하며, 속도 수치는 여기서 공개하지 않습니다.',
          },
          {
            '장점': '맥락 인식 서식 정리',
            '실제 사용에서의 의미': '이메일이나 채팅 같은 활성 앱에 맞게 출력이 다듬어집니다.',
            '한계 / 주의점': 'Alpha로 표시되어 있으며 로컬 언어 모델 또는 클라우드 연결이 필요합니다.',
          },
          {
            '장점': '활발한 개발',
            '실제 사용에서의 의미': '버전 1.13.0이 2026년 11월 7일에 출시되었습니다.',
            '한계 / 주의점': '음성 메모는 진행 중이며, 회의 전사는 계획 단계일 뿐입니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Amical과 대안 비교',
        content: [
          '디렉터리에서 가장 가까운 받아쓰기 도구는 세 가지 데스크톱 시스템용 무료 오픈 소스 앱, 무료 Mac 전용 앱, 하이브리드 오픈 소스 앱, 유료 비공개 소스 앱입니다.',
        ],
        columns: ['앱', '플랫폼', '가격과 라이선스', '역할', '주요 차이'],
        rows: [
          {
            '앱': 'Amical',
            '플랫폼': 'Mac, Windows',
            '가격과 라이선스': '로컬 무료, 클라우드 Premium, MIT',
            '역할': '단축키 받아쓰기',
            '주요 차이': '오픈 소스, 로컬 Whisper와 선택형 클라우드',
          },
          {
            '앱': '[Handy](/ko/power-local-llm/handy-review)',
            '플랫폼': 'Mac, Windows, Linux',
            '가격과 라이선스': '무료, MIT',
            '역할': '단축키 받아쓰기',
            '주요 차이': '무료 오픈 소스, Linux 추가 지원',
          },
          {
            '앱': '[OpenWhispr](/ko/power-local-llm/openwhispr-review)',
            '플랫폼': 'Mac, Windows, Linux, iOS',
            '가격과 라이선스': '프리미엄, MIT',
            '역할': '로컬 또는 클라우드 모드를 갖춘 받아쓰기',
            '주요 차이': '로컬 모델, 자신의 API 키, 자체 클라우드 중에서 선택',
          },
          {
            '앱': '[FluidVoice](/ko/power-local-llm/fluidvoice-review)',
            '플랫폼': 'Mac',
            '가격과 라이선스': '무료, GPL-3.0',
            '역할': 'Mac 받아쓰기 앱',
            '주요 차이': '무료 오픈 소스, Mac 전용',
          },
          {
            '앱': '[Weesper Neon Flow](/ko/power-local-llm/weesper-neon-flow-review)',
            '플랫폼': 'Mac, Windows',
            '가격과 라이선스': '체험 후 유료, 독점',
            '역할': '단축키 받아쓰기',
            '주요 차이': '비공개 소스이며 유료, 기기에서 Whisper 실행',
          },
        ],
        note: '서드파티 앱의 플랫폼, 가격, 기능은 자주 바뀝니다. 결정하기 전에 각 프로젝트의 공식 페이지에서 최신 정보를 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Amical을 쓰면 좋은 사용자',
        items: [
          '**Mac이나 Windows를 쓰는 작성자와 사무직 종사자.** 단축키 하나로 이메일, 채팅, 문서에 받아쓸 수 있습니다.',
          '**클라우드 받아쓰기를 피하려는 사람.** 문서에 따르면 로컬 Whisper는 음성 인식을 컴퓨터 안에 둡니다.',
          '**오픈 소스 사용자.** MIT 코드가 공개되어 있고 로컬 받아쓰기는 무료입니다.',
          '**여러 언어를 쓰는 사용자.** 개발사에 따르면 100개 이상의 언어를 지원하며 자동 감지를 제공합니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Amical을 쓰지 말아야 할 사용자',
        items: [
          '**Linux 사용자.** README에는 Linux를 지원하지 않는다고 적혀 있으며, Handy는 Linux를 지원합니다.',
          '**macOS 14 이하를 쓰는 Mac 사용자.** 로컬 Whisper는 macOS 15 이상이 필요합니다.',
          '**기본적으로 원격 측정이 없기를 바라는 사람.** 문서에 따르면 기본값이 켜져 있어 직접 꺼야 합니다.',
          '**지금 당장 화자 구분이나 실시간 회의 전사가 필요한 사람.** 둘 다 제공된다고 문서화되어 있지 않습니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Amical은 오프라인에서 작동합니까?',
            a: 'FAQ에는 로컬 Whisper 모델을 내려받고 나면 그렇다고 적혀 있습니다. 첫 실행 설정에서는 다운로드를 위해 연결이 필요합니다. 클라우드 모델은 연결이 필요합니다. PromptQuorum은 오프라인에서 테스트하지 않았습니다.',
          },
          {
            q: '내 음성이 클라우드로 전송됩니까?',
            a: 'FAQ에 따르면 클라우드 모델이나 클라우드 서식 정리를 선택한 경우에만 해당 요청의 오디오가 전송됩니다. 코드는 공개되어 있지만 PromptQuorum은 네트워크 트래픽을 확인하지 않았습니다.',
          },
          {
            q: 'Amical은 정말 무료입니까?',
            a: '가격 페이지에 따르면 로컬 받아쓰기는 무료·무제한이며, 무료 플랜에는 주당 2,000단어의 클라우드 받아쓰기가 포함됩니다. 무제한 클라우드 받아쓰기만 유료 Premium 플랜이 필요합니다.',
          },
          {
            q: '내 언어 모델을 사용할 수 있습니까?',
            a: 'Alpha 서식 정리 단계에서는 가능합니다. Ollama 또는 OpenAI 호환 로컬 엔드포인트를 쓸 수 있습니다. 음성 인식은 문서에 따르면 제공되는 Whisper 변형이나 클라우드 모델 중에서 고르며, 자신의 음성 인식 제공자를 가져오는 것은 지원되지 않습니다.',
          },
          {
            q: 'Amical은 누가 만듭니까?',
            a: '코드는 GitHub 조직 amicalhq가 공개하며, 개인정보 처리방침은 Exa Labs LLC를 서비스 제공자로 명시합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '문서에 따르면 Whisper가 사용자의 컴퓨터에서 실행되는 Mac이나 Windows PC에서 무료 오픈 소스 단축키 받아쓰기를 원한다면 Amical이 잘 맞습니다. MIT 라이선스, 무료 로컬 티어, 이번 주의 릴리스가 있습니다.',
          '주의할 점은 범위와 검증 가능성입니다. Linux 버전이 없고, 로컬 Whisper는 macOS 15가 필요하며, 문서에 따르면 원격 측정이 기본적으로 켜져 있고, 서식 정리 단계는 Alpha이며, PromptQuorum이 확인하지 못한 개인정보 보호 주장이 있습니다. Premium을 결정하기 전에 무료 로컬 티어를 먼저 사용해 보십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Amical 공식 사이트](https://amical.ai/) — 기능, 플랫폼, 가격.',
          '[가격 페이지](https://amical.ai/pricing) — Free, Premium, Enterprise 플랜.',
          '[문서](https://amical.ai/docs) — 로컬 모델, AI 서식 정리, FAQ, 원격 측정, 퀵스타트 가이드.',
          '[개인정보 처리방침](https://amical.ai/privacy) — 데이터 처리, 모바일 앱용으로 표시됨.',
          '[GitHub 저장소](https://github.com/amicalhq/amical) — README, MIT 라이선스, 소스 코드.',
          '[GitHub Releases](https://github.com/amicalhq/amical/releases) — 설치 파일과 버전 1.13.0의 출시일.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[로컬 음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 음성 합성, 음성 인식, 음성 에이전트를 나란히 비교합니다.',
          '[Handy 리뷰](/ko/power-local-llm/handy-review) — Mac, Windows, Linux용 무료 오픈 소스 받아쓰기 앱.',
          '[Weesper Neon Flow 리뷰](/ko/power-local-llm/weesper-neon-flow-review) — Mac과 Windows용 유료 받아쓰기 앱.',
          '[Whisper.cpp 리뷰](/ko/power-local-llm/whisper-cpp-review) — 많은 로컬 Whisper 앱의 기반이 되는 오픈 엔진.',
          '[전체 Local LLM Software Directory](/ko/directory) — 여러 플랫폼의 로컬 AI 도구를 모은 더 넓은 디렉터리.',
          '[Sprich 리뷰: Apple Silicon Mac용 독일산 받아쓰기 앱](/ko/power-local-llm/sprich-review) — 독일어 우선의 또 다른 Mac 받아쓰기 앱으로, 무료 요금제가 있으며 Apple Silicon 전용입니다.',
        ],
      },
    },
  },
}
