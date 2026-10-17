// Parrot Review: free offline text-to-speech app that reads selected text aloud
// Slug: parrot-review
// Companion to: piper-tts-review, izwi-review, coqui-tts-review, bark-tts-review

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-18',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/parrot-review-hero-en.webp',
    title: 'Parrot Review: Free Offline Text-to-Speech That Reads Selected Text Aloud',
    seoTitle: 'Parrot Review: Free Offline Text-to-Speech Desktop App',
    intro:
      'Parrot is a free, open-source desktop app that reads any text you select aloud with a small neural voice model running on your own computer. This review covers what its website, README and GitHub releases document, what they leave out, and how it compares with other text-to-speech tools in the directory.',
    metaDescription:
      'Parrot review: free MIT desktop app for Windows, macOS and Linux that reads selected text aloud offline with the Kokoro-82M model. Not hands-on tested.',
    twitterDescription:
      'Parrot review: a free, open-source app that reads selected text aloud on your computer with the Kokoro voice model. Install, voices, privacy, limits, alternatives.',
    audience:
      'Readers who want a free, private way to hear on-screen text read aloud — covers install, voices, privacy, limits and alternatives.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Parrot review',
    targetKeywords: [
      'parrot review',
      'parrot text to speech',
      'offline text to speech app',
      'read selected text aloud',
      'kokoro-82m desktop app',
      'free open source tts desktop',
    ],
    current_hardware_mentioned: ['CPU', 'Apple silicon'],
    leadAnswerBlock:
      '**Warning: Parrot has had no update since 28 April 2026 (last release 26.2.4, 25 February 2026), so it may be unmaintained — check that it works on your system before relying on it.** **Parrot is a free, MIT-licensed desktop app that reads text you select in any program aloud, using a voice model that runs on your own computer.** This review covers version 26.2.4 and is based on the public website, README and GitHub releases, not on hands-on testing.',
    quickAnswerTop: {
      en: {
        question: 'Is Parrot worth installing to have selected text read aloud offline?',
        answer:
          'Probably, if you want one simple, free tool for listening to articles, documents or code comments without sending text to a cloud service. Weigh the warning above first: the project is quiet, and the site publishes no sound-quality or memory figures.',
        bullets: [
          'Installers for Windows, macOS (Apple silicon) and Linux; no terminal needed.',
          'Select text, press a shortcut, hear it read in one of 54 voices.',
          'The roughly 115 MB Kokoro-82M model runs on a normal CPU, with no GPU.',
          'The README says text stays on your machine after the one-time model download.',
          'Free forever per the README; no account or API key.',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get Parrot', anchor: 'get-it' },
      { label: 'Parrot at a Glance', anchor: 'at-a-glance' },
      { label: 'What Parrot Is', anchor: 'what-is-parrot' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Features and Voices', anchor: 'features' },
      { label: 'Privacy, License and Cost', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Parrot vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Parrot', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Parrot', anchor: 'who-should-not-use' },
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
            text: 'Parrot is an open-source desktop app that reads whatever text you select aloud, using a compact voice model that works offline.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a read-aloud button for your whole computer: highlight text in a browser, PDF or editor, press a key, and a natural-sounding voice reads it to you without any cloud service.',
          },
        ],
        items: [
          'Version reviewed: 26.2.4, released 25 February 2026; the newest code change on GitHub is from 28 April 2026, so the stale-project warning applies.',
          'License and price: MIT per the repository; free, with no account.',
          'Platforms: Windows, macOS on Apple silicon and Linux, as desktop apps.',
          'Standout features: system-wide shortcut, streaming playback, pause and resume, local history.',
          'Maturity: a small project (162 GitHub stars) that is a fork of the speech-to-text app Handy.',
        ],
      },
      getItParrot: {
        id: 'get-it',
        title: 'Get Parrot',
        content: [
          '**Parrot ships as a double-click desktop app on all three desktop systems, so no terminal is needed.** The README sends you to the website for the download; the installer files are also attached to the [latest GitHub release](https://github.com/rishiskhare/parrot/releases/latest).',
        ],
        columns: ['Platform', 'Get It'],
        rows: [
          { 'Platform': 'macOS (Apple silicon)', 'Get It': '[Parrot_26.2.4_aarch64.dmg](https://github.com/rishiskhare/parrot/releases/latest)' },
          { 'Platform': 'Windows', 'Get It': '[Parrot_26.2.4_x64-setup.exe or .msi](https://github.com/rishiskhare/parrot/releases/latest) (ARM64 builds also listed)' },
          { 'Platform': 'Linux', 'Get It': '[AppImage, .deb or .rpm](https://github.com/rishiskhare/parrot/releases/latest) for x86-64 and ARM64' },
          { 'Platform': 'Website', 'Get It': '[tryparrot.vercel.app](https://tryparrot.vercel.app/)' },
          { 'Platform': 'Privacy policy', 'Get It': 'No separate privacy-policy page was found; the [README](https://github.com/rishiskhare/parrot) and site describe local processing' },
          { 'Platform': 'Source code', 'Get It': '[github.com/rishiskhare/parrot](https://github.com/rishiskhare/parrot)' },
        ],
        note: 'The release lists only an Apple silicon disk image, so Intel Macs are not covered. On first launch the app asks you to download the voice model, which needs an internet connection once.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Parrot at a Glance',
        columns: ['Attribute', 'Parrot'],
        rows: [
          { 'Attribute': 'Platform', 'Parrot': 'Windows, macOS, Linux' },
          { 'Attribute': 'Price', 'Parrot': 'Free' },
          { 'Attribute': 'License', 'Parrot': 'MIT' },
          { 'Attribute': 'Runs', 'Parrot': 'Locally, on the CPU' },
          { 'Attribute': 'Languages', 'Parrot': '9 options (US and UK English counted separately)' },
          { 'Attribute': 'Voice cloning', 'Parrot': 'Not stated; 54 preset voices' },
          { 'Attribute': 'Streaming output', 'Parrot': 'Yes, audio starts before synthesis finishes' },
          { 'Attribute': 'Usable on CPU only', 'Parrot': 'Yes' },
          { 'Attribute': 'Local API server', 'Parrot': 'No; command-line flags only' },
        ],
        note: 'Attributes follow the text-to-speech comparison used in the Local LLM Software Directory. A missing statement on the site means unknown, not unsupported.',
      },
      whatIsParrot: {
        id: 'what-is-parrot',
        title: 'What Parrot Is',
        content: [
          '**Parrot is a read-aloud utility, not a voice studio.** The website calls it probably the most simple text-to-speech app: its only function is to read aloud whatever you select. The author says the goal is not the best app but the most forkable one, a small base for accessibility tools and voice experiments.',
          'It is a fork of Handy, an open-source speech-to-text app by CJ Pais, and keeps its Tauri architecture with a Rust backend. The voice comes from Kokoro-82M, an open model with an Apache-2.0 licence on its Hugging Face page, run through the author\'s tts-rs library.',
          'This review draws on the website, the README and the GitHub releases and commits. It involved no hands-on testing, so voice quality, speed and stability are not rated here.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is an installer download, a one-time model download, then a shortcut.** The steps follow the README.',
        ],
        numberedItems: [
          {
            title: 'Install the app for your system',
            whyItMatters: 'Download it from the [website](https://tryparrot.vercel.app/) or the [releases page](https://github.com/rishiskhare/parrot/releases/latest) and run the installer.',
          },
          {
            title: 'Download the voice model on first launch',
            whyItMatters: 'Parrot prompts for the roughly 115 MB model; once it is stored, the README says the app works completely offline.',
          },
          {
            title: 'Select text and press the shortcut',
            whyItMatters: 'The default is Option+Space on macOS and Ctrl+Space on Windows and Linux; a small overlay shows while audio plays, and every shortcut can be changed.',
          },
          {
            title: 'Pause or resume while it speaks',
            whyItMatters: 'Option+P (Alt+P on Windows and Linux) pauses and resumes playback; this shortcut is only active during playback.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features and Voices',
        content: [
          '**The feature set is deliberately small.** Everything below comes from the README and the website.',
        ],
        items: [
          '**Works in any app.** It reads selected text from browsers, editors, PDFs and terminals.',
          '**Streaming playback.** Audio starts before the whole text has been synthesized.',
          '**54 voices in nine language options.** US and UK English, Spanish, French, Hindi, Italian, Japanese, Brazilian Portuguese and Mandarin; the voice follows your language setting or can be picked in Settings.',
          '**Controls.** Playback speed, worker threads, an optional first-response speed-up and a floating overlay with pause controls.',
          '**History.** Past utterances can be browsed, replayed, copied and deleted, with an entry limit and an automatic delete period.',
          '**Scripting.** Command-line flags such as `parrot --toggle-transcription` and Unix signals let window managers and hotkey tools trigger speech, which is the recommended route on Wayland.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy, License and Cost',
        content: [
          '**The README says your text is processed on your device and never sent anywhere.** It lists no cloud, no accounts and no internet requirement after the first model download. The website repeats that the text stays on your computer.',
          'The code is MIT-licensed and the app is free with no subscription or API key, per the README. No dedicated privacy-policy page was found, and the README does not say which server hosts the model download. This review did not inspect network traffic, so these statements are the developer\'s own.',
          'The History feature stores what Parrot has read on your machine; you can set an entry limit and an automatic delete period, or delete entries by hand.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Offline neural voice',
            'What it means in real use': 'Listen to text without a cloud service.',
            'Limitation / caveat': 'Voice quality is not rated here; the project links only an audio sample.',
          },
          {
            'Benefit': 'Works in any app',
            'What it means in real use': 'One shortcut for browsers, PDFs and editors.',
            'Limitation / caveat': 'Wayland needs a desktop-level shortcut that calls the command line.',
          },
          {
            'Benefit': 'Small and CPU-only',
            'What it means in real use': 'Runs on an ordinary computer.',
            'Limitation / caveat': 'No RAM figure is published.',
          },
          {
            'Benefit': 'Installers for all desktops',
            'What it means in real use': 'Download and open, no terminal needed.',
            'Limitation / caveat': 'macOS build is Apple silicon only.',
          },
          {
            'Benefit': 'Open source and free',
            'What it means in real use': 'MIT code you can fork and change.',
            'Limitation / caveat': 'No update since 28 April 2026; the author says feature requests may not make it into the main project.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Parrot vs. Alternatives',
        content: [
          'Most other text-to-speech tools in the directory are engines for developers, not read-aloud apps. Parrot is the one you install and use with a shortcut.',
        ],
        columns: ['App', 'Platforms', 'Price and license', 'Role', 'Key difference'],
        rows: [
          {
            'App': 'Parrot',
            'Platforms': 'Windows, macOS, Linux',
            'Price and license': 'Free, MIT',
            'Role': 'Read-aloud desktop app',
            'Key difference': 'Select text, press a key, hear it; no coding',
          },
          {
            'App': '[Piper TTS](/power-local-llm/piper-tts-review)',
            'Platforms': 'Windows, macOS, Linux',
            'Price and license': 'Free, GPL-3.0',
            'Role': 'Command-line speech engine',
            'Key difference': 'Fast CPU voices for scripts and projects, not a selection reader',
          },
          {
            'App': '[Izwi](/power-local-llm/izwi-review)',
            'Platforms': 'Windows, macOS, Linux',
            'Price and license': 'Free, MIT',
            'Role': 'Local voice runtime',
            'Key difference': 'Speech output plus transcription, cloning and an API',
          },
          {
            'App': '[Coqui TTS](/power-local-llm/coqui-tts-review)',
            'Platforms': 'Windows, macOS, Linux',
            'Price and license': 'Free, MPL 2.0',
            'Role': 'Python toolkit',
            'Key difference': 'Many model architectures for developers',
          },
          {
            'App': '[Bark](/power-local-llm/bark-tts-review)',
            'Platforms': 'Windows, macOS, Linux',
            'Price and license': 'Free, MIT',
            'Role': 'Generative speech model',
            'Key difference': 'Adds sound effects and music; heavier to run',
          },
        ],
        note: 'Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each project\'s own page before deciding.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Parrot',
        items: [
          '**People who like to listen.** Articles, long emails and documents become audio with one shortcut.',
          '**Readers with accessibility needs.** The project frames the app as accessibility tooling that should not sit behind a paywall.',
          '**Tinkerers.** The code is meant to be forked and extended.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Parrot',
        items: [
          '**Intel Mac owners.** The release lists only an Apple silicon macOS build.',
          '**Anyone who needs a maintained product.** The stale-project warning at the top applies.',
          '**People who need voice cloning or an API.** Neither is documented; look at the engines in the table above.',
          '**Users who need documented compliance.** There is no privacy-policy page.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Parrot need a GPU?',
            a: 'No. The README says the model runs on any modern CPU; it publishes no RAM or speed figures.',
          },
          {
            q: 'Is Parrot the same as Handy?',
            a: 'No. Handy is a speech-to-text app; Parrot is a fork that reverses the direction and reads text aloud.',
          },
          {
            q: 'Can I change the shortcuts?',
            a: 'Yes, all shortcuts can be changed in Settings. On Wayland, bind your desktop shortcut to `parrot --toggle-transcription`.',
          },
          {
            q: 'Does it keep a record of what it read?',
            a: 'Yes, a History page stores past utterances locally; you can limit the number of entries or delete them automatically.',
          },
          {
            q: 'Can it clone a voice or run as a server?',
            a: 'Neither is documented. It offers 54 preset voices and command-line flags only.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Parrot is a good fit if you want a free, no-account way to hear selected text read aloud on your own computer: it installs like a normal app and does one job.',
          'The caveats are maturity and transparency: no update since 28 April 2026, 162 GitHub stars, no privacy-policy page and no voice-quality or memory figures. Try it with a few documents before depending on it, and treat the stale-project warning as binding.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Parrot website](https://tryparrot.vercel.app/) — product description, download links and privacy statement.',
          '[Parrot about page](https://tryparrot.vercel.app/about) — project goals, fork of Handy and model.',
          '[Parrot on GitHub](https://github.com/rishiskhare/parrot) — README, MIT license, star count and commit history.',
          '[Parrot releases](https://github.com/rishiskhare/parrot/releases) — version 26.2.4 and installer files.',
          '[Kokoro-82M on Hugging Face](https://huggingface.co/hexgrad/Kokoro-82M) — the voice model and its Apache-2.0 licence.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Voice and Speech Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — text-to-speech, speech-to-text and voice agents side by side.',
          '[Piper vs Kokoro TTS](/power-local-llm/piper-vs-kokoro-tts) — two local voice engines compared.',
          '[Kokoro vs ElevenLabs](/power-local-llm/kokoro-vs-elevenlabs) — how the Kokoro model compares with a cloud service.',
          '[Best Local TTS on Mac](/power-local-llm/best-local-tts-mac) — local text-to-speech options for macOS.',
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
    heroImage: '/images/parrot-review-hero-de.webp',
    title: 'Parrot Rezension: Kostenlose Offline-Sprachausgabe für markierten Text',
    seoTitle: 'Parrot Rezension: Kostenlose Offline-Sprachausgabe-App',
    intro:
      'Parrot ist eine kostenlose, quelloffene Desktop-App, die jeden markierten Text mit einem kleinen neuronalen Sprachmodell vorliest, das auf Ihrem eigenen Rechner läuft. Diese Rezension fasst zusammen, was Website, README und GitHub-Releases dokumentieren, was sie auslassen und wie Parrot im Vergleich zu anderen Sprachausgabe-Werkzeugen im Verzeichnis abschneidet.',
    metaDescription:
      'Parrot Rezension: kostenlose MIT-Desktop-App für Windows, macOS und Linux, die markierten Text offline mit dem Modell Kokoro-82M vorliest. Ohne Praxistest.',
    twitterDescription:
      'Parrot Rezension: eine kostenlose Open-Source-App, die markierten Text auf Ihrem Rechner mit dem Kokoro-Modell vorliest. Installation, Stimmen, Datenschutz, Grenzen, Alternativen.',
    audience:
      'Leser, die kostenlos und privat markierten Text auf dem Bildschirm vorlesen lassen möchten — behandelt Installation, Stimmen, Datenschutz, Grenzen und Alternativen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Parrot review',
    targetKeywords: [
      'parrot rezension',
      'parrot sprachausgabe',
      'offline text to speech app',
      'markierten text vorlesen lassen',
      'kokoro-82m desktop app',
      'kostenlose open source sprachausgabe',
    ],
    current_hardware_mentioned: ['CPU', 'Apple silicon'],
    leadAnswerBlock:
      '**Warnung: Parrot wurde seit dem 28. April 2026 nicht aktualisiert (letztes Release 26.2.4 vom 25. Februar 2026) und wird möglicherweise nicht mehr gepflegt — prüfen Sie vor dem Einsatz, ob die App auf Ihrem System funktioniert.** **Parrot ist eine kostenlose Desktop-App unter MIT-Lizenz, die in einem beliebigen Programm markierten Text mit einem Sprachmodell vorliest, das auf Ihrem eigenen Rechner läuft.** Diese Rezension bezieht sich auf Version 26.2.4 und stützt sich auf die öffentliche Website, das README und die GitHub-Releases, nicht auf einen eigenen Praxistest.',
    quickAnswerTop: {
      de: {
        question: 'Lohnt sich Parrot, um markierten Text offline vorlesen zu lassen?',
        answer:
          'Wahrscheinlich, wenn Sie ein einfaches, kostenloses Werkzeug suchen, um Artikel, Dokumente oder Code-Kommentare anzuhören, ohne Text an einen Cloud-Dienst zu schicken. Beachten Sie zuerst die Warnung oben: Das Projekt ist ruhig, und die Website nennt weder Klangqualität noch Speicherbedarf.',
        bullets: [
          'Installer für Windows, macOS (Apple silicon) und Linux; kein Terminal nötig.',
          'Text markieren, Tastenkürzel drücken und in einer von 54 Stimmen vorlesen lassen.',
          'Das rund 115 MB große Modell Kokoro-82M läuft auf einer normalen CPU, ohne GPU.',
          'Laut README bleibt der Text nach dem einmaligen Modell-Download auf Ihrem Rechner.',
          'Laut README dauerhaft kostenlos; kein Konto und kein API-Schlüssel.',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Parrot herunterladen', anchor: 'get-it' },
      { label: 'Parrot im Überblick', anchor: 'at-a-glance' },
      { label: 'Was Parrot ist', anchor: 'what-is-parrot' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Funktionen und Stimmen', anchor: 'features' },
      { label: 'Datenschutz, Lizenz und Kosten', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile und Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Parrot im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen Parrot geeignet ist', anchor: 'who-should-use' },
      { label: 'Für wen Parrot nicht geeignet ist', anchor: 'who-should-not-use' },
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
            text: 'Parrot ist eine quelloffene Desktop-App, die beliebigen markierten Text mit einem kompakten, offline laufenden Sprachmodell vorliest.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als Vorlese-Taste für den ganzen Computer vor: Text in Browser, PDF oder Editor markieren, eine Taste drücken, und eine natürlich klingende Stimme liest ihn vor — ganz ohne Cloud-Dienst.',
          },
        ],
        items: [
          'Geprüfte Version: 26.2.4, veröffentlicht am 25. Februar 2026; die neueste Code-Änderung auf GitHub stammt vom 28. April 2026, daher gilt die Warnung vor einem ruhenden Projekt.',
          'Lizenz und Preis: MIT laut Repository; kostenlos, ohne Konto.',
          'Plattformen: Windows, macOS auf Apple silicon und Linux, jeweils als Desktop-App.',
          'Besondere Funktionen: systemweites Tastenkürzel, Streaming-Wiedergabe, Pause und Fortsetzen, lokaler Verlauf.',
          'Reife: ein kleines Projekt (162 GitHub-Sterne) und ein Fork der Spracherkennungs-App Handy.',
        ],
      },
      getItParrot: {
        id: 'get-it',
        title: 'Parrot herunterladen',
        content: [
          '**Parrot gibt es als Desktop-App mit Doppelklick-Installation für alle drei Desktop-Systeme, ein Terminal ist nicht nötig.** Das README verweist für den Download auf die Website; die Installer hängen außerdem am [aktuellen GitHub-Release](https://github.com/rishiskhare/parrot/releases/latest).',
        ],
        columns: ['Plattform', 'Download'],
        rows: [
          { 'Plattform': 'macOS (Apple silicon)', 'Download': '[Parrot_26.2.4_aarch64.dmg](https://github.com/rishiskhare/parrot/releases/latest)' },
          { 'Plattform': 'Windows', 'Download': '[Parrot_26.2.4_x64-setup.exe oder .msi](https://github.com/rishiskhare/parrot/releases/latest) (ARM64-Builds ebenfalls aufgeführt)' },
          { 'Plattform': 'Linux', 'Download': '[AppImage, .deb oder .rpm](https://github.com/rishiskhare/parrot/releases/latest) für x86-64 und ARM64' },
          { 'Plattform': 'Website', 'Download': '[tryparrot.vercel.app](https://tryparrot.vercel.app/)' },
          { 'Plattform': 'Datenschutzerklärung', 'Download': 'Keine eigene Seite gefunden; siehe [README](https://github.com/rishiskhare/parrot)' },
          { 'Plattform': 'Quellcode', 'Download': '[github.com/rishiskhare/parrot](https://github.com/rishiskhare/parrot)' },
        ],
        note: 'Das Release enthält nur ein Disk-Image für Apple silicon, Intel-Macs sind also nicht abgedeckt. Beim ersten Start fordert die App Sie auf, das Sprachmodell herunterzuladen; dafür ist einmalig eine Internetverbindung nötig.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Parrot im Überblick',
        columns: ['Merkmal', 'Parrot'],
        rows: [
          { 'Merkmal': 'Plattform', 'Parrot': 'Windows, macOS, Linux' },
          { 'Merkmal': 'Preis', 'Parrot': 'Kostenlos' },
          { 'Merkmal': 'Lizenz', 'Parrot': 'MIT' },
          { 'Merkmal': 'Ausführung', 'Parrot': 'Lokal, auf der CPU' },
          { 'Merkmal': 'Sprachen', 'Parrot': '9 Optionen (US- und UK-Englisch getrennt gezählt)' },
          { 'Merkmal': 'Stimmenklonen', 'Parrot': 'Nicht angegeben; 54 vorgegebene Stimmen' },
          { 'Merkmal': 'Streaming-Ausgabe', 'Parrot': 'Ja, das Audio startet, bevor die Synthese fertig ist' },
          { 'Merkmal': 'Nur mit CPU nutzbar', 'Parrot': 'Ja' },
          { 'Merkmal': 'Lokaler API-Server', 'Parrot': 'Nein; nur Kommandozeilen-Optionen' },
        ],
        note: 'Die Merkmale folgen dem Sprachausgabe-Vergleich im Verzeichnis lokaler LLM-Software. Eine fehlende Angabe auf der Website bedeutet „unbekannt“, nicht „nicht unterstützt“.',
      },
      whatIsParrot: {
        id: 'what-is-parrot',
        title: 'Was Parrot ist',
        content: [
          '**Parrot ist ein Vorlese-Werkzeug, kein Sprachstudio.** Die Website nennt es wohl die einfachste Sprachausgabe-App: Ihre einzige Funktion sei es, alles Markierte vorzulesen. Laut Autor soll es nicht die beste, sondern die am leichtesten abwandelbare App sein — eine kleine Basis für Barrierefreiheits-Werkzeuge und Sprachexperimente.',
          'Parrot ist ein Fork von Handy, einer quelloffenen Spracherkennungs-App von CJ Pais, und übernimmt deren Tauri-Architektur mit Rust-Backend. Die Stimme stammt von Kokoro-82M, einem offenen Modell, dessen Hugging-Face-Seite die Lizenz Apache-2.0 nennt; es läuft über die Bibliothek tts-rs des Autors.',
          'Diese Rezension stützt sich auf die Website, das README sowie die GitHub-Releases und -Commits. Einen eigenen Praxistest gab es nicht, daher werden Klangqualität, Tempo und Stabilität hier nicht bewertet.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus einem Installer-Download, einem einmaligen Modell-Download und einem Tastenkürzel.** Die Schritte folgen dem README.',
        ],
        numberedItems: [
          {
            title: 'App für Ihr System installieren',
            whyItMatters: 'Laden Sie sie von der [Website](https://tryparrot.vercel.app/) oder der [Release-Seite](https://github.com/rishiskhare/parrot/releases/latest) herunter und starten Sie den Installer.',
          },
          {
            title: 'Beim ersten Start das Sprachmodell laden',
            whyItMatters: 'Parrot fragt nach dem rund 115 MB großen Modell; ist es gespeichert, arbeitet die App laut README vollständig offline.',
          },
          {
            title: 'Text markieren und Tastenkürzel drücken',
            whyItMatters: 'Standard ist Option+Leertaste unter macOS und Strg+Leertaste unter Windows und Linux; während der Wiedergabe erscheint ein kleines Overlay, und alle Kürzel lassen sich ändern.',
          },
          {
            title: 'Während des Sprechens pausieren oder fortsetzen',
            whyItMatters: 'Mit Option+P (unter Windows und Linux Alt+P) pausieren und setzen Sie die Wiedergabe fort; dieses Kürzel ist nur während der Wiedergabe aktiv.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen und Stimmen',
        content: [
          '**Der Funktionsumfang ist bewusst klein.** Alles Folgende stammt aus dem README und von der Website.',
        ],
        items: [
          '**Funktioniert in jeder App.** Es liest markierten Text aus Browsern, Editoren, PDFs und Terminals vor.',
          '**Streaming-Wiedergabe.** Das Audio beginnt, bevor der gesamte Text synthetisiert ist.',
          '**54 Stimmen in neun Sprachoptionen.** US- und UK-Englisch, Spanisch, Französisch, Hindi, Italienisch, Japanisch, brasilianisches Portugiesisch und Mandarin; die Stimme folgt Ihrer Spracheinstellung oder wird in den Einstellungen gewählt.',
          '**Steuerung.** Wiedergabegeschwindigkeit, Worker-Threads, eine optionale schnellere erste Antwort und ein schwebendes Overlay mit Pause-Steuerung.',
          '**Verlauf.** Frühere Vorlesungen lassen sich ansehen, erneut abspielen, kopieren und löschen, mit Eintragslimit und automatischer Löschfrist.',
          '**Skripting.** Kommandozeilen-Optionen wie `parrot --toggle-transcription` und Unix-Signale lassen Fenstermanager und Hotkey-Werkzeuge das Vorlesen auslösen; unter Wayland ist das der empfohlene Weg.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz, Lizenz und Kosten',
        content: [
          '**Laut README wird Ihr Text auf Ihrem Gerät verarbeitet und nirgendwohin gesendet.** Es nennt keine Cloud, keine Konten und nach dem ersten Modell-Download keine Internetpflicht. Die Website wiederholt, dass der Text auf Ihrem Computer bleibt.',
          'Der Code steht unter MIT-Lizenz, und die App ist laut README kostenlos, ohne Abonnement und ohne API-Schlüssel. Eine eigene Datenschutzerklärung wurde nicht gefunden, und das README nennt nicht, welcher Server den Modell-Download bereitstellt. Diese Rezension hat den Netzwerkverkehr nicht geprüft; die Aussagen stammen also vom Entwickler.',
          'Die Verlaufsfunktion speichert auf Ihrem Rechner, was Parrot vorgelesen hat; Sie können ein Eintragslimit und eine automatische Löschfrist festlegen oder Einträge von Hand löschen.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile und Einschränkungen',
        columns: ['Vorteil', 'Bedeutung im Alltag', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'Neuronale Stimme offline',
            'Bedeutung im Alltag': 'Text anhören, ohne Cloud-Dienst.',
            'Einschränkung / Hinweis': 'Die Stimmqualität wird hier nicht bewertet; das Projekt verlinkt nur eine Hörprobe.',
          },
          {
            'Vorteil': 'Funktioniert in jeder App',
            'Bedeutung im Alltag': 'Ein Kürzel für Browser, PDFs und Editoren.',
            'Einschränkung / Hinweis': 'Unter Wayland braucht es ein Kürzel der Desktop-Umgebung, das die Kommandozeile aufruft.',
          },
          {
            'Vorteil': 'Klein und nur mit CPU',
            'Bedeutung im Alltag': 'Läuft auf einem gewöhnlichen Rechner.',
            'Einschränkung / Hinweis': 'Ein RAM-Wert wird nicht veröffentlicht.',
          },
          {
            'Vorteil': 'Installer für alle Desktops',
            'Bedeutung im Alltag': 'Herunterladen und öffnen, kein Terminal nötig.',
            'Einschränkung / Hinweis': 'Die macOS-Version gibt es nur für Apple silicon.',
          },
          {
            'Vorteil': 'Quelloffen und kostenlos',
            'Bedeutung im Alltag': 'MIT-Code, den Sie abwandeln können.',
            'Einschränkung / Hinweis': 'Kein Update seit dem 28. April 2026; laut Autor schaffen es Funktionswünsche womöglich nicht ins Hauptprojekt.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Parrot im Vergleich zu Alternativen',
        content: [
          'Die meisten anderen Sprachausgabe-Werkzeuge im Verzeichnis sind Engines für Entwickler, keine Vorlese-Apps. Parrot ist das Werkzeug, das Sie installieren und per Tastenkürzel nutzen.',
        ],
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Rolle', 'Wichtigster Unterschied'],
        rows: [
          {
            'App': 'Parrot',
            'Plattformen': 'Windows, macOS, Linux',
            'Preis und Lizenz': 'Kostenlos, MIT',
            'Rolle': 'Vorlese-Desktop-App',
            'Wichtigster Unterschied': 'Text markieren, Taste drücken, zuhören; ohne Programmierung',
          },
          {
            'App': '[Piper TTS](/de/power-local-llm/piper-tts-review)',
            'Plattformen': 'Windows, macOS, Linux',
            'Preis und Lizenz': 'Kostenlos, GPL-3.0',
            'Rolle': 'Sprach-Engine für die Kommandozeile',
            'Wichtigster Unterschied': 'Schnelle CPU-Stimmen für Skripte und Projekte, kein Markierungs-Vorleser',
          },
          {
            'App': '[Izwi](/de/power-local-llm/izwi-review)',
            'Plattformen': 'Windows, macOS, Linux',
            'Preis und Lizenz': 'Kostenlos, MIT',
            'Rolle': 'Lokale Sprach-Runtime',
            'Wichtigster Unterschied': 'Sprachausgabe plus Transkription, Klonen und API',
          },
          {
            'App': '[Coqui TTS](/de/power-local-llm/coqui-tts-review)',
            'Plattformen': 'Windows, macOS, Linux',
            'Preis und Lizenz': 'Kostenlos, MPL 2.0',
            'Rolle': 'Python-Toolkit',
            'Wichtigster Unterschied': 'Viele Modellarchitekturen für Entwickler',
          },
          {
            'App': '[Bark](/de/power-local-llm/bark-tts-review)',
            'Plattformen': 'Windows, macOS, Linux',
            'Preis und Lizenz': 'Kostenlos, MIT',
            'Rolle': 'Generatives Sprachmodell',
            'Wichtigster Unterschied': 'Ergänzt Soundeffekte und Musik; aufwendiger im Betrieb',
          },
        ],
        note: 'Plattform-, Preis- und Funktionsangaben zu Drittanbieter-Apps ändern sich häufig. Prüfen Sie die aktuellen Angaben auf der Seite des jeweiligen Projekts, bevor Sie sich entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen Parrot geeignet ist',
        items: [
          '**Menschen, die gern zuhören.** Artikel, lange E-Mails und Dokumente werden mit einem Tastenkürzel zu Audio.',
          '**Leser mit Barrierefreiheitsbedarf.** Das Projekt versteht die App als Barrierefreiheits-Werkzeug, das nicht hinter einer Bezahlschranke stehen sollte.',
          '**Tüftler.** Der Code ist dafür gedacht, abgewandelt und erweitert zu werden.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen Parrot nicht geeignet ist',
        items: [
          '**Besitzer von Intel-Macs.** Das Release enthält nur einen macOS-Build für Apple silicon.',
          '**Alle, die ein gepflegtes Produkt brauchen.** Es gilt die Warnung vor einem ruhenden Projekt oben.',
          '**Menschen, die Stimmenklonen oder eine API brauchen.** Beides ist nicht dokumentiert; schauen Sie sich die Engines in der Tabelle oben an.',
          '**Nutzer, die dokumentierte Compliance benötigen.** Es gibt keine Datenschutzerklärung.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Braucht Parrot eine GPU?',
            a: 'Nein. Laut README läuft das Modell auf jeder aktuellen CPU; RAM- oder Geschwindigkeitswerte werden nicht veröffentlicht.',
          },
          {
            q: 'Ist Parrot dasselbe wie Handy?',
            a: 'Nein. Handy ist eine Spracherkennungs-App; Parrot ist ein Fork, der die Richtung umkehrt und Text vorliest.',
          },
          {
            q: 'Kann ich die Tastenkürzel ändern?',
            a: 'Ja, alle Kürzel lassen sich in den Einstellungen ändern. Unter Wayland binden Sie Ihr Desktop-Kürzel an `parrot --toggle-transcription`.',
          },
          {
            q: 'Merkt sich die App, was sie vorgelesen hat?',
            a: 'Ja, eine Verlaufsseite speichert frühere Vorlesungen lokal; Sie können die Zahl der Einträge begrenzen oder sie automatisch löschen lassen.',
          },
          {
            q: 'Kann es Stimmen klonen oder als Server laufen?',
            a: 'Beides ist nicht dokumentiert. Es bietet 54 vorgegebene Stimmen und nur Kommandozeilen-Optionen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'Parrot passt, wenn Sie kostenlos und ohne Konto markierten Text auf Ihrem eigenen Rechner vorlesen lassen möchten: Es lässt sich wie eine normale App installieren und erledigt genau eine Aufgabe.',
          'Die Vorbehalte betreffen Reife und Transparenz: kein Update seit dem 28. April 2026, 162 GitHub-Sterne, keine Datenschutzerklärung und keine Angaben zu Stimmqualität oder Speicherbedarf. Probieren Sie es mit einigen Dokumenten aus, bevor Sie sich darauf verlassen, und nehmen Sie die Warnung vor einem ruhenden Projekt ernst.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Parrot-Website](https://tryparrot.vercel.app/) — Produktbeschreibung, Download-Links und Datenschutzaussage.',
          '[Parrot-Seite „About“](https://tryparrot.vercel.app/about) — Projektziele, Fork von Handy und Modell.',
          '[Parrot auf GitHub](https://github.com/rishiskhare/parrot) — README, MIT-Lizenz, Sternezahl und Commit-Verlauf.',
          '[Parrot-Releases](https://github.com/rishiskhare/parrot/releases) — Version 26.2.4 und Installer-Dateien.',
          '[Kokoro-82M auf Hugging Face](https://huggingface.co/hexgrad/Kokoro-82M) — das Sprachmodell und seine Lizenz Apache-2.0.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokale Sprach- und Audio-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — Sprachausgabe, Spracherkennung und Sprachagenten nebeneinander.',
          '[Piper vs. Kokoro TTS](/de/power-local-llm/piper-vs-kokoro-tts) — zwei lokale Sprach-Engines im Vergleich.',
          '[Kokoro vs. ElevenLabs](/de/power-local-llm/kokoro-vs-elevenlabs) — wie das Kokoro-Modell im Vergleich zu einem Cloud-Dienst abschneidet.',
          '[Beste lokale Sprachausgabe für den Mac](/de/power-local-llm/best-local-tts-mac) — lokale Sprachausgabe-Optionen für macOS.',
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
    heroImage: '/images/parrot-review-hero-fr.webp',
    title: 'Test de Parrot : synthèse vocale gratuite et hors ligne pour le texte sélectionné',
    seoTitle: 'Test de Parrot : synthèse vocale gratuite hors ligne',
    intro:
      'Parrot est une application de bureau gratuite et open source qui lit à voix haute tout texte sélectionné, grâce à un petit modèle vocal neuronal exécuté sur votre propre ordinateur. Ce test résume ce que documentent le site, le README et les versions GitHub, ce qu’ils omettent, et comment Parrot se situe face aux autres outils de synthèse vocale de l’annuaire.',
    metaDescription:
      'Test de Parrot : application de bureau gratuite (MIT) pour Windows, macOS et Linux qui lit le texte sélectionné hors ligne avec Kokoro-82M. Non testée.',
    twitterDescription:
      'Test de Parrot : une application open source gratuite qui lit le texte sélectionné sur votre ordinateur avec le modèle Kokoro. Installation, voix, confidentialité, limites, alternatives.',
    audience:
      'Lecteurs qui veulent écouter gratuitement et en privé le texte affiché à l’écran — installation, voix, confidentialité, limites et alternatives.',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Parrot review',
    targetKeywords: [
      'test parrot',
      'parrot synthèse vocale',
      'application text to speech hors ligne',
      'lire le texte sélectionné à voix haute',
      'kokoro-82m application de bureau',
      'synthèse vocale open source gratuite',
    ],
    current_hardware_mentioned: ['CPU', 'Apple silicon'],
    leadAnswerBlock:
      '**Avertissement : Parrot n’a reçu aucune mise à jour depuis le 28 avril 2026 (dernière version 26.2.4, du 25 février 2026) et n’est peut-être plus maintenu — vérifiez qu’il fonctionne sur votre système avant de vous y fier.** **Parrot est une application de bureau gratuite sous licence MIT qui lit à voix haute le texte sélectionné dans n’importe quel programme, avec un modèle vocal exécuté sur votre propre ordinateur.** Ce test porte sur la version 26.2.4 et s’appuie sur le site public, le README et les versions GitHub, non sur un essai pratique.',
    quickAnswerTop: {
      fr: {
        question: 'Parrot vaut-il la peine d’être installé pour faire lire le texte sélectionné hors ligne ?',
        answer:
          'Probablement, si vous voulez un outil simple et gratuit pour écouter des articles, des documents ou des commentaires de code sans envoyer de texte à un service cloud. Tenez d’abord compte de l’avertissement ci-dessus : le projet est calme, et le site ne publie ni qualité sonore ni besoins en mémoire.',
        bullets: [
          'Installateurs pour Windows, macOS (Apple silicon) et Linux ; aucun terminal nécessaire.',
          'Sélectionnez du texte, appuyez sur un raccourci et écoutez-le dans l’une des 54 voix.',
          'Le modèle Kokoro-82M, d’environ 115 Mo, tourne sur un processeur ordinaire, sans GPU.',
          'Selon le README, le texte reste sur votre machine après le téléchargement unique du modèle.',
          'Gratuit en permanence d’après le README ; ni compte ni clé d’API.',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir Parrot', anchor: 'get-it' },
      { label: 'Parrot en un coup d’œil', anchor: 'at-a-glance' },
      { label: 'Ce qu’est Parrot', anchor: 'what-is-parrot' },
      { label: 'Premiers pas', anchor: 'how-to-get-started' },
      { label: 'Fonctionnalités et voix', anchor: 'features' },
      { label: 'Confidentialité, licence et coût', anchor: 'privacy' },
      { label: 'Compromis : avantages et limites', anchor: 'tradeoffs' },
      { label: 'Parrot face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Pour qui Parrot convient', anchor: 'who-should-use' },
      { label: 'Pour qui Parrot ne convient pas', anchor: 'who-should-not-use' },
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
            text: 'Parrot est une application de bureau open source qui lit à voix haute tout texte sélectionné, avec un modèle vocal compact fonctionnant hors ligne.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-y un bouton « lire à voix haute » pour tout l’ordinateur : surlignez du texte dans un navigateur, un PDF ou un éditeur, appuyez sur une touche, et une voix naturelle le lit sans service cloud.',
          },
        ],
        items: [
          'Version testée : 26.2.4, publiée le 25 février 2026 ; la modification de code la plus récente sur GitHub date du 28 avril 2026, l’avertissement de projet peu actif s’applique donc.',
          'Licence et prix : MIT d’après le dépôt ; gratuit, sans compte.',
          'Plateformes : Windows, macOS sur Apple silicon et Linux, en application de bureau.',
          'Points forts : raccourci à l’échelle du système, lecture en streaming, pause et reprise, historique local.',
          'Maturité : un petit projet (162 étoiles GitHub), fork de l’application de reconnaissance vocale Handy.',
        ],
      },
      getItParrot: {
        id: 'get-it',
        title: 'Obtenir Parrot',
        content: [
          '**Parrot existe en application de bureau à installer d’un double-clic sur les trois systèmes, aucun terminal n’est nécessaire.** Le README renvoie au site pour le téléchargement ; les installateurs sont aussi joints à la [dernière version GitHub](https://github.com/rishiskhare/parrot/releases/latest).',
        ],
        columns: ['Plateforme', 'Téléchargement'],
        rows: [
          { 'Plateforme': 'macOS (Apple silicon)', 'Téléchargement': '[Parrot_26.2.4_aarch64.dmg](https://github.com/rishiskhare/parrot/releases/latest)' },
          { 'Plateforme': 'Windows', 'Téléchargement': '[Parrot_26.2.4_x64-setup.exe ou .msi](https://github.com/rishiskhare/parrot/releases/latest) (versions ARM64 également listées)' },
          { 'Plateforme': 'Linux', 'Téléchargement': '[AppImage, .deb ou .rpm](https://github.com/rishiskhare/parrot/releases/latest) pour x86-64 et ARM64' },
          { 'Plateforme': 'Site web', 'Téléchargement': '[tryparrot.vercel.app](https://tryparrot.vercel.app/)' },
          { 'Plateforme': 'Politique de confidentialité', 'Téléchargement': 'Aucune page dédiée ; voir le [README](https://github.com/rishiskhare/parrot)' },
          { 'Plateforme': 'Code source', 'Téléchargement': '[github.com/rishiskhare/parrot](https://github.com/rishiskhare/parrot)' },
        ],
        note: 'La version ne propose qu’une image disque pour Apple silicon : les Mac Intel ne sont donc pas couverts. Au premier lancement, l’application demande de télécharger le modèle vocal, ce qui exige une connexion internet une seule fois.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Parrot en un coup d’œil',
        columns: ['Attribut', 'Parrot'],
        rows: [
          { 'Attribut': 'Plateforme', 'Parrot': 'Windows, macOS, Linux' },
          { 'Attribut': 'Prix', 'Parrot': 'Gratuit' },
          { 'Attribut': 'Licence', 'Parrot': 'MIT' },
          { 'Attribut': 'Exécution', 'Parrot': 'En local, sur le processeur' },
          { 'Attribut': 'Langues', 'Parrot': '9 options (anglais US et UK comptés séparément)' },
          { 'Attribut': 'Clonage de voix', 'Parrot': 'Non indiqué ; 54 voix prédéfinies' },
          { 'Attribut': 'Sortie en streaming', 'Parrot': 'Oui, l’audio démarre avant la fin de la synthèse' },
          { 'Attribut': 'Utilisable sur processeur seul', 'Parrot': 'Oui' },
          { 'Attribut': 'Serveur d’API local', 'Parrot': 'Non ; options de ligne de commande uniquement' },
        ],
        note: 'Les attributs suivent la comparaison de synthèse vocale de l’annuaire des logiciels de LLM locaux. L’absence d’indication sur le site signifie « inconnu », pas « non pris en charge ».',
      },
      whatIsParrot: {
        id: 'what-is-parrot',
        title: 'Ce qu’est Parrot',
        content: [
          '**Parrot est un utilitaire de lecture à voix haute, pas un studio vocal.** Le site le présente comme probablement l’application de synthèse vocale la plus simple : sa seule fonction est de lire tout ce que vous sélectionnez. Son auteur dit viser non pas la meilleure application, mais la plus facile à adapter — une petite base pour des outils d’accessibilité et des expériences vocales.',
          'C’est un fork de Handy, une application de reconnaissance vocale open source de CJ Pais, dont il reprend l’architecture Tauri avec un backend Rust. La voix vient de Kokoro-82M, un modèle ouvert dont la page Hugging Face indique la licence Apache-2.0, exécuté via la bibliothèque tts-rs de l’auteur.',
          'Ce test s’appuie sur le site, le README ainsi que les versions et commits GitHub. Il n’a donné lieu à aucun essai pratique : la qualité vocale, la vitesse et la stabilité ne sont donc pas évaluées ici.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Premiers pas',
        content: [
          '**La mise en route consiste à télécharger un installateur, à récupérer le modèle une seule fois, puis à utiliser un raccourci.** Les étapes suivent le README.',
        ],
        numberedItems: [
          {
            title: 'Installer l’application pour votre système',
            whyItMatters: 'Téléchargez-la depuis le [site](https://tryparrot.vercel.app/) ou la [page des versions](https://github.com/rishiskhare/parrot/releases/latest) et lancez l’installateur.',
          },
          {
            title: 'Télécharger le modèle vocal au premier lancement',
            whyItMatters: 'Parrot propose de récupérer le modèle d’environ 115 Mo ; une fois stocké, le README indique que l’application fonctionne entièrement hors ligne.',
          },
          {
            title: 'Sélectionner du texte et appuyer sur le raccourci',
            whyItMatters: 'Par défaut, Option+Espace sous macOS et Ctrl+Espace sous Windows et Linux ; une petite surimpression s’affiche pendant la lecture, et tous les raccourcis sont modifiables.',
          },
          {
            title: 'Mettre en pause ou reprendre pendant la lecture',
            whyItMatters: 'Option+P (Alt+P sous Windows et Linux) met la lecture en pause et la reprend ; ce raccourci n’est actif que pendant la lecture.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités et voix',
        content: [
          '**L’ensemble de fonctionnalités est volontairement réduit.** Tout ce qui suit provient du README et du site.',
        ],
        items: [
          '**Fonctionne dans n’importe quelle application.** Il lit le texte sélectionné dans les navigateurs, éditeurs, PDF et terminaux.',
          '**Lecture en streaming.** L’audio démarre avant que tout le texte ne soit synthétisé.',
          '**54 voix pour neuf options de langue.** Anglais US et UK, espagnol, français, hindi, italien, japonais, portugais brésilien et mandarin ; la voix suit votre réglage de langue ou se choisit dans les paramètres.',
          '**Commandes.** Vitesse de lecture, threads de travail, une accélération facultative de la première réponse et une surimpression flottante avec commandes de pause.',
          '**Historique.** Les lectures passées peuvent être consultées, rejouées, copiées et supprimées, avec une limite d’entrées et un délai de suppression automatique.',
          '**Scripts.** Des options de ligne de commande comme `parrot --toggle-transcription` et des signaux Unix permettent aux gestionnaires de fenêtres et outils de raccourcis de déclencher la lecture, ce qui est la voie recommandée sous Wayland.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité, licence et coût',
        content: [
          '**Selon le README, votre texte est traité sur votre appareil et n’est envoyé nulle part.** Il ne mentionne ni cloud, ni compte, ni connexion internet requise après le premier téléchargement du modèle. Le site répète que le texte reste sur votre ordinateur.',
          'Le code est sous licence MIT et l’application est gratuite, sans abonnement ni clé d’API, d’après le README. Aucune page de politique de confidentialité distincte n’a été trouvée, et le README ne précise pas quel serveur héberge le téléchargement du modèle. Ce test n’a pas inspecté le trafic réseau : ces affirmations sont donc celles du développeur.',
          'La fonction d’historique conserve sur votre machine ce que Parrot a lu ; vous pouvez fixer une limite d’entrées et un délai de suppression automatique, ou supprimer les entrées à la main.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: ['Avantage', 'En pratique', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Voix neuronale hors ligne',
            'En pratique': 'Écouter du texte sans service cloud.',
            'Limite / réserve': 'La qualité vocale n’est pas évaluée ici ; le projet ne lie qu’un échantillon audio.',
          },
          {
            'Avantage': 'Fonctionne dans toute application',
            'En pratique': 'Un seul raccourci pour navigateurs, PDF et éditeurs.',
            'Limite / réserve': 'Sous Wayland, il faut un raccourci de l’environnement de bureau qui appelle la ligne de commande.',
          },
          {
            'Avantage': 'Léger et sur processeur seul',
            'En pratique': 'Tourne sur un ordinateur ordinaire.',
            'Limite / réserve': 'Aucune valeur de RAM n’est publiée.',
          },
          {
            'Avantage': 'Installateurs pour tous les ordinateurs',
            'En pratique': 'Télécharger et ouvrir, sans terminal.',
            'Limite / réserve': 'La version macOS ne vise que Apple silicon.',
          },
          {
            'Avantage': 'Open source et gratuit',
            'En pratique': 'Du code MIT que vous pouvez adapter.',
            'Limite / réserve': 'Aucune mise à jour depuis le 28 avril 2026 ; selon l’auteur, les demandes de fonctionnalités n’entrent pas forcément dans le projet principal.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Parrot face aux alternatives',
        content: [
          'La plupart des autres outils de synthèse vocale de l’annuaire sont des moteurs pour développeurs, pas des applications de lecture. Parrot est celui que l’on installe et que l’on utilise d’un raccourci.',
        ],
        columns: ['Application', 'Plateformes', 'Prix et licence', 'Rôle', 'Différence principale'],
        rows: [
          {
            'Application': 'Parrot',
            'Plateformes': 'Windows, macOS, Linux',
            'Prix et licence': 'Gratuit, MIT',
            'Rôle': 'Application de lecture à voix haute',
            'Différence principale': 'Sélectionner du texte, appuyer sur une touche, écouter ; sans code',
          },
          {
            'Application': '[Piper TTS](/fr/power-local-llm/piper-tts-review)',
            'Plateformes': 'Windows, macOS, Linux',
            'Prix et licence': 'Gratuit, GPL-3.0',
            'Rôle': 'Moteur vocal en ligne de commande',
            'Différence principale': 'Voix rapides sur processeur pour scripts et projets, pas un lecteur de sélection',
          },
          {
            'Application': '[Izwi](/fr/power-local-llm/izwi-review)',
            'Plateformes': 'Windows, macOS, Linux',
            'Prix et licence': 'Gratuit, MIT',
            'Rôle': 'Environnement vocal local',
            'Différence principale': 'Sortie vocale plus transcription, clonage et API',
          },
          {
            'Application': '[Coqui TTS](/fr/power-local-llm/coqui-tts-review)',
            'Plateformes': 'Windows, macOS, Linux',
            'Prix et licence': 'Gratuit, MPL 2.0',
            'Rôle': 'Boîte à outils Python',
            'Différence principale': 'De nombreuses architectures de modèles pour développeurs',
          },
          {
            'Application': '[Bark](/fr/power-local-llm/bark-tts-review)',
            'Plateformes': 'Windows, macOS, Linux',
            'Prix et licence': 'Gratuit, MIT',
            'Rôle': 'Modèle vocal génératif',
            'Différence principale': 'Ajoute effets sonores et musique ; plus lourd à exécuter',
          },
        ],
        note: 'Les plateformes, prix et fonctionnalités des applications tierces changent souvent. Vérifiez les informations actuelles sur la page de chaque projet avant de décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui Parrot convient',
        items: [
          '**Les personnes qui aiment écouter.** Articles, longs e-mails et documents deviennent de l’audio d’un seul raccourci.',
          '**Les lecteurs ayant des besoins d’accessibilité.** Le projet présente l’application comme un outil d’accessibilité qui ne devrait pas être payant.',
          '**Les bricoleurs.** Le code est conçu pour être adapté et étendu.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Pour qui Parrot ne convient pas',
        items: [
          '**Les propriétaires de Mac Intel.** La version ne propose qu’une application macOS pour Apple silicon.',
          '**Ceux qui ont besoin d’un produit maintenu.** L’avertissement de projet peu actif en haut de page s’applique.',
          '**Ceux qui ont besoin de clonage de voix ou d’une API.** Ni l’un ni l’autre n’est documenté ; regardez les moteurs du tableau ci-dessus.',
          '**Les utilisateurs qui exigent une conformité documentée.** Il n’existe pas de page de politique de confidentialité.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Parrot a-t-il besoin d’un GPU ?',
            a: 'Non. Le README indique que le modèle tourne sur tout processeur récent ; aucune valeur de RAM ni de vitesse n’est publiée.',
          },
          {
            q: 'Parrot est-il la même chose que Handy ?',
            a: 'Non. Handy est une application de reconnaissance vocale ; Parrot en est un fork qui inverse le sens et lit le texte à voix haute.',
          },
          {
            q: 'Puis-je changer les raccourcis ?',
            a: 'Oui, tous les raccourcis se modifient dans les paramètres. Sous Wayland, associez votre raccourci de bureau à `parrot --toggle-transcription`.',
          },
          {
            q: 'Conserve-t-il une trace de ce qu’il a lu ?',
            a: 'Oui, une page Historique stocke les lectures passées en local ; vous pouvez limiter le nombre d’entrées ou les supprimer automatiquement.',
          },
          {
            q: 'Peut-il cloner une voix ou fonctionner comme serveur ?',
            a: 'Ni l’un ni l’autre n’est documenté. Il propose 54 voix prédéfinies et seulement des options de ligne de commande.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Parrot convient si vous voulez, gratuitement et sans compte, écouter le texte sélectionné sur votre propre ordinateur : il s’installe comme une application ordinaire et fait une seule chose.',
          'Les réserves tiennent à la maturité et à la transparence : aucune mise à jour depuis le 28 avril 2026, 162 étoiles GitHub, pas de page de politique de confidentialité et aucun chiffre sur la qualité vocale ou la mémoire. Essayez-le sur quelques documents avant de vous y fier, et prenez l’avertissement de projet peu actif au sérieux.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de Parrot](https://tryparrot.vercel.app/) — description du produit, liens de téléchargement et déclaration de confidentialité.',
          '[Page « À propos » de Parrot](https://tryparrot.vercel.app/about) — objectifs du projet, fork de Handy et modèle.',
          '[Parrot sur GitHub](https://github.com/rishiskhare/parrot) — README, licence MIT, nombre d’étoiles et historique des commits.',
          '[Versions de Parrot](https://github.com/rishiskhare/parrot/releases) — version 26.2.4 et fichiers d’installation.',
          '[Kokoro-82M sur Hugging Face](https://huggingface.co/hexgrad/Kokoro-82M) — le modèle vocal et sa licence Apache-2.0.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Pour aller plus loin',
        items: [
          '[Outils vocaux locaux comparés](/fr/power-local-llm/local-llm-voice-audio-compared) — synthèse vocale, reconnaissance vocale et agents vocaux côte à côte.',
          '[Piper vs Kokoro TTS](/fr/power-local-llm/piper-vs-kokoro-tts) — deux moteurs vocaux locaux comparés.',
          '[Kokoro vs ElevenLabs](/fr/power-local-llm/kokoro-vs-elevenlabs) — comment le modèle Kokoro se compare à un service cloud.',
          '[Meilleure synthèse vocale locale sur Mac](/fr/power-local-llm/best-local-tts-mac) — options de synthèse vocale locale pour macOS.',
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
    heroImage: '/images/parrot-review-hero-ja.webp',
    title: 'Parrotレビュー：選択したテキストを読み上げる無料のオフライン音声合成アプリ',
    seoTitle: 'Parrotレビュー：無料のオフライン音声合成・読み上げアプリ',
    intro:
      'Parrotは、選択したテキストを自分のパソコン上で動く小型のニューラル音声モデルで読み上げる、無料のオープンソースのデスクトップアプリです。このレビューでは、公式サイト・README・GitHubリリースで確認できる内容と記載のない点、そしてディレクトリ内の他の音声合成ツールとの違いをまとめます。',
    metaDescription:
      'Parrotレビュー：Kokoro-82Mモデルで選択テキストをオフラインで読み上げる、Windows・macOS・Linux対応の無料MITライセンスアプリ。実機テストはしていません。',
    twitterDescription:
      'Parrotレビュー：Kokoroモデルで選択テキストをパソコン上で読み上げる無料のオープンソースアプリ。導入、音声、プライバシー、制限、代替ツールを解説します。',
    audience:
      '画面上のテキストを無料かつプライベートに読み上げたい方向けに、導入、音声、プライバシー、制限、代替ツールを解説します。',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Parrot review',
    targetKeywords: [
      'parrot レビュー',
      'parrot 音声合成',
      'オフライン 読み上げ アプリ',
      '選択テキスト 読み上げ',
      'kokoro-82m デスクトップアプリ',
      '無料 オープンソース 音声合成',
    ],
    current_hardware_mentioned: ['CPU', 'Apple silicon'],
    leadAnswerBlock:
      '**警告：Parrotは2026年4月28日以降更新されておらず（最新リリースは2026年2月25日の26.2.4）、メンテナンスが終了している可能性があります。利用前にお使いの環境で動作するか確認してください。** **Parrotは、任意のアプリで選択したテキストを、自分のパソコン上で動く音声モデルで読み上げる、無料のMITライセンスのデスクトップアプリです。** 本レビューはバージョン26.2.4が対象で、公式サイト、README、GitHubリリースの情報に基づいており、実機テストは行っていません。',
    quickAnswerTop: {
      ja: {
        question: 'Parrotは、選択したテキストをオフラインで読み上げるために導入する価値がありますか？',
        answer:
          'クラウドサービスにテキストを送らずに、記事や文書、コードのコメントを聞きたい方には、おそらく向いています。ただし、まず上の警告を確認してください。プロジェクトの動きは止まっており、サイトには音質やメモリ使用量の数値も載っていません。',
        bullets: [
          'Windows、macOS（Apple silicon）、Linux向けのインストーラーがあり、ターミナルは不要です。',
          'テキストを選択してショートカットを押すと、54種類の音声のいずれかで読み上げます。',
          '約115 MBのKokoro-82Mモデルは、GPUなしの通常のCPUで動作します。',
          'READMEによると、モデルを一度ダウンロードした後は、テキストはお使いのマシンの外に出ません。',
          'READMEでは今後も無料とされており、アカウントやAPIキーは不要です。',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Parrotを入手する', anchor: 'get-it' },
      { label: 'Parrotの概要', anchor: 'at-a-glance' },
      { label: 'Parrotとは', anchor: 'what-is-parrot' },
      { label: '始め方', anchor: 'how-to-get-started' },
      { label: '機能と音声', anchor: 'features' },
      { label: 'プライバシー、ライセンス、費用', anchor: 'privacy' },
      { label: 'メリットと制限', anchor: 'tradeoffs' },
      { label: 'Parrotと代替ツールの比較', anchor: 'vs-alternatives' },
      { label: 'Parrotが向いている人', anchor: 'who-should-use' },
      { label: 'Parrotが向いていない人', anchor: 'who-should-not-use' },
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
            text: 'Parrotは、選択した任意のテキストを、オフラインで動く小型の音声モデルで読み上げるオープンソースのデスクトップアプリです。',
          },
          {
            type: 'plain-terms',
            text: 'パソコン全体で使える「読み上げボタン」だと考えてください。ブラウザ、PDF、エディタでテキストを選択してキーを押すだけで、クラウドサービスなしに自然な音声で読み上げます。',
          },
        ],
        items: [
          '確認したバージョン：26.2.4（2026年2月25日公開）。GitHubで最新のコード変更は2026年4月28日のため、更新停止の警告が当てはまります。',
          'ライセンスと価格：リポジトリによるとMIT。無料でアカウントも不要です。',
          '対応環境：Windows、Apple siliconのmacOS、Linuxのデスクトップアプリです。',
          '主な特長：システム全体で使えるショートカット、ストリーミング再生、一時停止と再開、ローカル履歴。',
          '成熟度：小規模なプロジェクト（GitHubスター162）で、音声認識アプリHandyのフォークです。',
        ],
      },
      getItParrot: {
        id: 'get-it',
        title: 'Parrotを入手する',
        content: [
          '**Parrotは3つのデスクトップOSすべてで、ダブルクリックでインストールできるデスクトップアプリとして提供され、ターミナルは不要です。** READMEではダウンロード先として公式サイトが案内されており、インストーラーは[最新のGitHubリリース](https://github.com/rishiskhare/parrot/releases/latest)にも添付されています。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          { 'プラットフォーム': 'macOS（Apple silicon）', '入手先': '[Parrot_26.2.4_aarch64.dmg](https://github.com/rishiskhare/parrot/releases/latest)' },
          { 'プラットフォーム': 'Windows', '入手先': '[Parrot_26.2.4_x64-setup.exe または .msi](https://github.com/rishiskhare/parrot/releases/latest)（ARM64版も掲載）' },
          { 'プラットフォーム': 'Linux', '入手先': 'x86-64とARM64向けの[AppImage、.deb、.rpm](https://github.com/rishiskhare/parrot/releases/latest)' },
          { 'プラットフォーム': '公式サイト', '入手先': '[tryparrot.vercel.app](https://tryparrot.vercel.app/)' },
          { 'プラットフォーム': 'プライバシーポリシー', '入手先': '独立したプライバシーポリシーのページは見つかりませんでした。[README](https://github.com/rishiskhare/parrot)と公式サイトにローカル処理の説明があります' },
          { 'プラットフォーム': 'ソースコード', '入手先': '[github.com/rishiskhare/parrot](https://github.com/rishiskhare/parrot)' },
        ],
        note: 'リリースにはApple silicon向けのディスクイメージしかないため、Intel Macは対象外です。初回起動時に音声モデルのダウンロードを求められ、このときだけインターネット接続が必要です。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Parrotの概要',
        columns: ['項目', 'Parrot'],
        rows: [
          { '項目': '対応環境', 'Parrot': 'Windows、macOS、Linux' },
          { '項目': '価格', 'Parrot': '無料' },
          { '項目': 'ライセンス', 'Parrot': 'MIT' },
          { '項目': '実行場所', 'Parrot': 'ローカル（CPU）' },
          { '項目': '対応言語', 'Parrot': '9種類（米国英語と英国英語を別々に数える）' },
          { '項目': '音声クローン', 'Parrot': '記載なし。54種類のプリセット音声' },
          { '項目': 'ストリーミング出力', 'Parrot': '対応。合成の完了前に再生が始まる' },
          { '項目': 'CPUのみで利用可能', 'Parrot': '可能' },
          { '項目': 'ローカルAPIサーバー', 'Parrot': 'なし。コマンドラインのオプションのみ' },
        ],
        note: 'この項目は、ローカルLLMソフトウェアディレクトリで使っている音声合成の比較に沿っています。サイトに記載がないことは「不明」を意味し、「非対応」ではありません。',
      },
      whatIsParrot: {
        id: 'what-is-parrot',
        title: 'Parrotとは',
        content: [
          '**Parrotは読み上げ用のユーティリティであり、音声制作スタジオではありません。** 公式サイトでは「おそらく最もシンプルな音声合成アプリ」とされ、唯一の機能は選択したものを読み上げることです。作者は、最高のアプリではなく「最も改変しやすい」アプリを目指しており、アクセシビリティ向けツールや音声の実験の小さな土台にしたいと述べています。',
          'CJ Pais氏によるオープンソースの音声認識アプリHandyのフォークで、RustバックエンドのTauriアーキテクチャを引き継いでいます。音声はKokoro-82M（Hugging Faceのページではライセンスが Apache-2.0 とされるオープンモデル）で、作者のライブラリtts-rsを通じて動作します。',
          '本レビューは、公式サイト、README、GitHubのリリースとコミットに基づいています。実機テストは行っていないため、音質、速度、安定性は評価していません。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '始め方',
        content: [
          '**セットアップは、インストーラーのダウンロード、モデルの一度きりのダウンロード、そしてショートカットの利用です。** 手順はREADMEに沿っています。',
        ],
        numberedItems: [
          {
            title: 'お使いのシステム向けにアプリをインストールする',
            whyItMatters: '[公式サイト](https://tryparrot.vercel.app/)または[リリースページ](https://github.com/rishiskhare/parrot/releases/latest)からダウンロードし、インストーラーを実行します。',
          },
          {
            title: '初回起動時に音声モデルをダウンロードする',
            whyItMatters: 'Parrotが約115 MBのモデルのダウンロードを求めます。保存後は完全にオフラインで動作するとREADMEに書かれています。',
          },
          {
            title: 'テキストを選択してショートカットを押す',
            whyItMatters: '既定はmacOSがOption+Space、WindowsとLinuxがCtrl+Spaceです。再生中は小さなオーバーレイが表示され、すべてのショートカットは変更できます。',
          },
          {
            title: '読み上げ中に一時停止・再開する',
            whyItMatters: 'Option+P（WindowsとLinuxはAlt+P）で再生を一時停止・再開できます。このショートカットは再生中のみ有効です。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '機能と音声',
        content: [
          '**機能は意図的に絞られています。** 以下はすべてREADMEと公式サイトに基づいています。',
        ],
        items: [
          '**どのアプリでも使えます。** ブラウザ、エディタ、PDF、ターミナルで選択したテキストを読み上げます。',
          '**ストリーミング再生。** テキスト全体の合成が終わる前に音声が流れ始めます。',
          '**9つの言語オプションで54種類の音声。** 米国・英国の英語、スペイン語、フランス語、ヒンディー語、イタリア語、日本語、ブラジルのポルトガル語、中国語（標準語）に対応し、音声は言語設定に合わせて選ばれるか、設定で選択できます。',
          '**操作。** 再生速度、ワーカースレッド、任意の初回応答の高速化、一時停止ボタン付きのフローティングオーバーレイ。',
          '**履歴。** 過去の読み上げを閲覧、再生、コピー、削除でき、保存件数の上限と自動削除期間を設定できます。',
          '**スクリプト連携。** `parrot --toggle-transcription` などのコマンドラインオプションやUnixシグナルで、ウィンドウマネージャーやホットキーツールから読み上げを起動できます。Waylandではこの方法が推奨されています。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー、ライセンス、費用',
        content: [
          '**READMEによると、テキストは端末上で処理され、どこにも送信されません。** クラウドもアカウントも使わず、最初のモデルのダウンロード後はインターネットも不要と記載されています。公式サイトでも、テキストはパソコンの外に出ないと繰り返し説明されています。',
          'READMEによれば、コードはMITライセンスで、アプリは無料、サブスクリプションもAPIキーも不要です。独立したプライバシーポリシーのページは見つからず、モデルのダウンロード元サーバーもREADMEには書かれていません。本レビューでは通信内容を確認していないため、これらは開発者自身の説明です。',
          '履歴機能は、Parrotが読み上げた内容をお使いのマシンに保存します。保存件数の上限や自動削除期間を設定するか、手動で削除できます。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'メリットと制限',
        columns: ['メリット', '実際の使い勝手', '制限・注意点'],
        rows: [
          {
            'メリット': 'オフラインのニューラル音声',
            '実際の使い勝手': 'クラウドサービスなしでテキストを聞けます。',
            '制限・注意点': '音質は本レビューでは評価していません。プロジェクトが公開しているのは音声サンプルだけです。',
          },
          {
            'メリット': 'どのアプリでも使える',
            '実際の使い勝手': 'ブラウザ、PDF、エディタを1つのショートカットで操作できます。',
            '制限・注意点': 'Waylandでは、コマンドラインを呼び出すデスクトップ側のショートカットが必要です。',
          },
          {
            'メリット': '小型でCPUのみ',
            '実際の使い勝手': '一般的なパソコンで動作します。',
            '制限・注意点': 'RAMの目安は公開されていません。',
          },
          {
            'メリット': 'すべてのデスクトップ向けインストーラー',
            '実際の使い勝手': 'ダウンロードして開くだけで、ターミナルは不要です。',
            '制限・注意点': 'macOS版はApple siliconのみです。',
          },
          {
            'メリット': 'オープンソースで無料',
            '実際の使い勝手': '改変できるMITライセンスのコードです。',
            '制限・注意点': '2026年4月28日以降更新がなく、作者は機能要望がメインプロジェクトに入らない場合があると述べています。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Parrotと代替ツールの比較',
        content: [
          'ディレクトリ内の他の音声合成ツールの多くは、読み上げアプリではなく開発者向けのエンジンです。Parrotは、インストールしてショートカットで使うタイプのアプリです。',
        ],
        columns: ['アプリ', '対応環境', '価格とライセンス', '役割', '主な違い'],
        rows: [
          {
            'アプリ': 'Parrot',
            '対応環境': 'Windows、macOS、Linux',
            '価格とライセンス': '無料、MIT',
            '役割': '読み上げデスクトップアプリ',
            '主な違い': 'テキストを選択してキーを押すだけで聞ける。コーディング不要',
          },
          {
            'アプリ': '[Piper TTS](/ja/power-local-llm/piper-tts-review)',
            '対応環境': 'Windows、macOS、Linux',
            '価格とライセンス': '無料、GPL-3.0',
            '役割': 'コマンドライン音声エンジン',
            '主な違い': 'スクリプトやプロジェクト向けの高速なCPU音声で、選択テキストの読み上げ用ではない',
          },
          {
            'アプリ': '[Izwi](/ja/power-local-llm/izwi-review)',
            '対応環境': 'Windows、macOS、Linux',
            '価格とライセンス': '無料、MIT',
            '役割': 'ローカル音声ランタイム',
            '主な違い': '音声出力に加えて文字起こし、クローン、APIにも対応',
          },
          {
            'アプリ': '[Coqui TTS](/ja/power-local-llm/coqui-tts-review)',
            '対応環境': 'Windows、macOS、Linux',
            '価格とライセンス': '無料、MPL 2.0',
            '役割': 'Pythonツールキット',
            '主な違い': '開発者向けの多様なモデルアーキテクチャ',
          },
          {
            'アプリ': '[Bark](/ja/power-local-llm/bark-tts-review)',
            '対応環境': 'Windows、macOS、Linux',
            '価格とライセンス': '無料、MIT',
            '役割': '生成型の音声モデル',
            '主な違い': '効果音や音楽も生成できる。動作は重め',
          },
        ],
        note: '他社アプリの対応環境、価格、機能は頻繁に変わります。決める前に、各プロジェクトの公式ページで最新情報を確認してください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Parrotが向いている人',
        items: [
          '**聞くのが好きな人。** 記事、長いメール、文書をショートカット1つで音声にできます。',
          '**アクセシビリティが必要な人。** プロジェクトは、有料の壁の向こうに置くべきでないアクセシビリティツールとしてこのアプリを位置づけています。',
          '**自分で手を加えたい人。** コードは改変・拡張されることを前提に作られています。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Parrotが向いていない人',
        items: [
          '**Intel Macをお使いの人。** リリースにあるのはApple silicon向けのmacOS版のみです。',
          '**保守されている製品が必要な人。** 冒頭の更新停止の警告が当てはまります。',
          '**音声クローンやAPIが必要な人。** どちらも記載がありません。上の表のエンジンを検討してください。',
          '**文書化されたコンプライアンスが必要な人。** プライバシーポリシーのページがありません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'ParrotにGPUは必要ですか？',
            a: 'いいえ。READMEによると、モデルは最近のCPUで動作します。RAMや速度の数値は公開されていません。',
          },
          {
            q: 'ParrotはHandyと同じものですか？',
            a: 'いいえ。Handyは音声認識アプリで、Parrotはその向きを逆にしてテキストを読み上げるフォークです。',
          },
          {
            q: 'ショートカットは変更できますか？',
            a: 'はい。すべてのショートカットは設定で変更できます。Waylandでは、デスクトップのショートカットを `parrot --toggle-transcription` に割り当ててください。',
          },
          {
            q: '読み上げた内容は記録されますか？',
            a: 'はい。履歴ページに過去の読み上げがローカルで保存されます。件数を制限したり、自動で削除したりできます。',
          },
          {
            q: '声のクローンやサーバーとしての動作はできますか？',
            a: 'どちらも記載がありません。54種類のプリセット音声とコマンドラインのオプションだけが用意されています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          'アカウント不要で無料のまま、選択したテキストを自分のパソコンで読み上げたい方には、Parrotは向いています。通常のアプリと同じようにインストールでき、役割は1つに絞られています。',
          '懸念点は成熟度と透明性です。2026年4月28日以降の更新がなく、GitHubスターは162、プライバシーポリシーのページがなく、音質やメモリの数値もありません。頼る前にいくつかの文書で試し、更新停止の警告は重く受け止めてください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Parrot公式サイト](https://tryparrot.vercel.app/) — 製品説明、ダウンロードリンク、プライバシーに関する記述。',
          '[Parrotのaboutページ](https://tryparrot.vercel.app/about) — プロジェクトの目標、Handyのフォークであること、モデル。',
          '[GitHubのParrot](https://github.com/rishiskhare/parrot) — README、MITライセンス、スター数、コミット履歴。',
          '[Parrotのリリース](https://github.com/rishiskhare/parrot/releases) — バージョン26.2.4とインストーラーファイル。',
          '[Hugging FaceのKokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) — 音声モデルとそのApache-2.0ライセンス。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカル音声ツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — 音声合成、音声認識、音声エージェントを並べて比較。',
          '[Piper vs Kokoro TTS](/ja/power-local-llm/piper-vs-kokoro-tts) — 2つのローカル音声エンジンの比較。',
          '[Kokoro vs ElevenLabs](/ja/power-local-llm/kokoro-vs-elevenlabs) — Kokoroモデルとクラウドサービスの比較。',
          '[Mac向けおすすめローカルTTS](/ja/power-local-llm/best-local-tts-mac) — macOSで使えるローカル音声合成の選択肢。',
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
    heroImage: '/images/parrot-review-hero-zh.webp',
    title: 'Parrot评测：免费离线朗读选中文本的文字转语音应用',
    seoTitle: 'Parrot评测：免费离线文字转语音朗读应用，选中文本即读',
    intro:
      'Parrot是一款免费开源的桌面应用，用运行在你自己电脑上的小型神经语音模型朗读你选中的任何文本。本评测梳理其官网、README和GitHub发布页记录了什么、遗漏了什么，以及它与目录中其他文字转语音工具相比如何。',
    metaDescription:
      'Parrot评测：免费的MIT许可桌面应用，支持Windows、macOS和Linux，用Kokoro-82M模型离线朗读选中文本。未做实际测试。',
    twitterDescription:
      'Parrot评测：一款免费开源应用，用Kokoro模型在你的电脑上朗读选中文本。安装、语音、隐私、局限与替代工具。',
    audience:
      '想免费、私密地听屏幕文字被朗读的读者——涵盖安装、语音、隐私、局限与替代工具。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Parrot review',
    targetKeywords: [
      'parrot评测',
      'parrot 文字转语音',
      '离线文字转语音应用',
      '朗读选中文本',
      'kokoro-82m 桌面应用',
      '免费开源语音合成',
    ],
    current_hardware_mentioned: ['CPU', 'Apple silicon'],
    leadAnswerBlock:
      '**警告：Parrot自2026年4月28日以来未再更新（最新版本为2026年2月25日发布的26.2.4），可能已无人维护——使用前请先确认它能在你的系统上正常运行。** **Parrot是一款免费、采用MIT许可的桌面应用，可在任何程序中朗读你选中的文本，语音模型运行在你自己的电脑上。** 本评测对应版本26.2.4，依据公开的官网、README和GitHub发布页撰写，并未实际测试。',
    quickAnswerTop: {
      zh: {
        question: 'Parrot值得安装，用来离线朗读选中的文本吗？',
        answer:
          '如果你想要一个简单、免费的工具来收听文章、文档或代码注释，又不想把文本发给云服务，那大概值得一试。请先留意上面的警告：项目已经沉寂，官网也没有公布音质或内存数据。',
        bullets: [
          '提供Windows、macOS（Apple silicon）和Linux安装包，无需终端。',
          '选中文本，按下快捷键，即可用54种语音之一朗读。',
          '约115 MB的Kokoro-82M模型可在普通CPU上运行，不需要GPU。',
          'README称，一次性下载模型后，文本不会离开你的电脑。',
          'README称永久免费，无需账号或API密钥。',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: '获取Parrot', anchor: 'get-it' },
      { label: 'Parrot概览', anchor: 'at-a-glance' },
      { label: 'Parrot是什么', anchor: 'what-is-parrot' },
      { label: '入门步骤', anchor: 'how-to-get-started' },
      { label: '功能与语音', anchor: 'features' },
      { label: '隐私、许可证与费用', anchor: 'privacy' },
      { label: '优势与限制', anchor: 'tradeoffs' },
      { label: 'Parrot与替代工具对比', anchor: 'vs-alternatives' },
      { label: '适合使用Parrot的人', anchor: 'who-should-use' },
      { label: '不适合使用Parrot的人', anchor: 'who-should-not-use' },
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
            text: 'Parrot是一款开源桌面应用，用可离线运行的紧凑语音模型朗读你选中的任何文本。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作整台电脑的“朗读按钮”：在浏览器、PDF或编辑器里选中文本，按一下快捷键，就有自然的语音读给你听，全程不需要云服务。',
          },
        ],
        items: [
          '评测版本：26.2.4，发布于2026年2月25日；GitHub上最新的代码改动是2026年4月28日，因此适用项目沉寂警告。',
          '许可证与价格：据代码仓库为MIT；免费，无需账号。',
          '平台：Windows、Apple silicon版macOS和Linux桌面应用。',
          '亮点：系统级快捷键、流式播放、暂停与继续、本地历史记录。',
          '成熟度：小型项目（162个GitHub星标），是语音转文字应用Handy的分支。',
        ],
      },
      getItParrot: {
        id: 'get-it',
        title: '获取Parrot',
        content: [
          '**Parrot在三大桌面系统上都提供双击安装的桌面应用，无需使用终端。** README把下载引导到官网；安装包也附在[最新GitHub发布页](https://github.com/rishiskhare/parrot/releases/latest)上。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          { '平台': 'macOS（Apple silicon）', '获取方式': '[Parrot_26.2.4_aarch64.dmg](https://github.com/rishiskhare/parrot/releases/latest)' },
          { '平台': 'Windows', '获取方式': '[Parrot_26.2.4_x64-setup.exe 或 .msi](https://github.com/rishiskhare/parrot/releases/latest)（另列有ARM64版本）' },
          { '平台': 'Linux', '获取方式': '适用于x86-64和ARM64的[AppImage、.deb或.rpm](https://github.com/rishiskhare/parrot/releases/latest)' },
          { '平台': '官网', '获取方式': '[tryparrot.vercel.app](https://tryparrot.vercel.app/)' },
          { '平台': '隐私政策', '获取方式': '未找到单独的隐私政策页面；[README](https://github.com/rishiskhare/parrot)和官网说明了本地处理' },
          { '平台': '源代码', '获取方式': '[github.com/rishiskhare/parrot](https://github.com/rishiskhare/parrot)' },
        ],
        note: '该发布版本只列出Apple silicon的磁盘映像，因此不支持Intel版Mac。首次启动时应用会提示下载语音模型，这一步需要联网一次。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Parrot概览',
        columns: ['属性', 'Parrot'],
        rows: [
          { '属性': '平台', 'Parrot': 'Windows、macOS、Linux' },
          { '属性': '价格', 'Parrot': '免费' },
          { '属性': '许可证', 'Parrot': 'MIT' },
          { '属性': '运行位置', 'Parrot': '本地，使用CPU' },
          { '属性': '语言', 'Parrot': '9个选项（美式与英式英语分开计算）' },
          { '属性': '声音克隆', 'Parrot': '未说明；54种预设语音' },
          { '属性': '流式输出', 'Parrot': '支持，合成完成前就开始播放' },
          { '属性': '仅用CPU即可运行', 'Parrot': '是' },
          { '属性': '本地API服务器', 'Parrot': '没有；仅提供命令行选项' },
        ],
        note: '这些属性沿用本地LLM软件目录中的文字转语音对比。官网未提及表示“未知”，而不是“不支持”。',
      },
      whatIsParrot: {
        id: 'what-is-parrot',
        title: 'Parrot是什么',
        content: [
          '**Parrot是一个朗读小工具，不是语音工作室。** 官网称它大概是最简单的文字转语音应用：唯一的功能就是朗读你选中的内容。作者表示，目标不是做最好的应用，而是做最容易二次开发的应用，作为无障碍工具和语音实验的小型基础。',
          '它是CJ Pais开发的开源语音转文字应用Handy的分支，沿用其Tauri架构和Rust后端。语音来自Kokoro-82M（Hugging Face页面标注的许可证为Apache-2.0的开放模型），通过作者自己的tts-rs库运行。',
          '本评测依据官网、README以及GitHub的发布和提交记录。未做实际测试，因此这里不评价音质、速度和稳定性。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '入门步骤',
        content: [
          '**设置过程是：下载安装包，一次性下载模型，然后使用快捷键。** 步骤依据README。',
        ],
        numberedItems: [
          {
            title: '为你的系统安装应用',
            whyItMatters: '从[官网](https://tryparrot.vercel.app/)或[发布页](https://github.com/rishiskhare/parrot/releases/latest)下载并运行安装程序。',
          },
          {
            title: '首次启动时下载语音模型',
            whyItMatters: 'Parrot会提示下载约115 MB的模型；README称，存储之后应用可完全离线工作。',
          },
          {
            title: '选中文本并按下快捷键',
            whyItMatters: '默认在macOS上是Option+空格，在Windows和Linux上是Ctrl+空格；播放时会显示一个小浮层，所有快捷键都可以修改。',
          },
          {
            title: '朗读时暂停或继续',
            whyItMatters: 'Option+P（Windows和Linux上为Alt+P）可暂停和继续播放；该快捷键只在播放期间有效。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '功能与语音',
        content: [
          '**功能集有意保持精简。** 以下内容均来自README和官网。',
        ],
        items: [
          '**可在任何应用中使用。** 能朗读浏览器、编辑器、PDF和终端中选中的文本。',
          '**流式播放。** 整段文本合成完成之前就开始播放音频。',
          '**9个语言选项共54种语音。** 美式与英式英语、西班牙语、法语、印地语、意大利语、日语、巴西葡萄牙语和普通话；语音会跟随你的语言设置，也可以在设置中手动选择。',
          '**控制。** 播放速度、工作线程、可选的首次响应加速，以及带暂停控件的悬浮浮层。',
          '**历史记录。** 过往朗读内容可以浏览、重播、复制和删除，并可设置条目上限和自动删除周期。',
          '**脚本调用。** `parrot --toggle-transcription`等命令行选项和Unix信号，可让窗口管理器和快捷键工具触发朗读；在Wayland上推荐这种方式。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私、许可证与费用',
        content: [
          '**README称，你的文本在设备上处理，不会发送到任何地方。** 它列出没有云端、没有账号，首次下载模型之后也无需联网。官网重申文本留在你的电脑上。',
          '据README，代码采用MIT许可，应用免费，无需订阅或API密钥。未找到单独的隐私政策页面，README也没有说明模型从哪台服务器下载。本评测未检查网络流量，因此这些说法出自开发者本人。',
          '历史记录功能会把Parrot朗读过的内容保存在你的电脑上；你可以设置条目上限和自动删除周期，也可以手动删除。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '优势与限制',
        columns: ['优势', '实际使用中的意义', '限制 / 注意事项'],
        rows: [
          {
            '优势': '离线神经语音',
            '实际使用中的意义': '无需云服务就能收听文本。',
            '限制 / 注意事项': '这里不评价音质；项目只链接了一段音频样例。',
          },
          {
            '优势': '可在任何应用中使用',
            '实际使用中的意义': '一个快捷键搞定浏览器、PDF和编辑器。',
            '限制 / 注意事项': '在Wayland上需要由桌面环境的快捷键去调用命令行。',
          },
          {
            '优势': '体积小，仅需CPU',
            '实际使用中的意义': '在普通电脑上就能运行。',
            '限制 / 注意事项': '未公布内存（RAM）需求。',
          },
          {
            '优势': '所有桌面系统都有安装包',
            '实际使用中的意义': '下载后打开即可，无需终端。',
            '限制 / 注意事项': 'macOS版只支持Apple silicon。',
          },
          {
            '优势': '开源且免费',
            '实际使用中的意义': '可自行修改的MIT许可代码。',
            '限制 / 注意事项': '2026年4月28日以来没有更新；作者表示功能请求不一定会进入主项目。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Parrot与替代工具对比',
        content: [
          '目录中其他大多数文字转语音工具是面向开发者的引擎，而不是朗读应用。Parrot是你装好后用快捷键直接使用的那一个。',
        ],
        columns: ['应用', '平台', '价格与许可证', '角色', '主要区别'],
        rows: [
          {
            '应用': 'Parrot',
            '平台': 'Windows、macOS、Linux',
            '价格与许可证': '免费，MIT',
            '角色': '朗读类桌面应用',
            '主要区别': '选中文本、按键、收听；无需编程',
          },
          {
            '应用': '[Piper TTS](/zh/power-local-llm/piper-tts-review)',
            '平台': 'Windows、macOS、Linux',
            '价格与许可证': '免费，GPL-3.0',
            '角色': '命令行语音引擎',
            '主要区别': '适合脚本和项目的快速CPU语音，不是选中文本朗读器',
          },
          {
            '应用': '[Izwi](/zh/power-local-llm/izwi-review)',
            '平台': 'Windows、macOS、Linux',
            '价格与许可证': '免费，MIT',
            '角色': '本地语音运行时',
            '主要区别': '除语音输出外，还有转写、克隆和API',
          },
          {
            '应用': '[Coqui TTS](/zh/power-local-llm/coqui-tts-review)',
            '平台': 'Windows、macOS、Linux',
            '价格与许可证': '免费，MPL 2.0',
            '角色': 'Python工具包',
            '主要区别': '面向开发者的多种模型架构',
          },
          {
            '应用': '[Bark](/zh/power-local-llm/bark-tts-review)',
            '平台': 'Windows、macOS、Linux',
            '价格与许可证': '免费，MIT',
            '角色': '生成式语音模型',
            '主要区别': '可加入音效和音乐；运行更吃资源',
          },
        ],
        note: '第三方应用的平台、价格和功能经常变化。决定之前，请在各项目自己的页面上核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合使用Parrot的人',
        items: [
          '**喜欢用听的人。** 文章、长邮件和文档，一个快捷键就能变成音频。',
          '**有无障碍需求的读者。** 项目把这款应用定位为不该被付费墙挡住的无障碍工具。',
          '**爱折腾的人。** 代码本来就是为了被修改和扩展而设计的。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '不适合使用Parrot的人',
        items: [
          '**Intel版Mac用户。** 发布版本只列出Apple silicon的macOS构建。',
          '**需要持续维护产品的人。** 开头的项目沉寂警告同样适用。',
          '**需要声音克隆或API的人。** 两者都没有文档说明；请看上表中的引擎。',
          '**需要有据可查的合规说明的用户。** 没有隐私政策页面。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Parrot需要GPU吗？',
            a: '不需要。README称模型可在任何较新的CPU上运行；未公布内存或速度数据。',
          },
          {
            q: 'Parrot和Handy是同一个东西吗？',
            a: '不是。Handy是语音转文字应用；Parrot是它的分支，方向相反，用来朗读文本。',
          },
          {
            q: '可以修改快捷键吗？',
            a: '可以，所有快捷键都能在设置中修改。在Wayland上，请把桌面快捷键绑定到`parrot --toggle-transcription`。',
          },
          {
            q: '它会保留朗读过的内容吗？',
            a: '会，历史记录页面在本地保存过往朗读内容；你可以限制条目数量或让其自动删除。',
          },
          {
            q: '能克隆声音或当作服务器运行吗？',
            a: '两者都没有文档说明。它只提供54种预设语音和命令行选项。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '如果你想免费、免账号地在自己的电脑上收听选中的文本，Parrot很合适：它像普通应用一样安装，只做一件事。',
          '需要保留的是成熟度和透明度：2026年4月28日以来没有更新，只有162个GitHub星标，没有隐私政策页面，也没有音质或内存数据。依赖它之前，先用几份文档试一试，并认真对待项目沉寂的警告。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Parrot官网](https://tryparrot.vercel.app/) — 产品介绍、下载链接和隐私说明。',
          '[Parrot关于页面](https://tryparrot.vercel.app/about) — 项目目标、Handy分支关系和模型。',
          '[GitHub上的Parrot](https://github.com/rishiskhare/parrot) — README、MIT许可证、星标数和提交历史。',
          '[Parrot发布页](https://github.com/rishiskhare/parrot/releases) — 版本26.2.4和安装文件。',
          '[Hugging Face上的Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) — 语音模型及其Apache-2.0许可证。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地语音与音频工具对比](/zh/power-local-llm/local-llm-voice-audio-compared) — 文字转语音、语音转文字和语音智能体并排对比。',
          '[Piper vs Kokoro TTS](/zh/power-local-llm/piper-vs-kokoro-tts) — 两个本地语音引擎的对比。',
          '[Kokoro vs ElevenLabs](/zh/power-local-llm/kokoro-vs-elevenlabs) — Kokoro模型与云服务的对比。',
          '[Mac上最好的本地TTS](/zh/power-local-llm/best-local-tts-mac) — macOS上的本地文字转语音选择。',
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
    heroImage: '/images/parrot-review-hero-es.webp',
    title: 'Reseña de Parrot: texto a voz gratuito y sin conexión para el texto seleccionado',
    seoTitle: 'Reseña de Parrot: app gratuita de texto a voz sin conexión',
    intro:
      'Parrot es una app de escritorio gratuita y de código abierto que lee en voz alta cualquier texto que selecciones con un pequeño modelo de voz neuronal que se ejecuta en tu propio equipo. Esta reseña recoge lo que documentan su sitio web, su README y sus versiones de GitHub, lo que omiten y cómo se compara con otras herramientas de texto a voz del directorio.',
    metaDescription:
      'Reseña de Parrot: app de escritorio gratis (MIT) para Windows, macOS y Linux que lee el texto seleccionado sin conexión con Kokoro-82M. Sin probar.',
    twitterDescription:
      'Reseña de Parrot: una app gratuita de código abierto que lee en voz alta el texto seleccionado en tu equipo con el modelo Kokoro. Instalación, voces, privacidad, límites y alternativas.',
    audience:
      'Lectores que quieren escuchar de forma gratuita y privada el texto que ven en pantalla: instalación, voces, privacidad, límites y alternativas.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Parrot review',
    targetKeywords: [
      'reseña parrot',
      'parrot texto a voz',
      'app texto a voz sin conexión',
      'leer en voz alta texto seleccionado',
      'kokoro-82m app de escritorio',
      'texto a voz gratuito de código abierto',
    ],
    current_hardware_mentioned: ['CPU', 'Apple silicon'],
    leadAnswerBlock:
      '**Advertencia: Parrot no recibe actualizaciones desde el 28 de abril de 2026 (última versión 26.2.4, del 25 de febrero de 2026), por lo que podría estar sin mantenimiento; comprueba que funciona en tu sistema antes de depender de él.** **Parrot es una app de escritorio gratuita con licencia MIT que lee en voz alta el texto que seleccionas en cualquier programa, con un modelo de voz que se ejecuta en tu propio equipo.** Esta reseña cubre la versión 26.2.4 y se basa en el sitio web público, el README y las versiones de GitHub, no en una prueba práctica.',
    quickAnswerTop: {
      es: {
        question: '¿Vale la pena instalar Parrot para que lea en voz alta el texto seleccionado sin conexión?',
        answer:
          'Probablemente, si quieres una herramienta sencilla y gratuita para escuchar artículos, documentos o comentarios de código sin enviar texto a un servicio en la nube. Antes ten en cuenta la advertencia de arriba: el proyecto está parado y el sitio no publica calidad de sonido ni consumo de memoria.',
        bullets: [
          'Instaladores para Windows, macOS (Apple silicon) y Linux; no hace falta terminal.',
          'Selecciona texto, pulsa un atajo y escúchalo en una de las 54 voces.',
          'El modelo Kokoro-82M, de unos 115 MB, funciona con una CPU normal, sin GPU.',
          'Según el README, el texto se queda en tu equipo tras la descarga única del modelo.',
          'Gratis para siempre según el README; sin cuenta ni clave de API.',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Conseguir Parrot', anchor: 'get-it' },
      { label: 'Parrot de un vistazo', anchor: 'at-a-glance' },
      { label: 'Qué es Parrot', anchor: 'what-is-parrot' },
      { label: 'Primeros pasos', anchor: 'how-to-get-started' },
      { label: 'Funciones y voces', anchor: 'features' },
      { label: 'Privacidad, licencia y coste', anchor: 'privacy' },
      { label: 'Ventajas y limitaciones', anchor: 'tradeoffs' },
      { label: 'Parrot frente a las alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quién es Parrot', anchor: 'who-should-use' },
      { label: 'Para quién no es Parrot', anchor: 'who-should-not-use' },
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
            text: 'Parrot es una app de escritorio de código abierto que lee en voz alta cualquier texto seleccionado con un modelo de voz compacto que funciona sin conexión.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en un botón de «leer en voz alta» para todo el equipo: resaltas texto en un navegador, un PDF o un editor, pulsas una tecla y una voz natural lo lee sin ningún servicio en la nube.',
          },
        ],
        items: [
          'Versión revisada: 26.2.4, publicada el 25 de febrero de 2026; el cambio de código más reciente en GitHub es del 28 de abril de 2026, así que se aplica la advertencia de proyecto parado.',
          'Licencia y precio: MIT según el repositorio; gratis, sin cuenta.',
          'Plataformas: Windows, macOS en Apple silicon y Linux, como apps de escritorio.',
          'Funciones destacadas: atajo en todo el sistema, reproducción en streaming, pausa y reanudación, historial local.',
          'Madurez: un proyecto pequeño (162 estrellas en GitHub) y una bifurcación de la app de voz a texto Handy.',
        ],
      },
      getItParrot: {
        id: 'get-it',
        title: 'Conseguir Parrot',
        content: [
          '**Parrot se distribuye como app de escritorio con instalación a doble clic en los tres sistemas, así que no hace falta terminal.** El README remite al sitio web para la descarga; los instaladores también están adjuntos a la [última versión de GitHub](https://github.com/rishiskhare/parrot/releases/latest).',
        ],
        columns: ['Plataforma', 'Descarga'],
        rows: [
          { 'Plataforma': 'macOS (Apple silicon)', 'Descarga': '[Parrot_26.2.4_aarch64.dmg](https://github.com/rishiskhare/parrot/releases/latest)' },
          { 'Plataforma': 'Windows', 'Descarga': '[Parrot_26.2.4_x64-setup.exe o .msi](https://github.com/rishiskhare/parrot/releases/latest) (también figuran versiones ARM64)' },
          { 'Plataforma': 'Linux', 'Descarga': '[AppImage, .deb o .rpm](https://github.com/rishiskhare/parrot/releases/latest) para x86-64 y ARM64' },
          { 'Plataforma': 'Sitio web', 'Descarga': '[tryparrot.vercel.app](https://tryparrot.vercel.app/)' },
          { 'Plataforma': 'Política de privacidad', 'Descarga': 'Sin página propia; consulta el [README](https://github.com/rishiskhare/parrot)' },
          { 'Plataforma': 'Código fuente', 'Descarga': '[github.com/rishiskhare/parrot](https://github.com/rishiskhare/parrot)' },
        ],
        note: 'La versión solo incluye una imagen de disco para Apple silicon, así que los Mac con Intel no están cubiertos. En el primer inicio la app te pide descargar el modelo de voz, para lo que se necesita conexión a internet una sola vez.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Parrot de un vistazo',
        columns: ['Atributo', 'Parrot'],
        rows: [
          { 'Atributo': 'Plataforma', 'Parrot': 'Windows, macOS, Linux' },
          { 'Atributo': 'Precio', 'Parrot': 'Gratis' },
          { 'Atributo': 'Licencia', 'Parrot': 'MIT' },
          { 'Atributo': 'Ejecución', 'Parrot': 'En local, con la CPU' },
          { 'Atributo': 'Idiomas', 'Parrot': '9 opciones (inglés de EE. UU. y del Reino Unido contados por separado)' },
          { 'Atributo': 'Clonación de voz', 'Parrot': 'No indicada; 54 voces predefinidas' },
          { 'Atributo': 'Salida en streaming', 'Parrot': 'Sí, el audio empieza antes de terminar la síntesis' },
          { 'Atributo': 'Utilizable solo con CPU', 'Parrot': 'Sí' },
          { 'Atributo': 'Servidor de API local', 'Parrot': 'No; solo opciones de línea de comandos' },
        ],
        note: 'Los atributos siguen la comparación de texto a voz del directorio de software de LLM locales. Que falte una indicación en el sitio significa «desconocido», no «no compatible».',
      },
      whatIsParrot: {
        id: 'what-is-parrot',
        title: 'Qué es Parrot',
        content: [
          '**Parrot es una utilidad de lectura en voz alta, no un estudio de voz.** El sitio web lo presenta como probablemente la app de texto a voz más sencilla: su única función es leer en voz alta lo que selecciones. El autor dice que su meta no es la mejor app, sino la más fácil de bifurcar, una base pequeña para herramientas de accesibilidad y experimentos de voz.',
          'Es una bifurcación de Handy, una app de voz a texto de código abierto de CJ Pais, y conserva su arquitectura Tauri con backend en Rust. La voz procede de Kokoro-82M, un modelo abierto cuya página de Hugging Face indica la licencia Apache-2.0, que se ejecuta mediante la biblioteca tts-rs del autor.',
          'Esta reseña se basa en el sitio web, el README y las versiones y commits de GitHub. No incluyó ninguna prueba práctica, así que aquí no se valoran la calidad de la voz, la velocidad ni la estabilidad.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeros pasos',
        content: [
          '**La puesta en marcha consiste en descargar un instalador, bajar el modelo una sola vez y usar un atajo.** Los pasos siguen el README.',
        ],
        numberedItems: [
          {
            title: 'Instala la app para tu sistema',
            whyItMatters: 'Descárgala desde el [sitio web](https://tryparrot.vercel.app/) o la [página de versiones](https://github.com/rishiskhare/parrot/releases/latest) y ejecuta el instalador.',
          },
          {
            title: 'Descarga el modelo de voz en el primer inicio',
            whyItMatters: 'Parrot te pide el modelo de unos 115 MB; una vez guardado, el README dice que la app funciona totalmente sin conexión.',
          },
          {
            title: 'Selecciona texto y pulsa el atajo',
            whyItMatters: 'Por defecto es Option+Espacio en macOS y Ctrl+Espacio en Windows y Linux; mientras suena el audio aparece una pequeña superposición, y todos los atajos se pueden cambiar.',
          },
          {
            title: 'Pausa o reanuda mientras habla',
            whyItMatters: 'Option+P (Alt+P en Windows y Linux) pausa y reanuda la reproducción; este atajo solo está activo durante la reproducción.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones y voces',
        content: [
          '**El conjunto de funciones es pequeño a propósito.** Todo lo siguiente procede del README y del sitio web.',
        ],
        items: [
          '**Funciona en cualquier app.** Lee texto seleccionado en navegadores, editores, PDF y terminales.',
          '**Reproducción en streaming.** El audio empieza antes de que se haya sintetizado todo el texto.',
          '**54 voces en nueve opciones de idioma.** Inglés de EE. UU. y del Reino Unido, español, francés, hindi, italiano, japonés, portugués de Brasil y mandarín; la voz sigue tu ajuste de idioma o se elige en Ajustes.',
          '**Controles.** Velocidad de reproducción, hilos de trabajo, una aceleración opcional de la primera respuesta y una superposición flotante con controles de pausa.',
          '**Historial.** Las lecturas anteriores se pueden ver, repetir, copiar y borrar, con un límite de entradas y un plazo de borrado automático.',
          '**Automatización.** Opciones de línea de comandos como `parrot --toggle-transcription` y señales Unix permiten que gestores de ventanas y herramientas de atajos inicien la lectura, que es la vía recomendada en Wayland.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad, licencia y coste',
        content: [
          '**El README dice que tu texto se procesa en tu dispositivo y no se envía a ninguna parte.** No menciona nube, cuentas ni conexión a internet tras la primera descarga del modelo. El sitio web repite que el texto se queda en tu equipo.',
          'El código tiene licencia MIT y la app es gratuita, sin suscripción ni clave de API, según el README. No se encontró una página de política de privacidad independiente, y el README no indica qué servidor aloja la descarga del modelo. Esta reseña no inspeccionó el tráfico de red, así que estas afirmaciones son del propio desarrollador.',
          'La función de historial guarda en tu equipo lo que Parrot ha leído; puedes fijar un límite de entradas y un plazo de borrado automático, o borrar entradas a mano.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Ventajas y limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / salvedad'],
        rows: [
          {
            'Ventaja': 'Voz neuronal sin conexión',
            'Qué significa en el uso real': 'Escuchar texto sin un servicio en la nube.',
            'Limitación / salvedad': 'Aquí no se valora la calidad de la voz; el proyecto solo enlaza una muestra de audio.',
          },
          {
            'Ventaja': 'Funciona en cualquier app',
            'Qué significa en el uso real': 'Un atajo para navegadores, PDF y editores.',
            'Limitación / salvedad': 'En Wayland hace falta un atajo del entorno de escritorio que llame a la línea de comandos.',
          },
          {
            'Ventaja': 'Pequeño y solo con CPU',
            'Qué significa en el uso real': 'Funciona en un equipo corriente.',
            'Limitación / salvedad': 'No se publica ninguna cifra de RAM.',
          },
          {
            'Ventaja': 'Instaladores para todos los escritorios',
            'Qué significa en el uso real': 'Descargar y abrir, sin terminal.',
            'Limitación / salvedad': 'La versión de macOS es solo para Apple silicon.',
          },
          {
            'Ventaja': 'Código abierto y gratis',
            'Qué significa en el uso real': 'Código MIT que puedes modificar.',
            'Limitación / salvedad': 'Sin actualizaciones desde el 28 de abril de 2026; el autor dice que las peticiones de funciones pueden no llegar al proyecto principal.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Parrot frente a las alternativas',
        content: [
          'La mayoría de las demás herramientas de texto a voz del directorio son motores para desarrolladores, no apps de lectura. Parrot es la que instalas y usas con un atajo.',
        ],
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Función', 'Diferencia clave'],
        rows: [
          {
            'App': 'Parrot',
            'Plataformas': 'Windows, macOS, Linux',
            'Precio y licencia': 'Gratis, MIT',
            'Función': 'App de escritorio de lectura en voz alta',
            'Diferencia clave': 'Seleccionar texto, pulsar una tecla, escuchar; sin programar',
          },
          {
            'App': '[Piper TTS](/es/power-local-llm/piper-tts-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Precio y licencia': 'Gratis, GPL-3.0',
            'Función': 'Motor de voz de línea de comandos',
            'Diferencia clave': 'Voces rápidas con CPU para scripts y proyectos, no un lector de selección',
          },
          {
            'App': '[Izwi](/es/power-local-llm/izwi-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Precio y licencia': 'Gratis, MIT',
            'Función': 'Entorno de voz local',
            'Diferencia clave': 'Salida de voz más transcripción, clonación y API',
          },
          {
            'App': '[Coqui TTS](/es/power-local-llm/coqui-tts-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Precio y licencia': 'Gratis, MPL 2.0',
            'Función': 'Kit de herramientas de Python',
            'Diferencia clave': 'Muchas arquitecturas de modelos para desarrolladores',
          },
          {
            'App': '[Bark](/es/power-local-llm/bark-tts-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Precio y licencia': 'Gratis, MIT',
            'Función': 'Modelo de voz generativo',
            'Diferencia clave': 'Añade efectos de sonido y música; más pesado de ejecutar',
          },
        ],
        note: 'Las plataformas, los precios y las funciones de las apps de terceros cambian con frecuencia. Comprueba los datos actuales en la página de cada proyecto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es Parrot',
        items: [
          '**Quienes prefieren escuchar.** Artículos, correos largos y documentos se convierten en audio con un atajo.',
          '**Lectores con necesidades de accesibilidad.** El proyecto presenta la app como una herramienta de accesibilidad que no debería estar tras un muro de pago.',
          '**Aficionados a trastear.** El código está pensado para modificarse y ampliarse.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quién no es Parrot',
        items: [
          '**Quienes tengan un Mac con Intel.** La versión solo incluye una compilación de macOS para Apple silicon.',
          '**Quienes necesiten un producto con mantenimiento.** Se aplica la advertencia de proyecto parado de arriba.',
          '**Quienes necesiten clonación de voz o una API.** Ninguna está documentada; mira los motores de la tabla anterior.',
          '**Usuarios que necesiten cumplimiento documentado.** No hay página de política de privacidad.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Parrot necesita una GPU?',
            a: 'No. El README dice que el modelo funciona con cualquier CPU moderna; no publica cifras de RAM ni de velocidad.',
          },
          {
            q: '¿Parrot es lo mismo que Handy?',
            a: 'No. Handy es una app de voz a texto; Parrot es una bifurcación que invierte el sentido y lee el texto en voz alta.',
          },
          {
            q: '¿Puedo cambiar los atajos?',
            a: 'Sí, todos los atajos se pueden cambiar en Ajustes. En Wayland, asigna tu atajo de escritorio a `parrot --toggle-transcription`.',
          },
          {
            q: '¿Guarda un registro de lo que ha leído?',
            a: 'Sí, una página de Historial guarda las lecturas anteriores en local; puedes limitar el número de entradas o borrarlas automáticamente.',
          },
          {
            q: '¿Puede clonar una voz o funcionar como servidor?',
            a: 'Ninguna de las dos cosas está documentada. Ofrece 54 voces predefinidas y solo opciones de línea de comandos.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'Parrot encaja si quieres escuchar el texto seleccionado en tu propio equipo, gratis y sin cuenta: se instala como una app normal y hace una sola cosa.',
          'Las salvedades son la madurez y la transparencia: sin actualizaciones desde el 28 de abril de 2026, 162 estrellas en GitHub, sin página de política de privacidad y sin cifras de calidad de voz ni de memoria. Pruébalo con unos cuantos documentos antes de depender de él y toma en serio la advertencia de proyecto parado.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Parrot](https://tryparrot.vercel.app/) — descripción del producto, enlaces de descarga y declaración de privacidad.',
          '[Página «About» de Parrot](https://tryparrot.vercel.app/about) — objetivos del proyecto, bifurcación de Handy y modelo.',
          '[Parrot en GitHub](https://github.com/rishiskhare/parrot) — README, licencia MIT, número de estrellas e historial de commits.',
          '[Versiones de Parrot](https://github.com/rishiskhare/parrot/releases) — versión 26.2.4 y archivos de instalación.',
          '[Kokoro-82M en Hugging Face](https://huggingface.co/hexgrad/Kokoro-82M) — el modelo de voz y su licencia Apache-2.0.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Herramientas de voz y audio locales comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — texto a voz, voz a texto y agentes de voz, lado a lado.',
          '[Piper vs Kokoro TTS](/es/power-local-llm/piper-vs-kokoro-tts) — dos motores de voz locales comparados.',
          '[Kokoro vs ElevenLabs](/es/power-local-llm/kokoro-vs-elevenlabs) — cómo se compara el modelo Kokoro con un servicio en la nube.',
          '[Mejor TTS local para Mac](/es/power-local-llm/best-local-tts-mac) — opciones de texto a voz local para macOS.',
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
    heroImage: '/images/parrot-review-hero-pt.webp',
    title: 'Análise do Parrot: texto para voz gratuito e offline para o texto selecionado',
    seoTitle: 'Análise do Parrot: app gratuito de texto para voz offline',
    intro:
      'O Parrot é um aplicativo de desktop gratuito e de código aberto que lê em voz alta qualquer texto que você selecionar, usando um pequeno modelo de voz neural que roda no seu próprio computador. Esta análise reúne o que o site, o README e as versões do GitHub documentam, o que deixam de fora e como ele se compara a outras ferramentas de texto para voz do diretório.',
    metaDescription:
      'Análise do Parrot: app de desktop gratuito (MIT) para Windows, macOS e Linux que lê o texto selecionado offline com o Kokoro-82M. Sem teste prático.',
    twitterDescription:
      'Análise do Parrot: um app gratuito de código aberto que lê em voz alta o texto selecionado no seu computador com o modelo Kokoro. Instalação, vozes, privacidade, limites e alternativas.',
    audience:
      'Leitores que querem ouvir de graça e com privacidade o texto que veem na tela — cobre instalação, vozes, privacidade, limites e alternativas.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Parrot review',
    targetKeywords: [
      'análise parrot',
      'parrot texto para voz',
      'app de texto para voz offline',
      'ler em voz alta texto selecionado',
      'kokoro-82m app de desktop',
      'texto para voz gratuito de código aberto',
    ],
    current_hardware_mentioned: ['CPU', 'Apple silicon'],
    leadAnswerBlock:
      '**Aviso: o Parrot não recebe atualização desde 28 de abril de 2026 (última versão 26.2.4, de 25 de fevereiro de 2026) e pode estar sem manutenção — confirme se funciona no seu sistema antes de depender dele.** **O Parrot é um aplicativo de desktop gratuito, com licença MIT, que lê em voz alta o texto que você seleciona em qualquer programa, usando um modelo de voz que roda no seu próprio computador.** Esta análise cobre a versão 26.2.4 e se baseia no site público, no README e nas versões do GitHub, não em um teste prático.',
    quickAnswerTop: {
      pt: {
        question: 'Vale a pena instalar o Parrot para ouvir o texto selecionado offline?',
        answer:
          'Provavelmente, se você quer uma ferramenta simples e gratuita para ouvir artigos, documentos ou comentários de código sem enviar texto a um serviço na nuvem. Antes, leve em conta o aviso acima: o projeto está parado, e o site não publica qualidade de som nem uso de memória.',
        bullets: [
          'Instaladores para Windows, macOS (Apple silicon) e Linux; não precisa de terminal.',
          'Selecione o texto, aperte um atalho e ouça em uma das 54 vozes.',
          'O modelo Kokoro-82M, de cerca de 115 MB, roda em uma CPU comum, sem GPU.',
          'Segundo o README, o texto fica no seu computador depois do download único do modelo.',
          'Gratuito para sempre segundo o README; sem conta nem chave de API.',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Obter o Parrot', anchor: 'get-it' },
      { label: 'Parrot em resumo', anchor: 'at-a-glance' },
      { label: 'O que é o Parrot', anchor: 'what-is-parrot' },
      { label: 'Primeiros passos', anchor: 'how-to-get-started' },
      { label: 'Recursos e vozes', anchor: 'features' },
      { label: 'Privacidade, licença e custo', anchor: 'privacy' },
      { label: 'Vantagens e limitações', anchor: 'tradeoffs' },
      { label: 'Parrot e as alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem o Parrot serve', anchor: 'who-should-use' },
      { label: 'Para quem o Parrot não serve', anchor: 'who-should-not-use' },
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
            text: 'O Parrot é um aplicativo de desktop de código aberto que lê em voz alta qualquer texto selecionado com um modelo de voz compacto que funciona offline.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como um botão de «ler em voz alta» para o computador inteiro: você destaca o texto no navegador, em um PDF ou em um editor, aperta uma tecla e uma voz natural lê para você, sem nenhum serviço na nuvem.',
          },
        ],
        items: [
          'Versão analisada: 26.2.4, lançada em 25 de fevereiro de 2026; a alteração de código mais recente no GitHub é de 28 de abril de 2026, então vale o aviso de projeto parado.',
          'Licença e preço: MIT segundo o repositório; gratuito, sem conta.',
          'Plataformas: Windows, macOS em Apple silicon e Linux, como aplicativos de desktop.',
          'Destaques: atalho em todo o sistema, reprodução em streaming, pausa e retomada, histórico local.',
          'Maturidade: um projeto pequeno (162 estrelas no GitHub) e um fork do app de voz para texto Handy.',
        ],
      },
      getItParrot: {
        id: 'get-it',
        title: 'Obter o Parrot',
        content: [
          '**O Parrot é distribuído como aplicativo de desktop com instalação por duplo clique nos três sistemas, então não precisa de terminal.** O README manda baixar pelo site; os instaladores também estão anexados à [última versão no GitHub](https://github.com/rishiskhare/parrot/releases/latest).',
        ],
        columns: ['Plataforma', 'Download'],
        rows: [
          { 'Plataforma': 'macOS (Apple silicon)', 'Download': '[Parrot_26.2.4_aarch64.dmg](https://github.com/rishiskhare/parrot/releases/latest)' },
          { 'Plataforma': 'Windows', 'Download': '[Parrot_26.2.4_x64-setup.exe ou .msi](https://github.com/rishiskhare/parrot/releases/latest) (versões ARM64 também listadas)' },
          { 'Plataforma': 'Linux', 'Download': '[AppImage, .deb ou .rpm](https://github.com/rishiskhare/parrot/releases/latest) para x86-64 e ARM64' },
          { 'Plataforma': 'Site', 'Download': '[tryparrot.vercel.app](https://tryparrot.vercel.app/)' },
          { 'Plataforma': 'Política de privacidade', 'Download': 'Sem página própria; veja o [README](https://github.com/rishiskhare/parrot)' },
          { 'Plataforma': 'Código-fonte', 'Download': '[github.com/rishiskhare/parrot](https://github.com/rishiskhare/parrot)' },
        ],
        note: 'A versão lista apenas uma imagem de disco para Apple silicon, então Macs com Intel não são atendidos. Na primeira abertura, o app pede para baixar o modelo de voz, o que exige conexão com a internet uma única vez.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Parrot em resumo',
        columns: ['Atributo', 'Parrot'],
        rows: [
          { 'Atributo': 'Plataforma', 'Parrot': 'Windows, macOS, Linux' },
          { 'Atributo': 'Preço', 'Parrot': 'Grátis' },
          { 'Atributo': 'Licença', 'Parrot': 'MIT' },
          { 'Atributo': 'Execução', 'Parrot': 'Local, na CPU' },
          { 'Atributo': 'Idiomas', 'Parrot': '9 opções (inglês dos EUA e do Reino Unido contados separadamente)' },
          { 'Atributo': 'Clonagem de voz', 'Parrot': 'Não informada; 54 vozes predefinidas' },
          { 'Atributo': 'Saída em streaming', 'Parrot': 'Sim, o áudio começa antes de a síntese terminar' },
          { 'Atributo': 'Utilizável só com CPU', 'Parrot': 'Sim' },
          { 'Atributo': 'Servidor de API local', 'Parrot': 'Não; apenas opções de linha de comando' },
        ],
        note: 'Os atributos seguem a comparação de texto para voz usada no diretório de software de LLM local. Uma informação ausente no site significa «desconhecido», não «sem suporte».',
      },
      whatIsParrot: {
        id: 'what-is-parrot',
        title: 'O que é o Parrot',
        content: [
          '**O Parrot é um utilitário de leitura em voz alta, não um estúdio de voz.** O site o apresenta como provavelmente o app de texto para voz mais simples: sua única função é ler em voz alta o que você selecionar. O autor diz que a meta não é ser o melhor app, e sim o mais fácil de fazer fork, uma base pequena para ferramentas de acessibilidade e experimentos com voz.',
          'Ele é um fork do Handy, um app de voz para texto de código aberto de CJ Pais, e mantém sua arquitetura Tauri com backend em Rust. A voz vem do Kokoro-82M, um modelo aberto cuja página no Hugging Face indica a licença Apache-2.0, executado pela biblioteca tts-rs do autor.',
          'Esta análise se baseia no site, no README e nas versões e commits do GitHub. Não houve teste prático, então qualidade de voz, velocidade e estabilidade não são avaliadas aqui.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeiros passos',
        content: [
          '**A configuração é baixar um instalador, baixar o modelo uma única vez e usar um atalho.** Os passos seguem o README.',
        ],
        numberedItems: [
          {
            title: 'Instale o app para o seu sistema',
            whyItMatters: 'Baixe pelo [site](https://tryparrot.vercel.app/) ou pela [página de versões](https://github.com/rishiskhare/parrot/releases/latest) e execute o instalador.',
          },
          {
            title: 'Baixe o modelo de voz na primeira abertura',
            whyItMatters: 'O Parrot pede o modelo de cerca de 115 MB; depois de salvo, o README diz que o app funciona totalmente offline.',
          },
          {
            title: 'Selecione o texto e aperte o atalho',
            whyItMatters: 'O padrão é Option+Espaço no macOS e Ctrl+Espaço no Windows e no Linux; uma pequena sobreposição aparece enquanto o áudio toca, e todos os atalhos podem ser alterados.',
          },
          {
            title: 'Pause ou retome enquanto ele fala',
            whyItMatters: 'Option+P (Alt+P no Windows e no Linux) pausa e retoma a reprodução; esse atalho só fica ativo durante a reprodução.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos e vozes',
        content: [
          '**O conjunto de recursos é pequeno de propósito.** Tudo a seguir vem do README e do site.',
        ],
        items: [
          '**Funciona em qualquer app.** Lê texto selecionado em navegadores, editores, PDFs e terminais.',
          '**Reprodução em streaming.** O áudio começa antes de todo o texto ser sintetizado.',
          '**54 vozes em nove opções de idioma.** Inglês dos EUA e do Reino Unido, espanhol, francês, hindi, italiano, japonês, português do Brasil e mandarim; a voz acompanha a sua configuração de idioma ou pode ser escolhida em Configurações.',
          '**Controles.** Velocidade de reprodução, threads de trabalho, uma aceleração opcional da primeira resposta e uma sobreposição flutuante com controles de pausa.',
          '**Histórico.** As leituras anteriores podem ser consultadas, repetidas, copiadas e apagadas, com limite de entradas e prazo de exclusão automática.',
          '**Automação.** Opções de linha de comando como `parrot --toggle-transcription` e sinais Unix permitem que gerenciadores de janelas e ferramentas de atalhos iniciem a leitura, o caminho recomendado no Wayland.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade, licença e custo',
        content: [
          '**O README diz que o seu texto é processado no seu dispositivo e não é enviado a lugar nenhum.** Ele não cita nuvem, contas nem exigência de internet depois do primeiro download do modelo. O site repete que o texto fica no seu computador.',
          'O código tem licença MIT e o app é gratuito, sem assinatura nem chave de API, segundo o README. Não foi encontrada uma página de política de privacidade separada, e o README não informa qual servidor hospeda o download do modelo. Esta análise não inspecionou o tráfego de rede, então essas afirmações são do próprio desenvolvedor.',
          'O recurso de histórico guarda no seu computador o que o Parrot leu; você pode definir um limite de entradas e um prazo de exclusão automática, ou apagar entradas manualmente.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Vantagens e limitações',
        columns: ['Vantagem', 'O que significa no uso real', 'Limitação / ressalva'],
        rows: [
          {
            'Vantagem': 'Voz neural offline',
            'O que significa no uso real': 'Ouvir texto sem um serviço na nuvem.',
            'Limitação / ressalva': 'A qualidade da voz não é avaliada aqui; o projeto só linka uma amostra de áudio.',
          },
          {
            'Vantagem': 'Funciona em qualquer app',
            'O que significa no uso real': 'Um atalho para navegadores, PDFs e editores.',
            'Limitação / ressalva': 'No Wayland é preciso um atalho do ambiente de desktop que chame a linha de comando.',
          },
          {
            'Vantagem': 'Pequeno e só com CPU',
            'O que significa no uso real': 'Roda em um computador comum.',
            'Limitação / ressalva': 'Nenhum valor de RAM é publicado.',
          },
          {
            'Vantagem': 'Instaladores para todos os desktops',
            'O que significa no uso real': 'Baixar e abrir, sem terminal.',
            'Limitação / ressalva': 'A versão para macOS é só para Apple silicon.',
          },
          {
            'Vantagem': 'Código aberto e gratuito',
            'O que significa no uso real': 'Código MIT que você pode modificar.',
            'Limitação / ressalva': 'Sem atualização desde 28 de abril de 2026; o autor diz que pedidos de recursos podem não entrar no projeto principal.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Parrot e as alternativas',
        content: [
          'A maioria das outras ferramentas de texto para voz do diretório são motores para desenvolvedores, não apps de leitura. O Parrot é o que você instala e usa com um atalho.',
        ],
        columns: ['App', 'Plataformas', 'Preço e licença', 'Papel', 'Diferença principal'],
        rows: [
          {
            'App': 'Parrot',
            'Plataformas': 'Windows, macOS, Linux',
            'Preço e licença': 'Grátis, MIT',
            'Papel': 'App de desktop de leitura em voz alta',
            'Diferença principal': 'Selecionar texto, apertar uma tecla, ouvir; sem programar',
          },
          {
            'App': '[Piper TTS](/pt/power-local-llm/piper-tts-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Preço e licença': 'Grátis, GPL-3.0',
            'Papel': 'Motor de voz de linha de comando',
            'Diferença principal': 'Vozes rápidas na CPU para scripts e projetos, não um leitor de seleção',
          },
          {
            'App': '[Izwi](/pt/power-local-llm/izwi-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Preço e licença': 'Grátis, MIT',
            'Papel': 'Runtime de voz local',
            'Diferença principal': 'Saída de voz mais transcrição, clonagem e API',
          },
          {
            'App': '[Coqui TTS](/pt/power-local-llm/coqui-tts-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Preço e licença': 'Grátis, MPL 2.0',
            'Papel': 'Kit de ferramentas Python',
            'Diferença principal': 'Muitas arquiteturas de modelo para desenvolvedores',
          },
          {
            'App': '[Bark](/pt/power-local-llm/bark-tts-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Preço e licença': 'Grátis, MIT',
            'Papel': 'Modelo de voz generativo',
            'Diferença principal': 'Acrescenta efeitos sonoros e música; mais pesado para rodar',
          },
        ],
        note: 'Plataformas, preços e recursos de apps de terceiros mudam com frequência. Confira os dados atuais na página de cada projeto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o Parrot serve',
        items: [
          '**Quem gosta de ouvir.** Artigos, e-mails longos e documentos viram áudio com um atalho.',
          '**Leitores com necessidades de acessibilidade.** O projeto apresenta o app como uma ferramenta de acessibilidade que não deveria ficar atrás de um paywall.',
          '**Quem gosta de mexer no código.** O código foi feito para ser modificado e ampliado.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o Parrot não serve',
        items: [
          '**Donos de Mac com Intel.** A versão lista apenas um build de macOS para Apple silicon.',
          '**Quem precisa de um produto com manutenção.** Vale o aviso de projeto parado no início.',
          '**Quem precisa de clonagem de voz ou de uma API.** Nenhuma das duas está documentada; veja os motores da tabela acima.',
          '**Usuários que precisam de conformidade documentada.** Não há página de política de privacidade.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Parrot precisa de GPU?',
            a: 'Não. O README diz que o modelo roda em qualquer CPU moderna; ele não publica números de RAM nem de velocidade.',
          },
          {
            q: 'O Parrot é o mesmo que o Handy?',
            a: 'Não. O Handy é um app de voz para texto; o Parrot é um fork que inverte o sentido e lê o texto em voz alta.',
          },
          {
            q: 'Posso mudar os atalhos?',
            a: 'Sim, todos os atalhos podem ser alterados em Configurações. No Wayland, associe o atalho do seu desktop a `parrot --toggle-transcription`.',
          },
          {
            q: 'Ele guarda um registro do que leu?',
            a: 'Sim, uma página de Histórico guarda as leituras anteriores localmente; você pode limitar o número de entradas ou apagá-las automaticamente.',
          },
          {
            q: 'Ele clona vozes ou funciona como servidor?',
            a: 'Nenhuma das duas coisas está documentada. Ele oferece 54 vozes predefinidas e apenas opções de linha de comando.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O Parrot serve se você quer ouvir o texto selecionado no seu próprio computador, de graça e sem conta: ele se instala como um app comum e faz uma única coisa.',
          'As ressalvas são maturidade e transparência: sem atualização desde 28 de abril de 2026, 162 estrelas no GitHub, sem página de política de privacidade e sem números de qualidade de voz ou de memória. Teste com alguns documentos antes de depender dele e leve a sério o aviso de projeto parado.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Parrot](https://tryparrot.vercel.app/) — descrição do produto, links de download e declaração de privacidade.',
          '[Página «About» do Parrot](https://tryparrot.vercel.app/about) — objetivos do projeto, fork do Handy e modelo.',
          '[Parrot no GitHub](https://github.com/rishiskhare/parrot) — README, licença MIT, número de estrelas e histórico de commits.',
          '[Versões do Parrot](https://github.com/rishiskhare/parrot/releases) — versão 26.2.4 e arquivos de instalação.',
          '[Kokoro-82M no Hugging Face](https://huggingface.co/hexgrad/Kokoro-82M) — o modelo de voz e sua licença Apache-2.0.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Ferramentas locais de voz e áudio comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — texto para voz, voz para texto e agentes de voz lado a lado.',
          '[Piper vs Kokoro TTS](/pt/power-local-llm/piper-vs-kokoro-tts) — dois motores de voz locais comparados.',
          '[Kokoro vs ElevenLabs](/pt/power-local-llm/kokoro-vs-elevenlabs) — como o modelo Kokoro se compara a um serviço na nuvem.',
          '[Melhor TTS local para Mac](/pt/power-local-llm/best-local-tts-mac) — opções de texto para voz local para macOS.',
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
    heroImage: '/images/parrot-review-hero-ar.webp',
    title: 'مراجعة Parrot: تحويل نص إلى كلام مجاني ودون اتصال للنص المحدد',
    seoTitle: 'مراجعة Parrot: تطبيق مجاني دون اتصال لتحويل النص إلى كلام',
    intro:
      'Parrot تطبيق مكتبي مجاني ومفتوح المصدر يقرأ بصوت عالٍ أي نص تحدده، بنموذج صوتي عصبي صغير يعمل على حاسوبك أنت. تلخّص هذه المراجعة ما يوثّقه موقعه وملف README وإصدارات GitHub، وما تتركه دون ذكر، وكيف يقارن بأدوات تحويل النص إلى كلام الأخرى في الدليل.',
    metaDescription:
      'مراجعة Parrot: تطبيق مكتبي مجاني بترخيص MIT لأنظمة Windows وmacOS وLinux يقرأ النص المحدد بصوت عالٍ دون اتصال بنموذج Kokoro-82M. دون اختبار عملي.',
    twitterDescription:
      'مراجعة Parrot: تطبيق مجاني مفتوح المصدر يقرأ النص المحدد على حاسوبك بنموذج Kokoro. التثبيت والأصوات والخصوصية والقيود والبدائل.',
    audience:
      'للقرّاء الذين يريدون سماع النص المعروض على الشاشة مجانًا وبخصوصية — يغطي التثبيت والأصوات والخصوصية والقيود والبدائل.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Parrot review',
    targetKeywords: [
      'مراجعة parrot',
      'parrot تحويل النص إلى كلام',
      'تطبيق تحويل النص إلى كلام دون اتصال',
      'قراءة النص المحدد بصوت عالٍ',
      'kokoro-82m تطبيق مكتبي',
      'تحويل النص إلى كلام مجاني مفتوح المصدر',
    ],
    current_hardware_mentioned: ['CPU', 'Apple silicon'],
    leadAnswerBlock:
      '**تحذير: لم يتلقَّ Parrot أي تحديث منذ 28 أبريل 2026 (آخر إصدار 26.2.4 بتاريخ 25 فبراير 2026)، وقد يكون غير مدعوم — تأكد من عمله على نظامك قبل الاعتماد عليه.** **Parrot تطبيق مكتبي مجاني بترخيص MIT يقرأ بصوت عالٍ النص الذي تحدده في أي برنامج، بنموذج صوتي يعمل على حاسوبك أنت.** تغطي هذه المراجعة الإصدار 26.2.4، وتستند إلى الموقع العام وملف README وإصدارات GitHub، لا إلى اختبار عملي.',
    quickAnswerTop: {
      ar: {
        question: 'هل يستحق Parrot التثبيت لقراءة النص المحدد بصوت عالٍ دون اتصال؟',
        answer:
          'غالبًا نعم، إن أردت أداة بسيطة ومجانية للاستماع إلى المقالات أو المستندات أو تعليقات الشيفرة دون إرسال النص إلى خدمة سحابية. انتبه أولًا إلى التحذير أعلاه: المشروع هادئ، ولا ينشر الموقع أرقامًا لجودة الصوت أو لاستهلاك الذاكرة.',
        bullets: [
          'مثبّتات لأنظمة Windows وmacOS (Apple silicon) وLinux؛ لا حاجة إلى الطرفية.',
          'حدّد النص، واضغط اختصارًا، واستمع إليه بأحد 54 صوتًا.',
          'نموذج Kokoro-82M بحجم نحو 115 MB يعمل على معالج CPU عادي دون GPU.',
          'يقول ملف README إن النص يبقى على جهازك بعد تنزيل النموذج مرة واحدة.',
          'مجاني دائمًا بحسب README؛ دون حساب أو مفتاح API.',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'الحصول على Parrot', anchor: 'get-it' },
      { label: 'Parrot في لمحة', anchor: 'at-a-glance' },
      { label: 'ما هو Parrot', anchor: 'what-is-parrot' },
      { label: 'كيف تبدأ', anchor: 'how-to-get-started' },
      { label: 'الميزات والأصوات', anchor: 'features' },
      { label: 'الخصوصية والترخيص والتكلفة', anchor: 'privacy' },
      { label: 'المزايا والقيود', anchor: 'tradeoffs' },
      { label: 'Parrot مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'لمن يناسب Parrot', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب Parrot', anchor: 'who-should-not-use' },
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
            text: 'Parrot تطبيق مكتبي مفتوح المصدر يقرأ بصوت عالٍ أي نص تحدده، بنموذج صوتي مضغوط يعمل دون اتصال.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله زر «اقرأ بصوت عالٍ» للحاسوب كله: حدّد نصًا في المتصفح أو ملف PDF أو المحرر، واضغط مفتاحًا، فيقرؤه لك صوت طبيعي دون أي خدمة سحابية.',
          },
        ],
        items: [
          'الإصدار الذي راجعناه: 26.2.4، صدر في 25 فبراير 2026؛ وآخر تغيير في الشيفرة على GitHub بتاريخ 28 أبريل 2026، لذا ينطبق تحذير المشروع الهادئ.',
          'الترخيص والسعر: MIT بحسب المستودع؛ مجاني ودون حساب.',
          'المنصات: Windows وmacOS على Apple silicon وLinux، كتطبيقات مكتبية.',
          'أبرز الميزات: اختصار على مستوى النظام، وتشغيل متدفق، وإيقاف مؤقت واستئناف، وسجل محلي.',
          'النضج: مشروع صغير (162 نجمة على GitHub) وهو نسخة متفرعة من تطبيق تحويل الكلام إلى نص Handy.',
        ],
      },
      getItParrot: {
        id: 'get-it',
        title: 'الحصول على Parrot',
        content: [
          '**يأتي Parrot كتطبيق مكتبي يُثبَّت بنقرتين على أنظمة سطح المكتب الثلاثة، فلا حاجة إلى الطرفية.** يحيل README إلى الموقع للتنزيل؛ كما أن ملفات التثبيت مرفقة في [أحدث إصدار على GitHub](https://github.com/rishiskhare/parrot/releases/latest).',
        ],
        columns: ['المنصة', 'التنزيل'],
        rows: [
          { 'المنصة': 'macOS (Apple silicon)', 'التنزيل': '[Parrot_26.2.4_aarch64.dmg](https://github.com/rishiskhare/parrot/releases/latest)' },
          { 'المنصة': 'Windows', 'التنزيل': '[Parrot_26.2.4_x64-setup.exe أو .msi](https://github.com/rishiskhare/parrot/releases/latest) (نسخ ARM64 مدرجة أيضًا)' },
          { 'المنصة': 'Linux', 'التنزيل': '[AppImage أو .deb أو .rpm](https://github.com/rishiskhare/parrot/releases/latest) لمعماريتي x86-64 وARM64' },
          { 'المنصة': 'الموقع الرسمي', 'التنزيل': '[tryparrot.vercel.app](https://tryparrot.vercel.app/)' },
          { 'المنصة': 'سياسة الخصوصية', 'التنزيل': 'لم نجد صفحة مستقلة لسياسة الخصوصية؛ يصف [README](https://github.com/rishiskhare/parrot) والموقع المعالجة المحلية' },
          { 'المنصة': 'الشيفرة المصدرية', 'التنزيل': '[github.com/rishiskhare/parrot](https://github.com/rishiskhare/parrot)' },
        ],
        note: 'يضم الإصدار صورة قرص لـ Apple silicon فقط، لذا لا تُغطّى أجهزة Mac بمعالج Intel. عند أول تشغيل يطلب التطبيق تنزيل النموذج الصوتي، وهذا يحتاج إلى اتصال بالإنترنت مرة واحدة.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Parrot في لمحة',
        columns: ['الخاصية', 'Parrot'],
        rows: [
          { 'الخاصية': 'المنصة', 'Parrot': 'Windows وmacOS وLinux' },
          { 'الخاصية': 'السعر', 'Parrot': 'مجاني' },
          { 'الخاصية': 'الترخيص', 'Parrot': 'MIT' },
          { 'الخاصية': 'مكان التشغيل', 'Parrot': 'محليًا، على CPU' },
          { 'الخاصية': 'اللغات', 'Parrot': '9 خيارات (الإنجليزية الأمريكية والبريطانية تُحسبان منفصلتين)' },
          { 'الخاصية': 'استنساخ الصوت', 'Parrot': 'غير مذكور؛ 54 صوتًا جاهزًا' },
          { 'الخاصية': 'الإخراج المتدفق', 'Parrot': 'نعم، يبدأ الصوت قبل اكتمال التوليف' },
          { 'الخاصية': 'يعمل على CPU فقط', 'Parrot': 'نعم' },
          { 'الخاصية': 'خادم API محلي', 'Parrot': 'لا؛ خيارات سطر الأوامر فقط' },
        ],
        note: 'تتبع الخصائص مقارنة تحويل النص إلى كلام المستخدمة في دليل برمجيات LLM المحلية. غياب الذكر في الموقع يعني «غير معروف» لا «غير مدعوم».',
      },
      whatIsParrot: {
        id: 'what-is-parrot',
        title: 'ما هو Parrot',
        content: [
          '**Parrot أداة للقراءة بصوت عالٍ، وليس استوديو صوتيًا.** يصفه موقعه بأنه على الأرجح أبسط تطبيقات تحويل النص إلى كلام: وظيفته الوحيدة قراءة ما تحدده. ويقول المؤلف إن الهدف ليس أفضل تطبيق بل أسهلها تفريعًا، قاعدة صغيرة لأدوات إتاحة الوصول وتجارب الصوت.',
          'هو نسخة متفرعة من Handy، وهو تطبيق مفتوح المصدر لتحويل الكلام إلى نص من تطوير CJ Pais، ويحتفظ ببنيته Tauri مع خلفية بلغة Rust. يأتي الصوت من Kokoro-82M، وهو نموذج مفتوح تذكر صفحته على Hugging Face ترخيص Apache-2.0، ويعمل عبر مكتبة tts-rs التي كتبها المؤلف.',
          'تستند هذه المراجعة إلى الموقع وREADME وإصدارات GitHub والتعديلات المسجلة. لم يكن هناك اختبار عملي، لذا لا تُقيَّم هنا جودة الصوت ولا السرعة ولا الاستقرار.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'كيف تبدأ',
        content: [
          '**الإعداد هو تنزيل مثبّت، ثم تنزيل النموذج مرة واحدة، ثم استخدام اختصار.** تتبع الخطوات ملف README.',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق لنظامك',
            whyItMatters: 'نزّله من [الموقع](https://tryparrot.vercel.app/) أو من [صفحة الإصدارات](https://github.com/rishiskhare/parrot/releases/latest) وشغّل المثبّت.',
          },
          {
            title: 'نزّل النموذج الصوتي عند أول تشغيل',
            whyItMatters: 'يطلب Parrot النموذج بحجم نحو 115 MB؛ وبعد حفظه يقول README إن التطبيق يعمل دون اتصال تمامًا.',
          },
          {
            title: 'حدّد النص واضغط الاختصار',
            whyItMatters: 'الاختصار الافتراضي Option+Space على macOS وCtrl+Space على Windows وLinux؛ تظهر نافذة صغيرة عائمة أثناء تشغيل الصوت، ويمكن تغيير جميع الاختصارات.',
          },
          {
            title: 'أوقف مؤقتًا أو استأنف أثناء القراءة',
            whyItMatters: 'يوقف Option+P (وAlt+P على Windows وLinux) التشغيل مؤقتًا ويستأنفه؛ وهذا الاختصار فعّال أثناء التشغيل فقط.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات والأصوات',
        content: [
          '**مجموعة الميزات صغيرة عن قصد.** كل ما يلي مصدره README والموقع.',
        ],
        items: [
          '**يعمل في أي تطبيق.** يقرأ النص المحدد في المتصفحات والمحررات وملفات PDF والطرفيات.',
          '**تشغيل متدفق.** يبدأ الصوت قبل أن يُولَّف النص كله.',
          '**54 صوتًا في تسعة خيارات لغوية.** الإنجليزية الأمريكية والبريطانية والإسبانية والفرنسية والهندية والإيطالية واليابانية والبرتغالية البرازيلية والماندرين؛ يتبع الصوت إعداد اللغة لديك أو يُختار من الإعدادات.',
          '**عناصر التحكم.** سرعة التشغيل، وخيوط المعالجة، وتسريع اختياري للاستجابة الأولى، ونافذة عائمة بأزرار إيقاف مؤقت.',
          '**السجل.** يمكن تصفح القراءات السابقة وإعادة تشغيلها ونسخها وحذفها، مع حد لعدد الإدخالات ومدة حذف تلقائي.',
          '**الأتمتة.** تتيح خيارات سطر الأوامر مثل `parrot --toggle-transcription` وإشارات Unix لمديري النوافذ وأدوات الاختصارات بدء القراءة، وهو الطريق الموصى به على Wayland.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والترخيص والتكلفة',
        content: [
          '**يقول README إن نصك يُعالَج على جهازك ولا يُرسَل إلى أي مكان.** ولا يذكر سحابة ولا حسابات ولا حاجة إلى الإنترنت بعد أول تنزيل للنموذج. ويكرر الموقع أن النص يبقى على حاسوبك.',
          'الشيفرة بترخيص MIT والتطبيق مجاني دون اشتراك أو مفتاح API، بحسب README. لم نجد صفحة مستقلة لسياسة الخصوصية، ولا يذكر README أي خادم يستضيف تنزيل النموذج. لم تفحص هذه المراجعة حركة الشبكة، لذا فهذه الأقوال من المطوّر نفسه.',
          'تخزّن ميزة السجل على جهازك ما قرأه Parrot؛ يمكنك تحديد حد لعدد الإدخالات ومدة حذف تلقائي، أو حذف الإدخالات يدويًا.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المزايا والقيود',
        columns: ['الميزة', 'ما تعنيه في الاستخدام الفعلي', 'القيد / تنبيه'],
        rows: [
          {
            'الميزة': 'صوت عصبي دون اتصال',
            'ما تعنيه في الاستخدام الفعلي': 'الاستماع إلى النص دون خدمة سحابية.',
            'القيد / تنبيه': 'لا تُقيَّم جودة الصوت هنا؛ ويربط المشروع بعيّنة صوتية فقط.',
          },
          {
            'الميزة': 'يعمل في أي تطبيق',
            'ما تعنيه في الاستخدام الفعلي': 'اختصار واحد للمتصفحات وملفات PDF والمحررات.',
            'القيد / تنبيه': 'على Wayland يلزم اختصار من بيئة سطح المكتب يستدعي سطر الأوامر.',
          },
          {
            'الميزة': 'صغير ويكفيه CPU',
            'ما تعنيه في الاستخدام الفعلي': 'يعمل على حاسوب عادي.',
            'القيد / تنبيه': 'لا يُنشر أي رقم لذاكرة RAM.',
          },
          {
            'الميزة': 'مثبّتات لكل أنظمة سطح المكتب',
            'ما تعنيه في الاستخدام الفعلي': 'نزّل وافتح، دون طرفية.',
            'القيد / تنبيه': 'نسخة macOS لأجهزة Apple silicon فقط.',
          },
          {
            'الميزة': 'مفتوح المصدر ومجاني',
            'ما تعنيه في الاستخدام الفعلي': 'شيفرة MIT يمكنك تعديلها.',
            'القيد / تنبيه': 'لا تحديث منذ 28 أبريل 2026؛ ويقول المؤلف إن طلبات الميزات قد لا تدخل المشروع الرئيسي.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Parrot مقابل البدائل',
        content: [
          'معظم أدوات تحويل النص إلى كلام الأخرى في الدليل محركات موجّهة للمطورين، لا تطبيقات قراءة. Parrot هو التطبيق الذي تثبّته وتستخدمه باختصار.',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر والترخيص', 'الدور', 'الفرق الأهم'],
        rows: [
          {
            'التطبيق': 'Parrot',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر والترخيص': 'مجاني، MIT',
            'الدور': 'تطبيق مكتبي للقراءة بصوت عالٍ',
            'الفرق الأهم': 'حدّد النص، اضغط مفتاحًا، استمع؛ دون برمجة',
          },
          {
            'التطبيق': '[Piper TTS](/ar/power-local-llm/piper-tts-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر والترخيص': 'مجاني، GPL-3.0',
            'الدور': 'محرك صوتي بسطر الأوامر',
            'الفرق الأهم': 'أصوات سريعة على CPU للنصوص البرمجية والمشاريع، وليس قارئ تحديد',
          },
          {
            'التطبيق': '[Izwi](/ar/power-local-llm/izwi-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر والترخيص': 'مجاني، MIT',
            'الدور': 'بيئة تشغيل صوتية محلية',
            'الفرق الأهم': 'إخراج صوتي مع نسخ نصي واستنساخ وAPI',
          },
          {
            'التطبيق': '[Coqui TTS](/ar/power-local-llm/coqui-tts-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر والترخيص': 'مجاني، MPL 2.0',
            'الدور': 'مجموعة أدوات Python',
            'الفرق الأهم': 'بُنى نماذج كثيرة للمطورين',
          },
          {
            'التطبيق': '[Bark](/ar/power-local-llm/bark-tts-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر والترخيص': 'مجاني، MIT',
            'الدور': 'نموذج صوتي توليدي',
            'الفرق الأهم': 'يضيف مؤثرات صوتية وموسيقى؛ أثقل في التشغيل',
          },
        ],
        note: 'تتغير المنصات والأسعار والميزات في تطبيقات الجهات الخارجية كثيرًا. تحقق من التفاصيل الحالية في صفحة كل مشروع قبل أن تقرر.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب Parrot',
        items: [
          '**من يفضّلون الاستماع.** المقالات والرسائل الطويلة والمستندات تتحول إلى صوت باختصار واحد.',
          '**القرّاء ذوو احتياجات إتاحة الوصول.** يقدّم المشروع التطبيق أداةَ إتاحة وصول لا ينبغي أن تكون خلف جدار دفع.',
          '**محبو التجريب.** الشيفرة مصمّمة ليُعدَّل عليها وتُوسَّع.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب Parrot',
        items: [
          '**أصحاب أجهزة Mac بمعالج Intel.** يضم الإصدار نسخة macOS لأجهزة Apple silicon فقط.',
          '**من يحتاجون منتجًا مدعومًا باستمرار.** ينطبق تحذير المشروع الهادئ في الأعلى.',
          '**من يحتاجون استنساخ الصوت أو API.** لا شيء منهما موثّق؛ راجع المحركات في الجدول أعلاه.',
          '**المستخدمون الذين يحتاجون امتثالًا موثّقًا.** لا توجد صفحة لسياسة الخصوصية.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يحتاج Parrot إلى GPU؟',
            a: 'لا. يقول README إن النموذج يعمل على أي CPU حديث؛ ولا يُنشر أي رقم لـ RAM أو السرعة.',
          },
          {
            q: 'هل Parrot هو نفسه Handy؟',
            a: 'لا. Handy تطبيق لتحويل الكلام إلى نص؛ أما Parrot فنسخة متفرعة تعكس الاتجاه وتقرأ النص بصوت عالٍ.',
          },
          {
            q: 'هل يمكنني تغيير الاختصارات؟',
            a: 'نعم، يمكن تغيير جميع الاختصارات من الإعدادات. على Wayland اربط اختصار سطح المكتب بالأمر `parrot --toggle-transcription`.',
          },
          {
            q: 'هل يحتفظ بسجل لما قرأه؟',
            a: 'نعم، تحفظ صفحة السجل القراءات السابقة محليًا؛ ويمكنك تحديد عدد الإدخالات أو حذفها تلقائيًا.',
          },
          {
            q: 'هل يستطيع استنساخ صوت أو العمل كخادم؟',
            a: 'لا شيء منهما موثّق. يقدّم 54 صوتًا جاهزًا وخيارات سطر الأوامر فقط.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          'يناسب Parrot من يريد سماع النص المحدد على حاسوبه مجانًا ودون حساب: يُثبَّت كتطبيق عادي ويؤدي مهمة واحدة.',
          'التحفظات تتعلق بالنضج والشفافية: لا تحديث منذ 28 أبريل 2026، و162 نجمة على GitHub، ولا صفحة لسياسة الخصوصية، ولا أرقام لجودة الصوت أو الذاكرة. جرّبه على بعض المستندات قبل الاعتماد عليه، وخذ تحذير المشروع الهادئ على محمل الجد.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Parrot](https://tryparrot.vercel.app/) — وصف المنتج وروابط التنزيل وبيان الخصوصية.',
          '[صفحة About في Parrot](https://tryparrot.vercel.app/about) — أهداف المشروع وتفرعه من Handy والنموذج.',
          '[Parrot على GitHub](https://github.com/rishiskhare/parrot) — README وترخيص MIT وعدد النجوم وسجل التعديلات.',
          '[إصدارات Parrot](https://github.com/rishiskhare/parrot/releases) — الإصدار 26.2.4 وملفات التثبيت.',
          '[Kokoro-82M على Hugging Face](https://huggingface.co/hexgrad/Kokoro-82M) — النموذج الصوتي وترخيصه Apache-2.0.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مقارنة أدوات الصوت والكلام المحلية](/ar/power-local-llm/local-llm-voice-audio-compared) — تحويل النص إلى كلام والكلام إلى نص ووكلاء الصوت جنبًا إلى جنب.',
          '[Piper مقابل Kokoro TTS](/ar/power-local-llm/piper-vs-kokoro-tts) — مقارنة بين محركين صوتيين محليين.',
          '[Kokoro مقابل ElevenLabs](/ar/power-local-llm/kokoro-vs-elevenlabs) — كيف يقارن نموذج Kokoro بخدمة سحابية.',
          '[أفضل TTS محلي على Mac](/ar/power-local-llm/best-local-tts-mac) — خيارات تحويل النص إلى كلام محليًا على macOS.',
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
    heroImage: '/images/parrot-review-hero-ko.webp',
    title: 'Parrot 리뷰: 선택한 텍스트를 읽어 주는 무료 오프라인 음성 합성 앱',
    seoTitle: 'Parrot 리뷰: 무료 오프라인 읽기 음성 합성 앱 소개',
    intro:
      'Parrot은 선택한 텍스트를 내 컴퓨터에서 돌아가는 작은 신경망 음성 모델로 읽어 주는 무료 오픈소스 데스크톱 앱입니다. 이 리뷰는 공식 사이트, README, GitHub 릴리스에서 확인되는 내용과 빠진 내용, 그리고 디렉터리의 다른 음성 합성 도구와 비교한 결과를 정리합니다.',
    metaDescription:
      'Parrot 리뷰: Kokoro-82M 모델로 선택한 텍스트를 오프라인에서 읽어 주는 Windows·macOS·Linux용 무료 MIT 라이선스 앱입니다. 직접 테스트는 하지 않았습니다.',
    twitterDescription:
      'Parrot 리뷰: Kokoro 모델로 선택한 텍스트를 컴퓨터에서 읽어 주는 무료 오픈소스 앱. 설치, 음성, 개인정보, 한계, 대안을 다룹니다.',
    audience:
      '화면의 텍스트를 무료로, 개인정보 걱정 없이 듣고 싶은 독자를 위해 설치, 음성, 개인정보, 한계, 대안을 다룹니다.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Parrot review',
    targetKeywords: [
      'parrot 리뷰',
      'parrot 음성 합성',
      '오프라인 텍스트 읽기 앱',
      '선택한 텍스트 읽어 주기',
      'kokoro-82m 데스크톱 앱',
      '무료 오픈소스 음성 합성',
    ],
    current_hardware_mentioned: ['CPU', 'Apple silicon'],
    leadAnswerBlock:
      '**경고: Parrot은 2026년 4월 28일 이후 업데이트가 없어(최신 릴리스는 2026년 2월 25일의 26.2.4) 유지보수가 중단되었을 수 있습니다. 사용 전에 시스템에서 정상 작동하는지 확인하십시오.** **Parrot은 어떤 프로그램에서든 선택한 텍스트를, 내 컴퓨터에서 돌아가는 음성 모델로 읽어 주는 무료 MIT 라이선스 데스크톱 앱입니다.** 이 리뷰는 버전 26.2.4를 다루며, 공개된 사이트, README, GitHub 릴리스에 근거하고 직접 테스트는 하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: '선택한 텍스트를 오프라인으로 읽게 하려고 Parrot을 설치할 만한가요?',
        answer:
          '클라우드 서비스로 텍스트를 보내지 않고 기사, 문서, 코드 주석을 듣고 싶다면 아마도 그렇습니다. 먼저 위의 경고를 확인하십시오. 프로젝트는 조용한 상태이며, 사이트는 음질이나 메모리 사용량 수치를 공개하지 않습니다.',
        bullets: [
          'Windows, macOS(Apple silicon), Linux용 설치 파일이 있으며 터미널은 필요하지 않습니다.',
          '텍스트를 선택하고 단축키를 누르면 54가지 음성 중 하나로 읽어 줍니다.',
          '약 115 MB의 Kokoro-82M 모델은 GPU 없이 일반 CPU에서 실행됩니다.',
          'README에 따르면 모델을 한 번 내려받은 뒤에는 텍스트가 내 컴퓨터를 벗어나지 않습니다.',
          'README에 따르면 영구 무료이며 계정이나 API 키가 필요 없습니다.',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Parrot 받기', anchor: 'get-it' },
      { label: 'Parrot 한눈에 보기', anchor: 'at-a-glance' },
      { label: 'Parrot이란', anchor: 'what-is-parrot' },
      { label: '시작하기', anchor: 'how-to-get-started' },
      { label: '기능과 음성', anchor: 'features' },
      { label: '개인정보, 라이선스, 비용', anchor: 'privacy' },
      { label: '장점과 한계', anchor: 'tradeoffs' },
      { label: 'Parrot과 대안 비교', anchor: 'vs-alternatives' },
      { label: 'Parrot이 적합한 사용자', anchor: 'who-should-use' },
      { label: 'Parrot이 적합하지 않은 사용자', anchor: 'who-should-not-use' },
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
            text: 'Parrot은 선택한 모든 텍스트를, 오프라인에서 돌아가는 작은 음성 모델로 읽어 주는 오픈소스 데스크톱 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '컴퓨터 전체에서 쓰는 \'읽어 주기\' 버튼이라고 생각하시면 됩니다. 브라우저, PDF, 편집기에서 텍스트를 선택하고 키를 누르면 클라우드 서비스 없이 자연스러운 음성이 읽어 줍니다.',
          },
        ],
        items: [
          '검토한 버전: 2026년 2월 25일에 공개된 26.2.4입니다. GitHub의 최신 코드 변경은 2026년 4월 28일이므로 업데이트 정체 경고가 적용됩니다.',
          '라이선스와 가격: 저장소 기준 MIT이며, 무료이고 계정이 필요 없습니다.',
          '플랫폼: Windows, Apple silicon의 macOS, Linux용 데스크톱 앱입니다.',
          '주요 기능: 시스템 전체 단축키, 스트리밍 재생, 일시 정지와 재개, 로컬 기록.',
          '성숙도: 규모가 작은 프로젝트(GitHub 별 162개)이며 음성 인식 앱 Handy의 포크입니다.',
        ],
      },
      getItParrot: {
        id: 'get-it',
        title: 'Parrot 받기',
        content: [
          '**Parrot은 세 가지 데스크톱 운영체제 모두에서 더블클릭으로 설치하는 데스크톱 앱으로 제공되므로 터미널이 필요하지 않습니다.** README는 내려받기를 공식 사이트로 안내하며, 설치 파일은 [최신 GitHub 릴리스](https://github.com/rishiskhare/parrot/releases/latest)에도 첨부되어 있습니다.',
        ],
        columns: ['플랫폼', '받기'],
        rows: [
          { '플랫폼': 'macOS(Apple silicon)', '받기': '[Parrot_26.2.4_aarch64.dmg](https://github.com/rishiskhare/parrot/releases/latest)' },
          { '플랫폼': 'Windows', '받기': '[Parrot_26.2.4_x64-setup.exe 또는 .msi](https://github.com/rishiskhare/parrot/releases/latest) (ARM64 빌드도 목록에 있음)' },
          { '플랫폼': 'Linux', '받기': 'x86-64와 ARM64용 [AppImage, .deb, .rpm](https://github.com/rishiskhare/parrot/releases/latest)' },
          { '플랫폼': '공식 사이트', '받기': '[tryparrot.vercel.app](https://tryparrot.vercel.app/)' },
          { '플랫폼': '개인정보 처리방침', '받기': '별도의 개인정보 처리방침 페이지는 찾지 못했습니다. [README](https://github.com/rishiskhare/parrot)와 사이트가 로컬 처리를 설명합니다' },
          { '플랫폼': '소스 코드', '받기': '[github.com/rishiskhare/parrot](https://github.com/rishiskhare/parrot)' },
        ],
        note: '릴리스에는 Apple silicon용 디스크 이미지만 있어 Intel Mac은 지원 대상이 아닙니다. 처음 실행하면 앱이 음성 모델을 내려받으라고 안내하며, 이때 한 번은 인터넷 연결이 필요합니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Parrot 한눈에 보기',
        columns: ['항목', 'Parrot'],
        rows: [
          { '항목': '플랫폼', 'Parrot': 'Windows, macOS, Linux' },
          { '항목': '가격', 'Parrot': '무료' },
          { '항목': '라이선스', 'Parrot': 'MIT' },
          { '항목': '실행 위치', 'Parrot': '로컬, CPU' },
          { '항목': '언어', 'Parrot': '9개 옵션(미국 영어와 영국 영어를 따로 셈)' },
          { '항목': '음성 복제', 'Parrot': '언급 없음. 기본 제공 음성 54개' },
          { '항목': '스트리밍 출력', 'Parrot': '지원. 합성이 끝나기 전에 재생이 시작됨' },
          { '항목': 'CPU만으로 사용 가능', 'Parrot': '예' },
          { '항목': '로컬 API 서버', 'Parrot': '없음. 명령줄 옵션만 제공' },
        ],
        note: '이 항목은 로컬 LLM 소프트웨어 디렉터리에서 쓰는 음성 합성 비교를 따릅니다. 사이트에 언급이 없다는 것은 “알 수 없음”이지 “지원하지 않음”이 아닙니다.',
      },
      whatIsParrot: {
        id: 'what-is-parrot',
        title: 'Parrot이란',
        content: [
          '**Parrot은 읽어 주기 전용 유틸리티이며 음성 제작 스튜디오가 아닙니다.** 공식 사이트는 이를 아마도 가장 단순한 음성 합성 앱이라고 소개하며, 유일한 기능은 선택한 내용을 읽어 주는 것입니다. 작성자는 최고의 앱이 아니라 가장 포크하기 쉬운 앱을 목표로 하며, 접근성 도구와 음성 실험을 위한 작은 토대가 되기를 바란다고 밝힙니다.',
          'CJ Pais가 만든 오픈소스 음성 인식 앱 Handy의 포크로, Rust 백엔드의 Tauri 구조를 이어받았습니다. 음성은 Kokoro-82M에서 나오는데, Hugging Face 페이지에 Apache-2.0 라이선스로 표시된 공개 모델이며 작성자의 tts-rs 라이브러리를 통해 실행됩니다.',
          '이 리뷰는 공식 사이트, README, GitHub 릴리스와 커밋에 근거합니다. 직접 테스트는 하지 않았으므로 음질, 속도, 안정성은 여기서 평가하지 않습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하기',
        content: [
          '**설정은 설치 파일 내려받기, 모델 한 번 내려받기, 그리고 단축키 사용으로 이루어집니다.** 단계는 README를 따릅니다.',
        ],
        numberedItems: [
          {
            title: '내 시스템에 맞는 앱 설치하기',
            whyItMatters: '[공식 사이트](https://tryparrot.vercel.app/)나 [릴리스 페이지](https://github.com/rishiskhare/parrot/releases/latest)에서 내려받아 설치 프로그램을 실행합니다.',
          },
          {
            title: '처음 실행할 때 음성 모델 내려받기',
            whyItMatters: 'Parrot이 약 115 MB의 모델을 내려받으라고 안내합니다. README에 따르면 저장된 뒤에는 앱이 완전히 오프라인으로 작동합니다.',
          },
          {
            title: '텍스트를 선택하고 단축키 누르기',
            whyItMatters: '기본값은 macOS에서 Option+Space, Windows와 Linux에서 Ctrl+Space입니다. 재생 중에는 작은 오버레이가 나타나며 모든 단축키를 바꿀 수 있습니다.',
          },
          {
            title: '읽는 중에 일시 정지하거나 재개하기',
            whyItMatters: 'Option+P(Windows와 Linux에서는 Alt+P)로 재생을 일시 정지하고 재개합니다. 이 단축키는 재생 중에만 활성화됩니다.',
          },
        ],
      },
      features: {
        id: 'features',
        title: '기능과 음성',
        content: [
          '**기능은 의도적으로 적게 구성되어 있습니다.** 아래 내용은 모두 README와 공식 사이트에서 가져왔습니다.',
        ],
        items: [
          '**어떤 앱에서든 작동합니다.** 브라우저, 편집기, PDF, 터미널에서 선택한 텍스트를 읽어 줍니다.',
          '**스트리밍 재생.** 전체 텍스트의 합성이 끝나기 전에 오디오가 재생되기 시작합니다.',
          '**아홉 가지 언어 옵션에 걸친 54가지 음성.** 미국·영국 영어, 스페인어, 프랑스어, 힌디어, 이탈리아어, 일본어, 브라질 포르투갈어, 중국어(표준어)를 지원하며, 음성은 언어 설정에 따라 정해지거나 설정에서 직접 고를 수 있습니다.',
          '**제어.** 재생 속도, 작업 스레드, 첫 응답을 앞당기는 선택 기능, 일시 정지 버튼이 있는 플로팅 오버레이.',
          '**기록.** 지난 낭독을 둘러보고, 다시 재생하고, 복사하고, 삭제할 수 있으며 항목 수 한도와 자동 삭제 기간을 정할 수 있습니다.',
          '**스크립트 연동.** `parrot --toggle-transcription` 같은 명령줄 옵션과 Unix 시그널로 윈도 관리자와 단축키 도구에서 읽기를 시작할 수 있으며, Wayland에서는 이 방법을 권장합니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보, 라이선스, 비용',
        content: [
          '**README에 따르면 텍스트는 기기에서 처리되며 어디로도 전송되지 않습니다.** 클라우드도 계정도 없고, 처음 모델을 내려받은 뒤에는 인터넷이 필요 없다고 적혀 있습니다. 사이트도 텍스트가 컴퓨터에 머문다고 되풀이합니다.',
          'README에 따르면 코드는 MIT 라이선스이고 앱은 구독이나 API 키 없이 무료입니다. 별도의 개인정보 처리방침 페이지는 찾지 못했으며, README에는 모델 내려받기를 어느 서버가 제공하는지도 나와 있지 않습니다. 이 리뷰는 네트워크 트래픽을 검사하지 않았으므로 이는 개발자 본인의 설명입니다.',
          '기록 기능은 Parrot이 읽은 내용을 내 컴퓨터에 저장합니다. 항목 수 한도와 자동 삭제 기간을 정하거나 항목을 직접 삭제할 수 있습니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장점과 한계',
        columns: ['장점', '실제 사용에서의 의미', '한계 / 유의 사항'],
        rows: [
          {
            '장점': '오프라인 신경망 음성',
            '실제 사용에서의 의미': '클라우드 서비스 없이 텍스트를 들을 수 있습니다.',
            '한계 / 유의 사항': '음질은 여기서 평가하지 않습니다. 프로젝트는 오디오 샘플 링크만 제공합니다.',
          },
          {
            '장점': '어떤 앱에서든 작동',
            '실제 사용에서의 의미': '단축키 하나로 브라우저, PDF, 편집기를 모두 다룹니다.',
            '한계 / 유의 사항': 'Wayland에서는 명령줄을 호출하는 데스크톱 단축키가 필요합니다.',
          },
          {
            '장점': '작고 CPU만 필요',
            '실제 사용에서의 의미': '평범한 컴퓨터에서 실행됩니다.',
            '한계 / 유의 사항': 'RAM 요구량은 공개되어 있지 않습니다.',
          },
          {
            '장점': '모든 데스크톱용 설치 파일',
            '실제 사용에서의 의미': '내려받아 열기만 하면 되고 터미널이 필요 없습니다.',
            '한계 / 유의 사항': 'macOS 버전은 Apple silicon 전용입니다.',
          },
          {
            '장점': '오픈소스이며 무료',
            '실제 사용에서의 의미': '직접 고칠 수 있는 MIT 코드입니다.',
            '한계 / 유의 사항': '2026년 4월 28일 이후 업데이트가 없으며, 작성자는 기능 요청이 메인 프로젝트에 반영되지 않을 수 있다고 밝힙니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Parrot과 대안 비교',
        content: [
          '디렉터리의 다른 음성 합성 도구 대부분은 읽기 앱이 아니라 개발자용 엔진입니다. Parrot은 설치해서 단축키로 바로 쓰는 앱입니다.',
        ],
        columns: ['앱', '플랫폼', '가격과 라이선스', '역할', '핵심 차이'],
        rows: [
          {
            '앱': 'Parrot',
            '플랫폼': 'Windows, macOS, Linux',
            '가격과 라이선스': '무료, MIT',
            '역할': '읽어 주기용 데스크톱 앱',
            '핵심 차이': '텍스트를 선택하고 키를 누르면 바로 들림. 코딩 불필요',
          },
          {
            '앱': '[Piper TTS](/ko/power-local-llm/piper-tts-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격과 라이선스': '무료, GPL-3.0',
            '역할': '명령줄 음성 엔진',
            '핵심 차이': '스크립트와 프로젝트용 빠른 CPU 음성이며 선택 텍스트 읽기 앱은 아님',
          },
          {
            '앱': '[Izwi](/ko/power-local-llm/izwi-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격과 라이선스': '무료, MIT',
            '역할': '로컬 음성 런타임',
            '핵심 차이': '음성 출력에 더해 전사, 복제, API 제공',
          },
          {
            '앱': '[Coqui TTS](/ko/power-local-llm/coqui-tts-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격과 라이선스': '무료, MPL 2.0',
            '역할': 'Python 툴킷',
            '핵심 차이': '개발자를 위한 다양한 모델 아키텍처',
          },
          {
            '앱': '[Bark](/ko/power-local-llm/bark-tts-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격과 라이선스': '무료, MIT',
            '역할': '생성형 음성 모델',
            '핵심 차이': '효과음과 음악을 추가할 수 있음. 실행이 더 무거움',
          },
        ],
        note: '타사 앱의 플랫폼, 가격, 기능은 자주 바뀝니다. 결정하기 전에 각 프로젝트의 공식 페이지에서 최신 정보를 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Parrot이 적합한 사용자',
        items: [
          '**듣는 것을 좋아하는 사람.** 기사, 긴 이메일, 문서를 단축키 하나로 오디오로 바꿀 수 있습니다.',
          '**접근성이 필요한 독자.** 프로젝트는 이 앱을 유료 장벽 뒤에 두어서는 안 되는 접근성 도구로 소개합니다.',
          '**직접 만져 보고 싶은 사람.** 코드는 수정하고 확장하도록 만들어졌습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Parrot이 적합하지 않은 사용자',
        items: [
          '**Intel Mac 사용자.** 릴리스에는 Apple silicon용 macOS 빌드만 있습니다.',
          '**지속적으로 관리되는 제품이 필요한 사람.** 상단의 업데이트 정체 경고가 적용됩니다.',
          '**음성 복제나 API가 필요한 사람.** 둘 다 문서화되어 있지 않으니 위 표의 엔진을 살펴보십시오.',
          '**문서화된 규정 준수가 필요한 사용자.** 개인정보 처리방침 페이지가 없습니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Parrot에 GPU가 필요한가요?',
            a: '아니요. README에 따르면 모델은 최신 CPU에서 실행되며, RAM이나 속도 수치는 공개되어 있지 않습니다.',
          },
          {
            q: 'Parrot은 Handy와 같은 앱인가요?',
            a: '아니요. Handy는 음성 인식 앱이고, Parrot은 방향을 뒤집어 텍스트를 읽어 주는 포크입니다.',
          },
          {
            q: '단축키를 바꿀 수 있나요?',
            a: '예, 모든 단축키를 설정에서 바꿀 수 있습니다. Wayland에서는 데스크톱 단축키를 `parrot --toggle-transcription`에 연결하십시오.',
          },
          {
            q: '읽은 내용을 기록으로 남기나요?',
            a: '예, 기록 페이지가 지난 낭독을 로컬에 저장합니다. 항목 수를 제한하거나 자동으로 삭제하도록 설정할 수 있습니다.',
          },
          {
            q: '음성을 복제하거나 서버로 실행할 수 있나요?',
            a: '둘 다 문서화되어 있지 않습니다. 기본 제공 음성 54개와 명령줄 옵션만 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '계정 없이 무료로 내 컴퓨터에서 선택한 텍스트를 듣고 싶다면 Parrot이 잘 맞습니다. 일반 앱처럼 설치되고 한 가지 일만 합니다.',
          '유의할 점은 성숙도와 투명성입니다. 2026년 4월 28일 이후 업데이트가 없고, GitHub 별은 162개이며, 개인정보 처리방침 페이지와 음질·메모리 수치가 없습니다. 의존하기 전에 몇 개의 문서로 먼저 시험해 보시고, 업데이트 정체 경고를 무겁게 받아들이십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Parrot 공식 사이트](https://tryparrot.vercel.app/) — 제품 설명, 내려받기 링크, 개인정보 관련 설명.',
          '[Parrot 소개 페이지](https://tryparrot.vercel.app/about) — 프로젝트 목표, Handy 포크 관계, 모델.',
          '[GitHub의 Parrot](https://github.com/rishiskhare/parrot) — README, MIT 라이선스, 별 개수, 커밋 기록.',
          '[Parrot 릴리스](https://github.com/rishiskhare/parrot/releases) — 버전 26.2.4와 설치 파일.',
          '[Hugging Face의 Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) — 음성 모델과 Apache-2.0 라이선스.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[로컬 음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 음성 합성, 음성 인식, 음성 에이전트를 나란히 비교합니다.',
          '[Piper vs Kokoro TTS](/ko/power-local-llm/piper-vs-kokoro-tts) — 두 로컬 음성 엔진 비교.',
          '[Kokoro vs ElevenLabs](/ko/power-local-llm/kokoro-vs-elevenlabs) — Kokoro 모델과 클라우드 서비스의 비교.',
          '[Mac용 최고의 로컬 TTS](/ko/power-local-llm/best-local-tts-mac) — macOS에서 쓸 수 있는 로컬 음성 합성 선택지.',
          '[로컬 LLM 소프트웨어 전체 디렉터리](/ko/directory) — 모든 플랫폼의 로컬 AI 도구를 모은 폭넓은 디렉터리.',
        ],
      },
    },
  },
}
