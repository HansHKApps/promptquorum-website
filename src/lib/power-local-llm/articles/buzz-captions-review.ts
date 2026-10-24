// Buzz Review: Free Offline Whisper Transcription and Captions
// Slug: buzz-captions-review
// Companion to: whisper-cpp-review, faster-whisper-review, macwhisper-review, local-whisper-stt-comparison
// Sources: buzzcaptions.com, github.com/chidiwilliams/buzz (README, LICENSE, Releases v1.4.5, commits, docs/docs/*, buzz/widgets/application.py,
// buzz/update_checker.py), chidiwilliams.github.io/buzz, SourceForge file list, PyPI - all checked 2026-10-24; no hands-on testing.
// The buzzcaptions.com link to a native "Buzz on macOS" App Store edition (id6446018936) returned HTTP 404 on 2026-10-24, so that edition is not covered.

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
    heroImage: '/images/buzz-captions-review-hero-en.webp',
    title: 'Buzz Review: Free Offline Whisper Transcription and Captions',
    seoTitle: 'Buzz Review: Free Offline Whisper Transcription App',
    intro: 'Buzz is a free, open-source desktop app by [Chidi Williams](https://github.com/chidiwilliams/buzz) that transcribes and translates audio and video on your own computer with OpenAI Whisper models and exports subtitles. It runs on Windows, macOS and Linux and is MIT-licensed. This review is based on the project website, README, documentation, release page and source code, checked on 24 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription: 'Buzz review: free MIT-licensed desktop app that transcribes and translates audio and video offline with Whisper and exports SRT and VTT. Untested.',
    twitterDescription: 'Buzz review: free open-source Whisper app for offline transcription and subtitles on Windows, macOS and Linux. What the sources confirm and what they do not.',
    audience: 'Podcasters, journalists, video editors and students who want to turn recordings into text and subtitles on their own computer and need to know what the sources confirm.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Buzz review',
    targetKeywords: [
      'buzz review',
      'buzz captions',
      'offline whisper transcription app',
      'free subtitle generator offline',
      'whisper desktop app windows mac linux',
      'transcribe audio offline free',
      'buzz whisper transcription',
    ],
    current_models_mentioned: ['Whisper', 'whisper.cpp', 'Faster Whisper'],
    current_hardware_mentioned: ['Apple silicon', 'Nvidia GPU', 'CPU'],
    leadAnswerBlock: '**Buzz (version 1.4.5) is a free desktop app for Windows, macOS and Linux that turns audio and video into text and subtitles on your own computer using Whisper speech-recognition models.** It is open source under the MIT license, and every statement here comes from the project\'s website, README, documentation, release page and source code.',
    quickAnswerTop: {
      en: {
        question: 'Does Buzz really work offline?',
        answer: 'Per the project, yes: after a one-time model download, transcription runs on your own computer, and the cloud options are opt-in.',
        bullets: [
          'Import audio, video or YouTube links, or transcribe live from a microphone.',
          'Export TXT, SRT and VTT, and edit or resize subtitles in the built-in viewer.',
          'Optional speaker identification and a watch folder for new files.',
          'A command-line interface and a plugin system for scripting.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Buzz?', anchor: 'what-is-buzz' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Data Flow and Privacy', anchor: 'privacy' },
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
            text: 'Buzz is a free, MIT-licensed desktop app that transcribes and translates audio and video on your own computer with OpenAI Whisper models and exports subtitles and transcripts.',
          },
          {
            type: 'plain-terms',
            text: 'You drop in a recording or switch on the microphone, pick a Whisper model, and Buzz writes the text and time-coded subtitles on your machine unless you choose a cloud option.',
          },
        ],
        items: [
          'Maintenance: the latest release came out on 23 August 2026 and the code was last changed on 17 October 2026, so no stale-project warning applies.',
          'Backends: Whisper, whisper.cpp, Faster Whisper, Whisper-type Hugging Face models or the OpenAI API, per the project.',
          'Cost: free; the source code is MIT-licensed on GitHub.',
          'Platforms: Windows, macOS and Linux; Intel Macs are supported only up to the last release that includes them.',
          'Caveat: anonymous launch statistics are sent by default and can be switched off.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the project website, README, documentation, GitHub Releases and source code, checked on 24 October 2026. PromptQuorum has not installed or run Buzz, so accuracy and speed are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-buzz',
        title: 'What Is Buzz?',
        content: [
          '**Buzz is a desktop transcription and translation app built on OpenAI Whisper, created by Chidi Williams and developed in the open on GitHub.** The repository describes it as transcribing and translating audio offline on a personal computer, and the project site is named Buzz Captions.',
          'The website describes two editions: "Buzz Classic", the free open-source app for Windows, Linux and macOS (Intel), and a separate native "Buzz on macOS" edition. This review covers the open-source app; the App Store link on the website returned a "not found" page on 24 October 2026, so the native edition was not assessed.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Buzz is a free download for Windows, macOS and Linux, with installers on GitHub Releases and SourceForge and Flatpak and Snap packages for Linux.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          { Option: 'Website', 'How to get it': '[buzzcaptions.com](https://buzzcaptions.com)' },
          { Option: 'macOS', 'How to get it': '.dmg from [GitHub Releases](https://github.com/chidiwilliams/buzz/releases)' },
          {
            Option: 'Windows',
            'How to get it': '.exe plus two .bin files, unsigned; [GitHub Releases](https://github.com/chidiwilliams/buzz/releases)',
          },
          {
            Option: 'Linux',
            'How to get it': '[Flatpak](https://flathub.org/apps/io.github.chidiwilliams.Buzz), [Snap](https://snapcraft.io/buzz) or AppImage',
          },
          { Option: 'Python', 'How to get it': '`pip install buzz-captions`, ffmpeg required' },
          { Option: 'Price and license', 'How to get it': 'Free, MIT ([source code](https://github.com/chidiwilliams/buzz))' },
          {
            Option: 'Privacy policy',
            'How to get it': 'None found; see the [Preferences docs](https://chidiwilliams.github.io/buzz/docs/preferences)',
          },
        ],
        note: 'Version reviewed: 1.4.5, released on 23 August 2026 per GitHub Releases. The main branch has changed since (last on 17 October 2026) and already says 1.4.6, which is unreleased. On Windows, download all three files and run the .exe; the installer is unsigned, so choose More info, then Run anyway. [SourceForge](https://sourceforge.net/projects/buzz-captions/files/) hosts the same installers. Intel Macs: 1.4.5 is the last version that supports them. Nvidia CUDA acceleration becomes a separate in-app install from 1.4.6.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Everything below comes from the README, documentation and website; none of it was tested by PromptQuorum.**',
        ],
        items: [
          '**Input.** Import audio and video files or YouTube links, or transcribe live from a microphone; a presentation window shows live text during events.',
          '**Whisper backends.** Whisper, whisper.cpp, Faster Whisper, Whisper-type Hugging Face models or the OpenAI API, with Apple-silicon, CUDA and Vulkan acceleration where supported.',
          '**Output.** Export TXT, SRT and VTT (the website also lists CSV). A viewer offers search, playback and speed control, and a resize tool regroups subtitle length.',
          '**Extras.** Speaker identification (not on Intel macOS), speech separation before transcription, word-level timings, a watch folder, a command-line interface and plugins such as AI summary and DOCX export.',
          '**Languages and translation.** More than 90 languages per the website. Whisper translates to English by itself; other target languages need an OpenAI-compatible API, which can be a local server such as Ollama or LM Studio.',
        ],
        note: 'Speed depends on the model and hardware: the website warns that transcription may not be real-time, and the documentation suggests smaller or whisper.cpp models when it is slow and a GPU with at least 6 GB of VRAM for Faster Whisper.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**Transcription runs on your computer with downloaded models, per the README and documentation.** Three things can still leave the machine. Anonymous launch statistics (app version, locale, operating-system name, release and architecture) go to PostHog unless the environment variable BUZZ_DISABLE_TELEMETRY is set, and the app checks GitHub for new versions about once a week unless BUZZ_DISABLE_UPDATE_CHECK is set (available since 1.4.5).',
          'Optional features contact an external service only when you set one up: the OpenAI API for transcription, AI translation and the AI Summary plugin (or any OpenAI-compatible server you point it to), and downloads of YouTube links. An upload address can also be configured to post live transcripts to a server.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These statements come from the documentation and from reading the source code on 24 October 2026; PromptQuorum has not inspected network traffic. No separate privacy policy was found on buzzcaptions.com or in the repository.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Accuracy and speed.** PromptQuorum did not run Buzz, so word accuracy and transcription speed on any hardware are not assessed.',
          '**Mac App Store edition.** The website promotes a native macOS edition, but its App Store link returned a "not found" page on 24 October 2026, so its price, version and features could not be checked.',
          '**Windows installer.** The project says the installer is unsigned and needs three files; PromptQuorum did not scan or install it.',
          '**Documentation versus release.** Parts of the documentation describe 1.4.6 features, such as the separate CUDA install and custom whisper.cpp models, that are not in the 1.4.5 release.',
          '**Model licences.** Whisper models and any Hugging Face models you load have their own licences; PromptQuorum did not review them, and this is not legal advice.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            App: '[whisper.cpp](/power-local-llm/whisper-cpp-review)',
            Platforms: 'Windows, macOS, Linux',
            'Price / license': 'Free / MIT',
            'Key difference': 'C/C++ command-line engine that Buzz can use as a backend; no graphical subtitle editor',
          },
          {
            App: '[Faster-Whisper](/power-local-llm/faster-whisper-review)',
            Platforms: 'Windows, macOS, Linux',
            'Price / license': 'Free / MIT',
            'Key difference': 'Python library that Buzz can use as a backend; aimed at developers who script it',
          },
          {
            App: '[MacWhisper](/power-local-llm/macwhisper-review)',
            Platforms: 'macOS',
            'Price / license': 'Free tier / paid Pro',
            'Key difference': 'Closed-source Mac app with a polished interface; Mac only',
          },
        ],
        note: 'whisper.cpp and Faster-Whisper are engines Buzz can run, so they complement it more than they replace it; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I use Buzz on a computer with no internet?',
            a: 'Yes, according to the project FAQ: download the models on another computer, then copy the models folder (Help, Preferences, Models, Show file location opens it) to the same place on the offline machine. A download-models.py script in the repository helps prepare the cache.',
          },
          {
            q: 'Can Buzz translate into languages other than English?',
            a: 'Whisper\'s own Translate task outputs English only, and the Large-V3-Turbo model does not support it. Other target languages need an OpenAI-compatible API, which can be a cloud service or a local server such as Ollama or LM Studio.',
          },
          {
            q: 'How do I transcribe what my computer is playing?',
            a: 'Per the FAQ, route the application\'s output to a virtual audio device, such as BlackHole on macOS, VB-CABLE on Windows or PulseAudio Volume Control on Linux, and select it as the input in Buzz.',
          },
          {
            q: 'Which Whisper model should I pick?',
            a: 'The FAQ says smaller models are faster and less accurate, and recommends testing them on your own language. It adds that Large-V3 can sometimes invent words and that the Turbo model balances speed and accuracy.',
          },
          {
            q: 'Can I run Buzz from scripts?',
            a: 'Yes. The buzz add command takes files or URLs plus options for task, model type and size, language, prompt and word timestamps, and can run without opening the window by adding --hide-gui.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Buzz is an actively maintained, free and open-source way to turn recordings into transcripts and subtitles on your own computer, with a choice of Whisper backends and a built-in editor. Against that, the Windows installer is unsigned, Intel Macs are left behind after 1.4.5, anonymous launch statistics are on by default, and speed and accuracy depend on the model and hardware, which PromptQuorum did not test. It suits people who want a graphical Whisper tool with no subscription; anyone who needs strictly offline operation should switch off telemetry and the update check and avoid the cloud options.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Buzz Captions website](https://buzzcaptions.com) — editions, features and download links, checked 24 October 2026.',
          '[Buzz on GitHub](https://github.com/chidiwilliams/buzz) — README, MIT license, source code and commit history, checked 24 October 2026.',
          '[Buzz 1.4.5 release](https://github.com/chidiwilliams/buzz/releases/tag/v1.4.5) — installers and release notes, published 23 August 2026.',
          '[Buzz documentation](https://chidiwilliams.github.io/buzz/docs/preferences) — preferences, telemetry and update-check variables, FAQ and installation, checked 24 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[whisper.cpp Review](/power-local-llm/whisper-cpp-review) — the C/C++ engine Buzz can run as a backend.',
          '[Faster-Whisper Review](/power-local-llm/faster-whisper-review) — the optimized Python Whisper implementation.',
          '[MacWhisper Review](/power-local-llm/macwhisper-review) — a paid, Mac-only transcription app.',
          '[Local Whisper Speech-to-Text Compared](/power-local-llm/local-whisper-stt-comparison) — the category comparison this review belongs to.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Buzz Review: Free Offline Whisper Transcription and Captions',
      description: 'Buzz review: free, MIT-licensed desktop app that transcribes and translates audio and video offline with Whisper and exports subtitles. Platforms, install, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/buzz-captions-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'People evaluating a free offline Whisper transcription and subtitle app' },
      about: [
        { '@type': 'Thing', name: 'Buzz' },
        { '@type': 'Thing', name: 'Speech-to-text' },
        { '@type': 'Thing', name: 'OpenAI Whisper' },
        { '@type': 'Thing', name: 'Subtitles' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/buzz-captions-review' },
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
          name: 'Buzz Review',
          item: 'https://www.promptquorum.com/power-local-llm/buzz-captions-review',
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
    heroImage: '/images/buzz-captions-review-hero-de.webp',
    title: 'Buzz-Rezension: Kostenlose Offline-Transkription mit Whisper und Untertiteln',
    seoTitle: 'Buzz-Rezension: Gratis-App für Offline-Transkription',
    intro: 'Buzz ist eine kostenlose Open-Source-Desktop-App von [Chidi Williams](https://github.com/chidiwilliams/buzz), die Audio und Video auf Ihrem eigenen Computer mit OpenAI-Whisper-Modellen transkribiert und übersetzt und Untertitel exportiert. Sie läuft unter Windows, macOS und Linux und steht unter der MIT-Lizenz. Diese Rezension stützt sich auf die Projekt-Website, die README, die Dokumentation, die Release-Seite und den Quellcode, geprüft am 24. Oktober 2026; PromptQuorum hat die App nicht selbst getestet.',
    metaDescription: 'Buzz-Rezension: Gratis-App (MIT), die Audio und Video offline mit Whisper transkribiert, übersetzt und SRT-/VTT-Untertitel exportiert. Ungetestet.',
    twitterDescription: 'Buzz-Rezension: kostenlose Open-Source-Whisper-App für Offline-Transkription und Untertitel unter Windows, macOS und Linux. Was die Quellen bestätigen und was nicht.',
    audience: 'Podcaster, Journalisten, Videoeditoren und Studierende, die Aufnahmen auf dem eigenen Computer in Text und Untertitel umwandeln möchten und wissen müssen, was die Quellen bestätigen.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Buzz Rezension',
    targetKeywords: [
      'buzz rezension',
      'buzz captions',
      'offline whisper transkription app',
      'kostenlose untertitel erstellen offline',
      'whisper desktop app windows mac linux',
      'audio offline transkribieren kostenlos',
      'buzz whisper transkription',
    ],
    current_models_mentioned: ['Whisper', 'whisper.cpp', 'Faster Whisper'],
    current_hardware_mentioned: ['Apple silicon', 'Nvidia GPU', 'CPU'],
    leadAnswerBlock: '**Buzz (Version 1.4.5) ist eine kostenlose Desktop-App für Windows, macOS und Linux, die Audio und Video mit Whisper-Spracherkennungsmodellen auf Ihrem eigenen Computer in Text und Untertitel umwandelt.** Sie ist Open Source unter der MIT-Lizenz, und jede Aussage hier stammt von der Website, der README, der Dokumentation, der Release-Seite und dem Quellcode des Projekts.',
    quickAnswerTop: {
      de: {
        question: 'Funktioniert Buzz wirklich offline?',
        answer: 'Laut Projekt ja: Nach einem einmaligen Modell-Download läuft die Transkription auf Ihrem eigenen Computer, und die Cloud-Optionen müssen Sie ausdrücklich aktivieren.',
        bullets: [
          'Audio, Video oder YouTube-Links importieren oder live über ein Mikrofon transkribieren.',
          'TXT, SRT und VTT exportieren und Untertitel im integrierten Viewer bearbeiten oder neu gruppieren.',
          'Optionale Sprechererkennung und ein Überwachungsordner für neue Dateien.',
          'Eine Kommandozeilenschnittstelle und ein Plugin-System für Skripte.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Buzz?', anchor: 'what-is-buzz' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Datenfluss und Datenschutz', anchor: 'privacy' },
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
            text: 'Buzz ist eine kostenlose Desktop-App unter MIT-Lizenz, die Audio und Video mit OpenAI-Whisper-Modellen auf Ihrem eigenen Computer transkribiert und übersetzt und Untertitel sowie Transkripte exportiert.',
          },
          {
            type: 'plain-terms',
            text: 'Sie ziehen eine Aufnahme hinein oder schalten das Mikrofon ein, wählen ein Whisper-Modell, und Buzz schreibt Text und zeitcodierte Untertitel auf Ihrem Rechner, sofern Sie keine Cloud-Option wählen.',
          },
        ],
        items: [
          'Pflege: Das neueste Release erschien am 23. August 2026 und der Code wurde zuletzt am 17. Oktober 2026 geändert; ein Warnhinweis für veraltete Projekte entfällt daher.',
          'Backends: laut Projekt Whisper, whisper.cpp, Faster Whisper, Whisper-artige Hugging-Face-Modelle oder die OpenAI-API.',
          'Kosten: kostenlos; der Quellcode steht auf GitHub unter der MIT-Lizenz.',
          'Plattformen: Windows, macOS und Linux; Intel-Macs werden nur bis zum letzten Release unterstützt, das sie enthält.',
          'Einschränkung: Anonyme Startstatistiken werden standardmäßig gesendet und lassen sich abschalten.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf die Projekt-Website, die README, die Dokumentation, GitHub Releases und den Quellcode, geprüft am 24. Oktober 2026. PromptQuorum hat Buzz weder installiert noch ausgeführt; Genauigkeit und Geschwindigkeit werden daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-buzz',
        title: 'Was ist Buzz?',
        content: [
          '**Buzz ist eine Desktop-App für Transkription und Übersetzung auf Basis von OpenAI Whisper, entwickelt von Chidi Williams und offen auf GitHub gepflegt.** Das Repository beschreibt sie als Transkription und Übersetzung von Audio offline auf einem Privatcomputer; die Projekt-Website heißt Buzz Captions.',
          'Die Website nennt zwei Ausgaben: „Buzz Classic“, die kostenlose Open-Source-App für Windows, Linux und macOS (Intel), und eine separate native Ausgabe „Buzz on macOS“. Diese Rezension behandelt die Open-Source-App; der App-Store-Link auf der Website lieferte am 24. Oktober 2026 eine Seite „nicht gefunden“, die native Ausgabe wurde daher nicht bewertet.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Buzz ist ein kostenloser Download für Windows, macOS und Linux, mit Installern auf GitHub Releases und SourceForge sowie Flatpak- und Snap-Paketen für Linux.**',
        ],
        columns: ['Option', 'Bezug'],
        rows: [
          { Option: 'Website', Bezug: '[buzzcaptions.com](https://buzzcaptions.com)' },
          { Option: 'macOS', Bezug: '.dmg von [GitHub Releases](https://github.com/chidiwilliams/buzz/releases)' },
          {
            Option: 'Windows',
            Bezug: '.exe plus zwei .bin-Dateien, unsigniert; [GitHub Releases](https://github.com/chidiwilliams/buzz/releases)',
          },
          {
            Option: 'Linux',
            Bezug: '[Flatpak](https://flathub.org/apps/io.github.chidiwilliams.Buzz), [Snap](https://snapcraft.io/buzz) oder AppImage',
          },
          { Option: 'Python', Bezug: '`pip install buzz-captions`, ffmpeg erforderlich' },
          { Option: 'Preis und Lizenz', Bezug: 'Kostenlos, MIT ([Quellcode](https://github.com/chidiwilliams/buzz))' },
          {
            Option: 'Datenschutzerklärung',
            Bezug: 'Keine gefunden; siehe die [Preferences-Dokumentation](https://chidiwilliams.github.io/buzz/docs/preferences)',
          },
        ],
        note: 'Geprüfte Version: 1.4.5, laut GitHub Releases am 23. August 2026 veröffentlicht. Der Hauptzweig hat sich seitdem geändert (zuletzt am 17. Oktober 2026) und nennt bereits 1.4.6, das noch nicht veröffentlicht ist. Laden Sie unter Windows alle drei Dateien herunter und starten Sie die .exe; der Installer ist unsigniert, wählen Sie daher „Weitere Informationen“ und „Trotzdem ausführen“. [SourceForge](https://sourceforge.net/projects/buzz-captions/files/) hostet dieselben Installer. Intel-Macs: 1.4.5 ist die letzte Version, die sie unterstützt. Die Nvidia-CUDA-Beschleunigung wird ab 1.4.6 separat in der App installiert.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Alles Folgende stammt aus README, Dokumentation und Website; PromptQuorum hat nichts davon getestet.**',
        ],
        items: [
          '**Eingabe.** Audio- und Videodateien oder YouTube-Links importieren oder live über ein Mikrofon transkribieren; ein Präsentationsfenster zeigt den Live-Text bei Veranstaltungen.',
          '**Whisper-Backends.** Whisper, whisper.cpp, Faster Whisper, Whisper-artige Hugging-Face-Modelle oder die OpenAI-API, mit Beschleunigung für Apple Silicon, CUDA und Vulkan, wo unterstützt.',
          '**Ausgabe.** Export als TXT, SRT und VTT (die Website nennt zusätzlich CSV). Ein Viewer bietet Suche, Wiedergabe und Tempoeinstellung, ein Resize-Werkzeug gruppiert die Untertitellänge neu.',
          '**Extras.** Sprechererkennung (nicht auf Intel-macOS), Sprachtrennung vor der Transkription, Zeitmarken pro Wort, ein Überwachungsordner, eine Kommandozeilenschnittstelle und Plugins wie KI-Zusammenfassung und DOCX-Export.',
          '**Sprachen und Übersetzung.** Laut Website mehr als 90 Sprachen. Whisper übersetzt selbst ins Englische; andere Zielsprachen brauchen eine OpenAI-kompatible API, die auch ein lokaler Server wie Ollama oder LM Studio sein kann.',
        ],
        note: 'Die Geschwindigkeit hängt von Modell und Hardware ab: Die Website warnt, dass die Transkription nicht in Echtzeit laufen muss, und die Dokumentation empfiehlt bei Langsamkeit kleinere oder whisper.cpp-Modelle sowie für Faster Whisper eine GPU mit mindestens 6 GB VRAM.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Die Transkription läuft laut README und Dokumentation mit heruntergeladenen Modellen auf Ihrem Computer.** Dennoch können drei Dinge den Rechner verlassen. Anonyme Startstatistiken (App-Version, Gebietsschema, Name, Release und Architektur des Betriebssystems) gehen an PostHog, sofern die Umgebungsvariable BUZZ_DISABLE_TELEMETRY nicht gesetzt ist, und die App prüft etwa einmal pro Woche bei GitHub auf neue Versionen, sofern BUZZ_DISABLE_UPDATE_CHECK nicht gesetzt ist (verfügbar seit 1.4.5).',
          'Optionale Funktionen kontaktieren einen externen Dienst nur, wenn Sie einen einrichten: die OpenAI-API für Transkription, KI-Übersetzung und das Plugin KI-Zusammenfassung (oder ein beliebiger OpenAI-kompatibler Server, auf den Sie verweisen) sowie das Herunterladen von YouTube-Links. Zusätzlich lässt sich eine Upload-Adresse einrichten, die Live-Transkripte an einen Server sendet.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Angaben stammen aus der Dokumentation und aus dem Lesen des Quellcodes am 24. Oktober 2026; PromptQuorum hat den Netzwerkverkehr nicht untersucht. Auf buzzcaptions.com und im Repository wurde keine eigene Datenschutzerklärung gefunden.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Genauigkeit und Geschwindigkeit.** PromptQuorum hat Buzz nicht ausgeführt; Worttreue und Transkriptionsgeschwindigkeit auf beliebiger Hardware werden daher nicht bewertet.',
          '**Mac-App-Store-Ausgabe.** Die Website bewirbt eine native macOS-Ausgabe, doch ihr App-Store-Link lieferte am 24. Oktober 2026 eine Seite „nicht gefunden“; Preis, Version und Funktionen ließen sich daher nicht prüfen.',
          '**Windows-Installer.** Laut Projekt ist der Installer unsigniert und besteht aus drei Dateien; PromptQuorum hat ihn weder gescannt noch installiert.',
          '**Dokumentation gegenüber Release.** Teile der Dokumentation beschreiben Funktionen von 1.4.6, etwa die separate CUDA-Installation und eigene whisper.cpp-Modelle, die im Release 1.4.5 nicht enthalten sind.',
          '**Modelllizenzen.** Whisper-Modelle und alle geladenen Hugging-Face-Modelle haben eigene Lizenzen; PromptQuorum hat sie nicht geprüft, und dies ist keine Rechtsberatung.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          {
            App: '[whisper.cpp](/de/power-local-llm/whisper-cpp-review)',
            Plattformen: 'Windows, macOS, Linux',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wichtigster Unterschied': 'C/C++-Kommandozeilen-Engine, die Buzz als Backend nutzen kann; kein grafischer Untertitel-Editor',
          },
          {
            App: '[Faster-Whisper](/de/power-local-llm/faster-whisper-review)',
            Plattformen: 'Windows, macOS, Linux',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wichtigster Unterschied': 'Python-Bibliothek, die Buzz als Backend nutzen kann; für Entwickler gedacht, die sie per Skript einsetzen',
          },
          {
            App: '[MacWhisper](/de/power-local-llm/macwhisper-review)',
            Plattformen: 'macOS',
            'Preis / Lizenz': 'Gratisstufe / Pro gegen Bezahlung',
            'Wichtigster Unterschied': 'Quellgeschlossene Mac-App mit ausgefeilter Oberfläche; nur für den Mac',
          },
        ],
        note: 'whisper.cpp und Faster-Whisper sind Engines, die Buzz ausführen kann; sie ergänzen es daher eher, als es zu ersetzen. Prüfen Sie aktuellen Preis, Lizenz und Plattformen jeder App in ihrem eigenen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich Buzz auf einem Computer ohne Internet nutzen?',
            a: 'Ja, laut FAQ des Projekts: Laden Sie die Modelle auf einem anderen Computer herunter und kopieren Sie den Modellordner (Help, Preferences, Models, „Show file location“ öffnet ihn) an dieselbe Stelle auf dem Offline-Rechner. Ein Skript download-models.py im Repository hilft beim Vorbereiten des Caches.',
          },
          {
            q: 'Kann Buzz in andere Sprachen als Englisch übersetzen?',
            a: 'Die Whisper-eigene Aufgabe „Translate“ gibt nur Englisch aus, und das Modell Large-V3-Turbo unterstützt sie nicht. Andere Zielsprachen brauchen eine OpenAI-kompatible API, etwa einen Cloud-Dienst oder einen lokalen Server wie Ollama oder LM Studio.',
          },
          {
            q: 'Wie transkribiere ich, was mein Computer gerade abspielt?',
            a: 'Laut FAQ leiten Sie die Ausgabe der Anwendung an ein virtuelles Audiogerät um, etwa BlackHole unter macOS, VB-CABLE unter Windows oder PulseAudio Volume Control unter Linux, und wählen dieses in Buzz als Eingang.',
          },
          {
            q: 'Welches Whisper-Modell sollte ich wählen?',
            a: 'Laut FAQ sind kleinere Modelle schneller und ungenauer, und empfiehlt, sie mit der eigenen Sprache zu testen. Large-V3 könne manchmal Wörter erfinden, und das Turbo-Modell halte Geschwindigkeit und Genauigkeit im Gleichgewicht.',
          },
          {
            q: 'Kann ich Buzz per Skript steuern?',
            a: 'Ja. Der Befehl buzz add nimmt Dateien oder URLs sowie Optionen für Aufgabe, Modelltyp und -größe, Sprache, Prompt und Wort-Zeitmarken entgegen und läuft mit --hide-gui, ohne das Fenster zu öffnen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Buzz ist ein aktiv gepflegter, kostenloser Open-Source-Weg, Aufnahmen auf dem eigenen Computer in Transkripte und Untertitel umzuwandeln, mit Auswahl unter mehreren Whisper-Backends und einem integrierten Editor. Dem stehen gegenüber: Der Windows-Installer ist unsigniert, Intel-Macs bleiben nach 1.4.5 zurück, anonyme Startstatistiken sind standardmäßig aktiv, und Geschwindigkeit und Genauigkeit hängen von Modell und Hardware ab, was PromptQuorum nicht getestet hat. Sie passt zu Menschen, die ein grafisches Whisper-Werkzeug ohne Abo wollen; wer strikt offline arbeiten muss, sollte Telemetrie und Update-Prüfung abschalten und die Cloud-Optionen meiden.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von Buzz Captions](https://buzzcaptions.com) — Ausgaben, Funktionen und Download-Links, geprüft am 24. Oktober 2026.',
          '[Buzz auf GitHub](https://github.com/chidiwilliams/buzz) — README, MIT-Lizenz, Quellcode und Commit-Verlauf, geprüft am 24. Oktober 2026.',
          '[Buzz-Release 1.4.5](https://github.com/chidiwilliams/buzz/releases/tag/v1.4.5) — Installer und Release-Hinweise, veröffentlicht am 23. August 2026.',
          '[Buzz-Dokumentation](https://chidiwilliams.github.io/buzz/docs/preferences) — Einstellungen, Variablen für Telemetrie und Update-Prüfung, FAQ und Installation, geprüft am 24. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[whisper.cpp-Rezension](/de/power-local-llm/whisper-cpp-review) — die C/C++-Engine, die Buzz als Backend ausführen kann.',
          '[Faster-Whisper-Rezension](/de/power-local-llm/faster-whisper-review) — die optimierte Python-Implementierung von Whisper.',
          '[MacWhisper-Rezension](/de/power-local-llm/macwhisper-review) — eine kostenpflichtige Transkriptions-App nur für den Mac.',
          '[Lokale Whisper-Spracherkennung im Vergleich](/de/power-local-llm/local-whisper-stt-comparison) — der Kategorievergleich, zu dem diese Rezension gehört.',
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
    heroImage: '/images/buzz-captions-review-hero-es.webp',
    title: 'Reseña de Buzz: transcripción gratuita sin conexión con Whisper y subtítulos',
    seoTitle: 'Reseña de Buzz: app gratis de transcripción sin conexión',
    intro: 'Buzz es una app de escritorio gratuita y de código abierto de [Chidi Williams](https://github.com/chidiwilliams/buzz) que transcribe y traduce audio y vídeo en tu propio ordenador con modelos Whisper de OpenAI y exporta subtítulos. Funciona en Windows, macOS y Linux y tiene licencia MIT. Esta reseña se basa en el sitio web del proyecto, el README, la documentación, la página de versiones y el código fuente, comprobados el 24 de octubre de 2026; PromptQuorum no ha probado la app.',
    metaDescription: 'Reseña de Buzz: app gratuita (MIT) que transcribe y traduce audio y vídeo sin conexión con Whisper y exporta subtítulos SRT y VTT. Sin probar.',
    twitterDescription: 'Reseña de Buzz: app Whisper gratuita y de código abierto para transcribir sin conexión y crear subtítulos en Windows, macOS y Linux. Qué confirman las fuentes y qué no.',
    audience: 'Podcasters, periodistas, editores de vídeo y estudiantes que quieren convertir grabaciones en texto y subtítulos en su propio ordenador y necesitan saber qué confirman las fuentes.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Reseña de Buzz',
    targetKeywords: [
      'reseña buzz',
      'buzz captions',
      'app de transcripción whisper sin conexión',
      'generador de subtítulos gratis sin conexión',
      'app whisper escritorio windows mac linux',
      'transcribir audio sin conexión gratis',
      'buzz transcripción whisper',
    ],
    current_models_mentioned: ['Whisper', 'whisper.cpp', 'Faster Whisper'],
    current_hardware_mentioned: ['Apple silicon', 'Nvidia GPU', 'CPU'],
    leadAnswerBlock: '**Buzz (versión 1.4.5) es una app de escritorio gratuita para Windows, macOS y Linux que convierte audio y vídeo en texto y subtítulos en tu propio ordenador con modelos de reconocimiento de voz Whisper.** Es de código abierto con licencia MIT, y cada afirmación aquí procede del sitio web del proyecto, el README, la documentación, la página de versiones y el código fuente.',
    quickAnswerTop: {
      es: {
        question: '¿Funciona Buzz realmente sin conexión?',
        answer: 'Según el proyecto, sí: tras una descarga única del modelo, la transcripción se ejecuta en tu propio ordenador, y las opciones en la nube hay que activarlas expresamente.',
        bullets: [
          'Importa audio, vídeo o enlaces de YouTube, o transcribe en directo desde un micrófono.',
          'Exporta TXT, SRT y VTT y edita o reagrupa los subtítulos en el visor integrado.',
          'Identificación de hablantes opcional y una carpeta vigilada para archivos nuevos.',
          'Una interfaz de línea de comandos y un sistema de plugins para automatizar.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Buzz?', anchor: 'what-is-buzz' },
      { label: 'Dónde conseguirla', anchor: 'get-it' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Flujo de datos y privacidad', anchor: 'privacy' },
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
            text: 'Buzz es una app de escritorio gratuita con licencia MIT que transcribe y traduce audio y vídeo en tu propio ordenador con modelos Whisper de OpenAI y exporta subtítulos y transcripciones.',
          },
          {
            type: 'plain-terms',
            text: 'Arrastras una grabación o activas el micrófono, eliges un modelo Whisper y Buzz escribe el texto y los subtítulos con marcas de tiempo en tu equipo, salvo que elijas una opción en la nube.',
          },
        ],
        items: [
          'Mantenimiento: la última versión salió el 23 de agosto de 2026 y el código se modificó por última vez el 17 de octubre de 2026, así que no se aplica ningún aviso de proyecto abandonado.',
          'Motores: según el proyecto, Whisper, whisper.cpp, Faster Whisper, modelos tipo Whisper de Hugging Face o la API de OpenAI.',
          'Coste: gratis; el código fuente tiene licencia MIT en GitHub.',
          'Plataformas: Windows, macOS y Linux; los Mac con Intel solo se admiten hasta la última versión que los incluye.',
          'Salvedad: se envían estadísticas anónimas de inicio por defecto, y se pueden desactivar.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web del proyecto, el README, la documentación, GitHub Releases y el código fuente, comprobados el 24 de octubre de 2026. PromptQuorum no ha instalado ni ejecutado Buzz, así que no se evalúan la precisión ni la velocidad.',
          },
        ],
      },
      overview: {
        id: 'what-is-buzz',
        title: '¿Qué es Buzz?',
        content: [
          '**Buzz es una app de escritorio de transcripción y traducción basada en OpenAI Whisper, creada por Chidi Williams y desarrollada abiertamente en GitHub.** El repositorio la describe como una herramienta que transcribe y traduce audio sin conexión en un ordenador personal, y el sitio del proyecto se llama Buzz Captions.',
          'El sitio web describe dos ediciones: «Buzz Classic», la app gratuita de código abierto para Windows, Linux y macOS (Intel), y una edición nativa aparte, «Buzz on macOS». Esta reseña trata la app de código abierto; el enlace a la App Store del sitio devolvió una página de «no encontrado» el 24 de octubre de 2026, así que no se evaluó la edición nativa.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirla',
        content: [
          '**Buzz es una descarga gratuita para Windows, macOS y Linux, con instaladores en GitHub Releases y SourceForge y paquetes Flatpak y Snap para Linux.**',
        ],
        columns: ['Opción', 'Cómo conseguirla'],
        rows: [
          { 'Opción': 'Sitio web', 'Cómo conseguirla': '[buzzcaptions.com](https://buzzcaptions.com)' },
          { 'Opción': 'macOS', 'Cómo conseguirla': '.dmg desde [GitHub Releases](https://github.com/chidiwilliams/buzz/releases)' },
          {
            'Opción': 'Windows',
            'Cómo conseguirla': '.exe más dos archivos .bin, sin firmar; [GitHub Releases](https://github.com/chidiwilliams/buzz/releases)',
          },
          {
            'Opción': 'Linux',
            'Cómo conseguirla': '[Flatpak](https://flathub.org/apps/io.github.chidiwilliams.Buzz), [Snap](https://snapcraft.io/buzz) o AppImage',
          },
          { 'Opción': 'Python', 'Cómo conseguirla': '`pip install buzz-captions`, requiere ffmpeg' },
          { 'Opción': 'Precio y licencia', 'Cómo conseguirla': 'Gratis, MIT ([código fuente](https://github.com/chidiwilliams/buzz))' },
          {
            'Opción': 'Política de privacidad',
            'Cómo conseguirla': 'No se encontró; consulta la [documentación de Preferences](https://chidiwilliams.github.io/buzz/docs/preferences)',
          },
        ],
        note: 'Versión revisada: 1.4.5, publicada el 23 de agosto de 2026 según GitHub Releases. La rama principal ha cambiado desde entonces (por última vez el 17 de octubre de 2026) y ya indica 1.4.6, que no se ha publicado. En Windows, descarga los tres archivos y ejecuta el .exe; el instalador no está firmado, así que elige «Más información» y «Ejecutar de todos modos». [SourceForge](https://sourceforge.net/projects/buzz-captions/files/) aloja los mismos instaladores. Mac con Intel: 1.4.5 es la última versión que los admite. La aceleración Nvidia CUDA pasa a ser una instalación aparte dentro de la app desde 1.4.6.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Todo lo siguiente procede del README, la documentación y el sitio web; PromptQuorum no ha probado nada de ello.**',
        ],
        items: [
          '**Entrada.** Importa archivos de audio y vídeo o enlaces de YouTube, o transcribe en directo desde un micrófono; una ventana de presentación muestra el texto en vivo durante eventos.',
          '**Motores Whisper.** Whisper, whisper.cpp, Faster Whisper, modelos tipo Whisper de Hugging Face o la API de OpenAI, con aceleración para Apple silicon, CUDA y Vulkan donde esté disponible.',
          '**Salida.** Exporta TXT, SRT y VTT (el sitio web también menciona CSV). Un visor ofrece búsqueda, reproducción y control de velocidad, y una herramienta de redimensionado reagrupa la longitud de los subtítulos.',
          '**Extras.** Identificación de hablantes (no en macOS con Intel), separación del habla antes de transcribir, marcas de tiempo por palabra, una carpeta vigilada, una interfaz de línea de comandos y plugins como resumen con IA y exportación a DOCX.',
          '**Idiomas y traducción.** Más de 90 idiomas según el sitio web. Whisper traduce al inglés por sí mismo; otros idiomas de destino requieren una API compatible con OpenAI, que puede ser un servidor local como Ollama o LM Studio.',
        ],
        note: 'La velocidad depende del modelo y del hardware: el sitio web avisa de que la transcripción puede no ser en tiempo real, y la documentación sugiere modelos más pequeños o de whisper.cpp si va lenta, y una GPU con al menos 6 GB de VRAM para Faster Whisper.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**La transcripción se ejecuta en tu ordenador con los modelos descargados, según el README y la documentación.** Aun así, tres cosas pueden salir del equipo. Las estadísticas anónimas de inicio (versión de la app, configuración regional, nombre, versión y arquitectura del sistema operativo) se envían a PostHog salvo que se defina la variable de entorno BUZZ_DISABLE_TELEMETRY, y la app consulta GitHub cada semana aproximadamente en busca de versiones nuevas salvo que se defina BUZZ_DISABLE_UPDATE_CHECK (disponible desde 1.4.5).',
          'Las funciones opcionales solo contactan con un servicio externo si lo configuras: la API de OpenAI para transcripción, traducción con IA y el plugin de resumen con IA (o cualquier servidor compatible con OpenAI al que apuntes), y la descarga de enlaces de YouTube. También se puede configurar una dirección de subida para enviar transcripciones en directo a un servidor.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas afirmaciones proceden de la documentación y de la lectura del código fuente el 24 de octubre de 2026; PromptQuorum no ha inspeccionado el tráfico de red. No se encontró una política de privacidad propia en buzzcaptions.com ni en el repositorio.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Precisión y velocidad.** PromptQuorum no ejecutó Buzz, así que no se evalúan la exactitud de las palabras ni la velocidad de transcripción en ningún hardware.',
          '**Edición de la Mac App Store.** El sitio web promociona una edición nativa para macOS, pero su enlace a la App Store devolvió una página de «no encontrado» el 24 de octubre de 2026, por lo que no se pudieron comprobar su precio, versión ni funciones.',
          '**Instalador de Windows.** Según el proyecto, el instalador no está firmado y consta de tres archivos; PromptQuorum no lo analizó ni lo instaló.',
          '**Documentación frente a versión publicada.** Partes de la documentación describen funciones de 1.4.6, como la instalación aparte de CUDA y los modelos propios de whisper.cpp, que no están en la versión 1.4.5.',
          '**Licencias de los modelos.** Los modelos Whisper y cualquier modelo de Hugging Face que cargues tienen sus propias licencias; PromptQuorum no las revisó, y esto no es asesoramiento jurídico.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            App: '[whisper.cpp](/es/power-local-llm/whisper-cpp-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Motor de línea de comandos en C/C++ que Buzz puede usar como motor; sin editor gráfico de subtítulos',
          },
          {
            App: '[Faster-Whisper](/es/power-local-llm/faster-whisper-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Biblioteca de Python que Buzz puede usar como motor; pensada para desarrolladores que la automatizan',
          },
          {
            App: '[MacWhisper](/es/power-local-llm/macwhisper-review)',
            Plataformas: 'macOS',
            'Precio / licencia': 'Nivel gratis / Pro de pago',
            'Diferencia clave': 'App de Mac de código cerrado con interfaz cuidada; solo para Mac',
          },
        ],
        note: 'whisper.cpp y Faster-Whisper son motores que Buzz puede ejecutar, así que lo complementan más que sustituirlo; comprueba el precio, la licencia y las plataformas actuales de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo usar Buzz en un ordenador sin internet?',
            a: 'Sí, según las preguntas frecuentes del proyecto: descarga los modelos en otro ordenador y copia la carpeta de modelos (Help, Preferences, Models, «Show file location» la abre) al mismo lugar del equipo sin conexión. Un script download-models.py del repositorio ayuda a preparar la caché.',
          },
          {
            q: '¿Puede Buzz traducir a idiomas distintos del inglés?',
            a: 'La tarea «Translate» de Whisper solo produce inglés, y el modelo Large-V3-Turbo no la admite. Los demás idiomas de destino requieren una API compatible con OpenAI, que puede ser un servicio en la nube o un servidor local como Ollama o LM Studio.',
          },
          {
            q: '¿Cómo transcribo lo que reproduce mi ordenador?',
            a: 'Según las preguntas frecuentes, dirige la salida de la aplicación a un dispositivo de audio virtual, como BlackHole en macOS, VB-CABLE en Windows o PulseAudio Volume Control en Linux, y selecciónalo como entrada en Buzz.',
          },
          {
            q: '¿Qué modelo Whisper debo elegir?',
            a: 'Las preguntas frecuentes dicen que los modelos más pequeños son más rápidos y menos precisos, y recomiendan probarlos con tu propio idioma. Añaden que Large-V3 a veces puede inventar palabras y que el modelo Turbo equilibra velocidad y precisión.',
          },
          {
            q: '¿Puedo ejecutar Buzz desde scripts?',
            a: 'Sí. El comando buzz add acepta archivos o URL y opciones de tarea, tipo y tamaño de modelo, idioma, prompt y marcas de tiempo por palabra, y puede ejecutarse sin abrir la ventana añadiendo --hide-gui.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Buzz es una forma gratuita, de código abierto y mantenida activamente de convertir grabaciones en transcripciones y subtítulos en tu propio ordenador, con varios motores Whisper a elegir y un editor integrado. En contra, el instalador de Windows no está firmado, los Mac con Intel quedan atrás tras 1.4.5, las estadísticas anónimas de inicio están activadas por defecto, y la velocidad y la precisión dependen del modelo y del hardware, algo que PromptQuorum no probó. Encaja con quien quiere una herramienta gráfica de Whisper sin suscripción; quien necesite trabajar estrictamente sin conexión debería desactivar la telemetría y la comprobación de actualizaciones y evitar las opciones en la nube.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Buzz Captions](https://buzzcaptions.com) — ediciones, funciones y enlaces de descarga, comprobados el 24 de octubre de 2026.',
          '[Buzz en GitHub](https://github.com/chidiwilliams/buzz) — README, licencia MIT, código fuente e historial de commits, comprobados el 24 de octubre de 2026.',
          '[Versión 1.4.5 de Buzz](https://github.com/chidiwilliams/buzz/releases/tag/v1.4.5) — instaladores y notas de la versión, publicada el 23 de agosto de 2026.',
          '[Documentación de Buzz](https://chidiwilliams.github.io/buzz/docs/preferences) — preferencias, variables de telemetría y comprobación de actualizaciones, preguntas frecuentes e instalación, comprobadas el 24 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de whisper.cpp](/es/power-local-llm/whisper-cpp-review) — el motor en C/C++ que Buzz puede ejecutar como motor.',
          '[Reseña de Faster-Whisper](/es/power-local-llm/faster-whisper-review) — la implementación optimizada de Whisper en Python.',
          '[Reseña de MacWhisper](/es/power-local-llm/macwhisper-review) — una app de transcripción de pago solo para Mac.',
          '[Comparativa de voz a texto local con Whisper](/es/power-local-llm/local-whisper-stt-comparison) — la comparativa de categoría a la que pertenece esta reseña.',
          '[Directorio de software de LLM locales](/es/directory) — el catálogo completo de herramientas de IA locales.',
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
    heroImage: '/images/buzz-captions-review-hero-fr.webp',
    title: 'Test de Buzz : transcription gratuite hors ligne avec Whisper et sous-titres',
    seoTitle: 'Test de Buzz : appli gratuite de transcription hors ligne',
    intro: 'Buzz est une application de bureau gratuite et libre de [Chidi Williams](https://github.com/chidiwilliams/buzz) qui transcrit et traduit audio et vidéo sur votre propre ordinateur avec les modèles Whisper d\'OpenAI et exporte des sous-titres. Elle fonctionne sous Windows, macOS et Linux et est sous licence MIT. Ce test s\'appuie sur le site du projet, le README, la documentation, la page des versions et le code source, consultés le 24 octobre 2026 ; PromptQuorum n\'a pas testé l\'application.',
    metaDescription: 'Test de Buzz : appli gratuite (MIT) qui transcrit et traduit audio et vidéo hors ligne avec Whisper et exporte des sous-titres SRT et VTT. Non testée.',
    twitterDescription: 'Test de Buzz : appli Whisper gratuite et libre pour transcrire hors ligne et créer des sous-titres sous Windows, macOS et Linux. Ce que les sources confirment ou non.',
    audience: 'Podcasteurs, journalistes, monteurs vidéo et étudiants qui veulent transformer des enregistrements en texte et en sous-titres sur leur propre ordinateur et doivent savoir ce que les sources confirment.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Test de Buzz',
    targetKeywords: [
      'test buzz',
      'buzz captions',
      'application transcription whisper hors ligne',
      'générateur de sous-titres gratuit hors ligne',
      'appli whisper bureau windows mac linux',
      'transcrire audio hors ligne gratuit',
      'buzz transcription whisper',
    ],
    current_models_mentioned: ['Whisper', 'whisper.cpp', 'Faster Whisper'],
    current_hardware_mentioned: ['Apple silicon', 'Nvidia GPU', 'CPU'],
    leadAnswerBlock: '**Buzz (version 1.4.5) est une application de bureau gratuite pour Windows, macOS et Linux qui transforme audio et vidéo en texte et en sous-titres sur votre propre ordinateur grâce aux modèles de reconnaissance vocale Whisper.** Elle est libre sous licence MIT, et chaque affirmation ici provient du site du projet, du README, de la documentation, de la page des versions et du code source.',
    quickAnswerTop: {
      fr: {
        question: 'Buzz fonctionne-t-il vraiment hors ligne ?',
        answer: 'Selon le projet, oui : après un téléchargement unique du modèle, la transcription s\'exécute sur votre propre ordinateur, et les options cloud sont à activer volontairement.',
        bullets: [
          'Importez de l\'audio, de la vidéo ou des liens YouTube, ou transcrivez en direct depuis un microphone.',
          'Exportez en TXT, SRT et VTT, et modifiez ou regroupez les sous-titres dans la visionneuse intégrée.',
          'Identification des locuteurs facultative et dossier surveillé pour les nouveaux fichiers.',
          'Une interface en ligne de commande et un système de plugins pour l\'automatisation.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que Buzz ?', anchor: 'what-is-buzz' },
      { label: 'Où l\'obtenir', anchor: 'get-it' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Flux de données et confidentialité', anchor: 'privacy' },
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
            text: 'Buzz est une application de bureau gratuite sous licence MIT qui transcrit et traduit audio et vidéo sur votre propre ordinateur avec les modèles Whisper d\'OpenAI et exporte sous-titres et transcriptions.',
          },
          {
            type: 'plain-terms',
            text: 'Vous déposez un enregistrement ou activez le microphone, choisissez un modèle Whisper, et Buzz écrit le texte et les sous-titres horodatés sur votre machine, sauf si vous choisissez une option cloud.',
          },
        ],
        items: [
          'Maintenance : la dernière version est sortie le 23 août 2026 et le code a été modifié pour la dernière fois le 17 octobre 2026 ; aucun avertissement de projet abandonné ne s\'applique donc.',
          'Moteurs : selon le projet, Whisper, whisper.cpp, Faster Whisper, modèles de type Whisper de Hugging Face ou API OpenAI.',
          'Coût : gratuit ; le code source est sous licence MIT sur GitHub.',
          'Plateformes : Windows, macOS et Linux ; les Mac Intel ne sont pris en charge que jusqu\'à la dernière version qui les inclut.',
          'Réserve : des statistiques anonymes de lancement sont envoyées par défaut et peuvent être désactivées.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s\'appuie sur le site du projet, le README, la documentation, GitHub Releases et le code source, consultés le 24 octobre 2026. PromptQuorum n\'a ni installé ni exécuté Buzz ; la précision et la vitesse ne sont donc pas évaluées.',
          },
        ],
      },
      overview: {
        id: 'what-is-buzz',
        title: 'Qu\'est-ce que Buzz ?',
        content: [
          '**Buzz est une application de bureau de transcription et de traduction fondée sur OpenAI Whisper, créée par Chidi Williams et développée en ouvert sur GitHub.** Le dépôt la décrit comme transcrivant et traduisant l\'audio hors ligne sur un ordinateur personnel, et le site du projet s\'appelle Buzz Captions.',
          'Le site décrit deux éditions : « Buzz Classic », l\'application libre et gratuite pour Windows, Linux et macOS (Intel), et une édition native distincte, « Buzz on macOS ». Ce test porte sur l\'application libre ; le lien App Store du site a renvoyé une page « introuvable » le 24 octobre 2026, l\'édition native n\'a donc pas été évaluée.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l\'obtenir',
        content: [
          '**Buzz se télécharge gratuitement pour Windows, macOS et Linux, avec des installateurs sur GitHub Releases et SourceForge et des paquets Flatpak et Snap pour Linux.**',
        ],
        columns: ['Option', 'Comment l\'obtenir'],
        rows: [
          { Option: 'Site web', 'Comment l\'obtenir': '[buzzcaptions.com](https://buzzcaptions.com)' },
          { Option: 'macOS', 'Comment l\'obtenir': '.dmg depuis [GitHub Releases](https://github.com/chidiwilliams/buzz/releases)' },
          {
            Option: 'Windows',
            'Comment l\'obtenir': '.exe plus deux fichiers .bin, non signé ; [GitHub Releases](https://github.com/chidiwilliams/buzz/releases)',
          },
          {
            Option: 'Linux',
            'Comment l\'obtenir': '[Flatpak](https://flathub.org/apps/io.github.chidiwilliams.Buzz), [Snap](https://snapcraft.io/buzz) ou AppImage',
          },
          { Option: 'Python', 'Comment l\'obtenir': '`pip install buzz-captions`, ffmpeg requis' },
          { Option: 'Prix et licence', 'Comment l\'obtenir': 'Gratuit, MIT ([code source](https://github.com/chidiwilliams/buzz))' },
          {
            Option: 'Politique de confidentialité',
            'Comment l\'obtenir': 'Aucune trouvée ; voir la [documentation Preferences](https://chidiwilliams.github.io/buzz/docs/preferences)',
          },
        ],
        note: 'Version testée : 1.4.5, publiée le 23 août 2026 selon GitHub Releases. La branche principale a évolué depuis (dernière modification le 17 octobre 2026) et indique déjà 1.4.6, non publiée. Sous Windows, téléchargez les trois fichiers et lancez le .exe ; l\'installateur n\'est pas signé, choisissez donc « Informations complémentaires » puis « Exécuter quand même ». [SourceForge](https://sourceforge.net/projects/buzz-captions/files/) héberge les mêmes installateurs. Mac Intel : 1.4.5 est la dernière version qui les prend en charge. L\'accélération Nvidia CUDA devient une installation séparée dans l\'application à partir de 1.4.6.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Tout ce qui suit provient du README, de la documentation et du site web ; PromptQuorum n\'a rien testé de cela.**',
        ],
        items: [
          '**Entrée.** Importez des fichiers audio et vidéo ou des liens YouTube, ou transcrivez en direct depuis un microphone ; une fenêtre de présentation affiche le texte en direct lors d\'événements.',
          '**Moteurs Whisper.** Whisper, whisper.cpp, Faster Whisper, modèles de type Whisper de Hugging Face ou API OpenAI, avec accélération Apple silicon, CUDA et Vulkan lorsqu\'elle est prise en charge.',
          '**Sortie.** Export en TXT, SRT et VTT (le site mentionne aussi le CSV). Une visionneuse propose recherche, lecture et réglage de la vitesse, et un outil de redimensionnement regroupe la longueur des sous-titres.',
          '**Extras.** Identification des locuteurs (pas sur macOS Intel), séparation de la parole avant transcription, horodatage par mot, dossier surveillé, interface en ligne de commande et plugins comme le résumé par IA et l\'export DOCX.',
          '**Langues et traduction.** Plus de 90 langues selon le site. Whisper traduit lui-même vers l\'anglais ; les autres langues cibles exigent une API compatible OpenAI, qui peut être un serveur local comme Ollama ou LM Studio.',
        ],
        note: 'La vitesse dépend du modèle et du matériel : le site avertit que la transcription peut ne pas être en temps réel, et la documentation suggère des modèles plus petits ou whisper.cpp en cas de lenteur, et un GPU avec au moins 6 Go de VRAM pour Faster Whisper.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**La transcription s\'exécute sur votre ordinateur avec les modèles téléchargés, selon le README et la documentation.** Trois choses peuvent néanmoins quitter la machine. Des statistiques anonymes de lancement (version de l\'application, paramètres régionaux, nom, version et architecture du système) sont envoyées à PostHog sauf si la variable d\'environnement BUZZ_DISABLE_TELEMETRY est définie, et l\'application interroge GitHub environ une fois par semaine pour détecter les nouvelles versions sauf si BUZZ_DISABLE_UPDATE_CHECK est définie (disponible depuis 1.4.5).',
          'Les fonctions facultatives ne contactent un service externe que si vous en configurez un : l\'API OpenAI pour la transcription, la traduction par IA et le plugin de résumé par IA (ou tout serveur compatible OpenAI que vous indiquez), ainsi que le téléchargement de liens YouTube. Une adresse d\'envoi peut aussi être configurée pour publier les transcriptions en direct sur un serveur.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ces affirmations proviennent de la documentation et de la lecture du code source le 24 octobre 2026 ; PromptQuorum n\'a pas inspecté le trafic réseau. Aucune politique de confidentialité propre n\'a été trouvée sur buzzcaptions.com ni dans le dépôt.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Précision et vitesse.** PromptQuorum n\'a pas exécuté Buzz ; l\'exactitude des mots et la vitesse de transcription sur n\'importe quel matériel ne sont donc pas évaluées.',
          '**Édition Mac App Store.** Le site promeut une édition macOS native, mais son lien App Store a renvoyé une page « introuvable » le 24 octobre 2026 ; son prix, sa version et ses fonctions n\'ont donc pas pu être vérifiés.',
          '**Installateur Windows.** Selon le projet, l\'installateur n\'est pas signé et comprend trois fichiers ; PromptQuorum ne l\'a ni analysé ni installé.',
          '**Documentation et version publiée.** Certaines parties de la documentation décrivent des fonctions de 1.4.6, comme l\'installation séparée de CUDA et les modèles whisper.cpp personnalisés, qui ne figurent pas dans la version 1.4.5.',
          '**Licences des modèles.** Les modèles Whisper et tout modèle Hugging Face chargé ont leurs propres licences ; PromptQuorum ne les a pas examinées, et ceci n\'est pas un avis juridique.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Appli', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            Appli: '[whisper.cpp](/fr/power-local-llm/whisper-cpp-review)',
            Plateformes: 'Windows, macOS, Linux',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Moteur en ligne de commande C/C++ que Buzz peut utiliser comme moteur ; pas d\'éditeur graphique de sous-titres',
          },
          {
            Appli: '[Faster-Whisper](/fr/power-local-llm/faster-whisper-review)',
            Plateformes: 'Windows, macOS, Linux',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Bibliothèque Python que Buzz peut utiliser comme moteur ; destinée aux développeurs qui l\'automatisent',
          },
          {
            Appli: '[MacWhisper](/fr/power-local-llm/macwhisper-review)',
            Plateformes: 'macOS',
            'Prix / licence': 'Niveau gratuit / Pro payant',
            'Différence clé': 'Appli Mac propriétaire à l\'interface soignée ; Mac uniquement',
          },
        ],
        note: 'whisper.cpp et Faster-Whisper sont des moteurs que Buzz peut exécuter ; ils le complètent donc plutôt qu\'ils ne le remplacent. Vérifiez le prix, la licence et les plateformes actuels de chaque appli sur sa propre fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Puis-je utiliser Buzz sur un ordinateur sans internet ?',
            a: 'Oui, selon la FAQ du projet : téléchargez les modèles sur un autre ordinateur, puis copiez le dossier des modèles (Help, Preferences, Models, « Show file location » l\'ouvre) au même endroit sur la machine hors ligne. Un script download-models.py du dépôt aide à préparer le cache.',
          },
          {
            q: 'Buzz peut-il traduire vers d\'autres langues que l\'anglais ?',
            a: 'La tâche « Translate » propre à Whisper ne produit que de l\'anglais, et le modèle Large-V3-Turbo ne la prend pas en charge. Les autres langues cibles exigent une API compatible OpenAI, qui peut être un service cloud ou un serveur local comme Ollama ou LM Studio.',
          },
          {
            q: 'Comment transcrire ce que mon ordinateur est en train de lire ?',
            a: 'Selon la FAQ, dirigez la sortie de l\'application vers un périphérique audio virtuel, comme BlackHole sous macOS, VB-CABLE sous Windows ou PulseAudio Volume Control sous Linux, puis sélectionnez-le comme entrée dans Buzz.',
          },
          {
            q: 'Quel modèle Whisper choisir ?',
            a: 'La FAQ indique que les petits modèles sont plus rapides et moins précis, et recommande de les tester dans votre langue. Elle ajoute que Large-V3 peut parfois inventer des mots et que le modèle Turbo équilibre vitesse et précision.',
          },
          {
            q: 'Puis-je piloter Buzz par script ?',
            a: 'Oui. La commande buzz add accepte des fichiers ou des URL ainsi que des options pour la tâche, le type et la taille du modèle, la langue, le prompt et l\'horodatage par mot, et peut s\'exécuter sans ouvrir la fenêtre grâce à --hide-gui.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Buzz est un moyen gratuit, libre et activement maintenu de transformer des enregistrements en transcriptions et en sous-titres sur votre propre ordinateur, avec le choix entre plusieurs moteurs Whisper et un éditeur intégré. En contrepartie, l\'installateur Windows n\'est pas signé, les Mac Intel sont laissés de côté après 1.4.5, les statistiques anonymes de lancement sont activées par défaut, et la vitesse et la précision dépendent du modèle et du matériel, ce que PromptQuorum n\'a pas testé. Elle convient à ceux qui veulent un outil Whisper graphique sans abonnement ; qui exige un fonctionnement strictement hors ligne devrait désactiver la télémétrie et la vérification des mises à jour et éviter les options cloud.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de Buzz Captions](https://buzzcaptions.com) — éditions, fonctions et liens de téléchargement, consultés le 24 octobre 2026.',
          '[Buzz sur GitHub](https://github.com/chidiwilliams/buzz) — README, licence MIT, code source et historique des commits, consultés le 24 octobre 2026.',
          '[Version 1.4.5 de Buzz](https://github.com/chidiwilliams/buzz/releases/tag/v1.4.5) — installateurs et notes de version, publiée le 23 août 2026.',
          '[Documentation de Buzz](https://chidiwilliams.github.io/buzz/docs/preferences) — préférences, variables de télémétrie et de vérification des mises à jour, FAQ et installation, consultées le 24 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de whisper.cpp](/fr/power-local-llm/whisper-cpp-review) — le moteur C/C++ que Buzz peut exécuter comme moteur.',
          '[Test de Faster-Whisper](/fr/power-local-llm/faster-whisper-review) — l\'implémentation Python optimisée de Whisper.',
          '[Test de MacWhisper](/fr/power-local-llm/macwhisper-review) — une appli de transcription payante réservée au Mac.',
          '[Comparatif de la reconnaissance vocale locale Whisper](/fr/power-local-llm/local-whisper-stt-comparison) — le comparatif de catégorie auquel appartient ce test.',
          '[Annuaire des logiciels de LLM locaux](/fr/directory) — le catalogue complet des outils d\'IA locale.',
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
    heroImage: '/images/buzz-captions-review-hero-ja.webp',
    title: 'Buzzレビュー：Whisperで字幕も作れる無料のオフライン文字起こしアプリ',
    seoTitle: 'Buzzレビュー：無料のオフライン文字起こし・字幕アプリ',
    intro: 'Buzzは、[Chidi Williams](https://github.com/chidiwilliams/buzz)氏が公開している無料のオープンソース・デスクトップアプリです。OpenAIのWhisperモデルを使い、音声や動画をお使いのパソコン上で文字起こし・翻訳し、字幕として書き出せます。Windows、macOS、Linuxで動作し、ライセンスはMITです。このレビューは、2026年10月24日に確認したプロジェクトの公式サイト、README、ドキュメント、リリースページ、ソースコードに基づきます。PromptQuorumは実際に試用していません。',
    metaDescription: 'Buzzレビュー：Whisperで音声・動画をオフラインで文字起こし・翻訳し、SRT/VTT字幕を書き出せる無料のMITライセンスのデスクトップアプリ。未検証の点も整理します。',
    twitterDescription: 'Buzzレビュー：Windows・macOS・Linuxで使える無料のオープンソースWhisperアプリ。オフライン文字起こしと字幕作成について、確認できた点とできなかった点。',
    audience: 'ポッドキャスター、ジャーナリスト、動画編集者、学生など、録音を自分のパソコンで文字起こしや字幕にしたく、情報源で確認できた内容を知りたい方。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Buzz レビュー',
    targetKeywords: [
      'buzz レビュー',
      'buzz captions',
      'whisper オフライン 文字起こし アプリ',
      '字幕 自動生成 無料 オフライン',
      'whisper デスクトップ windows mac linux',
      '音声 文字起こし オフライン 無料',
      'buzz whisper 文字起こし',
    ],
    current_models_mentioned: ['Whisper', 'whisper.cpp', 'Faster Whisper'],
    current_hardware_mentioned: ['Apple silicon', 'Nvidia GPU', 'CPU'],
    leadAnswerBlock: '**Buzz（バージョン1.4.5）は、Whisper音声認識モデルを使って、音声や動画をお使いのパソコン上でテキストと字幕に変換する、Windows・macOS・Linux向けの無料デスクトップアプリです。** MITライセンスのオープンソースで、ここでの記述はすべてプロジェクトの公式サイト、README、ドキュメント、リリースページ、ソースコードに基づきます。',
    quickAnswerTop: {
      ja: {
        question: 'Buzzは本当にオフラインで動きますか？',
        answer: 'プロジェクトによれば、はい。モデルを一度ダウンロードした後は、文字起こしはお使いのパソコン上で実行され、クラウド機能は任意で有効にするものです。',
        bullets: [
          '音声・動画ファイルやYouTubeのリンクを取り込むか、マイクからリアルタイムで文字起こしできます。',
          'TXT、SRT、VTTで書き出し、内蔵ビューアで字幕の編集やまとめ直しができます。',
          '話者識別（任意）と、新しいファイルを自動処理するフォルダ監視があります。',
          'コマンドラインとプラグインの仕組みで、自動化できます。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '簡易回答', anchor: 'quick-answer' },
      { label: 'Buzzとは', anchor: 'what-is-buzz' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: 'データの流れとプライバシー', anchor: 'privacy' },
      { label: '確認できなかった点', anchor: 'who-should-not-use' },
      { label: '競合と代替アプリ', anchor: 'vs-alternatives' },
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
            text: 'Buzzは、OpenAIのWhisperモデルで音声や動画を自分のパソコン上で文字起こし・翻訳し、字幕やテキストを書き出す、無料でMITライセンスのデスクトップアプリです。',
          },
          {
            type: 'plain-terms',
            text: '録音ファイルを取り込むかマイクをオンにしてWhisperモデルを選ぶと、クラウド機能を選ばない限り、Buzzがお使いのパソコン上でテキストと時刻付き字幕を作成します。',
          },
        ],
        items: [
          '保守状況：最新リリースは2026年8月23日、コードの最終更新は2026年10月17日のため、放置プロジェクトの警告は該当しません。',
          'バックエンド：プロジェクトによれば、Whisper、whisper.cpp、Faster Whisper、Whisper系のHugging Faceモデル、OpenAI APIに対応します。',
          '費用：無料。ソースコードはGitHubでMITライセンスです。',
          '対応OS：Windows、macOS、Linux。Intel Macは、対応する最後のリリースまでです。',
          '注意点：匿名の起動統計が既定で送信されますが、無効にできます。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、2026年10月24日に確認したプロジェクトの公式サイト、README、ドキュメント、GitHub Releases、ソースコードに基づきます。PromptQuorumはBuzzをインストールも実行もしていないため、精度と速度は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-buzz',
        title: 'Buzzとは',
        content: [
          '**Buzzは、OpenAIのWhisperを基盤とした文字起こし・翻訳のデスクトップアプリで、Chidi Williams氏が作成し、GitHubで公開開発されています。** リポジトリでは、個人のパソコン上で音声をオフラインで文字起こし・翻訳するアプリと説明されており、プロジェクトのサイト名はBuzz Captionsです。',
          '公式サイトは2つのエディションを紹介しています。無料のオープンソース版「Buzz Classic」（Windows、Linux、macOS（Intel））と、別のネイティブ版「Buzz on macOS」です。このレビューが扱うのはオープンソース版です。サイト上のApp Storeリンクは2026年10月24日に「見つかりません」のページを返したため、ネイティブ版は評価していません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Buzzは、Windows・macOS・Linux向けの無料ダウンロードで、インストーラーはGitHub ReleasesとSourceForgeにあり、LinuxにはFlatpakとSnapもあります。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          { '項目': '公式サイト', '入手方法': '[buzzcaptions.com](https://buzzcaptions.com)' },
          { '項目': 'macOS', '入手方法': '[GitHub Releases](https://github.com/chidiwilliams/buzz/releases)の.dmg' },
          {
            '項目': 'Windows',
            '入手方法': '.exeと.binファイル2つ（署名なし）、[GitHub Releases](https://github.com/chidiwilliams/buzz/releases)',
          },
          {
            '項目': 'Linux',
            '入手方法': '[Flatpak](https://flathub.org/apps/io.github.chidiwilliams.Buzz)、[Snap](https://snapcraft.io/buzz)、またはAppImage',
          },
          { '項目': 'Python', '入手方法': '`pip install buzz-captions`（ffmpegが必要）' },
          { '項目': '価格とライセンス', '入手方法': '無料、MIT（[ソースコード](https://github.com/chidiwilliams/buzz)）' },
          {
            '項目': 'プライバシーポリシー',
            '入手方法': '見つかりませんでした。[Preferencesのドキュメント](https://chidiwilliams.github.io/buzz/docs/preferences)を参照',
          },
        ],
        note: '確認したバージョン：1.4.5（GitHub Releasesによれば2026年8月23日公開）。メインブランチはその後も更新され（最終は2026年10月17日）、すでに1.4.6と記載されていますが、未リリースです。Windowsでは3つのファイルをすべてダウンロードして.exeを実行してください。インストーラーは署名されていないため、「詳細情報」から「実行」を選びます。[SourceForge](https://sourceforge.net/projects/buzz-captions/files/)にも同じインストーラーがあります。Intel Macについては、1.4.5が対応する最後のバージョンです。Nvidia CUDAによる高速化は、1.4.6以降、アプリ内で別途インストールする形になります。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: ['**以下はすべてREADME、ドキュメント、公式サイトに基づくもので、PromptQuorumは一切テストしていません。**'],
        items: [
          '**入力。** 音声・動画ファイルやYouTubeのリンクを取り込むか、マイクからリアルタイムで文字起こしします。イベント向けに、ライブ文字を表示するプレゼンテーションウィンドウもあります。',
          '**Whisperバックエンド。** Whisper、whisper.cpp、Faster Whisper、Whisper系のHugging Faceモデル、OpenAI APIに対応し、対応環境ではApple silicon、CUDA、Vulkanで高速化できます。',
          '**出力。** TXT、SRT、VTTで書き出せます（公式サイトにはCSVも記載）。ビューアには検索、再生、速度調整があり、リサイズ機能で字幕の長さをまとめ直せます。',
          '**追加機能。** 話者識別（Intel Macでは不可）、文字起こし前の音声分離、単語単位のタイムスタンプ、フォルダ監視、コマンドライン、AI要約やDOCX書き出しなどのプラグインがあります。',
          '**言語と翻訳。** 公式サイトによれば90以上の言語に対応します。Whisper自体は英語への翻訳のみで、他の言語への翻訳にはOpenAI互換APIが必要です。OllamaやLM Studioなどのローカルサーバーも使えます。',
        ],
        note: '速度はモデルとハードウェアによって変わります。公式サイトは、文字起こしがリアルタイムにならない場合があると注意しており、ドキュメントは、遅いときは小さいモデルやwhisper.cppのモデルを、Faster WhisperにはVRAM 6 GB以上のGPUを勧めています。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**READMEとドキュメントによれば、文字起こしはダウンロードしたモデルでお使いのパソコン上で実行されます。** それでも、次の3点は外部に出る可能性があります。匿名の起動統計（アプリのバージョン、ロケール、OSの名称・リリース・アーキテクチャ）は、環境変数BUZZ_DISABLE_TELEMETRYを設定しない限りPostHogに送信されます。また、環境変数BUZZ_DISABLE_UPDATE_CHECKを設定しない限り、アプリは週に1回程度GitHubで新バージョンを確認します（1.4.5以降）。',
          'オプション機能は、ユーザーが設定した場合にのみ外部サービスに接続します。文字起こし、AI翻訳、AI要約プラグインのためのOpenAI API（または指定したOpenAI互換サーバー）と、YouTubeリンクのダウンロードです。ライブの文字起こしをサーバーに送るアップロード先も設定できます。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらの記述は、2026年10月24日にドキュメントとソースコードを読んで確認したものです。PromptQuorumはネットワーク通信を検査していません。buzzcaptions.comにもリポジトリにも、独自のプライバシーポリシーは見つかりませんでした。',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**精度と速度。** PromptQuorumはBuzzを実行していないため、単語の正確さや各ハードウェアでの文字起こし速度は評価していません。',
          '**Mac App Store版。** 公式サイトはネイティブのmacOS版を案内していますが、そのApp Storeリンクは2026年10月24日に「見つかりません」のページを返したため、価格、バージョン、機能は確認できませんでした。',
          '**Windowsインストーラー。** プロジェクトによれば署名がなく、3つのファイルで構成されます。PromptQuorumはスキャンもインストールもしていません。',
          '**ドキュメントとリリースの差。** ドキュメントの一部は、CUDAの別途インストールやカスタムwhisper.cppモデルなど、1.4.5リリースに含まれない1.4.6の機能を説明しています。',
          '**モデルのライセンス。** Whisperモデルや読み込むHugging Faceモデルには、それぞれ独自のライセンスがあります。PromptQuorumは確認しておらず、法的助言ではありません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替アプリ',
        columns: ['アプリ', '対応OS', '価格／ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[whisper.cpp](/ja/power-local-llm/whisper-cpp-review)',
            '対応OS': 'Windows、macOS、Linux',
            '価格／ライセンス': '無料／MIT',
            '主な違い': 'Buzzがバックエンドとして使えるC/C++のコマンドラインエンジン。字幕のGUIエディタはない',
          },
          {
            'アプリ': '[Faster-Whisper](/ja/power-local-llm/faster-whisper-review)',
            '対応OS': 'Windows、macOS、Linux',
            '価格／ライセンス': '無料／MIT',
            '主な違い': 'Buzzがバックエンドとして使えるPythonライブラリ。スクリプトで使う開発者向け',
          },
          {
            'アプリ': '[MacWhisper](/ja/power-local-llm/macwhisper-review)',
            '対応OS': 'macOS',
            '価格／ライセンス': '無料枠／有料Pro',
            '主な違い': '洗練された画面を持つクローズドソースのMacアプリ。Mac専用',
          },
        ],
        note: 'whisper.cppとFaster-WhisperはBuzzが実行できるエンジンのため、置き換えというより補完の関係です。各アプリの最新の価格、ライセンス、対応OSは、それぞれの掲載ページでご確認ください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'インターネットのないパソコンでBuzzを使えますか？',
            a: 'はい、プロジェクトのFAQによれば可能です。別のパソコンでモデルをダウンロードし、モデルのフォルダ（Help、Preferences、Modelsの「Show file location」で開けます）をオフラインのパソコンの同じ場所にコピーします。リポジトリのdownload-models.pyスクリプトでキャッシュの準備もできます。',
          },
          {
            q: 'Buzzは英語以外の言語へ翻訳できますか？',
            a: 'Whisper自体の「Translate」タスクは英語への出力のみで、Large-V3-Turboモデルは対応していません。他の言語への翻訳にはOpenAI互換APIが必要で、クラウドサービスでも、OllamaやLM Studioのようなローカルサーバーでも構いません。',
          },
          {
            q: 'パソコンで再生している音声を文字起こしするには？',
            a: 'FAQによれば、アプリの出力を仮想オーディオデバイスに回します。macOSではBlackHole、WindowsではVB-CABLE、LinuxではPulseAudio Volume Controlなどを使い、Buzzの入力にそのデバイスを選びます。',
          },
          {
            q: 'どのWhisperモデルを選べばよいですか？',
            a: 'FAQは、小さいモデルほど速く精度は低く、自分の言語で試すことを勧めています。また、Large-V3はまれに存在しない単語を作ることがあり、Turboモデルは速度と精度のバランスを取るとしています。',
          },
          {
            q: 'Buzzをスクリプトから実行できますか？',
            a: 'はい。buzz addコマンドは、ファイルやURLに加えて、タスク、モデルの種類とサイズ、言語、プロンプト、単語タイムスタンプのオプションを受け付け、--hide-guiを付けるとウィンドウを開かずに実行できます。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'Buzzは、活発に保守されている無料のオープンソースで、録音を自分のパソコン上で文字起こしや字幕にでき、複数のWhisperバックエンドと内蔵エディタを選べます。一方で、Windowsインストーラーは署名がなく、Intel Macは1.4.5以降置き去りになり、匿名の起動統計は既定で有効で、速度と精度はモデルとハードウェア次第であり、PromptQuorumはそれらを試していません。サブスクなしで使えるWhisperのGUIツールを探す方に向いています。厳密なオフライン運用が必要な場合は、テレメトリと更新確認を無効にし、クラウド機能を避けてください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Buzz Captions公式サイト](https://buzzcaptions.com) — エディション、機能、ダウンロードリンク。2026年10月24日に確認。',
          '[GitHubのBuzz](https://github.com/chidiwilliams/buzz) — README、MITライセンス、ソースコード、コミット履歴。2026年10月24日に確認。',
          '[Buzz 1.4.5リリース](https://github.com/chidiwilliams/buzz/releases/tag/v1.4.5) — インストーラーとリリースノート。2026年8月23日公開。',
          '[Buzzドキュメント](https://chidiwilliams.github.io/buzz/docs/preferences) — 設定、テレメトリと更新確認の変数、FAQ、インストール。2026年10月24日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[whisper.cppレビュー](/ja/power-local-llm/whisper-cpp-review) — Buzzがバックエンドとして実行できるC/C++エンジン。',
          '[Faster-Whisperレビュー](/ja/power-local-llm/faster-whisper-review) — 最適化されたPython版Whisper実装。',
          '[MacWhisperレビュー](/ja/power-local-llm/macwhisper-review) — Mac専用の有料文字起こしアプリ。',
          '[ローカルWhisper音声認識の比較](/ja/power-local-llm/local-whisper-stt-comparison) — このレビューが属するカテゴリ比較。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの総合カタログ。',
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
    heroImage: '/images/buzz-captions-review-hero-pt.webp',
    title: 'Análise do Buzz: transcrição gratuita offline com Whisper e legendas',
    seoTitle: 'Análise do Buzz: app gratuito de transcrição offline',
    intro: 'O Buzz é um app de desktop gratuito e de código aberto de [Chidi Williams](https://github.com/chidiwilliams/buzz) que transcreve e traduz áudio e vídeo no seu próprio computador com modelos Whisper da OpenAI e exporta legendas. Funciona em Windows, macOS e Linux e tem licença MIT. Esta análise se baseia no site do projeto, no README, na documentação, na página de versões e no código-fonte, verificados em 24 de outubro de 2026; a PromptQuorum não testou o app.',
    metaDescription: 'Análise do Buzz: app de desktop gratuito (MIT) que transcreve e traduz áudio e vídeo offline com Whisper e exporta legendas SRT e VTT. Não testado.',
    twitterDescription: 'Análise do Buzz: app Whisper gratuito e de código aberto para transcrever offline e criar legendas no Windows, macOS e Linux. O que as fontes confirmam e o que não.',
    audience: 'Podcasters, jornalistas, editores de vídeo e estudantes que querem transformar gravações em texto e legendas no próprio computador e precisam saber o que as fontes confirmam.',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Análise do Buzz',
    targetKeywords: [
      'análise buzz',
      'buzz captions',
      'app de transcrição whisper offline',
      'gerador de legendas grátis offline',
      'app whisper desktop windows mac linux',
      'transcrever áudio offline grátis',
      'buzz transcrição whisper',
    ],
    current_models_mentioned: ['Whisper', 'whisper.cpp', 'Faster Whisper'],
    current_hardware_mentioned: ['Apple silicon', 'Nvidia GPU', 'CPU'],
    leadAnswerBlock: '**O Buzz (versão 1.4.5) é um app de desktop gratuito para Windows, macOS e Linux que transforma áudio e vídeo em texto e legendas no seu próprio computador usando modelos de reconhecimento de fala Whisper.** É de código aberto com licença MIT, e cada afirmação aqui vem do site do projeto, do README, da documentação, da página de versões e do código-fonte.',
    quickAnswerTop: {
      pt: {
        question: 'O Buzz realmente funciona offline?',
        answer: 'Segundo o projeto, sim: depois de um download único do modelo, a transcrição roda no seu próprio computador, e as opções na nuvem precisam ser ativadas por você.',
        bullets: [
          'Importe áudio, vídeo ou links do YouTube, ou transcreva ao vivo pelo microfone.',
          'Exporte TXT, SRT e VTT e edite ou reagrupe as legendas no visualizador integrado.',
          'Identificação de falantes opcional e uma pasta monitorada para arquivos novos.',
          'Uma interface de linha de comando e um sistema de plugins para automação.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Buzz?', anchor: 'what-is-buzz' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Fluxo de dados e privacidade', anchor: 'privacy' },
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
            text: 'O Buzz é um app de desktop gratuito com licença MIT que transcreve e traduz áudio e vídeo no seu próprio computador com modelos Whisper da OpenAI e exporta legendas e transcrições.',
          },
          {
            type: 'plain-terms',
            text: 'Você arrasta uma gravação ou liga o microfone, escolhe um modelo Whisper, e o Buzz escreve o texto e as legendas com marcação de tempo na sua máquina, a menos que você escolha uma opção na nuvem.',
          },
        ],
        items: [
          'Manutenção: a versão mais recente saiu em 23 de agosto de 2026 e o código foi alterado pela última vez em 17 de outubro de 2026, então nenhum aviso de projeto abandonado se aplica.',
          'Motores: segundo o projeto, Whisper, whisper.cpp, Faster Whisper, modelos tipo Whisper do Hugging Face ou a API da OpenAI.',
          'Custo: grátis; o código-fonte tem licença MIT no GitHub.',
          'Plataformas: Windows, macOS e Linux; Macs Intel só são suportados até a última versão que os inclui.',
          'Ressalva: estatísticas anônimas de inicialização são enviadas por padrão e podem ser desativadas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site do projeto, no README, na documentação, no GitHub Releases e no código-fonte, verificados em 24 de outubro de 2026. A PromptQuorum não instalou nem executou o Buzz, portanto precisão e velocidade não são avaliadas.',
          },
        ],
      },
      overview: {
        id: 'what-is-buzz',
        title: 'O que é o Buzz?',
        content: [
          '**O Buzz é um app de desktop de transcrição e tradução baseado no OpenAI Whisper, criado por Chidi Williams e desenvolvido abertamente no GitHub.** O repositório o descreve como transcrevendo e traduzindo áudio offline em um computador pessoal, e o site do projeto se chama Buzz Captions.',
          'O site descreve duas edições: o «Buzz Classic», app gratuito e de código aberto para Windows, Linux e macOS (Intel), e uma edição nativa separada, o «Buzz on macOS». Esta análise trata do app de código aberto; o link da App Store no site retornou uma página de «não encontrado» em 24 de outubro de 2026, então a edição nativa não foi avaliada.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Buzz é um download gratuito para Windows, macOS e Linux, com instaladores no GitHub Releases e no SourceForge e pacotes Flatpak e Snap para Linux.**',
        ],
        columns: ['Opção', 'Como obter'],
        rows: [
          { 'Opção': 'Site', 'Como obter': '[buzzcaptions.com](https://buzzcaptions.com)' },
          { 'Opção': 'macOS', 'Como obter': '.dmg no [GitHub Releases](https://github.com/chidiwilliams/buzz/releases)' },
          {
            'Opção': 'Windows',
            'Como obter': '.exe mais dois arquivos .bin, sem assinatura; [GitHub Releases](https://github.com/chidiwilliams/buzz/releases)',
          },
          {
            'Opção': 'Linux',
            'Como obter': '[Flatpak](https://flathub.org/apps/io.github.chidiwilliams.Buzz), [Snap](https://snapcraft.io/buzz) ou AppImage',
          },
          { 'Opção': 'Python', 'Como obter': '`pip install buzz-captions`, requer ffmpeg' },
          { 'Opção': 'Preço e licença', 'Como obter': 'Grátis, MIT ([código-fonte](https://github.com/chidiwilliams/buzz))' },
          {
            'Opção': 'Política de privacidade',
            'Como obter': 'Não encontrada; veja a [documentação de Preferences](https://chidiwilliams.github.io/buzz/docs/preferences)',
          },
        ],
        note: 'Versão analisada: 1.4.5, publicada em 23 de agosto de 2026 segundo o GitHub Releases. O ramo principal mudou desde então (por último em 17 de outubro de 2026) e já indica 1.4.6, que não foi lançada. No Windows, baixe os três arquivos e execute o .exe; o instalador não é assinado, então escolha «Mais informações» e «Executar assim mesmo». O [SourceForge](https://sourceforge.net/projects/buzz-captions/files/) hospeda os mesmos instaladores. Macs Intel: a 1.4.5 é a última versão que os suporta. A aceleração Nvidia CUDA passa a ser uma instalação separada dentro do app a partir da 1.4.6.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Tudo a seguir vem do README, da documentação e do site; a PromptQuorum não testou nada disso.**',
        ],
        items: [
          '**Entrada.** Importe arquivos de áudio e vídeo ou links do YouTube, ou transcreva ao vivo pelo microfone; uma janela de apresentação mostra o texto ao vivo durante eventos.',
          '**Motores Whisper.** Whisper, whisper.cpp, Faster Whisper, modelos tipo Whisper do Hugging Face ou a API da OpenAI, com aceleração para Apple silicon, CUDA e Vulkan onde houver suporte.',
          '**Saída.** Exporte TXT, SRT e VTT (o site também menciona CSV). Um visualizador oferece busca, reprodução e controle de velocidade, e uma ferramenta de redimensionamento reagrupa o tamanho das legendas.',
          '**Extras.** Identificação de falantes (não no macOS Intel), separação da fala antes da transcrição, marcação de tempo por palavra, pasta monitorada, interface de linha de comando e plugins como resumo por IA e exportação para DOCX.',
          '**Idiomas e tradução.** Mais de 90 idiomas segundo o site. O Whisper traduz sozinho para o inglês; outros idiomas de destino exigem uma API compatível com a OpenAI, que pode ser um servidor local como Ollama ou LM Studio.',
        ],
        note: 'A velocidade depende do modelo e do hardware: o site avisa que a transcrição pode não ser em tempo real, e a documentação sugere modelos menores ou do whisper.cpp quando está lenta, e uma GPU com pelo menos 6 GB de VRAM para o Faster Whisper.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**A transcrição roda no seu computador com os modelos baixados, segundo o README e a documentação.** Ainda assim, três coisas podem sair da máquina. Estatísticas anônimas de inicialização (versão do app, localidade, nome, versão e arquitetura do sistema operacional) vão para o PostHog, a menos que a variável de ambiente BUZZ_DISABLE_TELEMETRY esteja definida, e o app consulta o GitHub cerca de uma vez por semana por versões novas, a menos que BUZZ_DISABLE_UPDATE_CHECK esteja definida (disponível desde a 1.4.5).',
          'Os recursos opcionais só contatam um serviço externo se você configurar um: a API da OpenAI para transcrição, tradução com IA e o plugin de resumo por IA (ou qualquer servidor compatível com a OpenAI para o qual você aponte), além do download de links do YouTube. Também é possível configurar um endereço de envio para publicar transcrições ao vivo em um servidor.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas afirmações vêm da documentação e da leitura do código-fonte em 24 de outubro de 2026; a PromptQuorum não inspecionou o tráfego de rede. Nenhuma política de privacidade própria foi encontrada em buzzcaptions.com nem no repositório.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Precisão e velocidade.** A PromptQuorum não executou o Buzz, então a exatidão das palavras e a velocidade de transcrição em qualquer hardware não são avaliadas.',
          '**Edição da Mac App Store.** O site promove uma edição nativa para macOS, mas o link da App Store retornou uma página de «não encontrado» em 24 de outubro de 2026, então preço, versão e recursos não puderam ser verificados.',
          '**Instalador do Windows.** Segundo o projeto, o instalador não é assinado e tem três arquivos; a PromptQuorum não o analisou nem o instalou.',
          '**Documentação versus versão lançada.** Partes da documentação descrevem recursos da 1.4.6, como a instalação separada do CUDA e os modelos personalizados do whisper.cpp, que não estão na versão 1.4.5.',
          '**Licenças dos modelos.** Os modelos Whisper e qualquer modelo do Hugging Face que você carregue têm licenças próprias; a PromptQuorum não as revisou, e isto não é aconselhamento jurídico.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            App: '[whisper.cpp](/pt/power-local-llm/whisper-cpp-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Motor de linha de comando em C/C++ que o Buzz pode usar como motor; sem editor gráfico de legendas',
          },
          {
            App: '[Faster-Whisper](/pt/power-local-llm/faster-whisper-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Biblioteca Python que o Buzz pode usar como motor; voltada a desenvolvedores que a automatizam',
          },
          {
            App: '[MacWhisper](/pt/power-local-llm/macwhisper-review)',
            Plataformas: 'macOS',
            'Preço / licença': 'Nível grátis / Pro pago',
            'Diferença principal': 'App de Mac de código fechado com interface refinada; só para Mac',
          },
        ],
        note: 'whisper.cpp e Faster-Whisper são motores que o Buzz pode executar, então o complementam mais do que o substituem; confirme o preço, a licença e as plataformas atuais de cada app na própria página dele.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso usar o Buzz em um computador sem internet?',
            a: 'Sim, segundo o FAQ do projeto: baixe os modelos em outro computador e copie a pasta de modelos (Help, Preferences, Models, «Show file location» a abre) para o mesmo lugar na máquina offline. Um script download-models.py no repositório ajuda a preparar o cache.',
          },
          {
            q: 'O Buzz traduz para outros idiomas além do inglês?',
            a: 'A tarefa «Translate» do próprio Whisper só gera inglês, e o modelo Large-V3-Turbo não a suporta. Os demais idiomas de destino exigem uma API compatível com a OpenAI, que pode ser um serviço na nuvem ou um servidor local como Ollama ou LM Studio.',
          },
          {
            q: 'Como transcrevo o que meu computador está reproduzindo?',
            a: 'Segundo o FAQ, direcione a saída do aplicativo para um dispositivo de áudio virtual, como BlackHole no macOS, VB-CABLE no Windows ou PulseAudio Volume Control no Linux, e selecione-o como entrada no Buzz.',
          },
          {
            q: 'Qual modelo Whisper devo escolher?',
            a: 'O FAQ diz que modelos menores são mais rápidos e menos precisos, e recomenda testá-los no seu idioma. Acrescenta que o Large-V3 às vezes pode inventar palavras e que o modelo Turbo equilibra velocidade e precisão.',
          },
          {
            q: 'Posso executar o Buzz por scripts?',
            a: 'Sim. O comando buzz add aceita arquivos ou URLs e opções de tarefa, tipo e tamanho do modelo, idioma, prompt e marcação de tempo por palavra, e pode rodar sem abrir a janela com --hide-gui.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: 'O Buzz é uma forma gratuita, de código aberto e mantida ativamente de transformar gravações em transcrições e legendas no seu próprio computador, com vários motores Whisper à escolha e um editor integrado. Em contrapartida, o instalador do Windows não é assinado, Macs Intel ficam para trás após a 1.4.5, as estatísticas anônimas de inicialização vêm ativadas por padrão, e velocidade e precisão dependem do modelo e do hardware, o que a PromptQuorum não testou. Serve a quem quer uma ferramenta gráfica de Whisper sem assinatura; quem precisa operar estritamente offline deve desativar a telemetria e a verificação de atualizações e evitar as opções na nuvem.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Buzz Captions](https://buzzcaptions.com) — edições, recursos e links de download, verificados em 24 de outubro de 2026.',
          '[Buzz no GitHub](https://github.com/chidiwilliams/buzz) — README, licença MIT, código-fonte e histórico de commits, verificados em 24 de outubro de 2026.',
          '[Versão 1.4.5 do Buzz](https://github.com/chidiwilliams/buzz/releases/tag/v1.4.5) — instaladores e notas da versão, publicada em 23 de agosto de 2026.',
          '[Documentação do Buzz](https://chidiwilliams.github.io/buzz/docs/preferences) — preferências, variáveis de telemetria e verificação de atualizações, FAQ e instalação, verificadas em 24 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do whisper.cpp](/pt/power-local-llm/whisper-cpp-review) — o motor em C/C++ que o Buzz pode executar como motor.',
          '[Análise do Faster-Whisper](/pt/power-local-llm/faster-whisper-review) — a implementação otimizada do Whisper em Python.',
          '[Análise do MacWhisper](/pt/power-local-llm/macwhisper-review) — um app de transcrição pago só para Mac.',
          '[Comparativo de reconhecimento de fala local com Whisper](/pt/power-local-llm/local-whisper-stt-comparison) — o comparativo de categoria a que esta análise pertence.',
          '[Diretório de software de LLM locais](/pt/directory) — o catálogo completo de ferramentas de IA local.',
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
    heroImage: '/images/buzz-captions-review-hero-ar.webp',
    title: 'مراجعة Buzz: تطبيق مجاني لنسخ الصوت وإنشاء الترجمات دون اتصال بواسطة Whisper',
    seoTitle: 'مراجعة Buzz: تطبيق مجاني للنسخ والترجمات دون اتصال',
    intro: 'Buzz تطبيق سطح مكتب مجاني ومفتوح المصدر من [Chidi Williams](https://github.com/chidiwilliams/buzz) ينسخ الصوت والفيديو ويترجمهما على حاسوبك الخاص بنماذج Whisper من OpenAI ويصدّر الترجمات النصية. يعمل على Windows وmacOS وLinux ويخضع لرخصة MIT. تستند هذه المراجعة إلى موقع المشروع وملف README والتوثيق وصفحة الإصدارات والشيفرة المصدرية، التي جرى فحصها في 24 أكتوبر 2026؛ ولم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription: 'مراجعة Buzz: تطبيق سطح مكتب مجاني برخصة MIT ينسخ الصوت والفيديو ويترجمهما دون اتصال بواسطة Whisper ويصدّر ترجمات SRT وVTT. لم يُختبر عمليًا.',
    twitterDescription: 'مراجعة Buzz: تطبيق Whisper مجاني ومفتوح المصدر للنسخ دون اتصال وإنشاء الترجمات على Windows وmacOS وLinux. ما تؤكده المصادر وما لا تؤكده.',
    audience: 'مقدّمو البودكاست والصحفيون ومحررو الفيديو والطلاب الذين يريدون تحويل التسجيلات إلى نص وترجمات على حاسوبهم ويحتاجون إلى معرفة ما تؤكده المصادر.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Buzz',
    targetKeywords: [
      'مراجعة buzz',
      'buzz captions',
      'تطبيق نسخ whisper دون اتصال',
      'إنشاء ترجمات مجانًا دون اتصال',
      'تطبيق whisper لسطح المكتب windows mac linux',
      'تفريغ الصوت دون اتصال مجانًا',
      'نسخ buzz whisper',
    ],
    current_models_mentioned: ['Whisper', 'whisper.cpp', 'Faster Whisper'],
    current_hardware_mentioned: ['Apple silicon', 'Nvidia GPU', 'CPU'],
    leadAnswerBlock: '**Buzz (الإصدار 1.4.5) تطبيق سطح مكتب مجاني لأنظمة Windows وmacOS وLinux يحوّل الصوت والفيديو إلى نص وترجمات على حاسوبك الخاص باستخدام نماذج التعرف على الكلام Whisper.** وهو مفتوح المصدر برخصة MIT، وكل عبارة هنا مأخوذة من موقع المشروع وREADME والتوثيق وصفحة الإصدارات والشيفرة المصدرية.',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل Buzz فعلًا دون اتصال بالإنترنت؟',
        answer: 'بحسب المشروع، نعم: بعد تنزيل النموذج مرة واحدة يجري النسخ على حاسوبك الخاص، وخيارات السحابة لا تعمل إلا إذا فعّلتها بنفسك.',
        bullets: [
          'استيراد ملفات الصوت والفيديو أو روابط YouTube، أو النسخ المباشر من الميكروفون.',
          'تصدير TXT وSRT وVTT، وتحرير الترجمات أو إعادة تجميعها في العارض المدمج.',
          'تحديد المتحدثين اختياريًا ومجلد مراقَب للملفات الجديدة.',
          'واجهة سطر أوامر ونظام إضافات للأتمتة.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Buzz؟', anchor: 'what-is-buzz' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'الميزات المؤكدة من المصادر', anchor: 'key-features' },
      { label: 'تدفق البيانات والخصوصية', anchor: 'privacy' },
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
            text: 'Buzz تطبيق سطح مكتب مجاني برخصة MIT ينسخ الصوت والفيديو ويترجمهما على حاسوبك الخاص بنماذج OpenAI Whisper ويصدّر الترجمات والنصوص.',
          },
          {
            type: 'plain-terms',
            text: 'تستورد تسجيلًا أو تشغّل الميكروفون وتختار نموذج Whisper، فيكتب Buzz النص والترجمات المؤرَّخة زمنيًا على جهازك ما لم تختر خيارًا سحابيًا.',
          },
        ],
        items: [
          'الصيانة: صدر أحدث إصدار في 23 أغسطس 2026 وعُدّلت الشيفرة آخر مرة في 17 أكتوبر 2026، لذلك لا ينطبق تحذير المشروع المهجور.',
          'المحركات: بحسب المشروع، Whisper وwhisper.cpp وFaster Whisper ونماذج Hugging Face من نوع Whisper أو واجهة OpenAI البرمجية.',
          'التكلفة: مجاني؛ والشيفرة المصدرية برخصة MIT على GitHub.',
          'المنصات: Windows وmacOS وLinux؛ وأجهزة Mac بمعالج Intel مدعومة فقط حتى آخر إصدار يشملها.',
          'تنبيه: تُرسَل إحصاءات تشغيل مجهولة افتراضيًا ويمكن إيقافها.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى موقع المشروع وREADME والتوثيق وGitHub Releases والشيفرة المصدرية، التي جرى فحصها في 24 أكتوبر 2026. لم تثبّت PromptQuorum تطبيق Buzz ولم تشغّله، لذلك لا يُقيَّم الدقة ولا السرعة.',
          },
        ],
      },
      overview: {
        id: 'what-is-buzz',
        title: 'ما هو Buzz؟',
        content: [
          '**Buzz تطبيق سطح مكتب للنسخ والترجمة مبني على OpenAI Whisper، أنشأه Chidi Williams ويُطوَّر علنًا على GitHub.** يصفه المستودع بأنه ينسخ الصوت ويترجمه دون اتصال على حاسوب شخصي، واسم موقع المشروع Buzz Captions.',
          'يعرض الموقع إصدارين: «Buzz Classic»، التطبيق المجاني المفتوح المصدر لأنظمة Windows وLinux وmacOS (Intel)، وإصدارًا أصليًا منفصلًا هو «Buzz on macOS». تتناول هذه المراجعة التطبيق المفتوح المصدر؛ وقد أعاد رابط App Store في الموقع صفحة «غير موجود» في 24 أكتوبر 2026، لذلك لم يُقيَّم الإصدار الأصلي.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**Buzz تنزيل مجاني لأنظمة Windows وmacOS وLinux، وملفات التثبيت على GitHub Releases وSourceForge، وتتوفر حزم Flatpak وSnap لنظام Linux.**',
        ],
        columns: ['الخيار', 'كيف تحصل عليه'],
        rows: [
          { 'الخيار': 'الموقع', 'كيف تحصل عليه': '[buzzcaptions.com](https://buzzcaptions.com)' },
          { 'الخيار': 'macOS', 'كيف تحصل عليه': 'ملف .dmg من [GitHub Releases](https://github.com/chidiwilliams/buzz/releases)' },
          {
            'الخيار': 'Windows',
            'كيف تحصل عليه': 'ملف .exe مع ملفَّي .bin، غير موقَّع؛ [GitHub Releases](https://github.com/chidiwilliams/buzz/releases)',
          },
          {
            'الخيار': 'Linux',
            'كيف تحصل عليه': '[Flatpak](https://flathub.org/apps/io.github.chidiwilliams.Buzz) أو [Snap](https://snapcraft.io/buzz) أو AppImage',
          },
          { 'الخيار': 'Python', 'كيف تحصل عليه': '`pip install buzz-captions`، ويتطلب ffmpeg' },
          { 'الخيار': 'السعر والرخصة', 'كيف تحصل عليه': 'مجاني، MIT ([الشيفرة المصدرية](https://github.com/chidiwilliams/buzz))' },
          {
            'الخيار': 'سياسة الخصوصية',
            'كيف تحصل عليه': 'لم نجد واحدة؛ راجع [توثيق Preferences](https://chidiwilliams.github.io/buzz/docs/preferences)',
          },
        ],
        note: 'الإصدار الذي رُوجع: 1.4.5، ونُشر في 23 أغسطس 2026 بحسب GitHub Releases. تغيّر الفرع الرئيسي منذ ذلك الحين (آخر مرة في 17 أكتوبر 2026) ويشير بالفعل إلى 1.4.6 الذي لم يصدر بعد. على Windows نزّل الملفات الثلاثة كلها وشغّل ملف .exe؛ المثبّت غير موقَّع، لذلك اختر «مزيد من المعلومات» ثم «تشغيل على أي حال». يستضيف [SourceForge](https://sourceforge.net/projects/buzz-captions/files/) ملفات التثبيت نفسها. أجهزة Mac بمعالج Intel: الإصدار 1.4.5 هو آخر إصدار يدعمها. يصبح تسريع Nvidia CUDA تثبيتًا منفصلًا داخل التطبيق ابتداءً من 1.4.6.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات المؤكدة من المصادر',
        content: [
          '**كل ما يلي مأخوذ من README والتوثيق والموقع؛ ولم تختبر PromptQuorum أيًّا منه.**',
        ],
        items: [
          '**الإدخال.** استيراد ملفات الصوت والفيديو أو روابط YouTube، أو النسخ المباشر من الميكروفون؛ وتعرض نافذة العرض التقديمي النص المباشر في الفعاليات.',
          '**محركات Whisper.** Whisper وwhisper.cpp وFaster Whisper ونماذج Hugging Face من نوع Whisper أو واجهة OpenAI البرمجية، مع تسريع Apple silicon وCUDA وVulkan حيثما كان مدعومًا.',
          '**الإخراج.** تصدير TXT وSRT وVTT (ويذكر الموقع CSV أيضًا). يوفّر العارض البحث والتشغيل وضبط السرعة، وتعيد أداة تغيير الحجم تجميع طول الترجمات.',
          '**إضافات.** تحديد المتحدثين (غير متاح على macOS بمعالج Intel)، وفصل الكلام قبل النسخ، وطوابع زمنية لكل كلمة، ومجلد مراقَب، وواجهة سطر أوامر، وإضافات مثل التلخيص بالذكاء الاصطناعي والتصدير إلى DOCX.',
          '**اللغات والترجمة.** أكثر من 90 لغة بحسب الموقع. يترجم Whisper إلى الإنجليزية وحدها؛ أما اللغات الأخرى فتحتاج إلى واجهة برمجية متوافقة مع OpenAI، ويمكن أن تكون خادمًا محليًا مثل Ollama أو LM Studio.',
        ],
        note: 'تعتمد السرعة على النموذج والعتاد: يحذّر الموقع من أن النسخ قد لا يكون فوريًا، ويقترح التوثيق نماذج أصغر أو نماذج whisper.cpp عند البطء، ووحدة معالجة رسومية بذاكرة 6 GB على الأقل لـ Faster Whisper.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**بحسب README والتوثيق، يجري النسخ على حاسوبك بالنماذج التي نزّلتها.** ومع ذلك قد يغادر الجهاز ثلاثة أمور. تُرسَل إحصاءات تشغيل مجهولة (إصدار التطبيق والإعدادات الإقليمية واسم نظام التشغيل وإصداره ومعماريته) إلى PostHog ما لم يُضبط متغير البيئة BUZZ_DISABLE_TELEMETRY، ويتحقق التطبيق من GitHub بحثًا عن إصدارات جديدة مرة كل أسبوع تقريبًا ما لم يُضبط BUZZ_DISABLE_UPDATE_CHECK (متاح منذ 1.4.5).',
          'لا تتصل الميزات الاختيارية بخدمة خارجية إلا إذا أعددتها بنفسك: واجهة OpenAI البرمجية للنسخ والترجمة بالذكاء الاصطناعي وإضافة التلخيص (أو أي خادم متوافق مع OpenAI تحدده)، وتنزيل روابط YouTube. ويمكن أيضًا ضبط عنوان رفع لإرسال النصوص المباشرة إلى خادم.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تأتي هذه العبارات من التوثيق ومن قراءة الشيفرة المصدرية في 24 أكتوبر 2026؛ ولم تفحص PromptQuorum حركة الشبكة. لم نعثر على سياسة خصوصية مستقلة في buzzcaptions.com ولا في المستودع.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الدقة والسرعة.** لم تشغّل PromptQuorum تطبيق Buzz، لذلك لا تُقيَّم دقة الكلمات ولا سرعة النسخ على أي عتاد.',
          '**إصدار Mac App Store.** يروّج الموقع لإصدار أصلي لنظام macOS، لكن رابط App Store الخاص به أعاد صفحة «غير موجود» في 24 أكتوبر 2026، فتعذر التحقق من سعره وإصداره وميزاته.',
          '**مثبّت Windows.** بحسب المشروع، المثبّت غير موقَّع ويتألف من ثلاثة ملفات؛ ولم تفحصه PromptQuorum ولم تثبّته.',
          '**التوثيق مقابل الإصدار المنشور.** يصف جزء من التوثيق ميزات 1.4.6، مثل تثبيت CUDA المنفصل ونماذج whisper.cpp المخصصة، وهي غير موجودة في الإصدار 1.4.5.',
          '**رخص النماذج.** لنماذج Whisper وأي نماذج Hugging Face تحمّلها رخصها الخاصة؛ ولم تراجعها PromptQuorum، وهذا ليس استشارة قانونية.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأساسي'],
        rows: [
          {
            'التطبيق': '[whisper.cpp](/ar/power-local-llm/whisper-cpp-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر / الرخصة': 'مجاني / MIT',
            'الفرق الأساسي': 'محرك بسطر أوامر بلغة C/C++ يمكن لـ Buzz استخدامه كمحرك؛ بلا محرر رسومي للترجمات',
          },
          {
            'التطبيق': '[Faster-Whisper](/ar/power-local-llm/faster-whisper-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر / الرخصة': 'مجاني / MIT',
            'الفرق الأساسي': 'مكتبة Python يمكن لـ Buzz استخدامها كمحرك؛ موجهة للمطورين الذين يبرمجونها',
          },
          {
            'التطبيق': '[MacWhisper](/ar/power-local-llm/macwhisper-review)',
            'المنصات': 'macOS',
            'السعر / الرخصة': 'مستوى مجاني / Pro مدفوع',
            'الفرق الأساسي': 'تطبيق Mac مغلق المصدر بواجهة متقنة؛ لأجهزة Mac فقط',
          },
        ],
        note: 'whisper.cpp وFaster-Whisper محركان يمكن لـ Buzz تشغيلهما، فهما يكملانه أكثر مما يحلان محله؛ تحقق من السعر والرخصة والمنصات الحالية لكل تطبيق في صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل أستطيع استخدام Buzz على حاسوب بلا إنترنت؟',
            a: 'نعم، بحسب الأسئلة الشائعة للمشروع: نزّل النماذج على حاسوب آخر ثم انسخ مجلد النماذج (يفتحه الزر «Show file location» في Help ثم Preferences ثم Models) إلى المكان نفسه على الجهاز غير المتصل. ويساعد سكربت download-models.py في المستودع على تجهيز الذاكرة المؤقتة.',
          },
          {
            q: 'هل يترجم Buzz إلى لغات غير الإنجليزية؟',
            a: 'مهمة «Translate» في Whisper نفسه تُخرج الإنجليزية فقط، ولا يدعمها نموذج Large-V3-Turbo. أما اللغات الأخرى فتحتاج إلى واجهة برمجية متوافقة مع OpenAI، قد تكون خدمة سحابية أو خادمًا محليًا مثل Ollama أو LM Studio.',
          },
          {
            q: 'كيف أنسخ ما يشغّله حاسوبي من صوت؟',
            a: 'بحسب الأسئلة الشائعة، وجّه مخرجات التطبيق إلى جهاز صوت افتراضي، مثل BlackHole على macOS أو VB-CABLE على Windows أو PulseAudio Volume Control على Linux، ثم اخترها مصدر إدخال في Buzz.',
          },
          {
            q: 'أي نموذج Whisper أختار؟',
            a: 'تقول الأسئلة الشائعة إن النماذج الأصغر أسرع وأقل دقة، وتوصي بتجربتها بلغتك. وتضيف أن Large-V3 قد يخترع كلمات أحيانًا، وأن نموذج Turbo يوازن بين السرعة والدقة.',
          },
          {
            q: 'هل أستطيع تشغيل Buzz من سكربتات؟',
            a: 'نعم. يقبل الأمر buzz add ملفات أو عناوين URL مع خيارات للمهمة ونوع النموذج وحجمه واللغة والموجّه والطوابع الزمنية للكلمات، ويمكن تشغيله دون فتح النافذة بإضافة --hide-gui.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'Buzz طريقة مجانية ومفتوحة المصدر وتُصان بنشاط لتحويل التسجيلات إلى نصوص وترجمات على حاسوبك الخاص، مع خيار بين عدة محركات Whisper ومحرر مدمج. في المقابل، مثبّت Windows غير موقَّع، وأجهزة Mac بمعالج Intel متروكة بعد 1.4.5، وإحصاءات التشغيل المجهولة مفعّلة افتراضيًا، وتعتمد السرعة والدقة على النموذج والعتاد وهو ما لم تختبره PromptQuorum. يناسب من يريد أداة Whisper رسومية بلا اشتراك؛ ومن يحتاج إلى عمل دون اتصال بصرامة فعليه إيقاف القياس عن بُعد والتحقق من التحديثات وتجنب الخيارات السحابية.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Buzz Captions](https://buzzcaptions.com) — الإصدارات والميزات وروابط التنزيل، جرى فحصها في 24 أكتوبر 2026.',
          '[Buzz على GitHub](https://github.com/chidiwilliams/buzz) — README ورخصة MIT والشيفرة المصدرية وسجل الإيداعات، جرى فحصها في 24 أكتوبر 2026.',
          '[الإصدار 1.4.5 من Buzz](https://github.com/chidiwilliams/buzz/releases/tag/v1.4.5) — ملفات التثبيت وملاحظات الإصدار، نُشر في 23 أغسطس 2026.',
          '[توثيق Buzz](https://chidiwilliams.github.io/buzz/docs/preferences) — التفضيلات ومتغيرات القياس عن بُعد والتحقق من التحديثات والأسئلة الشائعة والتثبيت، جرى فحصها في 24 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة whisper.cpp](/ar/power-local-llm/whisper-cpp-review) — محرك C/C++ الذي يمكن لـ Buzz تشغيله كمحرك.',
          '[مراجعة Faster-Whisper](/ar/power-local-llm/faster-whisper-review) — تنفيذ Python محسَّن لـ Whisper.',
          '[مراجعة MacWhisper](/ar/power-local-llm/macwhisper-review) — تطبيق نسخ مدفوع لأجهزة Mac فقط.',
          '[مقارنة التعرف المحلي على الكلام بـ Whisper](/ar/power-local-llm/local-whisper-stt-comparison) — مقارنة الفئة التي تنتمي إليها هذه المراجعة.',
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
    heroImage: '/images/buzz-captions-review-hero-zh.webp',
    title: 'Buzz 评测：基于 Whisper 的免费离线转录与字幕应用',
    seoTitle: 'Buzz 评测：基于 Whisper 的免费离线转录与字幕生成应用',
    intro: 'Buzz 是 [Chidi Williams](https://github.com/chidiwilliams/buzz) 开发的免费开源桌面应用，使用 OpenAI Whisper 模型在你自己的电脑上转录和翻译音频与视频，并可导出字幕。它支持 Windows、macOS 和 Linux，采用 MIT 许可证。本评测基于 2026 年 10 月 24 日查阅的项目官网、README、文档、发布页和源代码；PromptQuorum 未亲自测试该应用。',
    metaDescription: 'Buzz 评测：免费、MIT 许可的桌面应用，使用 Whisper 离线转录并翻译音频和视频，可导出 SRT 与 VTT 字幕。未经实测，并说明未能核实的内容。',
    twitterDescription: 'Buzz 评测：适用于 Windows、macOS 和 Linux 的免费开源 Whisper 应用，可离线转录并生成字幕。来源已确认与未确认的内容。',
    audience: '希望在自己电脑上把录音转成文字和字幕的播客作者、记者、视频剪辑师和学生，以及需要了解来源已确认哪些内容的读者。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Buzz 评测',
    targetKeywords: [
      'buzz 评测',
      'buzz captions',
      'whisper 离线转录应用',
      '免费离线字幕生成',
      'whisper 桌面应用 windows mac linux',
      '免费离线音频转文字',
      'buzz whisper 转录',
    ],
    current_models_mentioned: ['Whisper', 'whisper.cpp', 'Faster Whisper'],
    current_hardware_mentioned: ['Apple silicon', 'Nvidia GPU', 'CPU'],
    leadAnswerBlock: '**Buzz（版本 1.4.5）是一款免费的 Windows、macOS 和 Linux 桌面应用，使用 Whisper 语音识别模型在你自己的电脑上把音频和视频转换为文字和字幕。** 它以 MIT 许可证开源，本文的每项陈述均来自项目官网、README、文档、发布页和源代码。',
    quickAnswerTop: {
      zh: {
        question: 'Buzz 真的可以离线使用吗？',
        answer: '据项目介绍，可以：模型一次性下载后，转录在你自己的电脑上运行，云端选项需要你主动开启。',
        bullets: [
          '可导入音频、视频或 YouTube 链接，也可通过麦克风实时转录。',
          '可导出 TXT、SRT 和 VTT，并在内置查看器中编辑或重新分组字幕。',
          '可选的说话人识别，以及用于处理新文件的监视文件夹。',
          '提供命令行界面和插件系统，便于脚本化。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Buzz 是什么？', anchor: 'what-is-buzz' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '来源确认的功能', anchor: 'key-features' },
      { label: '数据流向与隐私', anchor: 'privacy' },
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
          { type: 'one-sentence', text: 'Buzz 是一款免费、MIT 许可的桌面应用，使用 OpenAI Whisper 模型在你自己的电脑上转录和翻译音频与视频，并导出字幕和文稿。' },
          { type: 'plain-terms', text: '你导入一段录音或打开麦克风，选择一个 Whisper 模型，Buzz 就会在你的电脑上生成文字和带时间码的字幕，除非你选择云端选项。' },
        ],
        items: [
          '维护状态：最新版本发布于 2026 年 8 月 23 日，代码最近一次修改在 2026 年 10 月 17 日，因此不适用“项目已停滞”警告。',
          '后端：据项目介绍，支持 Whisper、whisper.cpp、Faster Whisper、Whisper 类 Hugging Face 模型或 OpenAI API。',
          '费用：免费；源代码在 GitHub 上采用 MIT 许可证。',
          '平台：Windows、macOS 和 Linux；Intel Mac 仅支持到包含它们的最后一个版本。',
          '注意事项：默认会发送匿名启动统计，可以关闭。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 2026 年 10 月 24 日查阅的项目官网、README、文档、GitHub Releases 和源代码。PromptQuorum 未安装或运行 Buzz，因此不评估其准确率和速度。',
          },
        ],
      },
      overview: {
        id: 'what-is-buzz',
        title: 'Buzz 是什么？',
        content: [
          '**Buzz 是基于 OpenAI Whisper 的桌面转录与翻译应用，由 Chidi Williams 创建，并在 GitHub 上公开开发。** 其代码仓库将它描述为在个人电脑上离线转录和翻译音频，项目网站名为 Buzz Captions。',
          '官网介绍了两个版本：免费开源的“Buzz Classic”（Windows、Linux 和 macOS（Intel）），以及另一个原生的“Buzz on macOS”版本。本评测涵盖开源应用；官网上的 App Store 链接在 2026 年 10 月 24 日返回“未找到”页面，因此未评估原生版本。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Buzz 可免费下载，支持 Windows、macOS 和 Linux；安装包在 GitHub Releases 和 SourceForge 上，Linux 另有 Flatpak 和 Snap 包。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          { '选项': '官网', '获取方式': '[buzzcaptions.com](https://buzzcaptions.com)' },
          { '选项': 'macOS', '获取方式': '来自 [GitHub Releases](https://github.com/chidiwilliams/buzz/releases) 的 .dmg' },
          {
            '选项': 'Windows',
            '获取方式': '.exe 加两个 .bin 文件，未签名；[GitHub Releases](https://github.com/chidiwilliams/buzz/releases)',
          },
          {
            '选项': 'Linux',
            '获取方式': '[Flatpak](https://flathub.org/apps/io.github.chidiwilliams.Buzz)、[Snap](https://snapcraft.io/buzz) 或 AppImage',
          },
          { '选项': 'Python', '获取方式': '`pip install buzz-captions`，需要 ffmpeg' },
          { '选项': '价格与许可证', '获取方式': '免费，MIT（[源代码](https://github.com/chidiwilliams/buzz)）' },
          { '选项': '隐私政策', '获取方式': '未找到；参见[Preferences 文档](https://chidiwilliams.github.io/buzz/docs/preferences)' },
        ],
        note: '评测版本：1.4.5，据 GitHub Releases 发布于 2026 年 8 月 23 日。主分支此后仍有更改（最近一次在 2026 年 10 月 17 日），并已标注 1.4.6，但该版本尚未发布。在 Windows 上，请下载全部三个文件并运行 .exe；安装程序未签名，因此请选择“更多信息”，再选“仍要运行”。[SourceForge](https://sourceforge.net/projects/buzz-captions/files/) 托管同样的安装包。Intel Mac：1.4.5 是支持它们的最后一个版本。从 1.4.6 起，Nvidia CUDA 加速改为在应用内单独安装。',
      },
      features: {
        id: 'key-features',
        title: '来源确认的功能',
        content: ['**以下内容均来自 README、文档和官网；PromptQuorum 未对其中任何一项进行测试。**'],
        items: [
          '**输入。** 导入音频和视频文件或 YouTube 链接，也可通过麦克风实时转录；演示窗口可在活动中显示实时文字。',
          '**Whisper 后端。** 支持 Whisper、whisper.cpp、Faster Whisper、Whisper 类 Hugging Face 模型或 OpenAI API，在受支持的环境下可用 Apple 芯片、CUDA 和 Vulkan 加速。',
          '**输出。** 可导出 TXT、SRT 和 VTT（官网还列出 CSV）。查看器提供搜索、播放和变速，调整大小工具可重新分组字幕长度。',
          '**附加功能。** 说话人识别（Intel macOS 不支持）、转录前的人声分离、逐词时间戳、监视文件夹、命令行界面，以及 AI 摘要和 DOCX 导出等插件。',
          '**语言与翻译。** 据官网支持 90 多种语言。Whisper 本身只能翻译成英语；翻译成其他语言需要兼容 OpenAI 的 API，也可以是 Ollama 或 LM Studio 这类本地服务器。',
        ],
        note: '速度取决于模型和硬件：官网提醒转录可能无法实时完成，文档建议速度慢时改用较小的模型或 whisper.cpp 模型，并为 Faster Whisper 配备至少 6 GB 显存的 GPU。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**据 README 和文档，转录使用已下载的模型在你的电脑上运行。** 但仍有三类数据可能离开本机。匿名启动统计（应用版本、区域设置、操作系统名称、发行版本和架构）会发送给 PostHog，除非设置了环境变量 BUZZ_DISABLE_TELEMETRY；应用大约每周向 GitHub 检查一次新版本，除非设置了 BUZZ_DISABLE_UPDATE_CHECK（自 1.4.5 起提供）。',
          '可选功能只有在你配置后才会联系外部服务：用于转录、AI 翻译和 AI 摘要插件的 OpenAI API（或你指定的任何兼容 OpenAI 的服务器），以及 YouTube 链接的下载。还可以配置上传地址，把实时转录内容发送到服务器。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些陈述来自文档以及 2026 年 10 月 24 日对源代码的阅读；PromptQuorum 未检查网络流量。在 buzzcaptions.com 和代码仓库中均未找到独立的隐私政策。',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**准确率与速度。** PromptQuorum 未运行 Buzz，因此不评估任何硬件上的字词准确率和转录速度。',
          '**Mac App Store 版本。** 官网推广一个原生 macOS 版本，但其 App Store 链接在 2026 年 10 月 24 日返回“未找到”页面，因此无法核实其价格、版本和功能。',
          '**Windows 安装程序。** 据项目介绍，安装程序未签名，且由三个文件组成；PromptQuorum 未对其扫描或安装。',
          '**文档与已发布版本。** 文档的部分内容描述的是 1.4.6 的功能，例如单独安装 CUDA 和自定义 whisper.cpp 模型，它们不在 1.4.5 版本中。',
          '**模型许可证。** Whisper 模型以及你加载的任何 Hugging Face 模型都有各自的许可证；PromptQuorum 未审查，这也不构成法律意见。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          {
            '应用': '[whisper.cpp](/zh/power-local-llm/whisper-cpp-review)',
            '平台': 'Windows、macOS、Linux',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': 'Buzz 可用作后端的 C/C++ 命令行引擎；没有图形化字幕编辑器',
          },
          {
            '应用': '[Faster-Whisper](/zh/power-local-llm/faster-whisper-review)',
            '平台': 'Windows、macOS、Linux',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': 'Buzz 可用作后端的 Python 库；面向用脚本调用的开发者',
          },
          {
            '应用': '[MacWhisper](/zh/power-local-llm/macwhisper-review)',
            '平台': 'macOS',
            '价格 / 许可证': '免费版 / 付费 Pro',
            '主要区别': '界面精致的闭源 Mac 应用；仅限 Mac',
          },
        ],
        note: 'whisper.cpp 和 Faster-Whisper 是 Buzz 可以运行的引擎，因此它们与 Buzz 是互补而非替代关系；请在各应用自己的页面确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '可以在没有网络的电脑上使用 Buzz 吗？',
            a: '可以，据项目 FAQ：在另一台电脑上下载模型，再把模型文件夹（Help、Preferences、Models 中的“Show file location”可打开它）复制到离线电脑的相同位置。仓库中的 download-models.py 脚本可帮助准备缓存。',
          },
          {
            q: 'Buzz 能翻译成英语以外的语言吗？',
            a: 'Whisper 自带的“Translate”任务只输出英语，Large-V3-Turbo 模型也不支持它。其他目标语言需要兼容 OpenAI 的 API，可以是云服务，也可以是 Ollama 或 LM Studio 这类本地服务器。',
          },
          {
            q: '如何转录电脑正在播放的声音？',
            a: '据 FAQ，把应用的输出路由到虚拟音频设备，例如 macOS 上的 BlackHole、Windows 上的 VB-CABLE 或 Linux 上的 PulseAudio Volume Control，然后在 Buzz 中把它选为输入。',
          },
          {
            q: '应该选择哪个 Whisper 模型？',
            a: 'FAQ 指出，较小的模型更快但准确率较低，建议用你自己的语言测试。它还说明，Large-V3 有时会凭空编出词语，而 Turbo 模型在速度和准确率之间取得平衡。',
          },
          {
            q: '可以用脚本运行 Buzz 吗？',
            a: '可以。buzz add 命令接受文件或 URL，以及任务、模型类型和大小、语言、提示词和逐词时间戳等选项，加上 --hide-gui 即可不打开窗口运行。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Buzz 是一种维护活跃、免费且开源的方式，可在你自己的电脑上把录音转成文稿和字幕，可选多种 Whisper 后端，并带有内置编辑器。不足之处在于：Windows 安装程序未签名，1.4.5 之后 Intel Mac 被舍弃，匿名启动统计默认开启，而速度和准确率取决于模型和硬件，PromptQuorum 未对此测试。它适合想要无需订阅的图形化 Whisper 工具的人；需要严格离线运行的用户应关闭遥测和更新检查，并避开云端选项。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Buzz Captions 官网](https://buzzcaptions.com) — 版本、功能和下载链接，查阅于 2026 年 10 月 24 日。',
          '[GitHub 上的 Buzz](https://github.com/chidiwilliams/buzz) — README、MIT 许可证、源代码和提交历史，查阅于 2026 年 10 月 24 日。',
          '[Buzz 1.4.5 版本](https://github.com/chidiwilliams/buzz/releases/tag/v1.4.5) — 安装包和发布说明，发布于 2026 年 8 月 23 日。',
          '[Buzz 文档](https://chidiwilliams.github.io/buzz/docs/preferences) — 偏好设置、遥测与更新检查变量、FAQ 和安装说明，查阅于 2026 年 10 月 24 日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[whisper.cpp 评测](/zh/power-local-llm/whisper-cpp-review) — Buzz 可用作后端运行的 C/C++ 引擎。',
          '[Faster-Whisper 评测](/zh/power-local-llm/faster-whisper-review) — Whisper 的优化 Python 实现。',
          '[MacWhisper 评测](/zh/power-local-llm/macwhisper-review) — 一款仅限 Mac 的付费转录应用。',
          '[本地 Whisper 语音转文字对比](/zh/power-local-llm/local-whisper-stt-comparison) — 本评测所属的类别对比。',
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
    heroImage: '/images/buzz-captions-review-hero-ko.webp',
    title: 'Buzz 리뷰: Whisper 기반 무료 오프라인 받아쓰기·자막 앱',
    seoTitle: 'Buzz 리뷰: 무료 오프라인 받아쓰기·자막 생성 앱',
    intro: 'Buzz는 [Chidi Williams](https://github.com/chidiwilliams/buzz)가 만든 무료 오픈소스 데스크톱 앱으로, OpenAI Whisper 모델을 사용해 오디오와 영상을 사용자의 컴퓨터에서 받아쓰고 번역하며 자막으로 내보냅니다. Windows, macOS, Linux에서 실행되고 MIT 라이선스입니다. 이 리뷰는 2026년 10월 24일에 확인한 프로젝트 웹사이트, README, 문서, 릴리스 페이지, 소스 코드를 바탕으로 하며, PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription: 'Buzz 리뷰: Whisper로 오디오와 영상을 오프라인에서 받아쓰고 번역해 SRT·VTT 자막으로 내보내는 무료 MIT 라이선스 데스크톱 앱입니다. 확인하지 못한 점도 정리했습니다.',
    twitterDescription: 'Buzz 리뷰: Windows, macOS, Linux에서 쓰는 무료 오픈소스 Whisper 앱. 오프라인 받아쓰기와 자막에 대해 출처로 확인된 점과 확인하지 못한 점.',
    audience: '녹음을 자신의 컴퓨터에서 텍스트와 자막으로 바꾸려는 팟캐스터, 기자, 영상 편집자, 학생과 출처로 확인된 내용을 알고 싶은 독자.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Buzz 리뷰',
    targetKeywords: [
      'buzz 리뷰',
      'buzz captions',
      'whisper 오프라인 받아쓰기 앱',
      '무료 오프라인 자막 생성',
      'whisper 데스크톱 앱 windows mac linux',
      '오디오 오프라인 받아쓰기 무료',
      'buzz whisper 받아쓰기',
    ],
    current_models_mentioned: ['Whisper', 'whisper.cpp', 'Faster Whisper'],
    current_hardware_mentioned: ['Apple silicon', 'Nvidia GPU', 'CPU'],
    leadAnswerBlock: '**Buzz(버전 1.4.5)는 Whisper 음성 인식 모델을 사용해 오디오와 영상을 사용자의 컴퓨터에서 텍스트와 자막으로 바꾸는 Windows, macOS, Linux용 무료 데스크톱 앱입니다.** MIT 라이선스의 오픈소스이며, 여기의 모든 서술은 프로젝트 웹사이트, README, 문서, 릴리스 페이지, 소스 코드에서 가져왔습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Buzz는 정말 오프라인으로 작동합니까?',
        answer: '프로젝트에 따르면 그렇습니다. 모델을 한 번 내려받은 뒤에는 받아쓰기가 사용자의 컴퓨터에서 실행되며, 클라우드 옵션은 직접 켜야 합니다.',
        bullets: [
          '오디오, 영상, YouTube 링크를 가져오거나 마이크로 실시간 받아쓰기를 할 수 있습니다.',
          'TXT, SRT, VTT로 내보내고 내장 뷰어에서 자막을 편집하거나 다시 묶을 수 있습니다.',
          '선택 사항인 화자 구분과 새 파일을 자동 처리하는 감시 폴더가 있습니다.',
          '스크립트 작업을 위한 명령줄 인터페이스와 플러그인 시스템이 있습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Buzz란 무엇입니까?', anchor: 'what-is-buzz' },
      { label: '받는 방법', anchor: 'get-it' },
      { label: '출처로 확인된 기능', anchor: 'key-features' },
      { label: '데이터 흐름과 개인정보', anchor: 'privacy' },
      { label: '확인하지 못한 점', anchor: 'who-should-not-use' },
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
            text: 'Buzz는 OpenAI Whisper 모델로 오디오와 영상을 사용자의 컴퓨터에서 받아쓰고 번역하며 자막과 텍스트로 내보내는 무료 MIT 라이선스 데스크톱 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '녹음 파일을 가져오거나 마이크를 켜고 Whisper 모델을 고르면, 클라우드 옵션을 선택하지 않는 한 Buzz가 컴퓨터에서 텍스트와 시간 정보가 있는 자막을 만듭니다.',
          },
        ],
        items: [
          '유지 관리: 최신 릴리스는 2026년 8월 23일에 나왔고 코드는 2026년 10월 17일에 마지막으로 변경되어, 방치된 프로젝트 경고는 해당하지 않습니다.',
          '백엔드: 프로젝트에 따르면 Whisper, whisper.cpp, Faster Whisper, Whisper 계열 Hugging Face 모델, OpenAI API를 지원합니다.',
          '비용: 무료이며, 소스 코드는 GitHub에서 MIT 라이선스입니다.',
          '플랫폼: Windows, macOS, Linux. Intel Mac은 이를 포함한 마지막 릴리스까지만 지원됩니다.',
          '유의점: 익명 실행 통계가 기본적으로 전송되며 끌 수 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 24일에 확인한 프로젝트 웹사이트, README, 문서, GitHub Releases, 소스 코드를 바탕으로 합니다. PromptQuorum은 Buzz를 설치하거나 실행하지 않았으므로 정확도와 속도는 평가하지 않습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-buzz',
        title: 'Buzz란 무엇입니까?',
        content: [
          '**Buzz는 OpenAI Whisper를 기반으로 한 받아쓰기·번역 데스크톱 앱으로, Chidi Williams가 만들었고 GitHub에서 공개 개발됩니다.** 저장소는 개인 컴퓨터에서 오디오를 오프라인으로 받아쓰고 번역하는 앱이라고 설명하며, 프로젝트 사이트 이름은 Buzz Captions입니다.',
          '웹사이트는 두 가지 에디션을 소개합니다. 무료 오픈소스인 "Buzz Classic"(Windows, Linux, macOS(Intel))과 별도의 네이티브 "Buzz on macOS"입니다. 이 리뷰는 오픈소스 앱을 다루며, 사이트의 App Store 링크는 2026년 10월 24일에 "찾을 수 없음" 페이지를 반환했으므로 네이티브 에디션은 평가하지 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '받는 방법',
        content: [
          '**Buzz는 Windows, macOS, Linux용 무료 다운로드이며, 설치 파일은 GitHub Releases와 SourceForge에 있고 Linux에는 Flatpak과 Snap 패키지도 있습니다.**',
        ],
        columns: ['항목', '받는 방법'],
        rows: [
          { '항목': '웹사이트', '받는 방법': '[buzzcaptions.com](https://buzzcaptions.com)' },
          { '항목': 'macOS', '받는 방법': '[GitHub Releases](https://github.com/chidiwilliams/buzz/releases)의 .dmg' },
          {
            '항목': 'Windows',
            '받는 방법': '.exe와 .bin 파일 2개, 서명 없음; [GitHub Releases](https://github.com/chidiwilliams/buzz/releases)',
          },
          {
            '항목': 'Linux',
            '받는 방법': '[Flatpak](https://flathub.org/apps/io.github.chidiwilliams.Buzz), [Snap](https://snapcraft.io/buzz) 또는 AppImage',
          },
          { '항목': 'Python', '받는 방법': '`pip install buzz-captions`, ffmpeg 필요' },
          { '항목': '가격과 라이선스', '받는 방법': '무료, MIT([소스 코드](https://github.com/chidiwilliams/buzz))' },
          {
            '항목': '개인정보 처리방침',
            '받는 방법': '찾지 못함; [Preferences 문서](https://chidiwilliams.github.io/buzz/docs/preferences) 참조',
          },
        ],
        note: '확인한 버전: 1.4.5, GitHub Releases에 따르면 2026년 8월 23일에 공개되었습니다. 메인 브랜치는 그 이후에도 변경되어(마지막은 2026년 10월 17일) 이미 1.4.6으로 표기되어 있으나 아직 릴리스되지 않았습니다. Windows에서는 파일 세 개를 모두 내려받아 .exe를 실행하세요. 설치 프로그램에 서명이 없으므로 "추가 정보"를 누른 뒤 "실행"을 선택합니다. [SourceForge](https://sourceforge.net/projects/buzz-captions/files/)에도 같은 설치 파일이 있습니다. Intel Mac: 1.4.5가 이를 지원하는 마지막 버전입니다. Nvidia CUDA 가속은 1.4.6부터 앱 안에서 별도로 설치합니다.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 내용은 모두 README, 문서, 웹사이트에서 가져왔으며 PromptQuorum은 어느 것도 테스트하지 않았습니다.**',
        ],
        items: [
          '**입력.** 오디오·영상 파일이나 YouTube 링크를 가져오거나 마이크로 실시간 받아쓰기를 합니다. 발표 창은 행사에서 실시간 텍스트를 보여 줍니다.',
          '**Whisper 백엔드.** Whisper, whisper.cpp, Faster Whisper, Whisper 계열 Hugging Face 모델, OpenAI API를 지원하며, 지원되는 환경에서는 Apple silicon, CUDA, Vulkan 가속을 쓸 수 있습니다.',
          '**출력.** TXT, SRT, VTT로 내보냅니다(웹사이트에는 CSV도 나옵니다). 뷰어는 검색, 재생, 속도 조절을 제공하고 크기 조정 도구로 자막 길이를 다시 묶을 수 있습니다.',
          '**부가 기능.** 화자 구분(Intel macOS 제외), 받아쓰기 전 음성 분리, 단어 단위 타임스탬프, 감시 폴더, 명령줄 인터페이스, AI 요약·DOCX 내보내기 같은 플러그인이 있습니다.',
          '**언어와 번역.** 웹사이트에 따르면 90개 이상의 언어를 지원합니다. Whisper 자체는 영어로만 번역하며, 다른 언어로 번역하려면 OpenAI 호환 API가 필요하고 Ollama나 LM Studio 같은 로컬 서버도 쓸 수 있습니다.',
        ],
        note: '속도는 모델과 하드웨어에 달려 있습니다. 웹사이트는 받아쓰기가 실시간이 아닐 수 있다고 경고하며, 문서는 느릴 때 더 작은 모델이나 whisper.cpp 모델을, Faster Whisper에는 VRAM 6 GB 이상의 GPU를 권합니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**README와 문서에 따르면 받아쓰기는 내려받은 모델로 사용자의 컴퓨터에서 실행됩니다.** 그래도 세 가지는 기기 밖으로 나갈 수 있습니다. 익명 실행 통계(앱 버전, 로캘, 운영체제 이름·릴리스·아키텍처)는 환경 변수 BUZZ_DISABLE_TELEMETRY를 설정하지 않으면 PostHog로 전송되고, 앱은 BUZZ_DISABLE_UPDATE_CHECK를 설정하지 않으면 일주일에 한 번 정도 GitHub에서 새 버전을 확인합니다(1.4.5부터 제공).',
          '선택 기능은 사용자가 설정한 경우에만 외부 서비스에 접속합니다. 받아쓰기, AI 번역, AI 요약 플러그인을 위한 OpenAI API(또는 지정한 OpenAI 호환 서버)와 YouTube 링크 다운로드입니다. 실시간 받아쓰기 내용을 서버로 보내는 업로드 주소도 설정할 수 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 서술은 2026년 10월 24일에 문서와 소스 코드를 읽어 확인한 것이며, PromptQuorum은 네트워크 트래픽을 검사하지 않았습니다. buzzcaptions.com과 저장소 어디에서도 별도의 개인정보 처리방침을 찾지 못했습니다.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 점',
        items: [
          '**정확도와 속도.** PromptQuorum은 Buzz를 실행하지 않았으므로 단어 정확도와 하드웨어별 받아쓰기 속도는 평가하지 않습니다.',
          '**Mac App Store 에디션.** 웹사이트는 네이티브 macOS 에디션을 홍보하지만 그 App Store 링크가 2026년 10월 24일에 "찾을 수 없음" 페이지를 반환해 가격, 버전, 기능을 확인하지 못했습니다.',
          '**Windows 설치 프로그램.** 프로젝트에 따르면 서명이 없고 파일 세 개로 구성되며, PromptQuorum은 이를 검사하거나 설치하지 않았습니다.',
          '**문서와 릴리스의 차이.** 문서 일부는 별도 CUDA 설치와 사용자 지정 whisper.cpp 모델처럼 1.4.5 릴리스에 없는 1.4.6 기능을 설명합니다.',
          '**모델 라이선스.** Whisper 모델과 불러오는 Hugging Face 모델에는 각자의 라이선스가 있으며, PromptQuorum은 검토하지 않았고 법률 자문이 아닙니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '주요 차이'],
        rows: [
          {
            '앱': '[whisper.cpp](/ko/power-local-llm/whisper-cpp-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격 / 라이선스': '무료 / MIT',
            '주요 차이': 'Buzz가 백엔드로 쓸 수 있는 C/C++ 명령줄 엔진. 그래픽 자막 편집기는 없음',
          },
          {
            '앱': '[Faster-Whisper](/ko/power-local-llm/faster-whisper-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격 / 라이선스': '무료 / MIT',
            '주요 차이': 'Buzz가 백엔드로 쓸 수 있는 Python 라이브러리. 스크립트로 쓰는 개발자용',
          },
          {
            '앱': '[MacWhisper](/ko/power-local-llm/macwhisper-review)',
            '플랫폼': 'macOS',
            '가격 / 라이선스': '무료 등급 / 유료 Pro',
            '주요 차이': '다듬어진 인터페이스의 비공개 소스 Mac 앱. Mac 전용',
          },
        ],
        note: 'whisper.cpp와 Faster-Whisper는 Buzz가 실행할 수 있는 엔진이므로 대체재라기보다 보완 관계입니다. 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 페이지에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '인터넷이 없는 컴퓨터에서 Buzz를 쓸 수 있습니까?',
            a: '네, 프로젝트 FAQ에 따르면 가능합니다. 다른 컴퓨터에서 모델을 내려받아 모델 폴더(Help, Preferences, Models의 "Show file location"으로 열 수 있음)를 오프라인 컴퓨터의 같은 위치로 복사합니다. 저장소의 download-models.py 스크립트가 캐시 준비를 도와줍니다.',
          },
          {
            q: 'Buzz는 영어 이외의 언어로 번역할 수 있습니까?',
            a: 'Whisper 자체의 "Translate" 작업은 영어만 출력하며 Large-V3-Turbo 모델은 이를 지원하지 않습니다. 다른 대상 언어에는 OpenAI 호환 API가 필요하며, 클라우드 서비스나 Ollama, LM Studio 같은 로컬 서버를 쓸 수 있습니다.',
          },
          {
            q: '컴퓨터에서 재생 중인 소리를 받아쓰려면 어떻게 합니까?',
            a: 'FAQ에 따르면 앱의 출력을 macOS의 BlackHole, Windows의 VB-CABLE, Linux의 PulseAudio Volume Control 같은 가상 오디오 장치로 보내고, Buzz의 입력으로 그 장치를 선택합니다.',
          },
          {
            q: '어떤 Whisper 모델을 골라야 합니까?',
            a: 'FAQ는 작은 모델일수록 빠르지만 정확도가 낮고, 자신의 언어로 직접 시험해 볼 것을 권합니다. 또한 Large-V3는 가끔 없는 단어를 만들어 낼 수 있고 Turbo 모델은 속도와 정확도의 균형을 맞춘다고 덧붙입니다.',
          },
          {
            q: '스크립트에서 Buzz를 실행할 수 있습니까?',
            a: '네. buzz add 명령은 파일이나 URL과 함께 작업, 모델 종류와 크기, 언어, 프롬프트, 단어 타임스탬프 옵션을 받으며 --hide-gui를 붙이면 창을 열지 않고 실행할 수 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'Buzz는 활발히 유지 관리되는 무료 오픈소스로, 녹음을 자신의 컴퓨터에서 받아쓰기와 자막으로 바꾸며 여러 Whisper 백엔드와 내장 편집기를 고를 수 있습니다. 반면 Windows 설치 프로그램은 서명이 없고, Intel Mac은 1.4.5 이후 지원에서 빠지며, 익명 실행 통계는 기본으로 켜져 있고, 속도와 정확도는 모델과 하드웨어에 따라 달라지는데 PromptQuorum은 이를 테스트하지 않았습니다. 구독 없이 쓰는 그래픽 Whisper 도구를 원하는 사람에게 맞으며, 엄격한 오프라인 운용이 필요하면 텔레메트리와 업데이트 확인을 끄고 클라우드 옵션을 피하세요.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Buzz Captions 웹사이트](https://buzzcaptions.com) — 에디션, 기능, 다운로드 링크. 2026년 10월 24일 확인.',
          '[GitHub의 Buzz](https://github.com/chidiwilliams/buzz) — README, MIT 라이선스, 소스 코드, 커밋 기록. 2026년 10월 24일 확인.',
          '[Buzz 1.4.5 릴리스](https://github.com/chidiwilliams/buzz/releases/tag/v1.4.5) — 설치 파일과 릴리스 노트. 2026년 8월 23일 공개.',
          '[Buzz 문서](https://chidiwilliams.github.io/buzz/docs/preferences) — 환경설정, 텔레메트리와 업데이트 확인 변수, FAQ, 설치. 2026년 10월 24일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[whisper.cpp 리뷰](/ko/power-local-llm/whisper-cpp-review) — Buzz가 백엔드로 실행할 수 있는 C/C++ 엔진.',
          '[Faster-Whisper 리뷰](/ko/power-local-llm/faster-whisper-review) — 최적화된 Python 기반 Whisper 구현.',
          '[MacWhisper 리뷰](/ko/power-local-llm/macwhisper-review) — Mac 전용 유료 받아쓰기 앱.',
          '[로컬 Whisper 음성 인식 비교](/ko/power-local-llm/local-whisper-stt-comparison) — 이 리뷰가 속한 카테고리 비교.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
        ],
      },
    },
  },
}
