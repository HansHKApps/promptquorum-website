// PapersGPT Review: Zotero AI Plugin for PDF Chat, Library Search and MCP
// Slug: papersgpt-review
// Companion to: surfsense-review, anythingllm-review, khoj-ai-second-brain-review
// Sources (all read 2026-11-17, no hands-on testing): maker website (home page, pricing, FAQ, MCP page, privacy policy, terms, changelog page), GitHub repository
// papersgpt/papersgpt-for-zotero (API metadata, README, release papersgpt-v2.3.0, commits). The request came from the site owner, not from the maker.
// Last upstream update 2026-11-16 (last commit on main, README only; latest release papersgpt-v2.3.0 on 2026-11-13) => no stale warning.
// Theme: 'RAG & Document Chat' (canonical, as surfsense-review).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-17',
    theme: 'RAG & Document Chat',
    heroImage: '/images/papersgpt-review-hero-en.webp',
    title: 'PapersGPT Review: Zotero AI Plugin for PDF Chat, Library Search and MCP',
    seoTitle: 'PapersGPT Review: Zotero AI Plugin, Local Models, MCP',
    intro:
      'PapersGPT is an open-source (AGPL-3.0) plugin for the Zotero reference manager that chats with PDFs, searches a whole library, tracks new papers and saves results as Zotero notes. This review is based on the maker\'s website, the GitHub repository, its release page and its privacy policy, checked on 17 November 2026. PromptQuorum has not tested the plugin hands-on.',
    metaDescription:
      'PapersGPT is an AGPL-3.0 Zotero plugin for PDF chat, library-wide search and paper tracking with cloud or local models and MCP. Install, privacy, limits.',
    twitterDescription:
      'PapersGPT adds PDF chat, whole-library search and paper tracking to Zotero, with cloud or local models and an MCP server. Open source, freemium.',
    audience:
      'Researchers and students who manage papers in Zotero, developers who connect a paper library to MCP clients, and teams weighing AI tools for literature work',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PapersGPT',
    targetKeywords: [
      'PapersGPT review',
      'Zotero AI plugin',
      'chat with PDF Zotero',
      'Zotero MCP server',
      'whole-library search Zotero',
      'PapersGPT install',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**PapersGPT is an open-source (AGPL-3.0) AI plugin for Zotero that chats with single or multiple PDFs, searches a whole library and tracks new papers.** It installs as an .xpi file inside Zotero 7 to 10, works with cloud models, your own API key, Ollama or built-in local models, and includes an MCP server for clients such as Claude Desktop or Cursor. It has a free tier and paid plans, and PromptQuorum has not tested it.',
    quickAnswerTop: {
      en: {
        question: 'What is PapersGPT and who is it for?',
        answer:
          'PapersGPT is a plugin that adds AI chat and search to the Zotero reference manager. It suits researchers and students who already keep their papers in Zotero and want answers with citations that link back to the source paper.',
        bullets: [
          'Zotero plugin (.xpi) for Zotero 7 to 10 on macOS, Windows and Linux.',
          'Price: free tier plus paid plans; license AGPL-3.0.',
          'Chat with one PDF, several PDFs or the whole library; Literature Radar tracks new papers; AutoPilot batch-reads a collection into Zotero notes.',
          'Per the maker, it works with 30+ cloud models, your own key, Ollama or built-in local models.',
          'The privacy policy dates from 2024; check the data flow of the built-in credits before using confidential papers.',
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
            text: 'PapersGPT lets you chat with PDFs, search your entire library and track new papers from inside Zotero, using cloud or local AI models.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as an AI research assistant that lives in Zotero: it is described as reading the PDFs you already collected and answering questions about them with citations. The AI model can be a cloud service, your own key or a model running on your computer.',
          },
        ],
        items: [
          'Open source under AGPL-3.0; a free tier and paid plans exist, and the maker\'s pages list different prices, so check the pricing page before buying.',
          'Installs as an .xpi file inside Zotero 7 to 10 (macOS, Windows, Linux); Zotero must already be installed.',
          'Models (per the maker): 30+ cloud models, your own API key, a custom OpenAI-compatible endpoint, Ollama, or built-in local models downloaded from Hugging Face.',
          'An MCP server connects your Zotero library to Claude Desktop, Claude Code, Cursor and other MCP clients.',
          'PromptQuorum has not tested the plugin. The privacy policy is dated May 2024 and predates the built-in AI credits added in v2.3.0.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The maker says parsing, indexing and search run locally. Whether chats that use the built-in credits pass through a PapersGPT server is not documented on the pages PromptQuorum read.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**PapersGPT is a Zotero plugin that adds AI chat, whole-library search, paper tracking and batch reading to the PDFs in your library.**',
          'The project is published by "PapersGPT Team" under AGPL-3.0 (GitHub: papersgpt/papersgpt-for-zotero). The latest release, v2.3.0, appeared on 13 November 2026 and the repository\'s last commit was on 16 November 2026 (a README change), so development is ongoing and no stale-project warning applies. The repository was created in November 2024.',
          'The maker lists these core features: whole-library search across all PDFs; Literature Radar, which delivers daily digests of new papers from arXiv, PubMed, Semantic Scholar, Europe PMC, Crossref, bioRxiv and medRxiv; multi-PDF chat that compares methods and results; and AutoPilot, which reads a whole collection and writes structured Zotero notes. Every answer is said to carry click-to-jump citations to the cited paper.',
          'Plans gate features. Per the pricing page, unlicensed use covers 20 single-PDF trial chats and multi-PDF chat with up to 3 PDFs; Basic adds whole-library chat and Literature Radar Explore; Premium and Business add AutoPilot and Literature Radar Track. Top-up packs of AI chat credits also exist.',
          'These descriptions are maker statements. PromptQuorum has not run the plugin and has not checked answer quality, citation accuracy or the speed figures the maker publishes.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**You install PapersGPT as a plugin file inside Zotero; the Zotero MCP server is a separate npm or Python package.**',
          'The README says to download the .xpi file from the GitHub release page and install it in Zotero; the maker\'s Quickstart guide has the steps. On first use you pick a model: one of the cloud models with the built-in trial (no API key needed to start, per the README), your own key, or a built-in local model.',
        ],
        columns: ['Route', 'How to get it'],
        rows: [
          { 'Route': '[Zotero plugin](https://github.com/papersgpt/papersgpt-for-zotero/releases/tag/papersgpt-v2.3.0)', 'How to get it': 'Download papersgpt-v2.3.0.xpi, install in Zotero 7–10' },
          { 'Route': '[Quickstart guide](https://www.papersgpt.com/quickstart)', 'How to get it': 'Maker\'s install and first-use steps' },
          { 'Route': '[MCP server (npm)](https://www.papersgpt.com/en/mcpserver)', 'How to get it': 'npx @docsagent/docsagent start (Node.js)' },
          { 'Route': '[MCP server (Python)](https://www.papersgpt.com/en/mcpserver)', 'How to get it': 'pip install docsagent-mcp (Python 3.10+)' },
        ],
        note: 'PapersGPT is a plugin, not a standalone app, so it needs Zotero. The MCP page says the search core can run without opening Zotero. PromptQuorum did not install or scan the .xpi file.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements',
        content: [
          '**PapersGPT needs Zotero 7, 8, 9 or 10 on macOS, Windows or Linux; hardware needs depend on the local model you choose.**',
          'The compatibility list comes from the README. No minimum RAM, disk or GPU figure is published. PromptQuorum did not measure resource use.',
        ],
        columns: ['Item', 'Stated figure'],
        rows: [
          { 'Item': 'Zotero', 'Stated figure': '7, 8, 9 or 10 (README)' },
          { 'Item': 'Operating system', 'Stated figure': 'macOS, Windows, Linux' },
          { 'Item': 'Plugin file', 'Stated figure': '.xpi installed in Zotero' },
          { 'Item': 'Cloud models', 'Stated figure': 'Internet; built-in trial or own key' },
          { 'Item': 'Local models', 'Stated figure': 'One-click download from Hugging Face' },
          { 'Item': 'RAM / GPU / disk', 'Stated figure': 'Not stated; depends on the model' },
          { 'Item': 'MCP server', 'Stated figure': 'Node.js (npx) or Python 3.10+' },
        ],
        note: 'Built-in AI credits need at least PapersGPT v2.3.0, according to the pricing page. Per the maker, local models run on your computer and need no key; a cloud model needs network access.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**PapersGPT\'s core is AI chat over your Zotero PDFs, with search, tracking and agent connections around it.** All items below are maker claims from the website and README.',
        ],
        items: [
          'Chat with a single PDF from the Zotero PDF viewer, or with several PDFs or a whole collection selected in the main window.',
          'Whole-library search: tick "Search entire library" to retrieve passages across all indexed PDFs and get one synthesized answer.',
          'Literature Radar: subscribe to topics and receive a daily digest of new papers from arXiv, PubMed, Semantic Scholar, Europe PMC, Crossref, bioRxiv and medRxiv; queries go from your machine to those sources with no relay server, per the README.',
          'AutoPilot: set a research goal and let it read a collection and write findings into structured Zotero notes; the maker says it can run overnight on cloud or local models.',
          'Click-to-jump citations that open the cited paper, built-in prompts such as Summary, Background and Literature review, and saving insights to Zotero notes.',
          'Model choice: 30+ cloud models, your own API key, a custom OpenAI-compatible endpoint, Ollama, or built-in local models (Gemma 4, Qwen 3.5, Mistral 7B and others) downloaded from Hugging Face.',
          'A Zotero MCP server, built on the DocsAgent package, for Claude Desktop, Claude Code, Cursor and other MCP clients; per the maker it can index and search a library without opening Zotero.',
          'An agent SKILL file that OpenClaw, OpenAI, Claude, Cursor, Claude Code, CodeX and Gemini CLI users can load, linked from the README.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**The maker says parsing, indexing and search run on your computer and that chats go straight to the model provider you choose, but the privacy policy is from 2024 and does not describe the built-in AI credits.**',
          'According to the privacy policy (effective 25 May 2024), the app does not collect API keys, chat messages or usage history, which stay on your computer, and requests go directly to the OpenAI, Anthropic or Google APIs without a middle server. Using the app needs no registration. The policy says anonymous crash logs are collected to improve the app and that buying a license collects your email address.',
          'The website uses Vercel for hosting and Vercel Analytics, and Lemon Squeezy processes payments, per the policy. The maker describes local models plus local document processing as keeping data on the device.',
          'Built-in AI credits (added in v2.3.0, no API key needed) are newer than the policy. The pages PromptQuorum read do not say whether those chats are routed through a PapersGPT server, so check this before using confidential or unpublished papers. The policy and terms name no company, address or governing law; the contact is an email address.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**PapersGPT fits people who keep their papers in Zotero and want cited AI answers in the same place.**',
        ],
        items: [
          'Researchers and students who want cited answers across one paper, a collection or the whole library.',
          'People who want to track new papers on a topic inside their reference manager.',
          'Developers and agent users who want an MCP client to search a Zotero library.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        content: [
          '**PapersGPT is a poor fit in some situations, and several details remain unverified.**',
        ],
        items: [
          'Not a fit: anyone who does not use Zotero. PapersGPT is a plugin for it, not a standalone reader.',
          'Not a fit: people who want one clear price. The maker\'s pages list different prices and free-tier terms.',
          'Not a fit: organizations that cannot use AGPL-licensed software. AGPL-3.0 has source-sharing duties for modified versions offered over a network; ask your legal team.',
          'Unverified: answer quality, citation accuracy and AutoPilot results. PromptQuorum has not run the plugin.',
          'Unverified: speed and resource use. PromptQuorum did not measure them and found no independent figures.',
          'Unverified: free-tier terms. The FAQ describes free local models with no time limit; the pricing page describes a trial with 20 single-PDF chats and limited runs.',
          'Unverified: prices. The pricing page, the FAQ and the site\'s structured data show different figures, so none is quoted here.',
          'Unverified: whether chats that use built-in credits pass through a PapersGPT server, and what the 2024 privacy policy covers after v2.3.0.',
          'Unverified: the company or country behind the project, the user numbers and ratings the site shows, and independent reviews. None were found, and the maker\'s own comparison pages were not treated as independent.',
          'Unverified: version information. The site\'s changelog page ends at v0.6.0 and its structured data says 0.6.0, while GitHub releases are at v2.3.0; this review uses GitHub.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'PapersGPT vs Alternatives',
        itemHeadings: true,
        content: [
          '**PapersGPT is a Zotero plugin; PromptQuorum has not compared it with the alternatives hands-on.** The tools below are other document-chat and research tools in the directory, described from their own reviews.',
        ],
        columns: ['Tool', 'Noted in sources'],
        rows: [
          { 'Tool': 'PapersGPT', 'Noted in sources': 'Zotero plugin; AGPL-3.0; free tier + paid plans' },
          { 'Tool': '[SurfSense](/power-local-llm/surfsense-review)', 'Noted in sources': 'Desktop app; Apache-2.0; NotebookLM-style agent' },
          { 'Tool': '[AnythingLLM](/power-local-llm/anythingllm-review)', 'Noted in sources': 'Desktop and web; MIT; document chat and RAG' },
          { 'Tool': '[Khoj](/power-local-llm/khoj-ai-second-brain-review)', 'Noted in sources': 'Web and desktop; AGPL-3.0; personal second brain' },
          { 'Tool': '[Knowledge Retrieval Compared](/power-local-llm/local-llm-knowledge-retrieval-compared)', 'Noted in sources': 'Category comparison for document tools' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Is PapersGPT free?',
            a: 'Partly. The code is open source under AGPL-3.0, and the maker offers a free tier plus paid plans (Basic, Premium, Business) with feature limits. The maker\'s pages show different prices and free-tier terms, so check the pricing page before relying on a figure. Cloud models you reach with your own key are billed by their provider.',
          },
          {
            q: 'Do I need Zotero to use PapersGPT?',
            a: 'Yes for the plugin: it installs as an .xpi file in Zotero 7 to 10. The MCP server can index and search a Zotero library without opening Zotero, per the maker\'s MCP page.',
          },
          {
            q: 'How do I install PapersGPT?',
            a: 'Install Zotero, download papersgpt-v2.3.0.xpi from the GitHub release page, and install it in Zotero as the README and Quickstart describe. PromptQuorum did not run the installation.',
          },
          {
            q: 'Can PapersGPT run offline with local models?',
            a: 'Per the maker, yes: built-in local models such as Gemma 4, Qwen 3.5 and Mistral 7B download from Hugging Face and run on your computer, and indexing and search are local. You can also use Ollama or a custom OpenAI-compatible endpoint. PromptQuorum has not tested offline use.',
          },
          {
            q: 'Can Claude or Cursor search my Zotero library through PapersGPT?',
            a: 'Yes, per the maker. The Zotero MCP server, built on the DocsAgent package, works with MCP clients such as Claude Desktop, Claude Code and Cursor. Start the search core with npx @docsagent/docsagent start or pip install docsagent-mcp, then add the server to your client\'s MCP settings.',
          },
          {
            q: 'What is Literature Radar in PapersGPT?',
            a: 'Per the README, it delivers a daily digest of new papers on topics you subscribe to, from arXiv, PubMed, Semantic Scholar, Europe PMC, Crossref, bioRxiv and medRxiv. Queries go from your machine to those sources with no relay server, according to the maker. The pricing page puts Explore in Basic and Track in Premium and Business.',
          },
          {
            q: 'What does AutoPilot do?',
            a: 'AutoPilot reads a whole collection toward a research goal and writes findings into structured Zotero notes; the maker says it can run overnight on cloud or local models. The pricing page lists it under Premium and Business. PromptQuorum has not run it.',
          },
          {
            q: 'Which AI models can PapersGPT use?',
            a: 'Per the maker: 30+ cloud models, your own API key, a custom OpenAI-compatible endpoint, Ollama, or built-in local models such as Gemma 4, Qwen 3.5 and Mistral 7B downloaded from Hugging Face.',
          },
          {
            q: 'Can PapersGPT search my whole Zotero library?',
            a: 'Yes, per the maker: tick "Search entire library" to retrieve passages across all indexed PDFs and get one synthesized answer. The pricing page lists whole-library chat from the Basic plan upward.',
          },
          {
            q: 'Does PapersGPT cite its sources?',
            a: 'The maker says every answer carries click-to-jump citations that open the cited paper. PromptQuorum has not checked citation accuracy.',
          },
          {
            q: 'Do my chats stay on my computer?',
            a: 'The maker says parsing, indexing and search run locally and that chats go straight to the model provider you choose. The privacy policy dates from 25 May 2024, before the built-in AI credits of v2.3.0, and the pages PromptQuorum read do not say whether those chats pass through a PapersGPT server.',
          },
          {
            q: 'Is PapersGPT actively maintained?',
            a: 'Release v2.3.0 appeared on 13 November 2026, and the last commit on GitHub was on 16 November 2026 (a README change). The site\'s changelog page ends at v0.6.0, so this review takes its version information from GitHub.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**PapersGPT is worth a look if your papers already live in Zotero and you want cited AI answers, library-wide search and paper tracking in the same place.**',
          'On paper it covers a lot: single and multi-PDF chat, whole-library search, Literature Radar, AutoPilot, cloud and local models, Ollama, an MCP server and frequent releases (v2.3.0 on 13 November 2026, with a commit on 16 November 2026).',
          'The trade-offs are real. It only works inside Zotero, the price and free-tier terms are unclear across the maker\'s pages, the privacy policy predates the built-in credits and no company or country is named. PromptQuorum has not tested the plugin, so try it on a small collection with a local model and check the citations before relying on it.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[PapersGPT website](https://www.papersgpt.com/en) — features, models and structured data, checked 17 November 2026.',
          '[Pricing page](https://www.papersgpt.com/en/pricing) — plans, feature limits, trial and credits, checked 17 November 2026.',
          '[FAQ](https://www.papersgpt.com/en/faq) — free-tier and local-model statements, checked 17 November 2026.',
          '[Zotero MCP server page](https://www.papersgpt.com/en/mcpserver) — MCP install commands, checked 17 November 2026.',
          '[Privacy policy](https://www.papersgpt.com/en/privacy/privacy_policy) — data handling, effective 25 May 2024, checked 17 November 2026.',
          '[Terms and conditions](https://www.papersgpt.com/en/terms/terms_and_conditions) — read for company or country details, checked 17 November 2026.',
          '[Changelog page](https://www.papersgpt.com/resources/changelog) — version history shown on the site, checked 17 November 2026.',
          '[GitHub repository](https://github.com/papersgpt/papersgpt-for-zotero) — repository, license, creation date and last commit, checked 17 November 2026.',
          '[README](https://github.com/papersgpt/papersgpt-for-zotero#readme) — features, compatibility, quickstart, MCP and skill, checked 17 November 2026.',
          '[Release papersgpt-v2.3.0](https://github.com/papersgpt/papersgpt-for-zotero/releases/tag/papersgpt-v2.3.0) — latest release, its date and the .xpi file, checked 17 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[SurfSense Review](/power-local-llm/surfsense-review) — an open-source desktop NotebookLM alternative that researches and edits your documents on your own machine.',
          '[AnythingLLM Review](/power-local-llm/anythingllm-review) — a document-chat and RAG workspace with a built-in vector store.',
          '[Khoj Review](/power-local-llm/khoj-ai-second-brain-review) — a personal AI second brain that syncs with Obsidian and Notion.',
          '[Local LLM Knowledge Retrieval Compared](/power-local-llm/local-llm-knowledge-retrieval-compared) — the category comparison for document and knowledge tools.',
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
    theme: 'RAG & Document Chat',
    heroImage: '/images/papersgpt-review-hero-de.webp',
    title: 'PapersGPT-Rezension: Zotero-KI-Plugin für PDF-Chat, Bibliothekssuche und MCP',
    seoTitle: 'PapersGPT-Rezension: Zotero-KI-Plugin, lokale Modelle',
    intro:
      'PapersGPT ist ein Open-Source-Plugin (AGPL-3.0) für die Literaturverwaltung Zotero, das mit PDFs chattet, eine ganze Bibliothek durchsucht, neue Paper verfolgt und Ergebnisse als Zotero-Notizen speichert. Diese Rezension stützt sich auf die Website des Entwicklers, das GitHub-Repository, die Release-Seite und die Datenschutzerklärung, geprüft am 17. November 2026. PromptQuorum hat das Plugin nicht selbst getestet.',
    metaDescription:
      'PapersGPT: AGPL-3.0-Zotero-Plugin für PDF-Chat, Bibliothekssuche und Paper-Tracking mit Cloud- oder lokalen Modellen und MCP. Installation, Datenschutz.',
    twitterDescription:
      'PapersGPT ergänzt Zotero um PDF-Chat, Bibliothekssuche und Paper-Tracking, mit Cloud- oder lokalen Modellen und MCP-Server. Open Source, Freemium.',
    audience:
      'Forschende und Studierende, die ihre Paper in Zotero verwalten, Entwickler, die eine Paper-Bibliothek an MCP-Clients anbinden, und Teams, die KI-Werkzeuge für die Literaturarbeit prüfen',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PapersGPT',
    targetKeywords: [
      'PapersGPT Rezension',
      'Zotero-KI-Plugin',
      'Mit PDF chatten Zotero',
      'Zotero-MCP-Server',
      'Bibliothekssuche Zotero',
      'PapersGPT installieren',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**PapersGPT ist ein quelloffenes (AGPL-3.0) KI-Plugin für Zotero, das mit einzelnen oder mehreren PDFs chattet, eine ganze Bibliothek durchsucht und neue Paper verfolgt.** Es wird als .xpi-Datei in Zotero 7 bis 10 installiert, arbeitet mit Cloud-Modellen, Ihrem eigenen API-Schlüssel, Ollama oder integrierten lokalen Modellen und enthält einen MCP-Server für Clients wie Claude Desktop oder Cursor. Es gibt einen kostenlosen Tarif und kostenpflichtige Pläne; PromptQuorum hat es nicht getestet.',
    quickAnswerTop: {
      de: {
        question: 'Was ist PapersGPT, und für wen ist es gedacht?',
        answer:
          'PapersGPT ist ein Plugin, das die Literaturverwaltung Zotero um KI-Chat und Suche erweitert. Es eignet sich für Forschende und Studierende, die ihre Paper bereits in Zotero ablegen und Antworten mit Quellenangaben möchten, die zum Ursprungs-Paper zurückführen.',
        bullets: [
          'Zotero-Plugin (.xpi) für Zotero 7 bis 10 unter macOS, Windows und Linux.',
          'Preis: kostenloser Tarif plus kostenpflichtige Pläne; Lizenz AGPL-3.0.',
          'Chat mit einem PDF, mehreren PDFs oder der ganzen Bibliothek; Literature Radar verfolgt neue Paper; AutoPilot liest eine Sammlung stapelweise in Zotero-Notizen ein.',
          'Laut Entwickler arbeitet es mit über 30 Cloud-Modellen, Ihrem eigenen Schlüssel, Ollama oder integrierten lokalen Modellen.',
          'Die Datenschutzerklärung stammt von 2024; prüfen Sie den Datenfluss der integrierten Credits, bevor Sie vertrauliche Paper nutzen.',
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
            text: 'PapersGPT lässt Sie direkt in Zotero mit PDFs chatten, Ihre gesamte Bibliothek durchsuchen und neue Paper verfolgen, mit Cloud- oder lokalen KI-Modellen.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als KI-Forschungsassistenten vor, der in Zotero lebt: Laut Entwickler liest er die PDFs, die Sie bereits gesammelt haben, und beantwortet Fragen dazu mit Quellenangaben. Das KI-Modell kann ein Cloud-Dienst, Ihr eigener Schlüssel oder ein Modell auf Ihrem Rechner sein.',
          },
        ],
        items: [
          'Open Source unter AGPL-3.0; es gibt einen kostenlosen Tarif und kostenpflichtige Pläne, und die Seiten des Entwicklers nennen unterschiedliche Preise – prüfen Sie die Preisseite vor dem Kauf.',
          'Wird als .xpi-Datei in Zotero 7 bis 10 installiert (macOS, Windows, Linux); Zotero muss bereits installiert sein.',
          'Modelle (laut Entwickler): über 30 Cloud-Modelle, Ihr eigener API-Schlüssel, ein eigener OpenAI-kompatibler Endpunkt, Ollama oder integrierte lokale Modelle von Hugging Face.',
          'Ein MCP-Server verbindet Ihre Zotero-Bibliothek mit Claude Desktop, Claude Code, Cursor und anderen MCP-Clients.',
          'PromptQuorum hat das Plugin nicht getestet. Die Datenschutzerklärung stammt vom Mai 2024 und ist älter als die in v2.3.0 ergänzten integrierten KI-Credits.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Laut Entwickler laufen Parsing, Indexierung und Suche lokal. Ob Chats mit den integrierten Credits über einen PapersGPT-Server laufen, ist auf den von PromptQuorum gelesenen Seiten nicht dokumentiert.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**PapersGPT ist ein Zotero-Plugin, das den PDFs Ihrer Bibliothek KI-Chat, Bibliothekssuche, Paper-Tracking und Stapelverarbeitung hinzufügt.**',
          'Das Projekt wird vom „PapersGPT Team“ unter AGPL-3.0 veröffentlicht (GitHub: papersgpt/papersgpt-for-zotero). Das aktuelle Release v2.3.0 erschien am 13. November 2026, der letzte Commit im Repository stammt vom 16. November 2026 (eine README-Änderung); die Entwicklung läuft also weiter, und es gibt keine Warnung vor einem veralteten Projekt. Das Repository wurde im November 2024 angelegt.',
          'Der Entwickler nennt diese Kernfunktionen: Suche über die gesamte Bibliothek; Literature Radar, das täglich neue Paper von arXiv, PubMed, Semantic Scholar, Europe PMC, Crossref, bioRxiv und medRxiv zusammenstellt; Chat mit mehreren PDFs, der Methoden und Ergebnisse vergleicht; und AutoPilot, das eine ganze Sammlung liest und strukturierte Zotero-Notizen schreibt. Jede Antwort soll Quellenangaben tragen, die per Klick zum zitierten Paper springen.',
          'Die Pläne schalten Funktionen frei. Laut Preisseite umfasst die Nutzung ohne Lizenz 20 Testchats mit einem PDF und Chat mit bis zu 3 PDFs; Basic ergänzt den Chat über die ganze Bibliothek und Literature Radar Explore; Premium und Business ergänzen AutoPilot und Literature Radar Track. Zusätzlich gibt es Aufladepakete für KI-Chat-Credits.',
          'Diese Beschreibungen sind Aussagen des Entwicklers. PromptQuorum hat das Plugin nicht ausgeführt und weder die Antwortqualität noch die Genauigkeit der Quellenangaben oder die veröffentlichten Geschwindigkeitswerte geprüft.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So bekommen Sie die App',
        content: [
          '**Sie installieren PapersGPT als Plugin-Datei in Zotero; der Zotero-MCP-Server ist ein eigenes npm- oder Python-Paket.**',
          'Laut README laden Sie die .xpi-Datei von der GitHub-Release-Seite herunter und installieren sie in Zotero; die Schritte stehen in der Quickstart-Anleitung des Entwicklers. Bei der ersten Nutzung wählen Sie ein Modell: eines der Cloud-Modelle mit der integrierten Testversion (laut README zum Start kein API-Schlüssel nötig), Ihren eigenen Schlüssel oder ein integriertes lokales Modell.',
        ],
        columns: ['Weg', 'So bekommen Sie sie'],
        rows: [
          { 'Weg': '[Zotero-Plugin](https://github.com/papersgpt/papersgpt-for-zotero/releases/tag/papersgpt-v2.3.0)', 'So bekommen Sie sie': 'papersgpt-v2.3.0.xpi laden, in Zotero 7–10 installieren' },
          { 'Weg': '[Quickstart-Anleitung](https://www.papersgpt.com/quickstart)', 'So bekommen Sie sie': 'Installation und erste Schritte des Entwicklers' },
          { 'Weg': '[MCP-Server (npm)](https://www.papersgpt.com/en/mcpserver)', 'So bekommen Sie sie': 'npx @docsagent/docsagent start (Node.js)' },
          { 'Weg': '[MCP-Server (Python)](https://www.papersgpt.com/en/mcpserver)', 'So bekommen Sie sie': 'pip install docsagent-mcp (Python 3.10+)' },
        ],
        note: 'PapersGPT ist ein Plugin und keine eigenständige App, daher braucht es Zotero. Laut MCP-Seite kann der Suchkern laufen, ohne dass Zotero geöffnet ist. PromptQuorum hat die .xpi-Datei weder installiert noch gescannt.',
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen',
        content: [
          '**PapersGPT braucht Zotero 7, 8, 9 oder 10 unter macOS, Windows oder Linux; der Hardwarebedarf hängt vom gewählten lokalen Modell ab.**',
          'Die Kompatibilitätsliste stammt aus der README. Mindestwerte für RAM, Speicherplatz oder GPU sind nicht veröffentlicht. PromptQuorum hat den Ressourcenverbrauch nicht gemessen.',
        ],
        columns: ['Punkt', 'Angegebener Wert'],
        rows: [
          { 'Punkt': 'Zotero', 'Angegebener Wert': '7, 8, 9 oder 10 (README)' },
          { 'Punkt': 'Betriebssystem', 'Angegebener Wert': 'macOS, Windows, Linux' },
          { 'Punkt': 'Plugin-Datei', 'Angegebener Wert': '.xpi, in Zotero installiert' },
          { 'Punkt': 'Cloud-Modelle', 'Angegebener Wert': 'Internet; integrierte Testversion oder eigener Schlüssel' },
          { 'Punkt': 'Lokale Modelle', 'Angegebener Wert': 'Download per Klick von Hugging Face' },
          { 'Punkt': 'RAM / GPU / Speicher', 'Angegebener Wert': 'Nicht angegeben; vom Modell abhängig' },
          { 'Punkt': 'MCP-Server', 'Angegebener Wert': 'Node.js (npx) oder Python 3.10+' },
        ],
        note: 'Laut Preisseite brauchen die integrierten KI-Credits mindestens PapersGPT v2.3.0. Laut Entwickler laufen lokale Modelle auf Ihrem Rechner und brauchen keinen Schlüssel; ein Cloud-Modell braucht Netzzugang.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Der Kern von PapersGPT ist KI-Chat über Ihre Zotero-PDFs, ergänzt um Suche, Tracking und Agentenanbindung.** Alle Punkte unten sind Aussagen des Entwicklers aus Website und README.',
        ],
        items: [
          'Chat mit einem einzelnen PDF aus dem Zotero-PDF-Betrachter oder mit mehreren PDFs bzw. einer ganzen Sammlung, die Sie im Hauptfenster auswählen.',
          'Bibliothekssuche: Mit „Search entire library“ ruft das Plugin Passagen aus allen indexierten PDFs ab und liefert eine zusammengeführte Antwort.',
          'Literature Radar: Sie abonnieren Themen und erhalten täglich eine Übersicht neuer Paper von arXiv, PubMed, Semantic Scholar, Europe PMC, Crossref, bioRxiv und medRxiv; laut README gehen die Anfragen von Ihrem Rechner direkt an diese Quellen, ohne Relay-Server.',
          'AutoPilot: Sie legen ein Forschungsziel fest, und es liest eine Sammlung und schreibt die Ergebnisse in strukturierte Zotero-Notizen; laut Entwickler kann es über Nacht mit Cloud- oder lokalen Modellen laufen.',
          'Quellenangaben, die per Klick das zitierte Paper öffnen, eingebaute Prompts wie Summary, Background und Literature review sowie das Speichern von Erkenntnissen in Zotero-Notizen.',
          'Modellwahl: über 30 Cloud-Modelle, Ihr eigener API-Schlüssel, ein eigener OpenAI-kompatibler Endpunkt, Ollama oder integrierte lokale Modelle (Gemma 4, Qwen 3.5, Mistral 7B und weitere) von Hugging Face.',
          'Ein Zotero-MCP-Server auf Basis des DocsAgent-Pakets für Claude Desktop, Claude Code, Cursor und andere MCP-Clients; laut Entwickler kann er eine Bibliothek indexieren und durchsuchen, ohne dass Zotero geöffnet ist.',
          'Eine Agenten-SKILL-Datei, die Nutzer von OpenClaw, OpenAI, Claude, Cursor, Claude Code, CodeX und Gemini CLI laden können; in der README verlinkt.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Laut Entwickler laufen Parsing, Indexierung und Suche auf Ihrem Rechner, und Chats gehen direkt an den gewählten Modellanbieter; die Datenschutzerklärung stammt jedoch von 2024 und beschreibt die integrierten KI-Credits nicht.**',
          'Laut Datenschutzerklärung (gültig ab 25. Mai 2024) erhebt die App weder API-Schlüssel noch Chatnachrichten oder Nutzungsverlauf, die auf Ihrem Rechner bleiben, und Anfragen gehen ohne Zwischenserver direkt an die APIs von OpenAI, Anthropic oder Google. Für die Nutzung ist keine Registrierung nötig. Die Erklärung nennt anonyme Absturzprotokolle zur Verbesserung der App und die Erhebung Ihrer E-Mail-Adresse beim Lizenzkauf.',
          'Die Website nutzt laut Erklärung Vercel fürs Hosting und Vercel Analytics, Zahlungen verarbeitet Lemon Squeezy. Lokale Modelle samt lokaler Dokumentverarbeitung halten die Daten nach Darstellung des Entwicklers auf dem Gerät.',
          'Die integrierten KI-Credits (ab v2.3.0, kein API-Schlüssel nötig) sind neuer als die Erklärung. Die von PromptQuorum gelesenen Seiten sagen nicht, ob diese Chats über einen PapersGPT-Server laufen; klären Sie das, bevor Sie vertrauliche oder unveröffentlichte Paper verwenden. Erklärung und Nutzungsbedingungen nennen weder Unternehmen noch Adresse noch anwendbares Recht; als Kontakt dient eine E-Mail-Adresse.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**PapersGPT passt zu Menschen, die ihre Paper in Zotero ablegen und KI-Antworten mit Quellenangaben am selben Ort möchten.**',
        ],
        items: [
          'Forschende und Studierende, die Antworten mit Quellenangaben über ein Paper, eine Sammlung oder die ganze Bibliothek möchten.',
          'Menschen, die neue Paper zu einem Thema direkt in ihrer Literaturverwaltung verfolgen möchten.',
          'Entwickler und Agentennutzer, die per MCP-Client eine Zotero-Bibliothek durchsuchen möchten.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        content: [
          '**PapersGPT passt in manchen Situationen nicht, und mehrere Details sind ungeprüft.**',
        ],
        items: [
          'Nicht geeignet: wer Zotero nicht nutzt. PapersGPT ist ein Plugin dafür, kein eigenständiger Reader.',
          'Nicht geeignet: wer einen klaren Preis möchte. Die Seiten des Entwicklers nennen unterschiedliche Preise und Bedingungen für den kostenlosen Tarif.',
          'Nicht geeignet: Organisationen, die keine AGPL-lizenzierte Software einsetzen können. AGPL-3.0 verpflichtet bei geänderten, über ein Netzwerk angebotenen Versionen zur Offenlegung des Quellcodes; fragen Sie Ihre Rechtsabteilung.',
          'Ungeprüft: Antwortqualität, Genauigkeit der Quellenangaben und AutoPilot-Ergebnisse. PromptQuorum hat das Plugin nicht ausgeführt.',
          'Ungeprüft: Geschwindigkeit und Ressourcenverbrauch. PromptQuorum hat sie nicht gemessen und keine unabhängigen Werte gefunden.',
          'Ungeprüft: die Bedingungen des kostenlosen Tarifs. Die FAQ beschreibt kostenlose lokale Modelle ohne Zeitlimit; die Preisseite beschreibt eine Testversion mit 20 Chats mit einem PDF und begrenzten Läufen.',
          'Ungeprüft: die Preise. Preisseite, FAQ und strukturierte Daten der Website zeigen unterschiedliche Beträge, daher wird hier keiner genannt.',
          'Ungeprüft: ob Chats mit integrierten Credits über einen PapersGPT-Server laufen und was die Datenschutzerklärung von 2024 nach v2.3.0 abdeckt.',
          'Ungeprüft: das Unternehmen oder Land hinter dem Projekt, die auf der Website gezeigten Nutzerzahlen und Bewertungen sowie unabhängige Rezensionen. Es wurden keine gefunden, und die Vergleichsseiten des Entwicklers wurden nicht als unabhängig gewertet.',
          'Ungeprüft: die Versionsangaben. Die Changelog-Seite der Website endet bei v0.6.0 und die strukturierten Daten nennen 0.6.0, während GitHub bei v2.3.0 steht; diese Rezension folgt GitHub.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'PapersGPT im Vergleich zu Alternativen',
        itemHeadings: true,
        content: [
          '**PapersGPT ist ein Zotero-Plugin; PromptQuorum hat es nicht praktisch mit den Alternativen verglichen.** Die folgenden Werkzeuge sind andere Dokumentenchat- und Recherchewerkzeuge im Verzeichnis, beschrieben nach ihren eigenen Rezensionen.',
        ],
        columns: ['Werkzeug', 'In Quellen genannt'],
        rows: [
          { 'Werkzeug': 'PapersGPT', 'In Quellen genannt': 'Zotero-Plugin; AGPL-3.0; kostenloser Tarif + Bezahlpläne' },
          { 'Werkzeug': '[SurfSense](/de/power-local-llm/surfsense-review)', 'In Quellen genannt': 'Desktop-App; Apache-2.0; Agent im NotebookLM-Stil' },
          { 'Werkzeug': '[AnythingLLM](/de/power-local-llm/anythingllm-review)', 'In Quellen genannt': 'Desktop und Web; MIT; Dokumentenchat und RAG' },
          { 'Werkzeug': '[Khoj](/de/power-local-llm/khoj-ai-second-brain-review)', 'In Quellen genannt': 'Web und Desktop; AGPL-3.0; persönliches Second Brain' },
          { 'Werkzeug': '[Wissensabruf im Vergleich](/de/power-local-llm/local-llm-knowledge-retrieval-compared)', 'In Quellen genannt': 'Kategorievergleich für Dokumentenwerkzeuge' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Ist PapersGPT kostenlos?',
            a: 'Teilweise. Der Code ist Open Source unter AGPL-3.0, und der Entwickler bietet einen kostenlosen Tarif sowie kostenpflichtige Pläne (Basic, Premium, Business) mit Funktionsgrenzen. Die Seiten des Entwicklers zeigen unterschiedliche Preise und Bedingungen für den kostenlosen Tarif; prüfen Sie die Preisseite, bevor Sie sich auf einen Betrag verlassen. Cloud-Modelle, die Sie mit eigenem Schlüssel nutzen, rechnet deren Anbieter ab.',
          },
          {
            q: 'Brauche ich Zotero, um PapersGPT zu nutzen?',
            a: 'Für das Plugin ja: Es wird als .xpi-Datei in Zotero 7 bis 10 installiert. Laut MCP-Seite des Entwicklers kann der MCP-Server eine Zotero-Bibliothek indexieren und durchsuchen, ohne dass Zotero geöffnet ist.',
          },
          {
            q: 'Wie installiere ich PapersGPT?',
            a: 'Installieren Sie Zotero, laden Sie papersgpt-v2.3.0.xpi von der GitHub-Release-Seite herunter und installieren Sie die Datei in Zotero, wie README und Quickstart es beschreiben. PromptQuorum hat die Installation nicht durchgeführt.',
          },
          {
            q: 'Läuft PapersGPT mit lokalen Modellen offline?',
            a: 'Laut Entwickler ja: Integrierte lokale Modelle wie Gemma 4, Qwen 3.5 und Mistral 7B werden von Hugging Face geladen und laufen auf Ihrem Rechner, Indexierung und Suche sind lokal. Sie können auch Ollama oder einen eigenen OpenAI-kompatiblen Endpunkt nutzen. PromptQuorum hat die Offline-Nutzung nicht getestet.',
          },
          {
            q: 'Können Claude oder Cursor meine Zotero-Bibliothek über PapersGPT durchsuchen?',
            a: 'Ja, laut Entwickler. Der Zotero-MCP-Server auf Basis des DocsAgent-Pakets funktioniert mit MCP-Clients wie Claude Desktop, Claude Code und Cursor. Starten Sie den Suchkern mit npx @docsagent/docsagent start oder pip install docsagent-mcp und tragen Sie den Server in die MCP-Einstellungen Ihres Clients ein.',
          },
          {
            q: 'Was ist Literature Radar in PapersGPT?',
            a: 'Laut README liefert es einen täglichen Überblick über neue Paper zu abonnierten Themen von arXiv, PubMed, Semantic Scholar, Europe PMC, Crossref, bioRxiv und medRxiv. Die Anfragen gehen laut Entwickler ohne Relay-Server von Ihrem Rechner an diese Quellen. Die Preisseite ordnet Explore dem Tarif Basic und Track den Tarifen Premium und Business zu.',
          },
          {
            q: 'Was macht AutoPilot?',
            a: 'AutoPilot liest eine ganze Sammlung im Hinblick auf ein Forschungsziel und schreibt die Ergebnisse in strukturierte Zotero-Notizen; laut Entwickler kann es über Nacht mit Cloud- oder lokalen Modellen laufen. Die Preisseite führt es unter Premium und Business auf. PromptQuorum hat es nicht ausgeführt.',
          },
          {
            q: 'Welche KI-Modelle kann PapersGPT nutzen?',
            a: 'Laut Entwickler: über 30 Cloud-Modelle, Ihr eigener API-Schlüssel, ein eigener OpenAI-kompatibler Endpunkt, Ollama oder eingebaute lokale Modelle wie Gemma 4, Qwen 3.5 und Mistral 7B, die von Hugging Face geladen werden.',
          },
          {
            q: 'Kann PapersGPT meine gesamte Zotero-Bibliothek durchsuchen?',
            a: 'Ja, laut Entwickler: Mit „Search entire library“ ruft das Plugin Passagen aus allen indexierten PDFs ab und liefert eine zusammengeführte Antwort. Die Preisseite führt den Chat über die ganze Bibliothek ab dem Tarif Basic auf.',
          },
          {
            q: 'Nennt PapersGPT seine Quellen?',
            a: 'Laut Entwickler trägt jede Antwort Quellenangaben, die per Klick das zitierte Paper öffnen. PromptQuorum hat die Genauigkeit der Quellenangaben nicht geprüft.',
          },
          {
            q: 'Bleiben meine Chats auf meinem Rechner?',
            a: 'Laut Entwickler laufen Parsing, Indexierung und Suche lokal, und Chats gehen direkt an den von Ihnen gewählten Modellanbieter. Die Datenschutzerklärung stammt vom 25. Mai 2024, also von vor den eingebauten KI-Credits von v2.3.0, und auf den von PromptQuorum gelesenen Seiten steht nicht, ob diese Chats über einen PapersGPT-Server laufen.',
          },
          {
            q: 'Wird PapersGPT aktiv gepflegt?',
            a: 'Version v2.3.0 erschien am 13. November 2026, der letzte Commit auf GitHub war am 16. November 2026 (eine README-Änderung). Die Changelog-Seite der Website endet bei v0.6.0, daher stammen die Versionsangaben dieses Reviews von GitHub.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**PapersGPT ist einen Blick wert, wenn Ihre Paper bereits in Zotero liegen und Sie KI-Antworten mit Quellenangaben, Bibliothekssuche und Paper-Tracking an einem Ort möchten.**',
          'Auf dem Papier deckt es viel ab: Chat mit einem oder mehreren PDFs, Bibliothekssuche, Literature Radar, AutoPilot, Cloud- und lokale Modelle, Ollama, einen MCP-Server und häufige Releases (v2.3.0 am 13. November 2026, ein Commit am 16. November 2026).',
          'Die Kompromisse sind real. Es funktioniert nur innerhalb von Zotero, Preis und Bedingungen des kostenlosen Tarifs sind auf den Seiten des Entwicklers unklar, die Datenschutzerklärung ist älter als die integrierten Credits, und weder Unternehmen noch Land werden genannt. PromptQuorum hat das Plugin nicht getestet; probieren Sie es mit einer kleinen Sammlung und einem lokalen Modell aus und prüfen Sie die Quellenangaben, bevor Sie sich darauf verlassen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von PapersGPT](https://www.papersgpt.com/en) — Funktionen, Modelle und strukturierte Daten, geprüft am 17. November 2026.',
          '[Preisseite](https://www.papersgpt.com/en/pricing) — Pläne, Funktionsgrenzen, Testversion und Credits, geprüft am 17. November 2026.',
          '[FAQ](https://www.papersgpt.com/en/faq) — Aussagen zu kostenlosem Tarif und lokalen Modellen, geprüft am 17. November 2026.',
          '[Seite zum Zotero-MCP-Server](https://www.papersgpt.com/en/mcpserver) — MCP-Installationsbefehle, geprüft am 17. November 2026.',
          '[Datenschutzerklärung](https://www.papersgpt.com/en/privacy/privacy_policy) — Datenverarbeitung, gültig ab 25. Mai 2024, geprüft am 17. November 2026.',
          '[Nutzungsbedingungen](https://www.papersgpt.com/en/terms/terms_and_conditions) — auf Angaben zu Unternehmen oder Land gelesen, geprüft am 17. November 2026.',
          '[Changelog-Seite](https://www.papersgpt.com/resources/changelog) — auf der Website gezeigte Versionshistorie, geprüft am 17. November 2026.',
          '[GitHub-Repository](https://github.com/papersgpt/papersgpt-for-zotero) — Repository, Lizenz, Erstellungsdatum und letzter Commit, geprüft am 17. November 2026.',
          '[README](https://github.com/papersgpt/papersgpt-for-zotero#readme) — Funktionen, Kompatibilität, Quickstart, MCP und Skill, geprüft am 17. November 2026.',
          '[Release papersgpt-v2.3.0](https://github.com/papersgpt/papersgpt-for-zotero/releases/tag/papersgpt-v2.3.0) — aktuelles Release, sein Datum und die .xpi-Datei, geprüft am 17. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[SurfSense-Rezension](/de/power-local-llm/surfsense-review) — eine quelloffene Desktop-Alternative zu NotebookLM, die Ihre Dokumente auf Ihrem eigenen Rechner recherchiert und bearbeitet.',
          '[AnythingLLM-Rezension](/de/power-local-llm/anythingllm-review) — ein Arbeitsbereich für Dokumentenchat und RAG mit integriertem Vektorspeicher.',
          '[Khoj-Rezension](/de/power-local-llm/khoj-ai-second-brain-review) — ein persönliches KI-Second-Brain, das sich mit Obsidian und Notion synchronisiert.',
          '[Wissensabruf mit lokalen LLMs im Vergleich](/de/power-local-llm/local-llm-knowledge-retrieval-compared) — der Kategorievergleich für Dokumenten- und Wissenswerkzeuge.',
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
    theme: 'RAG & Document Chat',
    heroImage: '/images/papersgpt-review-hero-es.webp',
    title: 'Reseña de PapersGPT: plugin de IA para Zotero con chat de PDF, búsqueda en la biblioteca y MCP',
    seoTitle: 'Reseña de PapersGPT: plugin de IA para Zotero y MCP',
    intro:
      'PapersGPT es un plugin de código abierto (AGPL-3.0) para el gestor bibliográfico Zotero que chatea con PDF, busca en toda la biblioteca, sigue artículos nuevos y guarda los resultados como notas de Zotero. Esta reseña se basa en el sitio web del desarrollador, el repositorio de GitHub, su página de versiones y su política de privacidad, revisados el 17 de noviembre de 2026. PromptQuorum no ha probado el plugin en la práctica.',
    metaDescription:
      'Plugin AGPL-3.0 de Zotero para chatear con PDF, buscar en la biblioteca y seguir artículos con modelos locales o en la nube y MCP. Instalación, privacidad.',
    twitterDescription:
      'PapersGPT añade a Zotero chat de PDF, búsqueda en toda la biblioteca y seguimiento de artículos, con modelos en la nube o locales y servidor MCP. Código abierto, freemium.',
    audience:
      'Investigadores y estudiantes que gestionan sus artículos en Zotero, desarrolladores que conectan una biblioteca de artículos a clientes MCP y equipos que evalúan herramientas de IA para el trabajo bibliográfico',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PapersGPT',
    targetKeywords: [
      'reseña de PapersGPT',
      'plugin de IA para Zotero',
      'chatear con PDF en Zotero',
      'servidor MCP de Zotero',
      'búsqueda en toda la biblioteca de Zotero',
      'instalar PapersGPT',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**PapersGPT es un plugin de IA de código abierto (AGPL-3.0) para Zotero que chatea con uno o varios PDF, busca en toda la biblioteca y sigue artículos nuevos.** Se instala como archivo .xpi dentro de Zotero 7 a 10, funciona con modelos en la nube, tu propia clave de API, Ollama o modelos locales integrados, e incluye un servidor MCP para clientes como Claude Desktop o Cursor. Tiene un plan gratuito y planes de pago, y PromptQuorum no lo ha probado.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es PapersGPT y para quién es?',
        answer:
          'PapersGPT es un plugin que añade chat con IA y búsqueda al gestor bibliográfico Zotero. Es adecuado para investigadores y estudiantes que ya guardan sus artículos en Zotero y quieren respuestas con citas que enlazan con el artículo de origen.',
        bullets: [
          'Plugin de Zotero (.xpi) para Zotero 7 a 10 en macOS, Windows y Linux.',
          'Precio: plan gratuito más planes de pago; licencia AGPL-3.0.',
          'Chat con un PDF, varios PDF o toda la biblioteca; Literature Radar sigue artículos nuevos; AutoPilot lee una colección por lotes y la vuelca en notas de Zotero.',
          'Según el desarrollador, funciona con más de 30 modelos en la nube, tu propia clave, Ollama o modelos locales integrados.',
          'La política de privacidad es de 2024; revisa el flujo de datos de los créditos integrados antes de usar artículos confidenciales.',
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
            text: 'PapersGPT te permite chatear con PDF, buscar en toda tu biblioteca y seguir artículos nuevos desde dentro de Zotero, con modelos de IA en la nube o locales.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en un asistente de investigación con IA que vive en Zotero: según el desarrollador, lee los PDF que ya has reunido y responde preguntas sobre ellos con citas. El modelo de IA puede ser un servicio en la nube, tu propia clave o un modelo que se ejecuta en tu equipo.',
          },
        ],
        items: [
          'Código abierto bajo AGPL-3.0; hay un plan gratuito y planes de pago, y las páginas del desarrollador muestran precios distintos, así que consulta la página de precios antes de comprar.',
          'Se instala como archivo .xpi dentro de Zotero 7 a 10 (macOS, Windows, Linux); Zotero debe estar ya instalado.',
          'Modelos (según el desarrollador): más de 30 modelos en la nube, tu propia clave de API, un endpoint compatible con OpenAI, Ollama o modelos locales integrados descargados de Hugging Face.',
          'Un servidor MCP conecta tu biblioteca de Zotero con Claude Desktop, Claude Code, Cursor y otros clientes MCP.',
          'PromptQuorum no ha probado el plugin. La política de privacidad es de mayo de 2024 y es anterior a los créditos de IA integrados que llegaron con la v2.3.0.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'El desarrollador afirma que el análisis, la indexación y la búsqueda se ejecutan en local. Si los chats que usan los créditos integrados pasan por un servidor de PapersGPT no figura en las páginas que PromptQuorum leyó.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen',
        content: [
          '**PapersGPT es un plugin de Zotero que añade chat con IA, búsqueda en toda la biblioteca, seguimiento de artículos y lectura por lotes a los PDF de tu biblioteca.**',
          'El proyecto lo publica el «PapersGPT Team» bajo AGPL-3.0 (GitHub: papersgpt/papersgpt-for-zotero). La última versión, la v2.3.0, apareció el 13 de noviembre de 2026 y el último commit del repositorio es del 16 de noviembre de 2026 (un cambio en el README), así que el desarrollo continúa y no se aplica ninguna advertencia de proyecto abandonado. El repositorio se creó en noviembre de 2024.',
          'El desarrollador enumera estas funciones centrales: búsqueda en todos los PDF de la biblioteca; Literature Radar, que entrega resúmenes diarios de artículos nuevos de arXiv, PubMed, Semantic Scholar, Europe PMC, Crossref, bioRxiv y medRxiv; chat con varios PDF que compara métodos y resultados; y AutoPilot, que lee una colección entera y escribe notas de Zotero estructuradas. Según el desarrollador, cada respuesta lleva citas que saltan al artículo citado con un clic.',
          'Los planes limitan funciones. Según la página de precios, el uso sin licencia incluye 20 chats de prueba con un PDF y chat con hasta 3 PDF; Basic añade el chat con toda la biblioteca y Literature Radar Explore; Premium y Business añaden AutoPilot y Literature Radar Track. También hay paquetes de recarga de créditos de chat con IA.',
          'Estas descripciones son afirmaciones del desarrollador. PromptQuorum no ha ejecutado el plugin y no ha comprobado la calidad de las respuestas, la exactitud de las citas ni las cifras de velocidad que publica el desarrollador.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirlo',
        content: [
          '**PapersGPT se instala como archivo de plugin dentro de Zotero; el servidor MCP de Zotero es un paquete aparte de npm o Python.**',
          'El README indica descargar el archivo .xpi de la página de versiones de GitHub e instalarlo en Zotero; la guía Quickstart del desarrollador tiene los pasos. En el primer uso eliges un modelo: uno de los modelos en la nube con la prueba integrada (según el README, no hace falta clave de API para empezar), tu propia clave o un modelo local integrado.',
        ],
        columns: ['Vía', 'Cómo conseguirlo'],
        rows: [
          { 'Vía': '[Plugin de Zotero](https://github.com/papersgpt/papersgpt-for-zotero/releases/tag/papersgpt-v2.3.0)', 'Cómo conseguirlo': 'Descarga papersgpt-v2.3.0.xpi e instálalo en Zotero 7–10' },
          { 'Vía': '[Guía Quickstart](https://www.papersgpt.com/quickstart)', 'Cómo conseguirlo': 'Pasos de instalación y primer uso del desarrollador' },
          { 'Vía': '[Servidor MCP (npm)](https://www.papersgpt.com/en/mcpserver)', 'Cómo conseguirlo': 'npx @docsagent/docsagent start (Node.js)' },
          { 'Vía': '[Servidor MCP (Python)](https://www.papersgpt.com/en/mcpserver)', 'Cómo conseguirlo': 'pip install docsagent-mcp (Python 3.10+)' },
        ],
        note: 'PapersGPT es un plugin, no una app independiente, así que necesita Zotero. Según la página de MCP, el núcleo de búsqueda puede funcionar sin abrir Zotero. PromptQuorum no instaló ni analizó el archivo .xpi.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**PapersGPT necesita Zotero 7, 8, 9 o 10 en macOS, Windows o Linux; los requisitos de hardware dependen del modelo local que elijas.**',
          'La lista de compatibilidad procede del README. No se publica ninguna cifra mínima de RAM, disco o GPU. PromptQuorum no midió el uso de recursos.',
        ],
        columns: ['Elemento', 'Dato indicado'],
        rows: [
          { 'Elemento': 'Zotero', 'Dato indicado': '7, 8, 9 o 10 (README)' },
          { 'Elemento': 'Sistema operativo', 'Dato indicado': 'macOS, Windows, Linux' },
          { 'Elemento': 'Archivo del plugin', 'Dato indicado': '.xpi instalado en Zotero' },
          { 'Elemento': 'Modelos en la nube', 'Dato indicado': 'Internet; prueba integrada o clave propia' },
          { 'Elemento': 'Modelos locales', 'Dato indicado': 'Descarga con un clic desde Hugging Face' },
          { 'Elemento': 'RAM / GPU / disco', 'Dato indicado': 'No indicado; depende del modelo' },
          { 'Elemento': 'Servidor MCP', 'Dato indicado': 'Node.js (npx) o Python 3.10+' },
        ],
        note: 'Según la página de precios, los créditos de IA integrados requieren al menos PapersGPT v2.3.0. Según el desarrollador, los modelos locales se ejecutan en tu equipo y no necesitan clave; un modelo en la nube necesita acceso a la red.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El núcleo de PapersGPT es el chat con IA sobre tus PDF de Zotero, con búsqueda, seguimiento y conexiones con agentes alrededor.** Todos los puntos siguientes son afirmaciones del desarrollador tomadas del sitio web y del README.',
        ],
        items: [
          'Chat con un solo PDF desde el visor de PDF de Zotero, o con varios PDF o una colección completa seleccionados en la ventana principal.',
          'Búsqueda en toda la biblioteca: marca «Search entire library» para recuperar pasajes de todos los PDF indexados y obtener una respuesta sintetizada.',
          'Literature Radar: te suscribes a temas y recibes un resumen diario de artículos nuevos de arXiv, PubMed, Semantic Scholar, Europe PMC, Crossref, bioRxiv y medRxiv; según el README, las consultas van desde tu equipo a esas fuentes sin servidor intermedio.',
          'AutoPilot: defines un objetivo de investigación y lee una colección y escribe los hallazgos en notas de Zotero estructuradas; según el desarrollador, puede ejecutarse por la noche con modelos en la nube o locales.',
          'Citas que abren el artículo citado con un clic, prompts integrados como Summary, Background y Literature review, y guardado de conclusiones en notas de Zotero.',
          'Elección de modelo: más de 30 modelos en la nube, tu propia clave de API, un endpoint compatible con OpenAI, Ollama o modelos locales integrados (Gemma 4, Qwen 3.5, Mistral 7B y otros) descargados de Hugging Face.',
          'Un servidor MCP de Zotero, basado en el paquete DocsAgent, para Claude Desktop, Claude Code, Cursor y otros clientes MCP; según el desarrollador, puede indexar y buscar en una biblioteca sin abrir Zotero.',
          'Un archivo SKILL de agente que pueden cargar usuarios de OpenClaw, OpenAI, Claude, Cursor, Claude Code, CodeX y Gemini CLI, enlazado desde el README.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**El desarrollador afirma que el análisis, la indexación y la búsqueda se ejecutan en tu equipo y que los chats van directamente al proveedor de modelos que elijas, pero la política de privacidad es de 2024 y no describe los créditos de IA integrados.**',
          'Según la política de privacidad (en vigor desde el 25 de mayo de 2024), la app no recopila claves de API, mensajes de chat ni historial de uso, que permanecen en tu equipo, y las solicitudes van directamente a las API de OpenAI, Anthropic o Google sin servidor intermedio. Usar la app no exige registro. La política indica que se recopilan registros de fallos anónimos para mejorar la app y que al comprar una licencia se recoge tu correo electrónico.',
          'Según la política, el sitio web usa Vercel para el alojamiento y Vercel Analytics, y Lemon Squeezy procesa los pagos. El desarrollador describe los modelos locales junto con el procesamiento local de documentos como una forma de mantener los datos en el dispositivo.',
          'Los créditos de IA integrados (añadidos en la v2.3.0, sin clave de API) son posteriores a la política. Las páginas que PromptQuorum leyó no dicen si esos chats pasan por un servidor de PapersGPT, así que compruébalo antes de usar artículos confidenciales o sin publicar. La política y los términos no nombran ninguna empresa, dirección ni ley aplicable; el contacto es una dirección de correo electrónico.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**PapersGPT encaja con quienes guardan sus artículos en Zotero y quieren respuestas de IA con citas en el mismo sitio.**',
        ],
        items: [
          'Investigadores y estudiantes que quieren respuestas con citas sobre un artículo, una colección o toda la biblioteca.',
          'Personas que quieren seguir artículos nuevos de un tema dentro de su gestor bibliográfico.',
          'Desarrolladores y usuarios de agentes que quieren que un cliente MCP busque en una biblioteca de Zotero.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        content: [
          '**PapersGPT no encaja en algunas situaciones y varios detalles siguen sin verificarse.**',
        ],
        items: [
          'No encaja: quien no usa Zotero. PapersGPT es un plugin para él, no un lector independiente.',
          'No encaja: quien quiere un precio claro. Las páginas del desarrollador muestran precios y condiciones del plan gratuito distintos.',
          'No encaja: organizaciones que no pueden usar software con licencia AGPL. AGPL-3.0 impone obligaciones de compartir el código de las versiones modificadas que se ofrecen por red; consulta con tu departamento jurídico.',
          'Sin verificar: calidad de las respuestas, exactitud de las citas y resultados de AutoPilot. PromptQuorum no ha ejecutado el plugin.',
          'Sin verificar: velocidad y uso de recursos. PromptQuorum no los midió y no encontró cifras independientes.',
          'Sin verificar: las condiciones del plan gratuito. Las preguntas frecuentes describen modelos locales gratuitos sin límite de tiempo; la página de precios describe una prueba con 20 chats con un PDF y ejecuciones limitadas.',
          'Sin verificar: los precios. La página de precios, las preguntas frecuentes y los datos estructurados del sitio muestran cifras distintas, por lo que aquí no se cita ninguna.',
          'Sin verificar: si los chats que usan créditos integrados pasan por un servidor de PapersGPT y qué cubre la política de privacidad de 2024 tras la v2.3.0.',
          'Sin verificar: la empresa o el país detrás del proyecto, las cifras de usuarios y valoraciones que muestra el sitio y las reseñas independientes. No se encontró ninguna, y las páginas comparativas del propio desarrollador no se trataron como independientes.',
          'Sin verificar: la información de versiones. La página de registro de cambios del sitio termina en la v0.6.0 y sus datos estructurados dicen 0.6.0, mientras que las versiones de GitHub llegan a la v2.3.0; esta reseña sigue GitHub.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'PapersGPT frente a las alternativas',
        itemHeadings: true,
        content: [
          '**PapersGPT es un plugin de Zotero; PromptQuorum no lo ha comparado en la práctica con las alternativas.** Las herramientas siguientes son otras herramientas de chat con documentos e investigación del directorio, descritas según sus propias reseñas.',
        ],
        columns: ['Herramienta', 'Según las fuentes'],
        rows: [
          { 'Herramienta': 'PapersGPT', 'Según las fuentes': 'Plugin de Zotero; AGPL-3.0; plan gratuito + de pago' },
          { 'Herramienta': '[SurfSense](/es/power-local-llm/surfsense-review)', 'Según las fuentes': 'App de escritorio; Apache-2.0; agente estilo NotebookLM' },
          { 'Herramienta': '[AnythingLLM](/es/power-local-llm/anythingllm-review)', 'Según las fuentes': 'Escritorio y web; MIT; chat con documentos y RAG' },
          { 'Herramienta': '[Khoj](/es/power-local-llm/khoj-ai-second-brain-review)', 'Según las fuentes': 'Web y escritorio; AGPL-3.0; segundo cerebro personal' },
          { 'Herramienta': '[Recuperación de conocimiento comparada](/es/power-local-llm/local-llm-knowledge-retrieval-compared)', 'Según las fuentes': 'Comparativa de categoría para herramientas de documentos' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿PapersGPT es gratis?',
            a: 'En parte. El código es de código abierto bajo AGPL-3.0 y el desarrollador ofrece un plan gratuito y planes de pago (Basic, Premium, Business) con límites de funciones. Las páginas del desarrollador muestran precios y condiciones del plan gratuito distintos, así que consulta la página de precios antes de fiarte de una cifra. Los modelos en la nube que uses con tu propia clave los factura su proveedor.',
          },
          {
            q: '¿Necesito Zotero para usar PapersGPT?',
            a: 'Sí para el plugin: se instala como archivo .xpi en Zotero 7 a 10. Según la página de MCP del desarrollador, el servidor MCP puede indexar y buscar en una biblioteca de Zotero sin abrir Zotero.',
          },
          {
            q: '¿Cómo instalo PapersGPT?',
            a: 'Instala Zotero, descarga papersgpt-v2.3.0.xpi de la página de versiones de GitHub e instálalo en Zotero como describen el README y la guía Quickstart. PromptQuorum no realizó la instalación.',
          },
          {
            q: '¿PapersGPT funciona sin conexión con modelos locales?',
            a: 'Según el desarrollador, sí: los modelos locales integrados, como Gemma 4, Qwen 3.5 y Mistral 7B, se descargan de Hugging Face y se ejecutan en tu equipo, y la indexación y la búsqueda son locales. También puedes usar Ollama o un endpoint compatible con OpenAI. PromptQuorum no ha probado el uso sin conexión.',
          },
          {
            q: '¿Pueden Claude o Cursor buscar en mi biblioteca de Zotero a través de PapersGPT?',
            a: 'Sí, según el desarrollador. El servidor MCP de Zotero, basado en el paquete DocsAgent, funciona con clientes MCP como Claude Desktop, Claude Code y Cursor. Inicia el núcleo de búsqueda con npx @docsagent/docsagent start o pip install docsagent-mcp y añade el servidor a los ajustes MCP de tu cliente.',
          },
          {
            q: '¿Qué es Literature Radar en PapersGPT?',
            a: 'Según el README, entrega un resumen diario de artículos nuevos sobre los temas a los que te suscribes, de arXiv, PubMed, Semantic Scholar, Europe PMC, Crossref, bioRxiv y medRxiv. Según el desarrollador, las consultas van de tu equipo a esas fuentes sin servidor intermediario. La página de precios sitúa Explore en Basic, y Track en Premium y Business.',
          },
          {
            q: '¿Qué hace AutoPilot?',
            a: 'AutoPilot lee una colección entera con un objetivo de investigación y escribe los hallazgos en notas de Zotero estructuradas; el desarrollador dice que puede funcionar durante la noche con modelos en la nube o locales. La página de precios lo incluye en Premium y Business. PromptQuorum no lo ha ejecutado.',
          },
          {
            q: '¿Qué modelos de IA puede usar PapersGPT?',
            a: 'Según el desarrollador: más de 30 modelos en la nube, tu propia clave de API, un endpoint personalizado compatible con OpenAI, Ollama o modelos locales integrados como Gemma 4, Qwen 3.5 y Mistral 7B, descargados de Hugging Face.',
          },
          {
            q: '¿Puede PapersGPT buscar en toda mi biblioteca de Zotero?',
            a: 'Sí, según el desarrollador: marca «Search entire library» para recuperar pasajes de todos los PDF indexados y obtener una respuesta sintetizada. La página de precios incluye el chat sobre toda la biblioteca desde el plan Basic.',
          },
          {
            q: '¿PapersGPT cita sus fuentes?',
            a: 'El desarrollador afirma que cada respuesta incluye citas que abren el artículo citado con un clic. PromptQuorum no ha comprobado la exactitud de las citas.',
          },
          {
            q: '¿Mis chats se quedan en mi equipo?',
            a: 'El desarrollador afirma que el análisis, la indexación y la búsqueda se ejecutan en local y que los chats van directamente al proveedor de modelos que elijas. La política de privacidad es del 25 de mayo de 2024, anterior a los créditos de IA integrados de la v2.3.0, y las páginas que leyó PromptQuorum no aclaran si esos chats pasan por un servidor de PapersGPT.',
          },
          {
            q: '¿PapersGPT se mantiene activamente?',
            a: 'La versión v2.3.0 salió el 13 de noviembre de 2026 y el último commit en GitHub fue el 16 de noviembre de 2026 (un cambio en el README). La página de changelog del sitio termina en la v0.6.0, así que esta reseña toma la información de versión de GitHub.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**PapersGPT merece una mirada si tus artículos ya están en Zotero y quieres respuestas de IA con citas, búsqueda en toda la biblioteca y seguimiento de artículos en el mismo sitio.**',
          'Sobre el papel cubre mucho: chat con uno o varios PDF, búsqueda en la biblioteca, Literature Radar, AutoPilot, modelos en la nube y locales, Ollama, un servidor MCP y versiones frecuentes (v2.3.0 el 13 de noviembre de 2026, con un commit el 16 de noviembre de 2026).',
          'Las contrapartidas son reales. Solo funciona dentro de Zotero, el precio y las condiciones del plan gratuito no están claros en las páginas del desarrollador, la política de privacidad es anterior a los créditos integrados y no se nombra ninguna empresa ni país. PromptQuorum no ha probado el plugin, así que pruébalo con una colección pequeña y un modelo local y comprueba las citas antes de depender de él.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de PapersGPT](https://www.papersgpt.com/en) — funciones, modelos y datos estructurados, revisado el 17 de noviembre de 2026.',
          '[Página de precios](https://www.papersgpt.com/en/pricing) — planes, límites de funciones, prueba y créditos, revisada el 17 de noviembre de 2026.',
          '[Preguntas frecuentes](https://www.papersgpt.com/en/faq) — afirmaciones sobre el plan gratuito y los modelos locales, revisadas el 17 de noviembre de 2026.',
          '[Página del servidor MCP de Zotero](https://www.papersgpt.com/en/mcpserver) — comandos de instalación de MCP, revisada el 17 de noviembre de 2026.',
          '[Política de privacidad](https://www.papersgpt.com/en/privacy/privacy_policy) — tratamiento de datos, en vigor desde el 25 de mayo de 2024, revisada el 17 de noviembre de 2026.',
          '[Términos y condiciones](https://www.papersgpt.com/en/terms/terms_and_conditions) — leídos en busca de datos de empresa o país, revisados el 17 de noviembre de 2026.',
          '[Página de registro de cambios](https://www.papersgpt.com/resources/changelog) — historial de versiones que muestra el sitio, revisada el 17 de noviembre de 2026.',
          '[Repositorio de GitHub](https://github.com/papersgpt/papersgpt-for-zotero) — repositorio, licencia, fecha de creación y último commit, revisado el 17 de noviembre de 2026.',
          '[README](https://github.com/papersgpt/papersgpt-for-zotero#readme) — funciones, compatibilidad, quickstart, MCP y skill, revisado el 17 de noviembre de 2026.',
          '[Versión papersgpt-v2.3.0](https://github.com/papersgpt/papersgpt-for-zotero/releases/tag/papersgpt-v2.3.0) — última versión, su fecha y el archivo .xpi, revisada el 17 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de SurfSense](/es/power-local-llm/surfsense-review) — una alternativa de código abierto a NotebookLM para escritorio que investiga y edita tus documentos en tu propio equipo.',
          '[Reseña de AnythingLLM](/es/power-local-llm/anythingllm-review) — un espacio de trabajo de chat con documentos y RAG con almacén vectorial integrado.',
          '[Reseña de Khoj](/es/power-local-llm/khoj-ai-second-brain-review) — un segundo cerebro personal con IA que se sincroniza con Obsidian y Notion.',
          '[Recuperación de conocimiento con LLM locales comparada](/es/power-local-llm/local-llm-knowledge-retrieval-compared) — la comparativa de categoría para herramientas de documentos y conocimiento.',
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
    theme: 'RAG & Document Chat',
    heroImage: '/images/papersgpt-review-hero-fr.webp',
    title: 'Avis sur PapersGPT : plugin IA pour Zotero, chat PDF, recherche dans la bibliothèque et MCP',
    seoTitle: 'Avis sur PapersGPT : plugin IA pour Zotero et MCP',
    intro:
      'PapersGPT est un plugin open source (AGPL-3.0) pour le gestionnaire de références Zotero qui dialogue avec des PDF, recherche dans toute la bibliothèque, suit les nouveaux articles et enregistre les résultats sous forme de notes Zotero. Cet avis s\'appuie sur le site du développeur, le dépôt GitHub, sa page de versions et sa politique de confidentialité, consultés le 17 novembre 2026. PromptQuorum n\'a pas testé le plugin en pratique.',
    metaDescription:
      'Plugin Zotero AGPL-3.0 : chat PDF, recherche dans la bibliothèque, suivi d\'articles, modèles cloud ou locaux et MCP. Installation et confidentialité.',
    twitterDescription:
      'PapersGPT ajoute à Zotero le chat PDF, la recherche dans toute la bibliothèque et le suivi d\'articles, avec modèles cloud ou locaux et serveur MCP. Open source, freemium.',
    audience:
      'Chercheurs et étudiants qui gèrent leurs articles dans Zotero, développeurs qui relient une bibliothèque d\'articles à des clients MCP et équipes qui évaluent des outils d\'IA pour le travail bibliographique',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PapersGPT',
    targetKeywords: [
      'avis PapersGPT',
      'plugin IA Zotero',
      'discuter avec un PDF dans Zotero',
      'serveur MCP Zotero',
      'recherche dans toute la bibliothèque Zotero',
      'installer PapersGPT',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**PapersGPT est un plugin d\'IA open source (AGPL-3.0) pour Zotero qui dialogue avec un ou plusieurs PDF, recherche dans toute la bibliothèque et suit les nouveaux articles.** Il s\'installe sous forme de fichier .xpi dans Zotero 7 à 10, fonctionne avec des modèles cloud, votre propre clé d\'API, Ollama ou des modèles locaux intégrés, et inclut un serveur MCP pour des clients comme Claude Desktop ou Cursor. Il propose une offre gratuite et des forfaits payants ; PromptQuorum ne l\'a pas testé.',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce que PapersGPT et à qui s\'adresse-t-il ?',
        answer:
          'PapersGPT est un plugin qui ajoute le chat IA et la recherche au gestionnaire de références Zotero. Il convient aux chercheurs et aux étudiants qui rangent déjà leurs articles dans Zotero et veulent des réponses avec des citations renvoyant à l\'article source.',
        bullets: [
          'Plugin Zotero (.xpi) pour Zotero 7 à 10 sous macOS, Windows et Linux.',
          'Prix : offre gratuite et forfaits payants ; licence AGPL-3.0.',
          'Chat avec un PDF, plusieurs PDF ou toute la bibliothèque ; Literature Radar suit les nouveaux articles ; AutoPilot lit une collection par lots et l\'enregistre dans des notes Zotero.',
          'Selon le développeur, fonctionne avec plus de 30 modèles cloud, votre propre clé, Ollama ou des modèles locaux intégrés.',
          'La politique de confidentialité date de 2024 ; vérifiez le flux de données des crédits intégrés avant d\'utiliser des articles confidentiels.',
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
            text: 'PapersGPT vous permet de discuter avec des PDF, de rechercher dans toute votre bibliothèque et de suivre les nouveaux articles depuis Zotero, avec des modèles d\'IA cloud ou locaux.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-le comme un assistant de recherche IA installé dans Zotero : selon le développeur, il lit les PDF que vous avez déjà rassemblés et répond à vos questions avec des citations. Le modèle d\'IA peut être un service cloud, votre propre clé ou un modèle exécuté sur votre ordinateur.',
          },
        ],
        items: [
          'Open source sous AGPL-3.0 ; il existe une offre gratuite et des forfaits payants, et les pages du développeur affichent des prix différents, donc consultez la page des tarifs avant d\'acheter.',
          'S\'installe sous forme de fichier .xpi dans Zotero 7 à 10 (macOS, Windows, Linux) ; Zotero doit déjà être installé.',
          'Modèles (selon le développeur) : plus de 30 modèles cloud, votre propre clé d\'API, un point d\'accès compatible OpenAI, Ollama ou des modèles locaux intégrés téléchargés depuis Hugging Face.',
          'Un serveur MCP relie votre bibliothèque Zotero à Claude Desktop, Claude Code, Cursor et d\'autres clients MCP.',
          'PromptQuorum n\'a pas testé le plugin. La politique de confidentialité date de mai 2024 et précède les crédits d\'IA intégrés ajoutés dans la v2.3.0.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Le développeur affirme que l\'analyse, l\'indexation et la recherche s\'exécutent en local. Les pages lues par PromptQuorum ne disent pas si les chats qui utilisent les crédits intégrés passent par un serveur PapersGPT.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Présentation',
        content: [
          '**PapersGPT est un plugin Zotero qui ajoute aux PDF de votre bibliothèque le chat IA, la recherche globale, le suivi d\'articles et la lecture par lots.**',
          'Le projet est publié par la « PapersGPT Team » sous AGPL-3.0 (GitHub : papersgpt/papersgpt-for-zotero). La dernière version, la v2.3.0, est parue le 13 novembre 2026 et le dernier commit du dépôt date du 16 novembre 2026 (une modification du README) ; le développement est donc actif et aucun avertissement de projet abandonné ne s\'applique. Le dépôt a été créé en novembre 2024.',
          'Le développeur présente ces fonctions principales : recherche dans toute la bibliothèque ; Literature Radar, qui livre chaque jour un résumé des nouveaux articles d\'arXiv, PubMed, Semantic Scholar, Europe PMC, Crossref, bioRxiv et medRxiv ; chat avec plusieurs PDF qui compare méthodes et résultats ; et AutoPilot, qui lit toute une collection et écrit des notes Zotero structurées. Chaque réponse porterait des citations qui mènent d\'un clic à l\'article cité.',
          'Les forfaits conditionnent les fonctions. D\'après la page des tarifs, l\'usage sans licence comprend 20 chats d\'essai avec un seul PDF et le chat avec jusqu\'à 3 PDF ; Basic ajoute le chat sur toute la bibliothèque et Literature Radar Explore ; Premium et Business ajoutent AutoPilot et Literature Radar Track. Des packs de recharge de crédits de chat IA existent aussi.',
          'Ces descriptions sont des déclarations du développeur. PromptQuorum n\'a pas exécuté le plugin et n\'a vérifié ni la qualité des réponses, ni l\'exactitude des citations, ni les chiffres de rapidité publiés par le développeur.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Comment l\'obtenir',
        content: [
          '**Vous installez PapersGPT sous forme de fichier de plugin dans Zotero ; le serveur MCP de Zotero est un paquet npm ou Python distinct.**',
          'Le README indique de télécharger le fichier .xpi depuis la page de versions GitHub et de l\'installer dans Zotero ; le guide Quickstart du développeur détaille les étapes. À la première utilisation, vous choisissez un modèle : l\'un des modèles cloud avec l\'essai intégré (d\'après le README, aucune clé d\'API n\'est nécessaire pour commencer), votre propre clé ou un modèle local intégré.',
        ],
        columns: ['Voie', 'Comment l\'obtenir'],
        rows: [
          { 'Voie': '[Plugin Zotero](https://github.com/papersgpt/papersgpt-for-zotero/releases/tag/papersgpt-v2.3.0)', 'Comment l\'obtenir': 'Télécharger papersgpt-v2.3.0.xpi, installer dans Zotero 7–10' },
          { 'Voie': '[Guide Quickstart](https://www.papersgpt.com/quickstart)', 'Comment l\'obtenir': 'Étapes d\'installation et de prise en main du développeur' },
          { 'Voie': '[Serveur MCP (npm)](https://www.papersgpt.com/en/mcpserver)', 'Comment l\'obtenir': 'npx @docsagent/docsagent start (Node.js)' },
          { 'Voie': '[Serveur MCP (Python)](https://www.papersgpt.com/en/mcpserver)', 'Comment l\'obtenir': 'pip install docsagent-mcp (Python 3.10+)' },
        ],
        note: 'PapersGPT est un plugin et non une application autonome ; il nécessite donc Zotero. Selon la page MCP, le noyau de recherche peut fonctionner sans ouvrir Zotero. PromptQuorum n\'a ni installé ni analysé le fichier .xpi.',
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise',
        content: [
          '**PapersGPT nécessite Zotero 7, 8, 9 ou 10 sous macOS, Windows ou Linux ; les besoins matériels dépendent du modèle local choisi.**',
          'La liste de compatibilité provient du README. Aucun minimum de RAM, de disque ou de GPU n\'est publié. PromptQuorum n\'a pas mesuré la consommation de ressources.',
        ],
        columns: ['Élément', 'Valeur indiquée'],
        rows: [
          { 'Élément': 'Zotero', 'Valeur indiquée': '7, 8, 9 ou 10 (README)' },
          { 'Élément': 'Système d\'exploitation', 'Valeur indiquée': 'macOS, Windows, Linux' },
          { 'Élément': 'Fichier du plugin', 'Valeur indiquée': '.xpi installé dans Zotero' },
          { 'Élément': 'Modèles cloud', 'Valeur indiquée': 'Internet ; essai intégré ou clé propre' },
          { 'Élément': 'Modèles locaux', 'Valeur indiquée': 'Téléchargement en un clic depuis Hugging Face' },
          { 'Élément': 'RAM / GPU / disque', 'Valeur indiquée': 'Non indiqué ; dépend du modèle' },
          { 'Élément': 'Serveur MCP', 'Valeur indiquée': 'Node.js (npx) ou Python 3.10+' },
        ],
        note: 'D\'après la page des tarifs, les crédits d\'IA intégrés nécessitent au moins PapersGPT v2.3.0. Selon le développeur, les modèles locaux s\'exécutent sur votre ordinateur sans clé ; un modèle cloud nécessite un accès réseau.',
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**Le cœur de PapersGPT est le chat IA sur vos PDF Zotero, entouré de recherche, de suivi et de connexions pour agents.** Tous les points ci-dessous sont des déclarations du développeur issues du site et du README.',
        ],
        items: [
          'Chat avec un seul PDF depuis la visionneuse PDF de Zotero, ou avec plusieurs PDF ou une collection entière sélectionnés dans la fenêtre principale.',
          'Recherche dans toute la bibliothèque : cochez « Search entire library » pour récupérer des passages dans tous les PDF indexés et obtenir une réponse unique.',
          'Literature Radar : vous vous abonnez à des sujets et recevez chaque jour un résumé des nouveaux articles d\'arXiv, PubMed, Semantic Scholar, Europe PMC, Crossref, bioRxiv et medRxiv ; d\'après le README, les requêtes partent de votre machine vers ces sources sans serveur relais.',
          'AutoPilot : vous définissez un objectif de recherche, il lit une collection et écrit les résultats dans des notes Zotero structurées ; selon le développeur, il peut tourner pendant la nuit avec des modèles cloud ou locaux.',
          'Citations qui ouvrent l\'article cité d\'un clic, invites intégrées comme Summary, Background et Literature review, et enregistrement des enseignements dans les notes Zotero.',
          'Choix du modèle : plus de 30 modèles cloud, votre propre clé d\'API, un point d\'accès compatible OpenAI, Ollama ou des modèles locaux intégrés (Gemma 4, Qwen 3.5, Mistral 7B et d\'autres) téléchargés depuis Hugging Face.',
          'Un serveur MCP Zotero, fondé sur le paquet DocsAgent, pour Claude Desktop, Claude Code, Cursor et d\'autres clients MCP ; selon le développeur, il peut indexer et interroger une bibliothèque sans ouvrir Zotero.',
          'Un fichier SKILL d\'agent que les utilisateurs d\'OpenClaw, OpenAI, Claude, Cursor, Claude Code, CodeX et Gemini CLI peuvent charger, lié depuis le README.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**Le développeur affirme que l\'analyse, l\'indexation et la recherche s\'exécutent sur votre ordinateur et que les chats vont directement au fournisseur de modèle choisi, mais la politique de confidentialité date de 2024 et ne décrit pas les crédits d\'IA intégrés.**',
          'D\'après la politique de confidentialité (en vigueur depuis le 25 mai 2024), l\'application ne collecte ni clés d\'API, ni messages de chat, ni historique d\'utilisation, qui restent sur votre ordinateur, et les requêtes partent directement vers les API d\'OpenAI, d\'Anthropic ou de Google sans serveur intermédiaire. L\'utilisation ne demande aucune inscription. La politique indique que des journaux de plantage anonymes sont collectés pour améliorer l\'application et que l\'achat d\'une licence collecte votre adresse e-mail.',
          'Selon la politique, le site utilise Vercel pour l\'hébergement et Vercel Analytics, et Lemon Squeezy traite les paiements. Le développeur décrit les modèles locaux associés au traitement local des documents comme un moyen de garder les données sur l\'appareil.',
          'Les crédits d\'IA intégrés (ajoutés dans la v2.3.0, sans clé d\'API) sont postérieurs à la politique. Les pages lues par PromptQuorum ne disent pas si ces chats passent par un serveur PapersGPT ; vérifiez-le avant d\'utiliser des articles confidentiels ou non publiés. La politique et les conditions ne nomment ni société, ni adresse, ni droit applicable ; le contact est une adresse e-mail.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        content: [
          '**PapersGPT convient aux personnes qui rangent leurs articles dans Zotero et veulent des réponses d\'IA avec citations au même endroit.**',
        ],
        items: [
          'Chercheurs et étudiants qui veulent des réponses citées sur un article, une collection ou toute la bibliothèque.',
          'Personnes qui veulent suivre les nouveaux articles d\'un sujet dans leur gestionnaire de références.',
          'Développeurs et utilisateurs d\'agents qui veulent qu\'un client MCP interroge une bibliothèque Zotero.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        content: [
          '**PapersGPT convient mal à certaines situations et plusieurs détails restent non vérifiés.**',
        ],
        items: [
          'Ne convient pas : à qui n\'utilise pas Zotero. PapersGPT en est un plugin, pas un lecteur autonome.',
          'Ne convient pas : à qui veut un prix clair. Les pages du développeur affichent des prix et des conditions d\'offre gratuite différents.',
          'Ne convient pas : aux organisations qui ne peuvent pas utiliser de logiciel sous licence AGPL. L\'AGPL-3.0 impose de partager le code source des versions modifiées proposées par réseau ; demandez à votre service juridique.',
          'Non vérifié : qualité des réponses, exactitude des citations et résultats d\'AutoPilot. PromptQuorum n\'a pas exécuté le plugin.',
          'Non vérifié : la rapidité et la consommation de ressources. PromptQuorum ne les a pas mesurées et n\'a trouvé aucun chiffre indépendant.',
          'Non vérifié : les conditions de l\'offre gratuite. La FAQ décrit des modèles locaux gratuits sans limite de durée ; la page des tarifs décrit un essai de 20 chats avec un seul PDF et des exécutions limitées.',
          'Non vérifié : les prix. La page des tarifs, la FAQ et les données structurées du site affichent des montants différents ; aucun n\'est donc cité ici.',
          'Non vérifié : si les chats qui utilisent les crédits intégrés passent par un serveur PapersGPT, et ce que couvre la politique de confidentialité de 2024 après la v2.3.0.',
          'Non vérifié : la société ou le pays derrière le projet, les nombres d\'utilisateurs et les notes affichés par le site, et les avis indépendants. Aucun n\'a été trouvé, et les pages comparatives du développeur n\'ont pas été considérées comme indépendantes.',
          'Non vérifié : les informations de version. La page de journal des modifications du site s\'arrête à la v0.6.0 et ses données structurées indiquent 0.6.0, alors que les versions GitHub atteignent la v2.3.0 ; cet avis suit GitHub.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'PapersGPT face aux alternatives',
        itemHeadings: true,
        content: [
          '**PapersGPT est un plugin Zotero ; PromptQuorum ne l\'a pas comparé en pratique aux alternatives.** Les outils ci-dessous sont d\'autres outils de chat avec documents et de recherche de l\'annuaire, décrits d\'après leurs propres fiches.',
        ],
        columns: ['Outil', 'Selon les sources'],
        rows: [
          { 'Outil': 'PapersGPT', 'Selon les sources': 'Plugin Zotero ; AGPL-3.0 ; offre gratuite + forfaits' },
          { 'Outil': '[SurfSense](/fr/power-local-llm/surfsense-review)', 'Selon les sources': 'Appli de bureau ; Apache-2.0 ; agent de type NotebookLM' },
          { 'Outil': '[AnythingLLM](/fr/power-local-llm/anythingllm-review)', 'Selon les sources': 'Bureau et web ; MIT ; chat de documents et RAG' },
          { 'Outil': '[Khoj](/fr/power-local-llm/khoj-ai-second-brain-review)', 'Selon les sources': 'Web et bureau ; AGPL-3.0 ; second cerveau personnel' },
          { 'Outil': '[Récupération de connaissances comparée](/fr/power-local-llm/local-llm-knowledge-retrieval-compared)', 'Selon les sources': 'Comparatif de catégorie pour les outils de documents' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'PapersGPT est-il gratuit ?',
            a: 'En partie. Le code est open source sous AGPL-3.0 et le développeur propose une offre gratuite ainsi que des forfaits payants (Basic, Premium, Business) avec des limites de fonctions. Les pages du développeur affichent des prix et des conditions d\'offre gratuite différents ; consultez la page des tarifs avant de vous fier à un montant. Les modèles cloud utilisés avec votre propre clé sont facturés par leur fournisseur.',
          },
          {
            q: 'Ai-je besoin de Zotero pour utiliser PapersGPT ?',
            a: 'Oui pour le plugin : il s\'installe sous forme de fichier .xpi dans Zotero 7 à 10. Selon la page MCP du développeur, le serveur MCP peut indexer et interroger une bibliothèque Zotero sans ouvrir Zotero.',
          },
          {
            q: 'Comment installer PapersGPT ?',
            a: 'Installez Zotero, téléchargez papersgpt-v2.3.0.xpi depuis la page de versions GitHub et installez-le dans Zotero comme le décrivent le README et le guide Quickstart. PromptQuorum n\'a pas réalisé l\'installation.',
          },
          {
            q: 'PapersGPT fonctionne-t-il hors ligne avec des modèles locaux ?',
            a: 'Selon le développeur, oui : les modèles locaux intégrés, comme Gemma 4, Qwen 3.5 et Mistral 7B, se téléchargent depuis Hugging Face et s\'exécutent sur votre ordinateur, et l\'indexation comme la recherche sont locales. Vous pouvez aussi utiliser Ollama ou un point d\'accès compatible OpenAI. PromptQuorum n\'a pas testé l\'usage hors ligne.',
          },
          {
            q: 'Claude ou Cursor peuvent-ils interroger ma bibliothèque Zotero via PapersGPT ?',
            a: 'Oui, selon le développeur. Le serveur MCP Zotero, fondé sur le paquet DocsAgent, fonctionne avec des clients MCP comme Claude Desktop, Claude Code et Cursor. Démarrez le noyau de recherche avec npx @docsagent/docsagent start ou pip install docsagent-mcp, puis ajoutez le serveur aux paramètres MCP de votre client.',
          },
          {
            q: 'Qu\'est-ce que Literature Radar dans PapersGPT ?',
            a: 'D\'après le README, il livre chaque jour un résumé des nouveaux articles sur les sujets auxquels vous vous abonnez, issus d\'arXiv, PubMed, Semantic Scholar, Europe PMC, Crossref, bioRxiv et medRxiv. Selon le développeur, les requêtes partent de votre machine vers ces sources sans serveur relais. La page des tarifs place Explore dans Basic, et Track dans Premium et Business.',
          },
          {
            q: 'Que fait AutoPilot ?',
            a: 'AutoPilot lit toute une collection en vue d\'un objectif de recherche et écrit les résultats dans des notes Zotero structurées ; le développeur affirme qu\'il peut tourner pendant la nuit avec des modèles cloud ou locaux. La page des tarifs le range sous Premium et Business. PromptQuorum ne l\'a pas exécuté.',
          },
          {
            q: 'Quels modèles d\'IA PapersGPT peut-il utiliser ?',
            a: 'Selon le développeur : plus de 30 modèles cloud, votre propre clé API, un point d\'accès personnalisé compatible OpenAI, Ollama, ou des modèles locaux intégrés comme Gemma 4, Qwen 3.5 et Mistral 7B, téléchargés depuis Hugging Face.',
          },
          {
            q: 'PapersGPT peut-il rechercher dans toute ma bibliothèque Zotero ?',
            a: 'Oui, selon le développeur : cochez « Search entire library » pour récupérer des passages dans tous les PDF indexés et obtenir une réponse unique. La page des tarifs indique le chat sur toute la bibliothèque à partir du forfait Basic.',
          },
          {
            q: 'PapersGPT cite-t-il ses sources ?',
            a: 'Le développeur affirme que chaque réponse comporte des citations qui ouvrent d\'un clic l\'article cité. PromptQuorum n\'a pas vérifié l\'exactitude des citations.',
          },
          {
            q: 'Mes conversations restent-elles sur mon ordinateur ?',
            a: 'Le développeur indique que l\'analyse, l\'indexation et la recherche s\'exécutent en local et que les conversations vont directement au fournisseur de modèle que vous choisissez. La politique de confidentialité date du 25 mai 2024, avant les crédits d\'IA intégrés de la v2.3.0, et les pages lues par PromptQuorum ne précisent pas si ces conversations transitent par un serveur PapersGPT.',
          },
          {
            q: 'PapersGPT est-il activement maintenu ?',
            a: 'La version v2.3.0 est sortie le 13 novembre 2026, et le dernier commit sur GitHub date du 16 novembre 2026 (une modification du README). La page de changelog du site s\'arrête à la v0.6.0 ; cette fiche tire donc ses informations de version de GitHub.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**PapersGPT mérite un coup d\'œil si vos articles sont déjà dans Zotero et que vous voulez au même endroit des réponses d\'IA avec citations, une recherche globale et le suivi d\'articles.**',
          'Sur le papier, il couvre beaucoup : chat avec un ou plusieurs PDF, recherche dans la bibliothèque, Literature Radar, AutoPilot, modèles cloud et locaux, Ollama, un serveur MCP et des versions fréquentes (v2.3.0 le 13 novembre 2026, avec un commit le 16 novembre 2026).',
          'Les compromis sont réels. Il ne fonctionne que dans Zotero, le prix et les conditions de l\'offre gratuite sont flous d\'une page du développeur à l\'autre, la politique de confidentialité précède les crédits intégrés et aucune société ni aucun pays n\'est nommé. PromptQuorum n\'a pas testé le plugin : essayez-le sur une petite collection avec un modèle local et vérifiez les citations avant de vous y fier.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de PapersGPT](https://www.papersgpt.com/en) — fonctions, modèles et données structurées, consulté le 17 novembre 2026.',
          '[Page des tarifs](https://www.papersgpt.com/en/pricing) — forfaits, limites de fonctions, essai et crédits, consultée le 17 novembre 2026.',
          '[FAQ](https://www.papersgpt.com/en/faq) — déclarations sur l\'offre gratuite et les modèles locaux, consultée le 17 novembre 2026.',
          '[Page du serveur MCP Zotero](https://www.papersgpt.com/en/mcpserver) — commandes d\'installation MCP, consultée le 17 novembre 2026.',
          '[Politique de confidentialité](https://www.papersgpt.com/en/privacy/privacy_policy) — traitement des données, en vigueur depuis le 25 mai 2024, consultée le 17 novembre 2026.',
          '[Conditions générales](https://www.papersgpt.com/en/terms/terms_and_conditions) — lues pour y chercher société ou pays, consultées le 17 novembre 2026.',
          '[Page du journal des modifications](https://www.papersgpt.com/resources/changelog) — historique des versions affiché par le site, consultée le 17 novembre 2026.',
          '[Dépôt GitHub](https://github.com/papersgpt/papersgpt-for-zotero) — dépôt, licence, date de création et dernier commit, consulté le 17 novembre 2026.',
          '[README](https://github.com/papersgpt/papersgpt-for-zotero#readme) — fonctions, compatibilité, quickstart, MCP et skill, consulté le 17 novembre 2026.',
          '[Version papersgpt-v2.3.0](https://github.com/papersgpt/papersgpt-for-zotero/releases/tag/papersgpt-v2.3.0) — dernière version, sa date et le fichier .xpi, consultée le 17 novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Avis sur SurfSense](/fr/power-local-llm/surfsense-review) — une alternative open source de bureau à NotebookLM qui analyse et modifie vos documents sur votre propre machine.',
          '[Avis sur AnythingLLM](/fr/power-local-llm/anythingllm-review) — un espace de travail de chat de documents et de RAG avec base vectorielle intégrée.',
          '[Avis sur Khoj](/fr/power-local-llm/khoj-ai-second-brain-review) — un second cerveau personnel IA qui se synchronise avec Obsidian et Notion.',
          '[Récupération de connaissances avec des LLM locaux comparée](/fr/power-local-llm/local-llm-knowledge-retrieval-compared) — le comparatif de catégorie pour les outils de documents et de connaissances.',
          '[Annuaire des logiciels de LLM locaux](/fr/directory) — le catalogue complet des outils d\'IA locale.',
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
    theme: 'RAG & Document Chat',
    heroImage: '/images/papersgpt-review-hero-ja.webp',
    title: 'PapersGPTレビュー：PDFチャット、ライブラリ検索、MCP対応のZotero用AIプラグイン',
    seoTitle: 'PapersGPTレビュー：Zotero用AIプラグインとMCP',
    intro:
      'PapersGPTは、文献管理ソフトZotero向けのオープンソース（AGPL-3.0）プラグインです。PDFとのチャット、ライブラリ全体の検索、新着論文の追跡、結果のZoteroノート保存ができます。本レビューは、開発元のWebサイト、GitHubリポジトリ、リリースページ、プライバシーポリシーを2026年11月17日に確認した内容に基づきます。PromptQuorumはこのプラグインを実機で試していません。',
    metaDescription:
      'PapersGPTはPDFチャット、ライブラリ全体検索、論文追跡ができるAGPL-3.0のZoteroプラグイン。クラウド／ローカルモデルとMCPに対応。導入方法とプライバシーを解説。',
    twitterDescription:
      'PapersGPTはZoteroにPDFチャット、ライブラリ全体検索、論文追跡を追加。クラウド／ローカルモデルとMCPサーバーに対応。オープンソース、フリーミアム。',
    audience:
      'Zoteroで論文を管理する研究者や学生、論文ライブラリをMCPクライアントにつなぐ開発者、文献調査向けAIツールを検討するチーム',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PapersGPT',
    targetKeywords: [
      'PapersGPT レビュー',
      'Zotero AIプラグイン',
      'Zotero PDFチャット',
      'Zotero MCPサーバー',
      'Zotero ライブラリ全体検索',
      'PapersGPT インストール',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**PapersGPTは、1つまたは複数のPDFとのチャット、ライブラリ全体の検索、新着論文の追跡ができるZotero用のオープンソース（AGPL-3.0）AIプラグインです。**Zotero 7〜10の中に.xpiファイルとして導入し、クラウドモデル、自分のAPIキー、Ollama、内蔵ローカルモデルで動作します。Claude DesktopやCursorなどのクライアント向けMCPサーバーも含みます。無料プランと有料プランがあり、PromptQuorumは試していません。',
    quickAnswerTop: {
      ja: {
        question: 'PapersGPTとは何で、誰に向いていますか？',
        answer:
          'PapersGPTは、文献管理ソフトZoteroにAIチャットと検索を加えるプラグインです。すでに論文をZoteroで管理していて、出典の論文にたどれる引用付きの回答がほしい研究者や学生に向いています。',
        bullets: [
          'macOS、Windows、LinuxのZotero 7〜10向けプラグイン（.xpi）。',
          '価格：無料プランと有料プラン。ライセンスはAGPL-3.0。',
          '1つのPDF、複数のPDF、ライブラリ全体とチャット。Literature Radarが新着論文を追跡し、AutoPilotがコレクションを一括で読み込みZoteroノートに保存。',
          '開発元によると、30以上のクラウドモデル、自分のキー、Ollama、内蔵ローカルモデルで動作。',
          'プライバシーポリシーは2024年のものです。機密性の高い論文を使う前に、内蔵クレジットのデータの流れを確認してください。',
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
            text: 'PapersGPTは、Zotero内でPDFとのチャット、ライブラリ全体の検索、新着論文の追跡ができ、クラウドまたはローカルのAIモデルを使えます。',
          },
          {
            type: 'plain-terms',
            text: 'Zoteroの中に常駐するAI研究アシスタントと考えてください。開発元によると、すでに集めたPDFを読み、引用付きで質問に答えます。AIモデルは、クラウドサービス、自分のキー、または自分のPCで動くモデルから選べます。',
          },
        ],
        items: [
          'AGPL-3.0のオープンソースです。無料プランと有料プランがありますが、開発元のページごとに価格が異なるため、購入前に料金ページを確認してください。',
          'Zotero 7〜10（macOS、Windows、Linux）の中に.xpiファイルとして導入します。Zoteroは事前にインストールが必要です。',
          'モデル（開発元の説明）：30以上のクラウドモデル、自分のAPIキー、OpenAI互換のカスタムエンドポイント、Ollama、Hugging Faceから取得する内蔵ローカルモデル。',
          'MCPサーバーが、ZoteroライブラリをClaude Desktop、Claude Code、Cursorなどのクライアントにつなぎます。',
          'PromptQuorumはこのプラグインを試していません。プライバシーポリシーは2024年5月付で、v2.3.0で加わった内蔵AIクレジットより前のものです。',
        ],
        callouts: [
          {
            type: 'note',
            text: '開発元は、解析・インデックス作成・検索はローカルで動くとしています。内蔵クレジットを使うチャットがPapersGPTのサーバーを経由するかどうかは、PromptQuorumが読んだページには記載がありません。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**PapersGPTは、ライブラリ内のPDFに、AIチャット、ライブラリ全体検索、論文追跡、一括読み込みを加えるZoteroプラグインです。**',
          'プロジェクトは「PapersGPT Team」がAGPL-3.0で公開しています（GitHub：papersgpt/papersgpt-for-zotero）。最新リリースのv2.3.0は2026年11月13日に公開され、リポジトリの最新コミットは2026年11月16日（READMEの変更）です。開発は継続しており、放置プロジェクトの警告は該当しません。リポジトリは2024年11月に作成されました。',
          '開発元が挙げる主な機能は次のとおりです。全PDFを対象にしたライブラリ全体検索。arXiv、PubMed、Semantic Scholar、Europe PMC、Crossref、bioRxiv、medRxivの新着論文を毎日まとめるLiterature Radar。手法や結果を比べる複数PDFチャット。コレクション全体を読んで構造化したZoteroノートを書くAutoPilot。すべての回答に、引用元の論文へ移動できる引用が付くとされています。',
          'プランによって使える機能が変わります。料金ページによると、ライセンスなしでは1つのPDFとのお試しチャット20回と、最大3つのPDFとのチャットが使えます。Basicはライブラリ全体チャットとLiterature Radar Exploreを追加し、PremiumとBusinessはAutoPilotとLiterature Radar Trackを追加します。AIチャットクレジットの追加パックもあります。',
          'これらは開発元の説明です。PromptQuorumはプラグインを実行しておらず、回答品質、引用の正確さ、開発元が公表する速度の数値は確認していません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**PapersGPTはZotero内にプラグインファイルとして導入します。Zotero MCPサーバーは別のnpmまたはPythonパッケージです。**',
          'READMEでは、GitHubのリリースページから.xpiファイルをダウンロードしてZoteroに導入するよう案内しています。手順は開発元のQuickstartガイドにあります。初回利用時にモデルを選びます。内蔵トライアルのクラウドモデル（READMEによると開始時にAPIキーは不要）、自分のキー、内蔵ローカルモデルのいずれかです。',
        ],
        columns: ['方法', '入手方法'],
        rows: [
          { '方法': '[Zoteroプラグイン](https://github.com/papersgpt/papersgpt-for-zotero/releases/tag/papersgpt-v2.3.0)', '入手方法': 'papersgpt-v2.3.0.xpiをダウンロードしZotero 7〜10に導入' },
          { '方法': '[Quickstartガイド](https://www.papersgpt.com/quickstart)', '入手方法': '開発元の導入・初回利用の手順' },
          { '方法': '[MCPサーバー（npm）](https://www.papersgpt.com/en/mcpserver)', '入手方法': 'npx @docsagent/docsagent start（Node.js）' },
          { '方法': '[MCPサーバー（Python）](https://www.papersgpt.com/en/mcpserver)', '入手方法': 'pip install docsagent-mcp（Python 3.10+）' },
        ],
        note: 'PapersGPTは単体アプリではなくプラグインのため、Zoteroが必要です。MCPページによると、検索コアはZoteroを開かずに動かせます。PromptQuorumは.xpiファイルのインストールもスキャンも行っていません。',
      },
      requirements: {
        id: 'requirements',
        title: '動作要件',
        content: [
          '**PapersGPTにはmacOS、Windows、LinuxのZotero 7、8、9または10が必要です。ハードウェア要件は選ぶローカルモデルによって変わります。**',
          '対応環境の一覧はREADMEに基づきます。RAM、ディスク、GPUの最小値は公表されていません。PromptQuorumはリソース使用量を測定していません。',
        ],
        columns: ['項目', '記載されている内容'],
        rows: [
          { '項目': 'Zotero', '記載されている内容': '7、8、9または10（README）' },
          { '項目': 'OS', '記載されている内容': 'macOS、Windows、Linux' },
          { '項目': 'プラグインファイル', '記載されている内容': 'Zoteroに導入する.xpi' },
          { '項目': 'クラウドモデル', '記載されている内容': 'インターネット。内蔵トライアルまたは自分のキー' },
          { '項目': 'ローカルモデル', '記載されている内容': 'Hugging Faceからワンクリックで取得' },
          { '項目': 'RAM／GPU／ディスク', '記載されている内容': '記載なし。モデルによる' },
          { '項目': 'MCPサーバー', '記載されている内容': 'Node.js（npx）またはPython 3.10+' },
        ],
        note: '料金ページによると、内蔵AIクレジットにはPapersGPT v2.3.0以降が必要です。開発元によると、ローカルモデルは自分のPCで動きキーは不要ですが、クラウドモデルにはネットワーク接続が必要です。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**PapersGPTの中心はZoteroのPDFに対するAIチャットで、その周りに検索、追跡、エージェント連携があります。**以下はすべて、WebサイトとREADMEにある開発元の主張です。',
        ],
        items: [
          'ZoteroのPDFビューアから1つのPDFとチャットするか、メイン画面で選んだ複数のPDFやコレクション全体とチャットします。',
          'ライブラリ全体検索：「Search entire library」をオンにすると、インデックス化したすべてのPDFから該当箇所を取り出し、1つにまとめた回答を返します。',
          'Literature Radar：トピックを登録すると、arXiv、PubMed、Semantic Scholar、Europe PMC、Crossref、bioRxiv、medRxivの新着論文が毎日まとめて届きます。READMEによると、クエリは中継サーバーを介さず自分のPCからこれらのソースへ直接送られます。',
          'AutoPilot：研究目標を設定すると、コレクションを読み込み、結果を構造化したZoteroノートに書き込みます。開発元によると、クラウドモデルでもローカルモデルでも一晩かけて実行できます。',
          '引用元の論文をクリックで開ける引用、Summary、Background、Literature reviewなどの組み込みプロンプト、Zoteroノートへの保存。',
          'モデルの選択：30以上のクラウドモデル、自分のAPIキー、OpenAI互換のカスタムエンドポイント、Ollama、Hugging Faceから取得する内蔵ローカルモデル（Gemma 4、Qwen 3.5、Mistral 7Bなど）。',
          'DocsAgentパッケージをベースにしたZotero MCPサーバー。Claude Desktop、Claude Code、Cursorなどのクライアント向けで、開発元によるとZoteroを開かずにライブラリをインデックス化・検索できます。',
          'OpenClaw、OpenAI、Claude、Cursor、Claude Code、CodeX、Gemini CLIのユーザーが読み込めるエージェント用SKILLファイル（READMEからリンク）。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**開発元は、解析・インデックス作成・検索は自分のPC上で動き、チャットは選んだモデル提供元へ直接送られるとしていますが、プライバシーポリシーは2024年のもので、内蔵AIクレジットには触れていません。**',
          'プライバシーポリシー（2024年5月25日施行）によると、アプリはAPIキー、チャットメッセージ、利用履歴を収集せず、これらは自分のPCに残ります。リクエストは中間サーバーなしでOpenAI、Anthropic、GoogleのAPIへ直接送られます。利用に登録は不要です。ポリシーには、アプリ改善のために匿名のクラッシュログを収集すること、ライセンス購入時にメールアドレスを収集することが書かれています。',
          'ポリシーによると、WebサイトはホスティングにVercelとVercel Analyticsを使い、決済はLemon Squeezyが処理します。開発元は、ローカルモデルとローカルの文書処理により、データはデバイス内にとどまると説明しています。',
          '内蔵AIクレジット（v2.3.0で追加、APIキー不要）はポリシーより新しい機能です。PromptQuorumが読んだページには、これらのチャットがPapersGPTのサーバーを経由するかどうかの記載がないため、機密または未発表の論文を使う前に確認してください。ポリシーと利用規約には会社名、住所、準拠法の記載がなく、連絡先はメールアドレスです。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**PapersGPTは、論文をZoteroで管理し、同じ場所で引用付きのAI回答がほしい人に向いています。**',
        ],
        items: [
          '1本の論文、コレクション、ライブラリ全体について、引用付きの回答がほしい研究者や学生。',
          '文献管理ソフトの中で、特定トピックの新着論文を追跡したい人。',
          'MCPクライアントからZoteroライブラリを検索させたい開発者やエージェント利用者。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        content: [
          '**PapersGPTが合わない場面もあり、未確認の点もいくつか残っています。**',
        ],
        items: [
          '向かない：Zoteroを使わない人。PapersGPTはZotero用のプラグインで、単体のリーダーではありません。',
          '向かない：価格がひとつにはっきりしてほしい人。開発元のページごとに価格や無料プランの条件が異なります。',
          '向かない：AGPLライセンスのソフトを使えない組織。AGPL-3.0では、改変版をネットワーク経由で提供する場合にソースを公開する義務があります。法務部門に確認してください。',
          '未確認：回答品質、引用の正確さ、AutoPilotの結果。PromptQuorumはプラグインを実行していません。',
          '未確認：速度とリソース使用量。PromptQuorumは測定しておらず、独立した数値も見つかっていません。',
          '未確認：無料プランの条件。FAQは期限なしで無料のローカルモデルを説明し、料金ページは1つのPDFとのチャット20回と実行回数の限られたトライアルを説明しています。',
          '未確認：価格。料金ページ、FAQ、サイトの構造化データで金額が異なるため、ここでは金額を記載しません。',
          '未確認：内蔵クレジットを使うチャットがPapersGPTのサーバーを経由するか、およびv2.3.0以降について2024年のプライバシーポリシーが何をカバーするか。',
          '未確認：プロジェクトの背後にある会社や国、サイトに表示されるユーザー数や評価、独立したレビュー。いずれも見つからず、開発元自身の比較ページは独立した情報として扱っていません。',
          '未確認：バージョン情報。サイトの変更履歴ページはv0.6.0で終わり、構造化データも0.6.0ですが、GitHubのリリースはv2.3.0です。本レビューはGitHubに従います。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'PapersGPTと代替ツールの比較',
        itemHeadings: true,
        content: [
          '**PapersGPTはZotero用プラグインです。PromptQuorumは代替ツールと実際に比較していません。**以下はディレクトリ内の他の文書チャット・リサーチツールで、それぞれのレビューに基づいて説明しています。',
        ],
        columns: ['ツール', '情報源での記載'],
        rows: [
          { 'ツール': 'PapersGPT', '情報源での記載': 'Zoteroプラグイン、AGPL-3.0、無料＋有料プラン' },
          { 'ツール': '[SurfSense](/ja/power-local-llm/surfsense-review)', '情報源での記載': 'デスクトップアプリ、Apache-2.0、NotebookLM型エージェント' },
          { 'ツール': '[AnythingLLM](/ja/power-local-llm/anythingllm-review)', '情報源での記載': 'デスクトップとWeb、MIT、文書チャットとRAG' },
          { 'ツール': '[Khoj](/ja/power-local-llm/khoj-ai-second-brain-review)', '情報源での記載': 'Webとデスクトップ、AGPL-3.0、個人のセカンドブレイン' },
          { 'ツール': '[ナレッジ検索の比較](/ja/power-local-llm/local-llm-knowledge-retrieval-compared)', '情報源での記載': '文書ツールのカテゴリ比較' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'PapersGPTは無料ですか？',
            a: '一部は無料です。コードはAGPL-3.0のオープンソースで、開発元は機能に制限のある無料プランと有料プラン（Basic、Premium、Business）を提供しています。開発元のページごとに価格や無料プランの条件が異なるため、金額を信用する前に料金ページを確認してください。自分のキーで使うクラウドモデルの料金は、そのモデル提供元から請求されます。',
          },
          {
            q: 'PapersGPTを使うにはZoteroが必要ですか？',
            a: 'プラグインとして使うには必要です。Zotero 7〜10の中に.xpiファイルとして導入します。開発元のMCPページによると、MCPサーバーはZoteroを開かずにZoteroライブラリをインデックス化・検索できます。',
          },
          {
            q: 'PapersGPTはどうやってインストールしますか？',
            a: 'Zoteroをインストールし、GitHubのリリースページからpapersgpt-v2.3.0.xpiをダウンロードして、READMEとQuickstartの手順どおりにZoteroへ導入します。PromptQuorumはインストールを実行していません。',
          },
          {
            q: 'PapersGPTはローカルモデルでオフライン動作しますか？',
            a: '開発元によると動作します。Gemma 4、Qwen 3.5、Mistral 7Bなどの内蔵ローカルモデルをHugging Faceから取得して自分のPCで動かし、インデックス作成と検索もローカルです。OllamaやOpenAI互換のカスタムエンドポイントも使えます。PromptQuorumはオフライン利用を試していません。',
          },
          {
            q: 'ClaudeやCursorからPapersGPT経由でZoteroライブラリを検索できますか？',
            a: '開発元によると可能です。DocsAgentパッケージをベースにしたZotero MCPサーバーは、Claude Desktop、Claude Code、CursorなどのMCPクライアントで使えます。npx @docsagent/docsagent startまたはpip install docsagent-mcpで検索コアを起動し、クライアントのMCP設定にサーバーを追加します。',
          },
          {
            q: 'PapersGPTのLiterature Radarとは何ですか？',
            a: 'READMEによると、購読したトピックの新着論文を、arXiv、PubMed、Semantic Scholar、Europe PMC、Crossref、bioRxiv、medRxivから毎日のダイジェストとして届ける機能です。開発者によると、クエリはリレーサーバーを介さず、お使いのマシンからこれらのソースへ送られます。料金ページでは、ExploreはBasic、TrackはPremiumとBusinessに含まれています。',
          },
          {
            q: 'AutoPilotは何をしますか？',
            a: 'AutoPilotは、研究目標に沿ってコレクション全体を読み、結果を構造化したZoteroノートに書き込みます。開発者は、クラウドモデルまたはローカルモデルで一晩中実行できると述べています。料金ページではPremiumとBusinessに含まれています。PromptQuorumは実行していません。',
          },
          {
            q: 'PapersGPTはどのAIモデルを使えますか？',
            a: '開発者によると、30以上のクラウドモデル、ご自身のAPIキー、OpenAI互換のカスタムエンドポイント、Ollama、またはHugging Faceから取得する組み込みローカルモデル（Gemma 4、Qwen 3.5、Mistral 7Bなど）です。',
          },
          {
            q: 'PapersGPTはZoteroライブラリ全体を検索できますか？',
            a: 'はい、開発者によると可能です。「Search entire library」をオンにすると、インデックス化したすべてのPDFから該当箇所を取り出し、1つにまとめた回答を返します。料金ページでは、ライブラリ全体のチャットはBasicプラン以上に含まれています。',
          },
          {
            q: 'PapersGPTは出典を示しますか？',
            a: '開発者によると、すべての回答に、クリックで引用元の論文が開く引用が付きます。PromptQuorumは引用の正確さを確認していません。',
          },
          {
            q: 'チャットの内容は自分のコンピューターに残りますか？',
            a: '開発者によると、解析、インデックス作成、検索はローカルで動作し、チャットは選択したモデルプロバイダーに直接送られます。プライバシーポリシーは2024年5月25日付で、v2.3.0の組み込みAIクレジットより前のものです。PromptQuorumが読んだページには、これらのチャットがPapersGPTのサーバーを経由するかどうかは書かれていません。',
          },
          {
            q: 'PapersGPTは活発にメンテナンスされていますか？',
            a: 'v2.3.0は2026年11月13日に公開され、GitHubの最新コミットは2026年11月16日（READMEの変更）でした。サイトの変更履歴ページはv0.6.0で止まっているため、このレビューではバージョン情報をGitHubから取っています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**論文がすでにZoteroにあり、引用付きのAI回答、ライブラリ全体検索、論文追跡を同じ場所で使いたいなら、PapersGPTは試す価値があります。**',
          '仕様上は幅広くカバーしています。1つまたは複数PDFのチャット、ライブラリ全体検索、Literature Radar、AutoPilot、クラウドとローカルのモデル、Ollama、MCPサーバー、頻繁なリリース（2026年11月13日にv2.3.0、2026年11月16日にコミット）です。',
          'トレードオフもあります。Zotero内でしか使えず、価格と無料プランの条件は開発元のページごとに不明確で、プライバシーポリシーは内蔵クレジットより前のもので、会社も国も示されていません。PromptQuorumはプラグインを試していないため、小さなコレクションとローカルモデルで試し、引用を確認してから頼ってください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[PapersGPTのWebサイト](https://www.papersgpt.com/en) — 機能、モデル、構造化データ。2026年11月17日に確認。',
          '[料金ページ](https://www.papersgpt.com/en/pricing) — プラン、機能制限、トライアル、クレジット。2026年11月17日に確認。',
          '[FAQ](https://www.papersgpt.com/en/faq) — 無料プランとローカルモデルに関する記述。2026年11月17日に確認。',
          '[Zotero MCPサーバーのページ](https://www.papersgpt.com/en/mcpserver) — MCPの導入コマンド。2026年11月17日に確認。',
          '[プライバシーポリシー](https://www.papersgpt.com/en/privacy/privacy_policy) — データの扱い、2024年5月25日施行。2026年11月17日に確認。',
          '[利用規約](https://www.papersgpt.com/en/terms/terms_and_conditions) — 会社や国の記載を探すために確認。2026年11月17日に確認。',
          '[変更履歴ページ](https://www.papersgpt.com/resources/changelog) — サイトに表示されるバージョン履歴。2026年11月17日に確認。',
          '[GitHubリポジトリ](https://github.com/papersgpt/papersgpt-for-zotero) — リポジトリ、ライセンス、作成日、最新コミット。2026年11月17日に確認。',
          '[README](https://github.com/papersgpt/papersgpt-for-zotero#readme) — 機能、対応環境、クイックスタート、MCP、スキル。2026年11月17日に確認。',
          '[リリース papersgpt-v2.3.0](https://github.com/papersgpt/papersgpt-for-zotero/releases/tag/papersgpt-v2.3.0) — 最新リリース、その日付、.xpiファイル。2026年11月17日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[SurfSenseレビュー](/ja/power-local-llm/surfsense-review) — 自分のPC上で文書を調査・編集する、オープンソースのデスクトップ版NotebookLM代替。',
          '[AnythingLLMレビュー](/ja/power-local-llm/anythingllm-review) — ベクトルストア内蔵の文書チャット・RAGワークスペース。',
          '[Khojレビュー](/ja/power-local-llm/khoj-ai-second-brain-review) — ObsidianやNotionと同期する個人用AIセカンドブレイン。',
          '[ローカルLLMのナレッジ検索ツール比較](/ja/power-local-llm/local-llm-knowledge-retrieval-compared) — 文書・ナレッジツールのカテゴリ比較。',
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
    theme: 'RAG & Document Chat',
    heroImage: '/images/papersgpt-review-hero-pt.webp',
    title: 'Análise do PapersGPT: plugin de IA para Zotero com chat de PDF, busca na biblioteca e MCP',
    seoTitle: 'Análise do PapersGPT: plugin de IA para Zotero e MCP',
    intro:
      'O PapersGPT é um plugin de código aberto (AGPL-3.0) para o gerenciador de referências Zotero que conversa com PDFs, pesquisa em toda a biblioteca, acompanha artigos novos e salva os resultados como notas do Zotero. Esta análise se baseia no site do desenvolvedor, no repositório do GitHub, na página de versões e na política de privacidade, verificados em 17 de novembro de 2026. A PromptQuorum não testou o plugin na prática.',
    metaDescription:
      'Plugin AGPL-3.0 do Zotero para conversar com PDFs, buscar na biblioteca e acompanhar artigos com modelos na nuvem ou locais e MCP. Instalação, privacidade.',
    twitterDescription:
      'O PapersGPT adiciona ao Zotero chat de PDF, busca em toda a biblioteca e acompanhamento de artigos, com modelos na nuvem ou locais e servidor MCP. Código aberto, freemium.',
    audience:
      'Pesquisadores e estudantes que gerenciam seus artigos no Zotero, desenvolvedores que conectam uma biblioteca de artigos a clientes MCP e equipes que avaliam ferramentas de IA para o trabalho bibliográfico',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PapersGPT',
    targetKeywords: [
      'análise do PapersGPT',
      'plugin de IA para Zotero',
      'conversar com PDF no Zotero',
      'servidor MCP do Zotero',
      'busca em toda a biblioteca do Zotero',
      'instalar PapersGPT',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O PapersGPT é um plugin de IA de código aberto (AGPL-3.0) para o Zotero que conversa com um ou vários PDFs, pesquisa em toda a biblioteca e acompanha artigos novos.** Ele é instalado como arquivo .xpi dentro do Zotero 7 a 10, funciona com modelos na nuvem, sua própria chave de API, Ollama ou modelos locais integrados, e inclui um servidor MCP para clientes como Claude Desktop ou Cursor. Há um plano gratuito e planos pagos, e a PromptQuorum não o testou.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o PapersGPT e para quem ele serve?',
        answer:
          'O PapersGPT é um plugin que adiciona chat com IA e busca ao gerenciador de referências Zotero. Serve para pesquisadores e estudantes que já guardam seus artigos no Zotero e querem respostas com citações que levam ao artigo de origem.',
        bullets: [
          'Plugin do Zotero (.xpi) para Zotero 7 a 10 em macOS, Windows e Linux.',
          'Preço: plano gratuito mais planos pagos; licença AGPL-3.0.',
          'Chat com um PDF, vários PDFs ou toda a biblioteca; o Literature Radar acompanha artigos novos; o AutoPilot lê uma coleção em lote e grava em notas do Zotero.',
          'Segundo o desenvolvedor, funciona com mais de 30 modelos na nuvem, sua própria chave, Ollama ou modelos locais integrados.',
          'A política de privacidade é de 2024; verifique o fluxo de dados dos créditos integrados antes de usar artigos confidenciais.',
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
            text: 'O PapersGPT permite conversar com PDFs, pesquisar em toda a sua biblioteca e acompanhar artigos novos de dentro do Zotero, com modelos de IA na nuvem ou locais.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como um assistente de pesquisa com IA que mora no Zotero: segundo o desenvolvedor, ele lê os PDFs que você já reuniu e responde a perguntas sobre eles com citações. O modelo de IA pode ser um serviço na nuvem, sua própria chave ou um modelo rodando no seu computador.',
          },
        ],
        items: [
          'Código aberto sob AGPL-3.0; há um plano gratuito e planos pagos, e as páginas do desenvolvedor mostram preços diferentes, então confira a página de preços antes de comprar.',
          'É instalado como arquivo .xpi dentro do Zotero 7 a 10 (macOS, Windows, Linux); o Zotero precisa já estar instalado.',
          'Modelos (segundo o desenvolvedor): mais de 30 modelos na nuvem, sua própria chave de API, um endpoint compatível com OpenAI, Ollama ou modelos locais integrados baixados do Hugging Face.',
          'Um servidor MCP conecta sua biblioteca do Zotero ao Claude Desktop, Claude Code, Cursor e outros clientes MCP.',
          'A PromptQuorum não testou o plugin. A política de privacidade é de maio de 2024 e anterior aos créditos de IA integrados adicionados na v2.3.0.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O desenvolvedor afirma que análise, indexação e busca rodam localmente. Se os chats que usam os créditos integrados passam por um servidor do PapersGPT não está documentado nas páginas que a PromptQuorum leu.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O PapersGPT é um plugin do Zotero que adiciona chat com IA, busca em toda a biblioteca, acompanhamento de artigos e leitura em lote aos PDFs da sua biblioteca.**',
          'O projeto é publicado pela "PapersGPT Team" sob AGPL-3.0 (GitHub: papersgpt/papersgpt-for-zotero). A versão mais recente, a v2.3.0, saiu em 13 de novembro de 2026 e o último commit do repositório é de 16 de novembro de 2026 (uma alteração no README); portanto o desenvolvimento continua e não se aplica nenhum aviso de projeto abandonado. O repositório foi criado em novembro de 2024.',
          'O desenvolvedor lista estes recursos centrais: busca em todos os PDFs da biblioteca; Literature Radar, que entrega resumos diários de artigos novos do arXiv, PubMed, Semantic Scholar, Europe PMC, Crossref, bioRxiv e medRxiv; chat com vários PDFs que compara métodos e resultados; e AutoPilot, que lê uma coleção inteira e escreve notas estruturadas do Zotero. Segundo o desenvolvedor, cada resposta traz citações que levam ao artigo citado com um clique.',
          'Os planos limitam recursos. Pela página de preços, o uso sem licença inclui 20 chats de teste com um PDF e chat com até 3 PDFs; o Basic adiciona o chat com toda a biblioteca e o Literature Radar Explore; o Premium e o Business adicionam o AutoPilot e o Literature Radar Track. Também existem pacotes de recarga de créditos de chat com IA.',
          'Essas descrições são afirmações do desenvolvedor. A PromptQuorum não executou o plugin e não verificou a qualidade das respostas, a precisão das citações nem os números de velocidade que o desenvolvedor publica.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**Você instala o PapersGPT como arquivo de plugin dentro do Zotero; o servidor MCP do Zotero é um pacote separado de npm ou Python.**',
          'O README manda baixar o arquivo .xpi na página de versões do GitHub e instalá-lo no Zotero; o guia Quickstart do desenvolvedor traz os passos. No primeiro uso você escolhe um modelo: um dos modelos na nuvem com o teste integrado (segundo o README, não é preciso chave de API para começar), sua própria chave ou um modelo local integrado.',
        ],
        columns: ['Caminho', 'Como obter'],
        rows: [
          { 'Caminho': '[Plugin do Zotero](https://github.com/papersgpt/papersgpt-for-zotero/releases/tag/papersgpt-v2.3.0)', 'Como obter': 'Baixe o papersgpt-v2.3.0.xpi e instale no Zotero 7–10' },
          { 'Caminho': '[Guia Quickstart](https://www.papersgpt.com/quickstart)', 'Como obter': 'Passos de instalação e primeiro uso do desenvolvedor' },
          { 'Caminho': '[Servidor MCP (npm)](https://www.papersgpt.com/en/mcpserver)', 'Como obter': 'npx @docsagent/docsagent start (Node.js)' },
          { 'Caminho': '[Servidor MCP (Python)](https://www.papersgpt.com/en/mcpserver)', 'Como obter': 'pip install docsagent-mcp (Python 3.10+)' },
        ],
        note: 'O PapersGPT é um plugin, não um app independente, então precisa do Zotero. Segundo a página de MCP, o núcleo de busca pode rodar sem abrir o Zotero. A PromptQuorum não instalou nem escaneou o arquivo .xpi.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**O PapersGPT precisa do Zotero 7, 8, 9 ou 10 em macOS, Windows ou Linux; as necessidades de hardware dependem do modelo local escolhido.**',
          'A lista de compatibilidade vem do README. Nenhum mínimo de RAM, disco ou GPU é publicado. A PromptQuorum não mediu o uso de recursos.',
        ],
        columns: ['Item', 'Valor informado'],
        rows: [
          { 'Item': 'Zotero', 'Valor informado': '7, 8, 9 ou 10 (README)' },
          { 'Item': 'Sistema operacional', 'Valor informado': 'macOS, Windows, Linux' },
          { 'Item': 'Arquivo do plugin', 'Valor informado': '.xpi instalado no Zotero' },
          { 'Item': 'Modelos na nuvem', 'Valor informado': 'Internet; teste integrado ou chave própria' },
          { 'Item': 'Modelos locais', 'Valor informado': 'Download com um clique no Hugging Face' },
          { 'Item': 'RAM / GPU / disco', 'Valor informado': 'Não informado; depende do modelo' },
          { 'Item': 'Servidor MCP', 'Valor informado': 'Node.js (npx) ou Python 3.10+' },
        ],
        note: 'Segundo a página de preços, os créditos de IA integrados exigem pelo menos o PapersGPT v2.3.0. Segundo o desenvolvedor, os modelos locais rodam no seu computador e não precisam de chave; um modelo na nuvem precisa de acesso à rede.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O núcleo do PapersGPT é o chat com IA sobre seus PDFs do Zotero, com busca, acompanhamento e conexões com agentes ao redor.** Todos os itens abaixo são afirmações do desenvolvedor, tiradas do site e do README.',
        ],
        items: [
          'Chat com um único PDF a partir do leitor de PDF do Zotero, ou com vários PDFs ou uma coleção inteira selecionados na janela principal.',
          'Busca em toda a biblioteca: marque "Search entire library" para recuperar trechos de todos os PDFs indexados e obter uma resposta única.',
          'Literature Radar: você assina tópicos e recebe um resumo diário de artigos novos do arXiv, PubMed, Semantic Scholar, Europe PMC, Crossref, bioRxiv e medRxiv; segundo o README, as consultas vão do seu computador direto a essas fontes, sem servidor intermediário.',
          'AutoPilot: você define um objetivo de pesquisa e ele lê uma coleção e grava os achados em notas estruturadas do Zotero; segundo o desenvolvedor, pode rodar durante a noite com modelos na nuvem ou locais.',
          'Citações que abrem o artigo citado com um clique, prompts prontos como Summary, Background e Literature review, e gravação de conclusões em notas do Zotero.',
          'Escolha de modelo: mais de 30 modelos na nuvem, sua própria chave de API, um endpoint compatível com OpenAI, Ollama ou modelos locais integrados (Gemma 4, Qwen 3.5, Mistral 7B e outros) baixados do Hugging Face.',
          'Um servidor MCP do Zotero, baseado no pacote DocsAgent, para Claude Desktop, Claude Code, Cursor e outros clientes MCP; segundo o desenvolvedor, ele indexa e pesquisa uma biblioteca sem abrir o Zotero.',
          'Um arquivo SKILL de agente que usuários de OpenClaw, OpenAI, Claude, Cursor, Claude Code, CodeX e Gemini CLI podem carregar, com link no README.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**O desenvolvedor afirma que análise, indexação e busca rodam no seu computador e que os chats vão direto ao provedor de modelo escolhido, mas a política de privacidade é de 2024 e não descreve os créditos de IA integrados.**',
          'Segundo a política de privacidade (em vigor desde 25 de maio de 2024), o app não coleta chaves de API, mensagens de chat nem histórico de uso, que ficam no seu computador, e as solicitações vão direto às APIs da OpenAI, da Anthropic ou do Google, sem servidor intermediário. Usar o app não exige cadastro. A política diz que registros de falhas anônimos são coletados para melhorar o app e que a compra de uma licença coleta seu e-mail.',
          'Segundo a política, o site usa a Vercel para hospedagem e o Vercel Analytics, e a Lemon Squeezy processa os pagamentos. O desenvolvedor descreve modelos locais com processamento local de documentos como uma forma de manter os dados no dispositivo.',
          'Os créditos de IA integrados (adicionados na v2.3.0, sem chave de API) são mais novos que a política. As páginas que a PromptQuorum leu não dizem se esses chats passam por um servidor do PapersGPT, então verifique isso antes de usar artigos confidenciais ou inéditos. A política e os termos não citam empresa, endereço nem lei aplicável; o contato é um endereço de e-mail.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O PapersGPT combina com quem guarda os artigos no Zotero e quer respostas de IA com citações no mesmo lugar.**',
        ],
        items: [
          'Pesquisadores e estudantes que querem respostas com citações sobre um artigo, uma coleção ou toda a biblioteca.',
          'Pessoas que querem acompanhar artigos novos de um tema dentro do gerenciador de referências.',
          'Desenvolvedores e usuários de agentes que querem que um cliente MCP pesquise uma biblioteca do Zotero.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        content: [
          '**O PapersGPT não serve bem em algumas situações, e vários detalhes continuam sem verificação.**',
        ],
        items: [
          'Não serve: para quem não usa o Zotero. O PapersGPT é um plugin dele, não um leitor independente.',
          'Não serve: para quem quer um preço claro. As páginas do desenvolvedor mostram preços e condições do plano gratuito diferentes.',
          'Não serve: para organizações que não podem usar software com licença AGPL. A AGPL-3.0 impõe o compartilhamento do código de versões modificadas oferecidas pela rede; consulte seu jurídico.',
          'Não verificado: qualidade das respostas, precisão das citações e resultados do AutoPilot. A PromptQuorum não executou o plugin.',
          'Não verificado: velocidade e uso de recursos. A PromptQuorum não os mediu e não encontrou números independentes.',
          'Não verificado: as condições do plano gratuito. O FAQ descreve modelos locais gratuitos sem limite de tempo; a página de preços descreve um teste com 20 chats com um PDF e execuções limitadas.',
          'Não verificado: os preços. A página de preços, o FAQ e os dados estruturados do site mostram valores diferentes, por isso nenhum é citado aqui.',
          'Não verificado: se os chats que usam créditos integrados passam por um servidor do PapersGPT e o que a política de privacidade de 2024 cobre depois da v2.3.0.',
          'Não verificado: a empresa ou o país por trás do projeto, os números de usuários e as avaliações exibidos no site e análises independentes. Nenhuma foi encontrada, e as páginas comparativas do próprio desenvolvedor não foram tratadas como independentes.',
          'Não verificado: as informações de versão. A página de changelog do site termina na v0.6.0 e os dados estruturados dizem 0.6.0, enquanto as versões no GitHub chegam à v2.3.0; esta análise segue o GitHub.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'PapersGPT versus alternativas',
        itemHeadings: true,
        content: [
          '**O PapersGPT é um plugin do Zotero; a PromptQuorum não o comparou na prática com as alternativas.** As ferramentas abaixo são outras ferramentas de chat com documentos e pesquisa do diretório, descritas conforme as próprias análises.',
        ],
        columns: ['Ferramenta', 'Segundo as fontes'],
        rows: [
          { 'Ferramenta': 'PapersGPT', 'Segundo as fontes': 'Plugin do Zotero; AGPL-3.0; plano gratuito + pagos' },
          { 'Ferramenta': '[SurfSense](/pt/power-local-llm/surfsense-review)', 'Segundo as fontes': 'App de desktop; Apache-2.0; agente estilo NotebookLM' },
          { 'Ferramenta': '[AnythingLLM](/pt/power-local-llm/anythingllm-review)', 'Segundo as fontes': 'Desktop e web; MIT; chat com documentos e RAG' },
          { 'Ferramenta': '[Khoj](/pt/power-local-llm/khoj-ai-second-brain-review)', 'Segundo as fontes': 'Web e desktop; AGPL-3.0; segundo cérebro pessoal' },
          { 'Ferramenta': '[Recuperação de conhecimento comparada](/pt/power-local-llm/local-llm-knowledge-retrieval-compared)', 'Segundo as fontes': 'Comparativo de categoria para ferramentas de documentos' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O PapersGPT é gratuito?',
            a: 'Em parte. O código é aberto sob AGPL-3.0 e o desenvolvedor oferece um plano gratuito e planos pagos (Basic, Premium, Business) com limites de recursos. As páginas do desenvolvedor mostram preços e condições do plano gratuito diferentes, então confira a página de preços antes de confiar em um valor. Os modelos na nuvem usados com sua própria chave são cobrados pelo respectivo provedor.',
          },
          {
            q: 'Preciso do Zotero para usar o PapersGPT?',
            a: 'Sim, para o plugin: ele é instalado como arquivo .xpi no Zotero 7 a 10. Segundo a página de MCP do desenvolvedor, o servidor MCP pode indexar e pesquisar uma biblioteca do Zotero sem abrir o Zotero.',
          },
          {
            q: 'Como instalo o PapersGPT?',
            a: 'Instale o Zotero, baixe o papersgpt-v2.3.0.xpi na página de versões do GitHub e instale-o no Zotero como descrevem o README e o Quickstart. A PromptQuorum não executou a instalação.',
          },
          {
            q: 'O PapersGPT funciona offline com modelos locais?',
            a: 'Segundo o desenvolvedor, sim: modelos locais integrados, como Gemma 4, Qwen 3.5 e Mistral 7B, são baixados do Hugging Face e rodam no seu computador, e a indexação e a busca são locais. Você também pode usar o Ollama ou um endpoint compatível com OpenAI. A PromptQuorum não testou o uso offline.',
          },
          {
            q: 'Claude ou Cursor podem pesquisar minha biblioteca do Zotero pelo PapersGPT?',
            a: 'Sim, segundo o desenvolvedor. O servidor MCP do Zotero, baseado no pacote DocsAgent, funciona com clientes MCP como Claude Desktop, Claude Code e Cursor. Inicie o núcleo de busca com npx @docsagent/docsagent start ou pip install docsagent-mcp e adicione o servidor às configurações de MCP do seu cliente.',
          },
          {
            q: 'O que é o Literature Radar no PapersGPT?',
            a: 'Segundo o README, ele entrega um resumo diário de artigos novos sobre os temas que você assina, vindos de arXiv, PubMed, Semantic Scholar, Europe PMC, Crossref, bioRxiv e medRxiv. De acordo com o desenvolvedor, as consultas vão do seu computador a essas fontes sem servidor intermediário. A página de preços coloca o Explore no Basic e o Track no Premium e no Business.',
          },
          {
            q: 'O que o AutoPilot faz?',
            a: 'O AutoPilot lê uma coleção inteira com base em um objetivo de pesquisa e escreve os achados em notas estruturadas do Zotero; o desenvolvedor diz que ele pode rodar durante a noite com modelos na nuvem ou locais. A página de preços o lista no Premium e no Business. A PromptQuorum não o executou.',
          },
          {
            q: 'Quais modelos de IA o PapersGPT pode usar?',
            a: 'Segundo o desenvolvedor: mais de 30 modelos na nuvem, sua própria chave de API, um endpoint personalizado compatível com OpenAI, Ollama ou modelos locais integrados como Gemma 4, Qwen 3.5 e Mistral 7B, baixados do Hugging Face.',
          },
          {
            q: 'O PapersGPT pode pesquisar em toda a minha biblioteca do Zotero?',
            a: 'Sim, segundo o desenvolvedor: marque "Search entire library" para recuperar trechos de todos os PDFs indexados e obter uma resposta única. A página de preços lista o chat com a biblioteca inteira a partir do plano Basic.',
          },
          {
            q: 'O PapersGPT cita suas fontes?',
            a: 'O desenvolvedor afirma que cada resposta traz citações que abrem o artigo citado com um clique. A PromptQuorum não verificou a precisão das citações.',
          },
          {
            q: 'Minhas conversas ficam no meu computador?',
            a: 'O desenvolvedor afirma que análise, indexação e busca rodam localmente e que as conversas vão direto ao provedor de modelos que você escolher. A política de privacidade é de 25 de maio de 2024, anterior aos créditos de IA integrados da v2.3.0, e as páginas que a PromptQuorum leu não dizem se essas conversas passam por um servidor do PapersGPT.',
          },
          {
            q: 'O PapersGPT está sendo mantido ativamente?',
            a: 'A versão v2.3.0 saiu em 13 de novembro de 2026, e o último commit no GitHub foi em 16 de novembro de 2026 (uma alteração no README). A página de changelog do site termina na v0.6.0, então esta análise tira as informações de versão do GitHub.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O PapersGPT vale uma olhada se seus artigos já estão no Zotero e você quer respostas de IA com citações, busca em toda a biblioteca e acompanhamento de artigos no mesmo lugar.**',
          'No papel ele cobre muita coisa: chat com um ou vários PDFs, busca na biblioteca, Literature Radar, AutoPilot, modelos na nuvem e locais, Ollama, um servidor MCP e versões frequentes (v2.3.0 em 13 de novembro de 2026, com um commit em 16 de novembro de 2026).',
          'As contrapartidas são reais. Só funciona dentro do Zotero, o preço e as condições do plano gratuito não são claros entre as páginas do desenvolvedor, a política de privacidade é anterior aos créditos integrados e nenhuma empresa ou país é citado. A PromptQuorum não testou o plugin; experimente com uma coleção pequena e um modelo local e confira as citações antes de depender dele.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do PapersGPT](https://www.papersgpt.com/en) — recursos, modelos e dados estruturados, verificado em 17 de novembro de 2026.',
          '[Página de preços](https://www.papersgpt.com/en/pricing) — planos, limites de recursos, teste e créditos, verificada em 17 de novembro de 2026.',
          '[FAQ](https://www.papersgpt.com/en/faq) — afirmações sobre o plano gratuito e os modelos locais, verificado em 17 de novembro de 2026.',
          '[Página do servidor MCP do Zotero](https://www.papersgpt.com/en/mcpserver) — comandos de instalação do MCP, verificada em 17 de novembro de 2026.',
          '[Política de privacidade](https://www.papersgpt.com/en/privacy/privacy_policy) — tratamento de dados, em vigor desde 25 de maio de 2024, verificada em 17 de novembro de 2026.',
          '[Termos e condições](https://www.papersgpt.com/en/terms/terms_and_conditions) — lidos em busca de dados da empresa ou do país, verificados em 17 de novembro de 2026.',
          '[Página de changelog](https://www.papersgpt.com/resources/changelog) — histórico de versões exibido no site, verificada em 17 de novembro de 2026.',
          '[Repositório no GitHub](https://github.com/papersgpt/papersgpt-for-zotero) — repositório, licença, data de criação e último commit, verificado em 17 de novembro de 2026.',
          '[README](https://github.com/papersgpt/papersgpt-for-zotero#readme) — recursos, compatibilidade, quickstart, MCP e skill, verificado em 17 de novembro de 2026.',
          '[Versão papersgpt-v2.3.0](https://github.com/papersgpt/papersgpt-for-zotero/releases/tag/papersgpt-v2.3.0) — versão mais recente, sua data e o arquivo .xpi, verificada em 17 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do SurfSense](/pt/power-local-llm/surfsense-review) — uma alternativa de código aberto ao NotebookLM para desktop que pesquisa e edita seus documentos no seu próprio computador.',
          '[Análise do AnythingLLM](/pt/power-local-llm/anythingllm-review) — um espaço de trabalho de chat com documentos e RAG com armazenamento vetorial integrado.',
          '[Análise do Khoj](/pt/power-local-llm/khoj-ai-second-brain-review) — um segundo cérebro pessoal com IA que sincroniza com Obsidian e Notion.',
          '[Recuperação de conhecimento com LLMs locais comparada](/pt/power-local-llm/local-llm-knowledge-retrieval-compared) — o comparativo de categoria para ferramentas de documentos e conhecimento.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
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
    theme: 'RAG & Document Chat',
    heroImage: '/images/papersgpt-review-hero-zh.webp',
    title: 'PapersGPT 解读：支持 PDF 对话、文献库搜索与 MCP 的 Zotero AI 插件',
    seoTitle: 'PapersGPT 解读：Zotero AI 插件与 MCP',
    intro:
      'PapersGPT 是文献管理软件 Zotero 的开源（AGPL-3.0）插件，可与 PDF 对话、搜索整个文献库、追踪新论文，并把结果保存为 Zotero 笔记。本解读基于开发者网站、GitHub 仓库、发布页面和隐私政策，核查日期为 2026 年 11 月 17 日。PromptQuorum 没有实际测试过该插件。',
    metaDescription:
      'PapersGPT 是 AGPL-3.0 的 Zotero 插件，支持 PDF 对话、整库搜索和论文追踪，可用云端或本地模型并支持 MCP。安装、隐私与限制。',
    twitterDescription:
      'PapersGPT 为 Zotero 增加 PDF 对话、整库搜索和论文追踪，支持云端或本地模型及 MCP 服务器。开源，免费增值。',
    audience:
      '在 Zotero 中管理论文的研究人员和学生、把论文库接入 MCP 客户端的开发者，以及评估文献工作 AI 工具的团队',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PapersGPT',
    targetKeywords: [
      'PapersGPT 解读',
      'Zotero AI 插件',
      'Zotero PDF 对话',
      'Zotero MCP 服务器',
      'Zotero 整库搜索',
      'PapersGPT 安装',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**PapersGPT 是 Zotero 的开源（AGPL-3.0）AI 插件，可与单个或多个 PDF 对话、搜索整个文献库并追踪新论文。**它以 .xpi 文件的形式安装在 Zotero 7 至 10 中，可配合云端模型、你自己的 API 密钥、Ollama 或内置本地模型使用，并包含面向 Claude Desktop、Cursor 等客户端的 MCP 服务器。它有免费版和付费方案，PromptQuorum 没有测试过。',
    quickAnswerTop: {
      zh: {
        question: 'PapersGPT 是什么，适合谁用？',
        answer:
          'PapersGPT 是为文献管理软件 Zotero 增加 AI 对话和搜索的插件。适合已经把论文存放在 Zotero 中、希望得到带引用并能跳回原论文的回答的研究人员和学生。',
        bullets: [
          '适用于 macOS、Windows、Linux 上 Zotero 7 至 10 的插件（.xpi）。',
          '价格：免费版加付费方案；许可证 AGPL-3.0。',
          '可与单个 PDF、多个 PDF 或整个文献库对话；Literature Radar 追踪新论文；AutoPilot 批量阅读文献集并写入 Zotero 笔记。',
          '据开发者称，可使用 30 多个云端模型、你自己的密钥、Ollama 或内置本地模型。',
          '隐私政策发布于 2024 年；在处理机密论文前，请先确认内置额度的数据流向。',
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
            text: 'PapersGPT 让你在 Zotero 内与 PDF 对话、搜索整个文献库并追踪新论文，可使用云端或本地 AI 模型。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作常驻在 Zotero 里的 AI 研究助手：据开发者介绍，它阅读你已收集的 PDF，并以带引用的方式回答问题。AI 模型可以是云服务、你自己的密钥，或在你电脑上运行的模型。',
          },
        ],
        items: [
          '基于 AGPL-3.0 开源；有免费版和付费方案，开发者各页面列出的价格不一致，购买前请查看定价页。',
          '以 .xpi 文件的形式安装在 Zotero 7 至 10 中（macOS、Windows、Linux）；必须先安装 Zotero。',
          '模型（据开发者称）：30 多个云端模型、你自己的 API 密钥、自定义 OpenAI 兼容端点、Ollama，或从 Hugging Face 下载的内置本地模型。',
          'MCP 服务器把你的 Zotero 文献库接入 Claude Desktop、Claude Code、Cursor 等 MCP 客户端。',
          'PromptQuorum 没有测试过该插件。隐私政策发布于 2024 年 5 月，早于 v2.3.0 新增的内置 AI 额度。',
        ],
        callouts: [
          {
            type: 'note',
            text: '开发者称解析、索引和搜索在本地运行。使用内置额度的对话是否经过 PapersGPT 服务器，PromptQuorum 阅读的页面中没有记载。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**PapersGPT 是一款 Zotero 插件，为文献库中的 PDF 增加 AI 对话、整库搜索、论文追踪和批量阅读。**',
          '项目由“PapersGPT Team”以 AGPL-3.0 发布（GitHub：papersgpt/papersgpt-for-zotero）。最新版本 v2.3.0 发布于 2026 年 11 月 13 日，仓库最近一次提交在 2026 年 11 月 16 日（README 修改），因此开发仍在进行，不适用停更警告。仓库创建于 2024 年 11 月。',
          '开发者列出的核心功能包括：覆盖所有 PDF 的整库搜索；Literature Radar，每天汇总来自 arXiv、PubMed、Semantic Scholar、Europe PMC、Crossref、bioRxiv 和 medRxiv 的新论文；比较方法与结果的多 PDF 对话；以及阅读整个文献集并写出结构化 Zotero 笔记的 AutoPilot。据称每条回答都带有可一键跳转到被引论文的引用。',
          '功能按方案分级。根据定价页，未授权使用包含 20 次单 PDF 试用对话和最多 3 个 PDF 的对话；Basic 增加整库对话和 Literature Radar Explore；Premium 和 Business 增加 AutoPilot 和 Literature Radar Track。此外还有 AI 对话额度的充值包。',
          '以上是开发者的说法。PromptQuorum 没有运行过该插件，也没有核实回答质量、引用准确性或开发者公布的速度数据。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '如何获取',
        content: [
          '**PapersGPT 以插件文件的形式安装在 Zotero 中；Zotero MCP 服务器是单独的 npm 或 Python 包。**',
          'README 说明先从 GitHub 发布页下载 .xpi 文件并安装到 Zotero，开发者的 Quickstart 指南有具体步骤。首次使用时选择模型：使用内置试用的云端模型之一（据 README，开始时无需 API 密钥）、你自己的密钥，或内置本地模型。',
        ],
        columns: ['途径', '获取方式'],
        rows: [
          { '途径': '[Zotero 插件](https://github.com/papersgpt/papersgpt-for-zotero/releases/tag/papersgpt-v2.3.0)', '获取方式': '下载 papersgpt-v2.3.0.xpi，安装到 Zotero 7–10' },
          { '途径': '[Quickstart 指南](https://www.papersgpt.com/quickstart)', '获取方式': '开发者提供的安装与上手步骤' },
          { '途径': '[MCP 服务器（npm）](https://www.papersgpt.com/en/mcpserver)', '获取方式': 'npx @docsagent/docsagent start（Node.js）' },
          { '途径': '[MCP 服务器（Python）](https://www.papersgpt.com/en/mcpserver)', '获取方式': 'pip install docsagent-mcp（Python 3.10+）' },
        ],
        note: 'PapersGPT 是插件而不是独立应用，因此需要 Zotero。据 MCP 页面，搜索核心可以在不打开 Zotero 的情况下运行。PromptQuorum 没有安装或扫描 .xpi 文件。',
      },
      requirements: {
        id: 'requirements',
        title: '系统要求',
        content: [
          '**PapersGPT 需要 macOS、Windows 或 Linux 上的 Zotero 7、8、9 或 10；硬件需求取决于你选择的本地模型。**',
          '兼容性列表来自 README。没有公布最低内存、磁盘或 GPU 数据。PromptQuorum 没有测量资源占用。',
        ],
        columns: ['项目', '资料中的说明'],
        rows: [
          { '项目': 'Zotero', '资料中的说明': '7、8、9 或 10（README）' },
          { '项目': '操作系统', '资料中的说明': 'macOS、Windows、Linux' },
          { '项目': '插件文件', '资料中的说明': '安装到 Zotero 的 .xpi' },
          { '项目': '云端模型', '资料中的说明': '联网；内置试用或自备密钥' },
          { '项目': '本地模型', '资料中的说明': '从 Hugging Face 一键下载' },
          { '项目': '内存 / GPU / 磁盘', '资料中的说明': '未说明；取决于模型' },
          { '项目': 'MCP 服务器', '资料中的说明': 'Node.js（npx）或 Python 3.10+' },
        ],
        note: '据定价页，内置 AI 额度至少需要 PapersGPT v2.3.0。据开发者介绍，本地模型在你的电脑上运行，无需密钥；云端模型需要联网。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**PapersGPT 的核心是针对 Zotero PDF 的 AI 对话，周围配有搜索、追踪和智能体连接。**以下各项均为开发者在网站和 README 中的说法。',
        ],
        items: [
          '在 Zotero PDF 阅读器中与单个 PDF 对话，或与在主窗口选中的多个 PDF 或整个文献集对话。',
          '整库搜索：勾选“Search entire library”，即可从所有已索引的 PDF 中检索段落并得到一份综合回答。',
          'Literature Radar：订阅主题后，每天收到来自 arXiv、PubMed、Semantic Scholar、Europe PMC、Crossref、bioRxiv 和 medRxiv 的新论文汇总；据 README，查询从你的电脑直接发往这些来源，不经中转服务器。',
          'AutoPilot：设定研究目标后，它会阅读整个文献集并把结论写入结构化的 Zotero 笔记；开发者称可在云端或本地模型上通宵运行。',
          '可一键打开被引论文的引用、Summary、Background、Literature review 等内置提示词，以及把结论保存到 Zotero 笔记。',
          '模型选择：30 多个云端模型、你自己的 API 密钥、自定义 OpenAI 兼容端点、Ollama，或从 Hugging Face 下载的内置本地模型（Gemma 4、Qwen 3.5、Mistral 7B 等）。',
          '基于 DocsAgent 包的 Zotero MCP 服务器，面向 Claude Desktop、Claude Code、Cursor 等 MCP 客户端；开发者称无需打开 Zotero 即可索引和搜索文献库。',
          '供 OpenClaw、OpenAI、Claude、Cursor、Claude Code、CodeX 和 Gemini CLI 用户加载的智能体 SKILL 文件，README 中附有链接。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**开发者称解析、索引和搜索在你的电脑上运行，对话直接发往你选择的模型提供方，但隐私政策发布于 2024 年，没有描述内置 AI 额度。**',
          '根据隐私政策（2024 年 5 月 25 日生效），应用不收集 API 密钥、聊天消息或使用历史，这些内容保留在你的电脑上，请求不经中间服务器，直接发往 OpenAI、Anthropic 或 Google 的 API。使用应用无需注册。政策称为改进应用会收集匿名崩溃日志，购买许可证时会收集你的电子邮箱。',
          '据政策，网站使用 Vercel 托管和 Vercel Analytics，付款由 Lemon Squeezy 处理。开发者称，本地模型加本地文档处理可让数据留在设备上。',
          '内置 AI 额度（v2.3.0 新增，无需 API 密钥）晚于该政策。PromptQuorum 阅读的页面没有说明这些对话是否经过 PapersGPT 服务器，因此处理机密或未发表论文前请先确认。政策和条款没有写明公司、地址或适用法律；联系方式是一个电子邮箱。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        content: [
          '**PapersGPT 适合把论文放在 Zotero 里、希望在同一处获得带引用 AI 回答的人。**',
        ],
        items: [
          '希望就单篇论文、一个文献集或整个文献库得到带引用回答的研究人员和学生。',
          '想在文献管理软件里追踪某个主题新论文的人。',
          '希望让 MCP 客户端搜索 Zotero 文献库的开发者和智能体用户。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        content: [
          '**PapersGPT 在某些情况下并不合适，也有若干细节尚未核实。**',
        ],
        items: [
          '不适合：不使用 Zotero 的人。PapersGPT 是 Zotero 的插件，不是独立阅读器。',
          '不适合：想要一个明确价格的人。开发者各页面列出的价格和免费版条件并不一致。',
          '不适合：不能使用 AGPL 许可软件的组织。AGPL-3.0 要求对经网络提供的修改版公开源代码；请咨询法务。',
          '未核实：回答质量、引用准确性和 AutoPilot 的结果。PromptQuorum 没有运行过该插件。',
          '未核实：速度和资源占用。PromptQuorum 没有测量，也没有找到独立数据。',
          '未核实：免费版条件。FAQ 描述的是不限时免费的本地模型；定价页描述的是含 20 次单 PDF 对话和有限运行次数的试用。',
          '未核实：价格。定价页、FAQ 和网站结构化数据显示的金额不同，因此本文不引用任何金额。',
          '未核实：使用内置额度的对话是否经过 PapersGPT 服务器，以及 2024 年的隐私政策在 v2.3.0 之后覆盖哪些内容。',
          '未核实：项目背后的公司或国家、网站展示的用户数和评分，以及独立的第三方点评。均未找到，开发者自己的对比页面也未被视为独立来源。',
          '未核实：版本信息。网站的更新日志页止于 v0.6.0，结构化数据也写 0.6.0，而 GitHub 发布已到 v2.3.0；本解读以 GitHub 为准。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'PapersGPT 与替代方案对比',
        itemHeadings: true,
        content: [
          '**PapersGPT 是 Zotero 插件；PromptQuorum 没有与替代方案做过实际对比。**下列是目录中其他文档对话和研究工具，描述依据各自的页面。',
        ],
        columns: ['工具', '来源中的记载'],
        rows: [
          { '工具': 'PapersGPT', '来源中的记载': 'Zotero 插件；AGPL-3.0；免费版 + 付费方案' },
          { '工具': '[SurfSense](/zh/power-local-llm/surfsense-review)', '来源中的记载': '桌面应用；Apache-2.0；NotebookLM 式智能体' },
          { '工具': '[AnythingLLM](/zh/power-local-llm/anythingllm-review)', '来源中的记载': '桌面与网页；MIT；文档对话与 RAG' },
          { '工具': '[Khoj](/zh/power-local-llm/khoj-ai-second-brain-review)', '来源中的记载': '网页与桌面；AGPL-3.0；个人第二大脑' },
          { '工具': '[知识检索工具对比](/zh/power-local-llm/local-llm-knowledge-retrieval-compared)', '来源中的记载': '文档类工具的分类对比' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'PapersGPT 免费吗？',
            a: '部分免费。代码以 AGPL-3.0 开源，开发者提供有功能限制的免费版和付费方案（Basic、Premium、Business）。开发者各页面列出的价格和免费版条件不一致，请在相信某个金额之前查看定价页。你用自己密钥调用的云端模型由其提供方计费。',
          },
          {
            q: '使用 PapersGPT 必须有 Zotero 吗？',
            a: '作为插件使用时需要：它以 .xpi 文件形式安装在 Zotero 7 至 10 中。据开发者的 MCP 页面，MCP 服务器无需打开 Zotero 即可索引和搜索 Zotero 文献库。',
          },
          {
            q: '如何安装 PapersGPT？',
            a: '先安装 Zotero，从 GitHub 发布页下载 papersgpt-v2.3.0.xpi，再按 README 和 Quickstart 的说明安装到 Zotero。PromptQuorum 没有执行过安装。',
          },
          {
            q: 'PapersGPT 能用本地模型离线运行吗？',
            a: '据开发者称可以：Gemma 4、Qwen 3.5、Mistral 7B 等内置本地模型从 Hugging Face 下载后在你的电脑上运行，索引和搜索也在本地。你也可以使用 Ollama 或自定义 OpenAI 兼容端点。PromptQuorum 没有测试过离线使用。',
          },
          {
            q: 'Claude 或 Cursor 能通过 PapersGPT 搜索我的 Zotero 文献库吗？',
            a: '据开发者称可以。基于 DocsAgent 包的 Zotero MCP 服务器可配合 Claude Desktop、Claude Code、Cursor 等 MCP 客户端使用。用 npx @docsagent/docsagent start 或 pip install docsagent-mcp 启动搜索核心，再把服务器添加到客户端的 MCP 设置中。',
          },
          {
            q: 'PapersGPT 的 Literature Radar 是什么？',
            a: '据 README，它会就你订阅的主题，每天推送来自 arXiv、PubMed、Semantic Scholar、Europe PMC、Crossref、bioRxiv 和 medRxiv 的新论文摘要。据开发者称，查询从你的电脑直接发往这些来源，没有中转服务器。定价页面将 Explore 归入 Basic，Track 归入 Premium 和 Business。',
          },
          {
            q: 'AutoPilot 有什么作用？',
            a: 'AutoPilot 围绕研究目标阅读整个文献集合，并将发现写入结构化的 Zotero 笔记；开发者称它可以使用云端或本地模型通宵运行。定价页面将其列在 Premium 和 Business 下。PromptQuorum 未运行过它。',
          },
          {
            q: 'PapersGPT 可以使用哪些 AI 模型？',
            a: '据开发者称：30 多个云端模型、你自己的 API 密钥、自定义的 OpenAI 兼容端点、Ollama，或从 Hugging Face 下载的内置本地模型（如 Gemma 4、Qwen 3.5 和 Mistral 7B）。',
          },
          {
            q: 'PapersGPT 能搜索我的整个 Zotero 文献库吗？',
            a: '据开发者称可以：勾选“Search entire library”，即可从所有已索引的 PDF 中检索段落并得到一份综合回答。定价页面将整库对话列在 Basic 及以上方案中。',
          },
          {
            q: 'PapersGPT 会注明来源吗？',
            a: '开发者称每个回答都带有可点击跳转的引用，点击即可打开被引论文。PromptQuorum 未核实引用的准确性。',
          },
          {
            q: '我的对话会留在自己的电脑上吗？',
            a: '开发者称解析、索引和搜索都在本地运行，对话直接发送给你所选的模型提供商。隐私政策的日期为 2024年5月25日，早于 v2.3.0 的内置 AI 额度；PromptQuorum 阅读的页面也没有说明这些对话是否经过 PapersGPT 服务器。',
          },
          {
            q: 'PapersGPT 仍在积极维护吗？',
            a: 'v2.3.0 于 2026年11月13日发布，GitHub 上的最近一次提交在 2026年11月16日（仅修改 README）。网站的更新日志页面止于 v0.6.0，因此本文的版本信息取自 GitHub。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果你的论文已经在 Zotero 里，并希望在同一处获得带引用的 AI 回答、整库搜索和论文追踪，PapersGPT 值得一试。**',
          '从纸面看它覆盖面很广：单个与多个 PDF 对话、整库搜索、Literature Radar、AutoPilot、云端与本地模型、Ollama、MCP 服务器，以及频繁的发布（2026 年 11 月 13 日发布 v2.3.0，11 月 16 日有提交）。',
          '取舍也很实在。它只能在 Zotero 内使用，价格和免费版条件在开发者各页面之间并不清楚，隐私政策早于内置额度，也没有写明公司或国家。PromptQuorum 没有测试过该插件，请先用小型文献集和本地模型试用，并核对引用，再决定是否依赖它。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[PapersGPT 网站](https://www.papersgpt.com/en) — 功能、模型和结构化数据，核查于 2026 年 11 月 17 日。',
          '[定价页](https://www.papersgpt.com/en/pricing) — 方案、功能限制、试用和额度，核查于 2026 年 11 月 17 日。',
          '[FAQ](https://www.papersgpt.com/en/faq) — 关于免费版和本地模型的说法，核查于 2026 年 11 月 17 日。',
          '[Zotero MCP 服务器页面](https://www.papersgpt.com/en/mcpserver) — MCP 安装命令，核查于 2026 年 11 月 17 日。',
          '[隐私政策](https://www.papersgpt.com/en/privacy/privacy_policy) — 数据处理，2024 年 5 月 25 日生效，核查于 2026 年 11 月 17 日。',
          '[服务条款](https://www.papersgpt.com/en/terms/terms_and_conditions) — 为查找公司或国家信息而阅读，核查于 2026 年 11 月 17 日。',
          '[更新日志页面](https://www.papersgpt.com/resources/changelog) — 网站展示的版本历史，核查于 2026 年 11 月 17 日。',
          '[GitHub 仓库](https://github.com/papersgpt/papersgpt-for-zotero) — 仓库、许可证、创建日期和最近提交，核查于 2026 年 11 月 17 日。',
          '[README](https://github.com/papersgpt/papersgpt-for-zotero#readme) — 功能、兼容性、快速开始、MCP 和 skill，核查于 2026 年 11 月 17 日。',
          '[发布 papersgpt-v2.3.0](https://github.com/papersgpt/papersgpt-for-zotero/releases/tag/papersgpt-v2.3.0) — 最新版本、发布日期和 .xpi 文件，核查于 2026 年 11 月 17 日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[SurfSense 解读](/zh/power-local-llm/surfsense-review) — 在你自己的电脑上研究和编辑文档的开源桌面版 NotebookLM 替代品。',
          '[AnythingLLM 解读](/zh/power-local-llm/anythingllm-review) — 内置向量库的文档对话与 RAG 工作区。',
          '[Khoj 解读](/zh/power-local-llm/khoj-ai-second-brain-review) — 可与 Obsidian 和 Notion 同步的个人 AI 第二大脑。',
          '[本地 LLM 知识检索工具对比](/zh/power-local-llm/local-llm-knowledge-retrieval-compared) — 文档与知识类工具的分类对比。',
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
    theme: 'RAG & Document Chat',
    heroImage: '/images/papersgpt-review-hero-ar.webp',
    title: 'مراجعة PapersGPT: إضافة ذكاء اصطناعي لـ Zotero للدردشة مع PDF والبحث في المكتبة وMCP',
    seoTitle: 'مراجعة PapersGPT: إضافة ذكاء اصطناعي لـ Zotero وMCP',
    intro:
      'PapersGPT إضافة مفتوحة المصدر (AGPL-3.0) لمدير المراجع Zotero تدردش مع ملفات PDF وتبحث في المكتبة كلها وتتبّع الأوراق البحثية الجديدة وتحفظ النتائج كملاحظات في Zotero. تستند هذه المراجعة إلى موقع المطوّر ومستودع GitHub وصفحة الإصدارات وسياسة الخصوصية، وقد جرى التحقق منها في 17 نوفمبر 2026. لم تختبر PromptQuorum الإضافة عمليًا.',
    metaDescription:
      'PapersGPT إضافة AGPL-3.0 لـ Zotero للدردشة مع PDF والبحث في المكتبة وتتبّع الأوراق بنماذج سحابية أو محلية، مع MCP. التثبيت والخصوصية والقيود.',
    twitterDescription:
      'يضيف PapersGPT إلى Zotero الدردشة مع PDF والبحث في المكتبة كلها وتتبّع الأوراق، بنماذج سحابية أو محلية وخادم MCP. مفتوح المصدر مع خطط مجانية ومدفوعة.',
    audience:
      'الباحثون والطلاب الذين يديرون أوراقهم في Zotero، والمطوّرون الذين يربطون مكتبة أوراق بعملاء MCP، والفرق التي تقيّم أدوات الذكاء الاصطناعي للعمل على الأدبيات العلمية',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PapersGPT',
    targetKeywords: [
      'مراجعة PapersGPT',
      'إضافة ذكاء اصطناعي لـ Zotero',
      'الدردشة مع PDF في Zotero',
      'خادم MCP لـ Zotero',
      'البحث في مكتبة Zotero كاملة',
      'تثبيت PapersGPT',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**PapersGPT إضافة ذكاء اصطناعي مفتوحة المصدر (AGPL-3.0) لـ Zotero تدردش مع ملف PDF واحد أو عدة ملفات وتبحث في المكتبة كلها وتتبّع الأوراق الجديدة.** تُثبَّت كملف .xpi داخل Zotero من الإصدار 7 إلى 10، وتعمل مع نماذج سحابية أو مفتاح API الخاص بك أو Ollama أو نماذج محلية مدمجة، وتتضمن خادم MCP لعملاء مثل Claude Desktop وCursor. توجد خطة مجانية وخطط مدفوعة، ولم تختبرها PromptQuorum.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو PapersGPT ولمن هو؟',
        answer:
          'PapersGPT إضافة تضيف الدردشة بالذكاء الاصطناعي والبحث إلى مدير المراجع Zotero. تناسب الباحثين والطلاب الذين يحتفظون بأوراقهم في Zotero ويريدون إجابات مع اقتباسات تقود إلى الورقة المصدر.',
        bullets: [
          'إضافة لـ Zotero (.xpi) للإصدارات 7 إلى 10 على macOS وWindows وLinux.',
          'السعر: خطة مجانية إضافة إلى خطط مدفوعة؛ الترخيص AGPL-3.0.',
          'دردشة مع ملف PDF واحد أو عدة ملفات أو المكتبة كلها؛ يتتبّع Literature Radar الأوراق الجديدة؛ ويقرأ AutoPilot مجموعة كاملة دفعة واحدة ويحفظ النتائج في ملاحظات Zotero.',
          'بحسب المطوّر، يعمل مع أكثر من 30 نموذجًا سحابيًا أو مفتاحك الخاص أو Ollama أو نماذج محلية مدمجة.',
          'سياسة الخصوصية تعود إلى 2024؛ تحقّق من تدفق بيانات الرصيد المدمج قبل استخدام أوراق سرية.',
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
            text: 'يتيح لك PapersGPT الدردشة مع ملفات PDF والبحث في مكتبتك كلها وتتبّع الأوراق الجديدة من داخل Zotero، بنماذج ذكاء اصطناعي سحابية أو محلية.',
          },
          {
            type: 'plain-terms',
            text: 'فكّر فيه كمساعد بحثي بالذكاء الاصطناعي يعيش داخل Zotero: بحسب المطوّر، يقرأ ملفات PDF التي جمعتها بالفعل ويجيب عن أسئلتك مع اقتباسات. يمكن أن يكون النموذج خدمة سحابية أو مفتاحك الخاص أو نموذجًا يعمل على حاسوبك.',
          },
        ],
        items: [
          'مفتوح المصدر بترخيص AGPL-3.0؛ توجد خطة مجانية وخطط مدفوعة، وتعرض صفحات المطوّر أسعارًا مختلفة، لذا راجع صفحة الأسعار قبل الشراء.',
          'يُثبَّت كملف .xpi داخل Zotero من الإصدار 7 إلى 10 (macOS وWindows وLinux)؛ ويجب أن يكون Zotero مثبّتًا مسبقًا.',
          'النماذج (بحسب المطوّر): أكثر من 30 نموذجًا سحابيًا، أو مفتاح API الخاص بك، أو نقطة نهاية مخصصة متوافقة مع OpenAI، أو Ollama، أو نماذج محلية مدمجة تُنزَّل من Hugging Face.',
          'يربط خادم MCP مكتبة Zotero بـ Claude Desktop وClaude Code وCursor وعملاء MCP الآخرين.',
          'لم تختبر PromptQuorum الإضافة. سياسة الخصوصية مؤرخة في مايو 2024 وتسبق رصيد الذكاء الاصطناعي المدمج الذي أُضيف في v2.3.0.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'يقول المطوّر إن التحليل والفهرسة والبحث تعمل محليًا. أما ما إذا كانت الدردشات التي تستخدم الرصيد المدمج تمر عبر خادم PapersGPT فلا توثّقه الصفحات التي قرأتها PromptQuorum.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**PapersGPT إضافة لـ Zotero تضيف إلى ملفات PDF في مكتبتك دردشة بالذكاء الاصطناعي وبحثًا في المكتبة كلها وتتبّعًا للأوراق وقراءة دفعية.**',
          'ينشر المشروع «PapersGPT Team» بترخيص AGPL-3.0 (GitHub: papersgpt/papersgpt-for-zotero). صدر أحدث إصدار، v2.3.0، في 13 نوفمبر 2026، وآخر commit في المستودع بتاريخ 16 نوفمبر 2026 (تعديل على README)، فالتطوير مستمر ولا ينطبق تحذير المشروع المتوقف. أُنشئ المستودع في نوفمبر 2024.',
          'يذكر المطوّر هذه الميزات الأساسية: البحث في كل ملفات PDF بالمكتبة؛ وLiterature Radar الذي يسلّم ملخصات يومية للأوراق الجديدة من arXiv وPubMed وSemantic Scholar وEurope PMC وCrossref وbioRxiv وmedRxiv؛ ودردشة متعددة الملفات تقارن المناهج والنتائج؛ وAutoPilot الذي يقرأ مجموعة كاملة ويكتب ملاحظات Zotero منظمة. ويُقال إن كل إجابة تحمل اقتباسات ينقلك النقر عليها إلى الورقة المقتبسة.',
          'تحدّد الخطط الميزات المتاحة. بحسب صفحة الأسعار، يشمل الاستخدام دون ترخيص 20 دردشة تجريبية مع ملف PDF واحد ودردشة مع ما يصل إلى 3 ملفات؛ وتضيف Basic الدردشة مع المكتبة كلها وLiterature Radar Explore؛ وتضيف Premium وBusiness الميزة AutoPilot وLiterature Radar Track. وتتوفر أيضًا حزم شحن لرصيد الدردشة بالذكاء الاصطناعي.',
          'هذه الأوصاف أقوال المطوّر. لم تشغّل PromptQuorum الإضافة ولم تتحقق من جودة الإجابات أو دقة الاقتباسات أو أرقام السرعة التي ينشرها المطوّر.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**تثبّت PapersGPT كملف إضافة داخل Zotero؛ أما خادم MCP لـ Zotero فهو حزمة npm أو Python منفصلة.**',
          'يوجّه README إلى تنزيل ملف .xpi من صفحة الإصدارات على GitHub وتثبيته في Zotero؛ وخطوات ذلك في دليل Quickstart لدى المطوّر. عند أول استخدام تختار نموذجًا: أحد النماذج السحابية مع النسخة التجريبية المدمجة (بحسب README لا حاجة إلى مفتاح API للبدء)، أو مفتاحك الخاص، أو نموذجًا محليًا مدمجًا.',
        ],
        columns: ['الطريقة', 'كيف تحصل عليه'],
        rows: [
          { 'الطريقة': '[إضافة Zotero](https://github.com/papersgpt/papersgpt-for-zotero/releases/tag/papersgpt-v2.3.0)', 'كيف تحصل عليه': 'نزّل papersgpt-v2.3.0.xpi وثبّته في Zotero 7–10' },
          { 'الطريقة': '[دليل Quickstart](https://www.papersgpt.com/quickstart)', 'كيف تحصل عليه': 'خطوات التثبيت والاستخدام الأول لدى المطوّر' },
          { 'الطريقة': '[خادم MCP (npm)](https://www.papersgpt.com/en/mcpserver)', 'كيف تحصل عليه': 'npx @docsagent/docsagent start (Node.js)' },
          { 'الطريقة': '[خادم MCP (Python)](https://www.papersgpt.com/en/mcpserver)', 'كيف تحصل عليه': 'pip install docsagent-mcp (Python 3.10+)' },
        ],
        note: 'PapersGPT إضافة وليس تطبيقًا مستقلًا، لذا يحتاج إلى Zotero. تقول صفحة MCP إن نواة البحث تعمل دون فتح Zotero. لم تثبّت PromptQuorum ملف .xpi ولم تفحصه.',
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات',
        content: [
          '**يحتاج PapersGPT إلى Zotero 7 أو 8 أو 9 أو 10 على macOS أو Windows أو Linux؛ وتعتمد متطلبات العتاد على النموذج المحلي الذي تختاره.**',
          'قائمة التوافق مأخوذة من README. لا تُنشر أرقام دنيا للذاكرة أو القرص أو GPU. ولم تقِس PromptQuorum استهلاك الموارد.',
        ],
        columns: ['البند', 'القيمة المعلنة'],
        rows: [
          { 'البند': 'Zotero', 'القيمة المعلنة': '7 أو 8 أو 9 أو 10 (README)' },
          { 'البند': 'نظام التشغيل', 'القيمة المعلنة': 'macOS وWindows وLinux' },
          { 'البند': 'ملف الإضافة', 'القيمة المعلنة': '.xpi يُثبَّت في Zotero' },
          { 'البند': 'النماذج السحابية', 'القيمة المعلنة': 'إنترنت؛ نسخة تجريبية مدمجة أو مفتاح خاص' },
          { 'البند': 'النماذج المحلية', 'القيمة المعلنة': 'تنزيل بنقرة من Hugging Face' },
          { 'البند': 'الذاكرة / GPU / القرص', 'القيمة المعلنة': 'غير معلن؛ يعتمد على النموذج' },
          { 'البند': 'خادم MCP', 'القيمة المعلنة': 'Node.js (npx) أو Python 3.10+' },
        ],
        note: 'بحسب صفحة الأسعار، يتطلب رصيد الذكاء الاصطناعي المدمج الإصدار PapersGPT v2.3.0 على الأقل. بحسب المطوّر، تعمل النماذج المحلية على حاسوبك دون مفتاح؛ أما النموذج السحابي فيحتاج إلى اتصال بالشبكة.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**جوهر PapersGPT هو الدردشة بالذكاء الاصطناعي مع ملفات PDF في Zotero، ويحيط به البحث والتتبّع والربط بالوكلاء.** كل البنود أدناه أقوال المطوّر من الموقع وREADME.',
        ],
        items: [
          'دردشة مع ملف PDF واحد من عارض PDF في Zotero، أو مع عدة ملفات أو مجموعة كاملة تحددها في النافذة الرئيسية.',
          'البحث في المكتبة كلها: فعّل «Search entire library» لاسترجاع مقاطع من كل ملفات PDF المفهرسة والحصول على إجابة واحدة مجمّعة.',
          'Literature Radar: تشترك في موضوعات وتتلقى ملخصًا يوميًا للأوراق الجديدة من arXiv وPubMed وSemantic Scholar وEurope PMC وCrossref وbioRxiv وmedRxiv؛ وبحسب README تنتقل الاستعلامات من جهازك إلى هذه المصادر دون خادم وسيط.',
          'AutoPilot: تحدد هدفًا بحثيًا فيقرأ مجموعة كاملة ويكتب النتائج في ملاحظات Zotero منظمة؛ ويقول المطوّر إنه يمكن تشغيله طوال الليل بنماذج سحابية أو محلية.',
          'اقتباسات يفتح النقر عليها الورقة المقتبسة، وأوامر جاهزة مثل Summary وBackground وLiterature review، وحفظ الاستنتاجات في ملاحظات Zotero.',
          'اختيار النموذج: أكثر من 30 نموذجًا سحابيًا، أو مفتاح API الخاص بك، أو نقطة نهاية مخصصة متوافقة مع OpenAI، أو Ollama، أو نماذج محلية مدمجة (Gemma 4 وQwen 3.5 وMistral 7B وغيرها) تُنزَّل من Hugging Face.',
          'خادم MCP لـ Zotero مبني على حزمة DocsAgent لعملاء Claude Desktop وClaude Code وCursor وعملاء MCP الآخرين؛ ويقول المطوّر إنه يستطيع فهرسة المكتبة والبحث فيها دون فتح Zotero.',
          'ملف SKILL للوكلاء يمكن لمستخدمي OpenClaw وOpenAI وClaude وCursor وClaude Code وCodeX وGemini CLI تحميله، وهو مرتبط من README.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**يقول المطوّر إن التحليل والفهرسة والبحث تعمل على حاسوبك وإن الدردشات تذهب مباشرة إلى مزوّد النموذج الذي تختاره، لكن سياسة الخصوصية تعود إلى 2024 ولا تصف رصيد الذكاء الاصطناعي المدمج.**',
          'بحسب سياسة الخصوصية (سارية من 25 مايو 2024)، لا يجمع التطبيق مفاتيح API ولا رسائل الدردشة ولا سجل الاستخدام، فهي تبقى على حاسوبك، وتذهب الطلبات مباشرة إلى واجهات OpenAI أو Anthropic أو Google دون خادم وسيط. لا يتطلب الاستخدام تسجيلًا. تذكر السياسة أنه تُجمع سجلات أعطال مجهولة لتحسين التطبيق، وأن شراء ترخيص يجمع بريدك الإلكتروني.',
          'بحسب السياسة، يستخدم الموقع Vercel للاستضافة وVercel Analytics، وتعالج Lemon Squeezy المدفوعات. ويصف المطوّر النماذج المحلية مع المعالجة المحلية للمستندات بأنها تبقي البيانات على الجهاز.',
          'رصيد الذكاء الاصطناعي المدمج (أُضيف في v2.3.0 دون حاجة إلى مفتاح API) أحدث من السياسة. لا تذكر الصفحات التي قرأتها PromptQuorum ما إذا كانت هذه الدردشات تمر عبر خادم PapersGPT، لذا تحقّق من ذلك قبل استخدام أوراق سرية أو غير منشورة. لا تذكر السياسة ولا الشروط شركة أو عنوانًا أو قانونًا واجب التطبيق؛ وجهة الاتصال عنوان بريد إلكتروني.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب PapersGPT من يحتفظون بأوراقهم في Zotero ويريدون إجابات ذكاء اصطناعي مع اقتباسات في المكان نفسه.**',
        ],
        items: [
          'الباحثون والطلاب الذين يريدون إجابات مع اقتباسات عن ورقة واحدة أو مجموعة أو المكتبة كلها.',
          'من يريدون تتبّع الأوراق الجديدة في موضوع ما داخل مدير المراجع.',
          'المطوّرون ومستخدمو الوكلاء الذين يريدون أن يبحث عميل MCP في مكتبة Zotero.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        content: [
          '**لا يناسب PapersGPT بعض الحالات، وتبقى عدة تفاصيل غير متحقَّق منها.**',
        ],
        items: [
          'غير مناسب: لمن لا يستخدم Zotero. PapersGPT إضافة له وليس قارئًا مستقلًا.',
          'غير مناسب: لمن يريد سعرًا واضحًا واحدًا. تعرض صفحات المطوّر أسعارًا وشروطًا مختلفة للخطة المجانية.',
          'غير مناسب: للمؤسسات التي لا تستطيع استخدام برمجيات بترخيص AGPL. يفرض AGPL-3.0 واجب مشاركة المصدر للنسخ المعدَّلة المقدَّمة عبر الشبكة؛ اسأل فريقك القانوني.',
          'غير متحقَّق منه: جودة الإجابات ودقة الاقتباسات ونتائج AutoPilot. لم تشغّل PromptQuorum الإضافة.',
          'غير متحقَّق منه: السرعة واستهلاك الموارد. لم تقِسهما PromptQuorum ولم تجد أرقامًا مستقلة.',
          'غير متحقَّق منه: شروط الخطة المجانية. تصف الأسئلة الشائعة نماذج محلية مجانية بلا حد زمني، وتصف صفحة الأسعار نسخة تجريبية بـ 20 دردشة مع ملف PDF واحد وعدد محدود من مرات التشغيل.',
          'غير متحقَّق منه: الأسعار. تعرض صفحة الأسعار والأسئلة الشائعة والبيانات المنظمة للموقع مبالغ مختلفة، لذا لا نذكر أيًّا منها هنا.',
          'غير متحقَّق منه: ما إذا كانت الدردشات التي تستخدم الرصيد المدمج تمر عبر خادم PapersGPT، وما الذي تغطيه سياسة الخصوصية لعام 2024 بعد v2.3.0.',
          'غير متحقَّق منه: الشركة أو البلد وراء المشروع، وأعداد المستخدمين والتقييمات التي يعرضها الموقع، والمراجعات المستقلة. لم نجد أيًّا منها، ولم تُعامل صفحات المقارنة لدى المطوّر نفسه كمصدر مستقل.',
          'غير متحقَّق منه: معلومات الإصدار. تنتهي صفحة سجل التغييرات في الموقع عند v0.6.0 وتذكر بياناته المنظمة 0.6.0، بينما تصل إصدارات GitHub إلى v2.3.0؛ وتعتمد هذه المراجعة على GitHub.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'PapersGPT مقابل البدائل',
        itemHeadings: true,
        content: [
          '**PapersGPT إضافة لـ Zotero؛ ولم تقارنه PromptQuorum عمليًا بالبدائل.** الأدوات التالية أدوات أخرى للدردشة مع المستندات والبحث في الدليل، موصوفة وفق مراجعاتها الخاصة.',
        ],
        columns: ['الأداة', 'المذكور في المصادر'],
        rows: [
          { 'الأداة': 'PapersGPT', 'المذكور في المصادر': 'إضافة Zotero؛ AGPL-3.0؛ خطة مجانية + مدفوعة' },
          { 'الأداة': '[SurfSense](/ar/power-local-llm/surfsense-review)', 'المذكور في المصادر': 'تطبيق سطح مكتب؛ Apache-2.0؛ وكيل بأسلوب NotebookLM' },
          { 'الأداة': '[AnythingLLM](/ar/power-local-llm/anythingllm-review)', 'المذكور في المصادر': 'سطح مكتب وويب؛ MIT؛ دردشة مستندات وRAG' },
          { 'الأداة': '[Khoj](/ar/power-local-llm/khoj-ai-second-brain-review)', 'المذكور في المصادر': 'ويب وسطح مكتب؛ AGPL-3.0؛ عقل ثانٍ شخصي' },
          { 'الأداة': '[مقارنة أدوات استرجاع المعرفة](/ar/power-local-llm/local-llm-knowledge-retrieval-compared)', 'المذكور في المصادر': 'مقارنة الفئة لأدوات المستندات' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل PapersGPT مجاني؟',
            a: 'جزئيًا. الشيفرة مفتوحة المصدر بترخيص AGPL-3.0، ويقدّم المطوّر خطة مجانية وخططًا مدفوعة (Basic وPremium وBusiness) بحدود على الميزات. تعرض صفحات المطوّر أسعارًا وشروطًا مختلفة للخطة المجانية، لذا راجع صفحة الأسعار قبل الاعتماد على أي مبلغ. أما النماذج السحابية التي تستخدمها بمفتاحك الخاص فيحاسبك عليها مزوّدها.',
          },
          {
            q: 'هل أحتاج إلى Zotero لاستخدام PapersGPT؟',
            a: 'نعم بالنسبة إلى الإضافة: تُثبَّت كملف .xpi في Zotero من الإصدار 7 إلى 10. وبحسب صفحة MCP لدى المطوّر، يستطيع خادم MCP فهرسة مكتبة Zotero والبحث فيها دون فتح Zotero.',
          },
          {
            q: 'كيف أثبّت PapersGPT؟',
            a: 'ثبّت Zotero، ونزّل papersgpt-v2.3.0.xpi من صفحة الإصدارات على GitHub، ثم ثبّته في Zotero كما يصف README وQuickstart. لم تجرِ PromptQuorum التثبيت.',
          },
          {
            q: 'هل يعمل PapersGPT دون اتصال بنماذج محلية؟',
            a: 'بحسب المطوّر نعم: تُنزَّل النماذج المحلية المدمجة مثل Gemma 4 وQwen 3.5 وMistral 7B من Hugging Face وتعمل على حاسوبك، والفهرسة والبحث محليان. ويمكنك أيضًا استخدام Ollama أو نقطة نهاية مخصصة متوافقة مع OpenAI. لم تختبر PromptQuorum الاستخدام دون اتصال.',
          },
          {
            q: 'هل يستطيع Claude أو Cursor البحث في مكتبة Zotero عبر PapersGPT؟',
            a: 'نعم بحسب المطوّر. يعمل خادم MCP لـ Zotero المبني على حزمة DocsAgent مع عملاء MCP مثل Claude Desktop وClaude Code وCursor. شغّل نواة البحث بالأمر npx @docsagent/docsagent start أو pip install docsagent-mcp، ثم أضف الخادم إلى إعدادات MCP في عميلك.',
          },
          {
            q: 'ما هو Literature Radar في PapersGPT؟',
            a: 'بحسب README، يقدّم ملخصًا يوميًا للأوراق الجديدة في المواضيع التي تشترك فيها، من arXiv وPubMed وSemantic Scholar وEurope PMC وCrossref وbioRxiv وmedRxiv. ووفق المطوّر تنتقل الاستعلامات من جهازك إلى هذه المصادر دون خادم وسيط. وتضع صفحة الأسعار Explore في خطة Basic وTrack في خطتي Premium وBusiness.',
          },
          {
            q: 'ماذا يفعل AutoPilot؟',
            a: 'يقرأ AutoPilot مجموعة كاملة سعيًا إلى هدف بحثي ويكتب النتائج في ملاحظات Zotero منظمة؛ ويقول المطوّر إنه يستطيع العمل طوال الليل بنماذج سحابية أو محلية. وتدرجه صفحة الأسعار ضمن Premium وBusiness. ولم تشغّله PromptQuorum.',
          },
          {
            q: 'ما نماذج الذكاء الاصطناعي التي يستطيع PapersGPT استخدامها؟',
            a: 'بحسب المطوّر: أكثر من 30 نموذجًا سحابيًا، أو مفتاح API الخاص بك، أو نقطة وصول مخصصة متوافقة مع OpenAI، أو Ollama، أو نماذج محلية مدمجة مثل Gemma 4 وQwen 3.5 وMistral 7B تُنزَّل من Hugging Face.',
          },
          {
            q: 'هل يستطيع PapersGPT البحث في مكتبة Zotero كلها؟',
            a: 'نعم بحسب المطوّر: فعّل «Search entire library» لاسترجاع مقاطع من كل ملفات PDF المفهرسة والحصول على إجابة واحدة مجمّعة. وتدرج صفحة الأسعار الدردشة مع المكتبة كلها ابتداءً من خطة Basic.',
          },
          {
            q: 'هل يذكر PapersGPT مصادره؟',
            a: 'يقول المطوّر إن كل إجابة تحمل اقتباسات يفتح النقر عليها الورقة المقتبسة. ولم تتحقق PromptQuorum من دقة الاقتباسات.',
          },
          {
            q: 'هل تبقى محادثاتي على جهازي؟',
            a: 'يقول المطوّر إن التحليل والفهرسة والبحث تعمل محليًا وإن المحادثات تذهب مباشرة إلى مزوّد النماذج الذي تختاره. وسياسة الخصوصية مؤرخة في 25 مايو 2024، أي قبل أرصدة الذكاء الاصطناعي المدمجة في v2.3.0، ولا تذكر الصفحات التي قرأتها PromptQuorum ما إذا كانت هذه المحادثات تمر عبر خادم PapersGPT.',
          },
          {
            q: 'هل يُصان PapersGPT بنشاط؟',
            a: 'صدر الإصدار v2.3.0 في 13 نوفمبر 2026، وكان آخر commit على GitHub في 16 نوفمبر 2026 (تعديل على README). وتنتهي صفحة سجل التغييرات في الموقع عند v0.6.0، لذلك تأخذ هذه المراجعة معلومات الإصدار من GitHub.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق PapersGPT نظرة إذا كانت أوراقك في Zotero بالفعل وتريد إجابات ذكاء اصطناعي مع اقتباسات وبحثًا في المكتبة كلها وتتبّعًا للأوراق في المكان نفسه.**',
          'على الورق يغطي الكثير: دردشة مع ملف PDF واحد أو عدة ملفات، والبحث في المكتبة، وLiterature Radar، وAutoPilot، ونماذج سحابية ومحلية، وOllama، وخادم MCP، وإصدارات متكررة (v2.3.0 في 13 نوفمبر 2026 مع commit في 16 نوفمبر 2026).',
          'المقايضات حقيقية. لا يعمل إلا داخل Zotero، والسعر وشروط الخطة المجانية غير واضحين بين صفحات المطوّر، وسياسة الخصوصية تسبق الرصيد المدمج، ولا تُذكر شركة ولا بلد. لم تختبر PromptQuorum الإضافة، لذا جرّبها على مجموعة صغيرة بنموذج محلي وتحقق من الاقتباسات قبل الاعتماد عليها.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع PapersGPT](https://www.papersgpt.com/en) — الميزات والنماذج والبيانات المنظمة، جرى التحقق منه في 17 نوفمبر 2026.',
          '[صفحة الأسعار](https://www.papersgpt.com/en/pricing) — الخطط وحدود الميزات والنسخة التجريبية والرصيد، جرى التحقق منها في 17 نوفمبر 2026.',
          '[الأسئلة الشائعة](https://www.papersgpt.com/en/faq) — أقوال عن الخطة المجانية والنماذج المحلية، جرى التحقق منها في 17 نوفمبر 2026.',
          '[صفحة خادم MCP لـ Zotero](https://www.papersgpt.com/en/mcpserver) — أوامر تثبيت MCP، جرى التحقق منها في 17 نوفمبر 2026.',
          '[سياسة الخصوصية](https://www.papersgpt.com/en/privacy/privacy_policy) — معالجة البيانات، سارية من 25 مايو 2024، جرى التحقق منها في 17 نوفمبر 2026.',
          '[الشروط والأحكام](https://www.papersgpt.com/en/terms/terms_and_conditions) — قُرئت بحثًا عن بيانات الشركة أو البلد، جرى التحقق منها في 17 نوفمبر 2026.',
          '[صفحة سجل التغييرات](https://www.papersgpt.com/resources/changelog) — سجل الإصدارات الظاهر في الموقع، جرى التحقق منها في 17 نوفمبر 2026.',
          '[مستودع GitHub](https://github.com/papersgpt/papersgpt-for-zotero) — المستودع والترخيص وتاريخ الإنشاء وآخر commit، جرى التحقق منه في 17 نوفمبر 2026.',
          '[README](https://github.com/papersgpt/papersgpt-for-zotero#readme) — الميزات والتوافق وquickstart وMCP وskill، جرى التحقق منه في 17 نوفمبر 2026.',
          '[الإصدار papersgpt-v2.3.0](https://github.com/papersgpt/papersgpt-for-zotero/releases/tag/papersgpt-v2.3.0) — أحدث إصدار وتاريخه وملف .xpi، جرى التحقق منه في 17 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة SurfSense](/ar/power-local-llm/surfsense-review) — بديل مفتوح المصدر لسطح المكتب عن NotebookLM يبحث في مستنداتك ويحرّرها على حاسوبك.',
          '[مراجعة AnythingLLM](/ar/power-local-llm/anythingllm-review) — مساحة عمل للدردشة مع المستندات وRAG بمخزن متجهات مدمج.',
          '[مراجعة Khoj](/ar/power-local-llm/khoj-ai-second-brain-review) — عقل ثانٍ شخصي بالذكاء الاصطناعي يتزامن مع Obsidian وNotion.',
          '[مقارنة أدوات استرجاع المعرفة بنماذج LLM محلية](/ar/power-local-llm/local-llm-knowledge-retrieval-compared) — مقارنة الفئة لأدوات المستندات والمعرفة.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلي.',
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
    theme: 'RAG & Document Chat',
    heroImage: '/images/papersgpt-review-hero-ko.webp',
    title: 'PapersGPT 리뷰: PDF 채팅, 라이브러리 검색, MCP를 지원하는 Zotero AI 플러그인',
    seoTitle: 'PapersGPT 리뷰: Zotero AI 플러그인과 MCP',
    intro:
      'PapersGPT는 문헌 관리 프로그램 Zotero용 오픈소스(AGPL-3.0) 플러그인으로, PDF와 대화하고, 라이브러리 전체를 검색하고, 새 논문을 추적하고, 결과를 Zotero 노트로 저장합니다. 이 리뷰는 개발자 웹사이트, GitHub 저장소, 릴리스 페이지, 개인정보 처리방침을 2026년 11월 17일에 확인한 내용을 바탕으로 합니다. PromptQuorum은 이 플러그인을 직접 테스트하지 않았습니다.',
    metaDescription:
      'PapersGPT는 PDF 채팅, 라이브러리 전체 검색, 논문 추적을 제공하는 AGPL-3.0 Zotero 플러그인입니다. 클라우드·로컬 모델과 MCP 지원, 설치와 개인정보를 정리했습니다.',
    twitterDescription:
      'PapersGPT는 Zotero에 PDF 채팅, 라이브러리 전체 검색, 논문 추적을 더합니다. 클라우드·로컬 모델과 MCP 서버 지원. 오픈소스, 일부 무료(프리미엄 요금제).',
    audience:
      'Zotero로 논문을 관리하는 연구자와 학생, 논문 라이브러리를 MCP 클라이언트에 연결하는 개발자, 문헌 작업용 AI 도구를 검토하는 팀',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PapersGPT',
    targetKeywords: [
      'PapersGPT 리뷰',
      'Zotero AI 플러그인',
      'Zotero PDF 채팅',
      'Zotero MCP 서버',
      'Zotero 라이브러리 전체 검색',
      'PapersGPT 설치',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**PapersGPT는 PDF 한 개 또는 여러 개와 대화하고, 라이브러리 전체를 검색하고, 새 논문을 추적하는 Zotero용 오픈소스(AGPL-3.0) AI 플러그인입니다.** Zotero 7~10 안에 .xpi 파일로 설치하며, 클라우드 모델, 본인의 API 키, Ollama, 내장 로컬 모델과 함께 작동하고, Claude Desktop이나 Cursor 같은 클라이언트용 MCP 서버를 포함합니다. 무료 요금제와 유료 요금제가 있으며, PromptQuorum은 테스트하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'PapersGPT는 무엇이며 누구를 위한 것입니까?',
        answer:
          'PapersGPT는 문헌 관리 프로그램 Zotero에 AI 채팅과 검색을 더하는 플러그인입니다. 이미 논문을 Zotero에 보관하고 있으며, 출처 논문으로 연결되는 인용이 달린 답변을 원하는 연구자와 학생에게 적합합니다.',
        bullets: [
          'macOS, Windows, Linux의 Zotero 7~10용 플러그인(.xpi).',
          '가격: 무료 요금제와 유료 요금제, 라이선스 AGPL-3.0.',
          'PDF 한 개, 여러 개 또는 라이브러리 전체와 대화하며, Literature Radar가 새 논문을 추적하고 AutoPilot이 컬렉션을 일괄로 읽어 Zotero 노트에 저장합니다.',
          '개발자에 따르면 30개 이상의 클라우드 모델, 본인의 키, Ollama, 내장 로컬 모델과 함께 작동합니다.',
          '개인정보 처리방침은 2024년 문서입니다. 기밀 논문을 쓰기 전에 내장 크레딧의 데이터 흐름을 확인하십시오.',
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
            text: 'PapersGPT는 Zotero 안에서 PDF와 대화하고, 라이브러리 전체를 검색하고, 새 논문을 추적하며, 클라우드 또는 로컬 AI 모델을 사용할 수 있습니다.',
          },
          {
            type: 'plain-terms',
            text: 'Zotero 안에 상주하는 AI 연구 비서라고 생각하시면 됩니다. 개발자에 따르면 이미 모아 둔 PDF를 읽고 인용과 함께 질문에 답합니다. AI 모델은 클라우드 서비스, 본인의 키, 또는 본인 컴퓨터에서 실행되는 모델 중에서 고를 수 있습니다.',
          },
        ],
        items: [
          'AGPL-3.0 오픈소스입니다. 무료 요금제와 유료 요금제가 있으며 개발자 페이지마다 가격이 다르므로 구매 전에 요금 페이지를 확인하십시오.',
          'Zotero 7~10(macOS, Windows, Linux) 안에 .xpi 파일로 설치합니다. Zotero가 먼저 설치되어 있어야 합니다.',
          '모델(개발자 설명): 30개 이상의 클라우드 모델, 본인의 API 키, OpenAI 호환 사용자 지정 엔드포인트, Ollama, Hugging Face에서 받는 내장 로컬 모델.',
          'MCP 서버가 Zotero 라이브러리를 Claude Desktop, Claude Code, Cursor 및 다른 MCP 클라이언트에 연결합니다.',
          'PromptQuorum은 플러그인을 테스트하지 않았습니다. 개인정보 처리방침은 2024년 5월 문서로, v2.3.0에서 추가된 내장 AI 크레딧보다 앞섭니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '개발자는 파싱, 인덱싱, 검색이 로컬에서 실행된다고 밝힙니다. 내장 크레딧을 쓰는 채팅이 PapersGPT 서버를 거치는지는 PromptQuorum이 읽은 페이지에 나와 있지 않습니다.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**PapersGPT는 라이브러리 안의 PDF에 AI 채팅, 라이브러리 전체 검색, 논문 추적, 일괄 읽기를 더하는 Zotero 플러그인입니다.**',
          '프로젝트는 "PapersGPT Team"이 AGPL-3.0으로 공개합니다(GitHub: papersgpt/papersgpt-for-zotero). 최신 릴리스 v2.3.0은 2026년 11월 13일에 나왔고 저장소의 마지막 커밋은 2026년 11월 16일(README 수정)이므로 개발이 계속되고 있으며 방치 프로젝트 경고는 해당하지 않습니다. 저장소는 2024년 11월에 만들어졌습니다.',
          '개발자가 제시하는 핵심 기능은 다음과 같습니다. 모든 PDF를 대상으로 하는 라이브러리 전체 검색, arXiv, PubMed, Semantic Scholar, Europe PMC, Crossref, bioRxiv, medRxiv의 새 논문을 매일 모아 주는 Literature Radar, 방법과 결과를 비교하는 다중 PDF 채팅, 컬렉션 전체를 읽고 구조화된 Zotero 노트를 작성하는 AutoPilot. 모든 답변에는 인용된 논문으로 바로 이동하는 인용이 붙는다고 합니다.',
          '요금제에 따라 기능이 제한됩니다. 요금 페이지에 따르면 라이선스 없이는 PDF 한 개와의 체험 채팅 20회와 최대 3개 PDF와의 채팅을 쓸 수 있습니다. Basic은 라이브러리 전체 채팅과 Literature Radar Explore를 추가하고, Premium과 Business는 AutoPilot과 Literature Radar Track을 추가합니다. AI 채팅 크레딧 충전 팩도 있습니다.',
          '이는 개발자의 설명입니다. PromptQuorum은 플러그인을 실행하지 않았으며 답변 품질, 인용의 정확도, 개발자가 공개한 속도 수치를 확인하지 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '설치 방법',
        content: [
          '**PapersGPT는 Zotero 안에 플러그인 파일로 설치합니다. Zotero MCP 서버는 별도의 npm 또는 Python 패키지입니다.**',
          'README는 GitHub 릴리스 페이지에서 .xpi 파일을 내려받아 Zotero에 설치하라고 안내하며, 단계는 개발자의 Quickstart 가이드에 있습니다. 처음 사용할 때 모델을 고릅니다. 내장 체험판이 적용된 클라우드 모델(README에 따르면 시작할 때 API 키가 필요 없음), 본인의 키, 내장 로컬 모델 중 하나입니다.',
        ],
        columns: ['방법', '설치 방법'],
        rows: [
          { '방법': '[Zotero 플러그인](https://github.com/papersgpt/papersgpt-for-zotero/releases/tag/papersgpt-v2.3.0)', '설치 방법': 'papersgpt-v2.3.0.xpi를 받아 Zotero 7–10에 설치' },
          { '방법': '[Quickstart 가이드](https://www.papersgpt.com/quickstart)', '설치 방법': '개발자의 설치 및 첫 사용 단계' },
          { '방법': '[MCP 서버(npm)](https://www.papersgpt.com/en/mcpserver)', '설치 방법': 'npx @docsagent/docsagent start (Node.js)' },
          { '방법': '[MCP 서버(Python)](https://www.papersgpt.com/en/mcpserver)', '설치 방법': 'pip install docsagent-mcp (Python 3.10+)' },
        ],
        note: 'PapersGPT는 독립 실행형 앱이 아니라 플러그인이므로 Zotero가 필요합니다. MCP 페이지에 따르면 검색 코어는 Zotero를 열지 않고도 실행할 수 있습니다. PromptQuorum은 .xpi 파일을 설치하거나 검사하지 않았습니다.',
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항',
        content: [
          '**PapersGPT에는 macOS, Windows, Linux의 Zotero 7, 8, 9 또는 10이 필요하며, 하드웨어 요구 사항은 선택하는 로컬 모델에 따라 달라집니다.**',
          '호환 목록은 README에서 가져왔습니다. 최소 RAM, 디스크, GPU 수치는 공개되어 있지 않습니다. PromptQuorum은 리소스 사용량을 측정하지 않았습니다.',
        ],
        columns: ['항목', '명시된 내용'],
        rows: [
          { '항목': 'Zotero', '명시된 내용': '7, 8, 9 또는 10 (README)' },
          { '항목': '운영체제', '명시된 내용': 'macOS, Windows, Linux' },
          { '항목': '플러그인 파일', '명시된 내용': 'Zotero에 설치하는 .xpi' },
          { '항목': '클라우드 모델', '명시된 내용': '인터넷, 내장 체험판 또는 본인 키' },
          { '항목': '로컬 모델', '명시된 내용': 'Hugging Face에서 한 번에 다운로드' },
          { '항목': 'RAM / GPU / 디스크', '명시된 내용': '명시되지 않음, 모델에 따라 다름' },
          { '항목': 'MCP 서버', '명시된 내용': 'Node.js(npx) 또는 Python 3.10+' },
        ],
        note: '요금 페이지에 따르면 내장 AI 크레딧에는 PapersGPT v2.3.0 이상이 필요합니다. 개발자에 따르면 로컬 모델은 본인 컴퓨터에서 실행되어 키가 필요 없고, 클라우드 모델은 네트워크 접속이 필요합니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**PapersGPT의 핵심은 Zotero PDF에 대한 AI 채팅이며, 그 주변에 검색, 추적, 에이전트 연결이 있습니다.** 아래 항목은 모두 웹사이트와 README에 나온 개발자의 주장입니다.',
        ],
        items: [
          'Zotero PDF 뷰어에서 PDF 한 개와 대화하거나, 메인 창에서 선택한 여러 PDF 또는 컬렉션 전체와 대화합니다.',
          '라이브러리 전체 검색: "Search entire library"를 선택하면 인덱싱된 모든 PDF에서 관련 구절을 찾아 하나의 종합 답변을 제공합니다.',
          'Literature Radar: 주제를 구독하면 arXiv, PubMed, Semantic Scholar, Europe PMC, Crossref, bioRxiv, medRxiv의 새 논문을 매일 요약해 보내 줍니다. README에 따르면 쿼리는 중계 서버 없이 사용자의 컴퓨터에서 해당 소스로 직접 전송됩니다.',
          'AutoPilot: 연구 목표를 정하면 컬렉션을 읽고 결과를 구조화된 Zotero 노트에 기록합니다. 개발자에 따르면 클라우드 모델이나 로컬 모델로 밤새 실행할 수 있습니다.',
          '클릭하면 인용된 논문이 열리는 인용, Summary, Background, Literature review 같은 기본 제공 프롬프트, 그리고 Zotero 노트로의 저장.',
          '모델 선택: 30개 이상의 클라우드 모델, 본인의 API 키, OpenAI 호환 사용자 지정 엔드포인트, Ollama, Hugging Face에서 받는 내장 로컬 모델(Gemma 4, Qwen 3.5, Mistral 7B 등).',
          'DocsAgent 패키지를 기반으로 한 Zotero MCP 서버로, Claude Desktop, Claude Code, Cursor 및 다른 MCP 클라이언트용입니다. 개발자에 따르면 Zotero를 열지 않고도 라이브러리를 인덱싱하고 검색할 수 있습니다.',
          'OpenClaw, OpenAI, Claude, Cursor, Claude Code, CodeX, Gemini CLI 사용자가 불러올 수 있는 에이전트용 SKILL 파일로, README에서 링크됩니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 데이터 흐름',
        content: [
          '**개발자는 파싱, 인덱싱, 검색이 사용자의 컴퓨터에서 실행되고 채팅은 선택한 모델 제공업체로 직접 전달된다고 밝히지만, 개인정보 처리방침은 2024년 문서이며 내장 AI 크레딧은 다루지 않습니다.**',
          '개인정보 처리방침(2024년 5월 25일 시행)에 따르면 앱은 API 키, 채팅 메시지, 사용 기록을 수집하지 않으며 이 정보는 사용자의 컴퓨터에 남고, 요청은 중간 서버 없이 OpenAI, Anthropic, Google의 API로 직접 전송됩니다. 사용에 회원 가입은 필요하지 않습니다. 방침에는 앱 개선을 위해 익명 충돌 로그를 수집하고, 라이선스를 구매하면 이메일 주소를 수집한다고 적혀 있습니다.',
          '방침에 따르면 웹사이트는 호스팅에 Vercel과 Vercel Analytics를 사용하며 결제는 Lemon Squeezy가 처리합니다. 개발자는 로컬 모델과 로컬 문서 처리를 통해 데이터가 기기 안에 머문다고 설명합니다.',
          '내장 AI 크레딧(v2.3.0에서 추가, API 키 불필요)은 방침보다 나중에 생긴 기능입니다. PromptQuorum이 읽은 페이지에는 이런 채팅이 PapersGPT 서버를 거치는지 나와 있지 않으므로, 기밀이거나 미발표인 논문을 쓰기 전에 확인하십시오. 방침과 약관에는 회사, 주소, 준거법이 나와 있지 않으며 연락처는 이메일 주소입니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        content: [
          '**PapersGPT는 논문을 Zotero에 보관하며 같은 곳에서 인용이 달린 AI 답변을 원하는 분께 적합합니다.**',
        ],
        items: [
          '논문 한 편, 컬렉션, 또는 라이브러리 전체에 대해 인용이 달린 답변을 원하는 연구자와 학생.',
          '문헌 관리 프로그램 안에서 특정 주제의 새 논문을 추적하고 싶은 분.',
          'MCP 클라이언트로 Zotero 라이브러리를 검색하게 하고 싶은 개발자와 에이전트 사용자.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        content: [
          '**PapersGPT가 맞지 않는 상황도 있으며, 확인하지 못한 세부 사항이 여럿 남아 있습니다.**',
        ],
        items: [
          '적합하지 않음: Zotero를 쓰지 않는 분. PapersGPT는 Zotero용 플러그인이며 독립 실행형 리더가 아닙니다.',
          '적합하지 않음: 명확한 단일 가격을 원하는 분. 개발자 페이지마다 가격과 무료 요금제 조건이 다릅니다.',
          '적합하지 않음: AGPL 라이선스 소프트웨어를 사용할 수 없는 조직. AGPL-3.0은 네트워크로 제공되는 수정 버전에 소스 공개 의무를 둡니다. 법무팀에 문의하십시오.',
          '미확인: 답변 품질, 인용 정확도, AutoPilot 결과. PromptQuorum은 플러그인을 실행하지 않았습니다.',
          '미확인: 속도와 리소스 사용량. PromptQuorum은 측정하지 않았고 독립적인 수치도 찾지 못했습니다.',
          '미확인: 무료 요금제 조건. FAQ는 기간 제한 없는 무료 로컬 모델을 설명하고, 요금 페이지는 PDF 한 개와의 채팅 20회와 실행 횟수 제한이 있는 체험판을 설명합니다.',
          '미확인: 가격. 요금 페이지, FAQ, 사이트의 구조화 데이터가 서로 다른 금액을 보여 주므로 여기서는 어떤 금액도 인용하지 않습니다.',
          '미확인: 내장 크레딧을 쓰는 채팅이 PapersGPT 서버를 거치는지, 그리고 2024년 개인정보 처리방침이 v2.3.0 이후에 무엇을 다루는지.',
          '미확인: 프로젝트 배후의 회사나 국가, 사이트가 보여 주는 사용자 수와 평점, 독립적인 리뷰. 어느 것도 찾지 못했으며 개발자 자체의 비교 페이지는 독립 자료로 취급하지 않았습니다.',
          '미확인: 버전 정보. 사이트의 변경 내역 페이지는 v0.6.0에서 끝나고 구조화 데이터도 0.6.0이라고 적혀 있지만 GitHub 릴리스는 v2.3.0입니다. 이 리뷰는 GitHub를 따릅니다.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'PapersGPT와 대안 비교',
        itemHeadings: true,
        content: [
          '**PapersGPT는 Zotero 플러그인이며, PromptQuorum은 대안과 직접 비교하지 않았습니다.** 아래 도구는 디렉터리에 있는 다른 문서 채팅·리서치 도구이며 각 도구의 리뷰를 바탕으로 설명합니다.',
        ],
        columns: ['도구', '출처에 기재된 내용'],
        rows: [
          { '도구': 'PapersGPT', '출처에 기재된 내용': 'Zotero 플러그인, AGPL-3.0, 무료 + 유료 요금제' },
          { '도구': '[SurfSense](/ko/power-local-llm/surfsense-review)', '출처에 기재된 내용': '데스크톱 앱, Apache-2.0, NotebookLM식 에이전트' },
          { '도구': '[AnythingLLM](/ko/power-local-llm/anythingllm-review)', '출처에 기재된 내용': '데스크톱과 웹, MIT, 문서 채팅과 RAG' },
          { '도구': '[Khoj](/ko/power-local-llm/khoj-ai-second-brain-review)', '출처에 기재된 내용': '웹과 데스크톱, AGPL-3.0, 개인 세컨드 브레인' },
          { '도구': '[지식 검색 도구 비교](/ko/power-local-llm/local-llm-knowledge-retrieval-compared)', '출처에 기재된 내용': '문서 도구 카테고리 비교' },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'PapersGPT는 무료입니까?',
            a: '일부는 무료입니다. 코드는 AGPL-3.0 오픈소스이며 개발자는 기능 제한이 있는 무료 요금제와 유료 요금제(Basic, Premium, Business)를 제공합니다. 개발자 페이지마다 가격과 무료 요금제 조건이 다르므로 어느 금액이든 믿기 전에 요금 페이지를 확인하십시오. 본인의 키로 쓰는 클라우드 모델은 해당 제공업체가 요금을 청구합니다.',
          },
          {
            q: 'PapersGPT를 쓰려면 Zotero가 필요합니까?',
            a: '플러그인으로 쓰려면 필요합니다. Zotero 7~10 안에 .xpi 파일로 설치합니다. 개발자의 MCP 페이지에 따르면 MCP 서버는 Zotero를 열지 않고도 Zotero 라이브러리를 인덱싱하고 검색할 수 있습니다.',
          },
          {
            q: 'PapersGPT는 어떻게 설치합니까?',
            a: 'Zotero를 설치하고, GitHub 릴리스 페이지에서 papersgpt-v2.3.0.xpi를 내려받아 README와 Quickstart에 설명된 대로 Zotero에 설치합니다. PromptQuorum은 설치를 수행하지 않았습니다.',
          },
          {
            q: 'PapersGPT는 로컬 모델로 오프라인에서 작동합니까?',
            a: '개발자에 따르면 그렇습니다. Gemma 4, Qwen 3.5, Mistral 7B 같은 내장 로컬 모델을 Hugging Face에서 받아 본인 컴퓨터에서 실행하며, 인덱싱과 검색도 로컬입니다. Ollama나 OpenAI 호환 사용자 지정 엔드포인트도 사용할 수 있습니다. PromptQuorum은 오프라인 사용을 테스트하지 않았습니다.',
          },
          {
            q: 'Claude나 Cursor가 PapersGPT를 통해 내 Zotero 라이브러리를 검색할 수 있습니까?',
            a: '개발자에 따르면 가능합니다. DocsAgent 패키지를 기반으로 한 Zotero MCP 서버는 Claude Desktop, Claude Code, Cursor 같은 MCP 클라이언트와 함께 작동합니다. npx @docsagent/docsagent start 또는 pip install docsagent-mcp로 검색 코어를 시작한 뒤 클라이언트의 MCP 설정에 서버를 추가하십시오.',
          },
          {
            q: 'PapersGPT의 Literature Radar는 무엇입니까?',
            a: 'README에 따르면 구독한 주제의 새 논문을 arXiv, PubMed, Semantic Scholar, Europe PMC, Crossref, bioRxiv, medRxiv에서 모아 매일 요약으로 전달합니다. 개발자에 따르면 쿼리는 중계 서버 없이 사용자의 컴퓨터에서 이들 소스로 직접 전송됩니다. 가격 페이지에서는 Explore가 Basic에, Track이 Premium과 Business에 포함되어 있습니다.',
          },
          {
            q: 'AutoPilot은 어떤 일을 합니까?',
            a: 'AutoPilot은 연구 목표에 맞춰 컬렉션 전체를 읽고 결과를 구조화된 Zotero 노트로 작성합니다. 개발자는 클라우드 또는 로컬 모델로 밤새 실행할 수 있다고 말합니다. 가격 페이지에서는 Premium과 Business에 포함되어 있습니다. PromptQuorum은 실행해 보지 않았습니다.',
          },
          {
            q: 'PapersGPT는 어떤 AI 모델을 사용할 수 있습니까?',
            a: '개발자에 따르면 30개 이상의 클라우드 모델, 본인의 API 키, OpenAI 호환 사용자 지정 엔드포인트, Ollama, 또는 Hugging Face에서 내려받는 내장 로컬 모델(Gemma 4, Qwen 3.5, Mistral 7B 등)을 사용할 수 있습니다.',
          },
          {
            q: 'PapersGPT로 Zotero 라이브러리 전체를 검색할 수 있습니까?',
            a: '개발자에 따르면 가능합니다. "Search entire library"를 선택하면 인덱싱된 모든 PDF에서 관련 구절을 찾아 하나의 종합 답변을 제공합니다. 가격 페이지에서는 라이브러리 전체 대화가 Basic 요금제 이상에 포함되어 있습니다.',
          },
          {
            q: 'PapersGPT는 출처를 표시합니까?',
            a: '개발자에 따르면 모든 답변에 클릭하면 인용된 논문이 열리는 인용이 붙습니다. PromptQuorum은 인용의 정확성을 확인하지 않았습니다.',
          },
          {
            q: '대화 내용이 내 컴퓨터에 남습니까?',
            a: '개발자에 따르면 분석, 인덱싱, 검색은 로컬에서 실행되고 대화는 사용자가 선택한 모델 제공업체로 직접 전송됩니다. 개인정보 처리방침은 2024년 5월 25일자로 v2.3.0의 내장 AI 크레딧보다 앞선 것이며, PromptQuorum이 읽은 페이지에는 이러한 대화가 PapersGPT 서버를 거치는지 여부가 나와 있지 않습니다.',
          },
          {
            q: 'PapersGPT는 활발히 유지 관리되고 있습니까?',
            a: 'v2.3.0은 2026년 11월 13일에 나왔고, GitHub의 마지막 커밋은 2026년 11월 16일(README 변경)이었습니다. 사이트의 변경 이력 페이지는 v0.6.0에서 끝나므로, 이 리뷰는 버전 정보를 GitHub에서 가져왔습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**논문이 이미 Zotero에 있고 인용이 달린 AI 답변, 라이브러리 전체 검색, 논문 추적을 한곳에서 쓰고 싶다면 PapersGPT는 살펴볼 만합니다.**',
          '문서상으로는 폭넓게 다룹니다. PDF 한 개 또는 여러 개와의 채팅, 라이브러리 전체 검색, Literature Radar, AutoPilot, 클라우드와 로컬 모델, Ollama, MCP 서버, 잦은 릴리스(2026년 11월 13일 v2.3.0, 2026년 11월 16일 커밋)가 있습니다.',
          '절충점도 분명합니다. Zotero 안에서만 쓸 수 있고, 가격과 무료 요금제 조건은 개발자 페이지마다 불분명하며, 개인정보 처리방침은 내장 크레딧보다 앞서고, 회사나 국가가 명시되어 있지 않습니다. PromptQuorum은 플러그인을 테스트하지 않았으므로, 작은 컬렉션과 로컬 모델로 먼저 시험해 보고 인용을 확인한 뒤에 의존하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[PapersGPT 웹사이트](https://www.papersgpt.com/en) — 기능, 모델, 구조화 데이터. 2026년 11월 17일 확인.',
          '[요금 페이지](https://www.papersgpt.com/en/pricing) — 요금제, 기능 제한, 체험판, 크레딧. 2026년 11월 17일 확인.',
          '[FAQ](https://www.papersgpt.com/en/faq) — 무료 요금제와 로컬 모델 관련 설명. 2026년 11월 17일 확인.',
          '[Zotero MCP 서버 페이지](https://www.papersgpt.com/en/mcpserver) — MCP 설치 명령. 2026년 11월 17일 확인.',
          '[개인정보 처리방침](https://www.papersgpt.com/en/privacy/privacy_policy) — 데이터 처리, 2024년 5월 25일 시행. 2026년 11월 17일 확인.',
          '[이용 약관](https://www.papersgpt.com/en/terms/terms_and_conditions) — 회사나 국가 정보를 찾기 위해 읽음. 2026년 11월 17일 확인.',
          '[변경 내역 페이지](https://www.papersgpt.com/resources/changelog) — 사이트에 표시된 버전 이력. 2026년 11월 17일 확인.',
          '[GitHub 저장소](https://github.com/papersgpt/papersgpt-for-zotero) — 저장소, 라이선스, 생성일, 마지막 커밋. 2026년 11월 17일 확인.',
          '[README](https://github.com/papersgpt/papersgpt-for-zotero#readme) — 기능, 호환성, 퀵스타트, MCP, 스킬. 2026년 11월 17일 확인.',
          '[릴리스 papersgpt-v2.3.0](https://github.com/papersgpt/papersgpt-for-zotero/releases/tag/papersgpt-v2.3.0) — 최신 릴리스, 날짜, .xpi 파일. 2026년 11월 17일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[SurfSense 리뷰](/ko/power-local-llm/surfsense-review) — 내 컴퓨터에서 문서를 조사하고 편집하는 오픈소스 데스크톱 NotebookLM 대안.',
          '[AnythingLLM 리뷰](/ko/power-local-llm/anythingllm-review) — 벡터 저장소를 내장한 문서 채팅·RAG 작업 공간.',
          '[Khoj 리뷰](/ko/power-local-llm/khoj-ai-second-brain-review) — Obsidian, Notion과 동기화되는 개인용 AI 세컨드 브레인.',
          '[로컬 LLM 지식 검색 도구 비교](/ko/power-local-llm/local-llm-knowledge-retrieval-compared) — 문서·지식 도구 카테고리 비교.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
        ],
      },
    },
  },
}
