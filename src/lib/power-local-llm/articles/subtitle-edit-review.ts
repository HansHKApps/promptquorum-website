// Subtitle Edit Review: Local Whisper Transcription and Auto-Translate
// Slug: subtitle-edit-review
// Companion to: whisper-cpp-review, macwhisper-review, local-llm-voice-audio-compared
// Sources: GitHub repository SubtitleEdit/subtitleedit (API, README, Releases, change-log.txt) and the documentation site
// subtitleedit.github.io/subtitleedit (features/speech-to-text, features/auto-translate, features/auto-translate-advanced,
// third-party-components, faq), all checked 2026-10-24 — no hands-on testing. The official site nikse.dk/subtitleedit is
// JavaScript-rendered and its text was not read. Free (MIT); no prices to localize.

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
    heroImage: '/images/subtitle-edit-review-hero-en.webp',
    title: 'Subtitle Edit Review: Local Whisper Transcription and Auto-Translate',
    seoTitle: 'Subtitle Edit Review: Local Whisper and Auto-Translate',
    intro:
      'Subtitle Edit is a free, open-source subtitle editor for Windows, macOS and Linux from [Nikse](https://www.nikse.dk/subtitleedit) and a group of contributors. Besides editing and converting subtitle files, it can transcribe a video with Whisper-family engines and translate subtitles with local or cloud models, which is the part this review covers. It is based on the project\'s GitHub page, release notes and documentation, checked on 24 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'Subtitle Edit review: free MIT-licensed subtitle editor with local Whisper-family transcription and local-LLM or cloud auto-translate; read, not tested.',
    twitterDescription:
      'Subtitle Edit review: transcribe with local Whisper engines and translate with Ollama, LM Studio or cloud APIs. Free and MIT-licensed; what the docs confirm and what we could not check.',
    audience:
      'Subtitlers, video editors and creators who want to transcribe and translate subtitles on their own computer and need to know which parts run locally, what they download and what stays unverified.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Subtitle Edit review',
    targetKeywords: [
      'subtitle edit review',
      'subtitle edit whisper',
      'subtitle edit auto translate',
      'local whisper subtitle generator',
      'offline subtitle translation ollama',
      'open source subtitle editor',
      'subtitle edit speech to text',
    ],
    current_models_mentioned: ['Whisper', 'Qwen3 ASR', 'Parakeet', 'TranslateGemma'],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Apple Metal', 'Vulkan'],
    leadAnswerBlock:
      '**Subtitle Edit (stable version 5.3.0, released on 14 October 2026) is a free, MIT-licensed subtitle editor for Windows, macOS and Linux that can run Whisper-family speech-to-text and local-LLM auto-translate on your own computer.** The AI engines are optional downloads, and the cloud engines it also lists send data to the provider you pick. Every statement here comes from the project\'s own pages, not from testing.',
    quickAnswerTop: {
      en: {
        question: 'Can Subtitle Edit transcribe and translate subtitles locally?',
        answer:
          'Per its documentation, yes: it downloads Whisper-family and other speech-to-text engines and can translate through llama.cpp, Ollama or LM Studio models running on your machine. The same dialogs also list online engines that need an API key and send data to a third party.',
        bullets: [
          'Video, then Speech to text, offers Whisper CPP, Purfview Faster Whisper XXL, WhisperX and further engines.',
          'Translate, then Auto-translate, lists local and cloud engines in one dropdown.',
          'Batch mode and the seconv command line handle many files in one run.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Subtitle Edit?', anchor: 'what-is-subtitle-edit' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Requirements', anchor: 'requirements' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Data Flow and Privacy', anchor: 'privacy' },
      { label: 'Who Should Use It', anchor: 'who-should-use' },
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
            text: 'Subtitle Edit is an open-source desktop subtitle editor whose speech-to-text and auto-translate dialogs can use engines that run on your own computer.',
          },
          {
            type: 'plain-terms',
            text: 'You open a video, pick a Whisper-style engine and a model, get a timed subtitle file, and then translate it with a local model or an online service of your choice.',
          },
        ],
        items: [
          'Maintenance: a pre-release, version 5.4.0-beta6, was published on 24 October 2026 on top of the stable 5.3.0, so no stale-project warning applies.',
          'Speech to text: Whisper-family and other engines that run on the machine, plus a few online ones.',
          'Translation: local llama.cpp, Ollama or LM Studio models, or cloud APIs with your own key.',
          'Cost: free under the MIT license, with no ads or limits according to the project\'s FAQ.',
          'Maker: Nikse with contributors, with the full source code on GitHub.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the GitHub repository, its release notes and the project documentation, checked on 24 October 2026. PromptQuorum has not installed or run the app, so transcription and translation quality are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-subtitle-edit',
        title: 'What Is Subtitle Edit?',
        content: [
          '**Subtitle Edit is a desktop editor for creating, synchronizing, converting and translating subtitles, and its newer versions add AI features around that core.** The project FAQ says it supports more than 380 subtitle formats, and the Windows, macOS and Linux builds are published on the project\'s [GitHub Releases page](https://github.com/SubtitleEdit/subtitleedit/releases).',
          'The AI parts are separate from the editor: speech to text, auto-translate, optical character recognition (OCR) and text to speech each use engines that the app downloads on first use or connects to over an API. This review concentrates on speech to text and auto-translate; the documentation calls the current generation Subtitle Edit 5.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Subtitle Edit is a free download for Windows, macOS and Linux, with an installer or disk image on every platform.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          { 'Option': 'Windows', 'How to get it': 'Installer (Setup.exe) or portable zip for x64; zip for ARM64, from [GitHub Releases](https://github.com/SubtitleEdit/subtitleedit/releases)' },
          { 'Option': 'macOS', 'How to get it': '.dmg for Apple silicon or Intel, drag to Applications; signed and notarized per the README' },
          { 'Option': 'Linux', 'How to get it': 'Flatpak (bundles mpv and ffmpeg) or tar.gz for x64 and ARM64' },
          { 'Option': 'Website', 'How to get it': '[nikse.dk/subtitleedit](https://www.nikse.dk/subtitleedit)' },
          { 'Option': 'Privacy policy', 'How to get it': 'No separate page; the [Privacy section of the README](https://github.com/SubtitleEdit/subtitleedit#-privacy) is the maker\'s statement' },
          { 'Option': 'Source code', 'How to get it': '[github.com/SubtitleEdit/subtitleedit](https://github.com/SubtitleEdit/subtitleedit), MIT license' },
        ],
        note: 'Version reviewed: 5.3.0, the release GitHub marks as the latest stable one, published on 14 October 2026; beta builds of 5.4.0 are marked as pre-releases. The 5.3.0 files are 59 to 155 MB before any engine or model download.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**The README asks for Windows 10 version 22H2 or newer, macOS 12 or newer (macOS 14 recommended) and, on Linux, mpv and ffmpeg for the tar.gz builds.**',
        ],
        columns: ['Item', 'What the sources say'],
        rows: [
          { 'Item': 'Operating system', 'What the sources say': 'Windows 10 22H2 or newer; macOS 12 or newer, 14 or newer recommended; Linux per the README package list' },
          { 'Item': 'Linux packages', 'What the sources say': 'The tar.gz builds need mpv and ffmpeg from the package manager; the Flatpak and the macOS .dmg bundle them' },
          { 'Item': 'Engine downloads', 'What the sources say': 'Engines and models are fetched on first use; the Crisp ASR model list runs from 75 MB to 9.4 GB per model' },
          { 'Item': 'Translation models', 'What the sources say': 'The curated llama.cpp models are mostly under 8 GB and the largest is about 12 GB' },
          { 'Item': 'GPU acceleration', 'What the sources say': 'Whisper CPP offers CPU, NVIDIA cuBLAS and Vulkan on Windows; the changelog names Metal on macOS and Vulkan on Linux' },
          { 'Item': 'Internet', 'What the sources say': 'Needed for engine and model downloads and for any online engine; local engines then run offline' },
        ],
        note: 'The documentation gives no RAM or VRAM minimum for the app; needs depend on the engine and model you choose, and a "CUDA out of memory" error is answered with a smaller model.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**The steps follow the project\'s documentation; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Install and open a video',
            whyItMatters: 'Run the installer, dmg or Flatpak, then open a video file or an existing subtitle in Subtitle Edit.',
          },
          {
            title: 'Transcribe with Video, Speech to text',
            whyItMatters: 'Choose an engine and a model, set the audio language or auto-detect, and let the app download the engine on first use before you click Transcribe.',
          },
          {
            title: 'Check the result',
            whyItMatters: 'Adjust post-processing, read the quality report that flags too-short, too-long, overlapping or repeated lines, and fix the grid by hand.',
          },
          {
            title: 'Translate with Translate, Auto-translate',
            whyItMatters: 'Pick an engine and the language pair, translate, review the original and translated text side by side, and confirm with OK.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the project documentation or release notes; none has been tested by PromptQuorum.**',
        ],
        items: [
          '**Speech-to-text engines.** Whisper CPP, Purfview Faster Whisper XXL, Whisper CTranslate2, Whisper Const-me (Windows), WhisperX and the Python Whisper workflow, plus Qwen3 ASR CPP and Crisp ASR with backends such as Parakeet and Canary; online options are OpenRouter, Alibaba Qwen3-ASR and Google Cloud Speech-to-Text.',
          '**Transcription helpers.** Batch mode, automatic language detection, voice activity detection settings, optional "Translate to English" for Whisper, post-processing and the quality report.',
          '**Local translation.** A managed llama.cpp server with curated models such as TranslateGemma, Gemma 4 and Qwen, Ollama, LM Studio, and "advanced" variants that translate in batches with context, a synopsis and a glossary; a MADLAD engine covers 419 languages.',
          '**Cloud translation.** Google Translate, Microsoft Bing, DeepL, ChatGPT, Anthropic, Gemini and others, mostly with your own API key, and an OpenAI-compatible engine for any server that speaks that API.',
          '**Around the core.** A video player with waveform, OCR for image subtitles, text to speech and generated background music, as listed in the documentation.',
        ],
        note: 'The AI features are optional; the editing and conversion tools work without any engine installed.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**The README says Subtitle Edit does not collect, store, transmit or analyze your subtitle files, media files or metadata, and that editing, conversion, playback and local auto-backup run on your device.** Local engines such as Whisper CPP, llama.cpp, Ollama and LM Studio process audio or text on your machine, or on a server you point the app at.',
          'The exception is what you switch on yourself. Per the README, optional online services for translation, speech to text, text to speech, OCR or dictionary lookups receive only the data needed for that request, directly from the app, under the provider\'s own privacy policy. The engine descriptions mark Google Translate, DeepL, ChatGPT, Anthropic, Gemini and the online speech engines as services that need internet access, most of them an API key. The OpenAI-compatible and llama.cpp "remote server" settings send text to whatever address you enter.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maker\'s declarations, not audit results. The code is open, but PromptQuorum has not read it or inspected the app\'s network traffic, and the hosts the engines and models are downloaded from were not checked.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Subtitlers and video editors** who want transcription, timing and translation in one editor instead of several tools.',
          '**Privacy-minded creators** who prefer a local Whisper engine and a local translation model over uploading media.',
          '**Anyone handling a whole series of episodes**, who needs the same conversion or translation applied to every file.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Accuracy and quality.** PromptQuorum did not run any speech or translation engine, so word error rates, hallucinations and translation quality are not assessed.',
          '**Speed and hardware.** No timings or memory figures were measured; the effect of the CUDA, Vulkan and Metal backends on real files is untested.',
          '**The official website text.** The page at nikse.dk is rendered with JavaScript and was not read; facts here come from GitHub and the documentation site.',
          '**Download sources.** The documentation says engines and models download automatically, but which servers they come from was not checked.',
          '**Pre-release stability.** Version 5.4.0 is still in beta, and the 5.3.0 stable line was itself preceded by dozens of beta and release-candidate builds, so behavior may change quickly.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[Whisper.cpp](/power-local-llm/whisper-cpp-review)', 'Platforms': 'Windows, macOS, Linux', 'Price / license': 'Free / MIT', 'Key difference': 'The engine Subtitle Edit lists as Whisper CPP; a command-line and library tool without a subtitle editor' },
          { 'App': '[faster-whisper](/power-local-llm/faster-whisper-review)', 'Platforms': 'Windows, macOS, Linux', 'Price / license': 'Free / MIT', 'Key difference': 'Python library for fast Whisper transcription; you build the subtitle workflow yourself' },
          { 'App': '[MacWhisper](/power-local-llm/macwhisper-review)', 'Platforms': 'macOS', 'Price / license': 'Freemium / proprietary', 'Key difference': 'Mac app focused on transcription with a one-time purchase; Subtitle Edit adds format editing and engine choice' },
          { 'App': '[TranscriptionSuite](/power-local-llm/transcriptionsuite-review)', 'Platforms': 'Windows, macOS, Linux', 'Price / license': 'Free / GPL-3.0', 'Key difference': 'Local transcription with live mode, speaker labels and an audio notebook, per its directory entry' },
        ],
        note: 'Confirm each app\'s current price, license and platforms on its own page before choosing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Do I need internet for the first transcription?',
            a: 'Yes, once: the app downloads the chosen engine and model on first use. The third-party components page also describes placing the files by hand in the app\'s data folder, which on Windows is %APPDATA%\\Subtitle Edit and on Linux and macOS ~/.config/Subtitle Edit.',
          },
          {
            q: 'Which Whisper engine suits an NVIDIA graphics card?',
            a: 'The documentation recommends the Whisper CPP cuBLAS backend or Purfview Faster Whisper XXL for the fastest transcription on NVIDIA GPUs, and a smaller model if you hit a CUDA out-of-memory error.',
          },
          {
            q: 'Can it label who is speaking?',
            a: 'Yes, with the Crisp ASR engine. "Detect speakers" uses NVIDIA\'s Sortformer diarization for up to 8 speakers, downloads a 107 MB model on first use and needs Crisp ASR v0.8.37 or newer.',
          },
          {
            q: 'Can I use a translation model that is not in the list?',
            a: 'Yes. Drop a .gguf file into the llama.cpp/models folder or tick "Use remote server" and point to your own llama-server. The docs note that TranslateGemma 27B needs roughly a 16 GB download and about 20 GB of VRAM, and call the 12B model already a strong choice.',
          },
          {
            q: 'Can I run it without the graphical interface?',
            a: 'Yes, through seconv, the command-line converter published with every release. Its auto-translate supports openai-compatible and DeepL engines, a --translate-api-key option and a --translate-prompt option.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Subtitle Edit is a long-running, free and openly licensed editor that now bundles local Whisper-family transcription and local-LLM translation next to its classic subtitle tools, and its change log shows four pre-releases between 20 and 24 October 2026. Against that, the AI engines are separate downloads of up to several gigabytes, cloud engines send your text or audio to third parties, the newest line is still in beta, and nothing about output quality could be checked here. It suits people who already work with subtitles and want one place to transcribe and translate on their own machine; anyone who only needs a transcript may find a dedicated transcription tool simpler.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Subtitle Edit on GitHub](https://github.com/SubtitleEdit/subtitleedit) — repository, MIT license and README with system requirements and the Privacy section, checked 24 October 2026.',
          '[GitHub Releases](https://github.com/SubtitleEdit/subtitleedit/releases) — v5.3.0 (14 October 2026), pre-release v5.4.0-beta6 (24 October 2026), download assets and the change log, checked 24 October 2026.',
          '[Speech to Text documentation](https://subtitleedit.github.io/subtitleedit/features/speech-to-text.html) — engines, models, Crisp ASR backends, speaker detection and tips, checked 24 October 2026.',
          '[Auto Translate documentation](https://subtitleedit.github.io/subtitleedit/features/auto-translate.html) and [Advanced Local Engines](https://subtitleedit.github.io/subtitleedit/features/auto-translate-advanced.html) — translation engines, custom models and batch settings, checked 24 October 2026.',
          '[Third-Party Components](https://subtitleedit.github.io/subtitleedit/third-party-components.html) and [FAQ](https://subtitleedit.github.io/subtitleedit/faq.html) — data folder, component locations, formats and license, checked 24 October 2026.',
          '[Subtitle Edit website](https://www.nikse.dk/subtitleedit) — official site; JavaScript-rendered, its text was not read for this review.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Whisper.cpp Review](/power-local-llm/whisper-cpp-review) — the local engine behind one of Subtitle Edit\'s speech-to-text options.',
          '[MacWhisper Review](/power-local-llm/macwhisper-review) — a Mac transcription app with a one-time purchase.',
          '[Voice and Audio Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — the category comparison this review belongs to.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Subtitle Edit Review: Local Whisper Transcription and Auto-Translate',
      description:
        'Subtitle Edit review: a free, MIT-licensed subtitle editor with local Whisper-family speech to text and local or cloud auto-translate. Requirements, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/subtitle-edit-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Subtitlers and creators evaluating local speech-to-text and auto-translate in a subtitle editor' },
      about: [
        { '@type': 'Thing', name: 'Subtitle Edit' },
        { '@type': 'Thing', name: 'Whisper speech recognition' },
        { '@type': 'Thing', name: 'Automatic subtitle translation' },
        { '@type': 'Thing', name: 'Subtitle editor' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/subtitle-edit-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Subtitle Edit Review', item: 'https://www.promptquorum.com/power-local-llm/subtitle-edit-review' },
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
    heroImage: '/images/subtitle-edit-review-hero-de.webp',
    title: 'Subtitle-Edit-Rezension: lokale Whisper-Transkription und Auto-Übersetzung',
    seoTitle: 'Subtitle-Edit-Rezension: lokales Whisper und Übersetzung',
    intro:
      'Subtitle Edit ist ein kostenloser Open-Source-Untertiteleditor für Windows, macOS und Linux von [Nikse](https://www.nikse.dk/subtitleedit) und mehreren Mitwirkenden. Neben dem Bearbeiten und Konvertieren von Untertiteldateien kann das Programm ein Video mit Whisper-Engines transkribieren und Untertitel mit lokalen oder Cloud-Modellen übersetzen; genau darum geht es in dieser Rezension. Sie stützt sich auf die GitHub-Seite des Projekts, die Release Notes und die Dokumentation, geprüft am 24. Oktober 2026; PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'Subtitle-Edit-Rezension: kostenloser Untertiteleditor (MIT) mit lokaler Whisper-Transkription und Übersetzung per lokalem LLM oder Cloud; nur gelesen.',
    twitterDescription:
      'Subtitle-Edit-Rezension: mit lokalen Whisper-Engines transkribieren und mit Ollama, LM Studio oder Cloud-APIs übersetzen. Kostenlos und MIT-lizenziert; was die Doku bestätigt und was wir nicht prüfen konnten.',
    audience:
      'Untertitler, Videoeditoren und Kreative, die Untertitel auf dem eigenen Rechner transkribieren und übersetzen möchten und wissen müssen, welche Teile lokal laufen, was heruntergeladen wird und was ungeprüft bleibt.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Subtitle Edit Rezension',
    targetKeywords: [
      'subtitle edit rezension',
      'subtitle edit whisper',
      'subtitle edit automatisch übersetzen',
      'lokaler whisper untertitel generator',
      'offline untertitel übersetzung ollama',
      'open source untertitel editor',
      'subtitle edit sprache zu text',
    ],
    current_models_mentioned: ['Whisper', 'Qwen3 ASR', 'Parakeet', 'TranslateGemma'],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Apple Metal', 'Vulkan'],
    leadAnswerBlock:
      '**Subtitle Edit (stabile Version 5.3.0, veröffentlicht am 14. Oktober 2026) ist ein kostenloser, MIT-lizenzierter Untertiteleditor für Windows, macOS und Linux, der Whisper-Spracherkennung und Auto-Übersetzung mit lokalen LLMs auf Ihrem eigenen Rechner ausführen kann.** Die KI-Engines sind optionale Downloads, und die ebenfalls aufgeführten Cloud-Engines senden Daten an den Anbieter Ihrer Wahl. Jede Aussage hier stammt von den eigenen Seiten des Projekts, nicht aus einem Test.',
    quickAnswerTop: {
      de: {
        question: 'Kann Subtitle Edit Untertitel lokal transkribieren und übersetzen?',
        answer:
          'Laut Dokumentation ja: Das Programm lädt Whisper-Engines und andere Spracherkennungs-Engines herunter und kann über llama.cpp-, Ollama- oder LM-Studio-Modelle übersetzen, die auf Ihrem Rechner laufen. Dieselben Dialoge führen aber auch Online-Engines auf, die einen API-Schlüssel brauchen und Daten an Dritte senden.',
        bullets: [
          'Unter Video, Speech to text stehen Whisper CPP, Purfview Faster Whisper XXL, WhisperX und weitere Engines bereit.',
          'Unter Translate, Auto-translate stehen lokale und Cloud-Engines in einer Auswahlliste.',
          'Der Batch-Modus und die Kommandozeile seconv verarbeiten viele Dateien in einem Durchlauf.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Subtitle Edit?', anchor: 'what-is-subtitle-edit' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Anforderungen', anchor: 'requirements' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Datenfluss und Datenschutz', anchor: 'privacy' },
      { label: 'Für wen sich die App eignet', anchor: 'who-should-use' },
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
            text: 'Subtitle Edit ist ein quelloffener Desktop-Untertiteleditor, dessen Dialoge für Spracherkennung und Auto-Übersetzung Engines nutzen können, die auf Ihrem eigenen Rechner laufen.',
          },
          {
            type: 'plain-terms',
            text: 'Sie öffnen ein Video, wählen eine Whisper-artige Engine und ein Modell, erhalten eine zeitlich abgestimmte Untertiteldatei und übersetzen diese mit einem lokalen Modell oder einem Online-Dienst Ihrer Wahl.',
          },
        ],
        items: [
          'Pflege: Eine Vorabversion, 5.4.0-beta6, erschien am 24. Oktober 2026 auf Basis der stabilen 5.3.0; ein Warnhinweis für veraltete Projekte entfällt daher.',
          'Spracherkennung: Whisper-Engines und andere Engines, die auf dem Rechner laufen, dazu einige Online-Engines.',
          'Übersetzung: lokale Modelle über llama.cpp, Ollama oder LM Studio oder Cloud-APIs mit eigenem Schlüssel.',
          'Kosten: kostenlos unter der MIT-Lizenz, laut FAQ des Projekts ohne Werbung und ohne Einschränkungen.',
          'Hersteller: Nikse mit Mitwirkenden, der vollständige Quellcode liegt auf GitHub.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf das GitHub-Repository, die Release Notes und die Projektdokumentation, geprüft am 24. Oktober 2026. PromptQuorum hat die App weder installiert noch ausgeführt; die Qualität von Transkription und Übersetzung wird daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-subtitle-edit',
        title: 'Was ist Subtitle Edit?',
        content: [
          '**Subtitle Edit ist ein Desktop-Editor zum Erstellen, Synchronisieren, Konvertieren und Übersetzen von Untertiteln, dessen neuere Versionen um diesen Kern herum KI-Funktionen ergänzen.** Laut FAQ des Projekts unterstützt er mehr als 380 Untertitelformate, und die Builds für Windows, macOS und Linux erscheinen auf der [GitHub-Releases-Seite](https://github.com/SubtitleEdit/subtitleedit/releases) des Projekts.',
          'Die KI-Teile sind vom Editor getrennt: Spracherkennung, Auto-Übersetzung, Texterkennung (OCR) und Sprachausgabe nutzen jeweils Engines, die die App beim ersten Einsatz herunterlädt oder über eine API anbindet. Diese Rezension konzentriert sich auf Spracherkennung und Auto-Übersetzung; die Dokumentation nennt die aktuelle Generation Subtitle Edit 5.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Subtitle Edit ist ein kostenloser Download für Windows, macOS und Linux, auf jeder Plattform als Installer oder Disk-Image.**',
        ],
        columns: ['Option', 'Bezug'],
        rows: [
          { 'Option': 'Windows', 'Bezug': 'Installer (Setup.exe) oder portable Zip-Datei für x64, Zip für ARM64, über [GitHub Releases](https://github.com/SubtitleEdit/subtitleedit/releases)' },
          { 'Option': 'macOS', 'Bezug': '.dmg für Apple Silicon oder Intel, in „Programme“ ziehen; laut README signiert und notarisiert' },
          { 'Option': 'Linux', 'Bezug': 'Flatpak (enthält mpv und ffmpeg) oder tar.gz für x64 und ARM64' },
          { 'Option': 'Website', 'Bezug': '[nikse.dk/subtitleedit](https://www.nikse.dk/subtitleedit)' },
          { 'Option': 'Datenschutzerklärung', 'Bezug': 'Keine eigene Seite; der [Abschnitt „Privacy“ der README](https://github.com/SubtitleEdit/subtitleedit#-privacy) ist die Erklärung des Herstellers' },
          { 'Option': 'Quellcode', 'Bezug': '[github.com/SubtitleEdit/subtitleedit](https://github.com/SubtitleEdit/subtitleedit), MIT-Lizenz' },
        ],
        note: 'Geprüfte Version: 5.3.0, die von GitHub als neueste stabile Version markierte Veröffentlichung vom 14. Oktober 2026; Beta-Builds von 5.4.0 sind als Vorabversionen markiert. Die Dateien von 5.3.0 sind 59 bis 155 MB groß, bevor eine Engine oder ein Modell heruntergeladen wird.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
          '**Die README verlangt Windows 10 Version 22H2 oder neuer, macOS 12 oder neuer (macOS 14 empfohlen) und unter Linux mpv und ffmpeg für die tar.gz-Builds.**',
        ],
        columns: ['Punkt', 'Angaben der Quellen'],
        rows: [
          { 'Punkt': 'Betriebssystem', 'Angaben der Quellen': 'Windows 10 22H2 oder neuer; macOS 12 oder neuer, ab 14 empfohlen; Linux laut Paketliste der README' },
          { 'Punkt': 'Linux-Pakete', 'Angaben der Quellen': 'Die tar.gz-Builds brauchen mpv und ffmpeg aus der Paketverwaltung; Flatpak und macOS-.dmg enthalten sie' },
          { 'Punkt': 'Engine-Downloads', 'Angaben der Quellen': 'Engines und Modelle werden beim ersten Einsatz geladen; die Modellliste von Crisp ASR reicht von 75 MB bis 9,4 GB je Modell' },
          { 'Punkt': 'Übersetzungsmodelle', 'Angaben der Quellen': 'Die kuratierten llama.cpp-Modelle sind meist kleiner als 8 GB, das größte hat etwa 12 GB' },
          { 'Punkt': 'GPU-Beschleunigung', 'Angaben der Quellen': 'Whisper CPP bietet unter Windows CPU, NVIDIA cuBLAS und Vulkan; das Änderungsprotokoll nennt Metal unter macOS und Vulkan unter Linux' },
          { 'Punkt': 'Internet', 'Angaben der Quellen': 'Nötig für Engine- und Modell-Downloads und für jede Online-Engine; lokale Engines laufen danach offline' },
        ],
        note: 'Die Dokumentation nennt kein RAM- oder VRAM-Minimum für die App; der Bedarf hängt von Engine und Modell ab, und auf einen „CUDA out of memory“-Fehler wird mit einem kleineren Modell geantwortet.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Schritte folgen der Dokumentation des Projekts; PromptQuorum hat sie nicht selbst durchgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Installieren und ein Video öffnen',
            whyItMatters: 'Führen Sie Installer, dmg oder Flatpak aus und öffnen Sie dann in Subtitle Edit eine Videodatei oder einen vorhandenen Untertitel.',
          },
          {
            title: 'Mit Video, Speech to text transkribieren',
            whyItMatters: 'Wählen Sie eine Engine und ein Modell, stellen Sie die Sprache des Tons ein oder lassen Sie sie erkennen, und lassen Sie die App die Engine beim ersten Einsatz laden, bevor Sie auf Transcribe klicken.',
          },
          {
            title: 'Das Ergebnis prüfen',
            whyItMatters: 'Passen Sie die Nachbearbeitung an, lesen Sie den Qualitätsbericht, der zu kurze, zu lange, überlappende oder wiederholte Zeilen markiert, und korrigieren Sie das Raster von Hand.',
          },
          {
            title: 'Mit Translate, Auto-translate übersetzen',
            whyItMatters: 'Wählen Sie eine Engine und das Sprachpaar, übersetzen Sie, prüfen Sie Original und Übersetzung nebeneinander und bestätigen Sie mit OK.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt aus der Projektdokumentation oder den Release Notes; keiner wurde von PromptQuorum getestet.**',
        ],
        items: [
          '**Spracherkennungs-Engines.** Whisper CPP, Purfview Faster Whisper XXL, Whisper CTranslate2, Whisper Const-me (Windows), WhisperX und der Python-Workflow von Whisper, dazu Qwen3 ASR CPP und Crisp ASR mit Backends wie Parakeet und Canary; online stehen OpenRouter, Alibaba Qwen3-ASR und Google Cloud Speech-to-Text zur Wahl.',
          '**Hilfen bei der Transkription.** Batch-Modus, automatische Spracherkennung, Einstellungen zur Sprachaktivitätserkennung, optional „Translate to English“ für Whisper, Nachbearbeitung und der Qualitätsbericht.',
          '**Lokale Übersetzung.** Ein verwalteter llama.cpp-Server mit kuratierten Modellen wie TranslateGemma, Gemma 4 und Qwen, Ollama, LM Studio sowie „advanced“-Varianten, die in Stapeln mit Kontext, Zusammenfassung und Glossar übersetzen; eine MADLAD-Engine deckt 419 Sprachen ab.',
          '**Cloud-Übersetzung.** Google Translate, Microsoft Bing, DeepL, ChatGPT, Anthropic, Gemini und weitere, meist mit eigenem API-Schlüssel, dazu eine OpenAI-kompatible Engine für jeden Server, der diese API spricht.',
          '**Rund um den Kern.** Ein Videoplayer mit Wellenform, OCR für Bild-Untertitel, Sprachausgabe und erzeugte Hintergrundmusik, wie in der Dokumentation aufgeführt.',
        ],
        note: 'Die KI-Funktionen sind optional; die Bearbeitungs- und Konvertierungswerkzeuge funktionieren auch ohne installierte Engine.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Laut README erfasst, speichert, überträgt und analysiert Subtitle Edit weder Ihre Untertiteldateien noch Mediendateien oder Metadaten, und Bearbeitung, Konvertierung, Wiedergabe sowie die lokale automatische Sicherung laufen auf Ihrem Gerät.** Lokale Engines wie Whisper CPP, llama.cpp, Ollama und LM Studio verarbeiten Audio oder Text auf Ihrem Rechner oder auf einem Server, auf den Sie die App verweisen.',
          'Die Ausnahme ist, was Sie selbst einschalten. Laut README erhalten optionale Online-Dienste für Übersetzung, Spracherkennung, Sprachausgabe, OCR oder Wörterbuchabfragen nur die für die jeweilige Anfrage nötigen Daten, direkt von der App und unter der Datenschutzerklärung des Anbieters. Die Engine-Beschreibungen kennzeichnen Google Translate, DeepL, ChatGPT, Anthropic, Gemini und die Online-Spracherkennung als Dienste, die Internetzugang und meist einen API-Schlüssel brauchen. Die Einstellungen „OpenAI-kompatibel“ und „llama.cpp remote server“ senden Text an die Adresse, die Sie eintragen.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Angaben des Herstellers, keine Prüfergebnisse. Der Code ist offen, aber PromptQuorum hat ihn nicht gelesen und den Netzwerkverkehr der App nicht untersucht; auch die Server, von denen Engines und Modelle geladen werden, wurden nicht geprüft.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Untertitler und Videoeditoren**, die Transkription, Timing und Übersetzung in einem Editor statt in mehreren Werkzeugen erledigen möchten.',
          '**Datenschutzbewusste Kreative**, die eine lokale Whisper-Engine und ein lokales Übersetzungsmodell dem Hochladen von Medien vorziehen.',
          '**Alle, die eine ganze Serie von Folgen bearbeiten** und auf jede Datei dieselbe Konvertierung oder Übersetzung anwenden müssen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Genauigkeit und Qualität.** PromptQuorum hat keine Spracherkennungs- oder Übersetzungs-Engine ausgeführt; Wortfehlerraten, Halluzinationen und Übersetzungsqualität werden daher nicht bewertet.',
          '**Geschwindigkeit und Hardware.** Es wurden keine Zeiten oder Speicherwerte gemessen; die Wirkung der Backends CUDA, Vulkan und Metal auf echte Dateien ist ungetestet.',
          '**Der Text der offiziellen Website.** Die Seite unter nikse.dk wird mit JavaScript gerendert und wurde nicht gelesen; die Angaben hier stammen von GitHub und der Dokumentationsseite.',
          '**Download-Quellen.** Die Dokumentation sagt, dass Engines und Modelle automatisch geladen werden, aber von welchen Servern, wurde nicht geprüft.',
          '**Stabilität der Vorabversion.** Version 5.4.0 ist noch in der Beta, und dem stabilen 5.3.0 gingen selbst Dutzende Beta- und Release-Candidate-Builds voraus; das Verhalten kann sich schnell ändern.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          { 'App': '[Whisper.cpp](/de/power-local-llm/whisper-cpp-review)', 'Plattformen': 'Windows, macOS, Linux', 'Preis / Lizenz': 'Kostenlos / MIT', 'Wichtigster Unterschied': 'Die Engine, die Subtitle Edit als Whisper CPP aufführt; ein Kommandozeilen- und Bibliothekswerkzeug ohne Untertiteleditor' },
          { 'App': '[faster-whisper](/de/power-local-llm/faster-whisper-review)', 'Plattformen': 'Windows, macOS, Linux', 'Preis / Lizenz': 'Kostenlos / MIT', 'Wichtigster Unterschied': 'Python-Bibliothek für schnelle Whisper-Transkription; den Untertitel-Workflow bauen Sie selbst' },
          { 'App': '[MacWhisper](/de/power-local-llm/macwhisper-review)', 'Plattformen': 'macOS', 'Preis / Lizenz': 'Freemium / proprietär', 'Wichtigster Unterschied': 'Mac-App mit Schwerpunkt Transkription und Einmalkauf; Subtitle Edit ergänzt Formatbearbeitung und Engine-Auswahl' },
          { 'App': '[TranscriptionSuite](/de/power-local-llm/transcriptionsuite-review)', 'Plattformen': 'Windows, macOS, Linux', 'Preis / Lizenz': 'Kostenlos / GPL-3.0', 'Wichtigster Unterschied': 'Lokale Transkription mit Live-Modus, Sprecherkennzeichnung und Audio-Notizbuch, laut ihrem Verzeichniseintrag' },
        ],
        note: 'Prüfen Sie aktuellen Preis, Lizenz und Plattformen jeder App auf ihrer eigenen Seite, bevor Sie sich entscheiden.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Brauche ich für die erste Transkription Internet?',
            a: 'Ja, einmalig: Die App lädt die gewählte Engine und das Modell beim ersten Einsatz herunter. Die Seite zu Drittkomponenten beschreibt auch, wie Sie die Dateien von Hand im Datenordner der App ablegen, der unter Windows %APPDATA%\\Subtitle Edit und unter Linux und macOS ~/.config/Subtitle Edit heißt.',
          },
          {
            q: 'Welche Whisper-Engine passt zu einer NVIDIA-Grafikkarte?',
            a: 'Die Dokumentation empfiehlt für die schnellste Transkription auf NVIDIA-GPUs das Whisper-CPP-Backend cuBLAS oder Purfview Faster Whisper XXL und bei einem CUDA-Speicherfehler ein kleineres Modell.',
          },
          {
            q: 'Kann die App kennzeichnen, wer spricht?',
            a: 'Ja, mit der Engine Crisp ASR. „Detect speakers“ nutzt die Sortformer-Diarisierung von NVIDIA für bis zu 8 Sprecher, lädt beim ersten Einsatz ein 107-MB-Modell und braucht Crisp ASR ab Version 0.8.37.',
          },
          {
            q: 'Kann ich ein Übersetzungsmodell verwenden, das nicht in der Liste steht?',
            a: 'Ja. Legen Sie eine .gguf-Datei im Ordner llama.cpp/models ab oder setzen Sie den Haken bei „Use remote server“ und verweisen Sie auf Ihren eigenen llama-server. Laut Doku braucht TranslateGemma 27B etwa 16 GB Download und rund 20 GB VRAM; das 12B-Modell gilt dort bereits als starke Wahl.',
          },
          {
            q: 'Kann ich die App ohne grafische Oberfläche nutzen?',
            a: 'Ja, über seconv, den Kommandozeilen-Konverter, der mit jedem Release erscheint. Seine Auto-Übersetzung unterstützt OpenAI-kompatible und DeepL-Engines sowie die Optionen --translate-api-key und --translate-prompt.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Subtitle Edit ist ein langlebiger, kostenloser und offen lizenzierter Editor, der neben den klassischen Untertitelwerkzeugen inzwischen lokale Whisper-Transkription und Übersetzung mit lokalen LLMs bündelt; das Änderungsprotokoll zeigt vier Vorabversionen zwischen dem 20. und 24. Oktober 2026. Dem stehen gegenüber: Die KI-Engines sind getrennte Downloads von bis zu mehreren Gigabyte, Cloud-Engines senden Ihren Text oder Ihr Audio an Dritte, die neueste Linie ist noch in der Beta, und zur Ausgabequalität ließ sich hier nichts prüfen. Die App passt zu Menschen, die ohnehin mit Untertiteln arbeiten und an einem Ort auf dem eigenen Rechner transkribieren und übersetzen möchten; wer nur ein Transkript braucht, findet in einem reinen Transkriptionswerkzeug möglicherweise den einfacheren Weg.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Subtitle Edit auf GitHub](https://github.com/SubtitleEdit/subtitleedit) — Repository, MIT-Lizenz und README mit Systemanforderungen und dem Abschnitt „Privacy“, geprüft am 24. Oktober 2026.',
          '[GitHub Releases](https://github.com/SubtitleEdit/subtitleedit/releases) — v5.3.0 (14. Oktober 2026), Vorabversion v5.4.0-beta6 (24. Oktober 2026), Download-Dateien und Änderungsprotokoll, geprüft am 24. Oktober 2026.',
          '[Dokumentation zu Speech to Text](https://subtitleedit.github.io/subtitleedit/features/speech-to-text.html) — Engines, Modelle, Crisp-ASR-Backends, Sprechererkennung und Tipps, geprüft am 24. Oktober 2026.',
          '[Dokumentation zu Auto Translate](https://subtitleedit.github.io/subtitleedit/features/auto-translate.html) und [Advanced Local Engines](https://subtitleedit.github.io/subtitleedit/features/auto-translate-advanced.html) — Übersetzungs-Engines, eigene Modelle und Stapel-Einstellungen, geprüft am 24. Oktober 2026.',
          '[Third-Party Components](https://subtitleedit.github.io/subtitleedit/third-party-components.html) und [FAQ](https://subtitleedit.github.io/subtitleedit/faq.html) — Datenordner, Speicherorte der Komponenten, Formate und Lizenz, geprüft am 24. Oktober 2026.',
          '[Website von Subtitle Edit](https://www.nikse.dk/subtitleedit) — offizielle Seite; mit JavaScript gerendert, ihr Text wurde für diese Rezension nicht gelesen.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Whisper.cpp-Rezension](/de/power-local-llm/whisper-cpp-review) — die lokale Engine hinter einer der Spracherkennungs-Optionen von Subtitle Edit.',
          '[MacWhisper-Rezension](/de/power-local-llm/macwhisper-review) — eine Mac-App für Transkription mit Einmalkauf.',
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
    heroImage: '/images/subtitle-edit-review-hero-es.webp',
    title: 'Reseña de Subtitle Edit: transcripción Whisper local y traducción automática',
    seoTitle: 'Reseña de Subtitle Edit: Whisper local y traducción',
    intro:
      'Subtitle Edit es un editor de subtítulos gratuito y de código abierto para Windows, macOS y Linux, creado por [Nikse](https://www.nikse.dk/subtitleedit) y un grupo de colaboradores. Además de editar y convertir archivos de subtítulos, puede transcribir un vídeo con motores de la familia Whisper y traducir subtítulos con modelos locales o en la nube, que es la parte de la que trata esta reseña. Se basa en la página de GitHub del proyecto, sus notas de versión y su documentación, consultadas el 24 de octubre de 2026; PromptQuorum no ha probado la app en persona.',
    metaDescription:
      'Reseña de Subtitle Edit: editor de subtítulos gratuito (MIT) con transcripción local tipo Whisper y traducción con LLM local o nube; leído, no probado.',
    twitterDescription:
      'Reseña de Subtitle Edit: transcribe con motores Whisper locales y traduce con Ollama, LM Studio o APIs en la nube. Gratis y con licencia MIT; lo que confirma la documentación y lo que no pudimos comprobar.',
    audience:
      'Subtituladores, editores de vídeo y creadores que quieren transcribir y traducir subtítulos en su propio equipo y necesitan saber qué partes se ejecutan en local, qué se descarga y qué queda sin verificar.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Subtitle Edit',
    targetKeywords: [
      'reseña subtitle edit',
      'subtitle edit whisper',
      'subtitle edit traducción automática',
      'generador de subtítulos whisper local',
      'traducción de subtítulos sin conexión ollama',
      'editor de subtítulos de código abierto',
      'subtitle edit voz a texto',
    ],
    current_models_mentioned: ['Whisper', 'Qwen3 ASR', 'Parakeet', 'TranslateGemma'],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Apple Metal', 'Vulkan'],
    leadAnswerBlock:
      '**Subtitle Edit (versión estable 5.3.0, publicada el 14 de octubre de 2026) es un editor de subtítulos gratuito con licencia MIT para Windows, macOS y Linux que puede ejecutar en tu propio equipo el reconocimiento de voz de la familia Whisper y la traducción automática con LLM locales.** Los motores de IA son descargas opcionales, y los motores en la nube que también lista envían datos al proveedor que elijas. Todo lo que se afirma aquí procede de las páginas del propio proyecto, no de pruebas.',
    quickAnswerTop: {
      es: {
        question: '¿Puede Subtitle Edit transcribir y traducir subtítulos en local?',
        answer:
          'Según su documentación, sí: descarga motores de reconocimiento de voz de la familia Whisper y otros, y puede traducir con modelos de llama.cpp, Ollama o LM Studio que se ejecutan en tu equipo. Los mismos diálogos también listan motores en línea que requieren una clave de API y envían datos a terceros.',
        bullets: [
          'En Video, Speech to text hay Whisper CPP, Purfview Faster Whisper XXL, WhisperX y otros motores.',
          'En Translate, Auto-translate se listan motores locales y en la nube en un mismo desplegable.',
          'El modo por lotes y la línea de comandos seconv procesan muchos archivos de una sola vez.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Subtitle Edit?', anchor: 'what-is-subtitle-edit' },
      { label: 'Dónde conseguirlo', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Flujo de datos y privacidad', anchor: 'privacy' },
      { label: 'Para quién es', anchor: 'who-should-use' },
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
            text: 'Subtitle Edit es un editor de subtítulos de escritorio y de código abierto cuyos diálogos de voz a texto y traducción automática pueden usar motores que se ejecutan en tu propio equipo.',
          },
          {
            type: 'plain-terms',
            text: 'Abres un vídeo, eliges un motor tipo Whisper y un modelo, obtienes un archivo de subtítulos con sus tiempos y luego lo traduces con un modelo local o un servicio en línea a tu elección.',
          },
        ],
        items: [
          'Mantenimiento: una versión preliminar, la 5.4.0-beta6, se publicó el 24 de octubre de 2026 sobre la estable 5.3.0, así que no se aplica ninguna advertencia de proyecto abandonado.',
          'Voz a texto: motores de la familia Whisper y otros que se ejecutan en el equipo, además de algunos en línea.',
          'Traducción: modelos locales de llama.cpp, Ollama o LM Studio, o APIs en la nube con tu propia clave.',
          'Coste: gratis con licencia MIT, sin anuncios ni límites según las preguntas frecuentes del proyecto.',
          'Creador: Nikse con colaboradores, con todo el código fuente en GitHub.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el repositorio de GitHub, sus notas de versión y la documentación del proyecto, consultados el 24 de octubre de 2026. PromptQuorum no ha instalado ni ejecutado la app, así que no se evalúa la calidad de la transcripción ni de la traducción.',
          },
        ],
      },
      overview: {
        id: 'what-is-subtitle-edit',
        title: '¿Qué es Subtitle Edit?',
        content: [
          '**Subtitle Edit es un editor de escritorio para crear, sincronizar, convertir y traducir subtítulos, y sus versiones más recientes añaden funciones de IA en torno a ese núcleo.** Las preguntas frecuentes del proyecto indican que admite más de 380 formatos de subtítulos, y las compilaciones para Windows, macOS y Linux se publican en la [página de versiones de GitHub](https://github.com/SubtitleEdit/subtitleedit/releases) del proyecto.',
          'Las partes de IA están separadas del editor: voz a texto, traducción automática, reconocimiento óptico de caracteres (OCR) y texto a voz usan cada uno motores que la app descarga la primera vez que se usan o a los que se conecta mediante una API. Esta reseña se centra en voz a texto y traducción automática; la documentación llama a la generación actual Subtitle Edit 5.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**Subtitle Edit es una descarga gratuita para Windows, macOS y Linux, con instalador o imagen de disco en cada plataforma.**',
        ],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
          { 'Opción': 'Windows', 'Cómo conseguirlo': 'Instalador (Setup.exe) o zip portátil para x64, zip para ARM64, en [GitHub Releases](https://github.com/SubtitleEdit/subtitleedit/releases)' },
          { 'Opción': 'macOS', 'Cómo conseguirlo': '.dmg para Apple silicon o Intel, se arrastra a Aplicaciones; firmado y notarizado según el README' },
          { 'Opción': 'Linux', 'Cómo conseguirlo': 'Flatpak (incluye mpv y ffmpeg) o tar.gz para x64 y ARM64' },
          { 'Opción': 'Sitio web', 'Cómo conseguirlo': '[nikse.dk/subtitleedit](https://www.nikse.dk/subtitleedit)' },
          { 'Opción': 'Política de privacidad', 'Cómo conseguirlo': 'No hay página aparte; la [sección Privacy del README](https://github.com/SubtitleEdit/subtitleedit#-privacy) es la declaración del creador' },
          { 'Opción': 'Código fuente', 'Cómo conseguirlo': '[github.com/SubtitleEdit/subtitleedit](https://github.com/SubtitleEdit/subtitleedit), licencia MIT' },
        ],
        note: 'Versión revisada: 5.3.0, la que GitHub marca como última estable, publicada el 14 de octubre de 2026; las compilaciones beta de 5.4.0 figuran como versiones preliminares. Los archivos de 5.3.0 pesan entre 59 y 155 MB antes de descargar cualquier motor o modelo.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**El README pide Windows 10 versión 22H2 o posterior, macOS 12 o posterior (se recomienda macOS 14) y, en Linux, mpv y ffmpeg para las compilaciones tar.gz.**',
        ],
        columns: ['Elemento', 'Qué dicen las fuentes'],
        rows: [
          { 'Elemento': 'Sistema operativo', 'Qué dicen las fuentes': 'Windows 10 22H2 o posterior; macOS 12 o posterior, se recomienda 14 o posterior; Linux según la lista de paquetes del README' },
          { 'Elemento': 'Paquetes en Linux', 'Qué dicen las fuentes': 'Las compilaciones tar.gz necesitan mpv y ffmpeg del gestor de paquetes; el Flatpak y el .dmg de macOS los incluyen' },
          { 'Elemento': 'Descargas de motores', 'Qué dicen las fuentes': 'Los motores y modelos se descargan al primer uso; la lista de modelos de Crisp ASR va de 75 MB a 9.4 GB por modelo' },
          { 'Elemento': 'Modelos de traducción', 'Qué dicen las fuentes': 'Los modelos curados de llama.cpp suelen pesar menos de 8 GB y el mayor ronda los 12 GB' },
          { 'Elemento': 'Aceleración por GPU', 'Qué dicen las fuentes': 'Whisper CPP ofrece CPU, NVIDIA cuBLAS y Vulkan en Windows; el registro de cambios menciona Metal en macOS y Vulkan en Linux' },
          { 'Elemento': 'Internet', 'Qué dicen las fuentes': 'Necesario para descargar motores y modelos y para cualquier motor en línea; después los locales funcionan sin conexión' },
        ],
        note: 'La documentación no da un mínimo de RAM ni de VRAM para la app; las necesidades dependen del motor y del modelo elegidos, y ante un error «CUDA out of memory» se recomienda un modelo más pequeño.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Los pasos siguen la documentación del proyecto; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Instalar y abrir un vídeo',
            whyItMatters: 'Ejecuta el instalador, el dmg o el Flatpak y abre en Subtitle Edit un archivo de vídeo o unos subtítulos existentes.',
          },
          {
            title: 'Transcribir con Video, Speech to text',
            whyItMatters: 'Elige un motor y un modelo, indica el idioma del audio o déjalo en detección automática, y deja que la app descargue el motor la primera vez antes de pulsar Transcribe.',
          },
          {
            title: 'Revisar el resultado',
            whyItMatters: 'Ajusta el posprocesado, lee el informe de calidad que señala líneas demasiado cortas, demasiado largas, solapadas o repetidas, y corrige la cuadrícula a mano.',
          },
          {
            title: 'Traducir con Translate, Auto-translate',
            whyItMatters: 'Elige un motor y el par de idiomas, traduce, revisa el original y la traducción lado a lado y confirma con OK.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada punto de abajo procede de la documentación del proyecto o de las notas de versión; PromptQuorum no ha probado ninguno.**',
        ],
        items: [
          '**Motores de voz a texto.** Whisper CPP, Purfview Faster Whisper XXL, Whisper CTranslate2, Whisper Const-me (Windows), WhisperX y el flujo de Whisper en Python, además de Qwen3 ASR CPP y Crisp ASR con backends como Parakeet y Canary; en línea hay OpenRouter, Alibaba Qwen3-ASR y Google Cloud Speech-to-Text.',
          '**Ayudas de transcripción.** Modo por lotes, detección automática del idioma, ajustes de detección de actividad de voz, «Translate to English» opcional para Whisper, posprocesado e informe de calidad.',
          '**Traducción local.** Un servidor llama.cpp gestionado con modelos curados como TranslateGemma, Gemma 4 y Qwen, Ollama, LM Studio y variantes «advanced» que traducen por lotes con contexto, sinopsis y glosario; un motor MADLAD cubre 419 idiomas.',
          '**Traducción en la nube.** Google Translate, Microsoft Bing, DeepL, ChatGPT, Anthropic, Gemini y otros, casi todos con tu propia clave de API, y un motor compatible con OpenAI para cualquier servidor que hable esa API.',
          '**Alrededor del núcleo.** Un reproductor de vídeo con forma de onda, OCR para subtítulos en imagen, texto a voz y música de fondo generada, según lista la documentación.',
        ],
        note: 'Las funciones de IA son opcionales; las herramientas de edición y conversión funcionan sin ningún motor instalado.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**El README afirma que Subtitle Edit no recopila, almacena, transmite ni analiza tus archivos de subtítulos, tus archivos multimedia ni sus metadatos, y que la edición, la conversión, la reproducción y la copia de seguridad automática local se ejecutan en tu dispositivo.** Los motores locales como Whisper CPP, llama.cpp, Ollama y LM Studio procesan audio o texto en tu equipo, o en un servidor al que apuntes la app.',
          'La excepción es lo que activas tú. Según el README, los servicios en línea opcionales de traducción, voz a texto, texto a voz, OCR o consulta de diccionarios reciben solo los datos necesarios para esa petición, directamente desde la app y bajo la política de privacidad del proveedor. Las descripciones de los motores señalan que Google Translate, DeepL, ChatGPT, Anthropic, Gemini y los motores de voz en línea son servicios que requieren acceso a internet y, casi siempre, una clave de API. Los ajustes «compatible con OpenAI» y «llama.cpp remote server» envían texto a la dirección que introduzcas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del creador, no resultados de una auditoría. El código es abierto, pero PromptQuorum no lo ha leído ni ha inspeccionado el tráfico de red de la app, y tampoco se comprobaron los servidores desde los que se descargan los motores y modelos.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Subtituladores y editores de vídeo** que quieren transcripción, sincronización y traducción en un solo editor en lugar de varias herramientas.',
          '**Creadores atentos a la privacidad** que prefieren un motor Whisper local y un modelo de traducción local antes que subir sus archivos.',
          '**Quienes trabajan con una serie entera de episodios** y necesitan aplicar la misma conversión o traducción a cada archivo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Precisión y calidad.** PromptQuorum no ejecutó ningún motor de voz ni de traducción, así que no se evalúan las tasas de error de palabras, las alucinaciones ni la calidad de la traducción.',
          '**Velocidad y hardware.** No se midieron tiempos ni consumo de memoria; el efecto de los backends CUDA, Vulkan y Metal en archivos reales no está probado.',
          '**El texto del sitio web oficial.** La página de nikse.dk se genera con JavaScript y no se leyó; los datos de aquí proceden de GitHub y del sitio de documentación.',
          '**Orígenes de las descargas.** La documentación dice que los motores y modelos se descargan automáticamente, pero no se comprobó desde qué servidores.',
          '**Estabilidad de la versión preliminar.** La versión 5.4.0 sigue en beta, y a la estable 5.3.0 la precedieron decenas de compilaciones beta y release candidate, de modo que el comportamiento puede cambiar rápido.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[Whisper.cpp](/es/power-local-llm/whisper-cpp-review)', 'Plataformas': 'Windows, macOS, Linux', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'El motor que Subtitle Edit lista como Whisper CPP; una herramienta de línea de comandos y biblioteca sin editor de subtítulos' },
          { 'App': '[faster-whisper](/es/power-local-llm/faster-whisper-review)', 'Plataformas': 'Windows, macOS, Linux', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Biblioteca de Python para transcripción rápida con Whisper; el flujo de subtítulos lo montas tú' },
          { 'App': '[MacWhisper](/es/power-local-llm/macwhisper-review)', 'Plataformas': 'macOS', 'Precio / licencia': 'Freemium / propietaria', 'Diferencia clave': 'App para Mac centrada en la transcripción con compra única; Subtitle Edit añade edición de formatos y elección de motor' },
          { 'App': '[TranscriptionSuite](/es/power-local-llm/transcriptionsuite-review)', 'Plataformas': 'Windows, macOS, Linux', 'Precio / licencia': 'Gratis / GPL-3.0', 'Diferencia clave': 'Transcripción local con modo en vivo, etiquetas de hablante y un cuaderno de audio, según su ficha del directorio' },
        ],
        note: 'Comprueba el precio, la licencia y las plataformas actuales de cada app en su propia página antes de decidir.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Necesito internet para la primera transcripción?',
            a: 'Sí, una vez: la app descarga el motor y el modelo elegidos la primera vez que se usan. La página de componentes de terceros también describe cómo colocar los archivos a mano en la carpeta de datos de la app, que en Windows es %APPDATA%\\Subtitle Edit y en Linux y macOS ~/.config/Subtitle Edit.',
          },
          {
            q: '¿Qué motor Whisper conviene con una tarjeta gráfica NVIDIA?',
            a: 'La documentación recomienda el backend cuBLAS de Whisper CPP o Purfview Faster Whisper XXL para la transcripción más rápida en GPU NVIDIA, y un modelo más pequeño si aparece un error de memoria CUDA.',
          },
          {
            q: '¿Puede indicar quién habla?',
            a: 'Sí, con el motor Crisp ASR. «Detect speakers» usa la diarización Sortformer de NVIDIA para hasta 8 hablantes, descarga un modelo de 107 MB la primera vez y requiere Crisp ASR v0.8.37 o posterior.',
          },
          {
            q: '¿Puedo usar un modelo de traducción que no está en la lista?',
            a: 'Sí. Copia un archivo .gguf en la carpeta llama.cpp/models o marca «Use remote server» y apunta a tu propio llama-server. La documentación indica que TranslateGemma 27B necesita una descarga de unos 16 GB y unos 20 GB de VRAM, y considera que el modelo de 12B ya es una opción sólida.',
          },
          {
            q: '¿Puedo usarlo sin la interfaz gráfica?',
            a: 'Sí, con seconv, el conversor de línea de comandos que se publica con cada versión. Su traducción automática admite motores compatibles con OpenAI y DeepL, y las opciones --translate-api-key y --translate-prompt.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Subtitle Edit es un editor veterano, gratuito y con licencia abierta que ahora reúne, junto a sus herramientas clásicas de subtítulos, la transcripción local con Whisper y la traducción con LLM locales; su registro de cambios muestra cuatro versiones preliminares entre el 20 y el 24 de octubre de 2026. En contra, los motores de IA son descargas aparte de hasta varios gigabytes, los motores en la nube envían tu texto o audio a terceros, la línea más reciente sigue en beta y aquí no se pudo comprobar nada sobre la calidad del resultado. Encaja con quienes ya trabajan con subtítulos y quieren un solo lugar para transcribir y traducir en su propio equipo; quien solo necesite una transcripción quizá encuentre más sencilla una herramienta dedicada a transcribir.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Subtitle Edit en GitHub](https://github.com/SubtitleEdit/subtitleedit) — repositorio, licencia MIT y README con los requisitos del sistema y la sección Privacy, consultados el 24 de octubre de 2026.',
          '[GitHub Releases](https://github.com/SubtitleEdit/subtitleedit/releases) — v5.3.0 (14 de octubre de 2026), versión preliminar v5.4.0-beta6 (24 de octubre de 2026), archivos de descarga y registro de cambios, consultados el 24 de octubre de 2026.',
          '[Documentación de Speech to Text](https://subtitleedit.github.io/subtitleedit/features/speech-to-text.html) — motores, modelos, backends de Crisp ASR, detección de hablantes y consejos, consultada el 24 de octubre de 2026.',
          '[Documentación de Auto Translate](https://subtitleedit.github.io/subtitleedit/features/auto-translate.html) y [Advanced Local Engines](https://subtitleedit.github.io/subtitleedit/features/auto-translate-advanced.html) — motores de traducción, modelos propios y ajustes por lotes, consultadas el 24 de octubre de 2026.',
          '[Third-Party Components](https://subtitleedit.github.io/subtitleedit/third-party-components.html) y [FAQ](https://subtitleedit.github.io/subtitleedit/faq.html) — carpeta de datos, ubicación de los componentes, formatos y licencia, consultadas el 24 de octubre de 2026.',
          '[Sitio web de Subtitle Edit](https://www.nikse.dk/subtitleedit) — sitio oficial; se genera con JavaScript y su texto no se leyó para esta reseña.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Whisper.cpp](/es/power-local-llm/whisper-cpp-review) — el motor local detrás de una de las opciones de voz a texto de Subtitle Edit.',
          '[Reseña de MacWhisper](/es/power-local-llm/macwhisper-review) — una app de Mac para transcribir con compra única.',
          '[Herramientas de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — la comparativa de categoría a la que pertenece esta reseña.',
          '[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
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
    heroImage: '/images/subtitle-edit-review-hero-fr.webp',
    title: 'Test de Subtitle Edit : transcription Whisper locale et traduction automatique',
    seoTitle: 'Test de Subtitle Edit : Whisper local et traduction',
    intro:
      'Subtitle Edit est un éditeur de sous-titres libre et gratuit pour Windows, macOS et Linux, développé par [Nikse](https://www.nikse.dk/subtitleedit) et un groupe de contributeurs. En plus de modifier et de convertir des fichiers de sous-titres, il peut transcrire une vidéo avec des moteurs de la famille Whisper et traduire des sous-titres avec des modèles locaux ou cloud, ce qui est l’objet de ce test. Il s’appuie sur la page GitHub du projet, ses notes de version et sa documentation, consultées le 24 octobre 2026 ; PromptQuorum n’a pas testé l’application en conditions réelles.',
    metaDescription:
      'Test de Subtitle Edit : éditeur de sous-titres gratuit (MIT) avec transcription locale type Whisper et traduction par LLM local ou cloud ; lu, non testé.',
    twitterDescription:
      'Test de Subtitle Edit : transcrire avec des moteurs Whisper locaux et traduire avec Ollama, LM Studio ou des API cloud. Gratuit et sous licence MIT ; ce que la documentation confirme et ce que nous n’avons pu vérifier.',
    audience:
      'Sous-titreurs, monteurs vidéo et créateurs qui veulent transcrire et traduire des sous-titres sur leur propre ordinateur et doivent savoir ce qui fonctionne en local, ce qui est téléchargé et ce qui reste non vérifié.',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test Subtitle Edit',
    targetKeywords: [
      'test subtitle edit',
      'subtitle edit whisper',
      'subtitle edit traduction automatique',
      'générateur de sous-titres whisper local',
      'traduction de sous-titres hors ligne ollama',
      'éditeur de sous-titres open source',
      'subtitle edit reconnaissance vocale',
    ],
    current_models_mentioned: ['Whisper', 'Qwen3 ASR', 'Parakeet', 'TranslateGemma'],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Apple Metal', 'Vulkan'],
    leadAnswerBlock:
      '**Subtitle Edit (version stable 5.3.0, publiée le 14 octobre 2026) est un éditeur de sous-titres gratuit sous licence MIT pour Windows, macOS et Linux, capable d’exécuter sur votre propre ordinateur la reconnaissance vocale de type Whisper et la traduction automatique par LLM locaux.** Les moteurs d’IA sont des téléchargements optionnels, et les moteurs cloud qu’il propose aussi envoient des données au fournisseur que vous choisissez. Chaque affirmation ici provient des pages du projet lui-même, pas d’un test.',
    quickAnswerTop: {
      fr: {
        question: 'Subtitle Edit peut-il transcrire et traduire des sous-titres en local ?',
        answer:
          'D’après sa documentation, oui : il télécharge des moteurs de reconnaissance vocale de type Whisper et d’autres, et peut traduire avec des modèles llama.cpp, Ollama ou LM Studio exécutés sur votre machine. Les mêmes boîtes de dialogue listent aussi des moteurs en ligne qui exigent une clé d’API et envoient des données à un tiers.',
        bullets: [
          'Sous Video, Speech to text, on trouve Whisper CPP, Purfview Faster Whisper XXL, WhisperX et d’autres moteurs.',
          'Sous Translate, Auto-translate, les moteurs locaux et cloud figurent dans une même liste déroulante.',
          'Le mode par lots et la ligne de commande seconv traitent de nombreux fichiers en une seule passe.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce que Subtitle Edit ?', anchor: 'what-is-subtitle-edit' },
      { label: 'Où l’obtenir', anchor: 'get-it' },
      { label: 'Prérequis', anchor: 'requirements' },
      { label: 'Premiers pas', anchor: 'getting-started' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Flux de données et confidentialité', anchor: 'privacy' },
      { label: 'À qui elle s’adresse', anchor: 'who-should-use' },
      { label: 'Ce que nous n’avons pas pu vérifier', anchor: 'who-should-not-use' },
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
            text: 'Subtitle Edit est un éditeur de sous-titres de bureau open source dont les boîtes de dialogue de reconnaissance vocale et de traduction automatique peuvent utiliser des moteurs exécutés sur votre propre ordinateur.',
          },
          {
            type: 'plain-terms',
            text: 'Vous ouvrez une vidéo, choisissez un moteur de type Whisper et un modèle, obtenez un fichier de sous-titres synchronisé, puis le traduisez avec un modèle local ou un service en ligne de votre choix.',
          },
        ],
        items: [
          'Maintenance : une préversion, la 5.4.0-beta6, a été publiée le 24 octobre 2026 au-dessus de la version stable 5.3.0 ; aucun avertissement de projet abandonné ne s’applique donc.',
          'Reconnaissance vocale : des moteurs de type Whisper et d’autres qui tournent sur la machine, plus quelques moteurs en ligne.',
          'Traduction : modèles locaux via llama.cpp, Ollama ou LM Studio, ou API cloud avec votre propre clé.',
          'Coût : gratuit sous licence MIT, sans publicité ni limite d’après la FAQ du projet.',
          'Éditeur : Nikse avec des contributeurs, le code source complet est sur GitHub.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s’appuie sur le dépôt GitHub, ses notes de version et la documentation du projet, consultés le 24 octobre 2026. PromptQuorum n’a ni installé ni exécuté l’application ; la qualité de la transcription et de la traduction n’est donc pas évaluée.',
          },
        ],
      },
      overview: {
        id: 'what-is-subtitle-edit',
        title: 'Qu’est-ce que Subtitle Edit ?',
        content: [
          '**Subtitle Edit est un éditeur de bureau pour créer, synchroniser, convertir et traduire des sous-titres, dont les versions récentes ajoutent des fonctions d’IA autour de ce noyau.** La FAQ du projet indique qu’il prend en charge plus de 380 formats de sous-titres, et les versions pour Windows, macOS et Linux sont publiées sur la [page des versions GitHub](https://github.com/SubtitleEdit/subtitleedit/releases) du projet.',
          'Les parties IA sont distinctes de l’éditeur : reconnaissance vocale, traduction automatique, reconnaissance optique de caractères (OCR) et synthèse vocale utilisent chacune des moteurs que l’application télécharge à la première utilisation ou auxquels elle se connecte par une API. Ce test se concentre sur la reconnaissance vocale et la traduction automatique ; la documentation appelle la génération actuelle Subtitle Edit 5.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Subtitle Edit se télécharge gratuitement pour Windows, macOS et Linux, avec un installateur ou une image disque sur chaque plateforme.**',
        ],
        columns: ['Option', 'Comment l’obtenir'],
        rows: [
          { 'Option': 'Windows', 'Comment l’obtenir': 'Installateur (Setup.exe) ou zip portable pour x64, zip pour ARM64, sur [GitHub Releases](https://github.com/SubtitleEdit/subtitleedit/releases)' },
          { 'Option': 'macOS', 'Comment l’obtenir': '.dmg pour Apple silicon ou Intel, à glisser dans Applications ; signé et notarisé d’après le README' },
          { 'Option': 'Linux', 'Comment l’obtenir': 'Flatpak (inclut mpv et ffmpeg) ou tar.gz pour x64 et ARM64' },
          { 'Option': 'Site web', 'Comment l’obtenir': '[nikse.dk/subtitleedit](https://www.nikse.dk/subtitleedit)' },
          { 'Option': 'Confidentialité', 'Comment l’obtenir': 'Pas de page dédiée ; la [section Privacy du README](https://github.com/SubtitleEdit/subtitleedit#-privacy) tient lieu de déclaration de l’éditeur' },
          { 'Option': 'Code source', 'Comment l’obtenir': '[github.com/SubtitleEdit/subtitleedit](https://github.com/SubtitleEdit/subtitleedit), licence MIT' },
        ],
        note: 'Version examinée : 5.3.0, celle que GitHub marque comme dernière version stable, publiée le 14 octobre 2026 ; les versions bêta de 5.4.0 sont marquées comme préversions. Les fichiers de la 5.3.0 pèsent de 59 à 155 Mo avant tout téléchargement de moteur ou de modèle.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**Le README demande Windows 10 version 22H2 ou plus récent, macOS 12 ou plus récent (macOS 14 recommandé) et, sous Linux, mpv et ffmpeg pour les versions tar.gz.**',
        ],
        columns: ['Élément', 'Ce que disent les sources'],
        rows: [
          { 'Élément': 'Système', 'Ce que disent les sources': 'Windows 10 22H2 ou plus récent ; macOS 12 ou plus récent, 14 ou plus recommandé ; Linux selon la liste de paquets du README' },
          { 'Élément': 'Paquets Linux', 'Ce que disent les sources': 'Les versions tar.gz exigent mpv et ffmpeg du gestionnaire de paquets ; le Flatpak et le .dmg macOS les incluent' },
          { 'Élément': 'Téléchargements de moteurs', 'Ce que disent les sources': 'Moteurs et modèles sont récupérés à la première utilisation ; la liste de modèles de Crisp ASR va de 75 Mo à 9.4 Go par modèle' },
          { 'Élément': 'Modèles de traduction', 'Ce que disent les sources': 'Les modèles llama.cpp sélectionnés font surtout moins de 8 Go, le plus gros environ 12 Go' },
          { 'Élément': 'Accélération GPU', 'Ce que disent les sources': 'Whisper CPP propose CPU, NVIDIA cuBLAS et Vulkan sous Windows ; le journal des modifications cite Metal sous macOS et Vulkan sous Linux' },
          { 'Élément': 'Internet', 'Ce que disent les sources': 'Nécessaire pour télécharger moteurs et modèles et pour tout moteur en ligne ; les moteurs locaux fonctionnent ensuite hors ligne' },
        ],
        note: 'La documentation ne donne aucun minimum de RAM ou de VRAM pour l’application ; les besoins dépendent du moteur et du modèle choisis, et une erreur « CUDA out of memory » appelle un modèle plus petit.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Les étapes suivent la documentation du projet ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Installer et ouvrir une vidéo',
            whyItMatters: 'Lancez l’installateur, le dmg ou le Flatpak, puis ouvrez dans Subtitle Edit un fichier vidéo ou des sous-titres existants.',
          },
          {
            title: 'Transcrire avec Video, Speech to text',
            whyItMatters: 'Choisissez un moteur et un modèle, indiquez la langue de l’audio ou laissez la détection automatique, et laissez l’application télécharger le moteur à la première utilisation avant de cliquer sur Transcribe.',
          },
          {
            title: 'Vérifier le résultat',
            whyItMatters: 'Réglez le post-traitement, lisez le rapport de qualité qui signale les lignes trop courtes, trop longues, qui se chevauchent ou répétées, puis corrigez la grille à la main.',
          },
          {
            title: 'Traduire avec Translate, Auto-translate',
            whyItMatters: 'Choisissez un moteur et la paire de langues, lancez la traduction, comparez l’original et la traduction côte à côte, puis validez avec OK.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque point ci-dessous provient de la documentation du projet ou de ses notes de version ; PromptQuorum n’en a testé aucun.**',
        ],
        items: [
          '**Moteurs de reconnaissance vocale.** Whisper CPP, Purfview Faster Whisper XXL, Whisper CTranslate2, Whisper Const-me (Windows), WhisperX et le flux Whisper sous Python, plus Qwen3 ASR CPP et Crisp ASR avec des backends comme Parakeet et Canary ; en ligne, on trouve OpenRouter, Alibaba Qwen3-ASR et Google Cloud Speech-to-Text.',
          '**Aides à la transcription.** Mode par lots, détection automatique de la langue, réglages de détection d’activité vocale, « Translate to English » en option pour Whisper, post-traitement et rapport de qualité.',
          '**Traduction locale.** Un serveur llama.cpp géré par l’application avec des modèles sélectionnés comme TranslateGemma, Gemma 4 et Qwen, Ollama, LM Studio et des variantes « advanced » qui traduisent par lots avec contexte, synopsis et glossaire ; un moteur MADLAD couvre 419 langues.',
          '**Traduction cloud.** Google Translate, Microsoft Bing, DeepL, ChatGPT, Anthropic, Gemini et d’autres, le plus souvent avec votre propre clé d’API, ainsi qu’un moteur compatible OpenAI pour tout serveur parlant cette API.',
          '**Autour du noyau.** Un lecteur vidéo avec forme d’onde, de l’OCR pour les sous-titres image, de la synthèse vocale et de la musique de fond générée, comme l’indique la documentation.',
        ],
        note: 'Les fonctions d’IA sont optionnelles ; les outils d’édition et de conversion fonctionnent sans aucun moteur installé.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**Le README affirme que Subtitle Edit ne collecte, ne stocke, ne transmet ni n’analyse vos fichiers de sous-titres, vos fichiers multimédias ou leurs métadonnées, et que l’édition, la conversion, la lecture et la sauvegarde automatique locale s’exécutent sur votre appareil.** Les moteurs locaux comme Whisper CPP, llama.cpp, Ollama et LM Studio traitent l’audio ou le texte sur votre machine, ou sur un serveur vers lequel vous orientez l’application.',
          'L’exception, c’est ce que vous activez vous-même. Selon le README, les services en ligne optionnels de traduction, de reconnaissance vocale, de synthèse vocale, d’OCR ou de dictionnaire ne reçoivent que les données nécessaires à la requête, directement depuis l’application et sous la politique de confidentialité du fournisseur. Les descriptions des moteurs signalent Google Translate, DeepL, ChatGPT, Anthropic, Gemini et les moteurs vocaux en ligne comme des services qui exigent un accès à internet et, pour la plupart, une clé d’API. Les réglages « compatible OpenAI » et « llama.cpp remote server » envoient du texte à l’adresse que vous saisissez.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Il s’agit de déclarations de l’éditeur, pas de résultats d’audit. Le code est ouvert, mais PromptQuorum ne l’a pas lu ni inspecté le trafic réseau de l’application, et les serveurs d’où moteurs et modèles sont téléchargés n’ont pas été vérifiés.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle s’adresse',
        items: [
          '**Sous-titreurs et monteurs vidéo** qui veulent transcription, calage et traduction dans un seul éditeur plutôt que dans plusieurs outils.',
          '**Créateurs soucieux de confidentialité** qui préfèrent un moteur Whisper local et un modèle de traduction local à l’envoi de leurs médias.',
          '**Ceux qui traitent toute une série d’épisodes** et doivent appliquer la même conversion ou traduction à chaque fichier.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Précision et qualité.** PromptQuorum n’a exécuté aucun moteur vocal ni de traduction ; taux d’erreur de mots, hallucinations et qualité de traduction ne sont donc pas évalués.',
          '**Vitesse et matériel.** Aucun temps ni aucune consommation mémoire n’ont été mesurés ; l’effet des backends CUDA, Vulkan et Metal sur de vrais fichiers n’est pas testé.',
          '**Le texte du site officiel.** La page de nikse.dk est rendue par JavaScript et n’a pas été lue ; les informations ici viennent de GitHub et du site de documentation.',
          '**Origine des téléchargements.** La documentation indique que moteurs et modèles se téléchargent automatiquement, mais les serveurs d’origine n’ont pas été vérifiés.',
          '**Stabilité de la préversion.** La version 5.4.0 est encore en bêta, et la stable 5.3.0 a elle-même été précédée de dizaines de versions bêta et release candidate ; le comportement peut changer vite.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'Application': '[Whisper.cpp](/fr/power-local-llm/whisper-cpp-review)', 'Plateformes': 'Windows, macOS, Linux', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Le moteur que Subtitle Edit liste sous le nom Whisper CPP ; un outil en ligne de commande et bibliothèque, sans éditeur de sous-titres' },
          { 'Application': '[faster-whisper](/fr/power-local-llm/faster-whisper-review)', 'Plateformes': 'Windows, macOS, Linux', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Bibliothèque Python pour une transcription Whisper rapide ; vous construisez vous-même le flux de sous-titrage' },
          { 'Application': '[MacWhisper](/fr/power-local-llm/macwhisper-review)', 'Plateformes': 'macOS', 'Prix / licence': 'Freemium / propriétaire', 'Différence clé': 'Application Mac centrée sur la transcription avec achat unique ; Subtitle Edit ajoute l’édition de formats et le choix du moteur' },
          { 'Application': '[TranscriptionSuite](/fr/power-local-llm/transcriptionsuite-review)', 'Plateformes': 'Windows, macOS, Linux', 'Prix / licence': 'Gratuit / GPL-3.0', 'Différence clé': 'Transcription locale avec mode en direct, étiquettes de locuteurs et carnet audio, d’après sa fiche d’annuaire' },
        ],
        note: 'Vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre page avant de choisir.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Faut-il internet pour la première transcription ?',
            a: 'Oui, une fois : l’application télécharge le moteur et le modèle choisis à la première utilisation. La page sur les composants tiers décrit aussi comment placer les fichiers à la main dans le dossier de données de l’application, qui est %APPDATA%\\Subtitle Edit sous Windows et ~/.config/Subtitle Edit sous Linux et macOS.',
          },
          {
            q: 'Quel moteur Whisper convient à une carte graphique NVIDIA ?',
            a: 'La documentation recommande le backend cuBLAS de Whisper CPP ou Purfview Faster Whisper XXL pour la transcription la plus rapide sur GPU NVIDIA, et un modèle plus petit en cas d’erreur de mémoire CUDA.',
          },
          {
            q: 'Peut-il indiquer qui parle ?',
            a: 'Oui, avec le moteur Crisp ASR. « Detect speakers » utilise la diarisation Sortformer de NVIDIA pour jusqu’à 8 locuteurs, télécharge un modèle de 107 Mo à la première utilisation et exige Crisp ASR v0.8.37 ou plus récent.',
          },
          {
            q: 'Puis-je utiliser un modèle de traduction absent de la liste ?',
            a: 'Oui. Déposez un fichier .gguf dans le dossier llama.cpp/models ou cochez « Use remote server » et pointez vers votre propre llama-server. La documentation précise que TranslateGemma 27B demande environ 16 Go de téléchargement et près de 20 Go de VRAM, et juge le modèle 12B déjà très solide.',
          },
          {
            q: 'Peut-on l’utiliser sans l’interface graphique ?',
            a: 'Oui, avec seconv, le convertisseur en ligne de commande publié avec chaque version. Sa traduction automatique prend en charge les moteurs compatibles OpenAI et DeepL, ainsi que les options --translate-api-key et --translate-prompt.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Subtitle Edit est un éditeur de longue date, gratuit et sous licence ouverte, qui réunit désormais, à côté de ses outils classiques de sous-titrage, la transcription Whisper locale et la traduction par LLM locaux ; son journal des modifications montre quatre préversions entre le 20 et le 24 octobre 2026. En contrepartie, les moteurs d’IA sont des téléchargements séparés pouvant atteindre plusieurs gigaoctets, les moteurs cloud envoient votre texte ou votre audio à des tiers, la branche la plus récente est encore en bêta, et rien sur la qualité des résultats n’a pu être vérifié ici. Il convient à ceux qui travaillent déjà avec des sous-titres et veulent un seul endroit pour transcrire et traduire sur leur propre machine ; qui n’a besoin que d’une transcription trouvera peut-être un outil dédié plus simple.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Subtitle Edit sur GitHub](https://github.com/SubtitleEdit/subtitleedit) — dépôt, licence MIT et README avec la configuration requise et la section Privacy, consultés le 24 octobre 2026.',
          '[GitHub Releases](https://github.com/SubtitleEdit/subtitleedit/releases) — v5.3.0 (14 octobre 2026), préversion v5.4.0-beta6 (24 octobre 2026), fichiers à télécharger et journal des modifications, consultés le 24 octobre 2026.',
          '[Documentation Speech to Text](https://subtitleedit.github.io/subtitleedit/features/speech-to-text.html) — moteurs, modèles, backends Crisp ASR, détection des locuteurs et conseils, consultée le 24 octobre 2026.',
          '[Documentation Auto Translate](https://subtitleedit.github.io/subtitleedit/features/auto-translate.html) et [Advanced Local Engines](https://subtitleedit.github.io/subtitleedit/features/auto-translate-advanced.html) — moteurs de traduction, modèles personnalisés et réglages par lots, consultées le 24 octobre 2026.',
          '[Third-Party Components](https://subtitleedit.github.io/subtitleedit/third-party-components.html) et [FAQ](https://subtitleedit.github.io/subtitleedit/faq.html) — dossier de données, emplacement des composants, formats et licence, consultées le 24 octobre 2026.',
          '[Site web de Subtitle Edit](https://www.nikse.dk/subtitleedit) — site officiel ; rendu par JavaScript, son texte n’a pas été lu pour ce test.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Whisper.cpp](/fr/power-local-llm/whisper-cpp-review) — le moteur local derrière l’une des options de reconnaissance vocale de Subtitle Edit.',
          '[Test de MacWhisper](/fr/power-local-llm/macwhisper-review) — une application Mac de transcription à achat unique.',
          '[Comparatif des outils voix et audio](/fr/power-local-llm/local-llm-voice-audio-compared) — le comparatif de catégorie auquel appartient ce test.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
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
    heroImage: '/images/subtitle-edit-review-hero-ja.webp',
    title: 'Subtitle Editレビュー：ローカルWhisper文字起こしと自動翻訳',
    seoTitle: 'Subtitle Editレビュー：ローカルWhisperと自動翻訳',
    intro:
      'Subtitle Editは、[Nikse](https://www.nikse.dk/subtitleedit)と複数の貢献者が開発する、Windows・macOS・Linux対応の無料オープンソース字幕エディタです。字幕ファイルの編集や変換に加え、Whisper系エンジンで動画を文字起こしし、ローカルまたはクラウドのモデルで字幕を翻訳できます。本レビューはこの部分を扱い、プロジェクトのGitHubページ、リリースノート、ドキュメントを2026年10月24日に確認した内容に基づきます。PromptQuorumはアプリを実際には試していません。',
    metaDescription:
      'Subtitle Editのレビュー。ローカルWhisper系の文字起こしと、ローカルLLMまたはクラウドの自動翻訳を備えた無料のMITライセンス字幕エディタ。資料に基づく内容で、未検証です。',
    twitterDescription:
      'Subtitle Editレビュー：ローカルのWhisperエンジンで文字起こしし、Ollama、LM Studio、クラウドAPIで翻訳。無料でMITライセンス。ドキュメントで確認できた点と確認できなかった点を整理しました。',
    audience:
      '字幕を自分のPCで文字起こし・翻訳したい字幕制作者、動画編集者、クリエイター。どの部分がローカルで動き、何をダウンロードし、何が未検証かを知りたい方向けです。',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'subtitle edit レビュー',
    targetKeywords: [
      'subtitle edit レビュー',
      'subtitle edit whisper',
      'subtitle edit 自動翻訳',
      'ローカル whisper 字幕 生成',
      'オフライン 字幕 翻訳 ollama',
      'オープンソース 字幕エディタ',
      'subtitle edit 音声認識',
    ],
    current_models_mentioned: ['Whisper', 'Qwen3 ASR', 'Parakeet', 'TranslateGemma'],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Apple Metal', 'Vulkan'],
    leadAnswerBlock:
      '**Subtitle Edit（安定版5.3.0、2026年10月14日公開）は、Windows・macOS・Linux対応の無料のMITライセンス字幕エディタで、Whisper系の音声認識とローカルLLMによる自動翻訳を自分のPC上で実行できます。** AIエンジンは任意のダウンロードで、併せて掲載されているクラウドエンジンは、選んだ提供元にデータを送信します。ここでの記述はすべてプロジェクト自身のページに基づき、テストによるものではありません。',
    quickAnswerTop: {
      ja: {
        question: 'Subtitle Editは字幕の文字起こしと翻訳をローカルで行えますか？',
        answer:
          'ドキュメントによれば可能です。Whisper系などの音声認識エンジンをダウンロードし、お使いのPC上で動くllama.cpp、Ollama、LM Studioのモデルで翻訳できます。同じ画面にはAPIキーが必要で第三者にデータを送るオンラインエンジンも並んでいます。',
        bullets: [
          'Video、Speech to textには、Whisper CPP、Purfview Faster Whisper XXL、WhisperXなどのエンジンがあります。',
          'Translate、Auto-translateでは、ローカルとクラウドのエンジンが同じ一覧に並びます。',
          'バッチモードとコマンドラインのseconvで、多数のファイルを一度に処理できます。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Subtitle Editとは', anchor: 'what-is-subtitle-edit' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '動作要件', anchor: 'requirements' },
      { label: '始め方', anchor: 'getting-started' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: 'データの流れとプライバシー', anchor: 'privacy' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかった点', anchor: 'who-should-not-use' },
      { label: '競合と代替ツール', anchor: 'vs-alternatives' },
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
            text: 'Subtitle Editはオープンソースのデスクトップ字幕エディタで、音声認識と自動翻訳の画面から、自分のPC上で動くエンジンを使えます。',
          },
          {
            type: 'plain-terms',
            text: '動画を開き、Whisper系のエンジンとモデルを選ぶとタイミング付きの字幕ファイルができ、それをローカルモデルまたは好みのオンラインサービスで翻訳します。',
          },
        ],
        items: [
          'メンテナンス：安定版5.3.0の上に、プレリリースの5.4.0-beta6が2026年10月24日に公開されているため、放置プロジェクトの警告は該当しません。',
          '音声認識：PC上で動くWhisper系などのエンジンと、一部のオンラインエンジン。',
          '翻訳：llama.cpp、Ollama、LM Studioのローカルモデル、または自分のキーを使うクラウドAPI。',
          '費用：MITライセンスで無料。プロジェクトのFAQでは広告も機能制限もないとされています。',
          '開発元：Nikseと貢献者。ソースコードはすべてGitHubで公開されています。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年10月24日に確認したGitHubリポジトリ、リリースノート、プロジェクトのドキュメントに基づきます。PromptQuorumはアプリをインストールも実行もしていないため、文字起こしと翻訳の品質は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-subtitle-edit',
        title: 'Subtitle Editとは',
        content: [
          '**Subtitle Editは、字幕の作成、同期、変換、翻訳を行うデスクトップエディタで、新しいバージョンではこの中核機能の周辺にAI機能が加わっています。** プロジェクトのFAQによると380を超える字幕形式に対応し、Windows・macOS・Linux向けのビルドはプロジェクトの[GitHubリリースページ](https://github.com/SubtitleEdit/subtitleedit/releases)で公開されています。',
          'AI機能はエディタ本体とは別です。音声認識、自動翻訳、文字認識（OCR）、音声合成はそれぞれ、初回利用時にアプリがダウンロードするか、APIで接続するエンジンを使います。本レビューは音声認識と自動翻訳に絞ります。ドキュメントでは現行世代をSubtitle Edit 5と呼んでいます。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Subtitle EditはWindows・macOS・Linux向けに無料で入手でき、どのプラットフォームにもインストーラーまたはディスクイメージがあります。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          { '項目': 'Windows', '入手方法': 'x64はインストーラー（Setup.exe）またはポータブルzip、ARM64はzip。[GitHub Releases](https://github.com/SubtitleEdit/subtitleedit/releases)から' },
          { '項目': 'macOS', '入手方法': 'Apple silicon用とIntel用の.dmgをアプリケーションへドラッグ。READMEによれば署名・公証済み' },
          { '項目': 'Linux', '入手方法': 'Flatpak（mpvとffmpeg同梱）、またはx64・ARM64用のtar.gz' },
          { '項目': '公式サイト', '入手方法': '[nikse.dk/subtitleedit](https://www.nikse.dk/subtitleedit)' },
          { '項目': 'プライバシーポリシー', '入手方法': '独立したページはなく、[READMEのPrivacyセクション](https://github.com/SubtitleEdit/subtitleedit#-privacy)が開発元の声明です' },
          { '項目': 'ソースコード', '入手方法': '[github.com/SubtitleEdit/subtitleedit](https://github.com/SubtitleEdit/subtitleedit)、MITライセンス' },
        ],
        note: '確認したバージョン：5.3.0。GitHubが最新の安定版として示す、2026年10月14日公開のリリースです。5.4.0のベータビルドはプレリリース扱いです。5.3.0のファイルは、エンジンやモデルをダウンロードする前で59〜155 MBです。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: [
          '**READMEが求めるのは、Windows 10 バージョン22H2以降、macOS 12以降（macOS 14を推奨）、Linuxではtar.gz版にmpvとffmpegです。**',
        ],
        columns: ['項目', '情報源の記載'],
        rows: [
          { '項目': 'OS', '情報源の記載': 'Windows 10 22H2以降、macOS 12以降（14以降を推奨）、LinuxはREADMEのパッケージ一覧に従う' },
          { '項目': 'Linuxのパッケージ', '情報源の記載': 'tar.gz版はパッケージマネージャーのmpvとffmpegが必要。FlatpakとmacOSの.dmgには同梱' },
          { '項目': 'エンジンのダウンロード', '情報源の記載': 'エンジンとモデルは初回利用時に取得。Crisp ASRのモデル一覧は1モデルあたり75 MBから9.4 GBまで' },
          { '項目': '翻訳モデル', '情報源の記載': '厳選されたllama.cppモデルの多くは8 GB未満で、最大のものが約12 GB' },
          { '項目': 'GPUアクセラレーション', '情報源の記載': 'Whisper CPPはWindowsでCPU、NVIDIA cuBLAS、Vulkanを選べる。変更履歴ではmacOSがMetal、LinuxがVulkan' },
          { '項目': 'インターネット', '情報源の記載': 'エンジンとモデルのダウンロードおよびオンラインエンジンに必要。ローカルエンジンはその後オフラインで動作' },
        ],
        note: 'アプリ自体のRAMやVRAMの最低要件はドキュメントにありません。必要量は選ぶエンジンとモデルによって変わり、「CUDA out of memory」エラーにはより小さいモデルが案内されています。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**手順はプロジェクトのドキュメントに沿ったもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'インストールして動画を開く',
            whyItMatters: 'インストーラー、dmg、Flatpakのいずれかを実行し、Subtitle Editで動画ファイルまたは既存の字幕を開きます。',
          },
          {
            title: 'Video、Speech to textで文字起こしする',
            whyItMatters: 'エンジンとモデルを選び、音声の言語を指定するか自動検出にして、Transcribeをクリックする前に、初回はアプリにエンジンをダウンロードさせます。',
          },
          {
            title: '結果を確認する',
            whyItMatters: '後処理を調整し、短すぎる行、長すぎる行、重なる行、繰り返しの行を示す品質レポートを読んで、グリッドを手で修正します。',
          },
          {
            title: 'Translate、Auto-translateで翻訳する',
            whyItMatters: 'エンジンと言語ペアを選んで翻訳し、原文と訳文を並べて確認してからOKで確定します。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下の項目はすべてプロジェクトのドキュメントまたはリリースノートによるもので、PromptQuorumは一つも試していません。**',
        ],
        items: [
          '**音声認識エンジン。** Whisper CPP、Purfview Faster Whisper XXL、Whisper CTranslate2、Whisper Const-me（Windows）、WhisperX、PythonのWhisperワークフローに加え、Qwen3 ASR CPPと、ParakeetやCanaryなどのバックエンドを持つCrisp ASR。オンラインではOpenRouter、Alibaba Qwen3-ASR、Google Cloud Speech-to-Textを選べます。',
          '**文字起こしの補助機能。** バッチモード、言語の自動検出、音声区間検出の設定、Whisper向けの任意の「Translate to English」、後処理、品質レポート。',
          '**ローカル翻訳。** TranslateGemma、Gemma 4、Qwenなどの厳選モデルを使う管理型llama.cppサーバー、Ollama、LM Studio、そしてコンテキスト・あらすじ・用語集を付けてバッチ翻訳する「advanced」版。MADLADエンジンは419言語に対応します。',
          '**クラウド翻訳。** Google翻訳、Microsoft Bing、DeepL、ChatGPT、Anthropic、Geminiなど。多くは自分のAPIキーを使い、OpenAI互換APIを話すサーバーなら何でも使えるOpenAI互換エンジンもあります。',
          '**中核機能の周辺。** ドキュメントによれば、波形付きの動画プレーヤー、画像字幕向けOCR、音声合成、生成したBGMがあります。',
        ],
        note: 'AI機能は任意です。編集や変換のツールは、エンジンを一つも入れなくても使えます。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**READMEによれば、Subtitle Editは字幕ファイル、メディアファイル、メタデータを収集・保存・送信・分析せず、編集、変換、再生、ローカルの自動バックアップは端末上で動作します。** Whisper CPP、llama.cpp、Ollama、LM Studioなどのローカルエンジンは、音声やテキストをお使いのPC上、またはアプリの接続先に指定したサーバー上で処理します。',
          '例外は、利用者自身が有効にするものです。READMEによると、翻訳、音声認識、音声合成、OCR、辞書検索の任意のオンラインサービスには、そのリクエストに必要なデータだけがアプリから直接送られ、提供元自身のプライバシーポリシーが適用されます。エンジンの説明では、Google翻訳、DeepL、ChatGPT、Anthropic、Gemini、オンライン音声認識がインターネット接続を要するサービスとされ、多くはAPIキーも必要です。「OpenAI互換」や「llama.cpp remote server」の設定は、入力したアドレスにテキストを送ります。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発元の申告であり、監査結果ではありません。コードは公開されていますが、PromptQuorumは読んでおらず、アプリの通信も調べていません。エンジンやモデルのダウンロード元サーバーも確認していません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**字幕制作者と動画編集者。** 複数のツールではなく、一つのエディタで文字起こし、タイミング調整、翻訳を済ませたい方。',
          '**プライバシーを重視するクリエイター。** メディアをアップロードするより、ローカルのWhisperエンジンとローカルの翻訳モデルを選びたい方。',
          '**連続エピソードをまとめて扱う人。** 全ファイルに同じ変換や翻訳を適用したい方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**精度と品質。** PromptQuorumは音声認識や翻訳のエンジンを実行していないため、単語誤り率、ハルシネーション、翻訳品質は評価していません。',
          '**速度とハードウェア。** 処理時間やメモリ使用量は測定していません。CUDA、Vulkan、Metalの各バックエンドが実際のファイルに与える効果は未検証です。',
          '**公式サイトの本文。** nikse.dkのページはJavaScriptで描画されるため読めておらず、ここでの情報はGitHubとドキュメントサイトに基づきます。',
          '**ダウンロード元。** ドキュメントにはエンジンとモデルが自動でダウンロードされるとありますが、どのサーバーから取得するかは確認していません。',
          '**プレリリースの安定性。** 5.4.0はまだベータ版で、安定版5.3.0にも数十本のベータ版とリリース候補ビルドが先行していたため、挙動が短期間で変わる可能性があります。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[Whisper.cpp](/ja/power-local-llm/whisper-cpp-review)', '対応プラットフォーム': 'Windows、macOS、Linux', '価格／ライセンス': '無料／MIT', '主な違い': 'Subtitle EditがWhisper CPPとして掲載しているエンジン本体。コマンドラインとライブラリ用で、字幕エディタはありません' },
          { 'アプリ': '[faster-whisper](/ja/power-local-llm/faster-whisper-review)', '対応プラットフォーム': 'Windows、macOS、Linux', '価格／ライセンス': '無料／MIT', '主な違い': '高速なWhisper文字起こし用のPythonライブラリ。字幕のワークフローは自分で組みます' },
          { 'アプリ': '[MacWhisper](/ja/power-local-llm/macwhisper-review)', '対応プラットフォーム': 'macOS', '価格／ライセンス': 'フリーミアム／プロプライエタリ', '主な違い': '文字起こしに特化した買い切りのMacアプリ。Subtitle Editは形式の編集とエンジン選択が加わります' },
          { 'アプリ': '[TranscriptionSuite](/ja/power-local-llm/transcriptionsuite-review)', '対応プラットフォーム': 'Windows、macOS、Linux', '価格／ライセンス': '無料／GPL-3.0', '主な違い': 'ライブ文字起こし、話者ラベル、音声ノートを備えたローカル文字起こし（ディレクトリ掲載情報による）' },
        ],
        note: '選ぶ前に、各アプリの現在の価格、ライセンス、対応プラットフォームを公式ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '最初の文字起こしにはインターネットが必要ですか？',
            a: 'はい、一度だけ必要です。選んだエンジンとモデルを初回利用時にアプリがダウンロードします。サードパーティコンポーネントのページには、ファイルをアプリのデータフォルダーに手動で置く方法も載っており、場所はWindowsでは%APPDATA%\\Subtitle Edit、LinuxとmacOSでは~/.config/Subtitle Editです。',
          },
          {
            q: 'NVIDIAのグラフィックスカードにはどのWhisperエンジンが合いますか？',
            a: 'ドキュメントでは、NVIDIA GPUで最速の文字起こしにはWhisper CPPのcuBLASバックエンドかPurfview Faster Whisper XXLを勧めており、CUDAのメモリ不足エラーが出たらより小さいモデルを使うよう案内しています。',
          },
          {
            q: '誰が話しているかを示せますか？',
            a: 'はい、Crisp ASRエンジンで可能です。「Detect speakers」はNVIDIAのSortformer話者分離を使って最大8人に対応し、初回に107 MBのモデルをダウンロードし、Crisp ASR v0.8.37以降が必要です。',
          },
          {
            q: '一覧にない翻訳モデルは使えますか？',
            a: 'はい。.ggufファイルをllama.cpp/modelsフォルダーに置くか、「Use remote server」にチェックを入れて自分のllama-serverを指定します。ドキュメントによれば、TranslateGemma 27Bは約16 GBのダウンロードと約20 GBのVRAMが必要で、12Bモデルでもすでに有力な選択肢とされています。',
          },
          {
            q: 'グラフィカルなインターフェースなしで使えますか？',
            a: 'はい。各リリースに同梱されるコマンドライン変換ツールのseconvを使います。その自動翻訳はOpenAI互換とDeepLのエンジンに対応し、--translate-api-keyと--translate-promptのオプションがあります。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Subtitle Editは、長く続く無料でオープンライセンスのエディタで、従来の字幕ツールに加えて、ローカルのWhisper文字起こしとローカルLLMによる翻訳を一つにまとめるようになりました。変更履歴には2026年10月20日から24日の間に4本のプレリリースが記載されています。一方で、AIエンジンは数GBに及ぶ別ダウンロードで、クラウドエンジンはテキストや音声を第三者に送り、最新系統はまだベータ版であり、出力品質についてはここでは何も確認できませんでした。すでに字幕を扱っていて、自分のPCで文字起こしと翻訳を一か所で済ませたい方に向いています。文字起こししか要らない方は、専用の文字起こしツールのほうが簡単かもしれません。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[GitHubのSubtitle Edit](https://github.com/SubtitleEdit/subtitleedit) — リポジトリ、MITライセンス、動作要件とPrivacyセクションを含むREADME。2026年10月24日確認。',
          '[GitHub Releases](https://github.com/SubtitleEdit/subtitleedit/releases) — v5.3.0（2026年10月14日）、プレリリースv5.4.0-beta6（2026年10月24日）、ダウンロードファイル、変更履歴。2026年10月24日確認。',
          '[Speech to Textのドキュメント](https://subtitleedit.github.io/subtitleedit/features/speech-to-text.html) — エンジン、モデル、Crisp ASRのバックエンド、話者検出、ヒント。2026年10月24日確認。',
          '[Auto Translateのドキュメント](https://subtitleedit.github.io/subtitleedit/features/auto-translate.html)と[Advanced Local Engines](https://subtitleedit.github.io/subtitleedit/features/auto-translate-advanced.html) — 翻訳エンジン、独自モデル、バッチ設定。2026年10月24日確認。',
          '[Third-Party Components](https://subtitleedit.github.io/subtitleedit/third-party-components.html)と[FAQ](https://subtitleedit.github.io/subtitleedit/faq.html) — データフォルダー、コンポーネントの場所、形式、ライセンス。2026年10月24日確認。',
          '[Subtitle Editの公式サイト](https://www.nikse.dk/subtitleedit) — 公式サイト。JavaScriptで描画されるため、本レビューでは本文を読んでいません。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Whisper.cppレビュー](/ja/power-local-llm/whisper-cpp-review) — Subtitle Editの音声認識オプションの一つを支えるローカルエンジン。',
          '[MacWhisperレビュー](/ja/power-local-llm/macwhisper-review) — 買い切りのMac向け文字起こしアプリ。',
          '[音声・オーディオツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — 本レビューが属するカテゴリ比較。',
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
    heroImage: '/images/subtitle-edit-review-hero-pt.webp',
    title: 'Análise do Subtitle Edit: transcrição Whisper local e tradução automática',
    seoTitle: 'Análise do Subtitle Edit: Whisper local e tradução',
    intro:
      'O Subtitle Edit é um editor de legendas gratuito e de código aberto para Windows, macOS e Linux, feito por [Nikse](https://www.nikse.dk/subtitleedit) e um grupo de colaboradores. Além de editar e converter arquivos de legenda, ele pode transcrever um vídeo com mecanismos da família Whisper e traduzir legendas com modelos locais ou na nuvem, que é a parte de que esta análise trata. Ela se baseia na página do projeto no GitHub, nas notas de versão e na documentação, consultadas em 24 de outubro de 2026; a PromptQuorum não testou o app pessoalmente.',
    metaDescription:
      'Análise do Subtitle Edit: editor de legendas gratuito (MIT) com transcrição local tipo Whisper e tradução com LLM local ou nuvem; lido, não testado.',
    twitterDescription:
      'Análise do Subtitle Edit: transcreva com mecanismos Whisper locais e traduza com Ollama, LM Studio ou APIs na nuvem. Gratuito e com licença MIT; o que a documentação confirma e o que não conseguimos verificar.',
    audience:
      'Legendadores, editores de vídeo e criadores que querem transcrever e traduzir legendas no próprio computador e precisam saber o que roda localmente, o que é baixado e o que continua sem verificação.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Subtitle Edit',
    targetKeywords: [
      'análise subtitle edit',
      'subtitle edit whisper',
      'subtitle edit tradução automática',
      'gerador de legendas whisper local',
      'tradução de legendas offline ollama',
      'editor de legendas de código aberto',
      'subtitle edit voz para texto',
    ],
    current_models_mentioned: ['Whisper', 'Qwen3 ASR', 'Parakeet', 'TranslateGemma'],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Apple Metal', 'Vulkan'],
    leadAnswerBlock:
      '**O Subtitle Edit (versão estável 5.3.0, lançada em 14 de outubro de 2026) é um editor de legendas gratuito, com licença MIT, para Windows, macOS e Linux, que pode executar no seu próprio computador o reconhecimento de fala da família Whisper e a tradução automática com LLMs locais.** Os mecanismos de IA são downloads opcionais, e os mecanismos na nuvem que ele também lista enviam dados ao provedor que você escolher. Tudo o que se afirma aqui vem das páginas do próprio projeto, não de testes.',
    quickAnswerTop: {
      pt: {
        question: 'O Subtitle Edit consegue transcrever e traduzir legendas localmente?',
        answer:
          'Segundo a documentação, sim: ele baixa mecanismos de reconhecimento de fala da família Whisper e outros, e pode traduzir com modelos de llama.cpp, Ollama ou LM Studio que rodam na sua máquina. Os mesmos diálogos também listam mecanismos online que exigem uma chave de API e enviam dados a terceiros.',
        bullets: [
          'Em Video, Speech to text há Whisper CPP, Purfview Faster Whisper XXL, WhisperX e outros mecanismos.',
          'Em Translate, Auto-translate, mecanismos locais e na nuvem aparecem na mesma lista.',
          'O modo em lote e a linha de comando seconv processam muitos arquivos de uma só vez.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Subtitle Edit?', anchor: 'what-is-subtitle-edit' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Fluxo de dados e privacidade', anchor: 'privacy' },
      { label: 'Para quem serve', anchor: 'who-should-use' },
      { label: 'O que não conseguimos verificar', anchor: 'who-should-not-use' },
      { label: 'Concorrentes e alternativas', anchor: 'vs-alternatives' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
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
            text: 'O Subtitle Edit é um editor de legendas de desktop e de código aberto cujos diálogos de voz para texto e tradução automática podem usar mecanismos que rodam no seu próprio computador.',
          },
          {
            type: 'plain-terms',
            text: 'Você abre um vídeo, escolhe um mecanismo estilo Whisper e um modelo, recebe um arquivo de legenda com os tempos e depois o traduz com um modelo local ou um serviço online à sua escolha.',
          },
        ],
        items: [
          'Manutenção: uma pré-versão, a 5.4.0-beta6, foi publicada em 24 de outubro de 2026 sobre a estável 5.3.0, então não se aplica nenhum aviso de projeto abandonado.',
          'Voz para texto: mecanismos da família Whisper e outros que rodam na máquina, além de alguns online.',
          'Tradução: modelos locais de llama.cpp, Ollama ou LM Studio, ou APIs na nuvem com a sua própria chave.',
          'Custo: gratuito com licença MIT, sem anúncios nem limites segundo o FAQ do projeto.',
          'Desenvolvedor: Nikse com colaboradores, com todo o código-fonte no GitHub.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no repositório do GitHub, nas notas de versão e na documentação do projeto, consultados em 24 de outubro de 2026. A PromptQuorum não instalou nem executou o app, então a qualidade da transcrição e da tradução não é avaliada.',
          },
        ],
      },
      overview: {
        id: 'what-is-subtitle-edit',
        title: 'O que é o Subtitle Edit?',
        content: [
          '**O Subtitle Edit é um editor de desktop para criar, sincronizar, converter e traduzir legendas, cujas versões mais novas acrescentam recursos de IA em torno desse núcleo.** O FAQ do projeto diz que ele aceita mais de 380 formatos de legenda, e as versões para Windows, macOS e Linux saem na [página de lançamentos do GitHub](https://github.com/SubtitleEdit/subtitleedit/releases) do projeto.',
          'As partes de IA são separadas do editor: voz para texto, tradução automática, reconhecimento óptico de caracteres (OCR) e texto para voz usam, cada um, mecanismos que o app baixa no primeiro uso ou aos quais se conecta por uma API. Esta análise se concentra em voz para texto e tradução automática; a documentação chama a geração atual de Subtitle Edit 5.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Subtitle Edit é um download gratuito para Windows, macOS e Linux, com instalador ou imagem de disco em cada plataforma.**',
        ],
        columns: ['Opção', 'Onde obter'],
        rows: [
          { 'Opção': 'Windows', 'Onde obter': 'Instalador (Setup.exe) ou zip portátil para x64, zip para ARM64, no [GitHub Releases](https://github.com/SubtitleEdit/subtitleedit/releases)' },
          { 'Opção': 'macOS', 'Onde obter': '.dmg para Apple silicon ou Intel, arraste para Aplicativos; assinado e notarizado segundo o README' },
          { 'Opção': 'Linux', 'Onde obter': 'Flatpak (inclui mpv e ffmpeg) ou tar.gz para x64 e ARM64' },
          { 'Opção': 'Site', 'Onde obter': '[nikse.dk/subtitleedit](https://www.nikse.dk/subtitleedit)' },
          { 'Opção': 'Política de privacidade', 'Onde obter': 'Não há página própria; a [seção Privacy do README](https://github.com/SubtitleEdit/subtitleedit#-privacy) é a declaração do desenvolvedor' },
          { 'Opção': 'Código-fonte', 'Onde obter': '[github.com/SubtitleEdit/subtitleedit](https://github.com/SubtitleEdit/subtitleedit), licença MIT' },
        ],
        note: 'Versão analisada: 5.3.0, a que o GitHub marca como a última estável, publicada em 14 de outubro de 2026; as versões beta da 5.4.0 aparecem como pré-versões. Os arquivos da 5.3.0 têm de 59 a 155 MB antes de qualquer download de mecanismo ou modelo.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**O README pede Windows 10 versão 22H2 ou mais recente, macOS 12 ou mais recente (macOS 14 recomendado) e, no Linux, mpv e ffmpeg para as versões tar.gz.**',
        ],
        columns: ['Item', 'O que dizem as fontes'],
        rows: [
          { 'Item': 'Sistema operacional', 'O que dizem as fontes': 'Windows 10 22H2 ou mais recente; macOS 12 ou mais recente, 14 ou mais recente recomendado; Linux conforme a lista de pacotes do README' },
          { 'Item': 'Pacotes no Linux', 'O que dizem as fontes': 'As versões tar.gz precisam de mpv e ffmpeg do gerenciador de pacotes; o Flatpak e o .dmg do macOS já os incluem' },
          { 'Item': 'Downloads de mecanismos', 'O que dizem as fontes': 'Mecanismos e modelos são baixados no primeiro uso; a lista de modelos do Crisp ASR vai de 75 MB a 9.4 GB por modelo' },
          { 'Item': 'Modelos de tradução', 'O que dizem as fontes': 'Os modelos selecionados do llama.cpp costumam ter menos de 8 GB, e o maior tem cerca de 12 GB' },
          { 'Item': 'Aceleração por GPU', 'O que dizem as fontes': 'O Whisper CPP oferece CPU, NVIDIA cuBLAS e Vulkan no Windows; o registro de alterações cita Metal no macOS e Vulkan no Linux' },
          { 'Item': 'Internet', 'O que dizem as fontes': 'Necessária para baixar mecanismos e modelos e para qualquer mecanismo online; os locais funcionam offline depois' },
        ],
        note: 'A documentação não informa mínimo de RAM nem de VRAM para o app; a necessidade depende do mecanismo e do modelo escolhidos, e diante de um erro «CUDA out of memory» recomenda-se um modelo menor.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Os passos seguem a documentação do projeto; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Instalar e abrir um vídeo',
            whyItMatters: 'Execute o instalador, o dmg ou o Flatpak e abra no Subtitle Edit um arquivo de vídeo ou uma legenda existente.',
          },
          {
            title: 'Transcrever com Video, Speech to text',
            whyItMatters: 'Escolha um mecanismo e um modelo, defina o idioma do áudio ou use a detecção automática, e deixe o app baixar o mecanismo no primeiro uso antes de clicar em Transcribe.',
          },
          {
            title: 'Conferir o resultado',
            whyItMatters: 'Ajuste o pós-processamento, leia o relatório de qualidade que aponta linhas curtas demais, longas demais, sobrepostas ou repetidas e corrija a grade manualmente.',
          },
          {
            title: 'Traduzir com Translate, Auto-translate',
            whyItMatters: 'Escolha um mecanismo e o par de idiomas, traduza, compare o original e a tradução lado a lado e confirme com OK.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem da documentação do projeto ou das notas de versão; a PromptQuorum não testou nenhum.**',
        ],
        items: [
          '**Mecanismos de voz para texto.** Whisper CPP, Purfview Faster Whisper XXL, Whisper CTranslate2, Whisper Const-me (Windows), WhisperX e o fluxo do Whisper em Python, além de Qwen3 ASR CPP e Crisp ASR com backends como Parakeet e Canary; online há OpenRouter, Alibaba Qwen3-ASR e Google Cloud Speech-to-Text.',
          '**Apoio à transcrição.** Modo em lote, detecção automática de idioma, ajustes de detecção de atividade de voz, «Translate to English» opcional para o Whisper, pós-processamento e relatório de qualidade.',
          '**Tradução local.** Um servidor llama.cpp gerenciado com modelos selecionados como TranslateGemma, Gemma 4 e Qwen, Ollama, LM Studio e variantes «advanced» que traduzem em lotes com contexto, sinopse e glossário; um mecanismo MADLAD cobre 419 idiomas.',
          '**Tradução na nuvem.** Google Translate, Microsoft Bing, DeepL, ChatGPT, Anthropic, Gemini e outros, quase todos com a sua própria chave de API, e um mecanismo compatível com OpenAI para qualquer servidor que fale essa API.',
          '**Em volta do núcleo.** Um player de vídeo com forma de onda, OCR para legendas em imagem, texto para voz e música de fundo gerada, conforme lista a documentação.',
        ],
        note: 'Os recursos de IA são opcionais; as ferramentas de edição e conversão funcionam sem nenhum mecanismo instalado.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**O README afirma que o Subtitle Edit não coleta, armazena, transmite nem analisa seus arquivos de legenda, seus arquivos de mídia ou os metadados, e que edição, conversão, reprodução e backup automático local rodam no seu dispositivo.** Mecanismos locais como Whisper CPP, llama.cpp, Ollama e LM Studio processam áudio ou texto na sua máquina, ou em um servidor para o qual você aponte o app.',
          'A exceção é o que você mesmo ativa. Segundo o README, os serviços online opcionais de tradução, voz para texto, texto para voz, OCR ou consulta a dicionários recebem apenas os dados necessários para aquela solicitação, diretamente do app e sob a política de privacidade do provedor. As descrições dos mecanismos indicam Google Translate, DeepL, ChatGPT, Anthropic, Gemini e os mecanismos de voz online como serviços que exigem acesso à internet e, quase sempre, uma chave de API. As configurações «compatível com OpenAI» e «llama.cpp remote server» enviam texto ao endereço que você informar.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São declarações do desenvolvedor, não resultados de auditoria. O código é aberto, mas a PromptQuorum não o leu nem inspecionou o tráfego de rede do app, e também não verificou os servidores de onde mecanismos e modelos são baixados.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Legendadores e editores de vídeo** que querem transcrição, sincronização e tradução em um só editor, em vez de várias ferramentas.',
          '**Criadores atentos à privacidade** que preferem um mecanismo Whisper local e um modelo de tradução local a enviar suas mídias.',
          '**Quem lida com uma série inteira de episódios** e precisa aplicar a mesma conversão ou tradução a cada arquivo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Precisão e qualidade.** A PromptQuorum não executou nenhum mecanismo de fala nem de tradução, então taxas de erro de palavras, alucinações e qualidade da tradução não são avaliadas.',
          '**Velocidade e hardware.** Nenhum tempo nem consumo de memória foi medido; o efeito dos backends CUDA, Vulkan e Metal em arquivos reais não foi testado.',
          '**O texto do site oficial.** A página em nikse.dk é renderizada com JavaScript e não foi lida; os dados aqui vêm do GitHub e do site de documentação.',
          '**Origem dos downloads.** A documentação diz que mecanismos e modelos são baixados automaticamente, mas de quais servidores não foi verificado.',
          '**Estabilidade da pré-versão.** A versão 5.4.0 ainda está em beta, e a estável 5.3.0 foi precedida por dezenas de versões beta e release candidate, então o comportamento pode mudar rápido.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[Whisper.cpp](/pt/power-local-llm/whisper-cpp-review)', 'Plataformas': 'Windows, macOS, Linux', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'O mecanismo que o Subtitle Edit lista como Whisper CPP; uma ferramenta de linha de comando e biblioteca, sem editor de legendas' },
          { 'App': '[faster-whisper](/pt/power-local-llm/faster-whisper-review)', 'Plataformas': 'Windows, macOS, Linux', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Biblioteca Python para transcrição rápida com Whisper; o fluxo de legendas você mesmo monta' },
          { 'App': '[MacWhisper](/pt/power-local-llm/macwhisper-review)', 'Plataformas': 'macOS', 'Preço / licença': 'Freemium / proprietária', 'Diferença principal': 'App de Mac focado em transcrição com compra única; o Subtitle Edit acrescenta edição de formatos e escolha do mecanismo' },
          { 'App': '[TranscriptionSuite](/pt/power-local-llm/transcriptionsuite-review)', 'Plataformas': 'Windows, macOS, Linux', 'Preço / licença': 'Grátis / GPL-3.0', 'Diferença principal': 'Transcrição local com modo ao vivo, rótulos de falante e caderno de áudio, segundo a ficha no diretório' },
        ],
        note: 'Confira o preço, a licença e as plataformas atuais de cada app na página dele antes de decidir.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Preciso de internet para a primeira transcrição?',
            a: 'Sim, uma vez: o app baixa o mecanismo e o modelo escolhidos no primeiro uso. A página de componentes de terceiros também descreve como colocar os arquivos manualmente na pasta de dados do app, que no Windows é %APPDATA%\\Subtitle Edit e no Linux e no macOS ~/.config/Subtitle Edit.',
          },
          {
            q: 'Qual mecanismo Whisper combina com uma placa de vídeo NVIDIA?',
            a: 'A documentação recomenda o backend cuBLAS do Whisper CPP ou o Purfview Faster Whisper XXL para a transcrição mais rápida em GPUs NVIDIA, e um modelo menor se aparecer um erro de memória CUDA.',
          },
          {
            q: 'Ele consegue indicar quem está falando?',
            a: 'Sim, com o mecanismo Crisp ASR. «Detect speakers» usa a diarização Sortformer da NVIDIA para até 8 falantes, baixa um modelo de 107 MB no primeiro uso e exige o Crisp ASR v0.8.37 ou mais recente.',
          },
          {
            q: 'Posso usar um modelo de tradução que não está na lista?',
            a: 'Sim. Coloque um arquivo .gguf na pasta llama.cpp/models ou marque «Use remote server» e aponte para o seu próprio llama-server. A documentação observa que o TranslateGemma 27B exige um download de cerca de 16 GB e uns 20 GB de VRAM, e considera o modelo de 12B uma escolha já sólida.',
          },
          {
            q: 'Dá para usar sem a interface gráfica?',
            a: 'Sim, pelo seconv, o conversor de linha de comando publicado a cada versão. A tradução automática dele aceita mecanismos compatíveis com OpenAI e DeepL, além das opções --translate-api-key e --translate-prompt.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O Subtitle Edit é um editor veterano, gratuito e de licença aberta que agora reúne, ao lado das ferramentas clássicas de legendas, a transcrição local com Whisper e a tradução com LLMs locais; o registro de alterações mostra quatro pré-versões entre 20 e 24 de outubro de 2026. Em contrapartida, os mecanismos de IA são downloads à parte de até vários gigabytes, os mecanismos na nuvem enviam seu texto ou áudio a terceiros, a linha mais nova ainda está em beta e nada sobre a qualidade do resultado pôde ser verificado aqui. Serve para quem já trabalha com legendas e quer um só lugar para transcrever e traduzir no próprio computador; quem só precisa de uma transcrição talvez ache mais simples uma ferramenta dedicada a isso.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Subtitle Edit no GitHub](https://github.com/SubtitleEdit/subtitleedit) — repositório, licença MIT e README com os requisitos do sistema e a seção Privacy, consultados em 24 de outubro de 2026.',
          '[GitHub Releases](https://github.com/SubtitleEdit/subtitleedit/releases) — v5.3.0 (14 de outubro de 2026), pré-versão v5.4.0-beta6 (24 de outubro de 2026), arquivos para download e registro de alterações, consultados em 24 de outubro de 2026.',
          '[Documentação de Speech to Text](https://subtitleedit.github.io/subtitleedit/features/speech-to-text.html) — mecanismos, modelos, backends do Crisp ASR, detecção de falantes e dicas, consultada em 24 de outubro de 2026.',
          '[Documentação de Auto Translate](https://subtitleedit.github.io/subtitleedit/features/auto-translate.html) e [Advanced Local Engines](https://subtitleedit.github.io/subtitleedit/features/auto-translate-advanced.html) — mecanismos de tradução, modelos próprios e ajustes em lote, consultadas em 24 de outubro de 2026.',
          '[Third-Party Components](https://subtitleedit.github.io/subtitleedit/third-party-components.html) e [FAQ](https://subtitleedit.github.io/subtitleedit/faq.html) — pasta de dados, locais dos componentes, formatos e licença, consultadas em 24 de outubro de 2026.',
          '[Site do Subtitle Edit](https://www.nikse.dk/subtitleedit) — site oficial; renderizado com JavaScript, seu texto não foi lido para esta análise.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Whisper.cpp](/pt/power-local-llm/whisper-cpp-review) — o mecanismo local por trás de uma das opções de voz para texto do Subtitle Edit.',
          '[Análise do MacWhisper](/pt/power-local-llm/macwhisper-review) — um app de Mac para transcrição com compra única.',
          '[Ferramentas de voz e áudio comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — a comparação de categoria a que esta análise pertence.',
          '[Diretório de software para LLMs locais](/pt/directory) — o catálogo completo de ferramentas de IA local.',
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
    heroImage: '/images/subtitle-edit-review-hero-ar.webp',
    title: 'مراجعة Subtitle Edit: تفريغ صوتي محلي بـ Whisper وترجمة تلقائية',
    seoTitle: 'مراجعة Subtitle Edit: Whisper محلي وترجمة تلقائية',
    intro:
      'Subtitle Edit محرّر ترجمات مجاني ومفتوح المصدر لأنظمة Windows وmacOS وLinux، طوّره [Nikse](https://www.nikse.dk/subtitleedit) مع مجموعة من المساهمين. فإلى جانب تحرير ملفات الترجمة وتحويلها، يستطيع تفريغ الفيديو إلى نص بمحرّكات من عائلة Whisper وترجمة النصوص بنماذج محلية أو سحابية، وهذا هو موضوع المراجعة. تستند المراجعة إلى صفحة المشروع على GitHub وملاحظات الإصدارات والتوثيق، وقد راجعناها في 24 أكتوبر 2026؛ ولم تجرّب PromptQuorum التطبيق بنفسها.',
    metaDescription:
      'مراجعة Subtitle Edit: محرّر ترجمات مجاني برخصة MIT مع تفريغ صوتي محلي من عائلة Whisper وترجمة تلقائية بنموذج محلي أو سحابي؛ مقروء وغير مجرَّب.',
    twitterDescription:
      'مراجعة Subtitle Edit: فرّغ الصوت بمحرّكات Whisper محلية وترجم عبر Ollama أو LM Studio أو واجهات سحابية. مجاني وبرخصة MIT؛ ما يؤكده التوثيق وما لم نتمكن من التحقق منه.',
    audience:
      'مترجمو الأفلام ومحرّرو الفيديو وصنّاع المحتوى الذين يريدون تفريغ الترجمات وترجمتها على حاسوبهم، ويحتاجون إلى معرفة ما يعمل محليًا وما يُنزَّل وما بقي دون تحقق.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Subtitle Edit',
    targetKeywords: [
      'مراجعة subtitle edit',
      'subtitle edit whisper',
      'subtitle edit ترجمة تلقائية',
      'مولد ترجمات whisper محلي',
      'ترجمة الترجمات بدون إنترنت ollama',
      'محرر ترجمات مفتوح المصدر',
      'subtitle edit تحويل الكلام إلى نص',
    ],
    current_models_mentioned: ['Whisper', 'Qwen3 ASR', 'Parakeet', 'TranslateGemma'],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Apple Metal', 'Vulkan'],
    leadAnswerBlock:
      '**Subtitle Edit (الإصدار المستقر 5.3.0 الصادر في 14 أكتوبر 2026) محرّر ترجمات مجاني برخصة MIT لأنظمة Windows وmacOS وLinux، يستطيع تشغيل التعرّف على الكلام من عائلة Whisper والترجمة التلقائية بنماذج لغوية محلية على حاسوبك.** محرّكات الذكاء الاصطناعي تنزيلات اختيارية، أما المحرّكات السحابية التي يعرضها أيضًا فترسل البيانات إلى المزوّد الذي تختاره. كل ما يرد هنا مصدره صفحات المشروع نفسه، لا اختبارات أجريناها.',
    quickAnswerTop: {
      ar: {
        question: 'هل يستطيع Subtitle Edit تفريغ الترجمات وترجمتها محليًا؟',
        answer:
          'وفق التوثيق، نعم: ينزّل محرّكات تعرّف على الكلام من عائلة Whisper وغيرها، ويمكنه الترجمة بنماذج llama.cpp أو Ollama أو LM Studio التي تعمل على جهازك. لكن النوافذ نفسها تعرض أيضًا محرّكات عبر الإنترنت تتطلب مفتاح API وترسل البيانات إلى طرف ثالث.',
        bullets: [
          'ضمن Video ثم Speech to text تظهر محرّكات Whisper CPP وPurfview Faster Whisper XXL وWhisperX وغيرها.',
          'ضمن Translate ثم Auto-translate تُدرج المحرّكات المحلية والسحابية في قائمة واحدة.',
          'يعالج وضع الدفعات وأداة سطر الأوامر seconv عددًا كبيرًا من الملفات في تشغيل واحد.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Subtitle Edit؟', anchor: 'what-is-subtitle-edit' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'المتطلبات', anchor: 'requirements' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'الميزات التي أكدتها المصادر', anchor: 'key-features' },
      { label: 'تدفق البيانات والخصوصية', anchor: 'privacy' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
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
            text: 'Subtitle Edit محرّر ترجمات مفتوح المصدر لسطح المكتب، تستطيع نافذتا تحويل الكلام إلى نص والترجمة التلقائية فيه استخدام محرّكات تعمل على حاسوبك.',
          },
          {
            type: 'plain-terms',
            text: 'تفتح فيديو وتختار محرّكًا على طراز Whisper ونموذجًا، فتحصل على ملف ترجمة موقَّت، ثم تترجمه بنموذج محلي أو بخدمة عبر الإنترنت تختارها.',
          },
        ],
        items: [
          'الصيانة: صدر إصدار تجريبي هو 5.4.0-beta6 في 24 أكتوبر 2026 فوق الإصدار المستقر 5.3.0، ولذلك لا ينطبق تحذير المشروع المهجور.',
          'تحويل الكلام إلى نص: محرّكات من عائلة Whisper وغيرها تعمل على الجهاز، إضافة إلى بعض المحرّكات عبر الإنترنت.',
          'الترجمة: نماذج محلية عبر llama.cpp أو Ollama أو LM Studio، أو واجهات سحابية بمفتاحك الخاص.',
          'التكلفة: مجاني برخصة MIT، ودون إعلانات أو قيود بحسب الأسئلة الشائعة للمشروع.',
          'المطوّر: Nikse مع مساهمين، والشيفرة المصدرية كاملة على GitHub.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى مستودع GitHub وملاحظات الإصدارات وتوثيق المشروع، وقد راجعناها في 24 أكتوبر 2026. لم تثبّت PromptQuorum التطبيق ولم تشغّله، ولذلك لا نقيّم جودة التفريغ ولا الترجمة.',
          },
        ],
      },
      overview: {
        id: 'what-is-subtitle-edit',
        title: 'ما هو Subtitle Edit؟',
        content: [
          '**Subtitle Edit محرّر لسطح المكتب لإنشاء الترجمات ومزامنتها وتحويلها وترجمتها، وتضيف إصداراته الأحدث ميزات ذكاء اصطناعي حول هذه النواة.** تقول الأسئلة الشائعة للمشروع إنه يدعم أكثر من 380 صيغة ترجمة، وتُنشر نسخ Windows وmacOS وLinux في [صفحة إصدارات GitHub](https://github.com/SubtitleEdit/subtitleedit/releases) الخاصة بالمشروع.',
          'أجزاء الذكاء الاصطناعي منفصلة عن المحرّر: تحويل الكلام إلى نص والترجمة التلقائية والتعرّف الضوئي على الحروف (OCR) وتحويل النص إلى كلام، يستخدم كل منها محرّكات ينزّلها التطبيق عند أول استخدام أو يتصل بها عبر واجهة API. تركّز هذه المراجعة على تحويل الكلام إلى نص والترجمة التلقائية؛ ويسمّي التوثيق الجيل الحالي Subtitle Edit 5.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**Subtitle Edit تنزيل مجاني لأنظمة Windows وmacOS وLinux، مع مثبّت أو صورة قرص على كل منصة.**',
        ],
        columns: ['الخيار', 'مصدر الحصول عليه'],
        rows: [
          { 'الخيار': 'Windows', 'مصدر الحصول عليه': 'مثبّت (Setup.exe) أو ملف zip محمول لمعالج x64، وملف zip لمعالج ARM64، من [GitHub Releases](https://github.com/SubtitleEdit/subtitleedit/releases)' },
          { 'الخيار': 'macOS', 'مصدر الحصول عليه': 'ملف dmg. لشرائح Apple أو Intel، يُسحب إلى مجلد التطبيقات؛ موقَّع وموثَّق من Apple بحسب README' },
          { 'الخيار': 'Linux', 'مصدر الحصول عليه': 'حزمة Flatpak (تتضمن mpv وffmpeg) أو tar.gz لمعالجي x64 وARM64' },
          { 'الخيار': 'الموقع', 'مصدر الحصول عليه': '[nikse.dk/subtitleedit](https://www.nikse.dk/subtitleedit)' },
          { 'الخيار': 'سياسة الخصوصية', 'مصدر الحصول عليه': 'لا توجد صفحة مستقلة؛ و[قسم Privacy في README](https://github.com/SubtitleEdit/subtitleedit#-privacy) هو بيان المطوّر' },
          { 'الخيار': 'الشيفرة المصدرية', 'مصدر الحصول عليه': '[github.com/SubtitleEdit/subtitleedit](https://github.com/SubtitleEdit/subtitleedit)، برخصة MIT' },
        ],
        note: 'الإصدار الذي راجعناه: 5.3.0، وهو ما يصنّفه GitHub أحدث إصدار مستقر، صدر في 14 أكتوبر 2026؛ أما نسخ 5.4.0 التجريبية فمصنّفة إصدارات أولية. تتراوح ملفات 5.3.0 بين 59 و155 MB قبل تنزيل أي محرّك أو نموذج.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**يشترط README نظام Windows 10 الإصدار 22H2 أو أحدث، وmacOS 12 أو أحدث (يُوصى بـ macOS 14)، وعلى Linux حزمتي mpv وffmpeg لنسخ tar.gz.**',
        ],
        columns: ['البند', 'ما تقوله المصادر'],
        rows: [
          { 'البند': 'نظام التشغيل', 'ما تقوله المصادر': 'Windows 10 22H2 أو أحدث؛ macOS 12 أو أحدث ويُوصى بـ 14 أو أحدث؛ وLinux وفق قائمة الحزم في README' },
          { 'البند': 'حزم Linux', 'ما تقوله المصادر': 'نسخ tar.gz تحتاج mpv وffmpeg من مدير الحزم؛ أما Flatpak وملف dmg. على macOS فيتضمنانهما' },
          { 'البند': 'تنزيل المحرّكات', 'ما تقوله المصادر': 'تُجلب المحرّكات والنماذج عند أول استخدام؛ وتتراوح قائمة نماذج Crisp ASR بين 75 MB و9.4 GB للنموذج الواحد' },
          { 'البند': 'نماذج الترجمة', 'ما تقوله المصادر': 'معظم نماذج llama.cpp المنتقاة أقل من 8 GB، وأكبرها نحو 12 GB' },
          { 'البند': 'تسريع GPU', 'ما تقوله المصادر': 'يتيح Whisper CPP على Windows خيارات CPU وNVIDIA cuBLAS وVulkan؛ ويذكر سجل التغييرات Metal على macOS وVulkan على Linux' },
          { 'البند': 'الإنترنت', 'ما تقوله المصادر': 'مطلوب لتنزيل المحرّكات والنماذج ولأي محرّك عبر الإنترنت؛ وتعمل المحرّكات المحلية بعد ذلك دون اتصال' },
        ],
        note: 'لا يذكر التوثيق حدًّا أدنى من RAM أو VRAM للتطبيق؛ فالحاجة تتوقف على المحرّك والنموذج المختارين، ويُوصى عند ظهور خطأ «CUDA out of memory» باستخدام نموذج أصغر.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع الخطوات توثيق المشروع؛ ولم تنفّذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'التثبيت وفتح فيديو',
            whyItMatters: 'شغّل المثبّت أو ملف dmg أو Flatpak، ثم افتح في Subtitle Edit ملف فيديو أو ترجمة موجودة.',
          },
          {
            title: 'التفريغ عبر Video ثم Speech to text',
            whyItMatters: 'اختر محرّكًا ونموذجًا، وحدّد لغة الصوت أو اترك الكشف التلقائي، ودع التطبيق ينزّل المحرّك عند أول استخدام قبل أن تضغط Transcribe.',
          },
          {
            title: 'مراجعة النتيجة',
            whyItMatters: 'اضبط المعالجة اللاحقة، واقرأ تقرير الجودة الذي يشير إلى الأسطر القصيرة جدًا أو الطويلة جدًا أو المتداخلة أو المكررة، ثم صحّح الجدول يدويًا.',
          },
          {
            title: 'الترجمة عبر Translate ثم Auto-translate',
            whyItMatters: 'اختر محرّكًا وزوج اللغات، وترجم، وقارن النص الأصلي بالمترجم جنبًا إلى جنب، ثم أكّد بالضغط على OK.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل بند أدناه مصدره توثيق المشروع أو ملاحظات الإصدارات؛ ولم تختبر PromptQuorum أيًّا منها.**',
        ],
        items: [
          '**محرّكات تحويل الكلام إلى نص.** Whisper CPP وPurfview Faster Whisper XXL وWhisper CTranslate2 وWhisper Const-me (على Windows) وWhisperX ومسار Whisper بلغة Python، إضافة إلى Qwen3 ASR CPP وCrisp ASR بواجهات خلفية مثل Parakeet وCanary؛ وعبر الإنترنت تتوفر OpenRouter وAlibaba Qwen3-ASR وGoogle Cloud Speech-to-Text.',
          '**أدوات مساعدة للتفريغ.** وضع الدفعات، والكشف التلقائي عن اللغة، وإعدادات كشف النشاط الصوتي، وخيار «Translate to English» الاختياري لـ Whisper، والمعالجة اللاحقة، وتقرير الجودة.',
          '**الترجمة المحلية.** خادم llama.cpp مُدار بنماذج منتقاة مثل TranslateGemma وGemma 4 وQwen، وOllama، وLM Studio، ونسخ «advanced» تترجم على دفعات مع سياق وملخص ومسرد مصطلحات؛ ويغطي محرّك MADLAD ‏419 لغة.',
          '**الترجمة السحابية.** Google Translate وMicrosoft Bing وDeepL وChatGPT وAnthropic وGemini وغيرها، ومعظمها بمفتاح API خاص بك، إضافة إلى محرّك متوافق مع OpenAI لأي خادم يتحدث بهذه الواجهة.',
          '**حول النواة.** مشغّل فيديو مع شكل موجي، وOCR لترجمات الصور، وتحويل النص إلى كلام، وموسيقى خلفية مولَّدة، كما يسردها التوثيق.',
        ],
        note: 'ميزات الذكاء الاصطناعي اختيارية؛ وأدوات التحرير والتحويل تعمل دون تثبيت أي محرّك.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**يقول README إن Subtitle Edit لا يجمع ملفات الترجمة أو ملفات الوسائط أو بياناتها الوصفية ولا يخزّنها ولا ينقلها ولا يحلّلها، وإن التحرير والتحويل والتشغيل والنسخ الاحتياطي التلقائي المحلي تعمل على جهازك.** وتعالج المحرّكات المحلية مثل Whisper CPP وllama.cpp وOllama وLM Studio الصوت أو النص على جهازك، أو على خادم توجّه التطبيق إليه.',
          'والاستثناء هو ما تفعّله بنفسك. فبحسب README، لا تتلقى الخدمات الاختيارية عبر الإنترنت للترجمة أو تحويل الكلام إلى نص أو النص إلى كلام أو OCR أو البحث في القواميس إلا البيانات اللازمة لذلك الطلب، مباشرةً من التطبيق وبموجب سياسة خصوصية المزوّد نفسه. وتصف أوصاف المحرّكات Google Translate وDeepL وChatGPT وAnthropic وGemini ومحرّكات الكلام عبر الإنترنت بأنها خدمات تتطلب اتصالًا بالإنترنت، ومعظمها مفتاح API. أما إعدادات «متوافق مع OpenAI» و«llama.cpp remote server» فترسل النص إلى العنوان الذي تدخله.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه إفادات من المطوّر وليست نتائج تدقيق. الشيفرة مفتوحة، لكن PromptQuorum لم تقرأها ولم تفحص حركة الشبكة للتطبيق، كما لم نتحقق من الخوادم التي تُنزَّل منها المحرّكات والنماذج.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مترجمو الأفلام ومحرّرو الفيديو** الذين يريدون التفريغ والتوقيت والترجمة في محرّر واحد بدل عدة أدوات.',
          '**صنّاع المحتوى المهتمون بالخصوصية** الذين يفضّلون محرّك Whisper محليًا ونموذج ترجمة محليًا على رفع ملفاتهم.',
          '**من يعالجون سلسلة كاملة من الحلقات** ويحتاجون إلى تطبيق التحويل أو الترجمة نفسهما على كل ملف.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الدقة والجودة.** لم تشغّل PromptQuorum أي محرّك للكلام أو الترجمة، ولذلك لا نقيّم معدلات الخطأ في الكلمات ولا الهلوسات ولا جودة الترجمة.',
          '**السرعة والعتاد.** لم تُقَس أي أزمنة أو استهلاك للذاكرة؛ وأثر الواجهات الخلفية CUDA وVulkan وMetal على ملفات حقيقية لم يُختبر.',
          '**نص الموقع الرسمي.** صفحة nikse.dk تُعرض بواسطة JavaScript ولم تُقرأ؛ والمعلومات هنا مصدرها GitHub وموقع التوثيق.',
          '**مصادر التنزيل.** يقول التوثيق إن المحرّكات والنماذج تُنزَّل تلقائيًا، لكننا لم نتحقق من الخوادم التي تُجلب منها.',
          '**استقرار الإصدار الأولي.** الإصدار 5.4.0 ما زال تجريبيًا، وسبق الإصدار المستقر 5.3.0 نفسه عشرات النسخ التجريبية ونسخ المرشح للإصدار، فقد يتغير السلوك سريعًا.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          { 'التطبيق': '[Whisper.cpp](/ar/power-local-llm/whisper-cpp-review)', 'المنصات': 'Windows وmacOS وLinux', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'المحرّك الذي يدرجه Subtitle Edit باسم Whisper CPP؛ أداة سطر أوامر ومكتبة دون محرّر ترجمات' },
          { 'التطبيق': '[faster-whisper](/ar/power-local-llm/faster-whisper-review)', 'المنصات': 'Windows وmacOS وLinux', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'مكتبة Python لتفريغ Whisper السريع؛ وتبني مسار الترجمات بنفسك' },
          { 'التطبيق': '[MacWhisper](/ar/power-local-llm/macwhisper-review)', 'المنصات': 'macOS', 'السعر / الرخصة': 'فريميوم / مملوك', 'الفرق الأبرز': 'تطبيق Mac يركّز على التفريغ بشراء لمرة واحدة؛ ويضيف Subtitle Edit تحرير الصيغ واختيار المحرّك' },
          { 'التطبيق': '[TranscriptionSuite](/ar/power-local-llm/transcriptionsuite-review)', 'المنصات': 'Windows وmacOS وLinux', 'السعر / الرخصة': 'مجاني / GPL-3.0', 'الفرق الأبرز': 'تفريغ محلي مع وضع مباشر وتمييز المتحدثين ودفتر صوتي، بحسب بطاقته في الدليل' },
        ],
        note: 'تحقق من السعر والرخصة والمنصات الحالية لكل تطبيق في صفحته الخاصة قبل أن تقرر.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل أحتاج إلى الإنترنت في أول تفريغ؟',
            a: 'نعم، مرة واحدة: ينزّل التطبيق المحرّك والنموذج المختارين عند أول استخدام. وتصف صفحة المكوّنات الخارجية أيضًا كيفية وضع الملفات يدويًا في مجلد بيانات التطبيق، وهو %APPDATA%\\Subtitle Edit على Windows و~/.config/Subtitle Edit على Linux وmacOS.',
          },
          {
            q: 'أي محرّك Whisper يناسب بطاقة رسوميات NVIDIA؟',
            a: 'يوصي التوثيق بالواجهة الخلفية cuBLAS في Whisper CPP أو Purfview Faster Whisper XXL لأسرع تفريغ على معالجات NVIDIA الرسومية، وبنموذج أصغر إذا ظهر خطأ نفاد ذاكرة CUDA.',
          },
          {
            q: 'هل يمكنه تحديد من يتحدث؟',
            a: 'نعم، مع محرّك Crisp ASR. يستخدم «Detect speakers» فصل المتحدثين Sortformer من NVIDIA لما يصل إلى 8 متحدثين، وينزّل نموذجًا بحجم 107 MB عند أول استخدام، ويتطلب Crisp ASR الإصدار v0.8.37 أو أحدث.',
          },
          {
            q: 'هل يمكنني استخدام نموذج ترجمة غير موجود في القائمة؟',
            a: 'نعم. ضع ملف gguf. في المجلد llama.cpp/models أو فعّل «Use remote server» ووجّه التطبيق إلى llama-server الخاص بك. ويذكر التوثيق أن TranslateGemma 27B يحتاج إلى تنزيل بنحو 16 GB ونحو 20 GB من VRAM، ويعدّ نموذج 12B خيارًا قويًا أصلًا.',
          },
          {
            q: 'هل يمكن تشغيله دون الواجهة الرسومية؟',
            a: 'نعم، عبر seconv، أداة التحويل بسطر الأوامر التي تصدر مع كل إصدار. وتدعم ترجمتها التلقائية محرّكات متوافقة مع OpenAI وDeepL، إضافة إلى الخيارين --translate-api-key و--translate-prompt.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Subtitle Edit محرّر عريق ومجاني وبرخصة مفتوحة، يجمع الآن إلى جانب أدوات الترجمات التقليدية تفريغ Whisper المحلي والترجمة بنماذج لغوية محلية؛ ويُظهر سجل تغييراته أربعة إصدارات أولية بين 20 و24 أكتوبر 2026. في المقابل، محرّكات الذكاء الاصطناعي تنزيلات منفصلة قد تبلغ عدة غيغابايت، والمحرّكات السحابية ترسل نصك أو صوتك إلى أطراف ثالثة، والفرع الأحدث ما زال تجريبيًا، ولم نتمكن هنا من التحقق من شيء يخص جودة المخرجات. يناسب من يعملون أصلًا مع الترجمات ويريدون مكانًا واحدًا للتفريغ والترجمة على جهازهم؛ ومن يحتاج إلى نص مفرَّغ فقط قد يجد أداة تفريغ مخصصة أبسط.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Subtitle Edit على GitHub](https://github.com/SubtitleEdit/subtitleedit) — المستودع ورخصة MIT وREADME مع متطلبات النظام وقسم Privacy، راجعناها في 24 أكتوبر 2026.',
          '[GitHub Releases](https://github.com/SubtitleEdit/subtitleedit/releases) — الإصدار v5.3.0 (14 أكتوبر 2026) والإصدار الأولي v5.4.0-beta6 (24 أكتوبر 2026) وملفات التنزيل وسجل التغييرات، راجعناها في 24 أكتوبر 2026.',
          '[توثيق Speech to Text](https://subtitleedit.github.io/subtitleedit/features/speech-to-text.html) — المحرّكات والنماذج وواجهات Crisp ASR الخلفية وكشف المتحدثين ونصائح، راجعناه في 24 أكتوبر 2026.',
          '[توثيق Auto Translate](https://subtitleedit.github.io/subtitleedit/features/auto-translate.html) و[Advanced Local Engines](https://subtitleedit.github.io/subtitleedit/features/auto-translate-advanced.html) — محرّكات الترجمة والنماذج المخصصة وإعدادات الدفعات، راجعناهما في 24 أكتوبر 2026.',
          '[Third-Party Components](https://subtitleedit.github.io/subtitleedit/third-party-components.html) و[FAQ](https://subtitleedit.github.io/subtitleedit/faq.html) — مجلد البيانات ومواقع المكوّنات والصيغ والرخصة، راجعناهما في 24 أكتوبر 2026.',
          '[موقع Subtitle Edit](https://www.nikse.dk/subtitleedit) — الموقع الرسمي؛ يُعرض بواسطة JavaScript ولم يُقرأ نصه لهذه المراجعة.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Whisper.cpp](/ar/power-local-llm/whisper-cpp-review) — المحرّك المحلي وراء أحد خيارات تحويل الكلام إلى نص في Subtitle Edit.',
          '[مراجعة MacWhisper](/ar/power-local-llm/macwhisper-review) — تطبيق Mac للتفريغ بشراء لمرة واحدة.',
          '[مقارنة أدوات الصوت والكلام](/ar/power-local-llm/local-llm-voice-audio-compared) — مقارنة الفئة التي تنتمي إليها هذه المراجعة.',
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
    heroImage: '/images/subtitle-edit-review-hero-zh.webp',
    title: 'Subtitle Edit 评测：本地 Whisper 转写与自动翻译',
    seoTitle: 'Subtitle Edit 评测：本地 Whisper 与自动翻译',
    intro:
      'Subtitle Edit 是由 [Nikse](https://www.nikse.dk/subtitleedit) 和一批贡献者开发的免费开源字幕编辑器，支持 Windows、macOS 和 Linux。除了编辑和转换字幕文件，它还能用 Whisper 系列引擎为视频转写，并用本地或云端模型翻译字幕，本评测关注的正是这部分。内容基于 2026年10月24日核对的项目 GitHub 页面、发布说明和文档；PromptQuorum 未上手实测该应用。',
    metaDescription:
      'Subtitle Edit 评测：免费 MIT 许可字幕编辑器，内置本地 Whisper 系列转写，以及本地大模型或云端自动翻译。内容来自文档，未经实测。',
    twitterDescription:
      'Subtitle Edit 评测：用本地 Whisper 引擎转写，用 Ollama、LM Studio 或云端 API 翻译。免费、MIT 许可；文档能证实什么、我们没能核实什么。',
    audience:
      '想在自己电脑上转写并翻译字幕的字幕师、视频剪辑人员和创作者，需要弄清哪些功能在本地运行、会下载什么，以及哪些内容尚未核实。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Subtitle Edit 评测',
    targetKeywords: [
      'subtitle edit 评测',
      'subtitle edit whisper',
      'subtitle edit 自动翻译',
      '本地 whisper 字幕生成',
      '离线字幕翻译 ollama',
      '开源字幕编辑器',
      'subtitle edit 语音转文字',
    ],
    current_models_mentioned: ['Whisper', 'Qwen3 ASR', 'Parakeet', 'TranslateGemma'],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Apple Metal', 'Vulkan'],
    leadAnswerBlock:
      '**Subtitle Edit（稳定版 5.3.0，2026年10月14日发布）是适用于 Windows、macOS 和 Linux 的免费 MIT 许可字幕编辑器，可在你自己的电脑上运行 Whisper 系列语音识别和本地大模型自动翻译。** AI 引擎是可选下载项，它同时列出的云端引擎则会把数据发送给你选定的服务商。本文所有表述均来自项目自身页面；PromptQuorum 未上手实测。',
    quickAnswerTop: {
      zh: {
        question: 'Subtitle Edit 能在本地转写并翻译字幕吗？',
        answer:
          '据其文档，可以：它会下载 Whisper 系列等语音识别引擎，并可通过在你电脑上运行的 llama.cpp、Ollama 或 LM Studio 模型翻译。同样的对话框里也列出了需要 API 密钥、会把数据发给第三方的在线引擎。',
        bullets: [
          '在 Video、Speech to text 中可选 Whisper CPP、Purfview Faster Whisper XXL、WhisperX 等引擎。',
          '在 Translate、Auto-translate 中，本地与云端引擎列在同一个下拉列表里。',
          '批处理模式和命令行工具 seconv 可一次处理大量文件。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Subtitle Edit 是什么？', anchor: 'what-is-subtitle-edit' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '运行要求', anchor: 'requirements' },
      { label: '上手步骤', anchor: 'getting-started' },
      { label: '来源已证实的功能', anchor: 'key-features' },
      { label: '数据流向与隐私', anchor: 'privacy' },
      { label: '适合哪些人', anchor: 'who-should-use' },
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
          {
            type: 'one-sentence',
            text: 'Subtitle Edit 是一款开源桌面字幕编辑器，它的语音转文字和自动翻译对话框可以使用在你自己电脑上运行的引擎。',
          },
          {
            type: 'plain-terms',
            text: '打开视频，选择 Whisper 类引擎和模型，得到带时间轴的字幕文件，再用本地模型或你选定的在线服务来翻译。',
          },
        ],
        items: [
          '维护状态：预发布版 5.4.0-beta6 于 2026年10月24日在稳定版 5.3.0 基础上发布，因此不适用“项目疑似停更”警告。',
          '语音转文字：在本机运行的 Whisper 系列等引擎，另有少数在线引擎。',
          '翻译：通过 llama.cpp、Ollama 或 LM Studio 使用本地模型，或使用自带密钥的云端 API。',
          '费用：MIT 许可，免费；据项目 FAQ，无广告、无功能限制。',
          '开发者：Nikse 及贡献者，完整源代码托管在 GitHub。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 2026年10月24日核对的 GitHub 仓库、发布说明和项目文档。PromptQuorum 未安装也未运行该应用，因此不评估转写和翻译质量。',
          },
        ],
      },
      overview: {
        id: 'what-is-subtitle-edit',
        title: 'Subtitle Edit 是什么？',
        content: [
          '**Subtitle Edit 是一款用于创建、同步、转换和翻译字幕的桌面编辑器，较新的版本在这一核心之外增加了 AI 功能。** 项目 FAQ 称其支持 380 多种字幕格式，Windows、macOS 和 Linux 版本发布在项目的 [GitHub 发布页](https://github.com/SubtitleEdit/subtitleedit/releases)。',
          'AI 部分与编辑器本体相互独立：语音转文字、自动翻译、光学字符识别（OCR）和文字转语音各自使用引擎，这些引擎由应用在首次使用时下载，或通过 API 连接。本评测聚焦语音转文字和自动翻译；文档把当前这一代称为 Subtitle Edit 5。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Subtitle Edit 可免费下载，支持 Windows、macOS 和 Linux，每个平台都有安装程序或磁盘映像。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          { '选项': 'Windows', '获取方式': 'x64 提供安装程序（Setup.exe）或便携 zip，ARM64 提供 zip，均在 [GitHub Releases](https://github.com/SubtitleEdit/subtitleedit/releases)' },
          { '选项': 'macOS', '获取方式': '适用于 Apple 芯片或 Intel 的 .dmg，拖入“应用程序”即可；据 README 已签名并通过公证' },
          { '选项': 'Linux', '获取方式': 'Flatpak（内含 mpv 和 ffmpeg），或 x64、ARM64 的 tar.gz' },
          { '选项': '官网', '获取方式': '[nikse.dk/subtitleedit](https://www.nikse.dk/subtitleedit)' },
          { '选项': '隐私政策', '获取方式': '没有独立页面；[README 的 Privacy 部分](https://github.com/SubtitleEdit/subtitleedit#-privacy)即开发者的声明' },
          { '选项': '源代码', '获取方式': '[github.com/SubtitleEdit/subtitleedit](https://github.com/SubtitleEdit/subtitleedit)，MIT 许可' },
        ],
        note: '审阅的版本：5.3.0，即 GitHub 标记为最新稳定版的 2026年10月14日发布版；5.4.0 的 beta 构建被标记为预发布。5.3.0 的文件大小为 59 至 155 MB，尚不含引擎和模型的下载。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: [
          '**README 要求 Windows 10 22H2 或更新版本、macOS 12 或更新版本（推荐 macOS 14），Linux 上的 tar.gz 版本还需要 mpv 和 ffmpeg。**',
        ],
        columns: ['项目', '来源说明'],
        rows: [
          { '项目': '操作系统', '来源说明': 'Windows 10 22H2 或更新；macOS 12 或更新，推荐 14 或更新；Linux 按 README 的软件包列表' },
          { '项目': 'Linux 软件包', '来源说明': 'tar.gz 版本需要用包管理器安装 mpv 和 ffmpeg；Flatpak 和 macOS 的 .dmg 已内置' },
          { '项目': '引擎下载', '来源说明': '引擎和模型在首次使用时获取；Crisp ASR 的模型列表单个模型从 75 MB 到 9.4 GB 不等' },
          { '项目': '翻译模型', '来源说明': '精选的 llama.cpp 模型大多小于 8 GB，最大的约 12 GB' },
          { '项目': 'GPU 加速', '来源说明': 'Whisper CPP 在 Windows 上提供 CPU、NVIDIA cuBLAS 和 Vulkan；更新日志提到 macOS 用 Metal、Linux 用 Vulkan' },
          { '项目': '网络', '来源说明': '下载引擎和模型以及使用任何在线引擎时需要；本地引擎之后可离线运行' },
        ],
        note: '文档没有给出应用本身的内存或显存最低要求；所需资源取决于所选引擎和模型，遇到“CUDA out of memory”错误时建议改用更小的模型。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤依据项目文档整理，PromptQuorum 并未实际执行。**',
        ],
        numberedItems: [
          {
            title: '安装并打开视频',
            whyItMatters: '运行安装程序、dmg 或 Flatpak，然后在 Subtitle Edit 中打开视频文件或已有字幕。',
          },
          {
            title: '通过 Video、Speech to text 转写',
            whyItMatters: '选择引擎和模型，指定音频语言或使用自动检测，首次使用时让应用先下载引擎，再点击 Transcribe。',
          },
          {
            title: '检查结果',
            whyItMatters: '调整后处理选项，阅读标出过短、过长、重叠或重复行的质量报告，再手动修正字幕列表。',
          },
          {
            title: '通过 Translate、Auto-translate 翻译',
            whyItMatters: '选择引擎和语言对，开始翻译，并排核对原文与译文，最后点击 OK 确认。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: [
          '**以下每一项都来自项目文档或发布说明，PromptQuorum 均未实测。**',
        ],
        items: [
          '**语音转文字引擎。** Whisper CPP、Purfview Faster Whisper XXL、Whisper CTranslate2、Whisper Const-me（Windows）、WhisperX 和 Python 版 Whisper 流程，另有 Qwen3 ASR CPP 以及带 Parakeet、Canary 等后端的 Crisp ASR；在线可选 OpenRouter、Alibaba Qwen3-ASR 和 Google Cloud Speech-to-Text。',
          '**转写辅助功能。** 批处理模式、自动语言检测、语音活动检测设置、Whisper 可选的“Translate to English”、后处理和质量报告。',
          '**本地翻译。** 由应用管理的 llama.cpp 服务器，搭配 TranslateGemma、Gemma 4、Qwen 等精选模型，以及 Ollama、LM Studio，还有按批次带上下文、剧情简介和术语表翻译的“advanced”版本；MADLAD 引擎覆盖 419 种语言。',
          '**云端翻译。** Google 翻译、Microsoft Bing、DeepL、ChatGPT、Anthropic、Gemini 等，多数需自备 API 密钥，另有兼容 OpenAI 的引擎，可对接任何使用该 API 的服务器。',
          '**核心之外。** 按文档所列，还有带波形的视频播放器、用于图像字幕的 OCR、文字转语音和生成背景音乐。',
        ],
        note: 'AI 功能是可选的；不安装任何引擎，编辑和转换工具照常可用。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**README 称 Subtitle Edit 不会收集、存储、传输或分析你的字幕文件、媒体文件及元数据，编辑、转换、播放和本地自动备份都在你的设备上完成。** Whisper CPP、llama.cpp、Ollama 和 LM Studio 等本地引擎在你的电脑上，或在你让应用连接的服务器上处理音频或文本。',
          '例外是你自己启用的功能。据 README，翻译、语音转文字、文字转语音、OCR 或词典查询等可选在线服务只会收到该次请求所需的数据，由应用直接发送，并受服务商自身隐私政策约束。引擎说明把 Google 翻译、DeepL、ChatGPT、Anthropic、Gemini 和在线语音引擎标为需要联网的服务，多数还需要 API 密钥。“兼容 OpenAI”和“llama.cpp remote server”设置会把文本发送到你填写的地址。',
        ],
        callouts: [
          {
            type: 'note',
            text: '以上是开发者的声明，不是审计结果。代码虽然开源，但 PromptQuorum 没有阅读它，也没有检查应用的网络流量；引擎和模型从哪些服务器下载同样未经核实。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**字幕师和视频剪辑人员**，希望在一个编辑器里完成转写、对轴和翻译，而不是在多个工具之间切换。',
          '**注重隐私的创作者**，更愿意使用本地 Whisper 引擎和本地翻译模型，而不是上传媒体文件。',
          '**要处理整季剧集的人**，需要对每个文件应用相同的转换或翻译。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**准确度与质量。** PromptQuorum 没有运行任何语音或翻译引擎，因此不评估词错误率、幻觉现象和翻译质量。',
          '**速度与硬件。** 未测量任何耗时或内存数据；CUDA、Vulkan 和 Metal 后端在真实文件上的效果未经测试。',
          '**官网文字内容。** nikse.dk 页面由 JavaScript 渲染，未能读取；本文信息来自 GitHub 和文档站点。',
          '**下载来源。** 文档称引擎和模型会自动下载，但具体来自哪些服务器未经核实。',
          '**预发布版的稳定性。** 5.4.0 仍处于 beta 阶段，稳定版 5.3.0 之前本身也经历了数十个 beta 和候选版本，行为可能很快变化。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[Whisper.cpp](/zh/power-local-llm/whisper-cpp-review)', '平台': 'Windows、macOS、Linux', '价格 / 许可证': '免费 / MIT', '主要区别': 'Subtitle Edit 以 Whisper CPP 之名列出的引擎本体；是命令行和库工具，没有字幕编辑器' },
          { '应用': '[faster-whisper](/zh/power-local-llm/faster-whisper-review)', '平台': 'Windows、macOS、Linux', '价格 / 许可证': '免费 / MIT', '主要区别': '用于快速 Whisper 转写的 Python 库；字幕工作流需自行搭建' },
          { '应用': '[MacWhisper](/zh/power-local-llm/macwhisper-review)', '平台': 'macOS', '价格 / 许可证': '免费增值 / 专有', '主要区别': '专注转写、一次性买断的 Mac 应用；Subtitle Edit 另有格式编辑和引擎选择' },
          { '应用': '[TranscriptionSuite](/zh/power-local-llm/transcriptionsuite-review)', '平台': 'Windows、macOS、Linux', '价格 / 许可证': '免费 / GPL-3.0', '主要区别': '本地转写，带实时模式、说话人标注和音频笔记本（据其目录条目）' },
        ],
        note: '做决定前，请在各应用自己的页面上确认其当前价格、许可证和支持平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '第一次转写需要联网吗？',
            a: '需要，仅一次：应用会在首次使用时下载所选引擎和模型。第三方组件页面还介绍了如何把文件手动放入应用的数据文件夹，该文件夹在 Windows 上是 %APPDATA%\\Subtitle Edit，在 Linux 和 macOS 上是 ~/.config/Subtitle Edit。',
          },
          {
            q: 'NVIDIA 显卡适合哪个 Whisper 引擎？',
            a: '文档建议在 NVIDIA GPU 上用 Whisper CPP 的 cuBLAS 后端或 Purfview Faster Whisper XXL 获得最快的转写速度，遇到 CUDA 显存不足错误时换用更小的模型。',
          },
          {
            q: '它能标出谁在说话吗？',
            a: '能，需使用 Crisp ASR 引擎。“Detect speakers”采用 NVIDIA 的 Sortformer 说话人分离，最多支持 8 位说话人，首次使用时下载 107 MB 的模型，并要求 Crisp ASR v0.8.37 或更新版本。',
          },
          {
            q: '能用列表里没有的翻译模型吗？',
            a: '能。把 .gguf 文件放进 llama.cpp/models 文件夹，或勾选“Use remote server”并指向你自己的 llama-server。文档指出 TranslateGemma 27B 需要约 16 GB 的下载量和约 20 GB 显存，并认为 12B 模型本身已是不错的选择。',
          },
          {
            q: '不用图形界面也能使用吗？',
            a: '可以，使用 seconv，即每个版本都附带发布的命令行转换工具。它的自动翻译支持兼容 OpenAI 的引擎和 DeepL，并提供 --translate-api-key 和 --translate-prompt 选项。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Subtitle Edit 是一款历史悠久、免费且采用开放许可的编辑器，如今在传统字幕工具之外，集成了本地 Whisper 转写和本地大模型翻译；其更新日志显示 2026年10月20日至24日之间发布了四个预发布版本。不足在于：AI 引擎需要另行下载，体积可达数 GB；云端引擎会把你的文本或音频发给第三方；最新系列仍处于 beta 阶段；输出质量方面，我们在此没能核实任何内容。它适合已经在处理字幕、希望在自己电脑上一站式完成转写与翻译的人；如果只需要一份文字稿，专门的转写工具可能更简单。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[GitHub 上的 Subtitle Edit](https://github.com/SubtitleEdit/subtitleedit) — 仓库、MIT 许可，以及含系统要求和 Privacy 部分的 README，2026年10月24日核对。',
          '[GitHub Releases](https://github.com/SubtitleEdit/subtitleedit/releases) — v5.3.0（2026年10月14日）、预发布版 v5.4.0-beta6（2026年10月24日）、下载文件和更新日志，2026年10月24日核对。',
          '[Speech to Text 文档](https://subtitleedit.github.io/subtitleedit/features/speech-to-text.html) — 引擎、模型、Crisp ASR 后端、说话人检测和使用提示，2026年10月24日核对。',
          '[Auto Translate 文档](https://subtitleedit.github.io/subtitleedit/features/auto-translate.html)与 [Advanced Local Engines](https://subtitleedit.github.io/subtitleedit/features/auto-translate-advanced.html) — 翻译引擎、自定义模型和批处理设置，2026年10月24日核对。',
          '[Third-Party Components](https://subtitleedit.github.io/subtitleedit/third-party-components.html)与 [FAQ](https://subtitleedit.github.io/subtitleedit/faq.html) — 数据文件夹、组件位置、格式和许可证，2026年10月24日核对。',
          '[Subtitle Edit 官网](https://www.nikse.dk/subtitleedit) — 官方网站；由 JavaScript 渲染，本评测未读取其文字内容。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Whisper.cpp 评测](/zh/power-local-llm/whisper-cpp-review) — Subtitle Edit 其中一个语音转文字选项背后的本地引擎。',
          '[MacWhisper 评测](/zh/power-local-llm/macwhisper-review) — 一次性买断的 Mac 转写应用。',
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
    heroImage: '/images/subtitle-edit-review-hero-ko.webp',
    title: 'Subtitle Edit 리뷰: 로컬 Whisper 전사와 자동 번역',
    seoTitle: 'Subtitle Edit 리뷰: 로컬 Whisper 전사와 자동 번역',
    intro:
      'Subtitle Edit는 [Nikse](https://www.nikse.dk/subtitleedit)와 여러 기여자가 개발한 Windows, macOS, Linux용 무료 오픈소스 자막 편집기입니다. 자막 파일을 편집하고 변환하는 기능 외에도 Whisper 계열 엔진으로 영상을 전사하고, 로컬 또는 클라우드 모델로 자막을 번역할 수 있으며, 이 리뷰는 바로 그 부분을 다룹니다. 2026년 10월 24일에 확인한 프로젝트의 GitHub 페이지, 릴리스 노트, 문서를 바탕으로 하며, PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription:
      'Subtitle Edit 리뷰: 로컬 Whisper 계열 전사와 로컬 LLM 또는 클라우드 자동 번역을 갖춘 무료 MIT 라이선스 자막 편집기. 문서 기반이며 직접 테스트하지 않았습니다.',
    twitterDescription:
      'Subtitle Edit 리뷰: 로컬 Whisper 엔진으로 전사하고 Ollama, LM Studio, 클라우드 API로 번역합니다. 무료이며 MIT 라이선스입니다. 문서로 확인된 내용과 확인하지 못한 내용을 정리했습니다.',
    audience:
      '자막을 자신의 컴퓨터에서 전사하고 번역하려는 자막 제작자, 영상 편집자, 크리에이터를 위한 글입니다. 어떤 부분이 로컬에서 실행되고, 무엇을 내려받으며, 무엇이 확인되지 않았는지 알아야 하는 분께 적합합니다.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'subtitle edit 리뷰',
    targetKeywords: [
      'subtitle edit 리뷰',
      'subtitle edit whisper',
      'subtitle edit 자동 번역',
      '로컬 whisper 자막 생성',
      '오프라인 자막 번역 ollama',
      '오픈소스 자막 편집기',
      'subtitle edit 음성 인식',
    ],
    current_models_mentioned: ['Whisper', 'Qwen3 ASR', 'Parakeet', 'TranslateGemma'],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Apple Metal', 'Vulkan'],
    leadAnswerBlock:
      '**Subtitle Edit(안정 버전 5.3.0, 2026년 10월 14일 출시)는 Windows, macOS, Linux용 무료 MIT 라이선스 자막 편집기로, Whisper 계열 음성 인식과 로컬 LLM 자동 번역을 사용자의 컴퓨터에서 실행할 수 있습니다.** AI 엔진은 선택적으로 내려받으며, 함께 나열된 클라우드 엔진은 선택한 제공업체로 데이터를 보냅니다. 여기 적은 모든 내용은 테스트가 아니라 프로젝트 자체 페이지에 근거합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Subtitle Edit는 자막을 로컬에서 전사하고 번역할 수 있나요?',
        answer:
          '문서에 따르면 가능합니다. Whisper 계열 등의 음성 인식 엔진을 내려받고, 사용자의 컴퓨터에서 실행되는 llama.cpp, Ollama, LM Studio 모델로 번역할 수 있습니다. 같은 화면에는 API 키가 필요하고 제3자에게 데이터를 보내는 온라인 엔진도 함께 나열됩니다.',
        bullets: [
          'Video, Speech to text에는 Whisper CPP, Purfview Faster Whisper XXL, WhisperX 등의 엔진이 있습니다.',
          'Translate, Auto-translate에서는 로컬 엔진과 클라우드 엔진이 하나의 목록에 나열됩니다.',
          '일괄 처리 모드와 명령줄 도구 seconv로 많은 파일을 한 번에 처리할 수 있습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Subtitle Edit란?', anchor: 'what-is-subtitle-edit' },
      { label: '입수 방법', anchor: 'get-it' },
      { label: '요구 사항', anchor: 'requirements' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '출처로 확인된 기능', anchor: 'key-features' },
      { label: '데이터 흐름과 개인정보', anchor: 'privacy' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 사항', anchor: 'who-should-not-use' },
      { label: '경쟁 제품과 대안', anchor: 'vs-alternatives' },
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
            text: 'Subtitle Edit는 오픈소스 데스크톱 자막 편집기로, 음성 인식과 자동 번역 대화상자에서 사용자의 컴퓨터에서 실행되는 엔진을 쓸 수 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '영상을 열고 Whisper 계열 엔진과 모델을 고르면 시간 정보가 붙은 자막 파일이 만들어지고, 이를 로컬 모델이나 원하는 온라인 서비스로 번역합니다.',
          },
        ],
        items: [
          '유지 관리: 안정 버전 5.3.0 위에 사전 릴리스 5.4.0-beta6이 2026년 10월 24일에 공개되어, 방치된 프로젝트 경고는 해당하지 않습니다.',
          '음성 인식: 컴퓨터에서 실행되는 Whisper 계열 등의 엔진과 일부 온라인 엔진.',
          '번역: llama.cpp, Ollama, LM Studio의 로컬 모델, 또는 자신의 키를 쓰는 클라우드 API.',
          '비용: MIT 라이선스로 무료이며, 프로젝트 FAQ에 따르면 광고와 기능 제한이 없습니다.',
          '개발자: Nikse와 기여자들이며, 전체 소스 코드는 GitHub에 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 24일에 확인한 GitHub 저장소, 릴리스 노트, 프로젝트 문서에 근거합니다. PromptQuorum은 앱을 설치하거나 실행하지 않았으므로 전사와 번역의 품질은 평가하지 않습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-subtitle-edit',
        title: 'Subtitle Edit란?',
        content: [
          '**Subtitle Edit는 자막을 만들고, 동기화하고, 변환하고, 번역하는 데스크톱 편집기이며, 최신 버전은 이 핵심 기능 주변에 AI 기능을 더했습니다.** 프로젝트 FAQ에 따르면 380개가 넘는 자막 형식을 지원하며, Windows, macOS, Linux용 빌드는 프로젝트의 [GitHub 릴리스 페이지](https://github.com/SubtitleEdit/subtitleedit/releases)에서 배포됩니다.',
          'AI 기능은 편집기 본체와 분리되어 있습니다. 음성 인식, 자동 번역, 광학 문자 인식(OCR), 음성 합성은 각각 앱이 처음 사용할 때 내려받거나 API로 연결하는 엔진을 사용합니다. 이 리뷰는 음성 인식과 자동 번역에 집중하며, 문서는 현재 세대를 Subtitle Edit 5라고 부릅니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Subtitle Edit는 Windows, macOS, Linux용으로 무료로 내려받을 수 있으며, 모든 플랫폼에 설치 프로그램 또는 디스크 이미지가 있습니다.**',
        ],
        columns: ['옵션', '입수 방법'],
        rows: [
          { '옵션': 'Windows', '입수 방법': 'x64용 설치 프로그램(Setup.exe) 또는 휴대용 zip, ARM64용 zip. [GitHub Releases](https://github.com/SubtitleEdit/subtitleedit/releases)에서 받습니다' },
          { '옵션': 'macOS', '입수 방법': 'Apple 실리콘용 또는 Intel용 .dmg를 응용 프로그램으로 끌어다 놓습니다. README에 따르면 서명 및 공증됨' },
          { '옵션': 'Linux', '입수 방법': 'Flatpak(mpv와 ffmpeg 포함) 또는 x64와 ARM64용 tar.gz' },
          { '옵션': '웹사이트', '입수 방법': '[nikse.dk/subtitleedit](https://www.nikse.dk/subtitleedit)' },
          { '옵션': '개인정보 처리방침', '입수 방법': '별도 페이지는 없으며, [README의 Privacy 항목](https://github.com/SubtitleEdit/subtitleedit#-privacy)이 개발자의 공식 입장입니다' },
          { '옵션': '소스 코드', '입수 방법': '[github.com/SubtitleEdit/subtitleedit](https://github.com/SubtitleEdit/subtitleedit), MIT 라이선스' },
        ],
        note: '확인한 버전: 5.3.0으로, GitHub가 최신 안정 버전으로 표시한 2026년 10월 14일 릴리스입니다. 5.4.0 베타 빌드는 사전 릴리스로 표시됩니다. 5.3.0 파일은 엔진이나 모델을 내려받기 전 기준으로 59~155 MB입니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: [
          '**README는 Windows 10 버전 22H2 이상, macOS 12 이상(macOS 14 권장)을 요구하며, Linux의 tar.gz 빌드에는 mpv와 ffmpeg가 필요합니다.**',
        ],
        columns: ['항목', '출처의 설명'],
        rows: [
          { '항목': '운영체제', '출처의 설명': 'Windows 10 22H2 이상, macOS 12 이상(14 이상 권장), Linux는 README의 패키지 목록에 따름' },
          { '항목': 'Linux 패키지', '출처의 설명': 'tar.gz 빌드는 패키지 관리자의 mpv와 ffmpeg가 필요하며, Flatpak과 macOS .dmg에는 포함되어 있음' },
          { '항목': '엔진 다운로드', '출처의 설명': '엔진과 모델은 처음 사용할 때 내려받으며, Crisp ASR 모델 목록은 모델당 75 MB에서 9.4 GB까지' },
          { '항목': '번역 모델', '출처의 설명': '선별된 llama.cpp 모델은 대부분 8 GB 미만이고 가장 큰 것은 약 12 GB' },
          { '항목': 'GPU 가속', '출처의 설명': 'Whisper CPP는 Windows에서 CPU, NVIDIA cuBLAS, Vulkan을 제공하며, 변경 이력에는 macOS의 Metal과 Linux의 Vulkan이 언급됨' },
          { '항목': '인터넷', '출처의 설명': '엔진과 모델 다운로드 및 모든 온라인 엔진에 필요하며, 로컬 엔진은 이후 오프라인으로 동작' },
        ],
        note: '문서에는 앱 자체의 RAM이나 VRAM 최소 사양이 없습니다. 필요한 양은 선택한 엔진과 모델에 따라 달라지며, "CUDA out of memory" 오류에는 더 작은 모델을 쓰도록 안내합니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**아래 단계는 프로젝트 문서를 따른 것이며, PromptQuorum은 직접 실행하지 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '설치하고 영상 열기',
            whyItMatters: '설치 프로그램, dmg 또는 Flatpak을 실행한 뒤, Subtitle Edit에서 영상 파일이나 기존 자막을 엽니다.',
          },
          {
            title: 'Video, Speech to text로 전사하기',
            whyItMatters: '엔진과 모델을 고르고 오디오 언어를 지정하거나 자동 감지를 사용합니다. Transcribe를 누르기 전에 처음에는 앱이 엔진을 내려받도록 합니다.',
          },
          {
            title: '결과 확인하기',
            whyItMatters: '후처리 옵션을 조정하고, 너무 짧거나 긴 줄, 겹치는 줄, 반복되는 줄을 표시하는 품질 보고서를 읽은 뒤 표를 직접 수정합니다.',
          },
          {
            title: 'Translate, Auto-translate로 번역하기',
            whyItMatters: '엔진과 언어 쌍을 고르고 번역한 다음, 원문과 번역문을 나란히 확인하고 OK로 확정합니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 프로젝트 문서나 릴리스 노트에서 가져온 것이며, PromptQuorum은 어느 것도 테스트하지 않았습니다.**',
        ],
        items: [
          '**음성 인식 엔진.** Whisper CPP, Purfview Faster Whisper XXL, Whisper CTranslate2, Whisper Const-me(Windows), WhisperX, Python 기반 Whisper 워크플로에 더해 Qwen3 ASR CPP와 Parakeet, Canary 같은 백엔드를 가진 Crisp ASR가 있으며, 온라인으로는 OpenRouter, Alibaba Qwen3-ASR, Google Cloud Speech-to-Text를 고를 수 있습니다.',
          '**전사 보조 기능.** 일괄 처리 모드, 자동 언어 감지, 음성 활동 감지 설정, Whisper용 선택 옵션 "Translate to English", 후처리, 품질 보고서.',
          '**로컬 번역.** TranslateGemma, Gemma 4, Qwen 같은 선별 모델을 쓰는 앱 관리형 llama.cpp 서버, Ollama, LM Studio, 그리고 문맥·줄거리·용어집과 함께 일괄 번역하는 "advanced" 변형이 있으며, MADLAD 엔진은 419개 언어를 지원합니다.',
          '**클라우드 번역.** Google 번역, Microsoft Bing, DeepL, ChatGPT, Anthropic, Gemini 등이며 대부분 자신의 API 키를 사용하고, 해당 API를 쓰는 모든 서버에 연결하는 OpenAI 호환 엔진도 있습니다.',
          '**핵심 기능 주변.** 문서에 나열된 대로 파형이 있는 동영상 플레이어, 이미지 자막용 OCR, 음성 합성, 생성형 배경음악이 있습니다.',
        ],
        note: 'AI 기능은 선택 사항이며, 엔진을 하나도 설치하지 않아도 편집·변환 도구는 사용할 수 있습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**README에 따르면 Subtitle Edit는 자막 파일, 미디어 파일, 메타데이터를 수집·저장·전송·분석하지 않으며, 편집, 변환, 재생, 로컬 자동 백업은 사용자의 기기에서 실행됩니다.** Whisper CPP, llama.cpp, Ollama, LM Studio 같은 로컬 엔진은 오디오나 텍스트를 사용자의 컴퓨터 또는 앱을 연결한 서버에서 처리합니다.',
          '예외는 사용자가 직접 켠 기능입니다. README에 따르면 번역, 음성 인식, 음성 합성, OCR, 사전 조회 같은 선택적 온라인 서비스에는 해당 요청에 필요한 데이터만 앱에서 직접 전송되며, 제공업체 자체의 개인정보 처리방침이 적용됩니다. 엔진 설명은 Google 번역, DeepL, ChatGPT, Anthropic, Gemini, 온라인 음성 엔진을 인터넷 접속이 필요한 서비스로 표시하며 대부분 API 키도 필요합니다. "OpenAI 호환"과 "llama.cpp remote server" 설정은 입력한 주소로 텍스트를 보냅니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발자의 선언이며 감사 결과가 아닙니다. 코드는 공개되어 있지만 PromptQuorum은 읽어 보지 않았고 앱의 네트워크 트래픽도 점검하지 않았으며, 엔진과 모델을 내려받는 서버도 확인하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**자막 제작자와 영상 편집자.** 여러 도구 대신 하나의 편집기에서 전사, 싱크, 번역을 끝내고 싶은 분.',
          '**개인정보를 중시하는 크리에이터.** 미디어를 업로드하기보다 로컬 Whisper 엔진과 로컬 번역 모델을 선호하는 분.',
          '**여러 회차를 한꺼번에 다루는 분.** 모든 파일에 같은 변환이나 번역을 적용해야 하는 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**정확도와 품질.** PromptQuorum은 음성 인식이나 번역 엔진을 실행하지 않았으므로 단어 오류율, 환각, 번역 품질은 평가하지 않습니다.',
          '**속도와 하드웨어.** 소요 시간이나 메모리 사용량을 측정하지 않았으며, CUDA, Vulkan, Metal 백엔드가 실제 파일에 미치는 효과는 테스트하지 않았습니다.',
          '**공식 웹사이트의 본문.** nikse.dk 페이지는 JavaScript로 렌더링되어 읽지 못했으며, 여기 내용은 GitHub와 문서 사이트에 근거합니다.',
          '**다운로드 출처.** 문서는 엔진과 모델이 자동으로 내려받아진다고 하지만, 어떤 서버에서 받는지는 확인하지 않았습니다.',
          '**사전 릴리스의 안정성.** 5.4.0은 아직 베타이고, 안정 버전 5.3.0도 수십 개의 베타 및 릴리스 후보 빌드를 거쳤으므로 동작이 빠르게 바뀔 수 있습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이점'],
        rows: [
          { '앱': '[Whisper.cpp](/ko/power-local-llm/whisper-cpp-review)', '플랫폼': 'Windows, macOS, Linux', '가격 / 라이선스': '무료 / MIT', '핵심 차이점': 'Subtitle Edit가 Whisper CPP로 나열하는 엔진 자체이며, 자막 편집기가 없는 명령줄·라이브러리 도구' },
          { '앱': '[faster-whisper](/ko/power-local-llm/faster-whisper-review)', '플랫폼': 'Windows, macOS, Linux', '가격 / 라이선스': '무료 / MIT', '핵심 차이점': '빠른 Whisper 전사용 Python 라이브러리이며, 자막 워크플로는 직접 구성해야 함' },
          { '앱': '[MacWhisper](/ko/power-local-llm/macwhisper-review)', '플랫폼': 'macOS', '가격 / 라이선스': '프리미엄 / 독점', '핵심 차이점': '전사에 집중한 1회 구매형 Mac 앱이며, Subtitle Edit는 형식 편집과 엔진 선택이 더해짐' },
          { '앱': '[TranscriptionSuite](/ko/power-local-llm/transcriptionsuite-review)', '플랫폼': 'Windows, macOS, Linux', '가격 / 라이선스': '무료 / GPL-3.0', '핵심 차이점': '실시간 모드, 화자 표시, 오디오 노트북을 갖춘 로컬 전사(디렉터리 항목 기준)' },
        ],
        note: '결정하기 전에 각 앱의 현재 가격, 라이선스, 플랫폼을 해당 앱 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '첫 전사에 인터넷이 필요한가요?',
            a: '네, 한 번만 필요합니다. 앱이 선택한 엔진과 모델을 처음 사용할 때 내려받습니다. 서드파티 구성 요소 페이지에는 파일을 앱의 데이터 폴더에 직접 넣는 방법도 나와 있으며, 이 폴더는 Windows에서 %APPDATA%\\Subtitle Edit, Linux와 macOS에서 ~/.config/Subtitle Edit입니다.',
          },
          {
            q: 'NVIDIA 그래픽 카드에는 어떤 Whisper 엔진이 맞나요?',
            a: '문서는 NVIDIA GPU에서 가장 빠른 전사를 위해 Whisper CPP의 cuBLAS 백엔드 또는 Purfview Faster Whisper XXL을 권하며, CUDA 메모리 부족 오류가 나면 더 작은 모델을 쓰도록 안내합니다.',
          },
          {
            q: '누가 말하는지 표시할 수 있나요?',
            a: '네, Crisp ASR 엔진에서 가능합니다. "Detect speakers"는 NVIDIA의 Sortformer 화자 분리를 사용해 최대 8명까지 구분하고, 처음 사용할 때 107 MB 모델을 내려받으며, Crisp ASR v0.8.37 이상이 필요합니다.',
          },
          {
            q: '목록에 없는 번역 모델도 쓸 수 있나요?',
            a: '네. .gguf 파일을 llama.cpp/models 폴더에 넣거나, "Use remote server"를 체크하고 자신의 llama-server를 지정하면 됩니다. 문서에 따르면 TranslateGemma 27B는 약 16 GB 다운로드와 약 20 GB VRAM이 필요하며, 12B 모델도 이미 충분히 강력한 선택이라고 설명합니다.',
          },
          {
            q: '그래픽 인터페이스 없이도 사용할 수 있나요?',
            a: '네, 매 릴리스와 함께 배포되는 명령줄 변환기 seconv를 쓰면 됩니다. 자동 번역은 OpenAI 호환 엔진과 DeepL을 지원하며, --translate-api-key와 --translate-prompt 옵션이 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Subtitle Edit는 오랫동안 이어져 온 무료 오픈 라이선스 편집기로, 기존 자막 도구와 함께 로컬 Whisper 전사와 로컬 LLM 번역을 이제 한곳에 묶었으며, 변경 이력에는 2026년 10월 20일부터 24일 사이에 사전 릴리스 네 건이 올라 있습니다. 반면 AI 엔진은 수 GB에 이를 수 있는 별도 다운로드이고, 클라우드 엔진은 텍스트나 오디오를 제3자에게 보내며, 최신 계열은 아직 베타이고, 출력 품질에 관해서는 여기서 확인할 수 있는 것이 없었습니다. 이미 자막을 다루면서 자신의 컴퓨터에서 전사와 번역을 한곳에서 하고 싶은 분께 맞고, 전사본만 필요한 분께는 전용 전사 도구가 더 간단할 수 있습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[GitHub의 Subtitle Edit](https://github.com/SubtitleEdit/subtitleedit) — 저장소, MIT 라이선스, 시스템 요구 사항과 Privacy 항목이 있는 README. 2026년 10월 24일 확인.',
          '[GitHub Releases](https://github.com/SubtitleEdit/subtitleedit/releases) — v5.3.0(2026년 10월 14일), 사전 릴리스 v5.4.0-beta6(2026년 10월 24일), 다운로드 파일, 변경 이력. 2026년 10월 24일 확인.',
          '[Speech to Text 문서](https://subtitleedit.github.io/subtitleedit/features/speech-to-text.html) — 엔진, 모델, Crisp ASR 백엔드, 화자 감지, 팁. 2026년 10월 24일 확인.',
          '[Auto Translate 문서](https://subtitleedit.github.io/subtitleedit/features/auto-translate.html)와 [Advanced Local Engines](https://subtitleedit.github.io/subtitleedit/features/auto-translate-advanced.html) — 번역 엔진, 사용자 모델, 일괄 처리 설정. 2026년 10월 24일 확인.',
          '[Third-Party Components](https://subtitleedit.github.io/subtitleedit/third-party-components.html)와 [FAQ](https://subtitleedit.github.io/subtitleedit/faq.html) — 데이터 폴더, 구성 요소 위치, 형식, 라이선스. 2026년 10월 24일 확인.',
          '[Subtitle Edit 웹사이트](https://www.nikse.dk/subtitleedit) — 공식 사이트이며 JavaScript로 렌더링되어 이 리뷰에서는 본문을 읽지 않았습니다.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Whisper.cpp 리뷰](/ko/power-local-llm/whisper-cpp-review) — Subtitle Edit의 음성 인식 옵션 중 하나 뒤에 있는 로컬 엔진.',
          '[MacWhisper 리뷰](/ko/power-local-llm/macwhisper-review) — 1회 구매형 Mac 전사 앱.',
          '[음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 이 리뷰가 속한 카테고리 비교.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그.',
        ],
      },
    },
  },
}
