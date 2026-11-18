// YoVoice Review: local text-to-speech, voice cloning and AI music studio (macOS, Windows, Linux) with CLI, HTTP API and MCP server
// Slug: yovoice-review
// Companion to: voicebox-review, xtts-v2-review, coqui-tts-review, bark-tts-review, local-llm-voice-audio-compared
// Sources (all read 2026-11-17, no hands-on testing): yovoice.leemysw.com (EN page, community page, community terms effective 2026-11-12), github.com/leemysw/yovoice
// (README, Apache-2.0 LICENSE, docs/models.md, ai.md, api.md, cli.md, architecture.md, CHANGELOG.md, GitHub API), Release v0.8.0 (2026-11-15).
// Last upstream update 2026-11-17 (last commit; latest release 2026-11-15) => no stale warning. The request came from the site owner, not from the maker.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-17',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/yovoice-review-hero-en.webp',
    title: 'YoVoice Review: Local Voice Cloning and Music Studio',
    seoTitle: 'YoVoice Review: Free Local Voice Cloning and AI Music',
    intro: 'YoVoice (written "yovoice" by its maker) is an open-source desktop studio that generates speech, clones and designs voices, and writes songs and scores with models running on your own computer. It also offers a command line, an HTTP API and an MCP server for AI agents, and the app is free under the Apache-2.0 license. This review is based on the website, the GitHub repository, its documentation and the release page, checked on 17 November 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription: 'YoVoice review: free Apache-2.0 local studio for text-to-speech, voice cloning and AI music on Mac, Windows and Linux, with CLI and MCP. Not tested.',
    twitterDescription: 'Speech, voice cloning and AI music in one free, Apache-2.0 desktop studio that runs on your computer, plus a CLI and MCP server. What the sources confirm about privacy, model licenses and maturity, and what they do not.',
    audience: 'Creators, developers and agent builders who want local text-to-speech, voice cloning and AI music and need to know what the sources confirm, what the app downloads and where model licenses limit use.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'YoVoice review',
    targetKeywords: [
      'yovoice review',
      'yovoice voice cloning',
      'local voice cloning app',
      'open source ai music generator offline',
      'elevenlabs alternative open source',
      'local text to speech mcp server',
      'yovoice.leemysw.com',
      'is yovoice free',
    ],
    current_models_mentioned: [
      'IndexTTS',
      'Qwen3-TTS',
      'XTTS v2',
      'Kokoro',
      'ACE-Step',
    ],
    current_hardware_mentioned: [
      'Apple silicon',
      'NVIDIA GPU',
    ],
    leadAnswerBlock: '**YoVoice (version 0.8.0) is an Apache-2.0 desktop studio that combines text-to-speech, voice cloning, AI song generation and score writing, and its maker says generation runs offline on your own computer.** It also ships a CLI, a local HTTP API and an MCP server for agents, and every statement here comes from the maker\'s website, documentation and GitHub repository.',
    quickAnswerTop: {
      en: {
        question: 'Does YoVoice keep my voice data on my computer?',
        answer: 'Per the maker\'s documentation, generation runs on your computer once models are downloaded, and reference voices are stored in a local data folder. Network use is described for model downloads, update checks, an optional AI assistant you connect yourself and optional community sharing.',
        bullets: [
          'Generates speech from text with a choice of local models, designs a voice from a description or clones one from a reference recording.',
          'Writes songs with lyrics and instrumentals, separates songs into stems and arranges multi-track scores exported as MIDI and stems.',
          'Dubs stories line by line with a different voice per character and turns audio or video into subtitle files.',
          'A CLI, a local HTTP API and an MCP server let agents such as Claude Code and Cursor generate audio.',
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
        label: 'What Is YoVoice?',
        anchor: 'what-is-yovoice',
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
        label: 'Cost',
        anchor: 'plans',
      },
      {
        label: 'Data Flow and Privacy',
        anchor: 'privacy',
      },
      {
        label: 'Voice Cloning, Consent and Model Licenses',
        anchor: 'voice-rights',
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
            text: 'YoVoice is an open-source desktop studio that turns text into speech, clones and designs voices, generates songs and scores with local models and gives AI agents a CLI, an API and an MCP server.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a voice booth and a small music studio in one program, with the work done on your own machine instead of a subscription service.',
          },
        ],
        items: [
          'Maintenance: the main branch last changed on 17 November 2026 and version 0.8.0 was published on 15 November 2026, so no stale-project warning applies.',
          'Cost: free under the Apache-2.0 license, with no paid plan found; many downloadable model weights carry their own terms.',
          'Models: the README says all voice, music and transcription models are downloaded inside the app or with the CLI.',
          'Platforms: installers for macOS, Windows and Linux, plus a standalone CLI archive for each.',
          'Maker: an individual developer, leemysw; no company imprint was found.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on [yovoice.leemysw.com](https://yovoice.leemysw.com), the [GitHub repository](https://github.com/leemysw/yovoice), its documentation and the release page, checked on 17 November 2026. PromptQuorum has not installed or run the app, so voice quality, music quality and speed are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-yovoice',
        title: 'What Is YoVoice?',
        content: [
          '**YoVoice is a local-first audio studio: it turns text into speech, designs or clones a voice, generates songs and instrumentals and arranges multi-track scores, using models you download and run on your own computer.** The README calls it an open-source studio for macOS, Windows and Linux; the project spells its name "yovoice", and its website is Chinese first with an English version.',
          '**The inference engine is audio.cpp, a native C++ engine by ShugoAI, so the README says no Python or Conda setup is needed.** Version 0.8.0 added community song sharing, customizable keyboard shortcuts, six themes and new speech-recognition models, according to the changelog.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**YoVoice is a download for macOS (Apple silicon), Windows and Linux that installs like any other app; a standalone CLI archive is also published, and no terminal is needed for the desktop app.**',
        ],
        columns: [
          'Option',
          'How to get it',
        ],
        rows: [
          {
            Option: 'macOS',
            'How to get it': '.dmg for Apple silicon, macOS 14 or later: [GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            Option: 'Windows',
            'How to get it': 'Setup .exe for x64, with CUDA 12.4 and 13.3 variants: [GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            Option: 'Linux',
            'How to get it': '.deb (Debian/Ubuntu) or .tar.gz for x64: [GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            Option: 'CLI',
            'How to get it': 'Standalone zip per OS: [CLI guide](https://github.com/leemysw/yovoice/blob/main/docs/cli.md)',
          },
          {
            Option: 'Website',
            'How to get it': '[yovoice.leemysw.com](https://yovoice.leemysw.com)',
          },
          {
            Option: 'Privacy policy',
            'How to get it': 'None found; only [community terms](https://yovoice.leemysw.com/en/community/terms/) exist',
          },
          {
            Option: 'Source code',
            'How to get it': '[github.com/leemysw/yovoice](https://github.com/leemysw/yovoice), Apache-2.0 license',
          },
        ],
        note: 'Version reviewed: 0.8.0, published on 15 November 2026 per the [GitHub release page](https://github.com/leemysw/yovoice/releases/tag/v0.8.0); the newest commit on the main branch dates from 17 November 2026. GitHub is only the delivery channel for these installers, and models are downloaded separately inside the app.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**No minimum RAM, VRAM or disk size is stated in the sources; the demanding part is the models, which are downloaded separately and differ widely in size.**',
        ],
        columns: [
          'Item',
          'What the sources say',
        ],
        rows: [
          {
            Item: 'Operating system',
            'What the sources say': 'macOS 14 or later on Apple silicon, Windows 10/11 x64, Linux x64; the Windows installer fetches the WebView2 runtime if needed and Linux needs WebKitGTK 4.1 (the .deb installs it)',
          },
          {
            Item: 'Acceleration',
            'What the sources say': 'Metal on macOS; the Windows CUDA 12.4 and 13.3 installers bundle a runtime for NVIDIA GPUs; Linux runs on the CPU out of the box, with a Vulkan GPU runtime downloadable in Settings',
          },
          {
            Item: 'Memory and VRAM',
            'What the sources say': 'Depends on the model; the docs list file sizes per model, for example IndexTTS 2.5 at 3.50 GB in Q8, and recommend a GPU for Breeze TTS 2',
          },
          {
            Item: 'Models',
            'What the sources say': 'Downloaded inside the app or with the CLI, with pause and resume; the sources give no total download size',
          },
          {
            Item: 'Data folder',
            'What the sources say': '~/.yovoice by default, movable in Settings; uninstalling the app preserves it',
          },
          {
            Item: 'Internet',
            'What the sources say': 'Needed to download models and runtimes; the docs say generation works offline once the engine and a model are installed',
          },
        ],
        note: 'Backends are as listed in the README and CLI guide; PromptQuorum did not check which models run on which backend.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the README, the documentation or the changelog; none has been independently tested.**',
        ],
        items: [
          '**Speech, voice design and cloning.** Clone a voice from a reference recording, design one from a text description and adjust emotion and delivery; the model list includes IndexTTS 2.0 and 2.5, VoxCPM2, Qwen3-TTS, XTTS v2 and Kokoro.',
          '**Story dubbing.** Import text or subtitle files, assign a character to each line and generate line by line, with several takes per line to compare.',
          '**Music and scores.** Songs with lyrics and instrumentals through ACE-Step 1.5 or YuE2, instrumentals and sound effects through Stable Audio 3, six-stem song separation, and General MIDI score arranging with MIDI and stem export.',
          '**Transcription.** Audio or video becomes timed subtitle lines exported as SRT or WebVTT, using models such as Qwen3 ASR and Parakeet.',
          '**Agents and API.** An installable Agent Skill and CLI, an authenticated HTTP API with an MCP endpoint through `yovoice serve`, a Local API inside the desktop app on 127.0.0.1, and an optional assistant panel that works with services such as DeepSeek, Qwen, OpenAI, Anthropic, Ollama and LM Studio.',
          '**Interface.** Twelve interface languages, six themes and editable keyboard shortcuts.',
        ],
        note: 'The AI documentation says its features have not been verified against every listed provider, and the Linux app does not update itself yet.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'Cost',
        content: [
          '**The app costs nothing to download, and neither the website nor the repository lists a paid plan, trial or subscription.**',
        ],
        columns: [
          'Item',
          'What the sources say',
        ],
        rows: [
          {
            Item: 'App',
            'What the sources say': 'Free; only community sharing is described as needing an account',
          },
          {
            Item: 'AI assistant',
            'What the sources say': 'Optional; a pay-as-you-go API or plan from the provider you connect, or a local Ollama or LM Studio service, which usually needs no key',
          },
          {
            Item: 'Models',
            'What the sources say': 'The docs describe downloading models inside the app and mention no fee; licenses differ per model',
          },
        ],
        note: 'No price was listed in any currency; the structured data on the website lists a price of 0 USD for the app.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**The README says generation runs entirely on your own CPU or GPU and that manuscripts, reference voices and creations never leave the computer, and the website repeats "100% offline privacy".** The architecture document adds that apart from model and runtime downloads and community sharing a user starts, the only network use is the AI service you configure; the README separately describes background update checks on macOS and Windows.',
          'The optional assistant sends your typed request and a fixed instruction straight to the provider you choose, and keys are stored in the local database with owner-only permissions. Community sharing, added in 0.8.0, uploads a preview audio file and a project package after you sign in with a leemysw account, and the community terms say sign-in records the terms version, the time and your network address.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maker\'s declarations, not audit results. PromptQuorum has not read the code or inspected the app\'s network traffic, and with no privacy policy to read, these statements come from the README and documentation only.',
          },
        ],
      },
      voiceRights: {
        id: 'voice-rights',
        title: 'Voice Cloning, Consent and Model Licenses',
        content: [
          '**Cloning needs only a reference recording, and the README and documentation pages we read describe no check that the voice belongs to the user, so consent is your responsibility.** The maker\'s community terms forbid sharing a real person\'s voice without consent, including clones of public figures, actors and singers, and impersonation; those terms govern the community, not private use of the app.',
        ],
        items: [
          '**Consent and law.** Whether cloning a voice is lawful depends on the person, the purpose and the country; this review is not legal advice, and PromptQuorum has not assessed any jurisdiction.',
          '**Model licenses differ.** The README says OmniVoice, YuE2, Breeze TTS 2, Voxtral 4B TTS and MuScriptor weights are restricted to non-commercial use, XTTS v2 and Drama 3 use their own Coqui and Fish Audio licenses, IndexTTS models have a separate model license and Stable Audio 3 is free below USD 1M annual revenue under the Stability AI Community License. The Apache-2.0 license covers the app, not those weights.',
          '**Sharing rules.** The community terms require a sharer to state a voice\'s source truthfully (own voice, another person with clear consent, or a synthetic voice) and to choose a non-commercial license for works from models that forbid commercial use.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Output quality and speed.** PromptQuorum did not listen to speech or music, measure generation speed or test cloning accuracy on any model; the website offers audio samples, which we did not evaluate.',
          '**Project maturity.** The repository was created on 15 September 2026 and is published under one developer\'s name, so long-term maintenance is unknown.',
          '**Take retention.** The Unreleased section of the changelog says a fix stops generation from silently deleting older takes after ten versions; we did not check whether version 0.8.0 behaves that way, so keep copies of takes you need.',
          '**Language coverage.** Supported speech languages depend on the model and the sources give no single figure; we tested no language.',
          '**Installer signing.** Whether the macOS and Windows installers are notarized or code-signed was not checked.',
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
            App: '[Voicebox](/power-local-llm/voicebox-review)',
            Platforms: 'macOS, Windows (Linux from source)',
            'Price / license': 'Free / MIT',
            'Key difference': 'Voice cloning, text-to-speech and Whisper dictation with an MCP server; its review lists no music generation or score writing',
          },
          {
            App: '[XTTS v2](/power-local-llm/xtts-v2-review)',
            Platforms: 'macOS, Windows, Linux',
            'Price / license': 'Free / CPML',
            'Key difference': 'A single cloning model used as a library, with no studio, music or agent features',
          },
          {
            App: '[Coqui TTS](/power-local-llm/coqui-tts-review)',
            Platforms: 'macOS, Windows, Linux',
            'Price / license': 'Free / MPL 2.0',
            'Key difference': 'A Python toolkit for running text-to-speech models from code rather than a desktop studio',
          },
          {
            App: '[Bark](/power-local-llm/bark-tts-review)',
            Platforms: 'macOS, Windows, Linux',
            'Price / license': 'Free / MIT',
            'Key difference': 'A text-to-audio model run from code, with no custom voice cloning according to its review',
          },
        ],
        note: 'These are same-category apps from the PromptQuorum directory; confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I run it from a script or an AI agent?',
            a: 'Yes: the CLI works without the desktop app, and an installable Agent Skill lets an agent set up the CLI, engine and model. The server and the in-app Local API use a preconfigured bearer token rather than an OAuth login, and the Local API is reachable only from the same computer.',
          },
          {
            q: 'Which model should I start with?',
            a: 'The Quick Start suggests Kokoro-82M for fast narration or VoxCPM2 for cloning, and the docs say Kokoro has built-in voices and no cloning. We did not compare output quality.',
          },
          {
            q: 'Does it support my language?',
            a: 'The interface has twelve languages, but speech depends on the model: the docs say IndexTTS 2.5 adds Japanese, Spanish and Arabic to Chinese and English, XTTS v2 covers 17 languages and Audio8 TTS Realistic 11. We tested none of them.',
          },
          {
            q: 'Can the AI assistant run fully locally?',
            a: 'It can connect to Ollama or LM Studio on the same computer, per the docs, which add that larger models write noticeably better arrangements and small local models may fail the format check.',
          },
          {
            q: 'Do shared songs include my reference voices?',
            a: 'No: the community terms and architecture document say a shared package holds that version\'s audio, lyrics and generation settings but not reference voices, a person reviews each work before it is public, and shared works can be deleted in the app\'s settings.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'YoVoice is a young but actively developed, Apache-2.0 way to generate speech, clone voices and make AI music on your own computer, with a CLI and an MCP server that let agents drive it. Its offline statements come from the README and documentation rather than an independent audit, the repository is only two months old with a single named developer, several model weights forbid commercial use, and the Mac build covers Apple silicon only. It suits creators and developers who want one free local audio tool and will download large model files; anyone who needs proven output quality, commercial-use clarity for each model or a vetted data policy should test it and read each model\'s license first.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[YoVoice website](https://yovoice.leemysw.com/en/) — description, platforms and downloads.',
          '[YoVoice community terms](https://yovoice.leemysw.com/en/community/terms/) — sharing rules, voice consent, governing law and data stored, effective 12 November 2026.',
          '[YoVoice on GitHub](https://github.com/leemysw/yovoice) — README, Apache-2.0 license and model license notes.',
          '[YoVoice release 0.8.0](https://github.com/leemysw/yovoice/releases/tag/v0.8.0) — version, date and installer files.',
          '[Model selection guide](https://github.com/leemysw/yovoice/blob/main/docs/models.md) — models, inputs, languages and file sizes.',
          '[AI service guide](https://github.com/leemysw/yovoice/blob/main/docs/ai.md) — assistant providers, key storage and limits.',
          '[API and MCP guide](https://github.com/leemysw/yovoice/blob/main/docs/api.md) — server, Local API and MCP tools.',
          '[CLI guide](https://github.com/leemysw/yovoice/blob/main/docs/cli.md) — CLI installation and backends.',
          '[Architecture notes](https://github.com/leemysw/yovoice/blob/main/docs/architecture.md) — processes, network use and data folder.',
          '[Changelog](https://github.com/leemysw/yovoice/blob/main/CHANGELOG.md) — 0.8.0 changes and unreleased fixes.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Voicebox Review](/power-local-llm/voicebox-review) — a free, MIT-licensed local voice studio with dictation and an MCP server.',
          '[XTTS v2 Review](/power-local-llm/xtts-v2-review) — a voice-cloning model that runs locally as a library.',
          '[Coqui TTS Review](/power-local-llm/coqui-tts-review) — a Python toolkit for local text-to-speech.',
          '[Voice and Audio Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — the category comparison this review belongs to.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'YoVoice Review: Local Voice Cloning and Music Studio',
      description: 'Review of YoVoice, an Apache-2.0 local studio for text-to-speech, voice cloning and AI music: requirements, data flow, model licenses and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/yovoice-review',
      inLanguage: 'en',
      datePublished: '2026-11-17',
      dateModified: '2026-11-17',
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
        audienceType: 'Creators, developers and agent builders evaluating a local text-to-speech, voice cloning and AI music studio',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'YoVoice',
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
          name: 'AI music generation',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/yovoice-review',
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
          name: 'YoVoice Review',
          item: 'https://www.promptquorum.com/power-local-llm/yovoice-review',
        },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-17',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/yovoice-review-hero-de.webp',
    title: 'YoVoice-Rezension: Lokales Studio für Stimmklon und Musik',
    seoTitle: 'YoVoice-Rezension: Kostenloses lokales Stimmklon-Studio',
    intro: 'YoVoice (vom Hersteller „yovoice“ geschrieben) ist ein quelloffenes Desktop-Studio, das Sprache erzeugt, Stimmen klont und gestaltet sowie Songs und Partituren mit Modellen schreibt, die auf Ihrem eigenen Computer laufen. Es bietet außerdem eine Kommandozeile, eine HTTP-API und einen MCP-Server für KI-Agenten, und die App ist unter der Apache-2.0-Lizenz kostenlos. Diese Rezension stützt sich auf die Website, das GitHub-Repository, die Dokumentation und die Release-Seite, geprüft am 17. November 2026; PromptQuorum hat die App nicht selbst getestet.',
    metaDescription: 'YoVoice-Rezension: kostenloses lokales Studio (Apache-2.0) für Text-to-Speech, Stimmklonen und KI-Musik auf Mac, Windows, Linux, mit CLI, MCP. Ungetestet.',
    twitterDescription: 'Sprache, Stimmklonen und KI-Musik in einem kostenlosen Desktop-Studio unter Apache-2.0, das auf Ihrem Computer läuft, dazu CLI und MCP-Server. Was die Quellen zu Datenschutz, Modelllizenzen und Reife bestätigen und was nicht.',
    audience: 'Kreative, Entwickler und Agent-Entwickler, die lokales Text-to-Speech, Stimmklonen und KI-Musik wollen und wissen müssen, was die Quellen bestätigen, was die App herunterlädt und wo Modelllizenzen die Nutzung einschränken.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'YoVoice Rezension',
    targetKeywords: [
      'yovoice rezension',
      'yovoice stimme klonen',
      'lokale stimmklon app',
      'open source ki musik generator offline',
      'elevenlabs alternative open source',
      'lokaler text to speech mcp server',
      'yovoice.leemysw.com',
      'ist yovoice kostenlos',
    ],
    current_models_mentioned: [
      'IndexTTS',
      'Qwen3-TTS',
      'XTTS v2',
      'Kokoro',
      'ACE-Step',
    ],
    current_hardware_mentioned: [
      'Apple silicon',
      'NVIDIA GPU',
    ],
    leadAnswerBlock: '**YoVoice (Version 0.8.0) ist ein Desktop-Studio unter Apache-2.0, das Text-to-Speech, Stimmklonen, KI-Songgenerierung und Partitur-Erstellung vereint, und laut Hersteller läuft die Erzeugung offline auf Ihrem eigenen Computer.** Es liefert außerdem eine CLI, eine lokale HTTP-API und einen MCP-Server für Agenten, und jede Aussage hier stammt aus der Website des Herstellers, der Dokumentation und dem GitHub-Repository.',
    quickAnswerTop: {
      de: {
        question: 'Bleiben meine Sprachdaten bei YoVoice auf meinem Computer?',
        answer: 'Laut Dokumentation des Herstellers läuft die Erzeugung auf Ihrem Computer, sobald die Modelle heruntergeladen sind, und Referenzstimmen liegen in einem lokalen Datenordner. Netzwerknutzung ist für Modell-Downloads, Update-Prüfungen, einen optionalen KI-Assistenten, den Sie selbst anbinden, und optionales Teilen in der Community beschrieben.',
        bullets: [
          'Erzeugt Sprache aus Text mit einer Auswahl lokaler Modelle, gestaltet eine Stimme aus einer Beschreibung oder klont sie aus einer Referenzaufnahme.',
          'Schreibt Songs mit Text und Instrumentals, trennt Songs in Stems und arrangiert Mehrspur-Partituren, die als MIDI und Stems exportiert werden.',
          'Vertont Geschichten Zeile für Zeile mit je einer Stimme pro Figur und wandelt Audio oder Video in Untertiteldateien um.',
          'Eine CLI, eine lokale HTTP-API und ein MCP-Server lassen Agenten wie Claude Code und Cursor Audio erzeugen.',
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
        label: 'Was ist YoVoice?',
        anchor: 'what-is-yovoice',
      },
      {
        label: 'So erhalten Sie es',
        anchor: 'get-it',
      },
      {
        label: 'Voraussetzungen',
        anchor: 'requirements',
      },
      {
        label: 'Von den Quellen bestätigte Funktionen',
        anchor: 'key-features',
      },
      {
        label: 'Kosten',
        anchor: 'plans',
      },
      {
        label: 'Datenfluss und Datenschutz',
        anchor: 'privacy',
      },
      {
        label: 'Stimmklonen, Einwilligung und Modelllizenzen',
        anchor: 'voice-rights',
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
            text: 'YoVoice ist ein quelloffenes Desktop-Studio, das Text in Sprache umwandelt, Stimmen klont und gestaltet, mit lokalen Modellen Songs und Partituren erzeugt und KI-Agenten eine CLI, eine API und einen MCP-Server bietet.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als Sprecherkabine und kleines Musikstudio in einem Programm vor, wobei die Arbeit auf Ihrem eigenen Rechner statt in einem Abodienst stattfindet.',
          },
        ],
        items: [
          'Pflege: Der Hauptzweig wurde zuletzt am 17. November 2026 geändert und Version 0.8.0 am 15. November 2026 veröffentlicht, daher gilt keine Warnung vor einem verwaisten Projekt.',
          'Kosten: kostenlos unter der Apache-2.0-Lizenz, ein Bezahlplan wurde nicht gefunden; viele herunterladbare Modellgewichte haben eigene Bedingungen.',
          'Modelle: Laut README werden alle Sprach-, Musik- und Transkriptionsmodelle in der App oder mit der CLI heruntergeladen.',
          'Plattformen: Installer für macOS, Windows und Linux sowie je ein eigenständiges CLI-Archiv.',
          'Hersteller: ein einzelner Entwickler, leemysw; ein Firmenimpressum wurde nicht gefunden.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf [yovoice.leemysw.com](https://yovoice.leemysw.com), das [GitHub-Repository](https://github.com/leemysw/yovoice), die Dokumentation und die Release-Seite, geprüft am 17. November 2026. PromptQuorum hat die App weder installiert noch ausgeführt, daher werden Sprachqualität, Musikqualität und Geschwindigkeit nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-yovoice',
        title: 'Was ist YoVoice?',
        content: [
          '**YoVoice ist ein lokales Audio-Studio: Es wandelt Text in Sprache um, gestaltet oder klont eine Stimme, erzeugt Songs und Instrumentals und arrangiert Mehrspur-Partituren mit Modellen, die Sie auf Ihrem eigenen Computer herunterladen und ausführen.** Das README bezeichnet es als quelloffenes Studio für macOS, Windows und Linux; das Projekt schreibt seinen Namen „yovoice“, und seine Website ist zuerst auf Chinesisch mit einer englischen Version.',
          '**Die Inferenz-Engine ist audio.cpp, eine native C++-Engine von ShugoAI, sodass laut README keine Python- oder Conda-Einrichtung nötig ist.** Version 0.8.0 brachte laut Changelog das Teilen von Songs in der Community, anpassbare Tastenkürzel, sechs Designs und neue Spracherkennungsmodelle.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So erhalten Sie es',
        content: [
          '**YoVoice ist ein Download für macOS (Apple Silicon), Windows und Linux, der sich wie jede andere App installiert; zusätzlich gibt es ein eigenständiges CLI-Archiv, und für die Desktop-App ist kein Terminal nötig.**',
        ],
        columns: [
          'Option',
          'Bezugsquelle',
        ],
        rows: [
          {
            Option: 'macOS',
            Bezugsquelle: '.dmg für Apple Silicon, macOS 14 oder neuer: [GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            Option: 'Windows',
            Bezugsquelle: 'Setup-.exe für x64, mit CUDA-12.4- und 13.3-Varianten: [GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            Option: 'Linux',
            Bezugsquelle: '.deb (Debian/Ubuntu) oder .tar.gz für x64: [GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            Option: 'CLI',
            Bezugsquelle: 'Eigenständiges Zip je Betriebssystem: [CLI-Anleitung](https://github.com/leemysw/yovoice/blob/main/docs/cli.md)',
          },
          {
            Option: 'Website',
            Bezugsquelle: '[yovoice.leemysw.com](https://yovoice.leemysw.com)',
          },
          {
            Option: 'Datenschutzerklärung',
            Bezugsquelle: 'Keine gefunden; es gibt nur [Community-Bedingungen](https://yovoice.leemysw.com/en/community/terms/)',
          },
          {
            Option: 'Quellcode',
            Bezugsquelle: '[github.com/leemysw/yovoice](https://github.com/leemysw/yovoice), Apache-2.0-Lizenz',
          },
        ],
        note: 'Geprüfte Version: 0.8.0, veröffentlicht am 15. November 2026 laut [GitHub-Release-Seite](https://github.com/leemysw/yovoice/releases/tag/v0.8.0); die neueste Änderung am Hauptzweig stammt vom 17. November 2026. GitHub ist nur der Lieferweg für diese Installer, und die Modelle werden separat in der App heruntergeladen.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Voraussetzungen',
        content: [
          '**In den Quellen ist kein Mindestwert für RAM, VRAM oder Speicherplatz genannt; anspruchsvoll sind die Modelle, die separat heruntergeladen werden und sehr unterschiedlich groß sind.**',
        ],
        columns: [
          'Punkt',
          'Was die Quellen sagen',
        ],
        rows: [
          {
            Punkt: 'Betriebssystem',
            'Was die Quellen sagen': 'macOS 14 oder neuer auf Apple Silicon, Windows 10/11 x64, Linux x64; der Windows-Installer holt bei Bedarf die WebView2-Runtime, und Linux braucht WebKitGTK 4.1 (das .deb installiert es)',
          },
          {
            Punkt: 'Beschleunigung',
            'Was die Quellen sagen': 'Metal unter macOS; die Windows-Installer mit CUDA 12.4 und 13.3 bündeln eine Laufzeit für NVIDIA-GPUs; Linux läuft von Haus aus auf der CPU, eine Vulkan-GPU-Laufzeit lässt sich in den Einstellungen laden',
          },
          {
            Punkt: 'Speicher und VRAM',
            'Was die Quellen sagen': 'Hängt vom Modell ab; die Dokumentation nennt Dateigrößen je Modell, etwa IndexTTS 2.5 mit 3,50 GB in Q8, und empfiehlt für Breeze TTS 2 eine GPU',
          },
          {
            Punkt: 'Modelle',
            'Was die Quellen sagen': 'In der App oder mit der CLI heruntergeladen, mit Pause und Fortsetzen; die Quellen nennen keine Gesamtgröße der Downloads',
          },
          {
            Punkt: 'Datenordner',
            'Was die Quellen sagen': 'Standardmäßig ~/.yovoice, in den Einstellungen verschiebbar; das Deinstallieren der App behält ihn',
          },
          {
            Punkt: 'Internet',
            'Was die Quellen sagen': 'Nötig zum Herunterladen von Modellen und Laufzeiten; laut Dokumentation funktioniert die Erzeugung offline, sobald Engine und ein Modell installiert sind',
          },
        ],
        note: 'Die Backends entsprechen den Angaben in README und CLI-Anleitung; PromptQuorum hat nicht geprüft, welche Modelle auf welchem Backend laufen.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt aus README, Dokumentation oder Changelog; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Sprache, Stimmgestaltung und Klonen.** Eine Stimme aus einer Referenzaufnahme klonen, eine aus einer Textbeschreibung gestalten und Emotion und Vortrag anpassen; die Modellliste umfasst IndexTTS 2.0 und 2.5, VoxCPM2, Qwen3-TTS, XTTS v2 und Kokoro.',
          '**Geschichten vertonen.** Text- oder Untertiteldateien importieren, jeder Zeile eine Figur zuweisen und Zeile für Zeile erzeugen, mit mehreren Takes je Zeile zum Vergleichen.',
          '**Musik und Partituren.** Songs mit Text und Instrumentals über ACE-Step 1.5 oder YuE2, Instrumentals und Soundeffekte über Stable Audio 3, Trennung eines Songs in sechs Stems sowie General-MIDI-Partituren mit MIDI- und Stem-Export.',
          '**Transkription.** Audio oder Video wird zu zeitgestempelten Untertitelzeilen, exportiert als SRT oder WebVTT, mit Modellen wie Qwen3 ASR und Parakeet.',
          '**Agenten und API.** Ein installierbarer Agent Skill samt CLI, eine authentifizierte HTTP-API mit MCP-Endpunkt über `yovoice serve`, eine lokale API in der Desktop-App auf 127.0.0.1 und ein optionales Assistenten-Panel, das mit Diensten wie DeepSeek, Qwen, OpenAI, Anthropic, Ollama und LM Studio arbeitet.',
          '**Oberfläche.** Zwölf Oberflächensprachen, sechs Designs und anpassbare Tastenkürzel.',
        ],
        note: 'Die KI-Dokumentation sagt, ihre Funktionen seien nicht mit jedem aufgeführten Anbieter überprüft, und die Linux-App aktualisiert sich noch nicht selbst.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'Kosten',
        content: [
          '**Die App ist unter der Apache-2.0-Lizenz kostenlos, und weder die Website noch das Repository nennt einen Bezahlplan, eine Testphase oder ein Abonnement.**',
        ],
        columns: [
          'Punkt',
          'Was die Quellen sagen',
        ],
        rows: [
          {
            Punkt: 'App',
            'Was die Quellen sagen': 'Kostenlos; nur das Teilen in der Community wird als kontopflichtig beschrieben',
          },
          {
            Punkt: 'KI-Assistent',
            'Was die Quellen sagen': 'Optional; eine nutzungsabhängige API oder ein Tarif des angebundenen Anbieters oder ein lokaler Ollama- oder LM-Studio-Dienst, der meist keinen Schlüssel braucht',
          },
          {
            Punkt: 'Modelle',
            'Was die Quellen sagen': 'Die Dokumentation beschreibt den Modell-Download in der App und nennt keine Gebühr; die Lizenzen unterscheiden sich je Modell',
          },
        ],
        note: 'In keiner Währung wurde ein Preis genannt; die strukturierten Daten der Website nennen für die App einen Preis von 0 USD.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Das README sagt, die Erzeugung laufe vollständig auf Ihrer eigenen CPU oder GPU, und Manuskripte, Referenzstimmen und Werke verließen den Computer nie; die Website wiederholt „100 % Offline-Datenschutz“.** Das Architekturdokument ergänzt, dass abgesehen von Modell- und Laufzeit-Downloads und vom Teilen in der Community, das ein Nutzer anstößt, nur der von Ihnen konfigurierte KI-Dienst das Netzwerk nutzt; das README beschreibt separat Update-Prüfungen im Hintergrund unter macOS und Windows.',
          'Der optionale Assistent sendet Ihre eingegebene Anfrage und eine feste Anweisung direkt an den von Ihnen gewählten Anbieter, und die Schlüssel liegen mit Zugriffsrechten nur für den Besitzer in der lokalen Datenbank. Das mit 0.8.0 eingeführte Teilen in der Community lädt nach der Anmeldung mit einem leemysw-Konto eine Vorschau-Audiodatei und ein Projektpaket hoch, und laut Community-Bedingungen werden bei der Anmeldung die Version der Bedingungen, die Zeit und Ihre Netzwerkadresse gespeichert.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Erklärungen des Herstellers, keine Prüfergebnisse. PromptQuorum hat weder den Code gelesen noch den Netzwerkverkehr der App untersucht, und da es keine Datenschutzerklärung zu lesen gibt, stammen diese Aussagen allein aus README und Dokumentation.',
          },
        ],
      },
      voiceRights: {
        id: 'voice-rights',
        title: 'Stimmklonen, Einwilligung und Modelllizenzen',
        content: [
          '**Zum Klonen genügt eine Referenzaufnahme, und README sowie die gelesenen Dokumentationsseiten beschreiben keine Prüfung, ob die Stimme dem Nutzer gehört; die Einwilligung liegt daher in Ihrer Verantwortung.** Die Community-Bedingungen des Herstellers verbieten das Teilen der Stimme einer realen Person ohne deren Einwilligung, einschließlich Klonen von Personen des öffentlichen Lebens, Schauspielern und Sängern, sowie Identitätstäuschung; diese Bedingungen gelten für die Community, nicht für die private Nutzung der App.',
        ],
        items: [
          '**Einwilligung und Recht.** Ob das Klonen einer Stimme zulässig ist, hängt von der Person, dem Zweck und dem Land ab; diese Rezension ist keine Rechtsberatung, und PromptQuorum hat keine Rechtsordnung geprüft.',
          '**Modelllizenzen unterscheiden sich.** Laut README sind die Gewichte von OmniVoice, YuE2, Breeze TTS 2, Voxtral 4B TTS und MuScriptor auf nicht kommerzielle Nutzung beschränkt, XTTS v2 und Drama 3 haben eigene Lizenzen von Coqui und Fish Audio, IndexTTS-Modelle eine eigene Modelllizenz, und Stable Audio 3 ist unter einem Jahresumsatz von 1 Mio. USD nach der Stability AI Community License kostenlos. Die Apache-2.0-Lizenz gilt für die App, nicht für diese Gewichte.',
          '**Regeln zum Teilen.** Die Community-Bedingungen verlangen, die Quelle einer Stimme wahrheitsgemäß anzugeben (eigene Stimme, eine andere Person mit klarer Einwilligung oder eine synthetische Stimme), und für Werke aus Modellen, die kommerzielle Nutzung verbieten, eine nicht kommerzielle Lizenz zu wählen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Ausgabequalität und Geschwindigkeit.** PromptQuorum hat weder Sprache noch Musik angehört, die Erzeugungsgeschwindigkeit gemessen noch die Klongenauigkeit eines Modells getestet; die Website bietet Hörproben, die wir nicht bewertet haben.',
          '**Reife des Projekts.** Das Repository wurde am 15. September 2026 angelegt und unter dem Namen eines einzelnen Entwicklers veröffentlicht, die langfristige Pflege ist daher unbekannt.',
          '**Aufbewahrung von Takes.** Der Abschnitt „Unreleased“ des Changelogs sagt, eine Korrektur verhindere, dass die Erzeugung ältere Takes nach zehn Versionen stillschweigend löscht; ob Version 0.8.0 sich so verhält, haben wir nicht geprüft, sichern Sie daher Takes, die Sie brauchen.',
          '**Sprachabdeckung.** Die unterstützten Sprechsprachen hängen vom Modell ab, und die Quellen nennen keine Gesamtzahl; wir haben keine Sprache getestet.',
          '**Signierung der Installer.** Ob die macOS- und Windows-Installer notarisiert oder code-signiert sind, wurde nicht geprüft.',
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
          'Wesentlicher Unterschied',
        ],
        rows: [
          {
            App: '[Voicebox](/de/power-local-llm/voicebox-review)',
            Plattformen: 'macOS, Windows (Linux aus Quellcode)',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Stimmklonen, Text-to-Speech und Whisper-Diktat mit MCP-Server; laut Rezension keine Musikgenerierung oder Partitur-Erstellung',
          },
          {
            App: '[XTTS v2](/de/power-local-llm/xtts-v2-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / CPML',
            'Wesentlicher Unterschied': 'Ein einzelnes Klonmodell als Bibliothek, ohne Studio, Musik oder Agenten-Funktionen',
          },
          {
            App: '[Coqui TTS](/de/power-local-llm/coqui-tts-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / MPL 2.0',
            'Wesentlicher Unterschied': 'Ein Python-Toolkit, das Text-to-Speech-Modelle aus Code ausführt, kein Desktop-Studio',
          },
          {
            App: '[Bark](/de/power-local-llm/bark-tts-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Ein Text-zu-Audio-Modell, das aus Code läuft, laut Rezension ohne eigenes Stimmklonen',
          },
        ],
        note: 'Das sind Apps derselben Kategorie aus dem PromptQuorum-Verzeichnis; prüfen Sie Preis, Lizenz und Plattformen jeder App auf ihrer eigenen Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich es aus einem Skript oder von einem KI-Agenten aus betreiben?',
            a: 'Ja: Die CLI funktioniert ohne die Desktop-App, und ein installierbarer Agent Skill lässt einen Agenten CLI, Engine und Modell einrichten. Server und lokale API der App nutzen ein vorab konfiguriertes Bearer-Token statt einer OAuth-Anmeldung, und die lokale API ist nur vom selben Computer aus erreichbar.',
          },
          {
            q: 'Mit welchem Modell sollte ich beginnen?',
            a: 'Der Quick Start empfiehlt Kokoro-82M für schnelle Sprecherstimmen oder VoxCPM2 zum Klonen, und laut Dokumentation hat Kokoro eingebaute Stimmen und kein Klonen. Wir haben die Ausgabequalität nicht verglichen.',
          },
          {
            q: 'Unterstützt es meine Sprache?',
            a: 'Die Oberfläche hat zwölf Sprachen, die Sprachausgabe hängt aber vom Modell ab: Laut Dokumentation ergänzt IndexTTS 2.5 Japanisch, Spanisch und Arabisch zu Chinesisch und Englisch, XTTS v2 deckt 17 Sprachen ab und Audio8 TTS Realistic 11. Wir haben keine davon getestet.',
          },
          {
            q: 'Kann der KI-Assistent vollständig lokal laufen?',
            a: 'Laut Dokumentation kann er sich mit Ollama oder LM Studio auf demselben Computer verbinden; sie ergänzt, größere Modelle schrieben deutlich bessere Arrangements, und kleine lokale Modelle könnten die Formatprüfung nicht bestehen.',
          },
          {
            q: 'Enthalten geteilte Songs meine Referenzstimmen?',
            a: 'Nein: Laut Community-Bedingungen und Architekturdokument enthält ein geteiltes Paket Audio, Text und Erzeugungseinstellungen dieser Version, aber keine Referenzstimmen, eine Person prüft jedes Werk vor der Veröffentlichung, und geteilte Werke lassen sich in den Einstellungen der App löschen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'YoVoice ist ein junger, aber aktiv entwickelter Weg unter Apache-2.0, auf dem eigenen Computer Sprache zu erzeugen, Stimmen zu klonen und KI-Musik zu machen, mit einer CLI und einem MCP-Server, über die Agenten es steuern können. Seine Offline-Aussagen stammen aus README und Dokumentation statt aus einer unabhängigen Prüfung, das Repository ist erst zwei Monate alt und hat nur einen namentlich genannten Entwickler, mehrere Modellgewichte verbieten die kommerzielle Nutzung, und der Mac-Build deckt nur Apple Silicon ab. Es eignet sich für Kreative und Entwickler, die ein kostenloses lokales Audio-Werkzeug wollen und große Modelldateien herunterladen; wer nachgewiesene Ausgabequalität, Klarheit zur kommerziellen Nutzung je Modell oder eine geprüfte Datenrichtlinie braucht, sollte es testen und zuvor die Lizenz jedes Modells lesen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von YoVoice](https://yovoice.leemysw.com/en/) — Beschreibung, Plattformen und Downloads.',
          '[Community-Bedingungen von YoVoice](https://yovoice.leemysw.com/en/community/terms/) — Regeln zum Teilen, Stimmeinwilligung, anwendbares Recht und gespeicherte Daten, gültig ab 12. November 2026.',
          '[YoVoice auf GitHub](https://github.com/leemysw/yovoice) — README, Apache-2.0-Lizenz und Hinweise zu Modelllizenzen.',
          '[YoVoice-Release 0.8.0](https://github.com/leemysw/yovoice/releases/tag/v0.8.0) — Version, Datum und Installer-Dateien.',
          '[Leitfaden zur Modellauswahl](https://github.com/leemysw/yovoice/blob/main/docs/models.md) — Modelle, Eingaben, Sprachen und Dateigrößen.',
          '[Leitfaden zum KI-Dienst](https://github.com/leemysw/yovoice/blob/main/docs/ai.md) — Assistenten-Anbieter, Schlüsselspeicherung und Grenzen.',
          '[Leitfaden zu API und MCP](https://github.com/leemysw/yovoice/blob/main/docs/api.md) — Server, lokale API und MCP-Werkzeuge.',
          '[CLI-Anleitung](https://github.com/leemysw/yovoice/blob/main/docs/cli.md) — CLI-Installation und Backends.',
          '[Architekturnotizen](https://github.com/leemysw/yovoice/blob/main/docs/architecture.md) — Prozesse, Netzwerknutzung und Datenordner.',
          '[Changelog](https://github.com/leemysw/yovoice/blob/main/CHANGELOG.md) — Änderungen in 0.8.0 und unveröffentlichte Korrekturen.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Voicebox-Rezension](/de/power-local-llm/voicebox-review) — ein kostenloses lokales Sprachstudio unter MIT-Lizenz mit Diktat und MCP-Server.',
          '[XTTS-v2-Rezension](/de/power-local-llm/xtts-v2-review) — ein Stimmklon-Modell, das lokal als Bibliothek läuft.',
          '[Coqui-TTS-Rezension](/de/power-local-llm/coqui-tts-review) — ein Python-Toolkit für lokales Text-to-Speech.',
          '[Sprach- und Audio-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — der Kategorievergleich, zu dem diese Rezension gehört.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-17',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/yovoice-review-hero-es.webp',
    title: 'Reseña de YoVoice: estudio local de clonación de voz y música',
    seoTitle: 'Reseña de YoVoice: clonación de voz local y gratis',
    intro: 'YoVoice (escrito «yovoice» por su creador) es un estudio de escritorio de código abierto que genera voz, clona y diseña voces, y crea canciones y partituras con modelos que se ejecutan en tu propio equipo. Además ofrece una línea de comandos, una API HTTP y un servidor MCP para agentes de IA, y la app es gratuita bajo la licencia Apache-2.0. Esta reseña se basa en el sitio web, el repositorio de GitHub, su documentación y la página de versiones, consultados el 17 de noviembre de 2026; PromptQuorum no ha probado la app en persona.',
    metaDescription: 'Reseña de YoVoice: estudio local gratis (Apache-2.0) de texto a voz, clonación de voz y música con IA para Mac, Windows y Linux, con CLI y MCP. Sin probar.',
    twitterDescription: 'Voz, clonación de voz y música con IA en un estudio de escritorio gratuito con Apache-2.0 que se ejecuta en tu equipo, más CLI y servidor MCP. Qué confirman las fuentes sobre privacidad, licencias de modelos y madurez, y qué no.',
    audience: 'Creadores, desarrolladores y quienes construyen agentes que quieren texto a voz, clonación de voz y música con IA en local y necesitan saber qué confirman las fuentes, qué descarga la app y dónde las licencias de los modelos limitan el uso.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de YoVoice',
    targetKeywords: [
      'reseña yovoice',
      'yovoice clonar voz',
      'app local de clonación de voz',
      'generador de música con ia offline código abierto',
      'alternativa a elevenlabs código abierto',
      'servidor mcp de texto a voz local',
      'yovoice.leemysw.com',
      'yovoice es gratis',
    ],
    current_models_mentioned: [
      'IndexTTS',
      'Qwen3-TTS',
      'XTTS v2',
      'Kokoro',
      'ACE-Step',
    ],
    current_hardware_mentioned: [
      'Apple silicon',
      'NVIDIA GPU',
    ],
    leadAnswerBlock: '**YoVoice (versión 0.8.0) es un estudio de escritorio con Apache-2.0 que reúne texto a voz, clonación de voz, generación de canciones con IA y creación de partituras, y su creador afirma que la generación se ejecuta sin conexión en tu propio equipo.** También incluye una CLI, una API HTTP local y un servidor MCP para agentes, y cada afirmación de esta reseña procede del sitio web del creador, de la documentación y del repositorio de GitHub.',
    quickAnswerTop: {
      es: {
        question: '¿YoVoice guarda mis datos de voz en mi equipo?',
        answer: 'Según la documentación del creador, la generación se ejecuta en tu equipo una vez descargados los modelos, y las voces de referencia se guardan en una carpeta de datos local. Se describe uso de red para descargar modelos, comprobar actualizaciones, un asistente de IA opcional que conectas tú y compartir en la comunidad, también opcional.',
        bullets: [
          'Genera voz a partir de texto con una selección de modelos locales, diseña una voz desde una descripción o la clona desde una grabación de referencia.',
          'Escribe canciones con letra e instrumentales, separa canciones en stems y arregla partituras multipista que se exportan como MIDI y stems.',
          'Dobla historias línea por línea con una voz distinta por personaje y convierte audio o vídeo en archivos de subtítulos.',
          'Una CLI, una API HTTP local y un servidor MCP permiten que agentes como Claude Code y Cursor generen audio.',
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
        label: '¿Qué es YoVoice?',
        anchor: 'what-is-yovoice',
      },
      {
        label: 'Cómo conseguirlo',
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
        label: 'Coste',
        anchor: 'plans',
      },
      {
        label: 'Flujo de datos y privacidad',
        anchor: 'privacy',
      },
      {
        label: 'Clonación de voz, consentimiento y licencias de modelos',
        anchor: 'voice-rights',
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
            text: 'YoVoice es un estudio de escritorio de código abierto que convierte texto en voz, clona y diseña voces, genera canciones y partituras con modelos locales y ofrece a los agentes de IA una CLI, una API y un servidor MCP.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en él como una cabina de locución y un pequeño estudio de música en un solo programa, con el trabajo hecho en tu propio equipo en lugar de en un servicio de suscripción.',
          },
        ],
        items: [
          'Mantenimiento: la rama principal cambió por última vez el 17 de noviembre de 2026 y la versión 0.8.0 se publicó el 15 de noviembre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado.',
          'Coste: gratis con la licencia Apache-2.0, sin plan de pago encontrado; muchos pesos de modelo descargables tienen sus propias condiciones.',
          'Modelos: según el README, todos los modelos de voz, música y transcripción se descargan dentro de la app o con la CLI.',
          'Plataformas: instaladores para macOS, Windows y Linux, y además un archivo CLI independiente para cada uno.',
          'Creador: un desarrollador individual, leemysw; no se encontró aviso legal de empresa.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en [yovoice.leemysw.com](https://yovoice.leemysw.com), el [repositorio de GitHub](https://github.com/leemysw/yovoice), su documentación y la página de versiones, consultados el 17 de noviembre de 2026. PromptQuorum no ha instalado ni ejecutado la app, así que no se evalúan la calidad de la voz, la calidad de la música ni la velocidad.',
          },
        ],
      },
      overview: {
        id: 'what-is-yovoice',
        title: '¿Qué es YoVoice?',
        content: [
          '**YoVoice es un estudio de audio local: convierte texto en voz, diseña o clona una voz, genera canciones e instrumentales y arregla partituras multipista, con modelos que descargas y ejecutas en tu propio equipo.** El README lo describe como un estudio de código abierto para macOS, Windows y Linux; el proyecto escribe su nombre «yovoice», y su sitio web está primero en chino, con una versión en inglés.',
          '**El motor de inferencia es audio.cpp, un motor nativo en C++ de ShugoAI, por lo que el README dice que no hace falta configurar Python ni Conda.** La versión 0.8.0 añadió, según el registro de cambios, compartir canciones en la comunidad, atajos de teclado personalizables, seis temas y nuevos modelos de reconocimiento de voz.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirlo',
        content: [
          '**YoVoice se descarga para macOS (Apple silicon), Windows y Linux y se instala como cualquier otra app; también se publica un archivo CLI independiente, y la app de escritorio no necesita terminal.**',
        ],
        columns: [
          'Opción',
          'Cómo conseguirlo',
        ],
        rows: [
          {
            'Opción': 'macOS',
            'Cómo conseguirlo': '.dmg para Apple silicon, macOS 14 o posterior: [GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            'Opción': 'Windows',
            'Cómo conseguirlo': 'Instalador .exe para x64, con variantes CUDA 12.4 y 13.3: [GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            'Opción': 'Linux',
            'Cómo conseguirlo': '.deb (Debian/Ubuntu) o .tar.gz para x64: [GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            'Opción': 'CLI',
            'Cómo conseguirlo': 'Zip independiente por sistema: [guía de la CLI](https://github.com/leemysw/yovoice/blob/main/docs/cli.md)',
          },
          {
            'Opción': 'Sitio web',
            'Cómo conseguirlo': '[yovoice.leemysw.com](https://yovoice.leemysw.com)',
          },
          {
            'Opción': 'Política de privacidad',
            'Cómo conseguirlo': 'No se encontró; solo existen los [términos de la comunidad](https://yovoice.leemysw.com/en/community/terms/)',
          },
          {
            'Opción': 'Código fuente',
            'Cómo conseguirlo': '[github.com/leemysw/yovoice](https://github.com/leemysw/yovoice), licencia Apache-2.0',
          },
        ],
        note: 'Versión analizada: 0.8.0, publicada el 15 de noviembre de 2026 según la [página de versiones de GitHub](https://github.com/leemysw/yovoice/releases/tag/v0.8.0); el cambio más reciente de la rama principal es del 17 de noviembre de 2026. GitHub es solo el canal de entrega de estos instaladores, y los modelos se descargan aparte dentro de la app.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**Las fuentes no indican un mínimo de RAM, VRAM ni de espacio en disco; lo exigente son los modelos, que se descargan aparte y varían mucho de tamaño.**',
        ],
        columns: [
          'Elemento',
          'Qué dicen las fuentes',
        ],
        rows: [
          {
            Elemento: 'Sistema operativo',
            'Qué dicen las fuentes': 'macOS 14 o posterior en Apple silicon, Windows 10/11 x64, Linux x64; el instalador de Windows descarga el runtime WebView2 si hace falta y Linux necesita WebKitGTK 4.1 (el .deb lo instala)',
          },
          {
            Elemento: 'Aceleración',
            'Qué dicen las fuentes': 'Metal en macOS; los instaladores de Windows con CUDA 12.4 y 13.3 incluyen un runtime para GPU NVIDIA; Linux funciona en CPU de serie, con un runtime de GPU Vulkan descargable en Ajustes',
          },
          {
            Elemento: 'Memoria y VRAM',
            'Qué dicen las fuentes': 'Depende del modelo; la documentación indica el tamaño de archivo por modelo, por ejemplo IndexTTS 2.5 con 3.50 GB en Q8, y recomienda una GPU para Breeze TTS 2',
          },
          {
            Elemento: 'Modelos',
            'Qué dicen las fuentes': 'Se descargan dentro de la app o con la CLI, con pausa y reanudación; las fuentes no dan un tamaño total de descarga',
          },
          {
            Elemento: 'Carpeta de datos',
            'Qué dicen las fuentes': '~/.yovoice por defecto, se puede mover en Ajustes; desinstalar la app la conserva',
          },
          {
            Elemento: 'Internet',
            'Qué dicen las fuentes': 'Necesario para descargar modelos y runtimes; la documentación dice que la generación funciona sin conexión una vez instalados el motor y un modelo',
          },
        ],
        note: 'Los backends son los que figuran en el README y en la guía de la CLI; PromptQuorum no comprobó qué modelos funcionan en cada backend.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Todo lo siguiente procede del README, de la documentación o del registro de cambios; nada se ha probado de forma independiente.**',
        ],
        items: [
          '**Voz, diseño de voz y clonación.** Clonar una voz desde una grabación de referencia, diseñar una desde una descripción de texto y ajustar emoción y entonación; la lista de modelos incluye IndexTTS 2.0 y 2.5, VoxCPM2, Qwen3-TTS, XTTS v2 y Kokoro.',
          '**Doblaje de historias.** Importar archivos de texto o subtítulos, asignar un personaje a cada línea y generar línea por línea, con varias tomas por línea para comparar.',
          '**Música y partituras.** Canciones con letra e instrumentales con ACE-Step 1.5 o YuE2, instrumentales y efectos de sonido con Stable Audio 3, separación de una canción en seis stems y arreglo de partituras General MIDI con exportación de MIDI y stems.',
          '**Transcripción.** El audio o el vídeo se convierten en líneas de subtítulos con marcas de tiempo, exportadas como SRT o WebVTT, con modelos como Qwen3 ASR y Parakeet.',
          '**Agentes y API.** Un Agent Skill instalable y la CLI, una API HTTP autenticada con endpoint MCP mediante `yovoice serve`, una API local dentro de la app de escritorio en 127.0.0.1 y un panel de asistente opcional que funciona con servicios como DeepSeek, Qwen, OpenAI, Anthropic, Ollama y LM Studio.',
          '**Interfaz.** Doce idiomas de interfaz, seis temas y atajos de teclado editables.',
        ],
        note: 'La documentación de IA dice que sus funciones no se han verificado con todos los proveedores listados, y la app de Linux todavía no se actualiza sola.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'Coste',
        content: [
          '**La app es gratuita con la licencia Apache-2.0, y ni el sitio web ni el repositorio mencionan un plan de pago, una prueba o una suscripción.**',
        ],
        columns: [
          'Elemento',
          'Qué dicen las fuentes',
        ],
        rows: [
          {
            Elemento: 'App',
            'Qué dicen las fuentes': 'Gratis; solo se describe que compartir en la comunidad requiere una cuenta',
          },
          {
            Elemento: 'Asistente de IA',
            'Qué dicen las fuentes': 'Opcional; una API de pago por uso o un plan del proveedor que conectes, o un servicio local de Ollama o LM Studio, que normalmente no necesita clave',
          },
          {
            Elemento: 'Modelos',
            'Qué dicen las fuentes': 'La documentación describe la descarga de modelos dentro de la app y no menciona ninguna tarifa; las licencias difieren según el modelo',
          },
        ],
        note: 'No se indicó ningún precio en ninguna moneda; los datos estructurados del sitio web indican un precio de 0 USD para la app.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**El README dice que la generación se ejecuta por completo en tu propia CPU o GPU y que los manuscritos, las voces de referencia y las creaciones nunca salen del equipo, y el sitio web repite «100 % de privacidad sin conexión».** El documento de arquitectura añade que, aparte de las descargas de modelos y runtimes y del uso compartido en la comunidad que inicia el usuario, el único uso de red es el servicio de IA que configures; el README describe aparte comprobaciones de actualizaciones en segundo plano en macOS y Windows.',
          'El asistente opcional envía tu petición escrita y una instrucción fija directamente al proveedor que elijas, y las claves se guardan en la base de datos local con permisos solo para el propietario. Compartir en la comunidad, añadido en 0.8.0, sube un archivo de audio de vista previa y un paquete de proyecto tras iniciar sesión con una cuenta de leemysw, y los términos de la comunidad dicen que el inicio de sesión registra la versión de los términos, la hora y tu dirección de red.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del creador, no resultados de una auditoría. PromptQuorum no ha leído el código ni inspeccionado el tráfico de red de la app, y al no haber una política de privacidad que leer, estas afirmaciones proceden únicamente del README y de la documentación.',
          },
        ],
      },
      voiceRights: {
        id: 'voice-rights',
        title: 'Clonación de voz, consentimiento y licencias de modelos',
        content: [
          '**Clonar solo requiere una grabación de referencia, y el README y las páginas de documentación que leímos no describen ninguna comprobación de que la voz pertenezca al usuario, así que el consentimiento es responsabilidad tuya.** Los términos de la comunidad del creador prohíben compartir la voz de una persona real sin su consentimiento, incluidos clones de personajes públicos, actores y cantantes, así como la suplantación; esos términos rigen la comunidad, no el uso privado de la app.',
        ],
        items: [
          '**Consentimiento y ley.** Que clonar una voz sea lícito depende de la persona, de la finalidad y del país; esta reseña no es asesoramiento jurídico y PromptQuorum no ha evaluado ninguna jurisdicción.',
          '**Las licencias de los modelos difieren.** Según el README, los pesos de OmniVoice, YuE2, Breeze TTS 2, Voxtral 4B TTS y MuScriptor están restringidos a uso no comercial, XTTS v2 y Drama 3 usan sus propias licencias de Coqui y Fish Audio, los modelos IndexTTS tienen una licencia de modelo aparte y Stable Audio 3 es gratis por debajo de 1 millón de USD de ingresos anuales según la Stability AI Community License. La licencia Apache-2.0 cubre la app, no esos pesos.',
          '**Reglas para compartir.** Los términos de la comunidad exigen indicar con veracidad el origen de una voz (la propia, la de otra persona con consentimiento claro o una voz sintética) y elegir una licencia no comercial para las obras de modelos que prohíben el uso comercial.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad de salida y velocidad.** PromptQuorum no escuchó voz ni música, no midió la velocidad de generación ni probó la precisión de clonación de ningún modelo; el sitio web ofrece muestras de audio que no evaluamos.',
          '**Madurez del proyecto.** El repositorio se creó el 15 de septiembre de 2026 y está publicado con el nombre de un solo desarrollador, por lo que se desconoce su mantenimiento a largo plazo.',
          '**Conservación de tomas.** La sección Unreleased del registro de cambios dice que una corrección evita que la generación borre en silencio tomas antiguas tras diez versiones; no comprobamos si la versión 0.8.0 se comporta así, así que guarda copias de las tomas que necesites.',
          '**Cobertura de idiomas.** Los idiomas de voz admitidos dependen del modelo y las fuentes no dan una cifra única; no probamos ningún idioma.',
          '**Firma de los instaladores.** No se comprobó si los instaladores de macOS y Windows están notarizados o firmados.',
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
            App: '[Voicebox](/es/power-local-llm/voicebox-review)',
            Plataformas: 'macOS, Windows (Linux desde el código)',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Clonación de voz, texto a voz y dictado con Whisper con servidor MCP; su reseña no menciona generación de música ni partituras',
          },
          {
            App: '[XTTS v2](/es/power-local-llm/xtts-v2-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / CPML',
            'Diferencia clave': 'Un único modelo de clonación usado como biblioteca, sin estudio, música ni funciones de agente',
          },
          {
            App: '[Coqui TTS](/es/power-local-llm/coqui-tts-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / MPL 2.0',
            'Diferencia clave': 'Un kit de Python para ejecutar modelos de texto a voz desde código, no un estudio de escritorio',
          },
          {
            App: '[Bark](/es/power-local-llm/bark-tts-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Un modelo de texto a audio que se usa desde código, sin clonación de voz propia según su reseña',
          },
        ],
        note: 'Son apps de la misma categoría del directorio de PromptQuorum; confirma el precio, la licencia y las plataformas actuales de cada app en su propia página.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo usarlo desde un script o con un agente de IA?',
            a: 'Sí: la CLI funciona sin la app de escritorio, y un Agent Skill instalable permite que un agente configure la CLI, el motor y el modelo. El servidor y la API local de la app usan un token bearer preconfigurado en lugar de un inicio de sesión OAuth, y la API local solo es accesible desde el mismo equipo.',
          },
          {
            q: '¿Con qué modelo debería empezar?',
            a: 'La guía de inicio sugiere Kokoro-82M para narración rápida o VoxCPM2 para clonar, y la documentación dice que Kokoro tiene voces integradas y no clona. No comparamos la calidad de salida.',
          },
          {
            q: '¿Admite mi idioma?',
            a: 'La interfaz tiene doce idiomas, pero la voz depende del modelo: según la documentación, IndexTTS 2.5 añade japonés, español y árabe al chino y al inglés, XTTS v2 cubre 17 idiomas y Audio8 TTS Realistic 11. No probamos ninguno.',
          },
          {
            q: '¿El asistente de IA puede funcionar totalmente en local?',
            a: 'Puede conectarse a Ollama o LM Studio en el mismo equipo, según la documentación, que añade que los modelos grandes escriben arreglos notablemente mejores y que los modelos locales pequeños pueden no superar la comprobación de formato.',
          },
          {
            q: '¿Las canciones compartidas incluyen mis voces de referencia?',
            a: 'No: según los términos de la comunidad y el documento de arquitectura, un paquete compartido contiene el audio, la letra y los ajustes de generación de esa versión, pero no las voces de referencia, una persona revisa cada obra antes de que sea pública y las obras compartidas se pueden borrar en los ajustes de la app.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'YoVoice es una forma joven, pero con desarrollo activo y licencia Apache-2.0, de generar voz, clonar voces y hacer música con IA en tu propio equipo, con una CLI y un servidor MCP que permiten que los agentes lo manejen. Sus afirmaciones sobre el funcionamiento sin conexión proceden del README y de la documentación, no de una auditoría independiente, el repositorio tiene solo dos meses y un único desarrollador identificado, varios pesos de modelo prohíben el uso comercial y la versión para Mac cubre solo Apple silicon. Encaja con creadores y desarrolladores que quieren una herramienta de audio local y gratuita y que descargarán archivos de modelo grandes; quien necesite calidad de salida demostrada, claridad sobre el uso comercial de cada modelo o una política de datos verificada debería probarlo y leer antes la licencia de cada modelo.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de YoVoice](https://yovoice.leemysw.com/en/) — descripción, plataformas y descargas.',
          '[Términos de la comunidad de YoVoice](https://yovoice.leemysw.com/en/community/terms/) — reglas para compartir, consentimiento de voz, ley aplicable y datos almacenados, vigentes desde el 12 de noviembre de 2026.',
          '[YoVoice en GitHub](https://github.com/leemysw/yovoice) — README, licencia Apache-2.0 y notas de licencias de modelos.',
          '[Versión 0.8.0 de YoVoice](https://github.com/leemysw/yovoice/releases/tag/v0.8.0) — versión, fecha y archivos de instalación.',
          '[Guía de selección de modelos](https://github.com/leemysw/yovoice/blob/main/docs/models.md) — modelos, entradas, idiomas y tamaños de archivo.',
          '[Guía del servicio de IA](https://github.com/leemysw/yovoice/blob/main/docs/ai.md) — proveedores del asistente, almacenamiento de claves y límites.',
          '[Guía de API y MCP](https://github.com/leemysw/yovoice/blob/main/docs/api.md) — servidor, API local y herramientas MCP.',
          '[Guía de la CLI](https://github.com/leemysw/yovoice/blob/main/docs/cli.md) — instalación de la CLI y backends.',
          '[Notas de arquitectura](https://github.com/leemysw/yovoice/blob/main/docs/architecture.md) — procesos, uso de red y carpeta de datos.',
          '[Registro de cambios](https://github.com/leemysw/yovoice/blob/main/CHANGELOG.md) — cambios de 0.8.0 y correcciones sin publicar.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Voicebox](/es/power-local-llm/voicebox-review) — un estudio de voz local, gratuito y con licencia MIT, con dictado y servidor MCP.',
          '[Reseña de XTTS v2](/es/power-local-llm/xtts-v2-review) — un modelo de clonación de voz que se ejecuta en local como biblioteca.',
          '[Reseña de Coqui TTS](/es/power-local-llm/coqui-tts-review) — un kit de Python para texto a voz en local.',
          '[Herramientas de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — la comparativa de categoría a la que pertenece esta reseña.',
          '[Directorio de software LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-17',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/yovoice-review-hero-fr.webp',
    title: 'Test de YoVoice : studio local de clonage vocal et de musique',
    seoTitle: 'Test de YoVoice : clonage vocal local et gratuit',
    intro: 'YoVoice (écrit « yovoice » par son auteur) est un studio de bureau open source qui génère de la voix, clone et conçoit des voix, et crée des chansons et des partitions avec des modèles exécutés sur votre propre ordinateur. Il propose aussi une ligne de commande, une API HTTP et un serveur MCP pour les agents IA, et l’application est gratuite sous licence Apache-2.0. Ce test s’appuie sur le site web, le dépôt GitHub, sa documentation et la page des versions, consultés le 17 novembre 2026 ; PromptQuorum n’a pas testé l’application en conditions réelles.',
    metaDescription: 'Test de YoVoice : studio local gratuit (Apache-2.0) de synthèse vocale, clonage de voix et musique IA sur Mac, Windows, Linux, avec CLI et MCP. Non testé.',
    twitterDescription: 'Voix, clonage vocal et musique IA dans un studio de bureau gratuit sous Apache-2.0 qui s’exécute sur votre ordinateur, avec CLI et serveur MCP. Ce que les sources confirment sur la confidentialité, les licences de modèles et la maturité, et ce qu’elles ne confirment pas.',
    audience: 'Créateurs, développeurs et concepteurs d’agents qui veulent de la synthèse vocale, du clonage de voix et de la musique IA en local et doivent savoir ce que confirment les sources, ce que l’application télécharge et où les licences des modèles limitent l’usage.',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test de YoVoice',
    targetKeywords: [
      'test yovoice',
      'yovoice clonage de voix',
      'application locale de clonage de voix',
      'générateur de musique ia hors ligne open source',
      'alternative à elevenlabs open source',
      'serveur mcp de synthèse vocale local',
      'yovoice.leemysw.com',
      'yovoice est-il gratuit',
    ],
    current_models_mentioned: [
      'IndexTTS',
      'Qwen3-TTS',
      'XTTS v2',
      'Kokoro',
      'ACE-Step',
    ],
    current_hardware_mentioned: [
      'Apple silicon',
      'NVIDIA GPU',
    ],
    leadAnswerBlock: '**YoVoice (version 0.8.0) est un studio de bureau sous Apache-2.0 qui réunit synthèse vocale, clonage de voix, génération de chansons par IA et écriture de partitions, et son auteur affirme que la génération s’exécute hors ligne sur votre propre ordinateur.** Il fournit aussi une CLI, une API HTTP locale et un serveur MCP pour les agents, et chaque affirmation de ce test provient du site de l’auteur, de la documentation et du dépôt GitHub.',
    quickAnswerTop: {
      fr: {
        question: 'YoVoice garde-t-il mes données vocales sur mon ordinateur ?',
        answer: 'Selon la documentation de l’auteur, la génération s’exécute sur votre ordinateur une fois les modèles téléchargés, et les voix de référence sont stockées dans un dossier de données local. Un usage du réseau est décrit pour le téléchargement des modèles, la recherche de mises à jour, un assistant IA facultatif que vous connectez vous-même et le partage communautaire facultatif.',
        bullets: [
          'Génère de la voix à partir de texte avec un choix de modèles locaux, conçoit une voix à partir d’une description ou la clone à partir d’un enregistrement de référence.',
          'Écrit des chansons avec paroles et des instrumentaux, sépare des chansons en stems et arrange des partitions multipistes exportées en MIDI et en stems.',
          'Double des histoires ligne par ligne avec une voix par personnage et transforme l’audio ou la vidéo en fichiers de sous-titres.',
          'Une CLI, une API HTTP locale et un serveur MCP permettent à des agents comme Claude Code et Cursor de générer de l’audio.',
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
        label: 'Qu’est-ce que YoVoice ?',
        anchor: 'what-is-yovoice',
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
        label: 'Coût',
        anchor: 'plans',
      },
      {
        label: 'Flux de données et confidentialité',
        anchor: 'privacy',
      },
      {
        label: 'Clonage vocal, consentement et licences des modèles',
        anchor: 'voice-rights',
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
            text: 'YoVoice est un studio de bureau open source qui transforme le texte en voix, clone et conçoit des voix, génère des chansons et des partitions avec des modèles locaux et offre aux agents IA une CLI, une API et un serveur MCP.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-le comme une cabine d’enregistrement et un petit studio de musique réunis dans un seul programme, avec le travail effectué sur votre propre machine plutôt que dans un service par abonnement.',
          },
        ],
        items: [
          'Maintenance : la branche principale a été modifiée pour la dernière fois le 17 novembre 2026 et la version 0.8.0 a été publiée le 15 novembre 2026, donc aucun avertissement de projet abandonné ne s’applique.',
          'Coût : gratuit sous licence Apache-2.0, aucune offre payante trouvée ; de nombreux poids de modèles téléchargeables ont leurs propres conditions.',
          'Modèles : selon le README, tous les modèles de voix, de musique et de transcription se téléchargent dans l’application ou avec la CLI.',
          'Plateformes : installateurs pour macOS, Windows et Linux, plus une archive CLI autonome pour chacun.',
          'Auteur : un développeur individuel, leemysw ; aucune mention légale d’entreprise trouvée.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s’appuie sur [yovoice.leemysw.com](https://yovoice.leemysw.com), le [dépôt GitHub](https://github.com/leemysw/yovoice), sa documentation et la page des versions, consultés le 17 novembre 2026. PromptQuorum n’a ni installé ni exécuté l’application, donc la qualité de la voix, la qualité de la musique et la vitesse ne sont pas évaluées.',
          },
        ],
      },
      overview: {
        id: 'what-is-yovoice',
        title: 'Qu’est-ce que YoVoice ?',
        content: [
          '**YoVoice est un studio audio local : il transforme le texte en voix, conçoit ou clone une voix, génère des chansons et des instrumentaux et arrange des partitions multipistes, avec des modèles que vous téléchargez et exécutez sur votre propre ordinateur.** Le README le décrit comme un studio open source pour macOS, Windows et Linux ; le projet écrit son nom « yovoice », et son site est d’abord en chinois, avec une version anglaise.',
          '**Le moteur d’inférence est audio.cpp, un moteur natif en C++ de ShugoAI, si bien que le README indique qu’aucune installation de Python ou de Conda n’est nécessaire.** La version 0.8.0 a ajouté, selon le journal des modifications, le partage de chansons dans la communauté, des raccourcis clavier personnalisables, six thèmes et de nouveaux modèles de reconnaissance vocale.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**YoVoice se télécharge pour macOS (Apple silicon), Windows et Linux et s’installe comme n’importe quelle application ; une archive CLI autonome est aussi publiée, et l’application de bureau ne demande pas de terminal.**',
        ],
        columns: [
          'Option',
          'Comment l’obtenir',
        ],
        rows: [
          {
            Option: 'macOS',
            'Comment l’obtenir': '.dmg pour Apple silicon, macOS 14 ou ultérieur : [GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            Option: 'Windows',
            'Comment l’obtenir': 'Installateur .exe pour x64, avec variantes CUDA 12.4 et 13.3 : [GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            Option: 'Linux',
            'Comment l’obtenir': '.deb (Debian/Ubuntu) ou .tar.gz pour x64 : [GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            Option: 'CLI',
            'Comment l’obtenir': 'Zip autonome par système : [guide de la CLI](https://github.com/leemysw/yovoice/blob/main/docs/cli.md)',
          },
          {
            Option: 'Site web',
            'Comment l’obtenir': '[yovoice.leemysw.com](https://yovoice.leemysw.com)',
          },
          {
            Option: 'Politique de confidentialité',
            'Comment l’obtenir': 'Aucune trouvée ; seules existent les [conditions de la communauté](https://yovoice.leemysw.com/en/community/terms/)',
          },
          {
            Option: 'Code source',
            'Comment l’obtenir': '[github.com/leemysw/yovoice](https://github.com/leemysw/yovoice), licence Apache-2.0',
          },
        ],
        note: 'Version testée : 0.8.0, publiée le 15 novembre 2026 selon la [page des versions GitHub](https://github.com/leemysw/yovoice/releases/tag/v0.8.0) ; la modification la plus récente de la branche principale date du 17 novembre 2026. GitHub n’est que le canal de distribution de ces installateurs, et les modèles se téléchargent séparément dans l’application.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**Les sources n’indiquent aucun minimum de RAM, de VRAM ou d’espace disque ; ce sont les modèles qui sont exigeants, téléchargés séparément et de tailles très variables.**',
        ],
        columns: [
          'Élément',
          'Ce que disent les sources',
        ],
        rows: [
          {
            'Élément': 'Système d’exploitation',
            'Ce que disent les sources': 'macOS 14 ou ultérieur sur Apple silicon, Windows 10/11 x64, Linux x64 ; l’installateur Windows récupère le runtime WebView2 si besoin et Linux exige WebKitGTK 4.1 (le .deb l’installe)',
          },
          {
            'Élément': 'Accélération',
            'Ce que disent les sources': 'Metal sur macOS ; les installateurs Windows CUDA 12.4 et 13.3 embarquent un runtime pour GPU NVIDIA ; Linux fonctionne sur CPU d’emblée, avec un runtime GPU Vulkan téléchargeable dans les réglages',
          },
          {
            'Élément': 'Mémoire et VRAM',
            'Ce que disent les sources': 'Dépend du modèle ; la documentation indique la taille des fichiers par modèle, par exemple IndexTTS 2.5 à 3.50 Go en Q8, et recommande un GPU pour Breeze TTS 2',
          },
          {
            'Élément': 'Modèles',
            'Ce que disent les sources': 'Téléchargés dans l’application ou avec la CLI, avec pause et reprise ; les sources ne donnent pas de taille totale de téléchargement',
          },
          {
            'Élément': 'Dossier de données',
            'Ce que disent les sources': '~/.yovoice par défaut, déplaçable dans les réglages ; la désinstallation de l’application le conserve',
          },
          {
            'Élément': 'Internet',
            'Ce que disent les sources': 'Nécessaire pour télécharger modèles et runtimes ; la documentation indique que la génération fonctionne hors ligne une fois le moteur et un modèle installés',
          },
        ],
        note: 'Les backends sont ceux listés dans le README et le guide de la CLI ; PromptQuorum n’a pas vérifié quels modèles fonctionnent sur quel backend.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient du README, de la documentation ou du journal des modifications ; aucun n’a été testé de façon indépendante.**',
        ],
        items: [
          '**Voix, conception de voix et clonage.** Cloner une voix à partir d’un enregistrement de référence, en concevoir une à partir d’une description et régler l’émotion et le débit ; la liste de modèles comprend IndexTTS 2.0 et 2.5, VoxCPM2, Qwen3-TTS, XTTS v2 et Kokoro.',
          '**Doublage d’histoires.** Importer des fichiers de texte ou de sous-titres, attribuer un personnage à chaque ligne et générer ligne par ligne, avec plusieurs prises par ligne à comparer.',
          '**Musique et partitions.** Chansons avec paroles et instrumentaux via ACE-Step 1.5 ou YuE2, instrumentaux et effets sonores via Stable Audio 3, séparation d’une chanson en six stems et arrangement de partitions General MIDI avec export MIDI et stems.',
          '**Transcription.** L’audio ou la vidéo devient des lignes de sous-titres horodatées exportées en SRT ou WebVTT, avec des modèles comme Qwen3 ASR et Parakeet.',
          '**Agents et API.** Un Agent Skill installable et la CLI, une API HTTP authentifiée avec point d’accès MCP via `yovoice serve`, une API locale dans l’application de bureau sur 127.0.0.1 et un panneau d’assistant facultatif qui fonctionne avec des services comme DeepSeek, Qwen, OpenAI, Anthropic, Ollama et LM Studio.',
          '**Interface.** Douze langues d’interface, six thèmes et des raccourcis clavier modifiables.',
        ],
        note: 'La documentation IA indique que ses fonctions n’ont pas été vérifiées avec chaque fournisseur listé, et l’application Linux ne se met pas encore à jour toute seule.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'Coût',
        content: [
          '**L’application est gratuite sous licence Apache-2.0, et ni le site web ni le dépôt ne mentionnent d’offre payante, d’essai ou d’abonnement.**',
        ],
        columns: [
          'Élément',
          'Ce que disent les sources',
        ],
        rows: [
          {
            'Élément': 'Application',
            'Ce que disent les sources': 'Gratuite ; seul le partage communautaire est décrit comme nécessitant un compte',
          },
          {
            'Élément': 'Assistant IA',
            'Ce que disent les sources': 'Facultatif ; une API à l’usage ou une offre du fournisseur que vous connectez, ou un service local Ollama ou LM Studio, qui n’exige généralement pas de clé',
          },
          {
            'Élément': 'Modèles',
            'Ce que disent les sources': 'La documentation décrit le téléchargement des modèles dans l’application et ne mentionne aucun frais ; les licences diffèrent selon le modèle',
          },
        ],
        note: 'Aucun prix n’a été indiqué, quelle que soit la devise ; les données structurées du site web indiquent un prix de 0 USD pour l’application.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**Le README indique que la génération s’exécute entièrement sur votre propre CPU ou GPU et que les manuscrits, les voix de référence et les créations ne quittent jamais l’ordinateur, et le site web reprend « 100 % de confidentialité hors ligne ».** Le document d’architecture ajoute qu’en dehors des téléchargements de modèles et de runtimes et du partage communautaire lancé par l’utilisateur, le seul usage du réseau est le service IA que vous configurez ; le README décrit séparément des recherches de mises à jour en arrière-plan sous macOS et Windows.',
          'L’assistant facultatif envoie votre requête saisie et une instruction fixe directement au fournisseur que vous choisissez, et les clés sont stockées dans la base de données locale avec des droits réservés au propriétaire. Le partage communautaire, ajouté dans la version 0.8.0, envoie un fichier audio d’aperçu et un paquet de projet après connexion avec un compte leemysw, et les conditions de la communauté indiquent que la connexion enregistre la version des conditions, l’heure et votre adresse réseau.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations de l’auteur, pas des résultats d’audit. PromptQuorum n’a ni lu le code ni inspecté le trafic réseau de l’application, et faute de politique de confidentialité à lire, ces affirmations proviennent uniquement du README et de la documentation.',
          },
        ],
      },
      voiceRights: {
        id: 'voice-rights',
        title: 'Clonage vocal, consentement et licences des modèles',
        content: [
          '**Le clonage ne demande qu’un enregistrement de référence, et le README et les pages de documentation lues ne décrivent aucune vérification que la voix appartient à l’utilisateur ; le consentement relève donc de votre responsabilité.** Les conditions de la communauté de l’auteur interdisent de partager la voix d’une personne réelle sans son consentement, y compris des clones de personnalités publiques, d’acteurs et de chanteurs, ainsi que l’usurpation d’identité ; ces conditions régissent la communauté, pas l’usage privé de l’application.',
        ],
        items: [
          '**Consentement et droit.** La licéité du clonage d’une voix dépend de la personne, de la finalité et du pays ; ce test n’est pas un conseil juridique, et PromptQuorum n’a évalué aucune juridiction.',
          '**Les licences des modèles diffèrent.** Selon le README, les poids d’OmniVoice, YuE2, Breeze TTS 2, Voxtral 4B TTS et MuScriptor sont limités à un usage non commercial, XTTS v2 et Drama 3 utilisent leurs propres licences Coqui et Fish Audio, les modèles IndexTTS ont une licence de modèle distincte et Stable Audio 3 est gratuit sous 1 M USD de chiffre d’affaires annuel selon la Stability AI Community License. La licence Apache-2.0 couvre l’application, pas ces poids.',
          '**Règles de partage.** Les conditions de la communauté exigent d’indiquer sincèrement la source d’une voix (sa propre voix, celle d’une autre personne avec un consentement clair, ou une voix synthétique) et de choisir une licence non commerciale pour les œuvres issues de modèles qui interdisent l’usage commercial.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité de sortie et vitesse.** PromptQuorum n’a écouté ni voix ni musique, n’a pas mesuré la vitesse de génération ni testé la fidélité du clonage d’aucun modèle ; le site propose des échantillons audio que nous n’avons pas évalués.',
          '**Maturité du projet.** Le dépôt a été créé le 15 septembre 2026 et est publié sous le nom d’un seul développeur, si bien que sa maintenance à long terme est inconnue.',
          '**Conservation des prises.** La section Unreleased du journal des modifications indique qu’un correctif empêche la génération de supprimer silencieusement les anciennes prises après dix versions ; nous n’avons pas vérifié si la version 0.8.0 se comporte ainsi, conservez donc des copies des prises dont vous avez besoin.',
          '**Couverture linguistique.** Les langues de synthèse prises en charge dépendent du modèle et les sources ne donnent aucun chiffre unique ; nous n’avons testé aucune langue.',
          '**Signature des installateurs.** Nous n’avons pas vérifié si les installateurs macOS et Windows sont notarisés ou signés.',
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
          'Différence principale',
        ],
        rows: [
          {
            Application: '[Voicebox](/fr/power-local-llm/voicebox-review)',
            Plateformes: 'macOS, Windows (Linux depuis les sources)',
            'Prix / licence': 'Gratuit / MIT',
            'Différence principale': 'Clonage vocal, synthèse vocale et dictée Whisper avec serveur MCP ; son test ne mentionne ni génération de musique ni partitions',
          },
          {
            Application: '[XTTS v2](/fr/power-local-llm/xtts-v2-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuit / CPML',
            'Différence principale': 'Un seul modèle de clonage utilisé comme bibliothèque, sans studio, musique ni fonctions d’agent',
          },
          {
            Application: '[Coqui TTS](/fr/power-local-llm/coqui-tts-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuit / MPL 2.0',
            'Différence principale': 'Une boîte à outils Python pour exécuter des modèles de synthèse vocale depuis le code, pas un studio de bureau',
          },
          {
            Application: '[Bark](/fr/power-local-llm/bark-tts-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuit / MIT',
            'Différence principale': 'Un modèle texte-vers-audio utilisé depuis le code, sans clonage de voix propre selon son test',
          },
        ],
        note: 'Ce sont des applications de la même catégorie issues du répertoire PromptQuorum ; vérifiez le prix, la licence et les plateformes actuels de chacune sur sa propre page.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Puis-je l’utiliser depuis un script ou un agent IA ?',
            a: 'Oui : la CLI fonctionne sans l’application de bureau, et un Agent Skill installable permet à un agent de configurer la CLI, le moteur et le modèle. Le serveur et l’API locale de l’application utilisent un jeton bearer préconfiguré plutôt qu’une connexion OAuth, et l’API locale n’est accessible que depuis le même ordinateur.',
          },
          {
            q: 'Par quel modèle commencer ?',
            a: 'Le guide de démarrage suggère Kokoro-82M pour une narration rapide ou VoxCPM2 pour le clonage, et la documentation indique que Kokoro a des voix intégrées et ne clone pas. Nous n’avons pas comparé la qualité de sortie.',
          },
          {
            q: 'Ma langue est-elle prise en charge ?',
            a: 'L’interface compte douze langues, mais la voix dépend du modèle : selon la documentation, IndexTTS 2.5 ajoute le japonais, l’espagnol et l’arabe au chinois et à l’anglais, XTTS v2 couvre 17 langues et Audio8 TTS Realistic 11. Nous n’en avons testé aucune.',
          },
          {
            q: 'L’assistant IA peut-il fonctionner entièrement en local ?',
            a: 'Il peut se connecter à Ollama ou LM Studio sur le même ordinateur, selon la documentation, qui ajoute que les grands modèles écrivent des arrangements nettement meilleurs et que de petits modèles locaux peuvent échouer à la vérification du format.',
          },
          {
            q: 'Les chansons partagées contiennent-elles mes voix de référence ?',
            a: 'Non : selon les conditions de la communauté et le document d’architecture, un paquet partagé contient l’audio, les paroles et les réglages de génération de cette version, mais pas les voix de référence, une personne examine chaque œuvre avant sa publication, et les œuvres partagées peuvent être supprimées dans les réglages de l’application.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'YoVoice est une solution jeune mais activement développée, sous Apache-2.0, pour générer de la voix, cloner des voix et faire de la musique IA sur votre propre ordinateur, avec une CLI et un serveur MCP qui permettent aux agents de le piloter. Ses affirmations sur le fonctionnement hors ligne proviennent du README et de la documentation plutôt que d’un audit indépendant, le dépôt n’a que deux mois et un seul développeur identifié, plusieurs poids de modèles interdisent l’usage commercial et la version Mac ne couvre qu’Apple silicon. Il convient aux créateurs et aux développeurs qui veulent un outil audio local gratuit et téléchargeront de gros fichiers de modèles ; qui a besoin d’une qualité de sortie démontrée, d’une clarté sur l’usage commercial de chaque modèle ou d’une politique de données vérifiée devrait le tester et lire d’abord la licence de chaque modèle.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site web de YoVoice](https://yovoice.leemysw.com/en/) — description, plateformes et téléchargements.',
          '[Conditions de la communauté YoVoice](https://yovoice.leemysw.com/en/community/terms/) — règles de partage, consentement vocal, droit applicable et données conservées, en vigueur depuis le 12 novembre 2026.',
          '[YoVoice sur GitHub](https://github.com/leemysw/yovoice) — README, licence Apache-2.0 et notes sur les licences de modèles.',
          '[Version 0.8.0 de YoVoice](https://github.com/leemysw/yovoice/releases/tag/v0.8.0) — version, date et fichiers d’installation.',
          '[Guide de choix des modèles](https://github.com/leemysw/yovoice/blob/main/docs/models.md) — modèles, entrées, langues et tailles de fichiers.',
          '[Guide du service IA](https://github.com/leemysw/yovoice/blob/main/docs/ai.md) — fournisseurs de l’assistant, stockage des clés et limites.',
          '[Guide API et MCP](https://github.com/leemysw/yovoice/blob/main/docs/api.md) — serveur, API locale et outils MCP.',
          '[Guide de la CLI](https://github.com/leemysw/yovoice/blob/main/docs/cli.md) — installation de la CLI et backends.',
          '[Notes d’architecture](https://github.com/leemysw/yovoice/blob/main/docs/architecture.md) — processus, usage du réseau et dossier de données.',
          '[Journal des modifications](https://github.com/leemysw/yovoice/blob/main/CHANGELOG.md) — changements de la version 0.8.0 et correctifs non publiés.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Voicebox](/fr/power-local-llm/voicebox-review) — un studio vocal local gratuit sous licence MIT avec dictée et serveur MCP.',
          '[Test de XTTS v2](/fr/power-local-llm/xtts-v2-review) — un modèle de clonage vocal qui s’exécute en local comme bibliothèque.',
          '[Test de Coqui TTS](/fr/power-local-llm/coqui-tts-review) — une boîte à outils Python pour la synthèse vocale locale.',
          '[Outils de voix et d’audio comparés](/fr/power-local-llm/local-llm-voice-audio-compared) — le comparatif de catégorie auquel appartient ce test.',
          '[Répertoire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-17',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/yovoice-review-hero-ja.webp',
    title: 'YoVoiceレビュー：ローカルの音声クローン・音楽スタジオ',
    seoTitle: 'YoVoiceレビュー：無料のローカル音声クローンとAI音楽',
    intro: 'YoVoice（開発元の表記は「yovoice」）は、お使いのコンピューター上で動くモデルで音声を生成し、声をクローン・デザインし、楽曲やスコアを作るオープンソースのデスクトップスタジオです。AIエージェント向けにコマンドライン、HTTP API、MCPサーバーも備え、アプリ本体はApache-2.0ライセンスで無料です。このレビューは、公式サイト、GitHubリポジトリ、ドキュメント、リリースページに基づいており、確認日は2026年11月17日です。PromptQuorumはアプリを実際には試していません。',
    metaDescription: 'YoVoiceレビュー：Mac・Windows・Linux対応の無料Apache-2.0ローカルスタジオ。音声合成、音声クローン、AI音楽、CLIとMCP対応。未検証。',
    twitterDescription: '音声合成、声のクローン、AI音楽をコンピューター上で動かす、Apache-2.0の無料デスクトップスタジオ。CLIとMCPサーバー付き。プライバシー、モデルライセンス、成熟度について情報源が確認していることと、していないこと。',
    audience: 'ローカルでの音声合成、声のクローン、AI音楽を求め、情報源が確認している内容、アプリがダウンロードするもの、モデルライセンスによる利用制限を知りたいクリエイター、開発者、エージェント開発者。',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'YoVoice レビュー',
    targetKeywords: [
      'yovoice レビュー',
      'yovoice 音声クローン',
      'ローカル 音声クローン アプリ',
      'オープンソース AI 音楽生成 オフライン',
      'elevenlabs 代替 オープンソース',
      'ローカル 音声合成 mcp サーバー',
      'yovoice.leemysw.com',
      'yovoice 無料',
    ],
    current_models_mentioned: [
      'IndexTTS',
      'Qwen3-TTS',
      'XTTS v2',
      'Kokoro',
      'ACE-Step',
    ],
    current_hardware_mentioned: [
      'Apple silicon',
      'NVIDIA GPU',
    ],
    leadAnswerBlock: '**YoVoice（バージョン0.8.0）は、音声合成、声のクローン、AIによる楽曲生成、スコア作成をまとめたApache-2.0のデスクトップスタジオで、開発者によれば生成はお使いのコンピューター上でオフラインに実行されます。** CLI、ローカルHTTP API、エージェント向けMCPサーバーも付属しており、ここでの記述はすべて開発者の公式サイト、ドキュメント、GitHubリポジトリに基づきます。',
    quickAnswerTop: {
      ja: {
        question: 'YoVoiceは音声データをコンピューター内に保持しますか。',
        answer: '開発者のドキュメントによれば、モデルをダウンロードした後は、生成はお使いのコンピューター上で実行され、リファレンス音声はローカルのデータフォルダーに保存されます。ネットワークの利用は、モデルのダウンロード、更新の確認、ご自身で接続する任意のAIアシスタント、任意のコミュニティ共有について記載されています。',
        bullets: [
          'ローカルモデルを選んでテキストから音声を生成し、説明文から声をデザインするか、リファレンス録音から声をクローンします。',
          '歌詞付きの楽曲とインストゥルメンタルを作り、楽曲をステムに分離し、マルチトラックのスコアを編曲してMIDIとステムで書き出します。',
          '物語を1行ずつ、登場人物ごとに別の声で吹き込み、音声や動画を字幕ファイルに変換します。',
          'CLI、ローカルHTTP API、MCPサーバーにより、Claude CodeやCursorなどのエージェントが音声を生成できます。',
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
        label: 'YoVoiceとは',
        anchor: 'what-is-yovoice',
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
        label: '費用',
        anchor: 'plans',
      },
      {
        label: 'データの流れとプライバシー',
        anchor: 'privacy',
      },
      {
        label: '声のクローン、同意、モデルライセンス',
        anchor: 'voice-rights',
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
            text: 'YoVoiceは、テキストを音声にし、声をクローン・デザインし、ローカルモデルで楽曲やスコアを生成し、AIエージェントにCLI・API・MCPサーバーを提供するオープンソースのデスクトップスタジオです。',
          },
          {
            type: 'plain-terms',
            text: 'ナレーションブースと小さな音楽スタジオを1つのプログラムにまとめたもので、作業はサブスクリプションサービスではなく手元のマシンで行われる、と考えてください。',
          },
        ],
        items: [
          'メンテナンス：メインブランチの最終更新は2026年11月17日、バージョン0.8.0の公開は2026年11月15日のため、放置プロジェクトの警告は該当しません。',
          '費用：Apache-2.0ライセンスで無料、有料プランは見つかりませんでした。ダウンロードできる多くのモデルの重みには独自の条件があります。',
          'モデル：READMEによれば、音声・音楽・文字起こしのモデルはすべてアプリ内またはCLIでダウンロードします。',
          '対応プラットフォーム：macOS、Windows、Linux向けのインストーラーと、それぞれ単独のCLIアーカイブ。',
          '開発元：個人開発者のleemysw。企業の運営者情報（インプリント）は見つかりませんでした。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、[yovoice.leemysw.com](https://yovoice.leemysw.com)、[GitHubリポジトリ](https://github.com/leemysw/yovoice)、そのドキュメントとリリースページに基づいており、確認日は2026年11月17日です。PromptQuorumはアプリをインストールも実行もしていないため、音声品質、音楽品質、速度は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-yovoice',
        title: 'YoVoiceとは',
        content: [
          '**YoVoiceはローカルファーストのオーディオスタジオです。テキストを音声にし、声をデザインまたはクローンし、楽曲やインストゥルメンタルを生成し、マルチトラックのスコアを編曲します。使うモデルは、お使いのコンピューターにダウンロードして実行します。** READMEはmacOS、Windows、Linux向けのオープンソースのスタジオと説明しており、プロジェクトは名称を「yovoice」と表記し、公式サイトは中国語が主で英語版もあります。',
          '**推論エンジンはShugoAIのネイティブC++エンジンaudio.cppで、READMEによればPythonやCondaのセットアップは不要です。** 変更履歴によると、バージョン0.8.0ではコミュニティへの楽曲共有、カスタマイズ可能なキーボードショートカット、6種類のテーマ、新しい音声認識モデルが追加されました。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**YoVoiceはmacOS（Apple silicon）、Windows、Linux向けのダウンロード版で、通常のアプリと同じようにインストールします。単独のCLIアーカイブも公開されており、デスクトップアプリにターミナルは不要です。**',
        ],
        columns: [
          '選択肢',
          '入手方法',
        ],
        rows: [
          {
            '選択肢': 'macOS',
            '入手方法': 'Apple silicon向け.dmg、macOS 14以降：[GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            '選択肢': 'Windows',
            '入手方法': 'x64向けセットアップ.exe（CUDA 12.4／13.3版あり）：[GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            '選択肢': 'Linux',
            '入手方法': 'x64向け.deb（Debian/Ubuntu）または.tar.gz：[GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            '選択肢': 'CLI',
            '入手方法': 'OSごとの単独zip：[CLIガイド](https://github.com/leemysw/yovoice/blob/main/docs/cli.md)',
          },
          {
            '選択肢': '公式サイト',
            '入手方法': '[yovoice.leemysw.com](https://yovoice.leemysw.com)',
          },
          {
            '選択肢': 'プライバシーポリシー',
            '入手方法': '見つかりませんでした。あるのは[コミュニティ規約](https://yovoice.leemysw.com/en/community/terms/)のみです',
          },
          {
            '選択肢': 'ソースコード',
            '入手方法': '[github.com/leemysw/yovoice](https://github.com/leemysw/yovoice)、Apache-2.0ライセンス',
          },
        ],
        note: '確認したバージョン：0.8.0。[GitHubのリリースページ](https://github.com/leemysw/yovoice/releases/tag/v0.8.0)によれば2026年11月15日に公開され、メインブランチの最新の変更は2026年11月17日です。GitHubはこれらのインストーラーの配布経路にすぎず、モデルはアプリ内で別途ダウンロードします。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: [
          '**情報源にはRAM、VRAM、ディスク容量の最小値が示されていません。負荷が大きいのは別途ダウンロードするモデルで、サイズは大きく異なります。**',
        ],
        columns: [
          '項目',
          '情報源の記述',
        ],
        rows: [
          {
            '項目': 'OS',
            '情報源の記述': 'Apple silicon上のmacOS 14以降、Windows 10/11 x64、Linux x64。WindowsインストーラーはWebView2ランタイムが必要なら取得し、LinuxにはWebKitGTK 4.1が必要（.debが自動で導入）',
          },
          {
            '項目': 'アクセラレーション',
            '情報源の記述': 'macOSではMetal。WindowsのCUDA 12.4／13.3インストーラーはNVIDIA GPU用ランタイムを同梱。LinuxはそのままCPUで動作し、Vulkan GPUランタイムは設定からダウンロード可能',
          },
          {
            '項目': 'メモリとVRAM',
            '情報源の記述': 'モデルによります。ドキュメントにはモデルごとのファイルサイズ（例：IndexTTS 2.5はQ8で3.50 GB）があり、Breeze TTS 2にはGPUを推奨',
          },
          {
            '項目': 'モデル',
            '情報源の記述': 'アプリ内またはCLIでダウンロード（一時停止と再開に対応）。ダウンロードの合計サイズは情報源に記載なし',
          },
          {
            '項目': 'データフォルダー',
            '情報源の記述': '既定は~/.yovoiceで、設定から移動可能。アプリをアンインストールしても残ります',
          },
          {
            '項目': 'インターネット',
            '情報源の記述': 'モデルとランタイムのダウンロードに必要。ドキュメントによれば、エンジンとモデルをインストールした後は生成をオフラインで実行できます',
          },
        ],
        note: 'バックエンドはREADMEとCLIガイドの記載どおりです。PromptQuorumは、どのモデルがどのバックエンドで動くかは確認していません。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下の項目はすべてREADME、ドキュメント、変更履歴に基づくもので、独自に検証したものはありません。**',
        ],
        items: [
          '**音声、声のデザイン、クローン。** リファレンス録音から声をクローンし、テキストの説明から声をデザインし、感情や話し方を調整できます。モデル一覧にはIndexTTS 2.0／2.5、VoxCPM2、Qwen3-TTS、XTTS v2、Kokoroなどが含まれます。',
          '**物語の吹き込み。** テキストや字幕ファイルを取り込み、各行に登場人物を割り当てて1行ずつ生成します。1行につき複数のテイクを比較できます。',
          '**音楽とスコア。** ACE-Step 1.5またはYuE2で歌詞付き楽曲とインストゥルメンタル、Stable Audio 3でインストゥルメンタルと効果音、楽曲の6ステム分離、General MIDIのスコア編曲とMIDI・ステムの書き出し。',
          '**文字起こし。** 音声や動画を時刻付きの字幕行に変換し、SRTまたはWebVTTで書き出します。Qwen3 ASRやParakeetなどのモデルを使います。',
          '**エージェントとAPI。** インストール可能なAgent SkillとCLI、`yovoice serve`による認証付きHTTP API（MCPエンドポイント付き）、デスクトップアプリ内の127.0.0.1向けローカルAPI、DeepSeek、Qwen、OpenAI、Anthropic、Ollama、LM Studioなどのサービスで動く任意のアシスタントパネル。',
          '**インターフェース。** 12の表示言語、6つのテーマ、編集可能なキーボードショートカット。',
        ],
        note: 'AIのドキュメントには、機能は掲載されているすべてのプロバイダーで検証されているわけではないとあり、Linux版アプリはまだ自動更新しません。',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: '費用',
        content: [
          '**アプリはApache-2.0ライセンスで無料です。公式サイトにもリポジトリにも、有料プラン、試用、サブスクリプションの記載はありません。**',
        ],
        columns: [
          '項目',
          '情報源の記述',
        ],
        rows: [
          {
            '項目': 'アプリ',
            '情報源の記述': '無料。アカウントが必要と説明されているのはコミュニティ共有のみ',
          },
          {
            '項目': 'AIアシスタント',
            '情報源の記述': '任意。接続するプロバイダーの従量課金APIやプラン、またはローカルのOllamaやLM Studioサービス（通常キー不要）',
          },
          {
            '項目': 'モデル',
            '情報源の記述': 'ドキュメントにはアプリ内でのモデルダウンロードが記載され、料金の記載はありません。ライセンスはモデルごとに異なります',
          },
        ],
        note: 'いずれの通貨でも価格は記載されていません。公式サイトの構造化データには、アプリの価格として0 USDが記載されています。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**READMEは、生成は完全にお使いのCPUまたはGPU上で実行され、原稿、リファレンス音声、作品がコンピューターの外に出ることはないと述べており、公式サイトも「100%オフラインのプライバシー」を繰り返しています。** アーキテクチャ文書は、モデルとランタイムのダウンロード、およびユーザーが開始するコミュニティ共有を除けば、ネットワークを使うのはご自身が設定したAIサービスだけだと補足しています。READMEは別に、macOSとWindowsでのバックグラウンドでの更新確認にも触れています。',
          '任意のアシスタントは、入力したリクエストと固定の指示を、選んだプロバイダーへ直接送信し、キーは所有者のみの権限でローカルデータベースに保存されます。0.8.0で追加されたコミュニティ共有は、leemyswアカウントでサインインした後、プレビュー音声ファイルとプロジェクトパッケージをアップロードします。コミュニティ規約によれば、サインイン時に規約のバージョン、時刻、ネットワークアドレスが記録されます。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発者による表明であり、監査結果ではありません。PromptQuorumはコードを読んでおらず、アプリのネットワーク通信も調べていません。また、読めるプライバシーポリシーがないため、これらの記述はREADMEとドキュメントのみに基づきます。',
          },
        ],
      },
      voiceRights: {
        id: 'voice-rights',
        title: '声のクローン、同意、モデルライセンス',
        content: [
          '**クローンに必要なのはリファレンス録音だけで、READMEと確認したドキュメントのページには、その声が利用者本人のものかを確かめる仕組みの記載がないため、同意の確認はご自身の責任になります。** 開発者のコミュニティ規約は、実在の人物の声を本人の同意なく共有すること（著名人、俳優、歌手のクローンを含む）となりすましを禁じています。この規約が適用されるのはコミュニティであり、アプリの私的な利用ではありません。',
        ],
        items: [
          '**同意と法律。** 声をクローンすることが適法かどうかは、本人、目的、国によって異なります。このレビューは法的助言ではなく、PromptQuorumはいかなる法域も評価していません。',
          '**モデルのライセンスは異なります。** READMEによれば、OmniVoice、YuE2、Breeze TTS 2、Voxtral 4B TTS、MuScriptorの重みは非商用に限られ、XTTS v2とDrama 3はCoquiとFish Audio独自のライセンス、IndexTTSのモデルは別のモデルライセンス、Stable Audio 3は年間売上100万米ドル未満ならStability AI Community Licenseで無料です。Apache-2.0はアプリに適用され、これらの重みには適用されません。',
          '**共有のルール。** コミュニティ規約は、声の出所（自分の声、明確な同意を得た他者の声、合成音声のいずれか）を正直に申告すること、および商用利用を禁じるモデルで作った作品には非商用ライセンスを選ぶことを求めています。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**出力品質と速度。** PromptQuorumは音声や音楽を聴いておらず、生成速度の測定やどのモデルのクローン精度のテストも行っていません。公式サイトには音声サンプルがありますが、評価していません。',
          '**プロジェクトの成熟度。** リポジトリは2026年9月15日に作成され、個人開発者の名義で公開されているため、長期的なメンテナンスは不明です。',
          '**テイクの保持。** 変更履歴のUnreleasedの項には、10バージョンを超えると古いテイクが黙って削除される問題の修正があるとあります。バージョン0.8.0が該当するかは確認していないため、必要なテイクはコピーを保管してください。',
          '**対応言語。** 対応する音声の言語はモデルによって異なり、情報源に単一の数字はありません。どの言語も試していません。',
          '**インストーラーの署名。** macOSとWindowsのインストーラーが公証やコード署名を受けているかは確認していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: [
          'アプリ',
          '対応OS',
          '価格／ライセンス',
          '主な違い',
        ],
        rows: [
          {
            'アプリ': '[Voicebox](/ja/power-local-llm/voicebox-review)',
            '対応OS': 'macOS、Windows（Linuxはソースから）',
            '価格／ライセンス': '無料／MIT',
            '主な違い': '音声クローン、音声合成、Whisper音声入力とMCPサーバー。レビューには音楽生成やスコア作成の記載なし',
          },
          {
            'アプリ': '[XTTS v2](/ja/power-local-llm/xtts-v2-review)',
            '対応OS': 'macOS、Windows、Linux',
            '価格／ライセンス': '無料／CPML',
            '主な違い': 'ライブラリとして使う単一のクローンモデル。スタジオ、音楽、エージェント機能なし',
          },
          {
            'アプリ': '[Coqui TTS](/ja/power-local-llm/coqui-tts-review)',
            '対応OS': 'macOS、Windows、Linux',
            '価格／ライセンス': '無料／MPL 2.0',
            '主な違い': '音声合成モデルをコードから実行するPythonツールキットで、デスクトップスタジオではない',
          },
          {
            'アプリ': '[Bark](/ja/power-local-llm/bark-tts-review)',
            '対応OS': 'macOS、Windows、Linux',
            '価格／ライセンス': '無料／MIT',
            '主な違い': 'コードから使うテキストから音声へのモデル。レビューによれば独自の音声クローンなし',
          },
        ],
        note: 'いずれもPromptQuorumのディレクトリにある同カテゴリのアプリです。各アプリの最新の価格、ライセンス、対応OSは、それぞれのページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'スクリプトやAIエージェントから使えますか。',
            a: 'はい。CLIはデスクトップアプリなしで動作し、インストール可能なAgent SkillによってエージェントがCLI、エンジン、モデルを設定できます。サーバーとアプリ内のローカルAPIはOAuthログインではなく事前設定のBearerトークンを使い、ローカルAPIは同じコンピューターからのみ接続できます。',
          },
          {
            q: '最初にどのモデルを使えばよいですか。',
            a: 'クイックスタートは、速いナレーションにはKokoro-82M、クローンにはVoxCPM2を勧めており、ドキュメントによればKokoroには内蔵音声があり、クローンはできません。出力品質は比較していません。',
          },
          {
            q: '自分の言語に対応していますか。',
            a: '表示言語は12ですが、音声はモデルによります。ドキュメントによれば、IndexTTS 2.5は中国語と英語に日本語、スペイン語、アラビア語を加え、XTTS v2は17言語、Audio8 TTS Realisticは11言語に対応します。いずれも試していません。',
          },
          {
            q: 'AIアシスタントを完全にローカルで動かせますか。',
            a: 'ドキュメントによれば、同じコンピューター上のOllamaやLM Studioに接続できます。ただし、大きなモデルのほうが編曲の出来が明らかに良く、小さなローカルモデルは形式チェックに失敗することがあるとも書かれています。',
          },
          {
            q: '共有した楽曲にリファレンス音声は含まれますか。',
            a: 'いいえ。コミュニティ規約とアーキテクチャ文書によれば、共有パッケージにはそのバージョンの音声、歌詞、生成設定が含まれ、リファレンス音声は含まれません。公開前に人が各作品を審査し、共有した作品はアプリの設定から削除できます。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'YoVoiceは、若いながら活発に開発されているApache-2.0のツールで、自分のコンピューター上で音声を生成し、声をクローンし、AI音楽を作れます。CLIとMCPサーバーによってエージェントからも操作できます。オフラインに関する記述は独立した監査ではなくREADMEとドキュメントに基づき、リポジトリはまだ2か月で個人開発者の名義で公開されており、複数のモデルの重みは商用利用を禁じ、Mac版はApple siliconのみです。無料のローカルオーディオツールを求め、大きなモデルファイルをダウンロードできるクリエイターや開発者に向いています。実証された出力品質、モデルごとの商用利用の明確さ、検証済みのデータポリシーが必要な方は、試したうえで、先に各モデルのライセンスを読んでください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[YoVoice公式サイト](https://yovoice.leemysw.com/en/) — 概要、対応プラットフォーム、ダウンロード。',
          '[YoVoiceコミュニティ規約](https://yovoice.leemysw.com/en/community/terms/) — 共有ルール、声の同意、準拠法、保存されるデータ（2026年11月12日施行）。',
          '[GitHubのYoVoice](https://github.com/leemysw/yovoice) — README、Apache-2.0ライセンス、モデルライセンスの注記。',
          '[YoVoiceリリース0.8.0](https://github.com/leemysw/yovoice/releases/tag/v0.8.0) — バージョン、日付、インストーラーファイル。',
          '[モデル選択ガイド](https://github.com/leemysw/yovoice/blob/main/docs/models.md) — モデル、入力、言語、ファイルサイズ。',
          '[AIサービスガイド](https://github.com/leemysw/yovoice/blob/main/docs/ai.md) — アシスタントのプロバイダー、キーの保存、制限事項。',
          '[APIとMCPのガイド](https://github.com/leemysw/yovoice/blob/main/docs/api.md) — サーバー、ローカルAPI、MCPツール。',
          '[CLIガイド](https://github.com/leemysw/yovoice/blob/main/docs/cli.md) — CLIのインストールとバックエンド。',
          '[アーキテクチャノート](https://github.com/leemysw/yovoice/blob/main/docs/architecture.md) — プロセス、ネットワーク利用、データフォルダー。',
          '[変更履歴](https://github.com/leemysw/yovoice/blob/main/CHANGELOG.md) — 0.8.0の変更点と未公開の修正。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Voiceboxレビュー](/ja/power-local-llm/voicebox-review) — 音声入力とMCPサーバーを備えた、MITライセンスの無料ローカル音声スタジオ。',
          '[XTTS v2レビュー](/ja/power-local-llm/xtts-v2-review) — ライブラリとしてローカルで動く音声クローンモデル。',
          '[Coqui TTSレビュー](/ja/power-local-llm/coqui-tts-review) — ローカルの音声合成向けPythonツールキット。',
          '[音声・オーディオツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — このレビューが属するカテゴリ比較。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-17',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/yovoice-review-hero-pt.webp',
    title: 'Análise do YoVoice: estúdio local de clonagem de voz e música',
    seoTitle: 'Análise do YoVoice: clonagem de voz local e gratuita',
    intro: 'O YoVoice (escrito «yovoice» pelo seu criador) é um estúdio de desktop de código aberto que gera voz, clona e cria vozes, e compõe músicas e partituras com modelos executados no seu próprio computador. Ele também oferece uma linha de comando, uma API HTTP e um servidor MCP para agentes de IA, e o app é gratuito sob a licença Apache-2.0. Esta análise se baseia no site, no repositório do GitHub, na documentação e na página de versões, consultados em 17 de novembro de 2026; a PromptQuorum não testou o app na prática.',
    metaDescription: 'Análise do YoVoice: estúdio local gratuito (Apache-2.0) de texto em fala, clonagem de voz e música com IA no Mac, Windows e Linux, com CLI e MCP.',
    twitterDescription: 'Voz, clonagem de voz e música com IA em um estúdio de desktop gratuito com Apache-2.0 que roda no seu computador, mais CLI e servidor MCP. O que as fontes confirmam sobre privacidade, licenças de modelos e maturidade, e o que não confirmam.',
    audience: 'Criadores, desenvolvedores e construtores de agentes que querem texto em fala, clonagem de voz e música com IA localmente e precisam saber o que as fontes confirmam, o que o app baixa e onde as licenças dos modelos limitam o uso.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do YoVoice',
    targetKeywords: [
      'análise yovoice',
      'yovoice clonagem de voz',
      'app local de clonagem de voz',
      'gerador de música com ia offline código aberto',
      'alternativa ao elevenlabs código aberto',
      'servidor mcp de texto em fala local',
      'yovoice.leemysw.com',
      'yovoice é gratuito',
    ],
    current_models_mentioned: [
      'IndexTTS',
      'Qwen3-TTS',
      'XTTS v2',
      'Kokoro',
      'ACE-Step',
    ],
    current_hardware_mentioned: [
      'Apple silicon',
      'NVIDIA GPU',
    ],
    leadAnswerBlock: '**O YoVoice (versão 0.8.0) é um estúdio de desktop com Apache-2.0 que reúne texto em fala, clonagem de voz, geração de músicas com IA e criação de partituras, e o criador afirma que a geração roda offline no seu próprio computador.** Ele também traz uma CLI, uma API HTTP local e um servidor MCP para agentes, e cada afirmação desta análise vem do site do criador, da documentação e do repositório do GitHub.',
    quickAnswerTop: {
      pt: {
        question: 'O YoVoice mantém meus dados de voz no meu computador?',
        answer: 'Segundo a documentação do criador, a geração roda no seu computador depois que os modelos são baixados, e as vozes de referência ficam em uma pasta de dados local. O uso de rede é descrito para baixar modelos, verificar atualizações, um assistente de IA opcional que você mesmo conecta e o compartilhamento opcional na comunidade.',
        bullets: [
          'Gera fala a partir de texto com uma seleção de modelos locais, cria uma voz a partir de uma descrição ou a clona de uma gravação de referência.',
          'Compõe músicas com letra e instrumentais, separa músicas em stems e arranja partituras multipista exportadas como MIDI e stems.',
          'Dubla histórias linha a linha com uma voz diferente por personagem e transforma áudio ou vídeo em arquivos de legendas.',
          'Uma CLI, uma API HTTP local e um servidor MCP permitem que agentes como Claude Code e Cursor gerem áudio.',
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
        label: 'O que é o YoVoice?',
        anchor: 'what-is-yovoice',
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
        label: 'Custo',
        anchor: 'plans',
      },
      {
        label: 'Fluxo de dados e privacidade',
        anchor: 'privacy',
      },
      {
        label: 'Clonagem de voz, consentimento e licenças de modelos',
        anchor: 'voice-rights',
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
            text: 'O YoVoice é um estúdio de desktop de código aberto que transforma texto em fala, clona e cria vozes, gera músicas e partituras com modelos locais e oferece a agentes de IA uma CLI, uma API e um servidor MCP.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como uma cabine de locução e um pequeno estúdio de música em um só programa, com o trabalho feito na sua própria máquina em vez de um serviço por assinatura.',
          },
        ],
        items: [
          'Manutenção: o ramo principal foi alterado pela última vez em 17 de novembro de 2026 e a versão 0.8.0 foi publicada em 15 de novembro de 2026, portanto não se aplica aviso de projeto abandonado.',
          'Custo: gratuito sob a licença Apache-2.0, sem plano pago encontrado; muitos pesos de modelos baixáveis têm termos próprios.',
          'Modelos: segundo o README, todos os modelos de voz, música e transcrição são baixados dentro do app ou com a CLI.',
          'Plataformas: instaladores para macOS, Windows e Linux, além de um arquivo CLI independente para cada um.',
          'Criador: um desenvolvedor individual, leemysw; nenhum aviso legal de empresa encontrado.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia em [yovoice.leemysw.com](https://yovoice.leemysw.com), no [repositório do GitHub](https://github.com/leemysw/yovoice), na documentação e na página de versões, consultados em 17 de novembro de 2026. A PromptQuorum não instalou nem executou o app, portanto a qualidade da voz, a qualidade da música e a velocidade não são avaliadas.',
          },
        ],
      },
      overview: {
        id: 'what-is-yovoice',
        title: 'O que é o YoVoice?',
        content: [
          '**O YoVoice é um estúdio de áudio local: transforma texto em fala, cria ou clona uma voz, gera músicas e instrumentais e arranja partituras multipista, usando modelos que você baixa e executa no seu próprio computador.** O README o descreve como um estúdio de código aberto para macOS, Windows e Linux; o projeto escreve o nome como «yovoice», e o site é primeiro em chinês, com uma versão em inglês.',
          '**O mecanismo de inferência é o audio.cpp, um mecanismo nativo em C++ da ShugoAI, então o README diz que não é preciso configurar Python nem Conda.** A versão 0.8.0 adicionou, segundo o registro de alterações, o compartilhamento de músicas na comunidade, atalhos de teclado personalizáveis, seis temas e novos modelos de reconhecimento de fala.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O YoVoice é um download para macOS (Apple silicon), Windows e Linux que se instala como qualquer outro app; também é publicado um arquivo CLI independente, e o app de desktop não exige terminal.**',
        ],
        columns: [
          'Opção',
          'Onde obter',
        ],
        rows: [
          {
            'Opção': 'macOS',
            'Onde obter': '.dmg para Apple silicon, macOS 14 ou posterior: [GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            'Opção': 'Windows',
            'Onde obter': 'Instalador .exe para x64, com variantes CUDA 12.4 e 13.3: [GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            'Opção': 'Linux',
            'Onde obter': '.deb (Debian/Ubuntu) ou .tar.gz para x64: [GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            'Opção': 'CLI',
            'Onde obter': 'Zip independente por sistema: [guia da CLI](https://github.com/leemysw/yovoice/blob/main/docs/cli.md)',
          },
          {
            'Opção': 'Site',
            'Onde obter': '[yovoice.leemysw.com](https://yovoice.leemysw.com)',
          },
          {
            'Opção': 'Política de privacidade',
            'Onde obter': 'Nenhuma encontrada; existem apenas os [termos da comunidade](https://yovoice.leemysw.com/en/community/terms/)',
          },
          {
            'Opção': 'Código-fonte',
            'Onde obter': '[github.com/leemysw/yovoice](https://github.com/leemysw/yovoice), licença Apache-2.0',
          },
        ],
        note: 'Versão analisada: 0.8.0, publicada em 15 de novembro de 2026 segundo a [página de versões do GitHub](https://github.com/leemysw/yovoice/releases/tag/v0.8.0); a alteração mais recente do ramo principal é de 17 de novembro de 2026. O GitHub é apenas o canal de entrega desses instaladores, e os modelos são baixados separadamente dentro do app.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**As fontes não indicam mínimo de RAM, VRAM nem de espaço em disco; o que pesa são os modelos, baixados separadamente e de tamanhos muito variados.**',
        ],
        columns: [
          'Item',
          'O que as fontes dizem',
        ],
        rows: [
          {
            Item: 'Sistema operacional',
            'O que as fontes dizem': 'macOS 14 ou posterior em Apple silicon, Windows 10/11 x64, Linux x64; o instalador do Windows baixa o runtime WebView2 se preciso e o Linux exige WebKitGTK 4.1 (o .deb o instala)',
          },
          {
            Item: 'Aceleração',
            'O que as fontes dizem': 'Metal no macOS; os instaladores do Windows com CUDA 12.4 e 13.3 incluem um runtime para GPUs NVIDIA; o Linux roda na CPU de fábrica, com um runtime de GPU Vulkan que pode ser baixado nas Configurações',
          },
          {
            Item: 'Memória e VRAM',
            'O que as fontes dizem': 'Depende do modelo; a documentação lista o tamanho dos arquivos por modelo, por exemplo IndexTTS 2.5 com 3.50 GB em Q8, e recomenda uma GPU para o Breeze TTS 2',
          },
          {
            Item: 'Modelos',
            'O que as fontes dizem': 'Baixados dentro do app ou com a CLI, com pausa e retomada; as fontes não informam o tamanho total dos downloads',
          },
          {
            Item: 'Pasta de dados',
            'O que as fontes dizem': '~/.yovoice por padrão, pode ser movida nas Configurações; desinstalar o app a preserva',
          },
          {
            Item: 'Internet',
            'O que as fontes dizem': 'Necessária para baixar modelos e runtimes; a documentação diz que a geração funciona offline depois de instalados o mecanismo e um modelo',
          },
        ],
        note: 'Os backends são os listados no README e no guia da CLI; a PromptQuorum não verificou quais modelos rodam em cada backend.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Tudo o que segue vem do README, da documentação ou do registro de alterações; nada foi testado de forma independente.**',
        ],
        items: [
          '**Voz, criação de voz e clonagem.** Clonar uma voz a partir de uma gravação de referência, criar uma a partir de uma descrição em texto e ajustar emoção e entonação; a lista de modelos inclui IndexTTS 2.0 e 2.5, VoxCPM2, Qwen3-TTS, XTTS v2 e Kokoro.',
          '**Dublagem de histórias.** Importar arquivos de texto ou legendas, atribuir um personagem a cada linha e gerar linha a linha, com várias tomadas por linha para comparar.',
          '**Música e partituras.** Músicas com letra e instrumentais com ACE-Step 1.5 ou YuE2, instrumentais e efeitos sonoros com Stable Audio 3, separação de uma música em seis stems e arranjo de partituras General MIDI com exportação de MIDI e stems.',
          '**Transcrição.** Áudio ou vídeo viram linhas de legenda com marcação de tempo, exportadas como SRT ou WebVTT, com modelos como Qwen3 ASR e Parakeet.',
          '**Agentes e API.** Um Agent Skill instalável e a CLI, uma API HTTP autenticada com endpoint MCP via `yovoice serve`, uma API local dentro do app de desktop em 127.0.0.1 e um painel de assistente opcional que funciona com serviços como DeepSeek, Qwen, OpenAI, Anthropic, Ollama e LM Studio.',
          '**Interface.** Doze idiomas de interface, seis temas e atalhos de teclado editáveis.',
        ],
        note: 'A documentação de IA diz que seus recursos não foram verificados com todos os provedores listados, e o app para Linux ainda não se atualiza sozinho.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'Custo',
        content: [
          '**O app é gratuito sob a licença Apache-2.0, e nem o site nem o repositório citam plano pago, teste ou assinatura.**',
        ],
        columns: [
          'Item',
          'O que as fontes dizem',
        ],
        rows: [
          {
            Item: 'App',
            'O que as fontes dizem': 'Gratuito; só o compartilhamento na comunidade é descrito como exigindo uma conta',
          },
          {
            Item: 'Assistente de IA',
            'O que as fontes dizem': 'Opcional; uma API paga por uso ou um plano do provedor que você conectar, ou um serviço local Ollama ou LM Studio, que em geral dispensa chave',
          },
          {
            Item: 'Modelos',
            'O que as fontes dizem': 'A documentação descreve o download de modelos dentro do app e não cita nenhuma taxa; as licenças diferem por modelo',
          },
        ],
        note: 'Nenhum preço foi informado em nenhuma moeda; os dados estruturados do site indicam preço de 0 USD para o app.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**O README diz que a geração roda inteiramente na sua própria CPU ou GPU e que manuscritos, vozes de referência e criações nunca saem do computador, e o site repete «100% de privacidade offline».** O documento de arquitetura acrescenta que, além dos downloads de modelos e runtimes e do compartilhamento na comunidade iniciado pelo usuário, o único uso de rede é o serviço de IA que você configurar; o README descreve à parte verificações de atualização em segundo plano no macOS e no Windows.',
          'O assistente opcional envia o pedido que você digita e uma instrução fixa diretamente ao provedor que você escolher, e as chaves ficam no banco de dados local com permissões só para o proprietário. O compartilhamento na comunidade, adicionado na 0.8.0, envia um arquivo de áudio de prévia e um pacote de projeto depois de você entrar com uma conta leemysw, e os termos da comunidade dizem que o login registra a versão dos termos, o horário e o seu endereço de rede.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas são declarações do criador, não resultados de auditoria. A PromptQuorum não leu o código nem inspecionou o tráfego de rede do app, e, sem uma política de privacidade para ler, essas afirmações vêm apenas do README e da documentação.',
          },
        ],
      },
      voiceRights: {
        id: 'voice-rights',
        title: 'Clonagem de voz, consentimento e licenças de modelos',
        content: [
          '**A clonagem exige apenas uma gravação de referência, e o README e as páginas de documentação que lemos não descrevem nenhuma verificação de que a voz pertence ao usuário, então o consentimento é responsabilidade sua.** Os termos da comunidade do criador proíbem compartilhar a voz de uma pessoa real sem o consentimento dela, incluindo clones de figuras públicas, atores e cantores, e a falsa identidade; esses termos regem a comunidade, não o uso privado do app.',
        ],
        items: [
          '**Consentimento e lei.** Se clonar uma voz é lícito depende da pessoa, da finalidade e do país; esta análise não é aconselhamento jurídico, e a PromptQuorum não avaliou nenhuma jurisdição.',
          '**As licenças dos modelos diferem.** Segundo o README, os pesos de OmniVoice, YuE2, Breeze TTS 2, Voxtral 4B TTS e MuScriptor são restritos a uso não comercial, XTTS v2 e Drama 3 usam licenças próprias da Coqui e da Fish Audio, os modelos IndexTTS têm uma licença de modelo separada e o Stable Audio 3 é gratuito abaixo de 1 milhão de USD de receita anual pela Stability AI Community License. A licença Apache-2.0 cobre o app, não esses pesos.',
          '**Regras de compartilhamento.** Os termos da comunidade exigem informar com veracidade a origem de uma voz (a própria, a de outra pessoa com consentimento claro ou uma voz sintética) e escolher uma licença não comercial para obras de modelos que proíbem o uso comercial.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade de saída e velocidade.** A PromptQuorum não ouviu voz nem música, não mediu a velocidade de geração nem testou a precisão da clonagem de nenhum modelo; o site oferece amostras de áudio que não avaliamos.',
          '**Maturidade do projeto.** O repositório foi criado em 15 de setembro de 2026 e está publicado com o nome de um único desenvolvedor, então a manutenção a longo prazo é desconhecida.',
          '**Retenção de tomadas.** A seção Unreleased do registro de alterações diz que uma correção impede que a geração apague silenciosamente tomadas antigas após dez versões; não verificamos se a versão 0.8.0 se comporta assim, então guarde cópias das tomadas de que precisar.',
          '**Cobertura de idiomas.** Os idiomas de fala compatíveis dependem do modelo e as fontes não dão um número único; não testamos nenhum idioma.',
          '**Assinatura dos instaladores.** Não verificamos se os instaladores de macOS e Windows são notarizados ou assinados.',
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
            App: '[Voicebox](/pt/power-local-llm/voicebox-review)',
            Plataformas: 'macOS, Windows (Linux a partir do código)',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Clonagem de voz, texto em fala e ditado com Whisper com servidor MCP; a análise não cita geração de música nem partituras',
          },
          {
            App: '[XTTS v2](/pt/power-local-llm/xtts-v2-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Grátis / CPML',
            'Diferença principal': 'Um único modelo de clonagem usado como biblioteca, sem estúdio, música nem recursos de agente',
          },
          {
            App: '[Coqui TTS](/pt/power-local-llm/coqui-tts-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Grátis / MPL 2.0',
            'Diferença principal': 'Um kit de Python para executar modelos de texto em fala pelo código, não um estúdio de desktop',
          },
          {
            App: '[Bark](/pt/power-local-llm/bark-tts-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Um modelo de texto em áudio usado pelo código, sem clonagem de voz própria segundo a análise',
          },
        ],
        note: 'São apps da mesma categoria do diretório da PromptQuorum; confirme o preço, a licença e as plataformas atuais de cada app na própria página.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso usá-lo a partir de um script ou de um agente de IA?',
            a: 'Sim: a CLI funciona sem o app de desktop, e um Agent Skill instalável permite que um agente configure a CLI, o mecanismo e o modelo. O servidor e a API local do app usam um token bearer pré-configurado em vez de login OAuth, e a API local só é acessível a partir do mesmo computador.',
          },
          {
            q: 'Com qual modelo devo começar?',
            a: 'O guia de início sugere o Kokoro-82M para narração rápida ou o VoxCPM2 para clonagem, e a documentação diz que o Kokoro tem vozes integradas e não clona. Não comparamos a qualidade de saída.',
          },
          {
            q: 'Ele é compatível com o meu idioma?',
            a: 'A interface tem doze idiomas, mas a fala depende do modelo: segundo a documentação, o IndexTTS 2.5 acrescenta japonês, espanhol e árabe ao chinês e ao inglês, o XTTS v2 cobre 17 idiomas e o Audio8 TTS Realistic 11. Não testamos nenhum deles.',
          },
          {
            q: 'O assistente de IA pode rodar totalmente local?',
            a: 'Ele pode se conectar ao Ollama ou ao LM Studio no mesmo computador, segundo a documentação, que acrescenta que modelos maiores escrevem arranjos nitidamente melhores e que modelos locais pequenos podem falhar na verificação de formato.',
          },
          {
            q: 'As músicas compartilhadas incluem minhas vozes de referência?',
            a: 'Não: segundo os termos da comunidade e o documento de arquitetura, um pacote compartilhado contém o áudio, a letra e as configurações de geração daquela versão, mas não as vozes de referência, uma pessoa revisa cada obra antes de ela ser pública, e as obras compartilhadas podem ser excluídas nas configurações do app.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'O YoVoice é uma forma jovem, mas ativamente desenvolvida e com Apache-2.0, de gerar voz, clonar vozes e fazer música com IA no seu próprio computador, com uma CLI e um servidor MCP que permitem que agentes o controlem. As afirmações sobre funcionamento offline vêm do README e da documentação, não de uma auditoria independente, o repositório tem apenas dois meses e um único desenvolvedor identificado, vários pesos de modelos proíbem o uso comercial e a versão para Mac cobre apenas Apple silicon. Serve para criadores e desenvolvedores que querem uma ferramenta de áudio local e gratuita e vão baixar arquivos de modelo grandes; quem precisa de qualidade de saída comprovada, clareza sobre o uso comercial de cada modelo ou uma política de dados verificada deve testá-lo e ler antes a licença de cada modelo.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do YoVoice](https://yovoice.leemysw.com/en/) — descrição, plataformas e downloads.',
          '[Termos da comunidade do YoVoice](https://yovoice.leemysw.com/en/community/terms/) — regras de compartilhamento, consentimento de voz, lei aplicável e dados armazenados, em vigor desde 12 de novembro de 2026.',
          '[YoVoice no GitHub](https://github.com/leemysw/yovoice) — README, licença Apache-2.0 e notas sobre licenças de modelos.',
          '[Versão 0.8.0 do YoVoice](https://github.com/leemysw/yovoice/releases/tag/v0.8.0) — versão, data e arquivos de instalação.',
          '[Guia de seleção de modelos](https://github.com/leemysw/yovoice/blob/main/docs/models.md) — modelos, entradas, idiomas e tamanhos de arquivo.',
          '[Guia do serviço de IA](https://github.com/leemysw/yovoice/blob/main/docs/ai.md) — provedores do assistente, armazenamento de chaves e limites.',
          '[Guia de API e MCP](https://github.com/leemysw/yovoice/blob/main/docs/api.md) — servidor, API local e ferramentas MCP.',
          '[Guia da CLI](https://github.com/leemysw/yovoice/blob/main/docs/cli.md) — instalação da CLI e backends.',
          '[Notas de arquitetura](https://github.com/leemysw/yovoice/blob/main/docs/architecture.md) — processos, uso de rede e pasta de dados.',
          '[Registro de alterações](https://github.com/leemysw/yovoice/blob/main/CHANGELOG.md) — mudanças da 0.8.0 e correções não lançadas.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Voicebox](/pt/power-local-llm/voicebox-review) — um estúdio de voz local, gratuito e com licença MIT, com ditado e servidor MCP.',
          '[Análise do XTTS v2](/pt/power-local-llm/xtts-v2-review) — um modelo de clonagem de voz que roda localmente como biblioteca.',
          '[Análise do Coqui TTS](/pt/power-local-llm/coqui-tts-review) — um kit de Python para texto em fala local.',
          '[Ferramentas de voz e áudio comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — a comparação da categoria à qual esta análise pertence.',
          '[Diretório de software LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-17',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/yovoice-review-hero-ar.webp',
    title: 'مراجعة YoVoice: استوديو محلي لاستنساخ الصوت والموسيقى',
    seoTitle: 'مراجعة YoVoice: استنساخ الصوت والموسيقى محليًا ومجانًا',
    intro: 'YoVoice (يكتبه مطوّره «yovoice») استوديو مفتوح المصدر لسطح المكتب يولّد الكلام ويستنسخ الأصوات ويصمّمها ويكتب الأغاني والمقطوعات بنماذج تعمل على جهازك. ويوفّر أيضًا سطر أوامر وواجهة HTTP API وخادم MCP لوكلاء الذكاء الاصطناعي، والتطبيق مجاني بموجب ترخيص Apache-2.0. تستند هذه المراجعة إلى الموقع ومستودع GitHub والتوثيق وصفحة الإصدارات، وقد جرى الاطلاع عليها في 17 نوفمبر 2026؛ ولم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription: 'مراجعة YoVoice: استوديو محلي مجاني (Apache-2.0) لتحويل النص إلى كلام واستنساخ الصوت وموسيقى الذكاء الاصطناعي على Mac وWindows وLinux مع CLI وMCP.',
    twitterDescription: 'الكلام واستنساخ الصوت وموسيقى الذكاء الاصطناعي في استوديو مجاني بترخيص Apache-2.0 يعمل على جهازك، مع CLI وخادم MCP. ما تؤكده المصادر بشأن الخصوصية وتراخيص النماذج والنضج، وما لا تؤكده.',
    audience: 'المبدعون والمطوّرون وبُناة الوكلاء الذين يريدون تحويل النص إلى كلام واستنساخ الصوت وموسيقى الذكاء الاصطناعي محليًا، ويحتاجون إلى معرفة ما تؤكده المصادر وما ينزّله التطبيق وأين تقيّد تراخيص النماذج الاستخدام.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة YoVoice',
    targetKeywords: [
      'مراجعة yovoice',
      'yovoice استنساخ الصوت',
      'تطبيق محلي لاستنساخ الصوت',
      'مولّد موسيقى بالذكاء الاصطناعي دون اتصال مفتوح المصدر',
      'بديل elevenlabs مفتوح المصدر',
      'خادم mcp لتحويل النص إلى كلام محليًا',
      'yovoice.leemysw.com',
      'هل yovoice مجاني',
    ],
    current_models_mentioned: [
      'IndexTTS',
      'Qwen3-TTS',
      'XTTS v2',
      'Kokoro',
      'ACE-Step',
    ],
    current_hardware_mentioned: [
      'Apple silicon',
      'NVIDIA GPU',
    ],
    leadAnswerBlock: '**YoVoice (الإصدار 0.8.0) استوديو لسطح المكتب بترخيص Apache-2.0 يجمع بين تحويل النص إلى كلام واستنساخ الصوت وتوليد الأغاني بالذكاء الاصطناعي وكتابة المقطوعات، ويقول مطوّره إن التوليد يعمل دون اتصال على جهازك.** ويأتي أيضًا مع CLI وواجهة HTTP API محلية وخادم MCP للوكلاء، وكل عبارة هنا مأخوذة من موقع المطوّر والتوثيق ومستودع GitHub.',
    quickAnswerTop: {
      ar: {
        question: 'هل يُبقي YoVoice بياناتي الصوتية على جهازي؟',
        answer: 'بحسب توثيق المطوّر، يعمل التوليد على جهازك بعد تنزيل النماذج، وتُخزَّن الأصوات المرجعية في مجلد بيانات محلي. ويوصف استخدام الشبكة لتنزيل النماذج والتحقق من التحديثات ومساعد ذكاء اصطناعي اختياري تربطه بنفسك ومشاركة اختيارية في المجتمع.',
        bullets: [
          'يولّد الكلام من النص بنماذج محلية تختار منها، ويصمّم صوتًا من وصف أو يستنسخه من تسجيل مرجعي.',
          'يكتب أغاني بكلمات ومقطوعات موسيقية، ويفصل الأغاني إلى stems، وينسّق مقطوعات متعددة المسارات تُصدَّر بصيغة MIDI وstems.',
          'يدبلج القصص سطرًا بسطر بصوت مختلف لكل شخصية، ويحوّل الصوت أو الفيديو إلى ملفات ترجمة.',
          'تتيح واجهة CLI وواجهة HTTP API محلية وخادم MCP لوكلاء مثل Claude Code وCursor توليد الصوت.',
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
        label: 'ما هو YoVoice؟',
        anchor: 'what-is-yovoice',
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
        label: 'التكلفة',
        anchor: 'plans',
      },
      {
        label: 'تدفق البيانات والخصوصية',
        anchor: 'privacy',
      },
      {
        label: 'استنساخ الصوت والموافقة وتراخيص النماذج',
        anchor: 'voice-rights',
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
            text: 'YoVoice استوديو مفتوح المصدر لسطح المكتب يحوّل النص إلى كلام ويستنسخ الأصوات ويصمّمها ويولّد الأغاني والمقطوعات بنماذج محلية، ويمنح وكلاء الذكاء الاصطناعي واجهة CLI وواجهة API وخادم MCP.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله كابينة تسجيل صوتي واستوديو موسيقى صغيرًا في برنامج واحد، يجري العمل فيه على جهازك بدلًا من خدمة اشتراك.',
          },
        ],
        items: [
          'الصيانة: آخر تغيير في الفرع الرئيسي كان في 17 نوفمبر 2026 ونُشر الإصدار 0.8.0 في 15 نوفمبر 2026، لذا لا ينطبق تحذير المشروع المهجور.',
          'التكلفة: مجاني بموجب ترخيص Apache-2.0 ولم نجد خطة مدفوعة؛ ولكثير من أوزان النماذج القابلة للتنزيل شروطها الخاصة.',
          'النماذج: يقول README إن جميع نماذج الصوت والموسيقى والتفريغ النصي تُنزَّل داخل التطبيق أو بواسطة CLI.',
          'المنصات: مثبّتات لأنظمة macOS وWindows وLinux، إضافة إلى أرشيف CLI مستقل لكل منها.',
          'المطوّر: مطوّر فردي هو leemysw، ولم نجد بيانات قانونية لشركة.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى [yovoice.leemysw.com](https://yovoice.leemysw.com) و[مستودع GitHub](https://github.com/leemysw/yovoice) وتوثيقه وصفحة الإصدارات، وقد جرى الاطلاع عليها في 17 نوفمبر 2026. لم تثبّت PromptQuorum التطبيق ولم تشغّله، لذلك لا تُقيَّم جودة الصوت ولا جودة الموسيقى ولا السرعة.',
          },
        ],
      },
      overview: {
        id: 'what-is-yovoice',
        title: 'ما هو YoVoice؟',
        content: [
          '**YoVoice استوديو صوتي محلي أولًا: يحوّل النص إلى كلام، ويصمّم الصوت أو يستنسخه، ويولّد الأغاني والمقطوعات الموسيقية، وينسّق مقطوعات متعددة المسارات، بنماذج تنزّلها وتشغّلها على جهازك.** يصفه README بأنه استوديو مفتوح المصدر لأنظمة macOS وWindows وLinux؛ ويكتب المشروع اسمه «yovoice»، وموقعه بالصينية أولًا مع نسخة إنجليزية.',
          '**محرّك الاستدلال هو audio.cpp، وهو محرّك أصلي بلغة C++ من ShugoAI، ولذلك يقول README إنه لا حاجة إلى إعداد Python أو Conda.** وأضاف الإصدار 0.8.0، بحسب سجل التغييرات، مشاركة الأغاني في المجتمع واختصارات لوحة مفاتيح قابلة للتخصيص و6 سمات ونماذج جديدة للتعرف على الكلام.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**YoVoice تنزيل لأنظمة macOS (Apple silicon) وWindows وLinux يُثبَّت كأي تطبيق آخر؛ كما يُنشر أرشيف CLI مستقل، ولا يحتاج تطبيق سطح المكتب إلى طرفية.**',
        ],
        columns: [
          'الخيار',
          'مصدر الحصول عليه',
        ],
        rows: [
          {
            'الخيار': 'macOS',
            'مصدر الحصول عليه': 'ملف .dmg لـ Apple silicon، macOS 14 أو أحدث: [GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            'الخيار': 'Windows',
            'مصدر الحصول عليه': 'مثبّت .exe لمعمارية x64 مع نسختي CUDA 12.4 و13.3: [GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            'الخيار': 'Linux',
            'مصدر الحصول عليه': 'ملف .deb (Debian/Ubuntu) أو .tar.gz لمعمارية x64: [GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            'الخيار': 'CLI',
            'مصدر الحصول عليه': 'ملف zip مستقل لكل نظام: [دليل CLI](https://github.com/leemysw/yovoice/blob/main/docs/cli.md)',
          },
          {
            'الخيار': 'الموقع',
            'مصدر الحصول عليه': '[yovoice.leemysw.com](https://yovoice.leemysw.com)',
          },
          {
            'الخيار': 'سياسة الخصوصية',
            'مصدر الحصول عليه': 'لم نجدها؛ المتوفر فقط [شروط المجتمع](https://yovoice.leemysw.com/en/community/terms/)',
          },
          {
            'الخيار': 'الشيفرة المصدرية',
            'مصدر الحصول عليه': '[github.com/leemysw/yovoice](https://github.com/leemysw/yovoice)، ترخيص Apache-2.0',
          },
        ],
        note: 'الإصدار الذي جرت مراجعته: 0.8.0، نُشر في 15 نوفمبر 2026 بحسب [صفحة إصدارات GitHub](https://github.com/leemysw/yovoice/releases/tag/v0.8.0)؛ وأحدث تغيير في الفرع الرئيسي يعود إلى 17 نوفمبر 2026. GitHub مجرد قناة لتوزيع هذه المثبّتات، وتُنزَّل النماذج بشكل منفصل داخل التطبيق.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**لا تذكر المصادر حدًا أدنى لـ RAM أو VRAM أو مساحة القرص؛ فالجزء الثقيل هو النماذج التي تُنزَّل بشكل منفصل وتتفاوت كثيرًا في الحجم.**',
        ],
        columns: [
          'البند',
          'ما تذكره المصادر',
        ],
        rows: [
          {
            'البند': 'نظام التشغيل',
            'ما تذكره المصادر': 'macOS 14 أو أحدث على Apple silicon، وWindows 10/11 x64، وLinux x64؛ يجلب مثبّت Windows بيئة WebView2 عند الحاجة، ويحتاج Linux إلى WebKitGTK 4.1 (وتثبّته حزمة .deb)',
          },
          {
            'البند': 'التسريع',
            'ما تذكره المصادر': 'Metal على macOS؛ ويضم مثبّتا Windows بنسختي CUDA 12.4 و13.3 بيئة تشغيل لبطاقات NVIDIA؛ ويعمل Linux على CPU افتراضيًا مع إمكانية تنزيل بيئة GPU بتقنية Vulkan من الإعدادات',
          },
          {
            'البند': 'الذاكرة وVRAM',
            'ما تذكره المصادر': 'تعتمد على النموذج؛ يذكر التوثيق أحجام الملفات لكل نموذج، مثل IndexTTS 2.5 بحجم 3.50 GB بصيغة Q8، ويوصي ببطاقة GPU لنموذج Breeze TTS 2',
          },
          {
            'البند': 'النماذج',
            'ما تذكره المصادر': 'تُنزَّل داخل التطبيق أو بواسطة CLI مع الإيقاف المؤقت والاستئناف؛ ولا تذكر المصادر الحجم الإجمالي للتنزيلات',
          },
          {
            'البند': 'مجلد البيانات',
            'ما تذكره المصادر': '‎~/.yovoice‎ افتراضيًا، ويمكن نقله من الإعدادات؛ وإزالة التطبيق تُبقيه',
          },
          {
            'البند': 'الإنترنت',
            'ما تذكره المصادر': 'لازم لتنزيل النماذج وبيئات التشغيل؛ ويقول التوثيق إن التوليد يعمل دون اتصال بعد تثبيت المحرّك ونموذج',
          },
        ],
        note: 'الواجهات الخلفية هي المذكورة في README ودليل CLI؛ ولم تتحقق PromptQuorum من النماذج التي تعمل على كل واجهة.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل بند أدناه مأخوذ من README أو التوثيق أو سجل التغييرات؛ ولم يُختبر أي منها بشكل مستقل.**',
        ],
        items: [
          '**الكلام وتصميم الصوت والاستنساخ.** استنساخ صوت من تسجيل مرجعي، وتصميم صوت من وصف نصي، وضبط الانفعال وأسلوب الأداء؛ وتضم قائمة النماذج IndexTTS 2.0 و2.5 وVoxCPM2 وQwen3-TTS وXTTS v2 وKokoro.',
          '**دبلجة القصص.** استيراد ملفات نصية أو ملفات ترجمة، وإسناد شخصية إلى كل سطر، والتوليد سطرًا بسطر مع عدة لقطات لكل سطر للمقارنة.',
          '**الموسيقى والمقطوعات.** أغانٍ بكلمات ومقطوعات موسيقية عبر ACE-Step 1.5 أو YuE2، ومقطوعات وتأثيرات صوتية عبر Stable Audio 3، وفصل الأغنية إلى 6 stems، وتنسيق مقطوعات General MIDI مع تصدير MIDI وstems.',
          '**التفريغ النصي.** يتحول الصوت أو الفيديو إلى أسطر ترجمة موقّتة تُصدَّر بصيغة SRT أو WebVTT، بنماذج مثل Qwen3 ASR وParakeet.',
          '**الوكلاء وواجهة API.** Agent Skill قابلة للتثبيت مع CLI، وواجهة HTTP API موثّقة بنقطة وصول MCP عبر `yovoice serve`، وواجهة API محلية داخل تطبيق سطح المكتب على 127.0.0.1، ولوحة مساعد اختيارية تعمل مع خدمات مثل DeepSeek وQwen وOpenAI وAnthropic وOllama وLM Studio.',
          '**الواجهة.** 12 لغة للواجهة، و6 سمات، واختصارات لوحة مفاتيح قابلة للتعديل.',
        ],
        note: 'يقول توثيق الذكاء الاصطناعي إن ميزاته لم يُتحقق منها مع كل مزوّد مدرج، ولا يحدّث تطبيق Linux نفسه تلقائيًا بعد.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'التكلفة',
        content: [
          '**التطبيق مجاني بموجب ترخيص Apache-2.0، ولا يذكر الموقع ولا المستودع أي خطة مدفوعة أو فترة تجريبية أو اشتراكًا.**',
        ],
        columns: [
          'البند',
          'ما تذكره المصادر',
        ],
        rows: [
          {
            'البند': 'التطبيق',
            'ما تذكره المصادر': 'مجاني؛ والمشاركة في المجتمع وحدها توصف بأنها تتطلب حسابًا',
          },
          {
            'البند': 'مساعد الذكاء الاصطناعي',
            'ما تذكره المصادر': 'اختياري؛ واجهة API بالدفع حسب الاستخدام أو خطة من المزوّد الذي تربطه، أو خدمة Ollama أو LM Studio محلية لا تحتاج عادةً إلى مفتاح',
          },
          {
            'البند': 'النماذج',
            'ما تذكره المصادر': 'يصف التوثيق تنزيل النماذج داخل التطبيق ولا يذكر أي رسوم؛ وتختلف التراخيص من نموذج إلى آخر',
          },
        ],
        note: 'لم يُذكر سعر بأي عملة؛ وتذكر البيانات المنظّمة في الموقع سعرًا قدره 0 USD للتطبيق.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**يقول README إن التوليد يعمل بالكامل على CPU أو GPU الخاصة بك وإن المخطوطات والأصوات المرجعية والأعمال لا تغادر الجهاز أبدًا، ويكرر الموقع عبارة «خصوصية 100% دون اتصال».** ويضيف مستند البنية أنه إلى جانب تنزيلات النماذج وبيئات التشغيل والمشاركة في المجتمع التي يبدؤها المستخدم، فإن الاستخدام الوحيد للشبكة هو خدمة الذكاء الاصطناعي التي تضبطها؛ ويصف README بشكل منفصل عمليات تحقق من التحديثات في الخلفية على macOS وWindows.',
          'يرسل المساعد الاختياري طلبك المكتوب وتعليمات ثابتة مباشرة إلى المزوّد الذي تختاره، وتُخزَّن المفاتيح في قاعدة البيانات المحلية بأذونات للمالك فقط. أما المشاركة في المجتمع التي أُضيفت في 0.8.0 فترفع ملف صوت معاينة وحزمة مشروع بعد تسجيل الدخول بحساب leemysw، وتقول شروط المجتمع إن تسجيل الدخول يسجّل إصدار الشروط والوقت وعنوان شبكتك.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات من المطوّر وليست نتائج تدقيق. لم تقرأ PromptQuorum الشيفرة ولم تفحص حركة الشبكة للتطبيق، ولعدم وجود سياسة خصوصية للاطلاع عليها، فإن هذه العبارات مأخوذة من README والتوثيق فقط.',
          },
        ],
      },
      voiceRights: {
        id: 'voice-rights',
        title: 'استنساخ الصوت والموافقة وتراخيص النماذج',
        content: [
          '**يكفي للاستنساخ تسجيل مرجعي واحد، ولا يصف README ولا صفحات التوثيق التي قرأناها أي تحقق من أن الصوت يعود للمستخدم، لذا فالموافقة مسؤوليتك.** وتحظر شروط المجتمع لدى المطوّر مشاركة صوت شخص حقيقي دون موافقته، بما في ذلك نسخ أصوات الشخصيات العامة والممثلين والمغنين، وكذلك انتحال الهوية؛ وتحكم هذه الشروط المجتمع لا الاستخدام الخاص للتطبيق.',
        ],
        items: [
          '**الموافقة والقانون.** تعتمد مشروعية استنساخ صوت على الشخص والغرض والبلد؛ وهذه المراجعة ليست استشارة قانونية، ولم تقيّم PromptQuorum أي ولاية قضائية.',
          '**تراخيص النماذج تختلف.** يقول README إن أوزان OmniVoice وYuE2 وBreeze TTS 2 وVoxtral 4B TTS وMuScriptor مقيّدة بالاستخدام غير التجاري، وإن XTTS v2 وDrama 3 يستخدمان ترخيصي Coqui وFish Audio الخاصين بهما، وإن لنماذج IndexTTS ترخيص نموذج منفصلًا، وإن Stable Audio 3 مجاني تحت إيرادات سنوية قدرها 1 مليون دولار أمريكي بموجب Stability AI Community License. ويغطي ترخيص Apache-2.0 التطبيق لا هذه الأوزان.',
          '**قواعد المشاركة.** تشترط شروط المجتمع ذكر مصدر الصوت بصدق (صوتك أو صوت شخص آخر بموافقة واضحة أو صوت اصطناعي) واختيار ترخيص غير تجاري للأعمال الناتجة عن نماذج تحظر الاستخدام التجاري.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**جودة المخرجات والسرعة.** لم تستمع PromptQuorum إلى الكلام أو الموسيقى، ولم تقِس سرعة التوليد، ولم تختبر دقة الاستنساخ في أي نموذج؛ ويقدّم الموقع عينات صوتية لم نقيّمها.',
          '**نضج المشروع.** أُنشئ المستودع في 15 سبتمبر 2026 وهو منشور باسم مطوّر واحد، لذا فالصيانة على المدى الطويل غير معروفة.',
          '**الاحتفاظ باللقطات.** يقول قسم Unreleased في سجل التغييرات إن إصلاحًا يمنع التوليد من حذف اللقطات الأقدم بصمت بعد 10 إصدارات؛ ولم نتحقق من أن الإصدار 0.8.0 يتصرف على هذا النحو، لذا احتفظ بنسخ من اللقطات التي تحتاجها.',
          '**تغطية اللغات.** تعتمد لغات الكلام المدعومة على النموذج ولا تذكر المصادر رقمًا واحدًا؛ ولم نختبر أي لغة.',
          '**توقيع المثبّتات.** لم نتحقق مما إذا كانت مثبّتات macOS وWindows موثّقة أو موقّعة.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: [
          'التطبيق',
          'المنصات',
          'السعر / الترخيص',
          'الفرق الأساسي',
        ],
        rows: [
          {
            'التطبيق': '[Voicebox](/ar/power-local-llm/voicebox-review)',
            'المنصات': 'macOS وWindows (وLinux من المصدر)',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الأساسي': 'استنساخ الصوت وتحويل النص إلى كلام وإملاء Whisper مع خادم MCP؛ ولا تذكر مراجعته توليد الموسيقى أو كتابة المقطوعات',
          },
          {
            'التطبيق': '[XTTS v2](/ar/power-local-llm/xtts-v2-review)',
            'المنصات': 'macOS وWindows وLinux',
            'السعر / الترخيص': 'مجاني / CPML',
            'الفرق الأساسي': 'نموذج استنساخ واحد يُستخدم كمكتبة، دون استوديو أو موسيقى أو ميزات وكلاء',
          },
          {
            'التطبيق': '[Coqui TTS](/ar/power-local-llm/coqui-tts-review)',
            'المنصات': 'macOS وWindows وLinux',
            'السعر / الترخيص': 'مجاني / MPL 2.0',
            'الفرق الأساسي': 'مجموعة أدوات Python لتشغيل نماذج تحويل النص إلى كلام من الشيفرة وليست استوديو لسطح المكتب',
          },
          {
            'التطبيق': '[Bark](/ar/power-local-llm/bark-tts-review)',
            'المنصات': 'macOS وWindows وLinux',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الأساسي': 'نموذج لتحويل النص إلى صوت يُستخدم من الشيفرة، دون استنساخ صوت خاص به بحسب مراجعته',
          },
        ],
        note: 'هذه تطبيقات من الفئة نفسها في دليل PromptQuorum؛ تحقق من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكنني تشغيله من نص برمجي أو من وكيل ذكاء اصطناعي؟',
            a: 'نعم: تعمل CLI دون تطبيق سطح المكتب، وتتيح Agent Skill قابلة للتثبيت لوكيل إعداد CLI والمحرّك والنموذج. ويستخدم الخادم وواجهة API المحلية في التطبيق رمز Bearer مهيأً مسبقًا بدل تسجيل دخول OAuth، ولا يمكن الوصول إلى واجهة API المحلية إلا من الجهاز نفسه.',
          },
          {
            q: 'بأي نموذج أبدأ؟',
            a: 'يقترح دليل البدء Kokoro-82M للسرد السريع أو VoxCPM2 للاستنساخ، ويقول التوثيق إن لدى Kokoro أصواتًا مدمجة ولا يستنسخ. ولم نقارن جودة المخرجات.',
          },
          {
            q: 'هل يدعم لغتي؟',
            a: 'للواجهة 12 لغة، لكن الكلام يعتمد على النموذج: بحسب التوثيق يضيف IndexTTS 2.5 اليابانية والإسبانية والعربية إلى الصينية والإنجليزية، ويغطي XTTS v2 17 لغة وAudio8 TTS Realistic 11 لغة. ولم نختبر أيًا منها.',
          },
          {
            q: 'هل يمكن تشغيل مساعد الذكاء الاصطناعي محليًا بالكامل؟',
            a: 'يمكنه الاتصال بـ Ollama أو LM Studio على الجهاز نفسه بحسب التوثيق، الذي يضيف أن النماذج الأكبر تكتب تنسيقات أفضل بوضوح وأن النماذج المحلية الصغيرة قد تفشل في فحص الصيغة.',
          },
          {
            q: 'هل تتضمن الأغاني المشاركة أصواتي المرجعية؟',
            a: 'لا: بحسب شروط المجتمع ومستند البنية، تضم الحزمة المشاركة صوت ذلك الإصدار وكلماته وإعدادات توليده دون الأصوات المرجعية، ويراجع شخص كل عمل قبل نشره، ويمكن حذف الأعمال المشاركة من إعدادات التطبيق.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'YoVoice وسيلة حديثة لكنها نشطة التطوير وبترخيص Apache-2.0 لتوليد الكلام واستنساخ الأصوات وصناعة موسيقى الذكاء الاصطناعي على جهازك، مع CLI وخادم MCP يتيحان للوكلاء التحكم به. وعباراته عن العمل دون اتصال مأخوذة من README والتوثيق لا من تدقيق مستقل، والمستودع عمره شهران فقط ومنشور باسم مطوّر واحد، وتحظر أوزان عدة نماذج الاستخدام التجاري، ولا يغطي إصدار Mac سوى Apple silicon. يناسب المبدعين والمطوّرين الذين يريدون أداة صوت محلية مجانية وسينزّلون ملفات نماذج كبيرة؛ ومن يحتاج إلى جودة مخرجات مثبتة أو وضوح في الاستخدام التجاري لكل نموذج أو سياسة بيانات موثّقة فعليه اختباره وقراءة ترخيص كل نموذج أولًا.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع YoVoice](https://yovoice.leemysw.com/en/) — الوصف والمنصات والتنزيلات.',
          '[شروط مجتمع YoVoice](https://yovoice.leemysw.com/en/community/terms/) — قواعد المشاركة وموافقة الصوت والقانون الحاكم والبيانات المخزَّنة، سارية من 12 نوفمبر 2026.',
          '[YoVoice على GitHub](https://github.com/leemysw/yovoice) — README وترخيص Apache-2.0 وملاحظات تراخيص النماذج.',
          '[الإصدار 0.8.0 من YoVoice](https://github.com/leemysw/yovoice/releases/tag/v0.8.0) — الإصدار والتاريخ وملفات التثبيت.',
          '[دليل اختيار النماذج](https://github.com/leemysw/yovoice/blob/main/docs/models.md) — النماذج والمدخلات واللغات وأحجام الملفات.',
          '[دليل خدمة الذكاء الاصطناعي](https://github.com/leemysw/yovoice/blob/main/docs/ai.md) — مزوّدو المساعد وتخزين المفاتيح والقيود.',
          '[دليل API وMCP](https://github.com/leemysw/yovoice/blob/main/docs/api.md) — الخادم وواجهة API المحلية وأدوات MCP.',
          '[دليل CLI](https://github.com/leemysw/yovoice/blob/main/docs/cli.md) — تثبيت CLI والواجهات الخلفية.',
          '[ملاحظات البنية](https://github.com/leemysw/yovoice/blob/main/docs/architecture.md) — العمليات واستخدام الشبكة ومجلد البيانات.',
          '[سجل التغييرات](https://github.com/leemysw/yovoice/blob/main/CHANGELOG.md) — تغييرات 0.8.0 والإصلاحات غير المنشورة.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Voicebox](/ar/power-local-llm/voicebox-review) — استوديو صوتي محلي مجاني بترخيص MIT مع إملاء وخادم MCP.',
          '[مراجعة XTTS v2](/ar/power-local-llm/xtts-v2-review) — نموذج لاستنساخ الصوت يعمل محليًا كمكتبة.',
          '[مراجعة Coqui TTS](/ar/power-local-llm/coqui-tts-review) — مجموعة أدوات Python لتحويل النص إلى كلام محليًا.',
          '[أدوات الصوت والأوديو: مقارنة](/ar/power-local-llm/local-llm-voice-audio-compared) — مقارنة الفئة التي تنتمي إليها هذه المراجعة.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-17',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/yovoice-review-hero-zh.webp',
    title: 'YoVoice 评测：本地声音克隆与音乐工作室',
    seoTitle: 'YoVoice 评测：免费的本地声音克隆与 AI 音乐工作室',
    intro: 'YoVoice（开发者写作“yovoice”）是一款开源桌面工作室，使用在您自己电脑上运行的模型生成语音、克隆和设计声音，并创作歌曲和配乐。它还为 AI 智能体提供命令行、HTTP API 和 MCP 服务器，应用本身在 Apache-2.0 许可证下免费。本评测基于官网、GitHub 仓库、文档和发布页面，核查日期为 2026年11月17日；PromptQuorum 没有亲自测试过该应用。',
    metaDescription: 'YoVoice 评测：支持 Mac、Windows、Linux 的免费 Apache-2.0 本地工作室，含语音合成、声音克隆、AI 音乐，提供 CLI 与 MCP。未经测试。',
    twitterDescription: '语音、声音克隆和 AI 音乐集于一个在您电脑上运行的免费 Apache-2.0 桌面工作室，另有 CLI 和 MCP 服务器。来源在隐私、模型许可证和成熟度方面证实了什么，又没有证实什么。',
    audience: '希望在本地使用语音合成、声音克隆和 AI 音乐的创作者、开发者和智能体构建者，需要了解来源证实了什么、应用会下载什么，以及模型许可证在哪些地方限制使用。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'YoVoice 评测',
    targetKeywords: [
      'yovoice 评测',
      'yovoice 声音克隆',
      '本地声音克隆应用',
      '开源 AI 音乐生成 离线',
      'elevenlabs 开源替代品',
      '本地语音合成 mcp 服务器',
      'yovoice.leemysw.com',
      'yovoice 免费吗',
    ],
    current_models_mentioned: [
      'IndexTTS',
      'Qwen3-TTS',
      'XTTS v2',
      'Kokoro',
      'ACE-Step',
    ],
    current_hardware_mentioned: [
      'Apple silicon',
      'NVIDIA GPU',
    ],
    leadAnswerBlock: '**YoVoice（版本 0.8.0）是一款 Apache-2.0 桌面工作室，集语音合成、声音克隆、AI 歌曲生成和配乐创作于一体，开发者称生成过程在您自己的电脑上离线运行。** 它还自带 CLI、本地 HTTP API 和面向智能体的 MCP 服务器，本文所有陈述均来自开发者的官网、文档和 GitHub 仓库。',
    quickAnswerTop: {
      zh: {
        question: 'YoVoice 会把我的语音数据留在我的电脑上吗？',
        answer: '据开发者文档，模型下载完成后，生成在您的电脑上运行，参考声音保存在本地数据文件夹中。文档提到的联网用途包括下载模型、检查更新、您自行连接的可选 AI 助手，以及可选的社区分享。',
        bullets: [
          '用可选的本地模型把文本生成语音，根据描述设计声音，或从参考录音克隆声音。',
          '创作带歌词的歌曲和纯音乐，把歌曲分离为分轨，并编排多轨配乐，导出为 MIDI 和分轨。',
          '为故事逐行配音，每个角色使用不同声音，并把音频或视频转为字幕文件。',
          'CLI、本地 HTTP API 和 MCP 服务器让 Claude Code、Cursor 等智能体可以生成音频。',
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
        label: 'YoVoice 是什么？',
        anchor: 'what-is-yovoice',
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
        label: '费用',
        anchor: 'plans',
      },
      {
        label: '数据流向与隐私',
        anchor: 'privacy',
      },
      {
        label: '声音克隆、同意与模型许可证',
        anchor: 'voice-rights',
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
            text: 'YoVoice 是一款开源桌面工作室，可把文本转为语音，克隆和设计声音，用本地模型生成歌曲和配乐，并为 AI 智能体提供 CLI、API 和 MCP 服务器。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作把录音棚和小型音乐工作室合在一个程序里，工作在您自己的机器上完成，而不是依赖订阅服务。',
          },
        ],
        items: [
          '维护情况：主分支最近一次变更是 2026年11月17日，版本 0.8.0 发布于 2026年11月15日，因此不适用项目停更警告。',
          '费用：在 Apache-2.0 许可证下免费，未发现付费方案；许多可下载的模型权重有各自的条款。',
          '模型：README 称所有语音、音乐和转写模型都在应用内或通过 CLI 下载。',
          '平台：提供 macOS、Windows 和 Linux 安装包，以及各平台独立的 CLI 压缩包。',
          '开发者：个人开发者 leemysw；未发现公司主体信息。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 [yovoice.leemysw.com](https://yovoice.leemysw.com)、[GitHub 仓库](https://github.com/leemysw/yovoice)、其文档和发布页面，核查日期为 2026年11月17日。PromptQuorum 没有安装或运行该应用，因此未评估语音质量、音乐质量和速度。',
          },
        ],
      },
      overview: {
        id: 'what-is-yovoice',
        title: 'YoVoice 是什么？',
        content: [
          '**YoVoice 是一款本地优先的音频工作室：它把文本转为语音，设计或克隆声音，生成歌曲和纯音乐，并编排多轨配乐，所用模型由您下载并在自己的电脑上运行。** README 称其为面向 macOS、Windows 和 Linux 的开源工作室；项目名称写作“yovoice”，官网以中文为主，另有英文版。',
          '**推理引擎是 ShugoAI 的原生 C++ 引擎 audio.cpp，因此 README 称无需配置 Python 或 Conda。** 据更新日志，0.8.0 版新增了向社区分享歌曲、可自定义的键盘快捷键、六种主题和新的语音识别模型。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**YoVoice 提供 macOS（Apple silicon）、Windows 和 Linux 下载，安装方式与普通应用相同；另有独立的 CLI 压缩包，桌面应用无需使用终端。**',
        ],
        columns: [
          '选项',
          '获取方式',
        ],
        rows: [
          {
            '选项': 'macOS',
            '获取方式': '适用于 Apple silicon 的 .dmg，需 macOS 14 或更高：[GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            '选项': 'Windows',
            '获取方式': 'x64 安装程序 .exe，另有 CUDA 12.4 和 13.3 版本：[GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            '选项': 'Linux',
            '获取方式': 'x64 的 .deb（Debian/Ubuntu）或 .tar.gz：[GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            '选项': 'CLI',
            '获取方式': '各系统独立 zip：[CLI 指南](https://github.com/leemysw/yovoice/blob/main/docs/cli.md)',
          },
          {
            '选项': '官网',
            '获取方式': '[yovoice.leemysw.com](https://yovoice.leemysw.com)',
          },
          {
            '选项': '隐私政策',
            '获取方式': '未找到；仅有[社区条款](https://yovoice.leemysw.com/en/community/terms/)',
          },
          {
            '选项': '源代码',
            '获取方式': '[github.com/leemysw/yovoice](https://github.com/leemysw/yovoice)，Apache-2.0 许可证',
          },
        ],
        note: '评测版本：0.8.0，据 [GitHub 发布页面](https://github.com/leemysw/yovoice/releases/tag/v0.8.0)发布于 2026年11月15日；主分支最新一次变更为 2026年11月17日。GitHub 只是这些安装包的分发渠道，模型需在应用内另行下载。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: [
          '**来源未给出最低 RAM、VRAM 或磁盘空间要求；吃资源的是需要另行下载的模型，它们的体积差别很大。**',
        ],
        columns: [
          '项目',
          '来源所述',
        ],
        rows: [
          {
            '项目': '操作系统',
            '来源所述': 'Apple silicon 上的 macOS 14 或更高、Windows 10/11 x64、Linux x64；Windows 安装程序按需获取 WebView2 运行时，Linux 需要 WebKitGTK 4.1（.deb 会自动安装）',
          },
          {
            '项目': '加速',
            '来源所述': 'macOS 使用 Metal；Windows 的 CUDA 12.4 和 13.3 安装包内置面向 NVIDIA GPU 的运行时；Linux 默认在 CPU 上运行，可在设置中下载 Vulkan GPU 运行时',
          },
          {
            '项目': '内存与 VRAM',
            '来源所述': '取决于模型；文档列出各模型的文件大小，例如 IndexTTS 2.5 的 Q8 为 3.50 GB，并建议为 Breeze TTS 2 配备 GPU',
          },
          {
            '项目': '模型',
            '来源所述': '在应用内或通过 CLI 下载，支持暂停和继续；来源未给出下载总大小',
          },
          {
            '项目': '数据文件夹',
            '来源所述': '默认为 ~/.yovoice，可在设置中移动；卸载应用会保留它',
          },
          {
            '项目': '互联网',
            '来源所述': '下载模型和运行时需要联网；文档称安装引擎和模型后，生成可以离线进行',
          },
        ],
        note: '后端以 README 和 CLI 指南的列举为准；PromptQuorum 没有核实哪些模型能在哪种后端上运行。',
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: [
          '**以下各项均来自 README、文档或更新日志；没有任何一项经过独立测试。**',
        ],
        items: [
          '**语音、声音设计与克隆。** 从参考录音克隆声音，根据文字描述设计声音，并调整情绪和表达；模型列表包括 IndexTTS 2.0 和 2.5、VoxCPM2、Qwen3-TTS、XTTS v2 和 Kokoro。',
          '**故事配音。** 导入文本或字幕文件，为每一行指定角色并逐行生成，每行可保留多个版本进行对比。',
          '**音乐与配乐。** 通过 ACE-Step 1.5 或 YuE2 生成带歌词的歌曲和纯音乐，通过 Stable Audio 3 生成纯音乐和音效，把歌曲分离为六条分轨，并编排 General MIDI 配乐，可导出 MIDI 和分轨。',
          '**转写。** 把音频或视频转为带时间戳的字幕行，导出为 SRT 或 WebVTT，使用 Qwen3 ASR、Parakeet 等模型。',
          '**智能体与 API。** 可安装的 Agent Skill 和 CLI，通过 `yovoice serve` 提供带认证并含 MCP 端点的 HTTP API，桌面应用内位于 127.0.0.1 的本地 API，以及可选的助手面板，支持 DeepSeek、Qwen、OpenAI、Anthropic、Ollama 和 LM Studio 等服务。',
          '**界面。** 12 种界面语言、六种主题和可编辑的键盘快捷键。',
        ],
        note: 'AI 文档称其功能并未在每个列出的服务商上验证过，Linux 版应用也还不能自动更新。',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: '费用',
        content: [
          '**应用在 Apache-2.0 许可证下免费，官网和仓库都没有列出付费方案、试用或订阅。**',
        ],
        columns: [
          '项目',
          '来源所述',
        ],
        rows: [
          {
            '项目': '应用',
            '来源所述': '免费；只有社区分享被说明需要账号',
          },
          {
            '项目': 'AI 助手',
            '来源所述': '可选；按量付费的 API 或您所连接服务商的套餐，也可用通常无需密钥的本地 Ollama 或 LM Studio 服务',
          },
          {
            '项目': '模型',
            '来源所述': '文档说明可在应用内下载模型，未提及费用；各模型的许可证不同',
          },
        ],
        note: '来源未以任何货币标明价格；官网的结构化数据给出该应用的价格为 0 USD。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**README 称生成完全在您自己的 CPU 或 GPU 上运行，稿件、参考声音和作品永远不会离开电脑，官网也重复了“100% 离线隐私”的说法。** 架构文档补充说，除了模型和运行时下载以及用户主动发起的社区分享外，唯一的联网用途是您自己配置的 AI 服务；README 另外提到 macOS 和 Windows 上的后台更新检查。',
          '可选的助手会把您输入的请求和一条固定指令直接发送给您所选的服务商，密钥以仅限所有者的权限保存在本地数据库中。0.8.0 新增的社区分享在您用 leemysw 账号登录后，会上传一个预览音频文件和一个项目包，社区条款称登录会记录条款版本、时间和您的网络地址。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是开发者的声明，不是审计结果。PromptQuorum 没有阅读代码，也没有检查应用的网络流量；由于没有可阅读的隐私政策，这些说法仅来自 README 和文档。',
          },
        ],
      },
      voiceRights: {
        id: 'voice-rights',
        title: '声音克隆、同意与模型许可证',
        content: [
          '**克隆只需要一段参考录音，而我们阅读的 README 和文档页面没有描述任何核实声音是否属于用户的机制，因此同意问题由您自己负责。** 开发者的社区条款禁止未经同意分享真实人物的声音，包括公众人物、演员和歌手的克隆声音，也禁止冒充；这些条款约束的是社区，而不是应用的个人使用。',
        ],
        items: [
          '**同意与法律。** 克隆声音是否合法取决于当事人、用途和所在国家；本评测不构成法律意见，PromptQuorum 也没有评估任何法域。',
          '**模型许可证各不相同。** README 称 OmniVoice、YuE2、Breeze TTS 2、Voxtral 4B TTS 和 MuScriptor 的权重仅限非商业使用，XTTS v2 和 Drama 3 使用 Coqui 与 Fish Audio 各自的许可证，IndexTTS 模型另有单独的模型许可证，Stable Audio 3 在年收入低于 100 万美元时可依 Stability AI Community License 免费使用。Apache-2.0 许可证适用于应用，不适用于这些权重。',
          '**分享规则。** 社区条款要求分享者如实说明声音来源（自己的声音、经明确同意的他人声音，或合成声音），并为来自禁止商用模型的作品选择非商业许可证。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**输出质量与速度。** PromptQuorum 没有听过语音或音乐，没有测量生成速度，也没有测试任何模型的克隆准确度；官网提供音频示例，但我们没有评估。',
          '**项目成熟度。** 仓库创建于 2026年9月15日，以个人开发者的名义发布，因此长期维护情况未知。',
          '**版本保留。** 更新日志的 Unreleased 部分称，一项修复可防止生成在超过十个版本后悄悄删除较早的版本；我们没有核实 0.8.0 是否有这种行为，因此请为需要的版本保留副本。',
          '**语言覆盖。** 支持的语音语言取决于模型，来源没有给出统一数字；我们没有测试任何语言。',
          '**安装包签名。** 我们没有核实 macOS 和 Windows 安装包是否经过公证或代码签名。',
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
            '应用': '[Voicebox](/zh/power-local-llm/voicebox-review)',
            '平台': 'macOS、Windows（Linux 需源码构建）',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '声音克隆、语音合成和 Whisper 听写，带 MCP 服务器；其评测未列出音乐生成或配乐创作',
          },
          {
            '应用': '[XTTS v2](/zh/power-local-llm/xtts-v2-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / CPML',
            '主要区别': '作为库使用的单一克隆模型，没有工作室、音乐或智能体功能',
          },
          {
            '应用': '[Coqui TTS](/zh/power-local-llm/coqui-tts-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / MPL 2.0',
            '主要区别': '通过代码运行语音合成模型的 Python 工具包，不是桌面工作室',
          },
          {
            '应用': '[Bark](/zh/power-local-llm/bark-tts-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '通过代码使用的文本转音频模型，据其评测没有自带的声音克隆',
          },
        ],
        note: '这些是 PromptQuorum 目录中同类别的应用；请在各应用自己的页面上确认其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '可以通过脚本或 AI 智能体运行吗？',
            a: '可以：CLI 无需桌面应用即可使用，可安装的 Agent Skill 能让智能体自行设置 CLI、引擎和模型。服务器和应用内的本地 API 使用预先配置的 Bearer 令牌而非 OAuth 登录，本地 API 只能从同一台电脑访问。',
          },
          {
            q: '我应该从哪个模型开始？',
            a: '快速入门建议用 Kokoro-82M 做快速旁白，用 VoxCPM2 做克隆；文档称 Kokoro 自带内置声音，不支持克隆。我们没有比较输出质量。',
          },
          {
            q: '它支持我的语言吗？',
            a: '界面有 12 种语言，但语音取决于模型：据文档，IndexTTS 2.5 在中文和英文之外增加了日语、西班牙语和阿拉伯语，XTTS v2 覆盖 17 种语言，Audio8 TTS Realistic 覆盖 11 种。我们都没有测试过。',
          },
          {
            q: 'AI 助手可以完全在本地运行吗？',
            a: '据文档，它可以连接同一台电脑上的 Ollama 或 LM Studio；文档还补充说，较大的模型写出的编排明显更好，小型本地模型可能无法通过格式检查。',
          },
          {
            q: '分享的歌曲会包含我的参考声音吗？',
            a: '不会：据社区条款和架构文档，分享的包只含该版本的音频、歌词和生成设置，不含参考声音，每个作品公开前都由人工审核，已分享的作品可在应用设置中删除。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'YoVoice 是一个年轻但开发活跃的 Apache-2.0 工具，可在您自己的电脑上生成语音、克隆声音和制作 AI 音乐，并通过 CLI 和 MCP 服务器让智能体来操作。它关于离线运行的说法来自 README 和文档，而非独立审计；仓库只有两个月，以个人开发者的名义发布，多个模型权重禁止商用，Mac 版本只覆盖 Apple silicon。它适合想要一款免费本地音频工具、愿意下载大体积模型文件的创作者和开发者；需要经过验证的输出质量、每个模型明确的商用许可，或经核实的数据政策的人，应先测试，并先阅读各模型的许可证。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[YoVoice 官网](https://yovoice.leemysw.com/en/) — 简介、平台和下载。',
          '[YoVoice 社区条款](https://yovoice.leemysw.com/en/community/terms/) — 分享规则、声音同意、适用法律和存储的数据，2026年11月12日起生效。',
          '[GitHub 上的 YoVoice](https://github.com/leemysw/yovoice) — README、Apache-2.0 许可证和模型许可证说明。',
          '[YoVoice 0.8.0 发布页](https://github.com/leemysw/yovoice/releases/tag/v0.8.0) — 版本、日期和安装文件。',
          '[模型选择指南](https://github.com/leemysw/yovoice/blob/main/docs/models.md) — 模型、输入、语言和文件大小。',
          '[AI 服务指南](https://github.com/leemysw/yovoice/blob/main/docs/ai.md) — 助手服务商、密钥存储和限制。',
          '[API 与 MCP 指南](https://github.com/leemysw/yovoice/blob/main/docs/api.md) — 服务器、本地 API 和 MCP 工具。',
          '[CLI 指南](https://github.com/leemysw/yovoice/blob/main/docs/cli.md) — CLI 安装和后端。',
          '[架构说明](https://github.com/leemysw/yovoice/blob/main/docs/architecture.md) — 进程、网络使用和数据文件夹。',
          '[更新日志](https://github.com/leemysw/yovoice/blob/main/CHANGELOG.md) — 0.8.0 的变更和未发布的修复。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Voicebox 评测](/zh/power-local-llm/voicebox-review) — 带听写和 MCP 服务器的免费 MIT 许可本地语音工作室。',
          '[XTTS v2 评测](/zh/power-local-llm/xtts-v2-review) — 作为库在本地运行的声音克隆模型。',
          '[Coqui TTS 评测](/zh/power-local-llm/coqui-tts-review) — 用于本地语音合成的 Python 工具包。',
          '[语音与音频工具对比](/zh/power-local-llm/local-llm-voice-audio-compared) — 本评测所属的类别对比。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-17',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/yovoice-review-hero-ko.webp',
    title: 'YoVoice 리뷰: 로컬 음성 복제·음악 스튜디오',
    seoTitle: 'YoVoice 리뷰: 무료 로컬 음성 복제와 AI 음악',
    intro: 'YoVoice(개발자 표기는 "yovoice")는 사용자의 컴퓨터에서 실행되는 모델로 음성을 생성하고, 목소리를 복제·디자인하며, 노래와 악보를 만드는 오픈소스 데스크톱 스튜디오입니다. AI 에이전트를 위한 명령줄, HTTP API, MCP 서버도 제공하며, 앱은 Apache-2.0 라이선스로 무료입니다. 이 리뷰는 공식 웹사이트, GitHub 저장소, 문서, 릴리스 페이지를 바탕으로 하며 확인일은 2026년 11월 17일입니다. PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription: 'YoVoice 리뷰: Mac·Windows·Linux용 무료 Apache-2.0 로컬 스튜디오. 음성 합성, 음성 복제, AI 음악, CLI·MCP 지원. 직접 테스트하지 않음.',
    twitterDescription: '음성, 음성 복제, AI 음악을 내 컴퓨터에서 실행하는 무료 Apache-2.0 데스크톱 스튜디오. CLI와 MCP 서버 포함. 개인정보, 모델 라이선스, 성숙도에 대해 출처가 확인한 것과 확인하지 않은 것.',
    audience: '로컬 음성 합성, 음성 복제, AI 음악을 원하며 출처가 확인한 내용, 앱이 내려받는 것, 모델 라이선스가 사용을 제한하는 부분을 알아야 하는 크리에이터, 개발자, 에이전트 개발자.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'YoVoice 리뷰',
    targetKeywords: [
      'yovoice 리뷰',
      'yovoice 음성 복제',
      '로컬 음성 복제 앱',
      '오픈소스 AI 음악 생성 오프라인',
      'elevenlabs 대안 오픈소스',
      '로컬 음성 합성 mcp 서버',
      'yovoice.leemysw.com',
      'yovoice 무료',
    ],
    current_models_mentioned: [
      'IndexTTS',
      'Qwen3-TTS',
      'XTTS v2',
      'Kokoro',
      'ACE-Step',
    ],
    current_hardware_mentioned: [
      'Apple silicon',
      'NVIDIA GPU',
    ],
    leadAnswerBlock: '**YoVoice(버전 0.8.0)는 음성 합성, 음성 복제, AI 노래 생성, 악보 작성을 하나로 묶은 Apache-2.0 데스크톱 스튜디오이며, 개발자는 생성이 사용자의 컴퓨터에서 오프라인으로 실행된다고 밝힙니다.** CLI, 로컬 HTTP API, 에이전트용 MCP 서버도 함께 제공하며, 여기 적힌 모든 내용은 개발자의 웹사이트, 문서, GitHub 저장소에서 가져왔습니다.',
    quickAnswerTop: {
      ko: {
        question: 'YoVoice는 제 음성 데이터를 제 컴퓨터에 보관합니까?',
        answer: '개발자 문서에 따르면 모델을 내려받은 뒤에는 생성이 사용자의 컴퓨터에서 실행되고, 참조 음성은 로컬 데이터 폴더에 저장됩니다. 네트워크 사용은 모델 다운로드, 업데이트 확인, 직접 연결하는 선택형 AI 어시스턴트, 선택형 커뮤니티 공유에 대해 설명되어 있습니다.',
        bullets: [
          '선택할 수 있는 로컬 모델로 텍스트에서 음성을 생성하고, 설명으로 목소리를 디자인하거나 참조 녹음으로 목소리를 복제합니다.',
          '가사가 있는 노래와 연주곡을 만들고, 노래를 스템으로 분리하며, 멀티트랙 악보를 편곡해 MIDI와 스템으로 내보냅니다.',
          '이야기를 한 줄씩, 등장인물마다 다른 목소리로 더빙하고, 오디오나 영상을 자막 파일로 변환합니다.',
          'CLI, 로컬 HTTP API, MCP 서버로 Claude Code, Cursor 같은 에이전트가 오디오를 생성할 수 있습니다.',
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
        label: 'YoVoice란?',
        anchor: 'what-is-yovoice',
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
        label: '비용',
        anchor: 'plans',
      },
      {
        label: '데이터 흐름과 개인정보',
        anchor: 'privacy',
      },
      {
        label: '음성 복제, 동의, 모델 라이선스',
        anchor: 'voice-rights',
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
            text: 'YoVoice는 텍스트를 음성으로 바꾸고, 목소리를 복제·디자인하며, 로컬 모델로 노래와 악보를 생성하고, AI 에이전트에 CLI·API·MCP 서버를 제공하는 오픈소스 데스크톱 스튜디오입니다.',
          },
          {
            type: 'plain-terms',
            text: '녹음 부스와 작은 음악 스튜디오를 하나의 프로그램에 담은 것으로, 구독 서비스가 아니라 내 컴퓨터에서 작업이 이루어진다고 보시면 됩니다.',
          },
        ],
        items: [
          '유지보수: 메인 브랜치는 2026년 11월 17일에 마지막으로 변경되었고 버전 0.8.0은 2026년 11월 15일에 공개되어, 방치된 프로젝트 경고는 해당되지 않습니다.',
          '비용: Apache-2.0 라이선스로 무료이며 유료 요금제는 찾지 못했습니다. 내려받을 수 있는 많은 모델 가중치에는 각자의 조건이 있습니다.',
          '모델: README에 따르면 모든 음성, 음악, 전사 모델은 앱 안에서 또는 CLI로 내려받습니다.',
          '플랫폼: macOS, Windows, Linux용 설치 프로그램과 각각의 독립 CLI 아카이브.',
          '개발자: 개인 개발자 leemysw이며 회사 정보 고지는 찾지 못했습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 [yovoice.leemysw.com](https://yovoice.leemysw.com), [GitHub 저장소](https://github.com/leemysw/yovoice), 문서, 릴리스 페이지를 바탕으로 하며 확인일은 2026년 11월 17일입니다. PromptQuorum은 앱을 설치하거나 실행하지 않았으므로 음성 품질, 음악 품질, 속도는 평가하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-yovoice',
        title: 'YoVoice란?',
        content: [
          '**YoVoice는 로컬 우선 오디오 스튜디오입니다. 텍스트를 음성으로 바꾸고, 목소리를 디자인하거나 복제하며, 노래와 연주곡을 생성하고, 멀티트랙 악보를 편곡합니다. 사용하는 모델은 사용자가 컴퓨터에 내려받아 실행합니다.** README는 이를 macOS, Windows, Linux용 오픈소스 스튜디오로 설명하며, 프로젝트는 이름을 "yovoice"로 표기하고 웹사이트는 중국어가 우선이며 영어판도 있습니다.',
          '**추론 엔진은 ShugoAI의 네이티브 C++ 엔진 audio.cpp이며, README에 따르면 Python이나 Conda 설정이 필요 없습니다.** 변경 기록에 따르면 버전 0.8.0은 커뮤니티 노래 공유, 사용자 지정 가능한 키보드 단축키, 6가지 테마, 새로운 음성 인식 모델을 추가했습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**YoVoice는 macOS(Apple silicon), Windows, Linux용 다운로드로 제공되며 일반 앱처럼 설치합니다. 독립 CLI 아카이브도 함께 공개되고, 데스크톱 앱에는 터미널이 필요하지 않습니다.**',
        ],
        columns: [
          '옵션',
          '입수 방법',
        ],
        rows: [
          {
            '옵션': 'macOS',
            '입수 방법': 'Apple silicon용 .dmg, macOS 14 이상: [GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            '옵션': 'Windows',
            '입수 방법': 'x64용 설치 .exe(CUDA 12.4·13.3 버전 포함): [GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            '옵션': 'Linux',
            '입수 방법': 'x64용 .deb(Debian/Ubuntu) 또는 .tar.gz: [GitHub Releases](https://github.com/leemysw/yovoice/releases/latest)',
          },
          {
            '옵션': 'CLI',
            '입수 방법': 'OS별 독립 zip: [CLI 가이드](https://github.com/leemysw/yovoice/blob/main/docs/cli.md)',
          },
          {
            '옵션': '웹사이트',
            '입수 방법': '[yovoice.leemysw.com](https://yovoice.leemysw.com)',
          },
          {
            '옵션': '개인정보 처리방침',
            '입수 방법': '찾지 못했으며 [커뮤니티 약관](https://yovoice.leemysw.com/en/community/terms/)만 있습니다',
          },
          {
            '옵션': '소스 코드',
            '입수 방법': '[github.com/leemysw/yovoice](https://github.com/leemysw/yovoice), Apache-2.0 라이선스',
          },
        ],
        note: '확인한 버전: 0.8.0. [GitHub 릴리스 페이지](https://github.com/leemysw/yovoice/releases/tag/v0.8.0)에 따르면 2026년 11월 15일에 공개되었고, 메인 브랜치의 최신 변경은 2026년 11월 17일입니다. GitHub는 이 설치 프로그램의 배포 경로일 뿐이며, 모델은 앱 안에서 별도로 내려받습니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: [
          '**출처에는 최소 RAM, VRAM, 디스크 용량이 명시되어 있지 않습니다. 부담이 큰 부분은 별도로 내려받는 모델이며, 크기 차이가 큽니다.**',
        ],
        columns: [
          '항목',
          '출처의 설명',
        ],
        rows: [
          {
            '항목': '운영체제',
            '출처의 설명': 'Apple silicon의 macOS 14 이상, Windows 10/11 x64, Linux x64. Windows 설치 프로그램은 필요하면 WebView2 런타임을 받고, Linux는 WebKitGTK 4.1이 필요(.deb가 설치)',
          },
          {
            '항목': '가속',
            '출처의 설명': 'macOS는 Metal. Windows의 CUDA 12.4·13.3 설치 프로그램은 NVIDIA GPU용 런타임을 포함. Linux는 기본적으로 CPU에서 실행되며 Vulkan GPU 런타임은 설정에서 내려받을 수 있음',
          },
          {
            '항목': '메모리와 VRAM',
            '출처의 설명': '모델에 따라 다릅니다. 문서에 모델별 파일 크기(예: IndexTTS 2.5는 Q8에서 3.50 GB)가 있고, Breeze TTS 2에는 GPU를 권장',
          },
          {
            '항목': '모델',
            '출처의 설명': '앱 안에서 또는 CLI로 내려받으며 일시 중지와 이어받기를 지원. 총 다운로드 크기는 출처에 없음',
          },
          {
            '항목': '데이터 폴더',
            '출처의 설명': '기본값은 ~/.yovoice이며 설정에서 옮길 수 있음. 앱을 제거해도 유지됨',
          },
          {
            '항목': '인터넷',
            '출처의 설명': '모델과 런타임을 내려받을 때 필요. 문서에 따르면 엔진과 모델을 설치한 뒤에는 생성을 오프라인으로 실행할 수 있음',
          },
        ],
        note: '백엔드는 README와 CLI 가이드에 나열된 대로입니다. PromptQuorum은 어떤 모델이 어떤 백엔드에서 실행되는지 확인하지 않았습니다.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 README, 문서, 변경 기록에서 가져왔으며, 독립적으로 테스트한 것은 없습니다.**',
        ],
        items: [
          '**음성, 목소리 디자인, 복제.** 참조 녹음으로 목소리를 복제하고, 텍스트 설명으로 목소리를 디자인하며, 감정과 말투를 조절합니다. 모델 목록에는 IndexTTS 2.0·2.5, VoxCPM2, Qwen3-TTS, XTTS v2, Kokoro가 있습니다.',
          '**이야기 더빙.** 텍스트나 자막 파일을 가져와 각 줄에 등장인물을 지정하고 한 줄씩 생성하며, 줄마다 여러 테이크를 비교할 수 있습니다.',
          '**음악과 악보.** ACE-Step 1.5 또는 YuE2로 가사가 있는 노래와 연주곡, Stable Audio 3로 연주곡과 효과음, 노래의 6개 스템 분리, General MIDI 악보 편곡과 MIDI·스템 내보내기.',
          '**전사.** 오디오나 영상을 시간 정보가 있는 자막 줄로 바꿔 SRT 또는 WebVTT로 내보내며, Qwen3 ASR, Parakeet 같은 모델을 사용합니다.',
          '**에이전트와 API.** 설치 가능한 Agent Skill과 CLI, `yovoice serve`로 제공되는 MCP 엔드포인트가 있는 인증형 HTTP API, 데스크톱 앱 안의 127.0.0.1 로컬 API, DeepSeek, Qwen, OpenAI, Anthropic, Ollama, LM Studio 같은 서비스와 쓰는 선택형 어시스턴트 패널.',
          '**인터페이스.** 12개 인터페이스 언어, 6가지 테마, 편집 가능한 키보드 단축키.',
        ],
        note: 'AI 문서에 따르면 기능은 나열된 모든 제공업체에서 검증되지는 않았으며, Linux 앱은 아직 스스로 업데이트하지 않습니다.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: '비용',
        content: [
          '**앱은 Apache-2.0 라이선스로 무료이며, 웹사이트와 저장소 어디에도 유료 요금제, 체험판, 구독이 나와 있지 않습니다.**',
        ],
        columns: [
          '항목',
          '출처의 설명',
        ],
        rows: [
          {
            '항목': '앱',
            '출처의 설명': '무료. 계정이 필요하다고 설명된 것은 커뮤니티 공유뿐',
          },
          {
            '항목': 'AI 어시스턴트',
            '출처의 설명': '선택 사항. 연결하는 제공업체의 종량제 API 또는 요금제, 혹은 보통 키가 필요 없는 로컬 Ollama·LM Studio 서비스',
          },
          {
            '항목': '모델',
            '출처의 설명': '문서는 앱 안에서의 모델 다운로드를 설명하며 요금을 언급하지 않음. 라이선스는 모델마다 다름',
          },
        ],
        note: '어떤 통화로도 가격이 제시되지 않았습니다. 웹사이트의 구조화 데이터에는 앱 가격이 0 USD로 적혀 있습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**README는 생성이 전적으로 사용자의 CPU 또는 GPU에서 실행되며 원고, 참조 음성, 작품이 컴퓨터를 떠나지 않는다고 밝히고, 웹사이트도 "100% 오프라인 프라이버시"를 반복합니다.** 아키텍처 문서는 모델과 런타임 다운로드, 그리고 사용자가 시작하는 커뮤니티 공유를 제외하면 네트워크를 쓰는 것은 사용자가 설정한 AI 서비스뿐이라고 덧붙이며, README는 이와 별도로 macOS와 Windows의 백그라운드 업데이트 확인을 설명합니다.',
          '선택형 어시스턴트는 입력한 요청과 고정 지시문을 사용자가 고른 제공업체로 직접 보내며, 키는 소유자 전용 권한으로 로컬 데이터베이스에 저장됩니다. 0.8.0에서 추가된 커뮤니티 공유는 leemysw 계정으로 로그인한 뒤 미리 듣기 오디오 파일과 프로젝트 패키지를 업로드하며, 커뮤니티 약관에 따르면 로그인 시 약관 버전, 시간, 네트워크 주소가 기록됩니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발자의 선언이며 감사 결과가 아닙니다. PromptQuorum은 코드를 읽거나 앱의 네트워크 트래픽을 검사하지 않았고, 읽을 수 있는 개인정보 처리방침이 없으므로 이러한 설명은 README와 문서에서만 가져왔습니다.',
          },
        ],
      },
      voiceRights: {
        id: 'voice-rights',
        title: '음성 복제, 동의, 모델 라이선스',
        content: [
          '**복제에는 참조 녹음 하나면 충분하며, 우리가 읽은 README와 문서 페이지에는 그 목소리가 사용자 본인의 것인지 확인하는 절차가 설명되어 있지 않으므로 동의 확인은 사용자의 책임입니다.** 개발자의 커뮤니티 약관은 실존 인물의 목소리를 본인 동의 없이 공유하는 것(유명인, 배우, 가수의 복제 포함)과 사칭을 금지합니다. 이 약관은 커뮤니티에 적용되며 앱의 개인적 사용에는 적용되지 않습니다.',
        ],
        items: [
          '**동의와 법률.** 목소리 복제가 적법한지는 당사자, 목적, 국가에 따라 달라집니다. 이 리뷰는 법률 자문이 아니며 PromptQuorum은 어떤 법적 관할도 평가하지 않았습니다.',
          '**모델 라이선스는 서로 다릅니다.** README에 따르면 OmniVoice, YuE2, Breeze TTS 2, Voxtral 4B TTS, MuScriptor의 가중치는 비상업적 사용으로 제한되고, XTTS v2와 Drama 3는 Coqui와 Fish Audio 자체 라이선스를 쓰며, IndexTTS 모델에는 별도의 모델 라이선스가 있고, Stable Audio 3는 연 매출 100만 달러 미만이면 Stability AI Community License로 무료입니다. Apache-2.0 라이선스는 앱에 적용되며 이 가중치에는 적용되지 않습니다.',
          '**공유 규칙.** 커뮤니티 약관은 목소리의 출처(본인 목소리, 명확한 동의를 받은 타인의 목소리, 합성 음성)를 사실대로 밝히고, 상업적 사용을 금지하는 모델로 만든 작품에는 비상업적 라이선스를 선택하도록 요구합니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**출력 품질과 속도.** PromptQuorum은 음성이나 음악을 들어 보지 않았고, 생성 속도를 측정하지 않았으며, 어떤 모델의 복제 정확도도 테스트하지 않았습니다. 웹사이트에는 오디오 샘플이 있지만 평가하지 않았습니다.',
          '**프로젝트 성숙도.** 저장소는 2026년 9월 15일에 만들어졌고 개인 개발자의 이름으로 공개되어 있어 장기적인 유지보수 여부는 알 수 없습니다.',
          '**테이크 보존.** 변경 기록의 Unreleased 항목에는 열 개 버전이 쌓인 이후 이전 테이크가 조용히 삭제되지 않도록 하는 수정이 있다고 나옵니다. 버전 0.8.0이 그렇게 동작하는지는 확인하지 않았으므로 필요한 테이크는 사본을 보관하세요.',
          '**언어 지원 범위.** 지원되는 음성 언어는 모델에 따라 다르며 출처에 단일 수치가 없습니다. 어떤 언어도 테스트하지 않았습니다.',
          '**설치 프로그램 서명.** macOS와 Windows 설치 프로그램이 공증되었거나 코드 서명되었는지는 확인하지 않았습니다.',
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
          '핵심 차이',
        ],
        rows: [
          {
            '앱': '[Voicebox](/ko/power-local-llm/voicebox-review)',
            '플랫폼': 'macOS, Windows(Linux는 소스 빌드)',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '음성 복제, 음성 합성, Whisper 받아쓰기와 MCP 서버. 리뷰에는 음악 생성이나 악보 작성이 나와 있지 않음',
          },
          {
            '앱': '[XTTS v2](/ko/power-local-llm/xtts-v2-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / CPML',
            '핵심 차이': '라이브러리로 쓰는 단일 복제 모델이며 스튜디오, 음악, 에이전트 기능 없음',
          },
          {
            '앱': '[Coqui TTS](/ko/power-local-llm/coqui-tts-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / MPL 2.0',
            '핵심 차이': '코드로 음성 합성 모델을 실행하는 Python 툴킷이며 데스크톱 스튜디오가 아님',
          },
          {
            '앱': '[Bark](/ko/power-local-llm/bark-tts-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '코드로 쓰는 텍스트-오디오 모델로, 리뷰에 따르면 자체 음성 복제 없음',
          },
        ],
        note: '이들은 PromptQuorum 디렉터리에 있는 같은 카테고리의 앱입니다. 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 페이지에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '스크립트나 AI 에이전트에서 실행할 수 있습니까?',
            a: '네. CLI는 데스크톱 앱 없이 작동하며, 설치 가능한 Agent Skill로 에이전트가 CLI, 엔진, 모델을 설정할 수 있습니다. 서버와 앱 내 로컬 API는 OAuth 로그인 대신 미리 설정한 Bearer 토큰을 사용하고, 로컬 API는 같은 컴퓨터에서만 접근할 수 있습니다.',
          },
          {
            q: '어떤 모델로 시작해야 합니까?',
            a: '빠른 시작은 빠른 내레이션에는 Kokoro-82M, 복제에는 VoxCPM2를 제안하며, 문서에 따르면 Kokoro에는 내장 음성이 있고 복제는 되지 않습니다. 출력 품질은 비교하지 않았습니다.',
          },
          {
            q: '제 언어를 지원합니까?',
            a: '인터페이스는 12개 언어를 지원하지만 음성은 모델에 따라 다릅니다. 문서에 따르면 IndexTTS 2.5는 중국어와 영어에 일본어, 스페인어, 아랍어를 더하고, XTTS v2는 17개 언어, Audio8 TTS Realistic은 11개 언어를 다룹니다. 어느 것도 테스트하지 않았습니다.',
          },
          {
            q: 'AI 어시스턴트를 완전히 로컬로 실행할 수 있습니까?',
            a: '문서에 따르면 같은 컴퓨터의 Ollama나 LM Studio에 연결할 수 있으며, 문서는 더 큰 모델이 눈에 띄게 더 나은 편곡을 쓰고 작은 로컬 모델은 형식 검사를 통과하지 못할 수 있다고 덧붙입니다.',
          },
          {
            q: '공유한 노래에 제 참조 음성이 포함됩니까?',
            a: '아닙니다. 커뮤니티 약관과 아키텍처 문서에 따르면 공유 패키지에는 해당 버전의 오디오, 가사, 생성 설정이 들어 있고 참조 음성은 들어 있지 않습니다. 모든 작품은 공개 전에 사람이 검토하며, 공유한 작품은 앱 설정에서 삭제할 수 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'YoVoice는 젊지만 활발히 개발되는 Apache-2.0 도구로, 내 컴퓨터에서 음성을 생성하고, 목소리를 복제하며, AI 음악을 만들 수 있고, CLI와 MCP 서버로 에이전트가 조작할 수 있습니다. 오프라인 관련 설명은 독립적인 감사가 아니라 README와 문서에서 나왔고, 저장소는 이제 두 달밖에 되지 않았으며 개인 개발자의 이름으로 공개되어 있고, 여러 모델 가중치는 상업적 사용을 금지하며, Mac 빌드는 Apple silicon만 다룹니다. 무료 로컬 오디오 도구를 원하고 큰 모델 파일을 내려받을 크리에이터와 개발자에게 적합하며, 검증된 출력 품질, 모델별 상업적 사용의 명확성, 검증된 데이터 정책이 필요한 분은 직접 테스트하고 먼저 각 모델의 라이선스를 읽어야 합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[YoVoice 웹사이트](https://yovoice.leemysw.com/en/) — 설명, 플랫폼, 다운로드.',
          '[YoVoice 커뮤니티 약관](https://yovoice.leemysw.com/en/community/terms/) — 공유 규칙, 음성 동의, 준거법, 저장되는 데이터(2026년 11월 12일 시행).',
          '[GitHub의 YoVoice](https://github.com/leemysw/yovoice) — README, Apache-2.0 라이선스, 모델 라이선스 안내.',
          '[YoVoice 릴리스 0.8.0](https://github.com/leemysw/yovoice/releases/tag/v0.8.0) — 버전, 날짜, 설치 파일.',
          '[모델 선택 가이드](https://github.com/leemysw/yovoice/blob/main/docs/models.md) — 모델, 입력, 언어, 파일 크기.',
          '[AI 서비스 가이드](https://github.com/leemysw/yovoice/blob/main/docs/ai.md) — 어시스턴트 제공업체, 키 저장, 제한 사항.',
          '[API 및 MCP 가이드](https://github.com/leemysw/yovoice/blob/main/docs/api.md) — 서버, 로컬 API, MCP 도구.',
          '[CLI 가이드](https://github.com/leemysw/yovoice/blob/main/docs/cli.md) — CLI 설치와 백엔드.',
          '[아키텍처 노트](https://github.com/leemysw/yovoice/blob/main/docs/architecture.md) — 프로세스, 네트워크 사용, 데이터 폴더.',
          '[변경 기록](https://github.com/leemysw/yovoice/blob/main/CHANGELOG.md) — 0.8.0 변경 사항과 미공개 수정.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Voicebox 리뷰](/ko/power-local-llm/voicebox-review) — 받아쓰기와 MCP 서버를 갖춘 무료 MIT 라이선스 로컬 음성 스튜디오.',
          '[XTTS v2 리뷰](/ko/power-local-llm/xtts-v2-review) — 라이브러리로 로컬에서 실행되는 음성 복제 모델.',
          '[Coqui TTS 리뷰](/ko/power-local-llm/coqui-tts-review) — 로컬 음성 합성용 Python 툴킷.',
          '[음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 이 리뷰가 속한 카테고리 비교.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그.',
        ],
      },
    },
  },
}
