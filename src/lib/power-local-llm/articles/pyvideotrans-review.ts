// pyVideoTrans Review: Free Video Translation and AI Dubbing
// Slug: pyvideotrans-review
// Companion to: local-llm-voice-audio-compared, buzz-captions-review, subtitle-edit-review, sablate-review (same speech-to-text / subtitles segment)
// Sources (all read 2026-11-20, no hands-on testing): official website (home page, download page, user guide, software license agreement, terms of use, privacy policy),
// GitHub repository and README, GitHub release v4.19 (notes and download links; the release has no attached files), GitHub API (license, stars, last push, release list).
// The request came from the site owner, not from the maker.
// Last upstream update 2026-11-20 (last commit; latest release v4.19 from 2026-11-17) => no stale warning.
// Theme: 'Voice, Speech & Multimodal' (canonical theme used by the other audio reviews).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-21',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/pyvideotrans-review-hero-en.webp',
    title: 'pyVideoTrans Review: Free Video Translation and AI Dubbing',
    seoTitle: 'pyVideoTrans Review: Free Video Translator and Dubber',
    intro:
      'pyVideoTrans is a free, open-source tool that translates a video into another language in one pipeline: speech recognition, subtitle translation, AI dubbing and re-muxing the finished video. This review is based on the project\'s website and user guide, the GitHub repository and README, and the latest GitHub release. PromptQuorum has not tested the app.',
    metaDescription:
      'pyVideoTrans translates and dubs videos with local or cloud engines for free. Platforms, install steps, GPU needs, license, privacy and unverified points.',
    twitterDescription:
      'pyVideoTrans is a free GPL-3.0 tool for video translation, subtitles and AI dubbing. Windows package, source setup, local or cloud engines, privacy and open questions.',
    audience:
      'Video creators, educators and hobbyists who want to translate spoken videos into subtitles and dubbing in another language, and who are comfortable choosing speech, translation and voice engines',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'pyVideoTrans',
    targetKeywords: [
      'pyVideoTrans review',
      'pyVideoTrans download',
      'video translation software',
      'AI video dubbing',
      'local video translator',
      'translate video subtitles offline',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**pyVideoTrans is a free, GPL-3.0 open-source tool for Windows, macOS and Linux that turns a spoken video into a translated, dubbed and subtitled video in one pipeline.** Its speech, translation and voice engines can run on your computer or in the cloud, and the default translation and dubbing channels are online services.',
    quickAnswerTop: {
      en: {
        question: 'What is pyVideoTrans and who is it for?',
        answer:
          'pyVideoTrans is a desktop, command-line and browser tool that transcribes a video, translates the subtitles, dubs them with a text-to-speech voice and rebuilds the video. It suits people who want a free translation and dubbing workflow and can pick and configure engines themselves.',
        bullets: [
          'Platforms: Windows (pre-packaged archive), macOS and Linux (source setup in a terminal).',
          'Price: free; third-party API providers bill separately.',
          'License: GPL-3.0.',
          'Version: 4.19, last upstream update 20 November 2026 (latest release 17 November 2026).',
          'Maker: a personal project of the developer behind the GitHub account jianchang512; no company named.',
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
            text: 'pyVideoTrans is an open-source tool that listens to a video, writes and translates its subtitles, dubs them with a synthetic voice and builds a new video in the target language.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as an assembly line with four stations: transcribe, translate, speak, merge. At each station you choose a local model or an online service, and in single-video mode you can pause to correct the text.',
          },
        ],
        items: [
          'Per the guide, the defaults are faster-whisper large-v3-turbo for speech recognition, Google Translate for translation and Edge-TTS for voices; the last two are online services.',
          'Voice cloning is offered through integrated models such as F5-TTS, CosyVoice and GPT-SoVITS, according to the README.',
          'The Windows package is a portable archive that carries no digital signature, per the guide, so security software may flag it.',
          'macOS and Linux have no package; the guide gives a terminal setup with FFmpeg, uv and a repository clone.',
          'PromptQuorum has not tested the app, so no claim here covers translation, dubbing or timing quality.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Translating and dubbing a video can involve copyright and, with voice cloning, personal-voice rights. The website says the legal side of the video content is a matter between you and the rights holder, so check the rights before you publish. This is general information, not legal advice.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**pyVideoTrans converts a video from one spoken language to another by chaining speech recognition, subtitle translation, text-to-speech dubbing and video synthesis.**',
          'The project lives on GitHub under the account jianchang512, and the website describes it as a personal open-source project created out of interest, with no business model and no company named. It has been maintained since October 2023, according to the website. The latest release is version 4.19, published on 17 November 2026, and the repository\'s last commit on 20 November 2026 merged a translation fix. Four releases, 4.16 to 4.19, appeared between 13 October and 17 November 2026, so recent activity is high.',
          'Besides the full video pipeline, the app offers separate tools for batch speech-to-text into SRT subtitles, batch dubbing of subtitles, and SRT translation. The README adds speaker diarization, multi-role dubbing, a vocal and background separation tool, video and subtitle merging and audio-video alignment. It can be driven from a desktop window, a command line or a browser interface.',
          'The README shows two sponsor banners, and the website says it carries some Google ads and sponsorship links to pay for the documentation server and test token costs. These are maker statements. PromptQuorum has not run the app and has not compared its output with other tools.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**Windows users download a pre-packaged archive, extract it and double-click sp.exe; macOS and Linux users set it up from source in a terminal.**',
          'The latest GitHub release has no attached files. Its notes link the Windows archive on Baidu Netdisk and on Hugging Face, and the website download page lists the same builds. The guide says to extract the archive into a short folder path without spaces or Chinese characters, to avoid protected folders such as Program Files, and not to run sp.exe from inside the archive.',
        ],
        columns: ['Platform', 'How to get it'],
        rows: [
          { 'Platform': '[Windows 10/11](https://en.pyvideotrans.com/downpackage)', 'How to get it': 'Pre-built .7z (2.7 GB); run sp.exe; unsigned per guide' },
          { 'Platform': '[Windows patch](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.19)', 'How to get it': '400 MB patch that overlays an older package' },
          { 'Platform': '[macOS](https://en.pyvideotrans.com/getstart)', 'How to get it': 'Source setup: Homebrew, FFmpeg, uv, git clone, uv sync' },
          { 'Platform': '[Linux](https://en.pyvideotrans.com/getstart)', 'How to get it': 'Source setup: apt, FFmpeg, uv, git clone, uv sync' },
          { 'Platform': '[Docker / WebUI](https://github.com/jianchang512/pyvideotrans#readme)', 'How to get it': 'docker build and run; browser interface on port 7860' },
          { 'Platform': '[Website](https://pyvideotrans.com)', 'How to get it': 'Official site with guide and download page' },
          { 'Platform': '[Privacy policy](https://en.pyvideotrans.com/yinsizhengce)', 'How to get it': 'Covers the documentation website, not the app' },
          { 'Platform': '[Source code](https://github.com/jianchang512/pyvideotrans)', 'How to get it': 'GitHub repository (GPL-3.0)' },
        ],
        note: 'macOS and Linux need a terminal and developer-style setup; the Windows archive is the only no-terminal path.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements',
        content: [
          '**The website says there is no minimum hardware and that an NVIDIA GPU is optional, but it gives no RAM figure.**',
          'Local models are not inside the package. The guide says only the calling code is built in and the models download on first use, so the first run needs a connection and disk space beyond the archive.',
        ],
        columns: ['Item', 'Stated figure'],
        rows: [
          { 'Item': 'Operating system', 'Stated figure': 'Windows 10/11 package; macOS and Linux from source' },
          { 'Item': 'NVIDIA GPU', 'Stated figure': 'Optional; CUDA 12.8 and cuDNN 9.11 for acceleration' },
          { 'Item': 'Largest Whisper model', 'Stated figure': 'large-v3 needs 8 GB+ VRAM' },
          { 'Item': 'CPU-only use', 'Stated figure': 'Website: runs with or without an NVIDIA GPU' },
          { 'Item': 'System RAM', 'Stated figure': 'Not stated' },
          { 'Item': 'Python (source setup)', 'Stated figure': 'README recommends 3.10' },
          { 'Item': 'FFmpeg', 'Stated figure': 'Needed for source setup, per the README' },
        ],
        note: 'Heavy use of the free online channels may hit rate limits, according to the guide.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The app combines a one-click video translation pipeline with standalone tools for each stage.** The items below are maker statements from the README, website and guide.',
        ],
        items: [
          'Translation V/A: speech recognition, subtitle translation, dubbing and video synthesis in one run, with batch queues.',
          'Standalone tools: batch speech-to-text to SRT, dubbing from subtitles or text, and SRT translation that keeps timestamps.',
          'Speaker diarization and multi-role dubbing, so different speakers can get different voices.',
          'Voice cloning through integrated models such as F5-TTS, CosyVoice and GPT-SoVITS.',
          'Pauses for manual proofreading after recognition, translation and dubbing in single-video mode.',
          'Sync options: audio speed-up, video slow-down and subtitle embedding.',
          'More than 30 recognition, translation and voice channels, local and online, per the website.',
          'Utilities: vocal and background separation, video and subtitle merging, audio-video alignment.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**The software license page says the core functions run on your computer and do not upload your videos or usage data to the developer, but any online engine you choose receives your data.**',
          'That page says text, audio or video sent to third-party services such as Microsoft Azure, OpenAI or Edge TTS goes directly from your computer to that provider and falls under its policy. The guide says Google Translate and Edge-TTS, the defaults, run online without registration. The optional LLM correction step defaults to the DeepSeek channel, per the guide.',
          'The app checks for new versions through a static file on the website. The error-report button opens a forum page, and the page says nothing is sent unless you press Publish. The privacy policy covers the documentation website: it mentions logs, cookies, Google AdSense and analytics services. PromptQuorum did not capture network traffic.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**pyVideoTrans fits people who want a configurable, no-cost pipeline and can manage engine choices.**',
        ],
        items: [
          'Creators who want subtitles and a dubbed track for their own videos in another language.',
          'Educators and teams who want batch transcription and subtitle translation with manual proofreading.',
          'Technical users who want a command line, browser interface or Docker deployment.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        content: [
          '**pyVideoTrans is a weaker fit in some cases, and several details remain unverified.**',
        ],
        items: [
          'Not a fit: videos that contain only music or silent images, which the guide lists as unsupported, or footage whose burned-in subtitles you want removed, which the guide says it cannot do.',
          'Not a fit: macOS or Linux users who want an installer; both need a terminal setup.',
          'Not a fit: anyone who needs a signed, store-distributed Windows app, since, per the project’s guide, the package is unsigned, and it is not on GitHub release files.',
          'Unverified: translation, dubbing and timing quality, speed and language count. PromptQuorum ran no tests and did not download or inspect the Windows package.',
          'Unverified: RAM and disk needs beyond the stated figures, and which local models run at usable speed on CPU only.',
          'Unverified: licenses of the individual models. The website tells users to check each model developer\'s license and commercial terms.',
          'Unverified: the maker\'s legal entity. The directory flag for China comes from the Terms of Use, which name Chinese law as governing law; no company address was found.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Competitors and Alternatives',
        itemHeadings: true,
        content: [
          '**pyVideoTrans covers the whole video translation chain, while the alternatives below focus on transcription or subtitles.** PromptQuorum has not compared them hands-on; the notes come from each app\'s review.',
        ],
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[Buzz](/power-local-llm/buzz-captions-review)', 'Platforms': 'Windows, macOS, Linux', 'Price / license': 'Free / MIT', 'Key difference': 'Offline Whisper transcription and translation with subtitle export; focused on subtitles' },
          { 'App': '[Subtitle Edit](/power-local-llm/subtitle-edit-review)', 'Platforms': 'Windows, macOS, Linux', 'Price / license': 'Free / MIT', 'Key difference': 'Subtitle editor with optional local transcription and auto-translate; focused on subtitles' },
          { 'App': '[Sablate](/power-local-llm/sablate-review)', 'Platforms': 'Windows, macOS', 'Price / license': 'Freemium / proprietary', 'Key difference': 'Per its maker, transcribes, translates and burns styled captions; closed source' },
        ],
        note: 'Confirm each app\'s current price, license and platforms on its own page before choosing.',
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Does pyVideoTrans work fully offline?',
            a: 'Only if every stage uses a local engine, and local models download on first use, so a first offline run needs the files in place already.',
          },
          {
            q: 'Can it clone my voice?',
            a: 'The README lists F5-TTS, CosyVoice and GPT-SoVITS as integrated zero-shot voice cloning models, and the guide has a page on original-voice cloning. How good the result is was not tested here.',
          },
          {
            q: 'Is there an official paid version?',
            a: 'The website says no. It states that paid copies on shopping platforms such as Taobao, Xianyu and Pinduoduo are not official and that the developer authorized no sales and gets nothing from them.',
          },
          {
            q: 'Can I upload the translated video to YouTube?',
            a: 'The website says where you upload is your decision, and that whether you may republish the video content is between you and the rights holder. It also tells you to read the license terms of any model you use.',
          },
          {
            q: 'Can I run it on a server or in a browser?',
            a: 'Yes. The README documents a command-line interface with tasks for video translation, speech-to-text, subtitle translation and text-to-speech, plus a browser WebUI and a Docker image.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**pyVideoTrans is worth trying if you want one free tool that handles transcription, translation and dubbing and you can accept a hands-on setup.**',
          'On paper it covers the whole chain: GPL-3.0 code, many local and cloud engines, speaker-aware dubbing, voice cloning integrations and three ways to run it. The maker is actively working on it, with four releases in five weeks.',
          'The trade-offs are clear. The Windows archive is unsigned per the project’s guide and hosted outside GitHub release files, macOS and Linux need a terminal, the defaults send text to online services, and no company or privacy policy for the app itself was found. Output quality is untested. Try it on a short clip you have the rights to use, and check the official site before relying on a newer build.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[pyVideoTrans website](https://pyvideotrans.com) — home page, feature and FAQ statements, donation and ad notes, checked 20 November 2026.',
          '[Windows download page](https://en.pyvideotrans.com/downpackage) — Windows package, patch package and macOS/Linux pointers, checked 20 November 2026.',
          '[User guide](https://en.pyvideotrans.com/getstart) — workflow, defaults, engine tables, security note and model download behavior, checked 20 November 2026.',
          '[Software license and service agreement](https://en.pyvideotrans.com/law) — data handling, update check, error reporting and disclaimer, checked 20 November 2026.',
          '[Terms of Use](https://en.pyvideotrans.com/xieyi) — governing-law clause, checked 20 November 2026.',
          '[Privacy policy](https://en.pyvideotrans.com/yinsizhengce) — documentation-site data collection, checked 20 November 2026.',
          '[GitHub repository](https://github.com/jianchang512/pyvideotrans) — license, README, install steps and last commit on 20 November 2026, checked 20 November 2026.',
          '[Release 4.19](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.19) — release date, download links and changes, checked 20 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Voice and Speech Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — text-to-speech, speech-to-text and voice agents side by side.',
          '[Buzz Review](/power-local-llm/buzz-captions-review) — offline Whisper transcription and subtitle export.',
          '[Subtitle Edit Review](/power-local-llm/subtitle-edit-review) — a subtitle editor with optional local engines.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-21',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/pyvideotrans-review-hero-de.webp',
    title: 'pyVideoTrans im Test: kostenlose Videoübersetzung und KI-Vertonung',
    seoTitle: 'pyVideoTrans im Test: Videoübersetzer und Dubbing',
    intro:
      'pyVideoTrans ist ein kostenloses Open-Source-Werkzeug, das ein Video in einer Pipeline in eine andere Sprache überträgt: Spracherkennung, Untertitelübersetzung, KI-Vertonung und das Zusammenfügen des fertigen Videos. Diese Rezension stützt sich auf die Website und das Benutzerhandbuch des Projekts, das GitHub-Repository mit README und das neueste GitHub-Release. PromptQuorum hat die App nicht getestet.',
    metaDescription:
      'pyVideoTrans übersetzt und vertont Videos kostenlos mit lokalen oder Cloud-Engines. Plattformen, Setup, GPU-Bedarf, Lizenz, Datenschutz, offene Punkte.',
    twitterDescription:
      'pyVideoTrans ist ein kostenloses GPL-3.0-Werkzeug für Videoübersetzung, Untertitel und KI-Vertonung. Windows-Paket, Quellcode-Setup, Engines, Datenschutz und offene Fragen.',
    audience:
      'Videoersteller, Lehrende und Hobbyanwender, die gesprochene Videos als Untertitel und Vertonung in eine andere Sprache übertragen möchten und Sprach-, Übersetzungs- und Stimm-Engines selbst auswählen können',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'pyVideoTrans',
    targetKeywords: [
      'pyVideoTrans Rezension',
      'pyVideoTrans Download',
      'Software zur Videoübersetzung',
      'KI-Videovertonung',
      'lokaler Videoübersetzer',
      'Videountertitel offline übersetzen',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**pyVideoTrans ist ein kostenloses Open-Source-Werkzeug unter GPL-3.0 für Windows, macOS und Linux, das ein gesprochenes Video in einer Pipeline in ein übersetztes, vertontes und untertiteltes Video verwandelt.** Die Sprach-, Übersetzungs- und Stimm-Engines können auf Ihrem Computer oder in der Cloud laufen, und die Standardkanäle für Übersetzung und Vertonung sind Online-Dienste.',
    quickAnswerTop: {
      de: {
        question: 'Was ist pyVideoTrans, und für wen ist es gedacht?',
        answer:
          'pyVideoTrans ist ein Werkzeug für Desktop, Kommandozeile und Browser, das ein Video transkribiert, die Untertitel übersetzt, sie mit einer Text-to-Speech-Stimme vertont und das Video neu zusammensetzt. Es eignet sich für Menschen, die einen kostenlosen Übersetzungs- und Vertonungsablauf suchen und Engines selbst auswählen und einrichten können.',
        bullets: [
          'Plattformen: Windows (vorgepacktes Archiv), macOS und Linux (Einrichtung aus dem Quellcode im Terminal).',
          'Preis: kostenlos; Drittanbieter-APIs rechnen separat ab.',
          'Lizenz: GPL-3.0.',
          'Version: 4.19, letztes Upstream-Update am 20. November 2026 (neuestes Release am 17. November 2026).',
          'Hersteller: ein persönliches Projekt des Entwicklers hinter dem GitHub-Konto jianchang512; keine Firma genannt.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'Überblick', anchor: 'overview' },
      { label: 'So bekommen Sie es', anchor: 'get-it' },
      { label: 'Anforderungen', anchor: 'requirements' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Datenschutz und Datenfluss', anchor: 'privacy' },
      { label: 'Für wen geeignet', anchor: 'who-should-use' },
      { label: 'Was wir nicht prüfen konnten', anchor: 'who-should-not-use' },
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
            text: 'pyVideoTrans ist ein kostenloses Open-Source-Werkzeug, das ein Video anhört, dessen Untertitel schreibt und übersetzt, sie mit einer synthetischen Stimme vertont und ein neues Video in der Zielsprache erstellt.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als Fließband mit vier Stationen vor: transkribieren, übersetzen, sprechen, zusammenführen. An jeder Station wählen Sie ein lokales Modell oder einen Online-Dienst, und im Einzelvideo-Modus können Sie anhalten, um den Text zu korrigieren.',
          },
        ],
        items: [
          'Laut Handbuch sind die Standardeinstellungen faster-whisper large-v3-turbo für die Spracherkennung, Google Translate für die Übersetzung und Edge-TTS für die Stimmen; die beiden letzten sind Online-Dienste.',
          'Stimmklonen wird laut README über eingebundene Modelle wie F5-TTS, CosyVoice und GPT-SoVITS angeboten.',
          'Das Windows-Paket ist ein portables Archiv ohne digitale Signatur, so das Handbuch; Sicherheitssoftware kann es daher markieren.',
          'Für macOS und Linux gibt es kein Paket; das Handbuch beschreibt eine Terminal-Einrichtung mit FFmpeg, uv und einem Repository-Klon.',
          'PromptQuorum hat die App nicht getestet, daher trifft keine Aussage hier Übersetzungs-, Vertonungs- oder Timing-Qualität.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Beim Übersetzen und Vertonen von Videos können Urheberrechte und beim Stimmklonen Persönlichkeitsrechte an der Stimme eine Rolle spielen. Laut Website ist die rechtliche Seite des Videoinhalts Sache zwischen Ihnen und dem Rechteinhaber; klären Sie die Rechte daher vor einer Veröffentlichung. Dies ist eine allgemeine Information, keine Rechtsberatung.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**pyVideoTrans überträgt ein Video von einer gesprochenen Sprache in eine andere, indem es Spracherkennung, Untertitelübersetzung, Text-to-Speech-Vertonung und Videosynthese verkettet.**',
          'Das Projekt liegt auf GitHub unter dem Konto jianchang512, und die Website beschreibt es als persönliches Open-Source-Projekt aus Interesse, ohne Geschäftsmodell und ohne genannte Firma. Laut Website wird es seit Oktober 2023 gepflegt. Das neueste Release ist Version 4.19, veröffentlicht am 17. November 2026, und der letzte Commit im Repository vom 20. November 2026 hat eine Übersetzungskorrektur übernommen. Zwischen dem 13. Oktober und dem 17. November 2026 erschienen vier Releases, 4.16 bis 4.19; die jüngste Aktivität ist also hoch.',
          'Neben der vollständigen Video-Pipeline bietet die App getrennte Werkzeuge für die Stapel-Spracherkennung in SRT-Untertitel, die Stapel-Vertonung von Untertiteln und die SRT-Übersetzung. Die README nennt zusätzlich Sprechererkennung, Mehrrollen-Vertonung, ein Werkzeug zur Trennung von Stimme und Hintergrund, das Zusammenführen von Video und Untertiteln sowie den Abgleich von Audio und Video. Bedienen lässt sie sich über ein Desktop-Fenster, eine Kommandozeile oder eine Browser-Oberfläche.',
          'Die README zeigt zwei Sponsorenbanner, und die Website gibt an, einige Google-Anzeigen und Sponsoring-Links zu führen, um den Dokumentationsserver und Testkosten für Tokens zu bezahlen. Das sind Aussagen des Herstellers. PromptQuorum hat die App nicht ausgeführt und ihre Ausgabe nicht mit anderen Werkzeugen verglichen.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So bekommen Sie es',
        content: [
          '**Windows-Nutzer laden ein vorgepacktes Archiv herunter, entpacken es und starten sp.exe per Doppelklick; macOS- und Linux-Nutzer richten es im Terminal aus dem Quellcode ein.**',
          'Das neueste GitHub-Release hat keine angehängten Dateien. Seine Hinweise verlinken das Windows-Archiv auf Baidu Netdisk und auf Hugging Face, und die Download-Seite der Website listet dieselben Builds. Das Handbuch empfiehlt, das Archiv in einen kurzen Ordnerpfad ohne Leerzeichen oder chinesische Zeichen zu entpacken, geschützte Ordner wie Program Files zu meiden und sp.exe nicht direkt im Archiv zu starten.',
        ],
        columns: ['Plattform', 'So bekommen Sie es'],
        rows: [
          { 'Plattform': '[Windows 10/11](https://en.pyvideotrans.com/downpackage)', 'So bekommen Sie es': '.7z (2,7 GB); sp.exe starten; laut Guide unsigniert' },
          { 'Plattform': '[Windows-Patch](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.19)', 'So bekommen Sie es': '400-MB-Patch, der ein älteres Paket überschreibt' },
          { 'Plattform': '[macOS](https://en.pyvideotrans.com/getstart)', 'So bekommen Sie es': 'Quellcode-Setup: Homebrew, FFmpeg, uv, git clone, uv sync' },
          { 'Plattform': '[Linux](https://en.pyvideotrans.com/getstart)', 'So bekommen Sie es': 'Quellcode-Setup: apt, FFmpeg, uv, git clone, uv sync' },
          { 'Plattform': '[Docker / WebUI](https://github.com/jianchang512/pyvideotrans#readme)', 'So bekommen Sie es': 'docker build und run; Browser-Oberfläche auf Port 7860' },
          { 'Plattform': '[Website](https://pyvideotrans.com)', 'So bekommen Sie es': 'Offizielle Seite mit Handbuch und Download-Seite' },
          { 'Plattform': '[Datenschutzerklärung](https://en.pyvideotrans.com/yinsizhengce)', 'So bekommen Sie es': 'Gilt für die Dokumentations-Website, nicht für die App' },
          { 'Plattform': '[Quellcode](https://github.com/jianchang512/pyvideotrans)', 'So bekommen Sie es': 'GitHub-Repository (GPL-3.0)' },
        ],
        note: 'macOS und Linux brauchen ein Terminal und eine entwicklerartige Einrichtung; das Windows-Archiv ist der einzige Weg ohne Terminal.',
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen',
        content: [
          '**Laut Website gibt es keine Mindest-Hardware, und eine NVIDIA-GPU ist optional, einen RAM-Wert nennt sie aber nicht.**',
          'Lokale Modelle stecken nicht im Paket. Laut Handbuch ist nur der aufrufende Code eingebaut und die Modelle werden beim ersten Einsatz heruntergeladen; der erste Start braucht also eine Verbindung und Speicherplatz über das Archiv hinaus.',
        ],
        columns: ['Punkt', 'Angegebener Wert'],
        rows: [
          { 'Punkt': 'Betriebssystem', 'Angegebener Wert': 'Windows-10/11-Paket; macOS und Linux aus dem Quellcode' },
          { 'Punkt': 'NVIDIA-GPU', 'Angegebener Wert': 'Optional; CUDA 12.8 und cuDNN 9.11 zur Beschleunigung' },
          { 'Punkt': 'Größtes Whisper-Modell', 'Angegebener Wert': 'large-v3 braucht 8 GB+ VRAM' },
          { 'Punkt': 'Nur-CPU-Betrieb', 'Angegebener Wert': 'Website: läuft mit oder ohne NVIDIA-GPU' },
          { 'Punkt': 'Arbeitsspeicher', 'Angegebener Wert': 'Nicht angegeben' },
          { 'Punkt': 'Python (Quellcode-Setup)', 'Angegebener Wert': 'README empfiehlt 3.10' },
          { 'Punkt': 'FFmpeg', 'Angegebener Wert': 'Für das Quellcode-Setup nötig, laut README' },
        ],
        note: 'Intensive Nutzung der kostenlosen Online-Kanäle kann laut Handbuch auf Ratenbegrenzungen stoßen.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Die App verbindet eine Videoübersetzung per Mausklick mit eigenständigen Werkzeugen für jede Stufe.** Die Punkte unten sind Aussagen des Herstellers aus README, Website und Handbuch.',
        ],
        items: [
          'Translation V/A: Spracherkennung, Untertitelübersetzung, Vertonung und Videosynthese in einem Lauf, mit Stapelwarteschlangen.',
          'Eigenständige Werkzeuge: Stapel-Spracherkennung in SRT, Vertonung aus Untertiteln oder Text und SRT-Übersetzung mit erhaltenen Zeitstempeln.',
          'Sprechererkennung und Mehrrollen-Vertonung, sodass verschiedene Sprecher verschiedene Stimmen erhalten können.',
          'Stimmklonen über eingebundene Modelle wie F5-TTS, CosyVoice und GPT-SoVITS.',
          'Pausen zur manuellen Korrektur nach Erkennung, Übersetzung und Vertonung im Einzelvideo-Modus.',
          'Synchronisierungsoptionen: Audio beschleunigen, Video verlangsamen und Untertitel einbetten.',
          'Laut Website mehr als 30 Kanäle für Erkennung, Übersetzung und Stimmen, lokal und online.',
          'Hilfswerkzeuge: Trennung von Stimme und Hintergrund, Zusammenführen von Video und Untertiteln, Abgleich von Audio und Video.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Laut der Seite zur Softwarelizenz laufen die Kernfunktionen auf Ihrem Computer und laden keine Videos oder Nutzungsdaten zum Entwickler hoch, aber jede Online-Engine, die Sie wählen, erhält Ihre Daten.**',
          'Die Seite sagt, dass Text, Audio oder Video, die an Drittdienste wie Microsoft Azure, OpenAI oder Edge TTS gehen, direkt von Ihrem Computer zu diesem Anbieter gelangen und dessen Richtlinie unterliegen. Laut Handbuch laufen Google Translate und Edge-TTS, die Standardeinstellungen, online ohne Registrierung. Der optionale Schritt der LLM-Korrektur nutzt laut Handbuch standardmäßig den DeepSeek-Kanal.',
          'Die App prüft über eine statische Datei auf der Website, ob neue Versionen vorliegen. Die Schaltfläche zur Fehlermeldung öffnet eine Forenseite, und laut dieser Seite wird nichts gesendet, solange Sie nicht auf Veröffentlichen klicken. Die Datenschutzerklärung gilt für die Dokumentations-Website: Sie nennt Protokolldaten, Cookies, Google AdSense und Analysedienste. PromptQuorum hat keinen Netzwerkverkehr mitgeschnitten.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**pyVideoTrans passt zu Menschen, die einen kostenlosen, konfigurierbaren Übersetzungs- und Vertonungsablauf wollen und die Wahl der Engines bewältigen können.**',
        ],
        items: [
          'Ersteller, die Untertitel und eine vertonte Tonspur für eigene Videos in einer anderen Sprache wollen.',
          'Lehrende und Teams, die Stapel-Transkription und Untertitelübersetzung mit manueller Korrektur wünschen.',
          'Technisch versierte Nutzer, die Kommandozeile, Browser-Oberfläche oder Docker-Betrieb wollen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht prüfen konnten',
        content: [
          '**pyVideoTrans passt in manchen Fällen schlechter, und mehrere Angaben bleiben ungeprüft.**',
        ],
        items: [
          'Nicht geeignet: Videos, die nur Musik oder stumme Bilder enthalten, die das Handbuch als nicht unterstützt nennt, oder Material, dessen eingebrannte Untertitel Sie entfernen wollen, was laut Handbuch nicht möglich ist.',
          'Nicht geeignet: macOS- oder Linux-Nutzer, die einen Installer möchten; beide brauchen eine Terminal-Einrichtung.',
          'Nicht geeignet: wer eine signierte, über einen Store verteilte Windows-App braucht, denn das Paket ist laut Anleitung des Projekts unsigniert und nicht Teil der GitHub-Release-Dateien.',
          'Ungeprüft: Qualität von Übersetzung, Vertonung und Timing, Geschwindigkeit und Sprachanzahl. PromptQuorum hat keine Tests durchgeführt und das Windows-Paket weder heruntergeladen noch geprüft.',
          'Ungeprüft: RAM- und Speicherbedarf über die angegebenen Werte hinaus sowie welche lokalen Modelle nur auf der CPU brauchbar schnell laufen.',
          'Ungeprüft: Lizenzen der einzelnen Modelle. Die Website fordert Nutzer auf, Lizenz und kommerzielle Bedingungen jedes Modellentwicklers selbst zu prüfen.',
          'Ungeprüft: die juristische Person hinter dem Projekt. Die Länderflagge für China im Verzeichnis stammt aus den Nutzungsbedingungen, die chinesisches Recht als anwendbares Recht nennen; eine Firmenadresse wurde nicht gefunden.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Wettbewerber und Alternativen',
        itemHeadings: true,
        content: [
          '**pyVideoTrans deckt die ganze Kette der Videoübersetzung ab, während die Alternativen unten auf Transkription oder Untertitel zielen.** PromptQuorum hat sie nicht praktisch verglichen; die Hinweise stammen aus der jeweiligen Rezension.',
        ],
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          { 'App': '[Buzz](/de/power-local-llm/buzz-captions-review)', 'Plattformen': 'Windows, macOS, Linux', 'Preis / Lizenz': 'Kostenlos / MIT', 'Wichtigster Unterschied': 'Whisper-Transkription und Übersetzung offline mit Untertitelexport; Schwerpunkt Untertitel' },
          { 'App': '[Subtitle Edit](/de/power-local-llm/subtitle-edit-review)', 'Plattformen': 'Windows, macOS, Linux', 'Preis / Lizenz': 'Kostenlos / MIT', 'Wichtigster Unterschied': 'Untertiteleditor mit optionaler lokaler Transkription und Auto-Übersetzung; Schwerpunkt Untertitel' },
          { 'App': '[Sablate](/de/power-local-llm/sablate-review)', 'Plattformen': 'Windows, macOS', 'Preis / Lizenz': 'Freemium / proprietär', 'Wichtigster Unterschied': 'Laut Hersteller transkribiert, übersetzt und brennt gestaltete Untertitel ein; Closed Source' },
        ],
        note: 'Prüfen Sie aktuellen Preis, Lizenz und Plattformen jeder App auf ihrer eigenen Seite, bevor Sie sich entscheiden.',
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Funktioniert pyVideoTrans komplett offline?',
            a: 'Nur wenn jede Stufe eine lokale Engine nutzt. Die Standardkanäle für Übersetzung und Vertonung sind online, und lokale Modelle werden beim ersten Einsatz heruntergeladen; ein erster Offline-Lauf setzt also voraus, dass die Dateien schon vorhanden sind.',
          },
          {
            q: 'Kann es meine Stimme klonen?',
            a: 'Die README nennt F5-TTS, CosyVoice und GPT-SoVITS als eingebundene Zero-Shot-Modelle zum Stimmklonen, und das Handbuch hat eine Seite zum Klonen der Originalstimme. Wie gut das Ergebnis ist, wurde hier nicht getestet.',
          },
          {
            q: 'Gibt es eine offizielle kostenpflichtige Version?',
            a: 'Laut Website nein. Sie erklärt, dass kostenpflichtige Kopien auf Shopping-Plattformen wie Taobao, Xianyu und Pinduoduo nicht offiziell sind und der Entwickler weder Verkäufe autorisiert noch daran verdient.',
          },
          {
            q: 'Darf ich das übersetzte Video auf YouTube hochladen?',
            a: 'Laut Website entscheiden Sie selbst, wohin Sie hochladen, und ob Sie den Videoinhalt erneut veröffentlichen dürfen, klären Sie mit dem Rechteinhaber. Sie rät außerdem, die Lizenzbedingungen jedes verwendeten Modells zu lesen.',
          },
          {
            q: 'Kann ich es auf einem Server oder im Browser betreiben?',
            a: 'Ja. Die README dokumentiert eine Kommandozeile mit Aufgaben für Videoübersetzung, Spracherkennung, Untertitelübersetzung und Text-to-Speech sowie eine Browser-WebUI und ein Docker-Image.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**pyVideoTrans lohnt einen Versuch, wenn Sie ein kostenloses Werkzeug für Transkription, Übersetzung und Vertonung suchen und eine praktische Einrichtung akzeptieren.**',
          'Auf dem Papier deckt es die ganze Kette ab: GPL-3.0-Code, viele lokale und Cloud-Engines, sprecherbezogene Vertonung, Anbindungen für Stimmklonen und drei Betriebsarten. Der Hersteller arbeitet aktiv daran, mit vier Releases in fünf Wochen.',
          'Die Kompromisse sind klar. Das Windows-Archiv ist laut Anleitung des Projekts unsigniert und außerhalb der GitHub-Release-Dateien gehostet, macOS und Linux brauchen ein Terminal, die Standardeinstellungen senden Text an Online-Dienste, und weder eine Firma noch eine Datenschutzerklärung für die App selbst wurde gefunden. PromptQuorum hat die Ausgabequalität nicht getestet. Probieren Sie es an einem kurzen Clip, dessen Rechte Sie besitzen, und prüfen Sie die offizielle Seite, bevor Sie sich auf einen neueren Build verlassen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von pyVideoTrans](https://pyvideotrans.com) — Startseite, Funktions- und FAQ-Aussagen, Hinweise zu Spenden und Werbung, geprüft am 20. November 2026.',
          '[Windows-Download-Seite](https://en.pyvideotrans.com/downpackage) — Windows-Paket, Patch-Paket und Hinweise zu macOS/Linux, geprüft am 20. November 2026.',
          '[Benutzerhandbuch](https://en.pyvideotrans.com/getstart) — Ablauf, Standardeinstellungen, Engine-Tabellen, Sicherheitshinweis und Modell-Download, geprüft am 20. November 2026.',
          '[Softwarelizenz und Servicevereinbarung](https://en.pyvideotrans.com/law) — Datenverarbeitung, Update-Prüfung, Fehlermeldung und Haftungsausschluss, geprüft am 20. November 2026.',
          '[Nutzungsbedingungen](https://en.pyvideotrans.com/xieyi) — Klausel zum anwendbaren Recht, geprüft am 20. November 2026.',
          '[Datenschutzerklärung](https://en.pyvideotrans.com/yinsizhengce) — Datenerhebung auf der Dokumentations-Website, geprüft am 20. November 2026.',
          '[GitHub-Repository](https://github.com/jianchang512/pyvideotrans) — Lizenz, README, Installationsschritte und letzter Commit am 20. November 2026, geprüft am 20. November 2026.',
          '[Release 4.19](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.19) — Veröffentlichungsdatum, Download-Links und Änderungen, geprüft am 20. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokale Sprach- und Audiowerkzeuge im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — Text-to-Speech, Spracherkennung und Sprachagenten nebeneinander.',
          '[Buzz im Test](/de/power-local-llm/buzz-captions-review) — Whisper-Transkription offline mit Untertitelexport.',
          '[Subtitle Edit im Test](/de/power-local-llm/subtitle-edit-review) — ein Untertiteleditor mit optionalen lokalen Engines.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-21',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/pyvideotrans-review-hero-es.webp',
    title: 'Reseña de pyVideoTrans: traducción de vídeo y doblaje con IA gratis',
    seoTitle: 'Reseña de pyVideoTrans: traductor de vídeo y doblaje',
    intro:
      'pyVideoTrans es una herramienta gratuita y de código abierto que traduce un vídeo a otro idioma en un solo flujo: reconocimiento de voz, traducción de subtítulos, doblaje con IA y montaje del vídeo final. Esta reseña se basa en el sitio web y la guía de usuario del proyecto, el repositorio de GitHub con su README y la última versión publicada en GitHub. PromptQuorum no ha probado la app.',
    metaDescription:
      'pyVideoTrans traduce y dobla vídeos gratis con motores locales o en la nube. Plataformas, instalación, GPU, licencia, privacidad y puntos sin verificar.',
    twitterDescription:
      'pyVideoTrans es una herramienta gratuita GPL-3.0 para traducir vídeo, subtítulos y doblaje con IA. Paquete para Windows, instalación desde el código, motores, privacidad y dudas.',
    audience:
      'Creadores de vídeo, docentes y aficionados que quieren convertir vídeos hablados en subtítulos y doblaje en otro idioma y que pueden elegir por sí mismos los motores de voz, traducción y síntesis',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'pyVideoTrans',
    targetKeywords: [
      'reseña de pyVideoTrans',
      'descargar pyVideoTrans',
      'software de traducción de vídeo',
      'doblaje de vídeo con IA',
      'traductor de vídeo local',
      'traducir subtítulos de vídeo sin conexión',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**pyVideoTrans es una herramienta gratuita y de código abierto con licencia GPL-3.0 para Windows, macOS y Linux que convierte un vídeo hablado en un vídeo traducido, doblado y subtitulado en un solo flujo.** Sus motores de voz, traducción y síntesis pueden funcionar en tu ordenador o en la nube, y los canales de traducción y doblaje predeterminados son servicios en línea.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es pyVideoTrans y para quién es?',
        answer:
          'pyVideoTrans es una herramienta de escritorio, línea de comandos y navegador que transcribe un vídeo, traduce los subtítulos, los dobla con una voz de texto a voz y reconstruye el vídeo. Es adecuada para quienes quieren un flujo gratuito de traducción y doblaje y pueden elegir y configurar los motores por su cuenta.',
        bullets: [
          'Plataformas: Windows (archivo preempaquetado), macOS y Linux (instalación desde el código en una terminal).',
          'Precio: gratis; los proveedores de API de terceros cobran aparte.',
          'Licencia: GPL-3.0.',
          'Versión: 4.19, última actualización upstream el 20 de noviembre de 2026 (última versión publicada el 17 de noviembre de 2026).',
          'Responsable: un proyecto personal del desarrollador tras la cuenta de GitHub jianchang512; no se nombra ninguna empresa.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Resumen', anchor: 'overview' },
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
            text: 'pyVideoTrans es una herramienta gratuita y de código abierto que escucha un vídeo, escribe y traduce sus subtítulos, los dobla con una voz sintética y crea un vídeo nuevo en el idioma de destino.',
          },
          {
            type: 'plain-terms',
            text: 'Piénsala como una cadena de montaje con cuatro estaciones: transcribir, traducir, hablar y unir. En cada estación eliges un modelo local o un servicio en línea, y en el modo de un solo vídeo puedes hacer una pausa para corregir el texto.',
          },
        ],
        items: [
          'Según la guía, los valores predeterminados son faster-whisper large-v3-turbo para el reconocimiento de voz, Google Translate para traducir y Edge-TTS para las voces; los dos últimos son servicios en línea.',
          'La clonación de voz se ofrece mediante modelos integrados como F5-TTS, CosyVoice y GPT-SoVITS, según el README.',
          'El paquete de Windows es un archivo portátil sin firma digital, según la guía, así que el software de seguridad puede marcarlo.',
          'macOS y Linux no tienen paquete; la guía describe una instalación en terminal con FFmpeg, uv y un clon del repositorio.',
          'PromptQuorum no ha probado la app, por lo que ninguna afirmación de aquí cubre la calidad de traducción, doblaje o sincronización.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Traducir y doblar un vídeo puede implicar derechos de autor y, con la clonación de voz, derechos sobre la voz de una persona. El sitio web dice que la parte legal del contenido del vídeo es un asunto entre tú y el titular de los derechos, así que comprueba los derechos antes de publicar. Es información general, no asesoramiento jurídico.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen',
        content: [
          '**pyVideoTrans convierte un vídeo de un idioma hablado a otro encadenando reconocimiento de voz, traducción de subtítulos, doblaje con texto a voz y síntesis del vídeo.**',
          'El proyecto está en GitHub bajo la cuenta jianchang512, y el sitio web lo describe como un proyecto personal de código abierto creado por interés, sin modelo de negocio y sin empresa nombrada. Según el sitio web, se mantiene desde octubre de 2023. La última versión es la 4.19, publicada el 17 de noviembre de 2026, y el último commit del repositorio, del 20 de noviembre de 2026, integró una corrección de traducción. Entre el 13 de octubre y el 17 de noviembre de 2026 aparecieron cuatro versiones, de la 4.16 a la 4.19, así que la actividad reciente es alta.',
          'Además del flujo completo de vídeo, la app ofrece herramientas independientes para transcribir en lote a subtítulos SRT, doblar subtítulos en lote y traducir SRT. El README añade identificación de hablantes, doblaje con varios roles, una herramienta para separar voz y fondo, la unión de vídeo y subtítulos y la alineación de audio y vídeo. Se puede manejar desde una ventana de escritorio, una línea de comandos o una interfaz de navegador.',
          'El README muestra dos banners de patrocinadores, y el sitio web dice que incluye algunos anuncios de Google y enlaces de patrocinio para pagar el servidor de documentación y el coste de tokens de prueba. Son declaraciones del responsable. PromptQuorum no ha ejecutado la app ni ha comparado su resultado con otras herramientas.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirla',
        content: [
          '**Los usuarios de Windows descargan un archivo preempaquetado, lo extraen y hacen doble clic en sp.exe; los de macOS y Linux la instalan desde el código fuente en una terminal.**',
          'La última versión de GitHub no tiene archivos adjuntos. Sus notas enlazan el archivo de Windows en Baidu Netdisk y en Hugging Face, y la página de descarga del sitio web lista las mismas compilaciones. La guía indica extraer el archivo en una ruta corta sin espacios ni caracteres chinos, evitar carpetas protegidas como Program Files y no ejecutar sp.exe desde dentro del archivo comprimido.',
        ],
        columns: ['Plataforma', 'Cómo conseguirla'],
        rows: [
          { 'Plataforma': '[Windows 10/11](https://en.pyvideotrans.com/downpackage)', 'Cómo conseguirla': '.7z (2.7 GB); ejecutar sp.exe; sin firma, según la guía' },
          { 'Plataforma': '[Parche para Windows](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.19)', 'Cómo conseguirla': 'Parche de 400 MB que sobrescribe un paquete anterior' },
          { 'Plataforma': '[macOS](https://en.pyvideotrans.com/getstart)', 'Cómo conseguirla': 'Desde el código: Homebrew, FFmpeg, uv, git clone, uv sync' },
          { 'Plataforma': '[Linux](https://en.pyvideotrans.com/getstart)', 'Cómo conseguirla': 'Desde el código: apt, FFmpeg, uv, git clone, uv sync' },
          { 'Plataforma': '[Docker / WebUI](https://github.com/jianchang512/pyvideotrans#readme)', 'Cómo conseguirla': 'docker build y run; interfaz web en el puerto 7860' },
          { 'Plataforma': '[Sitio web](https://pyvideotrans.com)', 'Cómo conseguirla': 'Sitio oficial con guía y página de descarga' },
          { 'Plataforma': '[Política de privacidad](https://en.pyvideotrans.com/yinsizhengce)', 'Cómo conseguirla': 'Cubre el sitio de documentación, no la app' },
          { 'Plataforma': '[Código fuente](https://github.com/jianchang512/pyvideotrans)', 'Cómo conseguirla': 'Repositorio de GitHub (GPL-3.0)' },
        ],
        note: 'macOS y Linux necesitan una terminal y una instalación de tipo desarrollador; el archivo de Windows es la única vía sin terminal.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**El sitio web dice que no hay hardware mínimo y que una GPU NVIDIA es opcional, pero no da ninguna cifra de RAM.**',
          'Los modelos locales no vienen en el paquete. La guía dice que solo está integrado el código que los llama y que los modelos se descargan la primera vez que se usan, así que el primer uso necesita conexión y espacio en disco además del archivo.',
        ],
        columns: ['Elemento', 'Cifra indicada'],
        rows: [
          { 'Elemento': 'Sistema operativo', 'Cifra indicada': 'Paquete para Windows 10/11; macOS y Linux desde el código' },
          { 'Elemento': 'GPU NVIDIA', 'Cifra indicada': 'Opcional; CUDA 12.8 y cuDNN 9.11 para acelerar' },
          { 'Elemento': 'Modelo Whisper más grande', 'Cifra indicada': 'large-v3 necesita 8 GB+ de VRAM' },
          { 'Elemento': 'Uso solo con CPU', 'Cifra indicada': 'Sitio web: funciona con o sin GPU NVIDIA' },
          { 'Elemento': 'RAM del sistema', 'Cifra indicada': 'No indicada' },
          { 'Elemento': 'Python (instalación desde el código)', 'Cifra indicada': 'El README recomienda 3.10' },
          { 'Elemento': 'FFmpeg', 'Cifra indicada': 'Necesario para instalar desde el código, según el README' },
        ],
        note: 'El uso intensivo de los canales gratuitos en línea puede toparse con límites de frecuencia, según la guía.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**La app combina una canalización de traducción de vídeo con un clic con herramientas independientes para cada etapa.** Los puntos siguientes son declaraciones del responsable tomadas del README, el sitio web y la guía.',
        ],
        items: [
          'Translation V/A: reconocimiento de voz, traducción de subtítulos, doblaje y síntesis del vídeo en una sola ejecución, con colas por lotes.',
          'Herramientas independientes: transcripción por lotes a SRT, doblaje a partir de subtítulos o texto y traducción de SRT que conserva las marcas de tiempo.',
          'Identificación de hablantes y doblaje con varios roles, de modo que cada hablante pueda tener una voz distinta.',
          'Clonación de voz mediante modelos integrados como F5-TTS, CosyVoice y GPT-SoVITS.',
          'Pausas para corrección manual tras el reconocimiento, la traducción y el doblaje en el modo de un solo vídeo.',
          'Opciones de sincronización: acelerar el audio, ralentizar el vídeo e incrustar subtítulos.',
          'Más de 30 canales de reconocimiento, traducción y voz, locales y en línea, según el sitio web.',
          'Utilidades: separación de voz y fondo, unión de vídeo y subtítulos, alineación de audio y vídeo.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**La página de la licencia del software dice que las funciones principales se ejecutan en tu ordenador y no suben tus vídeos ni datos de uso al desarrollador, pero cualquier motor en línea que elijas recibe tus datos.**',
          'Esa página dice que el texto, el audio o el vídeo enviados a servicios de terceros como Microsoft Azure, OpenAI o Edge TTS van directamente de tu ordenador a ese proveedor y quedan sujetos a su política. Según la guía, Google Translate y Edge-TTS, los valores predeterminados, funcionan en línea sin registro. El paso opcional de corrección con LLM usa por defecto el canal de DeepSeek, según la guía.',
          'La app comprueba si hay versiones nuevas mediante un archivo estático del sitio web. El botón de informe de errores abre una página de foro, y esa página dice que no se envía nada hasta que pulsas Publicar. La política de privacidad cubre el sitio de documentación: menciona registros, cookies, Google AdSense y servicios de analítica. PromptQuorum no capturó tráfico de red.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**pyVideoTrans encaja con quienes quieren un flujo de traducción y doblaje gratuito y configurable y pueden manejar la elección de motores.**',
        ],
        items: [
          'Creadores que quieren subtítulos y una pista doblada para sus propios vídeos en otro idioma.',
          'Docentes y equipos que quieren transcripción por lotes y traducción de subtítulos con corrección manual.',
          'Usuarios técnicos que quieren línea de comandos, interfaz de navegador o despliegue con Docker.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        content: [
          '**pyVideoTrans encaja peor en algunos casos, y varios detalles siguen sin verificar.**',
        ],
        items: [
          'No es para ti si: tus vídeos solo tienen música o imágenes mudas, que la guía lista como no compatibles, o quieres quitar subtítulos grabados en la imagen, algo que según la guía no puede hacer.',
          'No es para ti si: usas macOS o Linux y quieres un instalador; ambos necesitan instalación en terminal.',
          'No es para ti si: necesitas una app de Windows firmada y distribuida por una tienda, porque, según la guía del proyecto, el paquete no tiene firma y no forma parte de los archivos de la versión en GitHub.',
          'Sin verificar: calidad de traducción, doblaje y sincronización, velocidad y número de idiomas. PromptQuorum no hizo pruebas y no descargó ni inspeccionó el paquete de Windows.',
          'Sin verificar: necesidades de RAM y disco más allá de las cifras indicadas, y qué modelos locales funcionan con una velocidad útil solo con CPU.',
          'Sin verificar: licencias de cada modelo. El sitio web indica a los usuarios que consulten la licencia y los términos comerciales de cada desarrollador de modelos.',
          'Sin verificar: la entidad legal del responsable. La bandera de China del directorio procede de los Términos de uso, que nombran la ley china como ley aplicable; no se encontró ninguna dirección de empresa.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Competidores y alternativas',
        itemHeadings: true,
        content: [
          '**pyVideoTrans cubre toda la cadena de traducción de vídeo, mientras que las alternativas siguientes se centran en la transcripción o los subtítulos.** PromptQuorum no las ha comparado en la práctica; las notas proceden de la reseña de cada app.',
        ],
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[Buzz](/es/power-local-llm/buzz-captions-review)', 'Plataformas': 'Windows, macOS, Linux', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Transcripción y traducción Whisper sin conexión con exportación de subtítulos; centrada en subtítulos' },
          { 'App': '[Subtitle Edit](/es/power-local-llm/subtitle-edit-review)', 'Plataformas': 'Windows, macOS, Linux', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Editor de subtítulos con transcripción local y traducción automática opcionales; centrado en subtítulos' },
          { 'App': '[Sablate](/es/power-local-llm/sablate-review)', 'Plataformas': 'Windows, macOS', 'Precio / licencia': 'Freemium / propietaria', 'Diferencia clave': 'Según su responsable, transcribe, traduce y graba subtítulos con estilo; código cerrado' },
        ],
        note: 'Confirma el precio, la licencia y las plataformas actuales de cada app en su propia página antes de elegir.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿pyVideoTrans funciona totalmente sin conexión?',
            a: 'Solo si cada etapa usa un motor local. Los canales predeterminados de traducción y doblaje son en línea, y los modelos locales se descargan la primera vez que se usan, así que un primer uso sin conexión exige tener ya los archivos.',
          },
          {
            q: '¿Puede clonar mi voz?',
            a: 'El README lista F5-TTS, CosyVoice y GPT-SoVITS como modelos integrados de clonación de voz zero-shot, y la guía tiene una página sobre la clonación de la voz original. No se probó aquí la calidad del resultado.',
          },
          {
            q: '¿Existe una versión de pago oficial?',
            a: 'Según el sitio web, no. Afirma que las copias de pago en plataformas de compra como Taobao, Xianyu y Pinduoduo no son oficiales y que el desarrollador no autorizó ninguna venta ni obtiene beneficio de ellas.',
          },
          {
            q: '¿Puedo subir el vídeo traducido a YouTube?',
            a: 'Según el sitio web, dónde lo subas es decisión tuya, y si puedes volver a publicar el contenido del vídeo es un asunto entre tú y el titular de los derechos. También indica que leas las condiciones de licencia de cada modelo que uses.',
          },
          {
            q: '¿Puedo ejecutarlo en un servidor o en un navegador?',
            a: 'Sí. El README documenta una interfaz de línea de comandos con tareas de traducción de vídeo, voz a texto, traducción de subtítulos y texto a voz, además de una WebUI para el navegador y una imagen de Docker.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**pyVideoTrans merece una prueba si quieres una sola herramienta gratuita para transcribir, traducir y doblar y aceptas una instalación manual.**',
          'Sobre el papel cubre toda la cadena: código GPL-3.0, muchos motores locales y en la nube, doblaje por hablante, integraciones de clonación de voz y tres formas de ejecutarla. El responsable trabaja activamente en ella, con cuatro versiones en cinco semanas.',
          'Las contrapartidas son claras. El archivo de Windows no tiene firma, según la guía del proyecto, y se aloja fuera de los archivos de la versión en GitHub, macOS y Linux necesitan una terminal, los valores predeterminados envían texto a servicios en línea y no se encontró ni una empresa ni una política de privacidad de la propia app. PromptQuorum no ha probado la calidad del resultado. Pruébala con un clip corto cuyos derechos tengas y consulta el sitio oficial antes de fiarte de una compilación más reciente.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de pyVideoTrans](https://pyvideotrans.com) — página de inicio, declaraciones de funciones y preguntas frecuentes, notas sobre donaciones y anuncios, consultado el 20 de noviembre de 2026.',
          '[Página de descarga para Windows](https://en.pyvideotrans.com/downpackage) — paquete de Windows, paquete de parche e indicaciones para macOS/Linux, consultado el 20 de noviembre de 2026.',
          '[Guía de usuario](https://en.pyvideotrans.com/getstart) — flujo de trabajo, valores predeterminados, tablas de motores, aviso de seguridad y descarga de modelos, consultado el 20 de noviembre de 2026.',
          '[Acuerdo de licencia y servicio del software](https://en.pyvideotrans.com/law) — tratamiento de datos, comprobación de actualizaciones, informe de errores y descargo de responsabilidad, consultado el 20 de noviembre de 2026.',
          '[Términos de uso](https://en.pyvideotrans.com/xieyi) — cláusula de ley aplicable, consultado el 20 de noviembre de 2026.',
          '[Política de privacidad](https://en.pyvideotrans.com/yinsizhengce) — recopilación de datos en el sitio de documentación, consultado el 20 de noviembre de 2026.',
          '[Repositorio de GitHub](https://github.com/jianchang512/pyvideotrans) — licencia, README, pasos de instalación y último commit del 20 de noviembre de 2026, consultado el 20 de noviembre de 2026.',
          '[Versión 4.19](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.19) — fecha de publicación, enlaces de descarga y cambios, consultado el 20 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Herramientas locales de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — texto a voz, voz a texto y agentes de voz, lado a lado.',
          '[Reseña de Buzz](/es/power-local-llm/buzz-captions-review) — transcripción Whisper sin conexión y exportación de subtítulos.',
          '[Reseña de Subtitle Edit](/es/power-local-llm/subtitle-edit-review) — un editor de subtítulos con motores locales opcionales.',
          '[Directorio de software LLM local](/es/directory) — el catálogo completo de herramientas de IA locales.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-21',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/pyvideotrans-review-hero-fr.webp',
    title: 'Test de pyVideoTrans : traduction vidéo et doublage IA gratuits',
    seoTitle: 'Test de pyVideoTrans : traducteur vidéo et doublage',
    intro:
      "pyVideoTrans est un outil libre et gratuit qui traduit une vidéo dans une autre langue en une seule chaîne : reconnaissance vocale, traduction des sous-titres, doublage par IA et remontage de la vidéo finale. Ce test s'appuie sur le site web et le guide d'utilisation du projet, le dépôt GitHub avec son README et la dernière version publiée sur GitHub. PromptQuorum n'a pas testé l'application.",
    metaDescription:
      "pyVideoTrans traduit et double des vidéos gratuitement, en local ou en cloud. Plateformes, GPU, licence, confidentialité et points non vérifiés.",
    twitterDescription:
      "pyVideoTrans est un outil gratuit sous GPL-3.0 pour traduire des vidéos, des sous-titres et doubler par IA. Paquet Windows, installation depuis les sources, moteurs, confidentialité et questions ouvertes.",
    audience:
      "Créateurs de vidéos, enseignants et amateurs qui veulent transformer des vidéos parlées en sous-titres et en doublage dans une autre langue, et qui savent choisir eux-mêmes les moteurs de reconnaissance, de traduction et de voix",
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'pyVideoTrans',
    targetKeywords: [
      'test pyVideoTrans',
      'télécharger pyVideoTrans',
      'logiciel de traduction vidéo',
      'doublage vidéo par IA',
      'traducteur vidéo local',
      'traduire des sous-titres vidéo hors ligne',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      "**pyVideoTrans est un outil libre et gratuit sous licence GPL-3.0 pour Windows, macOS et Linux qui transforme une vidéo parlée en vidéo traduite, doublée et sous-titrée en une seule chaîne.** Ses moteurs de reconnaissance, de traduction et de voix peuvent tourner sur votre ordinateur ou dans le cloud, et les canaux de traduction et de doublage par défaut sont des services en ligne.",
    quickAnswerTop: {
      fr: {
        question: "Qu'est-ce que pyVideoTrans et à qui s'adresse-t-il ?",
        answer:
          "pyVideoTrans est un outil de bureau, en ligne de commande et en navigateur qui transcrit une vidéo, traduit les sous-titres, les double avec une voix de synthèse et reconstruit la vidéo. Il convient à ceux qui veulent une chaîne gratuite de traduction et de doublage et qui peuvent choisir et configurer eux-mêmes les moteurs.",
        bullets: [
          "Plateformes : Windows (archive préconstruite), macOS et Linux (installation depuis les sources dans un terminal).",
          "Prix : gratuit ; les fournisseurs d'API tiers facturent à part.",
          "Licence : GPL-3.0.",
          "Version : 4.19, dernière mise à jour en amont le 20 novembre 2026 (dernière version publiée le 17 novembre 2026).",
          "Éditeur : un projet personnel du développeur derrière le compte GitHub jianchang512 ; aucune entreprise n'est nommée.",
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Présentation', anchor: 'overview' },
      { label: "Comment l'obtenir", anchor: 'get-it' },
      { label: 'Configuration requise', anchor: 'requirements' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Confidentialité et flux de données', anchor: 'privacy' },
      { label: 'Pour qui', anchor: 'who-should-use' },
      { label: "Ce que nous n'avons pas pu vérifier", anchor: 'who-should-not-use' },
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
            text: "pyVideoTrans est un outil libre et gratuit qui écoute une vidéo, écrit et traduit ses sous-titres, les double avec une voix de synthèse et crée une nouvelle vidéo dans la langue cible.",
          },
          {
            type: 'plain-terms',
            text: "Imaginez une chaîne de montage à quatre postes : transcrire, traduire, parler, assembler. À chaque poste, vous choisissez un modèle local ou un service en ligne, et en mode vidéo unique vous pouvez faire une pause pour corriger le texte.",
          },
        ],
        items: [
          "D'après le guide, les réglages par défaut sont faster-whisper large-v3-turbo pour la reconnaissance vocale, Google Translate pour la traduction et Edge-TTS pour les voix ; les deux derniers sont des services en ligne.",
          "Le clonage de voix est proposé via des modèles intégrés comme F5-TTS, CosyVoice et GPT-SoVITS, selon le README.",
          "Le paquet Windows est une archive portable sans signature numérique, selon le guide ; un logiciel de sécurité peut donc le signaler.",
          "macOS et Linux n'ont pas de paquet ; le guide décrit une installation en terminal avec FFmpeg, uv et un clone du dépôt.",
          "PromptQuorum n'a pas testé l'application : aucune affirmation ici ne porte sur la qualité de la traduction, du doublage ou de la synchronisation.",
        ],
        callouts: [
          {
            type: 'note',
            text: "Traduire et doubler une vidéo peut toucher au droit d'auteur et, avec le clonage de voix, aux droits sur la voix d'une personne. Le site web indique que l'aspect juridique du contenu de la vidéo relève de vous et du titulaire des droits ; vérifiez donc les droits avant de publier. Il s'agit d'une information générale, pas d'un conseil juridique.",
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Présentation',
        content: [
          "**pyVideoTrans convertit une vidéo d'une langue parlée à une autre en enchaînant reconnaissance vocale, traduction des sous-titres, doublage par synthèse vocale et montage vidéo.**",
          "Le projet est hébergé sur GitHub sous le compte jianchang512, et le site web le décrit comme un projet personnel libre, créé par intérêt, sans modèle économique et sans entreprise nommée. D'après le site, il est maintenu depuis octobre 2023. La dernière version est la 4.19, publiée le 17 novembre 2026, et le dernier commit du dépôt, le 20 novembre 2026, a intégré une correction de traduction. Quatre versions, de la 4.16 à la 4.19, sont sorties entre le 13 octobre et le 17 novembre 2026 : l'activité récente est donc forte.",
          "Outre la chaîne vidéo complète, l'application propose des outils séparés pour la transcription par lots en sous-titres SRT, le doublage par lots de sous-titres et la traduction de SRT. Le README ajoute l'identification des locuteurs, le doublage multi-rôles, un outil de séparation de la voix et du fond, la fusion de la vidéo et des sous-titres et l'alignement audio-vidéo. On peut la piloter depuis une fenêtre de bureau, une ligne de commande ou une interface de navigateur.",
          "Le README affiche deux bannières de sponsors, et le site web dit comporter quelques publicités Google et des liens de parrainage pour payer le serveur de documentation et le coût des jetons de test. Ce sont des déclarations de l'éditeur. PromptQuorum n'a pas exécuté l'application et n'a pas comparé sa sortie à celle d'autres outils.",
        ],
      },
      getIt: {
        id: 'get-it',
        title: "Comment l'obtenir",
        content: [
          "**Les utilisateurs de Windows téléchargent une archive préconstruite, l'extraient et double-cliquent sur sp.exe ; ceux de macOS et de Linux l'installent depuis les sources dans un terminal.**",
          "La dernière version GitHub n'a aucun fichier joint. Ses notes renvoient vers l'archive Windows sur Baidu Netdisk et sur Hugging Face, et la page de téléchargement du site liste les mêmes versions. Le guide recommande d'extraire l'archive dans un chemin court, sans espaces ni caractères chinois, d'éviter les dossiers protégés comme Program Files et de ne pas lancer sp.exe depuis l'intérieur de l'archive.",
        ],
        columns: ['Plateforme', "Comment l'obtenir"],
        rows: [
          { 'Plateforme': '[Windows 10/11](https://en.pyvideotrans.com/downpackage)', "Comment l'obtenir": '.7z (2.7 Go) ; lancer sp.exe ; non signé selon le guide' },
          { 'Plateforme': '[Correctif Windows](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.19)', "Comment l'obtenir": 'Correctif de 400 Mo qui écrase un ancien paquet' },
          { 'Plateforme': '[macOS](https://en.pyvideotrans.com/getstart)', "Comment l'obtenir": 'Depuis les sources : Homebrew, FFmpeg, uv, git clone, uv sync' },
          { 'Plateforme': '[Linux](https://en.pyvideotrans.com/getstart)', "Comment l'obtenir": 'Depuis les sources : apt, FFmpeg, uv, git clone, uv sync' },
          { 'Plateforme': '[Docker / WebUI](https://github.com/jianchang512/pyvideotrans#readme)', "Comment l'obtenir": 'docker build et run ; interface web sur le port 7860' },
          { 'Plateforme': '[Site web](https://pyvideotrans.com)', "Comment l'obtenir": 'Site officiel avec guide et page de téléchargement' },
          { 'Plateforme': '[Politique de confidentialité](https://en.pyvideotrans.com/yinsizhengce)', "Comment l'obtenir": "Concerne le site de documentation, pas l'application" },
          { 'Plateforme': '[Code source](https://github.com/jianchang512/pyvideotrans)', "Comment l'obtenir": 'Dépôt GitHub (GPL-3.0)' },
        ],
        note: "macOS et Linux demandent un terminal et une installation de type développeur ; l'archive Windows est la seule voie sans terminal.",
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise',
        content: [
          "**Le site web indique qu'il n'y a pas de matériel minimal et qu'un GPU NVIDIA est facultatif, mais il ne donne aucun chiffre de RAM.**",
          "Les modèles locaux ne sont pas dans le paquet. Le guide explique que seul le code d'appel est intégré et que les modèles se téléchargent à la première utilisation ; le premier lancement demande donc une connexion et de l'espace disque en plus de l'archive.",
        ],
        columns: ['Élément', 'Chiffre indiqué'],
        rows: [
          { 'Élément': "Système d'exploitation", 'Chiffre indiqué': 'Paquet Windows 10/11 ; macOS et Linux depuis les sources' },
          { 'Élément': 'GPU NVIDIA', 'Chiffre indiqué': 'Facultatif ; CUDA 12.8 et cuDNN 9.11 pour accélérer' },
          { 'Élément': 'Plus grand modèle Whisper', 'Chiffre indiqué': 'large-v3 demande 8 Go+ de VRAM' },
          { 'Élément': 'Usage CPU seul', 'Chiffre indiqué': 'Site web : fonctionne avec ou sans GPU NVIDIA' },
          { 'Élément': 'RAM du système', 'Chiffre indiqué': 'Non indiquée' },
          { 'Élément': 'Python (depuis les sources)', 'Chiffre indiqué': 'Le README recommande 3.10' },
          { 'Élément': 'FFmpeg', 'Chiffre indiqué': "Nécessaire pour l'installation depuis les sources (README)" },
        ],
        note: "Une utilisation intensive des canaux en ligne gratuits peut se heurter à des limites de débit, selon le guide.",
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          "**L'application associe une chaîne de traduction vidéo en un clic à des outils autonomes pour chaque étape.** Les points ci-dessous sont des déclarations de l'éditeur tirées du README, du site web et du guide.",
        ],
        items: [
          "Translation V/A : reconnaissance vocale, traduction des sous-titres, doublage et montage vidéo en une seule exécution, avec files d'attente par lots.",
          "Outils autonomes : transcription par lots vers SRT, doublage à partir de sous-titres ou de texte et traduction de SRT qui conserve les horodatages.",
          "Identification des locuteurs et doublage multi-rôles, pour que chaque locuteur puisse avoir une voix différente.",
          "Clonage de voix via des modèles intégrés comme F5-TTS, CosyVoice et GPT-SoVITS.",
          "Pauses de correction manuelle après la reconnaissance, la traduction et le doublage en mode vidéo unique.",
          "Options de synchronisation : accélérer l'audio, ralentir la vidéo et incruster les sous-titres.",
          "Plus de 30 canaux de reconnaissance, de traduction et de voix, locaux et en ligne, selon le site web.",
          "Utilitaires : séparation de la voix et du fond, fusion de la vidéo et des sous-titres, alignement audio-vidéo.",
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          "**La page de licence du logiciel indique que les fonctions principales s'exécutent sur votre ordinateur et n'envoient ni vos vidéos ni vos données d'usage au développeur, mais tout moteur en ligne que vous choisissez reçoit vos données.**",
          "Cette page précise que le texte, l'audio ou la vidéo envoyés à des services tiers comme Microsoft Azure, OpenAI ou Edge TTS vont directement de votre ordinateur à ce fournisseur et relèvent de sa politique. Selon le guide, Google Translate et Edge-TTS, les réglages par défaut, fonctionnent en ligne sans inscription. L'étape facultative de correction par LLM utilise par défaut le canal DeepSeek, d'après le guide.",
          "L'application vérifie la présence de nouvelles versions via un fichier statique du site web. Le bouton de rapport d'erreur ouvre une page de forum, et cette page indique que rien n'est envoyé tant que vous n'appuyez pas sur Publier. La politique de confidentialité concerne le site de documentation : elle mentionne les journaux, les cookies, Google AdSense et des services d'analyse. PromptQuorum n'a pas capturé le trafic réseau.",
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        content: [
          "**pyVideoTrans convient à ceux qui veulent une chaîne de traduction et de doublage gratuite et configurable et qui savent gérer le choix des moteurs.**",
        ],
        items: [
          "Les créateurs qui veulent des sous-titres et une piste doublée pour leurs propres vidéos dans une autre langue.",
          "Les enseignants et les équipes qui veulent une transcription par lots et une traduction de sous-titres avec correction manuelle.",
          "Les utilisateurs techniques qui veulent une ligne de commande, une interface de navigateur ou un déploiement Docker.",
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: "Ce que nous n'avons pas pu vérifier",
        content: [
          "**pyVideoTrans convient moins bien dans certains cas, et plusieurs points restent non vérifiés.**",
        ],
        items: [
          "Ne convient pas : les vidéos qui ne contiennent que de la musique ou des images muettes, que le guide indique comme non prises en charge, ou les images dont vous voulez retirer les sous-titres incrustés, ce que le guide dit ne pas pouvoir faire.",
          "Ne convient pas : les utilisateurs de macOS ou de Linux qui veulent un installateur ; les deux demandent une installation en terminal.",
          "Ne convient pas : ceux qui ont besoin d'une application Windows signée et distribuée par un store, car, selon le guide du projet, le paquet n'est pas signé et ne fait pas partie des fichiers de la version GitHub.",
          "Non vérifié : qualité de la traduction, du doublage et de la synchronisation, vitesse et nombre de langues. PromptQuorum n'a réalisé aucun test et n'a ni téléchargé ni inspecté le paquet Windows.",
          "Non vérifié : besoins en RAM et en disque au-delà des chiffres indiqués, et quels modèles locaux tournent à une vitesse utilisable sur CPU seul.",
          "Non vérifié : licences des différents modèles. Le site web demande aux utilisateurs de consulter la licence et les conditions commerciales de chaque développeur de modèle.",
          "Non vérifié : l'entité juridique de l'éditeur. Le drapeau de la Chine dans l'annuaire provient des conditions d'utilisation, qui désignent le droit chinois comme droit applicable ; aucune adresse d'entreprise n'a été trouvée.",
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Concurrents et alternatives',
        itemHeadings: true,
        content: [
          "**pyVideoTrans couvre toute la chaîne de traduction vidéo, alors que les alternatives ci-dessous se concentrent sur la transcription ou les sous-titres.** PromptQuorum ne les a pas comparées en pratique ; les notes viennent du test de chaque application.",
        ],
        columns: ['App', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'App': '[Buzz](/fr/power-local-llm/buzz-captions-review)', 'Plateformes': 'Windows, macOS, Linux', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Transcription et traduction Whisper hors ligne avec export de sous-titres ; centré sur les sous-titres' },
          { 'App': '[Subtitle Edit](/fr/power-local-llm/subtitle-edit-review)', 'Plateformes': 'Windows, macOS, Linux', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Éditeur de sous-titres avec transcription locale et traduction auto facultatives ; centré sur les sous-titres' },
          { 'App': '[Sablate](/fr/power-local-llm/sablate-review)', 'Plateformes': 'Windows, macOS', 'Prix / licence': 'Freemium / propriétaire', 'Différence clé': 'Selon son éditeur, transcrit, traduit et incruste des sous-titres stylisés ; code fermé' },
        ],
        note: "Vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre page avant de choisir.",
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'pyVideoTrans fonctionne-t-il entièrement hors ligne ?',
            a: "Seulement si chaque étape utilise un moteur local. Les canaux de traduction et de doublage par défaut sont en ligne, et les modèles locaux se téléchargent à la première utilisation ; un premier lancement hors ligne suppose donc que les fichiers soient déjà en place.",
          },
          {
            q: 'Peut-il cloner ma voix ?',
            a: "Le README cite F5-TTS, CosyVoice et GPT-SoVITS comme modèles intégrés de clonage de voix zero-shot, et le guide consacre une page au clonage de la voix d'origine. La qualité du résultat n'a pas été testée ici.",
          },
          {
            q: 'Existe-t-il une version payante officielle ?',
            a: "Selon le site web, non. Il affirme que les copies payantes sur des plateformes de vente comme Taobao, Xianyu et Pinduoduo ne sont pas officielles et que le développeur n'a autorisé aucune vente et n'en tire aucun profit.",
          },
          {
            q: 'Puis-je publier la vidéo traduite sur YouTube ?',
            a: "Selon le site web, l'endroit où vous publiez est votre choix, et le droit de republier le contenu de la vidéo relève de vous et du titulaire des droits. Il invite aussi à lire les conditions de licence de chaque modèle utilisé.",
          },
          {
            q: "Puis-je l'exécuter sur un serveur ou dans un navigateur ?",
            a: "Oui. Le README documente une interface en ligne de commande avec des tâches de traduction vidéo, de reconnaissance vocale, de traduction de sous-titres et de synthèse vocale, ainsi qu'une WebUI de navigateur et une image Docker.",
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          "**pyVideoTrans vaut l'essai si vous voulez un seul outil gratuit pour transcrire, traduire et doubler et que vous acceptez une installation manuelle.**",
          "Sur le papier, il couvre toute la chaîne : code GPL-3.0, nombreux moteurs locaux et cloud, doublage par locuteur, intégrations de clonage de voix et trois façons de l'exécuter. L'éditeur y travaille activement, avec quatre versions en cinq semaines.",
          "Les compromis sont clairs. L'archive Windows n'est, selon le guide du projet, pas signée et hébergée en dehors des fichiers de la version GitHub, macOS et Linux demandent un terminal, les réglages par défaut envoient du texte à des services en ligne, et ni entreprise ni politique de confidentialité de l'application elle-même n'ont été trouvées. PromptQuorum n'a pas testé la qualité de la sortie. Essayez-le sur un court extrait dont vous détenez les droits et consultez le site officiel avant de vous fier à une version plus récente.",
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          "[Site web de pyVideoTrans](https://pyvideotrans.com) — page d'accueil, déclarations sur les fonctions et la FAQ, notes sur les dons et la publicité, consulté le 20 novembre 2026.",
          "[Page de téléchargement Windows](https://en.pyvideotrans.com/downpackage) — paquet Windows, paquet de correctif et indications pour macOS/Linux, consulté le 20 novembre 2026.",
          "[Guide d'utilisation](https://en.pyvideotrans.com/getstart) — flux de travail, réglages par défaut, tableaux de moteurs, avis de sécurité et téléchargement des modèles, consulté le 20 novembre 2026.",
          "[Contrat de licence et de service du logiciel](https://en.pyvideotrans.com/law) — traitement des données, vérification des mises à jour, rapport d'erreur et clause de non-responsabilité, consulté le 20 novembre 2026.",
          "[Conditions d'utilisation](https://en.pyvideotrans.com/xieyi) — clause de droit applicable, consulté le 20 novembre 2026.",
          "[Politique de confidentialité](https://en.pyvideotrans.com/yinsizhengce) — collecte de données sur le site de documentation, consulté le 20 novembre 2026.",
          "[Dépôt GitHub](https://github.com/jianchang512/pyvideotrans) — licence, README, étapes d'installation et dernier commit du 20 novembre 2026, consulté le 20 novembre 2026.",
          "[Version 4.19](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.19) — date de publication, liens de téléchargement et changements, consulté le 20 novembre 2026.",
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          "[Outils vocaux et audio locaux comparés](/fr/power-local-llm/local-llm-voice-audio-compared) — synthèse vocale, reconnaissance vocale et agents vocaux côte à côte.",
          "[Test de Buzz](/fr/power-local-llm/buzz-captions-review) — transcription Whisper hors ligne et export de sous-titres.",
          "[Test de Subtitle Edit](/fr/power-local-llm/subtitle-edit-review) — un éditeur de sous-titres avec moteurs locaux facultatifs.",
          "[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d'IA locaux.",
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-21',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/pyvideotrans-review-hero-ja.webp',
    title: 'pyVideoTrans レビュー：無料の動画翻訳とAI吹き替え',
    seoTitle: 'pyVideoTrans レビュー：無料の動画翻訳・吹き替え',
    intro:
      'pyVideoTransは、動画を別の言語へ一括で翻訳する無料のオープンソースツールです。音声認識、字幕翻訳、AI吹き替え、完成動画の再合成までを1つの流れで行います。このレビューは、プロジェクトのWebサイトとユーザーガイド、GitHubリポジトリとREADME、GitHubの最新リリースに基づいています。PromptQuorumはこのアプリをテストしていません。',
    metaDescription:
      'pyVideoTransは動画の翻訳と吹き替えを無料で行います。対応OS、導入手順、GPU要件、ライセンス、プライバシーと未確認事項をまとめました。',
    twitterDescription:
      'pyVideoTransは動画翻訳、字幕、AI吹き替えのための無料GPL-3.0ツールです。Windows版、ソース導入、ローカル／クラウドのエンジン、プライバシー、未確認事項。',
    audience:
      '話し声のある動画を別の言語の字幕と吹き替えに変えたい、動画制作者、教育関係者、愛好家で、音声認識・翻訳・音声のエンジンを自分で選べる方',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'pyVideoTrans',
    targetKeywords: [
      'pyVideoTrans レビュー',
      'pyVideoTrans ダウンロード',
      '動画翻訳ソフト',
      'AI動画吹き替え',
      'ローカル動画翻訳',
      '動画字幕 オフライン翻訳',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**pyVideoTransは、Windows、macOS、Linux向けの無料のGPL-3.0オープンソースツールで、話し声のある動画を、翻訳・吹き替え・字幕付きの動画に1つの流れで変換します。** 音声認識、翻訳、音声のエンジンはPC上でもクラウドでも動かせますが、既定の翻訳と吹き替えのチャンネルはオンラインサービスです。',
    quickAnswerTop: {
      ja: {
        question: 'pyVideoTransとは何で、誰向けですか？',
        answer:
          'pyVideoTransは、デスクトップ、コマンドライン、ブラウザで使えるツールで、動画を文字起こしし、字幕を翻訳し、音声合成の声で吹き替えて、動画を組み直します。無料の翻訳・吹き替えの流れが欲しく、エンジンを自分で選んで設定できる人に向いています。',
        bullets: [
          '対応OS：Windows（パッケージ済みアーカイブ）、macOSとLinux（ターミナルでソースから導入）。',
          '価格：無料。外部APIの料金は各提供元が別に請求します。',
          'ライセンス：GPL-3.0。',
          'バージョン：4.19、上流の最終更新は2026年11月20日（最新リリースは2026年11月17日）。',
          '開発元：GitHubアカウントjianchang512の開発者による個人プロジェクト。企業名は記載なし。',
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
            text: 'pyVideoTransは、動画の音声を聞き取って字幕を作り、翻訳し、合成音声で吹き替えて、対象言語の新しい動画を作る無料のオープンソースツールです。',
          },
          {
            type: 'plain-terms',
            text: '4つの工程が並んだ組み立てラインを思い浮かべてください。文字起こし、翻訳、音声化、結合です。各工程でローカルのモデルかオンラインサービスを選べ、動画を1本だけ処理するモードでは途中で止めて文章を直せます。',
          },
        ],
        items: [
          'ガイドによると、既定は音声認識がfaster-whisper large-v3-turbo、翻訳がGoogle翻訳、音声がEdge-TTSです。後ろの2つはオンラインサービスです。',
          'READMEによると、ボイスクローンはF5-TTS、CosyVoice、GPT-SoVITSなどの統合モデルで提供されます。',
          'ガイドによると、Windows版は電子署名のないポータブルなアーカイブで、セキュリティソフトが検知する場合があります。',
          'macOSとLinuxにはパッケージがなく、ガイドはFFmpeg、uv、リポジトリのクローンを使うターミナルでの導入を示しています。',
          'PromptQuorumはアプリをテストしていないため、翻訳・吹き替え・タイミングの品質については何も述べていません。',
        ],
        callouts: [
          {
            type: 'note',
            text: '動画の翻訳や吹き替えには著作権が関わることがあり、ボイスクローンでは本人の声の権利も関わります。Webサイトは、動画の内容に関する法的な点はあなたと権利者の間の問題だと述べています。公開の前に権利を確認してください。これは一般的な情報であり、法的助言ではありません。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**pyVideoTransは、音声認識、字幕翻訳、音声合成による吹き替え、動画の合成をつなげて、動画をある話し言葉から別の言語へ変換します。**',
          'プロジェクトはGitHubのjianchang512アカウントにあり、Webサイトは、興味から始めた個人のオープンソースプロジェクトで、事業モデルはなく、企業名も示されていないと説明しています。Webサイトによると、2023年10月から保守されています。最新リリースは2026年11月17日公開のバージョン4.19で、リポジトリの最後のコミット（2026年11月20日）は翻訳の修正を取り込んだものです。2026年10月13日から11月17日の間に4.16から4.19まで4つのリリースが出ており、最近の動きは活発です。',
          '動画全体の処理に加えて、SRT字幕へのバッチ音声認識、字幕のバッチ吹き替え、SRTの翻訳を個別のツールとして備えています。READMEは、話者の識別、複数役の吹き替え、声と背景音の分離ツール、動画と字幕の結合、音声と映像の位置合わせも挙げています。デスクトップのウィンドウ、コマンドライン、ブラウザの画面から操作できます。',
          'READMEにはスポンサーのバナーが2つあり、Webサイトは、ドキュメントサーバーとテスト用トークンの費用をまかなうために、Google広告と支援リンクを置いていると述べています。これらは開発元の説明です。PromptQuorumはアプリを実行しておらず、出力を他のツールと比較してもいません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Windowsではパッケージ済みアーカイブをダウンロードして展開し、sp.exeをダブルクリックします。macOSとLinuxではターミナルでソースから導入します。**',
          '最新のGitHubリリースには添付ファイルがありません。リリースノートがBaidu NetdiskとHugging FaceのWindows用アーカイブを案内し、Webサイトのダウンロードページも同じビルドを載せています。ガイドは、スペースや中国語の文字を含まない短いフォルダーに展開すること、Program Filesのような保護フォルダーを避けること、アーカイブの中からsp.exeを実行しないことを求めています。',
        ],
        columns: ['プラットフォーム', '入手方法'],
        rows: [
          { 'プラットフォーム': '[Windows 10/11](https://en.pyvideotrans.com/downpackage)', '入手方法': '.7z（2.7 GB）。sp.exeを実行。署名なし（ガイドによる）' },
          { 'プラットフォーム': '[Windows用パッチ](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.19)', '入手方法': '旧パッケージに上書きする400 MBのパッチ' },
          { 'プラットフォーム': '[macOS](https://en.pyvideotrans.com/getstart)', '入手方法': 'ソース導入：Homebrew、FFmpeg、uv、git clone、uv sync' },
          { 'プラットフォーム': '[Linux](https://en.pyvideotrans.com/getstart)', '入手方法': 'ソース導入：apt、FFmpeg、uv、git clone、uv sync' },
          { 'プラットフォーム': '[Docker / WebUI](https://github.com/jianchang512/pyvideotrans#readme)', '入手方法': 'docker buildとrun。ブラウザ画面はポート7860' },
          { 'プラットフォーム': '[Webサイト](https://pyvideotrans.com)', '入手方法': 'ガイドとダウンロードページのある公式サイト' },
          { 'プラットフォーム': '[プライバシーポリシー](https://en.pyvideotrans.com/yinsizhengce)', '入手方法': 'ドキュメントサイトが対象で、アプリは対象外' },
          { 'プラットフォーム': '[ソースコード](https://github.com/jianchang512/pyvideotrans)', '入手方法': 'GitHubリポジトリ（GPL-3.0）' },
        ],
        note: 'macOSとLinuxはターミナルと開発者向けの導入が必要です。ターミナルなしで使えるのはWindows版のアーカイブだけです。',
      },
      requirements: {
        id: 'requirements',
        title: '動作要件',
        content: [
          '**Webサイトは、最低ハードウェア要件はなくNVIDIA GPUは任意だと述べていますが、RAMの数値は示していません。**',
          'ローカルモデルはパッケージに入っていません。ガイドによると、組み込まれているのは呼び出し用のコードだけで、モデルは初めて選んだときにダウンロードされます。そのため初回の実行には接続と、アーカイブ以外のディスク容量が必要です。',
        ],
        columns: ['項目', '記載されている数値'],
        rows: [
          { '項目': 'OS', '記載されている数値': 'Windows 10/11用パッケージ。macOS・Linuxはソースから' },
          { '項目': 'NVIDIA GPU', '記載されている数値': '任意。高速化にはCUDA 12.8とcuDNN 9.11' },
          { '項目': '最大のWhisperモデル', '記載されている数値': 'large-v3は8 GB以上のVRAMが必要' },
          { '項目': 'CPUのみでの利用', '記載されている数値': 'Webサイト：NVIDIA GPUの有無を問わず動作' },
          { '項目': 'システムRAM', '記載されている数値': '記載なし' },
          { '項目': 'Python（ソース導入）', '記載されている数値': 'READMEは3.10を推奨' },
          { '項目': 'FFmpeg', '記載されている数値': 'READMEによるとソース導入で必要' },
        ],
        note: 'ガイドによると、無料のオンラインチャンネルを多用すると、回数制限がかかることがあります。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**ワンクリックの動画翻訳の流れと、各工程を単独で使えるツールを組み合わせています。** 以下は、README、Webサイト、ガイドにある開発元の説明です。',
        ],
        items: [
          'Translation V/A：音声認識、字幕翻訳、吹き替え、動画合成を1回の実行で処理します。バッチのキューにも対応します。',
          '単独ツール：SRTへのバッチ音声認識、字幕やテキストからの吹き替え、タイムスタンプを保つSRT翻訳。',
          '話者の識別と複数役の吹き替え。話者ごとに別の声を割り当てられます。',
          'F5-TTS、CosyVoice、GPT-SoVITSなどの統合モデルによるボイスクローン。',
          '動画を1本だけ処理するモードでは、認識・翻訳・吹き替えの各段階の後に止めて手動で修正できます。',
          '同期のオプション：音声の高速化、動画の低速化、字幕の埋め込み。',
          'Webサイトによると、ローカルとオンラインを合わせて30以上の認識・翻訳・音声チャンネル。',
          '補助ツール：声と背景音の分離、動画と字幕の結合、音声と映像の位置合わせ。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**ソフトウェアのライセンスのページによると、中核機能はPC上で動き、動画や利用データを開発者へアップロードしません。ただし、選んだオンラインエンジンにはデータが送られます。**',
          '同ページは、Microsoft Azure、OpenAI、Edge TTSなどの外部サービスに送るテキスト、音声、動画は、PCから直接その提供元へ送られ、その提供元のポリシーに従うと述べています。ガイドによると、既定のGoogle翻訳とEdge-TTSは、登録なしでオンラインで動作します。任意のLLM補正の工程は、ガイドによると既定でDeepSeekのチャンネルを使います。',
          'アプリは、Webサイト上の静的ファイルで新しいバージョンの有無を確認します。エラー報告ボタンはフォーラムのページを開き、そのページによると、「公開」を押さない限り何も送信されません。プライバシーポリシーはドキュメントサイトが対象で、ログ、Cookie、Google AdSense、分析サービスに触れています。PromptQuorumはネットワーク通信を取得していません。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**pyVideoTransは、無料で設定の自由度が高い翻訳・吹き替えの流れが欲しく、エンジンの選択をこなせる人に向いています。**',
        ],
        items: [
          '自分の動画に別の言語の字幕と吹き替えの音声を付けたい制作者。',
          '手動で修正しながら、バッチで文字起こしと字幕翻訳をしたい教育関係者やチーム。',
          'コマンドライン、ブラウザ画面、Dockerでの運用が欲しい技術者。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        content: [
          '**pyVideoTransは向かない場面もあり、未確認の点も複数あります。**',
        ],
        items: [
          '向かない：音楽だけ、または無音の映像だけの動画（ガイドは非対応と記載）、および映像に焼き込まれた字幕を消したい場合（ガイドは不可と記載）。',
          '向かない：インストーラーを求めるmacOSやLinuxの利用者。どちらもターミナルでの導入が必要です。',
          '向かない：署名済みでストア配布のWindowsアプリが必要な人。プロジェクトのガイドによるとパッケージは署名がなく、GitHubのリリースファイルにも含まれません。',
          '未確認：翻訳、吹き替え、タイミングの品質、速度、対応言語数。PromptQuorumはテストを行わず、Windows版パッケージのダウンロードも検査もしていません。',
          '未確認：記載された数値以外のRAMとディスクの必要量、およびCPUのみで実用的な速度が出るローカルモデル。',
          '未確認：個々のモデルのライセンス。Webサイトは、各モデル開発元のライセンスと商用条件を利用者が確認するよう求めています。',
          '未確認：開発元の法人。ディレクトリの中国の旗は、準拠法として中国法を挙げる利用規約に基づくもので、会社の住所は見つかっていません。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: '競合と代替ツール',
        itemHeadings: true,
        content: [
          '**pyVideoTransは動画翻訳の全工程を扱いますが、下の代替ツールは文字起こしや字幕が中心です。** PromptQuorumは実機で比較しておらず、メモは各アプリのレビューに基づきます。',
        ],
        columns: ['アプリ', '対応OS', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[Buzz](/ja/power-local-llm/buzz-captions-review)', '対応OS': 'Windows、macOS、Linux', '価格／ライセンス': '無料／MIT', '主な違い': 'Whisperによるオフラインの文字起こしと翻訳、字幕の書き出し。字幕が中心' },
          { 'アプリ': '[Subtitle Edit](/ja/power-local-llm/subtitle-edit-review)', '対応OS': 'Windows、macOS、Linux', '価格／ライセンス': '無料／MIT', '主な違い': '任意のローカル文字起こしと自動翻訳を備えた字幕エディタ。字幕が中心' },
          { 'アプリ': '[Sablate](/ja/power-local-llm/sablate-review)', '対応OS': 'Windows、macOS', '価格／ライセンス': 'フリーミアム／プロプライエタリ', '主な違い': '開発元によると、文字起こし、翻訳、装飾した字幕の焼き込み。クローズドソース' },
        ],
        note: '選ぶ前に、各アプリの最新の価格、ライセンス、対応OSをそれぞれの公式ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'pyVideoTransは完全にオフラインで動きますか？',
            a: 'すべての工程でローカルのエンジンを使う場合に限ります。既定の翻訳と吹き替えのチャンネルはオンラインで、ローカルモデルは初回利用時にダウンロードされます。そのため、最初からオフラインで動かすには、ファイルを事前に用意しておく必要があります。',
          },
          {
            q: '自分の声をクローンできますか？',
            a: 'READMEは、F5-TTS、CosyVoice、GPT-SoVITSをゼロショットのボイスクローン用の統合モデルとして挙げており、ガイドにも元の声をクローンするページがあります。結果の品質はここでは試していません。',
          },
          {
            q: '公式の有料版はありますか？',
            a: 'Webサイトによると、ありません。Taobao、Xianyu、Pinduoduoなどの販売プラットフォームにある有料のコピーは公式ではなく、開発者は販売を許可しておらず、そこから利益も得ていないと述べています。',
          },
          {
            q: '翻訳した動画をYouTubeに投稿できますか？',
            a: 'Webサイトによると、どこに投稿するかはあなたが決めることで、動画の内容を再公開してよいかどうかはあなたと権利者の間の問題です。使うモデルのライセンス条件を読むようにも求めています。',
          },
          {
            q: 'サーバーやブラウザで動かせますか？',
            a: 'はい。READMEは、動画翻訳、音声認識、字幕翻訳、音声合成のタスクを持つコマンドラインインターフェース、ブラウザ用のWebUI、Dockerイメージを記載しています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**pyVideoTransは、文字起こし、翻訳、吹き替えを1つの無料ツールで行いたく、手間のかかる導入を受け入れられるなら試す価値があります。**',
          '紙の上では全工程をカバーしています。GPL-3.0のコード、多くのローカル／クラウドのエンジン、話者ごとの吹き替え、ボイスクローンの連携、3通りの実行方法です。開発元は活発に作業しており、5週間で4回のリリースがありました。',
          '代償も明確です。Windows版アーカイブはプロジェクトのガイドによると署名がなく、GitHubのリリースファイルの外に置かれています。macOSとLinuxはターミナルが必要で、既定ではテキストがオンラインサービスへ送られ、アプリ自体の企業情報やプライバシーポリシーは見つかりませんでした。PromptQuorumは出力品質をテストしていません。権利を持つ短いクリップで試し、新しいビルドを使う前に公式サイトを確認してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[pyVideoTransのWebサイト](https://pyvideotrans.com) — トップページ、機能とFAQの説明、寄付と広告に関する記載。2026年11月20日に確認。',
          '[Windows用ダウンロードページ](https://en.pyvideotrans.com/downpackage) — Windows用パッケージ、パッチ、macOS／Linuxの案内。2026年11月20日に確認。',
          '[ユーザーガイド](https://en.pyvideotrans.com/getstart) — 作業の流れ、既定値、エンジン一覧、セキュリティの注意、モデルのダウンロード。2026年11月20日に確認。',
          '[ソフトウェアライセンスおよびサービス契約](https://en.pyvideotrans.com/law) — データの扱い、更新の確認、エラー報告、免責。2026年11月20日に確認。',
          '[利用規約](https://en.pyvideotrans.com/xieyi) — 準拠法の条項。2026年11月20日に確認。',
          '[プライバシーポリシー](https://en.pyvideotrans.com/yinsizhengce) — ドキュメントサイトでのデータ収集。2026年11月20日に確認。',
          '[GitHubリポジトリ](https://github.com/jianchang512/pyvideotrans) — ライセンス、README、導入手順、2026年11月20日の最後のコミット。2026年11月20日に確認。',
          '[リリース4.19](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.19) — 公開日、ダウンロードリンク、変更点。2026年11月20日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカル音声ツール徹底比較](/ja/power-local-llm/local-llm-voice-audio-compared) — 音声合成、音声認識、音声エージェントを並べて比較。',
          '[Buzzレビュー](/ja/power-local-llm/buzz-captions-review) — オフラインのWhisper文字起こしと字幕の書き出し。',
          '[Subtitle Editレビュー](/ja/power-local-llm/subtitle-edit-review) — 任意のローカルエンジンを備えた字幕エディタ。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-21',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/pyvideotrans-review-hero-pt.webp',
    title: 'Análise do pyVideoTrans: tradução de vídeo e dublagem com IA grátis',
    seoTitle: 'Análise do pyVideoTrans: tradutor e dublagem de vídeo',
    intro:
      'O pyVideoTrans é uma ferramenta gratuita e de código aberto que traduz um vídeo para outro idioma em um só fluxo: reconhecimento de fala, tradução de legendas, dublagem com IA e remontagem do vídeo final. Esta análise se baseia no site e no guia do usuário do projeto, no repositório do GitHub com o README e na versão mais recente publicada no GitHub. A PromptQuorum não testou o app.',
    metaDescription:
      'O pyVideoTrans traduz e dubla vídeos de graça, com mecanismos locais ou na nuvem. Plataformas, GPU, licença, privacidade e pontos não verificados.',
    twitterDescription:
      'O pyVideoTrans é uma ferramenta gratuita GPL-3.0 para tradução de vídeo, legendas e dublagem com IA. Pacote para Windows, instalação pelo código, mecanismos, privacidade e dúvidas.',
    audience:
      'Criadores de vídeo, professores e entusiastas que querem transformar vídeos falados em legendas e dublagem em outro idioma e que conseguem escolher por conta própria os mecanismos de fala, tradução e voz',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'pyVideoTrans',
    targetKeywords: [
      'análise do pyVideoTrans',
      'baixar pyVideoTrans',
      'software de tradução de vídeo',
      'dublagem de vídeo com IA',
      'tradutor de vídeo local',
      'traduzir legendas de vídeo offline',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O pyVideoTrans é uma ferramenta gratuita e de código aberto, sob licença GPL-3.0, para Windows, macOS e Linux, que transforma um vídeo falado em um vídeo traduzido, dublado e legendado em um só fluxo.** Seus mecanismos de fala, tradução e voz podem rodar no seu computador ou na nuvem, e os canais padrão de tradução e dublagem são serviços online.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o pyVideoTrans e para quem ele serve?',
        answer:
          'O pyVideoTrans é uma ferramenta para desktop, linha de comando e navegador que transcreve um vídeo, traduz as legendas, dubla com uma voz de síntese de fala e reconstrói o vídeo. Serve para quem quer um fluxo gratuito de tradução e dublagem e consegue escolher e configurar os mecanismos por conta própria.',
        bullets: [
          'Plataformas: Windows (arquivo pré-empacotado), macOS e Linux (instalação pelo código-fonte em um terminal).',
          'Preço: grátis; provedores de API de terceiros cobram à parte.',
          'Licença: GPL-3.0.',
          'Versão: 4.19, última atualização upstream em 20 de novembro de 2026 (versão mais recente publicada em 17 de novembro de 2026).',
          'Responsável: um projeto pessoal do desenvolvedor por trás da conta do GitHub jianchang512; nenhuma empresa é citada.',
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
            text: 'O pyVideoTrans é uma ferramenta gratuita e de código aberto que escuta um vídeo, escreve e traduz suas legendas, dubla com uma voz sintética e cria um vídeo novo no idioma de destino.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como uma linha de montagem com quatro estações: transcrever, traduzir, falar e juntar. Em cada estação você escolhe um modelo local ou um serviço online, e no modo de vídeo único é possível pausar para corrigir o texto.',
          },
        ],
        items: [
          'Segundo o guia, os padrões são faster-whisper large-v3-turbo para reconhecimento de fala, Google Translate para tradução e Edge-TTS para as vozes; os dois últimos são serviços online.',
          'A clonagem de voz é oferecida por modelos integrados como F5-TTS, CosyVoice e GPT-SoVITS, segundo o README.',
          'O pacote do Windows é um arquivo portátil sem assinatura digital, segundo o guia, então o antivírus pode sinalizá-lo.',
          'macOS e Linux não têm pacote; o guia descreve uma instalação em terminal com FFmpeg, uv e um clone do repositório.',
          'A PromptQuorum não testou o app, então nenhuma afirmação aqui cobre a qualidade de tradução, dublagem ou sincronização.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Traduzir e dublar um vídeo pode envolver direitos autorais e, com a clonagem de voz, direitos sobre a voz de uma pessoa. O site diz que a parte jurídica do conteúdo do vídeo é um assunto entre você e o detentor dos direitos, então confira os direitos antes de publicar. Esta é uma informação geral, não aconselhamento jurídico.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O pyVideoTrans converte um vídeo de um idioma falado para outro encadeando reconhecimento de fala, tradução de legendas, dublagem com síntese de fala e composição do vídeo.**',
          'O projeto está no GitHub sob a conta jianchang512, e o site o descreve como um projeto pessoal de código aberto criado por interesse, sem modelo de negócio e sem empresa citada. Segundo o site, ele é mantido desde outubro de 2023. A versão mais recente é a 4.19, publicada em 17 de novembro de 2026, e o último commit do repositório, de 20 de novembro de 2026, incorporou uma correção de tradução. Quatro versões, da 4.16 à 4.19, saíram entre 13 de outubro e 17 de novembro de 2026, então a atividade recente é alta.',
          'Além do fluxo completo de vídeo, o app oferece ferramentas separadas para transcrição em lote para legendas SRT, dublagem em lote de legendas e tradução de SRT. O README acrescenta identificação de falantes, dublagem com vários papéis, uma ferramenta de separação de voz e fundo, junção de vídeo e legendas e alinhamento de áudio e vídeo. Ele pode ser usado por uma janela de desktop, uma linha de comando ou uma interface de navegador.',
          'O README mostra dois banners de patrocinadores, e o site diz que traz alguns anúncios do Google e links de patrocínio para pagar o servidor de documentação e o custo de tokens de teste. Essas são declarações do responsável. A PromptQuorum não executou o app e não comparou sua saída com a de outras ferramentas.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**Usuários de Windows baixam um arquivo pré-empacotado, extraem e dão dois cliques em sp.exe; usuários de macOS e Linux instalam pelo código-fonte em um terminal.**',
          'A versão mais recente do GitHub não tem arquivos anexados. As notas dela apontam para o arquivo do Windows no Baidu Netdisk e no Hugging Face, e a página de download do site lista as mesmas compilações. O guia manda extrair o arquivo em um caminho curto, sem espaços nem caracteres chineses, evitar pastas protegidas como Program Files e não executar o sp.exe de dentro do arquivo compactado.',
        ],
        columns: ['Plataforma', 'Como obter'],
        rows: [
          { 'Plataforma': '[Windows 10/11](https://en.pyvideotrans.com/downpackage)', 'Como obter': '.7z (2.7 GB); executar sp.exe; sem assinatura (guia)' },
          { 'Plataforma': '[Patch do Windows](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.19)', 'Como obter': 'Patch de 400 MB que sobrescreve um pacote antigo' },
          { 'Plataforma': '[macOS](https://en.pyvideotrans.com/getstart)', 'Como obter': 'Pelo código: Homebrew, FFmpeg, uv, git clone, uv sync' },
          { 'Plataforma': '[Linux](https://en.pyvideotrans.com/getstart)', 'Como obter': 'Pelo código: apt, FFmpeg, uv, git clone, uv sync' },
          { 'Plataforma': '[Docker / WebUI](https://github.com/jianchang512/pyvideotrans#readme)', 'Como obter': 'docker build e run; interface web na porta 7860' },
          { 'Plataforma': '[Site](https://pyvideotrans.com)', 'Como obter': 'Site oficial com guia e página de download' },
          { 'Plataforma': '[Política de privacidade](https://en.pyvideotrans.com/yinsizhengce)', 'Como obter': 'Cobre o site de documentação, não o app' },
          { 'Plataforma': '[Código-fonte](https://github.com/jianchang512/pyvideotrans)', 'Como obter': 'Repositório do GitHub (GPL-3.0)' },
        ],
        note: 'macOS e Linux exigem um terminal e uma instalação de nível desenvolvedor; o arquivo do Windows é o único caminho sem terminal.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**O site diz que não há hardware mínimo e que uma GPU NVIDIA é opcional, mas não informa nenhum valor de RAM.**',
          'Os modelos locais não vêm no pacote. O guia diz que só o código de chamada está embutido e que os modelos são baixados no primeiro uso, então a primeira execução precisa de conexão e de espaço em disco além do arquivo.',
        ],
        columns: ['Item', 'Valor informado'],
        rows: [
          { 'Item': 'Sistema operacional', 'Valor informado': 'Pacote para Windows 10/11; macOS e Linux pelo código' },
          { 'Item': 'GPU NVIDIA', 'Valor informado': 'Opcional; CUDA 12.8 e cuDNN 9.11 para acelerar' },
          { 'Item': 'Maior modelo Whisper', 'Valor informado': 'large-v3 precisa de 8 GB+ de VRAM' },
          { 'Item': 'Uso só com CPU', 'Valor informado': 'Site: roda com ou sem GPU NVIDIA' },
          { 'Item': 'RAM do sistema', 'Valor informado': 'Não informada' },
          { 'Item': 'Python (instalação pelo código)', 'Valor informado': 'O README recomenda 3.10' },
          { 'Item': 'FFmpeg', 'Valor informado': 'Necessário na instalação pelo código, segundo o README' },
        ],
        note: 'O uso intenso dos canais online gratuitos pode esbarrar em limites de taxa, segundo o guia.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O app combina um fluxo de tradução de vídeo em um clique com ferramentas independentes para cada etapa.** Os itens abaixo são declarações do responsável, tiradas do README, do site e do guia.',
        ],
        items: [
          'Translation V/A: reconhecimento de fala, tradução de legendas, dublagem e composição do vídeo em uma única execução, com filas em lote.',
          'Ferramentas independentes: transcrição em lote para SRT, dublagem a partir de legendas ou texto e tradução de SRT que preserva os carimbos de tempo.',
          'Identificação de falantes e dublagem com vários papéis, para que cada falante possa ter uma voz diferente.',
          'Clonagem de voz por modelos integrados como F5-TTS, CosyVoice e GPT-SoVITS.',
          'Pausas para revisão manual depois do reconhecimento, da tradução e da dublagem no modo de vídeo único.',
          'Opções de sincronização: acelerar o áudio, desacelerar o vídeo e incorporar legendas.',
          'Mais de 30 canais de reconhecimento, tradução e voz, locais e online, segundo o site.',
          'Utilitários: separação de voz e fundo, junção de vídeo e legendas, alinhamento de áudio e vídeo.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**A página de licença do software diz que as funções principais rodam no seu computador e não enviam seus vídeos nem dados de uso ao desenvolvedor, mas qualquer mecanismo online que você escolher recebe os seus dados.**',
          'Essa página diz que texto, áudio ou vídeo enviados a serviços de terceiros como Microsoft Azure, OpenAI ou Edge TTS vão direto do seu computador para esse provedor e ficam sujeitos à política dele. Segundo o guia, Google Translate e Edge-TTS, os padrões, funcionam online sem cadastro. A etapa opcional de correção por LLM usa por padrão o canal DeepSeek, segundo o guia.',
          'O app verifica se há versões novas por meio de um arquivo estático do site. O botão de relatório de erros abre uma página de fórum, e essa página diz que nada é enviado até você clicar em Publicar. A política de privacidade cobre o site de documentação: menciona logs, cookies, Google AdSense e serviços de análise. A PromptQuorum não capturou tráfego de rede.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O pyVideoTrans serve para quem quer um fluxo gratuito e configurável de tradução e dublagem e consegue lidar com a escolha dos mecanismos.**',
        ],
        items: [
          'Criadores que querem legendas e uma faixa dublada para os próprios vídeos em outro idioma.',
          'Professores e equipes que querem transcrição em lote e tradução de legendas com revisão manual.',
          'Usuários técnicos que querem linha de comando, interface de navegador ou implantação com Docker.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        content: [
          '**O pyVideoTrans serve menos bem em alguns casos, e vários detalhes continuam sem verificação.**',
        ],
        items: [
          'Não serve: vídeos só com música ou imagens mudas, que o guia lista como não compatíveis, ou material cujas legendas gravadas na imagem você quer remover, algo que o guia diz não conseguir fazer.',
          'Não serve: usuários de macOS ou Linux que querem um instalador; ambos exigem instalação em terminal.',
          'Não serve: quem precisa de um app de Windows assinado e distribuído por loja, pois, segundo o guia do projeto, o pacote não tem assinatura e não faz parte dos arquivos da versão no GitHub.',
          'Não verificado: qualidade de tradução, dublagem e sincronização, velocidade e quantidade de idiomas. A PromptQuorum não fez testes e não baixou nem inspecionou o pacote do Windows.',
          'Não verificado: necessidade de RAM e disco além dos valores informados, e quais modelos locais rodam em velocidade utilizável só com CPU.',
          'Não verificado: licenças de cada modelo. O site orienta os usuários a conferir a licença e os termos comerciais de cada desenvolvedor de modelo.',
          'Não verificado: a entidade legal do responsável. A bandeira da China no diretório vem dos Termos de Uso, que citam a lei chinesa como lei aplicável; nenhum endereço de empresa foi encontrado.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Concorrentes e alternativas',
        itemHeadings: true,
        content: [
          '**O pyVideoTrans cobre toda a cadeia de tradução de vídeo, enquanto as alternativas abaixo focam em transcrição ou legendas.** A PromptQuorum não as comparou na prática; as notas vêm da análise de cada app.',
        ],
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[Buzz](/pt/power-local-llm/buzz-captions-review)', 'Plataformas': 'Windows, macOS, Linux', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Transcrição e tradução Whisper offline com exportação de legendas; foco em legendas' },
          { 'App': '[Subtitle Edit](/pt/power-local-llm/subtitle-edit-review)', 'Plataformas': 'Windows, macOS, Linux', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Editor de legendas com transcrição local e tradução automática opcionais; foco em legendas' },
          { 'App': '[Sablate](/pt/power-local-llm/sablate-review)', 'Plataformas': 'Windows, macOS', 'Preço / licença': 'Freemium / proprietário', 'Diferença principal': 'Segundo o responsável, transcreve, traduz e grava legendas estilizadas; código fechado' },
        ],
        note: 'Confirme o preço, a licença e as plataformas atuais de cada app na própria página dele antes de escolher.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O pyVideoTrans funciona totalmente offline?',
            a: 'Só se cada etapa usar um mecanismo local. Os canais padrão de tradução e dublagem são online, e os modelos locais são baixados no primeiro uso, então uma primeira execução offline exige que os arquivos já estejam no lugar.',
          },
          {
            q: 'Ele consegue clonar a minha voz?',
            a: 'O README lista F5-TTS, CosyVoice e GPT-SoVITS como modelos integrados de clonagem de voz zero-shot, e o guia tem uma página sobre a clonagem da voz original. A qualidade do resultado não foi testada aqui.',
          },
          {
            q: 'Existe uma versão paga oficial?',
            a: 'Segundo o site, não. Ele afirma que cópias pagas em plataformas de compra como Taobao, Xianyu e Pinduoduo não são oficiais e que o desenvolvedor não autorizou nenhuma venda nem lucra com elas.',
          },
          {
            q: 'Posso enviar o vídeo traduzido para o YouTube?',
            a: 'Segundo o site, onde você publica é decisão sua, e se você pode republicar o conteúdo do vídeo é assunto entre você e o detentor dos direitos. Ele também pede que você leia os termos de licença de cada modelo usado.',
          },
          {
            q: 'Posso rodar em um servidor ou no navegador?',
            a: 'Sim. O README documenta uma interface de linha de comando com tarefas de tradução de vídeo, fala para texto, tradução de legendas e texto para fala, além de uma WebUI de navegador e uma imagem Docker.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O pyVideoTrans vale o teste se você quer uma única ferramenta gratuita para transcrever, traduzir e dublar e aceita uma instalação manual.**',
          'No papel, ele cobre toda a cadeia: código GPL-3.0, muitos mecanismos locais e na nuvem, dublagem por falante, integrações de clonagem de voz e três formas de executar. O responsável trabalha ativamente nele, com quatro versões em cinco semanas.',
          'As trocas são claras. O arquivo do Windows não tem assinatura, segundo o guia do projeto, e fica hospedado fora dos arquivos da versão no GitHub, macOS e Linux exigem um terminal, os padrões enviam texto a serviços online e não foram encontradas nem uma empresa nem uma política de privacidade do próprio app. A PromptQuorum não testou a qualidade da saída. Experimente em um trecho curto cujos direitos você tenha e confira o site oficial antes de confiar em uma versão mais nova.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do pyVideoTrans](https://pyvideotrans.com) — página inicial, declarações de recursos e perguntas frequentes, notas sobre doações e anúncios, consultado em 20 de novembro de 2026.',
          '[Página de download para Windows](https://en.pyvideotrans.com/downpackage) — pacote do Windows, pacote de patch e indicações para macOS/Linux, consultado em 20 de novembro de 2026.',
          '[Guia do usuário](https://en.pyvideotrans.com/getstart) — fluxo de trabalho, padrões, tabelas de mecanismos, aviso de segurança e download de modelos, consultado em 20 de novembro de 2026.',
          '[Contrato de licença e serviço do software](https://en.pyvideotrans.com/law) — tratamento de dados, verificação de atualizações, relatório de erros e isenção de responsabilidade, consultado em 20 de novembro de 2026.',
          '[Termos de Uso](https://en.pyvideotrans.com/xieyi) — cláusula de lei aplicável, consultado em 20 de novembro de 2026.',
          '[Política de privacidade](https://en.pyvideotrans.com/yinsizhengce) — coleta de dados no site de documentação, consultado em 20 de novembro de 2026.',
          '[Repositório do GitHub](https://github.com/jianchang512/pyvideotrans) — licença, README, passos de instalação e último commit de 20 de novembro de 2026, consultado em 20 de novembro de 2026.',
          '[Versão 4.19](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.19) — data de publicação, links de download e mudanças, consultado em 20 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Ferramentas locais de voz e áudio comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — texto para fala, fala para texto e agentes de voz lado a lado.',
          '[Análise do Buzz](/pt/power-local-llm/buzz-captions-review) — transcrição Whisper offline e exportação de legendas.',
          '[Análise do Subtitle Edit](/pt/power-local-llm/subtitle-edit-review) — um editor de legendas com mecanismos locais opcionais.',
          '[Diretório de software LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-21',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/pyvideotrans-review-hero-zh.webp',
    title: 'pyVideoTrans 评测：免费的视频翻译与 AI 配音',
    seoTitle: 'pyVideoTrans 评测：免费的视频翻译与 AI 配音工具',
    intro:
      'pyVideoTrans 是一款免费开源工具，可在一个流程中把视频翻译成另一种语言：语音识别、字幕翻译、AI 配音，并把成品视频重新合成。本评测基于该项目的网站和使用指南、GitHub 仓库与 README，以及 GitHub 上的最新发布版本。PromptQuorum 没有测试过这款应用。',
    metaDescription:
      'pyVideoTrans 可免费翻译并配音视频，支持本地或云端引擎。平台、安装步骤、GPU 要求、许可证、隐私和未核实事项一览，供选用前参考。',
    twitterDescription:
      'pyVideoTrans 是免费的 GPL-3.0 视频翻译、字幕与 AI 配音工具。Windows 包、源码安装、本地或云端引擎、隐私与未解问题。',
    audience:
      '想把有人声的视频变成另一种语言的字幕和配音，并且能自行选择语音识别、翻译和配音引擎的视频创作者、教育工作者和爱好者',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'pyVideoTrans',
    targetKeywords: [
      'pyVideoTrans 评测',
      'pyVideoTrans 下载',
      '视频翻译软件',
      'AI 视频配音',
      '本地视频翻译',
      '离线翻译视频字幕',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**pyVideoTrans 是一款适用于 Windows、macOS 和 Linux 的免费 GPL-3.0 开源工具，可在一个流程中把有人声的视频变成翻译、配音并带字幕的视频。** 它的语音识别、翻译和配音引擎既可在您的电脑上运行，也可使用云端服务，而默认的翻译和配音渠道是在线服务。',
    quickAnswerTop: {
      zh: {
        question: 'pyVideoTrans 是什么，适合谁用？',
        answer:
          'pyVideoTrans 是一款桌面、命令行和浏览器三种方式可用的工具，可转写视频、翻译字幕、用语音合成的声音配音，并重新合成视频。适合想要免费的翻译与配音流程、并能自己选择和配置引擎的人。',
        bullets: [
          '平台：Windows（预打包压缩包）、macOS 和 Linux（在终端中从源码安装）。',
          '价格：免费；第三方 API 由各服务商另行收费。',
          '许可证：GPL-3.0。',
          '版本：4.19，上游最近一次更新为 2026年11月20日（最新发布版本为 2026年11月17日）。',
          '开发方：GitHub 账号 jianchang512 背后开发者的个人项目，未提及任何公司。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: '概览', anchor: 'overview' },
      { label: '如何获取', anchor: 'get-it' },
      { label: '系统要求', anchor: 'requirements' },
      { label: '功能', anchor: 'features' },
      { label: '隐私与数据流向', anchor: 'privacy' },
      { label: '适合谁用', anchor: 'who-should-use' },
      { label: '我们无法核实的内容', anchor: 'who-should-not-use' },
      { label: '替代方案', anchor: 'alternatives' },
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
            text: 'pyVideoTrans 是一款免费开源工具，能听取视频中的语音、生成并翻译字幕、用合成声音配音，再生成目标语言的新视频。',
          },
          {
            type: 'plain-terms',
            text: '可以把它想成有四个工位的流水线：转写、翻译、发声、合成。每个工位都可以选本地模型或在线服务，单视频模式下还能暂停来修改文字。',
          },
        ],
        items: [
          '据使用指南，默认设置是：语音识别用 faster-whisper large-v3-turbo，翻译用 Google 翻译，配音用 Edge-TTS；后两者都是在线服务。',
          '据 README，声音克隆通过 F5-TTS、CosyVoice、GPT-SoVITS 等集成模型提供。',
          '据使用指南，Windows 包是没有数字签名的便携压缩包，安全软件可能会报警。',
          'macOS 和 Linux 没有安装包；指南给出的是在终端中配合 FFmpeg、uv 和克隆仓库的安装方式。',
          'PromptQuorum 没有测试过该应用，因此这里的任何说法都不涉及翻译、配音或时间对齐的质量。',
        ],
        callouts: [
          {
            type: 'note',
            text: '翻译和配音视频可能涉及版权，使用声音克隆时还可能涉及个人声音权利。网站表示，视频内容的法律问题是您与权利人之间的事；发布前请先确认权利。以上为一般性信息，不构成法律意见。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**pyVideoTrans 把语音识别、字幕翻译、语音合成配音和视频合成串联起来，把视频从一种口语语言转换为另一种。**',
          '该项目托管在 GitHub 的 jianchang512 账号下，网站称其为出于兴趣创建的个人开源项目，没有商业模式，也未提及任何公司。据网站介绍，项目自 2023 年 10 月起持续维护。最新发布版本是 2026年11月17日 发布的 4.19，仓库最近一次提交（2026年11月20日）合并了一个翻译修复。2026年10月13日至11月17日之间发布了 4.16 到 4.19 共四个版本，近期活跃度很高。',
          '除完整的视频流程外，应用还提供独立工具：批量语音转写为 SRT 字幕、批量为字幕配音、翻译 SRT。README 还提到说话人识别、多角色配音、人声与背景声分离工具、视频与字幕合并，以及音视频对齐。可以通过桌面窗口、命令行或浏览器界面使用。',
          'README 展示了两个赞助商横幅，网站称放置了部分 Google 广告和赞助链接，用于支付文档服务器和测试 token 的开销。以上均为开发方的说法。PromptQuorum 没有运行过该应用，也没有把它的输出与其他工具比较。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '如何获取',
        content: [
          '**Windows 用户下载预打包压缩包，解压后双击 sp.exe；macOS 和 Linux 用户在终端中从源码安装。**',
          'GitHub 最新发布版本没有附带文件。发布说明提供了百度网盘和 Hugging Face 上的 Windows 压缩包链接，网站下载页列出了相同的构建。指南建议把压缩包解压到不含空格和中文的较短路径，避开 Program Files 等受保护文件夹，也不要在压缩包内直接运行 sp.exe。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          { '平台': '[Windows 10/11](https://en.pyvideotrans.com/downpackage)', '获取方式': '.7z（2.7 GB）；运行 sp.exe；据指南无签名' },
          { '平台': '[Windows 补丁](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.19)', '获取方式': '400 MB 补丁，覆盖旧版本包' },
          { '平台': '[macOS](https://en.pyvideotrans.com/getstart)', '获取方式': '源码安装：Homebrew、FFmpeg、uv、git clone、uv sync' },
          { '平台': '[Linux](https://en.pyvideotrans.com/getstart)', '获取方式': '源码安装：apt、FFmpeg、uv、git clone、uv sync' },
          { '平台': '[Docker / WebUI](https://github.com/jianchang512/pyvideotrans#readme)', '获取方式': 'docker build 和 run；浏览器界面在 7860 端口' },
          { '平台': '[网站](https://pyvideotrans.com)', '获取方式': '含使用指南和下载页的官方网站' },
          { '平台': '[隐私政策](https://en.pyvideotrans.com/yinsizhengce)', '获取方式': '适用于文档网站，不适用于应用本身' },
          { '平台': '[源代码](https://github.com/jianchang512/pyvideotrans)', '获取方式': 'GitHub 仓库（GPL-3.0）' },
        ],
        note: 'macOS 和 Linux 需要终端和开发者式的安装；Windows 压缩包是唯一无需终端的方式。',
      },
      requirements: {
        id: 'requirements',
        title: '系统要求',
        content: [
          '**网站称没有最低硬件要求，NVIDIA GPU 可选，但没有给出内存（RAM）数字。**',
          '本地模型不在安装包内。指南称内置的只有调用代码，模型在首次使用时下载，因此首次运行需要联网，并需要压缩包之外的磁盘空间。',
        ],
        columns: ['项目', '给出的数字'],
        rows: [
          { '项目': '操作系统', '给出的数字': 'Windows 10/11 安装包；macOS 和 Linux 用源码' },
          { '项目': 'NVIDIA GPU', '给出的数字': '可选；加速需 CUDA 12.8 和 cuDNN 9.11' },
          { '项目': '最大的 Whisper 模型', '给出的数字': 'large-v3 需要 8 GB 以上显存' },
          { '项目': '仅用 CPU', '给出的数字': '网站：有无 NVIDIA GPU 均可运行' },
          { '项目': '系统内存', '给出的数字': '未说明' },
          { '项目': 'Python（源码安装）', '给出的数字': 'README 推荐 3.10' },
          { '项目': 'FFmpeg', '给出的数字': '据 README，源码安装时需要' },
        ],
        note: '据指南，大量使用免费在线渠道可能触发频率限制。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**应用把一键视频翻译流程与每个环节的独立工具结合在一起。** 下面各项均为开发方在 README、网站和指南中的说法。',
        ],
        items: [
          'Translation V/A：一次运行完成语音识别、字幕翻译、配音和视频合成，支持批量队列。',
          '独立工具：批量语音转写为 SRT、根据字幕或文本配音，以及保留时间戳的 SRT 翻译。',
          '说话人识别和多角色配音，可为不同说话人分配不同声音。',
          '通过 F5-TTS、CosyVoice、GPT-SoVITS 等集成模型实现声音克隆。',
          '单视频模式下，可在识别、翻译和配音之后暂停，手动校对。',
          '同步选项：音频加速、视频慢放和嵌入字幕。',
          '据网站介绍，本地和在线合计 30 多个识别、翻译和配音渠道。',
          '辅助工具：人声与背景声分离、视频与字幕合并、音视频对齐。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**软件许可协议页面称，核心功能在您的电脑上运行，不会把视频或使用数据上传给开发者，但您选择的任何在线引擎都会收到您的数据。**',
          '该页面称，发送给 Microsoft Azure、OpenAI、Edge TTS 等第三方服务的文本、音频或视频，会直接从您的电脑发往该服务商，并适用其政策。据指南，默认的 Google 翻译和 Edge-TTS 无需注册即可在线使用。可选的 LLM 校对步骤，据指南默认使用 DeepSeek 渠道。',
          '应用通过网站上的一个静态文件检查新版本。错误报告按钮会打开论坛页面，页面称除非您点击发布，否则不会发送任何内容。隐私政策适用于文档网站：提到了日志、Cookie、Google AdSense 和分析服务。PromptQuorum 没有抓取网络流量。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        content: [
          '**pyVideoTrans 适合想要免费、可配置的翻译与配音流程，并能处理引擎选择的人。**',
        ],
        items: [
          '想为自己的视频制作另一种语言的字幕和配音轨道的创作者。',
          '想要批量转写和字幕翻译、并配合手动校对的教育工作者和团队。',
          '想使用命令行、浏览器界面或 Docker 部署的技术用户。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        content: [
          '**pyVideoTrans 在某些情况下不太合适，也有多处细节未能核实。**',
        ],
        items: [
          '不适合：只有音乐或无声画面的视频（指南列为不支持），以及想去掉画面中烧录字幕的素材（指南称无法做到）。',
          '不适合：想要安装程序的 macOS 或 Linux 用户；两者都需要在终端中安装。',
          '不适合：需要已签名、通过应用商店分发的 Windows 应用的人，因为据项目指南，安装包没有签名，也不在 GitHub 发布文件中。',
          '未核实：翻译、配音和时间对齐的质量、速度以及支持的语言数量。PromptQuorum 没有做任何测试，也没有下载或检查 Windows 包。',
          '未核实：除已给出数字之外的内存和磁盘需求，以及哪些本地模型仅用 CPU 时速度可用。',
          '未核实：各个模型的许可证。网站要求用户自行查看各模型开发方的许可证和商用条款。',
          '未核实：开发方的法律主体。目录中的中国旗帜来自使用条款，其中把中国法律列为适用法律；未找到公司地址。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: '竞品与替代方案',
        itemHeadings: true,
        content: [
          '**pyVideoTrans 覆盖整条视频翻译链路，而下面的替代方案侧重于转写或字幕。** PromptQuorum 没有实际对比过它们；备注来自各应用的评测。',
        ],
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[Buzz](/zh/power-local-llm/buzz-captions-review)', '平台': 'Windows、macOS、Linux', '价格 / 许可证': '免费 / MIT', '主要区别': '用 Whisper 离线转写和翻译并导出字幕；侧重字幕' },
          { '应用': '[Subtitle Edit](/zh/power-local-llm/subtitle-edit-review)', '平台': 'Windows、macOS、Linux', '价格 / 许可证': '免费 / MIT', '主要区别': '字幕编辑器，可选本地转写和自动翻译；侧重字幕' },
          { '应用': '[Sablate](/zh/power-local-llm/sablate-review)', '平台': 'Windows、macOS', '价格 / 许可证': '免费增值 / 专有', '主要区别': '据开发方，可转写、翻译并烧录带样式的字幕；闭源' },
        ],
        note: '选择之前，请在各应用自己的页面上确认其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'pyVideoTrans 能完全离线使用吗？',
            a: '只有每个环节都使用本地引擎时才可以。默认的翻译和配音渠道是在线的，本地模型在首次使用时下载，所以第一次离线运行需要文件已经就位。',
          },
          {
            q: '它能克隆我的声音吗？',
            a: 'README 把 F5-TTS、CosyVoice 和 GPT-SoVITS 列为集成的零样本声音克隆模型，指南中也有一页介绍克隆原声。结果质量没有在这里测试。',
          },
          {
            q: '有官方付费版吗？',
            a: '据网站称没有。网站声明，淘宝、闲鱼、拼多多等购物平台上的付费版本都不是官方渠道，开发者没有授权任何销售，也不从中获益。',
          },
          {
            q: '可以把翻译后的视频上传到 YouTube 吗？',
            a: '据网站称，传到哪里由您自己决定，而能否再次发布视频内容是您与权利人之间的事。网站还提醒您阅读所用模型的许可条款。',
          },
          {
            q: '可以在服务器或浏览器中运行吗？',
            a: '可以。README 记录了带有视频翻译、语音转文字、字幕翻译和文字转语音任务的命令行界面，以及浏览器 WebUI 和 Docker 镜像。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果您想用一个免费工具完成转写、翻译和配音，并且能接受动手安装，pyVideoTrans 值得一试。**',
          '纸面上它覆盖整条链路：GPL-3.0 代码、众多本地和云端引擎、按说话人配音、声音克隆集成，以及三种运行方式。开发方在积极维护，五周内发布了四个版本。',
          '取舍也很清楚。Windows 压缩包据项目指南没有签名，托管在 GitHub 发布文件之外；macOS 和 Linux 需要终端；默认设置会把文本发送到在线服务；也没有找到公司信息或应用本身的隐私政策。PromptQuorum 没有测试输出质量。请先用您拥有权利的短片段试用，并在依赖更新的版本之前查看官方网站。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[pyVideoTrans 网站](https://pyvideotrans.com) — 首页、功能与常见问题说明、捐赠和广告说明，2026年11月20日查阅。',
          '[Windows 下载页](https://en.pyvideotrans.com/downpackage) — Windows 包、补丁包以及 macOS/Linux 指引，2026年11月20日查阅。',
          '[使用指南](https://en.pyvideotrans.com/getstart) — 工作流程、默认设置、引擎表、安全提示和模型下载方式，2026年11月20日查阅。',
          '[软件许可与服务协议](https://en.pyvideotrans.com/law) — 数据处理、更新检查、错误报告和免责声明，2026年11月20日查阅。',
          '[使用条款](https://en.pyvideotrans.com/xieyi) — 适用法律条款，2026年11月20日查阅。',
          '[隐私政策](https://en.pyvideotrans.com/yinsizhengce) — 文档网站的数据收集，2026年11月20日查阅。',
          '[GitHub 仓库](https://github.com/jianchang512/pyvideotrans) — 许可证、README、安装步骤以及 2026年11月20日 的最近一次提交，2026年11月20日查阅。',
          '[发布版本 4.19](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.19) — 发布日期、下载链接和变更内容，2026年11月20日查阅。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地语音与音频工具对比](/zh/power-local-llm/local-llm-voice-audio-compared) — 文字转语音、语音转文字和语音代理并排对比。',
          '[Buzz 评测](/zh/power-local-llm/buzz-captions-review) — 离线 Whisper 转写与字幕导出。',
          '[Subtitle Edit 评测](/zh/power-local-llm/subtitle-edit-review) — 带可选本地引擎的字幕编辑器。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-21',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/pyvideotrans-review-hero-ar.webp',
    title: 'مراجعة pyVideoTrans: ترجمة الفيديو والدبلجة بالذكاء الاصطناعي مجانًا',
    seoTitle: 'مراجعة pyVideoTrans: مترجم فيديو وأداة دبلجة مجانية',
    intro:
      'pyVideoTrans أداة مجانية ومفتوحة المصدر تترجم الفيديو إلى لغة أخرى في مسار واحد: التعرف على الكلام وترجمة الترجمات والدبلجة بالذكاء الاصطناعي وإعادة دمج الفيديو النهائي. تستند هذه المراجعة إلى موقع المشروع ودليل المستخدم ومستودع GitHub وملف README وأحدث إصدار منشور على GitHub. لم تختبر PromptQuorum التطبيق.',
    metaDescription:
      'يترجم pyVideoTrans مقاطع الفيديو ويدبلجها مجانًا بمحركات محلية أو سحابية. المنصات والتثبيت ومتطلبات GPU والترخيص والخصوصية وما لم نتحقق منه.',
    twitterDescription:
      'pyVideoTrans أداة مجانية بترخيص GPL-3.0 لترجمة الفيديو والترجمات والدبلجة بالذكاء الاصطناعي. حزمة Windows والتثبيت من المصدر والمحركات والخصوصية والأسئلة المفتوحة.',
    audience:
      'صنّاع الفيديو والمعلمون والهواة الذين يريدون تحويل مقاطع الفيديو المنطوقة إلى ترجمات ودبلجة بلغة أخرى، ويستطيعون اختيار محركات التعرف على الكلام والترجمة والصوت بأنفسهم',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'pyVideoTrans',
    targetKeywords: [
      'مراجعة pyVideoTrans',
      'تنزيل pyVideoTrans',
      'برنامج ترجمة الفيديو',
      'دبلجة الفيديو بالذكاء الاصطناعي',
      'مترجم فيديو محلي',
      'ترجمة ترجمات الفيديو دون اتصال',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**pyVideoTrans أداة مجانية ومفتوحة المصدر بترخيص GPL-3.0 لأنظمة Windows وmacOS وLinux، تحوّل الفيديو المنطوق إلى فيديو مترجم ومدبلج ومزوّد بترجمات في مسار واحد.** يمكن أن تعمل محركاتها للكلام والترجمة والصوت على جهازك أو في السحابة، وقنوات الترجمة والدبلجة الافتراضية فيها خدمات عبر الإنترنت.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو pyVideoTrans ولمن هو؟',
        answer:
          'pyVideoTrans أداة تعمل على سطح المكتب وسطر الأوامر والمتصفح، تفرّغ الفيديو نصيًا وتترجم الترجمات وتدبلجها بصوت تحويل النص إلى كلام ثم تعيد بناء الفيديو. تناسب من يريد مسار ترجمة ودبلجة مجانيًا ويستطيع اختيار المحركات وضبطها بنفسه.',
        bullets: [
          'المنصات: Windows (أرشيف مُجهّز مسبقًا)، وmacOS وLinux (تثبيت من المصدر في الطرفية).',
          'السعر: مجاني؛ ويحاسب مزوّدو واجهات API الخارجية بشكل منفصل.',
          'الترخيص: GPL-3.0.',
          'الإصدار: 4.19، وآخر تحديث في المصدر الأصلي بتاريخ 20 نوفمبر 2026 (وأحدث إصدار منشور بتاريخ 17 نوفمبر 2026).',
          'الجهة المطوّرة: مشروع شخصي للمطوّر صاحب حساب GitHub المسمى jianchang512؛ ولم تُذكر أي شركة.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'نظرة عامة', anchor: 'overview' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
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
            text: 'pyVideoTrans أداة مجانية ومفتوحة المصدر تستمع إلى الفيديو وتكتب ترجماته وتترجمها وتدبلجها بصوت اصطناعي وتنشئ فيديو جديدًا باللغة المستهدفة.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّلها خط تجميع بأربع محطات: التفريغ النصي، والترجمة، والنطق، والدمج. في كل محطة تختار نموذجًا محليًا أو خدمة عبر الإنترنت، وفي وضع الفيديو الواحد يمكنك التوقف لتصحيح النص.',
          },
        ],
        items: [
          'بحسب الدليل، الإعدادات الافتراضية هي faster-whisper large-v3-turbo للتعرف على الكلام، وGoogle Translate للترجمة، وEdge-TTS للأصوات؛ والأخيران خدمتان عبر الإنترنت.',
          'يُقدَّم استنساخ الصوت عبر نماذج مدمجة مثل F5-TTS وCosyVoice وGPT-SoVITS، بحسب README.',
          'حزمة Windows أرشيف محمول بلا توقيع رقمي، بحسب الدليل، لذا قد تنبّه برامج الحماية إليه.',
          'لا توجد حزمة لـ macOS وLinux؛ ويصف الدليل تثبيتًا في الطرفية باستخدام FFmpeg وuv ونسخة من المستودع.',
          'لم تختبر PromptQuorum التطبيق، لذا لا يغطي أي ادعاء هنا جودة الترجمة أو الدبلجة أو التوقيت.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'قد تتعلق ترجمة الفيديو ودبلجته بحقوق المؤلف، وقد تتعلق معها حقوق صوت الشخص عند استنساخ الصوت. يقول الموقع إن الجانب القانوني لمحتوى الفيديو شأن بينك وبين صاحب الحقوق، فتحقق من الحقوق قبل النشر. هذه معلومات عامة وليست استشارة قانونية.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**يحوّل pyVideoTrans الفيديو من لغة منطوقة إلى أخرى بتسلسل التعرف على الكلام وترجمة الترجمات والدبلجة بتحويل النص إلى كلام وتركيب الفيديو.**',
          'يقع المشروع على GitHub تحت حساب jianchang512، ويصفه الموقع بأنه مشروع شخصي مفتوح المصدر أُنشئ بدافع الاهتمام، دون نموذج أعمال ودون ذكر شركة. وبحسب الموقع فهو قيد الصيانة منذ أكتوبر 2023. أحدث إصدار هو 4.19 المنشور بتاريخ 17 نوفمبر 2026، وآخر commit في المستودع بتاريخ 20 نوفمبر 2026 دمج إصلاحًا للترجمة. صدرت أربعة إصدارات، من 4.16 إلى 4.19، بين 13 أكتوبر و17 نوفمبر 2026، لذا فالنشاط الأخير مرتفع.',
          'إلى جانب مسار الفيديو الكامل، يقدّم التطبيق أدوات منفصلة للتفريغ النصي الدفعي إلى ترجمات SRT، والدبلجة الدفعية للترجمات، وترجمة ملفات SRT. ويضيف README تمييز المتحدثين، والدبلجة متعددة الأدوار، وأداة لفصل الصوت عن الخلفية، ودمج الفيديو والترجمات، ومحاذاة الصوت والفيديو. ويمكن تشغيله من نافذة سطح مكتب أو سطر أوامر أو واجهة متصفح.',
          'يعرض README لافتتين لرعاة، ويقول الموقع إنه يضم بعض إعلانات Google وروابط رعاية لدفع تكلفة خادم التوثيق ورموز الاختبار (tokens). هذه أقوال الجهة المطوّرة. لم تشغّل PromptQuorum التطبيق ولم تقارن مخرجاته بأدوات أخرى.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**ينزّل مستخدمو Windows أرشيفًا مُجهّزًا مسبقًا ويفكّون ضغطه ثم ينقرون مرتين على sp.exe؛ أما مستخدمو macOS وLinux فيثبّتونه من المصدر في الطرفية.**',
          'لا يحتوي أحدث إصدار على GitHub على ملفات مرفقة. وتربط ملاحظاته بأرشيف Windows على Baidu Netdisk وعلى Hugging Face، وتسرد صفحة التنزيل في الموقع الإصدارات نفسها. ويطلب الدليل فك ضغط الأرشيف في مسار قصير بلا مسافات ولا أحرف صينية، وتجنب المجلدات المحمية مثل Program Files، وعدم تشغيل sp.exe من داخل الأرشيف.',
        ],
        columns: ['المنصة', 'كيفية الحصول عليه'],
        rows: [
          { 'المنصة': '[Windows 10/11](https://en.pyvideotrans.com/downpackage)', 'كيفية الحصول عليه': '.7z (2.7 GB)؛ تشغيل sp.exe؛ بلا توقيع بحسب الدليل' },
          { 'المنصة': '[تصحيح Windows](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.19)', 'كيفية الحصول عليه': 'تصحيح بحجم 400 MB يُنسخ فوق حزمة أقدم' },
          { 'المنصة': '[macOS](https://en.pyvideotrans.com/getstart)', 'كيفية الحصول عليه': 'من المصدر: Homebrew وFFmpeg وuv وgit clone وuv sync' },
          { 'المنصة': '[Linux](https://en.pyvideotrans.com/getstart)', 'كيفية الحصول عليه': 'من المصدر: apt وFFmpeg وuv وgit clone وuv sync' },
          { 'المنصة': '[Docker / WebUI](https://github.com/jianchang512/pyvideotrans#readme)', 'كيفية الحصول عليه': 'docker build وrun؛ واجهة المتصفح على المنفذ 7860' },
          { 'المنصة': '[الموقع](https://pyvideotrans.com)', 'كيفية الحصول عليه': 'الموقع الرسمي مع الدليل وصفحة التنزيل' },
          { 'المنصة': '[سياسة الخصوصية](https://en.pyvideotrans.com/yinsizhengce)', 'كيفية الحصول عليه': 'تخص موقع التوثيق وليس التطبيق' },
          { 'المنصة': '[الشيفرة المصدرية](https://github.com/jianchang512/pyvideotrans)', 'كيفية الحصول عليه': 'مستودع GitHub (GPL-3.0)' },
        ],
        note: 'يحتاج macOS وLinux إلى طرفية وتثبيت بأسلوب المطوّرين؛ وأرشيف Windows هو المسار الوحيد دون طرفية.',
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات',
        content: [
          '**يقول الموقع إنه لا يوجد حد أدنى للعتاد وإن وحدة NVIDIA GPU اختيارية، لكنه لا يذكر رقمًا للذاكرة RAM.**',
          'النماذج المحلية ليست داخل الحزمة. يقول الدليل إن الشيفرة التي تستدعيها فقط هي المدمجة، وإن النماذج تُنزَّل عند أول استخدام، لذا يحتاج أول تشغيل إلى اتصال ومساحة قرص تتجاوز الأرشيف.',
        ],
        columns: ['البند', 'القيمة المذكورة'],
        rows: [
          { 'البند': 'نظام التشغيل', 'القيمة المذكورة': 'حزمة Windows 10/11؛ وmacOS وLinux من المصدر' },
          { 'البند': 'NVIDIA GPU', 'القيمة المذكورة': 'اختيارية؛ CUDA 12.8 وcuDNN 9.11 للتسريع' },
          { 'البند': 'أكبر نموذج Whisper', 'القيمة المذكورة': 'يحتاج large-v3 إلى 8 GB+ من VRAM' },
          { 'البند': 'الاستخدام بالمعالج فقط', 'القيمة المذكورة': 'الموقع: يعمل مع NVIDIA GPU أو بدونها' },
          { 'البند': 'ذاكرة النظام RAM', 'القيمة المذكورة': 'غير مذكورة' },
          { 'البند': 'Python (التثبيت من المصدر)', 'القيمة المذكورة': 'يوصي README بالإصدار 3.10' },
          { 'البند': 'FFmpeg', 'القيمة المذكورة': 'مطلوب للتثبيت من المصدر بحسب README' },
        ],
        note: 'قد يؤدي الاستخدام المكثف للقنوات المجانية عبر الإنترنت إلى بلوغ حدود المعدل، بحسب الدليل.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**يجمع التطبيق بين مسار ترجمة فيديو بنقرة واحدة وأدوات مستقلة لكل مرحلة.** البنود التالية أقوال الجهة المطوّرة مأخوذة من README والموقع والدليل.',
        ],
        items: [
          'Translation V/A: التعرف على الكلام وترجمة الترجمات والدبلجة وتركيب الفيديو في تشغيل واحد، مع قوائم انتظار دفعية.',
          'أدوات مستقلة: تفريغ نصي دفعي إلى SRT، ودبلجة من الترجمات أو النص، وترجمة SRT مع الحفاظ على الأطر الزمنية.',
          'تمييز المتحدثين والدبلجة متعددة الأدوار، بحيث يمكن إعطاء كل متحدث صوتًا مختلفًا.',
          'استنساخ الصوت عبر نماذج مدمجة مثل F5-TTS وCosyVoice وGPT-SoVITS.',
          'توقفات للتدقيق اليدوي بعد التعرف والترجمة والدبلجة في وضع الفيديو الواحد.',
          'خيارات المزامنة: تسريع الصوت وإبطاء الفيديو وتضمين الترجمات.',
          'أكثر من 30 قناة للتعرف والترجمة والصوت، محلية وعبر الإنترنت، بحسب الموقع.',
          'أدوات مساعدة: فصل الصوت عن الخلفية، ودمج الفيديو والترجمات، ومحاذاة الصوت والفيديو.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**تقول صفحة ترخيص البرنامج إن الوظائف الأساسية تعمل على جهازك ولا ترفع مقاطع الفيديو ولا بيانات الاستخدام إلى المطوّر، لكن أي محرك عبر الإنترنت تختاره يتلقى بياناتك.**',
          'تقول الصفحة إن النص أو الصوت أو الفيديو المرسل إلى خدمات خارجية مثل Microsoft Azure أو OpenAI أو Edge TTS ينتقل مباشرة من جهازك إلى ذلك المزوّد ويخضع لسياسته. وبحسب الدليل، يعمل Google Translate وEdge-TTS، وهما الافتراضيان، عبر الإنترنت دون تسجيل. وخطوة تصحيح LLM الاختيارية تستخدم افتراضيًا قناة DeepSeek، بحسب الدليل.',
          'يتحقق التطبيق من وجود إصدارات جديدة عبر ملف ثابت على الموقع. ويفتح زر الإبلاغ عن الأخطاء صفحة منتدى، وتقول تلك الصفحة إنه لا يُرسل شيء ما لم تضغط على نشر. وتخص سياسة الخصوصية موقع التوثيق: فهي تذكر السجلات وملفات تعريف الارتباط وGoogle AdSense وخدمات التحليلات. لم تلتقط PromptQuorum حركة الشبكة.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب pyVideoTrans من يريد مسار ترجمة ودبلجة مجانيًا وقابلًا للضبط ويستطيع التعامل مع اختيار المحركات.**',
        ],
        items: [
          'صنّاع المحتوى الذين يريدون ترجمات ومسارًا مدبلجًا لمقاطعهم بلغة أخرى.',
          'المعلمون والفرق الذين يريدون تفريغًا نصيًا دفعيًا وترجمة للترجمات مع تدقيق يدوي.',
          'المستخدمون التقنيون الذين يريدون سطر الأوامر أو واجهة المتصفح أو النشر عبر Docker.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        content: [
          '**يناسب pyVideoTrans بدرجة أقل في بعض الحالات، وتبقى عدة تفاصيل غير متحقق منها.**',
        ],
        items: [
          'لا يناسب: مقاطع الفيديو التي تحتوي موسيقى فقط أو صورًا صامتة، وهي غير مدعومة بحسب الدليل، أو المواد التي تريد إزالة الترجمات المدمجة في صورتها، وهو ما يقول الدليل إنه لا يستطيعه.',
          'لا يناسب: مستخدمي macOS أو Linux الذين يريدون مثبّتًا جاهزًا؛ فكلاهما يحتاج إلى تثبيت في الطرفية.',
          'لا يناسب: من يحتاج إلى تطبيق Windows موقّع وموزّع عبر متجر، لأن الحزمة، بحسب دليل المشروع، بلا توقيع وليست ضمن ملفات الإصدار على GitHub.',
          'غير متحقق منه: جودة الترجمة والدبلجة والتوقيت والسرعة وعدد اللغات. لم تُجرِ PromptQuorum اختبارات ولم تنزّل حزمة Windows ولم تفحصها.',
          'غير متحقق منه: احتياجات RAM والقرص فوق الأرقام المذكورة، وأي النماذج المحلية تعمل بسرعة مقبولة بالمعالج وحده.',
          'غير متحقق منه: تراخيص النماذج الفردية. ويطلب الموقع من المستخدمين مراجعة ترخيص كل مطوّر نموذج وشروطه التجارية.',
          'غير متحقق منه: الكيان القانوني للجهة المطوّرة. علم الصين في الدليل مأخوذ من شروط الاستخدام التي تنص على القانون الصيني قانونًا حاكمًا؛ ولم يُعثر على عنوان شركة.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'المنافسون والبدائل',
        itemHeadings: true,
        content: [
          '**يغطي pyVideoTrans سلسلة ترجمة الفيديو كاملة، بينما تركّز البدائل أدناه على التفريغ النصي أو الترجمات.** لم تقارنها PromptQuorum عمليًا؛ والملاحظات مأخوذة من مراجعة كل تطبيق.',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الأساسي'],
        rows: [
          { 'التطبيق': '[Buzz](/ar/power-local-llm/buzz-captions-review)', 'المنصات': 'Windows وmacOS وLinux', 'السعر / الترخيص': 'مجاني / MIT', 'الفرق الأساسي': 'تفريغ وترجمة بـ Whisper دون اتصال مع تصدير الترجمات؛ يركّز على الترجمات' },
          { 'التطبيق': '[Subtitle Edit](/ar/power-local-llm/subtitle-edit-review)', 'المنصات': 'Windows وmacOS وLinux', 'السعر / الترخيص': 'مجاني / MIT', 'الفرق الأساسي': 'محرّر ترجمات مع تفريغ محلي وترجمة تلقائية اختياريين؛ يركّز على الترجمات' },
          { 'التطبيق': '[Sablate](/ar/power-local-llm/sablate-review)', 'المنصات': 'Windows وmacOS', 'السعر / الترخيص': 'مجاني جزئيًا / مغلق المصدر', 'الفرق الأساسي': 'بحسب جهته المطوّرة، يفرّغ ويترجم ويدمج ترجمات منسّقة في الصورة؛ مغلق المصدر' },
        ],
        note: 'تأكد من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته الخاصة قبل الاختيار.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل pyVideoTrans دون اتصال بالكامل؟',
            a: 'فقط إذا استخدمت كل مرحلة محركًا محليًا. قنوات الترجمة والدبلجة الافتراضية تعمل عبر الإنترنت، والنماذج المحلية تُنزَّل عند أول استخدام، لذا يتطلب أول تشغيل دون اتصال أن تكون الملفات موجودة مسبقًا.',
          },
          {
            q: 'هل يستطيع استنساخ صوتي؟',
            a: 'يسرد README النماذج F5-TTS وCosyVoice وGPT-SoVITS كنماذج مدمجة لاستنساخ الصوت بلا أمثلة مسبقة (zero-shot)، ويضم الدليل صفحة عن استنساخ الصوت الأصلي. ولم تُختبر جودة النتيجة هنا.',
          },
          {
            q: 'هل توجد نسخة مدفوعة رسمية؟',
            a: 'بحسب الموقع، لا. ويذكر أن النسخ المدفوعة على منصات التسوق مثل Taobao وXianyu وPinduoduo ليست رسمية، وأن المطوّر لم يأذن بأي مبيعات ولا يستفيد منها.',
          },
          {
            q: 'هل يمكنني رفع الفيديو المترجم إلى YouTube؟',
            a: 'بحسب الموقع، المكان الذي ترفع إليه قرارك أنت، أما جواز إعادة نشر محتوى الفيديو فشأن بينك وبين صاحب الحقوق. كما يدعوك إلى قراءة شروط ترخيص أي نموذج تستخدمه.',
          },
          {
            q: 'هل يمكن تشغيله على خادم أو في المتصفح؟',
            a: 'نعم. يوثّق README واجهة سطر أوامر بمهام ترجمة الفيديو وتحويل الكلام إلى نص وترجمة الترجمات وتحويل النص إلى كلام، إضافة إلى WebUI للمتصفح وصورة Docker.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق pyVideoTrans التجربة إذا أردت أداة مجانية واحدة للتفريغ النصي والترجمة والدبلجة وقبلت تثبيتًا يدويًا.**',
          'على الورق يغطي السلسلة كاملة: شيفرة GPL-3.0، ومحركات محلية وسحابية كثيرة، ودبلجة تراعي المتحدثين، وتكاملات استنساخ الصوت، وثلاث طرق للتشغيل. والجهة المطوّرة تعمل عليه بنشاط، بأربعة إصدارات في خمسة أسابيع.',
          'المقايضات واضحة. أرشيف Windows بلا توقيع، بحسب دليل المشروع، ومستضاف خارج ملفات الإصدار على GitHub، ويحتاج macOS وLinux إلى طرفية، وتُرسل الإعدادات الافتراضية النص إلى خدمات عبر الإنترنت، ولم يُعثر على شركة ولا على سياسة خصوصية للتطبيق نفسه. لم تختبر PromptQuorum جودة المخرجات. جرّبه على مقطع قصير تملك حقوقه، وراجع الموقع الرسمي قبل الاعتماد على إصدار أحدث.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع pyVideoTrans](https://pyvideotrans.com) — الصفحة الرئيسية وأقوال الميزات والأسئلة الشائعة وملاحظات التبرع والإعلانات، رُوجع في 20 نوفمبر 2026.',
          '[صفحة تنزيل Windows](https://en.pyvideotrans.com/downpackage) — حزمة Windows وحزمة التصحيح وإرشادات macOS/Linux، رُوجعت في 20 نوفمبر 2026.',
          '[دليل المستخدم](https://en.pyvideotrans.com/getstart) — سير العمل والإعدادات الافتراضية وجداول المحركات وتنبيه الأمان وطريقة تنزيل النماذج، رُوجع في 20 نوفمبر 2026.',
          '[اتفاقية ترخيص البرنامج والخدمة](https://en.pyvideotrans.com/law) — معالجة البيانات والتحقق من التحديثات والإبلاغ عن الأخطاء وإخلاء المسؤولية، رُوجعت في 20 نوفمبر 2026.',
          '[شروط الاستخدام](https://en.pyvideotrans.com/xieyi) — بند القانون الحاكم، رُوجعت في 20 نوفمبر 2026.',
          '[سياسة الخصوصية](https://en.pyvideotrans.com/yinsizhengce) — جمع البيانات في موقع التوثيق، رُوجعت في 20 نوفمبر 2026.',
          '[مستودع GitHub](https://github.com/jianchang512/pyvideotrans) — الترخيص وREADME وخطوات التثبيت وآخر commit بتاريخ 20 نوفمبر 2026، رُوجع في 20 نوفمبر 2026.',
          '[الإصدار 4.19](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.19) — تاريخ النشر وروابط التنزيل والتغييرات، رُوجع في 20 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مقارنة أدوات الصوت والكلام المحلية](/ar/power-local-llm/local-llm-voice-audio-compared) — تحويل النص إلى كلام والكلام إلى نص ووكلاء الصوت جنبًا إلى جنب.',
          '[مراجعة Buzz](/ar/power-local-llm/buzz-captions-review) — تفريغ Whisper دون اتصال وتصدير الترجمات.',
          '[مراجعة Subtitle Edit](/ar/power-local-llm/subtitle-edit-review) — محرّر ترجمات مع محركات محلية اختيارية.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-21',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/pyvideotrans-review-hero-ko.webp',
    title: 'pyVideoTrans 리뷰: 무료 영상 번역과 AI 더빙',
    seoTitle: 'pyVideoTrans 리뷰: 무료 영상 번역·더빙 도구',
    intro:
      'pyVideoTrans는 영상을 하나의 흐름으로 다른 언어로 번역하는 무료 오픈소스 도구입니다. 음성 인식, 자막 번역, AI 더빙, 완성 영상의 재합성까지 처리합니다. 이 리뷰는 프로젝트의 웹사이트와 사용자 가이드, GitHub 저장소와 README, GitHub 최신 릴리스를 바탕으로 합니다. PromptQuorum은 이 앱을 테스트하지 않았습니다.',
    metaDescription:
      'pyVideoTrans는 영상을 무료로 번역하고 더빙합니다. 지원 OS, 설치 방법, GPU 요건, 라이선스, 개인정보 보호와 미확인 사항을 정리했습니다.',
    twitterDescription:
      'pyVideoTrans는 영상 번역, 자막, AI 더빙을 위한 무료 GPL-3.0 도구입니다. Windows 패키지, 소스 설치, 로컬·클라우드 엔진, 개인정보, 미확인 사항.',
    audience:
      '음성이 담긴 영상을 다른 언어의 자막과 더빙으로 바꾸고 싶고, 음성 인식·번역·음성 엔진을 직접 고를 수 있는 영상 제작자, 교육자, 애호가',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'pyVideoTrans',
    targetKeywords: [
      'pyVideoTrans 리뷰',
      'pyVideoTrans 다운로드',
      '영상 번역 소프트웨어',
      'AI 영상 더빙',
      '로컬 영상 번역기',
      '영상 자막 오프라인 번역',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**pyVideoTrans는 Windows, macOS, Linux에서 쓸 수 있는 무료 GPL-3.0 오픈소스 도구로, 음성이 담긴 영상을 번역·더빙·자막이 입혀진 영상으로 하나의 흐름에서 바꿔 줍니다.** 음성, 번역, 음성 합성 엔진은 내 컴퓨터나 클라우드에서 실행할 수 있으며, 기본 번역·더빙 채널은 온라인 서비스입니다.',
    quickAnswerTop: {
      ko: {
        question: 'pyVideoTrans는 무엇이며 누구를 위한 도구입니까?',
        answer:
          'pyVideoTrans는 데스크톱, 명령줄, 브라우저에서 쓸 수 있는 도구로, 영상을 받아 적고 자막을 번역한 뒤 음성 합성 목소리로 더빙하여 영상을 다시 만듭니다. 무료 번역·더빙 흐름이 필요하고 엔진을 직접 고르고 설정할 수 있는 분께 적합합니다.',
        bullets: [
          '플랫폼: Windows(사전 패키지 압축 파일), macOS와 Linux(터미널에서 소스로 설치).',
          '가격: 무료이며, 외부 API 제공업체는 별도로 과금합니다.',
          '라이선스: GPL-3.0.',
          '버전: 4.19, 업스트림 마지막 업데이트는 2026년 11월 20일(최신 릴리스는 2026년 11월 17일).',
          '개발 주체: GitHub 계정 jianchang512 뒤의 개발자가 운영하는 개인 프로젝트이며, 회사 이름은 언급되지 않습니다.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: '개요', anchor: 'overview' },
      { label: '설치 방법', anchor: 'get-it' },
      { label: '요구 사항', anchor: 'requirements' },
      { label: '기능', anchor: 'features' },
      { label: '개인정보 보호와 데이터 흐름', anchor: 'privacy' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 내용', anchor: 'who-should-not-use' },
      { label: '대안', anchor: 'alternatives' },
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
            text: 'pyVideoTrans는 영상의 음성을 듣고 자막을 만들어 번역한 뒤 합성 음성으로 더빙하여 대상 언어의 새 영상을 만들어 내는 무료 오픈소스 도구입니다.',
          },
          {
            type: 'plain-terms',
            text: '네 개의 공정이 이어진 조립 라인을 떠올리시면 됩니다. 받아 적기, 번역, 음성 만들기, 합치기입니다. 각 공정에서 로컬 모델이나 온라인 서비스를 고를 수 있고, 영상 하나만 처리하는 모드에서는 중간에 멈추어 문장을 고칠 수 있습니다.',
          },
        ],
        items: [
          '가이드에 따르면 기본값은 음성 인식에 faster-whisper large-v3-turbo, 번역에 Google 번역, 음성에 Edge-TTS이며, 뒤의 둘은 온라인 서비스입니다.',
          'README에 따르면 음성 복제는 F5-TTS, CosyVoice, GPT-SoVITS 등 통합된 모델로 제공됩니다.',
          '가이드에 따르면 Windows 패키지는 디지털 서명이 없는 휴대용 압축 파일이므로 보안 소프트웨어가 경고할 수 있습니다.',
          'macOS와 Linux에는 패키지가 없으며, 가이드는 FFmpeg, uv, 저장소 복제를 쓰는 터미널 설치를 안내합니다.',
          'PromptQuorum은 앱을 테스트하지 않았으므로 번역, 더빙, 타이밍 품질에 대해서는 어떤 주장도 하지 않습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '영상을 번역하고 더빙하는 일에는 저작권이, 음성 복제에는 개인의 목소리에 대한 권리가 관련될 수 있습니다. 웹사이트는 영상 내용의 법적 문제는 사용자와 권리자 사이의 일이라고 밝히고 있습니다. 게시하기 전에 권리를 확인하십시오. 이는 일반 정보이며 법률 자문이 아닙니다.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**pyVideoTrans는 음성 인식, 자막 번역, 음성 합성 더빙, 영상 합성을 이어 붙여 영상을 한 구어에서 다른 언어로 바꿉니다.**',
          '프로젝트는 GitHub의 jianchang512 계정에 있으며, 웹사이트는 이를 관심에서 시작한 개인 오픈소스 프로젝트로, 사업 모델이 없고 회사 이름도 밝히지 않았다고 설명합니다. 웹사이트에 따르면 2023년 10월부터 유지보수되고 있습니다. 최신 릴리스는 2026년 11월 17일에 공개된 버전 4.19이며, 저장소의 마지막 커밋(2026년 11월 20일)은 번역 수정을 병합한 것입니다. 2026년 10월 13일부터 11월 17일 사이에 4.16부터 4.19까지 네 개의 릴리스가 나와 최근 활동이 활발합니다.',
          '전체 영상 흐름 외에도 SRT 자막으로의 일괄 음성 인식, 자막 일괄 더빙, SRT 번역을 별도 도구로 제공합니다. README는 화자 구분, 다중 역할 더빙, 목소리와 배경음 분리 도구, 영상과 자막 병합, 오디오와 영상 정렬도 언급합니다. 데스크톱 창, 명령줄, 브라우저 화면에서 사용할 수 있습니다.',
          'README에는 후원사 배너가 두 개 있고, 웹사이트는 문서 서버와 테스트용 토큰 비용을 충당하려고 Google 광고와 후원 링크를 일부 두었다고 밝힙니다. 이는 개발 주체의 설명입니다. PromptQuorum은 앱을 실행하지 않았고 출력을 다른 도구와 비교하지도 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '설치 방법',
        content: [
          '**Windows 사용자는 사전 패키지 압축 파일을 내려받아 풀고 sp.exe를 더블클릭하며, macOS와 Linux 사용자는 터미널에서 소스로 설치합니다.**',
          '최신 GitHub 릴리스에는 첨부 파일이 없습니다. 릴리스 노트가 Baidu Netdisk와 Hugging Face의 Windows 압축 파일을 안내하고, 웹사이트 다운로드 페이지에도 같은 빌드가 올라와 있습니다. 가이드는 공백이나 중국어 문자가 없는 짧은 폴더 경로에 압축을 풀고, Program Files 같은 보호된 폴더를 피하며, 압축 파일 안에서 sp.exe를 직접 실행하지 말라고 안내합니다.',
        ],
        columns: ['플랫폼', '받는 방법'],
        rows: [
          { '플랫폼': '[Windows 10/11](https://en.pyvideotrans.com/downpackage)', '받는 방법': '.7z(2.7 GB); sp.exe 실행; 가이드상 서명 없음' },
          { '플랫폼': '[Windows 패치](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.19)', '받는 방법': '이전 패키지에 덮어쓰는 400 MB 패치' },
          { '플랫폼': '[macOS](https://en.pyvideotrans.com/getstart)', '받는 방법': '소스 설치: Homebrew, FFmpeg, uv, git clone, uv sync' },
          { '플랫폼': '[Linux](https://en.pyvideotrans.com/getstart)', '받는 방법': '소스 설치: apt, FFmpeg, uv, git clone, uv sync' },
          { '플랫폼': '[Docker / WebUI](https://github.com/jianchang512/pyvideotrans#readme)', '받는 방법': 'docker build와 run; 브라우저 화면은 7860 포트' },
          { '플랫폼': '[웹사이트](https://pyvideotrans.com)', '받는 방법': '가이드와 다운로드 페이지가 있는 공식 사이트' },
          { '플랫폼': '[개인정보 처리방침](https://en.pyvideotrans.com/yinsizhengce)', '받는 방법': '문서 사이트 대상이며 앱은 해당하지 않음' },
          { '플랫폼': '[소스 코드](https://github.com/jianchang512/pyvideotrans)', '받는 방법': 'GitHub 저장소(GPL-3.0)' },
        ],
        note: 'macOS와 Linux는 터미널과 개발자 방식의 설치가 필요하며, 터미널 없이 쓸 수 있는 방법은 Windows 압축 파일뿐입니다.',
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항',
        content: [
          '**웹사이트는 최소 하드웨어 요건이 없고 NVIDIA GPU는 선택 사항이라고 밝히지만, RAM 수치는 제시하지 않습니다.**',
          '로컬 모델은 패키지에 들어 있지 않습니다. 가이드에 따르면 호출용 코드만 내장되어 있고 모델은 처음 사용할 때 내려받으므로, 첫 실행에는 인터넷 연결과 압축 파일 외의 디스크 공간이 필요합니다.',
        ],
        columns: ['항목', '제시된 수치'],
        rows: [
          { '항목': '운영 체제', '제시된 수치': 'Windows 10/11 패키지; macOS·Linux는 소스로' },
          { '항목': 'NVIDIA GPU', '제시된 수치': '선택; 가속에는 CUDA 12.8과 cuDNN 9.11' },
          { '항목': '가장 큰 Whisper 모델', '제시된 수치': 'large-v3는 VRAM 8 GB 이상 필요' },
          { '항목': 'CPU만 사용', '제시된 수치': '웹사이트: NVIDIA GPU 유무와 관계없이 실행' },
          { '항목': '시스템 RAM', '제시된 수치': '명시되지 않음' },
          { '항목': 'Python(소스 설치)', '제시된 수치': 'README는 3.10을 권장' },
          { '항목': 'FFmpeg', '제시된 수치': 'README에 따르면 소스 설치에 필요' },
        ],
        note: '가이드에 따르면 무료 온라인 채널을 집중적으로 쓰면 요청 횟수 제한에 걸릴 수 있습니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**원클릭 영상 번역 흐름과 각 단계를 따로 쓸 수 있는 도구를 함께 갖추고 있습니다.** 아래 항목은 README, 웹사이트, 가이드에 있는 개발 주체의 설명입니다.',
        ],
        items: [
          'Translation V/A: 음성 인식, 자막 번역, 더빙, 영상 합성을 한 번에 실행하며 일괄 대기열을 지원합니다.',
          '독립 도구: SRT로의 일괄 음성 인식, 자막이나 텍스트로 하는 더빙, 타임스탬프를 유지하는 SRT 번역.',
          '화자 구분과 다중 역할 더빙으로 화자마다 다른 목소리를 줄 수 있습니다.',
          'F5-TTS, CosyVoice, GPT-SoVITS 등 통합 모델을 통한 음성 복제.',
          '영상 하나만 처리하는 모드에서는 인식, 번역, 더빙 뒤에 멈추어 직접 교정할 수 있습니다.',
          '동기화 옵션: 오디오 빠르게 하기, 영상 느리게 하기, 자막 삽입.',
          '웹사이트에 따르면 로컬과 온라인을 합쳐 30개 이상의 인식·번역·음성 채널.',
          '보조 도구: 목소리와 배경음 분리, 영상과 자막 병합, 오디오와 영상 정렬.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 데이터 흐름',
        content: [
          '**소프트웨어 라이선스 페이지에 따르면 핵심 기능은 내 컴퓨터에서 실행되고 영상이나 사용 데이터를 개발자에게 업로드하지 않지만, 선택한 온라인 엔진에는 데이터가 전송됩니다.**',
          '이 페이지는 Microsoft Azure, OpenAI, Edge TTS 같은 외부 서비스로 보내는 텍스트, 오디오, 영상이 내 컴퓨터에서 해당 제공업체로 직접 전달되며 그 제공업체의 정책을 따른다고 설명합니다. 가이드에 따르면 기본값인 Google 번역과 Edge-TTS는 가입 없이 온라인으로 동작합니다. 선택 사항인 LLM 교정 단계는 가이드에 따르면 기본적으로 DeepSeek 채널을 사용합니다.',
          '앱은 웹사이트의 정적 파일로 새 버전이 있는지 확인합니다. 오류 보고 버튼은 포럼 페이지를 열며, 해당 페이지에 따르면 게시 버튼을 누르지 않는 한 아무것도 전송되지 않습니다. 개인정보 처리방침은 문서 사이트를 대상으로 하며 로그, 쿠키, Google AdSense, 분석 서비스를 언급합니다. PromptQuorum은 네트워크 트래픽을 캡처하지 않았습니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        content: [
          '**pyVideoTrans는 무료이면서 설정 폭이 넓은 번역·더빙 흐름을 원하고 엔진 선택을 감당할 수 있는 분께 맞습니다.**',
        ],
        items: [
          '자신의 영상에 다른 언어의 자막과 더빙 음성을 입히고 싶은 제작자.',
          '수동 교정과 함께 일괄 받아쓰기와 자막 번역을 원하는 교육자와 팀.',
          '명령줄, 브라우저 화면, Docker 배포를 원하는 기술 사용자.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        content: [
          '**pyVideoTrans는 맞지 않는 경우도 있으며, 확인하지 못한 세부 사항이 여러 가지 남아 있습니다.**',
        ],
        items: [
          '적합하지 않음: 음악만 있거나 소리 없는 화면만 있는 영상(가이드는 지원하지 않는다고 명시), 그리고 화면에 박힌 자막을 지우고 싶은 경우(가이드는 불가능하다고 명시).',
          '적합하지 않음: 설치 프로그램을 원하는 macOS·Linux 사용자. 둘 다 터미널 설치가 필요합니다.',
          '적합하지 않음: 서명되고 스토어로 배포되는 Windows 앱이 필요한 경우. 패키지는 프로젝트 가이드에 따르면 서명이 없고 GitHub 릴리스 파일에도 포함되지 않습니다.',
          '미확인: 번역, 더빙, 타이밍의 품질과 속도, 지원 언어 수. PromptQuorum은 테스트를 하지 않았고 Windows 패키지를 내려받거나 검사하지도 않았습니다.',
          '미확인: 제시된 수치 외의 RAM과 디스크 요구량, 그리고 CPU만으로 실용적인 속도가 나오는 로컬 모델.',
          '미확인: 개별 모델의 라이선스. 웹사이트는 사용자가 각 모델 개발사의 라이선스와 상업적 조건을 직접 확인하도록 안내합니다.',
          '미확인: 개발 주체의 법인. 디렉터리의 중국 국기는 준거법으로 중국 법을 명시한 이용 약관에 근거한 것이며, 회사 주소는 찾지 못했습니다.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: '경쟁 도구와 대안',
        itemHeadings: true,
        content: [
          '**pyVideoTrans는 영상 번역의 전 과정을 다루는 반면, 아래 대안은 받아쓰기나 자막에 집중합니다.** PromptQuorum은 직접 비교하지 않았으며, 메모는 각 앱의 리뷰에서 가져왔습니다.',
        ],
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이'],
        rows: [
          { '앱': '[Buzz](/ko/power-local-llm/buzz-captions-review)', '플랫폼': 'Windows, macOS, Linux', '가격 / 라이선스': '무료 / MIT', '핵심 차이': 'Whisper 오프라인 받아쓰기·번역과 자막 내보내기; 자막 중심' },
          { '앱': '[Subtitle Edit](/ko/power-local-llm/subtitle-edit-review)', '플랫폼': 'Windows, macOS, Linux', '가격 / 라이선스': '무료 / MIT', '핵심 차이': '선택형 로컬 받아쓰기와 자동 번역을 갖춘 자막 편집기; 자막 중심' },
          { '앱': '[Sablate](/ko/power-local-llm/sablate-review)', '플랫폼': 'Windows, macOS', '가격 / 라이선스': '프리미엄 / 독점', '핵심 차이': '개발사에 따르면 받아쓰기, 번역, 꾸민 자막 삽입; 클로즈드 소스' },
        ],
        note: '선택하기 전에 각 앱의 최신 가격, 라이선스, 플랫폼을 해당 앱의 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'pyVideoTrans는 완전히 오프라인으로 동작합니까?',
            a: '모든 단계에서 로컬 엔진을 쓸 때만 가능합니다. 기본 번역·더빙 채널은 온라인이고 로컬 모델은 처음 사용할 때 내려받으므로, 처음부터 오프라인으로 실행하려면 파일이 미리 준비되어 있어야 합니다.',
          },
          {
            q: '내 목소리를 복제할 수 있습니까?',
            a: 'README는 F5-TTS, CosyVoice, GPT-SoVITS를 통합된 제로샷 음성 복제 모델로 나열하며, 가이드에도 원래 목소리를 복제하는 페이지가 있습니다. 결과 품질은 여기서 테스트하지 않았습니다.',
          },
          {
            q: '공식 유료 버전이 있습니까?',
            a: '웹사이트에 따르면 없습니다. Taobao, Xianyu, Pinduoduo 같은 쇼핑 플랫폼의 유료 사본은 공식이 아니며, 개발자는 판매를 허가한 적도 없고 그로 인한 수익도 얻지 않는다고 밝힙니다.',
          },
          {
            q: '번역한 영상을 YouTube에 올려도 됩니까?',
            a: '웹사이트에 따르면 어디에 올릴지는 사용자가 결정하며, 영상 내용을 다시 공개해도 되는지는 사용자와 권리자 사이의 문제입니다. 사용하는 모델의 라이선스 조건도 읽어 보라고 안내합니다.',
          },
          {
            q: '서버나 브라우저에서 실행할 수 있습니까?',
            a: '예. README는 영상 번역, 음성 인식, 자막 번역, 음성 합성 작업을 갖춘 명령줄 인터페이스와 브라우저 WebUI, Docker 이미지를 설명합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**받아쓰기, 번역, 더빙을 하나의 무료 도구로 처리하고 싶고 직접 설치하는 수고를 감수할 수 있다면 pyVideoTrans를 써 볼 만합니다.**',
          '문서상으로는 전체 흐름을 다룹니다. GPL-3.0 코드, 다양한 로컬·클라우드 엔진, 화자별 더빙, 음성 복제 연동, 세 가지 실행 방식입니다. 개발 주체는 활발하게 작업하고 있으며 5주 동안 네 번 릴리스했습니다.',
          '절충점도 분명합니다. Windows 압축 파일은 프로젝트 가이드에 따르면 서명이 없고 GitHub 릴리스 파일 밖에 호스팅되며, macOS와 Linux는 터미널이 필요합니다. 기본값은 텍스트를 온라인 서비스로 보내고, 앱 자체의 회사 정보나 개인정보 처리방침은 찾지 못했습니다. PromptQuorum은 출력 품질을 테스트하지 않았습니다. 권리를 가진 짧은 영상으로 먼저 시험해 보고, 더 새로운 빌드를 믿기 전에 공식 사이트를 확인하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[pyVideoTrans 웹사이트](https://pyvideotrans.com) — 홈페이지, 기능 및 FAQ 설명, 후원과 광고 관련 안내. 2026년 11월 20일 확인.',
          '[Windows 다운로드 페이지](https://en.pyvideotrans.com/downpackage) — Windows 패키지, 패치 패키지, macOS/Linux 안내. 2026년 11월 20일 확인.',
          '[사용자 가이드](https://en.pyvideotrans.com/getstart) — 작업 흐름, 기본값, 엔진 표, 보안 안내, 모델 내려받기 방식. 2026년 11월 20일 확인.',
          '[소프트웨어 라이선스 및 서비스 계약](https://en.pyvideotrans.com/law) — 데이터 처리, 업데이트 확인, 오류 보고, 면책. 2026년 11월 20일 확인.',
          '[이용 약관](https://en.pyvideotrans.com/xieyi) — 준거법 조항. 2026년 11월 20일 확인.',
          '[개인정보 처리방침](https://en.pyvideotrans.com/yinsizhengce) — 문서 사이트의 데이터 수집. 2026년 11월 20일 확인.',
          '[GitHub 저장소](https://github.com/jianchang512/pyvideotrans) — 라이선스, README, 설치 단계, 2026년 11월 20일의 마지막 커밋. 2026년 11월 20일 확인.',
          '[릴리스 4.19](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.19) — 공개 날짜, 다운로드 링크, 변경 사항. 2026년 11월 20일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[로컬 음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 음성 합성, 음성 인식, 음성 에이전트를 나란히 비교합니다.',
          '[Buzz 리뷰](/ko/power-local-llm/buzz-captions-review) — 오프라인 Whisper 받아쓰기와 자막 내보내기.',
          '[Subtitle Edit 리뷰](/ko/power-local-llm/subtitle-edit-review) — 선택형 로컬 엔진을 갖춘 자막 편집기.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그.',
        ],
      },
    },
  },
}
