// Handy Review: free offline speech-to-text dictation app (Windows, macOS, Linux)
// Slug: handy-review
// Companion to: macwhisper-review, transcriptionsuite-review, whisper-cpp-review, local-llm-voice-audio-compared
// Sources: handy.computer (home, /about), handy.computer/privacy (effective 2026-09-18), github.com/cjpais/Handy (README, MIT licence, Releases v0.9.8 published
// 2026-10-03, default-branch commits up to 2026-10-21), all checked 2026-10-24 — no hands-on testing. No price: the app is free; no storefront prices apply.

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
    heroImage: '/images/handy-review-hero-en.webp',
    title: 'Handy Review: Free Offline Speech-to-Text Dictation App',
    seoTitle: 'Handy Review: Free Offline Speech-to-Text Dictation App',
    intro: 'Handy is a free, open-source desktop app by [CJ Pais](https://github.com/cjpais) and contributors: you hold a shortcut, speak, release, and the transcribed text is pasted into the text field you are using. The project says speech recognition runs on your own computer and works completely offline once a model is downloaded. This review is based on the website, its privacy policy and the GitHub repository, checked on 24 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription: 'Handy review: free, MIT-licensed desktop app that turns speech into text on your own computer and pastes it anywhere. Windows, macOS, Linux; untested.',
    twitterDescription: 'Handy review: free offline push-to-talk dictation for Windows, macOS and Linux. What the sources confirm about models, privacy and installers, and what they do not.',
    audience: 'Writers, developers and accessibility users who want push-to-talk dictation on their own computer and need to know what the sources confirm, what is only claimed and what it costs.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Handy review',
    targetKeywords: [
      'handy review',
      'handy speech to text',
      'offline dictation app',
      'open source speech to text',
      'push to talk dictation windows mac linux',
      'whisper dictation app',
      'handy.computer',
    ],
    current_models_mentioned: ['Whisper', 'Parakeet'],
    current_hardware_mentioned: ['Apple silicon', 'GPU'],
    leadAnswerBlock: '**Handy (version 0.9.8) is a free, MIT-licensed desktop app that turns your speech into text on your own computer and pastes it into the text field you are typing in.** It runs on Windows, macOS and Linux, needs a one-time model download, and every statement here comes from the maker\'s website, privacy policy and GitHub repository.',
    quickAnswerTop: {
      en: {
        question: 'Does Handy really work offline?',
        answer: 'Per the project, yes: after the speech model is downloaded, audio is transcribed on your computer without an internet connection. The privacy policy adds that ordinary transcription sends no audio or text to the maintainers; the network is used for update checks, model downloads and optional post-processing.',
        bullets: [
          'Hold a shortcut to record and release to paste, or tap once to start and again to stop.',
          'Silence is filtered out with a Silero voice-activity detector before transcription.',
          'An optional post-processing step can clean up the text with an AI model you configure.',
          'Command-line flags let scripts and Linux desktops trigger recording.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Quick Answer',
        anchor: 'quick-answer',
      },
      {
        label: 'What Is Handy?',
        anchor: 'what-is-handy',
      },
      {
        label: 'Get It',
        anchor: 'get-it',
      },
      {
        label: 'Requirements',
        anchor: 'requirements',
      },
      {
        label: 'How to Get Started',
        anchor: 'getting-started',
      },
      {
        label: 'Features Confirmed by the Sources',
        anchor: 'key-features',
      },
      {
        label: 'Data Flow and Privacy',
        anchor: 'privacy',
      },
      {
        label: 'Who Should Use It',
        anchor: 'who-should-use',
      },
      {
        label: 'What We Could Not Verify',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Competitors and Alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Frequently Asked Questions',
        anchor: 'faq',
      },
      {
        label: 'Verdict',
        anchor: 'verdict',
      },
      {
        label: 'Sources',
        anchor: 'sources',
      },
      {
        label: 'Related Reading',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Handy is an open-source desktop app that records your voice when you press a shortcut, transcribes it with a local speech model and pastes the text into the active app.',
          },
          {
            type: 'plain-terms',
            text: 'You press a key combination, say a sentence, let go, and the words appear where your cursor is; according to the project, no account and no internet connection are needed once the model is on your disk.',
          },
        ],
        items: [
          'Maintenance: the latest release was published on 3 October 2026 and the main branch last changed on 21 October 2026, so no stale-project warning applies.',
          'Cost: no paid tier; the project asks for donations and lists sponsors.',
          'Models: Whisper (Small, Medium, Turbo, Large) and Parakeet, downloaded once and run locally.',
          'Installers: .dmg, .exe, .msi, .AppImage, .deb and .rpm files on the GitHub Releases page.',
          'Maker: CJ Pais with contributors; the project calls itself forkable rather than the best dictation app.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on [handy.computer](https://handy.computer), its privacy policy and the GitHub repository, checked on 24 October 2026. PromptQuorum has not installed or timed the app, so accuracy and speed are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-handy',
        title: 'What Is Handy?',
        content: [
          '**Handy is a cross-platform desktop speech-to-text app that records while you hold a configurable shortcut, transcribes the audio locally and pastes the result into whatever application has focus.** The project describes itself as free, open source, private and simple: "one tool, one job". The code is MIT-licensed and the repository was created in February 2025.',
          '**The About page says Handy is not trying to be the best speech-to-text app but "the most forkable one",** and invites contributors who know Rust. It is a downloadable program, not a hosted service.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Handy is a desktop download for macOS, Windows and Linux; no iOS, Android or web version is listed.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          {
            Option: 'macOS',
            'How to get it': '.dmg (Apple silicon, Intel): [handy.computer](https://handy.computer)',
          },
          {
            Option: 'Windows',
            'How to get it': '.exe, .msi (x64, ARM64): [handy.computer](https://handy.computer)',
          },
          {
            Option: 'Linux',
            'How to get it': '.AppImage, .deb, .rpm (x86_64, ARM64): [handy.computer](https://handy.computer)',
          },
          {
            Option: 'Website',
            'How to get it': '[handy.computer](https://handy.computer)',
          },
          {
            Option: 'Privacy policy',
            'How to get it': '[handy.computer/privacy](https://handy.computer/privacy)',
          },
          {
            Option: 'Source code',
            'How to get it': '[github.com/cjpais/Handy](https://github.com/cjpais/Handy), MIT license',
          },
        ],
        note: 'Version reviewed: 0.9.8, published on 3 October 2026 per the [GitHub Releases page](https://github.com/cjpais/Handy/releases), which also lists every installer. The website\'s main button offers the Apple silicon build for Mac. Homebrew (`brew install --cask handy`) and winget (`winget install cjpais.Handy`) packages exist but are not maintained by the developers; on Debian or Ubuntu, install the .deb with `sudo apt install ./Handy_*.deb`. The app is free.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**The website lists no minimum system versions; hardware needs depend on which speech model you pick.**',
        ],
        columns: ['Item', 'What the sources say'],
        rows: [
          {
            Item: 'Operating system',
            'What the sources say': 'Website silent on minimums; the project\'s build configuration sets macOS 10.15 as the minimum; downloads exist for Windows x64 and ARM64 and Linux x86_64 and ARM64',
          },
          {
            Item: 'Speech models',
            'What the sources say': 'Downloaded inside the app: Whisper Small 487 MB, Medium 492 MB, Turbo 1600 MB, Large 1100 MB, and a 731 MB Parakeet model, per the project\'s docs',
          },
          {
            Item: 'Hardware',
            'What the sources say': 'Whisper models use GPU acceleration when available; Parakeet is described as CPU-optimized; no RAM figure is given',
          },
          {
            Item: 'Permissions',
            'What the sources say': 'Microphone and accessibility access, requested at first launch',
          },
          {
            Item: 'Linux extras',
            'What the sources say': 'xdotool (X11), wtype or dotool (Wayland) for typing text; libgtk-layer-shell at runtime',
          },
          {
            Item: 'Internet',
            'What the sources say': 'Needed to download models and, if enabled, to check for updates; model files can also be copied in by hand',
          },
        ],
        note: 'Model sizes are the file sizes in the project\'s manual-install guide; the in-app list may differ.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**The steps follow the project\'s README; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Install Handy',
            whyItMatters: 'Download the installer for your system from the website or the Releases page and install it.',
          },
          {
            title: 'Grant permissions',
            whyItMatters: 'Launch Handy and allow microphone and accessibility access when the system asks.',
          },
          {
            title: 'Download a model',
            whyItMatters: 'Open Settings, then Models, and download a Whisper or Parakeet model; this is the main step that needs the internet.',
          },
          {
            title: 'Dictate',
            whyItMatters: 'Click into any text field, hold the shortcut, speak and release; Handy pastes the transcript. Push-to-talk can be turned off so the same shortcut toggles recording instead.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the website, the privacy policy or the README; none has been independently tested.**',
        ],
        items: [
          '**Push-to-talk or toggle.** The shortcut is configurable; hold-to-record is the default and a tap-to-start, tap-to-stop mode is available.',
          '**Local models.** Whisper in four sizes and Parakeet V3, which the README describes as CPU-optimized with automatic language detection; custom Whisper GGML files placed in the models folder appear under Custom Models.',
          '**Voice-activity filtering.** Silero VAD removes silence before transcription.',
          '**Custom words and history.** Settings include a custom-word list, custom prompts and a transcription history that keeps recordings.',
          '**Optional post-processing.** A second pass can clean up the transcript with an AI model you configure, toggled with `handy --toggle-post-process`; it is off unless you set it up.',
        ],
        note: 'On Linux the recording overlay is off by default because some compositors treat it as the active window, which can block pasting.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**The privacy policy, effective 18 September 2026, says Handy needs no account, contains no advertising, behavioral analytics or tracking telemetry, and does not send your microphone audio or transcripts to the maintainers during ordinary transcription.** Recordings, transcripts, history, settings, custom words and logs stay on your device; by default Handy keeps a limited number of recent entries with their audio, and you can change the retention period or set the history limit to zero. Official release builds redact transcript text from logs.',
          'The app does use the network in three cases: update checks against GitHub Releases (on by default, can be switched off), model downloads from Hugging Face or, as a fallback, [blob.handy.computer](https://blob.handy.computer) via Cloudflare, and optional post-processing. If you configure a cloud provider for post-processing, the transcript, prompt and your credential go directly from your computer to that provider, which the policy says may be OpenAI, Anthropic, OpenRouter, Groq, Cerebras, Z.AI or AWS Bedrock; a local or on-device endpoint avoids that.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maintainers\' declarations, not audit results. The code is public under the MIT license, but PromptQuorum has not read it or inspected the app\'s network traffic.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Writers and developers** who want to dictate into editors, chat boxes and terminals without a cloud service or subscription.',
          '**Accessibility users and tinkerers** who want a small, open codebase they can fork or script.',
          '**Privacy-minded users** who accept a model download and want transcripts kept on their own machine.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Accuracy and speed.** PromptQuorum did not measure word error rates, latency or language coverage; the number of supported languages is not given in the sources we read.',
          '**Hardware performance.** Run times on CPU-only machines, older Macs and different GPUs were not tested, and no RAM requirement is published.',
          '**Platform caveats the project lists itself.** The README warns that a Bluetooth headset microphone on macOS can lower playback quality, that fn and Globe shortcuts work only on Apple keyboards, and that Wayland support on Linux is limited.',
          '**Installer signing.** Whether the macOS and Windows installers are notarized or signed with a developer certificate was not checked.',
          '**Pre-1.0 status.** The version is 0.9.8, and the README says the project is actively developed with known issues.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            App: '[MacWhisper](/power-local-llm/macwhisper-review)',
            Platforms: 'macOS',
            'Price / license': 'Freemium / Proprietary',
            'Key difference': 'Mac-only app with a one-time purchase for local Whisper and Parakeet transcription; closed source',
          },
          {
            App: '[TranscriptionSuite](/power-local-llm/transcriptionsuite-review)',
            Platforms: 'macOS, Windows, Linux',
            'Price / license': 'Free / GPL-3.0',
            'Key difference': 'Adds live transcription, speaker diarization and a searchable audio notebook; the engine runs in Docker on Windows and Linux',
          },
          {
            App: '[AquaVoice](/power-local-llm/aquavoice-review)',
            Platforms: 'macOS, Windows, iOS, Android',
            'Price / license': 'Freemium / Proprietary',
            'Key difference': 'Cloud dictation service that types into the active app, so it is not an offline option',
          },
        ],
        note: 'These are same-category apps from the PromptQuorum directory; confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can Handy run on a computer that is offline?',
            a: 'Yes, once models are in place: the project documents copying model files into the app\'s models folder by hand, and Handy also picks up models already in the shared Hugging Face cache. Custom Whisper GGML .bin files placed there appear under Custom Models.',
          },
          {
            q: 'Which model should I pick?',
            a: 'The README describes Whisper models as GPU-accelerated and Parakeet as CPU-optimized with automatic language detection, and the manual-install guide marks a Parakeet Unified EN 0.6B file as recommended; the sources give no benchmark between them.',
          },
          {
            q: 'Does Handy work on Wayland?',
            a: 'Support is limited: the README says typing needs wtype or dotool, global shortcuts must be set in your desktop environment to run `handy --toggle-transcription`, and Ubuntu 26.04 needs ydotool instead of wtype.',
          },
          {
            q: 'Can I control Handy from scripts or Raycast?',
            a: 'Yes: flags such as --toggle-transcription, --toggle-post-process and --cancel control a running instance, and the README links a Raycast extension by a third-party developer that starts and stops recording.',
          },
          {
            q: 'Are Handy\'s releases signed?',
            a: 'The README says release artifacts use Tauri\'s updater signature format with the public key stored in the repository\'s tauri.conf.json, and the Releases page lists a .sig file next to every installer.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Handy is a small, actively updated, free and open-source way to dictate into any app on Windows, macOS or Linux, with speech recognition that by the project\'s account runs on your own computer. Against that, it is still below version 1.0, the project itself lists macOS Bluetooth and Linux Wayland caveats, and none of its accuracy or speed could be checked here. It suits people who want push-to-talk dictation without an account or a subscription and can try it on their own hardware; anyone who needs proven accuracy, a polished Wayland experience or vendor support should test it first.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Handy website](https://handy.computer) — description, download button and sponsors, checked 24 October 2026.',
          '[Handy About page](https://handy.computer/about) — project goals and how it works, checked 24 October 2026.',
          '[Handy privacy policy](https://handy.computer/privacy) — data handling, network use and post-processing providers, effective 18 September 2026.',
          '[Handy on GitHub](https://github.com/cjpais/Handy) — README, MIT license, installation notes and known issues, checked 24 October 2026.',
          '[Handy releases](https://github.com/cjpais/Handy/releases) — version 0.9.8 and installer files, checked 24 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[MacWhisper Review](/power-local-llm/macwhisper-review) — a Mac app for local Whisper and Parakeet transcription.',
          '[TranscriptionSuite Review](/power-local-llm/transcriptionsuite-review) — free local speech-to-text with speaker labels and live transcription.',
          '[Whisper.cpp Review](/power-local-llm/whisper-cpp-review) — the C++ port of Whisper that many local dictation tools build on.',
          '[Voice and Audio Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — the category comparison this review belongs to.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Handy Review: Free Offline Speech-to-Text Dictation App',
      description: 'Handy review: a free, open-source desktop app for offline push-to-talk speech-to-text on Windows, macOS and Linux. Installers, models, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/handy-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: {
        '@type': 'Audience',
        audienceType: 'Writers, developers and accessibility users evaluating an offline dictation app',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Handy',
        },
        {
          '@type': 'Thing',
          name: 'Speech-to-text',
        },
        {
          '@type': 'Thing',
          name: 'Offline dictation',
        },
        {
          '@type': 'Thing',
          name: 'Whisper',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/handy-review',
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
          name: 'Handy Review',
          item: 'https://www.promptquorum.com/power-local-llm/handy-review',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/handy-review-hero-de.webp',
    title: 'Handy-Rezension: Kostenlose Offline-Diktier-App mit lokaler Spracherkennung',
    seoTitle: 'Handy-Rezension: Offline-Diktier-App mit Spracherkennung',
    intro: 'Handy ist eine kostenlose, quelloffene Desktop-App von [CJ Pais](https://github.com/cjpais) und Mitwirkenden: Sie halten ein Tastenkürzel gedrückt, sprechen, lassen los, und der transkribierte Text wird in das Textfeld eingefügt, in dem Sie gerade arbeiten. Laut Projekt läuft die Spracherkennung auf Ihrem eigenen Rechner und funktioniert nach dem Download eines Modells vollständig offline. Diese Rezension stützt sich auf die Website, die Datenschutzerklärung und das GitHub-Repository, geprüft am 24. Oktober 2026; PromptQuorum hat die App nicht selbst getestet.',
    metaDescription: 'Handy-Rezension: kostenlose Desktop-App (MIT), die Sprache auf Ihrem Rechner in Text umwandelt und überall einfügt. Windows, macOS, Linux; ungetestet.',
    twitterDescription: 'Handy-Rezension: kostenloses Offline-Diktat per Push-to-Talk für Windows, macOS und Linux. Was die Quellen zu Modellen, Datenschutz und Installern bestätigen und was nicht.',
    audience: 'Autoren, Entwickler und Nutzer mit Barrierefreiheitsbedarf, die Push-to-Talk-Diktat auf dem eigenen Rechner wollen und wissen müssen, was die Quellen bestätigen, was nur behauptet wird und was es kostet.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Handy Rezension',
    targetKeywords: [
      'handy rezension',
      'handy speech to text',
      'offline diktier app',
      'open source spracherkennung',
      'push to talk diktat windows mac linux',
      'whisper diktier app',
      'handy.computer',
    ],
    current_models_mentioned: ['Whisper', 'Parakeet'],
    current_hardware_mentioned: ['Apple silicon', 'GPU'],
    leadAnswerBlock: '**Handy (Version 0.9.8) ist eine kostenlose Desktop-App unter MIT-Lizenz, die Ihre Sprache auf dem eigenen Rechner in Text umwandelt und in das Textfeld einfügt, in das Sie gerade tippen.** Sie läuft unter Windows, macOS und Linux, braucht einen einmaligen Modell-Download, und jede Aussage hier stammt aus der Website des Herstellers, seiner Datenschutzerklärung und dem GitHub-Repository.',
    quickAnswerTop: {
      de: {
        question: 'Funktioniert Handy wirklich offline?',
        answer: 'Laut Projekt ja: Sobald das Sprachmodell heruntergeladen ist, wird das Audio ohne Internetverbindung auf Ihrem Rechner transkribiert. Die Datenschutzerklärung ergänzt, dass bei normaler Transkription weder Audio noch Text an die Maintainer gehen; das Netzwerk dient für Update-Prüfungen, Modell-Downloads und optionale Nachbearbeitung.',
        bullets: [
          'Tastenkürzel gedrückt halten zum Aufnehmen und loslassen zum Einfügen, oder einmal tippen zum Starten und erneut zum Beenden.',
          'Stille wird vor der Transkription mit einem Silero-Sprachaktivitätsdetektor herausgefiltert.',
          'Ein optionaler Nachbearbeitungsschritt kann den Text mit einem von Ihnen konfigurierten KI-Modell bereinigen.',
          'Über Kommandozeilen-Flags lässt sich die Aufnahme aus Skripten und Linux-Desktops auslösen.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Kurzantwort',
        anchor: 'quick-answer',
      },
      {
        label: 'Was ist Handy?',
        anchor: 'what-is-handy',
      },
      {
        label: 'Bezugsquelle',
        anchor: 'get-it',
      },
      {
        label: 'Anforderungen',
        anchor: 'requirements',
      },
      {
        label: 'So gelingt der Einstieg',
        anchor: 'getting-started',
      },
      {
        label: 'Von den Quellen bestätigte Funktionen',
        anchor: 'key-features',
      },
      {
        label: 'Datenfluss und Datenschutz',
        anchor: 'privacy',
      },
      {
        label: 'Für wen sich die App eignet',
        anchor: 'who-should-use',
      },
      {
        label: 'Was wir nicht überprüfen konnten',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Wettbewerber und Alternativen',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Häufig gestellte Fragen',
        anchor: 'faq',
      },
      {
        label: 'Fazit',
        anchor: 'verdict',
      },
      {
        label: 'Quellen',
        anchor: 'sources',
      },
      {
        label: 'Weiterführende Artikel',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Handy ist eine quelloffene Desktop-App, die Ihre Stimme aufnimmt, wenn Sie ein Tastenkürzel drücken, sie mit einem lokalen Sprachmodell transkribiert und den Text in die aktive App einfügt.',
          },
          {
            type: 'plain-terms',
            text: 'Sie drücken eine Tastenkombination, sprechen einen Satz, lassen los, und die Wörter erscheinen am Cursor; laut Projekt sind weder ein Konto noch eine Internetverbindung nötig, sobald das Modell auf der Festplatte liegt.',
          },
        ],
        items: [
          'Pflege: Die neueste Version erschien am 3. Oktober 2026, der Hauptzweig wurde zuletzt am 21. Oktober 2026 geändert; eine Warnung vor einem veralteten Projekt entfällt.',
          'Kosten: keine Bezahlstufe; das Projekt bittet um Spenden und nennt Sponsoren.',
          'Modelle: Whisper (Small, Medium, Turbo, Large) und Parakeet, einmal geladen und lokal ausgeführt.',
          'Installer: .dmg-, .exe-, .msi-, .AppImage-, .deb- und .rpm-Dateien auf der GitHub-Releases-Seite.',
          'Hersteller: CJ Pais mit Mitwirkenden; das Projekt nennt sich „forkbar“ statt beste Diktier-App.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf [handy.computer](https://handy.computer), die Datenschutzerklärung und das GitHub-Repository, geprüft am 24. Oktober 2026. PromptQuorum hat die App weder installiert noch gemessen; Genauigkeit und Geschwindigkeit werden daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-handy',
        title: 'Was ist Handy?',
        content: [
          '**Handy ist eine plattformübergreifende Desktop-App für Sprache-zu-Text, die aufnimmt, solange Sie ein konfigurierbares Tastenkürzel halten, das Audio lokal transkribiert und das Ergebnis in die Anwendung mit Fokus einfügt.** Das Projekt beschreibt sich als kostenlos, quelloffen, privat und einfach: „ein Werkzeug, eine Aufgabe“. Der Code steht unter MIT-Lizenz, das Repository wurde im Februar 2025 angelegt.',
          '**Auf der About-Seite heißt es, Handy wolle nicht die beste Sprache-zu-Text-App sein, sondern „die am besten forkbare“,** und Rust-Kenner sind als Mitwirkende willkommen. Es ist ein herunterladbares Programm, kein gehosteter Dienst.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Handy gibt es als Desktop-Download für macOS, Windows und Linux; eine Version für iOS, Android oder den Browser ist nicht gelistet.**',
        ],
        columns: ['Option', 'Bezug'],
        rows: [
          {
            Option: 'macOS',
            Bezug: '.dmg (Apple Silicon, Intel): [handy.computer](https://handy.computer)',
          },
          {
            Option: 'Windows',
            Bezug: '.exe, .msi (x64, ARM64): [handy.computer](https://handy.computer)',
          },
          {
            Option: 'Linux',
            Bezug: '.AppImage, .deb, .rpm (x86_64, ARM64): [handy.computer](https://handy.computer)',
          },
          {
            Option: 'Website',
            Bezug: '[handy.computer](https://handy.computer)',
          },
          {
            Option: 'Datenschutzerklärung',
            Bezug: '[handy.computer/privacy](https://handy.computer/privacy)',
          },
          {
            Option: 'Quellcode',
            Bezug: '[github.com/cjpais/Handy](https://github.com/cjpais/Handy), MIT-Lizenz',
          },
        ],
        note: 'Geprüfte Version: 0.9.8, laut [GitHub-Releases-Seite](https://github.com/cjpais/Handy/releases) am 3. Oktober 2026 veröffentlicht; dort sind auch alle Installer aufgeführt. Der Hauptknopf der Website bietet für den Mac die Apple-Silicon-Version an. Pakete für Homebrew (`brew install --cask handy`) und winget (`winget install cjpais.Handy`) gibt es, sie werden aber nicht von den Entwicklern gepflegt; unter Debian oder Ubuntu das .deb mit `sudo apt install ./Handy_*.deb` installieren. Die App ist kostenlos.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
          '**Die Website nennt keine Mindestversionen des Betriebssystems; der Hardwarebedarf hängt vom gewählten Sprachmodell ab.**',
        ],
        columns: ['Punkt', 'Angaben der Quellen'],
        rows: [
          {
            Punkt: 'Betriebssystem',
            'Angaben der Quellen': 'Website nennt keine Mindestversionen; die Build-Konfiguration des Projekts setzt macOS 10.15 als Minimum; Downloads gibt es für Windows x64 und ARM64 sowie Linux x86_64 und ARM64',
          },
          {
            Punkt: 'Sprachmodelle',
            'Angaben der Quellen': 'In der App geladen: Whisper Small 487 MB, Medium 492 MB, Turbo 1600 MB, Large 1100 MB sowie ein Parakeet-Modell mit 731 MB, laut Projektdokumentation',
          },
          {
            Punkt: 'Hardware',
            'Angaben der Quellen': 'Whisper-Modelle nutzen bei Verfügbarkeit GPU-Beschleunigung; Parakeet gilt als CPU-optimiert; ein RAM-Wert wird nicht genannt',
          },
          {
            Punkt: 'Berechtigungen',
            'Angaben der Quellen': 'Mikrofon- und Bedienungshilfen-Zugriff, beim ersten Start angefragt',
          },
          {
            Punkt: 'Linux-Extras',
            'Angaben der Quellen': 'xdotool (X11), wtype oder dotool (Wayland) zum Eintippen von Text; zur Laufzeit libgtk-layer-shell',
          },
          {
            Punkt: 'Internet',
            'Angaben der Quellen': 'Nötig für den Modell-Download und, falls aktiviert, für die Update-Prüfung; Modelldateien lassen sich auch von Hand einfügen',
          },
        ],
        note: 'Die Modellgrößen entsprechen den Dateigrößen in der Anleitung des Projekts zur manuellen Installation; die Liste in der App kann abweichen.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Schritte folgen der README des Projekts; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Handy installieren',
            whyItMatters: 'Laden Sie den Installer für Ihr System von der Website oder der Releases-Seite herunter und installieren Sie ihn.',
          },
          {
            title: 'Berechtigungen erteilen',
            whyItMatters: 'Starten Sie Handy und erlauben Sie Mikrofon- und Bedienungshilfen-Zugriff, wenn das System danach fragt.',
          },
          {
            title: 'Modell laden',
            whyItMatters: 'Öffnen Sie Einstellungen und dann Modelle und laden Sie ein Whisper- oder Parakeet-Modell; dies ist der Hauptschritt, der Internet braucht.',
          },
          {
            title: 'Diktieren',
            whyItMatters: 'Klicken Sie in ein beliebiges Textfeld, halten Sie das Tastenkürzel, sprechen Sie und lassen Sie los; Handy fügt das Transkript ein. Push-to-Talk lässt sich abschalten, sodass dasselbe Kürzel die Aufnahme umschaltet.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Alle folgenden Punkte stammen aus der Website, der Datenschutzerklärung oder der README; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Push-to-Talk oder Umschalten.** Das Tastenkürzel ist konfigurierbar; Halten zum Aufnehmen ist die Voreinstellung, zusätzlich gibt es einen Modus mit Tippen zum Starten und erneutem Tippen zum Beenden.',
          '**Lokale Modelle.** Whisper in vier Größen und Parakeet V3, das die README als CPU-optimiert mit automatischer Spracherkennung beschreibt; eigene Whisper-GGML-Dateien im Modellordner erscheinen unter „Custom Models“.',
          '**Filterung per Sprachaktivität.** Silero VAD entfernt Stille vor der Transkription.',
          '**Eigene Wörter und Verlauf.** Zu den Einstellungen gehören eine Liste eigener Wörter, eigene Prompts und ein Transkriptionsverlauf, der Aufnahmen speichert.',
          '**Optionale Nachbearbeitung.** Ein zweiter Durchgang kann das Transkript mit einem von Ihnen konfigurierten KI-Modell bereinigen, ausgelöst mit `handy --toggle-post-process`; ohne Einrichtung bleibt sie aus.',
        ],
        note: 'Unter Linux ist das Aufnahme-Overlay standardmäßig aus, weil manche Compositoren es als aktives Fenster behandeln, was das Einfügen blockieren kann.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Die Datenschutzerklärung, gültig ab 18. September 2026, besagt: Handy braucht kein Konto, enthält weder Werbung noch Verhaltensanalyse oder Tracking-Telemetrie und sendet bei normaler Transkription weder Mikrofon-Audio noch Transkripte an die Maintainer.** Aufnahmen, Transkripte, Verlauf, Einstellungen, eigene Wörter und Logs bleiben auf Ihrem Gerät; standardmäßig behält Handy eine begrenzte Zahl jüngster Einträge samt Audio, und Sie können die Aufbewahrung ändern oder das Verlaufslimit auf null setzen. Offizielle Release-Builds schwärzen Transkripttext in den Logs.',
          'Das Netzwerk nutzt die App in drei Fällen: Update-Prüfungen bei GitHub Releases (standardmäßig an, abschaltbar), Modell-Downloads von Hugging Face oder ersatzweise von [blob.handy.computer](https://blob.handy.computer) über Cloudflare sowie optionale Nachbearbeitung. Richten Sie dafür einen Cloud-Anbieter ein, gehen Transkript, Prompt und Ihre Zugangsdaten direkt von Ihrem Rechner an diesen Anbieter; laut Erklärung kommen OpenAI, Anthropic, OpenRouter, Groq, Cerebras, Z.AI oder AWS Bedrock in Frage. Ein lokaler Endpunkt auf dem Gerät vermeidet das.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Erklärungen der Maintainer, keine Prüfergebnisse. Der Code ist unter MIT-Lizenz öffentlich, doch PromptQuorum hat ihn weder gelesen noch den Netzwerkverkehr der App untersucht.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Autoren und Entwickler**, die in Editoren, Chatfenster und Terminals diktieren möchten, ohne Cloud-Dienst oder Abo.',
          '**Nutzer mit Barrierefreiheitsbedarf und Tüftler**, die eine kleine, offene Codebasis forken oder per Skript steuern wollen.',
          '**Datenschutzbewusste Nutzer**, die einen Modell-Download akzeptieren und Transkripte auf dem eigenen Rechner behalten wollen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Genauigkeit und Geschwindigkeit.** PromptQuorum hat weder Wortfehlerraten noch Latenz oder Sprachabdeckung gemessen; die Zahl der unterstützten Sprachen nennen die gelesenen Quellen nicht.',
          '**Hardware-Leistung.** Laufzeiten auf Rechnern nur mit CPU, älteren Macs und verschiedenen GPUs wurden nicht getestet, und ein RAM-Bedarf ist nicht veröffentlicht.',
          '**Einschränkungen, die das Projekt selbst nennt.** Die README warnt, dass ein Bluetooth-Headset-Mikrofon unter macOS die Wiedergabequalität senken kann, dass Kürzel mit fn und Globe nur auf Apple-Tastaturen funktionieren und dass die Wayland-Unterstützung unter Linux begrenzt ist.',
          '**Signierung der Installer.** Ob die Installer für macOS und Windows notarisiert oder mit einem Entwicklerzertifikat signiert sind, wurde nicht geprüft.',
          '**Status vor 1.0.** Die Version ist 0.9.8, und laut README wird das Projekt aktiv entwickelt und hat bekannte Probleme.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          {
            App: '[MacWhisper](/de/power-local-llm/macwhisper-review)',
            Plattformen: 'macOS',
            'Preis / Lizenz': 'Freemium / Proprietär',
            'Wichtigster Unterschied': 'Reine Mac-App mit Einmalkauf für lokale Whisper- und Parakeet-Transkription; Closed Source',
          },
          {
            App: '[TranscriptionSuite](/de/power-local-llm/transcriptionsuite-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / GPL-3.0',
            'Wichtigster Unterschied': 'Bietet Live-Transkription, Sprechererkennung und ein durchsuchbares Audio-Notizbuch; die Engine läuft unter Windows und Linux in Docker',
          },
          {
            App: '[AquaVoice](/de/power-local-llm/aquavoice-review)',
            Plattformen: 'macOS, Windows, iOS, Android',
            'Preis / Lizenz': 'Freemium / Proprietär',
            'Wichtigster Unterschied': 'Cloud-Diktierdienst, der in die aktive App tippt, also keine Offline-Option',
          },
        ],
        note: 'Das sind Apps derselben Kategorie aus dem PromptQuorum-Verzeichnis; prüfen Sie aktuellen Preis, Lizenz und Plattformen auf der jeweiligen Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Läuft Handy auf einem Rechner ohne Internet?',
            a: 'Ja, sobald die Modelle vorhanden sind: Das Projekt dokumentiert, Modelldateien von Hand in den Modellordner der App zu kopieren, und Handy erkennt auch Modelle, die schon im gemeinsamen Hugging-Face-Cache liegen. Eigene Whisper-GGML-.bin-Dateien dort erscheinen unter „Custom Models“.',
          },
          {
            q: 'Welches Modell sollte ich wählen?',
            a: 'Die README beschreibt Whisper-Modelle als GPU-beschleunigt und Parakeet als CPU-optimiert mit automatischer Spracherkennung, und die Anleitung zur manuellen Installation nennt eine Parakeet-Unified-EN-0.6B-Datei als empfohlen; einen Benchmark zwischen beiden liefern die Quellen nicht.',
          },
          {
            q: 'Funktioniert Handy unter Wayland?',
            a: 'Die Unterstützung ist begrenzt: Laut README braucht das Eintippen wtype oder dotool, globale Kürzel müssen in Ihrer Desktop-Umgebung so gesetzt werden, dass sie `handy --toggle-transcription` ausführen, und Ubuntu 26.04 benötigt ydotool statt wtype.',
          },
          {
            q: 'Kann ich Handy per Skript oder Raycast steuern?',
            a: 'Ja: Flags wie --toggle-transcription, --toggle-post-process und --cancel steuern eine laufende Instanz, und die README verlinkt eine Raycast-Erweiterung eines Drittentwicklers, die die Aufnahme startet und stoppt.',
          },
          {
            q: 'Sind die Releases von Handy signiert?',
            a: 'Die README sagt, Release-Artefakte nutzen das Updater-Signaturformat von Tauri, wobei der öffentliche Schlüssel in der tauri.conf.json des Repositorys liegt; die Releases-Seite führt neben jedem Installer eine .sig-Datei auf.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Handy ist ein kleiner, aktiv aktualisierter, kostenloser und quelloffener Weg, unter Windows, macOS oder Linux in jede App zu diktieren, mit einer Spracherkennung, die laut Projekt auf Ihrem eigenen Rechner läuft. Dem stehen gegenüber: Die Version liegt noch unter 1.0, das Projekt nennt selbst Einschränkungen bei Bluetooth unter macOS und Wayland unter Linux, und Genauigkeit oder Geschwindigkeit ließen sich hier nicht prüfen. Sie passt zu Menschen, die Push-to-Talk-Diktat ohne Konto und Abo wollen und es auf eigener Hardware ausprobieren können; wer belegte Genauigkeit, ein ausgereiftes Wayland-Erlebnis oder Herstellersupport braucht, sollte zuerst testen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von Handy](https://handy.computer) — Beschreibung, Download-Schaltfläche und Sponsoren, geprüft am 24. Oktober 2026.',
          '[About-Seite von Handy](https://handy.computer/about) — Projektziele und Funktionsweise, geprüft am 24. Oktober 2026.',
          '[Datenschutzerklärung von Handy](https://handy.computer/privacy) — Datenverarbeitung, Netzwerknutzung und Anbieter der Nachbearbeitung, gültig ab 18. September 2026.',
          '[Handy auf GitHub](https://github.com/cjpais/Handy) — README, MIT-Lizenz, Installationshinweise und bekannte Probleme, geprüft am 24. Oktober 2026.',
          '[Handy-Releases](https://github.com/cjpais/Handy/releases) — Version 0.9.8 und Installer-Dateien, geprüft am 24. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[MacWhisper-Rezension](/de/power-local-llm/macwhisper-review) — eine Mac-App für lokale Whisper- und Parakeet-Transkription.',
          '[TranscriptionSuite-Rezension](/de/power-local-llm/transcriptionsuite-review) — kostenlose lokale Spracherkennung mit Sprecherlabels und Live-Transkription.',
          '[Whisper.cpp-Rezension](/de/power-local-llm/whisper-cpp-review) — die C++-Portierung von Whisper, auf der viele lokale Diktier-Werkzeuge aufbauen.',
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
    heroImage: '/images/handy-review-hero-es.webp',
    title: 'Reseña de Handy: app gratuita de dictado sin conexión',
    seoTitle: 'Reseña de Handy: app gratuita de dictado sin conexión',
    intro: 'Handy es una app de escritorio gratuita y de código abierto de [CJ Pais](https://github.com/cjpais) y colaboradores: mantienes pulsado un atajo, hablas, lo sueltas y el texto transcrito se pega en el campo de texto que estés usando. El proyecto afirma que el reconocimiento de voz se ejecuta en tu propio equipo y funciona totalmente sin conexión una vez descargado un modelo. Esta reseña se basa en el sitio web, su política de privacidad y el repositorio de GitHub, consultados el 24 de octubre de 2026; PromptQuorum no ha probado la app personalmente.',
    metaDescription: 'Reseña de Handy: app de escritorio gratuita (MIT) que convierte voz en texto en tu equipo y lo pega donde quieras. Windows, macOS y Linux; sin probar.',
    twitterDescription: 'Reseña de Handy: dictado sin conexión con pulsar para hablar, gratis, en Windows, macOS y Linux. Qué confirman las fuentes sobre modelos, privacidad e instaladores y qué no.',
    audience: 'Redactores, desarrolladores y usuarios de accesibilidad que quieren dictado con pulsar para hablar en su propio equipo y necesitan saber qué confirman las fuentes, qué solo se afirma y cuánto cuesta.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Handy',
    targetKeywords: [
      'reseña de handy',
      'handy voz a texto',
      'app de dictado sin conexión',
      'reconocimiento de voz de código abierto',
      'dictado pulsar para hablar windows mac linux',
      'app de dictado whisper',
      'handy.computer',
    ],
    current_models_mentioned: ['Whisper', 'Parakeet'],
    current_hardware_mentioned: ['Apple silicon', 'GPU'],
    leadAnswerBlock: '**Handy (versión 0.9.8) es una app de escritorio gratuita con licencia MIT que convierte tu voz en texto en tu propio equipo y lo pega en el campo de texto en el que escribes.** Funciona en Windows, macOS y Linux, requiere una descarga única de un modelo, y todo lo que se dice aquí procede del sitio web del autor, su política de privacidad y el repositorio de GitHub.',
    quickAnswerTop: {
      es: {
        question: '¿Handy funciona de verdad sin conexión?',
        answer: 'Según el proyecto, sí: una vez descargado el modelo de voz, el audio se transcribe en tu equipo sin conexión a internet. La política de privacidad añade que la transcripción normal no envía audio ni texto a los responsables; la red se usa para buscar actualizaciones, descargar modelos y el posprocesado opcional.',
        bullets: [
          'Mantén pulsado un atajo para grabar y suéltalo para pegar, o púlsalo una vez para empezar y otra para parar.',
          'El silencio se filtra con un detector de actividad de voz Silero antes de transcribir.',
          'Un paso opcional de posprocesado puede limpiar el texto con un modelo de IA que tú configures.',
          'Las opciones de línea de comandos permiten activar la grabación desde scripts y escritorios Linux.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Respuesta rápida',
        anchor: 'quick-answer',
      },
      {
        label: '¿Qué es Handy?',
        anchor: 'what-is-handy',
      },
      {
        label: 'Dónde conseguirlo',
        anchor: 'get-it',
      },
      {
        label: 'Requisitos',
        anchor: 'requirements',
      },
      {
        label: 'Cómo empezar',
        anchor: 'getting-started',
      },
      {
        label: 'Funciones confirmadas por las fuentes',
        anchor: 'key-features',
      },
      {
        label: 'Flujo de datos y privacidad',
        anchor: 'privacy',
      },
      {
        label: 'Para quién es',
        anchor: 'who-should-use',
      },
      {
        label: 'Lo que no pudimos verificar',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Competidores y alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Preguntas frecuentes',
        anchor: 'faq',
      },
      {
        label: 'Veredicto',
        anchor: 'verdict',
      },
      {
        label: 'Fuentes',
        anchor: 'sources',
      },
      {
        label: 'Lecturas relacionadas',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Handy es una app de escritorio de código abierto que graba tu voz al pulsar un atajo, la transcribe con un modelo de voz local y pega el texto en la app activa.',
          },
          {
            type: 'plain-terms',
            text: 'Pulsas una combinación de teclas, dices una frase, sueltas, y las palabras aparecen donde está el cursor; según el proyecto, no hacen falta cuenta ni conexión a internet una vez que el modelo está en tu disco.',
          },
        ],
        items: [
          'Mantenimiento: la última versión se publicó el 3 de octubre de 2026 y la rama principal cambió por última vez el 21 de octubre de 2026, así que no se aplica el aviso de proyecto abandonado.',
          'Coste: sin plan de pago; el proyecto pide donaciones y enumera patrocinadores.',
          'Modelos: Whisper (Small, Medium, Turbo, Large) y Parakeet, descargados una vez y ejecutados en local.',
          'Instaladores: archivos .dmg, .exe, .msi, .AppImage, .deb y .rpm en la página de Releases de GitHub.',
          'Autoría: CJ Pais con colaboradores; el proyecto se define como «bifurcable» más que como la mejor app de dictado.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en [handy.computer](https://handy.computer), su política de privacidad y el repositorio de GitHub, consultados el 24 de octubre de 2026. PromptQuorum no ha instalado ni cronometrado la app, así que no se evalúan la precisión ni la velocidad.',
          },
        ],
      },
      overview: {
        id: 'what-is-handy',
        title: '¿Qué es Handy?',
        content: [
          '**Handy es una app de escritorio multiplataforma de voz a texto que graba mientras mantienes pulsado un atajo configurable, transcribe el audio en local y pega el resultado en la aplicación con el foco.** El proyecto se describe como gratuito, de código abierto, privado y sencillo: «una herramienta, una tarea». El código tiene licencia MIT y el repositorio se creó en febrero de 2025.',
          '**La página «About» dice que Handy no intenta ser la mejor app de voz a texto sino «la más bifurcable»,** e invita a colaborar a quienes conozcan Rust. Es un programa descargable, no un servicio alojado.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**Handy es una descarga de escritorio para macOS, Windows y Linux; no se lista ninguna versión para iOS, Android ni web.**',
        ],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
          {
            'Opción': 'macOS',
            'Cómo conseguirlo': '.dmg (Apple silicon, Intel): [handy.computer](https://handy.computer)',
          },
          {
            'Opción': 'Windows',
            'Cómo conseguirlo': '.exe, .msi (x64, ARM64): [handy.computer](https://handy.computer)',
          },
          {
            'Opción': 'Linux',
            'Cómo conseguirlo': '.AppImage, .deb, .rpm (x86_64, ARM64): [handy.computer](https://handy.computer)',
          },
          {
            'Opción': 'Sitio web',
            'Cómo conseguirlo': '[handy.computer](https://handy.computer)',
          },
          {
            'Opción': 'Política de privacidad',
            'Cómo conseguirlo': '[handy.computer/privacy](https://handy.computer/privacy)',
          },
          {
            'Opción': 'Código fuente',
            'Cómo conseguirlo': '[github.com/cjpais/Handy](https://github.com/cjpais/Handy), licencia MIT',
          },
        ],
        note: 'Versión analizada: 0.9.8, publicada el 3 de octubre de 2026 según la [página de Releases de GitHub](https://github.com/cjpais/Handy/releases), donde también figuran todos los instaladores. El botón principal del sitio ofrece la versión para Apple silicon en Mac. Existen paquetes de Homebrew (`brew install --cask handy`) y winget (`winget install cjpais.Handy`), pero no los mantienen los desarrolladores; en Debian o Ubuntu, instala el .deb con `sudo apt install ./Handy_*.deb`. La app es gratuita.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**El sitio web no indica versiones mínimas del sistema; las necesidades de hardware dependen del modelo de voz que elijas.**',
        ],
        columns: ['Elemento', 'Qué dicen las fuentes'],
        rows: [
          {
            Elemento: 'Sistema operativo',
            'Qué dicen las fuentes': 'El sitio no indica mínimos; la configuración de compilación del proyecto fija macOS 10.15 como mínimo; hay descargas para Windows x64 y ARM64 y Linux x86_64 y ARM64',
          },
          {
            Elemento: 'Modelos de voz',
            'Qué dicen las fuentes': 'Se descargan dentro de la app: Whisper Small 487 MB, Medium 492 MB, Turbo 1600 MB, Large 1100 MB y un modelo Parakeet de 731 MB, según la documentación del proyecto',
          },
          {
            Elemento: 'Hardware',
            'Qué dicen las fuentes': 'Los modelos Whisper usan aceleración por GPU cuando está disponible; Parakeet se describe como optimizado para CPU; no se da cifra de RAM',
          },
          {
            Elemento: 'Permisos',
            'Qué dicen las fuentes': 'Acceso al micrófono y a accesibilidad, solicitado en el primer inicio',
          },
          {
            Elemento: 'Extras en Linux',
            'Qué dicen las fuentes': 'xdotool (X11), wtype o dotool (Wayland) para escribir texto; libgtk-layer-shell en ejecución',
          },
          {
            Elemento: 'Internet',
            'Qué dicen las fuentes': 'Necesario para descargar modelos y, si se activa, buscar actualizaciones; los archivos de modelo también se pueden copiar a mano',
          },
        ],
        note: 'Los tamaños de modelo son los de la guía de instalación manual del proyecto; la lista dentro de la app puede diferir.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Los pasos siguen el README del proyecto; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Instala Handy',
            whyItMatters: 'Descarga el instalador para tu sistema desde el sitio web o la página de Releases e instálalo.',
          },
          {
            title: 'Concede los permisos',
            whyItMatters: 'Abre Handy y permite el acceso al micrófono y a accesibilidad cuando el sistema lo pida.',
          },
          {
            title: 'Descarga un modelo',
            whyItMatters: 'Abre Ajustes, luego Modelos, y descarga un modelo Whisper o Parakeet; es el paso principal que necesita internet.',
          },
          {
            title: 'Dicta',
            whyItMatters: 'Haz clic en cualquier campo de texto, mantén pulsado el atajo, habla y suéltalo; Handy pega la transcripción. Puedes desactivar el modo pulsar para hablar para que el mismo atajo alterne la grabación.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Todo lo siguiente procede del sitio web, la política de privacidad o el README; nada se ha probado de forma independiente.**',
        ],
        items: [
          '**Pulsar para hablar o alternar.** El atajo es configurable; mantener pulsado para grabar es lo predeterminado y hay un modo de pulsar para empezar y pulsar para parar.',
          '**Modelos locales.** Whisper en cuatro tamaños y Parakeet V3, que el README describe como optimizado para CPU con detección automática de idioma; los archivos Whisper GGML propios que pongas en la carpeta de modelos aparecen en «Custom Models».',
          '**Filtrado por actividad de voz.** Silero VAD elimina el silencio antes de transcribir.',
          '**Palabras personalizadas e historial.** Los ajustes incluyen una lista de palabras personalizadas, prompts propios y un historial de transcripciones que conserva las grabaciones.',
          '**Posprocesado opcional.** Una segunda pasada puede limpiar la transcripción con un modelo de IA que configures, activada con `handy --toggle-post-process`; está desactivada hasta que la configuras.',
        ],
        note: 'En Linux la superposición de grabación está desactivada de forma predeterminada porque algunos compositores la tratan como ventana activa, lo que puede impedir el pegado.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**La política de privacidad, vigente desde el 18 de septiembre de 2026, afirma que Handy no necesita cuenta, no incluye publicidad, analítica de comportamiento ni telemetría de seguimiento, y no envía el audio del micrófono ni las transcripciones a los responsables durante la transcripción normal.** Las grabaciones, transcripciones, historial, ajustes, palabras personalizadas y registros permanecen en tu dispositivo; de forma predeterminada Handy conserva un número limitado de entradas recientes con su audio, y puedes cambiar el periodo de retención o poner el límite del historial a cero. Las versiones oficiales omiten el texto de las transcripciones en los registros.',
          'La app usa la red en tres casos: comprobación de actualizaciones en GitHub Releases (activada por defecto, se puede desactivar), descarga de modelos desde Hugging Face o, como alternativa, desde [blob.handy.computer](https://blob.handy.computer) a través de Cloudflare, y el posprocesado opcional. Si configuras un proveedor en la nube para el posprocesado, la transcripción, el prompt y tu credencial van directamente de tu equipo a ese proveedor, que según la política puede ser OpenAI, Anthropic, OpenRouter, Groq, Cerebras, Z.AI o AWS Bedrock; un punto de acceso local o en el dispositivo lo evita.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones de los responsables, no resultados de una auditoría. El código es público con licencia MIT, pero PromptQuorum no lo ha leído ni ha inspeccionado el tráfico de red de la app.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Redactores y desarrolladores** que quieren dictar en editores, chats y terminales sin servicio en la nube ni suscripción.',
          '**Usuarios de accesibilidad y aficionados al bricolaje** que quieren una base de código pequeña y abierta que puedan bifurcar o automatizar.',
          '**Usuarios atentos a la privacidad** que aceptan una descarga de modelo y quieren las transcripciones en su propio equipo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Precisión y velocidad.** PromptQuorum no midió tasas de error de palabras, latencia ni cobertura de idiomas; el número de idiomas admitidos no figura en las fuentes que leímos.',
          '**Rendimiento según el hardware.** No se probaron los tiempos en equipos solo con CPU, Macs antiguos ni distintas GPU, y no se publica ningún requisito de RAM.',
          '**Limitaciones que el propio proyecto indica.** El README advierte de que el micrófono de unos auriculares Bluetooth en macOS puede reducir la calidad de reproducción, de que los atajos con fn y Globe solo funcionan en teclados Apple y de que la compatibilidad con Wayland en Linux es limitada.',
          '**Firma de los instaladores.** No se comprobó si los instaladores de macOS y Windows están notarizados o firmados con un certificado de desarrollador.',
          '**Estado previo a la 1.0.** La versión es la 0.9.8 y el README dice que el proyecto se desarrolla activamente y tiene problemas conocidos.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            App: '[MacWhisper](/es/power-local-llm/macwhisper-review)',
            Plataformas: 'macOS',
            'Precio / licencia': 'Freemium / Propietaria',
            'Diferencia clave': 'App solo para Mac con compra única para transcripción local con Whisper y Parakeet; código cerrado',
          },
          {
            App: '[TranscriptionSuite](/es/power-local-llm/transcriptionsuite-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / GPL-3.0',
            'Diferencia clave': 'Añade transcripción en vivo, diarización de hablantes y un cuaderno de audio con búsqueda; el motor se ejecuta en Docker en Windows y Linux',
          },
          {
            App: '[AquaVoice](/es/power-local-llm/aquavoice-review)',
            Plataformas: 'macOS, Windows, iOS, Android',
            'Precio / licencia': 'Freemium / Propietaria',
            'Diferencia clave': 'Servicio de dictado en la nube que escribe en la app activa, por lo que no es una opción sin conexión',
          },
        ],
        note: 'Son apps de la misma categoría del directorio de PromptQuorum; comprueba el precio, la licencia y las plataformas actuales en la página de cada una.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puede Handy funcionar en un equipo sin conexión?',
            a: 'Sí, una vez que los modelos están en su sitio: el proyecto documenta cómo copiar archivos de modelo a mano en la carpeta de modelos de la app, y Handy también reconoce modelos que ya estén en la caché compartida de Hugging Face. Los archivos .bin Whisper GGML propios colocados ahí aparecen en «Custom Models».',
          },
          {
            q: '¿Qué modelo debería elegir?',
            a: 'El README describe los modelos Whisper como acelerados por GPU y Parakeet como optimizado para CPU con detección automática de idioma, y la guía de instalación manual marca un archivo Parakeet Unified EN 0.6B como recomendado; las fuentes no dan ninguna comparativa entre ellos.',
          },
          {
            q: '¿Funciona Handy en Wayland?',
            a: 'La compatibilidad es limitada: según el README, escribir texto requiere wtype o dotool, los atajos globales deben configurarse en tu entorno de escritorio para ejecutar `handy --toggle-transcription`, y Ubuntu 26.04 necesita ydotool en lugar de wtype.',
          },
          {
            q: '¿Puedo controlar Handy desde scripts o Raycast?',
            a: 'Sí: opciones como --toggle-transcription, --toggle-post-process y --cancel controlan una instancia en ejecución, y el README enlaza una extensión de Raycast de un desarrollador externo que inicia y detiene la grabación.',
          },
          {
            q: '¿Están firmadas las versiones de Handy?',
            a: 'El README dice que los artefactos de las versiones usan el formato de firma de actualizaciones de Tauri, con la clave pública guardada en el tauri.conf.json del repositorio, y la página de Releases lista un archivo .sig junto a cada instalador.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Handy es una forma pequeña, activamente actualizada, gratuita y de código abierto de dictar en cualquier app en Windows, macOS o Linux, con un reconocimiento de voz que, según el proyecto, se ejecuta en tu propio equipo. En contra, aún está por debajo de la versión 1.0, el propio proyecto indica limitaciones con Bluetooth en macOS y Wayland en Linux, y no se pudo comprobar su precisión ni su velocidad. Encaja con quien quiere dictado con pulsar para hablar sin cuenta ni suscripción y puede probarlo en su propio hardware; quien necesite precisión demostrada, una experiencia pulida en Wayland o soporte del fabricante debería probarlo antes.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Handy](https://handy.computer) — descripción, botón de descarga y patrocinadores, consultado el 24 de octubre de 2026.',
          '[Página About de Handy](https://handy.computer/about) — objetivos del proyecto y funcionamiento, consultada el 24 de octubre de 2026.',
          '[Política de privacidad de Handy](https://handy.computer/privacy) — tratamiento de datos, uso de la red y proveedores de posprocesado, vigente desde el 18 de septiembre de 2026.',
          '[Handy en GitHub](https://github.com/cjpais/Handy) — README, licencia MIT, notas de instalación y problemas conocidos, consultado el 24 de octubre de 2026.',
          '[Versiones de Handy](https://github.com/cjpais/Handy/releases) — versión 0.9.8 y archivos instaladores, consultado el 24 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de MacWhisper](/es/power-local-llm/macwhisper-review) — una app para Mac de transcripción local con Whisper y Parakeet.',
          '[Reseña de TranscriptionSuite](/es/power-local-llm/transcriptionsuite-review) — voz a texto local gratuita con etiquetas de hablante y transcripción en vivo.',
          '[Reseña de Whisper.cpp](/es/power-local-llm/whisper-cpp-review) — el port en C++ de Whisper en el que se basan muchas herramientas de dictado locales.',
          '[Herramientas de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — la comparativa de categoría a la que pertenece esta reseña.',
          '[Directorio de software de LLM locales](/es/directory) — el catálogo completo de herramientas de IA local.',
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
    heroImage: '/images/handy-review-hero-fr.webp',
    title: 'Test de Handy : application gratuite de dictée hors ligne',
    seoTitle: 'Test de Handy : application gratuite de dictée hors ligne',
    intro: 'Handy est une application de bureau gratuite et open source de [CJ Pais](https://github.com/cjpais) et de contributeurs : vous maintenez un raccourci, vous parlez, vous relâchez, et le texte transcrit est collé dans le champ de texte que vous utilisez. Le projet affirme que la reconnaissance vocale s’exécute sur votre propre ordinateur et fonctionne entièrement hors ligne une fois un modèle téléchargé. Ce test s’appuie sur le site web, sa politique de confidentialité et le dépôt GitHub, consultés le 24 octobre 2026 ; PromptQuorum n’a pas testé l’application en pratique.',
    metaDescription: 'Test de Handy : appli de bureau gratuite (MIT) qui transforme la voix en texte sur votre ordinateur et la colle. Windows, macOS, Linux ; non testée.',
    twitterDescription: 'Test de Handy : dictée hors ligne gratuite par appui-parole pour Windows, macOS et Linux. Ce que les sources confirment sur les modèles, la confidentialité et les installeurs, et ce qu’elles ne disent pas.',
    audience: 'Rédacteurs, développeurs et utilisateurs d’outils d’accessibilité qui veulent une dictée par appui-parole sur leur propre ordinateur et doivent savoir ce que les sources confirment, ce qui est seulement affirmé et ce que cela coûte.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test de Handy',
    targetKeywords: [
      'test handy',
      'handy reconnaissance vocale',
      'application de dictée hors ligne',
      'reconnaissance vocale open source',
      'dictée appui-parole windows mac linux',
      'application de dictée whisper',
      'handy.computer',
    ],
    current_models_mentioned: ['Whisper', 'Parakeet'],
    current_hardware_mentioned: ['Apple silicon', 'GPU'],
    leadAnswerBlock: '**Handy (version 0.9.8) est une application de bureau gratuite sous licence MIT qui transforme votre voix en texte sur votre propre ordinateur et le colle dans le champ de texte où vous écrivez.** Elle fonctionne sous Windows, macOS et Linux, exige un téléchargement unique de modèle, et chaque affirmation ici provient du site de l’éditeur, de sa politique de confidentialité et du dépôt GitHub.',
    quickAnswerTop: {
      fr: {
        question: 'Handy fonctionne-t-il vraiment hors ligne ?',
        answer: 'Selon le projet, oui : une fois le modèle vocal téléchargé, l’audio est transcrit sur votre ordinateur sans connexion internet. La politique de confidentialité précise que la transcription ordinaire n’envoie ni audio ni texte aux mainteneurs ; le réseau sert aux vérifications de mise à jour, aux téléchargements de modèles et au post-traitement facultatif.',
        bullets: [
          'Maintenez un raccourci pour enregistrer et relâchez-le pour coller, ou appuyez une fois pour démarrer et une seconde fois pour arrêter.',
          'Le silence est filtré par un détecteur d’activité vocale Silero avant la transcription.',
          'Une étape facultative de post-traitement peut nettoyer le texte avec un modèle d’IA que vous configurez.',
          'Des options en ligne de commande permettent de déclencher l’enregistrement depuis des scripts et des bureaux Linux.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Réponse rapide',
        anchor: 'quick-answer',
      },
      {
        label: 'Qu’est-ce que Handy ?',
        anchor: 'what-is-handy',
      },
      {
        label: 'Où l’obtenir',
        anchor: 'get-it',
      },
      {
        label: 'Prérequis',
        anchor: 'requirements',
      },
      {
        label: 'Premiers pas',
        anchor: 'getting-started',
      },
      {
        label: 'Fonctions confirmées par les sources',
        anchor: 'key-features',
      },
      {
        label: 'Flux de données et confidentialité',
        anchor: 'privacy',
      },
      {
        label: 'À qui elle s’adresse',
        anchor: 'who-should-use',
      },
      {
        label: 'Ce que nous n’avons pas pu vérifier',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Concurrents et alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Questions fréquentes',
        anchor: 'faq',
      },
      {
        label: 'Verdict',
        anchor: 'verdict',
      },
      {
        label: 'Sources',
        anchor: 'sources',
      },
      {
        label: 'Lectures associées',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Handy est une application de bureau open source qui enregistre votre voix quand vous appuyez sur un raccourci, la transcrit avec un modèle vocal local et colle le texte dans l’application active.',
          },
          {
            type: 'plain-terms',
            text: 'Vous appuyez sur une combinaison de touches, dites une phrase, relâchez, et les mots apparaissent là où se trouve le curseur ; selon le projet, ni compte ni connexion internet ne sont nécessaires une fois le modèle sur votre disque.',
          },
        ],
        items: [
          'Maintenance : la dernière version est parue le 3 octobre 2026 et la branche principale a changé pour la dernière fois le 21 octobre 2026 ; aucun avertissement de projet abandonné ne s’applique.',
          'Coût : pas d’offre payante ; le projet demande des dons et cite des sponsors.',
          'Modèles : Whisper (Small, Medium, Turbo, Large) et Parakeet, téléchargés une fois et exécutés en local.',
          'Installeurs : fichiers .dmg, .exe, .msi, .AppImage, .deb et .rpm sur la page Releases de GitHub.',
          'Éditeur : CJ Pais avec des contributeurs ; le projet se dit « forkable » plutôt que meilleure application de dictée.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s’appuie sur [handy.computer](https://handy.computer), sa politique de confidentialité et le dépôt GitHub, consultés le 24 octobre 2026. PromptQuorum n’a ni installé ni chronométré l’application ; la précision et la vitesse ne sont donc pas évaluées.',
          },
        ],
      },
      overview: {
        id: 'what-is-handy',
        title: 'Qu’est-ce que Handy ?',
        content: [
          '**Handy est une application de bureau multiplateforme de reconnaissance vocale qui enregistre tant que vous maintenez un raccourci configurable, transcrit l’audio en local et colle le résultat dans l’application au premier plan.** Le projet se décrit comme gratuit, open source, privé et simple : « un outil, une tâche ». Le code est sous licence MIT et le dépôt a été créé en février 2025.',
          '**La page « About » indique que Handy ne cherche pas à être la meilleure application de reconnaissance vocale mais « la plus forkable »,** et invite les personnes connaissant Rust à contribuer. C’est un programme à télécharger, pas un service hébergé.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Handy se télécharge sur macOS, Windows et Linux ; aucune version iOS, Android ou web n’est listée.**',
        ],
        columns: ['Option', 'Comment l’obtenir'],
        rows: [
          {
            Option: 'macOS',
            'Comment l’obtenir': '.dmg (Apple silicon, Intel) : [handy.computer](https://handy.computer)',
          },
          {
            Option: 'Windows',
            'Comment l’obtenir': '.exe, .msi (x64, ARM64) : [handy.computer](https://handy.computer)',
          },
          {
            Option: 'Linux',
            'Comment l’obtenir': '.AppImage, .deb, .rpm (x86_64, ARM64) : [handy.computer](https://handy.computer)',
          },
          {
            Option: 'Site web',
            'Comment l’obtenir': '[handy.computer](https://handy.computer)',
          },
          {
            Option: 'Politique de confidentialité',
            'Comment l’obtenir': '[handy.computer/privacy](https://handy.computer/privacy)',
          },
          {
            Option: 'Code source',
            'Comment l’obtenir': '[github.com/cjpais/Handy](https://github.com/cjpais/Handy), licence MIT',
          },
        ],
        note: 'Version testée : 0.9.8, publiée le 3 octobre 2026 selon la [page Releases de GitHub](https://github.com/cjpais/Handy/releases), qui liste aussi tous les installeurs. Le bouton principal du site propose la version Apple silicon pour Mac. Des paquets Homebrew (`brew install --cask handy`) et winget (`winget install cjpais.Handy`) existent mais ne sont pas maintenus par les développeurs ; sous Debian ou Ubuntu, installez le .deb avec `sudo apt install ./Handy_*.deb`. L’application est gratuite.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**Le site ne donne aucune version minimale du système ; les besoins matériels dépendent du modèle vocal choisi.**',
        ],
        columns: ['Élément', 'Ce que disent les sources'],
        rows: [
          {
            'Élément': 'Système d’exploitation',
            'Ce que disent les sources': 'Le site ne fixe pas de minimum ; la configuration de compilation du projet fixe macOS 10.15 comme minimum ; des téléchargements existent pour Windows x64 et ARM64 et Linux x86_64 et ARM64',
          },
          {
            'Élément': 'Modèles vocaux',
            'Ce que disent les sources': 'Téléchargés dans l’application : Whisper Small 487 Mo, Medium 492 Mo, Turbo 1600 Mo, Large 1100 Mo et un modèle Parakeet de 731 Mo, d’après la documentation du projet',
          },
          {
            'Élément': 'Matériel',
            'Ce que disent les sources': 'Les modèles Whisper utilisent l’accélération GPU lorsqu’elle est disponible ; Parakeet est décrit comme optimisé pour le CPU ; aucune valeur de RAM n’est donnée',
          },
          {
            'Élément': 'Autorisations',
            'Ce que disent les sources': 'Accès au micro et à l’accessibilité, demandé au premier lancement',
          },
          {
            'Élément': 'Compléments Linux',
            'Ce que disent les sources': 'xdotool (X11), wtype ou dotool (Wayland) pour saisir le texte ; libgtk-layer-shell à l’exécution',
          },
          {
            'Élément': 'Internet',
            'Ce que disent les sources': 'Nécessaire pour télécharger les modèles et, si activé, vérifier les mises à jour ; les fichiers de modèle peuvent aussi être copiés à la main',
          },
        ],
        note: 'Les tailles de modèles sont celles du guide d’installation manuelle du projet ; la liste dans l’application peut différer.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Les étapes suivent le README du projet ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Installer Handy',
            whyItMatters: 'Téléchargez l’installeur pour votre système depuis le site ou la page Releases, puis installez-le.',
          },
          {
            title: 'Accorder les autorisations',
            whyItMatters: 'Lancez Handy et autorisez l’accès au micro et à l’accessibilité lorsque le système le demande.',
          },
          {
            title: 'Télécharger un modèle',
            whyItMatters: 'Ouvrez Réglages, puis Modèles, et téléchargez un modèle Whisper ou Parakeet ; c’est l’étape principale qui exige internet.',
          },
          {
            title: 'Dicter',
            whyItMatters: 'Cliquez dans n’importe quel champ de texte, maintenez le raccourci, parlez puis relâchez ; Handy colle la transcription. L’appui-parole peut être désactivé pour que le même raccourci bascule l’enregistrement.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Tout ce qui suit provient du site, de la politique de confidentialité ou du README ; rien n’a été testé de façon indépendante.**',
        ],
        items: [
          '**Appui-parole ou bascule.** Le raccourci est configurable ; maintenir pour enregistrer est le réglage par défaut et un mode appuyer pour démarrer, appuyer pour arrêter existe.',
          '**Modèles locaux.** Whisper en quatre tailles et Parakeet V3, que le README décrit comme optimisé pour le CPU avec détection automatique de la langue ; les fichiers Whisper GGML personnalisés placés dans le dossier des modèles apparaissent sous « Custom Models ».',
          '**Filtrage par activité vocale.** Silero VAD supprime le silence avant la transcription.',
          '**Mots personnalisés et historique.** Les réglages comprennent une liste de mots personnalisés, des prompts personnalisés et un historique des transcriptions qui conserve les enregistrements.',
          '**Post-traitement facultatif.** Un second passage peut nettoyer la transcription avec un modèle d’IA que vous configurez, activé avec `handy --toggle-post-process` ; il reste désactivé tant que vous ne le configurez pas.',
        ],
        note: 'Sous Linux, la superposition d’enregistrement est désactivée par défaut, car certains compositeurs la traitent comme la fenêtre active, ce qui peut bloquer le collage.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**La politique de confidentialité, en vigueur depuis le 18 septembre 2026, indique que Handy ne requiert aucun compte, ne contient ni publicité, ni analyse comportementale, ni télémétrie de suivi, et n’envoie ni l’audio du micro ni les transcriptions aux mainteneurs lors d’une transcription ordinaire.** Enregistrements, transcriptions, historique, réglages, mots personnalisés et journaux restent sur votre appareil ; par défaut, Handy conserve un nombre limité d’entrées récentes avec leur audio, et vous pouvez modifier la durée de conservation ou fixer la limite de l’historique à zéro. Les versions officielles masquent le texte des transcriptions dans les journaux.',
          'L’application utilise le réseau dans trois cas : vérification des mises à jour auprès de GitHub Releases (activée par défaut, désactivable), téléchargement de modèles depuis Hugging Face ou, à défaut, depuis [blob.handy.computer](https://blob.handy.computer) via Cloudflare, et post-traitement facultatif. Si vous configurez un fournisseur cloud pour le post-traitement, la transcription, le prompt et votre identifiant vont directement de votre ordinateur à ce fournisseur, qui peut être OpenAI, Anthropic, OpenRouter, Groq, Cerebras, Z.AI ou AWS Bedrock selon la politique ; un point d’accès local ou sur l’appareil l’évite.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations des mainteneurs, pas des résultats d’audit. Le code est public sous licence MIT, mais PromptQuorum ne l’a pas lu ni inspecté le trafic réseau de l’application.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle s’adresse',
        items: [
          '**Rédacteurs et développeurs** qui veulent dicter dans des éditeurs, des fenêtres de chat et des terminaux sans service cloud ni abonnement.',
          '**Utilisateurs d’outils d’accessibilité et bricoleurs** qui veulent une base de code petite et ouverte qu’ils peuvent forker ou scripter.',
          '**Utilisateurs soucieux de leur vie privée** qui acceptent un téléchargement de modèle et veulent garder les transcriptions sur leur machine.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Précision et vitesse.** PromptQuorum n’a mesuré ni taux d’erreur de mots, ni latence, ni couverture linguistique ; le nombre de langues prises en charge ne figure pas dans les sources lues.',
          '**Performances selon le matériel.** Les temps d’exécution sur des machines sans GPU, de vieux Mac et différents GPU n’ont pas été testés, et aucune exigence de RAM n’est publiée.',
          '**Limites indiquées par le projet lui-même.** Le README prévient qu’un micro de casque Bluetooth sous macOS peut dégrader la qualité de lecture, que les raccourcis avec fn et Globe ne fonctionnent que sur les claviers Apple, et que la prise en charge de Wayland sous Linux est limitée.',
          '**Signature des installeurs.** Nous n’avons pas vérifié si les installeurs macOS et Windows sont notarisés ou signés avec un certificat de développeur.',
          '**Statut antérieur à la 1.0.** La version est la 0.9.8, et le README indique que le projet est activement développé et comporte des problèmes connus.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            Application: '[MacWhisper](/fr/power-local-llm/macwhisper-review)',
            Plateformes: 'macOS',
            'Prix / licence': 'Freemium / Propriétaire',
            'Différence clé': 'Application réservée au Mac, en achat unique, pour la transcription locale avec Whisper et Parakeet ; code fermé',
          },
          {
            Application: '[TranscriptionSuite](/fr/power-local-llm/transcriptionsuite-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuit / GPL-3.0',
            'Différence clé': 'Ajoute transcription en direct, diarisation des locuteurs et carnet audio consultable ; le moteur tourne dans Docker sous Windows et Linux',
          },
          {
            Application: '[AquaVoice](/fr/power-local-llm/aquavoice-review)',
            Plateformes: 'macOS, Windows, iOS, Android',
            'Prix / licence': 'Freemium / Propriétaire',
            'Différence clé': 'Service de dictée cloud qui saisit dans l’application active, donc pas une option hors ligne',
          },
        ],
        note: 'Ce sont des applications de la même catégorie du répertoire PromptQuorum ; vérifiez le prix, la licence et les plateformes actuels sur la page de chacune.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Handy peut-il fonctionner sur un ordinateur hors ligne ?',
            a: 'Oui, une fois les modèles en place : le projet documente la copie manuelle des fichiers de modèle dans le dossier des modèles de l’application, et Handy repère aussi les modèles déjà présents dans le cache Hugging Face partagé. Les fichiers .bin Whisper GGML personnalisés placés là apparaissent sous « Custom Models ».',
          },
          {
            q: 'Quel modèle choisir ?',
            a: 'Le README décrit les modèles Whisper comme accélérés par GPU et Parakeet comme optimisé pour le CPU avec détection automatique de la langue, et le guide d’installation manuelle indique un fichier Parakeet Unified EN 0.6B comme recommandé ; les sources ne fournissent aucun benchmark entre eux.',
          },
          {
            q: 'Handy fonctionne-t-il sous Wayland ?',
            a: 'La prise en charge est limitée : selon le README, la saisie du texte exige wtype ou dotool, les raccourcis globaux doivent être définis dans votre environnement de bureau pour exécuter `handy --toggle-transcription`, et Ubuntu 26.04 nécessite ydotool à la place de wtype.',
          },
          {
            q: 'Puis-je piloter Handy depuis des scripts ou Raycast ?',
            a: 'Oui : des options comme --toggle-transcription, --toggle-post-process et --cancel pilotent une instance en cours, et le README renvoie vers une extension Raycast d’un développeur tiers qui démarre et arrête l’enregistrement.',
          },
          {
            q: 'Les versions de Handy sont-elles signées ?',
            a: 'Le README indique que les artefacts de version utilisent le format de signature de mise à jour de Tauri, la clé publique étant stockée dans le tauri.conf.json du dépôt, et la page Releases liste un fichier .sig à côté de chaque installeur.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Handy est un moyen léger, activement mis à jour, gratuit et open source de dicter dans n’importe quelle application sous Windows, macOS ou Linux, avec une reconnaissance vocale qui, d’après le projet, s’exécute sur votre propre ordinateur. En revanche, il reste en dessous de la version 1.0, le projet signale lui-même des limites avec le Bluetooth sous macOS et Wayland sous Linux, et sa précision comme sa vitesse n’ont pas pu être vérifiées ici. Il convient à ceux qui veulent une dictée par appui-parole sans compte ni abonnement et peuvent l’essayer sur leur matériel ; qui exige une précision démontrée, une expérience Wayland soignée ou un support éditeur devrait d’abord le tester.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site web de Handy](https://handy.computer) — description, bouton de téléchargement et sponsors, consulté le 24 octobre 2026.',
          '[Page About de Handy](https://handy.computer/about) — objectifs du projet et fonctionnement, consultée le 24 octobre 2026.',
          '[Politique de confidentialité de Handy](https://handy.computer/privacy) — traitement des données, usage du réseau et fournisseurs de post-traitement, en vigueur depuis le 18 septembre 2026.',
          '[Handy sur GitHub](https://github.com/cjpais/Handy) — README, licence MIT, notes d’installation et problèmes connus, consulté le 24 octobre 2026.',
          '[Versions de Handy](https://github.com/cjpais/Handy/releases) — version 0.9.8 et fichiers d’installation, consulté le 24 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de MacWhisper](/fr/power-local-llm/macwhisper-review) — une application Mac de transcription locale avec Whisper et Parakeet.',
          '[Test de TranscriptionSuite](/fr/power-local-llm/transcriptionsuite-review) — reconnaissance vocale locale gratuite avec étiquettes de locuteurs et transcription en direct.',
          '[Test de Whisper.cpp](/fr/power-local-llm/whisper-cpp-review) — le portage C++ de Whisper sur lequel reposent de nombreux outils de dictée locaux.',
          '[Outils vocaux et audio comparés](/fr/power-local-llm/local-llm-voice-audio-compared) — la comparaison de catégorie à laquelle appartient ce test.',
          '[Répertoire des logiciels de LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
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
    heroImage: '/images/handy-review-hero-ja.webp',
    title: 'Handyレビュー：無料のオフライン音声入力アプリ',
    seoTitle: 'Handyレビュー：無料のオフライン音声入力デスクトップアプリ',
    intro: 'Handyは、[CJ Pais](https://github.com/cjpais)氏とコントリビューターが開発する無料のオープンソースのデスクトップアプリです。ショートカットを押しながら話して離すと、文字起こしされたテキストが作業中の入力欄に貼り付けられます。プロジェクトによると、音声認識は自分のコンピューター上で動作し、モデルをダウンロードすれば完全にオフラインで使えます。このレビューは公式サイト、プライバシーポリシー、GitHubリポジトリ（2026年10月24日確認）に基づいており、PromptQuorumは実機での検証を行っていません。',
    metaDescription: 'Handyのレビュー。音声を自分のPC上でテキスト化してどこにでも貼り付けられる、MITライセンスの無料デスクトップアプリ。Windows・macOS・Linux対応。未検証。',
    twitterDescription: 'Handyレビュー：Windows、macOS、Linux対応の無料オフライン音声入力。モデル、プライバシー、インストーラーについて情報源が確認していること、していないこと。',
    audience: '自分のコンピューターでプッシュトゥトーク式の音声入力を使いたい書き手、開発者、アクセシビリティ利用者で、情報源が確認していること、主張にとどまること、費用を知りたい方。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Handy レビュー',
    targetKeywords: [
      'handy レビュー',
      'handy 音声認識',
      'オフライン 音声入力 アプリ',
      'オープンソース 音声認識',
      'プッシュトゥトーク 音声入力 windows mac linux',
      'whisper 音声入力 アプリ',
      'handy.computer',
    ],
    current_models_mentioned: ['Whisper', 'Parakeet'],
    current_hardware_mentioned: ['Apple silicon', 'GPU'],
    leadAnswerBlock: '**Handy（バージョン0.9.8）は、音声を自分のコンピューター上でテキストに変換し、入力中のテキスト欄に貼り付ける、MITライセンスの無料デスクトップアプリです。** Windows、macOS、Linuxで動作し、モデルを一度ダウンロードする必要があります。ここでの記述はすべて、開発元の公式サイト、プライバシーポリシー、GitHubリポジトリに基づいています。',
    quickAnswerTop: {
      ja: {
        question: 'Handyは本当にオフラインで動作しますか？',
        answer: 'プロジェクトによると、はい。音声モデルをダウンロードした後は、インターネットに接続せずにコンピューター上で文字起こしされます。プライバシーポリシーによれば、通常の文字起こしで音声やテキストがメンテナーに送られることはなく、ネットワークはアップデート確認、モデルのダウンロード、任意の後処理に使われます。',
        bullets: [
          'ショートカットを押している間だけ録音して離すと貼り付け、または一度押して開始し、もう一度押して停止できます。',
          '文字起こしの前に、Silero製の音声区間検出で無音部分を除去します。',
          '任意の後処理で、設定したAIモデルを使ってテキストを整えられます。',
          'コマンドラインのフラグにより、スクリプトやLinuxデスクトップから録音を操作できます。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'クイックアンサー',
        anchor: 'quick-answer',
      },
      {
        label: 'Handyとは',
        anchor: 'what-is-handy',
      },
      {
        label: '入手方法',
        anchor: 'get-it',
      },
      {
        label: '動作要件',
        anchor: 'requirements',
      },
      {
        label: '始め方',
        anchor: 'getting-started',
      },
      {
        label: '情報源で確認できた機能',
        anchor: 'key-features',
      },
      {
        label: 'データの流れとプライバシー',
        anchor: 'privacy',
      },
      {
        label: '向いている人',
        anchor: 'who-should-use',
      },
      {
        label: '確認できなかった点',
        anchor: 'who-should-not-use',
      },
      {
        label: '競合と代替ツール',
        anchor: 'vs-alternatives',
      },
      {
        label: 'よくある質問',
        anchor: 'faq',
      },
      {
        label: '総評',
        anchor: 'verdict',
      },
      {
        label: '情報源',
        anchor: 'sources',
      },
      {
        label: '関連記事',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Handyは、ショートカットを押すと音声を録音し、ローカルの音声モデルで文字起こしして、操作中のアプリにテキストを貼り付けるオープンソースのデスクトップアプリです。',
          },
          {
            type: 'plain-terms',
            text: 'キーの組み合わせを押して一文話し、離すだけで、カーソルの位置に言葉が表示されます。プロジェクトによれば、モデルがディスクにあればアカウントもインターネット接続も不要です。',
          },
        ],
        items: [
          'メンテナンス：最新リリースは2026年10月3日、メインブランチの最終更新は2026年10月21日で、更新停滞の警告は該当しません。',
          '費用：有料プランはなく、プロジェクトは寄付を募りスポンサーを掲載しています。',
          'モデル：Whisper（Small、Medium、Turbo、Large）とParakeetを一度ダウンロードしてローカルで実行します。',
          'インストーラー：GitHubのReleasesページに.dmg、.exe、.msi、.AppImage、.deb、.rpmがあります。',
          '開発元：CJ Pais氏とコントリビューター。最高の音声入力アプリではなく「フォークしやすい」ことを掲げています。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは[handy.computer](https://handy.computer)、そのプライバシーポリシー、GitHubリポジトリ（2026年10月24日確認）に基づいています。PromptQuorumはアプリのインストールや計測を行っていないため、精度と速度は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-handy',
        title: 'Handyとは',
        content: [
          '**Handyは、設定可能なショートカットを押している間に録音し、音声をローカルで文字起こしして、フォーカスのあるアプリに結果を貼り付けるクロスプラットフォームの音声入力デスクトップアプリです。** プロジェクト自身は「無料・オープンソース・プライベート・シンプル」で「一つのツールに一つの役割」と説明しています。コードはMITライセンスで、リポジトリは2025年2月に作成されました。',
          '**Aboutページでは、Handyは最高の音声認識アプリを目指すのではなく「最もフォークしやすいもの」を目指すとされており、** Rustに詳しい貢献者を歓迎しています。ホスティング型のサービスではなく、ダウンロードして使うプログラムです。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**HandyはmacOS、Windows、Linux向けのデスクトップ版をダウンロードして使います。iOS、Android、Web版は掲載されていません。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          {
            '項目': 'macOS',
            '入手方法': '.dmg（Apple silicon、Intel）：[handy.computer](https://handy.computer)',
          },
          {
            '項目': 'Windows',
            '入手方法': '.exe、.msi（x64、ARM64）：[handy.computer](https://handy.computer)',
          },
          {
            '項目': 'Linux',
            '入手方法': '.AppImage、.deb、.rpm（x86_64、ARM64）：[handy.computer](https://handy.computer)',
          },
          {
            '項目': '公式サイト',
            '入手方法': '[handy.computer](https://handy.computer)',
          },
          {
            '項目': 'プライバシーポリシー',
            '入手方法': '[handy.computer/privacy](https://handy.computer/privacy)',
          },
          {
            '項目': 'ソースコード',
            '入手方法': '[github.com/cjpais/Handy](https://github.com/cjpais/Handy)（MITライセンス）',
          },
        ],
        note: '確認したバージョン：0.9.8（[GitHubのReleasesページ](https://github.com/cjpais/Handy/releases)によれば2026年10月3日公開で、全インストーラーもここに掲載）。公式サイトのメインボタンはMac向けにApple silicon版を案内しています。Homebrew（`brew install --cask handy`）とwinget（`winget install cjpais.Handy`）のパッケージもありますが、開発者による保守ではありません。DebianやUbuntuでは`sudo apt install ./Handy_*.deb`で.debを導入します。アプリは無料です。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: ['**公式サイトにOSの最低バージョンの記載はなく、必要なハードウェアは選ぶ音声モデルによって変わります。**'],
        columns: ['項目', '情報源の記載'],
        rows: [
          {
            '項目': 'OS',
            '情報源の記載': 'サイトに最低要件の記載なし。プロジェクトのビルド設定ではmacOS 10.15が最低。Windowsはx64とARM64、Linuxはx86_64とARM64向けのダウンロードあり',
          },
          {
            '項目': '音声モデル',
            '情報源の記載': 'アプリ内でダウンロード：Whisper Small 487 MB、Medium 492 MB、Turbo 1600 MB、Large 1100 MB、およびParakeet 731 MB（プロジェクトのドキュメントによる）',
          },
          {
            '項目': 'ハードウェア',
            '情報源の記載': 'WhisperモデルはGPUが使えればGPU高速化を利用。ParakeetはCPU最適化と説明。RAMの数値は示されていません',
          },
          {
            '項目': '権限',
            '情報源の記載': 'マイクとアクセシビリティへのアクセス。初回起動時に要求',
          },
          {
            '項目': 'Linuxの追加要件',
            '情報源の記載': 'テキスト入力にxdotool（X11）、wtypeまたはdotool（Wayland）。実行時にlibgtk-layer-shell',
          },
          {
            '項目': 'インターネット',
            '情報源の記載': 'モデルのダウンロードと、有効時のアップデート確認に必要。モデルファイルは手動で配置することも可能',
          },
        ],
        note: 'モデルのサイズはプロジェクトの手動インストールガイドに記載されたファイルサイズで、アプリ内の一覧と異なる場合があります。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: ['**手順はプロジェクトのREADMEに沿ったもので、PromptQuorumは実行していません。**'],
        numberedItems: [
          {
            title: 'Handyをインストールする',
            whyItMatters: '公式サイトまたはReleasesページからお使いのOS用インストーラーをダウンロードして導入します。',
          },
          {
            title: '権限を許可する',
            whyItMatters: 'Handyを起動し、システムから求められたらマイクとアクセシビリティへのアクセスを許可します。',
          },
          {
            title: 'モデルをダウンロードする',
            whyItMatters: '設定の「モデル」を開き、WhisperまたはParakeetのモデルをダウンロードします。インターネットが主に必要なのはこの手順です。',
          },
          {
            title: '話して入力する',
            whyItMatters: '任意の入力欄をクリックし、ショートカットを押しながら話して離すと、Handyが文字起こしを貼り付けます。プッシュトゥトークをオフにすると、同じショートカットで録音の開始と停止を切り替えます。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: ['**以下はすべて公式サイト、プライバシーポリシー、READMEに基づくもので、独自の検証は行っていません。**'],
        items: [
          '**プッシュトゥトークまたは切り替え。** ショートカットは変更可能で、押している間だけ録音するのが初期設定です。押して開始、もう一度押して停止するモードもあります。',
          '**ローカルモデル。** 4サイズのWhisperとParakeet V3。READMEはParakeetを、言語を自動検出するCPU最適化モデルと説明しています。モデルフォルダに置いた独自のWhisper GGMLファイルは「Custom Models」に表示されます。',
          '**音声区間によるフィルタリング。** Silero VADが文字起こしの前に無音を取り除きます。',
          '**カスタム単語と履歴。** 設定にはカスタム単語リスト、カスタムプロンプト、録音を保持する文字起こし履歴があります。',
          '**任意の後処理。** 設定したAIモデルで文字起こしを整える二次処理で、`handy --toggle-post-process`で切り替えます。設定しない限りオフです。',
        ],
        note: 'Linuxでは、一部のコンポジターが録音オーバーレイをアクティブウィンドウとして扱い貼り付けを妨げることがあるため、初期状態ではオフです。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**2026年9月18日施行のプライバシーポリシーによると、Handyはアカウント不要で、広告、行動分析、追跡用テレメトリーを含まず、通常の文字起こしでマイク音声や文字起こし結果をメンテナーに送りません。** 録音、文字起こし、履歴、設定、カスタム単語、ログは端末内に保存されます。初期設定では直近の一定数の項目を音声付きで保持し、保持期間の変更や履歴の上限をゼロにすることもできます。公式リリース版はログから文字起こしの本文を伏せます。',
          'アプリがネットワークを使うのは3つの場合です。GitHub Releasesでのアップデート確認（初期設定ではオン、オフにできます）、Hugging Faceからの、代替として[blob.handy.computer](https://blob.handy.computer)（Cloudflare経由）からのモデルのダウンロード、そして任意の後処理です。後処理にクラウドのプロバイダーを設定すると、文字起こし、プロンプト、認証情報があなたのコンピューターからそのプロバイダーへ直接送られます。ポリシーによればOpenAI、Anthropic、OpenRouter、Groq、Cerebras、Z.AI、AWS Bedrockなどが該当し得ます。ローカルまたはオンデバイスのエンドポイントなら避けられます。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらはメンテナーの申告であり、監査結果ではありません。コードはMITライセンスで公開されていますが、PromptQuorumはコードを読んでおらず、アプリの通信も調べていません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**書き手や開発者**：クラウドサービスやサブスクなしで、エディタ、チャット欄、ターミナルに音声入力したい方。',
          '**アクセシビリティ利用者や自作派**：フォークやスクリプト連携ができる小さなオープンな実装を求める方。',
          '**プライバシー重視の方**：モデルのダウンロードを受け入れ、文字起こしを自分のマシンに留めたい方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**精度と速度。** 単語誤り率、遅延、対応言語の範囲は測定しておらず、対応言語数は参照した情報源に記載がありません。',
          '**ハードウェアごとの性能。** CPUのみのマシン、古いMac、各種GPUでの動作時間は検証しておらず、RAM要件も公開されていません。',
          '**プロジェクト自身が挙げる制約。** READMEは、macOSでBluetoothヘッドセットのマイクを使うと再生品質が下がることがあること、fnやGlobeを含むショートカットはAppleのキーボードでのみ動作すること、LinuxのWaylandへの対応が限定的であることを警告しています。',
          '**インストーラーの署名。** macOSとWindowsのインストーラーが公証済みか、開発者証明書で署名されているかは確認していません。',
          '**1.0未満であること。** バージョンは0.9.8で、READMEは積極的に開発中で既知の問題があるとしています。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[MacWhisper](/ja/power-local-llm/macwhisper-review)',
            '対応プラットフォーム': 'macOS',
            '価格／ライセンス': 'フリーミアム／プロプライエタリ',
            '主な違い': 'WhisperとParakeetによるローカル文字起こしを買い切りで提供するMac専用アプリ。クローズドソース',
          },
          {
            'アプリ': '[TranscriptionSuite](/ja/power-local-llm/transcriptionsuite-review)',
            '対応プラットフォーム': 'macOS、Windows、Linux',
            '価格／ライセンス': '無料／GPL-3.0',
            '主な違い': 'ライブ文字起こし、話者分離、検索可能なオーディオノートを備え、WindowsとLinuxではエンジンがDockerで動作',
          },
          {
            'アプリ': '[AquaVoice](/ja/power-local-llm/aquavoice-review)',
            '対応プラットフォーム': 'macOS、Windows、iOS、Android',
            '価格／ライセンス': 'フリーミアム／プロプライエタリ',
            '主な違い': 'アクティブなアプリに入力するクラウド型の音声入力サービスで、オフラインの選択肢ではありません',
          },
        ],
        note: 'PromptQuorumのディレクトリにある同カテゴリのアプリです。最新の価格、ライセンス、対応プラットフォームは各アプリのページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'インターネットに接続していないコンピューターでもHandyは動きますか？',
            a: 'モデルが配置されていれば動きます。プロジェクトはモデルファイルをアプリのモデルフォルダに手動でコピーする方法を文書化しており、共有のHugging Faceキャッシュにあるモデルも自動で認識します。そこに置いた独自のWhisper GGMLの.binファイルは「Custom Models」に表示されます。',
          },
          {
            q: 'どのモデルを選べばよいですか？',
            a: 'READMEはWhisperをGPU高速化対応、ParakeetをCPU最適化かつ言語自動検出と説明し、手動インストールガイドではParakeet Unified EN 0.6Bのファイルが推奨とされています。両者を比較したベンチマークは情報源にありません。',
          },
          {
            q: 'HandyはWaylandで動作しますか？',
            a: '対応は限定的です。READMEによれば、テキスト入力にはwtypeまたはdotoolが必要で、グローバルショートカットはデスクトップ環境側で`handy --toggle-transcription`を実行するよう設定する必要があり、Ubuntu 26.04ではwtypeの代わりにydotoolが必要です。',
          },
          {
            q: 'スクリプトやRaycastからHandyを操作できますか？',
            a: 'できます。--toggle-transcription、--toggle-post-process、--cancelなどのフラグで実行中のインスタンスを操作でき、READMEには第三者開発者による、録音を開始・停止するRaycast拡張機能へのリンクがあります。',
          },
          {
            q: 'Handyのリリースは署名されていますか？',
            a: 'READMEによれば、リリース成果物はTauriのアップデーター署名形式で署名され、公開鍵はリポジトリのtauri.conf.jsonに保存されています。Releasesページには各インストーラーの横に.sigファイルが並んでいます。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'Handyは、Windows、macOS、Linuxのどのアプリにも音声入力できる、小さく、活発に更新される無料のオープンソースの手段で、プロジェクトによれば音声認識は自分のコンピューター上で動作します。一方で、まだバージョン1.0未満であり、プロジェクト自身がmacOSのBluetoothやLinuxのWaylandに関する制約を挙げており、精度と速度はここでは検証できませんでした。アカウントもサブスクもなしでプッシュトゥトーク式の音声入力を使いたく、自分のハードウェアで試せる方に向いています。実証された精度、洗練されたWayland対応、ベンダーのサポートが必要な方は、まず試してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Handy公式サイト](https://handy.computer) — 説明、ダウンロードボタン、スポンサー。2026年10月24日確認。',
          '[HandyのAboutページ](https://handy.computer/about) — プロジェクトの目標と仕組み。2026年10月24日確認。',
          '[Handyのプライバシーポリシー](https://handy.computer/privacy) — データの扱い、ネットワーク利用、後処理プロバイダー。2026年9月18日施行。',
          '[GitHubのHandy](https://github.com/cjpais/Handy) — README、MITライセンス、インストール手順、既知の問題。2026年10月24日確認。',
          '[Handyのリリース](https://github.com/cjpais/Handy/releases) — バージョン0.9.8とインストーラーファイル。2026年10月24日確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[MacWhisperレビュー](/ja/power-local-llm/macwhisper-review) — WhisperとParakeetでローカル文字起こしを行うMacアプリ。',
          '[TranscriptionSuiteレビュー](/ja/power-local-llm/transcriptionsuite-review) — 話者ラベルとライブ文字起こしを備えた無料のローカル音声認識。',
          '[Whisper.cppレビュー](/ja/power-local-llm/whisper-cpp-review) — 多くのローカル音声入力ツールの基盤となるWhisperのC++移植版。',
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
    heroImage: '/images/handy-review-hero-pt.webp',
    title: 'Análise do Handy: app gratuito de ditado offline',
    seoTitle: 'Análise do Handy: app gratuito de ditado offline',
    intro: 'O Handy é um app de desktop gratuito e de código aberto de [CJ Pais](https://github.com/cjpais) e colaboradores: você mantém um atalho pressionado, fala, solta, e o texto transcrito é colado no campo de texto que você está usando. O projeto afirma que o reconhecimento de voz roda no seu próprio computador e funciona totalmente offline depois que um modelo é baixado. Esta análise se baseia no site, na política de privacidade e no repositório do GitHub, consultados em 24 de outubro de 2026; a PromptQuorum não testou o app na prática.',
    metaDescription: 'Análise do Handy: app de desktop gratuito (MIT) que converte fala em texto no seu computador e cola onde quiser. Windows, macOS e Linux; não testado.',
    twitterDescription: 'Análise do Handy: ditado offline gratuito com aperte para falar no Windows, macOS e Linux. O que as fontes confirmam sobre modelos, privacidade e instaladores e o que não confirmam.',
    audience: 'Redatores, desenvolvedores e usuários de acessibilidade que querem ditado com aperte para falar no próprio computador e precisam saber o que as fontes confirmam, o que é só afirmação e quanto custa.',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Handy',
    targetKeywords: [
      'análise handy',
      'handy fala para texto',
      'app de ditado offline',
      'reconhecimento de voz de código aberto',
      'ditado aperte para falar windows mac linux',
      'app de ditado whisper',
      'handy.computer',
    ],
    current_models_mentioned: ['Whisper', 'Parakeet'],
    current_hardware_mentioned: ['Apple silicon', 'GPU'],
    leadAnswerBlock: '**O Handy (versão 0.9.8) é um app de desktop gratuito com licença MIT que converte sua fala em texto no seu próprio computador e cola no campo de texto em que você está digitando.** Ele roda no Windows, macOS e Linux, exige um download único de modelo, e toda afirmação aqui vem do site do autor, da política de privacidade e do repositório do GitHub.',
    quickAnswerTop: {
      pt: {
        question: 'O Handy realmente funciona offline?',
        answer: 'Segundo o projeto, sim: depois que o modelo de voz é baixado, o áudio é transcrito no seu computador sem conexão com a internet. A política de privacidade acrescenta que a transcrição comum não envia áudio nem texto aos mantenedores; a rede é usada para verificar atualizações, baixar modelos e o pós-processamento opcional.',
        bullets: [
          'Mantenha um atalho pressionado para gravar e solte para colar, ou toque uma vez para iniciar e outra para parar.',
          'O silêncio é filtrado por um detector de atividade de voz Silero antes da transcrição.',
          'Uma etapa opcional de pós-processamento pode limpar o texto com um modelo de IA que você configura.',
          'Opções de linha de comando permitem acionar a gravação a partir de scripts e desktops Linux.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Resposta rápida',
        anchor: 'quick-answer',
      },
      {
        label: 'O que é o Handy?',
        anchor: 'what-is-handy',
      },
      {
        label: 'Onde obter',
        anchor: 'get-it',
      },
      {
        label: 'Requisitos',
        anchor: 'requirements',
      },
      {
        label: 'Como começar',
        anchor: 'getting-started',
      },
      {
        label: 'Recursos confirmados pelas fontes',
        anchor: 'key-features',
      },
      {
        label: 'Fluxo de dados e privacidade',
        anchor: 'privacy',
      },
      {
        label: 'Para quem serve',
        anchor: 'who-should-use',
      },
      {
        label: 'O que não conseguimos verificar',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Concorrentes e alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Perguntas frequentes',
        anchor: 'faq',
      },
      {
        label: 'Veredicto',
        anchor: 'verdict',
      },
      {
        label: 'Fontes',
        anchor: 'sources',
      },
      {
        label: 'Leituras relacionadas',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Handy é um app de desktop de código aberto que grava sua voz quando você aperta um atalho, transcreve com um modelo de voz local e cola o texto no app ativo.',
          },
          {
            type: 'plain-terms',
            text: 'Você aperta uma combinação de teclas, diz uma frase, solta, e as palavras aparecem onde está o cursor; segundo o projeto, não são necessários conta nem conexão com a internet depois que o modelo está no seu disco.',
          },
        ],
        items: [
          'Manutenção: a versão mais recente foi publicada em 3 de outubro de 2026 e o ramo principal mudou pela última vez em 21 de outubro de 2026, então não se aplica o aviso de projeto abandonado.',
          'Custo: sem plano pago; o projeto pede doações e lista patrocinadores.',
          'Modelos: Whisper (Small, Medium, Turbo, Large) e Parakeet, baixados uma vez e executados localmente.',
          'Instaladores: arquivos .dmg, .exe, .msi, .AppImage, .deb e .rpm na página de Releases do GitHub.',
          'Autoria: CJ Pais com colaboradores; o projeto se define como «forkável» em vez de o melhor app de ditado.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia em [handy.computer](https://handy.computer), na política de privacidade e no repositório do GitHub, consultados em 24 de outubro de 2026. A PromptQuorum não instalou nem mediu o app, então precisão e velocidade não são avaliadas.',
          },
        ],
      },
      overview: {
        id: 'what-is-handy',
        title: 'O que é o Handy?',
        content: [
          '**O Handy é um app de desktop multiplataforma de fala para texto que grava enquanto você mantém pressionado um atalho configurável, transcreve o áudio localmente e cola o resultado no aplicativo em foco.** O projeto se descreve como gratuito, de código aberto, privado e simples: «uma ferramenta, uma tarefa». O código tem licença MIT e o repositório foi criado em fevereiro de 2025.',
          '**A página «About» diz que o Handy não tenta ser o melhor app de fala para texto, e sim «o mais forkável»,** e convida colaboradores que conheçam Rust. É um programa para baixar, não um serviço hospedado.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Handy é um download de desktop para macOS, Windows e Linux; nenhuma versão para iOS, Android ou web está listada.**',
        ],
        columns: ['Opção', 'Onde obter'],
        rows: [
          {
            'Opção': 'macOS',
            'Onde obter': '.dmg (Apple silicon, Intel): [handy.computer](https://handy.computer)',
          },
          {
            'Opção': 'Windows',
            'Onde obter': '.exe, .msi (x64, ARM64): [handy.computer](https://handy.computer)',
          },
          {
            'Opção': 'Linux',
            'Onde obter': '.AppImage, .deb, .rpm (x86_64, ARM64): [handy.computer](https://handy.computer)',
          },
          {
            'Opção': 'Site',
            'Onde obter': '[handy.computer](https://handy.computer)',
          },
          {
            'Opção': 'Política de privacidade',
            'Onde obter': '[handy.computer/privacy](https://handy.computer/privacy)',
          },
          {
            'Opção': 'Código-fonte',
            'Onde obter': '[github.com/cjpais/Handy](https://github.com/cjpais/Handy), licença MIT',
          },
        ],
        note: 'Versão analisada: 0.9.8, publicada em 3 de outubro de 2026 segundo a [página de Releases do GitHub](https://github.com/cjpais/Handy/releases), que também lista todos os instaladores. O botão principal do site oferece a versão Apple silicon para Mac. Existem pacotes do Homebrew (`brew install --cask handy`) e do winget (`winget install cjpais.Handy`), mas não são mantidos pelos desenvolvedores; no Debian ou Ubuntu, instale o .deb com `sudo apt install ./Handy_*.deb`. O app é gratuito.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**O site não informa versões mínimas do sistema; as necessidades de hardware dependem do modelo de voz escolhido.**',
        ],
        columns: ['Item', 'O que dizem as fontes'],
        rows: [
          {
            Item: 'Sistema operacional',
            'O que dizem as fontes': 'O site não indica mínimos; a configuração de build do projeto define macOS 10.15 como mínimo; há downloads para Windows x64 e ARM64 e Linux x86_64 e ARM64',
          },
          {
            Item: 'Modelos de voz',
            'O que dizem as fontes': 'Baixados dentro do app: Whisper Small 487 MB, Medium 492 MB, Turbo 1600 MB, Large 1100 MB e um modelo Parakeet de 731 MB, segundo a documentação do projeto',
          },
          {
            Item: 'Hardware',
            'O que dizem as fontes': 'Os modelos Whisper usam aceleração por GPU quando disponível; o Parakeet é descrito como otimizado para CPU; nenhum valor de RAM é informado',
          },
          {
            Item: 'Permissões',
            'O que dizem as fontes': 'Acesso ao microfone e à acessibilidade, solicitado na primeira abertura',
          },
          {
            Item: 'Extras no Linux',
            'O que dizem as fontes': 'xdotool (X11), wtype ou dotool (Wayland) para digitar texto; libgtk-layer-shell em tempo de execução',
          },
          {
            Item: 'Internet',
            'O que dizem as fontes': 'Necessária para baixar modelos e, se ativada, verificar atualizações; os arquivos de modelo também podem ser copiados manualmente',
          },
        ],
        note: 'Os tamanhos dos modelos são os do guia de instalação manual do projeto; a lista dentro do app pode diferir.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Os passos seguem o README do projeto; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Instale o Handy',
            whyItMatters: 'Baixe o instalador do seu sistema no site ou na página de Releases e instale.',
          },
          {
            title: 'Conceda as permissões',
            whyItMatters: 'Abra o Handy e permita o acesso ao microfone e à acessibilidade quando o sistema pedir.',
          },
          {
            title: 'Baixe um modelo',
            whyItMatters: 'Abra Configurações, depois Modelos, e baixe um modelo Whisper ou Parakeet; é a etapa principal que precisa de internet.',
          },
          {
            title: 'Dite',
            whyItMatters: 'Clique em qualquer campo de texto, mantenha o atalho pressionado, fale e solte; o Handy cola a transcrição. O aperte para falar pode ser desativado para que o mesmo atalho alterne a gravação.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Tudo abaixo vem do site, da política de privacidade ou do README; nada foi testado de forma independente.**',
        ],
        items: [
          '**Aperte para falar ou alternar.** O atalho é configurável; manter pressionado para gravar é o padrão e há um modo de tocar para iniciar e tocar para parar.',
          '**Modelos locais.** Whisper em quatro tamanhos e Parakeet V3, que o README descreve como otimizado para CPU com detecção automática de idioma; arquivos Whisper GGML próprios colocados na pasta de modelos aparecem em «Custom Models».',
          '**Filtragem por atividade de voz.** O Silero VAD remove o silêncio antes da transcrição.',
          '**Palavras personalizadas e histórico.** As configurações incluem uma lista de palavras personalizadas, prompts próprios e um histórico de transcrições que guarda as gravações.',
          '**Pós-processamento opcional.** Uma segunda passada pode limpar a transcrição com um modelo de IA que você configura, acionada com `handy --toggle-post-process`; fica desligada até você configurá-la.',
        ],
        note: 'No Linux, a sobreposição de gravação vem desativada por padrão porque alguns compositores a tratam como janela ativa, o que pode impedir a colagem.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**A política de privacidade, em vigor desde 18 de setembro de 2026, diz que o Handy não exige conta, não contém publicidade, análise comportamental nem telemetria de rastreamento, e não envia o áudio do microfone nem as transcrições aos mantenedores durante a transcrição comum.** Gravações, transcrições, histórico, configurações, palavras personalizadas e logs ficam no seu dispositivo; por padrão o Handy mantém um número limitado de entradas recentes com o áudio, e você pode mudar o período de retenção ou definir o limite do histórico como zero. As versões oficiais omitem o texto das transcrições nos logs.',
          'O app usa a rede em três casos: verificação de atualizações no GitHub Releases (ativada por padrão, pode ser desligada), download de modelos do Hugging Face ou, como alternativa, de [blob.handy.computer](https://blob.handy.computer) via Cloudflare, e o pós-processamento opcional. Se você configurar um provedor em nuvem para o pós-processamento, a transcrição, o prompt e sua credencial vão direto do seu computador para esse provedor, que segundo a política pode ser OpenAI, Anthropic, OpenRouter, Groq, Cerebras, Z.AI ou AWS Bedrock; um endpoint local ou no próprio dispositivo evita isso.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Essas são declarações dos mantenedores, não resultados de auditoria. O código é público sob a licença MIT, mas a PromptQuorum não o leu nem inspecionou o tráfego de rede do app.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Redatores e desenvolvedores** que querem ditar em editores, chats e terminais sem serviço em nuvem nem assinatura.',
          '**Usuários de acessibilidade e entusiastas** que querem uma base de código pequena e aberta para fazer fork ou automatizar.',
          '**Usuários atentos à privacidade** que aceitam um download de modelo e querem as transcrições na própria máquina.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Precisão e velocidade.** A PromptQuorum não mediu taxas de erro de palavras, latência nem cobertura de idiomas; o número de idiomas suportados não aparece nas fontes que lemos.',
          '**Desempenho por hardware.** Não foram testados os tempos em máquinas só com CPU, Macs antigos nem diferentes GPUs, e nenhum requisito de RAM é publicado.',
          '**Limitações que o próprio projeto lista.** O README avisa que o microfone de um fone Bluetooth no macOS pode reduzir a qualidade de reprodução, que atalhos com fn e Globe só funcionam em teclados Apple e que o suporte a Wayland no Linux é limitado.',
          '**Assinatura dos instaladores.** Não verificamos se os instaladores de macOS e Windows são notarizados ou assinados com certificado de desenvolvedor.',
          '**Status anterior à 1.0.** A versão é a 0.9.8, e o README diz que o projeto está em desenvolvimento ativo e tem problemas conhecidos.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            App: '[MacWhisper](/pt/power-local-llm/macwhisper-review)',
            Plataformas: 'macOS',
            'Preço / licença': 'Freemium / Proprietária',
            'Diferença principal': 'App só para Mac com compra única para transcrição local com Whisper e Parakeet; código fechado',
          },
          {
            App: '[TranscriptionSuite](/pt/power-local-llm/transcriptionsuite-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Grátis / GPL-3.0',
            'Diferença principal': 'Acrescenta transcrição ao vivo, diarização de falantes e um caderno de áudio pesquisável; o motor roda em Docker no Windows e no Linux',
          },
          {
            App: '[AquaVoice](/pt/power-local-llm/aquavoice-review)',
            Plataformas: 'macOS, Windows, iOS, Android',
            'Preço / licença': 'Freemium / Proprietária',
            'Diferença principal': 'Serviço de ditado em nuvem que digita no app ativo, portanto não é uma opção offline',
          },
        ],
        note: 'São apps da mesma categoria do diretório da PromptQuorum; confirme preço, licença e plataformas atuais na página de cada um.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Handy roda em um computador sem internet?',
            a: 'Sim, depois que os modelos estão no lugar: o projeto documenta como copiar arquivos de modelo manualmente para a pasta de modelos do app, e o Handy também reconhece modelos que já estejam no cache compartilhado do Hugging Face. Arquivos .bin Whisper GGML próprios colocados ali aparecem em «Custom Models».',
          },
          {
            q: 'Qual modelo devo escolher?',
            a: 'O README descreve os modelos Whisper como acelerados por GPU e o Parakeet como otimizado para CPU com detecção automática de idioma, e o guia de instalação manual marca um arquivo Parakeet Unified EN 0.6B como recomendado; as fontes não trazem benchmark entre eles.',
          },
          {
            q: 'O Handy funciona no Wayland?',
            a: 'O suporte é limitado: segundo o README, digitar texto exige wtype ou dotool, os atalhos globais precisam ser definidos no seu ambiente de desktop para executar `handy --toggle-transcription`, e o Ubuntu 26.04 precisa do ydotool em vez do wtype.',
          },
          {
            q: 'Posso controlar o Handy por scripts ou Raycast?',
            a: 'Sim: opções como --toggle-transcription, --toggle-post-process e --cancel controlam uma instância em execução, e o README indica uma extensão do Raycast feita por um desenvolvedor terceiro que inicia e interrompe a gravação.',
          },
          {
            q: 'As versões do Handy são assinadas?',
            a: 'O README diz que os artefatos de versão usam o formato de assinatura de atualização do Tauri, com a chave pública guardada no tauri.conf.json do repositório, e a página de Releases lista um arquivo .sig ao lado de cada instalador.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'O Handy é um jeito pequeno, ativamente atualizado, gratuito e de código aberto de ditar em qualquer app no Windows, macOS ou Linux, com um reconhecimento de voz que, segundo o projeto, roda no seu próprio computador. Em contrapartida, ainda está abaixo da versão 1.0, o próprio projeto lista limitações com Bluetooth no macOS e Wayland no Linux, e nada sobre precisão ou velocidade pôde ser verificado aqui. Serve para quem quer ditado com aperte para falar sem conta nem assinatura e pode testá-lo no próprio hardware; quem precisa de precisão comprovada, uma experiência polida no Wayland ou suporte do fabricante deve testar antes.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Handy](https://handy.computer) — descrição, botão de download e patrocinadores, consultado em 24 de outubro de 2026.',
          '[Página About do Handy](https://handy.computer/about) — objetivos do projeto e funcionamento, consultada em 24 de outubro de 2026.',
          '[Política de privacidade do Handy](https://handy.computer/privacy) — tratamento de dados, uso da rede e provedores de pós-processamento, em vigor desde 18 de setembro de 2026.',
          '[Handy no GitHub](https://github.com/cjpais/Handy) — README, licença MIT, notas de instalação e problemas conhecidos, consultado em 24 de outubro de 2026.',
          '[Versões do Handy](https://github.com/cjpais/Handy/releases) — versão 0.9.8 e arquivos de instalação, consultado em 24 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do MacWhisper](/pt/power-local-llm/macwhisper-review) — um app para Mac de transcrição local com Whisper e Parakeet.',
          '[Análise do TranscriptionSuite](/pt/power-local-llm/transcriptionsuite-review) — fala para texto local gratuito com rótulos de falante e transcrição ao vivo.',
          '[Análise do Whisper.cpp](/pt/power-local-llm/whisper-cpp-review) — o port em C++ do Whisper em que muitas ferramentas de ditado locais se baseiam.',
          '[Ferramentas de voz e áudio comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — a comparação de categoria a que esta análise pertence.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/handy-review-hero-ar.webp',
    title: 'مراجعة Handy: تطبيق مجاني للإملاء الصوتي دون اتصال',
    seoTitle: 'مراجعة Handy: تطبيق مجاني للإملاء الصوتي دون اتصال',
    intro: 'Handy تطبيق مكتبي مجاني ومفتوح المصدر من [CJ Pais](https://github.com/cjpais) ومساهمين: تضغط على اختصار وتتحدث ثم تترك الضغط، فيُلصق النص المفرّغ في حقل النص الذي تستخدمه. يقول المشروع إن التعرف على الكلام يعمل على جهازك ويعمل دون اتصال تمامًا بعد تنزيل نموذج. تستند هذه المراجعة إلى الموقع وسياسة الخصوصية ومستودع GitHub (اطُّلع عليها في 24 أكتوبر 2026)، ولم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription: 'مراجعة Handy: تطبيق مكتبي مجاني بترخيص MIT يحوّل الكلام إلى نص على جهازك ويلصقه في أي مكان. يعمل على Windows وmacOS وLinux؛ لم يُختبر عمليًا.',
    twitterDescription: 'مراجعة Handy: إملاء مجاني دون اتصال بالضغط للتحدث على Windows وmacOS وLinux. ما تؤكده المصادر عن النماذج والخصوصية وملفات التثبيت وما لا تؤكده.',
    audience: 'الكتّاب والمطورون ومستخدمو أدوات إتاحة الوصول الذين يريدون إملاءً بالضغط للتحدث على حاسوبهم ويحتاجون إلى معرفة ما تؤكده المصادر وما هو مجرد ادعاء وكم يكلف.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Handy',
    targetKeywords: [
      'مراجعة handy',
      'handy تحويل الكلام إلى نص',
      'تطبيق إملاء دون اتصال',
      'تعرف على الكلام مفتوح المصدر',
      'إملاء بالضغط للتحدث windows mac linux',
      'تطبيق إملاء whisper',
      'handy.computer',
    ],
    current_models_mentioned: ['Whisper', 'Parakeet'],
    current_hardware_mentioned: ['Apple silicon', 'GPU'],
    leadAnswerBlock: '**Handy (الإصدار 0.9.8) تطبيق مكتبي مجاني بترخيص MIT يحوّل كلامك إلى نص على جهازك ويلصقه في حقل النص الذي تكتب فيه.** يعمل على Windows وmacOS وLinux، ويتطلب تنزيل نموذج مرة واحدة، وكل ما يرد هنا مصدره موقع المطوّر وسياسة الخصوصية ومستودع GitHub.',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل Handy فعلًا دون اتصال بالإنترنت؟',
        answer: 'بحسب المشروع، نعم: بعد تنزيل نموذج الكلام يُفرَّغ الصوت على جهازك دون اتصال بالإنترنت. وتضيف سياسة الخصوصية أن التفريغ العادي لا يرسل صوتًا ولا نصًا إلى القائمين على المشروع؛ وتُستخدم الشبكة للتحقق من التحديثات وتنزيل النماذج والمعالجة اللاحقة الاختيارية.',
        bullets: [
          'اضغط على الاختصار مع الاستمرار للتسجيل واتركه للصق، أو اضغط مرة للبدء ومرة أخرى للإيقاف.',
          'تُحذف فترات الصمت بكاشف نشاط صوتي من Silero قبل التفريغ.',
          'يمكن لخطوة معالجة لاحقة اختيارية تنقيح النص بنموذج ذكاء اصطناعي تضبطه أنت.',
          'تتيح خيارات سطر الأوامر تشغيل التسجيل من السكربتات وسطوح مكتب Linux.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'إجابة سريعة',
        anchor: 'quick-answer',
      },
      {
        label: 'ما هو Handy؟',
        anchor: 'what-is-handy',
      },
      {
        label: 'كيف تحصل عليه',
        anchor: 'get-it',
      },
      {
        label: 'المتطلبات',
        anchor: 'requirements',
      },
      {
        label: 'كيف تبدأ',
        anchor: 'getting-started',
      },
      {
        label: 'الميزات التي أكدتها المصادر',
        anchor: 'key-features',
      },
      {
        label: 'تدفق البيانات والخصوصية',
        anchor: 'privacy',
      },
      {
        label: 'لمن يناسب',
        anchor: 'who-should-use',
      },
      {
        label: 'ما لم نتمكن من التحقق منه',
        anchor: 'who-should-not-use',
      },
      {
        label: 'المنافسون والبدائل',
        anchor: 'vs-alternatives',
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
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Handy تطبيق مكتبي مفتوح المصدر يسجّل صوتك عند الضغط على اختصار، ويفرّغه بنموذج كلام محلي، ويلصق النص في التطبيق النشط.',
          },
          {
            type: 'plain-terms',
            text: 'تضغط على مجموعة مفاتيح، وتقول جملة، وتترك الضغط، فتظهر الكلمات عند المؤشر؛ وبحسب المشروع لا حاجة إلى حساب ولا إلى اتصال بالإنترنت متى كان النموذج على قرصك.',
          },
        ],
        items: [
          'الصيانة: نُشر أحدث إصدار في 3 أكتوبر 2026 وتغيّر الفرع الرئيسي آخر مرة في 21 أكتوبر 2026، فلا ينطبق تحذير المشروع المتوقف.',
          'التكلفة: لا توجد باقة مدفوعة؛ يطلب المشروع التبرعات ويذكر رعاة.',
          'النماذج: Whisper (Small وMedium وTurbo وLarge) وParakeet، تُنزَّل مرة واحدة وتعمل محليًا.',
          'ملفات التثبيت: ملفات .dmg و.exe و.msi و.AppImage و.deb و.rpm في صفحة Releases على GitHub.',
          'المطوّر: CJ Pais مع مساهمين؛ يصف المشروع نفسه بأنه قابل للتفريع (fork) لا بأنه أفضل تطبيق إملاء.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى [handy.computer](https://handy.computer) وسياسة الخصوصية ومستودع GitHub (اطُّلع عليها في 24 أكتوبر 2026). لم تثبّت PromptQuorum التطبيق ولم تقس أداءه، لذا لا تُقيَّم الدقة والسرعة.',
          },
        ],
      },
      overview: {
        id: 'what-is-handy',
        title: 'ما هو Handy؟',
        content: [
          '**Handy تطبيق مكتبي متعدد المنصات لتحويل الكلام إلى نص: يسجّل ما دمت تضغط على اختصار قابل للضبط، ويفرّغ الصوت محليًا، ويلصق النتيجة في التطبيق الذي يحمل التركيز.** يصف المشروع نفسه بأنه مجاني ومفتوح المصدر وخاص وبسيط: «أداة واحدة لمهمة واحدة». الشيفرة بترخيص MIT وأُنشئ المستودع في فبراير 2025.',
          '**تقول صفحة About إن Handy لا يسعى إلى أن يكون أفضل تطبيق لتحويل الكلام إلى نص بل «الأسهل في التفريع»،** وترحب بمساهمين يعرفون لغة Rust. وهو برنامج يُنزَّل وليس خدمة مستضافة.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يتوفر Handy للتنزيل على macOS وWindows وLinux؛ ولا تُذكر نسخة لـ iOS أو Android أو الويب.**',
        ],
        columns: ['الخيار', 'مصدر الحصول عليه'],
        rows: [
          {
            'الخيار': 'macOS',
            'مصدر الحصول عليه': '.dmg (Apple silicon وIntel): [handy.computer](https://handy.computer)',
          },
          {
            'الخيار': 'Windows',
            'مصدر الحصول عليه': '.exe و.msi (x64 وARM64): [handy.computer](https://handy.computer)',
          },
          {
            'الخيار': 'Linux',
            'مصدر الحصول عليه': '.AppImage و.deb و.rpm (x86_64 وARM64): [handy.computer](https://handy.computer)',
          },
          {
            'الخيار': 'الموقع',
            'مصدر الحصول عليه': '[handy.computer](https://handy.computer)',
          },
          {
            'الخيار': 'سياسة الخصوصية',
            'مصدر الحصول عليه': '[handy.computer/privacy](https://handy.computer/privacy)',
          },
          {
            'الخيار': 'الشيفرة المصدرية',
            'مصدر الحصول عليه': '[github.com/cjpais/Handy](https://github.com/cjpais/Handy)، ترخيص MIT',
          },
        ],
        note: 'الإصدار الذي روجع: 0.9.8، نُشر في 3 أكتوبر 2026 بحسب [صفحة Releases على GitHub](https://github.com/cjpais/Handy/releases) التي تسرد أيضًا كل المثبّتات. يعرض الزر الرئيسي في الموقع نسخة Apple silicon لأجهزة Mac. تتوفر حزم Homebrew (`brew install --cask handy`) وwinget (`winget install cjpais.Handy`) لكنها غير مدعومة من المطورين؛ على Debian أو Ubuntu ثبّت ملف .deb بالأمر `sudo apt install ./Handy_*.deb`. التطبيق مجاني.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**لا يذكر الموقع حدًّا أدنى لإصدار النظام؛ وتتوقف احتياجات العتاد على نموذج الكلام الذي تختاره.**',
        ],
        columns: ['البند', 'ما تقوله المصادر'],
        rows: [
          {
            'البند': 'نظام التشغيل',
            'ما تقوله المصادر': 'الموقع لا يذكر حدًّا أدنى؛ وتضبط إعدادات البناء في المشروع macOS 10.15 حدًّا أدنى؛ تتوفر تنزيلات لـ Windows بمعماريتي x64 وARM64 ولـ Linux بمعماريتي x86_64 وARM64',
          },
          {
            'البند': 'نماذج الكلام',
            'ما تقوله المصادر': 'تُنزَّل داخل التطبيق: Whisper Small بحجم 487 MB وMedium بحجم 492 MB وTurbo بحجم 1600 MB وLarge بحجم 1100 MB، ونموذج Parakeet بحجم 731 MB، بحسب وثائق المشروع',
          },
          {
            'البند': 'العتاد',
            'ما تقوله المصادر': 'تستخدم نماذج Whisper تسريع GPU عند توفره؛ ويوصف Parakeet بأنه محسَّن لـ CPU؛ ولا تُذكر سعة RAM',
          },
          {
            'البند': 'الأذونات',
            'ما تقوله المصادر': 'الوصول إلى الميكروفون وإلى إمكانية الوصول، يُطلب عند أول تشغيل',
          },
          {
            'البند': 'إضافات Linux',
            'ما تقوله المصادر': 'xdotool (X11) أو wtype أو dotool (Wayland) لكتابة النص؛ وlibgtk-layer-shell وقت التشغيل',
          },
          {
            'البند': 'الإنترنت',
            'ما تقوله المصادر': 'مطلوب لتنزيل النماذج ولفحص التحديثات إن فُعّل؛ ويمكن أيضًا نسخ ملفات النماذج يدويًا',
          },
        ],
        note: 'أحجام النماذج هي أحجام الملفات في دليل التثبيت اليدوي للمشروع، وقد تختلف القائمة داخل التطبيق.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: ['**تتبع الخطوات ملف README الخاص بالمشروع؛ ولم تنفذها PromptQuorum.**'],
        numberedItems: [
          {
            title: 'ثبّت Handy',
            whyItMatters: 'نزّل مثبّت نظامك من الموقع أو من صفحة Releases ثم ثبّته.',
          },
          {
            title: 'امنح الأذونات',
            whyItMatters: 'شغّل Handy واسمح بالوصول إلى الميكروفون وإمكانية الوصول عندما يطلب النظام ذلك.',
          },
          {
            title: 'نزّل نموذجًا',
            whyItMatters: 'افتح الإعدادات ثم النماذج ونزّل نموذج Whisper أو Parakeet؛ وهذه هي الخطوة الرئيسية التي تحتاج إلى الإنترنت.',
          },
          {
            title: 'أملِ نصك',
            whyItMatters: 'انقر في أي حقل نص، واضغط على الاختصار مع الاستمرار وتحدث ثم اتركه؛ يلصق Handy النص المفرّغ. يمكن إيقاف الضغط للتحدث ليبدّل الاختصار نفسه التسجيل بين التشغيل والإيقاف.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل ما يلي مصدره الموقع أو سياسة الخصوصية أو README، ولم يُختبر أي منه بصورة مستقلة.**',
        ],
        items: [
          '**الضغط للتحدث أو التبديل.** الاختصار قابل للضبط؛ والضغط مع الاستمرار للتسجيل هو الافتراضي، ويتوفر أيضًا وضع الضغط للبدء والضغط للإيقاف.',
          '**نماذج محلية.** Whisper بأربعة أحجام وParakeet V3 الذي يصفه README بأنه محسَّن لـ CPU مع كشف تلقائي للغة؛ وتظهر ملفات Whisper GGML المخصصة التي تضعها في مجلد النماذج ضمن «Custom Models».',
          '**ترشيح بحسب النشاط الصوتي.** يزيل Silero VAD الصمت قبل التفريغ.',
          '**كلمات مخصصة وسجل.** تشمل الإعدادات قائمة كلمات مخصصة وموجّهات مخصصة وسجل تفريغ يحتفظ بالتسجيلات.',
          '**معالجة لاحقة اختيارية.** يمكن لمرحلة ثانية تنقيح النص المفرّغ بنموذج ذكاء اصطناعي تضبطه، وتُبدَّل بالأمر `handy --toggle-post-process`؛ وتبقى متوقفة ما لم تضبطها.',
        ],
        note: 'على Linux تكون طبقة التسجيل المرئية متوقفة افتراضيًا لأن بعض مديري النوافذ يعاملونها كنافذة نشطة، مما قد يمنع اللصق.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**تقول سياسة الخصوصية السارية منذ 18 سبتمبر 2026 إن Handy لا يحتاج إلى حساب، ولا يتضمن إعلانات أو تحليلات سلوكية أو قياسًا عن بُعد للتتبع، ولا يرسل صوت الميكروفون ولا النصوص المفرّغة إلى القائمين على المشروع أثناء التفريغ العادي.** تبقى التسجيلات والنصوص والسجل والإعدادات والكلمات المخصصة والسجلات التقنية على جهازك؛ وافتراضيًا يحتفظ Handy بعدد محدود من الإدخالات الأخيرة مع صوتها، ويمكنك تغيير مدة الاحتفاظ أو ضبط حد السجل على صفر. وتحجب النسخ الرسمية نص التفريغ من السجلات التقنية.',
          'يستخدم التطبيق الشبكة في ثلاث حالات: التحقق من التحديثات عبر GitHub Releases (مفعّل افتراضيًا ويمكن إيقافه)، وتنزيل النماذج من Hugging Face أو، بديلًا، من [blob.handy.computer](https://blob.handy.computer) عبر Cloudflare، والمعالجة اللاحقة الاختيارية. وإذا ضبطت مزوّدًا سحابيًا للمعالجة اللاحقة فإن النص المفرّغ والموجّه وبيانات اعتمادك تنتقل مباشرة من جهازك إلى ذلك المزوّد، وتقول السياسة إنه قد يكون OpenAI أو Anthropic أو OpenRouter أو Groq أو Cerebras أو Z.AI أو AWS Bedrock؛ ويتجنب ذلك استخدام نقطة نهاية محلية أو على الجهاز.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه إقرارات من القائمين على المشروع وليست نتائج تدقيق. الشيفرة عامة بترخيص MIT، لكن PromptQuorum لم تقرأها ولم تفحص حركة الشبكة للتطبيق.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**الكتّاب والمطورون** الذين يريدون الإملاء في المحررات ونوافذ الدردشة والطرفيات دون خدمة سحابية أو اشتراك.',
          '**مستخدمو أدوات إتاحة الوصول والهواة** الذين يريدون قاعدة شيفرة صغيرة ومفتوحة يمكنهم تفريعها أو التحكم بها بالسكربتات.',
          '**المهتمون بالخصوصية** الذين يقبلون تنزيل نموذج ويريدون إبقاء النصوص المفرّغة على أجهزتهم.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الدقة والسرعة.** لم تقِس PromptQuorum معدلات أخطاء الكلمات ولا زمن الاستجابة ولا تغطية اللغات؛ وعدد اللغات المدعومة غير مذكور في المصادر التي قرأناها.',
          '**الأداء بحسب العتاد.** لم تُختبر أزمنة التشغيل على أجهزة بمعالج فقط أو أجهزة Mac قديمة أو بطاقات GPU مختلفة، ولم يُنشر أي متطلب للذاكرة.',
          '**قيود يذكرها المشروع نفسه.** يحذّر README من أن ميكروفون سماعة Bluetooth على macOS قد يخفض جودة التشغيل، ومن أن الاختصارات التي تتضمن fn وGlobe تعمل فقط على لوحات مفاتيح Apple، ومن أن دعم Wayland على Linux محدود.',
          '**توقيع ملفات التثبيت.** لم نتحقق مما إذا كانت مثبّتات macOS وWindows موثَّقة أو موقَّعة بشهادة مطوّر.',
          '**الحالة قبل 1.0.** الإصدار هو 0.9.8، ويقول README إن المشروع قيد التطوير النشط وفيه مشكلات معروفة.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          {
            'التطبيق': '[MacWhisper](/ar/power-local-llm/macwhisper-review)',
            'المنصات': 'macOS',
            'السعر / الرخصة': 'مجاني جزئيًا / مملوك',
            'الفرق الأبرز': 'تطبيق لأجهزة Mac فقط بشراء لمرة واحدة للتفريغ المحلي بـ Whisper وParakeet؛ مغلق المصدر',
          },
          {
            'التطبيق': '[TranscriptionSuite](/ar/power-local-llm/transcriptionsuite-review)',
            'المنصات': 'macOS وWindows وLinux',
            'السعر / الرخصة': 'مجاني / GPL-3.0',
            'الفرق الأبرز': 'يضيف تفريغًا مباشرًا وفصل المتحدثين ودفترًا صوتيًا قابلًا للبحث؛ ويعمل المحرك داخل Docker على Windows وLinux',
          },
          {
            'التطبيق': '[AquaVoice](/ar/power-local-llm/aquavoice-review)',
            'المنصات': 'macOS وWindows وiOS وAndroid',
            'السعر / الرخصة': 'مجاني جزئيًا / مملوك',
            'الفرق الأبرز': 'خدمة إملاء سحابية تكتب في التطبيق النشط، فهي ليست خيارًا يعمل دون اتصال',
          },
        ],
        note: 'هذه تطبيقات من الفئة نفسها في دليل PromptQuorum؛ تحقق من السعر والرخصة والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل Handy على حاسوب غير متصل بالإنترنت؟',
            a: 'نعم، متى كانت النماذج في مكانها: يوثّق المشروع نسخ ملفات النماذج يدويًا إلى مجلد النماذج في التطبيق، كما يلتقط Handy النماذج الموجودة أصلًا في ذاكرة Hugging Face المؤقتة المشتركة. وتظهر ملفات .bin الخاصة بـ Whisper GGML التي تضعها هناك ضمن «Custom Models».',
          },
          {
            q: 'أي نموذج أختار؟',
            a: 'يصف README نماذج Whisper بأنها مسرّعة بـ GPU وParakeet بأنه محسَّن لـ CPU مع كشف تلقائي للغة، ويضع دليل التثبيت اليدوي علامة «موصى به» على ملف Parakeet Unified EN 0.6B؛ ولا تقدم المصادر أي اختبار مقارنة بينها.',
          },
          {
            q: 'هل يعمل Handy على Wayland؟',
            a: 'الدعم محدود: بحسب README تحتاج كتابة النص إلى wtype أو dotool، ويجب ضبط الاختصارات العامة في بيئة سطح المكتب لتشغيل `handy --toggle-transcription`، ويحتاج Ubuntu 26.04 إلى ydotool بدل wtype.',
          },
          {
            q: 'هل يمكنني التحكم في Handy بالسكربتات أو Raycast؟',
            a: 'نعم: تتحكم خيارات مثل --toggle-transcription و--toggle-post-process و--cancel في نسخة قيد التشغيل، ويربط README بإضافة Raycast من مطوّر خارجي تبدأ التسجيل وتوقفه.',
          },
          {
            q: 'هل إصدارات Handy موقَّعة؟',
            a: 'يقول README إن ملفات الإصدار تستخدم صيغة توقيع المحدِّث في Tauri مع حفظ المفتاح العام في ملف tauri.conf.json بالمستودع، وتعرض صفحة Releases ملف .sig بجوار كل مثبّت.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'Handy وسيلة صغيرة ومحدَّثة باستمرار ومجانية ومفتوحة المصدر للإملاء في أي تطبيق على Windows أو macOS أو Linux، مع تعرف على الكلام يعمل بحسب المشروع على جهازك. في المقابل، ما زال دون الإصدار 1.0، ويذكر المشروع نفسه قيودًا تخص Bluetooth على macOS وWayland على Linux، ولم نتمكن هنا من التحقق من دقته ولا سرعته. يناسب من يريد إملاءً بالضغط للتحدث دون حساب أو اشتراك ويستطيع تجربته على عتاده؛ ومن يحتاج إلى دقة مثبتة أو تجربة مصقولة على Wayland أو دعمًا من الشركة المطورة فعليه أن يختبره أولًا.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Handy](https://handy.computer) — الوصف وزر التنزيل والرعاة، اطُّلع عليه في 24 أكتوبر 2026.',
          '[صفحة About في Handy](https://handy.computer/about) — أهداف المشروع وطريقة عمله، اطُّلع عليها في 24 أكتوبر 2026.',
          '[سياسة خصوصية Handy](https://handy.computer/privacy) — معالجة البيانات واستخدام الشبكة ومزودو المعالجة اللاحقة، سارية منذ 18 سبتمبر 2026.',
          '[Handy على GitHub](https://github.com/cjpais/Handy) — README وترخيص MIT وملاحظات التثبيت والمشكلات المعروفة، اطُّلع عليه في 24 أكتوبر 2026.',
          '[إصدارات Handy](https://github.com/cjpais/Handy/releases) — الإصدار 0.9.8 وملفات التثبيت، اطُّلع عليها في 24 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة MacWhisper](/ar/power-local-llm/macwhisper-review) — تطبيق Mac للتفريغ المحلي بـ Whisper وParakeet.',
          '[مراجعة TranscriptionSuite](/ar/power-local-llm/transcriptionsuite-review) — تحويل مجاني ومحلي للكلام إلى نص مع تسمية المتحدثين وتفريغ مباشر.',
          '[مراجعة Whisper.cpp](/ar/power-local-llm/whisper-cpp-review) — نسخة C++ من Whisper تعتمد عليها أدوات إملاء محلية كثيرة.',
          '[مقارنة أدوات الصوت والكلام](/ar/power-local-llm/local-llm-voice-audio-compared) — المقارنة بين أدوات الفئة التي تنتمي إليها هذه المراجعة.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/handy-review-hero-zh.webp',
    title: 'Handy 评测：免费的离线语音转文字听写应用',
    seoTitle: 'Handy 评测：免费开源的离线语音转文字桌面听写应用，支持三大系统',
    intro: 'Handy 是由 [CJ Pais](https://github.com/cjpais) 及贡献者开发的免费开源桌面应用：按住快捷键说话，松开后，转写出的文字会粘贴到你正在使用的文本框中。项目称语音识别在你自己的电脑上运行，下载模型后可完全离线使用。本评测依据官方网站、隐私政策和 GitHub 仓库（2026 年 10 月 24 日查阅）；PromptQuorum 没有亲自试用过该应用。',
    metaDescription: 'Handy 评测：免费、采用 MIT 许可证的桌面应用，在你自己的电脑上把语音转成文字并粘贴到任意位置。支持 Windows、macOS、Linux；未实测。',
    twitterDescription: 'Handy 评测：适用于 Windows、macOS 和 Linux 的免费离线按键说话听写。来源对模型、隐私和安装包确认了什么、没有确认什么。',
    audience: '希望在自己电脑上使用按键说话式听写的写作者、开发者和无障碍用户，需要了解来源确认了什么、哪些只是声明以及费用。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Handy 评测',
    targetKeywords: [
      'handy 评测',
      'handy 语音转文字',
      '离线听写应用',
      '开源语音识别',
      '按键说话听写 windows mac linux',
      'whisper 听写应用',
      'handy.computer',
    ],
    current_models_mentioned: ['Whisper', 'Parakeet'],
    current_hardware_mentioned: ['Apple silicon', 'GPU'],
    leadAnswerBlock: '**Handy（版本 0.9.8）是一款免费、采用 MIT 许可证的桌面应用，在你自己的电脑上把语音转成文字，并粘贴到你正在输入的文本框。** 它可在 Windows、macOS 和 Linux 上运行，需要一次性下载模型，本文所有说法均来自开发者的网站、隐私政策和 GitHub 仓库。',
    quickAnswerTop: {
      zh: {
        question: 'Handy 真的能离线工作吗？',
        answer: '据项目介绍可以：下载语音模型后，音频在你的电脑上转写，无需联网。隐私政策补充说，普通转写不会向维护者发送音频或文字；网络用于检查更新、下载模型和可选的后处理。',
        bullets: [
          '按住快捷键录音、松开即粘贴，或按一次开始、再按一次停止。',
          '转写前先用 Silero 语音活动检测器过滤静音。',
          '可选的后处理步骤可用你配置的 AI 模型润色文字。',
          '命令行参数可让脚本和 Linux 桌面触发录音。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '快速回答',
        anchor: 'quick-answer',
      },
      {
        label: 'Handy 是什么？',
        anchor: 'what-is-handy',
      },
      {
        label: '获取方式',
        anchor: 'get-it',
      },
      {
        label: '运行要求',
        anchor: 'requirements',
      },
      {
        label: '上手步骤',
        anchor: 'getting-started',
      },
      {
        label: '来源已证实的功能',
        anchor: 'key-features',
      },
      {
        label: '数据流向与隐私',
        anchor: 'privacy',
      },
      {
        label: '适合哪些人',
        anchor: 'who-should-use',
      },
      {
        label: '我们未能核实的内容',
        anchor: 'who-should-not-use',
      },
      {
        label: '竞品与替代方案',
        anchor: 'vs-alternatives',
      },
      {
        label: '常见问题',
        anchor: 'faq',
      },
      {
        label: '结论',
        anchor: 'verdict',
      },
      {
        label: '来源',
        anchor: 'sources',
      },
      {
        label: '相关阅读',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Handy 是一款开源桌面应用，按下快捷键时录音，用本地语音模型转写，并把文字粘贴到当前应用。',
          },
          {
            type: 'plain-terms',
            text: '按下组合键、说一句话、松开，文字就会出现在光标处；据项目介绍，模型存放在硬盘上后无需账号和网络。',
          },
        ],
        items: [
          '维护情况：最新版本发布于 2026 年 10 月 3 日，主分支最近一次更改在 2026 年 10 月 21 日，不适用停更警告。',
          '费用：没有付费档位；项目接受捐赠并列出赞助商。',
          '模型：Whisper（Small、Medium、Turbo、Large）和 Parakeet，下载一次后在本地运行。',
          '安装包：GitHub Releases 页面提供 .dmg、.exe、.msi、.AppImage、.deb 和 .rpm 文件。',
          '开发者：CJ Pais 及贡献者；项目自称重在“便于 fork”，而非最好的听写应用。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测依据 [handy.computer](https://handy.computer)、其隐私政策和 GitHub 仓库（2026 年 10 月 24 日查阅）。PromptQuorum 未安装或计时该应用，因此不评估准确度和速度。',
          },
        ],
      },
      overview: {
        id: 'what-is-handy',
        title: 'Handy 是什么？',
        content: [
          '**Handy 是一款跨平台的语音转文字桌面应用：按住可配置的快捷键时录音，在本地转写音频，并把结果粘贴到获得焦点的应用中。** 项目自称免费、开源、私密、简单：“一个工具，一项任务”。代码采用 MIT 许可证，仓库创建于 2025 年 2 月。',
          '**“About”页面称，Handy 不追求成为最好的语音转文字应用，而是“最便于 fork 的那一个”，** 并欢迎懂 Rust 的贡献者。它是需要下载的程序，而不是托管服务。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: ['**Handy 提供 macOS、Windows 和 Linux 桌面版下载；未列出 iOS、Android 或网页版。**'],
        columns: ['选项', '获取方式'],
        rows: [
          {
            '选项': 'macOS',
            '获取方式': '.dmg（Apple silicon、Intel）：[handy.computer](https://handy.computer)',
          },
          {
            '选项': 'Windows',
            '获取方式': '.exe、.msi（x64、ARM64）：[handy.computer](https://handy.computer)',
          },
          {
            '选项': 'Linux',
            '获取方式': '.AppImage、.deb、.rpm（x86_64、ARM64）：[handy.computer](https://handy.computer)',
          },
          {
            '选项': '官方网站',
            '获取方式': '[handy.computer](https://handy.computer)',
          },
          {
            '选项': '隐私政策',
            '获取方式': '[handy.computer/privacy](https://handy.computer/privacy)',
          },
          {
            '选项': '源代码',
            '获取方式': '[github.com/cjpais/Handy](https://github.com/cjpais/Handy)，MIT 许可证',
          },
        ],
        note: '评测版本：0.9.8，据 [GitHub Releases 页面](https://github.com/cjpais/Handy/releases)发布于 2026 年 10 月 3 日，该页面也列出了全部安装包。官网主按钮为 Mac 提供 Apple silicon 版本。另有 Homebrew（`brew install --cask handy`）和 winget（`winget install cjpais.Handy`）软件包，但并非开发者维护；在 Debian 或 Ubuntu 上用 `sudo apt install ./Handy_*.deb` 安装 .deb。应用免费。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: ['**官网未列出系统最低版本；硬件需求取决于你选择的语音模型。**'],
        columns: ['项目', '来源说明'],
        rows: [
          {
            '项目': '操作系统',
            '来源说明': '官网未写最低版本；项目构建配置将 macOS 10.15 设为最低；提供 Windows x64 与 ARM64、Linux x86_64 与 ARM64 的下载',
          },
          {
            '项目': '语音模型',
            '来源说明': '在应用内下载：Whisper Small 487 MB、Medium 492 MB、Turbo 1600 MB、Large 1100 MB，以及 731 MB 的 Parakeet 模型（据项目文档）',
          },
          {
            '项目': '硬件',
            '来源说明': 'Whisper 模型在可用时使用 GPU 加速；Parakeet 被描述为针对 CPU 优化；未给出内存数值',
          },
          {
            '项目': '权限',
            '来源说明': '麦克风和辅助功能权限，首次启动时请求',
          },
          {
            '项目': 'Linux 附加项',
            '来源说明': '输入文字需要 xdotool（X11）、wtype 或 dotool（Wayland）；运行时需要 libgtk-layer-shell',
          },
          {
            '项目': '网络',
            '来源说明': '下载模型以及（启用时）检查更新需要联网；模型文件也可手动放入',
          },
        ],
        note: '模型大小取自项目手动安装指南中的文件大小，应用内列表可能不同。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: ['**以下步骤依据项目 README；PromptQuorum 未实际执行。**'],
        numberedItems: [
          {
            title: '安装 Handy',
            whyItMatters: '从官网或 Releases 页面下载适合你系统的安装包并安装。',
          },
          {
            title: '授予权限',
            whyItMatters: '启动 Handy，在系统提示时允许麦克风和辅助功能权限。',
          },
          {
            title: '下载模型',
            whyItMatters: '打开“设置”，进入“模型”，下载 Whisper 或 Parakeet 模型；这是主要需要联网的步骤。',
          },
          {
            title: '开始听写',
            whyItMatters: '点击任意文本框，按住快捷键说话并松开，Handy 会粘贴转写文字。可关闭按键说话，让同一快捷键切换录音。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: ['**以下各项均来自官网、隐私政策或 README，未经独立测试。**'],
        items: [
          '**按键说话或切换。** 快捷键可配置；默认按住录音，也有按一次开始、再按一次停止的模式。',
          '**本地模型。** 四种尺寸的 Whisper 和 Parakeet V3；README 称 Parakeet 针对 CPU 优化并可自动检测语言；放入模型文件夹的自定义 Whisper GGML 文件会出现在“Custom Models”中。',
          '**语音活动过滤。** Silero VAD 在转写前去除静音。',
          '**自定义词汇与历史记录。** 设置中包含自定义词表、自定义提示词，以及保留录音的转写历史。',
          '**可选后处理。** 第二遍处理可用你配置的 AI 模型润色转写文字，通过 `handy --toggle-post-process` 切换；不设置则保持关闭。',
        ],
        note: '在 Linux 上，录音浮层默认关闭，因为部分合成器会把它当作活动窗口，可能导致粘贴失败。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**2026 年 9 月 18 日生效的隐私政策称，Handy 无需账号，不含广告、行为分析或追踪遥测，普通转写时不会把麦克风音频或转写文字发送给维护者。** 录音、转写文字、历史记录、设置、自定义词汇和日志都保存在你的设备上；默认情况下 Handy 保留有限数量的近期条目及其音频，你可以更改保留期限或把历史上限设为零。官方发行版会在日志中隐去转写内容。',
          '应用会在三种情况下使用网络：向 GitHub Releases 检查更新（默认开启，可关闭）；从 Hugging Face 下载模型，失败时改从经由 Cloudflare 的 [blob.handy.computer](https://blob.handy.computer) 下载；以及可选的后处理。若你为后处理配置了云端提供商，转写文字、提示词和你的凭据会直接从你的电脑发往该提供商，政策称可能是 OpenAI、Anthropic、OpenRouter、Groq、Cerebras、Z.AI 或 AWS Bedrock；使用本地或设备端接口可避免这一点。',
        ],
        callouts: [
          {
            type: 'note',
            text: '以上是维护者的声明，不是审计结果。代码以 MIT 许可证公开，但 PromptQuorum 未阅读代码，也未检查该应用的网络流量。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**写作者和开发者**：想在编辑器、聊天框和终端中听写，又不想用云服务或订阅。',
          '**无障碍用户和爱折腾的人**：想要一个小而开放、可 fork 或用脚本控制的代码库。',
          '**注重隐私的用户**：接受下载模型，希望转写文字留在自己的机器上。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**准确度和速度。** PromptQuorum 未测量词错误率、延迟或语言覆盖；我们阅读的来源中没有给出支持的语言数量。',
          '**不同硬件上的表现。** 未测试仅用 CPU 的机器、旧款 Mac 和不同 GPU 上的运行时间，也没有公布内存要求。',
          '**项目自己列出的限制。** README 警告：在 macOS 上使用蓝牙耳机麦克风可能降低播放质量；含 fn 和 Globe 的快捷键只在 Apple 键盘上有效；Linux 上对 Wayland 的支持有限。',
          '**安装包签名。** 未检查 macOS 和 Windows 安装包是否经过公证或使用开发者证书签名。',
          '**1.0 之前的状态。** 当前版本为 0.9.8，README 称项目正在积极开发且有已知问题。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          {
            '应用': '[MacWhisper](/zh/power-local-llm/macwhisper-review)',
            '平台': 'macOS',
            '价格 / 许可证': '免费增值 / 专有',
            '主要区别': '仅限 Mac 的一次性购买应用，用 Whisper 和 Parakeet 本地转写；闭源',
          },
          {
            '应用': '[TranscriptionSuite](/zh/power-local-llm/transcriptionsuite-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / GPL-3.0',
            '主要区别': '增加实时转写、说话人分离和可搜索的音频笔记本；在 Windows 和 Linux 上引擎运行于 Docker',
          },
          {
            '应用': '[AquaVoice](/zh/power-local-llm/aquavoice-review)',
            '平台': 'macOS、Windows、iOS、Android',
            '价格 / 许可证': '免费增值 / 专有',
            '主要区别': '向当前应用输入文字的云端听写服务，因此不是离线选项',
          },
        ],
        note: '这些是 PromptQuorum 目录中同类别的应用；请在各应用页面核对其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Handy 能在没有网络的电脑上运行吗？',
            a: '可以，只要模型已就位：项目说明了如何把模型文件手动复制到应用的模型文件夹，Handy 也会识别共享 Hugging Face 缓存中已有的模型。放入的自定义 Whisper GGML .bin 文件会出现在“Custom Models”中。',
          },
          {
            q: '我该选哪个模型？',
            a: 'README 称 Whisper 模型支持 GPU 加速，Parakeet 针对 CPU 优化并可自动检测语言，手动安装指南则把 Parakeet Unified EN 0.6B 文件标为推荐；来源中没有两者之间的基准测试。',
          },
          {
            q: 'Handy 能在 Wayland 上使用吗？',
            a: '支持有限：据 README，输入文字需要 wtype 或 dotool，全局快捷键须在你的桌面环境中设置为运行 `handy --toggle-transcription`，Ubuntu 26.04 需要用 ydotool 取代 wtype。',
          },
          {
            q: '能用脚本或 Raycast 控制 Handy 吗？',
            a: '可以：--toggle-transcription、--toggle-post-process 和 --cancel 等参数可控制正在运行的实例，README 还链接了第三方开发者制作的 Raycast 扩展，可开始和停止录音。',
          },
          {
            q: 'Handy 的发行版有签名吗？',
            a: 'README 称发行产物采用 Tauri 的更新器签名格式，公钥保存在仓库的 tauri.conf.json 中；Releases 页面在每个安装包旁列出了 .sig 文件。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Handy 是在 Windows、macOS 或 Linux 上向任意应用听写的一种小巧、更新活跃、免费且开源的方式，据项目介绍，语音识别在你自己的电脑上运行。不过，它仍低于 1.0 版本，项目自己列出了 macOS 蓝牙和 Linux Wayland 方面的限制，其准确度和速度也无法在此核实。它适合想要不需账号和订阅的按键说话式听写、并能在自己硬件上试用的人；需要经过验证的准确度、完善的 Wayland 体验或厂商支持的人，应先自行测试。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Handy 官方网站](https://handy.computer) — 简介、下载按钮和赞助商，2026 年 10 月 24 日查阅。',
          '[Handy About 页面](https://handy.computer/about) — 项目目标和工作方式，2026 年 10 月 24 日查阅。',
          '[Handy 隐私政策](https://handy.computer/privacy) — 数据处理、网络使用和后处理提供商，2026 年 9 月 18 日生效。',
          '[GitHub 上的 Handy](https://github.com/cjpais/Handy) — README、MIT 许可证、安装说明和已知问题，2026 年 10 月 24 日查阅。',
          '[Handy 发行版](https://github.com/cjpais/Handy/releases) — 0.9.8 版本和安装文件，2026 年 10 月 24 日查阅。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[MacWhisper 评测](/zh/power-local-llm/macwhisper-review) — 使用 Whisper 和 Parakeet 本地转写的 Mac 应用。',
          '[TranscriptionSuite 评测](/zh/power-local-llm/transcriptionsuite-review) — 带说话人标签和实时转写的免费本地语音转文字。',
          '[Whisper.cpp 评测](/zh/power-local-llm/whisper-cpp-review) — 许多本地听写工具所基于的 Whisper C++ 移植版。',
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
    heroImage: '/images/handy-review-hero-ko.webp',
    title: 'Handy 리뷰: 무료 오프라인 음성 받아쓰기 앱',
    seoTitle: 'Handy 리뷰: 무료 오프라인 음성 받아쓰기 데스크톱 앱',
    intro: 'Handy는 [CJ Pais](https://github.com/cjpais)와 기여자들이 만든 무료 오픈소스 데스크톱 앱입니다. 단축키를 누른 채 말하고 손을 떼면, 받아쓴 텍스트가 사용 중인 입력란에 붙여 넣어집니다. 프로젝트에 따르면 음성 인식은 사용자의 컴퓨터에서 실행되며 모델을 내려받은 뒤에는 완전히 오프라인으로 동작합니다. 이 리뷰는 공식 웹사이트, 개인정보 처리방침, GitHub 저장소(2026년 10월 24일 확인)를 바탕으로 하며, PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription: 'Handy 리뷰: 내 컴퓨터에서 음성을 텍스트로 바꿔 어디든 붙여 넣는 MIT 라이선스 무료 데스크톱 앱. Windows·macOS·Linux 지원, 직접 테스트하지 않음.',
    twitterDescription: 'Handy 리뷰: Windows, macOS, Linux용 무료 오프라인 푸시투토크 받아쓰기. 모델, 개인정보, 설치 파일에 대해 출처가 확인한 것과 확인하지 않은 것.',
    audience: '자신의 컴퓨터에서 푸시투토크 방식 받아쓰기를 쓰고 싶은 작성자, 개발자, 접근성 사용자로서, 출처가 확인한 내용과 주장에 그치는 내용, 비용을 알고 싶은 분.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Handy 리뷰',
    targetKeywords: [
      'handy 리뷰',
      'handy 음성 인식',
      '오프라인 받아쓰기 앱',
      '오픈소스 음성 인식',
      '푸시투토크 받아쓰기 windows mac linux',
      'whisper 받아쓰기 앱',
      'handy.computer',
    ],
    current_models_mentioned: ['Whisper', 'Parakeet'],
    current_hardware_mentioned: ['Apple silicon', 'GPU'],
    leadAnswerBlock: '**Handy(버전 0.9.8)는 음성을 사용자의 컴퓨터에서 텍스트로 바꿔 입력 중인 텍스트 필드에 붙여 넣는 MIT 라이선스 무료 데스크톱 앱입니다.** Windows, macOS, Linux에서 실행되며 모델을 한 번 내려받아야 합니다. 이 글의 모든 설명은 개발자의 웹사이트, 개인정보 처리방침, GitHub 저장소를 근거로 합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Handy는 정말 오프라인에서 동작합니까?',
        answer: '프로젝트에 따르면 그렇습니다. 음성 모델을 내려받은 뒤에는 인터넷 연결 없이 컴퓨터에서 받아쓰기가 이루어집니다. 개인정보 처리방침은 일반 받아쓰기에서 오디오나 텍스트가 관리자에게 전송되지 않으며, 네트워크는 업데이트 확인, 모델 다운로드, 선택적 후처리에 쓰인다고 덧붙입니다.',
        bullets: [
          '단축키를 누르고 있는 동안 녹음하고 손을 떼면 붙여 넣거나, 한 번 눌러 시작하고 다시 눌러 멈출 수 있습니다.',
          '받아쓰기 전에 Silero 음성 활동 감지기로 무음 구간을 걸러 냅니다.',
          '선택적 후처리 단계에서 직접 설정한 AI 모델로 텍스트를 다듬을 수 있습니다.',
          '명령줄 플래그로 스크립트나 Linux 데스크톱에서 녹음을 제어할 수 있습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '빠른 답변',
        anchor: 'quick-answer',
      },
      {
        label: 'Handy란?',
        anchor: 'what-is-handy',
      },
      {
        label: '입수 방법',
        anchor: 'get-it',
      },
      {
        label: '요구 사항',
        anchor: 'requirements',
      },
      {
        label: '시작하는 방법',
        anchor: 'getting-started',
      },
      {
        label: '출처로 확인된 기능',
        anchor: 'key-features',
      },
      {
        label: '데이터 흐름과 개인정보',
        anchor: 'privacy',
      },
      {
        label: '이런 분께 적합합니다',
        anchor: 'who-should-use',
      },
      {
        label: '확인하지 못한 사항',
        anchor: 'who-should-not-use',
      },
      {
        label: '경쟁 제품과 대안',
        anchor: 'vs-alternatives',
      },
      {
        label: '자주 묻는 질문',
        anchor: 'faq',
      },
      {
        label: '결론',
        anchor: 'verdict',
      },
      {
        label: '출처',
        anchor: 'sources',
      },
      {
        label: '관련 글',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Handy는 단축키를 누르면 음성을 녹음해 로컬 음성 모델로 받아쓰고, 그 텍스트를 사용 중인 앱에 붙여 넣는 오픈소스 데스크톱 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '키 조합을 누르고 한 문장을 말한 뒤 손을 떼면 커서 위치에 글자가 나타납니다. 프로젝트에 따르면 모델이 디스크에 있으면 계정도 인터넷 연결도 필요하지 않습니다.',
          },
        ],
        items: [
          '유지 관리: 최신 릴리스는 2026년 10월 3일에 공개되었고 메인 브랜치는 2026년 10월 21일에 마지막으로 변경되어, 갱신 중단 경고는 해당되지 않습니다.',
          '비용: 유료 요금제는 없으며 프로젝트는 후원금을 받고 스폰서를 소개합니다.',
          '모델: Whisper(Small, Medium, Turbo, Large)와 Parakeet을 한 번 내려받아 로컬에서 실행합니다.',
          '설치 파일: GitHub Releases 페이지에 .dmg, .exe, .msi, .AppImage, .deb, .rpm 파일이 있습니다.',
          '개발자: CJ Pais와 기여자들. 최고의 받아쓰기 앱이 아니라 “포크하기 쉬운” 앱을 표방합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 [handy.computer](https://handy.computer), 개인정보 처리방침, GitHub 저장소(2026년 10월 24일 확인)를 바탕으로 합니다. PromptQuorum은 앱을 설치하거나 시간을 재지 않았으므로 정확도와 속도는 평가하지 않습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-handy',
        title: 'Handy란?',
        content: [
          '**Handy는 설정 가능한 단축키를 누르는 동안 녹음하고, 오디오를 로컬에서 받아쓴 뒤 포커스가 있는 앱에 결과를 붙여 넣는 크로스 플랫폼 음성 인식 데스크톱 앱입니다.** 프로젝트는 스스로를 무료, 오픈소스, 프라이빗, 단순함으로 설명하며 “하나의 도구, 하나의 일”을 내세웁니다. 코드는 MIT 라이선스이고 저장소는 2025년 2월에 만들어졌습니다.',
          '**About 페이지에는 Handy가 최고의 음성 인식 앱이 아니라 “가장 포크하기 쉬운 앱”을 목표로 한다고 적혀 있으며,** Rust에 능숙한 기여자를 환영합니다. 호스팅 서비스가 아니라 내려받아 쓰는 프로그램입니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Handy는 macOS, Windows, Linux용 데스크톱 다운로드로 제공되며 iOS, Android, 웹 버전은 안내되어 있지 않습니다.**',
        ],
        columns: ['옵션', '입수 방법'],
        rows: [
          {
            '옵션': 'macOS',
            '입수 방법': '.dmg (Apple silicon, Intel): [handy.computer](https://handy.computer)',
          },
          {
            '옵션': 'Windows',
            '입수 방법': '.exe, .msi (x64, ARM64): [handy.computer](https://handy.computer)',
          },
          {
            '옵션': 'Linux',
            '입수 방법': '.AppImage, .deb, .rpm (x86_64, ARM64): [handy.computer](https://handy.computer)',
          },
          {
            '옵션': '웹사이트',
            '입수 방법': '[handy.computer](https://handy.computer)',
          },
          {
            '옵션': '개인정보 처리방침',
            '입수 방법': '[handy.computer/privacy](https://handy.computer/privacy)',
          },
          {
            '옵션': '소스 코드',
            '입수 방법': '[github.com/cjpais/Handy](https://github.com/cjpais/Handy), MIT 라이선스',
          },
        ],
        note: '확인한 버전: 0.9.8([GitHub Releases 페이지](https://github.com/cjpais/Handy/releases) 기준 2026년 10월 3일 공개, 모든 설치 파일도 이곳에 나열됨). 웹사이트의 메인 버튼은 Mac용으로 Apple silicon 빌드를 안내합니다. Homebrew(`brew install --cask handy`)와 winget(`winget install cjpais.Handy`) 패키지도 있지만 개발자가 관리하지 않습니다. Debian 또는 Ubuntu에서는 `sudo apt install ./Handy_*.deb`로 .deb를 설치합니다. 앱은 무료입니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: ['**웹사이트에는 운영체제 최소 버전이 적혀 있지 않으며, 필요한 하드웨어는 선택한 음성 모델에 따라 달라집니다.**'],
        columns: ['항목', '출처의 설명'],
        rows: [
          {
            '항목': '운영체제',
            '출처의 설명': '웹사이트에 최소 사양 없음. 프로젝트의 빌드 설정은 macOS 10.15를 최소로 지정. Windows x64·ARM64, Linux x86_64·ARM64용 다운로드 제공',
          },
          {
            '항목': '음성 모델',
            '출처의 설명': '앱 안에서 내려받음: Whisper Small 487 MB, Medium 492 MB, Turbo 1600 MB, Large 1100 MB, 그리고 731 MB의 Parakeet 모델(프로젝트 문서 기준)',
          },
          {
            '항목': '하드웨어',
            '출처의 설명': 'Whisper 모델은 가능할 때 GPU 가속을 사용하고, Parakeet은 CPU에 최적화된 것으로 설명됨. RAM 수치는 제시되지 않음',
          },
          {
            '항목': '권한',
            '출처의 설명': '마이크와 손쉬운 사용 접근 권한, 첫 실행 때 요청',
          },
          {
            '항목': 'Linux 추가 요건',
            '출처의 설명': '텍스트 입력에 xdotool(X11), wtype 또는 dotool(Wayland). 실행 시 libgtk-layer-shell 필요',
          },
          {
            '항목': '인터넷',
            '출처의 설명': '모델 다운로드와 (켜 둔 경우) 업데이트 확인에 필요. 모델 파일은 직접 넣을 수도 있음',
          },
        ],
        note: '모델 크기는 프로젝트의 수동 설치 안내에 나온 파일 크기이며 앱 안의 목록과 다를 수 있습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: ['**아래 단계는 프로젝트의 README를 따른 것이며 PromptQuorum이 직접 실행하지는 않았습니다.**'],
        numberedItems: [
          {
            title: 'Handy 설치하기',
            whyItMatters: '웹사이트나 Releases 페이지에서 사용 중인 시스템용 설치 파일을 내려받아 설치합니다.',
          },
          {
            title: '권한 허용하기',
            whyItMatters: 'Handy를 실행하고 시스템이 요청하면 마이크와 손쉬운 사용 접근을 허용합니다.',
          },
          {
            title: '모델 내려받기',
            whyItMatters: '설정에서 모델 메뉴를 열고 Whisper 또는 Parakeet 모델을 내려받습니다. 인터넷이 주로 필요한 단계입니다.',
          },
          {
            title: '받아쓰기',
            whyItMatters: '아무 텍스트 필드나 클릭하고 단축키를 누른 채 말한 뒤 손을 떼면 Handy가 받아쓴 내용을 붙여 넣습니다. 푸시투토크를 끄면 같은 단축키로 녹음을 켜고 끌 수 있습니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: ['**아래 항목은 모두 웹사이트, 개인정보 처리방침, README에서 나온 것이며 독립적으로 테스트하지 않았습니다.**'],
        items: [
          '**푸시투토크 또는 토글.** 단축키는 변경할 수 있으며 누르고 있는 동안 녹음하는 것이 기본입니다. 한 번 눌러 시작하고 다시 눌러 멈추는 모드도 있습니다.',
          '**로컬 모델.** 네 가지 크기의 Whisper와 Parakeet V3. README는 Parakeet을 언어를 자동 감지하는 CPU 최적화 모델로 설명하며, 모델 폴더에 넣은 사용자 Whisper GGML 파일은 “Custom Models”에 표시됩니다.',
          '**음성 활동 필터링.** Silero VAD가 받아쓰기 전에 무음을 제거합니다.',
          '**사용자 단어와 기록.** 설정에는 사용자 단어 목록, 사용자 프롬프트, 녹음을 보관하는 받아쓰기 기록이 있습니다.',
          '**선택적 후처리.** 직접 설정한 AI 모델로 받아쓴 내용을 다듬는 두 번째 단계로, `handy --toggle-post-process`로 전환합니다. 설정하지 않으면 꺼져 있습니다.',
        ],
        note: 'Linux에서는 일부 컴포지터가 녹음 오버레이를 활성 창으로 취급해 붙여 넣기를 막을 수 있어 오버레이가 기본으로 꺼져 있습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**2026년 9월 18일부터 적용되는 개인정보 처리방침에 따르면 Handy는 계정이 필요 없고, 광고·행동 분석·추적 텔레메트리가 없으며, 일반 받아쓰기 중에는 마이크 오디오나 받아쓴 내용을 관리자에게 보내지 않습니다.** 녹음, 받아쓴 내용, 기록, 설정, 사용자 단어, 로그는 기기에 저장됩니다. 기본적으로 최근 항목 일부를 오디오와 함께 보관하며, 보관 기간을 바꾸거나 기록 한도를 0으로 설정할 수 있습니다. 공식 릴리스 빌드는 로그에서 받아쓴 본문을 가립니다.',
          '앱이 네트워크를 사용하는 경우는 세 가지입니다. GitHub Releases를 통한 업데이트 확인(기본으로 켜져 있으며 끌 수 있음), Hugging Face 또는 대체 경로인 [blob.handy.computer](https://blob.handy.computer)(Cloudflare 경유)에서의 모델 다운로드, 그리고 선택적 후처리입니다. 후처리에 클라우드 제공업체를 설정하면 받아쓴 내용, 프롬프트, 인증 정보가 사용자의 컴퓨터에서 해당 제공업체로 직접 전송되며, 방침에 따르면 OpenAI, Anthropic, OpenRouter, Groq, Cerebras, Z.AI, AWS Bedrock 등이 해당될 수 있습니다. 로컬 또는 기기 내 엔드포인트를 쓰면 이를 피할 수 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 관리자의 선언이며 감사 결과가 아닙니다. 코드는 MIT 라이선스로 공개되어 있지만 PromptQuorum은 코드를 읽지 않았고 앱의 네트워크 트래픽도 조사하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**작성자와 개발자**: 클라우드 서비스나 구독 없이 편집기, 채팅창, 터미널에 받아쓰기를 하고 싶은 분.',
          '**접근성 사용자와 직접 만져 보는 분**: 포크하거나 스크립트로 다룰 수 있는 작고 열린 코드베이스를 원하는 분.',
          '**개인정보를 중시하는 분**: 모델 다운로드를 받아들이고 받아쓴 내용을 자신의 기기에 두고 싶은 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**정확도와 속도.** PromptQuorum은 단어 오류율, 지연 시간, 언어 지원 범위를 측정하지 않았으며 지원 언어 수는 확인한 출처에 나와 있지 않습니다.',
          '**하드웨어별 성능.** CPU만 있는 기기, 오래된 Mac, 여러 GPU에서의 실행 시간은 테스트하지 않았고 RAM 요구 사항도 공개되어 있지 않습니다.',
          '**프로젝트가 직접 밝힌 제약.** README는 macOS에서 블루투스 헤드셋 마이크를 쓰면 재생 품질이 떨어질 수 있고, fn·Globe 키를 포함한 단축키는 Apple 키보드에서만 동작하며, Linux의 Wayland 지원은 제한적이라고 경고합니다.',
          '**설치 파일 서명.** macOS와 Windows 설치 파일이 공증되었는지, 개발자 인증서로 서명되었는지는 확인하지 않았습니다.',
          '**1.0 이전 상태.** 버전은 0.9.8이며 README는 프로젝트가 활발히 개발 중이고 알려진 문제가 있다고 밝힙니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이점'],
        rows: [
          {
            '앱': '[MacWhisper](/ko/power-local-llm/macwhisper-review)',
            '플랫폼': 'macOS',
            '가격 / 라이선스': '프리미엄 / 독점',
            '핵심 차이점': 'Whisper와 Parakeet 로컬 받아쓰기를 1회 구매로 제공하는 Mac 전용 앱. 비공개 소스',
          },
          {
            '앱': '[TranscriptionSuite](/ko/power-local-llm/transcriptionsuite-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / GPL-3.0',
            '핵심 차이점': '실시간 받아쓰기, 화자 분리, 검색 가능한 오디오 노트북을 더하며 Windows와 Linux에서는 엔진이 Docker에서 실행됨',
          },
          {
            '앱': '[AquaVoice](/ko/power-local-llm/aquavoice-review)',
            '플랫폼': 'macOS, Windows, iOS, Android',
            '가격 / 라이선스': '프리미엄 / 독점',
            '핵심 차이점': '활성 앱에 입력하는 클라우드 받아쓰기 서비스로 오프라인 옵션이 아님',
          },
        ],
        note: 'PromptQuorum 디렉터리의 같은 카테고리 앱입니다. 현재 가격, 라이선스, 플랫폼은 각 앱의 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '인터넷이 없는 컴퓨터에서도 Handy를 쓸 수 있습니까?',
            a: '모델이 준비되어 있다면 가능합니다. 프로젝트는 모델 파일을 앱의 모델 폴더에 직접 복사하는 방법을 문서화하고 있으며, 공유 Hugging Face 캐시에 이미 있는 모델도 인식합니다. 그곳에 넣은 사용자 Whisper GGML .bin 파일은 “Custom Models”에 표시됩니다.',
          },
          {
            q: '어떤 모델을 골라야 합니까?',
            a: 'README는 Whisper 모델을 GPU 가속 대상으로, Parakeet을 언어 자동 감지가 되는 CPU 최적화 모델로 설명하고, 수동 설치 안내는 Parakeet Unified EN 0.6B 파일을 권장으로 표시합니다. 둘을 비교한 벤치마크는 출처에 없습니다.',
          },
          {
            q: 'Handy는 Wayland에서 동작합니까?',
            a: '지원은 제한적입니다. README에 따르면 텍스트 입력에는 wtype 또는 dotool이 필요하고, 전역 단축키는 데스크톱 환경에서 `handy --toggle-transcription`을 실행하도록 설정해야 하며, Ubuntu 26.04에서는 wtype 대신 ydotool이 필요합니다.',
          },
          {
            q: '스크립트나 Raycast로 Handy를 제어할 수 있습니까?',
            a: '가능합니다. --toggle-transcription, --toggle-post-process, --cancel 같은 플래그로 실행 중인 인스턴스를 제어할 수 있고, README에는 녹음을 시작하고 멈추는 서드파티 개발자의 Raycast 확장 프로그램 링크가 있습니다.',
          },
          {
            q: 'Handy의 릴리스는 서명되어 있습니까?',
            a: 'README에 따르면 릴리스 결과물은 Tauri의 업데이터 서명 형식을 사용하며 공개 키는 저장소의 tauri.conf.json에 있습니다. Releases 페이지에는 각 설치 파일 옆에 .sig 파일이 나열되어 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'Handy는 Windows, macOS, Linux의 어떤 앱에든 받아쓰기를 할 수 있는 작고 활발히 업데이트되는 무료 오픈소스 방법이며, 프로젝트에 따르면 음성 인식은 사용자의 컴퓨터에서 실행됩니다. 반면 아직 1.0 미만 버전이고, 프로젝트가 직접 macOS 블루투스와 Linux Wayland 관련 제약을 밝히고 있으며, 정확도와 속도는 여기서 확인할 수 없었습니다. 계정과 구독 없이 푸시투토크 받아쓰기를 원하고 자신의 하드웨어에서 시험해 볼 수 있는 분에게 적합합니다. 검증된 정확도, 매끄러운 Wayland 환경, 제조사 지원이 필요한 분은 먼저 시험해 보십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Handy 웹사이트](https://handy.computer) — 설명, 다운로드 버튼, 스폰서. 2026년 10월 24일 확인.',
          '[Handy About 페이지](https://handy.computer/about) — 프로젝트 목표와 동작 방식. 2026년 10월 24일 확인.',
          '[Handy 개인정보 처리방침](https://handy.computer/privacy) — 데이터 처리, 네트워크 사용, 후처리 제공업체. 2026년 9월 18일 적용.',
          '[GitHub의 Handy](https://github.com/cjpais/Handy) — README, MIT 라이선스, 설치 안내, 알려진 문제. 2026년 10월 24일 확인.',
          '[Handy 릴리스](https://github.com/cjpais/Handy/releases) — 버전 0.9.8과 설치 파일. 2026년 10월 24일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[MacWhisper 리뷰](/ko/power-local-llm/macwhisper-review) — Whisper와 Parakeet으로 로컬 받아쓰기를 하는 Mac 앱.',
          '[TranscriptionSuite 리뷰](/ko/power-local-llm/transcriptionsuite-review) — 화자 라벨과 실시간 받아쓰기를 갖춘 무료 로컬 음성 인식.',
          '[Whisper.cpp 리뷰](/ko/power-local-llm/whisper-cpp-review) — 많은 로컬 받아쓰기 도구의 기반이 되는 Whisper의 C++ 포트.',
          '[음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 이 리뷰가 속한 카테고리 비교.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
        ],
      },
    },
  },
}
