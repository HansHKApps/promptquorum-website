// Univocal Review: Mac app for reading text aloud and dictation, both on the Mac
// Slug: univocal-review
// Companion to: parrot-review, voicebox-review, sprich-review, macwhisper-review, weesper-neon-flow-review, local-llm-voice-audio-compared
// Facts verified 2026-11-13 against univocalapp.com (home, /download, /downloading, /purchase, /changelog, /privacy, /alternatives, /guides/read-aloud-mac).
// Not hands-on tested; the DMG was not opened. Stale-project warning is OFF (2 days since version 0.3.33 on 2026-11-11).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/univocal-review-hero-en.webp',
    title: 'Univocal Review: Read-Aloud and Dictation on Your Mac',
    seoTitle: 'Univocal Review: Mac Read-Aloud and Dictation App',
    intro: "Univocal is a paid Mac app that does two jobs with one install: it reads selected text aloud and it types what you dictate into whatever app has the cursor. Its maker says both run on your own Apple silicon Mac. This review covers what the maker's website, changelog and privacy page document, what they leave out, and how Univocal compares with other voice tools in the directory.",
    metaDescription: 'Univocal review: a Mac app for read-aloud and dictation that, per its maker, runs on your Mac. $39 once after a 14-day trial. Apple silicon only. Not tested.',
    twitterDescription: 'Univocal review: one Mac app for reading text aloud and dictating, processed on your own Mac per its maker. Price, privacy, limits and alternatives.',
    audience: 'Mac users who want text-to-speech and dictation in one app without a cloud service or subscription — covers price, install, privacy, limits and alternatives.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Univocal review',
    targetKeywords: [
      'univocal review',
      'univocal mac app',
      'read aloud and dictation mac',
      'local text to speech mac',
      'offline dictation mac apple silicon',
      'private speech to text mac',
      'text to speech and speech to text one app',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
    ],
    leadAnswerBlock: "**Univocal is a Mac app with no published source code that reads selected text aloud and types your dictation, and its maker says both run on your own Apple silicon Mac with nothing sent anywhere.** It costs $39 once after a 14-day free trial, with no subscription. The newest release is version 0.3.33 from 11 November 2026. This review rests on the maker's public website, changelog and privacy page, not on hands-on testing.",
    quickAnswerTop: {
      en: {
        question: 'Is Univocal a local read-aloud and dictation app?',
        answer: 'According to its maker, yes: both directions run on your Mac, and nothing you dictate or read is sent anywhere. The first launch still downloads about 1.2 GB of speech software and models, and licence and update checks use the internet. The code is not published, and PromptQuorum did not inspect network traffic, so the claim is the maker\'s own.',
        bullets: [
          'Select text and press Option-Shift-R to hear it read; hold the right Option key to dictate. Both shortcuts can be changed.',
          'Pricing: $39 once, one licence for up to three Macs, a 14-day trial without card or account, and a 30-day refund.',
          'The site names the Kokoro voices and, on macOS 26, Apple\'s on-device speech recognition for live typing, but not the dictation model.',
          'Apple silicon Macs with macOS 14 or later only; no Intel, Windows, iPhone or Android version.',
          'Univocal Connect lets other local apps send text for reading; an Obsidian plugin and a Chromium browser extension are listed.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get Univocal', anchor: 'get-it' },
      { label: 'Univocal at a Glance', anchor: 'at-a-glance' },
      { label: 'What Univocal Is', anchor: 'what-is-univocal' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Features', anchor: 'features' },
      { label: 'Models and Hardware', anchor: 'models-hardware' },
      { label: 'Privacy, License and Cost', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Univocal vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Univocal', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Univocal', anchor: 'who-should-not-use' },
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
            text: 'Univocal is a paid Mac app that combines text-to-speech and dictation and, per its maker, processes both on your own Mac instead of in a cloud service.',
          },
          {
            type: 'plain-terms',
            text: 'Think of two keys on your keyboard: one makes the Mac read what you selected, the other turns what you say into typed text, and the maker says neither sends your voice or text away.',
          },
        ],
        items: [
          'Local claim: both directions run on the Mac; the first-run download, licence checks and daily update checks still use the internet.',
          'License and maker: proprietary, published by NarNar Labs LLC; no source repository was found and the maker\'s country is not stated.',
          'Price: $39 once with a 14-day trial; the maker also lists time-limited discount codes.',
          'Maintenance: version 0.3.33 was released on 11 November 2026, so the project is actively updated.',
          'Gaps: Apple silicon and macOS 14 or later only, no named dictation model, and nothing in the pages about code signing.',
        ],
      },
      getItUnivocal: {
        id: 'get-it',
        title: 'Get Univocal',
        content: [
          '**Univocal installs like any Mac app, so no terminal is needed.** The official download link serves a disk image, and the speech models are fetched on first launch.',
        ],
        columns: ['Platform', 'Get It'],
        rows: [
          {
            Platform: 'Mac',
            'Get It': '[Download for Mac](https://univocalapp.com/download) — .dmg, Apple silicon, macOS 14 or newer',
          },
          {
            Platform: 'Free trial (14 days)',
            'Get It': '[Purchase page](https://univocalapp.com/purchase/) — full product, no card, no account',
          },
          {
            Platform: 'Setup guide',
            'Get It': '[Downloading and first launch](https://univocalapp.com/downloading/)',
          },
          {
            Platform: 'Release notes',
            'Get It': '[Changelog](https://univocalapp.com/changelog/)',
          },
          {
            Platform: 'Website',
            'Get It': '[univocalapp.com](https://univocalapp.com/)',
          },
          {
            Platform: 'Privacy policy',
            'Get It': '[Univocal privacy policy](https://univocalapp.com/privacy/)',
          },
          {
            Platform: 'Source code',
            'Get It': 'No source repository found',
          },
        ],
        note: 'The site lists only a Mac build. Windows, iOS and Android appear only as a notify-me form, and Intel Macs are not supported.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Univocal at a Glance',
        columns: ['Attribute', 'Univocal'],
        rows: [
          { Attribute: 'Platform', Univocal: 'macOS 14+, Apple silicon only' },
          { Attribute: 'Price', Univocal: '$39 once; 14-day trial' },
          { Attribute: 'License', Univocal: 'Proprietary; no source found' },
          { Attribute: 'Runs', Univocal: 'On your Mac; internet for downloads and checks' },
          { Attribute: 'Languages', Univocal: '32 for dictation and reading (home page)' },
          { Attribute: 'Real-time transcription', Univocal: 'Live typing as you speak (changelog 0.3.17)' },
          { Attribute: 'Voice cloning', Univocal: 'Not stated' },
          { Attribute: 'Speaker labels', Univocal: 'Not stated' },
          { Attribute: 'Local API server', Univocal: 'Not stated; Univocal Connect for local apps' },
        ],
        note: 'Attributes follow the speech-to-text and text-to-speech comparisons used in the Local LLM Software Directory. A missing statement on the site means unknown, not unsupported.',
      },
      whatIsUnivocal: {
        id: 'what-is-univocal',
        title: 'What Univocal Is',
        content: [
          '**Univocal is a voice utility with two functions: read aloud and dictation.** You select text and press a shortcut to hear it, or hold a key, speak and release to have text typed at the cursor, for example in a mail client, a note or a chat.',
          'It is published by NarNar Labs LLC. The maker\'s pages do not name a founder, a country or a postal address, only a support email. This review covers the pages listed under Sources and involved no hands-on testing, so voice quality, accuracy and speed are not rated here.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is an install, a first-run download and two shortcuts.** The steps follow the maker\'s setup page and changelog.',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Open the downloaded .dmg, move Univocal to Applications and start the 14-day trial; no card or account is needed.',
          },
          {
            title: 'Let the first launch finish',
            whyItMatters: 'The app downloads about 1.2 GB of speech software and models. Version 0.3.11 added the option to start using it before the download completes.',
          },
          {
            title: 'Grant macOS permissions',
            whyItMatters: 'Dictation needs Microphone and Accessibility permission, and reading selected text needs Accessibility permission, according to the maker.',
          },
          {
            title: 'Read and dictate',
            whyItMatters: 'Select text and press Option-Shift-R to hear it, or hold the right Option key and talk. Both defaults can be changed.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The feature set centres on private reading and dictation in any Mac app.** Everything below comes from the website, privacy page and changelog.',
        ],
        items: [
          '**Read aloud.** Selected text is read with word-by-word highlighting; with nothing selected, it reads the last copied text. Speed goes up to 4x since version 0.3.16.',
          '**Dictation.** Text lands at the cursor, with punctuation, casing and paragraph breaks inferred as you speak; live typing since version 0.3.17, switched off by default for new installs from version 0.3.28.',
          '**32 languages.** Reading and dictation share the language list, and the changelog describes mixed-language dictation.',
          '**Univocal Connect.** Other local apps can send text to be read; an Obsidian plugin and a read-aloud extension for Chrome, Edge, Brave, Vivaldi and Arc are listed.',
          '**History.** The last 20 dictations and the last 10 reads are kept on the Mac.',
          '**Interface languages.** English, Korean, Japanese, Simplified Chinese, Spanish, German and French.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Models and Hardware',
        content: [
          '**The maker names Kokoro for reading voices and Apple\'s SpeechAnalyzer for a live draft on macOS 26, but does not name its dictation model.** The privacy page says speech software comes from PyPI and models from Hugging Face, about 1.2 GB in total, and that a local engine listens on the Mac at 127.0.0.1:8787. Whisper and Parakeet are not mentioned on any page read.',
          'Requirements are an Apple silicon Mac and macOS 14 or later. Some reading languages, Korean and German among them, fetch about 400 MB more on first use. No RAM figure and no speed or accuracy numbers are published.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy, License and Cost',
        content: [
          '**The privacy page says nothing you dictate or read is sent anywhere, and that the app has no account, no analytics and no crash reporting.** The internet is still involved elsewhere: downloads from PyPI, Hugging Face and, if the Mac has no Python, GitHub; a licence check with Lemon Squeezy that sends the licence key and the Mac\'s name; and a daily update check against the maker\'s site. Issue reports are sent only when you press Send Report. The website, unlike the app, uses Cloudflare Web Analytics. The code is not published and PromptQuorum did not examine network traffic, so these statements are the maker\'s own.',
          'It is a paid, proprietary product: $39 once, one licence for up to three Macs, a 14-day trial and a 30-day refund. The purchase page also lists a launch code and a Black Friday code, both valid until 30 November 2026; check the page for the price at the time you buy. The maker\'s comparisons with other apps on its own site are the maker\'s claims and were not verified here.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            Benefit: 'Reading and dictation in one app',
            'What it means in real use': 'One install, one licence and one history instead of two tools.',
            'Limitation / caveat': 'Mac only; no Intel, Windows or mobile version.',
          },
          {
            Benefit: 'Processing on your Mac',
            'What it means in real use': 'Speech and text stay on the machine, per the maker.',
            'Limitation / caveat': 'Closed code, so the claim cannot be checked; first launch needs about 1.2 GB of downloads.',
          },
          {
            Benefit: 'One-time price',
            'What it means in real use': '$39 once, up to three Macs, no subscription.',
            'Limitation / caveat': 'Discount codes run until 30 November 2026, after which the home page lists $39.',
          },
          {
            Benefit: '32 languages',
            'What it means in real use': 'Read and dictate in many languages, including mixed-language dictation.',
            'Limitation / caveat': 'No per-language quality data; the dictation model is not named.',
          },
          {
            Benefit: 'Connections to other apps',
            'What it means in real use': 'Obsidian and a browser extension can send text to be read.',
            'Limitation / caveat': 'According to the privacy page, the extension runs on all web pages; read its permissions first.',
          },
          {
            Benefit: 'Frequent releases',
            'What it means in real use': 'Version 0.3.33 shipped on 11 November 2026.',
            'Limitation / caveat': 'Version 0.x; the earliest changelog entry is 0.3.0 from 29 July 2026, so the app looks young.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Univocal vs. Alternatives',
        content: [
          'These are the closest voice tools in the directory: a free read-aloud app, a free studio that does both jobs, and three Mac dictation apps.',
        ],
        columns: ['App', 'Platforms', 'Price and license', 'Role', 'Key difference'],
        rows: [
          {
            App: 'Univocal',
            Platforms: 'Mac',
            'Price and license': '$39 once, proprietary',
            Role: 'Read aloud and dictation',
            'Key difference': 'Both jobs in one paid Mac app',
          },
          {
            App: '[Parrot](/power-local-llm/parrot-review)',
            Platforms: 'Mac, Windows, Linux',
            'Price and license': 'Free, MIT',
            Role: 'Read-aloud only',
            'Key difference': 'Free and open source; no dictation',
          },
          {
            App: '[Voicebox](/power-local-llm/voicebox-review)',
            Platforms: 'Mac, Windows, Linux',
            'Price and license': 'Free, MIT',
            Role: 'Voice studio with dictation',
            'Key difference': 'Adds voice cloning and an MCP server',
          },
          {
            App: '[Weesper Neon Flow](/power-local-llm/weesper-neon-flow-review)',
            Platforms: 'Mac, Windows',
            'Price and license': 'Trial, then 5 EUR/month or 99 EUR once',
            Role: 'Push-to-talk dictation',
            'Key difference': 'Whisper on the device; adds Windows, no reading',
          },
          {
            App: '[Sprich](/power-local-llm/sprich-review)',
            Platforms: 'Mac',
            'Price and license': 'Freemium, proprietary',
            Role: 'Mac dictation',
            'Key difference': 'German-first with a free plan; no reading',
          },
          {
            App: '[MacWhisper](/power-local-llm/macwhisper-review)',
            Platforms: 'Mac',
            'Price and license': 'Freemium, proprietary',
            Role: 'Mac transcription app',
            'Key difference': 'Built for files and meetings first',
          },
        ],
        note: "Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each project's own page before deciding.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Univocal',
        items: [
          '**Mac users who both listen and dictate.** Reading and dictation share one app and one licence.',
          '**People who avoid cloud voice services.** Both functions run on the Mac, per the maker.',
          '**Multilingual users.** 32 languages for reading and dictation.',
          '**Buyers who prefer paying once.** No subscription is offered.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Univocal',
        items: [
          '**Intel Mac, Windows, iPhone and Android users.** Only an Apple silicon Mac build exists.',
          '**Anyone who needs auditable software.** No source code was found and the privacy claims cannot be inspected.',
          '**Anyone who wants free software.** After the trial it is paid; Parrot is free for reading and Voicebox is free for both.',
          '**Anyone who must work with no internet at all.** The first launch needs about 1.2 GB of downloads.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Univocal work offline?',
            a: 'The purchase page says dictation works offline after the first-run download. The privacy page describes the licence check as failing open, so it should not block use when offline. PromptQuorum did not test it offline.',
          },
          {
            q: 'Is my voice sent to the cloud?',
            a: 'The privacy page says nothing you dictate or read is sent anywhere. On macOS 26, live typing also uses Apple\'s on-device speech recognition. The code is not published and PromptQuorum did not inspect network traffic.',
          },
          {
            q: 'Which speech model does Univocal use?',
            a: 'The pages name Kokoro voices for reading and Apple voices on older macOS versions, but not the dictation model. Whisper and Parakeet are not mentioned.',
          },
          {
            q: 'Can I use one licence on several Macs?',
            a: 'Yes, up to three; a Mac can be moved off the licence in Settings, according to the purchase page.',
          },
          {
            q: 'Who makes Univocal?',
            a: 'NarNar Labs LLC. The pages do not state its country or a founder.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Univocal is a good fit if you have an Apple silicon Mac, want text-to-speech and dictation in one app where, per the maker, everything runs on your own computer, and accept paying once for software whose source code is not published. It has a 14-day trial, a one-time price and a very recent release.',
          'The caveats are scope and verifiability: no Intel, Windows or mobile version, no published code, an unnamed dictation model, and privacy claims that PromptQuorum could not check. Use the trial before you buy.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Univocal website](https://univocalapp.com/) — features, languages and requirements.',
          '[Downloading and first launch](https://univocalapp.com/downloading/) — installer file name and setup.',
          '[Purchase page](https://univocalapp.com/purchase/) — price, trial, licence and refund terms.',
          '[Changelog](https://univocalapp.com/changelog/) — version history; version 0.3.33 dated 11 November 2026.',
          '[Privacy policy](https://univocalapp.com/privacy/) — data handling and network hosts.',
          '[Alternatives page](https://univocalapp.com/alternatives/) — shortcuts, permissions and the maker\'s own comparisons.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Voice and Speech Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — text-to-speech, speech-to-text and voice agents side by side.',
          '[Parrot Review](/power-local-llm/parrot-review) — a free offline read-aloud app for three desktop systems.',
          '[Voicebox Review](/power-local-llm/voicebox-review) — a free voice studio with dictation and voice cloning.',
          '[Weesper Neon Flow Review](/power-local-llm/weesper-neon-flow-review) — paid offline dictation for Mac and Windows.',
          '[Best Local Text-to-Speech on Mac](/power-local-llm/best-local-tts-mac) — read-aloud options for Apple silicon.',
          '[The Complete Local LLM Software Directory](/directory) — a broader directory of local AI tools across platforms.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/univocal-review-hero-de.webp',
    title: 'Univocal Rezension: Vorlesen und Diktieren auf dem Mac',
    seoTitle: 'Univocal Rezension: Mac-App zum Vorlesen und Diktieren',
    intro: 'Univocal ist eine kostenpflichtige Mac-App, die mit einer Installation zwei Aufgaben erledigt: Sie liest markierten Text laut vor und tippt, was Sie diktieren, in die App, in der gerade der Cursor steht. Laut Hersteller laufen beide Funktionen auf Ihrem eigenen Apple-silicon-Mac. Diese Rezension fasst zusammen, was Website, Änderungsprotokoll und Datenschutzerklärung des Herstellers dokumentieren, was sie offenlassen und wie Univocal im Vergleich zu anderen Sprach-Werkzeugen im Verzeichnis abschneidet.',
    metaDescription: 'Univocal Rezension: Mac-App zum Vorlesen und Diktieren, laut Hersteller lokal. 39 $ einmalig nach 14 Tagen Test. Nur Apple Silicon. Nicht getestet.',
    twitterDescription: 'Univocal Rezension: eine Mac-App zum Vorlesen und Diktieren, laut Hersteller auf dem eigenen Mac verarbeitet. Preis, Datenschutz, Grenzen und Alternativen.',
    audience: 'Mac-Nutzer, die Text-to-Speech und Diktat in einer App ohne Cloud-Dienst und ohne Abo möchten — behandelt Preis, Installation, Datenschutz, Grenzen und Alternativen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Univocal review',
    targetKeywords: [
      'univocal rezension',
      'univocal mac app',
      'vorlesen und diktieren mac',
      'lokales text-to-speech mac',
      'offline diktat mac apple silicon',
      'private spracherkennung mac',
      'text-to-speech und spracherkennung in einer app',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
    ],
    leadAnswerBlock: '**Univocal ist eine Mac-App ohne veröffentlichten Quellcode, die markierten Text laut vorliest und Ihr Diktat tippt; laut Hersteller laufen beide Funktionen auf Ihrem eigenen Apple-silicon-Mac, ohne dass etwas irgendwohin gesendet wird.** Sie kostet nach 14 Tagen kostenloser Testphase einmalig 39 $, ohne Abo. Die neueste Version ist 0.3.33 vom 11. November 2026. Diese Rezension stützt sich auf Website, Änderungsprotokoll und Datenschutzerklärung des Herstellers, nicht auf einen eigenen Praxistest.',
    quickAnswerTop: {
      de: {
        question: 'Ist Univocal eine lokale App zum Vorlesen und Diktieren?',
        answer: 'Laut Hersteller ja: Beide Richtungen laufen auf Ihrem Mac, und nichts, was Sie diktieren oder vorlesen lassen, wird irgendwohin gesendet. Beim ersten Start werden dennoch etwa 1,2 GB Sprachsoftware und Modelle heruntergeladen, und Lizenz- und Update-Prüfungen nutzen das Internet. Der Code ist nicht veröffentlicht, und PromptQuorum hat den Netzwerkverkehr nicht untersucht; die Aussage stammt also vom Hersteller selbst.',
        bullets: [
          'Text markieren und Option-Shift-R drücken, um ihn vorlesen zu lassen; zum Diktieren die rechte Option-Taste gedrückt halten. Beide Kürzel lassen sich ändern.',
          'Preise: einmalig 39 $, eine Lizenz für bis zu drei Macs, 14 Tage Testphase ohne Karte und ohne Konto sowie 30 Tage Rückgaberecht.',
          'Die Website nennt die Kokoro-Stimmen und unter macOS 26 Apples Spracherkennung auf dem Gerät für die Live-Eingabe, aber nicht das Diktiermodell.',
          'Nur Apple-silicon-Macs mit macOS 14 oder neuer; keine Version für Intel, Windows, iPhone oder Android.',
          'Univocal Connect lässt andere lokale Apps Text zum Vorlesen senden; ein Obsidian-Plugin und eine Browser-Erweiterung für Chromium sind aufgeführt.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Univocal herunterladen', anchor: 'get-it' },
      { label: 'Univocal im Überblick', anchor: 'at-a-glance' },
      { label: 'Was Univocal ist', anchor: 'what-is-univocal' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Modelle und Hardware', anchor: 'models-hardware' },
      { label: 'Datenschutz, Lizenz und Kosten', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile und Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Univocal im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen Univocal geeignet ist', anchor: 'who-should-use' },
      { label: 'Für wen Univocal nicht geeignet ist', anchor: 'who-should-not-use' },
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
            text: 'Univocal ist eine kostenpflichtige Mac-App, die Text-to-Speech und Diktat verbindet und beides laut Hersteller auf Ihrem eigenen Mac statt in einem Cloud-Dienst verarbeitet.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich zwei Tasten auf Ihrer Tastatur vor: Die eine lässt den Mac vorlesen, was Sie markiert haben, die andere macht aus dem, was Sie sagen, getippten Text, und laut Hersteller sendet keine von beiden Ihre Stimme oder Ihren Text weg.',
          },
        ],
        items: [
          'Lokale Aussage: Beide Richtungen laufen auf dem Mac; der Download beim ersten Start, Lizenzprüfungen und tägliche Update-Prüfungen nutzen weiterhin das Internet.',
          'Lizenz und Hersteller: proprietär, veröffentlicht von NarNar Labs LLC; es wurde kein Quellcode-Repository gefunden, und das Land des Herstellers wird nicht genannt.',
          'Preis: einmalig 39 $ mit 14 Tagen Testphase; der Hersteller nennt außerdem zeitlich befristete Rabattcodes.',
          'Pflege: Version 0.3.33 erschien am 11. November 2026, das Projekt wird also aktiv aktualisiert.',
          'Lücken: nur Apple Silicon und macOS 14 oder neuer, kein genanntes Diktiermodell, und auf den Seiten steht nichts zur Code-Signierung.',
        ],
      },
      getItUnivocal: {
        id: 'get-it',
        title: 'Univocal herunterladen',
        content: [
          '**Univocal wird wie jede Mac-App installiert, ein Terminal ist nicht nötig.** Der offizielle Download-Link liefert ein Disk-Image, und die Sprachmodelle werden beim ersten Start nachgeladen.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            Plattform: 'Mac',
            Bezugsquelle: '[Download für Mac](https://univocalapp.com/download) — .dmg, Apple Silicon, macOS 14 oder neuer',
          },
          {
            Plattform: 'Kostenlose Testphase (14 Tage)',
            Bezugsquelle: '[Kaufseite](https://univocalapp.com/purchase/) — volles Produkt, keine Karte, kein Konto',
          },
          {
            Plattform: 'Einrichtungsanleitung',
            Bezugsquelle: '[Download und erster Start](https://univocalapp.com/downloading/)',
          },
          {
            Plattform: 'Versionshinweise',
            Bezugsquelle: '[Änderungsprotokoll](https://univocalapp.com/changelog/)',
          },
          {
            Plattform: 'Website',
            Bezugsquelle: '[univocalapp.com](https://univocalapp.com/)',
          },
          {
            Plattform: 'Datenschutzerklärung',
            Bezugsquelle: '[Datenschutzerklärung von Univocal](https://univocalapp.com/privacy/)',
          },
          {
            Plattform: 'Quellcode',
            Bezugsquelle: 'Kein Quellcode-Repository gefunden',
          },
        ],
        note: 'Die Website nennt nur einen Mac-Build. Windows, iOS und Android erscheinen lediglich als Benachrichtigungsformular, und Intel-Macs werden nicht unterstützt.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Univocal im Überblick',
        columns: ['Merkmal', 'Univocal'],
        rows: [
          { Merkmal: 'Plattform', Univocal: 'macOS 14+, nur Apple Silicon' },
          { Merkmal: 'Preis', Univocal: 'Einmalig 39 $; 14 Tage Testphase' },
          { Merkmal: 'Lizenz', Univocal: 'Proprietär; kein Quellcode gefunden' },
          { Merkmal: 'Ausführung', Univocal: 'Auf Ihrem Mac; Internet für Downloads und Prüfungen' },
          { Merkmal: 'Sprachen', Univocal: '32 für Diktat und Vorlesen (Startseite)' },
          { Merkmal: 'Echtzeit-Transkription', Univocal: 'Live-Eingabe beim Sprechen (Änderungsprotokoll 0.3.17)' },
          { Merkmal: 'Stimmklonen', Univocal: 'Nicht angegeben' },
          { Merkmal: 'Sprecherzuordnung', Univocal: 'Nicht angegeben' },
          { Merkmal: 'Lokaler API-Server', Univocal: 'Nicht angegeben; Univocal Connect für lokale Apps' },
        ],
        note: 'Die Merkmale folgen den Vergleichen für Spracherkennung und Text-to-Speech im Local LLM Software Directory. Eine fehlende Angabe auf der Website bedeutet unbekannt, nicht nicht unterstützt.',
      },
      whatIsUnivocal: {
        id: 'what-is-univocal',
        title: 'Was Univocal ist',
        content: [
          '**Univocal ist ein Sprach-Werkzeug mit zwei Funktionen: Vorlesen und Diktat.** Sie markieren Text und drücken ein Kürzel, um ihn zu hören, oder halten eine Taste gedrückt, sprechen und lassen los, damit der Text am Cursor getippt wird, zum Beispiel in einem Mailprogramm, einer Notiz oder einem Chat.',
          'Veröffentlicht wird die App von NarNar Labs LLC. Die Seiten des Herstellers nennen weder einen Gründer noch ein Land oder eine Postanschrift, nur eine Support-E-Mail-Adresse. Diese Rezension behandelt die unter Quellen aufgeführten Seiten und umfasste keinen eigenen Praxistest; Stimmqualität, Genauigkeit und Geschwindigkeit werden hier daher nicht bewertet.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus Installation, Download beim ersten Start und zwei Kürzeln.** Die Schritte folgen der Einrichtungsseite und dem Änderungsprotokoll des Herstellers.',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Öffnen Sie die heruntergeladene .dmg, ziehen Sie Univocal in den Ordner Programme und starten Sie die 14-tägige Testphase; eine Karte oder ein Konto ist nicht nötig.',
          },
          {
            title: 'Den ersten Start abschließen lassen',
            whyItMatters: 'Die App lädt etwa 1,2 GB Sprachsoftware und Modelle herunter. Version 0.3.11 brachte die Möglichkeit, die App schon zu nutzen, bevor der Download abgeschlossen ist.',
          },
          {
            title: 'macOS-Berechtigungen erteilen',
            whyItMatters: 'Das Diktat braucht laut Hersteller die Berechtigungen Mikrofon und Bedienungshilfen, und das Vorlesen markierten Textes braucht die Berechtigung Bedienungshilfen.',
          },
          {
            title: 'Vorlesen und diktieren',
            whyItMatters: 'Markieren Sie Text und drücken Sie Option-Shift-R, um ihn zu hören, oder halten Sie die rechte Option-Taste gedrückt und sprechen Sie. Beide Voreinstellungen lassen sich ändern.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Der Funktionsumfang konzentriert sich auf privates Vorlesen und Diktieren in jeder Mac-App.** Alles Folgende stammt von der Website, der Datenschutzerklärung und dem Änderungsprotokoll.',
        ],
        items: [
          '**Vorlesen.** Markierter Text wird mit Wort-für-Wort-Hervorhebung vorgelesen; ist nichts markiert, wird der zuletzt kopierte Text gelesen. Die Geschwindigkeit reicht seit Version 0.3.16 bis 4x.',
          '**Diktat.** Der Text landet am Cursor, wobei Zeichensetzung, Groß- und Kleinschreibung und Absätze beim Sprechen abgeleitet werden; Live-Eingabe seit Version 0.3.17, bei Neuinstallationen seit Version 0.3.28 standardmäßig ausgeschaltet.',
          '**32 Sprachen.** Vorlesen und Diktat teilen sich die Sprachliste, und das Änderungsprotokoll beschreibt Diktat in gemischten Sprachen.',
          '**Univocal Connect.** Andere lokale Apps können Text zum Vorlesen senden; ein Obsidian-Plugin und eine Vorlese-Erweiterung für Chrome, Edge, Brave, Vivaldi und Arc sind aufgeführt.',
          '**Verlauf.** Die letzten 20 Diktate und die letzten 10 Vorlesevorgänge werden auf dem Mac gespeichert.',
          '**Oberflächensprachen.** Englisch, Koreanisch, Japanisch, vereinfachtes Chinesisch, Spanisch, Deutsch und Französisch.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelle und Hardware',
        content: [
          '**Der Hersteller nennt Kokoro für die Vorlesestimmen und Apples SpeechAnalyzer für einen Live-Entwurf unter macOS 26, nennt sein Diktiermodell aber nicht.** Laut Datenschutzerklärung stammt die Sprachsoftware von PyPI und stammen die Modelle von Hugging Face, insgesamt etwa 1,2 GB, und eine lokale Engine lauscht auf dem Mac unter 127.0.0.1:8787. Whisper und Parakeet werden auf keiner der gelesenen Seiten erwähnt.',
          'Voraussetzungen sind ein Apple-silicon-Mac und macOS 14 oder neuer. Für einige Vorlesesprachen, darunter Koreanisch und Deutsch, werden bei der ersten Nutzung etwa 400 MB zusätzlich geladen. Weder eine RAM-Angabe noch Geschwindigkeits- oder Genauigkeitswerte werden veröffentlicht.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz, Lizenz und Kosten',
        content: [
          '**Die Datenschutzerklärung sagt, nichts, was Sie diktieren oder vorlesen lassen, werde irgendwohin gesendet, und die App habe kein Konto, keine Analyse und keine Absturzberichte.** Das Internet ist dennoch an anderer Stelle beteiligt: Downloads von PyPI, Hugging Face und, falls der Mac kein Python hat, von GitHub; eine Lizenzprüfung bei Lemon Squeezy, die den Lizenzschlüssel und den Namen des Macs sendet; und eine tägliche Update-Prüfung bei der Website des Herstellers. Fehlerberichte werden nur gesendet, wenn Sie auf „Bericht senden“ klicken. Die Website nutzt im Unterschied zur App Cloudflare Web Analytics. Der Code ist nicht veröffentlicht, und PromptQuorum hat den Netzwerkverkehr nicht untersucht; diese Aussagen stammen also vom Hersteller selbst.',
          'Es ist ein kostenpflichtiges, proprietäres Produkt: einmalig 39 $, eine Lizenz für bis zu drei Macs, 14 Tage Testphase und 30 Tage Rückgaberecht. Die Kaufseite nennt außerdem einen Einführungscode und einen Black-Friday-Code, beide bis zum 30. November 2026 gültig; prüfen Sie auf der Seite den Preis zum Zeitpunkt Ihres Kaufs. Die Vergleiche mit anderen Apps auf der eigenen Website des Herstellers sind Aussagen des Herstellers und wurden hier nicht überprüft.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile und Einschränkungen',
        columns: ['Vorteil', 'Was das im Alltag bedeutet', 'Einschränkung / Hinweis'],
        rows: [
          {
            Vorteil: 'Vorlesen und Diktat in einer App',
            'Was das im Alltag bedeutet': 'Eine Installation, eine Lizenz und ein Verlauf statt zwei Werkzeugen.',
            'Einschränkung / Hinweis': 'Nur Mac; keine Version für Intel, Windows oder Mobilgeräte.',
          },
          {
            Vorteil: 'Verarbeitung auf Ihrem Mac',
            'Was das im Alltag bedeutet': 'Sprache und Text bleiben laut Hersteller auf dem Rechner.',
            'Einschränkung / Hinweis': 'Code nicht offen, die Aussage lässt sich also nicht prüfen; der erste Start braucht etwa 1,2 GB an Downloads.',
          },
          {
            Vorteil: 'Einmaliger Preis',
            'Was das im Alltag bedeutet': 'Einmalig 39 $, bis zu drei Macs, kein Abo.',
            'Einschränkung / Hinweis': 'Rabattcodes laufen bis zum 30. November 2026; danach nennt die Startseite 39 $.',
          },
          {
            Vorteil: '32 Sprachen',
            'Was das im Alltag bedeutet': 'Vorlesen und Diktieren in vielen Sprachen, einschließlich Diktat in gemischten Sprachen.',
            'Einschränkung / Hinweis': 'Keine Qualitätsdaten je Sprache; das Diktiermodell wird nicht genannt.',
          },
          {
            Vorteil: 'Anbindung an andere Apps',
            'Was das im Alltag bedeutet': 'Obsidian und eine Browser-Erweiterung können Text zum Vorlesen senden.',
            'Einschränkung / Hinweis': 'Laut der Datenschutzseite läuft die Erweiterung auf allen Webseiten; lesen Sie zuerst ihre Berechtigungen.',
          },
          {
            Vorteil: 'Häufige Releases',
            'Was das im Alltag bedeutet': 'Version 0.3.33 erschien am 11. November 2026.',
            'Einschränkung / Hinweis': 'Version 0.x; der früheste Eintrag im Änderungsprotokoll ist 0.3.0 vom 29. Juli 2026, die App wirkt also jung.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Univocal im Vergleich zu Alternativen',
        content: [
          'Das sind die ähnlichsten Sprach-Werkzeuge im Verzeichnis: eine kostenlose Vorlese-App, ein kostenloses Studio, das beide Aufgaben erledigt, und drei Diktier-Apps für den Mac.',
        ],
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Rolle', 'Wichtigster Unterschied'],
        rows: [
          {
            App: 'Univocal',
            Plattformen: 'Mac',
            'Preis und Lizenz': 'Einmalig 39 $, proprietär',
            Rolle: 'Vorlesen und Diktat',
            'Wichtigster Unterschied': 'Beide Aufgaben in einer kostenpflichtigen Mac-App',
          },
          {
            App: '[Parrot](/de/power-local-llm/parrot-review)',
            Plattformen: 'Mac, Windows, Linux',
            'Preis und Lizenz': 'Kostenlos, MIT',
            Rolle: 'Nur Vorlesen',
            'Wichtigster Unterschied': 'Kostenlos und quelloffen; kein Diktat',
          },
          {
            App: '[Voicebox](/de/power-local-llm/voicebox-review)',
            Plattformen: 'Mac, Windows, Linux',
            'Preis und Lizenz': 'Kostenlos, MIT',
            Rolle: 'Sprachstudio mit Diktat',
            'Wichtigster Unterschied': 'Zusätzlich Stimmklonen und ein MCP-Server',
          },
          {
            App: '[Weesper Neon Flow](/de/power-local-llm/weesper-neon-flow-review)',
            Plattformen: 'Mac, Windows',
            'Preis und Lizenz': 'Testphase, dann 5 €/Monat oder 99 € einmalig',
            Rolle: 'Diktat per Tastenkürzel',
            'Wichtigster Unterschied': 'Whisper auf dem Gerät; zusätzlich Windows, kein Vorlesen',
          },
          {
            App: '[Sprich](/de/power-local-llm/sprich-review)',
            Plattformen: 'Mac',
            'Preis und Lizenz': 'Freemium, proprietär',
            Rolle: 'Diktat für den Mac',
            'Wichtigster Unterschied': 'Auf Deutsch ausgerichtet, mit Gratis-Tarif; kein Vorlesen',
          },
          {
            App: '[MacWhisper](/de/power-local-llm/macwhisper-review)',
            Plattformen: 'Mac',
            'Preis und Lizenz': 'Freemium, proprietär',
            Rolle: 'Mac-Transkriptions-App',
            'Wichtigster Unterschied': 'Zuerst für Dateien und Meetings gedacht',
          },
        ],
        note: 'Angaben zu Plattformen, Preisen und Funktionen von Drittanbieter-Apps ändern sich häufig. Prüfen Sie die aktuellen Details auf der Seite des jeweiligen Projekts, bevor Sie entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen Univocal geeignet ist',
        items: [
          '**Mac-Nutzer, die zuhören und diktieren.** Vorlesen und Diktat teilen sich eine App und eine Lizenz.',
          '**Menschen, die Cloud-Sprachdienste meiden.** Beide Funktionen laufen laut Hersteller auf dem Mac.',
          '**Mehrsprachige Nutzer.** 32 Sprachen für Vorlesen und Diktat.',
          '**Käufer, die lieber einmal zahlen.** Ein Abo wird nicht angeboten.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen Univocal nicht geeignet ist',
        items: [
          '**Nutzer von Intel-Macs, Windows, iPhone und Android.** Es gibt nur einen Build für Apple-silicon-Macs.',
          '**Alle, die prüfbare Software brauchen.** Es wurde kein Quellcode gefunden, und die Datenschutzaussagen lassen sich nicht einsehen.',
          '**Alle, die kostenlose Software wollen.** Nach der Testphase ist sie kostenpflichtig; Parrot ist zum Vorlesen kostenlos und Voicebox für beides.',
          '**Alle, die völlig ohne Internet arbeiten müssen.** Der erste Start braucht etwa 1,2 GB an Downloads.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Funktioniert Univocal offline?',
            a: 'Laut Kaufseite funktioniert das Diktat nach dem Download beim ersten Start offline. Die Datenschutzerklärung beschreibt die Lizenzprüfung als „fail open“, sie sollte die Nutzung offline also nicht blockieren. PromptQuorum hat es nicht offline getestet.',
          },
          {
            q: 'Wird meine Stimme in die Cloud gesendet?',
            a: 'Laut Datenschutzerklärung wird nichts, was Sie diktieren oder vorlesen lassen, irgendwohin gesendet. Unter macOS 26 nutzt die Live-Eingabe zusätzlich Apples Spracherkennung auf dem Gerät. Der Code ist nicht veröffentlicht, und PromptQuorum hat den Netzwerkverkehr nicht untersucht.',
          },
          {
            q: 'Welches Sprachmodell nutzt Univocal?',
            a: 'Die Seiten nennen Kokoro-Stimmen zum Vorlesen und Apple-Stimmen unter älteren macOS-Versionen, aber nicht das Diktiermodell. Whisper und Parakeet werden nicht erwähnt.',
          },
          {
            q: 'Kann ich eine Lizenz auf mehreren Macs nutzen?',
            a: 'Ja, auf bis zu drei; laut Kaufseite lässt sich ein Mac in den Einstellungen von der Lizenz entfernen.',
          },
          {
            q: 'Wer entwickelt Univocal?',
            a: 'NarNar Labs LLC. Die Seiten nennen weder das Land noch einen Gründer.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'Univocal passt, wenn Sie einen Apple-silicon-Mac haben, Text-to-Speech und Diktat in einer App möchten, in der laut Hersteller alles auf Ihrem eigenen Computer läuft, und bereit sind, einmalig für Software ohne veröffentlichten Quellcode zu zahlen. Es gibt eine 14-tägige Testphase, einen einmaligen Preis und ein sehr aktuelles Release.',
          'Die Einschränkungen betreffen Umfang und Überprüfbarkeit: keine Version für Intel, Windows oder Mobilgeräte, kein veröffentlichter Code, ein nicht genanntes Diktiermodell und Datenschutzaussagen, die PromptQuorum nicht prüfen konnte. Nutzen Sie die Testphase vor dem Kauf.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von Univocal](https://univocalapp.com/) — Funktionen, Sprachen und Voraussetzungen.',
          '[Download und erster Start](https://univocalapp.com/downloading/) — Name der Installationsdatei und Einrichtung.',
          '[Kaufseite](https://univocalapp.com/purchase/) — Preis, Testphase, Lizenz- und Rückgabebedingungen.',
          '[Änderungsprotokoll](https://univocalapp.com/changelog/) — Versionsverlauf; Version 0.3.33 vom 11. November 2026.',
          '[Datenschutzerklärung](https://univocalapp.com/privacy/) — Umgang mit Daten und Netzwerk-Hosts.',
          '[Seite mit Alternativen](https://univocalapp.com/alternatives/) — Kürzel, Berechtigungen und die eigenen Vergleiche des Herstellers.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokale Sprach- und Audio-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — Text-to-Speech, Spracherkennung und Sprachassistenten nebeneinander.',
          '[Parrot Rezension](/de/power-local-llm/parrot-review) — eine kostenlose Offline-Vorlese-App für drei Desktop-Systeme.',
          '[Voicebox Rezension](/de/power-local-llm/voicebox-review) — ein kostenloses Sprachstudio mit Diktat und Stimmklonen.',
          '[Weesper Neon Flow Rezension](/de/power-local-llm/weesper-neon-flow-review) — kostenpflichtiges Offline-Diktat für Mac und Windows.',
          '[Das beste lokale Text-to-Speech auf dem Mac](/de/power-local-llm/best-local-tts-mac) — Vorlese-Optionen für Apple Silicon.',
          '[Das vollständige Local LLM Software Directory](/de/directory) — ein breiteres Verzeichnis lokaler KI-Werkzeuge über Plattformen hinweg.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/univocal-review-hero-fr.webp',
    title: "Test d'Univocal : lecture à voix haute et dictée sur Mac",
    seoTitle: "Test d'Univocal : lecture à voix haute et dictée Mac",
    intro: "Univocal est une application Mac payante qui remplit deux fonctions avec une seule installation : elle lit à voix haute le texte sélectionné et saisit ce que vous dictez dans l'application où se trouve le curseur. Selon son éditeur, les deux fonctions s'exécutent sur votre propre Mac Apple silicon. Ce test résume ce que documentent le site de l'éditeur, son journal des modifications et sa politique de confidentialité, ce qu'ils omettent, et comment Univocal se compare aux autres outils vocaux du répertoire.",
    metaDescription: "Test d'Univocal : lecture à voix haute et dictée sur Mac, exécutées sur votre Mac selon l'éditeur. 39 $ une fois après 14 jours d'essai. Non testée.",
    twitterDescription: "Test d'Univocal : une seule application Mac pour lire du texte à voix haute et dicter, traitée sur votre propre Mac selon l'éditeur. Prix, confidentialité, limites et alternatives.",
    audience: "Utilisateurs de Mac qui veulent la synthèse vocale et la dictée dans une seule application, sans service cloud ni abonnement — couvre le prix, l'installation, la confidentialité, les limites et les alternatives.",
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Univocal review',
    targetKeywords: [
      'test univocal',
      'application mac univocal',
      'lecture à voix haute et dictée mac',
      'synthèse vocale locale mac',
      'dictée hors ligne mac apple silicon',
      'reconnaissance vocale privée mac',
      'synthèse vocale et dictée dans une seule application',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
    ],
    leadAnswerBlock: "**Univocal est une application Mac dont le code source n'est pas publié et qui lit à voix haute le texte sélectionné et saisit votre dictée ; selon son éditeur, les deux fonctions s'exécutent sur votre propre Mac Apple silicon, sans rien envoyer ailleurs.** Elle coûte 39 $ en achat unique après un essai gratuit de 14 jours, sans abonnement. La version la plus récente est la 0.3.33, du 11 novembre 2026. Ce test s'appuie sur le site public de l'éditeur, son journal des modifications et sa politique de confidentialité, pas sur un essai pratique.",
    quickAnswerTop: {
      fr: {
        question: "Univocal est-elle une application locale de lecture à voix haute et de dictée ?",
        answer: "Selon son éditeur, oui : les deux sens s'exécutent sur votre Mac, et rien de ce que vous dictez ou lisez n'est envoyé ailleurs. Le premier lancement télécharge tout de même environ 1,2 Go de logiciels et de modèles vocaux, et les vérifications de licence et de mise à jour utilisent Internet. Le code n'est pas publié et PromptQuorum n'a pas inspecté le trafic réseau : l'affirmation est celle de l'éditeur.",
        bullets: [
          "Sélectionnez du texte et appuyez sur Option-Shift-R pour l'entendre ; maintenez la touche Option droite pour dicter. Les deux raccourcis sont modifiables.",
          "Tarifs : 39 $ une fois, une licence pour jusqu'à trois Mac, un essai de 14 jours sans carte ni compte, et un remboursement sous 30 jours.",
          "Le site cite les voix Kokoro et, sous macOS 26, la reconnaissance vocale sur l'appareil d'Apple pour la saisie en direct, mais pas le modèle de dictée.",
          "Mac Apple silicon avec macOS 14 ou ultérieur uniquement ; pas de version Intel, Windows, iPhone ni Android.",
          "Univocal Connect permet à d'autres applications locales d'envoyer du texte à lire ; un plugin Obsidian et une extension pour navigateurs Chromium sont mentionnés.",
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir Univocal', anchor: 'get-it' },
      { label: "Univocal en un coup d'œil", anchor: 'at-a-glance' },
      { label: "Ce qu'est Univocal", anchor: 'what-is-univocal' },
      { label: 'Premiers pas', anchor: 'how-to-get-started' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Modèles et matériel', anchor: 'models-hardware' },
      { label: 'Confidentialité, licence et coût', anchor: 'privacy' },
      { label: 'Compromis : avantages et limites', anchor: 'tradeoffs' },
      { label: 'Univocal face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Pour qui Univocal est adaptée', anchor: 'who-should-use' },
      { label: "Pour qui Univocal n'est pas adaptée", anchor: 'who-should-not-use' },
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
            text: "Univocal est une application Mac payante qui réunit la synthèse vocale et la dictée et, selon son éditeur, traite les deux sur votre propre Mac plutôt que dans un service cloud.",
          },
          {
            type: 'plain-terms',
            text: "Imaginez deux touches sur votre clavier : l'une fait lire au Mac ce que vous avez sélectionné, l'autre transforme ce que vous dites en texte saisi, et l'éditeur affirme qu'aucune n'envoie votre voix ou votre texte ailleurs.",
          },
        ],
        items: [
          "Affirmation locale : les deux sens s'exécutent sur le Mac ; le téléchargement du premier lancement, les vérifications de licence et les vérifications quotidiennes de mise à jour utilisent tout de même Internet.",
          "Licence et éditeur : propriétaire, publiée par NarNar Labs LLC ; aucun dépôt de code source n'a été trouvé et le pays de l'éditeur n'est pas indiqué.",
          "Prix : 39 $ une fois avec un essai de 14 jours ; l'éditeur mentionne aussi des codes de réduction limités dans le temps.",
          "Maintenance : la version 0.3.33 est sortie le 11 novembre 2026, le projet est donc mis à jour activement.",
          "Lacunes : Apple silicon et macOS 14 ou ultérieur uniquement, aucun modèle de dictée nommé, et rien dans les pages sur la signature du code.",
        ],
      },
      getItUnivocal: {
        id: 'get-it',
        title: 'Obtenir Univocal',
        content: [
          "**Univocal s'installe comme n'importe quelle application Mac, aucun terminal n'est nécessaire.** Le lien de téléchargement officiel fournit une image disque, et les modèles vocaux sont récupérés au premier lancement.",
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            Plateforme: 'Mac',
            'Où la trouver': '[Télécharger pour Mac](https://univocalapp.com/download) — .dmg, Apple silicon, macOS 14 ou ultérieur',
          },
          {
            Plateforme: 'Essai gratuit (14 jours)',
            'Où la trouver': '[Page d\'achat](https://univocalapp.com/purchase/) — produit complet, sans carte bancaire, sans compte',
          },
          {
            Plateforme: "Guide d'installation",
            'Où la trouver': '[Téléchargement et premier lancement](https://univocalapp.com/downloading/)',
          },
          {
            Plateforme: 'Notes de version',
            'Où la trouver': '[Journal des modifications](https://univocalapp.com/changelog/)',
          },
          {
            Plateforme: 'Site web',
            'Où la trouver': '[univocalapp.com](https://univocalapp.com/)',
          },
          {
            Plateforme: 'Politique de confidentialité',
            'Où la trouver': '[Politique de confidentialité d\'Univocal](https://univocalapp.com/privacy/)',
          },
          {
            Plateforme: 'Code source',
            'Où la trouver': 'Aucun dépôt de code source trouvé',
          },
        ],
        note: "Le site ne propose qu'une version Mac. Windows, iOS et Android n'apparaissent que dans un formulaire de notification, et les Mac Intel ne sont pas pris en charge.",
      },
      atAGlance: {
        id: 'at-a-glance',
        title: "Univocal en un coup d'œil",
        columns: ['Attribut', 'Univocal'],
        rows: [
          { Attribut: 'Plateforme', Univocal: 'macOS 14+, Apple silicon uniquement' },
          { Attribut: 'Prix', Univocal: '39 $ une fois ; essai de 14 jours' },
          { Attribut: 'Licence', Univocal: 'Propriétaire ; aucun code source trouvé' },
          { Attribut: 'Exécution', Univocal: 'Sur votre Mac ; Internet pour les téléchargements et les vérifications' },
          { Attribut: 'Langues', Univocal: '32 pour la dictée et la lecture (page d\'accueil)' },
          { Attribut: 'Transcription en temps réel', Univocal: 'Saisie en direct pendant que vous parlez (journal 0.3.17)' },
          { Attribut: 'Clonage de voix', Univocal: 'Non précisé' },
          { Attribut: 'Étiquettes de locuteurs', Univocal: 'Non précisé' },
          { Attribut: 'Serveur API local', Univocal: 'Non précisé ; Univocal Connect pour les applications locales' },
        ],
        note: "Les attributs suivent les comparaisons de reconnaissance vocale et de synthèse vocale utilisées dans le Répertoire des logiciels de LLM locaux. Une absence de mention sur le site signifie « inconnu », pas « non pris en charge ».",
      },
      whatIsUnivocal: {
        id: 'what-is-univocal',
        title: "Ce qu'est Univocal",
        content: [
          "**Univocal est un utilitaire vocal à deux fonctions : la lecture à voix haute et la dictée.** Vous sélectionnez du texte et appuyez sur un raccourci pour l'entendre, ou vous maintenez une touche, parlez et relâchez pour que le texte soit saisi au curseur, par exemple dans un client de messagerie, une note ou une discussion.",
          "Elle est publiée par NarNar Labs LLC. Les pages de l'éditeur ne nomment ni fondateur, ni pays, ni adresse postale, seulement une adresse e-mail d'assistance. Ce test couvre les pages citées dans les Sources et n'a donné lieu à aucun essai pratique : la qualité des voix, la précision et la vitesse ne sont donc pas évaluées ici.",
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Premiers pas',
        content: [
          "**La mise en route tient en une installation, un téléchargement au premier lancement et deux raccourcis.** Les étapes suivent la page d'installation et le journal des modifications de l'éditeur.",
        ],
        numberedItems: [
          {
            title: "Installer l'application",
            whyItMatters: "Ouvrez le .dmg téléchargé, déplacez Univocal dans Applications et lancez l'essai de 14 jours ; ni carte bancaire ni compte ne sont nécessaires.",
          },
          {
            title: 'Laisser le premier lancement se terminer',
            whyItMatters: "L'application télécharge environ 1,2 Go de logiciels et de modèles vocaux. La version 0.3.11 a ajouté la possibilité de commencer à l'utiliser avant la fin du téléchargement.",
          },
          {
            title: 'Accorder les autorisations macOS',
            whyItMatters: "La dictée exige l'autorisation Microphone et l'autorisation Accessibilité, et la lecture du texte sélectionné exige l'autorisation Accessibilité, selon l'éditeur.",
          },
          {
            title: 'Lire et dicter',
            whyItMatters: "Sélectionnez du texte et appuyez sur Option-Shift-R pour l'entendre, ou maintenez la touche Option droite et parlez. Les deux raccourcis par défaut sont modifiables.",
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          "**L'ensemble des fonctions est centré sur la lecture et la dictée privées dans n'importe quelle application Mac.** Tout ce qui suit provient du site, de la page de confidentialité et du journal des modifications.",
        ],
        items: [
          "**Lecture à voix haute.** Le texte sélectionné est lu avec une mise en évidence mot à mot ; sans sélection, l'application lit le dernier texte copié. La vitesse monte jusqu'à 4x depuis la version 0.3.16.",
          "**Dictée.** Le texte arrive au curseur, avec ponctuation, majuscules et sauts de paragraphe déduits pendant que vous parlez ; saisie en direct depuis la version 0.3.17, désactivée par défaut pour les nouvelles installations depuis la version 0.3.28.",
          "**32 langues.** La lecture et la dictée partagent la même liste de langues, et le journal des modifications décrit une dictée en plusieurs langues mélangées.",
          "**Univocal Connect.** D'autres applications locales peuvent envoyer du texte à lire ; un plugin Obsidian et une extension de lecture à voix haute pour Chrome, Edge, Brave, Vivaldi et Arc sont mentionnés.",
          "**Historique.** Les 20 dernières dictées et les 10 dernières lectures sont conservées sur le Mac.",
          "**Langues de l'interface.** Anglais, coréen, japonais, chinois simplifié, espagnol, allemand et français.",
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modèles et matériel',
        content: [
          "**L'éditeur cite Kokoro pour les voix de lecture et SpeechAnalyzer d'Apple pour un brouillon en direct sous macOS 26, mais ne nomme pas son modèle de dictée.** La page de confidentialité indique que les logiciels vocaux proviennent de PyPI et les modèles de Hugging Face, pour environ 1,2 Go au total, et qu'un moteur local écoute sur le Mac à l'adresse 127.0.0.1:8787. Whisper et Parakeet ne sont mentionnés sur aucune des pages lues.",
          "La configuration requise est un Mac Apple silicon et macOS 14 ou ultérieur. Certaines langues de lecture, dont le coréen et l'allemand, téléchargent environ 400 Mo de plus à la première utilisation. Aucune valeur de RAM et aucune mesure de vitesse ou de précision ne sont publiées.",
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité, licence et coût',
        content: [
          "**La page de confidentialité indique que rien de ce que vous dictez ou lisez n'est envoyé ailleurs, et que l'application n'a ni compte, ni analyse d'usage, ni rapport de plantage.** Internet intervient tout de même ailleurs : téléchargements depuis PyPI, Hugging Face et, si le Mac n'a pas Python, GitHub ; une vérification de licence auprès de Lemon Squeezy qui envoie la clé de licence et le nom du Mac ; et une vérification quotidienne de mise à jour auprès du site de l'éditeur. Les rapports de problème ne sont envoyés que lorsque vous appuyez sur Envoyer le rapport. Le site web, contrairement à l'application, utilise Cloudflare Web Analytics. Le code n'est pas publié et PromptQuorum n'a pas examiné le trafic réseau : ces déclarations sont celles de l'éditeur.",
          "C'est un produit payant et propriétaire : 39 $ une fois, une licence pour jusqu'à trois Mac, un essai de 14 jours et un remboursement sous 30 jours. La page d'achat mentionne aussi un code de lancement et un code Black Friday, tous deux valables jusqu'au 30 novembre 2026 ; consultez la page pour connaître le prix au moment de l'achat. Les comparaisons de l'éditeur avec d'autres applications sur son propre site sont des affirmations de l'éditeur et n'ont pas été vérifiées ici.",
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: ['Avantage', "Ce que cela donne à l'usage", 'Limite / réserve'],
        rows: [
          {
            Avantage: 'Lecture et dictée dans une seule application',
            "Ce que cela donne à l'usage": 'Une installation, une licence et un historique au lieu de deux outils.',
            'Limite / réserve': 'Mac uniquement ; pas de version Intel, Windows ni mobile.',
          },
          {
            Avantage: 'Traitement sur votre Mac',
            "Ce que cela donne à l'usage": "La voix et le texte restent sur la machine, selon l'éditeur.",
            'Limite / réserve': "Code fermé, l'affirmation ne peut pas être vérifiée ; le premier lancement exige environ 1,2 Go de téléchargements.",
          },
          {
            Avantage: 'Prix unique',
            "Ce que cela donne à l'usage": '39 $ une fois, jusqu\'à trois Mac, sans abonnement.',
            'Limite / réserve': "Les codes de réduction courent jusqu'au 30 novembre 2026, après quoi la page d'accueil indique 39 $.",
          },
          {
            Avantage: '32 langues',
            "Ce que cela donne à l'usage": 'Lire et dicter dans de nombreuses langues, y compris une dictée en langues mélangées.',
            'Limite / réserve': "Aucune donnée de qualité par langue ; le modèle de dictée n'est pas nommé.",
          },
          {
            Avantage: "Connexions à d'autres applications",
            "Ce que cela donne à l'usage": 'Obsidian et une extension de navigateur peuvent envoyer du texte à lire.',
            'Limite / réserve': "D'après la page de confidentialité, l'extension s'exécute sur toutes les pages web ; lisez d'abord ses autorisations.",
          },
          {
            Avantage: 'Versions fréquentes',
            "Ce que cela donne à l'usage": 'La version 0.3.33 est sortie le 11 novembre 2026.',
            'Limite / réserve': "Version 0.x ; la plus ancienne entrée du journal des modifications est la 0.3.0 du 29 juillet 2026, l'application semble donc jeune.",
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Univocal face aux alternatives',
        content: [
          "Voici les outils vocaux les plus proches du répertoire : une application de lecture à voix haute gratuite, un studio gratuit qui remplit les deux fonctions et trois applications de dictée pour Mac.",
        ],
        columns: ['Application', 'Plateformes', 'Prix et licence', 'Rôle', 'Différence clé'],
        rows: [
          {
            Application: 'Univocal',
            Plateformes: 'Mac',
            'Prix et licence': '39 $ une fois, propriétaire',
            Rôle: 'Lecture à voix haute et dictée',
            'Différence clé': 'Les deux fonctions dans une seule application Mac payante',
          },
          {
            Application: '[Parrot](/fr/power-local-llm/parrot-review)',
            Plateformes: 'Mac, Windows, Linux',
            'Prix et licence': 'Gratuit, MIT',
            Rôle: 'Lecture à voix haute uniquement',
            'Différence clé': 'Libre et gratuite ; pas de dictée',
          },
          {
            Application: '[Voicebox](/fr/power-local-llm/voicebox-review)',
            Plateformes: 'Mac, Windows, Linux',
            'Prix et licence': 'Gratuit, MIT',
            Rôle: 'Studio vocal avec dictée',
            'Différence clé': 'Ajoute le clonage de voix et un serveur MCP',
          },
          {
            Application: '[Weesper Neon Flow](/fr/power-local-llm/weesper-neon-flow-review)',
            Plateformes: 'Mac, Windows',
            'Prix et licence': 'Essai, puis 5 €/mois ou 99 € une fois',
            Rôle: 'Dictée par raccourci',
            'Différence clé': 'Whisper sur l\'appareil ; ajoute Windows, pas de lecture',
          },
          {
            Application: '[Sprich](/fr/power-local-llm/sprich-review)',
            Plateformes: 'Mac',
            'Prix et licence': 'Freemium, propriétaire',
            Rôle: 'Dictée sur Mac',
            'Différence clé': "Pensée d'abord pour l'allemand, avec offre gratuite ; pas de lecture",
          },
          {
            Application: '[MacWhisper](/fr/power-local-llm/macwhisper-review)',
            Plateformes: 'Mac',
            'Prix et licence': 'Freemium, propriétaire',
            Rôle: 'Application de transcription pour Mac',
            'Différence clé': "Conçue d'abord pour les fichiers et les réunions",
          },
        ],
        note: "Les plateformes, les prix et les fonctions des applications tierces changent fréquemment. Vérifiez les détails actuels sur la page de chaque projet avant de décider.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui Univocal est adaptée',
        items: [
          "**Utilisateurs de Mac qui écoutent et dictent.** La lecture et la dictée partagent une seule application et une seule licence.",
          "**Personnes qui évitent les services vocaux cloud.** Les deux fonctions s'exécutent sur le Mac, selon l'éditeur.",
          "**Utilisateurs multilingues.** 32 langues pour la lecture et la dictée.",
          "**Acheteurs qui préfèrent payer une seule fois.** Aucun abonnement n'est proposé.",
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: "Pour qui Univocal n'est pas adaptée",
        items: [
          "**Utilisateurs de Mac Intel, de Windows, d'iPhone et d'Android.** Seule une version pour Mac Apple silicon existe.",
          "**Quiconque a besoin d'un logiciel auditable.** Aucun code source n'a été trouvé et les affirmations de confidentialité ne peuvent pas être inspectées.",
          "**Quiconque veut un logiciel gratuit.** Après l'essai, elle est payante ; Parrot est gratuit pour la lecture et Voicebox est gratuit pour les deux.",
          "**Quiconque doit travailler sans aucune connexion Internet.** Le premier lancement exige environ 1,2 Go de téléchargements.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Univocal fonctionne-t-elle hors ligne ?',
            a: "La page d'achat indique que la dictée fonctionne hors ligne après le téléchargement du premier lancement. La page de confidentialité décrit la vérification de licence comme « fail open » (en cas d'échec, l'accès reste ouvert), elle ne devrait donc pas bloquer l'usage hors ligne. PromptQuorum ne l'a pas testée hors ligne.",
          },
          {
            q: 'Ma voix est-elle envoyée dans le cloud ?',
            a: "La page de confidentialité indique que rien de ce que vous dictez ou lisez n'est envoyé ailleurs. Sous macOS 26, la saisie en direct utilise aussi la reconnaissance vocale sur l'appareil d'Apple. Le code n'est pas publié et PromptQuorum n'a pas inspecté le trafic réseau.",
          },
          {
            q: "Quel modèle vocal Univocal utilise-t-elle ?",
            a: "Les pages citent les voix Kokoro pour la lecture et des voix Apple sur les anciennes versions de macOS, mais pas le modèle de dictée. Whisper et Parakeet ne sont pas mentionnés.",
          },
          {
            q: 'Puis-je utiliser une licence sur plusieurs Mac ?',
            a: "Oui, jusqu'à trois ; un Mac peut être retiré de la licence dans les Réglages, d'après la page d'achat.",
          },
          {
            q: 'Qui édite Univocal ?',
            a: "NarNar Labs LLC. Les pages n'indiquent ni son pays, ni un fondateur.",
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          "Univocal convient si vous avez un Mac Apple silicon, voulez la synthèse vocale et la dictée dans une seule application où, selon l'éditeur, tout s'exécute sur votre propre ordinateur, et acceptez de payer une fois pour un logiciel dont le code source n'est pas publié. Elle propose un essai de 14 jours, un prix unique et une version très récente.",
          "Les réserves tiennent à la portée et à la vérifiabilité : pas de version Intel, Windows ni mobile, pas de code publié, un modèle de dictée non nommé, et des affirmations de confidentialité que PromptQuorum n'a pas pu vérifier. Utilisez l'essai avant d'acheter.",
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          "[Site d'Univocal](https://univocalapp.com/) — fonctions, langues et configuration requise.",
          '[Téléchargement et premier lancement](https://univocalapp.com/downloading/) — nom du fichier d\'installation et mise en route.',
          "[Page d'achat](https://univocalapp.com/purchase/) — prix, essai, licence et conditions de remboursement.",
          '[Journal des modifications](https://univocalapp.com/changelog/) — historique des versions ; version 0.3.33 datée du 11 novembre 2026.',
          '[Politique de confidentialité](https://univocalapp.com/privacy/) — traitement des données et serveurs réseau.',
          "[Page des alternatives](https://univocalapp.com/alternatives/) — raccourcis, autorisations et comparaisons de l'éditeur lui-même.",
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Outils vocaux locaux comparés](/fr/power-local-llm/local-llm-voice-audio-compared) — synthèse vocale, reconnaissance vocale et agents vocaux côte à côte.',
          '[Test de Parrot](/fr/power-local-llm/parrot-review) — une application de lecture à voix haute hors ligne et gratuite pour trois systèmes de bureau.',
          '[Test de Voicebox](/fr/power-local-llm/voicebox-review) — un studio vocal gratuit avec dictée et clonage de voix.',
          '[Test de Weesper Neon Flow](/fr/power-local-llm/weesper-neon-flow-review) — dictée hors ligne payante pour Mac et Windows.',
          '[Meilleure synthèse vocale locale sur Mac](/fr/power-local-llm/best-local-tts-mac) — des options de lecture à voix haute pour Apple silicon.',
          "[Le répertoire complet des logiciels de LLM locaux](/fr/directory) — un répertoire plus large des outils d'IA locale, toutes plateformes.",
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/univocal-review-hero-ja.webp',
    title: 'Univocal レビュー：Macで使える読み上げ・音声入力アプリ',
    seoTitle: 'Univocal レビュー：Mac向け読み上げ・音声入力アプリ',
    intro: 'Univocalは、1回のインストールで2つの役割をこなす有料のMacアプリです。選択したテキストを読み上げ、話した内容をカーソルのあるアプリに入力します。開発元によると、どちらもお使いのApple Silicon搭載Mac上で動作します。このレビューでは、開発元の公式サイト、変更履歴、プライバシーポリシーに記載されている点、記載がない点、ディレクトリ内の他の音声ツールとの比較をまとめます。',
    metaDescription: 'Univocalのレビュー：開発元によるとMac上で動く読み上げ・音声入力アプリ。14日間の体験後は$39の買い切り。Apple Silicon専用。実機検証なし。',
    twitterDescription: 'Univocalのレビュー：開発元によるとMac上で処理される、読み上げと音声入力を1つにまとめたMacアプリ。価格、プライバシー、制限、代替ツールを解説します。',
    audience: 'クラウドサービスやサブスクリプションなしで、読み上げと音声入力を1つのアプリで使いたいMacユーザー向け。価格、インストール、プライバシー、制限、代替ツールを扱います。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Univocal review',
    targetKeywords: [
      'univocal レビュー',
      'univocal mac アプリ',
      'mac 読み上げ 音声入力',
      'ローカル 音声合成 mac',
      'オフライン 音声入力 mac apple silicon',
      'プライベート 音声認識 mac',
      '音声合成 音声認識 1つのアプリ',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
    ],
    leadAnswerBlock: '**Univocalは、選択したテキストを読み上げ、話した内容を入力するソースコードが公開されていないMacアプリです。開発元によると、どちらもお使いのApple Silicon搭載Mac上で動作し、外部には何も送信されません。** 14日間の無料体験後は$39の買い切りで、サブスクリプションはありません。最新リリースは2026年11月11日のバージョン0.3.33です。このレビューは、開発元の公開されている公式サイト、変更履歴、プライバシーポリシーに基づいており、実機での検証は行っていません。',
    quickAnswerTop: {
      ja: {
        question: 'Univocalはローカルで動く読み上げ・音声入力アプリですか？',
        answer: '開発元によると、はい。読み上げも音声入力もMac上で動作し、話した内容や読み上げたテキストはどこにも送信されません。ただし、初回起動時に約1.2GBの音声ソフトウェアとモデルをダウンロードし、ライセンス確認とアップデート確認にはインターネットが使われます。コードは非公開で、PromptQuorumはネットワーク通信を調べていないため、この主張は開発元自身によるものです。',
        bullets: [
          'テキストを選択してOption-Shift-Rを押すと読み上げ、右Optionキーを押したまま話すと音声入力になります。どちらのショートカットも変更できます。',
          '価格：$39の買い切りで、1つのライセンスをMac最大3台で使え、カードもアカウントも不要の14日間体験と30日間の返金保証があります。',
          'サイトにはKokoroの音声と、macOS 26でライブ入力に使うAppleのオンデバイス音声認識の記載がありますが、音声入力のモデル名は記載されていません。',
          '対応はmacOS 14以降のApple Silicon搭載Macのみで、Intel、Windows、iPhone、Android版はありません。',
          'Univocal Connectを使うと、他のローカルアプリからテキストを送って読み上げさせることができます。ObsidianプラグインとChromium系ブラウザ拡張機能が挙げられています。',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Univocalの入手方法', anchor: 'get-it' },
      { label: 'Univocalの概要', anchor: 'at-a-glance' },
      { label: 'Univocalとは', anchor: 'what-is-univocal' },
      { label: 'はじめ方', anchor: 'how-to-get-started' },
      { label: '機能', anchor: 'features' },
      { label: 'モデルとハードウェア', anchor: 'models-hardware' },
      { label: 'プライバシー・ライセンス・費用', anchor: 'privacy' },
      { label: 'メリットと制限', anchor: 'tradeoffs' },
      { label: 'Univocalと代替ツールの比較', anchor: 'vs-alternatives' },
      { label: 'Univocalが向いている人', anchor: 'who-should-use' },
      { label: 'Univocalが向いていない人', anchor: 'who-should-not-use' },
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
            text: 'Univocalは、音声合成と音声入力をまとめた有料のMacアプリで、開発元によると、どちらもクラウドサービスではなくお使いのMac上で処理します。',
          },
          {
            type: 'plain-terms',
            text: 'キーボードの2つのキーだと考えてください。1つは選択したテキストをMacに読み上げさせ、もう1つは話した内容を入力テキストに変えます。開発元によると、どちらも音声やテキストを外部に送りません。',
          },
        ],
        items: [
          'ローカルの主張：どちらもMac上で動作します。初回のダウンロード、ライセンス確認、毎日のアップデート確認にはインターネットが使われます。',
          'ライセンスと開発元：プロプライエタリで、NarNar Labs LLCが公開しています。ソースリポジトリは見つからず、開発元の所在国も記載されていません。',
          '価格：14日間の体験後は$39の買い切りです。開発元は期間限定の割引コードも掲載しています。',
          'メンテナンス：バージョン0.3.33が2026年11月11日にリリースされており、継続的に更新されています。',
          '不足点：Apple SiliconとmacOS 14以降のみの対応で、音声入力のモデル名は不明、コード署名についてもページに記載がありません。',
        ],
      },
      getItUnivocal: {
        id: 'get-it',
        title: 'Univocalの入手方法',
        content: [
          '**UnivocalはほかのMacアプリと同じようにインストールでき、ターミナルは不要です。** 公式のダウンロードリンクからディスクイメージを入手し、音声モデルは初回起動時に取得されます。',
        ],
        columns: [
          'プラットフォーム',
          '入手先',
        ],
        rows: [
          {
            'プラットフォーム': 'Mac',
            '入手先': '[Mac版をダウンロード](https://univocalapp.com/download) — .dmg、Apple Silicon、macOS 14以降',
          },
          {
            'プラットフォーム': '無料体験（14日間）',
            '入手先': '[購入ページ](https://univocalapp.com/purchase/) — 全機能、カード不要、アカウント不要',
          },
          {
            'プラットフォーム': 'セットアップガイド',
            '入手先': '[ダウンロードと初回起動](https://univocalapp.com/downloading/)',
          },
          {
            'プラットフォーム': 'リリースノート',
            '入手先': '[変更履歴](https://univocalapp.com/changelog/)',
          },
          {
            'プラットフォーム': '公式サイト',
            '入手先': '[univocalapp.com](https://univocalapp.com/)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[Univocalのプライバシーポリシー](https://univocalapp.com/privacy/)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': 'ソースリポジトリは見つかりませんでした',
          },
        ],
        note: 'サイトに掲載されているのはMac版のみです。Windows、iOS、Androidは通知登録フォームがあるだけで、Intel Macには対応していません。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Univocalの概要',
        columns: [
          '項目',
          'Univocal',
        ],
        rows: [
          { '項目': 'プラットフォーム', 'Univocal': 'macOS 14以降、Apple Siliconのみ' },
          { '項目': '価格', 'Univocal': '$39の買い切り、14日間体験' },
          { '項目': 'ライセンス', 'Univocal': 'プロプライエタリ、ソースは見つからず' },
          { '項目': '実行場所', 'Univocal': 'お使いのMac上。ダウンロードと確認にはインターネット' },
          { '項目': '対応言語', 'Univocal': '音声入力と読み上げで32言語（トップページ）' },
          { '項目': 'リアルタイム文字起こし', 'Univocal': '話しながらライブ入力（変更履歴0.3.17）' },
          { '項目': '音声クローン', 'Univocal': '記載なし' },
          { '項目': '話者ラベル', 'Univocal': '記載なし' },
          { '項目': 'ローカルAPIサーバー', 'Univocal': '記載なし。ローカルアプリ向けにUnivocal Connect' },
        ],
        note: '項目は、Local LLM Software Directoryで使われている音声認識と音声合成の比較に沿っています。サイトに記載がない項目は、未対応ではなく不明という意味です。',
      },
      whatIsUnivocal: {
        id: 'what-is-univocal',
        title: 'Univocalとは',
        content: [
          '**Univocalは、読み上げと音声入力の2つの機能を持つ音声ユーティリティです。** テキストを選択してショートカットを押すと読み上げが始まり、キーを押したまま話して離すと、メールクライアント、ノート、チャットなど、カーソル位置にテキストが入力されます。',
          '公開元はNarNar Labs LLCです。開発元のページには、創業者、所在国、住所の記載はなく、サポート用のメールアドレスがあるだけです。このレビューは「情報源」に挙げたページに基づいており、実機での検証は行っていないため、音声の品質、精度、速度は評価していません。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'はじめ方',
        content: [
          '**セットアップは、インストール、初回のダウンロード、2つのショートカットです。** 手順は開発元のセットアップページと変更履歴に沿っています。',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: 'ダウンロードした.dmgを開き、UnivocalをApplicationsフォルダに移して、14日間の無料体験を始めます。カードもアカウントも不要です。',
          },
          {
            title: '初回起動の完了を待つ',
            whyItMatters: 'アプリが約1.2GBの音声ソフトウェアとモデルをダウンロードします。バージョン0.3.11で、ダウンロード完了前から使い始められるようになりました。',
          },
          {
            title: 'macOSの権限を許可する',
            whyItMatters: '開発元によると、音声入力にはマイクとアクセシビリティの権限、選択したテキストの読み上げにはアクセシビリティの権限が必要です。',
          },
          {
            title: '読み上げと音声入力を使う',
            whyItMatters: 'テキストを選択してOption-Shift-Rを押すと読み上げ、右Optionキーを押したまま話すと音声入力になります。どちらの初期設定も変更できます。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**機能の中心は、あらゆるMacアプリでのプライベートな読み上げと音声入力です。** 以下はすべて公式サイト、プライバシーポリシー、変更履歴によります。',
        ],
        items: [
          '**読み上げ。** 選択したテキストを単語ごとのハイライト付きで読み上げます。何も選択していない場合は、最後にコピーしたテキストを読み上げます。バージョン0.3.16以降、速度は最大4倍まで上げられます。',
          '**音声入力。** カーソル位置にテキストが入力され、句読点、大文字小文字、段落の区切りは話している間に推定されます。ライブ入力はバージョン0.3.17から、バージョン0.3.28以降の新規インストールでは初期設定でオフです。',
          '**32言語。** 読み上げと音声入力は同じ言語リストを共有し、変更履歴には複数言語を混ぜた音声入力の説明があります。',
          '**Univocal Connect。** 他のローカルアプリからテキストを送って読み上げさせることができます。ObsidianプラグインとChrome、Edge、Brave、Vivaldi、Arc向けの読み上げ拡張機能が挙げられています。',
          '**履歴。** 直近20件の音声入力と直近10件の読み上げがMac上に保存されます。',
          '**インターフェースの言語。** 英語、韓国語、日本語、簡体字中国語、スペイン語、ドイツ語、フランス語です。',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'モデルとハードウェア',
        content: [
          '**開発元は、読み上げの音声にKokoro、macOS 26でのライブ下書きにAppleのSpeechAnalyzerを挙げていますが、音声入力のモデル名は明らかにしていません。** プライバシーポリシーによると、音声ソフトウェアはPyPIから、モデルはHugging Faceから取得され、合計で約1.2GBです。また、Mac上では127.0.0.1:8787でローカルエンジンが待ち受けています。確認したページには、WhisperもParakeetも記載がありません。',
          '要件は、Apple Silicon搭載MacとmacOS 14以降です。韓国語やドイツ語など一部の読み上げ言語は、初回の利用時にさらに約400MBを取得します。RAMの要件や、速度・精度の数値は公開されていません。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー・ライセンス・費用',
        content: [
          '**プライバシーポリシーには、話した内容や読み上げたテキストはどこにも送信されず、アプリにはアカウント、分析、クラッシュレポートがないと記載されています。** ただし、それ以外の場面ではインターネットが使われます。PyPI、Hugging Face、MacにPythonがない場合はGitHubからのダウンロード、Lemon Squeezyでのライセンス確認（ライセンスキーとMacの名前を送信）、開発元のサイトに対する毎日のアップデート確認です。問題報告は、送信ボタンを押したときだけ送られます。アプリと違い、ウェブサイトはCloudflare Web Analyticsを使っています。コードは非公開で、PromptQuorumはネットワーク通信を調べていないため、これらの記述は開発元自身によるものです。',
          '有料のプロプライエタリ製品で、$39の買い切り、1つのライセンスをMac最大3台で使え、14日間の体験と30日間の返金保証があります。購入ページには、ローンチ記念コードとブラックフライデー用コードも掲載されており、どちらも2026年11月30日まで有効です。購入時の価格は、ページでご確認ください。開発元が自社サイトで行っている他アプリとの比較は開発元自身の主張であり、ここでは検証していません。',
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
            'メリット': '読み上げと音声入力を1つのアプリで',
            '実際の使い勝手': '2つのツールの代わりに、インストール、ライセンス、履歴が1つで済みます。',
            '制限・注意点': 'Mac専用で、Intel、Windows、モバイル版はありません。',
          },
          {
            'メリット': 'Mac上での処理',
            '実際の使い勝手': '開発元によると、音声とテキストはマシン上にとどまります。',
            '制限・注意点': 'コードが非公開のため主張は検証できません。初回起動に約1.2GBのダウンロードが必要です。',
          },
          {
            'メリット': '買い切り価格',
            '実際の使い勝手': '$39の買い切りで、Mac最大3台、サブスクリプションなしです。',
            '制限・注意点': '割引コードは2026年11月30日までで、その後のトップページの価格は$39です。',
          },
          {
            'メリット': '32言語',
            '実際の使い勝手': '複数言語を混ぜた音声入力を含め、多くの言語で読み上げと音声入力ができます。',
            '制限・注意点': '言語ごとの品質データはなく、音声入力のモデル名は不明です。',
          },
          {
            'メリット': '他のアプリとの連携',
            '実際の使い勝手': 'Obsidianとブラウザ拡張機能から、テキストを送って読み上げさせられます。',
            '制限・注意点': 'プライバシーページによると、拡張機能はすべてのウェブページで動作します。先に権限をご確認ください。',
          },
          {
            'メリット': '頻繁なリリース',
            '実際の使い勝手': 'バージョン0.3.33が2026年11月11日に公開されました。',
            '制限・注意点': 'バージョン0.x。変更履歴で最も古い項目は2026年7月29日の0.3.0で、アプリはまだ新しいようです。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Univocalと代替ツールの比較',
        content: [
          'ディレクトリ内で最も近い音声ツールは、無料の読み上げアプリ、両方の役割をこなす無料のスタジオアプリ、そして3つのMac向け音声入力アプリです。',
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
            'アプリ': 'Univocal',
            '対応': 'Mac',
            '価格とライセンス': '$39の買い切り、プロプライエタリ',
            '役割': '読み上げと音声入力',
            '主な違い': '2つの役割を1つの有料Macアプリで',
          },
          {
            'アプリ': '[Parrot](/ja/power-local-llm/parrot-review)',
            '対応': 'Mac、Windows、Linux',
            '価格とライセンス': '無料、MIT',
            '役割': '読み上げのみ',
            '主な違い': '無料のオープンソース。音声入力なし',
          },
          {
            'アプリ': '[Voicebox](/ja/power-local-llm/voicebox-review)',
            '対応': 'Mac、Windows、Linux',
            '価格とライセンス': '無料、MIT',
            '役割': '音声入力付きのボイススタジオ',
            '主な違い': '音声クローンとMCPサーバーを追加',
          },
          {
            'アプリ': '[Weesper Neon Flow](/ja/power-local-llm/weesper-neon-flow-review)',
            '対応': 'Mac、Windows',
            '価格とライセンス': '体験後、月5ユーロまたは99ユーロ買い切り',
            '役割': 'プッシュトゥトーク音声入力',
            '主な違い': '端末内でWhisper。Windowsに対応、読み上げなし',
          },
          {
            'アプリ': '[Sprich](/ja/power-local-llm/sprich-review)',
            '対応': 'Mac',
            '価格とライセンス': 'フリーミアム、プロプライエタリ',
            '役割': 'Mac向け音声入力',
            '主な違い': 'ドイツ語優先で無料プランあり。読み上げなし',
          },
          {
            'アプリ': '[MacWhisper](/ja/power-local-llm/macwhisper-review)',
            '対応': 'Mac',
            '価格とライセンス': 'フリーミアム、プロプライエタリ',
            '役割': 'Mac向け文字起こしアプリ',
            '主な違い': 'ファイルと会議が中心',
          },
        ],
        note: 'サードパーティ製アプリの対応環境、価格、機能は頻繁に変わります。決める前に各プロジェクトの公式ページで最新情報をご確認ください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Univocalが向いている人',
        items: [
          '**聞くことも音声入力もするMacユーザー。** 読み上げと音声入力が1つのアプリ、1つのライセンスにまとまっています。',
          '**クラウドの音声サービスを避けたい人。** 開発元によると、どちらの機能もMac上で動作します。',
          '**多言語で作業する人。** 読み上げと音声入力で32言語に対応しています。',
          '**1回払いを好む人。** サブスクリプションは提供されていません。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Univocalが向いていない人',
        items: [
          '**Intel Mac、Windows、iPhone、Androidのユーザー。** 提供されているのはApple Silicon搭載Mac版だけです。',
          '**監査可能なソフトウェアが必要な人。** ソースコードは見つからず、プライバシーの主張は検証できません。',
          '**無料のソフトウェアを求める人。** 体験後は有料です。読み上げはParrot、両方はVoiceboxが無料です。',
          '**インターネットなしで作業しなければならない人。** 初回起動に約1.2GBのダウンロードが必要です。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Univocalはオフラインで使えますか？',
            a: '購入ページには、初回のダウンロード後は音声入力がオフラインで動作するとあります。プライバシーポリシーは、ライセンス確認が失敗した場合は利用を妨げない方式（フェイルオープン）と説明しており、オフラインでも使用がブロックされないはずです。PromptQuorumはオフラインでの動作を検証していません。',
          },
          {
            q: '音声はクラウドに送信されますか？',
            a: 'プライバシーポリシーには、話した内容や読み上げたテキストはどこにも送信されないと記載されています。macOS 26では、ライブ入力にAppleのオンデバイス音声認識も使われます。コードは非公開で、PromptQuorumはネットワーク通信を調べていません。',
          },
          {
            q: 'Univocalはどの音声モデルを使っていますか？',
            a: 'ページには、読み上げにKokoroの音声、古いmacOSではAppleの音声が挙げられていますが、音声入力のモデル名はありません。WhisperもParakeetも記載されていません。',
          },
          {
            q: '1つのライセンスを複数のMacで使えますか？',
            a: 'はい、最大3台です。購入ページによると、設定からMacをライセンスから外すこともできます。',
          },
          {
            q: 'Univocalは誰が作っていますか？',
            a: 'NarNar Labs LLCです。ページには所在国も創業者も記載されていません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: [
          'Apple Silicon搭載Macをお持ちで、開発元によるとすべてが自分のコンピューター上で動く、読み上げと音声入力を1つにまとめたアプリを使いたく、ソースコードが公開されていないソフトに1回だけ支払うことを受け入れられる方にUnivocalは向いています。14日間の体験、買い切り価格、ごく最近のリリースがあります。',
          '注意点は対応範囲と検証可能性です。Intel、Windows、モバイル版がなく、コードは非公開で、音声入力のモデル名は不明、プライバシーの主張はPromptQuorumでは確認できませんでした。購入前に体験版をお試しください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Univocal公式サイト](https://univocalapp.com/) — 機能、言語、要件。',
          '[ダウンロードと初回起動](https://univocalapp.com/downloading/) — インストーラーのファイル名とセットアップ。',
          '[購入ページ](https://univocalapp.com/purchase/) — 価格、体験、ライセンス、返金の条件。',
          '[変更履歴](https://univocalapp.com/changelog/) — バージョン履歴。バージョン0.3.33は2026年11月11日付。',
          '[プライバシーポリシー](https://univocalapp.com/privacy/) — データの取り扱いとネットワーク上の接続先。',
          '[代替ツールのページ](https://univocalapp.com/alternatives/) — ショートカット、権限、開発元自身による比較。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカル音声・オーディオツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — 音声合成、音声認識、音声エージェントを並べて比較。',
          '[Parrotレビュー](/ja/power-local-llm/parrot-review) — 3つのデスクトップOSに対応する、無料のオフライン読み上げアプリ。',
          '[Voiceboxレビュー](/ja/power-local-llm/voicebox-review) — 音声入力と音声クローン機能を持つ、無料のボイススタジオ。',
          '[Weesper Neon Flowレビュー](/ja/power-local-llm/weesper-neon-flow-review) — MacとWindows向けの、有料のオフライン音声入力。',
          '[Macで使えるローカル音声合成ベスト](/ja/power-local-llm/best-local-tts-mac) — Apple Silicon向けの読み上げの選択肢。',
          '[Local LLM Software Directory全体](/ja/directory) — プラットフォームを横断してローカルAIツールを集めた、より広いディレクトリ。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/univocal-review-hero-zh.webp',
    title: 'Univocal评测：在Mac上朗读文字并听写',
    seoTitle: 'Univocal评测：Mac朗读与听写应用的价格、隐私与限制',
    intro: 'Univocal是一款付费的Mac应用，一次安装完成两件事：朗读选中的文字，并把你口述的内容输入到光标所在的任意应用中。其开发者称两项功能都在你自己的Apple silicon Mac上运行。本评测梳理开发者官网、更新日志和隐私政策记载的内容、这些页面没有说明的部分，以及Univocal与目录中其他语音工具的对比。',
    metaDescription: 'Univocal评测：适用于Mac的朗读与听写应用，据开发者称在你的Mac上运行。14天试用后一次性$39，仅限Apple silicon，未经实测。',
    twitterDescription: 'Univocal评测：一款既能朗读文字又能听写的Mac应用，据开发者称在你自己的Mac上处理。价格、隐私、限制与替代方案。',
    audience: '希望在一个应用里同时使用文字转语音和听写、又不想依赖云服务或订阅的Mac用户——涵盖价格、安装、隐私、限制和替代方案。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Univocal review',
    targetKeywords: [
      'univocal 评测',
      'univocal mac 应用',
      'mac 朗读和听写',
      'mac 本地文字转语音',
      'apple silicon mac 离线听写',
      'mac 私密语音转文字',
      '文字转语音和语音转文字二合一应用',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
    ],
    leadAnswerBlock: '**Univocal是一款未公开源代码的Mac应用，可朗读选中的文字并输入你的口述内容，其开发者称两项功能都在你自己的Apple silicon Mac上运行，不会向任何地方发送数据。** 14天免费试用之后一次性收费$39，没有订阅。最新版本为2026年11月11日发布的0.3.33。本评测依据开发者公开的官网、更新日志和隐私政策，并非实际上手测试。',
    quickAnswerTop: {
      zh: {
        question: 'Univocal是本地朗读和听写应用吗？',
        answer: '据其开发者称，是：两个方向都在你的Mac上运行，你口述或朗读的内容不会发送到任何地方。不过首次启动仍会下载约1.2 GB的语音软件和模型，许可证和更新检查也会使用互联网。代码未公开，PromptQuorum也没有检查网络流量，因此这一说法出自开发者自己。',
        bullets: [
          '选中文字后按Option-Shift-R即可听它朗读；按住右侧Option键即可听写。两个快捷键都可以更改。',
          '价格：一次性$39，一个许可证最多可用于三台Mac，14天试用无需信用卡或账号，并提供30天退款。',
          '官网点明了Kokoro语音，以及在macOS 26上用于实时输入的Apple设备端语音识别，但没有说明听写模型。',
          '仅支持macOS 14或更高版本的Apple silicon Mac；没有Intel、Windows、iPhone或Android版本。',
          'Univocal Connect允许其他本地应用发送文字供其朗读；官网列出了Obsidian插件和Chromium浏览器扩展。',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: '获取Univocal', anchor: 'get-it' },
      { label: 'Univocal概览', anchor: 'at-a-glance' },
      { label: 'Univocal是什么', anchor: 'what-is-univocal' },
      { label: '入门步骤', anchor: 'how-to-get-started' },
      { label: '功能', anchor: 'features' },
      { label: '模型与硬件', anchor: 'models-hardware' },
      { label: '隐私、许可与费用', anchor: 'privacy' },
      { label: '优势与局限', anchor: 'tradeoffs' },
      { label: 'Univocal与替代方案对比', anchor: 'vs-alternatives' },
      { label: '适合使用Univocal的人', anchor: 'who-should-use' },
      { label: '不适合使用Univocal的人', anchor: 'who-should-not-use' },
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
            text: 'Univocal是一款把文字转语音和听写合在一起的付费Mac应用，据其开发者称，两者都在你自己的Mac上处理，而不是在云服务中。',
          },
          {
            type: 'plain-terms',
            text: '把它想成键盘上的两个键：一个让Mac朗读你选中的文字，另一个把你说的话变成文字，而开发者称两者都不会把你的语音或文字发送出去。',
          },
        ],
        items: [
          '本地说法：两个方向都在Mac上运行；首次运行的下载、许可证检查和每日更新检查仍会使用互联网。',
          '许可与开发者：专有软件，由NarNar Labs LLC发布；未找到源代码仓库，开发者所在国家未说明。',
          '价格：一次性$39，含14天试用；开发者还列出了限时折扣码。',
          '维护状态：版本0.3.33于2026年11月11日发布，说明项目仍在积极更新。',
          '不足：仅支持Apple silicon和macOS 14或更高版本，没有点明听写模型，页面中也没有任何关于代码签名的说明。',
        ],
      },
      getItUnivocal: {
        id: 'get-it',
        title: '获取Univocal',
        content: [
          '**Univocal的安装方式与其他Mac应用相同，无需使用终端。** 官方下载链接提供磁盘映像，语音模型在首次启动时下载。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'Mac',
            '获取方式': '[下载Mac版](https://univocalapp.com/download) — .dmg，Apple silicon，macOS 14或更高版本',
          },
          {
            '平台': '免费试用（14天）',
            '获取方式': '[购买页面](https://univocalapp.com/purchase/) — 完整产品，无需信用卡，无需账号',
          },
          {
            '平台': '设置指南',
            '获取方式': '[下载与首次启动](https://univocalapp.com/downloading/)',
          },
          {
            '平台': '发布说明',
            '获取方式': '[更新日志](https://univocalapp.com/changelog/)',
          },
          {
            '平台': '官网',
            '获取方式': '[univocalapp.com](https://univocalapp.com/)',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[Univocal隐私政策](https://univocalapp.com/privacy/)',
          },
          {
            '平台': '源代码',
            '获取方式': '未找到源代码仓库',
          },
        ],
        note: '官网只列出Mac版。Windows、iOS和Android仅以“通知我”表单的形式出现，不支持Intel Mac。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Univocal概览',
        columns: ['属性', 'Univocal'],
        rows: [
          { '属性': '平台', 'Univocal': 'macOS 14+，仅限Apple silicon' },
          { '属性': '价格', 'Univocal': '一次性$39；14天试用' },
          { '属性': '许可', 'Univocal': '专有；未找到源代码' },
          { '属性': '运行方式', 'Univocal': '在你的Mac上运行；下载和检查需要联网' },
          { '属性': '语言', 'Univocal': '听写和朗读共32种（首页）' },
          { '属性': '实时转录', 'Univocal': '边说边输入（更新日志0.3.17）' },
          { '属性': '声音克隆', 'Univocal': '未说明' },
          { '属性': '说话人标注', 'Univocal': '未说明' },
          { '属性': '本地API服务器', 'Univocal': '未说明；Univocal Connect面向本地应用' },
        ],
        note: '各属性沿用Local LLM Software Directory中语音转文字和文字转语音对比所用的项目。官网未提及，表示未知，而不是不支持。',
      },
      whatIsUnivocal: {
        id: 'what-is-univocal',
        title: 'Univocal是什么',
        content: [
          '**Univocal是一款语音工具，有两项功能：朗读和听写。** 你选中文字并按下快捷键即可听它朗读，或者按住一个键、说话、松开，让文字输入到光标处，例如邮件客户端、笔记或聊天中。',
          '它由NarNar Labs LLC发布。开发者的页面没有点明创始人、国家或邮寄地址，只给出了一个支持邮箱。本评测涵盖“资料来源”中列出的页面，没有进行实际上手测试，因此这里不对语音质量、准确度和速度做评级。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '入门步骤',
        content: [
          '**设置包括安装、首次运行时的下载和两个快捷键。** 以下步骤依据开发者的设置页面和更新日志。',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '打开下载的.dmg，把Univocal移到“应用程序”文件夹，并开始14天试用；无需信用卡或账号。',
          },
          {
            title: '等待首次启动完成',
            whyItMatters: '应用会下载约1.2 GB的语音软件和模型。版本0.3.11新增了在下载完成前就开始使用的选项。',
          },
          {
            title: '授予macOS权限',
            whyItMatters: '据开发者称，听写需要麦克风和辅助功能权限，朗读选中的文字需要辅助功能权限。',
          },
          {
            title: '朗读和听写',
            whyItMatters: '选中文字后按Option-Shift-R即可听它朗读，或者按住右侧Option键说话。两个默认设置都可以更改。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**功能集中在任意Mac应用中的私密朗读和听写。** 以下内容均来自官网、隐私页面和更新日志。',
        ],
        items: [
          '**朗读。** 选中的文字会逐词高亮并朗读；没有选中任何内容时，则朗读最近复制的文字。自版本0.3.16起，语速最高可达4倍。',
          '**听写。** 文字落在光标处，标点、大小写和段落分隔会在你说话时自动推断；自版本0.3.17起支持实时输入，自版本0.3.28起，新安装默认关闭该功能。',
          '**32种语言。** 朗读和听写共用同一语言列表，更新日志还描述了混合语言听写。',
          '**Univocal Connect。** 其他本地应用可以发送文字供其朗读；官网列出了Obsidian插件，以及适用于Chrome、Edge、Brave、Vivaldi和Arc的朗读扩展。',
          '**历史记录。** 最近20条听写和最近10条朗读保存在Mac上。',
          '**界面语言。** 英语、韩语、日语、简体中文、西班牙语、德语和法语。',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '模型与硬件',
        content: [
          '**开发者点明朗读语音使用Kokoro，并在macOS 26上用Apple的SpeechAnalyzer生成实时草稿，但没有点明其听写模型。** 隐私页面称，语音软件来自PyPI，模型来自Hugging Face，合计约1.2 GB，并且有一个本地引擎在Mac上监听127.0.0.1:8787。所阅读的页面均未提及Whisper和Parakeet。',
          '系统要求是Apple silicon Mac和macOS 14或更高版本。部分朗读语言（包括韩语和德语）在首次使用时还需额外下载约400 MB。官网没有公布内存数据，也没有公布速度或准确度数据。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私、许可与费用',
        content: [
          '**隐私页面称，你口述或朗读的内容不会发送到任何地方，应用没有账号、没有分析、也没有崩溃报告。** 不过互联网在其他方面仍会用到：从PyPI、Hugging Face下载内容，如果Mac上没有Python，还会从GitHub下载；通过Lemon Squeezy检查许可证，这会发送许可证密钥和Mac的名称；以及每天对开发者网站进行一次更新检查。只有在你点击“发送报告”时才会发送问题报告。与应用不同，官网使用了Cloudflare Web Analytics。代码未公开，PromptQuorum也没有检查网络流量，因此这些说法出自开发者自己。',
          '这是付费的专有产品：一次性$39，一个许可证最多可用于三台Mac，14天试用，30天退款。购买页面还列出了一个发布折扣码和一个黑色星期五折扣码，两者均有效至2026年11月30日；请在购买时查看页面上的当时价格。开发者在自己网站上对其他应用所做的比较属于开发者自己的说法，这里没有核实。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '优势与局限',
        columns: ['优势', '实际使用中的意义', '局限 / 注意事项'],
        rows: [
          {
            '优势': '朗读和听写合在一个应用中',
            '实际使用中的意义': '一次安装、一个许可证、一份历史记录，而不是两个工具。',
            '局限 / 注意事项': '仅限Mac；没有Intel、Windows或移动版本。',
          },
          {
            '优势': '在你的Mac上处理',
            '实际使用中的意义': '据开发者称，语音和文字保留在这台机器上。',
            '局限 / 注意事项': '代码闭源，因此该说法无法核查；首次启动需要约1.2 GB的下载。',
          },
          {
            '优势': '一次性价格',
            '实际使用中的意义': '一次性$39，最多三台Mac，没有订阅。',
            '局限 / 注意事项': '折扣码有效至2026年11月30日，之后首页列出的价格为$39。',
          },
          {
            '优势': '32种语言',
            '实际使用中的意义': '可用多种语言朗读和听写，包括混合语言听写。',
            '局限 / 注意事项': '没有各语言的质量数据；听写模型未点明。',
          },
          {
            '优势': '与其他应用连接',
            '实际使用中的意义': 'Obsidian和浏览器扩展可以发送文字供其朗读。',
            '局限 / 注意事项': '据隐私页面称，该扩展在所有网页上运行；请先阅读其权限说明。',
          },
          {
            '优势': '发布频繁',
            '实际使用中的意义': '版本0.3.33于2026年11月11日发布。',
            '局限 / 注意事项': '版本为0.x；更新日志中最早的条目是2026年7月29日的0.3.0，因此应用看起来还很年轻。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Univocal与替代方案对比',
        content: [
          '目录中最接近的语音工具包括：一款免费的朗读应用、一款两项功能兼备的免费工作室，以及三款Mac听写应用。',
        ],
        columns: ['应用', '平台', '价格与许可', '定位', '主要区别'],
        rows: [
          {
            '应用': 'Univocal',
            '平台': 'Mac',
            '价格与许可': '一次性$39，专有',
            '定位': '朗读和听写',
            '主要区别': '两项功能合在一个付费Mac应用中',
          },
          {
            '应用': '[Parrot](/zh/power-local-llm/parrot-review)',
            '平台': 'Mac、Windows、Linux',
            '价格与许可': '免费，MIT',
            '定位': '仅朗读',
            '主要区别': '免费且开源；没有听写',
          },
          {
            '应用': '[Voicebox](/zh/power-local-llm/voicebox-review)',
            '平台': 'Mac、Windows、Linux',
            '价格与许可': '免费，MIT',
            '定位': '带听写的语音工作室',
            '主要区别': '增加声音克隆和MCP服务器',
          },
          {
            '应用': '[Weesper Neon Flow](/zh/power-local-llm/weesper-neon-flow-review)',
            '平台': 'Mac、Windows',
            '价格与许可': '试用后每月5欧元或一次性99欧元',
            '定位': '按键听写',
            '主要区别': 'Whisper在设备上运行；增加Windows，没有朗读',
          },
          {
            '应用': '[Sprich](/zh/power-local-llm/sprich-review)',
            '平台': 'Mac',
            '价格与许可': '免费增值，专有',
            '定位': 'Mac听写',
            '主要区别': '德语优先并有免费方案；没有朗读',
          },
          {
            '应用': '[MacWhisper](/zh/power-local-llm/macwhisper-review)',
            '平台': 'Mac',
            '价格与许可': '免费增值，专有',
            '定位': 'Mac转录应用',
            '主要区别': '首先面向文件和会议',
          },
        ],
        note: '第三方应用的平台、价格和功能经常变化。决定之前，请在各项目自己的页面上核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合使用Univocal的人',
        items: [
          '**既听又说的Mac用户。** 朗读和听写共用一个应用和一个许可证。',
          '**回避云端语音服务的人。** 据开发者称，两项功能都在Mac上运行。',
          '**使用多种语言的用户。** 朗读和听写共支持32种语言。',
          '**偏好一次性付费的买家。** 不提供订阅。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '不适合使用Univocal的人',
        items: [
          '**Intel Mac、Windows、iPhone和Android用户。** 只提供Apple silicon Mac版本。',
          '**需要可审计软件的人。** 未找到源代码，隐私说法无法检验。',
          '**想要免费软件的人。** 试用之后需要付费；Parrot的朗读功能免费，Voicebox两项功能都免费。',
          '**必须完全不联网工作的人。** 首次启动需要约1.2 GB的下载。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Univocal可以离线使用吗？',
            a: '购买页面称，首次运行的下载完成后，听写可离线工作。隐私页面把许可证检查描述为失败时放行，因此离线时应该不会阻止使用。PromptQuorum没有在离线状态下测试。',
          },
          {
            q: '我的声音会被发送到云端吗？',
            a: '隐私页面称，你口述或朗读的内容不会发送到任何地方。在macOS 26上，实时输入还会使用Apple的设备端语音识别。代码未公开，PromptQuorum也没有检查网络流量。',
          },
          {
            q: 'Univocal使用哪种语音模型？',
            a: '页面点明朗读使用Kokoro语音，在较旧的macOS版本上使用Apple语音，但没有点明听写模型。页面没有提到Whisper和Parakeet。',
          },
          {
            q: '一个许可证可以用在多台Mac上吗？',
            a: '可以，最多三台；据购买页面称，可以在设置中把某台Mac从许可证上移除。',
          },
          {
            q: '谁开发了Univocal？',
            a: 'NarNar Labs LLC。页面没有说明其所在国家或创始人。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '如果你有一台Apple silicon Mac，想在一个应用中同时使用文字转语音和听写，并且据开发者称一切都在你自己的电脑上运行，同时你接受为未公开源代码的软件一次性付费，Univocal是个合适的选择。它提供14天试用、一次性价格和非常新的版本。',
          '需要注意的是适用范围和可验证性：没有Intel、Windows或移动版本、代码未公开、听写模型未点明，而且PromptQuorum无法核实其隐私说法。购买前请先使用试用版。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Univocal官网](https://univocalapp.com/) — 功能、语言和系统要求。',
          '[下载与首次启动](https://univocalapp.com/downloading/) — 安装文件名和设置步骤。',
          '[购买页面](https://univocalapp.com/purchase/) — 价格、试用、许可证和退款条款。',
          '[更新日志](https://univocalapp.com/changelog/) — 版本历史；版本0.3.33的日期为2026年11月11日。',
          '[隐私政策](https://univocalapp.com/privacy/) — 数据处理和网络主机。',
          '[替代方案页面](https://univocalapp.com/alternatives/) — 快捷键、权限以及开发者自己所做的比较。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地语音和音频工具对比](/zh/power-local-llm/local-llm-voice-audio-compared) — 文字转语音、语音转文字和语音代理并排比较。',
          '[Parrot评测](/zh/power-local-llm/parrot-review) — 适用于三种桌面系统的免费离线朗读应用。',
          '[Voicebox评测](/zh/power-local-llm/voicebox-review) — 带听写和声音克隆的免费语音工作室。',
          '[Weesper Neon Flow评测](/zh/power-local-llm/weesper-neon-flow-review) — 适用于Mac和Windows的付费离线听写。',
          '[Mac上最好的本地文字转语音](/zh/power-local-llm/best-local-tts-mac) — 适用于Apple silicon的朗读方案。',
          '[完整的Local LLM Software Directory](/zh/directory) — 涵盖多个平台的本地AI工具的更广泛目录。',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/univocal-review-hero-es.webp',
    title: 'Reseña de Univocal: lectura en voz alta y dictado en tu Mac',
    seoTitle: 'Reseña de Univocal: lectura en voz alta y dictado en Mac',
    intro: 'Univocal es una app de pago para Mac que hace dos cosas con una sola instalación: lee en voz alta el texto seleccionado y escribe lo que dictas en la app que tenga el cursor. Su fabricante afirma que ambas funciones se ejecutan en tu propio Mac con Apple silicon. Esta reseña resume lo que documentan la web, el registro de cambios y la política de privacidad del fabricante, lo que omiten y cómo se compara Univocal con otras herramientas de voz del directorio.',
    metaDescription: 'Reseña de Univocal: app para Mac de lectura en voz alta y dictado que, según su fabricante, funciona en tu Mac. 39 $ únicos, 14 días de prueba. Sin probar.',
    twitterDescription: 'Reseña de Univocal: una app para Mac que lee texto en voz alta y dicta, procesado en tu propio Mac según su fabricante. Precio, privacidad, límites y alternativas.',
    audience: 'Usuarios de Mac que quieren texto a voz y dictado en una sola app, sin servicio en la nube ni suscripción — cubre precio, instalación, privacidad, límites y alternativas.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Univocal review',
    targetKeywords: [
      'reseña univocal',
      'univocal app para mac',
      'lectura en voz alta y dictado en mac',
      'texto a voz local en mac',
      'dictado sin conexión mac apple silicon',
      'voz a texto privado en mac',
      'texto a voz y voz a texto en una sola app',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
    ],
    leadAnswerBlock: '**Univocal es una app para Mac sin código fuente publicado que lee en voz alta el texto seleccionado y escribe tu dictado, y su fabricante afirma que ambas funciones se ejecutan en tu propio Mac con Apple silicon sin enviar nada a ningún sitio.** Cuesta 39 $ de pago único tras una prueba gratuita de 14 días, sin suscripción. La versión más reciente es la 0.3.33, del 11 de noviembre de 2026. Esta reseña se basa en la web pública, el registro de cambios y la política de privacidad del fabricante, no en una prueba práctica.',
    quickAnswerTop: {
      es: {
        question: '¿Es Univocal una app local de lectura en voz alta y dictado?',
        answer: 'Según su fabricante, sí: ambas direcciones se ejecutan en tu Mac y nada de lo que dictas o lees se envía a ningún sitio. El primer inicio aún descarga unos 1,2 GB de software y modelos de voz, y las comprobaciones de licencia y de actualizaciones usan internet. El código no está publicado y PromptQuorum no inspeccionó el tráfico de red, así que la afirmación es del propio fabricante.',
        bullets: [
          'Selecciona texto y pulsa Option-Shift-R para oírlo; mantén pulsada la tecla Option derecha para dictar. Ambos atajos se pueden cambiar.',
          'Precio: 39 $ únicos, una licencia para hasta tres Mac, una prueba de 14 días sin tarjeta ni cuenta y un reembolso de 30 días.',
          'La web nombra las voces de Kokoro y, en macOS 26, el reconocimiento de voz en el dispositivo de Apple para escribir en directo, pero no el modelo de dictado.',
          'Solo Mac con Apple silicon y macOS 14 o posterior; no hay versión para Intel, Windows, iPhone ni Android.',
          'Univocal Connect permite que otras apps locales envíen texto para leerlo; se citan un plugin de Obsidian y una extensión para navegadores Chromium.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Conseguir Univocal', anchor: 'get-it' },
      { label: 'Univocal de un vistazo', anchor: 'at-a-glance' },
      { label: 'Qué es Univocal', anchor: 'what-is-univocal' },
      { label: 'Primeros pasos', anchor: 'how-to-get-started' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Modelos y hardware', anchor: 'models-hardware' },
      { label: 'Privacidad, licencia y coste', anchor: 'privacy' },
      { label: 'Equilibrio: ventajas y limitaciones', anchor: 'tradeoffs' },
      { label: 'Univocal frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar Univocal', anchor: 'who-should-use' },
      { label: 'Quién no debería usar Univocal', anchor: 'who-should-not-use' },
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
            text: 'Univocal es una app de pago para Mac que combina texto a voz y dictado y que, según su fabricante, procesa ambos en tu propio Mac en lugar de en un servicio en la nube.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en dos teclas de tu teclado: una hace que el Mac lea lo que seleccionaste, la otra convierte lo que dices en texto escrito, y el fabricante afirma que ninguna envía tu voz ni tu texto fuera.',
          },
        ],
        items: [
          'Afirmación de uso local: ambas direcciones se ejecutan en el Mac; la descarga del primer inicio, las comprobaciones de licencia y las comprobaciones diarias de actualizaciones siguen usando internet.',
          'Licencia y fabricante: propietaria, publicada por NarNar Labs LLC; no se encontró ningún repositorio de código y el país del fabricante no se indica.',
          'Precio: 39 $ únicos con una prueba de 14 días; el fabricante también lista códigos de descuento por tiempo limitado.',
          'Mantenimiento: la versión 0.3.33 salió el 11 de noviembre de 2026, así que el proyecto se actualiza de forma activa.',
          'Carencias: solo Apple silicon y macOS 14 o posterior, sin modelo de dictado nombrado y sin nada en las páginas sobre la firma de código.',
        ],
      },
      getItUnivocal: {
        id: 'get-it',
        title: 'Conseguir Univocal',
        content: [
          '**Univocal se instala como cualquier app de Mac, así que no hace falta terminal.** El enlace de descarga oficial sirve una imagen de disco y los modelos de voz se descargan en el primer inicio.',
        ],
        columns: ['Plataforma', 'Dónde conseguirla'],
        rows: [
          {
            Plataforma: 'Mac',
            'Dónde conseguirla': '[Descargar para Mac](https://univocalapp.com/download) — .dmg, Apple silicon, macOS 14 o posterior',
          },
          {
            Plataforma: 'Prueba gratuita (14 días)',
            'Dónde conseguirla': '[Página de compra](https://univocalapp.com/purchase/) — producto completo, sin tarjeta, sin cuenta',
          },
          {
            Plataforma: 'Guía de instalación',
            'Dónde conseguirla': '[Descarga y primer inicio](https://univocalapp.com/downloading/)',
          },
          {
            Plataforma: 'Notas de versión',
            'Dónde conseguirla': '[Registro de cambios](https://univocalapp.com/changelog/)',
          },
          {
            Plataforma: 'Sitio web',
            'Dónde conseguirla': '[univocalapp.com](https://univocalapp.com/)',
          },
          {
            Plataforma: 'Política de privacidad',
            'Dónde conseguirla': '[Política de privacidad de Univocal](https://univocalapp.com/privacy/)',
          },
          {
            Plataforma: 'Código fuente',
            'Dónde conseguirla': 'No se encontró ningún repositorio de código',
          },
        ],
        note: 'La web solo lista una compilación para Mac. Windows, iOS y Android aparecen únicamente como un formulario de aviso, y los Mac con Intel no son compatibles.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Univocal de un vistazo',
        columns: ['Atributo', 'Univocal'],
        rows: [
          { Atributo: 'Plataforma', Univocal: 'macOS 14+, solo Apple silicon' },
          { Atributo: 'Precio', Univocal: '39 $ únicos; prueba de 14 días' },
          { Atributo: 'Licencia', Univocal: 'Propietaria; sin código fuente' },
          { Atributo: 'Ejecución', Univocal: 'En tu Mac; internet para descargas y comprobaciones' },
          { Atributo: 'Idiomas', Univocal: '32 para dictado y lectura (página de inicio)' },
          { Atributo: 'Transcripción en tiempo real', Univocal: 'Escritura en directo mientras hablas (registro de cambios 0.3.17)' },
          { Atributo: 'Clonación de voz', Univocal: 'No indicado' },
          { Atributo: 'Etiquetas de hablante', Univocal: 'No indicado' },
          { Atributo: 'Servidor de API local', Univocal: 'No indicado; Univocal Connect para apps locales' },
        ],
        note: 'Los atributos siguen las comparaciones de voz a texto y texto a voz del Local LLM Software Directory. Que la web no mencione algo significa desconocido, no no compatible.',
      },
      whatIsUnivocal: {
        id: 'what-is-univocal',
        title: 'Qué es Univocal',
        content: [
          '**Univocal es una utilidad de voz con dos funciones: lectura en voz alta y dictado.** Seleccionas texto y pulsas un atajo para oírlo, o mantienes pulsada una tecla, hablas y la sueltas para que el texto se escriba en el cursor, por ejemplo en un cliente de correo, una nota o un chat.',
          'La publica NarNar Labs LLC. Las páginas del fabricante no nombran a un fundador, un país ni una dirección postal, solo un correo de soporte. Esta reseña cubre las páginas citadas en Fuentes y no incluyó ninguna prueba práctica, así que aquí no se valoran la calidad de la voz, la precisión ni la velocidad.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeros pasos',
        content: [
          '**La configuración consiste en instalar, hacer una descarga en el primer inicio y definir dos atajos.** Los pasos siguen la página de configuración y el registro de cambios del fabricante.',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Abre el .dmg descargado, mueve Univocal a Aplicaciones y empieza la prueba de 14 días; no hace falta tarjeta ni cuenta.',
          },
          {
            title: 'Deja que termine el primer inicio',
            whyItMatters: 'La app descarga unos 1,2 GB de software y modelos de voz. La versión 0.3.11 añadió la opción de empezar a usarla antes de que termine la descarga.',
          },
          {
            title: 'Concede los permisos de macOS',
            whyItMatters: 'Según el fabricante, el dictado necesita permiso de Micrófono y de Accesibilidad, y leer el texto seleccionado necesita permiso de Accesibilidad.',
          },
          {
            title: 'Lee y dicta',
            whyItMatters: 'Selecciona texto y pulsa Option-Shift-R para oírlo, o mantén pulsada la tecla Option derecha y habla. Ambos valores predeterminados se pueden cambiar.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El conjunto de funciones se centra en la lectura y el dictado privados en cualquier app de Mac.** Todo lo siguiente procede de la web, la página de privacidad y el registro de cambios.',
        ],
        items: [
          '**Lectura en voz alta.** El texto seleccionado se lee con resaltado palabra por palabra; si no hay nada seleccionado, lee el último texto copiado. La velocidad llega hasta 4x desde la versión 0.3.16.',
          '**Dictado.** El texto aparece en el cursor, con puntuación, mayúsculas y saltos de párrafo deducidos mientras hablas; escritura en directo desde la versión 0.3.17, desactivada por defecto en las instalaciones nuevas desde la versión 0.3.28.',
          '**32 idiomas.** La lectura y el dictado comparten la lista de idiomas, y el registro de cambios describe el dictado con varios idiomas mezclados.',
          '**Univocal Connect.** Otras apps locales pueden enviar texto para que se lea; se citan un plugin de Obsidian y una extensión de lectura en voz alta para Chrome, Edge, Brave, Vivaldi y Arc.',
          '**Historial.** Los últimos 20 dictados y las últimas 10 lecturas se guardan en el Mac.',
          '**Idiomas de la interfaz.** Inglés, coreano, japonés, chino simplificado, español, alemán y francés.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelos y hardware',
        content: [
          '**El fabricante nombra Kokoro para las voces de lectura y SpeechAnalyzer de Apple para un borrador en directo en macOS 26, pero no nombra su modelo de dictado.** La página de privacidad dice que el software de voz viene de PyPI y los modelos de Hugging Face, unos 1,2 GB en total, y que un motor local escucha en el Mac en 127.0.0.1:8787. Whisper y Parakeet no se mencionan en ninguna de las páginas leídas.',
          'Los requisitos son un Mac con Apple silicon y macOS 14 o posterior. Algunos idiomas de lectura, entre ellos el coreano y el alemán, descargan unos 400 MB más en el primer uso. No se publica ninguna cifra de RAM ni de velocidad o precisión.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad, licencia y coste',
        content: [
          '**La página de privacidad dice que nada de lo que dictas o lees se envía a ningún sitio, y que la app no tiene cuenta, ni analítica ni informes de fallos.** Internet se sigue usando en otros puntos: descargas desde PyPI, Hugging Face y, si el Mac no tiene Python, GitHub; una comprobación de licencia con Lemon Squeezy que envía la clave de licencia y el nombre del Mac; y una comprobación diaria de actualizaciones en el sitio del fabricante. Los informes de incidencias solo se envían cuando pulsas Enviar informe. La web, a diferencia de la app, usa Cloudflare Web Analytics. El código no está publicado y PromptQuorum no examinó el tráfico de red, así que estas afirmaciones son del propio fabricante.',
          'Es un producto de pago y propietario: 39 $ únicos, una licencia para hasta tres Mac, una prueba de 14 días y un reembolso de 30 días. La página de compra también lista un código de lanzamiento y un código de Black Friday, ambos válidos hasta el 30 de noviembre de 2026; consulta la página para ver el precio en el momento de la compra. Las comparaciones del fabricante con otras apps en su propio sitio son afirmaciones suyas y no se verificaron aquí.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Equilibrio: ventajas y limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / advertencia'],
        rows: [
          {
            Ventaja: 'Lectura y dictado en una sola app',
            'Qué significa en el uso real': 'Una instalación, una licencia y un historial en lugar de dos herramientas.',
            'Limitación / advertencia': 'Solo Mac; no hay versión para Intel, Windows ni móvil.',
          },
          {
            Ventaja: 'Procesamiento en tu Mac',
            'Qué significa en el uso real': 'La voz y el texto se quedan en el equipo, según el fabricante.',
            'Limitación / advertencia': 'Código cerrado, así que la afirmación no se puede comprobar; el primer inicio necesita unos 1,2 GB de descargas.',
          },
          {
            Ventaja: 'Precio único',
            'Qué significa en el uso real': '39 $ únicos, hasta tres Mac, sin suscripción.',
            'Limitación / advertencia': 'Los códigos de descuento duran hasta el 30 de noviembre de 2026; después, la página de inicio lista 39 $.',
          },
          {
            Ventaja: '32 idiomas',
            'Qué significa en el uso real': 'Lee y dicta en muchos idiomas, incluido el dictado con idiomas mezclados.',
            'Limitación / advertencia': 'Sin datos de calidad por idioma; el modelo de dictado no se nombra.',
          },
          {
            Ventaja: 'Conexiones con otras apps',
            'Qué significa en el uso real': 'Obsidian y una extensión de navegador pueden enviar texto para leerlo.',
            'Limitación / advertencia': 'Según la página de privacidad, la extensión se ejecuta en todas las páginas web; lee primero sus permisos.',
          },
          {
            Ventaja: 'Versiones frecuentes',
            'Qué significa en el uso real': 'La versión 0.3.33 salió el 11 de noviembre de 2026.',
            'Limitación / advertencia': 'Versión 0.x; la entrada más antigua del registro de cambios es la 0.3.0 del 29 de julio de 2026, así que la app parece joven.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Univocal frente a alternativas',
        content: [
          'Estas son las herramientas de voz más cercanas del directorio: una app gratuita de lectura en voz alta, un estudio gratuito que hace ambas cosas y tres apps de dictado para Mac.',
        ],
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Papel', 'Diferencia clave'],
        rows: [
          {
            App: 'Univocal',
            Plataformas: 'Mac',
            'Precio y licencia': '39 $ únicos, propietaria',
            Papel: 'Lectura en voz alta y dictado',
            'Diferencia clave': 'Ambas tareas en una app de pago para Mac',
          },
          {
            App: '[Parrot](/es/power-local-llm/parrot-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Precio y licencia': 'Gratis, MIT',
            Papel: 'Solo lectura en voz alta',
            'Diferencia clave': 'Gratuita y de código abierto; sin dictado',
          },
          {
            App: '[Voicebox](/es/power-local-llm/voicebox-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Precio y licencia': 'Gratis, MIT',
            Papel: 'Estudio de voz con dictado',
            'Diferencia clave': 'Añade clonación de voz y un servidor MCP',
          },
          {
            App: '[Weesper Neon Flow](/es/power-local-llm/weesper-neon-flow-review)',
            Plataformas: 'Mac, Windows',
            'Precio y licencia': 'Prueba, luego 5 €/mes o 99 € únicos',
            Papel: 'Dictado por atajo',
            'Diferencia clave': 'Whisper en el dispositivo; añade Windows, sin lectura',
          },
          {
            App: '[Sprich](/es/power-local-llm/sprich-review)',
            Plataformas: 'Mac',
            'Precio y licencia': 'Freemium, propietaria',
            Papel: 'Dictado para Mac',
            'Diferencia clave': 'Orientada primero al alemán, con plan gratuito; sin lectura',
          },
          {
            App: '[MacWhisper](/es/power-local-llm/macwhisper-review)',
            Plataformas: 'Mac',
            'Precio y licencia': 'Freemium, propietaria',
            Papel: 'App de transcripción para Mac',
            'Diferencia clave': 'Pensada primero para archivos y reuniones',
          },
        ],
        note: 'Las plataformas, precios y funciones de las apps de terceros cambian con frecuencia. Verifica los detalles actuales en la página de cada proyecto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar Univocal',
        items: [
          '**Usuarios de Mac que escuchan y dictan.** La lectura y el dictado comparten una app y una licencia.',
          '**Personas que evitan los servicios de voz en la nube.** Ambas funciones se ejecutan en el Mac, según el fabricante.',
          '**Usuarios multilingües.** 32 idiomas para lectura y dictado.',
          '**Compradores que prefieren pagar una sola vez.** No se ofrece suscripción.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Univocal',
        items: [
          '**Usuarios de Mac con Intel, Windows, iPhone y Android.** Solo existe una compilación para Mac con Apple silicon.',
          '**Quien necesite software auditable.** No se encontró código fuente y las afirmaciones de privacidad no se pueden inspeccionar.',
          '**Quien quiera software gratuito.** Tras la prueba es de pago; Parrot es gratuita para leer y Voicebox es gratuita para ambas tareas.',
          '**Quien deba trabajar sin ninguna conexión a internet.** El primer inicio necesita unos 1,2 GB de descargas.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona Univocal sin conexión?',
            a: 'La página de compra dice que el dictado funciona sin conexión tras la descarga del primer inicio. La página de privacidad describe la comprobación de licencia como «fail open», por lo que no debería bloquear el uso sin conexión. PromptQuorum no lo probó sin conexión.',
          },
          {
            q: '¿Se envía mi voz a la nube?',
            a: 'La página de privacidad dice que nada de lo que dictas o lees se envía a ningún sitio. En macOS 26, la escritura en directo también usa el reconocimiento de voz en el dispositivo de Apple. El código no está publicado y PromptQuorum no inspeccionó el tráfico de red.',
          },
          {
            q: '¿Qué modelo de voz usa Univocal?',
            a: 'Las páginas nombran las voces de Kokoro para la lectura y voces de Apple en versiones anteriores de macOS, pero no el modelo de dictado. Whisper y Parakeet no se mencionan.',
          },
          {
            q: '¿Puedo usar una licencia en varios Mac?',
            a: 'Sí, hasta tres; según la página de compra, un Mac se puede quitar de la licencia en Ajustes.',
          },
          {
            q: '¿Quién fabrica Univocal?',
            a: 'NarNar Labs LLC. Las páginas no indican su país ni un fundador.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'Univocal encaja bien si tienes un Mac con Apple silicon, quieres texto a voz y dictado en una sola app donde, según el fabricante, todo se ejecuta en tu propio ordenador, y aceptas pagar una vez por software sin código fuente publicado. Tiene una prueba de 14 días, un precio único y una versión muy reciente.',
          'Las advertencias son el alcance y la verificabilidad: sin versión para Intel, Windows ni móvil, sin código publicado, un modelo de dictado sin nombrar y afirmaciones de privacidad que PromptQuorum no pudo comprobar. Usa la prueba antes de comprar.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Univocal](https://univocalapp.com/) — funciones, idiomas y requisitos.',
          '[Descarga y primer inicio](https://univocalapp.com/downloading/) — nombre del archivo instalador y configuración.',
          '[Página de compra](https://univocalapp.com/purchase/) — precio, prueba, licencia y condiciones de reembolso.',
          '[Registro de cambios](https://univocalapp.com/changelog/) — historial de versiones; versión 0.3.33 del 11 de noviembre de 2026.',
          '[Política de privacidad](https://univocalapp.com/privacy/) — tratamiento de datos y servidores de red.',
          '[Página de alternativas](https://univocalapp.com/alternatives/) — atajos, permisos y las comparaciones del propio fabricante.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Herramientas locales de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — texto a voz, voz a texto y agentes de voz lado a lado.',
          '[Reseña de Parrot](/es/power-local-llm/parrot-review) — una app gratuita de lectura en voz alta sin conexión para tres sistemas de escritorio.',
          '[Reseña de Voicebox](/es/power-local-llm/voicebox-review) — un estudio de voz gratuito con dictado y clonación de voz.',
          '[Reseña de Weesper Neon Flow](/es/power-local-llm/weesper-neon-flow-review) — dictado sin conexión de pago para Mac y Windows.',
          '[Mejor texto a voz local en Mac](/es/power-local-llm/best-local-tts-mac) — opciones de lectura en voz alta para Apple silicon.',
          '[El Local LLM Software Directory completo](/es/directory) — un directorio más amplio de herramientas de IA local para todas las plataformas.',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/univocal-review-hero-pt.webp',
    title: 'Análise do Univocal: leitura em voz alta e ditado no seu Mac',
    seoTitle: 'Análise do Univocal: leitura em voz alta e ditado no Mac',
    intro: 'O Univocal é um app pago para Mac que faz dois trabalhos com uma só instalação: lê em voz alta o texto selecionado e digita o que você dita no app em que estiver o cursor. O fabricante afirma que os dois funcionam no seu próprio Mac com Apple silicon. Esta análise resume o que o site, o changelog e a política de privacidade do fabricante documentam, o que eles deixam de dizer e como o Univocal se compara a outras ferramentas de voz do diretório.',
    metaDescription: 'Análise do Univocal: app de Mac para leitura em voz alta e ditado, local segundo o fabricante. $39 únicos, teste de 14 dias. Só Apple silicon. Não testado.',
    twitterDescription: 'Análise do Univocal: um app de Mac para ler texto em voz alta e ditar, processado no seu próprio Mac segundo o fabricante. Preço, privacidade, limites e alternativas.',
    audience: 'Usuários de Mac que querem texto para voz e ditado em um só app, sem serviço na nuvem nem assinatura — cobre preço, instalação, privacidade, limites e alternativas.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Univocal review',
    targetKeywords: [
      'análise univocal',
      'univocal app mac',
      'leitura em voz alta e ditado no mac',
      'texto para voz local no mac',
      'ditado offline mac apple silicon',
      'voz para texto privado no mac',
      'texto para voz e voz para texto em um só app',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
    ],
    leadAnswerBlock: '**O Univocal é um app para Mac sem código-fonte publicado que lê em voz alta o texto selecionado e digita o seu ditado, e o fabricante afirma que os dois funcionam no seu próprio Mac com Apple silicon, sem enviar nada para lugar nenhum.** Custa $39 únicos após um teste grátis de 14 dias, sem assinatura. A versão mais recente é a 0.3.33, de 11 de novembro de 2026. Esta análise se baseia no site público, no changelog e na política de privacidade do fabricante, não em um teste prático.',
    quickAnswerTop: {
      pt: {
        question: 'O Univocal é um app local de leitura em voz alta e ditado?',
        answer: 'Segundo o fabricante, sim: os dois sentidos funcionam no seu Mac, e nada do que você dita ou lê é enviado para lugar nenhum. A primeira abertura ainda baixa cerca de 1.2 GB de software de fala e modelos, e as verificações de licença e de atualização usam a internet. O código não é publicado e o PromptQuorum não inspecionou o tráfego de rede, então a afirmação é do próprio fabricante.',
        bullets: [
          'Selecione o texto e pressione Option-Shift-R para ouvi-lo; segure a tecla Option direita para ditar. Os dois atalhos podem ser alterados.',
          'Preço: $39 únicos, uma licença para até três Macs, teste de 14 dias sem cartão nem conta e reembolso de 30 dias.',
          'O site cita as vozes Kokoro e, no macOS 26, o reconhecimento de fala no aparelho da Apple para a digitação ao vivo, mas não o modelo de ditado.',
          'Apenas Macs com Apple silicon e macOS 14 ou mais recente; sem versão para Intel, Windows, iPhone ou Android.',
          'O Univocal Connect permite que outros apps locais enviem texto para leitura; há um plugin do Obsidian e uma extensão para navegadores Chromium na lista.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Obter o Univocal', anchor: 'get-it' },
      { label: 'Univocal em resumo', anchor: 'at-a-glance' },
      { label: 'O que é o Univocal', anchor: 'what-is-univocal' },
      { label: 'Primeiros passos', anchor: 'how-to-get-started' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Modelos e hardware', anchor: 'models-hardware' },
      { label: 'Privacidade, licença e custo', anchor: 'privacy' },
      { label: 'Prós e contras', anchor: 'tradeoffs' },
      { label: 'Univocal e as alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem o Univocal serve', anchor: 'who-should-use' },
      { label: 'Para quem o Univocal não serve', anchor: 'who-should-not-use' },
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
            text: 'O Univocal é um app pago para Mac que reúne texto para voz e ditado e, segundo o fabricante, processa os dois no seu próprio Mac em vez de em um serviço na nuvem.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em duas teclas do seu teclado: uma faz o Mac ler o que você selecionou, a outra transforma o que você fala em texto digitado, e o fabricante diz que nenhuma das duas envia sua voz ou seu texto para fora.',
          },
        ],
        items: [
          'Afirmação de uso local: os dois sentidos funcionam no Mac; o download da primeira abertura, as verificações de licença e as verificações diárias de atualização ainda usam a internet.',
          'Licença e fabricante: proprietário, publicado pela NarNar Labs LLC; nenhum repositório de código-fonte foi encontrado e o país do fabricante não é informado.',
          'Preço: $39 únicos com teste de 14 dias; o fabricante também lista códigos de desconto por tempo limitado.',
          'Manutenção: a versão 0.3.33 saiu em 11 de novembro de 2026, então o projeto recebe atualizações ativamente.',
          'Lacunas: apenas Apple silicon e macOS 14 ou mais recente, nenhum modelo de ditado citado e nada nas páginas sobre assinatura de código.',
        ],
      },
      getItUnivocal: {
        id: 'get-it',
        title: 'Obter o Univocal',
        content: [
          '**O Univocal é instalado como qualquer app de Mac, sem precisar de terminal.** O link oficial de download entrega uma imagem de disco, e os modelos de fala são baixados na primeira abertura.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            Plataforma: 'Mac',
            'Onde obter': '[Baixar para Mac](https://univocalapp.com/download) — .dmg, Apple silicon, macOS 14 ou mais recente',
          },
          {
            Plataforma: 'Teste grátis (14 dias)',
            'Onde obter': '[Página de compra](https://univocalapp.com/purchase/) — produto completo, sem cartão, sem conta',
          },
          {
            Plataforma: 'Guia de configuração',
            'Onde obter': '[Download e primeira abertura](https://univocalapp.com/downloading/)',
          },
          {
            Plataforma: 'Notas de versão',
            'Onde obter': '[Changelog](https://univocalapp.com/changelog/)',
          },
          {
            Plataforma: 'Site',
            'Onde obter': '[univocalapp.com](https://univocalapp.com/)',
          },
          {
            Plataforma: 'Política de privacidade',
            'Onde obter': '[Política de privacidade do Univocal](https://univocalapp.com/privacy/)',
          },
          {
            Plataforma: 'Código-fonte',
            'Onde obter': 'Nenhum repositório de código-fonte encontrado',
          },
        ],
        note: 'O site lista apenas uma versão para Mac. Windows, iOS e Android aparecem somente como um formulário de aviso, e Macs com Intel não são compatíveis.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Univocal em resumo',
        columns: ['Atributo', 'Univocal'],
        rows: [
          { Atributo: 'Plataforma', Univocal: 'macOS 14+, somente Apple silicon' },
          { Atributo: 'Preço', Univocal: '$39 únicos; teste de 14 dias' },
          { Atributo: 'Licença', Univocal: 'Proprietária; sem código-fonte encontrado' },
          { Atributo: 'Execução', Univocal: 'No seu Mac; internet para downloads e verificações' },
          { Atributo: 'Idiomas', Univocal: '32 para ditado e leitura (página inicial)' },
          { Atributo: 'Transcrição em tempo real', Univocal: 'Digitação ao vivo enquanto você fala (changelog 0.3.17)' },
          { Atributo: 'Clonagem de voz', Univocal: 'Não informado' },
          { Atributo: 'Identificação de falantes', Univocal: 'Não informado' },
          { Atributo: 'Servidor de API local', Univocal: 'Não informado; Univocal Connect para apps locais' },
        ],
        note: 'Os atributos seguem as comparações de voz para texto e texto para voz usadas no Diretório de Software de LLM Local. Uma informação ausente no site significa desconhecido, não sem suporte.',
      },
      whatIsUnivocal: {
        id: 'what-is-univocal',
        title: 'O que é o Univocal',
        content: [
          '**O Univocal é um utilitário de voz com duas funções: leitura em voz alta e ditado.** Você seleciona um texto e pressiona um atalho para ouvi-lo, ou segura uma tecla, fala e solta para que o texto seja digitado no cursor, por exemplo em um cliente de e-mail, em uma nota ou em um chat.',
          'Ele é publicado pela NarNar Labs LLC. As páginas do fabricante não citam um fundador, um país nem um endereço postal, apenas um e-mail de suporte. Esta análise cobre as páginas listadas em Fontes e não envolveu teste prático, então qualidade da voz, precisão e velocidade não são avaliadas aqui.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeiros passos',
        content: [
          '**A configuração é uma instalação, um download na primeira abertura e dois atalhos.** Os passos seguem a página de configuração e o changelog do fabricante.',
        ],
        numberedItems: [
          {
            title: 'Instale o app',
            whyItMatters: 'Abra o .dmg baixado, mova o Univocal para Aplicativos e inicie o teste de 14 dias; não é preciso cartão nem conta.',
          },
          {
            title: 'Deixe a primeira abertura terminar',
            whyItMatters: 'O app baixa cerca de 1.2 GB de software de fala e modelos. A versão 0.3.11 acrescentou a opção de começar a usá-lo antes de o download terminar.',
          },
          {
            title: 'Conceda as permissões do macOS',
            whyItMatters: 'O ditado exige permissão de Microfone e de Acessibilidade, e a leitura do texto selecionado exige permissão de Acessibilidade, segundo o fabricante.',
          },
          {
            title: 'Leia e dite',
            whyItMatters: 'Selecione o texto e pressione Option-Shift-R para ouvi-lo, ou segure a tecla Option direita e fale. Os dois padrões podem ser alterados.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O conjunto de recursos gira em torno de leitura e ditado privados em qualquer app do Mac.** Tudo abaixo vem do site, da página de privacidade e do changelog.',
        ],
        items: [
          '**Leitura em voz alta.** O texto selecionado é lido com destaque palavra por palavra; sem seleção, ele lê o último texto copiado. A velocidade chega a 4x desde a versão 0.3.16.',
          '**Ditado.** O texto aparece no cursor, com pontuação, capitalização e quebras de parágrafo inferidas enquanto você fala; digitação ao vivo desde a versão 0.3.17, desativada por padrão em novas instalações a partir da versão 0.3.28.',
          '**32 idiomas.** A leitura e o ditado compartilham a lista de idiomas, e o changelog descreve o ditado com idiomas misturados.',
          '**Univocal Connect.** Outros apps locais podem enviar texto para ser lido; há um plugin do Obsidian e uma extensão de leitura em voz alta para Chrome, Edge, Brave, Vivaldi e Arc na lista.',
          '**Histórico.** Os últimos 20 ditados e as últimas 10 leituras ficam guardados no Mac.',
          '**Idiomas da interface.** Inglês, coreano, japonês, chinês simplificado, espanhol, alemão e francês.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelos e hardware',
        content: [
          '**O fabricante cita o Kokoro para as vozes de leitura e o SpeechAnalyzer da Apple para um rascunho ao vivo no macOS 26, mas não cita o modelo de ditado.** A página de privacidade diz que o software de fala vem do PyPI e os modelos do Hugging Face, cerca de 1.2 GB no total, e que um mecanismo local escuta no Mac em 127.0.0.1:8787. Whisper e Parakeet não são mencionados em nenhuma página lida.',
          'Os requisitos são um Mac com Apple silicon e macOS 14 ou mais recente. Alguns idiomas de leitura, entre eles coreano e alemão, baixam cerca de 400 MB a mais no primeiro uso. Nenhum valor de RAM e nenhum número de velocidade ou precisão são publicados.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade, licença e custo',
        content: [
          '**A página de privacidade diz que nada do que você dita ou lê é enviado para lugar nenhum e que o app não tem conta, análises nem relatório de falhas.** A internet ainda entra em outros pontos: downloads do PyPI, do Hugging Face e, se o Mac não tiver Python, do GitHub; uma verificação de licença com o Lemon Squeezy que envia a chave de licença e o nome do Mac; e uma verificação diária de atualização no site do fabricante. Relatórios de problemas só são enviados quando você pressiona Enviar relatório. O site, ao contrário do app, usa o Cloudflare Web Analytics. O código não é publicado e o PromptQuorum não examinou o tráfego de rede, então essas afirmações são do próprio fabricante.',
          'É um produto pago e proprietário: $39 únicos, uma licença para até três Macs, teste de 14 dias e reembolso de 30 dias. A página de compra também lista um código de lançamento e um código de Black Friday, ambos válidos até 30 de novembro de 2026; confira a página para saber o preço no momento da compra. As comparações do fabricante com outros apps no próprio site são afirmações do fabricante e não foram verificadas aqui.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras',
        columns: ['Vantagem', 'O que significa na prática', 'Limitação / ressalva'],
        rows: [
          {
            Vantagem: 'Leitura e ditado em um só app',
            'O que significa na prática': 'Uma instalação, uma licença e um histórico em vez de duas ferramentas.',
            'Limitação / ressalva': 'Apenas Mac; sem versão para Intel, Windows ou celular.',
          },
          {
            Vantagem: 'Processamento no seu Mac',
            'O que significa na prática': 'Fala e texto ficam na máquina, segundo o fabricante.',
            'Limitação / ressalva': 'Código fechado, então a afirmação não pode ser verificada; a primeira abertura exige cerca de 1.2 GB de downloads.',
          },
          {
            Vantagem: 'Preço único',
            'O que significa na prática': '$39 únicos, até três Macs, sem assinatura.',
            'Limitação / ressalva': 'Os códigos de desconto valem até 30 de novembro de 2026; depois disso, a página inicial lista $39.',
          },
          {
            Vantagem: '32 idiomas',
            'O que significa na prática': 'Leia e dite em muitos idiomas, inclusive com idiomas misturados no ditado.',
            'Limitação / ressalva': 'Sem dados de qualidade por idioma; o modelo de ditado não é citado.',
          },
          {
            Vantagem: 'Conexões com outros apps',
            'O que significa na prática': 'O Obsidian e uma extensão de navegador podem enviar texto para leitura.',
            'Limitação / ressalva': 'Segundo a página de privacidade, a extensão roda em todas as páginas da web; leia as permissões antes.',
          },
          {
            Vantagem: 'Versões frequentes',
            'O que significa na prática': 'A versão 0.3.33 saiu em 11 de novembro de 2026.',
            'Limitação / ressalva': 'Versão 0.x; a entrada mais antiga do changelog é a 0.3.0, de 29 de julho de 2026, então o app parece jovem.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Univocal e as alternativas',
        content: [
          'Estas são as ferramentas de voz mais próximas do diretório: um app gratuito de leitura em voz alta, um estúdio gratuito que faz os dois trabalhos e três apps de ditado para Mac.',
        ],
        columns: ['App', 'Plataformas', 'Preço e licença', 'Função', 'Diferença principal'],
        rows: [
          {
            App: 'Univocal',
            Plataformas: 'Mac',
            'Preço e licença': '$39 únicos, proprietário',
            Função: 'Leitura em voz alta e ditado',
            'Diferença principal': 'Os dois trabalhos em um app pago para Mac',
          },
          {
            App: '[Parrot](/pt/power-local-llm/parrot-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Preço e licença': 'Grátis, MIT',
            Função: 'Somente leitura em voz alta',
            'Diferença principal': 'Gratuito e de código aberto; sem ditado',
          },
          {
            App: '[Voicebox](/pt/power-local-llm/voicebox-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Preço e licença': 'Grátis, MIT',
            Função: 'Estúdio de voz com ditado',
            'Diferença principal': 'Acrescenta clonagem de voz e um servidor MCP',
          },
          {
            App: '[Weesper Neon Flow](/pt/power-local-llm/weesper-neon-flow-review)',
            Plataformas: 'Mac, Windows',
            'Preço e licença': 'Teste, depois 5 EUR/mês ou 99 EUR únicos',
            Função: 'Ditado por atalho',
            'Diferença principal': 'Whisper no aparelho; inclui Windows, sem leitura',
          },
          {
            App: '[Sprich](/pt/power-local-llm/sprich-review)',
            Plataformas: 'Mac',
            'Preço e licença': 'Freemium, proprietário',
            Função: 'Ditado para Mac',
            'Diferença principal': 'Voltado primeiro ao alemão, com plano grátis; sem leitura',
          },
          {
            App: '[MacWhisper](/pt/power-local-llm/macwhisper-review)',
            Plataformas: 'Mac',
            'Preço e licença': 'Freemium, proprietário',
            Função: 'App de transcrição para Mac',
            'Diferença principal': 'Feito primeiro para arquivos e reuniões',
          },
        ],
        note: 'Plataformas, preços e recursos de apps de terceiros mudam com frequência. Confira os dados atuais na página de cada projeto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o Univocal serve',
        items: [
          '**Usuários de Mac que ouvem e ditam.** Leitura e ditado compartilham um app e uma licença.',
          '**Quem evita serviços de voz na nuvem.** As duas funções rodam no Mac, segundo o fabricante.',
          '**Usuários multilíngues.** 32 idiomas para leitura e ditado.',
          '**Quem prefere pagar uma vez.** Não há assinatura.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o Univocal não serve',
        items: [
          '**Usuários de Mac com Intel, Windows, iPhone e Android.** Existe apenas uma versão para Mac com Apple silicon.',
          '**Quem precisa de software auditável.** Nenhum código-fonte foi encontrado e as afirmações de privacidade não podem ser inspecionadas.',
          '**Quem quer software gratuito.** Após o teste, o uso é pago; o Parrot é gratuito para leitura e o Voicebox é gratuito para os dois.',
          '**Quem precisa trabalhar sem nenhuma internet.** A primeira abertura exige cerca de 1.2 GB de downloads.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Univocal funciona offline?',
            a: 'A página de compra diz que o ditado funciona offline após o download da primeira abertura. A página de privacidade descreve a verificação de licença como falhando de forma aberta, então ela não deveria bloquear o uso offline. O PromptQuorum não testou o app offline.',
          },
          {
            q: 'Minha voz é enviada para a nuvem?',
            a: 'A página de privacidade diz que nada do que você dita ou lê é enviado para lugar nenhum. No macOS 26, a digitação ao vivo também usa o reconhecimento de fala no aparelho da Apple. O código não é publicado e o PromptQuorum não inspecionou o tráfego de rede.',
          },
          {
            q: 'Qual modelo de fala o Univocal usa?',
            a: 'As páginas citam as vozes Kokoro para leitura e vozes da Apple em versões mais antigas do macOS, mas não o modelo de ditado. Whisper e Parakeet não são mencionados.',
          },
          {
            q: 'Posso usar uma licença em vários Macs?',
            a: 'Sim, até três; um Mac pode ser removido da licença em Configurações, segundo a página de compra.',
          },
          {
            q: 'Quem faz o Univocal?',
            a: 'A NarNar Labs LLC. As páginas não informam o país nem um fundador.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O Univocal serve bem se você tem um Mac com Apple silicon, quer texto para voz e ditado em um só app em que, segundo o fabricante, tudo roda no seu próprio computador, e aceita pagar uma vez por um software sem código-fonte publicado. Ele tem teste de 14 dias, preço único e uma versão bem recente.',
          'As ressalvas são o alcance e a verificabilidade: sem versão para Intel, Windows ou celular, sem código publicado, um modelo de ditado não citado e afirmações de privacidade que o PromptQuorum não pôde verificar. Use o teste antes de comprar.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Univocal](https://univocalapp.com/) — recursos, idiomas e requisitos.',
          '[Download e primeira abertura](https://univocalapp.com/downloading/) — nome do arquivo do instalador e configuração.',
          '[Página de compra](https://univocalapp.com/purchase/) — preço, teste, licença e condições de reembolso.',
          '[Changelog](https://univocalapp.com/changelog/) — histórico de versões; versão 0.3.33 datada de 11 de novembro de 2026.',
          '[Política de privacidade](https://univocalapp.com/privacy/) — tratamento de dados e hosts de rede.',
          '[Página de alternativas](https://univocalapp.com/alternatives/) — atalhos, permissões e as comparações do próprio fabricante.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Ferramentas locais de voz e fala comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — texto para voz, voz para texto e agentes de voz lado a lado.',
          '[Análise do Parrot](/pt/power-local-llm/parrot-review) — um app gratuito de leitura em voz alta offline para três sistemas de desktop.',
          '[Análise do Voicebox](/pt/power-local-llm/voicebox-review) — um estúdio de voz gratuito com ditado e clonagem de voz.',
          '[Análise do Weesper Neon Flow](/pt/power-local-llm/weesper-neon-flow-review) — ditado offline pago para Mac e Windows.',
          '[Melhor texto para voz local no Mac](/pt/power-local-llm/best-local-tts-mac) — opções de leitura em voz alta para Apple silicon.',
          '[O diretório completo de software de LLM local](/pt/directory) — um diretório mais amplo de ferramentas de IA local em várias plataformas.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/univocal-review-hero-ar.webp',
    title: 'مراجعة Univocal: القراءة الصوتية والإملاء على جهاز Mac',
    seoTitle: 'مراجعة Univocal: تطبيق قراءة صوتية وإملاء لأجهزة Mac',
    intro: 'Univocal تطبيق مدفوع لأجهزة Mac يؤدي مهمتين بتثبيت واحد: يقرأ النص المحدد بصوت مسموع، ويكتب ما تمليه في أي تطبيق يوجد فيه المؤشر. ويقول مطوّره إن الوظيفتين تعملان على جهاز Mac لديك الذي يعمل بمعالج Apple silicon. تلخّص هذه المراجعة ما يوثّقه موقع المطوّر وسجل التغييرات وسياسة الخصوصية، وما تتركه دون ذكر، وكيف يقارن Univocal بأدوات الصوت الأخرى في الدليل.',
    metaDescription: 'مراجعة Univocal: تطبيق قراءة صوتية وإملاء لأجهزة Mac يعمل على جهازك بحسب مطوّره. سعره $39 لمرة واحدة بعد تجربة 14 يومًا. لـ Apple silicon فقط. لم يُختبر.',
    twitterDescription: 'مراجعة Univocal: تطبيق واحد لأجهزة Mac للقراءة الصوتية والإملاء، تتم معالجتهما على جهازك بحسب مطوّره. السعر والخصوصية والحدود والبدائل.',
    audience: 'مستخدمو Mac الذين يريدون تحويل النص إلى كلام والإملاء في تطبيق واحد دون خدمة سحابية أو اشتراك — يغطي السعر والتثبيت والخصوصية والحدود والبدائل.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Univocal review',
    targetKeywords: [
      'مراجعة univocal',
      'تطبيق univocal لأجهزة mac',
      'قراءة صوتية وإملاء على mac',
      'تحويل النص إلى كلام محلي على mac',
      'إملاء دون اتصال على mac بمعالج apple silicon',
      'تحويل الكلام إلى نص بخصوصية على mac',
      'تحويل النص إلى كلام والكلام إلى نص في تطبيق واحد',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
    ],
    leadAnswerBlock: '**Univocal تطبيق لأجهزة Mac دون شيفرة مصدرية منشورة يقرأ النص المحدد بصوت مسموع ويكتب ما تمليه، ويقول مطوّره إن الوظيفتين تعملان على جهاز Mac لديك بمعالج Apple silicon دون إرسال أي شيء إلى أي جهة.** يكلّف $39 لمرة واحدة بعد تجربة مجانية لمدة 14 يومًا، دون اشتراك. وأحدث إصدار هو 0.3.33 الصادر في 11 نوفمبر 2026. تعتمد هذه المراجعة على الموقع العام للمطوّر وسجل التغييرات وسياسة الخصوصية، وليس على اختبار عملي.',
    quickAnswerTop: {
      ar: {
        question: 'هل Univocal تطبيق محلي للقراءة الصوتية والإملاء؟',
        answer: 'بحسب مطوّره نعم: يعمل الاتجاهان على جهاز Mac لديك، ولا يُرسل أي شيء تمليه أو تقرؤه إلى أي مكان. ويُنزّل التشغيل الأول مع ذلك نحو 1.2 GB من برمجيات الكلام والنماذج، ويستخدم فحص الترخيص والتحديثات الإنترنت. الشيفرة غير منشورة ولم تفحص PromptQuorum حركة الشبكة، لذا فالادعاء من المطوّر نفسه.',
        bullets: [
          'حدّد نصًا واضغط على Option-Shift-R لسماعه؛ واضغط مطولًا على مفتاح Option الأيمن للإملاء. ويمكن تغيير الاختصارين.',
          'الأسعار: $39 لمرة واحدة، وترخيص واحد لما يصل إلى ثلاثة أجهزة Mac، وتجربة 14 يومًا دون بطاقة أو حساب، واسترداد خلال 30 يومًا.',
          'يذكر الموقع أصوات Kokoro، وعلى macOS 26 التعرف على الكلام من Apple على الجهاز للكتابة الفورية، لكنه لا يذكر نموذج الإملاء.',
          'أجهزة Mac بمعالج Apple silicon مع macOS 14 أو أحدث فقط؛ لا نسخة لنظام Intel أو Windows أو iPhone أو Android.',
          'يتيح Univocal Connect لتطبيقات محلية أخرى إرسال النص ليُقرأ؛ وتُذكر إضافة لـ Obsidian وملحق لمتصفحات Chromium.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      {
        label: 'الإجابة السريعة',
        anchor: 'quick-answer',
      },
      {
        label: 'الحصول على Univocal',
        anchor: 'get-it',
      },
      {
        label: 'Univocal في لمحة',
        anchor: 'at-a-glance',
      },
      {
        label: 'ما هو Univocal',
        anchor: 'what-is-univocal',
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
        label: 'Univocal مقابل البدائل',
        anchor: 'vs-alternatives',
      },
      {
        label: 'لمن يناسب Univocal',
        anchor: 'who-should-use',
      },
      {
        label: 'لمن لا يناسب Univocal',
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
            text: 'Univocal تطبيق مدفوع لأجهزة Mac يجمع بين تحويل النص إلى كلام والإملاء، ويعالج الاثنين على جهاز Mac لديك بدل خدمة سحابية، بحسب مطوّره.',
          },
          {
            type: 'plain-terms',
            text: 'فكّر في مفتاحين على لوحة المفاتيح: أحدهما يجعل Mac يقرأ ما حددته، والآخر يحوّل ما تقوله إلى نص مكتوب، ويقول المطوّر إن أيًّا منهما لا يرسل صوتك أو نصك بعيدًا.',
          },
        ],
        items: [
          'الادعاء المحلي: يعمل الاتجاهان على جهاز Mac؛ ويظل الإنترنت مستخدمًا في التنزيل عند التشغيل الأول وفحوص الترخيص وفحص التحديثات اليومي.',
          'الترخيص والمطوّر: مملوك، وتنشره NarNar Labs LLC؛ لم يُعثر على مستودع للشيفرة المصدرية، ولا يُذكر بلد المطوّر.',
          'السعر: $39 لمرة واحدة مع تجربة لمدة 14 يومًا؛ ويدرج المطوّر أيضًا رموز خصم محدودة المدة.',
          'الصيانة: صدر الإصدار 0.3.33 في 11 نوفمبر 2026، فالمشروع يُحدَّث بنشاط.',
          'الثغرات: Apple silicon وmacOS 14 أو أحدث فقط، ولا نموذج إملاء مذكور بالاسم، ولا شيء في الصفحات عن توقيع الشيفرة.',
        ],
      },
      getItUnivocal: {
        id: 'get-it',
        title: 'الحصول على Univocal',
        content: [
          '**يُثبَّت Univocal مثل أي تطبيق لنظام Mac، ولا حاجة إلى الطرفية.** يقدّم رابط التنزيل الرسمي صورة قرص، وتُجلب نماذج الكلام عند التشغيل الأول.',
        ],
        columns: [
          'المنصة',
          'مصدر الحصول',
        ],
        rows: [
          {
            'المنصة': 'Mac',
            'مصدر الحصول': '[التنزيل لـ Mac](https://univocalapp.com/download) — ملف .dmg، Apple silicon، macOS 14 أو أحدث',
          },
          {
            'المنصة': 'تجربة مجانية (14 يومًا)',
            'مصدر الحصول': '[صفحة الشراء](https://univocalapp.com/purchase/) — المنتج كاملًا، دون بطاقة ودون حساب',
          },
          {
            'المنصة': 'دليل الإعداد',
            'مصدر الحصول': '[التنزيل والتشغيل الأول](https://univocalapp.com/downloading/)',
          },
          {
            'المنصة': 'ملاحظات الإصدار',
            'مصدر الحصول': '[سجل التغييرات](https://univocalapp.com/changelog/)',
          },
          {
            'المنصة': 'الموقع',
            'مصدر الحصول': '[univocalapp.com](https://univocalapp.com/)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مصدر الحصول': '[سياسة خصوصية Univocal](https://univocalapp.com/privacy/)',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'مصدر الحصول': 'لم يُعثر على مستودع للشيفرة المصدرية',
          },
        ],
        note: 'يعرض الموقع نسخة Mac فقط. أما Windows وiOS وAndroid فتظهر فقط في نموذج «أبلغني»، ولا تُدعم أجهزة Mac بمعالج Intel.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Univocal في لمحة',
        columns: [
          'الخاصية',
          'Univocal',
        ],
        rows: [
          {
            'الخاصية': 'المنصة',
            'Univocal': 'macOS 14+، Apple silicon فقط',
          },
          {
            'الخاصية': 'السعر',
            'Univocal': '$39 لمرة واحدة؛ تجربة 14 يومًا',
          },
          {
            'الخاصية': 'الترخيص',
            'Univocal': 'مملوك؛ لم يُعثر على الشيفرة المصدرية',
          },
          {
            'الخاصية': 'مكان التشغيل',
            'Univocal': 'على جهاز Mac لديك؛ إنترنت للتنزيلات والفحوص',
          },
          {
            'الخاصية': 'اللغات',
            'Univocal': '32 للإملاء والقراءة (الصفحة الرئيسية)',
          },
          {
            'الخاصية': 'التحويل الفوري',
            'Univocal': 'كتابة فورية أثناء التحدث (سجل التغييرات 0.3.17)',
          },
          {
            'الخاصية': 'استنساخ الأصوات',
            'Univocal': 'غير مذكور',
          },
          {
            'الخاصية': 'تمييز المتحدثين',
            'Univocal': 'غير مذكور',
          },
          {
            'الخاصية': 'خادم API محلي',
            'Univocal': 'غير مذكور؛ Univocal Connect للتطبيقات المحلية',
          },
        ],
        note: 'تتبع الخصائص مقارنتي تحويل الكلام إلى نص وتحويل النص إلى كلام المستخدمتين في Local LLM Software Directory. غياب الذكر في الموقع يعني غير معروف، لا غير مدعوم.',
      },
      whatIsUnivocal: {
        id: 'what-is-univocal',
        title: 'ما هو Univocal',
        content: [
          '**Univocal أداة صوتية بوظيفتين: القراءة الصوتية والإملاء.** تحدد نصًا وتضغط على اختصار لسماعه، أو تضغط مطولًا على مفتاح وتتحدث ثم تتركه ليُكتب النص عند المؤشر، مثلًا في برنامج بريد أو ملاحظة أو دردشة.',
          'تنشره NarNar Labs LLC. ولا تذكر صفحات المطوّر مؤسسًا ولا بلدًا ولا عنوانًا بريديًا، بل بريدًا إلكترونيًا للدعم فقط. تغطي هذه المراجعة الصفحات المدرجة تحت «المصادر» ولم يُجرَ فيها اختبار عملي، لذا لا تُقيَّم هنا جودة الصوت والدقة والسرعة.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'البدء',
        content: [
          '**الإعداد هو تثبيت وتنزيل عند التشغيل الأول واختصاران.** تتبع الخطوات صفحة الإعداد وسجل التغييرات لدى المطوّر.',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'افتح ملف .dmg الذي نزّلته، وانقل Univocal إلى مجلد التطبيقات، وابدأ التجربة لمدة 14 يومًا؛ ولا حاجة إلى بطاقة ولا حساب.',
          },
          {
            title: 'دع التشغيل الأول ينتهي',
            whyItMatters: 'ينزّل التطبيق نحو 1.2 GB من برمجيات الكلام والنماذج. وأضاف الإصدار 0.3.11 خيار بدء الاستخدام قبل اكتمال التنزيل.',
          },
          {
            title: 'امنح أذونات macOS',
            whyItMatters: 'يحتاج الإملاء إلى إذن الميكروفون وإذن إمكانية الوصول، وتحتاج قراءة النص المحدد إلى إذن إمكانية الوصول، بحسب المطوّر.',
          },
          {
            title: 'اقرأ وأمل',
            whyItMatters: 'حدّد نصًا واضغط على Option-Shift-R لسماعه، أو اضغط مطولًا على مفتاح Option الأيمن وتحدث. ويمكن تغيير الاختصارين الافتراضيين.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**تتمحور الميزات حول قراءة وإملاء خاصين في أي تطبيق على Mac.** كل ما يلي مصدره الموقع وصفحة الخصوصية وسجل التغييرات.',
        ],
        items: [
          '**القراءة الصوتية.** يُقرأ النص المحدد مع تمييز الكلمة تلو الأخرى؛ وإن لم يكن هناك تحديد فيقرأ آخر نص نُسخ. وتصل السرعة إلى 4 أضعاف منذ الإصدار 0.3.16.',
          '**الإملاء.** يظهر النص عند المؤشر، مع استنتاج الترقيم والأحرف الكبيرة وفواصل الفقرات أثناء حديثك؛ والكتابة الفورية موجودة منذ الإصدار 0.3.17، وهي معطّلة افتراضيًا للتثبيتات الجديدة منذ الإصدار 0.3.28.',
          '**32 لغة.** تشترك القراءة والإملاء في قائمة اللغات نفسها، ويصف سجل التغييرات الإملاء بلغات مختلطة.',
          '**Univocal Connect.** يمكن لتطبيقات محلية أخرى إرسال النص ليُقرأ؛ وتُذكر إضافة لـ Obsidian وملحق قراءة صوتية لمتصفحات Chrome وEdge وBrave وVivaldi وArc.',
          '**السجل.** يُحتفظ على جهاز Mac بآخر 20 عملية إملاء وآخر 10 عمليات قراءة.',
          '**لغات الواجهة.** الإنجليزية والكورية واليابانية والصينية المبسطة والإسبانية والألمانية والفرنسية.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'النماذج والعتاد',
        content: [
          '**يذكر المطوّر Kokoro لأصوات القراءة وSpeechAnalyzer من Apple للمسودة الفورية على macOS 26، لكنه لا يذكر اسم نموذج الإملاء.** تقول صفحة الخصوصية إن برمجيات الكلام تأتي من PyPI والنماذج من Hugging Face، بنحو 1.2 GB إجمالًا، وإن محركًا محليًا يستمع على جهاز Mac عند العنوان 127.0.0.1:8787. ولم يرد ذكر Whisper ولا Parakeet في أي صفحة قُرئت.',
          'المتطلبات هي جهاز Mac بمعالج Apple silicon مع macOS 14 أو أحدث. وتجلب بعض لغات القراءة، ومنها الكورية والألمانية، نحو 400 MB إضافية عند أول استخدام. ولا تُنشر أرقام للذاكرة ولا للسرعة أو الدقة.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والترخيص والتكلفة',
        content: [
          '**تقول صفحة الخصوصية إن شيئًا مما تمليه أو تقرؤه لا يُرسل إلى أي مكان، وإن التطبيق بلا حساب ولا تحليلات ولا تقارير أعطال.** ويظل الإنترنت مستخدمًا في جوانب أخرى: تنزيلات من PyPI وHugging Face، ومن GitHub إن لم يكن لدى Mac بيئة Python؛ وفحص ترخيص عبر Lemon Squeezy يرسل مفتاح الترخيص واسم جهاز Mac؛ وفحص تحديثات يومي مع موقع المطوّر. ولا تُرسل تقارير المشكلات إلا عند الضغط على «إرسال التقرير». أما الموقع، بخلاف التطبيق، فيستخدم Cloudflare Web Analytics. الشيفرة غير منشورة ولم تفحص PromptQuorum حركة الشبكة، لذا فهذه الأقوال من المطوّر نفسه.',
          'هو منتج مدفوع ومملوك: $39 لمرة واحدة، وترخيص واحد لما يصل إلى ثلاثة أجهزة Mac، وتجربة 14 يومًا، واسترداد خلال 30 يومًا. وتدرج صفحة الشراء أيضًا رمز إطلاق ورمز Black Friday، كلاهما صالح حتى 30 نوفمبر 2026؛ فتحقق من الصفحة لمعرفة السعر وقت الشراء. أما مقارنات المطوّر مع تطبيقات أخرى على موقعه فهي ادعاءات من المطوّر ولم يُتحقق منها هنا.',
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
            'الميزة': 'القراءة والإملاء في تطبيق واحد',
            'ما تعنيه في الاستخدام الفعلي': 'تثبيت واحد وترخيص واحد وسجل واحد بدل أداتين.',
            'القيد / تنبيه': 'لأجهزة Mac فقط؛ لا نسخة لنظام Intel أو Windows أو الجوال.',
          },
          {
            'الميزة': 'المعالجة على جهاز Mac',
            'ما تعنيه في الاستخدام الفعلي': 'يبقى الكلام والنص على الجهاز، بحسب المطوّر.',
            'القيد / تنبيه': 'الشيفرة مغلقة، لذا لا يمكن التحقق من الادعاء؛ ويحتاج التشغيل الأول إلى نحو 1.2 GB من التنزيلات.',
          },
          {
            'الميزة': 'سعر لمرة واحدة',
            'ما تعنيه في الاستخدام الفعلي': '$39 لمرة واحدة، لما يصل إلى ثلاثة أجهزة Mac، دون اشتراك.',
            'القيد / تنبيه': 'تسري رموز الخصم حتى 30 نوفمبر 2026، وبعدها تدرج الصفحة الرئيسية $39.',
          },
          {
            'الميزة': '32 لغة',
            'ما تعنيه في الاستخدام الفعلي': 'القراءة والإملاء بلغات كثيرة، بما فيها الإملاء بلغات مختلطة.',
            'القيد / تنبيه': 'لا بيانات عن الجودة لكل لغة؛ ونموذج الإملاء غير مذكور بالاسم.',
          },
          {
            'الميزة': 'اتصالات مع تطبيقات أخرى',
            'ما تعنيه في الاستخدام الفعلي': 'يمكن لـ Obsidian وملحق المتصفح إرسال النص ليُقرأ.',
            'القيد / تنبيه': 'بحسب صفحة الخصوصية، يعمل الملحق على جميع صفحات الويب؛ فاقرأ أذوناته أولًا.',
          },
          {
            'الميزة': 'إصدارات متكررة',
            'ما تعنيه في الاستخدام الفعلي': 'صدر الإصدار 0.3.33 في 11 نوفمبر 2026.',
            'القيد / تنبيه': 'إصدار 0.x؛ وأقدم مدخل في سجل التغييرات هو 0.3.0 بتاريخ 29 يوليو 2026، فيبدو التطبيق حديث العهد.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Univocal مقابل البدائل',
        content: [
          'هذه أقرب أدوات الصوت في الدليل: تطبيق قراءة صوتية مجاني، واستوديو مجاني يؤدي المهمتين، وثلاثة تطبيقات إملاء لأجهزة Mac.',
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
            'التطبيق': 'Univocal',
            'المنصات': 'Mac',
            'السعر والترخيص': '$39 لمرة واحدة، مملوك',
            'الدور': 'قراءة صوتية وإملاء',
            'الفرق الرئيسي': 'المهمتان في تطبيق مدفوع واحد لأجهزة Mac',
          },
          {
            'التطبيق': '[Parrot](/ar/power-local-llm/parrot-review)',
            'المنصات': 'Mac وWindows وLinux',
            'السعر والترخيص': 'مجاني، MIT',
            'الدور': 'قراءة صوتية فقط',
            'الفرق الرئيسي': 'مجاني ومفتوح المصدر؛ دون إملاء',
          },
          {
            'التطبيق': '[Voicebox](/ar/power-local-llm/voicebox-review)',
            'المنصات': 'Mac وWindows وLinux',
            'السعر والترخيص': 'مجاني، MIT',
            'الدور': 'استوديو صوتي مع إملاء',
            'الفرق الرئيسي': 'يضيف استنساخ الأصوات وخادم MCP',
          },
          {
            'التطبيق': '[Weesper Neon Flow](/ar/power-local-llm/weesper-neon-flow-review)',
            'المنصات': 'Mac وWindows',
            'السعر والترخيص': 'تجربة ثم 5 EUR/شهريًا أو 99 EUR لمرة واحدة',
            'الدور': 'إملاء بالضغط والتحدث',
            'الفرق الرئيسي': 'Whisper على الجهاز؛ يضيف Windows، دون قراءة صوتية',
          },
          {
            'التطبيق': '[Sprich](/ar/power-local-llm/sprich-review)',
            'المنصات': 'Mac',
            'السعر والترخيص': 'مجاني جزئيًا، مملوك',
            'الدور': 'إملاء لأجهزة Mac',
            'الفرق الرئيسي': 'يركّز أولًا على الألمانية مع خطة مجانية؛ دون قراءة صوتية',
          },
          {
            'التطبيق': '[MacWhisper](/ar/power-local-llm/macwhisper-review)',
            'المنصات': 'Mac',
            'السعر والترخيص': 'مجاني جزئيًا، مملوك',
            'الدور': 'تطبيق تحويل لأجهزة Mac',
            'الفرق الرئيسي': 'مصمم أولًا للملفات والاجتماعات',
          },
        ],
        note: 'تتغير منصات التطبيقات الخارجية وأسعارها وميزاتها كثيرًا. تحقق من التفاصيل الحالية في صفحة كل مشروع قبل أن تقرر.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب Univocal',
        items: [
          '**مستخدمو Mac الذين يستمعون ويُملون معًا.** القراءة والإملاء في تطبيق واحد وبترخيص واحد.',
          '**من يتجنبون خدمات الصوت السحابية.** تعمل الوظيفتان على جهاز Mac، بحسب المطوّر.',
          '**المستخدمون متعددو اللغات.** 32 لغة للقراءة والإملاء.',
          '**من يفضّلون الدفع مرة واحدة.** لا يُعرض اشتراك.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب Univocal',
        items: [
          '**مستخدمو Mac بمعالج Intel وWindows وiPhone وAndroid.** لا توجد سوى نسخة لأجهزة Mac بمعالج Apple silicon.',
          '**من يحتاجون إلى برنامج قابل للتدقيق.** لم يُعثر على شيفرة مصدرية، ولا يمكن فحص ادعاءات الخصوصية.',
          '**من يريدون برنامجًا مجانيًا.** بعد التجربة يصبح مدفوعًا؛ أما Parrot فمجاني للقراءة، وVoicebox مجاني للمهمتين.',
          '**من يجب أن يعملوا دون أي إنترنت إطلاقًا.** يحتاج التشغيل الأول إلى نحو 1.2 GB من التنزيلات.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل Univocal دون اتصال بالإنترنت؟',
            a: 'تقول صفحة الشراء إن الإملاء يعمل دون اتصال بعد التنزيل عند التشغيل الأول. وتصف صفحة الخصوصية فحص الترخيص بأنه يفشل بالسماح، فلا ينبغي أن يمنع الاستخدام دون اتصال. ولم تختبره PromptQuorum دون اتصال.',
          },
          {
            q: 'هل يُرسل صوتي إلى السحابة؟',
            a: 'تقول صفحة الخصوصية إن شيئًا مما تمليه أو تقرؤه لا يُرسل إلى أي مكان. وعلى macOS 26 تستخدم الكتابة الفورية أيضًا التعرف على الكلام من Apple على الجهاز. الشيفرة غير منشورة ولم تفحص PromptQuorum حركة الشبكة.',
          },
          {
            q: 'ما نموذج الكلام الذي يستخدمه Univocal؟',
            a: 'تذكر الصفحات أصوات Kokoro للقراءة وأصوات Apple على إصدارات macOS الأقدم، لكنها لا تذكر نموذج الإملاء. ولم يرد ذكر Whisper ولا Parakeet.',
          },
          {
            q: 'هل يمكنني استخدام ترخيص واحد على عدة أجهزة Mac؟',
            a: 'نعم، حتى ثلاثة؛ ويمكن إزالة جهاز Mac من الترخيص في الإعدادات، بحسب صفحة الشراء.',
          },
          {
            q: 'من يصنع Univocal؟',
            a: 'NarNar Labs LLC. ولا تذكر الصفحات بلدها ولا مؤسسًا لها.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          'يناسب Univocal من لديه جهاز Mac بمعالج Apple silicon ويريد تحويل النص إلى كلام والإملاء في تطبيق واحد يعمل فيه كل شيء على حاسوبه، بحسب المطوّر، ويقبل دفع ثمن برنامج دون شيفرة مصدرية منشورة مرة واحدة. وله تجربة لمدة 14 يومًا وسعر لمرة واحدة وإصدار حديث جدًا.',
          'التحفظات تخص النطاق وإمكانية التحقق: لا نسخة لنظام Intel أو Windows أو الجوال، ولا شيفرة منشورة، ونموذج إملاء غير مذكور بالاسم، وادعاءات خصوصية لم تتمكن PromptQuorum من فحصها. استخدم التجربة قبل الشراء.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Univocal](https://univocalapp.com/) — الميزات واللغات والمتطلبات.',
          '[التنزيل والتشغيل الأول](https://univocalapp.com/downloading/) — اسم ملف المثبّت والإعداد.',
          '[صفحة الشراء](https://univocalapp.com/purchase/) — السعر والتجربة والترخيص وشروط الاسترداد.',
          '[سجل التغييرات](https://univocalapp.com/changelog/) — تاريخ الإصدارات؛ الإصدار 0.3.33 بتاريخ 11 نوفمبر 2026.',
          '[سياسة الخصوصية](https://univocalapp.com/privacy/) — التعامل مع البيانات ومضيفو الشبكة.',
          '[صفحة البدائل](https://univocalapp.com/alternatives/) — الاختصارات والأذونات ومقارنات المطوّر نفسه.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مقارنة أدوات الصوت والكلام المحلية](/ar/power-local-llm/local-llm-voice-audio-compared) — تحويل النص إلى كلام والكلام إلى نص ووكلاء الصوت جنبًا إلى جنب.',
          '[مراجعة Parrot](/ar/power-local-llm/parrot-review) — تطبيق قراءة صوتية مجاني دون اتصال لثلاثة أنظمة مكتبية.',
          '[مراجعة Voicebox](/ar/power-local-llm/voicebox-review) — استوديو صوتي مجاني مع إملاء واستنساخ للأصوات.',
          '[مراجعة Weesper Neon Flow](/ar/power-local-llm/weesper-neon-flow-review) — إملاء مدفوع دون اتصال لأجهزة Mac وWindows.',
          '[أفضل تطبيقات تحويل النص إلى كلام محليًا على Mac](/ar/power-local-llm/best-local-tts-mac) — خيارات القراءة الصوتية لأجهزة Apple silicon.',
          '[دليل Local LLM Software Directory الكامل](/ar/directory) — دليل أوسع لأدوات الذكاء الاصطناعي المحلي عبر المنصات.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/univocal-review-hero-ko.webp',
    title: 'Univocal 리뷰: Mac용 텍스트 읽어주기·받아쓰기 앱',
    seoTitle: 'Univocal 리뷰: Mac 읽어주기·받아쓰기 앱',
    intro: 'Univocal은 설치 하나로 두 가지 일을 하는 유료 Mac 앱입니다. 선택한 텍스트를 소리 내어 읽어 주고, 말한 내용을 커서가 있는 앱에 입력해 줍니다. 개발사는 두 기능 모두 사용자의 Apple silicon Mac에서 실행된다고 밝힙니다. 이 리뷰는 개발사의 웹사이트, 변경 내역, 개인정보 처리방침이 밝히는 내용과 빠뜨린 내용, 그리고 디렉터리의 다른 음성 도구와의 비교를 정리합니다.',
    metaDescription: 'Univocal 리뷰: 개발사에 따르면 Mac에서 실행되는 읽어주기·받아쓰기 앱. 14일 체험 후 $39 일회성, Apple silicon 전용. 직접 테스트하지 않았습니다.',
    twitterDescription: 'Univocal 리뷰: 개발사에 따르면 내 Mac에서 처리되는, 텍스트 읽어주기와 받아쓰기를 겸한 Mac 앱. 가격, 개인정보 보호, 한계, 대안을 정리했습니다.',
    audience: '클라우드 서비스나 구독 없이 텍스트 읽어주기와 받아쓰기를 앱 하나로 쓰려는 Mac 사용자를 위한 글입니다. 가격, 설치, 개인정보 보호, 한계, 대안을 다룹니다.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Univocal review',
    targetKeywords: [
      'univocal 리뷰',
      'univocal mac 앱',
      'mac 읽어주기 받아쓰기',
      '로컬 음성 합성 mac',
      '오프라인 받아쓰기 mac apple silicon',
      '비공개 음성 인식 mac',
      '음성 합성 음성 인식 앱 하나로',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Apple Silicon',
    ],
    leadAnswerBlock: '**Univocal은 선택한 텍스트를 읽어 주고 받아쓰기를 입력해 주는 소스 코드가 공개되지 않은 Mac 앱이며, 개발사는 두 기능 모두 사용자의 Apple silicon Mac에서 실행되고 어디로도 전송되지 않는다고 밝힙니다.** 14일 무료 체험 이후 $39 일회성 결제이며 구독은 없습니다. 최신 릴리스는 2026년 11월 11일의 버전 0.3.33입니다. 이 리뷰는 개발사의 공개 웹사이트, 변경 내역, 개인정보 처리방침에 근거하며 직접 사용해 본 테스트는 아닙니다.',
    quickAnswerTop: {
      ko: {
        question: 'Univocal은 로컬 읽어주기·받아쓰기 앱입니까?',
        answer: '개발사에 따르면 그렇습니다. 두 기능 모두 Mac에서 실행되며, 받아쓴 내용이나 읽은 텍스트는 어디로도 전송되지 않습니다. 다만 첫 실행 때 약 1.2 GB의 음성 소프트웨어와 모델을 내려받고, 라이선스 확인과 업데이트 확인에는 인터넷이 사용됩니다. 코드는 공개되어 있지 않고 PromptQuorum은 네트워크 트래픽을 확인하지 않았으므로, 이 주장은 개발사 자체의 설명입니다.',
        bullets: [
          '텍스트를 선택하고 Option-Shift-R을 누르면 읽어 주고, 오른쪽 Option 키를 누르고 있으면 받아쓰기를 합니다. 두 단축키 모두 바꿀 수 있습니다.',
          '가격: $39 일회성이며, 라이선스 하나로 Mac 최대 3대에서 쓸 수 있습니다. 카드나 계정 없는 14일 체험과 30일 환불이 있습니다.',
          '사이트는 Kokoro 음성을 명시하고, macOS 26에서는 실시간 입력에 Apple의 기기 내 음성 인식을 쓴다고 밝히지만, 받아쓰기 모델은 밝히지 않습니다.',
          'macOS 14 이상의 Apple silicon Mac 전용이며 Intel, Windows, iPhone, Android 버전은 없습니다.',
          'Univocal Connect를 통해 다른 로컬 앱이 읽어 줄 텍스트를 보낼 수 있으며, Obsidian 플러그인과 Chromium 브라우저 확장 프로그램이 안내되어 있습니다.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Univocal 받기', anchor: 'get-it' },
      { label: 'Univocal 한눈에 보기', anchor: 'at-a-glance' },
      { label: 'Univocal이란', anchor: 'what-is-univocal' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '기능', anchor: 'features' },
      { label: '모델과 하드웨어', anchor: 'models-hardware' },
      { label: '개인정보 보호, 라이선스, 비용', anchor: 'privacy' },
      { label: '장점과 한계', anchor: 'tradeoffs' },
      { label: 'Univocal과 대안 비교', anchor: 'vs-alternatives' },
      { label: 'Univocal을 쓰면 좋은 사용자', anchor: 'who-should-use' },
      { label: 'Univocal을 쓰지 말아야 할 사용자', anchor: 'who-should-not-use' },
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
            text: 'Univocal은 음성 합성(텍스트 읽어주기)과 받아쓰기를 하나로 합친 유료 Mac 앱이며, 개발사에 따르면 두 기능 모두 클라우드 서비스 대신 사용자의 Mac에서 처리합니다.',
          },
          {
            type: 'plain-terms',
            text: '키보드의 키 두 개라고 생각하면 됩니다. 하나는 Mac이 선택한 텍스트를 읽게 하고, 다른 하나는 말한 내용을 입력된 텍스트로 바꿔 주며, 개발사는 어느 쪽도 음성이나 텍스트를 밖으로 보내지 않는다고 밝힙니다.',
          },
        ],
        items: [
          '로컬 주장: 두 기능 모두 Mac에서 실행되며, 첫 실행 다운로드, 라이선스 확인, 매일 하는 업데이트 확인에는 여전히 인터넷이 사용됩니다.',
          '라이선스와 개발사: 독점 소프트웨어이며 NarNar Labs LLC가 배포합니다. 소스 저장소는 찾지 못했고 개발사의 소재 국가는 명시되어 있지 않습니다.',
          '가격: 14일 체험 이후 $39 일회성이며, 개발사는 기간 한정 할인 코드도 안내합니다.',
          '유지보수: 버전 0.3.33이 2026년 11월 11일에 출시되어 프로젝트가 활발히 업데이트되고 있습니다.',
          '공백: Apple silicon과 macOS 14 이상 전용이고, 받아쓰기 모델이 명시되어 있지 않으며, 코드 서명에 관한 내용이 페이지에 없습니다.',
        ],
      },
      getItUnivocal: {
        id: 'get-it',
        title: 'Univocal 받기',
        content: [
          '**Univocal은 다른 Mac 앱처럼 설치하며 터미널이 필요 없습니다.** 공식 다운로드 링크는 디스크 이미지를 제공하고, 음성 모델은 첫 실행 때 내려받습니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'Mac',
            '받는 곳': '[Mac용 다운로드](https://univocalapp.com/download) — .dmg, Apple silicon, macOS 14 이상',
          },
          {
            '플랫폼': '무료 체험(14일)',
            '받는 곳': '[구매 페이지](https://univocalapp.com/purchase/) — 전체 기능, 카드·계정 불필요',
          },
          {
            '플랫폼': '설정 안내',
            '받는 곳': '[다운로드와 첫 실행](https://univocalapp.com/downloading/)',
          },
          {
            '플랫폼': '릴리스 노트',
            '받는 곳': '[변경 내역](https://univocalapp.com/changelog/)',
          },
          {
            '플랫폼': '공식 사이트',
            '받는 곳': '[univocalapp.com](https://univocalapp.com/)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[Univocal 개인정보 처리방침](https://univocalapp.com/privacy/)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '소스 저장소를 찾지 못했습니다',
          },
        ],
        note: '사이트에는 Mac 빌드만 나와 있습니다. Windows, iOS, Android는 알림 신청 양식으로만 안내되며 Intel Mac은 지원되지 않습니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Univocal 한눈에 보기',
        columns: ['항목', 'Univocal'],
        rows: [
          { '항목': '플랫폼', 'Univocal': 'macOS 14 이상, Apple silicon 전용' },
          { '항목': '가격', 'Univocal': '$39 일회성, 14일 체험' },
          { '항목': '라이선스', 'Univocal': '독점, 소스 코드 찾지 못함' },
          { '항목': '실행 위치', 'Univocal': 'Mac에서 실행, 다운로드와 확인에는 인터넷 사용' },
          { '항목': '언어', 'Univocal': '받아쓰기와 읽어주기 32개(홈페이지)' },
          { '항목': '실시간 전사', 'Univocal': '말하는 동안 실시간 입력(변경 내역 0.3.17)' },
          { '항목': '음성 복제', 'Univocal': '명시되지 않음' },
          { '항목': '화자 구분', 'Univocal': '명시되지 않음' },
          { '항목': '로컬 API 서버', 'Univocal': '명시되지 않음, 로컬 앱용 Univocal Connect 제공' },
        ],
        note: '항목은 Local LLM Software Directory에서 사용하는 음성 인식 및 음성 합성 비교를 따릅니다. 사이트에 언급이 없는 항목은 지원하지 않는다는 뜻이 아니라 알 수 없다는 뜻입니다.',
      },
      whatIsUnivocal: {
        id: 'what-is-univocal',
        title: 'Univocal이란',
        content: [
          '**Univocal은 읽어주기와 받아쓰기, 두 가지 기능을 가진 음성 유틸리티입니다.** 텍스트를 선택하고 단축키를 누르면 읽어 주고, 키를 누른 채 말한 뒤 놓으면 메일 클라이언트, 메모, 채팅 등 커서 위치에 텍스트가 입력됩니다.',
          '배포사는 NarNar Labs LLC입니다. 개발사의 페이지에는 창업자, 소재 국가, 우편 주소가 나와 있지 않고 지원 이메일만 있습니다. 이 리뷰는 출처에 나열된 페이지에 근거하며 직접 사용해 본 테스트는 하지 않았으므로 음성 품질, 정확도, 속도는 평가하지 않습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**설정은 설치, 첫 실행 다운로드, 단축키 두 개로 이루어집니다.** 단계는 개발사의 설정 페이지와 변경 내역을 따릅니다.',
        ],
        numberedItems: [
          {
            title: '앱 설치',
            whyItMatters: '내려받은 .dmg를 열고 Univocal을 응용 프로그램 폴더로 옮긴 뒤 14일 체험을 시작합니다. 카드나 계정은 필요하지 않습니다.',
          },
          {
            title: '첫 실행이 끝날 때까지 기다리기',
            whyItMatters: '앱이 약 1.2 GB의 음성 소프트웨어와 모델을 내려받습니다. 버전 0.3.11에서 다운로드가 끝나기 전에 사용을 시작하는 옵션이 추가되었습니다.',
          },
          {
            title: 'macOS 권한 허용',
            whyItMatters: '개발사에 따르면 받아쓰기에는 마이크와 손쉬운 사용 권한이 필요하고, 선택한 텍스트를 읽으려면 손쉬운 사용 권한이 필요합니다.',
          },
          {
            title: '읽고 받아쓰기',
            whyItMatters: '텍스트를 선택하고 Option-Shift-R을 누르면 읽어 주고, 오른쪽 Option 키를 누른 채 말하면 받아쓰기를 합니다. 두 기본값 모두 바꿀 수 있습니다.',
          },
        ],
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**기능은 어떤 Mac 앱에서든 비공개로 읽어 주고 받아쓰는 데 집중되어 있습니다.** 아래 내용은 모두 웹사이트, 개인정보 처리방침, 변경 내역에서 가져왔습니다.',
        ],
        items: [
          '**읽어주기.** 선택한 텍스트를 단어 단위 강조와 함께 읽어 주며, 선택한 텍스트가 없으면 마지막으로 복사한 텍스트를 읽습니다. 버전 0.3.16부터 속도를 최대 4배까지 올릴 수 있습니다.',
          '**받아쓰기.** 말하는 동안 문장 부호, 대소문자, 문단 나눔을 추정해 커서 위치에 텍스트를 입력합니다. 실시간 입력은 버전 0.3.17부터 제공되며, 버전 0.3.28부터 새로 설치하면 기본적으로 꺼져 있습니다.',
          '**32개 언어.** 읽어주기와 받아쓰기가 같은 언어 목록을 쓰며, 변경 내역에는 여러 언어를 섞어 받아쓰는 기능이 설명되어 있습니다.',
          '**Univocal Connect.** 다른 로컬 앱이 읽어 줄 텍스트를 보낼 수 있으며, Obsidian 플러그인과 Chrome, Edge, Brave, Vivaldi, Arc용 읽어주기 확장 프로그램이 안내되어 있습니다.',
          '**기록.** 최근 받아쓰기 20건과 최근 읽어주기 10건이 Mac에 저장됩니다.',
          '**인터페이스 언어.** 영어, 한국어, 일본어, 중국어 간체, 스페인어, 독일어, 프랑스어를 지원합니다.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '모델과 하드웨어',
        content: [
          '**개발사는 읽어주기 음성에 Kokoro를, macOS 26의 실시간 초안에 Apple의 SpeechAnalyzer를 쓴다고 밝히지만, 받아쓰기 모델은 밝히지 않습니다.** 개인정보 처리방침에는 음성 소프트웨어는 PyPI에서, 모델은 Hugging Face에서 내려받으며 합계 약 1.2 GB이고, 로컬 엔진이 Mac의 127.0.0.1:8787에서 대기한다고 적혀 있습니다. 확인한 어떤 페이지에도 Whisper와 Parakeet은 언급되어 있지 않습니다.',
          '요구 사항은 Apple silicon Mac과 macOS 14 이상입니다. 한국어와 독일어 등 일부 읽어주기 언어는 처음 쓸 때 약 400 MB를 추가로 내려받습니다. RAM 수치와 속도, 정확도 수치는 공개되어 있지 않습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호, 라이선스, 비용',
        content: [
          '**개인정보 처리방침에 따르면 받아쓴 내용이나 읽은 텍스트는 어디로도 전송되지 않으며, 앱에는 계정, 분석, 충돌 보고가 없습니다.** 그래도 다른 부분에서는 인터넷이 관여합니다. PyPI, Hugging Face, 그리고 Mac에 Python이 없을 경우 GitHub에서의 다운로드, 라이선스 키와 Mac의 이름을 보내는 Lemon Squeezy 라이선스 확인, 개발사 사이트에 대한 매일의 업데이트 확인이 그렇습니다. 문제 보고서는 보고서 보내기를 누를 때만 전송됩니다. 앱과 달리 웹사이트는 Cloudflare Web Analytics를 사용합니다. 코드는 공개되어 있지 않고 PromptQuorum은 네트워크 트래픽을 조사하지 않았으므로, 이런 진술은 개발사 자체의 설명입니다.',
          '유료 독점 제품입니다. $39 일회성이며 라이선스 하나로 Mac 최대 3대에서 쓸 수 있고, 14일 체험과 30일 환불이 있습니다. 구매 페이지에는 출시 기념 코드와 블랙 프라이데이 코드도 나와 있으며 둘 다 2026년 11월 30일까지 유효합니다. 구매 시점의 가격은 해당 페이지에서 확인하십시오. 개발사가 자사 사이트에서 다른 앱과 비교한 내용은 개발사의 주장이며 여기서는 검증하지 않았습니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장점과 한계',
        columns: ['장점', '실제 사용에서의 의미', '한계 / 주의점'],
        rows: [
          {
            '장점': '앱 하나로 읽어주기와 받아쓰기',
            '실제 사용에서의 의미': '도구 두 개 대신 설치 하나, 라이선스 하나, 기록 하나로 끝납니다.',
            '한계 / 주의점': 'Mac 전용이며 Intel, Windows, 모바일 버전은 없습니다.',
          },
          {
            '장점': 'Mac에서 처리',
            '실제 사용에서의 의미': '개발사에 따르면 음성과 텍스트가 기기 안에 머뭅니다.',
            '한계 / 주의점': '코드가 비공개라 이 주장은 검증할 수 없고, 첫 실행에는 약 1.2 GB의 다운로드가 필요합니다.',
          },
          {
            '장점': '일회성 가격',
            '실제 사용에서의 의미': '$39 일회성이며 Mac 최대 3대, 구독 없음.',
            '한계 / 주의점': '할인 코드는 2026년 11월 30일까지이며, 그 이후 홈페이지에는 $39로 안내되어 있습니다.',
          },
          {
            '장점': '32개 언어',
            '실제 사용에서의 의미': '여러 언어로 읽고 받아쓸 수 있으며 여러 언어를 섞은 받아쓰기도 가능합니다.',
            '한계 / 주의점': '언어별 품질 데이터가 없고, 받아쓰기 모델이 명시되어 있지 않습니다.',
          },
          {
            '장점': '다른 앱과의 연결',
            '실제 사용에서의 의미': 'Obsidian과 브라우저 확장 프로그램이 읽어 줄 텍스트를 보낼 수 있습니다.',
            '한계 / 주의점': '개인정보 처리방침 페이지에 따르면 확장 프로그램은 모든 웹 페이지에서 실행되므로 먼저 권한을 읽어 보십시오.',
          },
          {
            '장점': '잦은 릴리스',
            '실제 사용에서의 의미': '버전 0.3.33이 2026년 11월 11일에 출시되었습니다.',
            '한계 / 주의점': '버전 0.x이며 변경 내역의 가장 오래된 항목은 2026년 7월 29일의 0.3.0이므로 앱이 아직 어려 보입니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Univocal과 대안 비교',
        content: [
          '디렉터리에서 가장 가까운 음성 도구는 무료 읽어주기 앱, 두 가지 일을 모두 하는 무료 스튜디오, 그리고 Mac 받아쓰기 앱 세 가지입니다.',
        ],
        columns: ['앱', '플랫폼', '가격과 라이선스', '역할', '주요 차이'],
        rows: [
          {
            '앱': 'Univocal',
            '플랫폼': 'Mac',
            '가격과 라이선스': '$39 일회성, 독점',
            '역할': '읽어주기와 받아쓰기',
            '주요 차이': '유료 Mac 앱 하나에 두 기능',
          },
          {
            '앱': '[Parrot](/ko/power-local-llm/parrot-review)',
            '플랫폼': 'Mac, Windows, Linux',
            '가격과 라이선스': '무료, MIT',
            '역할': '읽어주기 전용',
            '주요 차이': '무료 오픈 소스, 받아쓰기 없음',
          },
          {
            '앱': '[Voicebox](/ko/power-local-llm/voicebox-review)',
            '플랫폼': 'Mac, Windows, Linux',
            '가격과 라이선스': '무료, MIT',
            '역할': '받아쓰기를 갖춘 음성 스튜디오',
            '주요 차이': '음성 복제와 MCP 서버 추가',
          },
          {
            '앱': '[Weesper Neon Flow](/ko/power-local-llm/weesper-neon-flow-review)',
            '플랫폼': 'Mac, Windows',
            '가격과 라이선스': '체험 후 월 5 EUR 또는 99 EUR 일회성',
            '역할': '단축키 받아쓰기',
            '주요 차이': '기기에서 Whisper 실행, Windows 지원, 읽어주기 없음',
          },
          {
            '앱': '[Sprich](/ko/power-local-llm/sprich-review)',
            '플랫폼': 'Mac',
            '가격과 라이선스': '프리미엄, 독점',
            '역할': 'Mac 받아쓰기',
            '주요 차이': '독일어 우선에 무료 요금제, 읽어주기 없음',
          },
          {
            '앱': '[MacWhisper](/ko/power-local-llm/macwhisper-review)',
            '플랫폼': 'Mac',
            '가격과 라이선스': '프리미엄, 독점',
            '역할': 'Mac 전사 앱',
            '주요 차이': '파일과 회의가 우선',
          },
        ],
        note: '서드파티 앱의 플랫폼, 가격, 기능은 자주 바뀝니다. 결정하기 전에 각 프로젝트의 공식 페이지에서 최신 정보를 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Univocal을 쓰면 좋은 사용자',
        items: [
          '**듣기와 받아쓰기를 모두 하는 Mac 사용자.** 읽어주기와 받아쓰기가 앱 하나, 라이선스 하나를 공유합니다.',
          '**클라우드 음성 서비스를 피하려는 사람.** 개발사에 따르면 두 기능 모두 Mac에서 실행됩니다.',
          '**여러 언어를 쓰는 사용자.** 읽어주기와 받아쓰기에서 32개 언어를 지원합니다.',
          '**한 번만 결제하고 싶은 구매자.** 구독은 제공되지 않습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Univocal을 쓰지 말아야 할 사용자',
        items: [
          '**Intel Mac, Windows, iPhone, Android 사용자.** Apple silicon Mac 빌드만 제공됩니다.',
          '**검증 가능한 소프트웨어가 필요한 사람.** 소스 코드를 찾지 못했고 개인정보 보호 주장을 직접 확인할 수 없습니다.',
          '**무료 소프트웨어를 원하는 사람.** 체험 이후에는 유료이며, 읽어주기는 Parrot이, 두 기능 모두는 Voicebox가 무료입니다.',
          '**인터넷 없이 완전히 작업해야 하는 사람.** 첫 실행에는 약 1.2 GB의 다운로드가 필요합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Univocal은 오프라인에서 작동합니까?',
            a: '구매 페이지는 첫 실행 다운로드 이후에는 받아쓰기가 오프라인으로 작동한다고 안내합니다. 개인정보 처리방침은 라이선스 확인이 실패해도 사용을 막지 않는 방식(fail open)이라고 설명하므로, 오프라인에서도 사용이 막히지 않아야 합니다. PromptQuorum은 오프라인에서 테스트하지 않았습니다.',
          },
          {
            q: '내 음성이 클라우드로 전송됩니까?',
            a: '개인정보 처리방침에 따르면 받아쓴 내용이나 읽은 텍스트는 어디로도 전송되지 않습니다. macOS 26에서는 실시간 입력에도 Apple의 기기 내 음성 인식이 사용됩니다. 코드는 공개되어 있지 않고 PromptQuorum은 네트워크 트래픽을 확인하지 않았습니다.',
          },
          {
            q: 'Univocal은 어떤 음성 모델을 사용합니까?',
            a: '페이지에는 읽어주기용 Kokoro 음성과 이전 macOS 버전의 Apple 음성이 명시되어 있지만, 받아쓰기 모델은 밝히지 않습니다. Whisper와 Parakeet은 언급되어 있지 않습니다.',
          },
          {
            q: '라이선스 하나를 여러 Mac에서 쓸 수 있습니까?',
            a: '구매 페이지에 따르면 최대 3대까지 가능하며, 설정에서 Mac 한 대를 라이선스에서 해제할 수 있습니다.',
          },
          {
            q: 'Univocal은 누가 만듭니까?',
            a: 'NarNar Labs LLC입니다. 페이지에는 소재 국가나 창업자가 명시되어 있지 않습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          'Apple silicon Mac을 쓰고, 개발사에 따르면 모든 것이 사용자의 컴퓨터에서 실행되는 음성 합성과 받아쓰기를 앱 하나로 원하며, 소스 코드가 공개되지 않은 소프트웨어에 한 번 비용을 낼 의향이 있다면 Univocal이 잘 맞습니다. 14일 무료 체험, 일회성 가격, 아주 최근의 릴리스가 있습니다.',
          '주의할 점은 범위와 검증 가능성입니다. Intel, Windows, 모바일 버전이 없고, 코드가 공개되어 있지 않으며, 받아쓰기 모델이 명시되어 있지 않고, PromptQuorum이 확인하지 못한 개인정보 보호 주장이 있습니다. 구매 전에 체험판을 사용하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Univocal 공식 사이트](https://univocalapp.com/) — 기능, 언어, 요구 사항.',
          '[다운로드와 첫 실행](https://univocalapp.com/downloading/) — 설치 파일 이름과 설정.',
          '[구매 페이지](https://univocalapp.com/purchase/) — 가격, 체험, 라이선스, 환불 조건.',
          '[변경 내역](https://univocalapp.com/changelog/) — 버전 기록, 2026년 11월 11일자 버전 0.3.33.',
          '[개인정보 처리방침](https://univocalapp.com/privacy/) — 데이터 처리와 네트워크 호스트.',
          '[대안 비교 페이지](https://univocalapp.com/alternatives/) — 단축키, 권한, 개발사 자체의 비교.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[로컬 음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 음성 합성, 음성 인식, 음성 에이전트를 나란히 비교합니다.',
          '[Parrot 리뷰](/ko/power-local-llm/parrot-review) — 데스크톱 시스템 세 가지용 무료 오프라인 읽어주기 앱.',
          '[Voicebox 리뷰](/ko/power-local-llm/voicebox-review) — 받아쓰기와 음성 복제를 갖춘 무료 음성 스튜디오.',
          '[Weesper Neon Flow 리뷰](/ko/power-local-llm/weesper-neon-flow-review) — Mac과 Windows용 유료 오프라인 받아쓰기.',
          '[Mac용 최고의 로컬 음성 합성](/ko/power-local-llm/best-local-tts-mac) — Apple silicon용 읽어주기 옵션.',
          '[전체 Local LLM Software Directory](/ko/directory) — 여러 플랫폼의 로컬 AI 도구를 모은 더 넓은 디렉터리.',
        ],
      },
    },
  },
}
