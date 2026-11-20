// SoloMD Review: Free Markdown Notes App with AI Chat for Local Models and MCP
// Slug: solomd-review
// Companion to: hillnote-review, tolaria-review, logseq-review, siyuan-review
// Sources (all read 2026-11-17, no hands-on testing): maker website (home page, privacy policy, security page, what's-new, thanks page), GitHub repository
// zhitongblog/solomd (API metadata, README, releases v5.2.0-v5.2.2, commits), App Store listing (iTunes lookup, id6762498874) and Google Play listing (app.solomd).
// The request came from the site owner, not from the maker.
// Last upstream update 2026-11-17 (last commit on main; latest release v5.2.2 on 2026-11-16) => no stale warning.
// Theme: 'Productivity & Knowledge Tools' (canonical, as hillnote-review).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-17',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/solomd-review-hero-en.webp',
    title: 'SoloMD Review: Free Markdown Notes App with AI Chat for Local Models and MCP',
    seoTitle: 'SoloMD Review: Free Markdown Notes, AI Chat, MCP',
    intro:
      'SoloMD is a free, MIT-licensed Markdown notes app for macOS, Windows, Linux, iPhone, iPad and Android. It keeps notes as plain .md files in a folder and adds AI chat over that folder, local-model auto-detection, 9-format export and a bundled MCP server. This review is based on the maker\'s website, privacy policy, the GitHub repository, its release page and the store listings, checked on 17 November 2026. PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'SoloMD is a free MIT Markdown notes app for 5 platforms with vault AI chat, Ollama and LM Studio detection and an MCP server. Install, privacy.',
    twitterDescription:
      'SoloMD keeps notes as Markdown files and adds vault chat, local-model detection, 9-format export and an MCP server. Free, MIT. What is confirmed and what is not.',
    audience:
      'Note-takers and writers who want plain Markdown files with built-in AI, developers who connect a notes vault to MCP clients, and anyone weighing a young one-maintainer open-source app',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'SoloMD review',
    targetKeywords: [
      'SoloMD review',
      'Markdown notes app local AI',
      'SoloMD MCP server',
      'Obsidian alternative open source',
      'Typora alternative free',
      'SoloMD install',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**SoloMD is a free, open-source (MIT) Markdown notes app that stores notes as plain files and adds AI chat over your vault, local-model auto-detection and a bundled MCP server.** It runs on macOS, Windows, Linux, iPhone, iPad and Android, installs from a normal installer or app store, and, according to its README, talks to Ollama, LM Studio, Jan, vLLM, llama.cpp or a cloud provider with your own API key. It is young and maintained by one developer, and PromptQuorum has not tested it.',
    quickAnswerTop: {
      en: {
        question: 'What is SoloMD and who is it for?',
        answer:
          'According to the maker, SoloMD is a Markdown editor and notes vault with built-in AI chat, offline semantic search and an MCP server. It suits people who want their notes as plain files on their own disk and want local or bring-your-own-key AI without a plugin hunt.',
        bullets: [
          'Free and MIT-licensed; macOS, Windows, Linux, iOS, iPadOS and Android.',
          'Notes are plain .md files; AutoGit saves a local Git snapshot on every save.',
          'AI chat over the vault and inline rewrite, using a local server such as Ollama or a cloud provider with your own key.',
          'Bundled MCP server for Claude Desktop, Claude Code, Cursor and Windsurf; the maker says write tools are off unless you enable them.',
          'One maintainer, repository created in April 2026; the maker\'s pages disagree on telemetry and feature counts.',
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
            text: 'SoloMD is a free Markdown notes app that keeps your notes as plain files and adds AI chat, local-model detection and an MCP server on top.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a calm Markdown editor with a vault of linked notes, where an AI assistant can read your notes and answer questions about them. The AI can be a model running on your computer or a cloud service that you pay for with your own key.',
          },
        ],
        items: [
          'Open source under MIT and free; the maker says there is no subscription, and optional tips in the app stores only unlock a Supporter badge.',
          'Runs on macOS, Windows (x64 and ARM64), Linux (x64 and ARM64), iPhone, iPad and Android; installers and store listings exist for each.',
          'AI: chat over the vault, inline rewrite, and auto-detection of Ollama, LM Studio, Jan, vLLM and llama.cpp on localhost, or a cloud provider with your own key.',
          'According to the README, a bundled MCP server exposes 16 tools to Claude Desktop, Claude Code, Cursor and Windsurf; the 4 write tools need an explicit flag.',
          'PromptQuorum has not tested the app. The privacy policy and the README differ on whether any SoloMD server is contacted.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The privacy policy says builds from the website and non-Apple stores send anonymous usage events to the maker\'s server unless you switch it off in Settings, while the App Store builds send none. The README says there are no SoloMD-hosted servers.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**SoloMD is a Markdown notes app that treats a plain folder of .md files as your vault and layers AI chat, search, export and an MCP server on it.**',
          'The project is MIT-licensed and developed in the open at [github.com/zhitongblog/solomd](https://github.com/zhitongblog/solomd), where the README describes it as made by one developer. The repository was created in April 2026. The latest release, v5.2.2, appeared on 16 November 2026 and the last commit was on 17 November 2026, so development is active and no stale-project warning applies.',
          'According to the README, the editor is built with Tauri 2, Vue 3, CodeMirror 6 and Rust. It offers three writing modes (pure WYSIWYG, live preview and split source view), wikilinks and backlinks, a Git-backed version history per workspace, on-device semantic search, and an export centre for PDF, Word, HTML, EPUB, LaTeX, ODT, RTF, plain text and Markdown.',
          'The README also states that the project is written, tested and released largely by Claude Code under a human maintainer who decides what ships, and that replies to issues are written by the same assistant. PromptQuorum reports this as the maker\'s own statement; the code is public for anyone to inspect.',
          'These descriptions are maker statements. PromptQuorum has not run the app and has not checked editor quality, export fidelity, sync behaviour or AI answer quality.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**You install SoloMD like any desktop or mobile app: an installer, a store listing or a package manager.**',
          'The GitHub release v5.2.2 ships a macOS universal .dmg, Windows .msi files for x64 and ARM64 plus portable zips, Linux AppImage, .deb and .rpm files for x64 and ARM64, and Android APKs. The README also lists the Mac App Store, the iOS App Store, Google Play, a Homebrew cask, winget and an Arch User Repository package.',
        ],
        columns: ['Platform', 'How to get it'],
        rows: [
          { 'Platform': '[macOS](https://github.com/zhitongblog/solomd/releases/latest)', 'How to get it': 'Universal .dmg, Mac App Store or Homebrew cask' },
          { 'Platform': '[Windows](https://github.com/zhitongblog/solomd/releases/latest)', 'How to get it': '.msi (x64 or ARM64), portable zip or winget' },
          { 'Platform': '[Linux](https://github.com/zhitongblog/solomd/releases/latest)', 'How to get it': 'AppImage, .deb or .rpm; AUR package' },
          { 'Platform': '[iPhone and iPad](https://apps.apple.com/app/solomd/id6762498874)', 'How to get it': 'App Store listing' },
          { 'Platform': '[Android](https://play.google.com/store/apps/details?id=app.solomd)', 'How to get it': 'Google Play or APK from the releases page' },
        ],
        note: 'The README also offers one-line shell installers (curl piped to bash on macOS, irm piped to iex on Windows). Piping a script into a shell runs code you have not read, so use them only if you trust the source, or take the installer from the releases page instead. The maker\'s [website](https://solomd.app) has a download page, and PromptQuorum did not run any installer or scan the downloads.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements',
        content: [
          '**SoloMD needs Windows 10 or later, macOS 10.15 or later, a current mainstream Linux, iOS 15 or later, or Android 7 or later; AI features need either a local model server or a cloud API key.**',
          'The list comes from the README. It publishes installer sizes of roughly 14 MB on Windows, 16 MB on Linux, 21 MB on Android and 30 MB for the macOS universal build, which PromptQuorum did not measure. No RAM or GPU floor is published, and local-model needs depend on the server you run.',
        ],
        columns: ['Item', 'Stated figure'],
        rows: [
          { 'Item': 'Windows', 'Stated figure': 'Windows 10+, x64 and ARM64' },
          { 'Item': 'macOS', 'Stated figure': 'macOS 10.15+, Apple Silicon and Intel' },
          { 'Item': 'Linux', 'Stated figure': 'x64 and ARM64' },
          { 'Item': 'iPhone / iPad', 'Stated figure': 'iOS 15+ (App Store listing: 15.0)' },
          { 'Item': 'Android', 'Stated figure': 'Android 7+ (API 24)' },
          { 'Item': 'Local AI', 'Stated figure': 'Ollama, LM Studio, Jan, vLLM or llama.cpp' },
          { 'Item': 'Cloud AI', 'Stated figure': 'Your own API key per provider' },
        ],
        note: 'RAM and GPU needs depend on the model you load, and the app itself does not publish a floor. The README describes the macOS build as signed and notarized and says nothing about the other platforms.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**SoloMD\'s core is a calm Markdown editor over a plain-file vault, with AI chat, search, export, sync and an MCP server around it.** All items below are maker claims from the README and website.',
        ],
        items: [
          'Three writing modes: pure WYSIWYG, live preview and a synced split or source view, plus focus and typewriter modes, Vim mode, KaTeX math and Mermaid diagrams.',
          'Vault features: [[wikilinks]], backlinks, YAML properties, and import of .docx, .pdf, .xlsx and .pptx files to Markdown by drag and drop.',
          'AutoGit: every save commits a snapshot to a local Git repository inside the workspace, with visual diff and one-click rollback; libgit2 is built in, so no system Git is needed.',
          'Offline semantic search over the vault using an on-device embedder; the maker says it needs no model download and makes no network calls.',
          'AI chat: a side panel that chats over the vault with [[wikilink]] citations, inline rewrite and translate for a selection, and auto-detection of local Ollama, LM Studio, Jan, vLLM and llama.cpp servers. Cloud providers use your own key, stored in the operating-system keychain.',
          'Export centre: PDF, Word (.docx), HTML, EPUB, LaTeX, ODT, RTF, plain text and Markdown, with no external Pandoc install, per the README.',
          'Sync per workspace through iCloud Drive, OneDrive, WebDAV, S3-compatible storage, Syncthing or Git hosts, with optional end-to-end encryption on your own storage.',
          'A bundled MCP server with 16 tools (12 read-only, 4 write tools that need --allow-write), stdio by default and an optional loopback HTTP mode with a bearer token, plus a command-line interface and JSON extensions.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**According to the maker, notes stay in the folder you choose unless you set up cloud AI, sync or an image host, and the privacy policy describes optional anonymous usage events in some builds, which the README does not mention.**',
          'According to the privacy policy (last updated 18 April 2026), SoloMD has no account system and no advertising, and notes are stored locally. Builds downloaded from the website and non-Apple stores send an anonymous event to the maker\'s own server at start-up and when some features are used; each carries the event name, app version, operating system, interface language and a random identifier, and the policy says it never contains notes, file names or paths. You can switch it off under Settings, Advanced. The App Store builds send no usage data.',
          'AI requests go directly from your machine to the provider you configure, or to a local server, according to the policy and the security page, which also says AI is off by default and that API keys sit in the operating-system keychain. Sync, an image host and Git hosting send data only to the services you set up.',
          'The README says the project has no SoloMD-hosted servers, which sits awkwardly beside the policy\'s usage-event server. The policy predates the v5.2 sync options and the security page dates from April 2026, so check both against the app version you install. Because the code is MIT-licensed and public, the data flow can be audited.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**SoloMD fits people who want plain Markdown files, a quiet editor and built-in AI without assembling plugins.**',
        ],
        items: [
          'Writers and note-takers who want files on their own disk that other editors can open.',
          'People who want chat over their notes with a local model such as one served by Ollama or LM Studio.',
          'Developers who want an MCP client such as Claude Code or Cursor to read, search or write notes in a vault.',
          'Users who need the same notes app on desktop, iPhone and Android without a paid sync service.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        content: [
          '**SoloMD is a poor fit in some situations, and several details remain unverified.**',
        ],
        items: [
          'Not a fit: teams that need a vendor with a named company, support contract or service-level terms. The pages read name no company, address or country.',
          'Not a fit: people who need a long track record. The repository was created in April 2026 and has one maintainer.',
          'Unverified: editor quality, export fidelity across the 9 formats and AI answer quality. PromptQuorum has not run the app.',
          'Unverified: sync and end-to-end encryption behaviour. The claims are the maker\'s, and PromptQuorum did not audit the code or test sync.',
          'Unverified: whether the usage events described in the privacy policy match what each build sends, and how the README\'s "no hosted servers" statement fits them.',
          'Unverified: feature counts. The older security page lists 14 AI providers and 6 default MCP tools, while the README lists more than 20 providers and 16 tools; this review follows the README.',
          'Unverified: the company or country behind the project, user numbers and ratings, and independent reviews. None were found, and the maker\'s own comparison pages were not treated as independent.',
          'Unverified: whether the Windows installers are code-signed. The README describes the macOS build as signed and notarized and says nothing about the other platforms.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'SoloMD vs Alternatives',
        itemHeadings: true,
        content: [
          '**SoloMD competes with other local-first notes apps; PromptQuorum has not compared it with them hands-on.** The tools below are in the directory and are described from their own reviews.',
        ],
        columns: ['Tool', 'Noted in sources'],
        rows: [
          { 'Tool': 'SoloMD', 'Noted in sources': 'MIT; 5 platforms; free; bundled MCP server' },
          { 'Tool': '[Hillnote](/power-local-llm/hillnote-review)', 'Noted in sources': 'No licence stated; 5 platforms; freemium' },
          { 'Tool': '[Tolaria](/power-local-llm/tolaria-review)', 'Noted in sources': 'AGPL-3.0; desktop; Git-backed vault; free' },
          { 'Tool': '[Logseq](/power-local-llm/logseq-review)', 'Noted in sources': 'AGPL-3.0; outliner; optional MCP server' },
          { 'Tool': '[SiYuan](/power-local-llm/siyuan-review)', 'Noted in sources': 'AGPL-3.0; self-hosted; built-in AI agent' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Is SoloMD free?',
            a: 'Yes, per the maker. The code is MIT-licensed, every feature is free, and there is no subscription. The Mac App Store, iOS App Store and Google Play builds offer optional one-time tips that only unlock a Supporter badge. Cloud AI providers you reach with your own key bill you directly.',
          },
          {
            q: 'Does SoloMD work with Ollama or LM Studio?',
            a: 'According to the README, yes: Settings, AI has an auto-detect option that finds local Ollama, LM Studio, Jan, vLLM and llama.cpp servers on localhost. You can also add a cloud provider with your own API key. PromptQuorum has not tested the detection.',
          },
          {
            q: 'Can Claude Code or Cursor use my SoloMD notes?',
            a: 'Yes, per the maker. The bundled solomd-mcp server exposes 16 tools; the 12 read tools are always on and the 4 write tools need the --allow-write flag. The README shows a configuration snippet and a command that registers the server with AI clients on your machine. PromptQuorum has not tested it.',
          },
          {
            q: 'How do I install SoloMD?',
            a: 'Take the installer for your system from the GitHub releases page, or use the Mac App Store, App Store, Google Play, Homebrew or winget. Prefer an installer over the one-line shell scripts unless you trust the source. PromptQuorum did not run the installation.',
          },
          {
            q: 'Does SoloMD send my notes anywhere?',
            a: 'Not by default, per the maker: notes stay in your folder, and AI requests go to the provider or local server you pick. The privacy policy adds that website and non-Apple-store builds send anonymous usage events unless you switch them off. Sync only reaches the services you configure.',
          },
          {
            q: 'What format does SoloMD use for notes?',
            a: 'Plain .md files in a folder you choose, according to the README, so other Markdown editors can open them. The maker adds wikilinks, backlinks and YAML properties on top, plus drag-and-drop import of .docx, .pdf, .xlsx and .pptx files to Markdown. PromptQuorum has not tested the import.',
          },
          {
            q: 'Which export formats does SoloMD offer?',
            a: 'According to the README, the export centre covers PDF, Word (.docx), HTML, EPUB, LaTeX, ODT, RTF, plain text and Markdown, with no separate Pandoc install. PromptQuorum has not checked the fidelity of any export.',
          },
          {
            q: 'How does SoloMD sync notes between devices?',
            a: 'Per workspace, through iCloud Drive, OneDrive, WebDAV, S3-compatible storage, Syncthing or a Git host, according to the maker, with optional end-to-end encryption on your own storage. PromptQuorum did not test sync or audit the encryption.',
          },
          {
            q: 'What is AutoGit in SoloMD?',
            a: 'The maker describes it as a snapshot committed to a local Git repository inside the workspace on every save, with a visual diff and one-click rollback. libgit2 is built in, so no system Git is needed. PromptQuorum has not tested it.',
          },
          {
            q: 'Which systems does SoloMD run on?',
            a: 'According to the README: Windows 10 or later (x64 and ARM64), macOS 10.15 or later, Linux on x64 and ARM64, iOS 15 or later and Android 7 or later. The README publishes no RAM or GPU floor, and local-model needs depend on the server you run.',
          },
          {
            q: 'Who maintains SoloMD, and is it still updated?',
            a: 'The README describes one human maintainer and says the project is written, tested and released largely by Claude Code. The repository is young, and the pages PromptQuorum read name no company or country. Check the releases page for the latest version before you rely on it.',
          },
          {
            q: 'What AI features does SoloMD have besides chat?',
            a: 'According to the README: inline rewrite and translate for a selected passage, [[wikilink]] citations in the chat panel, and offline semantic search over the vault using an on-device embedder that, the maker says, needs no model download. PromptQuorum has not tested answer quality.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**SoloMD is worth a look if you want plain Markdown files, a quiet editor, chat over your notes with a local or bring-your-own-key model, and an MCP server in one free app.**',
          'On paper it covers a lot: three editing modes, backlinks, on-device search, 9-format export, five-platform apps, cloud and Git sync, local-model detection and 16 MCP tools, with v5.2.2 released on 16 November 2026 and a commit on 17 November 2026.',
          'The trade-offs are real. It is a young project with one maintainer and a publicly stated AI-driven development process, no company or country is named, and the maker\'s own pages disagree on telemetry and feature counts. PromptQuorum has not tested the app, so try it on a copy of a small folder, review the privacy settings and check the export you need before relying on it.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[SoloMD website](https://solomd.app) — features, platforms and downloads, checked 17 November 2026.',
          '[Privacy policy](https://solomd.app/privacy) — usage events and data handling, last updated 18 April 2026, checked 17 November 2026.',
          '[Security page](https://solomd.app/security) — AI, key storage and MCP handling, dated April 2026, checked 17 November 2026.',
          '[What\'s new](https://solomd.app/whats-new/) — release notes, checked 17 November 2026.',
          '[GitHub repository](https://github.com/zhitongblog/solomd) — license, creation date and last commit, checked 17 November 2026.',
          '[README](https://github.com/zhitongblog/solomd#readme) — features, install, MCP tools and privacy, checked 17 November 2026.',
          '[Release v5.2.2](https://github.com/zhitongblog/solomd/releases/tag/v5.2.2) — latest release, its date and the installer files, checked 17 November 2026.',
          '[App Store listing](https://apps.apple.com/app/solomd/id6762498874) — iOS version, price and minimum system, checked 17 November 2026.',
          '[Google Play listing](https://play.google.com/store/apps/details?id=app.solomd) — Android availability, checked 17 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Hillnote Review](/power-local-llm/hillnote-review) — local-first Markdown notes with on-device AI for Mac, Windows and phones.',
          '[Tolaria Review](/power-local-llm/tolaria-review) — a free desktop notes app with Markdown files in a Git-backed vault.',
          '[Logseq Review](/power-local-llm/logseq-review) — an open-source, local-first outliner with an optional MCP server.',
          '[SiYuan Review](/power-local-llm/siyuan-review) — a self-hosted knowledge workspace with a built-in AI agent.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
          '[GenOffice Review](/power-local-llm/genoffice-review) — a free open-source desktop office suite for Word, Excel and PowerPoint files; its AI calls go to a cloud provider by default.',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/solomd-review-hero-de.webp',
    title: 'SoloMD-Rezension: Kostenlose Markdown-Notiz-App mit KI-Chat für lokale Modelle und MCP',
    seoTitle: 'SoloMD-Rezension: Markdown-Notizen, KI-Chat, MCP',
    intro:
      'SoloMD ist eine kostenlose, MIT-lizenzierte Markdown-Notiz-App für macOS, Windows, Linux, iPhone, iPad und Android. Sie speichert Notizen als einfache .md-Dateien in einem Ordner und ergänzt KI-Chat über diesen Ordner, automatische Erkennung lokaler Modelle, Export in 9 Formate und einen mitgelieferten MCP-Server. Diese Rezension stützt sich auf die Website des Entwicklers, die Datenschutzerklärung, das GitHub-Repository, die Release-Seite und die Store-Einträge, geprüft am 17. November 2026. PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'SoloMD: kostenlose MIT-Markdown-Notiz-App mit KI-Chat über den Vault, Ollama-/LM-Studio-Erkennung und MCP-Server. Installation, Datenschutz.',
    twitterDescription:
      'SoloMD speichert Notizen als Markdown-Dateien und ergänzt Vault-Chat, Erkennung lokaler Modelle, Export in 9 Formate und MCP-Server. Kostenlos, MIT. Was belegt ist und was nicht.',
    audience:
      'Menschen, die Notizen oder Texte schreiben und einfache Markdown-Dateien mit eingebauter KI wollen, Entwickler, die einen Notiz-Vault an MCP-Clients anbinden, und alle, die eine junge Open-Source-App mit einem einzelnen Maintainer prüfen',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'SoloMD Rezension',
    targetKeywords: [
      'SoloMD Rezension',
      'Markdown-Notiz-App lokale KI',
      'SoloMD MCP-Server',
      'Obsidian-Alternative Open Source',
      'Typora-Alternative kostenlos',
      'SoloMD installieren',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**SoloMD ist eine kostenlose, quelloffene (MIT) Markdown-Notiz-App, die Notizen als einfache Dateien speichert und KI-Chat über Ihren Vault, die automatische Erkennung lokaler Modelle und einen mitgelieferten MCP-Server ergänzt.** Sie läuft auf macOS, Windows, Linux, iPhone, iPad und Android, wird über ein normales Installationsprogramm oder einen App-Store installiert und spricht laut README mit Ollama, LM Studio, Jan, vLLM, llama.cpp oder einem Cloud-Anbieter mit Ihrem eigenen API-Schlüssel. Sie ist jung und wird von einem einzelnen Entwickler gepflegt; PromptQuorum hat sie nicht getestet.',
    quickAnswerTop: {
      de: {
        question: 'Was ist SoloMD, und für wen ist es gedacht?',
        answer:
          'Laut Entwickler ist SoloMD ein Markdown-Editor und Notiz-Vault mit eingebautem KI-Chat, Offline-Semantiksuche und MCP-Server. Es eignet sich für Menschen, die ihre Notizen als einfache Dateien auf der eigenen Festplatte wollen und lokale KI oder KI mit eigenem Schlüssel ohne Plugin-Suche nutzen möchten.',
        bullets: [
          'Kostenlos und MIT-lizenziert; macOS, Windows, Linux, iOS, iPadOS und Android.',
          'Notizen sind einfache .md-Dateien; AutoGit speichert bei jedem Speichern einen lokalen Git-Snapshot.',
          'KI-Chat über den Vault und Umschreiben im Text, mit einem lokalen Server wie Ollama oder einem Cloud-Anbieter mit Ihrem eigenen Schlüssel.',
          'Mitgelieferter MCP-Server für Claude Desktop, Claude Code, Cursor und Windsurf; laut Entwickler sind Schreibwerkzeuge aus, bis Sie sie aktivieren.',
          'Ein Maintainer, Repository im April 2026 angelegt; die Seiten des Entwicklers widersprechen sich bei Telemetrie und Funktionszahlen.',
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
            text: 'SoloMD ist eine kostenlose Markdown-Notiz-App, die Ihre Notizen als einfache Dateien speichert und KI-Chat, Erkennung lokaler Modelle und einen MCP-Server ergänzt.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich einen ruhigen Markdown-Editor mit einem Vault verknüpfter Notizen vor, in dem ein KI-Assistent Ihre Notizen lesen und Fragen dazu beantworten kann. Die KI kann ein Modell auf Ihrem Rechner sein oder ein Cloud-Dienst, den Sie mit Ihrem eigenen Schlüssel bezahlen.',
          },
        ],
        items: [
          'Open Source unter MIT und kostenlos; laut Entwickler gibt es kein Abonnement, und optionale Trinkgelder in den App-Stores schalten nur ein Unterstützer-Abzeichen frei.',
          'Läuft auf macOS, Windows (x64 und ARM64), Linux (x64 und ARM64), iPhone, iPad und Android; für jedes System gibt es Installationsprogramme oder Store-Einträge.',
          'KI: Chat über den Vault, Umschreiben im Text und automatische Erkennung von Ollama, LM Studio, Jan, vLLM und llama.cpp auf localhost oder ein Cloud-Anbieter mit Ihrem eigenen Schlüssel.',
          'Laut README stellt ein mitgelieferter MCP-Server 16 Werkzeuge für Claude Desktop, Claude Code, Cursor und Windsurf bereit; die 4 Schreibwerkzeuge brauchen ein ausdrückliches Flag.',
          'PromptQuorum hat die App nicht getestet. Datenschutzerklärung und README widersprechen sich, ob ein SoloMD-Server kontaktiert wird.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Laut Datenschutzerklärung senden Builds von der Website und aus Nicht-Apple-Stores anonyme Nutzungsereignisse an den Server des Entwicklers, sofern Sie das nicht in den Einstellungen abschalten; die App-Store-Builds senden keine. Das README sagt, es gebe keine von SoloMD betriebenen Server.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**SoloMD ist eine Markdown-Notiz-App, die einen einfachen Ordner mit .md-Dateien als Vault behandelt und KI-Chat, Suche, Export und einen MCP-Server darüberlegt.**',
          'Das Projekt steht unter MIT-Lizenz und wird offen auf [github.com/zhitongblog/solomd](https://github.com/zhitongblog/solomd) entwickelt; das README beschreibt es als Werk eines einzelnen Entwicklers. Das Repository wurde im April 2026 angelegt. Das neueste Release v5.2.2 erschien am 16. November 2026, der letzte Commit stammt vom 17. November 2026; die Entwicklung läuft also, und es gilt keine Warnung vor einem veralteten Projekt.',
          'Laut README ist der Editor mit Tauri 2, Vue 3, CodeMirror 6 und Rust gebaut. Er bietet drei Schreibmodi (reines WYSIWYG, Live-Vorschau und geteilte Quellansicht), Wikilinks und Backlinks, einen Git-gestützten Versionsverlauf je Workspace, semantische Suche auf dem Gerät und ein Export-Center für PDF, Word, HTML, EPUB, LaTeX, ODT, RTF, Klartext und Markdown.',
          'Das README gibt außerdem an, dass das Projekt weitgehend von Claude Code geschrieben, getestet und veröffentlicht wird, unter einem menschlichen Maintainer, der entscheidet, was ausgeliefert wird, und dass Antworten auf Issues vom selben Assistenten stammen. PromptQuorum gibt das als eigene Angabe des Entwicklers wieder; der Code ist öffentlich und kann geprüft werden.',
          'Diese Beschreibungen sind Angaben des Entwicklers. PromptQuorum hat die App nicht ausgeführt und weder Editorqualität, Exporttreue, Sync-Verhalten noch Antwortqualität der KI geprüft.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So bekommen Sie die App',
        content: [
          '**Sie installieren SoloMD wie jede Desktop- oder Mobil-App: über ein Installationsprogramm, einen Store-Eintrag oder einen Paketmanager.**',
          'Das GitHub-Release v5.2.2 enthält ein universelles macOS-.dmg, Windows-.msi-Dateien für x64 und ARM64 samt portablen Zip-Archiven, Linux-AppImage-, .deb- und .rpm-Dateien für x64 und ARM64 sowie Android-APKs. Das README nennt außerdem den Mac App Store, den iOS App Store, Google Play, ein Homebrew-Cask, winget und ein Paket im Arch User Repository.',
        ],
        columns: ['Plattform', 'So bekommen Sie sie'],
        rows: [
          { 'Plattform': '[macOS](https://github.com/zhitongblog/solomd/releases/latest)', 'So bekommen Sie sie': 'Universelles .dmg, Mac App Store oder Homebrew-Cask' },
          { 'Plattform': '[Windows](https://github.com/zhitongblog/solomd/releases/latest)', 'So bekommen Sie sie': '.msi (x64 oder ARM64), portables Zip oder winget' },
          { 'Plattform': '[Linux](https://github.com/zhitongblog/solomd/releases/latest)', 'So bekommen Sie sie': 'AppImage, .deb oder .rpm; AUR-Paket' },
          { 'Plattform': '[iPhone und iPad](https://apps.apple.com/app/solomd/id6762498874)', 'So bekommen Sie sie': 'App-Store-Eintrag' },
          { 'Plattform': '[Android](https://play.google.com/store/apps/details?id=app.solomd)', 'So bekommen Sie sie': 'Google Play oder APK von der Release-Seite' },
        ],
        note: 'Das README bietet außerdem einzeilige Shell-Installer an (curl an bash unter macOS, irm an iex unter Windows). Ein Skript in eine Shell zu leiten führt Code aus, den Sie nicht gelesen haben; nutzen Sie das nur, wenn Sie der Quelle vertrauen, oder laden Sie das Installationsprogramm von der Release-Seite. Die [Website](https://solomd.app) des Entwicklers hat eine Download-Seite; PromptQuorum hat keinen Installer ausgeführt und die Downloads nicht gescannt.',
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen',
        content: [
          '**SoloMD braucht Windows 10 oder neuer, macOS 10.15 oder neuer, ein aktuelles gängiges Linux, iOS 15 oder neuer oder Android 7 oder neuer; die KI-Funktionen brauchen einen lokalen Modellserver oder einen Cloud-API-Schlüssel.**',
          'Die Liste stammt aus dem README. Es nennt Installationsgrößen von etwa 14 MB unter Windows, 16 MB unter Linux, 21 MB unter Android und 30 MB für den universellen macOS-Build; PromptQuorum hat das nicht gemessen. Eine Untergrenze für RAM oder GPU wird nicht genannt, und der Bedarf lokaler Modelle hängt vom verwendeten Server ab.',
        ],
        columns: ['Punkt', 'Angegebener Wert'],
        rows: [
          { 'Punkt': 'Windows', 'Angegebener Wert': 'Windows 10+, x64 und ARM64' },
          { 'Punkt': 'macOS', 'Angegebener Wert': 'macOS 10.15+, Apple Silicon und Intel' },
          { 'Punkt': 'Linux', 'Angegebener Wert': 'x64 und ARM64' },
          { 'Punkt': 'iPhone / iPad', 'Angegebener Wert': 'iOS 15+ (App-Store-Eintrag: 15.0)' },
          { 'Punkt': 'Android', 'Angegebener Wert': 'Android 7+ (API 24)' },
          { 'Punkt': 'Lokale KI', 'Angegebener Wert': 'Ollama, LM Studio, Jan, vLLM oder llama.cpp' },
          { 'Punkt': 'Cloud-KI', 'Angegebener Wert': 'Eigener API-Schlüssel je Anbieter' },
        ],
        note: 'RAM- und GPU-Bedarf hängen vom geladenen Modell ab, und die App selbst nennt keine Untergrenze. Das README beschreibt den macOS-Build als signiert und notarisiert und sagt nichts zu den anderen Plattformen.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Kern von SoloMD ist ein ruhiger Markdown-Editor über einem Vault aus einfachen Dateien, mit KI-Chat, Suche, Export, Sync und MCP-Server drumherum.** Alle folgenden Punkte sind Angaben des Entwicklers aus README und Website.',
        ],
        items: [
          'Drei Schreibmodi: reines WYSIWYG, Live-Vorschau und eine synchronisierte geteilte oder Quellansicht, dazu Fokus- und Schreibmaschinenmodus, Vim-Modus, KaTeX-Formeln und Mermaid-Diagramme.',
          'Vault-Funktionen: [[Wikilinks]], Backlinks, YAML-Eigenschaften und Import von .docx-, .pdf-, .xlsx- und .pptx-Dateien per Drag-and-drop nach Markdown.',
          'AutoGit: Jedes Speichern legt einen Snapshot in einem lokalen Git-Repository im Workspace ab, mit visuellem Diff und Rollback mit einem Klick; libgit2 ist eingebaut, ein System-Git ist nicht nötig.',
          'Semantische Offline-Suche über den Vault mit einem Embedder auf dem Gerät; laut Entwickler ohne Modell-Download und ohne Netzwerkzugriffe.',
          'KI-Chat: ein Seitenpanel, das mit [[Wikilink]]-Quellenangaben über den Vault chattet, Umschreiben und Übersetzen einer Auswahl im Text und automatische Erkennung lokaler Ollama-, LM-Studio-, Jan-, vLLM- und llama.cpp-Server. Cloud-Anbieter nutzen Ihren eigenen Schlüssel, der im Schlüsselbund des Betriebssystems liegt.',
          'Export-Center: PDF, Word (.docx), HTML, EPUB, LaTeX, ODT, RTF, Klartext und Markdown, laut README ohne externe Pandoc-Installation.',
          'Sync je Workspace über iCloud Drive, OneDrive, WebDAV, S3-kompatiblen Speicher, Syncthing oder Git-Hosts, mit optionaler Ende-zu-Ende-Verschlüsselung auf Ihrem eigenen Speicher.',
          'Ein mitgelieferter MCP-Server mit 16 Werkzeugen (12 nur lesend, 4 Schreibwerkzeuge, die --allow-write brauchen), standardmäßig stdio und optional ein HTTP-Modus auf Loopback mit Bearer-Token, dazu eine Kommandozeilen-Schnittstelle und JSON-Erweiterungen.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Laut Entwickler bleiben Notizen im gewählten Ordner, sofern Sie keine Cloud-KI, keinen Sync und keinen Bilder-Host einrichten; die Datenschutzerklärung beschreibt zudem optionale anonyme Nutzungsereignisse in manchen Builds, die das README nicht erwähnt.**',
          'Laut Datenschutzerklärung (zuletzt aktualisiert am 18. April 2026) hat SoloMD kein Kontosystem und keine Werbung, und Notizen werden lokal gespeichert. Builds von der Website und aus Nicht-Apple-Stores senden beim Start und bei manchen Funktionen ein anonymes Ereignis an den eigenen Server des Entwicklers; es enthält Ereignisnamen, App-Version, Betriebssystem, Oberflächensprache und eine zufällige Kennung, und laut Erklärung nie Notizen, Dateinamen oder Pfade. Sie können das unter Einstellungen, Erweitert abschalten. Die App-Store-Builds senden keine Nutzungsdaten.',
          'KI-Anfragen gehen laut Erklärung und Sicherheitsseite direkt von Ihrem Rechner an den konfigurierten Anbieter oder an einen lokalen Server; die Sicherheitsseite sagt zudem, KI sei standardmäßig aus und API-Schlüssel lägen im Schlüsselbund des Betriebssystems. Sync, ein Bilder-Host und Git-Hosting senden Daten nur an die Dienste, die Sie einrichten.',
          'Das README sagt, das Projekt habe keine von SoloMD betriebenen Server, was neben dem Nutzungsereignis-Server der Erklärung widersprüchlich wirkt. Die Erklärung ist älter als die Sync-Optionen von v5.2, und die Sicherheitsseite stammt vom April 2026; prüfen Sie beides gegen die installierte App-Version. Weil der Code MIT-lizenziert und öffentlich ist, lässt sich der Datenfluss prüfen.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**SoloMD passt zu Menschen, die einfache Markdown-Dateien, einen ruhigen Editor und eingebaute KI ohne zusammengesuchte Plugins wollen.**',
        ],
        items: [
          'Schreibende und Notizen-Führende, die Dateien auf der eigenen Festplatte wollen, die andere Editoren öffnen können.',
          'Menschen, die über ihre Notizen mit einem lokalen Modell chatten möchten, etwa über Ollama oder LM Studio.',
          'Entwickler, die möchten, dass ein MCP-Client wie Claude Code oder Cursor Notizen in einem Vault liest, durchsucht oder schreibt.',
          'Nutzer, die dieselbe Notiz-App auf Desktop, iPhone und Android ohne bezahlten Sync-Dienst brauchen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        content: [
          '**SoloMD passt in manchen Situationen schlecht, und mehrere Angaben bleiben ungeprüft.**',
        ],
        items: [
          'Nicht geeignet: Teams, die einen Anbieter mit benanntem Unternehmen, Supportvertrag oder Service-Level-Bedingungen brauchen. Die gelesenen Seiten nennen weder Unternehmen noch Adresse noch Land.',
          'Nicht geeignet: Menschen, die eine lange Erfolgsbilanz brauchen. Das Repository wurde im April 2026 angelegt und hat einen Maintainer.',
          'Ungeprüft: Editorqualität, Exporttreue über die 9 Formate und Antwortqualität der KI. PromptQuorum hat die App nicht ausgeführt.',
          'Ungeprüft: Sync- und Ende-zu-Ende-Verschlüsselungsverhalten. Die Angaben stammen vom Entwickler, und PromptQuorum hat weder den Code geprüft noch den Sync getestet.',
          'Ungeprüft: ob die in der Datenschutzerklärung beschriebenen Nutzungsereignisse dem entsprechen, was jeder Build sendet, und wie die README-Aussage „keine gehosteten Server“ dazu passt.',
          'Ungeprüft: Funktionszahlen. Die ältere Sicherheitsseite nennt 14 KI-Anbieter und 6 standardmäßige MCP-Werkzeuge, das README über 20 Anbieter und 16 Werkzeuge; diese Rezension folgt dem README.',
          'Ungeprüft: das Unternehmen oder Land hinter dem Projekt, Nutzerzahlen und Bewertungen sowie unabhängige Tests. Es wurden keine gefunden, und die Vergleichsseiten des Entwicklers wurden nicht als unabhängig behandelt.',
          'Ungeprüft: ob die Windows-Installer codesigniert sind. Das README beschreibt nur den macOS-Build als signiert und notarisiert und sagt nichts zu den anderen Plattformen.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'SoloMD im Vergleich zu Alternativen',
        itemHeadings: true,
        content: [
          '**SoloMD konkurriert mit anderen Local-first-Notiz-Apps; PromptQuorum hat sie nicht praktisch miteinander verglichen.** Die folgenden Werkzeuge stehen im Verzeichnis und werden nach ihren eigenen Rezensionen beschrieben.',
        ],
        columns: ['Werkzeug', 'In Quellen genannt'],
        rows: [
          { 'Werkzeug': 'SoloMD', 'In Quellen genannt': 'MIT; 5 Plattformen; kostenlos; MCP-Server' },
          { 'Werkzeug': '[Hillnote](/de/power-local-llm/hillnote-review)', 'In Quellen genannt': 'Keine Lizenz genannt; 5 Plattformen; Freemium' },
          { 'Werkzeug': '[Tolaria](/de/power-local-llm/tolaria-review)', 'In Quellen genannt': 'AGPL-3.0; Desktop; Git-Vault; kostenlos' },
          { 'Werkzeug': '[Logseq](/de/power-local-llm/logseq-review)', 'In Quellen genannt': 'AGPL-3.0; Outliner; optionaler MCP-Server' },
          { 'Werkzeug': '[SiYuan](/de/power-local-llm/siyuan-review)', 'In Quellen genannt': 'AGPL-3.0; selbst gehostet; KI-Agent' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Ist SoloMD kostenlos?',
            a: 'Ja, laut Entwickler. Der Code steht unter MIT-Lizenz, alle Funktionen sind kostenlos, und es gibt kein Abonnement. Die Builds im Mac App Store, iOS App Store und bei Google Play bieten optionale einmalige Trinkgelder, die nur ein Unterstützer-Abzeichen freischalten. Cloud-KI-Anbieter, die Sie mit Ihrem eigenen Schlüssel nutzen, rechnen direkt mit Ihnen ab.',
          },
          {
            q: 'Funktioniert SoloMD mit Ollama oder LM Studio?',
            a: 'Laut README ja: Unter Einstellungen, KI gibt es eine Auto-Erkennung, die lokale Ollama-, LM-Studio-, Jan-, vLLM- und llama.cpp-Server auf localhost findet. Sie können auch einen Cloud-Anbieter mit eigenem API-Schlüssel hinzufügen. PromptQuorum hat die Erkennung nicht getestet.',
          },
          {
            q: 'Können Claude Code oder Cursor meine SoloMD-Notizen nutzen?',
            a: 'Ja, laut Entwickler. Der mitgelieferte Server solomd-mcp stellt 16 Werkzeuge bereit; die 12 Lese-Werkzeuge sind immer aktiv, die 4 Schreibwerkzeuge brauchen das Flag --allow-write. Das README zeigt einen Konfigurationsschnipsel und einen Befehl, der den Server bei den KI-Clients auf Ihrem Rechner einträgt. PromptQuorum hat das nicht getestet.',
          },
          {
            q: 'Wie installiere ich SoloMD?',
            a: 'Nehmen Sie das Installationsprogramm für Ihr System von der GitHub-Release-Seite oder nutzen Sie den Mac App Store, App Store, Google Play, Homebrew oder winget. Ziehen Sie ein Installationsprogramm den einzeiligen Shell-Skripten vor, sofern Sie der Quelle nicht vertrauen. PromptQuorum hat die Installation nicht ausgeführt.',
          },
          {
            q: 'Sendet SoloMD meine Notizen irgendwohin?',
            a: 'Laut Entwickler standardmäßig nicht: Notizen bleiben in Ihrem Ordner, und KI-Anfragen gehen an den gewählten Anbieter oder lokalen Server. Die Datenschutzerklärung ergänzt, dass Builds von der Website und aus Nicht-Apple-Stores anonyme Nutzungsereignisse senden, sofern Sie das nicht abschalten. Sync erreicht nur die Dienste, die Sie einrichten.',
          },
          {
            q: 'Welches Format nutzt SoloMD für Notizen?',
            a: 'Laut README einfache .md-Dateien in einem von Ihnen gewählten Ordner, sodass andere Markdown-Editoren sie öffnen können. Dazu kommen laut Entwickler Wikilinks, Backlinks und YAML-Eigenschaften sowie ein Drag-and-drop-Import von .docx-, .pdf-, .xlsx- und .pptx-Dateien nach Markdown. PromptQuorum hat den Import nicht getestet.',
          },
          {
            q: 'Welche Exportformate bietet SoloMD?',
            a: 'Laut README umfasst das Export-Center PDF, Word (.docx), HTML, EPUB, LaTeX, ODT, RTF, reinen Text und Markdown, ohne separate Pandoc-Installation. PromptQuorum hat die Qualität keines Exports geprüft.',
          },
          {
            q: 'Wie synchronisiert SoloMD Notizen zwischen Geräten?',
            a: 'Laut Entwickler pro Arbeitsbereich über iCloud Drive, OneDrive, WebDAV, S3-kompatiblen Speicher, Syncthing oder einen Git-Host, optional mit Ende-zu-Ende-Verschlüsselung auf Ihrem eigenen Speicher. PromptQuorum hat die Synchronisierung nicht getestet und die Verschlüsselung nicht geprüft.',
          },
          {
            q: 'Was ist AutoGit in SoloMD?',
            a: 'Der Entwickler beschreibt es so, dass bei jedem Speichern ein Snapshot in ein lokales Git-Repository im Arbeitsbereich committet wird, mit visuellem Diff und Rollback per Klick. libgit2 ist eingebaut, ein System-Git ist nicht nötig. PromptQuorum hat die Funktion nicht getestet.',
          },
          {
            q: 'Auf welchen Systemen läuft SoloMD?',
            a: 'Laut README auf Windows 10 oder neuer (x64 und ARM64), macOS 10.15 oder neuer, Linux (x64 und ARM64), iOS 15 oder neuer und Android 7 oder neuer. Das README nennt keine RAM- oder GPU-Untergrenze; der Bedarf lokaler Modelle hängt vom Server ab, den Sie betreiben.',
          },
          {
            q: 'Wer pflegt SoloMD, und wird es noch aktualisiert?',
            a: 'Das README nennt einen menschlichen Maintainer und gibt an, dass das Projekt überwiegend von Claude Code geschrieben, getestet und veröffentlicht wird. Das Repository ist jung, und auf den von PromptQuorum gelesenen Seiten sind weder Unternehmen noch Land genannt. Prüfen Sie die Releases-Seite auf die neueste Version, bevor Sie sich darauf verlassen.',
          },
          {
            q: 'Welche KI-Funktionen bietet SoloMD außer dem Chat?',
            a: 'Laut README das Umschreiben und Übersetzen einer markierten Passage direkt im Text, [[Wikilink]]-Quellenangaben im Chat-Panel und eine Offline-Semantiksuche über den Vault mit einem Embedder auf dem Gerät, der laut Entwickler keinen Modell-Download braucht. PromptQuorum hat die Antwortqualität nicht getestet.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**SoloMD ist einen Blick wert, wenn Sie einfache Markdown-Dateien, einen ruhigen Editor, Chat über Ihre Notizen mit lokalem oder eigenem Schlüssel und einen MCP-Server in einer kostenlosen App wollen.**',
          'Auf dem Papier deckt es viel ab: drei Bearbeitungsmodi, Backlinks, Suche auf dem Gerät, Export in 9 Formate, Apps für fünf Plattformen, Cloud- und Git-Sync, Erkennung lokaler Modelle und 16 MCP-Werkzeuge, mit v5.2.2 vom 16. November 2026 und einem Commit vom 17. November 2026.',
          'Die Abstriche sind real. Es ist ein junges Projekt mit einem Maintainer und einem öffentlich genannten KI-gestützten Entwicklungsprozess, es wird weder Unternehmen noch Land genannt, und die Seiten des Entwicklers widersprechen sich bei Telemetrie und Funktionszahlen. PromptQuorum hat die App nicht getestet; probieren Sie sie an einer Kopie eines kleinen Ordners aus, prüfen Sie die Datenschutzeinstellungen und den benötigten Export, bevor Sie sich darauf verlassen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[SoloMD-Website](https://solomd.app) — Funktionen, Plattformen und Downloads, geprüft am 17. November 2026.',
          '[Datenschutzerklärung](https://solomd.app/privacy) — Nutzungsereignisse und Datenverarbeitung, zuletzt aktualisiert am 18. April 2026, geprüft am 17. November 2026.',
          '[Sicherheitsseite](https://solomd.app/security) — KI, Schlüsselspeicherung und MCP-Umgang, datiert April 2026, geprüft am 17. November 2026.',
          '[Neuigkeiten](https://solomd.app/whats-new/) — Versionshinweise, geprüft am 17. November 2026.',
          '[GitHub-Repository](https://github.com/zhitongblog/solomd) — Lizenz, Erstellungsdatum und letzter Commit, geprüft am 17. November 2026.',
          '[README](https://github.com/zhitongblog/solomd#readme) — Funktionen, Installation, MCP-Werkzeuge und Datenschutz, geprüft am 17. November 2026.',
          '[Release v5.2.2](https://github.com/zhitongblog/solomd/releases/tag/v5.2.2) — neuestes Release, sein Datum und die Installationsdateien, geprüft am 17. November 2026.',
          '[App-Store-Eintrag](https://apps.apple.com/app/solomd/id6762498874) — iOS-Version, Preis und Mindestsystem, geprüft am 17. November 2026.',
          '[Google-Play-Eintrag](https://play.google.com/store/apps/details?id=app.solomd) — Android-Verfügbarkeit, geprüft am 17. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Hillnote-Rezension](/de/power-local-llm/hillnote-review) — Local-first-Markdown-Notizen mit KI auf dem Gerät für Mac, Windows und Smartphones.',
          '[Tolaria-Rezension](/de/power-local-llm/tolaria-review) — eine kostenlose Desktop-Notiz-App mit Markdown-Dateien in einem Git-gestützten Vault.',
          '[Logseq-Rezension](/de/power-local-llm/logseq-review) — ein quelloffener Local-first-Outliner mit optionalem MCP-Server.',
          '[SiYuan-Rezension](/de/power-local-llm/siyuan-review) — ein selbst gehosteter Wissensarbeitsplatz mit eingebautem KI-Agenten.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Tools.',
          '[GenOffice Rezension](/de/power-local-llm/genoffice-review) — eine kostenlose, quelloffene Desktop-Office-Suite für Word-, Excel- und PowerPoint-Dateien; die KI-Aufrufe gehen standardmäßig an einen Cloud-Anbieter.',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/solomd-review-hero-es.webp',
    title: 'Reseña de SoloMD: app de notas en Markdown gratuita con chat de IA para modelos locales y MCP',
    seoTitle: 'Reseña de SoloMD: notas Markdown, chat de IA y MCP',
    intro:
      'SoloMD es una app de notas en Markdown gratuita y con licencia MIT para macOS, Windows, Linux, iPhone, iPad y Android. Guarda las notas como archivos .md sencillos en una carpeta y añade chat de IA sobre esa carpeta, detección automática de modelos locales, exportación a 9 formatos y un servidor MCP incluido. Esta reseña se basa en el sitio web del desarrollador, su política de privacidad, el repositorio de GitHub, la página de versiones y las fichas de las tiendas, consultados el 17 de noviembre de 2026. PromptQuorum no ha probado la app personalmente.',
    metaDescription:
      'SoloMD: app de notas Markdown gratuita (MIT) con chat de IA sobre tu bóveda, detección de Ollama y LM Studio y servidor MCP. Instalación y privacidad.',
    twitterDescription:
      'SoloMD guarda las notas como archivos Markdown y añade chat con la bóveda, detección de modelos locales, exportación a 9 formatos y servidor MCP. Gratis, MIT. Qué está confirmado y qué no.',
    audience:
      'Personas que toman notas y escriben y quieren archivos Markdown sencillos con IA integrada, desarrolladores que conectan una bóveda de notas a clientes MCP y quienes evalúan una app de código abierto joven con un solo mantenedor',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de SoloMD',
    targetKeywords: [
      'reseña SoloMD',
      'app de notas Markdown con IA local',
      'servidor MCP SoloMD',
      'alternativa a Obsidian de código abierto',
      'alternativa gratuita a Typora',
      'instalar SoloMD',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**SoloMD es una app de notas en Markdown gratuita y de código abierto (MIT) que guarda las notas como archivos sencillos y añade chat de IA sobre tu bóveda, detección automática de modelos locales y un servidor MCP incluido.** Funciona en macOS, Windows, Linux, iPhone, iPad y Android, se instala con un instalador normal o desde una tienda de apps y, según su README, se conecta con Ollama, LM Studio, Jan, vLLM, llama.cpp o un proveedor en la nube con tu propia clave de API. Es un proyecto joven mantenido por un solo desarrollador, y PromptQuorum no lo ha probado.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es SoloMD y para quién es?',
        answer:
          'Según el desarrollador, SoloMD es un editor de Markdown y bóveda de notas con chat de IA integrado, búsqueda semántica sin conexión y servidor MCP. Encaja con quienes quieren sus notas como archivos sencillos en su propio disco y IA local o con clave propia sin buscar plugins.',
        bullets: [
          'Gratis y con licencia MIT; macOS, Windows, Linux, iOS, iPadOS y Android.',
          'Las notas son archivos .md sencillos; AutoGit guarda una instantánea local de Git en cada guardado.',
          'Chat de IA sobre la bóveda y reescritura en línea, con un servidor local como Ollama o un proveedor en la nube con tu propia clave.',
          'Servidor MCP incluido para Claude Desktop, Claude Code, Cursor y Windsurf; según el desarrollador, las herramientas de escritura están desactivadas hasta que las actives.',
          'Un solo mantenedor, repositorio creado en abril de 2026; las páginas del desarrollador se contradicen en telemetría y número de funciones.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Resumen', anchor: 'overview' },
      { label: 'Cómo conseguirlo', anchor: 'get-it' },
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
            text: 'SoloMD es una app de notas en Markdown gratuita que guarda tus notas como archivos sencillos y añade chat de IA, detección de modelos locales y un servidor MCP.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en un editor de Markdown tranquilo con una bóveda de notas enlazadas, donde un asistente de IA puede leer tus notas y responder preguntas sobre ellas. La IA puede ser un modelo que se ejecuta en tu equipo o un servicio en la nube que pagas con tu propia clave.',
          },
        ],
        items: [
          'Código abierto con licencia MIT y gratis; según el desarrollador no hay suscripción, y las propinas opcionales en las tiendas de apps solo desbloquean una insignia de colaborador.',
          'Funciona en macOS, Windows (x64 y ARM64), Linux (x64 y ARM64), iPhone, iPad y Android; hay instaladores o fichas de tienda para cada sistema.',
          'IA: chat sobre la bóveda, reescritura en línea y detección automática de Ollama, LM Studio, Jan, vLLM y llama.cpp en localhost, o un proveedor en la nube con tu propia clave.',
          'Según el README, un servidor MCP incluido expone 16 herramientas a Claude Desktop, Claude Code, Cursor y Windsurf; las 4 herramientas de escritura requieren una opción explícita.',
          'PromptQuorum no ha probado la app. La política de privacidad y el README discrepan sobre si se contacta con algún servidor de SoloMD.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Según la política de privacidad, las versiones del sitio web y de tiendas que no son de Apple envían eventos de uso anónimos al servidor del desarrollador salvo que lo desactives en Ajustes, mientras que las versiones de la App Store no envían ninguno. El README dice que no hay servidores alojados por SoloMD.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen',
        content: [
          '**SoloMD es una app de notas en Markdown que trata una carpeta sencilla de archivos .md como tu bóveda y le añade chat de IA, búsqueda, exportación y un servidor MCP.**',
          'El proyecto tiene licencia MIT y se desarrolla abiertamente en [github.com/zhitongblog/solomd](https://github.com/zhitongblog/solomd), donde el README lo describe como obra de un solo desarrollador. El repositorio se creó en abril de 2026. La última versión, v5.2.2, salió el 16 de noviembre de 2026 y el último commit es del 17 de noviembre de 2026, así que el desarrollo está activo y no se aplica ninguna advertencia de proyecto abandonado.',
          'Según el README, el editor está construido con Tauri 2, Vue 3, CodeMirror 6 y Rust. Ofrece tres modos de escritura (WYSIWYG puro, vista previa en vivo y vista dividida con código fuente), wikilinks y backlinks, un historial de versiones con Git por espacio de trabajo, búsqueda semántica en el dispositivo y un centro de exportación a PDF, Word, HTML, EPUB, LaTeX, ODT, RTF, texto sin formato y Markdown.',
          'El README también afirma que el proyecto lo escribe, prueba y publica en gran parte Claude Code bajo un mantenedor humano que decide qué se publica, y que las respuestas a los issues las redacta el mismo asistente. PromptQuorum lo recoge como declaración del propio desarrollador; el código es público y puede revisarse.',
          'Estas descripciones son afirmaciones del desarrollador. PromptQuorum no ha ejecutado la app y no ha comprobado la calidad del editor, la fidelidad de la exportación, el comportamiento de la sincronización ni la calidad de las respuestas de la IA.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirlo',
        content: [
          '**SoloMD se instala como cualquier app de escritorio o móvil: con un instalador, una ficha de tienda o un gestor de paquetes.**',
          'La versión v5.2.2 de GitHub incluye un .dmg universal para macOS, archivos .msi de Windows para x64 y ARM64 con zips portátiles, AppImage, .deb y .rpm para Linux en x64 y ARM64, y APK de Android. El README también menciona la Mac App Store, la App Store de iOS, Google Play, un cask de Homebrew, winget y un paquete del Arch User Repository.',
        ],
        columns: ['Plataforma', 'Cómo conseguirlo'],
        rows: [
          { 'Plataforma': '[macOS](https://github.com/zhitongblog/solomd/releases/latest)', 'Cómo conseguirlo': '.dmg universal, Mac App Store o cask de Homebrew' },
          { 'Plataforma': '[Windows](https://github.com/zhitongblog/solomd/releases/latest)', 'Cómo conseguirlo': '.msi (x64 o ARM64), zip portátil o winget' },
          { 'Plataforma': '[Linux](https://github.com/zhitongblog/solomd/releases/latest)', 'Cómo conseguirlo': 'AppImage, .deb o .rpm; paquete AUR' },
          { 'Plataforma': '[iPhone y iPad](https://apps.apple.com/app/solomd/id6762498874)', 'Cómo conseguirlo': 'Ficha de la App Store' },
          { 'Plataforma': '[Android](https://play.google.com/store/apps/details?id=app.solomd)', 'Cómo conseguirlo': 'Google Play o APK de la página de versiones' },
        ],
        note: 'El README también ofrece instaladores de una línea en la terminal (curl enviado a bash en macOS, irm enviado a iex en Windows). Enviar un script a una shell ejecuta código que no has leído, así que úsalos solo si confías en la fuente, o toma el instalador de la página de versiones. El [sitio web](https://solomd.app) del desarrollador tiene una página de descargas; PromptQuorum no ejecutó ningún instalador ni analizó las descargas.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**SoloMD necesita Windows 10 o posterior, macOS 10.15 o posterior, un Linux actual de uso general, iOS 15 o posterior, o Android 7 o posterior; las funciones de IA necesitan un servidor de modelos local o una clave de API en la nube.**',
          'La lista procede del README. Publica tamaños de instalador de unos 14 MB en Windows, 16 MB en Linux, 21 MB en Android y 30 MB para la versión universal de macOS, que PromptQuorum no midió. No se publica un mínimo de RAM ni de GPU, y las necesidades de los modelos locales dependen del servidor que uses.',
        ],
        columns: ['Elemento', 'Dato indicado'],
        rows: [
          { 'Elemento': 'Windows', 'Dato indicado': 'Windows 10+, x64 y ARM64' },
          { 'Elemento': 'macOS', 'Dato indicado': 'macOS 10.15+, Apple Silicon e Intel' },
          { 'Elemento': 'Linux', 'Dato indicado': 'x64 y ARM64' },
          { 'Elemento': 'iPhone / iPad', 'Dato indicado': 'iOS 15+ (ficha de la App Store: 15.0)' },
          { 'Elemento': 'Android', 'Dato indicado': 'Android 7+ (API 24)' },
          { 'Elemento': 'IA local', 'Dato indicado': 'Ollama, LM Studio, Jan, vLLM o llama.cpp' },
          { 'Elemento': 'IA en la nube', 'Dato indicado': 'Tu propia clave de API por proveedor' },
        ],
        note: 'Las necesidades de RAM y GPU dependen del modelo que cargues, y la propia app no publica un mínimo. El README describe la versión de macOS como firmada y notarizada y no dice nada de las demás plataformas.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El núcleo de SoloMD es un editor de Markdown tranquilo sobre una bóveda de archivos sencillos, con chat de IA, búsqueda, exportación, sincronización y servidor MCP alrededor.** Todos los puntos siguientes son afirmaciones del desarrollador tomadas del README y del sitio web.',
        ],
        items: [
          'Tres modos de escritura: WYSIWYG puro, vista previa en vivo y una vista dividida o de código fuente sincronizada, además de modos de enfoque y máquina de escribir, modo Vim, fórmulas KaTeX y diagramas Mermaid.',
          'Funciones de la bóveda: [[wikilinks]], backlinks, propiedades YAML e importación a Markdown de archivos .docx, .pdf, .xlsx y .pptx arrastrándolos.',
          'AutoGit: cada guardado confirma una instantánea en un repositorio Git local dentro del espacio de trabajo, con diff visual y reversión con un clic; libgit2 va integrado, así que no hace falta Git en el sistema.',
          'Búsqueda semántica sin conexión sobre la bóveda con un embedder en el dispositivo; el desarrollador dice que no requiere descargar modelos ni hace llamadas de red.',
          'Chat de IA: un panel lateral que conversa sobre la bóveda con citas [[wikilink]], reescritura y traducción en línea de una selección, y detección automática de servidores locales de Ollama, LM Studio, Jan, vLLM y llama.cpp. Los proveedores en la nube usan tu propia clave, guardada en el llavero del sistema operativo.',
          'Centro de exportación: PDF, Word (.docx), HTML, EPUB, LaTeX, ODT, RTF, texto sin formato y Markdown, sin instalar Pandoc aparte, según el README.',
          'Sincronización por espacio de trabajo mediante iCloud Drive, OneDrive, WebDAV, almacenamiento compatible con S3, Syncthing o servidores Git, con cifrado de extremo a extremo opcional en tu propio almacenamiento.',
          'Un servidor MCP incluido con 16 herramientas (12 de solo lectura y 4 de escritura que requieren --allow-write), stdio por defecto y un modo HTTP opcional en loopback con token, además de una interfaz de línea de comandos y extensiones JSON.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**Según el desarrollador, las notas permanecen en la carpeta que elijas salvo que configures IA en la nube, sincronización o un alojamiento de imágenes, y la política de privacidad describe además eventos de uso anónimos opcionales en algunas versiones, que el README no menciona.**',
          'Según la política de privacidad (actualizada por última vez el 18 de abril de 2026), SoloMD no tiene sistema de cuentas ni publicidad, y las notas se guardan localmente. Las versiones descargadas del sitio web y de tiendas que no son de Apple envían un evento anónimo al servidor propio del desarrollador al arrancar y al usar algunas funciones; contiene el nombre del evento, la versión de la app, el sistema operativo, el idioma de la interfaz y un identificador aleatorio, y según la política nunca incluye notas, nombres de archivo ni rutas. Puedes desactivarlo en Ajustes, Avanzado. Las versiones de la App Store no envían datos de uso.',
          'Las solicitudes de IA van directamente desde tu equipo al proveedor que configures o a un servidor local, según la política y la página de seguridad, que además dice que la IA está desactivada por defecto y que las claves de API se guardan en el llavero del sistema operativo. La sincronización, un alojamiento de imágenes y el alojamiento Git envían datos solo a los servicios que configures.',
          'El README dice que el proyecto no tiene servidores alojados por SoloMD, lo que encaja mal con el servidor de eventos de uso de la política. La política es anterior a las opciones de sincronización de v5.2 y la página de seguridad es de abril de 2026; compruébalas con la versión de la app que instales. Como el código tiene licencia MIT y es público, el flujo de datos puede auditarse.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**SoloMD encaja con quienes quieren archivos Markdown sencillos, un editor tranquilo e IA integrada sin armar plugins.**',
        ],
        items: [
          'Personas que escriben y toman notas y quieren archivos en su propio disco que otros editores puedan abrir.',
          'Quienes quieren chatear sobre sus notas con un modelo local, por ejemplo servido por Ollama o LM Studio.',
          'Desarrolladores que quieren que un cliente MCP como Claude Code o Cursor lea, busque o escriba notas en una bóveda.',
          'Usuarios que necesitan la misma app de notas en escritorio, iPhone y Android sin un servicio de sincronización de pago.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        content: [
          '**SoloMD no encaja bien en algunos casos, y varios detalles siguen sin verificarse.**',
        ],
        items: [
          'No encaja: equipos que necesitan un proveedor con empresa identificada, contrato de soporte o condiciones de nivel de servicio. Las páginas leídas no nombran empresa, dirección ni país.',
          'No encaja: quienes necesitan un largo historial. El repositorio se creó en abril de 2026 y tiene un solo mantenedor.',
          'Sin verificar: calidad del editor, fidelidad de la exportación en los 9 formatos y calidad de las respuestas de la IA. PromptQuorum no ha ejecutado la app.',
          'Sin verificar: el comportamiento de la sincronización y del cifrado de extremo a extremo. Las afirmaciones son del desarrollador, y PromptQuorum no auditó el código ni probó la sincronización.',
          'Sin verificar: si los eventos de uso descritos en la política de privacidad coinciden con lo que envía cada versión, y cómo encaja la afirmación del README de «sin servidores alojados».',
          'Sin verificar: los recuentos de funciones. La página de seguridad, más antigua, indica 14 proveedores de IA y 6 herramientas MCP por defecto, mientras que el README indica más de 20 proveedores y 16 herramientas; esta reseña sigue el README.',
          'Sin verificar: la empresa o el país detrás del proyecto, el número de usuarios y las valoraciones, y reseñas independientes. No se encontró ninguna, y las páginas comparativas del propio desarrollador no se trataron como independientes.',
          'Sin verificar: si los instaladores de Windows están firmados. El README solo describe la versión de macOS como firmada y notarizada y no dice nada de las demás plataformas.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'SoloMD frente a las alternativas',
        itemHeadings: true,
        content: [
          '**SoloMD compite con otras apps de notas con enfoque local; PromptQuorum no las ha comparado en la práctica.** Las herramientas siguientes están en el directorio y se describen según sus propias reseñas.',
        ],
        columns: ['Herramienta', 'Según las fuentes'],
        rows: [
          { 'Herramienta': 'SoloMD', 'Según las fuentes': 'MIT; 5 plataformas; gratis; servidor MCP' },
          { 'Herramienta': '[Hillnote](/es/power-local-llm/hillnote-review)', 'Según las fuentes': 'Sin licencia indicada; 5 plataformas; freemium' },
          { 'Herramienta': '[Tolaria](/es/power-local-llm/tolaria-review)', 'Según las fuentes': 'AGPL-3.0; escritorio; bóveda con Git; gratis' },
          { 'Herramienta': '[Logseq](/es/power-local-llm/logseq-review)', 'Según las fuentes': 'AGPL-3.0; outliner; servidor MCP opcional' },
          { 'Herramienta': '[SiYuan](/es/power-local-llm/siyuan-review)', 'Según las fuentes': 'AGPL-3.0; autoalojado; agente de IA' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿SoloMD es gratis?',
            a: 'Sí, según el desarrollador. El código tiene licencia MIT, todas las funciones son gratuitas y no hay suscripción. Las versiones de la Mac App Store, la App Store de iOS y Google Play ofrecen propinas únicas opcionales que solo desbloquean una insignia de colaborador. Los proveedores de IA en la nube a los que accedas con tu propia clave te facturan directamente.',
          },
          {
            q: '¿SoloMD funciona con Ollama o LM Studio?',
            a: 'Según el README, sí: en Ajustes, IA hay una opción de detección automática que encuentra servidores locales de Ollama, LM Studio, Jan, vLLM y llama.cpp en localhost. También puedes añadir un proveedor en la nube con tu propia clave de API. PromptQuorum no ha probado la detección.',
          },
          {
            q: '¿Pueden Claude Code o Cursor usar mis notas de SoloMD?',
            a: 'Sí, según el desarrollador. El servidor solomd-mcp incluido expone 16 herramientas; las 12 de lectura están siempre activas y las 4 de escritura requieren la opción --allow-write. El README muestra un fragmento de configuración y un comando que registra el servidor en los clientes de IA de tu equipo. PromptQuorum no lo ha probado.',
          },
          {
            q: '¿Cómo instalo SoloMD?',
            a: 'Toma el instalador de tu sistema de la página de versiones de GitHub, o usa la Mac App Store, la App Store, Google Play, Homebrew o winget. Prefiere un instalador a los scripts de una línea salvo que confíes en la fuente. PromptQuorum no ejecutó la instalación.',
          },
          {
            q: '¿SoloMD envía mis notas a algún sitio?',
            a: 'Por defecto no, según el desarrollador: las notas permanecen en tu carpeta y las solicitudes de IA van al proveedor o servidor local que elijas. La política de privacidad añade que las versiones del sitio web y de tiendas que no son de Apple envían eventos de uso anónimos salvo que los desactives. La sincronización solo llega a los servicios que configures.',
          },
          {
            q: '¿Qué formato usa SoloMD para las notas?',
            a: 'Según el README, archivos .md sencillos en una carpeta que tú eliges, de modo que otros editores de Markdown puedan abrirlos. El desarrollador añade wikilinks, backlinks y propiedades YAML, además de la importación por arrastrar y soltar de archivos .docx, .pdf, .xlsx y .pptx a Markdown. PromptQuorum no ha probado la importación.',
          },
          {
            q: '¿Qué formatos de exportación ofrece SoloMD?',
            a: 'Según el README, el centro de exportación abarca PDF, Word (.docx), HTML, EPUB, LaTeX, ODT, RTF, texto sin formato y Markdown, sin instalar Pandoc aparte. PromptQuorum no ha comprobado la fidelidad de ninguna exportación.',
          },
          {
            q: '¿Cómo sincroniza SoloMD las notas entre dispositivos?',
            a: 'Por espacio de trabajo, mediante iCloud Drive, OneDrive, WebDAV, almacenamiento compatible con S3, Syncthing o un servicio Git, según el desarrollador, con cifrado de extremo a extremo opcional en tu propio almacenamiento. PromptQuorum no ha probado la sincronización ni auditado el cifrado.',
          },
          {
            q: '¿Qué es AutoGit en SoloMD?',
            a: 'El desarrollador lo describe como una instantánea que se guarda en un repositorio Git local del espacio de trabajo en cada guardado, con diferencias visuales y reversión con un clic. libgit2 viene integrado, así que no hace falta Git en el sistema. PromptQuorum no ha probado la función.',
          },
          {
            q: '¿En qué sistemas funciona SoloMD?',
            a: 'Según el README: Windows 10 o posterior (x64 y ARM64), macOS 10.15 o posterior, Linux (x64 y ARM64), iOS 15 o posterior y Android 7 o posterior. El README no publica un mínimo de RAM ni de GPU; las necesidades de los modelos locales dependen del servidor que uses.',
          },
          {
            q: '¿Quién mantiene SoloMD y se sigue actualizando?',
            a: 'El README describe a un único responsable humano y afirma que el proyecto está escrito, probado y publicado en gran parte por Claude Code. El repositorio es joven y las páginas que leyó PromptQuorum no nombran ninguna empresa ni país. Consulta la página de versiones para ver la última antes de confiar en él.',
          },
          {
            q: '¿Qué funciones de IA tiene SoloMD además del chat?',
            a: 'Según el README: reescritura y traducción en línea de un fragmento seleccionado, citas con [[wikilinks]] en el panel de chat y búsqueda semántica sin conexión sobre la bóveda con un modelo de incrustación en el propio equipo que, según el desarrollador, no requiere descargar ningún modelo. PromptQuorum no ha probado la calidad de las respuestas.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**SoloMD merece una mirada si quieres archivos Markdown sencillos, un editor tranquilo, chat sobre tus notas con un modelo local o con clave propia y un servidor MCP en una sola app gratuita.**',
          'Sobre el papel cubre mucho: tres modos de edición, backlinks, búsqueda en el dispositivo, exportación a 9 formatos, apps para cinco plataformas, sincronización en la nube y con Git, detección de modelos locales y 16 herramientas MCP, con v5.2.2 publicada el 16 de noviembre de 2026 y un commit el 17 de noviembre de 2026.',
          'Las contrapartidas son reales. Es un proyecto joven con un solo mantenedor y un proceso de desarrollo con IA declarado públicamente, no se nombra empresa ni país, y las páginas del propio desarrollador se contradicen en telemetría y número de funciones. PromptQuorum no ha probado la app, así que pruébala con una copia de una carpeta pequeña, revisa los ajustes de privacidad y comprueba la exportación que necesitas antes de depender de ella.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de SoloMD](https://solomd.app) — funciones, plataformas y descargas, consultado el 17 de noviembre de 2026.',
          '[Política de privacidad](https://solomd.app/privacy) — eventos de uso y tratamiento de datos, actualizada el 18 de abril de 2026, consultada el 17 de noviembre de 2026.',
          '[Página de seguridad](https://solomd.app/security) — IA, almacenamiento de claves y gestión de MCP, fechada en abril de 2026, consultada el 17 de noviembre de 2026.',
          '[Novedades](https://solomd.app/whats-new/) — notas de versión, consultadas el 17 de noviembre de 2026.',
          '[Repositorio de GitHub](https://github.com/zhitongblog/solomd) — licencia, fecha de creación y último commit, consultado el 17 de noviembre de 2026.',
          '[README](https://github.com/zhitongblog/solomd#readme) — funciones, instalación, herramientas MCP y privacidad, consultado el 17 de noviembre de 2026.',
          '[Versión v5.2.2](https://github.com/zhitongblog/solomd/releases/tag/v5.2.2) — última versión, su fecha y los archivos de instalación, consultada el 17 de noviembre de 2026.',
          '[Ficha de la App Store](https://apps.apple.com/app/solomd/id6762498874) — versión de iOS, precio y sistema mínimo, consultada el 17 de noviembre de 2026.',
          '[Ficha de Google Play](https://play.google.com/store/apps/details?id=app.solomd) — disponibilidad en Android, consultada el 17 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Hillnote](/es/power-local-llm/hillnote-review) — notas Markdown con almacenamiento local como prioridad y IA en el dispositivo para Mac, Windows y móviles.',
          '[Reseña de Tolaria](/es/power-local-llm/tolaria-review) — una app de notas de escritorio gratuita con archivos Markdown en una bóveda respaldada por Git.',
          '[Reseña de Logseq](/es/power-local-llm/logseq-review) — un outliner de código abierto que prioriza el almacenamiento local, con servidor MCP opcional.',
          '[Reseña de SiYuan](/es/power-local-llm/siyuan-review) — un espacio de conocimiento autoalojado con agente de IA integrado.',
          '[Directorio de software LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
          '[Reseña de GenOffice](/es/power-local-llm/genoffice-review) — una suite ofimática de escritorio gratuita y de código abierto para archivos de Word, Excel y PowerPoint; las llamadas de IA van por defecto a un proveedor en la nube.',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/solomd-review-hero-fr.webp',
    title: 'Avis sur SoloMD : application de notes Markdown gratuite avec chat IA pour modèles locaux et MCP',
    seoTitle: 'Avis sur SoloMD : notes Markdown, chat IA et MCP',
    intro:
      'SoloMD est une application de notes Markdown gratuite, sous licence MIT, pour macOS, Windows, Linux, iPhone, iPad et Android. Elle conserve les notes sous forme de simples fichiers .md dans un dossier et ajoute un chat IA sur ce dossier, la détection automatique des modèles locaux, l\'export en 9 formats et un serveur MCP intégré. Cet avis s\'appuie sur le site du développeur, sa politique de confidentialité, le dépôt GitHub, la page des versions et les fiches des boutiques, consultés le 17 novembre 2026. PromptQuorum n\'a pas testé l\'application.',
    metaDescription:
      'SoloMD : app de notes Markdown gratuite (MIT), chat IA sur votre coffre, détection d\'Ollama et LM Studio, serveur MCP. Installation, confidentialité.',
    twitterDescription:
      'SoloMD garde les notes en fichiers Markdown et ajoute chat sur le coffre, détection des modèles locaux, export en 9 formats et serveur MCP. Gratuit, MIT. Ce qui est confirmé et ce qui ne l\'est pas.',
    audience:
      'Personnes qui prennent des notes ou écrivent et veulent de simples fichiers Markdown avec IA intégrée, développeurs qui relient un coffre de notes à des clients MCP, et toute personne qui évalue une jeune application open source gérée par un seul mainteneur',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'avis sur SoloMD',
    targetKeywords: [
      'avis SoloMD',
      'application de notes Markdown IA locale',
      'serveur MCP SoloMD',
      'alternative open source à Obsidian',
      'alternative gratuite à Typora',
      'installer SoloMD',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**SoloMD est une application de notes Markdown gratuite et open source (MIT) qui conserve les notes sous forme de simples fichiers et ajoute un chat IA sur votre coffre, la détection automatique des modèles locaux et un serveur MCP intégré.** Elle fonctionne sur macOS, Windows, Linux, iPhone, iPad et Android, s\'installe avec un installateur classique ou depuis une boutique d\'applications, et, selon son README, dialogue avec Ollama, LM Studio, Jan, vLLM, llama.cpp ou un fournisseur cloud avec votre propre clé d\'API. Le projet est jeune et géré par un seul développeur, et PromptQuorum ne l\'a pas testé.',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce que SoloMD et à qui s\'adresse-t-il ?',
        answer:
          'Selon le développeur, SoloMD est un éditeur Markdown et un coffre de notes avec chat IA intégré, recherche sémantique hors ligne et serveur MCP. Il convient à ceux qui veulent leurs notes en simples fichiers sur leur propre disque et une IA locale ou avec clé personnelle sans chercher de plugins.',
        bullets: [
          'Gratuit et sous licence MIT ; macOS, Windows, Linux, iOS, iPadOS et Android.',
          'Les notes sont de simples fichiers .md ; AutoGit enregistre un instantané Git local à chaque sauvegarde.',
          'Chat IA sur le coffre et réécriture en ligne, avec un serveur local comme Ollama ou un fournisseur cloud avec votre propre clé.',
          'Serveur MCP intégré pour Claude Desktop, Claude Code, Cursor et Windsurf ; selon le développeur, les outils d\'écriture sont désactivés tant que vous ne les activez pas.',
          'Un seul mainteneur, dépôt créé en avril 2026 ; les pages du développeur se contredisent sur la télémétrie et le nombre de fonctions.',
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
            text: 'SoloMD est une application de notes Markdown gratuite qui garde vos notes en simples fichiers et ajoute chat IA, détection des modèles locaux et serveur MCP.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-la comme un éditeur Markdown sobre avec un coffre de notes reliées, où un assistant IA peut lire vos notes et répondre à des questions à leur sujet. L\'IA peut être un modèle qui tourne sur votre ordinateur ou un service cloud que vous payez avec votre propre clé.',
          },
        ],
        items: [
          'Open source sous licence MIT et gratuit ; selon le développeur, il n\'y a pas d\'abonnement, et les pourboires facultatifs dans les boutiques ne débloquent qu\'un badge de soutien.',
          'Fonctionne sur macOS, Windows (x64 et ARM64), Linux (x64 et ARM64), iPhone, iPad et Android ; des installateurs ou des fiches de boutique existent pour chaque système.',
          'IA : chat sur le coffre, réécriture en ligne et détection automatique d\'Ollama, LM Studio, Jan, vLLM et llama.cpp sur localhost, ou fournisseur cloud avec votre propre clé.',
          'D\'après le README, un serveur MCP intégré expose 16 outils à Claude Desktop, Claude Code, Cursor et Windsurf ; les 4 outils d\'écriture exigent une option explicite.',
          'PromptQuorum n\'a pas testé l\'application. La politique de confidentialité et le README divergent sur le point de savoir si un serveur SoloMD est contacté.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Selon la politique de confidentialité, les versions du site web et des boutiques hors Apple envoient des événements d\'usage anonymes au serveur du développeur sauf si vous les désactivez dans les réglages, alors que les versions App Store n\'en envoient aucun. Le README indique qu\'il n\'y a aucun serveur hébergé par SoloMD.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Présentation',
        content: [
          '**SoloMD est une application de notes Markdown qui traite un simple dossier de fichiers .md comme votre coffre et y ajoute chat IA, recherche, export et serveur MCP.**',
          'Le projet est sous licence MIT et développé ouvertement sur [github.com/zhitongblog/solomd](https://github.com/zhitongblog/solomd), où le README le décrit comme l\'œuvre d\'un seul développeur. Le dépôt a été créé en avril 2026. La dernière version, v5.2.2, est parue le 16 novembre 2026 et le dernier commit date du 17 novembre 2026 : le développement est actif et aucun avertissement de projet abandonné ne s\'applique.',
          'D\'après le README, l\'éditeur est construit avec Tauri 2, Vue 3, CodeMirror 6 et Rust. Il propose trois modes d\'écriture (WYSIWYG pur, aperçu en direct et vue source scindée), des wikiliens et des rétroliens, un historique des versions adossé à Git par espace de travail, une recherche sémantique sur l\'appareil et un centre d\'export vers PDF, Word, HTML, EPUB, LaTeX, ODT, RTF, texte brut et Markdown.',
          'Le README indique aussi que le projet est écrit, testé et publié en grande partie par Claude Code sous la direction d\'un mainteneur humain qui décide de ce qui sort, et que les réponses aux tickets sont rédigées par le même assistant. PromptQuorum le rapporte comme une déclaration du développeur ; le code est public et peut être examiné.',
          'Ces descriptions sont des déclarations du développeur. PromptQuorum n\'a pas exécuté l\'application et n\'a vérifié ni la qualité de l\'éditeur, ni la fidélité de l\'export, ni le comportement de la synchronisation, ni la qualité des réponses de l\'IA.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Comment l\'obtenir',
        content: [
          '**SoloMD s\'installe comme n\'importe quelle application de bureau ou mobile : par un installateur, une fiche de boutique ou un gestionnaire de paquets.**',
          'La version v5.2.2 sur GitHub fournit un .dmg universel pour macOS, des fichiers .msi Windows pour x64 et ARM64 avec des zips portables, des fichiers AppImage, .deb et .rpm pour Linux en x64 et ARM64, ainsi que des APK Android. Le README mentionne aussi le Mac App Store, l\'App Store iOS, Google Play, un cask Homebrew, winget et un paquet de l\'Arch User Repository.',
        ],
        columns: ['Plateforme', 'Comment l\'obtenir'],
        rows: [
          { 'Plateforme': '[macOS](https://github.com/zhitongblog/solomd/releases/latest)', 'Comment l\'obtenir': '.dmg universel, Mac App Store ou cask Homebrew' },
          { 'Plateforme': '[Windows](https://github.com/zhitongblog/solomd/releases/latest)', 'Comment l\'obtenir': '.msi (x64 ou ARM64), zip portable ou winget' },
          { 'Plateforme': '[Linux](https://github.com/zhitongblog/solomd/releases/latest)', 'Comment l\'obtenir': 'AppImage, .deb ou .rpm ; paquet AUR' },
          { 'Plateforme': '[iPhone et iPad](https://apps.apple.com/app/solomd/id6762498874)', 'Comment l\'obtenir': 'Fiche App Store' },
          { 'Plateforme': '[Android](https://play.google.com/store/apps/details?id=app.solomd)', 'Comment l\'obtenir': 'Google Play ou APK de la page des versions' },
        ],
        note: 'Le README propose aussi des installateurs en une ligne de shell (curl envoyé à bash sous macOS, irm envoyé à iex sous Windows). Envoyer un script à un shell exécute du code que vous n\'avez pas lu : n\'y recourez que si vous faites confiance à la source, ou prenez l\'installateur sur la page des versions. Le [site web](https://solomd.app) du développeur a une page de téléchargement ; PromptQuorum n\'a exécuté aucun installateur ni analysé les téléchargements.',
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise',
        content: [
          '**SoloMD exige Windows 10 ou ultérieur, macOS 10.15 ou ultérieur, un Linux courant récent, iOS 15 ou ultérieur, ou Android 7 ou ultérieur ; les fonctions d\'IA nécessitent un serveur de modèles local ou une clé d\'API cloud.**',
          'La liste provient du README. Il publie des tailles d\'installateur d\'environ 14 MB sous Windows, 16 MB sous Linux, 21 MB sous Android et 30 MB pour la version universelle macOS, que PromptQuorum n\'a pas mesurées. Aucun minimum de RAM ou de GPU n\'est publié, et les besoins des modèles locaux dépendent du serveur que vous utilisez.',
        ],
        columns: ['Élément', 'Valeur indiquée'],
        rows: [
          { 'Élément': 'Windows', 'Valeur indiquée': 'Windows 10+, x64 et ARM64' },
          { 'Élément': 'macOS', 'Valeur indiquée': 'macOS 10.15+, Apple Silicon et Intel' },
          { 'Élément': 'Linux', 'Valeur indiquée': 'x64 et ARM64' },
          { 'Élément': 'iPhone / iPad', 'Valeur indiquée': 'iOS 15+ (fiche App Store : 15.0)' },
          { 'Élément': 'Android', 'Valeur indiquée': 'Android 7+ (API 24)' },
          { 'Élément': 'IA locale', 'Valeur indiquée': 'Ollama, LM Studio, Jan, vLLM ou llama.cpp' },
          { 'Élément': 'IA cloud', 'Valeur indiquée': 'Votre propre clé d\'API par fournisseur' },
        ],
        note: 'Les besoins en RAM et en GPU dépendent du modèle chargé, et l\'application elle-même ne publie aucun minimum. Le README décrit la version macOS comme signée et notariée et ne dit rien des autres plateformes.',
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**Le cœur de SoloMD est un éditeur Markdown sobre sur un coffre de simples fichiers, entouré de chat IA, recherche, export, synchronisation et serveur MCP.** Tous les points ci-dessous sont des déclarations du développeur issues du README et du site.',
        ],
        items: [
          'Trois modes d\'écriture : WYSIWYG pur, aperçu en direct et vue scindée ou source synchronisée, plus modes focus et machine à écrire, mode Vim, formules KaTeX et diagrammes Mermaid.',
          'Fonctions du coffre : [[wikiliens]], rétroliens, propriétés YAML et import de fichiers .docx, .pdf, .xlsx et .pptx vers Markdown par glisser-déposer.',
          'AutoGit : chaque sauvegarde enregistre un instantané dans un dépôt Git local de l\'espace de travail, avec diff visuel et retour arrière en un clic ; libgit2 est intégré, aucun Git système n\'est nécessaire.',
          'Recherche sémantique hors ligne sur le coffre avec un modèle d\'embedding sur l\'appareil ; le développeur indique qu\'il n\'exige aucun téléchargement de modèle et aucun appel réseau.',
          'Chat IA : un panneau latéral qui dialogue sur le coffre avec des citations [[wikilien]], réécriture et traduction d\'une sélection en ligne, et détection automatique des serveurs locaux Ollama, LM Studio, Jan, vLLM et llama.cpp. Les fournisseurs cloud utilisent votre propre clé, stockée dans le trousseau du système.',
          'Centre d\'export : PDF, Word (.docx), HTML, EPUB, LaTeX, ODT, RTF, texte brut et Markdown, sans installation externe de Pandoc, selon le README.',
          'Synchronisation par espace de travail via iCloud Drive, OneDrive, WebDAV, stockage compatible S3, Syncthing ou hébergeurs Git, avec chiffrement de bout en bout facultatif sur votre propre stockage.',
          'Un serveur MCP intégré de 16 outils (12 en lecture seule, 4 outils d\'écriture qui exigent --allow-write), stdio par défaut et mode HTTP facultatif en loopback avec jeton, plus une interface en ligne de commande et des extensions JSON.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**Selon le développeur, les notes restent dans le dossier que vous choisissez, sauf si vous configurez une IA cloud, la synchronisation ou un hébergeur d\'images ; la politique de confidentialité décrit en outre des événements d\'usage anonymes facultatifs dans certaines versions, ce que le README ne mentionne pas.**',
          'Selon la politique de confidentialité (dernière mise à jour le 18 avril 2026), SoloMD n\'a ni système de comptes ni publicité, et les notes sont stockées localement. Les versions téléchargées depuis le site et les boutiques hors Apple envoient un événement anonyme au serveur du développeur au démarrage et lors de l\'usage de certaines fonctions ; il contient le nom de l\'événement, la version de l\'application, le système d\'exploitation, la langue de l\'interface et un identifiant aléatoire, et selon la politique jamais de notes, de noms de fichiers ni de chemins. Vous pouvez le désactiver dans Réglages, Avancé. Les versions App Store n\'envoient aucune donnée d\'usage.',
          'Les requêtes d\'IA partent directement de votre machine vers le fournisseur configuré ou vers un serveur local, selon la politique et la page de sécurité, qui ajoute que l\'IA est désactivée par défaut et que les clés d\'API sont dans le trousseau du système. La synchronisation, un hébergeur d\'images et l\'hébergement Git n\'envoient de données qu\'aux services que vous configurez.',
          'Le README dit que le projet n\'a aucun serveur hébergé par SoloMD, ce qui cadre mal avec le serveur d\'événements d\'usage de la politique. La politique est antérieure aux options de synchronisation de la v5.2 et la page de sécurité date d\'avril 2026 ; vérifiez les deux par rapport à la version installée. Le code étant sous licence MIT et public, le flux de données peut être audité.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        content: [
          '**SoloMD convient à ceux qui veulent de simples fichiers Markdown, un éditeur sobre et une IA intégrée sans assembler des plugins.**',
        ],
        items: [
          'Les personnes qui écrivent ou prennent des notes et veulent des fichiers sur leur propre disque que d\'autres éditeurs peuvent ouvrir.',
          'Ceux qui veulent dialoguer avec leurs notes grâce à un modèle local, par exemple servi par Ollama ou LM Studio.',
          'Les développeurs qui veulent qu\'un client MCP comme Claude Code ou Cursor lise, recherche ou écrive des notes dans un coffre.',
          'Les utilisateurs qui ont besoin de la même application de notes sur ordinateur, iPhone et Android sans service de synchronisation payant.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        content: [
          '**SoloMD convient mal dans certains cas, et plusieurs points restent non vérifiés.**',
        ],
        items: [
          'Ne convient pas : les équipes qui exigent un éditeur avec entreprise identifiée, contrat de support ou niveaux de service. Les pages lues ne nomment ni entreprise, ni adresse, ni pays.',
          'Ne convient pas : ceux qui ont besoin d\'un long historique. Le dépôt a été créé en avril 2026 et n\'a qu\'un mainteneur.',
          'Non vérifié : qualité de l\'éditeur, fidélité de l\'export sur les 9 formats et qualité des réponses de l\'IA. PromptQuorum n\'a pas exécuté l\'application.',
          'Non vérifié : comportement de la synchronisation et du chiffrement de bout en bout. Les affirmations sont celles du développeur, et PromptQuorum n\'a ni audité le code ni testé la synchronisation.',
          'Non vérifié : si les événements d\'usage décrits dans la politique de confidentialité correspondent à ce que chaque version envoie, et comment l\'affirmation du README « aucun serveur hébergé » s\'y accorde.',
          'Non vérifié : les décomptes de fonctions. La page de sécurité, plus ancienne, cite 14 fournisseurs d\'IA et 6 outils MCP par défaut, tandis que le README cite plus de 20 fournisseurs et 16 outils ; cet avis suit le README.',
          'Non vérifié : l\'entreprise ou le pays derrière le projet, le nombre d\'utilisateurs et les notes, ainsi que les tests indépendants. Aucun n\'a été trouvé, et les pages comparatives du développeur n\'ont pas été traitées comme indépendantes.',
          'Non vérifié : si les installateurs Windows sont signés. Le README décrit seulement la version macOS comme signée et notariée et ne dit rien des autres plateformes.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'SoloMD face aux alternatives',
        itemHeadings: true,
        content: [
          '**SoloMD est en concurrence avec d\'autres applications de notes axées sur le stockage local ; PromptQuorum ne les a pas comparées en pratique.** Les outils ci-dessous figurent dans l\'annuaire et sont décrits d\'après leurs propres avis.',
        ],
        columns: ['Outil', 'Selon les sources'],
        rows: [
          { 'Outil': 'SoloMD', 'Selon les sources': 'MIT ; 5 plateformes ; gratuit ; serveur MCP' },
          { 'Outil': '[Hillnote](/fr/power-local-llm/hillnote-review)', 'Selon les sources': 'Licence non indiquée ; 5 plateformes ; freemium' },
          { 'Outil': '[Tolaria](/fr/power-local-llm/tolaria-review)', 'Selon les sources': 'AGPL-3.0 ; bureau ; coffre Git ; gratuit' },
          { 'Outil': '[Logseq](/fr/power-local-llm/logseq-review)', 'Selon les sources': 'AGPL-3.0 ; outliner ; serveur MCP facultatif' },
          { 'Outil': '[SiYuan](/fr/power-local-llm/siyuan-review)', 'Selon les sources': 'AGPL-3.0 ; auto-hébergé ; agent IA' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'SoloMD est-il gratuit ?',
            a: 'Oui, selon le développeur. Le code est sous licence MIT, toutes les fonctions sont gratuites et il n\'y a pas d\'abonnement. Les versions du Mac App Store, de l\'App Store iOS et de Google Play proposent des pourboires uniques facultatifs qui ne débloquent qu\'un badge de soutien. Les fournisseurs d\'IA cloud auxquels vous accédez avec votre propre clé vous facturent directement.',
          },
          {
            q: 'SoloMD fonctionne-t-il avec Ollama ou LM Studio ?',
            a: 'Selon le README, oui : dans Réglages, IA, une option de détection automatique trouve les serveurs locaux Ollama, LM Studio, Jan, vLLM et llama.cpp sur localhost. Vous pouvez aussi ajouter un fournisseur cloud avec votre propre clé d\'API. PromptQuorum n\'a pas testé la détection.',
          },
          {
            q: 'Claude Code ou Cursor peuvent-ils utiliser mes notes SoloMD ?',
            a: 'Oui, selon le développeur. Le serveur solomd-mcp intégré expose 16 outils ; les 12 outils de lecture sont toujours actifs et les 4 outils d\'écriture exigent l\'option --allow-write. Le README montre un extrait de configuration et une commande qui enregistre le serveur auprès des clients IA de votre machine. PromptQuorum ne l\'a pas testé.',
          },
          {
            q: 'Comment installer SoloMD ?',
            a: 'Prenez l\'installateur de votre système sur la page des versions GitHub, ou utilisez le Mac App Store, l\'App Store, Google Play, Homebrew ou winget. Préférez un installateur aux scripts en une ligne, sauf si vous faites confiance à la source. PromptQuorum n\'a pas exécuté l\'installation.',
          },
          {
            q: 'SoloMD envoie-t-il mes notes quelque part ?',
            a: 'Pas par défaut, selon le développeur : les notes restent dans votre dossier et les requêtes d\'IA vont au fournisseur ou au serveur local que vous choisissez. La politique de confidentialité ajoute que les versions du site et des boutiques hors Apple envoient des événements d\'usage anonymes sauf désactivation. La synchronisation n\'atteint que les services que vous configurez.',
          },
          {
            q: 'Quel format SoloMD utilise-t-il pour les notes ?',
            a: 'Selon le README, de simples fichiers .md dans un dossier de votre choix, que d\'autres éditeurs Markdown peuvent ouvrir. Le développeur y ajoute les wikilinks, les rétroliens et les propriétés YAML, ainsi que l\'import par glisser-déposer de fichiers .docx, .pdf, .xlsx et .pptx vers Markdown. PromptQuorum n\'a pas testé l\'import.',
          },
          {
            q: 'Quels formats d\'export SoloMD propose-t-il ?',
            a: 'Selon le README, le centre d\'export couvre PDF, Word (.docx), HTML, EPUB, LaTeX, ODT, RTF, texte brut et Markdown, sans installation séparée de Pandoc. PromptQuorum n\'a pas vérifié la fidélité des exports.',
          },
          {
            q: 'Comment SoloMD synchronise-t-il les notes entre appareils ?',
            a: 'Par espace de travail, via iCloud Drive, OneDrive, WebDAV, un stockage compatible S3, Syncthing ou un hébergeur Git, selon le développeur, avec un chiffrement de bout en bout facultatif sur votre propre stockage. PromptQuorum n\'a pas testé la synchronisation ni audité le chiffrement.',
          },
          {
            q: 'Qu\'est-ce qu\'AutoGit dans SoloMD ?',
            a: 'Le développeur le décrit comme un instantané enregistré à chaque sauvegarde dans un dépôt Git local de l\'espace de travail, avec comparaison visuelle et retour en arrière en un clic. libgit2 est intégré, aucun Git système n\'est requis. PromptQuorum n\'a pas testé cette fonction.',
          },
          {
            q: 'Sur quels systèmes SoloMD fonctionne-t-il ?',
            a: 'Selon le README : Windows 10 ou version ultérieure (x64 et ARM64), macOS 10.15 ou ultérieur, Linux (x64 et ARM64), iOS 15 ou ultérieur et Android 7 ou ultérieur. Le README ne publie aucun minimum de RAM ou de GPU ; les besoins des modèles locaux dépendent du serveur que vous utilisez.',
          },
          {
            q: 'Qui maintient SoloMD, et le projet est-il encore mis à jour ?',
            a: 'Le README décrit un seul mainteneur humain et indique que le projet est écrit, testé et publié en grande partie par Claude Code. Le dépôt est récent, et les pages lues par PromptQuorum ne nomment ni entreprise ni pays. Consultez la page des versions pour connaître la dernière version avant de vous y fier.',
          },
          {
            q: 'Quelles fonctions d\'IA SoloMD propose-t-il en dehors du chat ?',
            a: 'Selon le README : réécriture et traduction en ligne d\'un passage sélectionné, citations en [[wikilinks]] dans le panneau de chat et recherche sémantique hors ligne dans le coffre grâce à un modèle d\'embedding intégré qui, selon le développeur, ne demande aucun téléchargement. PromptQuorum n\'a pas testé la qualité des réponses.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**SoloMD vaut le coup d\'œil si vous voulez de simples fichiers Markdown, un éditeur sobre, un chat sur vos notes avec un modèle local ou une clé personnelle, et un serveur MCP dans une seule application gratuite.**',
          'Sur le papier, il couvre beaucoup : trois modes d\'édition, rétroliens, recherche sur l\'appareil, export en 9 formats, applications pour cinq plateformes, synchronisation cloud et Git, détection des modèles locaux et 16 outils MCP, avec la v5.2.2 du 16 novembre 2026 et un commit du 17 novembre 2026.',
          'Les compromis sont réels. C\'est un projet jeune, avec un seul mainteneur et un processus de développement assisté par IA annoncé publiquement ; aucune entreprise ni aucun pays n\'est nommé, et les pages du développeur se contredisent sur la télémétrie et le nombre de fonctions. PromptQuorum n\'a pas testé l\'application : essayez-la sur une copie d\'un petit dossier, vérifiez les réglages de confidentialité et l\'export dont vous avez besoin avant de vous y fier.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site web de SoloMD](https://solomd.app) — fonctions, plateformes et téléchargements, consulté le 17 novembre 2026.',
          '[Politique de confidentialité](https://solomd.app/privacy) — événements d\'usage et traitement des données, mise à jour le 18 avril 2026, consultée le 17 novembre 2026.',
          '[Page de sécurité](https://solomd.app/security) — IA, stockage des clés et gestion de MCP, datée d\'avril 2026, consultée le 17 novembre 2026.',
          '[Nouveautés](https://solomd.app/whats-new/) — notes de version, consultées le 17 novembre 2026.',
          '[Dépôt GitHub](https://github.com/zhitongblog/solomd) — licence, date de création et dernier commit, consulté le 17 novembre 2026.',
          '[README](https://github.com/zhitongblog/solomd#readme) — fonctions, installation, outils MCP et confidentialité, consulté le 17 novembre 2026.',
          '[Version v5.2.2](https://github.com/zhitongblog/solomd/releases/tag/v5.2.2) — dernière version, sa date et les fichiers d\'installation, consultée le 17 novembre 2026.',
          '[Fiche App Store](https://apps.apple.com/app/solomd/id6762498874) — version iOS, prix et système minimal, consultée le 17 novembre 2026.',
          '[Fiche Google Play](https://play.google.com/store/apps/details?id=app.solomd) — disponibilité sur Android, consultée le 17 novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Avis sur Hillnote](/fr/power-local-llm/hillnote-review) — notes Markdown axées sur le stockage local avec IA sur l\'appareil pour Mac, Windows et mobiles.',
          '[Avis sur Tolaria](/fr/power-local-llm/tolaria-review) — une application de notes de bureau gratuite avec fichiers Markdown dans un coffre adossé à Git.',
          '[Avis sur Logseq](/fr/power-local-llm/logseq-review) — un outliner open source axé sur le stockage local, avec serveur MCP facultatif.',
          '[Avis sur SiYuan](/fr/power-local-llm/siyuan-review) — un espace de connaissances auto-hébergé avec agent IA intégré.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d\'IA locale.',
          '[Test de GenOffice](/fr/power-local-llm/genoffice-review) — une suite bureautique de bureau gratuite et open source pour les fichiers Word, Excel et PowerPoint ; les appels IA vont par défaut vers un fournisseur cloud.',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/solomd-review-hero-ja.webp',
    title: 'SoloMDレビュー：ローカルモデル向けAIチャットとMCPを備えた無料のMarkdownノートアプリ',
    seoTitle: 'SoloMDレビュー：Markdownノート・AI・MCP',
    intro:
      'SoloMDは、macOS、Windows、Linux、iPhone、iPad、Android向けの無料のMarkdownノートアプリで、MITライセンスで公開されています。ノートをフォルダ内の通常の.mdファイルとして保存し、そのフォルダに対するAIチャット、ローカルモデルの自動検出、9形式のエクスポート、同梱のMCPサーバーを追加します。このレビューは、開発者のウェブサイト、プライバシーポリシー、GitHubリポジトリ、リリースページ、ストアの掲載情報をもとに、2026年11月17日に確認したものです。PromptQuorumはこのアプリを実際には試していません。',
    metaDescription:
      'SoloMDはMITライセンスの無料Markdownノートアプリ。5プラットフォーム対応で、ボルトとのAIチャット、OllamaやLM Studioの検出、MCPサーバーを備えます。導入とプライバシー。',
    twitterDescription:
      'SoloMDはノートをMarkdownファイルで保存し、ボルトチャット、ローカルモデル検出、9形式エクスポート、MCPサーバーを追加。無料・MIT。確認できたこととできていないこと。',
    audience:
      '通常のMarkdownファイルとAI機能を一体で使いたいノート作成者や書き手、ノートボルトをMCPクライアントにつなぐ開発者、開発者が1人の新しいオープンソースアプリを検討している方',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'SoloMDレビュー',
    targetKeywords: [
      'SoloMD レビュー',
      'Markdown ノートアプリ ローカルAI',
      'SoloMD MCPサーバー',
      'Obsidian 代替 オープンソース',
      'Typora 代替 無料',
      'SoloMD インストール',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**SoloMDは、ノートを通常のファイルとして保存し、ボルトに対するAIチャット、ローカルモデルの自動検出、同梱のMCPサーバーを追加する、無料のオープンソース（MIT）Markdownノートアプリです。** macOS、Windows、Linux、iPhone、iPad、Androidで動作し、通常のインストーラーまたはアプリストアから導入できます。READMEによると、Ollama、LM Studio、Jan、vLLM、llama.cpp、または自分のAPIキーを使ったクラウドサービスと連携します。公開から日が浅く、開発者は1人で、PromptQuorumは試していません。',
    quickAnswerTop: {
      ja: {
        question: 'SoloMDとは何で、誰に向いていますか？',
        answer:
          '開発者によると、SoloMDは、AIチャット、オフラインのセマンティック検索、MCPサーバーを備えたMarkdownエディター兼ノートボルトです。ノートを自分のディスク上の通常のファイルで持ちたく、プラグインを探さずにローカルAIや自分のキーによるAIを使いたい人に向いています。',
        bullets: [
          '無料でMITライセンス。macOS、Windows、Linux、iOS、iPadOS、Androidに対応。',
          'ノートは通常の.mdファイル。AutoGitが保存のたびにローカルのGitスナップショットを作成。',
          'ボルトに対するAIチャットと選択範囲のリライト。Ollamaなどのローカルサーバーか、自分のキーによるクラウドサービスを利用。',
          'Claude Desktop、Claude Code、Cursor、Windsurf向けMCPサーバーを同梱。開発者によると、書き込みツールは有効にしない限りオフ。',
          '開発者は1人で、リポジトリは2026年4月に作成。テレメトリと機能数について、開発者のページ同士で記述が食い違う。',
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
            text: 'SoloMDは、ノートを通常のファイルとして保存し、AIチャット、ローカルモデルの検出、MCPサーバーを追加する無料のMarkdownノートアプリです。',
          },
          {
            type: 'plain-terms',
            text: '静かなMarkdownエディターに、リンクされたノートのボルトが付き、AIアシスタントがノートを読んで質問に答える、というイメージです。AIは自分のパソコン上のモデルでも、自分のキーで利用するクラウドサービスでも構いません。',
          },
        ],
        items: [
          'MITライセンスのオープンソースで無料。開発者はサブスクリプションなしとしており、アプリストアの任意のチップはサポーターバッジを解除するだけです。',
          'macOS、Windows（x64とARM64）、Linux（x64とARM64）、iPhone、iPad、Androidで動作。各OS向けにインストーラーまたはストア掲載があります。',
          'AI：ボルトに対するチャット、選択範囲のリライト、localhost上のOllama、LM Studio、Jan、vLLM、llama.cppの自動検出、または自分のキーによるクラウドサービス。',
          'READMEによると、同梱のMCPサーバーがClaude Desktop、Claude Code、Cursor、Windsurfに16個のツールを提供。4個の書き込みツールには明示的なフラグが必要です。',
          'PromptQuorumはアプリを試していません。SoloMDのサーバーに接続するかどうかについて、プライバシーポリシーとREADMEの記述が異なります。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'プライバシーポリシーによると、ウェブサイトおよびApple以外のストアのビルドは、設定でオフにしない限り匿名の利用イベントを開発者のサーバーに送信します。App Storeのビルドは送信しません。READMEには、SoloMDがホストするサーバーはないと書かれています。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**SoloMDは、.mdファイルの入った通常のフォルダをボルトとして扱い、その上にAIチャット、検索、エクスポート、MCPサーバーを重ねるMarkdownノートアプリです。**',
          'プロジェクトはMITライセンスで、[github.com/zhitongblog/solomd](https://github.com/zhitongblog/solomd)で公開開発されています。READMEは開発者1人によるものと説明しています。リポジトリは2026年4月に作成されました。最新リリースv5.2.2は2026年11月16日、最後のコミットは2026年11月17日で、開発は継続中のため、放置プロジェクトとしての警告は適用されません。',
          'READMEによると、エディターはTauri 2、Vue 3、CodeMirror 6、Rustで作られています。3つの執筆モード（純粋なWYSIWYG、ライブプレビュー、ソース分割表示）、ウィキリンクとバックリンク、ワークスペースごとのGit履歴、端末内のセマンティック検索、PDF・Word・HTML・EPUB・LaTeX・ODT・RTF・テキスト・Markdownへのエクスポートセンターを備えます。',
          'READMEには、プロジェクトの大部分をClaude Codeが書き、テストし、リリースしていること、何を出すかは人間のメンテナーが決めること、issueへの返信も同じアシスタントが書くことも記されています。PromptQuorumは、これを開発者自身の説明として伝えています。コードは公開されており、誰でも確認できます。',
          'これらの説明は開発者の主張です。PromptQuorumはアプリを実行しておらず、エディターの品質、エクスポートの忠実度、同期の挙動、AI回答の品質は確認していません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**SoloMDは、他のデスクトップアプリやモバイルアプリと同じく、インストーラー、ストア掲載、パッケージマネージャーのいずれかで導入します。**',
          'GitHubのリリースv5.2.2には、macOS用ユニバーサル.dmg、x64とARM64向けのWindows .msiとポータブルzip、x64とARM64向けのLinux AppImage・.deb・.rpm、Android用APKが含まれます。READMEにはMac App Store、iOS App Store、Google Play、Homebrew cask、winget、Arch User Repositoryのパッケージも挙げられています。',
        ],
        columns: ['プラットフォーム', '入手方法'],
        rows: [
          { 'プラットフォーム': '[macOS](https://github.com/zhitongblog/solomd/releases/latest)', '入手方法': 'ユニバーサル.dmg、Mac App Store、Homebrew cask' },
          { 'プラットフォーム': '[Windows](https://github.com/zhitongblog/solomd/releases/latest)', '入手方法': '.msi（x64/ARM64）、ポータブルzip、winget' },
          { 'プラットフォーム': '[Linux](https://github.com/zhitongblog/solomd/releases/latest)', '入手方法': 'AppImage、.deb、.rpm、AURパッケージ' },
          { 'プラットフォーム': '[iPhoneとiPad](https://apps.apple.com/app/solomd/id6762498874)', '入手方法': 'App Storeの掲載ページ' },
          { 'プラットフォーム': '[Android](https://play.google.com/store/apps/details?id=app.solomd)', '入手方法': 'Google Play、またはリリースページのAPK' },
        ],
        note: 'READMEには、1行のシェルインストーラー（macOSはcurlをbashに渡す方法、Windowsはirmをiexに渡す方法）も載っています。スクリプトをシェルに渡すと、読んでいないコードが実行されます。提供元を信頼できる場合のみ使うか、リリースページのインストーラーを使ってください。開発者の[ウェブサイト](https://solomd.app)にもダウンロードページがあります。PromptQuorumはインストーラーを実行しておらず、ダウンロードファイルのスキャンも行っていません。',
      },
      requirements: {
        id: 'requirements',
        title: '動作要件',
        content: [
          '**SoloMDにはWindows 10以降、macOS 10.15以降、現行の主要なLinux、iOS 15以降、またはAndroid 7以降が必要です。AI機能にはローカルのモデルサーバーかクラウドのAPIキーが必要です。**',
          '一覧はREADMEによるものです。インストーラーのサイズは、Windowsで約14 MB、Linuxで約16 MB、Androidで約21 MB、macOSユニバーサル版で約30 MBと公表されていますが、PromptQuorumは計測していません。RAMやGPUの下限は公表されておらず、ローカルモデルの要件は使うサーバー次第です。',
        ],
        columns: ['項目', '記載されている内容'],
        rows: [
          { '項目': 'Windows', '記載されている内容': 'Windows 10以降、x64とARM64' },
          { '項目': 'macOS', '記載されている内容': 'macOS 10.15以降、Apple SiliconとIntel' },
          { '項目': 'Linux', '記載されている内容': 'x64とARM64' },
          { '項目': 'iPhone / iPad', '記載されている内容': 'iOS 15以降（App Store掲載：15.0）' },
          { '項目': 'Android', '記載されている内容': 'Android 7以降（API 24）' },
          { '項目': 'ローカルAI', '記載されている内容': 'Ollama、LM Studio、Jan、vLLM、llama.cpp' },
          { '項目': 'クラウドAI', '記載されている内容': '提供元ごとに自分のAPIキー' },
        ],
        note: 'RAMとGPUの要件は読み込むモデルによって変わり、アプリ自体は下限を公表していません。READMEはmacOS版を署名・公証済みと説明しており、他のプラットフォームについては何も述べていません。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**SoloMDの中核は、通常のファイルによるボルトの上に載った静かなMarkdownエディターで、周囲にAIチャット、検索、エクスポート、同期、MCPサーバーがあります。** 以下はすべて、READMEとウェブサイトにある開発者の主張です。',
        ],
        items: [
          '3つの執筆モード：純粋なWYSIWYG、ライブプレビュー、同期する分割/ソース表示。フォーカスモード、タイプライターモード、Vimモード、KaTeX数式、Mermaid図にも対応。',
          'ボルト機能：[[ウィキリンク]]、バックリンク、YAMLプロパティ、.docx・.pdf・.xlsx・.pptxファイルをドラッグ＆ドロップでMarkdownに取り込む機能。',
          'AutoGit：保存のたびにワークスペース内のローカルGitリポジトリへスナップショットをコミット。差分表示とワンクリックのロールバックに対応し、libgit2が組み込み済みでシステムのGitは不要。',
          '端末内のエンベッダーによるボルトのオフラインセマンティック検索。開発者によれば、モデルのダウンロードもネットワーク通信も不要。',
          'AIチャット：[[ウィキリンク]]の引用付きでボルトについて会話するサイドパネル、選択範囲のリライトと翻訳、ローカルのOllama・LM Studio・Jan・vLLM・llama.cppサーバーの自動検出。クラウドサービスは自分のキーを使い、キーはOSのキーチェーンに保存されます。',
          'エクスポートセンター：PDF、Word（.docx）、HTML、EPUB、LaTeX、ODT、RTF、テキスト、Markdown。READMEによれば、Pandocの別途インストールは不要。',
          'iCloud Drive、OneDrive、WebDAV、S3互換ストレージ、Syncthing、Gitホスティングによるワークスペース単位の同期。自分のストレージ上でエンドツーエンド暗号化も任意で利用可能。',
          '16個のツールを持つ同梱MCPサーバー（読み取り専用12個、--allow-writeが必要な書き込み4個）。標準はstdioで、トークン付きのループバックHTTPモードも任意。さらにコマンドラインインターフェースとJSON拡張を備えます。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**開発者によれば、クラウドAI、同期、画像ホストを設定しない限りノートは選んだフォルダに残ります。さらにプライバシーポリシーには、READMEに書かれていない、一部ビルドでの任意の匿名利用イベントが記載されています。**',
          'プライバシーポリシー（2026年4月18日更新）によると、SoloMDにはアカウント機能も広告もなく、ノートはローカルに保存されます。ウェブサイトやApple以外のストアから入手したビルドは、起動時と一部機能の使用時に、開発者自身のサーバーへ匿名イベントを送信します。内容はイベント名、アプリのバージョン、OS、画面言語、ランダムな識別子で、ノート、ファイル名、パスは含まないとされています。設定の詳細設定でオフにできます。App Storeのビルドは利用データを送信しません。',
          'ポリシーとセキュリティページによると、AIリクエストはお使いのマシンから設定した提供元、またはローカルサーバーへ直接送られます。セキュリティページには、AIは標準でオフであり、APIキーはOSのキーチェーンに保存されるとも書かれています。同期、画像ホスト、Gitホスティングは、自分で設定したサービスにのみデータを送ります。',
          'READMEは、SoloMDがホストするサーバーはないと述べており、ポリシーにある利用イベント用サーバーとは噛み合いません。ポリシーはv5.2の同期オプションより前のもので、セキュリティページは2026年4月付けです。導入するアプリのバージョンと照らし合わせて確認してください。コードはMITライセンスで公開されているため、データの流れは監査できます。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**SoloMDは、通常のMarkdownファイル、静かなエディター、プラグインを組み合わせなくても使える内蔵AIを求める人に向いています。**',
        ],
        items: [
          '他のエディターでも開けるファイルを自分のディスクに持ちたい書き手やノート作成者。',
          'OllamaやLM Studioなどで動かすローカルモデルで、ノートについてチャットしたい人。',
          'Claude CodeやCursorなどのMCPクライアントから、ボルト内のノートを読み、検索し、書き込みたい開発者。',
          '有料の同期サービスなしで、デスクトップ、iPhone、Androidに同じノートアプリを使いたい人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        content: [
          '**SoloMDは向かない場面もあり、いくつかの点は未確認のままです。**',
        ],
        items: [
          '向かない人：企業名、サポート契約、サービスレベル条件が明確なベンダーを必要とするチーム。確認したページには企業名、住所、国の記載がありません。',
          '向かない人：長い実績を求める人。リポジトリは2026年4月に作成され、メンテナーは1人です。',
          '未確認：エディターの品質、9形式にわたるエクスポートの忠実度、AI回答の品質。PromptQuorumはアプリを実行していません。',
          '未確認：同期とエンドツーエンド暗号化の挙動。主張は開発者によるもので、PromptQuorumはコードの監査も同期のテストも行っていません。',
          '未確認：プライバシーポリシーに書かれた利用イベントが各ビルドの実際の送信内容と一致するか、そしてREADMEの「ホスト型サーバーなし」という記述とどう整合するか。',
          '未確認：機能の数。古いセキュリティページはAIプロバイダー14社、標準のMCPツール6個、READMEは20社超とツール16個としています。このレビューはREADMEに従います。',
          '未確認：プロジェクトの背後にある企業や国、利用者数や評価、独立したレビュー。いずれも見つからず、開発者自身の比較ページは独立した情報として扱っていません。',
          '未確認：Windowsのインストーラーにコード署名があるか。READMEはmacOS版を署名・公証済みと説明するのみで、他のプラットフォームについては何も述べていません。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'SoloMDと代替ツールの比較',
        itemHeadings: true,
        content: [
          '**SoloMDは、他のローカルファーストなノートアプリと競合します。PromptQuorumは、それらと実際に比較したわけではありません。** 以下のツールはディレクトリに掲載されており、各ツールのレビューに基づいて説明しています。',
        ],
        columns: ['ツール', '情報源での記載'],
        rows: [
          { 'ツール': 'SoloMD', '情報源での記載': 'MIT、5プラットフォーム、無料、MCPサーバー' },
          { 'ツール': '[Hillnote](/ja/power-local-llm/hillnote-review)', '情報源での記載': 'ライセンス記載なし、5プラットフォーム、フリーミアム' },
          { 'ツール': '[Tolaria](/ja/power-local-llm/tolaria-review)', '情報源での記載': 'AGPL-3.0、デスクトップ、Gitボルト、無料' },
          { 'ツール': '[Logseq](/ja/power-local-llm/logseq-review)', '情報源での記載': 'AGPL-3.0、アウトライナー、任意のMCPサーバー' },
          { 'ツール': '[SiYuan](/ja/power-local-llm/siyuan-review)', '情報源での記載': 'AGPL-3.0、セルフホスト、AIエージェント' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'SoloMDは無料ですか？',
            a: 'はい、開発者によれば無料です。コードはMITライセンスで、すべての機能が無料、サブスクリプションもありません。Mac App Store、iOS App Store、Google Playのビルドには、サポーターバッジを解除するだけの任意の1回限りのチップがあります。自分のキーで利用するクラウドAIの料金は、各提供元から直接請求されます。',
          },
          {
            q: 'SoloMDはOllamaやLM Studioと使えますか？',
            a: 'READMEによれば、使えます。設定のAIに自動検出オプションがあり、localhost上のOllama、LM Studio、Jan、vLLM、llama.cppサーバーを見つけます。自分のAPIキーでクラウドサービスを追加することもできます。PromptQuorumは検出機能を試していません。',
          },
          {
            q: 'Claude CodeやCursorからSoloMDのノートを使えますか？',
            a: '開発者によれば、使えます。同梱のsolomd-mcpサーバーは16個のツールを提供し、12個の読み取りツールは常に有効、4個の書き込みツールには--allow-writeフラグが必要です。READMEには設定例と、お使いのマシン上のAIクライアントにサーバーを登録するコマンドが載っています。PromptQuorumは試していません。',
          },
          {
            q: 'SoloMDはどうやってインストールしますか？',
            a: 'GitHubのリリースページからお使いのOS用インストーラーを入手するか、Mac App Store、App Store、Google Play、Homebrew、wingetを利用してください。提供元を信頼できない限り、1行のシェルスクリプトよりインストーラーを選んでください。PromptQuorumはインストールを実行していません。',
          },
          {
            q: 'SoloMDはノートをどこかに送信しますか？',
            a: '開発者によれば、標準では送信しません。ノートはフォルダ内に残り、AIリクエストは選んだ提供元かローカルサーバーに送られます。プライバシーポリシーには、ウェブサイトとApple以外のストアのビルドが、オフにしない限り匿名の利用イベントを送ると追記されています。同期は、自分で設定したサービスにのみ届きます。',
          },
          {
            q: 'SoloMDはメモをどの形式で保存しますか？',
            a: 'READMEによれば、自分で選んだフォルダ内の通常の.mdファイルで、他のMarkdownエディタでも開けます。開発者は、ウィキリンク、バックリンク、YAMLプロパティ、そして.docx、.pdf、.xlsx、.pptxファイルをドラッグ＆ドロップでMarkdownに取り込む機能も挙げています。PromptQuorumはインポートを試していません。',
          },
          {
            q: 'SoloMDはどんなエクスポート形式に対応していますか？',
            a: 'READMEによれば、エクスポートセンターはPDF、Word（.docx）、HTML、EPUB、LaTeX、ODT、RTF、プレーンテキスト、Markdownに対応し、Pandocを別途インストールする必要はありません。PromptQuorumはどの形式の出力品質も確認していません。',
          },
          {
            q: 'SoloMDはデバイス間でメモをどう同期しますか？',
            a: '開発者によれば、ワークスペースごとにiCloud Drive、OneDrive、WebDAV、S3互換ストレージ、Syncthing、またはGitホスト経由で同期でき、自分のストレージ上で任意のエンドツーエンド暗号化も使えます。PromptQuorumは同期を試しておらず、暗号化の監査もしていません。',
          },
          {
            q: 'SoloMDのAutoGitとは何ですか？',
            a: '開発者の説明では、保存のたびにワークスペース内のローカルGitリポジトリへスナップショットをコミットし、視覚的な差分表示とワンクリックのロールバックを備えています。libgit2が組み込まれており、システムのGitは不要です。PromptQuorumはこの機能を試していません。',
          },
          {
            q: 'SoloMDはどのOSで動きますか？',
            a: 'READMEによれば、Windows 10以降（x64とARM64）、macOS 10.15以降、Linux（x64とARM64）、iOS 15以降、Android 7以降です。READMEにRAMやGPUの最低要件の記載はなく、ローカルモデルの要件は使用するサーバーによって変わります。',
          },
          {
            q: 'SoloMDは誰が保守していて、今も更新されていますか？',
            a: 'READMEでは、人間のメンテナーは1人で、プロジェクトの大部分をClaude Codeが書き、テストし、リリースしていると説明されています。リポジトリは新しく、PromptQuorumが読んだページには企業名も国名もありません。頼る前に、リリースページで最新バージョンを確認してください。',
          },
          {
            q: 'SoloMDにはチャット以外のAI機能がありますか？',
            a: 'READMEによれば、選択した部分のその場での書き換えと翻訳、チャットパネルでの[[wikilink]]形式の引用、そして端末内の埋め込みモデルによるボルトのオフラインセマンティック検索があります。開発者によれば、この埋め込みモデルはモデルのダウンロードが不要です。PromptQuorumは回答品質を試していません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**通常のMarkdownファイル、静かなエディター、ローカルモデルまたは自分のキーによるノートチャット、MCPサーバーを1つの無料アプリで使いたいなら、SoloMDは一度試す価値があります。**',
          '仕様上は多くをカバーしています。3つの編集モード、バックリンク、端末内検索、9形式のエクスポート、5プラットフォームのアプリ、クラウドとGitの同期、ローカルモデル検出、16個のMCPツールがあり、v5.2.2は2026年11月16日、コミットは2026年11月17日です。',
          '一方で、トレードオフも現実的です。開発者1人の新しいプロジェクトで、AI主導の開発プロセスが公に述べられており、企業名も国も示されておらず、開発者自身のページ同士がテレメトリと機能数で食い違います。PromptQuorumはアプリを試していないため、小さなフォルダのコピーで試し、プライバシー設定を確認し、必要なエクスポートを検証してから頼るようにしてください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[SoloMDウェブサイト](https://solomd.app) — 機能、プラットフォーム、ダウンロード。2026年11月17日確認。',
          '[プライバシーポリシー](https://solomd.app/privacy) — 利用イベントとデータの扱い。2026年4月18日更新、2026年11月17日確認。',
          '[セキュリティページ](https://solomd.app/security) — AI、キーの保管、MCPの扱い。2026年4月付け、2026年11月17日確認。',
          '[新着情報](https://solomd.app/whats-new/) — リリースノート。2026年11月17日確認。',
          '[GitHubリポジトリ](https://github.com/zhitongblog/solomd) — ライセンス、作成日、最終コミット。2026年11月17日確認。',
          '[README](https://github.com/zhitongblog/solomd#readme) — 機能、インストール、MCPツール、プライバシー。2026年11月17日確認。',
          '[リリースv5.2.2](https://github.com/zhitongblog/solomd/releases/tag/v5.2.2) — 最新リリース、その日付、インストーラーファイル。2026年11月17日確認。',
          '[App Storeの掲載ページ](https://apps.apple.com/app/solomd/id6762498874) — iOS版のバージョン、価格、最低システム要件。2026年11月17日確認。',
          '[Google Playの掲載ページ](https://play.google.com/store/apps/details?id=app.solomd) — Androidでの提供状況。2026年11月17日確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Hillnoteレビュー](/ja/power-local-llm/hillnote-review) — Mac、Windows、スマートフォン向けの、端末内AIを備えたローカルファーストなMarkdownノート。',
          '[Tolariaレビュー](/ja/power-local-llm/tolaria-review) — MarkdownファイルをGit管理のボルトに置く無料のデスクトップノートアプリ。',
          '[Logseqレビュー](/ja/power-local-llm/logseq-review) — 任意のMCPサーバーを備えたオープンソースのローカルファーストなアウトライナー。',
          '[SiYuanレビュー](/ja/power-local-llm/siyuan-review) — AIエージェントを内蔵したセルフホスト型のナレッジワークスペース。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
          '[GenOfficeレビュー](/ja/power-local-llm/genoffice-review) — Word、Excel、PowerPointファイルを扱う無料のオープンソースのデスクトップオフィススイート。AI呼び出しは標準ではクラウドのプロバイダーに送られます。',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/solomd-review-hero-pt.webp',
    title: 'Análise do SoloMD: app de notas em Markdown gratuito com chat de IA para modelos locais e MCP',
    seoTitle: 'Análise do SoloMD: notas Markdown, chat de IA, MCP',
    intro:
      'O SoloMD é um app de notas em Markdown gratuito, com licença MIT, para macOS, Windows, Linux, iPhone, iPad e Android. Ele guarda as notas como arquivos .md simples em uma pasta e acrescenta chat de IA sobre essa pasta, detecção automática de modelos locais, exportação em 9 formatos e um servidor MCP incluído. Esta análise se baseia no site do desenvolvedor, na política de privacidade, no repositório do GitHub, na página de versões e nas páginas das lojas, consultados em 17 de novembro de 2026. A PromptQuorum não testou o app.',
    metaDescription:
      'SoloMD: app de notas Markdown gratuito (MIT), com chat de IA sobre o cofre, detecção de Ollama e LM Studio e servidor MCP. Instalação e privacidade.',
    twitterDescription:
      'O SoloMD guarda as notas como arquivos Markdown e acrescenta chat com o cofre, detecção de modelos locais, exportação em 9 formatos e servidor MCP. Grátis, MIT. O que está confirmado e o que não está.',
    audience:
      'Pessoas que fazem anotações e escrevem e querem arquivos Markdown simples com IA integrada, desenvolvedores que conectam um cofre de notas a clientes MCP e quem avalia um app de código aberto jovem com um único mantenedor',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do SoloMD',
    targetKeywords: [
      'análise SoloMD',
      'app de notas Markdown com IA local',
      'servidor MCP SoloMD',
      'alternativa open source ao Obsidian',
      'alternativa gratuita ao Typora',
      'instalar SoloMD',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O SoloMD é um app de notas em Markdown gratuito e de código aberto (MIT) que guarda as notas como arquivos simples e acrescenta chat de IA sobre o seu cofre, detecção automática de modelos locais e um servidor MCP incluído.** Ele roda em macOS, Windows, Linux, iPhone, iPad e Android, instala por um instalador comum ou pela loja de apps e, segundo o README, conversa com Ollama, LM Studio, Jan, vLLM, llama.cpp ou um provedor na nuvem com a sua própria chave de API. É um projeto jovem, mantido por um único desenvolvedor, e a PromptQuorum não o testou.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o SoloMD e para quem ele serve?',
        answer:
          'Segundo o desenvolvedor, o SoloMD é um editor de Markdown e cofre de notas com chat de IA integrado, busca semântica offline e servidor MCP. Serve para quem quer as notas como arquivos simples no próprio disco e IA local ou com chave própria sem caçar plugins.',
        bullets: [
          'Gratuito e com licença MIT; macOS, Windows, Linux, iOS, iPadOS e Android.',
          'As notas são arquivos .md simples; o AutoGit salva um instantâneo local do Git a cada gravação.',
          'Chat de IA sobre o cofre e reescrita no texto, com um servidor local como o Ollama ou um provedor na nuvem com a sua própria chave.',
          'Servidor MCP incluído para Claude Desktop, Claude Code, Cursor e Windsurf; segundo o desenvolvedor, as ferramentas de escrita ficam desligadas até você ativá-las.',
          'Um único mantenedor, repositório criado em abril de 2026; as páginas do desenvolvedor se contradizem em telemetria e número de recursos.',
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
            text: 'O SoloMD é um app de notas em Markdown gratuito que guarda as suas notas como arquivos simples e acrescenta chat de IA, detecção de modelos locais e um servidor MCP.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em um editor de Markdown tranquilo com um cofre de notas interligadas, no qual um assistente de IA pode ler as suas notas e responder perguntas sobre elas. A IA pode ser um modelo rodando no seu computador ou um serviço na nuvem que você paga com a sua própria chave.',
          },
        ],
        items: [
          'Código aberto sob MIT e gratuito; segundo o desenvolvedor não há assinatura, e as gorjetas opcionais nas lojas de apps só liberam um selo de apoiador.',
          'Roda em macOS, Windows (x64 e ARM64), Linux (x64 e ARM64), iPhone, iPad e Android; há instaladores ou páginas de loja para cada sistema.',
          'IA: chat sobre o cofre, reescrita no texto e detecção automática de Ollama, LM Studio, Jan, vLLM e llama.cpp no localhost, ou um provedor na nuvem com a sua própria chave.',
          'Segundo o README, um servidor MCP incluído expõe 16 ferramentas para Claude Desktop, Claude Code, Cursor e Windsurf; as 4 ferramentas de escrita exigem um parâmetro explícito.',
          'A PromptQuorum não testou o app. A política de privacidade e o README divergem sobre se algum servidor do SoloMD é contatado.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Segundo a política de privacidade, as versões do site e de lojas que não são da Apple enviam eventos de uso anônimos ao servidor do desenvolvedor, a menos que você os desative nas configurações, enquanto as versões da App Store não enviam nenhum. O README diz que não há servidores hospedados pelo SoloMD.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O SoloMD é um app de notas em Markdown que trata uma pasta simples de arquivos .md como o seu cofre e acrescenta chat de IA, busca, exportação e um servidor MCP.**',
          'O projeto tem licença MIT e é desenvolvido abertamente em [github.com/zhitongblog/solomd](https://github.com/zhitongblog/solomd), onde o README o descreve como obra de um único desenvolvedor. O repositório foi criado em abril de 2026. A versão mais recente, v5.2.2, saiu em 16 de novembro de 2026 e o último commit é de 17 de novembro de 2026; o desenvolvimento está ativo e nenhum aviso de projeto abandonado se aplica.',
          'Segundo o README, o editor é construído com Tauri 2, Vue 3, CodeMirror 6 e Rust. Oferece três modos de escrita (WYSIWYG puro, visualização ao vivo e visão dividida com código-fonte), wikilinks e backlinks, histórico de versões com Git por espaço de trabalho, busca semântica no dispositivo e uma central de exportação para PDF, Word, HTML, EPUB, LaTeX, ODT, RTF, texto simples e Markdown.',
          'O README também afirma que o projeto é escrito, testado e lançado em grande parte pelo Claude Code, sob um mantenedor humano que decide o que é publicado, e que as respostas às issues são escritas pelo mesmo assistente. A PromptQuorum relata isso como declaração do próprio desenvolvedor; o código é público e pode ser inspecionado.',
          'Estas descrições são afirmações do desenvolvedor. A PromptQuorum não executou o app e não verificou a qualidade do editor, a fidelidade da exportação, o comportamento da sincronização nem a qualidade das respostas da IA.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**Você instala o SoloMD como qualquer app de desktop ou celular: por um instalador, uma página de loja ou um gerenciador de pacotes.**',
          'A versão v5.2.2 no GitHub traz um .dmg universal para macOS, arquivos .msi do Windows para x64 e ARM64 com zips portáteis, AppImage, .deb e .rpm para Linux em x64 e ARM64, e APKs do Android. O README também cita a Mac App Store, a App Store do iOS, o Google Play, um cask do Homebrew, o winget e um pacote do Arch User Repository.',
        ],
        columns: ['Plataforma', 'Como obter'],
        rows: [
          { 'Plataforma': '[macOS](https://github.com/zhitongblog/solomd/releases/latest)', 'Como obter': '.dmg universal, Mac App Store ou cask do Homebrew' },
          { 'Plataforma': '[Windows](https://github.com/zhitongblog/solomd/releases/latest)', 'Como obter': '.msi (x64 ou ARM64), zip portátil ou winget' },
          { 'Plataforma': '[Linux](https://github.com/zhitongblog/solomd/releases/latest)', 'Como obter': 'AppImage, .deb ou .rpm; pacote AUR' },
          { 'Plataforma': '[iPhone e iPad](https://apps.apple.com/app/solomd/id6762498874)', 'Como obter': 'Página da App Store' },
          { 'Plataforma': '[Android](https://play.google.com/store/apps/details?id=app.solomd)', 'Como obter': 'Google Play ou APK da página de versões' },
        ],
        note: 'O README também oferece instaladores de uma linha no terminal (curl enviado ao bash no macOS, irm enviado ao iex no Windows). Enviar um script a um shell executa código que você não leu, então use-os apenas se confiar na fonte, ou baixe o instalador na página de versões. O [site](https://solomd.app) do desenvolvedor tem uma página de downloads; a PromptQuorum não executou nenhum instalador nem examinou os downloads.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**O SoloMD exige Windows 10 ou superior, macOS 10.15 ou superior, um Linux atual de uso geral, iOS 15 ou superior, ou Android 7 ou superior; os recursos de IA exigem um servidor de modelos local ou uma chave de API na nuvem.**',
          'A lista vem do README. Ele publica tamanhos de instalador de cerca de 14 MB no Windows, 16 MB no Linux, 21 MB no Android e 30 MB na versão universal do macOS, que a PromptQuorum não mediu. Não há mínimo publicado de RAM ou GPU, e as necessidades dos modelos locais dependem do servidor que você usa.',
        ],
        columns: ['Item', 'Valor informado'],
        rows: [
          { 'Item': 'Windows', 'Valor informado': 'Windows 10+, x64 e ARM64' },
          { 'Item': 'macOS', 'Valor informado': 'macOS 10.15+, Apple Silicon e Intel' },
          { 'Item': 'Linux', 'Valor informado': 'x64 e ARM64' },
          { 'Item': 'iPhone / iPad', 'Valor informado': 'iOS 15+ (página da App Store: 15.0)' },
          { 'Item': 'Android', 'Valor informado': 'Android 7+ (API 24)' },
          { 'Item': 'IA local', 'Valor informado': 'Ollama, LM Studio, Jan, vLLM ou llama.cpp' },
          { 'Item': 'IA na nuvem', 'Valor informado': 'Sua própria chave de API por provedor' },
        ],
        note: 'As necessidades de RAM e GPU dependem do modelo carregado, e o próprio app não publica um mínimo. O README descreve a versão do macOS como assinada e notarizada e não diz nada sobre as outras plataformas.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O núcleo do SoloMD é um editor de Markdown tranquilo sobre um cofre de arquivos simples, com chat de IA, busca, exportação, sincronização e servidor MCP ao redor.** Todos os itens abaixo são afirmações do desenvolvedor, tiradas do README e do site.',
        ],
        items: [
          'Três modos de escrita: WYSIWYG puro, visualização ao vivo e uma visão dividida ou de código-fonte sincronizada, além de modos foco e máquina de escrever, modo Vim, fórmulas KaTeX e diagramas Mermaid.',
          'Recursos do cofre: [[wikilinks]], backlinks, propriedades YAML e importação para Markdown de arquivos .docx, .pdf, .xlsx e .pptx por arrastar e soltar.',
          'AutoGit: cada gravação registra um instantâneo em um repositório Git local dentro do espaço de trabalho, com diff visual e reversão em um clique; o libgit2 já vem embutido, então não é preciso ter Git no sistema.',
          'Busca semântica offline no cofre com um modelo de embeddings no dispositivo; o desenvolvedor diz que não exige baixar modelos nem faz chamadas de rede.',
          'Chat de IA: um painel lateral que conversa sobre o cofre com citações em [[wikilink]], reescrita e tradução de uma seleção no texto e detecção automática de servidores locais Ollama, LM Studio, Jan, vLLM e llama.cpp. Provedores na nuvem usam a sua própria chave, guardada no chaveiro do sistema operacional.',
          'Central de exportação: PDF, Word (.docx), HTML, EPUB, LaTeX, ODT, RTF, texto simples e Markdown, sem instalar o Pandoc à parte, segundo o README.',
          'Sincronização por espaço de trabalho via iCloud Drive, OneDrive, WebDAV, armazenamento compatível com S3, Syncthing ou hospedagens Git, com criptografia de ponta a ponta opcional no seu próprio armazenamento.',
          'Um servidor MCP incluído com 16 ferramentas (12 somente leitura e 4 de escrita que exigem --allow-write), stdio por padrão e modo HTTP opcional em loopback com token, além de uma interface de linha de comando e extensões JSON.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**Segundo o desenvolvedor, as notas ficam na pasta que você escolher, a menos que você configure IA na nuvem, sincronização ou uma hospedagem de imagens; além disso, a política de privacidade descreve eventos de uso anônimos opcionais em algumas versões, o que o README não menciona.**',
          'Segundo a política de privacidade (atualizada pela última vez em 18 de abril de 2026), o SoloMD não tem sistema de contas nem publicidade, e as notas ficam armazenadas localmente. As versões baixadas do site e de lojas que não são da Apple enviam um evento anônimo ao servidor do próprio desenvolvedor na inicialização e ao usar alguns recursos; ele traz o nome do evento, a versão do app, o sistema operacional, o idioma da interface e um identificador aleatório, e a política diz que nunca inclui notas, nomes de arquivo ou caminhos. Você pode desativar em Configurações, Avançado. As versões da App Store não enviam dados de uso.',
          'As solicitações de IA vão direto do seu computador para o provedor que você configurar ou para um servidor local, segundo a política e a página de segurança, que também diz que a IA vem desativada por padrão e que as chaves de API ficam no chaveiro do sistema operacional. A sincronização, uma hospedagem de imagens e a hospedagem Git enviam dados apenas aos serviços que você configurar.',
          'O README diz que o projeto não tem servidores hospedados pelo SoloMD, o que combina mal com o servidor de eventos de uso da política. A política é anterior às opções de sincronização da v5.2 e a página de segurança é de abril de 2026; confira ambas com a versão do app que você instalar. Como o código tem licença MIT e é público, o fluxo de dados pode ser auditado.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O SoloMD serve para quem quer arquivos Markdown simples, um editor tranquilo e IA integrada sem montar plugins.**',
        ],
        items: [
          'Quem escreve e faz anotações e quer arquivos no próprio disco que outros editores consigam abrir.',
          'Quem quer conversar com as notas usando um modelo local, por exemplo servido pelo Ollama ou pelo LM Studio.',
          'Desenvolvedores que querem que um cliente MCP como o Claude Code ou o Cursor leia, pesquise ou escreva notas em um cofre.',
          'Usuários que precisam do mesmo app de notas no desktop, no iPhone e no Android sem um serviço de sincronização pago.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        content: [
          '**O SoloMD não é a melhor escolha em algumas situações, e vários detalhes continuam sem verificação.**',
        ],
        items: [
          'Não serve: equipes que precisam de um fornecedor com empresa identificada, contrato de suporte ou condições de nível de serviço. As páginas lidas não citam empresa, endereço nem país.',
          'Não serve: quem precisa de um longo histórico. O repositório foi criado em abril de 2026 e tem um único mantenedor.',
          'Não verificado: qualidade do editor, fidelidade da exportação nos 9 formatos e qualidade das respostas da IA. A PromptQuorum não executou o app.',
          'Não verificado: o comportamento da sincronização e da criptografia de ponta a ponta. As afirmações são do desenvolvedor, e a PromptQuorum não auditou o código nem testou a sincronização.',
          'Não verificado: se os eventos de uso descritos na política de privacidade correspondem ao que cada versão envia, e como a afirmação do README de «sem servidores hospedados» se encaixa.',
          'Não verificado: as contagens de recursos. A página de segurança, mais antiga, lista 14 provedores de IA e 6 ferramentas MCP padrão, enquanto o README lista mais de 20 provedores e 16 ferramentas; esta análise segue o README.',
          'Não verificado: a empresa ou o país por trás do projeto, o número de usuários e as avaliações, e análises independentes. Nenhuma foi encontrada, e as páginas comparativas do próprio desenvolvedor não foram tratadas como independentes.',
          'Não verificado: se os instaladores do Windows têm assinatura de código. O README descreve apenas a versão do macOS como assinada e notarizada e não diz nada sobre as outras plataformas.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'SoloMD versus alternativas',
        itemHeadings: true,
        content: [
          '**O SoloMD concorre com outros apps de notas com foco local; a PromptQuorum não os comparou na prática.** As ferramentas abaixo estão no diretório e são descritas a partir das próprias análises.',
        ],
        columns: ['Ferramenta', 'Segundo as fontes'],
        rows: [
          { 'Ferramenta': 'SoloMD', 'Segundo as fontes': 'MIT; 5 plataformas; grátis; servidor MCP' },
          { 'Ferramenta': '[Hillnote](/pt/power-local-llm/hillnote-review)', 'Segundo as fontes': 'Sem licença informada; 5 plataformas; freemium' },
          { 'Ferramenta': '[Tolaria](/pt/power-local-llm/tolaria-review)', 'Segundo as fontes': 'AGPL-3.0; desktop; cofre com Git; grátis' },
          { 'Ferramenta': '[Logseq](/pt/power-local-llm/logseq-review)', 'Segundo as fontes': 'AGPL-3.0; outliner; servidor MCP opcional' },
          { 'Ferramenta': '[SiYuan](/pt/power-local-llm/siyuan-review)', 'Segundo as fontes': 'AGPL-3.0; auto-hospedado; agente de IA' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O SoloMD é gratuito?',
            a: 'Sim, segundo o desenvolvedor. O código tem licença MIT, todos os recursos são gratuitos e não há assinatura. As versões da Mac App Store, da App Store do iOS e do Google Play oferecem gorjetas únicas opcionais que só liberam um selo de apoiador. Provedores de IA na nuvem acessados com a sua própria chave cobram você diretamente.',
          },
          {
            q: 'O SoloMD funciona com Ollama ou LM Studio?',
            a: 'Segundo o README, sim: em Configurações, IA há uma opção de detecção automática que encontra servidores locais de Ollama, LM Studio, Jan, vLLM e llama.cpp no localhost. Você também pode adicionar um provedor na nuvem com a sua própria chave de API. A PromptQuorum não testou a detecção.',
          },
          {
            q: 'O Claude Code ou o Cursor podem usar minhas notas do SoloMD?',
            a: 'Sim, segundo o desenvolvedor. O servidor solomd-mcp incluído expõe 16 ferramentas; as 12 de leitura ficam sempre ativas e as 4 de escrita exigem o parâmetro --allow-write. O README mostra um trecho de configuração e um comando que registra o servidor nos clientes de IA do seu computador. A PromptQuorum não testou.',
          },
          {
            q: 'Como instalo o SoloMD?',
            a: 'Baixe o instalador do seu sistema na página de versões do GitHub, ou use a Mac App Store, a App Store, o Google Play, o Homebrew ou o winget. Prefira um instalador aos scripts de uma linha, a menos que confie na fonte. A PromptQuorum não executou a instalação.',
          },
          {
            q: 'O SoloMD envia minhas notas para algum lugar?',
            a: 'Por padrão não, segundo o desenvolvedor: as notas ficam na sua pasta e as solicitações de IA vão para o provedor ou servidor local que você escolher. A política de privacidade acrescenta que as versões do site e de lojas que não são da Apple enviam eventos de uso anônimos, a menos que você os desative. A sincronização só alcança os serviços que você configurar.',
          },
          {
            q: 'Qual formato o SoloMD usa para as notas?',
            a: 'Segundo o README, arquivos .md simples em uma pasta que você escolhe, que outros editores de Markdown conseguem abrir. O desenvolvedor acrescenta wikilinks, backlinks e propriedades YAML, além da importação por arrastar e soltar de arquivos .docx, .pdf, .xlsx e .pptx para Markdown. A PromptQuorum não testou a importação.',
          },
          {
            q: 'Quais formatos de exportação o SoloMD oferece?',
            a: 'Segundo o README, a central de exportação cobre PDF, Word (.docx), HTML, EPUB, LaTeX, ODT, RTF, texto simples e Markdown, sem instalar o Pandoc à parte. A PromptQuorum não verificou a fidelidade de nenhuma exportação.',
          },
          {
            q: 'Como o SoloMD sincroniza as notas entre dispositivos?',
            a: 'Por espaço de trabalho, via iCloud Drive, OneDrive, WebDAV, armazenamento compatível com S3, Syncthing ou um serviço Git, segundo o desenvolvedor, com criptografia de ponta a ponta opcional no seu próprio armazenamento. A PromptQuorum não testou a sincronização nem auditou a criptografia.',
          },
          {
            q: 'O que é o AutoGit no SoloMD?',
            a: 'O desenvolvedor o descreve como um instantâneo salvo a cada gravação em um repositório Git local dentro do espaço de trabalho, com diferenças visuais e reversão com um clique. O libgit2 já vem embutido, então não é preciso ter o Git no sistema. A PromptQuorum não testou o recurso.',
          },
          {
            q: 'Em quais sistemas o SoloMD funciona?',
            a: 'Segundo o README: Windows 10 ou posterior (x64 e ARM64), macOS 10.15 ou posterior, Linux (x64 e ARM64), iOS 15 ou posterior e Android 7 ou posterior. O README não publica um mínimo de RAM nem de GPU; a necessidade dos modelos locais depende do servidor que você usa.',
          },
          {
            q: 'Quem mantém o SoloMD e ele ainda recebe atualizações?',
            a: 'O README descreve um único mantenedor humano e diz que o projeto é escrito, testado e lançado em grande parte pelo Claude Code. O repositório é jovem e as páginas lidas pela PromptQuorum não citam empresa nem país. Consulte a página de versões para ver a mais recente antes de depender dele.',
          },
          {
            q: 'Quais recursos de IA o SoloMD tem além do chat?',
            a: 'Segundo o README: reescrita e tradução no próprio texto de um trecho selecionado, citações com [[wikilinks]] no painel de chat e busca semântica offline no cofre, com um modelo de embeddings no próprio dispositivo que, segundo o desenvolvedor, não exige baixar nenhum modelo. A PromptQuorum não testou a qualidade das respostas.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O SoloMD vale uma olhada se você quer arquivos Markdown simples, um editor tranquilo, chat sobre as suas notas com modelo local ou com chave própria e um servidor MCP em um único app gratuito.**',
          'No papel ele cobre muita coisa: três modos de edição, backlinks, busca no dispositivo, exportação em 9 formatos, apps para cinco plataformas, sincronização na nuvem e com Git, detecção de modelos locais e 16 ferramentas MCP, com a v5.2.2 lançada em 16 de novembro de 2026 e um commit em 17 de novembro de 2026.',
          'As contrapartidas são reais. É um projeto jovem, com um único mantenedor e um processo de desenvolvimento conduzido por IA declarado publicamente; nenhuma empresa nem país é citado, e as páginas do próprio desenvolvedor se contradizem em telemetria e número de recursos. A PromptQuorum não testou o app, então experimente com uma cópia de uma pasta pequena, revise as configurações de privacidade e confira a exportação de que você precisa antes de depender dele.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do SoloMD](https://solomd.app) — recursos, plataformas e downloads, consultado em 17 de novembro de 2026.',
          '[Política de privacidade](https://solomd.app/privacy) — eventos de uso e tratamento de dados, atualizada em 18 de abril de 2026, consultada em 17 de novembro de 2026.',
          '[Página de segurança](https://solomd.app/security) — IA, armazenamento de chaves e tratamento do MCP, datada de abril de 2026, consultada em 17 de novembro de 2026.',
          '[Novidades](https://solomd.app/whats-new/) — notas de versão, consultadas em 17 de novembro de 2026.',
          '[Repositório do GitHub](https://github.com/zhitongblog/solomd) — licença, data de criação e último commit, consultado em 17 de novembro de 2026.',
          '[README](https://github.com/zhitongblog/solomd#readme) — recursos, instalação, ferramentas MCP e privacidade, consultado em 17 de novembro de 2026.',
          '[Versão v5.2.2](https://github.com/zhitongblog/solomd/releases/tag/v5.2.2) — versão mais recente, sua data e os arquivos de instalação, consultada em 17 de novembro de 2026.',
          '[Página da App Store](https://apps.apple.com/app/solomd/id6762498874) — versão do iOS, preço e sistema mínimo, consultada em 17 de novembro de 2026.',
          '[Página do Google Play](https://play.google.com/store/apps/details?id=app.solomd) — disponibilidade no Android, consultada em 17 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Hillnote](/pt/power-local-llm/hillnote-review) — notas Markdown com foco local e IA no dispositivo para Mac, Windows e celulares.',
          '[Análise do Tolaria](/pt/power-local-llm/tolaria-review) — um app de notas gratuito para desktop com arquivos Markdown em um cofre apoiado em Git.',
          '[Análise do Logseq](/pt/power-local-llm/logseq-review) — um outliner de código aberto, com foco local, com servidor MCP opcional.',
          '[Análise do SiYuan](/pt/power-local-llm/siyuan-review) — um espaço de conhecimento auto-hospedado com agente de IA integrado.',
          '[Diretório de software LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
          '[Análise do GenOffice](/pt/power-local-llm/genoffice-review) — uma suíte de escritório para desktop gratuita e de código aberto para arquivos do Word, Excel e PowerPoint; as chamadas de IA vão por padrão a um provedor na nuvem.',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/solomd-review-hero-zh.webp',
    title: 'SoloMD 点评：支持本地模型 AI 对话与 MCP 的免费 Markdown 笔记应用',
    seoTitle: 'SoloMD 点评：Markdown 笔记、AI 对话、MCP',
    intro:
      'SoloMD 是一款免费的 Markdown 笔记应用，采用 MIT 许可证，支持 macOS、Windows、Linux、iPhone、iPad 和 Android。它把笔记保存为文件夹里的普通 .md 文件，并在此基础上提供针对该文件夹的 AI 对话、本地模型自动发现、9 种格式导出和内置 MCP 服务器。本点评基于开发者网站、隐私政策、GitHub 仓库、发布页和各应用商店页面，核查日期为 2026 年 11 月 17 日。PromptQuorum 未亲自实测该应用。',
    metaDescription:
      'SoloMD 是 MIT 许可的免费 Markdown 笔记应用，支持 5 个平台，可与笔记库对话，自动发现 Ollama 和 LM Studio，并内置 MCP 服务器。安装与隐私说明。',
    twitterDescription:
      'SoloMD 把笔记存为 Markdown 文件，并提供笔记库对话、本地模型发现、9 种格式导出和 MCP 服务器。免费，MIT。哪些已证实，哪些未证实。',
    audience:
      '希望用普通 Markdown 文件并内置 AI 的笔记用户和写作者，把笔记库接入 MCP 客户端的开发者，以及正在评估单人维护的新开源应用的人',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'SoloMD 点评',
    targetKeywords: [
      'SoloMD 点评',
      'Markdown 笔记应用 本地 AI',
      'SoloMD MCP 服务器',
      'Obsidian 开源替代',
      'Typora 免费替代',
      'SoloMD 安装',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**SoloMD 是一款免费开源（MIT）的 Markdown 笔记应用，把笔记保存为普通文件，并提供针对笔记库的 AI 对话、本地模型自动发现和内置 MCP 服务器。** 它支持 macOS、Windows、Linux、iPhone、iPad 和 Android，可通过常规安装包或应用商店安装，据 README，它能连接 Ollama、LM Studio、Jan、vLLM、llama.cpp，或使用你自己 API 密钥的云端服务。项目较新，由一位开发者维护，PromptQuorum 未实测。',
    quickAnswerTop: {
      zh: {
        question: 'SoloMD 是什么，适合谁用？',
        answer:
          '据开发者称，SoloMD 是带 AI 对话、离线语义搜索和 MCP 服务器的 Markdown 编辑器与笔记库。适合希望笔记以普通文件保存在自己磁盘上，并且不想到处找插件就能使用本地 AI 或自带密钥 AI 的人。',
        bullets: [
          '免费，MIT 许可；支持 macOS、Windows、Linux、iOS、iPadOS 和 Android。',
          '笔记是普通 .md 文件；AutoGit 每次保存都会生成本地 Git 快照。',
          '可对笔记库进行 AI 对话并就地改写，使用 Ollama 等本地服务器，或使用自带密钥的云端服务。',
          '内置面向 Claude Desktop、Claude Code、Cursor 和 Windsurf 的 MCP 服务器；据开发者称，写入工具默认关闭，需手动启用。',
          '单人维护，仓库创建于 2026 年 4 月；开发者各页面在遥测和功能数量上说法不一。',
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
            text: 'SoloMD 是一款免费的 Markdown 笔记应用，把笔记保存为普通文件，并在其上提供 AI 对话、本地模型发现和 MCP 服务器。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作一个安静的 Markdown 编辑器，带有一个互相链接的笔记库，AI 助手可以读取你的笔记并回答相关问题。AI 可以是运行在你电脑上的模型，也可以是用你自己的密钥付费使用的云端服务。',
          },
        ],
        items: [
          '开源（MIT）且免费；开发者称没有订阅，应用商店中可选的打赏只会解锁一个支持者徽章。',
          '支持 macOS、Windows（x64 和 ARM64）、Linux（x64 和 ARM64）、iPhone、iPad 和 Android；各系统都有安装包或商店页面。',
          'AI：针对笔记库的对话、就地改写，自动发现 localhost 上的 Ollama、LM Studio、Jan、vLLM 和 llama.cpp，或使用自带密钥的云端服务。',
          '据 README，内置 MCP 服务器向 Claude Desktop、Claude Code、Cursor 和 Windsurf 提供 16 个工具；4 个写入工具需要显式开启。',
          'PromptQuorum 未实测该应用。隐私政策与 README 对是否会连接 SoloMD 服务器说法不同。',
        ],
        callouts: [
          {
            type: 'note',
            text: '隐私政策称，来自官网和非 Apple 商店的版本会向开发者的服务器发送匿名使用事件，除非你在设置中关闭；App Store 版本不发送。README 则称没有 SoloMD 托管的服务器。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**SoloMD 是一款 Markdown 笔记应用，把装有 .md 文件的普通文件夹当作笔记库，并在其上叠加 AI 对话、搜索、导出和 MCP 服务器。**',
          '项目采用 MIT 许可证，在 [github.com/zhitongblog/solomd](https://github.com/zhitongblog/solomd) 公开开发，README 称其由一位开发者制作。仓库创建于 2026 年 4 月。最新版本 v5.2.2 发布于 2026 年 11 月 16 日，最后一次提交在 2026 年 11 月 17 日，开发仍在进行，因此不适用“项目停更”警告。',
          '据 README，编辑器基于 Tauri 2、Vue 3、CodeMirror 6 和 Rust 构建。提供三种写作模式（纯 WYSIWYG、实时预览和源码分栏）、维基链接与反向链接、按工作区划分的 Git 版本历史、设备端语义搜索，以及可导出 PDF、Word、HTML、EPUB、LaTeX、ODT、RTF、纯文本和 Markdown 的导出中心。',
          'README 还称，项目主要由 Claude Code 编写、测试和发布，由一位人类维护者决定发布内容，issue 回复也由同一个助手撰写。PromptQuorum 将其作为开发者自己的说明转述；代码公开，任何人都可以检查。',
          '以上描述均为开发者的说法。PromptQuorum 未运行该应用，也未核查编辑器质量、导出保真度、同步行为或 AI 回答质量。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '如何获取',
        content: [
          '**SoloMD 的安装方式与其他桌面或移动应用相同：安装包、商店页面或包管理器。**',
          'GitHub 发布版 v5.2.2 提供 macOS 通用 .dmg、面向 x64 和 ARM64 的 Windows .msi 及便携 zip、面向 x64 和 ARM64 的 Linux AppImage、.deb 与 .rpm，以及 Android APK。README 还列出了 Mac App Store、iOS App Store、Google Play、Homebrew cask、winget 和 Arch User Repository 软件包。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          { '平台': '[macOS](https://github.com/zhitongblog/solomd/releases/latest)', '获取方式': '通用 .dmg、Mac App Store 或 Homebrew cask' },
          { '平台': '[Windows](https://github.com/zhitongblog/solomd/releases/latest)', '获取方式': '.msi（x64 或 ARM64）、便携 zip 或 winget' },
          { '平台': '[Linux](https://github.com/zhitongblog/solomd/releases/latest)', '获取方式': 'AppImage、.deb 或 .rpm；AUR 软件包' },
          { '平台': '[iPhone 和 iPad](https://apps.apple.com/app/solomd/id6762498874)', '获取方式': 'App Store 页面' },
          { '平台': '[Android](https://play.google.com/store/apps/details?id=app.solomd)', '获取方式': 'Google Play 或发布页的 APK' },
        ],
        note: 'README 还提供一行命令的 shell 安装方式（macOS 用 curl 管道给 bash，Windows 用 irm 管道给 iex）。把脚本直接交给 shell 会运行你没有读过的代码，因此只在信任来源时使用，或改用发布页上的安装包。开发者的[网站](https://solomd.app)也有下载页；PromptQuorum 没有运行任何安装程序，也没有扫描下载文件。',
      },
      requirements: {
        id: 'requirements',
        title: '系统要求',
        content: [
          '**SoloMD 需要 Windows 10 或更高版本、macOS 10.15 或更高版本、当前主流 Linux、iOS 15 或更高版本，或 Android 7 或更高版本；AI 功能需要本地模型服务器或云端 API 密钥。**',
          '清单来自 README。README 给出的安装包大小约为 Windows 14 MB、Linux 16 MB、Android 21 MB、macOS 通用版 30 MB，PromptQuorum 未测量。未公布 RAM 或 GPU 下限，本地模型的需求取决于你运行的服务器。',
        ],
        columns: ['项目', '来源中的说明'],
        rows: [
          { '项目': 'Windows', '来源中的说明': 'Windows 10+，x64 和 ARM64' },
          { '项目': 'macOS', '来源中的说明': 'macOS 10.15+，Apple Silicon 和 Intel' },
          { '项目': 'Linux', '来源中的说明': 'x64 和 ARM64' },
          { '项目': 'iPhone / iPad', '来源中的说明': 'iOS 15+（App Store 页面：15.0）' },
          { '项目': 'Android', '来源中的说明': 'Android 7+（API 24）' },
          { '项目': '本地 AI', '来源中的说明': 'Ollama、LM Studio、Jan、vLLM 或 llama.cpp' },
          { '项目': '云端 AI', '来源中的说明': '每个服务商使用你自己的 API 密钥' },
        ],
        note: 'RAM 和 GPU 需求取决于你加载的模型，应用本身没有公布下限。README 将 macOS 版本描述为已签名并公证，对其他平台则未作说明。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**SoloMD 的核心是建立在普通文件笔记库之上的安静 Markdown 编辑器，周围配有 AI 对话、搜索、导出、同步和 MCP 服务器。** 以下各项均为开发者在 README 和网站上的说法。',
        ],
        items: [
          '三种写作模式：纯 WYSIWYG、实时预览，以及同步的分栏或源码视图；另有专注模式、打字机模式、Vim 模式、KaTeX 公式和 Mermaid 图表。',
          '笔记库功能：[[维基链接]]、反向链接、YAML 属性，以及通过拖放把 .docx、.pdf、.xlsx 和 .pptx 文件导入为 Markdown。',
          'AutoGit：每次保存都会把快照提交到工作区内的本地 Git 仓库，支持可视化差异和一键回滚；内置 libgit2，无需系统安装 Git。',
          '使用设备端嵌入模型对笔记库做离线语义搜索；开发者称无需下载模型，也不发起网络请求。',
          'AI 对话：侧边面板可对笔记库对话并附 [[维基链接]] 引用，可对选中文本就地改写和翻译，并自动发现本地 Ollama、LM Studio、Jan、vLLM 和 llama.cpp 服务器。云端服务使用你自己的密钥，密钥存放在操作系统钥匙串中。',
          '导出中心：PDF、Word（.docx）、HTML、EPUB、LaTeX、ODT、RTF、纯文本和 Markdown；据 README 无需另装 Pandoc。',
          '按工作区同步，可用 iCloud Drive、OneDrive、WebDAV、兼容 S3 的存储、Syncthing 或 Git 托管，并可在你自己的存储上启用端到端加密。',
          '内置 MCP 服务器提供 16 个工具（12 个只读，4 个写入工具需要 --allow-write），默认 stdio，另有带令牌的本地回环 HTTP 模式，并附命令行界面和 JSON 扩展。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**据开发者称，除非你设置云端 AI、同步或图床，笔记会保留在你选择的文件夹中；此外，隐私政策还描述了部分版本中可选的匿名使用事件，README 没有提到。**',
          '据隐私政策（最后更新于 2026 年 4 月 18 日），SoloMD 没有账户系统，也没有广告，笔记存储在本地。从官网和非 Apple 商店下载的版本会在启动和使用某些功能时，向开发者自己的服务器发送匿名事件；内容包括事件名称、应用版本、操作系统、界面语言和随机标识符，政策称不含笔记、文件名或路径。可在“设置”“高级”中关闭。App Store 版本不发送使用数据。',
          '据政策和安全页面，AI 请求直接从你的电脑发送到你配置的服务商或本地服务器；安全页面还称 AI 默认关闭，API 密钥存放在操作系统钥匙串中。同步、图床和 Git 托管只会把数据发送到你自己设置的服务。',
          'README 称项目没有 SoloMD 托管的服务器，这与政策中的使用事件服务器并不吻合。政策早于 v5.2 的同步选项，安全页面日期为 2026 年 4 月；请对照你安装的应用版本核实。由于代码采用 MIT 许可并公开，数据流向可以审计。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        content: [
          '**SoloMD 适合想要普通 Markdown 文件、安静的编辑器和无需拼凑插件的内置 AI 的人。**',
        ],
        items: [
          '希望文件放在自己磁盘上、其他编辑器也能打开的写作者和笔记用户。',
          '想用本地模型（例如通过 Ollama 或 LM Studio 提供）与笔记对话的人。',
          '希望 Claude Code 或 Cursor 等 MCP 客户端读取、搜索或写入笔记库的开发者。',
          '需要在桌面、iPhone 和 Android 上使用同一款笔记应用，又不想为同步付费的用户。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        content: [
          '**SoloMD 在某些情况下并不合适，也有若干细节尚未核实。**',
        ],
        items: [
          '不适合：需要有明确公司主体、支持合同或服务等级条款的供应商的团队。所读页面没有给出公司、地址或国家。',
          '不适合：需要长期口碑的人。仓库创建于 2026 年 4 月，只有一位维护者。',
          '未核实：编辑器质量、9 种格式的导出保真度以及 AI 回答质量。PromptQuorum 未运行该应用。',
          '未核实：同步与端到端加密的行为。相关说法来自开发者，PromptQuorum 未审计代码，也未测试同步。',
          '未核实：隐私政策所述的使用事件是否与各版本实际发送的内容一致，以及 README 的“没有托管服务器”如何与之相容。',
          '未核实：功能数量。较早的安全页面列出 14 家 AI 服务商和 6 个默认 MCP 工具，README 则列出 20 多家服务商和 16 个工具；本点评以 README 为准。',
          '未核实：项目背后的公司或国家、用户数量与评分，以及独立评测。均未找到，开发者自己的对比页面未被视为独立来源。',
          '未核实：Windows 安装包是否有代码签名。README 只把 macOS 版本描述为已签名并公证，对其他平台未作说明。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'SoloMD 与替代方案对比',
        itemHeadings: true,
        content: [
          '**SoloMD 与其他本地优先的笔记应用竞争；PromptQuorum 没有对它们做过实际对比。** 以下工具均收录于目录，描述依据它们各自的评测。',
        ],
        columns: ['工具', '来源中的记载'],
        rows: [
          { '工具': 'SoloMD', '来源中的记载': 'MIT；5 个平台；免费；MCP 服务器' },
          { '工具': '[Hillnote](/zh/power-local-llm/hillnote-review)', '来源中的记载': '未标明许可；5 个平台；免费增值' },
          { '工具': '[Tolaria](/zh/power-local-llm/tolaria-review)', '来源中的记载': 'AGPL-3.0；桌面；Git 笔记库；免费' },
          { '工具': '[Logseq](/zh/power-local-llm/logseq-review)', '来源中的记载': 'AGPL-3.0；大纲笔记；可选 MCP 服务器' },
          { '工具': '[SiYuan](/zh/power-local-llm/siyuan-review)', '来源中的记载': 'AGPL-3.0；自托管；内置 AI 智能体' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'SoloMD 免费吗？',
            a: '据开发者称是免费的。代码采用 MIT 许可，所有功能免费，没有订阅。Mac App Store、iOS App Store 和 Google Play 版本提供可选的一次性打赏，只会解锁支持者徽章。你用自己密钥访问的云端 AI 服务商会直接向你计费。',
          },
          {
            q: 'SoloMD 能配合 Ollama 或 LM Studio 使用吗？',
            a: '据 README，可以：设置中的 AI 页面有自动检测选项，可发现 localhost 上的 Ollama、LM Studio、Jan、vLLM 和 llama.cpp 服务器。你也可以用自己的 API 密钥添加云端服务。PromptQuorum 未测试该检测功能。',
          },
          {
            q: 'Claude Code 或 Cursor 能使用我的 SoloMD 笔记吗？',
            a: '据开发者称可以。内置的 solomd-mcp 服务器提供 16 个工具；12 个读取工具始终可用，4 个写入工具需要 --allow-write 参数。README 给出了配置片段，以及把服务器注册到你电脑上各 AI 客户端的命令。PromptQuorum 未测试。',
          },
          {
            q: '如何安装 SoloMD？',
            a: '从 GitHub 发布页下载适合你系统的安装包，或使用 Mac App Store、App Store、Google Play、Homebrew 或 winget。除非信任来源，否则优先使用安装包而不是一行命令的 shell 脚本。PromptQuorum 未运行安装过程。',
          },
          {
            q: 'SoloMD 会把我的笔记发送到别处吗？',
            a: '据开发者称默认不会：笔记保留在你的文件夹中，AI 请求发往你选择的服务商或本地服务器。隐私政策补充说明，官网和非 Apple 商店的版本会发送匿名使用事件，除非你关闭。同步只会到达你自己配置的服务。',
          },
          {
            q: 'SoloMD 用什么格式保存笔记？',
            a: '据 README，笔记是你所选文件夹中的普通 .md 文件，其他 Markdown 编辑器也能打开。开发者还提到 wikilinks、反向链接、YAML 属性，以及把 .docx、.pdf、.xlsx 和 .pptx 文件拖放导入为 Markdown。PromptQuorum 未测试导入功能。',
          },
          {
            q: 'SoloMD 支持哪些导出格式？',
            a: '据 README，导出中心支持 PDF、Word (.docx)、HTML、EPUB、LaTeX、ODT、RTF、纯文本和 Markdown，无需另行安装 Pandoc。PromptQuorum 未检查任何导出格式的还原效果。',
          },
          {
            q: 'SoloMD 如何在设备之间同步笔记？',
            a: '据开发者称，按工作区通过 iCloud Drive、OneDrive、WebDAV、S3 兼容存储、Syncthing 或 Git 托管服务同步，并可在你自己的存储上启用可选的端到端加密。PromptQuorum 未测试同步，也未审计加密。',
          },
          {
            q: 'SoloMD 的 AutoGit 是什么？',
            a: '开发者称，每次保存都会把快照提交到工作区内的本地 Git 仓库，并提供可视化差异和一键回滚。内置了 libgit2，无需系统 Git。PromptQuorum 未测试该功能。',
          },
          {
            q: 'SoloMD 可以在哪些系统上运行？',
            a: '据 README：Windows 10 或更高版本（x64 和 ARM64）、macOS 10.15 或更高版本、Linux（x64 和 ARM64）、iOS 15 或更高版本以及 Android 7 或更高版本。README 未公布内存或 GPU 的最低要求，本地模型的需求取决于你运行的服务器。',
          },
          {
            q: 'SoloMD 由谁维护，还在更新吗？',
            a: 'README 称只有一位人类维护者，并表示项目主要由 Claude Code 编写、测试和发布。该仓库较新，PromptQuorum 阅读的页面中没有提到公司或国家。依赖它之前，请先在发布页面查看最新版本。',
          },
          {
            q: 'SoloMD 除了对话还有哪些 AI 功能？',
            a: '据 README：对所选段落进行就地改写和翻译，在对话面板中以 [[wikilink]] 形式引用笔记，以及借助设备端嵌入模型对笔记库进行离线语义搜索；开发者称该嵌入模型无需下载模型。PromptQuorum 未测试回答质量。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果你想在一款免费应用里同时获得普通 Markdown 文件、安静的编辑器、用本地模型或自带密钥模型与笔记对话，以及 MCP 服务器，SoloMD 值得一试。**',
          '从纸面看，它覆盖面很广：三种编辑模式、反向链接、设备端搜索、9 种格式导出、五个平台的应用、云端与 Git 同步、本地模型发现和 16 个 MCP 工具，v5.2.2 发布于 2026 年 11 月 16 日，并在 2026 年 11 月 17 日有提交。',
          '取舍同样真实。这是一个由一人维护的新项目，并公开说明以 AI 驱动开发，没有给出公司或国家，开发者各页面在遥测和功能数量上说法不一。PromptQuorum 未实测该应用，因此请先在小文件夹的副本上试用，检查隐私设置并确认你需要的导出效果，再决定是否依赖它。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[SoloMD 网站](https://solomd.app) — 功能、平台和下载，核查于 2026 年 11 月 17 日。',
          '[隐私政策](https://solomd.app/privacy) — 使用事件与数据处理，最后更新于 2026 年 4 月 18 日，核查于 2026 年 11 月 17 日。',
          '[安全页面](https://solomd.app/security) — AI、密钥存储和 MCP 处理，日期为 2026 年 4 月，核查于 2026 年 11 月 17 日。',
          '[更新内容](https://solomd.app/whats-new/) — 版本说明，核查于 2026 年 11 月 17 日。',
          '[GitHub 仓库](https://github.com/zhitongblog/solomd) — 许可证、创建日期和最后一次提交，核查于 2026 年 11 月 17 日。',
          '[README](https://github.com/zhitongblog/solomd#readme) — 功能、安装、MCP 工具和隐私，核查于 2026 年 11 月 17 日。',
          '[发布版 v5.2.2](https://github.com/zhitongblog/solomd/releases/tag/v5.2.2) — 最新版本、其日期和安装文件，核查于 2026 年 11 月 17 日。',
          '[App Store 页面](https://apps.apple.com/app/solomd/id6762498874) — iOS 版本、价格和最低系统，核查于 2026 年 11 月 17 日。',
          '[Google Play 页面](https://play.google.com/store/apps/details?id=app.solomd) — Android 可用性，核查于 2026 年 11 月 17 日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Hillnote 点评](/zh/power-local-llm/hillnote-review) — 面向 Mac、Windows 和手机、带设备端 AI 的本地优先 Markdown 笔记。',
          '[Tolaria 点评](/zh/power-local-llm/tolaria-review) — 一款免费桌面笔记应用，Markdown 文件存放在由 Git 支持的笔记库中。',
          '[Logseq 点评](/zh/power-local-llm/logseq-review) — 一款开源、本地优先的大纲笔记，带可选 MCP 服务器。',
          '[SiYuan 点评](/zh/power-local-llm/siyuan-review) — 一款自托管知识工作区，内置 AI 智能体。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
          '[GenOffice评测](/zh/power-local-llm/genoffice-review) — 免费开源的桌面办公套件，可处理 Word、Excel 和 PowerPoint 文件；AI 调用默认发送到云端服务商。',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/solomd-review-hero-ar.webp',
    title: 'مراجعة SoloMD: تطبيق ملاحظات Markdown مجاني مع دردشة ذكاء اصطناعي للنماذج المحلية وخادم MCP',
    seoTitle: 'مراجعة SoloMD: ملاحظات Markdown ودردشة ذكاء اصطناعي وMCP',
    intro:
      'SoloMD تطبيق ملاحظات Markdown مجاني برخصة MIT لأنظمة macOS وWindows وLinux وiPhone وiPad وAndroid. يحفظ الملاحظات كملفات .md بسيطة داخل مجلد، ويضيف دردشة بالذكاء الاصطناعي حول هذا المجلد واكتشافًا تلقائيًا للنماذج المحلية وتصديرًا بتسعة تنسيقات وخادم MCP مرفقًا. تستند هذه المراجعة إلى موقع المطوّر وسياسة الخصوصية ومستودع GitHub وصفحة الإصدارات وصفحات المتاجر، وقد روجعت في 17 نوفمبر 2026. لم تجرّب PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'SoloMD تطبيق ملاحظات Markdown مجاني برخصة MIT لخمس منصات، مع دردشة ذكاء اصطناعي حول مجلد ملاحظاتك واكتشاف Ollama وLM Studio وخادم MCP. التثبيت والخصوصية.',
    twitterDescription:
      'يحفظ SoloMD الملاحظات كملفات Markdown ويضيف دردشة مع المجلد واكتشاف النماذج المحلية وتصديرًا بتسعة تنسيقات وخادم MCP. مجاني وبرخصة MIT. ما تأكد وما لم يتأكد.',
    audience:
      'كتّاب الملاحظات والمؤلفون الذين يريدون ملفات Markdown بسيطة مع ذكاء اصطناعي مدمج، والمطوّرون الذين يربطون مجلد ملاحظات بعملاء MCP، ومن يقيّمون تطبيقًا مفتوح المصدر حديثًا يديره مشرف واحد',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة SoloMD',
    targetKeywords: [
      'مراجعة SoloMD',
      'تطبيق ملاحظات Markdown ذكاء اصطناعي محلي',
      'خادم MCP لتطبيق SoloMD',
      'بديل Obsidian مفتوح المصدر',
      'بديل Typora مجاني',
      'تثبيت SoloMD',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**SoloMD تطبيق ملاحظات Markdown مجاني ومفتوح المصدر (MIT) يحفظ الملاحظات كملفات بسيطة ويضيف دردشة بالذكاء الاصطناعي حول مجلد ملاحظاتك واكتشافًا تلقائيًا للنماذج المحلية وخادم MCP مرفقًا.** يعمل على macOS وWindows وLinux وiPhone وiPad وAndroid، ويُثبَّت عبر مثبّت عادي أو متجر تطبيقات، وبحسب README يتصل بـ Ollama أو LM Studio أو Jan أو vLLM أو llama.cpp أو بمزوّد سحابي بمفتاح API الخاص بك. المشروع حديث ويديره مطوّر واحد، ولم تختبره PromptQuorum.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو SoloMD ولمن هو؟',
        answer:
          'بحسب المطوّر، SoloMD محرّر Markdown ومجلد ملاحظات مع دردشة ذكاء اصطناعي مدمجة وبحث دلالي دون اتصال وخادم MCP. يناسب من يريد ملاحظاته كملفات بسيطة على قرصه ويريد ذكاءً اصطناعيًا محليًا أو بمفتاحه الخاص دون البحث عن إضافات.',
        bullets: [
          'مجاني وبرخصة MIT؛ يعمل على macOS وWindows وLinux وiOS وiPadOS وAndroid.',
          'الملاحظات ملفات .md بسيطة؛ ويحفظ AutoGit لقطة Git محلية عند كل حفظ.',
          'دردشة ذكاء اصطناعي حول المجلد وإعادة صياغة داخل النص، عبر خادم محلي مثل Ollama أو مزوّد سحابي بمفتاحك الخاص.',
          'خادم MCP مرفق لـ Claude Desktop وClaude Code وCursor وWindsurf؛ وبحسب المطوّر فأدوات الكتابة معطّلة ما لم تفعّلها.',
          'مشرف واحد، وأُنشئ المستودع في أبريل 2026؛ وتتعارض صفحات المطوّر في التتبّع وعدد الميزات.',
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
            text: 'SoloMD تطبيق ملاحظات Markdown مجاني يحفظ ملاحظاتك كملفات بسيطة ويضيف دردشة بالذكاء الاصطناعي واكتشافًا للنماذج المحلية وخادم MCP.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّل محرّر Markdown هادئًا مع مجلد ملاحظات مترابطة، يستطيع فيه مساعد ذكاء اصطناعي قراءة ملاحظاتك والإجابة عن أسئلتك حولها. قد يكون الذكاء الاصطناعي نموذجًا يعمل على حاسوبك أو خدمة سحابية تدفع ثمنها بمفتاحك الخاص.',
          },
        ],
        items: [
          'مفتوح المصدر برخصة MIT ومجاني؛ يقول المطوّر إنه لا يوجد اشتراك، وإن الإكراميات الاختيارية في متاجر التطبيقات تفتح شارة داعم فقط.',
          'يعمل على macOS وWindows (x64 وARM64) وLinux (x64 وARM64) وiPhone وiPad وAndroid؛ ويتوفر مثبّت أو صفحة متجر لكل نظام.',
          'الذكاء الاصطناعي: دردشة حول المجلد وإعادة صياغة داخل النص واكتشاف تلقائي لـ Ollama وLM Studio وJan وvLLM وllama.cpp على localhost، أو مزوّد سحابي بمفتاحك الخاص.',
          'بحسب README، خادم MCP مرفق يتيح 16 أداة لـ Claude Desktop وClaude Code وCursor وWindsurf؛ وأدوات الكتابة الأربع تحتاج إلى خيار صريح.',
          'لم تختبر PromptQuorum التطبيق. وتختلف سياسة الخصوصية وملف README في ما إذا كان يُتصل بأي خادم تابع لـ SoloMD.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تقول سياسة الخصوصية إن النسخ المحمّلة من الموقع ومن متاجر غير Apple ترسل أحداث استخدام مجهولة إلى خادم المطوّر ما لم تُعطّل ذلك من الإعدادات، بينما لا ترسل نسخ App Store شيئًا. ويقول README إنه لا توجد خوادم تستضيفها SoloMD.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**SoloMD تطبيق ملاحظات Markdown يعامل مجلدًا عاديًا من ملفات .md على أنه مجلد ملاحظاتك (vault)، ويضيف فوقه دردشة بالذكاء الاصطناعي وبحثًا وتصديرًا وخادم MCP.**',
          'المشروع برخصة MIT ويُطوَّر علنًا على [github.com/zhitongblog/solomd](https://github.com/zhitongblog/solomd)، ويصفه README بأنه من صنع مطوّر واحد. أُنشئ المستودع في أبريل 2026. صدر أحدث إصدار v5.2.2 في 16 نوفمبر 2026، وكان آخر commit في 17 نوفمبر 2026، فالتطوير نشط ولا ينطبق تحذير المشروع المتوقف.',
          'بحسب README، بُني المحرر باستخدام Tauri 2 وVue 3 وCodeMirror 6 وRust. ويوفر ثلاثة أوضاع للكتابة (WYSIWYG خالص ومعاينة حية وعرض مقسّم مع المصدر)، وروابط wikilinks وروابط عكسية، وسجل إصدارات مبنيًا على Git لكل مساحة عمل، وبحثًا دلاليًا على الجهاز، ومركز تصدير إلى PDF وWord وHTML وEPUB وLaTeX وODT وRTF والنص العادي وMarkdown.',
          'ويذكر README أيضًا أن المشروع يُكتب ويُختبر ويُصدر في معظمه بواسطة Claude Code تحت إشراف مشرف بشري يقرر ما يُنشر، وأن الردود على issues يكتبها المساعد نفسه. وتنقل PromptQuorum هذا بوصفه إفادة من المطوّر نفسه؛ والشيفرة عامة ويمكن لأي شخص فحصها.',
          'هذه الأوصاف إفادات من المطوّر. لم تشغّل PromptQuorum التطبيق ولم تتحقق من جودة المحرر أو دقة التصدير أو سلوك المزامنة أو جودة إجابات الذكاء الاصطناعي.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**تثبّت SoloMD مثل أي تطبيق مكتبي أو جوال: عبر مثبّت أو صفحة متجر أو مدير حزم.**',
          'يتضمن إصدار GitHub رقم v5.2.2 ملف .dmg شاملًا لـ macOS، وملفات .msi لنظام Windows لمعالجات x64 وARM64 مع أرشيفات zip محمولة، وملفات AppImage و.deb و.rpm لنظام Linux على x64 وARM64، وملفات APK لنظام Android. ويذكر README أيضًا Mac App Store وApp Store لنظام iOS وGoogle Play وحزمة cask لـ Homebrew وwinget وحزمة في Arch User Repository.',
        ],
        columns: ['الطريقة', 'كيف تحصل عليه'],
        rows: [
          { 'الطريقة': '[macOS](https://github.com/zhitongblog/solomd/releases/latest)', 'كيف تحصل عليه': 'ملف .dmg شامل أو Mac App Store أو Homebrew cask' },
          { 'الطريقة': '[Windows](https://github.com/zhitongblog/solomd/releases/latest)', 'كيف تحصل عليه': '.msi (x64 أو ARM64) أو zip محمول أو winget' },
          { 'الطريقة': '[Linux](https://github.com/zhitongblog/solomd/releases/latest)', 'كيف تحصل عليه': 'AppImage أو .deb أو .rpm؛ أو حزمة AUR' },
          { 'الطريقة': '[iPhone وiPad](https://apps.apple.com/app/solomd/id6762498874)', 'كيف تحصل عليه': 'صفحة App Store' },
          { 'الطريقة': '[Android](https://play.google.com/store/apps/details?id=app.solomd)', 'كيف تحصل عليه': 'Google Play أو ملف APK من صفحة الإصدارات' },
        ],
        note: 'يقدّم README أيضًا مثبّتات بسطر واحد في الطرفية (curl موجَّه إلى bash على macOS، وirm موجَّه إلى iex على Windows). توجيه سكربت إلى shell يشغّل شيفرة لم تقرأها، فلا تستخدمها إلا إذا وثقت بالمصدر، أو خذ المثبّت من صفحة الإصدارات. ويضم [موقع](https://solomd.app) المطوّر صفحة تنزيل؛ ولم تشغّل PromptQuorum أي مثبّت ولم تفحص الملفات المنزّلة.',
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات',
        content: [
          '**يتطلب SoloMD نظام Windows 10 أو أحدث، أو macOS 10.15 أو أحدث، أو Linux حديثًا شائعًا، أو iOS 15 أو أحدث، أو Android 7 أو أحدث؛ وتحتاج ميزات الذكاء الاصطناعي إلى خادم نماذج محلي أو مفتاح API سحابي.**',
          'القائمة مأخوذة من README. وينشر أحجام مثبّتات تقارب 14 MB على Windows و16 MB على Linux و21 MB على Android و30 MB لنسخة macOS الشاملة، ولم تقسها PromptQuorum. ولا يُنشر حد أدنى لـ RAM أو GPU، وتعتمد احتياجات النماذج المحلية على الخادم الذي تشغّله.',
        ],
        columns: ['البند', 'القيمة المعلنة'],
        rows: [
          { 'البند': 'Windows', 'القيمة المعلنة': 'Windows 10+، x64 وARM64' },
          { 'البند': 'macOS', 'القيمة المعلنة': 'macOS 10.15+، Apple Silicon وIntel' },
          { 'البند': 'Linux', 'القيمة المعلنة': 'x64 وARM64' },
          { 'البند': 'iPhone / iPad', 'القيمة المعلنة': 'iOS 15+ (صفحة App Store: 15.0)' },
          { 'البند': 'Android', 'القيمة المعلنة': 'Android 7+ (API 24)' },
          { 'البند': 'ذكاء اصطناعي محلي', 'القيمة المعلنة': 'Ollama أو LM Studio أو Jan أو vLLM أو llama.cpp' },
          { 'البند': 'ذكاء اصطناعي سحابي', 'القيمة المعلنة': 'مفتاح API الخاص بك لكل مزوّد' },
        ],
        note: 'تعتمد احتياجات RAM وGPU على النموذج الذي تحمّله، ولا ينشر التطبيق نفسه حدًا أدنى. ويصف README نسخة macOS بأنها موقّعة وموثّقة (notarized) ولا يقول شيئًا عن المنصات الأخرى.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**جوهر SoloMD محرّر Markdown هادئ فوق مجلد ملاحظات من ملفات بسيطة، وحوله دردشة بالذكاء الاصطناعي وبحث وتصدير ومزامنة وخادم MCP.** كل ما يلي إفادات من المطوّر مأخوذة من README والموقع.',
        ],
        items: [
          'ثلاثة أوضاع للكتابة: WYSIWYG خالص ومعاينة حية وعرض مقسّم أو مصدر متزامن، إضافة إلى وضعي التركيز والآلة الكاتبة ووضع Vim ومعادلات KaTeX ومخططات Mermaid.',
          'ميزات المجلد: روابط [[wikilinks]] وروابط عكسية وخصائص YAML واستيراد ملفات .docx و.pdf و.xlsx و.pptx إلى Markdown بالسحب والإفلات.',
          'AutoGit: يسجّل كل حفظ لقطة في مستودع Git محلي داخل مساحة العمل، مع عرض مرئي للفروق وتراجع بنقرة واحدة؛ ومكتبة libgit2 مدمجة، فلا حاجة إلى Git على النظام.',
          'بحث دلالي دون اتصال في المجلد باستخدام مُضمِّن (embedder) على الجهاز؛ ويقول المطوّر إنه لا يحتاج إلى تنزيل نموذج ولا يجري أي اتصال بالشبكة.',
          'دردشة بالذكاء الاصطناعي: لوحة جانبية تحاور المجلد مع اقتباسات [[wikilink]]، وإعادة صياغة وترجمة لنص محدد داخل المحرر، واكتشاف تلقائي لخوادم Ollama وLM Studio وJan وvLLM وllama.cpp المحلية. وتستخدم المزوّدات السحابية مفتاحك الخاص المخزّن في سلسلة مفاتيح نظام التشغيل.',
          'مركز التصدير: PDF وWord (.docx) وHTML وEPUB وLaTeX وODT وRTF والنص العادي وMarkdown، دون تثبيت Pandoc منفصل بحسب README.',
          'مزامنة لكل مساحة عمل عبر iCloud Drive أو OneDrive أو WebDAV أو تخزين متوافق مع S3 أو Syncthing أو استضافات Git، مع تشفير من طرف إلى طرف اختياري على تخزينك الخاص.',
          'خادم MCP مرفق بـ 16 أداة (12 للقراءة فقط و4 للكتابة تتطلب --allow-write)، ويعمل افتراضيًا عبر stdio مع وضع HTTP اختياري على loopback برمز وصول، إضافة إلى واجهة سطر أوامر وإضافات JSON.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**بحسب المطوّر، تبقى الملاحظات في المجلد الذي تختاره ما لم تُعدّ ذكاءً اصطناعيًا سحابيًا أو مزامنة أو استضافة للصور، كما تصف سياسة الخصوصية أحداث استخدام مجهولة اختيارية في بعض النسخ، ولا يذكرها README.**',
          'بحسب سياسة الخصوصية (آخر تحديث في 18 أبريل 2026)، ليس في SoloMD نظام حسابات ولا إعلانات، وتُخزَّن الملاحظات محليًا. وترسل النسخ المحمّلة من الموقع ومن متاجر غير Apple حدثًا مجهولًا إلى خادم المطوّر نفسه عند التشغيل وعند استخدام بعض الميزات؛ ويتضمن اسم الحدث وإصدار التطبيق ونظام التشغيل ولغة الواجهة ومعرّفًا عشوائيًا، وتقول السياسة إنه لا يتضمن أبدًا الملاحظات أو أسماء الملفات أو مساراتها. ويمكنك تعطيله من الإعدادات ثم متقدم. ولا ترسل نسخ App Store أي بيانات استخدام.',
          'بحسب السياسة وصفحة الأمان، تنتقل طلبات الذكاء الاصطناعي مباشرة من جهازك إلى المزوّد الذي تضبطه أو إلى خادم محلي؛ وتضيف صفحة الأمان أن الذكاء الاصطناعي معطّل افتراضيًا وأن مفاتيح API تُحفظ في سلسلة مفاتيح نظام التشغيل. أما المزامنة واستضافة الصور واستضافة Git فلا ترسل البيانات إلا إلى الخدمات التي تعدّها بنفسك.',
          'يقول README إن المشروع بلا خوادم تستضيفها SoloMD، وهذا لا ينسجم مع خادم أحداث الاستخدام في السياسة. والسياسة أقدم من خيارات المزامنة في v5.2، وصفحة الأمان مؤرخة في أبريل 2026؛ فتحقق من الاثنين مقابل إصدار التطبيق الذي تثبّته. ولأن الشيفرة برخصة MIT وعامة، يمكن تدقيق تدفق البيانات.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب SoloMD من يريد ملفات Markdown بسيطة ومحرّرًا هادئًا وذكاءً اصطناعيًا مدمجًا دون تجميع إضافات.**',
        ],
        items: [
          'الكتّاب وكتّاب الملاحظات الذين يريدون ملفات على قرصهم تستطيع محررات أخرى فتحها.',
          'من يريدون الدردشة حول ملاحظاتهم بنموذج محلي، مثل نموذج تقدّمه Ollama أو LM Studio.',
          'المطوّرون الذين يريدون أن يقرأ عميل MCP مثل Claude Code أو Cursor ملاحظات المجلد أو يبحث فيها أو يكتب إليها.',
          'المستخدمون الذين يحتاجون إلى تطبيق الملاحظات نفسه على سطح المكتب وiPhone وAndroid دون خدمة مزامنة مدفوعة.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        content: [
          '**لا يناسب SoloMD بعض الحالات، وتبقى عدة تفاصيل دون تحقق.**',
        ],
        items: [
          'لا يناسب: الفرق التي تحتاج إلى مورّد بشركة معروفة أو عقد دعم أو شروط مستوى خدمة. فالصفحات التي قرأناها لا تذكر شركة ولا عنوانًا ولا دولة.',
          'لا يناسب: من يحتاجون إلى سجل طويل. أُنشئ المستودع في أبريل 2026 وله مشرف واحد.',
          'غير متحقق منه: جودة المحرر ودقة التصدير عبر التنسيقات التسعة وجودة إجابات الذكاء الاصطناعي. لم تشغّل PromptQuorum التطبيق.',
          'غير متحقق منه: سلوك المزامنة والتشفير من طرف إلى طرف. الادعاءات من المطوّر، ولم تدقق PromptQuorum الشيفرة ولم تختبر المزامنة.',
          'غير متحقق منه: هل تطابق أحداث الاستخدام الموصوفة في سياسة الخصوصية ما ترسله كل نسخة فعلًا، وكيف يتسق ذلك مع عبارة README «لا خوادم مستضافة».',
          'غير متحقق منه: أعداد الميزات. تذكر صفحة الأمان الأقدم 14 مزوّدًا للذكاء الاصطناعي و6 أدوات MCP افتراضية، بينما يذكر README أكثر من 20 مزوّدًا و16 أداة؛ وتتبع هذه المراجعة README.',
          'غير متحقق منه: الشركة أو الدولة خلف المشروع، وأعداد المستخدمين والتقييمات، والمراجعات المستقلة. لم نجد أيًّا منها، ولم نعامل صفحات المقارنة الخاصة بالمطوّر على أنها مستقلة.',
          'غير متحقق منه: هل مثبّتات Windows موقّعة رقميًا. يصف README نسخة macOS فقط بأنها موقّعة وموثّقة ولا يقول شيئًا عن المنصات الأخرى.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'SoloMD مقابل البدائل',
        itemHeadings: true,
        content: [
          '**ينافس SoloMD تطبيقات ملاحظات أخرى تضع البيانات المحلية أولًا؛ ولم تقارنه PromptQuorum بها عمليًا.** الأدوات التالية موجودة في الدليل وموصوفة بحسب مراجعاتها الخاصة.',
        ],
        columns: ['الأداة', 'المذكور في المصادر'],
        rows: [
          { 'الأداة': 'SoloMD', 'المذكور في المصادر': 'MIT؛ 5 منصات؛ مجاني؛ خادم MCP' },
          { 'الأداة': '[Hillnote](/ar/power-local-llm/hillnote-review)', 'المذكور في المصادر': 'بلا رخصة معلنة؛ 5 منصات؛ freemium' },
          { 'الأداة': '[Tolaria](/ar/power-local-llm/tolaria-review)', 'المذكور في المصادر': 'AGPL-3.0؛ سطح مكتب؛ مجلد Git؛ مجاني' },
          { 'الأداة': '[Logseq](/ar/power-local-llm/logseq-review)', 'المذكور في المصادر': 'AGPL-3.0؛ outliner؛ خادم MCP اختياري' },
          { 'الأداة': '[SiYuan](/ar/power-local-llm/siyuan-review)', 'المذكور في المصادر': 'AGPL-3.0؛ استضافة ذاتية؛ وكيل ذكاء اصطناعي' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل SoloMD مجاني؟',
            a: 'نعم، بحسب المطوّر. الشيفرة برخصة MIT وجميع الميزات مجانية ولا يوجد اشتراك. وتقدّم نسخ Mac App Store وApp Store لنظام iOS وGoogle Play إكراميات اختيارية لمرة واحدة تفتح شارة داعم فقط. أما مزوّدو الذكاء الاصطناعي السحابي الذين تصل إليهم بمفتاحك الخاص فيحاسبونك مباشرة.',
          },
          {
            q: 'هل يعمل SoloMD مع Ollama أو LM Studio؟',
            a: 'بحسب README نعم: في الإعدادات ثم الذكاء الاصطناعي خيار اكتشاف تلقائي يجد خوادم Ollama وLM Studio وJan وvLLM وllama.cpp المحلية على localhost. ويمكنك أيضًا إضافة مزوّد سحابي بمفتاح API الخاص بك. لم تختبر PromptQuorum الاكتشاف.',
          },
          {
            q: 'هل يستطيع Claude Code أو Cursor استخدام ملاحظاتي في SoloMD؟',
            a: 'نعم، بحسب المطوّر. يتيح خادم solomd-mcp المرفق 16 أداة؛ أدوات القراءة الاثنتا عشرة مفعّلة دائمًا، وأدوات الكتابة الأربع تحتاج إلى الخيار --allow-write. ويعرض README مقطع إعداد وأمرًا يسجّل الخادم لدى عملاء الذكاء الاصطناعي على جهازك. لم تختبر PromptQuorum ذلك.',
          },
          {
            q: 'كيف أثبّت SoloMD؟',
            a: 'خذ المثبّت المناسب لنظامك من صفحة إصدارات GitHub، أو استخدم Mac App Store أو App Store أو Google Play أو Homebrew أو winget. وفضّل المثبّت على سكربتات السطر الواحد ما لم تثق بالمصدر. لم تشغّل PromptQuorum التثبيت.',
          },
          {
            q: 'هل يرسل SoloMD ملاحظاتي إلى مكان ما؟',
            a: 'ليس افتراضيًا بحسب المطوّر: تبقى الملاحظات في مجلدك، وتذهب طلبات الذكاء الاصطناعي إلى المزوّد أو الخادم المحلي الذي تختاره. وتضيف سياسة الخصوصية أن النسخ المحمّلة من الموقع ومن متاجر غير Apple ترسل أحداث استخدام مجهولة ما لم تعطّلها. ولا تصل المزامنة إلا إلى الخدمات التي تعدّها.',
          },
          {
            q: 'ما الصيغة التي يستخدمها SoloMD لحفظ الملاحظات؟',
            a: 'بحسب README، ملفات .md عادية داخل مجلد تختاره، ويمكن لمحررات Markdown الأخرى فتحها. ويضيف المطوّر الروابط الويكي (wikilinks) والروابط الخلفية وخصائص YAML واستيراد ملفات .docx و.pdf و.xlsx و.pptx إلى Markdown بالسحب والإفلات. لم تختبر PromptQuorum الاستيراد.',
          },
          {
            q: 'ما صيغ التصدير التي يقدّمها SoloMD؟',
            a: 'بحسب README يشمل مركز التصدير PDF وWord (.docx) وHTML وEPUB وLaTeX وODT وRTF والنص العادي وMarkdown دون تثبيت Pandoc منفصل. لم تتحقق PromptQuorum من دقة أي تصدير.',
          },
          {
            q: 'كيف يزامن SoloMD الملاحظات بين الأجهزة؟',
            a: 'بحسب المطوّر، لكل مساحة عمل عبر iCloud Drive أو OneDrive أو WebDAV أو تخزين متوافق مع S3 أو Syncthing أو خدمة Git، مع تشفير طرفي اختياري على تخزينك الخاص. لم تختبر PromptQuorum المزامنة ولم تدقق التشفير.',
          },
          {
            q: 'ما AutoGit في SoloMD؟',
            a: 'يصفه المطوّر بأنه لقطة تُحفظ في مستودع Git محلي داخل مساحة العمل عند كل حفظ، مع مقارنة مرئية وتراجع بنقرة واحدة. مكتبة libgit2 مدمجة فلا حاجة إلى Git في النظام. لم تختبر PromptQuorum هذه الميزة.',
          },
          {
            q: 'على أي أنظمة يعمل SoloMD؟',
            a: 'بحسب README: Windows 10 أو أحدث (x64 وARM64) وmacOS 10.15 أو أحدث وLinux (x64 وARM64) وiOS 15 أو أحدث وAndroid 7 أو أحدث. لا ينشر README حدًّا أدنى لذاكرة RAM أو وحدة GPU، وتعتمد احتياجات النماذج المحلية على الخادم الذي تشغّله.',
          },
          {
            q: 'من يتولى صيانة SoloMD وهل ما زال يُحدَّث؟',
            a: 'يصف README مشرفًا بشريًا واحدًا ويذكر أن المشروع يكتبه ويختبره ويصدره في معظمه Claude Code. المستودع حديث ولم تذكر الصفحات التي قرأتها PromptQuorum شركة ولا بلدًا. راجع صفحة الإصدارات لمعرفة أحدث نسخة قبل الاعتماد عليه.',
          },
          {
            q: 'ما ميزات الذكاء الاصطناعي في SoloMD غير الدردشة؟',
            a: 'بحسب README: إعادة صياغة وترجمة فقرة محددة في موضعها، واقتباسات بصيغة [[wikilink]] في لوحة الدردشة، وبحث دلالي دون اتصال في مجلد الملاحظات عبر نموذج تضمين على الجهاز يذكر المطوّر أنه لا يحتاج إلى تنزيل نموذج. لم تختبر PromptQuorum جودة الإجابات.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق SoloMD التجربة إذا أردت ملفات Markdown بسيطة ومحرّرًا هادئًا ودردشة حول ملاحظاتك بنموذج محلي أو بمفتاحك الخاص وخادم MCP في تطبيق مجاني واحد.**',
          'على الورق يغطي الكثير: ثلاثة أوضاع للتحرير وروابط عكسية وبحث على الجهاز وتصدير بتسعة تنسيقات وتطبيقات لخمس منصات ومزامنة سحابية وعبر Git واكتشاف للنماذج المحلية و16 أداة MCP، مع إصدار v5.2.2 في 16 نوفمبر 2026 وcommit في 17 نوفمبر 2026.',
          'والمقايضات حقيقية. هو مشروع حديث بمشرف واحد وعملية تطوير يقودها الذكاء الاصطناعي بحسب إعلان علني، ولا تُذكر شركة ولا دولة، وتتعارض صفحات المطوّر نفسه في التتبّع وعدد الميزات. لم تختبر PromptQuorum التطبيق، فجرّبه على نسخة من مجلد صغير وراجع إعدادات الخصوصية وتحقق من التصدير الذي تحتاجه قبل الاعتماد عليه.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع SoloMD](https://solomd.app) — الميزات والمنصات والتنزيلات، روجع في 17 نوفمبر 2026.',
          '[سياسة الخصوصية](https://solomd.app/privacy) — أحداث الاستخدام ومعالجة البيانات، آخر تحديث في 18 أبريل 2026، روجعت في 17 نوفمبر 2026.',
          '[صفحة الأمان](https://solomd.app/security) — الذكاء الاصطناعي وتخزين المفاتيح والتعامل مع MCP، مؤرخة في أبريل 2026، روجعت في 17 نوفمبر 2026.',
          '[الجديد](https://solomd.app/whats-new/) — ملاحظات الإصدارات، روجعت في 17 نوفمبر 2026.',
          '[مستودع GitHub](https://github.com/zhitongblog/solomd) — الرخصة وتاريخ الإنشاء وآخر commit، روجع في 17 نوفمبر 2026.',
          '[README](https://github.com/zhitongblog/solomd#readme) — الميزات والتثبيت وأدوات MCP والخصوصية، روجع في 17 نوفمبر 2026.',
          '[الإصدار v5.2.2](https://github.com/zhitongblog/solomd/releases/tag/v5.2.2) — أحدث إصدار وتاريخه وملفات التثبيت، روجع في 17 نوفمبر 2026.',
          '[صفحة App Store](https://apps.apple.com/app/solomd/id6762498874) — إصدار iOS والسعر والحد الأدنى للنظام، روجعت في 17 نوفمبر 2026.',
          '[صفحة Google Play](https://play.google.com/store/apps/details?id=app.solomd) — التوفر على Android، روجعت في 17 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Hillnote](/ar/power-local-llm/hillnote-review) — ملاحظات Markdown تضع البيانات المحلية أولًا مع ذكاء اصطناعي على الجهاز لأجهزة Mac وWindows والهواتف.',
          '[مراجعة Tolaria](/ar/power-local-llm/tolaria-review) — تطبيق ملاحظات مجاني لسطح المكتب بملفات Markdown في مجلد مدعوم بـ Git.',
          '[مراجعة Logseq](/ar/power-local-llm/logseq-review) — outliner مفتوح المصدر يضع البيانات المحلية أولًا مع خادم MCP اختياري.',
          '[مراجعة SiYuan](/ar/power-local-llm/siyuan-review) — مساحة معرفة مستضافة ذاتيًا مع وكيل ذكاء اصطناعي مدمج.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
          '[مراجعة GenOffice](/ar/power-local-llm/genoffice-review) — حزمة مكتبية مجانية ومفتوحة المصدر لسطح المكتب لملفات Word وExcel وPowerPoint؛ تذهب استدعاءات الذكاء الاصطناعي افتراضيًا إلى مزوّد سحابي.',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/solomd-review-hero-ko.webp',
    title: 'SoloMD 리뷰: 로컬 모델용 AI 채팅과 MCP를 갖춘 무료 Markdown 노트 앱',
    seoTitle: 'SoloMD 리뷰: Markdown 노트, AI, MCP',
    intro:
      'SoloMD는 macOS, Windows, Linux, iPhone, iPad, Android에서 쓸 수 있는 MIT 라이선스의 무료 Markdown 노트 앱입니다. 노트를 폴더 안의 일반 .md 파일로 저장하고, 그 폴더를 대상으로 한 AI 채팅, 로컬 모델 자동 감지, 9가지 형식 내보내기, 번들 MCP 서버를 더합니다. 이 리뷰는 개발자의 웹사이트, 개인정보 처리방침, GitHub 저장소, 릴리스 페이지, 스토어 등록 정보를 바탕으로 2026년 11월 17일에 확인한 내용입니다. PromptQuorum은 이 앱을 직접 테스트하지 않았습니다.',
    metaDescription:
      'SoloMD는 MIT 라이선스의 무료 Markdown 노트 앱으로 5개 플랫폼을 지원하며 보관함 AI 채팅, Ollama·LM Studio 감지, MCP 서버를 제공합니다. 설치와 개인정보.',
    twitterDescription:
      'SoloMD는 노트를 Markdown 파일로 저장하고 보관함 채팅, 로컬 모델 감지, 9가지 형식 내보내기, MCP 서버를 더합니다. 무료, MIT. 확인된 것과 아닌 것.',
    audience:
      '일반 Markdown 파일과 내장 AI를 함께 쓰고 싶은 노트 작성자와 필자, 노트 보관함을 MCP 클라이언트에 연결하는 개발자, 유지관리자가 한 명인 신생 오픈소스 앱을 검토하는 분',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'SoloMD 리뷰',
    targetKeywords: [
      'SoloMD 리뷰',
      'Markdown 노트 앱 로컬 AI',
      'SoloMD MCP 서버',
      'Obsidian 대안 오픈소스',
      'Typora 대안 무료',
      'SoloMD 설치',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**SoloMD는 노트를 일반 파일로 저장하고 보관함 대상 AI 채팅, 로컬 모델 자동 감지, 번들 MCP 서버를 더하는 무료 오픈소스(MIT) Markdown 노트 앱입니다.** macOS, Windows, Linux, iPhone, iPad, Android에서 실행되고, 일반 설치 프로그램이나 앱 스토어로 설치하며, README에 따르면 Ollama, LM Studio, Jan, vLLM, llama.cpp 또는 본인의 API 키를 쓰는 클라우드 서비스와 연동됩니다. 출시된 지 얼마 안 됐고 개발자 한 명이 유지관리하며, PromptQuorum은 테스트하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'SoloMD는 무엇이며 누구에게 적합합니까?',
        answer:
          '개발자에 따르면 SoloMD는 내장 AI 채팅, 오프라인 의미 검색, MCP 서버를 갖춘 Markdown 편집기이자 노트 보관함입니다. 노트를 자기 디스크의 일반 파일로 두고, 플러그인을 찾아 헤매지 않고 로컬 AI나 본인 키 기반 AI를 쓰고 싶은 분에게 적합합니다.',
        bullets: [
          '무료이며 MIT 라이선스입니다. macOS, Windows, Linux, iOS, iPadOS, Android를 지원합니다.',
          '노트는 일반 .md 파일이며, AutoGit이 저장할 때마다 로컬 Git 스냅샷을 만듭니다.',
          '보관함 대상 AI 채팅과 선택 영역 다시 쓰기를 지원하며, Ollama 같은 로컬 서버 또는 본인 키를 쓰는 클라우드 서비스를 사용합니다.',
          'Claude Desktop, Claude Code, Cursor, Windsurf용 MCP 서버가 번들로 들어 있으며, 개발자에 따르면 쓰기 도구는 켜기 전까지 꺼져 있습니다.',
          '유지관리자는 한 명이고 저장소는 2026년 4월에 만들어졌습니다. 개발자의 페이지들은 원격 측정과 기능 수에 대해 서로 다르게 말합니다.',
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
            text: 'SoloMD는 노트를 일반 파일로 저장하고 AI 채팅, 로컬 모델 감지, MCP 서버를 더하는 무료 Markdown 노트 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '조용한 Markdown 편집기에 서로 연결된 노트 보관함이 있고, AI 어시스턴트가 노트를 읽고 그에 관한 질문에 답하는 구조라고 보시면 됩니다. AI는 내 컴퓨터에서 실행되는 모델일 수도 있고, 내 키로 요금을 내는 클라우드 서비스일 수도 있습니다.',
          },
        ],
        items: [
          'MIT 라이선스 오픈소스이며 무료입니다. 개발자는 구독이 없다고 하며, 앱 스토어의 선택형 팁은 후원자 배지만 해제합니다.',
          'macOS, Windows(x64와 ARM64), Linux(x64와 ARM64), iPhone, iPad, Android에서 실행되며 각 운영체제용 설치 프로그램이나 스토어 등록이 있습니다.',
          'AI: 보관함 대상 채팅, 선택 영역 다시 쓰기, localhost의 Ollama·LM Studio·Jan·vLLM·llama.cpp 자동 감지, 또는 본인 키를 쓰는 클라우드 서비스.',
          'README에 따르면 번들 MCP 서버가 Claude Desktop, Claude Code, Cursor, Windsurf에 16개 도구를 제공합니다. 쓰기 도구 4개는 명시적 플래그가 필요합니다.',
          'PromptQuorum은 앱을 테스트하지 않았습니다. SoloMD 서버에 접속하는지에 대해 개인정보 처리방침과 README의 설명이 다릅니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '개인정보 처리방침에 따르면 웹사이트와 Apple 외 스토어의 빌드는 설정에서 끄지 않는 한 익명 사용 이벤트를 개발자의 서버로 보내며, App Store 빌드는 보내지 않습니다. README는 SoloMD가 호스팅하는 서버가 없다고 적고 있습니다.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**SoloMD는 .md 파일이 든 일반 폴더를 보관함으로 취급하고 그 위에 AI 채팅, 검색, 내보내기, MCP 서버를 얹은 Markdown 노트 앱입니다.**',
          '프로젝트는 MIT 라이선스이며 [github.com/zhitongblog/solomd](https://github.com/zhitongblog/solomd)에서 공개적으로 개발됩니다. README는 개발자 한 명이 만든 것이라고 설명합니다. 저장소는 2026년 4월에 만들어졌습니다. 최신 릴리스 v5.2.2는 2026년 11월 16일에 나왔고 마지막 커밋은 2026년 11월 17일이어서, 개발은 활발하며 방치된 프로젝트 경고는 적용되지 않습니다.',
          'README에 따르면 편집기는 Tauri 2, Vue 3, CodeMirror 6, Rust로 만들어졌습니다. 세 가지 작성 모드(순수 WYSIWYG, 라이브 미리보기, 소스 분할 보기), 위키링크와 백링크, 작업 공간별 Git 버전 기록, 기기 내 의미 검색, PDF·Word·HTML·EPUB·LaTeX·ODT·RTF·일반 텍스트·Markdown으로 내보내는 내보내기 센터를 제공합니다.',
          'README는 또한 프로젝트가 대부분 Claude Code로 작성·테스트·릴리스되며 무엇을 내보낼지는 사람 유지관리자가 결정하고, 이슈 답변도 같은 어시스턴트가 작성한다고 밝힙니다. PromptQuorum은 이를 개발자 본인의 설명으로 전달합니다. 코드는 공개되어 있어 누구나 확인할 수 있습니다.',
          '이 설명들은 개발자의 주장입니다. PromptQuorum은 앱을 실행하지 않았으며 편집기 품질, 내보내기 충실도, 동기화 동작, AI 답변 품질을 확인하지 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '설치 방법',
        content: [
          '**SoloMD는 다른 데스크톱·모바일 앱처럼 설치 프로그램, 스토어 등록 또는 패키지 관리자로 설치합니다.**',
          'GitHub 릴리스 v5.2.2에는 macOS 유니버설 .dmg, x64와 ARM64용 Windows .msi 및 휴대용 zip, x64와 ARM64용 Linux AppImage·.deb·.rpm, Android APK가 들어 있습니다. README는 Mac App Store, iOS App Store, Google Play, Homebrew cask, winget, Arch User Repository 패키지도 언급합니다.',
        ],
        columns: ['플랫폼', '설치 방법'],
        rows: [
          { '플랫폼': '[macOS](https://github.com/zhitongblog/solomd/releases/latest)', '설치 방법': '유니버설 .dmg, Mac App Store 또는 Homebrew cask' },
          { '플랫폼': '[Windows](https://github.com/zhitongblog/solomd/releases/latest)', '설치 방법': '.msi(x64 또는 ARM64), 휴대용 zip 또는 winget' },
          { '플랫폼': '[Linux](https://github.com/zhitongblog/solomd/releases/latest)', '설치 방법': 'AppImage, .deb 또는 .rpm, AUR 패키지' },
          { '플랫폼': '[iPhone과 iPad](https://apps.apple.com/app/solomd/id6762498874)', '설치 방법': 'App Store 등록 페이지' },
          { '플랫폼': '[Android](https://play.google.com/store/apps/details?id=app.solomd)', '설치 방법': 'Google Play 또는 릴리스 페이지의 APK' },
        ],
        note: 'README는 한 줄 셸 설치 명령도 제공합니다(macOS는 curl을 bash로, Windows는 irm을 iex로 전달). 스크립트를 셸로 바로 넘기면 읽지 않은 코드가 실행되므로, 출처를 신뢰할 때만 사용하거나 릴리스 페이지의 설치 프로그램을 받으십시오. 개발자의 [웹사이트](https://solomd.app)에도 다운로드 페이지가 있습니다. PromptQuorum은 설치 프로그램을 실행하지 않았고 다운로드 파일도 검사하지 않았습니다.',
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항',
        content: [
          '**SoloMD에는 Windows 10 이상, macOS 10.15 이상, 현재 주요 Linux, iOS 15 이상 또는 Android 7 이상이 필요하며, AI 기능에는 로컬 모델 서버나 클라우드 API 키가 필요합니다.**',
          '목록은 README에서 가져왔습니다. 설치 파일 크기로 Windows 약 14 MB, Linux 약 16 MB, Android 약 21 MB, macOS 유니버설 약 30 MB가 게시되어 있으나 PromptQuorum은 측정하지 않았습니다. RAM이나 GPU 최소 사양은 공개되어 있지 않으며, 로컬 모델 요구 사항은 사용하는 서버에 따라 다릅니다.',
        ],
        columns: ['항목', '명시된 내용'],
        rows: [
          { '항목': 'Windows', '명시된 내용': 'Windows 10+, x64와 ARM64' },
          { '항목': 'macOS', '명시된 내용': 'macOS 10.15+, Apple Silicon과 Intel' },
          { '항목': 'Linux', '명시된 내용': 'x64와 ARM64' },
          { '항목': 'iPhone / iPad', '명시된 내용': 'iOS 15+ (App Store 등록: 15.0)' },
          { '항목': 'Android', '명시된 내용': 'Android 7+ (API 24)' },
          { '항목': '로컬 AI', '명시된 내용': 'Ollama, LM Studio, Jan, vLLM 또는 llama.cpp' },
          { '항목': '클라우드 AI', '명시된 내용': '서비스별 본인 API 키' },
        ],
        note: 'RAM과 GPU 요구 사항은 불러오는 모델에 따라 달라지며 앱 자체는 최소 사양을 공개하지 않습니다. README는 macOS 빌드를 서명 및 공증된 것으로 설명할 뿐 다른 플랫폼에 대해서는 말하지 않습니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**SoloMD의 핵심은 일반 파일 보관함 위의 조용한 Markdown 편집기이며, 그 주위에 AI 채팅, 검색, 내보내기, 동기화, MCP 서버가 있습니다.** 아래 항목은 모두 README와 웹사이트에 나온 개발자의 주장입니다.',
        ],
        items: [
          '세 가지 작성 모드: 순수 WYSIWYG, 라이브 미리보기, 동기화되는 분할 또는 소스 보기. 포커스 모드, 타자기 모드, Vim 모드, KaTeX 수식, Mermaid 다이어그램도 있습니다.',
          '보관함 기능: [[위키링크]], 백링크, YAML 속성, .docx·.pdf·.xlsx·.pptx 파일을 끌어다 놓아 Markdown으로 가져오기.',
          'AutoGit: 저장할 때마다 작업 공간 안의 로컬 Git 저장소에 스냅샷을 커밋하며, 시각적 diff와 원클릭 롤백을 지원합니다. libgit2가 내장되어 시스템 Git이 필요 없습니다.',
          '기기 내 임베더를 쓰는 보관함 오프라인 의미 검색. 개발자는 모델 다운로드도 네트워크 호출도 필요 없다고 합니다.',
          'AI 채팅: [[위키링크]] 인용과 함께 보관함에 대해 대화하는 사이드 패널, 선택 영역 다시 쓰기와 번역, 로컬 Ollama·LM Studio·Jan·vLLM·llama.cpp 서버 자동 감지. 클라우드 서비스는 본인 키를 쓰며 키는 운영체제 키체인에 저장됩니다.',
          '내보내기 센터: PDF, Word(.docx), HTML, EPUB, LaTeX, ODT, RTF, 일반 텍스트, Markdown. README에 따르면 Pandoc을 따로 설치할 필요가 없습니다.',
          'iCloud Drive, OneDrive, WebDAV, S3 호환 스토리지, Syncthing 또는 Git 호스팅을 통한 작업 공간별 동기화와, 본인 스토리지에서의 선택형 종단간 암호화.',
          '16개 도구(읽기 전용 12개, --allow-write가 필요한 쓰기 도구 4개)를 갖춘 번들 MCP 서버. 기본은 stdio이며 토큰을 쓰는 loopback HTTP 모드도 선택할 수 있고, 명령줄 인터페이스와 JSON 확장도 있습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 데이터 흐름',
        content: [
          '**개발자에 따르면 클라우드 AI, 동기화, 이미지 호스트를 설정하지 않는 한 노트는 선택한 폴더에 남으며, 개인정보 처리방침은 README에 없는 일부 빌드의 선택형 익명 사용 이벤트도 설명합니다.**',
          '개인정보 처리방침(2026년 4월 18일 최종 업데이트)에 따르면 SoloMD에는 계정 시스템과 광고가 없고 노트는 로컬에 저장됩니다. 웹사이트와 Apple 외 스토어에서 받은 빌드는 시작할 때와 일부 기능을 쓸 때 개발자 자체 서버로 익명 이벤트를 보냅니다. 여기에는 이벤트 이름, 앱 버전, 운영체제, 인터페이스 언어, 임의 식별자가 담기며, 방침은 노트, 파일 이름, 경로는 절대 포함하지 않는다고 말합니다. 설정의 고급에서 끌 수 있습니다. App Store 빌드는 사용 데이터를 보내지 않습니다.',
          '방침과 보안 페이지에 따르면 AI 요청은 내 컴퓨터에서 설정한 서비스 또는 로컬 서버로 직접 전달됩니다. 보안 페이지는 AI가 기본적으로 꺼져 있고 API 키가 운영체제 키체인에 저장된다고도 설명합니다. 동기화, 이미지 호스트, Git 호스팅은 직접 설정한 서비스로만 데이터를 보냅니다.',
          'README는 프로젝트에 SoloMD가 호스팅하는 서버가 없다고 하는데, 이는 방침에 나오는 사용 이벤트 서버와 어긋나 보입니다. 방침은 v5.2의 동기화 옵션보다 앞선 것이고 보안 페이지는 2026년 4월 자료이므로, 설치하는 앱 버전과 대조해 확인하십시오. 코드가 MIT 라이선스로 공개되어 있어 데이터 흐름은 감사할 수 있습니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        content: [
          '**SoloMD는 일반 Markdown 파일, 조용한 편집기, 플러그인을 조립하지 않아도 되는 내장 AI를 원하는 분께 적합합니다.**',
        ],
        items: [
          '다른 편집기로도 열 수 있는 파일을 자기 디스크에 두고 싶은 필자와 노트 작성자.',
          'Ollama나 LM Studio로 제공하는 것 같은 로컬 모델로 노트에 대해 대화하고 싶은 분.',
          'Claude Code나 Cursor 같은 MCP 클라이언트가 보관함의 노트를 읽고, 검색하고, 쓰기를 원하는 개발자.',
          '유료 동기화 서비스 없이 데스크톱, iPhone, Android에서 같은 노트 앱을 쓰고 싶은 사용자.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        content: [
          '**SoloMD가 맞지 않는 상황도 있으며, 확인하지 못한 세부 사항이 여럿 남아 있습니다.**',
        ],
        items: [
          '적합하지 않음: 회사 명시, 지원 계약, 서비스 수준 조건이 있는 공급사가 필요한 팀. 확인한 페이지에는 회사, 주소, 국가가 나와 있지 않습니다.',
          '적합하지 않음: 오랜 실적이 필요한 분. 저장소는 2026년 4월에 만들어졌고 유지관리자는 한 명입니다.',
          '확인하지 못함: 편집기 품질, 9가지 형식의 내보내기 충실도, AI 답변 품질. PromptQuorum은 앱을 실행하지 않았습니다.',
          '확인하지 못함: 동기화와 종단간 암호화 동작. 해당 주장은 개발자의 것이며 PromptQuorum은 코드를 감사하거나 동기화를 테스트하지 않았습니다.',
          '확인하지 못함: 개인정보 처리방침에 설명된 사용 이벤트가 각 빌드가 실제로 보내는 내용과 일치하는지, 그리고 README의 "호스팅 서버 없음"이 이와 어떻게 맞는지.',
          '확인하지 못함: 기능 수. 더 오래된 보안 페이지는 AI 제공자 14곳과 기본 MCP 도구 6개를, README는 20곳 이상과 도구 16개를 말합니다. 이 리뷰는 README를 따릅니다.',
          '확인하지 못함: 프로젝트 배후의 회사나 국가, 사용자 수와 평점, 독립적인 리뷰. 어느 것도 찾지 못했으며 개발자 자체 비교 페이지는 독립 자료로 취급하지 않았습니다.',
          '확인하지 못함: Windows 설치 프로그램에 코드 서명이 되어 있는지. README는 macOS 빌드를 서명 및 공증된 것으로 설명할 뿐 다른 플랫폼에 대해서는 말하지 않습니다.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'SoloMD와 대안 비교',
        itemHeadings: true,
        content: [
          '**SoloMD는 로컬 우선 노트 앱들과 경쟁하며, PromptQuorum은 이들과 직접 비교해 보지 않았습니다.** 아래 도구는 디렉터리에 있으며 각자의 리뷰를 바탕으로 설명합니다.',
        ],
        columns: ['도구', '출처에 기재된 내용'],
        rows: [
          { '도구': 'SoloMD', '출처에 기재된 내용': 'MIT, 5개 플랫폼, 무료, MCP 서버' },
          { '도구': '[Hillnote](/ko/power-local-llm/hillnote-review)', '출처에 기재된 내용': '라이선스 미기재, 5개 플랫폼, 무료 기본 제공과 유료 플랜(프리미엄 모델)' },
          { '도구': '[Tolaria](/ko/power-local-llm/tolaria-review)', '출처에 기재된 내용': 'AGPL-3.0, 데스크톱, Git 보관함, 무료' },
          { '도구': '[Logseq](/ko/power-local-llm/logseq-review)', '출처에 기재된 내용': 'AGPL-3.0, 아웃라이너, 선택형 MCP 서버' },
          { '도구': '[SiYuan](/ko/power-local-llm/siyuan-review)', '출처에 기재된 내용': 'AGPL-3.0, 자체 호스팅, AI 에이전트' },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'SoloMD는 무료입니까?',
            a: '개발자에 따르면 그렇습니다. 코드는 MIT 라이선스이고 모든 기능이 무료이며 구독이 없습니다. Mac App Store, iOS App Store, Google Play 빌드에는 후원자 배지만 해제하는 선택형 일회성 팁이 있습니다. 본인 키로 이용하는 클라우드 AI 서비스는 해당 서비스가 직접 청구합니다.',
          },
          {
            q: 'SoloMD는 Ollama나 LM Studio와 함께 쓸 수 있습니까?',
            a: 'README에 따르면 가능합니다. 설정의 AI에 자동 감지 옵션이 있어 localhost의 Ollama, LM Studio, Jan, vLLM, llama.cpp 서버를 찾아 줍니다. 본인 API 키로 클라우드 서비스를 추가할 수도 있습니다. PromptQuorum은 감지 기능을 테스트하지 않았습니다.',
          },
          {
            q: 'Claude Code나 Cursor가 내 SoloMD 노트를 사용할 수 있습니까?',
            a: '개발자에 따르면 가능합니다. 번들된 solomd-mcp 서버가 16개 도구를 제공하며, 읽기 도구 12개는 항상 켜져 있고 쓰기 도구 4개는 --allow-write 플래그가 필요합니다. README에는 설정 예시와 내 컴퓨터의 AI 클라이언트에 서버를 등록하는 명령이 나와 있습니다. PromptQuorum은 테스트하지 않았습니다.',
          },
          {
            q: 'SoloMD는 어떻게 설치합니까?',
            a: 'GitHub 릴리스 페이지에서 내 운영체제용 설치 프로그램을 받거나 Mac App Store, App Store, Google Play, Homebrew, winget을 사용하십시오. 출처를 신뢰하지 않는 한 한 줄 셸 스크립트보다 설치 프로그램을 권합니다. PromptQuorum은 설치를 실행하지 않았습니다.',
          },
          {
            q: 'SoloMD가 내 노트를 어딘가로 보냅니까?',
            a: '개발자에 따르면 기본적으로는 아닙니다. 노트는 내 폴더에 남고 AI 요청은 내가 고른 서비스나 로컬 서버로 갑니다. 개인정보 처리방침은 웹사이트와 Apple 외 스토어 빌드가 끄지 않는 한 익명 사용 이벤트를 보낸다고 덧붙입니다. 동기화는 직접 설정한 서비스에만 도달합니다.',
          },
          {
            q: 'SoloMD는 노트를 어떤 형식으로 저장합니까?',
            a: 'README에 따르면 사용자가 고른 폴더의 일반 .md 파일이며, 다른 Markdown 편집기에서도 열 수 있습니다. 개발자는 위키링크, 백링크, YAML 속성, 그리고 .docx, .pdf, .xlsx, .pptx 파일을 끌어다 놓아 Markdown으로 가져오는 기능도 언급합니다. PromptQuorum은 가져오기 기능을 테스트하지 않았습니다.',
          },
          {
            q: 'SoloMD는 어떤 내보내기 형식을 제공합니까?',
            a: 'README에 따르면 내보내기 센터는 PDF, Word(.docx), HTML, EPUB, LaTeX, ODT, RTF, 일반 텍스트, Markdown을 지원하며 Pandoc을 따로 설치할 필요가 없습니다. PromptQuorum은 어떤 내보내기 결과의 품질도 확인하지 않았습니다.',
          },
          {
            q: 'SoloMD는 기기 간에 노트를 어떻게 동기화합니까?',
            a: '개발자에 따르면 워크스페이스별로 iCloud Drive, OneDrive, WebDAV, S3 호환 스토리지, Syncthing 또는 Git 호스트를 통해 동기화하며, 본인 스토리지에서 선택적으로 종단 간 암호화를 사용할 수 있습니다. PromptQuorum은 동기화를 테스트하지 않았고 암호화를 감사하지도 않았습니다.',
          },
          {
            q: 'SoloMD의 AutoGit은 무엇입니까?',
            a: '개발자 설명에 따르면 저장할 때마다 워크스페이스 안의 로컬 Git 저장소에 스냅샷을 커밋하며, 시각적 비교와 한 번의 클릭으로 되돌리기를 제공합니다. libgit2가 내장되어 있어 시스템 Git이 필요 없습니다. PromptQuorum은 이 기능을 테스트하지 않았습니다.',
          },
          {
            q: 'SoloMD는 어떤 운영체제에서 실행됩니까?',
            a: 'README에 따르면 Windows 10 이상(x64 및 ARM64), macOS 10.15 이상, Linux(x64 및 ARM64), iOS 15 이상, Android 7 이상입니다. README에는 RAM이나 GPU 최소 사양이 게시되어 있지 않으며, 로컬 모델의 요구 사양은 실행하는 서버에 따라 달라집니다.',
          },
          {
            q: 'SoloMD는 누가 유지 관리하며 아직 업데이트됩니까?',
            a: 'README는 사람 유지 관리자가 한 명이며 프로젝트의 상당 부분을 Claude Code가 작성, 테스트, 릴리스한다고 설명합니다. 저장소는 비교적 새롭고, PromptQuorum이 읽은 페이지에는 회사나 국가가 명시되어 있지 않습니다. 의존하기 전에 릴리스 페이지에서 최신 버전을 확인하십시오.',
          },
          {
            q: 'SoloMD에는 채팅 외에 어떤 AI 기능이 있습니까?',
            a: 'README에 따르면 선택한 문단의 제자리 다시 쓰기와 번역, 채팅 패널의 [[wikilink]] 인용, 그리고 기기 내 임베딩 모델 기반의 노트 보관함 오프라인 시맨틱 검색이 있습니다. 개발자에 따르면 이 임베딩 모델은 모델 다운로드가 필요 없습니다. PromptQuorum은 답변 품질을 테스트하지 않았습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**일반 Markdown 파일, 조용한 편집기, 로컬 모델이나 본인 키 기반 노트 채팅, MCP 서버를 하나의 무료 앱에서 쓰고 싶다면 SoloMD는 살펴볼 만합니다.**',
          '사양상으로는 많은 것을 다룹니다. 세 가지 편집 모드, 백링크, 기기 내 검색, 9가지 형식 내보내기, 5개 플랫폼 앱, 클라우드 및 Git 동기화, 로컬 모델 감지, 16개 MCP 도구가 있으며 v5.2.2는 2026년 11월 16일에, 커밋은 2026년 11월 17일에 있었습니다.',
          '단점도 분명합니다. 유지관리자가 한 명인 신생 프로젝트이고 AI 주도 개발 과정이 공개적으로 밝혀져 있으며, 회사나 국가가 명시되지 않았고 개발자 자신의 페이지들이 원격 측정과 기능 수에서 서로 다르게 말합니다. PromptQuorum은 앱을 테스트하지 않았으므로 작은 폴더의 사본으로 시험해 보고, 개인정보 설정을 점검하고, 필요한 내보내기를 확인한 뒤에 의존하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[SoloMD 웹사이트](https://solomd.app) — 기능, 플랫폼, 다운로드. 2026년 11월 17일 확인.',
          '[개인정보 처리방침](https://solomd.app/privacy) — 사용 이벤트와 데이터 처리. 2026년 4월 18일 업데이트, 2026년 11월 17일 확인.',
          '[보안 페이지](https://solomd.app/security) — AI, 키 저장, MCP 처리. 2026년 4월자, 2026년 11월 17일 확인.',
          '[새 소식](https://solomd.app/whats-new/) — 릴리스 노트. 2026년 11월 17일 확인.',
          '[GitHub 저장소](https://github.com/zhitongblog/solomd) — 라이선스, 생성일, 마지막 커밋. 2026년 11월 17일 확인.',
          '[README](https://github.com/zhitongblog/solomd#readme) — 기능, 설치, MCP 도구, 개인정보. 2026년 11월 17일 확인.',
          '[릴리스 v5.2.2](https://github.com/zhitongblog/solomd/releases/tag/v5.2.2) — 최신 릴리스, 날짜, 설치 파일. 2026년 11월 17일 확인.',
          '[App Store 등록 페이지](https://apps.apple.com/app/solomd/id6762498874) — iOS 버전, 가격, 최소 시스템. 2026년 11월 17일 확인.',
          '[Google Play 등록 페이지](https://play.google.com/store/apps/details?id=app.solomd) — Android 제공 여부. 2026년 11월 17일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Hillnote 리뷰](/ko/power-local-llm/hillnote-review) — Mac, Windows, 스마트폰용 기기 내 AI를 갖춘 로컬 우선 Markdown 노트.',
          '[Tolaria 리뷰](/ko/power-local-llm/tolaria-review) — Markdown 파일을 Git 기반 보관함에 두는 무료 데스크톱 노트 앱.',
          '[Logseq 리뷰](/ko/power-local-llm/logseq-review) — 선택형 MCP 서버를 갖춘 오픈소스 로컬 우선 아웃라이너.',
          '[SiYuan 리뷰](/ko/power-local-llm/siyuan-review) — AI 에이전트를 내장한 자체 호스팅 지식 작업 공간.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
          '[GenOffice 리뷰](/ko/power-local-llm/genoffice-review) — Word, Excel, PowerPoint 파일을 다루는 무료 오픈소스 데스크톱 오피스 제품군으로, AI 호출은 기본적으로 클라우드 제공자로 전송됩니다.',
        ],
      },
    },
  },
}
