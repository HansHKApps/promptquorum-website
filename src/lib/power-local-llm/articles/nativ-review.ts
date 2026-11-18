// Nativ Review: Free Open-Source Local AI App for Mac with MLX
// Slug: nativ-review
// Companion to: lm-studio-review, jan-review, omlx-review, osaurus-ai-review
// Sources (all read 2026-11-18, no hands-on testing): maker website (home page, FAQ, privacy policy, terms of use, contact), GitHub repository Neywa-Labs/nativ
// (API metadata, README, releases v0.4.3-v0.4.6, commits) and the Homebrew cask entry for nativ.
// The request came from the site owner, not from the maker.
// Last upstream update 2026-11-17 (last commit on main; latest release v0.4.6 on 2026-11-16) => no stale warning.
// Theme: 'Easiest Desktop Apps' (canonical, as jan-review and lm-studio-review).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/nativ-review-hero-en.webp',
    title: 'Nativ Review: Free Open-Source Local AI App for Mac with MLX',
    seoTitle: 'Nativ Review: Free Open-Source Local AI App for Mac',
    intro:
      'Nativ is a free, MIT-licensed Mac app from Neywa Labs that runs open AI models on Apple Silicon through a bundled MLX server. It offers chat with image input, image generation, dictation and meeting notes, and a local OpenAI- and Anthropic-compatible API that coding agents can use. This review is based on the maker\'s website, its privacy policy and terms, the GitHub repository and its release page, checked on 18 November 2026. PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'Nativ is a free MIT Mac app that runs open AI models on Apple Silicon with MLX: chat, images, dictation and a local API for coding agents. Install, limits.',
    twitterDescription:
      'Nativ runs open models on your Mac with MLX: chat, image generation, dictation and a local API for coding agents. Free, MIT, Apple Silicon only. What is confirmed.',
    audience:
      'Mac users with Apple Silicon who want a free, open-source local AI app, developers who point coding agents at a local model, and anyone weighing a young open-source project',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Nativ review',
    targetKeywords: [
      'Nativ review',
      'local AI app for Mac',
      'MLX app Apple Silicon',
      'Nativ Neywa Labs',
      'LM Studio alternative Mac',
      'Nativ install',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Nativ is a free, open-source (MIT) Mac app that runs open AI models on Apple Silicon through a bundled MLX server and adds chat, image generation, dictation and a local API for coding tools.** It needs a Mac with an M1 or later chip and macOS 26 or newer, installs from a DMG or Homebrew, and, according to the maker, works offline once a model is downloaded. It is a young project from a Polish company. The maker describes it as free and account-free, although the terms mention that paid plans such as Nativ Pro might come later. PromptQuorum has not tested it.',
    quickAnswerTop: {
      en: {
        question: 'What is Nativ and who is it for?',
        answer:
          'Nativ is a native macOS app that bundles an mlx-vlm server, a model library, chat, an image tab, dictation and a local API. It suits Apple Silicon owners who want local AI without an account and developers who want to connect Claude Code, Codex or an editor to a model on their own Mac.',
        bullets: [
          'Free and MIT-licensed; Mac only, Apple Silicon (M1 or later), macOS 26 or newer.',
          'Chat with image input, image generation and editing, speech models, meeting notes and dictation, all on the Mac per the maker.',
          'Local server with OpenAI- and Anthropic-compatible endpoints; set-up helpers for named coding agents and editors.',
          'Models come from Hugging Face; the app warns when a model may not fit your memory.',
          'Repository created in July 2026; the privacy policy contains a bracketed payment-processor placeholder and sections on accounts and purchases, although the app is free.',
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
            text: 'Nativ is a free, open-source Mac app that runs open AI models on Apple Silicon and adds chat, images, dictation and a local API for coding tools.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a ChatGPT-style app that runs on your own Mac instead of a company\'s servers. You pick a model, it downloads once, and after that chatting, dictating and generating images work without an internet connection, according to the maker.',
          },
        ],
        items: [
          'Open source under MIT and free; the maker says there is no account and no subscription, and the terms say paid plans such as Nativ Pro would show their terms before any purchase.',
          'Runs only on Macs with Apple Silicon (M1 or later) and macOS 26 or newer; MLX does not run on Intel Macs.',
          'Features: chat with image input, image generation and editing, speech models, dictation in any app, meeting notes, scheduled prompts and MCP servers with per-tool consent.',
          'A local server on port 8080 offers OpenAI- and Anthropic-compatible endpoints, and the app sets up coding agents such as Claude Code, Codex, OpenCode, Aider and Goose to use it.',
          'PromptQuorum has not tested the app. The privacy policy contains a bracketed payment-processor placeholder and sections on accounts, licence keys and purchases, although the maker describes the app as free and account-free.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The privacy policy says Neywa Labs does not collect your chats, prompts, files or outputs, and that diagnostic data is collected only with the consent you give at first launch. The app still goes online to download models from Hugging Face and to check for updates.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**Nativ is a SwiftUI Mac app that wraps a bundled mlx-vlm server and the MLX runtime, so open models run on Apple Silicon without a separate server to set up.**',
          'The project is MIT-licensed and developed in the open at [github.com/Neywa-Labs/nativ](https://github.com/Neywa-Labs/nativ) by [Neywa Labs](https://neywalabs.ai), a company the terms of use name as Neywa Labs sp. z o.o. in Kraków, Poland. The maker describes itself as the team behind the open-source libraries mlx-vlm and mlx-audio. The repository was created in July 2026. The latest release, v0.4.6, appeared on 16 November 2026 and the last commit was on 17 November 2026, so development is active and no stale-project warning applies.',
          'According to the README, the app combines a chat window, a model library, an Images tab, an audio extension for dictation and meeting notes, a developer page with the local API, analytics, a system monitor and menu-bar controls. It also lets you open documents, code and web pages in a work pane beside the chat.',
          'These descriptions are maker statements. PromptQuorum has not run the app and has not checked speed, answer quality, image quality or dictation accuracy.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**You install Nativ like any Mac app: download the DMG and drag it to Applications, or use Homebrew.**',
          'The GitHub release v0.4.6 ships a single Nativ-0.4.6.dmg. The README also gives a Homebrew command, and the Homebrew cask list shows version 0.4.6. After installation the app updates itself through Sparkle, according to the README.',
        ],
        columns: ['Route', 'How to get it'],
        rows: [
          { 'Route': '[DMG](https://github.com/Neywa-Labs/nativ/releases/latest)', 'How to get it': 'Download, drag Nativ to Applications' },
          { 'Route': '[Website](https://runnativ.ai)', 'How to get it': 'Download for macOS button' },
          { 'Route': 'Homebrew', 'How to get it': 'brew install --cask nativ' },
          { 'Route': '[Source](https://github.com/Neywa-Labs/nativ)', 'How to get it': 'make xcode-generate, make xcode-run (Xcode needed)' },
        ],
        note: 'On first launch the README lists optional steps: pick or download a model, set a server API key, and grant microphone, accessibility and screen-recording permissions now or later. PromptQuorum did not run the installer or scan the download.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements',
        content: [
          '**Nativ needs a Mac with Apple Silicon (M1 or later), macOS 26 or newer and enough unified memory for the model you choose.**',
          'The list comes from the README and the FAQ, which says MLX does not run on Intel Macs. No app-level memory floor is published, and the model library shows fit warnings for your Mac, according to the README. PromptQuorum did not measure memory use or speed.',
        ],
        columns: ['Item', 'Stated figure'],
        rows: [
          { 'Item': 'Chip', 'Stated figure': 'Apple Silicon (M1 or later)' },
          { 'Item': 'Operating system', 'Stated figure': 'macOS 26 or newer' },
          { 'Item': 'Memory', 'Stated figure': 'Enough unified memory for the model' },
          { 'Item': 'Internet', 'Stated figure': 'Only for model downloads and updates' },
          { 'Item': 'Hugging Face token', 'Stated figure': 'Optional, for gated models' },
          { 'Item': 'Building from source', 'Stated figure': 'Xcode, xcodegen, Python 3' },
        ],
        note: 'The README says model downloads and first-time build dependencies still need network access. Optional permissions (microphone, accessibility, screen recording) switch on dictation, meeting capture and screenshots, and the FAQ says you can skip any of them.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**Nativ\'s core is a local chat app and model manager, with images, audio, a local API and agent integrations around it.** All items below are maker claims from the README and FAQ.',
        ],
        items: [
          'Chat and vision: streaming conversations, image attachments, reasoning output, response metrics and persistent chat history, with several independent windows sharing one server.',
          'Images: a dedicated tab that generates and edits images with compatible MLX image models.',
          'Model library: browse and download compatible Hugging Face models with memory-fit warnings, move the cache to an external APFS drive, and preload language, image, speech and embedding models together.',
          'Local API: OpenAI-compatible chat, responses, image, audio, embeddings and model endpoints plus Anthropic Messages endpoints on 127.0.0.1:8080 by default, with an optional API key for management routes.',
          'Coding-tool integrations: set-up for Codex, Claude Code, Pi, Hermes, OpenCode, Aider, Goose, Crush, Qwen Code and OpenClaw, and for VS Code, Cursor, Zed, JetBrains, Cline and Continue.',
          'Audio extension: dictation in any app, transcript history, meeting notes with a transcript and summary, and export to PDF, DOCX or TXT; raw dictation audio is deleted after five minutes.',
          'MCP servers with per-tool consent, scheduled prompts with task kits, an artifacts library with semantic search, a system monitor and advanced inference controls such as KV-cache quantization and speculative decoding.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**According to the maker, your chats, prompts, files and outputs stay on your Mac; the app goes online to download models and check for updates, and diagnostic data is opt-in.**',
          'According to the privacy policy (last updated 16 November 2026), Neywa Labs does not collect, access or store your content, does not use it to train or evaluate models, and does not sell personal information. Diagnostic data such as crash reports, app and macOS version, chip and memory size, performance figures and feature-usage events may be collected only with the consent the app requests on first launch, and you can withdraw it in Settings. The policy says it never includes the content of your sessions or which specific models you use.',
          'The FAQ adds that models are downloaded straight from Hugging Face and that update checks reach Neywa Labs or its update provider, which may see request details such as an IP address and app version. The website uses PostHog analytics with a cookie banner.',
          'The policy also contains a payment-processor placeholder in square brackets and sections on registration, licence keys and purchases, although the maker describes the app as free and account-free. The terms add that paid plans such as Nativ Pro might come later. Read both documents again before relying on them, and note that the code is MIT-licensed and public, so the data flow can in principle be inspected; PromptQuorum has not done so.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**Nativ fits Apple Silicon owners who want a free, open-source local AI app without an account.**',
        ],
        items: [
          'Mac users who want chat, image generation and dictation in one app that runs models on their own machine.',
          'Developers who want Claude Code, Codex, Aider or an editor to use a local model through OpenAI- or Anthropic-compatible endpoints.',
          'People who want to browse and download MLX models from Hugging Face with memory-fit warnings.',
          'Readers who prefer a project whose app code and licence are public.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        content: [
          '**Nativ is a poor fit in some situations, and several details remain unverified.**',
        ],
        items: [
          'Not a fit: Windows, Linux or Intel Mac users. The app runs only on Apple Silicon with macOS 26 or newer.',
          'Not a fit: people who need a long track record. The repository was created in July 2026 and the version is still 0.4.x.',
          'Unverified: speed, memory use, answer quality, image quality and dictation accuracy. PromptQuorum has not run the app.',
          'Unverified: that nothing leaves the Mac beyond model downloads and update checks. The claim is the maker\'s, and PromptQuorum did not audit the code or inspect network traffic.',
          'Unverified: how the privacy policy\'s account, licence and purchase sections and the "[PAYMENT PROCESSOR NAME]" placeholder fit a free app, and what "Nativ Pro" would include.',
          'Unverified: the maker\'s statement that it is the team behind mlx-vlm and mlx-audio, the number of models that run in the app, and user numbers. No independent reviews were found.',
          'Unverified: whether the DMG is notarized and what minimum memory a given model needs on your Mac.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Nativ vs Alternatives',
        itemHeadings: true,
        content: [
          '**Nativ competes with other local desktop apps and Mac inference tools; PromptQuorum has not compared it with them hands-on.** The tools below are in the directory and are described from their own reviews.',
        ],
        columns: ['Tool', 'Noted in sources'],
        rows: [
          { 'Tool': 'Nativ', 'Noted in sources': 'MIT; Mac only; free; bundled MLX server' },
          { 'Tool': '[LM Studio](/power-local-llm/lm-studio-review)', 'Noted in sources': 'Proprietary, free; Mac/Windows/Linux; model browser' },
          { 'Tool': '[Jan](/power-local-llm/jan-review)', 'Noted in sources': 'Apache 2.0; Mac/Windows/Linux; free; offline chat' },
          { 'Tool': '[oMLX](/power-local-llm/omlx-review)', 'Noted in sources': 'Apache-2.0; Mac; MLX inference server and CLI' },
          { 'Tool': '[Osaurus](/power-local-llm/osaurus-ai-review)', 'Noted in sources': 'MIT; Mac; free; native Swift app' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Is Nativ free?',
            a: 'Yes, per the maker. The code is MIT-licensed, and the FAQ says there is no account and no subscription. The terms say that if paid plans such as Nativ Pro are offered, their price, billing and cancellation terms will be shown before you buy.',
          },
          {
            q: 'Which Macs does Nativ run on?',
            a: 'Macs with Apple Silicon (M1 or later) running macOS 26 or newer. The FAQ explains that Nativ uses the MLX framework, which does not run on Intel Macs, so Intel Macs, Windows and Linux are not supported. PromptQuorum has not tested it on any Mac.',
          },
          {
            q: 'Can I use Nativ with Claude Code or Codex?',
            a: 'Yes, per the maker. Nativ serves the loaded model through OpenAI- and Anthropic-compatible endpoints, and its Integrations page sets up Claude Code, Codex, Pi, Hermes, OpenCode, Aider, Goose, Crush, Qwen Code and OpenClaw, plus editors such as VS Code, Cursor, Zed and JetBrains. PromptQuorum has not tested the set-up.',
          },
          {
            q: 'How do I install Nativ?',
            a: 'Download the DMG from the website or the GitHub releases page and drag Nativ to Applications, or run brew install --cask nativ. The app then updates itself through Sparkle. PromptQuorum did not run the installation.',
          },
          {
            q: 'Does Nativ send my chats anywhere?',
            a: 'Not by default, per the maker: chats, prompts, files and answers stay on your Mac. The app goes online to download models from Hugging Face and to check for updates, and diagnostic data is sent only if you consent at first launch. The privacy policy also contains a bracketed placeholder, so read it before relying on it.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Nativ is worth a look if you own an Apple Silicon Mac and want a free, open-source local AI app that bundles chat, images, dictation and a local API for coding agents.**',
          'On paper it covers a lot: a bundled MLX server, a Hugging Face model library with fit warnings, OpenAI- and Anthropic-compatible endpoints, set-up for ten coding agents and six editors, an audio extension and MCP support, with v0.4.6 released on 16 November 2026 and a commit on 17 November 2026.',
          'The trade-offs are real. It runs only on Apple Silicon with macOS 26 or newer, it is a young project with a 0.4 version number, and when PromptQuorum checked on 18 November 2026 the privacy policy contained a bracketed placeholder and sections on accounts and purchases. PromptQuorum has not tested the app, so start with a small model, read the current privacy policy and check that dictation, image generation and the API work for your use before relying on it.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Nativ website](https://runnativ.ai) — features, requirements and downloads, checked 18 November 2026.',
          '[FAQ](https://runnativ.ai/faq) — requirements, privacy and integrations, last updated 5 November 2026, checked 18 November 2026.',
          '[Privacy policy](https://runnativ.ai/privacy) — data handling, last updated 16 November 2026, checked 18 November 2026.',
          '[Terms of use](https://runnativ.ai/terms) — provider, licence and paid-plan wording, checked 18 November 2026.',
          '[GitHub repository](https://github.com/Neywa-Labs/nativ) — licence, creation date and last commit, checked 18 November 2026.',
          '[README](https://github.com/Neywa-Labs/nativ#readme) — features, install, requirements and local API, checked 18 November 2026.',
          '[Release v0.4.6](https://github.com/Neywa-Labs/nativ/releases/tag/v0.4.6) — latest release, its date and the DMG, checked 18 November 2026.',
          '[Homebrew cask](https://formulae.brew.sh/cask/nativ) — cask version, checked 18 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[LM Studio Review](/power-local-llm/lm-studio-review) — a desktop app with a built-in model browser and server mode.',
          '[Jan Review](/power-local-llm/jan-review) — an open-source, offline-first desktop chat app.',
          '[oMLX Review](/power-local-llm/omlx-review) — an MLX-based inference server for Apple Silicon with SSD caching.',
          '[Osaurus Review](/power-local-llm/osaurus-ai-review) — a free, MIT-licensed native Swift app for Apple Silicon Macs.',
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
    next_refresh_due: '2027-05-18',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/nativ-review-hero-de.webp',
    title: 'Nativ-Rezension: Kostenlose lokale KI-App für den Mac mit MLX',
    seoTitle: 'Nativ-Rezension: Kostenlose lokale KI-App für den Mac',
    intro:
      'Nativ ist eine kostenlose, MIT-lizenzierte Mac-App von Neywa Labs, die offene KI-Modelle über einen mitgelieferten MLX-Server auf Apple Silicon ausführt. Sie bietet Chat mit Bildeingabe, Bilderzeugung, Diktat und Meeting-Notizen sowie eine lokale, OpenAI- und Anthropic-kompatible API, die Coding-Agenten nutzen können. Diese Rezension stützt sich auf die Website des Entwicklers, die Datenschutzerklärung und die Nutzungsbedingungen, das GitHub-Repository und die Release-Seite, geprüft am 18. November 2026. PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'Nativ ist eine kostenlose MIT-Mac-App, die offene KI-Modelle mit MLX auf Apple Silicon ausführt: Chat, Bilder, Diktat und lokale API für Coding-Agenten.',
    twitterDescription:
      'Nativ führt offene Modelle mit MLX auf Ihrem Mac aus: Chat, Bilderzeugung, Diktat und lokale API für Coding-Agenten. Kostenlos, MIT, nur Apple Silicon. Was belegt ist.',
    audience:
      'Mac-Nutzer mit Apple Silicon, die eine kostenlose Open-Source-App für lokale KI wollen, Entwickler, die Coding-Agenten auf ein lokales Modell richten, und alle, die ein junges Open-Source-Projekt einschätzen möchten',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Nativ Rezension',
    targetKeywords: [
      'Nativ Rezension',
      'lokale KI-App für Mac',
      'MLX-App Apple Silicon',
      'Nativ Neywa Labs',
      'LM-Studio-Alternative Mac',
      'Nativ installieren',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Nativ ist eine kostenlose, quelloffene (MIT) Mac-App, die offene KI-Modelle über einen mitgelieferten MLX-Server auf Apple Silicon ausführt und Chat, Bilderzeugung, Diktat und eine lokale API für Coding-Werkzeuge ergänzt.** Sie benötigt einen Mac mit M1-Chip oder neuer und macOS 26 oder neuer, wird per DMG oder Homebrew installiert und arbeitet laut Entwickler offline, sobald ein Modell geladen ist. Es ist ein junges Projekt eines polnischen Unternehmens. Der Entwickler beschreibt sie als kostenlos und kontofrei, doch die Bedingungen erwähnen, dass später bezahlte Tarife wie Nativ Pro kommen könnten. PromptQuorum hat sie nicht getestet.',
    quickAnswerTop: {
      de: {
        question: 'Was ist Nativ, und für wen ist es gedacht?',
        answer:
          'Nativ ist eine native macOS-App mit mitgeliefertem mlx-vlm-Server, Modellbibliothek, Chat, Bilder-Tab, Diktat und lokaler API. Sie eignet sich für Besitzer von Apple-Silicon-Macs, die lokale KI ohne Konto wollen, und für Entwickler, die Claude Code, Codex oder einen Editor mit einem Modell auf dem eigenen Mac verbinden möchten.',
        bullets: [
          'Kostenlos und MIT-lizenziert; nur Mac, Apple Silicon (M1 oder neuer), macOS 26 oder neuer.',
          'Chat mit Bildeingabe, Bilderzeugung und -bearbeitung, Sprachmodelle, Meeting-Notizen und Diktat, laut Entwickler alles auf dem Mac.',
          'Lokaler Server mit OpenAI- und Anthropic-kompatiblen Endpunkten; Einrichtungshilfen für genannte Coding-Agenten und Editoren.',
          'Modelle stammen von Hugging Face; die App warnt, wenn ein Modell möglicherweise nicht in den Speicher passt.',
          'Repository im Juli 2026 angelegt; die Datenschutzerklärung enthält einen Platzhalter in eckigen Klammern und behandelt Konten und Käufe, obwohl die App kostenlos ist.',
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
            text: 'Nativ ist eine kostenlose Open-Source-Mac-App, die offene KI-Modelle auf Apple Silicon ausführt und Chat, Bilder, Diktat und eine lokale API für Coding-Werkzeuge ergänzt.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich eine ChatGPT-ähnliche App vor, die auf Ihrem eigenen Mac statt auf den Servern eines Unternehmens läuft. Sie wählen ein Modell, es wird einmal geladen, und danach funktionieren Chat, Diktat und Bilderzeugung laut Entwickler ohne Internetverbindung.',
          },
        ],
        items: [
          'Open Source unter MIT und kostenlos; laut Entwickler gibt es kein Konto und kein Abonnement, und die Bedingungen sagen, dass bezahlte Tarife wie Nativ Pro vor einem Kauf ihre Konditionen zeigen würden.',
          'Läuft nur auf Macs mit Apple Silicon (M1 oder neuer) und macOS 26 oder neuer; MLX läuft nicht auf Intel-Macs.',
          'Funktionen: Chat mit Bildeingabe, Bilderzeugung und -bearbeitung, Sprachmodelle, Diktat in jeder App, Meeting-Notizen, geplante Prompts und MCP-Server mit Zustimmung pro Werkzeug.',
          'Ein lokaler Server auf Port 8080 bietet OpenAI- und Anthropic-kompatible Endpunkte, und die App richtet Coding-Agenten wie Claude Code, Codex, OpenCode, Aider und Goose dafür ein.',
          'PromptQuorum hat die App nicht getestet. Die Datenschutzerklärung enthält einen Platzhalter in eckigen Klammern und Abschnitte zu Konten, Lizenzschlüsseln und Käufen, obwohl der Entwickler die App als kostenlos und kontofrei beschreibt.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Laut Datenschutzerklärung erhebt Neywa Labs weder Ihre Chats, Prompts, Dateien noch Ausgaben, und Diagnosedaten werden nur mit der Einwilligung erhoben, die beim ersten Start abgefragt wird. Die App geht dennoch online, um Modelle von Hugging Face zu laden und nach Updates zu suchen.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**Nativ ist eine SwiftUI-Mac-App, die einen mitgelieferten mlx-vlm-Server und die MLX-Laufzeit kapselt, sodass offene Modelle auf Apple Silicon laufen, ohne dass ein separater Server eingerichtet werden muss.**',
          'Das Projekt steht unter der MIT-Lizenz und wird offen auf [github.com/Neywa-Labs/nativ](https://github.com/Neywa-Labs/nativ) von [Neywa Labs](https://neywalabs.ai) entwickelt, einem Unternehmen, das die Nutzungsbedingungen als Neywa Labs sp. z o.o. in Krakau, Polen, nennen. Der Entwickler bezeichnet sich als das Team hinter den Open-Source-Bibliotheken mlx-vlm und mlx-audio. Das Repository wurde im Juli 2026 angelegt. Das neueste Release v0.4.6 erschien am 16. November 2026, der letzte Commit stammt vom 17. November 2026; die Entwicklung ist also aktiv, und es gilt keine Warnung für inaktive Projekte.',
          'Laut README vereint die App ein Chatfenster, eine Modellbibliothek, einen Bilder-Tab, eine Audio-Erweiterung für Diktat und Meeting-Notizen, eine Entwicklerseite mit der lokalen API, Analysen, einen Systemmonitor und Menüleisten-Steuerung. Außerdem lassen sich Dokumente, Code und Webseiten in einem Arbeitsbereich neben dem Chat öffnen.',
          'Diese Beschreibungen sind Aussagen des Entwicklers. PromptQuorum hat die App nicht ausgeführt und weder Geschwindigkeit noch Antwortqualität, Bildqualität oder Diktiergenauigkeit geprüft.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So bekommen Sie die App',
        content: [
          '**Sie installieren Nativ wie jede Mac-App: DMG herunterladen und in den Programme-Ordner ziehen oder Homebrew verwenden.**',
          'Das GitHub-Release v0.4.6 enthält eine einzelne Datei Nativ-0.4.6.dmg. Das README nennt außerdem einen Homebrew-Befehl, und die Homebrew-Cask-Liste zeigt Version 0.4.6. Nach der Installation aktualisiert sich die App laut README selbst über Sparkle.',
        ],
        columns: ['Weg', 'So bekommen Sie sie'],
        rows: [
          { 'Weg': '[DMG](https://github.com/Neywa-Labs/nativ/releases/latest)', 'So bekommen Sie sie': 'Herunterladen, Nativ in „Programme“ ziehen' },
          { 'Weg': '[Website](https://runnativ.ai)', 'So bekommen Sie sie': 'Schaltfläche „Download for macOS“' },
          { 'Weg': 'Homebrew', 'So bekommen Sie sie': 'brew install --cask nativ' },
          { 'Weg': '[Quellcode](https://github.com/Neywa-Labs/nativ)', 'So bekommen Sie sie': 'make xcode-generate, make xcode-run (Xcode nötig)' },
        ],
        note: 'Beim ersten Start nennt das README optionale Schritte: ein Modell wählen oder laden, einen API-Schlüssel für den Server setzen und Zugriffe auf Mikrofon, Bedienungshilfen und Bildschirmaufnahme jetzt oder später erteilen. PromptQuorum hat den Installer nicht ausgeführt und den Download nicht geprüft.',
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen',
        content: [
          '**Nativ benötigt einen Mac mit Apple Silicon (M1 oder neuer), macOS 26 oder neuer und genug Unified Memory für das gewählte Modell.**',
          'Die Liste stammt aus dem README und der FAQ, die erklärt, dass MLX nicht auf Intel-Macs läuft. Eine Speichergrenze für die App selbst wird nicht veröffentlicht, und die Modellbibliothek zeigt laut README Hinweise, ob ein Modell zu Ihrem Mac passt. PromptQuorum hat weder Speicherbedarf noch Geschwindigkeit gemessen.',
        ],
        columns: ['Punkt', 'Angegebener Wert'],
        rows: [
          { 'Punkt': 'Chip', 'Angegebener Wert': 'Apple Silicon (M1 oder neuer)' },
          { 'Punkt': 'Betriebssystem', 'Angegebener Wert': 'macOS 26 oder neuer' },
          { 'Punkt': 'Speicher', 'Angegebener Wert': 'Genug Unified Memory für das Modell' },
          { 'Punkt': 'Internet', 'Angegebener Wert': 'Nur für Modell-Downloads und Updates' },
          { 'Punkt': 'Hugging-Face-Token', 'Angegebener Wert': 'Optional, für geschützte Modelle' },
          { 'Punkt': 'Selbst bauen', 'Angegebener Wert': 'Xcode, xcodegen, Python 3' },
        ],
        note: 'Laut README brauchen Modell-Downloads und die Abhängigkeiten beim ersten Build weiterhin Netzzugang. Optionale Berechtigungen (Mikrofon, Bedienungshilfen, Bildschirmaufnahme) schalten Diktat, Meeting-Aufnahme und Screenshots frei, und laut FAQ lässt sich jede davon überspringen.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Der Kern von Nativ ist eine lokale Chat-App mit Modellverwaltung, ergänzt um Bilder, Audio, eine lokale API und Agenten-Integrationen.** Alle folgenden Punkte sind Aussagen des Entwicklers aus README und FAQ.',
        ],
        items: [
          'Chat und Bildverständnis: Streaming-Unterhaltungen, Bildanhänge, Ausgabe der Denkschritte, Antwortmetriken und dauerhafter Chatverlauf, mit mehreren unabhängigen Fenstern, die sich einen Server teilen.',
          'Bilder: ein eigener Tab, der mit kompatiblen MLX-Bildmodellen Bilder erzeugt und bearbeitet.',
          'Modellbibliothek: kompatible Hugging-Face-Modelle durchsuchen und laden, mit Hinweisen zur Speicherpassung, Cache auf ein externes APFS-Laufwerk verlegen und Text-, Bild-, Sprach- und Embedding-Modelle gleichzeitig vorladen.',
          'Lokale API: OpenAI-kompatible Endpunkte für Chat, Responses, Bilder, Audio, Embeddings und Modelle sowie Anthropic-Messages-Endpunkte, standardmäßig auf 127.0.0.1:8080, mit optionalem API-Schlüssel für Verwaltungsrouten.',
          'Integrationen für Coding-Werkzeuge: Einrichtung für Codex, Claude Code, Pi, Hermes, OpenCode, Aider, Goose, Crush, Qwen Code und OpenClaw sowie für VS Code, Cursor, Zed, JetBrains, Cline und Continue.',
          'Audio-Erweiterung: Diktat in jeder App, Transkriptverlauf, Meeting-Notizen mit Transkript und Zusammenfassung sowie Export als PDF, DOCX oder TXT; rohes Diktat-Audio wird nach fünf Minuten gelöscht.',
          'MCP-Server mit Zustimmung pro Werkzeug, geplante Prompts mit Aufgaben-Kits, eine Artefakt-Bibliothek mit semantischer Suche, ein Systemmonitor und erweiterte Inferenz-Einstellungen wie KV-Cache-Quantisierung und Speculative Decoding.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Laut Entwickler bleiben Ihre Chats, Prompts, Dateien und Ausgaben auf Ihrem Mac; die App geht online, um Modelle zu laden und nach Updates zu suchen, und Diagnosedaten sind freiwillig.**',
          'Laut Datenschutzerklärung (zuletzt aktualisiert am 16. November 2026) erhebt, ruft oder speichert Neywa Labs Ihre Inhalte nicht, nutzt sie nicht zum Trainieren oder Bewerten von Modellen und verkauft keine personenbezogenen Daten. Diagnosedaten wie Absturzberichte, App- und macOS-Version, Chip und Speichergröße, Leistungswerte und Ereignisse zur Funktionsnutzung dürfen nur mit der Einwilligung erhoben werden, die die App beim ersten Start abfragt, und Sie können sie in den Einstellungen widerrufen. Die Erklärung sagt, dass sie nie Inhalte Ihrer Sitzungen oder die konkret genutzten Modelle enthalten.',
          'Die FAQ ergänzt, dass Modelle direkt von Hugging Face geladen werden und dass Update-Prüfungen Neywa Labs oder dessen Update-Anbieter erreichen, der Anfragedetails wie IP-Adresse und App-Version sehen kann. Die Website nutzt PostHog-Analysen mit Cookie-Banner.',
          'Die Erklärung enthält außerdem einen Platzhalter für den Zahlungsdienstleister in eckigen Klammern sowie Abschnitte zu Registrierung, Lizenzschlüsseln und Käufen, obwohl der Entwickler die App als kostenlos und kontofrei beschreibt. Die Bedingungen ergänzen, dass später bezahlte Tarife wie Nativ Pro kommen könnten. Lesen Sie beide Dokumente erneut, bevor Sie sich darauf verlassen; der Code steht unter MIT-Lizenz und ist öffentlich, der Datenfluss lässt sich also grundsätzlich prüfen; PromptQuorum hat das nicht getan.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**Nativ passt zu Besitzern von Apple-Silicon-Macs, die eine kostenlose Open-Source-App für lokale KI ohne Konto wollen.**',
        ],
        items: [
          'Mac-Nutzer, die Chat, Bilderzeugung und Diktat in einer App wollen, die Modelle auf dem eigenen Rechner ausführt.',
          'Entwickler, die Claude Code, Codex, Aider oder einen Editor über OpenAI- oder Anthropic-kompatible Endpunkte ein lokales Modell nutzen lassen wollen.',
          'Menschen, die MLX-Modelle von Hugging Face mit Hinweisen zur Speicherpassung durchsuchen und laden möchten.',
          'Leser, die ein Projekt bevorzugen, dessen App-Code und Lizenz öffentlich sind.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        content: [
          '**Nativ passt in manchen Situationen nicht, und mehrere Details bleiben ungeprüft.**',
        ],
        items: [
          'Nicht geeignet: Windows-, Linux- oder Intel-Mac-Nutzer. Die App läuft nur auf Apple Silicon mit macOS 26 oder neuer.',
          'Nicht geeignet: Menschen, die eine lange Erfolgsgeschichte brauchen. Das Repository wurde im Juli 2026 angelegt, und die Version ist noch 0.4.x.',
          'Ungeprüft: Geschwindigkeit, Speicherbedarf, Antwortqualität, Bildqualität und Diktiergenauigkeit. PromptQuorum hat die App nicht ausgeführt.',
          'Ungeprüft: dass außer Modell-Downloads und Update-Prüfungen nichts den Mac verlässt. Die Aussage stammt vom Entwickler, und PromptQuorum hat weder den Code geprüft noch den Netzwerkverkehr untersucht.',
          'Ungeprüft: wie die Abschnitte der Datenschutzerklärung zu Konto, Lizenz und Kauf und der Platzhalter „[PAYMENT PROCESSOR NAME]“ zu einer kostenlosen App passen und was „Nativ Pro“ enthalten würde.',
          'Ungeprüft: die Aussage des Entwicklers, das Team hinter mlx-vlm und mlx-audio zu sein, die Zahl der in der App lauffähigen Modelle und Nutzerzahlen. Unabhängige Rezensionen wurden nicht gefunden.',
          'Ungeprüft: ob die DMG notarisiert ist und welchen Mindestspeicher ein bestimmtes Modell auf Ihrem Mac braucht.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Nativ im Vergleich zu Alternativen',
        itemHeadings: true,
        content: [
          '**Nativ konkurriert mit anderen lokalen Desktop-Apps und Mac-Inferenz-Werkzeugen; PromptQuorum hat sie nicht praktisch miteinander verglichen.** Die folgenden Werkzeuge stehen im Verzeichnis und werden nach ihren eigenen Rezensionen beschrieben.',
        ],
        columns: ['Werkzeug', 'In Quellen genannt'],
        rows: [
          { 'Werkzeug': 'Nativ', 'In Quellen genannt': 'MIT; nur Mac; kostenlos; MLX-Server mitgeliefert' },
          { 'Werkzeug': '[LM Studio](/de/power-local-llm/lm-studio-review)', 'In Quellen genannt': 'Proprietär, kostenlos; Mac/Windows/Linux; Modellbrowser' },
          { 'Werkzeug': '[Jan](/de/power-local-llm/jan-review)', 'In Quellen genannt': 'Apache 2.0; Mac/Windows/Linux; kostenlos; Offline-Chat' },
          { 'Werkzeug': '[oMLX](/de/power-local-llm/omlx-review)', 'In Quellen genannt': 'Apache-2.0; Mac; MLX-Inferenzserver und CLI' },
          { 'Werkzeug': '[Osaurus](/de/power-local-llm/osaurus-ai-review)', 'In Quellen genannt': 'MIT; Mac; kostenlos; native Swift-App' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Ist Nativ kostenlos?',
            a: 'Ja, laut Entwickler. Der Code steht unter MIT-Lizenz, und die FAQ sagt, dass es kein Konto und kein Abonnement gibt. Die Bedingungen sagen, dass bei bezahlten Tarifen wie Nativ Pro Preis, Abrechnung und Kündigung vor dem Kauf angezeigt werden.',
          },
          {
            q: 'Auf welchen Macs läuft Nativ?',
            a: 'Auf Macs mit Apple Silicon (M1 oder neuer) unter macOS 26 oder neuer. Die FAQ erklärt, dass Nativ das MLX-Framework nutzt, das nicht auf Intel-Macs läuft; Intel-Macs, Windows und Linux werden daher nicht unterstützt. PromptQuorum hat es auf keinem Mac getestet.',
          },
          {
            q: 'Kann ich Nativ mit Claude Code oder Codex nutzen?',
            a: 'Ja, laut Entwickler. Nativ stellt das geladene Modell über OpenAI- und Anthropic-kompatible Endpunkte bereit, und die Integrations-Seite richtet Claude Code, Codex, Pi, Hermes, OpenCode, Aider, Goose, Crush, Qwen Code und OpenClaw sowie Editoren wie VS Code, Cursor, Zed und JetBrains ein. PromptQuorum hat die Einrichtung nicht getestet.',
          },
          {
            q: 'Wie installiere ich Nativ?',
            a: 'Laden Sie die DMG von der Website oder der GitHub-Release-Seite herunter und ziehen Sie Nativ in den Programme-Ordner, oder führen Sie brew install --cask nativ aus. Danach aktualisiert sich die App über Sparkle selbst. PromptQuorum hat die Installation nicht ausgeführt.',
          },
          {
            q: 'Sendet Nativ meine Chats irgendwohin?',
            a: 'Laut Entwickler standardmäßig nicht: Chats, Prompts, Dateien und Antworten bleiben auf Ihrem Mac. Die App geht online, um Modelle von Hugging Face zu laden und nach Updates zu suchen, und Diagnosedaten werden nur gesendet, wenn Sie beim ersten Start einwilligen. Die Datenschutzerklärung enthält zudem einen Platzhalter in eckigen Klammern; lesen Sie sie, bevor Sie sich darauf verlassen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**Nativ ist einen Blick wert, wenn Sie einen Apple-Silicon-Mac besitzen und eine kostenlose Open-Source-App für lokale KI wollen, die Chat, Bilder, Diktat und eine lokale API für Coding-Agenten bündelt.**',
          'Auf dem Papier deckt sie viel ab: einen mitgelieferten MLX-Server, eine Hugging-Face-Modellbibliothek mit Passungshinweisen, OpenAI- und Anthropic-kompatible Endpunkte, Einrichtung für zehn Coding-Agenten und sechs Editoren, eine Audio-Erweiterung und MCP-Unterstützung, mit v0.4.6 am 16. November 2026 und einem Commit am 17. November 2026.',
          'Die Kompromisse sind real. Sie läuft nur auf Apple Silicon mit macOS 26 oder neuer, ist ein junges Projekt mit Versionsnummer 0.4, und als PromptQuorum am 18. November 2026 nachsah, enthielt die Datenschutzerklärung einen Platzhalter in eckigen Klammern und Abschnitte zu Konten und Käufen. PromptQuorum hat die App nicht getestet; beginnen Sie mit einem kleinen Modell, lesen Sie die aktuelle Datenschutzerklärung und prüfen Sie, ob Diktat, Bilderzeugung und API für Ihren Zweck funktionieren, bevor Sie sich darauf verlassen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Nativ-Website](https://runnativ.ai) — Funktionen, Anforderungen und Downloads, geprüft am 18. November 2026.',
          '[FAQ](https://runnativ.ai/faq) — Anforderungen, Datenschutz und Integrationen, zuletzt aktualisiert am 5. November 2026, geprüft am 18. November 2026.',
          '[Datenschutzerklärung](https://runnativ.ai/privacy) — Datenverarbeitung, zuletzt aktualisiert am 16. November 2026, geprüft am 18. November 2026.',
          '[Nutzungsbedingungen](https://runnativ.ai/terms) — Anbieter, Lizenz und Formulierung zu bezahlten Tarifen, geprüft am 18. November 2026.',
          '[GitHub-Repository](https://github.com/Neywa-Labs/nativ) — Lizenz, Erstellungsdatum und letzter Commit, geprüft am 18. November 2026.',
          '[README](https://github.com/Neywa-Labs/nativ#readme) — Funktionen, Installation, Anforderungen und lokale API, geprüft am 18. November 2026.',
          '[Release v0.4.6](https://github.com/Neywa-Labs/nativ/releases/tag/v0.4.6) — neuestes Release, sein Datum und die DMG, geprüft am 18. November 2026.',
          '[Homebrew-Cask](https://formulae.brew.sh/cask/nativ) — Cask-Version, geprüft am 18. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[LM-Studio-Rezension](/de/power-local-llm/lm-studio-review) — eine Desktop-App mit eingebautem Modellbrowser und Servermodus.',
          '[Jan-Rezension](/de/power-local-llm/jan-review) — eine quelloffene Desktop-Chat-App mit Offline-Fokus.',
          '[oMLX-Rezension](/de/power-local-llm/omlx-review) — ein MLX-basierter Inferenzserver für Apple Silicon mit SSD-Cache.',
          '[Osaurus-Rezension](/de/power-local-llm/osaurus-ai-review) — eine kostenlose, MIT-lizenzierte native Swift-App für Macs mit Apple Silicon.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Tools.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/nativ-review-hero-fr.webp',
    title: 'Avis sur Nativ : application Mac gratuite et open source pour l\'IA locale avec MLX',
    seoTitle: 'Avis sur Nativ : app d\'IA locale gratuite pour Mac',
    intro:
      'Nativ est une application Mac gratuite sous licence MIT, éditée par Neywa Labs, qui exécute des modèles d\'IA ouverts sur Apple Silicon grâce à un serveur MLX intégré. Elle propose le chat avec envoi d\'images, la génération d\'images, la dictée et les notes de réunion, ainsi qu\'une API locale compatible OpenAI et Anthropic que les agents de code peuvent utiliser. Cet avis s\'appuie sur le site du développeur, sa politique de confidentialité et ses conditions d\'utilisation, le dépôt GitHub et la page des versions, consultés le 18 novembre 2026. PromptQuorum n\'a pas testé l\'application.',
    metaDescription:
      'Nativ est une app Mac gratuite sous licence MIT qui exécute des modèles d\'IA ouverts avec MLX sur Apple Silicon : chat, images, dictée et API locale.',
    twitterDescription:
      'Nativ exécute des modèles ouverts sur votre Mac avec MLX : chat, images, dictée et API locale pour agents de code. Gratuit, MIT, Apple Silicon uniquement. Ce qui est confirmé.',
    audience:
      'Utilisateurs de Mac Apple Silicon qui veulent une application d\'IA locale gratuite et open source, développeurs qui branchent des agents de code sur un modèle local, et toute personne qui évalue un jeune projet open source',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'avis sur Nativ',
    targetKeywords: [
      'avis sur Nativ',
      'application IA locale pour Mac',
      'application MLX Apple Silicon',
      'Nativ Neywa Labs',
      'alternative à LM Studio sur Mac',
      'installer Nativ',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Nativ est une application Mac gratuite et open source (MIT) qui exécute des modèles d\'IA ouverts sur Apple Silicon via un serveur MLX intégré, avec chat, génération d\'images, dictée et une API locale pour les outils de code.** Elle exige un Mac équipé d\'une puce M1 ou plus récente et macOS 26 ou plus récent, s\'installe par DMG ou Homebrew et fonctionne hors ligne, selon le développeur, une fois un modèle téléchargé. C\'est un projet jeune, porté par une société polonaise. Le développeur la présente comme gratuite et sans compte, mais les conditions mentionnent que des offres payantes comme Nativ Pro pourraient venir plus tard. PromptQuorum ne l\'a pas testée.',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce que Nativ et à qui s\'adresse-t-il ?',
        answer:
          'Nativ est une application macOS native qui réunit un serveur mlx-vlm, une bibliothèque de modèles, le chat, un onglet d\'images, la dictée et une API locale. Elle convient aux propriétaires de Mac Apple Silicon qui veulent une IA locale sans compte, et aux développeurs qui souhaitent relier Claude Code, Codex ou un éditeur à un modèle sur leur propre Mac.',
        bullets: [
          'Gratuit et sous licence MIT ; Mac uniquement, Apple Silicon (M1 ou plus récent), macOS 26 ou plus récent.',
          'Chat avec images, génération et retouche d\'images, modèles vocaux, notes de réunion et dictée, le tout sur le Mac selon le développeur.',
          'Serveur local aux points d\'accès compatibles OpenAI et Anthropic ; assistants de configuration pour des agents de code et éditeurs cités.',
          'Les modèles viennent de Hugging Face ; l\'app avertit quand un modèle risque de ne pas tenir en mémoire.',
          'Dépôt créé en juillet 2026 ; la politique de confidentialité contient encore un espace réservé entre crochets et traite des comptes et des achats alors que l\'app est gratuite.',
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
            text: 'Nativ est une application Mac gratuite et open source qui exécute des modèles d\'IA ouverts sur Apple Silicon et ajoute chat, images, dictée et une API locale pour les outils de code.',
          },
          {
            type: 'plain-terms',
            text: 'Imaginez une application de type ChatGPT qui tourne sur votre propre Mac plutôt que sur les serveurs d\'une entreprise. Vous choisissez un modèle, il se télécharge une fois, puis le chat, la dictée et la génération d\'images fonctionnent sans connexion Internet, selon le développeur.',
          },
        ],
        items: [
          'Open source sous licence MIT et gratuit ; le développeur indique qu\'il n\'y a ni compte ni abonnement, et les conditions précisent que d\'éventuelles offres payantes comme Nativ Pro afficheraient leurs conditions avant tout achat.',
          'Fonctionne uniquement sur les Mac Apple Silicon (M1 ou plus récent) avec macOS 26 ou plus récent ; MLX ne fonctionne pas sur les Mac Intel.',
          'Fonctions : chat avec images, génération et retouche d\'images, modèles vocaux, dictée dans toute app, notes de réunion, requêtes planifiées et serveurs MCP avec consentement par outil.',
          'Un serveur local sur le port 8080 propose des points d\'accès compatibles OpenAI et Anthropic, et l\'app configure des agents de code comme Claude Code, Codex, OpenCode, Aider et Goose pour l\'utiliser.',
          'PromptQuorum n\'a pas testé l\'application. La politique de confidentialité contient un espace réservé entre crochets et des sections sur les comptes, les clés de licence et les achats, alors que le développeur présente l\'app comme gratuite et sans compte.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Selon la politique de confidentialité, Neywa Labs ne collecte ni vos discussions, ni vos requêtes, ni vos fichiers, ni les réponses, et les données de diagnostic ne sont recueillies qu\'avec le consentement demandé au premier lancement. L\'app se connecte tout de même à Internet pour télécharger des modèles depuis Hugging Face et rechercher des mises à jour.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Présentation',
        content: [
          '**Nativ est une app Mac SwiftUI qui encapsule un serveur mlx-vlm et l\'environnement d\'exécution MLX, de sorte que les modèles ouverts tournent sur Apple Silicon sans serveur distinct à configurer.**',
          'Le projet est sous licence MIT et développé en ouvert sur [github.com/Neywa-Labs/nativ](https://github.com/Neywa-Labs/nativ) par [Neywa Labs](https://neywalabs.ai), société que les conditions d\'utilisation désignent comme Neywa Labs sp. z o.o., à Cracovie, en Pologne. Le développeur se présente comme l\'équipe derrière les bibliothèques open source mlx-vlm et mlx-audio. Le dépôt a été créé en juillet 2026. La dernière version, v0.4.6, est parue le 16 novembre 2026 et le dernier commit date du 17 novembre 2026 : le développement est actif et aucun avertissement de projet inactif ne s\'applique.',
          'Selon le README, l\'app combine une fenêtre de chat, une bibliothèque de modèles, un onglet Images, une extension audio pour la dictée et les notes de réunion, une page développeur avec l\'API locale, des statistiques, un moniteur système et des commandes dans la barre des menus. Elle permet aussi d\'ouvrir documents, code et pages web dans un volet de travail à côté du chat.',
          'Ces descriptions sont des déclarations du développeur. PromptQuorum n\'a pas lancé l\'app et n\'a vérifié ni la vitesse, ni la qualité des réponses, ni celle des images, ni la précision de la dictée.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Comment l\'obtenir',
        content: [
          '**Nativ s\'installe comme toute app Mac : téléchargez le DMG et glissez-le dans Applications, ou utilisez Homebrew.**',
          'La version GitHub v0.4.6 fournit un seul fichier, Nativ-0.4.6.dmg. Le README donne aussi une commande Homebrew, et la liste des casks Homebrew affiche la version 0.4.6. Après l\'installation, l\'app se met à jour seule via Sparkle, selon le README.',
        ],
        columns: ['Voie', 'Comment l\'obtenir'],
        rows: [
          { 'Voie': '[DMG](https://github.com/Neywa-Labs/nativ/releases/latest)', 'Comment l\'obtenir': 'Télécharger, glisser Nativ dans Applications' },
          { 'Voie': '[Site web](https://runnativ.ai)', 'Comment l\'obtenir': 'Bouton « Download for macOS »' },
          { 'Voie': 'Homebrew', 'Comment l\'obtenir': 'brew install --cask nativ' },
          { 'Voie': '[Code source](https://github.com/Neywa-Labs/nativ)', 'Comment l\'obtenir': 'make xcode-generate, make xcode-run (Xcode requis)' },
        ],
        note: 'Au premier lancement, le README liste des étapes facultatives : choisir ou télécharger un modèle, définir une clé API pour le serveur, et accorder maintenant ou plus tard les accès au microphone, à l\'accessibilité et à l\'enregistrement d\'écran. PromptQuorum n\'a pas exécuté l\'installateur ni analysé le téléchargement.',
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise',
        content: [
          '**Nativ exige un Mac Apple Silicon (M1 ou plus récent), macOS 26 ou plus récent et assez de mémoire unifiée pour le modèle choisi.**',
          'La liste provient du README et de la FAQ, qui précise que MLX ne fonctionne pas sur les Mac Intel. Aucun seuil de mémoire propre à l\'app n\'est publié, et la bibliothèque de modèles affiche des avertissements d\'adéquation à votre Mac, selon le README. PromptQuorum n\'a mesuré ni l\'usage mémoire ni la vitesse.',
        ],
        columns: ['Élément', 'Valeur indiquée'],
        rows: [
          { 'Élément': 'Puce', 'Valeur indiquée': 'Apple Silicon (M1 ou plus récent)' },
          { 'Élément': 'Système', 'Valeur indiquée': 'macOS 26 ou plus récent' },
          { 'Élément': 'Mémoire', 'Valeur indiquée': 'Assez de mémoire unifiée pour le modèle' },
          { 'Élément': 'Internet', 'Valeur indiquée': 'Seulement pour modèles et mises à jour' },
          { 'Élément': 'Jeton Hugging Face', 'Valeur indiquée': 'Facultatif, pour les modèles à accès limité' },
          { 'Élément': 'Compilation', 'Valeur indiquée': 'Xcode, xcodegen, Python 3' },
        ],
        note: 'Selon le README, le téléchargement des modèles et les dépendances du premier build exigent toujours un accès réseau. Les autorisations facultatives (microphone, accessibilité, enregistrement d\'écran) activent la dictée, la capture des réunions et les captures d\'écran, et la FAQ indique qu\'on peut toutes les ignorer.',
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**Le cœur de Nativ est une app de chat locale avec gestion des modèles, complétée par les images, l\'audio, une API locale et des intégrations d\'agents.** Tous les éléments ci-dessous sont des déclarations du développeur, tirées du README et de la FAQ.',
        ],
        items: [
          'Chat et vision : conversations en continu, images jointes, affichage du raisonnement, métriques de réponse et historique conservé, avec plusieurs fenêtres indépendantes partageant un même serveur.',
          'Images : un onglet dédié qui génère et retouche des images avec des modèles d\'image MLX compatibles.',
          'Bibliothèque de modèles : parcourir et télécharger des modèles Hugging Face compatibles avec des avertissements d\'adéquation mémoire, déplacer le cache vers un disque APFS externe et précharger ensemble modèles de langage, d\'image, de voix et d\'embeddings.',
          'API locale : points d\'accès compatibles OpenAI pour le chat, les réponses, les images, l\'audio, les embeddings et les modèles, plus des points d\'accès Anthropic Messages, par défaut sur 127.0.0.1:8080, avec une clé API facultative pour les routes d\'administration.',
          'Intégrations d\'outils de code : configuration de Codex, Claude Code, Pi, Hermes, OpenCode, Aider, Goose, Crush, Qwen Code et OpenClaw, ainsi que de VS Code, Cursor, Zed, JetBrains, Cline et Continue.',
          'Extension audio : dictée dans toute app, historique des transcriptions, notes de réunion avec transcription et résumé, export en PDF, DOCX ou TXT ; l\'audio brut de la dictée est supprimé après cinq minutes.',
          'Serveurs MCP avec consentement par outil, requêtes planifiées avec kits de tâches, bibliothèque d\'artefacts avec recherche sémantique, moniteur système et réglages d\'inférence avancés comme la quantification du cache KV et le décodage spéculatif.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**Selon le développeur, vos discussions, requêtes, fichiers et résultats restent sur votre Mac ; l\'app se connecte pour télécharger des modèles et rechercher des mises à jour, et les données de diagnostic sont facultatives.**',
          'Selon la politique de confidentialité (mise à jour le 16 novembre 2026), Neywa Labs ne collecte, ne consulte ni ne stocke votre contenu, ne s\'en sert pas pour entraîner ou évaluer des modèles et ne vend pas de données personnelles. Des données de diagnostic, comme les rapports de plantage, les versions de l\'app et de macOS, la puce et la mémoire, les mesures de performance et les événements d\'usage des fonctions, ne peuvent être recueillies qu\'avec le consentement demandé au premier lancement, que vous pouvez retirer dans les réglages. La politique précise qu\'elles n\'incluent jamais le contenu de vos sessions ni les modèles précis que vous utilisez.',
          'La FAQ ajoute que les modèles sont téléchargés directement depuis Hugging Face et que les vérifications de mise à jour atteignent Neywa Labs ou son prestataire de mises à jour, qui peut voir des détails de requête comme l\'adresse IP et la version de l\'app. Le site utilise l\'analyse PostHog avec un bandeau de cookies.',
          'La politique contient aussi un espace réservé pour le prestataire de paiement entre crochets et des sections sur l\'inscription, les clés de licence et les achats, alors que le développeur présente l\'app comme gratuite et sans compte. Les conditions ajoutent que des offres payantes comme Nativ Pro pourraient venir plus tard. Relisez les deux documents avant de vous y fier ; le code est sous licence MIT et public, le flux de données peut donc en principe être vérifié ; PromptQuorum ne l\'a pas fait.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        content: [
          '**Nativ convient aux propriétaires de Mac Apple Silicon qui veulent une app d\'IA locale gratuite et open source, sans compte.**',
        ],
        items: [
          'Les utilisateurs de Mac qui veulent chat, génération d\'images et dictée dans une seule app qui exécute les modèles sur leur machine.',
          'Les développeurs qui veulent que Claude Code, Codex, Aider ou un éditeur utilisent un modèle local via des points d\'accès compatibles OpenAI ou Anthropic.',
          'Ceux qui veulent parcourir et télécharger des modèles MLX depuis Hugging Face avec des avertissements d\'adéquation mémoire.',
          'Les lecteurs qui préfèrent un projet dont le code de l\'app et la licence sont publics.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        content: [
          '**Nativ ne convient pas dans certains cas, et plusieurs points restent non vérifiés.**',
        ],
        items: [
          'Ne convient pas : les utilisateurs de Windows, de Linux ou de Mac Intel. L\'app ne fonctionne que sur Apple Silicon avec macOS 26 ou plus récent.',
          'Ne convient pas : ceux qui ont besoin d\'un long historique. Le dépôt a été créé en juillet 2026 et la version est encore 0.4.x.',
          'Non vérifié : vitesse, usage mémoire, qualité des réponses et des images, précision de la dictée. PromptQuorum n\'a pas lancé l\'app.',
          'Non vérifié : que rien ne quitte le Mac en dehors des téléchargements de modèles et des vérifications de mise à jour. L\'affirmation vient du développeur, et PromptQuorum n\'a ni audité le code ni inspecté le trafic réseau.',
          'Non vérifié : comment les sections de la politique de confidentialité sur le compte, la licence et les achats, et l\'espace réservé « [PAYMENT PROCESSOR NAME] », s\'accordent avec une app gratuite, et ce que couvrirait « Nativ Pro ».',
          'Non vérifié : l\'affirmation du développeur d\'être l\'équipe derrière mlx-vlm et mlx-audio, le nombre de modèles exécutables dans l\'app et le nombre d\'utilisateurs. Aucun avis indépendant n\'a été trouvé.',
          'Non vérifié : si le DMG est notarisé et quelle mémoire minimale un modèle donné exige sur votre Mac.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Nativ face aux alternatives',
        itemHeadings: true,
        content: [
          '**Nativ concurrence d\'autres apps de bureau locales et des outils d\'inférence pour Mac ; PromptQuorum ne les a pas comparés en pratique.** Les outils ci-dessous figurent dans l\'annuaire et sont décrits d\'après les avis publiés sur ce site.',
        ],
        columns: ['Outil', 'Selon les sources'],
        rows: [
          { 'Outil': 'Nativ', 'Selon les sources': 'MIT ; Mac uniquement ; gratuit ; serveur MLX intégré' },
          { 'Outil': '[LM Studio](/fr/power-local-llm/lm-studio-review)', 'Selon les sources': 'Propriétaire, gratuit ; Mac/Windows/Linux ; navigateur de modèles' },
          { 'Outil': '[Jan](/fr/power-local-llm/jan-review)', 'Selon les sources': 'Apache 2.0 ; Mac/Windows/Linux ; gratuit ; chat hors ligne' },
          { 'Outil': '[oMLX](/fr/power-local-llm/omlx-review)', 'Selon les sources': 'Apache-2.0 ; Mac ; serveur d\'inférence MLX et CLI' },
          { 'Outil': '[Osaurus](/fr/power-local-llm/osaurus-ai-review)', 'Selon les sources': 'MIT ; Mac ; gratuit ; app Swift native' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Nativ est-il gratuit ?',
            a: 'Oui, selon le développeur. Le code est sous licence MIT, et la FAQ indique qu\'il n\'y a ni compte ni abonnement. Les conditions précisent que si des offres payantes comme Nativ Pro étaient proposées, leur prix, leur facturation et leur résiliation seraient affichés avant l\'achat.',
          },
          {
            q: 'Sur quels Mac Nativ fonctionne-t-il ?',
            a: 'Sur les Mac Apple Silicon (M1 ou plus récent) avec macOS 26 ou plus récent. La FAQ explique que Nativ utilise le framework MLX, qui ne fonctionne pas sur les Mac Intel ; les Mac Intel, Windows et Linux ne sont donc pas pris en charge. PromptQuorum ne l\'a testé sur aucun Mac.',
          },
          {
            q: 'Puis-je utiliser Nativ avec Claude Code ou Codex ?',
            a: 'Oui, selon le développeur. Nativ expose le modèle chargé via des points d\'accès compatibles OpenAI et Anthropic, et sa page Intégrations configure Claude Code, Codex, Pi, Hermes, OpenCode, Aider, Goose, Crush, Qwen Code et OpenClaw, ainsi que des éditeurs comme VS Code, Cursor, Zed et JetBrains. PromptQuorum n\'a pas testé cette configuration.',
          },
          {
            q: 'Comment installer Nativ ?',
            a: 'Téléchargez le DMG depuis le site ou la page des versions GitHub et glissez Nativ dans Applications, ou exécutez brew install --cask nativ. L\'app se met ensuite à jour seule via Sparkle. PromptQuorum n\'a pas exécuté l\'installation.',
          },
          {
            q: 'Nativ envoie-t-il mes discussions quelque part ?',
            a: 'Pas par défaut, selon le développeur : discussions, requêtes, fichiers et réponses restent sur votre Mac. L\'app se connecte pour télécharger des modèles depuis Hugging Face et rechercher des mises à jour, et les données de diagnostic ne sont envoyées que si vous y consentez au premier lancement. La politique de confidentialité contient aussi un espace réservé entre crochets ; lisez-la avant de vous y fier.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Nativ mérite un coup d\'œil si vous possédez un Mac Apple Silicon et voulez une app d\'IA locale gratuite et open source qui réunit chat, images, dictée et une API locale pour les agents de code.**',
          'Sur le papier, elle couvre beaucoup : un serveur MLX intégré, une bibliothèque de modèles Hugging Face avec avertissements d\'adéquation, des points d\'accès compatibles OpenAI et Anthropic, la configuration de dix agents de code et de six éditeurs, une extension audio et la prise en charge de MCP, avec la v0.4.6 du 16 novembre 2026 et un commit du 17 novembre 2026.',
          'Les compromis sont réels. Elle ne fonctionne que sur Apple Silicon avec macOS 26 ou plus récent, c\'est un projet jeune en version 0.4, et, lors de la vérification de PromptQuorum le 18 novembre 2026, la politique de confidentialité contenait un espace réservé entre crochets et des sections sur les comptes et les achats. PromptQuorum n\'a pas testé l\'app : commencez par un petit modèle, lisez la politique de confidentialité en vigueur et vérifiez que la dictée, la génération d\'images et l\'API conviennent à votre usage avant de vous y fier.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de Nativ](https://runnativ.ai) — fonctions, configuration requise et téléchargements, consulté le 18 novembre 2026.',
          '[FAQ](https://runnativ.ai/faq) — configuration, confidentialité et intégrations, mise à jour le 5 novembre 2026, consultée le 18 novembre 2026.',
          '[Politique de confidentialité](https://runnativ.ai/privacy) — traitement des données, mise à jour le 16 novembre 2026, consultée le 18 novembre 2026.',
          '[Conditions d\'utilisation](https://runnativ.ai/terms) — éditeur, licence et formulation sur les offres payantes, consultées le 18 novembre 2026.',
          '[Dépôt GitHub](https://github.com/Neywa-Labs/nativ) — licence, date de création et dernier commit, consulté le 18 novembre 2026.',
          '[README](https://github.com/Neywa-Labs/nativ#readme) — fonctions, installation, configuration et API locale, consulté le 18 novembre 2026.',
          '[Version v0.4.6](https://github.com/Neywa-Labs/nativ/releases/tag/v0.4.6) — dernière version, sa date et le DMG, consultée le 18 novembre 2026.',
          '[Cask Homebrew](https://formulae.brew.sh/cask/nativ) — version du cask, consulté le 18 novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Avis sur LM Studio](/fr/power-local-llm/lm-studio-review) — une app de bureau avec navigateur de modèles intégré et mode serveur.',
          '[Avis sur Jan](/fr/power-local-llm/jan-review) — une app de chat de bureau open source, pensée pour le hors ligne.',
          '[Avis sur oMLX](/fr/power-local-llm/omlx-review) — un serveur d\'inférence basé sur MLX pour Apple Silicon, avec cache SSD.',
          '[Avis sur Osaurus](/fr/power-local-llm/osaurus-ai-review) — une app Swift native gratuite sous licence MIT pour les Mac Apple Silicon.',
          '[Annuaire des logiciels de LLM locaux](/fr/directory) — le catalogue complet des outils d\'IA locale.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/nativ-review-hero-es.webp',
    title: 'Reseña de Nativ: app de IA local gratuita y de código abierto para Mac con MLX',
    seoTitle: 'Reseña de Nativ: app de IA local gratis para Mac',
    intro:
      'Nativ es una app de Mac gratuita con licencia MIT, de Neywa Labs, que ejecuta modelos de IA abiertos en Apple Silicon mediante un servidor MLX incluido. Ofrece chat con entrada de imágenes, generación de imágenes, dictado y notas de reuniones, además de una API local compatible con OpenAI y Anthropic que pueden usar los agentes de programación. Esta reseña se basa en el sitio web del desarrollador, su política de privacidad y sus términos, el repositorio de GitHub y su página de versiones, consultados el 18 de noviembre de 2026. PromptQuorum no ha probado la app.',
    metaDescription:
      'Nativ es una app de Mac gratuita con licencia MIT que ejecuta modelos de IA abiertos con MLX en Apple Silicon: chat, imágenes, dictado y API local.',
    twitterDescription:
      'Nativ ejecuta modelos abiertos en tu Mac con MLX: chat, generación de imágenes, dictado y API local para agentes de programación. Gratis, MIT, solo Apple Silicon. Qué está confirmado.',
    audience:
      'Usuarios de Mac con Apple Silicon que quieren una app de IA local gratuita y de código abierto, desarrolladores que conectan agentes de programación a un modelo local y cualquiera que evalúe un proyecto joven de código abierto',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Nativ',
    targetKeywords: [
      'reseña de Nativ',
      'app de IA local para Mac',
      'app MLX Apple Silicon',
      'Nativ Neywa Labs',
      'alternativa a LM Studio para Mac',
      'instalar Nativ',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Nativ es una app de Mac gratuita y de código abierto (MIT) que ejecuta modelos de IA abiertos en Apple Silicon mediante un servidor MLX incluido y añade chat, generación de imágenes, dictado y una API local para herramientas de programación.** Necesita un Mac con chip M1 o posterior y macOS 26 o posterior, se instala con un DMG o con Homebrew y funciona sin conexión, según el desarrollador, una vez descargado un modelo. Es un proyecto joven de una empresa polaca. El desarrollador la presenta como gratuita y sin cuenta, aunque los términos mencionan que podrían llegar más adelante planes de pago como Nativ Pro. PromptQuorum no la ha probado.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es Nativ y para quién es?',
        answer:
          'Nativ es una app nativa de macOS que incluye un servidor mlx-vlm, una biblioteca de modelos, chat, una pestaña de imágenes, dictado y una API local. Encaja con quienes tienen un Mac con Apple Silicon y quieren IA local sin cuenta, y con desarrolladores que quieren conectar Claude Code, Codex o un editor a un modelo en su propio Mac.',
        bullets: [
          'Gratis y con licencia MIT; solo Mac, Apple Silicon (M1 o posterior), macOS 26 o posterior.',
          'Chat con entrada de imágenes, generación y edición de imágenes, modelos de voz, notas de reuniones y dictado, todo en el Mac según el desarrollador.',
          'Servidor local con endpoints compatibles con OpenAI y Anthropic; asistentes de configuración para agentes de programación y editores concretos.',
          'Los modelos vienen de Hugging Face; la app avisa cuando un modelo puede no caber en tu memoria.',
          'Repositorio creado en julio de 2026; la política de privacidad aún contiene un marcador de posición entre corchetes y trata cuentas y compras aunque la app es gratuita.',
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
            text: 'Nativ es una app de Mac gratuita y de código abierto que ejecuta modelos de IA abiertos en Apple Silicon y añade chat, imágenes, dictado y una API local para herramientas de programación.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en una app al estilo ChatGPT que funciona en tu propio Mac en lugar de en los servidores de una empresa. Eliges un modelo, se descarga una vez y, después, el chat, el dictado y la generación de imágenes funcionan sin conexión a internet, según el desarrollador.',
          },
        ],
        items: [
          'Código abierto con licencia MIT y gratis; el desarrollador dice que no hay cuenta ni suscripción, y los términos indican que unos planes de pago como Nativ Pro mostrarían sus condiciones antes de cualquier compra.',
          'Funciona solo en Mac con Apple Silicon (M1 o posterior) y macOS 26 o posterior; MLX no funciona en Mac con Intel.',
          'Funciones: chat con entrada de imágenes, generación y edición de imágenes, modelos de voz, dictado en cualquier app, notas de reuniones, prompts programados y servidores MCP con consentimiento por herramienta.',
          'Un servidor local en el puerto 8080 ofrece endpoints compatibles con OpenAI y Anthropic, y la app configura agentes de programación como Claude Code, Codex, OpenCode, Aider y Goose para usarlo.',
          'PromptQuorum no ha probado la app. La política de privacidad contiene un marcador de posición entre corchetes y secciones sobre cuentas, claves de licencia y compras, aunque el desarrollador presenta la app como gratuita y sin cuenta.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Según la política de privacidad, Neywa Labs no recopila tus chats, prompts, archivos ni resultados, y los datos de diagnóstico solo se recogen con el consentimiento que se pide en el primer inicio. Aun así, la app se conecta a internet para descargar modelos de Hugging Face y buscar actualizaciones.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen',
        content: [
          '**Nativ es una app de Mac en SwiftUI que envuelve un servidor mlx-vlm incluido y el entorno de ejecución MLX, de modo que los modelos abiertos funcionan en Apple Silicon sin configurar un servidor aparte.**',
          'El proyecto tiene licencia MIT y se desarrolla en abierto en [github.com/Neywa-Labs/nativ](https://github.com/Neywa-Labs/nativ) a cargo de [Neywa Labs](https://neywalabs.ai), una empresa que los términos de uso nombran como Neywa Labs sp. z o.o., en Cracovia (Polonia). El desarrollador se describe como el equipo detrás de las bibliotecas de código abierto mlx-vlm y mlx-audio. El repositorio se creó en julio de 2026. La última versión, v0.4.6, apareció el 16 de noviembre de 2026 y el último commit es del 17 de noviembre de 2026, así que el desarrollo está activo y no se aplica ninguna advertencia de proyecto inactivo.',
          'Según el README, la app combina una ventana de chat, una biblioteca de modelos, una pestaña de imágenes, una extensión de audio para dictado y notas de reuniones, una página para desarrolladores con la API local, analíticas, un monitor del sistema y controles en la barra de menús. También permite abrir documentos, código y páginas web en un panel de trabajo junto al chat.',
          'Estas descripciones son afirmaciones del desarrollador. PromptQuorum no ha ejecutado la app y no ha comprobado la velocidad, la calidad de las respuestas, la calidad de las imágenes ni la precisión del dictado.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirlo',
        content: [
          '**Nativ se instala como cualquier app de Mac: descarga el DMG y arrástralo a Aplicaciones, o usa Homebrew.**',
          'La versión v0.4.6 de GitHub incluye un único archivo, Nativ-0.4.6.dmg. El README también da un comando de Homebrew, y la lista de casks de Homebrew muestra la versión 0.4.6. Tras la instalación, la app se actualiza sola mediante Sparkle, según el README.',
        ],
        columns: ['Vía', 'Cómo conseguirlo'],
        rows: [
          { 'Vía': '[DMG](https://github.com/Neywa-Labs/nativ/releases/latest)', 'Cómo conseguirlo': 'Descargar y arrastrar Nativ a Aplicaciones' },
          { 'Vía': '[Sitio web](https://runnativ.ai)', 'Cómo conseguirlo': 'Botón «Download for macOS»' },
          { 'Vía': 'Homebrew', 'Cómo conseguirlo': 'brew install --cask nativ' },
          { 'Vía': '[Código fuente](https://github.com/Neywa-Labs/nativ)', 'Cómo conseguirlo': 'make xcode-generate, make xcode-run (requiere Xcode)' },
        ],
        note: 'En el primer inicio, el README enumera pasos opcionales: elegir o descargar un modelo, definir una clave de API para el servidor y conceder ahora o más tarde los permisos de micrófono, accesibilidad y grabación de pantalla. PromptQuorum no ejecutó el instalador ni analizó la descarga.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**Nativ necesita un Mac con Apple Silicon (M1 o posterior), macOS 26 o posterior y suficiente memoria unificada para el modelo que elijas.**',
          'La lista procede del README y de las preguntas frecuentes, que explican que MLX no funciona en Mac con Intel. No se publica un mínimo de memoria de la propia app, y la biblioteca de modelos muestra avisos de si un modelo cabe en tu Mac, según el README. PromptQuorum no midió el uso de memoria ni la velocidad.',
        ],
        columns: ['Elemento', 'Dato indicado'],
        rows: [
          { 'Elemento': 'Chip', 'Dato indicado': 'Apple Silicon (M1 o posterior)' },
          { 'Elemento': 'Sistema operativo', 'Dato indicado': 'macOS 26 o posterior' },
          { 'Elemento': 'Memoria', 'Dato indicado': 'Memoria unificada suficiente para el modelo' },
          { 'Elemento': 'Internet', 'Dato indicado': 'Solo para descargar modelos y actualizar' },
          { 'Elemento': 'Token de Hugging Face', 'Dato indicado': 'Opcional, para modelos restringidos' },
          { 'Elemento': 'Compilar desde el código', 'Dato indicado': 'Xcode, xcodegen, Python 3' },
        ],
        note: 'Según el README, la descarga de modelos y las dependencias de la primera compilación siguen necesitando acceso a la red. Los permisos opcionales (micrófono, accesibilidad, grabación de pantalla) activan el dictado, la captura de reuniones y las capturas de pantalla, y las preguntas frecuentes indican que puedes omitir cualquiera de ellos.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El núcleo de Nativ es una app de chat local con gestor de modelos, rodeada de imágenes, audio, una API local e integraciones con agentes.** Todo lo siguiente son afirmaciones del desarrollador, tomadas del README y de las preguntas frecuentes.',
        ],
        items: [
          'Chat y visión: conversaciones en streaming, imágenes adjuntas, salida de razonamiento, métricas de respuesta e historial de chat persistente, con varias ventanas independientes que comparten un servidor.',
          'Imágenes: una pestaña dedicada que genera y edita imágenes con modelos de imagen MLX compatibles.',
          'Biblioteca de modelos: explorar y descargar modelos compatibles de Hugging Face con avisos de ajuste a la memoria, mover la caché a una unidad APFS externa y precargar a la vez modelos de lenguaje, imagen, voz y embeddings.',
          'API local: endpoints compatibles con OpenAI para chat, respuestas, imágenes, audio, embeddings y modelos, más endpoints de Anthropic Messages, por defecto en 127.0.0.1:8080, con una clave de API opcional para las rutas de administración.',
          'Integraciones con herramientas de programación: configuración de Codex, Claude Code, Pi, Hermes, OpenCode, Aider, Goose, Crush, Qwen Code y OpenClaw, y de VS Code, Cursor, Zed, JetBrains, Cline y Continue.',
          'Extensión de audio: dictado en cualquier app, historial de transcripciones, notas de reuniones con transcripción y resumen, y exportación a PDF, DOCX o TXT; el audio bruto del dictado se borra a los cinco minutos.',
          'Servidores MCP con consentimiento por herramienta, prompts programados con kits de tareas, una biblioteca de artefactos con búsqueda semántica, un monitor del sistema y controles avanzados de inferencia como la cuantización de la caché KV y la decodificación especulativa.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**Según el desarrollador, tus chats, prompts, archivos y resultados se quedan en tu Mac; la app se conecta para descargar modelos y buscar actualizaciones, y los datos de diagnóstico son opcionales.**',
          'Según la política de privacidad (actualizada el 16 de noviembre de 2026), Neywa Labs no recopila, consulta ni almacena tu contenido, no lo usa para entrenar ni evaluar modelos y no vende datos personales. Los datos de diagnóstico, como informes de fallos, versión de la app y de macOS, chip y tamaño de memoria, cifras de rendimiento y eventos de uso de funciones, solo pueden recogerse con el consentimiento que la app pide en el primer inicio y que puedes retirar en Ajustes. La política dice que nunca incluyen el contenido de tus sesiones ni qué modelos concretos usas.',
          'Las preguntas frecuentes añaden que los modelos se descargan directamente de Hugging Face y que las comprobaciones de actualización llegan a Neywa Labs o a su proveedor de actualizaciones, que puede ver datos de la solicitud como la dirección IP y la versión de la app. El sitio web usa analíticas de PostHog con un banner de cookies.',
          'La política también contiene un marcador de posición del procesador de pagos entre corchetes y secciones sobre registro, claves de licencia y compras, aunque el desarrollador presenta la app como gratuita y sin cuenta. Los términos añaden que podrían llegar más adelante planes de pago como Nativ Pro. Vuelve a leer ambos documentos antes de fiarte de ellos; el código tiene licencia MIT y es público, así que el flujo de datos se puede revisar en principio; PromptQuorum no lo ha hecho.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**Nativ encaja con quienes tienen un Mac con Apple Silicon y quieren una app de IA local gratuita y de código abierto, sin cuenta.**',
        ],
        items: [
          'Usuarios de Mac que quieren chat, generación de imágenes y dictado en una sola app que ejecuta los modelos en su propio equipo.',
          'Desarrolladores que quieren que Claude Code, Codex, Aider o un editor usen un modelo local mediante endpoints compatibles con OpenAI o Anthropic.',
          'Quienes quieren explorar y descargar modelos MLX de Hugging Face con avisos de ajuste a la memoria.',
          'Lectores que prefieren un proyecto cuyo código de la app y cuya licencia son públicos.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        content: [
          '**Nativ no encaja en algunas situaciones, y varios detalles siguen sin verificar.**',
        ],
        items: [
          'No encaja: usuarios de Windows, Linux o Mac con Intel. La app funciona solo en Apple Silicon con macOS 26 o posterior.',
          'No encaja: quienes necesitan un historial largo. El repositorio se creó en julio de 2026 y la versión sigue siendo 0.4.x.',
          'Sin verificar: velocidad, uso de memoria, calidad de las respuestas, calidad de las imágenes y precisión del dictado. PromptQuorum no ha ejecutado la app.',
          'Sin verificar: que nada salga del Mac aparte de las descargas de modelos y las comprobaciones de actualización. La afirmación es del desarrollador, y PromptQuorum no auditó el código ni inspeccionó el tráfico de red.',
          'Sin verificar: cómo encajan las secciones de la política de privacidad sobre cuenta, licencia y compras y el marcador «[PAYMENT PROCESSOR NAME]» con una app gratuita, y qué incluiría «Nativ Pro».',
          'Sin verificar: la afirmación del desarrollador de ser el equipo detrás de mlx-vlm y mlx-audio, el número de modelos que funcionan en la app y las cifras de usuarios. No se encontraron reseñas independientes.',
          'Sin verificar: si el DMG está notarizado y qué memoria mínima necesita un modelo concreto en tu Mac.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Nativ frente a las alternativas',
        itemHeadings: true,
        content: [
          '**Nativ compite con otras apps de escritorio locales y herramientas de inferencia para Mac; PromptQuorum no las ha comparado en la práctica.** Las herramientas siguientes están en el directorio y se describen a partir de sus propias reseñas.',
        ],
        columns: ['Herramienta', 'Según las fuentes'],
        rows: [
          { 'Herramienta': 'Nativ', 'Según las fuentes': 'MIT; solo Mac; gratis; servidor MLX incluido' },
          { 'Herramienta': '[LM Studio](/es/power-local-llm/lm-studio-review)', 'Según las fuentes': 'Propietario, gratis; Mac/Windows/Linux; explorador de modelos' },
          { 'Herramienta': '[Jan](/es/power-local-llm/jan-review)', 'Según las fuentes': 'Apache 2.0; Mac/Windows/Linux; gratis; chat sin conexión' },
          { 'Herramienta': '[oMLX](/es/power-local-llm/omlx-review)', 'Según las fuentes': 'Apache-2.0; Mac; servidor de inferencia MLX y CLI' },
          { 'Herramienta': '[Osaurus](/es/power-local-llm/osaurus-ai-review)', 'Según las fuentes': 'MIT; Mac; gratis; app nativa en Swift' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Nativ es gratis?',
            a: 'Sí, según el desarrollador. El código tiene licencia MIT y las preguntas frecuentes dicen que no hay cuenta ni suscripción. Los términos indican que, si se ofrecen planes de pago como Nativ Pro, su precio, facturación y cancelación se mostrarán antes de comprar.',
          },
          {
            q: '¿En qué Mac funciona Nativ?',
            a: 'En Mac con Apple Silicon (M1 o posterior) con macOS 26 o posterior. Las preguntas frecuentes explican que Nativ usa el framework MLX, que no funciona en Mac con Intel, así que no se admiten Mac con Intel, Windows ni Linux. PromptQuorum no lo ha probado en ningún Mac.',
          },
          {
            q: '¿Puedo usar Nativ con Claude Code o Codex?',
            a: 'Sí, según el desarrollador. Nativ sirve el modelo cargado mediante endpoints compatibles con OpenAI y Anthropic, y su página de integraciones configura Claude Code, Codex, Pi, Hermes, OpenCode, Aider, Goose, Crush, Qwen Code y OpenClaw, además de editores como VS Code, Cursor, Zed y JetBrains. PromptQuorum no ha probado la configuración.',
          },
          {
            q: '¿Cómo instalo Nativ?',
            a: 'Descarga el DMG desde el sitio web o la página de versiones de GitHub y arrastra Nativ a Aplicaciones, o ejecuta brew install --cask nativ. Después la app se actualiza sola mediante Sparkle. PromptQuorum no ejecutó la instalación.',
          },
          {
            q: '¿Nativ envía mis chats a algún sitio?',
            a: 'No por defecto, según el desarrollador: chats, prompts, archivos y respuestas se quedan en tu Mac. La app se conecta para descargar modelos de Hugging Face y buscar actualizaciones, y los datos de diagnóstico solo se envían si das tu consentimiento en el primer inicio. La política de privacidad también contiene un marcador de posición entre corchetes; léela antes de fiarte de ella.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**Nativ merece una mirada si tienes un Mac con Apple Silicon y quieres una app de IA local gratuita y de código abierto que reúna chat, imágenes, dictado y una API local para agentes de programación.**',
          'Sobre el papel cubre mucho: un servidor MLX incluido, una biblioteca de modelos de Hugging Face con avisos de ajuste, endpoints compatibles con OpenAI y Anthropic, configuración para diez agentes de programación y seis editores, una extensión de audio y compatibilidad con MCP, con la v0.4.6 del 16 de noviembre de 2026 y un commit del 17 de noviembre de 2026.',
          'Las contrapartidas son reales. Funciona solo en Apple Silicon con macOS 26 o posterior, es un proyecto joven con número de versión 0.4, y, cuando PromptQuorum lo comprobó el 18 de noviembre de 2026, la política de privacidad contenía un marcador de posición entre corchetes y secciones sobre cuentas y compras. PromptQuorum no ha probado la app: empieza con un modelo pequeño, lee la política de privacidad vigente y comprueba que el dictado, la generación de imágenes y la API sirven para tu uso antes de fiarte de ella.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Nativ](https://runnativ.ai) — funciones, requisitos y descargas, consultado el 18 de noviembre de 2026.',
          '[Preguntas frecuentes](https://runnativ.ai/faq) — requisitos, privacidad e integraciones, actualizadas el 5 de noviembre de 2026, consultadas el 18 de noviembre de 2026.',
          '[Política de privacidad](https://runnativ.ai/privacy) — tratamiento de datos, actualizada el 16 de noviembre de 2026, consultada el 18 de noviembre de 2026.',
          '[Términos de uso](https://runnativ.ai/terms) — proveedor, licencia y redacción sobre planes de pago, consultados el 18 de noviembre de 2026.',
          '[Repositorio de GitHub](https://github.com/Neywa-Labs/nativ) — licencia, fecha de creación y último commit, consultado el 18 de noviembre de 2026.',
          '[README](https://github.com/Neywa-Labs/nativ#readme) — funciones, instalación, requisitos y API local, consultado el 18 de noviembre de 2026.',
          '[Versión v0.4.6](https://github.com/Neywa-Labs/nativ/releases/tag/v0.4.6) — última versión, su fecha y el DMG, consultada el 18 de noviembre de 2026.',
          '[Cask de Homebrew](https://formulae.brew.sh/cask/nativ) — versión del cask, consultado el 18 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de LM Studio](/es/power-local-llm/lm-studio-review) — una app de escritorio con explorador de modelos integrado y modo servidor.',
          '[Reseña de Jan](/es/power-local-llm/jan-review) — una app de chat de escritorio de código abierto, pensada para usarse sin conexión.',
          '[Reseña de oMLX](/es/power-local-llm/omlx-review) — un servidor de inferencia basado en MLX para Apple Silicon con caché en SSD.',
          '[Reseña de Osaurus](/es/power-local-llm/osaurus-ai-review) — una app nativa en Swift, gratuita y con licencia MIT, para Mac con Apple Silicon.',
          '[Directorio de software de LLM locales](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/nativ-review-hero-pt.webp',
    title: 'Análise do Nativ: app de IA local gratuito e de código aberto para Mac com MLX',
    seoTitle: 'Análise do Nativ: app de IA local grátis para Mac',
    intro:
      'O Nativ é um app de Mac gratuito, com licença MIT, da Neywa Labs, que executa modelos de IA abertos no Apple Silicon por meio de um servidor MLX incluído. Ele oferece chat com entrada de imagens, geração de imagens, ditado e notas de reuniões, além de uma API local compatível com OpenAI e Anthropic que agentes de programação podem usar. Esta análise se baseia no site do desenvolvedor, na política de privacidade e nos termos de uso, no repositório do GitHub e na página de versões, consultados em 18 de novembro de 2026. A PromptQuorum não testou o app.',
    metaDescription:
      'O Nativ é um app de Mac gratuito com licença MIT que executa modelos de IA abertos com MLX no Apple Silicon: chat, imagens, ditado e API local.',
    twitterDescription:
      'O Nativ executa modelos abertos no seu Mac com MLX: chat, geração de imagens, ditado e API local para agentes de programação. Grátis, MIT, só Apple Silicon. O que está confirmado.',
    audience:
      'Usuários de Mac com Apple Silicon que querem um app de IA local gratuito e de código aberto, desenvolvedores que apontam agentes de programação para um modelo local e quem avalia um projeto jovem de código aberto',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Nativ',
    targetKeywords: [
      'análise do Nativ',
      'app de IA local para Mac',
      'app MLX Apple Silicon',
      'Nativ Neywa Labs',
      'alternativa ao LM Studio no Mac',
      'instalar o Nativ',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O Nativ é um app de Mac gratuito e de código aberto (MIT) que executa modelos de IA abertos no Apple Silicon por meio de um servidor MLX incluído e acrescenta chat, geração de imagens, ditado e uma API local para ferramentas de programação.** Ele exige um Mac com chip M1 ou mais recente e macOS 26 ou mais recente, é instalado por DMG ou Homebrew e funciona offline, segundo o desenvolvedor, depois que um modelo é baixado. É um projeto jovem de uma empresa polonesa. O desenvolvedor a apresenta como gratuita e sem conta, embora os termos mencionem que planos pagos como o Nativ Pro poderiam chegar depois. A PromptQuorum não a testou.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o Nativ e para quem ele serve?',
        answer:
          'O Nativ é um app nativo de macOS que reúne um servidor mlx-vlm, uma biblioteca de modelos, chat, uma aba de imagens, ditado e uma API local. Serve para quem tem um Mac com Apple Silicon e quer IA local sem conta, e para desenvolvedores que querem conectar o Claude Code, o Codex ou um editor a um modelo no próprio Mac.',
        bullets: [
          'Grátis e com licença MIT; só Mac, Apple Silicon (M1 ou mais recente), macOS 26 ou mais recente.',
          'Chat com entrada de imagens, geração e edição de imagens, modelos de voz, notas de reuniões e ditado, tudo no Mac segundo o desenvolvedor.',
          'Servidor local com endpoints compatíveis com OpenAI e Anthropic; assistentes de configuração para agentes de programação e editores citados.',
          'Os modelos vêm do Hugging Face; o app avisa quando um modelo pode não caber na sua memória.',
          'Repositório criado em julho de 2026; a política de privacidade ainda tem um marcador entre colchetes e trata de contas e compras, embora o app seja gratuito.',
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
            text: 'O Nativ é um app de Mac gratuito e de código aberto que executa modelos de IA abertos no Apple Silicon e acrescenta chat, imagens, ditado e uma API local para ferramentas de programação.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em um app no estilo ChatGPT que roda no seu próprio Mac, e não nos servidores de uma empresa. Você escolhe um modelo, ele é baixado uma vez e, depois disso, chat, ditado e geração de imagens funcionam sem conexão com a internet, segundo o desenvolvedor.',
          },
        ],
        items: [
          'Código aberto com licença MIT e gratuito; o desenvolvedor diz que não há conta nem assinatura, e os termos dizem que planos pagos como o Nativ Pro mostrariam suas condições antes de qualquer compra.',
          'Roda apenas em Macs com Apple Silicon (M1 ou mais recente) e macOS 26 ou mais recente; o MLX não roda em Macs com Intel.',
          'Recursos: chat com entrada de imagens, geração e edição de imagens, modelos de voz, ditado em qualquer app, notas de reuniões, prompts agendados e servidores MCP com consentimento por ferramenta.',
          'Um servidor local na porta 8080 oferece endpoints compatíveis com OpenAI e Anthropic, e o app configura agentes de programação como Claude Code, Codex, OpenCode, Aider e Goose para usá-lo.',
          'A PromptQuorum não testou o app. A política de privacidade contém um marcador entre colchetes e seções sobre contas, chaves de licença e compras, embora o desenvolvedor apresente o app como gratuito e sem conta.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Segundo a política de privacidade, a Neywa Labs não coleta seus chats, prompts, arquivos nem resultados, e os dados de diagnóstico só são coletados com o consentimento pedido na primeira abertura. Mesmo assim, o app se conecta à internet para baixar modelos do Hugging Face e verificar atualizações.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O Nativ é um app de Mac em SwiftUI que encapsula um servidor mlx-vlm incluído e o ambiente de execução MLX, de modo que modelos abertos rodam no Apple Silicon sem um servidor separado para configurar.**',
          'O projeto tem licença MIT e é desenvolvido às claras em [github.com/Neywa-Labs/nativ](https://github.com/Neywa-Labs/nativ) pela [Neywa Labs](https://neywalabs.ai), empresa que os termos de uso nomeiam como Neywa Labs sp. z o.o., em Cracóvia, na Polônia. O desenvolvedor se descreve como a equipe por trás das bibliotecas de código aberto mlx-vlm e mlx-audio. O repositório foi criado em julho de 2026. A versão mais recente, v0.4.6, saiu em 16 de novembro de 2026 e o último commit é de 17 de novembro de 2026; ou seja, o desenvolvimento está ativo e não se aplica aviso de projeto inativo.',
          'Segundo o README, o app combina uma janela de chat, uma biblioteca de modelos, uma aba de imagens, uma extensão de áudio para ditado e notas de reuniões, uma página de desenvolvedor com a API local, análises, um monitor do sistema e controles na barra de menus. Também permite abrir documentos, código e páginas da web em um painel de trabalho ao lado do chat.',
          'Estas descrições são afirmações do desenvolvedor. A PromptQuorum não executou o app e não verificou velocidade, qualidade das respostas, qualidade das imagens nem precisão do ditado.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**Você instala o Nativ como qualquer app de Mac: baixe o DMG e arraste para Aplicativos, ou use o Homebrew.**',
          'A versão v0.4.6 do GitHub traz um único arquivo, Nativ-0.4.6.dmg. O README também dá um comando do Homebrew, e a lista de casks do Homebrew mostra a versão 0.4.6. Depois da instalação, o app se atualiza sozinho pelo Sparkle, segundo o README.',
        ],
        columns: ['Caminho', 'Como obter'],
        rows: [
          { 'Caminho': '[DMG](https://github.com/Neywa-Labs/nativ/releases/latest)', 'Como obter': 'Baixar e arrastar o Nativ para Aplicativos' },
          { 'Caminho': '[Site](https://runnativ.ai)', 'Como obter': 'Botão «Download for macOS»' },
          { 'Caminho': 'Homebrew', 'Como obter': 'brew install --cask nativ' },
          { 'Caminho': '[Código-fonte](https://github.com/Neywa-Labs/nativ)', 'Como obter': 'make xcode-generate, make xcode-run (exige Xcode)' },
        ],
        note: 'Na primeira abertura, o README lista etapas opcionais: escolher ou baixar um modelo, definir uma chave de API para o servidor e conceder agora ou depois as permissões de microfone, acessibilidade e gravação de tela. A PromptQuorum não executou o instalador nem analisou o download.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**O Nativ exige um Mac com Apple Silicon (M1 ou mais recente), macOS 26 ou mais recente e memória unificada suficiente para o modelo escolhido.**',
          'A lista vem do README e das perguntas frequentes, que explicam que o MLX não roda em Macs com Intel. Não há um mínimo de memória publicado para o próprio app, e a biblioteca de modelos mostra avisos de adequação ao seu Mac, segundo o README. A PromptQuorum não mediu uso de memória nem velocidade.',
        ],
        columns: ['Item', 'Valor informado'],
        rows: [
          { 'Item': 'Chip', 'Valor informado': 'Apple Silicon (M1 ou mais recente)' },
          { 'Item': 'Sistema operacional', 'Valor informado': 'macOS 26 ou mais recente' },
          { 'Item': 'Memória', 'Valor informado': 'Memória unificada suficiente para o modelo' },
          { 'Item': 'Internet', 'Valor informado': 'Só para baixar modelos e atualizações' },
          { 'Item': 'Token do Hugging Face', 'Valor informado': 'Opcional, para modelos restritos' },
          { 'Item': 'Compilar do código-fonte', 'Valor informado': 'Xcode, xcodegen, Python 3' },
        ],
        note: 'Segundo o README, o download de modelos e as dependências da primeira compilação ainda exigem acesso à rede. As permissões opcionais (microfone, acessibilidade, gravação de tela) ativam o ditado, a captura de reuniões e as capturas de tela, e as perguntas frequentes dizem que você pode pular qualquer uma delas.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O núcleo do Nativ é um app de chat local com gerenciador de modelos, acompanhado de imagens, áudio, uma API local e integrações com agentes.** Tudo o que segue são afirmações do desenvolvedor, tiradas do README e das perguntas frequentes.',
        ],
        items: [
          'Chat e visão: conversas em streaming, imagens anexadas, saída de raciocínio, métricas de resposta e histórico de chat persistente, com várias janelas independentes que compartilham um servidor.',
          'Imagens: uma aba dedicada que gera e edita imagens com modelos de imagem MLX compatíveis.',
          'Biblioteca de modelos: navegar e baixar modelos compatíveis do Hugging Face com avisos de adequação à memória, mover o cache para um disco APFS externo e pré-carregar juntos modelos de linguagem, imagem, voz e embeddings.',
          'API local: endpoints compatíveis com OpenAI para chat, respostas, imagens, áudio, embeddings e modelos, mais endpoints Anthropic Messages, por padrão em 127.0.0.1:8080, com uma chave de API opcional para as rotas de gerenciamento.',
          'Integrações com ferramentas de programação: configuração de Codex, Claude Code, Pi, Hermes, OpenCode, Aider, Goose, Crush, Qwen Code e OpenClaw, e de VS Code, Cursor, Zed, JetBrains, Cline e Continue.',
          'Extensão de áudio: ditado em qualquer app, histórico de transcrições, notas de reuniões com transcrição e resumo, e exportação para PDF, DOCX ou TXT; o áudio bruto do ditado é apagado após cinco minutos.',
          'Servidores MCP com consentimento por ferramenta, prompts agendados com kits de tarefas, uma biblioteca de artefatos com busca semântica, um monitor do sistema e controles avançados de inferência, como quantização do cache KV e decodificação especulativa.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**Segundo o desenvolvedor, seus chats, prompts, arquivos e resultados ficam no seu Mac; o app se conecta para baixar modelos e verificar atualizações, e os dados de diagnóstico são opcionais.**',
          'Segundo a política de privacidade (atualizada em 16 de novembro de 2026), a Neywa Labs não coleta, acessa nem armazena seu conteúdo, não o usa para treinar ou avaliar modelos e não vende dados pessoais. Dados de diagnóstico, como relatórios de falhas, versão do app e do macOS, chip e tamanho da memória, medições de desempenho e eventos de uso de recursos, só podem ser coletados com o consentimento que o app pede na primeira abertura e que você pode retirar nos Ajustes. A política diz que eles nunca incluem o conteúdo das suas sessões nem quais modelos específicos você usa.',
          'As perguntas frequentes acrescentam que os modelos são baixados direto do Hugging Face e que as verificações de atualização chegam à Neywa Labs ou ao seu provedor de atualizações, que pode ver dados da requisição, como endereço IP e versão do app. O site usa análises do PostHog com um banner de cookies.',
          'A política também contém um marcador do processador de pagamentos entre colchetes e seções sobre cadastro, chaves de licença e compras, embora o desenvolvedor apresente o app como gratuito e sem conta. Os termos acrescentam que planos pagos como o Nativ Pro poderiam chegar depois. Releia os dois documentos antes de confiar neles; o código tem licença MIT e é público, então o fluxo de dados pode, em princípio, ser inspecionado; a PromptQuorum não fez isso.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O Nativ serve para quem tem um Mac com Apple Silicon e quer um app de IA local gratuito e de código aberto, sem conta.**',
        ],
        items: [
          'Usuários de Mac que querem chat, geração de imagens e ditado em um só app que executa os modelos na própria máquina.',
          'Desenvolvedores que querem que o Claude Code, o Codex, o Aider ou um editor usem um modelo local por endpoints compatíveis com OpenAI ou Anthropic.',
          'Quem quer navegar e baixar modelos MLX do Hugging Face com avisos de adequação à memória.',
          'Leitores que preferem um projeto cujo código do app e cuja licença são públicos.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        content: [
          '**O Nativ não serve em algumas situações, e vários detalhes continuam sem verificação.**',
        ],
        items: [
          'Não serve: usuários de Windows, Linux ou Mac com Intel. O app roda apenas no Apple Silicon com macOS 26 ou mais recente.',
          'Não serve: quem precisa de um longo histórico. O repositório foi criado em julho de 2026 e a versão ainda é 0.4.x.',
          'Não verificado: velocidade, uso de memória, qualidade das respostas, qualidade das imagens e precisão do ditado. A PromptQuorum não executou o app.',
          'Não verificado: que nada saia do Mac além dos downloads de modelos e das verificações de atualização. A afirmação é do desenvolvedor, e a PromptQuorum não auditou o código nem inspecionou o tráfego de rede.',
          'Não verificado: como as seções da política de privacidade sobre conta, licença e compras e o marcador «[PAYMENT PROCESSOR NAME]» combinam com um app gratuito, e o que o «Nativ Pro» incluiria.',
          'Não verificado: a afirmação do desenvolvedor de ser a equipe por trás do mlx-vlm e do mlx-audio, o número de modelos que rodam no app e números de usuários. Não foram encontradas análises independentes.',
          'Não verificado: se o DMG é notarizado e qual memória mínima um modelo específico exige no seu Mac.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Nativ versus alternativas',
        itemHeadings: true,
        content: [
          '**O Nativ concorre com outros apps de desktop locais e ferramentas de inferência para Mac; a PromptQuorum não os comparou na prática.** As ferramentas abaixo estão no diretório e são descritas a partir de suas próprias análises.',
        ],
        columns: ['Ferramenta', 'Segundo as fontes'],
        rows: [
          { 'Ferramenta': 'Nativ', 'Segundo as fontes': 'MIT; só Mac; grátis; servidor MLX incluído' },
          { 'Ferramenta': '[LM Studio](/pt/power-local-llm/lm-studio-review)', 'Segundo as fontes': 'Proprietário, grátis; Mac/Windows/Linux; navegador de modelos' },
          { 'Ferramenta': '[Jan](/pt/power-local-llm/jan-review)', 'Segundo as fontes': 'Apache 2.0; Mac/Windows/Linux; grátis; chat offline' },
          { 'Ferramenta': '[oMLX](/pt/power-local-llm/omlx-review)', 'Segundo as fontes': 'Apache-2.0; Mac; servidor de inferência MLX e CLI' },
          { 'Ferramenta': '[Osaurus](/pt/power-local-llm/osaurus-ai-review)', 'Segundo as fontes': 'MIT; Mac; grátis; app nativo em Swift' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Nativ é gratuito?',
            a: 'Sim, segundo o desenvolvedor. O código tem licença MIT e as perguntas frequentes dizem que não há conta nem assinatura. Os termos dizem que, se planos pagos como o Nativ Pro forem oferecidos, preço, cobrança e cancelamento serão mostrados antes da compra.',
          },
          {
            q: 'Em quais Macs o Nativ roda?',
            a: 'Em Macs com Apple Silicon (M1 ou mais recente) com macOS 26 ou mais recente. As perguntas frequentes explicam que o Nativ usa o framework MLX, que não roda em Macs com Intel; portanto, Macs com Intel, Windows e Linux não são compatíveis. A PromptQuorum não o testou em nenhum Mac.',
          },
          {
            q: 'Posso usar o Nativ com o Claude Code ou o Codex?',
            a: 'Sim, segundo o desenvolvedor. O Nativ serve o modelo carregado por endpoints compatíveis com OpenAI e Anthropic, e a página de integrações configura Claude Code, Codex, Pi, Hermes, OpenCode, Aider, Goose, Crush, Qwen Code e OpenClaw, além de editores como VS Code, Cursor, Zed e JetBrains. A PromptQuorum não testou a configuração.',
          },
          {
            q: 'Como instalo o Nativ?',
            a: 'Baixe o DMG no site ou na página de versões do GitHub e arraste o Nativ para Aplicativos, ou execute brew install --cask nativ. Depois, o app se atualiza sozinho pelo Sparkle. A PromptQuorum não executou a instalação.',
          },
          {
            q: 'O Nativ envia meus chats para algum lugar?',
            a: 'Não por padrão, segundo o desenvolvedor: chats, prompts, arquivos e respostas ficam no seu Mac. O app se conecta para baixar modelos do Hugging Face e verificar atualizações, e os dados de diagnóstico só são enviados se você consentir na primeira abertura. A política de privacidade também contém um marcador entre colchetes; leia-a antes de confiar nela.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O Nativ vale uma olhada se você tem um Mac com Apple Silicon e quer um app de IA local gratuito e de código aberto que reúna chat, imagens, ditado e uma API local para agentes de programação.**',
          'No papel, ele cobre muita coisa: um servidor MLX incluído, uma biblioteca de modelos do Hugging Face com avisos de adequação, endpoints compatíveis com OpenAI e Anthropic, configuração para dez agentes de programação e seis editores, uma extensão de áudio e suporte a MCP, com a v0.4.6 de 16 de novembro de 2026 e um commit de 17 de novembro de 2026.',
          'As contrapartidas são reais. Ele roda apenas no Apple Silicon com macOS 26 ou mais recente, é um projeto jovem com número de versão 0.4, e, quando a PromptQuorum verificou em 18 de novembro de 2026, a política de privacidade tinha um marcador entre colchetes e seções sobre contas e compras. A PromptQuorum não testou o app: comece com um modelo pequeno, leia a política de privacidade atual e confira se ditado, geração de imagens e API servem para o seu uso antes de confiar nele.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Nativ](https://runnativ.ai) — recursos, requisitos e downloads, consultado em 18 de novembro de 2026.',
          '[Perguntas frequentes](https://runnativ.ai/faq) — requisitos, privacidade e integrações, atualizadas em 5 de novembro de 2026, consultadas em 18 de novembro de 2026.',
          '[Política de privacidade](https://runnativ.ai/privacy) — tratamento de dados, atualizada em 16 de novembro de 2026, consultada em 18 de novembro de 2026.',
          '[Termos de uso](https://runnativ.ai/terms) — provedor, licença e redação sobre planos pagos, consultados em 18 de novembro de 2026.',
          '[Repositório do GitHub](https://github.com/Neywa-Labs/nativ) — licença, data de criação e último commit, consultado em 18 de novembro de 2026.',
          '[README](https://github.com/Neywa-Labs/nativ#readme) — recursos, instalação, requisitos e API local, consultado em 18 de novembro de 2026.',
          '[Versão v0.4.6](https://github.com/Neywa-Labs/nativ/releases/tag/v0.4.6) — versão mais recente, sua data e o DMG, consultada em 18 de novembro de 2026.',
          '[Cask do Homebrew](https://formulae.brew.sh/cask/nativ) — versão do cask, consultado em 18 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do LM Studio](/pt/power-local-llm/lm-studio-review) — um app de desktop com navegador de modelos integrado e modo servidor.',
          '[Análise do Jan](/pt/power-local-llm/jan-review) — um app de chat de desktop de código aberto, pensado para uso offline.',
          '[Análise do oMLX](/pt/power-local-llm/omlx-review) — um servidor de inferência baseado em MLX para Apple Silicon com cache em SSD.',
          '[Análise do Osaurus](/pt/power-local-llm/osaurus-ai-review) — um app nativo em Swift, gratuito e com licença MIT, para Macs com Apple Silicon.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/nativ-review-hero-ja.webp',
    title: 'Nativレビュー：MLXで動く無料のMac向けローカルAIアプリ',
    seoTitle: 'Nativレビュー：Mac向け無料ローカルAIアプリ',
    intro:
      'Nativは、Neywa Labsが公開するMIT License・無料のMacアプリです。同梱のMLXサーバーを通じて、Apple Silicon上でオープンなAIモデルを動かします。画像入力に対応したチャット、画像生成、音声入力、会議ノートに加え、コーディングエージェントが使えるOpenAI・Anthropic互換のローカルAPIを備えています。このレビューは、開発元のWebサイト、プライバシーポリシーと利用規約、GitHubリポジトリ、リリースページをもとにしており、確認日は2026年11月18日です。PromptQuorumは実機でのテストを行っていません。',
    metaDescription:
      'Nativは、Apple Silicon上でMLXによりオープンなAIモデルを動かす無料のMIT版Macアプリ。チャット、画像、音声入力、コーディングエージェント向けローカルAPIを備えます。',
    twitterDescription:
      'NativはMLXでオープンなモデルをMac上で動かします。チャット、画像生成、音声入力、コーディングエージェント向けローカルAPI。無料、MIT、Apple Silicon専用。確認できた点を整理します。',
    audience:
      '無料のオープンソースのローカルAIアプリを探すApple Silicon搭載Macのユーザー、コーディングエージェントをローカルモデルにつなぎたい開発者、新しいオープンソースプロジェクトを見極めたい方',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Nativレビュー',
    targetKeywords: [
      'Nativ レビュー',
      'Mac ローカルAIアプリ',
      'MLX アプリ Apple Silicon',
      'Nativ Neywa Labs',
      'LM Studio 代替 Mac',
      'Nativ インストール',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Nativは、同梱のMLXサーバーでApple Silicon上のオープンなAIモデルを動かし、チャット、画像生成、音声入力、コーディングツール向けローカルAPIを加えた、無料のオープンソース（MIT）Macアプリです。** M1以降のチップを積んだMacとmacOS 26以降が必要で、DMGまたはHomebrewでインストールし、開発元によると、モデルをダウンロードした後はオフラインでも動きます。ポーランドの企業による新しいプロジェクトです。開発元は無料でアカウント不要のアプリだと説明していますが、利用規約はNativ Proのような有料プランが今後登場する可能性にも触れています。PromptQuorumはテストしていません。',
    quickAnswerTop: {
      ja: {
        question: 'Nativとは何で、誰に向いていますか？',
        answer:
          'Nativは、mlx-vlmサーバー、モデルライブラリ、チャット、画像タブ、音声入力、ローカルAPIをまとめたネイティブのmacOSアプリです。アカウントなしでローカルAIを使いたいApple Siliconの所有者や、Claude Code、Codex、エディタを自分のMac上のモデルにつなぎたい開発者に向いています。',
        bullets: [
          '無料でMIT License。Mac専用で、Apple Silicon（M1以降）とmacOS 26以降が必要です。',
          '画像入力付きチャット、画像の生成と編集、音声モデル、会議ノート、音声入力。開発元によると、すべてMac上で動きます。',
          'OpenAI・Anthropic互換エンドポイントを持つローカルサーバー。名前の挙がったコーディングエージェントやエディタ向けの設定支援があります。',
          'モデルはHugging Faceから取得します。メモリに収まらない可能性があるモデルには警告が出ます。',
          'リポジトリは2026年7月に作成。無料アプリなのに、プライバシーポリシーには角括弧付きのプレースホルダーが残り、アカウントや購入にも触れています。',
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
            text: 'Nativは、Apple Silicon上でオープンなAIモデルを動かし、チャット、画像、音声入力、コーディングツール向けローカルAPIを加えた、無料のオープンソースMacアプリです。',
          },
          {
            type: 'plain-terms',
            text: '企業のサーバーではなく、自分のMac上で動くChatGPT風のアプリと考えてください。モデルを選ぶと一度だけダウンロードされ、その後のチャット、音声入力、画像生成は、開発元によればインターネットなしで使えます。',
          },
        ],
        items: [
          'MIT Licenseで無料です。開発元はアカウントもサブスクリプションもないとしており、利用規約には、Nativ Proのような有料プランを提供する場合は購入前に条件を示すとあります。',
          'Apple Silicon（M1以降）とmacOS 26以降のMacだけで動作します。MLXはIntel Macでは動きません。',
          '機能：画像入力付きチャット、画像の生成と編集、音声モデル、あらゆるアプリでの音声入力、会議ノート、定期実行プロンプト、ツールごとの同意付きMCPサーバー。',
          'ポート8080のローカルサーバーがOpenAI・Anthropic互換のエンドポイントを提供し、Claude Code、Codex、OpenCode、Aider、Gooseなどのコーディングエージェントの設定もアプリが支援します。',
          'PromptQuorumはアプリをテストしていません。プライバシーポリシーには、角括弧付きの決済事業者のプレースホルダーと、アカウント、ライセンスキー、購入の項目があります。開発元は無料でアカウント不要のアプリだと説明しています。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'プライバシーポリシーによると、Neywa Labsはチャット、プロンプト、ファイル、出力を収集せず、診断データは初回起動時に求める同意があった場合にだけ収集されます。それでもアプリは、Hugging Faceからモデルを取得したり更新を確認したりするためにネットワークへ接続します。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**Nativは、mlx-vlmサーバーとMLXランタイムを同梱したSwiftUI製のMacアプリで、別のサーバーを用意せずにApple Silicon上でオープンなモデルを動かせます。**',
          'プロジェクトはMIT Licenseで、[Neywa Labs](https://neywalabs.ai)が[github.com/Neywa-Labs/nativ](https://github.com/Neywa-Labs/nativ)で公開開発しています。利用規約は事業者をポーランド・クラクフのNeywa Labs sp. z o.o.と記しています。開発元は、オープンソースライブラリmlx-vlmとmlx-audioを手がけるチームだと自己紹介しています。リポジトリは2026年7月に作成されました。最新リリースのv0.4.6は2026年11月16日、最後のコミットは2026年11月17日で、開発は活発なため、停滞プロジェクトの警告は付きません。',
          'READMEによると、このアプリはチャットウィンドウ、モデルライブラリ、画像タブ、音声入力と会議ノート用のオーディオ拡張、ローカルAPIを備えた開発者ページ、分析、システムモニター、メニューバー操作を組み合わせています。チャットの横の作業ペインで、文書、コード、Webページも開けます。',
          'これらは開発元の説明です。PromptQuorumはアプリを実行しておらず、速度、回答の品質、画像の品質、音声入力の精度は確認していません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Nativは一般的なMacアプリと同じく、DMGをダウンロードしてアプリケーションフォルダへドラッグするか、Homebrewで入れます。**',
          'GitHubのリリースv0.4.6には、Nativ-0.4.6.dmgが1つだけ含まれています。READMEにはHomebrewのコマンドもあり、Homebrew caskの一覧ではバージョン0.4.6と表示されます。インストール後は、READMEによると、Sparkleでアプリ自身が更新されます。',
        ],
        columns: ['方法', '入手方法'],
        rows: [
          { '方法': '[DMG](https://github.com/Neywa-Labs/nativ/releases/latest)', '入手方法': 'ダウンロードしてアプリケーションへドラッグ' },
          { '方法': '[Webサイト](https://runnativ.ai)', '入手方法': '「Download for macOS」ボタン' },
          { '方法': 'Homebrew', '入手方法': 'brew install --cask nativ' },
          { '方法': '[ソースコード](https://github.com/Neywa-Labs/nativ)', '入手方法': 'make xcode-generate、make xcode-run（Xcode必須）' },
        ],
        note: '初回起動時の手順として、READMEは次の任意項目を挙げています。モデルの選択またはダウンロード、サーバー用APIキーの設定、マイク、アクセシビリティ、画面収録の許可（今でも後でも可）。PromptQuorumはインストーラーを実行せず、ダウンロードファイルの検査もしていません。',
      },
      requirements: {
        id: 'requirements',
        title: '動作要件',
        content: [
          '**Nativには、Apple Silicon（M1以降）のMac、macOS 26以降、選んだモデルに足りるユニファイドメモリが必要です。**',
          'この一覧はREADMEとFAQによるもので、FAQはMLXがIntel Macでは動かないと説明しています。アプリ自体の最小メモリは公表されておらず、READMEによると、モデルライブラリがお使いのMacに合うかどうかの警告を表示します。PromptQuorumはメモリ使用量も速度も測定していません。',
        ],
        columns: ['項目', '記載されている内容'],
        rows: [
          { '項目': 'チップ', '記載されている内容': 'Apple Silicon（M1以降）' },
          { '項目': 'OS', '記載されている内容': 'macOS 26以降' },
          { '項目': 'メモリ', '記載されている内容': 'モデルに足りるユニファイドメモリ' },
          { '項目': 'インターネット', '記載されている内容': 'モデル取得と更新のときだけ' },
          { '項目': 'Hugging Faceトークン', '記載されている内容': '任意（制限付きモデル用）' },
          { '項目': 'ソースからビルド', '記載されている内容': 'Xcode、xcodegen、Python 3' },
        ],
        note: 'READMEによると、モデルのダウンロードと初回ビルド時の依存関係の取得には、引き続きネットワーク接続が必要です。任意の許可（マイク、アクセシビリティ、画面収録）は音声入力、会議の録音、スクリーンショット添付を有効にし、FAQはどれも省略できるとしています。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**Nativの中心は、モデル管理を備えたローカルのチャットアプリで、その周りに画像、音声、ローカルAPI、エージェント連携があります。** 以下はすべて、READMEとFAQにある開発元の説明です。',
        ],
        items: [
          'チャットとビジョン：ストリーミング会話、画像の添付、推論の表示、応答メトリクス、チャット履歴の保存。1つのサーバーを共有する複数の独立ウィンドウに対応します。',
          '画像：専用タブで、対応するMLX画像モデルを使って画像を生成・編集します。',
          'モデルライブラリ：対応するHugging Faceモデルを、メモリ適合の警告付きで閲覧・ダウンロード。キャッシュを外付けAPFSドライブへ移せ、言語、画像、音声、埋め込みのモデルをまとめて事前読み込みできます。',
          'ローカルAPI：チャット、レスポンス、画像、音声、埋め込み、モデルのOpenAI互換エンドポイントと、Anthropic Messagesエンドポイント。既定は127.0.0.1:8080で、管理用ルート向けの任意のAPIキーがあります。',
          'コーディングツール連携：Codex、Claude Code、Pi、Hermes、OpenCode、Aider、Goose、Crush、Qwen Code、OpenClawのほか、VS Code、Cursor、Zed、JetBrains、Cline、Continueの設定に対応します。',
          'オーディオ拡張：あらゆるアプリでの音声入力、文字起こし履歴、文字起こしと要約付きの会議ノート、PDF・DOCX・TXTへの書き出し。音声入力の生の音声は5分後に削除されます。',
          'ツールごとの同意付きMCPサーバー、タスクキット付きの定期実行プロンプト、意味検索付きの成果物ライブラリ、システムモニター、KVキャッシュ量子化や投機的デコーディングなどの高度な推論設定。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**開発元によると、チャット、プロンプト、ファイル、出力はMac内にとどまります。アプリはモデル取得と更新確認のためにネットワークへ接続し、診断データは任意です。**',
          'プライバシーポリシー（2026年11月16日更新）によると、Neywa Labsはコンテンツを収集・閲覧・保存せず、モデルの学習や評価にも使わず、個人情報を販売しません。クラッシュレポート、アプリとmacOSのバージョン、チップとメモリ容量、性能の数値、機能の利用イベントといった診断データは、初回起動時にアプリが求める同意がある場合にだけ収集でき、設定で撤回できます。ポリシーは、セッションの内容や使用した具体的なモデルは含まれないとしています。',
          'FAQによると、モデルはHugging Faceから直接取得され、更新確認はNeywa Labsまたはその更新配信事業者に届き、IPアドレスやアプリのバージョンなどのリクエスト情報が見える場合があります。Webサイトは、Cookieバナー付きでPostHogの解析を使っています。',
          'ポリシーには、角括弧付きの決済事業者のプレースホルダーと、登録、ライセンスキー、購入に関する項目もあります。開発元は無料でアカウント不要のアプリだと説明しています。利用規約は、Nativ Proのような有料プランが今後登場する可能性にも触れています。頼る前に両文書を読み直してください。コードはMIT Licenseで公開されているため、データの流れは原理的には検証できますが、PromptQuorumは検証していません。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**Nativは、アカウント不要の無料オープンソースのローカルAIアプリを求めるApple Siliconの所有者に向いています。**',
        ],
        items: [
          'チャット、画像生成、音声入力を、自分のマシンでモデルを動かす1つのアプリで使いたいMacユーザー。',
          'Claude Code、Codex、Aider、エディタに、OpenAI・Anthropic互換のエンドポイント経由でローカルモデルを使わせたい開発者。',
          'Hugging FaceのMLXモデルを、メモリ適合の警告付きで探してダウンロードしたい方。',
          'アプリのコードとライセンスが公開されているプロジェクトを好む方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        content: [
          '**Nativが合わない場面もあり、未確認の点も複数残っています。**',
        ],
        items: [
          '向かない人：Windows、Linux、Intel Macのユーザー。アプリはApple SiliconとmacOS 26以降の環境でのみ動作します。',
          '向かない人：長い実績を求める方。リポジトリは2026年7月に作成され、バージョンはまだ0.4.xです。',
          '未確認：速度、メモリ使用量、回答の品質、画像の品質、音声入力の精度。PromptQuorumはアプリを実行していません。',
          '未確認：モデルのダウンロードと更新確認以外でMacから何も出ていかないこと。これは開発元の主張で、PromptQuorumはコードの監査も通信の検査もしていません。',
          '未確認：プライバシーポリシーのアカウント、ライセンス、購入の項目と「[PAYMENT PROCESSOR NAME]」のプレースホルダーが無料アプリとどう整合するか、そして「Nativ Pro」に何が含まれるか。',
          '未確認：mlx-vlmとmlx-audioを手がけるチームだという開発元の主張、アプリで動くモデルの数、利用者数。独立したレビューは見つかりませんでした。',
          '未確認：DMGが公証（notarize）されているか、特定のモデルがお使いのMacで最低どれだけのメモリを必要とするか。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Nativと代替ツールの比較',
        itemHeadings: true,
        content: [
          '**Nativは、ほかのローカルデスクトップアプリやMac向け推論ツールと競合します。PromptQuorumは、これらと実機で比較していません。** 下のツールはディレクトリに掲載されており、各ツール自身のレビューに基づいて説明しています。',
        ],
        columns: ['ツール', '情報源での記載'],
        rows: [
          { 'ツール': 'Nativ', '情報源での記載': 'MIT、Mac専用、無料、MLXサーバー同梱' },
          { 'ツール': '[LM Studio](/ja/power-local-llm/lm-studio-review)', '情報源での記載': 'プロプライエタリ・無料、Mac/Windows/Linux、モデルブラウザー' },
          { 'ツール': '[Jan](/ja/power-local-llm/jan-review)', '情報源での記載': 'Apache 2.0、Mac/Windows/Linux、無料、オフラインチャット' },
          { 'ツール': '[oMLX](/ja/power-local-llm/omlx-review)', '情報源での記載': 'Apache-2.0、Mac、MLX推論サーバーとCLI' },
          { 'ツール': '[Osaurus](/ja/power-local-llm/osaurus-ai-review)', '情報源での記載': 'MIT、Mac、無料、ネイティブSwiftアプリ' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Nativは無料ですか？',
            a: '開発元によると、無料です。コードはMIT Licenseで、FAQはアカウントもサブスクリプションもないとしています。利用規約には、Nativ Proのような有料プランを提供する場合は、価格、請求、解約の条件を購入前に示すとあります。',
          },
          {
            q: 'NativはどのMacで動きますか？',
            a: 'Apple Silicon（M1以降）でmacOS 26以降のMacで動きます。FAQによると、NativはIntel Macで動かないMLXフレームワークを使うため、Intel Mac、Windows、Linuxは非対応です。PromptQuorumは、どのMacでもテストしていません。',
          },
          {
            q: 'NativをClaude CodeやCodexと使えますか？',
            a: '開発元によると、使えます。Nativは読み込んだモデルをOpenAI・Anthropic互換のエンドポイントで提供し、Integrationsページが、Claude Code、Codex、Pi、Hermes、OpenCode、Aider、Goose、Crush、Qwen Code、OpenClawと、VS Code、Cursor、Zed、JetBrainsなどのエディタを設定します。PromptQuorumは設定をテストしていません。',
          },
          {
            q: 'Nativはどうやってインストールしますか？',
            a: 'WebサイトまたはGitHubのリリースページからDMGをダウンロードしてアプリケーションへドラッグするか、brew install --cask nativを実行します。その後、アプリはSparkleで自動更新されます。PromptQuorumはインストールを実行していません。',
          },
          {
            q: 'Nativはチャットをどこかへ送りますか？',
            a: '開発元によると、既定では送りません。チャット、プロンプト、ファイル、回答はMac内にとどまります。アプリはHugging Faceからのモデル取得と更新確認のために接続し、診断データは初回起動時に同意した場合にだけ送られます。プライバシーポリシーには角括弧付きのプレースホルダーもあるため、頼る前にお読みください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**Nativは、Apple SiliconのMacを持っていて、チャット、画像、音声入力、コーディングエージェント向けローカルAPIをまとめた無料のオープンソースのローカルAIアプリを探しているなら、試す価値があります。**',
          '仕様上は多くをカバーします。同梱のMLXサーバー、適合警告付きのHugging Faceモデルライブラリ、OpenAI・Anthropic互換エンドポイント、10種のコーディングエージェントと6種のエディタの設定支援、オーディオ拡張、MCP対応があり、2026年11月16日にv0.4.6、11月17日にコミットがありました。',
          'トレードオフも現実的です。動作はApple SiliconとmacOS 26以降に限られ、バージョン番号が0.4の新しいプロジェクトで、PromptQuorumが2026年11月18日に確認した時点では、プライバシーポリシーに角括弧付きのプレースホルダーとアカウント・購入の項目がありました。PromptQuorumはアプリをテストしていません。小さなモデルから始め、最新のプライバシーポリシーを読み、音声入力、画像生成、APIが用途に合うかを確認してから頼ってください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Nativ Webサイト](https://runnativ.ai) — 機能、動作要件、ダウンロード。2026年11月18日に確認。',
          '[FAQ](https://runnativ.ai/faq) — 動作要件、プライバシー、連携。2026年11月5日更新、2026年11月18日に確認。',
          '[プライバシーポリシー](https://runnativ.ai/privacy) — データの扱い。2026年11月16日更新、2026年11月18日に確認。',
          '[利用規約](https://runnativ.ai/terms) — 事業者、ライセンス、有料プランの記述。2026年11月18日に確認。',
          '[GitHubリポジトリ](https://github.com/Neywa-Labs/nativ) — ライセンス、作成日、最後のコミット。2026年11月18日に確認。',
          '[README](https://github.com/Neywa-Labs/nativ#readme) — 機能、インストール、動作要件、ローカルAPI。2026年11月18日に確認。',
          '[リリースv0.4.6](https://github.com/Neywa-Labs/nativ/releases/tag/v0.4.6) — 最新リリース、その日付、DMG。2026年11月18日に確認。',
          '[Homebrew cask](https://formulae.brew.sh/cask/nativ) — caskのバージョン。2026年11月18日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[LM Studioレビュー](/ja/power-local-llm/lm-studio-review) — モデルブラウザーとサーバーモードを内蔵したデスクトップアプリ。',
          '[Janレビュー](/ja/power-local-llm/jan-review) — オフラインを重視するオープンソースのデスクトップチャットアプリ。',
          '[oMLXレビュー](/ja/power-local-llm/omlx-review) — SSDキャッシュを備えた、Apple Silicon向けのMLXベース推論サーバー。',
          '[Osaurusレビュー](/ja/power-local-llm/osaurus-ai-review) — Apple Silicon搭載Mac向けの、無料でMIT LicenseのネイティブSwiftアプリ。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/nativ-review-hero-zh.webp',
    title: 'Nativ 点评：免费开源的 Mac 本地 AI 应用',
    seoTitle: 'Nativ 点评：免费的 Mac 本地 AI 应用',
    intro:
      'Nativ 是 Neywa Labs 推出的免费 Mac 应用，采用 MIT 许可证，通过内置的 MLX 服务器在 Apple Silicon 上运行开放 AI 模型。它提供支持图片输入的对话、图像生成、听写和会议笔记，并带有兼容 OpenAI 与 Anthropic 的本地 API，编程智能体可以直接使用。本点评基于开发者的官网、隐私政策与使用条款、GitHub 仓库及发布页面，核对日期为 2026 年 11 月 18 日。PromptQuorum 没有实际测试过该应用。',
    metaDescription:
      'Nativ 是免费的 MIT 许可 Mac 应用，用 MLX 在 Apple Silicon 上运行开放 AI 模型：对话、图像、听写，以及供编程智能体使用的本地 API。',
    twitterDescription:
      'Nativ 用 MLX 在你的 Mac 上运行开放模型：对话、图像生成、听写和供编程智能体使用的本地 API。免费、MIT、仅限 Apple Silicon。已确认的与未确认的内容。',
    audience:
      '想要免费开源本地 AI 应用的 Apple Silicon Mac 用户、希望让编程智能体连接本地模型的开发者，以及想评估一个新兴开源项目的读者',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Nativ 点评',
    targetKeywords: [
      'Nativ 点评',
      'Mac 本地 AI 应用',
      'MLX 应用 Apple Silicon',
      'Nativ Neywa Labs',
      'LM Studio 替代 Mac',
      '安装 Nativ',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Nativ 是一款免费开源（MIT）的 Mac 应用，通过内置的 MLX 服务器在 Apple Silicon 上运行开放 AI 模型，并提供对话、图像生成、听写以及供编程工具使用的本地 API。** 它需要搭载 M1 或更新芯片的 Mac 和 macOS 26 或更高版本，可用 DMG 或 Homebrew 安装，据开发者称，下载模型后可离线使用。这是一家波兰公司的新项目。开发者称该应用免费且无需账号，但使用条款提到将来可能推出 Nativ Pro 之类的付费方案。PromptQuorum 没有测试过它。',
    quickAnswerTop: {
      zh: {
        question: 'Nativ 是什么，适合谁用？',
        answer:
          'Nativ 是一款原生 macOS 应用，内置 mlx-vlm 服务器、模型库、对话、图像标签页、听写和本地 API。适合想不注册账号就使用本地 AI 的 Apple Silicon 用户，也适合想把 Claude Code、Codex 或编辑器连到自己 Mac 上模型的开发者。',
        bullets: [
          '免费，MIT 许可证；仅限 Mac，需要 Apple Silicon（M1 或更新）和 macOS 26 或更高版本。',
          '支持图片输入的对话、图像生成与编辑、语音模型、会议笔记和听写；据开发者称全部在 Mac 本地完成。',
          '本地服务器提供兼容 OpenAI 和 Anthropic 的端点；为文中列出的编程智能体和编辑器提供配置辅助。',
          '模型来自 Hugging Face；当模型可能装不进内存时，应用会给出提示。',
          '仓库创建于 2026 年 7 月；尽管应用免费，隐私政策里仍有方括号占位符，并涉及账号和购买。',
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
            text: 'Nativ 是一款免费开源的 Mac 应用，在 Apple Silicon 上运行开放 AI 模型，并提供对话、图像、听写以及供编程工具使用的本地 API。',
          },
          {
            type: 'plain-terms',
            text: '可以把它想成一个运行在你自己 Mac 上、而不是公司服务器上的类 ChatGPT 应用。你选一个模型，它只下载一次；据开发者称，之后的对话、听写和图像生成都不需要联网。',
          },
        ],
        items: [
          '开源（MIT）且免费；开发者表示没有账号和订阅，使用条款还说明，如果将来推出 Nativ Pro 之类的付费方案，会在购买前展示条款。',
          '仅支持搭载 Apple Silicon（M1 或更新）并运行 macOS 26 或更高版本的 Mac；MLX 无法在 Intel Mac 上运行。',
          '功能：支持图片输入的对话、图像生成与编辑、语音模型、任意应用中的听写、会议笔记、定时提示词，以及逐工具征得同意的 MCP 服务器。',
          '8080 端口的本地服务器提供兼容 OpenAI 和 Anthropic 的端点，应用还能为 Claude Code、Codex、OpenCode、Aider、Goose 等编程智能体配置使用它。',
          'PromptQuorum 没有测试过该应用。隐私政策里有方括号中的支付处理方占位符，以及关于账号、许可证密钥和购买的章节，而开发者称该应用免费且无需账号。',
        ],
        callouts: [
          {
            type: 'note',
            text: '隐私政策称，Neywa Labs 不收集你的对话、提示词、文件或输出，诊断数据仅在你于首次启动时同意后才会收集。不过，应用仍会联网从 Hugging Face 下载模型并检查更新。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**Nativ 是一款 SwiftUI 编写的 Mac 应用，封装了内置的 mlx-vlm 服务器和 MLX 运行时，因此开放模型可以直接在 Apple Silicon 上运行，无需另行搭建服务器。**',
          '该项目采用 MIT 许可证，由 [Neywa Labs](https://neywalabs.ai) 在 [github.com/Neywa-Labs/nativ](https://github.com/Neywa-Labs/nativ) 公开开发。使用条款将运营方写作位于波兰克拉科夫的 Neywa Labs sp. z o.o.。开发者自称是开源库 mlx-vlm 和 mlx-audio 背后的团队。仓库创建于 2026 年 7 月。最新版本 v0.4.6 发布于 2026 年 11 月 16 日，最近一次提交在 2026 年 11 月 17 日，开发处于活跃状态，因此不适用项目停更警告。',
          '根据 README，该应用集成了对话窗口、模型库、图像标签页、用于听写和会议笔记的音频扩展、带本地 API 的开发者页面、统计分析、系统监视器和菜单栏控制，还可以在对话旁的工作面板中打开文档、代码和网页。',
          '这些描述均为开发者的说法。PromptQuorum 没有运行过该应用，也没有核实速度、回答质量、图像质量和听写准确度。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '如何获取',
        content: [
          '**Nativ 的安装方式和普通 Mac 应用一样：下载 DMG 并拖入“应用程序”，或使用 Homebrew。**',
          'GitHub 发布版 v0.4.6 只提供一个文件 Nativ-0.4.6.dmg。README 还给出了 Homebrew 命令，Homebrew cask 列表显示版本为 0.4.6。根据 README，安装后应用会通过 Sparkle 自行更新。',
        ],
        columns: ['途径', '获取方式'],
        rows: [
          { '途径': '[DMG](https://github.com/Neywa-Labs/nativ/releases/latest)', '获取方式': '下载后将 Nativ 拖入“应用程序”' },
          { '途径': '[官网](https://runnativ.ai)', '获取方式': '“Download for macOS”按钮' },
          { '途径': 'Homebrew', '获取方式': 'brew install --cask nativ' },
          { '途径': '[源代码](https://github.com/Neywa-Labs/nativ)', '获取方式': 'make xcode-generate、make xcode-run（需 Xcode）' },
        ],
        note: '首次启动时，README 列出了一些可选步骤：选择或下载模型、为服务器设置 API 密钥，以及现在或之后授予麦克风、辅助功能和屏幕录制权限。PromptQuorum 没有运行安装程序，也没有扫描下载文件。',
      },
      requirements: {
        id: 'requirements',
        title: '系统要求',
        content: [
          '**Nativ 需要搭载 Apple Silicon（M1 或更新）的 Mac、macOS 26 或更高版本，以及足以运行所选模型的统一内存。**',
          '该清单来自 README 和常见问题，后者说明 MLX 无法在 Intel Mac 上运行。应用本身没有公布最低内存要求，根据 README，模型库会提示模型是否适合你的 Mac。PromptQuorum 没有测量内存占用或速度。',
        ],
        columns: ['项目', '官方给出的数据'],
        rows: [
          { '项目': '芯片', '官方给出的数据': 'Apple Silicon（M1 或更新）' },
          { '项目': '操作系统', '官方给出的数据': 'macOS 26 或更高版本' },
          { '项目': '内存', '官方给出的数据': '足以运行所选模型的统一内存' },
          { '项目': '联网', '官方给出的数据': '仅用于下载模型和更新' },
          { '项目': 'Hugging Face 令牌', '官方给出的数据': '可选，用于受限模型' },
          { '项目': '从源码构建', '官方给出的数据': 'Xcode、xcodegen、Python 3' },
        ],
        note: '根据 README，下载模型和首次构建所需的依赖仍然需要网络。可选权限（麦克风、辅助功能、屏幕录制）分别用于听写、会议录音和截图，常见问题说明其中任何一项都可以跳过。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**Nativ 的核心是带模型管理的本地对话应用，周围配有图像、音频、本地 API 和智能体集成。** 以下各项均为开发者在 README 和常见问题中的说法。',
        ],
        items: [
          '对话与视觉：流式对话、图片附件、推理过程展示、响应指标和持久聊天记录，多个独立窗口共用同一台服务器。',
          '图像：专用标签页，使用兼容的 MLX 图像模型生成和编辑图像。',
          '模型库：浏览并下载兼容的 Hugging Face 模型并获得内存适配提示，可把缓存迁到外置 APFS 硬盘，还能同时预加载语言、图像、语音和嵌入模型。',
          '本地 API：兼容 OpenAI 的对话、responses、图像、音频、嵌入和模型端点，以及 Anthropic Messages 端点，默认地址为 127.0.0.1:8080，管理路由可选设置 API 密钥。',
          '编程工具集成：可配置 Codex、Claude Code、Pi、Hermes、OpenCode、Aider、Goose、Crush、Qwen Code 和 OpenClaw，以及 VS Code、Cursor、Zed、JetBrains、Cline 和 Continue。',
          '音频扩展：任意应用中的听写、转写历史、带转写和摘要的会议笔记，以及导出为 PDF、DOCX 或 TXT；听写的原始音频会在五分钟后删除。',
          '逐工具征得同意的 MCP 服务器、带任务套件的定时提示词、支持语义搜索的成果库、系统监视器，以及 KV 缓存量化和推测解码等高级推理设置。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**据开发者称，你的对话、提示词、文件和输出都留在你的 Mac 上；应用会联网下载模型和检查更新，诊断数据需要你主动同意。**',
          '根据隐私政策（2026 年 11 月 16 日更新），Neywa Labs 不收集、访问或存储你的内容，不用它训练或评估模型，也不出售个人信息。崩溃报告、应用和 macOS 版本、芯片和内存大小、性能数据以及功能使用事件等诊断数据，只有在你于首次启动时同意后才可能收集，并且可在设置中撤回。政策称这些数据从不包含会话内容或你使用的具体模型。',
          '常见问题补充说，模型直接从 Hugging Face 下载，更新检查会到达 Neywa Labs 或其更新服务提供方，对方可能看到 IP 地址和应用版本等请求信息。网站使用 PostHog 分析并带有 Cookie 横幅。',
          '政策中还有方括号中的支付处理方占位符，以及关于注册、许可证密钥和购买的章节，而开发者称该应用免费且无需账号。使用条款还提到，将来可能推出 Nativ Pro 之类的付费方案。依赖它们之前请重新阅读这两份文件；代码采用 MIT 许可证并且公开，因此数据流向原则上可以被审查，但 PromptQuorum 没有这样做。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        content: [
          '**Nativ 适合想要免费开源、无需账号的本地 AI 应用的 Apple Silicon Mac 用户。**',
        ],
        items: [
          '希望在一个应用里完成对话、图像生成和听写，并让模型在自己机器上运行的 Mac 用户。',
          '希望让 Claude Code、Codex、Aider 或编辑器通过兼容 OpenAI 或 Anthropic 的端点使用本地模型的开发者。',
          '想在 Hugging Face 上浏览并下载 MLX 模型、并获得内存适配提示的人。',
          '更看重应用代码和许可证公开的读者。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        content: [
          '**Nativ 在某些情况下并不合适，也有几项内容尚未核实。**',
        ],
        items: [
          '不适合：Windows、Linux 或 Intel Mac 用户。该应用只能在 Apple Silicon 与 macOS 26 或更高版本上运行。',
          '不适合：需要长期口碑的人。仓库创建于 2026 年 7 月，版本号仍是 0.4.x。',
          '未核实：速度、内存占用、回答质量、图像质量和听写准确度。PromptQuorum 没有运行过该应用。',
          '未核实：除模型下载和更新检查之外，是否确实没有任何数据离开 Mac。这是开发者的说法，PromptQuorum 没有审计代码，也没有检查网络流量。',
          '未核实：隐私政策中的账号、许可证和购买章节以及“[PAYMENT PROCESSOR NAME]”占位符如何与免费应用相符，以及“Nativ Pro”会包含什么。',
          '未核实：开发者称自己是 mlx-vlm 和 mlx-audio 背后团队的说法、应用中可运行的模型数量和用户数量。未找到独立点评。',
          '未核实：DMG 是否经过公证，以及某个模型在你的 Mac 上至少需要多少内存。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Nativ 与替代方案对比',
        itemHeadings: true,
        content: [
          '**Nativ 与其他本地桌面应用和 Mac 推理工具存在竞争；PromptQuorum 没有实际对比过它们。** 下列工具均收录于目录，并根据各自的点评进行描述。',
        ],
        columns: ['工具', '来源中的记载'],
        rows: [
          { '工具': 'Nativ', '来源中的记载': 'MIT；仅限 Mac；免费；内置 MLX 服务器' },
          { '工具': '[LM Studio](/zh/power-local-llm/lm-studio-review)', '来源中的记载': '专有软件，免费；Mac/Windows/Linux；模型浏览器' },
          { '工具': '[Jan](/zh/power-local-llm/jan-review)', '来源中的记载': 'Apache 2.0；Mac/Windows/Linux；免费；离线对话' },
          { '工具': '[oMLX](/zh/power-local-llm/omlx-review)', '来源中的记载': 'Apache-2.0；Mac；MLX 推理服务器和命令行' },
          { '工具': '[Osaurus](/zh/power-local-llm/osaurus-ai-review)', '来源中的记载': 'MIT；Mac；免费；原生 Swift 应用' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Nativ 免费吗？',
            a: '据开发者称是免费的。代码采用 MIT 许可证，常见问题说明没有账号和订阅。使用条款说明，如果提供 Nativ Pro 之类的付费方案，会在购买前展示价格、计费和取消条款。',
          },
          {
            q: 'Nativ 能在哪些 Mac 上运行？',
            a: '搭载 Apple Silicon（M1 或更新）并运行 macOS 26 或更高版本的 Mac。常见问题解释说，Nativ 使用 MLX 框架，而 MLX 无法在 Intel Mac 上运行，因此不支持 Intel Mac、Windows 和 Linux。PromptQuorum 没有在任何 Mac 上测试过它。',
          },
          {
            q: '可以把 Nativ 和 Claude Code 或 Codex 一起用吗？',
            a: '据开发者称可以。Nativ 通过兼容 OpenAI 和 Anthropic 的端点提供已加载的模型，其“集成”页面可以配置 Claude Code、Codex、Pi、Hermes、OpenCode、Aider、Goose、Crush、Qwen Code 和 OpenClaw，以及 VS Code、Cursor、Zed、JetBrains 等编辑器。PromptQuorum 没有测试过这些配置。',
          },
          {
            q: '如何安装 Nativ？',
            a: '从官网或 GitHub 发布页下载 DMG，把 Nativ 拖入“应用程序”，或运行 brew install --cask nativ。之后应用会通过 Sparkle 自行更新。PromptQuorum 没有运行安装过程。',
          },
          {
            q: 'Nativ 会把我的对话发送到别处吗？',
            a: '据开发者称，默认不会：对话、提示词、文件和回答都留在你的 Mac 上。应用会联网从 Hugging Face 下载模型并检查更新，只有在你于首次启动时同意后才会发送诊断数据。隐私政策里还有方括号占位符，依赖它之前请先阅读。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果你有一台 Apple Silicon Mac，想要一个集对话、图像、听写和编程智能体本地 API 于一体的免费开源本地 AI 应用，Nativ 值得一看。**',
          '从纸面上看，它覆盖面很广：内置 MLX 服务器、带适配提示的 Hugging Face 模型库、兼容 OpenAI 和 Anthropic 的端点、对十个编程智能体和六个编辑器的配置支持、音频扩展和 MCP 支持，v0.4.6 发布于 2026 年 11 月 16 日，最近一次提交在 2026 年 11 月 17 日。',
          '取舍同样真实。它只能在 Apple Silicon 与 macOS 26 或更高版本上运行，是版本号 0.4 的新项目，PromptQuorum 于 2026 年 11 月 18 日核查时，隐私政策里有方括号占位符以及关于账号和购买的章节。PromptQuorum 没有测试过该应用：请先用小模型试用，阅读当前的隐私政策，并确认听写、图像生成和 API 适合你的用途后再依赖它。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Nativ 官网](https://runnativ.ai) — 功能、系统要求和下载，2026 年 11 月 18 日核对。',
          '[常见问题](https://runnativ.ai/faq) — 系统要求、隐私和集成，2026 年 11 月 5 日更新，2026 年 11 月 18 日核对。',
          '[隐私政策](https://runnativ.ai/privacy) — 数据处理，2026 年 11 月 16 日更新，2026 年 11 月 18 日核对。',
          '[使用条款](https://runnativ.ai/terms) — 运营方、许可证和付费方案表述，2026 年 11 月 18 日核对。',
          '[GitHub 仓库](https://github.com/Neywa-Labs/nativ) — 许可证、创建日期和最近一次提交，2026 年 11 月 18 日核对。',
          '[README](https://github.com/Neywa-Labs/nativ#readme) — 功能、安装、系统要求和本地 API，2026 年 11 月 18 日核对。',
          '[发布版 v0.4.6](https://github.com/Neywa-Labs/nativ/releases/tag/v0.4.6) — 最新版本、发布日期和 DMG，2026 年 11 月 18 日核对。',
          '[Homebrew cask](https://formulae.brew.sh/cask/nativ) — cask 版本，2026 年 11 月 18 日核对。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[LM Studio 点评](/zh/power-local-llm/lm-studio-review) — 内置模型浏览器和服务器模式的桌面应用。',
          '[Jan 点评](/zh/power-local-llm/jan-review) — 注重离线使用的开源桌面对话应用。',
          '[oMLX 点评](/zh/power-local-llm/omlx-review) — 面向 Apple Silicon、带 SSD 缓存的 MLX 推理服务器。',
          '[Osaurus 点评](/zh/power-local-llm/osaurus-ai-review) — 面向 Apple Silicon Mac 的免费 MIT 许可原生 Swift 应用。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/nativ-review-hero-ko.webp',
    title: 'Nativ 리뷰: MLX로 구동하는 무료 오픈소스 Mac용 로컬 AI 앱',
    seoTitle: 'Nativ 리뷰: MLX 기반 Mac용 무료 로컬 AI 앱',
    intro:
      'Nativ는 Neywa Labs가 만든 MIT 라이선스의 무료 Mac 앱으로, 내장된 MLX 서버를 통해 Apple Silicon에서 오픈 AI 모델을 실행합니다. 이미지 입력을 지원하는 채팅, 이미지 생성, 받아쓰기와 회의 노트에 더해 코딩 에이전트가 쓸 수 있는 OpenAI·Anthropic 호환 로컬 API를 제공합니다. 이 리뷰는 개발사의 웹사이트, 개인정보 처리방침과 이용 약관, GitHub 저장소, 릴리스 페이지를 바탕으로 하며 2026년 11월 18일에 확인했습니다. PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription:
      'Nativ는 MLX로 Apple Silicon에서 오픈 AI 모델을 실행하는 무료 MIT Mac 앱입니다. 채팅, 이미지, 받아쓰기, 코딩 에이전트용 로컬 API를 제공합니다.',
    twitterDescription:
      'Nativ는 MLX로 오픈 모델을 Mac에서 실행합니다. 채팅, 이미지 생성, 받아쓰기, 코딩 에이전트용 로컬 API. 무료, MIT, Apple Silicon 전용. 확인된 내용을 정리했습니다.',
    audience:
      '무료 오픈소스 로컬 AI 앱을 찾는 Apple Silicon Mac 사용자, 코딩 에이전트를 로컬 모델에 연결하려는 개발자, 신생 오픈소스 프로젝트를 가늠해 보려는 독자',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Nativ 리뷰',
    targetKeywords: [
      'Nativ 리뷰',
      'Mac 로컬 AI 앱',
      'MLX 앱 Apple Silicon',
      'Nativ Neywa Labs',
      'LM Studio 대안 Mac',
      'Nativ 설치',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Nativ는 내장된 MLX 서버로 Apple Silicon에서 오픈 AI 모델을 실행하고, 채팅, 이미지 생성, 받아쓰기, 코딩 도구용 로컬 API를 더한 무료 오픈소스(MIT) Mac 앱입니다.** M1 이상 칩이 탑재된 Mac과 macOS 26 이상이 필요하며, DMG 또는 Homebrew로 설치하고 개발사에 따르면 모델을 내려받은 뒤에는 오프라인에서도 동작합니다. 폴란드 기업이 만든 신생 프로젝트입니다. 개발사는 이 앱이 무료이고 계정이 필요 없다고 설명하지만, 이용 약관은 Nativ Pro 같은 유료 요금제가 나중에 나올 수 있다고 언급합니다. PromptQuorum은 테스트하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Nativ는 무엇이며 누구에게 적합합니까?',
        answer:
          'Nativ는 mlx-vlm 서버, 모델 라이브러리, 채팅, 이미지 탭, 받아쓰기, 로컬 API를 묶은 네이티브 macOS 앱입니다. 계정 없이 로컬 AI를 쓰고 싶은 Apple Silicon 사용자와, Claude Code, Codex, 편집기를 자신의 Mac에 있는 모델에 연결하려는 개발자에게 적합합니다.',
        bullets: [
          '무료이며 MIT 라이선스입니다. Mac 전용이며 Apple Silicon(M1 이상)과 macOS 26 이상이 필요합니다.',
          '이미지 입력 채팅, 이미지 생성과 편집, 음성 모델, 회의 노트, 받아쓰기를 제공하며, 개발사에 따르면 모두 Mac에서 처리됩니다.',
          'OpenAI·Anthropic 호환 엔드포인트를 갖춘 로컬 서버가 있으며, 언급된 코딩 에이전트와 편집기를 위한 설정 도우미가 있습니다.',
          '모델은 Hugging Face에서 가져오며, 메모리에 맞지 않을 수 있는 모델에는 앱이 경고를 표시합니다.',
          '저장소는 2026년 7월에 만들어졌습니다. 앱이 무료인데도 개인정보 처리방침에는 대괄호로 된 자리 표시자가 남아 있고 계정과 구매 항목이 포함되어 있습니다.',
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
            text: 'Nativ는 Apple Silicon에서 오픈 AI 모델을 실행하고 채팅, 이미지, 받아쓰기, 코딩 도구용 로컬 API를 더한 무료 오픈소스 Mac 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '기업의 서버가 아니라 내 Mac에서 돌아가는 ChatGPT 같은 앱이라고 생각하면 됩니다. 모델을 고르면 한 번만 내려받으며, 개발사에 따르면 그 이후의 채팅, 받아쓰기, 이미지 생성은 인터넷 없이도 동작합니다.',
          },
        ],
        items: [
          'MIT 라이선스의 오픈소스이며 무료입니다. 개발사는 계정과 구독이 없다고 밝혔고, 이용 약관은 Nativ Pro 같은 유료 요금제를 제공하게 되면 구매 전에 조건을 보여 주겠다고 설명합니다.',
          'Apple Silicon(M1 이상)과 macOS 26 이상이 설치된 Mac에서만 동작합니다. MLX는 Intel Mac에서 실행되지 않습니다.',
          '기능: 이미지 입력 채팅, 이미지 생성과 편집, 음성 모델, 모든 앱에서의 받아쓰기, 회의 노트, 예약 프롬프트, 도구별 동의가 필요한 MCP 서버.',
          '8080 포트의 로컬 서버가 OpenAI·Anthropic 호환 엔드포인트를 제공하며, 앱이 Claude Code, Codex, OpenCode, Aider, Goose 같은 코딩 에이전트가 이를 쓰도록 설정해 줍니다.',
          'PromptQuorum은 앱을 테스트하지 않았습니다. 개인정보 처리방침에는 대괄호로 된 결제 대행사 자리 표시자와 계정, 라이선스 키, 구매 항목이 있으며, 개발사는 이 앱이 무료이고 계정이 필요 없다고 설명합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '개인정보 처리방침에 따르면 Neywa Labs는 채팅, 프롬프트, 파일, 출력을 수집하지 않으며, 진단 데이터는 첫 실행 때 받는 동의가 있을 때만 수집됩니다. 그래도 앱은 Hugging Face에서 모델을 내려받고 업데이트를 확인하기 위해 인터넷에 접속합니다.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**Nativ는 내장된 mlx-vlm 서버와 MLX 런타임을 감싼 SwiftUI Mac 앱이어서, 별도의 서버를 설정하지 않고도 Apple Silicon에서 오픈 모델을 실행할 수 있습니다.**',
          '이 프로젝트는 MIT 라이선스이며 [Neywa Labs](https://neywalabs.ai)가 [github.com/Neywa-Labs/nativ](https://github.com/Neywa-Labs/nativ)에서 공개적으로 개발합니다. 이용 약관은 운영 주체를 폴란드 크라쿠프의 Neywa Labs sp. z o.o.로 기재합니다. 개발사는 스스로를 오픈소스 라이브러리 mlx-vlm과 mlx-audio를 만든 팀이라고 소개합니다. 저장소는 2026년 7월에 만들어졌습니다. 최신 릴리스 v0.4.6은 2026년 11월 16일에, 마지막 커밋은 2026년 11월 17일에 올라왔으므로 개발이 활발하며 방치 프로젝트 경고는 적용되지 않습니다.',
          'README에 따르면 앱은 채팅 창, 모델 라이브러리, 이미지 탭, 받아쓰기와 회의 노트를 위한 오디오 확장, 로컬 API가 있는 개발자 페이지, 분석, 시스템 모니터, 메뉴 막대 제어를 결합합니다. 채팅 옆 작업 창에서 문서, 코드, 웹 페이지도 열 수 있습니다.',
          '이러한 설명은 개발사의 주장입니다. PromptQuorum은 앱을 실행하지 않았으며 속도, 답변 품질, 이미지 품질, 받아쓰기 정확도를 확인하지 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '설치 방법',
        content: [
          '**Nativ는 일반 Mac 앱처럼 DMG를 내려받아 응용 프로그램 폴더로 끌어다 놓거나 Homebrew로 설치합니다.**',
          'GitHub 릴리스 v0.4.6에는 Nativ-0.4.6.dmg 파일 하나만 들어 있습니다. README에는 Homebrew 명령도 있고, Homebrew cask 목록에는 버전 0.4.6이 표시됩니다. README에 따르면 설치 후에는 앱이 Sparkle로 스스로 업데이트합니다.',
        ],
        columns: ['방법', '설치 방법'],
        rows: [
          { '방법': '[DMG](https://github.com/Neywa-Labs/nativ/releases/latest)', '설치 방법': '내려받아 Nativ를 응용 프로그램으로 끌어다 놓기' },
          { '방법': '[웹사이트](https://runnativ.ai)', '설치 방법': '“Download for macOS” 버튼' },
          { '방법': 'Homebrew', '설치 방법': 'brew install --cask nativ' },
          { '방법': '[소스 코드](https://github.com/Neywa-Labs/nativ)', '설치 방법': 'make xcode-generate, make xcode-run (Xcode 필요)' },
        ],
        note: '첫 실행 때 README는 선택 단계를 나열합니다. 모델을 고르거나 내려받기, 서버용 API 키 설정, 마이크, 손쉬운 사용, 화면 기록 권한을 지금 또는 나중에 허용하기입니다. PromptQuorum은 설치 프로그램을 실행하지 않았고 내려받은 파일을 검사하지 않았습니다.',
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항',
        content: [
          '**Nativ에는 Apple Silicon(M1 이상) Mac, macOS 26 이상, 선택한 모델에 충분한 통합 메모리가 필요합니다.**',
          '이 목록은 README와 FAQ에서 가져온 것으로, FAQ는 MLX가 Intel Mac에서 실행되지 않는다고 설명합니다. 앱 자체의 최소 메모리는 공개되어 있지 않으며, README에 따르면 모델 라이브러리가 사용 중인 Mac에 맞는지 경고를 표시합니다. PromptQuorum은 메모리 사용량과 속도를 측정하지 않았습니다.',
        ],
        columns: ['항목', '명시된 내용'],
        rows: [
          { '항목': '칩', '명시된 내용': 'Apple Silicon(M1 이상)' },
          { '항목': '운영체제', '명시된 내용': 'macOS 26 이상' },
          { '항목': '메모리', '명시된 내용': '모델에 충분한 통합 메모리' },
          { '항목': '인터넷', '명시된 내용': '모델 다운로드와 업데이트에만 필요' },
          { '항목': 'Hugging Face 토큰', '명시된 내용': '선택, 제한된 모델용' },
          { '항목': '소스에서 빌드', '명시된 내용': 'Xcode, xcodegen, Python 3' },
        ],
        note: 'README에 따르면 모델 다운로드와 첫 빌드 때의 의존성 설치에는 여전히 네트워크 접속이 필요합니다. 선택 권한(마이크, 손쉬운 사용, 화면 기록)은 받아쓰기, 회의 녹음, 스크린샷 첨부를 켜며, FAQ는 어느 것이든 건너뛸 수 있다고 설명합니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**Nativ의 핵심은 모델 관리를 갖춘 로컬 채팅 앱이며, 그 주변에 이미지, 오디오, 로컬 API, 에이전트 연동이 있습니다.** 아래 항목은 모두 README와 FAQ에 있는 개발사의 주장입니다.',
        ],
        items: [
          '채팅과 비전: 스트리밍 대화, 이미지 첨부, 추론 과정 표시, 응답 지표, 대화 기록 보관을 지원하며, 여러 독립 창이 하나의 서버를 공유합니다.',
          '이미지: 전용 탭에서 호환되는 MLX 이미지 모델로 이미지를 생성하고 편집합니다.',
          '모델 라이브러리: 호환되는 Hugging Face 모델을 메모리 적합 경고와 함께 찾아 내려받고, 캐시를 외장 APFS 드라이브로 옮기며, 언어, 이미지, 음성, 임베딩 모델을 함께 미리 불러올 수 있습니다.',
          '로컬 API: 채팅, responses, 이미지, 오디오, 임베딩, 모델용 OpenAI 호환 엔드포인트와 Anthropic Messages 엔드포인트를 기본 127.0.0.1:8080에서 제공하며, 관리 경로용 API 키는 선택 사항입니다.',
          '코딩 도구 연동: Codex, Claude Code, Pi, Hermes, OpenCode, Aider, Goose, Crush, Qwen Code, OpenClaw와 VS Code, Cursor, Zed, JetBrains, Cline, Continue를 설정해 줍니다.',
          '오디오 확장: 모든 앱에서의 받아쓰기, 전사 기록, 전사본과 요약이 있는 회의 노트, PDF·DOCX·TXT 내보내기를 제공하며, 받아쓰기의 원본 오디오는 5분 뒤 삭제됩니다.',
          '도구별 동의가 필요한 MCP 서버, 작업 키트가 있는 예약 프롬프트, 의미 검색이 되는 결과물 라이브러리, 시스템 모니터, KV 캐시 양자화와 추측 디코딩 같은 고급 추론 설정.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 데이터 흐름',
        content: [
          '**개발사에 따르면 채팅, 프롬프트, 파일, 출력은 Mac에 남습니다. 앱은 모델을 내려받고 업데이트를 확인하기 위해 접속하며, 진단 데이터는 동의한 경우에만 수집됩니다.**',
          '개인정보 처리방침(2026년 11월 16일 업데이트)에 따르면 Neywa Labs는 사용자의 콘텐츠를 수집, 열람, 저장하지 않고, 모델 학습이나 평가에 쓰지 않으며, 개인정보를 판매하지 않습니다. 충돌 보고서, 앱과 macOS 버전, 칩과 메모리 크기, 성능 수치, 기능 사용 이벤트 같은 진단 데이터는 첫 실행 때 앱이 요청하는 동의가 있을 때만 수집될 수 있으며, 설정에서 철회할 수 있습니다. 방침은 이 데이터에 세션 내용이나 사용한 특정 모델이 포함되지 않는다고 설명합니다.',
          'FAQ는 모델이 Hugging Face에서 직접 내려받아지며, 업데이트 확인은 Neywa Labs 또는 업데이트 제공 업체에 도달해 IP 주소와 앱 버전 같은 요청 정보가 보일 수 있다고 덧붙입니다. 웹사이트는 쿠키 배너와 함께 PostHog 분석을 사용합니다.',
          '방침에는 대괄호로 된 결제 대행사 자리 표시자와 가입, 라이선스 키, 구매에 관한 항목도 있으며, 개발사는 이 앱이 무료이고 계정이 필요 없다고 설명합니다. 이용 약관은 Nativ Pro 같은 유료 요금제가 나중에 나올 수 있다고도 덧붙입니다. 의존하기 전에 두 문서를 다시 읽어 보십시오. 코드는 MIT 라이선스로 공개되어 있어 데이터 흐름을 원칙적으로 점검할 수 있지만, PromptQuorum은 점검하지 않았습니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        content: [
          '**Nativ는 계정 없이 쓰는 무료 오픈소스 로컬 AI 앱을 원하는 Apple Silicon Mac 사용자에게 적합합니다.**',
        ],
        items: [
          '채팅, 이미지 생성, 받아쓰기를 자신의 기기에서 모델을 실행하는 하나의 앱으로 쓰고 싶은 Mac 사용자.',
          'Claude Code, Codex, Aider, 편집기가 OpenAI·Anthropic 호환 엔드포인트로 로컬 모델을 쓰게 하려는 개발자.',
          'Hugging Face의 MLX 모델을 메모리 적합 경고와 함께 찾아 내려받고 싶은 분.',
          '앱 코드와 라이선스가 공개된 프로젝트를 선호하는 독자.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        content: [
          '**Nativ가 맞지 않는 상황이 있으며, 확인하지 못한 세부 사항도 여럿 있습니다.**',
        ],
        items: [
          '적합하지 않음: Windows, Linux, Intel Mac 사용자. 앱은 Apple Silicon과 macOS 26 이상에서만 동작합니다.',
          '적합하지 않음: 긴 검증 이력이 필요한 분. 저장소는 2026년 7월에 만들어졌고 버전은 아직 0.4.x입니다.',
          '확인하지 못함: 속도, 메모리 사용량, 답변 품질, 이미지 품질, 받아쓰기 정확도. PromptQuorum은 앱을 실행하지 않았습니다.',
          '확인하지 못함: 모델 다운로드와 업데이트 확인 외에는 Mac 밖으로 아무것도 나가지 않는다는 점. 이는 개발사의 주장이며, PromptQuorum은 코드를 감사하거나 네트워크 트래픽을 검사하지 않았습니다.',
          '확인하지 못함: 개인정보 처리방침의 계정, 라이선스, 구매 항목과 “[PAYMENT PROCESSOR NAME]” 자리 표시자가 무료 앱과 어떻게 맞물리는지, 그리고 “Nativ Pro”에 무엇이 포함될지.',
          '확인하지 못함: mlx-vlm과 mlx-audio를 만든 팀이라는 개발사의 주장, 앱에서 실행되는 모델의 수, 사용자 수. 독립적인 리뷰는 찾지 못했습니다.',
          '확인하지 못함: DMG가 공증(notarization)되었는지, 특정 모델이 사용 중인 Mac에서 최소 얼마의 메모리를 필요로 하는지.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Nativ와 대안 비교',
        itemHeadings: true,
        content: [
          '**Nativ는 다른 로컬 데스크톱 앱 및 Mac용 추론 도구와 경쟁하며, PromptQuorum은 이들을 직접 비교해 보지 않았습니다.** 아래 도구는 디렉터리에 있으며 각자의 리뷰를 바탕으로 설명합니다.',
        ],
        columns: ['도구', '출처에 기재된 내용'],
        rows: [
          { '도구': 'Nativ', '출처에 기재된 내용': 'MIT, Mac 전용, 무료, MLX 서버 내장' },
          { '도구': '[LM Studio](/ko/power-local-llm/lm-studio-review)', '출처에 기재된 내용': '독점, 무료, Mac/Windows/Linux, 모델 브라우저' },
          { '도구': '[Jan](/ko/power-local-llm/jan-review)', '출처에 기재된 내용': 'Apache 2.0, Mac/Windows/Linux, 무료, 오프라인 채팅' },
          { '도구': '[oMLX](/ko/power-local-llm/omlx-review)', '출처에 기재된 내용': 'Apache-2.0, Mac, MLX 추론 서버와 CLI' },
          { '도구': '[Osaurus](/ko/power-local-llm/osaurus-ai-review)', '출처에 기재된 내용': 'MIT, Mac, 무료, 네이티브 Swift 앱' },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Nativ는 무료입니까?',
            a: '개발사에 따르면 무료입니다. 코드는 MIT 라이선스이며 FAQ는 계정과 구독이 없다고 설명합니다. 이용 약관은 Nativ Pro 같은 유료 요금제를 제공하게 되면 가격, 청구, 해지 조건을 구매 전에 보여 주겠다고 설명합니다.',
          },
          {
            q: 'Nativ는 어떤 Mac에서 동작합니까?',
            a: 'Apple Silicon(M1 이상)과 macOS 26 이상이 설치된 Mac에서 동작합니다. FAQ는 Nativ가 Intel Mac에서 실행되지 않는 MLX 프레임워크를 쓰므로 Intel Mac, Windows, Linux는 지원되지 않는다고 설명합니다. PromptQuorum은 어떤 Mac에서도 테스트하지 않았습니다.',
          },
          {
            q: 'Nativ를 Claude Code나 Codex와 함께 쓸 수 있습니까?',
            a: '개발사에 따르면 가능합니다. Nativ는 불러온 모델을 OpenAI·Anthropic 호환 엔드포인트로 제공하며, Integrations 페이지가 Claude Code, Codex, Pi, Hermes, OpenCode, Aider, Goose, Crush, Qwen Code, OpenClaw와 VS Code, Cursor, Zed, JetBrains 같은 편집기를 설정해 줍니다. PromptQuorum은 이 설정을 테스트하지 않았습니다.',
          },
          {
            q: 'Nativ는 어떻게 설치합니까?',
            a: '웹사이트나 GitHub 릴리스 페이지에서 DMG를 내려받아 Nativ를 응용 프로그램으로 끌어다 놓거나 brew install --cask nativ를 실행합니다. 이후에는 앱이 Sparkle로 스스로 업데이트합니다. PromptQuorum은 설치를 실행하지 않았습니다.',
          },
          {
            q: 'Nativ가 내 채팅을 어딘가로 보냅니까?',
            a: '개발사에 따르면 기본적으로는 보내지 않습니다. 채팅, 프롬프트, 파일, 답변은 Mac에 남습니다. 앱은 Hugging Face에서 모델을 내려받고 업데이트를 확인하기 위해 접속하며, 진단 데이터는 첫 실행 때 동의한 경우에만 전송됩니다. 개인정보 처리방침에는 대괄호로 된 자리 표시자도 있으므로 의존하기 전에 읽어 보십시오.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**Apple Silicon Mac이 있고 채팅, 이미지, 받아쓰기, 코딩 에이전트용 로컬 API를 하나로 묶은 무료 오픈소스 로컬 AI 앱을 원한다면 Nativ는 살펴볼 만합니다.**',
          '사양상 범위가 넓습니다. 내장 MLX 서버, 적합 경고가 있는 Hugging Face 모델 라이브러리, OpenAI·Anthropic 호환 엔드포인트, 10개 코딩 에이전트와 6개 편집기 설정, 오디오 확장, MCP 지원을 갖췄고, 2026년 11월 16일에 v0.4.6이, 2026년 11월 17일에 커밋이 있었습니다.',
          '절충점도 분명합니다. Apple Silicon과 macOS 26 이상에서만 동작하고, 버전 번호가 0.4인 신생 프로젝트이며, PromptQuorum이 2026년 11월 18일에 확인했을 때 개인정보 처리방침에는 대괄호로 된 자리 표시자와 계정·구매 항목이 있었습니다. PromptQuorum은 앱을 테스트하지 않았으므로, 작은 모델로 시작하고 최신 개인정보 처리방침을 읽은 뒤 받아쓰기, 이미지 생성, API가 용도에 맞는지 확인한 다음 의존하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Nativ 웹사이트](https://runnativ.ai) — 기능, 요구 사항, 다운로드. 2026년 11월 18일 확인.',
          '[FAQ](https://runnativ.ai/faq) — 요구 사항, 개인정보, 연동. 2026년 11월 5일 업데이트, 2026년 11월 18일 확인.',
          '[개인정보 처리방침](https://runnativ.ai/privacy) — 데이터 처리. 2026년 11월 16일 업데이트, 2026년 11월 18일 확인.',
          '[이용 약관](https://runnativ.ai/terms) — 운영 주체, 라이선스, 유료 요금제 표현. 2026년 11월 18일 확인.',
          '[GitHub 저장소](https://github.com/Neywa-Labs/nativ) — 라이선스, 생성일, 마지막 커밋. 2026년 11월 18일 확인.',
          '[README](https://github.com/Neywa-Labs/nativ#readme) — 기능, 설치, 요구 사항, 로컬 API. 2026년 11월 18일 확인.',
          '[릴리스 v0.4.6](https://github.com/Neywa-Labs/nativ/releases/tag/v0.4.6) — 최신 릴리스, 날짜, DMG. 2026년 11월 18일 확인.',
          '[Homebrew cask](https://formulae.brew.sh/cask/nativ) — cask 버전. 2026년 11월 18일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[LM Studio 리뷰](/ko/power-local-llm/lm-studio-review) — 모델 브라우저와 서버 모드를 내장한 데스크톱 앱.',
          '[Jan 리뷰](/ko/power-local-llm/jan-review) — 오프라인 사용을 중시하는 오픈소스 데스크톱 채팅 앱.',
          '[oMLX 리뷰](/ko/power-local-llm/omlx-review) — SSD 캐시를 갖춘 Apple Silicon용 MLX 기반 추론 서버.',
          '[Osaurus 리뷰](/ko/power-local-llm/osaurus-ai-review) — Apple Silicon Mac용 무료 MIT 라이선스 네이티브 Swift 앱.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/nativ-review-hero-ar.webp',
    title: 'مراجعة Nativ: تطبيق مجاني ومفتوح المصدر للذكاء الاصطناعي المحلي على Mac مع MLX',
    seoTitle: 'مراجعة Nativ: تطبيق ذكاء اصطناعي محلي مجاني لـ Mac',
    intro:
      'Nativ تطبيق Mac مجاني بترخيص MIT من Neywa Labs، يشغّل نماذج الذكاء الاصطناعي المفتوحة على Apple Silicon عبر خادم MLX مرفق. يوفّر دردشة مع إدخال الصور وتوليد الصور والإملاء وملاحظات الاجتماعات، إضافة إلى واجهة برمجة محلية متوافقة مع OpenAI وAnthropic يمكن لوكلاء البرمجة استخدامها. تستند هذه المراجعة إلى موقع المطوّر وسياسة الخصوصية وشروط الاستخدام ومستودع GitHub وصفحة الإصدارات، وقد جرى التحقق منها في 18 نوفمبر 2026. لم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'Nativ تطبيق Mac مجاني بترخيص MIT يشغّل نماذج الذكاء الاصطناعي المفتوحة بـ MLX على Apple Silicon: دردشة وصور وإملاء وواجهة برمجة محلية لوكلاء البرمجة.',
    twitterDescription:
      'يشغّل Nativ النماذج المفتوحة على جهاز Mac بـ MLX: دردشة وتوليد صور وإملاء وواجهة برمجة محلية لوكلاء البرمجة. مجاني، MIT، لـ Apple Silicon فقط. ما تأكّد وما لم يتأكّد.',
    audience:
      'مستخدمو Mac المزوّدة بـ Apple Silicon الذين يريدون تطبيق ذكاء اصطناعي محليًا مجانيًا ومفتوح المصدر، والمطوّرون الذين يوصلون وكلاء البرمجة بنموذج محلي، ومن يقيّمون مشروعًا مفتوح المصدر حديثًا',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Nativ',
    targetKeywords: [
      'مراجعة Nativ',
      'تطبيق ذكاء اصطناعي محلي لـ Mac',
      'تطبيق MLX على Apple Silicon',
      'Nativ Neywa Labs',
      'بديل LM Studio على Mac',
      'تثبيت Nativ',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Nativ تطبيق Mac مجاني ومفتوح المصدر (MIT) يشغّل نماذج الذكاء الاصطناعي المفتوحة على Apple Silicon عبر خادم MLX مرفق، ويضيف الدردشة وتوليد الصور والإملاء وواجهة برمجة محلية لأدوات البرمجة.** يتطلب جهاز Mac بمعالج M1 أو أحدث ونظام macOS 26 أو أحدث، ويُثبَّت عبر DMG أو Homebrew، ويعمل دون اتصال بعد تنزيل نموذج بحسب المطوّر. هو مشروع حديث من شركة بولندية. ويصفه المطوّر بأنه مجاني وبلا حساب، لكن الشروط تذكر أن خططًا مدفوعة مثل Nativ Pro قد تأتي لاحقًا. ولم تختبره PromptQuorum.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو Nativ ولمن هو؟',
        answer:
          'Nativ تطبيق macOS أصلي يضم خادم mlx-vlm ومكتبة نماذج ودردشة وتبويب صور وإملاءً وواجهة برمجة محلية. يناسب أصحاب أجهزة Mac بمعالج Apple Silicon الذين يريدون ذكاءً اصطناعيًا محليًا بلا حساب، والمطوّرين الذين يريدون ربط Claude Code أو Codex أو محرّر بنموذج على جهاز Mac الخاص بهم.',
        bullets: [
          'مجاني وبترخيص MIT؛ لـ Mac فقط، مع Apple Silicon (M1 أو أحدث) وmacOS 26 أو أحدث.',
          'دردشة مع إدخال الصور، وتوليد الصور وتحريرها، ونماذج الكلام، وملاحظات الاجتماعات، والإملاء؛ وكل ذلك على جهاز Mac بحسب المطوّر.',
          'خادم محلي بنقاط نهاية متوافقة مع OpenAI وAnthropic؛ ومساعدات إعداد لوكلاء البرمجة والمحررات المذكورة.',
          'النماذج تأتي من Hugging Face؛ ويحذّر التطبيق عندما قد لا يتسع النموذج في ذاكرتك.',
          'أُنشئ المستودع في يوليو 2026؛ وما زالت سياسة الخصوصية تحتوي عنصرًا نائبًا بين أقواس مربعة وتتناول الحسابات والمشتريات مع أن التطبيق مجاني.',
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
            text: 'Nativ تطبيق Mac مجاني ومفتوح المصدر يشغّل نماذج الذكاء الاصطناعي المفتوحة على Apple Silicon ويضيف الدردشة والصور والإملاء وواجهة برمجة محلية لأدوات البرمجة.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّل تطبيقًا شبيهًا بـ ChatGPT يعمل على جهاز Mac الخاص بك بدلًا من خوادم شركة. تختار نموذجًا فيُنزَّل مرة واحدة، وبعد ذلك تعمل الدردشة والإملاء وتوليد الصور دون اتصال بالإنترنت، بحسب المطوّر.',
          },
        ],
        items: [
          'مفتوح المصدر بترخيص MIT ومجاني؛ يقول المطوّر إنه لا يوجد حساب ولا اشتراك، وتذكر الشروط أن أي خطط مدفوعة مثل Nativ Pro ستعرض شروطها قبل أي عملية شراء.',
          'يعمل فقط على أجهزة Mac بمعالج Apple Silicon (M1 أو أحدث) ونظام macOS 26 أو أحدث؛ ولا يعمل MLX على أجهزة Mac بمعالج Intel.',
          'الميزات: دردشة مع إدخال الصور، وتوليد الصور وتحريرها، ونماذج الكلام، وإملاء في أي تطبيق، وملاحظات اجتماعات، وطلبات مجدولة، وخوادم MCP مع موافقة لكل أداة.',
          'يوفّر خادم محلي على المنفذ 8080 نقاط نهاية متوافقة مع OpenAI وAnthropic، ويُعدّ التطبيق وكلاء برمجة مثل Claude Code وCodex وOpenCode وAider وGoose لاستخدامه.',
          'لم تختبر PromptQuorum التطبيق. تحتوي سياسة الخصوصية على عنصر نائب لمعالج الدفع بين أقواس مربعة وأقسام عن الحسابات ومفاتيح الترخيص والمشتريات، مع أن المطوّر يصف التطبيق بأنه مجاني وبلا حساب.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'بحسب سياسة الخصوصية، لا تجمع Neywa Labs محادثاتك ولا مطالباتك ولا ملفاتك ولا مخرجاتك، ولا تُجمع بيانات التشخيص إلا بموافقتك التي تُطلب عند أول تشغيل. ومع ذلك يتصل التطبيق بالإنترنت لتنزيل النماذج من Hugging Face والتحقق من التحديثات.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**Nativ تطبيق Mac مبني بـ SwiftUI يغلّف خادم mlx-vlm المرفق وبيئة تشغيل MLX، فتعمل النماذج المفتوحة على Apple Silicon دون إعداد خادم منفصل.**',
          'المشروع بترخيص MIT ويُطوَّر علنًا على [github.com/Neywa-Labs/nativ](https://github.com/Neywa-Labs/nativ) بواسطة [Neywa Labs](https://neywalabs.ai)، وهي شركة تسمّيها شروط الاستخدام Neywa Labs sp. z o.o. في كراكوف ببولندا. ويصف المطوّر نفسه بأنه الفريق وراء المكتبتين مفتوحتي المصدر mlx-vlm وmlx-audio. أُنشئ المستودع في يوليو 2026. صدر أحدث إصدار، v0.4.6، في 16 نوفمبر 2026، وكان آخر commit في 17 نوفمبر 2026، فالتطوير نشط ولا ينطبق تحذير المشروع المتوقف.',
          'بحسب README، يجمع التطبيق نافذة دردشة ومكتبة نماذج وتبويب صور وامتدادًا صوتيًا للإملاء وملاحظات الاجتماعات وصفحة للمطوّرين فيها الواجهة البرمجية المحلية وتحليلات ومراقب نظام وأدوات تحكم في شريط القوائم. كما يتيح فتح المستندات والشيفرة وصفحات الويب في لوحة عمل بجانب الدردشة.',
          'هذه الأوصاف أقوال من المطوّر. لم تشغّل PromptQuorum التطبيق ولم تتحقق من السرعة أو جودة الإجابات أو جودة الصور أو دقة الإملاء.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**تثبّت Nativ كأي تطبيق Mac: نزّل ملف DMG واسحبه إلى مجلد التطبيقات، أو استخدم Homebrew.**',
          'يتضمن إصدار GitHub v0.4.6 ملفًا واحدًا هو Nativ-0.4.6.dmg. ويذكر README أيضًا أمر Homebrew، وتعرض قائمة casks في Homebrew الإصدار 0.4.6. وبعد التثبيت يحدّث التطبيق نفسه عبر Sparkle بحسب README.',
        ],
        columns: ['الطريقة', 'كيف تحصل عليه'],
        rows: [
          { 'الطريقة': '[DMG](https://github.com/Neywa-Labs/nativ/releases/latest)', 'كيف تحصل عليه': 'نزّله واسحب Nativ إلى مجلد التطبيقات' },
          { 'الطريقة': '[الموقع](https://runnativ.ai)', 'كيف تحصل عليه': 'زر «Download for macOS»' },
          { 'الطريقة': 'Homebrew', 'كيف تحصل عليه': 'brew install --cask nativ' },
          { 'الطريقة': '[الشيفرة المصدرية](https://github.com/Neywa-Labs/nativ)', 'كيف تحصل عليه': 'make xcode-generate ثم make xcode-run (يلزم Xcode)' },
        ],
        note: 'يذكر README عند أول تشغيل خطوات اختيارية: اختيار نموذج أو تنزيله، وتعيين مفتاح API للخادم، ومنح أذونات الميكروفون وإمكانية الوصول وتسجيل الشاشة الآن أو لاحقًا. لم تشغّل PromptQuorum المثبّت ولم تفحص الملف المنزَّل.',
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات',
        content: [
          '**يتطلب Nativ جهاز Mac بمعالج Apple Silicon (M1 أو أحدث) ونظام macOS 26 أو أحدث وذاكرة موحّدة كافية للنموذج الذي تختاره.**',
          'القائمة مأخوذة من README والأسئلة الشائعة، التي تشرح أن MLX لا يعمل على أجهزة Mac بمعالج Intel. لا يُنشر حد أدنى للذاكرة للتطبيق نفسه، وتعرض مكتبة النماذج تحذيرات عن ملاءمة النموذج لجهازك بحسب README. لم تقِس PromptQuorum استهلاك الذاكرة ولا السرعة.',
        ],
        columns: ['البند', 'القيمة المعلنة'],
        rows: [
          { 'البند': 'المعالج', 'القيمة المعلنة': 'Apple Silicon (M1 أو أحدث)' },
          { 'البند': 'نظام التشغيل', 'القيمة المعلنة': 'macOS 26 أو أحدث' },
          { 'البند': 'الذاكرة', 'القيمة المعلنة': 'ذاكرة موحّدة كافية للنموذج' },
          { 'البند': 'الإنترنت', 'القيمة المعلنة': 'لتنزيل النماذج والتحديثات فقط' },
          { 'البند': 'رمز Hugging Face', 'القيمة المعلنة': 'اختياري، للنماذج المقيّدة' },
          { 'البند': 'البناء من المصدر', 'القيمة المعلنة': 'Xcode وxcodegen وPython 3' },
        ],
        note: 'بحسب README، ما زال تنزيل النماذج وتبعيات البناء الأول يحتاجان إلى اتصال بالشبكة. وتفعّل الأذونات الاختيارية (الميكروفون، إمكانية الوصول، تسجيل الشاشة) الإملاء وتسجيل الاجتماعات ولقطات الشاشة، وتذكر الأسئلة الشائعة أنه يمكن تخطي أي منها.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**جوهر Nativ تطبيق دردشة محلي مع إدارة للنماذج، يحيط به توليد الصور والصوت وواجهة برمجة محلية وتكاملات مع الوكلاء.** كل ما يلي أقوال من المطوّر في README والأسئلة الشائعة.',
        ],
        items: [
          'الدردشة والرؤية: محادثات متدفقة ومرفقات صور وعرض للتفكير ومقاييس للاستجابة وسجل محادثات محفوظ، مع عدة نوافذ مستقلة تتشارك خادمًا واحدًا.',
          'الصور: تبويب مخصص يولّد الصور ويحررها بنماذج صور MLX المتوافقة.',
          'مكتبة النماذج: تصفّح نماذج Hugging Face المتوافقة وتنزيلها مع تحذيرات ملاءمة الذاكرة، ونقل الذاكرة المؤقتة إلى قرص APFS خارجي، والتحميل المسبق لنماذج اللغة والصور والكلام والتضمين معًا.',
          'الواجهة البرمجية المحلية: نقاط نهاية متوافقة مع OpenAI للدردشة وresponses والصور والصوت والتضمين والنماذج، إضافة إلى نقاط نهاية Anthropic Messages، افتراضيًا على 127.0.0.1:8080، مع مفتاح API اختياري لمسارات الإدارة.',
          'تكامل أدوات البرمجة: إعداد Codex وClaude Code وPi وHermes وOpenCode وAider وGoose وCrush وQwen Code وOpenClaw، وكذلك VS Code وCursor وZed وJetBrains وCline وContinue.',
          'الامتداد الصوتي: إملاء في أي تطبيق، وسجل نصوص، وملاحظات اجتماعات مع نص وملخص، وتصدير إلى PDF أو DOCX أو TXT؛ ويُحذف الصوت الخام للإملاء بعد خمس دقائق.',
          'خوادم MCP مع موافقة لكل أداة، وطلبات مجدولة مع حزم مهام، ومكتبة مخرجات مع بحث دلالي، ومراقب نظام، وإعدادات استدلال متقدمة مثل تكميم ذاكرة KV المؤقتة والفك التخميني.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**بحسب المطوّر، تبقى محادثاتك ومطالباتك وملفاتك ومخرجاتك على جهاز Mac؛ ويتصل التطبيق بالإنترنت لتنزيل النماذج والتحقق من التحديثات، وبيانات التشخيص اختيارية.**',
          'بحسب سياسة الخصوصية (آخر تحديث في 16 نوفمبر 2026)، لا تجمع Neywa Labs محتواك ولا تطّلع عليه ولا تخزّنه، ولا تستخدمه لتدريب النماذج أو تقييمها، ولا تبيع المعلومات الشخصية. ولا يجوز جمع بيانات التشخيص، مثل تقارير الأعطال وإصدار التطبيق وmacOS والمعالج وحجم الذاكرة وقياسات الأداء وأحداث استخدام الميزات، إلا بموافقتك التي يطلبها التطبيق عند أول تشغيل ويمكنك سحبها من الإعدادات. وتقول السياسة إنها لا تتضمن أبدًا محتوى جلساتك ولا النماذج المحددة التي تستخدمها.',
          'تضيف الأسئلة الشائعة أن النماذج تُنزَّل مباشرة من Hugging Face، وأن طلبات التحقق من التحديثات تصل إلى Neywa Labs أو مزوّد التحديثات لديها، وقد يرى تفاصيل الطلب مثل عنوان IP وإصدار التطبيق. ويستخدم الموقع تحليلات PostHog مع شريط موافقة على ملفات تعريف الارتباط.',
          'وتحتوي السياسة أيضًا على عنصر نائب لمعالج الدفع بين أقواس مربعة وأقسام عن التسجيل ومفاتيح الترخيص والمشتريات، مع أن المطوّر يصف التطبيق بأنه مجاني وبلا حساب. وتضيف الشروط أن خططًا مدفوعة مثل Nativ Pro قد تأتي لاحقًا. أعد قراءة الوثيقتين قبل الاعتماد عليهما؛ فالشيفرة بترخيص MIT وعلنية، ولذلك يمكن من حيث المبدأ فحص تدفق البيانات، لكن PromptQuorum لم تفعل ذلك.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب Nativ أصحاب أجهزة Mac بمعالج Apple Silicon الذين يريدون تطبيق ذكاء اصطناعي محليًا مجانيًا ومفتوح المصدر بلا حساب.**',
        ],
        items: [
          'مستخدمو Mac الذين يريدون الدردشة وتوليد الصور والإملاء في تطبيق واحد يشغّل النماذج على جهازهم.',
          'المطوّرون الذين يريدون أن يستخدم Claude Code أو Codex أو Aider أو محرّر نموذجًا محليًا عبر نقاط نهاية متوافقة مع OpenAI أو Anthropic.',
          'من يريدون تصفّح نماذج MLX من Hugging Face وتنزيلها مع تحذيرات ملاءمة الذاكرة.',
          'القرّاء الذين يفضّلون مشروعًا شيفرة تطبيقه وترخيصه علنيان.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        content: [
          '**لا يناسب Nativ بعض الحالات، وتبقى عدة تفاصيل دون تحقق.**',
        ],
        items: [
          'لا يناسب: مستخدمي Windows وLinux وأجهزة Mac بمعالج Intel. يعمل التطبيق فقط على Apple Silicon مع macOS 26 أو أحدث.',
          'لا يناسب: من يحتاجون سجلًا طويلًا. أُنشئ المستودع في يوليو 2026 وما زال الإصدار 0.4.x.',
          'غير متحقق منه: السرعة واستهلاك الذاكرة وجودة الإجابات وجودة الصور ودقة الإملاء. لم تشغّل PromptQuorum التطبيق.',
          'غير متحقق منه: أن لا شيء يغادر جهاز Mac سوى تنزيلات النماذج وفحوص التحديث. هذا قول المطوّر، ولم تدقّق PromptQuorum الشيفرة ولم تفحص حركة الشبكة.',
          'غير متحقق منه: كيف تتفق أقسام سياسة الخصوصية عن الحساب والترخيص والشراء والعنصر النائب «[PAYMENT PROCESSOR NAME]» مع تطبيق مجاني، وماذا سيتضمن «Nativ Pro».',
          'غير متحقق منه: قول المطوّر إنه الفريق وراء mlx-vlm وmlx-audio، وعدد النماذج التي تعمل في التطبيق، وأعداد المستخدمين. لم تُعثر على مراجعات مستقلة.',
          'غير متحقق منه: هل ملف DMG موثَّق (notarized)، وما الحد الأدنى للذاكرة الذي يحتاجه نموذج معيّن على جهازك.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Nativ مقابل البدائل',
        itemHeadings: true,
        content: [
          '**ينافس Nativ تطبيقات سطح مكتب محلية أخرى وأدوات استدلال على Mac؛ ولم تقارنها PromptQuorum عمليًا.** الأدوات التالية موجودة في الدليل وتُوصف بحسب مراجعاتها الخاصة.',
        ],
        columns: ['الأداة', 'المذكور في المصادر'],
        rows: [
          { 'الأداة': 'Nativ', 'المذكور في المصادر': 'MIT؛ لـ Mac فقط؛ مجاني؛ خادم MLX مرفق' },
          { 'الأداة': '[LM Studio](/ar/power-local-llm/lm-studio-review)', 'المذكور في المصادر': 'مغلق المصدر ومجاني؛ Mac/Windows/Linux؛ متصفح نماذج' },
          { 'الأداة': '[Jan](/ar/power-local-llm/jan-review)', 'المذكور في المصادر': 'Apache 2.0؛ Mac/Windows/Linux؛ مجاني؛ دردشة دون اتصال' },
          { 'الأداة': '[oMLX](/ar/power-local-llm/omlx-review)', 'المذكور في المصادر': 'Apache-2.0؛ Mac؛ خادم استدلال MLX وواجهة أوامر' },
          { 'الأداة': '[Osaurus](/ar/power-local-llm/osaurus-ai-review)', 'المذكور في المصادر': 'MIT؛ Mac؛ مجاني؛ تطبيق Swift أصلي' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Nativ مجاني؟',
            a: 'نعم بحسب المطوّر. الشيفرة بترخيص MIT، وتقول الأسئلة الشائعة إنه لا حساب ولا اشتراك. وتذكر الشروط أنه إذا عُرضت خطط مدفوعة مثل Nativ Pro فستُعرض شروط السعر والفوترة والإلغاء قبل الشراء.',
          },
          {
            q: 'على أي أجهزة Mac يعمل Nativ؟',
            a: 'على أجهزة Mac بمعالج Apple Silicon (M1 أو أحدث) مع macOS 26 أو أحدث. تشرح الأسئلة الشائعة أن Nativ يستخدم إطار MLX الذي لا يعمل على أجهزة Mac بمعالج Intel، ولذلك لا تُدعم أجهزة Intel ولا Windows ولا Linux. لم تختبره PromptQuorum على أي جهاز Mac.',
          },
          {
            q: 'هل يمكنني استخدام Nativ مع Claude Code أو Codex؟',
            a: 'نعم بحسب المطوّر. يقدّم Nativ النموذج المحمَّل عبر نقاط نهاية متوافقة مع OpenAI وAnthropic، وتُعدّ صفحة التكاملات لديه Claude Code وCodex وPi وHermes وOpenCode وAider وGoose وCrush وQwen Code وOpenClaw، إضافة إلى محررات مثل VS Code وCursor وZed وJetBrains. لم تختبر PromptQuorum هذا الإعداد.',
          },
          {
            q: 'كيف أثبّت Nativ؟',
            a: 'نزّل ملف DMG من الموقع أو من صفحة إصدارات GitHub واسحب Nativ إلى مجلد التطبيقات، أو شغّل brew install --cask nativ. بعد ذلك يحدّث التطبيق نفسه عبر Sparkle. لم تنفّذ PromptQuorum التثبيت.',
          },
          {
            q: 'هل يرسل Nativ محادثاتي إلى أي مكان؟',
            a: 'ليس افتراضيًا بحسب المطوّر: تبقى المحادثات والمطالبات والملفات والإجابات على جهاز Mac. يتصل التطبيق لتنزيل النماذج من Hugging Face والتحقق من التحديثات، ولا تُرسل بيانات التشخيص إلا إذا وافقت عند أول تشغيل. وتحتوي سياسة الخصوصية أيضًا على عنصر نائب بين أقواس مربعة، فاقرأها قبل الاعتماد عليها.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق Nativ نظرة إن كنت تملك جهاز Mac بمعالج Apple Silicon وتريد تطبيق ذكاء اصطناعي محليًا مجانيًا ومفتوح المصدر يجمع الدردشة والصور والإملاء وواجهة برمجة محلية لوكلاء البرمجة.**',
          'على الورق يغطي الكثير: خادم MLX مرفق، ومكتبة نماذج Hugging Face مع تحذيرات الملاءمة، ونقاط نهاية متوافقة مع OpenAI وAnthropic، وإعدادًا لعشرة وكلاء برمجة وستة محررات، وامتدادًا صوتيًا، ودعمًا لـ MCP، مع الإصدار v0.4.6 في 16 نوفمبر 2026 وcommit في 17 نوفمبر 2026.',
          'المقايضات حقيقية. يعمل فقط على Apple Silicon مع macOS 26 أو أحدث، وهو مشروع حديث برقم إصدار 0.4، وعندما راجعته PromptQuorum في 18 نوفمبر 2026 كانت سياسة الخصوصية تحتوي عنصرًا نائبًا بين أقواس مربعة وأقسامًا عن الحسابات والمشتريات. لم تختبر PromptQuorum التطبيق، لذا ابدأ بنموذج صغير، واقرأ سياسة الخصوصية الحالية، وتأكد من أن الإملاء وتوليد الصور والواجهة البرمجية تناسب استخدامك قبل الاعتماد عليه.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Nativ](https://runnativ.ai) — الميزات والمتطلبات والتنزيلات، جرى التحقق منها في 18 نوفمبر 2026.',
          '[الأسئلة الشائعة](https://runnativ.ai/faq) — المتطلبات والخصوصية والتكاملات، آخر تحديث في 5 نوفمبر 2026، جرى التحقق منها في 18 نوفمبر 2026.',
          '[سياسة الخصوصية](https://runnativ.ai/privacy) — معالجة البيانات، آخر تحديث في 16 نوفمبر 2026، جرى التحقق منها في 18 نوفمبر 2026.',
          '[شروط الاستخدام](https://runnativ.ai/terms) — الجهة المشغّلة والترخيص وصياغة الخطط المدفوعة، جرى التحقق منها في 18 نوفمبر 2026.',
          '[مستودع GitHub](https://github.com/Neywa-Labs/nativ) — الترخيص وتاريخ الإنشاء وآخر commit، جرى التحقق منها في 18 نوفمبر 2026.',
          '[README](https://github.com/Neywa-Labs/nativ#readme) — الميزات والتثبيت والمتطلبات والواجهة البرمجية المحلية، جرى التحقق منها في 18 نوفمبر 2026.',
          '[الإصدار v0.4.6](https://github.com/Neywa-Labs/nativ/releases/tag/v0.4.6) — أحدث إصدار وتاريخه وملف DMG، جرى التحقق منها في 18 نوفمبر 2026.',
          '[حزمة Homebrew cask](https://formulae.brew.sh/cask/nativ) — إصدار الحزمة، جرى التحقق منها في 18 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة LM Studio](/ar/power-local-llm/lm-studio-review) — تطبيق سطح مكتب بمتصفح نماذج مدمج ووضع خادم.',
          '[مراجعة Jan](/ar/power-local-llm/jan-review) — تطبيق دردشة مفتوح المصدر لسطح المكتب يركّز على العمل دون اتصال.',
          '[مراجعة oMLX](/ar/power-local-llm/omlx-review) — خادم استدلال قائم على MLX لـ Apple Silicon مع ذاكرة مؤقتة على SSD.',
          '[مراجعة Osaurus](/ar/power-local-llm/osaurus-ai-review) — تطبيق Swift أصلي مجاني بترخيص MIT لأجهزة Mac بمعالج Apple Silicon.',
          '[دليل برامج LLM المحلية](/ar/directory) — الكتالوج الكامل لأدوات الذكاء الاصطناعي المحلي.',
        ],
      },
    },
  },
}
