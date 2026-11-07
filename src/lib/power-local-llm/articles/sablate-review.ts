// Sablate Review: offline subtitle generation, translation and burn-in for Windows and Mac
// Slug: sablate-review
// Companion to: subtitle-edit-review, buzz-captions-review, aiko-review, macwhisper-review, local-llm-voice-audio-compared
// Facts verified 2026-11-06 against sablate.com (home, pricing, features, download, docs, changelog, about, privacy policy, terms). Latest release 1.0.2 (2026-10-19).
// Not hands-on tested. Stale-project warning is OFF (18 days since the last update on 2026-11-06).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-06',
    dateModified: '2026-11-07',
    next_refresh_due: '2027-05-06',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/sablate-review-hero-en.webp',
    title: 'Sablate Review: Subtitles and Burn-In for Windows and Mac',
    seoTitle: 'Sablate Review: Subtitle Generator for Windows and Mac',
    intro: "Sablate is a freemium, closed-source subtitle app for Windows and Mac: you drop in a video and, per its maker, it transcribes the speech with OpenAI's Whisper model on your own computer, adds translation layers, lets you edit the timing, and burns styled captions into the video. This review covers what the maker's website, changelog and privacy policy document, where those pages disagree, and how Sablate compares with other subtitle and transcription tools in the directory.",
    metaDescription: 'Sablate review: subtitles, translation and burn-in for Windows and Mac that, per its maker, run on your own computer. Free tier, Pro $29 once. Not tested.',
    twitterDescription: 'Sablate review: Whisper subtitles for Windows and Mac, translated and burned into the video on your own computer, per its maker. Price, privacy, limits and alternatives.',
    audience: 'Video creators, editors and teachers on Windows or Mac who want subtitles and translations without uploading their footage — covers price, install, models, privacy, limits and alternatives.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Sablate review',
    targetKeywords: [
      'sablate review',
      'sablate subtitles',
      'offline subtitle generator',
      'local whisper subtitles windows mac',
      'burn subtitles into video offline',
      'private video transcription',
      'subtitle translation without cloud',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Mac',
      'NVIDIA GPU',
    ],
    leadAnswerBlock: "**Sablate is a closed-source subtitle app for Windows and Mac that, per its maker, transcribes, translates and renders captions on your own computer without uploading your video.** It still uses the network for updates, license checks and usage statistics that the maker describes as anonymous. A free tier covers videos up to 10 minutes, and Pro costs $29 once or $5.99 a month. This review rests on the maker's public website, changelog, documentation and privacy policy, not on hands-on testing.",
    quickAnswerTop: {
      en: {
        question: 'Is Sablate a local subtitle tool?',
        answer: "According to its maker, yes: transcription runs with Whisper (faster-whisper), offline translation with Argos and caption rendering with ffmpeg, all on your Windows PC or Mac, and audio and video are not uploaded to the maker. Cloud engines such as OpenAI, ElevenLabs, DeepL and Claude are optional, Pro-only and need your own API key. The app still makes update checks, a daily Pro license check and usage-statistics calls that the maker describes as anonymous. The code is closed and PromptQuorum did not inspect network traffic, so the claim is the maker's own.",
        bullets: [
          'Drop in a video or audio file, get a timed transcript, add translation layers, edit in a timeline, then export .srt, .vtt, .txt, .ass or a burned-in .mp4.',
          'Thirteen caption styles, from Hormozi and Karaoke to Cinema, rendered with libass.',
          'Four Whisper quality tiers from Fast (78 MB) to Best (3.09 GB); an NVIDIA GPU is used automatically, otherwise the CPU.',
          'Windows 10 or newer and macOS 12 or newer only; no Linux, iPhone or Android version.',
          'Free covers videos up to 10 minutes; Pro adds every Whisper tier, cloud engines with your own key and unmarked exports.',
        ],
        updatedDate: '2026-11-06',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get Sablate', anchor: 'get-it' },
      { label: 'Sablate at a Glance', anchor: 'at-a-glance' },
      { label: 'What Sablate Is', anchor: 'what-is-sablate' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Features', anchor: 'features' },
      { label: 'Models and Hardware', anchor: 'models-hardware' },
      { label: 'Privacy, License and Cost', anchor: 'privacy' },
      { label: 'From the Maker', anchor: 'from-the-maker' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Sablate vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Sablate', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Sablate', anchor: 'who-should-not-use' },
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
            text: 'Sablate is a freemium subtitle app for Windows and Mac that, per its maker, runs Whisper transcription, offline translation and caption burn-in on your own computer instead of a cloud service.',
          },
          {
            type: 'plain-terms',
            text: 'Think of a subtitle studio on your desk: per its maker, your video stays on your drive while the app listens, writes the captions, translates them and paints them onto the picture.',
          },
        ],
        items: [
          'Local claim: transcription, offline translation and rendering run on the device; cloud engines are optional and use your own key.',
          'License and maker: proprietary, made by FuumiSoft, a small independent studio in Turkey, per the developer (the website does not yet say so; not independently verified).',
          'Price: free for videos up to 10 minutes, Pro for $29 once or $5.99 a month, with a 30-day refund on the one-time license.',
          'Maintenance: version 1.0.2 was released on 19 October 2026, so the project is actively updated, but it launched only on 1 September 2026.',
          'Gaps: no speaker labels, no Linux or mobile version, and no usage-statistics opt-out was found.',
        ],
      },
      getItSablate: {
        id: 'get-it',
        title: 'Get Sablate',
        content: [
          '**Sablate installs like any desktop app, so no terminal is needed.** Download the installer for your system from the official site; the Whisper speech models are fetched inside the app on first use.',
        ],
        columns: ['Platform', 'Get It'],
        rows: [
          {
            Platform: 'Windows',
            'Get It': '[Download for Windows](https://sablate.com/download) — .exe, Windows 10 64-bit or newer, about 320 MB (1.3 GB installed)',
          },
          {
            Platform: 'Mac',
            'Get It': '[Download for Mac](https://sablate.com/download) — .dmg, macOS 12 or newer, separate Apple Silicon and Intel builds',
          },
          {
            Platform: 'Free plan',
            'Get It': '[See the plans](https://sablate.com/pricing) — no account and no credit card',
          },
          {
            Platform: 'Release notes',
            'Get It': '[Changelog](https://sablate.com/changelog)',
          },
          {
            Platform: 'Website',
            'Get It': '[sablate.com](https://sablate.com)',
          },
          {
            Platform: 'Privacy policy',
            'Get It': '[Sablate privacy policy](https://sablate.com/legal/privacy)',
          },
          {
            Platform: 'Source code',
            'Get It': 'Closed source; no public repository',
          },
        ],
        note: 'The download page lists Windows and macOS only; no Linux, iOS or Android build is offered.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Sablate at a Glance',
        columns: ['Attribute', 'Sablate'],
        rows: [
          { Attribute: 'Platform', Sablate: 'Windows 10+ and macOS 12+' },
          { Attribute: 'Price', Sablate: 'Free tier; Pro $29 once or $5.99/month' },
          { Attribute: 'License', Sablate: 'Proprietary, closed source' },
          { Attribute: 'Runs', Sablate: 'On your computer with faster-whisper, Argos and ffmpeg; internet for downloads, updates and license checks' },
          { Attribute: 'Languages', Sablate: 'About 100 spoken languages with automatic detection; Argos pair count not stated' },
          { Attribute: 'Speaker labels', Sablate: 'No, listed as not supported' },
          { Attribute: 'Real-time transcription', Sablate: 'Not stated; Sablate processes files, not live audio' },
          { Attribute: 'Usable on CPU only', Sablate: 'Yes, slower without an NVIDIA GPU' },
          { Attribute: 'Local API server', Sablate: 'Not stated' },
        ],
        note: 'Attributes follow the speech-to-text comparison used in the Local LLM Software Directory. A missing statement on the site means unknown, not unsupported.',
      },
      whatIsSablate: {
        id: 'what-is-sablate',
        title: 'What Sablate Is',
        content: [
          '**Sablate is a subtitle workflow for files already on your disk, not a live-captioning or dictation tool.** You add a video or audio file; the app transcribes it with Whisper, lets you add translation layers on top, offers an editor for timing and text, applies a caption style and exports the result.',
          'Per the developer, Furkan Bağcı, Sablate is made by FuumiSoft, a small independent software studio in Turkey that also makes File Arbor and Vidray; the website does not yet state this, and PromptQuorum has not verified it independently. The pages say it does not download from YouTube, dub, clone voices, auto-clip or label speakers.',
          'This review draws on the website, changelog, documentation, privacy policy and terms. It involved no hands-on testing, so accuracy, speed and stability are not rated here.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is an install, a model download and a job.** The steps follow the website and its documentation.',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Download the Windows .exe or the Mac .dmg from the [download page](https://sablate.com/download); the free plan needs no account.',
          },
          {
            title: 'Add a video',
            whyItMatters: 'Drop in .mp4, .mov, .mkv, .webm, .avi, .m4v, .mp3, .wav, .m4a or .flac files, or a folder of them on Pro, and pick a Whisper tier.',
          },
          {
            title: 'Transcribe and translate',
            whyItMatters: 'The speech model downloads the first time you use a tier. Then add translation layers: Argos works offline, one language pack per pair.',
          },
          {
            title: 'Edit, style and export',
            whyItMatters: 'Retime and split cues on the timeline, choose one of the 13 presets, then export subtitle files or a burned-in video at 16:9, 9:16 or 1:1.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The feature set centres on private subtitles for short-form and long-form video.** Everything below comes from the website, documentation and changelog.',
        ],
        items: [
          '**Local transcription.** faster-whisper in four tiers, with automatic NVIDIA GPU acceleration on Windows and a CPU fallback.',
          '**Translation layers.** Add a target language on top of a transcript; Argos runs offline, and DeepL, OpenAI and Claude work with your own key on Pro.',
          '**Subtitle editor.** Video, transcript and style panel in one window, with timeline retiming, split and merge, and a reading-speed warning.',
          '**Caption styles.** Thirteen presets, a word-by-word karaoke sweep and, on Pro, custom presets.',
          '**Export.** .srt, .vtt and .txt; on Pro also .ass and a soft-subtitled .mkv with one track per language; burned-in .mp4 on every plan.',
          '**Batch jobs.** Pro accepts a folder of videos and exports every language in one click.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Models and Hardware',
        content: [
          '**The app runs Whisper through faster-whisper, with four tiers.** The documentation names Fast (tiny, 78 MB), Balanced (small, 486 MB), Accurate (large-v3-turbo, 1.62 GB) and Best (large-v3, 3.09 GB); the download page gives a range of 75 MB to 2.9 GB. Per the developer, both describe the same files: the documentation counts in decimal units and the download page in binary units. Free includes Fast and Balanced, and Pro adds Accurate and Best.',
          'An NVIDIA GPU is used automatically and its CUDA runtime downloads on first use; without one the app runs on the CPU, and on macOS it runs on the CPU. The site gives no RAM or GPU minimum. The Windows install takes about 1.3 GB of disk. The site claims a GPU makes transcription roughly 5 to 10 times faster; PromptQuorum did not measure speed or accuracy.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy, License and Cost',
        content: [
          '**The privacy policy says the desktop application processes your media locally and that audio and video files are never uploaded.** The policy is dated October 2026. If you switch on a cloud provider with your own key, the audio or text goes straight from your machine to that provider under its terms, and the app says so at that moment.',
          'The network is still used elsewhere. The documentation lists an update check every few hours, a license check about once a day on Pro, anonymous usage statistics and an optional feature-suggestion form. The statistics go to PostHog in the EU and, per the policy, include the app version, system, processor type, plan and whether a GPU exists, but never audio, video, transcripts, file names or keys. The pages we read describe no setting to turn the statistics off. The code is closed and PromptQuorum did not examine network traffic, so these statements are the maker\'s own.',
          'It is a freemium, proprietary product. Free covers videos up to 10 minutes and 3 jobs a month with a credit line or corner mark on exports; Pro costs $29 once or $5.99 a month and is active on one device at a time. The site lists prices in US dollars and does not mention VAT. The one-time license has a 30-day refund; monthly payments are not refunded.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: "From the Maker",
        content: [
          "Furkan Bağcı, the developer of Sablate at FuumiSoft, read this review and wrote that he checked it against the Sablate pages and found nothing technically wrong. He added who makes the app (now stated above) and explained that the model sizes on the documentation page and the download page describe the same files, in decimal and binary units. The note below is the developer's own words, not PromptQuorum's independent assessment; PromptQuorum has not run the app.",
          "“Sablate exists to do the whole subtitle job on the computer where the footage already is: Whisper transcription, translation, editing and burn-in in one window, with no upload and no per-minute fee. The app is closed source, so rather than ask people to take 'private' on trust, the documentation lists every outbound call it makes (the update check, the Pro license check, anonymous usage statistics and the optional feedback form), and the privacy policy lists exactly what the statistics contain. Cloud engines are only there for people who bring their own key, and the app says so each time one is picked.”",
        ],
        note: "— Furkan Bağcı, FuumiSoft",
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            Benefit: 'Everything on your computer',
            'What it means in real use': 'Per the maker, transcription, offline translation and rendering need no upload and no per-minute fee.',
            'Limitation / caveat': 'Closed source, so the claim cannot be checked; update, license and statistics calls still use the network.',
          },
          {
            Benefit: 'Subtitles you can style',
            'What it means in real use': 'Thirteen presets and burn-in turn a transcript into finished short-form video.',
            'Limitation / caveat': 'Free exports carry a corner mark or credit line; .ass and .mkv export need Pro.',
          },
          {
            Benefit: 'One-time price',
            'What it means in real use': '$29 once avoids a subscription.',
            'Limitation / caveat': 'The license covers one device at a time; monthly payments are not refunded.',
          },
          {
            Benefit: 'About 100 languages',
            'What it means in real use': 'Spoken languages are detected automatically.',
            'Limitation / caveat': 'Argos language packs are per pair and no pair count is stated; no accuracy figures are published.',
          },
          {
            Benefit: 'Four Whisper tiers',
            'What it means in real use': 'A small model for quick drafts, larger ones for accuracy.',
            'Limitation / caveat': 'Accurate and Best need Pro and gigabytes of disk; speed claims are untested.',
          },
          {
            Benefit: 'Active development',
            'What it means in real use': 'Three releases between 1 September and 19 October 2026.',
            'Limitation / caveat': 'A very young product with no independent reviews found.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Sablate vs. Alternatives',
        content: [
          'These are the closest subtitle and transcription tools in the directory: a free open-source subtitle editor, a free open-source transcription app, a one-time-purchase Apple app and a Mac transcription app.',
        ],
        columns: ['App', 'Platforms', 'Price and license', 'Role', 'Key difference'],
        rows: [
          {
            App: 'Sablate',
            Platforms: 'Windows, Mac',
            'Price and license': 'Free tier, Pro $29 once, proprietary',
            Role: 'Subtitles with burn-in',
            'Key difference': 'Whisper, translation and styled burn-in in one app; closed source',
          },
          {
            App: '[Subtitle Edit](/power-local-llm/subtitle-edit-review)',
            Platforms: 'Windows, Mac, Linux',
            'Price and license': 'Free, MIT',
            Role: 'Subtitle editor',
            'Key difference': 'Open source with many engines; built for editing and translating existing subtitles',
          },
          {
            App: '[Buzz](/power-local-llm/buzz-captions-review)',
            Platforms: 'Mac, Windows, Linux',
            'Price and license': 'Free, MIT',
            Role: 'Transcription app',
            'Key difference': 'Free and open source; turns recordings into subtitles and transcripts',
          },
          {
            App: '[Aiko](/power-local-llm/aiko-review)',
            Platforms: 'iPhone, iPad, Mac',
            'Price and license': '$24 once (US price), proprietary',
            Role: 'Apple transcription app',
            'Key difference': 'Apple devices only; no Windows version',
          },
          {
            App: '[MacWhisper](/power-local-llm/macwhisper-review)',
            Platforms: 'macOS',
            'Price and license': 'Freemium, proprietary',
            Role: 'Mac transcription app',
            'Key difference': 'Transcribes files, meeting recordings and live dictation; Mac only',
          },
        ],
        note: "Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each project's own page before deciding.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Sablate',
        items: [
          '**Short-form video creators on Windows or Mac.** Styled, burned-in captions come out of the same app that transcribes.',
          '**People who keep footage private.** Transcription and offline translation stay on the computer, per the maker.',
          '**Teachers and editors who need several languages.** Translation layers export one track per language.',
          '**Buyers who prefer paying once.** A $29 one-time Pro license exists next to the subscription.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Sablate',
        items: [
          '**Linux, iPhone and Android users.** Only Windows and Mac builds are offered.',
          '**Anyone who needs speaker labels or live captions.** The maker lists speaker labels as not supported and describes a file-based workflow; the pages we read do not mention live captioning.',
          '**Anyone who needs auditable software.** The code is closed and the privacy claims cannot be inspected.',
          '**Anyone who wants fully free software.** Free is limited to 10-minute videos; Subtitle Edit and Buzz are free and open source.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Sablate work offline?',
            a: 'The maker says yes, once the speech model and any Argos language packs are downloaded. Updates, Pro license checks and usage statistics need a connection but, per the docs, the app keeps working without them. PromptQuorum did not test it offline.',
          },
          {
            q: 'Is my video sent to the cloud?',
            a: 'The privacy policy says media is never uploaded to the maker, except when you enable a cloud engine with your own key. The code is closed and PromptQuorum did not inspect network traffic.',
          },
          {
            q: 'Which file formats does it accept?',
            a: 'Video and audio including .mp4, .mov, .mkv, .webm, .avi, .m4v, .mp3, .wav, .m4a and .flac, according to the documentation.',
          },
          {
            q: 'Can I try it before paying?',
            a: 'Yes: the free plan has no account or credit card, but it limits video length to 10 minutes and jobs to 3 a month. No separate trial is mentioned.',
          },
          {
            q: "Who makes Sablate?",
            a: "According to its developer, Furkan Bağcı, Sablate is made by FuumiSoft, a small independent software studio in Turkey that also makes File Arbor and Vidray. The Sablate website does not state this clearly yet, and PromptQuorum has not verified it independently.",
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Sablate is a good fit if you want to turn video on a Windows PC or Mac into translated, styled, burned-in captions where, per the maker, the work stays on your own computer, and you accept closed-source software. It has a usable free tier, a one-time Pro price and a recent release.',
          'The caveats are scope and verifiability: no Linux or mobile version, no speaker labels, closed code, a maker (FuumiSoft, Turkey) that only the developer\'s message names, not the website, privacy claims that PromptQuorum could not check and a product that is only a couple of months old. Try the free plan on a short clip before you buy.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Sablate website](https://sablate.com) — features and pricing.',
          '[Download page](https://sablate.com/download) — platforms and system requirements.',
          '[Documentation](https://sablate.com/docs) — models, formats, network calls and FAQ.',
          '[Changelog](https://sablate.com/changelog) — version history; version 1.0.2 dated 19 October 2026.',
          '[Privacy policy](https://sablate.com/legal/privacy) — data handling, dated October 2026.',
          '[Terms of use](https://sablate.com/legal/terms) — license, refund and device terms.',
          "Message from the developer (Furkan Bağcı, 7 November 2026) — maker details, model-size units and the founder note; his own statements, not independently verified.",
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Voice and Speech Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — text-to-speech, speech-to-text and voice agents side by side.',
          '[Subtitle Edit Review](/power-local-llm/subtitle-edit-review) — a free open-source subtitle editor with local speech-to-text.',
          '[Buzz Review](/power-local-llm/buzz-captions-review) — a free transcription app for three desktop systems.',
          '[Whisper.cpp Review](/power-local-llm/whisper-cpp-review) — the open engine behind many local Whisper apps.',
          '[The Complete Local LLM Software Directory](/directory) — a broader directory of local AI tools across platforms.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-06',
    dateModified: '2026-11-07',
    next_refresh_due: '2027-05-06',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/sablate-review-hero-de.webp',
    title: 'Sablate Rezension: Untertitel und Einbrennen für Windows und Mac',
    seoTitle: 'Sablate Rezension: Untertitel-Tool für Windows und Mac',
    intro: 'Sablate ist eine Freemium-App für Windows und Mac mit geschlossenem Quellcode: Sie ziehen ein Video hinein, die App transkribiert laut Hersteller die Sprache mit OpenAIs Whisper-Modell auf Ihrem eigenen Computer, ergänzt Übersetzungsebenen, lässt Sie das Timing bearbeiten und brennt gestaltete Untertitel ins Video ein. Diese Rezension fasst zusammen, was Website, Änderungsprotokoll und Datenschutzerklärung des Herstellers dokumentieren, wo sich diese Seiten widersprechen und wie Sablate im Vergleich zu anderen Untertitel- und Transkriptions-Werkzeugen im Verzeichnis abschneidet.',
    metaDescription: 'Sablate Rezension: Untertitel, Übersetzung und Einbrennen für Windows und Mac, laut Hersteller lokal. Gratis-Tarif, Pro $29 einmalig. Nicht getestet.',
    twitterDescription: 'Sablate Rezension: Whisper-Untertitel für Windows und Mac, übersetzt und laut Hersteller auf dem eigenen Computer ins Video eingebrannt. Preis, Datenschutz, Grenzen und Alternativen.',
    audience: 'Videoersteller, Cutter und Lehrende unter Windows oder Mac, die Untertitel und Übersetzungen ohne Upload ihres Materials möchten — behandelt Preis, Installation, Modelle, Datenschutz, Grenzen und Alternativen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Sablate review',
    targetKeywords: [
      'sablate rezension',
      'sablate untertitel',
      'offline untertitel generator',
      'lokale whisper untertitel windows mac',
      'untertitel offline ins video einbrennen',
      'private videotranskription',
      'untertitel übersetzen ohne cloud',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Mac',
      'NVIDIA GPU',
    ],
    leadAnswerBlock: '**Sablate ist eine Untertitel-App für Windows und Mac mit geschlossenem Quellcode, die laut Hersteller auf Ihrem eigenen Computer transkribiert, übersetzt und Untertitel rendert ohne Ihr Video hochzuladen.** Das Netzwerk nutzt es dennoch für Updates, Lizenzprüfungen und eine Nutzungsstatistik, die der Hersteller als anonym beschreibt. Ein kostenloser Tarif deckt Videos bis 10 Minuten ab, und Pro kostet $29 einmalig oder $5.99 im Monat. Diese Rezension stützt sich auf Website, Änderungsprotokoll, Dokumentation und Datenschutzerklärung des Herstellers, nicht auf einen eigenen Praxistest.',
    quickAnswerTop: {
      de: {
        question: 'Ist Sablate ein lokales Untertitel-Werkzeug?',
        answer: 'Laut Hersteller ja: Die Transkription läuft mit Whisper (faster-whisper), die Offline-Übersetzung mit Argos und das Rendern der Untertitel mit ffmpeg, alles auf Ihrem Windows-PC oder Mac, und Audio und Video werden nicht an den Hersteller hochgeladen. Cloud-Dienste wie OpenAI, ElevenLabs, DeepL und Claude sind optional, nur in Pro verfügbar und brauchen Ihren eigenen API-Schlüssel. Die App führt dennoch Update-Prüfungen, eine tägliche Pro-Lizenzprüfung und Nutzungsstatistik-Aufrufe aus, die der Hersteller als anonym beschreibt. Der Code ist geschlossen, und PromptQuorum hat den Netzwerkverkehr nicht untersucht; die Aussage stammt also vom Hersteller selbst.',
        bullets: [
          'Video- oder Audiodatei hineinziehen, ein zeitgestempeltes Transkript erhalten, Übersetzungsebenen ergänzen, in einer Zeitleiste bearbeiten und dann .srt, .vtt, .txt, .ass oder ein eingebranntes .mp4 exportieren.',
          'Dreizehn Untertitelstile, von Hormozi und Karaoke bis Cinema, gerendert mit libass.',
          'Vier Whisper-Qualitätsstufen von Fast (78 MB) bis Best (3,09 GB); eine NVIDIA-GPU wird automatisch genutzt, sonst die CPU.',
          'Nur Windows 10 oder neuer und macOS 12 oder neuer; keine Version für Linux, iPhone oder Android.',
          'Kostenlos gilt für Videos bis 10 Minuten; Pro ergänzt alle Whisper-Stufen, Cloud-Dienste mit eigenem Schlüssel und Exporte ohne Markierung.',
        ],
        updatedDate: '2026-11-06',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Sablate herunterladen', anchor: 'get-it' },
      { label: 'Sablate im Überblick', anchor: 'at-a-glance' },
      { label: 'Was Sablate ist', anchor: 'what-is-sablate' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Modelle und Hardware', anchor: 'models-hardware' },
      { label: 'Datenschutz, Lizenz und Kosten', anchor: 'privacy' },
      { label: 'Vom Entwickler', anchor: 'from-the-maker' },
      { label: 'Abwägungen: Vorteile und Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Sablate im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen Sablate geeignet ist', anchor: 'who-should-use' },
      { label: 'Für wen Sablate nicht geeignet ist', anchor: 'who-should-not-use' },
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
            text: 'Sablate ist eine Freemium-Untertitel-App für Windows und Mac, die laut Hersteller Whisper-Transkription, Offline-Übersetzung und das Einbrennen der Untertitel auf Ihrem eigenen Computer statt in einem Cloud-Dienst ausführt.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich ein Untertitelstudio auf Ihrem Schreibtisch vor: laut Hersteller bleibt Ihr Video auf Ihrer Festplatte, während die App zuhört, die Untertitel schreibt, sie übersetzt und aufs Bild malt.',
          },
        ],
        items: [
          'Lokale Aussage: Transkription, Offline-Übersetzung und Rendering laufen auf dem Gerät; Cloud-Dienste sind optional und nutzen Ihren eigenen Schlüssel.',
          'Lizenz und Hersteller: proprietär, laut Entwickler von FuumiSoft, einem kleinen unabhängigen Studio in der Türkei (die Website nennt das noch nicht; nicht unabhängig geprüft).',
          'Preis: kostenlos für Videos bis 10 Minuten, Pro für $29 einmalig oder $5.99 im Monat, mit 30 Tagen Erstattungsmöglichkeit auf die Einmal-Lizenz laut Hersteller.',
          'Pflege: Version 1.0.2 erschien am 19. Oktober 2026, das Projekt wird also aktiv aktualisiert, ist aber erst am 1. September 2026 gestartet.',
          'Lücken: keine Sprecherzuordnung, keine Version für Linux oder Mobilgeräte, und es wurde keine Möglichkeit gefunden, die Nutzungsstatistik abzuschalten.',
        ],
      },
      getItSablate: {
        id: 'get-it',
        title: 'Sablate herunterladen',
        content: [
          '**Sablate wird wie jede Desktop-App installiert, ein Terminal ist nicht nötig.** Laden Sie das Installationsprogramm für Ihr System von der offiziellen Website herunter; die Whisper-Sprachmodelle werden bei der ersten Nutzung in der App nachgeladen.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            Plattform: 'Windows',
            Bezugsquelle: '[Download für Windows](https://sablate.com/download) — .exe, Windows 10 64-Bit oder neuer, etwa 320 MB (1,3 GB installiert)',
          },
          {
            Plattform: 'Mac',
            Bezugsquelle: '[Download für Mac](https://sablate.com/download) — .dmg, macOS 12 oder neuer, getrennte Builds für Apple Silicon und Intel',
          },
          {
            Plattform: 'Kostenloser Tarif',
            Bezugsquelle: '[Tarife ansehen](https://sablate.com/pricing) — kein Konto und keine Kreditkarte',
          },
          {
            Plattform: 'Versionshinweise',
            Bezugsquelle: '[Änderungsprotokoll](https://sablate.com/changelog)',
          },
          {
            Plattform: 'Website',
            Bezugsquelle: '[sablate.com](https://sablate.com)',
          },
          {
            Plattform: 'Datenschutzerklärung',
            Bezugsquelle: '[Datenschutzerklärung von Sablate](https://sablate.com/legal/privacy)',
          },
          {
            Plattform: 'Quellcode',
            Bezugsquelle: 'Geschlossener Quellcode; kein öffentliches Repository',
          },
        ],
        note: 'Die Download-Seite nennt nur Windows und macOS; ein Build für Linux, iOS oder Android wird nicht angeboten.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Sablate im Überblick',
        columns: ['Merkmal', 'Sablate'],
        rows: [
          { Merkmal: 'Plattform', Sablate: 'Windows 10+ und macOS 12+' },
          { Merkmal: 'Preis', Sablate: 'Gratis-Tarif; Pro $29 einmalig oder $5.99/Monat' },
          { Merkmal: 'Lizenz', Sablate: 'Proprietär, geschlossener Quellcode' },
          { Merkmal: 'Ausführung', Sablate: 'Auf Ihrem Computer mit faster-whisper, Argos und ffmpeg; Internet für Downloads, Updates und Lizenzprüfungen' },
          { Merkmal: 'Sprachen', Sablate: 'Etwa 100 gesprochene Sprachen mit automatischer Erkennung; Anzahl der Argos-Sprachpaare nicht angegeben' },
          { Merkmal: 'Sprecherzuordnung', Sablate: 'Nein, als nicht unterstützt aufgeführt' },
          { Merkmal: 'Echtzeit-Transkription', Sablate: 'Nicht angegeben; Sablate verarbeitet Dateien, kein Live-Audio' },
          { Merkmal: 'Nur mit CPU nutzbar', Sablate: 'Ja, ohne NVIDIA-GPU langsamer' },
          { Merkmal: 'Lokaler API-Server', Sablate: 'Nicht angegeben' },
        ],
        note: 'Die Merkmale folgen dem Spracherkennungs-Vergleich im Local LLM Software Directory. Eine fehlende Angabe auf der Website bedeutet unbekannt, nicht nicht unterstützt.',
      },
      whatIsSablate: {
        id: 'what-is-sablate',
        title: 'Was Sablate ist',
        content: [
          '**Sablate ist ein Untertitel-Workflow für Dateien, die bereits auf Ihrer Festplatte liegen, kein Werkzeug für Live-Untertitel oder Diktat.** Sie fügen eine Video- oder Audiodatei hinzu; die App transkribiert sie mit Whisper, lässt Sie Übersetzungsebenen darüberlegen, bietet einen Editor für Timing und Text, wendet einen Untertitelstil an und exportiert das Ergebnis.',
          'Laut dem Entwickler Furkan Bağcı stammt Sablate von FuumiSoft, einem kleinen unabhängigen Softwarestudio in der Türkei, das auch File Arbor und Vidray entwickelt; die Website sagt das bisher nicht, und PromptQuorum hat es nicht unabhängig geprüft. Laut diesen Seiten lädt die App nicht von YouTube herunter, synchronisiert keine Stimmen, klont keine Stimmen, schneidet keine Clips automatisch und ordnet keine Sprecher zu.',
          'Diese Rezension stützt sich auf Website, Änderungsprotokoll, Dokumentation, Datenschutzerklärung und Nutzungsbedingungen. Es gab keinen eigenen Praxistest, daher werden Genauigkeit, Geschwindigkeit und Stabilität hier nicht bewertet.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus Installation, Modell-Download und einem Auftrag.** Die Schritte folgen der Website und ihrer Dokumentation.',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Laden Sie auf der [Download-Seite](https://sablate.com/download) die Windows-.exe oder die Mac-.dmg herunter; der kostenlose Tarif braucht kein Konto.',
          },
          {
            title: 'Video hinzufügen',
            whyItMatters: 'Ziehen Sie Dateien im Format .mp4, .mov, .mkv, .webm, .avi, .m4v, .mp3, .wav, .m4a oder .flac hinein, in Pro auch einen Ordner davon, und wählen Sie eine Whisper-Stufe.',
          },
          {
            title: 'Transkribieren und übersetzen',
            whyItMatters: 'Das Sprachmodell wird beim ersten Einsatz einer Stufe heruntergeladen. Ergänzen Sie dann Übersetzungsebenen: Argos arbeitet offline, mit einem Sprachpaket pro Sprachpaar.',
          },
          {
            title: 'Bearbeiten, gestalten und exportieren',
            whyItMatters: 'Verschieben und teilen Sie Untertitel auf der Zeitleiste, wählen Sie eines der 13 Presets und exportieren Sie dann Untertiteldateien oder ein eingebranntes Video im Format 16:9, 9:16 oder 1:1.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Der Funktionsumfang konzentriert sich auf private Untertitel für Kurz- und Langvideos.** Alles Folgende stammt von der Website, aus der Dokumentation und dem Änderungsprotokoll.',
        ],
        items: [
          '**Lokale Transkription.** faster-whisper in vier Stufen, unter Windows mit automatischer NVIDIA-GPU-Beschleunigung und CPU-Ausweichlösung.',
          '**Übersetzungsebenen.** Eine Zielsprache lässt sich über ein Transkript legen; Argos arbeitet offline, und DeepL, OpenAI und Claude funktionieren in Pro mit Ihrem eigenen Schlüssel.',
          '**Untertitel-Editor.** Video, Transkript und Stil-Bereich in einem Fenster, mit Zeitleisten-Anpassung, Teilen und Zusammenführen sowie einer Warnung bei zu hoher Lesegeschwindigkeit.',
          '**Untertitelstile.** Dreizehn Presets, ein wortweiser Karaoke-Effekt und in Pro eigene Presets.',
          '**Export.** .srt, .vtt und .txt; in Pro zusätzlich .ass und eine .mkv mit weichen Untertiteln und einer Spur pro Sprache; eingebranntes .mp4 in jedem Tarif.',
          '**Stapelaufträge.** Pro nimmt einen Ordner mit Videos entgegen und exportiert alle Sprachen mit einem Klick.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelle und Hardware',
        content: [
          '**Die App führt Whisper über faster-whisper aus, mit vier Stufen.** Die Dokumentation nennt Fast (tiny, 78 MB), Balanced (small, 486 MB), Accurate (large-v3-turbo, 1,62 GB) und Best (large-v3, 3,09 GB); die Download-Seite nennt eine Spanne von 75 MB bis 2,9 GB. Laut Entwickler beschreiben beide dieselben Dateien: Die Dokumentation rechnet in Dezimaleinheiten, die Download-Seite in Binäreinheiten. Kostenlos enthält Fast und Balanced, Pro ergänzt Accurate und Best.',
          'Eine NVIDIA-GPU wird automatisch genutzt, und ihre CUDA-Laufzeit wird beim ersten Einsatz heruntergeladen; ohne GPU läuft die App auf der CPU, und unter macOS läuft sie auf der CPU. Die Website nennt keine Mindestanforderung an RAM oder GPU. Die Windows-Installation belegt etwa 1,3 GB Speicherplatz. Die Website behauptet, eine GPU beschleunige die Transkription um etwa das 5- bis 10-Fache; PromptQuorum hat weder Geschwindigkeit noch Genauigkeit gemessen.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz, Lizenz und Kosten',
        content: [
          '**Die Datenschutzerklärung sagt, die Desktop-Anwendung verarbeite Ihre Medien lokal, und Audio- und Videodateien würden nie hochgeladen.** Die Erklärung ist auf Oktober 2026 datiert. Wenn Sie einen Cloud-Anbieter mit Ihrem eigenen Schlüssel aktivieren, gehen Audio oder Text direkt von Ihrem Rechner zu diesem Anbieter, nach dessen Bedingungen, und die App weist in diesem Moment darauf hin.',
          'Das Netzwerk wird dennoch an anderer Stelle genutzt. Die Dokumentation nennt eine Update-Prüfung alle paar Stunden, eine Lizenzprüfung etwa einmal täglich in Pro, anonyme Nutzungsstatistik und ein optionales Formular für Funktionsvorschläge. Die Statistik geht an PostHog in der EU und enthält laut Erklärung die App-Version, das System, den Prozessortyp, den Tarif und ob eine GPU vorhanden ist, aber nie Audio, Video, Transkripte, Dateinamen oder Schlüssel. Die gelesenen Seiten beschreiben keine Einstellung, um die Statistik abzuschalten. Der Code ist geschlossen, und PromptQuorum hat den Netzwerkverkehr nicht untersucht; diese Aussagen stammen also vom Hersteller selbst.',
          'Es ist ein proprietäres Freemium-Produkt. Kostenlos deckt Videos bis 10 Minuten und 3 Aufträge im Monat ab, mit einem Credit-Hinweis oder einer Eckenmarkierung auf den Exporten; Pro kostet $29 einmalig oder $5.99 im Monat und ist jeweils auf einem Gerät aktiv. Die Website nennt Preise in US-Dollar und erwähnt keine Mehrwertsteuer. Für die Einmal-Lizenz gibt es laut Hersteller 30 Tage Erstattung; Monatszahlungen werden nicht erstattet.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: "Vom Entwickler",
        content: [
          "Furkan Bağcı, Entwickler von Sablate bei FuumiSoft, hat diese Rezension gelesen und geschrieben, er habe sie mit den Sablate-Seiten abgeglichen und nichts technisch Falsches gefunden. Er ergänzte, wer hinter der App steht (jetzt oben genannt), und erklärte, dass die Modellgrößen auf der Dokumentationsseite und der Download-Seite dieselben Dateien beschreiben, einmal in Dezimal-, einmal in Binäreinheiten. Die folgende Notiz sind die eigenen Worte des Entwicklers, keine unabhängige Einschätzung von PromptQuorum; PromptQuorum hat die App nicht ausgeführt.",
          "„Sablate gibt es, um die ganze Untertitelarbeit auf dem Computer zu erledigen, auf dem das Material bereits liegt: Whisper-Transkription, Übersetzung, Bearbeitung und Einbrennen in einem Fenster, ohne Upload und ohne Gebühr pro Minute. Die App ist Closed Source. Statt die Leute bitten zu müssen, „privat“ einfach zu glauben, listet die Dokumentation jeden ausgehenden Aufruf auf (die Update-Prüfung, die Pro-Lizenzprüfung, anonyme Nutzungsstatistik und das optionale Feedback-Formular), und die Datenschutzerklärung nennt genau, was die Statistik enthält. Cloud-Engines gibt es nur für Menschen, die einen eigenen Schlüssel mitbringen, und die App weist jedes Mal darauf hin, wenn eine ausgewählt wird.“",
        ],
        note: "— Furkan Bağcı, FuumiSoft",
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile und Einschränkungen',
        columns: ['Vorteil', 'Was das im Alltag bedeutet', 'Einschränkung / Hinweis'],
        rows: [
          {
            Vorteil: 'Alles auf Ihrem Computer',
            'Was das im Alltag bedeutet': 'Laut Hersteller brauchen Transkription, Offline-Übersetzung und Rendering keinen Upload und keine Gebühr pro Minute.',
            'Einschränkung / Hinweis': 'Geschlossener Quellcode, die Aussage lässt sich also nicht prüfen; Update-, Lizenz- und Statistik-Aufrufe nutzen weiterhin das Netzwerk.',
          },
          {
            Vorteil: 'Untertitel mit eigenem Stil',
            'Was das im Alltag bedeutet': 'Dreizehn Presets und das Einbrennen machen aus einem Transkript ein fertiges Kurzvideo.',
            'Einschränkung / Hinweis': 'Kostenlose Exporte tragen eine Eckenmarkierung oder einen Credit-Hinweis; .ass- und .mkv-Export brauchen Pro.',
          },
          {
            Vorteil: 'Einmaliger Preis',
            'Was das im Alltag bedeutet': '$29 einmalig ersparen ein Abo.',
            'Einschränkung / Hinweis': 'Die Lizenz gilt jeweils für ein Gerät; Monatszahlungen werden nicht erstattet.',
          },
          {
            Vorteil: 'Etwa 100 Sprachen',
            'Was das im Alltag bedeutet': 'Gesprochene Sprachen werden automatisch erkannt.',
            'Einschränkung / Hinweis': 'Argos-Sprachpakete gibt es pro Paar, und die Zahl der Paare wird nicht genannt; Genauigkeitswerte werden nicht veröffentlicht.',
          },
          {
            Vorteil: 'Vier Whisper-Stufen',
            'Was das im Alltag bedeutet': 'Ein kleines Modell für schnelle Entwürfe, größere für mehr Genauigkeit.',
            'Einschränkung / Hinweis': 'Accurate und Best brauchen Pro und mehrere Gigabyte Speicherplatz; Geschwindigkeitsangaben sind ungetestet.',
          },
          {
            Vorteil: 'Aktive Entwicklung',
            'Was das im Alltag bedeutet': 'Drei Releases zwischen dem 1. September und dem 19. Oktober 2026.',
            'Einschränkung / Hinweis': 'Ein sehr junges Produkt, zu dem keine unabhängigen Rezensionen gefunden wurden.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Sablate im Vergleich zu Alternativen',
        content: [
          'Das sind die ähnlichsten Untertitel- und Transkriptions-Werkzeuge im Verzeichnis: ein kostenloser Open-Source-Untertitel-Editor, eine kostenlose Open-Source-Transkriptions-App, eine Apple-App im Einmalkauf und eine Mac-Transkriptions-App.',
        ],
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Rolle', 'Wichtigster Unterschied'],
        rows: [
          {
            App: 'Sablate',
            Plattformen: 'Windows, Mac',
            'Preis und Lizenz': 'Gratis-Tarif, Pro $29 einmalig, proprietär',
            Rolle: 'Untertitel mit Einbrennen',
            'Wichtigster Unterschied': 'Whisper, Übersetzung und gestaltetes Einbrennen in einer App; geschlossener Quellcode',
          },
          {
            App: '[Subtitle Edit](/de/power-local-llm/subtitle-edit-review)',
            Plattformen: 'Windows, Mac, Linux',
            'Preis und Lizenz': 'Kostenlos, MIT',
            Rolle: 'Untertitel-Editor',
            'Wichtigster Unterschied': 'Quelloffen mit vielen Engines; ausgelegt auf das Bearbeiten und Übersetzen vorhandener Untertitel',
          },
          {
            App: '[Buzz](/de/power-local-llm/buzz-captions-review)',
            Plattformen: 'Mac, Windows, Linux',
            'Preis und Lizenz': 'Kostenlos, MIT',
            Rolle: 'Transkriptions-App',
            'Wichtigster Unterschied': 'Kostenlos und quelloffen; wandelt Aufnahmen in Untertitel und Transkripte um',
          },
          {
            App: '[Aiko](/de/power-local-llm/aiko-review)',
            Plattformen: 'iPhone, iPad, Mac',
            'Preis und Lizenz': '$24 einmalig (US-Preis), proprietär',
            Rolle: 'Apple-Transkriptions-App',
            'Wichtigster Unterschied': 'Nur auf Apple-Geräten; keine Windows-Version',
          },
          {
            App: '[MacWhisper](/de/power-local-llm/macwhisper-review)',
            Plattformen: 'macOS',
            'Preis und Lizenz': 'Freemium, proprietär',
            Rolle: 'Mac-Transkriptions-App',
            'Wichtigster Unterschied': 'Transkribiert Dateien, Meeting-Aufnahmen und Live-Diktat; nur Mac',
          },
        ],
        note: 'Angaben zu Plattformen, Preisen und Funktionen von Drittanbieter-Apps ändern sich häufig. Prüfen Sie die aktuellen Details auf der Seite des jeweiligen Projekts, bevor Sie entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen Sablate geeignet ist',
        items: [
          '**Ersteller von Kurzvideos unter Windows oder Mac.** Gestaltete, eingebrannte Untertitel kommen aus derselben App, die auch transkribiert.',
          '**Menschen, die ihr Material privat halten.** Transkription und Offline-Übersetzung bleiben laut Hersteller auf dem Computer.',
          '**Lehrende und Cutter, die mehrere Sprachen brauchen.** Übersetzungsebenen werden mit einer Spur pro Sprache exportiert.',
          '**Käufer, die lieber einmal zahlen.** Neben dem Abo gibt es eine Pro-Einmal-Lizenz für $29.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen Sablate nicht geeignet ist',
        items: [
          '**Nutzer von Linux, iPhone und Android.** Es gibt nur Builds für Windows und Mac.',
          '**Alle, die Sprecherzuordnung oder Live-Untertitel brauchen.** Der Hersteller führt Sprecherzuordnung als nicht unterstützt auf und beschreibt einen dateibasierten Ablauf; Live-Untertitel werden auf den gelesenen Seiten nicht erwähnt.',
          '**Alle, die prüfbare Software brauchen.** Der Code ist geschlossen, und die Datenschutzaussagen lassen sich nicht einsehen.',
          '**Alle, die vollständig kostenlose Software wollen.** Kostenlos ist auf Videos von 10 Minuten begrenzt; Subtitle Edit und Buzz sind kostenlos und quelloffen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Funktioniert Sablate offline?',
            a: 'Der Hersteller sagt ja, sobald das Sprachmodell und alle Argos-Sprachpakete heruntergeladen sind. Updates, Pro-Lizenzprüfungen und Nutzungsstatistik brauchen eine Verbindung, aber laut Dokumentation arbeitet die App auch ohne sie weiter. PromptQuorum hat sie nicht offline getestet.',
          },
          {
            q: 'Wird mein Video in die Cloud gesendet?',
            a: 'Laut Datenschutzerklärung werden Medien nie an den Hersteller hochgeladen, außer wenn Sie einen Cloud-Dienst mit Ihrem eigenen Schlüssel aktivieren. Der Code ist geschlossen, und PromptQuorum hat den Netzwerkverkehr nicht untersucht.',
          },
          {
            q: 'Welche Dateiformate werden akzeptiert?',
            a: 'Video und Audio, darunter .mp4, .mov, .mkv, .webm, .avi, .m4v, .mp3, .wav, .m4a und .flac, laut Dokumentation.',
          },
          {
            q: 'Kann ich es vor dem Kauf ausprobieren?',
            a: 'Ja: Der kostenlose Tarif braucht kein Konto und keine Kreditkarte, begrenzt aber die Videolänge auf 10 Minuten und die Aufträge auf 3 im Monat. Eine eigene Testphase wird nicht erwähnt.',
          },
          {
            q: "Wer steckt hinter Sablate?",
            a: "Laut seinem Entwickler Furkan Bağcı wird Sablate von FuumiSoft hergestellt, einem kleinen unabhängigen Softwarestudio in der Türkei, das auch File Arbor und Vidray entwickelt. Die Sablate-Website sagt das bisher nicht deutlich, und PromptQuorum hat es nicht unabhängig geprüft.",
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'Sablate passt, wenn Sie Videos auf einem Windows-PC oder Mac in übersetzte, gestaltete, eingebrannte Untertitel verwandeln möchten, wobei die Arbeit laut Hersteller auf Ihrem eigenen Computer bleibt, und wenn Sie Software mit geschlossenem Quellcode akzeptieren. Es gibt einen nutzbaren kostenlosen Tarif, einen einmaligen Pro-Preis und ein aktuelles Release.',
          'Die Einschränkungen betreffen Umfang und Überprüfbarkeit: keine Version für Linux oder Mobilgeräte, keine Sprecherzuordnung, geschlossener Code, ein Hersteller (FuumiSoft, Türkei), den nur die Nachricht des Entwicklers nennt, nicht die Website, Datenschutzaussagen, die PromptQuorum nicht prüfen konnte, und ein Produkt, das erst wenige Monate alt ist. Testen Sie den kostenlosen Tarif an einem kurzen Clip, bevor Sie kaufen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von Sablate](https://sablate.com) — Funktionen und Preise.',
          '[Download-Seite](https://sablate.com/download) — Plattformen und Systemanforderungen.',
          '[Dokumentation](https://sablate.com/docs) — Modelle, Formate, Netzwerkaufrufe und FAQ.',
          '[Änderungsprotokoll](https://sablate.com/changelog) — Versionsverlauf; Version 1.0.2 vom 19. Oktober 2026.',
          '[Datenschutzerklärung](https://sablate.com/legal/privacy) — Umgang mit Daten, datiert auf Oktober 2026.',
          '[Nutzungsbedingungen](https://sablate.com/legal/terms) — Lizenz, Rückgabe und Gerätebedingungen.',
          "Nachricht des Entwicklers (Furkan Bağcı, 7. November 2026) — Herstellerangaben, Einheiten der Modellgrößen und Entwicklernotiz; seine eigenen Aussagen, nicht unabhängig geprüft.",
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokale Sprach- und Audio-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — Text-to-Speech, Spracherkennung und Sprachassistenten nebeneinander.',
          '[Subtitle Edit Rezension](/de/power-local-llm/subtitle-edit-review) — ein kostenloser Open-Source-Untertitel-Editor mit lokaler Spracherkennung.',
          '[Buzz Rezension](/de/power-local-llm/buzz-captions-review) — eine kostenlose Transkriptions-App für drei Desktop-Systeme.',
          '[Whisper.cpp Rezension](/de/power-local-llm/whisper-cpp-review) — die offene Engine hinter vielen lokalen Whisper-Apps.',
          '[Das vollständige Local LLM Software Directory](/de/directory) — ein breiteres Verzeichnis lokaler KI-Werkzeuge über Plattformen hinweg.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-06',
    dateModified: '2026-11-07',
    next_refresh_due: '2027-05-06',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/sablate-review-hero-fr.webp',
    title: 'Test de Sablate : sous-titres et incrustation pour Windows et Mac',
    seoTitle: 'Test de Sablate : générateur de sous-titres pour PC et Mac',
    intro: "Sablate est une application de sous-titrage freemium et propriétaire pour Windows et Mac : vous déposez une vidéo, elle transcrit, selon son éditeur, la parole avec le modèle Whisper d'OpenAI sur votre propre ordinateur, ajoute des couches de traduction, vous laisse ajuster le minutage et incruste des sous-titres stylisés dans la vidéo. Ce test résume ce que documentent le site de l'éditeur, son journal des modifications et sa politique de confidentialité, les points où ces pages se contredisent, et comment Sablate se compare aux autres outils de sous-titrage et de transcription du répertoire.",
    metaDescription: "Test de Sablate : sous-titres, traduction et incrustation pour Windows et Mac, en local selon l'éditeur. Offre gratuite, Pro $29 une fois. Non testé.",
    twitterDescription: "Test de Sablate : sous-titres Whisper pour Windows et Mac, traduits et incrustés dans la vidéo sur votre propre ordinateur, selon l’éditeur. Prix, confidentialité, limites et alternatives.",
    audience: "Créateurs de vidéos, monteurs et enseignants sous Windows ou Mac qui veulent des sous-titres et des traductions sans envoyer leurs images en ligne — couvre le prix, l'installation, les modèles, la confidentialité, les limites et les alternatives.",
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Sablate review',
    targetKeywords: [
      'test sablate',
      'sous-titres sablate',
      'générateur de sous-titres hors ligne',
      'sous-titres whisper locaux windows mac',
      'incruster des sous-titres dans une vidéo hors ligne',
      'transcription vidéo privée',
      'traduction de sous-titres sans cloud',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Mac',
      'NVIDIA GPU',
    ],
    leadAnswerBlock: "**Sablate est une application de sous-titrage propriétaire pour Windows et Mac qui, selon son éditeur, transcrit, traduit et affiche les sous-titres sur votre propre ordinateur, sans envoyer votre vidéo en ligne.** Elle utilise tout de même le réseau pour les mises à jour, les vérifications de licence et des statistiques d’usage que l’éditeur décrit comme anonymes. Une offre gratuite couvre les vidéos jusqu'à 10 minutes, et Pro coûte $29 une fois ou $5.99 par mois. Ce test s'appuie sur le site public de l'éditeur, son journal des modifications, sa documentation et sa politique de confidentialité, pas sur un essai pratique.",
    quickAnswerTop: {
      fr: {
        question: 'Sablate est-il un outil de sous-titrage local ?',
        answer: "Selon son éditeur, oui : la transcription s'exécute avec Whisper (faster-whisper), la traduction hors ligne avec Argos et le rendu des sous-titres avec ffmpeg, le tout sur votre PC Windows ou votre Mac, et l'audio et la vidéo ne sont pas envoyés à l’éditeur. Les moteurs cloud comme OpenAI, ElevenLabs, DeepL et Claude sont facultatifs, réservés à Pro et exigent votre propre clé API. L'application effectue tout de même des vérifications de mise à jour, une vérification quotidienne de la licence Pro et des appels de statistiques d’usage que l’éditeur décrit comme anonymes. Le code est fermé et PromptQuorum n'a pas inspecté le trafic réseau : l'affirmation est celle de l'éditeur.",
        bullets: [
          "Déposez un fichier vidéo ou audio, obtenez une transcription minutée, ajoutez des couches de traduction, modifiez-la sur une timeline, puis exportez en .srt, .vtt, .txt, .ass ou en .mp4 avec sous-titres incrustés.",
          "Treize styles de sous-titres, de Hormozi et Karaoke à Cinema, rendus avec libass.",
          "Quatre niveaux de qualité Whisper, de Fast (78 Mo) à Best (3,09 Go) ; un GPU NVIDIA est utilisé automatiquement, sinon le processeur.",
          "Windows 10 ou ultérieur et macOS 12 ou ultérieur uniquement ; pas de version Linux, iPhone ni Android.",
          "L'offre gratuite couvre les vidéos jusqu'à 10 minutes ; Pro ajoute tous les niveaux Whisper, les moteurs cloud avec votre propre clé et des exports sans marque.",
        ],
        updatedDate: '2026-11-06',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir Sablate', anchor: 'get-it' },
      { label: "Sablate en un coup d'œil", anchor: 'at-a-glance' },
      { label: "Ce qu'est Sablate", anchor: 'what-is-sablate' },
      { label: 'Premiers pas', anchor: 'how-to-get-started' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Modèles et matériel', anchor: 'models-hardware' },
      { label: 'Confidentialité, licence et coût', anchor: 'privacy' },
      { label: 'Le mot du développeur', anchor: 'from-the-maker' },
      { label: 'Compromis : avantages et limites', anchor: 'tradeoffs' },
      { label: 'Sablate face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Pour qui Sablate est adapté', anchor: 'who-should-use' },
      { label: "Pour qui Sablate n'est pas adapté", anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures associées', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: "Sablate est une application de sous-titrage freemium pour Windows et Mac qui, selon son éditeur, exécute la transcription Whisper, la traduction hors ligne et l'incrustation des sous-titres sur votre propre ordinateur plutôt que dans un service cloud.",
          },
          {
            type: 'plain-terms',
            text: "Imaginez un studio de sous-titrage sur votre bureau : selon l’éditeur, votre vidéo reste sur votre disque pendant que l'application écoute, rédige les sous-titres, les traduit et les dessine sur l'image.",
          },
        ],
        items: [
          "Affirmation locale : la transcription, la traduction hors ligne et le rendu s'exécutent sur l'appareil ; les moteurs cloud sont facultatifs et utilisent votre propre clé.",
          "Licence et éditeur : propriétaire, édité par FuumiSoft, un petit studio indépendant en Turquie, selon le développeur (le site ne le dit pas encore ; non vérifié de façon indépendante).",
          "Prix : gratuit pour les vidéos jusqu'à 10 minutes, Pro à $29 une fois ou $5.99 par mois, avec un remboursement sous 30 jours sur la licence unique.",
          "Maintenance : la version 1.0.2 est sortie le 19 octobre 2026, le projet est donc mis à jour activement, mais il n'a été lancé que le 1er septembre 2026.",
          "Lacunes : pas d'étiquettes de locuteurs, pas de version Linux ni mobile, et aucune option pour désactiver les statistiques d'usage n'a été trouvée.",
        ],
      },
      getItSablate: {
        id: 'get-it',
        title: 'Obtenir Sablate',
        content: [
          "**Sablate s'installe comme n'importe quelle application de bureau, aucun terminal n'est nécessaire.** Téléchargez l'installateur de votre système sur le site officiel ; les modèles vocaux Whisper sont récupérés depuis l'application à la première utilisation.",
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            Plateforme: 'Windows',
            'Où la trouver': '[Télécharger pour Windows](https://sablate.com/download) — .exe, Windows 10 64 bits ou ultérieur, environ 320 Mo (1,3 Go une fois installé)',
          },
          {
            Plateforme: 'Mac',
            'Où la trouver': '[Télécharger pour Mac](https://sablate.com/download) — .dmg, macOS 12 ou ultérieur, versions distinctes pour Apple Silicon et Intel',
          },
          {
            Plateforme: 'Offre gratuite',
            'Où la trouver': '[Voir les formules](https://sablate.com/pricing) — sans compte et sans carte bancaire',
          },
          {
            Plateforme: 'Notes de version',
            'Où la trouver': '[Journal des modifications](https://sablate.com/changelog)',
          },
          {
            Plateforme: 'Site web',
            'Où la trouver': '[sablate.com](https://sablate.com)',
          },
          {
            Plateforme: 'Politique de confidentialité',
            'Où la trouver': '[Politique de confidentialité de Sablate](https://sablate.com/legal/privacy)',
          },
          {
            Plateforme: 'Code source',
            'Où la trouver': 'Code fermé ; aucun dépôt public',
          },
        ],
        note: "La page de téléchargement ne cite que Windows et macOS ; aucune version Linux, iOS ni Android n'est proposée.",
      },
      atAGlance: {
        id: 'at-a-glance',
        title: "Sablate en un coup d'œil",
        columns: ['Attribut', 'Sablate'],
        rows: [
          { Attribut: 'Plateforme', Sablate: 'Windows 10+ et macOS 12+' },
          { Attribut: 'Prix', Sablate: 'Offre gratuite ; Pro $29 une fois ou $5.99/mois' },
          { Attribut: 'Licence', Sablate: 'Propriétaire, code fermé' },
          { Attribut: 'Exécution', Sablate: "Sur votre ordinateur avec faster-whisper, Argos et ffmpeg ; Internet pour les téléchargements, les mises à jour et les vérifications de licence" },
          { Attribut: 'Langues', Sablate: "Environ 100 langues parlées avec détection automatique ; nombre de paires Argos non précisé" },
          { Attribut: 'Étiquettes de locuteurs', Sablate: 'Non, indiquées comme non prises en charge' },
          { Attribut: 'Transcription en temps réel', Sablate: "Non précisé ; Sablate traite des fichiers, pas de l'audio en direct" },
          { Attribut: 'Utilisable sur CPU seul', Sablate: 'Oui, plus lent sans GPU NVIDIA' },
          { Attribut: 'Serveur API local', Sablate: 'Non précisé' },
        ],
        note: "Les attributs suivent la comparaison de reconnaissance vocale utilisée dans le Répertoire des logiciels de LLM locaux. Une absence de mention sur le site signifie « inconnu », pas « non pris en charge ».",
      },
      whatIsSablate: {
        id: 'what-is-sablate',
        title: "Ce qu'est Sablate",
        content: [
          "**Sablate est un flux de travail de sous-titrage pour des fichiers déjà présents sur votre disque, pas un outil de sous-titrage en direct ni de dictée.** Vous ajoutez un fichier vidéo ou audio ; l'application le transcrit avec Whisper, vous laisse ajouter des couches de traduction par-dessus, propose un éditeur pour le minutage et le texte, applique un style de sous-titres et exporte le résultat.",
          "Selon le développeur, Furkan Bağcı, Sablate est édité par FuumiSoft, un petit studio de logiciels indépendant en Turquie qui produit aussi File Arbor et Vidray ; le site ne l'indique pas encore, et PromptQuorum ne l'a pas vérifié de façon indépendante. Les pages indiquent qu'il ne télécharge pas depuis YouTube, ne fait ni doublage, ni clonage de voix, ni découpage automatique, et n'étiquette pas les locuteurs.",
          "Ce test s'appuie sur le site, le journal des modifications, la documentation, la politique de confidentialité et les conditions d'utilisation. Il n'a donné lieu à aucun essai pratique : la précision, la vitesse et la stabilité ne sont donc pas évaluées ici.",
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Premiers pas',
        content: [
          "**La mise en route tient en une installation, un téléchargement de modèle et une tâche.** Les étapes suivent le site et sa documentation.",
        ],
        numberedItems: [
          {
            title: "Installer l'application",
            whyItMatters: "Téléchargez le .exe pour Windows ou le .dmg pour Mac depuis la [page de téléchargement](https://sablate.com/download) ; l'offre gratuite ne demande aucun compte.",
          },
          {
            title: 'Ajouter une vidéo',
            whyItMatters: "Déposez des fichiers .mp4, .mov, .mkv, .webm, .avi, .m4v, .mp3, .wav, .m4a ou .flac, ou un dossier entier avec Pro, puis choisissez un niveau Whisper.",
          },
          {
            title: 'Transcrire et traduire',
            whyItMatters: "Le modèle vocal se télécharge la première fois que vous utilisez un niveau. Ajoutez ensuite des couches de traduction : Argos fonctionne hors ligne, avec un pack de langue par paire.",
          },
          {
            title: 'Modifier, styliser et exporter',
            whyItMatters: "Recalez et découpez les sous-titres sur la timeline, choisissez l'un des 13 préréglages, puis exportez des fichiers de sous-titres ou une vidéo avec sous-titres incrustés en 16:9, 9:16 ou 1:1.",
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          "**L'ensemble des fonctions est centré sur des sous-titres privés pour les vidéos courtes comme longues.** Tout ce qui suit provient du site, de la documentation et du journal des modifications.",
        ],
        items: [
          "**Transcription locale.** faster-whisper en quatre niveaux, avec accélération automatique par GPU NVIDIA sous Windows et repli sur le processeur.",
          "**Couches de traduction.** Ajoutez une langue cible par-dessus une transcription ; Argos fonctionne hors ligne, et DeepL, OpenAI et Claude marchent avec votre propre clé sur Pro.",
          "**Éditeur de sous-titres.** Vidéo, transcription et panneau de style dans une seule fenêtre, avec recalage sur la timeline, découpage et fusion, et un avertissement de vitesse de lecture.",
          "**Styles de sous-titres.** Treize préréglages, un balayage karaoké mot par mot et, sur Pro, des préréglages personnalisés.",
          "**Export.** .srt, .vtt et .txt ; sur Pro aussi .ass et un .mkv à sous-titres optionnels avec une piste par langue ; .mp4 avec sous-titres incrustés sur toutes les formules.",
          "**Tâches par lot.** Pro accepte un dossier de vidéos et exporte toutes les langues en un clic.",
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modèles et matériel',
        content: [
          "**L'application exécute Whisper via faster-whisper, avec quatre niveaux.** La documentation cite Fast (tiny, 78 Mo), Balanced (small, 486 Mo), Accurate (large-v3-turbo, 1,62 Go) et Best (large-v3, 3,09 Go) ; la page de téléchargement donne une plage de 75 Mo à 2,9 Go. Selon le développeur, les deux décrivent les mêmes fichiers : la documentation compte en unités décimales et la page de téléchargement en unités binaires. L'offre gratuite inclut Fast et Balanced, et Pro ajoute Accurate et Best.",
          "Un GPU NVIDIA est utilisé automatiquement et son runtime CUDA se télécharge à la première utilisation ; sans GPU, l'application s'exécute sur le processeur, et sous macOS elle s'exécute sur le processeur. Le site ne donne aucun minimum de RAM ni de GPU. L'installation sous Windows occupe environ 1,3 Go de disque. Le site affirme qu'un GPU rend la transcription environ 5 à 10 fois plus rapide ; PromptQuorum n'a mesuré ni la vitesse ni la précision.",
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité, licence et coût',
        content: [
          "**La politique de confidentialité indique que l'application de bureau traite vos médias localement et que les fichiers audio et vidéo ne sont jamais envoyés en ligne.** La politique est datée d'octobre 2026. Si vous activez un fournisseur cloud avec votre propre clé, l'audio ou le texte part directement de votre machine vers ce fournisseur, selon ses conditions, et l'application le signale à ce moment-là.",
          "Le réseau reste pourtant utilisé ailleurs. La documentation mentionne une vérification de mise à jour toutes les quelques heures, une vérification de licence environ une fois par jour sur Pro, des statistiques d'usage anonymes et un formulaire facultatif de suggestion de fonctions. Les statistiques sont envoyées à PostHog dans l'UE et, selon la politique, comprennent la version de l'application, le système, le type de processeur, la formule et la présence d'un GPU, mais jamais l'audio, la vidéo, les transcriptions, les noms de fichiers ni les clés. Nous n'avons vu, dans les pages lues, aucun réglage pour désactiver les statistiques. Le code est fermé et PromptQuorum n'a pas examiné le trafic réseau : ces déclarations sont celles de l'éditeur.",
          "C'est un produit freemium et propriétaire. L'offre gratuite couvre les vidéos jusqu'à 10 minutes et 3 tâches par mois, avec une mention de crédit ou une marque dans un coin des exports ; Pro coûte $29 une fois ou $5.99 par mois et n'est actif que sur un appareil à la fois. Le site indique les prix en dollars américains et ne mentionne pas la TVA. La licence unique bénéficie d'un remboursement sous 30 jours ; les paiements mensuels ne sont pas remboursés.",
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: "Le mot du développeur",
        content: [
          "Furkan Bağcı, développeur de Sablate chez FuumiSoft, a lu ce test et écrit l'avoir comparé aux pages de Sablate sans y trouver d'erreur technique. Il a précisé qui édite l'application (désormais indiqué plus haut) et expliqué que les tailles de modèles de la page de documentation et de la page de téléchargement décrivent les mêmes fichiers, en unités décimales et binaires. La note ci-dessous reprend les mots du développeur, pas une évaluation indépendante de PromptQuorum ; PromptQuorum n'a pas exécuté l'application.",
          "« Sablate existe pour faire tout le travail de sous-titrage sur l'ordinateur où se trouvent déjà les images : transcription Whisper, traduction, édition et incrustation dans une seule fenêtre, sans envoi de fichiers et sans frais à la minute. L'application est à code fermé ; plutôt que de demander aux gens de croire « privé » sur parole, la documentation liste chaque appel sortant qu'elle effectue (la vérification des mises à jour, la vérification de la licence Pro, les statistiques d'usage anonymes et le formulaire de retour facultatif), et la politique de confidentialité indique exactement ce que contiennent les statistiques. Les moteurs cloud ne sont là que pour ceux qui apportent leur propre clé, et l'application le signale à chaque fois qu'on en choisit un. »",
        ],
        note: "— Furkan Bağcı, FuumiSoft",
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: ['Avantage', "Ce que cela donne à l'usage", 'Limite / réserve'],
        rows: [
          {
            Avantage: 'Tout sur votre ordinateur',
            "Ce que cela donne à l'usage": "Selon l’éditeur, la transcription, la traduction hors ligne et le rendu n'exigent ni envoi en ligne ni frais à la minute.",
            'Limite / réserve': "Code fermé, l'affirmation ne peut pas être vérifiée ; les appels de mise à jour, de licence et de statistiques utilisent tout de même le réseau.",
          },
          {
            Avantage: 'Des sous-titres stylisables',
            "Ce que cela donne à l'usage": 'Treize préréglages et l\'incrustation transforment une transcription en vidéo courte terminée.',
            'Limite / réserve': "Les exports gratuits portent une marque dans un coin ou une mention de crédit ; l'export .ass et .mkv exige Pro.",
          },
          {
            Avantage: 'Prix unique',
            "Ce que cela donne à l'usage": '$29 une fois évitent un abonnement.',
            'Limite / réserve': "La licence couvre un appareil à la fois ; les paiements mensuels ne sont pas remboursés.",
          },
          {
            Avantage: 'Environ 100 langues',
            "Ce que cela donne à l'usage": 'Les langues parlées sont détectées automatiquement.',
            'Limite / réserve': "Les packs de langue Argos sont par paire et aucun nombre de paires n'est indiqué ; aucun chiffre de précision n'est publié.",
          },
          {
            Avantage: 'Quatre niveaux Whisper',
            "Ce que cela donne à l'usage": 'Un petit modèle pour des brouillons rapides, des modèles plus grands pour la précision.',
            'Limite / réserve': 'Accurate et Best exigent Pro et plusieurs gigaoctets de disque ; les affirmations de vitesse ne sont pas testées.',
          },
          {
            Avantage: 'Développement actif',
            "Ce que cela donne à l'usage": 'Trois versions entre le 1er septembre et le 19 octobre 2026.',
            'Limite / réserve': 'Un produit très récent, sans test indépendant trouvé.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Sablate face aux alternatives',
        content: [
          "Voici les outils de sous-titrage et de transcription les plus proches du répertoire : un éditeur de sous-titres libre et gratuit, une application de transcription libre et gratuite, une application Apple à achat unique et une application de transcription pour Mac.",
        ],
        columns: ['Application', 'Plateformes', 'Prix et licence', 'Rôle', 'Différence clé'],
        rows: [
          {
            Application: 'Sablate',
            Plateformes: 'Windows, Mac',
            'Prix et licence': 'Offre gratuite, Pro $29 une fois, propriétaire',
            Rôle: 'Sous-titres avec incrustation',
            'Différence clé': 'Whisper, traduction et incrustation stylisée dans une seule application ; code fermé',
          },
          {
            Application: '[Subtitle Edit](/fr/power-local-llm/subtitle-edit-review)',
            Plateformes: 'Windows, Mac, Linux',
            'Prix et licence': 'Gratuit, MIT',
            Rôle: 'Éditeur de sous-titres',
            'Différence clé': "Libre, avec de nombreux moteurs ; conçu pour éditer et traduire des sous-titres existants",
          },
          {
            Application: '[Buzz](/fr/power-local-llm/buzz-captions-review)',
            Plateformes: 'Mac, Windows, Linux',
            'Prix et licence': 'Gratuit, MIT',
            Rôle: 'Application de transcription',
            'Différence clé': 'Libre et gratuite ; transforme des enregistrements en sous-titres et en transcriptions',
          },
          {
            Application: '[Aiko](/fr/power-local-llm/aiko-review)',
            Plateformes: 'iPhone, iPad, Mac',
            'Prix et licence': '$24 une fois (prix US), propriétaire',
            Rôle: 'Application de transcription Apple',
            'Différence clé': 'Uniquement sur appareils Apple ; pas de version Windows',
          },
          {
            Application: '[MacWhisper](/fr/power-local-llm/macwhisper-review)',
            Plateformes: 'macOS',
            'Prix et licence': 'Freemium, propriétaire',
            Rôle: 'Application de transcription pour Mac',
            'Différence clé': "Transcrit fichiers, enregistrements de réunions et dictée en direct ; Mac uniquement",
          },
        ],
        note: "Les plateformes, les prix et les fonctions des applications tierces changent fréquemment. Vérifiez les détails actuels sur la page de chaque projet avant de décider.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui Sablate est adapté',
        items: [
          "**Créateurs de vidéos courtes sous Windows ou Mac.** Des sous-titres stylisés et incrustés sortent de la même application que celle qui transcrit.",
          "**Personnes qui gardent leurs images privées.** La transcription et la traduction hors ligne restent sur l'ordinateur, selon l'éditeur.",
          "**Enseignants et monteurs qui ont besoin de plusieurs langues.** Les couches de traduction exportent une piste par langue.",
          "**Acheteurs qui préfèrent payer une seule fois.** Une licence Pro unique à $29 existe à côté de l'abonnement.",
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: "Pour qui Sablate n'est pas adapté",
        items: [
          "**Utilisateurs de Linux, d'iPhone et d'Android.** Seules des versions Windows et Mac sont proposées.",
          "**Quiconque a besoin d'étiquettes de locuteurs ou de sous-titres en direct.** L’éditeur indique que les étiquettes de locuteurs ne sont pas prises en charge et décrit un flux de travail par fichiers ; les pages lues ne mentionnent pas le sous-titrage en direct.",
          "**Quiconque a besoin d'un logiciel auditable.** Le code est fermé et les affirmations de confidentialité ne peuvent pas être inspectées.",
          "**Quiconque veut un logiciel entièrement gratuit.** L'offre gratuite se limite aux vidéos de 10 minutes ; Subtitle Edit et Buzz sont gratuits et libres.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Sablate fonctionne-t-il hors ligne ?',
            a: "L'éditeur dit que oui, une fois le modèle vocal et les éventuels packs de langue Argos téléchargés. Les mises à jour, les vérifications de licence Pro et les statistiques d'usage exigent une connexion mais, selon la documentation, l'application continue de fonctionner sans elles. PromptQuorum ne l'a pas testé hors ligne.",
          },
          {
            q: 'Ma vidéo est-elle envoyée dans le cloud ?',
            a: "La politique de confidentialité indique que les médias ne sont jamais envoyés à l'éditeur, sauf si vous activez un moteur cloud avec votre propre clé. Le code est fermé et PromptQuorum n'a pas inspecté le trafic réseau.",
          },
          {
            q: 'Quels formats de fichiers accepte-t-il ?',
            a: "Des fichiers vidéo et audio, dont .mp4, .mov, .mkv, .webm, .avi, .m4v, .mp3, .wav, .m4a et .flac, selon la documentation.",
          },
          {
            q: "Puis-je l'essayer avant de payer ?",
            a: "Oui : l'offre gratuite n'exige ni compte ni carte bancaire, mais elle limite la durée des vidéos à 10 minutes et les tâches à 3 par mois. Aucun essai distinct n'est mentionné.",
          },
          {
            q: "Qui édite Sablate ?",
            a: "Selon son développeur, Furkan Bağcı, Sablate est édité par FuumiSoft, un petit studio de logiciels indépendant en Turquie qui produit aussi File Arbor et Vidray. Le site de Sablate ne l'indique pas encore clairement, et PromptQuorum ne l'a pas vérifié de façon indépendante.",
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          "Sablate convient si vous voulez transformer une vidéo sur un PC Windows ou un Mac en sous-titres traduits, stylisés et incrustés où, selon l'éditeur, le travail reste sur votre propre ordinateur, et si vous acceptez un logiciel à code fermé. Il propose une offre gratuite utilisable, un prix Pro unique et une version récente.",
          "Les réserves tiennent à la portée et à la vérifiabilité : pas de version Linux ni mobile, pas d'étiquettes de locuteurs, code fermé, un éditeur (FuumiSoft, Turquie) que seul le message du développeur nomme, pas le site, affirmations de confidentialité que PromptQuorum n'a pas pu vérifier et produit vieux de quelques mois seulement. Essayez l'offre gratuite sur un court extrait avant d'acheter.",
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de Sablate](https://sablate.com) — fonctions et tarifs.',
          '[Page de téléchargement](https://sablate.com/download) — plateformes et configuration requise.',
          '[Documentation](https://sablate.com/docs) — modèles, formats, appels réseau et FAQ.',
          '[Journal des modifications](https://sablate.com/changelog) — historique des versions ; version 1.0.2 datée du 19 octobre 2026.',
          '[Politique de confidentialité](https://sablate.com/legal/privacy) — traitement des données, datée d\'octobre 2026.',
          "[Conditions d'utilisation](https://sablate.com/legal/terms) — licence, remboursement et conditions relatives aux appareils.",
          "Message du développeur (Furkan Bağcı, 7 novembre 2026) — informations sur l'éditeur, unités des tailles de modèles et note du développeur ; ses propres déclarations, non vérifiées de façon indépendante.",
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Outils vocaux locaux comparés](/fr/power-local-llm/local-llm-voice-audio-compared) — synthèse vocale, reconnaissance vocale et agents vocaux côte à côte.',
          '[Test de Subtitle Edit](/fr/power-local-llm/subtitle-edit-review) — un éditeur de sous-titres libre et gratuit avec reconnaissance vocale locale.',
          '[Test de Buzz](/fr/power-local-llm/buzz-captions-review) — une application de transcription gratuite pour trois systèmes de bureau.',
          '[Test de Whisper.cpp](/fr/power-local-llm/whisper-cpp-review) — le moteur ouvert derrière de nombreuses applications Whisper locales.',
          '[Le répertoire complet des logiciels de LLM locaux](/fr/directory) — un répertoire plus large des outils d\'IA locale, toutes plateformes.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-06',
    dateModified: '2026-11-07',
    next_refresh_due: '2027-05-06',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/sablate-review-hero-es.webp',
    title: 'Reseña de Sablate: subtítulos e incrustación para Windows y Mac',
    seoTitle: 'Reseña de Sablate: generador de subtítulos para PC y Mac',
    intro: 'Sablate es una app de subtítulos freemium y de código cerrado para Windows y Mac: arrastras un vídeo, transcribe, según su fabricante, el habla con el modelo Whisper de OpenAI en tu propio ordenador, añade capas de traducción, te deja editar los tiempos e incrusta en el vídeo subtítulos con estilo. Esta reseña resume lo que documentan la web, el registro de cambios y la política de privacidad del fabricante, dónde se contradicen esas páginas y cómo se compara Sablate con otras herramientas de subtítulos y transcripción del directorio.',
    metaDescription: 'Reseña de Sablate: subtítulos, traducción e incrustación para Windows y Mac, locales según su fabricante. Plan gratis, Pro $29 único. No probada.',
    twitterDescription: 'Reseña de Sablate: subtítulos con Whisper para Windows y Mac, traducidos e incrustados en el vídeo en tu propio ordenador, según su fabricante. Precio, privacidad, límites y alternativas.',
    audience: 'Creadores de vídeo, editores y docentes en Windows o Mac que quieren subtítulos y traducciones sin subir sus grabaciones — cubre precio, instalación, modelos, privacidad, límites y alternativas.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Sablate review',
    targetKeywords: [
      'reseña sablate',
      'sablate subtítulos',
      'generador de subtítulos sin conexión',
      'subtítulos locales con whisper windows mac',
      'incrustar subtítulos en vídeo sin conexión',
      'transcripción de vídeo privada',
      'traducción de subtítulos sin nube',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Mac',
      'NVIDIA GPU',
    ],
    leadAnswerBlock: '**Sablate es una app de subtítulos de código cerrado para Windows y Mac que, según su fabricante, transcribe, traduce y genera los subtítulos en tu propio ordenador sin subir tu vídeo.** Aun así usa la red para actualizaciones, comprobaciones de licencia y estadísticas de uso que el fabricante describe como anónimas. Un plan gratuito cubre vídeos de hasta 10 minutos, y Pro cuesta $29 una sola vez o $5.99 al mes. Esta reseña se basa en la web pública, el registro de cambios, la documentación y la política de privacidad del fabricante, no en una prueba práctica.',
    quickAnswerTop: {
      es: {
        question: '¿Es Sablate una herramienta de subtítulos local?',
        answer: 'Según su fabricante, sí: la transcripción se ejecuta con Whisper (faster-whisper), la traducción sin conexión con Argos y la generación de subtítulos con ffmpeg, todo en tu PC con Windows o tu Mac, y el audio y el vídeo no se suben al fabricante. Los motores en la nube como OpenAI, ElevenLabs, DeepL y Claude son opcionales, solo de Pro y requieren tu propia clave de API. La app sigue haciendo comprobaciones de actualización, una comprobación diaria de la licencia Pro y llamadas de estadísticas de uso que el fabricante describe como anónimas. El código es cerrado y PromptQuorum no inspeccionó el tráfico de red, así que la afirmación es del propio fabricante.',
        bullets: [
          'Arrastra un archivo de vídeo o audio, obtén una transcripción con tiempos, añade capas de traducción, edita en una línea de tiempo y exporta .srt, .vtt, .txt, .ass o un .mp4 con los subtítulos incrustados.',
          'Trece estilos de subtítulos, de Hormozi y Karaoke a Cinema, renderizados con libass.',
          'Cuatro niveles de calidad de Whisper, de Fast (78 MB) a Best (3.09 GB); una GPU NVIDIA se usa automáticamente, y si no, la CPU.',
          'Solo Windows 10 o posterior y macOS 12 o posterior; no hay versión para Linux, iPhone ni Android.',
          'El plan gratuito cubre vídeos de hasta 10 minutos; Pro añade todos los niveles de Whisper, motores en la nube con tu propia clave y exportaciones sin marca.',
        ],
        updatedDate: '2026-11-06',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Conseguir Sablate', anchor: 'get-it' },
      { label: 'Sablate de un vistazo', anchor: 'at-a-glance' },
      { label: 'Qué es Sablate', anchor: 'what-is-sablate' },
      { label: 'Primeros pasos', anchor: 'how-to-get-started' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Modelos y hardware', anchor: 'models-hardware' },
      { label: 'Privacidad, licencia y coste', anchor: 'privacy' },
      { label: 'La palabra del desarrollador', anchor: 'from-the-maker' },
      { label: 'Equilibrio: ventajas y limitaciones', anchor: 'tradeoffs' },
      { label: 'Sablate frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar Sablate', anchor: 'who-should-use' },
      { label: 'Quién no debería usar Sablate', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
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
            text: 'Sablate es una app de subtítulos freemium para Windows y Mac que, según su fabricante, ejecuta la transcripción con Whisper, la traducción sin conexión y la incrustación de subtítulos en tu propio ordenador en lugar de en un servicio en la nube.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en un estudio de subtítulos en tu escritorio: según su fabricante, tu vídeo se queda en tu disco mientras la app escucha, escribe los subtítulos, los traduce y los pinta sobre la imagen.',
          },
        ],
        items: [
          'Afirmación de uso local: la transcripción, la traducción sin conexión y el renderizado se ejecutan en el dispositivo; los motores en la nube son opcionales y usan tu propia clave.',
          'Licencia y fabricante: propietaria, creada por FuumiSoft, un pequeño estudio independiente en Turquía, según el desarrollador (la web aún no lo dice; no verificado de forma independiente).',
          'Precio: gratis para vídeos de hasta 10 minutos, Pro por $29 una sola vez o $5.99 al mes, con devolución de 30 días en la licencia de pago único.',
          'Mantenimiento: la versión 1.0.2 salió el 19 de octubre de 2026, así que el proyecto se actualiza de forma activa, pero se lanzó apenas el 1 de septiembre de 2026.',
          'Carencias: sin etiquetas de hablante, sin versión para Linux ni móvil, y no se encontró ninguna opción para desactivar las estadísticas de uso.',
        ],
      },
      getItSablate: {
        id: 'get-it',
        title: 'Conseguir Sablate',
        content: [
          '**Sablate se instala como cualquier app de escritorio, no hace falta terminal.** Descarga el instalador para tu sistema desde la web oficial; los modelos de voz de Whisper se descargan dentro de la app la primera vez que los usas.',
        ],
        columns: ['Plataforma', 'Dónde conseguirla'],
        rows: [
          {
            Plataforma: 'Windows',
            'Dónde conseguirla': '[Descargar para Windows](https://sablate.com/download) — .exe, Windows 10 de 64 bits o posterior, unos 320 MB (1.3 GB instalado)',
          },
          {
            Plataforma: 'Mac',
            'Dónde conseguirla': '[Descargar para Mac](https://sablate.com/download) — .dmg, macOS 12 o posterior, compilaciones separadas para Apple Silicon e Intel',
          },
          {
            Plataforma: 'Plan gratuito',
            'Dónde conseguirla': '[Ver los planes](https://sablate.com/pricing) — sin cuenta y sin tarjeta de crédito',
          },
          {
            Plataforma: 'Notas de versión',
            'Dónde conseguirla': '[Registro de cambios](https://sablate.com/changelog)',
          },
          {
            Plataforma: 'Sitio web',
            'Dónde conseguirla': '[sablate.com](https://sablate.com)',
          },
          {
            Plataforma: 'Política de privacidad',
            'Dónde conseguirla': '[Política de privacidad de Sablate](https://sablate.com/legal/privacy)',
          },
          {
            Plataforma: 'Código fuente',
            'Dónde conseguirla': 'Código cerrado; sin repositorio público',
          },
        ],
        note: 'La página de descarga solo lista Windows y macOS; no se ofrece ninguna compilación para Linux, iOS ni Android.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Sablate de un vistazo',
        columns: ['Atributo', 'Sablate'],
        rows: [
          { Atributo: 'Plataforma', Sablate: 'Windows 10+ y macOS 12+' },
          { Atributo: 'Precio', Sablate: 'Plan gratuito; Pro $29 único o $5.99/mes' },
          { Atributo: 'Licencia', Sablate: 'Propietaria, código cerrado' },
          { Atributo: 'Ejecución', Sablate: 'En tu ordenador con faster-whisper, Argos y ffmpeg; internet para descargas, actualizaciones y comprobaciones de licencia' },
          { Atributo: 'Idiomas', Sablate: 'Unos 100 idiomas hablados con detección automática; no se indica el número de pares de Argos' },
          { Atributo: 'Etiquetas de hablante', Sablate: 'No, figura como no compatible' },
          { Atributo: 'Transcripción en tiempo real', Sablate: 'No indicado; Sablate procesa archivos, no audio en directo' },
          { Atributo: 'Usable solo con CPU', Sablate: 'Sí, más lento sin una GPU NVIDIA' },
          { Atributo: 'Servidor de API local', Sablate: 'No indicado' },
        ],
        note: 'Los atributos siguen la comparación de voz a texto del Local LLM Software Directory. Que la web no mencione algo significa desconocido, no no compatible.',
      },
      whatIsSablate: {
        id: 'what-is-sablate',
        title: 'Qué es Sablate',
        content: [
          '**Sablate es un flujo de trabajo de subtítulos para archivos que ya tienes en tu disco, no una herramienta de subtitulado en directo ni de dictado.** Añades un archivo de vídeo o audio; la app lo transcribe con Whisper, te deja añadir capas de traducción encima, ofrece un editor para los tiempos y el texto, aplica un estilo de subtítulos y exporta el resultado.',
          'Según el desarrollador, Furkan Bağcı, Sablate lo crea FuumiSoft, un pequeño estudio de software independiente en Turquía que también hace File Arbor y Vidray; la web aún no lo indica y PromptQuorum no lo ha verificado de forma independiente. Las páginas dicen que no descarga de YouTube, ni dobla, ni clona voces, ni recorta clips automáticamente, ni etiqueta hablantes.',
          'Esta reseña se basa en la web, el registro de cambios, la documentación, la política de privacidad y las condiciones. No hubo prueba práctica, así que aquí no se valoran la precisión, la velocidad ni la estabilidad.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeros pasos',
        content: [
          '**La puesta en marcha es una instalación, una descarga de modelo y un trabajo.** Los pasos siguen la web y su documentación.',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Descarga el .exe para Windows o el .dmg para Mac desde la [página de descarga](https://sablate.com/download); el plan gratuito no necesita cuenta.',
          },
          {
            title: 'Añade un vídeo',
            whyItMatters: 'Arrastra archivos .mp4, .mov, .mkv, .webm, .avi, .m4v, .mp3, .wav, .m4a o .flac, o una carpeta con ellos en Pro, y elige un nivel de Whisper.',
          },
          {
            title: 'Transcribe y traduce',
            whyItMatters: 'El modelo de voz se descarga la primera vez que usas un nivel. Después añade capas de traducción: Argos funciona sin conexión, con un paquete de idioma por cada par.',
          },
          {
            title: 'Edita, da estilo y exporta',
            whyItMatters: 'Ajusta los tiempos y divide las líneas en la línea de tiempo, elige uno de los 13 estilos predefinidos y exporta archivos de subtítulos o un vídeo con los subtítulos incrustados en 16:9, 9:16 o 1:1.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El conjunto de funciones se centra en subtítulos privados para vídeo corto y largo.** Todo lo siguiente procede de la web, la documentación y el registro de cambios.',
        ],
        items: [
          '**Transcripción local.** faster-whisper en cuatro niveles, con aceleración automática por GPU NVIDIA en Windows y uso de la CPU como alternativa.',
          '**Capas de traducción.** Añade un idioma de destino sobre una transcripción; Argos funciona sin conexión, y DeepL, OpenAI y Claude funcionan con tu propia clave en Pro.',
          '**Editor de subtítulos.** Vídeo, transcripción y panel de estilos en una sola ventana, con ajuste de tiempos en la línea de tiempo, división y unión de líneas y un aviso de velocidad de lectura.',
          '**Estilos de subtítulos.** Trece estilos predefinidos, un barrido tipo karaoke palabra por palabra y, en Pro, estilos personalizados.',
          '**Exportación.** .srt, .vtt y .txt; en Pro también .ass y un .mkv con subtítulos opcionales y una pista por idioma; .mp4 con subtítulos incrustados en todos los planes.',
          '**Trabajos por lotes.** Pro acepta una carpeta de vídeos y exporta todos los idiomas con un clic.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelos y hardware',
        content: [
          '**La app ejecuta Whisper mediante faster-whisper, con cuatro niveles.** La documentación cita Fast (tiny, 78 MB), Balanced (small, 486 MB), Accurate (large-v3-turbo, 1.62 GB) y Best (large-v3, 3.09 GB); la página de descarga da un intervalo de 75 MB a 2.9 GB. Según el desarrollador, ambas describen los mismos archivos: la documentación cuenta en unidades decimales y la página de descarga en unidades binarias. El plan gratuito incluye Fast y Balanced, y Pro añade Accurate y Best.',
          'Una GPU NVIDIA se usa automáticamente y su entorno de ejecución CUDA se descarga la primera vez; sin ella la app funciona con la CPU, y en macOS funciona con la CPU. La web no indica un mínimo de RAM ni de GPU. La instalación en Windows ocupa unos 1.3 GB de disco. La web afirma que una GPU hace la transcripción de 5 a 10 veces más rápida; PromptQuorum no midió la velocidad ni la precisión.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad, licencia y coste',
        content: [
          '**La política de privacidad dice que la aplicación de escritorio procesa tus archivos multimedia en local y que los archivos de audio y vídeo nunca se suben.** La política tiene fecha de octubre de 2026. Si activas un proveedor en la nube con tu propia clave, el audio o el texto va directamente de tu equipo a ese proveedor según sus condiciones, y la app lo avisa en ese momento.',
          'Internet se sigue usando en otros puntos. La documentación enumera una comprobación de actualizaciones cada pocas horas, una comprobación de licencia aproximadamente una vez al día en Pro, estadísticas de uso anónimas y un formulario opcional para sugerir funciones. Las estadísticas van a PostHog, en la UE, y según la política incluyen la versión de la app, el sistema, el tipo de procesador, el plan y si hay GPU, pero nunca audio, vídeo, transcripciones, nombres de archivo ni claves. Las páginas que leímos no describen ninguna opción para desactivar las estadísticas. El código es cerrado y PromptQuorum no examinó el tráfico de red, así que estas afirmaciones son del propio fabricante.',
          'Es un producto freemium y propietario. El plan gratuito cubre vídeos de hasta 10 minutos y 3 trabajos al mes, con una línea de créditos o una marca en la esquina de las exportaciones; Pro cuesta $29 una sola vez o $5.99 al mes y está activo en un dispositivo a la vez. La web indica los precios en dólares estadounidenses y no menciona el IVA. La licencia de pago único tiene devolución de 30 días; los pagos mensuales no se reembolsan.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: "La palabra del desarrollador",
        content: [
          "Furkan Bağcı, desarrollador de Sablate en FuumiSoft, leyó esta reseña y escribió que la contrastó con las páginas de Sablate y no encontró nada técnicamente incorrecto. Añadió quién crea la app (ahora indicado arriba) y explicó que los tamaños de modelo de la página de documentación y de la de descarga describen los mismos archivos, en unidades decimales y binarias. La nota siguiente son palabras del propio desarrollador, no una valoración independiente de PromptQuorum; PromptQuorum no ha ejecutado la app.",
          "«Sablate existe para hacer todo el trabajo de subtitulado en el ordenador donde ya está el material: transcripción con Whisper, traducción, edición e incrustación en una sola ventana, sin subir nada y sin cuota por minuto. La app es de código cerrado, así que, en lugar de pedir que se crea en «privado» por fe, la documentación enumera todas las llamadas salientes que hace (la comprobación de actualizaciones, la comprobación de la licencia Pro, las estadísticas de uso anónimas y el formulario opcional de comentarios), y la política de privacidad detalla exactamente qué contienen las estadísticas. Los motores en la nube solo están para quien aporta su propia clave, y la app lo avisa cada vez que se elige uno.»",
        ],
        note: "— Furkan Bağcı, FuumiSoft",
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Equilibrio: ventajas y limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / advertencia'],
        rows: [
          {
            Ventaja: 'Todo en tu ordenador',
            'Qué significa en el uso real': 'Según el fabricante, la transcripción, la traducción sin conexión y el renderizado no necesitan subir nada ni cobran por minuto.',
            'Limitación / advertencia': 'Código cerrado, así que la afirmación no se puede comprobar; las llamadas de actualización, licencia y estadísticas siguen usando la red.',
          },
          {
            Ventaja: 'Subtítulos con estilo',
            'Qué significa en el uso real': 'Trece estilos predefinidos y la incrustación convierten una transcripción en un vídeo corto terminado.',
            'Limitación / advertencia': 'Las exportaciones gratuitas llevan una marca en la esquina o una línea de créditos; la exportación a .ass y .mkv requiere Pro.',
          },
          {
            Ventaja: 'Precio único',
            'Qué significa en el uso real': '$29 una sola vez evitan una suscripción.',
            'Limitación / advertencia': 'La licencia cubre un dispositivo a la vez; los pagos mensuales no se reembolsan.',
          },
          {
            Ventaja: 'Unos 100 idiomas',
            'Qué significa en el uso real': 'Los idiomas hablados se detectan automáticamente.',
            'Limitación / advertencia': 'Los paquetes de idioma de Argos son por par y no se indica cuántos pares hay; no se publican cifras de precisión.',
          },
          {
            Ventaja: 'Cuatro niveles de Whisper',
            'Qué significa en el uso real': 'Un modelo pequeño para borradores rápidos, otros mayores para más precisión.',
            'Limitación / advertencia': 'Accurate y Best requieren Pro y varios gigabytes de disco; las afirmaciones de velocidad no están probadas.',
          },
          {
            Ventaja: 'Desarrollo activo',
            'Qué significa en el uso real': 'Tres versiones entre el 1 de septiembre y el 19 de octubre de 2026.',
            'Limitación / advertencia': 'Un producto muy joven, sin reseñas independientes encontradas.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Sablate frente a alternativas',
        content: [
          'Estas son las herramientas de subtítulos y transcripción más cercanas del directorio: un editor de subtítulos gratuito y de código abierto, una app de transcripción gratuita y de código abierto, una app de Apple de compra única y una app de transcripción para Mac.',
        ],
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Papel', 'Diferencia clave'],
        rows: [
          {
            App: 'Sablate',
            Plataformas: 'Windows, Mac',
            'Precio y licencia': 'Plan gratuito, Pro $29 único, propietaria',
            Papel: 'Subtítulos con incrustación',
            'Diferencia clave': 'Whisper, traducción e incrustación con estilo en una sola app; código cerrado',
          },
          {
            App: '[Subtitle Edit](/es/power-local-llm/subtitle-edit-review)',
            Plataformas: 'Windows, Mac, Linux',
            'Precio y licencia': 'Gratis, MIT',
            Papel: 'Editor de subtítulos',
            'Diferencia clave': 'Código abierto con muchos motores; pensado para editar y traducir subtítulos existentes',
          },
          {
            App: '[Buzz](/es/power-local-llm/buzz-captions-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Precio y licencia': 'Gratis, MIT',
            Papel: 'App de transcripción',
            'Diferencia clave': 'Gratuita y de código abierto; convierte grabaciones en subtítulos y transcripciones',
          },
          {
            App: '[Aiko](/es/power-local-llm/aiko-review)',
            Plataformas: 'iPhone, iPad, Mac',
            'Precio y licencia': '$24 único (precio en EE. UU.), propietaria',
            Papel: 'App de transcripción de Apple',
            'Diferencia clave': 'Solo en dispositivos Apple; sin versión para Windows',
          },
          {
            App: '[MacWhisper](/es/power-local-llm/macwhisper-review)',
            Plataformas: 'macOS',
            'Precio y licencia': 'Freemium, propietaria',
            Papel: 'App de transcripción para Mac',
            'Diferencia clave': 'Transcribe archivos, grabaciones de reuniones y dictado en directo; solo Mac',
          },
        ],
        note: 'Las plataformas, precios y funciones de las apps de terceros cambian con frecuencia. Verifica los detalles actuales en la página de cada proyecto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar Sablate',
        items: [
          '**Creadores de vídeo corto en Windows o Mac.** Los subtítulos con estilo e incrustados salen de la misma app que transcribe.',
          '**Personas que mantienen sus grabaciones en privado.** La transcripción y la traducción sin conexión se quedan en el ordenador, según el fabricante.',
          '**Docentes y editores que necesitan varios idiomas.** Las capas de traducción exportan una pista por idioma.',
          '**Compradores que prefieren pagar una vez.** Existe una licencia Pro de pago único de $29 junto a la suscripción.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Sablate',
        items: [
          '**Usuarios de Linux, iPhone y Android.** Solo se ofrecen compilaciones para Windows y Mac.',
          '**Quien necesite etiquetas de hablante o subtítulos en directo.** El fabricante indica que las etiquetas de hablante no son compatibles y describe un flujo basado en archivos; las páginas que leímos no mencionan los subtítulos en directo.',
          '**Quien necesite software auditable.** El código es cerrado y las afirmaciones de privacidad no se pueden inspeccionar.',
          '**Quien quiera software totalmente gratuito.** El plan gratuito se limita a vídeos de 10 minutos; Subtitle Edit y Buzz son gratuitos y de código abierto.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona Sablate sin conexión?',
            a: 'El fabricante dice que sí, una vez descargados el modelo de voz y los paquetes de idioma de Argos que necesites. Las actualizaciones, las comprobaciones de licencia de Pro y las estadísticas de uso necesitan conexión pero, según la documentación, la app sigue funcionando sin ellas. PromptQuorum no la probó sin conexión.',
          },
          {
            q: '¿Se envía mi vídeo a la nube?',
            a: 'La política de privacidad dice que los archivos multimedia nunca se suben al fabricante, salvo cuando activas un motor en la nube con tu propia clave. El código es cerrado y PromptQuorum no inspeccionó el tráfico de red.',
          },
          {
            q: '¿Qué formatos de archivo acepta?',
            a: 'Vídeo y audio, incluidos .mp4, .mov, .mkv, .webm, .avi, .m4v, .mp3, .wav, .m4a y .flac, según la documentación.',
          },
          {
            q: '¿Puedo probarla antes de pagar?',
            a: 'Sí: el plan gratuito no requiere cuenta ni tarjeta de crédito, pero limita la duración del vídeo a 10 minutos y los trabajos a 3 al mes. No se menciona ninguna prueba aparte.',
          },
          {
            q: "¿Quién crea Sablate?",
            a: "Según su desarrollador, Furkan Bağcı, Sablate lo crea FuumiSoft, un pequeño estudio de software independiente en Turquía que también hace File Arbor y Vidray. La web de Sablate aún no lo indica con claridad y PromptQuorum no lo ha verificado de forma independiente.",
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'Sablate encaja si quieres convertir vídeo en un PC con Windows o un Mac en subtítulos traducidos, con estilo e incrustados donde, según el fabricante, el trabajo se queda en tu propio ordenador, y aceptas software de código cerrado. Tiene un plan gratuito utilizable, un precio Pro de pago único y una versión reciente.',
          'Las advertencias son el alcance y la verificabilidad: sin versión para Linux ni móvil, sin etiquetas de hablante, código cerrado, un fabricante (FuumiSoft, Turquía) que solo nombra el mensaje del desarrollador, no la web, afirmaciones de privacidad que PromptQuorum no pudo comprobar y un producto con solo un par de meses de vida. Prueba el plan gratuito con un clip corto antes de comprar.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Web de Sablate](https://sablate.com) — funciones y precios.',
          '[Página de descarga](https://sablate.com/download) — plataformas y requisitos del sistema.',
          '[Documentación](https://sablate.com/docs) — modelos, formatos, llamadas de red y preguntas frecuentes.',
          '[Registro de cambios](https://sablate.com/changelog) — historial de versiones; versión 1.0.2 con fecha del 19 de octubre de 2026.',
          '[Política de privacidad](https://sablate.com/legal/privacy) — tratamiento de datos, con fecha de octubre de 2026.',
          '[Condiciones de uso](https://sablate.com/legal/terms) — licencia, devolución y condiciones por dispositivo.',
          "Mensaje del desarrollador (Furkan Bağcı, 7 de noviembre de 2026) — datos del fabricante, unidades de los tamaños de modelo y nota del desarrollador; son declaraciones suyas, no verificadas de forma independiente.",
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Herramientas locales de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — texto a voz, voz a texto y agentes de voz lado a lado.',
          '[Reseña de Subtitle Edit](/es/power-local-llm/subtitle-edit-review) — un editor de subtítulos gratuito y de código abierto con voz a texto local.',
          '[Reseña de Buzz](/es/power-local-llm/buzz-captions-review) — una app de transcripción gratuita para tres sistemas de escritorio.',
          '[Reseña de Whisper.cpp](/es/power-local-llm/whisper-cpp-review) — el motor abierto detrás de muchas apps locales de Whisper.',
          '[El Local LLM Software Directory completo](/es/directory) — un directorio más amplio de herramientas de IA local para todas las plataformas.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-06',
    dateModified: '2026-11-07',
    next_refresh_due: '2027-05-06',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/sablate-review-hero-ja.webp',
    title: 'Sablate レビュー：Windows・Mac向け字幕生成と焼き込みアプリ',
    seoTitle: 'Sablate レビュー：Windows・Mac向け字幕生成アプリ',
    intro: 'Sablateは、Windows・Mac向けのフリーミアムのクローズドソース字幕アプリです。動画を取り込むと、開発元によれば、お使いのコンピューター上でOpenAIのWhisperモデルが音声を文字起こしし、翻訳レイヤーを追加し、タイミングを編集して、スタイル付きの字幕を動画に焼き込めます。このレビューでは、開発元の公式サイト、変更履歴、プライバシーポリシーが示している点、ページ同士で食い違っている点、ディレクトリ内の他の字幕・文字起こしツールとの比較をまとめます。',
    metaDescription: 'Sablateのレビュー：Windows・Mac向け、開発元によるとお使いのPC上で動作する字幕生成・翻訳・焼き込みアプリ。無料版あり、Proは$29の買い切り。実機検証なし。',
    twitterDescription: 'Sablateのレビュー：Windows・MacでWhisper字幕を開発元によると自分のPC上で生成し、翻訳して動画に焼き込むアプリ。価格、プライバシー、制限、代替ツールを解説します。',
    audience: '映像を外部にアップロードせずに字幕と翻訳を作りたい、WindowsまたはMacの動画クリエイター、編集者、教師向け。価格、インストール、モデル、プライバシー、制限、代替ツールを扱います。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Sablate review',
    targetKeywords: [
      'sablate レビュー',
      'sablate 字幕',
      'オフライン 字幕生成',
      'whisper ローカル 字幕 windows mac',
      '字幕 焼き込み オフライン',
      'プライベート 動画 文字起こし',
      'クラウドなし 字幕 翻訳',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Mac',
      'NVIDIA GPU',
    ],
    leadAnswerBlock: '**Sablateは、Windows・Mac向けのクローズドソースの字幕アプリで、開発元によると、文字起こし、翻訳、字幕のレンダリングをお使いのコンピューター上で行い、動画をアップロードしません。** ただし、アップデート、ライセンス確認、開発元が匿名と説明している利用統計にはネットワークを使います。 無料版は10分までの動画に対応し、Proは$29の買い切り、または月$5.99です。このレビューは、開発元の公開ウェブサイト、変更履歴、ドキュメント、プライバシーポリシーに基づいており、実機での検証は行っていません。',
    quickAnswerTop: {
      ja: {
        question: 'Sablateはローカルで動く字幕ツールですか？',
        answer: '開発元によると、はい。文字起こしはWhisper（faster-whisper）、オフライン翻訳はArgos、字幕のレンダリングはffmpegで、すべてWindows PCまたはMac上で実行され、音声と動画が開発元にアップロードされることはありません。OpenAI、ElevenLabs、DeepL、Claudeなどのクラウドエンジンは任意で、Pro限定、ご自身のAPIキーが必要です。ただし、アプリはアップデート確認、1日1回のProライセンス確認、開発元が匿名と説明している利用統計の送信を行います。コードは非公開で、PromptQuorumはネットワーク通信を調べていないため、この主張は開発元自身によるものです。',
        bullets: [
          '動画または音声ファイルを取り込むと、タイミング付きの文字起こしが得られます。翻訳レイヤーを追加し、タイムラインで編集して、.srt、.vtt、.txt、.ass、または字幕焼き込み済みの.mp4として書き出せます。',
          'HormoziやKaraokeからCinemaまで13種類の字幕スタイルを、libassでレンダリングします。',
          'Whisperの品質ティアはFast（78MB）からBest（3.09GB）まで4段階で、NVIDIA GPUは自動的に使われ、なければCPUで動作します。',
          '対応はWindows 10以降とmacOS 12以降のみで、Linux、iPhone、Android版はありません。',
          '無料版は10分までの動画に対応し、Proは全Whisperティア、ご自身のキーによるクラウドエンジン、マークなしの書き出しが加わります。',
        ],
        updatedDate: '2026-11-06',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Sablateの入手方法', anchor: 'get-it' },
      { label: 'Sablateの概要', anchor: 'at-a-glance' },
      { label: 'Sablateとは', anchor: 'what-is-sablate' },
      { label: 'はじめ方', anchor: 'how-to-get-started' },
      { label: '機能', anchor: 'features' },
      { label: 'モデルとハードウェア', anchor: 'models-hardware' },
      { label: 'プライバシー・ライセンス・費用', anchor: 'privacy' },
      { label: '開発者より', anchor: 'from-the-maker' },
      { label: 'メリットと制限', anchor: 'tradeoffs' },
      { label: 'Sablateと代替ツールの比較', anchor: 'vs-alternatives' },
      { label: 'Sablateが向いている人', anchor: 'who-should-use' },
      { label: 'Sablateが向いていない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
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
            text: 'Sablateは、開発元によると、クラウドサービスではなくお使いのコンピューター上で、Whisperによる文字起こし、オフライン翻訳、字幕の焼き込みを実行する、Windows・Mac向けのフリーミアム字幕アプリです。',
          },
          {
            type: 'plain-terms',
            text: '机の上にある字幕スタジオだと考えてください。アプリが音声を聞き取り、字幕を書き起こし、翻訳して映像に描き込むあいだ、開発元によると、動画はお使いのドライブに残ります。',
          },
        ],
        items: [
          'ローカルの主張：文字起こし、オフライン翻訳、レンダリングは端末内で実行されます。クラウドエンジンは任意で、ご自身のキーを使います。',
          'ライセンスと開発元：プロプライエタリで、開発者によるとトルコの小規模な独立系スタジオFuumiSoftが開発しています（公式サイトにはまだ記載がなく、独自には確認していません）。',
          '価格：10分までの動画は無料、Proは$29の買い切りまたは月$5.99で、買い切りライセンスには30日間の返金対応があります。',
          'メンテナンス：バージョン1.0.2が2026年10月19日にリリースされており、継続的に更新されていますが、公開は2026年9月1日になったばかりです。',
          '不足点：話者ラベルがなく、Linux版とモバイル版もなく、利用統計のオプトアウトも見つかりませんでした。',
        ],
      },
      getItSablate: {
        id: 'get-it',
        title: 'Sablateの入手方法',
        content: [
          '**Sablateはほかのデスクトップアプリと同じようにインストールでき、ターミナルは不要です。** 公式サイトからお使いのシステム用のインストーラーをダウンロードします。Whisperの音声認識モデルは、初回利用時にアプリ内で取得されます。',
        ],
        columns: [
          'プラットフォーム',
          '入手先',
        ],
        rows: [
          {
            'プラットフォーム': 'Windows',
            '入手先': '[Windows版をダウンロード](https://sablate.com/download) — .exe、Windows 10 64ビット以降、約320MB（インストール後1.3GB）',
          },
          {
            'プラットフォーム': 'Mac',
            '入手先': '[Mac版をダウンロード](https://sablate.com/download) — .dmg、macOS 12以降、Apple Silicon版とIntel版は別ビルド',
          },
          {
            'プラットフォーム': '無料プラン',
            '入手先': '[プランを見る](https://sablate.com/pricing) — アカウントとクレジットカードは不要',
          },
          {
            'プラットフォーム': 'リリースノート',
            '入手先': '[変更履歴](https://sablate.com/changelog)',
          },
          {
            'プラットフォーム': '公式サイト',
            '入手先': '[sablate.com](https://sablate.com)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[Sablateのプライバシーポリシー](https://sablate.com/legal/privacy)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': 'クローズドソース。公開リポジトリなし',
          },
        ],
        note: 'ダウンロードページが挙げているのはWindowsとmacOSだけで、Linux、iOS、Androidのビルドは提供されていません。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Sablateの概要',
        columns: [
          '項目',
          'Sablate',
        ],
        rows: [
          { '項目': 'プラットフォーム', 'Sablate': 'Windows 10以降、macOS 12以降' },
          { '項目': '価格', 'Sablate': '無料版あり。Proは$29の買い切りまたは月$5.99' },
          { '項目': 'ライセンス', 'Sablate': 'プロプライエタリ、クローズドソース' },
          { '項目': '実行場所', 'Sablate': 'お使いのPC上でfaster-whisper、Argos、ffmpeg。ダウンロード、アップデート、ライセンス確認にはインターネット' },
          { '項目': '対応言語', 'Sablate': '約100の話し言葉を自動検出。Argosの言語ペア数は記載なし' },
          { '項目': '話者ラベル', 'Sablate': 'なし。非対応と記載' },
          { '項目': 'リアルタイム文字起こし', 'Sablate': '記載なし。Sablateはファイルを処理し、ライブ音声は扱わない' },
          { '項目': 'CPUのみで利用可能', 'Sablate': 'はい。NVIDIA GPUがないと遅くなる' },
          { '項目': 'ローカルAPIサーバー', 'Sablate': '記載なし' },
        ],
        note: '項目は、Local LLM Software Directoryで使われている音声認識の比較に沿っています。サイトに記載がない項目は、未対応ではなく不明という意味です。',
      },
      whatIsSablate: {
        id: 'what-is-sablate',
        title: 'Sablateとは',
        content: [
          '**Sablateは、すでにディスクにあるファイルのための字幕ワークフローであり、ライブ字幕や音声入力のツールではありません。** 動画または音声ファイルを追加すると、アプリがWhisperで文字起こしし、その上に翻訳レイヤーを追加でき、タイミングとテキストの編集機能、字幕スタイルの適用、書き出しまでを行います。',
          '開発者のFurkan Bağcı氏によると、SablateはトルコのFuumiSoftという小規模な独立系ソフトウェアスタジオが開発しており、同社はFile ArborとVidrayも手がけています。公式サイトにはまだ記載がなく、PromptQuorumも独自には確認していません。ページには、YouTubeからのダウンロード、吹き替え、音声クローン、自動クリップ、話者ラベルには対応しないと書かれています。',
          'このレビューは、公式サイト、変更履歴、ドキュメント、プライバシーポリシー、利用規約に基づいています。実機での検証は行っていないため、精度、速度、安定性は評価していません。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'はじめ方',
        content: [
          '**セットアップは、インストール、モデルのダウンロード、ジョブの実行の流れです。** 手順は公式サイトとドキュメントに沿っています。',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: '[ダウンロードページ](https://sablate.com/download)からWindows用の.exeまたはMac用の.dmgを入手します。無料プランにアカウントは不要です。',
          },
          {
            title: '動画を追加する',
            whyItMatters: '.mp4、.mov、.mkv、.webm、.avi、.m4v、.mp3、.wav、.m4a、.flacのファイル（Proではフォルダごとも可）を取り込み、Whisperのティアを選びます。',
          },
          {
            title: '文字起こしと翻訳をする',
            whyItMatters: '音声認識モデルは、各ティアを初めて使うときにダウンロードされます。続いて翻訳レイヤーを追加します。Argosはオフラインで動作し、言語ペアごとに1つの言語パックが必要です。',
          },
          {
            title: '編集、スタイル設定、書き出しをする',
            whyItMatters: 'タイムラインでキューのタイミング調整と分割を行い、13種類のプリセットから1つを選んで、字幕ファイル、または16:9、9:16、1:1の字幕焼き込み動画を書き出します。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**機能の中心は、ショート動画から長尺動画までのプライベートな字幕作成です。** 以下はすべて公式サイト、ドキュメント、変更履歴によります。',
        ],
        items: [
          '**ローカルでの文字起こし。** faster-whisperを4ティアで提供し、WindowsではNVIDIA GPUを自動で利用し、CPUにもフォールバックします。',
          '**翻訳レイヤー。** 文字起こしの上に翻訳先の言語を追加できます。Argosはオフラインで動作し、DeepL、OpenAI、ClaudeはProでご自身のキーを使って利用できます。',
          '**字幕エディター。** 動画、文字起こし、スタイルパネルを1つのウィンドウにまとめ、タイムラインでの調整、分割と結合、読み取り速度の警告に対応します。',
          '**字幕スタイル。** 13種類のプリセットと、単語ごとのカラオケ風スイープがあり、Proではカスタムプリセットも使えます。',
          '**書き出し。** .srt、.vtt、.txtに対応し、Proでは.assと、言語ごとに1トラックのソフト字幕付き.mkvも書き出せます。字幕焼き込みの.mp4は全プランで利用できます。',
          '**バッチ処理。** Proではフォルダごと動画を取り込み、全言語を1クリックで書き出せます。',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'モデルとハードウェア',
        content: [
          '**アプリはfaster-whisper経由でWhisperを実行し、ティアは4種類です。** ドキュメントには、Fast（tiny、78MB）、Balanced（small、486MB）、Accurate（large-v3-turbo、1.62GB）、Best（large-v3、3.09GB）が挙げられており、ダウンロードページでは75MBから2.9GBの範囲とされています。開発者によると、どちらも同じファイルを指しており、ドキュメントは10進単位、ダウンロードページは2進単位で表記しています。無料版にはFastとBalancedが含まれ、ProでAccurateとBestが加わります。',
          'NVIDIA GPUは自動的に使われ、CUDAランタイムは初回利用時にダウンロードされます。GPUがない場合はCPUで動作し、macOSではCPUで動作します。サイトにRAMやGPUの最低要件の記載はありません。Windowsのインストールには約1.3GBのディスク容量が必要です。サイトでは、GPUがあると文字起こしが約5〜10倍速くなると主張していますが、PromptQuorumは速度も精度も測定していません。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー・ライセンス・費用',
        content: [
          '**プライバシーポリシーには、デスクトップアプリケーションはメディアをローカルで処理し、音声と動画ファイルがアップロードされることはないと記載されています。** ポリシーの日付は2026年10月です。ご自身のキーでクラウドプロバイダーを有効にした場合、音声またはテキストはお使いのマシンからそのプロバイダーへ直接送られ、プロバイダーの規約が適用されます。アプリはその時点でその旨を表示します。',
          'それ以外の場面でもネットワークは使われます。ドキュメントには、数時間ごとのアップデート確認、Proでの約1日1回のライセンス確認、匿名の利用統計、任意の機能提案フォームが挙げられています。統計はEUのPostHogに送られ、ポリシーによると、アプリのバージョン、システム、プロセッサの種類、プラン、GPUの有無が含まれますが、音声、動画、文字起こし結果、ファイル名、キーは含まれません。確認したページには、統計をオフにする設定の記載はありませんでした。コードは非公開で、PromptQuorumはネットワーク通信を調べていないため、これらの記述は開発元自身によるものです。',
          'フリーミアムのプロプライエタリ製品です。無料版は10分までの動画、月3ジョブまでで、書き出しにはクレジット表記または角のマークが付きます。Proは$29の買い切りまたは月$5.99で、同時に有効にできるのは1台です。サイトは価格を米ドルで表示しており、VAT（付加価値税）には触れていません。買い切りライセンスには30日間の返金対応がありますが、月額の支払いは返金されません。',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: "開発者より",
        content: [
          "SablateをFuumiSoftで開発しているFurkan Bağcı氏は、このレビューを読み、Sablateのページと照らし合わせて技術的な誤りは見つからなかったと書いています。氏はアプリの開発元（上記に反映済み）を補足し、ドキュメントとダウンロードページのモデルサイズは同じファイルを10進単位と2進単位で表したものだと説明しました。以下のメモは開発者本人の言葉であり、PromptQuorumの独立した評価ではありません。PromptQuorumはこのアプリを実行していません。",
          "「Sablateは、素材がすでにあるコンピューター上で字幕作業のすべてを完結させるために作りました。Whisperによる文字起こし、翻訳、編集、焼き込みをひとつのウィンドウで行え、アップロードも分単位の料金も不要です。アプリはクローズドソースなので、「プライベート」を信じてほしいとお願いする代わりに、ドキュメントでアプリが行う外部通信をすべて一覧にしています（アップデート確認、Proライセンス確認、匿名の利用統計、任意のフィードバックフォーム）。プライバシーポリシーには統計の内容が正確に記載されています。クラウドエンジンは自分のキーを持ち込む人のためだけにあり、選ぶたびにアプリがその旨を表示します。」",
        ],
        note: "— Furkan Bağcı氏、FuumiSoft",
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'メリットと制限',
        columns: [
          'メリット',
          '実際の使い勝手',
          '制限・注意点',
        ],
        rows: [
          {
            'メリット': 'すべてお使いのPC上で',
            '実際の使い勝手': '開発元によると、文字起こし、オフライン翻訳、レンダリングにアップロードも分単位の料金も不要です。',
            '制限・注意点': 'クローズドソースのため主張は検証できません。アップデート、ライセンス、統計の通信にはネットワークが使われます。',
          },
          {
            'メリット': 'スタイルを付けられる字幕',
            '実際の使い勝手': '13種類のプリセットと焼き込みで、文字起こしが完成したショート動画になります。',
            '制限・注意点': '無料版の書き出しには角のマークまたはクレジット表記が付き、.assと.mkvの書き出しにはProが必要です。',
          },
          {
            'メリット': '買い切り価格',
            '実際の使い勝手': '$29の一括払いでサブスクリプションを避けられます。',
            '制限・注意点': 'ライセンスは同時に1台のみで、月額の支払いは返金されません。',
          },
          {
            'メリット': '約100言語',
            '実際の使い勝手': '話し言葉は自動的に検出されます。',
            '制限・注意点': 'Argosの言語パックはペアごとで、ペア数は記載がなく、精度の数値も公開されていません。',
          },
          {
            'メリット': '4種類のWhisperティア',
            '実際の使い勝手': '素早い下書きには小型モデル、精度重視には大型モデルを使えます。',
            '制限・注意点': 'AccurateとBestにはProと数GBのディスク容量が必要で、速度の主張は未検証です。',
          },
          {
            'メリット': '活発な開発',
            '実際の使い勝手': '2026年9月1日から10月19日までに3回のリリースがありました。',
            '制限・注意点': 'まだ非常に新しい製品で、第三者のレビューは見つかりませんでした。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Sablateと代替ツールの比較',
        content: [
          'ディレクトリ内で最も近い字幕・文字起こしツールは、無料のオープンソース字幕エディター、無料のオープンソース文字起こしアプリ、買い切りのApple向けアプリ、Mac向け文字起こしアプリです。',
        ],
        columns: [
          'アプリ',
          '対応',
          '価格とライセンス',
          '役割',
          '主な違い',
        ],
        rows: [
          {
            'アプリ': 'Sablate',
            '対応': 'Windows、Mac',
            '価格とライセンス': '無料版あり、Proは$29買い切り、プロプライエタリ',
            '役割': '焼き込み対応の字幕作成',
            '主な違い': 'Whisper、翻訳、スタイル付き焼き込みを1つのアプリで。クローズドソース',
          },
          {
            'アプリ': '[Subtitle Edit](/ja/power-local-llm/subtitle-edit-review)',
            '対応': 'Windows、Mac、Linux',
            '価格とライセンス': '無料、MIT',
            '役割': '字幕エディター',
            '主な違い': '多くのエンジンに対応するオープンソース。既存の字幕の編集と翻訳向けに作られたエディター',
          },
          {
            'アプリ': '[Buzz](/ja/power-local-llm/buzz-captions-review)',
            '対応': 'Mac、Windows、Linux',
            '価格とライセンス': '無料、MIT',
            '役割': '文字起こしアプリ',
            '主な違い': '無料のオープンソース。録音を字幕と文字起こしに変換',
          },
          {
            'アプリ': '[Aiko](/ja/power-local-llm/aiko-review)',
            '対応': 'iPhone、iPad、Mac',
            '価格とライセンス': '$24の買い切り（米国価格）、プロプライエタリ',
            '役割': 'Apple向け文字起こしアプリ',
            '主な違い': 'Apple端末のみ。Windows版なし',
          },
          {
            'アプリ': '[MacWhisper](/ja/power-local-llm/macwhisper-review)',
            '対応': 'macOS',
            '価格とライセンス': 'フリーミアム、プロプライエタリ',
            '役割': 'Mac向け文字起こしアプリ',
            '主な違い': 'ファイル、会議の録音、ライブ音声入力を文字起こし。Mac専用',
          },
        ],
        note: 'サードパーティ製アプリの対応環境、価格、機能は頻繁に変わります。決める前に各プロジェクトの公式ページで最新情報をご確認ください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Sablateが向いている人',
        items: [
          '**WindowsまたはMacのショート動画クリエイター。** 文字起こしするのと同じアプリから、スタイル付きの焼き込み字幕を作れます。',
          '**映像を外に出したくない人。** 開発元によると、文字起こしとオフライン翻訳はコンピューター上にとどまります。',
          '**複数言語が必要な教師や編集者。** 翻訳レイヤーは言語ごとに1トラックで書き出せます。',
          '**1回払いを好む人。** サブスクリプションとは別に、$29の買い切りProライセンスがあります。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Sablateが向いていない人',
        items: [
          '**Linux、iPhone、Androidのユーザー。** 提供されているのはWindowsとMac版だけです。',
          '**話者ラベルやライブ字幕が必要な人。** 開発元は話者ラベルを非対応としており、ファイルベースの作業を前提としています。確認したページにライブ字幕の記載はありません。',
          '**監査可能なソフトウェアが必要な人。** コードは非公開で、プライバシーの主張は検証できません。',
          '**完全に無料のソフトウェアを求める人。** 無料版は10分までの動画に限られます。Subtitle EditとBuzzは無料のオープンソースです。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Sablateはオフラインで使えますか？',
            a: '開発元によると、音声認識モデルとArgosの言語パックをダウンロードしたあとは使えます。アップデート、Proのライセンス確認、利用統計には接続が必要ですが、ドキュメントによると、それらがなくてもアプリは動作し続けます。PromptQuorumはオフラインでの動作を検証していません。',
          },
          {
            q: '動画はクラウドに送信されますか？',
            a: 'プライバシーポリシーには、ご自身のキーでクラウドエンジンを有効にした場合を除き、メディアが開発元にアップロードされることはないと記載されています。コードは非公開で、PromptQuorumはネットワーク通信を調べていません。',
          },
          {
            q: 'どのファイル形式に対応していますか？',
            a: 'ドキュメントによると、.mp4、.mov、.mkv、.webm、.avi、.m4v、.mp3、.wav、.m4a、.flacなどの動画・音声ファイルです。',
          },
          {
            q: '購入前に試せますか？',
            a: 'はい。無料プランはアカウントもクレジットカードも不要ですが、動画の長さは10分まで、ジョブは月3回までに制限されます。別枠の体験版についての記載はありません。',
          },
          {
            q: "Sablateは誰が作っていますか？",
            a: "開発者のFurkan Bağcı氏によると、SablateはトルコのFuumiSoftという小規模な独立系ソフトウェアスタジオが開発しており、同社はFile ArborとVidrayも手がけています。Sablateの公式サイトにはまだ明確な記載がなく、PromptQuorumも独自には確認していません。",
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: [
          'WindowsまたはMacの動画を、開発元によると作業が自分のコンピューター上にとどまる形で、翻訳済みでスタイル付きの焼き込み字幕にしたく、クローズドソースのソフトを受け入れられる方にSablateは向いています。使いやすい無料版、買い切りのPro価格、最近のリリースがあります。',
          '注意点は対応範囲と検証可能性です。Linux版とモバイル版がなく、話者ラベルがなく、コードは非公開で、開発元（トルコのFuumiSoft）は開発者のメッセージにしか書かれておらず公式サイトには載っておらず、プライバシーの主張はPromptQuorumでは確認できず、製品もまだ公開から数か月です。購入前に、短いクリップで無料プランをお試しください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Sablate公式サイト](https://sablate.com) — 機能と価格。',
          '[ダウンロードページ](https://sablate.com/download) — 対応プラットフォームとシステム要件。',
          '[ドキュメント](https://sablate.com/docs) — モデル、形式、ネットワーク通信、FAQ。',
          '[変更履歴](https://sablate.com/changelog) — バージョン履歴。バージョン1.0.2は2026年10月19日付。',
          '[プライバシーポリシー](https://sablate.com/legal/privacy) — データの取り扱い。2026年10月付。',
          '[利用規約](https://sablate.com/legal/terms) — ライセンス、返金、デバイスに関する規約。',
          "開発者からのメッセージ（Furkan Bağcı氏、2026年11月7日）— 開発元の情報、モデルサイズの単位、開発者のメモ。本人の発言であり、独自には確認していません。",
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカル音声・オーディオツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — 音声合成、音声認識、音声エージェントを並べて比較。',
          '[Subtitle Editレビュー](/ja/power-local-llm/subtitle-edit-review) — ローカルの音声認識を備えた、無料のオープンソース字幕エディター。',
          '[Buzzレビュー](/ja/power-local-llm/buzz-captions-review) — 3つのデスクトップOSに対応する無料の文字起こしアプリ。',
          '[Whisper.cppレビュー](/ja/power-local-llm/whisper-cpp-review) — 多くのローカルWhisperアプリの基盤となるオープンなエンジン。',
          '[Local LLM Software Directory全体](/ja/directory) — プラットフォームを横断してローカルAIツールを集めた、より広いディレクトリ。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-06',
    dateModified: '2026-11-07',
    next_refresh_due: '2027-05-06',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/sablate-review-hero-zh.webp',
    title: 'Sablate评测：适用于Windows和Mac的字幕与压制工具',
    seoTitle: 'Sablate评测：适用于Windows和Mac的字幕生成工具',
    intro: 'Sablate是一款适用于Windows和Mac的免费增值闭源字幕应用：你拖入视频，据开发者称，它在你自己的电脑上用OpenAI的Whisper模型转写语音，叠加翻译层，让你编辑时间轴，并把带样式的字幕压制进视频。本评测梳理其官网、更新日志和隐私政策记载的内容、这些页面之间互相矛盾之处，以及它与目录中其他字幕和转录工具的对比。',
    metaDescription: 'Sablate评测：适用于Windows和Mac的字幕、翻译与压制工具，据开发者称在你的电脑上运行。提供免费版，Pro一次性$29，未经实测。',
    twitterDescription: 'Sablate评测：适用于Windows和Mac的Whisper字幕工具，据开发者称，在你自己的电脑上翻译并压制进视频。价格、隐私、限制与替代方案。',
    audience: '使用Windows或Mac、希望生成字幕和翻译又不想上传素材的视频创作者、剪辑师和教师——涵盖价格、安装、模型、隐私、限制和替代方案。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Sablate review',
    targetKeywords: [
      'sablate 评测',
      'sablate 字幕',
      '离线字幕生成器',
      '本地 whisper 字幕 windows mac',
      '离线将字幕压制进视频',
      '私密视频转录',
      '无需云端的字幕翻译',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Mac',
      'NVIDIA GPU',
    ],
    leadAnswerBlock: '**Sablate是一款适用于Windows和Mac的闭源字幕应用，据其开发者称，转写、翻译和字幕渲染都在你自己的电脑上完成，不会上传你的视频。** 但更新、许可证检查和开发者称为匿名的使用统计仍会使用网络。 免费版支持最长10分钟的视频，Pro版一次性$29，或每月$5.99。本评测依据开发者公开的官网、更新日志、文档和隐私政策，并非实际上手测试。',
    quickAnswerTop: {
      zh: {
        question: 'Sablate是本地字幕工具吗？',
        answer: '据其开发者称，是：转写用Whisper（faster-whisper），离线翻译用Argos，字幕渲染用ffmpeg，全部在你的Windows电脑或Mac上运行，音频和视频不会上传到开发者的服务器。OpenAI、ElevenLabs、DeepL和Claude等云端引擎是可选项，仅限Pro版，并且需要你自己的API密钥。应用仍会检查更新、每天进行一次Pro许可证检查，并发送开发者称为匿名的使用统计。代码为闭源，PromptQuorum也没有检查网络流量，因此这一说法出自开发者自己。',
        bullets: [
          '拖入视频或音频文件，得到带时间轴的转写文本，叠加翻译层，在时间轴上编辑，然后导出.srt、.vtt、.txt、.ass或压制好字幕的.mp4。',
          '十三种字幕样式，从Hormozi、Karaoke到Cinema，由libass渲染。',
          '四档Whisper质量，从Fast（78 MB）到Best（3.09 GB）；有NVIDIA GPU时自动使用，否则使用CPU。',
          '仅支持Windows 10或更高版本以及macOS 12或更高版本；没有Linux、iPhone或Android版本。',
          '免费版支持最长10分钟的视频；Pro版增加全部Whisper档位、使用自己密钥的云端引擎和无水印导出。',
        ],
        updatedDate: '2026-11-06',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: '获取Sablate', anchor: 'get-it' },
      { label: 'Sablate概览', anchor: 'at-a-glance' },
      { label: 'Sablate是什么', anchor: 'what-is-sablate' },
      { label: '入门步骤', anchor: 'how-to-get-started' },
      { label: '功能', anchor: 'features' },
      { label: '模型与硬件', anchor: 'models-hardware' },
      { label: '隐私、许可与费用', anchor: 'privacy' },
      { label: '来自开发者', anchor: 'from-the-maker' },
      { label: '优势与局限', anchor: 'tradeoffs' },
      { label: 'Sablate与替代方案对比', anchor: 'vs-alternatives' },
      { label: '适合使用Sablate的人', anchor: 'who-should-use' },
      { label: '不适合使用Sablate的人', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
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
            text: 'Sablate是一款适用于Windows和Mac的免费增值字幕应用，据其开发者称，它在你自己的电脑上运行Whisper转写、离线翻译和字幕压制，而不是使用云服务。',
          },
          {
            type: 'plain-terms',
            text: '把它想成桌上的一间字幕工作室：据开发者称，视频留在你的硬盘里，应用负责听音、写出字幕、翻译，并把字幕画到画面上。',
          },
        ],
        items: [
          '本地说法：转写、离线翻译和渲染都在设备上运行；云端引擎是可选项，使用你自己的密钥。',
          '许可与开发者：专有软件，据开发者称由土耳其的独立小型工作室FuumiSoft开发（官网尚未说明；未经独立核实）。',
          '价格：最长10分钟的视频免费，Pro版一次性$29或每月$5.99，一次性许可证提供30天退款。',
          '维护状态：版本1.0.2于2026年10月19日发布，说明项目仍在积极更新，但它直到2026年9月1日才上线。',
          '不足：没有说话人标注，没有Linux或移动版本，也没有找到关闭使用统计的选项。',
        ],
      },
      getItSablate: {
        id: 'get-it',
        title: '获取Sablate',
        content: [
          '**Sablate的安装方式与其他桌面应用相同，无需使用终端。** 从官网下载适合你系统的安装包；Whisper语音模型在首次使用时于应用内下载。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'Windows',
            '获取方式': '[下载Windows版](https://sablate.com/download) — .exe，Windows 10 64位或更高版本，约320 MB（安装后1.3 GB）',
          },
          {
            '平台': 'Mac',
            '获取方式': '[下载Mac版](https://sablate.com/download) — .dmg，macOS 12或更高版本，Apple Silicon和Intel分别提供安装包',
          },
          {
            '平台': '免费方案',
            '获取方式': '[查看方案](https://sablate.com/pricing) — 无需账户，无需信用卡',
          },
          {
            '平台': '发布说明',
            '获取方式': '[更新日志](https://sablate.com/changelog)',
          },
          {
            '平台': '官网',
            '获取方式': '[sablate.com](https://sablate.com)',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[Sablate隐私政策](https://sablate.com/legal/privacy)',
          },
          {
            '平台': '源代码',
            '获取方式': '闭源；没有公开仓库',
          },
        ],
        note: '下载页面只列出Windows和macOS；没有提供Linux、iOS或Android版本。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Sablate概览',
        columns: ['属性', 'Sablate'],
        rows: [
          { '属性': '平台', 'Sablate': 'Windows 10+和macOS 12+' },
          { '属性': '价格', 'Sablate': '免费版；Pro一次性$29或每月$5.99' },
          { '属性': '许可', 'Sablate': '专有，闭源' },
          { '属性': '运行方式', 'Sablate': '在你的电脑上用faster-whisper、Argos和ffmpeg运行；下载、更新和许可证检查需要联网' },
          { '属性': '语言', 'Sablate': '约100种口语语言，自动检测；未说明Argos语言对的数量' },
          { '属性': '说话人标注', 'Sablate': '没有，列为不支持' },
          { '属性': '实时转录', 'Sablate': '未说明；Sablate处理的是文件，而不是实时音频' },
          { '属性': '仅用CPU可用', 'Sablate': '可以，没有NVIDIA GPU时较慢' },
          { '属性': '本地API服务器', 'Sablate': '未说明' },
        ],
        note: '各属性沿用Local LLM Software Directory中语音转文字对比所用的项目。官网未提及，表示未知，而不是不支持。',
      },
      whatIsSablate: {
        id: 'what-is-sablate',
        title: 'Sablate是什么',
        content: [
          '**Sablate是针对硬盘上现有文件的字幕工作流，而不是实时字幕或听写工具。** 你添加视频或音频文件；应用用Whisper转写，让你在其上叠加翻译层，提供时间和文字的编辑器，套用字幕样式并导出结果。',
          '据开发者Furkan Bağcı称，Sablate由土耳其的独立小型软件工作室FuumiSoft开发，该工作室还开发File Arbor和Vidray；官网尚未说明这一点，PromptQuorum也未独立核实。这些页面称它不支持从YouTube下载、配音、克隆声音、自动剪辑或标注说话人。',
          '本评测依据官网、更新日志、文档、隐私政策和条款，没有进行实际上手测试，因此这里不对准确度、速度和稳定性做评级。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '入门步骤',
        content: [
          '**设置包括安装、下载模型和创建任务。** 以下步骤依据官网及其文档。',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '从[下载页面](https://sablate.com/download)下载Windows版的.exe或Mac版的.dmg；免费方案无需账户。',
          },
          {
            title: '添加视频',
            whyItMatters: '拖入.mp4、.mov、.mkv、.webm、.avi、.m4v、.mp3、.wav、.m4a或.flac文件（Pro版还可拖入文件夹），并选择一个Whisper档位。',
          },
          {
            title: '转写与翻译',
            whyItMatters: '语音模型会在你首次使用某个档位时下载。然后添加翻译层：Argos可离线使用，每个语言对需要一个语言包。',
          },
          {
            title: '编辑、设置样式并导出',
            whyItMatters: '在时间轴上调整和拆分字幕条，从13种预设中选择一种，然后导出字幕文件，或导出16:9、9:16或1:1的压制字幕视频。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**功能集中在为短视频和长视频生成私密字幕。** 以下内容均来自官网、文档和更新日志。',
        ],
        items: [
          '**本地转写。** faster-whisper分四档，在Windows上自动使用NVIDIA GPU加速，并可回退到CPU。',
          '**翻译层。** 在转写文本之上添加目标语言；Argos可离线运行，DeepL、OpenAI和Claude在Pro版中使用你自己的密钥。',
          '**字幕编辑器。** 视频、转写文本和样式面板集中在一个窗口，支持时间轴调整、拆分与合并，以及阅读速度提醒。',
          '**字幕样式。** 十三种预设、逐词卡拉OK式扫光效果，Pro版还支持自定义预设。',
          '**导出。** .srt、.vtt和.txt；Pro版还可导出.ass和每种语言一条轨道的软字幕.mkv；所有方案都可导出压制字幕的.mp4。',
          '**批量任务。** Pro版可接受整个视频文件夹，并一键导出所有语言。',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '模型与硬件',
        content: [
          '**应用通过faster-whisper运行Whisper，分四档。** 文档列出Fast（tiny，78 MB）、Balanced（small，486 MB）、Accurate（large-v3-turbo，1.62 GB）和Best（large-v3，3.09 GB）；下载页面给出的范围是75 MB到2.9 GB。据开发者称，两者指的是同一批文件：文档按十进制单位计算，下载页面按二进制单位计算。免费版包含Fast和Balanced，Pro版增加Accurate和Best。',
          '有NVIDIA GPU时会自动使用，其CUDA运行库在首次使用时下载；没有GPU时应用在CPU上运行，在macOS上也使用CPU运行。官网没有给出内存或GPU的最低要求。Windows安装约占用1.3 GB磁盘空间。官网称GPU可使转写速度提高约5到10倍；PromptQuorum没有测量速度或准确度。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私、许可与费用',
        content: [
          '**隐私政策称，桌面应用在本地处理你的媒体，音频和视频文件不会被上传。** 该政策的日期为2026年10月。如果你使用自己的密钥启用云端服务商，音频或文字会按其条款直接从你的电脑发送到该服务商，应用会在那一刻予以提示。',
          '网络在其他方面仍会用到。文档列出了每隔几小时一次的更新检查、Pro版大约每天一次的许可证检查、匿名使用统计，以及一个可选的功能建议表单。统计数据发送到欧盟的PostHog，据政策称包含应用版本、系统、处理器类型、方案以及是否有GPU，但绝不包含音频、视频、转写文本、文件名或密钥。我们阅读的页面没有说明如何关闭统计。代码为闭源，PromptQuorum也没有检查网络流量，因此这些说法出自开发者自己。',
          '这是免费增值的专有产品。免费版支持最长10分钟的视频，每月3个任务，导出内容带有署名行或角标；Pro版一次性$29或每月$5.99，同一时间只能在一台设备上启用。官网以美元标价，没有提及增值税。一次性许可证提供30天退款；月付不予退款。',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: "来自开发者",
        content: [
          "FuumiSoft的Sablate开发者Furkan Bağcı阅读了这篇评测，并写道他对照Sablate的页面核对后，没有发现技术上的错误。他补充了应用的开发方（已在上文注明），并说明文档页和下载页上的模型大小指的是同一批文件，只是分别使用十进制和二进制单位。以下备注是开发者本人的话，并非PromptQuorum的独立评估；PromptQuorum没有运行过这款应用。",
          "“Sablate的初衷，是在素材所在的电脑上完成全部字幕工作：Whisper转写、翻译、编辑和烧录都在一个窗口里完成，无需上传，也没有按分钟计费。这款应用是闭源的，所以我们没有让大家单凭信任去相信“隐私”，而是在文档中列出它发出的每一次对外请求（更新检查、Pro许可检查、匿名使用统计和可选的反馈表单），并在隐私政策中准确列出统计数据包含的内容。云端引擎只提供给自带密钥的用户，每次选用时应用都会明确提示。”",
        ],
        note: "— Furkan Bağcı，FuumiSoft",
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '优势与局限',
        columns: ['优势', '实际使用中的意义', '局限 / 注意事项'],
        rows: [
          {
            '优势': '一切都在你的电脑上',
            '实际使用中的意义': '据开发者称，转写、离线翻译和渲染无需上传，也没有按分钟计费。',
            '局限 / 注意事项': '闭源，因此该说法无法核实；更新、许可证和统计请求仍会使用网络。',
          },
          {
            '优势': '可设置样式的字幕',
            '实际使用中的意义': '十三种预设加压制功能，把转写文本变成成品短视频。',
            '局限 / 注意事项': '免费版导出带有角标或署名行；导出.ass和.mkv需要Pro版。',
          },
          {
            '优势': '一次性价格',
            '实际使用中的意义': '一次性$29即可避免订阅。',
            '局限 / 注意事项': '许可证同一时间只能用于一台设备；月付不予退款。',
          },
          {
            '优势': '约100种语言',
            '实际使用中的意义': '口语语言会被自动检测。',
            '局限 / 注意事项': 'Argos语言包按语言对提供，未说明语言对的数量；没有公布准确度数据。',
          },
          {
            '优势': '四档Whisper',
            '实际使用中的意义': '小模型适合快速出草稿，大模型追求准确度。',
            '局限 / 注意事项': 'Accurate和Best需要Pro版以及数GB的磁盘空间；速度说法未经测试。',
          },
          {
            '优势': '积极开发',
            '实际使用中的意义': '2026年9月1日至10月19日之间发布了三个版本。',
            '局限 / 注意事项': '产品还非常年轻，没有找到独立评测。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Sablate与替代方案对比',
        content: [
          '目录中最接近的字幕和转录工具包括：一款免费开源的字幕编辑器、一款免费开源的转录应用、一款一次性买断的苹果设备应用，以及一款Mac转录应用。',
        ],
        columns: ['应用', '平台', '价格与许可', '定位', '主要区别'],
        rows: [
          {
            '应用': 'Sablate',
            '平台': 'Windows、Mac',
            '价格与许可': '免费版，Pro一次性$29，专有',
            '定位': '带压制的字幕',
            '主要区别': 'Whisper、翻译和带样式的压制集于一个应用；闭源',
          },
          {
            '应用': '[Subtitle Edit](/zh/power-local-llm/subtitle-edit-review)',
            '平台': 'Windows、Mac、Linux',
            '价格与许可': '免费，MIT',
            '定位': '字幕编辑器',
            '主要区别': '开源，支持多种引擎；专为编辑和翻译现有字幕而设计',
          },
          {
            '应用': '[Buzz](/zh/power-local-llm/buzz-captions-review)',
            '平台': 'Mac、Windows、Linux',
            '价格与许可': '免费，MIT',
            '定位': '转录应用',
            '主要区别': '免费且开源；把录音转成字幕和文字稿',
          },
          {
            '应用': '[Aiko](/zh/power-local-llm/aiko-review)',
            '平台': 'iPhone、iPad、Mac',
            '价格与许可': '一次性$24（美国价格），专有',
            '定位': '苹果设备转录应用',
            '主要区别': '仅限苹果设备；没有Windows版本',
          },
          {
            '应用': '[MacWhisper](/zh/power-local-llm/macwhisper-review)',
            '平台': 'macOS',
            '价格与许可': '免费增值，专有',
            '定位': 'Mac转录应用',
            '主要区别': '转录文件、会议录音和实时听写；仅限Mac',
          },
        ],
        note: '第三方应用的平台、价格和功能经常变化。决定之前，请在各项目自己的页面上核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合使用Sablate的人',
        items: [
          '**Windows或Mac上的短视频创作者。** 带样式的压制字幕可以直接从负责转写的同一个应用中输出。',
          '**重视素材隐私的人。** 据开发者称，转写和离线翻译都留在电脑上。',
          '**需要多种语言的教师和剪辑师。** 翻译层可按每种语言导出一条轨道。',
          '**偏好一次性付费的买家。** 除订阅外还有$29的一次性Pro许可证。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '不适合使用Sablate的人',
        items: [
          '**Linux、iPhone和Android用户。** 只提供Windows和Mac版本。',
          '**需要说话人标注或实时字幕的人。** 开发者将说话人标注列为不支持，并描述的是基于文件的工作流程；我们阅读的页面没有提到实时字幕。',
          '**需要可审计软件的人。** 代码为闭源，隐私说法无法检验。',
          '**想要完全免费软件的人。** 免费版仅限10分钟的视频；Subtitle Edit和Buzz免费且开源。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Sablate可以离线使用吗？',
            a: '开发者称可以，前提是语音模型和所需的Argos语言包已下载。更新、Pro许可证检查和使用统计需要联网，但据文档称，没有它们应用也能继续工作。PromptQuorum没有在离线状态下测试。',
          },
          {
            q: '我的视频会被发送到云端吗？',
            a: '隐私政策称，媒体不会上传到开发者，除非你使用自己的密钥启用云端引擎。代码为闭源，PromptQuorum也没有检查网络流量。',
          },
          {
            q: '它支持哪些文件格式？',
            a: '据文档称，支持视频和音频，包括.mp4、.mov、.mkv、.webm、.avi、.m4v、.mp3、.wav、.m4a和.flac。',
          },
          {
            q: '付费前可以先试用吗？',
            a: '可以：免费方案无需账户或信用卡，但视频长度限制为10分钟，每月最多3个任务。没有提到单独的试用期。',
          },
          {
            q: "Sablate是谁开发的？",
            a: "据开发者Furkan Bağcı称，Sablate由土耳其的独立小型软件工作室FuumiSoft开发，该工作室还开发File Arbor和Vidray。Sablate官网尚未明确说明这一点，PromptQuorum也未独立核实。",
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '如果你想把Windows电脑或Mac上的视频变成经过翻译、带样式的压制字幕，并且据开发者称整个过程都留在你自己的电脑上，同时你接受闭源软件，Sablate是个合适的选择。它有可用的免费版、一次性Pro价格和较新的版本。',
          '需要注意的是适用范围和可验证性：没有Linux或移动版本、没有说话人标注、代码闭源、开发者（土耳其的FuumiSoft）只出现在开发者的来信中而非官网、PromptQuorum无法核实隐私说法，而且产品只上线了两个月左右。购买前请先用免费方案处理一小段视频。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Sablate官网](https://sablate.com) — 功能和价格。',
          '[下载页面](https://sablate.com/download) — 平台和系统要求。',
          '[文档](https://sablate.com/docs) — 模型、格式、网络请求和常见问题。',
          '[更新日志](https://sablate.com/changelog) — 版本历史；版本1.0.2的日期为2026年10月19日。',
          '[隐私政策](https://sablate.com/legal/privacy) — 数据处理，日期为2026年10月。',
          '[使用条款](https://sablate.com/legal/terms) — 许可、退款和设备条款。',
          "开发者来信（Furkan Bağcı，2026年11月7日）——开发方信息、模型大小单位及开发者备注；均为其本人陈述，未经独立核实。",
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地语音和音频工具对比](/zh/power-local-llm/local-llm-voice-audio-compared) — 文字转语音、语音转文字和语音代理并排比较。',
          '[Subtitle Edit评测](/zh/power-local-llm/subtitle-edit-review) — 带本地语音转文字功能的免费开源字幕编辑器。',
          '[Buzz评测](/zh/power-local-llm/buzz-captions-review) — 支持三种桌面系统的免费转录应用。',
          '[Whisper.cpp评测](/zh/power-local-llm/whisper-cpp-review) — 许多本地Whisper应用背后的开放引擎。',
          '[完整的Local LLM Software Directory](/zh/directory) — 涵盖多个平台的本地AI工具的更广泛目录。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-06',
    dateModified: '2026-11-07',
    next_refresh_due: '2027-05-06',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/sablate-review-hero-pt.webp',
    title: 'Análise do Sablate: legendas e gravação no vídeo para Windows e Mac',
    seoTitle: 'Análise do Sablate: gerador de legendas para PC e Mac',
    intro: 'O Sablate é um app de legendas freemium e de código fechado para Windows e Mac: você solta um vídeo, ele transcreve, segundo o fabricante, a fala com o modelo Whisper da OpenAI no seu próprio computador, adiciona camadas de tradução, permite editar a sincronia e grava legendas estilizadas no vídeo. Esta análise resume o que o site, o changelog e a política de privacidade do fabricante documentam, onde essas páginas se contradizem e como o Sablate se compara a outras ferramentas de legendas e transcrição do diretório.',
    metaDescription: 'Análise do Sablate: legendas, tradução e gravação no vídeo para Windows e Mac, locais segundo o fabricante. Plano grátis, Pro $29 únicos. Não testado.',
    twitterDescription: 'Análise do Sablate: legendas com Whisper para Windows e Mac, traduzidas e gravadas no vídeo no seu próprio computador, segundo o fabricante. Preço, privacidade, limites e alternativas.',
    audience: 'Criadores de vídeo, editores e professores no Windows ou Mac que querem legendas e traduções sem enviar suas filmagens — cobre preço, instalação, modelos, privacidade, limites e alternativas.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Sablate review',
    targetKeywords: [
      'análise sablate',
      'legendas sablate',
      'gerador de legendas offline',
      'legendas com whisper local windows mac',
      'gravar legendas no vídeo offline',
      'transcrição de vídeo privada',
      'tradução de legendas sem nuvem',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Mac',
      'NVIDIA GPU',
    ],
    leadAnswerBlock: '**O Sablate é um app de legendas de código fechado para Windows e Mac que, segundo o fabricante, transcreve, traduz e renderiza legendas no seu próprio computador sem enviar o seu vídeo.** Ainda assim, usa a rede para atualizações, verificações de licença e estatísticas de uso que o fabricante descreve como anônimas. Um plano grátis cobre vídeos de até 10 minutos, e o Pro custa $29 únicos ou $5.99 por mês. Esta análise se baseia no site público, no changelog, na documentação e na política de privacidade do fabricante, não em um teste prático.',
    quickAnswerTop: {
      pt: {
        question: 'O Sablate é uma ferramenta de legendas local?',
        answer: 'Segundo o fabricante, sim: a transcrição roda com o Whisper (faster-whisper), a tradução offline com o Argos e a renderização das legendas com o ffmpeg, tudo no seu PC com Windows ou Mac, e áudio e vídeo não são enviados ao fabricante. Mecanismos na nuvem como OpenAI, ElevenLabs, DeepL e Claude são opcionais, exclusivos do Pro e exigem a sua própria chave de API. O app ainda faz verificações de atualização, uma verificação diária da licença Pro e chamadas de estatísticas de uso que o fabricante descreve como anônimas. O código é fechado e o PromptQuorum não inspecionou o tráfego de rede, então a afirmação é do próprio fabricante.',
        bullets: [
          'Solte um arquivo de vídeo ou áudio, receba uma transcrição com marcação de tempo, adicione camadas de tradução, edite na linha do tempo e exporte .srt, .vtt, .txt, .ass ou um .mp4 com as legendas gravadas.',
          'Treze estilos de legenda, de Hormozi e Karaoke a Cinema, renderizados com a libass.',
          'Quatro níveis de qualidade do Whisper, do Fast (78 MB) ao Best (3.09 GB); uma GPU NVIDIA é usada automaticamente, senão a CPU.',
          'Apenas Windows 10 ou mais recente e macOS 12 ou mais recente; sem versão para Linux, iPhone ou Android.',
          'O plano grátis cobre vídeos de até 10 minutos; o Pro adiciona todos os níveis do Whisper, mecanismos na nuvem com a sua chave e exportações sem marca.',
        ],
        updatedDate: '2026-11-06',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Obter o Sablate', anchor: 'get-it' },
      { label: 'Sablate em resumo', anchor: 'at-a-glance' },
      { label: 'O que é o Sablate', anchor: 'what-is-sablate' },
      { label: 'Primeiros passos', anchor: 'how-to-get-started' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Modelos e hardware', anchor: 'models-hardware' },
      { label: 'Privacidade, licença e custo', anchor: 'privacy' },
      { label: 'A palavra do desenvolvedor', anchor: 'from-the-maker' },
      { label: 'Prós e contras', anchor: 'tradeoffs' },
      { label: 'Sablate e as alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem o Sablate serve', anchor: 'who-should-use' },
      { label: 'Para quem o Sablate não serve', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leitura relacionada', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Sablate é um app de legendas freemium para Windows e Mac que, segundo o fabricante, executa a transcrição com Whisper, a tradução offline e a gravação das legendas no vídeo no seu próprio computador, em vez de um serviço na nuvem.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em um estúdio de legendas na sua mesa: segundo o fabricante, o vídeo fica no seu disco enquanto o app escuta, escreve as legendas, traduz e pinta tudo sobre a imagem.',
          },
        ],
        items: [
          'Afirmação de uso local: transcrição, tradução offline e renderização rodam no aparelho; os mecanismos na nuvem são opcionais e usam a sua própria chave.',
          'Licença e fabricante: proprietário, feito pela FuumiSoft, um pequeno estúdio independente na Turquia, segundo o desenvolvedor (o site ainda não diz isso; não verificado de forma independente).',
          'Preço: grátis para vídeos de até 10 minutos, Pro por $29 únicos ou $5.99 por mês, com reembolso de 30 dias na licença única.',
          'Manutenção: a versão 1.0.2 saiu em 19 de outubro de 2026, então o projeto recebe atualizações ativamente, mas foi lançado apenas em 1º de setembro de 2026.',
          'Lacunas: sem identificação de falantes, sem versão para Linux ou celular, e não encontramos opção para desativar as estatísticas de uso.',
        ],
      },
      getItSablate: {
        id: 'get-it',
        title: 'Obter o Sablate',
        content: [
          '**O Sablate é instalado como qualquer app de desktop, sem precisar de terminal.** Baixe o instalador do seu sistema no site oficial; os modelos de fala do Whisper são baixados dentro do app no primeiro uso.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            Plataforma: 'Windows',
            'Onde obter': '[Baixar para Windows](https://sablate.com/download) — .exe, Windows 10 de 64 bits ou mais recente, cerca de 320 MB (1.3 GB instalado)',
          },
          {
            Plataforma: 'Mac',
            'Onde obter': '[Baixar para Mac](https://sablate.com/download) — .dmg, macOS 12 ou mais recente, versões separadas para Apple Silicon e Intel',
          },
          {
            Plataforma: 'Plano grátis',
            'Onde obter': '[Ver os planos](https://sablate.com/pricing) — sem conta e sem cartão de crédito',
          },
          {
            Plataforma: 'Notas de versão',
            'Onde obter': '[Changelog](https://sablate.com/changelog)',
          },
          {
            Plataforma: 'Site',
            'Onde obter': '[sablate.com](https://sablate.com)',
          },
          {
            Plataforma: 'Política de privacidade',
            'Onde obter': '[Política de privacidade do Sablate](https://sablate.com/legal/privacy)',
          },
          {
            Plataforma: 'Código-fonte',
            'Onde obter': 'Código fechado; sem repositório público',
          },
        ],
        note: 'A página de download lista apenas Windows e macOS; não há versão para Linux, iOS ou Android.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Sablate em resumo',
        columns: ['Atributo', 'Sablate'],
        rows: [
          { Atributo: 'Plataforma', Sablate: 'Windows 10+ e macOS 12+' },
          { Atributo: 'Preço', Sablate: 'Plano grátis; Pro $29 únicos ou $5.99/mês' },
          { Atributo: 'Licença', Sablate: 'Proprietária, código fechado' },
          { Atributo: 'Execução', Sablate: 'No seu computador com faster-whisper, Argos e ffmpeg; internet para downloads, atualizações e verificações de licença' },
          { Atributo: 'Idiomas', Sablate: 'Cerca de 100 idiomas falados com detecção automática; número de pares do Argos não informado' },
          { Atributo: 'Identificação de falantes', Sablate: 'Não, listada como não suportada' },
          { Atributo: 'Transcrição em tempo real', Sablate: 'Não informado; o Sablate processa arquivos, não áudio ao vivo' },
          { Atributo: 'Roda só na CPU', Sablate: 'Sim, mais lento sem uma GPU NVIDIA' },
          { Atributo: 'Servidor de API local', Sablate: 'Não informado' },
        ],
        note: 'Os atributos seguem a comparação de voz para texto usada no Diretório de Software de LLM Local. Uma informação ausente no site significa desconhecido, não sem suporte.',
      },
      whatIsSablate: {
        id: 'what-is-sablate',
        title: 'O que é o Sablate',
        content: [
          '**O Sablate é um fluxo de trabalho de legendas para arquivos que já estão no seu disco, não uma ferramenta de legendas ao vivo nem de ditado.** Você adiciona um arquivo de vídeo ou áudio; o app o transcreve com o Whisper, permite adicionar camadas de tradução por cima, oferece um editor para sincronia e texto, aplica um estilo de legenda e exporta o resultado.',
          'Segundo o desenvolvedor, Furkan Bağcı, o Sablate é feito pela FuumiSoft, um pequeno estúdio de software independente na Turquia que também faz o File Arbor e o Vidray; o site ainda não informa isso, e o PromptQuorum não verificou de forma independente. As páginas dizem que o app não baixa do YouTube, não faz dublagem, não clona vozes, não corta clipes automaticamente nem identifica falantes.',
          'Esta análise se baseia no site, no changelog, na documentação, na política de privacidade e nos termos. Não houve teste prático, então precisão, velocidade e estabilidade não são avaliadas aqui.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeiros passos',
        content: [
          '**A configuração é uma instalação, o download de um modelo e um trabalho.** Os passos seguem o site e a documentação.',
        ],
        numberedItems: [
          {
            title: 'Instale o app',
            whyItMatters: 'Baixe o .exe para Windows ou o .dmg para Mac na [página de download](https://sablate.com/download); o plano grátis não exige conta.',
          },
          {
            title: 'Adicione um vídeo',
            whyItMatters: 'Solte arquivos .mp4, .mov, .mkv, .webm, .avi, .m4v, .mp3, .wav, .m4a ou .flac, ou uma pasta com eles no Pro, e escolha um nível do Whisper.',
          },
          {
            title: 'Transcreva e traduza',
            whyItMatters: 'O modelo de fala é baixado na primeira vez que você usa um nível. Depois, adicione camadas de tradução: o Argos funciona offline, com um pacote de idioma por par.',
          },
          {
            title: 'Edite, estilize e exporte',
            whyItMatters: 'Ajuste a sincronia e divida as falas na linha do tempo, escolha uma das 13 predefinições e exporte arquivos de legenda ou um vídeo com as legendas gravadas em 16:9, 9:16 ou 1:1.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O conjunto de recursos gira em torno de legendas privadas para vídeos curtos e longos.** Tudo abaixo vem do site, da documentação e do changelog.',
        ],
        items: [
          '**Transcrição local.** faster-whisper em quatro níveis, com aceleração automática por GPU NVIDIA no Windows e alternativa na CPU.',
          '**Camadas de tradução.** Adicione um idioma de destino sobre a transcrição; o Argos roda offline, e DeepL, OpenAI e Claude funcionam com a sua própria chave no Pro.',
          '**Editor de legendas.** Vídeo, transcrição e painel de estilo em uma única janela, com ajuste de sincronia na linha do tempo, divisão e união de falas e um aviso de velocidade de leitura.',
          '**Estilos de legenda.** Treze predefinições, uma varredura de karaokê palavra por palavra e, no Pro, predefinições personalizadas.',
          '**Exportação.** .srt, .vtt e .txt; no Pro também .ass e um .mkv com legendas embutidas e uma faixa por idioma; .mp4 com legendas gravadas em todos os planos.',
          '**Trabalhos em lote.** O Pro aceita uma pasta de vídeos e exporta todos os idiomas com um clique.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelos e hardware',
        content: [
          '**O app executa o Whisper pelo faster-whisper, com quatro níveis.** A documentação cita Fast (tiny, 78 MB), Balanced (small, 486 MB), Accurate (large-v3-turbo, 1.62 GB) e Best (large-v3, 3.09 GB); a página de download indica uma faixa de 75 MB a 2.9 GB. Segundo o desenvolvedor, ambas descrevem os mesmos arquivos: a documentação conta em unidades decimais e a página de download em unidades binárias. O plano grátis inclui Fast e Balanced, e o Pro adiciona Accurate e Best.',
          'Uma GPU NVIDIA é usada automaticamente e o runtime CUDA dela é baixado no primeiro uso; sem uma, o app roda na CPU, e no macOS ele roda na CPU. O site não informa mínimo de RAM nem de GPU. A instalação no Windows ocupa cerca de 1.3 GB de disco. O site afirma que uma GPU deixa a transcrição de 5 a 10 vezes mais rápida; o PromptQuorum não mediu velocidade nem precisão.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade, licença e custo',
        content: [
          '**A política de privacidade diz que o aplicativo de desktop processa a sua mídia localmente e que arquivos de áudio e vídeo nunca são enviados.** A política é datada de outubro de 2026. Se você ativar um provedor na nuvem com a sua própria chave, o áudio ou o texto vai direto da sua máquina para esse provedor, sob os termos dele, e o app avisa isso naquele momento.',
          'A rede ainda é usada em outros pontos. A documentação lista uma verificação de atualização a cada poucas horas, uma verificação de licença cerca de uma vez por dia no Pro, estatísticas de uso anônimas e um formulário opcional de sugestão de recursos. As estatísticas vão para o PostHog na UE e, segundo a política, incluem a versão do app, o sistema, o tipo de processador, o plano e se existe uma GPU, mas nunca áudio, vídeo, transcrições, nomes de arquivo nem chaves. As páginas que lemos não descrevem nenhuma opção para desativar as estatísticas. O código é fechado e o PromptQuorum não examinou o tráfego de rede, então essas afirmações são do próprio fabricante.',
          'É um produto freemium e proprietário. O plano grátis cobre vídeos de até 10 minutos e 3 trabalhos por mês, com uma linha de crédito ou marca no canto das exportações; o Pro custa $29 únicos ou $5.99 por mês e fica ativo em um dispositivo por vez. O site lista os preços em dólares americanos e não menciona impostos. A licença única tem reembolso de 30 dias; pagamentos mensais não são reembolsados.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: "A palavra do desenvolvedor",
        content: [
          "Furkan Bağcı, desenvolvedor do Sablate na FuumiSoft, leu esta análise e escreveu que a comparou com as páginas do Sablate e não encontrou nada tecnicamente errado. Ele acrescentou quem faz o app (agora indicado acima) e explicou que os tamanhos de modelo na página de documentação e na de download descrevem os mesmos arquivos, em unidades decimais e binárias. A nota abaixo são palavras do próprio desenvolvedor, não uma avaliação independente do PromptQuorum; o PromptQuorum não executou o app.",
          "“O Sablate existe para fazer todo o trabalho de legendas no computador onde o material já está: transcrição com Whisper, tradução, edição e gravação no vídeo em uma única janela, sem upload e sem cobrança por minuto. O app é de código fechado; por isso, em vez de pedir que as pessoas acreditem em “privado” por confiança, a documentação lista todas as chamadas de saída que ele faz (a verificação de atualização, a verificação da licença Pro, as estatísticas de uso anônimas e o formulário opcional de feedback), e a política de privacidade lista exatamente o que as estatísticas contêm. Os mecanismos na nuvem existem só para quem traz a própria chave, e o app avisa isso toda vez que um é escolhido.”",
        ],
        note: "— Furkan Bağcı, FuumiSoft",
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras',
        columns: ['Vantagem', 'O que significa na prática', 'Limitação / ressalva'],
        rows: [
          {
            Vantagem: 'Tudo no seu computador',
            'O que significa na prática': 'Segundo o fabricante, transcrição, tradução offline e renderização não exigem envio nem taxa por minuto.',
            'Limitação / ressalva': 'Código fechado, então a afirmação não pode ser verificada; as chamadas de atualização, licença e estatísticas ainda usam a rede.',
          },
          {
            Vantagem: 'Legendas que você pode estilizar',
            'O que significa na prática': 'Treze predefinições e a gravação no vídeo transformam uma transcrição em um vídeo curto finalizado.',
            'Limitação / ressalva': 'As exportações grátis levam uma marca no canto ou uma linha de crédito; a exportação em .ass e .mkv exige o Pro.',
          },
          {
            Vantagem: 'Preço único',
            'O que significa na prática': '$29 únicos evitam uma assinatura.',
            'Limitação / ressalva': 'A licença cobre um dispositivo por vez; pagamentos mensais não são reembolsados.',
          },
          {
            Vantagem: 'Cerca de 100 idiomas',
            'O que significa na prática': 'Os idiomas falados são detectados automaticamente.',
            'Limitação / ressalva': 'Os pacotes de idioma do Argos são por par e nenhum número de pares é informado; não há números de precisão publicados.',
          },
          {
            Vantagem: 'Quatro níveis do Whisper',
            'O que significa na prática': 'Um modelo pequeno para rascunhos rápidos, maiores para mais precisão.',
            'Limitação / ressalva': 'Accurate e Best exigem o Pro e gigabytes de disco; as afirmações de velocidade não foram testadas.',
          },
          {
            Vantagem: 'Desenvolvimento ativo',
            'O que significa na prática': 'Três versões entre 1º de setembro e 19 de outubro de 2026.',
            'Limitação / ressalva': 'Um produto muito novo, sem análises independentes encontradas.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Sablate e as alternativas',
        content: [
          'Estas são as ferramentas de legendas e transcrição mais próximas do diretório: um editor de legendas gratuito e de código aberto, um app de transcrição gratuito e de código aberto, um app da Apple de compra única e um app de transcrição para Mac.',
        ],
        columns: ['App', 'Plataformas', 'Preço e licença', 'Função', 'Diferença principal'],
        rows: [
          {
            App: 'Sablate',
            Plataformas: 'Windows, Mac',
            'Preço e licença': 'Plano grátis, Pro $29 únicos, proprietário',
            Função: 'Legendas com gravação no vídeo',
            'Diferença principal': 'Whisper, tradução e gravação estilizada em um único app; código fechado',
          },
          {
            App: '[Subtitle Edit](/pt/power-local-llm/subtitle-edit-review)',
            Plataformas: 'Windows, Mac, Linux',
            'Preço e licença': 'Grátis, MIT',
            Função: 'Editor de legendas',
            'Diferença principal': 'Código aberto com muitos mecanismos; feito para editar e traduzir legendas existentes',
          },
          {
            App: '[Buzz](/pt/power-local-llm/buzz-captions-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Preço e licença': 'Grátis, MIT',
            Função: 'App de transcrição',
            'Diferença principal': 'Gratuito e de código aberto; transforma gravações em legendas e transcrições',
          },
          {
            App: '[Aiko](/pt/power-local-llm/aiko-review)',
            Plataformas: 'iPhone, iPad, Mac',
            'Preço e licença': '$24 únicos (preço nos EUA), proprietário',
            Função: 'App de transcrição para Apple',
            'Diferença principal': 'Apenas em dispositivos Apple; sem versão para Windows',
          },
          {
            App: '[MacWhisper](/pt/power-local-llm/macwhisper-review)',
            Plataformas: 'macOS',
            'Preço e licença': 'Freemium, proprietário',
            Função: 'App de transcrição para Mac',
            'Diferença principal': 'Transcreve arquivos, gravações de reuniões e ditado ao vivo; só Mac',
          },
        ],
        note: 'Plataformas, preços e recursos de apps de terceiros mudam com frequência. Confira os dados atuais na página de cada projeto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o Sablate serve',
        items: [
          '**Criadores de vídeos curtos no Windows ou Mac.** As legendas estilizadas e gravadas no vídeo saem do mesmo app que transcreve.',
          '**Quem mantém as filmagens privadas.** A transcrição e a tradução offline ficam no computador, segundo o fabricante.',
          '**Professores e editores que precisam de vários idiomas.** As camadas de tradução exportam uma faixa por idioma.',
          '**Quem prefere pagar uma vez.** Existe uma licença Pro única de $29 ao lado da assinatura.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o Sablate não serve',
        items: [
          '**Usuários de Linux, iPhone e Android.** Só há versões para Windows e Mac.',
          '**Quem precisa de identificação de falantes ou legendas ao vivo.** O fabricante lista a identificação de falantes como não suportada e descreve um fluxo baseado em arquivos; as páginas que lemos não mencionam legendas ao vivo.',
          '**Quem precisa de software auditável.** O código é fechado e as afirmações de privacidade não podem ser inspecionadas.',
          '**Quem quer software totalmente gratuito.** O plano grátis se limita a vídeos de 10 minutos; Subtitle Edit e Buzz são gratuitos e de código aberto.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Sablate funciona offline?',
            a: 'O fabricante diz que sim, depois que o modelo de fala e os pacotes de idioma do Argos forem baixados. Atualizações, verificações da licença Pro e estatísticas de uso precisam de conexão mas, segundo a documentação, o app continua funcionando sem elas. O PromptQuorum não o testou offline.',
          },
          {
            q: 'Meu vídeo é enviado para a nuvem?',
            a: 'A política de privacidade diz que a mídia nunca é enviada ao fabricante, exceto quando você ativa um mecanismo na nuvem com a sua própria chave. O código é fechado e o PromptQuorum não inspecionou o tráfego de rede.',
          },
          {
            q: 'Quais formatos de arquivo ele aceita?',
            a: 'Vídeo e áudio, incluindo .mp4, .mov, .mkv, .webm, .avi, .m4v, .mp3, .wav, .m4a e .flac, segundo a documentação.',
          },
          {
            q: 'Posso experimentar antes de pagar?',
            a: 'Sim: o plano grátis não exige conta nem cartão de crédito, mas limita o vídeo a 10 minutos e os trabalhos a 3 por mês. Nenhum teste separado é mencionado.',
          },
          {
            q: "Quem faz o Sablate?",
            a: "Segundo seu desenvolvedor, Furkan Bağcı, o Sablate é feito pela FuumiSoft, um pequeno estúdio de software independente na Turquia que também faz o File Arbor e o Vidray. O site do Sablate ainda não informa isso com clareza, e o PromptQuorum não verificou de forma independente.",
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O Sablate serve bem se você quer transformar vídeos de um PC com Windows ou Mac em legendas traduzidas, estilizadas e gravadas no vídeo em que, segundo o fabricante, o trabalho fica no seu próprio computador, e aceita software de código fechado. Ele tem um plano grátis utilizável, um preço Pro único e uma versão recente.',
          'As ressalvas são o alcance e a verificabilidade: sem versão para Linux ou celular, sem identificação de falantes, código fechado, um fabricante (FuumiSoft, Turquia) que só a mensagem do desenvolvedor cita, não o site, afirmações de privacidade que o PromptQuorum não pôde verificar e um produto com apenas alguns meses de vida. Experimente o plano grátis em um clipe curto antes de comprar.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Sablate](https://sablate.com) — recursos e preços.',
          '[Página de download](https://sablate.com/download) — plataformas e requisitos do sistema.',
          '[Documentação](https://sablate.com/docs) — modelos, formatos, chamadas de rede e FAQ.',
          '[Changelog](https://sablate.com/changelog) — histórico de versões; versão 1.0.2 de 19 de outubro de 2026.',
          '[Política de privacidade](https://sablate.com/legal/privacy) — tratamento de dados, datada de outubro de 2026.',
          '[Termos de uso](https://sablate.com/legal/terms) — licença, reembolso e termos de dispositivos.',
          "Mensagem do desenvolvedor (Furkan Bağcı, 7 de novembro de 2026) — dados do fabricante, unidades dos tamanhos de modelo e nota do desenvolvedor; são declarações dele, não verificadas de forma independente.",
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Ferramentas locais de voz e fala comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — texto para voz, voz para texto e agentes de voz lado a lado.',
          '[Análise do Subtitle Edit](/pt/power-local-llm/subtitle-edit-review) — um editor de legendas gratuito e de código aberto com voz para texto local.',
          '[Análise do Buzz](/pt/power-local-llm/buzz-captions-review) — um app de transcrição gratuito para três sistemas de desktop.',
          '[Análise do Whisper.cpp](/pt/power-local-llm/whisper-cpp-review) — o motor aberto por trás de muitos apps de Whisper local.',
          '[O diretório completo de software de LLM local](/pt/directory) — um diretório mais amplo de ferramentas de IA local em várias plataformas.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-06',
    dateModified: '2026-11-07',
    next_refresh_due: '2027-05-06',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/sablate-review-hero-ar.webp',
    title: 'مراجعة Sablate: ترجمات نصية ودمجها في الفيديو لأجهزة Windows وMac',
    seoTitle: 'مراجعة Sablate: مولّد ترجمات نصية لأجهزة Windows وMac',
    intro: 'Sablate تطبيق ترجمات نصية مجاني جزئيًا ومغلق المصدر لأجهزة Windows وMac: تضع فيديو فيه، فيحوّل، بحسب مطوّره، الكلام إلى نص بنموذج Whisper من OpenAI على حاسوبك، ويضيف طبقات ترجمة، ويتيح لك تعديل التوقيت، ثم يدمج ترجمات منسّقة الشكل في الفيديو. تلخّص هذه المراجعة ما يوثّقه موقع المطوّر وسجل التغييرات وسياسة الخصوصية، وأين تتعارض هذه الصفحات، وكيف يقارن Sablate بأدوات الترجمة النصية والتفريغ الأخرى في الدليل.',
    metaDescription: 'مراجعة Sablate: ترجمات نصية وترجمة ودمج في الفيديو لأجهزة Windows وMac تعمل على حاسوبك بحسب مطوّرها. خطة مجانية وPro بسعر $29 لمرة واحدة. لم يُختبر.',
    twitterDescription: 'مراجعة Sablate: ترجمات Whisper لأجهزة Windows وMac، تُترجم وتُدمج في الفيديو على حاسوبك، بحسب مطوّره. السعر والخصوصية والحدود والبدائل.',
    audience: 'صنّاع الفيديو والمحررون والمعلمون على Windows أو Mac الذين يريدون ترجمات نصية وترجمات لغوية دون رفع لقطاتهم — يغطي السعر والتثبيت والنماذج والخصوصية والحدود والبدائل.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Sablate review',
    targetKeywords: [
      'مراجعة sablate',
      'ترجمات sablate',
      'مولد ترجمات نصية دون اتصال',
      'ترجمات whisper محلية windows mac',
      'دمج الترجمة في الفيديو دون اتصال',
      'تفريغ فيديو بخصوصية',
      'ترجمة الترجمات النصية دون سحابة',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Mac',
      'NVIDIA GPU',
    ],
    leadAnswerBlock: '**Sablate تطبيق ترجمات نصية مغلق المصدر لأجهزة Windows وMac يحوّل الكلام إلى نص ويترجمه ويعرض الترجمات على حاسوبك، بحسب مطوّره، دون رفع الفيديو.** ومع ذلك يستخدم الشبكة للتحديثات وفحص الترخيص وإحصاءات استخدام يصفها المطوّر بأنها مجهولة. تغطي الخطة المجانية مقاطع حتى 10 دقائق، وتكلّف Pro مبلغ $29 لمرة واحدة أو $5.99 شهريًا. تعتمد هذه المراجعة على الموقع العام للمطوّر وسجل التغييرات والوثائق وسياسة الخصوصية، وليس على اختبار عملي.',
    quickAnswerTop: {
      ar: {
        question: 'هل Sablate أداة ترجمات نصية محلية؟',
        answer: 'بحسب مطوّره نعم: يعمل التفريغ بنموذج Whisper (faster-whisper)، والترجمة دون اتصال بـ Argos، وعرض الترجمات بـ ffmpeg، كل ذلك على جهاز Windows أو Mac لديك، ولا يُرفع الصوت ولا الفيديو إلى المطوّر. أما المحركات السحابية مثل OpenAI وElevenLabs وDeepL وClaude فاختيارية، وخاصة بخطة Pro، وتحتاج مفتاح API خاصًا بك. ومع ذلك يجري التطبيق فحوص تحديث وفحص ترخيص يوميًا لخطة Pro واتصالات إحصاءات استخدام يصفها المطوّر بأنها مجهولة. الشيفرة مغلقة ولم تفحص PromptQuorum حركة الشبكة، لذا فالادعاء من المطوّر نفسه.',
        bullets: [
          'ضع ملف فيديو أو صوت، واحصل على نص مؤقّت التوقيت، وأضف طبقات ترجمة، وعدّل في خط زمني، ثم صدّر .srt أو .vtt أو .txt أو .ass أو ملف .mp4 مدمجة فيه الترجمات.',
          'ثلاثة عشر نمطًا للترجمات، من Hormozi وKaraoke إلى Cinema، تُعرض بمكتبة libass.',
          'أربع فئات جودة لنموذج Whisper من Fast (78 MB) إلى Best (3.09 GB)؛ تُستخدم بطاقة NVIDIA تلقائيًا، وإلا فالمعالج المركزي.',
          'Windows 10 أو أحدث وmacOS 12 أو أحدث فقط؛ لا نسخة لنظام Linux أو iPhone أو Android.',
          'تغطي الخطة المجانية مقاطع حتى 10 دقائق؛ وتضيف Pro كل فئات Whisper ومحركات سحابية بمفتاحك الخاص وتصديرًا دون علامة.',
        ],
        updatedDate: '2026-11-06',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'الحصول على Sablate', anchor: 'get-it' },
      { label: 'Sablate في لمحة', anchor: 'at-a-glance' },
      { label: 'ما هو Sablate', anchor: 'what-is-sablate' },
      { label: 'البدء', anchor: 'how-to-get-started' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'النماذج والعتاد', anchor: 'models-hardware' },
      { label: 'الخصوصية والترخيص والتكلفة', anchor: 'privacy' },
      { label: 'من مطوّر التطبيق', anchor: 'from-the-maker' },
      { label: 'المزايا والقيود', anchor: 'tradeoffs' },
      { label: 'Sablate مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'لمن يناسب Sablate', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب Sablate', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
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
            text: 'Sablate تطبيق ترجمات نصية مجاني جزئيًا لأجهزة Windows وMac يشغّل، بحسب مطوّره، تفريغ Whisper والترجمة دون اتصال ودمج الترجمات في الفيديو على حاسوبك بدل خدمة سحابية.',
          },
          {
            type: 'plain-terms',
            text: 'فكّر فيه كاستوديو ترجمات على مكتبك: بحسب مطوّره يبقى الفيديو على قرصك بينما يستمع التطبيق ويكتب الترجمات ويترجمها ويرسمها على الصورة.',
          },
        ],
        items: [
          'الادعاء المحلي: يعمل التفريغ والترجمة دون اتصال والعرض على الجهاز؛ والمحركات السحابية اختيارية وتستخدم مفتاحك الخاص.',
          'الترخيص والمطوّر: مملوك، وتصنعه FuumiSoft، وهي استوديو مستقل صغير في تركيا، بحسب المطوّر (لا يذكر الموقع ذلك بعد؛ ولم نتحقق منه بشكل مستقل).',
          'السعر: مجاني للمقاطع حتى 10 دقائق، وPro بسعر $29 لمرة واحدة أو $5.99 شهريًا، مع استرداد خلال 30 يومًا على الترخيص لمرة واحدة.',
          'الصيانة: صدر الإصدار 1.0.2 في 19 أكتوبر 2026، فالمشروع يُحدَّث بنشاط، لكنه أُطلق في 1 سبتمبر 2026 فقط.',
          'الثغرات: لا تمييز للمتحدثين، ولا نسخة لنظام Linux أو للجوال، ولم نجد خيارًا لإيقاف إحصاءات الاستخدام.',
        ],
      },
      getItSablate: {
        id: 'get-it',
        title: 'الحصول على Sablate',
        content: [
          '**يُثبَّت Sablate مثل أي تطبيق مكتبي، ولا حاجة إلى الطرفية.** نزّل المثبّت المناسب لنظامك من الموقع الرسمي؛ وتُجلب نماذج الكلام Whisper من داخل التطبيق عند أول استخدام.',
        ],
        columns: ['المنصة', 'مصدر الحصول'],
        rows: [
          {
            'المنصة': 'Windows',
            'مصدر الحصول': '[التنزيل لـ Windows](https://sablate.com/download) — ملف .exe، Windows 10 بنظام 64 بت أو أحدث، نحو 320 MB (و1.3 GB بعد التثبيت)',
          },
          {
            'المنصة': 'Mac',
            'مصدر الحصول': '[التنزيل لـ Mac](https://sablate.com/download) — ملف .dmg، macOS 12 أو أحدث، مع نسختين منفصلتين لـ Apple Silicon وIntel',
          },
          {
            'المنصة': 'الخطة المجانية',
            'مصدر الحصول': '[اطّلع على الخطط](https://sablate.com/pricing) — دون حساب ودون بطاقة ائتمان',
          },
          {
            'المنصة': 'ملاحظات الإصدار',
            'مصدر الحصول': '[سجل التغييرات](https://sablate.com/changelog)',
          },
          {
            'المنصة': 'الموقع',
            'مصدر الحصول': '[sablate.com](https://sablate.com)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مصدر الحصول': '[سياسة خصوصية Sablate](https://sablate.com/legal/privacy)',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'مصدر الحصول': 'مغلق المصدر؛ ولا يوجد مستودع عام',
          },
        ],
        note: 'تعرض صفحة التنزيل Windows وmacOS فقط؛ ولا تتوفر نسخة لنظام Linux أو iOS أو Android.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Sablate في لمحة',
        columns: ['الخاصية', 'Sablate'],
        rows: [
          { 'الخاصية': 'المنصة', Sablate: 'Windows 10+ وmacOS 12+' },
          { 'الخاصية': 'السعر', Sablate: 'خطة مجانية؛ وPro بسعر $29 لمرة واحدة أو $5.99/شهريًا' },
          { 'الخاصية': 'الترخيص', Sablate: 'مملوك، مغلق المصدر' },
          { 'الخاصية': 'مكان التشغيل', Sablate: 'على حاسوبك بـ faster-whisper وArgos وffmpeg؛ إنترنت للتنزيلات والتحديثات وفحوص الترخيص' },
          { 'الخاصية': 'اللغات', Sablate: 'نحو 100 لغة منطوقة مع كشف تلقائي؛ ولم يُذكر عدد أزواج Argos' },
          { 'الخاصية': 'تمييز المتحدثين', Sablate: 'لا، مدرج على أنه غير مدعوم' },
          { 'الخاصية': 'التحويل الفوري', Sablate: 'غير مذكور؛ يعالج Sablate الملفات لا الصوت المباشر' },
          { 'الخاصية': 'يعمل بالمعالج المركزي فقط', Sablate: 'نعم، لكن أبطأ دون بطاقة NVIDIA' },
          { 'الخاصية': 'خادم API محلي', Sablate: 'غير مذكور' },
        ],
        note: 'تتبع الخصائص مقارنة تحويل الكلام إلى نص المستخدمة في Local LLM Software Directory. غياب الذكر في الموقع يعني غير معروف، لا غير مدعوم.',
      },
      whatIsSablate: {
        id: 'what-is-sablate',
        title: 'ما هو Sablate',
        content: [
          '**Sablate مسار عمل للترجمات النصية لملفات موجودة أصلًا على قرصك، وليس أداة تعليق مباشر ولا إملاء.** تضيف ملف فيديو أو صوت؛ فيفرّغه التطبيق بنموذج Whisper، ويتيح لك إضافة طبقات ترجمة فوقه، ويوفّر محررًا للتوقيت والنص، ويطبّق نمط الترجمات ويصدّر النتيجة.',
          'بحسب المطوّر Furkan Bağcı، يُطوَّر Sablate لدى FuumiSoft، وهي استوديو برمجيات مستقل صغير في تركيا يصنع أيضًا File Arbor وVidray؛ ولا يذكر الموقع ذلك بعد، ولم تتحقق PromptQuorum منه بشكل مستقل. وتذكر الصفحات أنه لا ينزّل من YouTube ولا يدبلج ولا يستنسخ الأصوات ولا يقتطع المقاطع تلقائيًا ولا يميّز المتحدثين.',
          'تعتمد هذه المراجعة على الموقع وسجل التغييرات والوثائق وسياسة الخصوصية والشروط. ولم يُجرَ اختبار عملي، لذا لا تُقيَّم هنا الدقة والسرعة والاستقرار.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'البدء',
        content: [
          '**الإعداد هو تثبيت وتنزيل نموذج ومهمة.** تتبع الخطوات الموقع ووثائقه.',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'نزّل ملف .exe لـ Windows أو ملف .dmg لـ Mac من [صفحة التنزيل](https://sablate.com/download)؛ ولا تحتاج الخطة المجانية إلى حساب.',
          },
          {
            title: 'أضف فيديو',
            whyItMatters: 'ضع ملفات .mp4 أو .mov أو .mkv أو .webm أو .avi أو .m4v أو .mp3 أو .wav أو .m4a أو .flac، أو مجلدًا منها في Pro، واختر فئة Whisper.',
          },
          {
            title: 'فرّغ وترجم',
            whyItMatters: 'ينزَّل نموذج الكلام عند أول استخدام لفئة ما. ثم أضف طبقات الترجمة: يعمل Argos دون اتصال، بحزمة لغة واحدة لكل زوج.',
          },
          {
            title: 'عدّل ونسّق وصدّر',
            whyItMatters: 'أعد ضبط توقيت المقاطع النصية وقسّمها على الخط الزمني، واختر أحد الأنماط الجاهزة الـ 13، ثم صدّر ملفات ترجمات أو فيديو مدمجة فيه الترجمات بنسبة 16:9 أو 9:16 أو 1:1.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**تتمحور الميزات حول ترجمات نصية خاصة للفيديو القصير والطويل.** كل ما يلي مصدره الموقع والوثائق وسجل التغييرات.',
        ],
        items: [
          '**التفريغ المحلي.** faster-whisper في أربع فئات، مع تسريع تلقائي ببطاقة NVIDIA على Windows وعودة إلى المعالج المركزي.',
          '**طبقات الترجمة.** أضف لغة هدف فوق النص المفرَّغ؛ يعمل Argos دون اتصال، ويعمل DeepL وOpenAI وClaude بمفتاحك الخاص في Pro.',
          '**محرر الترجمات.** الفيديو والنص ولوحة الأنماط في نافذة واحدة، مع إعادة ضبط التوقيت على الخط الزمني والتقسيم والدمج وتحذير من سرعة القراءة.',
          '**أنماط الترجمات.** ثلاثة عشر نمطًا جاهزًا، وتأثير كاريوكي كلمة بكلمة، وأنماط مخصصة في Pro.',
          '**التصدير.** .srt و.vtt و.txt؛ وفي Pro أيضًا .ass وملف .mkv بترجمات قابلة للإيقاف بمسار لكل لغة؛ وملف .mp4 مدمجة فيه الترجمات في كل الخطط.',
          '**المهام المجمّعة.** تقبل Pro مجلدًا من مقاطع الفيديو وتصدّر كل اللغات بنقرة واحدة.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'النماذج والعتاد',
        content: [
          '**يشغّل التطبيق Whisper عبر faster-whisper، في أربع فئات.** تذكر الوثائق Fast (tiny، 78 MB) وBalanced (small، 486 MB) وAccurate (large-v3-turbo، 1.62 GB) وBest (large-v3، 3.09 GB)؛ وتعطي صفحة التنزيل نطاقًا من 75 MB إلى 2.9 GB. وبحسب المطوّر، تصفان الملفات نفسها: فالوثائق تحسب بالوحدات العشرية وصفحة التنزيل بالوحدات الثنائية. تشمل الخطة المجانية Fast وBalanced، وتضيف Pro الفئتين Accurate وBest.',
          'تُستخدم بطاقة NVIDIA تلقائيًا وتُنزَّل بيئة CUDA الخاصة بها عند أول استخدام؛ ودونها يعمل التطبيق بالمعالج المركزي، وعلى macOS يعمل بالمعالج المركزي. ولا يذكر الموقع حدًا أدنى للذاكرة أو لبطاقة الرسوميات. ويشغل التثبيت على Windows نحو 1.3 GB من القرص. ويزعم الموقع أن البطاقة تجعل التفريغ أسرع بنحو 5 إلى 10 مرات؛ ولم تقِس PromptQuorum السرعة ولا الدقة.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والترخيص والتكلفة',
        content: [
          '**تقول سياسة الخصوصية إن تطبيق سطح المكتب يعالج وسائطك محليًا وإن ملفات الصوت والفيديو لا تُرفع أبدًا.** وتحمل السياسة تاريخ أكتوبر 2026. وإذا فعّلت مزوّدًا سحابيًا بمفتاحك الخاص، فإن الصوت أو النص ينتقل مباشرة من جهازك إلى ذلك المزوّد وفق شروطه، ويذكر التطبيق ذلك في اللحظة نفسها.',
          'ويظل الاتصال بالشبكة مستخدمًا في جوانب أخرى. تذكر الوثائق فحص تحديث كل بضع ساعات، وفحص ترخيص مرة يوميًا تقريبًا في Pro، وإحصاءات استخدام مجهولة ونموذجًا اختياريًا لاقتراح الميزات. وتُرسل الإحصاءات إلى PostHog في الاتحاد الأوروبي وتتضمن، بحسب السياسة، إصدار التطبيق والنظام ونوع المعالج والخطة ووجود بطاقة رسوميات، ولا تتضمن أبدًا الصوت ولا الفيديو ولا النصوص المفرَّغة ولا أسماء الملفات ولا المفاتيح. لا تصف الصفحات التي قرأناها أي إعداد لإيقاف الإحصاءات. الشيفرة مغلقة ولم تفحص PromptQuorum حركة الشبكة، لذا فهذه الأقوال من المطوّر نفسه.',
          'هو منتج مجاني جزئيًا ومملوك. تغطي الخطة المجانية مقاطع حتى 10 دقائق و3 مهام شهريًا مع سطر شكر أو علامة في الزاوية على المخرجات؛ وتكلّف Pro مبلغ $29 لمرة واحدة أو $5.99 شهريًا وتعمل على جهاز واحد في كل مرة. يعرض الموقع الأسعار بالدولار الأمريكي ولا يذكر ضريبة القيمة المضافة. وللترخيص لمرة واحدة استرداد خلال 30 يومًا؛ أما المدفوعات الشهرية فلا تُسترد.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: "من مطوّر التطبيق",
        content: [
          "قرأ Furkan Bağcı، مطوّر Sablate لدى FuumiSoft، هذه المراجعة وكتب أنه قارنها بصفحات Sablate ولم يجد فيها خطأً تقنيًا. وأضاف من يصنع التطبيق (وقد ورد أعلاه)، وأوضح أن أحجام النماذج في صفحة الوثائق وصفحة التنزيل تصف الملفات نفسها بوحدات عشرية وثنائية. والملاحظة التالية بكلمات المطوّر نفسه، وليست تقييمًا مستقلًا من PromptQuorum؛ ولم تشغّل PromptQuorum التطبيق.",
          "«وُجد Sablate لإنجاز عمل الترجمة النصية كله على الحاسوب الذي توجد عليه اللقطات أصلًا: نسخ صوتي عبر Whisper وترجمة وتحرير ودمج في نافذة واحدة، دون رفع ودون رسوم عن كل دقيقة. التطبيق مغلق المصدر، ولذلك بدلًا من أن نطلب من الناس تصديق كلمة «خاص» بدافع الثقة، تسرد الوثائق كل اتصال صادر يجريه (فحص التحديثات، وفحص ترخيص Pro، وإحصاءات الاستخدام المجهولة، ونموذج الملاحظات الاختياري)، وتبيّن سياسة الخصوصية بدقة ما تتضمنه الإحصاءات. ولا توجد محركات السحابة إلا لمن يحضر مفتاحه الخاص، ويذكر التطبيق ذلك في كل مرة يُختار فيها أحدها.»",
        ],
        note: "— Furkan Bağcı، FuumiSoft",
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المزايا والقيود',
        columns: ['الميزة', 'ما تعنيه في الاستخدام الفعلي', 'القيد / تنبيه'],
        rows: [
          {
            'الميزة': 'كل شيء على حاسوبك',
            'ما تعنيه في الاستخدام الفعلي': 'بحسب المطوّر، لا يحتاج التفريغ والترجمة دون اتصال والعرض إلى رفع ولا إلى رسوم عن كل دقيقة.',
            'القيد / تنبيه': 'مغلق المصدر، لذا لا يمكن التحقق من الادعاء؛ ويظل التحديث والترخيص والإحصاءات تستخدم الشبكة.',
          },
          {
            'الميزة': 'ترجمات يمكنك تنسيقها',
            'ما تعنيه في الاستخدام الفعلي': 'ثلاثة عشر نمطًا والدمج في الفيديو يحوّلان النص المفرَّغ إلى فيديو قصير جاهز.',
            'القيد / تنبيه': 'تحمل المخرجات المجانية علامة في الزاوية أو سطر شكر؛ ويحتاج تصدير .ass و.mkv إلى Pro.',
          },
          {
            'الميزة': 'سعر لمرة واحدة',
            'ما تعنيه في الاستخدام الفعلي': 'مبلغ $29 لمرة واحدة يغني عن الاشتراك.',
            'القيد / تنبيه': 'يغطي الترخيص جهازًا واحدًا في كل مرة؛ والمدفوعات الشهرية لا تُسترد.',
          },
          {
            'الميزة': 'نحو 100 لغة',
            'ما تعنيه في الاستخدام الفعلي': 'تُكشف اللغات المنطوقة تلقائيًا.',
            'القيد / تنبيه': 'حزم لغة Argos لكل زوج ولم يُذكر عدد الأزواج؛ ولا تُنشر أرقام للدقة.',
          },
          {
            'الميزة': 'أربع فئات لـ Whisper',
            'ما تعنيه في الاستخدام الفعلي': 'نموذج صغير للمسودات السريعة وأكبر منه للدقة.',
            'القيد / تنبيه': 'تحتاج Accurate وBest إلى Pro وإلى غيغابايتات من القرص؛ وادعاءات السرعة لم تُختبر.',
          },
          {
            'الميزة': 'تطوير نشط',
            'ما تعنيه في الاستخدام الفعلي': 'ثلاثة إصدارات بين 1 سبتمبر و19 أكتوبر 2026.',
            'القيد / تنبيه': 'منتج حديث جدًا ولم نجد مراجعات مستقلة له.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Sablate مقابل البدائل',
        content: [
          'هذه أقرب أدوات الترجمات النصية والتفريغ في الدليل: محرر ترجمات مجاني مفتوح المصدر، وتطبيق تفريغ مجاني مفتوح المصدر، وتطبيق لأجهزة Apple بشراء لمرة واحدة، وتطبيق تفريغ لأجهزة Mac.',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر والترخيص', 'الدور', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': 'Sablate',
            'المنصات': 'Windows وMac',
            'السعر والترخيص': 'خطة مجانية، وPro بسعر $29 لمرة واحدة، مملوك',
            'الدور': 'ترجمات نصية مع دمج في الفيديو',
            'الفرق الرئيسي': 'Whisper والترجمة والدمج المنسّق في تطبيق واحد؛ مغلق المصدر',
          },
          {
            'التطبيق': '[Subtitle Edit](/ar/power-local-llm/subtitle-edit-review)',
            'المنصات': 'Windows وMac وLinux',
            'السعر والترخيص': 'مجاني، MIT',
            'الدور': 'محرر ترجمات',
            'الفرق الرئيسي': 'مفتوح المصدر بمحركات كثيرة؛ مصمم لتحرير الترجمات الموجودة وترجمتها',
          },
          {
            'التطبيق': '[Buzz](/ar/power-local-llm/buzz-captions-review)',
            'المنصات': 'Mac وWindows وLinux',
            'السعر والترخيص': 'مجاني، MIT',
            'الدور': 'تطبيق تفريغ',
            'الفرق الرئيسي': 'مجاني ومفتوح المصدر؛ يحوّل التسجيلات إلى ترجمات ونصوص مفرَّغة',
          },
          {
            'التطبيق': '[Aiko](/ar/power-local-llm/aiko-review)',
            'المنصات': 'iPhone وiPad وMac',
            'السعر والترخيص': '$24 لمرة واحدة (سعر الولايات المتحدة)، مملوك',
            'الدور': 'تطبيق تفريغ لأجهزة Apple',
            'الفرق الرئيسي': 'على أجهزة Apple فقط؛ لا نسخة لـ Windows',
          },
          {
            'التطبيق': '[MacWhisper](/ar/power-local-llm/macwhisper-review)',
            'المنصات': 'macOS',
            'السعر والترخيص': 'مجاني جزئيًا، مملوك',
            'الدور': 'تطبيق تفريغ لأجهزة Mac',
            'الفرق الرئيسي': 'يفرّغ الملفات وتسجيلات الاجتماعات والإملاء المباشر؛ لأجهزة Mac فقط',
          },
        ],
        note: 'تتغير منصات التطبيقات الخارجية وأسعارها وميزاتها كثيرًا. تحقق من التفاصيل الحالية في صفحة كل مشروع قبل أن تقرر.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب Sablate',
        items: [
          '**صنّاع الفيديو القصير على Windows أو Mac.** تخرج الترجمات المنسّقة والمدمجة من التطبيق نفسه الذي يفرّغ الكلام.',
          '**من يحافظون على خصوصية لقطاتهم.** يبقى التفريغ والترجمة دون اتصال على الحاسوب، بحسب المطوّر.',
          '**المعلمون والمحررون الذين يحتاجون إلى لغات عدة.** تصدّر طبقات الترجمة مسارًا لكل لغة.',
          '**من يفضّلون الدفع مرة واحدة.** يوجد ترخيص Pro لمرة واحدة بسعر $29 إلى جانب الاشتراك.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب Sablate',
        items: [
          '**مستخدمو Linux وiPhone وAndroid.** لا تتوفر سوى نسختي Windows وMac.',
          '**من يحتاجون إلى تمييز المتحدثين أو ترجمات مباشرة.** يدرج المطوّر تمييز المتحدثين على أنه غير مدعوم ويصف مسار عمل قائمًا على الملفات؛ ولا تذكر الصفحات التي قرأناها التعليق المباشر.',
          '**من يحتاجون إلى برنامج قابل للتدقيق.** الشيفرة مغلقة ولا يمكن فحص ادعاءات الخصوصية.',
          '**من يريدون برنامجًا مجانيًا بالكامل.** تقتصر الخطة المجانية على مقاطع مدتها 10 دقائق؛ أما Subtitle Edit وBuzz فمجانيان ومفتوحا المصدر.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل Sablate دون اتصال بالإنترنت؟',
            a: 'يقول المطوّر نعم، بعد تنزيل نموذج الكلام وأي حزم لغة من Argos. وتحتاج التحديثات وفحوص ترخيص Pro وإحصاءات الاستخدام إلى اتصال، لكن التطبيق يواصل العمل دونها بحسب الوثائق. ولم تختبره PromptQuorum دون اتصال.',
          },
          {
            q: 'هل يُرسل الفيديو الخاص بي إلى السحابة؟',
            a: 'تقول سياسة الخصوصية إن الوسائط لا تُرفع إلى المطوّر أبدًا، إلا عندما تفعّل محركًا سحابيًا بمفتاحك الخاص. الشيفرة مغلقة ولم تفحص PromptQuorum حركة الشبكة.',
          },
          {
            q: 'ما صيغ الملفات التي يقبلها؟',
            a: 'ملفات فيديو وصوت منها .mp4 و.mov و.mkv و.webm و.avi و.m4v و.mp3 و.wav و.m4a و.flac، بحسب الوثائق.',
          },
          {
            q: 'هل يمكنني تجربته قبل الدفع؟',
            a: 'نعم: لا تحتاج الخطة المجانية إلى حساب ولا إلى بطاقة ائتمان، لكنها تحدّ طول الفيديو بـ 10 دقائق والمهام بـ 3 شهريًا. ولا تُذكر تجربة منفصلة.',
          },
          {
            q: "من يصنع Sablate؟",
            a: "بحسب مطوّره Furkan Bağcı، يُطوَّر Sablate لدى FuumiSoft، وهي استوديو برمجيات مستقل صغير في تركيا يصنع أيضًا File Arbor وVidray. ولا يذكر موقع Sablate ذلك بوضوح بعد، ولم تتحقق PromptQuorum منه بشكل مستقل.",
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          'يناسب Sablate من يريد تحويل فيديو على حاسوب Windows أو Mac إلى ترجمات مترجمة ومنسّقة ومدمجة يبقى العمل فيها، بحسب المطوّر، على حاسوبه، ويقبل برنامجًا مغلق المصدر. وله خطة مجانية صالحة للاستخدام وسعر Pro لمرة واحدة وإصدار حديث.',
          'التحفظات تخص النطاق وإمكانية التحقق: لا نسخة لنظام Linux أو للجوال، ولا تمييز للمتحدثين، وشيفرة مغلقة، ومطوّر (FuumiSoft في تركيا) لا تذكره إلا رسالة المطوّر لا الموقع، وادعاءات خصوصية لم تتمكن PromptQuorum من فحصها، ومنتج لا يتجاوز عمره بضعة أشهر. جرّب الخطة المجانية على مقطع قصير قبل الشراء.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Sablate](https://sablate.com) — الميزات والأسعار.',
          '[صفحة التنزيل](https://sablate.com/download) — المنصات ومتطلبات النظام.',
          '[الوثائق](https://sablate.com/docs) — النماذج والصيغ واتصالات الشبكة والأسئلة الشائعة.',
          '[سجل التغييرات](https://sablate.com/changelog) — تاريخ الإصدارات؛ الإصدار 1.0.2 بتاريخ 19 أكتوبر 2026.',
          '[سياسة الخصوصية](https://sablate.com/legal/privacy) — التعامل مع البيانات، بتاريخ أكتوبر 2026.',
          '[شروط الاستخدام](https://sablate.com/legal/terms) — شروط الترخيص والاسترداد والأجهزة.',
          "رسالة من المطوّر (Furkan Bağcı، 7 نوفمبر 2026) — بيانات الجهة المطوّرة ووحدات أحجام النماذج وملاحظة المطوّر؛ وهي أقواله هو، ولم يُتحقق منها بشكل مستقل.",
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مقارنة أدوات الصوت والكلام المحلية](/ar/power-local-llm/local-llm-voice-audio-compared) — تحويل النص إلى كلام والكلام إلى نص ووكلاء الصوت جنبًا إلى جنب.',
          '[مراجعة Subtitle Edit](/ar/power-local-llm/subtitle-edit-review) — محرر ترجمات مجاني ومفتوح المصدر مع تحويل محلي للكلام إلى نص.',
          '[مراجعة Buzz](/ar/power-local-llm/buzz-captions-review) — تطبيق تفريغ مجاني لثلاثة أنظمة مكتبية.',
          '[مراجعة Whisper.cpp](/ar/power-local-llm/whisper-cpp-review) — المحرك المفتوح خلف كثير من تطبيقات Whisper المحلية.',
          '[دليل Local LLM Software Directory الكامل](/ar/directory) — دليل أوسع لأدوات الذكاء الاصطناعي المحلي عبر المنصات.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-06',
    dateModified: '2026-11-07',
    next_refresh_due: '2027-05-06',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/sablate-review-hero-ko.webp',
    title: 'Sablate 리뷰: Windows·Mac용 자막 생성과 번인',
    seoTitle: 'Sablate 리뷰: Windows·Mac용 자막 생성기',
    intro: 'Sablate는 Windows와 Mac용 부분 유료(프리미엄 모델) 비공개 소스 자막 앱입니다. 동영상을 넣으면 개발사에 따르면 OpenAI의 Whisper 모델로 사용자의 컴퓨터에서 음성을 받아쓰고, 번역 레이어를 추가하며, 타이밍을 편집할 수 있고, 스타일이 적용된 자막을 영상에 번인(burn-in)합니다. 이 리뷰는 개발사의 웹사이트, 변경 내역, 개인정보 처리방침이 밝히는 내용과 페이지들이 서로 어긋나는 부분, 그리고 디렉터리의 다른 자막·전사 도구와의 비교를 정리합니다.',
    metaDescription: 'Sablate 리뷰: 개발사에 따르면 내 컴퓨터에서 실행되는 Windows·Mac용 자막, 번역, 번인 앱. 무료 플랜, Pro 일회성 $29. 직접 테스트하지 않았습니다.',
    twitterDescription: 'Sablate 리뷰: 개발사에 따르면 내 컴퓨터에서 Whisper로 자막을 만들고 번역해 영상에 번인하는 Windows·Mac 앱. 가격, 개인정보 보호, 한계, 대안을 정리했습니다.',
    audience: '영상을 업로드하지 않고 자막과 번역을 만들려는 Windows·Mac 사용자인 영상 제작자, 편집자, 교사를 위한 글입니다. 가격, 설치, 모델, 개인정보 보호, 한계, 대안을 다룹니다.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Sablate review',
    targetKeywords: [
      'sablate 리뷰',
      'sablate 자막',
      '오프라인 자막 생성기',
      '로컬 whisper 자막 windows mac',
      '영상에 자막 넣기 오프라인',
      '비공개 영상 전사',
      '클라우드 없는 자막 번역',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Mac',
      'NVIDIA GPU',
    ],
    leadAnswerBlock: '**Sablate는 개발사에 따르면 받아쓰기, 번역, 자막 렌더링을 사용자의 컴퓨터에서 처리하며 영상을 업로드하지 않는 Windows·Mac용 비공개 소스 자막 앱입니다.** 다만 업데이트, 라이선스 확인, 개발사가 익명이라고 설명하는 사용 통계에는 네트워크를 사용합니다. 무료 플랜은 10분 이하 영상을 지원하고, Pro는 일회성 $29 또는 월 $5.99입니다. 이 리뷰는 개발사의 공개 웹사이트, 변경 내역, 문서, 개인정보 처리방침에 근거하며 직접 사용해 본 테스트는 아닙니다.',
    quickAnswerTop: {
      ko: {
        question: 'Sablate는 로컬 자막 도구입니까?',
        answer: '개발사에 따르면 그렇습니다. 음성 인식은 Whisper(faster-whisper), 오프라인 번역은 Argos, 자막 렌더링은 ffmpeg로 모두 Windows PC 또는 Mac에서 실행되며, 오디오와 영상은 개발사로 업로드되지 않습니다. OpenAI, ElevenLabs, DeepL, Claude 같은 클라우드 엔진은 선택 사항이며 Pro 전용이고 본인의 API 키가 필요합니다. 다만 앱은 업데이트 확인, 하루 한 번의 Pro 라이선스 확인, 개발사가 익명이라고 설명하는 사용 통계 전송을 수행합니다. 코드는 비공개이고 PromptQuorum은 네트워크 트래픽을 확인하지 않았으므로, 이 주장은 개발사 자체의 설명입니다.',
        bullets: [
          '동영상 또는 오디오 파일을 넣으면 시간 정보가 붙은 전사본이 만들어지고, 번역 레이어를 추가한 뒤 타임라인에서 편집하여 .srt, .vtt, .txt, .ass 또는 번인된 .mp4로 내보낼 수 있습니다.',
          'Hormozi와 Karaoke부터 Cinema까지 13가지 자막 스타일을 libass로 렌더링합니다.',
          'Whisper 품질 등급은 Fast(78 MB)부터 Best(3.09 GB)까지 4종이며, NVIDIA GPU가 있으면 자동으로 사용하고 없으면 CPU를 사용합니다.',
          'Windows 10 이상과 macOS 12 이상 전용이며 Linux, iPhone, Android 버전은 없습니다.',
          '무료 플랜은 10분 이하 영상까지, Pro는 모든 Whisper 등급, 본인 키로 쓰는 클라우드 엔진, 표시 없는 내보내기를 추가합니다.',
        ],
        updatedDate: '2026-11-06',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Sablate 받기', anchor: 'get-it' },
      { label: 'Sablate 한눈에 보기', anchor: 'at-a-glance' },
      { label: 'Sablate란', anchor: 'what-is-sablate' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '기능', anchor: 'features' },
      { label: '모델과 하드웨어', anchor: 'models-hardware' },
      { label: '개인정보 보호, 라이선스, 비용', anchor: 'privacy' },
      { label: '개발자의 말', anchor: 'from-the-maker' },
      { label: '장점과 한계', anchor: 'tradeoffs' },
      { label: 'Sablate와 대안 비교', anchor: 'vs-alternatives' },
      { label: 'Sablate를 쓰면 좋은 사용자', anchor: 'who-should-use' },
      { label: 'Sablate를 쓰지 말아야 할 사용자', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
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
            text: 'Sablate는 개발사에 따르면 클라우드 서비스 대신 사용자의 컴퓨터에서 Whisper 받아쓰기, 오프라인 번역, 자막 번인을 실행하는 Windows·Mac용 부분 유료(프리미엄 모델) 자막 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '책상 위의 자막 스튜디오라고 생각하면 됩니다. 앱이 음성을 듣고 자막을 쓰고 번역해 화면에 입히는 동안에도 개발사에 따르면 영상은 내 드라이브에 그대로 있습니다.',
          },
        ],
        items: [
          '로컬 주장: 받아쓰기, 오프라인 번역, 렌더링은 기기에서 실행되며, 클라우드 엔진은 선택 사항이고 본인의 키를 사용합니다.',
          '라이선스와 개발사: 독점 소프트웨어이며, 개발자에 따르면 튀르키예의 소규모 독립 스튜디오 FuumiSoft가 만들었습니다(웹사이트에는 아직 명시되지 않았으며 독립적으로 확인하지 않았습니다).',
          '가격: 10분 이하 영상은 무료이고, Pro는 일회성 $29 또는 월 $5.99이며 일회성 라이선스에는 30일 환불이 있습니다.',
          '유지보수: 버전 1.0.2가 2026년 10월 19일에 출시되어 프로젝트가 활발히 업데이트되고 있지만, 2026년 9월 1일에 처음 공개된 제품입니다.',
          '공백: 화자 구분이 없고, Linux나 모바일 버전이 없으며, 사용 통계를 끄는 옵션도 찾지 못했습니다.',
        ],
      },
      getItSablate: {
        id: 'get-it',
        title: 'Sablate 받기',
        content: [
          '**Sablate는 다른 데스크톱 앱처럼 설치하며 터미널이 필요 없습니다.** 공식 사이트에서 사용 중인 시스템용 설치 파일을 내려받으면 되고, Whisper 음성 모델은 처음 사용할 때 앱 안에서 받습니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'Windows',
            '받는 곳': '[Windows용 다운로드](https://sablate.com/download) — .exe, Windows 10 64비트 이상, 약 320 MB(설치 후 1.3 GB)',
          },
          {
            '플랫폼': 'Mac',
            '받는 곳': '[Mac용 다운로드](https://sablate.com/download) — .dmg, macOS 12 이상, Apple Silicon용과 Intel용 빌드가 별도로 제공됨',
          },
          {
            '플랫폼': '무료 플랜',
            '받는 곳': '[플랜 보기](https://sablate.com/pricing) — 계정과 신용카드 불필요',
          },
          {
            '플랫폼': '릴리스 노트',
            '받는 곳': '[변경 내역](https://sablate.com/changelog)',
          },
          {
            '플랫폼': '공식 사이트',
            '받는 곳': '[sablate.com](https://sablate.com)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[Sablate 개인정보 처리방침](https://sablate.com/legal/privacy)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '비공개 소스이며 공개 저장소는 없습니다',
          },
        ],
        note: '다운로드 페이지에는 Windows와 macOS만 나와 있으며, Linux, iOS, Android 빌드는 제공되지 않습니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Sablate 한눈에 보기',
        columns: ['항목', 'Sablate'],
        rows: [
          { '항목': '플랫폼', 'Sablate': 'Windows 10 이상 및 macOS 12 이상' },
          { '항목': '가격', 'Sablate': '무료 플랜, Pro 일회성 $29 또는 월 $5.99' },
          { '항목': '라이선스', 'Sablate': '독점, 비공개 소스' },
          { '항목': '실행 위치', 'Sablate': '컴퓨터에서 faster-whisper, Argos, ffmpeg로 실행, 다운로드, 업데이트, 라이선스 확인에는 인터넷 사용' },
          { '항목': '언어', 'Sablate': '자동 감지를 포함해 약 100개 음성 언어, Argos 언어쌍 수는 명시되지 않음' },
          { '항목': '화자 구분', 'Sablate': '아니요, 미지원으로 표기됨' },
          { '항목': '실시간 전사', 'Sablate': '명시되지 않음, Sablate는 실시간 오디오가 아니라 파일을 처리함' },
          { '항목': 'CPU만으로 사용 가능', 'Sablate': '예, NVIDIA GPU가 없으면 더 느림' },
          { '항목': '로컬 API 서버', 'Sablate': '명시되지 않음' },
        ],
        note: '항목은 Local LLM Software Directory에서 사용하는 음성 인식 비교를 따릅니다. 사이트에 언급이 없는 항목은 지원하지 않는다는 뜻이 아니라 알 수 없다는 뜻입니다.',
      },
      whatIsSablate: {
        id: 'what-is-sablate',
        title: 'Sablate란',
        content: [
          '**Sablate는 이미 디스크에 있는 파일을 위한 자막 작업 도구이며, 실시간 자막이나 받아쓰기 도구가 아닙니다.** 동영상이나 오디오 파일을 추가하면 앱이 Whisper로 전사하고, 그 위에 번역 레이어를 추가할 수 있으며, 타이밍과 텍스트를 편집하는 편집기를 제공하고, 자막 스타일을 적용해 결과를 내보냅니다.',
          '개발자 Furkan Bağcı에 따르면 Sablate는 튀르키예의 소규모 독립 소프트웨어 스튜디오 FuumiSoft가 만들며, 이 스튜디오는 File Arbor와 Vidray도 만듭니다. 웹사이트에는 아직 이 내용이 없고, PromptQuorum도 독립적으로 확인하지 않았습니다. 페이지에는 YouTube 다운로드, 더빙, 음성 복제, 자동 클립 생성, 화자 구분은 하지 않는다고 적혀 있습니다.',
          '이 리뷰는 웹사이트, 변경 내역, 문서, 개인정보 처리방침, 이용 약관에 근거합니다. 직접 사용해 본 테스트는 하지 않았으므로 정확도, 속도, 안정성은 평가하지 않습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**설정은 설치, 모델 다운로드, 작업 실행으로 이루어집니다.** 단계는 공식 사이트와 문서를 따릅니다.',
        ],
        numberedItems: [
          {
            title: '앱 설치',
            whyItMatters: '[다운로드 페이지](https://sablate.com/download)에서 Windows용 .exe 또는 Mac용 .dmg를 내려받습니다. 무료 플랜에는 계정이 필요하지 않습니다.',
          },
          {
            title: '동영상 추가',
            whyItMatters: '.mp4, .mov, .mkv, .webm, .avi, .m4v, .mp3, .wav, .m4a, .flac 파일을 넣고(Pro에서는 이런 파일이 든 폴더도 가능), Whisper 등급을 고릅니다.',
          },
          {
            title: '받아쓰기와 번역',
            whyItMatters: '음성 모델은 등급을 처음 사용할 때 내려받습니다. 그다음 번역 레이어를 추가합니다. Argos는 오프라인으로 작동하며 언어쌍마다 언어 팩이 하나씩 필요합니다.',
          },
          {
            title: '편집, 스타일 지정, 내보내기',
            whyItMatters: '타임라인에서 자막 구간의 타이밍을 조정하고 나눈 뒤, 13가지 프리셋 중 하나를 고르고, 자막 파일 또는 16:9, 9:16, 1:1 비율의 번인 영상으로 내보냅니다.',
          },
        ],
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**기능은 숏폼과 롱폼 영상을 위한 비공개 자막 제작에 집중되어 있습니다.** 아래 내용은 모두 웹사이트, 문서, 변경 내역에서 가져왔습니다.',
        ],
        items: [
          '**로컬 받아쓰기.** faster-whisper를 4개 등급으로 제공하며, Windows에서는 NVIDIA GPU 가속을 자동으로 사용하고 없으면 CPU로 전환합니다.',
          '**번역 레이어.** 전사본 위에 대상 언어를 추가합니다. Argos는 오프라인으로 실행되고, DeepL, OpenAI, Claude는 Pro에서 본인의 키로 사용합니다.',
          '**자막 편집기.** 영상, 전사본, 스타일 패널을 한 창에 담았으며, 타임라인 타이밍 조정, 분할과 병합, 읽기 속도 경고를 제공합니다.',
          '**자막 스타일.** 13가지 프리셋, 단어 단위 카라오케 효과, 그리고 Pro에서는 사용자 지정 프리셋을 제공합니다.',
          '**내보내기.** .srt, .vtt, .txt를 지원하며, Pro에서는 .ass와 언어별 트랙이 하나씩 들어간 소프트 자막 .mkv도 지원합니다. 번인된 .mp4는 모든 플랜에서 가능합니다.',
          '**일괄 작업.** Pro에서는 영상이 든 폴더를 받아 클릭 한 번으로 모든 언어를 내보냅니다.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '모델과 하드웨어',
        content: [
          '**앱은 faster-whisper를 통해 Whisper를 실행하며 등급은 4종입니다.** 문서에는 Fast(tiny, 78 MB), Balanced(small, 486 MB), Accurate(large-v3-turbo, 1.62 GB), Best(large-v3, 3.09 GB)가 나오며, 다운로드 페이지는 75 MB에서 2.9 GB까지의 범위로 안내합니다. 개발자에 따르면 둘 다 같은 파일을 가리키며, 문서는 10진 단위로, 다운로드 페이지는 2진 단위로 표기한 것입니다. 무료에는 Fast와 Balanced가 포함되고, Pro에서 Accurate와 Best가 추가됩니다.',
          'NVIDIA GPU가 있으면 자동으로 사용하며 CUDA 런타임은 처음 사용할 때 내려받습니다. GPU가 없으면 앱은 CPU에서 실행되고, macOS에서도 CPU에서 실행됩니다. 사이트에는 RAM이나 GPU 최소 사양이 나와 있지 않습니다. Windows 설치에는 디스크 약 1.3 GB가 필요합니다. 사이트는 GPU를 쓰면 받아쓰기가 대략 5배에서 10배 빨라진다고 주장하지만, PromptQuorum은 속도나 정확도를 측정하지 않았습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호, 라이선스, 비용',
        content: [
          '**개인정보 처리방침에 따르면 데스크톱 애플리케이션은 미디어를 로컬에서 처리하며, 오디오와 영상 파일은 업로드되지 않습니다.** 방침의 날짜는 2026년 10월입니다. 본인의 키로 클라우드 제공업체를 켜면 오디오나 텍스트가 내 컴퓨터에서 그 제공업체로 직접 전송되어 해당 업체의 약관을 따르며, 앱은 그 시점에 이를 안내합니다.',
          '다른 부분에서는 여전히 네트워크가 사용됩니다. 문서에는 몇 시간마다 하는 업데이트 확인, Pro에서 하루 한 번 정도 하는 라이선스 확인, 익명 사용 통계, 선택형 기능 제안 양식이 나와 있습니다. 통계는 EU에 있는 PostHog로 전송되며, 방침에 따르면 앱 버전, 시스템, 프로세서 종류, 플랜, GPU 유무를 포함하지만 오디오, 영상, 전사본, 파일 이름, 키는 포함하지 않습니다. 확인한 페이지에는 통계를 끄는 설정에 대한 설명이 없습니다. 코드는 비공개이고 PromptQuorum은 네트워크 트래픽을 조사하지 않았으므로, 이런 진술은 개발사 자체의 설명입니다.',
          '부분 유료(프리미엄 모델)의 독점 제품입니다. 무료 플랜은 10분 이하 영상과 월 3건의 작업까지이며 내보낸 결과물에 크레딧 문구나 모서리 표시가 들어갑니다. Pro는 일회성 $29 또는 월 $5.99이며 한 번에 한 기기에서만 활성화됩니다. 사이트는 가격을 미국 달러로 표시하며 VAT는 언급하지 않습니다. 일회성 라이선스에는 30일 환불이 있고, 월 결제는 환불되지 않습니다.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: "개발자의 말",
        content: [
          "FuumiSoft에서 Sablate를 개발하는 Furkan Bağcı는 이 리뷰를 읽고 Sablate 페이지와 대조해 보았으며 기술적으로 틀린 점을 찾지 못했다고 썼습니다. 그는 앱을 만드는 곳(위에 반영됨)을 알려 주었고, 문서 페이지와 다운로드 페이지의 모델 크기는 같은 파일을 각각 10진 단위와 2진 단위로 표기한 것이라고 설명했습니다. 아래 글은 개발자 본인의 말이며 PromptQuorum의 독립적인 평가가 아닙니다. PromptQuorum은 이 앱을 실행해 보지 않았습니다.",
          "“Sablate는 영상 소스가 이미 있는 컴퓨터에서 자막 작업 전체를 끝내기 위해 만들었습니다. Whisper 전사, 번역, 편집, 번인을 한 창에서 처리하며 업로드도, 분당 요금도 없습니다. 앱은 비공개 소스이므로 '비공개'를 믿어 달라고 부탁하는 대신, 문서에 앱이 보내는 모든 외부 호출(업데이트 확인, Pro 라이선스 확인, 익명 사용 통계, 선택 사항인 피드백 양식)을 나열했고, 개인정보 처리방침에는 통계에 무엇이 들어 있는지 정확히 적었습니다. 클라우드 엔진은 자신의 키를 가져오는 사용자를 위한 것일 뿐이며, 하나를 고를 때마다 앱이 그 사실을 알려 줍니다.”",
        ],
        note: "— Furkan Bağcı, FuumiSoft",
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장점과 한계',
        columns: ['장점', '실제 사용에서의 의미', '한계 / 주의점'],
        rows: [
          {
            '장점': '모든 작업이 내 컴퓨터에서 실행',
            '실제 사용에서의 의미': '개발사에 따르면 받아쓰기, 오프라인 번역, 렌더링에 업로드도 분당 요금도 필요 없습니다.',
            '한계 / 주의점': '비공개 소스라 이 주장은 검증할 수 없고, 업데이트, 라이선스, 통계 전송에는 여전히 네트워크가 사용됩니다.',
          },
          {
            '장점': '스타일을 지정할 수 있는 자막',
            '실제 사용에서의 의미': '13가지 프리셋과 번인으로 전사본을 완성된 숏폼 영상으로 만듭니다.',
            '한계 / 주의점': '무료 내보내기에는 모서리 표시나 크레딧 문구가 들어가며, .ass와 .mkv 내보내기는 Pro가 필요합니다.',
          },
          {
            '장점': '일회성 가격',
            '실제 사용에서의 의미': '$29 일회성 결제로 구독을 피할 수 있습니다.',
            '한계 / 주의점': '라이선스는 한 번에 한 기기에만 적용되며, 월 결제는 환불되지 않습니다.',
          },
          {
            '장점': '약 100개 언어',
            '실제 사용에서의 의미': '음성 언어를 자동으로 감지합니다.',
            '한계 / 주의점': 'Argos 언어 팩은 언어쌍마다 따로이고 언어쌍 수는 명시되지 않으며, 정확도 수치도 공개되어 있지 않습니다.',
          },
          {
            '장점': '4종의 Whisper 등급',
            '실제 사용에서의 의미': '빠른 초안에는 작은 모델, 정확도가 필요하면 더 큰 모델을 쓸 수 있습니다.',
            '한계 / 주의점': 'Accurate와 Best는 Pro가 필요하고 디스크 수 GB를 차지하며, 속도 주장은 테스트하지 않았습니다.',
          },
          {
            '장점': '활발한 개발',
            '실제 사용에서의 의미': '2026년 9월 1일부터 10월 19일 사이에 세 차례 릴리스되었습니다.',
            '한계 / 주의점': '출시된 지 얼마 안 된 제품이며 독립적인 리뷰는 찾지 못했습니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Sablate와 대안 비교',
        content: [
          '디렉터리에서 가장 가까운 자막·전사 도구는 무료 오픈 소스 자막 편집기, 무료 오픈 소스 전사 앱, 일회성 구매 방식의 Apple 앱, Mac 전사 앱입니다.',
        ],
        columns: ['앱', '플랫폼', '가격과 라이선스', '역할', '주요 차이'],
        rows: [
          {
            '앱': 'Sablate',
            '플랫폼': 'Windows, Mac',
            '가격과 라이선스': '무료 플랜, Pro 일회성 $29, 독점',
            '역할': '번인 기능이 있는 자막',
            '주요 차이': 'Whisper, 번역, 스타일 번인을 한 앱에서 처리, 비공개 소스',
          },
          {
            '앱': '[Subtitle Edit](/ko/power-local-llm/subtitle-edit-review)',
            '플랫폼': 'Windows, Mac, Linux',
            '가격과 라이선스': '무료, MIT',
            '역할': '자막 편집기',
            '주요 차이': '다양한 엔진을 지원하는 오픈 소스, 기존 자막을 편집하고 번역하는 데 맞춘 편집기',
          },
          {
            '앱': '[Buzz](/ko/power-local-llm/buzz-captions-review)',
            '플랫폼': 'Mac, Windows, Linux',
            '가격과 라이선스': '무료, MIT',
            '역할': '전사 앱',
            '주요 차이': '무료 오픈 소스, 녹음을 자막과 전사본으로 변환',
          },
          {
            '앱': '[Aiko](/ko/power-local-llm/aiko-review)',
            '플랫폼': 'iPhone, iPad, Mac',
            '가격과 라이선스': '일회성 $24(미국 가격), 독점',
            '역할': 'Apple 전사 앱',
            '주요 차이': 'Apple 기기 전용, Windows 버전 없음',
          },
          {
            '앱': '[MacWhisper](/ko/power-local-llm/macwhisper-review)',
            '플랫폼': 'macOS',
            '가격과 라이선스': '부분 유료(프리미엄 모델), 독점',
            '역할': 'Mac 전사 앱',
            '주요 차이': '파일, 회의 녹음, 실시간 받아쓰기를 전사, Mac 전용',
          },
        ],
        note: '서드파티 앱의 플랫폼, 가격, 기능은 자주 바뀝니다. 결정하기 전에 각 프로젝트의 공식 페이지에서 최신 정보를 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Sablate를 쓰면 좋은 사용자',
        items: [
          '**Windows나 Mac을 쓰는 숏폼 영상 제작자.** 전사하는 같은 앱에서 스타일이 적용된 번인 자막까지 만들 수 있습니다.',
          '**촬영 영상을 비공개로 유지하려는 사람.** 개발사에 따르면 받아쓰기와 오프라인 번역은 컴퓨터 안에서 이루어집니다.',
          '**여러 언어가 필요한 교사와 편집자.** 번역 레이어는 언어별로 트랙 하나씩 내보냅니다.',
          '**한 번만 결제하고 싶은 구매자.** 구독과 함께 $29 일회성 Pro 라이선스가 있습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Sablate를 쓰지 말아야 할 사용자',
        items: [
          '**Linux, iPhone, Android 사용자.** Windows와 Mac 빌드만 제공됩니다.',
          '**화자 구분이나 실시간 자막이 필요한 사람.** 개발사는 화자 구분을 미지원으로 표기하고 파일 기반 작업 흐름을 설명하며, 확인한 페이지에는 실시간 자막 언급이 없습니다.',
          '**감사 가능한 소프트웨어가 필요한 사람.** 코드가 비공개라 개인정보 보호 주장을 직접 확인할 수 없습니다.',
          '**완전 무료 소프트웨어를 원하는 사람.** 무료 플랜은 10분 영상까지로 제한되며, Subtitle Edit와 Buzz는 무료 오픈 소스입니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Sablate는 오프라인에서 작동합니까?',
            a: '개발사는 음성 모델과 Argos 언어 팩을 내려받고 나면 그렇다고 밝힙니다. 업데이트, Pro 라이선스 확인, 사용 통계에는 연결이 필요하지만, 문서에 따르면 연결이 없어도 앱은 계속 작동합니다. PromptQuorum은 오프라인에서 테스트하지 않았습니다.',
          },
          {
            q: '내 영상이 클라우드로 전송됩니까?',
            a: '개인정보 처리방침에 따르면 본인의 키로 클라우드 엔진을 켜는 경우를 제외하고 미디어는 개발사로 업로드되지 않습니다. 코드는 비공개이고 PromptQuorum은 네트워크 트래픽을 확인하지 않았습니다.',
          },
          {
            q: '어떤 파일 형식을 지원합니까?',
            a: '문서에 따르면 .mp4, .mov, .mkv, .webm, .avi, .m4v, .mp3, .wav, .m4a, .flac을 포함한 동영상과 오디오 파일을 지원합니다.',
          },
          {
            q: '결제 전에 사용해 볼 수 있습니까?',
            a: '네, 무료 플랜은 계정이나 신용카드가 필요 없지만 영상 길이는 10분, 작업은 월 3건으로 제한됩니다. 별도의 체험판은 언급되어 있지 않습니다.',
          },
          {
            q: "Sablate는 누가 만드나요?",
            a: "개발자 Furkan Bağcı에 따르면 Sablate는 튀르키예의 소규모 독립 소프트웨어 스튜디오 FuumiSoft가 만들며, 이 스튜디오는 File Arbor와 Vidray도 만듭니다. Sablate 웹사이트에는 아직 이 내용이 분명히 나와 있지 않으며, PromptQuorum도 독립적으로 확인하지 않았습니다.",
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          'Windows PC나 Mac의 영상을 번역되고 스타일이 적용된 번인 자막으로 만들고 싶고, 개발사에 따르면 작업이 사용자의 컴퓨터 안에서 이루어지며, 비공개 소스 소프트웨어를 받아들일 수 있다면 Sablate가 잘 맞습니다. 쓸 만한 무료 플랜, 일회성 Pro 가격, 최근 릴리스가 있습니다.',
          '주의할 점은 범위와 검증 가능성입니다. Linux나 모바일 버전이 없고, 화자 구분이 없으며, 코드가 비공개이고, 개발사(튀르키예의 FuumiSoft)는 개발자의 메시지에만 나오고 웹사이트에는 없으며, PromptQuorum이 확인하지 못한 개인정보 보호 주장이 있고, 출시된 지 두어 달밖에 안 된 제품입니다. 구매 전에 짧은 영상 하나로 무료 플랜을 써 보십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Sablate 공식 사이트](https://sablate.com) — 기능과 가격.',
          '[다운로드 페이지](https://sablate.com/download) — 플랫폼과 시스템 요구 사항.',
          '[문서](https://sablate.com/docs) — 모델, 형식, 네트워크 호출, FAQ.',
          '[변경 내역](https://sablate.com/changelog) — 버전 기록, 버전 1.0.2의 날짜는 2026년 10월 19일.',
          '[개인정보 처리방침](https://sablate.com/legal/privacy) — 데이터 처리, 날짜는 2026년 10월.',
          '[이용 약관](https://sablate.com/legal/terms) — 라이선스, 환불, 기기 관련 약관.',
          "개발자의 메시지(Furkan Bağcı, 2026년 11월 7일) — 개발사 정보, 모델 크기 단위, 개발자 메모. 본인의 진술이며 독립적으로 확인하지 않았습니다.",
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[로컬 음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 음성 합성, 음성 인식, 음성 에이전트를 나란히 비교합니다.',
          '[Subtitle Edit 리뷰](/ko/power-local-llm/subtitle-edit-review) — 로컬 음성 인식을 갖춘 무료 오픈 소스 자막 편집기.',
          '[Buzz 리뷰](/ko/power-local-llm/buzz-captions-review) — 세 가지 데스크톱 시스템용 무료 전사 앱.',
          '[Whisper.cpp 리뷰](/ko/power-local-llm/whisper-cpp-review) — 많은 로컬 Whisper 앱의 기반이 되는 오픈 엔진.',
          '[전체 Local LLM Software Directory](/ko/directory) — 여러 플랫폼의 로컬 AI 도구를 모은 더 넓은 디렉터리.',
        ],
      },
    },
  },
}
