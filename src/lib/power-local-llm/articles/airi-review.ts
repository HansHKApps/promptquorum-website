// AIRI Review: Open-Source AI Companion with Voice Chat and Game Integrations
// Slug: airi-review
// Companion to: open-llm-vtuber-review, hiwaifu-review, sillytavern-review
// Sources (all read 2026-11-18, no hands-on testing): GitHub repository, README and LICENSE (moeru-ai/airi), release v0.15.4, and the docs site
// (overview, versions page, desktop and web manuals). The web app page airi.moeru.ai did not load for the fetcher ("AIRI could not start").
// No privacy policy, terms or imprint found => HQ country not set. The request came from the site owner, not from the maker.
// Last upstream update 2026-11-18 (last commit; latest stable release 2026-11-12) => no stale warning.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Creative & Roleplay',
    heroImage: '/images/airi-review-hero-en.webp',
    title: 'AIRI Review: Open-Source AI Companion with Voice Chat and Game Integrations',
    seoTitle: 'AIRI Review: Open-Source AI Companion with Voice Chat',
    intro:
      'AIRI (Project AIRI) is a free, MIT-licensed AI companion that runs in a browser or as a desktop app. It combines chat with a language model of your choice, voice input and speech output, and Live2D or VRM characters. This review is based on the project\'s GitHub repository, its releases and its documentation, checked on 18 November 2026. PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'AIRI is a free MIT-licensed AI companion for browser, Windows, macOS and Linux with voice chat and Live2D or VRM characters. Setup, privacy, limits.',
    twitterDescription:
      'AIRI is an open-source AI companion with voice chat, Live2D and VRM characters and optional game integrations. Free, MIT-licensed, early-stage.',
    audience:
      'Hobbyists and developers who want a self-hosted AI companion or virtual character with voice chat and optional game and chat-app integrations',
    readTime: '6 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AIRI',
    targetKeywords: [
      'AIRI review',
      'Project AIRI',
      'AI companion open source',
      'AIRI Live2D VRM',
      'AIRI Ollama',
      'Neuro-sama alternative',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**AIRI is a free, MIT-licensed AI companion that runs in a browser or as a Windows, macOS or Linux desktop app, with voice chat and Live2D or VRM characters.** You connect your own language model provider, local or cloud, so where your chats go depends on that choice. The README itself says the project is at an early stage of development.',
    quickAnswerTop: {
      en: {
        question: 'What is AIRI and who is it for?',
        answer:
          'AIRI is an open-source AI companion: a chat model with a voice and an animated character. It suits hobbyists and developers who are comfortable choosing and configuring their own model and speech providers.',
        bullets: [
          'Platforms: browser version, plus desktop builds for Windows, macOS and Linux.',
          'Price and license: free app under the MIT license.',
          'Voice: speech input from the browser or Discord, speech output through several providers.',
          'Characters: Live2D and VRM models with automatic blinking and eye movement.',
          'Data: depends on the chat, speech and vision providers you connect.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Overview', anchor: 'overview' },
      { label: 'How to Get It', anchor: 'get-it' },
      { label: 'Requirements', anchor: 'requirements' },
      { label: 'Features', anchor: 'features' },
      { label: 'Privacy and Data Flow', anchor: 'privacy' },
      { label: 'Who Should Use It', anchor: 'who-should-use' },
      { label: 'What We Could Not Verify', anchor: 'who-should-not-use' },
      { label: 'Alternatives', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: 'AIRI is a free, open-source AI companion that gives a chat model a voice and a Live2D or VRM character, in a browser or as a desktop app.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a talking, animated character that sits on top of whichever language model you connect. AIRI itself is free; the models and voices you plug in may be local or paid cloud services.',
          },
        ],
        items: [
          'You pick the chat provider: OpenAI-compatible APIs, OpenRouter, Ollama, vLLM, Anthropic Claude, Google Gemini and many more are listed in the README.',
          'Install routes: a browser version, installers on GitHub Releases, and winget, Scoop or Homebrew Cask commands.',
          'Optional integrations include Minecraft, Discord and Telegram; Factorio support is described as work in progress.',
          'The README says the project is still at an early stage of development; the latest commit is dated 18 November 2026.',
          'PromptQuorum has not tested the app. No privacy policy was found, so check each provider\'s terms before connecting it.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Voice input, speech output and screen capture can send audio, text or screen content to the cloud providers you connect. Check consent and workplace rules before using it with other people\'s voices or confidential material. This is general information, not legal advice.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**AIRI is an open-source AI companion that gives a chat model a voice and a character body, in a browser or on the desktop.**',
          'The project is published by the moeru-ai GitHub organization as Project AIRI, and the MIT license names Neko Ayaka as copyright holder (2024-present). The README describes it as a re-creation of the virtual streamer Neuro-sama, and the repository description calls it a "Self hosted, you-owned Grok Companion". Stable release 0.15.4 came out on 12 November 2026, a pre-release 0.15.5 followed on 14 November, and the latest commit is dated 18 November 2026, so development is active and no stale-project warning applies.',
          'Per the README, the project uses web technologies such as WebGPU, WebAudio and WebSocket. The browser version is meant to show what browsers can do, while the desktop version can, per the README, use NVIDIA CUDA and Apple Metal natively. The docs describe the desktop version as suited to more advanced use such as VTuber streaming, computer use and access to local LLMs.',
          'The README lists what the project can do: play Minecraft, chat in Discord and Telegram, listen through browser or Discord audio, speak through several speech providers and animate Live2D and VRM models. Factorio support is marked work in progress, and roadmap items such as a memory system are still unchecked.',
          'These descriptions come from the maker\'s README and docs. PromptQuorum has not run the app and has not assessed voice quality, latency, character behavior or resource use.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**You can open AIRI in a browser or install the desktop app from GitHub Releases, winget, Scoop or Homebrew Cask.**',
          'The README shows download buttons for Windows, macOS and Linux. Stable release 0.15.4 lists a Windows installer (.exe), macOS .dmg files for Apple silicon and Intel, and Linux AppImage, .deb, .rpm, .flatpak and .pacman packages. The release also contains an Android APK, but neither the README nor the docs describe Android as a supported platform, so it is not listed here. The docs offer a pre-release and experimental nightly builds as separate channels.',
        ],
        columns: ['Platform', 'How to get it'],
        rows: [
          { 'Platform': '[Windows](https://github.com/moeru-ai/airi/releases/latest)', 'How to get it': 'Installer (.exe) or winget install MoeruAI.AIRI' },
          { 'Platform': '[macOS](https://github.com/moeru-ai/airi/releases/latest)', 'How to get it': 'Disk image (.dmg) or brew install --cask airi' },
          { 'Platform': '[Linux](https://github.com/moeru-ai/airi/releases/latest)', 'How to get it': 'AppImage, .deb, .rpm, .flatpak or .pacman' },
          { 'Platform': '[Browser](https://airi.moeru.ai)', 'How to get it': 'Open the web version, no install' },
          { 'Platform': '[Website](https://airi.moeru.ai/docs/en/)', 'How to get it': 'Official site and documentation' },
        ],
        note: 'The sources do not say whether the installers are code-signed, so expect possible operating-system warnings and check them before you proceed.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements',
        content: [
          '**AIRI states no hardware requirements, so what you need depends on the providers and models you choose.**',
          'With cloud providers most of the work happens remotely. Running a local model through a tool such as Ollama needs hardware sized for that model, which AIRI does not control.',
        ],
        columns: ['Item', 'Stated figure'],
        rows: [
          { 'Item': 'Operating system', 'Stated figure': 'Windows, macOS, Linux (release files)' },
          { 'Item': 'Browser', 'Stated figure': 'Web version available' },
          { 'Item': 'RAM / VRAM', 'Stated figure': 'No requirement stated' },
          { 'Item': 'GPU', 'Stated figure': 'Optional; README mentions CUDA and Metal' },
          { 'Item': 'Disk', 'Stated figure': 'No figure stated' },
          { 'Item': 'Microphone', 'Stated figure': 'Needed for voice input (docs)' },
        ],
        note: 'Screen and window capture is available only in the desktop version, per the web manual.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**AIRI\'s core is a chat model with a voice and a character body, plus optional integrations.** All items below are maker claims from the README and docs.',
        ],
        items: [
          'Chat with a model from a provider you pick, including OpenAI-compatible APIs, OpenRouter, Ollama, vLLM, Anthropic Claude, Google Gemini and DeepSeek, among others in the README list.',
          'Voice input from the browser or Discord, with client-side speech recognition and talking detection.',
          'Speech output through several providers, including ElevenLabs, Microsoft/Azure Speech, OpenAI-compatible text-to-speech, Alibaba Cloud Model Studio and local Kokoro TTS.',
          'Live2D and VRM character models with automatic blinking, look-at and idle eye movement.',
          'Playing Minecraft; Factorio is described as work in progress with a proof of concept.',
          'Chat bots for Discord and Telegram.',
          'Screen and window capture for vision in the desktop version (docs).',
          'In-browser memory storage with DuckDB WASM or pglite; the roadmap still lists a memory system and pure in-browser local inference as unfinished.',
          'A plugin system that the README describes as work in progress.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**Where your data goes depends on the providers you connect, and no privacy policy was found.**',
          'AIRI does not run one fixed model. The docs say you add a chat provider such as OpenRouter, an OpenAI-compatible service, Ollama or Google Gemini with an API key or a local service address, and separate providers for speech, transcription and vision. If those are cloud services, your text and audio can go to them under their own terms; with Ollama on your machine, the model runs there.',
          'The docs also offer signing in to an official AIRI provider as an alternative. The v0.15.4 release notes describe a subscription with a Flux balance for it. They also say the desktop app, web app, mobile app and sign-in pages can send error reports under the same data-collection switch as product analytics. What those reports contain, and how the official provider handles chats, is not stated in the sources PromptQuorum read.',
          'The docs list vision providers and say screen and window capture is available in the desktop version. If you combine them with a cloud provider, screen content would leave your computer.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**AIRI fits people who want a free, open-source AI character they can configure themselves.**',
        ],
        items: [
          'Hobbyists who want an AI character with voice and a Live2D or VRM body.',
          'Developers and streamers who want to try game or chat-app integrations and accept early-stage software.',
          'People who already run Ollama or another provider and want a character front end for it.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        content: [
          '**AIRI is a poor fit in some situations, and several details remain unverified.**',
        ],
        items: [
          'Not a fit: users who want a finished, stable product; the README says the project is at an early stage of development.',
          'Unverified: any privacy policy, terms of service or imprint. None was found on the website, in the docs or in the repository.',
          'Unverified: the maintainer\'s location. No source read names a country.',
          'Unverified: hardware requirements, disk use and performance. None are stated.',
          'Unverified: the browser version. The page at [airi.moeru.ai](https://airi.moeru.ai) showed "AIRI could not start" when PromptQuorum fetched it, so it was not inspected.',
          'Unverified: mobile support. The release lists an Android APK and the README mentions an experimental mobile app, but the docs describe mobile use through the web version.',
          'Unverified: subscription prices and what the official AIRI provider includes. The release notes mention a subscription and Flux but give no prices.',
          'Unverified: whether the installers are code-signed.',
          'Unverified: voice quality, latency, character behavior and game-playing results. All feature descriptions are the maker\'s own.',
          'Unverified: whether AIRI works fully offline. The sources do not say so.',
          'Unverified: independent coverage. No third-party review was read for this entry.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'AIRI vs Alternatives',
        itemHeadings: true,
        content: [
          '**AIRI combines voice chat, character models and game integrations in one project. PromptQuorum has not compared it with the alternatives hands-on.** The alternatives below come from AIRI\'s own "Similar Projects" list and PromptQuorum\'s reviews.',
        ],
        columns: ['Tool', 'Noted in sources'],
        rows: [
          { 'Tool': 'AIRI', 'Noted in sources': 'MIT; browser and desktop; voice, Live2D/VRM, games' },
          { 'Tool': '[Open-LLM-VTuber](/power-local-llm/open-llm-vtuber-review)', 'Noted in sources': 'Self-hosted voice chat with Live2D; PromptQuorum review' },
          { 'Tool': '[SillyTavern](/local-llms/sillytavern-review)', 'Noted in sources': 'Character-chat frontend with lorebooks; PromptQuorum review' },
          { 'Tool': '[Amica](https://github.com/semperai/amica/)', 'Noted in sources': 'In AIRI\'s list: "Great at VRM, WebXR"' },
          { 'Tool': '[Neuro](https://github.com/kimjammer/Neuro)', 'Noted in sources': 'In AIRI\'s list: a Neuro-sama recreation' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Is AIRI free?',
            a: 'The app is free and MIT-licensed. The v0.15.4 release notes describe an optional subscription and Flux balance for the official AIRI provider, but no prices were found, so costs depend on whether you use that provider or your own provider accounts.',
          },
          {
            q: 'Does AIRI run models on my computer?',
            a: 'Not by itself, per the docs: you connect providers, and Ollama is one of the listed chat providers for local models. The README also says the desktop version can use NVIDIA CUDA and Apple Metal natively but gives no details on which models.',
          },
          {
            q: 'Which platforms does AIRI support?',
            a: 'A browser version at [airi.moeru.ai](https://airi.moeru.ai) and desktop builds for Windows, macOS and Linux, per the release files. The docs describe mobile use as going through the web version.',
          },
          {
            q: 'Can AIRI play games?',
            a: 'The README says it can play Minecraft and lists Factorio as work in progress with a proof of concept. These are maker statements that PromptQuorum did not test.',
          },
          {
            q: 'Is there an official AIRI cryptocurrency?',
            a: 'No, per the README: it says the project has no officially minted cryptocurrency or token and asks users to proceed with caution.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**AIRI is worth a look if you want a free, open-source AI character with voice and a Live2D or VRM body and can accept early-stage software.**',
          'It has an MIT license, installers for three desktop systems plus a browser version, a long list of selectable providers including Ollama, and active development: a stable release on 12 November 2026 and a commit on 18 November 2026.',
          'The trade-offs are real. The README calls the project early-stage, privacy depends on the providers you pick, no privacy policy was found, and hardware needs and quality are unstated. PromptQuorum has not tested the app. Try it first with a local Ollama model or a throwaway provider key, and check which services receive your voice and screen data.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[AIRI website](https://airi.moeru.ai) — web app entry point; the page did not load when checked on 18 November 2026.',
          '[AIRI documentation](https://airi.moeru.ai/docs/en/) — project description and navigation, checked 18 November 2026.',
          '[Docs overview](https://airi.moeru.ai/docs/en/docs/overview/) — web and desktop versions and their intended uses, checked 18 November 2026.',
          '[Docs versions page](https://airi.moeru.ai/docs/en/docs/overview/versions) — stable, pre-release and nightly channels, checked 18 November 2026.',
          '[Desktop manual](https://airi.moeru.ai/docs/en/docs/manual/tamagotchi/) — provider setup, Ollama and sign-in, checked 18 November 2026.',
          '[Web manual](https://airi.moeru.ai/docs/en/docs/manual/web/) — providers, microphone and desktop-only screen capture, checked 18 November 2026.',
          '[AIRI GitHub repository](https://github.com/moeru-ai/airi) — repository description, license and last commit, checked 18 November 2026.',
          '[AIRI README](https://github.com/moeru-ai/airi#readme) — features, roadmap, install commands, provider list and similar projects, checked 18 November 2026.',
          '[LICENSE](https://github.com/moeru-ai/airi/blob/HEAD/LICENSE) — MIT License and copyright line, checked 18 November 2026.',
          '[Release v0.15.4](https://github.com/moeru-ai/airi/releases/tag/v0.15.4) — release files, subscription and error-report notes, checked 18 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Open-LLM-VTuber Review](/power-local-llm/open-llm-vtuber-review) — a self-hosted voice chat companion with a Live2D avatar.',
          '[HiWaifu Review](/power-local-llm/hiwaifu-review) — an AI companion app for phones.',
          '[SillyTavern Review](/local-llms/sillytavern-review) — a self-hosted character-chat frontend with lorebooks.',
          '[SillyTavern vs. Agnai vs. RisuAI](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — three roleplay frontends compared.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Creative & Roleplay',
    heroImage: '/images/airi-review-hero-de.webp',
    title: 'AIRI-Rezension: Open-Source-KI-Begleiter mit Sprachchat und Spiel-Anbindungen',
    seoTitle: 'AIRI-Rezension: Open-Source-KI-Begleiter mit Sprachchat',
    intro:
      'AIRI (Project AIRI) ist ein kostenloser KI-Begleiter unter MIT-Lizenz, der im Browser oder als Desktop-App läuft. Er verbindet Chat mit einem Sprachmodell Ihrer Wahl, Spracheingabe und Sprachausgabe sowie Live2D- oder VRM-Figuren. Diese Rezension stützt sich auf das GitHub-Repository des Projekts, seine Releases und seine Dokumentation, geprüft am 18. November 2026. PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'AIRI ist ein kostenloser KI-Begleiter (MIT) für Browser, Windows, macOS und Linux mit Sprachchat und Live2D-/VRM-Figuren. Setup, Datenschutz, Grenzen.',
    twitterDescription:
      'AIRI ist ein quelloffener KI-Begleiter mit Sprachchat, Live2D- und VRM-Figuren und optionalen Spiel-Anbindungen. Kostenlos, MIT-Lizenz, frühe Entwicklungsphase.',
    audience:
      'Hobbyanwender und Entwickler, die einen selbst konfigurierbaren KI-Begleiter oder eine virtuelle Figur mit Sprachchat und optionalen Anbindungen an Spiele und Chat-Apps suchen',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AIRI',
    targetKeywords: [
      'AIRI Rezension',
      'Project AIRI',
      'KI-Begleiter Open Source',
      'AIRI Live2D VRM',
      'AIRI Ollama',
      'Neuro-sama Alternative',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**AIRI ist ein kostenloser KI-Begleiter unter MIT-Lizenz, der im Browser oder als Desktop-App für Windows, macOS und Linux läuft und Sprachchat sowie Live2D- oder VRM-Figuren bietet.** Sie binden Ihren eigenen Anbieter für Sprachmodelle an, lokal oder in der Cloud; wohin Ihre Chats gehen, hängt daher von dieser Wahl ab. Laut README befindet sich das Projekt noch in einer frühen Entwicklungsphase.',
    quickAnswerTop: {
      de: {
        question: 'Was ist AIRI, und für wen ist es gedacht?',
        answer:
          'AIRI ist ein quelloffener KI-Begleiter: ein Chat-Modell mit Stimme und animierter Figur. Er eignet sich für Hobbyanwender und Entwickler, die ihre Modell- und Sprachanbieter gern selbst auswählen und einrichten.',
        bullets: [
          'Plattformen: Browser-Version sowie Desktop-Builds für Windows, macOS und Linux.',
          'Preis und Lizenz: kostenlose App unter der MIT-Lizenz.',
          'Sprache: Spracheingabe über Browser oder Discord, Sprachausgabe über mehrere Anbieter.',
          'Figuren: Live2D- und VRM-Modelle mit automatischem Blinzeln und Augenbewegung.',
          'Daten: hängen von den angebundenen Chat-, Sprach- und Vision-Anbietern ab.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'Überblick', anchor: 'overview' },
      { label: 'So bekommen Sie die App', anchor: 'get-it' },
      { label: 'Anforderungen', anchor: 'requirements' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Datenschutz und Datenfluss', anchor: 'privacy' },
      { label: 'Für wen geeignet', anchor: 'who-should-use' },
      { label: 'Was wir nicht überprüfen konnten', anchor: 'who-should-not-use' },
      { label: 'Alternativen', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: 'AIRI ist ein kostenloser, quelloffener KI-Begleiter, der einem Chat-Modell eine Stimme und eine Live2D- oder VRM-Figur gibt, im Browser oder als Desktop-App.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich eine sprechende, animierte Figur vor, die auf dem Sprachmodell sitzt, das Sie anbinden. AIRI selbst ist kostenlos; die eingebundenen Modelle und Stimmen können lokal laufen oder kostenpflichtige Cloud-Dienste sein.',
          },
        ],
        items: [
          'Sie wählen den Chat-Anbieter: OpenAI-kompatible APIs, OpenRouter, Ollama, vLLM, Anthropic Claude, Google Gemini und viele weitere stehen in der README-Liste.',
          'Installationswege: eine Browser-Version, Installationsdateien auf GitHub Releases sowie Befehle für winget, Scoop oder Homebrew Cask.',
          'Optionale Anbindungen umfassen Minecraft, Discord und Telegram; die Factorio-Unterstützung gilt als in Arbeit.',
          'Laut README befindet sich das Projekt noch in einer frühen Entwicklungsphase; der letzte Commit stammt vom 18. November 2026.',
          'PromptQuorum hat die App nicht getestet. Eine Datenschutzerklärung wurde nicht gefunden; prüfen Sie daher die Bedingungen jedes Anbieters, bevor Sie ihn anbinden.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Spracheingabe, Sprachausgabe und Bildschirmaufnahme können Audio, Text oder Bildschirminhalte an die angebundenen Cloud-Anbieter senden. Klären Sie Einwilligung und Regeln am Arbeitsplatz, bevor Sie die App mit den Stimmen anderer Personen oder vertraulichem Material nutzen. Dies sind allgemeine Informationen, keine Rechtsberatung.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**AIRI ist ein quelloffener KI-Begleiter, der einem Chat-Modell eine Stimme und einen Figurenkörper gibt, im Browser oder auf dem Desktop.**',
          'Das Projekt wird von der GitHub-Organisation moeru-ai als Project AIRI veröffentlicht, und die MIT-Lizenz nennt Neko Ayaka als Inhaber des Urheberrechts (2024 bis heute). Das README beschreibt es als Nachbildung der virtuellen Streamerin Neuro-sama, und die Repository-Beschreibung nennt es ein „Self hosted, you-owned Grok Companion“. Die stabile Version 0.15.4 erschien am 12. November 2026, eine Vorabversion 0.15.5 folgte am 14. November, und der letzte Commit stammt vom 18. November 2026; die Entwicklung ist also aktiv, und es gilt keine Warnung vor einem veralteten Projekt.',
          'Laut README setzt das Projekt auf Web-Technologien wie WebGPU, WebAudio und WebSocket. Die Browser-Version soll zeigen, was Browser leisten können, während die Desktop-Version laut README NVIDIA CUDA und Apple Metal nativ nutzen kann. Die Dokumentation beschreibt die Desktop-Version als geeignet für anspruchsvollere Einsätze wie VTuber-Streaming, Computer-Steuerung und den Zugriff auf lokale LLMs.',
          'Das README führt auf, was das Projekt kann: Minecraft spielen, in Discord und Telegram chatten, über Browser- oder Discord-Audio zuhören, über mehrere Sprachanbieter sprechen und Live2D- und VRM-Modelle animieren. Die Factorio-Unterstützung ist als in Arbeit markiert, und Punkte der Roadmap wie ein Gedächtnissystem sind noch offen.',
          'Diese Beschreibungen stammen aus dem README und der Dokumentation des Herstellers. PromptQuorum hat die App nicht ausgeführt und weder Sprachqualität, Latenz, Verhalten der Figuren noch Ressourcenbedarf beurteilt.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So bekommen Sie die App',
        content: [
          '**Sie können AIRI im Browser öffnen oder die Desktop-App über GitHub Releases, winget, Scoop oder Homebrew Cask installieren.**',
          'Das README zeigt Download-Schaltflächen für Windows, macOS und Linux. Die stabile Version 0.15.4 enthält ein Windows-Installationsprogramm (.exe), macOS-.dmg-Dateien für Apple Silicon und Intel sowie Linux-Pakete als AppImage, .deb, .rpm, .flatpak und .pacman. Die Version enthält außerdem eine Android-APK, doch weder README noch Dokumentation nennen Android als unterstützte Plattform; sie wird hier deshalb nicht aufgeführt. Die Dokumentation bietet eine Vorabversion und experimentelle Nightly-Builds als eigene Kanäle an.',
        ],
        columns: ['Plattform', 'So bekommen Sie sie'],
        rows: [
          { 'Plattform': '[Windows](https://github.com/moeru-ai/airi/releases/latest)', 'So bekommen Sie sie': 'Installer (.exe) oder winget install MoeruAI.AIRI' },
          { 'Plattform': '[macOS](https://github.com/moeru-ai/airi/releases/latest)', 'So bekommen Sie sie': 'Disk-Image (.dmg) oder brew install --cask airi' },
          { 'Plattform': '[Linux](https://github.com/moeru-ai/airi/releases/latest)', 'So bekommen Sie sie': 'AppImage, .deb, .rpm, .flatpak oder .pacman' },
          { 'Plattform': '[Browser](https://airi.moeru.ai)', 'So bekommen Sie sie': 'Web-Version öffnen, keine Installation' },
          { 'Plattform': '[Website](https://airi.moeru.ai/docs/en/)', 'So bekommen Sie sie': 'Offizielle Website und Dokumentation' },
        ],
        note: 'Die Quellen sagen nicht, ob die Installationsdateien codesigniert sind; rechnen Sie daher mit möglichen Warnungen des Betriebssystems und prüfen Sie diese, bevor Sie fortfahren.',
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen',
        content: [
          '**AIRI nennt keine Hardware-Anforderungen; was Sie brauchen, hängt von den gewählten Anbietern und Modellen ab.**',
          'Bei Cloud-Anbietern findet der Großteil der Arbeit extern statt. Ein lokales Modell über ein Werkzeug wie Ollama benötigt Hardware, die zu diesem Modell passt; darauf hat AIRI keinen Einfluss.',
        ],
        columns: ['Punkt', 'Angegebener Wert'],
        rows: [
          { 'Punkt': 'Betriebssystem', 'Angegebener Wert': 'Windows, macOS, Linux (Release-Dateien)' },
          { 'Punkt': 'Browser', 'Angegebener Wert': 'Web-Version verfügbar' },
          { 'Punkt': 'RAM / VRAM', 'Angegebener Wert': 'Keine Anforderung angegeben' },
          { 'Punkt': 'GPU', 'Angegebener Wert': 'Optional; README nennt CUDA und Metal' },
          { 'Punkt': 'Speicherplatz', 'Angegebener Wert': 'Kein Wert angegeben' },
          { 'Punkt': 'Mikrofon', 'Angegebener Wert': 'Für Spracheingabe nötig (Doku)' },
        ],
        note: 'Bildschirm- und Fensteraufnahme gibt es laut Web-Handbuch nur in der Desktop-Version.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Kern von AIRI ist ein Chat-Modell mit Stimme und Figurenkörper, dazu optionale Anbindungen.** Alle Punkte unten sind Angaben des Herstellers aus README und Dokumentation.',
        ],
        items: [
          'Chat mit einem Modell eines Anbieters Ihrer Wahl, darunter OpenAI-kompatible APIs, OpenRouter, Ollama, vLLM, Anthropic Claude, Google Gemini und DeepSeek, neben weiteren in der README-Liste.',
          'Spracheingabe über Browser oder Discord, mit clientseitiger Spracherkennung und Sprecherkennung.',
          'Sprachausgabe über mehrere Anbieter, darunter ElevenLabs, Microsoft/Azure Speech, OpenAI-kompatibles Text-to-Speech, Alibaba Cloud Model Studio und lokales Kokoro TTS.',
          'Live2D- und VRM-Figuren mit automatischem Blinzeln, Blickfolgen und Augenbewegung im Leerlauf.',
          'Minecraft spielen; Factorio gilt als in Arbeit, mit einem Machbarkeitsnachweis.',
          'Chat-Bots für Discord und Telegram.',
          'Bildschirm- und Fensteraufnahme für Vision in der Desktop-Version (Doku).',
          'Gedächtnis-Speicherung im Browser mit DuckDB WASM oder pglite; ein Gedächtnissystem und rein lokale Inferenz im Browser stehen auf der Roadmap noch als unfertig.',
          'Ein Plugin-System, das das README als in Arbeit beschreibt.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Wohin Ihre Daten gehen, hängt von den angebundenen Anbietern ab, und eine Datenschutzerklärung wurde nicht gefunden.**',
          'AIRI führt nicht ein festes Modell aus. Laut Dokumentation fügen Sie einen Chat-Anbieter wie OpenRouter, einen OpenAI-kompatiblen Dienst, Ollama oder Google Gemini mit einem API-Schlüssel oder einer lokalen Dienstadresse hinzu, dazu eigene Anbieter für Sprache, Transkription und Vision. Handelt es sich um Cloud-Dienste, können Ihr Text und Ihr Audio nach deren eigenen Bedingungen dorthin gelangen; mit Ollama auf Ihrem Rechner läuft das Modell dort.',
          'Die Dokumentation bietet als Alternative auch die Anmeldung bei einem offiziellen AIRI-Anbieter an. Die Release-Notes zu v0.15.4 beschreiben dafür ein Abonnement mit einem Flux-Guthaben. Sie sagen außerdem, dass Desktop-App, Web-App, Mobile-App und Anmeldeseiten Fehlerberichte senden können, und zwar über denselben Schalter zur Datenerhebung wie die Produktanalyse. Was diese Berichte enthalten und wie der offizielle Anbieter Chats behandelt, steht nicht in den Quellen, die PromptQuorum gelesen hat.',
          'Die Dokumentation nennt Vision-Anbieter und sagt, dass Bildschirm- und Fensteraufnahme in der Desktop-Version verfügbar ist. Kombinieren Sie beides mit einem Cloud-Anbieter, würden Bildschirminhalte Ihren Computer verlassen.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**AIRI passt zu Menschen, die eine kostenlose, quelloffene KI-Figur wollen, die sie selbst konfigurieren können.**',
        ],
        items: [
          'Hobbyanwender, die eine KI-Figur mit Stimme und Live2D- oder VRM-Körper möchten.',
          'Entwickler und Streamer, die Anbindungen an Spiele oder Chat-Apps ausprobieren wollen und Software in früher Phase akzeptieren.',
          'Personen, die bereits Ollama oder einen anderen Anbieter betreiben und eine Figuren-Oberfläche dafür suchen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        content: [
          '**AIRI passt in manchen Situationen schlecht, und mehrere Details sind nicht verifiziert.**',
        ],
        items: [
          'Nicht geeignet: Nutzer, die ein fertiges, stabiles Produkt wollen; laut README befindet sich das Projekt in einer frühen Entwicklungsphase.',
          'Nicht verifiziert: eine Datenschutzerklärung, Nutzungsbedingungen oder ein Impressum. Auf der Website, in der Dokumentation und im Repository wurde keines gefunden.',
          'Nicht verifiziert: der Standort des Maintainers. Keine gelesene Quelle nennt ein Land.',
          'Nicht verifiziert: Hardware-Anforderungen, Speicherbedarf und Leistung. Dazu gibt es keine Angaben.',
          'Nicht verifiziert: die Browser-Version. Die Seite [airi.moeru.ai](https://airi.moeru.ai) zeigte beim Abruf durch PromptQuorum „AIRI could not start“, sie wurde daher nicht geprüft.',
          'Nicht verifiziert: mobile Unterstützung. Die Version listet eine Android-APK, und das README erwähnt eine experimentelle Mobile-App, doch die Dokumentation beschreibt die mobile Nutzung über die Web-Version.',
          'Nicht verifiziert: Abo-Preise und was der offizielle AIRI-Anbieter umfasst. Die Release-Notes erwähnen ein Abonnement und Flux, nennen aber keine Preise.',
          'Nicht verifiziert: ob die Installationsdateien codesigniert sind.',
          'Nicht verifiziert: Sprachqualität, Latenz, Verhalten der Figuren und Ergebnisse beim Spielen. Alle Funktionsbeschreibungen stammen vom Hersteller.',
          'Nicht verifiziert: ob AIRI vollständig offline funktioniert. Die Quellen sagen dazu nichts.',
          'Nicht verifiziert: unabhängige Berichterstattung. Für diesen Eintrag wurde keine Rezension eines Dritten gelesen.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'AIRI im Vergleich zu Alternativen',
        itemHeadings: true,
        content: [
          '**AIRI vereint Sprachchat, Figurenmodelle und Spiel-Anbindungen in einem Projekt. PromptQuorum hat es nicht praktisch mit den Alternativen verglichen.** Die folgenden Alternativen stammen aus der eigenen Liste „Similar Projects“ von AIRI und aus Rezensionen von PromptQuorum.',
        ],
        columns: ['Werkzeug', 'In den Quellen genannt'],
        rows: [
          { 'Werkzeug': 'AIRI', 'In den Quellen genannt': 'MIT; Browser und Desktop; Sprache, Live2D/VRM, Spiele' },
          { 'Werkzeug': '[Open-LLM-VTuber](/de/power-local-llm/open-llm-vtuber-review)', 'In den Quellen genannt': 'Selbst gehosteter Sprachchat mit Live2D; PromptQuorum-Rezension' },
          { 'Werkzeug': '[SillyTavern](/de/local-llms/sillytavern-review)', 'In den Quellen genannt': 'Figuren-Chat-Oberfläche mit Lorebooks; PromptQuorum-Rezension' },
          { 'Werkzeug': '[Amica](https://github.com/semperai/amica/)', 'In den Quellen genannt': 'In AIRIs Liste: „Great at VRM, WebXR“' },
          { 'Werkzeug': '[Neuro](https://github.com/kimjammer/Neuro)', 'In den Quellen genannt': 'In AIRIs Liste: eine Nachbildung von Neuro-sama' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Ist AIRI kostenlos?',
            a: 'Die App ist kostenlos und steht unter der MIT-Lizenz. Die Release-Notes zu v0.15.4 beschreiben ein optionales Abonnement und ein Flux-Guthaben für den offiziellen AIRI-Anbieter, Preise wurden aber nicht gefunden; die Kosten hängen also davon ab, ob Sie diesen Anbieter oder Ihre eigenen Anbieter-Konten nutzen.',
          },
          {
            q: 'Führt AIRI Modelle auf meinem Computer aus?',
            a: 'Nicht von sich aus, laut Dokumentation: Sie binden Anbieter an, und Ollama ist einer der gelisteten Chat-Anbieter für lokale Modelle. Das README sagt außerdem, die Desktop-Version könne NVIDIA CUDA und Apple Metal nativ nutzen, nennt aber keine Einzelheiten dazu, welche Modelle.',
          },
          {
            q: 'Welche Plattformen unterstützt AIRI?',
            a: 'Eine Browser-Version unter [airi.moeru.ai](https://airi.moeru.ai) und Desktop-Builds für Windows, macOS und Linux, laut Release-Dateien. Die Dokumentation beschreibt die mobile Nutzung als Weg über die Web-Version.',
          },
          {
            q: 'Kann AIRI Spiele spielen?',
            a: 'Laut README kann es Minecraft spielen, und Factorio ist als in Arbeit mit einem Machbarkeitsnachweis aufgeführt. Das sind Angaben des Herstellers, die PromptQuorum nicht getestet hat.',
          },
          {
            q: 'Gibt es eine offizielle AIRI-Kryptowährung?',
            a: 'Nein, laut README: Es heißt dort, das Projekt habe keine offiziell geschaffene Kryptowährung und keinen Token, und Nutzer sollten vorsichtig sein.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**AIRI ist einen Blick wert, wenn Sie eine kostenlose, quelloffene KI-Figur mit Stimme und Live2D- oder VRM-Körper wollen und Software in früher Phase akzeptieren.**',
          'Es bietet eine MIT-Lizenz, Installationsdateien für drei Desktop-Systeme plus eine Browser-Version, eine lange Liste wählbarer Anbieter einschließlich Ollama und aktive Entwicklung: eine stabile Version am 12. November 2026 und einen Commit am 18. November 2026.',
          'Die Kompromisse sind real. Das README nennt das Projekt frühphasig, der Datenschutz hängt von den gewählten Anbietern ab, eine Datenschutzerklärung wurde nicht gefunden, und Hardware-Bedarf und Qualität sind nicht angegeben. PromptQuorum hat die App nicht getestet. Probieren Sie sie zuerst mit einem lokalen Ollama-Modell oder einem Wegwerf-API-Schlüssel aus und prüfen Sie, welche Dienste Ihre Sprach- und Bildschirmdaten erhalten.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[AIRI-Website](https://airi.moeru.ai) — Einstiegspunkt der Web-App; die Seite wurde bei der Prüfung am 18. November 2026 nicht geladen.',
          '[AIRI-Dokumentation](https://airi.moeru.ai/docs/en/) — Projektbeschreibung und Navigation, geprüft am 18. November 2026.',
          '[Doku-Überblick](https://airi.moeru.ai/docs/en/docs/overview/) — Web- und Desktop-Versionen und ihre vorgesehenen Einsätze, geprüft am 18. November 2026.',
          '[Doku-Seite zu Versionen](https://airi.moeru.ai/docs/en/docs/overview/versions) — Kanäle Stable, Vorabversion und Nightly, geprüft am 18. November 2026.',
          '[Desktop-Handbuch](https://airi.moeru.ai/docs/en/docs/manual/tamagotchi/) — Anbieter-Einrichtung, Ollama und Anmeldung, geprüft am 18. November 2026.',
          '[Web-Handbuch](https://airi.moeru.ai/docs/en/docs/manual/web/) — Anbieter, Mikrofon und Bildschirmaufnahme nur auf dem Desktop, geprüft am 18. November 2026.',
          '[AIRI-GitHub-Repository](https://github.com/moeru-ai/airi) — Repository-Beschreibung, Lizenz und letzter Commit, geprüft am 18. November 2026.',
          '[AIRI-README](https://github.com/moeru-ai/airi#readme) — Funktionen, Roadmap, Installationsbefehle, Anbieterliste und ähnliche Projekte, geprüft am 18. November 2026.',
          '[LICENSE](https://github.com/moeru-ai/airi/blob/HEAD/LICENSE) — MIT-Lizenz und Urheberrechtszeile, geprüft am 18. November 2026.',
          '[Release v0.15.4](https://github.com/moeru-ai/airi/releases/tag/v0.15.4) — Release-Dateien, Hinweise zu Abonnement und Fehlerberichten, geprüft am 18. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Open-LLM-VTuber-Rezension](/de/power-local-llm/open-llm-vtuber-review) — ein selbst gehosteter Sprachchat-Begleiter mit Live2D-Avatar.',
          '[HiWaifu-Rezension](/de/power-local-llm/hiwaifu-review) — eine KI-Begleiter-App für Smartphones.',
          '[SillyTavern-Rezension](/de/local-llms/sillytavern-review) — eine selbst gehostete Figuren-Chat-Oberfläche mit Lorebooks.',
          '[SillyTavern vs. Agnai vs. RisuAI](/de/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — drei Rollenspiel-Oberflächen im Vergleich.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Creative & Roleplay',
    heroImage: '/images/airi-review-hero-es.webp',
    title: 'Reseña de AIRI: compañero de IA de código abierto con chat de voz e integraciones con juegos',
    seoTitle: 'Reseña de AIRI: compañero de IA de código abierto con voz',
    intro:
      'AIRI (Project AIRI) es un compañero de IA gratuito con licencia MIT que funciona en el navegador o como app de escritorio. Combina el chat con un modelo de lenguaje a tu elección, entrada y salida de voz, y personajes Live2D o VRM. Esta reseña se basa en el repositorio de GitHub del proyecto, sus versiones y su documentación, consultados el 18 de noviembre de 2026. PromptQuorum no ha probado la app en la práctica.',
    metaDescription:
      'AIRI es un compañero de IA gratuito (MIT) para navegador, Windows, macOS y Linux, con chat de voz y personajes Live2D o VRM. Privacidad y límites.',
    twitterDescription:
      'AIRI es un compañero de IA de código abierto con chat de voz, personajes Live2D y VRM e integraciones opcionales con juegos. Gratuito, licencia MIT, fase temprana.',
    audience:
      'Aficionados y desarrolladores que buscan un compañero de IA o personaje virtual configurable por su cuenta, con chat de voz e integraciones opcionales con juegos y apps de mensajería',
    readTime: '6 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AIRI',
    targetKeywords: [
      'reseña de AIRI',
      'Project AIRI',
      'compañero de IA de código abierto',
      'AIRI Live2D VRM',
      'AIRI Ollama',
      'alternativa a Neuro-sama',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**AIRI es un compañero de IA gratuito con licencia MIT que funciona en el navegador o como app de escritorio para Windows, macOS y Linux, con chat de voz y personajes Live2D o VRM.** Tú conectas tu propio proveedor de modelos de lenguaje, local o en la nube, así que el destino de tus chats depende de esa elección. El propio README dice que el proyecto está en una fase temprana de desarrollo.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es AIRI y para quién es?',
        answer:
          'AIRI es un compañero de IA de código abierto: un modelo de chat con voz y un personaje animado. Encaja con aficionados y desarrolladores que se sienten cómodos eligiendo y configurando sus propios proveedores de modelos y de voz.',
        bullets: [
          'Plataformas: versión para navegador y compilaciones de escritorio para Windows, macOS y Linux.',
          'Precio y licencia: app gratuita con licencia MIT.',
          'Voz: entrada por el navegador o Discord, salida mediante varios proveedores.',
          'Personajes: modelos Live2D y VRM con parpadeo y movimiento ocular automáticos.',
          'Datos: dependen de los proveedores de chat, voz y visión que conectes.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Resumen general', anchor: 'overview' },
      { label: 'Cómo conseguirla', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Privacidad y flujo de datos', anchor: 'privacy' },
      { label: 'Para quién es', anchor: 'who-should-use' },
      { label: 'Lo que no pudimos verificar', anchor: 'who-should-not-use' },
      { label: 'Alternativas', anchor: 'alternatives' },
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
            text: 'AIRI es un compañero de IA gratuito y de código abierto que da voz y un personaje Live2D o VRM a un modelo de chat, en el navegador o como app de escritorio.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en un personaje animado que habla y que se apoya en el modelo de lenguaje que conectes. AIRI en sí es gratuito; los modelos y las voces que enchufes pueden ser locales o servicios de pago en la nube.',
          },
        ],
        items: [
          'Tú eliges el proveedor de chat: APIs compatibles con OpenAI, OpenRouter, Ollama, vLLM, Anthropic Claude, Google Gemini y muchos más figuran en la lista del README.',
          'Vías de instalación: una versión para navegador, instaladores en GitHub Releases y comandos de winget, Scoop o Homebrew Cask.',
          'Las integraciones opcionales incluyen Minecraft, Discord y Telegram; el soporte de Factorio se describe como trabajo en curso.',
          'El README dice que el proyecto sigue en una fase temprana de desarrollo; el último commit es del 18 de noviembre de 2026.',
          'PromptQuorum no ha probado la app. No se encontró una política de privacidad, así que revisa las condiciones de cada proveedor antes de conectarlo.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La entrada de voz, la salida de voz y la captura de pantalla pueden enviar audio, texto o contenido de pantalla a los proveedores en la nube que conectes. Revisa el consentimiento y las normas de tu lugar de trabajo antes de usarla con voces de otras personas o material confidencial. Es información general, no asesoramiento legal.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen general',
        content: [
          '**AIRI es un compañero de IA de código abierto que da a un modelo de chat una voz y un cuerpo de personaje, en el navegador o en el escritorio.**',
          'El proyecto lo publica la organización de GitHub moeru-ai como Project AIRI, y la licencia MIT nombra a Neko Ayaka como titular del copyright (2024 hasta hoy). El README lo describe como una recreación de la streamer virtual Neuro-sama, y la descripción del repositorio lo llama un «Self hosted, you-owned Grok Companion». La versión estable 0.15.4 salió el 12 de noviembre de 2026, una versión preliminar 0.15.5 llegó el 14 de noviembre y el último commit es del 18 de noviembre de 2026, así que el desarrollo está activo y no se aplica ninguna advertencia de proyecto abandonado.',
          'Según el README, el proyecto usa tecnologías web como WebGPU, WebAudio y WebSocket. La versión para navegador pretende mostrar lo que pueden hacer los navegadores, mientras que la versión de escritorio puede, según el README, usar NVIDIA CUDA y Apple Metal de forma nativa. La documentación describe la versión de escritorio como adecuada para usos más avanzados, como streaming de VTuber, control del ordenador y acceso a LLM locales.',
          'El README enumera lo que el proyecto puede hacer: jugar a Minecraft, chatear en Discord y Telegram, escuchar mediante audio del navegador o de Discord, hablar con varios proveedores de voz y animar modelos Live2D y VRM. El soporte de Factorio está marcado como trabajo en curso, y elementos de la hoja de ruta, como un sistema de memoria, siguen sin marcar.',
          'Estas descripciones proceden del README y de la documentación del creador. PromptQuorum no ha ejecutado la app y no ha evaluado la calidad de voz, la latencia, el comportamiento de los personajes ni el consumo de recursos.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirla',
        content: [
          '**Puedes abrir AIRI en el navegador o instalar la app de escritorio desde GitHub Releases, winget, Scoop o Homebrew Cask.**',
          'El README muestra botones de descarga para Windows, macOS y Linux. La versión estable 0.15.4 incluye un instalador de Windows (.exe), archivos .dmg de macOS para Apple silicon e Intel, y paquetes de Linux en AppImage, .deb, .rpm, .flatpak y .pacman. La versión también contiene un APK de Android, pero ni el README ni la documentación describen Android como plataforma compatible, por lo que no se incluye aquí. La documentación ofrece una versión preliminar y compilaciones nightly experimentales como canales aparte.',
        ],
        columns: ['Plataforma', 'Cómo conseguirla'],
        rows: [
          { 'Plataforma': '[Windows](https://github.com/moeru-ai/airi/releases/latest)', 'Cómo conseguirla': 'Instalador (.exe) o winget install MoeruAI.AIRI' },
          { 'Plataforma': '[macOS](https://github.com/moeru-ai/airi/releases/latest)', 'Cómo conseguirla': 'Imagen de disco (.dmg) o brew install --cask airi' },
          { 'Plataforma': '[Linux](https://github.com/moeru-ai/airi/releases/latest)', 'Cómo conseguirla': 'AppImage, .deb, .rpm, .flatpak o .pacman' },
          { 'Plataforma': '[Navegador](https://airi.moeru.ai)', 'Cómo conseguirla': 'Abre la versión web, sin instalar' },
          { 'Plataforma': '[Sitio web](https://airi.moeru.ai/docs/en/)', 'Cómo conseguirla': 'Sitio oficial y documentación' },
        ],
        note: 'Las fuentes no indican si los instaladores están firmados, así que cuenta con posibles avisos del sistema operativo y revísalos antes de continuar.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**AIRI no indica requisitos de hardware, así que lo que necesitas depende de los proveedores y modelos que elijas.**',
          'Con proveedores en la nube, la mayor parte del trabajo ocurre en remoto. Ejecutar un modelo local con una herramienta como Ollama exige hardware acorde a ese modelo, algo que AIRI no controla.',
        ],
        columns: ['Elemento', 'Dato indicado'],
        rows: [
          { 'Elemento': 'Sistema operativo', 'Dato indicado': 'Windows, macOS, Linux (archivos de la versión)' },
          { 'Elemento': 'Navegador', 'Dato indicado': 'Versión web disponible' },
          { 'Elemento': 'RAM / VRAM', 'Dato indicado': 'Sin requisito indicado' },
          { 'Elemento': 'GPU', 'Dato indicado': 'Opcional; el README menciona CUDA y Metal' },
          { 'Elemento': 'Disco', 'Dato indicado': 'Sin cifra indicada' },
          { 'Elemento': 'Micrófono', 'Dato indicado': 'Necesario para la entrada de voz (docs)' },
        ],
        note: 'La captura de pantalla y de ventanas solo está disponible en la versión de escritorio, según el manual web.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El núcleo de AIRI es un modelo de chat con voz y cuerpo de personaje, más integraciones opcionales.** Todos los puntos siguientes son afirmaciones del creador tomadas del README y de la documentación.',
        ],
        items: [
          'Chat con un modelo de un proveedor que elijas, incluidas APIs compatibles con OpenAI, OpenRouter, Ollama, vLLM, Anthropic Claude, Google Gemini y DeepSeek, entre otros de la lista del README.',
          'Entrada de voz desde el navegador o Discord, con reconocimiento de voz y detección de habla en el cliente.',
          'Salida de voz con varios proveedores, entre ellos ElevenLabs, Microsoft/Azure Speech, texto a voz compatible con OpenAI, Alibaba Cloud Model Studio y Kokoro TTS local.',
          'Modelos de personaje Live2D y VRM con parpadeo, seguimiento de mirada y movimiento ocular en reposo automáticos.',
          'Jugar a Minecraft; Factorio se describe como trabajo en curso con una prueba de concepto.',
          'Bots de chat para Discord y Telegram.',
          'Captura de pantalla y de ventanas para visión en la versión de escritorio (docs).',
          'Almacenamiento de memoria en el navegador con DuckDB WASM o pglite; la hoja de ruta aún da por inacabados un sistema de memoria y la inferencia local pura en el navegador.',
          'Un sistema de plugins que el README describe como trabajo en curso.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**El destino de tus datos depende de los proveedores que conectes, y no se encontró una política de privacidad.**',
          'AIRI no ejecuta un modelo fijo. Según la documentación, añades un proveedor de chat como OpenRouter, un servicio compatible con OpenAI, Ollama o Google Gemini con una clave de API o una dirección de servicio local, y proveedores aparte para voz, transcripción y visión. Si son servicios en la nube, tu texto y tu audio pueden llegar a ellos bajo sus propias condiciones; con Ollama en tu equipo, el modelo se ejecuta ahí.',
          'La documentación también ofrece iniciar sesión en un proveedor oficial de AIRI como alternativa. Las notas de la versión v0.15.4 describen una suscripción con un saldo Flux para él. Además dicen que la app de escritorio, la app web, la app móvil y las páginas de inicio de sesión pueden enviar informes de errores con el mismo interruptor de recopilación de datos que los análisis del producto. Qué contienen esos informes y cómo trata el proveedor oficial los chats no figura en las fuentes que leyó PromptQuorum.',
          'La documentación enumera proveedores de visión y dice que la captura de pantalla y de ventanas está disponible en la versión de escritorio. Si los combinas con un proveedor en la nube, el contenido de tu pantalla saldría de tu equipo.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**AIRI encaja con quienes quieren un personaje de IA gratuito y de código abierto que puedan configurar por sí mismos.**',
        ],
        items: [
          'Aficionados que quieren un personaje de IA con voz y un cuerpo Live2D o VRM.',
          'Desarrolladores y streamers que quieren probar integraciones con juegos o apps de mensajería y aceptan software en fase temprana.',
          'Personas que ya usan Ollama u otro proveedor y quieren una interfaz de personajes para él.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        content: [
          '**AIRI encaja mal en algunas situaciones, y varios detalles siguen sin verificar.**',
        ],
        items: [
          'No encaja: quien busque un producto terminado y estable; el README dice que el proyecto está en una fase temprana de desarrollo.',
          'Sin verificar: cualquier política de privacidad, términos de servicio o aviso legal. No se encontró ninguno en el sitio web, en la documentación ni en el repositorio.',
          'Sin verificar: la ubicación del mantenedor. Ninguna fuente leída menciona un país.',
          'Sin verificar: requisitos de hardware, uso de disco y rendimiento. No se indica ninguno.',
          'Sin verificar: la versión para navegador. La página [airi.moeru.ai](https://airi.moeru.ai) mostró «AIRI could not start» cuando PromptQuorum la consultó, por lo que no se inspeccionó.',
          'Sin verificar: el soporte móvil. La versión lista un APK de Android y el README menciona una app móvil experimental, pero la documentación describe el uso móvil a través de la versión web.',
          'Sin verificar: los precios de la suscripción y lo que incluye el proveedor oficial de AIRI. Las notas de la versión mencionan una suscripción y Flux, pero no dan precios.',
          'Sin verificar: si los instaladores están firmados.',
          'Sin verificar: calidad de voz, latencia, comportamiento de los personajes y resultados al jugar. Todas las descripciones de funciones son del propio creador.',
          'Sin verificar: si AIRI funciona totalmente sin conexión. Las fuentes no lo dicen.',
          'Sin verificar: cobertura independiente. Para esta entrada no se leyó ninguna reseña de terceros.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'AIRI frente a otras alternativas',
        itemHeadings: true,
        content: [
          '**AIRI combina chat de voz, modelos de personaje e integraciones con juegos en un solo proyecto. PromptQuorum no lo ha comparado en la práctica con las alternativas.** Las alternativas siguientes proceden de la propia lista «Similar Projects» de AIRI y de las reseñas de PromptQuorum.',
        ],
        columns: ['Herramienta', 'Dato en las fuentes'],
        rows: [
          { 'Herramienta': 'AIRI', 'Dato en las fuentes': 'MIT; navegador y escritorio; voz, Live2D/VRM, juegos' },
          { 'Herramienta': '[Open-LLM-VTuber](/es/power-local-llm/open-llm-vtuber-review)', 'Dato en las fuentes': 'Chat de voz autoalojado con Live2D; reseña de PromptQuorum' },
          { 'Herramienta': '[SillyTavern](/es/local-llms/sillytavern-review)', 'Dato en las fuentes': 'Interfaz de chat con personajes y lorebooks; reseña de PromptQuorum' },
          { 'Herramienta': '[Amica](https://github.com/semperai/amica/)', 'Dato en las fuentes': 'En la lista de AIRI: «Great at VRM, WebXR»' },
          { 'Herramienta': '[Neuro](https://github.com/kimjammer/Neuro)', 'Dato en las fuentes': 'En la lista de AIRI: una recreación de Neuro-sama' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿AIRI es gratis?',
            a: 'La app es gratuita y tiene licencia MIT. Las notas de la versión v0.15.4 describen una suscripción opcional y un saldo Flux para el proveedor oficial de AIRI, pero no se encontraron precios, así que el coste depende de si usas ese proveedor o tus propias cuentas de proveedor.',
          },
          {
            q: '¿AIRI ejecuta modelos en mi equipo?',
            a: 'No por sí mismo, según la documentación: conectas proveedores, y Ollama es uno de los proveedores de chat listados para modelos locales. El README también dice que la versión de escritorio puede usar NVIDIA CUDA y Apple Metal de forma nativa, pero no da detalles sobre qué modelos.',
          },
          {
            q: '¿Qué plataformas admite AIRI?',
            a: 'Una versión para navegador en [airi.moeru.ai](https://airi.moeru.ai) y compilaciones de escritorio para Windows, macOS y Linux, según los archivos de la versión. La documentación describe el uso móvil como acceso mediante la versión web.',
          },
          {
            q: '¿AIRI puede jugar a videojuegos?',
            a: 'El README dice que puede jugar a Minecraft y lista Factorio como trabajo en curso con una prueba de concepto. Son afirmaciones del creador que PromptQuorum no probó.',
          },
          {
            q: '¿Existe una criptomoneda oficial de AIRI?',
            a: 'No, según el README: dice que el proyecto no tiene ninguna criptomoneda ni token emitido oficialmente y pide a los usuarios que procedan con cautela.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**AIRI merece una mirada si quieres un personaje de IA gratuito y de código abierto con voz y un cuerpo Live2D o VRM y puedes aceptar software en fase temprana.**',
          'Tiene licencia MIT, instaladores para tres sistemas de escritorio además de una versión para navegador, una larga lista de proveedores seleccionables, Ollama incluido, y desarrollo activo: una versión estable el 12 de noviembre de 2026 y un commit el 18 de noviembre de 2026.',
          'Las contrapartidas son reales. El README califica el proyecto de fase temprana, la privacidad depende de los proveedores que elijas, no se encontró una política de privacidad y no se indican las necesidades de hardware ni la calidad. PromptQuorum no ha probado la app. Pruébala primero con un modelo local de Ollama o una clave de proveedor desechable, y comprueba qué servicios reciben tus datos de voz y de pantalla.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de AIRI](https://airi.moeru.ai) — punto de entrada de la app web; la página no cargó al consultarla el 18 de noviembre de 2026.',
          '[Documentación de AIRI](https://airi.moeru.ai/docs/en/) — descripción del proyecto y navegación, consultada el 18 de noviembre de 2026.',
          '[Resumen de la documentación](https://airi.moeru.ai/docs/en/docs/overview/) — versiones web y de escritorio y sus usos previstos, consultado el 18 de noviembre de 2026.',
          '[Página de versiones de la documentación](https://airi.moeru.ai/docs/en/docs/overview/versions) — canales estable, preliminar y nightly, consultada el 18 de noviembre de 2026.',
          '[Manual de escritorio](https://airi.moeru.ai/docs/en/docs/manual/tamagotchi/) — configuración de proveedores, Ollama e inicio de sesión, consultado el 18 de noviembre de 2026.',
          '[Manual web](https://airi.moeru.ai/docs/en/docs/manual/web/) — proveedores, micrófono y captura de pantalla solo en escritorio, consultado el 18 de noviembre de 2026.',
          '[Repositorio de AIRI en GitHub](https://github.com/moeru-ai/airi) — descripción del repositorio, licencia y último commit, consultado el 18 de noviembre de 2026.',
          '[README de AIRI](https://github.com/moeru-ai/airi#readme) — funciones, hoja de ruta, comandos de instalación, lista de proveedores y proyectos similares, consultado el 18 de noviembre de 2026.',
          '[LICENSE](https://github.com/moeru-ai/airi/blob/HEAD/LICENSE) — licencia MIT y línea de copyright, consultada el 18 de noviembre de 2026.',
          '[Versión v0.15.4](https://github.com/moeru-ai/airi/releases/tag/v0.15.4) — archivos de la versión y notas sobre suscripción e informes de errores, consultada el 18 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Open-LLM-VTuber](/es/power-local-llm/open-llm-vtuber-review) — un compañero de chat de voz autoalojado con avatar Live2D.',
          '[Reseña de HiWaifu](/es/power-local-llm/hiwaifu-review) — una app de compañero de IA para móviles.',
          '[Reseña de SillyTavern](/es/local-llms/sillytavern-review) — una interfaz de chat con personajes autoalojada y con lorebooks.',
          '[SillyTavern vs. Agnai vs. RisuAI](/es/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — tres interfaces de rol comparadas.',
          '[Directorio de software de LLM locales](/es/directory) — el catálogo completo de herramientas de IA locales.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Creative & Roleplay',
    heroImage: '/images/airi-review-hero-fr.webp',
    title: 'Avis sur AIRI : compagnon IA open source avec chat vocal et intégrations de jeux',
    seoTitle: 'Avis sur AIRI : compagnon IA open source avec chat vocal',
    intro:
      'AIRI (Project AIRI) est un compagnon IA gratuit sous licence MIT, qui fonctionne dans un navigateur ou comme application de bureau. Il associe le chat avec un modèle de langage de votre choix, l\'entrée et la sortie vocales, et des personnages Live2D ou VRM. Cet avis s\'appuie sur le dépôt GitHub du projet, ses versions et sa documentation, consultés le 18 novembre 2026. PromptQuorum n\'a pas testé l\'application en conditions réelles.',
    metaDescription:
      'AIRI est un compagnon IA gratuit (MIT) pour navigateur, Windows, macOS et Linux, avec chat vocal et personnages Live2D ou VRM. Confidentialité et limites.',
    twitterDescription:
      'AIRI est un compagnon IA open source avec chat vocal, personnages Live2D et VRM et intégrations de jeux facultatives. Gratuit, licence MIT, phase précoce.',
    audience:
      'Amateurs et développeurs qui cherchent un compagnon IA ou un personnage virtuel configurable eux-mêmes, avec chat vocal et intégrations facultatives de jeux et d\'applis de messagerie',
    readTime: '6 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AIRI',
    targetKeywords: [
      'avis AIRI',
      'Project AIRI',
      'compagnon IA open source',
      'AIRI Live2D VRM',
      'AIRI Ollama',
      'alternative à Neuro-sama',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**AIRI est un compagnon IA gratuit sous licence MIT, qui fonctionne dans un navigateur ou comme application de bureau pour Windows, macOS et Linux, avec chat vocal et personnages Live2D ou VRM.** Vous branchez votre propre fournisseur de modèles de langage, local ou cloud ; la destination de vos conversations dépend donc de ce choix. Le README indique lui-même que le projet en est à un stade précoce de développement.',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce qu\'AIRI et à qui s\'adresse-t-il ?',
        answer:
          'AIRI est un compagnon IA open source : un modèle de chat doté d\'une voix et d\'un personnage animé. Il convient aux amateurs et aux développeurs à l\'aise pour choisir et configurer eux-mêmes leurs fournisseurs de modèles et de voix.',
        bullets: [
          'Plateformes : version navigateur et versions de bureau pour Windows, macOS et Linux.',
          'Prix et licence : application gratuite sous licence MIT.',
          'Voix : entrée via le navigateur ou Discord, sortie via plusieurs fournisseurs.',
          'Personnages : modèles Live2D et VRM avec clignements et mouvements des yeux automatiques.',
          'Données : dépendent des fournisseurs de chat, de voix et de vision que vous connectez.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Aperçu', anchor: 'overview' },
      { label: 'Comment l\'obtenir', anchor: 'get-it' },
      { label: 'Prérequis', anchor: 'requirements' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Confidentialité et flux de données', anchor: 'privacy' },
      { label: 'À qui s\'adresse-t-il', anchor: 'who-should-use' },
      { label: 'Ce que nous n\'avons pas pu vérifier', anchor: 'who-should-not-use' },
      { label: 'Alternatives', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: 'AIRI est un compagnon IA gratuit et open source qui donne une voix et un personnage Live2D ou VRM à un modèle de chat, dans un navigateur ou comme application de bureau.',
          },
          {
            type: 'plain-terms',
            text: 'Imaginez un personnage animé qui parle et s\'appuie sur le modèle de langage que vous connectez. AIRI lui-même est gratuit ; les modèles et les voix que vous y branchez peuvent être locaux ou des services cloud payants.',
          },
        ],
        items: [
          'Vous choisissez le fournisseur de chat : API compatibles OpenAI, OpenRouter, Ollama, vLLM, Anthropic Claude, Google Gemini et bien d\'autres figurent dans la liste du README.',
          'Voies d\'installation : une version navigateur, des installateurs sur GitHub Releases, et des commandes winget, Scoop ou Homebrew Cask.',
          'Les intégrations facultatives incluent Minecraft, Discord et Telegram ; la prise en charge de Factorio est décrite comme en cours de développement.',
          'Le README indique que le projet en est encore à un stade précoce de développement ; le dernier commit date du 18 novembre 2026.',
          'PromptQuorum n\'a pas testé l\'application. Aucune politique de confidentialité n\'a été trouvée : vérifiez les conditions de chaque fournisseur avant de le connecter.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'L\'entrée vocale, la sortie vocale et la capture d\'écran peuvent envoyer de l\'audio, du texte ou le contenu de votre écran aux fournisseurs cloud que vous connectez. Vérifiez le consentement et les règles de votre lieu de travail avant de l\'utiliser avec la voix d\'autres personnes ou des documents confidentiels. Ces informations sont générales et ne constituent pas un avis juridique.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Aperçu',
        content: [
          '**AIRI est un compagnon IA open source qui donne à un modèle de chat une voix et un corps de personnage, dans un navigateur ou sur le bureau.**',
          'Le projet est publié par l\'organisation GitHub moeru-ai sous le nom de Project AIRI, et la licence MIT désigne Neko Ayaka comme titulaire du copyright (2024 à aujourd\'hui). Le README le décrit comme une recréation de la streameuse virtuelle Neuro-sama, et la description du dépôt le qualifie de « Self hosted, you-owned Grok Companion ». La version stable 0.15.4 est sortie le 12 novembre 2026, une préversion 0.15.5 a suivi le 14 novembre, et le dernier commit date du 18 novembre 2026 : le développement est donc actif et aucun avertissement de projet abandonné ne s\'applique.',
          'Selon le README, le projet s\'appuie sur des technologies web comme WebGPU, WebAudio et WebSocket. La version navigateur sert à montrer ce que les navigateurs savent faire, tandis que la version de bureau peut, selon le README, utiliser nativement NVIDIA CUDA et Apple Metal. La documentation décrit la version de bureau comme adaptée aux usages plus avancés, tels que le streaming VTuber, le contrôle de l\'ordinateur et l\'accès à des LLM locaux.',
          'Le README énumère ce que le projet sait faire : jouer à Minecraft, discuter sur Discord et Telegram, écouter via l\'audio du navigateur ou de Discord, parler via plusieurs fournisseurs vocaux et animer des modèles Live2D et VRM. La prise en charge de Factorio est marquée comme en cours, et des éléments de la feuille de route, comme un système de mémoire, restent à cocher.',
          'Ces descriptions viennent du README et de la documentation du créateur. PromptQuorum n\'a pas exécuté l\'application et n\'a évalué ni la qualité vocale, ni la latence, ni le comportement des personnages, ni la consommation de ressources.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Comment l\'obtenir',
        content: [
          '**Vous pouvez ouvrir AIRI dans un navigateur ou installer l\'application de bureau depuis GitHub Releases, winget, Scoop ou Homebrew Cask.**',
          'Le README affiche des boutons de téléchargement pour Windows, macOS et Linux. La version stable 0.15.4 propose un installateur Windows (.exe), des fichiers .dmg macOS pour Apple silicon et Intel, ainsi que des paquets Linux AppImage, .deb, .rpm, .flatpak et .pacman. La version contient aussi un APK Android, mais ni le README ni la documentation ne décrivent Android comme plateforme prise en charge ; il n\'est donc pas listé ici. La documentation propose une préversion et des builds nightly expérimentaux comme canaux distincts.',
        ],
        columns: ['Plateforme', 'Comment l\'obtenir'],
        rows: [
          { 'Plateforme': '[Windows](https://github.com/moeru-ai/airi/releases/latest)', 'Comment l\'obtenir': 'Installateur (.exe) ou winget install MoeruAI.AIRI' },
          { 'Plateforme': '[macOS](https://github.com/moeru-ai/airi/releases/latest)', 'Comment l\'obtenir': 'Image disque (.dmg) ou brew install --cask airi' },
          { 'Plateforme': '[Linux](https://github.com/moeru-ai/airi/releases/latest)', 'Comment l\'obtenir': 'AppImage, .deb, .rpm, .flatpak ou .pacman' },
          { 'Plateforme': '[Navigateur](https://airi.moeru.ai)', 'Comment l\'obtenir': 'Ouvrir la version web, sans installation' },
          { 'Plateforme': '[Site web](https://airi.moeru.ai/docs/en/)', 'Comment l\'obtenir': 'Site officiel et documentation' },
        ],
        note: 'Les sources ne disent pas si les installateurs sont signés ; attendez-vous à d\'éventuels avertissements du système d\'exploitation et examinez-les avant de continuer.',
      },
      requirements: {
        id: 'requirements',
        title: 'Prérequis',
        content: [
          '**AIRI n\'indique aucune exigence matérielle : ce qu\'il vous faut dépend des fournisseurs et des modèles que vous choisissez.**',
          'Avec des fournisseurs cloud, l\'essentiel du travail se fait à distance. Faire tourner un modèle local via un outil comme Ollama demande un matériel adapté à ce modèle, ce qu\'AIRI ne maîtrise pas.',
        ],
        columns: ['Élément', 'Valeur indiquée'],
        rows: [
          { 'Élément': 'Système d\'exploitation', 'Valeur indiquée': 'Windows, macOS, Linux (fichiers de version)' },
          { 'Élément': 'Navigateur', 'Valeur indiquée': 'Version web disponible' },
          { 'Élément': 'RAM / VRAM', 'Valeur indiquée': 'Aucune exigence indiquée' },
          { 'Élément': 'GPU', 'Valeur indiquée': 'Facultatif ; le README mentionne CUDA et Metal' },
          { 'Élément': 'Disque', 'Valeur indiquée': 'Aucun chiffre indiqué' },
          { 'Élément': 'Microphone', 'Valeur indiquée': 'Requis pour l\'entrée vocale (docs)' },
        ],
        note: 'La capture d\'écran et de fenêtre n\'est disponible que dans la version de bureau, selon le manuel web.',
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**Le cœur d\'AIRI est un modèle de chat doté d\'une voix et d\'un corps de personnage, avec des intégrations facultatives.** Tous les points ci-dessous sont des affirmations du créateur tirées du README et de la documentation.',
        ],
        items: [
          'Chat avec un modèle d\'un fournisseur de votre choix, notamment API compatibles OpenAI, OpenRouter, Ollama, vLLM, Anthropic Claude, Google Gemini et DeepSeek, parmi d\'autres de la liste du README.',
          'Entrée vocale depuis le navigateur ou Discord, avec reconnaissance vocale et détection de parole côté client.',
          'Sortie vocale via plusieurs fournisseurs, dont ElevenLabs, Microsoft/Azure Speech, synthèse vocale compatible OpenAI, Alibaba Cloud Model Studio et Kokoro TTS en local.',
          'Modèles de personnages Live2D et VRM avec clignements, suivi du regard et mouvements des yeux au repos automatiques.',
          'Jouer à Minecraft ; Factorio est décrit comme en cours de développement, avec une preuve de concept.',
          'Bots de chat pour Discord et Telegram.',
          'Capture d\'écran et de fenêtre pour la vision dans la version de bureau (docs).',
          'Stockage de la mémoire dans le navigateur avec DuckDB WASM ou pglite ; la feuille de route classe encore comme inachevés un système de mémoire et l\'inférence locale pure dans le navigateur.',
          'Un système de plugins que le README décrit comme en cours de développement.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**La destination de vos données dépend des fournisseurs que vous connectez, et aucune politique de confidentialité n\'a été trouvée.**',
          'AIRI n\'exécute pas un modèle unique. Selon la documentation, vous ajoutez un fournisseur de chat comme OpenRouter, un service compatible OpenAI, Ollama ou Google Gemini avec une clé d\'API ou une adresse de service locale, ainsi que des fournisseurs distincts pour la voix, la transcription et la vision. S\'il s\'agit de services cloud, votre texte et votre audio peuvent leur parvenir selon leurs propres conditions ; avec Ollama sur votre machine, le modèle s\'exécute chez vous.',
          'La documentation propose aussi, en alternative, de se connecter à un fournisseur AIRI officiel. Les notes de version v0.15.4 décrivent pour lui un abonnement avec un solde Flux. Elles disent aussi que l\'application de bureau, l\'application web, l\'application mobile et les pages de connexion peuvent envoyer des rapports d\'erreurs, avec le même interrupteur de collecte de données que l\'analyse du produit. Le contenu de ces rapports et la façon dont le fournisseur officiel traite les conversations ne figurent pas dans les sources lues par PromptQuorum.',
          'La documentation liste des fournisseurs de vision et indique que la capture d\'écran et de fenêtre est disponible dans la version de bureau. Si vous les combinez avec un fournisseur cloud, le contenu de votre écran quitterait votre ordinateur.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui s\'adresse-t-il',
        content: [
          '**AIRI convient à ceux qui veulent un personnage IA gratuit et open source qu\'ils peuvent configurer eux-mêmes.**',
        ],
        items: [
          'Amateurs qui veulent un personnage IA avec voix et corps Live2D ou VRM.',
          'Développeurs et streamers qui veulent essayer des intégrations de jeux ou d\'applis de messagerie et acceptent un logiciel à un stade précoce.',
          'Personnes qui utilisent déjà Ollama ou un autre fournisseur et veulent une interface de personnage pour celui-ci.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        content: [
          '**AIRI convient mal dans certaines situations, et plusieurs détails restent non vérifiés.**',
        ],
        items: [
          'Ne convient pas : ceux qui veulent un produit fini et stable ; le README indique que le projet en est à un stade précoce de développement.',
          'Non vérifié : toute politique de confidentialité, conditions d\'utilisation ou mentions légales. Aucune n\'a été trouvée sur le site, dans la documentation ou dans le dépôt.',
          'Non vérifié : la localisation du mainteneur. Aucune source lue ne mentionne de pays.',
          'Non vérifié : exigences matérielles, espace disque et performances. Aucune n\'est indiquée.',
          'Non vérifié : la version navigateur. La page [airi.moeru.ai](https://airi.moeru.ai) affichait « AIRI could not start » lorsque PromptQuorum l\'a consultée ; elle n\'a donc pas été examinée.',
          'Non vérifié : la prise en charge mobile. La version liste un APK Android et le README mentionne une application mobile expérimentale, mais la documentation décrit l\'usage mobile via la version web.',
          'Non vérifié : les tarifs de l\'abonnement et ce qu\'inclut le fournisseur AIRI officiel. Les notes de version mentionnent un abonnement et Flux, sans donner de prix.',
          'Non vérifié : si les installateurs sont signés.',
          'Non vérifié : qualité vocale, latence, comportement des personnages et résultats en jeu. Toutes les descriptions de fonctionnalités émanent du créateur.',
          'Non vérifié : si AIRI fonctionne entièrement hors ligne. Les sources ne le disent pas.',
          'Non vérifié : couverture indépendante. Aucun avis de tiers n\'a été lu pour cette fiche.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'AIRI face aux alternatives',
        itemHeadings: true,
        content: [
          '**AIRI réunit chat vocal, modèles de personnages et intégrations de jeux dans un seul projet. PromptQuorum ne l\'a pas comparé aux alternatives en conditions réelles.** Les alternatives ci-dessous viennent de la liste « Similar Projects » d\'AIRI et des avis de PromptQuorum.',
        ],
        columns: ['Outil', 'Mentionné dans les sources'],
        rows: [
          { 'Outil': 'AIRI', 'Mentionné dans les sources': 'MIT ; navigateur et bureau ; voix, Live2D/VRM, jeux' },
          { 'Outil': '[Open-LLM-VTuber](/fr/power-local-llm/open-llm-vtuber-review)', 'Mentionné dans les sources': 'Chat vocal auto-hébergé avec Live2D ; avis PromptQuorum' },
          { 'Outil': '[SillyTavern](/fr/local-llms/sillytavern-review)', 'Mentionné dans les sources': 'Interface de chat de personnages avec lorebooks ; avis PromptQuorum' },
          { 'Outil': '[Amica](https://github.com/semperai/amica/)', 'Mentionné dans les sources': 'Dans la liste d\'AIRI : « Great at VRM, WebXR »' },
          { 'Outil': '[Neuro](https://github.com/kimjammer/Neuro)', 'Mentionné dans les sources': 'Dans la liste d\'AIRI : une recréation de Neuro-sama' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'AIRI est-il gratuit ?',
            a: 'L\'application est gratuite et sous licence MIT. Les notes de version v0.15.4 décrivent un abonnement facultatif et un solde Flux pour le fournisseur AIRI officiel, mais aucun prix n\'a été trouvé ; le coût dépend donc de l\'usage de ce fournisseur ou de vos propres comptes de fournisseurs.',
          },
          {
            q: 'AIRI exécute-t-il des modèles sur mon ordinateur ?',
            a: 'Pas de lui-même, selon la documentation : vous connectez des fournisseurs, et Ollama figure parmi les fournisseurs de chat listés pour les modèles locaux. Le README dit aussi que la version de bureau peut utiliser nativement NVIDIA CUDA et Apple Metal, sans préciser quels modèles.',
          },
          {
            q: 'Quelles plateformes AIRI prend-il en charge ?',
            a: 'Une version navigateur sur [airi.moeru.ai](https://airi.moeru.ai) et des versions de bureau pour Windows, macOS et Linux, selon les fichiers de version. La documentation décrit l\'usage mobile comme passant par la version web.',
          },
          {
            q: 'AIRI peut-il jouer à des jeux ?',
            a: 'Le README dit qu\'il peut jouer à Minecraft et indique Factorio comme en cours de développement avec une preuve de concept. Ce sont des affirmations du créateur que PromptQuorum n\'a pas testées.',
          },
          {
            q: 'Existe-t-il une cryptomonnaie officielle d\'AIRI ?',
            a: 'Non, selon le README : il indique que le projet n\'a aucune cryptomonnaie ni aucun jeton officiellement émis et invite les utilisateurs à la prudence.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**AIRI mérite un coup d\'œil si vous voulez un personnage IA gratuit et open source avec voix et corps Live2D ou VRM et pouvez accepter un logiciel à un stade précoce.**',
          'Il offre une licence MIT, des installateurs pour trois systèmes de bureau en plus d\'une version navigateur, une longue liste de fournisseurs sélectionnables dont Ollama, et un développement actif : une version stable le 12 novembre 2026 et un commit le 18 novembre 2026.',
          'Les compromis sont réels. Le README qualifie le projet de précoce, la confidentialité dépend des fournisseurs que vous choisissez, aucune politique de confidentialité n\'a été trouvée, et les besoins matériels comme la qualité ne sont pas indiqués. PromptQuorum n\'a pas testé l\'application. Essayez-la d\'abord avec un modèle Ollama local ou une clé de fournisseur jetable, et vérifiez quels services reçoivent vos données vocales et d\'écran.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site web d\'AIRI](https://airi.moeru.ai) — point d\'entrée de l\'application web ; la page ne s\'est pas chargée lors de la consultation du 18 novembre 2026.',
          '[Documentation d\'AIRI](https://airi.moeru.ai/docs/en/) — description du projet et navigation, consultée le 18 novembre 2026.',
          '[Aperçu de la documentation](https://airi.moeru.ai/docs/en/docs/overview/) — versions web et de bureau et usages prévus, consulté le 18 novembre 2026.',
          '[Page des versions de la documentation](https://airi.moeru.ai/docs/en/docs/overview/versions) — canaux stable, préversion et nightly, consultée le 18 novembre 2026.',
          '[Manuel de bureau](https://airi.moeru.ai/docs/en/docs/manual/tamagotchi/) — configuration des fournisseurs, Ollama et connexion, consulté le 18 novembre 2026.',
          '[Manuel web](https://airi.moeru.ai/docs/en/docs/manual/web/) — fournisseurs, microphone et capture d\'écran réservée au bureau, consulté le 18 novembre 2026.',
          '[Dépôt GitHub d\'AIRI](https://github.com/moeru-ai/airi) — description du dépôt, licence et dernier commit, consulté le 18 novembre 2026.',
          '[README d\'AIRI](https://github.com/moeru-ai/airi#readme) — fonctionnalités, feuille de route, commandes d\'installation, liste de fournisseurs et projets similaires, consulté le 18 novembre 2026.',
          '[LICENSE](https://github.com/moeru-ai/airi/blob/HEAD/LICENSE) — licence MIT et ligne de copyright, consultée le 18 novembre 2026.',
          '[Version v0.15.4](https://github.com/moeru-ai/airi/releases/tag/v0.15.4) — fichiers de version et notes sur l\'abonnement et les rapports d\'erreurs, consultée le 18 novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Avis sur Open-LLM-VTuber](/fr/power-local-llm/open-llm-vtuber-review) — un compagnon de chat vocal auto-hébergé avec avatar Live2D.',
          '[Avis sur HiWaifu](/fr/power-local-llm/hiwaifu-review) — une application de compagnon IA pour téléphones.',
          '[Avis sur SillyTavern](/fr/local-llms/sillytavern-review) — une interface de chat de personnages auto-hébergée avec lorebooks.',
          '[SillyTavern vs. Agnai vs. RisuAI](/fr/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — trois interfaces de jeu de rôle comparées.',
          '[Répertoire des logiciels de LLM locaux](/fr/directory) — le catalogue complet des outils d\'IA locale.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Creative & Roleplay',
    heroImage: '/images/airi-review-hero-ja.webp',
    title: 'AIRIレビュー：音声チャットとゲーム連携を備えたオープンソースAIコンパニオン',
    seoTitle: 'AIRIレビュー：音声対応オープンソースAIコンパニオン',
    intro:
      'AIRI（Project AIRI）は、ブラウザまたはデスクトップアプリで動く、MITライセンスの無料AIコンパニオンです。お好みの言語モデルとのチャット、音声入力と音声出力、Live2DまたはVRMのキャラクターを組み合わせています。このレビューは、プロジェクトのGitHubリポジトリ、リリース、ドキュメントに基づいており、2026年11月18日に確認しました。PromptQuorumはこのアプリを実際には試していません。',
    metaDescription:
      'AIRIは、ブラウザ・Windows・macOS・Linuxで使えるMITライセンスの無料AIコンパニオンです。音声チャットとLive2D/VRMキャラクターに対応。プライバシーと制限も解説します。',
    twitterDescription:
      'AIRIは、音声チャット、Live2D/VRMキャラクター、ゲーム連携（任意）を備えたオープンソースのAIコンパニオンです。無料、MITライセンス、開発初期段階。',
    audience:
      '音声チャットやゲーム・チャットアプリとの任意の連携を備え、自分で設定できるAIコンパニオンやバーチャルキャラクターを探している愛好家と開発者',
    readTime: '6分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AIRI',
    targetKeywords: [
      'AIRI レビュー',
      'Project AIRI',
      'AIコンパニオン オープンソース',
      'AIRI Live2D VRM',
      'AIRI Ollama',
      'Neuro-sama 代替',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**AIRIは、ブラウザまたはWindows・macOS・Linux向けデスクトップアプリで動くMITライセンスの無料AIコンパニオンで、音声チャットとLive2DまたはVRMのキャラクターを備えています。**言語モデルのプロバイダー（ローカルまたはクラウド）はご自身で接続するため、チャットの送信先はその選択次第です。READMEには、プロジェクトが開発の初期段階にあると書かれています。',
    quickAnswerTop: {
      ja: {
        question: 'AIRIとは何で、誰向けですか？',
        answer:
          'AIRIは、声とアニメーションするキャラクターを持つチャットモデル、つまりオープンソースのAIコンパニオンです。モデルや音声のプロバイダーを自分で選んで設定することに抵抗がない愛好家や開発者に向いています。',
        bullets: [
          'プラットフォーム：ブラウザ版と、Windows・macOS・Linux向けデスクトップビルド。',
          '価格とライセンス：MITライセンスの無料アプリ。',
          '音声：ブラウザまたはDiscordからの音声入力、複数のプロバイダーによる音声出力。',
          'キャラクター：自動まばたきと視線移動に対応したLive2D・VRMモデル。',
          'データ：接続するチャット・音声・ビジョンのプロバイダー次第。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: 'tldr' },
      { label: '概要', anchor: 'overview' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '動作要件', anchor: 'requirements' },
      { label: '機能', anchor: 'features' },
      { label: 'プライバシーとデータの流れ', anchor: 'privacy' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかったこと', anchor: 'who-should-not-use' },
      { label: '代替ツール', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: 'AIRIは、チャットモデルに声とLive2DまたはVRMのキャラクターを与える、無料のオープンソースAIコンパニオンで、ブラウザでもデスクトップアプリでも使えます。',
          },
          {
            type: 'plain-terms',
            text: '接続した言語モデルの上に乗る、話して動くキャラクターだと考えてください。AIRI自体は無料ですが、組み込むモデルや音声はローカルのものも有料クラウドサービスもあり得ます。',
          },
        ],
        items: [
          'チャットのプロバイダーは自分で選びます。READMEには、OpenAI互換API、OpenRouter、Ollama、vLLM、Anthropic Claude、Google Geminiなど多数が載っています。',
          '入手方法：ブラウザ版、GitHub Releasesのインストーラー、winget・Scoop・Homebrew Caskのコマンド。',
          '任意の連携にはMinecraft、Discord、Telegramがあり、Factorioへの対応は開発中とされています。',
          'READMEはプロジェクトがまだ開発の初期段階だと述べています。最新のコミットは2026年11月18日付です。',
          'PromptQuorumはこのアプリを試していません。プライバシーポリシーは見つからなかったため、接続する前に各プロバイダーの規約を確認してください。',
        ],
        callouts: [
          {
            type: 'note',
            text: '音声入力、音声出力、画面キャプチャは、接続したクラウドのプロバイダーに音声・テキスト・画面の内容を送る可能性があります。他の人の声や機密性の高い資料と一緒に使う前に、同意と職場のルールを確認してください。これは一般的な情報であり、法的助言ではありません。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**AIRIは、チャットモデルに声とキャラクターの体を与えるオープンソースのAIコンパニオンで、ブラウザでもデスクトップでも使えます。**',
          'このプロジェクトはGitHub組織moeru-aiがProject AIRIとして公開しており、MITライセンスはNeko Ayaka氏を著作権者（2024年〜現在）としています。READMEはバーチャル配信者Neuro-samaの再現と説明し、リポジトリの説明文は「Self hosted, you-owned Grok Companion」と呼んでいます。安定版0.15.4は2026年11月12日に公開され、プレリリース版0.15.5が11月14日に続き、最新のコミットは2026年11月18日付です。開発は活発で、放置プロジェクトの警告は当てはまりません。',
          'READMEによると、このプロジェクトはWebGPU、WebAudio、WebSocketなどのWeb技術を使っています。ブラウザ版はブラウザで何ができるかを示すためのもので、デスクトップ版はREADMEによればNVIDIA CUDAとApple Metalをネイティブに使えます。ドキュメントは、デスクトップ版をVTuber配信、コンピューター操作、ローカルLLMへのアクセスといった高度な用途に向くと説明しています。',
          'READMEは、このプロジェクトができることとして、Minecraftのプレイ、DiscordとTelegramでのチャット、ブラウザまたはDiscordの音声による聞き取り、複数の音声プロバイダーによる発話、Live2DとVRMモデルのアニメーションを挙げています。Factorioへの対応は開発中と記され、記憶システムなどのロードマップ項目は未完了です。',
          'これらの説明は、開発元のREADMEとドキュメントによるものです。PromptQuorumはアプリを実行しておらず、音声品質、遅延、キャラクターの挙動、リソース使用量は評価していません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**AIRIはブラウザで開くか、GitHub Releases、winget、Scoop、Homebrew Caskからデスクトップアプリをインストールして使えます。**',
          'READMEにはWindows、macOS、Linux向けのダウンロードボタンがあります。安定版0.15.4には、Windowsインストーラー（.exe）、Apple siliconとIntel向けのmacOS用.dmg、LinuxのAppImage、.deb、.rpm、.flatpak、.pacmanパッケージが含まれています。リリースにはAndroid用APKもありますが、READMEにもドキュメントにもAndroidを対応プラットフォームとする記述はないため、ここには挙げていません。ドキュメントは、プレリリース版と実験的なナイトリービルドを別のチャンネルとして案内しています。',
        ],
        columns: ['プラットフォーム', '入手方法'],
        rows: [
          { 'プラットフォーム': '[Windows](https://github.com/moeru-ai/airi/releases/latest)', '入手方法': 'インストーラー（.exe）またはwinget install MoeruAI.AIRI' },
          { 'プラットフォーム': '[macOS](https://github.com/moeru-ai/airi/releases/latest)', '入手方法': 'ディスクイメージ（.dmg）またはbrew install --cask airi' },
          { 'プラットフォーム': '[Linux](https://github.com/moeru-ai/airi/releases/latest)', '入手方法': 'AppImage、.deb、.rpm、.flatpak、.pacman' },
          { 'プラットフォーム': '[ブラウザ](https://airi.moeru.ai)', '入手方法': 'Web版を開くだけ、インストール不要' },
          { 'プラットフォーム': '[公式サイト](https://airi.moeru.ai/docs/en/)', '入手方法': '公式サイトとドキュメント' },
        ],
        note: 'インストーラーにコード署名があるかどうかは情報源に記載がないため、OSの警告が出る可能性があります。進む前に内容を確認してください。',
      },
      requirements: {
        id: 'requirements',
        title: '動作要件',
        content: [
          '**AIRIはハードウェア要件を示していないため、必要なスペックは選ぶプロバイダーとモデル次第です。**',
          'クラウドのプロバイダーを使う場合、処理の大半は遠隔で行われます。Ollamaなどでローカルモデルを動かす場合は、そのモデルに見合うハードウェアが必要で、これはAIRIでは制御できません。',
        ],
        columns: ['項目', '記載されている内容'],
        rows: [
          { '項目': 'OS', '記載されている内容': 'Windows、macOS、Linux（リリースファイル）' },
          { '項目': 'ブラウザ', '記載されている内容': 'Web版あり' },
          { '項目': 'RAM / VRAM', '記載されている内容': '要件の記載なし' },
          { '項目': 'GPU', '記載されている内容': '任意。READMEはCUDAとMetalに言及' },
          { '項目': 'ディスク', '記載されている内容': '数値の記載なし' },
          { '項目': 'マイク', '記載されている内容': '音声入力に必要（ドキュメント）' },
        ],
        note: '画面とウィンドウのキャプチャは、Webマニュアルによればデスクトップ版のみで利用できます。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**AIRIの中核は、声とキャラクターの体を持つチャットモデルと、任意の連携です。**以下はすべて、READMEとドキュメントにある開発元の説明です。',
        ],
        items: [
          '選んだプロバイダーのモデルとのチャット。OpenAI互換API、OpenRouter、Ollama、vLLM、Anthropic Claude、Google Gemini、DeepSeekなど、READMEの一覧に多数。',
          'ブラウザまたはDiscordからの音声入力。クライアント側の音声認識と発話検出に対応。',
          '複数のプロバイダーによる音声出力。ElevenLabs、Microsoft/Azure Speech、OpenAI互換の音声合成、Alibaba Cloud Model Studio、ローカルのKokoro TTSなど。',
          '自動まばたき、視線追従、待機中の目の動きに対応したLive2DとVRMのキャラクターモデル。',
          'Minecraftのプレイ。Factorioは実証実験の段階で開発中と説明されています。',
          'DiscordとTelegram向けのチャットボット。',
          'デスクトップ版でのビジョン用の画面・ウィンドウキャプチャ（ドキュメント）。',
          'DuckDB WASMまたはpgliteによるブラウザ内のメモリ保存。記憶システムと完全なブラウザ内ローカル推論は、ロードマップ上ではまだ未完成です。',
          'READMEが開発中と説明しているプラグインシステム。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**データの行き先は接続するプロバイダー次第で、プライバシーポリシーは見つかりませんでした。**',
          'AIRIは固定の単一モデルを動かすわけではありません。ドキュメントによれば、OpenRouter、OpenAI互換サービス、Ollama、Google Geminiなどのチャットプロバイダーを、APIキーまたはローカルのサービスアドレスとともに追加し、音声、文字起こし、ビジョンには別のプロバイダーを設定します。それらがクラウドサービスなら、テキストや音声は各社の規約のもとで送られる可能性があります。お使いのマシン上のOllamaなら、モデルはそこで動きます。',
          'ドキュメントは、代替として公式のAIRIプロバイダーへのサインインも案内しています。v0.15.4のリリースノートには、そのためのFluxという残高を伴うサブスクリプションが記載されています。またデスクトップアプリ、Webアプリ、モバイルアプリ、サインインページが、製品分析と同じデータ収集スイッチのもとでエラーレポートを送信できるとも書かれています。レポートの内容や、公式プロバイダーがチャットをどう扱うかは、PromptQuorumが読んだ情報源には記載がありません。',
          'ドキュメントはビジョンのプロバイダーを挙げ、画面とウィンドウのキャプチャがデスクトップ版で使えるとしています。これらをクラウドのプロバイダーと組み合わせると、画面の内容がお使いのコンピューターの外に出ることになります。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**AIRIは、自分で設定できる無料のオープンソースAIキャラクターが欲しい人に向いています。**',
        ],
        items: [
          '声とLive2DまたはVRMの体を持つAIキャラクターが欲しい愛好家。',
          'ゲームやチャットアプリとの連携を試したく、開発初期のソフトウェアを許容できる開発者や配信者。',
          'すでにOllamaなどのプロバイダーを使っていて、そのためのキャラクター用フロントエンドが欲しい人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        content: [
          '**AIRIが向かない状況もあり、いくつかの詳細は未確認です。**',
        ],
        items: [
          '向かない人：完成された安定した製品を求める人。READMEはプロジェクトが開発の初期段階にあると述べています。',
          '未確認：プライバシーポリシー、利用規約、運営者情報。公式サイト、ドキュメント、リポジトリのいずれにも見つかりませんでした。',
          '未確認：メンテナーの所在地。読んだ情報源には国の記載がありません。',
          '未確認：ハードウェア要件、ディスク使用量、性能。いずれも記載がありません。',
          '未確認：ブラウザ版。PromptQuorumが取得したとき、[airi.moeru.ai](https://airi.moeru.ai)のページには「AIRI could not start」と表示されたため、確認していません。',
          '未確認：モバイル対応。リリースにはAndroid用APKがあり、READMEは実験的なモバイルアプリに触れていますが、ドキュメントはモバイルでの利用をWeb版経由としています。',
          '未確認：サブスクリプションの料金と、公式AIRIプロバイダーに含まれる内容。リリースノートはサブスクリプションとFluxに触れていますが、価格はありません。',
          '未確認：インストーラーにコード署名があるかどうか。',
          '未確認：音声品質、遅延、キャラクターの挙動、ゲームプレイの結果。機能の説明はすべて開発元によるものです。',
          '未確認：AIRIが完全にオフラインで動くかどうか。情報源には記載がありません。',
          '未確認：第三者による報道。この項目のために第三者のレビューは読んでいません。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'AIRIと代替ツールの比較',
        itemHeadings: true,
        content: [
          '**AIRIは、音声チャット、キャラクターモデル、ゲーム連携を1つのプロジェクトにまとめています。PromptQuorumは代替ツールとの実機比較をしていません。**以下の代替ツールは、AIRI自身の「Similar Projects」一覧とPromptQuorumのレビューによるものです。',
        ],
        columns: ['ツール', '情報源での記載'],
        rows: [
          { 'ツール': 'AIRI', '情報源での記載': 'MIT、ブラウザとデスクトップ、音声・Live2D/VRM・ゲーム' },
          { 'ツール': '[Open-LLM-VTuber](/ja/power-local-llm/open-llm-vtuber-review)', '情報源での記載': 'Live2D付きのセルフホスト音声チャット。PromptQuorumのレビューあり' },
          { 'ツール': '[SillyTavern](/ja/local-llms/sillytavern-review)', '情報源での記載': 'ロアブック付きのキャラクターチャット用フロントエンド。レビューあり' },
          { 'ツール': '[Amica](https://github.com/semperai/amica/)', '情報源での記載': 'AIRIの一覧：「Great at VRM, WebXR」' },
          { 'ツール': '[Neuro](https://github.com/kimjammer/Neuro)', '情報源での記載': 'AIRIの一覧：Neuro-samaの再現' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'AIRIは無料ですか？',
            a: 'アプリは無料で、MITライセンスです。v0.15.4のリリースノートには、公式AIRIプロバイダー向けの任意のサブスクリプションとFlux残高が記載されていますが、価格は見つかりませんでした。費用は、そのプロバイダーを使うか、ご自身のプロバイダーのアカウントを使うかによります。',
          },
          {
            q: 'AIRIは自分のコンピューターでモデルを動かしますか？',
            a: 'ドキュメントによれば、AIRI自体は動かしません。プロバイダーを接続する仕組みで、ローカルモデル用のチャットプロバイダーとしてOllamaが挙げられています。READMEはデスクトップ版がNVIDIA CUDAとApple Metalをネイティブに使えるとも述べていますが、どのモデルかは書かれていません。',
          },
          {
            q: 'AIRIはどのプラットフォームに対応していますか？',
            a: '[airi.moeru.ai](https://airi.moeru.ai)のブラウザ版と、リリースファイルによればWindows、macOS、Linux向けのデスクトップビルドです。ドキュメントは、モバイルでの利用をWeb版経由としています。',
          },
          {
            q: 'AIRIはゲームをプレイできますか？',
            a: 'READMEはMinecraftをプレイできると述べ、Factorioは実証実験の段階で開発中としています。これらは開発元の説明で、PromptQuorumは試していません。',
          },
          {
            q: 'AIRIの公式な暗号資産はありますか？',
            a: 'READMEによれば、ありません。プロジェクトに公式に発行された暗号資産やトークンはないとして、利用者に注意を促しています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**声とLive2DまたはVRMの体を持つ、無料のオープンソースAIキャラクターが欲しく、開発初期のソフトウェアを許容できるなら、AIRIは試す価値があります。**',
          'MITライセンス、3つのデスクトップOS向けインストーラーとブラウザ版、Ollamaを含む選択可能なプロバイダーの長い一覧、そして活発な開発（2026年11月12日の安定版と11月18日のコミット）が揃っています。',
          'トレードオフは現実的です。READMEはプロジェクトを初期段階としており、プライバシーは選ぶプロバイダー次第で、プライバシーポリシーは見つからず、必要なハードウェアや品質も不明です。PromptQuorumはアプリを試していません。まずはローカルのOllamaモデルか使い捨てのプロバイダーキーで試し、音声や画面のデータをどのサービスが受け取るかを確認してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[AIRI公式サイト](https://airi.moeru.ai) — Webアプリの入口。2026年11月18日の確認時にはページが読み込まれませんでした。',
          '[AIRIドキュメント](https://airi.moeru.ai/docs/en/) — プロジェクトの説明とナビゲーション。2026年11月18日に確認。',
          '[ドキュメント概要](https://airi.moeru.ai/docs/en/docs/overview/) — Web版とデスクトップ版の想定用途。2026年11月18日に確認。',
          '[ドキュメントのバージョンページ](https://airi.moeru.ai/docs/en/docs/overview/versions) — 安定版、プレリリース、ナイトリーの各チャンネル。2026年11月18日に確認。',
          '[デスクトップマニュアル](https://airi.moeru.ai/docs/en/docs/manual/tamagotchi/) — プロバイダー設定、Ollama、サインイン。2026年11月18日に確認。',
          '[Webマニュアル](https://airi.moeru.ai/docs/en/docs/manual/web/) — プロバイダー、マイク、デスクトップ限定の画面キャプチャ。2026年11月18日に確認。',
          '[AIRI GitHubリポジトリ](https://github.com/moeru-ai/airi) — リポジトリの説明、ライセンス、最新コミット。2026年11月18日に確認。',
          '[AIRI README](https://github.com/moeru-ai/airi#readme) — 機能、ロードマップ、インストールコマンド、プロバイダー一覧、類似プロジェクト。2026年11月18日に確認。',
          '[LICENSE](https://github.com/moeru-ai/airi/blob/HEAD/LICENSE) — MITライセンスと著作権表示。2026年11月18日に確認。',
          '[リリースv0.15.4](https://github.com/moeru-ai/airi/releases/tag/v0.15.4) — リリースファイル、サブスクリプションとエラーレポートに関する記載。2026年11月18日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Open-LLM-VTuberレビュー](/ja/power-local-llm/open-llm-vtuber-review) — Live2Dアバター付きのセルフホスト音声チャットコンパニオン。',
          '[HiWaifuレビュー](/ja/power-local-llm/hiwaifu-review) — スマートフォン向けのAIコンパニオンアプリ。',
          '[SillyTavernレビュー](/ja/local-llms/sillytavern-review) — ロアブック付きのセルフホスト型キャラクターチャット用フロントエンド。',
          '[SillyTavern vs. Agnai vs. RisuAI](/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 3つのロールプレイ用フロントエンドを比較。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Creative & Roleplay',
    heroImage: '/images/airi-review-hero-pt.webp',
    title: 'Análise do AIRI: companheiro de IA de código aberto com chat de voz e integrações com jogos',
    seoTitle: 'Análise do AIRI: companheiro de IA de código aberto',
    intro:
      'O AIRI (Project AIRI) é um companheiro de IA gratuito, com licença MIT, que roda no navegador ou como app de desktop. Ele combina chat com um modelo de linguagem à sua escolha, entrada e saída de voz e personagens Live2D ou VRM. Esta análise se baseia no repositório do projeto no GitHub, nas versões lançadas e na documentação, consultados em 18 de novembro de 2026. A PromptQuorum não testou o app na prática.',
    metaDescription:
      'O AIRI é um companheiro de IA gratuito (MIT) para navegador, Windows, macOS e Linux, com chat de voz e personagens Live2D ou VRM. Privacidade e limites.',
    twitterDescription:
      'O AIRI é um companheiro de IA de código aberto com chat de voz, personagens Live2D e VRM e integrações opcionais com jogos. Gratuito, licença MIT, fase inicial.',
    audience:
      'Entusiastas e desenvolvedores que procuram um companheiro de IA ou personagem virtual configurável por conta própria, com chat de voz e integrações opcionais com jogos e apps de mensagens',
    readTime: '6 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AIRI',
    targetKeywords: [
      'análise do AIRI',
      'Project AIRI',
      'companheiro de IA código aberto',
      'AIRI Live2D VRM',
      'AIRI Ollama',
      'alternativa ao Neuro-sama',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O AIRI é um companheiro de IA gratuito, com licença MIT, que roda no navegador ou como app de desktop para Windows, macOS e Linux, com chat de voz e personagens Live2D ou VRM.** Você conecta o seu próprio provedor de modelos de linguagem, local ou na nuvem, então o destino das suas conversas depende dessa escolha. O próprio README diz que o projeto está em fase inicial de desenvolvimento.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o AIRI e para quem ele serve?',
        answer:
          'O AIRI é um companheiro de IA de código aberto: um modelo de chat com voz e um personagem animado. Serve para entusiastas e desenvolvedores que se sentem à vontade para escolher e configurar seus próprios provedores de modelo e de voz.',
        bullets: [
          'Plataformas: versão para navegador e builds de desktop para Windows, macOS e Linux.',
          'Preço e licença: app gratuito com licença MIT.',
          'Voz: entrada pelo navegador ou pelo Discord, saída por vários provedores.',
          'Personagens: modelos Live2D e VRM com piscadas e movimento dos olhos automáticos.',
          'Dados: dependem dos provedores de chat, voz e visão que você conectar.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: 'tldr' },
      { label: 'Visão geral', anchor: 'overview' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Privacidade e fluxo de dados', anchor: 'privacy' },
      { label: 'Para quem serve', anchor: 'who-should-use' },
      { label: 'O que não conseguimos verificar', anchor: 'who-should-not-use' },
      { label: 'Alternativas', anchor: 'alternatives' },
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
            text: 'O AIRI é um companheiro de IA gratuito e de código aberto que dá voz e um personagem Live2D ou VRM a um modelo de chat, no navegador ou como app de desktop.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em um personagem animado que fala e fica por cima do modelo de linguagem que você conectar. O AIRI em si é gratuito; os modelos e as vozes que você encaixar podem ser locais ou serviços pagos na nuvem.',
          },
        ],
        items: [
          'Você escolhe o provedor de chat: APIs compatíveis com OpenAI, OpenRouter, Ollama, vLLM, Anthropic Claude, Google Gemini e muitos outros aparecem na lista do README.',
          'Formas de instalar: uma versão para navegador, instaladores no GitHub Releases e comandos do winget, Scoop ou Homebrew Cask.',
          'As integrações opcionais incluem Minecraft, Discord e Telegram; o suporte a Factorio é descrito como trabalho em andamento.',
          'O README diz que o projeto ainda está em fase inicial de desenvolvimento; o último commit é de 18 de novembro de 2026.',
          'A PromptQuorum não testou o app. Nenhuma política de privacidade foi encontrada, então confira os termos de cada provedor antes de conectá-lo.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A entrada de voz, a saída de voz e a captura de tela podem enviar áudio, texto ou o conteúdo da tela aos provedores na nuvem que você conectar. Verifique o consentimento e as regras do seu local de trabalho antes de usar com a voz de outras pessoas ou material confidencial. Isto é informação geral, não aconselhamento jurídico.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O AIRI é um companheiro de IA de código aberto que dá a um modelo de chat uma voz e um corpo de personagem, no navegador ou no desktop.**',
          'O projeto é publicado pela organização moeru-ai no GitHub como Project AIRI, e a licença MIT cita Neko Ayaka como titular dos direitos autorais (2024 até hoje). O README o descreve como uma recriação da streamer virtual Neuro-sama, e a descrição do repositório o chama de "Self hosted, you-owned Grok Companion". A versão estável 0.15.4 saiu em 12 de novembro de 2026, uma pré-versão 0.15.5 veio em 14 de novembro e o último commit é de 18 de novembro de 2026; portanto o desenvolvimento está ativo e nenhum aviso de projeto abandonado se aplica.',
          'Segundo o README, o projeto usa tecnologias web como WebGPU, WebAudio e WebSocket. A versão para navegador serve para mostrar o que os navegadores conseguem fazer, enquanto a versão de desktop pode, segundo o README, usar NVIDIA CUDA e Apple Metal de forma nativa. A documentação descreve a versão de desktop como adequada a usos mais avançados, como transmissão de VTuber, controle do computador e acesso a LLMs locais.',
          'O README lista o que o projeto faz: jogar Minecraft, conversar no Discord e no Telegram, ouvir pelo áudio do navegador ou do Discord, falar por vários provedores de voz e animar modelos Live2D e VRM. O suporte a Factorio está marcado como trabalho em andamento, e itens do roteiro, como um sistema de memória, ainda estão por fazer.',
          'Essas descrições vêm do README e da documentação do criador. A PromptQuorum não executou o app e não avaliou a qualidade da voz, a latência, o comportamento dos personagens nem o consumo de recursos.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**Você pode abrir o AIRI no navegador ou instalar o app de desktop pelo GitHub Releases, winget, Scoop ou Homebrew Cask.**',
          'O README mostra botões de download para Windows, macOS e Linux. A versão estável 0.15.4 lista um instalador para Windows (.exe), arquivos .dmg do macOS para Apple silicon e Intel e pacotes Linux em AppImage, .deb, .rpm, .flatpak e .pacman. A versão também contém um APK de Android, mas nem o README nem a documentação descrevem o Android como plataforma compatível, por isso ele não está listado aqui. A documentação oferece uma pré-versão e builds nightly experimentais como canais separados.',
        ],
        columns: ['Plataforma', 'Como obter'],
        rows: [
          { 'Plataforma': '[Windows](https://github.com/moeru-ai/airi/releases/latest)', 'Como obter': 'Instalador (.exe) ou winget install MoeruAI.AIRI' },
          { 'Plataforma': '[macOS](https://github.com/moeru-ai/airi/releases/latest)', 'Como obter': 'Imagem de disco (.dmg) ou brew install --cask airi' },
          { 'Plataforma': '[Linux](https://github.com/moeru-ai/airi/releases/latest)', 'Como obter': 'AppImage, .deb, .rpm, .flatpak ou .pacman' },
          { 'Plataforma': '[Navegador](https://airi.moeru.ai)', 'Como obter': 'Abra a versão web, sem instalar' },
          { 'Plataforma': '[Site](https://airi.moeru.ai/docs/en/)', 'Como obter': 'Site oficial e documentação' },
        ],
        note: 'As fontes não dizem se os instaladores têm assinatura de código; espere possíveis avisos do sistema operacional e verifique-os antes de continuar.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**O AIRI não informa requisitos de hardware, então o que você precisa depende dos provedores e modelos escolhidos.**',
          'Com provedores na nuvem, a maior parte do trabalho acontece remotamente. Rodar um modelo local por uma ferramenta como o Ollama exige hardware dimensionado para esse modelo, algo que o AIRI não controla.',
        ],
        columns: ['Item', 'Valor informado'],
        rows: [
          { 'Item': 'Sistema operacional', 'Valor informado': 'Windows, macOS, Linux (arquivos da versão)' },
          { 'Item': 'Navegador', 'Valor informado': 'Versão web disponível' },
          { 'Item': 'RAM / VRAM', 'Valor informado': 'Nenhum requisito informado' },
          { 'Item': 'GPU', 'Valor informado': 'Opcional; README cita CUDA e Metal' },
          { 'Item': 'Disco', 'Valor informado': 'Nenhum valor informado' },
          { 'Item': 'Microfone', 'Valor informado': 'Necessário para entrada de voz (docs)' },
        ],
        note: 'A captura de tela e de janelas está disponível apenas na versão de desktop, segundo o manual web.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O núcleo do AIRI é um modelo de chat com voz e corpo de personagem, mais integrações opcionais.** Todos os itens abaixo são afirmações do criador, tiradas do README e da documentação.',
        ],
        items: [
          'Chat com um modelo de um provedor que você escolher, incluindo APIs compatíveis com OpenAI, OpenRouter, Ollama, vLLM, Anthropic Claude, Google Gemini e DeepSeek, entre outros da lista do README.',
          'Entrada de voz pelo navegador ou pelo Discord, com reconhecimento de fala e detecção de fala no lado do cliente.',
          'Saída de voz por vários provedores, incluindo ElevenLabs, Microsoft/Azure Speech, texto para fala compatível com OpenAI, Alibaba Cloud Model Studio e Kokoro TTS local.',
          'Modelos de personagem Live2D e VRM com piscadas, acompanhamento do olhar e movimento ocular em repouso automáticos.',
          'Jogar Minecraft; Factorio é descrito como trabalho em andamento, com prova de conceito.',
          'Bots de chat para Discord e Telegram.',
          'Captura de tela e de janelas para visão na versão de desktop (docs).',
          'Armazenamento de memória no navegador com DuckDB WASM ou pglite; o roteiro ainda lista um sistema de memória e a inferência local pura no navegador como inacabados.',
          'Um sistema de plugins que o README descreve como trabalho em andamento.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**O destino dos seus dados depende dos provedores que você conectar, e nenhuma política de privacidade foi encontrada.**',
          'O AIRI não executa um modelo fixo. Segundo a documentação, você adiciona um provedor de chat como OpenRouter, um serviço compatível com OpenAI, Ollama ou Google Gemini, com uma chave de API ou um endereço de serviço local, e provedores separados para voz, transcrição e visão. Se forem serviços na nuvem, seu texto e seu áudio podem ir até eles sob os termos de cada um; com o Ollama no seu computador, o modelo roda ali.',
          'A documentação também oferece, como alternativa, entrar em um provedor oficial do AIRI. As notas da versão v0.15.4 descrevem uma assinatura com saldo Flux para ele. Elas também dizem que o app de desktop, o app web, o app móvel e as páginas de login podem enviar relatórios de erros sob o mesmo botão de coleta de dados da análise do produto. O que esses relatórios contêm e como o provedor oficial trata os chats não consta nas fontes lidas pela PromptQuorum.',
          'A documentação lista provedores de visão e diz que a captura de tela e de janelas está disponível na versão de desktop. Se você combiná-los com um provedor na nuvem, o conteúdo da sua tela sairia do seu computador.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O AIRI serve a quem quer um personagem de IA gratuito e de código aberto que possa configurar por conta própria.**',
        ],
        items: [
          'Entusiastas que querem um personagem de IA com voz e corpo Live2D ou VRM.',
          'Desenvolvedores e streamers que querem testar integrações com jogos ou apps de mensagens e aceitam software em fase inicial.',
          'Pessoas que já usam o Ollama ou outro provedor e querem uma interface de personagem para ele.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        content: [
          '**O AIRI não serve bem em algumas situações, e vários detalhes continuam sem verificação.**',
        ],
        items: [
          'Não serve: quem quer um produto acabado e estável; o README diz que o projeto está em fase inicial de desenvolvimento.',
          'Não verificado: qualquer política de privacidade, termos de uso ou aviso legal. Nenhum foi encontrado no site, na documentação ou no repositório.',
          'Não verificado: a localização do mantenedor. Nenhuma fonte lida cita um país.',
          'Não verificado: requisitos de hardware, uso de disco e desempenho. Nenhum é informado.',
          'Não verificado: a versão para navegador. A página [airi.moeru.ai](https://airi.moeru.ai) exibiu "AIRI could not start" quando a PromptQuorum a consultou, então ela não foi inspecionada.',
          'Não verificado: o suporte móvel. A versão lista um APK de Android e o README menciona um app móvel experimental, mas a documentação descreve o uso móvel pela versão web.',
          'Não verificado: os preços da assinatura e o que o provedor oficial do AIRI inclui. As notas da versão mencionam uma assinatura e o Flux, mas não trazem preços.',
          'Não verificado: se os instaladores têm assinatura de código.',
          'Não verificado: qualidade da voz, latência, comportamento dos personagens e resultados ao jogar. Todas as descrições de recursos são do próprio criador.',
          'Não verificado: se o AIRI funciona totalmente offline. As fontes não dizem.',
          'Não verificado: cobertura independente. Nenhuma análise de terceiros foi lida para este registro.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'AIRI e alternativas',
        itemHeadings: true,
        content: [
          '**O AIRI reúne chat de voz, modelos de personagem e integrações com jogos em um só projeto. A PromptQuorum não o comparou na prática com as alternativas.** As alternativas abaixo vêm da própria lista "Similar Projects" do AIRI e das análises da PromptQuorum.',
        ],
        columns: ['Ferramenta', 'Citado nas fontes'],
        rows: [
          { 'Ferramenta': 'AIRI', 'Citado nas fontes': 'MIT; navegador e desktop; voz, Live2D/VRM, jogos' },
          { 'Ferramenta': '[Open-LLM-VTuber](/pt/power-local-llm/open-llm-vtuber-review)', 'Citado nas fontes': 'Chat de voz auto-hospedado com Live2D; análise da PromptQuorum' },
          { 'Ferramenta': '[SillyTavern](/pt/local-llms/sillytavern-review)', 'Citado nas fontes': 'Interface de chat com personagens e lorebooks; análise da PromptQuorum' },
          { 'Ferramenta': '[Amica](https://github.com/semperai/amica/)', 'Citado nas fontes': 'Na lista do AIRI: "Great at VRM, WebXR"' },
          { 'Ferramenta': '[Neuro](https://github.com/kimjammer/Neuro)', 'Citado nas fontes': 'Na lista do AIRI: uma recriação da Neuro-sama' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O AIRI é gratuito?',
            a: 'O app é gratuito e tem licença MIT. As notas da versão v0.15.4 descrevem uma assinatura opcional e um saldo Flux para o provedor oficial do AIRI, mas nenhum preço foi encontrado; o custo depende de você usar esse provedor ou as suas próprias contas de provedores.',
          },
          {
            q: 'O AIRI roda modelos no meu computador?',
            a: 'Não por conta própria, segundo a documentação: você conecta provedores, e o Ollama é um dos provedores de chat listados para modelos locais. O README também diz que a versão de desktop pode usar NVIDIA CUDA e Apple Metal de forma nativa, mas não dá detalhes sobre quais modelos.',
          },
          {
            q: 'Quais plataformas o AIRI suporta?',
            a: 'Uma versão para navegador em [airi.moeru.ai](https://airi.moeru.ai) e builds de desktop para Windows, macOS e Linux, segundo os arquivos da versão. A documentação descreve o uso móvel como feito pela versão web.',
          },
          {
            q: 'O AIRI consegue jogar?',
            a: 'O README diz que ele pode jogar Minecraft e lista Factorio como trabalho em andamento, com prova de conceito. São afirmações do criador que a PromptQuorum não testou.',
          },
          {
            q: 'Existe uma criptomoeda oficial do AIRI?',
            a: 'Não, segundo o README: ele diz que o projeto não tem nenhuma criptomoeda ou token emitido oficialmente e pede que os usuários procedam com cautela.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O AIRI vale uma olhada se você quer um personagem de IA gratuito e de código aberto, com voz e corpo Live2D ou VRM, e aceita software em fase inicial.**',
          'Ele tem licença MIT, instaladores para três sistemas de desktop além de uma versão para navegador, uma longa lista de provedores selecionáveis, incluindo o Ollama, e desenvolvimento ativo: uma versão estável em 12 de novembro de 2026 e um commit em 18 de novembro de 2026.',
          'As contrapartidas são reais. O README chama o projeto de inicial, a privacidade depende dos provedores que você escolher, nenhuma política de privacidade foi encontrada e as necessidades de hardware e a qualidade não são informadas. A PromptQuorum não testou o app. Experimente primeiro com um modelo local do Ollama ou uma chave de provedor descartável e verifique quais serviços recebem seus dados de voz e de tela.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do AIRI](https://airi.moeru.ai) — ponto de entrada do app web; a página não carregou na consulta de 18 de novembro de 2026.',
          '[Documentação do AIRI](https://airi.moeru.ai/docs/en/) — descrição do projeto e navegação, consultada em 18 de novembro de 2026.',
          '[Visão geral da documentação](https://airi.moeru.ai/docs/en/docs/overview/) — versões web e de desktop e seus usos previstos, consultada em 18 de novembro de 2026.',
          '[Página de versões da documentação](https://airi.moeru.ai/docs/en/docs/overview/versions) — canais estável, pré-versão e nightly, consultada em 18 de novembro de 2026.',
          '[Manual de desktop](https://airi.moeru.ai/docs/en/docs/manual/tamagotchi/) — configuração de provedores, Ollama e login, consultado em 18 de novembro de 2026.',
          '[Manual web](https://airi.moeru.ai/docs/en/docs/manual/web/) — provedores, microfone e captura de tela só no desktop, consultado em 18 de novembro de 2026.',
          '[Repositório do AIRI no GitHub](https://github.com/moeru-ai/airi) — descrição do repositório, licença e último commit, consultado em 18 de novembro de 2026.',
          '[README do AIRI](https://github.com/moeru-ai/airi#readme) — recursos, roteiro, comandos de instalação, lista de provedores e projetos semelhantes, consultado em 18 de novembro de 2026.',
          '[LICENSE](https://github.com/moeru-ai/airi/blob/HEAD/LICENSE) — licença MIT e linha de direitos autorais, consultada em 18 de novembro de 2026.',
          '[Versão v0.15.4](https://github.com/moeru-ai/airi/releases/tag/v0.15.4) — arquivos da versão e notas sobre assinatura e relatórios de erros, consultada em 18 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Open-LLM-VTuber](/pt/power-local-llm/open-llm-vtuber-review) — um companheiro de chat de voz auto-hospedado com avatar Live2D.',
          '[Análise do HiWaifu](/pt/power-local-llm/hiwaifu-review) — um app de companheiro de IA para celulares.',
          '[Análise do SillyTavern](/pt/local-llms/sillytavern-review) — uma interface de chat com personagens auto-hospedada e com lorebooks.',
          '[SillyTavern vs. Agnai vs. RisuAI](/pt/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — três interfaces de roleplay comparadas.',
          '[Diretório de software de LLM locais](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Creative & Roleplay',
    heroImage: '/images/airi-review-hero-zh.webp',
    title: 'AIRI 评测：支持语音聊天与游戏集成的开源 AI 伴侣',
    seoTitle: 'AIRI 评测：支持语音聊天与 Live2D 的开源 AI 伴侣',
    intro:
      'AIRI（Project AIRI）是一款采用 MIT 许可证的免费 AI 伴侣，可在浏览器中运行，也可作为桌面应用使用。它把与您所选语言模型的聊天、语音输入与语音输出，以及 Live2D 或 VRM 角色结合在一起。本评测基于项目的 GitHub 仓库、发布版本和文档，核查日期为 2026年11月18日。PromptQuorum 没有实际测试过该应用。',
    metaDescription:
      'AIRI 是采用 MIT 许可证的免费 AI 伴侣，支持浏览器、Windows、macOS 和 Linux，提供语音聊天与 Live2D/VRM 角色。本文说明获取方式、隐私与局限。',
    twitterDescription:
      'AIRI 是开源 AI 伴侣，提供语音聊天、Live2D 和 VRM 角色以及可选的游戏集成。免费、MIT 许可证、处于早期开发阶段。',
    audience:
      '希望拥有可自行配置的 AI 伴侣或虚拟角色，并需要语音聊天及可选游戏、聊天应用集成的爱好者和开发者',
    readTime: '阅读约6分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AIRI',
    targetKeywords: [
      'AIRI 评测',
      'Project AIRI',
      '开源 AI 伴侣',
      'AIRI Live2D VRM',
      'AIRI Ollama',
      'Neuro-sama 替代',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**AIRI 是一款采用 MIT 许可证的免费 AI 伴侣，可在浏览器中运行，也可作为 Windows、macOS 或 Linux 桌面应用使用，提供语音聊天以及 Live2D 或 VRM 角色。**语言模型提供商由您自行接入，本地或云端均可，因此聊天内容流向何处取决于这一选择。README 自己说明，该项目仍处于早期开发阶段。',
    quickAnswerTop: {
      zh: {
        question: 'AIRI 是什么，适合谁？',
        answer:
          'AIRI 是开源 AI 伴侣：一个带有声音和动画角色的聊天模型。它适合愿意自行选择并配置模型与语音提供商的爱好者和开发者。',
        bullets: [
          '平台：浏览器版，以及面向 Windows、macOS 和 Linux 的桌面版本。',
          '价格与许可：采用 MIT 许可证的免费应用。',
          '语音：通过浏览器或 Discord 输入语音，通过多个提供商输出语音。',
          '角色：支持自动眨眼和眼球移动的 Live2D 与 VRM 模型。',
          '数据：取决于您接入的聊天、语音和视觉提供商。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: '概览', anchor: 'overview' },
      { label: '如何获取', anchor: 'get-it' },
      { label: '运行要求', anchor: 'requirements' },
      { label: '功能', anchor: 'features' },
      { label: '隐私与数据流向', anchor: 'privacy' },
      { label: '适合谁使用', anchor: 'who-should-use' },
      { label: '我们未能核实的内容', anchor: 'who-should-not-use' },
      { label: '替代方案', anchor: 'alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AIRI 是一款免费的开源 AI 伴侣，为聊天模型提供声音和 Live2D 或 VRM 角色，可在浏览器或桌面应用中使用。',
          },
          {
            type: 'plain-terms',
            text: '可以把它想成一个会说话、会动的角色，架在您接入的语言模型之上。AIRI 本身免费；您接入的模型和语音可能是本地的，也可能是付费云服务。',
          },
        ],
        items: [
          '聊天提供商由您选择：README 列出了兼容 OpenAI 的 API、OpenRouter、Ollama、vLLM、Anthropic Claude、Google Gemini 等众多选项。',
          '安装途径：浏览器版、GitHub Releases 上的安装包，以及 winget、Scoop 或 Homebrew Cask 命令。',
          '可选集成包括 Minecraft、Discord 和 Telegram；对 Factorio 的支持被描述为开发中。',
          'README 称项目仍处于早期开发阶段；最新提交日期为 2026年11月18日。',
          'PromptQuorum 没有测试该应用。未找到隐私政策，因此在接入任何提供商之前，请先查看其条款。',
        ],
        callouts: [
          {
            type: 'note',
            text: '语音输入、语音输出和屏幕捕获可能会把音频、文字或屏幕内容发送给您接入的云端提供商。在涉及他人声音或机密材料时使用之前，请确认是否已获同意并遵守工作场所规定。本文为一般信息，不构成法律意见。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**AIRI 是一款开源 AI 伴侣，为聊天模型提供声音和角色形象，可在浏览器或桌面端使用。**',
          '该项目由 GitHub 组织 moeru-ai 以 Project AIRI 的名义发布，MIT 许可证将 Neko Ayaka 列为版权持有人（2024年至今）。README 将其描述为对虚拟主播 Neuro-sama 的再现，仓库简介则称其为“Self hosted, you-owned Grok Companion”。稳定版 0.15.4 于 2026年11月12日发布，预发布版 0.15.5 于 11月14日跟进，最新提交日期为 2026年11月18日，因此开发仍然活跃，不适用“项目已停更”的警告。',
          '根据 README，该项目使用 WebGPU、WebAudio 和 WebSocket 等 Web 技术。浏览器版旨在展示浏览器能做到什么，而按 README 所述，桌面版可以原生使用 NVIDIA CUDA 和 Apple Metal。文档称桌面版更适合 VTuber 直播、电脑操作和访问本地 LLM 等进阶用途。',
          'README 列出了项目的能力：玩 Minecraft、在 Discord 和 Telegram 中聊天、通过浏览器或 Discord 音频收听、通过多个语音提供商说话，以及为 Live2D 和 VRM 模型制作动画。对 Factorio 的支持标注为开发中，记忆系统等路线图条目尚未完成。',
          '这些描述来自开发者的 README 和文档。PromptQuorum 没有运行该应用，也没有评估语音质量、延迟、角色表现或资源占用。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '如何获取',
        content: [
          '**您可以在浏览器中打开 AIRI，也可以通过 GitHub Releases、winget、Scoop 或 Homebrew Cask 安装桌面应用。**',
          'README 提供了 Windows、macOS 和 Linux 的下载按钮。稳定版 0.15.4 包含 Windows 安装程序（.exe）、面向 Apple 芯片和 Intel 的 macOS .dmg 文件，以及 Linux 的 AppImage、.deb、.rpm、.flatpak 和 .pacman 包。该版本还附带一个 Android APK，但 README 和文档都没有把 Android 列为受支持平台，因此此处未列出。文档将预发布版和实验性的每夜构建列为单独渠道。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          { '平台': '[Windows](https://github.com/moeru-ai/airi/releases/latest)', '获取方式': '安装程序（.exe）或 winget install MoeruAI.AIRI' },
          { '平台': '[macOS](https://github.com/moeru-ai/airi/releases/latest)', '获取方式': '磁盘映像（.dmg）或 brew install --cask airi' },
          { '平台': '[Linux](https://github.com/moeru-ai/airi/releases/latest)', '获取方式': 'AppImage、.deb、.rpm、.flatpak 或 .pacman' },
          { '平台': '[浏览器](https://airi.moeru.ai)', '获取方式': '打开网页版，无需安装' },
          { '平台': '[官方网站](https://airi.moeru.ai/docs/en/)', '获取方式': '官方网站与文档' },
        ],
        note: '资料来源没有说明安装包是否经过代码签名，因此可能出现操作系统警告，请在继续之前先核对。',
      },
      requirements: {
        id: 'requirements',
        title: '运行要求',
        content: [
          '**AIRI 没有给出硬件要求，所需配置取决于您选择的提供商和模型。**',
          '使用云端提供商时，大部分工作在远端完成。若通过 Ollama 等工具运行本地模型，则需要与该模型相称的硬件，这不由 AIRI 控制。',
        ],
        columns: ['项目', '资料中的说明'],
        rows: [
          { '项目': '操作系统', '资料中的说明': 'Windows、macOS、Linux（发布文件）' },
          { '项目': '浏览器', '资料中的说明': '提供网页版' },
          { '项目': 'RAM / VRAM', '资料中的说明': '未说明要求' },
          { '项目': 'GPU', '资料中的说明': '可选；README 提到 CUDA 和 Metal' },
          { '项目': '磁盘', '资料中的说明': '未给出数值' },
          { '项目': '麦克风', '资料中的说明': '语音输入需要（文档）' },
        ],
        note: '根据网页版手册，屏幕和窗口捕获仅在桌面版中提供。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**AIRI 的核心是带有声音和角色形象的聊天模型，外加可选集成。**以下各项均为开发者在 README 和文档中的说法。',
        ],
        items: [
          '与您所选提供商的模型聊天，包括兼容 OpenAI 的 API、OpenRouter、Ollama、vLLM、Anthropic Claude、Google Gemini 和 DeepSeek，README 列表中还有更多。',
          '通过浏览器或 Discord 输入语音，支持客户端语音识别和说话检测。',
          '通过多个提供商输出语音，包括 ElevenLabs、Microsoft/Azure Speech、兼容 OpenAI 的语音合成、阿里云 Model Studio 以及本地 Kokoro TTS。',
          'Live2D 和 VRM 角色模型，支持自动眨眼、视线跟随和待机时的眼球移动。',
          '玩 Minecraft；Factorio 被描述为开发中，已有概念验证。',
          '面向 Discord 和 Telegram 的聊天机器人。',
          '桌面版提供用于视觉的屏幕和窗口捕获（文档）。',
          '通过 DuckDB WASM 或 pglite 在浏览器内保存记忆；路线图仍把记忆系统和纯浏览器内本地推理列为未完成。',
          'README 称其为开发中的插件系统。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**您的数据流向取决于您接入的提供商，且未找到隐私政策。**',
          'AIRI 并不运行某个固定模型。根据文档，您需要添加聊天提供商，如 OpenRouter、兼容 OpenAI 的服务、Ollama 或 Google Gemini，并填入 API 密钥或本地服务地址，另外还要为语音、转写和视觉分别配置提供商。如果这些是云服务，您的文字和音频可能会按各自条款发送过去；若在本机使用 Ollama，模型则在本机运行。',
          '文档还提供了登录官方 AIRI 提供商这一替代方案。v0.15.4 的发布说明描述了配套的订阅和 Flux 余额。说明还称，桌面应用、网页应用、移动应用和登录页面可以发送错误报告，并与产品分析使用同一个数据收集开关。这些报告包含什么，以及官方提供商如何处理聊天内容，PromptQuorum 阅读的资料中均未说明。',
          '文档列出了视觉提供商，并称屏幕和窗口捕获在桌面版中可用。若与云端提供商组合使用，屏幕内容就会离开您的电脑。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁使用',
        content: [
          '**AIRI 适合想要一个可自行配置的免费开源 AI 角色的人。**',
        ],
        items: [
          '想要带声音和 Live2D 或 VRM 形象的 AI 角色的爱好者。',
          '想尝试游戏或聊天应用集成、并能接受早期软件的开发者和主播。',
          '已在使用 Ollama 或其他提供商，并希望为其配一个角色前端的人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        content: [
          '**AIRI 在某些情况下并不合适，而且有若干细节尚未核实。**',
        ],
        items: [
          '不适合：想要成熟稳定产品的用户；README 称项目处于早期开发阶段。',
          '未核实：任何隐私政策、服务条款或运营方信息。在官网、文档和仓库中均未找到。',
          '未核实：维护者所在地。所读资料均未提及国家。',
          '未核实：硬件要求、磁盘占用和性能。均未说明。',
          '未核实：浏览器版。PromptQuorum 抓取 [airi.moeru.ai](https://airi.moeru.ai) 时页面显示“AIRI could not start”，因此未能检查。',
          '未核实：移动端支持。发布版附带 Android APK，README 提到实验性移动应用，但文档将移动端使用描述为通过网页版。',
          '未核实：订阅价格以及官方 AIRI 提供商包含的内容。发布说明提到了订阅和 Flux，但未给出价格。',
          '未核实：安装包是否经过代码签名。',
          '未核实：语音质量、延迟、角色表现和游戏实际效果。所有功能描述均来自开发者本人。',
          '未核实：AIRI 能否完全离线运行。资料中没有说明。',
          '未核实：独立报道。本条目未阅读任何第三方评测。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'AIRI 与替代方案',
        itemHeadings: true,
        content: [
          '**AIRI 把语音聊天、角色模型和游戏集成放在一个项目里。PromptQuorum 没有对替代方案做过实际对比。**下列替代方案来自 AIRI 自己的“Similar Projects”列表和 PromptQuorum 的评测。',
        ],
        columns: ['工具', '资料中的说明'],
        rows: [
          { '工具': 'AIRI', '资料中的说明': 'MIT；浏览器和桌面；语音、Live2D/VRM、游戏' },
          { '工具': '[Open-LLM-VTuber](/zh/power-local-llm/open-llm-vtuber-review)', '资料中的说明': '带 Live2D 的自托管语音聊天；PromptQuorum 评测' },
          { '工具': '[SillyTavern](/zh/local-llms/sillytavern-review)', '资料中的说明': '带 lorebook 的角色聊天前端；PromptQuorum 评测' },
          { '工具': '[Amica](https://github.com/semperai/amica/)', '资料中的说明': 'AIRI 列表中：“Great at VRM, WebXR”' },
          { '工具': '[Neuro](https://github.com/kimjammer/Neuro)', '资料中的说明': 'AIRI 列表中：Neuro-sama 的再现' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'AIRI 免费吗？',
            a: '该应用免费，采用 MIT 许可证。v0.15.4 的发布说明描述了面向官方 AIRI 提供商的可选订阅和 Flux 余额，但未找到价格，因此费用取决于您使用该提供商，还是使用自己的提供商账户。',
          },
          {
            q: 'AIRI 会在我的电脑上运行模型吗？',
            a: '根据文档，它本身不会：您需要接入提供商，Ollama 是列出的可用于本地模型的聊天提供商之一。README 还称桌面版可以原生使用 NVIDIA CUDA 和 Apple Metal，但没有说明具体是哪些模型。',
          },
          {
            q: 'AIRI 支持哪些平台？',
            a: '[airi.moeru.ai](https://airi.moeru.ai) 上的浏览器版，以及根据发布文件提供的 Windows、macOS 和 Linux 桌面版本。文档将移动端使用描述为通过网页版。',
          },
          {
            q: 'AIRI 能玩游戏吗？',
            a: 'README 称它可以玩 Minecraft，并把 Factorio 列为开发中、已有概念验证。这些是开发者的说法，PromptQuorum 没有测试。',
          },
          {
            q: 'AIRI 有官方加密货币吗？',
            a: '没有，根据 README：其中称该项目没有任何官方发行的加密货币或代币，并提醒用户谨慎对待。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果您想要一个带声音和 Live2D 或 VRM 形象的免费开源 AI 角色，并能接受早期软件，AIRI 值得一试。**',
          '它采用 MIT 许可证，提供三大桌面系统的安装包和浏览器版，可选提供商清单很长且包含 Ollama，开发活跃：2026年11月12日发布稳定版，11月18日有提交。',
          '取舍是真实存在的。README 称项目处于早期阶段，隐私取决于您选择的提供商，未找到隐私政策，硬件需求和质量也没有说明。PromptQuorum 没有测试该应用。建议先用本地 Ollama 模型或一次性的提供商密钥试用，并确认哪些服务会收到您的语音和屏幕数据。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[AIRI 官方网站](https://airi.moeru.ai) — 网页应用入口；2026年11月18日检查时页面未能加载。',
          '[AIRI 文档](https://airi.moeru.ai/docs/en/) — 项目介绍与导航，2026年11月18日查阅。',
          '[文档概览](https://airi.moeru.ai/docs/en/docs/overview/) — 网页版和桌面版及其定位用途，2026年11月18日查阅。',
          '[文档版本页面](https://airi.moeru.ai/docs/en/docs/overview/versions) — 稳定版、预发布版和每夜构建渠道，2026年11月18日查阅。',
          '[桌面版手册](https://airi.moeru.ai/docs/en/docs/manual/tamagotchi/) — 提供商设置、Ollama 和登录，2026年11月18日查阅。',
          '[网页版手册](https://airi.moeru.ai/docs/en/docs/manual/web/) — 提供商、麦克风和仅限桌面的屏幕捕获，2026年11月18日查阅。',
          '[AIRI GitHub 仓库](https://github.com/moeru-ai/airi) — 仓库简介、许可证和最新提交，2026年11月18日查阅。',
          '[AIRI README](https://github.com/moeru-ai/airi#readme) — 功能、路线图、安装命令、提供商列表和类似项目，2026年11月18日查阅。',
          '[LICENSE](https://github.com/moeru-ai/airi/blob/HEAD/LICENSE) — MIT 许可证和版权行，2026年11月18日查阅。',
          '[发布版 v0.15.4](https://github.com/moeru-ai/airi/releases/tag/v0.15.4) — 发布文件，以及订阅和错误报告说明，2026年11月18日查阅。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Open-LLM-VTuber 评测](/zh/power-local-llm/open-llm-vtuber-review) — 带 Live2D 形象的自托管语音聊天伴侣。',
          '[HiWaifu 评测](/zh/power-local-llm/hiwaifu-review) — 面向手机的 AI 伴侣应用。',
          '[SillyTavern 评测](/zh/local-llms/sillytavern-review) — 带 lorebook 的自托管角色聊天前端。',
          '[SillyTavern vs. Agnai vs. RisuAI](/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 三款角色扮演前端对比。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Creative & Roleplay',
    heroImage: '/images/airi-review-hero-ar.webp',
    title: 'مراجعة AIRI: رفيق ذكاء اصطناعي مفتوح المصدر مع محادثة صوتية وتكامل مع الألعاب',
    seoTitle: 'مراجعة AIRI: رفيق ذكاء اصطناعي مفتوح المصدر بمحادثة صوتية',
    intro:
      'AIRI (Project AIRI) رفيق ذكاء اصطناعي مجاني بترخيص MIT يعمل في المتصفح أو كتطبيق سطح مكتب. يجمع بين المحادثة مع نموذج لغوي من اختيارك، وإدخال الصوت وإخراجه، وشخصيات Live2D أو VRM. تستند هذه المراجعة إلى مستودع المشروع على GitHub وإصداراته ووثائقه، وقد روجعت في 18 نوفمبر 2026. لم تجرّب PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'AIRI رفيق ذكاء اصطناعي مجاني (MIT) للمتصفح وWindows وmacOS وLinux، بمحادثة صوتية وشخصيات Live2D أو VRM. طرق الحصول عليه والمتطلبات والخصوصية والقيود.',
    twitterDescription:
      'AIRI رفيق ذكاء اصطناعي مفتوح المصدر بمحادثة صوتية وشخصيات Live2D وVRM وتكامل اختياري مع الألعاب. مجاني، ترخيص MIT، في مرحلة مبكرة.',
    audience:
      'الهواة والمطورون الذين يبحثون عن رفيق ذكاء اصطناعي أو شخصية افتراضية يمكن ضبطها بأنفسهم، مع محادثة صوتية وتكامل اختياري مع الألعاب وتطبيقات المراسلة',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AIRI',
    targetKeywords: [
      'مراجعة AIRI',
      'Project AIRI',
      'رفيق ذكاء اصطناعي مفتوح المصدر',
      'AIRI Live2D VRM',
      'AIRI Ollama',
      'بديل Neuro-sama',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**AIRI رفيق ذكاء اصطناعي مجاني بترخيص MIT يعمل في المتصفح أو كتطبيق سطح مكتب لأنظمة Windows وmacOS وLinux، مع محادثة صوتية وشخصيات Live2D أو VRM.** تربط بنفسك مزوّد النموذج اللغوي، محليًا كان أم سحابيًا، لذا تتوقف وجهة محادثاتك على هذا الاختيار. ويذكر ملف README نفسه أن المشروع في مرحلة مبكرة من التطوير.',
    quickAnswerTop: {
      ar: {
        question: 'ما AIRI ولمن هو؟',
        answer:
          'AIRI رفيق ذكاء اصطناعي مفتوح المصدر: نموذج محادثة له صوت وشخصية متحركة. يناسب الهواة والمطورين المرتاحين لاختيار مزوّدي النماذج والصوت وضبطهم بأنفسهم.',
        bullets: [
          'المنصات: نسخة للمتصفح وإصدارات سطح مكتب لأنظمة Windows وmacOS وLinux.',
          'السعر والترخيص: تطبيق مجاني بترخيص MIT.',
          'الصوت: إدخال صوتي من المتصفح أو Discord، وإخراج صوتي عبر عدة مزوّدين.',
          'الشخصيات: نماذج Live2D وVRM بحركة رمش وعينين تلقائية.',
          'البيانات: تتوقف على مزوّدي المحادثة والصوت والرؤية الذين تربطهم.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'نظرة عامة', anchor: 'overview' },
      { label: 'كيفية الحصول عليه', anchor: 'get-it' },
      { label: 'المتطلبات', anchor: 'requirements' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'الخصوصية وتدفق البيانات', anchor: 'privacy' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'ما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
      { label: 'البدائل', anchor: 'alternatives' },
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
            text: 'AIRI رفيق ذكاء اصطناعي مجاني ومفتوح المصدر يمنح نموذج المحادثة صوتًا وشخصية Live2D أو VRM، في المتصفح أو كتطبيق سطح مكتب.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله شخصية متحركة تتكلم فوق النموذج اللغوي الذي تربطه. AIRI نفسه مجاني؛ أما النماذج والأصوات التي تضيفها فقد تكون محلية أو خدمات سحابية مدفوعة.',
          },
        ],
        items: [
          'أنت تختار مزوّد المحادثة: تُدرج قائمة README واجهات متوافقة مع OpenAI وOpenRouter وOllama وvLLM وAnthropic Claude وGoogle Gemini وغيرها الكثير.',
          'طرق التثبيت: نسخة للمتصفح، وملفات تثبيت على GitHub Releases، وأوامر winget أو Scoop أو Homebrew Cask.',
          'تشمل التكاملات الاختيارية Minecraft وDiscord وTelegram؛ ويُوصف دعم Factorio بأنه قيد التطوير.',
          'يذكر README أن المشروع ما زال في مرحلة مبكرة من التطوير؛ وتاريخ آخر commit هو 18 نوفمبر 2026.',
          'لم تختبر PromptQuorum التطبيق. لم يُعثر على سياسة خصوصية، فراجع شروط كل مزوّد قبل ربطه.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'قد يرسل إدخال الصوت وإخراجه والتقاط الشاشة الصوت أو النص أو محتوى الشاشة إلى المزوّدين السحابيين الذين تربطهم. تحقق من الموافقة وقواعد مكان العمل قبل استخدامه مع أصوات أشخاص آخرين أو مواد سرية. هذه معلومات عامة وليست استشارة قانونية.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**AIRI رفيق ذكاء اصطناعي مفتوح المصدر يمنح نموذج المحادثة صوتًا وجسد شخصية، في المتصفح أو على سطح المكتب.**',
          'ينشر المشروع مؤسسة moeru-ai على GitHub باسم Project AIRI، ويذكر ترخيص MIT اسم Neko Ayaka صاحبًا لحقوق النشر (2024 حتى الآن). يصفه README بأنه إعادة إنشاء للبثّاثة الافتراضية Neuro-sama، ويسمّيه وصف المستودع "Self hosted, you-owned Grok Companion". صدر الإصدار المستقر 0.15.4 في 12 نوفمبر 2026، وتبعه إصدار تجريبي 0.15.5 في 14 نوفمبر، وتاريخ آخر commit هو 18 نوفمبر 2026؛ فالتطوير نشط ولا ينطبق تحذير المشروع المتوقف.',
          'بحسب README يستخدم المشروع تقنيات الويب مثل WebGPU وWebAudio وWebSocket. تهدف نسخة المتصفح إلى إظهار ما تستطيعه المتصفحات، بينما يمكن لنسخة سطح المكتب، بحسب README، استخدام NVIDIA CUDA وApple Metal أصليًا. وتصف الوثائق نسخة سطح المكتب بأنها مناسبة للاستخدامات المتقدمة مثل بثّ VTuber والتحكم بالحاسوب والوصول إلى LLM محلية.',
          'يسرد README ما يستطيعه المشروع: لعب Minecraft، والمحادثة في Discord وTelegram، والاستماع عبر صوت المتصفح أو Discord، والتحدث عبر عدة مزوّدي صوت، وتحريك نماذج Live2D وVRM. ودعم Factorio موسوم بأنه قيد التطوير، وبنود خارطة الطريق مثل نظام الذاكرة لم تكتمل بعد.',
          'تأتي هذه الأوصاف من README والوثائق التي كتبها المطوّر. لم تشغّل PromptQuorum التطبيق ولم تقيّم جودة الصوت أو زمن الاستجابة أو سلوك الشخصيات أو استهلاك الموارد.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيفية الحصول عليه',
        content: [
          '**يمكنك فتح AIRI في المتصفح أو تثبيت تطبيق سطح المكتب من GitHub Releases أو winget أو Scoop أو Homebrew Cask.**',
          'يعرض README أزرار تنزيل لأنظمة Windows وmacOS وLinux. ويتضمن الإصدار المستقر 0.15.4 مثبّتًا لنظام Windows (.exe)، وملفات .dmg لنظام macOS لشرائح Apple وIntel، وحزم Linux بصيغ AppImage و.deb و.rpm و.flatpak و.pacman. ويحتوي الإصدار أيضًا على APK لنظام Android، لكن لا README ولا الوثائق تصف Android بأنه منصة مدعومة، لذا لم يُدرج هنا. وتقدّم الوثائق إصدارًا تجريبيًا وبنى ليلية تجريبية كقنوات منفصلة.',
        ],
        columns: ['المنصة', 'طريقة الحصول عليه'],
        rows: [
          { 'المنصة': '[Windows](https://github.com/moeru-ai/airi/releases/latest)', 'طريقة الحصول عليه': 'مثبّت (.exe) أو winget install MoeruAI.AIRI' },
          { 'المنصة': '[macOS](https://github.com/moeru-ai/airi/releases/latest)', 'طريقة الحصول عليه': 'صورة قرص (.dmg) أو brew install --cask airi' },
          { 'المنصة': '[Linux](https://github.com/moeru-ai/airi/releases/latest)', 'طريقة الحصول عليه': 'AppImage أو .deb أو .rpm أو .flatpak أو .pacman' },
          { 'المنصة': '[المتصفح](https://airi.moeru.ai)', 'طريقة الحصول عليه': 'افتح نسخة الويب دون تثبيت' },
          { 'المنصة': '[الموقع الإلكتروني](https://airi.moeru.ai/docs/en/)', 'طريقة الحصول عليه': 'الموقع الرسمي والوثائق' },
        ],
        note: 'لا تذكر المصادر ما إذا كانت ملفات التثبيت موقّعة رقميًا، لذا توقّع ظهور تحذيرات من نظام التشغيل وتحقق منها قبل المتابعة.',
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات',
        content: [
          '**لا يحدد AIRI متطلبات عتاد، لذا يتوقف ما تحتاجه على المزوّدين والنماذج التي تختارها.**',
          'مع المزوّدين السحابيين يجري معظم العمل عن بُعد. أما تشغيل نموذج محلي عبر أداة مثل Ollama فيتطلب عتادًا يناسب ذلك النموذج، وهذا خارج سيطرة AIRI.',
        ],
        columns: ['البند', 'القيمة المذكورة'],
        rows: [
          { 'البند': 'نظام التشغيل', 'القيمة المذكورة': 'Windows وmacOS وLinux (ملفات الإصدار)' },
          { 'البند': 'المتصفح', 'القيمة المذكورة': 'نسخة الويب متاحة' },
          { 'البند': 'RAM / VRAM', 'القيمة المذكورة': 'لا يوجد متطلب مذكور' },
          { 'البند': 'GPU', 'القيمة المذكورة': 'اختياري؛ يذكر README ‏CUDA وMetal' },
          { 'البند': 'القرص', 'القيمة المذكورة': 'لا توجد قيمة مذكورة' },
          { 'البند': 'الميكروفون', 'القيمة المذكورة': 'مطلوب للإدخال الصوتي (الوثائق)' },
        ],
        note: 'التقاط الشاشة والنوافذ متاح في نسخة سطح المكتب فقط بحسب دليل نسخة الويب.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**جوهر AIRI هو نموذج محادثة له صوت وجسد شخصية، مع تكاملات اختيارية.** كل ما يلي ادعاءات من المطوّر مأخوذة من README والوثائق.',
        ],
        items: [
          'محادثة مع نموذج من مزوّد تختاره، منها واجهات متوافقة مع OpenAI وOpenRouter وOllama وvLLM وAnthropic Claude وGoogle Gemini وDeepSeek، إلى جانب غيرها في قائمة README.',
          'إدخال صوتي من المتصفح أو Discord، مع تعرّف على الكلام وكشف للتحدث على جانب العميل.',
          'إخراج صوتي عبر عدة مزوّدين، منهم ElevenLabs وMicrosoft/Azure Speech وتحويل نص إلى كلام متوافق مع OpenAI وAlibaba Cloud Model Studio وKokoro TTS المحلي.',
          'نماذج شخصيات Live2D وVRM مع رمش وتتبّع للنظر وحركة عينين في وضع الخمول بشكل تلقائي.',
          'لعب Minecraft؛ ويُوصف Factorio بأنه قيد التطوير مع إثبات جدوى.',
          'روبوتات محادثة لـ Discord وTelegram.',
          'التقاط الشاشة والنوافذ لأغراض الرؤية في نسخة سطح المكتب (الوثائق).',
          'تخزين الذاكرة داخل المتصفح عبر DuckDB WASM أو pglite؛ وما زالت خارطة الطريق تعدّ نظام الذاكرة والاستدلال المحلي الكامل داخل المتصفح غير مكتملين.',
          'نظام إضافات يصفه README بأنه قيد التطوير.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**وجهة بياناتك تتوقف على المزوّدين الذين تربطهم، ولم يُعثر على سياسة خصوصية.**',
          'لا يشغّل AIRI نموذجًا ثابتًا واحدًا. تقول الوثائق إنك تضيف مزوّد محادثة مثل OpenRouter أو خدمة متوافقة مع OpenAI أو Ollama أو Google Gemini بمفتاح API أو عنوان خدمة محلي، إضافة إلى مزوّدين منفصلين للصوت والتفريغ النصي والرؤية. وإذا كانت هذه خدمات سحابية فقد يصل نصك وصوتك إليها بموجب شروطها الخاصة؛ أما مع Ollama على جهازك فيعمل النموذج هناك.',
          'وتتيح الوثائق أيضًا تسجيل الدخول إلى مزوّد AIRI رسمي كبديل. وتصف ملاحظات الإصدار v0.15.4 اشتراكًا برصيد Flux لهذا المزوّد. وتقول أيضًا إن تطبيق سطح المكتب وتطبيق الويب وتطبيق الجوال وصفحات تسجيل الدخول يمكنها إرسال تقارير الأخطاء ضمن مفتاح جمع البيانات نفسه الخاص بتحليلات المنتج. ولا تذكر المصادر التي قرأتها PromptQuorum ما تحتويه هذه التقارير ولا كيف يتعامل المزوّد الرسمي مع المحادثات.',
          'تدرج الوثائق مزوّدي رؤية وتقول إن التقاط الشاشة والنوافذ متاح في نسخة سطح المكتب. وإذا جمعتهما مع مزوّد سحابي فسيغادر محتوى شاشتك حاسوبك.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب AIRI من يريد شخصية ذكاء اصطناعي مجانية ومفتوحة المصدر يمكنه ضبطها بنفسه.**',
        ],
        items: [
          'الهواة الذين يريدون شخصية ذكاء اصطناعي بصوت وجسد Live2D أو VRM.',
          'المطورون والبثّاثون الذين يريدون تجربة التكامل مع الألعاب أو تطبيقات المراسلة ويقبلون برنامجًا في مرحلة مبكرة.',
          'من يشغّل Ollama أو مزوّدًا آخر بالفعل ويريد واجهة شخصيات له.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        content: [
          '**AIRI غير مناسب في بعض الحالات، وهناك عدة تفاصيل لم يُتحقق منها.**',
        ],
        items: [
          'غير مناسب: من يريد منتجًا مكتملًا ومستقرًا؛ إذ يذكر README أن المشروع في مرحلة مبكرة من التطوير.',
          'لم يُتحقق منه: أي سياسة خصوصية أو شروط خدمة أو بيانات الجهة المشغّلة. لم يُعثر على أيٍّ منها في الموقع أو الوثائق أو المستودع.',
          'لم يُتحقق منه: موقع القائم على الصيانة. لا يذكر أي مصدر قرأناه دولة.',
          'لم يُتحقق منه: متطلبات العتاد واستهلاك القرص والأداء. لا شيء منها مذكور.',
          'لم يُتحقق منه: نسخة المتصفح. عرضت صفحة [airi.moeru.ai](https://airi.moeru.ai) عبارة "AIRI could not start" عندما جلبتها PromptQuorum، لذلك لم تُفحص.',
          'لم يُتحقق منه: دعم الجوال. يدرج الإصدار APK لنظام Android ويذكر README تطبيق جوال تجريبيًا، لكن الوثائق تصف استخدام الجوال عبر نسخة الويب.',
          'لم يُتحقق منه: أسعار الاشتراك وما يشمله مزوّد AIRI الرسمي. تذكر ملاحظات الإصدار اشتراكًا وFlux دون أسعار.',
          'لم يُتحقق منه: ما إذا كانت ملفات التثبيت موقّعة رقميًا.',
          'لم يُتحقق منه: جودة الصوت وزمن الاستجابة وسلوك الشخصيات ونتائج اللعب. كل أوصاف الميزات من المطوّر نفسه.',
          'لم يُتحقق منه: ما إذا كان AIRI يعمل دون اتصال بالكامل. لا تذكر المصادر ذلك.',
          'لم يُتحقق منه: التغطية المستقلة. لم تُقرأ أي مراجعة من طرف ثالث لهذا الإدخال.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'AIRI مقابل البدائل',
        itemHeadings: true,
        content: [
          '**يجمع AIRI بين المحادثة الصوتية ونماذج الشخصيات والتكامل مع الألعاب في مشروع واحد. لم تقارنه PromptQuorum بالبدائل عمليًا.** البدائل أدناه مأخوذة من قائمة "Similar Projects" الخاصة بـ AIRI ومن مراجعات PromptQuorum.',
        ],
        columns: ['الأداة', 'المذكور في المصادر'],
        rows: [
          { 'الأداة': 'AIRI', 'المذكور في المصادر': 'MIT؛ متصفح وسطح مكتب؛ صوت وLive2D/VRM وألعاب' },
          { 'الأداة': '[Open-LLM-VTuber](/ar/power-local-llm/open-llm-vtuber-review)', 'المذكور في المصادر': 'محادثة صوتية ذاتية الاستضافة مع Live2D؛ مراجعة PromptQuorum' },
          { 'الأداة': '[SillyTavern](/ar/local-llms/sillytavern-review)', 'المذكور في المصادر': 'واجهة محادثة شخصيات مع lorebooks؛ مراجعة PromptQuorum' },
          { 'الأداة': '[Amica](https://github.com/semperai/amica/)', 'المذكور في المصادر': 'في قائمة AIRI: "Great at VRM, WebXR"' },
          { 'الأداة': '[Neuro](https://github.com/kimjammer/Neuro)', 'المذكور في المصادر': 'في قائمة AIRI: إعادة إنشاء لـ Neuro-sama' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل AIRI مجاني؟',
            a: 'التطبيق مجاني وبترخيص MIT. تصف ملاحظات الإصدار v0.15.4 اشتراكًا اختياريًا ورصيد Flux لمزوّد AIRI الرسمي، لكن لم يُعثر على أسعار، لذا تتوقف التكلفة على استخدامك هذا المزوّد أو حساباتك الخاصة لدى المزوّدين.',
          },
          {
            q: 'هل يشغّل AIRI النماذج على حاسوبي؟',
            a: 'ليس بنفسه بحسب الوثائق: أنت تربط المزوّدين، وOllama أحد مزوّدي المحادثة المدرجين للنماذج المحلية. ويقول README أيضًا إن نسخة سطح المكتب يمكنها استخدام NVIDIA CUDA وApple Metal أصليًا، دون تفاصيل عن النماذج.',
          },
          {
            q: 'ما المنصات التي يدعمها AIRI؟',
            a: 'نسخة متصفح على [airi.moeru.ai](https://airi.moeru.ai) وإصدارات سطح مكتب لأنظمة Windows وmacOS وLinux بحسب ملفات الإصدار. وتصف الوثائق استخدام الجوال بأنه يتم عبر نسخة الويب.',
          },
          {
            q: 'هل يستطيع AIRI لعب الألعاب؟',
            a: 'يقول README إنه يستطيع لعب Minecraft ويدرج Factorio قيد التطوير مع إثبات جدوى. هذه ادعاءات من المطوّر لم تختبرها PromptQuorum.',
          },
          {
            q: 'هل توجد عملة مشفّرة رسمية لـ AIRI؟',
            a: 'لا، بحسب README: يقول إن المشروع ليس له عملة مشفّرة أو رمز مُصدر رسميًا، ويطلب من المستخدمين التحلّي بالحذر.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق AIRI نظرة إذا كنت تريد شخصية ذكاء اصطناعي مجانية ومفتوحة المصدر بصوت وجسد Live2D أو VRM وتقبل برنامجًا في مرحلة مبكرة.**',
          'لديه ترخيص MIT، وملفات تثبيت لثلاثة أنظمة سطح مكتب إضافة إلى نسخة متصفح، وقائمة طويلة من المزوّدين القابلين للاختيار منها Ollama، وتطويرًا نشطًا: إصدار مستقر في 12 نوفمبر 2026 وcommit في 18 نوفمبر 2026.',
          'المقايضات حقيقية. يصف README المشروع بأنه في مرحلة مبكرة، وتتوقف الخصوصية على المزوّدين الذين تختارهم، ولم يُعثر على سياسة خصوصية، ولا تُذكر احتياجات العتاد ولا الجودة. لم تختبر PromptQuorum التطبيق. جرّبه أولًا مع نموذج Ollama محلي أو مفتاح مزوّد مؤقت، وتحقق من الخدمات التي تتلقى بيانات صوتك وشاشتك.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع AIRI](https://airi.moeru.ai) — نقطة دخول تطبيق الويب؛ لم تُحمَّل الصفحة عند الفحص في 18 نوفمبر 2026.',
          '[وثائق AIRI](https://airi.moeru.ai/docs/en/) — وصف المشروع والتنقل، روجعت في 18 نوفمبر 2026.',
          '[نظرة عامة على الوثائق](https://airi.moeru.ai/docs/en/docs/overview/) — نسختا الويب وسطح المكتب والاستخدامات المقصودة، روجعت في 18 نوفمبر 2026.',
          '[صفحة الإصدارات في الوثائق](https://airi.moeru.ai/docs/en/docs/overview/versions) — قنوات المستقر والتجريبي والليلي، روجعت في 18 نوفمبر 2026.',
          '[دليل سطح المكتب](https://airi.moeru.ai/docs/en/docs/manual/tamagotchi/) — إعداد المزوّدين وOllama وتسجيل الدخول، روجع في 18 نوفمبر 2026.',
          '[دليل الويب](https://airi.moeru.ai/docs/en/docs/manual/web/) — المزوّدون والميكروفون والتقاط الشاشة لسطح المكتب فقط، روجع في 18 نوفمبر 2026.',
          '[مستودع AIRI على GitHub](https://github.com/moeru-ai/airi) — وصف المستودع والترخيص وآخر commit، روجع في 18 نوفمبر 2026.',
          '[ملف README لـ AIRI](https://github.com/moeru-ai/airi#readme) — الميزات وخارطة الطريق وأوامر التثبيت وقائمة المزوّدين والمشاريع المشابهة، روجع في 18 نوفمبر 2026.',
          '[LICENSE](https://github.com/moeru-ai/airi/blob/HEAD/LICENSE) — ترخيص MIT وسطر حقوق النشر، روجع في 18 نوفمبر 2026.',
          '[الإصدار v0.15.4](https://github.com/moeru-ai/airi/releases/tag/v0.15.4) — ملفات الإصدار وملاحظات الاشتراك وتقارير الأخطاء، روجع في 18 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Open-LLM-VTuber](/ar/power-local-llm/open-llm-vtuber-review) — رفيق محادثة صوتية ذاتي الاستضافة بشخصية Live2D.',
          '[مراجعة HiWaifu](/ar/power-local-llm/hiwaifu-review) — تطبيق رفيق ذكاء اصطناعي للهواتف.',
          '[مراجعة SillyTavern](/ar/local-llms/sillytavern-review) — واجهة محادثة شخصيات ذاتية الاستضافة مع lorebooks.',
          '[SillyTavern مقابل Agnai مقابل RisuAI](/ar/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — مقارنة بين ثلاث واجهات لعب أدوار.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Creative & Roleplay',
    heroImage: '/images/airi-review-hero-ko.webp',
    title: 'AIRI 리뷰: 음성 채팅과 게임 연동을 갖춘 오픈소스 AI 컴패니언',
    seoTitle: 'AIRI 리뷰: 음성 채팅 지원 오픈소스 AI 컴패니언',
    intro:
      'AIRI(Project AIRI)는 브라우저나 데스크톱 앱으로 실행되는 MIT 라이선스의 무료 AI 컴패니언입니다. 원하는 언어 모델과의 채팅, 음성 입력과 음성 출력, Live2D 또는 VRM 캐릭터를 결합합니다. 이 리뷰는 프로젝트의 GitHub 저장소, 릴리스, 문서를 바탕으로 하며 2026년 11월 18일에 확인했습니다. PromptQuorum은 이 앱을 직접 테스트하지 않았습니다.',
    metaDescription:
      'AIRI는 브라우저, Windows, macOS, Linux에서 쓰는 MIT 라이선스 무료 AI 컴패니언으로, 음성 채팅과 Live2D·VRM 캐릭터를 지원합니다. 개인정보와 한계를 정리했습니다.',
    twitterDescription:
      'AIRI는 음성 채팅, Live2D·VRM 캐릭터, 선택형 게임 연동을 갖춘 오픈소스 AI 컴패니언입니다. 무료, MIT 라이선스, 개발 초기 단계.',
    audience:
      '음성 채팅과 선택형 게임·채팅 앱 연동을 갖추고 직접 설정할 수 있는 AI 컴패니언이나 가상 캐릭터를 찾는 애호가와 개발자',
    readTime: '6분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AIRI',
    targetKeywords: [
      'AIRI 리뷰',
      'Project AIRI',
      '오픈소스 AI 컴패니언',
      'AIRI Live2D VRM',
      'AIRI Ollama',
      'Neuro-sama 대안',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**AIRI는 브라우저 또는 Windows, macOS, Linux 데스크톱 앱으로 실행되는 MIT 라이선스의 무료 AI 컴패니언으로, 음성 채팅과 Live2D 또는 VRM 캐릭터를 제공합니다.** 언어 모델 제공업체는 로컬이든 클라우드든 직접 연결하므로, 채팅이 어디로 가는지는 그 선택에 달려 있습니다. README 자체도 프로젝트가 개발 초기 단계라고 밝힙니다.',
    quickAnswerTop: {
      ko: {
        question: 'AIRI는 무엇이며 누구를 위한 것입니까?',
        answer:
          'AIRI는 목소리와 움직이는 캐릭터를 갖춘 채팅 모델, 즉 오픈소스 AI 컴패니언입니다. 모델과 음성 제공업체를 직접 고르고 설정하는 데 부담이 없는 애호가와 개발자에게 맞습니다.',
        bullets: [
          '플랫폼: 브라우저 버전과 Windows, macOS, Linux용 데스크톱 빌드.',
          '가격과 라이선스: MIT 라이선스의 무료 앱.',
          '음성: 브라우저 또는 Discord에서 음성 입력, 여러 제공업체를 통한 음성 출력.',
          '캐릭터: 자동 눈 깜빡임과 시선 움직임을 지원하는 Live2D·VRM 모델.',
          '데이터: 연결하는 채팅·음성·비전 제공업체에 따라 달라집니다.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: '개요', anchor: 'overview' },
      { label: '입수 방법', anchor: 'get-it' },
      { label: '요구 사항', anchor: 'requirements' },
      { label: '기능', anchor: 'features' },
      { label: '개인정보와 데이터 흐름', anchor: 'privacy' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 내용', anchor: 'who-should-not-use' },
      { label: '대안', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: 'AIRI는 채팅 모델에 목소리와 Live2D 또는 VRM 캐릭터를 입혀 주는 무료 오픈소스 AI 컴패니언이며, 브라우저나 데스크톱 앱으로 사용합니다.',
          },
          {
            type: 'plain-terms',
            text: '연결한 언어 모델 위에 올라가 말하고 움직이는 캐릭터라고 생각하시면 됩니다. AIRI 자체는 무료이지만, 붙이는 모델과 음성은 로컬일 수도, 유료 클라우드 서비스일 수도 있습니다.',
          },
        ],
        items: [
          '채팅 제공업체는 직접 고릅니다. README에는 OpenAI 호환 API, OpenRouter, Ollama, vLLM, Anthropic Claude, Google Gemini 등 많은 항목이 나열되어 있습니다.',
          '설치 경로: 브라우저 버전, GitHub Releases의 설치 파일, winget·Scoop·Homebrew Cask 명령.',
          '선택형 연동으로 Minecraft, Discord, Telegram이 있으며, Factorio 지원은 개발 중으로 설명됩니다.',
          'README는 프로젝트가 아직 개발 초기 단계라고 밝히며, 최신 커밋은 2026년 11월 18일자입니다.',
          'PromptQuorum은 앱을 테스트하지 않았습니다. 개인정보 처리방침을 찾지 못했으므로 제공업체를 연결하기 전에 각 업체의 약관을 확인하십시오.',
        ],
        callouts: [
          {
            type: 'note',
            text: '음성 입력, 음성 출력, 화면 캡처는 연결한 클라우드 제공업체로 오디오, 텍스트 또는 화면 내용을 보낼 수 있습니다. 다른 사람의 목소리나 기밀 자료와 함께 사용하기 전에 동의 여부와 직장 규정을 확인하십시오. 이는 일반적인 정보이며 법률 자문이 아닙니다.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**AIRI는 채팅 모델에 목소리와 캐릭터 몸체를 입혀 주는 오픈소스 AI 컴패니언으로, 브라우저나 데스크톱에서 사용합니다.**',
          '이 프로젝트는 GitHub 조직 moeru-ai가 Project AIRI로 공개하며, MIT 라이선스는 Neko Ayaka를 저작권자(2024년부터 현재)로 명시합니다. README는 버추얼 스트리머 Neuro-sama를 재현한 것이라고 설명하고, 저장소 설명은 "Self hosted, you-owned Grok Companion"이라고 부릅니다. 안정 버전 0.15.4는 2026년 11월 12일에, 프리릴리스 0.15.5는 11월 14일에 나왔고 최신 커밋은 2026년 11월 18일자이므로, 개발은 활발하며 방치된 프로젝트라는 경고는 해당하지 않습니다.',
          'README에 따르면 이 프로젝트는 WebGPU, WebAudio, WebSocket 같은 웹 기술을 사용합니다. 브라우저 버전은 브라우저로 어디까지 할 수 있는지 보여 주기 위한 것이고, 데스크톱 버전은 README에 따르면 NVIDIA CUDA와 Apple Metal을 네이티브로 사용할 수 있습니다. 문서는 데스크톱 버전이 VTuber 방송, 컴퓨터 사용, 로컬 LLM 접근 같은 고급 용도에 맞는다고 설명합니다.',
          'README는 프로젝트가 할 수 있는 일로 Minecraft 플레이, Discord와 Telegram에서의 채팅, 브라우저 또는 Discord 오디오를 통한 듣기, 여러 음성 제공업체를 통한 말하기, Live2D·VRM 모델 애니메이션을 나열합니다. Factorio 지원은 개발 중으로 표시되어 있고, 메모리 시스템 같은 로드맵 항목은 아직 완료되지 않았습니다.',
          '이 설명들은 개발자의 README와 문서에서 나온 것입니다. PromptQuorum은 앱을 실행하지 않았으며 음성 품질, 지연 시간, 캐릭터 동작, 리소스 사용량을 평가하지 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**AIRI는 브라우저에서 열거나 GitHub Releases, winget, Scoop, Homebrew Cask로 데스크톱 앱을 설치해 사용할 수 있습니다.**',
          'README에는 Windows, macOS, Linux용 다운로드 버튼이 있습니다. 안정 버전 0.15.4에는 Windows 설치 프로그램(.exe), Apple 실리콘과 Intel용 macOS .dmg 파일, Linux용 AppImage, .deb, .rpm, .flatpak, .pacman 패키지가 들어 있습니다. 릴리스에는 Android APK도 있지만 README와 문서 어디에도 Android를 지원 플랫폼으로 설명하지 않으므로 여기에는 올리지 않았습니다. 문서는 프리릴리스와 실험적인 나이틀리 빌드를 별도 채널로 안내합니다.',
        ],
        columns: ['플랫폼', '입수 방법'],
        rows: [
          { '플랫폼': '[Windows](https://github.com/moeru-ai/airi/releases/latest)', '입수 방법': '설치 프로그램(.exe) 또는 winget install MoeruAI.AIRI' },
          { '플랫폼': '[macOS](https://github.com/moeru-ai/airi/releases/latest)', '입수 방법': '디스크 이미지(.dmg) 또는 brew install --cask airi' },
          { '플랫폼': '[Linux](https://github.com/moeru-ai/airi/releases/latest)', '입수 방법': 'AppImage, .deb, .rpm, .flatpak, .pacman' },
          { '플랫폼': '[브라우저](https://airi.moeru.ai)', '입수 방법': '웹 버전 열기, 설치 불필요' },
          { '플랫폼': '[웹사이트](https://airi.moeru.ai/docs/en/)', '입수 방법': '공식 사이트와 문서' },
        ],
        note: '출처에는 설치 파일의 코드 서명 여부가 나와 있지 않으므로 운영체제 경고가 나타날 수 있습니다. 진행하기 전에 내용을 확인하십시오.',
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항',
        content: [
          '**AIRI는 하드웨어 요구 사항을 밝히지 않으므로, 필요한 사양은 선택하는 제공업체와 모델에 따라 달라집니다.**',
          '클라우드 제공업체를 쓰면 대부분의 작업은 원격에서 이뤄집니다. Ollama 같은 도구로 로컬 모델을 돌리려면 그 모델에 맞는 하드웨어가 필요하며, 이는 AIRI가 통제할 수 없습니다.',
        ],
        columns: ['항목', '명시된 내용'],
        rows: [
          { '항목': '운영체제', '명시된 내용': 'Windows, macOS, Linux(릴리스 파일)' },
          { '항목': '브라우저', '명시된 내용': '웹 버전 제공' },
          { '항목': 'RAM / VRAM', '명시된 내용': '요구 사항 명시 없음' },
          { '항목': 'GPU', '명시된 내용': '선택 사항, README에 CUDA와 Metal 언급' },
          { '항목': '디스크', '명시된 내용': '수치 명시 없음' },
          { '항목': '마이크', '명시된 내용': '음성 입력에 필요(문서)' },
        ],
        note: '웹 매뉴얼에 따르면 화면 및 창 캡처는 데스크톱 버전에서만 제공됩니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**AIRI의 핵심은 목소리와 캐릭터 몸체를 갖춘 채팅 모델과 선택형 연동입니다.** 아래 항목은 모두 README와 문서에 나온 개발자의 주장입니다.',
        ],
        items: [
          '선택한 제공업체의 모델과 채팅. OpenAI 호환 API, OpenRouter, Ollama, vLLM, Anthropic Claude, Google Gemini, DeepSeek 등 README 목록에 다수.',
          '브라우저 또는 Discord에서 음성 입력, 클라이언트 측 음성 인식과 발화 감지 지원.',
          '여러 제공업체를 통한 음성 출력. ElevenLabs, Microsoft/Azure Speech, OpenAI 호환 음성 합성, Alibaba Cloud Model Studio, 로컬 Kokoro TTS 등.',
          '자동 눈 깜빡임, 시선 따라가기, 대기 중 눈 움직임을 지원하는 Live2D·VRM 캐릭터 모델.',
          'Minecraft 플레이. Factorio는 개념 증명이 있는 개발 중 기능으로 설명됩니다.',
          'Discord와 Telegram용 채팅 봇.',
          '데스크톱 버전에서 비전용 화면·창 캡처(문서).',
          'DuckDB WASM 또는 pglite를 이용한 브라우저 내 메모리 저장. 로드맵은 메모리 시스템과 순수 브라우저 내 로컬 추론을 아직 미완성으로 분류합니다.',
          'README가 개발 중이라고 설명하는 플러그인 시스템.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 데이터 흐름',
        content: [
          '**데이터가 어디로 가는지는 연결하는 제공업체에 달려 있으며, 개인정보 처리방침은 찾지 못했습니다.**',
          'AIRI는 고정된 하나의 모델을 실행하지 않습니다. 문서에 따르면 OpenRouter, OpenAI 호환 서비스, Ollama, Google Gemini 같은 채팅 제공업체를 API 키나 로컬 서비스 주소와 함께 추가하고, 음성·전사·비전용 제공업체를 따로 설정합니다. 이들이 클라우드 서비스라면 텍스트와 오디오가 각 업체의 약관에 따라 전달될 수 있으며, 내 컴퓨터의 Ollama를 쓰면 모델은 그곳에서 실행됩니다.',
          '문서는 대안으로 공식 AIRI 제공업체에 로그인하는 방법도 안내합니다. v0.15.4 릴리스 노트는 이를 위한 Flux 잔액이 있는 구독을 설명합니다. 또한 데스크톱 앱, 웹 앱, 모바일 앱, 로그인 페이지가 제품 분석과 같은 데이터 수집 스위치 아래에서 오류 보고서를 보낼 수 있다고 밝힙니다. 이 보고서에 무엇이 담기는지, 공식 제공업체가 채팅을 어떻게 처리하는지는 PromptQuorum이 읽은 출처에 나와 있지 않습니다.',
          '문서는 비전 제공업체를 나열하고 화면 및 창 캡처가 데스크톱 버전에서 가능하다고 말합니다. 이를 클라우드 제공업체와 함께 쓰면 화면 내용이 컴퓨터 밖으로 나가게 됩니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        content: [
          '**AIRI는 직접 설정할 수 있는 무료 오픈소스 AI 캐릭터를 원하는 분께 맞습니다.**',
        ],
        items: [
          '목소리와 Live2D 또는 VRM 몸체를 가진 AI 캐릭터를 원하는 애호가.',
          '게임이나 채팅 앱 연동을 시험해 보고 싶고 개발 초기 단계의 소프트웨어를 받아들일 수 있는 개발자와 스트리머.',
          '이미 Ollama나 다른 제공업체를 쓰고 있으며 그 위에 얹을 캐릭터 프런트엔드를 원하는 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        content: [
          '**AIRI가 맞지 않는 상황도 있으며, 몇몇 세부 사항은 확인하지 못했습니다.**',
        ],
        items: [
          '맞지 않음: 완성되고 안정적인 제품을 원하는 사용자. README는 프로젝트가 개발 초기 단계라고 밝힙니다.',
          '미확인: 개인정보 처리방침, 이용 약관, 운영자 정보. 웹사이트, 문서, 저장소 어디에서도 찾지 못했습니다.',
          '미확인: 메인테이너의 소재지. 읽은 출처 중 국가를 밝힌 곳이 없습니다.',
          '미확인: 하드웨어 요구 사항, 디스크 사용량, 성능. 모두 명시되어 있지 않습니다.',
          '미확인: 브라우저 버전. PromptQuorum이 [airi.moeru.ai](https://airi.moeru.ai)를 가져왔을 때 "AIRI could not start"가 표시되어 확인하지 못했습니다.',
          '미확인: 모바일 지원. 릴리스에는 Android APK가 있고 README는 실험적인 모바일 앱을 언급하지만, 문서는 모바일 사용을 웹 버전을 통한 것으로 설명합니다.',
          '미확인: 구독 요금과 공식 AIRI 제공업체에 포함되는 내용. 릴리스 노트는 구독과 Flux를 언급하지만 가격은 없습니다.',
          '미확인: 설치 파일의 코드 서명 여부.',
          '미확인: 음성 품질, 지연 시간, 캐릭터 동작, 게임 플레이 결과. 모든 기능 설명은 개발자 본인의 것입니다.',
          '미확인: AIRI가 완전히 오프라인으로 동작하는지 여부. 출처에는 나와 있지 않습니다.',
          '미확인: 독립적인 보도. 이 항목을 위해 제3자 리뷰는 읽지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'AIRI와 대안 비교',
        itemHeadings: true,
        content: [
          '**AIRI는 음성 채팅, 캐릭터 모델, 게임 연동을 하나의 프로젝트에 담았습니다. PromptQuorum은 대안들과 직접 비교해 보지 않았습니다.** 아래 대안은 AIRI 자체의 "Similar Projects" 목록과 PromptQuorum 리뷰에서 가져왔습니다.',
        ],
        columns: ['도구', '출처에 나온 내용'],
        rows: [
          { '도구': 'AIRI', '출처에 나온 내용': 'MIT, 브라우저·데스크톱, 음성·Live2D/VRM·게임' },
          { '도구': '[Open-LLM-VTuber](/ko/power-local-llm/open-llm-vtuber-review)', '출처에 나온 내용': 'Live2D 지원 셀프 호스팅 음성 채팅, PromptQuorum 리뷰' },
          { '도구': '[SillyTavern](/ko/local-llms/sillytavern-review)', '출처에 나온 내용': '로어북 지원 캐릭터 채팅 프런트엔드, PromptQuorum 리뷰' },
          { '도구': '[Amica](https://github.com/semperai/amica/)', '출처에 나온 내용': 'AIRI 목록: "Great at VRM, WebXR"' },
          { '도구': '[Neuro](https://github.com/kimjammer/Neuro)', '출처에 나온 내용': 'AIRI 목록: Neuro-sama 재현 프로젝트' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'AIRI는 무료입니까?',
            a: '앱은 무료이며 MIT 라이선스입니다. v0.15.4 릴리스 노트는 공식 AIRI 제공업체용 선택형 구독과 Flux 잔액을 설명하지만 가격은 찾지 못했으므로, 비용은 그 제공업체를 쓰는지 아니면 직접 만든 제공업체 계정을 쓰는지에 따라 달라집니다.',
          },
          {
            q: 'AIRI는 내 컴퓨터에서 모델을 실행합니까?',
            a: '문서에 따르면 AIRI 자체가 실행하지는 않습니다. 제공업체를 연결하는 방식이며, Ollama는 로컬 모델용으로 나열된 채팅 제공업체 중 하나입니다. README는 데스크톱 버전이 NVIDIA CUDA와 Apple Metal을 네이티브로 사용할 수 있다고도 하지만, 어떤 모델인지는 밝히지 않습니다.',
          },
          {
            q: 'AIRI는 어떤 플랫폼을 지원합니까?',
            a: '[airi.moeru.ai](https://airi.moeru.ai)의 브라우저 버전과, 릴리스 파일에 따른 Windows, macOS, Linux용 데스크톱 빌드입니다. 문서는 모바일 사용을 웹 버전을 통한 것으로 설명합니다.',
          },
          {
            q: 'AIRI는 게임을 할 수 있습니까?',
            a: 'README는 Minecraft를 플레이할 수 있다고 하며 Factorio는 개념 증명이 있는 개발 중 기능으로 적고 있습니다. 이는 개발자의 주장이며 PromptQuorum은 테스트하지 않았습니다.',
          },
          {
            q: 'AIRI의 공식 암호화폐가 있습니까?',
            a: 'README에 따르면 없습니다. 프로젝트에 공식적으로 발행된 암호화폐나 토큰이 없다고 밝히며 사용자에게 주의를 당부합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**목소리와 Live2D 또는 VRM 몸체를 가진 무료 오픈소스 AI 캐릭터를 원하고 개발 초기 단계의 소프트웨어를 받아들일 수 있다면 AIRI는 살펴볼 만합니다.**',
          'MIT 라이선스, 세 가지 데스크톱 운영체제용 설치 파일과 브라우저 버전, Ollama를 포함한 긴 선택 가능 제공업체 목록, 그리고 활발한 개발(2026년 11월 12일 안정 버전, 11월 18일 커밋)을 갖추고 있습니다.',
          '절충점은 분명합니다. README는 프로젝트를 초기 단계라고 하고, 개인정보는 선택하는 제공업체에 달려 있으며, 개인정보 처리방침은 찾지 못했고, 필요한 하드웨어와 품질도 명시되어 있지 않습니다. PromptQuorum은 앱을 테스트하지 않았습니다. 먼저 로컬 Ollama 모델이나 일회용 제공업체 키로 시험해 보고, 어떤 서비스가 음성과 화면 데이터를 받는지 확인하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[AIRI 웹사이트](https://airi.moeru.ai) — 웹 앱 진입점. 2026년 11월 18일 확인 시 페이지가 로드되지 않았습니다.',
          '[AIRI 문서](https://airi.moeru.ai/docs/en/) — 프로젝트 설명과 탐색, 2026년 11월 18일 확인.',
          '[문서 개요](https://airi.moeru.ai/docs/en/docs/overview/) — 웹·데스크톱 버전과 의도된 용도, 2026년 11월 18일 확인.',
          '[문서 버전 페이지](https://airi.moeru.ai/docs/en/docs/overview/versions) — 안정, 프리릴리스, 나이틀리 채널, 2026년 11월 18일 확인.',
          '[데스크톱 매뉴얼](https://airi.moeru.ai/docs/en/docs/manual/tamagotchi/) — 제공업체 설정, Ollama, 로그인, 2026년 11월 18일 확인.',
          '[웹 매뉴얼](https://airi.moeru.ai/docs/en/docs/manual/web/) — 제공업체, 마이크, 데스크톱 전용 화면 캡처, 2026년 11월 18일 확인.',
          '[AIRI GitHub 저장소](https://github.com/moeru-ai/airi) — 저장소 설명, 라이선스, 최신 커밋, 2026년 11월 18일 확인.',
          '[AIRI README](https://github.com/moeru-ai/airi#readme) — 기능, 로드맵, 설치 명령, 제공업체 목록, 유사 프로젝트, 2026년 11월 18일 확인.',
          '[LICENSE](https://github.com/moeru-ai/airi/blob/HEAD/LICENSE) — MIT 라이선스와 저작권 표기, 2026년 11월 18일 확인.',
          '[릴리스 v0.15.4](https://github.com/moeru-ai/airi/releases/tag/v0.15.4) — 릴리스 파일, 구독 및 오류 보고서 관련 노트, 2026년 11월 18일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Open-LLM-VTuber 리뷰](/ko/power-local-llm/open-llm-vtuber-review) — Live2D 아바타를 갖춘 셀프 호스팅 음성 채팅 컴패니언.',
          '[HiWaifu 리뷰](/ko/power-local-llm/hiwaifu-review) — 휴대폰용 AI 컴패니언 앱.',
          '[SillyTavern 리뷰](/ko/local-llms/sillytavern-review) — 로어북을 지원하는 셀프 호스팅 캐릭터 채팅 프런트엔드.',
          '[SillyTavern vs. Agnai vs. RisuAI](/ko/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 세 가지 롤플레이 프런트엔드 비교.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
        ],
      },
    },
  },
}
