// CozyClay Review: Free Browser Previs Studio for AI Video, With an MCP Server
// Slug: cozyclay-review
// Companion to: openmontage-review, web-search-mcp-review, localmcp-review
// Sources (all read 2026-11-17, no hands-on testing): maker website (home page, privacy page, previs-software comparison), GitHub repository HaD0Yun/CozyClay
// (README, LICENSING.md, docs/privacy.md, mcp/README.md, CHANGELOG), release v3.2.2, the Windows installer release, the macOS release in HaD0Yun/cozyclay-releases and
// the npm package. The request came from the site owner, not from the maker.
// Last upstream update 2026-11-15 (last commit on main; latest release v3.2.2 on 2026-11-07) => no stale warning.
// Theme: 'Image & Video Generation' (canonical, as openmontage-review).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-17',
    theme: 'Image & Video Generation',
    heroImage: '/images/cozyclay-review-hero-en.webp',
    title: 'CozyClay Review: Free Browser Previs Studio for AI Video, With an MCP Server',
    seoTitle: 'CozyClay Review: Free Browser Previs for AI Video, MCP',
    intro:
      'CozyClay is a free, open-source 3D previs studio that runs in a browser tab. You block a scene, pose characters, set the camera and cuts, and export the shot as a first frame, a reference clip and a prompt for an AI video model. This review is based on the maker\'s website, the GitHub repository, its release pages and its privacy page, checked on 17 November 2026. PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'CozyClay is a free, open-source 3D previs studio for the browser that exports shots to AI video models, with an MCP server. Install, privacy, limits.',
    twitterDescription:
      'CozyClay blocks scenes in 3D in your browser and exports shots for AI video models. Free, AGPL, with an MCP server for Claude and Cursor.',
    audience:
      'Video creators using AI video models, developers who drive tools through MCP, and teams weighing free previs software',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'CozyClay',
    targetKeywords: [
      'CozyClay review',
      'CozyClay MCP',
      'free previs software',
      'browser 3D previs',
      'greybox to AI video',
      'CozyClay install',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**CozyClay is a free, open-source (AGPL) 3D previs studio that runs in a Chromium browser and prepares shots for AI video models.** It starts from a macOS or Windows installer or one npx command, and it includes an MCP server so assistants such as Claude Code or Cursor can edit the scene. It does not generate the final video itself, and PromptQuorum has not tested it.',
    quickAnswerTop: {
      en: {
        question: 'What is CozyClay and who is it for?',
        answer:
          'CozyClay is a browser-based 3D studio for planning a video shot before you pay an AI video model to generate it. It suits people who want control over staging, camera and timing, and who are comfortable using a young open-source project.',
        bullets: [
          'Runs in a Chromium browser; macOS .dmg, Windows installer, or npx cozyclay with Node.js 22.19+.',
          'Price: free; license AGPL-3.0-or-later.',
          'Exports a first frame, greybox clip, camera data and prompt, plus mp4, depth and normal passes, a contact sheet and an OTIO cut list.',
          'An MCP server and an agent panel let assistants edit the scene live.',
          'Usage analytics, which the maker describes as anonymous, are on by default and can be turned off.',
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
            text: 'CozyClay lets you block a 3D scene, pose characters and set camera moves in your browser, then export the shot as a frame, a reference clip and a prompt for an AI video model.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a free grey-box rehearsal stage for AI video: you decide where everyone stands and where the camera goes before paying for a generation. The app does not make the final video; an external video model does.',
          },
        ],
        items: [
          'Free and open source under AGPL-3.0-or-later; the maker\'s site lists no paid plan.',
          'Runs in a Chromium browser. macOS gets a .dmg, Windows an .exe installer, and every platform can run npx cozyclay with Node.js 22.19 or newer.',
          'An MCP server (npx -y cozyclay mcp) lets Claude Desktop, Claude Code, Cursor and other MCP clients edit the scene.',
          'Usage analytics, which the maker describes as anonymous, are on by default; opt out with cclay telemetry off or DO_NOT_TRACK=1.',
          'PromptQuorum has not tested the app. The project is young (repository created in July 2026) and the maker\'s own page says to expect rough edges.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The video itself comes from an external AI video model that you choose and pay for separately. CozyClay prepares the input; PromptQuorum has not checked how well any model follows it.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**CozyClay is a browser-based 3D "previs" studio: you plan a shot in 3D first and let an AI video model render it afterwards.**',
          'The project is made by Doyun (GitHub user HaD0Yun) at NomaDamas and is published under AGPL-3.0-or-later. Version 3.2.2 was released on 7 November 2026 and the repository received a commit on 15 November 2026, so development is ongoing and no stale-project warning applies. The repository was created in July 2026.',
          'The maker describes a four-step flow. Stage: build the set from primitives and add rigged characters or capsule stand-ins. Motion: describe the action, an agent writes a motion spec and a deterministic compiler in the browser bakes each frame, with checks for collisions, foot slide, reach and hand contact. Shoot: put shots on a timeline, draw dolly rails and look through the lens. Export: hand the result to a video model.',
          'The README lists these exports: a keyframe pack (first and last frame, greybox clip, camera, prompt), mp4, depth and normal passes, a contact sheet and an OTIO cut list. A Storyboard project type produces captioned panels, an animatic and a contact sheet instead. Every edit, including each change the agent makes, is one undo step.',
          'These descriptions are maker statements. PromptQuorum has not run the app and has not checked the motion quality, the export quality or how well AI video models follow the exported shots.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**You can use CozyClay in the browser, install it from a macOS or Windows download, or start it with one npx command.**',
          'The maker\'s site offers CozyClay.dmg for macOS (macOS 12 or later) and CozyClay-Setup.exe for Windows. The first start downloads CozyClay and can take a few minutes. The Windows installer is not code-signed, so Windows shows "Windows protected your PC" and you choose More info, then Run anyway. The studio opens in your browser at a local address (127.0.0.1:5180/app/ on the npx route). Run any installer only if you trust where you downloaded it; PromptQuorum has not scanned or run the file.',
        ],
        columns: ['Platform', 'How to get it'],
        rows: [
          { 'Platform': '[macOS](https://github.com/HaD0Yun/cozyclay-releases/releases/latest/download/CozyClay.dmg)', 'How to get it': 'Download CozyClay.dmg (macOS 12+)' },
          { 'Platform': '[Windows](https://github.com/HaD0Yun/CozyClay/releases/download/windows-installer/CozyClay-Setup.exe)', 'How to get it': 'Download CozyClay-Setup.exe (not code-signed)' },
          { 'Platform': '[Linux / any OS](https://github.com/HaD0Yun/CozyClay#readme)', 'How to get it': 'Run npx cozyclay (Node.js 22.19+, Chromium)' },
          { 'Platform': '[In-browser playground](https://cozyclay.org/#try)', 'How to get it': 'Try the studio in a tab, no install' },
        ],
        note: 'The sources do not say whether a Linux installer exists; the README documents the npx route. The in-browser playground is a separate copy of the studio that, per the privacy page, does not read or write your saved scenes.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements',
        content: [
          '**CozyClay needs a Chromium-based browser and, for the npx route, Node.js 22.19 or newer; it needs no GPU, Python or model download.**',
          'Those requirements come from the README. The maker\'s comparison page says Safari and Firefox are not supported. No RAM or disk figures are published, and PromptQuorum did not measure resource use.',
        ],
        columns: ['Item', 'Stated figure'],
        rows: [
          { 'Item': 'Browser', 'Stated figure': 'Chromium-based (no Safari or Firefox)' },
          { 'Item': 'Node.js', 'Stated figure': '22.19 or newer (npx route)' },
          { 'Item': 'GPU', 'Stated figure': 'Not needed (README)' },
          { 'Item': 'Python / model download', 'Stated figure': 'Not needed (README)' },
          { 'Item': 'macOS installer', 'Stated figure': 'macOS 12 or later (site)' },
          { 'Item': 'RAM / disk', 'Stated figure': 'Not stated' },
          { 'Item': 'Network', 'Stated figure': 'First start downloads CozyClay; agent needs it' },
        ],
        note: 'Agent features need a model provider (a ChatGPT sign-in or your own API key) and therefore network access. The AI video model that renders the final clip is separate.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**CozyClay\'s core is a 3D editor for staging a shot, plus three ways to direct it with AI.** All items below are maker claims from the website and README.',
        ],
        items: [
          'Build the set from primitives and add rigged characters, or capsule stand-ins when nobody needs to move a limb.',
          'Pose and animate through a motion spec that a deterministic in-browser compiler bakes frame by frame, with QA checks for collisions, foot slide, reach and hand contact.',
          'Put shots on a timeline, draw dolly rails and look through the lens; each shot knows the limits of the video model you target.',
          'Export a keyframe pack (first and last frame, greybox clip, camera, prompt), mp4, depth and normal passes, a contact sheet and an OTIO cut list.',
          'A Storyboard project type with captioned panels, an animatic and a contact sheet.',
          'An agent panel (Cmd/Ctrl+B) where you sign in with ChatGPT or use your own key for Anthropic, OpenAI, Gemini, MiniMax, OpenRouter or CLIProxyAPI.',
          'An MCP server (npx -y cozyclay mcp) for Claude Desktop, Claude Code, Cursor or any MCP client. Per the MCP README it works live with the editor open, or in memory without a browser for scene, camera, prompt and project-file tools.',
          'A terminal interface (cclay live status --wait) for coding agents that drive a running studio with JSON in and out; every change is one undo step.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**CozyClay collects usage analytics by default that it describes as anonymous, says it never collects project content or prompt text, and lets you switch the analytics off.**',
          'According to the privacy page (effective 25 October 2026), the website uses PostHog (US Cloud) and Cloudflare Web Analytics, with no cookies and no session recording. The npm package stores one random installation identifier in a local state file and sends bucketed events such as first launch, session length and action counts. Prompt text, asset and file names, project content and local paths are not collected, according to the page.',
          'You can opt out with cclay telemetry off, the COZYCLAY_TELEMETRY=0 environment variable, DO_NOT_TRACK=1 or the toggle in the studio top bar. Source checkouts, forks, development servers, CI and tests send nothing, per the maker.',
          'Agent and model features send your requests to the provider you connect, under that provider\'s terms. The privacy page also describes a hosted motion demo with Google sign-in that stores prompts and results for up to 30 days; it says that demo is not open to the public right now. The privacy page and the README name no company, address or governing law.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**CozyClay fits people who want to plan an AI video shot before paying to generate it.**',
        ],
        items: [
          'Video creators who want the same blocking, timing and camera on every take of an AI video model.',
          'Developers and agent users who want an assistant to edit a 3D scene through MCP or a terminal interface.',
          'People who want free, open-source previs that, per the README, runs in a browser tab without a GPU.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        content: [
          '**CozyClay is a poor fit in some situations, and several details remain unverified.**',
        ],
        items: [
          'Not a fit: anyone who needs photoreal rendering or lighting design. The maker says the output is a flat clay pass on purpose.',
          'Not a fit: Safari or Firefox users, because the maker says only Chromium browsers are supported.',
          'Not a fit: anyone who wants a finished video from one tool. An external AI video model renders the final clip and has its own cost.',
          'Not a fit: organizations that cannot use AGPL-licensed software. Per LICENSING.md, modified versions offered over a network must provide their source.',
          'Unverified: motion quality, collision checks and export quality. PromptQuorum has not run the app.',
          'Unverified: which video models follow the exported shots well. The maker\'s site shows Seedance 2.5 examples and says the exports are designed for Seedance, Kling and Veo; no independent test was found.',
          'Unverified: whether a Linux installer exists, and which version the installers run. The Windows release notes say the installer always starts the newest CozyClay.',
          'Unverified: the company or country behind the project. The sources name only the maker, Doyun, and the NomaDamas organization.',
          'Unverified: independent reviews or user numbers. None were found, and the maker\'s own comparison page was not treated as independent.',
          'Unverified: stability. The repository was created in July 2026, and the maker\'s page says to expect rough edges and a fast-moving changelog.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'CozyClay vs Alternatives',
        itemHeadings: true,
        content: [
          '**CozyClay is a free, open-source previs tool for browsers; PromptQuorum has not compared it with the alternatives hands-on.** The alternatives below come from the maker\'s own comparison page, so treat the descriptions as the maker\'s view, not an independent test.',
        ],
        columns: ['Tool', 'Noted in sources'],
        rows: [
          { 'Tool': 'CozyClay', 'Noted in sources': 'Free; AGPL-3.0; browser; export for video models' },
          { 'Tool': 'Blender', 'Noted in sources': 'Free; GPL; desktop; manual render of a clay pass' },
          { 'Tool': 'Unreal Engine', 'Noted in sources': 'Free for previs; source available; large install' },
          { 'Tool': 'Previs Pro', 'Noted in sources': 'Paid; iPad, iPhone and Mac app' },
          { 'Tool': 'FrameForge', 'Noted in sources': 'Paid; desktop; storyboard and previs teams' },
          { 'Tool': 'Cine Tracer', 'Noted in sources': 'Paid; desktop on Steam; real-time lighting' },
          { 'Tool': 'Higgsfield 3D Jutsu', 'Noted in sources': 'Subscription; browser; feeds Higgsfield\'s own generators' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Is CozyClay free?',
            a: 'Yes. CozyClay is free and open source under AGPL-3.0-or-later, and the maker\'s site lists a price of 0 with no paid plan. The AI video model you hand shots to is separate and may charge per generation, and the agent panel needs a model provider account or key.',
          },
          {
            q: 'Does CozyClay generate the video itself?',
            a: 'No. CozyClay prepares the shot: a first frame, a greybox reference clip, camera data and a prompt. An external AI video model, such as Seedance 2.5 in the maker\'s demos, renders the final video.',
          },
          {
            q: 'How do I install CozyClay?',
            a: 'Download CozyClay.dmg for macOS or CozyClay-Setup.exe for Windows from the maker\'s site, or run npx cozyclay with Node.js 22.19 or newer and a Chromium browser. The Windows installer is not code-signed, so Windows shows a warning.',
          },
          {
            q: 'Can Claude or Cursor control CozyClay?',
            a: 'Yes, per the maker. Add the MCP server with the command npx -y cozyclay mcp to Claude Desktop, Claude Code, Cursor or another MCP client. With the studio open, tool calls drive the visible viewport; without it, some tools run in memory.',
          },
          {
            q: 'What data does CozyClay collect?',
            a: 'By default it collects bucketed usage analytics through PostHog, which the maker describes as anonymous, with a random installation identifier, and says it never collects prompt text, file names or project content. You can opt out with cclay telemetry off or DO_NOT_TRACK=1.',
          },
          {
            q: 'Which browsers does CozyClay support?',
            a: 'Chromium-based browsers only, according to the maker; its comparison page says Safari and Firefox are not supported. The npx route also needs Node.js 22.19 or newer.',
          },
          {
            q: 'Does CozyClay need a GPU?',
            a: 'No, per the README: no GPU, Python or model download is needed. No RAM or disk figures are published, and PromptQuorum did not measure resource use.',
          },
          {
            q: 'What can CozyClay export?',
            a: 'Per the README, a keyframe pack (first and last frame, greybox clip, camera, prompt), mp4, depth and normal passes, a contact sheet and an OTIO cut list. A Storyboard project type produces captioned panels, an animatic and a contact sheet instead.',
          },
          {
            q: 'Which model providers does the agent panel work with?',
            a: 'According to the README, you sign in with ChatGPT or use your own key for Anthropic, OpenAI, Gemini, MiniMax, OpenRouter or CLIProxyAPI. The panel needs network access, and requests go to the provider you connect under that provider\'s terms.',
          },
          {
            q: 'What license does CozyClay use?',
            a: 'AGPL-3.0-or-later, per LICENSING.md. Modified versions offered over a network must provide their source, so ask your legal team if your organization restricts AGPL software.',
          },
          {
            q: 'Has PromptQuorum tested CozyClay?',
            a: 'No. This review rests on the maker\'s website, the GitHub repository, the release pages and the privacy page. Motion quality, export quality and how well video models follow the exported shots remain unverified.',
          },
          {
            q: 'Is CozyClay actively developed?',
            a: 'Release 3.2.2 appeared on 7 November 2026 and the repository received a commit on 15 November 2026. The repository was created in July 2026, and the maker\'s page says to expect rough edges.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**CozyClay is worth a look if you use AI video models and want to fix staging and camera before paying for a generation.**',
          'On paper it covers a lot for a free tool: a 3D stage, a motion compiler with QA checks, shots and camera rails, export packs for video models, an agent panel, an MCP server and installers for macOS and Windows. Development is active, with release 3.2.2 on 7 November 2026 and a commit on 15 November 2026.',
          'The trade-offs are real. According to the maker, the project is young, runs in Chromium browsers only and produces flat clay-style output on purpose; it also relies on an external video model for the final result. Usage analytics, described by the maker as anonymous, are on by default, and the company or country behind it is not stated. PromptQuorum has not tested the app, so try it on a small scene and check the export in your video model before relying on it.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[CozyClay website](https://cozyclay.org) — workflow, export list, install options, MCP snippet and requirements, checked 17 November 2026.',
          '[CozyClay privacy page](https://cozyclay.org/privacy/) — analytics, opt-out, what is not collected, hosted demo, checked 17 November 2026.',
          '[Previs software compared](https://cozyclay.org/previs-software/) — maker\'s comparison of previs tools and stated limits, checked 17 November 2026.',
          '[CozyClay GitHub repository](https://github.com/HaD0Yun/CozyClay) — repository, license, creation date and last push, checked 17 November 2026.',
          '[README](https://github.com/HaD0Yun/CozyClay#readme) — quick start, features, agent surfaces and MCP configuration, checked 17 November 2026.',
          '[LICENSING.md](https://github.com/HaD0Yun/CozyClay/blob/main/LICENSING.md) — AGPL-3.0-or-later and the earlier GPL-3.0-or-later history, checked 17 November 2026.',
          '[Analytics and privacy disclosure](https://github.com/HaD0Yun/CozyClay/blob/main/docs/privacy.md) — full list of collected events, checked 17 November 2026.',
          '[MCP README](https://github.com/HaD0Yun/CozyClay/blob/main/mcp/README.md) — live and no-editor MCP modes, checked 17 November 2026.',
          '[Release v3.2.2](https://github.com/HaD0Yun/CozyClay/releases/tag/v3.2.2) — latest release and its date, checked 17 November 2026.',
          '[Windows installer release](https://github.com/HaD0Yun/CozyClay/releases/tag/windows-installer) — CozyClay-Setup.exe and the code-signing note, checked 17 November 2026.',
          '[macOS release](https://github.com/HaD0Yun/cozyclay-releases/releases/tag/macos-1.0.3) — CozyClay.dmg, checked 17 November 2026.',
          '[npm package](https://www.npmjs.com/package/cozyclay) — latest published version, checked 17 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[OpenMontage Review](/power-local-llm/openmontage-review) — Open-source agentic video production: your AI coding assistant researches, scripts, generates and renders finished videos.',
          '[web-search-mcp Review](/power-local-llm/web-search-mcp-review) — Web search tool access for local LLMs through a locally hosted MCP server.',
          '[LocalMCP Review](/power-local-llm/localmcp-review) — Mac App Store app that runs a local MCP server so your AI client can search Mail, Calendar, Contacts, Reminders and Notes.',
          '[Image and Video Tools Compared](/power-local-llm/local-llm-images-video-compared) — the category comparison for image and video tools.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-17',
    theme: 'Image & Video Generation',
    heroImage: '/images/cozyclay-review-hero-de.webp',
    title: 'CozyClay-Rezension: kostenloses Previs-Studio im Browser für KI-Video, mit MCP-Server',
    seoTitle: 'CozyClay-Rezension: Previs im Browser für KI-Video, MCP',
    intro:
      'CozyClay ist ein kostenloses Open-Source-3D-Previs-Studio, das in einem Browser-Tab läuft. Sie blocken eine Szene, posieren Figuren, setzen Kamera und Schnitte und exportieren den Shot als erstes Bild, Referenzclip und Prompt für ein KI-Videomodell. Diese Rezension stützt sich auf die Website des Entwicklers, das GitHub-Repository, die Release-Seiten und die Datenschutzseite, geprüft am 17. November 2026. PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'CozyClay ist ein kostenloses Open-Source-3D-Previs-Studio im Browser, das Shots für KI-Videomodelle exportiert, mit MCP-Server. Installation, Datenschutz.',
    twitterDescription:
      'CozyClay blockt Szenen in 3D im Browser und exportiert Shots für KI-Videomodelle. Kostenlos, AGPL, mit MCP-Server für Claude und Cursor.',
    audience:
      'Videoschaffende mit KI-Videomodellen, Entwickler, die Werkzeuge per MCP steuern, und Teams, die kostenlose Previs-Software prüfen',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'CozyClay',
    targetKeywords: [
      'CozyClay Rezension',
      'CozyClay MCP',
      'kostenlose Previs-Software',
      'Previs im Browser',
      'Greybox zu KI-Video',
      'CozyClay installieren',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**CozyClay ist ein kostenloses Open-Source-3D-Previs-Studio (AGPL), das in einem Chromium-Browser läuft und Shots für KI-Videomodelle vorbereitet.** Es startet über ein macOS- oder Windows-Installationsprogramm oder einen einzigen npx-Befehl und enthält einen MCP-Server, damit Assistenten wie Claude Code oder Cursor die Szene bearbeiten können. Das fertige Video erzeugt es nicht selbst, und PromptQuorum hat es nicht getestet.',
    quickAnswerTop: {
      de: {
        question: 'Was ist CozyClay, und für wen ist es gedacht?',
        answer:
          'CozyClay ist ein browserbasiertes 3D-Studio, mit dem Sie einen Videoshot planen, bevor Sie ein KI-Videomodell dafür bezahlen. Es eignet sich für Menschen, die Inszenierung, Kamera und Timing selbst festlegen möchten und ein junges Open-Source-Projekt nutzen können.',
        bullets: [
          'Läuft in einem Chromium-Browser; macOS-.dmg, Windows-Installer oder npx cozyclay mit Node.js 22.19+.',
          'Preis: kostenlos; Lizenz AGPL-3.0-or-later.',
          'Exportiert erstes Bild, Greybox-Clip, Kameradaten und Prompt sowie mp4, Tiefen- und Normalenpässe, Kontaktbogen und eine OTIO-Schnittliste.',
          'MCP-Server und Agenten-Panel lassen Assistenten die Szene live bearbeiten.',
          'Nutzungsstatistik, die der Entwickler als anonym beschreibt, ist standardmäßig an und lässt sich abschalten.',
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
            text: 'CozyClay lässt Sie im Browser eine 3D-Szene blocken, Figuren posieren und Kamerafahrten setzen und den Shot dann als Bild, Referenzclip und Prompt für ein KI-Videomodell exportieren.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als kostenlose Greybox-Probebühne für KI-Video vor: Sie legen fest, wo alle stehen und wohin die Kamera fährt, bevor Sie für eine Generierung zahlen. Die App erzeugt das fertige Video nicht; das übernimmt ein externes Videomodell.',
          },
        ],
        items: [
          'Kostenlos und Open Source unter AGPL-3.0-or-later; auf der Website des Entwicklers ist kein kostenpflichtiger Tarif aufgeführt.',
          'Läuft in einem Chromium-Browser. Für macOS gibt es eine .dmg, für Windows einen .exe-Installer, und auf jeder Plattform funktioniert npx cozyclay mit Node.js 22.19 oder neuer.',
          'Ein MCP-Server (npx -y cozyclay mcp) lässt Claude Desktop, Claude Code, Cursor und andere MCP-Clients die Szene bearbeiten.',
          'Nutzungsstatistik, die der Entwickler als anonym beschreibt, ist standardmäßig an; Abschalten mit cclay telemetry off oder DO_NOT_TRACK=1.',
          'PromptQuorum hat die App nicht getestet. Das Projekt ist jung (Repository im Juli 2026 angelegt), und die Seite des Entwicklers selbst weist auf Ecken und Kanten hin.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das Video selbst stammt von einem externen KI-Videomodell, das Sie selbst auswählen und separat bezahlen. CozyClay bereitet die Eingabe vor; PromptQuorum hat nicht geprüft, wie gut ein Modell ihr folgt.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**CozyClay ist ein browserbasiertes 3D-„Previs“-Studio: Sie planen einen Shot zuerst in 3D und lassen ihn danach von einem KI-Videomodell rendern.**',
          'Das Projekt stammt von Doyun (GitHub-Nutzer HaD0Yun) bei NomaDamas und steht unter AGPL-3.0-or-later. Version 3.2.2 erschien am 7. November 2026, und das Repository erhielt am 15. November 2026 einen Commit; die Entwicklung läuft also weiter, und eine Warnung vor einem veralteten Projekt entfällt. Das Repository wurde im Juli 2026 angelegt.',
          'Der Entwickler beschreibt einen vierstufigen Ablauf. Bühne: Das Set aus Grundkörpern bauen und geriggte Figuren oder Kapsel-Platzhalter hinzufügen. Bewegung: Die Aktion beschreiben, ein Agent schreibt eine Bewegungsspezifikation und ein deterministischer Compiler im Browser berechnet jedes Bild, mit Prüfungen auf Kollisionen, Fußrutschen, Reichweite und Handkontakt. Kamera: Shots auf einer Zeitleiste anordnen, Dolly-Schienen zeichnen und durch das Objektiv blicken. Export: das Ergebnis an ein Videomodell übergeben.',
          'Das README nennt diese Exporte: ein Keyframe-Paket (erstes und letztes Bild, Greybox-Clip, Kamera, Prompt), mp4, Tiefen- und Normalenpässe, einen Kontaktbogen und eine OTIO-Schnittliste. Ein Storyboard-Projekt liefert stattdessen beschriftete Panels, ein Animatic und einen Kontaktbogen. Jede Änderung, auch jede des Agenten, ist ein einzelner Rückgängig-Schritt.',
          'Diese Beschreibungen sind Aussagen des Entwicklers. PromptQuorum hat die App nicht ausgeführt und weder die Bewegungsqualität noch die Exportqualität geprüft, ebenso wenig, wie gut KI-Videomodelle den exportierten Shots folgen.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So bekommen Sie die App',
        content: [
          '**Sie können CozyClay im Browser nutzen, über einen Download für macOS oder Windows installieren oder mit einem einzigen npx-Befehl starten.**',
          'Die Website des Entwicklers bietet CozyClay.dmg für macOS (macOS 12 oder neuer) und CozyClay-Setup.exe für Windows an. Beim ersten Start wird CozyClay heruntergeladen, das kann einige Minuten dauern. Der Windows-Installer ist nicht code-signiert, daher zeigt Windows „Der Computer wurde durch Windows geschützt“ an; wählen Sie „Weitere Informationen“ und dann „Trotzdem ausführen“. Das Studio öffnet sich im Browser unter einer lokalen Adresse (bei npx 127.0.0.1:5180/app/). Führen Sie ein Installationsprogramm nur aus, wenn Sie der Quelle vertrauen; PromptQuorum hat die Datei weder geprüft noch ausgeführt.',
        ],
        columns: ['Plattform', 'So bekommen Sie sie'],
        rows: [
          { 'Plattform': '[macOS](https://github.com/HaD0Yun/cozyclay-releases/releases/latest/download/CozyClay.dmg)', 'So bekommen Sie sie': 'CozyClay.dmg herunterladen (macOS 12+)' },
          { 'Plattform': '[Windows](https://github.com/HaD0Yun/CozyClay/releases/download/windows-installer/CozyClay-Setup.exe)', 'So bekommen Sie sie': 'CozyClay-Setup.exe laden (nicht code-signiert)' },
          { 'Plattform': '[Linux / jedes System](https://github.com/HaD0Yun/CozyClay#readme)', 'So bekommen Sie sie': 'npx cozyclay ausführen (Node.js 22.19+, Chromium)' },
          { 'Plattform': '[Playground im Browser](https://cozyclay.org/#try)', 'So bekommen Sie sie': 'Studio im Tab ausprobieren, ohne Installation' },
        ],
        note: 'Die Quellen sagen nicht, ob es einen Linux-Installer gibt; das README beschreibt den npx-Weg. Der Playground im Browser ist eine getrennte Kopie des Studios, die laut Datenschutzseite Ihre gespeicherten Szenen weder liest noch schreibt.',
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen',
        content: [
          '**CozyClay braucht einen Chromium-basierten Browser und für den npx-Weg Node.js 22.19 oder neuer; eine GPU, Python oder ein Modell-Download sind nicht nötig.**',
          'Diese Anforderungen stammen aus dem README. Die Vergleichsseite des Entwicklers nennt Safari und Firefox als nicht unterstützt. Angaben zu RAM oder Speicherplatz gibt es nicht, und PromptQuorum hat den Ressourcenbedarf nicht gemessen.',
        ],
        columns: ['Punkt', 'Angegebener Wert'],
        rows: [
          { 'Punkt': 'Browser', 'Angegebener Wert': 'Chromium-basiert (kein Safari oder Firefox)' },
          { 'Punkt': 'Node.js', 'Angegebener Wert': '22.19 oder neuer (npx-Weg)' },
          { 'Punkt': 'GPU', 'Angegebener Wert': 'Nicht nötig (README)' },
          { 'Punkt': 'Python / Modell-Download', 'Angegebener Wert': 'Nicht nötig (README)' },
          { 'Punkt': 'macOS-Installer', 'Angegebener Wert': 'macOS 12 oder neuer (Website)' },
          { 'Punkt': 'RAM / Speicher', 'Angegebener Wert': 'Nicht angegeben' },
          { 'Punkt': 'Netzwerk', 'Angegebener Wert': 'Erster Start lädt CozyClay; Agent braucht es' },
        ],
        note: 'Agentenfunktionen brauchen einen Modellanbieter (eine ChatGPT-Anmeldung oder Ihren eigenen API-Schlüssel) und damit Netzwerkzugang. Das KI-Videomodell, das den fertigen Clip rendert, ist getrennt.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Der Kern von CozyClay ist ein 3D-Editor zum Inszenieren eines Shots, dazu kommen drei Wege, ihn mit KI zu steuern.** Alle Punkte unten sind Aussagen des Entwicklers von der Website und aus dem README.',
        ],
        items: [
          'Das Set aus Grundkörpern bauen und geriggte Figuren hinzufügen, oder Kapsel-Platzhalter, wenn niemand ein Glied bewegen muss.',
          'Posieren und animieren über eine Bewegungsspezifikation, die ein deterministischer Compiler im Browser Bild für Bild berechnet, mit QA-Prüfungen auf Kollisionen, Fußrutschen, Reichweite und Handkontakt.',
          'Shots auf einer Zeitleiste anordnen, Dolly-Schienen zeichnen und durch das Objektiv blicken; jeder Shot kennt die Grenzen des Videomodells, das Sie anpeilen.',
          'Export eines Keyframe-Pakets (erstes und letztes Bild, Greybox-Clip, Kamera, Prompt), von mp4, Tiefen- und Normalenpässen, eines Kontaktbogens und einer OTIO-Schnittliste.',
          'Ein Storyboard-Projekttyp mit beschrifteten Panels, Animatic und Kontaktbogen.',
          'Ein Agenten-Panel (Cmd/Strg+B), in dem Sie sich mit ChatGPT anmelden oder Ihren eigenen Schlüssel für Anthropic, OpenAI, Gemini, MiniMax, OpenRouter oder CLIProxyAPI verwenden.',
          'Ein MCP-Server (npx -y cozyclay mcp) für Claude Desktop, Claude Code, Cursor oder jeden MCP-Client. Laut MCP-README arbeitet er live mit geöffnetem Editor oder im Speicher ohne Browser für Szenen-, Kamera-, Prompt- und Projektdatei-Werkzeuge.',
          'Eine Terminal-Schnittstelle (cclay live status --wait) für Coding-Agenten, die ein laufendes Studio mit JSON ein und aus steuern; jede Änderung ist ein Rückgängig-Schritt.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**CozyClay erhebt standardmäßig Nutzungsstatistiken, die nach Angabe des Entwicklers anonym sind, erhebt nach eigener Aussage nie Projektinhalte oder Prompt-Texte und lässt die Statistik abschalten.**',
          'Laut Datenschutzseite (gültig ab 25. Oktober 2026) nutzt die Website PostHog (US Cloud) und Cloudflare Web Analytics, ohne Cookies und ohne Sitzungsaufzeichnung. Das npm-Paket speichert eine zufällige Installationskennung in einer lokalen Statusdatei und sendet gebündelte Ereignisse wie ersten Start, Sitzungsdauer und Aktionszahlen. Prompt-Texte, Asset- und Dateinamen, Projektinhalte und lokale Pfade werden laut Seite nicht erfasst.',
          'Sie können mit cclay telemetry off, der Umgebungsvariable COZYCLAY_TELEMETRY=0, DO_NOT_TRACK=1 oder dem Schalter in der oberen Leiste des Studios widersprechen. Quellcode-Checkouts, Forks, Entwicklungsserver, CI und Tests senden laut Entwickler nichts.',
          'Agenten- und Modellfunktionen senden Ihre Anfragen an den Anbieter, den Sie verbinden, nach dessen Bedingungen. Die Datenschutzseite beschreibt außerdem eine gehostete Bewegungs-Demo mit Google-Anmeldung, die Prompts und Ergebnisse bis zu 30 Tage speichert; laut Seite ist diese Demo derzeit nicht öffentlich zugänglich. Datenschutzseite und README nennen weder Firma noch Adresse noch anwendbares Recht.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**CozyClay passt zu Menschen, die einen KI-Videoshot planen möchten, bevor sie für die Generierung bezahlen.**',
        ],
        items: [
          'Videoschaffende, die bei jedem Take eines KI-Videomodells dieselbe Anordnung, dasselbe Timing und dieselbe Kamera wollen.',
          'Entwickler und Agenten-Nutzer, die einen Assistenten per MCP oder Terminal-Schnittstelle eine 3D-Szene bearbeiten lassen möchten.',
          'Menschen, die kostenlose Open-Source-Previs wollen, die laut README ohne GPU in einem Browser-Tab läuft.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        content: [
          '**CozyClay passt in manchen Fällen nicht, und mehrere Details sind ungeprüft.**',
        ],
        items: [
          'Nicht geeignet: wer fotorealistisches Rendering oder Lichtgestaltung braucht. Laut Entwickler ist die Ausgabe bewusst ein flacher Clay-Durchgang.',
          'Nicht geeignet: Nutzer von Safari oder Firefox, denn laut Entwickler werden nur Chromium-Browser unterstützt.',
          'Nicht geeignet: wer ein fertiges Video aus einem einzigen Werkzeug will. Ein externes KI-Videomodell rendert den fertigen Clip und kostet extra.',
          'Nicht geeignet: Organisationen, die keine AGPL-lizenzierte Software einsetzen dürfen. Laut LICENSING.md müssen veränderte Versionen, die über ein Netzwerk angeboten werden, ihren Quellcode bereitstellen.',
          'Ungeprüft: Bewegungsqualität, Kollisionsprüfungen und Exportqualität. PromptQuorum hat die App nicht ausgeführt.',
          'Ungeprüft: welche Videomodelle den exportierten Shots gut folgen. Die Website des Entwicklers zeigt Beispiele mit Seedance 2.5 und sagt, die Exporte seien für Seedance, Kling und Veo gedacht; ein unabhängiger Test wurde nicht gefunden.',
          'Ungeprüft: ob es einen Linux-Installer gibt und welche Version die Installer ausführen. Die Windows-Release-Notes sagen, der Installer starte immer das neueste CozyClay.',
          'Ungeprüft: die Firma oder das Land hinter dem Projekt. Die Quellen nennen nur den Entwickler Doyun und die Organisation NomaDamas.',
          'Ungeprüft: unabhängige Rezensionen oder Nutzerzahlen. Es wurden keine gefunden, und die eigene Vergleichsseite des Entwicklers galt nicht als unabhängig.',
          'Ungeprüft: Stabilität. Das Repository wurde im Juli 2026 angelegt, und die Seite des Entwicklers weist auf Ecken und Kanten und ein schnelllebiges Changelog hin.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'CozyClay im Vergleich zu Alternativen',
        itemHeadings: true,
        content: [
          '**CozyClay ist ein kostenloses Open-Source-Previs-Werkzeug für den Browser; PromptQuorum hat es nicht praktisch mit den Alternativen verglichen.** Die folgenden Alternativen stammen von der eigenen Vergleichsseite des Entwicklers; die Beschreibungen sind also dessen Sicht und kein unabhängiger Test.',
        ],
        columns: ['Werkzeug', 'In den Quellen vermerkt'],
        rows: [
          { 'Werkzeug': 'CozyClay', 'In den Quellen vermerkt': 'Kostenlos; AGPL-3.0; Browser; Export für Videomodelle' },
          { 'Werkzeug': 'Blender', 'In den Quellen vermerkt': 'Kostenlos; GPL; Desktop; manuelles Rendern eines Clay-Durchgangs' },
          { 'Werkzeug': 'Unreal Engine', 'In den Quellen vermerkt': 'Für Previs kostenlos; Quellcode einsehbar; große Installation' },
          { 'Werkzeug': 'Previs Pro', 'In den Quellen vermerkt': 'Kostenpflichtig; App für iPad, iPhone und Mac' },
          { 'Werkzeug': 'FrameForge', 'In den Quellen vermerkt': 'Kostenpflichtig; Desktop; Storyboard- und Previs-Teams' },
          { 'Werkzeug': 'Cine Tracer', 'In den Quellen vermerkt': 'Kostenpflichtig; Desktop auf Steam; Echtzeit-Licht' },
          { 'Werkzeug': 'Higgsfield 3D Jutsu', 'In den Quellen vermerkt': 'Abo; Browser; speist die eigenen Generatoren von Higgsfield' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Ist CozyClay kostenlos?',
            a: 'Ja. CozyClay ist kostenlos und Open Source unter AGPL-3.0-or-later; die Website des Entwicklers nennt einen Preis von 0 und keinen kostenpflichtigen Tarif. Das KI-Videomodell, an das Sie Shots übergeben, ist getrennt und kann pro Generierung kosten, und das Agenten-Panel braucht ein Modellanbieter-Konto oder einen Schlüssel.',
          },
          {
            q: 'Erzeugt CozyClay das Video selbst?',
            a: 'Nein. CozyClay bereitet den Shot vor: ein erstes Bild, einen Greybox-Referenzclip, Kameradaten und einen Prompt. Ein externes KI-Videomodell, etwa Seedance 2.5 in den Demos des Entwicklers, rendert das fertige Video.',
          },
          {
            q: 'Wie installiere ich CozyClay?',
            a: 'Laden Sie auf der Website des Entwicklers CozyClay.dmg für macOS oder CozyClay-Setup.exe für Windows herunter oder führen Sie npx cozyclay mit Node.js 22.19 oder neuer und einem Chromium-Browser aus. Der Windows-Installer ist nicht code-signiert, daher zeigt Windows eine Warnung.',
          },
          {
            q: 'Können Claude oder Cursor CozyClay steuern?',
            a: 'Ja, laut Entwickler. Fügen Sie den MCP-Server mit dem Befehl npx -y cozyclay mcp zu Claude Desktop, Claude Code, Cursor oder einem anderen MCP-Client hinzu. Bei geöffnetem Studio steuern Werkzeugaufrufe den sichtbaren Viewport; ohne Studio laufen manche Werkzeuge im Speicher.',
          },
          {
            q: 'Welche Daten erhebt CozyClay?',
            a: 'Standardmäßig gebündelte Nutzungsstatistiken über PostHog, die der Entwickler als anonym beschreibt, mit einer zufälligen Installationskennung; nach eigener Aussage nie Prompt-Texte, Dateinamen oder Projektinhalte. Sie können mit cclay telemetry off oder DO_NOT_TRACK=1 widersprechen.',
          },
          {
            q: 'Welche Browser unterstützt CozyClay?',
            a: 'Laut Entwickler nur Chromium-basierte Browser; auf der Vergleichsseite des Entwicklers heißt es, Safari und Firefox würden nicht unterstützt. Der npx-Weg setzt außerdem Node.js 22.19 oder neuer voraus.',
          },
          {
            q: 'Braucht CozyClay eine GPU?',
            a: 'Nein, laut README sind weder GPU noch Python noch ein Modell-Download nötig. RAM- oder Speicherangaben werden nicht veröffentlicht, und PromptQuorum hat den Ressourcenbedarf nicht gemessen.',
          },
          {
            q: 'Was kann CozyClay exportieren?',
            a: 'Laut README ein Keyframe-Paket (erstes und letztes Bild, Greybox-Clip, Kamera, Prompt), mp4, Tiefen- und Normalenpässe, ein Contact Sheet und eine OTIO-Schnittliste. Ein Storyboard-Projekt erzeugt stattdessen beschriftete Panels, ein Animatic und ein Contact Sheet.',
          },
          {
            q: 'Mit welchen Modellanbietern arbeitet das Agenten-Panel?',
            a: 'Laut README melden Sie sich mit ChatGPT an oder nutzen einen eigenen Schlüssel für Anthropic, OpenAI, Gemini, MiniMax, OpenRouter oder CLIProxyAPI. Das Panel braucht Netzwerkzugang, und Anfragen gehen zu den Bedingungen des jeweiligen Anbieters an den von Ihnen verbundenen Anbieter.',
          },
          {
            q: 'Welche Lizenz hat CozyClay?',
            a: 'AGPL-3.0-or-later laut LICENSING.md. Veränderte Versionen, die über ein Netzwerk angeboten werden, müssen ihren Quellcode bereitstellen; fragen Sie Ihre Rechtsabteilung, falls Ihr Unternehmen AGPL-Software einschränkt.',
          },
          {
            q: 'Hat PromptQuorum CozyClay getestet?',
            a: 'Nein. Diese Übersicht stützt sich auf die Website des Entwicklers, das GitHub-Repository, die Release-Seiten und die Datenschutzseite. Bewegungsqualität, Exportqualität und wie gut Videomodelle den exportierten Shots folgen, sind nicht überprüft.',
          },
          {
            q: 'Wird CozyClay aktiv weiterentwickelt?',
            a: 'Version 3.2.2 erschien am 7. November 2026, und das Repository erhielt am 15. November 2026 einen Commit. Das Repository wurde im Juli 2026 angelegt, und die Seite des Entwicklers weist auf Ecken und Kanten hin.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**CozyClay ist einen Blick wert, wenn Sie KI-Videomodelle nutzen und Inszenierung und Kamera festlegen möchten, bevor Sie für eine Generierung zahlen.**',
          'Auf dem Papier deckt es für ein kostenloses Werkzeug viel ab: eine 3D-Bühne, einen Bewegungs-Compiler mit QA-Prüfungen, Shots und Kameraschienen, Exportpakete für Videomodelle, ein Agenten-Panel, einen MCP-Server und Installer für macOS und Windows. Die Entwicklung ist aktiv, mit Version 3.2.2 am 7. November 2026 und einem Commit am 15. November 2026.',
          'Die Kompromisse sind real. Laut Entwickler ist das Projekt jung, läuft nur in Chromium-Browsern und liefert absichtlich flache Clay-Ausgabe; für das Endergebnis braucht es zudem ein externes Videomodell. Statistik, die der Entwickler als anonym beschreibt, ist standardmäßig an, und Firma oder Land dahinter sind nicht angegeben. PromptQuorum hat die App nicht getestet; probieren Sie sie an einer kleinen Szene aus und prüfen Sie den Export in Ihrem Videomodell, bevor Sie sich darauf verlassen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[CozyClay-Website](https://cozyclay.org) — Ablauf, Exportliste, Installationswege, MCP-Snippet und Anforderungen, geprüft am 17. November 2026.',
          '[CozyClay-Datenschutzseite](https://cozyclay.org/privacy/) — Statistik, Widerspruch, was nicht erfasst wird, gehostete Demo, geprüft am 17. November 2026.',
          '[Previs-Software im Vergleich](https://cozyclay.org/previs-software/) — Vergleich von Previs-Werkzeugen durch den Entwickler und genannte Grenzen, geprüft am 17. November 2026.',
          '[CozyClay-GitHub-Repository](https://github.com/HaD0Yun/CozyClay) — Repository, Lizenz, Anlagedatum und letzter Push, geprüft am 17. November 2026.',
          '[README](https://github.com/HaD0Yun/CozyClay#readme) — Schnellstart, Funktionen, Agenten-Zugänge und MCP-Konfiguration, geprüft am 17. November 2026.',
          '[LICENSING.md](https://github.com/HaD0Yun/CozyClay/blob/main/LICENSING.md) — AGPL-3.0-or-later und die frühere GPL-3.0-or-later-Geschichte, geprüft am 17. November 2026.',
          '[Offenlegung zu Statistik und Datenschutz](https://github.com/HaD0Yun/CozyClay/blob/main/docs/privacy.md) — vollständige Liste der erfassten Ereignisse, geprüft am 17. November 2026.',
          '[MCP-README](https://github.com/HaD0Yun/CozyClay/blob/main/mcp/README.md) — MCP-Modi mit und ohne Editor, geprüft am 17. November 2026.',
          '[Release v3.2.2](https://github.com/HaD0Yun/CozyClay/releases/tag/v3.2.2) — neueste Version und ihr Datum, geprüft am 17. November 2026.',
          '[Release des Windows-Installers](https://github.com/HaD0Yun/CozyClay/releases/tag/windows-installer) — CozyClay-Setup.exe und der Hinweis zur fehlenden Code-Signatur, geprüft am 17. November 2026.',
          '[macOS-Release](https://github.com/HaD0Yun/cozyclay-releases/releases/tag/macos-1.0.3) — CozyClay.dmg, geprüft am 17. November 2026.',
          '[npm-Paket](https://www.npmjs.com/package/cozyclay) — zuletzt veröffentlichte Version, geprüft am 17. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[OpenMontage-Rezension](/de/power-local-llm/openmontage-review) — quelloffene agentische Videoproduktion: Ihr KI-Coding-Assistent recherchiert, schreibt Skripte, erzeugt und rendert fertige Videos.',
          '[web-search-mcp-Rezension](/de/power-local-llm/web-search-mcp-review) — Websuche für lokale LLMs über einen lokal gehosteten MCP-Server.',
          '[LocalMCP-Rezension](/de/power-local-llm/localmcp-review) — App aus dem Mac App Store, die einen lokalen MCP-Server betreibt, damit Ihr KI-Client Mail, Kalender, Kontakte, Erinnerungen und Notizen durchsuchen kann.',
          '[Bild- und Videowerkzeuge im Vergleich](/de/power-local-llm/local-llm-images-video-compared) — der Kategorievergleich für Bild- und Videowerkzeuge.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-17',
    theme: 'Image & Video Generation',
    heroImage: '/images/cozyclay-review-hero-es.webp',
    title: 'Reseña de CozyClay: estudio de previs gratuito en el navegador para vídeo con IA, con servidor MCP',
    seoTitle: 'Reseña de CozyClay: previs en navegador para vídeo IA, MCP',
    intro:
      'CozyClay es un estudio de previs 3D gratuito y de código abierto que funciona en una pestaña del navegador. Bloqueas una escena, posas personajes, ajustas la cámara y los cortes, y exportas el plano como primer fotograma, clip de referencia y prompt para un modelo de vídeo con IA. Esta reseña se basa en el sitio del desarrollador, el repositorio de GitHub, sus páginas de versiones y su página de privacidad, consultados el 17 de noviembre de 2026. PromptQuorum no ha probado la app en la práctica.',
    metaDescription:
      'CozyClay es un estudio de previs 3D gratuito y de código abierto para el navegador que exporta planos a modelos de vídeo con IA, con servidor MCP.',
    twitterDescription:
      'CozyClay bloquea escenas en 3D en tu navegador y exporta planos para modelos de vídeo con IA. Gratis, AGPL, con servidor MCP para Claude y Cursor.',
    audience:
      'Creadores de vídeo que usan modelos de vídeo con IA, desarrolladores que controlan herramientas mediante MCP y equipos que evalúan software de previs gratuito',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'CozyClay',
    targetKeywords: [
      'reseña CozyClay',
      'CozyClay MCP',
      'software de previs gratuito',
      'previs 3D en el navegador',
      'greybox a vídeo con IA',
      'instalar CozyClay',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**CozyClay es un estudio de previs 3D gratuito y de código abierto (AGPL) que funciona en un navegador Chromium y prepara planos para modelos de vídeo con IA.** Se inicia desde un instalador de macOS o Windows o con un solo comando npx, e incluye un servidor MCP para que asistentes como Claude Code o Cursor editen la escena. No genera el vídeo final por sí mismo, y PromptQuorum no lo ha probado.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es CozyClay y para quién es?',
        answer:
          'CozyClay es un estudio 3D en el navegador para planificar un plano de vídeo antes de pagar a un modelo de vídeo con IA para generarlo. Es adecuado para quienes quieren controlar la puesta en escena, la cámara y el ritmo, y se sienten cómodos con un proyecto de código abierto joven.',
        bullets: [
          'Funciona en un navegador Chromium; .dmg para macOS, instalador de Windows o npx cozyclay con Node.js 22.19+.',
          'Precio: gratis; licencia AGPL-3.0-or-later.',
          'Exporta un primer fotograma, un clip greybox, datos de cámara y prompt, además de mp4, pases de profundidad y de normales, una hoja de contactos y una lista de cortes OTIO.',
          'Un servidor MCP y un panel de agente permiten que asistentes editen la escena en vivo.',
          'Las estadísticas de uso, que el desarrollador describe como anónimas, vienen activadas de forma predeterminada y se pueden desactivar.',
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
            text: 'CozyClay te permite bloquear una escena 3D, posar personajes y fijar movimientos de cámara en el navegador, y luego exportar el plano como fotograma, clip de referencia y prompt para un modelo de vídeo con IA.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en él como un escenario de ensayo greybox gratuito para vídeo con IA: decides dónde está cada uno y adónde va la cámara antes de pagar una generación. La app no hace el vídeo final; lo hace un modelo de vídeo externo.',
          },
        ],
        items: [
          'Gratis y de código abierto bajo AGPL-3.0-or-later; el sitio del desarrollador no lista ningún plan de pago.',
          'Funciona en un navegador Chromium. macOS tiene un .dmg, Windows un instalador .exe, y todas las plataformas pueden ejecutar npx cozyclay con Node.js 22.19 o posterior.',
          'Un servidor MCP (npx -y cozyclay mcp) permite que Claude Desktop, Claude Code, Cursor y otros clientes MCP editen la escena.',
          'Las estadísticas de uso, que el desarrollador describe como anónimas, vienen activadas de forma predeterminada; se desactivan con cclay telemetry off o DO_NOT_TRACK=1.',
          'PromptQuorum no ha probado la app. El proyecto es joven (repositorio creado en julio de 2026) y la propia página del desarrollador avisa de que hay aristas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'El vídeo en sí lo produce un modelo de vídeo con IA externo que eliges y pagas aparte. CozyClay prepara la entrada; PromptQuorum no ha comprobado hasta qué punto un modelo la sigue.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen',
        content: [
          '**CozyClay es un estudio de «previs» 3D en el navegador: planificas primero un plano en 3D y después un modelo de vídeo con IA lo renderiza.**',
          'El proyecto lo crea Doyun (usuario de GitHub HaD0Yun) en NomaDamas y se publica bajo AGPL-3.0-or-later. La versión 3.2.2 salió el 7 de noviembre de 2026 y el repositorio recibió un commit el 15 de noviembre de 2026, así que el desarrollo continúa y no se aplica ninguna advertencia de proyecto abandonado. El repositorio se creó en julio de 2026.',
          'El desarrollador describe un flujo de cuatro pasos. Escenario: construir el set con primitivas y añadir personajes con rig o figuras de cápsula. Movimiento: describir la acción, un agente escribe una especificación de movimiento y un compilador determinista en el navegador calcula cada fotograma, con comprobaciones de colisiones, deslizamiento de pies, alcance y contacto de manos. Rodaje: colocar los planos en una línea de tiempo, dibujar raíles de travelling y mirar a través del objetivo. Exportación: entregar el resultado a un modelo de vídeo.',
          'El README enumera estas exportaciones: un paquete de fotogramas clave (primer y último fotograma, clip greybox, cámara, prompt), mp4, pases de profundidad y de normales, una hoja de contactos y una lista de cortes OTIO. Un proyecto Storyboard produce en su lugar viñetas con leyenda, un animatic y una hoja de contactos. Cada edición, incluidos los cambios del agente, es un único paso de deshacer.',
          'Estas descripciones son afirmaciones del desarrollador. PromptQuorum no ha ejecutado la app y no ha comprobado la calidad del movimiento, la calidad de las exportaciones ni hasta qué punto los modelos de vídeo con IA siguen los planos exportados.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirla',
        content: [
          '**Puedes usar CozyClay en el navegador, instalarlo desde una descarga para macOS o Windows, o iniciarlo con un solo comando npx.**',
          'El sitio del desarrollador ofrece CozyClay.dmg para macOS (macOS 12 o posterior) y CozyClay-Setup.exe para Windows. El primer inicio descarga CozyClay y puede tardar unos minutos. El instalador de Windows no está firmado, así que Windows muestra «Windows protegió su PC»: elige Más información y después Ejecutar de todas formas. El estudio se abre en el navegador en una dirección local (127.0.0.1:5180/app/ con npx). Ejecuta un instalador solo si confías en el origen de la descarga; PromptQuorum no ha analizado ni ejecutado el archivo.',
        ],
        columns: ['Plataforma', 'Cómo conseguirla'],
        rows: [
          { 'Plataforma': '[macOS](https://github.com/HaD0Yun/cozyclay-releases/releases/latest/download/CozyClay.dmg)', 'Cómo conseguirla': 'Descargar CozyClay.dmg (macOS 12+)' },
          { 'Plataforma': '[Windows](https://github.com/HaD0Yun/CozyClay/releases/download/windows-installer/CozyClay-Setup.exe)', 'Cómo conseguirla': 'Descargar CozyClay-Setup.exe (sin firmar)' },
          { 'Plataforma': '[Linux / cualquier sistema](https://github.com/HaD0Yun/CozyClay#readme)', 'Cómo conseguirla': 'Ejecutar npx cozyclay (Node.js 22.19+, Chromium)' },
          { 'Plataforma': '[Playground en el navegador](https://cozyclay.org/#try)', 'Cómo conseguirla': 'Probar el estudio en una pestaña, sin instalar' },
        ],
        note: 'Las fuentes no dicen si existe un instalador para Linux; el README documenta la vía npx. El playground en el navegador es una copia aparte del estudio que, según la página de privacidad, no lee ni escribe tus escenas guardadas.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**CozyClay necesita un navegador basado en Chromium y, para la vía npx, Node.js 22.19 o posterior; no necesita GPU, Python ni descarga de modelos.**',
          'Estos requisitos vienen del README. La página de comparación del desarrollador indica que Safari y Firefox no son compatibles. No se publican cifras de RAM ni de disco, y PromptQuorum no midió el uso de recursos.',
        ],
        columns: ['Elemento', 'Cifra indicada'],
        rows: [
          { 'Elemento': 'Navegador', 'Cifra indicada': 'Basado en Chromium (ni Safari ni Firefox)' },
          { 'Elemento': 'Node.js', 'Cifra indicada': '22.19 o posterior (vía npx)' },
          { 'Elemento': 'GPU', 'Cifra indicada': 'No necesaria (README)' },
          { 'Elemento': 'Python / descarga de modelo', 'Cifra indicada': 'No necesarios (README)' },
          { 'Elemento': 'Instalador de macOS', 'Cifra indicada': 'macOS 12 o posterior (sitio)' },
          { 'Elemento': 'RAM / disco', 'Cifra indicada': 'No indicado' },
          { 'Elemento': 'Red', 'Cifra indicada': 'El primer inicio descarga CozyClay; el agente la usa' },
        ],
        note: 'Las funciones de agente necesitan un proveedor de modelos (un inicio de sesión de ChatGPT o tu propia clave de API) y, por tanto, acceso a la red. El modelo de vídeo con IA que renderiza el clip final es aparte.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El núcleo de CozyClay es un editor 3D para poner en escena un plano, con tres formas de dirigirlo con IA.** Todos los puntos siguientes son afirmaciones del desarrollador tomadas del sitio y del README.',
        ],
        items: [
          'Construir el set con primitivas y añadir personajes con rig, o figuras de cápsula cuando nadie necesita mover una extremidad.',
          'Posar y animar mediante una especificación de movimiento que un compilador determinista en el navegador calcula fotograma a fotograma, con comprobaciones de QA de colisiones, deslizamiento de pies, alcance y contacto de manos.',
          'Colocar planos en una línea de tiempo, dibujar raíles de travelling y mirar a través del objetivo; cada plano conoce los límites del modelo de vídeo al que apuntas.',
          'Exportar un paquete de fotogramas clave (primer y último fotograma, clip greybox, cámara, prompt), mp4, pases de profundidad y de normales, una hoja de contactos y una lista de cortes OTIO.',
          'Un tipo de proyecto Storyboard con viñetas con leyenda, animatic y hoja de contactos.',
          'Un panel de agente (Cmd/Ctrl+B) donde inicias sesión con ChatGPT o usas tu propia clave de Anthropic, OpenAI, Gemini, MiniMax, OpenRouter o CLIProxyAPI.',
          'Un servidor MCP (npx -y cozyclay mcp) para Claude Desktop, Claude Code, Cursor o cualquier cliente MCP. Según el README de MCP, funciona en vivo con el editor abierto, o en memoria sin navegador para las herramientas de escena, cámara, prompt y archivo de proyecto.',
          'Una interfaz de terminal (cclay live status --wait) para agentes de código que controlan un estudio en ejecución con JSON de entrada y salida; cada cambio es un paso de deshacer.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**CozyClay recoge de forma predeterminada estadísticas de uso que describe como anónimas, afirma que nunca recoge el contenido de los proyectos ni el texto de los prompts, y permite desactivar las estadísticas.**',
          'Según la página de privacidad (en vigor desde el 25 de octubre de 2026), el sitio usa PostHog (US Cloud) y Cloudflare Web Analytics, sin cookies ni grabación de sesiones. El paquete npm guarda un identificador de instalación aleatorio en un archivo de estado local y envía eventos agrupados como el primer inicio, la duración de la sesión y el número de acciones. Según la página, no se recogen el texto de los prompts, los nombres de activos y archivos, el contenido de los proyectos ni las rutas locales.',
          'Puedes desactivarlas con cclay telemetry off, la variable de entorno COZYCLAY_TELEMETRY=0, DO_NOT_TRACK=1 o el interruptor de la barra superior del estudio. Las copias del código fuente, los forks, los servidores de desarrollo, la CI y las pruebas no envían nada, según el desarrollador.',
          'Las funciones de agente y de modelo envían tus peticiones al proveedor que conectes, según los términos de ese proveedor. La página de privacidad describe además una demo de movimiento alojada con inicio de sesión de Google que guarda prompts y resultados hasta 30 días; indica que esa demo no está abierta al público por ahora. La página de privacidad y el README no nombran empresa, dirección ni legislación aplicable.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**CozyClay encaja con quienes quieren planificar un plano de vídeo con IA antes de pagar para generarlo.**',
        ],
        items: [
          'Creadores de vídeo que quieren el mismo bloqueo, ritmo y cámara en cada toma de un modelo de vídeo con IA.',
          'Desarrolladores y usuarios de agentes que quieren que un asistente edite una escena 3D mediante MCP o una interfaz de terminal.',
          'Quienes quieren previs gratuita y de código abierto que, según el README, funcione en una pestaña del navegador sin GPU.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        content: [
          '**CozyClay encaja mal en algunas situaciones, y varios detalles siguen sin verificar.**',
        ],
        items: [
          'No es adecuado: para quien necesite renderizado fotorrealista o diseño de iluminación. El desarrollador dice que la salida es un pase de arcilla plano a propósito.',
          'No es adecuado: para usuarios de Safari o Firefox, porque el desarrollador indica que solo se admiten navegadores Chromium.',
          'No es adecuado: para quien quiera un vídeo terminado desde una sola herramienta. Un modelo de vídeo con IA externo renderiza el clip final y tiene su propio coste.',
          'No es adecuado: para organizaciones que no pueden usar software con licencia AGPL. Según LICENSING.md, las versiones modificadas ofrecidas por red deben proporcionar su código fuente.',
          'Sin verificar: la calidad del movimiento, las comprobaciones de colisión y la calidad de las exportaciones. PromptQuorum no ha ejecutado la app.',
          'Sin verificar: qué modelos de vídeo siguen bien los planos exportados. El sitio del desarrollador muestra ejemplos con Seedance 2.5 y dice que las exportaciones están pensadas para Seedance, Kling y Veo; no se encontró ninguna prueba independiente.',
          'Sin verificar: si existe un instalador para Linux y qué versión ejecutan los instaladores. Las notas de la versión de Windows dicen que el instalador siempre inicia la última versión de CozyClay.',
          'Sin verificar: la empresa o el país detrás del proyecto. Las fuentes solo nombran al desarrollador, Doyun, y a la organización NomaDamas.',
          'Sin verificar: reseñas independientes o cifras de usuarios. No se encontró ninguna, y la página de comparación del propio desarrollador no se trató como independiente.',
          'Sin verificar: la estabilidad. El repositorio se creó en julio de 2026, y la página del desarrollador avisa de aristas y de un registro de cambios muy dinámico.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'CozyClay frente a las alternativas',
        itemHeadings: true,
        content: [
          '**CozyClay es una herramienta de previs gratuita y de código abierto para el navegador; PromptQuorum no la ha comparado en la práctica con las alternativas.** Las alternativas siguientes proceden de la página de comparación del propio desarrollador, así que las descripciones son su punto de vista, no una prueba independiente.',
        ],
        columns: ['Herramienta', 'Indicado en las fuentes'],
        rows: [
          { 'Herramienta': 'CozyClay', 'Indicado en las fuentes': 'Gratis; AGPL-3.0; navegador; exporta para modelos de vídeo' },
          { 'Herramienta': 'Blender', 'Indicado en las fuentes': 'Gratis; GPL; escritorio; render manual de un pase de arcilla' },
          { 'Herramienta': 'Unreal Engine', 'Indicado en las fuentes': 'Gratis para previs; código disponible; instalación grande' },
          { 'Herramienta': 'Previs Pro', 'Indicado en las fuentes': 'De pago; app para iPad, iPhone y Mac' },
          { 'Herramienta': 'FrameForge', 'Indicado en las fuentes': 'De pago; escritorio; equipos de storyboard y previs' },
          { 'Herramienta': 'Cine Tracer', 'Indicado en las fuentes': 'De pago; escritorio en Steam; iluminación en tiempo real' },
          { 'Herramienta': 'Higgsfield 3D Jutsu', 'Indicado en las fuentes': 'Suscripción; navegador; alimenta los generadores de Higgsfield' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿CozyClay es gratis?',
            a: 'Sí. CozyClay es gratis y de código abierto bajo AGPL-3.0-or-later, y el sitio del desarrollador indica un precio de 0 sin plan de pago. El modelo de vídeo con IA al que entregas los planos es aparte y puede cobrar por generación, y el panel de agente necesita una cuenta o una clave de un proveedor de modelos.',
          },
          {
            q: '¿CozyClay genera el vídeo por sí mismo?',
            a: 'No. CozyClay prepara el plano: un primer fotograma, un clip de referencia greybox, datos de cámara y un prompt. Un modelo de vídeo con IA externo, como Seedance 2.5 en las demos del desarrollador, renderiza el vídeo final.',
          },
          {
            q: '¿Cómo se instala CozyClay?',
            a: 'Descarga CozyClay.dmg para macOS o CozyClay-Setup.exe para Windows desde el sitio del desarrollador, o ejecuta npx cozyclay con Node.js 22.19 o posterior y un navegador Chromium. El instalador de Windows no está firmado, por lo que Windows muestra una advertencia.',
          },
          {
            q: '¿Pueden Claude o Cursor controlar CozyClay?',
            a: 'Sí, según el desarrollador. Añade el servidor MCP con el comando npx -y cozyclay mcp a Claude Desktop, Claude Code, Cursor u otro cliente MCP. Con el estudio abierto, las llamadas a herramientas controlan la vista visible; sin él, algunas herramientas se ejecutan en memoria.',
          },
          {
            q: '¿Qué datos recoge CozyClay?',
            a: 'De forma predeterminada, estadísticas de uso agrupadas mediante PostHog que el desarrollador describe como anónimas, con un identificador de instalación aleatorio; afirma que nunca recoge texto de prompts, nombres de archivos ni contenido de proyectos. Puedes desactivarlas con cclay telemetry off o DO_NOT_TRACK=1.',
          },
          {
            q: '¿Qué navegadores admite CozyClay?',
            a: 'Solo navegadores basados en Chromium, según el desarrollador; su página de comparación indica que Safari y Firefox no son compatibles. La vía npx además requiere Node.js 22.19 o posterior.',
          },
          {
            q: '¿CozyClay necesita GPU?',
            a: 'No, según el README: no hacen falta GPU, Python ni descarga de modelos. No se publican cifras de RAM ni de disco, y PromptQuorum no midió el uso de recursos.',
          },
          {
            q: '¿Qué puede exportar CozyClay?',
            a: 'Según el README, un paquete de keyframes (primer y último fotograma, clip greybox, cámara, prompt), mp4, pases de profundidad y normales, una hoja de contactos y una lista de cortes OTIO. Un proyecto de tipo Storyboard genera en su lugar viñetas con leyenda, un animatic y una hoja de contactos.',
          },
          {
            q: '¿Con qué proveedores de modelos funciona el panel de agente?',
            a: 'Según el README, inicias sesión con ChatGPT o usas tu propia clave de Anthropic, OpenAI, Gemini, MiniMax, OpenRouter o CLIProxyAPI. El panel necesita conexión de red, y las solicitudes van al proveedor que conectes, bajo las condiciones de ese proveedor.',
          },
          {
            q: '¿Qué licencia usa CozyClay?',
            a: 'AGPL-3.0-or-later, según LICENSING.md. Las versiones modificadas que se ofrecen a través de una red deben ofrecer su código fuente; consulta a tu equipo legal si tu organización restringe el software AGPL.',
          },
          {
            q: '¿PromptQuorum ha probado CozyClay?',
            a: 'No. Esta reseña se basa en el sitio web del desarrollador, el repositorio de GitHub, las páginas de versiones y la página de privacidad. La calidad del movimiento, la calidad de las exportaciones y lo bien que los modelos de vídeo siguen los planos exportados no están verificados.',
          },
          {
            q: '¿CozyClay se desarrolla activamente?',
            a: 'La versión 3.2.2 salió el 7 de noviembre de 2026 y el repositorio recibió un commit el 15 de noviembre de 2026. El repositorio se creó en julio de 2026, y la página del desarrollador avisa de que puede haber asperezas.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**CozyClay merece un vistazo si usas modelos de vídeo con IA y quieres fijar la puesta en escena y la cámara antes de pagar una generación.**',
          'Sobre el papel cubre mucho para una herramienta gratuita: un escenario 3D, un compilador de movimiento con comprobaciones de QA, planos y raíles de cámara, paquetes de exportación para modelos de vídeo, un panel de agente, un servidor MCP e instaladores para macOS y Windows. El desarrollo es activo, con la versión 3.2.2 el 7 de noviembre de 2026 y un commit el 15 de noviembre de 2026.',
          'Las contrapartidas son reales. Según el desarrollador, el proyecto es joven, solo funciona en navegadores Chromium y produce una salida plana tipo arcilla a propósito; además depende de un modelo de vídeo externo para el resultado final. Las estadísticas, que el desarrollador describe como anónimas, vienen activadas de forma predeterminada, y no se indica la empresa ni el país detrás del proyecto. PromptQuorum no ha probado la app: pruébala con una escena pequeña y revisa la exportación en tu modelo de vídeo antes de depender de ella.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio de CozyClay](https://cozyclay.org) — flujo de trabajo, lista de exportaciones, opciones de instalación, fragmento MCP y requisitos, consultado el 17 de noviembre de 2026.',
          '[Página de privacidad de CozyClay](https://cozyclay.org/privacy/) — estadísticas, desactivación, datos no recogidos, demo alojada, consultado el 17 de noviembre de 2026.',
          '[Software de previs comparado](https://cozyclay.org/previs-software/) — comparación de herramientas de previs por el desarrollador y límites indicados, consultado el 17 de noviembre de 2026.',
          '[Repositorio de CozyClay en GitHub](https://github.com/HaD0Yun/CozyClay) — repositorio, licencia, fecha de creación y último push, consultado el 17 de noviembre de 2026.',
          '[README](https://github.com/HaD0Yun/CozyClay#readme) — inicio rápido, funciones, accesos de agente y configuración MCP, consultado el 17 de noviembre de 2026.',
          '[LICENSING.md](https://github.com/HaD0Yun/CozyClay/blob/main/LICENSING.md) — AGPL-3.0-or-later y el historial anterior GPL-3.0-or-later, consultado el 17 de noviembre de 2026.',
          '[Divulgación de estadísticas y privacidad](https://github.com/HaD0Yun/CozyClay/blob/main/docs/privacy.md) — lista completa de eventos recogidos, consultado el 17 de noviembre de 2026.',
          '[README de MCP](https://github.com/HaD0Yun/CozyClay/blob/main/mcp/README.md) — modos MCP con y sin editor, consultado el 17 de noviembre de 2026.',
          '[Versión v3.2.2](https://github.com/HaD0Yun/CozyClay/releases/tag/v3.2.2) — última versión y su fecha, consultado el 17 de noviembre de 2026.',
          '[Versión del instalador de Windows](https://github.com/HaD0Yun/CozyClay/releases/tag/windows-installer) — CozyClay-Setup.exe y la nota sobre la falta de firma, consultado el 17 de noviembre de 2026.',
          '[Versión de macOS](https://github.com/HaD0Yun/cozyclay-releases/releases/tag/macos-1.0.3) — CozyClay.dmg, consultado el 17 de noviembre de 2026.',
          '[Paquete npm](https://www.npmjs.com/package/cozyclay) — última versión publicada, consultado el 17 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de OpenMontage](/es/power-local-llm/openmontage-review) — producción de vídeo agéntica de código abierto: tu asistente de código con IA investiga, escribe guiones, genera y renderiza vídeos terminados.',
          '[Reseña de web-search-mcp](/es/power-local-llm/web-search-mcp-review) — acceso a búsqueda web para LLM locales mediante un servidor MCP alojado en local.',
          '[Reseña de LocalMCP](/es/power-local-llm/localmcp-review) — app de la Mac App Store que ejecuta un servidor MCP local para que tu cliente de IA busque en Mail, Calendario, Contactos, Recordatorios y Notas.',
          '[Herramientas de imagen y vídeo comparadas](/es/power-local-llm/local-llm-images-video-compared) — la comparación de categoría para herramientas de imagen y vídeo.',
          '[Directorio de software de LLM locales](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-17',
    theme: 'Image & Video Generation',
    heroImage: '/images/cozyclay-review-hero-fr.webp',
    title: 'Avis sur CozyClay : studio de previs gratuit dans le navigateur pour la vidéo IA, avec serveur MCP',
    seoTitle: 'Avis CozyClay : previs gratuit pour vidéo IA, MCP',
    intro:
      'CozyClay est un studio de previs 3D gratuit et open source qui fonctionne dans un onglet de navigateur. Vous bloquez une scène, placez les personnages, réglez la caméra et les coupes, puis exportez le plan sous forme d\'image de départ, de clip de référence et de prompt pour un modèle vidéo IA. Cet avis s\'appuie sur le site de l\'éditeur, le dépôt GitHub, ses pages de versions et sa page de confidentialité, consultés le 17 novembre 2026. PromptQuorum n\'a pas testé l\'application en pratique.',
    metaDescription:
      'CozyClay est un studio de previs 3D gratuit et open source pour navigateur qui exporte des plans vers des modèles vidéo IA, avec serveur MCP.',
    twitterDescription:
      'CozyClay bloque des scènes en 3D dans votre navigateur et exporte des plans pour modèles vidéo IA. Gratuit, AGPL, avec serveur MCP pour Claude et Cursor.',
    audience:
      'Créateurs vidéo utilisant des modèles vidéo IA, développeurs qui pilotent des outils via MCP et équipes qui évaluent un logiciel de previs gratuit',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'CozyClay',
    targetKeywords: [
      'avis CozyClay',
      'CozyClay MCP',
      'logiciel de previs gratuit',
      'previs 3D navigateur',
      'greybox vers vidéo IA',
      'installer CozyClay',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**CozyClay est un studio de previs 3D gratuit et open source (AGPL) qui fonctionne dans un navigateur Chromium et prépare des plans pour des modèles vidéo IA.** Il se lance depuis un installateur macOS ou Windows ou avec une seule commande npx, et inclut un serveur MCP pour que des assistants comme Claude Code ou Cursor modifient la scène. Il ne génère pas lui-même la vidéo finale, et PromptQuorum ne l\'a pas testé.',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce que CozyClay et à qui s\'adresse-t-il ?',
        answer:
          'CozyClay est un studio 3D dans le navigateur pour préparer un plan vidéo avant de payer un modèle vidéo IA pour le générer. Il convient à ceux qui veulent maîtriser la mise en scène, la caméra et le rythme, et qui acceptent d\'utiliser un projet open source récent.',
        bullets: [
          'Fonctionne dans un navigateur Chromium ; .dmg macOS, installateur Windows ou npx cozyclay avec Node.js 22.19+.',
          'Prix : gratuit ; licence AGPL-3.0-or-later.',
          'Exporte une image de départ, un clip greybox, les données de caméra et le prompt, ainsi que mp4, passes de profondeur et de normales, une planche contact et une liste de coupes OTIO.',
          'Un serveur MCP et un panneau d\'agent permettent à des assistants de modifier la scène en direct.',
          'Les statistiques d\'usage, que l\'éditeur décrit comme anonymes, sont activées par défaut et peuvent être désactivées.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Présentation', anchor: 'overview' },
      { label: 'Comment l\'obtenir', anchor: 'get-it' },
      { label: 'Configuration requise', anchor: 'requirements' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Confidentialité et flux de données', anchor: 'privacy' },
      { label: 'Pour qui', anchor: 'who-should-use' },
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
            text: 'CozyClay permet de bloquer une scène 3D, de placer des personnages et de régler des mouvements de caméra dans le navigateur, puis d\'exporter le plan sous forme d\'image, de clip de référence et de prompt pour un modèle vidéo IA.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-le comme une scène de répétition greybox gratuite pour la vidéo IA : vous décidez où se tient chacun et où va la caméra avant de payer une génération. L\'application ne produit pas la vidéo finale ; c\'est un modèle vidéo externe qui s\'en charge.',
          },
        ],
        items: [
          'Gratuit et open source sous AGPL-3.0-or-later ; le site de l\'éditeur ne mentionne aucune offre payante.',
          'Fonctionne dans un navigateur Chromium. macOS dispose d\'un .dmg, Windows d\'un installateur .exe, et toutes les plateformes peuvent lancer npx cozyclay avec Node.js 22.19 ou plus récent.',
          'Un serveur MCP (npx -y cozyclay mcp) permet à Claude Desktop, Claude Code, Cursor et d\'autres clients MCP de modifier la scène.',
          'Les statistiques d\'usage, que l\'éditeur décrit comme anonymes, sont activées par défaut ; désactivation avec cclay telemetry off ou DO_NOT_TRACK=1.',
          'PromptQuorum n\'a pas testé l\'application. Le projet est récent (dépôt créé en juillet 2026) et la page de l\'éditeur annonce elle-même des aspérités.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La vidéo elle-même vient d\'un modèle vidéo IA externe que vous choisissez et payez séparément. CozyClay prépare l\'entrée ; PromptQuorum n\'a pas vérifié dans quelle mesure un modèle la respecte.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Présentation',
        content: [
          '**CozyClay est un studio de « previs » 3D dans le navigateur : vous préparez d\'abord un plan en 3D, puis un modèle vidéo IA le rend.**',
          'Le projet est réalisé par Doyun (utilisateur GitHub HaD0Yun) chez NomaDamas et publié sous AGPL-3.0-or-later. La version 3.2.2 est sortie le 7 novembre 2026 et le dépôt a reçu un commit le 15 novembre 2026 : le développement se poursuit et aucun avertissement de projet abandonné ne s\'applique. Le dépôt a été créé en juillet 2026.',
          'L\'éditeur décrit un flux en quatre étapes. Scène : construire le décor à partir de primitives et ajouter des personnages rigués ou des silhouettes en capsule. Mouvement : décrire l\'action, un agent rédige une spécification de mouvement et un compilateur déterministe dans le navigateur calcule chaque image, avec des contrôles de collisions, de glissement des pieds, de portée et de contact des mains. Prise de vue : placer les plans sur une timeline, tracer des rails de travelling et regarder à travers l\'objectif. Export : confier le résultat à un modèle vidéo.',
          'Le README liste ces exports : un pack d\'images clés (première et dernière image, clip greybox, caméra, prompt), mp4, passes de profondeur et de normales, une planche contact et une liste de coupes OTIO. Un projet Storyboard produit à la place des vignettes légendées, un animatic et une planche contact. Chaque modification, y compris celles de l\'agent, correspond à une seule étape d\'annulation.',
          'Ces descriptions sont des déclarations de l\'éditeur. PromptQuorum n\'a pas exécuté l\'application et n\'a vérifié ni la qualité des mouvements, ni celle des exports, ni la façon dont les modèles vidéo IA suivent les plans exportés.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Comment l\'obtenir',
        content: [
          '**Vous pouvez utiliser CozyClay dans le navigateur, l\'installer depuis un téléchargement macOS ou Windows, ou le lancer avec une seule commande npx.**',
          'Le site de l\'éditeur propose CozyClay.dmg pour macOS (macOS 12 ou plus récent) et CozyClay-Setup.exe pour Windows. Le premier lancement télécharge CozyClay et peut prendre quelques minutes. L\'installateur Windows n\'est pas signé : Windows affiche « Windows a protégé votre ordinateur », choisissez Informations complémentaires, puis Exécuter quand même. Le studio s\'ouvre dans le navigateur à une adresse locale (127.0.0.1:5180/app/ avec npx). N\'exécutez un installateur que si vous faites confiance à sa source ; PromptQuorum n\'a ni analysé ni exécuté le fichier.',
        ],
        columns: ['Plateforme', 'Comment l\'obtenir'],
        rows: [
          { 'Plateforme': '[macOS](https://github.com/HaD0Yun/cozyclay-releases/releases/latest/download/CozyClay.dmg)', 'Comment l\'obtenir': 'Télécharger CozyClay.dmg (macOS 12+)' },
          { 'Plateforme': '[Windows](https://github.com/HaD0Yun/CozyClay/releases/download/windows-installer/CozyClay-Setup.exe)', 'Comment l\'obtenir': 'Télécharger CozyClay-Setup.exe (non signé)' },
          { 'Plateforme': '[Linux / tout système](https://github.com/HaD0Yun/CozyClay#readme)', 'Comment l\'obtenir': 'Lancer npx cozyclay (Node.js 22.19+, Chromium)' },
          { 'Plateforme': '[Bac à sable navigateur](https://cozyclay.org/#try)', 'Comment l\'obtenir': 'Essayer le studio dans un onglet, sans installation' },
        ],
        note: 'Les sources ne disent pas s\'il existe un installateur Linux ; le README décrit la voie npx. Le bac à sable dans le navigateur est une copie distincte du studio qui, selon la page de confidentialité, ne lit ni n\'écrit vos scènes enregistrées.',
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise',
        content: [
          '**CozyClay demande un navigateur basé sur Chromium et, pour la voie npx, Node.js 22.19 ou plus récent ; ni GPU, ni Python, ni téléchargement de modèle.**',
          'Ces exigences viennent du README. La page de comparaison de l\'éditeur indique que Safari et Firefox ne sont pas pris en charge. Aucun chiffre de RAM ou de disque n\'est publié, et PromptQuorum n\'a pas mesuré la consommation de ressources.',
        ],
        columns: ['Élément', 'Chiffre indiqué'],
        rows: [
          { 'Élément': 'Navigateur', 'Chiffre indiqué': 'Basé sur Chromium (ni Safari ni Firefox)' },
          { 'Élément': 'Node.js', 'Chiffre indiqué': '22.19 ou plus récent (voie npx)' },
          { 'Élément': 'GPU', 'Chiffre indiqué': 'Non requis (README)' },
          { 'Élément': 'Python / modèle à télécharger', 'Chiffre indiqué': 'Non requis (README)' },
          { 'Élément': 'Installateur macOS', 'Chiffre indiqué': 'macOS 12 ou plus récent (site)' },
          { 'Élément': 'RAM / disque', 'Chiffre indiqué': 'Non indiqué' },
          { 'Élément': 'Réseau', 'Chiffre indiqué': 'Premier lancement : téléchargement ; agent : requis' },
        ],
        note: 'Les fonctions d\'agent demandent un fournisseur de modèle (une connexion ChatGPT ou votre propre clé API) et donc un accès réseau. Le modèle vidéo IA qui rend le clip final est séparé.',
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**Le cœur de CozyClay est un éditeur 3D pour mettre un plan en scène, avec trois façons de le piloter par IA.** Tous les points ci-dessous sont des déclarations de l\'éditeur tirées du site et du README.',
        ],
        items: [
          'Construire le décor à partir de primitives et ajouter des personnages rigués, ou des silhouettes en capsule quand personne n\'a besoin de bouger un membre.',
          'Poser et animer via une spécification de mouvement qu\'un compilateur déterministe dans le navigateur calcule image par image, avec des contrôles qualité de collisions, de glissement des pieds, de portée et de contact des mains.',
          'Placer les plans sur une timeline, tracer des rails de travelling et regarder à travers l\'objectif ; chaque plan connaît les limites du modèle vidéo visé.',
          'Exporter un pack d\'images clés (première et dernière image, clip greybox, caméra, prompt), mp4, passes de profondeur et de normales, une planche contact et une liste de coupes OTIO.',
          'Un type de projet Storyboard avec vignettes légendées, animatic et planche contact.',
          'Un panneau d\'agent (Cmd/Ctrl+B) où l\'on se connecte avec ChatGPT ou utilise sa propre clé pour Anthropic, OpenAI, Gemini, MiniMax, OpenRouter ou CLIProxyAPI.',
          'Un serveur MCP (npx -y cozyclay mcp) pour Claude Desktop, Claude Code, Cursor ou tout client MCP. Selon le README MCP, il fonctionne en direct avec l\'éditeur ouvert, ou en mémoire sans navigateur pour les outils de scène, de caméra, de prompt et de fichier de projet.',
          'Une interface en terminal (cclay live status --wait) pour les agents de code qui pilotent un studio en cours d\'exécution avec du JSON en entrée et en sortie ; chaque modification correspond à une étape d\'annulation.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**CozyClay collecte par défaut des statistiques d\'usage que l\'éditeur décrit comme anonymes, affirme ne jamais collecter le contenu des projets ni le texte des prompts, et permet de désactiver ces statistiques.**',
          'Selon la page de confidentialité (en vigueur depuis le 25 octobre 2026), le site utilise PostHog (US Cloud) et Cloudflare Web Analytics, sans cookies ni enregistrement de session. Le paquet npm stocke un identifiant d\'installation aléatoire dans un fichier d\'état local et envoie des événements regroupés comme le premier lancement, la durée de session et le nombre d\'actions. Le texte des prompts, les noms d\'actifs et de fichiers, le contenu des projets et les chemins locaux ne sont pas collectés, selon la page.',
          'Vous pouvez refuser avec cclay telemetry off, la variable d\'environnement COZYCLAY_TELEMETRY=0, DO_NOT_TRACK=1 ou l\'interrupteur de la barre supérieure du studio. Les copies du code source, les forks, les serveurs de développement, la CI et les tests n\'envoient rien, selon l\'éditeur.',
          'Les fonctions d\'agent et de modèle envoient vos requêtes au fournisseur que vous connectez, selon ses conditions. La page de confidentialité décrit aussi une démo de mouvement hébergée avec connexion Google, qui conserve prompts et résultats jusqu\'à 30 jours ; elle indique que cette démo n\'est pas ouverte au public pour le moment. La page de confidentialité et le README ne nomment ni société, ni adresse, ni droit applicable.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        content: [
          '**CozyClay convient à ceux qui veulent préparer un plan vidéo IA avant de payer pour le générer.**',
        ],
        items: [
          'Les créateurs vidéo qui veulent la même mise en place, le même rythme et la même caméra à chaque prise d\'un modèle vidéo IA.',
          'Les développeurs et utilisateurs d\'agents qui veulent qu\'un assistant modifie une scène 3D via MCP ou une interface en terminal.',
          'Ceux qui veulent un outil de previs gratuit et open source qui, selon le README, fonctionne dans un onglet de navigateur sans GPU.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        content: [
          '**CozyClay convient mal dans certains cas, et plusieurs détails restent non vérifiés.**',
        ],
        items: [
          'Ne convient pas : à qui a besoin d\'un rendu photoréaliste ou d\'un travail de lumière. L\'éditeur indique que la sortie est volontairement une passe d\'argile à plat.',
          'Ne convient pas : aux utilisateurs de Safari ou de Firefox, car l\'éditeur indique que seuls les navigateurs Chromium sont pris en charge.',
          'Ne convient pas : à qui veut une vidéo terminée depuis un seul outil. Un modèle vidéo IA externe rend le clip final et a son propre coût.',
          'Ne convient pas : aux organisations qui ne peuvent pas utiliser de logiciel sous licence AGPL. Selon LICENSING.md, les versions modifiées proposées via un réseau doivent fournir leur code source.',
          'Non vérifié : la qualité des mouvements, les contrôles de collision et la qualité des exports. PromptQuorum n\'a pas exécuté l\'application.',
          'Non vérifié : quels modèles vidéo suivent bien les plans exportés. Le site de l\'éditeur montre des exemples Seedance 2.5 et indique que les exports sont conçus pour Seedance, Kling et Veo ; aucun test indépendant n\'a été trouvé.',
          'Non vérifié : l\'existence d\'un installateur Linux et la version que lancent les installateurs. Les notes de version Windows indiquent que l\'installateur démarre toujours la dernière version de CozyClay.',
          'Non vérifié : la société ou le pays derrière le projet. Les sources ne nomment que l\'éditeur, Doyun, et l\'organisation NomaDamas.',
          'Non vérifié : avis indépendants ou chiffres d\'utilisateurs. Aucun n\'a été trouvé, et la page de comparaison de l\'éditeur n\'a pas été considérée comme indépendante.',
          'Non vérifié : la stabilité. Le dépôt a été créé en juillet 2026, et la page de l\'éditeur annonce des aspérités et un journal des modifications qui évolue vite.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'CozyClay face aux alternatives',
        itemHeadings: true,
        content: [
          '**CozyClay est un outil de previs gratuit et open source pour navigateur ; PromptQuorum ne l\'a pas comparé en pratique aux alternatives.** Les alternatives ci-dessous viennent de la page de comparaison de l\'éditeur ; les descriptions reflètent donc son point de vue, pas un test indépendant.',
        ],
        columns: ['Outil', 'Noté dans les sources'],
        rows: [
          { 'Outil': 'CozyClay', 'Noté dans les sources': 'Gratuit ; AGPL-3.0 ; navigateur ; export pour modèles vidéo' },
          { 'Outil': 'Blender', 'Noté dans les sources': 'Gratuit ; GPL ; bureau ; rendu manuel d\'une passe d\'argile' },
          { 'Outil': 'Unreal Engine', 'Noté dans les sources': 'Gratuit pour la previs ; code source disponible ; installation lourde' },
          { 'Outil': 'Previs Pro', 'Noté dans les sources': 'Payant ; app iPad, iPhone et Mac' },
          { 'Outil': 'FrameForge', 'Noté dans les sources': 'Payant ; bureau ; équipes storyboard et previs' },
          { 'Outil': 'Cine Tracer', 'Noté dans les sources': 'Payant ; bureau sur Steam ; éclairage en temps réel' },
          { 'Outil': 'Higgsfield 3D Jutsu', 'Noté dans les sources': 'Abonnement ; navigateur ; alimente les générateurs de Higgsfield' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'CozyClay est-il gratuit ?',
            a: 'Oui. CozyClay est gratuit et open source sous AGPL-3.0-or-later, et le site de l\'éditeur indique un prix de 0 sans offre payante. Le modèle vidéo IA auquel vous confiez les plans est séparé et peut facturer chaque génération, et le panneau d\'agent demande un compte ou une clé chez un fournisseur de modèle.',
          },
          {
            q: 'CozyClay génère-t-il lui-même la vidéo ?',
            a: 'Non. CozyClay prépare le plan : une image de départ, un clip de référence greybox, les données de caméra et un prompt. Un modèle vidéo IA externe, comme Seedance 2.5 dans les démos de l\'éditeur, rend la vidéo finale.',
          },
          {
            q: 'Comment installer CozyClay ?',
            a: 'Téléchargez CozyClay.dmg pour macOS ou CozyClay-Setup.exe pour Windows sur le site de l\'éditeur, ou lancez npx cozyclay avec Node.js 22.19 ou plus récent et un navigateur Chromium. L\'installateur Windows n\'est pas signé, donc Windows affiche un avertissement.',
          },
          {
            q: 'Claude ou Cursor peuvent-ils piloter CozyClay ?',
            a: 'Oui, selon l\'éditeur. Ajoutez le serveur MCP avec la commande npx -y cozyclay mcp à Claude Desktop, Claude Code, Cursor ou un autre client MCP. Avec le studio ouvert, les appels d\'outils pilotent la vue visible ; sans lui, certains outils s\'exécutent en mémoire.',
          },
          {
            q: 'Quelles données CozyClay collecte-t-il ?',
            a: 'Par défaut, des statistiques d\'usage regroupées via PostHog, que l\'éditeur décrit comme anonymes, avec un identifiant d\'installation aléatoire ; l\'éditeur affirme ne jamais collecter de texte de prompt, de noms de fichiers ni de contenu de projet. Vous pouvez refuser avec cclay telemetry off ou DO_NOT_TRACK=1.',
          },
          {
            q: 'Quels navigateurs CozyClay prend-il en charge ?',
            a: 'Uniquement les navigateurs basés sur Chromium, selon le développeur ; sa page de comparaison indique que Safari et Firefox ne sont pas pris en charge. La voie npx exige aussi Node.js 22.19 ou une version plus récente.',
          },
          {
            q: 'CozyClay a-t-il besoin d\'un GPU ?',
            a: 'Non, d\'après le README : ni GPU, ni Python, ni téléchargement de modèle. Aucun chiffre de RAM ou de disque n\'est publié, et PromptQuorum n\'a pas mesuré la consommation de ressources.',
          },
          {
            q: 'Que peut exporter CozyClay ?',
            a: 'D\'après le README : un pack de keyframes (première et dernière image, clip greybox, caméra, prompt), du mp4, des passes de profondeur et de normales, une planche contact et une liste de coupes OTIO. Un projet de type Storyboard produit à la place des vignettes légendées, un animatic et une planche contact.',
          },
          {
            q: 'Avec quels fournisseurs de modèles le panneau d\'agent fonctionne-t-il ?',
            a: 'D\'après le README, vous vous connectez avec ChatGPT ou utilisez votre propre clé pour Anthropic, OpenAI, Gemini, MiniMax, OpenRouter ou CLIProxyAPI. Le panneau nécessite un accès réseau, et les requêtes partent chez le fournisseur que vous connectez, selon ses conditions.',
          },
          {
            q: 'Quelle licence CozyClay utilise-t-il ?',
            a: 'AGPL-3.0-or-later, selon LICENSING.md. Les versions modifiées proposées via un réseau doivent fournir leur code source ; demandez conseil à votre service juridique si votre organisation restreint les logiciels AGPL.',
          },
          {
            q: 'PromptQuorum a-t-il testé CozyClay ?',
            a: 'Non. Cette fiche s\'appuie sur le site du développeur, le dépôt GitHub, les pages de versions et la page de confidentialité. La qualité du mouvement, la qualité des exports et la façon dont les modèles vidéo suivent les plans exportés ne sont pas vérifiées.',
          },
          {
            q: 'CozyClay est-il activement développé ?',
            a: 'La version 3.2.2 est sortie le 7 novembre 2026 et le dépôt a reçu un commit le 15 novembre 2026. Le dépôt a été créé en juillet 2026, et la page du développeur annonce des aspérités.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**CozyClay mérite un coup d\'œil si vous utilisez des modèles vidéo IA et voulez fixer la mise en scène et la caméra avant de payer une génération.**',
          'Sur le papier, il couvre beaucoup pour un outil gratuit : une scène 3D, un compilateur de mouvement avec contrôles qualité, des plans et des rails de caméra, des packs d\'export pour modèles vidéo, un panneau d\'agent, un serveur MCP et des installateurs macOS et Windows. Le développement est actif, avec la version 3.2.2 le 7 novembre 2026 et un commit le 15 novembre 2026.',
          'Les compromis sont réels. Selon l\'éditeur, le projet est récent, ne fonctionne que dans les navigateurs Chromium et produit volontairement une sortie plate de type argile ; il dépend aussi d\'un modèle vidéo externe pour le résultat final. Les statistiques, que l\'éditeur décrit comme anonymes, sont activées par défaut, et la société ou le pays derrière le projet n\'est pas indiqué. PromptQuorum n\'a pas testé l\'application : essayez-la sur une petite scène et vérifiez l\'export dans votre modèle vidéo avant de vous y fier.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de CozyClay](https://cozyclay.org) — flux de travail, liste des exports, modes d\'installation, extrait MCP et prérequis, consulté le 17 novembre 2026.',
          '[Page de confidentialité de CozyClay](https://cozyclay.org/privacy/) — statistiques, refus, données non collectées, démo hébergée, consulté le 17 novembre 2026.',
          '[Logiciels de previs comparés](https://cozyclay.org/previs-software/) — comparaison d\'outils de previs par l\'éditeur et limites indiquées, consulté le 17 novembre 2026.',
          '[Dépôt GitHub de CozyClay](https://github.com/HaD0Yun/CozyClay) — dépôt, licence, date de création et dernier push, consulté le 17 novembre 2026.',
          '[README](https://github.com/HaD0Yun/CozyClay#readme) — démarrage rapide, fonctionnalités, accès agent et configuration MCP, consulté le 17 novembre 2026.',
          '[LICENSING.md](https://github.com/HaD0Yun/CozyClay/blob/main/LICENSING.md) — AGPL-3.0-or-later et historique GPL-3.0-or-later antérieur, consulté le 17 novembre 2026.',
          '[Divulgation statistiques et confidentialité](https://github.com/HaD0Yun/CozyClay/blob/main/docs/privacy.md) — liste complète des événements collectés, consulté le 17 novembre 2026.',
          '[README MCP](https://github.com/HaD0Yun/CozyClay/blob/main/mcp/README.md) — modes MCP avec et sans éditeur, consulté le 17 novembre 2026.',
          '[Version v3.2.2](https://github.com/HaD0Yun/CozyClay/releases/tag/v3.2.2) — dernière version et sa date, consulté le 17 novembre 2026.',
          '[Version de l\'installateur Windows](https://github.com/HaD0Yun/CozyClay/releases/tag/windows-installer) — CozyClay-Setup.exe et la note sur l\'absence de signature, consulté le 17 novembre 2026.',
          '[Version macOS](https://github.com/HaD0Yun/cozyclay-releases/releases/tag/macos-1.0.3) — CozyClay.dmg, consulté le 17 novembre 2026.',
          '[Paquet npm](https://www.npmjs.com/package/cozyclay) — dernière version publiée, consulté le 17 novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Avis sur OpenMontage](/fr/power-local-llm/openmontage-review) — production vidéo agentique open source : votre assistant de code IA fait la recherche, le script, la génération et le rendu de vidéos finies.',
          '[Avis sur web-search-mcp](/fr/power-local-llm/web-search-mcp-review) — recherche web pour LLM locaux via un serveur MCP hébergé en local.',
          '[Avis sur LocalMCP](/fr/power-local-llm/localmcp-review) — app du Mac App Store qui exécute un serveur MCP local pour que votre client IA cherche dans Mail, Calendrier, Contacts, Rappels et Notes.',
          '[Outils image et vidéo comparés](/fr/power-local-llm/local-llm-images-video-compared) — la comparaison de catégorie pour les outils image et vidéo.',
          '[Répertoire des logiciels de LLM locaux](/fr/directory) — le catalogue complet des outils d\'IA locale.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-17',
    theme: 'Image & Video Generation',
    heroImage: '/images/cozyclay-review-hero-ja.webp',
    title: 'CozyClayレビュー：AI動画向けの無料ブラウザ版プリビズスタジオ、MCPサーバー付き',
    seoTitle: 'CozyClayレビュー：AI動画向けプリビズ、MCP対応',
    intro:
      'CozyClayは、ブラウザのタブで動く無料のオープンソース3Dプリビズスタジオです。シーンを組み、キャラクターにポーズを付け、カメラとカットを設定し、そのショットを最初のフレーム、参照クリップ、AI動画モデル向けのプロンプトとして書き出せます。このレビューは、開発者のサイト、GitHubリポジトリ、リリースページ、プライバシーページに基づき、2026年11月17日に確認しました。PromptQuorumはこのアプリを実際には試していません。',
    metaDescription:
      'CozyClayはブラウザで動く無料のオープンソース3Dプリビズスタジオ。AI動画モデル向けにショットを書き出し、MCPサーバーも備えます。導入、プライバシー、制限。',
    twitterDescription:
      'CozyClayはブラウザ上で3Dシーンを組み、AI動画モデル向けにショットを書き出します。無料、AGPL、ClaudeやCursor向けMCPサーバー付き。',
    audience:
      'AI動画モデルを使う動画クリエイター、MCPでツールを操作する開発者、無料のプリビズソフトを検討しているチーム',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'CozyClay',
    targetKeywords: [
      'CozyClay レビュー',
      'CozyClay MCP',
      '無料 プリビズ ソフト',
      'ブラウザ 3D プリビズ',
      'グレーボックス AI動画',
      'CozyClay インストール',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**CozyClayは、Chromiumブラウザで動き、AI動画モデル向けにショットを準備する無料のオープンソース（AGPL）3Dプリビズスタジオです。** macOSまたはWindowsのインストーラー、あるいはnpxコマンド1つで起動でき、Claude CodeやCursorなどのアシスタントがシーンを編集できるMCPサーバーも含まれます。最終的な動画自体は生成せず、PromptQuorumはテストしていません。',
    quickAnswerTop: {
      ja: {
        question: 'CozyClayとは何で、誰に向いていますか？',
        answer:
          'CozyClayは、AI動画モデルに生成の費用を払う前に動画のショットを計画するための、ブラウザ上の3Dスタジオです。演出、カメラ、タイミングを自分で決めたく、新しいオープンソースプロジェクトを使える方に向いています。',
        bullets: [
          'Chromiumブラウザで動作。macOS用.dmg、Windows用インストーラー、またはNode.js 22.19以降でnpx cozyclay。',
          '料金：無料。ライセンスはAGPL-3.0-or-later。',
          '最初のフレーム、グレーボックスクリップ、カメラデータ、プロンプトに加え、mp4、深度・法線パス、コンタクトシート、OTIOカットリストを書き出せます。',
          'MCPサーバーとエージェントパネルで、アシスタントがシーンをライブで編集できます。',
          '開発者が匿名と説明する利用統計は既定でオンですが、オフにできます。',
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
            text: 'CozyClayは、ブラウザ上で3Dシーンを組み、キャラクターにポーズを付け、カメラの動きを設定し、そのショットをフレーム、参照クリップ、AI動画モデル向けのプロンプトとして書き出せます。',
          },
          {
            type: 'plain-terms',
            text: 'AI動画のための無料のグレーボックス稽古場だと考えてください。生成にお金を払う前に、全員の立ち位置とカメラの動きを決められます。最終的な動画はこのアプリではなく、外部の動画モデルが作ります。',
          },
        ],
        items: [
          'AGPL-3.0-or-laterの無料オープンソース。開発者のサイトに有料プランの記載はありません。',
          'Chromiumブラウザで動作。macOSは.dmg、Windowsは.exeインストーラーがあり、どのプラットフォームでもNode.js 22.19以降でnpx cozyclayを実行できます。',
          'MCPサーバー（npx -y cozyclay mcp）により、Claude Desktop、Claude Code、Cursorなどの各種MCPクライアントがシーンを編集できます。',
          '開発者が匿名と説明する利用統計は既定でオン。cclay telemetry offまたはDO_NOT_TRACK=1でオフにできます。',
          'PromptQuorumはこのアプリを試していません。プロジェクトは新しく（リポジトリは2026年7月作成）、開発者自身のページも粗い部分があると述べています。',
        ],
        callouts: [
          {
            type: 'note',
            text: '動画そのものは、ユーザーが選んで別途料金を払う外部のAI動画モデルが作ります。CozyClayは入力を準備するだけで、各モデルがどこまで従うかはPromptQuorumでは確認していません。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**CozyClayは、ブラウザで動く3Dの「プリビズ」スタジオです。先に3Dでショットを計画し、あとからAI動画モデルにレンダリングさせます。**',
          'プロジェクトはNomaDamasのDoyun（GitHubユーザーHaD0Yun）が開発し、AGPL-3.0-or-laterで公開されています。バージョン3.2.2は2026年11月7日にリリースされ、リポジトリには2026年11月15日にコミットがあったため、開発は継続中で、放置プロジェクトの警告は該当しません。リポジトリは2026年7月に作成されました。',
          '開発者は4段階の流れを説明しています。ステージ：基本形状でセットを組み、リグ付きキャラクターまたはカプセル型の代役を追加します。モーション：動きを記述すると、エージェントがモーション仕様を書き、ブラウザ内の決定論的コンパイラが各フレームを生成し、衝突、足の滑り、リーチ、手の接触を検査します。撮影：ショットをタイムラインに置き、ドリーレールを描き、レンズ越しに確認します。書き出し：結果を動画モデルに渡します。',
          'READMEには次の書き出しが挙げられています：キーフレームパック（最初と最後のフレーム、グレーボックスクリップ、カメラ、プロンプト）、mp4、深度・法線パス、コンタクトシート、OTIOカットリスト。Storyboardプロジェクトでは代わりにキャプション付きパネル、アニマティック、コンタクトシートを作れます。エージェントによる変更を含め、すべての編集は元に戻す操作1回分です。',
          'これらは開発者の説明です。PromptQuorumはアプリを実行しておらず、モーションの品質、書き出しの品質、AI動画モデルが書き出したショットにどこまで従うかは確認していません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**CozyClayは、ブラウザで使う、macOSまたはWindows用ダウンロードからインストールする、npxコマンド1つで起動する、のいずれかで使えます。**',
          '開発者のサイトでは、macOS（macOS 12以降）向けにCozyClay.dmg、Windows向けにCozyClay-Setup.exeを提供しています。初回起動時にCozyClayをダウンロードするため、数分かかることがあります。Windows版インストーラーはコード署名されていないため、「Windows によってPCが保護されました」と表示されます。「詳細情報」を選び、「実行」を押してください。スタジオはブラウザでローカルアドレスに開きます（npxの場合は127.0.0.1:5180/app/）。ダウンロード元を信頼できる場合にのみインストーラーを実行してください。PromptQuorumはこのファイルをスキャンも実行もしていません。',
        ],
        columns: ['プラットフォーム', '入手方法'],
        rows: [
          { 'プラットフォーム': '[macOS](https://github.com/HaD0Yun/cozyclay-releases/releases/latest/download/CozyClay.dmg)', '入手方法': 'CozyClay.dmgをダウンロード（macOS 12以降）' },
          { 'プラットフォーム': '[Windows](https://github.com/HaD0Yun/CozyClay/releases/download/windows-installer/CozyClay-Setup.exe)', '入手方法': 'CozyClay-Setup.exeをダウンロード（署名なし）' },
          { 'プラットフォーム': '[Linux／任意のOS](https://github.com/HaD0Yun/CozyClay#readme)', '入手方法': 'npx cozyclayを実行（Node.js 22.19以降、Chromium）' },
          { 'プラットフォーム': '[ブラウザ内プレイグラウンド](https://cozyclay.org/#try)', '入手方法': 'インストール不要でタブ内で試せます' },
        ],
        note: 'Linux用インストーラーがあるかどうかは情報源に記載がなく、READMEではnpx経由の方法が説明されています。ブラウザ内プレイグラウンドはスタジオの別コピーで、プライバシーページによれば保存済みのシーンを読み書きしません。',
      },
      requirements: {
        id: 'requirements',
        title: '動作要件',
        content: [
          '**CozyClayにはChromiumベースのブラウザが必要で、npx経由ではNode.js 22.19以降も必要です。GPU、Python、モデルのダウンロードは不要です。**',
          'これらの要件はREADMEによるものです。開発者の比較ページには、SafariとFirefoxは非対応とあります。RAMやディスクの数値は公開されておらず、PromptQuorumもリソース使用量は測定していません。',
        ],
        columns: ['項目', '記載されている数値'],
        rows: [
          { '項目': 'ブラウザ', '記載されている数値': 'Chromiumベース（SafariとFirefoxは非対応）' },
          { '項目': 'Node.js', '記載されている数値': '22.19以降（npx経由）' },
          { '項目': 'GPU', '記載されている数値': '不要（README）' },
          { '項目': 'Python／モデルのダウンロード', '記載されている数値': '不要（README）' },
          { '項目': 'macOS用インストーラー', '記載されている数値': 'macOS 12以降（サイト）' },
          { '項目': 'RAM／ディスク', '記載されている数値': '記載なし' },
          { '項目': 'ネットワーク', '記載されている数値': '初回起動でダウンロード、エージェントも使用' },
        ],
        note: 'エージェント機能にはモデルプロバイダー（ChatGPTのサインインまたは自分のAPIキー）が必要で、ネットワーク接続も要ります。最終クリップをレンダリングするAI動画モデルは別です。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**CozyClayの中心は、ショットを演出するための3Dエディターと、AIで指示するための3つの方法です。** 以下はすべて、サイトとREADMEに基づく開発者の説明です。',
        ],
        items: [
          '基本形状でセットを組み、リグ付きキャラクター、または手足を動かす必要がない場合はカプセル型の代役を追加します。',
          '決定論的なブラウザ内コンパイラがフレームごとに生成するモーション仕様でポーズとアニメーションを付け、衝突、足の滑り、リーチ、手の接触をQA検査します。',
          'ショットをタイムラインに置き、ドリーレールを描き、レンズ越しに確認します。各ショットは対象とする動画モデルの制限を把握しています。',
          'キーフレームパック（最初と最後のフレーム、グレーボックスクリップ、カメラ、プロンプト）、mp4、深度・法線パス、コンタクトシート、OTIOカットリストを書き出せます。',
          'キャプション付きパネル、アニマティック、コンタクトシートを備えたStoryboardプロジェクト。',
          'エージェントパネル（Cmd/Ctrl+B）では、ChatGPTでサインインするか、Anthropic、OpenAI、Gemini、MiniMax、OpenRouter、CLIProxyAPIの自分のキーを使えます。',
          'Claude Desktop、Claude Code、Cursorなど任意のMCPクライアント向けのMCPサーバー（npx -y cozyclay mcp）。MCPのREADMEによれば、エディターを開いてライブで動作するか、ブラウザなしでメモリ上でシーン、カメラ、プロンプト、プロジェクトファイルのツールを使えます。',
          '実行中のスタジオをJSONの入出力で操作するコーディングエージェント向けのターミナルインターフェース（cclay live status --wait）。すべての変更は元に戻す操作1回分です。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**CozyClayは既定で（開発者が匿名と説明する）利用統計を収集し、プロジェクトの内容やプロンプトのテキストは収集しないとしており、統計はオフにできます。**',
          'プライバシーページ（2026年10月25日施行）によれば、サイトはPostHog（US Cloud）とCloudflare Web Analyticsを使い、Cookieもセッション録画も使いません。npmパッケージはランダムなインストール識別子をローカルの状態ファイルに保存し、初回起動、セッション時間、操作回数などの区分化されたイベントを送ります。同ページによれば、プロンプトのテキスト、アセット名やファイル名、プロジェクトの内容、ローカルパスは収集されません。',
          'cclay telemetry off、環境変数COZYCLAY_TELEMETRY=0、DO_NOT_TRACK=1、またはスタジオ上部バーのスイッチでオプトアウトできます。開発者によれば、ソースのチェックアウト、フォーク、開発サーバー、CI、テストは何も送信しません。',
          'エージェントとモデルの機能は、接続したプロバイダーの利用条件のもとで、リクエストをそのプロバイダーに送ります。プライバシーページには、Googleサインインを使い、プロンプトと結果を最長30日間保存するホスト型のモーションデモの説明もありますが、同ページはこのデモが現在は一般公開されていないとしています。プライバシーページとREADMEには、会社名、住所、準拠法の記載はありません。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**CozyClayは、AI動画のショットを生成にお金を払う前に計画したい人に向いています。**',
        ],
        items: [
          'AI動画モデルのどのテイクでも、同じ配置、タイミング、カメラにしたい動画クリエイター。',
          'アシスタントにMCPやターミナルインターフェース経由で3Dシーンを編集させたい開発者やエージェント利用者。',
          'READMEによればGPUなしでブラウザのタブで動く、無料のオープンソースのプリビズを求める人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        content: [
          '**CozyClayが合わない場合もあり、未確認の点もいくつか残っています。**',
        ],
        items: [
          '向いていない人：フォトリアルなレンダリングやライティング設計が必要な方。開発者は、出力は意図的にフラットなクレイパスだと述べています。',
          '向いていない人：SafariやFirefoxの利用者。開発者はChromiumブラウザのみ対応としています。',
          '向いていない人：1つのツールで完成動画まで作りたい方。最終クリップは外部のAI動画モデルがレンダリングし、別途費用がかかります。',
          '向いていない人：AGPLライセンスのソフトウェアを使えない組織。LICENSING.mdによれば、ネットワーク経由で提供する改変版はソースを提供する必要があります。',
          '未確認：モーションの品質、衝突検査、書き出しの品質。PromptQuorumはアプリを実行していません。',
          '未確認：書き出したショットにどの動画モデルがよく従うか。開発者のサイトにはSeedance 2.5の例があり、書き出しはSeedance、Kling、Veo向けに設計されているとありますが、独立した検証は見つかりませんでした。',
          '未確認：Linux用インストーラーの有無と、インストーラーが実行するバージョン。Windows版のリリースノートには、インストーラーは常に最新のCozyClayを起動するとあります。',
          '未確認：プロジェクトの背後にある会社や国。情報源に出てくるのは開発者のDoyunとNomaDamas組織のみです。',
          '未確認：独立したレビューやユーザー数。見つからず、開発者自身の比較ページは独立した情報源として扱っていません。',
          '未確認：安定性。リポジトリは2026年7月に作成され、開発者のページは粗い部分があり、変更履歴の更新が速いと述べています。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'CozyClayと代替ツールの比較',
        itemHeadings: true,
        content: [
          '**CozyClayはブラウザ向けの無料のオープンソースのプリビズツールで、PromptQuorumは代替ツールと実際に比較していません。** 以下の代替ツールは開発者自身の比較ページに基づくため、説明は開発者の見方であり、独立した検証ではありません。',
        ],
        columns: ['ツール', '情報源での記載'],
        rows: [
          { 'ツール': 'CozyClay', '情報源での記載': '無料、AGPL-3.0、ブラウザ、動画モデル向け書き出し' },
          { 'ツール': 'Blender', '情報源での記載': '無料、GPL、デスクトップ、クレイパスを手動でレンダリング' },
          { 'ツール': 'Unreal Engine', '情報源での記載': 'プリビズなら無料、ソース公開、インストールが大きい' },
          { 'ツール': 'Previs Pro', '情報源での記載': '有料、iPad・iPhone・Macアプリ' },
          { 'ツール': 'FrameForge', '情報源での記載': '有料、デスクトップ、絵コンテ・プリビズ部門向け' },
          { 'ツール': 'Cine Tracer', '情報源での記載': '有料、Steamのデスクトップ版、リアルタイムライティング' },
          { 'ツール': 'Higgsfield 3D Jutsu', '情報源での記載': 'サブスク、ブラウザ、Higgsfield独自の生成機能に連携' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'CozyClayは無料ですか？',
            a: 'はい。CozyClayはAGPL-3.0-or-laterの無料オープンソースで、開発者のサイトでは価格が0で、有料プランも記載されていません。ショットを渡すAI動画モデルは別で、生成ごとに料金がかかる場合があり、エージェントパネルにはモデルプロバイダーのアカウントまたはキーが必要です。',
          },
          {
            q: 'CozyClayは動画自体を生成しますか？',
            a: 'いいえ。CozyClayはショットを準備します。最初のフレーム、グレーボックスの参照クリップ、カメラデータ、プロンプトです。開発者のデモにあるSeedance 2.5のような外部のAI動画モデルが最終動画をレンダリングします。',
          },
          {
            q: 'CozyClayはどうインストールしますか？',
            a: '開発者のサイトからmacOS用のCozyClay.dmgまたはWindows用のCozyClay-Setup.exeをダウンロードするか、Node.js 22.19以降とChromiumブラウザでnpx cozyclayを実行します。Windows版インストーラーは署名されていないため、Windowsが警告を表示します。',
          },
          {
            q: 'ClaudeやCursorからCozyClayを操作できますか？',
            a: '開発者によれば可能です。コマンドnpx -y cozyclay mcpでMCPサーバーを、Claude Desktop、Claude Code、Cursorなどのクライアントに追加します。スタジオを開いていればツール呼び出しが表示中のビューポートを操作し、開いていない場合は一部のツールがメモリ上で動作します。',
          },
          {
            q: 'CozyClayはどんなデータを収集しますか？',
            a: '既定ではPostHog経由で、ランダムなインストール識別子を使った、開発者が匿名と説明する区分化された利用統計を収集します。プロンプトのテキスト、ファイル名、プロジェクトの内容は収集しないとしています。cclay telemetry offまたはDO_NOT_TRACK=1でオプトアウトできます。',
          },
          {
            q: 'CozyClayはどのブラウザに対応していますか？',
            a: '開発者によると、対応するのはChromiumベースのブラウザのみです。開発者の比較ページには、SafariとFirefoxは非対応と書かれています。npx経由で使う場合は、Node.js 22.19以降も必要です。',
          },
          {
            q: 'CozyClayにGPUは必要ですか？',
            a: 'READMEによると、GPU、Python、モデルのダウンロードはいずれも不要です。RAMやディスクの数値は公開されておらず、PromptQuorumはリソース使用量を測定していません。',
          },
          {
            q: 'CozyClayは何をエクスポートできますか？',
            a: 'READMEによると、キーフレームパック（最初と最後のフレーム、グレーボックスのクリップ、カメラ、プロンプト）、mp4、深度パスと法線パス、コンタクトシート、OTIOのカットリストです。Storyboardプロジェクトでは、代わりにキャプション付きパネル、アニマティック、コンタクトシートが出力されます。',
          },
          {
            q: 'エージェントパネルはどのモデルプロバイダーに対応していますか？',
            a: 'READMEによると、ChatGPTでサインインするか、Anthropic、OpenAI、Gemini、MiniMax、OpenRouter、CLIProxyAPIの自分のキーを使います。パネルにはネットワーク接続が必要で、リクエストは接続したプロバイダーに、そのプロバイダーの規約に従って送られます。',
          },
          {
            q: 'CozyClayのライセンスは何ですか？',
            a: 'LICENSING.mdによると、AGPL-3.0-or-laterです。ネットワーク経由で提供する改変版はソースコードの提供が必要です。組織でAGPLソフトウェアが制限されている場合は、法務部門に確認してください。',
          },
          {
            q: 'PromptQuorumはCozyClayを試しましたか？',
            a: 'いいえ。このレビューは、開発者のサイト、GitHubリポジトリ、リリースページ、プライバシーページに基づいています。モーションの品質、エクスポートの品質、動画モデルが書き出したショットにどこまで従うかは未確認です。',
          },
          {
            q: 'CozyClayは活発に開発されていますか？',
            a: 'バージョン3.2.2は2026年11月7日に公開され、リポジトリには2026年11月15日にコミットがありました。リポジトリは2026年7月に作成されており、開発者のページでも粗い部分があることが前提とされています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**AI動画モデルを使っていて、生成にお金を払う前に演出とカメラを固めたいなら、CozyClayは試す価値があります。**',
          '無料のツールとしては資料上かなり多くをカバーしています。3Dステージ、QA検査付きのモーションコンパイラ、ショットとカメラレール、動画モデル向けの書き出しパック、エージェントパネル、MCPサーバー、macOSとWindows用インストーラーです。開発は活発で、2026年11月7日にバージョン3.2.2、2026年11月15日にコミットがありました。',
          'トレードオフは現実的です。開発者によれば、プロジェクトは新しく、Chromiumブラウザでしか動かず、出力は意図的にフラットなクレイ調です。最終結果には外部の動画モデルも必要です。開発者が匿名と説明する統計は既定でオンで、背後にある会社や国も示されていません。PromptQuorumはアプリを試していないため、小さなシーンで試し、動画モデルで書き出しを確認してから頼るようにしてください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[CozyClay公式サイト](https://cozyclay.org) — ワークフロー、書き出し一覧、導入方法、MCPスニペット、動作要件、2026年11月17日確認。',
          '[CozyClayのプライバシーページ](https://cozyclay.org/privacy/) — 統計、オプトアウト、収集しないもの、ホスト型デモ、2026年11月17日確認。',
          '[プリビズソフトの比較](https://cozyclay.org/previs-software/) — 開発者によるプリビズツールの比較と明記された制限、2026年11月17日確認。',
          '[CozyClayのGitHubリポジトリ](https://github.com/HaD0Yun/CozyClay) — リポジトリ、ライセンス、作成日、最終プッシュ、2026年11月17日確認。',
          '[README](https://github.com/HaD0Yun/CozyClay#readme) — クイックスタート、機能、エージェント連携、MCP設定、2026年11月17日確認。',
          '[LICENSING.md](https://github.com/HaD0Yun/CozyClay/blob/main/LICENSING.md) — AGPL-3.0-or-laterと、以前のGPL-3.0-or-laterの経緯、2026年11月17日確認。',
          '[統計とプライバシーの開示](https://github.com/HaD0Yun/CozyClay/blob/main/docs/privacy.md) — 収集イベントの全一覧、2026年11月17日確認。',
          '[MCPのREADME](https://github.com/HaD0Yun/CozyClay/blob/main/mcp/README.md) — エディターあり・なしのMCPモード、2026年11月17日確認。',
          '[リリースv3.2.2](https://github.com/HaD0Yun/CozyClay/releases/tag/v3.2.2) — 最新リリースとその日付、2026年11月17日確認。',
          '[Windowsインストーラーのリリース](https://github.com/HaD0Yun/CozyClay/releases/tag/windows-installer) — CozyClay-Setup.exeとコード署名なしの注記、2026年11月17日確認。',
          '[macOS版リリース](https://github.com/HaD0Yun/cozyclay-releases/releases/tag/macos-1.0.3) — CozyClay.dmg、2026年11月17日確認。',
          '[npmパッケージ](https://www.npmjs.com/package/cozyclay) — 最新の公開バージョン、2026年11月17日確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[OpenMontageレビュー](/ja/power-local-llm/openmontage-review) — オープンソースのエージェント型動画制作。AIコーディングアシスタントが調査、脚本、生成、レンダリングまで行い完成動画を作ります。',
          '[web-search-mcpレビュー](/ja/power-local-llm/web-search-mcp-review) — ローカルでホストするMCPサーバーで、ローカルLLMにWeb検索を使えるようにします。',
          '[LocalMCPレビュー](/ja/power-local-llm/localmcp-review) — ローカルMCPサーバーを動かすMac App Storeアプリ。AIクライアントがメール、カレンダー、連絡先、リマインダー、メモを検索できます。',
          '[画像・動画ツールの比較](/ja/power-local-llm/local-llm-images-video-compared) — 画像・動画ツールのカテゴリ比較。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-17',
    theme: 'Image & Video Generation',
    heroImage: '/images/cozyclay-review-hero-pt.webp',
    title: 'Análise do CozyClay: estúdio de previs gratuito no navegador para vídeo com IA, com servidor MCP',
    seoTitle: 'Análise do CozyClay: previs no navegador, vídeo IA, MCP',
    intro:
      'O CozyClay é um estúdio de previs 3D gratuito e de código aberto que roda em uma aba do navegador. Você bloqueia uma cena, posiciona personagens, ajusta a câmera e os cortes e exporta o plano como primeiro quadro, clipe de referência e prompt para um modelo de vídeo com IA. Esta análise se baseia no site do desenvolvedor, no repositório do GitHub, nas páginas de versões e na página de privacidade, consultados em 17 de novembro de 2026. A PromptQuorum não testou o app na prática.',
    metaDescription:
      'O CozyClay é um estúdio de previs 3D gratuito e de código aberto para o navegador que exporta planos para modelos de vídeo com IA, com servidor MCP.',
    twitterDescription:
      'O CozyClay bloqueia cenas em 3D no navegador e exporta planos para modelos de vídeo com IA. Gratuito, AGPL, com servidor MCP para Claude e Cursor.',
    audience:
      'Criadores de vídeo que usam modelos de vídeo com IA, desenvolvedores que controlam ferramentas via MCP e equipes que avaliam software de previs gratuito',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'CozyClay',
    targetKeywords: [
      'análise CozyClay',
      'CozyClay MCP',
      'software de previs gratuito',
      'previs 3D no navegador',
      'greybox para vídeo com IA',
      'instalar CozyClay',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O CozyClay é um estúdio de previs 3D gratuito e de código aberto (AGPL) que roda em um navegador Chromium e prepara planos para modelos de vídeo com IA.** Ele inicia a partir de um instalador para macOS ou Windows ou com um único comando npx e inclui um servidor MCP para que assistentes como Claude Code ou Cursor editem a cena. Ele não gera o vídeo final por conta própria, e a PromptQuorum não o testou.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o CozyClay e para quem ele serve?',
        answer:
          'O CozyClay é um estúdio 3D no navegador para planejar um plano de vídeo antes de pagar um modelo de vídeo com IA para gerá-lo. Serve para quem quer controle sobre encenação, câmera e tempo e se sente à vontade com um projeto de código aberto jovem.',
        bullets: [
          'Roda em um navegador Chromium; .dmg para macOS, instalador para Windows ou npx cozyclay com Node.js 22.19+.',
          'Preço: gratuito; licença AGPL-3.0-or-later.',
          'Exporta primeiro quadro, clipe greybox, dados de câmera e prompt, além de mp4, passes de profundidade e de normais, folha de contatos e lista de cortes OTIO.',
          'Um servidor MCP e um painel de agente permitem que assistentes editem a cena ao vivo.',
          'As estatísticas de uso, que o desenvolvedor descreve como anônimas, vêm ativadas por padrão e podem ser desativadas.',
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
            text: 'O CozyClay permite bloquear uma cena 3D, posicionar personagens e definir movimentos de câmera no navegador e depois exportar o plano como quadro, clipe de referência e prompt para um modelo de vídeo com IA.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como um palco de ensaio greybox gratuito para vídeo com IA: você decide onde cada um fica e para onde a câmera vai antes de pagar por uma geração. O app não faz o vídeo final; quem faz é um modelo de vídeo externo.',
          },
        ],
        items: [
          'Gratuito e de código aberto sob AGPL-3.0-or-later; o site do desenvolvedor não lista nenhum plano pago.',
          'Roda em um navegador Chromium. O macOS tem um .dmg, o Windows um instalador .exe, e todas as plataformas podem executar npx cozyclay com Node.js 22.19 ou mais recente.',
          'Um servidor MCP (npx -y cozyclay mcp) permite que Claude Desktop, Claude Code, Cursor e outros clientes MCP editem a cena.',
          'As estatísticas de uso, que o desenvolvedor descreve como anônimas, vêm ativadas por padrão; para desativar, use cclay telemetry off ou DO_NOT_TRACK=1.',
          'A PromptQuorum não testou o app. O projeto é jovem (repositório criado em julho de 2026) e a própria página do desenvolvedor avisa que há arestas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O vídeo em si vem de um modelo de vídeo com IA externo que você escolhe e paga à parte. O CozyClay prepara a entrada; a PromptQuorum não verificou o quanto um modelo a segue.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O CozyClay é um estúdio de «previs» 3D no navegador: você planeja primeiro um plano em 3D e depois um modelo de vídeo com IA o renderiza.**',
          'O projeto é feito por Doyun (usuário do GitHub HaD0Yun) na NomaDamas e publicado sob AGPL-3.0-or-later. A versão 3.2.2 saiu em 7 de novembro de 2026 e o repositório recebeu um commit em 15 de novembro de 2026; portanto, o desenvolvimento continua e nenhum aviso de projeto abandonado se aplica. O repositório foi criado em julho de 2026.',
          'O desenvolvedor descreve um fluxo de quatro etapas. Palco: montar o cenário com primitivas e adicionar personagens com rig ou figuras de cápsula. Movimento: descrever a ação, um agente escreve uma especificação de movimento e um compilador determinístico no navegador calcula cada quadro, com verificações de colisões, deslizamento dos pés, alcance e contato das mãos. Filmagem: colocar planos em uma linha do tempo, desenhar trilhos de dolly e olhar pela lente. Exportação: entregar o resultado a um modelo de vídeo.',
          'O README lista estas exportações: um pacote de quadros-chave (primeiro e último quadro, clipe greybox, câmera, prompt), mp4, passes de profundidade e de normais, uma folha de contatos e uma lista de cortes OTIO. Um projeto Storyboard produz, em vez disso, painéis com legenda, um animatic e uma folha de contatos. Cada edição, inclusive cada mudança feita pelo agente, é um único passo de desfazer.',
          'Estas descrições são afirmações do desenvolvedor. A PromptQuorum não executou o app e não verificou a qualidade do movimento, a qualidade das exportações nem o quanto os modelos de vídeo com IA seguem os planos exportados.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**Você pode usar o CozyClay no navegador, instalá-lo a partir de um download para macOS ou Windows ou iniciá-lo com um único comando npx.**',
          'O site do desenvolvedor oferece CozyClay.dmg para macOS (macOS 12 ou mais recente) e CozyClay-Setup.exe para Windows. A primeira inicialização baixa o CozyClay e pode levar alguns minutos. O instalador do Windows não é assinado, então o Windows mostra «O Windows protegeu o computador»: escolha Mais informações e depois Executar assim mesmo. O estúdio abre no navegador em um endereço local (127.0.0.1:5180/app/ com npx). Execute um instalador somente se você confiar na origem do download; a PromptQuorum não analisou nem executou o arquivo.',
        ],
        columns: ['Plataforma', 'Como obter'],
        rows: [
          { 'Plataforma': '[macOS](https://github.com/HaD0Yun/cozyclay-releases/releases/latest/download/CozyClay.dmg)', 'Como obter': 'Baixar CozyClay.dmg (macOS 12+)' },
          { 'Plataforma': '[Windows](https://github.com/HaD0Yun/CozyClay/releases/download/windows-installer/CozyClay-Setup.exe)', 'Como obter': 'Baixar CozyClay-Setup.exe (sem assinatura)' },
          { 'Plataforma': '[Linux / qualquer sistema](https://github.com/HaD0Yun/CozyClay#readme)', 'Como obter': 'Executar npx cozyclay (Node.js 22.19+, Chromium)' },
          { 'Plataforma': '[Playground no navegador](https://cozyclay.org/#try)', 'Como obter': 'Testar o estúdio em uma aba, sem instalar' },
        ],
        note: 'As fontes não dizem se existe um instalador para Linux; o README documenta o caminho npx. O playground no navegador é uma cópia separada do estúdio que, segundo a página de privacidade, não lê nem grava suas cenas salvas.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**O CozyClay precisa de um navegador baseado em Chromium e, no caminho npx, de Node.js 22.19 ou mais recente; não precisa de GPU, Python nem download de modelo.**',
          'Esses requisitos vêm do README. A página de comparação do desenvolvedor diz que Safari e Firefox não são compatíveis. Nenhum valor de RAM ou de disco é publicado, e a PromptQuorum não mediu o uso de recursos.',
        ],
        columns: ['Item', 'Valor informado'],
        rows: [
          { 'Item': 'Navegador', 'Valor informado': 'Baseado em Chromium (sem Safari nem Firefox)' },
          { 'Item': 'Node.js', 'Valor informado': '22.19 ou mais recente (caminho npx)' },
          { 'Item': 'GPU', 'Valor informado': 'Não necessária (README)' },
          { 'Item': 'Python / download de modelo', 'Valor informado': 'Não necessários (README)' },
          { 'Item': 'Instalador do macOS', 'Valor informado': 'macOS 12 ou mais recente (site)' },
          { 'Item': 'RAM / disco', 'Valor informado': 'Não informado' },
          { 'Item': 'Rede', 'Valor informado': 'Primeira inicialização baixa o CozyClay; o agente usa' },
        ],
        note: 'Os recursos de agente precisam de um provedor de modelos (um login do ChatGPT ou sua própria chave de API) e, portanto, de acesso à rede. O modelo de vídeo com IA que renderiza o clipe final é separado.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O núcleo do CozyClay é um editor 3D para encenar um plano, com três formas de dirigi-lo com IA.** Todos os itens abaixo são afirmações do desenvolvedor, tiradas do site e do README.',
        ],
        items: [
          'Montar o cenário com primitivas e adicionar personagens com rig, ou figuras de cápsula quando ninguém precisa mover um membro.',
          'Posicionar e animar por meio de uma especificação de movimento que um compilador determinístico no navegador calcula quadro a quadro, com verificações de QA de colisões, deslizamento dos pés, alcance e contato das mãos.',
          'Colocar planos em uma linha do tempo, desenhar trilhos de dolly e olhar pela lente; cada plano conhece os limites do modelo de vídeo escolhido como alvo.',
          'Exportar um pacote de quadros-chave (primeiro e último quadro, clipe greybox, câmera, prompt), mp4, passes de profundidade e de normais, uma folha de contatos e uma lista de cortes OTIO.',
          'Um tipo de projeto Storyboard com painéis legendados, animatic e folha de contatos.',
          'Um painel de agente (Cmd/Ctrl+B) em que você entra com o ChatGPT ou usa sua própria chave da Anthropic, OpenAI, Gemini, MiniMax, OpenRouter ou CLIProxyAPI.',
          'Um servidor MCP (npx -y cozyclay mcp) para Claude Desktop, Claude Code, Cursor ou qualquer cliente MCP. Segundo o README do MCP, ele funciona ao vivo com o editor aberto, ou na memória, sem navegador, para as ferramentas de cena, câmera, prompt e arquivo de projeto.',
          'Uma interface de terminal (cclay live status --wait) para agentes de código que controlam um estúdio em execução com JSON de entrada e saída; cada mudança é um passo de desfazer.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**O CozyClay coleta por padrão estatísticas de uso que descreve como anônimas, afirma que nunca coleta conteúdo de projetos nem texto de prompts e permite desativar as estatísticas.**',
          'Segundo a página de privacidade (em vigor desde 25 de outubro de 2026), o site usa PostHog (US Cloud) e Cloudflare Web Analytics, sem cookies e sem gravação de sessão. O pacote npm guarda um identificador de instalação aleatório em um arquivo de estado local e envia eventos agrupados, como primeira inicialização, duração da sessão e número de ações. Segundo a página, não são coletados texto de prompts, nomes de ativos e arquivos, conteúdo de projetos nem caminhos locais.',
          'Você pode desativar com cclay telemetry off, a variável de ambiente COZYCLAY_TELEMETRY=0, DO_NOT_TRACK=1 ou o botão na barra superior do estúdio. Cópias do código-fonte, forks, servidores de desenvolvimento, CI e testes não enviam nada, segundo o desenvolvedor.',
          'Os recursos de agente e de modelo enviam suas solicitações ao provedor que você conectar, sob os termos desse provedor. A página de privacidade também descreve uma demo de movimento hospedada com login do Google que guarda prompts e resultados por até 30 dias; diz que essa demo não está aberta ao público no momento. A página de privacidade e o README não citam empresa, endereço nem legislação aplicável.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O CozyClay serve a quem quer planejar um plano de vídeo com IA antes de pagar para gerá-lo.**',
        ],
        items: [
          'Criadores de vídeo que querem o mesmo bloqueio, tempo e câmera em cada take de um modelo de vídeo com IA.',
          'Desenvolvedores e usuários de agentes que querem que um assistente edite uma cena 3D por MCP ou por uma interface de terminal.',
          'Quem quer previs gratuita e de código aberto que, segundo o README, rode em uma aba do navegador sem GPU.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        content: [
          '**O CozyClay serve mal em algumas situações, e vários detalhes continuam sem verificação.**',
        ],
        items: [
          'Não serve: para quem precisa de renderização fotorrealista ou design de iluminação. O desenvolvedor diz que a saída é um passe de argila plano de propósito.',
          'Não serve: para usuários de Safari ou Firefox, porque o desenvolvedor diz que só há suporte a navegadores Chromium.',
          'Não serve: para quem quer um vídeo pronto a partir de uma única ferramenta. Um modelo de vídeo com IA externo renderiza o clipe final e tem custo próprio.',
          'Não serve: para organizações que não podem usar software sob licença AGPL. Segundo o LICENSING.md, versões modificadas oferecidas por rede devem fornecer seu código-fonte.',
          'Não verificado: qualidade do movimento, verificações de colisão e qualidade das exportações. A PromptQuorum não executou o app.',
          'Não verificado: quais modelos de vídeo seguem bem os planos exportados. O site do desenvolvedor mostra exemplos com Seedance 2.5 e diz que as exportações foram pensadas para Seedance, Kling e Veo; nenhum teste independente foi encontrado.',
          'Não verificado: se existe um instalador para Linux e qual versão os instaladores executam. As notas de versão do Windows dizem que o instalador sempre inicia o CozyClay mais recente.',
          'Não verificado: a empresa ou o país por trás do projeto. As fontes citam apenas o desenvolvedor, Doyun, e a organização NomaDamas.',
          'Não verificado: análises independentes ou números de usuários. Nenhum foi encontrado, e a página de comparação do próprio desenvolvedor não foi tratada como independente.',
          'Não verificado: estabilidade. O repositório foi criado em julho de 2026, e a página do desenvolvedor avisa de arestas e de um changelog que muda rápido.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'CozyClay versus alternativas',
        itemHeadings: true,
        content: [
          '**O CozyClay é uma ferramenta de previs gratuita e de código aberto para o navegador; a PromptQuorum não a comparou na prática com as alternativas.** As alternativas abaixo vêm da página de comparação do próprio desenvolvedor, então as descrições são o ponto de vista dele, não um teste independente.',
        ],
        columns: ['Ferramenta', 'Registrado nas fontes'],
        rows: [
          { 'Ferramenta': 'CozyClay', 'Registrado nas fontes': 'Gratuito; AGPL-3.0; navegador; exporta para modelos de vídeo' },
          { 'Ferramenta': 'Blender', 'Registrado nas fontes': 'Gratuito; GPL; desktop; render manual de um passe de argila' },
          { 'Ferramenta': 'Unreal Engine', 'Registrado nas fontes': 'Gratuito para previs; código disponível; instalação grande' },
          { 'Ferramenta': 'Previs Pro', 'Registrado nas fontes': 'Pago; app para iPad, iPhone e Mac' },
          { 'Ferramenta': 'FrameForge', 'Registrado nas fontes': 'Pago; desktop; equipes de storyboard e previs' },
          { 'Ferramenta': 'Cine Tracer', 'Registrado nas fontes': 'Pago; desktop no Steam; iluminação em tempo real' },
          { 'Ferramenta': 'Higgsfield 3D Jutsu', 'Registrado nas fontes': 'Assinatura; navegador; alimenta os geradores da Higgsfield' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O CozyClay é gratuito?',
            a: 'Sim. O CozyClay é gratuito e de código aberto sob AGPL-3.0-or-later, e o site do desenvolvedor indica preço 0 sem plano pago. O modelo de vídeo com IA a que você entrega os planos é separado e pode cobrar por geração, e o painel de agente precisa de uma conta ou chave de um provedor de modelos.',
          },
          {
            q: 'O CozyClay gera o vídeo por conta própria?',
            a: 'Não. O CozyClay prepara o plano: um primeiro quadro, um clipe de referência greybox, dados de câmera e um prompt. Um modelo de vídeo com IA externo, como o Seedance 2.5 nas demos do desenvolvedor, renderiza o vídeo final.',
          },
          {
            q: 'Como instalo o CozyClay?',
            a: 'Baixe CozyClay.dmg para macOS ou CozyClay-Setup.exe para Windows no site do desenvolvedor, ou execute npx cozyclay com Node.js 22.19 ou mais recente e um navegador Chromium. O instalador do Windows não é assinado, então o Windows mostra um aviso.',
          },
          {
            q: 'Claude ou Cursor podem controlar o CozyClay?',
            a: 'Sim, segundo o desenvolvedor. Adicione o servidor MCP com o comando npx -y cozyclay mcp ao Claude Desktop, Claude Code, Cursor ou outro cliente MCP. Com o estúdio aberto, as chamadas de ferramenta controlam a viewport visível; sem ele, algumas ferramentas rodam na memória.',
          },
          {
            q: 'Que dados o CozyClay coleta?',
            a: 'Por padrão, estatísticas de uso agrupadas via PostHog que o desenvolvedor descreve como anônimas, com um identificador de instalação aleatório; afirma que nunca coleta texto de prompts, nomes de arquivos nem conteúdo de projetos. Você pode desativar com cclay telemetry off ou DO_NOT_TRACK=1.',
          },
          {
            q: 'Quais navegadores o CozyClay suporta?',
            a: 'Apenas navegadores baseados em Chromium, segundo o desenvolvedor; a página de comparação dele diz que Safari e Firefox não são suportados. O caminho via npx também exige Node.js 22.19 ou mais recente.',
          },
          {
            q: 'O CozyClay precisa de GPU?',
            a: 'Não, segundo o README: não são necessários GPU, Python nem download de modelo. Não há números de RAM ou disco publicados, e a PromptQuorum não mediu o uso de recursos.',
          },
          {
            q: 'O que o CozyClay pode exportar?',
            a: 'Segundo o README, um pacote de keyframes (primeiro e último quadro, clipe greybox, câmera, prompt), mp4, passes de profundidade e normais, uma folha de contatos e uma lista de cortes OTIO. Um projeto do tipo Storyboard gera, em vez disso, painéis com legenda, um animatic e uma folha de contatos.',
          },
          {
            q: 'Com quais provedores de modelos o painel de agente funciona?',
            a: 'Segundo o README, você entra com o ChatGPT ou usa sua própria chave da Anthropic, OpenAI, Gemini, MiniMax, OpenRouter ou CLIProxyAPI. O painel precisa de acesso à rede, e as solicitações vão para o provedor que você conectar, sob os termos dele.',
          },
          {
            q: 'Qual licença o CozyClay usa?',
            a: 'AGPL-3.0-or-later, conforme o LICENSING.md. Versões modificadas oferecidas por uma rede precisam fornecer o código-fonte; consulte seu jurídico se sua organização restringe software AGPL.',
          },
          {
            q: 'A PromptQuorum testou o CozyClay?',
            a: 'Não. Esta análise se baseia no site do desenvolvedor, no repositório do GitHub, nas páginas de versões e na página de privacidade. A qualidade do movimento, a qualidade das exportações e o quanto os modelos de vídeo seguem os planos exportados não foram verificados.',
          },
          {
            q: 'O CozyClay está em desenvolvimento ativo?',
            a: 'A versão 3.2.2 saiu em 7 de novembro de 2026 e o repositório recebeu um commit em 15 de novembro de 2026. O repositório foi criado em julho de 2026, e a página do desenvolvedor avisa que pode haver arestas.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O CozyClay vale uma olhada se você usa modelos de vídeo com IA e quer definir encenação e câmera antes de pagar por uma geração.**',
          'No papel, ele cobre muito para uma ferramenta gratuita: um palco 3D, um compilador de movimento com verificações de QA, planos e trilhos de câmera, pacotes de exportação para modelos de vídeo, um painel de agente, um servidor MCP e instaladores para macOS e Windows. O desenvolvimento é ativo, com a versão 3.2.2 em 7 de novembro de 2026 e um commit em 15 de novembro de 2026.',
          'As contrapartidas são reais. Segundo o desenvolvedor, o projeto é jovem, só roda em navegadores Chromium e produz de propósito uma saída plana estilo argila; além disso, depende de um modelo de vídeo externo para o resultado final. As estatísticas, que o desenvolvedor descreve como anônimas, vêm ativadas por padrão, e a empresa ou o país por trás dele não é informado. A PromptQuorum não testou o app: experimente com uma cena pequena e confira a exportação no seu modelo de vídeo antes de depender dela.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do CozyClay](https://cozyclay.org) — fluxo de trabalho, lista de exportações, opções de instalação, trecho MCP e requisitos, consultado em 17 de novembro de 2026.',
          '[Página de privacidade do CozyClay](https://cozyclay.org/privacy/) — estatísticas, desativação, dados não coletados, demo hospedada, consultado em 17 de novembro de 2026.',
          '[Software de previs comparado](https://cozyclay.org/previs-software/) — comparação de ferramentas de previs pelo desenvolvedor e limites declarados, consultado em 17 de novembro de 2026.',
          '[Repositório do CozyClay no GitHub](https://github.com/HaD0Yun/CozyClay) — repositório, licença, data de criação e último push, consultado em 17 de novembro de 2026.',
          '[README](https://github.com/HaD0Yun/CozyClay#readme) — início rápido, recursos, acessos de agente e configuração MCP, consultado em 17 de novembro de 2026.',
          '[LICENSING.md](https://github.com/HaD0Yun/CozyClay/blob/main/LICENSING.md) — AGPL-3.0-or-later e o histórico anterior GPL-3.0-or-later, consultado em 17 de novembro de 2026.',
          '[Divulgação de estatísticas e privacidade](https://github.com/HaD0Yun/CozyClay/blob/main/docs/privacy.md) — lista completa de eventos coletados, consultado em 17 de novembro de 2026.',
          '[README do MCP](https://github.com/HaD0Yun/CozyClay/blob/main/mcp/README.md) — modos MCP com e sem editor, consultado em 17 de novembro de 2026.',
          '[Versão v3.2.2](https://github.com/HaD0Yun/CozyClay/releases/tag/v3.2.2) — versão mais recente e sua data, consultado em 17 de novembro de 2026.',
          '[Versão do instalador do Windows](https://github.com/HaD0Yun/CozyClay/releases/tag/windows-installer) — CozyClay-Setup.exe e a nota sobre a falta de assinatura, consultado em 17 de novembro de 2026.',
          '[Versão para macOS](https://github.com/HaD0Yun/cozyclay-releases/releases/tag/macos-1.0.3) — CozyClay.dmg, consultado em 17 de novembro de 2026.',
          '[Pacote npm](https://www.npmjs.com/package/cozyclay) — última versão publicada, consultado em 17 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do OpenMontage](/pt/power-local-llm/openmontage-review) — produção de vídeo agêntica de código aberto: seu assistente de código com IA pesquisa, escreve roteiros, gera e renderiza vídeos prontos.',
          '[Análise do web-search-mcp](/pt/power-local-llm/web-search-mcp-review) — acesso a busca na web para LLMs locais por meio de um servidor MCP hospedado localmente.',
          '[Análise do LocalMCP](/pt/power-local-llm/localmcp-review) — app da Mac App Store que executa um servidor MCP local para que seu cliente de IA pesquise em Mail, Calendário, Contatos, Lembretes e Notas.',
          '[Ferramentas de imagem e vídeo comparadas](/pt/power-local-llm/local-llm-images-video-compared) — a comparação de categoria para ferramentas de imagem e vídeo.',
          '[Diretório de software de LLMs locais](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-17',
    theme: 'Image & Video Generation',
    heroImage: '/images/cozyclay-review-hero-zh.webp',
    title: 'CozyClay 解读：面向 AI 视频的免费浏览器预演工作室，附带 MCP 服务器',
    seoTitle: 'CozyClay 解读：AI 视频预演工作室与 MCP',
    intro:
      'CozyClay 是一款在浏览器标签页中运行的免费开源 3D 预演（previs）工作室。你可以布置场景、摆放角色姿势、设置镜头和剪辑点，再把镜头导出为首帧、参考片段和面向 AI 视频模型的提示词。本解读基于开发者网站、GitHub 仓库、发布页面和隐私页面，核查于 2026年11月17日。PromptQuorum 没有亲自上手测试这款应用。',
    metaDescription:
      'CozyClay 是在浏览器中运行的免费开源 3D 预演工作室，可把镜头导出给 AI 视频模型，并提供 MCP 服务器。安装方式、隐私与局限，基于开发者公开资料。',
    twitterDescription:
      'CozyClay 在浏览器中用 3D 布置场景，并为 AI 视频模型导出镜头。免费、AGPL，附带面向 Claude 和 Cursor 的 MCP 服务器。',
    audience:
      '使用 AI 视频模型的视频创作者、通过 MCP 驱动工具的开发者，以及正在评估免费预演软件的团队',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'CozyClay',
    targetKeywords: [
      'CozyClay 解读',
      'CozyClay MCP',
      '免费预演软件',
      '浏览器 3D 预演',
      '灰模转 AI 视频',
      'CozyClay 安装',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**CozyClay 是一款免费开源（AGPL）的 3D 预演工作室，在 Chromium 浏览器中运行，为 AI 视频模型准备镜头。** 它可通过 macOS 或 Windows 安装包，或一条 npx 命令启动，并自带 MCP 服务器，让 Claude Code、Cursor 等助手能编辑场景。它本身不生成最终视频，PromptQuorum 也没有测试过它。',
    quickAnswerTop: {
      zh: {
        question: 'CozyClay 是什么，适合谁用？',
        answer:
          'CozyClay 是一款浏览器中的 3D 工作室，用来在付费让 AI 视频模型生成之前先规划视频镜头。它适合想掌控场面调度、镜头和节奏，并且愿意使用较新的开源项目的人。',
        bullets: [
          '在 Chromium 浏览器中运行；macOS .dmg、Windows 安装包，或 Node.js 22.19+ 下的 npx cozyclay。',
          '价格：免费；许可证 AGPL-3.0-or-later。',
          '可导出首帧、灰模片段、镜头数据和提示词，以及 mp4、深度与法线通道、联系表和 OTIO 剪辑列表。',
          'MCP 服务器和智能体面板让助手实时编辑场景。',
          '开发者称为匿名的使用统计默认开启，可以关闭。',
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
            text: 'CozyClay 让你在浏览器中布置 3D 场景、摆放角色姿势、设置镜头运动，再把镜头导出为画面、参考片段和面向 AI 视频模型的提示词。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作面向 AI 视频的免费灰模排练舞台：在为一次生成付费之前，先决定每个人站在哪里、镜头往哪里走。应用本身不制作最终视频，那由外部视频模型完成。',
          },
        ],
        items: [
          '免费开源，采用 AGPL-3.0-or-later；开发者网站未列出付费方案。',
          '在 Chromium 浏览器中运行。macOS 有 .dmg，Windows 有 .exe 安装包，所有平台都可在 Node.js 22.19 或更高版本下运行 npx cozyclay。',
          'MCP 服务器（npx -y cozyclay mcp）让 Claude Desktop、Claude Code、Cursor 等 MCP 客户端编辑场景。',
          '开发者称为匿名的使用统计默认开启；可用 cclay telemetry off 或 DO_NOT_TRACK=1 关闭。',
          'PromptQuorum 没有测试过这款应用。项目较新（仓库创建于 2026年7月），开发者自己的页面也提醒会有不够完善之处。',
        ],
        callouts: [
          {
            type: 'note',
            text: '视频本身来自你自己选择并另行付费的外部 AI 视频模型。CozyClay 只准备输入；各模型能在多大程度上遵循它，PromptQuorum 没有核实。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**CozyClay 是一款浏览器中的 3D“预演”工作室：先在 3D 里规划镜头，再让 AI 视频模型来渲染。**',
          '该项目由 NomaDamas 的 Doyun（GitHub 用户 HaD0Yun）开发，采用 AGPL-3.0-or-later 发布。3.2.2 版发布于 2026年11月7日，仓库在 2026年11月15日有提交，因此开发仍在进行，不适用项目停更警告。仓库创建于 2026年7月。',
          '开发者描述了四个步骤。布景：用基础几何体搭建场景，添加带骨骼的角色或胶囊替身。动作：描述动作，由智能体编写动作规格，浏览器中的确定性编译器逐帧生成，并检查碰撞、脚底滑动、够取范围和手部接触。拍摄：把镜头放到时间线上，绘制推轨，通过镜头取景。导出：把结果交给视频模型。',
          'README 列出的导出内容包括：关键帧包（首帧和末帧、灰模片段、镜头、提示词）、mp4、深度与法线通道、联系表和 OTIO 剪辑列表。Storyboard 项目类型则生成带说明的分镜面板、动态分镜和联系表。每次编辑，包括智能体所做的每项更改，都是一步撤销。',
          '以上描述来自开发者。PromptQuorum 没有运行这款应用，也没有核实动作质量、导出质量，或 AI 视频模型对导出镜头的遵循程度。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '如何获取',
        content: [
          '**你可以在浏览器中使用 CozyClay，从 macOS 或 Windows 下载安装，或用一条 npx 命令启动。**',
          '开发者网站提供适用于 macOS（macOS 12 或更高版本）的 CozyClay.dmg 和适用于 Windows 的 CozyClay-Setup.exe。首次启动会下载 CozyClay，可能需要几分钟。Windows 安装包没有代码签名，因此 Windows 会显示“Windows 已保护你的电脑”，请选择“更多信息”，再选择“仍要运行”。工作室会在浏览器中以本地地址打开（npx 方式为 127.0.0.1:5180/app/）。仅当你信任下载来源时才运行安装包；PromptQuorum 没有扫描或运行过该文件。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          { '平台': '[macOS](https://github.com/HaD0Yun/cozyclay-releases/releases/latest/download/CozyClay.dmg)', '获取方式': '下载 CozyClay.dmg（macOS 12+）' },
          { '平台': '[Windows](https://github.com/HaD0Yun/CozyClay/releases/download/windows-installer/CozyClay-Setup.exe)', '获取方式': '下载 CozyClay-Setup.exe（未签名）' },
          { '平台': '[Linux／任意系统](https://github.com/HaD0Yun/CozyClay#readme)', '获取方式': '运行 npx cozyclay（Node.js 22.19+、Chromium）' },
          { '平台': '[浏览器内试玩](https://cozyclay.org/#try)', '获取方式': '在标签页中试用，无需安装' },
        ],
        note: '来源没有说明是否有 Linux 安装包；README 记载的是 npx 方式。浏览器内试玩是工作室的独立副本，据隐私页面，它不会读取或写入你保存的场景。',
      },
      requirements: {
        id: 'requirements',
        title: '系统要求',
        content: [
          '**CozyClay 需要基于 Chromium 的浏览器；npx 方式还需要 Node.js 22.19 或更高版本；不需要 GPU、Python 或下载模型。**',
          '这些要求来自 README。开发者的对比页面称不支持 Safari 和 Firefox。没有公布 RAM 或磁盘数字，PromptQuorum 也没有测量资源占用。',
        ],
        columns: ['项目', '给出的数字'],
        rows: [
          { '项目': '浏览器', '给出的数字': '基于 Chromium（不支持 Safari、Firefox）' },
          { '项目': 'Node.js', '给出的数字': '22.19 或更高（npx 方式）' },
          { '项目': 'GPU', '给出的数字': '不需要（README）' },
          { '项目': 'Python／模型下载', '给出的数字': '不需要（README）' },
          { '项目': 'macOS 安装包', '给出的数字': 'macOS 12 或更高（网站）' },
          { '项目': 'RAM／磁盘', '给出的数字': '未说明' },
          { '项目': '网络', '给出的数字': '首次启动需下载；智能体需联网' },
        ],
        note: '智能体功能需要模型提供商（ChatGPT 登录或你自己的 API 密钥），因此需要联网。渲染最终片段的 AI 视频模型是另外的。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**CozyClay 的核心是用于搭建镜头的 3D 编辑器，外加三种用 AI 指挥它的方式。** 以下均为开发者在网站和 README 中的说法。',
        ],
        items: [
          '用基础几何体搭建场景，添加带骨骼的角色，或在无需活动肢体时使用胶囊替身。',
          '通过动作规格摆姿势和做动画，由浏览器中的确定性编译器逐帧生成，并对碰撞、脚底滑动、够取范围和手部接触做 QA 检查。',
          '把镜头放到时间线上，绘制推轨，通过镜头取景；每个镜头都了解你所针对视频模型的限制。',
          '导出关键帧包（首帧和末帧、灰模片段、镜头、提示词）、mp4、深度与法线通道、联系表和 OTIO 剪辑列表。',
          'Storyboard 项目类型，带说明的面板、动态分镜和联系表。',
          '智能体面板（Cmd/Ctrl+B）：可用 ChatGPT 登录，或使用你自己的 Anthropic、OpenAI、Gemini、MiniMax、OpenRouter 或 CLIProxyAPI 密钥。',
          '面向 Claude Desktop、Claude Code、Cursor 或任意 MCP 客户端的 MCP 服务器（npx -y cozyclay mcp）。据 MCP README，它可在编辑器打开时实时工作，也可在没有浏览器时于内存中运行场景、镜头、提示词和项目文件工具。',
          '终端接口（cclay live status --wait），供编码智能体以 JSON 输入输出驱动正在运行的工作室；每次更改都是一步撤销。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**CozyClay 默认收集开发者称为匿名的使用统计，称从不收集项目内容或提示词文本，并允许关闭统计。**',
          '据隐私页面（2026年10月25日起生效），网站使用 PostHog（US Cloud）和 Cloudflare Web Analytics，没有 Cookie，也没有会话录制。npm 包会在本地状态文件中保存一个随机安装标识符，并发送分桶事件，如首次启动、会话时长和操作次数。据该页面，不收集提示词文本、素材名和文件名、项目内容及本地路径。',
          '你可以用 cclay telemetry off、环境变量 COZYCLAY_TELEMETRY=0、DO_NOT_TRACK=1 或工作室顶栏的开关选择退出。据开发者称，源码检出、分叉、开发服务器、CI 和测试不会发送任何数据。',
          '智能体和模型功能会按你所连接提供商的条款，把请求发送给该提供商。隐私页面还介绍了一个使用 Google 登录、会保存提示词和结果最长 30 天的托管动作演示；页面称该演示目前不对公众开放。隐私页面和 README 都没有给出公司、地址或适用法律。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        content: [
          '**CozyClay 适合想在为生成付费之前先规划 AI 视频镜头的人。**',
        ],
        items: [
          '希望 AI 视频模型每次生成都保持相同场面调度、节奏和镜头的视频创作者。',
          '希望让助手通过 MCP 或终端接口编辑 3D 场景的开发者和智能体用户。',
          '想要免费开源、据 README 无需 GPU 即可在浏览器标签页中运行的预演工具的人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        content: [
          '**CozyClay 在某些情况下并不合适，也有若干细节尚未核实。**',
        ],
        items: [
          '不适合：需要照片级渲染或灯光设计的人。开发者称输出有意只是平面的黏土通道。',
          '不适合：使用 Safari 或 Firefox 的用户，因为开发者称仅支持 Chromium 浏览器。',
          '不适合：希望一个工具直接产出成片的人。最终片段由外部 AI 视频模型渲染，另有费用。',
          '不适合：不能使用 AGPL 许可软件的组织。据 LICENSING.md，通过网络提供的修改版必须提供其源代码。',
          '未核实：动作质量、碰撞检查和导出质量。PromptQuorum 没有运行这款应用。',
          '未核实：哪些视频模型能很好地遵循导出的镜头。开发者网站展示了 Seedance 2.5 的示例，并称导出针对 Seedance、Kling 和 Veo 设计；没有找到独立测试。',
          '未核实：是否有 Linux 安装包，以及安装包运行的是哪个版本。Windows 发布说明称安装包总是启动最新的 CozyClay。',
          '未核实：项目背后的公司或国家。来源只提到开发者 Doyun 和 NomaDamas 组织。',
          '未核实：独立评测或用户数量。均未找到，且开发者自己的对比页面不被视为独立来源。',
          '未核实：稳定性。仓库创建于 2026年7月，开发者页面提醒会有不够完善之处，更新日志变化很快。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'CozyClay 与替代方案对比',
        itemHeadings: true,
        content: [
          '**CozyClay 是一款面向浏览器的免费开源预演工具；PromptQuorum 没有亲自把它与替代方案做对比。** 下面的替代方案来自开发者自己的对比页面，因此描述反映的是开发者的看法，而不是独立测试。',
        ],
        columns: ['工具', '来源中的记载'],
        rows: [
          { '工具': 'CozyClay', '来源中的记载': '免费；AGPL-3.0；浏览器；为视频模型导出' },
          { '工具': 'Blender', '来源中的记载': '免费；GPL；桌面；手动渲染黏土通道' },
          { '工具': 'Unreal Engine', '来源中的记载': '预演免费；源码可见；安装体积大' },
          { '工具': 'Previs Pro', '来源中的记载': '付费；iPad、iPhone 和 Mac 应用' },
          { '工具': 'FrameForge', '来源中的记载': '付费；桌面；分镜和预演部门' },
          { '工具': 'Cine Tracer', '来源中的记载': '付费；Steam 桌面版；实时灯光' },
          { '工具': 'Higgsfield 3D Jutsu', '来源中的记载': '订阅；浏览器；接入 Higgsfield 自家生成器' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'CozyClay 免费吗？',
            a: '是。CozyClay 免费开源，采用 AGPL-3.0-or-later，开发者网站标价为 0，没有付费方案。你把镜头交给的 AI 视频模型是另外的，可能按次收费；智能体面板需要模型提供商的账号或密钥。',
          },
          {
            q: 'CozyClay 自己生成视频吗？',
            a: '不。CozyClay 准备镜头：首帧、灰模参考片段、镜头数据和提示词。最终视频由外部 AI 视频模型渲染，例如开发者演示中的 Seedance 2.5。',
          },
          {
            q: '如何安装 CozyClay？',
            a: '从开发者网站下载 macOS 版 CozyClay.dmg 或 Windows 版 CozyClay-Setup.exe，或在 Node.js 22.19 或更高版本和 Chromium 浏览器下运行 npx cozyclay。Windows 安装包没有代码签名，因此 Windows 会显示警告。',
          },
          {
            q: 'Claude 或 Cursor 能控制 CozyClay 吗？',
            a: '据开发者称可以。用命令 npx -y cozyclay mcp 把 MCP 服务器添加到 Claude Desktop、Claude Code、Cursor 或其他 MCP 客户端。工作室打开时，工具调用会驱动可见的视口；未打开时，部分工具在内存中运行。',
          },
          {
            q: 'CozyClay 收集哪些数据？',
            a: '默认通过 PostHog 收集分桶的使用统计（开发者称其为匿名），并使用随机安装标识符；称从不收集提示词文本、文件名或项目内容。可用 cclay telemetry off 或 DO_NOT_TRACK=1 选择退出。',
          },
          {
            q: 'CozyClay 支持哪些浏览器？',
            a: '据开发者称，仅支持基于 Chromium 的浏览器；开发者的对比页面写明不支持 Safari 和 Firefox。通过 npx 运行还需要 Node.js 22.19 或更高版本。',
          },
          {
            q: 'CozyClay 需要 GPU 吗？',
            a: '不需要。据 README，无需 GPU、Python 或下载模型。内存和磁盘占用没有公布数字，PromptQuorum 也未测量资源占用。',
          },
          {
            q: 'CozyClay 可以导出什么？',
            a: '据 README，可导出关键帧包（首尾帧、greybox 片段、镜头、提示词）、mp4、深度和法线通道、联系表以及 OTIO 剪辑清单。Storyboard 项目类型则改为输出带说明的分镜面板、动态分镜和联系表。',
          },
          {
            q: '智能体面板支持哪些模型提供商？',
            a: '据 README，可使用 ChatGPT 登录，或使用你自己的 Anthropic、OpenAI、Gemini、MiniMax、OpenRouter 或 CLIProxyAPI 密钥。面板需要联网，请求会按该提供商的条款发送给你所连接的提供商。',
          },
          {
            q: 'CozyClay 使用什么许可证？',
            a: '据 LICENSING.md，为 AGPL-3.0-or-later。通过网络提供的修改版本必须提供其源代码；如果你所在的组织限制使用 AGPL 软件，请咨询法务。',
          },
          {
            q: 'PromptQuorum 试用过 CozyClay 吗？',
            a: '没有。本文依据开发者网站、GitHub 仓库、发布页面和隐私页面撰写。动作质量、导出质量以及视频模型对导出镜头的遵循程度均未经核实。',
          },
          {
            q: 'CozyClay 仍在积极开发吗？',
            a: '3.2.2 版于 2026年11月7日发布，仓库在 2026年11月15日有过一次提交。仓库创建于 2026年7月，开发者页面也提示可能存在不完善之处。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果你使用 AI 视频模型，并想在为生成付费之前先敲定场面调度和镜头，CozyClay 值得一看。**',
          '就资料而言，作为免费工具它涵盖很多：3D 舞台、带 QA 检查的动作编译器、镜头与摄影轨、面向视频模型的导出包、智能体面板、MCP 服务器，以及 macOS 和 Windows 安装包。开发活跃，3.2.2 版发布于 2026年11月7日，并在 2026年11月15日有提交。',
          '代价也很实际。据开发者称，项目较新，只能在 Chromium 浏览器中运行，输出有意采用平面的黏土风格；最终结果还依赖外部视频模型。开发者称为匿名的统计默认开启，背后的公司或国家也没有说明。PromptQuorum 没有测试过这款应用，请先用小场景试用，并在你的视频模型中检查导出效果，再决定是否依赖它。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[CozyClay 网站](https://cozyclay.org) — 工作流程、导出列表、安装方式、MCP 片段和系统要求，核查于 2026年11月17日。',
          '[CozyClay 隐私页面](https://cozyclay.org/privacy/) — 统计、退出方式、不收集的内容、托管演示，核查于 2026年11月17日。',
          '[预演软件对比](https://cozyclay.org/previs-software/) — 开发者对预演工具的对比及其所述局限，核查于 2026年11月17日。',
          '[CozyClay GitHub 仓库](https://github.com/HaD0Yun/CozyClay) — 仓库、许可证、创建日期和最近推送，核查于 2026年11月17日。',
          '[README](https://github.com/HaD0Yun/CozyClay#readme) — 快速开始、功能、智能体接入和 MCP 配置，核查于 2026年11月17日。',
          '[LICENSING.md](https://github.com/HaD0Yun/CozyClay/blob/main/LICENSING.md) — AGPL-3.0-or-later 以及此前 GPL-3.0-or-later 的历史，核查于 2026年11月17日。',
          '[统计与隐私披露](https://github.com/HaD0Yun/CozyClay/blob/main/docs/privacy.md) — 所收集事件的完整列表，核查于 2026年11月17日。',
          '[MCP README](https://github.com/HaD0Yun/CozyClay/blob/main/mcp/README.md) — 有编辑器和无编辑器两种 MCP 模式，核查于 2026年11月17日。',
          '[发布版 v3.2.2](https://github.com/HaD0Yun/CozyClay/releases/tag/v3.2.2) — 最新版本及其日期，核查于 2026年11月17日。',
          '[Windows 安装包发布页](https://github.com/HaD0Yun/CozyClay/releases/tag/windows-installer) — CozyClay-Setup.exe 及未签名说明，核查于 2026年11月17日。',
          '[macOS 发布页](https://github.com/HaD0Yun/cozyclay-releases/releases/tag/macos-1.0.3) — CozyClay.dmg，核查于 2026年11月17日。',
          '[npm 包](https://www.npmjs.com/package/cozyclay) — 最新发布版本，核查于 2026年11月17日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[OpenMontage 解读](/zh/power-local-llm/openmontage-review) — 开源的智能体式视频制作：你的 AI 编程助手负责调研、写脚本、生成并渲染成片。',
          '[web-search-mcp 解读](/zh/power-local-llm/web-search-mcp-review) — 通过本地托管的 MCP 服务器，为本地 LLM 提供网页搜索能力。',
          '[LocalMCP 解读](/zh/power-local-llm/localmcp-review) — 运行本地 MCP 服务器的 Mac App Store 应用，让你的 AI 客户端搜索邮件、日历、通讯录、提醒事项和备忘录。',
          '[图像与视频工具对比](/zh/power-local-llm/local-llm-images-video-compared) — 图像与视频工具的类别对比。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-17',
    theme: 'Image & Video Generation',
    heroImage: '/images/cozyclay-review-hero-ar.webp',
    title: 'مراجعة CozyClay: استوديو معاينة مسبقة مجاني في المتصفح لفيديو الذكاء الاصطناعي، مع خادم MCP',
    seoTitle: 'مراجعة CozyClay: معاينة مسبقة لفيديو الذكاء الاصطناعي',
    intro:
      'CozyClay استوديو مجاني ومفتوح المصدر للمعاينة المسبقة (previs) ثلاثية الأبعاد يعمل في تبويب المتصفح. ترتّب المشهد وتضع الشخصيات في أوضاعها وتحدد الكاميرا والقطعات، ثم تصدّر اللقطة كإطار أول ومقطع مرجعي وprompt لنموذج فيديو بالذكاء الاصطناعي. تستند هذه المراجعة إلى موقع المطوّر ومستودع GitHub وصفحات الإصدارات وصفحة الخصوصية، وقد جرى التحقق منها في 17 نوفمبر 2026. لم تجرّب PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'CozyClay استوديو مجاني ومفتوح المصدر للمعاينة المسبقة ثلاثية الأبعاد في المتصفح يصدّر اللقطات لنماذج فيديو الذكاء الاصطناعي، مع خادم MCP.',
    twitterDescription:
      'CozyClay يرتّب المشاهد بثلاثة أبعاد في متصفحك ويصدّر لقطات لنماذج فيديو الذكاء الاصطناعي. مجاني وAGPL، مع خادم MCP لـ Claude وCursor.',
    audience:
      'صنّاع الفيديو الذين يستخدمون نماذج فيديو بالذكاء الاصطناعي، والمطوّرون الذين يتحكمون بالأدوات عبر MCP، والفرق التي تقيّم برامج معاينة مسبقة مجانية',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'CozyClay',
    targetKeywords: [
      'مراجعة CozyClay',
      'CozyClay MCP',
      'برنامج معاينة مسبقة مجاني',
      'معاينة مسبقة ثلاثية الأبعاد في المتصفح',
      'من greybox إلى فيديو بالذكاء الاصطناعي',
      'تثبيت CozyClay',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**CozyClay استوديو مجاني ومفتوح المصدر (AGPL) للمعاينة المسبقة ثلاثية الأبعاد يعمل في متصفح Chromium ويجهّز اللقطات لنماذج فيديو الذكاء الاصطناعي.** يبدأ من مثبّت لنظام macOS أو Windows أو بأمر npx واحد، ويتضمن خادم MCP ليتمكن مساعدون مثل Claude Code وCursor من تعديل المشهد. لا ينتج الفيديو النهائي بنفسه، ولم تختبره PromptQuorum.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو CozyClay ولمن يناسب؟',
        answer:
          'CozyClay استوديو ثلاثي الأبعاد في المتصفح لتخطيط لقطة فيديو قبل أن تدفع لنموذج فيديو بالذكاء الاصطناعي لتوليدها. يناسب من يريد التحكم في الإخراج والكاميرا والتوقيت، ومن لا يمانع استخدام مشروع مفتوح المصدر حديث.',
        bullets: [
          'يعمل في متصفح Chromium؛ ملف .dmg لنظام macOS أو مثبّت Windows أو npx cozyclay مع Node.js 22.19+.',
          'السعر: مجاني؛ الترخيص AGPL-3.0-or-later.',
          'يصدّر إطارًا أول ومقطع greybox وبيانات الكاميرا وprompt، إضافة إلى mp4 وممرّات العمق والمتجهات العمودية وورقة اتصال وقائمة قطع OTIO.',
          'خادم MCP ولوحة وكيل يتيحان للمساعدين تعديل المشهد مباشرة.',
          'إحصاءات الاستخدام التي يصفها المطوّر بأنها مجهولة مفعّلة افتراضيًا ويمكن إيقافها.',
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
            text: 'يتيح CozyClay ترتيب مشهد ثلاثي الأبعاد ووضع الشخصيات وتحديد حركات الكاميرا في المتصفح، ثم تصدير اللقطة كإطار ومقطع مرجعي وprompt لنموذج فيديو بالذكاء الاصطناعي.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله مسرح تدريب greybox مجانيًا لفيديو الذكاء الاصطناعي: تقرر أين يقف كل شخص وإلى أين تتحرك الكاميرا قبل أن تدفع مقابل أي توليد. لا ينتج التطبيق الفيديو النهائي؛ يتولى ذلك نموذج فيديو خارجي.',
          },
        ],
        items: [
          'مجاني ومفتوح المصدر بترخيص AGPL-3.0-or-later؛ ولا يذكر موقع المطوّر أي خطة مدفوعة.',
          'يعمل في متصفح Chromium. يتوفر ملف .dmg لنظام macOS ومثبّت .exe لنظام Windows، ويمكن تشغيل npx cozyclay على كل المنصات مع Node.js 22.19 أو أحدث.',
          'يتيح خادم MCP (npx -y cozyclay mcp) لـ Claude Desktop وClaude Code وCursor وغيرها من عملاء MCP تعديل المشهد.',
          'إحصاءات الاستخدام التي يصفها المطوّر بأنها مجهولة مفعّلة افتراضيًا؛ ويمكن إيقافها بالأمر cclay telemetry off أو DO_NOT_TRACK=1.',
          'لم تختبر PromptQuorum التطبيق. المشروع حديث (أُنشئ المستودع في يوليو 2026) وصفحة المطوّر نفسها تنبّه إلى وجود جوانب غير مصقولة.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'الفيديو نفسه يأتي من نموذج فيديو خارجي بالذكاء الاصطناعي تختاره وتدفع له على حدة. يجهّز CozyClay المدخلات فقط؛ ولم تتحقق PromptQuorum من مدى اتباع أي نموذج لها.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**CozyClay استوديو «previs» ثلاثي الأبعاد في المتصفح: تخطط اللقطة أولًا بثلاثة أبعاد ثم يعرضها نموذج فيديو بالذكاء الاصطناعي.**',
          'يطوّر المشروع Doyun (مستخدم GitHub باسم HaD0Yun) في NomaDamas ويُنشر بترخيص AGPL-3.0-or-later. صدر الإصدار 3.2.2 في 7 نوفمبر 2026 وتلقى المستودع التزامًا (commit) في 15 نوفمبر 2026، فالتطوير مستمر ولا ينطبق تحذير المشروع المهجور. أُنشئ المستودع في يوليو 2026.',
          'يصف المطوّر مسارًا من أربع خطوات. المسرح: بناء الديكور من أشكال أولية وإضافة شخصيات مزوّدة بهيكل عظمي أو بدائل على شكل كبسولة. الحركة: تصف الفعل فيكتب وكيل مواصفة حركة ويحسب مترجم حتمي في المتصفح كل إطار، مع فحوص للتصادمات وانزلاق القدم والمدى وتلامس اليد. التصوير: وضع اللقطات على خط زمني ورسم سكك الدوللي والنظر عبر العدسة. التصدير: تسليم النتيجة إلى نموذج فيديو.',
          'يذكر README هذه التصديرات: حزمة إطارات مفتاحية (الإطار الأول والأخير ومقطع greybox والكاميرا وprompt) وmp4 وممرّات العمق والمتجهات العمودية وورقة اتصال وقائمة قطع OTIO. أما مشروع Storyboard فينتج بدلًا من ذلك لوحات بتعليقات وأنيماتيك وورقة اتصال. كل تعديل، بما فيه كل تغيير يجريه الوكيل، يُعد خطوة تراجع واحدة.',
          'هذه الأوصاف أقوال المطوّر. لم تشغّل PromptQuorum التطبيق ولم تتحقق من جودة الحركة ولا جودة التصدير ولا من مدى اتباع نماذج فيديو الذكاء الاصطناعي للقطات المصدّرة.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يمكنك استخدام CozyClay في المتصفح، أو تثبيته من تنزيل لنظام macOS أو Windows، أو تشغيله بأمر npx واحد.**',
          'يقدّم موقع المطوّر CozyClay.dmg لنظام macOS (macOS 12 أو أحدث) وCozyClay-Setup.exe لنظام Windows. يقوم أول تشغيل بتنزيل CozyClay وقد يستغرق بضع دقائق. مثبّت Windows غير موقّع رقميًا، لذلك يعرض Windows رسالة «قام Windows بحماية جهاز الكمبيوتر»؛ اختر «مزيد من المعلومات» ثم «تشغيل على أي حال». يُفتح الاستوديو في المتصفح على عنوان محلي (127.0.0.1:5180/app/ عند استخدام npx). شغّل أي مثبّت فقط إذا كنت تثق بمصدر التنزيل؛ ولم تفحص PromptQuorum الملف ولم تشغّله.',
        ],
        columns: ['المنصة', 'كيفية الحصول عليه'],
        rows: [
          { 'المنصة': '[macOS](https://github.com/HaD0Yun/cozyclay-releases/releases/latest/download/CozyClay.dmg)', 'كيفية الحصول عليه': 'نزّل CozyClay.dmg (macOS 12+)' },
          { 'المنصة': '[Windows](https://github.com/HaD0Yun/CozyClay/releases/download/windows-installer/CozyClay-Setup.exe)', 'كيفية الحصول عليه': 'نزّل CozyClay-Setup.exe (غير موقّع)' },
          { 'المنصة': '[Linux / أي نظام](https://github.com/HaD0Yun/CozyClay#readme)', 'كيفية الحصول عليه': 'شغّل npx cozyclay (Node.js 22.19+ وChromium)' },
          { 'المنصة': '[ساحة تجربة في المتصفح](https://cozyclay.org/#try)', 'كيفية الحصول عليه': 'جرّب الاستوديو في تبويب دون تثبيت' },
        ],
        note: 'لا تذكر المصادر وجود مثبّت لنظام Linux؛ ويوثّق README طريقة npx. ساحة التجربة في المتصفح نسخة منفصلة من الاستوديو، ولا تقرأ مشاهدك المحفوظة ولا تكتب إليها بحسب صفحة الخصوصية.',
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات',
        content: [
          '**يحتاج CozyClay إلى متصفح مبني على Chromium، وإلى Node.js 22.19 أو أحدث عند استخدام npx؛ ولا يحتاج إلى GPU أو Python أو تنزيل نموذج.**',
          'تأتي هذه المتطلبات من README. وتذكر صفحة مقارنة المطوّر أن Safari وFirefox غير مدعومين. لا تُنشر أرقام للذاكرة RAM أو القرص، ولم تقِس PromptQuorum استهلاك الموارد.',
        ],
        columns: ['البند', 'القيمة المذكورة'],
        rows: [
          { 'البند': 'المتصفح', 'القيمة المذكورة': 'مبني على Chromium (لا Safari ولا Firefox)' },
          { 'البند': 'Node.js', 'القيمة المذكورة': '22.19 أو أحدث (طريقة npx)' },
          { 'البند': 'GPU', 'القيمة المذكورة': 'غير مطلوب (README)' },
          { 'البند': 'Python / تنزيل نموذج', 'القيمة المذكورة': 'غير مطلوبين (README)' },
          { 'البند': 'مثبّت macOS', 'القيمة المذكورة': 'macOS 12 أو أحدث (الموقع)' },
          { 'البند': 'RAM / القرص', 'القيمة المذكورة': 'غير مذكور' },
          { 'البند': 'الشبكة', 'القيمة المذكورة': 'أول تشغيل ينزّل CozyClay؛ والوكيل يحتاجها' },
        ],
        note: 'تحتاج ميزات الوكيل إلى مزوّد نماذج (تسجيل دخول ChatGPT أو مفتاح API خاص بك) وبالتالي إلى اتصال بالشبكة. أما نموذج فيديو الذكاء الاصطناعي الذي يعرض المقطع النهائي فهو منفصل.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**جوهر CozyClay محرّر ثلاثي الأبعاد لإخراج اللقطة، إضافة إلى ثلاث طرق لتوجيهه بالذكاء الاصطناعي.** كل ما يلي أقوال المطوّر من الموقع وREADME.',
        ],
        items: [
          'بناء الديكور من أشكال أولية وإضافة شخصيات مزوّدة بهيكل عظمي، أو بدائل على شكل كبسولة عندما لا يحتاج أحد إلى تحريك طرف.',
          'تحريك الأوضاع والرسوم عبر مواصفة حركة يحسبها مترجم حتمي في المتصفح إطارًا بإطار، مع فحوص جودة للتصادمات وانزلاق القدم والمدى وتلامس اليد.',
          'وضع اللقطات على خط زمني ورسم سكك الدوللي والنظر عبر العدسة؛ وكل لقطة تعرف حدود نموذج الفيديو الذي تستهدفه.',
          'تصدير حزمة إطارات مفتاحية (الإطار الأول والأخير ومقطع greybox والكاميرا وprompt) وmp4 وممرّات العمق والمتجهات العمودية وورقة اتصال وقائمة قطع OTIO.',
          'نوع مشروع Storyboard بلوحات معلّقة وأنيماتيك وورقة اتصال.',
          'لوحة وكيل (Cmd/Ctrl+B) تسجّل الدخول فيها بحساب ChatGPT أو تستخدم مفتاحك الخاص لدى Anthropic أو OpenAI أو Gemini أو MiniMax أو OpenRouter أو CLIProxyAPI.',
          'خادم MCP (npx -y cozyclay mcp) لـ Claude Desktop وClaude Code وCursor أو أي عميل MCP. بحسب README الخاص بـ MCP يعمل مباشرة مع فتح المحرّر، أو في الذاكرة دون متصفح لأدوات المشهد والكاميرا وprompt وملف المشروع.',
          'واجهة طرفية (cclay live status --wait) لوكلاء البرمجة الذين يتحكمون باستوديو قيد التشغيل بمدخلات ومخرجات JSON؛ وكل تغيير يُعد خطوة تراجع واحدة.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**يجمع CozyClay افتراضيًا إحصاءات استخدام يصفها بأنها مجهولة، ويقول إنه لا يجمع أبدًا محتوى المشاريع ولا نصوص الـ prompt، ويتيح إيقاف الإحصاءات.**',
          'بحسب صفحة الخصوصية (سارية منذ 25 أكتوبر 2026) يستخدم الموقع PostHog (US Cloud) وCloudflare Web Analytics، دون ملفات تعريف ارتباط ودون تسجيل جلسات. تحفظ حزمة npm معرّف تثبيت عشوائيًا في ملف حالة محلي وترسل أحداثًا مجمّعة في فئات مثل أول تشغيل ومدة الجلسة وعدد الإجراءات. وبحسب الصفحة لا تُجمع نصوص الـ prompt ولا أسماء الأصول والملفات ولا محتوى المشاريع ولا المسارات المحلية.',
          'يمكنك الانسحاب عبر cclay telemetry off أو متغير البيئة COZYCLAY_TELEMETRY=0 أو DO_NOT_TRACK=1 أو مفتاح التبديل في الشريط العلوي للاستوديو. ولا ترسل نسخ الشيفرة المصدرية والتفريعات (forks) وخوادم التطوير وCI والاختبارات أي شيء، بحسب المطوّر.',
          'ترسل ميزات الوكيل والنماذج طلباتك إلى المزوّد الذي تربطه، وفق شروط ذلك المزوّد. وتصف صفحة الخصوصية أيضًا عرضًا تجريبيًا مستضافًا للحركة بتسجيل دخول Google يخزّن الـ prompt والنتائج حتى 30 يومًا؛ وتقول إن هذا العرض غير متاح للجمهور حاليًا. ولا تذكر صفحة الخصوصية ولا README شركة أو عنوانًا أو قانونًا واجب التطبيق.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب CozyClay من يريد تخطيط لقطة فيديو بالذكاء الاصطناعي قبل أن يدفع مقابل توليدها.**',
        ],
        items: [
          'صنّاع الفيديو الذين يريدون الترتيب والتوقيت والكاميرا نفسها في كل محاولة لنموذج فيديو بالذكاء الاصطناعي.',
          'المطوّرون ومستخدمو الوكلاء الذين يريدون أن يعدّل مساعد مشهدًا ثلاثي الأبعاد عبر MCP أو واجهة طرفية.',
          'من يريد معاينة مسبقة مجانية ومفتوحة المصدر تعمل، بحسب README، في تبويب المتصفح دون GPU.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        content: [
          '**لا يناسب CozyClay بعض الحالات، وتبقى عدة تفاصيل دون تحقق.**',
        ],
        items: [
          'لا يناسب: من يحتاج إلى عرض واقعي فوتوغرافي أو تصميم إضاءة. يقول المطوّر إن المخرجات ممر طين مسطّح عن قصد.',
          'لا يناسب: مستخدمي Safari أو Firefox، لأن المطوّر يقول إن متصفحات Chromium فقط مدعومة.',
          'لا يناسب: من يريد فيديو جاهزًا من أداة واحدة. يعرض نموذج فيديو خارجي بالذكاء الاصطناعي المقطع النهائي وله تكلفته الخاصة.',
          'لا يناسب: المؤسسات التي لا تستطيع استخدام برامج بترخيص AGPL. بحسب LICENSING.md يجب أن توفّر النسخ المعدّلة المقدَّمة عبر الشبكة شيفرتها المصدرية.',
          'لم يُتحقق منه: جودة الحركة وفحوص التصادم وجودة التصدير. لم تشغّل PromptQuorum التطبيق.',
          'لم يُتحقق منه: أي نماذج فيديو تتبع اللقطات المصدّرة جيدًا. يعرض موقع المطوّر أمثلة بـ Seedance 2.5 ويقول إن التصديرات مصمّمة لـ Seedance وKling وVeo؛ ولم نجد اختبارًا مستقلًا.',
          'لم يُتحقق منه: وجود مثبّت لنظام Linux، وأي إصدار تشغّله المثبّتات. تقول ملاحظات إصدار Windows إن المثبّت يشغّل دائمًا أحدث CozyClay.',
          'لم يُتحقق منه: الشركة أو البلد وراء المشروع. تذكر المصادر المطوّر Doyun ومنظمة NomaDamas فقط.',
          'لم يُتحقق منه: مراجعات مستقلة أو أعداد المستخدمين. لم نجد أيًّا منها، ولم تُعامل صفحة المقارنة الخاصة بالمطوّر كمصدر مستقل.',
          'لم يُتحقق منه: الاستقرار. أُنشئ المستودع في يوليو 2026، وتنبّه صفحة المطوّر إلى جوانب غير مصقولة وسجل تغييرات سريع الحركة.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'CozyClay مقابل البدائل',
        itemHeadings: true,
        content: [
          '**CozyClay أداة معاينة مسبقة مجانية ومفتوحة المصدر للمتصفح؛ ولم تقارنها PromptQuorum عمليًا بالبدائل.** تأتي البدائل أدناه من صفحة المقارنة الخاصة بالمطوّر، لذا فالأوصاف وجهة نظره وليست اختبارًا مستقلًا.',
        ],
        columns: ['الأداة', 'المذكور في المصادر'],
        rows: [
          { 'الأداة': 'CozyClay', 'المذكور في المصادر': 'مجاني؛ AGPL-3.0؛ متصفح؛ تصدير لنماذج الفيديو' },
          { 'الأداة': 'Blender', 'المذكور في المصادر': 'مجاني؛ GPL؛ سطح المكتب؛ عرض يدوي لممر طين' },
          { 'الأداة': 'Unreal Engine', 'المذكور في المصادر': 'مجاني للمعاينة؛ الشيفرة متاحة؛ تثبيت كبير' },
          { 'الأداة': 'Previs Pro', 'المذكور في المصادر': 'مدفوع؛ تطبيق iPad وiPhone وMac' },
          { 'الأداة': 'FrameForge', 'المذكور في المصادر': 'مدفوع؛ سطح المكتب؛ فرق القصة المصورة والمعاينة' },
          { 'الأداة': 'Cine Tracer', 'المذكور في المصادر': 'مدفوع؛ سطح المكتب على Steam؛ إضاءة فورية' },
          { 'الأداة': 'Higgsfield 3D Jutsu', 'المذكور في المصادر': 'اشتراك؛ متصفح؛ يغذّي مولّدات Higgsfield الخاصة' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل CozyClay مجاني؟',
            a: 'نعم. CozyClay مجاني ومفتوح المصدر بترخيص AGPL-3.0-or-later، ويذكر موقع المطوّر سعرًا قدره 0 دون خطة مدفوعة. أما نموذج فيديو الذكاء الاصطناعي الذي تسلّمه اللقطات فمنفصل وقد يتقاضى رسومًا لكل توليد، وتحتاج لوحة الوكيل إلى حساب أو مفتاح لدى مزوّد نماذج.',
          },
          {
            q: 'هل ينتج CozyClay الفيديو بنفسه؟',
            a: 'لا. يجهّز CozyClay اللقطة: إطارًا أول ومقطعًا مرجعيًا greybox وبيانات الكاميرا وprompt. ويعرض الفيديو النهائي نموذج فيديو خارجي بالذكاء الاصطناعي، مثل Seedance 2.5 في عروض المطوّر.',
          },
          {
            q: 'كيف أثبّت CozyClay؟',
            a: 'نزّل CozyClay.dmg لنظام macOS أو CozyClay-Setup.exe لنظام Windows من موقع المطوّر، أو شغّل npx cozyclay مع Node.js 22.19 أو أحدث ومتصفح Chromium. مثبّت Windows غير موقّع رقميًا، لذلك يعرض Windows تحذيرًا.',
          },
          {
            q: 'هل يمكن لـ Claude أو Cursor التحكم في CozyClay؟',
            a: 'نعم، بحسب المطوّر. أضف خادم MCP بالأمر npx -y cozyclay mcp إلى Claude Desktop أو Claude Code أو Cursor أو عميل MCP آخر. مع فتح الاستوديو تتحكم استدعاءات الأدوات في منفذ العرض المرئي؛ وبدونه تعمل بعض الأدوات في الذاكرة.',
          },
          {
            q: 'ما البيانات التي يجمعها CozyClay؟',
            a: 'يجمع افتراضيًا إحصاءات استخدام مجمّعة في فئات عبر PostHog يصفها المطوّر بأنها مجهولة، مع معرّف تثبيت عشوائي، ويقول إنه لا يجمع أبدًا نصوص الـ prompt ولا أسماء الملفات ولا محتوى المشاريع. يمكنك الانسحاب عبر cclay telemetry off أو DO_NOT_TRACK=1.',
          },
          {
            q: 'ما المتصفحات التي يدعمها CozyClay؟',
            a: 'المتصفحات المبنية على Chromium فقط بحسب المطوّر؛ إذ تذكر صفحة المقارنة لديه أن Safari وFirefox غير مدعومين. كما يتطلب مسار npx الإصدار 22.19 أو أحدث من Node.js.',
          },
          {
            q: 'هل يحتاج CozyClay إلى GPU؟',
            a: 'لا بحسب ملف README: لا حاجة إلى GPU أو Python أو تنزيل نموذج. ولا تُنشر أرقام للذاكرة أو القرص، ولم تقس PromptQuorum استهلاك الموارد.',
          },
          {
            q: 'ماذا يمكن لـ CozyClay تصديره؟',
            a: 'بحسب README: حزمة keyframes (الإطار الأول والأخير ومقطع greybox والكاميرا والـ prompt) وملف mp4 ومسارات العمق والـ normals وورقة contact sheet وقائمة قطع OTIO. أما مشروع Storyboard فينتج بدلًا من ذلك لوحات مكتوبة وAnimatic وورقة contact sheet.',
          },
          {
            q: 'مع أي مزوّدي نماذج تعمل لوحة الوكيل؟',
            a: 'بحسب README تسجّل الدخول عبر ChatGPT أو تستخدم مفتاحك الخاص لدى Anthropic أو OpenAI أو Gemini أو MiniMax أو OpenRouter أو CLIProxyAPI. تحتاج اللوحة إلى اتصال بالشبكة، وتُرسل الطلبات إلى المزوّد الذي تربطه وفق شروطه.',
          },
          {
            q: 'ما الترخيص الذي يستخدمه CozyClay؟',
            a: 'AGPL-3.0-or-later بحسب ملف LICENSING.md. يجب أن تتيح النسخ المعدّلة المقدَّمة عبر الشبكة شفرتها المصدرية؛ استشر فريقك القانوني إذا كانت مؤسستك تقيّد برامج AGPL.',
          },
          {
            q: 'هل اختبرت PromptQuorum تطبيق CozyClay؟',
            a: 'لا. تستند هذه المراجعة إلى موقع المطوّر ومستودع GitHub وصفحات الإصدارات وصفحة الخصوصية. أما جودة الحركة وجودة التصدير ومدى اتباع نماذج الفيديو للقطات المصدَّرة فلم يُتحقق منها.',
          },
          {
            q: 'هل يُطوَّر CozyClay بنشاط؟',
            a: 'صدر الإصدار 3.2.2 في 7 نوفمبر 2026، وتلقّى المستودع تعديلًا (commit) في 15 نوفمبر 2026. أُنشئ المستودع في يوليو 2026، وتنبّه صفحة المطوّر إلى احتمال وجود جوانب غير مصقولة.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق CozyClay نظرة إذا كنت تستخدم نماذج فيديو بالذكاء الاصطناعي وتريد تثبيت الإخراج والكاميرا قبل أن تدفع مقابل أي توليد.**',
          'على الورق يغطي الكثير لأداة مجانية: مسرحًا ثلاثي الأبعاد ومترجم حركة بفحوص جودة ولقطات وسكك كاميرا وحزم تصدير لنماذج الفيديو ولوحة وكيل وخادم MCP ومثبّتات لنظامي macOS وWindows. التطوير نشط، مع الإصدار 3.2.2 في 7 نوفمبر 2026 والتزام في 15 نوفمبر 2026.',
          'المقايضات حقيقية. بحسب المطوّر، المشروع حديث، ويعمل فقط في متصفحات Chromium، وينتج عمدًا مخرجات مسطّحة بنمط الطين؛ كما يعتمد على نموذج فيديو خارجي للنتيجة النهائية. الإحصاءات التي يصفها المطوّر بأنها مجهولة مفعّلة افتراضيًا، والشركة أو البلد وراءه غير مذكورين. لم تختبر PromptQuorum التطبيق، فجرّبه على مشهد صغير وتحقق من التصدير في نموذج الفيديو الخاص بك قبل الاعتماد عليه.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع CozyClay](https://cozyclay.org) — سير العمل وقائمة التصدير وخيارات التثبيت ومقتطف MCP والمتطلبات، جرى التحقق في 17 نوفمبر 2026.',
          '[صفحة خصوصية CozyClay](https://cozyclay.org/privacy/) — الإحصاءات والانسحاب وما لا يُجمع والعرض التجريبي المستضاف، جرى التحقق في 17 نوفمبر 2026.',
          '[مقارنة برامج المعاينة المسبقة](https://cozyclay.org/previs-software/) — مقارنة المطوّر لأدوات المعاينة المسبقة والحدود التي ذكرها، جرى التحقق في 17 نوفمبر 2026.',
          '[مستودع CozyClay على GitHub](https://github.com/HaD0Yun/CozyClay) — المستودع والترخيص وتاريخ الإنشاء وآخر دفع، جرى التحقق في 17 نوفمبر 2026.',
          '[README](https://github.com/HaD0Yun/CozyClay#readme) — البدء السريع والميزات ومنافذ الوكيل وإعداد MCP، جرى التحقق في 17 نوفمبر 2026.',
          '[LICENSING.md](https://github.com/HaD0Yun/CozyClay/blob/main/LICENSING.md) — AGPL-3.0-or-later وتاريخ GPL-3.0-or-later السابق، جرى التحقق في 17 نوفمبر 2026.',
          '[الإفصاح عن الإحصاءات والخصوصية](https://github.com/HaD0Yun/CozyClay/blob/main/docs/privacy.md) — القائمة الكاملة للأحداث المجمّعة، جرى التحقق في 17 نوفمبر 2026.',
          '[README الخاص بـ MCP](https://github.com/HaD0Yun/CozyClay/blob/main/mcp/README.md) — وضعا MCP مع المحرّر ودونه، جرى التحقق في 17 نوفمبر 2026.',
          '[الإصدار v3.2.2](https://github.com/HaD0Yun/CozyClay/releases/tag/v3.2.2) — أحدث إصدار وتاريخه، جرى التحقق في 17 نوفمبر 2026.',
          '[إصدار مثبّت Windows](https://github.com/HaD0Yun/CozyClay/releases/tag/windows-installer) — CozyClay-Setup.exe وملاحظة عدم التوقيع الرقمي، جرى التحقق في 17 نوفمبر 2026.',
          '[إصدار macOS](https://github.com/HaD0Yun/cozyclay-releases/releases/tag/macos-1.0.3) — CozyClay.dmg، جرى التحقق في 17 نوفمبر 2026.',
          '[حزمة npm](https://www.npmjs.com/package/cozyclay) — آخر إصدار منشور، جرى التحقق في 17 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة OpenMontage](/ar/power-local-llm/openmontage-review) — إنتاج فيديو بالوكلاء مفتوح المصدر: مساعد البرمجة بالذكاء الاصطناعي يبحث ويكتب السيناريو ويولّد ويعرض فيديوهات جاهزة.',
          '[مراجعة web-search-mcp](/ar/power-local-llm/web-search-mcp-review) — وصول إلى البحث في الويب لنماذج LLM المحلية عبر خادم MCP مستضاف محليًا.',
          '[مراجعة LocalMCP](/ar/power-local-llm/localmcp-review) — تطبيق من Mac App Store يشغّل خادم MCP محليًا ليبحث عميل الذكاء الاصطناعي لديك في البريد والتقويم وجهات الاتصال والتذكيرات والملاحظات.',
          '[مقارنة أدوات الصور والفيديو](/ar/power-local-llm/local-llm-images-video-compared) — مقارنة الفئة لأدوات الصور والفيديو.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-17',
    theme: 'Image & Video Generation',
    heroImage: '/images/cozyclay-review-hero-ko.webp',
    title: 'CozyClay 리뷰: AI 영상용 무료 브라우저 프리비즈 스튜디오, MCP 서버 포함',
    seoTitle: 'CozyClay 리뷰: AI 영상용 프리비즈와 MCP',
    intro:
      'CozyClay는 브라우저 탭에서 실행되는 무료 오픈소스 3D 프리비즈(previs) 스튜디오입니다. 장면을 배치하고, 캐릭터에 포즈를 주고, 카메라와 컷을 설정한 뒤, 그 샷을 첫 프레임, 참조 클립, AI 영상 모델용 프롬프트로 내보낼 수 있습니다. 이 리뷰는 개발자 웹사이트, GitHub 저장소, 릴리스 페이지, 개인정보 페이지를 바탕으로 하며 2026년 11월 17일에 확인했습니다. PromptQuorum은 이 앱을 직접 사용해 보지 않았습니다.',
    metaDescription:
      'CozyClay는 브라우저에서 실행되는 무료 오픈소스 3D 프리비즈 스튜디오로, AI 영상 모델용 샷을 내보내며 MCP 서버를 제공합니다. 설치, 개인정보, 한계.',
    twitterDescription:
      'CozyClay는 브라우저에서 3D로 장면을 짜고 AI 영상 모델용 샷을 내보냅니다. 무료, AGPL, Claude·Cursor용 MCP 서버 제공.',
    audience:
      'AI 영상 모델을 쓰는 영상 제작자, MCP로 도구를 제어하는 개발자, 무료 프리비즈 소프트웨어를 검토하는 팀',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'CozyClay',
    targetKeywords: [
      'CozyClay 리뷰',
      'CozyClay MCP',
      '무료 프리비즈 소프트웨어',
      '브라우저 3D 프리비즈',
      '그레이박스 AI 영상',
      'CozyClay 설치',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**CozyClay는 Chromium 브라우저에서 실행되며 AI 영상 모델용 샷을 준비해 주는 무료 오픈소스(AGPL) 3D 프리비즈 스튜디오입니다.** macOS 또는 Windows 설치 프로그램이나 npx 명령 한 줄로 시작할 수 있고, Claude Code나 Cursor 같은 어시스턴트가 장면을 편집할 수 있는 MCP 서버를 포함합니다. 최종 영상은 직접 생성하지 않으며, PromptQuorum은 테스트하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'CozyClay는 무엇이고 누구에게 맞습니까?',
        answer:
          'CozyClay는 AI 영상 모델에 생성 비용을 지불하기 전에 영상 샷을 계획하는 브라우저 기반 3D 스튜디오입니다. 연출, 카메라, 타이밍을 직접 정하고 싶고 새로운 오픈소스 프로젝트를 사용할 수 있는 분에게 맞습니다.',
        bullets: [
          'Chromium 브라우저에서 실행됩니다. macOS .dmg, Windows 설치 프로그램, 또는 Node.js 22.19+ 환경의 npx cozyclay.',
          '가격: 무료, 라이선스는 AGPL-3.0-or-later입니다.',
          '첫 프레임, 그레이박스 클립, 카메라 데이터, 프롬프트와 함께 mp4, 깊이·노멀 패스, 컨택트 시트, OTIO 컷 리스트를 내보냅니다.',
          'MCP 서버와 에이전트 패널로 어시스턴트가 장면을 실시간으로 편집할 수 있습니다.',
          '개발자가 익명이라고 설명하는 사용 통계는 기본으로 켜져 있으며 끌 수 있습니다.',
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
            text: 'CozyClay로 브라우저에서 3D 장면을 배치하고, 캐릭터에 포즈를 주고, 카메라 움직임을 설정한 뒤, 그 샷을 프레임, 참조 클립, AI 영상 모델용 프롬프트로 내보낼 수 있습니다.',
          },
          {
            type: 'plain-terms',
            text: 'AI 영상을 위한 무료 그레이박스 리허설 무대라고 생각하면 됩니다. 생성에 비용을 내기 전에 모두가 어디에 서고 카메라가 어디로 움직일지 정합니다. 앱이 최종 영상을 만들지는 않으며, 외부 영상 모델이 만듭니다.',
          },
        ],
        items: [
          'AGPL-3.0-or-later 무료 오픈소스이며, 개발자 사이트에는 유료 요금제가 나와 있지 않습니다.',
          'Chromium 브라우저에서 실행됩니다. macOS는 .dmg, Windows는 .exe 설치 프로그램이 있고, 모든 플랫폼에서 Node.js 22.19 이상으로 npx cozyclay를 실행할 수 있습니다.',
          'MCP 서버(npx -y cozyclay mcp)로 Claude Desktop, Claude Code, Cursor 등 MCP 클라이언트가 장면을 편집할 수 있습니다.',
          '개발자가 익명이라고 설명하는 사용 통계는 기본으로 켜져 있으며 cclay telemetry off 또는 DO_NOT_TRACK=1로 끌 수 있습니다.',
          'PromptQuorum은 이 앱을 테스트하지 않았습니다. 프로젝트는 새롭고(저장소는 2026년 7월 생성) 개발자 페이지도 거친 부분이 있을 수 있다고 안내합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '영상 자체는 사용자가 직접 고르고 별도로 비용을 내는 외부 AI 영상 모델이 만듭니다. CozyClay는 입력만 준비하며, 각 모델이 그것을 얼마나 따르는지는 PromptQuorum이 확인하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**CozyClay는 브라우저 기반 3D "프리비즈" 스튜디오입니다. 먼저 3D로 샷을 계획하고, 이후 AI 영상 모델이 렌더링합니다.**',
          '이 프로젝트는 NomaDamas의 Doyun(GitHub 사용자 HaD0Yun)이 만들었고 AGPL-3.0-or-later로 공개되어 있습니다. 버전 3.2.2는 2026년 11월 7일에 릴리스되었고 저장소에는 2026년 11월 15일에 커밋이 있었으므로 개발이 계속되고 있으며 방치된 프로젝트 경고는 해당되지 않습니다. 저장소는 2026년 7월에 생성되었습니다.',
          '개발자는 4단계 흐름을 설명합니다. 스테이지: 기본 도형으로 세트를 만들고 리그가 있는 캐릭터나 캡슐 대역을 추가합니다. 모션: 동작을 설명하면 에이전트가 모션 사양을 쓰고 브라우저의 결정론적 컴파일러가 각 프레임을 생성하며, 충돌, 발 미끄러짐, 도달 범위, 손 접촉을 검사합니다. 촬영: 샷을 타임라인에 올리고, 달리 레일을 그리고, 렌즈를 통해 확인합니다. 내보내기: 결과를 영상 모델에 넘깁니다.',
          'README는 다음 내보내기를 나열합니다. 키프레임 팩(첫 프레임과 마지막 프레임, 그레이박스 클립, 카메라, 프롬프트), mp4, 깊이·노멀 패스, 컨택트 시트, OTIO 컷 리스트입니다. Storyboard 프로젝트 유형은 대신 캡션이 달린 패널, 애니매틱, 컨택트 시트를 만듭니다. 에이전트가 하는 변경을 포함해 모든 편집은 실행 취소 한 단계입니다.',
          '이 설명은 개발자의 주장입니다. PromptQuorum은 앱을 실행하지 않았고, 모션 품질, 내보내기 품질, AI 영상 모델이 내보낸 샷을 얼마나 따르는지는 확인하지 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '설치 방법',
        content: [
          '**CozyClay는 브라우저에서 사용하거나, macOS 또는 Windows 다운로드로 설치하거나, npx 명령 한 줄로 시작할 수 있습니다.**',
          '개발자 사이트는 macOS(macOS 12 이상)용 CozyClay.dmg와 Windows용 CozyClay-Setup.exe를 제공합니다. 처음 실행하면 CozyClay를 내려받으며 몇 분 걸릴 수 있습니다. Windows 설치 프로그램은 코드 서명이 되어 있지 않아 Windows가 "Windows의 PC 보호"를 표시합니다. "추가 정보"를 선택한 다음 "실행"을 누르십시오. 스튜디오는 브라우저에서 로컬 주소로 열립니다(npx 방식은 127.0.0.1:5180/app/). 내려받은 출처를 신뢰할 수 있을 때만 설치 프로그램을 실행하십시오. PromptQuorum은 이 파일을 검사하거나 실행하지 않았습니다.',
        ],
        columns: ['플랫폼', '받는 방법'],
        rows: [
          { '플랫폼': '[macOS](https://github.com/HaD0Yun/cozyclay-releases/releases/latest/download/CozyClay.dmg)', '받는 방법': 'CozyClay.dmg 다운로드(macOS 12+)' },
          { '플랫폼': '[Windows](https://github.com/HaD0Yun/CozyClay/releases/download/windows-installer/CozyClay-Setup.exe)', '받는 방법': 'CozyClay-Setup.exe 다운로드(서명 없음)' },
          { '플랫폼': '[Linux / 모든 OS](https://github.com/HaD0Yun/CozyClay#readme)', '받는 방법': 'npx cozyclay 실행(Node.js 22.19+, Chromium)' },
          { '플랫폼': '[브라우저 플레이그라운드](https://cozyclay.org/#try)', '받는 방법': '설치 없이 탭에서 스튜디오 체험' },
        ],
        note: '출처에는 Linux 설치 프로그램이 있는지 나와 있지 않으며, README는 npx 방식을 설명합니다. 브라우저 플레이그라운드는 스튜디오의 별도 사본으로, 개인정보 페이지에 따르면 저장된 장면을 읽거나 쓰지 않습니다.',
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항',
        content: [
          '**CozyClay에는 Chromium 기반 브라우저가 필요하고, npx 방식에는 Node.js 22.19 이상도 필요합니다. GPU, Python, 모델 다운로드는 필요하지 않습니다.**',
          '이 요구 사항은 README에서 가져온 것입니다. 개발자의 비교 페이지는 Safari와 Firefox를 지원하지 않는다고 적고 있습니다. RAM이나 디스크 수치는 공개되어 있지 않으며, PromptQuorum도 리소스 사용량을 측정하지 않았습니다.',
        ],
        columns: ['항목', '제시된 수치'],
        rows: [
          { '항목': '브라우저', '제시된 수치': 'Chromium 기반(Safari, Firefox 제외)' },
          { '항목': 'Node.js', '제시된 수치': '22.19 이상(npx 방식)' },
          { '항목': 'GPU', '제시된 수치': '필요 없음(README)' },
          { '항목': 'Python / 모델 다운로드', '제시된 수치': '필요 없음(README)' },
          { '항목': 'macOS 설치 프로그램', '제시된 수치': 'macOS 12 이상(사이트)' },
          { '항목': 'RAM / 디스크', '제시된 수치': '명시되지 않음' },
          { '항목': '네트워크', '제시된 수치': '첫 실행 시 다운로드, 에이전트도 사용' },
        ],
        note: '에이전트 기능에는 모델 제공자(ChatGPT 로그인 또는 본인의 API 키)가 필요하므로 네트워크 접속도 필요합니다. 최종 클립을 렌더링하는 AI 영상 모델은 별개입니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**CozyClay의 핵심은 샷을 연출하는 3D 에디터와, AI로 이를 지휘하는 세 가지 방법입니다.** 아래 항목은 모두 웹사이트와 README에 나온 개발자의 주장입니다.',
        ],
        items: [
          '기본 도형으로 세트를 만들고 리그가 있는 캐릭터를 추가하거나, 팔다리를 움직일 필요가 없으면 캡슐 대역을 추가합니다.',
          '브라우저의 결정론적 컴파일러가 프레임 단위로 생성하는 모션 사양으로 포즈와 애니메이션을 만들고, 충돌, 발 미끄러짐, 도달 범위, 손 접촉을 QA로 검사합니다.',
          '샷을 타임라인에 올리고, 달리 레일을 그리고, 렌즈를 통해 확인합니다. 각 샷은 목표로 하는 영상 모델의 한계를 알고 있습니다.',
          '키프레임 팩(첫 프레임과 마지막 프레임, 그레이박스 클립, 카메라, 프롬프트), mp4, 깊이·노멀 패스, 컨택트 시트, OTIO 컷 리스트를 내보냅니다.',
          '캡션이 달린 패널, 애니매틱, 컨택트 시트를 갖춘 Storyboard 프로젝트 유형.',
          '에이전트 패널(Cmd/Ctrl+B)에서 ChatGPT로 로그인하거나 Anthropic, OpenAI, Gemini, MiniMax, OpenRouter, CLIProxyAPI의 본인 키를 사용합니다.',
          'Claude Desktop, Claude Code, Cursor 또는 모든 MCP 클라이언트용 MCP 서버(npx -y cozyclay mcp). MCP README에 따르면 에디터를 연 상태에서 실시간으로 동작하거나, 브라우저 없이 메모리에서 장면, 카메라, 프롬프트, 프로젝트 파일 도구로 동작합니다.',
          '실행 중인 스튜디오를 JSON 입출력으로 제어하는 코딩 에이전트용 터미널 인터페이스(cclay live status --wait). 모든 변경은 실행 취소 한 단계입니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 데이터 흐름',
        content: [
          '**CozyClay는 기본으로 개발자가 익명이라고 설명하는 사용 통계를 수집하고, 프로젝트 내용이나 프롬프트 텍스트는 수집하지 않는다고 밝히며, 통계를 끌 수 있게 합니다.**',
          '개인정보 페이지(2026년 10월 25일 시행)에 따르면 웹사이트는 PostHog(US Cloud)와 Cloudflare Web Analytics를 사용하며 쿠키와 세션 녹화는 없습니다. npm 패키지는 무작위 설치 식별자를 로컬 상태 파일에 저장하고 첫 실행, 세션 길이, 동작 횟수 같은 구간화된 이벤트를 전송합니다. 해당 페이지에 따르면 프롬프트 텍스트, 에셋 이름과 파일 이름, 프로젝트 내용, 로컬 경로는 수집하지 않습니다.',
          'cclay telemetry off, 환경 변수 COZYCLAY_TELEMETRY=0, DO_NOT_TRACK=1 또는 스튜디오 상단 바의 토글로 수집을 거부할 수 있습니다. 개발자에 따르면 소스 체크아웃, 포크, 개발 서버, CI, 테스트는 아무것도 전송하지 않습니다.',
          '에이전트와 모델 기능은 연결한 제공자의 약관에 따라 요청을 그 제공자에게 보냅니다. 개인정보 페이지에는 Google 로그인을 사용하며 프롬프트와 결과를 최대 30일 보관하는 호스팅 모션 데모도 설명되어 있으나, 이 데모는 현재 일반에 공개되어 있지 않다고 밝힙니다. 개인정보 페이지와 README에는 회사, 주소, 준거법이 나와 있지 않습니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        content: [
          '**CozyClay는 생성에 비용을 내기 전에 AI 영상 샷을 계획하고 싶은 분에게 맞습니다.**',
        ],
        items: [
          'AI 영상 모델의 모든 테이크에서 같은 배치, 타이밍, 카메라를 원하는 영상 제작자.',
          'MCP나 터미널 인터페이스로 어시스턴트가 3D 장면을 편집하게 하고 싶은 개발자와 에이전트 사용자.',
          'README에 따르면 GPU 없이 브라우저 탭에서 실행되는 무료 오픈소스 프리비즈를 원하는 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        content: [
          '**CozyClay가 맞지 않는 경우도 있으며, 확인하지 못한 세부 사항도 여러 가지입니다.**',
        ],
        items: [
          '맞지 않음: 포토리얼 렌더링이나 조명 설계가 필요한 분. 개발자는 출력이 의도적으로 평면 클레이 패스라고 말합니다.',
          '맞지 않음: Safari나 Firefox 사용자. 개발자는 Chromium 브라우저만 지원한다고 말합니다.',
          '맞지 않음: 하나의 도구로 완성된 영상을 원하는 분. 최종 클립은 외부 AI 영상 모델이 렌더링하며 별도 비용이 듭니다.',
          '맞지 않음: AGPL 라이선스 소프트웨어를 사용할 수 없는 조직. LICENSING.md에 따르면 네트워크로 제공하는 수정 버전은 소스를 제공해야 합니다.',
          '확인하지 못함: 모션 품질, 충돌 검사, 내보내기 품질. PromptQuorum은 앱을 실행하지 않았습니다.',
          '확인하지 못함: 어떤 영상 모델이 내보낸 샷을 잘 따르는지. 개발자 사이트는 Seedance 2.5 예시를 보여 주고 내보내기가 Seedance, Kling, Veo용으로 설계되었다고 말하지만, 독립적인 테스트는 찾지 못했습니다.',
          '확인하지 못함: Linux 설치 프로그램의 존재 여부와 설치 프로그램이 실행하는 버전. Windows 릴리스 노트는 설치 프로그램이 항상 최신 CozyClay를 시작한다고 적고 있습니다.',
          '확인하지 못함: 프로젝트 뒤의 회사나 국가. 출처에는 개발자 Doyun과 NomaDamas 조직만 나옵니다.',
          '확인하지 못함: 독립적인 리뷰나 사용자 수. 찾지 못했으며, 개발자 본인의 비교 페이지는 독립적인 출처로 보지 않았습니다.',
          '확인하지 못함: 안정성. 저장소는 2026년 7월에 생성되었고, 개발자 페이지는 거친 부분과 빠르게 바뀌는 변경 로그를 예상하라고 안내합니다.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'CozyClay와 대안 비교',
        itemHeadings: true,
        content: [
          '**CozyClay는 브라우저용 무료 오픈소스 프리비즈 도구이며, PromptQuorum은 대안과 직접 비교해 보지 않았습니다.** 아래 대안은 개발자 본인의 비교 페이지에서 가져온 것이므로 설명은 독립적인 테스트가 아니라 개발자의 시각입니다.',
        ],
        columns: ['도구', '출처에 기재된 내용'],
        rows: [
          { '도구': 'CozyClay', '출처에 기재된 내용': '무료, AGPL-3.0, 브라우저, 영상 모델용 내보내기' },
          { '도구': 'Blender', '출처에 기재된 내용': '무료, GPL, 데스크톱, 클레이 패스를 수동 렌더링' },
          { '도구': 'Unreal Engine', '출처에 기재된 내용': '프리비즈는 무료, 소스 공개, 설치 용량 큼' },
          { '도구': 'Previs Pro', '출처에 기재된 내용': '유료, iPad·iPhone·Mac 앱' },
          { '도구': 'FrameForge', '출처에 기재된 내용': '유료, 데스크톱, 스토리보드·프리비즈 팀용' },
          { '도구': 'Cine Tracer', '출처에 기재된 내용': '유료, Steam 데스크톱, 실시간 조명' },
          { '도구': 'Higgsfield 3D Jutsu', '출처에 기재된 내용': '구독, 브라우저, Higgsfield 자체 생성기에 연결' },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'CozyClay는 무료입니까?',
            a: '예. CozyClay는 AGPL-3.0-or-later 무료 오픈소스이며 개발자 사이트에는 가격이 0으로 표시되고 유료 요금제도 나와 있지 않습니다. 샷을 넘기는 AI 영상 모델은 별개이며 생성마다 요금이 부과될 수 있고, 에이전트 패널에는 모델 제공자의 계정이나 키가 필요합니다.',
          },
          {
            q: 'CozyClay가 영상을 직접 생성합니까?',
            a: '아니요. CozyClay는 첫 프레임, 그레이박스 참조 클립, 카메라 데이터, 프롬프트 같은 샷을 준비합니다. 최종 영상은 개발자 데모의 Seedance 2.5 같은 외부 AI 영상 모델이 렌더링합니다.',
          },
          {
            q: 'CozyClay는 어떻게 설치합니까?',
            a: '개발자 사이트에서 macOS용 CozyClay.dmg 또는 Windows용 CozyClay-Setup.exe를 내려받거나, Node.js 22.19 이상과 Chromium 브라우저에서 npx cozyclay를 실행합니다. Windows 설치 프로그램은 코드 서명이 없어 Windows가 경고를 표시합니다.',
          },
          {
            q: 'Claude나 Cursor가 CozyClay를 제어할 수 있습니까?',
            a: '개발자에 따르면 가능합니다. npx -y cozyclay mcp 명령으로 MCP 서버를 Claude Desktop, Claude Code, Cursor 또는 다른 MCP 클라이언트에 추가합니다. 스튜디오가 열려 있으면 도구 호출이 보이는 뷰포트를 제어하고, 열려 있지 않으면 일부 도구는 메모리에서 실행됩니다.',
          },
          {
            q: 'CozyClay는 어떤 데이터를 수집합니까?',
            a: '기본으로 PostHog를 통해 무작위 설치 식별자와 함께 개발자가 익명이라고 설명하는 구간화된 사용 통계를 수집하며, 프롬프트 텍스트, 파일 이름, 프로젝트 내용은 수집하지 않는다고 밝힙니다. cclay telemetry off 또는 DO_NOT_TRACK=1로 거부할 수 있습니다.',
          },
          {
            q: 'CozyClay는 어떤 브라우저를 지원합니까?',
            a: '개발자에 따르면 Chromium 기반 브라우저만 지원하며, 개발자의 비교 페이지에는 Safari와 Firefox가 지원되지 않는다고 적혀 있습니다. npx 방식은 Node.js 22.19 이상도 필요합니다.',
          },
          {
            q: 'CozyClay에 GPU가 필요합니까?',
            a: '아니요. README에 따르면 GPU, Python, 모델 다운로드가 필요하지 않습니다. RAM이나 디스크 수치는 공개되어 있지 않으며, PromptQuorum은 리소스 사용량을 측정하지 않았습니다.',
          },
          {
            q: 'CozyClay는 무엇을 내보낼 수 있습니까?',
            a: 'README에 따르면 키프레임 팩(첫 프레임과 마지막 프레임, 그레이박스 클립, 카메라, 프롬프트), mp4, 깊이 및 노멀 패스, 콘택트 시트, OTIO 컷 리스트입니다. Storyboard 프로젝트 유형은 대신 캡션이 붙은 패널, 애니매틱, 콘택트 시트를 만듭니다.',
          },
          {
            q: '에이전트 패널은 어떤 모델 제공업체와 연동됩니까?',
            a: 'README에 따르면 ChatGPT로 로그인하거나 Anthropic, OpenAI, Gemini, MiniMax, OpenRouter, CLIProxyAPI의 본인 키를 사용합니다. 패널은 네트워크 접속이 필요하며, 요청은 연결한 제공업체의 약관에 따라 해당 제공업체로 전송됩니다.',
          },
          {
            q: 'CozyClay는 어떤 라이선스를 사용합니까?',
            a: 'LICENSING.md에 따르면 AGPL-3.0-or-later입니다. 네트워크로 제공되는 수정본은 소스 코드를 공개해야 하므로, 조직에서 AGPL 소프트웨어를 제한한다면 법무팀에 문의하십시오.',
          },
          {
            q: 'PromptQuorum은 CozyClay를 직접 사용해 보았습니까?',
            a: '아니요. 이 리뷰는 개발자의 웹사이트, GitHub 저장소, 릴리스 페이지, 개인정보 페이지를 근거로 합니다. 모션 품질, 내보내기 품질, 영상 모델이 내보낸 샷을 얼마나 잘 따르는지는 확인되지 않았습니다.',
          },
          {
            q: 'CozyClay는 활발히 개발되고 있습니까?',
            a: '버전 3.2.2는 2026년 11월 7일에 나왔고, 저장소에는 2026년 11월 15일에 커밋이 있었습니다. 저장소는 2026년 7월에 만들어졌으며, 개발자 페이지도 다듬어지지 않은 부분이 있을 수 있다고 안내합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**AI 영상 모델을 쓰면서 생성에 비용을 내기 전에 연출과 카메라를 확정하고 싶다면 CozyClay는 살펴볼 만합니다.**',
          '무료 도구치고 자료상 많은 것을 갖추고 있습니다. 3D 스테이지, QA 검사가 있는 모션 컴파일러, 샷과 카메라 레일, 영상 모델용 내보내기 팩, 에이전트 패널, MCP 서버, macOS와 Windows 설치 프로그램입니다. 개발은 활발하여 2026년 11월 7일에 3.2.2 버전, 2026년 11월 15일에 커밋이 있었습니다.',
          '절충점도 분명합니다. 개발자에 따르면 프로젝트가 새롭고, Chromium 브라우저에서만 실행되며, 출력은 의도적으로 평면 클레이 스타일입니다. 최종 결과는 외부 영상 모델에도 의존합니다. 개발자가 익명이라고 설명하는 통계는 기본으로 켜져 있고 뒤에 있는 회사나 국가는 밝혀져 있지 않습니다. PromptQuorum은 앱을 테스트하지 않았으므로, 작은 장면으로 먼저 시도하고 영상 모델에서 내보내기 결과를 확인한 뒤에 의존하시기 바랍니다.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[CozyClay 웹사이트](https://cozyclay.org) — 작업 흐름, 내보내기 목록, 설치 방법, MCP 스니펫, 요구 사항, 2026년 11월 17일 확인.',
          '[CozyClay 개인정보 페이지](https://cozyclay.org/privacy/) — 통계, 거부 방법, 수집하지 않는 항목, 호스팅 데모, 2026년 11월 17일 확인.',
          '[프리비즈 소프트웨어 비교](https://cozyclay.org/previs-software/) — 개발자의 프리비즈 도구 비교와 밝힌 한계, 2026년 11월 17일 확인.',
          '[CozyClay GitHub 저장소](https://github.com/HaD0Yun/CozyClay) — 저장소, 라이선스, 생성일, 마지막 푸시, 2026년 11월 17일 확인.',
          '[README](https://github.com/HaD0Yun/CozyClay#readme) — 빠른 시작, 기능, 에이전트 연동, MCP 설정, 2026년 11월 17일 확인.',
          '[LICENSING.md](https://github.com/HaD0Yun/CozyClay/blob/main/LICENSING.md) — AGPL-3.0-or-later와 이전 GPL-3.0-or-later 이력, 2026년 11월 17일 확인.',
          '[통계 및 개인정보 공개 문서](https://github.com/HaD0Yun/CozyClay/blob/main/docs/privacy.md) — 수집 이벤트 전체 목록, 2026년 11월 17일 확인.',
          '[MCP README](https://github.com/HaD0Yun/CozyClay/blob/main/mcp/README.md) — 에디터가 있을 때와 없을 때의 MCP 모드, 2026년 11월 17일 확인.',
          '[릴리스 v3.2.2](https://github.com/HaD0Yun/CozyClay/releases/tag/v3.2.2) — 최신 릴리스와 날짜, 2026년 11월 17일 확인.',
          '[Windows 설치 프로그램 릴리스](https://github.com/HaD0Yun/CozyClay/releases/tag/windows-installer) — CozyClay-Setup.exe와 코드 서명 없음 안내, 2026년 11월 17일 확인.',
          '[macOS 릴리스](https://github.com/HaD0Yun/cozyclay-releases/releases/tag/macos-1.0.3) — CozyClay.dmg, 2026년 11월 17일 확인.',
          '[npm 패키지](https://www.npmjs.com/package/cozyclay) — 최신 게시 버전, 2026년 11월 17일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[OpenMontage 리뷰](/ko/power-local-llm/openmontage-review) — 오픈소스 에이전트형 영상 제작: AI 코딩 어시스턴트가 조사, 대본 작성, 생성, 렌더링을 거쳐 완성된 영상을 만듭니다.',
          '[web-search-mcp 리뷰](/ko/power-local-llm/web-search-mcp-review) — 로컬에서 호스팅하는 MCP 서버로 로컬 LLM에 웹 검색 기능을 제공합니다.',
          '[LocalMCP 리뷰](/ko/power-local-llm/localmcp-review) — AI 클라이언트가 메일, 캘린더, 연락처, 미리 알림, 메모를 검색할 수 있도록 로컬 MCP 서버를 실행하는 Mac App Store 앱.',
          '[이미지·영상 도구 비교](/ko/power-local-llm/local-llm-images-video-compared) — 이미지·영상 도구의 카테고리 비교.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그.',
        ],
      },
    },
  },
}
