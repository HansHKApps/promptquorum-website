// Open Voice OS Review: Open-Source Voice Assistant for Linux and Raspberry Pi
// Slug: openvoiceos-review
// Companion to: home-assistant-assist-review, whisper-cpp-review, piper-tts-review, local-llm-voice-audio-compared
// Sources: openvoiceos.org (home, /downloads), GitHub OpenVoiceOS/ovos-installer (README, docs/telemetry.md, release v11.0.0 of 2026-08-29),
// OpenVoiceOS/ovos-core (README, license, latest release 2.1.1 of 2025-11-05) and OpenVoiceOS/ovos-docker, all checked 2026-11-01 — no hands-on testing.
// No prices (software is free; donations optional). Non-EN blocks produced under docs/geo-translation.md (geo-translation: APPLIED).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-01',
    dateModified: '2026-11-01',
    next_refresh_due: '2027-05-01',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/openvoiceos-review-hero-en.webp',
    title: 'Open Voice OS Review: Open-Source Voice Assistant for Linux and Raspberry Pi',
    seoTitle: 'Open Voice OS Review: Open-Source Voice Assistant',
    intro: 'Open Voice OS (OVOS) is a community-built, open-source voice assistant platform from [OpenVoiceOS](https://www.openvoiceos.org/) that began as a fork of Mycroft. It runs on Linux machines, Raspberry Pi boards and Docker, takes skills as plugins, and can hand requests it cannot match to an LLM. This review is based on the project website and its GitHub documentation, not on hands-on testing.',
    metaDescription: 'Open Voice OS review: the open-source, Mycroft-descended voice assistant for Linux and Raspberry Pi. What the docs say about speech, LLMs and privacy.',
    twitterDescription: 'Open Voice OS review: open-source voice assistant for Linux, Raspberry Pi and Docker. Local speech options, LLM fallback and what the docs leave open.',
    audience: 'Tinkerers, Raspberry Pi owners and smart-speaker builders who want an open voice assistant and need to know what the documentation confirms about offline use, LLM support and data sharing.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Open Voice OS review',
    targetKeywords: [
      'open voice os review',
      'ovos voice assistant',
      'open source voice assistant raspberry pi',
      'mycroft alternative',
      'ovos installer',
      'offline voice assistant linux',
      'ovos llm fallback',
    ],
    current_models_mentioned: [
      'Vosk',
      'Mimic3',
      'DeepSpeech',
    ],
    current_hardware_mentioned: [
      'Raspberry Pi 5',
      'Raspberry Pi 4',
      'Mark II',
    ],
    leadAnswerBlock: '**Open Voice OS (installer v11.0.0, released on 29 August 2026) is an open-source voice assistant platform for Linux, Raspberry Pi and Docker, and it is not fully offline by default.** The speech recogniser it starts with needs internet, local speech is optional, and an LLM fallback is an add-on. Every statement here comes from the project documentation, not from testing.',
    quickAnswerTop: {
      en: {
        question: 'Does Open Voice OS work without internet?',
        answer: 'Only in part, according to the documentation: the installer says it is not a fully offline mode, because a recording goes to public speech servers when local recognition fails or cannot run. Local speech and voice are listed for the alpha channel on capable hardware.',
        bullets: [
          'Skills are plugins; some ship with it and most are installed separately.',
          'The installer can add Home Assistant, an LLM fallback and HiveMind satellites.',
          'Two kinds of data sharing exist, and both are off unless you accept.',
          'Settings live in one plain file, mycroft.conf.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      {
        label: 'Quick Answer',
        anchor: 'quick-answer',
      },
      {
        label: 'What Is Open Voice OS?',
        anchor: 'what-is-ovos',
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
            text: 'Open Voice OS is an open-source voice assistant platform that runs on your own Linux machine, Raspberry Pi or container and can send unmatched requests to an LLM.',
          },
          {
            type: 'plain-terms',
            text: 'A wake word starts it, a speech engine turns your words into text, a skill answers or an optional LLM steps in, and a voice reads the reply back.',
          },
        ],
        items: [
          'Maintenance: the installer repository was last pushed to on 1 November 2026, so no stale-project warning applies.',
          'License: Apache-2.0 open source and free; donations are optional.',
          'Origin: it started as MycroftOS and keeps an enhanced fork of Mycroft-core.',
          'Setup: one terminal command, a browser-guided installer or a Raspberry Pi image, not a double-click app.',
          'Speech recognition: the default engine needs internet; local engines are optional.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the Open Voice OS website and the GitHub documentation of ovos-core, ovos-installer and ovos-docker, checked on 1 November 2026. PromptQuorum has not installed or timed it, so recognition quality, latency and LLM reliability are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-ovos',
        title: 'What Is Open Voice OS?',
        content: [
          '**Open Voice OS is a community-run voice assistant platform for smart speakers and other voice-first devices.** The website says it began as MycroftOS, was renamed to avoid trademark issues and now maintains an enhanced fork of Mycroft-core. Its core component, [ovos-core](https://github.com/OpenVoiceOS/ovos-core), is released under Apache-2.0.',
          'Beyond the core there are an installer, a Raspberry Pi image and a Docker setup. The core repository lists the latest GitHub release as 2.1.1 (5 November 2025), while the installer is at v11.0.0 and the default branch of the core keeps receiving commits.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Open Voice OS has no single download: you choose a browser-guided installer, a terminal script, a Raspberry Pi image or Docker.**',
        ],
        columns: [
          'Option',
          'How to get it',
        ],
        rows: [
          {
            Option: 'Browser installer',
            'How to get it': '[start.openvoiceos.org](https://start.openvoiceos.org/): guided setup, called the easiest route',
          },
          {
            Option: 'Installer script',
            'How to get it': '[ovos-installer](https://github.com/OpenVoiceOS/ovos-installer): one command on Linux, WSL2, macOS 15+',
          },
          {
            Option: 'Raspberry Pi image',
            'How to get it': '[RaspOVOS](https://openvoiceos.github.io/raspOVOS/); [development images](https://downloads.openvoiceos.org/images/) are marked "expect bugs"',
          },
          {
            Option: 'Docker',
            'How to get it': '[ovos-docker](https://github.com/OpenVoiceOS/ovos-docker), Apache-2.0',
          },
          {
            Option: 'Website',
            'How to get it': '[openvoiceos.org](https://www.openvoiceos.org/)',
          },
          {
            Option: 'Data sharing',
            'How to get it': '[Telemetry notes](https://github.com/OpenVoiceOS/ovos-installer/blob/main/docs/telemetry.md); no privacy policy page was found',
          },
          {
            Option: 'Source code',
            'How to get it': '[ovos-core](https://github.com/OpenVoiceOS/ovos-core), Apache-2.0',
          },
        ],
        note: 'Versions reviewed: ovos-installer v11.0.0 (29 August 2026) and ovos-core 2.1.1 (5 November 2025), per GitHub. The installer needs a terminal: there is no double-click app. The project is free; the website only offers optional donations.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**The sources give a system list and one hardware figure, so sizing beyond that is guesswork.**',
        ],
        columns: [
          'Item',
          'What the sources say',
        ],
        rows: [
          {
            Item: 'Operating system',
            'What the sources say': 'Debian/Ubuntu and derivatives, Fedora, Arch, openSUSE, WSL2, macOS 15+ on Apple Silicon (extra setup)',
          },
          {
            Item: 'Tools',
            'What the sources say': 'curl, git, sudo and Bash 4 or later for the installer script',
          },
          {
            Item: 'Local speech',
            'What the sources say': 'A Raspberry Pi 5 with 8 GB RAM or something at least as capable',
          },
          {
            Item: 'Boards and devices',
            'What the sources say': 'Raspberry Pi 3, 4 and 5 on the downloads page; Mark I and Mark II devices',
          },
          {
            Item: 'Speech engines',
            'What the sources say': 'Default recognition needs internet; Vosk and DeepSpeech (offline) and Mimic3 (local voice) are named',
          },
          {
            Item: 'Configuration',
            'What the sources say': 'One plain file: mycroft.conf',
          },
        ],
        note: 'No supported-language list appeared on the pages checked, so confirm your language before you invest time.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**These steps follow the documentation; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Pick an install path',
            whyItMatters: 'Use the browser installer, the one-line installer script, the Raspberry Pi image or the Docker setup.',
          },
          {
            title: 'Answer the installer screens',
            whyItMatters: 'Choose virtualenv or container, a release channel, a profile and features such as Home Assistant or an LLM.',
          },
          {
            title: 'Decide on the extras',
            whyItMatters: 'Optionally connect Home Assistant, an OpenAI-compatible LLM endpoint or HiveMind satellites for more devices.',
          },
          {
            title: 'Review data sharing',
            whyItMatters: 'Accept or decline installer telemetry and usage metrics, then edit mycroft.conf for anything else.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Everything below comes from the Open Voice OS documentation; none of it has been independently tested.**',
        ],
        items: [
          '**Skills as plugins.** Some skills ship with ovos-core and most are installed separately from PyPI or the OpenVoiceOS GitHub organization; most classic Mycroft skills also work.',
          '**LLM fallback.** Through ovos-persona and solver plugins, requests no skill handles can go to any OpenAI-compatible endpoint, including a self-hosted one.',
          '**Home Assistant.** The installer can set up an optional Home Assistant integration.',
          '**HiveMind satellites.** Several devices can share one assistant.',
          '**Terminal client.** ovos-tui-client lets you type to the assistant without a microphone.',
        ],
        note: 'The core README\'s example persona points to a demo server for which "no uptime is guaranteed".',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**The installer states that Open Voice OS is not a fully offline mode: if recognition fails or returns nothing, the recording goes to public servers, and a part that cannot run locally falls back to public speech.** Local recognition and voice are described for the alpha channel. The website also says only that the platform has a "focus on privacy and security".',
          'Two kinds of data sharing are asked about separately and are off unless accepted. Installer telemetry is sent once during installation and, if accepted, uses a third-party IP lookup over plain HTTP to fill in the country. Usage metrics report the intents the assistant matches to a community server and are published on an open-data portal; removing the open_data block from mycroft.conf stops them.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the project\'s declarations, not audit results. PromptQuorum has not inspected network traffic or source code.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Raspberry Pi and Linux tinkerers** who want an open smart-speaker stack and accept a terminal install.',
          '**Mycroft users** looking for an actively maintained descendant that still runs many classic skills.',
          '**Home Assistant owners** who want a separate, extensible voice assistant with an optional LLM behind it.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Recognition quality and speed.** No timings are given in the sources and PromptQuorum measured nothing.',
          '**Language coverage.** No supported-language list appeared on the pages checked.',
          '**Release cadence.** The core\'s newest GitHub release is from November 2025 while commits continue; the documentation points to prerelease quirks.',
          '**Community server handling.** Retention and use of data sent to the telemetry and metrics servers is not documented, and no privacy policy page was found.',
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
          {
            App: '[Home Assistant Assist](/power-local-llm/home-assistant-assist-review)',
            Platforms: 'Linux, web, iOS, Android',
            'Price / license': 'Free / Apache-2.0',
            'Key difference': 'Voice pipeline inside the Home Assistant smart-home server',
          },
          {
            App: '[Voxa](/power-local-llm/voxa-review)',
            Platforms: 'Windows, macOS, Linux',
            'Price / license': 'Free / MIT',
            'Key difference': 'Local-first desktop voice assistant with optional cloud voice',
          },
          {
            App: '[Jarvis](/power-local-llm/jarvis-mac-review)',
            Platforms: 'macOS',
            'Price / license': 'Free / open source',
            'Key difference': 'Single-computer desktop assistant with bundled Llama, Whisper and Kokoro, per its listing',
          },
        ],
        note: 'These are the nearest voice assistants in the directory rather than direct substitutes; confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Open Voice OS the same as Mycroft?',
            a: 'No, but it is descended from it: the project says it began as MycroftOS and maintains an enhanced fork of Mycroft-core, and the core README says most classic Mycroft skills also work.',
          },
          {
            q: 'Can it use a local LLM?',
            a: 'Yes, as an optional fallback: the installer accepts any OpenAI-compatible endpoint, including a self-hosted one, for requests that skills do not handle.',
          },
          {
            q: 'Do I need a Raspberry Pi?',
            a: 'No. Linux distributions, WSL2, macOS 15+ on Apple Silicon and Docker are also listed; only local speech is tied to a Raspberry Pi 5 with 8 GB RAM or better.',
          },
          {
            q: 'Can I use it without a microphone?',
            a: 'The installer sets up ovos-tui-client, a terminal client for typing to the assistant.',
          },
          {
            q: 'How do I stop usage metrics?',
            a: 'Remove the open_data block from mycroft.conf and restart the services; the documentation does not explain how to withdraw installer telemetry once accepted.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Open Voice OS is an actively developed, Apache-2.0 route to an open voice assistant on hardware you control, with optional local speech, Home Assistant and LLM add-ons. Against that, the default recogniser needs internet, installation happens in a terminal, no language list appeared on the pages checked, and speech quality and latency are untested here. It suits tinkerers and Mycroft veterans; anyone who wants a double-click app should look at the alternatives above.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Open Voice OS website](https://www.openvoiceos.org/) — project description, license, platforms and links.',
          '[Downloads page](https://www.openvoiceos.org/downloads) — browser installer, Raspberry Pi image and development images.',
          '[ovos-installer](https://github.com/OpenVoiceOS/ovos-installer) — install command, supported systems, optional features and speech caveats.',
          '[Installer telemetry notes](https://github.com/OpenVoiceOS/ovos-installer/blob/main/docs/telemetry.md) — what telemetry and usage metrics send.',
          '[ovos-core](https://github.com/OpenVoiceOS/ovos-core) — skills, ovos-persona, license and release state.',
          '[ovos-installer v11.0.0](https://github.com/OpenVoiceOS/ovos-installer/releases/tag/v11.0.0) — release date reviewed.',
          '[ovos-docker](https://github.com/OpenVoiceOS/ovos-docker) — container setup.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Home Assistant Assist Review](/power-local-llm/home-assistant-assist-review) — the voice pipeline inside Home Assistant.',
          '[Whisper.cpp Review](/power-local-llm/whisper-cpp-review) — a local speech recogniser you can run yourself.',
          '[Piper TTS Review](/power-local-llm/piper-tts-review) — a local text-to-speech engine for voice output.',
          '[Voice and Audio Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — the category comparison this review belongs to.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Open Voice OS Review: Open-Source Voice Assistant for Linux and Raspberry Pi',
      description: 'Open Voice OS review: the community open-source, Mycroft-descended voice assistant platform for Linux, Raspberry Pi and Docker. Install paths, speech and LLM options, privacy and what the documentation leaves unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/openvoiceos-review',
      inLanguage: 'en',
      datePublished: '2026-11-01',
      dateModified: '2026-11-01',
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
        audienceType: 'Tinkerers and Raspberry Pi owners evaluating an open-source voice assistant',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Open Voice OS',
        },
        {
          '@type': 'Thing',
          name: 'Open-source voice assistant',
        },
        {
          '@type': 'Thing',
          name: 'Mycroft',
        },
        {
          '@type': 'Thing',
          name: 'Raspberry Pi',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/openvoiceos-review',
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
          name: 'Open Voice OS Review',
          item: 'https://www.promptquorum.com/power-local-llm/openvoiceos-review',
        },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-01',
    dateModified: '2026-11-01',
    next_refresh_due: '2027-05-01',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/openvoiceos-review-hero-de.webp',
    title: 'Open-Voice-OS-Rezension: quelloffener Sprachassistent für Linux und Raspberry Pi',
    seoTitle: 'Open-Voice-OS-Rezension: quelloffener Sprachassistent',
    intro: 'Open Voice OS (OVOS) ist eine von der Community entwickelte, quelloffene Plattform für Sprachassistenten von [OpenVoiceOS](https://www.openvoiceos.org/), die als Fork von Mycroft begann. Sie läuft auf Linux-Rechnern, Raspberry-Pi-Boards und in Docker, nimmt Skills als Plugins auf und kann Anfragen, die sie nicht zuordnen kann, an ein LLM weitergeben. Diese Rezension stützt sich auf die Projektwebsite und die GitHub-Dokumentation, nicht auf eigene Tests.',
    metaDescription: 'Open-Voice-OS-Rezension: quelloffener Sprachassistent aus Mycroft-Tradition für Linux und Raspberry Pi. Was die Doku zu Sprache, LLMs und Datenschutz sagt.',
    twitterDescription: 'Open-Voice-OS-Rezension: quelloffener Sprachassistent für Linux, Raspberry Pi und Docker. Lokale Sprachoptionen, LLM-Fallback und was die Doku offenlässt.',
    audience: 'Bastler, Raspberry-Pi-Besitzer und Smart-Speaker-Bauer, die einen offenen Sprachassistenten suchen und wissen müssen, was die Dokumentation zu Offline-Betrieb, LLM-Unterstützung und Datenweitergabe bestätigt.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Open Voice OS Rezension',
    targetKeywords: [
      'open voice os rezension',
      'ovos sprachassistent',
      'quelloffener sprachassistent raspberry pi',
      'mycroft alternative',
      'ovos installer',
      'offline sprachassistent linux',
      'ovos llm fallback',
    ],
    current_models_mentioned: [
      'Vosk',
      'Mimic3',
      'DeepSpeech',
    ],
    current_hardware_mentioned: [
      'Raspberry Pi 5',
      'Raspberry Pi 4',
      'Mark II',
    ],
    leadAnswerBlock: '**Open Voice OS (Installer v11.0.0, veröffentlicht am 29. August 2026) ist eine quelloffene Plattform für Sprachassistenten unter Linux, Raspberry Pi und Docker und läuft standardmäßig nicht vollständig offline.** Die Spracherkennung, mit der es startet, braucht Internet, lokale Sprachverarbeitung ist optional, und ein LLM-Fallback ist eine Ergänzung. Jede Aussage hier stammt aus der Projektdokumentation, nicht aus Tests.',
    quickAnswerTop: {
      de: {
        question: 'Funktioniert Open Voice OS ohne Internet?',
        answer: 'Laut Dokumentation nur teilweise: Der Installer schreibt, es sei kein vollständiger Offline-Modus, weil eine Aufnahme an öffentliche Sprachserver geht, wenn die lokale Erkennung scheitert oder nicht laufen kann. Lokale Sprache und Stimme sind für den Alpha-Kanal auf leistungsfähiger Hardware aufgeführt.',
        bullets: [
          'Skills sind Plugins; einige werden mitgeliefert, die meisten separat installiert.',
          'Der Installer kann Home Assistant, einen LLM-Fallback und HiveMind-Satelliten ergänzen.',
          'Es gibt zwei Arten der Datenweitergabe, beide sind ohne Ihre Zustimmung aus.',
          'Einstellungen stehen in einer einzigen Klartextdatei, mycroft.conf.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      {
        label: 'Kurzantwort',
        anchor: 'quick-answer',
      },
      {
        label: 'Was ist Open Voice OS?',
        anchor: 'what-is-ovos',
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
            text: 'Open Voice OS ist eine quelloffene Plattform für Sprachassistenten, die auf Ihrem eigenen Linux-Rechner, Raspberry Pi oder Container läuft und nicht zugeordnete Anfragen an ein LLM schicken kann.',
          },
          {
            type: 'plain-terms',
            text: 'Ein Wake Word startet sie, eine Sprach-Engine wandelt Ihre Worte in Text um, ein Skill antwortet oder ein optionales LLM springt ein, und eine Stimme liest die Antwort vor.',
          },
        ],
        items: [
          'Pflege: Im Installer-Repository wurde zuletzt am 1. November 2026 gepusht; ein Hinweis auf ein verwaistes Projekt entfällt.',
          'Lizenz: Open Source unter Apache-2.0 und kostenlos; Spenden sind freiwillig.',
          'Herkunft: Es begann als MycroftOS und pflegt einen erweiterten Fork von Mycroft-core.',
          'Einrichtung: ein Terminalbefehl, ein browsergeführter Installer oder ein Raspberry-Pi-Image, keine App zum Doppelklicken.',
          'Spracherkennung: Die Standard-Engine braucht Internet; lokale Engines sind optional.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf die Website von Open Voice OS und die GitHub-Dokumentation von ovos-core, ovos-installer und ovos-docker, geprüft am 1. November 2026. PromptQuorum hat das System weder installiert noch gemessen; Erkennungsqualität, Latenz und Zuverlässigkeit der LLMs werden daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-ovos',
        title: 'Was ist Open Voice OS?',
        content: [
          '**Open Voice OS ist eine von der Community betriebene Plattform für Sprachassistenten auf Smart Speakern und anderen sprachgesteuerten Geräten.** Laut Website begann sie als MycroftOS, wurde wegen Markenproblemen umbenannt und pflegt heute einen erweiterten Fork von Mycroft-core. Die Kernkomponente [ovos-core](https://github.com/OpenVoiceOS/ovos-core) steht unter Apache-2.0.',
          'Neben dem Kern gibt es einen Installer, ein Raspberry-Pi-Image und ein Docker-Setup. Das Core-Repository nennt als neuestes GitHub-Release 2.1.1 (5. November 2025), während der Installer bei v11.0.0 steht und der Standard-Branch des Kerns weiter Commits erhält.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Open Voice OS hat keinen einzelnen Download: Zur Wahl stehen ein browsergeführter Installer, ein Terminal-Skript, ein Raspberry-Pi-Image oder Docker.**',
        ],
        columns: [
          'Option',
          'Bezug',
        ],
        rows: [
          {
            Option: 'Browser-Installer',
            Bezug: '[start.openvoiceos.org](https://start.openvoiceos.org/): geführte Einrichtung, als einfachster Weg bezeichnet',
          },
          {
            Option: 'Installer-Skript',
            Bezug: '[ovos-installer](https://github.com/OpenVoiceOS/ovos-installer): ein Befehl unter Linux, WSL2, macOS 15+',
          },
          {
            Option: 'Raspberry-Pi-Image',
            Bezug: '[RaspOVOS](https://openvoiceos.github.io/raspOVOS/); [Entwicklungs-Images](https://downloads.openvoiceos.org/images/) mit dem Hinweis „Expect bugs“',
          },
          {
            Option: 'Docker',
            Bezug: '[ovos-docker](https://github.com/OpenVoiceOS/ovos-docker), Apache-2.0',
          },
          {
            Option: 'Website',
            Bezug: '[openvoiceos.org](https://www.openvoiceos.org/)',
          },
          {
            Option: 'Datenweitergabe',
            Bezug: '[Telemetrie-Hinweise](https://github.com/OpenVoiceOS/ovos-installer/blob/main/docs/telemetry.md); eine Datenschutzerklärung wurde nicht gefunden',
          },
          {
            Option: 'Quellcode',
            Bezug: '[ovos-core](https://github.com/OpenVoiceOS/ovos-core), Apache-2.0',
          },
        ],
        note: 'Geprüfte Versionen: ovos-installer v11.0.0 (29. August 2026) und ovos-core 2.1.1 (5. November 2025) laut GitHub. Der Installer braucht ein Terminal: Es gibt keine App zum Doppelklicken. Das Projekt ist kostenlos; die Website bietet nur freiwillige Spenden an.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
          '**Die Quellen nennen eine Systemliste und eine Hardwareangabe; darüber hinaus ist jede Dimensionierung Spekulation.**',
        ],
        columns: [
          'Punkt',
          'Angaben der Quellen',
        ],
        rows: [
          {
            Punkt: 'Betriebssystem',
            'Angaben der Quellen': 'Debian/Ubuntu und Derivate, Fedora, Arch, openSUSE, WSL2, macOS 15+ auf Apple Silicon (zusätzliche Einrichtung)',
          },
          {
            Punkt: 'Werkzeuge',
            'Angaben der Quellen': 'curl, git, sudo und Bash 4 oder neuer für das Installer-Skript',
          },
          {
            Punkt: 'Lokale Sprache',
            'Angaben der Quellen': 'Ein Raspberry Pi 5 mit 8 GB RAM oder etwas mindestens ebenso Leistungsfähiges',
          },
          {
            Punkt: 'Boards und Geräte',
            'Angaben der Quellen': 'Raspberry Pi 3, 4 und 5 laut Download-Seite; Mark-I- und Mark-II-Geräte',
          },
          {
            Punkt: 'Sprach-Engines',
            'Angaben der Quellen': 'Standarderkennung braucht Internet; genannt werden Vosk und DeepSpeech (offline) sowie Mimic3 (lokale Stimme)',
          },
          {
            Punkt: 'Konfiguration',
            'Angaben der Quellen': 'Eine einzige Klartextdatei: mycroft.conf',
          },
        ],
        note: 'Eine Liste unterstützter Sprachen tauchte auf den geprüften Seiten nicht auf; prüfen Sie Ihre Sprache, bevor Sie Zeit investieren.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Diese Schritte folgen der Dokumentation; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Installationsweg wählen',
            whyItMatters: 'Nutzen Sie den Browser-Installer, das Einzeiler-Installer-Skript, das Raspberry-Pi-Image oder das Docker-Setup.',
          },
          {
            title: 'Installer-Fragen beantworten',
            whyItMatters: 'Wählen Sie Virtualenv oder Container, einen Release-Kanal, ein Profil und Funktionen wie Home Assistant oder ein LLM.',
          },
          {
            title: 'Zusätze festlegen',
            whyItMatters: 'Verbinden Sie optional Home Assistant, einen OpenAI-kompatiblen LLM-Endpunkt oder HiveMind-Satelliten für weitere Geräte.',
          },
          {
            title: 'Datenweitergabe prüfen',
            whyItMatters: 'Stimmen Sie Installer-Telemetrie und Nutzungsmetriken zu oder lehnen Sie sie ab und bearbeiten Sie alles Weitere in mycroft.conf.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Alles Folgende stammt aus der Dokumentation von Open Voice OS; nichts davon wurde unabhängig getestet.**',
        ],
        items: [
          '**Skills als Plugins.** Einige Skills werden mit ovos-core geliefert, die meisten separat über PyPI oder die GitHub-Organisation OpenVoiceOS installiert; die meisten klassischen Mycroft-Skills laufen ebenfalls.',
          '**LLM-Fallback.** Über ovos-persona und Solver-Plugins können Anfragen, die kein Skill bearbeitet, an jeden OpenAI-kompatiblen Endpunkt gehen, auch an einen selbst gehosteten.',
          '**Home Assistant.** Der Installer kann eine optionale Home-Assistant-Integration einrichten.',
          '**HiveMind-Satelliten.** Mehrere Geräte können sich einen Assistenten teilen.',
          '**Terminal-Client.** Mit ovos-tui-client lässt sich dem Assistenten ohne Mikrofon schreiben.',
        ],
        note: 'Die Beispiel-Persona im README des Kerns verweist auf einen Demo-Server, für den „no uptime is guaranteed“ gilt.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Der Installer schreibt, Open Voice OS sei kein vollständiger Offline-Modus: Scheitert die Erkennung oder liefert sie nichts, geht die Aufnahme an öffentliche Server, und ein Teil, der lokal nicht laufen kann, weicht auf öffentliche Sprachdienste aus.** Lokale Erkennung und Stimme werden für den Alpha-Kanal beschrieben. Die Website spricht lediglich von einem „focus on privacy and security“.',
          'Zwei Arten der Datenweitergabe werden getrennt abgefragt und sind ohne Zustimmung aus. Installer-Telemetrie wird einmal während der Installation gesendet und nutzt bei Zustimmung eine IP-Abfrage bei einem Drittanbieter über unverschlüsseltes HTTP, um das Land zu ermitteln. Nutzungsmetriken melden die erkannten Intents an einen Community-Server und werden auf einem Open-Data-Portal veröffentlicht; wer den Block open_data aus mycroft.conf entfernt, beendet sie.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Angaben des Projekts, keine Prüfergebnisse. PromptQuorum hat weder den Netzwerkverkehr noch den Quellcode untersucht.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Raspberry-Pi- und Linux-Bastler**, die einen offenen Smart-Speaker-Stack wollen und eine Terminal-Installation akzeptieren.',
          '**Mycroft-Nutzer** auf der Suche nach einem aktiv gepflegten Nachfolger, der viele klassische Skills weiter ausführt.',
          '**Home-Assistant-Besitzer**, die einen eigenständigen, erweiterbaren Sprachassistenten mit optionalem LLM dahinter möchten.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Erkennungsqualität und Geschwindigkeit.** Die Quellen nennen keine Zeitangaben, und PromptQuorum hat nichts gemessen.',
          '**Sprachabdeckung.** Auf den geprüften Seiten fand sich keine Liste unterstützter Sprachen.',
          '**Release-Rhythmus.** Das neueste GitHub-Release des Kerns stammt vom November 2025, während weiter committet wird; die Dokumentation verweist auf Besonderheiten der Vorabversion.',
          '**Umgang der Community-Server mit Daten.** Speicherdauer und Nutzung der an Telemetrie- und Metrikserver gesendeten Daten sind nicht dokumentiert, und eine Datenschutzerklärung wurde nicht gefunden.',
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
          {
            App: '[Home Assistant Assist](/de/power-local-llm/home-assistant-assist-review)',
            Plattformen: 'Linux, Web, iOS, Android',
            'Preis / Lizenz': 'Kostenlos / Apache-2.0',
            'Wichtigster Unterschied': 'Sprach-Pipeline im Smart-Home-Server Home Assistant',
          },
          {
            App: '[Voxa](/de/power-local-llm/voxa-review)',
            Plattformen: 'Windows, macOS, Linux',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wichtigster Unterschied': 'Lokal-first-Desktop-Sprachassistent mit optionaler Cloud-Stimme',
          },
          {
            App: '[Jarvis](/de/power-local-llm/jarvis-mac-review)',
            Plattformen: 'macOS',
            'Preis / Lizenz': 'Kostenlos / Open Source',
            'Wichtigster Unterschied': 'Desktop-Assistent für einen Rechner mit mitgeliefertem Llama, Whisper und Kokoro, laut Eintrag',
          },
        ],
        note: 'Das sind die nächstliegenden Sprachassistenten im Verzeichnis, keine direkten Ersatzlösungen; prüfen Sie Preis, Lizenz und Plattformen jeweils auf der eigenen Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist Open Voice OS dasselbe wie Mycroft?',
            a: 'Nein, es stammt aber davon ab: Das Projekt schreibt, es habe als MycroftOS begonnen und pflege einen erweiterten Fork von Mycroft-core, und laut README des Kerns laufen die meisten klassischen Mycroft-Skills ebenfalls.',
          },
          {
            q: 'Kann es ein lokales LLM nutzen?',
            a: 'Ja, als optionalen Fallback: Der Installer akzeptiert jeden OpenAI-kompatiblen Endpunkt, auch einen selbst gehosteten, für Anfragen, die Skills nicht bearbeiten.',
          },
          {
            q: 'Brauche ich einen Raspberry Pi?',
            a: 'Nein. Auch Linux-Distributionen, WSL2, macOS 15+ auf Apple Silicon und Docker sind aufgeführt; nur die lokale Sprache ist an einen Raspberry Pi 5 mit 8 GB RAM oder besser geknüpft.',
          },
          {
            q: 'Geht es ohne Mikrofon?',
            a: 'Der Installer richtet ovos-tui-client ein, einen Terminal-Client, um dem Assistenten zu schreiben.',
          },
          {
            q: 'Wie stoppe ich die Nutzungsmetriken?',
            a: 'Entfernen Sie den Block open_data aus mycroft.conf und starten Sie die Dienste neu; wie sich zugestimmte Installer-Telemetrie zurücknehmen lässt, erklärt die Dokumentation nicht.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Open Voice OS ist ein aktiv weiterentwickelter Weg unter Apache-2.0 zu einem offenen Sprachassistenten auf Hardware, die Sie selbst kontrollieren, mit optionaler lokaler Sprache sowie Home-Assistant- und LLM-Ergänzungen. Dem stehen gegenüber: Die Standard-Erkennung braucht Internet, die Installation erfolgt im Terminal, auf den geprüften Seiten fand sich keine Sprachliste, und Sprachqualität und Latenz sind hier ungetestet. Es eignet sich für Bastler und Mycroft-Veteranen; wer eine App zum Doppelklicken will, sollte sich die Alternativen oben ansehen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von Open Voice OS](https://www.openvoiceos.org/) — Projektbeschreibung, Lizenz, Plattformen und Links.',
          '[Download-Seite](https://www.openvoiceos.org/downloads) — Browser-Installer, Raspberry-Pi-Image und Entwicklungs-Images.',
          '[ovos-installer](https://github.com/OpenVoiceOS/ovos-installer) — Installationsbefehl, unterstützte Systeme, optionale Funktionen und Hinweise zur Sprache.',
          '[Telemetrie-Hinweise des Installers](https://github.com/OpenVoiceOS/ovos-installer/blob/main/docs/telemetry.md) — was Telemetrie und Nutzungsmetriken senden.',
          '[ovos-core](https://github.com/OpenVoiceOS/ovos-core) — Skills, ovos-persona, Lizenz und Release-Stand.',
          '[ovos-installer v11.0.0](https://github.com/OpenVoiceOS/ovos-installer/releases/tag/v11.0.0) — geprüftes Veröffentlichungsdatum.',
          '[ovos-docker](https://github.com/OpenVoiceOS/ovos-docker) — Container-Setup.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Home-Assistant-Assist-Rezension](/de/power-local-llm/home-assistant-assist-review) — die Sprach-Pipeline in Home Assistant.',
          '[Whisper.cpp-Rezension](/de/power-local-llm/whisper-cpp-review) — eine lokale Spracherkennung zum Selbstbetrieb.',
          '[Piper-TTS-Rezension](/de/power-local-llm/piper-tts-review) — eine lokale Text-to-Speech-Engine für die Sprachausgabe.',
          '[Sprach- und Audio-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — der Kategorievergleich, zu dem diese Rezension gehört.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-01',
    dateModified: '2026-11-01',
    next_refresh_due: '2027-05-01',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/openvoiceos-review-hero-es.webp',
    title: 'Reseña de Open Voice OS: asistente de voz de código abierto para Linux y Raspberry Pi',
    seoTitle: 'Reseña de Open Voice OS: asistente de voz abierto',
    intro: 'Open Voice OS (OVOS) es una plataforma comunitaria de código abierto para asistentes de voz de [OpenVoiceOS](https://www.openvoiceos.org/), que nació como bifurcación de Mycroft. Funciona en equipos Linux, placas Raspberry Pi y Docker, incorpora habilidades como complementos y puede pasar a un LLM las peticiones que no logra reconocer. Esta reseña se basa en el sitio web del proyecto y su documentación en GitHub, no en pruebas propias.',
    metaDescription: 'Reseña de Open Voice OS: asistente de voz abierto, descendiente de Mycroft, para Linux y Raspberry Pi. Lo que dice la doc sobre voz, LLM y privacidad.',
    twitterDescription: 'Reseña de Open Voice OS: asistente de voz de código abierto para Linux, Raspberry Pi y Docker. Voz local, respaldo LLM y lo que la documentación deja abierto.',
    audience: 'Aficionados, propietarios de Raspberry Pi y creadores de altavoces inteligentes que buscan un asistente de voz abierto y necesitan saber qué confirma la documentación sobre el uso sin conexión, el soporte de LLM y el intercambio de datos.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Open Voice OS',
    targetKeywords: [
      'reseña open voice os',
      'asistente de voz ovos',
      'asistente de voz código abierto raspberry pi',
      'alternativa a mycroft',
      'instalador ovos',
      'asistente de voz sin conexión linux',
      'ovos respaldo llm',
    ],
    current_models_mentioned: [
      'Vosk',
      'Mimic3',
      'DeepSpeech',
    ],
    current_hardware_mentioned: [
      'Raspberry Pi 5',
      'Raspberry Pi 4',
      'Mark II',
    ],
    leadAnswerBlock: '**Open Voice OS (instalador v11.0.0, publicado el 29 de agosto de 2026) es una plataforma de código abierto para asistentes de voz en Linux, Raspberry Pi y Docker, y por defecto no funciona totalmente sin conexión.** El reconocedor de voz con el que arranca necesita internet, la voz local es opcional y el respaldo con un LLM es un complemento. Cada afirmación procede de la documentación del proyecto, no de pruebas.',
    quickAnswerTop: {
      es: {
        question: '¿Funciona Open Voice OS sin internet?',
        answer: 'Solo en parte, según la documentación: el instalador indica que no es un modo totalmente sin conexión, porque una grabación se envía a servidores públicos de voz cuando el reconocimiento local falla o no puede ejecutarse. La voz y el reconocimiento locales figuran para el canal alfa con hardware capaz.',
        bullets: [
          'Las habilidades son complementos; algunas vienen incluidas y la mayoría se instala aparte.',
          'El instalador puede añadir Home Assistant, un respaldo LLM y satélites HiveMind.',
          'Hay dos tipos de intercambio de datos, y ambos están desactivados salvo que se acepten.',
          'Los ajustes están en un único archivo de texto, mycroft.conf.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      {
        label: 'Respuesta rápida',
        anchor: 'quick-answer',
      },
      {
        label: '¿Qué es Open Voice OS?',
        anchor: 'what-is-ovos',
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
            text: 'Open Voice OS es una plataforma de código abierto para asistentes de voz que funciona en un equipo Linux, una Raspberry Pi o un contenedor propios y puede enviar a un LLM las peticiones sin respuesta.',
          },
          {
            type: 'plain-terms',
            text: 'Una palabra de activación lo inicia, un motor de voz convierte las palabras en texto, una habilidad responde o interviene un LLM opcional, y una voz lee la respuesta.',
          },
        ],
        items: [
          'Mantenimiento: el repositorio del instalador recibió su último push el 1 de noviembre de 2026, por lo que no corresponde aviso de proyecto inactivo.',
          'Licencia: código abierto Apache-2.0 y gratuito; las donaciones son opcionales.',
          'Origen: empezó como MycroftOS y mantiene una bifurcación mejorada de Mycroft-core.',
          'Instalación: un comando de terminal, un instalador guiado en el navegador o una imagen para Raspberry Pi, no una app de doble clic.',
          'Reconocimiento de voz: el motor por defecto necesita internet; los motores locales son opcionales.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web de Open Voice OS y en la documentación de GitHub de ovos-core, ovos-installer y ovos-docker, consultadas el 1 de noviembre de 2026. PromptQuorum no lo ha instalado ni medido, por lo que no se evalúan la calidad de reconocimiento, la latencia ni la fiabilidad de los LLM.',
          },
        ],
      },
      overview: {
        id: 'what-is-ovos',
        title: '¿Qué es Open Voice OS?',
        content: [
          '**Open Voice OS es una plataforma de asistentes de voz gestionada por la comunidad para altavoces inteligentes y otros dispositivos controlados por voz.** Según el sitio web, nació como MycroftOS, cambió de nombre para evitar problemas de marca y hoy mantiene una bifurcación mejorada de Mycroft-core. Su componente central, [ovos-core](https://github.com/OpenVoiceOS/ovos-core), se publica con licencia Apache-2.0.',
          'Además del núcleo hay un instalador, una imagen para Raspberry Pi y una configuración Docker. El repositorio del núcleo indica como última versión de GitHub la 2.1.1 (5 de noviembre de 2025), mientras que el instalador está en v11.0.0 y la rama principal del núcleo sigue recibiendo commits.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**Open Voice OS no tiene una única descarga: se elige entre un instalador guiado en el navegador, un script de terminal, una imagen para Raspberry Pi o Docker.**',
        ],
        columns: [
          'Opción',
          'Cómo conseguirlo',
        ],
        rows: [
          {
            'Opción': 'Instalador en el navegador',
            'Cómo conseguirlo': '[start.openvoiceos.org](https://start.openvoiceos.org/): configuración guiada, descrita como la vía más fácil',
          },
          {
            'Opción': 'Script de instalación',
            'Cómo conseguirlo': '[ovos-installer](https://github.com/OpenVoiceOS/ovos-installer): un comando en Linux, WSL2, macOS 15+',
          },
          {
            'Opción': 'Imagen para Raspberry Pi',
            'Cómo conseguirlo': '[RaspOVOS](https://openvoiceos.github.io/raspOVOS/); las [imágenes de desarrollo](https://downloads.openvoiceos.org/images/) llevan la nota «Expect bugs»',
          },
          {
            'Opción': 'Docker',
            'Cómo conseguirlo': '[ovos-docker](https://github.com/OpenVoiceOS/ovos-docker), Apache-2.0',
          },
          {
            'Opción': 'Sitio web',
            'Cómo conseguirlo': '[openvoiceos.org](https://www.openvoiceos.org/)',
          },
          {
            'Opción': 'Intercambio de datos',
            'Cómo conseguirlo': '[Notas de telemetría](https://github.com/OpenVoiceOS/ovos-installer/blob/main/docs/telemetry.md); no se encontró una política de privacidad',
          },
          {
            'Opción': 'Código fuente',
            'Cómo conseguirlo': '[ovos-core](https://github.com/OpenVoiceOS/ovos-core), Apache-2.0',
          },
        ],
        note: 'Versiones revisadas: ovos-installer v11.0.0 (29 de agosto de 2026) y ovos-core 2.1.1 (5 de noviembre de 2025), según GitHub. El instalador requiere una terminal: no hay app de doble clic. El proyecto es gratuito; el sitio solo ofrece donaciones opcionales.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**Las fuentes dan una lista de sistemas y una cifra de hardware, así que cualquier dimensionamiento adicional es una suposición.**',
        ],
        columns: [
          'Elemento',
          'Qué dicen las fuentes',
        ],
        rows: [
          {
            Elemento: 'Sistema operativo',
            'Qué dicen las fuentes': 'Debian/Ubuntu y derivados, Fedora, Arch, openSUSE, WSL2, macOS 15+ en Apple Silicon (configuración adicional)',
          },
          {
            Elemento: 'Herramientas',
            'Qué dicen las fuentes': 'curl, git, sudo y Bash 4 o posterior para el script de instalación',
          },
          {
            Elemento: 'Voz local',
            'Qué dicen las fuentes': 'Una Raspberry Pi 5 con 8 GB de RAM o algo al menos igual de capaz',
          },
          {
            Elemento: 'Placas y dispositivos',
            'Qué dicen las fuentes': 'Raspberry Pi 3, 4 y 5 según la página de descargas; dispositivos Mark I y Mark II',
          },
          {
            Elemento: 'Motores de voz',
            'Qué dicen las fuentes': 'El reconocimiento por defecto necesita internet; se nombran Vosk y DeepSpeech (sin conexión) y Mimic3 (voz local)',
          },
          {
            Elemento: 'Configuración',
            'Qué dicen las fuentes': 'Un único archivo de texto: mycroft.conf',
          },
        ],
        note: 'En las páginas revisadas no apareció una lista de idiomas admitidos; conviene confirmar el idioma antes de invertir tiempo.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Estos pasos siguen la documentación; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Elegir la vía de instalación',
            whyItMatters: 'Se puede usar el instalador del navegador, el script de una línea, la imagen para Raspberry Pi o la configuración Docker.',
          },
          {
            title: 'Responder a las pantallas del instalador',
            whyItMatters: 'Se elige virtualenv o contenedor, un canal de versiones, un perfil y funciones como Home Assistant o un LLM.',
          },
          {
            title: 'Decidir los extras',
            whyItMatters: 'Opcionalmente se conectan Home Assistant, un endpoint de LLM compatible con OpenAI o satélites HiveMind para más dispositivos.',
          },
          {
            title: 'Revisar el intercambio de datos',
            whyItMatters: 'Se aceptan o rechazan la telemetría del instalador y las métricas de uso, y el resto se edita en mycroft.conf.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Todo lo siguiente procede de la documentación de Open Voice OS; nada se ha probado de forma independiente.**',
        ],
        items: [
          '**Habilidades como complementos.** Algunas habilidades vienen con ovos-core y la mayoría se instala aparte desde PyPI o la organización OpenVoiceOS de GitHub; la mayoría de las habilidades clásicas de Mycroft también funcionan.',
          '**Respaldo LLM.** Mediante ovos-persona y complementos solver, las peticiones que ninguna habilidad atiende pueden ir a cualquier endpoint compatible con OpenAI, incluso uno autoalojado.',
          '**Home Assistant.** El instalador puede configurar una integración opcional con Home Assistant.',
          '**Satélites HiveMind.** Varios dispositivos pueden compartir un único asistente.',
          '**Cliente de terminal.** ovos-tui-client permite escribir al asistente sin micrófono.',
        ],
        note: 'La persona de ejemplo del README del núcleo apunta a un servidor de demostración para el que «no uptime is guaranteed».',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**El instalador indica que Open Voice OS no es un modo totalmente sin conexión: si el reconocimiento falla o no devuelve nada, la grabación va a servidores públicos, y la parte que no puede ejecutarse en local recurre a voz pública.** El reconocimiento y la voz locales se describen para el canal alfa. El sitio web solo habla de un «focus on privacy and security».',
          'Se pregunta por separado por dos tipos de intercambio de datos, y ambos están desactivados salvo aceptación. La telemetría del instalador se envía una vez durante la instalación y, si se acepta, usa una consulta de IP a un tercero mediante HTTP sin cifrar para rellenar el país. Las métricas de uso comunican los intents reconocidos a un servidor comunitario y se publican en un portal de datos abiertos; eliminar el bloque open_data de mycroft.conf las detiene.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del proyecto, no resultados de una auditoría. PromptQuorum no ha inspeccionado el tráfico de red ni el código fuente.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Aficionados a Raspberry Pi y Linux** que quieren una pila abierta de altavoz inteligente y aceptan instalar desde terminal.',
          '**Usuarios de Mycroft** que buscan un descendiente mantenido activamente que aún ejecuta muchas habilidades clásicas.',
          '**Propietarios de Home Assistant** que desean un asistente de voz independiente y ampliable, con un LLM opcional detrás.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad y velocidad de reconocimiento.** Las fuentes no dan tiempos y PromptQuorum no midió nada.',
          '**Cobertura de idiomas.** En las páginas revisadas no apareció una lista de idiomas admitidos.',
          '**Ritmo de versiones.** La versión más reciente del núcleo en GitHub es de noviembre de 2025 mientras continúan los commits; la documentación menciona particularidades de la versión preliminar.',
          '**Tratamiento de datos en servidores comunitarios.** No se documentan la conservación ni el uso de los datos enviados a los servidores de telemetría y métricas, y no se encontró una política de privacidad.',
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
          {
            App: '[Home Assistant Assist](/es/power-local-llm/home-assistant-assist-review)',
            Plataformas: 'Linux, web, iOS, Android',
            'Precio / licencia': 'Gratis / Apache-2.0',
            'Diferencia clave': 'Canal de voz dentro del servidor domótico Home Assistant',
          },
          {
            App: '[Voxa](/es/power-local-llm/voxa-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Asistente de voz de escritorio local primero, con voz en la nube opcional',
          },
          {
            App: '[Jarvis](/es/power-local-llm/jarvis-mac-review)',
            Plataformas: 'macOS',
            'Precio / licencia': 'Gratis / código abierto',
            'Diferencia clave': 'Asistente de escritorio para un solo equipo con Llama, Whisper y Kokoro incluidos, según su ficha',
          },
        ],
        note: 'Son los asistentes de voz más cercanos del directorio, no sustitutos directos; conviene confirmar precio, licencia y plataformas actuales en la página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es Open Voice OS lo mismo que Mycroft?',
            a: 'No, pero desciende de él: el proyecto dice que empezó como MycroftOS y mantiene una bifurcación mejorada de Mycroft-core, y el README del núcleo indica que la mayoría de las habilidades clásicas de Mycroft también funcionan.',
          },
          {
            q: '¿Puede usar un LLM local?',
            a: 'Sí, como respaldo opcional: el instalador acepta cualquier endpoint compatible con OpenAI, incluso uno autoalojado, para las peticiones que las habilidades no atienden.',
          },
          {
            q: '¿Necesito una Raspberry Pi?',
            a: 'No. También figuran distribuciones Linux, WSL2, macOS 15+ en Apple Silicon y Docker; solo la voz local se vincula a una Raspberry Pi 5 con 8 GB de RAM o superior.',
          },
          {
            q: '¿Se puede usar sin micrófono?',
            a: 'El instalador configura ovos-tui-client, un cliente de terminal para escribir al asistente.',
          },
          {
            q: '¿Cómo detengo las métricas de uso?',
            a: 'Elimine el bloque open_data de mycroft.conf y reinicie los servicios; la documentación no explica cómo retirar la telemetría del instalador una vez aceptada.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Open Voice OS es una vía activa y con licencia Apache-2.0 hacia un asistente de voz abierto en hardware propio, con voz local, Home Assistant y LLM como complementos opcionales. En contra: el reconocedor por defecto necesita internet, la instalación se hace en terminal, en las páginas revisadas no apareció una lista de idiomas y aquí no se probaron la calidad de voz ni la latencia. Encaja con aficionados y veteranos de Mycroft; quien busque una app de doble clic debería mirar las alternativas anteriores.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Open Voice OS](https://www.openvoiceos.org/) — descripción del proyecto, licencia, plataformas y enlaces.',
          '[Página de descargas](https://www.openvoiceos.org/downloads) — instalador del navegador, imagen para Raspberry Pi e imágenes de desarrollo.',
          '[ovos-installer](https://github.com/OpenVoiceOS/ovos-installer) — comando de instalación, sistemas admitidos, funciones opcionales y advertencias sobre la voz.',
          '[Notas de telemetría del instalador](https://github.com/OpenVoiceOS/ovos-installer/blob/main/docs/telemetry.md) — qué envían la telemetría y las métricas de uso.',
          '[ovos-core](https://github.com/OpenVoiceOS/ovos-core) — habilidades, ovos-persona, licencia y estado de las versiones.',
          '[ovos-installer v11.0.0](https://github.com/OpenVoiceOS/ovos-installer/releases/tag/v11.0.0) — fecha de publicación revisada.',
          '[ovos-docker](https://github.com/OpenVoiceOS/ovos-docker) — configuración en contenedor.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Home Assistant Assist](/es/power-local-llm/home-assistant-assist-review) — el canal de voz dentro de Home Assistant.',
          '[Reseña de Whisper.cpp](/es/power-local-llm/whisper-cpp-review) — un reconocedor de voz local que puede ejecutarse por cuenta propia.',
          '[Reseña de Piper TTS](/es/power-local-llm/piper-tts-review) — un motor local de síntesis de voz para la salida hablada.',
          '[Herramientas de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — la comparativa de categoría a la que pertenece esta reseña.',
          '[Directorio de software LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-01',
    dateModified: '2026-11-01',
    next_refresh_due: '2027-05-01',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/openvoiceos-review-hero-fr.webp',
    title: 'Avis Open Voice OS : assistant vocal open source pour Linux et Raspberry Pi',
    seoTitle: 'Avis Open Voice OS : assistant vocal open source',
    intro: 'Open Voice OS (OVOS) est une plateforme communautaire open source d’assistant vocal, proposée par [OpenVoiceOS](https://www.openvoiceos.org/), née d’un fork de Mycroft. Elle fonctionne sur des machines Linux, des cartes Raspberry Pi et Docker, accueille des skills sous forme de plugins et peut transmettre à un LLM les demandes qu’elle ne reconnaît pas. Cet avis s’appuie sur le site du projet et sa documentation GitHub, non sur des tests pratiques.',
    metaDescription: 'Avis Open Voice OS : assistant vocal open source issu de Mycroft pour Linux et Raspberry Pi. Ce que dit la doc sur la voix, les LLM et la vie privée.',
    twitterDescription: 'Avis Open Voice OS : assistant vocal open source pour Linux, Raspberry Pi et Docker. Voix locale, repli LLM et ce que la documentation laisse ouvert.',
    audience: 'Bricoleurs, propriétaires de Raspberry Pi et concepteurs d’enceintes connectées qui cherchent un assistant vocal ouvert et veulent savoir ce que la documentation confirme sur l’usage hors ligne, la prise en charge des LLM et le partage de données.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'avis Open Voice OS',
    targetKeywords: [
      'avis open voice os',
      'assistant vocal ovos',
      'assistant vocal open source raspberry pi',
      'alternative à mycroft',
      'installateur ovos',
      'assistant vocal hors ligne linux',
      'ovos repli llm',
    ],
    current_models_mentioned: [
      'Vosk',
      'Mimic3',
      'DeepSpeech',
    ],
    current_hardware_mentioned: [
      'Raspberry Pi 5',
      'Raspberry Pi 4',
      'Mark II',
    ],
    leadAnswerBlock: '**Open Voice OS (installateur v11.0.0, publié le 29 août 2026) est une plateforme open source d’assistant vocal pour Linux, Raspberry Pi et Docker, et elle ne fonctionne pas entièrement hors ligne par défaut.** Le moteur de reconnaissance vocale avec lequel elle démarre nécessite internet, la voix locale est optionnelle et le repli vers un LLM est un ajout. Chaque affirmation provient de la documentation du projet, non de tests.',
    quickAnswerTop: {
      fr: {
        question: 'Open Voice OS fonctionne-t-il sans internet ?',
        answer: 'En partie seulement, selon la documentation : l’installateur précise qu’il ne s’agit pas d’un mode entièrement hors ligne, car un enregistrement part vers des serveurs vocaux publics lorsque la reconnaissance locale échoue ou ne peut pas tourner. La voix et la reconnaissance locales sont indiquées pour le canal alpha sur du matériel capable.',
        bullets: [
          'Les skills sont des plugins ; certains sont fournis et la plupart s’installent séparément.',
          'L’installateur peut ajouter Home Assistant, un repli LLM et des satellites HiveMind.',
          'Il existe deux types de partage de données, tous deux désactivés sauf acceptation.',
          'Les réglages tiennent dans un seul fichier texte, mycroft.conf.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      {
        label: 'Réponse rapide',
        anchor: 'quick-answer',
      },
      {
        label: 'Qu’est-ce que Open Voice OS ?',
        anchor: 'what-is-ovos',
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
        label: 'À qui il s’adresse',
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
            text: 'Open Voice OS est une plateforme open source d’assistant vocal qui tourne sur votre propre machine Linux, Raspberry Pi ou conteneur et peut envoyer les demandes non reconnues à un LLM.',
          },
          {
            type: 'plain-terms',
            text: 'Un mot d’éveil le déclenche, un moteur vocal transforme vos paroles en texte, un skill répond ou un LLM optionnel prend le relais, puis une voix lit la réponse.',
          },
        ],
        items: [
          'Maintenance : le dépôt de l’installateur a reçu son dernier push le 1er novembre 2026, donc aucun avertissement de projet abandonné ne s’applique.',
          'Licence : open source Apache-2.0 et gratuit ; les dons sont facultatifs.',
          'Origine : il est né sous le nom MycroftOS et maintient un fork amélioré de Mycroft-core.',
          'Installation : une commande de terminal, un installateur guidé dans le navigateur ou une image Raspberry Pi, pas une application à double-clic.',
          'Reconnaissance vocale : le moteur par défaut nécessite internet ; les moteurs locaux sont optionnels.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cet avis s’appuie sur le site d’Open Voice OS et sur la documentation GitHub d’ovos-core, d’ovos-installer et d’ovos-docker, consultés le 1er novembre 2026. PromptQuorum ne l’a ni installé ni chronométré ; la qualité de reconnaissance, la latence et la fiabilité des LLM ne sont donc pas évaluées.',
          },
        ],
      },
      overview: {
        id: 'what-is-ovos',
        title: 'Qu’est-ce que Open Voice OS ?',
        content: [
          '**Open Voice OS est une plateforme d’assistant vocal gérée par la communauté, destinée aux enceintes connectées et autres appareils pilotés à la voix.** Selon le site, elle est née sous le nom MycroftOS, a été rebaptisée pour éviter des problèmes de marque et maintient aujourd’hui un fork amélioré de Mycroft-core. Son composant central, [ovos-core](https://github.com/OpenVoiceOS/ovos-core), est publié sous licence Apache-2.0.',
          'Autour du noyau se trouvent un installateur, une image Raspberry Pi et une configuration Docker. Le dépôt du noyau indique comme dernière version GitHub la 2.1.1 (5 novembre 2025), tandis que l’installateur en est à v11.0.0 et que la branche par défaut du noyau continue de recevoir des commits.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Open Voice OS n’a pas de téléchargement unique : on choisit entre un installateur guidé dans le navigateur, un script de terminal, une image Raspberry Pi ou Docker.**',
        ],
        columns: [
          'Option',
          'Comment l’obtenir',
        ],
        rows: [
          {
            Option: 'Installateur dans le navigateur',
            'Comment l’obtenir': '[start.openvoiceos.org](https://start.openvoiceos.org/) : installation guidée, présentée comme la voie la plus simple',
          },
          {
            Option: 'Script d’installation',
            'Comment l’obtenir': '[ovos-installer](https://github.com/OpenVoiceOS/ovos-installer) : une commande sous Linux, WSL2, macOS 15+',
          },
          {
            Option: 'Image Raspberry Pi',
            'Comment l’obtenir': '[RaspOVOS](https://openvoiceos.github.io/raspOVOS/) ; les [images de développement](https://downloads.openvoiceos.org/images/) portent la mention « Expect bugs »',
          },
          {
            Option: 'Docker',
            'Comment l’obtenir': '[ovos-docker](https://github.com/OpenVoiceOS/ovos-docker), Apache-2.0',
          },
          {
            Option: 'Site web',
            'Comment l’obtenir': '[openvoiceos.org](https://www.openvoiceos.org/)',
          },
          {
            Option: 'Partage de données',
            'Comment l’obtenir': '[Notes sur la télémétrie](https://github.com/OpenVoiceOS/ovos-installer/blob/main/docs/telemetry.md) ; aucune politique de confidentialité trouvée',
          },
          {
            Option: 'Code source',
            'Comment l’obtenir': '[ovos-core](https://github.com/OpenVoiceOS/ovos-core), Apache-2.0',
          },
        ],
        note: 'Versions examinées : ovos-installer v11.0.0 (29 août 2026) et ovos-core 2.1.1 (5 novembre 2025), selon GitHub. L’installateur exige un terminal : il n’y a pas d’application à double-clic. Le projet est gratuit ; le site ne propose que des dons facultatifs.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**Les sources donnent une liste de systèmes et un seul chiffre matériel ; tout dimensionnement au-delà relève de la supposition.**',
        ],
        columns: [
          'Élément',
          'Ce que disent les sources',
        ],
        rows: [
          {
            'Élément': 'Système d’exploitation',
            'Ce que disent les sources': 'Debian/Ubuntu et dérivés, Fedora, Arch, openSUSE, WSL2, macOS 15+ sur Apple Silicon (configuration supplémentaire)',
          },
          {
            'Élément': 'Outils',
            'Ce que disent les sources': 'curl, git, sudo et Bash 4 ou plus récent pour le script d’installation',
          },
          {
            'Élément': 'Voix locale',
            'Ce que disent les sources': 'Un Raspberry Pi 5 avec 8 Go de RAM ou quelque chose d’au moins aussi capable',
          },
          {
            'Élément': 'Cartes et appareils',
            'Ce que disent les sources': 'Raspberry Pi 3, 4 et 5 selon la page de téléchargement ; appareils Mark I et Mark II',
          },
          {
            'Élément': 'Moteurs vocaux',
            'Ce que disent les sources': 'La reconnaissance par défaut nécessite internet ; Vosk et DeepSpeech (hors ligne) et Mimic3 (voix locale) sont cités',
          },
          {
            'Élément': 'Configuration',
            'Ce que disent les sources': 'Un seul fichier texte : mycroft.conf',
          },
        ],
        note: 'Aucune liste de langues prises en charge n’apparaît sur les pages examinées ; mieux vaut vérifier sa langue avant d’investir du temps.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Ces étapes suivent la documentation ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Choisir une voie d’installation',
            whyItMatters: 'Utilisez l’installateur du navigateur, le script d’une ligne, l’image Raspberry Pi ou la configuration Docker.',
          },
          {
            title: 'Répondre aux écrans de l’installateur',
            whyItMatters: 'Choisissez virtualenv ou conteneur, un canal de versions, un profil et des fonctions comme Home Assistant ou un LLM.',
          },
          {
            title: 'Décider des extras',
            whyItMatters: 'Reliez au besoin Home Assistant, un point d’accès LLM compatible OpenAI ou des satellites HiveMind pour d’autres appareils.',
          },
          {
            title: 'Vérifier le partage de données',
            whyItMatters: 'Acceptez ou refusez la télémétrie de l’installateur et les métriques d’usage, puis modifiez le reste dans mycroft.conf.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Tout ce qui suit provient de la documentation d’Open Voice OS ; rien n’a été testé de manière indépendante.**',
        ],
        items: [
          '**Skills sous forme de plugins.** Certains skills sont fournis avec ovos-core et la plupart s’installent séparément depuis PyPI ou l’organisation GitHub OpenVoiceOS ; la plupart des skills Mycroft classiques fonctionnent aussi.',
          '**Repli LLM.** Via ovos-persona et des plugins solver, les demandes qu’aucun skill ne traite peuvent aller vers tout point d’accès compatible OpenAI, y compris auto-hébergé.',
          '**Home Assistant.** L’installateur peut configurer une intégration facultative avec Home Assistant.',
          '**Satellites HiveMind.** Plusieurs appareils peuvent partager un même assistant.',
          '**Client terminal.** ovos-tui-client permet d’écrire à l’assistant sans microphone.',
        ],
        note: 'La persona d’exemple du README du noyau pointe vers un serveur de démonstration pour lequel « no uptime is guaranteed ».',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**L’installateur indique qu’Open Voice OS n’est pas un mode entièrement hors ligne : si la reconnaissance échoue ou ne renvoie rien, l’enregistrement part vers des serveurs publics, et ce qui ne peut pas tourner en local retombe sur une voix publique.** La reconnaissance et la voix locales sont décrites pour le canal alpha. Le site parle seulement d’un « focus on privacy and security ».',
          'Deux types de partage de données sont demandés séparément et restent désactivés sauf acceptation. La télémétrie de l’installateur est envoyée une fois pendant l’installation et, si elle est acceptée, utilise une recherche d’IP auprès d’un tiers en HTTP non chiffré pour renseigner le pays. Les métriques d’usage transmettent les intents reconnus à un serveur communautaire et sont publiées sur un portail de données ouvertes ; supprimer le bloc open_data de mycroft.conf les arrête.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations du projet, pas des résultats d’audit. PromptQuorum n’a inspecté ni le trafic réseau ni le code source.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s’adresse',
        items: [
          '**Les bricoleurs Raspberry Pi et Linux** qui veulent une pile d’enceinte connectée ouverte et acceptent une installation au terminal.',
          '**Les utilisateurs de Mycroft** en quête d’un descendant activement maintenu qui exécute encore de nombreux skills classiques.',
          '**Les propriétaires de Home Assistant** qui souhaitent un assistant vocal distinct et extensible, avec un LLM optionnel derrière.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité et vitesse de reconnaissance.** Les sources ne donnent aucun temps et PromptQuorum n’a rien mesuré.',
          '**Couverture linguistique.** Aucune liste de langues prises en charge n’est apparue sur les pages examinées.',
          '**Rythme des versions.** La dernière version GitHub du noyau date de novembre 2025 alors que les commits continuent ; la documentation évoque des particularités de la préversion.',
          '**Traitement des données par les serveurs communautaires.** La durée de conservation et l’usage des données envoyées aux serveurs de télémétrie et de métriques ne sont pas documentés, et aucune politique de confidentialité n’a été trouvée.',
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
          {
            Application: '[Home Assistant Assist](/fr/power-local-llm/home-assistant-assist-review)',
            Plateformes: 'Linux, web, iOS, Android',
            'Prix / licence': 'Gratuit / Apache-2.0',
            'Différence clé': 'Chaîne vocale intégrée au serveur domotique Home Assistant',
          },
          {
            Application: '[Voxa](/fr/power-local-llm/voxa-review)',
            Plateformes: 'Windows, macOS, Linux',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Assistant vocal de bureau local d’abord, avec voix cloud optionnelle',
          },
          {
            Application: '[Jarvis](/fr/power-local-llm/jarvis-mac-review)',
            Plateformes: 'macOS',
            'Prix / licence': 'Gratuit / open source',
            'Différence clé': 'Assistant de bureau pour un seul ordinateur avec Llama, Whisper et Kokoro inclus, selon sa fiche',
          },
        ],
        note: 'Ce sont les assistants vocaux les plus proches du répertoire, non des substituts directs ; vérifiez le prix, la licence et les plateformes actuels sur la page de chaque application.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Open Voice OS est-il identique à Mycroft ?',
            a: 'Non, mais il en descend : le projet dit être né sous le nom MycroftOS et maintenir un fork amélioré de Mycroft-core, et le README du noyau indique que la plupart des skills Mycroft classiques fonctionnent aussi.',
          },
          {
            q: 'Peut-il utiliser un LLM local ?',
            a: 'Oui, comme repli facultatif : l’installateur accepte tout point d’accès compatible OpenAI, y compris auto-hébergé, pour les demandes que les skills ne traitent pas.',
          },
          {
            q: 'Faut-il un Raspberry Pi ?',
            a: 'Non. Des distributions Linux, WSL2, macOS 15+ sur Apple Silicon et Docker sont aussi listés ; seule la voix locale est liée à un Raspberry Pi 5 avec 8 Go de RAM ou mieux.',
          },
          {
            q: 'Peut-on l’utiliser sans microphone ?',
            a: 'L’installateur met en place ovos-tui-client, un client de terminal pour écrire à l’assistant.',
          },
          {
            q: 'Comment arrêter les métriques d’usage ?',
            a: 'Supprimez le bloc open_data de mycroft.conf et redémarrez les services ; la documentation n’explique pas comment retirer la télémétrie de l’installateur une fois acceptée.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Open Voice OS est une voie activement développée, sous licence Apache-2.0, vers un assistant vocal ouvert sur du matériel que l’on contrôle, avec voix locale, Home Assistant et LLM en options. En contrepartie : la reconnaissance par défaut nécessite internet, l’installation se fait au terminal, aucune liste de langues n’est apparue sur les pages examinées et la qualité vocale comme la latence n’ont pas été testées ici. Il convient aux bricoleurs et aux vétérans de Mycroft ; qui veut une application à double-clic regardera les alternatives ci-dessus.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site d’Open Voice OS](https://www.openvoiceos.org/) — description du projet, licence, plateformes et liens.',
          '[Page de téléchargement](https://www.openvoiceos.org/downloads) — installateur du navigateur, image Raspberry Pi et images de développement.',
          '[ovos-installer](https://github.com/OpenVoiceOS/ovos-installer) — commande d’installation, systèmes pris en charge, fonctions optionnelles et réserves sur la voix.',
          '[Notes de télémétrie de l’installateur](https://github.com/OpenVoiceOS/ovos-installer/blob/main/docs/telemetry.md) — ce qu’envoient la télémétrie et les métriques d’usage.',
          '[ovos-core](https://github.com/OpenVoiceOS/ovos-core) — skills, ovos-persona, licence et état des versions.',
          '[ovos-installer v11.0.0](https://github.com/OpenVoiceOS/ovos-installer/releases/tag/v11.0.0) — date de publication examinée.',
          '[ovos-docker](https://github.com/OpenVoiceOS/ovos-docker) — configuration en conteneur.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Avis Home Assistant Assist](/fr/power-local-llm/home-assistant-assist-review) — la chaîne vocale intégrée à Home Assistant.',
          '[Avis Whisper.cpp](/fr/power-local-llm/whisper-cpp-review) — un moteur de reconnaissance vocale local que l’on peut faire tourner soi-même.',
          '[Avis Piper TTS](/fr/power-local-llm/piper-tts-review) — un moteur local de synthèse vocale pour la sortie audio.',
          '[Outils vocaux et audio comparés](/fr/power-local-llm/local-llm-voice-audio-compared) — le comparatif de catégorie auquel appartient cet avis.',
          '[Répertoire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-01',
    dateModified: '2026-11-01',
    next_refresh_due: '2027-05-01',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/openvoiceos-review-hero-ja.webp',
    title: 'Open Voice OS レビュー：LinuxとRaspberry Pi向けのオープンソース音声アシスタント',
    seoTitle: 'Open Voice OS レビュー：オープンソース音声アシスタント',
    intro: 'Open Voice OS（OVOS）は、Mycroftのフォークとして始まった、[OpenVoiceOS](https://www.openvoiceos.org/)によるコミュニティ製のオープンソース音声アシスタント基盤です。Linux、Raspberry Pi、Dockerで動作し、スキルをプラグインとして追加でき、認識できない依頼はLLMに渡すこともできます。このレビューはプロジェクトのウェブサイトとGitHubのドキュメントに基づくもので、実機での検証は行っていません。',
    metaDescription: 'Open Voice OSのレビュー。LinuxとRaspberry Pi向けの、Mycroft由来のオープンソース音声アシスタント。音声・LLM・プライバシーについてドキュメントが述べる内容を整理。',
    twitterDescription: 'Open Voice OSのレビュー。Linux・Raspberry Pi・Docker向けのオープンソース音声アシスタント。ローカル音声、LLMフォールバック、ドキュメントで未確認の点。',
    audience: 'オープンな音声アシスタントを探している工作好きの方、Raspberry Piの所有者、スマートスピーカーの自作者で、オフライン利用、LLM対応、データ共有についてドキュメントが確認している内容を知りたい方。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Open Voice OS レビュー',
    targetKeywords: [
      'open voice os レビュー',
      'ovos 音声アシスタント',
      'オープンソース 音声アシスタント raspberry pi',
      'mycroft 代替',
      'ovos インストーラー',
      'オフライン 音声アシスタント linux',
      'ovos llm フォールバック',
    ],
    current_models_mentioned: [
      'Vosk',
      'Mimic3',
      'DeepSpeech',
    ],
    current_hardware_mentioned: [
      'Raspberry Pi 5',
      'Raspberry Pi 4',
      'Mark II',
    ],
    leadAnswerBlock: '**Open Voice OS（インストーラーv11.0.0、2026年8月29日公開）は、Linux、Raspberry Pi、Docker向けのオープンソース音声アシスタント基盤で、既定では完全オフラインでは動きません。**最初に使われる音声認識はインターネットを必要とし、ローカル音声は任意、LLMフォールバックは追加機能です。ここでの記述はすべてプロジェクトのドキュメントに基づき、テストによるものではありません。',
    quickAnswerTop: {
      ja: {
        question: 'Open Voice OSはインターネットなしで動きますか？',
        answer: 'ドキュメントによれば一部のみです。ローカル認識が失敗するか実行できない場合、録音が公開の音声サーバーに送られるため、インストーラーは完全オフラインのモードではないと述べています。ローカルの音声認識と音声合成は、十分な性能のハードウェア上のアルファチャンネルで挙げられています。',
        bullets: [
          'スキルはプラグインで、一部は同梱され、多くは別途インストールします。',
          'インストーラーはHome Assistant、LLMフォールバック、HiveMindサテライトを追加できます。',
          'データ共有は2種類あり、どちらも同意しない限りオフです。',
          '設定は平文ファイルmycroft.confひとつにまとまっています。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      {
        label: 'クイックアンサー',
        anchor: 'quick-answer',
      },
      {
        label: 'Open Voice OSとは',
        anchor: 'what-is-ovos',
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
            text: 'Open Voice OSは、自分のLinuxマシン、Raspberry Pi、コンテナで動かせるオープンソースの音声アシスタント基盤で、対応できない依頼をLLMに送ることもできます。',
          },
          {
            type: 'plain-terms',
            text: 'ウェイクワードで起動し、音声エンジンが発話をテキストにし、スキルが応答するか任意のLLMが引き継ぎ、音声が返答を読み上げます。',
          },
        ],
        items: [
          'メンテナンス：インストーラーのリポジトリには2026年11月1日に最後のプッシュがあり、放置プロジェクトの警告は該当しません。',
          'ライセンス：Apache-2.0のオープンソースで無料。寄付は任意です。',
          '由来：MycroftOSとして始まり、Mycroft-coreの拡張フォークを維持しています。',
          'セットアップ：ターミナルのコマンド1つ、ブラウザ案内のインストーラー、またはRaspberry Piイメージ。ダブルクリックで入れるアプリではありません。',
          '音声認識：既定のエンジンはインターネットが必要で、ローカルエンジンは任意です。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、2026年11月1日に確認したOpen Voice OSのウェブサイトと、ovos-core、ovos-installer、ovos-dockerのGitHubドキュメントに基づいています。PromptQuorumはインストールも計測も行っていないため、認識品質、遅延、LLMの信頼性は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-ovos',
        title: 'Open Voice OSとは',
        content: [
          '**Open Voice OSは、スマートスピーカーなど音声中心のデバイス向けの、コミュニティ運営の音声アシスタント基盤です。**ウェブサイトによれば、MycroftOSとして始まり、商標の問題を避けるために改名され、現在はMycroft-coreの拡張フォークを維持しています。中核コンポーネントの[ovos-core](https://github.com/OpenVoiceOS/ovos-core)はApache-2.0で公開されています。',
          'コアのほかに、インストーラー、Raspberry Pi用イメージ、Dockerセットアップがあります。コアのリポジトリが示す最新のGitHubリリースは2.1.1（2025年11月5日）で、インストーラーはv11.0.0、コアの既定ブランチにはコミットが続いています。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Open Voice OSには単一のダウンロードはなく、ブラウザ案内のインストーラー、ターミナルスクリプト、Raspberry Piイメージ、Dockerから選びます。**',
        ],
        columns: [
          '項目',
          '入手方法',
        ],
        rows: [
          {
            '項目': 'ブラウザインストーラー',
            '入手方法': '[start.openvoiceos.org](https://start.openvoiceos.org/)：案内付きセットアップで、最も簡単な方法とされています',
          },
          {
            '項目': 'インストーラースクリプト',
            '入手方法': '[ovos-installer](https://github.com/OpenVoiceOS/ovos-installer)：Linux、WSL2、macOS 15以降でコマンド1つ',
          },
          {
            '項目': 'Raspberry Piイメージ',
            '入手方法': '[RaspOVOS](https://openvoiceos.github.io/raspOVOS/)。[開発版イメージ](https://downloads.openvoiceos.org/images/)には「Expect bugs」との注意書きあり',
          },
          {
            '項目': 'Docker',
            '入手方法': '[ovos-docker](https://github.com/OpenVoiceOS/ovos-docker)、Apache-2.0',
          },
          {
            '項目': 'ウェブサイト',
            '入手方法': '[openvoiceos.org](https://www.openvoiceos.org/)',
          },
          {
            '項目': 'データ共有',
            '入手方法': '[テレメトリの説明](https://github.com/OpenVoiceOS/ovos-installer/blob/main/docs/telemetry.md)。プライバシーポリシーのページは見つかりませんでした',
          },
          {
            '項目': 'ソースコード',
            '入手方法': '[ovos-core](https://github.com/OpenVoiceOS/ovos-core)、Apache-2.0',
          },
        ],
        note: '確認したバージョン：GitHubによるとovos-installer v11.0.0（2026年8月29日）とovos-core 2.1.1（2025年11月5日）。インストーラーにはターミナルが必要で、ダブルクリックで入れるアプリはありません。プロジェクトは無料で、ウェブサイトが案内するのは任意の寄付のみです。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: [
          '**情報源が示すのは対応システムの一覧とハードウェアの数値ひとつだけで、それ以上の規模見積もりは推測になります。**',
        ],
        columns: [
          '項目',
          '情報源の記載',
        ],
        rows: [
          {
            '項目': 'OS',
            '情報源の記載': 'Debian/Ubuntuと派生、Fedora、Arch、openSUSE、WSL2、Apple SiliconのmacOS 15以降（追加設定あり）',
          },
          {
            '項目': 'ツール',
            '情報源の記載': 'インストーラースクリプトにはcurl、git、sudo、Bash 4以降',
          },
          {
            '項目': 'ローカル音声',
            '情報源の記載': 'RAM 8 GBのRaspberry Pi 5、またはそれ以上の性能の機器',
          },
          {
            '項目': 'ボードとデバイス',
            '情報源の記載': 'ダウンロードページにはRaspberry Pi 3・4・5、Mark IとMark IIデバイス',
          },
          {
            '項目': '音声エンジン',
            '情報源の記載': '既定の認識はインターネットが必要。Vosk・DeepSpeech（オフライン）とMimic3（ローカル音声）が挙げられています',
          },
          {
            '項目': '設定',
            '情報源の記載': '平文ファイルひとつ：mycroft.conf',
          },
        ],
        note: '確認したページには対応言語の一覧が見当たらなかったため、時間をかける前に自分の言語を確かめてください。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**以下の手順はドキュメントに沿ったもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'インストール方法を選ぶ',
            whyItMatters: 'ブラウザインストーラー、1行のインストーラースクリプト、Raspberry Piイメージ、Dockerセットアップのいずれかを使います。',
          },
          {
            title: 'インストーラーの画面に答える',
            whyItMatters: 'virtualenvかコンテナか、リリースチャンネル、プロファイル、Home AssistantやLLMなどの機能を選びます。',
          },
          {
            title: '追加機能を決める',
            whyItMatters: '必要に応じて、Home Assistant、OpenAI互換のLLMエンドポイント、デバイスを増やすHiveMindサテライトを接続します。',
          },
          {
            title: 'データ共有を確認する',
            whyItMatters: 'インストーラーのテレメトリと利用メトリクスに同意するか断り、それ以外の設定はmycroft.confで編集します。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下はすべてOpen Voice OSのドキュメントに基づくもので、独自のテストは行っていません。**',
        ],
        items: [
          '**プラグインとしてのスキル。**一部のスキルはovos-coreに同梱され、多くはPyPIやOpenVoiceOSのGitHub組織から別途インストールします。従来のMycroftスキルの多くも動作します。',
          '**LLMフォールバック。**ovos-personaとソルバープラグインにより、どのスキルも処理しない依頼を、セルフホスト型を含むOpenAI互換エンドポイントに送れます。',
          '**Home Assistant。**インストーラーで任意のHome Assistant連携を設定できます。',
          '**HiveMindサテライト。**複数のデバイスでひとつのアシスタントを共有できます。',
          '**ターミナルクライアント。**ovos-tui-clientを使えば、マイクなしでアシスタントに文字で話しかけられます。',
        ],
        note: 'コアのREADMEにある例のペルソナは、「no uptime is guaranteed」とされるデモサーバーを指しています。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**インストーラーは、Open Voice OSは完全オフラインのモードではないと述べています。認識が失敗するか何も返さない場合は録音が公開サーバーに送られ、ローカルで動かせない部分は公開の音声サービスに切り替わります。**ローカルの認識と音声はアルファチャンネルについて説明されています。ウェブサイトは「focus on privacy and security」とだけ述べています。',
          'データ共有は2種類が別々に確認され、同意しない限りオフです。インストーラーのテレメトリはインストール中に1回送信され、同意した場合は国を特定するために第三者のIP照会サービスを暗号化なしのHTTPで利用します。利用メトリクスは認識したインテントをコミュニティのサーバーに報告し、オープンデータのポータルで公開されます。mycroft.confからopen_dataブロックを削除すると停止します。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらはプロジェクト側の申告であり、監査結果ではありません。PromptQuorumはネットワーク通信もソースコードも検査していません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**Raspberry PiやLinuxで工作をする人**：オープンなスマートスピーカー環境を求め、ターミナルでのインストールを許容できる方。',
          '**Mycroftユーザー**：従来のスキルの多くをまだ動かせる、活発に保守された後継を探している方。',
          '**Home Assistantの所有者**：オプションのLLMを背後に置ける、独立した拡張可能な音声アシスタントが欲しい方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**認識品質と速度。**情報源に計測値はなく、PromptQuorumも計測していません。',
          '**対応言語。**確認したページには対応言語の一覧が見当たりませんでした。',
          '**リリースの頻度。**コアの最新GitHubリリースは2025年11月のものですが、コミットは続いており、ドキュメントは先行版の注意点に触れています。',
          '**コミュニティサーバーでのデータの扱い。**テレメトリとメトリクスのサーバーに送られたデータの保存期間や利用は文書化されておらず、プライバシーポリシーのページも見つかりませんでした。',
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
          {
            'アプリ': '[Home Assistant Assist](/ja/power-local-llm/home-assistant-assist-review)',
            '対応プラットフォーム': 'Linux、Web、iOS、Android',
            '価格／ライセンス': '無料／Apache-2.0',
            '主な違い': 'スマートホームサーバーHome Assistant内の音声パイプライン',
          },
          {
            'アプリ': '[Voxa](/ja/power-local-llm/voxa-review)',
            '対応プラットフォーム': 'Windows、macOS、Linux',
            '価格／ライセンス': '無料／MIT',
            '主な違い': 'ローカル優先のデスクトップ音声アシスタント。クラウド音声は任意',
          },
          {
            'アプリ': '[Jarvis](/ja/power-local-llm/jarvis-mac-review)',
            '対応プラットフォーム': 'macOS',
            '価格／ライセンス': '無料／オープンソース',
            '主な違い': '掲載情報によると、Llama・Whisper・Kokoroを同梱する1台完結のデスクトップアシスタント',
          },
        ],
        note: 'ディレクトリ内で最も近い音声アシスタントであり、直接の代替ではありません。現在の価格、ライセンス、対応プラットフォームは各アプリのページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Open Voice OSはMycroftと同じですか？',
            a: 'いいえ、ただしMycroftの流れを汲みます。プロジェクトはMycroftOSとして始まりMycroft-coreの拡張フォークを維持していると述べ、コアのREADMEは従来のMycroftスキルの多くも動くとしています。',
          },
          {
            q: 'ローカルのLLMは使えますか？',
            a: 'はい、任意のフォールバックとして使えます。インストーラーは、スキルが処理しない依頼のために、セルフホスト型を含むOpenAI互換エンドポイントを受け付けます。',
          },
          {
            q: 'Raspberry Piは必須ですか？',
            a: 'いいえ。Linuxディストリビューション、WSL2、Apple SiliconのmacOS 15以降、Dockerも挙げられています。Raspberry Pi 5（RAM 8 GB）以上に結び付けられているのはローカル音声だけです。',
          },
          {
            q: 'マイクなしでも使えますか？',
            a: 'インストーラーはovos-tui-clientを設定します。これはアシスタントに文字で話しかけるためのターミナルクライアントです。',
          },
          {
            q: '利用メトリクスを止めるには？',
            a: 'mycroft.confからopen_dataブロックを削除してサービスを再起動します。同意済みのインストーラーのテレメトリを取り消す方法は、ドキュメントに説明がありません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'Open Voice OSは、自分で管理できるハードウェア上にオープンな音声アシスタントを構築するための、活発に開発されているApache-2.0の選択肢で、ローカル音声、Home Assistant、LLMを任意で追加できます。一方で、既定の認識エンジンはインターネットが必要で、インストールはターミナルで行い、確認したページには対応言語の一覧が見当たらず、音声品質と遅延はここでは検証していません。工作好きの方やMycroft経験者に向いており、ダブルクリックで使えるアプリを望む方は上記の代替ツールを検討してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Open Voice OSのウェブサイト](https://www.openvoiceos.org/) — プロジェクトの説明、ライセンス、対応プラットフォーム、リンク。',
          '[ダウンロードページ](https://www.openvoiceos.org/downloads) — ブラウザインストーラー、Raspberry Piイメージ、開発版イメージ。',
          '[ovos-installer](https://github.com/OpenVoiceOS/ovos-installer) — インストールコマンド、対応システム、任意機能、音声に関する注意点。',
          '[インストーラーのテレメトリの説明](https://github.com/OpenVoiceOS/ovos-installer/blob/main/docs/telemetry.md) — テレメトリと利用メトリクスが送る内容。',
          '[ovos-core](https://github.com/OpenVoiceOS/ovos-core) — スキル、ovos-persona、ライセンス、リリース状況。',
          '[ovos-installer v11.0.0](https://github.com/OpenVoiceOS/ovos-installer/releases/tag/v11.0.0) — 確認したリリース日。',
          '[ovos-docker](https://github.com/OpenVoiceOS/ovos-docker) — コンテナ構成。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Home Assistant Assist レビュー](/ja/power-local-llm/home-assistant-assist-review) — Home Assistant内の音声パイプライン。',
          '[Whisper.cpp レビュー](/ja/power-local-llm/whisper-cpp-review) — 自分で動かせるローカル音声認識。',
          '[Piper TTS レビュー](/ja/power-local-llm/piper-tts-review) — 音声出力のためのローカル音声合成エンジン。',
          '[音声・オーディオツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — このレビューが属するカテゴリ比較。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-01',
    dateModified: '2026-11-01',
    next_refresh_due: '2027-05-01',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/openvoiceos-review-hero-pt.webp',
    title: 'Análise do Open Voice OS: assistente de voz de código aberto para Linux e Raspberry Pi',
    seoTitle: 'Análise do Open Voice OS: assistente de voz aberto',
    intro: 'O Open Voice OS (OVOS) é uma plataforma comunitária de código aberto para assistentes de voz da [OpenVoiceOS](https://www.openvoiceos.org/), que começou como um fork do Mycroft. Funciona em máquinas Linux, placas Raspberry Pi e Docker, recebe skills como plugins e pode repassar a um LLM os pedidos que não consegue reconhecer. Esta análise se baseia no site do projeto e na documentação do GitHub, não em testes práticos.',
    metaDescription: 'Análise do Open Voice OS: assistente de voz aberto, descendente do Mycroft, para Linux e Raspberry Pi. O que a doc diz sobre voz, LLMs e privacidade.',
    twitterDescription: 'Análise do Open Voice OS: assistente de voz de código aberto para Linux, Raspberry Pi e Docker. Voz local, fallback de LLM e o que a documentação deixa em aberto.',
    audience: 'Entusiastas, donos de Raspberry Pi e criadores de alto-falantes inteligentes que procuram um assistente de voz aberto e precisam saber o que a documentação confirma sobre uso offline, suporte a LLM e compartilhamento de dados.',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Open Voice OS',
    targetKeywords: [
      'análise open voice os',
      'assistente de voz ovos',
      'assistente de voz código aberto raspberry pi',
      'alternativa ao mycroft',
      'instalador ovos',
      'assistente de voz offline linux',
      'ovos fallback llm',
    ],
    current_models_mentioned: [
      'Vosk',
      'Mimic3',
      'DeepSpeech',
    ],
    current_hardware_mentioned: [
      'Raspberry Pi 5',
      'Raspberry Pi 4',
      'Mark II',
    ],
    leadAnswerBlock: '**O Open Voice OS (instalador v11.0.0, lançado em 29 de agosto de 2026) é uma plataforma de código aberto para assistentes de voz em Linux, Raspberry Pi e Docker e, por padrão, não funciona totalmente offline.** O reconhecedor de voz com que inicia precisa de internet, a voz local é opcional e o fallback para um LLM é um complemento. Cada afirmação vem da documentação do projeto, não de testes.',
    quickAnswerTop: {
      pt: {
        question: 'O Open Voice OS funciona sem internet?',
        answer: 'Só em parte, segundo a documentação: o instalador diz que não é um modo totalmente offline, porque uma gravação vai para servidores de voz públicos quando o reconhecimento local falha ou não consegue rodar. Voz e reconhecimento locais constam do canal alfa em hardware capaz.',
        bullets: [
          'As skills são plugins; algumas vêm incluídas e a maioria é instalada à parte.',
          'O instalador pode adicionar Home Assistant, um fallback de LLM e satélites HiveMind.',
          'Existem dois tipos de compartilhamento de dados, e ambos ficam desligados a menos que sejam aceitos.',
          'As configurações ficam em um único arquivo de texto, o mycroft.conf.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      {
        label: 'Resposta rápida',
        anchor: 'quick-answer',
      },
      {
        label: 'O que é o Open Voice OS?',
        anchor: 'what-is-ovos',
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
            text: 'O Open Voice OS é uma plataforma de código aberto para assistentes de voz que roda em uma máquina Linux, Raspberry Pi ou contêiner próprios e pode enviar a um LLM os pedidos sem correspondência.',
          },
          {
            type: 'plain-terms',
            text: 'Uma palavra de ativação o inicia, um mecanismo de voz transforma as palavras em texto, uma skill responde ou um LLM opcional entra em ação, e uma voz lê a resposta.',
          },
        ],
        items: [
          'Manutenção: o repositório do instalador recebeu o último push em 1º de novembro de 2026, então não se aplica aviso de projeto abandonado.',
          'Licença: código aberto Apache-2.0 e gratuito; doações são opcionais.',
          'Origem: começou como MycroftOS e mantém um fork aprimorado do Mycroft-core.',
          'Instalação: um comando de terminal, um instalador guiado no navegador ou uma imagem para Raspberry Pi, não um app de clique duplo.',
          'Reconhecimento de voz: o mecanismo padrão precisa de internet; mecanismos locais são opcionais.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site do Open Voice OS e na documentação do GitHub de ovos-core, ovos-installer e ovos-docker, verificados em 1º de novembro de 2026. A PromptQuorum não o instalou nem mediu; por isso, qualidade de reconhecimento, latência e confiabilidade dos LLMs não são avaliadas.',
          },
        ],
      },
      overview: {
        id: 'what-is-ovos',
        title: 'O que é o Open Voice OS?',
        content: [
          '**O Open Voice OS é uma plataforma de assistentes de voz mantida pela comunidade para alto-falantes inteligentes e outros dispositivos controlados por voz.** Segundo o site, começou como MycroftOS, foi renomeado para evitar problemas de marca e hoje mantém um fork aprimorado do Mycroft-core. Seu componente central, o [ovos-core](https://github.com/OpenVoiceOS/ovos-core), é publicado sob Apache-2.0.',
          'Além do núcleo há um instalador, uma imagem para Raspberry Pi e uma configuração Docker. O repositório do núcleo indica como último release do GitHub o 2.1.1 (5 de novembro de 2025), enquanto o instalador está na v11.0.0 e a branch padrão do núcleo continua recebendo commits.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Open Voice OS não tem um download único: escolhe-se entre um instalador guiado no navegador, um script de terminal, uma imagem para Raspberry Pi ou Docker.**',
        ],
        columns: [
          'Opção',
          'Onde obter',
        ],
        rows: [
          {
            'Opção': 'Instalador no navegador',
            'Onde obter': '[start.openvoiceos.org](https://start.openvoiceos.org/): configuração guiada, descrita como o caminho mais fácil',
          },
          {
            'Opção': 'Script de instalação',
            'Onde obter': '[ovos-installer](https://github.com/OpenVoiceOS/ovos-installer): um comando em Linux, WSL2, macOS 15+',
          },
          {
            'Opção': 'Imagem para Raspberry Pi',
            'Onde obter': '[RaspOVOS](https://openvoiceos.github.io/raspOVOS/); as [imagens de desenvolvimento](https://downloads.openvoiceos.org/images/) trazem o aviso «Expect bugs»',
          },
          {
            'Opção': 'Docker',
            'Onde obter': '[ovos-docker](https://github.com/OpenVoiceOS/ovos-docker), Apache-2.0',
          },
          {
            'Opção': 'Site',
            'Onde obter': '[openvoiceos.org](https://www.openvoiceos.org/)',
          },
          {
            'Opção': 'Compartilhamento de dados',
            'Onde obter': '[Notas de telemetria](https://github.com/OpenVoiceOS/ovos-installer/blob/main/docs/telemetry.md); nenhuma política de privacidade foi encontrada',
          },
          {
            'Opção': 'Código-fonte',
            'Onde obter': '[ovos-core](https://github.com/OpenVoiceOS/ovos-core), Apache-2.0',
          },
        ],
        note: 'Versões analisadas: ovos-installer v11.0.0 (29 de agosto de 2026) e ovos-core 2.1.1 (5 de novembro de 2025), segundo o GitHub. O instalador exige um terminal: não há app de clique duplo. O projeto é gratuito; o site oferece apenas doações opcionais.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**As fontes dão uma lista de sistemas e um número de hardware, então qualquer dimensionamento além disso é palpite.**',
        ],
        columns: [
          'Item',
          'O que dizem as fontes',
        ],
        rows: [
          {
            Item: 'Sistema operacional',
            'O que dizem as fontes': 'Debian/Ubuntu e derivados, Fedora, Arch, openSUSE, WSL2, macOS 15+ em Apple Silicon (configuração extra)',
          },
          {
            Item: 'Ferramentas',
            'O que dizem as fontes': 'curl, git, sudo e Bash 4 ou superior para o script de instalação',
          },
          {
            Item: 'Voz local',
            'O que dizem as fontes': 'Um Raspberry Pi 5 com 8 GB de RAM ou algo pelo menos tão capaz',
          },
          {
            Item: 'Placas e dispositivos',
            'O que dizem as fontes': 'Raspberry Pi 3, 4 e 5 na página de downloads; dispositivos Mark I e Mark II',
          },
          {
            Item: 'Mecanismos de voz',
            'O que dizem as fontes': 'O reconhecimento padrão precisa de internet; Vosk e DeepSpeech (offline) e Mimic3 (voz local) são citados',
          },
          {
            Item: 'Configuração',
            'O que dizem as fontes': 'Um único arquivo de texto: mycroft.conf',
          },
        ],
        note: 'Nenhuma lista de idiomas aceitos apareceu nas páginas verificadas; convém confirmar o seu idioma antes de investir tempo.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Estes passos seguem a documentação; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Escolher o caminho de instalação',
            whyItMatters: 'Use o instalador do navegador, o script de uma linha, a imagem para Raspberry Pi ou a configuração Docker.',
          },
          {
            title: 'Responder às telas do instalador',
            whyItMatters: 'Escolha virtualenv ou contêiner, um canal de lançamento, um perfil e recursos como Home Assistant ou um LLM.',
          },
          {
            title: 'Decidir os extras',
            whyItMatters: 'Conecte, se quiser, o Home Assistant, um endpoint de LLM compatível com OpenAI ou satélites HiveMind para mais dispositivos.',
          },
          {
            title: 'Revisar o compartilhamento de dados',
            whyItMatters: 'Aceite ou recuse a telemetria do instalador e as métricas de uso e edite o restante no mycroft.conf.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Tudo a seguir vem da documentação do Open Voice OS; nada foi testado de forma independente.**',
        ],
        items: [
          '**Skills como plugins.** Algumas skills acompanham o ovos-core e a maioria é instalada à parte a partir do PyPI ou da organização OpenVoiceOS no GitHub; a maioria das skills clássicas do Mycroft também funciona.',
          '**Fallback de LLM.** Com o ovos-persona e plugins solver, pedidos que nenhuma skill atende podem ir a qualquer endpoint compatível com OpenAI, inclusive um auto-hospedado.',
          '**Home Assistant.** O instalador pode configurar uma integração opcional com o Home Assistant.',
          '**Satélites HiveMind.** Vários dispositivos podem compartilhar um único assistente.',
          '**Cliente de terminal.** O ovos-tui-client permite escrever ao assistente sem microfone.',
        ],
        note: 'A persona de exemplo no README do núcleo aponta para um servidor de demonstração para o qual «no uptime is guaranteed».',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**O instalador afirma que o Open Voice OS não é um modo totalmente offline: se o reconhecimento falha ou não retorna nada, a gravação vai para servidores públicos, e a parte que não roda localmente recorre à voz pública.** Reconhecimento e voz locais são descritos para o canal alfa. O site fala apenas em «focus on privacy and security».',
          'Dois tipos de compartilhamento de dados são perguntados separadamente e ficam desligados sem aceitação. A telemetria do instalador é enviada uma vez durante a instalação e, se aceita, usa uma consulta de IP a um terceiro por HTTP sem criptografia para preencher o país. As métricas de uso informam os intents reconhecidos a um servidor da comunidade e são publicadas em um portal de dados abertos; remover o bloco open_data do mycroft.conf as interrompe.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas são declarações do projeto, não resultados de auditoria. A PromptQuorum não inspecionou o tráfego de rede nem o código-fonte.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Entusiastas de Raspberry Pi e Linux** que querem uma pilha aberta de alto-falante inteligente e aceitam instalar pelo terminal.',
          '**Usuários do Mycroft** em busca de um descendente mantido ativamente que ainda executa muitas skills clássicas.',
          '**Donos de Home Assistant** que querem um assistente de voz separado e extensível, com um LLM opcional por trás.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade e velocidade de reconhecimento.** As fontes não trazem tempos e a PromptQuorum não mediu nada.',
          '**Cobertura de idiomas.** Nenhuma lista de idiomas aceitos apareceu nas páginas verificadas.',
          '**Ritmo de lançamentos.** O release mais recente do núcleo no GitHub é de novembro de 2025, enquanto os commits continuam; a documentação aponta peculiaridades da versão preliminar.',
          '**Tratamento de dados nos servidores da comunidade.** Retenção e uso dos dados enviados aos servidores de telemetria e métricas não são documentados, e nenhuma política de privacidade foi encontrada.',
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
          {
            App: '[Home Assistant Assist](/pt/power-local-llm/home-assistant-assist-review)',
            Plataformas: 'Linux, web, iOS, Android',
            'Preço / licença': 'Grátis / Apache-2.0',
            'Diferença principal': 'Pipeline de voz dentro do servidor de casa inteligente Home Assistant',
          },
          {
            App: '[Voxa](/pt/power-local-llm/voxa-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Assistente de voz de desktop local primeiro, com voz na nuvem opcional',
          },
          {
            App: '[Jarvis](/pt/power-local-llm/jarvis-mac-review)',
            Plataformas: 'macOS',
            'Preço / licença': 'Grátis / código aberto',
            'Diferença principal': 'Assistente de desktop para um único computador com Llama, Whisper e Kokoro incluídos, conforme a ficha',
          },
        ],
        note: 'São os assistentes de voz mais próximos do diretório, não substitutos diretos; confirme preço, licença e plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Open Voice OS é o mesmo que o Mycroft?',
            a: 'Não, mas descende dele: o projeto diz que começou como MycroftOS e mantém um fork aprimorado do Mycroft-core, e o README do núcleo informa que a maioria das skills clássicas do Mycroft também funciona.',
          },
          {
            q: 'Ele pode usar um LLM local?',
            a: 'Sim, como fallback opcional: o instalador aceita qualquer endpoint compatível com OpenAI, inclusive auto-hospedado, para pedidos que as skills não atendem.',
          },
          {
            q: 'Preciso de um Raspberry Pi?',
            a: 'Não. Distribuições Linux, WSL2, macOS 15+ em Apple Silicon e Docker também constam; apenas a voz local está ligada a um Raspberry Pi 5 com 8 GB de RAM ou melhor.',
          },
          {
            q: 'Dá para usar sem microfone?',
            a: 'O instalador configura o ovos-tui-client, um cliente de terminal para escrever ao assistente.',
          },
          {
            q: 'Como paro as métricas de uso?',
            a: 'Remova o bloco open_data do mycroft.conf e reinicie os serviços; a documentação não explica como retirar a telemetria do instalador depois de aceita.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'O Open Voice OS é um caminho ativo e com licença Apache-2.0 para um assistente de voz aberto em hardware que você controla, com voz local, Home Assistant e LLM como complementos opcionais. Em contrapartida, o reconhecedor padrão precisa de internet, a instalação é feita no terminal, nenhuma lista de idiomas apareceu nas páginas verificadas e qualidade de voz e latência não foram testadas aqui. Serve a entusiastas e veteranos do Mycroft; quem quer um app de clique duplo deve olhar as alternativas acima.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Open Voice OS](https://www.openvoiceos.org/) — descrição do projeto, licença, plataformas e links.',
          '[Página de downloads](https://www.openvoiceos.org/downloads) — instalador do navegador, imagem para Raspberry Pi e imagens de desenvolvimento.',
          '[ovos-installer](https://github.com/OpenVoiceOS/ovos-installer) — comando de instalação, sistemas compatíveis, recursos opcionais e ressalvas sobre voz.',
          '[Notas de telemetria do instalador](https://github.com/OpenVoiceOS/ovos-installer/blob/main/docs/telemetry.md) — o que a telemetria e as métricas de uso enviam.',
          '[ovos-core](https://github.com/OpenVoiceOS/ovos-core) — skills, ovos-persona, licença e estado dos lançamentos.',
          '[ovos-installer v11.0.0](https://github.com/OpenVoiceOS/ovos-installer/releases/tag/v11.0.0) — data de lançamento analisada.',
          '[ovos-docker](https://github.com/OpenVoiceOS/ovos-docker) — configuração em contêiner.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Home Assistant Assist](/pt/power-local-llm/home-assistant-assist-review) — o pipeline de voz dentro do Home Assistant.',
          '[Análise do Whisper.cpp](/pt/power-local-llm/whisper-cpp-review) — um reconhecedor de voz local que você mesmo pode executar.',
          '[Análise do Piper TTS](/pt/power-local-llm/piper-tts-review) — um mecanismo local de síntese de voz para a saída falada.',
          '[Ferramentas de voz e áudio comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — a comparação de categoria a que esta análise pertence.',
          '[Diretório de software LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-01',
    dateModified: '2026-11-01',
    next_refresh_due: '2027-05-01',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/openvoiceos-review-hero-ar.webp',
    title: 'مراجعة Open Voice OS: مساعد صوتي مفتوح المصدر لأنظمة Linux وRaspberry Pi',
    seoTitle: 'مراجعة Open Voice OS: مساعد صوتي مفتوح المصدر لـ Linux',
    intro: 'Open Voice OS (اختصارًا OVOS) منصة مجتمعية مفتوحة المصدر للمساعدات الصوتية من [OpenVoiceOS](https://www.openvoiceos.org/)، بدأت كنسخة متفرعة من Mycroft. تعمل على أجهزة Linux ولوحات Raspberry Pi وعلى Docker، وتقبل المهارات كإضافات، ويمكنها تمرير الطلبات التي لا تتعرف عليها إلى نموذج لغوي كبير. تستند هذه المراجعة إلى موقع المشروع ووثائقه على GitHub، لا إلى اختبار عملي.',
    metaDescription: 'مراجعة Open Voice OS: المساعد الصوتي مفتوح المصدر المنحدر من Mycroft لأنظمة Linux وRaspberry Pi. ما تقوله الوثائق عن الصوت والنماذج اللغوية والخصوصية.',
    twitterDescription: 'مراجعة Open Voice OS: مساعد صوتي مفتوح المصدر لـ Linux وRaspberry Pi وDocker. خيارات صوتية محلية ونموذج لغوي احتياطي وما تتركه الوثائق مفتوحًا.',
    audience: 'الهواة ومالكو Raspberry Pi وصانعو السماعات الذكية الذين يبحثون عن مساعد صوتي مفتوح ويريدون معرفة ما تؤكده الوثائق عن العمل دون اتصال ودعم النماذج اللغوية ومشاركة البيانات.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Open Voice OS',
    targetKeywords: [
      'مراجعة open voice os',
      'مساعد صوتي ovos',
      'مساعد صوتي مفتوح المصدر raspberry pi',
      'بديل mycroft',
      'مثبّت ovos',
      'مساعد صوتي دون اتصال linux',
      'ovos نموذج لغوي احتياطي',
    ],
    current_models_mentioned: [
      'Vosk',
      'Mimic3',
      'DeepSpeech',
    ],
    current_hardware_mentioned: [
      'Raspberry Pi 5',
      'Raspberry Pi 4',
      'Mark II',
    ],
    leadAnswerBlock: '**Open Voice OS (المثبّت v11.0.0، صدر في 29 أغسطس 2026) منصة مفتوحة المصدر للمساعدات الصوتية على Linux وRaspberry Pi وDocker، ولا تعمل افتراضيًا دون اتصال بالكامل.** فمحرك التعرف على الكلام الذي تبدأ به يحتاج إلى الإنترنت، والصوت المحلي اختياري، والنموذج اللغوي الاحتياطي إضافة. كل عبارة هنا مصدرها وثائق المشروع لا الاختبار.',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل Open Voice OS دون إنترنت؟',
        answer: 'جزئيًا فقط بحسب الوثائق: يذكر المثبّت أنه ليس وضعًا غير متصل بالكامل، لأن التسجيل يُرسل إلى خوادم كلام عامة عندما يفشل التعرف المحلي أو لا يمكن تشغيله. ويُذكر التعرف على الكلام والصوت المحليان لقناة ألفا على عتاد قادر.',
        bullets: [
          'المهارات إضافات؛ بعضها مضمّن ومعظمها يُثبَّت منفصلًا.',
          'يمكن للمثبّت إضافة Home Assistant ونموذج لغوي احتياطي وأقمار HiveMind.',
          'هناك نوعان من مشاركة البيانات، وكلاهما متوقف ما لم تقبله.',
          'الإعدادات في ملف نصي واحد هو mycroft.conf.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      {
        label: 'إجابة سريعة',
        anchor: 'quick-answer',
      },
      {
        label: 'ما هو Open Voice OS؟',
        anchor: 'what-is-ovos',
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
            text: 'Open Voice OS منصة مفتوحة المصدر للمساعدات الصوتية تعمل على جهاز Linux أو Raspberry Pi أو حاوية خاصة بك، ويمكنها إرسال الطلبات غير المطابقة إلى نموذج لغوي كبير.',
          },
          {
            type: 'plain-terms',
            text: 'تبدأها كلمة التنبيه، ثم يحوّل محرك الكلام حديثك إلى نص، وتجيب مهارة أو يتدخل نموذج لغوي اختياري، ثم يقرأ صوت الرد.',
          },
        ],
        items: [
          'الصيانة: آخر دفع إلى مستودع المثبّت كان في 1 نوفمبر 2026، فلا ينطبق تحذير المشروع المهجور.',
          'الرخصة: مفتوح المصدر بترخيص Apache-2.0 ومجاني؛ التبرعات اختيارية.',
          'الأصل: بدأ باسم MycroftOS ويحتفظ بنسخة متفرعة محسّنة من Mycroft-core.',
          'الإعداد: أمر واحد في الطرفية أو مثبّت موجّه في المتصفح أو صورة Raspberry Pi، وليس تطبيقًا بنقرة مزدوجة.',
          'التعرف على الكلام: المحرك الافتراضي يحتاج إلى الإنترنت؛ والمحركات المحلية اختيارية.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى موقع Open Voice OS ووثائق GitHub الخاصة بـ ovos-core وovos-installer وovos-docker، التي روجعت في 1 نوفمبر 2026. لم تثبّت PromptQuorum النظام ولم تقس أداءه، لذا لا تُقيَّم جودة التعرف ولا زمن الاستجابة ولا موثوقية النماذج اللغوية.',
          },
        ],
      },
      overview: {
        id: 'what-is-ovos',
        title: 'ما هو Open Voice OS؟',
        content: [
          '**Open Voice OS منصة مساعدات صوتية يديرها المجتمع للسماعات الذكية والأجهزة الأخرى التي تعتمد على الصوت.** يذكر الموقع أنها بدأت باسم MycroftOS، ثم أُعيدت تسميتها لتفادي مشكلات العلامة التجارية، وهي تحتفظ اليوم بنسخة متفرعة محسّنة من Mycroft-core. ويُنشر مكوّنها الأساسي [ovos-core](https://github.com/OpenVoiceOS/ovos-core) بترخيص Apache-2.0.',
          'إلى جانب النواة هناك مثبّت وصورة لـ Raspberry Pi وإعداد Docker. يذكر مستودع النواة أحدث إصدار على GitHub بالرقم 2.1.1 (5 نوفمبر 2025)، بينما المثبّت عند v11.0.0 والفرع الافتراضي للنواة ما زال يتلقى التزامات.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**ليس لـ Open Voice OS تنزيل واحد: يُختار بين مثبّت موجّه في المتصفح أو سكربت في الطرفية أو صورة Raspberry Pi أو Docker.**',
        ],
        columns: [
          'الخيار',
          'مصدر الحصول عليه',
        ],
        rows: [
          {
            'الخيار': 'مثبّت المتصفح',
            'مصدر الحصول عليه': '[start.openvoiceos.org](https://start.openvoiceos.org/): إعداد موجّه يوصف بأنه أسهل طريق',
          },
          {
            'الخيار': 'سكربت التثبيت',
            'مصدر الحصول عليه': '[ovos-installer](https://github.com/OpenVoiceOS/ovos-installer): أمر واحد على Linux وWSL2 وmacOS 15+',
          },
          {
            'الخيار': 'صورة Raspberry Pi',
            'مصدر الحصول عليه': '[RaspOVOS](https://openvoiceos.github.io/raspOVOS/)؛ وعلى [صور التطوير](https://downloads.openvoiceos.org/images/) تنبيه «Expect bugs»',
          },
          {
            'الخيار': 'Docker',
            'مصدر الحصول عليه': '[ovos-docker](https://github.com/OpenVoiceOS/ovos-docker)، Apache-2.0',
          },
          {
            'الخيار': 'الموقع الرسمي',
            'مصدر الحصول عليه': '[openvoiceos.org](https://www.openvoiceos.org/)',
          },
          {
            'الخيار': 'مشاركة البيانات',
            'مصدر الحصول عليه': '[ملاحظات القياس عن بُعد](https://github.com/OpenVoiceOS/ovos-installer/blob/main/docs/telemetry.md)؛ لم نعثر على صفحة سياسة خصوصية',
          },
          {
            'الخيار': 'الشيفرة المصدرية',
            'مصدر الحصول عليه': '[ovos-core](https://github.com/OpenVoiceOS/ovos-core)، Apache-2.0',
          },
        ],
        note: 'الإصدارات المراجَعة: ovos-installer v11.0.0 (29 أغسطس 2026) وovos-core 2.1.1 (5 نوفمبر 2025) بحسب GitHub. يتطلب المثبّت طرفية: لا يوجد تطبيق بنقرة مزدوجة. المشروع مجاني، ولا يعرض الموقع سوى تبرعات اختيارية.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**تقدّم المصادر قائمة أنظمة ورقمًا واحدًا للعتاد، وأي تقدير للحجم يتجاوز ذلك مجرد تخمين.**',
        ],
        columns: [
          'البند',
          'ما تقوله المصادر',
        ],
        rows: [
          {
            'البند': 'نظام التشغيل',
            'ما تقوله المصادر': 'Debian/Ubuntu ومشتقاتهما وFedora وArch وopenSUSE وWSL2 وmacOS 15+ على Apple Silicon (بإعداد إضافي)',
          },
          {
            'البند': 'الأدوات',
            'ما تقوله المصادر': 'curl وgit وsudo وBash 4 أو أحدث لسكربت التثبيت',
          },
          {
            'البند': 'الصوت المحلي',
            'ما تقوله المصادر': 'Raspberry Pi 5 بذاكرة 8 GB أو ما يعادله في القدرة على الأقل',
          },
          {
            'البند': 'اللوحات والأجهزة',
            'ما تقوله المصادر': 'Raspberry Pi 3 و4 و5 في صفحة التنزيل؛ وأجهزة Mark I وMark II',
          },
          {
            'البند': 'محركات الكلام',
            'ما تقوله المصادر': 'التعرف الافتراضي يحتاج إلى الإنترنت؛ وتُذكر Vosk وDeepSpeech (دون اتصال) وMimic3 (صوت محلي)',
          },
          {
            'البند': 'الإعداد',
            'ما تقوله المصادر': 'ملف نصي واحد: mycroft.conf',
          },
        ],
        note: 'لم تظهر قائمة باللغات المدعومة في الصفحات التي روجعت، فتحقق من لغتك قبل استثمار الوقت.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع هذه الخطوات الوثائق؛ ولم تنفذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'اختيار طريق التثبيت',
            whyItMatters: 'استخدم مثبّت المتصفح أو سكربت السطر الواحد أو صورة Raspberry Pi أو إعداد Docker.',
          },
          {
            title: 'الإجابة عن شاشات المثبّت',
            whyItMatters: 'اختر virtualenv أو حاوية، وقناة إصدار، وملفًا شخصيًا، وميزات مثل Home Assistant أو نموذج لغوي.',
          },
          {
            title: 'تحديد الإضافات',
            whyItMatters: 'اربط اختياريًا Home Assistant أو نقطة نهاية لنموذج لغوي متوافقة مع OpenAI أو أقمار HiveMind لمزيد من الأجهزة.',
          },
          {
            title: 'مراجعة مشاركة البيانات',
            whyItMatters: 'اقبل القياس عن بُعد للمثبّت ومقاييس الاستخدام أو ارفضهما، ثم عدّل ما سواهما في mycroft.conf.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل ما يلي مصدره وثائق Open Voice OS؛ ولم يُختبر أي منه بصورة مستقلة.**',
        ],
        items: [
          '**مهارات كإضافات.** بعض المهارات يأتي مع ovos-core ومعظمها يُثبَّت منفصلًا من PyPI أو من منظمة OpenVoiceOS على GitHub؛ وتعمل أيضًا معظم مهارات Mycroft الكلاسيكية.',
          '**نموذج لغوي احتياطي.** عبر ovos-persona وإضافات solver يمكن إرسال الطلبات التي لا تعالجها أي مهارة إلى أي نقطة نهاية متوافقة مع OpenAI، بما فيها المستضافة ذاتيًا.',
          '**Home Assistant.** يمكن للمثبّت إعداد تكامل اختياري مع Home Assistant.',
          '**أقمار HiveMind.** يمكن لعدة أجهزة مشاركة مساعد واحد.',
          '**عميل الطرفية.** يتيح ovos-tui-client الكتابة إلى المساعد دون ميكروفون.',
        ],
        note: 'تشير الشخصية النموذجية في ملف README الخاص بالنواة إلى خادم تجريبي «no uptime is guaranteed».',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**يذكر المثبّت أن Open Voice OS ليس وضعًا غير متصل بالكامل: إذا فشل التعرف أو لم يُرجع شيئًا يُرسل التسجيل إلى خوادم عامة، وما لا يمكن تشغيله محليًا يعود إلى خدمة كلام عامة.** ويُوصف التعرف والصوت المحليان لقناة ألفا. ولا يقول الموقع سوى إن المنصة تركّز على «privacy and security».',
          'يُسأل عن نوعين من مشاركة البيانات كلٌّ على حدة، وهما متوقفان دون قبول. يُرسل القياس عن بُعد للمثبّت مرة واحدة أثناء التثبيت، وإذا قُبل يستخدم استعلام عنوان IP لدى طرف ثالث عبر HTTP غير مشفّر لتحديد البلد. أما مقاييس الاستخدام فتُبلغ خادمًا مجتمعيًا بالنوايا التي يطابقها المساعد وتُنشر في بوابة بيانات مفتوحة؛ وحذف كتلة open_data من mycroft.conf يوقفها.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه إعلانات من المشروع وليست نتائج تدقيق. لم تفحص PromptQuorum حركة الشبكة ولا الشيفرة المصدرية.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**هواة Raspberry Pi وLinux** الذين يريدون بنية سماعة ذكية مفتوحة ويقبلون التثبيت عبر الطرفية.',
          '**مستخدمو Mycroft** الباحثون عن خليفة يُصان بنشاط ويشغّل ما زال كثيرًا من المهارات الكلاسيكية.',
          '**مالكو Home Assistant** الذين يريدون مساعدًا صوتيًا مستقلًا وقابلًا للتوسعة مع نموذج لغوي اختياري خلفه.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**جودة التعرف وسرعته.** لا تذكر المصادر أزمنة، ولم تقس PromptQuorum شيئًا.',
          '**تغطية اللغات.** لم تظهر قائمة باللغات المدعومة في الصفحات التي روجعت.',
          '**وتيرة الإصدارات.** أحدث إصدار للنواة على GitHub يعود إلى نوفمبر 2025 بينما تستمر الالتزامات؛ وتشير الوثائق إلى خصائص النسخة التجريبية.',
          '**تعامل الخوادم المجتمعية مع البيانات.** مدة الاحتفاظ بالبيانات المرسلة إلى خوادم القياس والمقاييس واستخدامها غير موثقة، ولم نعثر على صفحة سياسة خصوصية.',
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
          {
            'التطبيق': '[Home Assistant Assist](/ar/power-local-llm/home-assistant-assist-review)',
            'المنصات': 'Linux وويب وiOS وAndroid',
            'السعر / الرخصة': 'مجاني / Apache-2.0',
            'الفرق الأبرز': 'مسار صوتي داخل خادم المنزل الذكي Home Assistant',
          },
          {
            'التطبيق': '[Voxa](/ar/power-local-llm/voxa-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر / الرخصة': 'مجاني / MIT',
            'الفرق الأبرز': 'مساعد صوتي مكتبي محلي أولًا مع صوت سحابي اختياري',
          },
          {
            'التطبيق': '[Jarvis](/ar/power-local-llm/jarvis-mac-review)',
            'المنصات': 'macOS',
            'السعر / الرخصة': 'مجاني / مفتوح المصدر',
            'الفرق الأبرز': 'مساعد مكتبي لحاسوب واحد مع Llama وWhisper وKokoro مضمّنة بحسب بطاقته',
          },
        ],
        note: 'هذه أقرب المساعدات الصوتية في الدليل وليست بدائل مباشرة؛ تحقق من السعر والرخصة والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Open Voice OS هو نفسه Mycroft؟',
            a: 'لا، لكنه منحدر منه: يقول المشروع إنه بدأ باسم MycroftOS ويحتفظ بنسخة متفرعة محسّنة من Mycroft-core، ويذكر ملف README الخاص بالنواة أن معظم مهارات Mycroft الكلاسيكية تعمل أيضًا.',
          },
          {
            q: 'هل يمكنه استخدام نموذج لغوي محلي؟',
            a: 'نعم، كخيار احتياطي اختياري: يقبل المثبّت أي نقطة نهاية متوافقة مع OpenAI، بما فيها المستضافة ذاتيًا، للطلبات التي لا تعالجها المهارات.',
          },
          {
            q: 'هل أحتاج إلى Raspberry Pi؟',
            a: 'لا. تُذكر أيضًا توزيعات Linux وWSL2 وmacOS 15+ على Apple Silicon وDocker؛ والصوت المحلي وحده مرتبط بـ Raspberry Pi 5 بذاكرة 8 GB أو أفضل.',
          },
          {
            q: 'هل يمكن استخدامه دون ميكروفون؟',
            a: 'يُعدّ المثبّت ovos-tui-client، وهو عميل طرفية للكتابة إلى المساعد.',
          },
          {
            q: 'كيف أوقف مقاييس الاستخدام؟',
            a: 'احذف كتلة open_data من mycroft.conf وأعد تشغيل الخدمات؛ ولا تشرح الوثائق كيفية سحب القياس عن بُعد للمثبّت بعد قبوله.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'Open Voice OS طريق نشط الصيانة وبترخيص Apache-2.0 إلى مساعد صوتي مفتوح على عتاد تتحكم فيه، مع صوت محلي وHome Assistant ونموذج لغوي كإضافات اختيارية. في المقابل، يحتاج المحرك الافتراضي إلى الإنترنت، ويتم التثبيت في الطرفية، ولم تظهر قائمة باللغات في الصفحات التي روجعت، ولم تُختبر هنا جودة الصوت ولا زمن الاستجابة. يناسب الهواة وقدامى مستخدمي Mycroft؛ ومن يريد تطبيقًا بنقرة مزدوجة فعليه النظر في البدائل أعلاه.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Open Voice OS](https://www.openvoiceos.org/) — وصف المشروع والرخصة والمنصات والروابط.',
          '[صفحة التنزيلات](https://www.openvoiceos.org/downloads) — مثبّت المتصفح وصورة Raspberry Pi وصور التطوير.',
          '[ovos-installer](https://github.com/OpenVoiceOS/ovos-installer) — أمر التثبيت والأنظمة المدعومة والميزات الاختيارية وتنبيهات الكلام.',
          '[ملاحظات القياس عن بُعد للمثبّت](https://github.com/OpenVoiceOS/ovos-installer/blob/main/docs/telemetry.md) — ما ترسله ميزة القياس ومقاييس الاستخدام.',
          '[ovos-core](https://github.com/OpenVoiceOS/ovos-core) — المهارات وovos-persona والرخصة وحالة الإصدارات.',
          '[ovos-installer v11.0.0](https://github.com/OpenVoiceOS/ovos-installer/releases/tag/v11.0.0) — تاريخ الإصدار الذي روجع.',
          '[ovos-docker](https://github.com/OpenVoiceOS/ovos-docker) — إعداد الحاويات.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Home Assistant Assist](/ar/power-local-llm/home-assistant-assist-review) — المسار الصوتي داخل Home Assistant.',
          '[مراجعة Whisper.cpp](/ar/power-local-llm/whisper-cpp-review) — محرك تعرف على الكلام محلي يمكنك تشغيله بنفسك.',
          '[مراجعة Piper TTS](/ar/power-local-llm/piper-tts-review) — محرك محلي لتحويل النص إلى كلام للإخراج الصوتي.',
          '[مقارنة أدوات الصوت والكلام](/ar/power-local-llm/local-llm-voice-audio-compared) — مقارنة الفئة التي تنتمي إليها هذه المراجعة.',
          '[دليل برامج النماذج اللغوية المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-01',
    dateModified: '2026-11-01',
    next_refresh_due: '2027-05-01',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/openvoiceos-review-hero-zh.webp',
    title: 'Open Voice OS 评测：适用于 Linux 和 Raspberry Pi 的开源语音助手',
    seoTitle: 'Open Voice OS 评测：Linux 开源语音助手',
    intro: 'Open Voice OS（OVOS）是 [OpenVoiceOS](https://www.openvoiceos.org/) 推出的社区开源语音助手平台，最初由 Mycroft 分叉而来。它可在 Linux 设备、Raspberry Pi 开发板和 Docker 上运行，以插件形式加载技能，并可把无法匹配的请求交给 LLM 处理。本评测基于项目网站和 GitHub 文档，并非实际测试。',
    metaDescription: 'Open Voice OS 评测：源自 Mycroft 的开源语音助手，适用于 Linux 和 Raspberry Pi。文档对语音、LLM 与隐私的说明。',
    twitterDescription: 'Open Voice OS 评测：适用于 Linux、Raspberry Pi 和 Docker 的开源语音助手。本地语音选项、LLM 后备，以及文档未说明之处。',
    audience: '想找开源语音助手的爱好者、Raspberry Pi 用户和智能音箱制作者，他们需要了解文档对离线使用、LLM 支持和数据共享的确认内容。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Open Voice OS 评测',
    targetKeywords: [
      'open voice os 评测',
      'ovos 语音助手',
      '开源语音助手 raspberry pi',
      'mycroft 替代',
      'ovos 安装程序',
      '离线语音助手 linux',
      'ovos llm 后备',
    ],
    current_models_mentioned: [
      'Vosk',
      'Mimic3',
      'DeepSpeech',
    ],
    current_hardware_mentioned: [
      'Raspberry Pi 5',
      'Raspberry Pi 4',
      'Mark II',
    ],
    leadAnswerBlock: '**Open Voice OS（安装程序 v11.0.0，2026年8月29日发布）是面向 Linux、Raspberry Pi 和 Docker 的开源语音助手平台，默认并不完全离线。**它启动时使用的语音识别需要联网，本地语音为可选，LLM 后备是附加功能。此处每项说法均来自项目文档，而非测试。',
    quickAnswerTop: {
      zh: {
        question: 'Open Voice OS 能在没有网络时使用吗？',
        answer: '据文档，只能部分做到：安装程序说明它不是完全离线模式，因为本地识别失败或无法运行时，录音会发送到公共语音服务器。本地语音识别与语音合成列在 alpha 渠道，需要性能足够的硬件。',
        bullets: [
          '技能是插件；部分随附，多数需单独安装。',
          '安装程序可添加 Home Assistant、LLM 后备和 HiveMind 卫星设备。',
          '数据共享有两类，只有同意后才会开启。',
          '设置集中在一个纯文本文件 mycroft.conf 中。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      {
        label: '快速回答',
        anchor: 'quick-answer',
      },
      {
        label: 'Open Voice OS 是什么？',
        anchor: 'what-is-ovos',
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
            text: 'Open Voice OS 是一个开源语音助手平台，可在自己的 Linux 设备、Raspberry Pi 或容器上运行，并能把无法匹配的请求发送给 LLM。',
          },
          {
            type: 'plain-terms',
            text: '唤醒词启动后，语音引擎把说话内容转成文字，由技能作答或由可选的 LLM 接手，最后用语音朗读回复。',
          },
        ],
        items: [
          '维护情况：安装程序仓库最近一次推送是在2026年11月1日，因此不适用停更项目警告。',
          '许可证：Apache-2.0 开源且免费，捐赠为自愿。',
          '来源：最初名为 MycroftOS，并维护 Mycroft-core 的增强分叉。',
          '安装：一条终端命令、浏览器引导式安装程序或 Raspberry Pi 镜像，不是双击即装的应用。',
          '语音识别：默认引擎需要联网，本地引擎为可选。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 Open Voice OS 网站，以及 ovos-core、ovos-installer 和 ovos-docker 的 GitHub 文档，核查日期为2026年11月1日。PromptQuorum 未安装也未计时，因此不评估识别质量、延迟和 LLM 可靠性。',
          },
        ],
      },
      overview: {
        id: 'what-is-ovos',
        title: 'Open Voice OS 是什么？',
        content: [
          '**Open Voice OS 是由社区运营的语音助手平台，面向智能音箱和其他以语音为主的设备。**网站称它最初叫 MycroftOS，为避免商标问题而更名，如今维护 Mycroft-core 的增强分叉。其核心组件 [ovos-core](https://github.com/OpenVoiceOS/ovos-core) 采用 Apache-2.0 发布。',
          '除核心外，还有安装程序、Raspberry Pi 镜像和 Docker 配置。核心仓库列出的最新 GitHub 版本为 2.1.1（2025年11月5日），而安装程序已到 v11.0.0，核心的默认分支仍在持续提交。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Open Voice OS 没有单一下载：可在浏览器引导式安装程序、终端脚本、Raspberry Pi 镜像或 Docker 之间选择。**',
        ],
        columns: [
          '选项',
          '获取方式',
        ],
        rows: [
          {
            '选项': '浏览器安装程序',
            '获取方式': '[start.openvoiceos.org](https://start.openvoiceos.org/)：引导式设置，被称为最简单的途径',
          },
          {
            '选项': '安装脚本',
            '获取方式': '[ovos-installer](https://github.com/OpenVoiceOS/ovos-installer)：在 Linux、WSL2、macOS 15+ 上一条命令',
          },
          {
            '选项': 'Raspberry Pi 镜像',
            '获取方式': '[RaspOVOS](https://openvoiceos.github.io/raspOVOS/)；[开发版镜像](https://downloads.openvoiceos.org/images/)标有“Expect bugs”',
          },
          {
            '选项': 'Docker',
            '获取方式': '[ovos-docker](https://github.com/OpenVoiceOS/ovos-docker)，Apache-2.0',
          },
          {
            '选项': '官方网站',
            '获取方式': '[openvoiceos.org](https://www.openvoiceos.org/)',
          },
          {
            '选项': '数据共享',
            '获取方式': '[遥测说明](https://github.com/OpenVoiceOS/ovos-installer/blob/main/docs/telemetry.md)；未找到隐私政策页面',
          },
          {
            '选项': '源代码',
            '获取方式': '[ovos-core](https://github.com/OpenVoiceOS/ovos-core)，Apache-2.0',
          },
        ],
        note: '核查的版本：据 GitHub，ovos-installer v11.0.0（2026年8月29日）和 ovos-core 2.1.1（2025年11月5日）。安装程序需要终端：没有双击即装的应用。项目免费，网站仅提供自愿捐赠。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: [
          '**来源只给出系统列表和一项硬件数据，超出这些的配置估算都只是猜测。**',
        ],
        columns: [
          '项目',
          '来源说明',
        ],
        rows: [
          {
            '项目': '操作系统',
            '来源说明': 'Debian/Ubuntu 及衍生版、Fedora、Arch、openSUSE、WSL2、Apple Silicon 上的 macOS 15+（需额外设置）',
          },
          {
            '项目': '工具',
            '来源说明': '安装脚本需要 curl、git、sudo 和 Bash 4 或更高版本',
          },
          {
            '项目': '本地语音',
            '来源说明': '内存 8 GB 的 Raspberry Pi 5，或性能至少相当的设备',
          },
          {
            '项目': '开发板与设备',
            '来源说明': '下载页列出 Raspberry Pi 3、4、5，以及 Mark I 和 Mark II 设备',
          },
          {
            '项目': '语音引擎',
            '来源说明': '默认识别需要联网；提到了 Vosk 和 DeepSpeech（离线）以及 Mimic3（本地语音）',
          },
          {
            '项目': '配置',
            '来源说明': '一个纯文本文件：mycroft.conf',
          },
        ],
        note: '已核查的页面上没有出现支持语言列表，投入时间之前请先确认你的语言。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤依据文档整理，PromptQuorum 并未实际运行。**',
        ],
        numberedItems: [
          {
            title: '选择安装途径',
            whyItMatters: '可使用浏览器安装程序、一行安装脚本、Raspberry Pi 镜像或 Docker 配置。',
          },
          {
            title: '回答安装程序的各项提示',
            whyItMatters: '选择 virtualenv 或容器、发布渠道、配置档案，以及 Home Assistant 或 LLM 等功能。',
          },
          {
            title: '决定附加功能',
            whyItMatters: '可按需连接 Home Assistant、兼容 OpenAI 的 LLM 端点，或用于扩展更多设备的 HiveMind 卫星设备。',
          },
          {
            title: '检查数据共享',
            whyItMatters: '同意或拒绝安装程序遥测和使用指标，其余设置在 mycroft.conf 中编辑。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: [
          '**以下内容均来自 Open Voice OS 文档，未经独立测试。**',
        ],
        items: [
          '**以插件形式提供的技能。**部分技能随 ovos-core 附带，多数从 PyPI 或 OpenVoiceOS 的 GitHub 组织单独安装；多数经典 Mycroft 技能也能运行。',
          '**LLM 后备。**通过 ovos-persona 和 solver 插件，没有技能处理的请求可发送到任何兼容 OpenAI 的端点，包括自托管的端点。',
          '**Home Assistant。**安装程序可设置可选的 Home Assistant 集成。',
          '**HiveMind 卫星设备。**多台设备可共用一个助手。',
          '**终端客户端。**ovos-tui-client 让你无需麦克风即可向助手输入文字。',
        ],
        note: '核心 README 中的示例 persona 指向一台“no uptime is guaranteed”的演示服务器。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**安装程序表示 Open Voice OS 不是完全离线模式：识别失败或返回为空时，录音会发送到公共服务器，无法在本地运行的部分会退回到公共语音服务。**本地识别和语音是针对 alpha 渠道描述的。网站仅提到平台“focus on privacy and security”。',
          '两类数据共享分别询问，未同意则保持关闭。安装程序遥测在安装期间发送一次，若同意，会通过未加密的 HTTP 向第三方查询 IP 以填写国家。使用指标会把助手匹配到的意图上报给社区服务器，并发布在开放数据门户上；删除 mycroft.conf 中的 open_data 块即可停止。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是项目方的声明，并非审计结果。PromptQuorum 未检查网络流量或源代码。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**Raspberry Pi 和 Linux 爱好者**：想要开放的智能音箱方案，并能接受终端安装。',
          '**Mycroft 用户**：在找仍在积极维护、还能运行许多经典技能的后继项目。',
          '**Home Assistant 用户**：想要独立、可扩展的语音助手，并可选地接入 LLM。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**识别质量与速度。**来源未给出耗时数据，PromptQuorum 也未做测量。',
          '**语言覆盖。**已核查的页面上没有出现支持语言列表。',
          '**发布节奏。**核心最新的 GitHub 版本是2025年11月的，但提交仍在继续；文档提到了预发布版本的注意事项。',
          '**社区服务器的数据处理。**发送到遥测和指标服务器的数据保留期限与用途均无文档说明，也未找到隐私政策页面。',
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
          {
            '应用': '[Home Assistant Assist](/zh/power-local-llm/home-assistant-assist-review)',
            '平台': 'Linux、网页、iOS、Android',
            '价格 / 许可证': '免费 / Apache-2.0',
            '主要区别': 'Home Assistant 智能家居服务器内的语音流程',
          },
          {
            '应用': '[Voxa](/zh/power-local-llm/voxa-review)',
            '平台': 'Windows、macOS、Linux',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '本地优先的桌面语音助手，云端语音为可选',
          },
          {
            '应用': '[Jarvis](/zh/power-local-llm/jarvis-mac-review)',
            '平台': 'macOS',
            '价格 / 许可证': '免费 / 开源',
            '主要区别': '据其条目，单机桌面助手，内置 Llama、Whisper 和 Kokoro',
          },
        ],
        note: '这些是目录中最接近的语音助手，而非直接替代品；请在各应用自己的页面上确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Open Voice OS 和 Mycroft 是同一个东西吗？',
            a: '不是，但源自后者：项目称它最初叫 MycroftOS，并维护 Mycroft-core 的增强分叉，核心 README 说多数经典 Mycroft 技能也能运行。',
          },
          {
            q: '它能使用本地 LLM 吗？',
            a: '可以，作为可选后备：对于技能无法处理的请求，安装程序接受任何兼容 OpenAI 的端点，包括自托管的端点。',
          },
          {
            q: '一定要有 Raspberry Pi 吗？',
            a: '不需要。Linux 发行版、WSL2、Apple Silicon 上的 macOS 15+ 和 Docker 也在列表中；只有本地语音与内存 8 GB 或更高的 Raspberry Pi 5 挂钩。',
          },
          {
            q: '没有麦克风能用吗？',
            a: '安装程序会设置 ovos-tui-client，这是一个用于向助手输入文字的终端客户端。',
          },
          {
            q: '如何停止使用指标？',
            a: '删除 mycroft.conf 中的 open_data 块并重启服务；文档没有说明同意后如何撤回安装程序遥测。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Open Voice OS 是一条开发活跃、采用 Apache-2.0 的途径，可在你自己掌控的硬件上搭建开放的语音助手，并可选择加入本地语音、Home Assistant 和 LLM。不足在于：默认识别引擎需要联网，安装在终端中进行，已核查的页面没有出现语言列表，语音质量和延迟在此未经测试。它适合爱好者和 Mycroft 老用户；想要双击即用的应用，请看上面的替代方案。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Open Voice OS 网站](https://www.openvoiceos.org/) — 项目介绍、许可证、平台和链接。',
          '[下载页面](https://www.openvoiceos.org/downloads) — 浏览器安装程序、Raspberry Pi 镜像和开发版镜像。',
          '[ovos-installer](https://github.com/OpenVoiceOS/ovos-installer) — 安装命令、支持的系统、可选功能和语音方面的说明。',
          '[安装程序遥测说明](https://github.com/OpenVoiceOS/ovos-installer/blob/main/docs/telemetry.md) — 遥测和使用指标发送的内容。',
          '[ovos-core](https://github.com/OpenVoiceOS/ovos-core) — 技能、ovos-persona、许可证和发布状态。',
          '[ovos-installer v11.0.0](https://github.com/OpenVoiceOS/ovos-installer/releases/tag/v11.0.0) — 核查的发布日期。',
          '[ovos-docker](https://github.com/OpenVoiceOS/ovos-docker) — 容器配置。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Home Assistant Assist 评测](/zh/power-local-llm/home-assistant-assist-review) — Home Assistant 内的语音流程。',
          '[Whisper.cpp 评测](/zh/power-local-llm/whisper-cpp-review) — 可自行运行的本地语音识别。',
          '[Piper TTS 评测](/zh/power-local-llm/piper-tts-review) — 用于语音输出的本地文字转语音引擎。',
          '[语音与音频工具对比](/zh/power-local-llm/local-llm-voice-audio-compared) — 本评测所属的类别对比。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-01',
    dateModified: '2026-11-01',
    next_refresh_due: '2027-05-01',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/openvoiceos-review-hero-ko.webp',
    title: 'Open Voice OS 리뷰: Linux와 Raspberry Pi용 오픈소스 음성 비서',
    seoTitle: 'Open Voice OS 리뷰: 오픈소스 음성 비서',
    intro: 'Open Voice OS(OVOS)는 Mycroft의 포크로 시작한 [OpenVoiceOS](https://www.openvoiceos.org/)의 커뮤니티 오픈소스 음성 비서 플랫폼입니다. Linux 장치, Raspberry Pi 보드, Docker에서 동작하고, 스킬을 플러그인으로 받아들이며, 인식하지 못한 요청은 LLM에 넘길 수 있습니다. 이 리뷰는 프로젝트 웹사이트와 GitHub 문서에 근거한 것으로, 직접 테스트한 것이 아닙니다.',
    metaDescription: 'Open Voice OS 리뷰: Mycroft에서 이어진 Linux·Raspberry Pi용 오픈소스 음성 비서. 음성, LLM, 개인정보에 대해 문서가 말하는 내용.',
    twitterDescription: 'Open Voice OS 리뷰: Linux, Raspberry Pi, Docker용 오픈소스 음성 비서. 로컬 음성 옵션, LLM 폴백, 문서가 남겨 둔 부분.',
    audience: '오픈 음성 비서를 찾는 취미 개발자, Raspberry Pi 소유자, 스마트 스피커 제작자로, 오프라인 사용, LLM 지원, 데이터 공유에 대해 문서가 확인하는 내용을 알아야 하는 분.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Open Voice OS 리뷰',
    targetKeywords: [
      'open voice os 리뷰',
      'ovos 음성 비서',
      '오픈소스 음성 비서 raspberry pi',
      'mycroft 대안',
      'ovos 설치 프로그램',
      '오프라인 음성 비서 linux',
      'ovos llm 폴백',
    ],
    current_models_mentioned: [
      'Vosk',
      'Mimic3',
      'DeepSpeech',
    ],
    current_hardware_mentioned: [
      'Raspberry Pi 5',
      'Raspberry Pi 4',
      'Mark II',
    ],
    leadAnswerBlock: '**Open Voice OS(설치 프로그램 v11.0.0, 2026년 8월 29일 공개)는 Linux, Raspberry Pi, Docker용 오픈소스 음성 비서 플랫폼이며, 기본 설정에서는 완전한 오프라인이 아닙니다.** 처음 쓰이는 음성 인식기는 인터넷이 필요하고, 로컬 음성은 선택 사항이며, LLM 폴백은 추가 기능입니다. 여기의 모든 서술은 프로젝트 문서에 근거하며 테스트에서 나온 것이 아닙니다.',
    quickAnswerTop: {
      ko: {
        question: 'Open Voice OS는 인터넷 없이 동작하나요?',
        answer: '문서에 따르면 일부만 가능합니다. 로컬 인식이 실패하거나 실행되지 못하면 녹음이 공개 음성 서버로 전송되므로, 설치 프로그램은 완전한 오프라인 모드가 아니라고 밝힙니다. 로컬 음성 인식과 음성 합성은 성능이 충분한 하드웨어의 알파 채널에서 언급됩니다.',
        bullets: [
          '스킬은 플러그인이며, 일부는 기본 포함되고 대부분 따로 설치합니다.',
          '설치 프로그램은 Home Assistant, LLM 폴백, HiveMind 위성을 추가할 수 있습니다.',
          '데이터 공유는 두 종류이며, 동의하지 않으면 모두 꺼져 있습니다.',
          '설정은 평문 파일 하나, mycroft.conf에 있습니다.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      {
        label: '빠른 답변',
        anchor: 'quick-answer',
      },
      {
        label: 'Open Voice OS란?',
        anchor: 'what-is-ovos',
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
            text: 'Open Voice OS는 자신의 Linux 장치, Raspberry Pi, 컨테이너에서 실행되는 오픈소스 음성 비서 플랫폼으로, 처리하지 못한 요청을 LLM에 보낼 수 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '호출어로 시작하고, 음성 엔진이 말을 텍스트로 바꾸며, 스킬이 답하거나 선택형 LLM이 이어받고, 음성이 답을 읽어 줍니다.',
          },
        ],
        items: [
          '유지 관리: 설치 프로그램 저장소에 2026년 11월 1일 마지막 푸시가 있어 방치 프로젝트 경고는 해당되지 않습니다.',
          '라이선스: Apache-2.0 오픈소스이며 무료입니다. 기부는 선택 사항입니다.',
          '유래: MycroftOS로 시작했고 Mycroft-core의 확장 포크를 유지합니다.',
          '설치: 터미널 명령 한 줄, 브라우저 안내형 설치 프로그램 또는 Raspberry Pi 이미지이며, 더블클릭 앱이 아닙니다.',
          '음성 인식: 기본 엔진은 인터넷이 필요하고, 로컬 엔진은 선택 사항입니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 11월 1일에 확인한 Open Voice OS 웹사이트와 ovos-core, ovos-installer, ovos-docker의 GitHub 문서에 근거합니다. PromptQuorum은 설치하거나 측정하지 않았으므로 인식 품질, 지연 시간, LLM 신뢰성은 평가하지 않습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-ovos',
        title: 'Open Voice OS란?',
        content: [
          '**Open Voice OS는 스마트 스피커 등 음성 중심 장치를 위한, 커뮤니티가 운영하는 음성 비서 플랫폼입니다.** 웹사이트에 따르면 MycroftOS로 시작했고 상표 문제를 피하려고 이름을 바꿨으며, 지금은 Mycroft-core의 확장 포크를 유지합니다. 핵심 구성 요소인 [ovos-core](https://github.com/OpenVoiceOS/ovos-core)는 Apache-2.0으로 공개됩니다.',
          '코어 외에 설치 프로그램, Raspberry Pi 이미지, Docker 구성이 있습니다. 코어 저장소가 표시하는 최신 GitHub 릴리스는 2.1.1(2025년 11월 5일)이고, 설치 프로그램은 v11.0.0이며, 코어의 기본 브랜치에는 커밋이 계속 들어옵니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Open Voice OS에는 단일 다운로드가 없고, 브라우저 안내형 설치 프로그램, 터미널 스크립트, Raspberry Pi 이미지, Docker 중에서 고릅니다.**',
        ],
        columns: [
          '옵션',
          '입수 방법',
        ],
        rows: [
          {
            '옵션': '브라우저 설치 프로그램',
            '입수 방법': '[start.openvoiceos.org](https://start.openvoiceos.org/): 안내형 설정으로, 가장 쉬운 방법이라고 소개됩니다',
          },
          {
            '옵션': '설치 스크립트',
            '입수 방법': '[ovos-installer](https://github.com/OpenVoiceOS/ovos-installer): Linux, WSL2, macOS 15+에서 명령 한 줄',
          },
          {
            '옵션': 'Raspberry Pi 이미지',
            '입수 방법': '[RaspOVOS](https://openvoiceos.github.io/raspOVOS/); [개발용 이미지](https://downloads.openvoiceos.org/images/)에는 "Expect bugs" 경고가 있습니다',
          },
          {
            '옵션': 'Docker',
            '입수 방법': '[ovos-docker](https://github.com/OpenVoiceOS/ovos-docker), Apache-2.0',
          },
          {
            '옵션': '웹사이트',
            '입수 방법': '[openvoiceos.org](https://www.openvoiceos.org/)',
          },
          {
            '옵션': '데이터 공유',
            '입수 방법': '[텔레메트리 안내](https://github.com/OpenVoiceOS/ovos-installer/blob/main/docs/telemetry.md); 개인정보 처리방침 페이지는 찾지 못했습니다',
          },
          {
            '옵션': '소스 코드',
            '입수 방법': '[ovos-core](https://github.com/OpenVoiceOS/ovos-core), Apache-2.0',
          },
        ],
        note: '확인한 버전: GitHub 기준 ovos-installer v11.0.0(2026년 8월 29일)과 ovos-core 2.1.1(2025년 11월 5일). 설치 프로그램에는 터미널이 필요하며 더블클릭 앱은 없습니다. 프로젝트는 무료이고 웹사이트는 선택적 기부만 안내합니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: [
          '**출처가 제시하는 것은 지원 시스템 목록과 하드웨어 수치 하나뿐이어서, 그 이상의 규모 산정은 추측입니다.**',
        ],
        columns: [
          '항목',
          '출처의 설명',
        ],
        rows: [
          {
            '항목': '운영 체제',
            '출처의 설명': 'Debian/Ubuntu 및 파생판, Fedora, Arch, openSUSE, WSL2, Apple Silicon의 macOS 15+(추가 설정 필요)',
          },
          {
            '항목': '도구',
            '출처의 설명': '설치 스크립트에는 curl, git, sudo, Bash 4 이상이 필요',
          },
          {
            '항목': '로컬 음성',
            '출처의 설명': 'RAM 8 GB의 Raspberry Pi 5 또는 그 이상의 성능을 가진 장치',
          },
          {
            '항목': '보드와 장치',
            '출처의 설명': '다운로드 페이지에는 Raspberry Pi 3·4·5, Mark I 및 Mark II 장치',
          },
          {
            '항목': '음성 엔진',
            '출처의 설명': '기본 인식은 인터넷이 필요하며, Vosk와 DeepSpeech(오프라인), Mimic3(로컬 음성)가 언급됩니다',
          },
          {
            '항목': '설정',
            '출처의 설명': '평문 파일 하나: mycroft.conf',
          },
        ],
        note: '확인한 페이지에는 지원 언어 목록이 보이지 않았으므로, 시간을 들이기 전에 사용하는 언어를 먼저 확인하세요.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**아래 단계는 문서를 따른 것이며 PromptQuorum이 실행해 보지는 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '설치 경로 고르기',
            whyItMatters: '브라우저 설치 프로그램, 한 줄 설치 스크립트, Raspberry Pi 이미지, Docker 구성 중 하나를 사용합니다.',
          },
          {
            title: '설치 프로그램 화면에 답하기',
            whyItMatters: 'virtualenv 또는 컨테이너, 릴리스 채널, 프로필, Home Assistant나 LLM 같은 기능을 선택합니다.',
          },
          {
            title: '추가 기능 정하기',
            whyItMatters: '필요하면 Home Assistant, OpenAI 호환 LLM 엔드포인트, 장치를 늘리는 HiveMind 위성을 연결합니다.',
          },
          {
            title: '데이터 공유 검토하기',
            whyItMatters: '설치 프로그램 텔레메트리와 사용 지표에 동의하거나 거절하고, 나머지는 mycroft.conf에서 편집합니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 내용은 모두 Open Voice OS 문서에서 나온 것이며, 독립적으로 테스트하지 않았습니다.**',
        ],
        items: [
          '**플러그인으로서의 스킬.** 일부 스킬은 ovos-core에 포함되고, 대부분은 PyPI나 OpenVoiceOS GitHub 조직에서 따로 설치합니다. 기존 Mycroft 스킬 대부분도 동작합니다.',
          '**LLM 폴백.** ovos-persona와 솔버 플러그인을 통해, 어떤 스킬도 처리하지 않는 요청을 자체 호스팅을 포함한 OpenAI 호환 엔드포인트로 보낼 수 있습니다.',
          '**Home Assistant.** 설치 프로그램이 선택형 Home Assistant 연동을 설정할 수 있습니다.',
          '**HiveMind 위성.** 여러 장치가 하나의 비서를 공유할 수 있습니다.',
          '**터미널 클라이언트.** ovos-tui-client로 마이크 없이 비서에게 글자로 말할 수 있습니다.',
        ],
        note: '코어 README의 예시 페르소나는 "no uptime is guaranteed"라고 밝힌 데모 서버를 가리킵니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**설치 프로그램은 Open Voice OS가 완전한 오프라인 모드가 아니라고 밝힙니다. 인식이 실패하거나 결과가 없으면 녹음이 공개 서버로 가고, 로컬에서 실행할 수 없는 부분은 공개 음성 서비스로 대체됩니다.** 로컬 인식과 음성은 알파 채널에 대해 설명되어 있습니다. 웹사이트는 "focus on privacy and security"라고만 말합니다.',
          '두 종류의 데이터 공유는 따로 묻고, 동의하지 않으면 꺼져 있습니다. 설치 프로그램 텔레메트리는 설치 중에 한 번 전송되며, 동의하면 국가를 채우기 위해 암호화되지 않은 HTTP로 제3자 IP 조회 서비스를 사용합니다. 사용 지표는 비서가 매칭한 인텐트를 커뮤니티 서버에 보고하고 오픈 데이터 포털에 공개되며, mycroft.conf에서 open_data 블록을 삭제하면 멈춥니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 프로젝트 측의 선언이지 감사 결과가 아닙니다. PromptQuorum은 네트워크 트래픽이나 소스 코드를 점검하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**Raspberry Pi와 Linux를 만지는 취미 개발자**: 개방형 스마트 스피커 환경을 원하고 터미널 설치를 감수할 수 있는 분.',
          '**Mycroft 사용자**: 기존 스킬 다수를 계속 실행할 수 있는, 활발히 유지되는 후속 프로젝트를 찾는 분.',
          '**Home Assistant 소유자**: 선택형 LLM을 뒤에 둘 수 있는 독립적이고 확장 가능한 음성 비서를 원하는 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**인식 품질과 속도.** 출처에 측정값이 없고 PromptQuorum도 측정하지 않았습니다.',
          '**지원 언어.** 확인한 페이지에는 지원 언어 목록이 보이지 않았습니다.',
          '**릴리스 주기.** 코어의 최신 GitHub 릴리스는 2025년 11월 것이지만 커밋은 계속되며, 문서는 사전 릴리스의 유의점을 언급합니다.',
          '**커뮤니티 서버의 데이터 처리.** 텔레메트리와 지표 서버로 보낸 데이터의 보관 기간과 사용 방식은 문서화되어 있지 않고, 개인정보 처리방침 페이지도 찾지 못했습니다.',
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
          {
            '앱': '[Home Assistant Assist](/ko/power-local-llm/home-assistant-assist-review)',
            '플랫폼': 'Linux, 웹, iOS, Android',
            '가격 / 라이선스': '무료 / Apache-2.0',
            '핵심 차이점': '스마트홈 서버 Home Assistant 안의 음성 파이프라인',
          },
          {
            '앱': '[Voxa](/ko/power-local-llm/voxa-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이점': '로컬 우선 데스크톱 음성 비서, 클라우드 음성은 선택 사항',
          },
          {
            '앱': '[Jarvis](/ko/power-local-llm/jarvis-mac-review)',
            '플랫폼': 'macOS',
            '가격 / 라이선스': '무료 / 오픈소스',
            '핵심 차이점': '목록에 따르면 Llama, Whisper, Kokoro를 포함한 단일 컴퓨터용 데스크톱 비서',
          },
        ],
        note: '디렉터리에서 가장 가까운 음성 비서일 뿐 직접적인 대체재는 아닙니다. 현재 가격, 라이선스, 플랫폼은 각 앱 페이지에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Open Voice OS는 Mycroft와 같은 것인가요?',
            a: '아니요, 하지만 그 계보를 잇습니다. 프로젝트는 MycroftOS로 시작해 Mycroft-core의 확장 포크를 유지한다고 밝히며, 코어 README는 기존 Mycroft 스킬 대부분도 동작한다고 합니다.',
          },
          {
            q: '로컬 LLM을 쓸 수 있나요?',
            a: '네, 선택형 폴백으로 가능합니다. 설치 프로그램은 스킬이 처리하지 않는 요청을 위해 자체 호스팅을 포함한 모든 OpenAI 호환 엔드포인트를 받아들입니다.',
          },
          {
            q: 'Raspberry Pi가 꼭 필요한가요?',
            a: '아니요. Linux 배포판, WSL2, Apple Silicon의 macOS 15+, Docker도 목록에 있으며, RAM 8 GB 이상의 Raspberry Pi 5와 연결된 것은 로컬 음성뿐입니다.',
          },
          {
            q: '마이크 없이도 쓸 수 있나요?',
            a: '설치 프로그램은 비서에게 글자로 말하는 터미널 클라이언트 ovos-tui-client를 설정합니다.',
          },
          {
            q: '사용 지표를 멈추려면?',
            a: 'mycroft.conf에서 open_data 블록을 삭제하고 서비스를 재시작합니다. 한 번 동의한 설치 프로그램 텔레메트리를 철회하는 방법은 문서에 설명이 없습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'Open Voice OS는 직접 관리하는 하드웨어에 개방형 음성 비서를 구축하는, 활발히 개발되는 Apache-2.0 선택지이며, 로컬 음성, Home Assistant, LLM을 선택적으로 더할 수 있습니다. 반면 기본 인식기는 인터넷이 필요하고, 설치는 터미널에서 하며, 확인한 페이지에는 언어 목록이 없고, 음성 품질과 지연 시간은 여기서 테스트하지 않았습니다. 취미 개발자와 Mycroft 경험자에게 어울리며, 더블클릭 앱을 원한다면 위의 대안을 살펴보세요.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Open Voice OS 웹사이트](https://www.openvoiceos.org/) — 프로젝트 설명, 라이선스, 플랫폼, 링크.',
          '[다운로드 페이지](https://www.openvoiceos.org/downloads) — 브라우저 설치 프로그램, Raspberry Pi 이미지, 개발용 이미지.',
          '[ovos-installer](https://github.com/OpenVoiceOS/ovos-installer) — 설치 명령, 지원 시스템, 선택 기능, 음성 관련 유의점.',
          '[설치 프로그램 텔레메트리 안내](https://github.com/OpenVoiceOS/ovos-installer/blob/main/docs/telemetry.md) — 텔레메트리와 사용 지표가 보내는 내용.',
          '[ovos-core](https://github.com/OpenVoiceOS/ovos-core) — 스킬, ovos-persona, 라이선스, 릴리스 현황.',
          '[ovos-installer v11.0.0](https://github.com/OpenVoiceOS/ovos-installer/releases/tag/v11.0.0) — 확인한 릴리스 날짜.',
          '[ovos-docker](https://github.com/OpenVoiceOS/ovos-docker) — 컨테이너 구성.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Home Assistant Assist 리뷰](/ko/power-local-llm/home-assistant-assist-review) — Home Assistant 안의 음성 파이프라인.',
          '[Whisper.cpp 리뷰](/ko/power-local-llm/whisper-cpp-review) — 직접 실행할 수 있는 로컬 음성 인식기.',
          '[Piper TTS 리뷰](/ko/power-local-llm/piper-tts-review) — 음성 출력을 위한 로컬 텍스트 음성 변환 엔진.',
          '[음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 이 리뷰가 속한 카테고리 비교.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그.',
        ],
      },
    },
  },
}
