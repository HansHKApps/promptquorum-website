// OpenShorts Review: Open-Source AI Clip Maker for Vertical Shorts
// Slug: openshorts-review
// Companion to: fablecut-review, funclip-review, openmontage-review (no video-editing comparison segment exists in compare-schema.ts)
// Sources (all read 2026-11-20, no hands-on testing): official website (home, pricing, privacy policy updated 2026-11-17, terms published 2026-09-04),
// GitHub repository and README, LICENSE/NOTICE and cloud/LICENSE, docker-compose.yml, .env.example, server.json, GitHub API (stars, commits, releases and tags: none),
// PyPI entry of the command-line package. The request came from the site owner, not from the maker.
// Last upstream update 2026-11-19 (last commit on main; the repository has no releases or tags) => no stale warning.
// Version: none. The project publishes no release or tag, so the tile has no pqReview and the text says so.
// Theme: 'Image & Video Generation' (canonical theme used by the other video reviews).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-20',
    theme: 'Image & Video Generation',
    heroImage: '/images/openshorts-review-hero-en.webp',
    title: 'OpenShorts Review: Open-Source AI Clip Maker for Vertical Shorts',
    seoTitle: 'OpenShorts Review: Open-Source AI Video Clip Maker',
    intro:
      'OpenShorts is an open-source tool that turns a long video, such as a podcast, webinar or stream, into short vertical clips with captions for TikTok, Instagram Reels and YouTube Shorts. You can run it yourself with Docker or use the hosted OpenShorts Cloud. This review is based on the project\'s website, privacy policy and terms, and on the GitHub repository and README. PromptQuorum has not tested the software.',
    metaDescription:
      'OpenShorts turns long videos into captioned vertical clips. Self-host free with Docker or use the cloud. Local or cloud AI, pricing, privacy, open points.',
    twitterDescription:
      'OpenShorts is an MIT-licensed AI clip maker for vertical shorts. Self-hosting, hosted plans, what runs locally, privacy and unverified points.',
    audience:
      'Podcasters, streamers, creators and developers who want to turn long videos into captioned vertical clips, with or without self-hosting',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenShorts',
    targetKeywords: [
      'OpenShorts review',
      'OpenShorts',
      'open source clip maker',
      'self-hosted AI clip generator',
      'long video to shorts',
      'OpusClip alternative',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenShorts is an MIT-licensed, open-source AI clip maker that finds the strongest moments in a long video and returns captioned 9:16 clips, either self-hosted with Docker or on the hosted OpenShorts Cloud.** It is not fully local by default: the moment picker calls Google Gemini unless you point a self-hosted copy at a local language model.',
    quickAnswerTop: {
      en: {
        question: 'What is OpenShorts and is it really local?',
        answer:
          'OpenShorts is an open-source clip maker from TONVI TECH SL that cuts long videos into captioned vertical clips. Transcription, scene detection and face-tracked reframing run on the machine that hosts it, but by default the transcript goes to Google Gemini to pick the moments, so it is hybrid rather than fully local.',
        bullets: [
          'Platforms: hosted web app, or self-hosted with Docker Compose.',
          'Price: free to self-host; the hosted service starts with a watermarked free plan.',
          'License: MIT for the core app, with the cloud/ folder under a commercial license.',
          'Hardware: the README lists Docker and 8 GB or more of RAM; an NVIDIA GPU is optional.',
          'Maker: TONVI TECH SL in Málaga, Spain, per the privacy policy.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Overview', anchor: 'overview' },
      { label: 'How to Get It', anchor: 'get-it' },
      { label: 'Pricing and License', anchor: 'pricing-license' },
      { label: 'Requirements', anchor: 'requirements' },
      { label: 'Features', anchor: 'features' },
      { label: 'Where Your Video and Data Go', anchor: 'privacy' },
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
            text: 'OpenShorts is an open-source tool that turns long videos into captioned vertical clips, either on your own Docker host or on a hosted cloud service.',
          },
          {
            type: 'plain-terms',
            text: 'You give it a YouTube link or a video file. It transcribes the speech, asks a language model which moments are worth posting, cuts them out and crops them to a vertical frame around the speaker. The language model is Google Gemini by default; on a self-hosted copy you can swap in your own model for that step.',
          },
        ],
        items: [
          'Self-hosting is free under the MIT license and, the maker says, has no watermark and no usage cap; it needs Docker, a terminal and about 8 GB of RAM or more.',
          'The hosted OpenShorts Cloud needs no installation; its free plan adds a watermark, and the paid plans are listed under Pricing and License.',
          'By default the transcript, and for some features sampled video frames, go to Google Gemini; a local model can replace only the moment-picking step.',
          'The repository has no releases or tags, so there is no app version number; the last commit on the main branch is from 19 November 2026.',
          'The privacy policy and terms of the hosted service name TONVI TECH SL in Málaga, Spain, as the operator.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Videos by other people are usually protected by copyright. The terms of the hosted service ask users to confirm that they hold the rights to every video they submit, and the same caution applies when you self-host. Check the rights and the source platform\'s terms before you clip and republish someone else\'s video. This is general information, not legal advice.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**OpenShorts is an AI clip maker: it takes a long video and returns short vertical clips with captions, hook lines and titles.**',
          'The README describes three tools in one project: a Clip Generator, AI Shorts (marketing videos with AI actors) and a YouTube Studio for titles, thumbnails and descriptions. This review concentrates on the Clip Generator, the part the repository leads with. The README says the core is open source under the MIT license, while the hosted service, OpenShorts Cloud, adds billing, managed keys, auto-posting and an Autopilot mode on paid plans.',
          'Per the website, the pipeline uses faster-whisper for word-level transcription, PySceneDetect for scene boundaries, Google Gemini 3.1 Flash-Lite to score the transcript and pick 3 to 15 moments of 15 to 60 seconds, FFmpeg to cut the clips, and MediaPipe face tracking with a YOLOv8 fallback to reframe them to 9:16. The README adds layouts for two speakers stacked, a screencast layout and a blurred-background layout, chosen per video by Gemini or forced from the dashboard.',
          'The privacy policy and terms of the hosted service name TONVI TECH SL, a company incorporated in Spain, as the operator. Everything described here is a maker statement; PromptQuorum has not run the software or compared its clips with other tools.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**You can use OpenShorts on the hosted service without installing anything, or self-host it with Docker from the GitHub repository; there is no downloadable installer.**',
          'The repository has no GitHub Releases and no tags, so self-hosting means a git clone followed by a Docker Compose build. The README steps are: clone the repository, optionally copy .env.example to .env, run docker compose up --build, open the dashboard on port 5175 and enter API keys under Settings. For NVIDIA GPU use, the README adds a compose override file and environment settings.',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          { 'Option': '[Hosted OpenShorts Cloud](https://www.openshorts.app)', 'How to get it': 'Sign in and paste a video link; no install' },
          { 'Option': '[Self-hosted (Docker Compose)](https://github.com/mutonby/openshorts#getting-started)', 'How to get it': 'git clone, docker compose up --build; terminal needed' },
          { 'Option': '[Website](https://www.openshorts.app)', 'How to get it': 'Official site, pricing and guides' },
          { 'Option': '[Privacy policy](https://www.openshorts.app/privacy)', 'How to get it': 'Policy of the hosted service' },
          { 'Option': '[Source code](https://github.com/mutonby/openshorts)', 'How to get it': 'GitHub repository (MIT core)' },
          { 'Option': '[Command-line client](https://pypi.org/project/openshorts/)', 'How to get it': 'pip install openshorts; talks to an OpenShorts API' },
        ],
        note: 'Self-hosting needs a terminal and Docker, so it is a developer-style setup, not a double-click install. The README says the self-hosted edition and the cloud run the same software.',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: 'Pricing and License',
        content: [
          '**Self-hosting is free, and the hosted OpenShorts Cloud has a free plan with a watermark plus paid plans in US dollars.** The prices below come from the pricing page checked on 20 November 2026 and may change. Hosted plans are metered in source minutes, meaning the minutes of video you submit.',
          'License: the README says the core application is MIT-licensed, with one exception. The cloud/ directory (billing, managed keys and hosted infrastructure) is source-available under the OpenShorts Commercial License, which allows reading, modifying and self-hosting for personal or internal use but not offering it to third parties as a paid service. Self-hosting the core app does not require that directory. Optional features call other paid services with your own keys, such as fal.ai for AI actor videos, ElevenLabs for dubbing and Upload-Post for posting; their costs are separate.',
        ],
        columns: ['Plan', 'Price and limits'],
        rows: [
          { 'Plan': 'Self-hosted', 'Price and limits': 'Free, MIT; you supply hardware and API keys' },
          { 'Plan': 'Hosted Free', 'Price and limits': '$0; first video up to 60 min, then 20 min/month; watermark' },
          { 'Plan': 'Hosted Starter', 'Price and limits': '$12/month; 100 min/month; no watermark' },
          { 'Plan': 'Hosted Creator', 'Price and limits': '$29/month; 300 min/month; no watermark' },
          { 'Plan': 'Hosted Pro', 'Price and limits': '$59/month; 750 min/month; no watermark' },
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements',
        content: [
          '**For self-hosting, the README lists Docker, Docker Compose and 8 GB or more of RAM, and describes a GPU as optional.**',
          'The default image is CPU-only. The maker says an 8-minute video takes 5 to 8 minutes on a typical CPU and about 50 seconds on its hosted NVIDIA GPU; those are maker figures, not PromptQuorum measurements.',
        ],
        columns: ['Item', 'Stated in the README'],
        rows: [
          { 'Item': 'Software', 'Stated in the README': 'Docker and Docker Compose' },
          { 'Item': 'System RAM', 'Stated in the README': '8 GB or more' },
          { 'Item': 'GPU', 'Stated in the README': 'Optional; NVIDIA with NVENC; 8 GB VRAM for large-v3-turbo' },
          { 'Item': 'Gemini API key', 'Stated in the README': 'Needed, or set LLM_BASE_URL for a local model' },
          { 'Item': 'Other keys', 'Stated in the README': 'fal.ai, ElevenLabs, Upload-Post for optional features' },
          { 'Item': 'Disk space', 'Stated in the README': 'Not stated' },
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The Clip Generator centres on moment detection, vertical reframing, captions and an editor; the rest of the project is optional extras.** The items below are maker statements from the README and website.',
        ],
        items: [
          'Moment detection: a language model scores the transcript and scene boundaries and returns 3 to 15 moments of 15 to 60 seconds, each with a virality score.',
          'Vertical reframing: face tracking per scene, a blurred-background layout, two speakers stacked with captions on the seam, and a screencast layout.',
          'Captions: word-level subtitles from faster-whisper, or Parakeet on a GPU, burned into the clip in several styles.',
          'Clip editor: word-level cuts from the transcript, extra segments, framing changes and re-renders.',
          'Hook overlays: an opening line written from what is said in the clip, editable in text, style and position.',
          'Dubbing: ElevenLabs voice dubbing in 30+ languages, with your own ElevenLabs key.',
          'Automation: a built-in MCP server, a REST API with completion webhooks, a command-line client and an agent skill file.',
          'Publishing: posting and scheduling to social networks through the Upload-Post service, with your own key when self-hosted.',
          'Extras: AI Shorts, which generates marketing videos with AI actors through fal.ai, and a YouTube Studio for titles, thumbnails and descriptions.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Where Your Video and Data Go',
        content: [
          '**OpenShorts is hybrid: some steps run on the machine that hosts it, and others call outside services.**',
          'According to the README, transcription, scene detection and face tracking run on the host. The moment picker sends the transcript, not the video, to Google Gemini by default. The README says that setting LLM_BASE_URL to an OpenAI-compatible server such as Ollama, LM Studio or vLLM keeps the clip pipeline on your own machine, but that layout picking, the on-screen content detector and silent videos still need Gemini; without a key those fall back to a plain face-tracking crop. It also says API keys entered in the dashboard are encrypted in the browser and not stored on the server.',
          'On the hosted service the video is uploaded to the operator. Its privacy policy says it processes the videos you submit, sends the transcript and sampled frames, which may show faces, to Google Gemini, sends audio to ElevenLabs when you ask for dubbing, and does not use your content to train AI models. It says free-plan clips are deleted after 7 days, names servers in Germany, and names the AEPD, the Spanish data protection authority, as the supervisory authority. PromptQuorum did not capture network traffic or verify these statements.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**OpenShorts fits people who want AI-assisted clipping of long recordings and value an open-source option.**',
        ],
        items: [
          'Podcasters, streamers and course creators who turn long recordings into shorts and want to try a free hosted plan first.',
          'Developers and agencies who want to self-host, change the pipeline, or call it through MCP, REST or the command line.',
          'Teams that prefer to keep source video on their own server and can accept Gemini calls for the moment picker, or run a local model.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        content: [
          '**OpenShorts is a weaker fit in some cases, and several points remain unverified.**',
        ],
        items: [
          'Not a fit: anyone who needs a fully offline pipeline today. Layout picking and silent videos still need Gemini, per the README.',
          'Not a fit: people who want a one-click desktop installer. There are no releases, and self-hosting needs Docker and a terminal.',
          'Unverified: clip quality, virality scores and speed. PromptQuorum ran no tests, and the speed figures are the maker\'s.',
          'Unverified: how well a local model replaces Gemini for moment picking. The README says 7-8B models return valid output reliably and 3B models do not; PromptQuorum did not test this.',
          'Unverified: an app version. The repository has no releases or tags; the MCP registry manifest says 1.0.0 and the command-line package on PyPI is 0.1.0, but neither is an app version.',
          'Unverified: the comparison tables on the website and README that rank OpenShorts against Opus Clip, Klap and Vizard. They are maker statements.',
          'Unverified: whether the hosted service meets any specific legal or compliance need. Read its privacy policy and terms first.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenShorts vs Alternatives',
        itemHeadings: true,
        content: [
          '**OpenShorts sits next to other open-source video tools in the directory, but they do different jobs, and PromptQuorum has not compared them hands-on.** The project\'s own tables name Opus Clip, Klap and Vizard as closed-source hosted clip tools; those tables are maker statements.',
        ],
        columns: ['Tool', 'Noted in its review'],
        rows: [
          { 'Tool': '[FunClip](/power-local-llm/funclip-review)', 'Noted in its review': 'Free, MIT, self-hosted; transcript-driven clipping with an LLM, closest in purpose' },
          { 'Tool': '[FableCut](/power-local-llm/fablecut-review)', 'Noted in its review': 'Free, MIT browser editor that AI agents drive over MCP; edits footage you already have' },
          { 'Tool': '[OpenMontage](/power-local-llm/openmontage-review)', 'Noted in its review': 'Free, AGPL-3.0 agentic pipeline that produces whole videos; not a clipper' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Is OpenShorts free?',
            a: 'Self-hosting is free, and you pay only for the optional outside services you connect, such as ElevenLabs dubbing. The hosted service is metered in source minutes, meaning the minutes of video you submit.',
          },
          {
            q: 'Can OpenShorts run without a Google key?',
            a: 'Partly. Per the README, setting LLM_BASE_URL to Ollama, LM Studio, vLLM or another OpenAI-compatible server replaces Gemini for moment picking, and the dashboard stops asking for a Gemini key. The README recommends raising the Ollama context length to 16384 tokens, because the default of 4096 truncates silently.',
          },
          {
            q: 'Does it work with Claude, ChatGPT or n8n?',
            a: 'The README describes a built-in MCP server, a hosted endpoint and a self-hosted /mcp path, a REST API with completion webhooks and an importable n8n workflow. The hosted MCP endpoint needs an account API key or an OAuth approval, while the README says a self-hosted copy needs no key.',
          },
          {
            q: 'Can I clip any YouTube video?',
            a: 'The tool accepts links and uploads, but the terms of the hosted service ask you to confirm that you hold the rights to every video you submit. Check copyright and the platform\'s terms first. This is general information, not legal advice.',
          },
          {
            q: 'How does the free hosted plan differ from self-hosting?',
            a: 'Per the pricing page, the free plan is download only, with no auto-posting and the 2 to 4 best clips of each video. Self-hosted has no minute cap and can post with your own Upload-Post account, while Autopilot is Cloud only.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**OpenShorts is worth trying if you want an open-source clip maker and accept that its AI steps depend on outside services by default.**',
          'On paper it covers the whole clip workflow, from transcription and moment picking to vertical reframing, captions, an editor, MCP and API access. The project is active, with a last commit on 19 November 2026, and a free hosted plan lets you judge the clips before you set anything up.',
          'The trade-offs are clear. The default setup sends transcripts to Google Gemini, a local model replaces only part of that step, there are no releases or version numbers, and self-hosting needs Docker and a terminal. PromptQuorum has not tested clip quality, so try it on a video you have the rights to use, and read the privacy policy before you upload anything sensitive.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[OpenShorts website](https://www.openshorts.app) — product description, pipeline, plans, checked 20 November 2026.',
          '[Pricing page](https://www.openshorts.app/pricing) — hosted plans, minutes, watermark and posting differences, checked 20 November 2026.',
          '[Privacy policy](https://www.openshorts.app/privacy) — operator, sub-processors, retention, supervisory authority, updated 17 November 2026, checked 20 November 2026.',
          '[Terms of service](https://www.openshorts.app/terms) — operator, content-rights promise, governing law, checked 20 November 2026.',
          '[GitHub repository](https://github.com/mutonby/openshorts) — source, license, no releases or tags, last commit on 19 November 2026, checked 20 November 2026.',
          '[README](https://github.com/mutonby/openshorts#readme) — features, requirements, Docker setup, local LLM option, MCP and API, license exception, checked 20 November 2026.',
          '[openshorts on PyPI](https://pypi.org/project/openshorts/) — command-line package, version 0.1.0, checked 20 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Image and Video AI Tools Compared](/power-local-llm/local-llm-images-video-compared) — image and video generation tools side by side.',
          '[FunClip Review](/power-local-llm/funclip-review) — a free tool that clips video from its transcript.',
          '[FableCut Review](/power-local-llm/fablecut-review) — a browser video editor that AI agents can drive.',
          '[OpenMontage Review](/power-local-llm/openmontage-review) — an agentic pipeline that produces whole videos.',
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
    next_refresh_due: '2027-05-20',
    theme: 'Image & Video Generation',
    heroImage: '/images/openshorts-review-hero-de.webp',
    title: 'OpenShorts im Test: quelloffener KI-Clip-Maker für vertikale Shorts',
    seoTitle: 'OpenShorts im Test: quelloffener KI-Clip-Maker für Shorts',
    intro:
      'OpenShorts ist ein quelloffenes Werkzeug, das ein langes Video, etwa einen Podcast, ein Webinar oder einen Stream, in kurze Hochformat-Clips mit Untertiteln für TikTok, Instagram Reels und YouTube Shorts verwandelt. Sie können es selbst mit Docker betreiben oder den gehosteten Dienst OpenShorts Cloud nutzen. Dieser Test stützt sich auf die Website, die Datenschutzerklärung und die Nutzungsbedingungen des Projekts sowie auf das GitHub-Repository mit README. PromptQuorum hat die Software nicht getestet.',
    metaDescription:
      'OpenShorts macht aus langen Videos Hochformat-Clips mit Untertiteln. Gratis selbst hosten oder Cloud nutzen. KI lokal oder Cloud, Preise, Datenschutz.',
    twitterDescription:
      'OpenShorts ist ein KI-Clip-Maker unter MIT-Lizenz für vertikale Shorts. Selbst hosten, gehostete Pläne, was lokal läuft, Datenschutz und offene Punkte.',
    audience:
      'Podcaster, Streamer, Creator und Entwickler, die lange Videos in Hochformat-Clips mit Untertiteln verwandeln möchten, mit oder ohne Selbst-Hosting',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenShorts',
    targetKeywords: [
      'OpenShorts Test',
      'OpenShorts',
      'quelloffener Clip-Maker',
      'selbst gehosteter KI-Clip-Generator',
      'langes Video zu Shorts',
      'OpusClip-Alternative',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenShorts ist ein quelloffener KI-Clip-Maker unter MIT-Lizenz, der die stärksten Momente eines langen Videos findet und Clips im Format 9:16 mit Untertiteln liefert, entweder selbst mit Docker gehostet oder über den gehosteten Dienst OpenShorts Cloud.** Standardmäßig ist er nicht vollständig lokal: Die Momentauswahl ruft Google Gemini auf, sofern Sie eine selbst gehostete Instanz nicht auf ein lokales Sprachmodell umstellen.',
    quickAnswerTop: {
      de: {
        question: 'Was ist OpenShorts, und läuft es wirklich lokal?',
        answer:
          'OpenShorts ist ein quelloffener Clip-Maker von TONVI TECH SL, der lange Videos in Hochformat-Clips mit Untertiteln schneidet. Transkription, Szenenerkennung und der Bildausschnitt mit Gesichtsverfolgung laufen auf dem Rechner, der es hostet; standardmäßig geht das Transkript jedoch an Google Gemini, um die Momente auszuwählen. Es ist also hybrid und nicht vollständig lokal.',
        bullets: [
          'Plattformen: gehostete Web-App oder selbst gehostet mit Docker Compose.',
          'Preis: Selbst-Hosting kostenlos; der gehostete Dienst beginnt mit einem kostenlosen Plan mit Wasserzeichen.',
          'Lizenz: MIT für die Kern-App, der Ordner cloud/ steht unter einer kommerziellen Lizenz.',
          'Hardware: Die README nennt Docker und mindestens 8 GB RAM; eine NVIDIA-GPU ist optional.',
          'Hersteller: TONVI TECH SL in Málaga, Spanien, laut Datenschutzerklärung.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'Überblick', anchor: 'overview' },
      { label: 'So bekommen Sie es', anchor: 'get-it' },
      { label: 'Preise und Lizenz', anchor: 'pricing-license' },
      { label: 'Anforderungen', anchor: 'requirements' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Wohin Ihr Video und Ihre Daten gehen', anchor: 'privacy' },
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
            text: 'OpenShorts ist ein quelloffenes Werkzeug, das lange Videos in Hochformat-Clips mit Untertiteln verwandelt, entweder auf Ihrem eigenen Docker-Host oder bei einem gehosteten Cloud-Dienst.',
          },
          {
            type: 'plain-terms',
            text: 'Sie geben einen YouTube-Link oder eine Videodatei ein. Das Werkzeug transkribiert die Sprache, fragt ein Sprachmodell, welche Momente sich zum Veröffentlichen eignen, schneidet sie heraus und beschneidet sie auf ein Hochformat um die sprechende Person. Das Sprachmodell ist standardmäßig Google Gemini; bei einer selbst gehosteten Instanz können Sie für diesen Schritt ein eigenes Modell einsetzen.',
          },
        ],
        items: [
          'Selbst-Hosting ist unter der MIT-Lizenz kostenlos und hat laut Hersteller weder Wasserzeichen noch Nutzungsgrenze; es braucht Docker, ein Terminal und etwa 8 GB RAM oder mehr.',
          'Die gehostete OpenShorts Cloud braucht keine Installation; ihr kostenloser Plan fügt ein Wasserzeichen hinzu, die bezahlten Pläne stehen unter Preise und Lizenz.',
          'Standardmäßig gehen das Transkript und bei einigen Funktionen Stichproben-Videobilder an Google Gemini; ein lokales Modell kann nur den Schritt der Momentauswahl ersetzen.',
          'Das Repository hat weder Releases noch Tags, daher gibt es keine App-Versionsnummer; der letzte Commit im Hauptzweig stammt vom 19. November 2026.',
          'Die Datenschutzerklärung und die Nutzungsbedingungen des gehosteten Dienstes nennen TONVI TECH SL in Málaga, Spanien, als Betreiber.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Videos anderer Personen sind meist urheberrechtlich geschützt. Die Nutzungsbedingungen des gehosteten Dienstes verlangen von Nutzern die Bestätigung, dass sie die Rechte an jedem eingereichten Video besitzen, und dieselbe Vorsicht gilt beim Selbst-Hosting. Klären Sie die Rechte und die Bedingungen der Quellplattform, bevor Sie ein fremdes Video schneiden und erneut veröffentlichen. Dies sind allgemeine Informationen, keine Rechtsberatung.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**OpenShorts ist ein KI-Clip-Maker: Er nimmt ein langes Video und liefert kurze Hochformat-Clips mit Untertiteln, Hook-Zeilen und Titeln.**',
          'Die README beschreibt drei Werkzeuge in einem Projekt: einen Clip Generator, AI Shorts (Marketingvideos mit KI-Schauspielern) und ein YouTube Studio für Titel, Thumbnails und Beschreibungen. Dieser Test konzentriert sich auf den Clip Generator, den Teil, mit dem das Repository beginnt. Laut README ist der Kern quelloffen unter der MIT-Lizenz, während der gehostete Dienst OpenShorts Cloud Abrechnung, verwaltete Schlüssel, automatisches Posten und einen Autopilot-Modus in bezahlten Plänen ergänzt.',
          'Laut Website nutzt die Pipeline faster-whisper für die Transkription mit Zeitstempeln pro Wort, PySceneDetect für Szenengrenzen, Google Gemini 3.1 Flash-Lite, um das Transkript zu bewerten und 3 bis 15 Momente von 15 bis 60 Sekunden auszuwählen, FFmpeg zum Schneiden der Clips sowie MediaPipe-Gesichtsverfolgung mit YOLOv8 als Rückfall, um sie auf 9:16 zuzuschneiden. Die README ergänzt Layouts mit zwei übereinander gestapelten Sprechern, ein Screencast-Layout und ein Layout mit unscharfem Hintergrund, die Gemini pro Video wählt oder die sich im Dashboard erzwingen lassen.',
          'Die Datenschutzerklärung und die Nutzungsbedingungen des gehosteten Dienstes nennen TONVI TECH SL, ein in Spanien gegründetes Unternehmen, als Betreiber. Alles hier Beschriebene sind Herstellerangaben; PromptQuorum hat die Software nicht ausgeführt und ihre Clips nicht mit anderen Werkzeugen verglichen.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So bekommen Sie es',
        content: [
          '**Sie können OpenShorts ohne Installation beim gehosteten Dienst nutzen oder per Docker aus dem GitHub-Repository selbst hosten; einen herunterladbaren Installer gibt es nicht.**',
          'Das Repository hat keine GitHub-Releases und keine Tags, daher bedeutet Selbst-Hosting ein git clone mit anschließendem Docker-Compose-Build. Die Schritte der README: Repository klonen, optional .env.example nach .env kopieren, docker compose up --build ausführen, das Dashboard auf Port 5175 öffnen und unter Einstellungen die API-Schlüssel eintragen. Für die Nutzung einer NVIDIA-GPU ergänzt die README eine Compose-Override-Datei und Umgebungseinstellungen.',
        ],
        columns: ['Option', 'So bekommen Sie es'],
        rows: [
          { 'Option': '[Gehostete OpenShorts Cloud](https://www.openshorts.app)', 'So bekommen Sie es': 'Anmelden und Videolink einfügen; keine Installation' },
          { 'Option': '[Selbst gehostet (Docker Compose)](https://github.com/mutonby/openshorts#getting-started)', 'So bekommen Sie es': 'git clone, docker compose up --build; Terminal nötig' },
          { 'Option': '[Website](https://www.openshorts.app)', 'So bekommen Sie es': 'Offizielle Seite, Preise und Anleitungen' },
          { 'Option': '[Datenschutzerklärung](https://www.openshorts.app/privacy)', 'So bekommen Sie es': 'Erklärung des gehosteten Dienstes' },
          { 'Option': '[Quellcode](https://github.com/mutonby/openshorts)', 'So bekommen Sie es': 'GitHub-Repository (MIT-Kern)' },
          { 'Option': '[Kommandozeilen-Client](https://pypi.org/project/openshorts/)', 'So bekommen Sie es': 'pip install openshorts; spricht mit einer OpenShorts-API' },
        ],
        note: 'Selbst-Hosting braucht ein Terminal und Docker; es ist also eine Entwickler-Einrichtung und keine Installation per Doppelklick. Laut README laufen die selbst gehostete Ausgabe und die Cloud mit derselben Software.',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: 'Preise und Lizenz',
        content: [
          '**Selbst-Hosting ist kostenlos, und die gehostete OpenShorts Cloud hat einen kostenlosen Plan mit Wasserzeichen sowie bezahlte Pläne in US-Dollar.** Die Preise unten stammen von der Preisseite, geprüft am 20. November 2026, und können sich ändern. Gehostete Pläne werden in Quellminuten gemessen, also in den Minuten des eingereichten Videos.',
          'Lizenz: Laut README ist die Kernanwendung unter der MIT-Lizenz lizenziert, mit einer Ausnahme. Das Verzeichnis cloud/ (Abrechnung, verwaltete Schlüssel und gehostete Infrastruktur) ist unter der OpenShorts Commercial License einsehbar, die Lesen, Ändern und Selbst-Hosting für persönliche oder interne Zwecke erlaubt, nicht aber das Anbieten für Dritte als bezahlten Dienst. Für das Selbst-Hosting der Kern-App ist dieses Verzeichnis nicht nötig. Optionale Funktionen rufen mit Ihren eigenen Schlüsseln weitere kostenpflichtige Dienste auf, etwa fal.ai für KI-Schauspieler-Videos, ElevenLabs für Vertonung und Upload-Post für das Posten; deren Kosten kommen hinzu.',
        ],
        columns: ['Plan', 'Preis und Grenzen'],
        rows: [
          { 'Plan': 'Selbst gehostet', 'Preis und Grenzen': 'Kostenlos, MIT; Hardware und API-Schlüssel stellen Sie' },
          { 'Plan': 'Gehostet Free', 'Preis und Grenzen': '$0; erstes Video bis 60 Min., dann 20 Min./Monat; Wasserzeichen' },
          { 'Plan': 'Gehostet Starter', 'Preis und Grenzen': '$12/Monat; 100 Min./Monat; ohne Wasserzeichen' },
          { 'Plan': 'Gehostet Creator', 'Preis und Grenzen': '$29/Monat; 300 Min./Monat; ohne Wasserzeichen' },
          { 'Plan': 'Gehostet Pro', 'Preis und Grenzen': '$59/Monat; 750 Min./Monat; ohne Wasserzeichen' },
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen',
        content: [
          '**Für das Selbst-Hosting nennt die README Docker, Docker Compose und mindestens 8 GB RAM und beschreibt eine GPU als optional.**',
          'Das Standard-Image läuft nur auf der CPU. Der Hersteller gibt an, ein 8-Minuten-Video brauche auf einer typischen CPU 5 bis 8 Minuten und auf seiner gehosteten NVIDIA-GPU etwa 50 Sekunden; das sind Herstellerangaben, keine Messungen von PromptQuorum.',
        ],
        columns: ['Punkt', 'Laut README'],
        rows: [
          { 'Punkt': 'Software', 'Laut README': 'Docker und Docker Compose' },
          { 'Punkt': 'Arbeitsspeicher', 'Laut README': '8 GB oder mehr' },
          { 'Punkt': 'GPU', 'Laut README': 'Optional; NVIDIA mit NVENC; 8 GB VRAM für large-v3-turbo' },
          { 'Punkt': 'Gemini-API-Schlüssel', 'Laut README': 'Nötig, oder LLM_BASE_URL für ein lokales Modell setzen' },
          { 'Punkt': 'Weitere Schlüssel', 'Laut README': 'fal.ai, ElevenLabs, Upload-Post für optionale Funktionen' },
          { 'Punkt': 'Speicherplatz', 'Laut README': 'Nicht angegeben' },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Der Clip Generator dreht sich um Momentauswahl, vertikalen Zuschnitt, Untertitel und einen Editor; der Rest des Projekts sind optionale Extras.** Die folgenden Punkte sind Herstellerangaben aus README und Website.',
        ],
        items: [
          'Momentauswahl: Ein Sprachmodell bewertet das Transkript und die Szenengrenzen und liefert 3 bis 15 Momente von 15 bis 60 Sekunden, jeweils mit einem Viralitätswert.',
          'Vertikaler Zuschnitt: Gesichtsverfolgung pro Szene, ein Layout mit unscharfem Hintergrund, zwei übereinander gestapelte Sprecher mit Untertiteln an der Nahtstelle und ein Screencast-Layout.',
          'Untertitel: Wortgenaue Untertitel von faster-whisper oder von Parakeet auf einer GPU, in mehreren Stilen in den Clip eingebrannt.',
          'Clip-Editor: wortgenaue Schnitte anhand des Transkripts, zusätzliche Segmente, Anpassungen des Bildausschnitts und erneutes Rendern.',
          'Hook-Einblendungen: eine Eröffnungszeile, die aus dem Gesagten im Clip entsteht und sich in Text, Stil und Position bearbeiten lässt.',
          'Vertonung: ElevenLabs-Synchronisation in über 30 Sprachen, mit Ihrem eigenen ElevenLabs-Schlüssel.',
          'Automatisierung: ein eingebauter MCP-Server, eine REST-API mit Abschluss-Webhooks, ein Kommandozeilen-Client und eine Agent-Skill-Datei.',
          'Veröffentlichen: Posten und Planen in sozialen Netzwerken über den Dienst Upload-Post, bei Selbst-Hosting mit Ihrem eigenen Schlüssel.',
          'Extras: AI Shorts, das Marketingvideos mit KI-Schauspielern über fal.ai erzeugt, und ein YouTube Studio für Titel, Thumbnails und Beschreibungen.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Wohin Ihr Video und Ihre Daten gehen',
        content: [
          '**OpenShorts ist hybrid: Einige Schritte laufen auf dem Rechner, der es hostet, andere rufen externe Dienste auf.**',
          'Laut README laufen Transkription, Szenenerkennung und Gesichtsverfolgung auf dem Host. Die Momentauswahl sendet standardmäßig das Transkript, nicht das Video, an Google Gemini. Die README sagt, dass das Setzen von LLM_BASE_URL auf einen OpenAI-kompatiblen Server wie Ollama, LM Studio oder vLLM die Clip-Pipeline auf Ihrem eigenen Rechner hält, dass aber Layout-Auswahl, der Detektor für Bildschirminhalte und stumme Videos weiterhin Gemini brauchen; ohne Schlüssel fallen diese auf einen einfachen Zuschnitt mit Gesichtsverfolgung zurück. Außerdem sagt sie, im Dashboard eingegebene API-Schlüssel würden im Browser verschlüsselt und nicht auf dem Server gespeichert.',
          'Beim gehosteten Dienst wird das Video zum Betreiber hochgeladen. Laut Datenschutzerklärung verarbeitet er die eingereichten Videos, sendet das Transkript und Stichprobenbilder, die Gesichter zeigen können, an Google Gemini, sendet Audio an ElevenLabs, wenn Sie eine Vertonung anfordern, und verwendet Ihre Inhalte nicht zum Training von KI-Modellen. Sie sagt, Clips des kostenlosen Plans würden nach 7 Tagen gelöscht, nennt Server in Deutschland und nennt die AEPD, die spanische Datenschutzbehörde, als Aufsichtsbehörde. PromptQuorum hat keinen Netzwerkverkehr mitgeschnitten und diese Aussagen nicht überprüft.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**OpenShorts passt zu Menschen, die lange Aufnahmen KI-gestützt zu Clips schneiden möchten und eine quelloffene Option schätzen.**',
        ],
        items: [
          'Podcaster, Streamer und Kursersteller, die lange Aufnahmen in Shorts verwandeln und zuerst einen kostenlosen gehosteten Plan ausprobieren möchten.',
          'Entwickler und Agenturen, die selbst hosten, die Pipeline ändern oder sie über MCP, REST oder die Kommandozeile aufrufen möchten.',
          'Teams, die Quellvideos lieber auf dem eigenen Server behalten und Gemini-Aufrufe für die Momentauswahl akzeptieren oder ein lokales Modell betreiben können.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        content: [
          '**OpenShorts passt in manchen Fällen schlechter, und mehrere Punkte bleiben ungeprüft.**',
        ],
        items: [
          'Nicht geeignet: wer heute eine vollständig offline laufende Pipeline braucht. Layout-Auswahl und stumme Videos brauchen laut README weiterhin Gemini.',
          'Nicht geeignet: wer einen Desktop-Installer per Klick möchte. Es gibt keine Releases, und Selbst-Hosting braucht Docker und ein Terminal.',
          'Ungeprüft: Clip-Qualität, Viralitätswerte und Geschwindigkeit. PromptQuorum hat keine Tests durchgeführt, und die Geschwindigkeitsangaben stammen vom Hersteller.',
          'Ungeprüft: wie gut ein lokales Modell Gemini bei der Momentauswahl ersetzt. Die README sagt, 7-8B-Modelle lieferten zuverlässig gültige Ausgaben, 3B-Modelle nicht; PromptQuorum hat das nicht getestet.',
          'Ungeprüft: eine App-Version. Das Repository hat weder Releases noch Tags; das MCP-Registry-Manifest nennt 1.0.0 und das Kommandozeilenpaket auf PyPI 0.1.0, doch beides ist keine App-Version.',
          'Ungeprüft: die Vergleichstabellen auf Website und README, die OpenShorts gegen Opus Clip, Klap und Vizard einordnen. Es sind Herstellerangaben.',
          'Ungeprüft: ob der gehostete Dienst einen bestimmten rechtlichen oder Compliance-Bedarf erfüllt. Lesen Sie zuerst Datenschutzerklärung und Nutzungsbedingungen.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenShorts im Vergleich zu Alternativen',
        itemHeadings: true,
        content: [
          '**OpenShorts steht im Verzeichnis neben anderen quelloffenen Videowerkzeugen, doch diese erledigen andere Aufgaben, und PromptQuorum hat sie nicht praktisch verglichen.** Die eigenen Tabellen des Projekts nennen Opus Clip, Klap und Vizard als proprietäre gehostete Clip-Werkzeuge; diese Tabellen sind Herstellerangaben.',
        ],
        columns: ['Werkzeug', 'Laut eigenem Test'],
        rows: [
          { 'Werkzeug': '[FunClip](/de/power-local-llm/funclip-review)', 'Laut eigenem Test': 'Kostenlos, MIT, selbst gehostet; transkriptgesteuertes Clipping mit einem LLM, im Zweck am nächsten' },
          { 'Werkzeug': '[FableCut](/de/power-local-llm/fablecut-review)', 'Laut eigenem Test': 'Kostenloser MIT-Browser-Editor, den KI-Agenten über MCP steuern; bearbeitet vorhandenes Material' },
          { 'Werkzeug': '[OpenMontage](/de/power-local-llm/openmontage-review)', 'Laut eigenem Test': 'Kostenlose agentische AGPL-3.0-Pipeline, die ganze Videos erzeugt; kein Clipper' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Ist OpenShorts kostenlos?',
            a: 'Selbst-Hosting ist kostenlos, und Sie zahlen nur für die optionalen externen Dienste, die Sie anbinden, etwa die ElevenLabs-Vertonung. Der gehostete Dienst wird in Quellminuten gemessen, also in den Minuten des eingereichten Videos.',
          },
          {
            q: 'Läuft OpenShorts ohne Google-Schlüssel?',
            a: 'Teilweise. Laut README ersetzt das Setzen von LLM_BASE_URL auf Ollama, LM Studio, vLLM oder einen anderen OpenAI-kompatiblen Server Gemini bei der Momentauswahl, und das Dashboard fragt dann nicht mehr nach einem Gemini-Schlüssel. Die README empfiehlt, die Ollama-Kontextlänge auf 16384 Token zu erhöhen, weil der Standardwert von 4096 stillschweigend abschneidet.',
          },
          {
            q: 'Funktioniert es mit Claude, ChatGPT oder n8n?',
            a: 'Die README beschreibt einen eingebauten MCP-Server, einen gehosteten Endpunkt und einen selbst gehosteten Pfad /mcp, eine REST-API mit Abschluss-Webhooks und einen importierbaren n8n-Workflow. Der gehostete MCP-Endpunkt braucht einen API-Schlüssel des Kontos oder eine OAuth-Freigabe, während eine selbst gehostete Instanz laut README keinen Schlüssel braucht.',
          },
          {
            q: 'Darf ich jedes YouTube-Video schneiden?',
            a: 'Das Werkzeug akzeptiert Links und Uploads, doch die Nutzungsbedingungen des gehosteten Dienstes verlangen die Bestätigung, dass Sie die Rechte an jedem eingereichten Video besitzen. Klären Sie zuerst Urheberrecht und Plattformbedingungen. Dies sind allgemeine Informationen, keine Rechtsberatung.',
          },
          {
            q: 'Wie unterscheidet sich der kostenlose gehostete Plan vom Selbst-Hosting?',
            a: 'Laut Preisseite ist der kostenlose Plan nur zum Herunterladen, ohne automatisches Posten und mit den 2 bis 4 besten Clips pro Video. Selbst gehostet gibt es keine Minutengrenze, und mit einem eigenen Upload-Post-Konto lässt sich posten, während Autopilot nur in der Cloud verfügbar ist.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**OpenShorts ist einen Versuch wert, wenn Sie einen quelloffenen Clip-Maker wollen und akzeptieren, dass seine KI-Schritte standardmäßig von externen Diensten abhängen.**',
          'Auf dem Papier deckt es den gesamten Clip-Ablauf ab, von Transkription und Momentauswahl über vertikalen Zuschnitt und Untertitel bis zu Editor, MCP- und API-Zugang. Das Projekt ist aktiv, mit dem letzten Commit am 19. November 2026, und ein kostenloser gehosteter Plan lässt Sie die Clips beurteilen, bevor Sie etwas einrichten.',
          'Die Kompromisse sind klar. Die Standardeinrichtung sendet Transkripte an Google Gemini, ein lokales Modell ersetzt nur einen Teil dieses Schritts, es gibt weder Releases noch Versionsnummern, und Selbst-Hosting braucht Docker und ein Terminal. PromptQuorum hat die Clip-Qualität nicht getestet; probieren Sie es an einem Video aus, dessen Nutzung Ihnen erlaubt ist, und lesen Sie die Datenschutzerklärung, bevor Sie etwas Sensibles hochladen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[OpenShorts-Website](https://www.openshorts.app) — Produktbeschreibung, Pipeline, Pläne, geprüft am 20. November 2026.',
          '[Preisseite](https://www.openshorts.app/pricing) — gehostete Pläne, Minuten, Wasserzeichen und Unterschiede beim Posten, geprüft am 20. November 2026.',
          '[Datenschutzerklärung](https://www.openshorts.app/privacy) — Betreiber, Unterauftragsverarbeiter, Aufbewahrung, Aufsichtsbehörde, aktualisiert am 17. November 2026, geprüft am 20. November 2026.',
          '[Nutzungsbedingungen](https://www.openshorts.app/terms) — Betreiber, Zusicherung zu Inhaltsrechten, anwendbares Recht, geprüft am 20. November 2026.',
          '[GitHub-Repository](https://github.com/mutonby/openshorts) — Quellcode, Lizenz, keine Releases oder Tags, letzter Commit am 19. November 2026, geprüft am 20. November 2026.',
          '[README](https://github.com/mutonby/openshorts#readme) — Funktionen, Anforderungen, Docker-Einrichtung, Option für lokales LLM, MCP und API, Lizenzausnahme, geprüft am 20. November 2026.',
          '[openshorts auf PyPI](https://pypi.org/project/openshorts/) — Kommandozeilenpaket, Version 0.1.0, geprüft am 20. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokale Bild- und Video-KI-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-images-video-compared) — Werkzeuge für Bild- und Videogenerierung nebeneinander.',
          '[FunClip-Test](/de/power-local-llm/funclip-review) — ein kostenloses Werkzeug, das Videos anhand ihres Transkripts schneidet.',
          '[FableCut-Test](/de/power-local-llm/fablecut-review) — ein Browser-Videoeditor, den KI-Agenten steuern können.',
          '[OpenMontage-Test](/de/power-local-llm/openmontage-review) — eine agentische Pipeline, die ganze Videos erzeugt.',
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
    next_refresh_due: '2027-05-20',
    theme: 'Image & Video Generation',
    heroImage: '/images/openshorts-review-hero-es.webp',
    title: 'Análisis de OpenShorts: generador de clips con IA de código abierto para shorts verticales',
    seoTitle: 'OpenShorts: análisis del generador de clips con IA',
    intro:
      'OpenShorts es una herramienta de código abierto que convierte un vídeo largo, como un pódcast, un webinar o un directo, en clips verticales cortos con subtítulos para TikTok, Instagram Reels y YouTube Shorts. Puedes ejecutarla tú mismo con Docker o usar el servicio alojado OpenShorts Cloud. Este análisis se basa en el sitio web, la política de privacidad y los términos del proyecto, y en el repositorio de GitHub con su README. PromptQuorum no ha probado el software.',
    metaDescription:
      'OpenShorts convierte vídeos largos en clips verticales subtitulados. Autoalójalo gratis o usa la nube. IA local o en la nube, precios y privacidad.',
    twitterDescription:
      'OpenShorts es un generador de clips con IA bajo licencia MIT para shorts verticales. Autoalojamiento, planes alojados, qué corre en local, privacidad y dudas.',
    audience:
      'Podcasters, streamers, creadores y desarrolladores que quieren convertir vídeos largos en clips verticales con subtítulos, con o sin autoalojamiento',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenShorts',
    targetKeywords: [
      'análisis de OpenShorts',
      'OpenShorts',
      'generador de clips de código abierto',
      'generador de clips con IA autoalojado',
      'vídeo largo a shorts',
      'alternativa a OpusClip',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenShorts es un generador de clips con IA de código abierto y licencia MIT que encuentra los mejores momentos de un vídeo largo y devuelve clips 9:16 con subtítulos, ya sea autoalojado con Docker o en el servicio alojado OpenShorts Cloud.** Por defecto no es totalmente local: el selector de momentos llama a Google Gemini, salvo que apuntes una copia autoalojada a un modelo de lenguaje local.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es OpenShorts y es de verdad local?',
        answer:
          'OpenShorts es un generador de clips de código abierto de TONVI TECH SL que corta vídeos largos en clips verticales con subtítulos. La transcripción, la detección de escenas y el reencuadre con seguimiento facial se ejecutan en la máquina que lo aloja, pero por defecto la transcripción va a Google Gemini para elegir los momentos, así que es híbrido y no totalmente local.',
        bullets: [
          'Plataformas: app web alojada o autoalojada con Docker Compose.',
          'Precio: gratis si lo autoalojas; el servicio alojado empieza con un plan gratuito con marca de agua.',
          'Licencia: MIT para la app principal; la carpeta cloud/ tiene una licencia comercial.',
          'Hardware: el README indica Docker y 8 GB o más de RAM; una GPU NVIDIA es opcional.',
          'Responsable: TONVI TECH SL en Málaga, España, según la política de privacidad.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Resumen', anchor: 'overview' },
      { label: 'Cómo conseguirlo', anchor: 'get-it' },
      { label: 'Precios y licencia', anchor: 'pricing-license' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Adónde van tu vídeo y tus datos', anchor: 'privacy' },
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
            text: 'OpenShorts es una herramienta de código abierto que convierte vídeos largos en clips verticales con subtítulos, en tu propio host Docker o en un servicio en la nube alojado.',
          },
          {
            type: 'plain-terms',
            text: 'Le das un enlace de YouTube o un archivo de vídeo. Transcribe el audio, pregunta a un modelo de lenguaje qué momentos merece la pena publicar, los recorta y los encuadra en vertical alrededor de quien habla. El modelo de lenguaje es Google Gemini por defecto; en una copia autoalojada puedes sustituirlo por tu propio modelo en ese paso.',
          },
        ],
        items: [
          'El autoalojamiento es gratis con licencia MIT y, según el responsable, no tiene marca de agua ni límite de uso; necesita Docker, una terminal y unos 8 GB de RAM o más.',
          'OpenShorts Cloud, el servicio alojado, no requiere instalación; su plan gratuito añade una marca de agua y los planes de pago figuran en Precios y licencia.',
          'Por defecto la transcripción y, en algunas funciones, fotogramas de muestra van a Google Gemini; un modelo local solo puede sustituir el paso de selección de momentos.',
          'El repositorio no tiene releases ni etiquetas, así que no hay número de versión de la app; el último commit de la rama principal es del 19 de noviembre de 2026.',
          'La política de privacidad y los términos del servicio alojado nombran a TONVI TECH SL, en Málaga, España, como operador.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Los vídeos de otras personas suelen estar protegidos por derechos de autor. Los términos del servicio alojado piden a los usuarios que confirmen que tienen los derechos de cada vídeo que envían, y la misma cautela vale si lo autoalojas. Comprueba los derechos y los términos de la plataforma de origen antes de recortar y volver a publicar el vídeo de otra persona. Es información general, no asesoramiento jurídico.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen',
        content: [
          '**OpenShorts es un generador de clips con IA: toma un vídeo largo y devuelve clips verticales cortos con subtítulos, frases de gancho y títulos.**',
          'El README describe tres herramientas en un solo proyecto: un Clip Generator, AI Shorts (vídeos de marketing con actores de IA) y un YouTube Studio para títulos, miniaturas y descripciones. Este análisis se centra en el Clip Generator, la parte con la que abre el repositorio. El README dice que el núcleo es de código abierto con licencia MIT, mientras que el servicio alojado, OpenShorts Cloud, añade facturación, claves gestionadas, publicación automática y un modo Autopilot en los planes de pago.',
          'Según el sitio web, el flujo usa faster-whisper para la transcripción con marcas de tiempo por palabra, PySceneDetect para los límites de escena, Google Gemini 3.1 Flash-Lite para puntuar la transcripción y elegir de 3 a 15 momentos de 15 a 60 segundos, FFmpeg para cortar los clips y seguimiento facial con MediaPipe, con YOLOv8 como alternativa, para reencuadrarlos a 9:16. El README añade diseños con dos hablantes apilados, un diseño de screencast y un diseño con fondo desenfocado, elegidos por vídeo por Gemini o forzados desde el panel.',
          'La política de privacidad y los términos del servicio alojado nombran como operador a TONVI TECH SL, una empresa constituida en España. Todo lo descrito aquí son afirmaciones del responsable; PromptQuorum no ha ejecutado el software ni ha comparado sus clips con los de otras herramientas.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirlo',
        content: [
          '**Puedes usar OpenShorts en el servicio alojado sin instalar nada, o autoalojarlo con Docker desde el repositorio de GitHub; no hay instalador descargable.**',
          'El repositorio no tiene GitHub Releases ni etiquetas, así que autoalojarlo significa un git clone seguido de una compilación con Docker Compose. Los pasos del README son: clonar el repositorio, copiar opcionalmente .env.example a .env, ejecutar docker compose up --build, abrir el panel en el puerto 5175 e introducir las claves de API en Ajustes. Para usar una GPU NVIDIA, el README añade un archivo de override de Compose y ajustes de entorno.',
        ],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
          { 'Opción': '[OpenShorts Cloud alojado](https://www.openshorts.app)', 'Cómo conseguirlo': 'Inicia sesión y pega un enlace de vídeo; sin instalar' },
          { 'Opción': '[Autoalojado (Docker Compose)](https://github.com/mutonby/openshorts#getting-started)', 'Cómo conseguirlo': 'git clone, docker compose up --build; requiere terminal' },
          { 'Opción': '[Sitio web](https://www.openshorts.app)', 'Cómo conseguirlo': 'Sitio oficial, precios y guías' },
          { 'Opción': '[Política de privacidad](https://www.openshorts.app/privacy)', 'Cómo conseguirlo': 'Política del servicio alojado' },
          { 'Opción': '[Código fuente](https://github.com/mutonby/openshorts)', 'Cómo conseguirlo': 'Repositorio de GitHub (núcleo MIT)' },
          { 'Opción': '[Cliente de línea de comandos](https://pypi.org/project/openshorts/)', 'Cómo conseguirlo': 'pip install openshorts; habla con una API de OpenShorts' },
        ],
        note: 'El autoalojamiento necesita una terminal y Docker, así que es una instalación de estilo desarrollador, no un doble clic. El README dice que la edición autoalojada y la nube ejecutan el mismo software.',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: 'Precios y licencia',
        content: [
          '**Autoalojarlo es gratis, y OpenShorts Cloud tiene un plan gratuito con marca de agua y planes de pago en dólares estadounidenses.** Los precios de abajo proceden de la página de precios consultada el 20 de noviembre de 2026 y pueden cambiar. Los planes alojados se miden en minutos de origen, es decir, los minutos de vídeo que envías.',
          'Licencia: el README dice que la aplicación principal tiene licencia MIT, con una excepción. El directorio cloud/ (facturación, claves gestionadas e infraestructura alojada) tiene el código disponible bajo la OpenShorts Commercial License, que permite leerlo, modificarlo y autoalojarlo para uso personal o interno, pero no ofrecerlo a terceros como servicio de pago. Autoalojar la app principal no requiere ese directorio. Las funciones opcionales llaman a otros servicios de pago con tus propias claves, como fal.ai para vídeos con actores de IA, ElevenLabs para el doblaje y Upload-Post para publicar; sus costes son aparte.',
        ],
        columns: ['Plan', 'Precio y límites'],
        rows: [
          { 'Plan': 'Autoalojado', 'Precio y límites': 'Gratis, MIT; tú pones hardware y claves de API' },
          { 'Plan': 'Alojado Free', 'Precio y límites': '$0; primer vídeo hasta 60 min, luego 20 min/mes; marca de agua' },
          { 'Plan': 'Alojado Starter', 'Precio y límites': '$12/mes; 100 min/mes; sin marca de agua' },
          { 'Plan': 'Alojado Creator', 'Precio y límites': '$29/mes; 300 min/mes; sin marca de agua' },
          { 'Plan': 'Alojado Pro', 'Precio y límites': '$59/mes; 750 min/mes; sin marca de agua' },
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**Para autoalojarlo, el README indica Docker, Docker Compose y 8 GB o más de RAM, y describe la GPU como opcional.**',
          'La imagen por defecto usa solo CPU. El responsable dice que un vídeo de 8 minutos tarda de 5 a 8 minutos en una CPU típica y unos 50 segundos en su GPU NVIDIA alojada; son cifras del responsable, no mediciones de PromptQuorum.',
        ],
        columns: ['Elemento', 'Según el README'],
        rows: [
          { 'Elemento': 'Software', 'Según el README': 'Docker y Docker Compose' },
          { 'Elemento': 'RAM del sistema', 'Según el README': '8 GB o más' },
          { 'Elemento': 'GPU', 'Según el README': 'Opcional; NVIDIA con NVENC; 8 GB de VRAM para large-v3-turbo' },
          { 'Elemento': 'Clave de API de Gemini', 'Según el README': 'Necesaria, o define LLM_BASE_URL para un modelo local' },
          { 'Elemento': 'Otras claves', 'Según el README': 'fal.ai, ElevenLabs, Upload-Post en funciones opcionales' },
          { 'Elemento': 'Espacio en disco', 'Según el README': 'No consta' },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El Clip Generator gira en torno a la detección de momentos, el reencuadre vertical, los subtítulos y un editor; el resto del proyecto son extras opcionales.** Los puntos siguientes son afirmaciones del responsable tomadas del README y del sitio web.',
        ],
        items: [
          'Detección de momentos: un modelo de lenguaje puntúa la transcripción y los límites de escena y devuelve de 3 a 15 momentos de 15 a 60 segundos, cada uno con una puntuación de viralidad.',
          'Reencuadre vertical: seguimiento facial por escena, un diseño con fondo desenfocado, dos hablantes apilados con los subtítulos en la unión y un diseño de screencast.',
          'Subtítulos: subtítulos palabra por palabra de faster-whisper, o de Parakeet en una GPU, incrustados en el clip en varios estilos.',
          'Editor de clips: cortes por palabra a partir de la transcripción, segmentos adicionales, cambios de encuadre y nuevos renders.',
          'Textos de gancho: una frase de apertura redactada a partir de lo que se dice en el clip, editable en texto, estilo y posición.',
          'Doblaje: doblaje de voz con ElevenLabs en más de 30 idiomas, con tu propia clave de ElevenLabs.',
          'Automatización: un servidor MCP integrado, una API REST con webhooks de finalización, un cliente de línea de comandos y un archivo de skill para agentes.',
          'Publicación: publicar y programar en redes sociales mediante el servicio Upload-Post, con tu propia clave si lo autoalojas.',
          'Extras: AI Shorts, que genera vídeos de marketing con actores de IA mediante fal.ai, y un YouTube Studio para títulos, miniaturas y descripciones.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Adónde van tu vídeo y tus datos',
        content: [
          '**OpenShorts es híbrido: algunos pasos se ejecutan en la máquina que lo aloja y otros llaman a servicios externos.**',
          'Según el README, la transcripción, la detección de escenas y el seguimiento facial se ejecutan en el host. El selector de momentos envía por defecto la transcripción, no el vídeo, a Google Gemini. El README dice que definir LLM_BASE_URL con un servidor compatible con OpenAI, como Ollama, LM Studio o vLLM, mantiene el flujo de clips en tu propia máquina, pero que la elección de diseño, el detector de contenido en pantalla y los vídeos sin voz siguen necesitando Gemini; sin clave, esas funciones recurren a un recorte simple con seguimiento facial. También dice que las claves de API introducidas en el panel se cifran en el navegador y no se guardan en el servidor.',
          'En el servicio alojado el vídeo se sube al operador. Su política de privacidad dice que procesa los vídeos que envías, envía la transcripción y fotogramas de muestra, que pueden mostrar rostros, a Google Gemini, envía audio a ElevenLabs cuando pides doblaje y no usa tu contenido para entrenar modelos de IA. Dice que los clips del plan gratuito se eliminan a los 7 días, menciona servidores en Alemania y nombra a la AEPD, la autoridad española de protección de datos, como autoridad de control. PromptQuorum no capturó tráfico de red ni verificó estas afirmaciones.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**OpenShorts encaja con quienes quieren recortar grabaciones largas con ayuda de la IA y valoran una opción de código abierto.**',
        ],
        items: [
          'Podcasters, streamers y creadores de cursos que convierten grabaciones largas en shorts y quieren probar primero un plan alojado gratuito.',
          'Desarrolladores y agencias que quieren autoalojarlo, modificar el flujo o llamarlo mediante MCP, REST o la línea de comandos.',
          'Equipos que prefieren mantener el vídeo de origen en su propio servidor y pueden aceptar llamadas a Gemini para el selector de momentos o ejecutar un modelo local.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        content: [
          '**OpenShorts encaja peor en algunos casos y varios puntos siguen sin verificar.**',
        ],
        items: [
          'No encaja: quien necesite hoy un flujo totalmente sin conexión. La elección de diseño y los vídeos sin voz siguen necesitando Gemini, según el README.',
          'No encaja: quien quiera un instalador de escritorio con un clic. No hay releases y el autoalojamiento requiere Docker y una terminal.',
          'Sin verificar: la calidad de los clips, las puntuaciones de viralidad y la velocidad. PromptQuorum no hizo pruebas y las cifras de velocidad son del responsable.',
          'Sin verificar: lo bien que un modelo local sustituye a Gemini para elegir momentos. El README dice que los modelos de 7-8B devuelven resultados válidos de forma fiable y los de 3B no; PromptQuorum no lo probó.',
          'Sin verificar: una versión de la app. El repositorio no tiene releases ni etiquetas; el manifiesto del registro MCP indica 1.0.0 y el paquete de línea de comandos en PyPI es 0.1.0, pero ninguna es una versión de la app.',
          'Sin verificar: las tablas comparativas del sitio web y del README que sitúan a OpenShorts frente a Opus Clip, Klap y Vizard. Son afirmaciones del responsable.',
          'Sin verificar: si el servicio alojado cumple una necesidad legal o de cumplimiento concreta. Lee antes su política de privacidad y sus términos.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenShorts frente a las alternativas',
        itemHeadings: true,
        content: [
          '**OpenShorts comparte directorio con otras herramientas de vídeo de código abierto, pero hacen trabajos distintos y PromptQuorum no las ha comparado en la práctica.** Las tablas del propio proyecto nombran a Opus Clip, Klap y Vizard como herramientas de clips alojadas y de código cerrado; esas tablas son afirmaciones del responsable.',
        ],
        columns: ['Herramienta', 'Según su análisis'],
        rows: [
          { 'Herramienta': '[FunClip](/es/power-local-llm/funclip-review)', 'Según su análisis': 'Gratis, MIT, autoalojado; recortes guiados por la transcripción con un LLM, el más cercano en propósito' },
          { 'Herramienta': '[FableCut](/es/power-local-llm/fablecut-review)', 'Según su análisis': 'Editor de navegador gratis y MIT que los agentes de IA manejan por MCP; edita material que ya tienes' },
          { 'Herramienta': '[OpenMontage](/es/power-local-llm/openmontage-review)', 'Según su análisis': 'Flujo agéntico gratis y AGPL-3.0 que produce vídeos completos; no es un generador de clips' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿OpenShorts es gratis?',
            a: 'Autoalojarlo es gratis y solo pagas los servicios externos opcionales que conectes, como el doblaje de ElevenLabs. El servicio alojado se mide en minutos de origen, es decir, los minutos de vídeo que envías.',
          },
          {
            q: '¿Puede OpenShorts funcionar sin clave de Google?',
            a: 'En parte. Según el README, definir LLM_BASE_URL con Ollama, LM Studio, vLLM u otro servidor compatible con OpenAI sustituye a Gemini en la selección de momentos, y el panel deja de pedir una clave de Gemini. El README recomienda subir la longitud de contexto de Ollama a 16384 tokens, porque el valor por defecto de 4096 trunca en silencio.',
          },
          {
            q: '¿Funciona con Claude, ChatGPT o n8n?',
            a: 'El README describe un servidor MCP integrado, un endpoint alojado y una ruta /mcp autoalojada, una API REST con webhooks de finalización y un flujo de n8n importable. El endpoint MCP alojado necesita una clave de API de la cuenta o una aprobación OAuth, mientras que según el README una copia autoalojada no necesita clave.',
          },
          {
            q: '¿Puedo recortar cualquier vídeo de YouTube?',
            a: 'La herramienta acepta enlaces y subidas, pero los términos del servicio alojado piden que confirmes que tienes los derechos de cada vídeo que envías. Comprueba antes los derechos de autor y los términos de la plataforma. Es información general, no asesoramiento jurídico.',
          },
          {
            q: '¿En qué se diferencia el plan gratuito alojado del autoalojamiento?',
            a: 'Según la página de precios, el plan gratuito es solo de descarga, sin publicación automática y con los 2 a 4 mejores clips de cada vídeo. Autoalojado no hay límite de minutos y se puede publicar con tu propia cuenta de Upload-Post, mientras que Autopilot es solo de la nube.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**OpenShorts merece una prueba si quieres un generador de clips de código abierto y aceptas que sus pasos de IA dependen por defecto de servicios externos.**',
          'Sobre el papel cubre todo el flujo de clips, desde la transcripción y la elección de momentos hasta el reencuadre vertical, los subtítulos, un editor y el acceso por MCP y API. El proyecto está activo, con el último commit el 19 de noviembre de 2026, y un plan alojado gratuito te permite juzgar los clips antes de configurar nada.',
          'Los inconvenientes son claros. La configuración por defecto envía transcripciones a Google Gemini, un modelo local sustituye solo una parte de ese paso, no hay releases ni números de versión y el autoalojamiento requiere Docker y una terminal. PromptQuorum no ha probado la calidad de los clips, así que pruébalo con un vídeo cuyo uso te esté permitido y lee la política de privacidad antes de subir nada sensible.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de OpenShorts](https://www.openshorts.app) — descripción del producto, flujo, planes, consultado el 20 de noviembre de 2026.',
          '[Página de precios](https://www.openshorts.app/pricing) — planes alojados, minutos, marca de agua y diferencias de publicación, consultada el 20 de noviembre de 2026.',
          '[Política de privacidad](https://www.openshorts.app/privacy) — operador, subencargados, conservación, autoridad de control, actualizada el 17 de noviembre de 2026, consultada el 20 de noviembre de 2026.',
          '[Términos del servicio](https://www.openshorts.app/terms) — operador, compromiso sobre derechos del contenido, ley aplicable, consultados el 20 de noviembre de 2026.',
          '[Repositorio de GitHub](https://github.com/mutonby/openshorts) — código, licencia, sin releases ni etiquetas, último commit el 19 de noviembre de 2026, consultado el 20 de noviembre de 2026.',
          '[README](https://github.com/mutonby/openshorts#readme) — funciones, requisitos, instalación con Docker, opción de LLM local, MCP y API, excepción de licencia, consultado el 20 de noviembre de 2026.',
          '[openshorts en PyPI](https://pypi.org/project/openshorts/) — paquete de línea de comandos, versión 0.1.0, consultado el 20 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Herramientas locales de IA para imagen y vídeo comparadas](/es/power-local-llm/local-llm-images-video-compared) — herramientas de generación de imagen y vídeo lado a lado.',
          '[Análisis de FunClip](/es/power-local-llm/funclip-review) — una herramienta gratuita que recorta vídeo a partir de su transcripción.',
          '[Análisis de FableCut](/es/power-local-llm/fablecut-review) — un editor de vídeo en el navegador que los agentes de IA pueden manejar.',
          '[Análisis de OpenMontage](/es/power-local-llm/openmontage-review) — un flujo agéntico que produce vídeos completos.',
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
    next_refresh_due: '2027-05-20',
    theme: 'Image & Video Generation',
    heroImage: '/images/openshorts-review-hero-fr.webp',
    title: 'Test d\'OpenShorts : générateur de clips IA open source pour shorts verticaux',
    seoTitle: 'Test d\'OpenShorts : générateur de clips IA open source',
    intro:
      'OpenShorts est un outil open source qui transforme une longue vidéo, comme un podcast, un webinaire ou un live, en clips verticaux courts avec sous-titres pour TikTok, Instagram Reels et YouTube Shorts. Vous pouvez l\'exécuter vous-même avec Docker ou utiliser le service hébergé OpenShorts Cloud. Ce test s\'appuie sur le site web, la politique de confidentialité et les conditions du projet, ainsi que sur le dépôt GitHub et son README. PromptQuorum n\'a pas testé le logiciel.',
    metaDescription:
      'OpenShorts transforme de longues vidéos en clips verticaux sous-titrés. Auto-hébergement gratuit ou cloud. IA locale ou cloud, tarifs, vie privée.',
    twitterDescription:
      'OpenShorts est un générateur de clips IA sous licence MIT pour shorts verticaux. Auto-hébergement, offres hébergées, ce qui tourne en local, confidentialité et points ouverts.',
    audience:
      'Podcasteurs, streamers, créateurs et développeurs qui veulent transformer de longues vidéos en clips verticaux sous-titrés, avec ou sans auto-hébergement',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenShorts',
    targetKeywords: [
      'test OpenShorts',
      'OpenShorts',
      'générateur de clips open source',
      'générateur de clips IA auto-hébergé',
      'longue vidéo en shorts',
      'alternative à OpusClip',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenShorts est un générateur de clips IA open source sous licence MIT qui repère les meilleurs moments d\'une longue vidéo et renvoie des clips 9:16 sous-titrés, auto-hébergé avec Docker ou sur le service hébergé OpenShorts Cloud.** Par défaut, il n\'est pas entièrement local : le sélecteur de moments appelle Google Gemini, sauf si vous pointez une copie auto-hébergée vers un modèle de langage local.',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce qu\'OpenShorts, et est-il vraiment local ?',
        answer:
          'OpenShorts est un générateur de clips open source de TONVI TECH SL qui découpe de longues vidéos en clips verticaux sous-titrés. La transcription, la détection de scènes et le recadrage avec suivi du visage s\'exécutent sur la machine qui l\'héberge, mais par défaut la transcription part chez Google Gemini pour choisir les moments : il est donc hybride, et non entièrement local.',
        bullets: [
          'Plateformes : application web hébergée, ou auto-hébergement avec Docker Compose.',
          'Prix : gratuit en auto-hébergement ; le service hébergé commence par une offre gratuite avec filigrane.',
          'Licence : MIT pour l\'application principale, avec le dossier cloud/ sous licence commerciale.',
          'Matériel : le README indique Docker et au moins 8 Go de RAM ; un GPU NVIDIA est facultatif.',
          'Éditeur : TONVI TECH SL à Málaga, en Espagne, selon la politique de confidentialité.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Présentation', anchor: 'overview' },
      { label: 'Comment l\'obtenir', anchor: 'get-it' },
      { label: 'Tarifs et licence', anchor: 'pricing-license' },
      { label: 'Prérequis', anchor: 'requirements' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Où vont votre vidéo et vos données', anchor: 'privacy' },
      { label: 'Pour qui', anchor: 'who-should-use' },
      { label: 'Ce que nous n\'avons pas pu vérifier', anchor: 'who-should-not-use' },
      { label: 'Alternatives', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenShorts est un outil open source qui transforme de longues vidéos en clips verticaux sous-titrés, sur votre propre hôte Docker ou sur un service cloud hébergé.',
          },
          {
            type: 'plain-terms',
            text: 'Vous lui donnez un lien YouTube ou un fichier vidéo. Il transcrit la parole, demande à un modèle de langage quels moments valent la peine d\'être publiés, les découpe et les recadre en vertical autour de la personne qui parle. Le modèle de langage est Google Gemini par défaut ; sur une copie auto-hébergée, vous pouvez le remplacer par votre propre modèle pour cette étape.',
          },
        ],
        items: [
          'L\'auto-hébergement est gratuit sous licence MIT et, selon l\'éditeur, sans filigrane ni plafond d\'utilisation ; il demande Docker, un terminal et environ 8 Go de RAM ou plus.',
          'OpenShorts Cloud, le service hébergé, ne demande aucune installation ; son offre gratuite ajoute un filigrane, et les offres payantes figurent sous Tarifs et licence.',
          'Par défaut, la transcription et, pour certaines fonctions, des images échantillonnées de la vidéo partent chez Google Gemini ; un modèle local ne peut remplacer que l\'étape de sélection des moments.',
          'Le dépôt n\'a ni releases ni tags, donc aucun numéro de version de l\'application ; le dernier commit de la branche principale date du 19 novembre 2026.',
          'La politique de confidentialité et les conditions du service hébergé désignent TONVI TECH SL, à Málaga, en Espagne, comme exploitant.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Les vidéos d\'autres personnes sont en général protégées par le droit d\'auteur. Les conditions du service hébergé demandent aux utilisateurs de confirmer qu\'ils détiennent les droits sur chaque vidéo envoyée, et la même prudence vaut en auto-hébergement. Vérifiez les droits et les conditions de la plateforme d\'origine avant de découper et de republier la vidéo d\'autrui. Ce sont des informations générales, pas un avis juridique.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Présentation',
        content: [
          '**OpenShorts est un générateur de clips IA : il prend une longue vidéo et renvoie de courts clips verticaux avec sous-titres, phrases d\'accroche et titres.**',
          'Le README décrit trois outils dans un même projet : un Clip Generator, AI Shorts (vidéos marketing avec acteurs IA) et un YouTube Studio pour les titres, miniatures et descriptions. Ce test se concentre sur le Clip Generator, la partie que le dépôt met en avant. Le README indique que le cœur est open source sous licence MIT, tandis que le service hébergé, OpenShorts Cloud, ajoute la facturation, des clés gérées, la publication automatique et un mode Autopilot dans les offres payantes.',
          'D\'après le site web, la chaîne utilise faster-whisper pour la transcription avec horodatage au mot, PySceneDetect pour les limites de scènes, Google Gemini 3.1 Flash-Lite pour noter la transcription et retenir 3 à 15 moments de 15 à 60 secondes, FFmpeg pour découper les clips, et le suivi du visage MediaPipe avec YOLOv8 en secours pour les recadrer en 9:16. Le README ajoute des dispositions à deux intervenants empilés, une disposition de capture d\'écran et une disposition à fond flouté, choisies par vidéo par Gemini ou imposées depuis le tableau de bord.',
          'La politique de confidentialité et les conditions du service hébergé désignent TONVI TECH SL, société constituée en Espagne, comme exploitant. Tout ce qui est décrit ici relève d\'affirmations de l\'éditeur ; PromptQuorum n\'a pas exécuté le logiciel ni comparé ses clips à ceux d\'autres outils.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Comment l\'obtenir',
        content: [
          '**Vous pouvez utiliser OpenShorts sur le service hébergé sans rien installer, ou l\'auto-héberger avec Docker depuis le dépôt GitHub ; il n\'existe pas d\'installateur à télécharger.**',
          'Le dépôt n\'a ni GitHub Releases ni tags : l\'auto-hébergement passe donc par un git clone suivi d\'une construction Docker Compose. Les étapes du README : cloner le dépôt, copier au besoin .env.example en .env, lancer docker compose up --build, ouvrir le tableau de bord sur le port 5175 et saisir les clés d\'API dans les paramètres. Pour utiliser un GPU NVIDIA, le README ajoute un fichier d\'override Compose et des réglages d\'environnement.',
        ],
        columns: ['Option', 'Comment l\'obtenir'],
        rows: [
          { 'Option': '[OpenShorts Cloud hébergé](https://www.openshorts.app)', 'Comment l\'obtenir': 'Connexion et collage d\'un lien vidéo ; sans installation' },
          { 'Option': '[Auto-hébergé (Docker Compose)](https://github.com/mutonby/openshorts#getting-started)', 'Comment l\'obtenir': 'git clone, docker compose up --build ; terminal requis' },
          { 'Option': '[Site web](https://www.openshorts.app)', 'Comment l\'obtenir': 'Site officiel, tarifs et guides' },
          { 'Option': '[Politique de confidentialité](https://www.openshorts.app/privacy)', 'Comment l\'obtenir': 'Politique du service hébergé' },
          { 'Option': '[Code source](https://github.com/mutonby/openshorts)', 'Comment l\'obtenir': 'Dépôt GitHub (cœur MIT)' },
          { 'Option': '[Client en ligne de commande](https://pypi.org/project/openshorts/)', 'Comment l\'obtenir': 'pip install openshorts ; dialogue avec une API OpenShorts' },
        ],
        note: 'L\'auto-hébergement demande un terminal et Docker : c\'est une installation de type développeur, pas un double-clic. Le README indique que l\'édition auto-hébergée et le cloud exécutent le même logiciel.',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: 'Tarifs et licence',
        content: [
          '**L\'auto-hébergement est gratuit, et OpenShorts Cloud propose une offre gratuite avec filigrane ainsi que des offres payantes en dollars américains.** Les tarifs ci-dessous viennent de la page de tarifs consultée le 20 novembre 2026 et peuvent changer. Les offres hébergées se mesurent en minutes source, c\'est-à-dire les minutes de vidéo que vous envoyez.',
          'Licence : le README indique que l\'application principale est sous licence MIT, avec une exception. Le répertoire cloud/ (facturation, clés gérées et infrastructure hébergée) est à code source disponible sous l\'OpenShorts Commercial License, qui permet de le lire, de le modifier et de l\'auto-héberger pour un usage personnel ou interne, mais pas de l\'offrir à des tiers comme service payant. L\'auto-hébergement de l\'application principale n\'exige pas ce répertoire. Des fonctions facultatives appellent d\'autres services payants avec vos propres clés, comme fal.ai pour les vidéos avec acteurs IA, ElevenLabs pour le doublage et Upload-Post pour la publication ; leurs coûts s\'ajoutent.',
        ],
        columns: ['Offre', 'Prix et limites'],
        rows: [
          { 'Offre': 'Auto-hébergé', 'Prix et limites': 'Gratuit, MIT ; matériel et clés d\'API à votre charge' },
          { 'Offre': 'Hébergé Free', 'Prix et limites': '0 $ ; 1re vidéo jusqu\'à 60 min, puis 20 min/mois ; filigrane' },
          { 'Offre': 'Hébergé Starter', 'Prix et limites': '12 $/mois ; 100 min/mois ; sans filigrane' },
          { 'Offre': 'Hébergé Creator', 'Prix et limites': '29 $/mois ; 300 min/mois ; sans filigrane' },
          { 'Offre': 'Hébergé Pro', 'Prix et limites': '59 $/mois ; 750 min/mois ; sans filigrane' },
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Prérequis',
        content: [
          '**Pour l\'auto-hébergement, le README indique Docker, Docker Compose et au moins 8 Go de RAM, et présente le GPU comme facultatif.**',
          'L\'image par défaut ne fonctionne que sur CPU. L\'éditeur affirme qu\'une vidéo de 8 minutes prend de 5 à 8 minutes sur un CPU courant et environ 50 secondes sur son GPU NVIDIA hébergé ; ce sont des chiffres de l\'éditeur, pas des mesures de PromptQuorum.',
        ],
        columns: ['Élément', 'Indiqué dans le README'],
        rows: [
          { 'Élément': 'Logiciel', 'Indiqué dans le README': 'Docker et Docker Compose' },
          { 'Élément': 'RAM système', 'Indiqué dans le README': '8 Go ou plus' },
          { 'Élément': 'GPU', 'Indiqué dans le README': 'Facultatif ; NVIDIA avec NVENC ; 8 Go de VRAM pour large-v3-turbo' },
          { 'Élément': 'Clé d\'API Gemini', 'Indiqué dans le README': 'Nécessaire, ou définir LLM_BASE_URL pour un modèle local' },
          { 'Élément': 'Autres clés', 'Indiqué dans le README': 'fal.ai, ElevenLabs, Upload-Post pour les fonctions facultatives' },
          { 'Élément': 'Espace disque', 'Indiqué dans le README': 'Non indiqué' },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**Le Clip Generator repose sur la détection de moments, le recadrage vertical, les sous-titres et un éditeur ; le reste du projet relève d\'options.** Les points ci-dessous sont des affirmations de l\'éditeur tirées du README et du site web.',
        ],
        items: [
          'Détection de moments : un modèle de langage note la transcription et les limites de scènes et renvoie 3 à 15 moments de 15 à 60 secondes, chacun avec un score de viralité.',
          'Recadrage vertical : suivi du visage par scène, une disposition à fond flouté, deux intervenants empilés avec les sous-titres à la jonction, et une disposition de capture d\'écran.',
          'Sous-titres : sous-titres mot à mot de faster-whisper, ou de Parakeet sur GPU, incrustés dans le clip en plusieurs styles.',
          'Éditeur de clips : coupes au mot à partir de la transcription, segments supplémentaires, changements de cadrage et nouveaux rendus.',
          'Accroches : une phrase d\'ouverture rédigée à partir de ce qui est dit dans le clip, modifiable en texte, style et position.',
          'Doublage : doublage vocal ElevenLabs dans plus de 30 langues, avec votre propre clé ElevenLabs.',
          'Automatisation : un serveur MCP intégré, une API REST avec webhooks de fin de tâche, un client en ligne de commande et un fichier de skill pour agents.',
          'Publication : publication et planification sur les réseaux sociaux via le service Upload-Post, avec votre propre clé en auto-hébergement.',
          'Options : AI Shorts, qui génère des vidéos marketing avec acteurs IA via fal.ai, et un YouTube Studio pour titres, miniatures et descriptions.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Où vont votre vidéo et vos données',
        content: [
          '**OpenShorts est hybride : certaines étapes s\'exécutent sur la machine qui l\'héberge, d\'autres appellent des services externes.**',
          'D\'après le README, la transcription, la détection de scènes et le suivi du visage s\'exécutent sur l\'hôte. Par défaut, le sélecteur de moments envoie la transcription, et non la vidéo, à Google Gemini. Le README indique que définir LLM_BASE_URL vers un serveur compatible OpenAI comme Ollama, LM Studio ou vLLM garde la chaîne de clips sur votre machine, mais que le choix de disposition, le détecteur de contenu à l\'écran et les vidéos sans parole exigent toujours Gemini ; sans clé, ces fonctions se rabattent sur un simple recadrage avec suivi du visage. Il précise aussi que les clés d\'API saisies dans le tableau de bord sont chiffrées dans le navigateur et non stockées sur le serveur.',
          'Sur le service hébergé, la vidéo est envoyée à l\'exploitant. Sa politique de confidentialité indique qu\'il traite les vidéos que vous envoyez, transmet la transcription et des images échantillonnées, qui peuvent montrer des visages, à Google Gemini, transmet l\'audio à ElevenLabs lorsque vous demandez un doublage, et n\'utilise pas votre contenu pour entraîner des modèles d\'IA. Elle indique que les clips de l\'offre gratuite sont supprimés après 7 jours, cite des serveurs en Allemagne et désigne l\'AEPD, l\'autorité espagnole de protection des données, comme autorité de contrôle. PromptQuorum n\'a pas capturé de trafic réseau ni vérifié ces affirmations.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        content: [
          '**OpenShorts convient à ceux qui veulent découper de longs enregistrements avec l\'aide de l\'IA et apprécient une option open source.**',
        ],
        items: [
          'Podcasteurs, streamers et créateurs de cours qui transforment de longs enregistrements en shorts et veulent d\'abord essayer une offre hébergée gratuite.',
          'Développeurs et agences qui veulent l\'auto-héberger, modifier la chaîne de traitement ou l\'appeler via MCP, REST ou la ligne de commande.',
          'Équipes qui préfèrent garder la vidéo source sur leur propre serveur et peuvent accepter les appels à Gemini pour le sélecteur de moments, ou faire tourner un modèle local.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        content: [
          '**OpenShorts convient moins bien dans certains cas, et plusieurs points restent non vérifiés.**',
        ],
        items: [
          'Ne convient pas : qui a besoin aujourd\'hui d\'une chaîne entièrement hors ligne. Le choix de disposition et les vidéos sans parole exigent toujours Gemini, selon le README.',
          'Ne convient pas : qui veut un installateur de bureau en un clic. Il n\'y a pas de releases, et l\'auto-hébergement demande Docker et un terminal.',
          'Non vérifié : la qualité des clips, les scores de viralité et la vitesse. PromptQuorum n\'a fait aucun test, et les chiffres de vitesse viennent de l\'éditeur.',
          'Non vérifié : dans quelle mesure un modèle local remplace Gemini pour choisir les moments. Le README indique que les modèles 7-8B renvoient des sorties valides de façon fiable et pas ceux de 3B ; PromptQuorum ne l\'a pas testé.',
          'Non vérifié : une version de l\'application. Le dépôt n\'a ni releases ni tags ; le manifeste du registre MCP indique 1.0.0 et le paquet en ligne de commande sur PyPI est en 0.1.0, mais ni l\'un ni l\'autre n\'est une version de l\'application.',
          'Non vérifié : les tableaux comparatifs du site web et du README qui situent OpenShorts face à Opus Clip, Klap et Vizard. Ce sont des affirmations de l\'éditeur.',
          'Non vérifié : si le service hébergé répond à un besoin juridique ou de conformité précis. Lisez d\'abord sa politique de confidentialité et ses conditions.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenShorts face aux alternatives',
        itemHeadings: true,
        content: [
          '**OpenShorts côtoie dans l\'annuaire d\'autres outils vidéo open source, mais ils font des métiers différents, et PromptQuorum ne les a pas comparés en pratique.** Les tableaux du projet citent Opus Clip, Klap et Vizard comme outils de clips hébergés et propriétaires ; ces tableaux sont des affirmations de l\'éditeur.',
        ],
        columns: ['Outil', 'Selon son test'],
        rows: [
          { 'Outil': '[FunClip](/fr/power-local-llm/funclip-review)', 'Selon son test': 'Gratuit, MIT, auto-hébergé ; découpe pilotée par la transcription avec un LLM, le plus proche par l\'objet' },
          { 'Outil': '[FableCut](/fr/power-local-llm/fablecut-review)', 'Selon son test': 'Éditeur de navigateur gratuit sous MIT que des agents IA pilotent via MCP ; retouche des images que vous avez déjà' },
          { 'Outil': '[OpenMontage](/fr/power-local-llm/openmontage-review)', 'Selon son test': 'Chaîne agentique gratuite sous AGPL-3.0 qui produit des vidéos entières ; ce n\'est pas un générateur de clips' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'OpenShorts est-il gratuit ?',
            a: 'L\'auto-hébergement est gratuit, et vous ne payez que les services externes facultatifs que vous branchez, comme le doublage ElevenLabs. Le service hébergé se mesure en minutes source, c\'est-à-dire les minutes de vidéo que vous envoyez.',
          },
          {
            q: 'OpenShorts peut-il fonctionner sans clé Google ?',
            a: 'En partie. Selon le README, définir LLM_BASE_URL vers Ollama, LM Studio, vLLM ou un autre serveur compatible OpenAI remplace Gemini pour le choix des moments, et le tableau de bord ne demande plus de clé Gemini. Le README recommande de porter la longueur de contexte d\'Ollama à 16384 jetons, car la valeur par défaut de 4096 tronque sans avertir.',
          },
          {
            q: 'Fonctionne-t-il avec Claude, ChatGPT ou n8n ?',
            a: 'Le README décrit un serveur MCP intégré, un point d\'accès hébergé et un chemin /mcp auto-hébergé, une API REST avec webhooks de fin de tâche et un workflow n8n importable. Le point d\'accès MCP hébergé exige une clé d\'API du compte ou une autorisation OAuth, alors qu\'une copie auto-hébergée n\'exige aucune clé selon le README.',
          },
          {
            q: 'Puis-je découper n\'importe quelle vidéo YouTube ?',
            a: 'L\'outil accepte des liens et des fichiers envoyés, mais les conditions du service hébergé demandent de confirmer que vous détenez les droits sur chaque vidéo envoyée. Vérifiez d\'abord le droit d\'auteur et les conditions de la plateforme. Ce sont des informations générales, pas un avis juridique.',
          },
          {
            q: 'En quoi l\'offre gratuite hébergée diffère-t-elle de l\'auto-hébergement ?',
            a: 'Selon la page de tarifs, l\'offre gratuite est en téléchargement seul, sans publication automatique et avec les 2 à 4 meilleurs clips de chaque vidéo. En auto-hébergement, il n\'y a pas de plafond de minutes et l\'on peut publier avec son propre compte Upload-Post, tandis qu\'Autopilot n\'existe que dans le cloud.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**OpenShorts vaut l\'essai si vous voulez un générateur de clips open source et acceptez que ses étapes d\'IA dépendent par défaut de services externes.**',
          'Sur le papier, il couvre toute la chaîne de clips, de la transcription et du choix des moments au recadrage vertical, aux sous-titres, à un éditeur et à l\'accès MCP et API. Le projet est actif, avec un dernier commit le 19 novembre 2026, et une offre hébergée gratuite permet de juger les clips avant de rien installer.',
          'Les compromis sont nets. La configuration par défaut envoie les transcriptions à Google Gemini, un modèle local ne remplace qu\'une partie de cette étape, il n\'y a ni releases ni numéros de version, et l\'auto-hébergement demande Docker et un terminal. PromptQuorum n\'a pas testé la qualité des clips : essayez-le sur une vidéo que vous avez le droit d\'utiliser et lisez la politique de confidentialité avant d\'envoyer quoi que ce soit de sensible.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site web d\'OpenShorts](https://www.openshorts.app) — description du produit, chaîne de traitement, offres, consulté le 20 novembre 2026.',
          '[Page de tarifs](https://www.openshorts.app/pricing) — offres hébergées, minutes, filigrane et différences de publication, consultée le 20 novembre 2026.',
          '[Politique de confidentialité](https://www.openshorts.app/privacy) — exploitant, sous-traitants, conservation, autorité de contrôle, mise à jour le 17 novembre 2026, consultée le 20 novembre 2026.',
          '[Conditions d\'utilisation](https://www.openshorts.app/terms) — exploitant, engagement sur les droits du contenu, droit applicable, consultées le 20 novembre 2026.',
          '[Dépôt GitHub](https://github.com/mutonby/openshorts) — code source, licence, ni releases ni tags, dernier commit le 19 novembre 2026, consulté le 20 novembre 2026.',
          '[README](https://github.com/mutonby/openshorts#readme) — fonctionnalités, prérequis, installation Docker, option de LLM local, MCP et API, exception de licence, consulté le 20 novembre 2026.',
          '[openshorts sur PyPI](https://pypi.org/project/openshorts/) — paquet en ligne de commande, version 0.1.0, consulté le 20 novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Outils d\'IA locale pour l\'image et la vidéo comparés](/fr/power-local-llm/local-llm-images-video-compared) — outils de génération d\'images et de vidéos côte à côte.',
          '[Test de FunClip](/fr/power-local-llm/funclip-review) — un outil gratuit qui découpe la vidéo à partir de sa transcription.',
          '[Test de FableCut](/fr/power-local-llm/fablecut-review) — un éditeur vidéo de navigateur que des agents IA peuvent piloter.',
          '[Test d\'OpenMontage](/fr/power-local-llm/openmontage-review) — une chaîne agentique qui produit des vidéos entières.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d\'IA locale.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-20',
    theme: 'Image & Video Generation',
    heroImage: '/images/openshorts-review-hero-ja.webp',
    title: 'OpenShortsレビュー：縦型ショート向けのオープンソースAIクリップ作成ツール',
    seoTitle: 'OpenShortsレビュー：オープンソースのAIクリップ作成ツール',
    intro:
      'OpenShortsは、ポッドキャストやウェビナー、配信などの長い動画を、TikTok、Instagramリール、YouTubeショート向けに字幕付きの縦型短尺クリップへ変えるオープンソースのツールです。Dockerで自分で動かすことも、ホスト版のOpenShorts Cloudを使うこともできます。このレビューは、プロジェクトのウェブサイト、プライバシーポリシー、利用規約、GitHubリポジトリとREADMEに基づいています。PromptQuorumはこのソフトウェアをテストしていません。',
    metaDescription:
      'OpenShortsは長い動画を字幕付きの縦型クリップに変えます。Dockerで無料セルフホストまたはクラウド利用。ローカルかクラウドか、料金、プライバシーを解説。',
    twitterDescription:
      'OpenShortsはMITライセンスの縦型ショート向けAIクリップ作成ツールです。セルフホスト、ホスト版プラン、ローカルで動く範囲、プライバシー、未確認点を整理します。',
    audience:
      '長い動画を字幕付きの縦型クリップにしたいポッドキャスター、配信者、クリエイター、開発者（セルフホストの有無を問わず）',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenShorts',
    targetKeywords: [
      'OpenShorts レビュー',
      'OpenShorts',
      'オープンソース クリップ作成',
      'セルフホスト AIクリップ生成',
      '長尺動画 ショート化',
      'OpusClip 代替',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenShortsは、長い動画から見どころを探し、字幕付きの9:16クリップを返すMITライセンスのオープンソースAIクリップ作成ツールで、Dockerによるセルフホストか、ホスト版のOpenShorts Cloudで使えます。** 既定では完全なローカル動作ではありません。セルフホスト版をローカルの言語モデルに向け直さない限り、見どころの選定でGoogle Geminiを呼び出します。',
    quickAnswerTop: {
      ja: {
        question: 'OpenShortsとは何で、本当にローカルで動きますか？',
        answer:
          'OpenShortsはTONVI TECH SLが手がけるオープンソースのクリップ作成ツールで、長い動画を字幕付きの縦型クリップに切り出します。文字起こし、シーン検出、顔追跡によるリフレーミングは動かしているマシン上で実行されますが、既定では見どころの選定のために文字起こしがGoogle Geminiへ送られるため、完全なローカルではなくハイブリッドです。',
        bullets: [
          'プラットフォーム：ホスト型のウェブアプリ、またはDocker Composeによるセルフホスト。',
          '価格：セルフホストは無料。ホスト版は透かし付きの無料プランから始まります。',
          'ライセンス：コアアプリはMIT、cloud/フォルダーは商用ライセンスです。',
          'ハードウェア：READMEはDockerと8GB以上のRAMを挙げており、NVIDIA GPUは任意です。',
          '運営元：プライバシーポリシーによると、スペイン・マラガのTONVI TECH SL。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: 'tldr' },
      { label: '概要', anchor: 'overview' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '料金とライセンス', anchor: 'pricing-license' },
      { label: '動作要件', anchor: 'requirements' },
      { label: '機能', anchor: 'features' },
      { label: '動画とデータの行き先', anchor: 'privacy' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかった点', anchor: 'who-should-not-use' },
      { label: '代替ツール', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
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
            text: 'OpenShortsは、長い動画を字幕付きの縦型クリップに変えるオープンソースのツールで、自分のDockerホストでもホスト型クラウドでも使えます。',
          },
          {
            type: 'plain-terms',
            text: 'YouTubeのリンクか動画ファイルを渡すと、音声を文字起こしし、投稿する価値のある場面を言語モデルに選ばせ、切り出して、話している人を中心に縦型へ切り抜きます。言語モデルは既定でGoogle Geminiですが、セルフホスト版ではこの段階を自分のモデルに差し替えられます。',
          },
        ],
        items: [
          'セルフホストはMITライセンスで無料で、開発元によると透かしも利用上限もありません。Docker、ターミナル、約8GB以上のRAMが必要です。',
          'ホスト版のOpenShorts Cloudはインストール不要で、無料プランには透かしが入ります。有料プランは「料金とライセンス」にまとめています。',
          '既定では文字起こしと、一部の機能ではサンプリングした動画フレームがGoogle Geminiへ送られます。ローカルモデルで置き換えられるのは見どころ選定の段階だけです。',
          'リポジトリにはリリースもタグもなく、アプリのバージョン番号はありません。メインブランチの最後のコミットは2026年11月19日です。',
          'ホスト版のプライバシーポリシーと利用規約は、運営者としてスペイン・マラガのTONVI TECH SLを挙げています。',
        ],
        callouts: [
          {
            type: 'note',
            text: '他人が制作した動画は通常、著作権で保護されています。ホスト版の利用規約は、送信する動画すべての権利を持っていることの確認を利用者に求めており、セルフホストでも同じ注意が当てはまります。他人の動画を切り出して再公開する前に、権利と元プラットフォームの規約を確認してください。これは一般的な情報であり、法的助言ではありません。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**OpenShortsはAIクリップ作成ツールで、長い動画を受け取り、字幕、フック文、タイトル付きの短い縦型クリップを返します。**',
          'READMEは、1つのプロジェクトに3つのツールがあると説明しています。Clip Generator、AI Shorts（AIの出演者によるマーケティング動画）、タイトル・サムネイル・説明文用のYouTube Studioです。このレビューは、リポジトリが最初に掲げるClip Generatorに絞っています。READMEによると、コアはMITライセンスのオープンソースで、ホスト版のOpenShorts Cloudは、請求、管理されたキー、自動投稿、有料プランのAutopilotモードを追加します。',
          'ウェブサイトによると、処理の流れはこうです。単語単位のタイムスタンプ付き文字起こしにfaster-whisper、シーン境界の検出にPySceneDetect、文字起こしを採点して15〜60秒の見どころを3〜15件選ぶ段階にGoogle Gemini 3.1 Flash-Lite、クリップの切り出しにFFmpeg、9:16への再構成にMediaPipeの顔追跡（YOLOv8を予備）を使います。READMEは、2人の話者を上下に重ねるレイアウト、スクリーンキャスト用レイアウト、ぼかし背景レイアウトを挙げ、動画ごとにGeminiが選ぶか、ダッシュボードから固定できるとしています。',
          'ホスト版のプライバシーポリシーと利用規約は、スペインで設立された会社TONVI TECH SLを運営者としています。ここで述べた内容はすべて開発元の主張です。PromptQuorumはソフトウェアを実行しておらず、他のツールとクリップを比較してもいません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**OpenShortsは、ホスト版なら何もインストールせずに使え、GitHubリポジトリからDockerでセルフホストもできます。ダウンロード用のインストーラーはありません。**',
          'リポジトリにはGitHubのリリースもタグもないため、セルフホストはgit cloneのあとにDocker Composeでビルドする形になります。READMEの手順は、リポジトリをクローンし、必要なら.env.exampleを.envにコピーし、docker compose up --buildを実行し、ポート5175でダッシュボードを開き、設定画面でAPIキーを入力するというものです。NVIDIA GPUを使う場合は、READMEがComposeのオーバーライドファイルと環境設定を追加しています。',
        ],
        columns: ['方法', '入手方法'],
        rows: [
          { '方法': '[ホスト版 OpenShorts Cloud](https://www.openshorts.app)', '入手方法': 'サインインして動画リンクを貼る。インストール不要' },
          { '方法': '[セルフホスト（Docker Compose）](https://github.com/mutonby/openshorts#getting-started)', '入手方法': 'git clone、docker compose up --build。ターミナルが必要' },
          { '方法': '[ウェブサイト](https://www.openshorts.app)', '入手方法': '公式サイト、料金、ガイド' },
          { '方法': '[プライバシーポリシー](https://www.openshorts.app/privacy)', '入手方法': 'ホスト版のポリシー' },
          { '方法': '[ソースコード](https://github.com/mutonby/openshorts)', '入手方法': 'GitHubリポジトリ（コアはMIT）' },
          { '方法': '[コマンドラインクライアント](https://pypi.org/project/openshorts/)', '入手方法': 'pip install openshorts。OpenShorts APIと通信' },
        ],
        note: 'セルフホストにはターミナルとDockerが必要で、ダブルクリックで入れる方式ではなく開発者向けのセットアップです。READMEは、セルフホスト版とクラウドは同じソフトウェアで動くとしています。',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: '料金とライセンス',
        content: [
          '**セルフホストは無料で、ホスト版のOpenShorts Cloudには透かし付きの無料プランと、米ドル建ての有料プランがあります。** 以下の料金は2026年11月20日に確認した料金ページのもので、変更される場合があります。ホスト版のプランは、送信した動画の分数であるソース分数で計量されます。',
          'ライセンス：READMEによると、コアアプリケーションはMITライセンスですが、1つ例外があります。cloud/ディレクトリ（請求、管理されたキー、ホスト版のインフラ）はOpenShorts Commercial Licenseのもとでソースが公開されており、個人または社内での閲覧、改変、セルフホストは認められますが、第三者に有料サービスとして提供することは認められません。コアアプリをセルフホストするのにこのディレクトリは不要です。任意機能は、AI出演者の動画にfal.ai、吹き替えにElevenLabs、投稿にUpload-Postなど、自分のキーで他の有料サービスを呼び出し、その費用は別になります。',
        ],
        columns: ['プラン', '料金と制限'],
        rows: [
          { 'プラン': 'セルフホスト', '料金と制限': '無料、MIT。ハードウェアとAPIキーは自前' },
          { 'プラン': 'ホスト版 Free', '料金と制限': '$0。最初の動画は60分まで、以降は月20分。透かしあり' },
          { 'プラン': 'ホスト版 Starter', '料金と制限': '月$12。月100分。透かしなし' },
          { 'プラン': 'ホスト版 Creator', '料金と制限': '月$29。月300分。透かしなし' },
          { 'プラン': 'ホスト版 Pro', '料金と制限': '月$59。月750分。透かしなし' },
        ],
      },
      requirements: {
        id: 'requirements',
        title: '動作要件',
        content: [
          '**セルフホストについて、READMEはDocker、Docker Compose、8GB以上のRAMを挙げ、GPUは任意としています。**',
          '既定のイメージはCPU専用です。開発元は、8分の動画は一般的なCPUで5〜8分、ホスト版のNVIDIA GPUで約50秒かかるとしています。これらは開発元の数値であり、PromptQuorumの測定ではありません。',
        ],
        columns: ['項目', 'READMEの記載'],
        rows: [
          { '項目': 'ソフトウェア', 'READMEの記載': 'DockerとDocker Compose' },
          { '項目': 'システムRAM', 'READMEの記載': '8GB以上' },
          { '項目': 'GPU', 'READMEの記載': '任意。NVENC対応NVIDIA。large-v3-turboにVRAM 8GB' },
          { '項目': 'Gemini APIキー', 'READMEの記載': '必要。ローカルモデルならLLM_BASE_URLを設定' },
          { '項目': 'その他のキー', 'READMEの記載': '任意機能用にfal.ai、ElevenLabs、Upload-Post' },
          { '項目': 'ディスク容量', 'READMEの記載': '記載なし' },
        ],
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**Clip Generatorは、見どころ検出、縦型リフレーミング、字幕、エディターが中心で、プロジェクトの他の部分は任意の追加機能です。** 以下は、READMEとウェブサイトにある開発元の説明です。',
        ],
        items: [
          '見どころ検出：言語モデルが文字起こしとシーン境界を採点し、15〜60秒の見どころを3〜15件返します。それぞれにバイラルスコアが付きます。',
          '縦型リフレーミング：シーンごとの顔追跡、ぼかし背景レイアウト、2人の話者を重ねて継ぎ目に字幕を置くレイアウト、スクリーンキャスト用レイアウト。',
          '字幕：faster-whisper（GPUではParakeet）による単語単位の字幕を、複数のスタイルでクリップに焼き込みます。',
          'クリップエディター：文字起こしを使った単語単位のカット、追加セグメント、フレーミングの変更、再レンダリング。',
          'フックのオーバーレイ：クリップ内の発言から書かれた冒頭の一文で、テキスト、スタイル、位置を編集できます。',
          '吹き替え：自分のElevenLabsキーを使った、30以上の言語でのElevenLabs音声吹き替え。',
          '自動化：内蔵のMCPサーバー、完了Webhook付きのREST API、コマンドラインクライアント、エージェント用スキルファイル。',
          '公開：Upload-Postサービス経由でソーシャルネットワークへ投稿・予約。セルフホストでは自分のキーを使います。',
          '追加機能：fal.aiを通じてAI出演者のマーケティング動画を生成するAI Shortsと、タイトル・サムネイル・説明文のYouTube Studio。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '動画とデータの行き先',
        content: [
          '**OpenShortsはハイブリッドです。一部の処理はホストするマシンで動き、他の処理は外部サービスを呼び出します。**',
          'READMEによると、文字起こし、シーン検出、顔追跡はホスト上で実行されます。見どころの選定では、既定で動画ではなく文字起こしがGoogle Geminiへ送られます。READMEは、LLM_BASE_URLをOllama、LM Studio、vLLMなどOpenAI互換のサーバーに設定するとクリップ処理が自分のマシン内に収まるとしていますが、レイアウト選択、画面内コンテンツの検出、音声のない動画には引き続きGeminiが必要で、キーがなければ単純な顔追跡クロップに切り替わると述べています。また、ダッシュボードに入力したAPIキーはブラウザー内で暗号化され、サーバーには保存されないとしています。',
          'ホスト版では、動画は運営者へアップロードされます。そのプライバシーポリシーは、送信された動画を処理し、文字起こしと、顔が映る可能性のあるサンプルフレームをGoogle Geminiへ、吹き替えを依頼した場合は音声をElevenLabsへ送り、コンテンツをAIモデルの学習に使わないとしています。無料プランのクリップは7日後に削除され、サーバーはドイツにあるとし、監督機関としてスペインのデータ保護当局であるAEPDを挙げています。PromptQuorumはネットワーク通信を取得しておらず、これらの記述も検証していません。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**OpenShortsは、長い録画をAIの支援でクリップにしたく、オープンソースの選択肢を重視する人に向いています。**',
        ],
        items: [
          '長い録画をショートにしたいポッドキャスター、配信者、講座制作者で、まず無料のホスト版プランを試したい人。',
          'セルフホストしたい、処理の流れを変えたい、MCP、REST、コマンドラインから呼び出したい開発者やエージェンシー。',
          '元動画を自社サーバーに置きたく、見どころ選定でのGemini呼び出しを許容できるか、ローカルモデルを動かせるチーム。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        content: [
          '**OpenShortsは向かない場合もあり、いくつかの点は未確認のままです。**',
        ],
        items: [
          '不向き：今日、完全にオフラインで動く処理系が必要な人。READMEによると、レイアウト選択と音声のない動画には引き続きGeminiが必要です。',
          '不向き：ワンクリックのデスクトップ用インストーラーを求める人。リリースはなく、セルフホストにはDockerとターミナルが必要です。',
          '未確認：クリップの品質、バイラルスコア、速度。PromptQuorumはテストを行っておらず、速度の数値は開発元のものです。',
          '未確認：見どころ選定でローカルモデルがGeminiをどこまで置き換えられるか。READMEは、7〜8Bモデルは有効な出力を安定して返し、3Bモデルは返さないとしていますが、PromptQuorumは検証していません。',
          '未確認：アプリのバージョン。リポジトリにリリースもタグもなく、MCPレジストリのマニフェストは1.0.0、PyPIのコマンドラインパッケージは0.1.0ですが、どちらもアプリのバージョンではありません。',
          '未確認：ウェブサイトとREADMEにある、OpenShortsをOpus Clip、Klap、Vizardと比べた比較表。これらは開発元の主張です。',
          '未確認：ホスト版が特定の法的要件やコンプライアンス要件を満たすかどうか。まずプライバシーポリシーと利用規約をお読みください。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenShortsと代替ツールの比較',
        itemHeadings: true,
        content: [
          '**OpenShortsはディレクトリ内の他のオープンソース動画ツールと並びますが、役割は異なり、PromptQuorumは実機で比較していません。** プロジェクト自身の比較表は、Opus Clip、Klap、Vizardをクローズドソースのホスト型クリップツールとして挙げています。これらの表は開発元の主張です。',
        ],
        columns: ['ツール', '各レビューでの位置づけ'],
        rows: [
          { 'ツール': '[FunClip](/ja/power-local-llm/funclip-review)', '各レビューでの位置づけ': '無料、MIT、セルフホスト。LLMで文字起こし起点のクリップ作成を行い、目的が最も近い' },
          { 'ツール': '[FableCut](/ja/power-local-llm/fablecut-review)', '各レビューでの位置づけ': 'AIエージェントがMCPで操作する無料のMIT製ブラウザーエディター。手元の素材を編集' },
          { 'ツール': '[OpenMontage](/ja/power-local-llm/openmontage-review)', '各レビューでの位置づけ': '動画全体を作る無料のAGPL-3.0エージェント型パイプライン。クリップ作成ツールではない' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'OpenShortsは無料ですか？',
            a: 'セルフホストは無料で、費用がかかるのは、ElevenLabsの吹き替えなど、自分でつなぐ任意の外部サービスだけです。ホスト版は、送信した動画の分数であるソース分数で計量されます。',
          },
          {
            q: 'Googleのキーなしで動かせますか？',
            a: '一部は可能です。READMEによると、LLM_BASE_URLをOllama、LM Studio、vLLMなどOpenAI互換のサーバーに設定すると、見どころ選定でGeminiが置き換わり、ダッシュボードもGeminiキーを求めなくなります。READMEは、Ollamaの既定のコンテキスト長4096では黙って切り詰められるため、16384トークンに上げることを勧めています。',
          },
          {
            q: 'Claude、ChatGPT、n8nと使えますか？',
            a: 'READMEは、内蔵のMCPサーバー、ホスト版のエンドポイントとセルフホストの/mcpパス、完了Webhook付きのREST API、インポートできるn8nワークフローを説明しています。ホスト版のMCPエンドポイントにはアカウントのAPIキーかOAuthの承認が必要で、セルフホスト版はキー不要とREADMEは述べています。',
          },
          {
            q: 'どのYouTube動画でもクリップにできますか？',
            a: 'ツールはリンクもアップロードも受け付けますが、ホスト版の利用規約は、送信する動画すべての権利を持っていることの確認を求めています。まず著作権とプラットフォームの規約を確認してください。これは一般的な情報であり、法的助言ではありません。',
          },
          {
            q: '無料のホスト版とセルフホストはどう違いますか？',
            a: '料金ページによると、無料プランはダウンロードのみで、自動投稿はなく、動画ごとに上位2〜4件のクリップが返ります。セルフホストには分数の上限がなく、自分のUpload-Postアカウントで投稿でき、AutopilotはCloud専用です。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**OpenShortsは、オープンソースのクリップ作成ツールがほしく、AI処理が既定で外部サービスに依存することを受け入れられるなら、試す価値があります。**',
          '紙の上では、文字起こしと見どころ選定から縦型リフレーミング、字幕、エディター、MCPとAPIまで、クリップ作成の流れ全体をカバーしています。プロジェクトは活発で、最後のコミットは2026年11月19日であり、無料のホスト版プランなら何も構築せずにクリップを確かめられます。',
          'トレードオフは明確です。既定の構成では文字起こしがGoogle Geminiへ送られ、ローカルモデルが置き換えるのはその段階の一部だけで、リリースもバージョン番号もなく、セルフホストにはDockerとターミナルが必要です。PromptQuorumはクリップの品質をテストしていません。利用が許されている動画で試し、機密性の高いものをアップロードする前にプライバシーポリシーをお読みください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[OpenShortsウェブサイト](https://www.openshorts.app) — 製品説明、処理の流れ、プラン。2026年11月20日確認。',
          '[料金ページ](https://www.openshorts.app/pricing) — ホスト版のプラン、分数、透かし、投稿の違い。2026年11月20日確認。',
          '[プライバシーポリシー](https://www.openshorts.app/privacy) — 運営者、委託先、保存期間、監督機関。2026年11月17日更新、2026年11月20日確認。',
          '[利用規約](https://www.openshorts.app/terms) — 運営者、コンテンツの権利に関する確認事項、準拠法。2026年11月20日確認。',
          '[GitHubリポジトリ](https://github.com/mutonby/openshorts) — ソースコード、ライセンス、リリースとタグなし、最後のコミットは2026年11月19日。2026年11月20日確認。',
          '[README](https://github.com/mutonby/openshorts#readme) — 機能、動作要件、Dockerの手順、ローカルLLMの選択肢、MCPとAPI、ライセンスの例外。2026年11月20日確認。',
          '[PyPIのopenshorts](https://pypi.org/project/openshorts/) — コマンドラインパッケージ、バージョン0.1.0。2026年11月20日確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカル画像・動画AIツール比較](/ja/power-local-llm/local-llm-images-video-compared) — 画像・動画生成ツールを並べて比較。',
          '[FunClipレビュー](/ja/power-local-llm/funclip-review) — 文字起こしを手がかりに動画をクリップする無料ツール。',
          '[FableCutレビュー](/ja/power-local-llm/fablecut-review) — AIエージェントが操作できるブラウザー動画エディター。',
          '[OpenMontageレビュー](/ja/power-local-llm/openmontage-review) — 動画全体を作るエージェント型パイプライン。',
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
    next_refresh_due: '2027-05-20',
    theme: 'Image & Video Generation',
    heroImage: '/images/openshorts-review-hero-pt.webp',
    title: 'Análise do OpenShorts: gerador de clipes com IA de código aberto para shorts verticais',
    seoTitle: 'OpenShorts: análise do gerador de vídeos curtos com IA',
    intro:
      'O OpenShorts é uma ferramenta de código aberto que transforma um vídeo longo, como um podcast, um webinar ou uma transmissão, em clipes verticais curtos com legendas para TikTok, Instagram Reels e YouTube Shorts. Você pode executá-lo por conta própria com Docker ou usar o serviço hospedado OpenShorts Cloud. Esta análise se baseia no site, na política de privacidade e nos termos do projeto, e no repositório do GitHub com o README. A PromptQuorum não testou o software.',
    metaDescription:
      'O OpenShorts transforma vídeos longos em clipes verticais legendados. Hospede grátis com Docker ou use a nuvem. IA local ou na nuvem, preços, privacidade.',
    twitterDescription:
      'O OpenShorts é um gerador de clipes com IA sob licença MIT para shorts verticais. Hospedagem própria, planos hospedados, o que roda localmente, privacidade e dúvidas.',
    audience:
      'Podcasters, streamers, criadores e desenvolvedores que querem transformar vídeos longos em clipes verticais legendados, com ou sem hospedagem própria',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenShorts',
    targetKeywords: [
      'análise do OpenShorts',
      'OpenShorts',
      'gerador de clipes de código aberto',
      'gerador de clipes com IA auto-hospedado',
      'vídeo longo para shorts',
      'alternativa ao OpusClip',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O OpenShorts é um gerador de clipes com IA de código aberto e licença MIT que encontra os melhores momentos de um vídeo longo e devolve clipes 9:16 legendados, hospedado por você com Docker ou no serviço hospedado OpenShorts Cloud.** Por padrão, ele não é totalmente local: o seletor de momentos chama o Google Gemini, a menos que você aponte uma cópia auto-hospedada para um modelo de linguagem local.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o OpenShorts e ele é realmente local?',
        answer:
          'O OpenShorts é um gerador de clipes de código aberto da TONVI TECH SL que corta vídeos longos em clipes verticais legendados. A transcrição, a detecção de cenas e o reenquadramento com rastreamento facial rodam na máquina que o hospeda, mas, por padrão, a transcrição vai para o Google Gemini escolher os momentos; ele é híbrido, e não totalmente local.',
        bullets: [
          'Plataformas: aplicativo web hospedado ou auto-hospedado com Docker Compose.',
          'Preço: grátis para hospedar por conta própria; o serviço hospedado começa com um plano gratuito com marca d\'água.',
          'Licença: MIT para o aplicativo principal, com a pasta cloud/ sob licença comercial.',
          'Hardware: o README cita Docker e 8 GB ou mais de RAM; uma GPU NVIDIA é opcional.',
          'Responsável: TONVI TECH SL, em Málaga, Espanha, segundo a política de privacidade.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: 'tldr' },
      { label: 'Visão geral', anchor: 'overview' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Preços e licença', anchor: 'pricing-license' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Para onde vão seu vídeo e seus dados', anchor: 'privacy' },
      { label: 'Para quem é', anchor: 'who-should-use' },
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
            text: 'O OpenShorts é uma ferramenta de código aberto que transforma vídeos longos em clipes verticais legendados, no seu próprio host Docker ou em um serviço de nuvem hospedado.',
          },
          {
            type: 'plain-terms',
            text: 'Você informa um link do YouTube ou um arquivo de vídeo. Ele transcreve a fala, pergunta a um modelo de linguagem quais momentos valem a pena publicar, recorta esses trechos e os enquadra na vertical em torno de quem está falando. O modelo de linguagem é o Google Gemini por padrão; numa cópia auto-hospedada, você pode trocá-lo por um modelo próprio nessa etapa.',
          },
        ],
        items: [
          'Hospedar por conta própria é grátis sob a licença MIT e, segundo o responsável, não tem marca d\'água nem limite de uso; exige Docker, um terminal e cerca de 8 GB de RAM ou mais.',
          'O OpenShorts Cloud, o serviço hospedado, não exige instalação; o plano gratuito acrescenta uma marca d\'água, e os planos pagos estão em Preços e licença.',
          'Por padrão, a transcrição e, em alguns recursos, quadros de amostra do vídeo vão para o Google Gemini; um modelo local só pode substituir a etapa de escolha de momentos.',
          'O repositório não tem releases nem tags, então não há número de versão do aplicativo; o último commit do ramo principal é de 19 de novembro de 2026.',
          'A política de privacidade e os termos do serviço hospedado apontam a TONVI TECH SL, em Málaga, Espanha, como operadora.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Vídeos de outras pessoas costumam ser protegidos por direitos autorais. Os termos do serviço hospedado pedem que os usuários confirmem que têm os direitos de cada vídeo enviado, e o mesmo cuidado vale ao hospedar por conta própria. Verifique os direitos e os termos da plataforma de origem antes de recortar e republicar o vídeo de outra pessoa. Isto é informação geral, não aconselhamento jurídico.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O OpenShorts é um gerador de clipes com IA: ele recebe um vídeo longo e devolve clipes verticais curtos com legendas, frases de abertura e títulos.**',
          'O README descreve três ferramentas em um só projeto: um Clip Generator, o AI Shorts (vídeos de marketing com atores de IA) e um YouTube Studio para títulos, miniaturas e descrições. Esta análise se concentra no Clip Generator, a parte com que o repositório abre. O README diz que o núcleo é de código aberto sob a licença MIT, enquanto o serviço hospedado, o OpenShorts Cloud, acrescenta cobrança, chaves gerenciadas, publicação automática e um modo Autopilot nos planos pagos.',
          'Segundo o site, o fluxo usa o faster-whisper para a transcrição com marcação de tempo por palavra, o PySceneDetect para os limites de cena, o Google Gemini 3.1 Flash-Lite para pontuar a transcrição e escolher de 3 a 15 momentos de 15 a 60 segundos, o FFmpeg para cortar os clipes e o rastreamento facial do MediaPipe, com o YOLOv8 como reserva, para reenquadrá-los em 9:16. O README acrescenta layouts com dois falantes empilhados, um layout de screencast e um layout com fundo desfocado, escolhidos por vídeo pelo Gemini ou forçados no painel.',
          'A política de privacidade e os termos do serviço hospedado apontam a TONVI TECH SL, empresa constituída na Espanha, como operadora. Tudo o que está descrito aqui são afirmações do responsável; a PromptQuorum não executou o software nem comparou seus clipes com os de outras ferramentas.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**Você pode usar o OpenShorts no serviço hospedado sem instalar nada, ou hospedá-lo por conta própria com Docker a partir do repositório do GitHub; não há instalador para baixar.**',
          'O repositório não tem GitHub Releases nem tags, então hospedar por conta própria significa um git clone seguido de uma compilação com Docker Compose. Os passos do README são: clonar o repositório, copiar opcionalmente .env.example para .env, executar docker compose up --build, abrir o painel na porta 5175 e inserir as chaves de API em Configurações. Para usar uma GPU NVIDIA, o README acrescenta um arquivo de override do Compose e ajustes de ambiente.',
        ],
        columns: ['Opção', 'Como obter'],
        rows: [
          { 'Opção': '[OpenShorts Cloud hospedado](https://www.openshorts.app)', 'Como obter': 'Entre e cole um link de vídeo; sem instalação' },
          { 'Opção': '[Auto-hospedado (Docker Compose)](https://github.com/mutonby/openshorts#getting-started)', 'Como obter': 'git clone, docker compose up --build; exige terminal' },
          { 'Opção': '[Site](https://www.openshorts.app)', 'Como obter': 'Site oficial, preços e guias' },
          { 'Opção': '[Política de privacidade](https://www.openshorts.app/privacy)', 'Como obter': 'Política do serviço hospedado' },
          { 'Opção': '[Código-fonte](https://github.com/mutonby/openshorts)', 'Como obter': 'Repositório do GitHub (núcleo MIT)' },
          { 'Opção': '[Cliente de linha de comando](https://pypi.org/project/openshorts/)', 'Como obter': 'pip install openshorts; conversa com uma API do OpenShorts' },
        ],
        note: 'Hospedar por conta própria exige um terminal e Docker; é uma configuração no estilo de desenvolvedor, não uma instalação com dois cliques. O README diz que a edição auto-hospedada e a nuvem executam o mesmo software.',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: 'Preços e licença',
        content: [
          '**Hospedar por conta própria é grátis, e o OpenShorts Cloud tem um plano gratuito com marca d\'água e planos pagos em dólares americanos.** Os preços abaixo vêm da página de preços consultada em 20 de novembro de 2026 e podem mudar. Os planos hospedados são medidos em minutos de origem, isto é, os minutos de vídeo que você envia.',
          'Licença: o README diz que o aplicativo principal tem licença MIT, com uma exceção. O diretório cloud/ (cobrança, chaves gerenciadas e infraestrutura hospedada) tem o código disponível sob a OpenShorts Commercial License, que permite ler, modificar e hospedar por conta própria para uso pessoal ou interno, mas não oferecê-lo a terceiros como serviço pago. Hospedar o aplicativo principal não exige esse diretório. Recursos opcionais chamam outros serviços pagos com as suas próprias chaves, como fal.ai para vídeos com atores de IA, ElevenLabs para dublagem e Upload-Post para publicação; os custos deles são à parte.',
        ],
        columns: ['Plano', 'Preço e limites'],
        rows: [
          { 'Plano': 'Auto-hospedado', 'Preço e limites': 'Grátis, MIT; hardware e chaves de API por sua conta' },
          { 'Plano': 'Hospedado Free', 'Preço e limites': '$0; 1º vídeo até 60 min, depois 20 min/mês; marca d\'água' },
          { 'Plano': 'Hospedado Starter', 'Preço e limites': '$12/mês; 100 min/mês; sem marca d\'água' },
          { 'Plano': 'Hospedado Creator', 'Preço e limites': '$29/mês; 300 min/mês; sem marca d\'água' },
          { 'Plano': 'Hospedado Pro', 'Preço e limites': '$59/mês; 750 min/mês; sem marca d\'água' },
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**Para hospedar por conta própria, o README cita Docker, Docker Compose e 8 GB ou mais de RAM, e descreve a GPU como opcional.**',
          'A imagem padrão usa apenas a CPU. O responsável diz que um vídeo de 8 minutos leva de 5 a 8 minutos numa CPU típica e cerca de 50 segundos na sua GPU NVIDIA hospedada; são números do responsável, não medições da PromptQuorum.',
        ],
        columns: ['Item', 'Segundo o README'],
        rows: [
          { 'Item': 'Software', 'Segundo o README': 'Docker e Docker Compose' },
          { 'Item': 'RAM do sistema', 'Segundo o README': '8 GB ou mais' },
          { 'Item': 'GPU', 'Segundo o README': 'Opcional; NVIDIA com NVENC; 8 GB de VRAM para large-v3-turbo' },
          { 'Item': 'Chave de API do Gemini', 'Segundo o README': 'Necessária, ou defina LLM_BASE_URL para um modelo local' },
          { 'Item': 'Outras chaves', 'Segundo o README': 'fal.ai, ElevenLabs, Upload-Post em recursos opcionais' },
          { 'Item': 'Espaço em disco', 'Segundo o README': 'Não informado' },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O Clip Generator gira em torno da detecção de momentos, do reenquadramento vertical, das legendas e de um editor; o restante do projeto são extras opcionais.** Os itens abaixo são afirmações do responsável, tiradas do README e do site.',
        ],
        items: [
          'Detecção de momentos: um modelo de linguagem pontua a transcrição e os limites de cena e devolve de 3 a 15 momentos de 15 a 60 segundos, cada um com uma pontuação de viralidade.',
          'Reenquadramento vertical: rastreamento facial por cena, um layout com fundo desfocado, dois falantes empilhados com as legendas na junção e um layout de screencast.',
          'Legendas: legendas palavra por palavra do faster-whisper, ou do Parakeet numa GPU, gravadas no clipe em vários estilos.',
          'Editor de clipes: cortes por palavra a partir da transcrição, segmentos extras, mudanças de enquadramento e novas renderizações.',
          'Frases de abertura: uma linha inicial escrita a partir do que é dito no clipe, editável em texto, estilo e posição.',
          'Dublagem: dublagem de voz com o ElevenLabs em mais de 30 idiomas, com a sua própria chave do ElevenLabs.',
          'Automação: um servidor MCP integrado, uma API REST com webhooks de conclusão, um cliente de linha de comando e um arquivo de skill para agentes.',
          'Publicação: postagem e agendamento em redes sociais pelo serviço Upload-Post, com a sua própria chave ao hospedar por conta própria.',
          'Extras: o AI Shorts, que gera vídeos de marketing com atores de IA pelo fal.ai, e um YouTube Studio para títulos, miniaturas e descrições.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Para onde vão seu vídeo e seus dados',
        content: [
          '**O OpenShorts é híbrido: algumas etapas rodam na máquina que o hospeda e outras chamam serviços externos.**',
          'Segundo o README, a transcrição, a detecção de cenas e o rastreamento facial rodam no host. Por padrão, o seletor de momentos envia a transcrição, e não o vídeo, ao Google Gemini. O README diz que definir LLM_BASE_URL para um servidor compatível com a OpenAI, como Ollama, LM Studio ou vLLM, mantém o fluxo de clipes na sua própria máquina, mas que a escolha de layout, o detector de conteúdo na tela e os vídeos sem fala ainda precisam do Gemini; sem chave, essas funções recorrem a um recorte simples com rastreamento facial. Ele também diz que as chaves de API digitadas no painel são criptografadas no navegador e não ficam armazenadas no servidor.',
          'No serviço hospedado, o vídeo é enviado à operadora. A política de privacidade diz que ela processa os vídeos que você envia, envia a transcrição e quadros de amostra, que podem mostrar rostos, ao Google Gemini, envia o áudio ao ElevenLabs quando você pede dublagem e não usa o seu conteúdo para treinar modelos de IA. Diz que os clipes do plano gratuito são apagados após 7 dias, cita servidores na Alemanha e aponta a AEPD, a autoridade espanhola de proteção de dados, como autoridade de supervisão. A PromptQuorum não capturou tráfego de rede nem verificou essas afirmações.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é',
        content: [
          '**O OpenShorts serve a quem quer cortar gravações longas com ajuda da IA e valoriza uma opção de código aberto.**',
        ],
        items: [
          'Podcasters, streamers e criadores de cursos que transformam gravações longas em shorts e querem testar primeiro um plano hospedado gratuito.',
          'Desenvolvedores e agências que querem hospedar por conta própria, alterar o fluxo ou chamá-lo por MCP, REST ou linha de comando.',
          'Equipes que preferem manter o vídeo de origem no próprio servidor e aceitam chamadas ao Gemini no seletor de momentos, ou conseguem rodar um modelo local.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        content: [
          '**O OpenShorts serve menos bem em alguns casos, e vários pontos continuam sem verificação.**',
        ],
        items: [
          'Não serve: quem precisa hoje de um fluxo totalmente offline. A escolha de layout e os vídeos sem fala ainda precisam do Gemini, segundo o README.',
          'Não serve: quem quer um instalador de desktop com um clique. Não há releases, e hospedar por conta própria exige Docker e um terminal.',
          'Não verificado: a qualidade dos clipes, as pontuações de viralidade e a velocidade. A PromptQuorum não fez testes, e os números de velocidade são do responsável.',
          'Não verificado: o quanto um modelo local substitui o Gemini na escolha de momentos. O README diz que modelos de 7-8B devolvem saídas válidas de forma confiável e os de 3B não; a PromptQuorum não testou isso.',
          'Não verificado: uma versão do aplicativo. O repositório não tem releases nem tags; o manifesto do registro MCP indica 1.0.0 e o pacote de linha de comando no PyPI é 0.1.0, mas nenhum dos dois é uma versão do aplicativo.',
          'Não verificado: as tabelas comparativas do site e do README que colocam o OpenShorts frente ao Opus Clip, Klap e Vizard. São afirmações do responsável.',
          'Não verificado: se o serviço hospedado atende a uma necessidade jurídica ou de conformidade específica. Leia antes a política de privacidade e os termos.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenShorts e alternativas',
        itemHeadings: true,
        content: [
          '**O OpenShorts está no diretório ao lado de outras ferramentas de vídeo de código aberto, mas elas fazem trabalhos diferentes, e a PromptQuorum não as comparou na prática.** As tabelas do próprio projeto citam Opus Clip, Klap e Vizard como ferramentas de clipes hospedadas e de código fechado; essas tabelas são afirmações do responsável.',
        ],
        columns: ['Ferramenta', 'Segundo a análise'],
        rows: [
          { 'Ferramenta': '[FunClip](/pt/power-local-llm/funclip-review)', 'Segundo a análise': 'Grátis, MIT, auto-hospedado; cortes guiados pela transcrição com um LLM, o mais próximo em propósito' },
          { 'Ferramenta': '[FableCut](/pt/power-local-llm/fablecut-review)', 'Segundo a análise': 'Editor de navegador grátis e MIT que agentes de IA controlam por MCP; edita material que você já tem' },
          { 'Ferramenta': '[OpenMontage](/pt/power-local-llm/openmontage-review)', 'Segundo a análise': 'Fluxo agêntico grátis e AGPL-3.0 que produz vídeos inteiros; não é um gerador de clipes' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O OpenShorts é grátis?',
            a: 'Hospedar por conta própria é grátis, e você paga apenas pelos serviços externos opcionais que conectar, como a dublagem do ElevenLabs. O serviço hospedado é medido em minutos de origem, isto é, os minutos de vídeo que você envia.',
          },
          {
            q: 'O OpenShorts funciona sem chave do Google?',
            a: 'Em parte. Segundo o README, definir LLM_BASE_URL para Ollama, LM Studio, vLLM ou outro servidor compatível com a OpenAI substitui o Gemini na escolha de momentos, e o painel deixa de pedir uma chave do Gemini. O README recomenda aumentar o comprimento de contexto do Ollama para 16384 tokens, porque o padrão de 4096 trunca em silêncio.',
          },
          {
            q: 'Funciona com Claude, ChatGPT ou n8n?',
            a: 'O README descreve um servidor MCP integrado, um endpoint hospedado e um caminho /mcp auto-hospedado, uma API REST com webhooks de conclusão e um fluxo do n8n importável. O endpoint MCP hospedado exige uma chave de API da conta ou uma aprovação OAuth, enquanto, segundo o README, uma cópia auto-hospedada não precisa de chave.',
          },
          {
            q: 'Posso cortar qualquer vídeo do YouTube?',
            a: 'A ferramenta aceita links e uploads, mas os termos do serviço hospedado pedem que você confirme que tem os direitos de cada vídeo enviado. Verifique antes os direitos autorais e os termos da plataforma. Isto é informação geral, não aconselhamento jurídico.',
          },
          {
            q: 'Como o plano gratuito hospedado difere de hospedar por conta própria?',
            a: 'Segundo a página de preços, o plano gratuito é apenas para download, sem publicação automática e com os 2 a 4 melhores clipes de cada vídeo. Auto-hospedado não há limite de minutos e é possível publicar com a sua própria conta do Upload-Post, enquanto o Autopilot existe apenas na nuvem.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O OpenShorts vale a pena ser testado se você quer um gerador de clipes de código aberto e aceita que suas etapas de IA dependam, por padrão, de serviços externos.**',
          'No papel, ele cobre todo o fluxo de clipes, da transcrição e da escolha de momentos ao reenquadramento vertical, às legendas, a um editor e ao acesso por MCP e API. O projeto está ativo, com o último commit em 19 de novembro de 2026, e um plano hospedado gratuito permite avaliar os clipes antes de configurar qualquer coisa.',
          'As desvantagens são claras. A configuração padrão envia transcrições ao Google Gemini, um modelo local substitui apenas parte dessa etapa, não há releases nem números de versão, e hospedar por conta própria exige Docker e um terminal. A PromptQuorum não testou a qualidade dos clipes; experimente com um vídeo cujo uso você tenha permissão e leia a política de privacidade antes de enviar algo sensível.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do OpenShorts](https://www.openshorts.app) — descrição do produto, fluxo, planos, consultado em 20 de novembro de 2026.',
          '[Página de preços](https://www.openshorts.app/pricing) — planos hospedados, minutos, marca d\'água e diferenças de publicação, consultada em 20 de novembro de 2026.',
          '[Política de privacidade](https://www.openshorts.app/privacy) — operadora, suboperadores, retenção, autoridade de supervisão, atualizada em 17 de novembro de 2026, consultada em 20 de novembro de 2026.',
          '[Termos de serviço](https://www.openshorts.app/terms) — operadora, compromisso sobre direitos do conteúdo, lei aplicável, consultados em 20 de novembro de 2026.',
          '[Repositório do GitHub](https://github.com/mutonby/openshorts) — código-fonte, licença, sem releases nem tags, último commit em 19 de novembro de 2026, consultado em 20 de novembro de 2026.',
          '[README](https://github.com/mutonby/openshorts#readme) — recursos, requisitos, instalação com Docker, opção de LLM local, MCP e API, exceção de licença, consultado em 20 de novembro de 2026.',
          '[openshorts no PyPI](https://pypi.org/project/openshorts/) — pacote de linha de comando, versão 0.1.0, consultado em 20 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Ferramentas locais de IA para imagem e vídeo comparadas](/pt/power-local-llm/local-llm-images-video-compared) — ferramentas de geração de imagem e vídeo lado a lado.',
          '[Análise do FunClip](/pt/power-local-llm/funclip-review) — uma ferramenta gratuita que corta vídeo a partir da transcrição.',
          '[Análise do FableCut](/pt/power-local-llm/fablecut-review) — um editor de vídeo no navegador que agentes de IA podem controlar.',
          '[Análise do OpenMontage](/pt/power-local-llm/openmontage-review) — um fluxo agêntico que produz vídeos inteiros.',
          '[Diretório de software LLM local](/pt/directory) — o catálogo completo de ferramentas de IA locais.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-20',
    theme: 'Image & Video Generation',
    heroImage: '/images/openshorts-review-hero-zh.webp',
    title: 'OpenShorts 评测：面向竖屏短视频的开源 AI 剪辑工具',
    seoTitle: 'OpenShorts 评测：开源 AI 视频剪辑与竖屏短片工具',
    intro:
      'OpenShorts 是一款开源工具，可把播客、网络研讨会或直播等长视频剪成带字幕的竖屏短片段，用于 TikTok、Instagram Reels 和 YouTube Shorts。您可以用 Docker 自行运行，也可以使用托管服务 OpenShorts Cloud。本评测基于该项目的官网、隐私政策、服务条款，以及 GitHub 仓库和 README。PromptQuorum 没有测试过这款软件。',
    metaDescription:
      'OpenShorts 把长视频剪成带字幕的竖屏片段。可用 Docker 免费自托管，也可用云服务。本地还是云端 AI、价格、隐私与未核实事项。',
    twitterDescription:
      'OpenShorts 是 MIT 许可的竖屏短视频 AI 剪辑工具。自托管、托管套餐、哪些在本地运行、隐私与未核实事项。',
    audience:
      '想把长视频剪成带字幕竖屏片段的播客主、主播、创作者和开发者，无论是否自托管',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenShorts',
    targetKeywords: [
      'OpenShorts 评测',
      'OpenShorts',
      '开源剪辑工具',
      '自托管 AI 剪辑生成器',
      '长视频转短视频',
      'OpusClip 替代品',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenShorts 是一款采用 MIT 许可的开源 AI 剪辑工具，能从长视频中找出最精彩的片段，并返回带字幕的 9:16 片段，可用 Docker 自托管，也可使用托管服务 OpenShorts Cloud。** 它默认并非完全本地：除非把自托管副本指向本地语言模型，否则选取精彩片段的步骤会调用 Google Gemini。',
    quickAnswerTop: {
      zh: {
        question: 'OpenShorts 是什么？它真的在本地运行吗？',
        answer:
          'OpenShorts 是 TONVI TECH SL 推出的开源剪辑工具，可把长视频剪成带字幕的竖屏片段。转写、场景检测和带人脸追踪的重新构图都在托管它的机器上运行，但默认情况下转写文本会发送到 Google Gemini 来挑选片段，因此它是混合模式，而非完全本地。',
        bullets: [
          '平台：托管网页应用，或用 Docker Compose 自托管。',
          '价格：自托管免费；托管服务从带水印的免费套餐起步。',
          '许可证：核心应用为 MIT，cloud/ 文件夹采用商业许可。',
          '硬件：README 列出 Docker 和 8 GB 或以上内存；NVIDIA GPU 为可选。',
          '运营方：据隐私政策，为西班牙马拉加的 TONVI TECH SL。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: '概览', anchor: 'overview' },
      { label: '如何获取', anchor: 'get-it' },
      { label: '价格与许可证', anchor: 'pricing-license' },
      { label: '运行要求', anchor: 'requirements' },
      { label: '功能', anchor: 'features' },
      { label: '您的视频和数据去向', anchor: 'privacy' },
      { label: '适合谁用', anchor: 'who-should-use' },
      { label: '我们未能核实的事项', anchor: 'who-should-not-use' },
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
            text: 'OpenShorts 是一款开源工具，可把长视频剪成带字幕的竖屏片段，既能在您自己的 Docker 主机上运行，也能使用托管云服务。',
          },
          {
            type: 'plain-terms',
            text: '您提供 YouTube 链接或视频文件，它会转写语音，请语言模型判断哪些片段值得发布，把这些片段剪出来，并围绕说话的人裁成竖屏画面。语言模型默认是 Google Gemini；在自托管副本上，这一步可以换成您自己的模型。',
          },
        ],
        items: [
          '自托管采用 MIT 许可，免费；开发方称没有水印，也没有使用上限；需要 Docker、终端和约 8 GB 或以上内存。',
          '托管的 OpenShorts Cloud 无需安装；免费套餐会加水印，付费套餐见“价格与许可证”。',
          '默认情况下，转写文本以及部分功能用到的视频抽样帧会发送到 Google Gemini；本地模型只能替换挑选片段这一步。',
          '仓库没有发布版本（release）也没有标签，因此没有应用版本号；主分支的最后一次提交在 2026年11月19日。',
          '托管服务的隐私政策和服务条款将西班牙马拉加的 TONVI TECH SL 列为运营方。',
        ],
        callouts: [
          {
            type: 'note',
            text: '他人制作的视频通常受版权保护。托管服务的条款要求用户确认自己拥有所提交每个视频的权利，自托管时同样需要保持这份谨慎。在剪辑并再次发布他人视频之前，请先确认权利以及来源平台的条款。这只是一般性信息，不构成法律意见。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**OpenShorts 是一款 AI 剪辑工具：输入长视频，返回带字幕、开场钩子文案和标题的竖屏短片段。**',
          'README 介绍了同一项目中的三种工具：Clip Generator、AI Shorts（用 AI 演员制作营销视频）以及用于标题、缩略图和简介的 YouTube Studio。本评测只聚焦仓库首先介绍的 Clip Generator。README 称核心部分以 MIT 许可开源，而托管服务 OpenShorts Cloud 在付费套餐中增加了计费、托管密钥、自动发布和 Autopilot 模式。',
          '据官网介绍，其流程为：用 faster-whisper 做逐词时间戳转写，用 PySceneDetect 检测场景边界，用 Google Gemini 3.1 Flash-Lite 给转写文本打分并选出 3 到 15 个、每个 15 到 60 秒的片段，用 FFmpeg 剪切，再用 MediaPipe 人脸追踪（YOLOv8 作后备）重新构图为 9:16。README 还提到两位说话者上下叠放的布局、屏幕录制布局和模糊背景布局，由 Gemini 按视频选择，也可在仪表板中强制指定。',
          '托管服务的隐私政策和服务条款将在西班牙注册成立的公司 TONVI TECH SL 列为运营方。这里描述的一切都是开发方的说法；PromptQuorum 没有运行该软件，也没有把它的片段与其他工具比较。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '如何获取',
        content: [
          '**您可以直接使用托管服务而无需安装任何东西，也可以从 GitHub 仓库用 Docker 自托管；没有可下载的安装程序。**',
          '仓库没有 GitHub Releases，也没有标签，所以自托管需要先 git clone，再用 Docker Compose 构建。README 的步骤是：克隆仓库，按需把 .env.example 复制为 .env，运行 docker compose up --build，在 5175 端口打开仪表板，并在设置中填入 API 密钥。若使用 NVIDIA GPU，README 还补充了 Compose 覆盖文件和环境变量设置。',
        ],
        columns: ['方式', '获取方式'],
        rows: [
          { '方式': '[托管版 OpenShorts Cloud](https://www.openshorts.app)', '获取方式': '登录并粘贴视频链接；无需安装' },
          { '方式': '[自托管（Docker Compose）](https://github.com/mutonby/openshorts#getting-started)', '获取方式': 'git clone、docker compose up --build；需要终端' },
          { '方式': '[官网](https://www.openshorts.app)', '获取方式': '官方站点、价格与指南' },
          { '方式': '[隐私政策](https://www.openshorts.app/privacy)', '获取方式': '托管服务的政策' },
          { '方式': '[源代码](https://github.com/mutonby/openshorts)', '获取方式': 'GitHub 仓库（核心为 MIT）' },
          { '方式': '[命令行客户端](https://pypi.org/project/openshorts/)', '获取方式': 'pip install openshorts；与 OpenShorts API 通信' },
        ],
        note: '自托管需要终端和 Docker，属于开发者式的部署，而不是双击安装。README 称自托管版与云服务运行的是同一套软件。',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: '价格与许可证',
        content: [
          '**自托管免费；托管的 OpenShorts Cloud 有带水印的免费套餐，以及以美元计价的付费套餐。** 下列价格来自 2026年11月20日查看的价格页面，可能会变动。托管套餐按源视频分钟数计量，即您提交视频的分钟数。',
          '许可证：README 称核心应用采用 MIT 许可，但有一项例外。cloud/ 目录（计费、托管密钥和托管基础设施）以 OpenShorts Commercial License 提供源代码，允许出于个人或内部用途阅读、修改和自托管，但不得作为付费服务提供给第三方。自托管核心应用不需要该目录。可选功能会用您自己的密钥调用其他付费服务，例如用 fal.ai 生成 AI 演员视频、用 ElevenLabs 配音、用 Upload-Post 发布；这些费用另计。',
        ],
        columns: ['套餐', '价格与限制'],
        rows: [
          { '套餐': '自托管', '价格与限制': '免费，MIT；硬件和 API 密钥自备' },
          { '套餐': '托管 Free', '价格与限制': '$0；首个视频最长60分钟，之后每月20分钟；有水印' },
          { '套餐': '托管 Starter', '价格与限制': '$12/月；每月100分钟；无水印' },
          { '套餐': '托管 Creator', '价格与限制': '$29/月；每月300分钟；无水印' },
          { '套餐': '托管 Pro', '价格与限制': '$59/月；每月750分钟；无水印' },
        ],
      },
      requirements: {
        id: 'requirements',
        title: '运行要求',
        content: [
          '**对于自托管，README 列出 Docker、Docker Compose 和 8 GB 或以上内存，并说明 GPU 为可选。**',
          '默认镜像仅使用 CPU。开发方称，一段8分钟的视频在普通 CPU 上需要 5 到 8 分钟，在其托管的 NVIDIA GPU 上约需 50 秒；这些是开发方给出的数字，不是 PromptQuorum 的实测。',
        ],
        columns: ['项目', 'README 中的说明'],
        rows: [
          { '项目': '软件', 'README 中的说明': 'Docker 和 Docker Compose' },
          { '项目': '系统内存', 'README 中的说明': '8 GB 或以上' },
          { '项目': 'GPU', 'README 中的说明': '可选；带 NVENC 的 NVIDIA；large-v3-turbo 需 8 GB 显存' },
          { '项目': 'Gemini API 密钥', 'README 中的说明': '需要，或设置 LLM_BASE_URL 使用本地模型' },
          { '项目': '其他密钥', 'README 中的说明': '可选功能用 fal.ai、ElevenLabs、Upload-Post' },
          { '项目': '磁盘空间', 'README 中的说明': '未说明' },
        ],
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**Clip Generator 以片段检测、竖屏重新构图、字幕和编辑器为核心；项目的其余部分是可选的附加功能。** 以下均为开发方在 README 和官网中的说法。',
        ],
        items: [
          '片段检测：语言模型为转写文本和场景边界打分，返回 3 到 15 个、每个 15 到 60 秒的片段，并附带传播潜力评分。',
          '竖屏重新构图：按场景进行人脸追踪、模糊背景布局、两位说话者上下叠放且字幕位于接缝处，以及屏幕录制布局。',
          '字幕：由 faster-whisper（GPU 上可用 Parakeet）生成逐词字幕，以多种样式烧录进片段。',
          '片段编辑器：基于转写文本的逐词剪切、额外片段、构图调整和重新渲染。',
          '开场钩子：根据片段中所说内容撰写的开场语，可编辑文字、样式和位置。',
          '配音：使用 ElevenLabs 提供 30 多种语言的语音配音，需自备 ElevenLabs 密钥。',
          '自动化：内置 MCP 服务器、带完成回调（webhook）的 REST API、命令行客户端和智能体技能文件。',
          '发布：通过 Upload-Post 服务向社交网络发布和定时发布，自托管时使用您自己的密钥。',
          '附加功能：通过 fal.ai 生成 AI 演员营销视频的 AI Shorts，以及用于标题、缩略图和简介的 YouTube Studio。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '您的视频和数据去向',
        content: [
          '**OpenShorts 是混合模式：部分步骤在托管它的机器上运行，另一些则调用外部服务。**',
          '据 README，转写、场景检测和人脸追踪在主机上运行。选取片段的步骤默认把转写文本而不是视频发送到 Google Gemini。README 称，把 LLM_BASE_URL 设置为 Ollama、LM Studio、vLLM 等兼容 OpenAI 的服务器，可让剪辑流程留在您自己的机器上，但布局选择、屏幕内容检测器和无语音视频仍需要 Gemini；没有密钥时，这些功能会退回为简单的人脸追踪裁切。README 还称，在仪表板中输入的 API 密钥在浏览器中加密，不会存储在服务器上。',
          '在托管服务上，视频会上传给运营方。其隐私政策称，它会处理您提交的视频，把转写文本和可能出现人脸的抽样帧发送给 Google Gemini，在您要求配音时把音频发送给 ElevenLabs，并且不会用您的内容训练 AI 模型。政策称免费套餐的片段在 7 天后删除，提到服务器位于德国，并将西班牙数据保护机构 AEPD 列为监管机构。PromptQuorum 没有抓取网络流量，也没有核实这些说法。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        content: [
          '**OpenShorts 适合希望借助 AI 剪辑长录像、并看重开源选项的人。**',
        ],
        items: [
          '把长录像剪成短视频、想先试用免费托管套餐的播客主、主播和课程创作者。',
          '想自托管、修改流程，或通过 MCP、REST 或命令行调用它的开发者和代理机构。',
          '更愿意把源视频留在自己服务器上、并能接受选取片段时调用 Gemini 或能运行本地模型的团队。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的事项',
        content: [
          '**OpenShorts 在某些情况下不太合适，另有若干事项尚未核实。**',
        ],
        items: [
          '不适合：目前需要完全离线流程的人。据 README，布局选择和无语音视频仍需要 Gemini。',
          '不适合：想要一键安装的桌面安装程序的人。没有发布版本，自托管需要 Docker 和终端。',
          '未核实：片段质量、传播潜力评分和速度。PromptQuorum 没有做测试，速度数字来自开发方。',
          '未核实：本地模型在选取片段上能在多大程度上替代 Gemini。README 称 7-8B 模型能稳定返回有效输出，3B 模型则不能；PromptQuorum 没有测试。',
          '未核实：应用版本。仓库没有发布版本也没有标签；MCP 注册表清单写的是 1.0.0，PyPI 上的命令行包是 0.1.0，但两者都不是应用版本。',
          '未核实：官网和 README 中把 OpenShorts 与 Opus Clip、Klap、Vizard 做对比的表格。它们是开发方的说法。',
          '未核实：托管服务是否满足某项具体的法律或合规需求。请先阅读其隐私政策和服务条款。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenShorts 与替代方案',
        itemHeadings: true,
        content: [
          '**在目录中，OpenShorts 与其他开源视频工具并列，但它们做的事情不同，PromptQuorum 也没有亲手对比。** 该项目自己的表格把 Opus Clip、Klap 和 Vizard 列为闭源的托管剪辑工具；这些表格是开发方的说法。',
        ],
        columns: ['工具', '其评测中的定位'],
        rows: [
          { '工具': '[FunClip](/zh/power-local-llm/funclip-review)', '其评测中的定位': '免费、MIT、自托管；用 LLM 按转写文本剪辑，用途最接近' },
          { '工具': '[FableCut](/zh/power-local-llm/fablecut-review)', '其评测中的定位': '免费的 MIT 浏览器编辑器，AI 智能体通过 MCP 操控；编辑您已有的素材' },
          { '工具': '[OpenMontage](/zh/power-local-llm/openmontage-review)', '其评测中的定位': '免费的 AGPL-3.0 智能体式流程，生成完整视频；不是剪辑工具' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'OpenShorts 免费吗？',
            a: '自托管免费，您只需为自己接入的可选外部服务付费，例如 ElevenLabs 配音。托管服务按源视频分钟数计量，即您提交视频的分钟数。',
          },
          {
            q: '没有 Google 密钥，OpenShorts 能运行吗？',
            a: '部分可以。据 README，把 LLM_BASE_URL 设置为 Ollama、LM Studio、vLLM 或其他兼容 OpenAI 的服务器，可在选取片段时替代 Gemini，仪表板也不再要求输入 Gemini 密钥。README 建议把 Ollama 的上下文长度提高到 16384 个 token，因为默认的 4096 会在不提示的情况下截断。',
          },
          {
            q: '它能和 Claude、ChatGPT 或 n8n 配合使用吗？',
            a: 'README 介绍了内置的 MCP 服务器、托管端点和自托管的 /mcp 路径、带完成回调的 REST API，以及可导入的 n8n 工作流。托管的 MCP 端点需要账户 API 密钥或 OAuth 授权，而据 README，自托管副本不需要密钥。',
          },
          {
            q: '我可以剪辑任何 YouTube 视频吗？',
            a: '该工具接受链接和上传，但托管服务的条款要求您确认自己拥有所提交每个视频的权利。请先确认版权和平台条款。这只是一般性信息，不构成法律意见。',
          },
          {
            q: '免费托管套餐和自托管有什么不同？',
            a: '据价格页面，免费套餐仅限下载，没有自动发布，每个视频返回最好的 2 到 4 个片段。自托管没有分钟数上限，可用您自己的 Upload-Post 账户发布，而 Autopilot 仅限云端。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果您想要一款开源剪辑工具，并能接受其 AI 步骤默认依赖外部服务，OpenShorts 值得一试。**',
          '从纸面上看，它覆盖了完整的剪辑流程，从转写和选取片段，到竖屏重新构图、字幕、编辑器，再到 MCP 和 API 接入。项目很活跃，最后一次提交在 2026年11月19日，免费的托管套餐让您无需配置任何东西就能先评估片段效果。',
          '取舍很明确。默认配置会把转写文本发送到 Google Gemini，本地模型只能替换这一步的一部分，没有发布版本和版本号，自托管需要 Docker 和终端。PromptQuorum 没有测试片段质量，请用您有权使用的视频试用，并在上传任何敏感内容之前阅读隐私政策。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[OpenShorts 官网](https://www.openshorts.app) — 产品介绍、流程、套餐，2026年11月20日查看。',
          '[价格页面](https://www.openshorts.app/pricing) — 托管套餐、分钟数、水印和发布方面的差异，2026年11月20日查看。',
          '[隐私政策](https://www.openshorts.app/privacy) — 运营方、子处理方、保留期、监管机构，2026年11月17日更新，2026年11月20日查看。',
          '[服务条款](https://www.openshorts.app/terms) — 运营方、内容权利承诺、适用法律，2026年11月20日查看。',
          '[GitHub 仓库](https://github.com/mutonby/openshorts) — 源代码、许可证、无发布版本和标签、最后一次提交在 2026年11月19日，2026年11月20日查看。',
          '[README](https://github.com/mutonby/openshorts#readme) — 功能、运行要求、Docker 部署、本地 LLM 选项、MCP 和 API、许可证例外，2026年11月20日查看。',
          '[PyPI 上的 openshorts](https://pypi.org/project/openshorts/) — 命令行包，版本 0.1.0，2026年11月20日查看。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地图像与视频 AI 工具对比](/zh/power-local-llm/local-llm-images-video-compared) — 并排比较图像和视频生成工具。',
          '[FunClip 评测](/zh/power-local-llm/funclip-review) — 一款按转写文本剪辑视频的免费工具。',
          '[FableCut 评测](/zh/power-local-llm/fablecut-review) — 一款可由 AI 智能体操控的浏览器视频编辑器。',
          '[OpenMontage 评测](/zh/power-local-llm/openmontage-review) — 一条生成完整视频的智能体式流程。',
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
    next_refresh_due: '2027-05-20',
    theme: 'Image & Video Generation',
    heroImage: '/images/openshorts-review-hero-ar.webp',
    title: 'مراجعة OpenShorts: أداة مفتوحة المصدر بالذكاء الاصطناعي لإنشاء مقاطع رأسية قصيرة',
    seoTitle: 'مراجعة OpenShorts: أداة مفتوحة المصدر لقص الفيديو',
    intro:
      'OpenShorts أداة مفتوحة المصدر تحوّل فيديو طويلاً، مثل بودكاست أو ندوة عبر الإنترنت أو بثاً مباشراً، إلى مقاطع رأسية قصيرة مع ترجمة مضمّنة لمنصات TikTok وInstagram Reels وYouTube Shorts. يمكنك تشغيلها بنفسك عبر Docker أو استخدام الخدمة المستضافة OpenShorts Cloud. تستند هذه المراجعة إلى موقع المشروع وسياسة الخصوصية وشروط الخدمة، وإلى مستودع GitHub وملف README. لم تختبر PromptQuorum البرنامج.',
    metaDescription:
      'يحوّل OpenShorts الفيديوهات الطويلة إلى مقاطع رأسية مع ترجمة. استضفه مجاناً عبر Docker أو استخدم السحابة. الذكاء الاصطناعي محلياً أو سحابياً والخصوصية.',
    twitterDescription:
      'OpenShorts أداة بترخيص MIT لقص الفيديو بالذكاء الاصطناعي إلى مقاطع رأسية. الاستضافة الذاتية، الخطط المستضافة، ما يعمل محلياً، الخصوصية والنقاط غير المؤكدة.',
    audience:
      'مقدمو البودكاست والبث والمبدعون والمطورون الذين يريدون تحويل الفيديوهات الطويلة إلى مقاطع رأسية مع ترجمة مضمّنة، مع الاستضافة الذاتية أو بدونها',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenShorts',
    targetKeywords: [
      'مراجعة OpenShorts',
      'OpenShorts',
      'أداة قص فيديو مفتوحة المصدر',
      'مولّد مقاطع بالذكاء الاصطناعي بالاستضافة الذاتية',
      'تحويل الفيديو الطويل إلى Shorts',
      'بديل OpusClip',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenShorts أداة مفتوحة المصدر بترخيص MIT تعمل بالذكاء الاصطناعي، تجد أقوى اللحظات في فيديو طويل وتعيد مقاطع بنسبة 9:16 مع ترجمة مضمّنة، سواء استضفتها بنفسك عبر Docker أو استخدمت الخدمة المستضافة OpenShorts Cloud.** وهي ليست محلية بالكامل افتراضياً: يستدعي منتقي اللحظات خدمة Google Gemini ما لم توجّه نسخة مستضافة ذاتياً إلى نموذج لغوي محلي.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو OpenShorts، وهل يعمل محلياً فعلاً؟',
        answer:
          'OpenShorts أداة مفتوحة المصدر من شركة TONVI TECH SL تقصّ الفيديوهات الطويلة إلى مقاطع رأسية مع ترجمة مضمّنة. يعمل التفريغ النصي واكتشاف المشاهد وإعادة التأطير مع تتبّع الوجه على الجهاز الذي يستضيفها، لكن النص المفرّغ يُرسل افتراضياً إلى Google Gemini لاختيار اللحظات، فهي هجينة وليست محلية بالكامل.',
        bullets: [
          'المنصات: تطبيق ويب مستضاف، أو استضافة ذاتية عبر Docker Compose.',
          'السعر: مجانية عند الاستضافة الذاتية؛ وتبدأ الخدمة المستضافة بخطة مجانية بعلامة مائية.',
          'الترخيص: MIT للتطبيق الأساسي، ومجلد cloud/ بترخيص تجاري.',
          'العتاد: يذكر README الحاجة إلى Docker و8 GB أو أكثر من الذاكرة؛ وبطاقة NVIDIA اختيارية.',
          'الجهة المطوّرة: TONVI TECH SL في ملقة بإسبانيا، بحسب سياسة الخصوصية.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'نظرة عامة', anchor: 'overview' },
      { label: 'كيف تحصل عليها', anchor: 'get-it' },
      { label: 'الأسعار والترخيص', anchor: 'pricing-license' },
      { label: 'المتطلبات', anchor: 'requirements' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'إلى أين يذهب الفيديو وبياناتك', anchor: 'privacy' },
      { label: 'لمن تناسب', anchor: 'who-should-use' },
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
            text: 'OpenShorts أداة مفتوحة المصدر تحوّل الفيديوهات الطويلة إلى مقاطع رأسية مع ترجمة مضمّنة، إما على خادم Docker الخاص بك أو عبر خدمة سحابية مستضافة.',
          },
          {
            type: 'plain-terms',
            text: 'تعطيها رابط YouTube أو ملف فيديو، فتفرّغ الكلام نصياً، وتسأل نموذجاً لغوياً عن اللحظات التي تستحق النشر، ثم تقصّها وتؤطّرها رأسياً حول المتحدث. النموذج اللغوي افتراضياً هو Google Gemini؛ وفي النسخة المستضافة ذاتياً يمكنك استبداله بنموذجك الخاص في هذه الخطوة.',
          },
        ],
        items: [
          'الاستضافة الذاتية مجانية بترخيص MIT، وبحسب الجهة المطوّرة لا توجد علامة مائية ولا حد للاستخدام؛ وتحتاج إلى Docker وطرفية وحوالي 8 GB من الذاكرة أو أكثر.',
          'خدمة OpenShorts Cloud المستضافة لا تتطلب تثبيتاً؛ وتضيف خطتها المجانية علامة مائية، وتُذكر الخطط المدفوعة ضمن «الأسعار والترخيص».',
          'افتراضياً يُرسل النص المفرّغ، وفي بعض الميزات لقطات مأخوذة من الفيديو، إلى Google Gemini؛ ويمكن لنموذج محلي أن يحل محل خطوة اختيار اللحظات فقط.',
          'لا يحتوي المستودع على إصدارات ولا وسوم، لذا لا يوجد رقم إصدار للتطبيق؛ وآخر commit في الفرع الرئيسي بتاريخ 19 نوفمبر 2026.',
          'تذكر سياسة الخصوصية وشروط الخدمة المستضافة أن الشركة المشغّلة هي TONVI TECH SL في ملقة بإسبانيا.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'مقاطع الفيديو التي أنتجها آخرون محمية في الغالب بحقوق النشر. تطلب شروط الخدمة المستضافة من المستخدمين تأكيد امتلاكهم حقوق كل فيديو يرسلونه، وينطبق الحذر نفسه عند الاستضافة الذاتية. تحقّق من الحقوق ومن شروط المنصة المصدر قبل قص فيديو يخص غيرك وإعادة نشره. هذه معلومات عامة وليست مشورة قانونية.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**OpenShorts أداة لقص المقاطع بالذكاء الاصطناعي: تأخذ فيديو طويلاً وتعيد مقاطع رأسية قصيرة مع ترجمة مضمّنة وجمل افتتاحية وعناوين.**',
          'يصف README ثلاث أدوات في مشروع واحد: Clip Generator، وAI Shorts (فيديوهات تسويقية بممثلين من الذكاء الاصطناعي)، وYouTube Studio للعناوين والصور المصغّرة والأوصاف. تركّز هذه المراجعة على Clip Generator، وهو الجزء الذي يبدأ به المستودع. يقول README إن النواة مفتوحة المصدر بترخيص MIT، بينما تضيف الخدمة المستضافة OpenShorts Cloud الفوترة والمفاتيح المُدارة والنشر التلقائي ووضع Autopilot في الخطط المدفوعة.',
          'بحسب الموقع، تستخدم السلسلة faster-whisper للتفريغ النصي بطوابع زمنية لكل كلمة، وPySceneDetect لحدود المشاهد، وGoogle Gemini 3.1 Flash-Lite لتقييم النص المفرّغ واختيار ما بين 3 و15 لحظة مدة كل منها من 15 إلى 60 ثانية، وFFmpeg لقص المقاطع، وتتبّع الوجه عبر MediaPipe مع YOLOv8 كبديل احتياطي لإعادة تأطيرها بنسبة 9:16. ويضيف README تخطيطات لمتحدثين اثنين فوق بعضهما، وتخطيط لتسجيل الشاشة، وتخطيط بخلفية مموّهة، يختارها Gemini لكل فيديو أو تُفرض من لوحة التحكم.',
          'تذكر سياسة الخصوصية وشروط الخدمة المستضافة أن الشركة المشغّلة هي TONVI TECH SL، وهي شركة مؤسسة في إسبانيا. كل ما يُوصف هنا هو أقوال من الجهة المطوّرة؛ ولم تشغّل PromptQuorum البرنامج ولم تقارن مقاطعه بأدوات أخرى.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليها',
        content: [
          '**يمكنك استخدام OpenShorts على الخدمة المستضافة دون تثبيت أي شيء، أو استضافته بنفسك عبر Docker من مستودع GitHub؛ ولا يوجد مثبّت قابل للتنزيل.**',
          'لا يحتوي المستودع على GitHub Releases ولا وسوم، لذا تعني الاستضافة الذاتية تنفيذ git clone ثم بناء عبر Docker Compose. خطوات README هي: استنساخ المستودع، ونسخ ملف .env.example إلى .env عند الرغبة، وتشغيل docker compose up --build، وفتح لوحة التحكم على المنفذ 5175، وإدخال مفاتيح API في الإعدادات. وللاستفادة من بطاقة NVIDIA يضيف README ملف تجاوز لـ Compose وإعدادات بيئة.',
        ],
        columns: ['الخيار', 'كيف تحصل عليه'],
        rows: [
          { 'الخيار': '[OpenShorts Cloud المستضافة](https://www.openshorts.app)', 'كيف تحصل عليه': 'سجّل الدخول والصق رابط فيديو؛ دون تثبيت' },
          { 'الخيار': '[استضافة ذاتية (Docker Compose)](https://github.com/mutonby/openshorts#getting-started)', 'كيف تحصل عليه': 'git clone ثم docker compose up --build؛ يلزم طرفية' },
          { 'الخيار': '[الموقع](https://www.openshorts.app)', 'كيف تحصل عليه': 'الموقع الرسمي والأسعار والأدلة' },
          { 'الخيار': '[سياسة الخصوصية](https://www.openshorts.app/privacy)', 'كيف تحصل عليه': 'سياسة الخدمة المستضافة' },
          { 'الخيار': '[الشيفرة المصدرية](https://github.com/mutonby/openshorts)', 'كيف تحصل عليه': 'مستودع GitHub (النواة MIT)' },
          { 'الخيار': '[عميل سطر الأوامر](https://pypi.org/project/openshorts/)', 'كيف تحصل عليه': 'pip install openshorts؛ يتصل بواجهة API لـ OpenShorts' },
        ],
        note: 'تحتاج الاستضافة الذاتية إلى طرفية وDocker، فهي إعداد على طريقة المطورين وليست تثبيتاً بنقرتين. يقول README إن النسخة المستضافة ذاتياً والسحابة تشغّلان البرنامج نفسه.',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: 'الأسعار والترخيص',
        content: [
          '**الاستضافة الذاتية مجانية، ولدى OpenShorts Cloud المستضافة خطة مجانية بعلامة مائية وخطط مدفوعة بالدولار الأمريكي.** الأسعار أدناه من صفحة الأسعار التي اطّلعنا عليها في 20 نوفمبر 2026، وقد تتغير. تُحتسب الخطط المستضافة بدقائق المصدر، أي دقائق الفيديو التي ترسلها.',
          'الترخيص: يقول README إن التطبيق الأساسي بترخيص MIT مع استثناء واحد. فمجلد cloud/ (الفوترة والمفاتيح المُدارة والبنية التحتية المستضافة) شيفرته متاحة للاطلاع بموجب OpenShorts Commercial License، التي تسمح بقراءته وتعديله واستضافته ذاتياً للاستخدام الشخصي أو الداخلي، لكنها لا تسمح بتقديمه لأطراف ثالثة كخدمة مدفوعة. ولا تتطلب الاستضافة الذاتية للتطبيق الأساسي هذا المجلد. وتستدعي الميزات الاختيارية خدمات مدفوعة أخرى بمفاتيحك أنت، مثل fal.ai لفيديوهات الممثلين الافتراضيين وElevenLabs للدبلجة وUpload-Post للنشر؛ وتكاليفها منفصلة.',
        ],
        columns: ['الخطة', 'السعر والحدود'],
        rows: [
          { 'الخطة': 'استضافة ذاتية', 'السعر والحدود': 'مجانية، MIT؛ العتاد ومفاتيح API عليك' },
          { 'الخطة': 'مستضافة Free', 'السعر والحدود': '$0؛ أول فيديو حتى 60 دقيقة ثم 20 دقيقة شهرياً؛ علامة مائية' },
          { 'الخطة': 'مستضافة Starter', 'السعر والحدود': '$12 شهرياً؛ 100 دقيقة شهرياً؛ دون علامة مائية' },
          { 'الخطة': 'مستضافة Creator', 'السعر والحدود': '$29 شهرياً؛ 300 دقيقة شهرياً؛ دون علامة مائية' },
          { 'الخطة': 'مستضافة Pro', 'السعر والحدود': '$59 شهرياً؛ 750 دقيقة شهرياً؛ دون علامة مائية' },
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات',
        content: [
          '**للاستضافة الذاتية يذكر README الحاجة إلى Docker وDocker Compose و8 GB أو أكثر من الذاكرة، ويصف بطاقة الرسوميات بأنها اختيارية.**',
          'الصورة الافتراضية تعمل على المعالج فقط. تقول الجهة المطوّرة إن فيديو مدته 8 دقائق يستغرق من 5 إلى 8 دقائق على معالج عادي ونحو 50 ثانية على بطاقة NVIDIA المستضافة لديها؛ وهذه أرقام الجهة المطوّرة وليست قياسات من PromptQuorum.',
        ],
        columns: ['العنصر', 'المذكور في README'],
        rows: [
          { 'العنصر': 'البرمجيات', 'المذكور في README': 'Docker وDocker Compose' },
          { 'العنصر': 'ذاكرة النظام', 'المذكور في README': '8 GB أو أكثر' },
          { 'العنصر': 'بطاقة الرسوميات', 'المذكور في README': 'اختيارية؛ NVIDIA مع NVENC؛ ‏8 GB VRAM لنموذج large-v3-turbo' },
          { 'العنصر': 'مفتاح Gemini API', 'المذكور في README': 'مطلوب، أو اضبط LLM_BASE_URL لنموذج محلي' },
          { 'العنصر': 'مفاتيح أخرى', 'المذكور في README': 'fal.ai وElevenLabs وUpload-Post للميزات الاختيارية' },
          { 'العنصر': 'مساحة القرص', 'المذكور في README': 'غير مذكورة' },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**يدور Clip Generator حول اكتشاف اللحظات وإعادة التأطير الرأسي والترجمة المضمّنة ومحرر؛ أما بقية المشروع فهي إضافات اختيارية.** البنود التالية أقوال من الجهة المطوّرة مأخوذة من README والموقع.',
        ],
        items: [
          'اكتشاف اللحظات: يقيّم نموذج لغوي النص المفرّغ وحدود المشاهد ويعيد ما بين 3 و15 لحظة مدة كل منها من 15 إلى 60 ثانية، مع درجة انتشار لكل لحظة.',
          'إعادة التأطير الرأسي: تتبّع الوجه لكل مشهد، وتخطيط بخلفية مموّهة، ومتحدثان فوق بعضهما مع الترجمة عند خط الالتقاء، وتخطيط لتسجيل الشاشة.',
          'الترجمة المضمّنة: ترجمة بدقة الكلمة من faster-whisper، أو من Parakeet على بطاقة رسوميات، تُدمج في المقطع بعدة أنماط.',
          'محرر المقاطع: قص بدقة الكلمة اعتماداً على النص المفرّغ، وإضافة مقاطع، وتغيير التأطير، وإعادة التصيير.',
          'نصوص افتتاحية جاذبة: جملة بداية تُكتب مما يُقال في المقطع، وقابلة للتعديل في النص والنمط والموضع.',
          'الدبلجة: دبلجة صوتية عبر ElevenLabs بأكثر من 30 لغة، بمفتاح ElevenLabs الخاص بك.',
          'الأتمتة: خادم MCP مدمج، وواجهة REST API مع webhooks عند الاكتمال، وعميل لسطر الأوامر، وملف مهارة للوكلاء.',
          'النشر: النشر والجدولة على الشبكات الاجتماعية عبر خدمة Upload-Post، بمفتاحك الخاص عند الاستضافة الذاتية.',
          'إضافات: AI Shorts الذي يولّد فيديوهات تسويقية بممثلين من الذكاء الاصطناعي عبر fal.ai، وYouTube Studio للعناوين والصور المصغّرة والأوصاف.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'إلى أين يذهب الفيديو وبياناتك',
        content: [
          '**OpenShorts هجينة: بعض الخطوات تعمل على الجهاز الذي يستضيفها، وأخرى تستدعي خدمات خارجية.**',
          'بحسب README يعمل التفريغ النصي واكتشاف المشاهد وتتبّع الوجه على الجهاز المضيف. ويرسل منتقي اللحظات افتراضياً النص المفرّغ، لا الفيديو، إلى Google Gemini. يقول README إن ضبط LLM_BASE_URL على خادم متوافق مع OpenAI مثل Ollama أو LM Studio أو vLLM يُبقي سلسلة إنشاء المقاطع على جهازك، لكن اختيار التخطيط وكاشف المحتوى على الشاشة والفيديوهات الصامتة ما زالت تحتاج إلى Gemini؛ وبدون مفتاح تعود هذه الميزات إلى قص بسيط مع تتبّع الوجه. ويقول أيضاً إن مفاتيح API المُدخلة في لوحة التحكم تُشفَّر في المتصفح ولا تُخزَّن على الخادم.',
          'في الخدمة المستضافة يُرفع الفيديو إلى الجهة المشغّلة. تقول سياسة الخصوصية لديها إنها تعالج الفيديوهات التي ترسلها، وترسل النص المفرّغ ولقطات مأخوذة قد تُظهر وجوهاً إلى Google Gemini، وترسل الصوت إلى ElevenLabs عندما تطلب الدبلجة، ولا تستخدم محتواك لتدريب نماذج الذكاء الاصطناعي. وتقول إن مقاطع الخطة المجانية تُحذف بعد 7 أيام، وتذكر خوادم في ألمانيا، وتسمّي AEPD، هيئة حماية البيانات الإسبانية، بوصفها سلطة الإشراف. لم تلتقط PromptQuorum حركة الشبكة ولم تتحقق من هذه الأقوال.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن تناسب',
        content: [
          '**تناسب OpenShorts من يريد قص التسجيلات الطويلة بمساعدة الذكاء الاصطناعي ويقدّر الخيار المفتوح المصدر.**',
        ],
        items: [
          'مقدمو البودكاست والبث ومنشئو الدورات الذين يحوّلون تسجيلات طويلة إلى مقاطع قصيرة ويريدون تجربة خطة مستضافة مجانية أولاً.',
          'المطورون والوكالات الذين يريدون الاستضافة الذاتية أو تعديل السلسلة أو استدعاءها عبر MCP أو REST أو سطر الأوامر.',
          'الفرق التي تفضّل إبقاء الفيديو المصدر على خادمها وتقبل استدعاءات Gemini في منتقي اللحظات أو تستطيع تشغيل نموذج محلي.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        content: [
          '**تناسب OpenShorts بدرجة أقل في بعض الحالات، وتبقى عدة نقاط غير متحقق منها.**',
        ],
        items: [
          'لا تناسب: من يحتاج اليوم إلى سلسلة تعمل دون اتصال بالكامل. فاختيار التخطيط والفيديوهات الصامتة ما زالا يحتاجان إلى Gemini بحسب README.',
          'لا تناسب: من يريد مثبّتاً لسطح المكتب بنقرة واحدة. لا توجد إصدارات، والاستضافة الذاتية تحتاج إلى Docker وطرفية.',
          'غير متحقق منه: جودة المقاطع ودرجات الانتشار والسرعة. لم تجرِ PromptQuorum اختبارات، وأرقام السرعة من الجهة المطوّرة.',
          'غير متحقق منه: مدى قدرة نموذج محلي على تعويض Gemini في اختيار اللحظات. يقول README إن نماذج 7-8B تعيد مخرجات صالحة بشكل موثوق بينما لا تفعل نماذج 3B ذلك؛ ولم تختبر PromptQuorum ذلك.',
          'غير متحقق منه: إصدار التطبيق. لا يحتوي المستودع على إصدارات ولا وسوم؛ ويذكر بيان سجل MCP الرقم 1.0.0 وحزمة سطر الأوامر على PyPI هي 0.1.0، لكن أياً منهما ليس إصدار التطبيق.',
          'غير متحقق منه: جداول المقارنة في الموقع وREADME التي تضع OpenShorts أمام Opus Clip وKlap وVizard. هي أقوال من الجهة المطوّرة.',
          'غير متحقق منه: هل تلبّي الخدمة المستضافة حاجة قانونية أو امتثالية محددة. اقرأ سياسة الخصوصية والشروط أولاً.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenShorts والبدائل',
        itemHeadings: true,
        content: [
          '**تقع OpenShorts في الدليل إلى جانب أدوات فيديو مفتوحة المصدر أخرى، لكنها تؤدي مهام مختلفة، ولم تقارنها PromptQuorum عملياً.** تذكر جداول المشروع نفسه أن Opus Clip وKlap وVizard أدوات قص مستضافة مغلقة المصدر؛ وهذه الجداول أقوال من الجهة المطوّرة.',
        ],
        columns: ['الأداة', 'كما في مراجعتها'],
        rows: [
          { 'الأداة': '[FunClip](/ar/power-local-llm/funclip-review)', 'كما في مراجعتها': 'مجانية، MIT، بالاستضافة الذاتية؛ قص يعتمد على النص المفرّغ مع نموذج لغوي، الأقرب في الغرض' },
          { 'الأداة': '[FableCut](/ar/power-local-llm/fablecut-review)', 'كما في مراجعتها': 'محرر متصفح مجاني بترخيص MIT يقوده وكلاء الذكاء الاصطناعي عبر MCP؛ يحرّر مواد موجودة لديك' },
          { 'الأداة': '[OpenMontage](/ar/power-local-llm/openmontage-review)', 'كما في مراجعتها': 'سلسلة وكيلية مجانية بترخيص AGPL-3.0 تنتج فيديوهات كاملة؛ ليست أداة قص' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل OpenShorts مجانية؟',
            a: 'الاستضافة الذاتية مجانية، ولا تدفع إلا مقابل الخدمات الخارجية الاختيارية التي تربطها، مثل دبلجة ElevenLabs. أما الخدمة المستضافة فتُحتسب بدقائق المصدر، أي دقائق الفيديو التي ترسلها.',
          },
          {
            q: 'هل تعمل OpenShorts دون مفتاح Google؟',
            a: 'جزئياً. بحسب README، يؤدي ضبط LLM_BASE_URL على Ollama أو LM Studio أو vLLM أو خادم آخر متوافق مع OpenAI إلى استبدال Gemini في اختيار اللحظات، وتتوقف لوحة التحكم عن طلب مفتاح Gemini. ويوصي README برفع طول السياق في Ollama إلى 16384 رمزاً، لأن القيمة الافتراضية 4096 تقتطع النص بصمت.',
          },
          {
            q: 'هل تعمل مع Claude أو ChatGPT أو n8n؟',
            a: 'يصف README خادم MCP مدمجاً، ونقطة وصول مستضافة ومساراً /mcp في النسخة المستضافة ذاتياً، وواجهة REST API مع webhooks عند الاكتمال، وسير عمل n8n قابلاً للاستيراد. وتحتاج نقطة MCP المستضافة إلى مفتاح API للحساب أو موافقة OAuth، بينما يقول README إن النسخة المستضافة ذاتياً لا تحتاج إلى مفتاح.',
          },
          {
            q: 'هل يمكنني قص أي فيديو من YouTube؟',
            a: 'تقبل الأداة الروابط والرفع، لكن شروط الخدمة المستضافة تطلب منك تأكيد امتلاكك حقوق كل فيديو ترسله. تحقق أولاً من حقوق النشر وشروط المنصة. هذه معلومات عامة وليست مشورة قانونية.',
          },
          {
            q: 'بماذا تختلف الخطة المستضافة المجانية عن الاستضافة الذاتية؟',
            a: 'بحسب صفحة الأسعار، الخطة المجانية للتنزيل فقط، دون نشر تلقائي، مع أفضل 2 إلى 4 مقاطع لكل فيديو. أما في الاستضافة الذاتية فلا يوجد حد للدقائق ويمكن النشر بحساب Upload-Post الخاص بك، بينما يقتصر Autopilot على السحابة.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**تستحق OpenShorts التجربة إذا أردت أداة قص مفتوحة المصدر وقبلت أن تعتمد خطواتها الذكية افتراضياً على خدمات خارجية.**',
          'على الورق تغطي سير العمل كله، من التفريغ النصي واختيار اللحظات إلى إعادة التأطير الرأسي والترجمة المضمّنة والمحرر والوصول عبر MCP وAPI. المشروع نشط، وآخر commit فيه بتاريخ 19 نوفمبر 2026، وتتيح لك الخطة المستضافة المجانية تقييم المقاطع قبل إعداد أي شيء.',
          'المقايضات واضحة. الإعداد الافتراضي يرسل النصوص المفرّغة إلى Google Gemini، ونموذج محلي يعوّض جزءاً فقط من تلك الخطوة، ولا توجد إصدارات ولا أرقام إصدار، والاستضافة الذاتية تحتاج إلى Docker وطرفية. لم تختبر PromptQuorum جودة المقاطع، فجرّبها على فيديو مسموح لك باستخدامه، واقرأ سياسة الخصوصية قبل رفع أي مادة حساسة.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع OpenShorts](https://www.openshorts.app) — وصف المنتج والسلسلة والخطط، اطُّلع عليه في 20 نوفمبر 2026.',
          '[صفحة الأسعار](https://www.openshorts.app/pricing) — الخطط المستضافة والدقائق والعلامة المائية وفروق النشر، اطُّلع عليها في 20 نوفمبر 2026.',
          '[سياسة الخصوصية](https://www.openshorts.app/privacy) — الجهة المشغّلة والمعالجون الفرعيون ومدة الاحتفاظ وسلطة الإشراف، حُدّثت في 17 نوفمبر 2026، واطُّلع عليها في 20 نوفمبر 2026.',
          '[شروط الخدمة](https://www.openshorts.app/terms) — الجهة المشغّلة والتعهد بشأن حقوق المحتوى والقانون الحاكم، اطُّلع عليها في 20 نوفمبر 2026.',
          '[مستودع GitHub](https://github.com/mutonby/openshorts) — الشيفرة والترخيص، دون إصدارات أو وسوم، وآخر commit في 19 نوفمبر 2026، اطُّلع عليه في 20 نوفمبر 2026.',
          '[README](https://github.com/mutonby/openshorts#readme) — الميزات والمتطلبات وإعداد Docker وخيار النموذج المحلي وMCP وAPI واستثناء الترخيص، اطُّلع عليه في 20 نوفمبر 2026.',
          '[openshorts على PyPI](https://pypi.org/project/openshorts/) — حزمة سطر الأوامر، الإصدار 0.1.0، اطُّلع عليها في 20 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مقارنة أدوات الذكاء الاصطناعي المحلية للصور والفيديو](/ar/power-local-llm/local-llm-images-video-compared) — أدوات توليد الصور والفيديو جنباً إلى جنب.',
          '[مراجعة FunClip](/ar/power-local-llm/funclip-review) — أداة مجانية تقص الفيديو اعتماداً على نصه المفرّغ.',
          '[مراجعة FableCut](/ar/power-local-llm/fablecut-review) — محرر فيديو في المتصفح يمكن لوكلاء الذكاء الاصطناعي قيادته.',
          '[مراجعة OpenMontage](/ar/power-local-llm/openmontage-review) — سلسلة وكيلية تنتج فيديوهات كاملة.',
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
    next_refresh_due: '2027-05-20',
    theme: 'Image & Video Generation',
    heroImage: '/images/openshorts-review-hero-ko.webp',
    title: 'OpenShorts 리뷰: 세로형 쇼츠를 만드는 오픈소스 AI 클립 제작 도구',
    seoTitle: 'OpenShorts 리뷰: 오픈소스 AI 클립 제작 도구',
    intro:
      'OpenShorts는 팟캐스트, 웨비나, 방송 같은 긴 영상을 TikTok, Instagram 릴스, YouTube 쇼츠용 자막 입힌 세로형 짧은 클립으로 바꿔 주는 오픈소스 도구입니다. Docker로 직접 실행하거나 호스팅 서비스인 OpenShorts Cloud를 사용할 수 있습니다. 이 리뷰는 프로젝트의 웹사이트, 개인정보 처리방침, 이용약관과 GitHub 저장소 및 README를 바탕으로 합니다. PromptQuorum은 이 소프트웨어를 테스트하지 않았습니다.',
    metaDescription:
      'OpenShorts는 긴 영상을 자막이 들어간 세로 클립으로 바꿉니다. Docker로 무료 직접 호스팅하거나 클라우드 이용. 로컬·클라우드 AI, 가격, 개인정보를 정리합니다.',
    twitterDescription:
      'OpenShorts는 MIT 라이선스의 세로형 쇼츠용 AI 클립 제작 도구입니다. 직접 호스팅, 호스팅 요금제, 로컬 처리 범위, 개인정보와 미확인 사항.',
    audience:
      '긴 영상을 자막이 들어간 세로형 클립으로 만들고 싶은 팟캐스터, 스트리머, 크리에이터, 개발자(직접 호스팅 여부 무관)',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenShorts',
    targetKeywords: [
      'OpenShorts 리뷰',
      'OpenShorts',
      '오픈소스 클립 제작 도구',
      '셀프 호스팅 AI 클립 생성기',
      '긴 영상 쇼츠 변환',
      'OpusClip 대안',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenShorts는 긴 영상에서 가장 강한 장면을 찾아 자막이 들어간 9:16 클립을 돌려주는 MIT 라이선스의 오픈소스 AI 클립 제작 도구이며, Docker로 직접 호스팅하거나 호스팅 서비스인 OpenShorts Cloud에서 쓸 수 있습니다.** 기본값으로는 완전한 로컬이 아닙니다. 직접 호스팅한 사본을 로컬 언어 모델로 돌리지 않는 한, 장면 선별 단계에서 Google Gemini를 호출합니다.',
    quickAnswerTop: {
      ko: {
        question: 'OpenShorts는 무엇이며 정말 로컬에서 동작하나요?',
        answer:
          'OpenShorts는 TONVI TECH SL이 만든 오픈소스 클립 제작 도구로, 긴 영상을 자막이 들어간 세로형 클립으로 잘라 줍니다. 음성 인식, 장면 감지, 얼굴 추적 기반 리프레이밍은 호스팅하는 컴퓨터에서 실행되지만, 기본값으로는 장면을 고르기 위해 전사 텍스트가 Google Gemini로 전송되므로 완전한 로컬이 아니라 하이브리드입니다.',
        bullets: [
          '플랫폼: 호스팅 웹 앱 또는 Docker Compose 직접 호스팅.',
          '가격: 직접 호스팅은 무료이고, 호스팅 서비스는 워터마크가 붙는 무료 요금제로 시작합니다.',
          '라이선스: 핵심 앱은 MIT이며 cloud/ 폴더는 상업용 라이선스입니다.',
          '하드웨어: README는 Docker와 8GB 이상의 RAM을 명시하며 NVIDIA GPU는 선택 사항입니다.',
          '운영사: 개인정보 처리방침에 따르면 스페인 말라가의 TONVI TECH SL.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: '개요', anchor: 'overview' },
      { label: '입수 방법', anchor: 'get-it' },
      { label: '가격과 라이선스', anchor: 'pricing-license' },
      { label: '요구 사항', anchor: 'requirements' },
      { label: '기능', anchor: 'features' },
      { label: '영상과 데이터가 가는 곳', anchor: 'privacy' },
      { label: '이런 분께 적합', anchor: 'who-should-use' },
      { label: '확인하지 못한 사항', anchor: 'who-should-not-use' },
      { label: '대안', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
      { label: '총평', anchor: 'verdict' },
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
            text: 'OpenShorts는 긴 영상을 자막이 들어간 세로형 클립으로 바꾸는 오픈소스 도구로, 내 Docker 호스트에서도 호스팅 클라우드 서비스에서도 쓸 수 있습니다.',
          },
          {
            type: 'plain-terms',
            text: 'YouTube 링크나 영상 파일을 넣으면 음성을 텍스트로 옮기고, 올릴 만한 장면을 언어 모델에 물어 골라내고, 그 부분을 잘라 말하는 사람 중심의 세로 화면으로 맞춥니다. 언어 모델은 기본값이 Google Gemini이며, 직접 호스팅한 사본에서는 이 단계에 자신의 모델을 쓸 수 있습니다.',
          },
        ],
        items: [
          '직접 호스팅은 MIT 라이선스로 무료이고, 개발 측에 따르면 워터마크도 사용량 제한도 없습니다. Docker, 터미널, 약 8GB 이상의 RAM이 필요합니다.',
          '호스팅 서비스 OpenShorts Cloud는 설치가 필요 없고 무료 요금제에는 워터마크가 붙으며, 유료 요금제는 \'가격과 라이선스\'에 정리했습니다.',
          '기본값으로 전사 텍스트와, 일부 기능에서는 샘플링한 영상 프레임이 Google Gemini로 전송됩니다. 로컬 모델이 대체할 수 있는 것은 장면 선별 단계뿐입니다.',
          '저장소에는 릴리스도 태그도 없어 앱 버전 번호가 없으며, 메인 브랜치의 마지막 커밋은 2026년 11월 19일입니다.',
          '호스팅 서비스의 개인정보 처리방침과 이용약관은 스페인 말라가의 TONVI TECH SL을 운영 주체로 밝히고 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '다른 사람이 만든 영상은 대개 저작권으로 보호됩니다. 호스팅 서비스의 약관은 제출하는 모든 영상에 대한 권리를 가지고 있음을 이용자가 확인하도록 요구하며, 직접 호스팅할 때도 같은 주의가 필요합니다. 남의 영상을 잘라 다시 게시하기 전에 권리와 원본 플랫폼의 약관을 확인하십시오. 이는 일반적인 정보이며 법률 자문이 아닙니다.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**OpenShorts는 AI 클립 제작 도구로, 긴 영상을 받아 자막, 후크 문구, 제목이 달린 짧은 세로형 클립을 돌려줍니다.**',
          'README는 하나의 프로젝트 안에 세 가지 도구가 있다고 설명합니다. Clip Generator, AI Shorts(AI 배우가 나오는 마케팅 영상), 제목·썸네일·설명을 위한 YouTube Studio입니다. 이 리뷰는 저장소가 가장 먼저 내세우는 Clip Generator에 집중합니다. README에 따르면 핵심은 MIT 라이선스의 오픈소스이며, 호스팅 서비스인 OpenShorts Cloud는 결제, 관리형 키, 자동 게시, 유료 요금제의 Autopilot 모드를 더합니다.',
          '웹사이트에 따르면 처리 흐름은 다음과 같습니다. 단어 단위 타임스탬프 전사에 faster-whisper, 장면 경계 탐지에 PySceneDetect, 전사 텍스트를 평가해 15~60초 길이의 장면 3~15개를 고르는 데 Google Gemini 3.1 Flash-Lite, 클립 절단에 FFmpeg, 9:16으로 재구성하는 데 MediaPipe 얼굴 추적(YOLOv8을 대비책으로)을 사용합니다. README는 두 화자를 위아래로 쌓는 레이아웃, 화면 녹화 레이아웃, 배경 흐림 레이아웃을 덧붙이며, 영상마다 Gemini가 고르거나 대시보드에서 강제로 지정할 수 있다고 합니다.',
          '호스팅 서비스의 개인정보 처리방침과 이용약관은 스페인에 설립된 회사 TONVI TECH SL을 운영 주체로 밝히고 있습니다. 여기에 서술한 내용은 모두 개발 측의 주장이며, PromptQuorum은 소프트웨어를 실행하지 않았고 다른 도구와 클립을 비교하지도 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**OpenShorts는 호스팅 서비스에서 아무것도 설치하지 않고 쓸 수 있고, GitHub 저장소에서 Docker로 직접 호스팅할 수도 있습니다. 내려받는 설치 프로그램은 없습니다.**',
          '저장소에는 GitHub 릴리스도 태그도 없으므로 직접 호스팅은 git clone 뒤 Docker Compose 빌드를 하는 방식입니다. README의 순서는 저장소 복제, 필요하면 .env.example을 .env로 복사, docker compose up --build 실행, 5175 포트에서 대시보드 열기, 설정에서 API 키 입력입니다. NVIDIA GPU를 쓰려면 README가 Compose 오버라이드 파일과 환경 설정을 추가로 안내합니다.',
        ],
        columns: ['방법', '입수 방법'],
        rows: [
          { '방법': '[호스팅 OpenShorts Cloud](https://www.openshorts.app)', '입수 방법': '로그인 후 영상 링크 붙여넣기. 설치 불필요' },
          { '방법': '[직접 호스팅(Docker Compose)](https://github.com/mutonby/openshorts#getting-started)', '입수 방법': 'git clone, docker compose up --build. 터미널 필요' },
          { '방법': '[웹사이트](https://www.openshorts.app)', '입수 방법': '공식 사이트, 가격, 가이드' },
          { '방법': '[개인정보 처리방침](https://www.openshorts.app/privacy)', '입수 방법': '호스팅 서비스의 방침' },
          { '방법': '[소스 코드](https://github.com/mutonby/openshorts)', '입수 방법': 'GitHub 저장소(핵심은 MIT)' },
          { '방법': '[명령줄 클라이언트](https://pypi.org/project/openshorts/)', '입수 방법': 'pip install openshorts. OpenShorts API와 통신' },
        ],
        note: '직접 호스팅에는 터미널과 Docker가 필요해 더블클릭 설치가 아닌 개발자용 설정입니다. README는 직접 호스팅 버전과 클라우드가 같은 소프트웨어를 실행한다고 밝힙니다.',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: '가격과 라이선스',
        content: [
          '**직접 호스팅은 무료이며, 호스팅 서비스 OpenShorts Cloud에는 워터마크가 붙는 무료 요금제와 미국 달러 기준의 유료 요금제가 있습니다.** 아래 가격은 2026년 11월 20일에 확인한 가격 페이지의 내용이며 바뀔 수 있습니다. 호스팅 요금제는 제출한 영상의 분 수인 소스 분 단위로 계량됩니다.',
          '라이선스: README에 따르면 핵심 애플리케이션은 MIT 라이선스이며 예외가 하나 있습니다. cloud/ 디렉터리(결제, 관리형 키, 호스팅 인프라)는 OpenShorts Commercial License로 소스가 공개되어 있어 개인 또는 내부 용도로 읽고, 수정하고, 직접 호스팅할 수 있지만 제3자에게 유료 서비스로 제공할 수는 없습니다. 핵심 앱을 직접 호스팅하는 데 이 디렉터리는 필요하지 않습니다. 선택 기능은 AI 배우 영상에는 fal.ai, 더빙에는 ElevenLabs, 게시에는 Upload-Post처럼 자신의 키로 다른 유료 서비스를 호출하며, 그 비용은 별도입니다.',
        ],
        columns: ['요금제', '가격과 제한'],
        rows: [
          { '요금제': '직접 호스팅', '가격과 제한': '무료, MIT. 하드웨어와 API 키는 직접 준비' },
          { '요금제': '호스팅 Free', '가격과 제한': '$0. 첫 영상 60분까지, 이후 월 20분. 워터마크' },
          { '요금제': '호스팅 Starter', '가격과 제한': '월 $12. 월 100분. 워터마크 없음' },
          { '요금제': '호스팅 Creator', '가격과 제한': '월 $29. 월 300분. 워터마크 없음' },
          { '요금제': '호스팅 Pro', '가격과 제한': '월 $59. 월 750분. 워터마크 없음' },
        ],
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항',
        content: [
          '**직접 호스팅에 대해 README는 Docker, Docker Compose, 8GB 이상의 RAM을 명시하고 GPU는 선택 사항이라고 설명합니다.**',
          '기본 이미지는 CPU 전용입니다. 개발 측은 8분짜리 영상이 일반적인 CPU에서 5~8분, 자체 호스팅 NVIDIA GPU에서 약 50초 걸린다고 밝히는데, 이는 개발 측의 수치이며 PromptQuorum의 측정값이 아닙니다.',
        ],
        columns: ['항목', 'README 기재 내용'],
        rows: [
          { '항목': '소프트웨어', 'README 기재 내용': 'Docker와 Docker Compose' },
          { '항목': '시스템 RAM', 'README 기재 내용': '8GB 이상' },
          { '항목': 'GPU', 'README 기재 내용': '선택. NVENC 지원 NVIDIA. large-v3-turbo에 VRAM 8GB' },
          { '항목': 'Gemini API 키', 'README 기재 내용': '필요. 로컬 모델이면 LLM_BASE_URL 설정' },
          { '항목': '기타 키', 'README 기재 내용': '선택 기능용 fal.ai, ElevenLabs, Upload-Post' },
          { '항목': '디스크 공간', 'README 기재 내용': '기재 없음' },
        ],
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**Clip Generator는 장면 감지, 세로 리프레이밍, 자막, 편집기를 중심으로 하며, 프로젝트의 나머지는 선택적 부가 기능입니다.** 아래는 README와 웹사이트에 나온 개발 측의 설명입니다.',
        ],
        items: [
          '장면 감지: 언어 모델이 전사 텍스트와 장면 경계를 평가해 15~60초 길이의 장면 3~15개를 돌려주며, 각 장면에 바이럴 점수가 붙습니다.',
          '세로 리프레이밍: 장면별 얼굴 추적, 배경 흐림 레이아웃, 두 화자를 쌓고 이음매에 자막을 두는 레이아웃, 화면 녹화 레이아웃.',
          '자막: faster-whisper(GPU에서는 Parakeet)가 만든 단어 단위 자막을 여러 스타일로 클립에 입힙니다.',
          '클립 편집기: 전사 텍스트를 이용한 단어 단위 컷, 추가 구간, 프레임 변경, 다시 렌더링.',
          '후크 오버레이: 클립에서 말하는 내용을 바탕으로 쓴 첫 문장으로, 텍스트, 스타일, 위치를 편집할 수 있습니다.',
          '더빙: 자신의 ElevenLabs 키로 30개 이상의 언어를 지원하는 ElevenLabs 음성 더빙.',
          '자동화: 내장 MCP 서버, 완료 웹훅이 있는 REST API, 명령줄 클라이언트, 에이전트용 스킬 파일.',
          '게시: Upload-Post 서비스를 통한 소셜 네트워크 게시와 예약. 직접 호스팅할 때는 자신의 키를 사용합니다.',
          '부가 기능: fal.ai로 AI 배우 마케팅 영상을 만드는 AI Shorts와, 제목·썸네일·설명을 위한 YouTube Studio.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '영상과 데이터가 가는 곳',
        content: [
          '**OpenShorts는 하이브리드입니다. 일부 단계는 호스팅하는 컴퓨터에서 실행되고, 다른 단계는 외부 서비스를 호출합니다.**',
          'README에 따르면 음성 인식, 장면 감지, 얼굴 추적은 호스트에서 실행됩니다. 장면 선별 단계는 기본값으로 영상이 아니라 전사 텍스트를 Google Gemini로 보냅니다. README는 LLM_BASE_URL을 Ollama, LM Studio, vLLM 같은 OpenAI 호환 서버로 지정하면 클립 처리가 내 컴퓨터 안에 머문다고 하면서도, 레이아웃 선택, 화면 속 콘텐츠 감지기, 음성이 없는 영상에는 여전히 Gemini가 필요하고 키가 없으면 단순한 얼굴 추적 크롭으로 대체된다고 밝힙니다. 또한 대시보드에 입력한 API 키는 브라우저에서 암호화되며 서버에 저장되지 않는다고 합니다.',
          '호스팅 서비스에서는 영상이 운영사로 업로드됩니다. 개인정보 처리방침은 제출한 영상을 처리하고, 전사 텍스트와 얼굴이 보일 수 있는 샘플 프레임을 Google Gemini로, 더빙을 요청하면 오디오를 ElevenLabs로 보내며, 콘텐츠를 AI 모델 학습에 사용하지 않는다고 밝힙니다. 무료 요금제의 클립은 7일 뒤 삭제되고, 서버는 독일에 있으며, 감독 기관으로 스페인 개인정보 보호 당국인 AEPD를 든다고 합니다. PromptQuorum은 네트워크 트래픽을 캡처하지 않았으며 이 설명들을 검증하지 않았습니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합',
        content: [
          '**OpenShorts는 긴 녹화물을 AI의 도움으로 클립으로 만들고 싶고 오픈소스 선택지를 중시하는 분께 맞습니다.**',
        ],
        items: [
          '긴 녹화물을 쇼츠로 만들고 먼저 무료 호스팅 요금제를 써 보려는 팟캐스터, 스트리머, 강의 제작자.',
          '직접 호스팅하거나 처리 흐름을 바꾸거나 MCP, REST, 명령줄로 호출하려는 개발자와 에이전시.',
          '원본 영상을 자체 서버에 두고 싶고, 장면 선별에서 Gemini 호출을 받아들이거나 로컬 모델을 돌릴 수 있는 팀.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        content: [
          '**OpenShorts는 맞지 않는 경우도 있으며, 몇 가지 사항은 아직 확인되지 않았습니다.**',
        ],
        items: [
          '부적합: 지금 완전한 오프라인 처리 흐름이 필요한 경우. README에 따르면 레이아웃 선택과 음성이 없는 영상에는 여전히 Gemini가 필요합니다.',
          '부적합: 원클릭 데스크톱 설치 프로그램을 원하는 경우. 릴리스가 없고, 직접 호스팅에는 Docker와 터미널이 필요합니다.',
          '미확인: 클립 품질, 바이럴 점수, 속도. PromptQuorum은 테스트를 하지 않았으며 속도 수치는 개발 측의 것입니다.',
          '미확인: 장면 선별에서 로컬 모델이 Gemini를 얼마나 대체하는지. README는 7~8B 모델은 유효한 출력을 안정적으로 내고 3B 모델은 그렇지 않다고 하지만, PromptQuorum은 이를 테스트하지 않았습니다.',
          '미확인: 앱 버전. 저장소에는 릴리스도 태그도 없으며, MCP 레지스트리 매니페스트는 1.0.0, PyPI의 명령줄 패키지는 0.1.0이지만 둘 다 앱 버전이 아닙니다.',
          '미확인: 웹사이트와 README에서 OpenShorts를 Opus Clip, Klap, Vizard와 비교한 표. 이는 개발 측의 주장입니다.',
          '미확인: 호스팅 서비스가 특정한 법적·규정 준수 요건을 충족하는지. 먼저 개인정보 처리방침과 약관을 읽어 보십시오.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenShorts와 대안 비교',
        itemHeadings: true,
        content: [
          '**OpenShorts는 디렉터리에서 다른 오픈소스 영상 도구들과 나란히 있지만 하는 일이 다르며, PromptQuorum은 직접 비교해 보지 않았습니다.** 프로젝트 자체의 표는 Opus Clip, Klap, Vizard를 클로즈드 소스의 호스팅 클립 도구로 꼽는데, 이 표들은 개발 측의 주장입니다.',
        ],
        columns: ['도구', '각 리뷰에서의 위치'],
        rows: [
          { '도구': '[FunClip](/ko/power-local-llm/funclip-review)', '각 리뷰에서의 위치': '무료, MIT, 직접 호스팅. LLM으로 전사 텍스트 기반 클립 제작을 하며 목적이 가장 비슷함' },
          { '도구': '[FableCut](/ko/power-local-llm/fablecut-review)', '각 리뷰에서의 위치': 'AI 에이전트가 MCP로 조작하는 무료 MIT 브라우저 편집기. 이미 가진 영상을 편집' },
          { '도구': '[OpenMontage](/ko/power-local-llm/openmontage-review)', '각 리뷰에서의 위치': '영상 전체를 만드는 무료 AGPL-3.0 에이전트형 파이프라인. 클립 제작 도구는 아님' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'OpenShorts는 무료인가요?',
            a: '직접 호스팅은 무료이며, 비용이 드는 것은 ElevenLabs 더빙처럼 직접 연결하는 선택적 외부 서비스뿐입니다. 호스팅 서비스는 제출한 영상의 분 수인 소스 분 단위로 계량됩니다.',
          },
          {
            q: 'Google 키 없이도 OpenShorts를 쓸 수 있나요?',
            a: '일부는 가능합니다. README에 따르면 LLM_BASE_URL을 Ollama, LM Studio, vLLM 또는 다른 OpenAI 호환 서버로 지정하면 장면 선별에서 Gemini가 대체되고 대시보드도 Gemini 키를 더 이상 요구하지 않습니다. README는 기본값 4096에서는 조용히 잘리므로 Ollama의 컨텍스트 길이를 16384 토큰으로 높이라고 권합니다.',
          },
          {
            q: 'Claude, ChatGPT, n8n과 함께 쓸 수 있나요?',
            a: 'README는 내장 MCP 서버, 호스팅 엔드포인트와 직접 호스팅용 /mcp 경로, 완료 웹훅이 있는 REST API, 가져올 수 있는 n8n 워크플로를 설명합니다. 호스팅 MCP 엔드포인트에는 계정 API 키나 OAuth 승인이 필요하며, README에 따르면 직접 호스팅한 사본에는 키가 필요 없습니다.',
          },
          {
            q: '어떤 YouTube 영상이든 잘라도 되나요?',
            a: '도구는 링크와 업로드를 모두 받지만, 호스팅 서비스의 약관은 제출하는 모든 영상에 대한 권리를 가지고 있음을 확인하도록 요구합니다. 먼저 저작권과 플랫폼 약관을 확인하십시오. 이는 일반적인 정보이며 법률 자문이 아닙니다.',
          },
          {
            q: '무료 호스팅 요금제는 직접 호스팅과 어떻게 다른가요?',
            a: '가격 페이지에 따르면 무료 요금제는 다운로드 전용이고 자동 게시가 없으며 영상마다 상위 2~4개 클립을 제공합니다. 직접 호스팅에는 분 수 제한이 없고 자신의 Upload-Post 계정으로 게시할 수 있으며, Autopilot은 클라우드 전용입니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content: [
          '**오픈소스 클립 제작 도구를 원하고 AI 단계가 기본값으로 외부 서비스에 의존한다는 점을 받아들일 수 있다면 OpenShorts는 써 볼 만합니다.**',
          '서류상으로는 음성 인식과 장면 선별부터 세로 리프레이밍, 자막, 편집기, MCP와 API 접근까지 클립 제작 흐름 전체를 다룹니다. 프로젝트는 활발하며 마지막 커밋은 2026년 11월 19일이고, 무료 호스팅 요금제로 아무것도 구축하기 전에 클립을 평가해 볼 수 있습니다.',
          '절충점은 분명합니다. 기본 구성은 전사 텍스트를 Google Gemini로 보내고, 로컬 모델은 그 단계의 일부만 대체하며, 릴리스와 버전 번호가 없고, 직접 호스팅에는 Docker와 터미널이 필요합니다. PromptQuorum은 클립 품질을 테스트하지 않았으니, 사용 권리가 있는 영상으로 시험해 보고 민감한 자료를 올리기 전에 개인정보 처리방침을 읽어 보십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[OpenShorts 웹사이트](https://www.openshorts.app) — 제품 설명, 처리 흐름, 요금제. 2026년 11월 20일 확인.',
          '[가격 페이지](https://www.openshorts.app/pricing) — 호스팅 요금제, 분 수, 워터마크, 게시 차이. 2026년 11월 20일 확인.',
          '[개인정보 처리방침](https://www.openshorts.app/privacy) — 운영사, 처리 위탁업체, 보관 기간, 감독 기관. 2026년 11월 17일 갱신, 2026년 11월 20일 확인.',
          '[이용약관](https://www.openshorts.app/terms) — 운영사, 콘텐츠 권리 관련 확약, 준거법. 2026년 11월 20일 확인.',
          '[GitHub 저장소](https://github.com/mutonby/openshorts) — 소스 코드, 라이선스, 릴리스·태그 없음, 마지막 커밋 2026년 11월 19일. 2026년 11월 20일 확인.',
          '[README](https://github.com/mutonby/openshorts#readme) — 기능, 요구 사항, Docker 설치, 로컬 LLM 옵션, MCP와 API, 라이선스 예외. 2026년 11월 20일 확인.',
          '[PyPI의 openshorts](https://pypi.org/project/openshorts/) — 명령줄 패키지, 버전 0.1.0. 2026년 11월 20일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[로컬 이미지·영상 AI 도구 비교](/ko/power-local-llm/local-llm-images-video-compared) — 이미지·영상 생성 도구를 나란히 비교.',
          '[FunClip 리뷰](/ko/power-local-llm/funclip-review) — 전사 텍스트를 바탕으로 영상을 클립으로 만드는 무료 도구.',
          '[FableCut 리뷰](/ko/power-local-llm/fablecut-review) — AI 에이전트가 조작할 수 있는 브라우저 영상 편집기.',
          '[OpenMontage 리뷰](/ko/power-local-llm/openmontage-review) — 영상 전체를 만드는 에이전트형 파이프라인.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그.',
        ],
      },
    },
  },
}
