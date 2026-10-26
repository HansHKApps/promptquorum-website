// Voicebox Review: open-source local voice studio (macOS, Windows, Linux from source) for voice cloning, text-to-speech, dictation and agent voice output
// Slug: voicebox-review
// Companion to: xtts-v2-review, coqui-tts-review, handy-review, openwhispr-review, whisper-cpp-review, local-llm-voice-audio-compared
// Sources: voicebox.sh (home, /pricing, /cloud, /privacy last updated 2026-07-06), docs.voicebox.sh, github.com/jamiepine/voicebox (README, MIT licence, Release v0.5.0 published
// 2026-04-25, default-branch commits up to 2026-10-07), all checked 2026-10-26 — no hands-on testing.

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
    heroImage: '/images/voicebox-review-hero-en.webp',
    title: 'Voicebox Review: Open-Source Local Voice Studio',
    seoTitle: 'Voicebox Review: Free Local Voice Cloning and Dictation',
    intro: 'Voicebox is an open-source desktop app that clones voices, turns text into speech with several local engines, dictates into any app with Whisper and lets AI agents speak through an MCP server. Everything it describes runs on your own computer, and the download is free. This review is based on the website, its privacy policy and pricing page, the documentation and the GitHub repository, checked on 26 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription: 'Voicebox review: MIT-licensed local voice studio for Mac and Windows with voice cloning, text-to-speech, Whisper dictation and an MCP server. Not tested.',
    twitterDescription: 'Voice cloning, text-to-speech and dictation in one free, MIT-licensed desktop app that runs locally. What the sources confirm about engines, privacy and installers, and what they do not.',
    audience: 'Creators, developers and accessibility users who want local voice cloning, text-to-speech and dictation and need to know what the sources confirm, what the app downloads and what is not yet available.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Voicebox review',
    targetKeywords: [
      'voicebox review',
      'voicebox voice cloning',
      'elevenlabs alternative open source',
      'local voice cloning app',
      'open source text to speech desktop app',
      'wispr flow alternative open source',
      'voicebox.sh',
    ],
    current_models_mentioned: ['Qwen3-TTS', 'Chatterbox', 'Kokoro', 'Whisper'],
    current_hardware_mentioned: ['Apple silicon', 'NVIDIA GPU'],
    leadAnswerBlock: '**Voicebox (version 0.5.0) is an MIT-licensed desktop app that combines voice cloning, text-to-speech and Whisper dictation, and the sources say it keeps your recordings, voice profiles and transcripts on your own computer.** It also runs a local API and an MCP server so AI agents can speak in a cloned voice, and every statement here comes from the maker\'s website, documentation and GitHub repository.',
    quickAnswerTop: {
      en: {
        question: 'Does Voicebox keep my voice data on my computer?',
        answer: 'Yes by default: the privacy policy says the desktop app does not transmit your recordings, voice profiles, transcripts, generations or settings to the operator. An optional encrypted Cloud backup is announced but not yet available.',
        bullets: [
          'Clones a voice from a short reference sample and generates speech with a choice of local text-to-speech engines.',
          'A global hotkey dictates into the focused text field using Whisper, with optional clean-up by a local language model.',
          'A stories editor arranges several voices on a multi-track timeline.',
          'A REST API and an MCP server let agents such as Claude Code and Cursor speak in a voice you chose.',
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
        label: 'What Is Voicebox?',
        anchor: 'what-is-voicebox',
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
        label: 'Features Confirmed by the Sources',
        anchor: 'key-features',
      },
      {
        label: 'Plans',
        anchor: 'plans',
      },
      {
        label: 'Data Flow and Privacy',
        anchor: 'privacy',
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
            text: 'Voicebox is an open-source desktop app that clones voices, generates speech with local engines, dictates with Whisper and gives AI agents a voice through an MCP server.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a recording studio and a voice keyboard in one program, with everything running on your own machine instead of a subscription service.',
          },
        ],
        items: [
          'Maintenance: the main branch last changed on 7 October 2026, so no stale-project warning applies; the latest tagged release, 0.5.0, dates from 25 April 2026.',
          'Cost: the local app is free; an optional paid Cloud backup is announced but not yet released.',
          'Engines: the README lists eight text-to-speech engines and Whisper for transcription.',
          'Platforms: installers for macOS and Windows; Linux needs a build from source.',
          'Operator: Spacedrive Technology Inc.; the code is open under the MIT license.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on [voicebox.sh](https://voicebox.sh), its privacy policy, the documentation and the GitHub repository, checked on 26 October 2026. PromptQuorum has not installed or timed the app, so voice quality and speed are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-voicebox',
        title: 'What Is Voicebox?',
        content: [
          '**Voicebox is a local-first voice studio that covers both directions of voice: it speaks text aloud in cloned or preset voices, and it listens, transcribes and pastes what you say.** The README calls it a free and open-source alternative to ElevenLabs and WisprFlow in one app, and the website describes it as running entirely on your machine.',
          '**The app is built with Tauri (Rust) around a Python FastAPI backend, and the website names Spacedrive Technology Inc. as its operator.** Version 0.5.0, called "the Capture release" in its notes, added dictation, voice personalities and the MCP server. The version "v0.2.0" shown on the website is a label inside its demo screenshot, not the release number.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Voicebox is a download for macOS and Windows; Linux has no pre-built binary and must be built from source, and the README also shows a Docker route.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          {
            Option: 'macOS',
            'How to get it': '.dmg for Apple silicon and Intel: [voicebox.sh/download](https://voicebox.sh/download)',
          },
          {
            Option: 'Windows',
            'How to get it': '.msi or .exe installer (x64): [voicebox.sh/download](https://voicebox.sh/download)',
          },
          {
            Option: 'Linux',
            'How to get it': 'Build from source: [voicebox.sh/linux-install](https://voicebox.sh/linux-install)',
          },
          {
            Option: 'Docker',
            'How to get it': '`docker compose up` from the repository (README)',
          },
          {
            Option: 'Website',
            'How to get it': '[voicebox.sh](https://voicebox.sh)',
          },
          {
            Option: 'Privacy policy',
            'How to get it': '[voicebox.sh/privacy](https://voicebox.sh/privacy)',
          },
          {
            Option: 'Source code',
            'How to get it': '[github.com/jamiepine/voicebox](https://github.com/jamiepine/voicebox), MIT license',
          },
        ],
        note: 'Version reviewed: 0.5.0, published on 25 April 2026 per the [GitHub Releases page](https://github.com/jamiepine/voicebox/releases/latest), which lists the macOS and Windows installers; the newest change to the main branch was on 7 October 2026. Plans are covered under Plans.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**No minimum RAM, disk or operating-system version is stated in the sources; the demanding part is the speech and language models, which are downloaded separately.**',
        ],
        columns: ['Item', 'What the sources say'],
        rows: [
          {
            Item: 'Operating system',
            'What the sources say': 'Installers for macOS (Apple silicon and Intel) and Windows x64; Linux from source; no OS version minimum is given',
          },
          {
            Item: 'Acceleration',
            'What the sources say': 'MLX on Apple silicon, CUDA on NVIDIA GPUs, ROCm on AMD under Linux, DirectML on Windows, Intel Arc, and a CPU fallback that works everywhere but slower',
          },
          {
            Item: 'Lightest engines',
            'What the sources say': 'LuxTTS needs about 1 GB of VRAM and Kokoro is an 82-million-parameter model aimed at fast CPU use; the README gives no figure for the larger engines',
          },
          {
            Item: 'Models',
            'What the sources say': 'Engines, Whisper sizes and the bundled Qwen3 language model (0.6B, 1.7B or 4B) are downloaded inside the app; the sources give no total download size',
          },
          {
            Item: 'Permissions',
            'What the sources say': 'macOS Accessibility and Input Monitoring for hotkeys and auto-paste; without Accessibility, dictation still saves transcripts and only the paste step is off',
          },
          {
            Item: 'Internet',
            'What the sources say': 'Needed to download models; the website says generation and refinement then run on the machine',
          },
        ],
        note: 'Acceleration backends are as listed in the README; PromptQuorum did not check which combinations ship in the installers.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the website, the documentation or the README; none has been independently tested.**',
        ],
        items: [
          '**Voice cloning and presets.** Zero-shot cloning from a short reference sample, plus preset voices through Kokoro and Qwen CustomVoice; the README counts eight engines and 23 languages, with the broadest coverage in Chatterbox Multilingual.',
          '**Expressive speech and effects.** Chatterbox Turbo reads tags such as [laugh] and [sigh], and eight post-processing effects from Spotify\'s pedalboard library can be applied after generation.',
          '**Long text and stories.** Long scripts are split at sentence boundaries and crossfaded, up to 50,000 characters, and a multi-track timeline arranges several voices into a story.',
          '**Dictation and captures.** A global hotkey transcribes with Whisper, or Whisper Turbo, and pastes into the focused field on macOS; every recording is kept in a Captures tab with its transcript.',
          '**Agents and API.** A local REST API on port 17493 and an MCP server with four tools let Claude Code, Cursor, Windsurf or Cline speak in a voice bound to each client.',
        ],
        note: 'The README lists auto-paste on Windows and Linux, streaming transcription and further speech-to-text engines as roadmap items, not shipped features.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'Plans',
        content: [
          '**The local app is free with no account, and the pricing page lists paid Cloud and Studio plans that are both marked "coming soon".** All figures are US-dollar prices from the pricing page, which says they are not final.',
        ],
        columns: ['Plan', 'What the pricing page lists'],
        rows: [
          {
            Plan: 'Local',
            'What the pricing page lists': '$0, no account: voice cloning across every engine, dictation and captures, MCP and agent integration, personalities, unlimited local generations',
          },
          {
            Plan: 'Cloud',
            'What the pricing page lists': '$12 per year at launch: end-to-end encrypted backup and sync, 25 GB storage, up to 5 devices, 30-day version history',
          },
          {
            Plan: 'Studio',
            'What the pricing page lists': '$48 per year, marked as a placeholder: Cloud plus 250 GB storage, unlimited devices, one-year version history, priority support',
          },
        ],
        note: 'Figures as shown on 26 October 2026; no other currency or regional price was checked, and taxes are not included.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**The privacy policy, last updated 6 July 2026, says the desktop app does not transmit your recordings, voice profiles, transcripts, generations or settings to the operator, and it describes no telemetry or analytics for the app.** The website adds that models, audio, transcripts and language-model output never leave the machine, and the local API listens on 127.0.0.1 by default.',
          'The optional Cloud backup is described as end-to-end encrypted on your device before upload, so the servers see only the account email, object counts and sizes, hashes, sync counters and timestamps. The policy also covers a Voice ID feature that stores an encrypted voiceprint and warns that published clips are public; payments run through Stripe or by cryptocurrency. The website mentions a "Local or Remote" option to connect to a backend on another machine, which it does not reconcile with its "entirely on your machine" wording.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maker\'s declarations, not audit results. The code is public under the MIT license, but PromptQuorum has not read it or inspected the app\'s network traffic, and the policy does not address website analytics.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Voice quality and speed.** PromptQuorum did not listen to output, measure real-time factors or test cloning accuracy on any engine.',
          '**Model licenses.** The MIT license covers Voicebox\'s code; each speech model has its own terms, and a recent commit note describes the newly added OmniVoice engine as having non-commercial weights. We did not check any model license.',
          '**Engine count.** The README lists eight engines including Qwen VoiceDesign, while the website lists seven; we cannot tell which is current.',
          '**Release cadence.** The newest tagged release is from April 2026 although the main branch changed in October, so whether the installers include the latest engines is unclear.',
          '**Installer signing.** Whether the macOS and Windows installers are notarized or code-signed was not checked.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            App: '[XTTS v2](/power-local-llm/xtts-v2-review)',
            Platforms: 'macOS, Windows, Linux',
            'Price / license': 'Free / CPML',
            'Key difference': 'A single cloning model used as a library, with no app, dictation or agent features',
          },
          {
            App: '[Coqui TTS](/power-local-llm/coqui-tts-review)',
            Platforms: 'macOS, Windows, Linux',
            'Price / license': 'Free / MPL 2.0',
            'Key difference': 'A Python toolkit for running text-to-speech models from code rather than a desktop studio',
          },
          {
            App: '[Handy](/power-local-llm/handy-review)',
            Platforms: 'macOS, Windows, Linux',
            'Price / license': 'Free / MIT',
            'Key difference': 'Dictation only: no speech generation, voice cloning or agent voice output',
          },
          {
            App: '[OpenWhispr](/power-local-llm/openwhispr-review)',
            Platforms: 'macOS, Windows, Linux, iOS',
            'Price / license': 'Freemium / MIT',
            'Key difference': 'Dictation and meeting notes with local or cloud models, and no text-to-speech',
          },
        ],
        note: 'These are same-category apps from the PromptQuorum directory; confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Which engine should I start with?',
            a: 'The README describes Kokoro as a tiny 82-million-parameter model with 50 preset voices and fast CPU use, and Chatterbox Multilingual as the broadest for languages, so a CPU-only machine is the case for Kokoro. We did not compare output quality.',
          },
          {
            q: 'Can an AI agent really talk through it?',
            a: 'The README says any MCP-aware agent can call a speak tool, with a per-client voice binding set in Settings, and a plain HTTP endpoint covers tools that do not support MCP. An on-screen pill shows whenever an agent speaks.',
          },
          {
            q: 'Does dictation work on Windows and Linux?',
            a: 'Dictation and the Captures tab are described for all platforms, but the README lists auto-paste on Windows and Linux as roadmap items, so only macOS pasting into the focused field is confirmed.',
          },
          {
            q: 'What does the bundled language model do?',
            a: 'A local Qwen3 model cleans up filler words in transcripts and rewrites text in a voice profile\'s personality before it is spoken; the README names three sizes, 0.6B, 1.7B and 4B.',
          },
          {
            q: 'Is Voicebox Cloud available?',
            a: 'No: the website shows Cloud as "coming soon" with a notify link, and the pricing page says its prices and limits are not final. The local app does not need it.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Voicebox is an actively developed, MIT-licensed way to clone voices, generate speech and dictate on your own computer, with an API and MCP server that let agents speak. The privacy statements are strong for the free local app, but they are the maker\'s claims, the last tagged release is from April while the code kept changing into October, Linux needs a source build, and auto-paste is confirmed only on macOS. It suits creators and developers who want one free local voice tool and are willing to download several large models; anyone who needs proven voice quality, commercial-use clarity for each model or a polished Linux install should test it and read each model\'s license first.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Voicebox website](https://voicebox.sh) — description, engines, languages and downloads.',
          '[Voicebox pricing](https://voicebox.sh/pricing) — local, Cloud and Studio plans.',
          '[Voicebox Cloud](https://voicebox.sh/cloud) — status and encryption description.',
          '[Voicebox privacy policy](https://voicebox.sh/privacy) — data handling, last updated 6 July 2026.',
          '[Voicebox documentation](https://docs.voicebox.sh) — platforms and Docker route.',
          '[Voicebox on GitHub](https://github.com/jamiepine/voicebox) — README, MIT license, API and MCP details.',
          '[Voicebox releases](https://github.com/jamiepine/voicebox/releases) — version 0.5.0, installer files and release notes.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[XTTS v2 Review](/power-local-llm/xtts-v2-review) — a voice-cloning model that runs locally as a library.',
          '[Handy Review](/power-local-llm/handy-review) — a free, MIT-licensed push-to-talk dictation app.',
          '[OpenWhispr Review](/power-local-llm/openwhispr-review) — dictation and meeting notes with local or cloud speech models.',
          '[Whisper.cpp Review](/power-local-llm/whisper-cpp-review) — the C++ port of Whisper that many local dictation tools build on.',
          '[Voice and Audio Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — the category comparison this review belongs to.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Voicebox Review: Open-Source Local Voice Studio',
      description: 'Review of Voicebox, an MIT-licensed local voice studio for voice cloning, text-to-speech and dictation: plans, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/voicebox-review',
      inLanguage: 'en',
      datePublished: '2026-10-26',
      dateModified: '2026-10-26',
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
        audienceType: 'Creators, developers and accessibility users evaluating a local voice cloning, text-to-speech and dictation app',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Voicebox',
        },
        {
          '@type': 'Thing',
          name: 'Voice cloning',
        },
        {
          '@type': 'Thing',
          name: 'Text-to-speech',
        },
        {
          '@type': 'Thing',
          name: 'Whisper',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/voicebox-review',
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
          name: 'Voicebox Review',
          item: 'https://www.promptquorum.com/power-local-llm/voicebox-review',
        },
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
    heroImage: '/images/voicebox-review-hero-de.webp',
    title: 'Voicebox-Rezension: Open-Source-Sprachstudio für den eigenen Rechner',
    seoTitle: 'Voicebox-Rezension: Kostenlose lokale Stimmklon-App',
    intro: 'Voicebox ist eine quelloffene Desktop-App, die Stimmen klont, Text mit mehreren lokalen Engines in Sprache umwandelt, mit Whisper in jede App diktiert und KI-Agenten über einen MCP-Server sprechen lässt. Alles, was sie beschreibt, läuft auf Ihrem eigenen Computer, und der Download ist kostenlos. Diese Rezension stützt sich auf die Website, die Datenschutzerklärung und die Preisseite, die Dokumentation und das GitHub-Repository, geprüft am 26. Oktober 2026; PromptQuorum hat die App nicht selbst getestet.',
    metaDescription: 'Voicebox-Rezension: Sprachstudio unter MIT-Lizenz für Mac und Windows mit Stimmklonen, Text-to-Speech, Whisper-Diktat und MCP-Server. Nicht getestet.',
    twitterDescription: 'Stimmklonen, Text-to-Speech und Diktat in einer kostenlosen Desktop-App unter MIT-Lizenz, die lokal läuft. Was die Quellen zu Engines, Datenschutz und Installern bestätigen und was nicht.',
    audience: 'Kreative, Entwickler und Menschen, die auf Barrierefreiheit angewiesen sind, und die lokales Stimmklonen, Text-to-Speech und Diktat wollen und wissen müssen, was die Quellen bestätigen, was die App herunterlädt und was noch nicht verfügbar ist.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Voicebox Rezension',
    targetKeywords: [
      'voicebox rezension',
      'voicebox stimme klonen',
      'elevenlabs alternative open source',
      'lokale stimmklon app',
      'open source text to speech desktop app',
      'wispr flow alternative open source',
      'voicebox.sh',
    ],
    current_models_mentioned: ['Qwen3-TTS', 'Chatterbox', 'Kokoro', 'Whisper'],
    current_hardware_mentioned: ['Apple silicon', 'NVIDIA GPU'],
    leadAnswerBlock: '**Voicebox (Version 0.5.0) ist eine Desktop-App unter MIT-Lizenz, die Stimmklonen, Text-to-Speech und Whisper-Diktat vereint, und laut den Quellen bleiben Ihre Aufnahmen, Stimmprofile und Transkripte auf Ihrem eigenen Computer.** Sie betreibt außerdem eine lokale API und einen MCP-Server, damit KI-Agenten in einer geklonten Stimme sprechen können, und jede Aussage hier stammt aus der Website des Herstellers, der Dokumentation und dem GitHub-Repository.',
    quickAnswerTop: {
      de: {
        question: 'Bleiben meine Sprachdaten bei Voicebox auf meinem Rechner?',
        answer: 'Standardmäßig ja: Laut Datenschutzerklärung überträgt die Desktop-App Ihre Aufnahmen, Stimmprofile, Transkripte, Generierungen oder Einstellungen nicht an den Betreiber. Ein optionales verschlüsseltes Cloud-Backup ist angekündigt, aber noch nicht verfügbar.',
        bullets: [
          'Klont eine Stimme aus einer kurzen Referenzprobe und erzeugt Sprache mit einer Auswahl lokaler Text-to-Speech-Engines.',
          'Ein globales Tastenkürzel diktiert mit Whisper in das aktive Textfeld, optional mit Bereinigung durch ein lokales Sprachmodell.',
          'Ein Stories-Editor ordnet mehrere Stimmen auf einer Mehrspur-Zeitleiste an.',
          'Eine REST-API und ein MCP-Server lassen Agenten wie Claude Code und Cursor in einer von Ihnen gewählten Stimme sprechen.',
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
        label: 'Was ist Voicebox?',
        anchor: 'what-is-voicebox',
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
        label: 'Von den Quellen bestätigte Funktionen',
        anchor: 'key-features',
      },
      {
        label: 'Tarife',
        anchor: 'plans',
      },
      {
        label: 'Datenfluss und Datenschutz',
        anchor: 'privacy',
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
            text: 'Voicebox ist eine quelloffene Desktop-App, die Stimmen klont, Sprache mit lokalen Engines erzeugt, mit Whisper diktiert und KI-Agenten über einen MCP-Server eine Stimme gibt.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als Tonstudio und Sprachtastatur in einem Programm vor, das komplett auf Ihrem eigenen Rechner läuft statt über einen Abodienst.',
          },
        ],
        items: [
          'Pflege: Der Hauptzweig wurde zuletzt am 7. Oktober 2026 geändert, eine Warnung vor einem veralteten Projekt entfällt daher; das neueste getaggte Release, 0.5.0, stammt vom 25. April 2026.',
          'Kosten: Die lokale App ist kostenlos; ein optionales kostenpflichtiges Cloud-Backup ist angekündigt, aber noch nicht erschienen.',
          'Engines: Die README nennt acht Text-to-Speech-Engines und Whisper für die Transkription.',
          'Plattformen: Installer für macOS und Windows; Linux erfordert einen Build aus dem Quellcode.',
          'Betreiber: Spacedrive Technology Inc.; der Code ist unter der MIT-Lizenz offen.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf [voicebox.sh](https://voicebox.sh), die Datenschutzerklärung, die Dokumentation und das GitHub-Repository, geprüft am 26. Oktober 2026. PromptQuorum hat die App weder installiert noch gemessen; Stimmqualität und Geschwindigkeit werden daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-voicebox',
        title: 'Was ist Voicebox?',
        content: [
          '**Voicebox ist ein Local-first-Sprachstudio, das beide Richtungen der Stimme abdeckt: Es spricht Text in geklonten oder voreingestellten Stimmen vor, und es hört zu, transkribiert und fügt ein, was Sie sagen.** Die README nennt es eine kostenlose und quelloffene Alternative zu ElevenLabs und WisprFlow in einer App, und die Website beschreibt, dass es vollständig auf Ihrem Rechner läuft.',
          '**Die App ist mit Tauri (Rust) rund um ein Python-FastAPI-Backend gebaut, und die Website nennt Spacedrive Technology Inc. als Betreiber.** Version 0.5.0, in ihren Notizen „the Capture release“ genannt, brachte Diktat, Stimm-Persönlichkeiten und den MCP-Server. Die auf der Website gezeigte Version „v0.2.0“ ist eine Beschriftung im Demo-Screenshot, nicht die Release-Nummer.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Voicebox gibt es als Download für macOS und Windows; für Linux existiert keine vorkompilierte Datei, es muss aus dem Quellcode gebaut werden, und die README zeigt außerdem einen Docker-Weg.**',
        ],
        columns: ['Option', 'Bezug'],
        rows: [
          {
            Option: 'macOS',
            Bezug: '.dmg für Apple Silicon und Intel: [voicebox.sh/download](https://voicebox.sh/download)',
          },
          {
            Option: 'Windows',
            Bezug: '.msi- oder .exe-Installer (x64): [voicebox.sh/download](https://voicebox.sh/download)',
          },
          {
            Option: 'Linux',
            Bezug: 'Build aus dem Quellcode: [voicebox.sh/linux-install](https://voicebox.sh/linux-install)',
          },
          {
            Option: 'Docker',
            Bezug: '`docker compose up` aus dem Repository (README)',
          },
          {
            Option: 'Website',
            Bezug: '[voicebox.sh](https://voicebox.sh)',
          },
          {
            Option: 'Datenschutzerklärung',
            Bezug: '[voicebox.sh/privacy](https://voicebox.sh/privacy)',
          },
          {
            Option: 'Quellcode',
            Bezug: '[github.com/jamiepine/voicebox](https://github.com/jamiepine/voicebox), MIT-Lizenz',
          },
        ],
        note: 'Geprüfte Version: 0.5.0, laut [GitHub-Releases-Seite](https://github.com/jamiepine/voicebox/releases/latest) am 25. April 2026 veröffentlicht; dort sind die Installer für macOS und Windows aufgeführt. Die jüngste Änderung am Hauptzweig stammt vom 7. Oktober 2026. Die Tarife stehen unter Tarife.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
          '**Die Quellen nennen weder einen Mindest-RAM noch einen Mindest-Festplattenplatz oder eine Mindestversion des Betriebssystems; der anspruchsvolle Teil sind die Sprachsynthese- und Textmodelle, die separat heruntergeladen werden.**',
        ],
        columns: ['Punkt', 'Angaben der Quellen'],
        rows: [
          {
            Punkt: 'Betriebssystem',
            'Angaben der Quellen': 'Installer für macOS (Apple Silicon und Intel) und Windows x64; Linux aus dem Quellcode; keine Mindestversion des Betriebssystems angegeben',
          },
          {
            Punkt: 'Beschleunigung',
            'Angaben der Quellen': 'MLX auf Apple Silicon, CUDA auf NVIDIA-GPUs, ROCm auf AMD unter Linux, DirectML unter Windows, Intel Arc und ein CPU-Fallback, der überall funktioniert, aber langsamer ist',
          },
          {
            Punkt: 'Leichteste Engines',
            'Angaben der Quellen': 'LuxTTS braucht etwa 1 GB VRAM, und Kokoro ist ein Modell mit 82 Millionen Parametern, das auf schnelle CPU-Nutzung zielt; für die größeren Engines nennt die README keinen Wert',
          },
          {
            Punkt: 'Modelle',
            'Angaben der Quellen': 'Engines, Whisper-Größen und das mitgelieferte Qwen3-Sprachmodell (0,6B, 1,7B oder 4B) werden in der App geladen; die Quellen nennen keine Gesamtgröße des Downloads',
          },
          {
            Punkt: 'Berechtigungen',
            'Angaben der Quellen': 'macOS-Bedienungshilfen und Eingabeüberwachung für Tastenkürzel und automatisches Einfügen; ohne Bedienungshilfen speichert das Diktat weiterhin Transkripte, nur der Einfüge-Schritt entfällt',
          },
          {
            Punkt: 'Internet',
            'Angaben der Quellen': 'Nötig, um Modelle herunterzuladen; laut Website laufen Generierung und Nachbearbeitung danach auf dem Rechner',
          },
        ],
        note: 'Die Beschleunigungs-Backends entsprechen der Liste in der README; PromptQuorum hat nicht geprüft, welche Kombinationen in den Installern enthalten sind.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Alle folgenden Punkte stammen aus der Website, der Dokumentation oder der README; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Stimmklonen und Voreinstellungen.** Zero-Shot-Klonen aus einer kurzen Referenzprobe sowie voreingestellte Stimmen über Kokoro und Qwen CustomVoice; die README zählt acht Engines und 23 Sprachen, mit der breitesten Abdeckung in Chatterbox Multilingual.',
          '**Ausdrucksstarke Sprache und Effekte.** Chatterbox Turbo liest Tags wie [laugh] und [sigh], und acht Nachbearbeitungseffekte aus der pedalboard-Bibliothek von Spotify lassen sich nach der Generierung anwenden.',
          '**Lange Texte und Stories.** Lange Skripte werden an Satzgrenzen geteilt und übergeblendet, bis zu 50.000 Zeichen, und eine Mehrspur-Zeitleiste ordnet mehrere Stimmen zu einer Story an.',
          '**Diktat und Aufnahmen.** Ein globales Tastenkürzel transkribiert mit Whisper oder Whisper Turbo und fügt unter macOS in das aktive Feld ein; jede Aufnahme bleibt mit ihrem Transkript in einem Tab „Captures“ erhalten.',
          '**Agenten und API.** Eine lokale REST-API auf Port 17493 und ein MCP-Server mit vier Werkzeugen lassen Claude Code, Cursor, Windsurf oder Cline in einer Stimme sprechen, die an den jeweiligen Client gebunden ist.',
        ],
        note: 'Die README führt automatisches Einfügen unter Windows und Linux, Streaming-Transkription und weitere Speech-to-Text-Engines als Roadmap-Punkte auf, nicht als ausgelieferte Funktionen.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'Tarife',
        content: [
          '**Die lokale App ist ohne Konto kostenlos, und die Preisseite führt bezahlte Tarife Cloud und Studio auf, die beide als „coming soon“ gekennzeichnet sind.** Alle Angaben sind die US-Dollar-Preise der Preisseite, die selbst sagt, dass sie nicht endgültig sind.',
        ],
        columns: ['Tarif', 'Angaben der Preisseite'],
        rows: [
          {
            Tarif: 'Local',
            'Angaben der Preisseite': '0 $, kein Konto: Stimmklonen mit jeder Engine, Diktat und Aufnahmen, MCP- und Agenten-Anbindung, Persönlichkeiten, unbegrenzte lokale Generierungen',
          },
          {
            Tarif: 'Cloud',
            'Angaben der Preisseite': '12 $ pro Jahr zum Start: Ende-zu-Ende-verschlüsseltes Backup und Synchronisierung, 25 GB Speicher, bis zu 5 Geräte, 30 Tage Versionsverlauf',
          },
          {
            Tarif: 'Studio',
            'Angaben der Preisseite': '48 $ pro Jahr, als Platzhalter gekennzeichnet: Cloud plus 250 GB Speicher, unbegrenzt viele Geräte, ein Jahr Versionsverlauf, bevorzugter Support',
          },
        ],
        note: 'Angaben vom 26. Oktober 2026; andere Währungen oder regionale Preise wurden nicht geprüft, Steuern sind nicht enthalten.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Die Datenschutzerklärung, zuletzt aktualisiert am 6. Juli 2026, sagt, dass die Desktop-App Ihre Aufnahmen, Stimmprofile, Transkripte, Generierungen oder Einstellungen nicht an den Betreiber überträgt, und sie beschreibt keine Telemetrie oder Analyse für die App.** Die Website ergänzt, dass Modelle, Audio, Transkripte und Ausgaben des Sprachmodells den Rechner nie verlassen, und die lokale API lauscht standardmäßig auf 127.0.0.1.',
          'Das optionale Cloud-Backup wird als auf Ihrem Gerät vor dem Hochladen Ende-zu-Ende-verschlüsselt beschrieben, sodass die Server nur die Konto-E-Mail, Objektzahlen und Größen, Hashes, Synchronisierungszähler und Zeitstempel sehen. Die Erklärung behandelt außerdem eine Funktion Voice ID, die einen verschlüsselten Stimmabdruck speichert, und warnt, dass veröffentlichte Clips öffentlich sind; Zahlungen laufen über Stripe oder per Kryptowährung. Die Website erwähnt eine Option „Local or Remote“, um sich mit einem Backend auf einem anderen Rechner zu verbinden, und gleicht sie nicht mit ihrer Formulierung „entirely on your machine“ ab.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Erklärungen des Herstellers, keine Prüfergebnisse. Der Code ist unter MIT-Lizenz öffentlich, doch PromptQuorum hat ihn weder gelesen noch den Netzwerkverkehr der App untersucht, und die Erklärung behandelt keine Website-Analyse.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Stimmqualität und Geschwindigkeit.** PromptQuorum hat keine Ausgaben angehört, keine Echtzeitfaktoren gemessen und die Klongenauigkeit bei keiner Engine getestet.',
          '**Modell-Lizenzen.** Die MIT-Lizenz deckt den Code von Voicebox ab; jedes Sprachmodell hat eigene Bedingungen, und eine aktuelle Commit-Notiz beschreibt die neu hinzugefügte Engine OmniVoice mit Gewichten für nicht-kommerzielle Nutzung. Wir haben keine Modell-Lizenz geprüft.',
          '**Zahl der Engines.** Die README nennt acht Engines einschließlich Qwen VoiceDesign, die Website sieben; wir können nicht sagen, welche Angabe aktuell ist.',
          '**Release-Rhythmus.** Das neueste getaggte Release stammt vom April 2026, obwohl sich der Hauptzweig im Oktober änderte; ob die Installer die neuesten Engines enthalten, ist unklar.',
          '**Signierung der Installer.** Ob die Installer für macOS und Windows notarisiert oder per Code-Signatur signiert sind, wurde nicht geprüft.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          {
            App: '[XTTS v2](/de/power-local-llm/xtts-v2-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / CPML',
            'Wichtigster Unterschied': 'Ein einzelnes Klon-Modell, das als Bibliothek genutzt wird, ohne App, Diktat oder Agenten-Funktionen',
          },
          {
            App: '[Coqui TTS](/de/power-local-llm/coqui-tts-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / MPL 2.0',
            'Wichtigster Unterschied': 'Ein Python-Toolkit, um Text-to-Speech-Modelle aus dem Code auszuführen, statt eines Desktop-Studios',
          },
          {
            App: '[Handy](/de/power-local-llm/handy-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wichtigster Unterschied': 'Nur Diktat: keine Spracherzeugung, kein Stimmklonen, keine Sprachausgabe für Agenten',
          },
          {
            App: '[OpenWhispr](/de/power-local-llm/openwhispr-review)',
            Plattformen: 'macOS, Windows, Linux, iOS',
            'Preis / Lizenz': 'Freemium / MIT',
            'Wichtigster Unterschied': 'Diktat und Meeting-Notizen mit lokalen oder Cloud-Modellen, aber ohne Text-to-Speech',
          },
        ],
        note: 'Das sind Apps derselben Kategorie aus dem PromptQuorum-Verzeichnis; prüfen Sie aktuellen Preis, Lizenz und Plattformen auf der jeweiligen Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Mit welcher Engine sollte ich beginnen?',
            a: 'Die README beschreibt Kokoro als winziges Modell mit 82 Millionen Parametern, 50 voreingestellten Stimmen und schneller CPU-Nutzung und Chatterbox Multilingual als das sprachlich breiteste; ein Rechner nur mit CPU ist also der Fall für Kokoro. Wir haben die Ausgabequalität nicht verglichen.',
          },
          {
            q: 'Kann ein KI-Agent wirklich darüber sprechen?',
            a: 'Die README sagt, dass jeder MCP-fähige Agent ein Werkzeug „speak“ aufrufen kann, mit einer pro Client in den Einstellungen festgelegten Stimme, und ein einfacher HTTP-Endpunkt deckt Werkzeuge ab, die MCP nicht unterstützen. Ein Hinweis auf dem Bildschirm zeigt an, wann immer ein Agent spricht.',
          },
          {
            q: 'Funktioniert das Diktat unter Windows und Linux?',
            a: 'Diktat und der Tab „Captures“ sind für alle Plattformen beschrieben, doch die README führt automatisches Einfügen unter Windows und Linux als Roadmap-Punkte auf; bestätigt ist daher nur das Einfügen in das aktive Feld unter macOS.',
          },
          {
            q: 'Was macht das mitgelieferte Sprachmodell?',
            a: 'Ein lokales Qwen3-Modell entfernt Füllwörter aus Transkripten und schreibt Text in der Persönlichkeit eines Stimmprofils um, bevor er gesprochen wird; die README nennt drei Größen: 0,6B, 1,7B und 4B.',
          },
          {
            q: 'Ist Voicebox Cloud verfügbar?',
            a: 'Nein: Die Website zeigt Cloud als „coming soon“ mit einem Benachrichtigungs-Link, und die Preisseite sagt, dass Preise und Limits nicht endgültig sind. Die lokale App braucht sie nicht.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Voicebox ist ein aktiv entwickelter Weg unter MIT-Lizenz, auf dem eigenen Computer Stimmen zu klonen, Sprache zu erzeugen und zu diktieren, mit einer API und einem MCP-Server, über die Agenten sprechen können. Die Datenschutzaussagen sind für die kostenlose lokale App deutlich, aber sie sind Angaben des Herstellers, das letzte getaggte Release stammt vom April, während der Code bis in den Oktober weiter geändert wurde, Linux erfordert einen Build aus dem Quellcode, und automatisches Einfügen ist nur unter macOS bestätigt. Es passt zu Kreativen und Entwicklern, die ein kostenloses lokales Sprachwerkzeug wollen und bereit sind, mehrere große Modelle herunterzuladen; wer belegte Stimmqualität, Klarheit zur kommerziellen Nutzung jedes Modells oder eine ausgereifte Linux-Installation braucht, sollte es testen und zuerst die Lizenz jedes Modells lesen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von Voicebox](https://voicebox.sh) — Beschreibung, Engines, Sprachen und Downloads.',
          '[Preise von Voicebox](https://voicebox.sh/pricing) — Tarife Local, Cloud und Studio.',
          '[Voicebox Cloud](https://voicebox.sh/cloud) — Status und Beschreibung der Verschlüsselung.',
          '[Datenschutzerklärung von Voicebox](https://voicebox.sh/privacy) — Datenverarbeitung, zuletzt aktualisiert am 6. Juli 2026.',
          '[Dokumentation von Voicebox](https://docs.voicebox.sh) — Plattformen und Docker-Weg.',
          '[Voicebox auf GitHub](https://github.com/jamiepine/voicebox) — README, MIT-Lizenz, Details zu API und MCP.',
          '[Voicebox-Releases](https://github.com/jamiepine/voicebox/releases) — Version 0.5.0, Installer-Dateien und Release-Notizen.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[XTTS-v2-Rezension](/de/power-local-llm/xtts-v2-review) — ein Stimmklon-Modell, das lokal als Bibliothek läuft.',
          '[Handy-Rezension](/de/power-local-llm/handy-review) — eine kostenlose Push-to-Talk-Diktier-App unter MIT-Lizenz.',
          '[OpenWhispr-Rezension](/de/power-local-llm/openwhispr-review) — Diktat und Meeting-Notizen mit lokalen oder Cloud-Sprachmodellen.',
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
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/voicebox-review-hero-es.webp',
    title: 'Reseña de Voicebox: estudio de voz local de código abierto',
    seoTitle: 'Reseña de Voicebox: clonación de voz y dictado locales',
    intro: 'Voicebox es una app de escritorio de código abierto que clona voces, convierte texto en voz con varios motores locales, dicta en cualquier app con Whisper y deja que los agentes de IA hablen a través de un servidor MCP. Todo lo que describe se ejecuta en tu propio ordenador, y la descarga es gratuita. Esta reseña parte del sitio web, su política de privacidad y su página de precios, la documentación y el repositorio de GitHub, consultados el 26 de octubre de 2026; PromptQuorum no ha probado la app en persona.',
    metaDescription: 'Reseña de Voicebox: estudio de voz local con licencia MIT para Mac y Windows, con clonación de voz, texto a voz, dictado Whisper y MCP. Sin probar.',
    twitterDescription: 'Clonación de voz, texto a voz y dictado en una sola app de escritorio gratuita, con licencia MIT, que se ejecuta en local. Qué confirman las fuentes sobre motores, privacidad e instaladores, y qué no.',
    audience: 'Creadores, desarrolladores y usuarios de accesibilidad que quieren clonación de voz, texto a voz y dictado en local y necesitan saber qué confirman las fuentes, qué descarga la app y qué todavía no está disponible.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Voicebox',
    targetKeywords: [
      'reseña voicebox',
      'voicebox clonación de voz',
      'alternativa a elevenlabs código abierto',
      'app de clonación de voz local',
      'app de escritorio texto a voz código abierto',
      'alternativa a wispr flow código abierto',
      'voicebox.sh',
    ],
    current_models_mentioned: ['Qwen3-TTS', 'Chatterbox', 'Kokoro', 'Whisper'],
    current_hardware_mentioned: ['Apple silicon', 'NVIDIA GPU'],
    leadAnswerBlock: '**Voicebox (versión 0.5.0) es una app de escritorio con licencia MIT que combina clonación de voz, texto a voz y dictado con Whisper, y las fuentes dicen que guarda tus grabaciones, perfiles de voz y transcripciones en tu propio ordenador.** También ejecuta una API local y un servidor MCP para que los agentes de IA hablen con una voz clonada, y cada afirmación de aquí procede del sitio web del desarrollador, su documentación y su repositorio de GitHub.',
    quickAnswerTop: {
      es: {
        question: '¿Voicebox guarda mis datos de voz en mi ordenador?',
        answer: 'Sí, por defecto: la política de privacidad dice que la app de escritorio no transmite al responsable tus grabaciones, perfiles de voz, transcripciones, generaciones ni ajustes. Una copia de seguridad cifrada opcional en Cloud está anunciada, pero todavía no está disponible.',
        bullets: [
          'Clona una voz a partir de una breve muestra de referencia y genera voz con una selección de motores locales de texto a voz.',
          'Un atajo global dicta en el campo de texto con el foco usando Whisper, con una limpieza opcional a cargo de un modelo de lenguaje local.',
          'Un editor de historias organiza varias voces en una línea de tiempo multipista.',
          'Una API REST y un servidor MCP permiten que agentes como Claude Code y Cursor hablen con una voz que tú elijas.',
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
        label: '¿Qué es Voicebox?',
        anchor: 'what-is-voicebox',
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
        label: 'Funciones confirmadas por las fuentes',
        anchor: 'key-features',
      },
      {
        label: 'Planes',
        anchor: 'plans',
      },
      {
        label: 'Flujo de datos y privacidad',
        anchor: 'privacy',
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
            text: 'Voicebox es una app de escritorio de código abierto que clona voces, genera voz con motores locales, dicta con Whisper y da voz a los agentes de IA a través de un servidor MCP.',
          },
          {
            type: 'plain-terms',
            text: 'Piénsalo como un estudio de grabación y un teclado de voz en un solo programa, con todo ejecutándose en tu propio equipo en lugar de en un servicio de suscripción.',
          },
        ],
        items: [
          'Mantenimiento: la rama principal cambió por última vez el 7 de octubre de 2026, así que no aplica ningún aviso de proyecto abandonado; la última versión etiquetada, la 0.5.0, es del 25 de abril de 2026.',
          'Coste: la app local es gratuita; una copia de seguridad Cloud de pago opcional está anunciada, pero todavía no se ha lanzado.',
          'Motores: el README lista ocho motores de texto a voz y Whisper para la transcripción.',
          'Plataformas: instaladores para macOS y Windows; Linux requiere compilar desde el código fuente.',
          'Responsable: Spacedrive Technology Inc.; el código es abierto con licencia MIT.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en [voicebox.sh](https://voicebox.sh), su política de privacidad, la documentación y el repositorio de GitHub, consultados el 26 de octubre de 2026. PromptQuorum no ha instalado ni cronometrado la app, así que no se evalúan la calidad de la voz ni la velocidad.',
          },
        ],
      },
      overview: {
        id: 'what-is-voicebox',
        title: '¿Qué es Voicebox?',
        content: [
          '**Voicebox es un estudio de voz local-first que cubre las dos direcciones de la voz: lee texto en voz alta con voces clonadas o predefinidas, y escucha, transcribe y pega lo que dices.** El README la llama una alternativa gratuita y de código abierto a ElevenLabs y WisprFlow en una sola app, y el sitio web la describe como una app que se ejecuta por completo en tu equipo.',
          '**La app está hecha con Tauri (Rust) alrededor de un backend FastAPI en Python, y el sitio web nombra a Spacedrive Technology Inc. como su responsable.** La versión 0.5.0, llamada «the Capture release» en sus notas, añadió el dictado, las personalidades de voz y el servidor MCP. La versión «v0.2.0» que aparece en el sitio web es una etiqueta dentro de su captura de demostración, no el número de versión.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**Voicebox se descarga para macOS y Windows; Linux no tiene binario precompilado y hay que compilarlo desde el código fuente, y el README muestra además una vía con Docker.**',
        ],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
          {
            'Opción': 'macOS',
            'Cómo conseguirlo': '.dmg para Apple silicon e Intel: [voicebox.sh/download](https://voicebox.sh/download)',
          },
          {
            'Opción': 'Windows',
            'Cómo conseguirlo': 'instalador .msi o .exe (x64): [voicebox.sh/download](https://voicebox.sh/download)',
          },
          {
            'Opción': 'Linux',
            'Cómo conseguirlo': 'Compilar desde el código fuente: [voicebox.sh/linux-install](https://voicebox.sh/linux-install)',
          },
          {
            'Opción': 'Docker',
            'Cómo conseguirlo': '`docker compose up` desde el repositorio (README)',
          },
          {
            'Opción': 'Sitio web',
            'Cómo conseguirlo': '[voicebox.sh](https://voicebox.sh)',
          },
          {
            'Opción': 'Política de privacidad',
            'Cómo conseguirlo': '[voicebox.sh/privacy](https://voicebox.sh/privacy)',
          },
          {
            'Opción': 'Código fuente',
            'Cómo conseguirlo': '[github.com/jamiepine/voicebox](https://github.com/jamiepine/voicebox), licencia MIT',
          },
        ],
        note: 'Versión analizada: 0.5.0, publicada el 25 de abril de 2026 según la [página de Releases de GitHub](https://github.com/jamiepine/voicebox/releases/latest), que lista los instaladores de macOS y Windows; el cambio más reciente en la rama principal fue el 7 de octubre de 2026. Los planes se tratan en Planes.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**Las fuentes no indican una RAM, un disco ni una versión de sistema operativo mínimos; lo exigente son los modelos de voz y de lenguaje, que se descargan por separado.**',
        ],
        columns: ['Elemento', 'Qué dicen las fuentes'],
        rows: [
          {
            Elemento: 'Sistema operativo',
            'Qué dicen las fuentes': 'Instaladores para macOS (Apple silicon e Intel) y Windows x64; Linux desde el código fuente; no se da ninguna versión mínima del sistema operativo',
          },
          {
            Elemento: 'Aceleración',
            'Qué dicen las fuentes': 'MLX en Apple silicon, CUDA en GPU NVIDIA, ROCm en AMD bajo Linux, DirectML en Windows, Intel Arc, y un modo de reserva en CPU que funciona en todas partes, pero más lento',
          },
          {
            Elemento: 'Motores más ligeros',
            'Qué dicen las fuentes': 'LuxTTS necesita unos 1 GB de VRAM y Kokoro es un modelo de 82 millones de parámetros pensado para un uso rápido en CPU; el README no da ninguna cifra para los motores más grandes',
          },
          {
            Elemento: 'Modelos',
            'Qué dicen las fuentes': 'Los motores, los tamaños de Whisper y el modelo de lenguaje Qwen3 incluido (0.6B, 1.7B o 4B) se descargan dentro de la app; las fuentes no dan un tamaño total de descarga',
          },
          {
            Elemento: 'Permisos',
            'Qué dicen las fuentes': 'Accesibilidad y Monitorización de entrada en macOS para los atajos y el pegado automático; sin Accesibilidad, el dictado sigue guardando las transcripciones y solo se desactiva el paso de pegar',
          },
          {
            Elemento: 'Internet',
            'Qué dicen las fuentes': 'Necesario para descargar modelos; el sitio web dice que después la generación y el refinado se ejecutan en el equipo',
          },
        ],
        note: 'Los backends de aceleración son los que lista el README; PromptQuorum no comprobó qué combinaciones incluyen los instaladores.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Todo lo que sigue procede del sitio web, la documentación o el README; nada se ha probado de forma independiente.**',
        ],
        items: [
          '**Clonación de voz y voces predefinidas.** Clonación zero-shot a partir de una breve muestra de referencia, además de voces predefinidas con Kokoro y Qwen CustomVoice; el README cuenta ocho motores y 23 idiomas, con la cobertura más amplia en Chatterbox Multilingual.',
          '**Voz expresiva y efectos.** Chatterbox Turbo lee etiquetas como [laugh] y [sigh], y después de la generación se pueden aplicar ocho efectos de posprocesado de la biblioteca pedalboard de Spotify.',
          '**Textos largos e historias.** Los guiones largos se dividen en los límites de las frases y se enlazan con fundidos cruzados, hasta 50 000 caracteres, y una línea de tiempo multipista organiza varias voces en una historia.',
          '**Dictado y capturas.** Un atajo global transcribe con Whisper, o con Whisper Turbo, y pega en el campo con el foco en macOS; cada grabación se conserva en una pestaña Captures con su transcripción.',
          '**Agentes y API.** Una API REST local en el puerto 17493 y un servidor MCP con cuatro herramientas permiten que Claude Code, Cursor, Windsurf o Cline hablen con una voz asignada a cada cliente.',
        ],
        note: 'El README lista el pegado automático en Windows y Linux, la transcripción en streaming y más motores de voz a texto como elementos de la hoja de ruta, no como funciones ya incluidas.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'Planes',
        content: [
          '**La app local es gratuita y sin cuenta, y la página de precios lista planes de pago Cloud y Studio que figuran ambos como «coming soon».** Todas las cifras son precios en dólares estadounidenses de la página de precios, que dice que no son definitivos.',
        ],
        columns: ['Plan', 'Qué indica la página de precios'],
        rows: [
          {
            Plan: 'Local',
            'Qué indica la página de precios': '0 $, sin cuenta: clonación de voz con todos los motores, dictado y capturas, integración con MCP y agentes, personalidades, generaciones locales ilimitadas',
          },
          {
            Plan: 'Cloud',
            'Qué indica la página de precios': '12 $ al año en el lanzamiento: copia de seguridad y sincronización con cifrado de extremo a extremo, 25 GB de almacenamiento, hasta 5 dispositivos, historial de versiones de 30 días',
          },
          {
            Plan: 'Studio',
            'Qué indica la página de precios': '48 $ al año, marcado como provisional: Cloud más 250 GB de almacenamiento, dispositivos ilimitados, historial de versiones de un año, soporte prioritario',
          },
        ],
        note: 'Cifras vistas el 26 de octubre de 2026; no se comprobó ninguna otra moneda ni precio regional, y los impuestos no están incluidos.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**La política de privacidad, actualizada por última vez el 6 de julio de 2026, dice que la app de escritorio no transmite al responsable tus grabaciones, perfiles de voz, transcripciones, generaciones ni ajustes, y no describe ninguna telemetría ni analítica de la app.** El sitio web añade que los modelos, el audio, las transcripciones y la salida del modelo de lenguaje nunca salen del equipo, y que la API local escucha por defecto en 127.0.0.1.',
          'La copia de seguridad Cloud opcional se describe como cifrada de extremo a extremo en tu dispositivo antes de subirla, de modo que los servidores solo ven el correo de la cuenta, el número y el tamaño de los objetos, los hashes, los contadores de sincronización y las marcas de tiempo. La política también cubre una función Voice ID que guarda una huella de voz cifrada y advierte de que los clips publicados son públicos; los pagos pasan por Stripe o se hacen con criptomonedas. El sitio web menciona una opción «Local or Remote» para conectarse a un backend en otro equipo, que no concilia con su redacción «entirely on your machine».',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del desarrollador, no resultados de una auditoría. El código es público con licencia MIT, pero PromptQuorum no lo ha leído ni ha inspeccionado el tráfico de red de la app, y la política no trata la analítica del sitio web.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad de la voz y velocidad.** PromptQuorum no escuchó ninguna salida, no midió factores de tiempo real ni probó la precisión de la clonación en ningún motor.',
          '**Licencias de los modelos.** La licencia MIT cubre el código de Voicebox; cada modelo de voz tiene sus propios términos, y la nota de un commit reciente describe el motor OmniVoice, añadido hace poco, como con pesos de uso no comercial. No comprobamos ninguna licencia de modelo.',
          '**Número de motores.** El README lista ocho motores, incluido Qwen VoiceDesign, mientras que el sitio web lista siete; no podemos saber cuál es el actual.',
          '**Ritmo de lanzamientos.** La última versión etiquetada es de abril de 2026, aunque la rama principal cambió en octubre, así que no está claro si los instaladores incluyen los motores más recientes.',
          '**Firma de los instaladores.** No se comprobó si los instaladores de macOS y Windows están notarizados o firmados con certificado de desarrollador.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            App: '[XTTS v2](/es/power-local-llm/xtts-v2-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / CPML',
            'Diferencia clave': 'Un único modelo de clonación que se usa como biblioteca, sin app, dictado ni funciones para agentes',
          },
          {
            App: '[Coqui TTS](/es/power-local-llm/coqui-tts-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / MPL 2.0',
            'Diferencia clave': 'Un kit de herramientas en Python para ejecutar modelos de texto a voz desde código, no un estudio de escritorio',
          },
          {
            App: '[Handy](/es/power-local-llm/handy-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Solo dictado: sin generación de voz, clonación de voz ni salida de voz para agentes',
          },
          {
            App: '[OpenWhispr](/es/power-local-llm/openwhispr-review)',
            Plataformas: 'macOS, Windows, Linux, iOS',
            'Precio / licencia': 'Freemium / MIT',
            'Diferencia clave': 'Dictado y notas de reuniones con modelos locales o en la nube, y sin texto a voz',
          },
        ],
        note: 'Son apps de la misma categoría del directorio de PromptQuorum; confirma el precio, la licencia y las plataformas actuales en la página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Con qué motor debería empezar?',
            a: 'El README describe Kokoro como un modelo diminuto de 82 millones de parámetros con 50 voces predefinidas y uso rápido en CPU, y Chatterbox Multilingual como el más amplio en idiomas, así que un equipo solo con CPU es el caso de Kokoro. No comparamos la calidad de la salida.',
          },
          {
            q: '¿Un agente de IA puede hablar de verdad a través de Voicebox?',
            a: 'El README dice que cualquier agente compatible con MCP puede llamar a una herramienta speak, con una voz asignada a cada cliente en Ajustes, y un endpoint HTTP sencillo cubre las herramientas que no admiten MCP. Un indicador en pantalla se muestra siempre que un agente habla.',
          },
          {
            q: '¿El dictado funciona en Windows y Linux?',
            a: 'El dictado y la pestaña Captures se describen para todas las plataformas, pero el README lista el pegado automático en Windows y Linux como elementos de la hoja de ruta, así que solo está confirmado el pegado en el campo con el foco en macOS.',
          },
          {
            q: '¿Qué hace el modelo de lenguaje incluido?',
            a: 'Un modelo Qwen3 local limpia las muletillas de las transcripciones y reescribe el texto con la personalidad de un perfil de voz antes de pronunciarlo; el README nombra tres tamaños: 0.6B, 1.7B y 4B.',
          },
          {
            q: '¿Voicebox Cloud está disponible?',
            a: 'No: el sitio web muestra Cloud como «coming soon» con un enlace para recibir avisos, y la página de precios dice que sus precios y límites no son definitivos. La app local no lo necesita.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Voicebox es una forma activa y con licencia MIT de clonar voces, generar voz y dictar en tu propio ordenador, con una API y un servidor MCP que permiten que los agentes hablen. Las declaraciones de privacidad son sólidas para la app local gratuita, pero son afirmaciones del desarrollador, la última versión etiquetada es de abril mientras el código siguió cambiando hasta octubre, Linux requiere una compilación desde el código fuente y el pegado automático solo está confirmado en macOS. Encaja con creadores y desarrolladores que quieren una sola herramienta de voz local y gratuita y están dispuestos a descargar varios modelos grandes; quien necesite calidad de voz demostrada, claridad sobre el uso comercial de cada modelo o una instalación pulida en Linux debería probarla y leer antes la licencia de cada modelo.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Voicebox](https://voicebox.sh) — descripción, motores, idiomas y descargas.',
          '[Precios de Voicebox](https://voicebox.sh/pricing) — planes Local, Cloud y Studio.',
          '[Voicebox Cloud](https://voicebox.sh/cloud) — estado y descripción del cifrado.',
          '[Política de privacidad de Voicebox](https://voicebox.sh/privacy) — tratamiento de datos, actualizada por última vez el 6 de julio de 2026.',
          '[Documentación de Voicebox](https://docs.voicebox.sh) — plataformas y vía con Docker.',
          '[Voicebox en GitHub](https://github.com/jamiepine/voicebox) — README, licencia MIT, detalles de la API y de MCP.',
          '[Releases de Voicebox](https://github.com/jamiepine/voicebox/releases) — versión 0.5.0, archivos de instalación y notas de la versión.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de XTTS v2](/es/power-local-llm/xtts-v2-review) — un modelo de clonación de voz que se ejecuta en local como biblioteca.',
          '[Reseña de Handy](/es/power-local-llm/handy-review) — una app de dictado pulsar para hablar, gratuita y con licencia MIT.',
          '[Reseña de OpenWhispr](/es/power-local-llm/openwhispr-review) — dictado y notas de reuniones con modelos de voz locales o en la nube.',
          '[Reseña de Whisper.cpp](/es/power-local-llm/whisper-cpp-review) — el port en C++ de Whisper en el que se basan muchas herramientas locales de dictado.',
          '[Herramientas de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — la comparativa de categoría a la que pertenece esta reseña.',
          '[Directorio de software de LLM locales](/es/directory) — el catálogo completo de herramientas de IA local.',
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
    heroImage: '/images/voicebox-review-hero-fr.webp',
    title: 'Test de Voicebox : studio vocal local open source',
    seoTitle: 'Test de Voicebox : clonage vocal et dictée locaux gratuits',
    intro: 'Voicebox est une application de bureau open source qui clone des voix, transforme du texte en parole avec plusieurs moteurs locaux, dicte dans n’importe quelle appli avec Whisper et permet à des agents IA de parler via un serveur MCP. Tout ce qu’elle décrit s’exécute sur votre propre ordinateur, et le téléchargement est gratuit. Ce test s’appuie sur le site web, sa politique de confidentialité et sa page des tarifs, la documentation et le dépôt GitHub, consultés le 26 octobre 2026 ; PromptQuorum n’a pas testé l’application lui-même.',
    metaDescription: 'Test de Voicebox : studio vocal local sous licence MIT pour Mac et Windows, avec clonage de voix, synthèse vocale, dictée Whisper et serveur MCP. Non testé',
    twitterDescription: 'Clonage de voix, synthèse vocale et dictée dans une seule appli de bureau gratuite, sous licence MIT, qui s’exécute en local. Ce que les sources confirment sur les moteurs, la confidentialité et les installateurs, et ce qu’elles ne confirment pas.',
    audience: 'Créateurs, développeurs et utilisateurs d’outils d’accessibilité qui veulent du clonage de voix, de la synthèse vocale et de la dictée en local et doivent savoir ce que confirment les sources, ce que l’appli télécharge et ce qui n’est pas encore disponible.',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test Voicebox',
    targetKeywords: [
      'test voicebox',
      'voicebox clonage de voix',
      'alternative open source à elevenlabs',
      'application de clonage de voix locale',
      'application de synthèse vocale open source pour ordinateur',
      'alternative open source à wispr flow',
      'voicebox.sh',
    ],
    current_models_mentioned: ['Qwen3-TTS', 'Chatterbox', 'Kokoro', 'Whisper'],
    current_hardware_mentioned: ['Apple silicon', 'NVIDIA GPU'],
    leadAnswerBlock: '**Voicebox (version 0.5.0) est une application de bureau sous licence MIT qui réunit clonage de voix, synthèse vocale et dictée Whisper, et, selon les sources, elle garde vos enregistrements, profils de voix et transcriptions sur votre propre ordinateur.** Elle exécute aussi une API locale et un serveur MCP pour que des agents IA parlent avec une voix clonée, et chaque affirmation ici provient du site web de l’éditeur, de sa documentation et du dépôt GitHub.',
    quickAnswerTop: {
      fr: {
        question: 'Voicebox garde-t-il mes données vocales sur mon ordinateur ?',
        answer: 'Oui par défaut : la politique de confidentialité indique que l’appli de bureau ne transmet à l’exploitant ni vos enregistrements, ni vos profils de voix, ni vos transcriptions, générations ou réglages. Une sauvegarde Cloud chiffrée facultative est annoncée mais pas encore disponible.',
        bullets: [
          'Clone une voix à partir d’un court échantillon de référence et génère de la parole avec un choix de moteurs de synthèse vocale locaux.',
          'Un raccourci global dicte dans le champ de texte actif avec Whisper, avec un nettoyage facultatif par un modèle de langage local.',
          'Un éditeur d’histoires organise plusieurs voix sur une chronologie multipiste.',
          'Une API REST et un serveur MCP permettent à des agents comme Claude Code et Cursor de parler avec une voix que vous avez choisie.',
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
        label: 'Qu’est-ce que Voicebox ?',
        anchor: 'what-is-voicebox',
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
        label: 'Fonctions confirmées par les sources',
        anchor: 'key-features',
      },
      {
        label: 'Offres',
        anchor: 'plans',
      },
      {
        label: 'Flux de données et confidentialité',
        anchor: 'privacy',
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
            text: 'Voicebox est une application de bureau open source qui clone des voix, génère de la parole avec des moteurs locaux, dicte avec Whisper et donne une voix aux agents IA grâce à un serveur MCP.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-la comme un studio d’enregistrement et un clavier vocal réunis dans un seul programme, qui s’exécute sur votre propre machine plutôt que via un service par abonnement.',
          },
        ],
        items: [
          'Maintenance : la branche principale a changé pour la dernière fois le 7 octobre 2026, donc aucun avertissement de projet abandonné ne s’applique ; la dernière version étiquetée, la 0.5.0, date du 25 avril 2026.',
          'Coût : l’appli locale est gratuite ; une sauvegarde Cloud payante facultative est annoncée mais pas encore publiée.',
          'Moteurs : le README liste huit moteurs de synthèse vocale et Whisper pour la transcription.',
          'Plateformes : installateurs pour macOS et Windows ; Linux exige une compilation depuis les sources.',
          'Éditeur : Spacedrive Technology Inc. ; le code est ouvert sous licence MIT.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s’appuie sur [voicebox.sh](https://voicebox.sh), sa politique de confidentialité, la documentation et le dépôt GitHub, consultés le 26 octobre 2026. PromptQuorum n’a ni installé ni chronométré l’application ; la qualité de la voix et la vitesse ne sont donc pas évaluées.',
          },
        ],
      },
      overview: {
        id: 'what-is-voicebox',
        title: 'Qu’est-ce que Voicebox ?',
        content: [
          '**Voicebox est un studio vocal local qui couvre les deux sens de la voix : il lit du texte à voix haute avec des voix clonées ou prédéfinies, et il écoute, transcrit et colle ce que vous dites.** Le README le présente comme une alternative gratuite et open source à ElevenLabs et à WisprFlow réunies dans une seule appli, et le site web indique qu’il s’exécute entièrement sur votre machine.',
          '**L’appli est construite avec Tauri (Rust) autour d’un backend Python FastAPI, et le site web désigne Spacedrive Technology Inc. comme son exploitant.** La version 0.5.0, appelée « the Capture release » dans ses notes, a ajouté la dictée, les personnalités vocales et le serveur MCP. La version « v0.2.0 » affichée sur le site web est une mention figurant dans sa capture d’écran de démonstration, pas le numéro de la version.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Voicebox se télécharge pour macOS et Windows ; Linux n’a pas de binaire précompilé et exige une compilation depuis les sources, et le README montre aussi une voie Docker.**',
        ],
        columns: ['Option', 'Comment l’obtenir'],
        rows: [
          {
            Option: 'macOS',
            'Comment l’obtenir': '.dmg pour Apple silicon et Intel : [voicebox.sh/download](https://voicebox.sh/download)',
          },
          {
            Option: 'Windows',
            'Comment l’obtenir': 'installateur .msi ou .exe (x64) : [voicebox.sh/download](https://voicebox.sh/download)',
          },
          {
            Option: 'Linux',
            'Comment l’obtenir': 'Compilation depuis les sources : [voicebox.sh/linux-install](https://voicebox.sh/linux-install)',
          },
          {
            Option: 'Docker',
            'Comment l’obtenir': '`docker compose up` depuis le dépôt (README)',
          },
          {
            Option: 'Site web',
            'Comment l’obtenir': '[voicebox.sh](https://voicebox.sh)',
          },
          {
            Option: 'Politique de confidentialité',
            'Comment l’obtenir': '[voicebox.sh/privacy](https://voicebox.sh/privacy)',
          },
          {
            Option: 'Code source',
            'Comment l’obtenir': '[github.com/jamiepine/voicebox](https://github.com/jamiepine/voicebox), licence MIT',
          },
        ],
        note: 'Version testée : 0.5.0, publiée le 25 avril 2026 selon la [page Releases de GitHub](https://github.com/jamiepine/voicebox/releases/latest), qui liste les installateurs macOS et Windows ; la modification la plus récente de la branche principale date du 7 octobre 2026. Les offres sont traitées dans Offres.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**Les sources n’indiquent ni RAM minimale, ni espace disque, ni version minimale du système d’exploitation ; la partie exigeante est celle des modèles de parole et de langage, téléchargés séparément.**',
        ],
        columns: ['Élément', 'Ce que disent les sources'],
        rows: [
          {
            'Élément': 'Système d’exploitation',
            'Ce que disent les sources': 'Installateurs pour macOS (Apple silicon et Intel) et Windows x64 ; Linux depuis les sources ; aucune version minimale du système n’est donnée',
          },
          {
            'Élément': 'Accélération',
            'Ce que disent les sources': 'MLX sur Apple silicon, CUDA sur les GPU NVIDIA, ROCm sur AMD sous Linux, DirectML sous Windows, Intel Arc, et un repli sur le CPU qui fonctionne partout mais plus lentement',
          },
          {
            'Élément': 'Moteurs les plus légers',
            'Ce que disent les sources': 'LuxTTS demande environ 1 Go de VRAM et Kokoro est un modèle de 82 millions de paramètres conçu pour un usage rapide sur CPU ; le README ne donne aucun chiffre pour les moteurs plus gros',
          },
          {
            'Élément': 'Modèles',
            'Ce que disent les sources': 'Les moteurs, les tailles de Whisper et le modèle de langage Qwen3 fourni (0.6B, 1.7B ou 4B) se téléchargent dans l’appli ; les sources ne donnent pas de taille totale de téléchargement',
          },
          {
            'Élément': 'Autorisations',
            'Ce que disent les sources': 'Accessibilité et Surveillance de l’entrée sous macOS pour les raccourcis et le collage automatique ; sans Accessibilité, la dictée enregistre toujours les transcriptions et seule l’étape de collage est désactivée',
          },
          {
            'Élément': 'Internet',
            'Ce que disent les sources': 'Nécessaire pour télécharger les modèles ; le site web indique que la génération et l’affinage s’exécutent ensuite sur la machine',
          },
        ],
        note: 'Les moteurs d’accélération sont ceux listés dans le README ; PromptQuorum n’a pas vérifié quelles combinaisons sont livrées dans les installateurs.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Tout ce qui suit provient du site web, de la documentation ou du README ; rien n’a été testé de façon indépendante.**',
        ],
        items: [
          '**Clonage de voix et voix prédéfinies.** Clonage « zero-shot » à partir d’un court échantillon de référence, plus des voix prédéfinies via Kokoro et Qwen CustomVoice ; le README compte huit moteurs et 23 langues, la couverture la plus large revenant à Chatterbox Multilingual.',
          '**Parole expressive et effets.** Chatterbox Turbo lit des balises comme [laugh] et [sigh], et huit effets de post-traitement de la bibliothèque pedalboard de Spotify peuvent être appliqués après la génération.',
          '**Longs textes et histoires.** Les longs scripts sont découpés aux limites des phrases puis enchaînés en fondu, jusqu’à 50 000 caractères, et une chronologie multipiste organise plusieurs voix en une histoire.',
          '**Dictée et captures.** Un raccourci global transcrit avec Whisper, ou Whisper Turbo, et colle dans le champ actif sous macOS ; chaque enregistrement est conservé dans un onglet Captures avec sa transcription.',
          '**Agents et API.** Une API REST locale sur le port 17493 et un serveur MCP à quatre outils permettent à Claude Code, Cursor, Windsurf ou Cline de parler avec une voix associée à chaque client.',
        ],
        note: 'Le README classe le collage automatique sous Windows et Linux, la transcription en streaming et d’autres moteurs de reconnaissance vocale parmi les éléments de la feuille de route, pas parmi les fonctions livrées.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'Offres',
        content: [
          '**L’appli locale est gratuite et sans compte, et la page des tarifs liste des offres payantes Cloud et Studio, toutes deux marquées « coming soon ».** Tous les chiffres sont les prix en dollars américains de la page des tarifs, qui précise qu’ils ne sont pas définitifs.',
        ],
        columns: ['Offre', 'Ce qu’indique la page des tarifs'],
        rows: [
          {
            Offre: 'Local',
            'Ce qu’indique la page des tarifs': '0 $, sans compte : clonage de voix avec tous les moteurs, dictée et captures, intégration MCP et agents, personnalités, générations locales illimitées',
          },
          {
            Offre: 'Cloud',
            'Ce qu’indique la page des tarifs': '12 $ par an au lancement : sauvegarde et synchronisation chiffrées de bout en bout, 25 Go de stockage, jusqu’à 5 appareils, historique des versions sur 30 jours',
          },
          {
            Offre: 'Studio',
            'Ce qu’indique la page des tarifs': '48 $ par an, indiqué comme provisoire : Cloud plus 250 Go de stockage, appareils illimités, historique des versions sur un an, support prioritaire',
          },
        ],
        note: 'Chiffres affichés le 26 octobre 2026 ; aucune autre devise ni aucun prix régional n’a été vérifié, et les taxes ne sont pas incluses.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**La politique de confidentialité, mise à jour le 6 juillet 2026, indique que l’appli de bureau ne transmet à l’exploitant ni vos enregistrements, ni vos profils de voix, ni vos transcriptions, générations ou réglages, et elle ne décrit aucune télémétrie ni analyse pour l’appli.** Le site web ajoute que les modèles, l’audio, les transcriptions et les sorties du modèle de langage ne quittent jamais la machine, et que l’API locale écoute par défaut sur 127.0.0.1.',
          'La sauvegarde Cloud facultative est décrite comme chiffrée de bout en bout sur votre appareil avant l’envoi, de sorte que les serveurs ne voient que l’adresse e-mail du compte, le nombre et la taille des objets, des empreintes, des compteurs de synchronisation et des horodatages. La politique couvre aussi une fonction Voice ID qui stocke une empreinte vocale chiffrée et avertit que les extraits publiés sont publics ; les paiements passent par Stripe ou par cryptomonnaie. Le site web mentionne une option « Local or Remote » pour se connecter à un backend sur une autre machine, qu’il ne concilie pas avec sa formule « entirely on your machine ».',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations de l’éditeur, pas des résultats d’audit. Le code est public sous licence MIT, mais PromptQuorum ne l’a ni lu ni inspecté le trafic réseau de l’appli, et la politique ne traite pas de l’analyse d’audience du site web.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité de la voix et vitesse.** PromptQuorum n’a pas écouté les sorties, mesuré de facteurs temps réel ni testé la fidélité du clonage sur aucun moteur.',
          '**Licences des modèles.** La licence MIT couvre le code de Voicebox ; chaque modèle de parole a ses propres conditions, et une note de commit récente décrit le moteur OmniVoice, tout juste ajouté, comme ayant des poids à usage non commercial. Nous n’avons vérifié la licence d’aucun modèle.',
          '**Nombre de moteurs.** Le README liste huit moteurs, dont Qwen VoiceDesign, alors que le site web en liste sept ; nous ne pouvons pas dire lequel est à jour.',
          '**Rythme des versions.** La dernière version étiquetée date d’avril 2026 alors que la branche principale a changé en octobre ; on ne sait donc pas si les installateurs incluent les moteurs les plus récents.',
          '**Signature des installateurs.** Nous n’avons pas vérifié si les installateurs macOS et Windows sont notarisés ou signés avec un certificat de développeur.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            Application: '[XTTS v2](/fr/power-local-llm/xtts-v2-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuit / CPML',
            'Différence clé': 'Un seul modèle de clonage utilisé comme bibliothèque, sans appli, dictée ni fonctions d’agent',
          },
          {
            Application: '[Coqui TTS](/fr/power-local-llm/coqui-tts-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuit / MPL 2.0',
            'Différence clé': 'Une boîte à outils Python pour exécuter des modèles de synthèse vocale depuis le code plutôt qu’un studio de bureau',
          },
          {
            Application: '[Handy](/fr/power-local-llm/handy-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Dictée uniquement : pas de génération de parole, de clonage de voix ni de sortie vocale pour agents',
          },
          {
            Application: '[OpenWhispr](/fr/power-local-llm/openwhispr-review)',
            Plateformes: 'macOS, Windows, Linux, iOS',
            'Prix / licence': 'Freemium / MIT',
            'Différence clé': 'Dictée et notes de réunion avec des modèles locaux ou cloud, et pas de synthèse vocale',
          },
        ],
        note: 'Ce sont des applications de la même catégorie du répertoire PromptQuorum ; vérifiez le prix, la licence et les plateformes actuels sur la page de chacune.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Par quel moteur commencer ?',
            a: 'Le README décrit Kokoro comme un minuscule modèle de 82 millions de paramètres avec 50 voix prédéfinies et un usage rapide sur CPU, et Chatterbox Multilingual comme le plus étendu pour les langues ; une machine sans GPU relève donc de Kokoro. Nous n’avons pas comparé la qualité des sorties.',
          },
          {
            q: 'Un agent IA peut-il vraiment parler avec Voicebox ?',
            a: 'Le README indique que tout agent compatible MCP peut appeler un outil « speak », avec une association de voix par client définie dans les réglages, et un point d’accès HTTP simple couvre les outils qui ne prennent pas en charge MCP. Une pastille à l’écran s’affiche chaque fois qu’un agent parle.',
          },
          {
            q: 'La dictée fonctionne-t-elle sous Windows et Linux ?',
            a: 'La dictée et l’onglet Captures sont décrits pour toutes les plateformes, mais le README classe le collage automatique sous Windows et Linux parmi les éléments de la feuille de route ; seul le collage dans le champ actif sous macOS est donc confirmé.',
          },
          {
            q: 'À quoi sert le modèle de langage fourni ?',
            a: 'Un modèle Qwen3 local nettoie les mots de remplissage dans les transcriptions et réécrit le texte selon la personnalité d’un profil de voix avant qu’il soit prononcé ; le README cite trois tailles, 0.6B, 1.7B et 4B.',
          },
          {
            q: 'Voicebox Cloud est-il disponible ?',
            a: 'Non : le site web présente Cloud comme « coming soon » avec un lien de notification, et la page des tarifs précise que ses prix et limites ne sont pas définitifs. L’appli locale n’en a pas besoin.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Voicebox est un moyen activement développé et sous licence MIT de cloner des voix, de générer de la parole et de dicter sur votre propre ordinateur, avec une API et un serveur MCP qui permettent aux agents de parler. Les déclarations de confidentialité sont solides pour l’appli locale gratuite, mais ce sont des affirmations de l’éditeur, la dernière version étiquetée date d’avril alors que le code a continué d’évoluer jusqu’en octobre, Linux exige une compilation depuis les sources, et le collage automatique n’est confirmé que sous macOS. Elle convient aux créateurs et aux développeurs qui veulent un seul outil vocal local gratuit et acceptent de télécharger plusieurs gros modèles ; qui a besoin d’une qualité de voix prouvée, d’une clarté d’usage commercial pour chaque modèle ou d’une installation Linux soignée devrait la tester et lire d’abord la licence de chaque modèle.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site web de Voicebox](https://voicebox.sh) — description, moteurs, langues et téléchargements.',
          '[Tarifs de Voicebox](https://voicebox.sh/pricing) — offres Local, Cloud et Studio.',
          '[Voicebox Cloud](https://voicebox.sh/cloud) — statut et description du chiffrement.',
          '[Politique de confidentialité de Voicebox](https://voicebox.sh/privacy) — traitement des données, mise à jour le 6 juillet 2026.',
          '[Documentation de Voicebox](https://docs.voicebox.sh) — plateformes et voie Docker.',
          '[Voicebox sur GitHub](https://github.com/jamiepine/voicebox) — README, licence MIT, détails de l’API et de MCP.',
          '[Versions de Voicebox](https://github.com/jamiepine/voicebox/releases) — version 0.5.0, fichiers d’installation et notes de version.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de XTTS v2](/fr/power-local-llm/xtts-v2-review) — un modèle de clonage de voix qui s’exécute en local comme bibliothèque.',
          '[Test de Handy](/fr/power-local-llm/handy-review) — une appli de dictée gratuite sous licence MIT, en appui-pour-parler.',
          '[Test d’OpenWhispr](/fr/power-local-llm/openwhispr-review) — dictée et notes de réunion avec des modèles vocaux locaux ou cloud.',
          '[Test de Whisper.cpp](/fr/power-local-llm/whisper-cpp-review) — le portage C++ de Whisper sur lequel reposent beaucoup d’outils de dictée locaux.',
          '[Outils vocaux et audio comparés](/fr/power-local-llm/local-llm-voice-audio-compared) — la comparaison de catégorie à laquelle appartient ce test.',
          '[Répertoire des logiciels de LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
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
    heroImage: '/images/voicebox-review-hero-ja.webp',
    title: 'Voiceboxレビュー：オープンソースのローカル音声スタジオ',
    seoTitle: 'Voiceboxレビュー：無料のローカル音声クローンと音声入力',
    intro: 'Voiceboxは、オープンソースのデスクトップアプリです。声のクローン作成、複数のローカルエンジンによる読み上げ、Whisperによる任意のアプリへの音声入力に対応し、MCPサーバー経由でAIエージェントに声を持たせることもできます。紹介されている処理はすべて自分のパソコン上で動き、ダウンロードは無料です。このレビューは、公式サイト、プライバシーポリシー、料金ページ、ドキュメント、GitHubリポジトリ（2026年10月26日確認）に基づいており、PromptQuorumはアプリを実際には試していません。',
    metaDescription: 'Voiceboxのレビュー。MITライセンスのローカル音声スタジオで、音声クローン、読み上げ、Whisper音声入力、MCPサーバーに対応します。実機未検証です。',
    twitterDescription: '音声クローン、読み上げ、音声入力を1つにまとめた、無料でMITライセンスのローカル動作デスクトップアプリ。エンジン、プライバシー、インストーラーについて、情報源が確認できた点とできなかった点を整理しました。',
    audience: 'ローカルでの音声クローン、読み上げ、音声入力を使いたいクリエイター、開発者、アクセシビリティ利用者のうち、情報源が確認している内容、アプリがダウンロードするもの、まだ提供されていないものを知りたい方。',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Voicebox レビュー',
    targetKeywords: [
      'voicebox レビュー',
      'voicebox 音声クローン',
      'elevenlabs 代替 オープンソース',
      'ローカル 音声クローン アプリ',
      'オープンソース 読み上げ デスクトップ アプリ',
      'wispr flow 代替 オープンソース',
      'voicebox.sh',
    ],
    current_models_mentioned: ['Qwen3-TTS', 'Chatterbox', 'Kokoro', 'Whisper'],
    current_hardware_mentioned: ['Apple silicon', 'NVIDIA GPU'],
    leadAnswerBlock: '**Voicebox（バージョン0.5.0）は、音声クローン、読み上げ、Whisperによる音声入力をまとめたMITライセンスのデスクトップアプリで、情報源によると録音、声のプロファイル、文字起こしは自分のパソコン内に保たれます。** ローカルAPIとMCPサーバーも備えており、AIエージェントがクローンした声で話せます。ここに書いた内容はすべて開発元の公式サイト、ドキュメント、GitHubリポジトリに基づいています。',
    quickAnswerTop: {
      ja: {
        question: 'Voiceboxは声のデータを自分のパソコン内にとどめますか。',
        answer: '既定ではとどめます。プライバシーポリシーによると、デスクトップアプリは録音、声のプロファイル、文字起こし、生成結果、設定を運営元に送信しません。暗号化されたクラウドバックアップ（任意）は予告されていますが、まだ提供されていません。',
        bullets: [
          '短い参照サンプルから声をクローンし、複数のローカル読み上げエンジンから選んで音声を生成します。',
          'グローバルショートカットで、フォーカス中の入力欄にWhisperで音声入力でき、ローカルの言語モデルによる整形も任意で使えます。',
          'ストーリーエディタで、複数の声をマルチトラックのタイムラインに並べられます。',
          'REST APIとMCPサーバーにより、Claude CodeやCursorなどのエージェントが選んだ声で話せます。',
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
        label: 'Voiceboxとは',
        anchor: 'what-is-voicebox',
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
        label: '情報源で確認できた機能',
        anchor: 'key-features',
      },
      {
        label: 'プラン',
        anchor: 'plans',
      },
      {
        label: 'データの流れとプライバシー',
        anchor: 'privacy',
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
            text: 'Voiceboxは、声のクローン作成、ローカルエンジンによる読み上げ、Whisperによる音声入力に対応し、MCPサーバーでAIエージェントに声を与えるオープンソースのデスクトップアプリです。',
          },
          {
            type: 'plain-terms',
            text: '録音スタジオと音声キーボードを1つにまとめたプログラムで、サブスクリプション型のサービスではなく、すべて自分のパソコン上で動くものと考えてください。',
          },
        ],
        items: [
          'メンテナンス：メインブランチは2026年10月7日に最後に変更されたため、放置プロジェクトの警告は該当しません。最新のタグ付きリリースである0.5.0は2026年4月25日のものです。',
          '費用：ローカルアプリは無料です。有料のクラウドバックアップ（任意）は予告されていますが、まだ公開されていません。',
          'エンジン：READMEには8つの読み上げエンジンと、文字起こし用のWhisperが挙げられています。',
          '対応環境：macOSとWindows向けのインストーラーがあり、Linuxはソースからのビルドが必要です。',
          '運営元：Spacedrive Technology Inc.で、コードはMITライセンスで公開されています。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、[voicebox.sh](https://voicebox.sh)、プライバシーポリシー、ドキュメント、GitHubリポジトリ（2026年10月26日確認）に基づいています。PromptQuorumはアプリのインストールや計測を行っていないため、音声の品質と速度は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-voicebox',
        title: 'Voiceboxとは',
        content: [
          '**Voiceboxは、音声の両方向を扱うローカルファーストの音声スタジオです。テキストをクローンまたはプリセットの声で読み上げ、さらに話した内容を聞き取って文字起こしし、貼り付けます。** READMEは自らを、ElevenLabsとWisprFlowの無料でオープンソースの代替を1つにまとめたアプリと説明し、公式サイトでは自分のマシン上で完結して動くと説明しています。',
          '**アプリはTauri（Rust）とPythonのFastAPIバックエンドで作られており、公式サイトは運営元としてSpacedrive Technology Inc.を挙げています。** リリースノートで「Capture release」と呼ばれるバージョン0.5.0で、音声入力、ボイスパーソナリティ、MCPサーバーが加わりました。公式サイトに表示されている「v0.2.0」はデモのスクリーンショット内のラベルで、リリース番号ではありません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**VoiceboxはmacOSとWindows向けにダウンロードできます。Linux向けのビルド済みバイナリはなくソースからのビルドが必要で、READMEにはDockerを使う方法も載っています。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          {
            '項目': 'macOS',
            '入手方法': '.dmg（Apple silicon、Intel）：[voicebox.sh/download](https://voicebox.sh/download)',
          },
          {
            '項目': 'Windows',
            '入手方法': '.msiまたは.exeインストーラー（x64）：[voicebox.sh/download](https://voicebox.sh/download)',
          },
          {
            '項目': 'Linux',
            '入手方法': 'ソースからビルド：[voicebox.sh/linux-install](https://voicebox.sh/linux-install)',
          },
          {
            '項目': 'Docker',
            '入手方法': 'リポジトリで`docker compose up`を実行（README）',
          },
          {
            '項目': '公式サイト',
            '入手方法': '[voicebox.sh](https://voicebox.sh)',
          },
          {
            '項目': 'プライバシーポリシー',
            '入手方法': '[voicebox.sh/privacy](https://voicebox.sh/privacy)',
          },
          {
            '項目': 'ソースコード',
            '入手方法': '[github.com/jamiepine/voicebox](https://github.com/jamiepine/voicebox)、MITライセンス',
          },
        ],
        note: '確認したバージョン：0.5.0。[GitHubのReleasesページ](https://github.com/jamiepine/voicebox/releases/latest)によると2026年4月25日に公開され、macOSとWindows用のインストーラーが掲載されています。メインブランチの最新の変更は2026年10月7日でした。プランは「プラン」で扱います。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: [
          '**RAM、ディスク容量、OSバージョンの最低条件は情報源に記載がありません。負荷が大きいのは、別途ダウンロードする音声モデルと言語モデルの部分です。**',
        ],
        columns: ['項目', '情報源の記載'],
        rows: [
          {
            '項目': 'OS',
            '情報源の記載': 'macOS（Apple siliconとIntel）とWindows x64向けのインストーラー、Linuxはソースから。OSバージョンの最低条件は示されていません',
          },
          {
            '項目': 'アクセラレーション',
            '情報源の記載': 'Apple siliconはMLX、NVIDIA GPUはCUDA、LinuxのAMDはROCm、WindowsはDirectML、Intel Arc、そしてどこでも動くものの低速なCPUへのフォールバック',
          },
          {
            '項目': '最も軽いエンジン',
            '情報源の記載': 'LuxTTSに必要なVRAMは約1 GB、Kokoroは高速なCPU利用を想定した8200万パラメータのモデルです。より大きなエンジンの数値はREADMEにありません',
          },
          {
            '項目': 'モデル',
            '情報源の記載': 'エンジン、Whisperのサイズ、同梱のQwen3言語モデル（0.6B、1.7B、4B）はアプリ内でダウンロードします。合計のダウンロードサイズは情報源に記載がありません',
          },
          {
            '項目': '権限',
            '情報源の記載': 'ショートカットと自動貼り付けにmacOSのアクセシビリティと入力監視が必要です。アクセシビリティがなくても音声入力は文字起こしを保存し、貼り付けの手順だけが無効になります',
          },
          {
            '項目': 'インターネット',
            '情報源の記載': 'モデルのダウンロードに必要です。公式サイトによると、その後の生成と整形はマシン上で動作します',
          },
        ],
        note: 'アクセラレーションのバックエンドはREADMEの記載どおりです。どの組み合わせがインストーラーに含まれるかは、PromptQuorumでは確認していません。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下はすべて公式サイト、ドキュメント、READMEに基づく内容で、独自に検証したものはありません。**',
        ],
        items: [
          '**音声クローンとプリセット。** 短い参照サンプルからのゼロショットのクローン作成に加え、KokoroとQwen CustomVoiceによるプリセットの声があります。READMEは8つのエンジンと23言語を挙げ、対応範囲が最も広いのはChatterbox Multilingualです。',
          '**表現力のある音声とエフェクト。** Chatterbox Turboは[laugh]や[sigh]などのタグを読み取り、生成後にSpotifyのpedalboardライブラリによる8種類の後処理エフェクトを適用できます。',
          '**長文とストーリー。** 長い原稿は文の区切りで分割してクロスフェードでつなぎ、最大50,000文字まで扱えます。マルチトラックのタイムラインで、複数の声をストーリーにまとめられます。',
          '**音声入力とキャプチャ。** グローバルショートカットでWhisperまたはWhisper Turboにより文字起こしし、macOSではフォーカス中の入力欄に貼り付けます。すべての録音は、文字起こしとともにCapturesタブに保存されます。',
          '**エージェントとAPI。** ポート17493のローカルREST APIと、4つのツールを持つMCPサーバーにより、Claude Code、Cursor、Windsurf、Clineが、クライアントごとに割り当てた声で話せます。',
        ],
        note: 'READMEは、WindowsとLinuxでの自動貼り付け、ストリーミング文字起こし、ほかの音声認識エンジンを、提供済みの機能ではなくロードマップの項目として挙げています。',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'プラン',
        content: [
          '**ローカルアプリはアカウント不要で無料です。料金ページには有料のCloudプランとStudioプランが載っていますが、どちらも「coming soon」と表示されています。** 数値はすべて料金ページの米ドル表示で、確定価格ではないと記載されています。',
        ],
        columns: ['プラン', '料金ページの記載'],
        rows: [
          {
            'プラン': 'Local',
            '料金ページの記載': '$0、アカウント不要：全エンジンでの音声クローン、音声入力とキャプチャ、MCPとエージェント連携、パーソナリティ、ローカル生成は無制限',
          },
          {
            'プラン': 'Cloud',
            '料金ページの記載': '開始時は年$12：エンドツーエンド暗号化のバックアップと同期、ストレージ25 GB、最大5台のデバイス、30日間のバージョン履歴',
          },
          {
            'プラン': 'Studio',
            '料金ページの記載': '年$48、仮の価格と表示：Cloudに加え、ストレージ250 GB、デバイス数無制限、1年間のバージョン履歴、優先サポート',
          },
        ],
        note: '2026年10月26日時点の表示です。ほかの通貨や地域別の価格は確認しておらず、税は含まれていません。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**2026年7月6日に更新されたプライバシーポリシーは、デスクトップアプリが録音、声のプロファイル、文字起こし、生成結果、設定を運営元に送信せず、アプリのテレメトリや分析も説明されていないと述べています。** 公式サイトは、モデル、音声、文字起こし、言語モデルの出力がマシンの外に出ることはなく、ローカルAPIは既定で127.0.0.1で待ち受けるとも記載しています。',
          'クラウドバックアップ（任意）は、アップロード前にデバイス上でエンドツーエンド暗号化されると説明されており、サーバー側に見えるのはアカウントのメールアドレス、オブジェクト数とサイズ、ハッシュ、同期カウンター、タイムスタンプだけです。ポリシーには、暗号化された声紋を保存するVoice ID機能と、公開したクリップは誰でも見られるという注意も書かれており、支払いはStripeまたは暗号資産で行われます。公式サイトは、別のマシンのバックエンドに接続する「Local or Remote」オプションにも触れていますが、「マシン上で完結」という記述との整合は説明していません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発元の表明であり、監査結果ではありません。コードはMITライセンスで公開されていますが、PromptQuorumはコードを読んだり、アプリの通信を調べたりしておらず、ポリシーは公式サイトのアクセス解析には触れていません。',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**音声の品質と速度。** どのエンジンについても、PromptQuorumは出力を聞いておらず、リアルタイム係数の測定やクローンの精度の検証も行っていません。',
          '**モデルのライセンス。** MITライセンスが対象とするのはVoiceboxのコードです。各音声モデルには独自の規約があり、最近のコミットのメモは、新しく追加されたOmniVoiceエンジンのウェイトを非商用と説明しています。モデルのライセンスはいずれも確認していません。',
          '**エンジン数。** READMEはQwen VoiceDesignを含む8つのエンジンを挙げていますが、公式サイトは7つを挙げており、どちらが最新かは判断できません。',
          '**リリースの頻度。** 最新のタグ付きリリースは2026年4月のものですが、メインブランチは10月に変更されているため、インストーラーに最新のエンジンが含まれるかは不明です。',
          '**インストーラーの署名。** macOSとWindowsのインストーラーが公証済みか、コード署名されているかは確認していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[XTTS v2](/ja/power-local-llm/xtts-v2-review)',
            '対応プラットフォーム': 'macOS、Windows、Linux',
            '価格／ライセンス': '無料／CPML',
            '主な違い': 'ライブラリとして使う単一のクローン用モデルで、アプリ、音声入力、エージェント機能はありません',
          },
          {
            'アプリ': '[Coqui TTS](/ja/power-local-llm/coqui-tts-review)',
            '対応プラットフォーム': 'macOS、Windows、Linux',
            '価格／ライセンス': '無料／MPL 2.0',
            '主な違い': 'デスクトップのスタジオではなく、コードから読み上げモデルを動かすためのPythonツールキットです',
          },
          {
            'アプリ': '[Handy](/ja/power-local-llm/handy-review)',
            '対応プラットフォーム': 'macOS、Windows、Linux',
            '価格／ライセンス': '無料／MIT',
            '主な違い': '音声入力専用で、音声生成、音声クローン、エージェントの音声出力はありません',
          },
          {
            'アプリ': '[OpenWhispr](/ja/power-local-llm/openwhispr-review)',
            '対応プラットフォーム': 'macOS、Windows、Linux、iOS',
            '価格／ライセンス': 'フリーミアム／MIT',
            '主な違い': 'ローカルまたはクラウドのモデルによる音声入力と会議メモに対応し、読み上げはありません',
          },
        ],
        note: 'いずれもPromptQuorumディレクトリにある同カテゴリのアプリです。現在の価格、ライセンス、対応プラットフォームは各アプリのページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '最初に使うエンジンはどれがよいですか。',
            a: 'READMEは、Kokoroを8200万パラメータの小型モデルで、50種類のプリセットの声があり、CPUでも高速に動くと説明し、Chatterbox Multilingualを言語の対応範囲が最も広いと説明しています。そのため、CPUだけのマシンならKokoroが候補になります。出力品質は比較していません。',
          },
          {
            q: 'AIエージェントは本当にこれで話せますか。',
            a: 'READMEによると、MCP対応のエージェントならspeakツールを呼び出せ、設定でクライアントごとに声を割り当てられます。MCPに対応しないツール向けには通常のHTTPエンドポイントもあります。エージェントが話すたびに、画面上にピル型の表示が出ます。',
          },
          {
            q: 'WindowsやLinuxでも音声入力は使えますか。',
            a: '音声入力とCapturesタブはすべてのプラットフォーム向けに説明されていますが、READMEはWindowsとLinuxでの自動貼り付けをロードマップの項目としているため、フォーカス中の入力欄への貼り付けが確認できるのはmacOSのみです。',
          },
          {
            q: '同梱の言語モデルは何をしますか。',
            a: 'ローカルのQwen3モデルが、文字起こしからフィラーワードを取り除き、読み上げの前に声のプロファイルのパーソナリティに合わせて文章を書き換えます。READMEは0.6B、1.7B、4Bの3つのサイズを挙げています。',
          },
          {
            q: 'Voicebox Cloudは利用できますか。',
            a: 'いいえ。公式サイトではCloudが通知用リンク付きの「coming soon」と表示され、料金ページは価格と上限が確定していないと述べています。ローカルアプリにCloudは必要ありません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'Voiceboxは、MITライセンスで活発に開発されており、自分のパソコン上で声のクローン、音声の生成、音声入力ができ、APIとMCPサーバーでエージェントにも話させられます。無料のローカルアプリについてのプライバシーの記述は強い内容ですが、開発元の主張であり、最新のタグ付きリリースは4月のものなのにコードは10月まで変更が続いていて、Linuxはソースからのビルドが必要で、自動貼り付けが確認できるのはmacOSだけです。無料のローカル音声ツールを1つにまとめたく、大きなモデルを複数ダウンロードしても構わないクリエイターや開発者に向いています。実証済みの音声品質、各モデルの商用利用の明確さ、完成度の高いLinuxのインストールが必要な場合は、まず試用し、各モデルのライセンスを読んでください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Voicebox公式サイト](https://voicebox.sh)：概要、エンジン、言語、ダウンロード。',
          '[Voiceboxの料金](https://voicebox.sh/pricing)：Local、Cloud、Studioのプラン。',
          '[Voicebox Cloud](https://voicebox.sh/cloud)：提供状況と暗号化の説明。',
          '[Voiceboxのプライバシーポリシー](https://voicebox.sh/privacy)：データの取り扱い。2026年7月6日更新。',
          '[Voiceboxドキュメント](https://docs.voicebox.sh)：対応プラットフォームとDockerの手順。',
          '[GitHubのVoicebox](https://github.com/jamiepine/voicebox)：README、MITライセンス、APIとMCPの詳細。',
          '[Voiceboxのリリース](https://github.com/jamiepine/voicebox/releases)：バージョン0.5.0、インストーラーのファイル、リリースノート。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[XTTS v2レビュー](/ja/power-local-llm/xtts-v2-review)：ライブラリとしてローカルで動く音声クローン用モデル。',
          '[Handyレビュー](/ja/power-local-llm/handy-review)：MITライセンスで無料のプッシュトゥトーク音声入力アプリ。',
          '[OpenWhisprレビュー](/ja/power-local-llm/openwhispr-review)：ローカルまたはクラウドの音声認識モデルによる音声入力と会議メモ。',
          '[Whisper.cppレビュー](/ja/power-local-llm/whisper-cpp-review)：多くのローカル音声入力ツールの基盤となっているWhisperのC++ポート。',
          '[音声・オーディオツール比較](/ja/power-local-llm/local-llm-voice-audio-compared)：このレビューが属するカテゴリ比較。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory)：ローカルAIツールの全カタログ。',
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
    heroImage: '/images/voicebox-review-hero-pt.webp',
    title: 'Análise do Voicebox: estúdio de voz local de código aberto',
    seoTitle: 'Análise do Voicebox: clonagem de voz e ditado locais',
    intro: 'O Voicebox é um app de desktop de código aberto que clona vozes, converte texto em fala com vários motores locais, dita em qualquer app com o Whisper e permite que agentes de IA falem por meio de um servidor MCP. Tudo o que ele descreve roda no seu próprio computador, e o download é gratuito. Esta análise parte do site, da política de privacidade e da página de preços, da documentação e do repositório do GitHub, consultados em 26 de outubro de 2026; a PromptQuorum não testou o app na prática.',
    metaDescription: 'Análise do Voicebox: estúdio de voz local MIT para Mac e Windows, com clonagem de voz, texto em fala, ditado com Whisper e servidor MCP. Não testado.',
    twitterDescription: 'Clonagem de voz, texto em fala e ditado em um só app de desktop gratuito, com licença MIT, que roda localmente. O que as fontes confirmam sobre motores, privacidade e instaladores, e o que não confirmam.',
    audience: 'Criadores, desenvolvedores e usuários de acessibilidade que querem clonagem de voz, texto em fala e ditado locais e precisam saber o que as fontes confirmam, o que o app baixa e o que ainda não está disponível.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Voicebox',
    targetKeywords: [
      'análise voicebox',
      'voicebox clonagem de voz',
      'alternativa ao elevenlabs código aberto',
      'app de clonagem de voz local',
      'app de texto em fala código aberto desktop',
      'alternativa ao wispr flow código aberto',
      'voicebox.sh',
    ],
    current_models_mentioned: ['Qwen3-TTS', 'Chatterbox', 'Kokoro', 'Whisper'],
    current_hardware_mentioned: ['Apple silicon', 'NVIDIA GPU'],
    leadAnswerBlock: '**O Voicebox (versão 0.5.0) é um app de desktop com licença MIT que reúne clonagem de voz, texto em fala e ditado com Whisper, e as fontes dizem que ele mantém as suas gravações, perfis de voz e transcrições no seu próprio computador.** Ele também roda uma API local e um servidor MCP para que agentes de IA falem com uma voz clonada, e cada afirmação aqui vem do site, da documentação e do repositório do GitHub do desenvolvedor.',
    quickAnswerTop: {
      pt: {
        question: 'O Voicebox mantém os meus dados de voz no meu computador?',
        answer: 'Sim, por padrão: a política de privacidade diz que o app de desktop não transmite as suas gravações, perfis de voz, transcrições, gerações nem configurações ao responsável. Um backup criptografado opcional na nuvem foi anunciado, mas ainda não está disponível.',
        bullets: [
          'Clona uma voz a partir de uma amostra de referência curta e gera fala com uma escolha de motores locais de texto em fala.',
          'Um atalho global dita no campo de texto em foco usando o Whisper, com limpeza opcional por um modelo de linguagem local.',
          'Um editor de histórias organiza várias vozes em uma linha do tempo com várias faixas.',
          'Uma API REST e um servidor MCP permitem que agentes como o Claude Code e o Cursor falem com uma voz que você escolheu.',
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
        label: 'O que é o Voicebox?',
        anchor: 'what-is-voicebox',
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
        label: 'Recursos confirmados pelas fontes',
        anchor: 'key-features',
      },
      {
        label: 'Planos',
        anchor: 'plans',
      },
      {
        label: 'Fluxo de dados e privacidade',
        anchor: 'privacy',
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
            text: 'O Voicebox é um app de desktop de código aberto que clona vozes, gera fala com motores locais, dita com o Whisper e dá voz a agentes de IA por meio de um servidor MCP.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como um estúdio de gravação e um teclado de voz no mesmo programa, com tudo rodando na sua própria máquina em vez de em um serviço por assinatura.',
          },
        ],
        items: [
          'Manutenção: o branch principal mudou pela última vez em 7 de outubro de 2026, então não se aplica aviso de projeto abandonado; a última versão publicada, a 0.5.0, é de 25 de abril de 2026.',
          'Custo: o app local é gratuito; um backup pago opcional na nuvem foi anunciado, mas ainda não foi lançado.',
          'Motores: o README lista oito motores de texto em fala e o Whisper para transcrição.',
          'Plataformas: instaladores para macOS e Windows; o Linux exige compilar a partir do código-fonte.',
          'Responsável: Spacedrive Technology Inc.; o código é aberto sob a licença MIT.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia em [voicebox.sh](https://voicebox.sh), na política de privacidade, na documentação e no repositório do GitHub, consultados em 26 de outubro de 2026. A PromptQuorum não instalou nem cronometrou o app, então qualidade de voz e velocidade não são avaliadas.',
          },
        ],
      },
      overview: {
        id: 'what-is-voicebox',
        title: 'O que é o Voicebox?',
        content: [
          '**O Voicebox é um estúdio de voz com foco no local que cobre os dois sentidos da voz: ele fala o texto em voz alta com vozes clonadas ou predefinidas, e também ouve, transcreve e cola o que você diz.** O README o chama de alternativa gratuita e de código aberto ao ElevenLabs e ao WisprFlow em um só app, e o site o descreve como rodando inteiramente na sua máquina.',
          '**O app é feito com Tauri (Rust) em torno de um backend Python FastAPI, e o site cita a Spacedrive Technology Inc. como responsável.** A versão 0.5.0, chamada de “the Capture release” nas suas notas, acrescentou ditado, personalidades de voz e o servidor MCP. A versão “v0.2.0” exibida no site é um rótulo dentro da captura de tela de demonstração, não o número da versão.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Voicebox é um download para macOS e Windows; o Linux não tem binário pronto e precisa ser compilado a partir do código-fonte, e o README também mostra um caminho com Docker.**',
        ],
        columns: ['Opção', 'Onde obter'],
        rows: [
          {
            'Opção': 'macOS',
            'Onde obter': '.dmg para Apple silicon e Intel: [voicebox.sh/download](https://voicebox.sh/download)',
          },
          {
            'Opção': 'Windows',
            'Onde obter': 'instalador .msi ou .exe (x64): [voicebox.sh/download](https://voicebox.sh/download)',
          },
          {
            'Opção': 'Linux',
            'Onde obter': 'Compilar a partir do código-fonte: [voicebox.sh/linux-install](https://voicebox.sh/linux-install)',
          },
          {
            'Opção': 'Docker',
            'Onde obter': '`docker compose up` a partir do repositório (README)',
          },
          {
            'Opção': 'Site',
            'Onde obter': '[voicebox.sh](https://voicebox.sh)',
          },
          {
            'Opção': 'Política de privacidade',
            'Onde obter': '[voicebox.sh/privacy](https://voicebox.sh/privacy)',
          },
          {
            'Opção': 'Código-fonte',
            'Onde obter': '[github.com/jamiepine/voicebox](https://github.com/jamiepine/voicebox), licença MIT',
          },
        ],
        note: 'Versão analisada: 0.5.0, publicada em 25 de abril de 2026 segundo a [página de Releases do GitHub](https://github.com/jamiepine/voicebox/releases/latest), que lista os instaladores de macOS e Windows; a mudança mais recente no branch principal foi em 7 de outubro de 2026. Os planos são tratados em Planos.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**As fontes não informam RAM, disco nem versão mínima do sistema operacional; a parte exigente são os modelos de voz e de linguagem, que são baixados separadamente.**',
        ],
        columns: ['Item', 'O que dizem as fontes'],
        rows: [
          {
            Item: 'Sistema operacional',
            'O que dizem as fontes': 'Instaladores para macOS (Apple silicon e Intel) e Windows x64; Linux a partir do código-fonte; nenhuma versão mínima de sistema é informada',
          },
          {
            Item: 'Aceleração',
            'O que dizem as fontes': 'MLX no Apple silicon, CUDA em GPUs NVIDIA, ROCm em AMD no Linux, DirectML no Windows, Intel Arc, e um recurso de CPU que funciona em qualquer lugar, porém mais devagar',
          },
          {
            Item: 'Motores mais leves',
            'O que dizem as fontes': 'O LuxTTS precisa de cerca de 1 GB de VRAM e o Kokoro é um modelo de 82 milhões de parâmetros voltado para uso rápido na CPU; o README não dá valor para os motores maiores',
          },
          {
            Item: 'Modelos',
            'O que dizem as fontes': 'Motores, tamanhos do Whisper e o modelo de linguagem Qwen3 incluído (0.6B, 1.7B ou 4B) são baixados dentro do app; as fontes não informam o tamanho total do download',
          },
          {
            Item: 'Permissões',
            'O que dizem as fontes': 'Acessibilidade e Monitoramento de entrada do macOS para atalhos e colagem automática; sem Acessibilidade, o ditado ainda salva transcrições e só a etapa de colar fica desativada',
          },
          {
            Item: 'Internet',
            'O que dizem as fontes': 'Necessária para baixar modelos; o site diz que a geração e o refinamento rodam depois na máquina',
          },
        ],
        note: 'Os backends de aceleração são os listados no README; a PromptQuorum não verificou quais combinações vêm nos instaladores.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Tudo o que segue vem do site, da documentação ou do README; nada foi testado de forma independente.**',
        ],
        items: [
          '**Clonagem de voz e vozes predefinidas.** Clonagem zero-shot a partir de uma amostra de referência curta, além de vozes predefinidas pelo Kokoro e pelo Qwen CustomVoice; o README conta oito motores e 23 idiomas, com a cobertura mais ampla no Chatterbox Multilingual.',
          '**Fala expressiva e efeitos.** O Chatterbox Turbo lê marcas como [laugh] e [sigh], e oito efeitos de pós-processamento da biblioteca pedalboard, do Spotify, podem ser aplicados depois da geração.',
          '**Textos longos e histórias.** Roteiros longos são divididos nos limites das frases e unidos com transição suave, até 50.000 caracteres, e uma linha do tempo com várias faixas organiza várias vozes em uma história.',
          '**Ditado e capturas.** Um atalho global transcreve com o Whisper, ou o Whisper Turbo, e cola no campo em foco no macOS; cada gravação fica guardada em uma aba Captures com a sua transcrição.',
          '**Agentes e API.** Uma API REST local na porta 17493 e um servidor MCP com quatro ferramentas permitem que o Claude Code, o Cursor, o Windsurf ou o Cline falem com uma voz vinculada a cada cliente.',
        ],
        note: 'O README lista a colagem automática no Windows e no Linux, a transcrição em streaming e outros motores de voz para texto como itens do roteiro de desenvolvimento, não como recursos já entregues.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'Planos',
        content: [
          '**O app local é gratuito e sem conta, e a página de preços lista os planos pagos Cloud e Studio, ambos marcados como “coming soon”.** Todos os valores são preços em dólares americanos da página de preços, que diz que eles não são definitivos.',
        ],
        columns: ['Plano', 'O que a página de preços lista'],
        rows: [
          {
            Plano: 'Local',
            'O que a página de preços lista': 'US$ 0, sem conta: clonagem de voz em todos os motores, ditado e capturas, integração com MCP e agentes, personalidades, gerações locais ilimitadas',
          },
          {
            Plano: 'Cloud',
            'O que a página de preços lista': 'US$ 12 por ano no lançamento: backup e sincronização com criptografia de ponta a ponta, 25 GB de armazenamento, até 5 dispositivos, histórico de versões de 30 dias',
          },
          {
            Plano: 'Studio',
            'O que a página de preços lista': 'US$ 48 por ano, marcado como provisório: Cloud mais 250 GB de armazenamento, dispositivos ilimitados, histórico de versões de um ano, suporte prioritário',
          },
        ],
        note: 'Valores exibidos em 26 de outubro de 2026; nenhuma outra moeda nem preço regional foi verificado, e os impostos não estão incluídos.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**A política de privacidade, atualizada pela última vez em 6 de julho de 2026, diz que o app de desktop não transmite as suas gravações, perfis de voz, transcrições, gerações nem configurações ao responsável, e não descreve telemetria nem análise de uso no app.** O site acrescenta que modelos, áudio, transcrições e a saída do modelo de linguagem nunca saem da máquina, e que a API local escuta em 127.0.0.1 por padrão.',
          'O backup opcional na nuvem é descrito como criptografado de ponta a ponta no seu dispositivo antes do envio, de modo que os servidores veem apenas o e-mail da conta, contagens e tamanhos de objetos, hashes, contadores de sincronização e carimbos de data e hora. A política também trata de um recurso Voice ID que guarda uma impressão de voz criptografada e avisa que clipes publicados são públicos; os pagamentos passam pelo Stripe ou por criptomoeda. O site menciona uma opção “Local or Remote” para se conectar a um backend em outra máquina, que ele não concilia com a formulação “entirely on your machine”.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São declarações do desenvolvedor, não resultados de auditoria. O código é público sob a licença MIT, mas a PromptQuorum não o leu nem inspecionou o tráfego de rede do app, e a política não trata da análise de uso do site.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade de voz e velocidade.** A PromptQuorum não ouviu a saída, não mediu fatores de tempo real nem testou a precisão da clonagem em nenhum motor.',
          '**Licenças dos modelos.** A licença MIT cobre o código do Voicebox; cada modelo de voz tem seus próprios termos, e uma nota de commit recente descreve o motor OmniVoice, adicionado há pouco, como tendo pesos de uso não comercial. Não verificamos nenhuma licença de modelo.',
          '**Número de motores.** O README lista oito motores, incluindo o Qwen VoiceDesign, enquanto o site lista sete; não temos como saber qual está atualizado.',
          '**Ritmo de lançamentos.** A versão publicada mais recente é de abril de 2026, embora o branch principal tenha mudado em outubro, então não está claro se os instaladores incluem os motores mais recentes.',
          '**Assinatura dos instaladores.** Não verificamos se os instaladores de macOS e Windows são notarizados ou assinados com certificado de desenvolvedor.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            App: '[XTTS v2](/pt/power-local-llm/xtts-v2-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Grátis / CPML',
            'Diferença principal': 'Um único modelo de clonagem usado como biblioteca, sem app, ditado nem recursos para agentes',
          },
          {
            App: '[Coqui TTS](/pt/power-local-llm/coqui-tts-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Grátis / MPL 2.0',
            'Diferença principal': 'Um kit de ferramentas Python para rodar modelos de texto em fala por código, e não um estúdio de desktop',
          },
          {
            App: '[Handy](/pt/power-local-llm/handy-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Só ditado: sem geração de fala, clonagem de voz nem saída de voz para agentes',
          },
          {
            App: '[OpenWhispr](/pt/power-local-llm/openwhispr-review)',
            Plataformas: 'macOS, Windows, Linux, iOS',
            'Preço / licença': 'Freemium / MIT',
            'Diferença principal': 'Ditado e notas de reuniões com modelos locais ou na nuvem, e sem texto em fala',
          },
        ],
        note: 'São apps da mesma categoria do diretório da PromptQuorum; confirme preço, licença e plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Com qual motor devo começar?',
            a: 'O README descreve o Kokoro como um modelo minúsculo de 82 milhões de parâmetros, com 50 vozes predefinidas e uso rápido na CPU, e o Chatterbox Multilingual como o de maior cobertura de idiomas; portanto, uma máquina só com CPU é o caso do Kokoro. Não comparamos a qualidade da saída.',
          },
          {
            q: 'Um agente de IA consegue mesmo falar por ele?',
            a: 'O README diz que qualquer agente compatível com MCP pode chamar uma ferramenta de fala, com uma voz vinculada a cada cliente nas Configurações, e um endpoint HTTP simples atende ferramentas que não aceitam MCP. Uma pílula na tela aparece sempre que um agente fala.',
          },
          {
            q: 'O ditado funciona no Windows e no Linux?',
            a: 'O ditado e a aba Captures são descritos para todas as plataformas, mas o README lista a colagem automática no Windows e no Linux como itens do roteiro de desenvolvimento, então só a colagem no campo em foco no macOS está confirmada.',
          },
          {
            q: 'O que faz o modelo de linguagem incluído?',
            a: 'Um modelo Qwen3 local remove palavras de preenchimento das transcrições e reescreve o texto na personalidade de um perfil de voz antes de ele ser falado; o README cita três tamanhos, 0.6B, 1.7B e 4B.',
          },
          {
            q: 'O Voicebox Cloud está disponível?',
            a: 'Não: o site mostra o Cloud como “coming soon” com um link de aviso, e a página de preços diz que seus preços e limites não são definitivos. O app local não precisa dele.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'O Voicebox é um jeito ativo e com licença MIT de clonar vozes, gerar fala e ditar no seu próprio computador, com uma API e um servidor MCP que permitem que agentes falem. As declarações de privacidade são fortes para o app local gratuito, mas são afirmações do desenvolvedor, a última versão publicada é de abril enquanto o código continuou mudando até outubro, o Linux exige compilação a partir do código-fonte e a colagem automática só está confirmada no macOS. Ele serve para criadores e desenvolvedores que querem uma só ferramenta de voz local e gratuita e aceitam baixar vários modelos grandes; quem precisa de qualidade de voz comprovada, de clareza sobre o uso comercial de cada modelo ou de uma instalação refinada no Linux deve testá-lo e ler antes a licença de cada modelo.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Voicebox](https://voicebox.sh) — descrição, motores, idiomas e downloads.',
          '[Preços do Voicebox](https://voicebox.sh/pricing) — planos Local, Cloud e Studio.',
          '[Voicebox Cloud](https://voicebox.sh/cloud) — status e descrição da criptografia.',
          '[Política de privacidade do Voicebox](https://voicebox.sh/privacy) — tratamento de dados, atualizada em 6 de julho de 2026.',
          '[Documentação do Voicebox](https://docs.voicebox.sh) — plataformas e caminho com Docker.',
          '[Voicebox no GitHub](https://github.com/jamiepine/voicebox) — README, licença MIT, detalhes da API e do MCP.',
          '[Releases do Voicebox](https://github.com/jamiepine/voicebox/releases) — versão 0.5.0, arquivos de instalação e notas da versão.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do XTTS v2](/pt/power-local-llm/xtts-v2-review) — um modelo de clonagem de voz que roda localmente como biblioteca.',
          '[Análise do Handy](/pt/power-local-llm/handy-review) — um app de ditado gratuito, com licença MIT e apertar para falar.',
          '[Análise do OpenWhispr](/pt/power-local-llm/openwhispr-review) — ditado e notas de reuniões com modelos de voz locais ou na nuvem.',
          '[Análise do Whisper.cpp](/pt/power-local-llm/whisper-cpp-review) — o port em C++ do Whisper em que muitas ferramentas locais de ditado se baseiam.',
          '[Ferramentas de voz e áudio comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — a comparação de categoria a que esta análise pertence.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
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
    heroImage: '/images/voicebox-review-hero-ar.webp',
    title: 'مراجعة Voicebox: استوديو صوتي محلي مفتوح المصدر',
    seoTitle: 'مراجعة Voicebox: استنساخ الصوت والإملاء محليًا ومجانًا',
    intro: 'Voicebox تطبيق مفتوح المصدر لسطح المكتب يستنسخ الأصوات، ويحوّل النص إلى كلام بعدة محركات محلية، ويملي في أي تطبيق بواسطة Whisper، ويتيح لوكلاء الذكاء الاصطناعي التحدث عبر خادم MCP. وكل ما يصفه يعمل على حاسوبك، والتنزيل مجاني. تستند هذه المراجعة إلى الموقع وسياسة الخصوصية وصفحة الأسعار والتوثيق ومستودع GitHub التي راجعناها في 26 أكتوبر 2026، ولم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription: 'مراجعة Voicebox: استوديو صوتي محلي بترخيص MIT لـ Mac وWindows يضم استنساخ الصوت وتحويل النص إلى كلام وإملاء Whisper وخادم MCP. لم نختبره عمليًا.',
    twitterDescription: 'استنساخ الصوت وتحويل النص إلى كلام والإملاء في تطبيق مجاني واحد بترخيص MIT يعمل محليًا. ما تؤكده المصادر عن المحركات والخصوصية وملفات التثبيت، وما لا تؤكده.',
    audience: 'المبدعون والمطورون ومستخدمو أدوات إمكانية الوصول الذين يريدون استنساخ الصوت وتحويل النص إلى كلام والإملاء محليًا، ويحتاجون إلى معرفة ما تؤكده المصادر وما ينزّله التطبيق وما لم يتوفر بعد.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Voicebox',
    targetKeywords: [
      'مراجعة voicebox',
      'استنساخ الصوت voicebox',
      'بديل elevenlabs مفتوح المصدر',
      'تطبيق استنساخ الصوت محلي',
      'تطبيق مفتوح المصدر لتحويل النص إلى كلام لسطح المكتب',
      'بديل wispr flow مفتوح المصدر',
      'voicebox.sh',
    ],
    current_models_mentioned: ['Qwen3-TTS', 'Chatterbox', 'Kokoro', 'Whisper'],
    current_hardware_mentioned: ['Apple silicon', 'NVIDIA GPU'],
    leadAnswerBlock: '**Voicebox (الإصدار 0.5.0) تطبيق لسطح المكتب بترخيص MIT يجمع استنساخ الصوت وتحويل النص إلى كلام وإملاء Whisper، وتقول المصادر إنه يُبقي تسجيلاتك وملفات الأصوات والنصوص المنسوخة على حاسوبك.** ويشغّل أيضًا واجهة API محلية وخادم MCP كي يتحدث وكلاء الذكاء الاصطناعي بصوت مستنسخ، وكل عبارة هنا مصدرها موقع الجهة المطورة وتوثيقها ومستودع GitHub.',
    quickAnswerTop: {
      ar: {
        question: 'هل يُبقي Voicebox بياناتي الصوتية على حاسوبي؟',
        answer: 'نعم افتراضيًا: تقول سياسة الخصوصية إن تطبيق سطح المكتب لا يرسل تسجيلاتك ولا ملفات الأصوات ولا النصوص المنسوخة ولا ما تولّده ولا إعداداتك إلى الجهة المشغّلة. أما النسخ الاحتياطي السحابي المشفّر الاختياري فمُعلن عنه لكنه غير متاح بعد.',
        bullets: [
          'يستنسخ صوتًا من عيّنة مرجعية قصيرة ويولّد الكلام بمحركات محلية متعددة لتحويل النص إلى كلام.',
          'اختصار عام يملي في حقل النص النشط بواسطة Whisper، مع تنقية اختيارية بنموذج لغوي محلي.',
          'محرر قصص يرتب عدة أصوات على خط زمني متعدد المسارات.',
          'واجهة REST API وخادم MCP يتيحان لوكلاء مثل Claude Code وCursor التحدث بصوت اخترتَه.',
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
        label: 'ما هو Voicebox؟',
        anchor: 'what-is-voicebox',
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
        label: 'الميزات التي أكدتها المصادر',
        anchor: 'key-features',
      },
      {
        label: 'الخطط',
        anchor: 'plans',
      },
      {
        label: 'تدفق البيانات والخصوصية',
        anchor: 'privacy',
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
            text: 'Voicebox تطبيق مفتوح المصدر لسطح المكتب يستنسخ الأصوات، ويولّد الكلام بمحركات محلية، ويملي بواسطة Whisper، ويمنح وكلاء الذكاء الاصطناعي صوتًا عبر خادم MCP.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله استوديو تسجيل ولوحة مفاتيح صوتية في برنامج واحد، يعمل كله على جهازك بدلًا من خدمة باشتراك.',
          },
        ],
        items: [
          'الصيانة: آخر تغيير على الفرع الرئيسي كان في 7 أكتوبر 2026، لذا لا ينطبق تحذير المشروع المتوقف؛ وآخر إصدار موسوم، 0.5.0، يعود إلى 25 أبريل 2026.',
          'التكلفة: التطبيق المحلي مجاني؛ ونسخ Cloud الاحتياطي المدفوع الاختياري مُعلن عنه لكنه لم يصدر بعد.',
          'المحركات: يسرد README ثمانية محركات لتحويل النص إلى كلام، إضافة إلى Whisper للنسخ.',
          'المنصات: مثبّتات لـ macOS وWindows؛ أما Linux فيحتاج إلى بناء من الشيفرة المصدرية.',
          'الجهة المشغّلة: Spacedrive Technology Inc.؛ والشيفرة مفتوحة بترخيص MIT.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى [voicebox.sh](https://voicebox.sh) وسياسة الخصوصية والتوثيق ومستودع GitHub التي راجعناها في 26 أكتوبر 2026. لم تثبّت PromptQuorum التطبيق ولم تقِس أداءه، لذلك لا تُقيَّم جودة الصوت ولا السرعة.',
          },
        ],
      },
      overview: {
        id: 'what-is-voicebox',
        title: 'ما هو Voicebox؟',
        content: [
          '**Voicebox استوديو صوتي محلي أولًا يغطي الاتجاهين: ينطق النص بأصوات مستنسخة أو جاهزة، ويستمع إلى ما تقوله فينسخه ويلصقه.** يصفه ملف README بأنه بديل مجاني ومفتوح المصدر لـ ElevenLabs وWisprFlow في تطبيق واحد، ويصفه الموقع بأنه يعمل بالكامل على جهازك.',
          '**بُني التطبيق بـ Tauri (Rust) حول خلفية Python FastAPI، ويسمّي الموقع Spacedrive Technology Inc. جهةً مشغّلة له.** أضاف الإصدار 0.5.0، الذي تسميه ملاحظاته «the Capture release»، الإملاء والشخصيات الصوتية وخادم MCP. أما الإصدار «v0.2.0» الظاهر على الموقع فهو وسم داخل لقطة شاشة العرض التوضيحي، وليس رقم الإصدار.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يتوفر Voicebox للتنزيل على macOS وWindows؛ أما Linux فلا يوجد له ملف جاهز ويجب بناؤه من الشيفرة المصدرية، ويعرض README أيضًا مسار Docker.**',
        ],
        columns: ['الخيار', 'مصدر الحصول عليه'],
        rows: [
          {
            'الخيار': 'macOS',
            'مصدر الحصول عليه': '‏.dmg ‏(Apple silicon وIntel): [voicebox.sh/download](https://voicebox.sh/download)',
          },
          {
            'الخيار': 'Windows',
            'مصدر الحصول عليه': 'مثبّت ‏.msi أو ‏.exe ‏(x64): [voicebox.sh/download](https://voicebox.sh/download)',
          },
          {
            'الخيار': 'Linux',
            'مصدر الحصول عليه': 'البناء من الشيفرة المصدرية: [voicebox.sh/linux-install](https://voicebox.sh/linux-install)',
          },
          {
            'الخيار': 'Docker',
            'مصدر الحصول عليه': '`docker compose up` من المستودع (README)',
          },
          {
            'الخيار': 'الموقع',
            'مصدر الحصول عليه': '[voicebox.sh](https://voicebox.sh)',
          },
          {
            'الخيار': 'سياسة الخصوصية',
            'مصدر الحصول عليه': '[voicebox.sh/privacy](https://voicebox.sh/privacy)',
          },
          {
            'الخيار': 'الشيفرة المصدرية',
            'مصدر الحصول عليه': '[github.com/jamiepine/voicebox](https://github.com/jamiepine/voicebox)، ترخيص MIT',
          },
        ],
        note: 'الإصدار الذي راجعناه: 0.5.0، نُشر في 25 أبريل 2026 بحسب [صفحة Releases على GitHub](https://github.com/jamiepine/voicebox/releases/latest) التي تسرد مثبّتات macOS وWindows؛ وكان أحدث تغيير على الفرع الرئيسي في 7 أكتوبر 2026. وتُعالَج الخطط في قسم الخطط.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**لا تذكر المصادر حدًا أدنى للذاكرة RAM أو القرص أو إصدار نظام التشغيل؛ والجزء المرهق هو نماذج الكلام واللغة التي تُنزَّل بشكل منفصل.**',
        ],
        columns: ['البند', 'ما تقوله المصادر'],
        rows: [
          {
            'البند': 'نظام التشغيل',
            'ما تقوله المصادر': 'مثبّتات لـ macOS (Apple silicon وIntel) وWindows x64؛ وLinux من الشيفرة المصدرية؛ ولا يُذكر حد أدنى لإصدار النظام',
          },
          {
            'البند': 'التسريع',
            'ما تقوله المصادر': 'MLX على Apple silicon، وCUDA على بطاقات NVIDIA، وROCm على AMD تحت Linux، وDirectML على Windows، وIntel Arc، مع بديل على المعالج يعمل في كل مكان لكنه أبطأ',
          },
          {
            'البند': 'أخف المحركات',
            'ما تقوله المصادر': 'يحتاج LuxTTS إلى نحو 1 GB من VRAM، وKokoro نموذج من 82 مليون معامل موجّه للاستخدام السريع على المعالج؛ ولا يذكر README رقمًا للمحركات الأكبر',
          },
          {
            'البند': 'النماذج',
            'ما تقوله المصادر': 'تُنزَّل داخل التطبيق المحركات وأحجام Whisper ونموذج Qwen3 اللغوي المرفق (0.6B أو 1.7B أو 4B)؛ ولا تذكر المصادر حجم التنزيل الإجمالي',
          },
          {
            'البند': 'الأذونات',
            'ما تقوله المصادر': 'إمكانية الوصول (Accessibility) ومراقبة الإدخال (Input Monitoring) في macOS للاختصارات واللصق التلقائي؛ وبدون إمكانية الوصول يواصل الإملاء حفظ النصوص المنسوخة ويتعطل اللصق فقط',
          },
          {
            'البند': 'الإنترنت',
            'ما تقوله المصادر': 'مطلوب لتنزيل النماذج؛ ويقول الموقع إن التوليد والتنقية يعملان بعد ذلك على الجهاز',
          },
        ],
        note: 'مسارات التسريع هي المذكورة في README؛ ولم تتحقق PromptQuorum من التركيبات التي تأتي فعليًا مع المثبّتات.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل ما يلي مأخوذ من الموقع أو التوثيق أو ملف README؛ ولم يُختبر شيء منه بشكل مستقل.**',
        ],
        items: [
          '**استنساخ الصوت والأصوات الجاهزة.** استنساخ بلا أمثلة مسبقة (zero-shot) من عيّنة مرجعية قصيرة، إضافة إلى أصوات جاهزة عبر Kokoro وQwen CustomVoice؛ ويعد README ثمانية محركات و23 لغة، وأوسع تغطية في Chatterbox Multilingual.',
          '**كلام معبّر ومؤثرات.** يقرأ Chatterbox Turbo وسومًا مثل [laugh] و[sigh]، ويمكن تطبيق ثمانية مؤثرات معالجة لاحقة من مكتبة pedalboard التابعة لـ Spotify بعد التوليد.',
          '**النصوص الطويلة والقصص.** تُقسَّم النصوص الطويلة عند حدود الجمل وتُدمج بتلاشٍ متداخل حتى 50,000 حرف، ويرتب خط زمني متعدد المسارات عدة أصوات في قصة.',
          '**الإملاء والتسجيلات.** اختصار عام ينسخ بواسطة Whisper أو Whisper Turbo ويلصق في الحقل النشط على macOS؛ ويُحتفظ بكل تسجيل في تبويب Captures مع نصه المنسوخ.',
          '**الوكلاء وواجهة API.** واجهة REST API محلية على المنفذ 17493 وخادم MCP بأربع أدوات يتيحان لـ Claude Code وCursor وWindsurf وCline التحدث بصوت مرتبط بكل عميل.',
        ],
        note: 'يسرد README اللصق التلقائي على Windows وLinux والنسخ المتدفق ومحركات إضافية لتحويل الكلام إلى نص بوصفها بنودًا في خارطة الطريق، لا ميزات صدرت.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'الخطط',
        content: [
          '**التطبيق المحلي مجاني وبلا حساب، وتسرد صفحة الأسعار خطتي Cloud وStudio المدفوعتين وكلتاهما موسومة «coming soon».** كل الأرقام هي أسعار الدولار الأمريكي في صفحة الأسعار، التي تقول إنها ليست نهائية.',
        ],
        columns: ['الخطة', 'ما تذكره صفحة الأسعار'],
        rows: [
          {
            'الخطة': 'Local',
            'ما تذكره صفحة الأسعار': '0 $، بلا حساب: استنساخ الصوت عبر كل المحركات، والإملاء والتسجيلات، وتكامل MCP والوكلاء، والشخصيات، وتوليد محلي بلا حد',
          },
          {
            'الخطة': 'Cloud',
            'ما تذكره صفحة الأسعار': '12 $ سنويًا عند الإطلاق: نسخ احتياطي ومزامنة مشفّران من طرف إلى طرف، وتخزين 25 GB، وحتى 5 أجهزة، وسجل إصدارات لمدة 30 يومًا',
          },
          {
            'الخطة': 'Studio',
            'ما تذكره صفحة الأسعار': '48 $ سنويًا، وموسومة كقيمة مؤقتة: Cloud إضافة إلى تخزين 250 GB، وأجهزة بلا حد، وسجل إصدارات لمدة سنة، ودعم ذي أولوية',
          },
        ],
        note: 'الأرقام كما ظهرت في 26 أكتوبر 2026؛ ولم نتحقق من أي عملة أخرى أو أسعار إقليمية، والضرائب غير مشمولة.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**تقول سياسة الخصوصية، المحدّثة آخر مرة في 6 يوليو 2026، إن تطبيق سطح المكتب لا يرسل تسجيلاتك ولا ملفات الأصوات ولا النصوص المنسوخة ولا ما تولّده ولا إعداداتك إلى الجهة المشغّلة، ولا تصف أي قياس عن بُعد (telemetry) أو تحليلات للتطبيق.** ويضيف الموقع أن النماذج والصوت والنصوص المنسوخة ومخرجات النموذج اللغوي لا تغادر الجهاز، وأن واجهة API المحلية تستمع افتراضيًا على 127.0.0.1.',
          'يوصف النسخ الاحتياطي السحابي الاختياري بأنه مشفّر من طرف إلى طرف على جهازك قبل الرفع، فلا ترى الخوادم سوى البريد الإلكتروني للحساب وأعداد الكائنات وأحجامها ودوال التجزئة وعدّادات المزامنة والطوابع الزمنية. وتغطي السياسة أيضًا ميزة Voice ID التي تخزّن بصمة صوتية مشفّرة، وتحذّر من أن المقاطع المنشورة عامة؛ وتتم المدفوعات عبر Stripe أو بالعملات المشفّرة. ويذكر الموقع خيار «Local or Remote» للاتصال بخلفية على جهاز آخر، ولا يوفّق بينه وبين عبارة «entirely on your machine».',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات من الجهة المطورة وليست نتائج تدقيق. الشيفرة عامة بترخيص MIT، لكن PromptQuorum لم تقرأها ولم تفحص حركة الشبكة الخاصة بالتطبيق، ولا تتناول السياسة تحليلات الموقع.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**جودة الصوت والسرعة.** لم تستمع PromptQuorum إلى المخرجات ولم تقِس عوامل الزمن الفعلي ولم تختبر دقة الاستنساخ على أي محرك.',
          '**تراخيص النماذج.** يغطي ترخيص MIT شيفرة Voicebox؛ ولكل نموذج كلام شروطه الخاصة، وتصف ملاحظة إيداع حديث محرك OmniVoice المضاف حديثًا بأن أوزانه غير مخصصة للاستخدام التجاري. ولم نتحقق من ترخيص أي نموذج.',
          '**عدد المحركات.** يسرد README ثمانية محركات منها Qwen VoiceDesign، بينما يسرد الموقع سبعة؛ ولا نعرف أيهما الحالي.',
          '**وتيرة الإصدارات.** أحدث إصدار موسوم يعود إلى أبريل 2026 رغم أن الفرع الرئيسي تغيّر في أكتوبر، لذا ليس واضحًا هل تتضمن المثبّتات أحدث المحركات.',
          '**توقيع المثبّتات.** لم نتحقق مما إذا كانت مثبّتات macOS وWindows موثّقة أو موقّعة بشهادة مطوّر.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          {
            'التطبيق': '[XTTS v2](/ar/power-local-llm/xtts-v2-review)',
            'المنصات': 'macOS وWindows وLinux',
            'السعر / الرخصة': 'مجاني / CPML',
            'الفرق الأبرز': 'نموذج استنساخ واحد يُستخدم كمكتبة، بلا تطبيق ولا إملاء ولا ميزات للوكلاء',
          },
          {
            'التطبيق': '[Coqui TTS](/ar/power-local-llm/coqui-tts-review)',
            'المنصات': 'macOS وWindows وLinux',
            'السعر / الرخصة': 'مجاني / MPL 2.0',
            'الفرق الأبرز': 'أدوات Python لتشغيل نماذج تحويل النص إلى كلام من الشيفرة لا استوديو لسطح المكتب',
          },
          {
            'التطبيق': '[Handy](/ar/power-local-llm/handy-review)',
            'المنصات': 'macOS وWindows وLinux',
            'السعر / الرخصة': 'مجاني / MIT',
            'الفرق الأبرز': 'إملاء فقط: بلا توليد كلام ولا استنساخ صوت ولا إخراج صوتي للوكلاء',
          },
          {
            'التطبيق': '[OpenWhispr](/ar/power-local-llm/openwhispr-review)',
            'المنصات': 'macOS وWindows وLinux وiOS',
            'السعر / الرخصة': 'مجاني جزئيًا / MIT',
            'الفرق الأبرز': 'إملاء وملاحظات اجتماعات بنماذج محلية أو سحابية، وبلا تحويل نص إلى كلام',
          },
        ],
        note: 'هذه تطبيقات من الفئة نفسها في دليل PromptQuorum؛ تحقق من السعر والرخصة والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'بأي محرك أبدأ؟',
            a: 'يصف README نموذج Kokoro بأنه نموذج صغير من 82 مليون معامل بـ 50 صوتًا جاهزًا واستخدام سريع على المعالج، ويصف Chatterbox Multilingual بأنه الأوسع لغةً، لذا فحالة الحاسوب الذي يعتمد على المعالج فقط هي حالة Kokoro. ولم نقارن جودة المخرجات.',
          },
          {
            q: 'هل يستطيع وكيل ذكاء اصطناعي التحدث حقًا من خلاله؟',
            a: 'يقول README إن أي وكيل يدعم MCP يستطيع استدعاء أداة speak مع ربط صوت لكل عميل يُضبط في الإعدادات، وتغطي نقطة HTTP بسيطة الأدوات التي لا تدعم MCP. ويظهر شريط على الشاشة كلما تحدث وكيل.',
          },
          {
            q: 'هل يعمل الإملاء على Windows وLinux؟',
            a: 'يُوصف الإملاء وتبويب Captures على كل المنصات، لكن README يسرد اللصق التلقائي على Windows وLinux ضمن خارطة الطريق، لذا لا يتأكد سوى اللصق في الحقل النشط على macOS.',
          },
          {
            q: 'ماذا يفعل النموذج اللغوي المرفق؟',
            a: 'ينظّف نموذج Qwen3 محلي كلمات الحشو في النصوص المنسوخة ويعيد صياغة النص بشخصية ملف الصوت قبل نطقه؛ ويذكر README ثلاثة أحجام: 0.6B و1.7B و4B.',
          },
          {
            q: 'هل Voicebox Cloud متاح؟',
            a: 'لا: يعرض الموقع Cloud بوصفه «coming soon» مع رابط للإشعار، وتقول صفحة الأسعار إن أسعاره وحدوده ليست نهائية. والتطبيق المحلي لا يحتاج إليه.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'Voicebox طريقة نشطة التطوير وبترخيص MIT لاستنساخ الأصوات وتوليد الكلام والإملاء على حاسوبك، مع واجهة API وخادم MCP يتيحان للوكلاء التحدث. وعبارات الخصوصية قوية للتطبيق المحلي المجاني، لكنها ادعاءات من الجهة المطورة، وآخر إصدار موسوم يعود إلى أبريل بينما استمرت الشيفرة في التغير حتى أكتوبر، ويحتاج Linux إلى بناء من الشيفرة المصدرية، ولا يتأكد اللصق التلقائي إلا على macOS. يناسب المبدعين والمطورين الذين يريدون أداة صوتية محلية مجانية واحدة ولا يمانعون تنزيل عدة نماذج كبيرة؛ ومن يحتاج إلى جودة صوت مثبتة أو وضوح في الاستخدام التجاري لكل نموذج أو تثبيتًا متقنًا على Linux فعليه أن يجرّبه وأن يقرأ ترخيص كل نموذج أولًا.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Voicebox](https://voicebox.sh) — الوصف والمحركات واللغات والتنزيلات.',
          '[أسعار Voicebox](https://voicebox.sh/pricing) — الخطط Local وCloud وStudio.',
          '[Voicebox Cloud](https://voicebox.sh/cloud) — الحالة ووصف التشفير.',
          '[سياسة خصوصية Voicebox](https://voicebox.sh/privacy) — معالجة البيانات، حُدّثت في 6 يوليو 2026.',
          '[توثيق Voicebox](https://docs.voicebox.sh) — المنصات ومسار Docker.',
          '[Voicebox على GitHub](https://github.com/jamiepine/voicebox) — README وترخيص MIT وتفاصيل API وMCP.',
          '[إصدارات Voicebox](https://github.com/jamiepine/voicebox/releases) — الإصدار 0.5.0 وملفات التثبيت وملاحظات الإصدار.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة XTTS v2](/ar/power-local-llm/xtts-v2-review) — نموذج استنساخ صوت يعمل محليًا كمكتبة.',
          '[مراجعة Handy](/ar/power-local-llm/handy-review) — تطبيق إملاء مجاني بترخيص MIT يعمل بالضغط للتحدث.',
          '[مراجعة OpenWhispr](/ar/power-local-llm/openwhispr-review) — إملاء وملاحظات اجتماعات بنماذج كلام محلية أو سحابية.',
          '[مراجعة Whisper.cpp](/ar/power-local-llm/whisper-cpp-review) — نسخة C++ من Whisper تعتمد عليها أدوات إملاء محلية كثيرة.',
          '[مقارنة أدوات الصوت والكلام](/ar/power-local-llm/local-llm-voice-audio-compared) — مقارنة الفئة التي تنتمي إليها هذه المراجعة.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
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
    heroImage: '/images/voicebox-review-hero-zh.webp',
    title: 'Voicebox 评测：开源本地语音工作室',
    seoTitle: 'Voicebox 评测：免费开源的本地声音克隆与语音听写应用',
    intro: 'Voicebox 是一款开源桌面应用：可克隆声音，用多个本地引擎把文字转成语音，用 Whisper 在任何应用中听写，还能让 AI 代理通过 MCP 服务器开口说话。据其介绍，一切都在你自己的电脑上运行，下载免费。本评测基于官网、隐私政策、定价页、文档和 GitHub 仓库（2026年10月26日查阅）；PromptQuorum 没有实际测试过这款应用。',
    metaDescription: 'Voicebox 评测：MIT 许可的本地语音工作室，支持 Mac 和 Windows，含声音克隆、文字转语音、Whisper 听写和 MCP 服务器。未经实测，来源已核对。',
    twitterDescription: '声音克隆、文字转语音和语音听写集于一体，免费、MIT 许可、本地运行的桌面应用。来源对引擎、隐私和安装包能确认什么、不能确认什么。',
    audience: '想用本地声音克隆、文字转语音和语音听写的创作者、开发者和无障碍用户，需要了解来源能确认什么、应用会下载什么，以及哪些功能尚未推出。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Voicebox 评测',
    targetKeywords: [
      'voicebox 评测',
      'voicebox 声音克隆',
      'elevenlabs 开源替代',
      '本地声音克隆应用',
      '开源文字转语音桌面应用',
      'wispr flow 开源替代',
      'voicebox.sh',
    ],
    current_models_mentioned: ['Qwen3-TTS', 'Chatterbox', 'Kokoro', 'Whisper'],
    current_hardware_mentioned: ['Apple silicon', 'NVIDIA GPU'],
    leadAnswerBlock: '**Voicebox（版本 0.5.0）是一款 MIT 许可的桌面应用，集声音克隆、文字转语音和 Whisper 听写于一体；来源称它把你的录音、声音档案和转写文本保留在你自己的电脑上。** 它还运行本地 API 和 MCP 服务器，让 AI 代理用克隆的声音说话；本文所有说法均来自开发方的官网、文档和 GitHub 仓库。',
    quickAnswerTop: {
      zh: {
        question: 'Voicebox 会把我的语音数据留在本机吗？',
        answer: '默认会：隐私政策称，桌面应用不会向运营方传输你的录音、声音档案、转写文本、生成内容或设置。可选的端到端加密云备份已宣布，但尚未推出。',
        bullets: [
          '用一小段参考音频克隆声音，并可在多个本地文字转语音引擎中选择来生成语音。',
          '全局快捷键用 Whisper 向当前输入框听写，可选用本地语言模型整理文字。',
          '故事编辑器可在多轨时间线上编排多个声音。',
          'REST API 和 MCP 服务器让 Claude Code、Cursor 等代理用你选定的声音说话。',
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
        label: 'Voicebox 是什么？',
        anchor: 'what-is-voicebox',
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
        label: '来源已证实的功能',
        anchor: 'key-features',
      },
      {
        label: '套餐',
        anchor: 'plans',
      },
      {
        label: '数据流向与隐私',
        anchor: 'privacy',
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
            text: 'Voicebox 是一款开源桌面应用，可克隆声音、用本地引擎生成语音、用 Whisper 听写，并通过 MCP 服务器让 AI 代理开口说话。',
          },
          {
            type: 'plain-terms',
            text: '可以把它想成一个录音棚加一个语音键盘合二为一的程序，一切在你自己的机器上运行，而不是依赖订阅服务。',
          },
        ],
        items: [
          '维护情况：主分支最近一次更改在 2026年10月7日，因此不适用停更警告；最新的带标签发布版本 0.5.0 发布于 2026年4月25日。',
          '费用：本地应用免费；可选的付费云备份已宣布，但尚未发布。',
          '引擎：README 列出八个文字转语音引擎，转写使用 Whisper。',
          '平台：提供 macOS 和 Windows 安装包；Linux 需要从源码构建。',
          '运营方：Spacedrive Technology Inc.；代码以 MIT 许可开源。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 [voicebox.sh](https://voicebox.sh)、隐私政策、文档和 GitHub 仓库（2026年10月26日查阅）。PromptQuorum 没有安装或计时测试这款应用，因此未评估语音质量和速度。',
          },
        ],
      },
      overview: {
        id: 'what-is-voicebox',
        title: 'Voicebox 是什么？',
        content: [
          '**Voicebox 是一个本地优先的语音工作室，覆盖语音的两个方向：它用克隆或预设的声音把文字朗读出来，也能听你说话、转写并粘贴。** README 称它是把 ElevenLabs 和 WisprFlow 的免费开源替代品合为一体的应用，官网则称它完全在你的机器上运行。',
          '**该应用以 Tauri（Rust）围绕 Python FastAPI 后端构建，官网将 Spacedrive Technology Inc. 列为运营方。** 版本 0.5.0 在发布说明中被称为“Capture release”，新增了听写、声音个性和 MCP 服务器。官网上显示的“v0.2.0”是演示截图里的标签，不是发布版本号。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Voicebox 提供 macOS 和 Windows 下载；Linux 没有预编译的二进制文件，必须从源码构建，README 还给出了 Docker 方式。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          {
            '选项': 'macOS',
            '获取方式': '.dmg（Apple silicon、Intel）：[voicebox.sh/download](https://voicebox.sh/download)',
          },
          {
            '选项': 'Windows',
            '获取方式': '.msi 或 .exe 安装程序（x64）：[voicebox.sh/download](https://voicebox.sh/download)',
          },
          {
            '选项': 'Linux',
            '获取方式': '从源码构建：[voicebox.sh/linux-install](https://voicebox.sh/linux-install)',
          },
          {
            '选项': 'Docker',
            '获取方式': '在仓库中运行 `docker compose up`（README）',
          },
          {
            '选项': '官方网站',
            '获取方式': '[voicebox.sh](https://voicebox.sh)',
          },
          {
            '选项': '隐私政策',
            '获取方式': '[voicebox.sh/privacy](https://voicebox.sh/privacy)',
          },
          {
            '选项': '源代码',
            '获取方式': '[github.com/jamiepine/voicebox](https://github.com/jamiepine/voicebox)，MIT 许可证',
          },
        ],
        note: '评测版本：0.5.0，据 [GitHub Releases 页面](https://github.com/jamiepine/voicebox/releases/latest) 于 2026年4月25日发布，该页面列出了 macOS 和 Windows 安装包；主分支最新的更改在 2026年10月7日。套餐见“套餐”一节。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: [
          '**来源没有给出最低内存、磁盘或操作系统版本要求；真正吃资源的是单独下载的语音和语言模型。**',
        ],
        columns: ['项目', '来源说明'],
        rows: [
          {
            '项目': '操作系统',
            '来源说明': '提供 macOS（Apple silicon 和 Intel）与 Windows x64 安装包；Linux 需从源码构建；未给出操作系统最低版本',
          },
          {
            '项目': '硬件加速',
            '来源说明': 'Apple silicon 上用 MLX，NVIDIA 显卡上用 CUDA，Linux 下 AMD 用 ROCm，Windows 上用 DirectML 和 Intel Arc，另有各处都能用但较慢的 CPU 回退',
          },
          {
            '项目': '最轻量的引擎',
            '来源说明': 'LuxTTS 约需 1 GB 显存，Kokoro 是面向快速 CPU 运行的 8200 万参数模型；README 没有给出较大引擎的数值',
          },
          {
            '项目': '模型',
            '来源说明': '引擎、Whisper 各尺寸和内置的 Qwen3 语言模型（0.6B、1.7B 或 4B）都在应用内下载；来源没有给出总下载大小',
          },
          {
            '项目': '权限',
            '来源说明': '快捷键和自动粘贴需要 macOS 的辅助功能和输入监控权限；没有辅助功能权限时，听写仍会保存转写文本，只是粘贴这一步无法使用',
          },
          {
            '项目': '网络',
            '来源说明': '下载模型时需要；官网称之后生成和文字整理都在本机运行',
          },
        ],
        note: '硬件加速后端以 README 所列为准；PromptQuorum 没有检查安装包中实际包含哪些组合。',
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: [
          '**以下内容均来自官网、文档或 README，均未经独立测试。**',
        ],
        items: [
          '**声音克隆与预设。** 用一小段参考音频进行零样本克隆，另可通过 Kokoro 和 Qwen CustomVoice 使用预设声音；README 列出八个引擎和 23 种语言，其中 Chatterbox Multilingual 的语言覆盖最广。',
          '**富有表现力的语音与效果。** Chatterbox Turbo 能读懂 [laugh]、[sigh] 等标签，生成后还可套用 Spotify pedalboard 库的八种后期处理效果。',
          '**长文本与故事。** 长脚本按句子边界切分并交叉淡入淡出，最多 50,000 个字符，多轨时间线可把多个声音编排成一个故事。',
          '**听写与录音记录。** 全局快捷键用 Whisper 或 Whisper Turbo 转写，并在 macOS 上粘贴到当前输入框；每条录音及其转写文本都保存在“Captures”标签页中。',
          '**代理与 API。** 17493 端口上的本地 REST API 和带四个工具的 MCP 服务器，让 Claude Code、Cursor、Windsurf 或 Cline 用绑定到各客户端的声音说话。',
        ],
        note: 'README 将 Windows 和 Linux 上的自动粘贴、流式转写以及更多语音转文字引擎列为路线图项目，而非已发布功能。',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: '套餐',
        content: [
          '**本地应用免费且无需账户，定价页列出的付费 Cloud 和 Studio 套餐均标注为“coming soon”（即将推出）。** 所有数字均为定价页上的美元价格，页面称这些价格并非最终定价。',
        ],
        columns: ['套餐', '定价页所列内容'],
        rows: [
          {
            '套餐': 'Local',
            '定价页所列内容': '$0，无需账户：所有引擎的声音克隆、听写与录音记录、MCP 与代理集成、声音个性、本地生成不限量',
          },
          {
            '套餐': 'Cloud',
            '定价页所列内容': '推出时每年 $12：端到端加密备份与同步、25 GB 存储、最多 5 台设备、30 天版本历史',
          },
          {
            '套餐': 'Studio',
            '定价页所列内容': '每年 $48，标注为占位价格：包含 Cloud，另加 250 GB 存储、设备不限量、一年版本历史、优先支持',
          },
        ],
        note: '数字为 2026年10月26日所见；未核对其他货币或地区价格，且不含税费。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**隐私政策（最近更新于 2026年7月6日）称，桌面应用不会向运营方传输你的录音、声音档案、转写文本、生成内容或设置，并且没有为该应用描述任何遥测或分析。** 官网补充说，模型、音频、转写文本和语言模型输出不会离开本机，本地 API 默认监听 127.0.0.1。',
          '可选的云备份被描述为在上传前于你的设备上进行端到端加密，因此服务器只能看到账户邮箱、对象数量和大小、哈希值、同步计数器和时间戳。政策还涉及一项 Voice ID 功能，它会存储加密的声纹，并提醒发布的音频片段是公开的；付款通过 Stripe 或加密货币完成。官网提到“Local or Remote”选项，可连接到另一台机器上的后端，但它没有说明这与“完全在你的机器上”这一说法如何协调。',
        ],
        callouts: [
          {
            type: 'note',
            text: '以上是开发方的声明，不是审计结果。代码以 MIT 许可公开，但 PromptQuorum 没有阅读代码，也没有检查应用的网络流量，且政策没有涉及网站分析。',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**语音质量和速度。** PromptQuorum 没有试听输出、测量实时率，也没有在任何引擎上测试克隆的准确度。',
          '**模型许可证。** MIT 许可证只涵盖 Voicebox 的代码；每个语音模型有各自的条款，近期一条提交说明称新加入的 OmniVoice 引擎使用非商业权重。我们没有检查任何模型的许可证。',
          '**引擎数量。** README 列出八个引擎（含 Qwen VoiceDesign），而官网列出七个；我们无法判断哪个是最新的。',
          '**发布节奏。** 最新的带标签发布版本是 2026年4月的，而主分支在 10 月仍有更改，因此安装包是否包含最新引擎并不清楚。',
          '**安装包签名。** 未检查 macOS 和 Windows 安装包是否经过公证或代码签名。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          {
            '应用': '[XTTS v2](/zh/power-local-llm/xtts-v2-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / CPML',
            '主要区别': '以库的形式使用的单一克隆模型，没有应用界面、听写或代理功能',
          },
          {
            '应用': '[Coqui TTS](/zh/power-local-llm/coqui-tts-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / MPL 2.0',
            '主要区别': '通过代码运行文字转语音模型的 Python 工具包，而非桌面工作室',
          },
          {
            '应用': '[Handy](/zh/power-local-llm/handy-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '仅限听写：没有语音生成、声音克隆或代理语音输出',
          },
          {
            '应用': '[OpenWhispr](/zh/power-local-llm/openwhispr-review)',
            '平台': 'macOS、Windows、Linux、iOS',
            '价格 / 许可证': '免费增值 / MIT',
            '主要区别': '使用本地或云端模型的听写和会议笔记，没有文字转语音',
          },
        ],
        note: '这些是 PromptQuorum 目录中同类别的应用；请在各应用页面确认其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '我应该先用哪个引擎？',
            a: 'README 将 Kokoro 描述为只有 8200 万参数的小模型，带 50 种预设声音，CPU 运行很快；将 Chatterbox Multilingual 描述为语言覆盖最广的引擎，因此只有 CPU 的机器适合选 Kokoro。我们没有比较输出质量。',
          },
          {
            q: 'AI 代理真的能通过它说话吗？',
            a: 'README 称，任何支持 MCP 的代理都可以调用 speak 工具，并在“设置”中为每个客户端绑定声音；不支持 MCP 的工具可使用普通 HTTP 端点。代理说话时，屏幕上会显示一个提示条。',
          },
          {
            q: '听写在 Windows 和 Linux 上能用吗？',
            a: '听写和 Captures 标签页被描述为适用于所有平台，但 README 将 Windows 和 Linux 上的自动粘贴列为路线图项目，因此只有 macOS 上粘贴到当前输入框得到了确认。',
          },
          {
            q: '内置的语言模型有什么用？',
            a: '本地的 Qwen3 模型会清理转写文本中的口头禅，并在朗读前按声音档案的个性改写文字；README 列出了三种尺寸：0.6B、1.7B 和 4B。',
          },
          {
            q: 'Voicebox Cloud 已经可用了吗？',
            a: '没有：官网将 Cloud 标注为“coming soon”并提供通知链接，定价页称其价格和限额并非最终。本地应用不需要它。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Voicebox 是一款开发活跃、MIT 许可的工具，可在你自己的电脑上克隆声音、生成语音和听写，并提供让代理开口说话的 API 和 MCP 服务器。就免费的本地应用而言，隐私声明相当有力，但它们是开发方的说法；最新的带标签发布版本是 4 月的，而代码一直更新到 10 月，Linux 需要从源码构建，自动粘贴也只在 macOS 上得到确认。适合想要一个免费本地语音工具、并愿意下载多个大型模型的创作者和开发者；需要经证实的语音质量、每个模型的商用许可清晰度或顺畅的 Linux 安装的用户，应先试用并阅读各模型的许可证。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Voicebox 官网](https://voicebox.sh) — 介绍、引擎、语言和下载。',
          '[Voicebox 定价](https://voicebox.sh/pricing) — 本地、Cloud 和 Studio 套餐。',
          '[Voicebox Cloud](https://voicebox.sh/cloud) — 状态和加密说明。',
          '[Voicebox 隐私政策](https://voicebox.sh/privacy) — 数据处理，最近更新于 2026年7月6日。',
          '[Voicebox 文档](https://docs.voicebox.sh) — 平台和 Docker 方式。',
          '[GitHub 上的 Voicebox](https://github.com/jamiepine/voicebox) — README、MIT 许可证、API 和 MCP 详情。',
          '[Voicebox 发布页](https://github.com/jamiepine/voicebox/releases) — 版本 0.5.0、安装包文件和发布说明。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[XTTS v2 评测](/zh/power-local-llm/xtts-v2-review) — 以库的形式在本地运行的声音克隆模型。',
          '[Handy 评测](/zh/power-local-llm/handy-review) — 一款免费、MIT 许可的按键说话听写应用。',
          '[OpenWhispr 评测](/zh/power-local-llm/openwhispr-review) — 使用本地或云端语音模型的听写和会议笔记。',
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
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/voicebox-review-hero-ko.webp',
    title: 'Voicebox 리뷰: 오픈소스 로컬 음성 스튜디오',
    seoTitle: 'Voicebox 리뷰: 무료 로컬 음성 복제·받아쓰기',
    intro: 'Voicebox는 음성을 복제하고, 여러 로컬 엔진으로 텍스트를 음성으로 바꾸고, Whisper로 어떤 앱에든 받아쓰고, AI 에이전트가 MCP 서버를 통해 말하게 해 주는 오픈소스 데스크톱 앱입니다. 앱이 설명하는 모든 처리는 내 컴퓨터에서 실행되며 다운로드는 무료입니다. 이 리뷰는 웹사이트, 개인정보 처리방침, 요금 페이지, 문서, GitHub 저장소(2026년 10월 26일 확인)에 근거하며, PromptQuorum은 앱을 직접 사용해 보지 않았습니다.',
    metaDescription: 'Voicebox 리뷰: Mac·Windows용 MIT 라이선스 로컬 음성 스튜디오. 음성 복제, TTS, Whisper 받아쓰기, MCP 서버. 직접 테스트 안 함.',
    twitterDescription: '음성 복제, 텍스트 음성 변환, 받아쓰기를 하나로 묶은 무료 MIT 라이선스 로컬 데스크톱 앱. 엔진, 개인정보, 설치 파일에서 출처가 확인한 것과 확인하지 못한 것.',
    audience: '로컬 음성 복제, 텍스트 음성 변환, 받아쓰기가 필요한 창작자, 개발자, 접근성 사용자 중 출처가 확인한 내용, 앱이 내려받는 항목, 아직 제공되지 않는 기능을 알고 싶은 분.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Voicebox 리뷰',
    targetKeywords: [
      'voicebox 리뷰',
      'voicebox 음성 복제',
      'elevenlabs 오픈소스 대안',
      '로컬 음성 복제 앱',
      '오픈소스 텍스트 음성 변환 데스크톱 앱',
      'wispr flow 오픈소스 대안',
      'voicebox.sh',
    ],
    current_models_mentioned: ['Qwen3-TTS', 'Chatterbox', 'Kokoro', 'Whisper'],
    current_hardware_mentioned: ['Apple silicon', 'NVIDIA GPU'],
    leadAnswerBlock: '**Voicebox(버전 0.5.0)는 음성 복제, 텍스트 음성 변환, Whisper 받아쓰기를 하나로 묶은 MIT 라이선스 데스크톱 앱이며, 출처에 따르면 녹음, 음성 프로필, 받아쓴 텍스트를 내 컴퓨터에 보관합니다.** 로컬 API와 MCP 서버도 실행해 AI 에이전트가 복제된 음성으로 말하게 할 수 있으며, 이 글의 모든 내용은 개발사의 웹사이트, 문서, GitHub 저장소에서 가져왔습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Voicebox는 내 음성 데이터를 내 컴퓨터에 보관합니까?',
        answer: '기본 설정에서는 그렇습니다. 개인정보 처리방침에 따르면 데스크톱 앱은 녹음, 음성 프로필, 받아쓴 텍스트, 생성물, 설정을 운영사로 전송하지 않습니다. 선택 사항인 암호화 Cloud 백업은 발표되었지만 아직 제공되지 않습니다.',
        bullets: [
          '짧은 참조 샘플로 음성을 복제하고, 여러 로컬 텍스트 음성 변환 엔진 중에서 골라 음성을 생성합니다.',
          '전역 단축키로 포커스가 있는 입력란에 Whisper로 받아쓰며, 로컬 언어 모델로 다듬을 수도 있습니다.',
          '스토리 편집기에서 여러 음성을 멀티트랙 타임라인에 배치합니다.',
          'REST API와 MCP 서버로 Claude Code, Cursor 같은 에이전트가 내가 고른 음성으로 말하게 할 수 있습니다.',
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
        label: 'Voicebox란?',
        anchor: 'what-is-voicebox',
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
        label: '출처로 확인된 기능',
        anchor: 'key-features',
      },
      {
        label: '요금제',
        anchor: 'plans',
      },
      {
        label: '데이터 흐름과 개인정보',
        anchor: 'privacy',
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
            text: 'Voicebox는 음성을 복제하고, 로컬 엔진으로 음성을 생성하고, Whisper로 받아쓰고, MCP 서버로 AI 에이전트에게 목소리를 주는 오픈소스 데스크톱 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '녹음 스튜디오와 음성 키보드를 한 프로그램에 담은 것으로, 구독 서비스 대신 모든 처리가 내 컴퓨터에서 실행된다고 생각하시면 됩니다.',
          },
        ],
        items: [
          '유지 관리: 메인 브랜치는 2026년 10월 7일에 마지막으로 바뀌어 방치 프로젝트 경고는 해당되지 않으며, 최신 태그 릴리스인 0.5.0은 2026년 4월 25일에 나왔습니다.',
          '비용: 로컬 앱은 무료이며, 선택 사항인 유료 Cloud 백업은 발표되었지만 아직 출시되지 않았습니다.',
          '엔진: README는 텍스트 음성 변환 엔진 8개와 받아쓰기용 Whisper를 나열합니다.',
          '플랫폼: macOS와 Windows용 설치 파일이 있으며, Linux는 소스에서 직접 빌드해야 합니다.',
          '운영사: Spacedrive Technology Inc.이며, 코드는 MIT 라이선스로 공개되어 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 [voicebox.sh](https://voicebox.sh), 개인정보 처리방침, 문서, GitHub 저장소(2026년 10월 26일 확인)에 근거합니다. PromptQuorum은 앱을 설치하거나 시간을 재 보지 않았으므로 음성 품질과 속도는 평가하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-voicebox',
        title: 'Voicebox란?',
        content: [
          '**Voicebox는 음성의 양방향을 모두 다루는 로컬 우선 음성 스튜디오로, 텍스트를 복제 음성이나 프리셋 음성으로 읽어 주고, 내가 말한 내용을 듣고 받아쓰고 붙여 넣습니다.** README는 이 앱을 ElevenLabs와 WisprFlow를 하나로 합친 무료 오픈소스 대안이라고 소개하며, 웹사이트는 모든 처리가 내 컴퓨터에서 실행된다고 설명합니다.',
          '**앱은 Python FastAPI 백엔드를 중심으로 Tauri(Rust)로 만들어졌고, 웹사이트는 Spacedrive Technology Inc.를 운영사로 밝힙니다.** 릴리스 노트에서 “Capture release”라고 부르는 버전 0.5.0이 받아쓰기, 음성 퍼스널리티, MCP 서버를 추가했습니다. 웹사이트에 보이는 “v0.2.0”은 데모 스크린샷 안의 표시일 뿐 릴리스 번호가 아닙니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Voicebox는 macOS와 Windows용으로 내려받을 수 있습니다. Linux용 빌드 완성본은 없어 소스에서 빌드해야 하며, README에는 Docker 경로도 나와 있습니다.**',
        ],
        columns: ['옵션', '입수 방법'],
        rows: [
          {
            '옵션': 'macOS',
            '입수 방법': '.dmg(Apple silicon, Intel): [voicebox.sh/download](https://voicebox.sh/download)',
          },
          {
            '옵션': 'Windows',
            '입수 방법': '.msi 또는 .exe 설치 파일(x64): [voicebox.sh/download](https://voicebox.sh/download)',
          },
          {
            '옵션': 'Linux',
            '입수 방법': '소스에서 빌드: [voicebox.sh/linux-install](https://voicebox.sh/linux-install)',
          },
          {
            '옵션': 'Docker',
            '입수 방법': '저장소에서 `docker compose up` 실행(README)',
          },
          {
            '옵션': '웹사이트',
            '입수 방법': '[voicebox.sh](https://voicebox.sh)',
          },
          {
            '옵션': '개인정보 처리방침',
            '입수 방법': '[voicebox.sh/privacy](https://voicebox.sh/privacy)',
          },
          {
            '옵션': '소스 코드',
            '입수 방법': '[github.com/jamiepine/voicebox](https://github.com/jamiepine/voicebox), MIT 라이선스',
          },
        ],
        note: '확인한 버전: 0.5.0. [GitHub Releases 페이지](https://github.com/jamiepine/voicebox/releases/latest)에 따르면 2026년 4월 25일에 공개되었고, macOS와 Windows 설치 파일이 그곳에 나열되어 있습니다. 메인 브랜치의 가장 최근 변경은 2026년 10월 7일입니다. 요금제는 요금제 항목에서 다룹니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: [
          '**출처에는 최소 RAM, 디스크, 운영체제 버전이 명시되어 있지 않으며, 부담이 큰 부분은 별도로 내려받는 음성 모델과 언어 모델입니다.**',
        ],
        columns: ['항목', '출처의 설명'],
        rows: [
          {
            '항목': '운영체제',
            '출처의 설명': 'macOS(Apple silicon, Intel)와 Windows x64용 설치 파일, Linux는 소스 빌드이며, 운영체제 최소 버전은 제시되지 않습니다',
          },
          {
            '항목': '가속',
            '출처의 설명': 'Apple silicon의 MLX, NVIDIA GPU의 CUDA, Linux의 AMD용 ROCm, Windows의 DirectML, Intel Arc, 그리고 어디서나 작동하지만 더 느린 CPU 대체 경로',
          },
          {
            '항목': '가장 가벼운 엔진',
            '출처의 설명': 'LuxTTS는 VRAM 약 1 GB가 필요하고 Kokoro는 빠른 CPU 사용을 겨냥한 8,200만 파라미터 모델이며, README는 더 큰 엔진의 수치를 제시하지 않습니다',
          },
          {
            '항목': '모델',
            '출처의 설명': '엔진, Whisper 크기, 번들된 Qwen3 언어 모델(0.6B, 1.7B, 4B)은 앱 안에서 내려받으며, 총 다운로드 크기는 출처에 없습니다',
          },
          {
            '항목': '권한',
            '출처의 설명': '단축키와 자동 붙여 넣기에는 macOS 손쉬운 사용과 입력 모니터링 권한이 필요하며, 손쉬운 사용 권한이 없으면 받아쓴 텍스트는 저장되고 붙여 넣기 단계만 꺼집니다',
          },
          {
            '항목': '인터넷',
            '출처의 설명': '모델 내려받기에 필요하며, 웹사이트에 따르면 그 뒤 생성과 다듬기는 기기에서 실행됩니다',
          },
        ],
        note: '가속 백엔드는 README에 나열된 대로이며, 설치 파일에 어떤 조합이 포함되는지는 PromptQuorum이 확인하지 않았습니다.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 웹사이트, 문서 또는 README에서 가져왔으며, 어느 것도 독자적으로 테스트하지 않았습니다.**',
        ],
        items: [
          '**음성 복제와 프리셋.** 짧은 참조 샘플로 하는 제로샷 복제와 함께 Kokoro 및 Qwen CustomVoice의 프리셋 음성이 있으며, README는 엔진 8개와 언어 23개를 꼽고 Chatterbox Multilingual이 가장 폭넓게 지원한다고 밝힙니다.',
          '**표현력 있는 음성과 효과.** Chatterbox Turbo는 [laugh], [sigh] 같은 태그를 읽고, Spotify의 pedalboard 라이브러리가 제공하는 후처리 효과 8가지를 생성 뒤에 적용할 수 있습니다.',
          '**긴 텍스트와 스토리.** 긴 스크립트는 문장 경계에서 나뉘어 크로스페이드로 이어지며 최대 50,000자까지 가능하고, 멀티트랙 타임라인에서 여러 음성을 하나의 스토리로 배치합니다.',
          '**받아쓰기와 캡처.** 전역 단축키가 Whisper 또는 Whisper Turbo로 받아쓰고 macOS에서는 포커스가 있는 입력란에 붙여 넣으며, 모든 녹음은 받아쓴 텍스트와 함께 Captures 탭에 보관됩니다.',
          '**에이전트와 API.** 포트 17493의 로컬 REST API와 도구 4개를 갖춘 MCP 서버로 Claude Code, Cursor, Windsurf, Cline이 각 클라이언트에 연결된 음성으로 말할 수 있습니다.',
        ],
        note: 'README는 Windows·Linux의 자동 붙여 넣기, 스트리밍 받아쓰기, 추가 음성 인식 엔진을 로드맵 항목으로 나열하며, 출시된 기능으로 보지 않습니다.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: '요금제',
        content: [
          '**로컬 앱은 계정 없이 무료이며, 요금 페이지에는 유료 Cloud와 Studio 요금제가 나열되어 있지만 둘 다 “coming soon”으로 표시되어 있습니다.** 모든 수치는 요금 페이지에 표시된 미국 달러 가격이며, 페이지는 이 수치가 확정이 아니라고 밝힙니다.',
        ],
        columns: ['요금제', '요금 페이지의 기재 내용'],
        rows: [
          {
            '요금제': 'Local',
            '요금 페이지의 기재 내용': '$0, 계정 불필요: 모든 엔진의 음성 복제, 받아쓰기와 캡처, MCP·에이전트 연동, 퍼스널리티, 로컬 생성 무제한',
          },
          {
            '요금제': 'Cloud',
            '요금 페이지의 기재 내용': '출시 시 연 $12: 종단 간 암호화 백업·동기화, 저장 공간 25 GB, 최대 5대 기기, 30일 버전 기록',
          },
          {
            '요금제': 'Studio',
            '요금 페이지의 기재 내용': '연 $48, 자리 표시자로 표시됨: Cloud에 더해 저장 공간 250 GB, 기기 무제한, 1년 버전 기록, 우선 지원',
          },
        ],
        note: '2026년 10월 26일에 표시된 수치이며, 다른 통화나 지역별 가격은 확인하지 않았고 세금은 포함되지 않습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**2026년 7월 6일에 갱신된 개인정보 처리방침은 데스크톱 앱이 녹음, 음성 프로필, 받아쓴 텍스트, 생성물, 설정을 운영사로 전송하지 않는다고 밝히며, 앱에 텔레메트리나 분석이 있다는 설명은 없습니다.** 웹사이트는 모델, 오디오, 받아쓴 텍스트, 언어 모델 출력이 기기를 떠나지 않으며 로컬 API는 기본적으로 127.0.0.1에서 수신 대기한다고 덧붙입니다.',
          '선택 사항인 Cloud 백업은 업로드 전에 내 기기에서 종단 간 암호화된다고 설명되어, 서버에는 계정 이메일, 객체 수와 크기, 해시, 동기화 카운터, 타임스탬프만 보입니다. 방침은 암호화된 성문을 저장하는 Voice ID 기능과 게시된 클립은 공개된다는 경고도 다루며, 결제는 Stripe 또는 암호화폐로 이루어집니다. 웹사이트는 다른 기기의 백엔드에 연결하는 “Local or Remote” 옵션을 언급하는데, “모든 처리가 내 컴퓨터에서 실행된다”는 표현과 어떻게 맞는지는 설명하지 않습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발사의 선언일 뿐 감사 결과가 아닙니다. 코드는 MIT 라이선스로 공개되어 있지만 PromptQuorum은 코드를 읽거나 앱의 네트워크 트래픽을 검사하지 않았으며, 방침은 웹사이트 분석을 다루지 않습니다.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**음성 품질과 속도.** PromptQuorum은 출력을 들어 보지 않았고, 실시간 계수를 측정하지 않았으며, 어떤 엔진의 복제 정확도도 테스트하지 않았습니다.',
          '**모델 라이선스.** MIT 라이선스는 Voicebox의 코드에 적용되며, 각 음성 모델에는 자체 약관이 있습니다. 최근 커밋 메모는 새로 추가된 OmniVoice 엔진의 가중치가 비상업용이라고 설명하지만, 저희는 어떤 모델 라이선스도 확인하지 않았습니다.',
          '**엔진 수.** README는 Qwen VoiceDesign을 포함해 엔진 8개를 나열하고 웹사이트는 7개를 나열하는데, 어느 쪽이 최신인지 알 수 없습니다.',
          '**릴리스 주기.** 최신 태그 릴리스는 2026년 4월 것인데 메인 브랜치는 10월에도 바뀌었으므로, 설치 파일에 최신 엔진이 포함되는지는 분명하지 않습니다.',
          '**설치 파일 서명.** macOS와 Windows 설치 파일이 공증되었는지, 코드 서명되었는지는 확인하지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이점'],
        rows: [
          {
            '앱': '[XTTS v2](/ko/power-local-llm/xtts-v2-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / CPML',
            '핵심 차이점': '라이브러리로 쓰는 단일 복제 모델이며, 앱, 받아쓰기, 에이전트 기능이 없습니다',
          },
          {
            '앱': '[Coqui TTS](/ko/power-local-llm/coqui-tts-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / MPL 2.0',
            '핵심 차이점': '데스크톱 스튜디오가 아니라 코드로 텍스트 음성 변환 모델을 실행하는 Python 툴킷입니다',
          },
          {
            '앱': '[Handy](/ko/power-local-llm/handy-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이점': '받아쓰기 전용이며 음성 생성, 음성 복제, 에이전트 음성 출력이 없습니다',
          },
          {
            '앱': '[OpenWhispr](/ko/power-local-llm/openwhispr-review)',
            '플랫폼': 'macOS, Windows, Linux, iOS',
            '가격 / 라이선스': '프리미엄 / MIT',
            '핵심 차이점': '로컬 또는 클라우드 모델로 받아쓰기와 회의 노트를 제공하며 텍스트 음성 변환은 없습니다',
          },
        ],
        note: '모두 PromptQuorum 디렉터리의 같은 카테고리 앱입니다. 현재 가격, 라이선스, 플랫폼은 각 앱의 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '어떤 엔진으로 시작해야 합니까?',
            a: 'README는 Kokoro를 프리셋 음성 50개를 갖추고 CPU에서 빠르게 동작하는 8,200만 파라미터의 작은 모델로, Chatterbox Multilingual을 언어 지원이 가장 넓은 모델로 설명하므로, CPU만 있는 컴퓨터라면 Kokoro가 해당합니다. 출력 품질은 비교하지 않았습니다.',
          },
          {
            q: 'AI 에이전트가 정말 이 앱으로 말할 수 있습니까?',
            a: 'README에 따르면 MCP를 지원하는 에이전트는 모두 speak 도구를 호출할 수 있고 설정에서 클라이언트별로 음성을 지정하며, MCP를 지원하지 않는 도구는 일반 HTTP 엔드포인트를 쓸 수 있습니다. 에이전트가 말할 때마다 화면에 알림 표시가 나타납니다.',
          },
          {
            q: 'Windows와 Linux에서도 받아쓰기가 됩니까?',
            a: '받아쓰기와 Captures 탭은 모든 플랫폼용으로 설명되어 있지만, README는 Windows와 Linux의 자동 붙여 넣기를 로드맵 항목으로 나열하므로 포커스가 있는 입력란에 붙여 넣는 기능은 macOS에서만 확인됩니다.',
          },
          {
            q: '번들된 언어 모델은 무슨 일을 합니까?',
            a: '로컬 Qwen3 모델이 받아쓴 텍스트에서 군더더기 말을 정리하고, 음성이 재생되기 전에 음성 프로필의 퍼스널리티에 맞춰 텍스트를 다시 씁니다. README는 0.6B, 1.7B, 4B의 세 가지 크기를 언급합니다.',
          },
          {
            q: 'Voicebox Cloud는 이용할 수 있습니까?',
            a: '아니요. 웹사이트는 Cloud를 알림 링크와 함께 “coming soon”으로 표시하고, 요금 페이지는 가격과 한도가 확정이 아니라고 밝힙니다. 로컬 앱에는 Cloud가 필요하지 않습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'Voicebox는 활발히 개발되는 MIT 라이선스 앱으로, 내 컴퓨터에서 음성을 복제하고, 음성을 생성하고, 받아쓸 수 있으며, API와 MCP 서버로 에이전트가 말하게 할 수 있습니다. 무료 로컬 앱에 대한 개인정보 선언은 강하지만 개발사의 주장이며, 마지막 태그 릴리스는 4월 것인데 코드는 10월까지 계속 바뀌었고, Linux는 소스 빌드가 필요하며, 자동 붙여 넣기는 macOS에서만 확인됩니다. 무료 로컬 음성 도구 하나를 원하고 큰 모델 여러 개를 내려받을 의향이 있는 창작자와 개발자에게 적합합니다. 검증된 음성 품질, 모델별 상업적 이용의 명확성, 매끄러운 Linux 설치가 필요한 분은 먼저 직접 써 보고 각 모델의 라이선스를 읽어 보십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Voicebox 웹사이트](https://voicebox.sh) — 소개, 엔진, 언어, 다운로드.',
          '[Voicebox 요금](https://voicebox.sh/pricing) — 로컬, Cloud, Studio 요금제.',
          '[Voicebox Cloud](https://voicebox.sh/cloud) — 상태와 암호화 설명.',
          '[Voicebox 개인정보 처리방침](https://voicebox.sh/privacy) — 데이터 처리. 2026년 7월 6일 갱신.',
          '[Voicebox 문서](https://docs.voicebox.sh) — 플랫폼과 Docker 경로.',
          '[GitHub의 Voicebox](https://github.com/jamiepine/voicebox) — README, MIT 라이선스, API와 MCP 상세.',
          '[Voicebox 릴리스](https://github.com/jamiepine/voicebox/releases) — 버전 0.5.0, 설치 파일, 릴리스 노트.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[XTTS v2 리뷰](/ko/power-local-llm/xtts-v2-review) — 라이브러리로 로컬에서 실행되는 음성 복제 모델.',
          '[Handy 리뷰](/ko/power-local-llm/handy-review) — MIT 라이선스 무료 푸시투토크 받아쓰기 앱.',
          '[OpenWhispr 리뷰](/ko/power-local-llm/openwhispr-review) — 로컬 또는 클라우드 음성 모델로 받아쓰기와 회의 노트를 제공하는 앱.',
          '[Whisper.cpp 리뷰](/ko/power-local-llm/whisper-cpp-review) — 많은 로컬 받아쓰기 도구의 기반이 되는 Whisper의 C++ 포트.',
          '[음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 이 리뷰가 속한 카테고리 비교.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
        ],
      },
    },
  },
}
