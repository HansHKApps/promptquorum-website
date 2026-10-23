// TranscriptionSuite Review: free local speech-to-text app with speaker labels, live mode and an audio notebook
// Slug: transcriptionsuite-review
// Companion to: meetily-review, macwhisper-review, faster-whisper-review, izwi-review

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-18',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/transcriptionsuite-review-hero-en.webp',
    title: 'TranscriptionSuite Review: Free Local Speech-to-Text with Speaker Labels',
    seoTitle: 'TranscriptionSuite Review: Free Local Speech-to-Text',
    intro:
      'TranscriptionSuite is a free, open-source desktop app that turns speech into text on your own computer, with live transcription, speaker labels, a searchable audio notebook and a choice of speech models. This review covers what its website, README and GitHub releases document, what they leave out, and how it compares with other transcription tools in the directory.',
    metaDescription:
      'TranscriptionSuite review: free GPL-3.0 speech-to-text app for Windows, macOS and Linux with speaker labels, live mode and an API. Not hands-on tested.',
    twitterDescription:
      'TranscriptionSuite review: a free, open-source local speech-to-text app with speaker labels, live mode and an audio notebook. Install, models, privacy, limits and alternatives.',
    audience:
      'People who want accurate, private transcripts of meetings, lectures and dictation — covers install, models, hardware, privacy, limits and alternatives.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'TranscriptionSuite review',
    targetKeywords: [
      'transcriptionsuite review',
      'transcriptionsuite',
      'local speech to text app',
      'offline transcription speaker diarization',
      'whisper parakeet desktop app',
      'openai compatible transcription server',
      'audio notebook local ai',
    ],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Apple silicon', 'AMD Vulkan', 'Intel Vulkan', 'CPU'],
    leadAnswerBlock:
      '**TranscriptionSuite is a free, GPL-3.0 speech-to-text app that runs speech models on your own computer and adds live transcription, speaker labels, a calendar-based audio notebook and an OpenAI-compatible API.** Its README says audio and transcripts never leave your machine. This review covers version 1.3.10 and is based on the public website, README and GitHub releases, not on hands-on testing.',
    quickAnswerTop: {
      en: {
        question: 'Is TranscriptionSuite worth trying for private, local transcription?',
        answer:
          'Probably, if you transcribe meetings, lectures or interviews and want speaker labels without a cloud service. Check two things first: Windows and Linux need Docker for the server, and the author describes the project as a one-person, vibe-coded hobby project.',
        bullets: [
          'Dashboard installers for Windows, Linux and macOS; Apple silicon Macs get a bundled build with no Docker.',
          'Longform recording, a real-time Live Mode, and file import with text or subtitle export.',
          'Speaker labels, 90+ languages with Whisper, and several model families.',
          'A searchable audio notebook, global dictation shortcuts and an OpenAI-compatible API.',
          'Free and open source; model weights download on first use, then it works offline.',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get TranscriptionSuite', anchor: 'get-it' },
      { label: 'TranscriptionSuite at a Glance', anchor: 'at-a-glance' },
      { label: 'What TranscriptionSuite Is', anchor: 'what-is-transcriptionsuite' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Features', anchor: 'features' },
      { label: 'Models and Hardware', anchor: 'models-hardware' },
      { label: 'Privacy, License and Cost', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'TranscriptionSuite vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use TranscriptionSuite', anchor: 'who-should-use' },
      { label: 'Who Should Not Use TranscriptionSuite', anchor: 'who-should-not-use' },
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
            text: 'TranscriptionSuite is an open-source desktop app that transcribes audio with speech models running on your own computer and labels who said what.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a private transcription studio: record a lecture, dictate into any app or drop in an audio file, and get a transcript with speaker labels without sending the recording to a cloud service.',
          },
        ],
        items: [
          'Version reviewed: 1.3.10, released 24 September 2026; the repository was last updated on 4 October 2026, so no stale-project warning applies.',
          'License and price: GPL-3.0 or later per the README; free, with no account.',
          'Platforms: Windows 11 and Linux (x64) and macOS; the server runs in Docker except on Apple silicon Macs.',
          'Standout features: Live Mode, speaker labels, audio notebook, OpenAI-compatible API, webhooks.',
          'Maturity: about 775 GitHub stars and a single maintainer who calls the project vibe-coded.',
        ],
      },
      getItTranscriptionsuite: {
        id: 'get-it',
        title: 'Get TranscriptionSuite',
        content: [
          '**TranscriptionSuite is a two-part app: a dashboard you install, and a server it downloads and manages for you.** The files are attached to the [latest GitHub release](https://github.com/homelab-00/TranscriptionSuite/releases/latest); the rows below run from easiest to most involved.',
        ],
        columns: ['Platform', 'Get It'],
        rows: [
          { 'Platform': 'macOS, Apple silicon (server included)', 'Get It': '[TranscriptionSuite-1.3.10-arm64-mac-metal.dmg](https://github.com/homelab-00/TranscriptionSuite/releases/latest) (about 3-5 GB, no Docker)' },
          { 'Platform': 'macOS, Apple silicon (dashboard only)', 'Get It': '[TranscriptionSuite-1.3.10-arm64-mac.dmg](https://github.com/homelab-00/TranscriptionSuite/releases/latest) (about 200 MB; server runs elsewhere)' },
          { 'Platform': 'Windows (x64)', 'Get It': '[TranscriptionSuite.Setup.1.3.10.exe](https://github.com/homelab-00/TranscriptionSuite/releases/latest) plus Docker Desktop with WSL 2' },
          { 'Platform': 'Linux (x64)', 'Get It': '[TranscriptionSuite-1.3.10.AppImage](https://github.com/homelab-00/TranscriptionSuite/releases/latest) plus Docker or Podman' },
          { 'Platform': 'Website', 'Get It': '[transcriptionsuite.app](https://transcriptionsuite.app/)' },
          { 'Platform': 'Privacy policy', 'Get It': 'No separate privacy-policy page was found; the [README](https://github.com/homelab-00/TranscriptionSuite) describes local processing' },
          { 'Platform': 'Source code', 'Get It': '[github.com/homelab-00/TranscriptionSuite](https://github.com/homelab-00/TranscriptionSuite)' },
        ],
        note: 'Only the Mac build with the bundled server is a plain download-and-open install. On Windows and Linux a terminal-level setup of Docker or Podman is required first. The macOS app is unsigned, so macOS blocks it until you clear the quarantine flag or choose Open Anyway; FFmpeg must also be installed. The README lists an Intel Mac build, but the 1.3.10 release shows only Apple silicon disk images.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'TranscriptionSuite at a Glance',
        columns: ['Attribute', 'TranscriptionSuite'],
        rows: [
          { 'Attribute': 'Platform', 'TranscriptionSuite': 'Windows, macOS, Linux' },
          { 'Attribute': 'Price', 'TranscriptionSuite': 'Free' },
          { 'Attribute': 'License', 'TranscriptionSuite': 'GPL-3.0 or later' },
          { 'Attribute': 'Runs', 'TranscriptionSuite': 'Locally; models download on first use' },
          { 'Attribute': 'Languages', 'TranscriptionSuite': '90+ with Whisper; fewer with other models' },
          { 'Attribute': 'Real-time transcription', 'TranscriptionSuite': 'Yes (Live Mode, Whisper models only)' },
          { 'Attribute': 'Speaker labels', 'TranscriptionSuite': 'Yes, on recordings and imports; not in Live Mode' },
          { 'Attribute': 'Usable on CPU only', 'TranscriptionSuite': 'Yes; NeMo models are not available' },
          { 'Attribute': 'Local API server', 'TranscriptionSuite': 'Yes, OpenAI-compatible transcription endpoint' },
        ],
        note: 'Attributes follow the speech-to-text comparison used in the Local LLM Software Directory. A missing statement on the site means unknown, not unsupported.',
      },
      whatIsTranscriptionsuite: {
        id: 'what-is-transcriptionsuite',
        title: 'What TranscriptionSuite Is',
        content: [
          '**TranscriptionSuite is a transcription app, not a meeting bot or a cloud service.** The README describes an Electron dashboard plus a Python backend that supports Whisper, NVIDIA NeMo, VibeVoice-ASR, SenseVoice, whisper.cpp and MLX models, accelerated by CUDA, Apple Metal or Vulkan, or plain CPU.',
          'The author describes it as a personal tool that grew into a hobby project, built by a mechanical engineer who is not a software engineer; in the README\'s own words, "this whole thing is vibecoded", though not blindly. The author says they use it themselves and do not plan to abandon it.',
          'This review draws on the website, the README and the GitHub releases. It involved no hands-on testing, so accuracy, speed and stability are not rated here.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is a dashboard install, then a server start from inside the app.** The steps follow the README.',
        ],
        numberedItems: [
          {
            title: 'Prepare your platform',
            whyItMatters: 'On Windows and Linux install Docker (Docker Desktop with WSL 2, or Docker or Podman on Linux); on Apple silicon install FFmpeg with Homebrew instead.',
          },
          {
            title: 'Install the dashboard',
            whyItMatters: 'Download the file for your system from the [releases page](https://github.com/homelab-00/TranscriptionSuite/releases/latest); on a Mac, clear the quarantine flag once because the app is unsigned.',
          },
          {
            title: 'Start the server from the Server tab',
            whyItMatters: 'Pick a runtime (CUDA, Metal, Vulkan or CPU) and start it; the first start downloads your chosen model, which can be several gigabytes.',
          },
          {
            title: 'Record, dictate or import a file',
            whyItMatters: 'Use the Session tab to record or import audio, and switch on Speaker Diarization when you need speaker labels.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The feature list is broad for a one-person project.** Everything below comes from the README and website.',
        ],
        items: [
          '**Longform recording.** Record from a microphone or system audio and get the full transcript after you stop, with a rolling preview of the latest 20 seconds.',
          '**Live Mode.** Real-time, sentence-by-sentence transcription for dictation, limited to Whisper-family models and without speaker labels.',
          '**Speaker diarization.** "Who said what" labels for Whisper, NeMo, SenseVoice and VibeVoice models.',
          '**File import.** Drop in audio or video and save plain text or `.srt` / `.ass` subtitles.',
          '**Audio Notebook.** Recordings land in a calendar view with full-text search and an AI assistant that talks to any OpenAI-compatible provider.',
          '**Dictation shortcuts.** System-wide start and stop shortcuts and paste-at-cursor.',
          '**Integrations.** An OpenAI-compatible `/v1/audio/transcriptions` endpoint for tools such as Open WebUI and LM Studio, outgoing webhooks, and remote access over Tailscale or a local network.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Models and Hardware',
        content: [
          '**You choose the speech model, and the app detects your hardware and greys out incompatible options.** On Docker platforms the choices are WhisperX (faster-whisper models), NVIDIA Parakeet v3 and Canary v2, VibeVoice-ASR, SenseVoice and whisper.cpp; on Apple silicon they are the MLX versions of Whisper, Parakeet, Canary and VibeVoice-ASR.',
          'Language coverage depends on the model: Whisper handles 90+ languages and can translate to English, Parakeet and Canary cover 25 European languages, VibeVoice 51, and SenseVoice five. NeMo models do not run on the CPU runtime, and VibeVoice-ASR is a 9-billion-parameter model of about 16 GB.',
          'The developer claims half an hour of audio is transcribed in under a minute with Whisper on an RTX 3060; this review did not reproduce that figure. The README publishes no minimum RAM or VRAM requirement.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy, License and Cost',
        content: [
          '**The README says everything runs on your computer and that audio and transcripts never leave it.** The internet is needed only to download the app and model weights on first use; after that it works offline. Speaker labels with Whisper or NeMo use PyAnnote models, which require a free Hugging Face token.',
          'The AI assistant in the notebook can talk to any OpenAI-compatible provider, including cloud services such as Groq, OpenAI and OpenRouter; anything you send there falls outside the local-only claim. The README also says the app checks for new versions weekly.',
          'The code is GPL-3.0 or later and the app is free. No dedicated privacy-policy page was found. This review did not inspect network traffic, so these statements are the developer\'s own.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Local transcription',
            'What it means in real use': 'Audio stays on your machine.',
            'Limitation / caveat': 'First-use model downloads are large; no accuracy figures are published.',
          },
          {
            'Benefit': 'Speaker labels',
            'What it means in real use': 'Know who said what in meetings.',
            'Limitation / caveat': 'Not available in Live Mode; Sortformer handles only four speakers.',
          },
          {
            'Benefit': 'Many model families',
            'What it means in real use': 'Pick speed, language or accuracy.',
            'Limitation / caveat': 'Which one fits your hardware is up to you.',
          },
          {
            'Benefit': 'OpenAI-compatible API',
            'What it means in real use': 'Other tools can use it as a backend.',
            'Limitation / caveat': 'The model field is accepted but ignored.',
          },
          {
            'Benefit': 'Open source and free',
            'What it means in real use': 'GPL code you can inspect.',
            'Limitation / caveat': 'One maintainer, self-described as vibe-coded; Docker needed on Windows and Linux.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'TranscriptionSuite vs. Alternatives',
        content: [
          'These are the closest speech-to-text tools in the directory: another meeting transcriber, a Mac dictation app, and two engines you would build on.',
        ],
        columns: ['App', 'Platforms', 'Price and license', 'Role', 'Key difference'],
        rows: [
          {
            'App': 'TranscriptionSuite',
            'Platforms': 'Windows, macOS, Linux',
            'Price and license': 'Free, GPL-3.0',
            'Role': 'Transcription app with server',
            'Key difference': 'Live mode, speaker labels, notebook and API in one',
          },
          {
            'App': '[Meetily](/power-local-llm/meetily-review)',
            'Platforms': 'macOS, Windows',
            'Price and license': 'Free (MIT) and paid Pro',
            'Role': 'Meeting transcriber',
            'Key difference': 'Built around meetings; macOS and Windows only',
          },
          {
            'App': '[MacWhisper](/power-local-llm/macwhisper-review)',
            'Platforms': 'macOS',
            'Price and license': 'Freemium, proprietary',
            'Role': 'Mac transcription app',
            'Key difference': 'Mac-only and closed source',
          },
          {
            'App': '[faster-whisper](/power-local-llm/faster-whisper-review)',
            'Platforms': 'Windows, macOS, Linux',
            'Price and license': 'Free, MIT',
            'Role': 'Python speech library',
            'Key difference': 'An engine for developers, no interface',
          },
          {
            'App': '[Izwi](/power-local-llm/izwi-review)',
            'Platforms': 'Windows, macOS, Linux',
            'Price and license': 'Free, MIT',
            'Role': 'Local voice runtime',
            'Key difference': 'Adds speech output and voice cloning behind one API',
          },
        ],
        note: 'Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each project\'s own page before deciding.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use TranscriptionSuite',
        items: [
          '**Anyone who transcribes interviews, lectures or meetings.** Speaker labels and subtitle export target exactly that.',
          '**Mac users with Apple silicon.** The bundled build is the simplest path and needs no Docker.',
          '**People who dictate into other apps.** Live Mode and paste-at-cursor shortcuts cover it.',
          '**Tinkerers with a home server.** Remote access and the API let other devices use one machine.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use TranscriptionSuite',
        items: [
          '**People who want a no-setup installer on Windows or Linux.** Docker comes first.',
          '**Intel Mac owners.** The latest release lists no Intel build.',
          '**Teams that need vendor support.** It is a one-maintainer hobby project.',
          '**Anyone who needs documented compliance.** No privacy-policy page was found.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does TranscriptionSuite need a GPU?',
            a: 'No. A CPU-only runtime exists, but NeMo models are unavailable on it and large models are slow; NVIDIA CUDA, Apple Metal and AMD or Intel Vulkan are optional accelerators.',
          },
          {
            q: 'Why does it need Docker?',
            a: 'The transcription server ships as a container on Windows, Linux and Intel Macs, which the dashboard downloads and manages; Apple silicon Macs run it natively instead.',
          },
          {
            q: 'Can other apps use it as a transcription backend?',
            a: 'Yes. It exposes an OpenAI-compatible transcription endpoint, so tools such as Open WebUI and LM Studio can point at it.',
          },
          {
            q: 'Do I need an account for speaker labels?',
            a: 'Only for the Whisper and NeMo route: PyAnnote needs a free Hugging Face token. SenseVoice, VibeVoice and Sortformer on Apple silicon need none.',
          },
          {
            q: 'Can I run it on one machine and use it from another?',
            a: 'Yes. The README describes remote access over Tailscale or a local network.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'TranscriptionSuite is a strong fit for people who want private, local transcription with speaker labels and are comfortable with Docker, or who own an Apple silicon Mac where the bundled build removes that step.',
          'The caveats are maturity and transparency: a single self-described vibe-coding maintainer, no privacy-policy page, no accuracy benchmarks beyond the author\'s own speed claim, and a macOS app that is unsigned. Try it on non-sensitive recordings first.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[TranscriptionSuite website](https://transcriptionsuite.app/) — product description, features and hardware acceleration.',
          '[TranscriptionSuite README](https://github.com/homelab-00/TranscriptionSuite/blob/main/docs/README.md) — installation, compatibility matrix, API, license and project state.',
          '[TranscriptionSuite on GitHub](https://github.com/homelab-00/TranscriptionSuite) — GPL-3.0 license and star count.',
          '[TranscriptionSuite releases](https://github.com/homelab-00/TranscriptionSuite/releases) — version 1.3.10 and installer files.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Voice and Speech Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — text-to-speech, speech-to-text and voice agents side by side.',
          '[Whisper.cpp Review](/power-local-llm/whisper-cpp-review) — the C++ Whisper engine that TranscriptionSuite can also use.',
          '[Build a Local Voice Assistant](/power-local-llm/build-local-voice-assistant-2026) — wiring speech-to-text into a voice assistant.',
          '[Local Multimodal Pipeline: Voice, Vision and Text](/power-local-llm/local-multimodal-pipeline-voice-vision-text) — combining local speech and vision models.',
          '[The Complete Local LLM Software Directory](/directory) — a broader directory of local AI tools across platforms.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-18',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/transcriptionsuite-review-hero-de.webp',
    title: 'TranscriptionSuite Rezension: Kostenlose lokale Spracherkennung mit Sprecherzuordnung',
    seoTitle: 'TranscriptionSuite Rezension: Lokale Spracherkennung',
    intro:
      'TranscriptionSuite ist eine kostenlose, quelloffene Desktop-App, die Sprache auf Ihrem eigenen Rechner in Text umwandelt, mit Live-Transkription, Sprecherzuordnung, durchsuchbarem Audio-Notizbuch und frei wählbaren Sprachmodellen. Diese Rezension fasst zusammen, was Website, README und GitHub-Releases dokumentieren, was sie auslassen und wie die App im Vergleich zu anderen Transkriptions-Werkzeugen im Verzeichnis abschneidet.',
    metaDescription:
      'TranscriptionSuite Rezension: kostenlose GPL-3.0-App für Windows, macOS und Linux mit Sprecherzuordnung, Live-Modus und API. Ohne Praxistest.',
    twitterDescription:
      'TranscriptionSuite Rezension: eine kostenlose, quelloffene lokale Spracherkennungs-App mit Sprecherzuordnung, Live-Modus und Audio-Notizbuch. Installation, Modelle, Datenschutz, Grenzen, Alternativen.',
    audience:
      'Menschen, die genaue, private Transkripte von Besprechungen, Vorlesungen und Diktaten wollen — behandelt Installation, Modelle, Hardware, Datenschutz, Grenzen und Alternativen.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'TranscriptionSuite review',
    targetKeywords: [
      'transcriptionsuite rezension',
      'transcriptionsuite',
      'lokale spracherkennung app',
      'offline transkription sprechererkennung',
      'whisper parakeet desktop app',
      'openai-kompatibler transkriptionsserver',
      'audio-notizbuch lokale ki',
    ],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Apple silicon', 'AMD Vulkan', 'Intel Vulkan', 'CPU'],
    leadAnswerBlock:
      '**TranscriptionSuite ist eine kostenlose Spracherkennungs-App unter GPL-3.0, die Sprachmodelle auf Ihrem eigenen Rechner ausführt und Live-Transkription, Sprecherzuordnung, ein kalenderbasiertes Audio-Notizbuch und eine OpenAI-kompatible API ergänzt.** Laut README verlassen Audio und Transkripte Ihren Rechner nie. Diese Rezension bezieht sich auf Version 1.3.10 und stützt sich auf die öffentliche Website, das README und die GitHub-Releases, nicht auf einen eigenen Praxistest.',
    quickAnswerTop: {
      de: {
        question: 'Lohnt sich TranscriptionSuite für private, lokale Transkription?',
        answer:
          'Wahrscheinlich, wenn Sie Besprechungen, Vorlesungen oder Interviews transkribieren und Sprecherzuordnung ohne Cloud-Dienst wünschen. Prüfen Sie vorher zwei Dinge: Unter Windows und Linux braucht der Server Docker, und der Autor beschreibt das Projekt als „vibe-codiertes“ Hobbyprojekt einer einzelnen Person.',
        bullets: [
          'Dashboard-Installer für Windows, Linux und macOS; Macs mit Apple silicon erhalten einen gebündelten Build ohne Docker.',
          'Langzeit-Aufnahme, ein Echtzeit-Live-Modus und Dateiimport mit Text- oder Untertitel-Export.',
          'Sprecherzuordnung, über 90 Sprachen mit Whisper und mehrere Modellfamilien.',
          'Ein durchsuchbares Audio-Notizbuch, globale Diktier-Kürzel und eine OpenAI-kompatible API.',
          'Kostenlos und quelloffen; Modellgewichte werden beim ersten Einsatz geladen, danach funktioniert es offline.',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'TranscriptionSuite herunterladen', anchor: 'get-it' },
      { label: 'TranscriptionSuite im Überblick', anchor: 'at-a-glance' },
      { label: 'Was TranscriptionSuite ist', anchor: 'what-is-transcriptionsuite' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Modelle und Hardware', anchor: 'models-hardware' },
      { label: 'Datenschutz, Lizenz und Kosten', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile und Einschränkungen', anchor: 'tradeoffs' },
      { label: 'TranscriptionSuite im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen TranscriptionSuite geeignet ist', anchor: 'who-should-use' },
      { label: 'Für wen TranscriptionSuite nicht geeignet ist', anchor: 'who-should-not-use' },
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
            text: 'TranscriptionSuite ist eine quelloffene Desktop-App, die Audio mit Sprachmodellen auf Ihrem eigenen Rechner transkribiert und kennzeichnet, wer was gesagt hat.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als privates Transkriptionsstudio vor: Vorlesung aufnehmen, in eine beliebige App diktieren oder eine Audiodatei hineinziehen und ein Transkript mit Sprecherzuordnung erhalten, ohne die Aufnahme an einen Cloud-Dienst zu senden.',
          },
        ],
        items: [
          'Geprüfte Version: 1.3.10, veröffentlicht am 24. September 2026; das Repository wurde zuletzt am 4. Oktober 2026 aktualisiert, daher gilt keine Warnung vor einem ruhenden Projekt.',
          'Lizenz und Preis: GPL-3.0 oder neuer laut README; kostenlos, ohne Konto.',
          'Plattformen: Windows 11 und Linux (x64) sowie macOS; der Server läuft in Docker, außer auf Macs mit Apple silicon.',
          'Besondere Funktionen: Live-Modus, Sprecherzuordnung, Audio-Notizbuch, OpenAI-kompatible API, Webhooks.',
          'Reife: rund 775 GitHub-Sterne und ein einzelner Maintainer, der das Projekt als „vibe-codiert“ bezeichnet.',
        ],
      },
      getItTranscriptionsuite: {
        id: 'get-it',
        title: 'TranscriptionSuite herunterladen',
        content: [
          '**TranscriptionSuite besteht aus zwei Teilen: einem Dashboard, das Sie installieren, und einem Server, den die App herunterlädt und verwaltet.** Die Dateien hängen am [aktuellen GitHub-Release](https://github.com/homelab-00/TranscriptionSuite/releases/latest); die Zeilen unten reichen vom einfachsten zum aufwendigsten Weg.',
        ],
        columns: ['Plattform', 'Download'],
        rows: [
          { 'Plattform': 'macOS, Apple silicon (Server enthalten)', 'Download': '[TranscriptionSuite-1.3.10-arm64-mac-metal.dmg](https://github.com/homelab-00/TranscriptionSuite/releases/latest) (rund 3–5 GB, ohne Docker)' },
          { 'Plattform': 'macOS, Apple silicon (nur Dashboard)', 'Download': '[TranscriptionSuite-1.3.10-arm64-mac.dmg](https://github.com/homelab-00/TranscriptionSuite/releases/latest) (rund 200 MB; der Server läuft anderswo)' },
          { 'Plattform': 'Windows (x64)', 'Download': '[TranscriptionSuite.Setup.1.3.10.exe](https://github.com/homelab-00/TranscriptionSuite/releases/latest) plus Docker Desktop mit WSL 2' },
          { 'Plattform': 'Linux (x64)', 'Download': '[TranscriptionSuite-1.3.10.AppImage](https://github.com/homelab-00/TranscriptionSuite/releases/latest) plus Docker oder Podman' },
          { 'Plattform': 'Website', 'Download': '[transcriptionsuite.app](https://transcriptionsuite.app/)' },
          { 'Plattform': 'Datenschutzerklärung', 'Download': 'Eine eigene Datenschutzerklärung wurde nicht gefunden; das [README](https://github.com/homelab-00/TranscriptionSuite) beschreibt die lokale Verarbeitung' },
          { 'Plattform': 'Quellcode', 'Download': '[github.com/homelab-00/TranscriptionSuite](https://github.com/homelab-00/TranscriptionSuite)' },
        ],
        note: 'Nur der Mac-Build mit gebündeltem Server lässt sich einfach herunterladen und öffnen. Unter Windows und Linux ist zuvor eine Einrichtung von Docker oder Podman auf Terminal-Ebene nötig. Die macOS-App ist nicht signiert, sodass macOS sie blockiert, bis Sie das Quarantäne-Flag entfernen oder „Dennoch öffnen“ wählen; außerdem muss FFmpeg installiert sein. Das README nennt einen Build für Intel-Macs, doch das Release 1.3.10 zeigt nur Disk-Images für Apple silicon.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'TranscriptionSuite im Überblick',
        columns: ['Merkmal', 'TranscriptionSuite'],
        rows: [
          { 'Merkmal': 'Plattform', 'TranscriptionSuite': 'Windows, macOS, Linux' },
          { 'Merkmal': 'Preis', 'TranscriptionSuite': 'Kostenlos' },
          { 'Merkmal': 'Lizenz', 'TranscriptionSuite': 'GPL-3.0 oder neuer' },
          { 'Merkmal': 'Ausführung', 'TranscriptionSuite': 'Lokal; Modelle werden beim ersten Einsatz geladen' },
          { 'Merkmal': 'Sprachen', 'TranscriptionSuite': 'Über 90 mit Whisper; weniger mit anderen Modellen' },
          { 'Merkmal': 'Echtzeit-Transkription', 'TranscriptionSuite': 'Ja (Live-Modus, nur Whisper-Modelle)' },
          { 'Merkmal': 'Sprecherzuordnung', 'TranscriptionSuite': 'Ja, bei Aufnahmen und Importen; nicht im Live-Modus' },
          { 'Merkmal': 'Nur mit CPU nutzbar', 'TranscriptionSuite': 'Ja; NeMo-Modelle sind nicht verfügbar' },
          { 'Merkmal': 'Lokaler API-Server', 'TranscriptionSuite': 'Ja, OpenAI-kompatibler Transkriptions-Endpunkt' },
        ],
        note: 'Die Merkmale folgen dem Spracherkennungs-Vergleich im Verzeichnis lokaler LLM-Software. Eine fehlende Angabe auf der Website bedeutet „unbekannt“, nicht „nicht unterstützt“.',
      },
      whatIsTranscriptionsuite: {
        id: 'what-is-transcriptionsuite',
        title: 'Was TranscriptionSuite ist',
        content: [
          '**TranscriptionSuite ist eine Transkriptions-App, kein Meeting-Bot und kein Cloud-Dienst.** Das README beschreibt ein Electron-Dashboard mit Python-Backend, das Modelle wie Whisper, NVIDIA NeMo, VibeVoice-ASR, SenseVoice, whisper.cpp und MLX unterstützt und per CUDA, Apple Metal oder Vulkan beschleunigt wird, oder eben auf der reinen CPU läuft.',
          'Der Autor beschreibt es als persönliches Werkzeug, das zum Hobbyprojekt wurde, gebaut von einem Maschinenbau-Ingenieur ohne Softwareentwickler-Hintergrund; in den Worten des README: „this whole thing is vibecoded“, wenn auch nicht blind. Der Autor sagt, er nutze es selbst und wolle es nicht aufgeben.',
          'Diese Rezension stützt sich auf die Website, das README und die GitHub-Releases. Einen eigenen Praxistest gab es nicht, daher werden Genauigkeit, Tempo und Stabilität hier nicht bewertet.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus der Installation des Dashboards und dem Start des Servers in der App.** Die Schritte folgen dem README.',
        ],
        numberedItems: [
          {
            title: 'Plattform vorbereiten',
            whyItMatters: 'Installieren Sie unter Windows und Linux Docker (Docker Desktop mit WSL 2 bzw. Docker oder Podman unter Linux); auf Apple silicon stattdessen FFmpeg über Homebrew.',
          },
          {
            title: 'Dashboard installieren',
            whyItMatters: 'Laden Sie die Datei für Ihr System von der [Release-Seite](https://github.com/homelab-00/TranscriptionSuite/releases/latest) herunter; auf dem Mac entfernen Sie einmalig das Quarantäne-Flag, weil die App nicht signiert ist.',
          },
          {
            title: 'Server im Reiter „Server“ starten',
            whyItMatters: 'Wählen Sie eine Laufzeit (CUDA, Metal, Vulkan oder CPU) und starten Sie sie; beim ersten Start wird das gewählte Modell geladen, was mehrere Gigabyte umfassen kann.',
          },
          {
            title: 'Aufnehmen, diktieren oder eine Datei importieren',
            whyItMatters: 'Nehmen Sie im Reiter „Session“ auf oder importieren Sie Audio, und schalten Sie die Sprecherzuordnung ein, wenn Sie Sprecherlabels brauchen.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Die Funktionsliste ist für ein Ein-Personen-Projekt breit.** Alles Folgende stammt aus dem README und von der Website.',
        ],
        items: [
          '**Langzeit-Aufnahme.** Nehmen Sie über Mikrofon oder Systemaudio auf und erhalten Sie nach dem Stopp das vollständige Transkript, mit einer laufenden Vorschau der letzten 20 Sekunden.',
          '**Live-Modus.** Echtzeit-Transkription Satz für Satz zum Diktieren, beschränkt auf Modelle der Whisper-Familie und ohne Sprecherzuordnung.',
          '**Sprecherzuordnung.** Labels „wer sagt was“ für Whisper-, NeMo-, SenseVoice- und VibeVoice-Modelle.',
          '**Dateiimport.** Audio oder Video hineinziehen und als reinen Text oder als Untertitel (`.srt` / `.ass`) speichern.',
          '**Audio-Notizbuch.** Aufnahmen landen in einer Kalenderansicht mit Volltextsuche und einem KI-Assistenten, der mit jedem OpenAI-kompatiblen Anbieter spricht.',
          '**Diktier-Kürzel.** Systemweite Start- und Stopp-Kürzel und Einfügen an der Cursor-Position.',
          '**Integrationen.** Ein OpenAI-kompatibler Endpunkt `/v1/audio/transcriptions` für Werkzeuge wie Open WebUI und LM Studio, ausgehende Webhooks und Fernzugriff über Tailscale oder ein lokales Netzwerk.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelle und Hardware',
        content: [
          '**Sie wählen das Sprachmodell, und die App erkennt Ihre Hardware und blendet nicht passende Optionen aus.** Auf Docker-Plattformen stehen WhisperX (faster-whisper-Modelle), NVIDIA Parakeet v3 und Canary v2, VibeVoice-ASR, SenseVoice und whisper.cpp zur Wahl; auf Apple silicon sind es die MLX-Versionen von Whisper, Parakeet, Canary und VibeVoice-ASR.',
          'Die Sprachabdeckung hängt vom Modell ab: Whisper beherrscht über 90 Sprachen und kann ins Englische übersetzen, Parakeet und Canary decken 25 europäische Sprachen ab, VibeVoice 51 und SenseVoice fünf. NeMo-Modelle laufen nicht auf der CPU-Laufzeit, und VibeVoice-ASR ist ein Modell mit 9 Milliarden Parametern und rund 16 GB.',
          'Der Entwickler gibt an, dass eine halbe Stunde Audio mit Whisper auf einer RTX 3060 in unter einer Minute transkribiert wird; diese Angabe hat diese Rezension nicht nachgemessen. Das README nennt keine Mindestanforderung an RAM oder VRAM.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz, Lizenz und Kosten',
        content: [
          '**Laut README läuft alles auf Ihrem Rechner, und Audio sowie Transkripte verlassen ihn nie.** Internet wird nur zum Herunterladen von App und Modellgewichten beim ersten Einsatz gebraucht; danach funktioniert es offline. Die Sprecherzuordnung mit Whisper oder NeMo nutzt PyAnnote-Modelle, die ein kostenloses Hugging-Face-Token erfordern.',
          'Der KI-Assistent im Notizbuch kann mit jedem OpenAI-kompatiblen Anbieter sprechen, auch mit Cloud-Diensten wie Groq, OpenAI und OpenRouter; was Sie dorthin senden, fällt nicht unter die Aussage „nur lokal“. Das README nennt außerdem eine wöchentliche Prüfung auf neue Versionen.',
          'Der Code steht unter GPL-3.0 oder neuer, und die App ist kostenlos. Eine eigene Datenschutzerklärung wurde nicht gefunden. Diese Rezension hat den Netzwerkverkehr nicht geprüft; die Aussagen stammen also vom Entwickler.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile und Einschränkungen',
        columns: ['Vorteil', 'Bedeutung im Alltag', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'Lokale Transkription',
            'Bedeutung im Alltag': 'Audio bleibt auf Ihrem Rechner.',
            'Einschränkung / Hinweis': 'Die Modell-Downloads beim ersten Einsatz sind groß; Genauigkeitswerte werden nicht veröffentlicht.',
          },
          {
            'Vorteil': 'Sprecherzuordnung',
            'Bedeutung im Alltag': 'Erkennen, wer in Besprechungen was sagt.',
            'Einschränkung / Hinweis': 'Nicht im Live-Modus; Sortformer verarbeitet nur vier Sprecher.',
          },
          {
            'Vorteil': 'Viele Modellfamilien',
            'Bedeutung im Alltag': 'Tempo, Sprache oder Genauigkeit wählen.',
            'Einschränkung / Hinweis': 'Welches Modell zu Ihrer Hardware passt, müssen Sie selbst entscheiden.',
          },
          {
            'Vorteil': 'OpenAI-kompatible API',
            'Bedeutung im Alltag': 'Andere Werkzeuge können es als Backend nutzen.',
            'Einschränkung / Hinweis': 'Das Feld „model“ wird akzeptiert, aber ignoriert.',
          },
          {
            'Vorteil': 'Quelloffen und kostenlos',
            'Bedeutung im Alltag': 'GPL-Code, den Sie einsehen können.',
            'Einschränkung / Hinweis': 'Ein Maintainer, selbst als „vibe-codiert“ bezeichnet; Docker nötig unter Windows und Linux.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'TranscriptionSuite im Vergleich zu Alternativen',
        content: [
          'Dies sind die nächsten Spracherkennungs-Werkzeuge im Verzeichnis: ein weiterer Besprechungs-Transkribierer, eine Mac-Diktier-App und zwei Engines, auf denen man aufbauen kann.',
        ],
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Rolle', 'Wichtigster Unterschied'],
        rows: [
          {
            'App': 'TranscriptionSuite',
            'Plattformen': 'Windows, macOS, Linux',
            'Preis und Lizenz': 'Kostenlos, GPL-3.0',
            'Rolle': 'Transkriptions-App mit Server',
            'Wichtigster Unterschied': 'Live-Modus, Sprecherzuordnung, Notizbuch und API in einem',
          },
          {
            'App': '[Meetily](/de/power-local-llm/meetily-review)',
            'Plattformen': 'macOS, Windows',
            'Preis und Lizenz': 'Kostenlos (MIT) und Pro gegen Gebühr',
            'Rolle': 'Besprechungs-Transkription',
            'Wichtigster Unterschied': 'Auf Besprechungen ausgelegt; nur macOS und Windows',
          },
          {
            'App': '[MacWhisper](/de/power-local-llm/macwhisper-review)',
            'Plattformen': 'macOS',
            'Preis und Lizenz': 'Freemium, proprietär',
            'Rolle': 'Mac-Transkriptions-App',
            'Wichtigster Unterschied': 'Nur für Mac und nicht quelloffen',
          },
          {
            'App': '[faster-whisper](/de/power-local-llm/faster-whisper-review)',
            'Plattformen': 'Windows, macOS, Linux',
            'Preis und Lizenz': 'Kostenlos, MIT',
            'Rolle': 'Python-Sprachbibliothek',
            'Wichtigster Unterschied': 'Eine Engine für Entwickler, ohne Oberfläche',
          },
          {
            'App': '[Izwi](/de/power-local-llm/izwi-review)',
            'Plattformen': 'Windows, macOS, Linux',
            'Preis und Lizenz': 'Kostenlos, MIT',
            'Rolle': 'Lokale Sprach-Runtime',
            'Wichtigster Unterschied': 'Ergänzt Sprachausgabe und Stimmenklonen hinter einer API',
          },
        ],
        note: 'Plattform-, Preis- und Funktionsangaben zu Drittanbieter-Apps ändern sich häufig. Prüfen Sie die aktuellen Angaben auf der Seite des jeweiligen Projekts, bevor Sie sich entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen TranscriptionSuite geeignet ist',
        items: [
          '**Alle, die Interviews, Vorlesungen oder Besprechungen transkribieren.** Sprecherzuordnung und Untertitel-Export zielen genau darauf.',
          '**Mac-Nutzer mit Apple silicon.** Der gebündelte Build ist der einfachste Weg und braucht kein Docker.',
          '**Menschen, die in andere Apps diktieren.** Live-Modus und Einfügen an der Cursor-Position decken das ab.',
          '**Tüftler mit Heimserver.** Fernzugriff und API lassen andere Geräte einen Rechner mitnutzen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen TranscriptionSuite nicht geeignet ist',
        items: [
          '**Menschen, die unter Windows oder Linux einen Installer ohne Vorarbeit wollen.** Zuerst kommt Docker.',
          '**Besitzer von Intel-Macs.** Das aktuelle Release nennt keinen Intel-Build.',
          '**Teams, die Herstellersupport brauchen.** Es ist ein Hobbyprojekt eines einzelnen Maintainers.',
          '**Alle, die dokumentierte Compliance benötigen.** Eine Datenschutzerklärung wurde nicht gefunden.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Braucht TranscriptionSuite eine GPU?',
            a: 'Nein. Es gibt eine reine CPU-Laufzeit, auf der NeMo-Modelle jedoch fehlen und große Modelle langsam sind; NVIDIA CUDA, Apple Metal und AMD- oder Intel-Vulkan sind optionale Beschleuniger.',
          },
          {
            q: 'Warum braucht es Docker?',
            a: 'Der Transkriptions-Server wird unter Windows, Linux und auf Intel-Macs als Container geliefert, den das Dashboard herunterlädt und verwaltet; Macs mit Apple silicon führen ihn stattdessen nativ aus.',
          },
          {
            q: 'Können andere Apps es als Transkriptions-Backend nutzen?',
            a: 'Ja. Es stellt einen OpenAI-kompatiblen Transkriptions-Endpunkt bereit, auf den Werkzeuge wie Open WebUI und LM Studio zeigen können.',
          },
          {
            q: 'Brauche ich für die Sprecherzuordnung ein Konto?',
            a: 'Nur beim Weg über Whisper und NeMo: PyAnnote verlangt ein kostenloses Hugging-Face-Token. SenseVoice, VibeVoice und Sortformer auf Apple silicon brauchen keines.',
          },
          {
            q: 'Kann ich es auf einem Rechner betreiben und von einem anderen nutzen?',
            a: 'Ja. Das README beschreibt Fernzugriff über Tailscale oder ein lokales Netzwerk.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'TranscriptionSuite passt gut zu Menschen, die private, lokale Transkription mit Sprecherzuordnung wollen und mit Docker zurechtkommen, oder die einen Mac mit Apple silicon besitzen, auf dem der gebündelte Build diesen Schritt erspart.',
          'Die Vorbehalte betreffen Reife und Transparenz: ein einzelner, sich selbst als „vibe-codierend“ beschreibender Maintainer, keine Datenschutzerklärung, keine Genauigkeits-Benchmarks außer der eigenen Tempoangabe des Autors und eine nicht signierte macOS-App. Probieren Sie es zuerst mit nicht sensiblen Aufnahmen aus.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[TranscriptionSuite-Website](https://transcriptionsuite.app/) — Produktbeschreibung, Funktionen und Hardware-Beschleunigung.',
          '[TranscriptionSuite-README](https://github.com/homelab-00/TranscriptionSuite/blob/main/docs/README.md) — Installation, Kompatibilitätsmatrix, API, Lizenz und Projektstand.',
          '[TranscriptionSuite auf GitHub](https://github.com/homelab-00/TranscriptionSuite) — GPL-3.0-Lizenz und Sternezahl.',
          '[TranscriptionSuite-Releases](https://github.com/homelab-00/TranscriptionSuite/releases) — Version 1.3.10 und Installer-Dateien.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokale Sprach- und Audio-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — Sprachausgabe, Spracherkennung und Sprachagenten nebeneinander.',
          '[Whisper.cpp Rezension](/de/power-local-llm/whisper-cpp-review) — die C++-Whisper-Engine, die TranscriptionSuite ebenfalls nutzen kann.',
          '[Einen lokalen Sprachassistenten bauen](/de/power-local-llm/build-local-voice-assistant-2026) — Spracherkennung in einen Sprachassistenten einbinden.',
          '[Lokale multimodale Pipeline: Sprache, Bild und Text](/de/power-local-llm/local-multimodal-pipeline-voice-vision-text) — lokale Sprach- und Bildmodelle kombinieren.',
          '[Das vollständige Verzeichnis lokaler LLM-Software](/de/directory) — ein breiteres Verzeichnis lokaler KI-Werkzeuge für alle Plattformen.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-18',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/transcriptionsuite-review-hero-fr.webp',
    title: 'Test de TranscriptionSuite : reconnaissance vocale locale gratuite avec étiquettes de locuteurs',
    seoTitle: 'Test de TranscriptionSuite : reconnaissance vocale locale',
    intro:
      'TranscriptionSuite est une application de bureau gratuite et open source qui transforme la parole en texte sur votre propre ordinateur, avec transcription en direct, étiquettes de locuteurs, carnet audio consultable et choix de modèles vocaux. Ce test résume ce que documentent le site, le README et les versions GitHub, ce qu’ils omettent, et comment l’application se situe face aux autres outils de transcription de l’annuaire.',
    metaDescription:
      'Test de TranscriptionSuite : application gratuite (GPL-3.0) pour Windows, macOS et Linux avec étiquettes de locuteurs, mode direct et API. Non testée.',
    twitterDescription:
      'Test de TranscriptionSuite : une application de reconnaissance vocale locale, gratuite et open source, avec étiquettes de locuteurs, mode direct et carnet audio. Installation, modèles, confidentialité, limites, alternatives.',
    audience:
      'Personnes qui veulent des transcriptions fiables et privées de réunions, de cours et de dictées — installation, modèles, matériel, confidentialité, limites et alternatives.',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'TranscriptionSuite review',
    targetKeywords: [
      'test transcriptionsuite',
      'transcriptionsuite',
      'application reconnaissance vocale locale',
      'transcription hors ligne diarisation',
      'whisper parakeet application de bureau',
      'serveur de transcription compatible openai',
      'carnet audio ia locale',
    ],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Apple silicon', 'AMD Vulkan', 'Intel Vulkan', 'CPU'],
    leadAnswerBlock:
      '**TranscriptionSuite est une application de reconnaissance vocale gratuite, sous licence GPL-3.0, qui exécute des modèles vocaux sur votre propre ordinateur et ajoute la transcription en direct, des étiquettes de locuteurs, un carnet audio à calendrier et une API compatible OpenAI.** Selon son README, l’audio et les transcriptions ne quittent jamais votre machine. Ce test porte sur la version 1.3.10 et s’appuie sur le site public, le README et les versions GitHub, non sur un essai pratique.',
    quickAnswerTop: {
      fr: {
        question: 'TranscriptionSuite vaut-il la peine pour une transcription locale et privée ?',
        answer:
          'Probablement, si vous transcrivez des réunions, des cours ou des entretiens et voulez des étiquettes de locuteurs sans service cloud. Vérifiez d’abord deux points : sous Windows et Linux, le serveur exige Docker, et l’auteur décrit le projet comme un projet de loisir « vibe-codé » par une seule personne.',
        bullets: [
          'Installateurs du tableau de bord pour Windows, Linux et macOS ; les Mac Apple silicon ont une version intégrée sans Docker.',
          'Enregistrement longue durée, mode direct en temps réel et import de fichiers avec export texte ou sous-titres.',
          'Étiquettes de locuteurs, plus de 90 langues avec Whisper et plusieurs familles de modèles.',
          'Un carnet audio consultable, des raccourcis de dictée globaux et une API compatible OpenAI.',
          'Gratuit et open source ; les poids des modèles se téléchargent à la première utilisation, puis tout fonctionne hors ligne.',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir TranscriptionSuite', anchor: 'get-it' },
      { label: 'TranscriptionSuite en un coup d’œil', anchor: 'at-a-glance' },
      { label: 'Ce qu’est TranscriptionSuite', anchor: 'what-is-transcriptionsuite' },
      { label: 'Premiers pas', anchor: 'how-to-get-started' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Modèles et matériel', anchor: 'models-hardware' },
      { label: 'Confidentialité, licence et coût', anchor: 'privacy' },
      { label: 'Compromis : avantages et limites', anchor: 'tradeoffs' },
      { label: 'TranscriptionSuite face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Pour qui TranscriptionSuite convient', anchor: 'who-should-use' },
      { label: 'Pour qui TranscriptionSuite ne convient pas', anchor: 'who-should-not-use' },
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
            text: 'TranscriptionSuite est une application de bureau open source qui transcrit l’audio avec des modèles vocaux exécutés sur votre propre ordinateur et indique qui a dit quoi.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-y un studio de transcription privé : enregistrez un cours, dictez dans n’importe quelle application ou déposez un fichier audio, et obtenez une transcription avec étiquettes de locuteurs sans envoyer l’enregistrement à un service cloud.',
          },
        ],
        items: [
          'Version testée : 1.3.10, publiée le 24 septembre 2026 ; le dépôt a été mis à jour pour la dernière fois le 4 octobre 2026, l’avertissement de projet peu actif ne s’applique donc pas.',
          'Licence et prix : GPL-3.0 ou ultérieure d’après le README ; gratuit, sans compte.',
          'Plateformes : Windows 11 et Linux (x64) ainsi que macOS ; le serveur tourne dans Docker, sauf sur les Mac Apple silicon.',
          'Points forts : mode direct, étiquettes de locuteurs, carnet audio, API compatible OpenAI, webhooks.',
          'Maturité : environ 775 étoiles GitHub et un seul mainteneur qui qualifie le projet de « vibe-codé ».',
        ],
      },
      getItTranscriptionsuite: {
        id: 'get-it',
        title: 'Obtenir TranscriptionSuite',
        content: [
          '**TranscriptionSuite se compose de deux parties : un tableau de bord que vous installez et un serveur que l’application télécharge et gère pour vous.** Les fichiers sont joints à la [dernière version GitHub](https://github.com/homelab-00/TranscriptionSuite/releases/latest) ; les lignes ci-dessous vont de la voie la plus simple à la plus complexe.',
        ],
        columns: ['Plateforme', 'Téléchargement'],
        rows: [
          { 'Plateforme': 'macOS, Apple silicon (serveur inclus)', 'Téléchargement': '[TranscriptionSuite-1.3.10-arm64-mac-metal.dmg](https://github.com/homelab-00/TranscriptionSuite/releases/latest) (environ 3 à 5 Go, sans Docker)' },
          { 'Plateforme': 'macOS, Apple silicon (tableau de bord seul)', 'Téléchargement': '[TranscriptionSuite-1.3.10-arm64-mac.dmg](https://github.com/homelab-00/TranscriptionSuite/releases/latest) (environ 200 Mo ; le serveur tourne ailleurs)' },
          { 'Plateforme': 'Windows (x64)', 'Téléchargement': '[TranscriptionSuite.Setup.1.3.10.exe](https://github.com/homelab-00/TranscriptionSuite/releases/latest) plus Docker Desktop avec WSL 2' },
          { 'Plateforme': 'Linux (x64)', 'Téléchargement': '[TranscriptionSuite-1.3.10.AppImage](https://github.com/homelab-00/TranscriptionSuite/releases/latest) plus Docker ou Podman' },
          { 'Plateforme': 'Site web', 'Téléchargement': '[transcriptionsuite.app](https://transcriptionsuite.app/)' },
          { 'Plateforme': 'Politique de confidentialité', 'Téléchargement': 'Aucune page de politique de confidentialité distincte n’a été trouvée ; le [README](https://github.com/homelab-00/TranscriptionSuite) décrit un traitement local' },
          { 'Plateforme': 'Code source', 'Téléchargement': '[github.com/homelab-00/TranscriptionSuite](https://github.com/homelab-00/TranscriptionSuite)' },
        ],
        note: 'Seule la version Mac avec serveur intégré s’installe par simple téléchargement. Sous Windows et Linux, il faut d’abord configurer Docker ou Podman au niveau du terminal. L’application macOS n’est pas signée : macOS la bloque tant que vous n’avez pas retiré l’indicateur de quarantaine ou choisi « Ouvrir quand même » ; FFmpeg doit aussi être installé. Le README mentionne une version pour Mac Intel, mais la version 1.3.10 ne propose que des images disque Apple silicon.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'TranscriptionSuite en un coup d’œil',
        columns: ['Attribut', 'TranscriptionSuite'],
        rows: [
          { 'Attribut': 'Plateforme', 'TranscriptionSuite': 'Windows, macOS, Linux' },
          { 'Attribut': 'Prix', 'TranscriptionSuite': 'Gratuit' },
          { 'Attribut': 'Licence', 'TranscriptionSuite': 'GPL-3.0 ou ultérieure' },
          { 'Attribut': 'Exécution', 'TranscriptionSuite': 'En local ; modèles téléchargés à la première utilisation' },
          { 'Attribut': 'Langues', 'TranscriptionSuite': 'Plus de 90 avec Whisper ; moins avec les autres modèles' },
          { 'Attribut': 'Transcription en temps réel', 'TranscriptionSuite': 'Oui (mode direct, modèles Whisper uniquement)' },
          { 'Attribut': 'Étiquettes de locuteurs', 'TranscriptionSuite': 'Oui, sur enregistrements et imports ; pas en mode direct' },
          { 'Attribut': 'Utilisable sur processeur seul', 'TranscriptionSuite': 'Oui ; les modèles NeMo ne sont pas disponibles' },
          { 'Attribut': 'Serveur d’API local', 'TranscriptionSuite': 'Oui, point d’accès de transcription compatible OpenAI' },
        ],
        note: 'Les attributs suivent la comparaison de reconnaissance vocale de l’annuaire des logiciels de LLM locaux. L’absence d’indication sur le site signifie « inconnu », pas « non pris en charge ».',
      },
      whatIsTranscriptionsuite: {
        id: 'what-is-transcriptionsuite',
        title: 'Ce qu’est TranscriptionSuite',
        content: [
          '**TranscriptionSuite est une application de transcription, pas un robot de réunion ni un service cloud.** Le README décrit un tableau de bord Electron associé à un backend Python qui prend en charge des modèles Whisper, NVIDIA NeMo, VibeVoice-ASR, SenseVoice, whisper.cpp et MLX, accélérés par CUDA, Apple Metal ou Vulkan, ou simplement sur le processeur.',
          'L’auteur le décrit comme un outil personnel devenu projet de loisir, conçu par un ingénieur en mécanique qui n’est pas ingénieur logiciel ; selon les mots du README, « this whole thing is vibecoded », mais pas aveuglément. L’auteur dit l’utiliser lui-même et ne pas vouloir l’abandonner.',
          'Ce test s’appuie sur le site, le README et les versions GitHub. Il n’a donné lieu à aucun essai pratique : la précision, la vitesse et la stabilité ne sont donc pas évaluées ici.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Premiers pas',
        content: [
          '**La mise en route consiste à installer le tableau de bord, puis à démarrer le serveur depuis l’application.** Les étapes suivent le README.',
        ],
        numberedItems: [
          {
            title: 'Préparer votre plateforme',
            whyItMatters: 'Sous Windows et Linux, installez Docker (Docker Desktop avec WSL 2, ou Docker ou Podman sous Linux) ; sur Apple silicon, installez plutôt FFmpeg avec Homebrew.',
          },
          {
            title: 'Installer le tableau de bord',
            whyItMatters: 'Téléchargez le fichier pour votre système depuis la [page des versions](https://github.com/homelab-00/TranscriptionSuite/releases/latest) ; sur Mac, retirez une fois l’indicateur de quarantaine, car l’application n’est pas signée.',
          },
          {
            title: 'Démarrer le serveur depuis l’onglet Server',
            whyItMatters: 'Choisissez un environnement d’exécution (CUDA, Metal, Vulkan ou CPU) et lancez-le ; le premier démarrage télécharge le modèle choisi, ce qui peut représenter plusieurs gigaoctets.',
          },
          {
            title: 'Enregistrer, dicter ou importer un fichier',
            whyItMatters: 'Utilisez l’onglet Session pour enregistrer ou importer de l’audio, et activez la diarisation des locuteurs quand vous avez besoin d’étiquettes.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**La liste des fonctionnalités est large pour un projet d’une seule personne.** Tout ce qui suit provient du README et du site.',
        ],
        items: [
          '**Enregistrement longue durée.** Enregistrez depuis un microphone ou l’audio système et obtenez la transcription complète à l’arrêt, avec un aperçu glissant des 20 dernières secondes.',
          '**Mode direct.** Transcription en temps réel, phrase par phrase, pour la dictée, limitée aux modèles de la famille Whisper et sans étiquettes de locuteurs.',
          '**Diarisation des locuteurs.** Étiquettes « qui dit quoi » pour les modèles Whisper, NeMo, SenseVoice et VibeVoice.',
          '**Import de fichiers.** Déposez de l’audio ou de la vidéo et enregistrez du texte brut ou des sous-titres `.srt` / `.ass`.',
          '**Carnet audio.** Les enregistrements arrivent dans une vue calendrier avec recherche plein texte et un assistant IA qui dialogue avec tout fournisseur compatible OpenAI.',
          '**Raccourcis de dictée.** Raccourcis globaux de démarrage et d’arrêt, et collage à la position du curseur.',
          '**Intégrations.** Un point d’accès `/v1/audio/transcriptions` compatible OpenAI pour des outils comme Open WebUI et LM Studio, des webhooks sortants et un accès à distance via Tailscale ou un réseau local.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modèles et matériel',
        content: [
          '**Vous choisissez le modèle vocal ; l’application détecte votre matériel et grise les options incompatibles.** Sur les plateformes Docker, le choix comprend WhisperX (modèles faster-whisper), NVIDIA Parakeet v3 et Canary v2, VibeVoice-ASR, SenseVoice et whisper.cpp ; sur Apple silicon, ce sont les versions MLX de Whisper, Parakeet, Canary et VibeVoice-ASR.',
          'La couverture linguistique dépend du modèle : Whisper gère plus de 90 langues et peut traduire vers l’anglais, Parakeet et Canary couvrent 25 langues européennes, VibeVoice 51 et SenseVoice cinq. Les modèles NeMo ne tournent pas sur l’environnement CPU, et VibeVoice-ASR est un modèle de 9 milliards de paramètres d’environ 16 Go.',
          'Le développeur affirme qu’une demi-heure d’audio est transcrite en moins d’une minute avec Whisper sur une RTX 3060 ; ce test n’a pas reproduit ce chiffre. Le README ne publie aucune exigence minimale de RAM ou de VRAM.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité, licence et coût',
        content: [
          '**Selon le README, tout s’exécute sur votre ordinateur et l’audio comme les transcriptions ne le quittent jamais.** Internet n’est nécessaire que pour télécharger l’application et les poids des modèles à la première utilisation ; ensuite, tout fonctionne hors ligne. Les étiquettes de locuteurs avec Whisper ou NeMo reposent sur des modèles PyAnnote, qui exigent un jeton Hugging Face gratuit.',
          'L’assistant IA du carnet peut dialoguer avec tout fournisseur compatible OpenAI, y compris des services cloud comme Groq, OpenAI et OpenRouter ; ce que vous y envoyez sort de l’affirmation « uniquement local ». Le README indique aussi que l’application recherche chaque semaine les nouvelles versions.',
          'Le code est sous GPL-3.0 ou ultérieure et l’application est gratuite. Aucune page de politique de confidentialité dédiée n’a été trouvée. Ce test n’a pas inspecté le trafic réseau : ces affirmations sont donc celles du développeur.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: ['Avantage', 'En pratique', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Transcription locale',
            'En pratique': 'L’audio reste sur votre machine.',
            'Limite / réserve': 'Les téléchargements de modèles à la première utilisation sont volumineux ; aucune mesure de précision n’est publiée.',
          },
          {
            'Avantage': 'Étiquettes de locuteurs',
            'En pratique': 'Savoir qui parle dans les réunions.',
            'Limite / réserve': 'Indisponible en mode direct ; Sortformer ne gère que quatre locuteurs.',
          },
          {
            'Avantage': 'Nombreuses familles de modèles',
            'En pratique': 'Choisir vitesse, langue ou précision.',
            'Limite / réserve': 'À vous de décider lequel convient à votre matériel.',
          },
          {
            'Avantage': 'API compatible OpenAI',
            'En pratique': 'D’autres outils peuvent l’utiliser comme backend.',
            'Limite / réserve': 'Le champ « model » est accepté mais ignoré.',
          },
          {
            'Avantage': 'Open source et gratuit',
            'En pratique': 'Du code GPL que vous pouvez inspecter.',
            'Limite / réserve': 'Un seul mainteneur, qui se dit « vibe-codeur » ; Docker requis sous Windows et Linux.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'TranscriptionSuite face aux alternatives',
        content: [
          'Voici les outils de reconnaissance vocale les plus proches dans l’annuaire : un autre transcripteur de réunions, une application de dictée pour Mac et deux moteurs sur lesquels construire.',
        ],
        columns: ['Application', 'Plateformes', 'Prix et licence', 'Rôle', 'Différence principale'],
        rows: [
          {
            'Application': 'TranscriptionSuite',
            'Plateformes': 'Windows, macOS, Linux',
            'Prix et licence': 'Gratuit, GPL-3.0',
            'Rôle': 'Application de transcription avec serveur',
            'Différence principale': 'Mode direct, étiquettes de locuteurs, carnet et API réunis',
          },
          {
            'Application': '[Meetily](/fr/power-local-llm/meetily-review)',
            'Plateformes': 'macOS, Windows',
            'Prix et licence': 'Gratuit (MIT) et Pro payant',
            'Rôle': 'Transcripteur de réunions',
            'Différence principale': 'Conçu pour les réunions ; macOS et Windows uniquement',
          },
          {
            'Application': '[MacWhisper](/fr/power-local-llm/macwhisper-review)',
            'Plateformes': 'macOS',
            'Prix et licence': 'Freemium, propriétaire',
            'Rôle': 'Application de transcription pour Mac',
            'Différence principale': 'Réservée au Mac et à code fermé',
          },
          {
            'Application': '[faster-whisper](/fr/power-local-llm/faster-whisper-review)',
            'Plateformes': 'Windows, macOS, Linux',
            'Prix et licence': 'Gratuit, MIT',
            'Rôle': 'Bibliothèque vocale Python',
            'Différence principale': 'Un moteur pour développeurs, sans interface',
          },
          {
            'Application': '[Izwi](/fr/power-local-llm/izwi-review)',
            'Plateformes': 'Windows, macOS, Linux',
            'Prix et licence': 'Gratuit, MIT',
            'Rôle': 'Environnement vocal local',
            'Différence principale': 'Ajoute la sortie vocale et le clonage de voix derrière une seule API',
          },
        ],
        note: 'Les plateformes, prix et fonctionnalités des applications tierces changent souvent. Vérifiez les informations actuelles sur la page de chaque projet avant de décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui TranscriptionSuite convient',
        items: [
          '**Ceux qui transcrivent des entretiens, des cours ou des réunions.** Les étiquettes de locuteurs et l’export de sous-titres visent exactement cela.',
          '**Les utilisateurs de Mac Apple silicon.** La version intégrée est la voie la plus simple et n’exige pas Docker.',
          '**Ceux qui dictent dans d’autres applications.** Le mode direct et le collage au curseur répondent au besoin.',
          '**Les bricoleurs avec un serveur à la maison.** L’accès à distance et l’API permettent à d’autres appareils d’utiliser une seule machine.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Pour qui TranscriptionSuite ne convient pas',
        items: [
          '**Ceux qui veulent un installateur sans préparation sous Windows ou Linux.** Docker passe d’abord.',
          '**Les propriétaires de Mac Intel.** La dernière version ne liste aucune version Intel.',
          '**Les équipes qui ont besoin d’un support éditeur.** C’est un projet de loisir d’un seul mainteneur.',
          '**Ceux qui exigent une conformité documentée.** Aucune politique de confidentialité n’a été trouvée.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'TranscriptionSuite a-t-il besoin d’un GPU ?',
            a: 'Non. Un environnement CPU seul existe, mais les modèles NeMo y sont indisponibles et les gros modèles y sont lents ; NVIDIA CUDA, Apple Metal et Vulkan AMD ou Intel sont des accélérateurs facultatifs.',
          },
          {
            q: 'Pourquoi faut-il Docker ?',
            a: 'Le serveur de transcription est livré sous forme de conteneur sous Windows, Linux et sur Mac Intel, que le tableau de bord télécharge et gère ; les Mac Apple silicon l’exécutent plutôt en natif.',
          },
          {
            q: 'D’autres applications peuvent-elles l’utiliser comme backend de transcription ?',
            a: 'Oui. Il expose un point d’accès de transcription compatible OpenAI, vers lequel des outils comme Open WebUI et LM Studio peuvent pointer.',
          },
          {
            q: 'Faut-il un compte pour les étiquettes de locuteurs ?',
            a: 'Seulement pour la voie Whisper et NeMo : PyAnnote demande un jeton Hugging Face gratuit. SenseVoice, VibeVoice et Sortformer sur Apple silicon n’en demandent pas.',
          },
          {
            q: 'Puis-je l’exécuter sur une machine et l’utiliser depuis une autre ?',
            a: 'Oui. Le README décrit un accès à distance via Tailscale ou un réseau local.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'TranscriptionSuite convient bien à ceux qui veulent une transcription locale et privée avec étiquettes de locuteurs et sont à l’aise avec Docker, ou qui possèdent un Mac Apple silicon où la version intégrée supprime cette étape.',
          'Les réserves tiennent à la maturité et à la transparence : un seul mainteneur qui se décrit comme « vibe-codeur », pas de politique de confidentialité, aucun benchmark de précision en dehors de l’affirmation de vitesse de l’auteur, et une application macOS non signée. Essayez-la d’abord sur des enregistrements non sensibles.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de TranscriptionSuite](https://transcriptionsuite.app/) — description du produit, fonctionnalités et accélération matérielle.',
          '[README de TranscriptionSuite](https://github.com/homelab-00/TranscriptionSuite/blob/main/docs/README.md) — installation, matrice de compatibilité, API, licence et état du projet.',
          '[TranscriptionSuite sur GitHub](https://github.com/homelab-00/TranscriptionSuite) — licence GPL-3.0 et nombre d’étoiles.',
          '[Versions de TranscriptionSuite](https://github.com/homelab-00/TranscriptionSuite/releases) — version 1.3.10 et fichiers d’installation.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Pour aller plus loin',
        items: [
          '[Outils vocaux locaux comparés](/fr/power-local-llm/local-llm-voice-audio-compared) — synthèse vocale, reconnaissance vocale et agents vocaux côte à côte.',
          '[Test de Whisper.cpp](/fr/power-local-llm/whisper-cpp-review) — le moteur Whisper en C++ que TranscriptionSuite peut aussi utiliser.',
          '[Créer un assistant vocal local](/fr/power-local-llm/build-local-voice-assistant-2026) — intégrer la reconnaissance vocale à un assistant vocal.',
          '[Pipeline multimodal local : voix, vision et texte](/fr/power-local-llm/local-multimodal-pipeline-voice-vision-text) — combiner modèles vocaux et visuels locaux.',
          '[L’annuaire complet des logiciels de LLM locaux](/fr/directory) — un annuaire plus large d’outils d’IA locale pour toutes les plateformes.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-18',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/transcriptionsuite-review-hero-ja.webp',
    title: 'TranscriptionSuiteレビュー：話者ラベル付きの無料ローカル音声認識アプリ',
    seoTitle: 'TranscriptionSuiteレビュー：無料のローカル音声認識',
    intro:
      'TranscriptionSuiteは、自分のパソコン上で音声をテキストに変換する無料のオープンソースのデスクトップアプリです。ライブ文字起こし、話者ラベル、検索できるオーディオノート、選べる音声モデルを備えています。このレビューでは、公式サイト・README・GitHubリリースで確認できる内容と記載のない点、そしてディレクトリ内の他の文字起こしツールとの違いをまとめます。',
    metaDescription:
      'TranscriptionSuiteレビュー：ライブモード、話者ラベル、オーディオノート、OpenAI互換APIを備えた、Windows・macOS・Linux対応の無料GPL-3.0音声認識アプリ。実機テストなし。',
    twitterDescription:
      'TranscriptionSuiteレビュー：話者ラベル、ライブモード、オーディオノートを備えた無料のオープンソース音声認識アプリ。導入、モデル、プライバシー、制限、代替ツールを解説します。',
    audience:
      '会議・講義・口述の正確でプライベートな文字起こしが必要な方向けに、導入、モデル、ハードウェア、プライバシー、制限、代替ツールを解説します。',
    readTime: '9分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'TranscriptionSuite review',
    targetKeywords: [
      'transcriptionsuite レビュー',
      'transcriptionsuite',
      'ローカル 音声認識 アプリ',
      'オフライン 文字起こし 話者分離',
      'whisper parakeet デスクトップアプリ',
      'openai互換 文字起こしサーバー',
      'オーディオノート ローカルai',
    ],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Apple silicon', 'AMD Vulkan', 'Intel Vulkan', 'CPU'],
    leadAnswerBlock:
      '**TranscriptionSuiteは、音声モデルを自分のパソコン上で実行し、ライブ文字起こし、話者ラベル、カレンダー型のオーディオノート、OpenAI互換APIを加えた、無料のGPL-3.0音声認識アプリです。** READMEによると、音声と文字起こし結果がマシンの外に出ることはありません。本レビューはバージョン1.3.10が対象で、公式サイト、README、GitHubリリースの情報に基づいており、実機テストは行っていません。',
    quickAnswerTop: {
      ja: {
        question: 'TranscriptionSuiteは、プライベートなローカル文字起こしを試す価値がありますか？',
        answer:
          '会議、講義、インタビューを文字起こしし、クラウドサービスなしで話者ラベルが欲しい方には、おそらく向いています。ただし次の2点を先に確認してください。WindowsとLinuxではサーバーにDockerが必要なこと、そして作者がこのプロジェクトを1人で作る「バイブコーディング」の趣味プロジェクトと説明していることです。',
        bullets: [
          'Windows、Linux、macOS向けのダッシュボードインストーラーがあり、Apple silicon搭載MacにはDocker不要の同梱ビルドがあります。',
          '長時間録音、リアルタイムのライブモード、テキストや字幕に書き出せるファイル取り込み。',
          '話者ラベル、Whisperで90以上の言語、複数のモデルファミリー。',
          '検索できるオーディオノート、グローバルな口述ショートカット、OpenAI互換API。',
          '無料のオープンソース。モデルの重みは初回利用時にダウンロードし、その後はオフラインで動作します。',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'TranscriptionSuiteを入手する', anchor: 'get-it' },
      { label: 'TranscriptionSuiteの概要', anchor: 'at-a-glance' },
      { label: 'TranscriptionSuiteとは', anchor: 'what-is-transcriptionsuite' },
      { label: '始め方', anchor: 'how-to-get-started' },
      { label: '機能', anchor: 'features' },
      { label: 'モデルとハードウェア', anchor: 'models-hardware' },
      { label: 'プライバシー、ライセンス、費用', anchor: 'privacy' },
      { label: 'メリットと制限', anchor: 'tradeoffs' },
      { label: 'TranscriptionSuiteと代替ツールの比較', anchor: 'vs-alternatives' },
      { label: 'TranscriptionSuiteが向いている人', anchor: 'who-should-use' },
      { label: 'TranscriptionSuiteが向いていない人', anchor: 'who-should-not-use' },
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
            text: 'TranscriptionSuiteは、自分のパソコン上で動く音声モデルで音声を文字起こしし、誰が話したかを示すオープンソースのデスクトップアプリです。',
          },
          {
            type: 'plain-terms',
            text: 'プライベートな文字起こしスタジオだと考えてください。講義を録音し、任意のアプリに口述し、音声ファイルを取り込むと、録音をクラウドに送らずに話者ラベル付きの文字起こしが得られます。',
          },
        ],
        items: [
          '確認したバージョン：1.3.10（2026年9月24日公開）。リポジトリの最終更新は2026年10月4日のため、更新停止の警告は当てはまりません。',
          'ライセンスと価格：READMEによるとGPL-3.0以降。無料でアカウントも不要です。',
          '対応環境：Windows 11とLinux（x64）、macOS。サーバーはApple silicon搭載Mac以外ではDockerで動きます。',
          '主な特長：ライブモード、話者ラベル、オーディオノート、OpenAI互換API、Webhook。',
          '成熟度：GitHubスターは約775で、メンテナーは1人。作者自身がバイブコーディングと述べています。',
        ],
      },
      getItTranscriptionsuite: {
        id: 'get-it',
        title: 'TranscriptionSuiteを入手する',
        content: [
          '**TranscriptionSuiteは2つの部分からなります。インストールするダッシュボードと、アプリがダウンロード・管理するサーバーです。** ファイルは[最新のGitHubリリース](https://github.com/homelab-00/TranscriptionSuite/releases/latest)に添付されており、以下の行は簡単な順に並べています。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          { 'プラットフォーム': 'macOS（Apple silicon、サーバー同梱）', '入手先': '[TranscriptionSuite-1.3.10-arm64-mac-metal.dmg](https://github.com/homelab-00/TranscriptionSuite/releases/latest)（約3〜5 GB、Docker不要）' },
          { 'プラットフォーム': 'macOS（Apple silicon、ダッシュボードのみ）', '入手先': '[TranscriptionSuite-1.3.10-arm64-mac.dmg](https://github.com/homelab-00/TranscriptionSuite/releases/latest)（約200 MB、サーバーは別の場所で実行）' },
          { 'プラットフォーム': 'Windows（x64）', '入手先': '[TranscriptionSuite.Setup.1.3.10.exe](https://github.com/homelab-00/TranscriptionSuite/releases/latest)とWSL 2対応のDocker Desktop' },
          { 'プラットフォーム': 'Linux（x64）', '入手先': '[TranscriptionSuite-1.3.10.AppImage](https://github.com/homelab-00/TranscriptionSuite/releases/latest)とDockerまたはPodman' },
          { 'プラットフォーム': '公式サイト', '入手先': '[transcriptionsuite.app](https://transcriptionsuite.app/)' },
          { 'プラットフォーム': 'プライバシーポリシー', '入手先': '独立したプライバシーポリシーのページは見つかりませんでした。[README](https://github.com/homelab-00/TranscriptionSuite)にローカル処理の説明があります' },
          { 'プラットフォーム': 'ソースコード', '入手先': '[github.com/homelab-00/TranscriptionSuite](https://github.com/homelab-00/TranscriptionSuite)' },
        ],
        note: 'ダウンロードして開くだけで済むのは、サーバー同梱のMac版だけです。WindowsとLinuxでは、先にDockerまたはPodmanをターミナルレベルで用意する必要があります。macOSアプリは署名されていないため、隔離フラグを外すか「このまま開く」を選ぶまでmacOSにブロックされ、FFmpegのインストールも必要です。READMEにはIntel Mac向けビルドの記載がありますが、1.3.10のリリースにあるのはApple silicon向けのディスクイメージだけです。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'TranscriptionSuiteの概要',
        columns: ['項目', 'TranscriptionSuite'],
        rows: [
          { '項目': '対応環境', 'TranscriptionSuite': 'Windows、macOS、Linux' },
          { '項目': '価格', 'TranscriptionSuite': '無料' },
          { '項目': 'ライセンス', 'TranscriptionSuite': 'GPL-3.0以降' },
          { '項目': '実行場所', 'TranscriptionSuite': 'ローカル。モデルは初回利用時にダウンロード' },
          { '項目': '対応言語', 'TranscriptionSuite': 'Whisperで90以上。他のモデルはより少ない' },
          { '項目': 'リアルタイム文字起こし', 'TranscriptionSuite': '対応（ライブモード、Whisper系モデルのみ）' },
          { '項目': '話者ラベル', 'TranscriptionSuite': '録音とファイル取り込みで対応。ライブモードは非対応' },
          { '項目': 'CPUのみで利用可能', 'TranscriptionSuite': '可能。NeMoモデルは利用不可' },
          { '項目': 'ローカルAPIサーバー', 'TranscriptionSuite': 'あり。OpenAI互換の文字起こしエンドポイント' },
        ],
        note: 'この項目は、ローカルLLMソフトウェアディレクトリで使っている音声認識の比較に沿っています。サイトに記載がないことは「不明」を意味し、「非対応」ではありません。',
      },
      whatIsTranscriptionsuite: {
        id: 'what-is-transcriptionsuite',
        title: 'TranscriptionSuiteとは',
        content: [
          '**TranscriptionSuiteは文字起こしアプリであり、会議ボットでもクラウドサービスでもありません。** READMEによると、構成はElectronのダッシュボードとPythonバックエンドで、Whisper、NVIDIA NeMo、VibeVoice-ASR、SenseVoice、whisper.cpp、MLXの各モデルに対応し、CUDA、Apple Metal、Vulkan、または純粋なCPUで動作します。',
          '作者は、個人用ツールから趣味のプロジェクトに育ったと述べています。機械工学のエンジニアでソフトウェアエンジニアではなく、READMEの言葉では「this whole thing is vibecoded」（ただし無思考ではない）とのことです。自分でも使っており、放棄するつもりはないとしています。',
          '本レビューは、公式サイト、README、GitHubのリリースに基づいています。実機テストは行っていないため、精度、速度、安定性は評価していません。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '始め方',
        content: [
          '**セットアップは、ダッシュボードのインストールと、アプリ内からのサーバー起動です。** 手順はREADMEに沿っています。',
        ],
        numberedItems: [
          {
            title: 'プラットフォームを準備する',
            whyItMatters: 'WindowsとLinuxではDocker（WindowsはWSL 2対応のDocker Desktop、LinuxはDockerまたはPodman）をインストールします。Apple siliconではHomebrewでFFmpegを入れます。',
          },
          {
            title: 'ダッシュボードをインストールする',
            whyItMatters: '[リリースページ](https://github.com/homelab-00/TranscriptionSuite/releases/latest)からお使いのシステム向けのファイルをダウンロードします。Macではアプリが未署名のため、隔離フラグを一度だけ外します。',
          },
          {
            title: 'Serverタブでサーバーを起動する',
            whyItMatters: 'ランタイム（CUDA、Metal、Vulkan、CPU）を選んで起動します。初回起動では選択したモデルがダウンロードされ、数GBになることがあります。',
          },
          {
            title: '録音、口述、ファイル取り込みをする',
            whyItMatters: 'Sessionタブで録音または音声の取り込みを行い、話者ラベルが必要なときはSpeaker Diarizationをオンにします。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**1人のプロジェクトとしては機能が幅広いのが特徴です。** 以下はすべてREADMEと公式サイトに基づいています。',
        ],
        items: [
          '**長時間録音。** マイクまたはシステム音声から録音し、停止後に全文の文字起こしを取得できます。直近20秒の文字起こしがプレビューとして流れます。',
          '**ライブモード。** 口述向けのリアルタイム・文ごとの文字起こしです。Whisper系モデルに限られ、話者ラベルは付きません。',
          '**話者分離。** Whisper、NeMo、SenseVoice、VibeVoiceの各モデルで「誰が話したか」のラベルを付けます。',
          '**ファイル取り込み。** 音声や動画を取り込み、プレーンテキストまたは`.srt`/`.ass`字幕として保存できます。',
          '**オーディオノート。** 録音はカレンダー表示、全文検索、任意のOpenAI互換プロバイダーと会話できるAIアシスタントを備えたノートに保存されます。',
          '**口述ショートカット。** システム全体で使える開始・停止ショートカットと、カーソル位置への貼り付け。',
          '**連携。** Open WebUIやLM Studioなどから使えるOpenAI互換の`/v1/audio/transcriptions`エンドポイント、送信Webhook、TailscaleやLAN経由のリモートアクセス。',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'モデルとハードウェア',
        content: [
          '**音声モデルは自分で選びます。アプリがハードウェアを検出し、使えない選択肢はグレーアウトします。** Docker環境ではWhisperX（faster-whisperモデル）、NVIDIA Parakeet v3とCanary v2、VibeVoice-ASR、SenseVoice、whisper.cppから選べます。Apple siliconではWhisper、Parakeet、Canary、VibeVoice-ASRのMLX版です。',
          '対応言語はモデルによって異なります。Whisperは90以上の言語に対応し英語への翻訳もでき、ParakeetとCanaryは25のヨーロッパ言語、VibeVoiceは51言語、SenseVoiceは5言語です。NeMoモデルはCPUランタイムでは動作せず、VibeVoice-ASRは約16 GBの90億パラメータのモデルです。',
          '開発者は、RTX 3060のWhisperで30分の音声を1分未満で文字起こしできると述べていますが、本レビューではこの数値を再現していません。READMEには最小RAMやVRAMの要件が載っていません。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー、ライセンス、費用',
        content: [
          '**READMEによると、すべてお使いのパソコン上で動作し、音声と文字起こし結果は外に出ません。** インターネットが必要なのは、初回利用時にアプリとモデルの重みをダウンロードするときだけで、その後はオフラインで動作します。WhisperやNeMoでの話者ラベルにはPyAnnoteモデルを使い、無料のHugging Faceトークンが必要です。',
          'ノートのAIアシスタントは、Groq、OpenAI、OpenRouterなどのクラウドサービスを含む任意のOpenAI互換プロバイダーと会話できます。そこへ送った内容は「ローカルのみ」という説明の対象外です。READMEには、アプリが週に一度新バージョンを確認するとも書かれています。',
          'コードはGPL-3.0以降で、アプリは無料です。独立したプライバシーポリシーのページは見つかりませんでした。本レビューでは通信内容を確認していないため、これらは開発者自身の説明です。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'メリットと制限',
        columns: ['メリット', '実際の使い勝手', '制限・注意点'],
        rows: [
          {
            'メリット': 'ローカルでの文字起こし',
            '実際の使い勝手': '音声はお使いのマシンの外に出ません。',
            '制限・注意点': '初回のモデルダウンロードは大容量で、精度の数値は公開されていません。',
          },
          {
            'メリット': '話者ラベル',
            '実際の使い勝手': '会議で誰が話したかが分かります。',
            '制限・注意点': 'ライブモードでは使えず、Sortformerが扱えるのは4人までです。',
          },
          {
            'メリット': '多くのモデルファミリー',
            '実際の使い勝手': '速度、言語、精度を選べます。',
            '制限・注意点': 'どれが自分のハードウェアに合うかは自分で判断します。',
          },
          {
            'メリット': 'OpenAI互換API',
            '実際の使い勝手': '他のツールのバックエンドとして使えます。',
            '制限・注意点': 'modelフィールドは受け付けますが無視されます。',
          },
          {
            'メリット': 'オープンソースで無料',
            '実際の使い勝手': '中身を確認できるGPLのコードです。',
            '制限・注意点': 'メンテナーは1人で自称バイブコーディング。WindowsとLinuxではDockerが必要です。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'TranscriptionSuiteと代替ツールの比較',
        content: [
          'ディレクトリ内で最も近い音声認識ツールは、別の会議向け文字起こしツール、Mac向けの口述アプリ、そして土台にできる2つのエンジンです。',
        ],
        columns: ['アプリ', '対応環境', '価格とライセンス', '役割', '主な違い'],
        rows: [
          {
            'アプリ': 'TranscriptionSuite',
            '対応環境': 'Windows、macOS、Linux',
            '価格とライセンス': '無料、GPL-3.0',
            '役割': 'サーバー付き文字起こしアプリ',
            '主な違い': 'ライブモード、話者ラベル、ノート、APIが1つに',
          },
          {
            'アプリ': '[Meetily](/ja/power-local-llm/meetily-review)',
            '対応環境': 'macOS、Windows',
            '価格とライセンス': '無料（MIT）と有料Pro',
            '役割': '会議の文字起こし',
            '主な違い': '会議向けの設計。macOSとWindowsのみ',
          },
          {
            'アプリ': '[MacWhisper](/ja/power-local-llm/macwhisper-review)',
            '対応環境': 'macOS',
            '価格とライセンス': 'フリーミアム、プロプライエタリ',
            '役割': 'Mac向け文字起こしアプリ',
            '主な違い': 'Mac専用でクローズドソース',
          },
          {
            'アプリ': '[faster-whisper](/ja/power-local-llm/faster-whisper-review)',
            '対応環境': 'Windows、macOS、Linux',
            '価格とライセンス': '無料、MIT',
            '役割': 'Pythonの音声ライブラリ',
            '主な違い': '開発者向けのエンジンで、画面はない',
          },
          {
            'アプリ': '[Izwi](/ja/power-local-llm/izwi-review)',
            '対応環境': 'Windows、macOS、Linux',
            '価格とライセンス': '無料、MIT',
            '役割': 'ローカル音声ランタイム',
            '主な違い': '1つのAPIで音声出力と声のクローンも扱う',
          },
        ],
        note: '他社アプリの対応環境、価格、機能は頻繁に変わります。決める前に、各プロジェクトの公式ページで最新情報を確認してください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'TranscriptionSuiteが向いている人',
        items: [
          '**インタビュー、講義、会議を文字起こしする人。** 話者ラベルと字幕出力がまさにその用途を狙っています。',
          '**Apple silicon搭載Macのユーザー。** 同梱ビルドが最も簡単で、Dockerは不要です。',
          '**他のアプリに口述入力したい人。** ライブモードとカーソル位置への貼り付けで対応できます。',
          '**自宅サーバーで試したい人。** リモートアクセスとAPIで、他の端末から1台のマシンを使えます。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'TranscriptionSuiteが向いていない人',
        items: [
          '**WindowsやLinuxで準備不要のインストーラーが欲しい人。** 先にDockerが必要です。',
          '**Intel Macをお使いの人。** 最新リリースにIntel向けビルドはありません。',
          '**ベンダーのサポートが必要なチーム。** メンテナー1人の趣味のプロジェクトです。',
          '**文書化されたコンプライアンスが必要な人。** プライバシーポリシーのページは見つかりませんでした。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'TranscriptionSuiteにGPUは必要ですか？',
            a: 'いいえ。CPUのみのランタイムがありますが、NeMoモデルは使えず、大きなモデルは遅くなります。NVIDIA CUDA、Apple Metal、AMD/IntelのVulkanは任意のアクセラレーターです。',
          },
          {
            q: 'なぜDockerが必要なのですか？',
            a: '文字起こしサーバーは、Windows、Linux、Intel Macではコンテナとして提供され、ダッシュボードがダウンロードと管理を行います。Apple silicon搭載Macではネイティブで実行されます。',
          },
          {
            q: '他のアプリから文字起こしバックエンドとして使えますか？',
            a: 'はい。OpenAI互換の文字起こしエンドポイントを公開しているため、Open WebUIやLM Studioなどから接続できます。',
          },
          {
            q: '話者ラベルにアカウントは必要ですか？',
            a: 'WhisperとNeMoの場合だけです。PyAnnoteは無料のHugging Faceトークンを必要とします。SenseVoice、VibeVoice、Apple siliconのSortformerは不要です。',
          },
          {
            q: '1台で動かして別の端末から使えますか？',
            a: 'はい。READMEには、TailscaleまたはLAN経由のリモートアクセスが記載されています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          'TranscriptionSuiteは、話者ラベル付きのプライベートなローカル文字起こしが欲しく、Dockerに抵抗がない方、またはApple silicon搭載Macで同梱ビルドによりその手間を省ける方に向いています。',
          '懸念点は成熟度と透明性です。バイブコーディングと自称するメンテナー1人、プライバシーポリシーのページがないこと、作者自身の速度の主張以外に精度のベンチマークがないこと、そして未署名のmacOSアプリです。まずは機密性のない録音で試してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[TranscriptionSuite公式サイト](https://transcriptionsuite.app/) — 製品説明、機能、ハードウェアアクセラレーション。',
          '[TranscriptionSuiteのREADME](https://github.com/homelab-00/TranscriptionSuite/blob/main/docs/README.md) — インストール、互換性マトリックス、API、ライセンス、プロジェクトの状況。',
          '[GitHubのTranscriptionSuite](https://github.com/homelab-00/TranscriptionSuite) — GPL-3.0ライセンスとスター数。',
          '[TranscriptionSuiteのリリース](https://github.com/homelab-00/TranscriptionSuite/releases) — バージョン1.3.10とインストーラーファイル。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカル音声ツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — 音声合成、音声認識、音声エージェントを並べて比較。',
          '[Whisper.cppレビュー](/ja/power-local-llm/whisper-cpp-review) — TranscriptionSuiteも利用できるC++版Whisperエンジン。',
          '[ローカル音声アシスタントの作り方](/ja/power-local-llm/build-local-voice-assistant-2026) — 音声認識を音声アシスタントに組み込む方法。',
          '[ローカルのマルチモーダルパイプライン：音声・画像・テキスト](/ja/power-local-llm/local-multimodal-pipeline-voice-vision-text) — ローカルの音声モデルと画像モデルを組み合わせる。',
          '[ローカルLLMソフトウェア完全ディレクトリ](/ja/directory) — 全プラットフォームのローカルAIツールを集めた幅広いディレクトリ。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-18',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/transcriptionsuite-review-hero-zh.webp',
    title: 'TranscriptionSuite评测：支持说话人标注的免费本地语音转文字应用',
    seoTitle: 'TranscriptionSuite评测：免费本地语音转文字',
    intro:
      'TranscriptionSuite是一款免费开源的桌面应用，在你自己的电脑上把语音转成文字，支持实时转录、说话人标注、可搜索的音频笔记本，并可自选语音模型。本评测梳理其官网、README和GitHub发布页记录了什么、遗漏了什么，以及它与目录中其他转录工具相比如何。',
    metaDescription:
      'TranscriptionSuite评测：免费的GPL-3.0语音转文字应用，支持Windows、macOS和Linux，含实时模式、说话人标注、音频笔记本和OpenAI兼容API。未做实际测试。',
    twitterDescription:
      'TranscriptionSuite评测：一款免费开源的本地语音转文字应用，支持说话人标注、实时模式和音频笔记本。安装、模型、隐私、局限与替代工具。',
    audience:
      '需要为会议、课程和口述获得准确且私密的转录文本的读者——涵盖安装、模型、硬件、隐私、局限与替代工具。',
    readTime: '阅读约9分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'TranscriptionSuite review',
    targetKeywords: [
      'transcriptionsuite评测',
      'transcriptionsuite',
      '本地语音转文字应用',
      '离线转录 说话人分离',
      'whisper parakeet 桌面应用',
      'openai兼容 转录服务器',
      '音频笔记本 本地ai',
    ],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Apple silicon', 'AMD Vulkan', 'Intel Vulkan', 'CPU'],
    leadAnswerBlock:
      '**TranscriptionSuite是一款免费的GPL-3.0语音转文字应用，在你自己的电脑上运行语音模型，并提供实时转录、说话人标注、按日历组织的音频笔记本和OpenAI兼容API。** README称，音频和转录文本不会离开你的电脑。本评测对应版本1.3.10，依据公开的官网、README和GitHub发布页撰写，并未实际测试。',
    quickAnswerTop: {
      zh: {
        question: 'TranscriptionSuite值得用来做私密的本地转录吗？',
        answer:
          '如果你要转录会议、课程或访谈，并希望不用云服务就能得到说话人标注，那大概值得一试。请先确认两点：Windows和Linux上服务器需要Docker，而且作者把这个项目描述为一个人用“氛围编程”做出来的业余项目。',
        bullets: [
          '提供Windows、Linux和macOS的仪表盘安装包；Apple silicon的Mac有无需Docker的内置服务器版本。',
          '长时间录音、实时的Live Mode，以及可导出文本或字幕的文件导入。',
          '说话人标注、Whisper支持90多种语言，并有多个模型系列。',
          '可搜索的音频笔记本、全局口述快捷键和OpenAI兼容API。',
          '免费开源；模型权重在首次使用时下载，之后可离线工作。',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: '获取TranscriptionSuite', anchor: 'get-it' },
      { label: 'TranscriptionSuite概览', anchor: 'at-a-glance' },
      { label: 'TranscriptionSuite是什么', anchor: 'what-is-transcriptionsuite' },
      { label: '入门步骤', anchor: 'how-to-get-started' },
      { label: '功能', anchor: 'features' },
      { label: '模型与硬件', anchor: 'models-hardware' },
      { label: '隐私、许可证与费用', anchor: 'privacy' },
      { label: '优势与限制', anchor: 'tradeoffs' },
      { label: 'TranscriptionSuite与替代工具对比', anchor: 'vs-alternatives' },
      { label: '适合使用TranscriptionSuite的人', anchor: 'who-should-use' },
      { label: '不适合使用TranscriptionSuite的人', anchor: 'who-should-not-use' },
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
            text: 'TranscriptionSuite是一款开源桌面应用，用运行在你自己电脑上的语音模型转录音频，并标出谁说了什么。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作私密的转录工作室：录下一堂课、向任意应用口述，或导入音频文件，就能得到带说话人标注的转录文本，而不必把录音发给云服务。',
          },
        ],
        items: [
          '评测版本：1.3.10，发布于2026年9月24日；代码仓库最近一次更新是2026年10月4日，因此不适用项目沉寂警告。',
          '许可证与价格：据README为GPL-3.0或更高版本；免费，无需账号。',
          '平台：Windows 11、Linux（x64）和macOS；除Apple silicon的Mac外，服务器运行在Docker中。',
          '亮点：Live Mode、说话人标注、音频笔记本、OpenAI兼容API、Webhook。',
          '成熟度：约775个GitHub星标，只有一位维护者，作者自称项目是“氛围编程”的产物。',
        ],
      },
      getItTranscriptionsuite: {
        id: 'get-it',
        title: '获取TranscriptionSuite',
        content: [
          '**TranscriptionSuite由两部分组成：你安装的仪表盘，以及应用为你下载并管理的服务器。** 文件附在[最新GitHub发布页](https://github.com/homelab-00/TranscriptionSuite/releases/latest)上；下面各行按由易到难排序。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          { '平台': 'macOS，Apple silicon（含服务器）', '获取方式': '[TranscriptionSuite-1.3.10-arm64-mac-metal.dmg](https://github.com/homelab-00/TranscriptionSuite/releases/latest)（约3-5 GB，无需Docker）' },
          { '平台': 'macOS，Apple silicon（仅仪表盘）', '获取方式': '[TranscriptionSuite-1.3.10-arm64-mac.dmg](https://github.com/homelab-00/TranscriptionSuite/releases/latest)（约200 MB，服务器在别处运行）' },
          { '平台': 'Windows（x64）', '获取方式': '[TranscriptionSuite.Setup.1.3.10.exe](https://github.com/homelab-00/TranscriptionSuite/releases/latest)，另需启用WSL 2的Docker Desktop' },
          { '平台': 'Linux（x64）', '获取方式': '[TranscriptionSuite-1.3.10.AppImage](https://github.com/homelab-00/TranscriptionSuite/releases/latest)，另需Docker或Podman' },
          { '平台': '官网', '获取方式': '[transcriptionsuite.app](https://transcriptionsuite.app/)' },
          { '平台': '隐私政策', '获取方式': '未找到单独的隐私政策页面；[README](https://github.com/homelab-00/TranscriptionSuite)说明了本地处理' },
          { '平台': '源代码', '获取方式': '[github.com/homelab-00/TranscriptionSuite](https://github.com/homelab-00/TranscriptionSuite)' },
        ],
        note: '只有内置服务器的Mac版本是下载后直接打开的安装方式。在Windows和Linux上，需要先在终端层面配置Docker或Podman。macOS应用未签名，因此在你清除隔离标记或选择“仍要打开”之前会被系统拦截；还必须安装FFmpeg。README列出了Intel版Mac构建，但1.3.10发布页只有Apple silicon的磁盘映像。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'TranscriptionSuite概览',
        columns: ['属性', 'TranscriptionSuite'],
        rows: [
          { '属性': '平台', 'TranscriptionSuite': 'Windows、macOS、Linux' },
          { '属性': '价格', 'TranscriptionSuite': '免费' },
          { '属性': '许可证', 'TranscriptionSuite': 'GPL-3.0或更高版本' },
          { '属性': '运行位置', 'TranscriptionSuite': '本地；模型在首次使用时下载' },
          { '属性': '语言', 'TranscriptionSuite': 'Whisper支持90多种；其他模型较少' },
          { '属性': '实时转录', 'TranscriptionSuite': '支持（Live Mode，仅限Whisper系列模型）' },
          { '属性': '说话人标注', 'TranscriptionSuite': '录音和导入时支持；Live Mode下不支持' },
          { '属性': '仅用CPU即可运行', 'TranscriptionSuite': '可以；NeMo模型不可用' },
          { '属性': '本地API服务器', 'TranscriptionSuite': '有，OpenAI兼容的转录接口' },
        ],
        note: '这些属性沿用本地LLM软件目录中的语音转文字对比。官网未提及表示“未知”，而不是“不支持”。',
      },
      whatIsTranscriptionsuite: {
        id: 'what-is-transcriptionsuite',
        title: 'TranscriptionSuite是什么',
        content: [
          '**TranscriptionSuite是一款转录应用，不是会议机器人，也不是云服务。** README描述其为Electron仪表盘加Python后端，支持Whisper、NVIDIA NeMo、VibeVoice-ASR、SenseVoice、whisper.cpp和MLX等模型，可用CUDA、Apple Metal或Vulkan加速，也可只用CPU。',
          '作者称它最初是个人工具，后来发展成业余项目，作者是机械工程师而非软件工程师；用README自己的话说，“this whole thing is vibecoded”，但并非盲目为之。作者表示自己也在使用，并不打算放弃。',
          '本评测依据官网、README和GitHub发布页。未做实际测试，因此这里不评价准确率、速度和稳定性。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '入门步骤',
        content: [
          '**设置过程是：安装仪表盘，然后在应用内启动服务器。** 步骤依据README。',
        ],
        numberedItems: [
          {
            title: '准备你的平台',
            whyItMatters: '在Windows和Linux上安装Docker（Windows用启用WSL 2的Docker Desktop，Linux用Docker或Podman）；在Apple silicon上则改用Homebrew安装FFmpeg。',
          },
          {
            title: '安装仪表盘',
            whyItMatters: '从[发布页](https://github.com/homelab-00/TranscriptionSuite/releases/latest)下载适合你系统的文件；在Mac上，由于应用未签名，需要清除一次隔离标记。',
          },
          {
            title: '在Server标签页启动服务器',
            whyItMatters: '选择运行时（CUDA、Metal、Vulkan或CPU）并启动；首次启动会下载你选的模型，可能有数GB。',
          },
          {
            title: '录音、口述或导入文件',
            whyItMatters: '在Session标签页录音或导入音频，需要说话人标注时打开Speaker Diarization开关。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**对一个人维护的项目来说，功能相当丰富。** 以下内容均来自README和官网。',
        ],
        items: [
          '**长时间录音。** 可从麦克风或系统音频录音，停止后得到完整转录，录音时还有最近20秒的滚动预览。',
          '**Live Mode。** 面向口述的实时、逐句转录，仅限Whisper系列模型，且不带说话人标注。',
          '**说话人分离。** 为Whisper、NeMo、SenseVoice和VibeVoice模型标出“谁说了什么”。',
          '**文件导入。** 导入音频或视频，保存为纯文本或`.srt` / `.ass`字幕。',
          '**音频笔记本。** 录音进入带日历视图、全文搜索的笔记本，并有可连接任意OpenAI兼容服务商的AI助手。',
          '**口述快捷键。** 系统级的开始和停止快捷键，以及在光标处粘贴。',
          '**集成。** 供Open WebUI和LM Studio等工具使用的OpenAI兼容`/v1/audio/transcriptions`接口、对外Webhook，以及通过Tailscale或局域网的远程访问。',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '模型与硬件',
        content: [
          '**语音模型由你选择，应用会检测你的硬件，并把不兼容的选项置灰。** 在Docker平台上可选WhisperX（faster-whisper模型）、NVIDIA Parakeet v3和Canary v2、VibeVoice-ASR、SenseVoice和whisper.cpp；在Apple silicon上则是Whisper、Parakeet、Canary和VibeVoice-ASR的MLX版本。',
          '语言覆盖取决于模型：Whisper支持90多种语言并可翻译成英语，Parakeet和Canary覆盖25种欧洲语言，VibeVoice为51种，SenseVoice为5种。NeMo模型无法在CPU运行时中使用，VibeVoice-ASR是约16 GB的90亿参数模型。',
          '开发者称，在RTX 3060上用Whisper转录半小时的音频不到一分钟；本评测未复现这一数字。README没有公布最低RAM或显存要求。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私、许可证与费用',
        content: [
          '**README称，一切都在你的电脑上运行，音频和转录文本不会离开它。** 只有在首次使用时下载应用和模型权重才需要联网，之后可离线工作。用Whisper或NeMo做说话人标注时会用到PyAnnote模型，需要免费的Hugging Face令牌。',
          '笔记本中的AI助手可连接任何OpenAI兼容服务商，包括Groq、OpenAI和OpenRouter等云服务；你发往那里的内容不在“仅限本地”的说法之内。README还提到，应用每周检查一次新版本。',
          '代码采用GPL-3.0或更高版本，应用免费。未找到专门的隐私政策页面。本评测未检查网络流量，因此这些说法出自开发者本人。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '优势与限制',
        columns: ['优势', '实际使用中的意义', '限制 / 注意事项'],
        rows: [
          {
            '优势': '本地转录',
            '实际使用中的意义': '音频留在你的电脑上。',
            '限制 / 注意事项': '首次使用时的模型下载很大；未公布准确率数据。',
          },
          {
            '优势': '说话人标注',
            '实际使用中的意义': '知道会议里谁说了什么。',
            '限制 / 注意事项': 'Live Mode下不可用；Sortformer最多处理四位说话人。',
          },
          {
            '优势': '多个模型系列',
            '实际使用中的意义': '可在速度、语言和准确度之间取舍。',
            '限制 / 注意事项': '哪个适合你的硬件需要自己判断。',
          },
          {
            '优势': 'OpenAI兼容API',
            '实际使用中的意义': '其他工具可把它当作后端。',
            '限制 / 注意事项': 'model字段会被接受但被忽略。',
          },
          {
            '优势': '开源且免费',
            '实际使用中的意义': '可审查的GPL代码。',
            '限制 / 注意事项': '只有一位维护者，自称“氛围编程”；Windows和Linux需要Docker。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'TranscriptionSuite与替代工具对比',
        content: [
          '这些是目录中最接近的语音转文字工具：另一款会议转录工具、一款Mac口述应用，以及两个可供二次开发的引擎。',
        ],
        columns: ['应用', '平台', '价格与许可证', '角色', '主要区别'],
        rows: [
          {
            '应用': 'TranscriptionSuite',
            '平台': 'Windows、macOS、Linux',
            '价格与许可证': '免费，GPL-3.0',
            '角色': '带服务器的转录应用',
            '主要区别': 'Live Mode、说话人标注、笔记本和API合一',
          },
          {
            '应用': '[Meetily](/zh/power-local-llm/meetily-review)',
            '平台': 'macOS、Windows',
            '价格与许可证': '免费（MIT）与付费Pro',
            '角色': '会议转录工具',
            '主要区别': '围绕会议设计；仅支持macOS和Windows',
          },
          {
            '应用': '[MacWhisper](/zh/power-local-llm/macwhisper-review)',
            '平台': 'macOS',
            '价格与许可证': '免费增值，专有',
            '角色': 'Mac转录应用',
            '主要区别': '仅限Mac且闭源',
          },
          {
            '应用': '[faster-whisper](/zh/power-local-llm/faster-whisper-review)',
            '平台': 'Windows、macOS、Linux',
            '价格与许可证': '免费，MIT',
            '角色': 'Python语音库',
            '主要区别': '面向开发者的引擎，没有界面',
          },
          {
            '应用': '[Izwi](/zh/power-local-llm/izwi-review)',
            '平台': 'Windows、macOS、Linux',
            '价格与许可证': '免费，MIT',
            '角色': '本地语音运行时',
            '主要区别': '在同一API后增加语音输出和声音克隆',
          },
        ],
        note: '第三方应用的平台、价格和功能经常变化。决定之前，请在各项目自己的页面上核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合使用TranscriptionSuite的人',
        items: [
          '**需要转录访谈、课程或会议的人。** 说话人标注和字幕导出正是为此而设。',
          '**使用Apple silicon的Mac用户。** 内置服务器的版本最简单，不需要Docker。',
          '**想向其他应用口述输入的人。** Live Mode和在光标处粘贴可以满足。',
          '**家里有服务器的折腾爱好者。** 远程访问和API让其他设备共用一台机器。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '不适合使用TranscriptionSuite的人',
        items: [
          '**想在Windows或Linux上免准备安装的人。** 需要先装Docker。',
          '**Intel版Mac用户。** 最新发布页没有Intel构建。',
          '**需要厂商支持的团队。** 这是一位维护者的业余项目。',
          '**需要有据可查的合规说明的人。** 未找到隐私政策页面。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'TranscriptionSuite需要GPU吗？',
            a: '不需要。有仅用CPU的运行时，但其中无法使用NeMo模型，大模型也会很慢；NVIDIA CUDA、Apple Metal以及AMD或Intel的Vulkan是可选的加速方式。',
          },
          {
            q: '为什么需要Docker？',
            a: '在Windows、Linux和Intel版Mac上，转录服务器以容器形式提供，由仪表盘下载并管理；Apple silicon的Mac则原生运行。',
          },
          {
            q: '其他应用能把它当作转录后端吗？',
            a: '可以。它提供OpenAI兼容的转录接口，Open WebUI和LM Studio等工具可以指向它。',
          },
          {
            q: '做说话人标注需要账号吗？',
            a: '只有Whisper和NeMo这条路径需要：PyAnnote要求免费的Hugging Face令牌。SenseVoice、VibeVoice和Apple silicon上的Sortformer不需要。',
          },
          {
            q: '可以在一台机器上运行、从另一台使用吗？',
            a: '可以。README介绍了通过Tailscale或局域网进行远程访问。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          'TranscriptionSuite很适合想要带说话人标注的私密本地转录、又能接受Docker的人，或者拥有Apple silicon的Mac、可用内置版本省掉这一步的人。',
          '需要保留的是成熟度和透明度：只有一位自称“氛围编程”的维护者，没有隐私政策页面，除作者自己的速度说法外没有准确率基准，而且macOS应用未签名。请先用不敏感的录音试用。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[TranscriptionSuite官网](https://transcriptionsuite.app/) — 产品介绍、功能和硬件加速。',
          '[TranscriptionSuite的README](https://github.com/homelab-00/TranscriptionSuite/blob/main/docs/README.md) — 安装、兼容性矩阵、API、许可证和项目状态。',
          '[GitHub上的TranscriptionSuite](https://github.com/homelab-00/TranscriptionSuite) — GPL-3.0许可证和星标数。',
          '[TranscriptionSuite发布页](https://github.com/homelab-00/TranscriptionSuite/releases) — 版本1.3.10和安装文件。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地语音与音频工具对比](/zh/power-local-llm/local-llm-voice-audio-compared) — 文字转语音、语音转文字和语音智能体并排对比。',
          '[Whisper.cpp评测](/zh/power-local-llm/whisper-cpp-review) — TranscriptionSuite也能使用的C++版Whisper引擎。',
          '[搭建本地语音助手](/zh/power-local-llm/build-local-voice-assistant-2026) — 把语音转文字接入语音助手。',
          '[本地多模态管线：语音、视觉与文本](/zh/power-local-llm/local-multimodal-pipeline-voice-vision-text) — 组合本地语音和视觉模型。',
          '[本地LLM软件完整目录](/zh/directory) — 涵盖各平台本地AI工具的更广泛目录。',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-18',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/transcriptionsuite-review-hero-es.webp',
    title: 'Reseña de TranscriptionSuite: voz a texto local y gratuito con etiquetas de hablante',
    seoTitle: 'Reseña de TranscriptionSuite: voz a texto local gratis',
    intro:
      'TranscriptionSuite es una app de escritorio gratuita y de código abierto que convierte la voz en texto en tu propio equipo, con transcripción en vivo, etiquetas de hablante, un cuaderno de audio con búsqueda y modelos de voz a elegir. Esta reseña recoge lo que documentan su sitio web, su README y sus versiones de GitHub, lo que omiten y cómo se compara con otras herramientas de transcripción del directorio.',
    metaDescription:
      'Reseña de TranscriptionSuite: app gratuita (GPL-3.0) para Windows, macOS y Linux con etiquetas de hablante, modo en vivo y API. Sin prueba práctica.',
    twitterDescription:
      'Reseña de TranscriptionSuite: una app de voz a texto local, gratuita y de código abierto, con etiquetas de hablante, modo en vivo y cuaderno de audio. Instalación, modelos, privacidad, límites y alternativas.',
    audience:
      'Personas que quieren transcripciones precisas y privadas de reuniones, clases y dictados: instalación, modelos, hardware, privacidad, límites y alternativas.',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'TranscriptionSuite review',
    targetKeywords: [
      'reseña transcriptionsuite',
      'transcriptionsuite',
      'app de voz a texto local',
      'transcripción sin conexión diarización de hablantes',
      'whisper parakeet app de escritorio',
      'servidor de transcripción compatible con openai',
      'cuaderno de audio ia local',
    ],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Apple silicon', 'AMD Vulkan', 'Intel Vulkan', 'CPU'],
    leadAnswerBlock:
      '**TranscriptionSuite es una app gratuita de voz a texto con licencia GPL-3.0 que ejecuta modelos de voz en tu propio equipo y añade transcripción en vivo, etiquetas de hablante, un cuaderno de audio con calendario y una API compatible con OpenAI.** Según su README, el audio y las transcripciones nunca salen de tu máquina. Esta reseña cubre la versión 1.3.10 y se basa en el sitio web público, el README y las versiones de GitHub, no en una prueba práctica.',
    quickAnswerTop: {
      es: {
        question: '¿Vale la pena probar TranscriptionSuite para transcribir de forma local y privada?',
        answer:
          'Probablemente, si transcribes reuniones, clases o entrevistas y quieres etiquetas de hablante sin un servicio en la nube. Antes comprueba dos cosas: en Windows y Linux el servidor necesita Docker, y el autor describe el proyecto como un proyecto de afición «vibe-codeado» por una sola persona.',
        bullets: [
          'Instaladores del panel para Windows, Linux y macOS; los Mac con Apple silicon tienen una versión integrada sin Docker.',
          'Grabación larga, un modo en vivo en tiempo real e importación de archivos con exportación a texto o subtítulos.',
          'Etiquetas de hablante, más de 90 idiomas con Whisper y varias familias de modelos.',
          'Un cuaderno de audio con búsqueda, atajos de dictado globales y una API compatible con OpenAI.',
          'Gratis y de código abierto; los pesos de los modelos se descargan la primera vez y luego funciona sin conexión.',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Conseguir TranscriptionSuite', anchor: 'get-it' },
      { label: 'TranscriptionSuite de un vistazo', anchor: 'at-a-glance' },
      { label: 'Qué es TranscriptionSuite', anchor: 'what-is-transcriptionsuite' },
      { label: 'Primeros pasos', anchor: 'how-to-get-started' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Modelos y hardware', anchor: 'models-hardware' },
      { label: 'Privacidad, licencia y coste', anchor: 'privacy' },
      { label: 'Ventajas y limitaciones', anchor: 'tradeoffs' },
      { label: 'TranscriptionSuite frente a las alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quién es TranscriptionSuite', anchor: 'who-should-use' },
      { label: 'Para quién no es TranscriptionSuite', anchor: 'who-should-not-use' },
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
            text: 'TranscriptionSuite es una app de escritorio de código abierto que transcribe audio con modelos de voz que se ejecutan en tu propio equipo y etiqueta quién ha dicho qué.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en un estudio de transcripción privado: grabas una clase, dictas en cualquier app o importas un archivo de audio y obtienes una transcripción con etiquetas de hablante sin enviar la grabación a un servicio en la nube.',
          },
        ],
        items: [
          'Versión revisada: 1.3.10, publicada el 24 de septiembre de 2026; el repositorio se actualizó por última vez el 4 de octubre de 2026, así que no se aplica la advertencia de proyecto parado.',
          'Licencia y precio: GPL-3.0 o posterior según el README; gratis, sin cuenta.',
          'Plataformas: Windows 11 y Linux (x64) y macOS; el servidor se ejecuta en Docker salvo en los Mac con Apple silicon.',
          'Funciones destacadas: modo en vivo, etiquetas de hablante, cuaderno de audio, API compatible con OpenAI, webhooks.',
          'Madurez: unas 775 estrellas en GitHub y un único mantenedor que califica el proyecto de «vibe-codeado».',
        ],
      },
      getItTranscriptionsuite: {
        id: 'get-it',
        title: 'Conseguir TranscriptionSuite',
        content: [
          '**TranscriptionSuite tiene dos partes: un panel que instalas y un servidor que la app descarga y gestiona por ti.** Los archivos están adjuntos a la [última versión de GitHub](https://github.com/homelab-00/TranscriptionSuite/releases/latest); las filas siguientes van de lo más fácil a lo más complejo.',
        ],
        columns: ['Plataforma', 'Descarga'],
        rows: [
          { 'Plataforma': 'macOS, Apple silicon (servidor incluido)', 'Descarga': '[TranscriptionSuite-1.3.10-arm64-mac-metal.dmg](https://github.com/homelab-00/TranscriptionSuite/releases/latest) (unos 3-5 GB, sin Docker)' },
          { 'Plataforma': 'macOS, Apple silicon (solo el panel)', 'Descarga': '[TranscriptionSuite-1.3.10-arm64-mac.dmg](https://github.com/homelab-00/TranscriptionSuite/releases/latest) (unos 200 MB; el servidor se ejecuta en otro sitio)' },
          { 'Plataforma': 'Windows (x64)', 'Descarga': '[TranscriptionSuite.Setup.1.3.10.exe](https://github.com/homelab-00/TranscriptionSuite/releases/latest) más Docker Desktop con WSL 2' },
          { 'Plataforma': 'Linux (x64)', 'Descarga': '[TranscriptionSuite-1.3.10.AppImage](https://github.com/homelab-00/TranscriptionSuite/releases/latest) más Docker o Podman' },
          { 'Plataforma': 'Sitio web', 'Descarga': '[transcriptionsuite.app](https://transcriptionsuite.app/)' },
          { 'Plataforma': 'Política de privacidad', 'Descarga': 'No se encontró una página de política de privacidad independiente; el [README](https://github.com/homelab-00/TranscriptionSuite) describe el procesamiento local' },
          { 'Plataforma': 'Código fuente', 'Descarga': '[github.com/homelab-00/TranscriptionSuite](https://github.com/homelab-00/TranscriptionSuite)' },
        ],
        note: 'Solo la versión de Mac con el servidor integrado se instala descargando y abriendo. En Windows y Linux hay que configurar antes Docker o Podman a nivel de terminal. La app de macOS no está firmada, así que macOS la bloquea hasta que quites el indicador de cuarentena o elijas «Abrir de todos modos»; además hay que instalar FFmpeg. El README menciona una versión para Mac con Intel, pero la versión 1.3.10 solo muestra imágenes de disco para Apple silicon.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'TranscriptionSuite de un vistazo',
        columns: ['Atributo', 'TranscriptionSuite'],
        rows: [
          { 'Atributo': 'Plataforma', 'TranscriptionSuite': 'Windows, macOS, Linux' },
          { 'Atributo': 'Precio', 'TranscriptionSuite': 'Gratis' },
          { 'Atributo': 'Licencia', 'TranscriptionSuite': 'GPL-3.0 o posterior' },
          { 'Atributo': 'Ejecución', 'TranscriptionSuite': 'En local; los modelos se descargan la primera vez' },
          { 'Atributo': 'Idiomas', 'TranscriptionSuite': 'Más de 90 con Whisper; menos con otros modelos' },
          { 'Atributo': 'Transcripción en tiempo real', 'TranscriptionSuite': 'Sí (modo en vivo, solo modelos Whisper)' },
          { 'Atributo': 'Etiquetas de hablante', 'TranscriptionSuite': 'Sí, en grabaciones e importaciones; no en el modo en vivo' },
          { 'Atributo': 'Utilizable solo con CPU', 'TranscriptionSuite': 'Sí; los modelos NeMo no están disponibles' },
          { 'Atributo': 'Servidor de API local', 'TranscriptionSuite': 'Sí, punto de transcripción compatible con OpenAI' },
        ],
        note: 'Los atributos siguen la comparación de voz a texto del directorio de software de LLM locales. Que falte una indicación en el sitio significa «desconocido», no «no compatible».',
      },
      whatIsTranscriptionsuite: {
        id: 'what-is-transcriptionsuite',
        title: 'Qué es TranscriptionSuite',
        content: [
          '**TranscriptionSuite es una app de transcripción, no un bot de reuniones ni un servicio en la nube.** El README describe un panel Electron con un backend en Python que admite modelos Whisper, NVIDIA NeMo, VibeVoice-ASR, SenseVoice, whisper.cpp y MLX, acelerados con CUDA, Apple Metal o Vulkan, o simplemente con la CPU.',
          'El autor lo describe como una herramienta personal que se convirtió en un proyecto de afición, creada por un ingeniero mecánico que no es ingeniero de software; en palabras del README, «this whole thing is vibecoded», aunque no a ciegas. El autor dice que la usa él mismo y que no piensa abandonarla.',
          'Esta reseña se basa en el sitio web, el README y las versiones de GitHub. No incluyó ninguna prueba práctica, así que aquí no se valoran la precisión, la velocidad ni la estabilidad.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeros pasos',
        content: [
          '**La puesta en marcha consiste en instalar el panel y luego iniciar el servidor desde la propia app.** Los pasos siguen el README.',
        ],
        numberedItems: [
          {
            title: 'Prepara tu plataforma',
            whyItMatters: 'En Windows y Linux instala Docker (Docker Desktop con WSL 2, o Docker o Podman en Linux); en Apple silicon instala FFmpeg con Homebrew.',
          },
          {
            title: 'Instala el panel',
            whyItMatters: 'Descarga el archivo para tu sistema desde la [página de versiones](https://github.com/homelab-00/TranscriptionSuite/releases/latest); en Mac, quita una vez el indicador de cuarentena porque la app no está firmada.',
          },
          {
            title: 'Inicia el servidor desde la pestaña Server',
            whyItMatters: 'Elige un entorno (CUDA, Metal, Vulkan o CPU) e inícialo; el primer arranque descarga el modelo elegido, que puede ocupar varios gigabytes.',
          },
          {
            title: 'Graba, dicta o importa un archivo',
            whyItMatters: 'Usa la pestaña Session para grabar o importar audio y activa Speaker Diarization cuando necesites etiquetas de hablante.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**La lista de funciones es amplia para un proyecto de una sola persona.** Todo lo siguiente procede del README y del sitio web.',
        ],
        items: [
          '**Grabación larga.** Graba desde un micrófono o el audio del sistema y obtén la transcripción completa al parar, con una vista previa continua de los últimos 20 segundos.',
          '**Modo en vivo.** Transcripción en tiempo real, frase a frase, para dictar; limitada a modelos de la familia Whisper y sin etiquetas de hablante.',
          '**Diarización de hablantes.** Etiquetas de «quién dijo qué» para modelos Whisper, NeMo, SenseVoice y VibeVoice.',
          '**Importación de archivos.** Suelta audio o vídeo y guarda texto plano o subtítulos `.srt` / `.ass`.',
          '**Cuaderno de audio.** Las grabaciones van a una vista de calendario con búsqueda de texto completo y un asistente de IA que habla con cualquier proveedor compatible con OpenAI.',
          '**Atajos de dictado.** Atajos globales de inicio y parada y pegado en la posición del cursor.',
          '**Integraciones.** Un punto `/v1/audio/transcriptions` compatible con OpenAI para herramientas como Open WebUI y LM Studio, webhooks salientes y acceso remoto mediante Tailscale o una red local.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelos y hardware',
        content: [
          '**Tú eliges el modelo de voz; la app detecta tu hardware y atenúa las opciones incompatibles.** En las plataformas con Docker las opciones son WhisperX (modelos faster-whisper), NVIDIA Parakeet v3 y Canary v2, VibeVoice-ASR, SenseVoice y whisper.cpp; en Apple silicon son las versiones MLX de Whisper, Parakeet, Canary y VibeVoice-ASR.',
          'La cobertura de idiomas depende del modelo: Whisper maneja más de 90 idiomas y puede traducir al inglés, Parakeet y Canary cubren 25 idiomas europeos, VibeVoice 51 y SenseVoice cinco. Los modelos NeMo no funcionan en el entorno de CPU, y VibeVoice-ASR es un modelo de 9 000 millones de parámetros de unos 16 GB.',
          'El desarrollador afirma que media hora de audio se transcribe en menos de un minuto con Whisper en una RTX 3060; esta reseña no reprodujo esa cifra. El README no publica ningún requisito mínimo de RAM ni de VRAM.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad, licencia y coste',
        content: [
          '**El README dice que todo se ejecuta en tu equipo y que el audio y las transcripciones nunca salen de él.** Solo hace falta internet para descargar la app y los pesos de los modelos la primera vez; después funciona sin conexión. Las etiquetas de hablante con Whisper o NeMo usan modelos PyAnnote, que exigen un token gratuito de Hugging Face.',
          'El asistente de IA del cuaderno puede hablar con cualquier proveedor compatible con OpenAI, incluidos servicios en la nube como Groq, OpenAI y OpenRouter; lo que envíes allí queda fuera de la afirmación de «solo local». El README añade que la app busca versiones nuevas cada semana.',
          'El código es GPL-3.0 o posterior y la app es gratuita. No se encontró una página de política de privacidad específica. Esta reseña no inspeccionó el tráfico de red, así que estas afirmaciones son del propio desarrollador.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Ventajas y limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / salvedad'],
        rows: [
          {
            'Ventaja': 'Transcripción local',
            'Qué significa en el uso real': 'El audio se queda en tu máquina.',
            'Limitación / salvedad': 'Las descargas de modelos la primera vez son grandes; no se publican cifras de precisión.',
          },
          {
            'Ventaja': 'Etiquetas de hablante',
            'Qué significa en el uso real': 'Saber quién habla en las reuniones.',
            'Limitación / salvedad': 'No disponibles en el modo en vivo; Sortformer solo maneja cuatro hablantes.',
          },
          {
            'Ventaja': 'Muchas familias de modelos',
            'Qué significa en el uso real': 'Elegir entre velocidad, idioma o precisión.',
            'Limitación / salvedad': 'Cuál encaja con tu hardware lo decides tú.',
          },
          {
            'Ventaja': 'API compatible con OpenAI',
            'Qué significa en el uso real': 'Otras herramientas pueden usarla como backend.',
            'Limitación / salvedad': 'El campo «model» se acepta pero se ignora.',
          },
          {
            'Ventaja': 'Código abierto y gratis',
            'Qué significa en el uso real': 'Código GPL que puedes inspeccionar.',
            'Limitación / salvedad': 'Un solo mantenedor, que se define como «vibe-codeador»; hace falta Docker en Windows y Linux.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'TranscriptionSuite frente a las alternativas',
        content: [
          'Estas son las herramientas de voz a texto más cercanas del directorio: otro transcriptor de reuniones, una app de dictado para Mac y dos motores sobre los que construir.',
        ],
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Función', 'Diferencia clave'],
        rows: [
          {
            'App': 'TranscriptionSuite',
            'Plataformas': 'Windows, macOS, Linux',
            'Precio y licencia': 'Gratis, GPL-3.0',
            'Función': 'App de transcripción con servidor',
            'Diferencia clave': 'Modo en vivo, etiquetas de hablante, cuaderno y API en uno',
          },
          {
            'App': '[Meetily](/es/power-local-llm/meetily-review)',
            'Plataformas': 'macOS, Windows',
            'Precio y licencia': 'Gratis (MIT) y Pro de pago',
            'Función': 'Transcriptor de reuniones',
            'Diferencia clave': 'Pensado para reuniones; solo macOS y Windows',
          },
          {
            'App': '[MacWhisper](/es/power-local-llm/macwhisper-review)',
            'Plataformas': 'macOS',
            'Precio y licencia': 'Freemium, propietario',
            'Función': 'App de transcripción para Mac',
            'Diferencia clave': 'Solo para Mac y de código cerrado',
          },
          {
            'App': '[faster-whisper](/es/power-local-llm/faster-whisper-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Precio y licencia': 'Gratis, MIT',
            'Función': 'Biblioteca de voz en Python',
            'Diferencia clave': 'Un motor para desarrolladores, sin interfaz',
          },
          {
            'App': '[Izwi](/es/power-local-llm/izwi-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Precio y licencia': 'Gratis, MIT',
            'Función': 'Entorno de voz local',
            'Diferencia clave': 'Añade salida de voz y clonación de voz tras una sola API',
          },
        ],
        note: 'Las plataformas, los precios y las funciones de las apps de terceros cambian con frecuencia. Comprueba los datos actuales en la página de cada proyecto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es TranscriptionSuite',
        items: [
          '**Quienes transcriben entrevistas, clases o reuniones.** Las etiquetas de hablante y la exportación de subtítulos apuntan justo a eso.',
          '**Usuarios de Mac con Apple silicon.** La versión integrada es el camino más sencillo y no necesita Docker.',
          '**Quienes dictan en otras apps.** El modo en vivo y el pegado en el cursor lo cubren.',
          '**Aficionados con un servidor en casa.** El acceso remoto y la API permiten que otros dispositivos usen una sola máquina.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quién no es TranscriptionSuite',
        items: [
          '**Quienes quieren un instalador sin preparación en Windows o Linux.** Primero va Docker.',
          '**Quienes tengan un Mac con Intel.** La última versión no incluye ninguna compilación para Intel.',
          '**Equipos que necesitan soporte del fabricante.** Es un proyecto de afición de un solo mantenedor.',
          '**Quienes necesiten cumplimiento documentado.** No se encontró una política de privacidad.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿TranscriptionSuite necesita una GPU?',
            a: 'No. Existe un entorno solo con CPU, pero en él no están disponibles los modelos NeMo y los modelos grandes van lentos; NVIDIA CUDA, Apple Metal y Vulkan de AMD o Intel son aceleradores opcionales.',
          },
          {
            q: '¿Por qué necesita Docker?',
            a: 'El servidor de transcripción se entrega como contenedor en Windows, Linux y Mac con Intel, y el panel lo descarga y gestiona; los Mac con Apple silicon lo ejecutan de forma nativa.',
          },
          {
            q: '¿Pueden otras apps usarlo como backend de transcripción?',
            a: 'Sí. Expone un punto de transcripción compatible con OpenAI al que pueden apuntar herramientas como Open WebUI y LM Studio.',
          },
          {
            q: '¿Necesito una cuenta para las etiquetas de hablante?',
            a: 'Solo por la vía de Whisper y NeMo: PyAnnote exige un token gratuito de Hugging Face. SenseVoice, VibeVoice y Sortformer en Apple silicon no lo necesitan.',
          },
          {
            q: '¿Puedo ejecutarlo en una máquina y usarlo desde otra?',
            a: 'Sí. El README describe el acceso remoto mediante Tailscale o una red local.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'TranscriptionSuite encaja bien con quienes quieren transcripción local y privada con etiquetas de hablante y se manejan con Docker, o con quienes tienen un Mac con Apple silicon, donde la versión integrada elimina ese paso.',
          'Las salvedades son la madurez y la transparencia: un único mantenedor que se define como «vibe-codeador», ninguna política de privacidad, ningún benchmark de precisión salvo la afirmación de velocidad del propio autor y una app de macOS sin firmar. Pruébala primero con grabaciones no sensibles.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de TranscriptionSuite](https://transcriptionsuite.app/) — descripción del producto, funciones y aceleración por hardware.',
          '[README de TranscriptionSuite](https://github.com/homelab-00/TranscriptionSuite/blob/main/docs/README.md) — instalación, matriz de compatibilidad, API, licencia y estado del proyecto.',
          '[TranscriptionSuite en GitHub](https://github.com/homelab-00/TranscriptionSuite) — licencia GPL-3.0 y número de estrellas.',
          '[Versiones de TranscriptionSuite](https://github.com/homelab-00/TranscriptionSuite/releases) — versión 1.3.10 y archivos de instalación.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Herramientas de voz y audio locales comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — texto a voz, voz a texto y agentes de voz, lado a lado.',
          '[Reseña de Whisper.cpp](/es/power-local-llm/whisper-cpp-review) — el motor Whisper en C++ que TranscriptionSuite también puede usar.',
          '[Crear un asistente de voz local](/es/power-local-llm/build-local-voice-assistant-2026) — integrar la voz a texto en un asistente de voz.',
          '[Canalización multimodal local: voz, visión y texto](/es/power-local-llm/local-multimodal-pipeline-voice-vision-text) — combinar modelos locales de voz y visión.',
          '[El directorio completo de software de LLM locales](/es/directory) — un directorio más amplio de herramientas de IA local para todas las plataformas.',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-18',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/transcriptionsuite-review-hero-pt.webp',
    title: 'Análise do TranscriptionSuite: voz para texto local e gratuito com rótulos de falante',
    seoTitle: 'Análise do TranscriptionSuite: voz para texto local',
    intro:
      'O TranscriptionSuite é um aplicativo de desktop gratuito e de código aberto que transforma fala em texto no seu próprio computador, com transcrição ao vivo, rótulos de falante, um caderno de áudio pesquisável e modelos de voz à sua escolha. Esta análise reúne o que o site, o README e as versões do GitHub documentam, o que deixam de fora e como ele se compara a outras ferramentas de transcrição do diretório.',
    metaDescription:
      'Análise do TranscriptionSuite: app gratuito (GPL-3.0) para Windows, macOS e Linux com rótulos de falante, modo ao vivo e API. Sem teste prático.',
    twitterDescription:
      'Análise do TranscriptionSuite: um app de voz para texto local, gratuito e de código aberto, com rótulos de falante, modo ao vivo e caderno de áudio. Instalação, modelos, privacidade, limites e alternativas.',
    audience:
      'Pessoas que querem transcrições precisas e privadas de reuniões, aulas e ditados — cobre instalação, modelos, hardware, privacidade, limites e alternativas.',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'TranscriptionSuite review',
    targetKeywords: [
      'análise transcriptionsuite',
      'transcriptionsuite',
      'app de voz para texto local',
      'transcrição offline diarização de falantes',
      'whisper parakeet app de desktop',
      'servidor de transcrição compatível com openai',
      'caderno de áudio ia local',
    ],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Apple silicon', 'AMD Vulkan', 'Intel Vulkan', 'CPU'],
    leadAnswerBlock:
      '**O TranscriptionSuite é um app gratuito de voz para texto, com licença GPL-3.0, que executa modelos de voz no seu próprio computador e acrescenta transcrição ao vivo, rótulos de falante, um caderno de áudio com calendário e uma API compatível com OpenAI.** Segundo o README, o áudio e as transcrições nunca saem da sua máquina. Esta análise cobre a versão 1.3.10 e se baseia no site público, no README e nas versões do GitHub, não em um teste prático.',
    quickAnswerTop: {
      pt: {
        question: 'Vale a pena testar o TranscriptionSuite para transcrição local e privada?',
        answer:
          'Provavelmente, se você transcreve reuniões, aulas ou entrevistas e quer rótulos de falante sem um serviço na nuvem. Antes, confira duas coisas: no Windows e no Linux o servidor precisa do Docker, e o autor descreve o projeto como um projeto de hobby «vibe-codado» por uma só pessoa.',
        bullets: [
          'Instaladores do painel para Windows, Linux e macOS; Macs com Apple silicon têm um build integrado sem Docker.',
          'Gravação longa, um modo ao vivo em tempo real e importação de arquivos com exportação de texto ou legendas.',
          'Rótulos de falante, mais de 90 idiomas com Whisper e várias famílias de modelos.',
          'Um caderno de áudio pesquisável, atalhos de ditado globais e uma API compatível com OpenAI.',
          'Gratuito e de código aberto; os pesos dos modelos são baixados no primeiro uso e depois funciona offline.',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Obter o TranscriptionSuite', anchor: 'get-it' },
      { label: 'TranscriptionSuite em resumo', anchor: 'at-a-glance' },
      { label: 'O que é o TranscriptionSuite', anchor: 'what-is-transcriptionsuite' },
      { label: 'Primeiros passos', anchor: 'how-to-get-started' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Modelos e hardware', anchor: 'models-hardware' },
      { label: 'Privacidade, licença e custo', anchor: 'privacy' },
      { label: 'Vantagens e limitações', anchor: 'tradeoffs' },
      { label: 'TranscriptionSuite e as alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem o TranscriptionSuite serve', anchor: 'who-should-use' },
      { label: 'Para quem o TranscriptionSuite não serve', anchor: 'who-should-not-use' },
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
            text: 'O TranscriptionSuite é um aplicativo de desktop de código aberto que transcreve áudio com modelos de voz que rodam no seu próprio computador e indica quem disse o quê.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como um estúdio de transcrição privado: você grava uma aula, dita em qualquer app ou importa um arquivo de áudio e recebe uma transcrição com rótulos de falante, sem enviar a gravação para um serviço na nuvem.',
          },
        ],
        items: [
          'Versão analisada: 1.3.10, lançada em 24 de setembro de 2026; o repositório foi atualizado pela última vez em 4 de outubro de 2026, então o aviso de projeto parado não se aplica.',
          'Licença e preço: GPL-3.0 ou posterior segundo o README; gratuito, sem conta.',
          'Plataformas: Windows 11 e Linux (x64) e macOS; o servidor roda no Docker, exceto em Macs com Apple silicon.',
          'Destaques: modo ao vivo, rótulos de falante, caderno de áudio, API compatível com OpenAI, webhooks.',
          'Maturidade: cerca de 775 estrelas no GitHub e um único mantenedor que chama o projeto de «vibe-codado».',
        ],
      },
      getItTranscriptionsuite: {
        id: 'get-it',
        title: 'Obter o TranscriptionSuite',
        content: [
          '**O TranscriptionSuite tem duas partes: um painel que você instala e um servidor que o app baixa e gerencia para você.** Os arquivos estão anexados à [última versão no GitHub](https://github.com/homelab-00/TranscriptionSuite/releases/latest); as linhas abaixo vão do caminho mais fácil ao mais trabalhoso.',
        ],
        columns: ['Plataforma', 'Download'],
        rows: [
          { 'Plataforma': 'macOS, Apple silicon (servidor incluído)', 'Download': '[TranscriptionSuite-1.3.10-arm64-mac-metal.dmg](https://github.com/homelab-00/TranscriptionSuite/releases/latest) (cerca de 3-5 GB, sem Docker)' },
          { 'Plataforma': 'macOS, Apple silicon (só o painel)', 'Download': '[TranscriptionSuite-1.3.10-arm64-mac.dmg](https://github.com/homelab-00/TranscriptionSuite/releases/latest) (cerca de 200 MB; o servidor roda em outro lugar)' },
          { 'Plataforma': 'Windows (x64)', 'Download': '[TranscriptionSuite.Setup.1.3.10.exe](https://github.com/homelab-00/TranscriptionSuite/releases/latest) mais Docker Desktop com WSL 2' },
          { 'Plataforma': 'Linux (x64)', 'Download': '[TranscriptionSuite-1.3.10.AppImage](https://github.com/homelab-00/TranscriptionSuite/releases/latest) mais Docker ou Podman' },
          { 'Plataforma': 'Site', 'Download': '[transcriptionsuite.app](https://transcriptionsuite.app/)' },
          { 'Plataforma': 'Política de privacidade', 'Download': 'Não foi encontrada uma página de política de privacidade separada; o [README](https://github.com/homelab-00/TranscriptionSuite) descreve o processamento local' },
          { 'Plataforma': 'Código-fonte', 'Download': '[github.com/homelab-00/TranscriptionSuite](https://github.com/homelab-00/TranscriptionSuite)' },
        ],
        note: 'Só a versão para Mac com o servidor integrado se instala apenas baixando e abrindo. No Windows e no Linux é preciso configurar antes o Docker ou o Podman no nível do terminal. O app para macOS não é assinado, então o macOS o bloqueia até você remover o sinalizador de quarentena ou escolher «Abrir mesmo assim»; também é preciso instalar o FFmpeg. O README cita um build para Mac com Intel, mas a versão 1.3.10 mostra apenas imagens de disco para Apple silicon.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'TranscriptionSuite em resumo',
        columns: ['Atributo', 'TranscriptionSuite'],
        rows: [
          { 'Atributo': 'Plataforma', 'TranscriptionSuite': 'Windows, macOS, Linux' },
          { 'Atributo': 'Preço', 'TranscriptionSuite': 'Grátis' },
          { 'Atributo': 'Licença', 'TranscriptionSuite': 'GPL-3.0 ou posterior' },
          { 'Atributo': 'Execução', 'TranscriptionSuite': 'Local; modelos baixados no primeiro uso' },
          { 'Atributo': 'Idiomas', 'TranscriptionSuite': 'Mais de 90 com Whisper; menos com outros modelos' },
          { 'Atributo': 'Transcrição em tempo real', 'TranscriptionSuite': 'Sim (modo ao vivo, só modelos Whisper)' },
          { 'Atributo': 'Rótulos de falante', 'TranscriptionSuite': 'Sim, em gravações e importações; não no modo ao vivo' },
          { 'Atributo': 'Utilizável só com CPU', 'TranscriptionSuite': 'Sim; os modelos NeMo não estão disponíveis' },
          { 'Atributo': 'Servidor de API local', 'TranscriptionSuite': 'Sim, endpoint de transcrição compatível com OpenAI' },
        ],
        note: 'Os atributos seguem a comparação de voz para texto usada no diretório de software de LLM local. Uma informação ausente no site significa «desconhecido», não «sem suporte».',
      },
      whatIsTranscriptionsuite: {
        id: 'what-is-transcriptionsuite',
        title: 'O que é o TranscriptionSuite',
        content: [
          '**O TranscriptionSuite é um app de transcrição, não um bot de reuniões nem um serviço na nuvem.** O README descreve um painel em Electron com backend em Python que suporta modelos Whisper, NVIDIA NeMo, VibeVoice-ASR, SenseVoice, whisper.cpp e MLX, acelerados por CUDA, Apple Metal ou Vulkan, ou só pela CPU.',
          'O autor o descreve como uma ferramenta pessoal que virou um projeto de hobby, feito por um engenheiro mecânico que não é engenheiro de software; nas palavras do README, «this whole thing is vibecoded», embora não às cegas. O autor diz que usa o app e não pretende abandoná-lo.',
          'Esta análise se baseia no site, no README e nas versões do GitHub. Não houve teste prático, então precisão, velocidade e estabilidade não são avaliadas aqui.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeiros passos',
        content: [
          '**A configuração é instalar o painel e depois iniciar o servidor dentro do app.** Os passos seguem o README.',
        ],
        numberedItems: [
          {
            title: 'Prepare sua plataforma',
            whyItMatters: 'No Windows e no Linux instale o Docker (Docker Desktop com WSL 2, ou Docker ou Podman no Linux); em Apple silicon instale o FFmpeg com o Homebrew.',
          },
          {
            title: 'Instale o painel',
            whyItMatters: 'Baixe o arquivo do seu sistema na [página de versões](https://github.com/homelab-00/TranscriptionSuite/releases/latest); no Mac, remova uma vez o sinalizador de quarentena, porque o app não é assinado.',
          },
          {
            title: 'Inicie o servidor na aba Server',
            whyItMatters: 'Escolha um ambiente de execução (CUDA, Metal, Vulkan ou CPU) e inicie; a primeira inicialização baixa o modelo escolhido, que pode ter vários gigabytes.',
          },
          {
            title: 'Grave, dite ou importe um arquivo',
            whyItMatters: 'Use a aba Session para gravar ou importar áudio e ative Speaker Diarization quando precisar de rótulos de falante.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**A lista de recursos é ampla para um projeto de uma pessoa só.** Tudo a seguir vem do README e do site.',
        ],
        items: [
          '**Gravação longa.** Grave pelo microfone ou pelo áudio do sistema e receba a transcrição completa ao parar, com uma prévia contínua dos últimos 20 segundos.',
          '**Modo ao vivo.** Transcrição em tempo real, frase a frase, para ditado; limitada a modelos da família Whisper e sem rótulos de falante.',
          '**Diarização de falantes.** Rótulos de «quem disse o quê» para modelos Whisper, NeMo, SenseVoice e VibeVoice.',
          '**Importação de arquivos.** Solte áudio ou vídeo e salve texto simples ou legendas `.srt` / `.ass`.',
          '**Caderno de áudio.** As gravações vão para uma visão de calendário com busca em texto completo e um assistente de IA que conversa com qualquer provedor compatível com OpenAI.',
          '**Atalhos de ditado.** Atalhos globais de início e parada e colagem na posição do cursor.',
          '**Integrações.** Um endpoint `/v1/audio/transcriptions` compatível com OpenAI para ferramentas como Open WebUI e LM Studio, webhooks de saída e acesso remoto por Tailscale ou rede local.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelos e hardware',
        content: [
          '**Você escolhe o modelo de voz; o app detecta o seu hardware e deixa em cinza as opções incompatíveis.** Nas plataformas com Docker as opções são WhisperX (modelos faster-whisper), NVIDIA Parakeet v3 e Canary v2, VibeVoice-ASR, SenseVoice e whisper.cpp; em Apple silicon são as versões MLX de Whisper, Parakeet, Canary e VibeVoice-ASR.',
          'A cobertura de idiomas depende do modelo: o Whisper lida com mais de 90 idiomas e pode traduzir para o inglês, Parakeet e Canary cobrem 25 idiomas europeus, o VibeVoice 51 e o SenseVoice cinco. Os modelos NeMo não rodam no ambiente de CPU, e o VibeVoice-ASR é um modelo de 9 bilhões de parâmetros de cerca de 16 GB.',
          'O desenvolvedor afirma que meia hora de áudio é transcrita em menos de um minuto com o Whisper em uma RTX 3060; esta análise não reproduziu esse número. O README não publica requisito mínimo de RAM nem de VRAM.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade, licença e custo',
        content: [
          '**O README diz que tudo roda no seu computador e que o áudio e as transcrições nunca saem dele.** A internet só é necessária para baixar o app e os pesos dos modelos no primeiro uso; depois disso funciona offline. Os rótulos de falante com Whisper ou NeMo usam modelos PyAnnote, que exigem um token gratuito do Hugging Face.',
          'O assistente de IA do caderno pode conversar com qualquer provedor compatível com OpenAI, inclusive serviços na nuvem como Groq, OpenAI e OpenRouter; o que você enviar para lá fica fora da afirmação de «somente local». O README também diz que o app verifica novas versões toda semana.',
          'O código é GPL-3.0 ou posterior e o app é gratuito. Não foi encontrada uma página de política de privacidade específica. Esta análise não inspecionou o tráfego de rede, então essas afirmações são do próprio desenvolvedor.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Vantagens e limitações',
        columns: ['Vantagem', 'O que significa no uso real', 'Limitação / ressalva'],
        rows: [
          {
            'Vantagem': 'Transcrição local',
            'O que significa no uso real': 'O áudio fica na sua máquina.',
            'Limitação / ressalva': 'Os downloads de modelos no primeiro uso são grandes; não há números de precisão publicados.',
          },
          {
            'Vantagem': 'Rótulos de falante',
            'O que significa no uso real': 'Saber quem fala nas reuniões.',
            'Limitação / ressalva': 'Indisponíveis no modo ao vivo; o Sortformer lida com apenas quatro falantes.',
          },
          {
            'Vantagem': 'Muitas famílias de modelos',
            'O que significa no uso real': 'Escolher entre velocidade, idioma ou precisão.',
            'Limitação / ressalva': 'Qual combina com o seu hardware é decisão sua.',
          },
          {
            'Vantagem': 'API compatível com OpenAI',
            'O que significa no uso real': 'Outras ferramentas podem usá-lo como backend.',
            'Limitação / ressalva': 'O campo «model» é aceito, mas ignorado.',
          },
          {
            'Vantagem': 'Código aberto e gratuito',
            'O que significa no uso real': 'Código GPL que você pode inspecionar.',
            'Limitação / ressalva': 'Um único mantenedor, que se diz «vibe-codador»; Docker necessário no Windows e no Linux.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'TranscriptionSuite e as alternativas',
        content: [
          'Estas são as ferramentas de voz para texto mais próximas do diretório: outro transcritor de reuniões, um app de ditado para Mac e dois motores para construir por cima.',
        ],
        columns: ['App', 'Plataformas', 'Preço e licença', 'Papel', 'Diferença principal'],
        rows: [
          {
            'App': 'TranscriptionSuite',
            'Plataformas': 'Windows, macOS, Linux',
            'Preço e licença': 'Grátis, GPL-3.0',
            'Papel': 'App de transcrição com servidor',
            'Diferença principal': 'Modo ao vivo, rótulos de falante, caderno e API em um só',
          },
          {
            'App': '[Meetily](/pt/power-local-llm/meetily-review)',
            'Plataformas': 'macOS, Windows',
            'Preço e licença': 'Grátis (MIT) e Pro pago',
            'Papel': 'Transcritor de reuniões',
            'Diferença principal': 'Feito para reuniões; só macOS e Windows',
          },
          {
            'App': '[MacWhisper](/pt/power-local-llm/macwhisper-review)',
            'Plataformas': 'macOS',
            'Preço e licença': 'Freemium, proprietário',
            'Papel': 'App de transcrição para Mac',
            'Diferença principal': 'Só para Mac e de código fechado',
          },
          {
            'App': '[faster-whisper](/pt/power-local-llm/faster-whisper-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Preço e licença': 'Grátis, MIT',
            'Papel': 'Biblioteca de voz em Python',
            'Diferença principal': 'Um motor para desenvolvedores, sem interface',
          },
          {
            'App': '[Izwi](/pt/power-local-llm/izwi-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Preço e licença': 'Grátis, MIT',
            'Papel': 'Runtime de voz local',
            'Diferença principal': 'Acrescenta saída de voz e clonagem de voz atrás de uma única API',
          },
        ],
        note: 'Plataformas, preços e recursos de apps de terceiros mudam com frequência. Confira os dados atuais na página de cada projeto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o TranscriptionSuite serve',
        items: [
          '**Quem transcreve entrevistas, aulas ou reuniões.** Os rótulos de falante e a exportação de legendas miram exatamente nisso.',
          '**Usuários de Mac com Apple silicon.** O build integrado é o caminho mais simples e dispensa o Docker.',
          '**Quem dita em outros apps.** O modo ao vivo e a colagem no cursor resolvem.',
          '**Entusiastas com um servidor em casa.** O acesso remoto e a API deixam outros dispositivos usarem uma só máquina.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o TranscriptionSuite não serve',
        items: [
          '**Quem quer um instalador sem preparação no Windows ou no Linux.** O Docker vem primeiro.',
          '**Donos de Mac com Intel.** A última versão não lista nenhum build para Intel.',
          '**Equipes que precisam de suporte do fornecedor.** É um projeto de hobby de um único mantenedor.',
          '**Quem precisa de conformidade documentada.** Não foi encontrada uma política de privacidade.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O TranscriptionSuite precisa de GPU?',
            a: 'Não. Existe um ambiente só com CPU, mas nele os modelos NeMo não estão disponíveis e os modelos grandes ficam lentos; NVIDIA CUDA, Apple Metal e Vulkan da AMD ou Intel são aceleradores opcionais.',
          },
          {
            q: 'Por que ele precisa do Docker?',
            a: 'O servidor de transcrição é entregue como contêiner no Windows, no Linux e em Macs com Intel, e o painel o baixa e gerencia; Macs com Apple silicon o executam de forma nativa.',
          },
          {
            q: 'Outros apps podem usá-lo como backend de transcrição?',
            a: 'Sim. Ele expõe um endpoint de transcrição compatível com OpenAI, para o qual ferramentas como Open WebUI e LM Studio podem apontar.',
          },
          {
            q: 'Preciso de uma conta para os rótulos de falante?',
            a: 'Só pelo caminho do Whisper e do NeMo: o PyAnnote exige um token gratuito do Hugging Face. SenseVoice, VibeVoice e Sortformer em Apple silicon não exigem.',
          },
          {
            q: 'Posso rodá-lo em uma máquina e usá-lo de outra?',
            a: 'Sim. O README descreve o acesso remoto por Tailscale ou rede local.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O TranscriptionSuite combina com quem quer transcrição local e privada com rótulos de falante e se vira com o Docker, ou com quem tem um Mac com Apple silicon, em que o build integrado elimina essa etapa.',
          'As ressalvas são maturidade e transparência: um único mantenedor que se diz «vibe-codador», nenhuma política de privacidade, nenhum benchmark de precisão além da afirmação de velocidade do próprio autor e um app para macOS sem assinatura. Teste primeiro com gravações não sensíveis.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do TranscriptionSuite](https://transcriptionsuite.app/) — descrição do produto, recursos e aceleração por hardware.',
          '[README do TranscriptionSuite](https://github.com/homelab-00/TranscriptionSuite/blob/main/docs/README.md) — instalação, matriz de compatibilidade, API, licença e estado do projeto.',
          '[TranscriptionSuite no GitHub](https://github.com/homelab-00/TranscriptionSuite) — licença GPL-3.0 e número de estrelas.',
          '[Versões do TranscriptionSuite](https://github.com/homelab-00/TranscriptionSuite/releases) — versão 1.3.10 e arquivos de instalação.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Ferramentas locais de voz e áudio comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — texto para voz, voz para texto e agentes de voz lado a lado.',
          '[Análise do Whisper.cpp](/pt/power-local-llm/whisper-cpp-review) — o motor Whisper em C++ que o TranscriptionSuite também pode usar.',
          '[Criar um assistente de voz local](/pt/power-local-llm/build-local-voice-assistant-2026) — integrar voz para texto em um assistente de voz.',
          '[Pipeline multimodal local: voz, visão e texto](/pt/power-local-llm/local-multimodal-pipeline-voice-vision-text) — combinar modelos locais de voz e visão.',
          '[O diretório completo de software de LLM local](/pt/directory) — um diretório mais amplo de ferramentas de IA local para todas as plataformas.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-18',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/transcriptionsuite-review-hero-ar.webp',
    title: 'مراجعة TranscriptionSuite: تحويل الكلام إلى نص محليًا ومجانًا مع تمييز المتحدثين',
    seoTitle: 'مراجعة TranscriptionSuite: كلام إلى نص محلي ومجاني',
    intro:
      'TranscriptionSuite تطبيق مكتبي مجاني ومفتوح المصدر يحوّل الكلام إلى نص على حاسوبك أنت، مع نسخ مباشر وتمييز للمتحدثين ودفتر صوتي قابل للبحث وخيار بين عدة نماذج صوتية. تلخّص هذه المراجعة ما يوثّقه موقعه وملف README وإصدارات GitHub، وما تتركه دون ذكر، وكيف يقارن بأدوات النسخ الأخرى في الدليل.',
    metaDescription:
      'مراجعة TranscriptionSuite: تطبيق مجاني بترخيص GPL-3.0 لأنظمة Windows وmacOS وLinux مع تمييز المتحدثين ووضع مباشر وAPI متوافق. دون اختبار عملي.',
    twitterDescription:
      'مراجعة TranscriptionSuite: تطبيق مجاني ومفتوح المصدر لتحويل الكلام إلى نص محليًا مع تمييز المتحدثين ووضع مباشر ودفتر صوتي. التثبيت والنماذج والخصوصية والقيود والبدائل.',
    audience:
      'لمن يريدون نسخًا دقيقًا وخاصًا للاجتماعات والمحاضرات والإملاء — يغطي التثبيت والنماذج والعتاد والخصوصية والقيود والبدائل.',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'TranscriptionSuite review',
    targetKeywords: [
      'مراجعة transcriptionsuite',
      'transcriptionsuite',
      'تطبيق تحويل الكلام إلى نص محليًا',
      'نسخ دون اتصال تمييز المتحدثين',
      'whisper parakeet تطبيق مكتبي',
      'خادم نسخ متوافق مع openai',
      'دفتر صوتي ذكاء اصطناعي محلي',
    ],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Apple silicon', 'AMD Vulkan', 'Intel Vulkan', 'CPU'],
    leadAnswerBlock:
      '**TranscriptionSuite تطبيق مجاني بترخيص GPL-3.0 لتحويل الكلام إلى نص، يشغّل نماذج صوتية على حاسوبك أنت ويضيف نسخًا مباشرًا وتمييزًا للمتحدثين ودفترًا صوتيًا بتقويم وAPI متوافقًا مع OpenAI.** يقول ملف README إن الصوت والنصوص لا تغادر جهازك أبدًا. تغطي هذه المراجعة الإصدار 1.3.10، وتستند إلى الموقع العام وREADME وإصدارات GitHub، لا إلى اختبار عملي.',
    quickAnswerTop: {
      ar: {
        question: 'هل يستحق TranscriptionSuite التجربة للنسخ المحلي الخاص؟',
        answer:
          'غالبًا نعم، إن كنت تنسخ اجتماعات أو محاضرات أو مقابلات وتريد تمييز المتحدثين دون خدمة سحابية. تحقق أولًا من أمرين: يحتاج الخادم إلى Docker على Windows وLinux، ويصف المؤلف المشروع بأنه مشروع هواية كتبه شخص واحد بأسلوب «vibe coding».',
        bullets: [
          'مثبّتات للوحة التحكم على Windows وLinux وmacOS؛ وتحصل أجهزة Mac بمعالج Apple silicon على نسخة مدمجة دون Docker.',
          'تسجيل طويل ووضع مباشر في الوقت الحقيقي واستيراد ملفات مع تصدير نصي أو ترجمات.',
          'تمييز المتحدثين، وأكثر من 90 لغة مع Whisper، وعدة عائلات نماذج.',
          'دفتر صوتي قابل للبحث واختصارات إملاء عامة وAPI متوافق مع OpenAI.',
          'مجاني ومفتوح المصدر؛ تُنزَّل أوزان النماذج عند أول استخدام ثم يعمل دون اتصال.',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'الحصول على TranscriptionSuite', anchor: 'get-it' },
      { label: 'TranscriptionSuite في لمحة', anchor: 'at-a-glance' },
      { label: 'ما هو TranscriptionSuite', anchor: 'what-is-transcriptionsuite' },
      { label: 'كيف تبدأ', anchor: 'how-to-get-started' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'النماذج والعتاد', anchor: 'models-hardware' },
      { label: 'الخصوصية والترخيص والتكلفة', anchor: 'privacy' },
      { label: 'المزايا والقيود', anchor: 'tradeoffs' },
      { label: 'TranscriptionSuite مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'لمن يناسب TranscriptionSuite', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب TranscriptionSuite', anchor: 'who-should-not-use' },
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
            text: 'TranscriptionSuite تطبيق مكتبي مفتوح المصدر ينسخ الصوت بنماذج صوتية تعمل على حاسوبك أنت ويبيّن من قال ماذا.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله استوديو نسخ خاصًا: سجّل محاضرة، أو أملِ في أي تطبيق، أو استورد ملفًا صوتيًا، فتحصل على نص مع تمييز المتحدثين دون إرسال التسجيل إلى خدمة سحابية.',
          },
        ],
        items: [
          'الإصدار الذي راجعناه: 1.3.10، صدر في 24 سبتمبر 2026؛ وآخر تحديث للمستودع في 4 أكتوبر 2026، لذا لا ينطبق تحذير المشروع الهادئ.',
          'الترخيص والسعر: GPL-3.0 أو أحدث بحسب README؛ مجاني ودون حساب.',
          'المنصات: Windows 11 وLinux (x64) وmacOS؛ ويعمل الخادم في Docker إلا على أجهزة Mac بمعالج Apple silicon.',
          'أبرز الميزات: الوضع المباشر وتمييز المتحدثين والدفتر الصوتي وAPI متوافق مع OpenAI وWebhooks.',
          'النضج: نحو 775 نجمة على GitHub ومشرف واحد يصف المشروع بأنه مكتوب بأسلوب «vibe coding».',
        ],
      },
      getItTranscriptionsuite: {
        id: 'get-it',
        title: 'الحصول على TranscriptionSuite',
        content: [
          '**يتكوّن TranscriptionSuite من جزأين: لوحة تحكم تثبّتها، وخادم ينزّله التطبيق ويديره لك.** الملفات مرفقة في [أحدث إصدار على GitHub](https://github.com/homelab-00/TranscriptionSuite/releases/latest)، وتسير الصفوف أدناه من الأسهل إلى الأكثر تعقيدًا.',
        ],
        columns: ['المنصة', 'التنزيل'],
        rows: [
          { 'المنصة': 'macOS، Apple silicon (الخادم مضمَّن)', 'التنزيل': '[TranscriptionSuite-1.3.10-arm64-mac-metal.dmg](https://github.com/homelab-00/TranscriptionSuite/releases/latest) (نحو 3-5 GB، دون Docker)' },
          { 'المنصة': 'macOS، Apple silicon (لوحة التحكم فقط)', 'التنزيل': '[TranscriptionSuite-1.3.10-arm64-mac.dmg](https://github.com/homelab-00/TranscriptionSuite/releases/latest) (نحو 200 MB؛ ويعمل الخادم في مكان آخر)' },
          { 'المنصة': 'Windows (x64)', 'التنزيل': '[TranscriptionSuite.Setup.1.3.10.exe](https://github.com/homelab-00/TranscriptionSuite/releases/latest) مع Docker Desktop وWSL 2' },
          { 'المنصة': 'Linux (x64)', 'التنزيل': '[TranscriptionSuite-1.3.10.AppImage](https://github.com/homelab-00/TranscriptionSuite/releases/latest) مع Docker أو Podman' },
          { 'المنصة': 'الموقع الرسمي', 'التنزيل': '[transcriptionsuite.app](https://transcriptionsuite.app/)' },
          { 'المنصة': 'سياسة الخصوصية', 'التنزيل': 'لم نجد صفحة مستقلة لسياسة الخصوصية؛ يصف [README](https://github.com/homelab-00/TranscriptionSuite) المعالجة المحلية' },
          { 'المنصة': 'الشيفرة المصدرية', 'التنزيل': '[github.com/homelab-00/TranscriptionSuite](https://github.com/homelab-00/TranscriptionSuite)' },
        ],
        note: 'نسخة Mac ذات الخادم المضمَّن وحدها تُثبَّت بالتنزيل والفتح. على Windows وLinux يلزم أولًا إعداد Docker أو Podman على مستوى الطرفية. تطبيق macOS غير موقَّع، لذا يحظره macOS إلى أن تزيل علامة الحجر أو تختار «فتح على أي حال»؛ كما يجب تثبيت FFmpeg. يذكر README نسخة لأجهزة Mac بمعالج Intel، لكن الإصدار 1.3.10 يعرض صور أقراص لـ Apple silicon فقط.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'TranscriptionSuite في لمحة',
        columns: ['الخاصية', 'TranscriptionSuite'],
        rows: [
          { 'الخاصية': 'المنصة', 'TranscriptionSuite': 'Windows وmacOS وLinux' },
          { 'الخاصية': 'السعر', 'TranscriptionSuite': 'مجاني' },
          { 'الخاصية': 'الترخيص', 'TranscriptionSuite': 'GPL-3.0 أو أحدث' },
          { 'الخاصية': 'مكان التشغيل', 'TranscriptionSuite': 'محليًا؛ تُنزَّل النماذج عند أول استخدام' },
          { 'الخاصية': 'اللغات', 'TranscriptionSuite': 'أكثر من 90 مع Whisper؛ وأقل مع النماذج الأخرى' },
          { 'الخاصية': 'النسخ في الوقت الحقيقي', 'TranscriptionSuite': 'نعم (الوضع المباشر، نماذج Whisper فقط)' },
          { 'الخاصية': 'تمييز المتحدثين', 'TranscriptionSuite': 'نعم في التسجيلات والاستيراد؛ لا في الوضع المباشر' },
          { 'الخاصية': 'يعمل على CPU فقط', 'TranscriptionSuite': 'نعم؛ نماذج NeMo غير متاحة' },
          { 'الخاصية': 'خادم API محلي', 'TranscriptionSuite': 'نعم، نقطة نسخ متوافقة مع OpenAI' },
        ],
        note: 'تتبع الخصائص مقارنة تحويل الكلام إلى نص المستخدمة في دليل برمجيات LLM المحلية. غياب الذكر في الموقع يعني «غير معروف» لا «غير مدعوم».',
      },
      whatIsTranscriptionsuite: {
        id: 'what-is-transcriptionsuite',
        title: 'ما هو TranscriptionSuite',
        content: [
          '**TranscriptionSuite تطبيق نسخ، وليس روبوت اجتماعات ولا خدمة سحابية.** يصف README لوحة تحكم بـ Electron مع خلفية بلغة Python تدعم نماذج Whisper وNVIDIA NeMo وVibeVoice-ASR وSenseVoice وwhisper.cpp وMLX، وتُسرَّع بـ CUDA أو Apple Metal أو Vulkan، أو تعمل على CPU وحده.',
          'يصفه المؤلف بأنه أداة شخصية تحولت إلى مشروع هواية، كتبها مهندس ميكانيكي ليس مهندس برمجيات؛ وبكلمات README نفسه: «this whole thing is vibecoded»، وإن لم يكن ذلك عشوائيًا. ويقول المؤلف إنه يستخدمه بنفسه ولا ينوي التخلي عنه.',
          'تستند هذه المراجعة إلى الموقع وREADME وإصدارات GitHub. لم يكن هناك اختبار عملي، لذا لا تُقيَّم هنا الدقة ولا السرعة ولا الاستقرار.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'كيف تبدأ',
        content: [
          '**الإعداد هو تثبيت لوحة التحكم ثم تشغيل الخادم من داخل التطبيق.** تتبع الخطوات ملف README.',
        ],
        numberedItems: [
          {
            title: 'جهّز منصتك',
            whyItMatters: 'على Windows وLinux ثبّت Docker (Docker Desktop مع WSL 2، أو Docker أو Podman على Linux)؛ وعلى Apple silicon ثبّت FFmpeg عبر Homebrew بدلًا من ذلك.',
          },
          {
            title: 'ثبّت لوحة التحكم',
            whyItMatters: 'نزّل الملف المناسب لنظامك من [صفحة الإصدارات](https://github.com/homelab-00/TranscriptionSuite/releases/latest)؛ وعلى Mac أزل علامة الحجر مرة واحدة لأن التطبيق غير موقَّع.',
          },
          {
            title: 'شغّل الخادم من تبويب Server',
            whyItMatters: 'اختر بيئة التشغيل (CUDA أو Metal أو Vulkan أو CPU) وشغّلها؛ ينزّل أول تشغيل النموذج الذي اخترته، وقد يبلغ عدة غيغابايت.',
          },
          {
            title: 'سجّل أو أملِ أو استورد ملفًا',
            whyItMatters: 'استخدم تبويب Session للتسجيل أو استيراد الصوت، وفعّل Speaker Diarization عندما تحتاج إلى تمييز المتحدثين.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**قائمة الميزات واسعة بالنسبة لمشروع يقف خلفه شخص واحد.** كل ما يلي مصدره README والموقع.',
        ],
        items: [
          '**التسجيل الطويل.** سجّل من الميكروفون أو من صوت النظام واحصل على النص الكامل بعد التوقف، مع معاينة متجددة لآخر 20 ثانية.',
          '**الوضع المباشر.** نسخ فوري جملة بجملة للإملاء، مقصور على نماذج عائلة Whisper وبلا تمييز للمتحدثين.',
          '**فصل المتحدثين.** تمييز «من قال ماذا» لنماذج Whisper وNeMo وSenseVoice وVibeVoice.',
          '**استيراد الملفات.** أسقط ملفات صوت أو فيديو واحفظ نصًا عاديًا أو ترجمات `.srt` / `.ass`.',
          '**الدفتر الصوتي.** تصل التسجيلات إلى عرض تقويم مع بحث في النص الكامل ومساعد ذكاء اصطناعي يتحدث مع أي مزوّد متوافق مع OpenAI.',
          '**اختصارات الإملاء.** اختصارات بدء وإيقاف على مستوى النظام ولصق عند المؤشر.',
          '**التكاملات.** نقطة `/v1/audio/transcriptions` متوافقة مع OpenAI لأدوات مثل Open WebUI وLM Studio، وWebhooks صادرة، ووصول عن بُعد عبر Tailscale أو الشبكة المحلية.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'النماذج والعتاد',
        content: [
          '**أنت تختار النموذج الصوتي، ويكتشف التطبيق عتادك ويُظهر الخيارات غير المتوافقة باهتة.** على منصات Docker الخيارات هي WhisperX (نماذج faster-whisper) وNVIDIA Parakeet v3 وCanary v2 وVibeVoice-ASR وSenseVoice وwhisper.cpp؛ وعلى Apple silicon هي نسخ MLX من Whisper وParakeet وCanary وVibeVoice-ASR.',
          'تتوقف تغطية اللغات على النموذج: يتعامل Whisper مع أكثر من 90 لغة ويترجم إلى الإنجليزية، ويغطي Parakeet وCanary 25 لغة أوروبية، وVibeVoice 51 لغة، وSenseVoice خمس لغات. ولا تعمل نماذج NeMo على بيئة CPU، وVibeVoice-ASR نموذج من 9 مليارات معامل بحجم نحو 16 GB.',
          'يزعم المطوّر أن نصف ساعة من الصوت تُنسخ في أقل من دقيقة باستخدام Whisper على RTX 3060؛ ولم تعِد هذه المراجعة إنتاج هذا الرقم. ولا ينشر README حدًّا أدنى لـ RAM أو VRAM.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والترخيص والتكلفة',
        content: [
          '**يقول README إن كل شيء يعمل على حاسوبك وإن الصوت والنصوص لا تغادره أبدًا.** الإنترنت لازم فقط لتنزيل التطبيق وأوزان النماذج عند أول استخدام؛ وبعد ذلك يعمل دون اتصال. ويستخدم تمييز المتحدثين مع Whisper أو NeMo نماذج PyAnnote التي تتطلب رمز Hugging Face مجانيًا.',
          'يستطيع مساعد الذكاء الاصطناعي في الدفتر التحدث مع أي مزوّد متوافق مع OpenAI، بما في ذلك خدمات سحابية مثل Groq وOpenAI وOpenRouter؛ وما ترسله إليها يخرج عن ادعاء «محلي فقط». ويذكر README أيضًا أن التطبيق يتحقق من الإصدارات الجديدة أسبوعيًا.',
          'الشيفرة بترخيص GPL-3.0 أو أحدث والتطبيق مجاني. لم نجد صفحة مخصصة لسياسة الخصوصية. لم تفحص هذه المراجعة حركة الشبكة، لذا فهذه الأقوال من المطوّر نفسه.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المزايا والقيود',
        columns: ['الميزة', 'ما تعنيه في الاستخدام الفعلي', 'القيد / تنبيه'],
        rows: [
          {
            'الميزة': 'نسخ محلي',
            'ما تعنيه في الاستخدام الفعلي': 'يبقى الصوت على جهازك.',
            'القيد / تنبيه': 'تنزيلات النماذج عند أول استخدام كبيرة؛ ولا تُنشر أرقام للدقة.',
          },
          {
            'الميزة': 'تمييز المتحدثين',
            'ما تعنيه في الاستخدام الفعلي': 'معرفة من يتحدث في الاجتماعات.',
            'القيد / تنبيه': 'غير متاح في الوضع المباشر؛ ويتعامل Sortformer مع أربعة متحدثين فقط.',
          },
          {
            'الميزة': 'عائلات نماذج كثيرة',
            'ما تعنيه في الاستخدام الفعلي': 'اختيار السرعة أو اللغة أو الدقة.',
            'القيد / تنبيه': 'تحديد الأنسب لعتادك يعود إليك.',
          },
          {
            'الميزة': 'API متوافق مع OpenAI',
            'ما تعنيه في الاستخدام الفعلي': 'يمكن لأدوات أخرى استخدامه كواجهة خلفية.',
            'القيد / تنبيه': 'يُقبل حقل model لكنه يُتجاهل.',
          },
          {
            'الميزة': 'مفتوح المصدر ومجاني',
            'ما تعنيه في الاستخدام الفعلي': 'شيفرة GPL يمكنك فحصها.',
            'القيد / تنبيه': 'مشرف واحد يصف نفسه بـ«vibe coding»؛ ويلزم Docker على Windows وLinux.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'TranscriptionSuite مقابل البدائل',
        content: [
          'هذه أقرب أدوات تحويل الكلام إلى نص في الدليل: ناسخ اجتماعات آخر، وتطبيق إملاء لأجهزة Mac، ومحركان يمكن البناء عليهما.',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر والترخيص', 'الدور', 'الفرق الأهم'],
        rows: [
          {
            'التطبيق': 'TranscriptionSuite',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر والترخيص': 'مجاني، GPL-3.0',
            'الدور': 'تطبيق نسخ مع خادم',
            'الفرق الأهم': 'وضع مباشر وتمييز متحدثين ودفتر وAPI في حزمة واحدة',
          },
          {
            'التطبيق': '[Meetily](/ar/power-local-llm/meetily-review)',
            'المنصات': 'macOS وWindows',
            'السعر والترخيص': 'مجاني (MIT) وPro مدفوع',
            'الدور': 'ناسخ اجتماعات',
            'الفرق الأهم': 'مصمَّم للاجتماعات؛ على macOS وWindows فقط',
          },
          {
            'التطبيق': '[MacWhisper](/ar/power-local-llm/macwhisper-review)',
            'المنصات': 'macOS',
            'السعر والترخيص': 'مجاني جزئيًا، مملوك',
            'الدور': 'تطبيق نسخ لأجهزة Mac',
            'الفرق الأهم': 'لأجهزة Mac فقط ومغلق المصدر',
          },
          {
            'التطبيق': '[faster-whisper](/ar/power-local-llm/faster-whisper-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر والترخيص': 'مجاني، MIT',
            'الدور': 'مكتبة صوت بلغة Python',
            'الفرق الأهم': 'محرك للمطورين دون واجهة',
          },
          {
            'التطبيق': '[Izwi](/ar/power-local-llm/izwi-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر والترخيص': 'مجاني، MIT',
            'الدور': 'بيئة تشغيل صوتية محلية',
            'الفرق الأهم': 'يضيف إخراجًا صوتيًا واستنساخ صوت خلف API واحد',
          },
        ],
        note: 'تتغير المنصات والأسعار والميزات في تطبيقات الجهات الخارجية كثيرًا. تحقق من التفاصيل الحالية في صفحة كل مشروع قبل أن تقرر.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب TranscriptionSuite',
        items: [
          '**من ينسخون مقابلات أو محاضرات أو اجتماعات.** تمييز المتحدثين وتصدير الترجمات موجهان لهذا بالضبط.',
          '**مستخدمو Mac بمعالج Apple silicon.** النسخة المدمجة أسهل طريق ولا تحتاج Docker.',
          '**من يُملون في تطبيقات أخرى.** يغطي ذلك الوضع المباشر واللصق عند المؤشر.',
          '**المجرّبون الذين لديهم خادم منزلي.** يتيح الوصول عن بُعد وAPI لأجهزة أخرى استخدام جهاز واحد.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب TranscriptionSuite',
        items: [
          '**من يريدون مثبّتًا بلا تحضير على Windows أو Linux.** يأتي Docker أولًا.',
          '**أصحاب أجهزة Mac بمعالج Intel.** لا يعرض أحدث إصدار أي نسخة لـ Intel.',
          '**الفرق التي تحتاج دعمًا من الشركة المطورة.** إنه مشروع هواية لمشرف واحد.',
          '**من يحتاجون امتثالًا موثّقًا.** لم نجد صفحة لسياسة الخصوصية.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يحتاج TranscriptionSuite إلى GPU؟',
            a: 'لا. توجد بيئة تشغيل على CPU وحده، لكن نماذج NeMo غير متاحة فيها والنماذج الكبيرة بطيئة؛ أما NVIDIA CUDA وApple Metal وVulkan لـ AMD أو Intel فمسرّعات اختيارية.',
          },
          {
            q: 'لماذا يحتاج إلى Docker؟',
            a: 'يأتي خادم النسخ كحاوية على Windows وLinux وأجهزة Mac بمعالج Intel، وتنزّلها لوحة التحكم وتديرها؛ أما أجهزة Mac بمعالج Apple silicon فتشغّله محليًا بشكل أصلي.',
          },
          {
            q: 'هل تستطيع تطبيقات أخرى استخدامه كواجهة خلفية للنسخ؟',
            a: 'نعم. يوفّر نقطة نسخ متوافقة مع OpenAI، ويمكن لأدوات مثل Open WebUI وLM Studio أن تشير إليها.',
          },
          {
            q: 'هل أحتاج إلى حساب لتمييز المتحدثين؟',
            a: 'فقط في مسار Whisper وNeMo: يتطلب PyAnnote رمز Hugging Face مجانيًا. أما SenseVoice وVibeVoice وSortformer على Apple silicon فلا تتطلبه.',
          },
          {
            q: 'هل أشغّله على جهاز وأستخدمه من جهاز آخر؟',
            a: 'نعم. يصف README الوصول عن بُعد عبر Tailscale أو الشبكة المحلية.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          'يناسب TranscriptionSuite من يريد نسخًا محليًا خاصًا مع تمييز المتحدثين ويتعامل بارتياح مع Docker، أو من يملك Mac بمعالج Apple silicon حيث تُلغي النسخة المدمجة تلك الخطوة.',
          'التحفظات تتعلق بالنضج والشفافية: مشرف واحد يصف نفسه بـ«vibe coding»، ولا سياسة خصوصية، ولا مقاييس دقة سوى ادعاء السرعة من المؤلف نفسه، وتطبيق macOS غير موقَّع. جرّبه أولًا على تسجيلات غير حساسة.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع TranscriptionSuite](https://transcriptionsuite.app/) — وصف المنتج والميزات والتسريع بالعتاد.',
          '[README الخاص بـ TranscriptionSuite](https://github.com/homelab-00/TranscriptionSuite/blob/main/docs/README.md) — التثبيت ومصفوفة التوافق وAPI والترخيص وحالة المشروع.',
          '[TranscriptionSuite على GitHub](https://github.com/homelab-00/TranscriptionSuite) — ترخيص GPL-3.0 وعدد النجوم.',
          '[إصدارات TranscriptionSuite](https://github.com/homelab-00/TranscriptionSuite/releases) — الإصدار 1.3.10 وملفات التثبيت.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مقارنة أدوات الصوت والكلام المحلية](/ar/power-local-llm/local-llm-voice-audio-compared) — تحويل النص إلى كلام والكلام إلى نص ووكلاء الصوت جنبًا إلى جنب.',
          '[مراجعة Whisper.cpp](/ar/power-local-llm/whisper-cpp-review) — محرك Whisper بلغة C++ الذي يستطيع TranscriptionSuite استخدامه أيضًا.',
          '[بناء مساعد صوتي محلي](/ar/power-local-llm/build-local-voice-assistant-2026) — دمج تحويل الكلام إلى نص في مساعد صوتي.',
          '[خط معالجة محلي متعدد الوسائط: صوت ورؤية ونص](/ar/power-local-llm/local-multimodal-pipeline-voice-vision-text) — الجمع بين نماذج الصوت والرؤية المحلية.',
          '[الدليل الكامل لبرمجيات LLM المحلية](/ar/directory) — دليل أوسع لأدوات الذكاء الاصطناعي المحلية لجميع المنصات.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-18',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/transcriptionsuite-review-hero-ko.webp',
    title: 'TranscriptionSuite 리뷰: 화자 구분을 지원하는 무료 로컬 음성 인식 앱',
    seoTitle: 'TranscriptionSuite 리뷰: 무료 로컬 음성 인식',
    intro:
      'TranscriptionSuite는 내 컴퓨터에서 음성을 텍스트로 바꿔 주는 무료 오픈소스 데스크톱 앱입니다. 실시간 전사, 화자 구분, 검색 가능한 오디오 노트북, 선택 가능한 음성 모델을 갖추고 있습니다. 이 리뷰는 공식 사이트, README, GitHub 릴리스에서 확인되는 내용과 빠진 내용, 그리고 디렉터리의 다른 전사 도구와 비교한 결과를 정리합니다.',
    metaDescription:
      'TranscriptionSuite 리뷰: 화자 구분, 라이브 모드, API를 갖춘 Windows·macOS·Linux용 무료 GPL-3.0 음성 인식 앱입니다. 직접 테스트는 하지 않았습니다.',
    twitterDescription:
      'TranscriptionSuite 리뷰: 화자 구분, 라이브 모드, 오디오 노트북을 갖춘 무료 오픈소스 로컬 음성 인식 앱. 설치, 모델, 개인정보, 한계, 대안을 다룹니다.',
    audience:
      '회의, 강의, 받아쓰기를 정확하고 비공개로 전사하고 싶은 독자를 위해 설치, 모델, 하드웨어, 개인정보, 한계, 대안을 다룹니다.',
    readTime: '9분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'TranscriptionSuite review',
    targetKeywords: [
      'transcriptionsuite 리뷰',
      'transcriptionsuite',
      '로컬 음성 인식 앱',
      '오프라인 전사 화자 분리',
      'whisper parakeet 데스크톱 앱',
      'openai 호환 전사 서버',
      '오디오 노트북 로컬 ai',
    ],
    current_hardware_mentioned: ['NVIDIA CUDA', 'Apple silicon', 'AMD Vulkan', 'Intel Vulkan', 'CPU'],
    leadAnswerBlock:
      '**TranscriptionSuite는 음성 모델을 내 컴퓨터에서 실행하고, 실시간 전사, 화자 구분, 캘린더형 오디오 노트북, OpenAI 호환 API를 더한 무료 GPL-3.0 음성 인식 앱입니다.** README에 따르면 오디오와 전사 결과는 내 컴퓨터를 벗어나지 않습니다. 이 리뷰는 버전 1.3.10을 다루며, 공개된 사이트, README, GitHub 릴리스에 근거하고 직접 테스트는 하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: '비공개 로컬 전사를 위해 TranscriptionSuite를 써 볼 만한가요?',
        answer:
          '회의, 강의, 인터뷰를 전사하면서 클라우드 서비스 없이 화자 구분을 원한다면 아마도 그렇습니다. 먼저 두 가지를 확인하십시오. Windows와 Linux에서는 서버에 Docker가 필요하고, 작성자는 이 프로젝트를 한 사람이 \'바이브 코딩\'으로 만든 취미 프로젝트라고 설명합니다.',
        bullets: [
          'Windows, Linux, macOS용 대시보드 설치 파일이 있고, Apple silicon Mac에는 Docker가 필요 없는 통합 빌드가 있습니다.',
          '장시간 녹음, 실시간 라이브 모드, 텍스트나 자막으로 내보내는 파일 가져오기.',
          '화자 구분, Whisper 기준 90개 이상의 언어, 여러 모델 계열.',
          '검색 가능한 오디오 노트북, 전역 받아쓰기 단축키, OpenAI 호환 API.',
          '무료 오픈소스입니다. 모델 가중치는 처음 사용할 때 내려받고, 그 뒤에는 오프라인으로 작동합니다.',
        ],
        updatedDate: '2026-10-18',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'TranscriptionSuite 받기', anchor: 'get-it' },
      { label: 'TranscriptionSuite 한눈에 보기', anchor: 'at-a-glance' },
      { label: 'TranscriptionSuite란', anchor: 'what-is-transcriptionsuite' },
      { label: '시작하기', anchor: 'how-to-get-started' },
      { label: '기능', anchor: 'features' },
      { label: '모델과 하드웨어', anchor: 'models-hardware' },
      { label: '개인정보, 라이선스, 비용', anchor: 'privacy' },
      { label: '장점과 한계', anchor: 'tradeoffs' },
      { label: 'TranscriptionSuite와 대안 비교', anchor: 'vs-alternatives' },
      { label: 'TranscriptionSuite가 적합한 사용자', anchor: 'who-should-use' },
      { label: 'TranscriptionSuite가 적합하지 않은 사용자', anchor: 'who-should-not-use' },
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
            text: 'TranscriptionSuite는 내 컴퓨터에서 실행되는 음성 모델로 오디오를 전사하고 누가 말했는지 표시해 주는 오픈소스 데스크톱 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '비공개 전사 스튜디오라고 생각하시면 됩니다. 강의를 녹음하고, 아무 앱에나 받아쓰고, 오디오 파일을 가져오면 녹음을 클라우드에 보내지 않고도 화자 구분이 된 전사 결과를 얻을 수 있습니다.',
          },
        ],
        items: [
          '검토한 버전: 2026년 9월 24일에 공개된 1.3.10입니다. 저장소의 마지막 업데이트는 2026년 10월 4일이므로 업데이트 정체 경고는 적용되지 않습니다.',
          '라이선스와 가격: README 기준 GPL-3.0 이상이며, 무료이고 계정이 필요 없습니다.',
          '플랫폼: Windows 11과 Linux(x64), macOS. Apple silicon Mac을 제외하면 서버는 Docker에서 실행됩니다.',
          '주요 기능: 라이브 모드, 화자 구분, 오디오 노트북, OpenAI 호환 API, 웹훅.',
          '성숙도: GitHub 별은 약 775개이며, 관리자는 한 명이고 스스로 바이브 코딩이라고 밝힙니다.',
        ],
      },
      getItTranscriptionsuite: {
        id: 'get-it',
        title: 'TranscriptionSuite 받기',
        content: [
          '**TranscriptionSuite는 설치하는 대시보드와, 앱이 내려받아 관리하는 서버의 두 부분으로 이루어집니다.** 파일은 [최신 GitHub 릴리스](https://github.com/homelab-00/TranscriptionSuite/releases/latest)에 첨부되어 있으며, 아래 행은 쉬운 순서대로 나열했습니다.',
        ],
        columns: ['플랫폼', '받기'],
        rows: [
          { '플랫폼': 'macOS, Apple silicon(서버 포함)', '받기': '[TranscriptionSuite-1.3.10-arm64-mac-metal.dmg](https://github.com/homelab-00/TranscriptionSuite/releases/latest) (약 3~5 GB, Docker 불필요)' },
          { '플랫폼': 'macOS, Apple silicon(대시보드만)', '받기': '[TranscriptionSuite-1.3.10-arm64-mac.dmg](https://github.com/homelab-00/TranscriptionSuite/releases/latest) (약 200 MB, 서버는 다른 곳에서 실행)' },
          { '플랫폼': 'Windows(x64)', '받기': '[TranscriptionSuite.Setup.1.3.10.exe](https://github.com/homelab-00/TranscriptionSuite/releases/latest)와 WSL 2를 사용하는 Docker Desktop' },
          { '플랫폼': 'Linux(x64)', '받기': '[TranscriptionSuite-1.3.10.AppImage](https://github.com/homelab-00/TranscriptionSuite/releases/latest)와 Docker 또는 Podman' },
          { '플랫폼': '공식 사이트', '받기': '[transcriptionsuite.app](https://transcriptionsuite.app/)' },
          { '플랫폼': '개인정보 처리방침', '받기': '별도의 개인정보 처리방침 페이지는 찾지 못했습니다. [README](https://github.com/homelab-00/TranscriptionSuite)가 로컬 처리를 설명합니다' },
          { '플랫폼': '소스 코드', '받기': '[github.com/homelab-00/TranscriptionSuite](https://github.com/homelab-00/TranscriptionSuite)' },
        ],
        note: '내려받아 열기만 하면 되는 설치 방식은 서버가 통합된 Mac 빌드뿐입니다. Windows와 Linux에서는 먼저 Docker나 Podman을 터미널 수준에서 설정해야 합니다. macOS 앱은 서명되어 있지 않아, 격리 플래그를 지우거나 \'그래도 열기\'를 선택하기 전까지 macOS가 차단하며 FFmpeg도 설치해야 합니다. README에는 Intel Mac 빌드가 언급되지만 1.3.10 릴리스에는 Apple silicon용 디스크 이미지만 있습니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'TranscriptionSuite 한눈에 보기',
        columns: ['항목', 'TranscriptionSuite'],
        rows: [
          { '항목': '플랫폼', 'TranscriptionSuite': 'Windows, macOS, Linux' },
          { '항목': '가격', 'TranscriptionSuite': '무료' },
          { '항목': '라이선스', 'TranscriptionSuite': 'GPL-3.0 이상' },
          { '항목': '실행 위치', 'TranscriptionSuite': '로컬. 모델은 처음 사용할 때 내려받음' },
          { '항목': '언어', 'TranscriptionSuite': 'Whisper 기준 90개 이상, 다른 모델은 그보다 적음' },
          { '항목': '실시간 전사', 'TranscriptionSuite': '지원(라이브 모드, Whisper 계열 모델만)' },
          { '항목': '화자 구분', 'TranscriptionSuite': '녹음과 파일 가져오기에서 지원. 라이브 모드에서는 미지원' },
          { '항목': 'CPU만으로 사용 가능', 'TranscriptionSuite': '가능. NeMo 모델은 사용할 수 없음' },
          { '항목': '로컬 API 서버', 'TranscriptionSuite': '있음. OpenAI 호환 전사 엔드포인트' },
        ],
        note: '이 항목은 로컬 LLM 소프트웨어 디렉터리에서 쓰는 음성 인식 비교를 따릅니다. 사이트에 언급이 없다는 것은 “알 수 없음”이지 “지원하지 않음”이 아닙니다.',
      },
      whatIsTranscriptionsuite: {
        id: 'what-is-transcriptionsuite',
        title: 'TranscriptionSuite란',
        content: [
          '**TranscriptionSuite는 전사 앱이며 회의 봇이나 클라우드 서비스가 아닙니다.** README에 따르면 Electron 대시보드와 Python 백엔드로 구성되며, Whisper, NVIDIA NeMo, VibeVoice-ASR, SenseVoice, whisper.cpp, MLX 모델을 지원하고 CUDA, Apple Metal, Vulkan 또는 CPU만으로 가속·실행합니다.',
          '작성자는 개인 도구로 시작해 취미 프로젝트가 되었다고 설명하며, 소프트웨어 엔지니어가 아니라 기계공학 엔지니어라고 밝힙니다. README의 표현으로는 \'this whole thing is vibecoded\'이지만 맹목적으로 만든 것은 아니라고 합니다. 작성자는 자신도 사용하고 있으며 포기할 생각이 없다고 말합니다.',
          '이 리뷰는 공식 사이트, README, GitHub 릴리스에 근거합니다. 직접 테스트는 하지 않았으므로 정확도, 속도, 안정성은 여기서 평가하지 않습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하기',
        content: [
          '**설정은 대시보드를 설치한 뒤 앱 안에서 서버를 시작하는 것입니다.** 단계는 README를 따릅니다.',
        ],
        numberedItems: [
          {
            title: '플랫폼 준비하기',
            whyItMatters: 'Windows와 Linux에서는 Docker(Windows는 WSL 2를 쓰는 Docker Desktop, Linux는 Docker 또는 Podman)를 설치하고, Apple silicon에서는 대신 Homebrew로 FFmpeg를 설치합니다.',
          },
          {
            title: '대시보드 설치하기',
            whyItMatters: '[릴리스 페이지](https://github.com/homelab-00/TranscriptionSuite/releases/latest)에서 내 시스템용 파일을 내려받습니다. Mac에서는 앱이 서명되어 있지 않으므로 격리 플래그를 한 번 지웁니다.',
          },
          {
            title: 'Server 탭에서 서버 시작하기',
            whyItMatters: '런타임(CUDA, Metal, Vulkan, CPU)을 고르고 시작합니다. 처음 시작할 때 선택한 모델을 내려받으며 수 GB가 될 수 있습니다.',
          },
          {
            title: '녹음, 받아쓰기, 파일 가져오기',
            whyItMatters: 'Session 탭에서 녹음하거나 오디오를 가져오고, 화자 구분이 필요하면 Speaker Diarization을 켭니다.',
          },
        ],
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**한 사람이 만든 프로젝트치고 기능 목록이 넓습니다.** 아래 내용은 모두 README와 공식 사이트에서 가져왔습니다.',
        ],
        items: [
          '**장시간 녹음.** 마이크나 시스템 오디오로 녹음하고 멈추면 전체 전사 결과를 얻으며, 녹음 중에는 최근 20초의 미리보기가 계속 갱신됩니다.',
          '**라이브 모드.** 받아쓰기를 위한 실시간 문장 단위 전사로, Whisper 계열 모델에서만 작동하며 화자 구분은 되지 않습니다.',
          '**화자 분리.** Whisper, NeMo, SenseVoice, VibeVoice 모델에서 \'누가 말했는지\' 표시합니다.',
          '**파일 가져오기.** 오디오나 영상을 끌어다 놓고 일반 텍스트 또는 `.srt` / `.ass` 자막으로 저장합니다.',
          '**오디오 노트북.** 녹음은 캘린더 보기, 전체 텍스트 검색, 모든 OpenAI 호환 제공자와 대화하는 AI 어시스턴트가 있는 노트에 저장됩니다.',
          '**받아쓰기 단축키.** 시스템 전체에서 쓰는 시작·중지 단축키와 커서 위치 붙여넣기.',
          '**연동.** Open WebUI, LM Studio 같은 도구를 위한 OpenAI 호환 `/v1/audio/transcriptions` 엔드포인트, 발신 웹훅, Tailscale 또는 로컬 네트워크를 통한 원격 접속.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '모델과 하드웨어',
        content: [
          '**음성 모델은 직접 고르며, 앱이 하드웨어를 감지해 호환되지 않는 옵션은 흐리게 표시합니다.** Docker 플랫폼에서는 WhisperX(faster-whisper 모델), NVIDIA Parakeet v3와 Canary v2, VibeVoice-ASR, SenseVoice, whisper.cpp 중에서 고르고, Apple silicon에서는 Whisper, Parakeet, Canary, VibeVoice-ASR의 MLX 버전을 씁니다.',
          '지원 언어는 모델에 따라 다릅니다. Whisper는 90개 이상의 언어를 다루고 영어로 번역할 수 있으며, Parakeet과 Canary는 유럽 언어 25개, VibeVoice는 51개, SenseVoice는 5개를 지원합니다. NeMo 모델은 CPU 런타임에서 실행되지 않고, VibeVoice-ASR은 약 16 GB 크기의 90억 파라미터 모델입니다.',
          '개발자는 RTX 3060에서 Whisper로 30분 분량의 오디오를 1분 안에 전사한다고 밝히지만, 이 리뷰는 그 수치를 재현하지 않았습니다. README는 최소 RAM이나 VRAM 요구량을 공개하지 않습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보, 라이선스, 비용',
        content: [
          '**README에 따르면 모든 것이 내 컴퓨터에서 실행되며 오디오와 전사 결과는 컴퓨터를 벗어나지 않습니다.** 인터넷은 처음 사용할 때 앱과 모델 가중치를 내려받을 때만 필요하고, 그 뒤에는 오프라인으로 작동합니다. Whisper나 NeMo의 화자 구분은 PyAnnote 모델을 쓰며 무료 Hugging Face 토큰이 필요합니다.',
          '노트북의 AI 어시스턴트는 Groq, OpenAI, OpenRouter 같은 클라우드 서비스를 포함해 모든 OpenAI 호환 제공자와 대화할 수 있습니다. 그곳에 보낸 내용은 \'로컬 전용\'이라는 설명의 범위 밖입니다. README는 앱이 매주 새 버전을 확인한다고도 밝힙니다.',
          '코드는 GPL-3.0 이상이고 앱은 무료입니다. 별도의 개인정보 처리방침 페이지는 찾지 못했습니다. 이 리뷰는 네트워크 트래픽을 검사하지 않았으므로 이는 개발자 본인의 설명입니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장점과 한계',
        columns: ['장점', '실제 사용에서의 의미', '한계 / 유의 사항'],
        rows: [
          {
            '장점': '로컬 전사',
            '실제 사용에서의 의미': '오디오가 내 컴퓨터에 머뭅니다.',
            '한계 / 유의 사항': '처음 사용할 때 내려받는 모델이 크고, 정확도 수치는 공개되어 있지 않습니다.',
          },
          {
            '장점': '화자 구분',
            '실제 사용에서의 의미': '회의에서 누가 말했는지 알 수 있습니다.',
            '한계 / 유의 사항': '라이브 모드에서는 쓸 수 없고, Sortformer는 네 명까지만 처리합니다.',
          },
          {
            '장점': '다양한 모델 계열',
            '실제 사용에서의 의미': '속도, 언어, 정확도를 고를 수 있습니다.',
            '한계 / 유의 사항': '내 하드웨어에 맞는 모델은 직접 판단해야 합니다.',
          },
          {
            '장점': 'OpenAI 호환 API',
            '실제 사용에서의 의미': '다른 도구가 백엔드로 쓸 수 있습니다.',
            '한계 / 유의 사항': 'model 필드는 받아들여지지만 무시됩니다.',
          },
          {
            '장점': '오픈소스이며 무료',
            '실제 사용에서의 의미': '직접 살펴볼 수 있는 GPL 코드입니다.',
            '한계 / 유의 사항': '관리자는 한 명이며 스스로 바이브 코딩이라고 합니다. Windows와 Linux에서는 Docker가 필요합니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'TranscriptionSuite와 대안 비교',
        content: [
          '디렉터리에서 가장 가까운 음성 인식 도구는 다른 회의 전사 도구, Mac용 받아쓰기 앱, 그리고 그 위에 만들 수 있는 두 가지 엔진입니다.',
        ],
        columns: ['앱', '플랫폼', '가격과 라이선스', '역할', '핵심 차이'],
        rows: [
          {
            '앱': 'TranscriptionSuite',
            '플랫폼': 'Windows, macOS, Linux',
            '가격과 라이선스': '무료, GPL-3.0',
            '역할': '서버가 있는 전사 앱',
            '핵심 차이': '라이브 모드, 화자 구분, 노트북, API를 한 번에',
          },
          {
            '앱': '[Meetily](/ko/power-local-llm/meetily-review)',
            '플랫폼': 'macOS, Windows',
            '가격과 라이선스': '무료(MIT)와 유료 Pro',
            '역할': '회의 전사 도구',
            '핵심 차이': '회의 중심으로 설계됨. macOS와 Windows만 지원',
          },
          {
            '앱': '[MacWhisper](/ko/power-local-llm/macwhisper-review)',
            '플랫폼': 'macOS',
            '가격과 라이선스': '프리미엄, 독점',
            '역할': 'Mac용 전사 앱',
            '핵심 차이': 'Mac 전용이며 비공개 소스',
          },
          {
            '앱': '[faster-whisper](/ko/power-local-llm/faster-whisper-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격과 라이선스': '무료, MIT',
            '역할': 'Python 음성 라이브러리',
            '핵심 차이': '개발자용 엔진이며 인터페이스가 없음',
          },
          {
            '앱': '[Izwi](/ko/power-local-llm/izwi-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격과 라이선스': '무료, MIT',
            '역할': '로컬 음성 런타임',
            '핵심 차이': '하나의 API로 음성 출력과 음성 복제까지 제공',
          },
        ],
        note: '타사 앱의 플랫폼, 가격, 기능은 자주 바뀝니다. 결정하기 전에 각 프로젝트의 공식 페이지에서 최신 정보를 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'TranscriptionSuite가 적합한 사용자',
        items: [
          '**인터뷰, 강의, 회의를 전사하는 사람.** 화자 구분과 자막 내보내기가 바로 그 용도를 겨냥합니다.',
          '**Apple silicon Mac 사용자.** 통합 빌드가 가장 간단하며 Docker가 필요 없습니다.',
          '**다른 앱에 받아쓰기하려는 사람.** 라이브 모드와 커서 위치 붙여넣기가 이를 지원합니다.',
          '**홈 서버를 가진 사용자.** 원격 접속과 API로 다른 기기가 한 대의 컴퓨터를 함께 쓸 수 있습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'TranscriptionSuite가 적합하지 않은 사용자',
        items: [
          '**Windows나 Linux에서 준비 없이 설치하고 싶은 사람.** 먼저 Docker가 필요합니다.',
          '**Intel Mac 사용자.** 최신 릴리스에는 Intel 빌드가 없습니다.',
          '**공급업체 지원이 필요한 팀.** 관리자 한 명의 취미 프로젝트입니다.',
          '**문서화된 규정 준수가 필요한 사람.** 개인정보 처리방침 페이지를 찾지 못했습니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'TranscriptionSuite에 GPU가 필요한가요?',
            a: '아니요. CPU 전용 런타임이 있지만 NeMo 모델은 쓸 수 없고 큰 모델은 느립니다. NVIDIA CUDA, Apple Metal, AMD·Intel Vulkan은 선택 가능한 가속기입니다.',
          },
          {
            q: '왜 Docker가 필요한가요?',
            a: '전사 서버는 Windows, Linux, Intel Mac에서 컨테이너로 제공되며 대시보드가 내려받아 관리합니다. Apple silicon Mac에서는 서버가 네이티브로 실행됩니다.',
          },
          {
            q: '다른 앱이 전사 백엔드로 쓸 수 있나요?',
            a: '예. OpenAI 호환 전사 엔드포인트를 제공하므로 Open WebUI, LM Studio 같은 도구가 이를 가리킬 수 있습니다.',
          },
          {
            q: '화자 구분에 계정이 필요한가요?',
            a: 'Whisper와 NeMo 경로에서만 필요합니다. PyAnnote는 무료 Hugging Face 토큰을 요구합니다. SenseVoice, VibeVoice, Apple silicon의 Sortformer는 필요하지 않습니다.',
          },
          {
            q: '한 컴퓨터에서 실행하고 다른 기기에서 쓸 수 있나요?',
            a: '예. README는 Tailscale이나 로컬 네트워크를 통한 원격 접속을 설명합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          'TranscriptionSuite는 화자 구분이 되는 비공개 로컬 전사를 원하고 Docker가 부담스럽지 않은 사용자, 또는 통합 빌드로 그 단계를 건너뛸 수 있는 Apple silicon Mac 사용자에게 잘 맞습니다.',
          '유의할 점은 성숙도와 투명성입니다. 스스로 바이브 코딩이라고 밝히는 관리자 한 명, 개인정보 처리방침 부재, 작성자의 속도 주장 외에는 정확도 벤치마크가 없다는 점, 서명되지 않은 macOS 앱이 그렇습니다. 먼저 민감하지 않은 녹음으로 시험해 보십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[TranscriptionSuite 공식 사이트](https://transcriptionsuite.app/) — 제품 설명, 기능, 하드웨어 가속.',
          '[TranscriptionSuite README](https://github.com/homelab-00/TranscriptionSuite/blob/main/docs/README.md) — 설치, 호환성 표, API, 라이선스, 프로젝트 상태.',
          '[GitHub의 TranscriptionSuite](https://github.com/homelab-00/TranscriptionSuite) — GPL-3.0 라이선스와 별 개수.',
          '[TranscriptionSuite 릴리스](https://github.com/homelab-00/TranscriptionSuite/releases) — 버전 1.3.10과 설치 파일.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[로컬 음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 음성 합성, 음성 인식, 음성 에이전트를 나란히 비교합니다.',
          '[Whisper.cpp 리뷰](/ko/power-local-llm/whisper-cpp-review) — TranscriptionSuite도 쓸 수 있는 C++ Whisper 엔진.',
          '[로컬 음성 어시스턴트 만들기](/ko/power-local-llm/build-local-voice-assistant-2026) — 음성 인식을 음성 어시스턴트에 연결하는 방법.',
          '[로컬 멀티모달 파이프라인: 음성, 비전, 텍스트](/ko/power-local-llm/local-multimodal-pipeline-voice-vision-text) — 로컬 음성 모델과 비전 모델 결합하기.',
          '[로컬 LLM 소프트웨어 전체 디렉터리](/ko/directory) — 모든 플랫폼의 로컬 AI 도구를 모은 폭넓은 디렉터리.',
        ],
      },
    },
  },
}
