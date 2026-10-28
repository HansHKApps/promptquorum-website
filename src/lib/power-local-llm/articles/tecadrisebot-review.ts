// TecAdRiseBot Review: Free Windows Multi-Agent Desktop That Runs on Cursor's Cloud Models
// Slug: tecadrisebot-review
// Segment: autonomous-agents (hybrid). Competitors block links hermes-agent-review, agent-zero-review, atomic-bot-review, multica-review.
// Sources: the product page tecadrise.ai/products/tecadrisebot and its FAQ/comparison pages, the GitHub repo tecadrise-ai/TecAdRiseBot (README, package.json,
// LICENSE, Releases, commits via the GitHub API) and the Cursor TypeScript SDK docs, all checked 2026-10-28 — no hands-on testing, no maker contact yet.
// The site's legal page (tecadrise.ai/terms, "Terms of Service & Privacy Policy", updated "January 2025") covers the company's website and automation services and
// never mentions the app; it is linked as the only policy the site offers, with that caveat stated. The site is a client-rendered React app, so the legal text was read
// from its JavaScript bundle. No founder is named anywhere on the site; the company is registered in Poland (CEIDG).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/tecadrisebot-review-hero-en.webp',
    title: 'TecAdRiseBot Review: Free Windows Agent Desktop on Cursor Cloud Models',
    seoTitle: 'TecAdRiseBot Review: Windows Agent Desktop on Cursor',
    intro:
      'TecAdRiseBot is a free, MIT-licensed Windows desktop app for running several named AI agents, each with its own model, memory, MCP servers, skills and schedule. It is built on Electron and the Cursor TypeScript SDK by TecAdRise, a company registered in Poland, and its repository was created on 19 September 2026. This review reflects the product page, the GitHub repository and the Cursor SDK documentation as checked on 28 October 2026.',
    metaDescription:
      'TecAdRiseBot review: free, MIT-licensed Windows multi-agent desktop on the Cursor SDK. What stays on your PC, what goes to Cursor and the setup effort.',
    twitterDescription:
      'TecAdRiseBot review: a free open-source Windows desktop for named AI agents. The app and memory stay on your PC, but every model call goes to Cursor. Setup, privacy and what we could not verify.',
    audience:
      'Windows users and developers who want to run several scheduled AI agents from one desktop app, and who need to know what is really local, what Cursor receives and what setup costs.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'TecAdRiseBot review',
    targetKeywords: [
      'tecadrisebot review',
      'open source grok bot alternative',
      'cursor sdk desktop app',
      'multi-agent desktop windows',
      'local ai agents with memory and mcp',
      'scheduled ai agents windows',
    ],
    current_hardware_mentioned: ['Windows 10/11 PC'],
    leadAnswerBlock:
      '**TecAdRiseBot (version 0.1.0 as of 28 October 2026) is a free, MIT-licensed Windows desktop app that manages several named AI agents, each with its own memory, MCP servers, skills and schedule; the app and its files stay on your PC, but all model calls go to Cursor\'s hosted models through a Cursor API key.** It has no installer: you clone the repository and start it with Node.js. The project is about six weeks old and its last update was on 23 October 2026.',
    quickAnswerTop: {
      en: {
        question: 'Is TecAdRiseBot a local LLM app?',
        answer:
          'Not in the sense of running a model on your hardware: the model calls go to Cursor, so prompts and context leave the PC on every turn. What stays local is the app, the agent settings, the memory notes, the workspaces and the schedule.',
        bullets: [
          'Source and setup on [GitHub](https://github.com/tecadrise-ai/TecAdRiseBot); there is no installer, so a terminal and Node.js 22.13 or newer are required.',
          'Windows 10 and 11 only; the site says a Mac version may come later.',
          'Needs your own Cursor API key; Cursor bills model usage separately from the free app.',
          'Agents can message each other, keep wiki-style notes, run MCP servers and fire on cron-style schedules while the app is open.',
          'A localhost control API on port 8787 has no authentication, so it must not be exposed beyond the PC.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is TecAdRiseBot?', anchor: 'what-is-tecadrisebot' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Pricing', anchor: 'pricing' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'What Runs Locally and What Goes to Cursor', anchor: 'privacy' },
      { label: 'Competitors and Alternatives', anchor: 'tecadrisebot-competitors' },
      { label: 'Who Should Use It', anchor: 'who-should-use' },
      { label: 'What We Could Not Verify', anchor: 'who-should-not-use' },
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
            text: 'TecAdRiseBot is a free open-source Windows desktop that runs several named AI agents with memory, MCP and schedules, using Cursor\'s cloud models rather than a model on your PC.',
          },
          {
            type: 'plain-terms',
            text: 'You install Node.js, download the code, paste a Cursor key and chat with agents that remember things, call tools and run on a timetable.',
          },
        ],
        items: [
          'Maker: TecAdRise, a company registered in Poland that sells AI automation services; no founder or individual developer is named.',
          'Maintenance: commits continue into late October 2026, so no stale-project warning applies.',
          'Track record: no tagged release, no version history beyond 0.1.0, and no public feedback yet.',
          'License: MIT, so the full source can be read, forked and rebuilt.',
          'Languages: the site and README are in English and list no other interface language.',
          'Independence: the maker states it is not an official Grok, xAI or Cursor product.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the product page, the GitHub repository and the Cursor SDK documentation, checked on 28 October 2026. PromptQuorum has not installed, run or benchmarked the app, and the maker has not reviewed this page.',
          },
        ],
      },
      overview: {
        id: 'what-is-tecadrisebot',
        title: 'What Is TecAdRiseBot?',
        content: [
          '**TecAdRiseBot is a desktop control room for AI agents: every agent is a named profile with its own model choice, a sticky instruction block called a Soul, MCP servers, a workspace folder and a schedule.** The stack is Electron, React, TypeScript and the Cursor SDK, and the repository describes it as a free open-source alternative to Grok Bot. Its site adds that it is independent software and not an official Grok or xAI product.',
          'The maker is TecAdRise, whose site describes it as specialized in AI-driven automation systems for small businesses and states that it is registered in Poland. The site names no founder, and the repository lists "TecAdRise" as author.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**TecAdRiseBot has to be built from source: there is no installer, no packaged release and no store listing, so a terminal and a Node.js toolchain are required.** GitHub Releases holds only a demo-video tag with an MP4 file.',
        ],
        columns: ['Item', 'Where to get it'],
        rows: [
          { 'Item': 'Source and setup', 'Where to get it': '[GitHub repository](https://github.com/tecadrise-ai/TecAdRiseBot) (MIT; README has the setup steps)' },
          { 'Item': 'Website', 'Where to get it': '[tecadrise.ai product page](https://tecadrise.ai/products/tecadrisebot)' },
          { 'Item': 'Privacy policy', 'Where to get it': '[tecadrise.ai/terms](https://tecadrise.ai/terms) (company-wide terms; does not mention the app)' },
          { 'Item': 'Needs', 'Where to get it': 'Windows 10/11, Node.js 22.13+, npm 10+, a Cursor API key (created in the Cursor Dashboard)' },
        ],
        note: 'Version reviewed: 0.1.0, read from package.json in the repository on 28 October 2026. Playwright MCP additionally needs Node and npx on the PATH.',
      },
      pricing: {
        id: 'pricing',
        title: 'Pricing',
        content: [
          '**The app is free and MIT-licensed; the cost is the Cursor API usage behind it, which Cursor bills to the account that owns the key.** Per the Cursor SDK documentation, SDK runs follow the same pricing, request pools and Privacy Mode rules as Cursor\'s own products.',
        ],
        columns: ['Item', 'Cost'],
        rows: [
          { 'Item': 'TecAdRiseBot app', 'Cost': 'Free (MIT)' },
          { 'Item': 'Cursor API usage', 'Cost': 'Billed by Cursor to your key' },
          { 'Item': 'In-app usage table', 'Cost': 'Local token log, not an invoice' },
        ],
        note: 'Cursor\'s current plan prices were not checked for this review; read your own Cursor usage dashboard before running scheduled agents, because routines can send many requests unattended.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**The steps follow the repository README; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Install the toolchain',
            whyItMatters: 'The README asks for Node.js 22.13 or newer and npm 10 or newer on Windows 10 or 11.',
          },
          {
            title: 'Clone the repository and start it',
            whyItMatters: 'The quick start is git clone, npm install and npm run dev; the app starts in development mode through Vite and Electron, not from an installer.',
          },
          {
            title: 'Paste a Cursor API key',
            whyItMatters: 'Open the account row, then General, and save a key created in the Cursor Dashboard; the README says it is stored with Electron safeStorage and not in the chat database.',
          },
          {
            title: 'Pick a default model and create an agent',
            whyItMatters: 'Models come from your Cursor catalog; each agent can use its own model, with a usual or fast mode and an effort setting.',
          },
          {
            title: 'Send a message or add a routine',
            whyItMatters: 'Routines fire only while the desktop app is running, so a closed laptop means no scheduled runs.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the README or the product page.**',
        ],
        items: [
          '**Multi-agent sidebar.** Named agents with colors, search, drag reordering and streaming chat with a Stop button.',
          '**Soul and system prompt.** A shared SYSTEM.md for every agent plus a per-agent Soul with sticky rules.',
          '**Inter-agent messages.** Agents can message each other, and both sides of the exchange are stored.',
          '**Memory.** A wiki-style vault (index.md, notes folder, log.md) with a memory-management skill; a later commit adds a private memory.md per agent workspace.',
          '**MCP and skills.** Global and per-agent MCP JSON, a shared skills folder of SKILL.md files, and Playwright and AgentMail servers bundled on first launch.',
          '**Scheduler.** Loop, interval, daily, weekly, once and cron routines, with pause, resume and run-now.',
          '**Self-editing agents.** Agents can read a snapshot of their own configuration and PATCH it.',
          '**Local usage table.** Tokens per agent, kept on the PC.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'What Runs Locally and What Goes to Cursor',
        content: [
          '**The Cursor SDK documentation states that all inference goes through Cursor\'s hosted models in both its local and cloud modes, so the "runs locally" wording on the TecAdRiseBot site describes the app and its files, not the model.** Prompts, context and tool results are therefore sent to Cursor on every turn, under the terms of the Cursor account that owns the key. This review did not check Cursor\'s retention rules.',
          'What stays on the PC, per the README: agent configuration, the memory vault, per-agent workspaces, the chat database and the token table. The API key is held in Electron safeStorage. The control API listens on 127.0.0.1 port 8787 with no authentication, and the README warns not to expose that port outside the PC.',
          'The only policy the site links is a company-wide "Terms of Service & Privacy Policy" at tecadrise.ai/terms, last updated "January 2025" by its own header. It is written for the company\'s website and automation services and never mentions TecAdRiseBot, so it does not describe the app\'s data flow. The product page uses a cookie banner with a reject option.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The code is open, so anyone can inspect what the app sends, but PromptQuorum has not audited the code or the network traffic. Do not point agents at confidential files unless Cursor\'s terms are acceptable for that material.',
          },
        ],
      },
      competitors: {
        id: 'tecadrisebot-competitors',
        title: 'Competitors and Alternatives',
        content: '**TecAdRiseBot sits among the autonomous-agent tools in the directory; the closest comparisons are other agent apps that keep memory and run tools on your own computer.**',
        itemHeadings: true,
        columns: ['Tool', 'Best known for'],
        rows: [
          { 'Tool': '[Hermes Agent](/power-local-llm/hermes-agent-review)', 'Best known for': 'MIT-licensed command-line personal agent with persistent memory that can point at local model backends such as Ollama' },
          { 'Tool': '[Agent Zero](/power-local-llm/agent-zero-review)', 'Best known for': 'MIT-licensed autonomous agent with coding ability, run from a web interface on Mac, Windows or Linux' },
          { 'Tool': '[Atomic Bot](/power-local-llm/atomic-bot-review)', 'Best known for': 'Installer-based desktop and mobile app packaging the OpenClaw agent stack, with a local or paid cloud mode' },
          { 'Tool': '[Multica](/power-local-llm/multica-review)', 'Best known for': 'Self-hosted workspace for assigning and reviewing work done by coding agents such as Claude Code and Cursor' },
        ],
        note: 'This list reflects tools in the same directory segment, not a PromptQuorum ranking. The main difference to the first two is the model source: they can use local backends, while TecAdRiseBot uses Cursor\'s hosted catalog only. See the [Local LLM Software Directory](/directory) for the full catalog.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Developers who already pay for Cursor** and want several scheduled agents with memory on a Windows PC.',
          '**Tinkerers who like open code.** Prompts, MCP and memory are plain files and the license is MIT.',
          '**Readers comparing agent harnesses** who accept a very young project and a build-from-source install.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on quality.** PromptQuorum did not run the app, so stability, agent behavior and the scheduler were not tested.',
          '**Data handling at Cursor.** Retention and training terms for SDK traffic were not checked; the app\'s own policy page does not cover them.',
          '**Offline or local-model use.** The sources show no way to use a local or self-hosted model; anyone needing one should look at the alternatives above.',
          '**Maker background.** No founder is named and the maker has not been contacted, so support and roadmap commitments are unknown beyond the site\'s statement that Mac support may come later.',
          '**Track record.** There is no tagged release and no public user feedback yet.',
          '**Not for beginners.** A terminal, Node.js and a paid-usage API key are required.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can TecAdRiseBot use Ollama or another local model?',
            a: 'The sources show no such option; the model is always picked from the Cursor catalog.',
          },
          {
            q: 'Does it keep working when the laptop is closed?',
            a: 'No. Per the maker, routines fire only while the desktop app is running; the project has no hosted always-on machine.',
          },
          {
            q: 'Is it related to Cursor or xAI?',
            a: 'The maker states it is independent and not an official Grok, xAI or Cursor product. It does depend on a Cursor account and the public Cursor SDK.',
          },
          {
            q: 'Is the control API safe to leave on?',
            a: 'It binds to 127.0.0.1 only and has no authentication, so any program on the same PC can call it. The README says never to expose the port.',
          },
          {
            q: 'Will there be a Mac or Linux version?',
            a: 'The site says Mac support may come later and gives no date; Linux is not mentioned. Treat both as unannounced.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'TecAdRiseBot is an MIT-licensed Windows harness for running several scheduled, memory-keeping AI agents, with readable source and a documented local control API. Against that, it is six weeks old, has no installer or release, depends entirely on Cursor\'s hosted models and has no app-specific privacy policy. It suits developers who already use Cursor and want an inspectable multi-agent desktop; readers who need a model on their own hardware should start with [Hermes Agent](/power-local-llm/hermes-agent-review) or [Agent Zero](/power-local-llm/agent-zero-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[TecAdRiseBot product page](https://tecadrise.ai/products/tecadrisebot) — features, requirements, platforms and independence statement, checked 28 October 2026.',
          '[TecAdRiseBot vs Grok Bot](https://tecadrise.ai/vs/tecadrisebot-vs-grok-bot) — the maker\'s own comparison, including "Mac later" and routines running only while the app is open; PromptQuorum did not verify its claims about Grok Bot.',
          '[TecAdRiseBot on GitHub](https://github.com/tecadrise-ai/TecAdRiseBot) — README, package.json (version 0.1.0), MIT license, creation date and commit history, read via the GitHub API on 28 October 2026.',
          '[Cursor TypeScript SDK documentation](https://cursor.com/docs/sdk/typescript) — runtimes, hosted-model inference, billing and API keys.',
          '[TecAdRise terms and privacy page](https://tecadrise.ai/terms) — company-wide policy, header dated "January 2025".',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Hermes Agent Review](/power-local-llm/hermes-agent-review) — a personal agent with persistent memory that can use local models.',
          '[Agent Zero Review](/power-local-llm/agent-zero-review) — a minimal autonomous agent with coding ability.',
          '[Local LLM Software Directory](/directory) — every app in this segment side by side.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'TecAdRiseBot Review: Free Windows Agent Desktop on Cursor Cloud Models',
      description:
        'TecAdRiseBot review: a free, MIT-licensed Windows multi-agent desktop built on the Cursor SDK. What stays on your PC, what goes to Cursor, setup effort and what the sources do not confirm.',
      url: 'https://www.promptquorum.com/power-local-llm/tecadrisebot-review',
      inLanguage: 'en',
      datePublished: '2026-10-28',
      dateModified: '2026-10-28',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Windows users and developers evaluating a multi-agent desktop app built on the Cursor SDK' },
      about: [
        { '@type': 'Thing', name: 'TecAdRiseBot' },
        { '@type': 'Thing', name: 'AI agents' },
        { '@type': 'Thing', name: 'Cursor SDK' },
        { '@type': 'Thing', name: 'Model Context Protocol' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/tecadrisebot-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'TecAdRiseBot Review', item: 'https://www.promptquorum.com/power-local-llm/tecadrisebot-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/tecadrisebot-review-hero-de.webp',
    title: 'TecAdRiseBot-Rezension: Kostenloser Windows-Agenten-Desktop mit Cursor-Cloud-Modellen',
    seoTitle: 'TecAdRiseBot-Rezension: Windows-Agenten-Desktop mit Cursor',
    intro:
      'TecAdRiseBot ist eine kostenlose, MIT-lizenzierte Windows-Desktop-App, mit der Sie mehrere benannte KI-Agenten betreiben, jeweils mit eigenem Modell, Gedächtnis, MCP-Servern, Skills und Zeitplan. Sie basiert auf Electron und dem Cursor TypeScript SDK und stammt von TecAdRise, einem in Polen registrierten Unternehmen; das Repository wurde am 19. September 2026 angelegt. Diese Rezension gibt die Produktseite, das GitHub-Repository und die Dokumentation des Cursor SDK wieder, wie am 28. Oktober 2026 geprüft.',
    metaDescription:
      'TecAdRiseBot-Rezension: kostenloser Windows-Agenten-Desktop auf dem Cursor SDK. Was auf Ihrem PC bleibt, was an Cursor geht und der Einrichtungsaufwand.',
    twitterDescription:
      'TecAdRiseBot-Rezension: ein kostenloser Open-Source-Windows-Desktop für benannte KI-Agenten. App und Gedächtnis bleiben auf Ihrem PC, doch jeder Modellaufruf geht an Cursor. Einrichtung, Datenschutz und was wir nicht überprüfen konnten.',
    audience:
      'Windows-Nutzer und Entwickler, die mehrere zeitgesteuerte KI-Agenten aus einer Desktop-App betreiben möchten und wissen müssen, was wirklich lokal läuft, was Cursor erhält und wie aufwendig die Einrichtung ist.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'TecAdRiseBot Rezension',
    targetKeywords: [
      'tecadrisebot test',
      'open source grok bot alternative',
      'cursor sdk desktop-app',
      'multi-agenten desktop windows',
      'lokale ki-agenten mit gedächtnis und mcp',
      'zeitgesteuerte ki-agenten windows',
    ],
    current_hardware_mentioned: ['Windows 10/11 PC'],
    leadAnswerBlock:
      '**TecAdRiseBot (Version 0.1.0, Stand 28. Oktober 2026) ist eine kostenlose, MIT-lizenzierte Windows-Desktop-App, die mehrere benannte KI-Agenten mit jeweils eigenem Gedächtnis, MCP-Servern, Skills und Zeitplan verwaltet; die App und ihre Dateien bleiben auf Ihrem PC, doch alle Modellaufrufe gehen über einen Cursor-API-Schlüssel an die gehosteten Modelle von Cursor.** Es gibt keinen Installer: Sie klonen das Repository und starten es mit Node.js. Das Projekt ist rund sechs Wochen alt, die letzte Aktualisierung erfolgte am 23. Oktober 2026.',
    quickAnswerTop: {
      de: {
        question: 'Ist TecAdRiseBot eine lokale LLM-App?',
        answer:
          'Nicht in dem Sinne, dass ein Modell auf Ihrer Hardware läuft: Die Modellaufrufe gehen an Cursor, sodass Prompts und Kontext bei jedem Durchgang den PC verlassen. Lokal bleiben die App, die Agenten-Einstellungen, die Gedächtnisnotizen, die Arbeitsbereiche und der Zeitplan.',
        bullets: [
          'Quellcode und Einrichtung auf [GitHub](https://github.com/tecadrise-ai/TecAdRiseBot); es gibt keinen Installer, daher sind ein Terminal und Node.js 22.13 oder neuer nötig.',
          'Nur Windows 10 und 11; laut Website könnte später eine Mac-Version folgen.',
          'Erfordert Ihren eigenen Cursor-API-Schlüssel; Cursor rechnet die Modellnutzung getrennt von der kostenlosen App ab.',
          'Agenten können einander Nachrichten schicken, wikiartige Notizen führen, MCP-Server nutzen und nach cronartigen Zeitplänen starten, solange die App geöffnet ist.',
          'Eine lokale Steuer-API auf Port 8787 hat keine Authentifizierung und darf deshalb nicht über den PC hinaus erreichbar sein.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist TecAdRiseBot?', anchor: 'what-is-tecadrisebot' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Preise', anchor: 'pricing' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Was lokal läuft und was an Cursor geht', anchor: 'privacy' },
      { label: 'Wettbewerber und Alternativen', anchor: 'tecadrisebot-competitors' },
      { label: 'Für wen sich die App eignet', anchor: 'who-should-use' },
      { label: 'Was wir nicht überprüfen konnten', anchor: 'who-should-not-use' },
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
            text: 'TecAdRiseBot ist ein kostenloser Open-Source-Windows-Desktop, der mehrere benannte KI-Agenten mit Gedächtnis, MCP und Zeitplänen betreibt und dafür die Cloud-Modelle von Cursor statt eines Modells auf Ihrem PC nutzt.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren Node.js, laden den Code herunter, hinterlegen einen Cursor-Schlüssel und chatten mit Agenten, die sich Dinge merken, Werkzeuge aufrufen und nach Zeitplan arbeiten.',
          },
        ],
        items: [
          'Hersteller: TecAdRise, ein in Polen registriertes Unternehmen, das KI-Automatisierungsdienste verkauft; ein Gründer oder einzelner Entwickler wird nicht genannt.',
          'Pflege: Die Commits reichen bis Ende Oktober 2026, daher gilt keine Warnung vor einem veralteten Projekt.',
          'Erfahrungswerte: kein getaggtes Release, keine Versionshistorie über 0.1.0 hinaus und noch keine öffentlichen Rückmeldungen.',
          'Lizenz: MIT, der gesamte Quellcode kann also gelesen, geforkt und neu gebaut werden.',
          'Sprachen: Website und README sind auf Englisch und nennen keine weitere Oberflächensprache.',
          'Unabhängigkeit: Der Hersteller erklärt, es sei kein offizielles Produkt von Grok, xAI oder Cursor.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf die Produktseite, das GitHub-Repository und die Dokumentation des Cursor SDK, geprüft am 28. Oktober 2026. PromptQuorum hat die App weder installiert noch ausgeführt oder gemessen, und der Hersteller hat diese Seite nicht durchgesehen.',
          },
        ],
      },
      overview: {
        id: 'what-is-tecadrisebot',
        title: 'Was ist TecAdRiseBot?',
        content: [
          '**TecAdRiseBot ist eine Schaltzentrale für KI-Agenten auf dem Desktop: Jeder Agent ist ein benanntes Profil mit eigener Modellwahl, einem dauerhaften Anweisungsblock namens Soul, MCP-Servern, einem Arbeitsordner und einem Zeitplan.** Der Stack besteht aus Electron, React, TypeScript und dem Cursor SDK, und das Repository beschreibt die App als kostenlose Open-Source-Alternative zu Grok Bot. Die Website ergänzt, dass es sich um unabhängige Software und kein offizielles Produkt von Grok oder xAI handelt.',
          'Hersteller ist TecAdRise; laut Website ist das Unternehmen auf KI-gestützte Automatisierungssysteme für kleine Unternehmen spezialisiert und in Polen registriert. Die Website nennt keinen Gründer, und das Repository führt „TecAdRise“ als Autor.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**TecAdRiseBot muss aus dem Quellcode gebaut werden: Es gibt keinen Installer, kein fertig gepacktes Release und keinen Store-Eintrag, daher sind ein Terminal und eine Node.js-Toolchain nötig.** GitHub Releases enthält nur einen Demo-Video-Tag mit einer MP4-Datei.',
        ],
        columns: ['Eintrag', 'Bezugsquelle'],
        rows: [
          { 'Eintrag': 'Quellcode und Einrichtung', 'Bezugsquelle': '[GitHub-Repository](https://github.com/tecadrise-ai/TecAdRiseBot) (MIT; die README enthält die Einrichtungsschritte)' },
          { 'Eintrag': 'Website', 'Bezugsquelle': '[Produktseite auf tecadrise.ai](https://tecadrise.ai/products/tecadrisebot)' },
          { 'Eintrag': 'Datenschutzerklärung', 'Bezugsquelle': '[tecadrise.ai/terms](https://tecadrise.ai/terms) (unternehmensweite Bedingungen; erwähnt die App nicht)' },
          { 'Eintrag': 'Voraussetzungen', 'Bezugsquelle': 'Windows 10/11, Node.js 22.13+, npm 10+, ein Cursor-API-Schlüssel (im Cursor Dashboard erstellt)' },
        ],
        note: 'Geprüfte Version: 0.1.0, am 28. Oktober 2026 aus der package.json im Repository gelesen. Playwright MCP benötigt zusätzlich Node und npx im PATH.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preise',
        content: [
          '**Die App ist kostenlos und MIT-lizenziert; Kosten entstehen durch die Cursor-API-Nutzung dahinter, die Cursor dem Konto in Rechnung stellt, dem der Schlüssel gehört.** Laut Dokumentation des Cursor SDK gelten für SDK-Läufe dieselben Preise, Anfragekontingente und Privacy-Mode-Regeln wie für Cursors eigene Produkte.',
        ],
        columns: ['Posten', 'Kosten'],
        rows: [
          { 'Posten': 'TecAdRiseBot-App', 'Kosten': 'Kostenlos (MIT)' },
          { 'Posten': 'Cursor-API-Nutzung', 'Kosten': 'Von Cursor auf Ihren Schlüssel abgerechnet' },
          { 'Posten': 'Nutzungstabelle in der App', 'Kosten': 'Lokales Token-Protokoll, keine Rechnung' },
        ],
        note: 'Die aktuellen Tarifpreise von Cursor wurden für diese Rezension nicht geprüft; schauen Sie in Ihr eigenes Cursor-Nutzungs-Dashboard, bevor Sie zeitgesteuerte Agenten laufen lassen, denn Routinen können unbeaufsichtigt viele Anfragen senden.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Schritte folgen der README des Repositorys; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Toolchain installieren',
            whyItMatters: 'Die README verlangt Node.js 22.13 oder neuer und npm 10 oder neuer unter Windows 10 oder 11.',
          },
          {
            title: 'Repository klonen und starten',
            whyItMatters: 'Der Schnellstart lautet git clone, npm install und npm run dev; die App startet im Entwicklungsmodus über Vite und Electron, nicht über einen Installer.',
          },
          {
            title: 'Cursor-API-Schlüssel einfügen',
            whyItMatters: 'Öffnen Sie die Kontozeile, dann „General“, und speichern Sie einen im Cursor Dashboard erstellten Schlüssel; laut README wird er mit Electron safeStorage abgelegt und nicht in der Chat-Datenbank.',
          },
          {
            title: 'Standardmodell wählen und einen Agenten anlegen',
            whyItMatters: 'Die Modelle stammen aus Ihrem Cursor-Katalog; jeder Agent kann ein eigenes Modell nutzen, mit Normal- oder Schnellmodus und einer Aufwandseinstellung.',
          },
          {
            title: 'Nachricht senden oder Routine hinzufügen',
            whyItMatters: 'Routinen starten nur, solange die Desktop-App läuft; ein zugeklappter Laptop bedeutet also keine geplanten Läufe.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder der folgenden Punkte stammt aus der README oder der Produktseite.**',
        ],
        items: [
          '**Multi-Agenten-Seitenleiste.** Benannte Agenten mit Farben, Suche, Umsortieren per Drag-and-drop und Streaming-Chat mit Stopp-Schaltfläche.',
          '**Soul und System-Prompt.** Eine gemeinsame SYSTEM.md für alle Agenten plus eine Soul pro Agent mit dauerhaften Regeln.',
          '**Nachrichten zwischen Agenten.** Agenten können einander schreiben, und beide Seiten des Austauschs werden gespeichert.',
          '**Gedächtnis.** Ein wikiartiger Vault (index.md, Notizordner, log.md) mit einem Skill zur Gedächtnisverwaltung; ein späterer Commit ergänzt eine private memory.md pro Agenten-Arbeitsbereich.',
          '**MCP und Skills.** Globales und agentenspezifisches MCP-JSON, ein gemeinsamer Skills-Ordner mit SKILL.md-Dateien sowie beim ersten Start mitgelieferte Playwright- und AgentMail-Server.',
          '**Zeitplaner.** Routinen als Schleife, Intervall, täglich, wöchentlich, einmalig und per Cron, mit Pause, Fortsetzen und sofortiger Ausführung.',
          '**Sich selbst bearbeitende Agenten.** Agenten können einen Schnappschuss ihrer eigenen Konfiguration lesen und per PATCH ändern.',
          '**Lokale Nutzungstabelle.** Token pro Agent, auf dem PC gespeichert.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Was lokal läuft und was an Cursor geht',
        content: [
          '**Laut Dokumentation des Cursor SDK läuft die gesamte Inferenz in beiden Modi, lokal und Cloud, über die gehosteten Modelle von Cursor; die Formulierung „läuft lokal“ auf der TecAdRiseBot-Website beschreibt daher die App und ihre Dateien, nicht das Modell.** Prompts, Kontext und Werkzeugergebnisse werden deshalb bei jedem Durchgang an Cursor gesendet, nach den Bedingungen des Cursor-Kontos, dem der Schlüssel gehört. Die Aufbewahrungsregeln von Cursor wurden in dieser Rezension nicht geprüft.',
          'Was laut README auf dem PC bleibt: Agentenkonfiguration, Gedächtnis-Vault, Arbeitsbereiche pro Agent, die Chat-Datenbank und die Token-Tabelle. Der API-Schlüssel liegt in Electron safeStorage. Die Steuer-API lauscht auf 127.0.0.1 Port 8787 ohne Authentifizierung, und die README warnt davor, diesen Port außerhalb des PCs freizugeben.',
          'Die einzige Richtlinie, die die Website verlinkt, sind unternehmensweite „Terms of Service & Privacy Policy“ unter tecadrise.ai/terms, laut eigener Kopfzeile zuletzt im „January 2025“ aktualisiert. Sie ist für die Website und die Automatisierungsdienste des Unternehmens verfasst und erwähnt TecAdRiseBot nirgends, beschreibt also nicht den Datenfluss der App. Die Produktseite nutzt ein Cookie-Banner mit Ablehnungsoption.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Der Code ist offen, sodass jeder prüfen kann, was die App sendet, doch PromptQuorum hat weder den Code noch den Netzwerkverkehr geprüft. Richten Sie Agenten nicht auf vertrauliche Dateien, solange die Bedingungen von Cursor für dieses Material nicht akzeptabel sind.',
          },
        ],
      },
      competitors: {
        id: 'tecadrisebot-competitors',
        title: 'Wettbewerber und Alternativen',
        content: '**TecAdRiseBot gehört im Verzeichnis zu den autonomen Agenten-Tools; am nächsten kommen ihm andere Agenten-Apps, die Gedächtnis behalten und Werkzeuge auf Ihrem eigenen Computer ausführen.**',
        itemHeadings: true,
        columns: ['Tool', 'Bekannt für'],
        rows: [
          { 'Tool': '[Hermes Agent](/de/power-local-llm/hermes-agent-review)', 'Bekannt für': 'MIT-lizenzierter persönlicher Kommandozeilen-Agent mit dauerhaftem Gedächtnis, der auf lokale Modell-Backends wie Ollama zeigen kann' },
          { 'Tool': '[Agent Zero](/de/power-local-llm/agent-zero-review)', 'Bekannt für': 'MIT-lizenzierter autonomer Agent mit Programmierfähigkeit, bedient über eine Weboberfläche unter Mac, Windows oder Linux' },
          { 'Tool': '[Atomic Bot](/de/power-local-llm/atomic-bot-review)', 'Bekannt für': 'Installer-basierte Desktop- und Mobil-App, die den OpenClaw-Agenten-Stack bündelt, mit lokalem oder kostenpflichtigem Cloud-Modus' },
          { 'Tool': '[Multica](/de/power-local-llm/multica-review)', 'Bekannt für': 'Selbst gehosteter Arbeitsbereich zum Zuweisen und Prüfen von Aufgaben, die Coding-Agenten wie Claude Code und Cursor erledigen' },
        ],
        note: 'Diese Liste zeigt Tools aus demselben Segment des Verzeichnisses, kein Ranking von PromptQuorum. Der Hauptunterschied zu den ersten beiden ist die Modellquelle: Sie können lokale Backends nutzen, während TecAdRiseBot ausschließlich den gehosteten Katalog von Cursor verwendet. Den gesamten Katalog finden Sie im [Verzeichnis lokaler LLM-Software](/de/directory).',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Entwickler, die bereits für Cursor zahlen** und mehrere zeitgesteuerte Agenten mit Gedächtnis auf einem Windows-PC wollen.',
          '**Tüftler, die offenen Code mögen.** Prompts, MCP und Gedächtnis sind einfache Dateien, und die Lizenz ist MIT.',
          '**Leser, die Agenten-Harnesses vergleichen** und ein sehr junges Projekt sowie eine Installation aus dem Quellcode akzeptieren.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Qualität im praktischen Einsatz.** PromptQuorum hat die App nicht ausgeführt, daher wurden Stabilität, Agentenverhalten und Zeitplaner nicht getestet.',
          '**Datenverarbeitung bei Cursor.** Aufbewahrung und Trainingsbedingungen für SDK-Verkehr wurden nicht geprüft; die Richtlinienseite der App deckt sie nicht ab.',
          '**Offline- oder Lokalmodell-Nutzung.** Die Quellen zeigen keine Möglichkeit, ein lokales oder selbst gehostetes Modell zu verwenden; wer eines braucht, sollte sich die obigen Alternativen ansehen.',
          '**Hintergrund des Herstellers.** Es wird kein Gründer genannt, und der Hersteller wurde nicht kontaktiert; Support- und Roadmap-Zusagen sind daher unbekannt, abgesehen von der Aussage der Website, Mac-Unterstützung könne später folgen.',
          '**Erfahrungswerte.** Es gibt kein getaggtes Release und noch keine öffentlichen Nutzerrückmeldungen.',
          '**Nichts für Einsteiger.** Ein Terminal, Node.js und ein API-Schlüssel mit nutzungsabhängigen Kosten sind erforderlich.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann TecAdRiseBot Ollama oder ein anderes lokales Modell nutzen?',
            a: 'Die Quellen zeigen keine solche Option; das Modell wird immer aus dem Cursor-Katalog gewählt.',
          },
          {
            q: 'Läuft es weiter, wenn der Laptop zugeklappt ist?',
            a: 'Nein. Laut Hersteller starten Routinen nur, solange die Desktop-App läuft; das Projekt hat keinen gehosteten Dauerbetriebsrechner.',
          },
          {
            q: 'Steht es in Verbindung mit Cursor oder xAI?',
            a: 'Der Hersteller erklärt, es sei unabhängig und kein offizielles Produkt von Grok, xAI oder Cursor. Es setzt jedoch ein Cursor-Konto und das öffentliche Cursor SDK voraus.',
          },
          {
            q: 'Ist es unbedenklich, die Steuer-API eingeschaltet zu lassen?',
            a: 'Sie bindet nur an 127.0.0.1 und hat keine Authentifizierung, sodass jedes Programm auf demselben PC sie aufrufen kann. Die README sagt, den Port nie freizugeben.',
          },
          {
            q: 'Wird es eine Mac- oder Linux-Version geben?',
            a: 'Die Website sagt, Mac-Unterstützung könne später kommen, und nennt kein Datum; Linux wird nicht erwähnt. Betrachten Sie beides als nicht angekündigt.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'TecAdRiseBot ist ein MIT-lizenziertes Windows-Harness für mehrere zeitgesteuerte KI-Agenten mit Gedächtnis, lesbarem Quellcode und dokumentierter lokaler Steuer-API. Dagegen steht: Das Projekt ist sechs Wochen alt, hat weder Installer noch Release, hängt vollständig von den gehosteten Modellen von Cursor ab und besitzt keine App-spezifische Datenschutzerklärung. Es eignet sich für Entwickler, die bereits Cursor nutzen und einen prüfbaren Multi-Agenten-Desktop wollen; wer ein Modell auf eigener Hardware braucht, beginnt besser mit [Hermes Agent](/de/power-local-llm/hermes-agent-review) oder [Agent Zero](/de/power-local-llm/agent-zero-review).',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[TecAdRiseBot-Produktseite](https://tecadrise.ai/products/tecadrisebot) — Funktionen, Anforderungen, Plattformen und Unabhängigkeitserklärung, geprüft am 28. Oktober 2026.',
          '[TecAdRiseBot vs Grok Bot](https://tecadrise.ai/vs/tecadrisebot-vs-grok-bot) — der Vergleich des Herstellers, einschließlich „Mac later“ und Routinen, die nur bei geöffneter App laufen; PromptQuorum hat dessen Aussagen zu Grok Bot nicht überprüft.',
          '[TecAdRiseBot auf GitHub](https://github.com/tecadrise-ai/TecAdRiseBot) — README, package.json (Version 0.1.0), MIT-Lizenz, Erstellungsdatum und Commit-Verlauf, am 28. Oktober 2026 über die GitHub-API gelesen.',
          '[Dokumentation des Cursor TypeScript SDK](https://cursor.com/docs/sdk/typescript) — Laufzeitumgebungen, Inferenz über gehostete Modelle, Abrechnung und API-Schlüssel.',
          '[Seite mit Bedingungen und Datenschutz von TecAdRise](https://tecadrise.ai/terms) — unternehmensweite Richtlinie, Kopfzeile datiert „January 2025“.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Hermes-Agent-Rezension](/de/power-local-llm/hermes-agent-review) — ein persönlicher Agent mit dauerhaftem Gedächtnis, der lokale Modelle nutzen kann.',
          '[Agent-Zero-Rezension](/de/power-local-llm/agent-zero-review) — ein minimaler autonomer Agent mit Programmierfähigkeit.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — alle Apps dieses Segments im direkten Vergleich.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/tecadrisebot-review-hero-es.webp',
    title: 'Reseña de TecAdRiseBot: escritorio de agentes para Windows con modelos de Cursor',
    seoTitle: 'Reseña de TecAdRiseBot: agentes en Windows con Cursor',
    intro:
      'TecAdRiseBot es una app de escritorio gratuita para Windows, con licencia MIT, que permite ejecutar varios agentes de IA con nombre, cada uno con su propio modelo, memoria, servidores MCP, skills y programación. Está construida con Electron y el SDK de TypeScript de Cursor por TecAdRise, una empresa registrada en Polonia, y su repositorio se creó el 19 de septiembre de 2026. Esta reseña refleja la página del producto, el repositorio de GitHub y la documentación del SDK de Cursor tal como se comprobaron el 28 de octubre de 2026.',
    metaDescription:
      'Reseña de TecAdRiseBot: escritorio multiagente gratuito (MIT) para Windows sobre el SDK de Cursor. Qué queda en tu PC, qué va a Cursor y cómo se instala.',
    twitterDescription:
      'Reseña de TecAdRiseBot: un escritorio gratuito y de código abierto para agentes de IA con nombre. La app y la memoria quedan en tu PC, pero cada llamada al modelo va a Cursor. Instalación, privacidad y lo que no pudimos verificar.',
    audience:
      'Usuarios de Windows y desarrolladores que quieren ejecutar varios agentes de IA programados desde una sola app de escritorio y necesitan saber qué es realmente local, qué recibe Cursor y cuánto cuesta la instalación.',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de TecAdRiseBot',
    targetKeywords: [
      'reseña tecadrisebot',
      'alternativa de código abierto a grok bot',
      'app de escritorio con cursor sdk',
      'escritorio multiagente windows',
      'agentes de ia locales con memoria y mcp',
      'agentes de ia programados en windows',
    ],
    current_hardware_mentioned: ['Windows 10/11 PC'],
    leadAnswerBlock:
      '**TecAdRiseBot (versión 0.1.0 a 28 de octubre de 2026) es una app de escritorio gratuita para Windows, con licencia MIT, que gestiona varios agentes de IA con nombre, cada uno con su propia memoria, servidores MCP, skills y programación; la app y sus archivos se quedan en tu PC, pero todas las llamadas al modelo van a los modelos alojados de Cursor mediante una clave de API de Cursor.** No tiene instalador: clonas el repositorio y lo inicias con Node.js. El proyecto tiene unas seis semanas y su última actualización fue el 23 de octubre de 2026.',
    quickAnswerTop: {
      es: {
        question: '¿Es TecAdRiseBot una app de LLM local?',
        answer:
          'No en el sentido de ejecutar un modelo en tu hardware: las llamadas al modelo van a Cursor, así que los prompts y el contexto salen del PC en cada turno. Lo que se queda en local es la app, los ajustes de los agentes, las notas de memoria, los espacios de trabajo y la programación.',
        bullets: [
          'Código y configuración en [GitHub](https://github.com/tecadrise-ai/TecAdRiseBot); no hay instalador, así que hacen falta una terminal y Node.js 22.13 o posterior.',
          'Solo Windows 10 y 11; el sitio dice que una versión para Mac podría llegar más adelante.',
          'Necesita tu propia clave de API de Cursor; Cursor factura el uso del modelo aparte de la app gratuita.',
          'Los agentes pueden enviarse mensajes entre sí, llevar notas tipo wiki, ejecutar servidores MCP y activarse con programaciones tipo cron mientras la app está abierta.',
          'Una API de control local en el puerto 8787 no tiene autenticación, por lo que no debe exponerse fuera del PC.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es TecAdRiseBot?', anchor: 'what-is-tecadrisebot' },
      { label: 'Dónde conseguirla', anchor: 'get-it' },
      { label: 'Precios', anchor: 'pricing' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Qué se ejecuta en local y qué va a Cursor', anchor: 'privacy' },
      { label: 'Competidores y alternativas', anchor: 'tecadrisebot-competitors' },
      { label: 'Para quién es', anchor: 'who-should-use' },
      { label: 'Lo que no pudimos verificar', anchor: 'who-should-not-use' },
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
            text: 'TecAdRiseBot es un escritorio gratuito y de código abierto para Windows que ejecuta varios agentes de IA con nombre, con memoria, MCP y programación, y que usa los modelos en la nube de Cursor en lugar de un modelo en tu PC.',
          },
          {
            type: 'plain-terms',
            text: 'Instalas Node.js, descargas el código, pegas una clave de Cursor y conversas con agentes que recuerdan cosas, llaman a herramientas y trabajan según un horario.',
          },
        ],
        items: [
          'Creador: TecAdRise, una empresa registrada en Polonia que vende servicios de automatización con IA; no se nombra a ningún fundador ni desarrollador concreto.',
          'Mantenimiento: los commits continúan hasta finales de octubre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado.',
          'Historial: no hay ninguna versión etiquetada, no hay historial de versiones más allá de la 0.1.0 y todavía no hay opiniones públicas.',
          'Licencia: MIT, así que el código completo se puede leer, bifurcar y recompilar.',
          'Idiomas: el sitio y el README están en inglés y no indican ningún otro idioma de interfaz.',
          'Independencia: el creador afirma que no es un producto oficial de Grok, xAI ni Cursor.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en la página del producto, el repositorio de GitHub y la documentación del SDK de Cursor, comprobados el 28 de octubre de 2026. PromptQuorum no ha instalado, ejecutado ni medido la app, y el creador no ha revisado esta página.',
          },
        ],
      },
      overview: {
        id: 'what-is-tecadrisebot',
        title: '¿Qué es TecAdRiseBot?',
        content: [
          '**TecAdRiseBot es una sala de control de escritorio para agentes de IA: cada agente es un perfil con nombre, con su propia elección de modelo, un bloque de instrucciones fijas llamado Soul, servidores MCP, una carpeta de trabajo y una programación.** La pila es Electron, React, TypeScript y el SDK de Cursor, y el repositorio lo describe como una alternativa gratuita y de código abierto a Grok Bot. Su sitio añade que es software independiente y no un producto oficial de Grok ni de xAI.',
          'El creador es TecAdRise, cuyo sitio la describe como especializada en sistemas de automatización basados en IA para pequeñas empresas y afirma estar registrada en Polonia. El sitio no nombra a ningún fundador y el repositorio indica «TecAdRise» como autor.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirla',
        content: [
          '**TecAdRiseBot hay que compilarlo desde el código fuente: no hay instalador, ni versión empaquetada, ni ficha en ninguna tienda, así que hacen falta una terminal y un entorno de Node.js.** Las versiones de GitHub solo contienen una etiqueta de vídeo de demostración con un archivo MP4.',
        ],
        columns: ['Elemento', 'Dónde conseguirlo'],
        rows: [
          { 'Elemento': 'Código y configuración', 'Dónde conseguirlo': '[Repositorio de GitHub](https://github.com/tecadrise-ai/TecAdRiseBot) (MIT; el README incluye los pasos de configuración)' },
          { 'Elemento': 'Sitio web', 'Dónde conseguirlo': '[Página del producto en tecadrise.ai](https://tecadrise.ai/products/tecadrisebot)' },
          { 'Elemento': 'Política de privacidad', 'Dónde conseguirlo': '[tecadrise.ai/terms](https://tecadrise.ai/terms) (condiciones de toda la empresa; no menciona la app)' },
          { 'Elemento': 'Requisitos', 'Dónde conseguirlo': 'Windows 10/11, Node.js 22.13+, npm 10+, una clave de API de Cursor (creada en el Cursor Dashboard)' },
        ],
        note: 'Versión analizada: 0.1.0, leída de package.json en el repositorio el 28 de octubre de 2026. Playwright MCP necesita además Node y npx en el PATH.',
      },
      pricing: {
        id: 'pricing',
        title: 'Precios',
        content: [
          '**La app es gratuita y tiene licencia MIT; el coste es el uso de la API de Cursor que hay detrás, que Cursor factura a la cuenta propietaria de la clave.** Según la documentación del SDK de Cursor, las ejecuciones del SDK siguen los mismos precios, bolsas de solicitudes y reglas de Privacy Mode que los productos propios de Cursor.',
        ],
        columns: ['Elemento', 'Coste'],
        rows: [
          { 'Elemento': 'App TecAdRiseBot', 'Coste': 'Gratis (MIT)' },
          { 'Elemento': 'Uso de la API de Cursor', 'Coste': 'Lo factura Cursor a tu clave' },
          { 'Elemento': 'Tabla de uso en la app', 'Coste': 'Registro local de tokens, no una factura' },
        ],
        note: 'No se comprobaron los precios actuales de los planes de Cursor para esta reseña; consulta tu propio panel de uso de Cursor antes de ejecutar agentes programados, porque las rutinas pueden enviar muchas solicitudes sin supervisión.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Los pasos siguen el README del repositorio; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Instala las herramientas necesarias',
            whyItMatters: 'El README pide Node.js 22.13 o posterior y npm 10 o posterior en Windows 10 u 11.',
          },
          {
            title: 'Clona el repositorio e inícialo',
            whyItMatters: 'El inicio rápido es git clone, npm install y npm run dev; la app arranca en modo de desarrollo con Vite y Electron, no desde un instalador.',
          },
          {
            title: 'Pega una clave de API de Cursor',
            whyItMatters: 'Abre la fila de la cuenta, luego General, y guarda una clave creada en el Cursor Dashboard; el README dice que se almacena con Electron safeStorage y no en la base de datos del chat.',
          },
          {
            title: 'Elige un modelo predeterminado y crea un agente',
            whyItMatters: 'Los modelos salen de tu catálogo de Cursor; cada agente puede usar su propio modelo, con un modo habitual o rápido y un ajuste de esfuerzo.',
          },
          {
            title: 'Envía un mensaje o añade una rutina',
            whyItMatters: 'Las rutinas se activan solo mientras la app de escritorio está en ejecución, así que con el portátil cerrado no hay ejecuciones programadas.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada elemento siguiente procede del README o de la página del producto.**',
        ],
        items: [
          '**Barra lateral multiagente.** Agentes con nombre, con colores, búsqueda, reordenación por arrastre y chat en streaming con un botón Stop.',
          '**Soul y prompt de sistema.** Un SYSTEM.md compartido para todos los agentes más un Soul por agente con reglas fijas.',
          '**Mensajes entre agentes.** Los agentes pueden enviarse mensajes entre sí y se guardan ambos lados del intercambio.',
          '**Memoria.** Un almacén tipo wiki (index.md, una carpeta de notas, log.md) con una skill de gestión de memoria; un commit posterior añade un memory.md privado en el espacio de trabajo de cada agente.',
          '**MCP y skills.** MCP JSON global y por agente, una carpeta compartida de skills con archivos SKILL.md y servidores Playwright y AgentMail incluidos en el primer inicio.',
          '**Programador.** Rutinas en bucle, por intervalo, diarias, semanales, únicas y cron, con pausa, reanudación y ejecución inmediata.',
          '**Agentes que se editan a sí mismos.** Los agentes pueden leer una instantánea de su propia configuración y modificarla con PATCH.',
          '**Tabla de uso local.** Tokens por agente, guardados en el PC.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Qué se ejecuta en local y qué va a Cursor',
        content: [
          '**La documentación del SDK de Cursor indica que toda la inferencia pasa por los modelos alojados de Cursor tanto en su modo local como en el de nube, así que la expresión «se ejecuta en local» del sitio de TecAdRiseBot describe la app y sus archivos, no el modelo.** Por tanto, los prompts, el contexto y los resultados de las herramientas se envían a Cursor en cada turno, bajo las condiciones de la cuenta de Cursor propietaria de la clave. Esta reseña no comprobó las reglas de retención de Cursor.',
          'Lo que se queda en el PC, según el README: la configuración de los agentes, el almacén de memoria, los espacios de trabajo de cada agente, la base de datos del chat y la tabla de tokens. La clave de API se guarda en Electron safeStorage. La API de control escucha en 127.0.0.1, puerto 8787, sin autenticación, y el README advierte de que no se debe exponer ese puerto fuera del PC.',
          'La única política que enlaza el sitio es unos «Terms of Service & Privacy Policy» de toda la empresa en tecadrise.ai/terms, actualizados por última vez en «January 2025» según su propio encabezado. Está redactada para el sitio web y los servicios de automatización de la empresa y no menciona nunca TecAdRiseBot, por lo que no describe el flujo de datos de la app. La página del producto usa un banner de cookies con opción de rechazar.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'El código es abierto, así que cualquiera puede inspeccionar lo que envía la app, pero PromptQuorum no ha auditado ni el código ni el tráfico de red. No apuntes los agentes a archivos confidenciales a menos que las condiciones de Cursor sean aceptables para ese material.',
          },
        ],
      },
      competitors: {
        id: 'tecadrisebot-competitors',
        title: 'Competidores y alternativas',
        content: '**TecAdRiseBot se sitúa entre las herramientas de agentes autónomos del directorio; las comparaciones más cercanas son otras apps de agentes que guardan memoria y ejecutan herramientas en tu propio equipo.**',
        itemHeadings: true,
        columns: ['Herramienta', 'Conocida por'],
        rows: [
          { 'Herramienta': '[Hermes Agent](/es/power-local-llm/hermes-agent-review)', 'Conocida por': 'Agente personal de línea de comandos con licencia MIT y memoria persistente, que puede usar backends de modelos locales como Ollama' },
          { 'Herramienta': '[Agent Zero](/es/power-local-llm/agent-zero-review)', 'Conocida por': 'Agente autónomo con licencia MIT y capacidad de programar, que se usa desde una interfaz web en Mac, Windows o Linux' },
          { 'Herramienta': '[Atomic Bot](/es/power-local-llm/atomic-bot-review)', 'Conocida por': 'App de escritorio y móvil con instalador que empaqueta la pila de agentes OpenClaw, con modo local o de nube de pago' },
          { 'Herramienta': '[Multica](/es/power-local-llm/multica-review)', 'Conocida por': 'Espacio de trabajo autoalojado para asignar y revisar el trabajo de agentes de programación como Claude Code y Cursor' },
        ],
        note: 'Esta lista refleja herramientas del mismo segmento del directorio, no un ranking de PromptQuorum. La diferencia principal con las dos primeras es el origen del modelo: ellas pueden usar backends locales, mientras que TecAdRiseBot usa solo el catálogo alojado de Cursor. Consulta el [Directorio de software de LLM local](/es/directory) para ver el catálogo completo.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Desarrolladores que ya pagan por Cursor** y quieren varios agentes programados con memoria en un PC con Windows.',
          '**Aficionados a trastear que valoran el código abierto.** Los prompts, MCP y la memoria son archivos simples y la licencia es MIT.',
          '**Quienes comparan arneses de agentes** y aceptan un proyecto muy joven y una instalación compilada desde el código fuente.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad en la práctica.** PromptQuorum no ejecutó la app, así que no se probaron la estabilidad, el comportamiento de los agentes ni el programador.',
          '**Tratamiento de datos en Cursor.** No se comprobaron las condiciones de retención y entrenamiento del tráfico del SDK; la página de política de la propia app no las cubre.',
          '**Uso sin conexión o con modelos locales.** Las fuentes no muestran ninguna forma de usar un modelo local o autoalojado; quien lo necesite debería mirar las alternativas anteriores.',
          '**Trayectoria del creador.** No se nombra a ningún fundador y no se ha contactado al creador, por lo que se desconocen el soporte y la hoja de ruta más allá de la afirmación del sitio de que el soporte para Mac podría llegar más adelante.',
          '**Historial.** No hay ninguna versión etiquetada ni opiniones públicas de usuarios todavía.',
          '**No es para principiantes.** Hacen falta una terminal, Node.js y una clave de API de uso de pago.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puede TecAdRiseBot usar Ollama u otro modelo local?',
            a: 'Las fuentes no muestran esa opción; el modelo se elige siempre del catálogo de Cursor.',
          },
          {
            q: '¿Sigue funcionando con el portátil cerrado?',
            a: 'No. Según el creador, las rutinas se activan solo mientras la app de escritorio está en ejecución; el proyecto no tiene ninguna máquina alojada siempre activa.',
          },
          {
            q: '¿Está relacionada con Cursor o xAI?',
            a: 'El creador afirma que es independiente y no un producto oficial de Grok, xAI ni Cursor. Sí depende de una cuenta de Cursor y del SDK público de Cursor.',
          },
          {
            q: '¿Es seguro dejar activa la API de control?',
            a: 'Solo escucha en 127.0.0.1 y no tiene autenticación, así que cualquier programa del mismo PC puede llamarla. El README dice que nunca se exponga el puerto.',
          },
          {
            q: '¿Habrá versión para Mac o Linux?',
            a: 'El sitio dice que el soporte para Mac podría llegar más adelante y no da fecha; Linux no se menciona. Considera ambas como no anunciadas.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'TecAdRiseBot es un arnés para Windows con licencia MIT para ejecutar varios agentes de IA programados que conservan memoria, con código legible y una API de control local documentada. En contra, tiene seis semanas de vida, no tiene instalador ni versión publicada, depende por completo de los modelos alojados de Cursor y no tiene una política de privacidad específica de la app. Encaja con desarrolladores que ya usan Cursor y quieren un escritorio multiagente inspeccionable; quien necesite un modelo en su propio hardware debería empezar por [Hermes Agent](/es/power-local-llm/hermes-agent-review) o [Agent Zero](/es/power-local-llm/agent-zero-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Página del producto TecAdRiseBot](https://tecadrise.ai/products/tecadrisebot) — funciones, requisitos, plataformas y declaración de independencia, comprobados el 28 de octubre de 2026.',
          '[TecAdRiseBot vs Grok Bot](https://tecadrise.ai/vs/tecadrisebot-vs-grok-bot) — la comparación del propio creador, incluidos «Mac más adelante» y las rutinas que solo se ejecutan con la app abierta; PromptQuorum no verificó sus afirmaciones sobre Grok Bot.',
          '[TecAdRiseBot en GitHub](https://github.com/tecadrise-ai/TecAdRiseBot) — README, package.json (versión 0.1.0), licencia MIT, fecha de creación e historial de commits, leídos mediante la API de GitHub el 28 de octubre de 2026.',
          '[Documentación del SDK de TypeScript de Cursor](https://cursor.com/docs/sdk/typescript) — entornos de ejecución, inferencia en modelos alojados, facturación y claves de API.',
          '[Página de términos y privacidad de TecAdRise](https://tecadrise.ai/terms) — política de toda la empresa, encabezado fechado «January 2025».',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Hermes Agent](/es/power-local-llm/hermes-agent-review) — un agente personal con memoria persistente que puede usar modelos locales.',
          '[Reseña de Agent Zero](/es/power-local-llm/agent-zero-review) — un agente autónomo mínimo con capacidad de programar.',
          '[Directorio de software de LLM local](/es/directory) — todas las apps de este segmento, lado a lado.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/tecadrisebot-review-hero-fr.webp',
    title: 'Test de TecAdRiseBot : bureau d\'agents gratuit sous Windows, sur les modèles cloud de Cursor',
    seoTitle: 'Test de TecAdRiseBot : agents sous Windows avec Cursor',
    intro:
      'TecAdRiseBot est une application de bureau Windows gratuite, sous licence MIT, pour faire tourner plusieurs agents IA nommés, chacun avec son propre modèle, sa mémoire, ses serveurs MCP, ses skills et son planning. Elle est construite avec Electron et le SDK TypeScript de Cursor par TecAdRise, une société enregistrée en Pologne, et son dépôt a été créé le 19 septembre 2026. Ce test reflète la page produit, le dépôt GitHub et la documentation du SDK Cursor, vérifiés le 28 octobre 2026.',
    metaDescription:
      'Test de TecAdRiseBot : bureau multi-agents Windows gratuit (MIT) basé sur le SDK Cursor. Ce qui reste sur votre PC, ce qui part chez Cursor, installation.',
    twitterDescription:
      'Test de TecAdRiseBot : un bureau open source gratuit sous Windows pour agents IA nommés. L\'appli et la mémoire restent sur votre PC, mais chaque appel de modèle part chez Cursor. Installation, vie privée et points non vérifiés.',
    audience:
      'Utilisateurs Windows et développeurs qui veulent piloter plusieurs agents IA planifiés depuis une seule application de bureau, et qui veulent savoir ce qui est réellement local, ce que Cursor reçoit et ce que coûte l\'installation.',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'test TecAdRiseBot',
    targetKeywords: [
      'test tecadrisebot',
      'alternative open source à grok bot',
      'appli de bureau sdk cursor',
      'bureau multi-agents windows',
      'agents ia locaux avec mémoire et mcp',
      'agents ia planifiés windows',
    ],
    current_hardware_mentioned: ['PC Windows 10/11'],
    leadAnswerBlock:
      '**TecAdRiseBot (version 0.1.0 au 28 octobre 2026) est une application de bureau Windows gratuite, sous licence MIT, qui gère plusieurs agents IA nommés, chacun avec sa mémoire, ses serveurs MCP, ses skills et son planning ; l\'appli et ses fichiers restent sur votre PC, mais tous les appels de modèle partent vers les modèles hébergés de Cursor via une clé API Cursor.** Elle n\'a pas d\'installateur : vous clonez le dépôt et la lancez avec Node.js. Le projet a environ six semaines et sa dernière mise à jour date du 23 octobre 2026.',
    quickAnswerTop: {
      fr: {
        question: 'TecAdRiseBot est-elle une appli de LLM local ?',
        answer:
          'Pas au sens d\'un modèle qui tourne sur votre matériel : les appels de modèle partent chez Cursor, donc les prompts et le contexte quittent le PC à chaque tour. Ce qui reste local, c\'est l\'appli, les réglages des agents, les notes de mémoire, les espaces de travail et le planning.',
        bullets: [
          'Code source et installation sur [GitHub](https://github.com/tecadrise-ai/TecAdRiseBot) ; il n\'y a pas d\'installateur, un terminal et Node.js 22.13 ou plus récent sont donc nécessaires.',
          'Windows 10 et 11 uniquement ; le site indique qu\'une version Mac pourrait venir plus tard.',
          'Nécessite votre propre clé API Cursor ; Cursor facture l\'usage des modèles séparément de l\'appli gratuite.',
          'Les agents peuvent s\'écrire entre eux, tenir des notes de type wiki, lancer des serveurs MCP et s\'exécuter selon des plannings de type cron tant que l\'appli est ouverte.',
          'Une API de contrôle locale sur le port 8787 n\'a aucune authentification : elle ne doit pas être exposée au-delà du PC.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que TecAdRiseBot ?', anchor: 'what-is-tecadrisebot' },
      { label: 'Où la télécharger', anchor: 'get-it' },
      { label: 'Tarifs', anchor: 'pricing' },
      { label: 'Pour commencer', anchor: 'getting-started' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Ce qui reste en local et ce qui part chez Cursor', anchor: 'privacy' },
      { label: 'Concurrents et alternatives', anchor: 'tecadrisebot-competitors' },
      { label: 'À qui s\'adresse-t-elle', anchor: 'who-should-use' },
      { label: 'Ce que nous n\'avons pas pu vérifier', anchor: 'who-should-not-use' },
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
            text: 'TecAdRiseBot est un bureau Windows open source gratuit qui fait tourner plusieurs agents IA nommés avec mémoire, MCP et plannings, en s\'appuyant sur les modèles cloud de Cursor plutôt que sur un modèle installé sur votre PC.',
          },
          {
            type: 'plain-terms',
            text: 'Vous installez Node.js, téléchargez le code, collez une clé Cursor et discutez avec des agents qui retiennent des choses, appellent des outils et travaillent selon un calendrier.',
          },
        ],
        items: [
          'Éditeur : TecAdRise, une société enregistrée en Pologne qui vend des services d\'automatisation par IA ; aucun fondateur ni développeur individuel n\'est nommé.',
          'Maintenance : les commits se poursuivent jusqu\'à fin octobre 2026, aucun avertissement de projet inactif ne s\'applique donc.',
          'Historique : aucune version publiée, aucun historique de versions au-delà de 0.1.0 et aucun retour public pour l\'instant.',
          'Licence : MIT, le code source complet peut donc être lu, dupliqué (fork) et recompilé.',
          'Langues : le site et le README sont en anglais et n\'indiquent aucune autre langue d\'interface.',
          'Indépendance : l\'éditeur déclare que ce n\'est pas un produit officiel de Grok, xAI ou Cursor.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s\'appuie sur la page produit, le dépôt GitHub et la documentation du SDK Cursor, vérifiés le 28 octobre 2026. PromptQuorum n\'a ni installé, ni exécuté, ni mesuré l\'appli, et l\'éditeur n\'a pas relu cette page.',
          },
        ],
      },
      overview: {
        id: 'what-is-tecadrisebot',
        title: 'Qu\'est-ce que TecAdRiseBot ?',
        content: [
          '**TecAdRiseBot est une salle de contrôle de bureau pour agents IA : chaque agent est un profil nommé avec son propre choix de modèle, un bloc d\'instructions persistant appelé Soul, des serveurs MCP, un dossier de travail et un planning.** La pile technique est Electron, React, TypeScript et le SDK Cursor, et le dépôt la présente comme une alternative open source gratuite à Grok Bot. Son site ajoute qu\'il s\'agit d\'un logiciel indépendant et non d\'un produit officiel de Grok ou xAI.',
          'L\'éditeur est TecAdRise, dont le site se décrit comme spécialisé dans les systèmes d\'automatisation pilotés par l\'IA pour les petites entreprises et indique qu\'elle est enregistrée en Pologne. Le site ne nomme aucun fondateur, et le dépôt indique « TecAdRise » comme auteur.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où la télécharger',
        content: [
          '**TecAdRiseBot doit être compilée depuis les sources : il n\'y a ni installateur, ni version empaquetée, ni fiche de boutique, un terminal et une chaîne d\'outils Node.js sont donc requis.** Les versions GitHub ne contiennent qu\'un tag de vidéo de démonstration avec un fichier MP4.',
        ],
        columns: ['Élément', 'Où l\'obtenir'],
        rows: [
          { 'Élément': 'Code source et installation', 'Où l\'obtenir': '[Dépôt GitHub](https://github.com/tecadrise-ai/TecAdRiseBot) (MIT ; le README détaille l\'installation)' },
          { 'Élément': 'Site web', 'Où l\'obtenir': '[Page produit tecadrise.ai](https://tecadrise.ai/products/tecadrisebot)' },
          { 'Élément': 'Politique de confidentialité', 'Où l\'obtenir': '[tecadrise.ai/terms](https://tecadrise.ai/terms) (conditions valables pour toute la société ; ne mentionne pas l\'appli)' },
          { 'Élément': 'Prérequis', 'Où l\'obtenir': 'Windows 10/11, Node.js 22.13+, npm 10+, une clé API Cursor (créée dans le Cursor Dashboard)' },
        ],
        note: 'Version testée : 0.1.0, lue dans le package.json du dépôt le 28 octobre 2026. Playwright MCP exige en plus Node et npx dans le PATH.',
      },
      pricing: {
        id: 'pricing',
        title: 'Tarifs',
        content: [
          '**L\'appli est gratuite et sous licence MIT ; le coût est l\'usage de l\'API Cursor qui la sous-tend, facturé par Cursor au compte propriétaire de la clé.** Selon la documentation du SDK Cursor, les exécutions du SDK suivent les mêmes tarifs, les mêmes quotas de requêtes et les mêmes règles de Privacy Mode que les produits Cursor.',
        ],
        columns: ['Élément', 'Coût'],
        rows: [
          { 'Élément': 'Appli TecAdRiseBot', 'Coût': 'Gratuite (MIT)' },
          { 'Élément': 'Usage de l\'API Cursor', 'Coût': 'Facturé par Cursor sur votre clé' },
          { 'Élément': 'Tableau d\'usage intégré', 'Coût': 'Journal local de tokens, pas une facture' },
        ],
        note: 'Les prix actuels des offres Cursor n\'ont pas été vérifiés pour ce test ; consultez votre propre tableau de bord d\'usage Cursor avant de lancer des agents planifiés, car les routines peuvent envoyer de nombreuses requêtes sans surveillance.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Pour commencer',
        content: [
          '**Les étapes suivent le README du dépôt ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Installer la chaîne d\'outils',
            whyItMatters: 'Le README demande Node.js 22.13 ou plus récent et npm 10 ou plus récent sous Windows 10 ou 11.',
          },
          {
            title: 'Cloner le dépôt et le lancer',
            whyItMatters: 'Le démarrage rapide est git clone, npm install puis npm run dev ; l\'appli démarre en mode développement via Vite et Electron, pas depuis un installateur.',
          },
          {
            title: 'Coller une clé API Cursor',
            whyItMatters: 'Ouvrez la ligne du compte, puis General, et enregistrez une clé créée dans le Cursor Dashboard ; le README indique qu\'elle est stockée avec Electron safeStorage et non dans la base de données des conversations.',
          },
          {
            title: 'Choisir un modèle par défaut et créer un agent',
            whyItMatters: 'Les modèles viennent de votre catalogue Cursor ; chaque agent peut utiliser son propre modèle, avec un mode usuel ou rapide et un réglage d\'effort.',
          },
          {
            title: 'Envoyer un message ou ajouter une routine',
            whyItMatters: 'Les routines ne se déclenchent que lorsque l\'appli de bureau tourne : un portable fermé signifie aucune exécution planifiée.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient du README ou de la page produit.**',
        ],
        items: [
          '**Barre latérale multi-agents.** Des agents nommés avec couleurs, recherche, réorganisation par glisser-déposer et conversation en streaming avec un bouton Stop.',
          '**Soul et prompt système.** Un SYSTEM.md partagé par tous les agents, plus une Soul par agent avec des règles persistantes.',
          '**Messages entre agents.** Les agents peuvent s\'écrire entre eux, et les deux côtés de l\'échange sont enregistrés.',
          '**Mémoire.** Un coffre de type wiki (index.md, dossier notes, log.md) avec un skill de gestion de la mémoire ; un commit ultérieur ajoute un memory.md privé dans chaque espace de travail d\'agent.',
          '**MCP et skills.** Un JSON MCP global et un par agent, un dossier de skills partagé contenant des fichiers SKILL.md, et des serveurs Playwright et AgentMail fournis au premier lancement.',
          '**Planificateur.** Routines en boucle, par intervalle, quotidiennes, hebdomadaires, uniques et cron, avec pause, reprise et exécution immédiate.',
          '**Agents qui se modifient eux-mêmes.** Les agents peuvent lire un instantané de leur propre configuration et la modifier par PATCH.',
          '**Tableau d\'usage local.** Les tokens par agent, conservés sur le PC.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Ce qui reste en local et ce qui part chez Cursor',
        content: [
          '**La documentation du SDK Cursor indique que toute l\'inférence passe par les modèles hébergés de Cursor, dans ses modes local comme cloud ; la mention « fonctionne en local » du site de TecAdRiseBot décrit donc l\'appli et ses fichiers, pas le modèle.** Les prompts, le contexte et les résultats d\'outils sont donc envoyés à Cursor à chaque tour, selon les conditions du compte Cursor propriétaire de la clé. Ce test n\'a pas vérifié les règles de conservation de Cursor.',
          'Ce qui reste sur le PC, d\'après le README : la configuration des agents, le coffre de mémoire, les espaces de travail par agent, la base de données des conversations et le tableau de tokens. La clé API est conservée dans Electron safeStorage. L\'API de contrôle écoute sur 127.0.0.1, port 8787, sans authentification, et le README avertit de ne pas exposer ce port en dehors du PC.',
          'La seule politique que le site met en lien est un document commun à la société, « Terms of Service & Privacy Policy », sur tecadrise.ai/terms, mis à jour en « January 2025 » d\'après son propre en-tête. Il est rédigé pour le site web et les services d\'automatisation de la société et ne mentionne jamais TecAdRiseBot : il ne décrit donc pas les flux de données de l\'appli. La page produit utilise un bandeau de cookies avec option de refus.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Le code est ouvert, chacun peut donc inspecter ce que l\'appli envoie, mais PromptQuorum n\'a audité ni le code ni le trafic réseau. Ne dirigez pas d\'agents vers des fichiers confidentiels si les conditions de Cursor ne conviennent pas à ces contenus.',
          },
        ],
      },
      competitors: {
        id: 'tecadrisebot-competitors',
        title: 'Concurrents et alternatives',
        content: '**TecAdRiseBot se range parmi les outils d\'agents autonomes de l\'annuaire ; les comparaisons les plus proches sont d\'autres applis d\'agents qui gardent une mémoire et exécutent des outils sur votre propre ordinateur.**',
        itemHeadings: true,
        columns: ['Outil', 'Connu pour'],
        rows: [
          { 'Outil': '[Hermes Agent](/fr/power-local-llm/hermes-agent-review)', 'Connu pour': 'Agent personnel en ligne de commande sous licence MIT, avec mémoire persistante, pouvant s\'appuyer sur des backends de modèles locaux comme Ollama' },
          { 'Outil': '[Agent Zero](/fr/power-local-llm/agent-zero-review)', 'Connu pour': 'Agent autonome sous licence MIT capable de coder, utilisé via une interface web sur Mac, Windows ou Linux' },
          { 'Outil': '[Atomic Bot](/fr/power-local-llm/atomic-bot-review)', 'Connu pour': 'Appli de bureau et mobile avec installateur qui empaquette la pile d\'agents OpenClaw, avec un mode local ou cloud payant' },
          { 'Outil': '[Multica](/fr/power-local-llm/multica-review)', 'Connu pour': 'Espace de travail auto-hébergé pour attribuer et relire le travail d\'agents de code comme Claude Code et Cursor' },
        ],
        note: 'Cette liste reflète les outils du même segment de l\'annuaire, pas un classement de PromptQuorum. La principale différence avec les deux premiers tient à la source des modèles : ils peuvent utiliser des backends locaux, alors que TecAdRiseBot n\'utilise que le catalogue hébergé de Cursor. Voir l\'[annuaire des logiciels LLM locaux](/fr/directory) pour le catalogue complet.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui s\'adresse-t-elle',
        items: [
          '**Les développeurs qui paient déjà Cursor** et veulent plusieurs agents planifiés avec mémoire sur un PC Windows.',
          '**Les bidouilleurs qui aiment le code ouvert.** Les prompts, le MCP et la mémoire sont des fichiers simples et la licence est MIT.',
          '**Les lecteurs qui comparent des harnais d\'agents** et acceptent un projet très jeune et une installation depuis les sources.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**La qualité à l\'usage.** PromptQuorum n\'a pas exécuté l\'appli : la stabilité, le comportement des agents et le planificateur n\'ont pas été testés.',
          '**Le traitement des données chez Cursor.** Les conditions de conservation et d\'entraînement pour le trafic du SDK n\'ont pas été vérifiées ; la page de politique de l\'appli ne les couvre pas.',
          '**L\'usage hors ligne ou avec un modèle local.** Les sources ne montrent aucun moyen d\'utiliser un modèle local ou auto-hébergé ; qui en a besoin doit regarder les alternatives ci-dessus.',
          '**Le profil de l\'éditeur.** Aucun fondateur n\'est nommé et l\'éditeur n\'a pas été contacté : le support et la feuille de route sont inconnus, hormis l\'indication du site selon laquelle une version Mac pourrait venir plus tard.',
          '**L\'historique.** Il n\'y a aucune version publiée et aucun retour public d\'utilisateurs pour l\'instant.',
          '**Pas pour les débutants.** Un terminal, Node.js et une clé API à facturation à l\'usage sont nécessaires.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'TecAdRiseBot peut-elle utiliser Ollama ou un autre modèle local ?',
            a: 'Les sources n\'en montrent aucune possibilité ; le modèle est toujours choisi dans le catalogue Cursor.',
          },
          {
            q: 'Continue-t-elle de fonctionner quand le portable est fermé ?',
            a: 'Non. Selon l\'éditeur, les routines ne se déclenchent que lorsque l\'appli de bureau tourne ; le projet n\'a pas de machine hébergée toujours active.',
          },
          {
            q: 'Est-elle liée à Cursor ou à xAI ?',
            a: 'L\'éditeur déclare qu\'elle est indépendante et qu\'il ne s\'agit pas d\'un produit officiel de Grok, xAI ou Cursor. Elle dépend en revanche d\'un compte Cursor et du SDK public de Cursor.',
          },
          {
            q: 'Peut-on laisser l\'API de contrôle activée sans risque ?',
            a: 'Elle n\'écoute que sur 127.0.0.1 et n\'a aucune authentification : tout programme du même PC peut donc l\'appeler. Le README dit de ne jamais exposer le port.',
          },
          {
            q: 'Y aura-t-il une version Mac ou Linux ?',
            a: 'Le site indique que la prise en charge du Mac pourrait venir plus tard, sans date ; Linux n\'est pas mentionné. Considérez les deux comme non annoncés.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'TecAdRiseBot est un harnais Windows sous licence MIT pour faire tourner plusieurs agents IA planifiés qui gardent une mémoire, avec un code lisible et une API de contrôle locale documentée. En contrepartie, il a six semaines, n\'a ni installateur ni version publiée, dépend entièrement des modèles hébergés de Cursor et n\'a pas de politique de confidentialité propre à l\'appli. Il convient aux développeurs qui utilisent déjà Cursor et veulent un bureau multi-agents inspectable ; ceux qui ont besoin d\'un modèle sur leur propre matériel devraient commencer par [Hermes Agent](/fr/power-local-llm/hermes-agent-review) ou [Agent Zero](/fr/power-local-llm/agent-zero-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Page produit de TecAdRiseBot](https://tecadrise.ai/products/tecadrisebot) — fonctions, prérequis, plateformes et déclaration d\'indépendance, vérifiées le 28 octobre 2026.',
          '[TecAdRiseBot vs Grok Bot](https://tecadrise.ai/vs/tecadrisebot-vs-grok-bot) — la comparaison de l\'éditeur lui-même, avec « Mac later » et des routines qui ne tournent que lorsque l\'appli est ouverte ; PromptQuorum n\'a pas vérifié ses affirmations sur Grok Bot.',
          '[TecAdRiseBot sur GitHub](https://github.com/tecadrise-ai/TecAdRiseBot) — README, package.json (version 0.1.0), licence MIT, date de création et historique des commits, lus via l\'API GitHub le 28 octobre 2026.',
          '[Documentation du SDK TypeScript de Cursor](https://cursor.com/docs/sdk/typescript) — environnements d\'exécution, inférence sur modèles hébergés, facturation et clés API.',
          '[Page des conditions et de confidentialité de TecAdRise](https://tecadrise.ai/terms) — politique commune à la société, en-tête daté de « January 2025 ».',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Hermes Agent](/fr/power-local-llm/hermes-agent-review) — un agent personnel à mémoire persistante qui peut utiliser des modèles locaux.',
          '[Test d\'Agent Zero](/fr/power-local-llm/agent-zero-review) — un agent autonome minimal capable de coder.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — toutes les applis de ce segment côte à côte.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/tecadrisebot-review-hero-ja.webp',
    title: 'TecAdRiseBotレビュー：Cursorのクラウドモデルで動く無料のWindowsエージェントアプリ',
    seoTitle: 'TecAdRiseBotレビュー：Windows向けCursorエージェント',
    intro:
      'TecAdRiseBotは、複数の名前付きAIエージェントを動かすための、無料でMITライセンスのWindowsデスクトップアプリです。各エージェントは、専用のモデル、メモリ、MCPサーバー、スキル、スケジュールを持ちます。ElectronとCursor TypeScript SDKで作られており、開発元はポーランドで登録されている企業TecAdRise、リポジトリの作成日は2026年9月19日です。本レビューは、2026年10月28日に確認した製品ページ、GitHubリポジトリ、Cursor SDKのドキュメントに基づいています。',
    metaDescription:
      'TecAdRiseBotレビュー：Cursor SDKで動く無料・MITライセンスのWindows向けマルチエージェントアプリ。PC内に残るもの、Cursorに送られるもの、導入の手間を整理します。',
    twitterDescription:
      'TecAdRiseBotレビュー：名前付きAIエージェントを動かす無料のオープンソースWindowsアプリ。アプリとメモリはPC内に残りますが、モデル呼び出しはすべてCursorに送られます。導入、プライバシー、確認できなかった点。',
    audience:
      '1つのデスクトップアプリから、スケジュール実行される複数のAIエージェントを動かしたいWindowsユーザーと開発者で、実際にローカルで動く部分、Cursorに渡るデータ、導入の手間を知りたい方。',
    readTime: '9分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'TecAdRiseBot レビュー',
    targetKeywords: [
      'tecadrisebot レビュー',
      'オープンソース grok bot 代替',
      'cursor sdk デスクトップアプリ',
      'マルチエージェント デスクトップ windows',
      'メモリ mcp 付き ローカル ai エージェント',
      'スケジュール実行 ai エージェント windows',
    ],
    current_hardware_mentioned: ['Windows 10/11 PC'],
    leadAnswerBlock:
      '**TecAdRiseBot（2026年10月28日時点のバージョン0.1.0）は、複数の名前付きAIエージェントを管理する、無料でMITライセンスのWindowsデスクトップアプリです。各エージェントは専用のメモリ、MCPサーバー、スキル、スケジュールを持ち、アプリとそのファイルはPC内に残りますが、モデル呼び出しはすべてCursor APIキーを通じてCursorのホスト型モデルに送られます。** インストーラーはなく、リポジトリをクローンしてNode.jsで起動します。プロジェクトは公開から約6週間で、最後の更新は2026年10月23日でした。',
    quickAnswerTop: {
      ja: {
        question: 'TecAdRiseBotはローカルLLMアプリですか？',
        answer:
          '手元のハードウェアでモデルを動かすという意味では、いいえ。モデル呼び出しはCursorに送られるため、プロンプトとコンテキストは毎ターンPCの外に出ます。ローカルに残るのは、アプリ、エージェントの設定、メモリのノート、ワークスペース、スケジュールです。',
        bullets: [
          'ソースと導入手順は[GitHub](https://github.com/tecadrise-ai/TecAdRiseBot)にあります。インストーラーはないため、ターミナルとNode.js 22.13以降が必要です。',
          'Windows 10と11のみ対応です。公式サイトには、Mac版は今後登場する可能性があると書かれています。',
          '自分のCursor APIキーが必要です。モデルの利用料は、無料のアプリとは別にCursorが請求します。',
          'エージェント同士のメッセージ、Wiki形式のノート、MCPサーバーの実行、アプリを開いている間のcron形式スケジュールに対応します。',
          'ポート8787のローカル制御APIは認証がないため、PCの外に公開してはいけません。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'TecAdRiseBotとは', anchor: 'what-is-tecadrisebot' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '料金', anchor: 'pricing' },
      { label: 'はじめ方', anchor: 'getting-started' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: 'ローカルで動く部分とCursorに送られる部分', anchor: 'privacy' },
      { label: '競合と代替ツール', anchor: 'tecadrisebot-competitors' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかったこと', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
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
            text: 'TecAdRiseBotは、メモリ、MCP、スケジュールを備えた複数の名前付きAIエージェントを動かす、無料のオープンソースWindowsデスクトップアプリで、モデルはPC上ではなくCursorのクラウドモデルを使います。',
          },
          {
            type: 'plain-terms',
            text: 'Node.jsをインストールしてコードをダウンロードし、Cursorのキーを貼り付けると、物事を覚え、ツールを呼び出し、時間割どおりに動くエージェントとチャットできます。',
          },
        ],
        items: [
          '開発元：ポーランドで登録されているTecAdRiseで、AIオートメーションのサービスを提供する企業です。創業者や個人の開発者の名前は公表されていません。',
          '保守状況：コミットは2026年10月下旬まで続いているため、放置プロジェクトの警告は該当しません。',
          '利用実績：タグ付きのリリースはなく、バージョン履歴は0.1.0のみで、公開されたフィードバックもまだありません。',
          'ライセンス：MITのため、ソースコード全体を読み、フォークし、ビルドし直すことができます。',
          '言語：サイトとREADMEは英語で、ほかのインターフェース言語は記載されていません。',
          '独立性：開発元は、Grok、xAI、Cursorの公式製品ではないと述べています。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年10月28日に確認した製品ページ、GitHubリポジトリ、Cursor SDKのドキュメントに基づいています。PromptQuorumはアプリをインストールも実行もベンチマークもしておらず、開発元もこのページを確認していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-tecadrisebot',
        title: 'TecAdRiseBotとは',
        content: [
          '**TecAdRiseBotは、AIエージェントの管制室となるデスクトップアプリです。各エージェントは名前付きのプロファイルで、専用のモデル選択、Soulと呼ばれる固定の指示ブロック、MCPサーバー、ワークスペースフォルダー、スケジュールを持ちます。** 技術スタックはElectron、React、TypeScript、Cursor SDKで、リポジトリでは「Grok Botの無料のオープンソース代替」と説明されています。サイトには、独立したソフトウェアであり、GrokやxAIの公式製品ではないとも書かれています。',
          '開発元のTecAdRiseは、サイトで小規模事業者向けのAI駆動オートメーションシステムを専門とすると説明し、ポーランドで登録されていると記載しています。サイトに創業者の名前はなく、リポジトリの作者欄は「TecAdRise」です。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**TecAdRiseBotはソースからビルドする必要があります。インストーラー、パッケージ化されたリリース、ストア掲載はなく、ターミナルとNode.jsのツールチェーンが必要です。** GitHubのReleasesにあるのは、MP4ファイル付きのデモ動画のタグだけです。',
        ],
        columns: ['項目', '入手先'],
        rows: [
          { '項目': 'ソースと導入手順', '入手先': '[GitHubリポジトリ](https://github.com/tecadrise-ai/TecAdRiseBot)（MIT。READMEに導入手順あり）' },
          { '項目': '公式サイト', '入手先': '[tecadrise.ai の製品ページ](https://tecadrise.ai/products/tecadrisebot)' },
          { '項目': 'プライバシーポリシー', '入手先': '[tecadrise.ai/terms](https://tecadrise.ai/terms)（会社全体の利用規約。アプリには言及なし）' },
          { '項目': '必要なもの', '入手先': 'Windows 10/11、Node.js 22.13以降、npm 10以降、Cursor APIキー（Cursor Dashboardで作成）' },
        ],
        note: '確認したバージョン：0.1.0。2026年10月28日にリポジトリのpackage.jsonから読み取りました。Playwright MCPには、PATH上のNodeとnpxも必要です。',
      },
      pricing: {
        id: 'pricing',
        title: '料金',
        content: [
          '**アプリは無料でMITライセンスです。費用は背後にあるCursor APIの利用料で、キーの所有アカウントにCursorが請求します。** Cursor SDKのドキュメントによれば、SDKの実行にはCursor自身の製品と同じ料金、リクエスト枠、プライバシーモードのルールが適用されます。',
        ],
        columns: ['項目', '費用'],
        rows: [
          { '項目': 'TecAdRiseBot本体', '費用': '無料（MIT）' },
          { '項目': 'Cursor APIの利用', '費用': 'あなたのキーにCursorが請求' },
          { '項目': 'アプリ内の利用状況テーブル', '費用': 'ローカルのトークンログ（請求書ではありません）' },
        ],
        note: 'Cursorの現在のプラン料金は本レビューでは確認していません。ルーティンは無人で多数のリクエストを送ることがあるため、スケジュール実行のエージェントを動かす前に、ご自身のCursor利用状況ダッシュボードを確認してください。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'はじめ方',
        content: [
          '**手順はリポジトリのREADMEに沿っています。PromptQuorumはこれらを実行していません。**',
        ],
        numberedItems: [
          {
            title: 'ツールチェーンをインストールする',
            whyItMatters: 'READMEでは、Windows 10または11で、Node.js 22.13以降とnpm 10以降が求められています。',
          },
          {
            title: 'リポジトリをクローンして起動する',
            whyItMatters: 'クイックスタートは、git clone、npm install、npm run devです。アプリはインストーラーからではなく、ViteとElectronによる開発モードで起動します。',
          },
          {
            title: 'Cursor APIキーを貼り付ける',
            whyItMatters: 'アカウント行からGeneralを開き、Cursor Dashboardで作成したキーを保存します。READMEによれば、キーはElectronのsafeStorageに保管され、チャットのデータベースには保存されません。',
          },
          {
            title: '既定のモデルを選び、エージェントを作成する',
            whyItMatters: 'モデルはCursorのカタログから選びます。各エージェントは、通常モードか高速モード、および努力レベルの設定とともに、専用のモデルを使えます。',
          },
          {
            title: 'メッセージを送るか、ルーティンを追加する',
            whyItMatters: 'ルーティンはデスクトップアプリが起動している間だけ実行されるため、ノートPCを閉じるとスケジュール実行は行われません。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下の項目はすべて、READMEまたは製品ページに基づいています。**',
        ],
        items: [
          '**マルチエージェントのサイドバー。** 色分けされた名前付きエージェント、検索、ドラッグでの並べ替え、停止ボタン付きのストリーミングチャット。',
          '**Soulとシステムプロンプト。** すべてのエージェントに共通のSYSTEM.mdと、エージェントごとの固定ルールであるSoul。',
          '**エージェント間メッセージ。** エージェント同士でメッセージを送れ、やり取りの両側が保存されます。',
          '**メモリ。** メモリ管理スキルを備えたWiki形式のボルト（index.md、notesフォルダー、log.md）。その後のコミットで、エージェントのワークスペースごとの個別のmemory.mdが追加されています。',
          '**MCPとスキル。** グローバルとエージェント別のMCP JSON、SKILL.mdファイルを集めた共有スキルフォルダー、初回起動時にバンドルされるPlaywrightとAgentMailのサーバー。',
          '**スケジューラー。** ループ、インターバル、毎日、毎週、1回、cronの各ルーティン。一時停止、再開、今すぐ実行に対応します。',
          '**自己編集するエージェント。** エージェントは自分の設定のスナップショットを読み取り、PATCHで変更できます。',
          '**ローカルの利用状況テーブル。** エージェントごとのトークン数をPC内に保存します。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'ローカルで動く部分とCursorに送られる部分',
        content: [
          '**Cursor SDKのドキュメントには、ローカルモードでもクラウドモードでも、すべての推論がCursorのホスト型モデルを通じて行われると記されています。そのため、TecAdRiseBotのサイトにある「ローカルで動く」という表現は、モデルではなく、アプリとそのファイルを指しています。** したがって、プロンプト、コンテキスト、ツールの結果は、毎ターン、キーを所有するCursorアカウントの規約のもとでCursorに送られます。本レビューでは、Cursorのデータ保持ルールは確認していません。',
          'READMEによれば、PC内に残るのは、エージェントの設定、メモリのボルト、エージェントごとのワークスペース、チャットのデータベース、トークンのテーブルです。APIキーはElectronのsafeStorageに保管されます。制御APIは認証なしで127.0.0.1のポート8787で待ち受けており、READMEはこのポートをPCの外に公開しないよう警告しています。',
          'サイトがリンクしているポリシーは、tecadrise.ai/termsにある会社全体の「Terms of Service & Privacy Policy」だけで、そのヘッダーによる最終更新は「January 2025」です。会社のウェブサイトとオートメーションサービス向けに書かれており、TecAdRiseBotには一切言及していないため、アプリのデータの流れは説明していません。製品ページには、拒否の選択肢があるCookieバナーが表示されます。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'コードは公開されているため、アプリが何を送信するかは誰でも調べられますが、PromptQuorumはコードもネットワーク通信も監査していません。Cursorの規約がその内容に許容できるものでない限り、機密ファイルをエージェントに扱わせないでください。',
          },
        ],
      },
      competitors: {
        id: 'tecadrisebot-competitors',
        title: '競合と代替ツール',
        content: '**TecAdRiseBotは、ディレクトリの自律型エージェントの分野に位置します。最も近い比較対象は、メモリを持ち、自分のコンピューター上でツールを実行するほかのエージェントアプリです。**',
        itemHeadings: true,
        columns: ['ツール', '特徴'],
        rows: [
          { 'ツール': '[Hermes Agent](/ja/power-local-llm/hermes-agent-review)', '特徴': '永続メモリを持つMITライセンスのコマンドライン型パーソナルエージェント。Ollamaなどのローカルモデルのバックエンドを指定できます' },
          { 'ツール': '[Agent Zero](/ja/power-local-llm/agent-zero-review)', '特徴': 'コーディング能力を持つMITライセンスの自律型エージェント。Mac、Windows、Linuxでウェブインターフェースから使います' },
          { 'ツール': '[Atomic Bot](/ja/power-local-llm/atomic-bot-review)', '特徴': 'OpenClawのエージェントスタックをパッケージ化した、インストーラー付きのデスクトップ・モバイルアプリ。ローカルモードと有料クラウドモードがあります' },
          { 'ツール': '[Multica](/ja/power-local-llm/multica-review)', '特徴': 'Claude CodeやCursorなどのコーディングエージェントの作業を割り当て、レビューするための、セルフホスト型ワークスペース' },
        ],
        note: 'この一覧は、ディレクトリ内の同じ分野のツールを示すもので、PromptQuorumによるランキングではありません。最初の2つとの主な違いはモデルの入手元です。それらはローカルのバックエンドを使えますが、TecAdRiseBotが使うのはCursorのホスト型カタログのみです。全カタログは[ローカルLLMソフトウェアディレクトリ](/ja/directory)をご覧ください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**すでにCursorに料金を支払っている開発者**で、WindowsのPC上で、メモリを持つスケジュール実行のエージェントを複数動かしたい方。',
          '**公開されたコードが好きな技術愛好家。** プロンプト、MCP、メモリはふつうのファイルで、ライセンスはMITです。',
          '**エージェント基盤を比較している方**で、非常に新しいプロジェクトとソースからのビルドによる導入を受け入れられる方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        items: [
          '**実際の使い心地。** PromptQuorumはアプリを実行していないため、安定性、エージェントの挙動、スケジューラーはテストしていません。',
          '**Cursor側でのデータの扱い。** SDK経由の通信に関する保持や学習の条件は確認していません。アプリ自体のポリシーページも、これらをカバーしていません。',
          '**オフライン利用やローカルモデルの利用。** 情報源には、ローカルモデルやセルフホストのモデルを使う方法は示されていません。必要な方は、上記の代替ツールをご覧ください。',
          '**開発元の背景。** 創業者の名前は公表されておらず、開発元にも連絡していないため、Mac対応が今後登場する可能性があるというサイトの記述のほかは、サポートやロードマップの約束は不明です。',
          '**利用実績。** タグ付きのリリースはなく、公開されたユーザーのフィードバックもまだありません。',
          '**初心者向けではありません。** ターミナル、Node.js、従量課金のAPIキーが必要です。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'TecAdRiseBotでOllamaなどのローカルモデルは使えますか？',
            a: '情報源には、そのような選択肢は示されていません。モデルは常にCursorのカタログから選びます。',
          },
          {
            q: 'ノートPCを閉じても動き続けますか？',
            a: 'いいえ。開発元によれば、ルーティンはデスクトップアプリが起動している間だけ実行されます。このプロジェクトには、常時稼働のホスト型マシンはありません。',
          },
          {
            q: 'CursorやxAIと関係がありますか？',
            a: '開発元は、独立した製品であり、Grok、xAI、Cursorの公式製品ではないと述べています。ただし、Cursorアカウントと公開されているCursor SDKに依存しています。',
          },
          {
            q: '制御APIは起動したままで安全ですか？',
            a: '127.0.0.1のみにバインドされ、認証がないため、同じPC上のどのプログラムからも呼び出せます。READMEは、このポートを決して公開しないよう述べています。',
          },
          {
            q: 'MacやLinuxのバージョンは出ますか？',
            a: 'サイトには、Mac対応は今後登場する可能性があると書かれていますが、日付はありません。Linuxには触れられていません。どちらも未発表として扱ってください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'TecAdRiseBotは、メモリを持つスケジュール実行のAIエージェントを複数動かすための、MITライセンスのWindows向け基盤で、読めるソースコードと文書化されたローカル制御APIを備えています。一方で、公開から6週間で、インストーラーもリリースもなく、Cursorのホスト型モデルに完全に依存し、アプリ専用のプライバシーポリシーもありません。すでにCursorを使っていて、中身を確認できるマルチエージェントのデスクトップを求める開発者に向いています。自分のハードウェア上でモデルを動かしたい方は、[Hermes Agent](/ja/power-local-llm/hermes-agent-review)か[Agent Zero](/ja/power-local-llm/agent-zero-review)から始めてください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[TecAdRiseBot製品ページ](https://tecadrise.ai/products/tecadrisebot) — 機能、要件、対応プラットフォーム、独立性に関する記述。2026年10月28日確認。',
          '[TecAdRiseBot vs Grok Bot](https://tecadrise.ai/vs/tecadrisebot-vs-grok-bot) — 開発元自身による比較。「Mac版は後日」とルーティンがアプリ起動中のみ実行されることを含みます。Grok Botに関する主張はPromptQuorumでは検証していません。',
          '[GitHubのTecAdRiseBot](https://github.com/tecadrise-ai/TecAdRiseBot) — README、package.json（バージョン0.1.0）、MITライセンス、作成日、コミット履歴。2026年10月28日にGitHub APIで読み取りました。',
          '[Cursor TypeScript SDKドキュメント](https://cursor.com/docs/sdk/typescript) — ランタイム、ホスト型モデルによる推論、課金、APIキー。',
          '[TecAdRiseの利用規約・プライバシーページ](https://tecadrise.ai/terms) — 会社全体のポリシー。ヘッダーの日付は「January 2025」。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Hermes Agentレビュー](/ja/power-local-llm/hermes-agent-review) — ローカルモデルも使える、永続メモリ付きのパーソナルエージェント。',
          '[Agent Zeroレビュー](/ja/power-local-llm/agent-zero-review) — コーディング能力を持つ、ミニマルな自律型エージェント。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — この分野のすべてのアプリを並べて比較できます。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/tecadrisebot-review-hero-pt.webp',
    title: 'Análise do TecAdRiseBot: desktop gratuito de agentes para Windows com modelos do Cursor',
    seoTitle: 'Análise do TecAdRiseBot: agentes no Windows com Cursor',
    intro:
      'O TecAdRiseBot é um app desktop gratuito, sob licença MIT, para Windows, que executa vários agentes de IA com nome, cada um com seu próprio modelo, memória, servidores MCP, skills e agendamento. Foi criado com Electron e o SDK TypeScript do Cursor pela TecAdRise, uma empresa registrada na Polônia, e seu repositório foi criado em 19 de setembro de 2026. Esta análise reflete a página do produto, o repositório no GitHub e a documentação do SDK do Cursor conforme verificados em 28 de outubro de 2026.',
    metaDescription:
      'Análise do TecAdRiseBot: desktop gratuito de múltiplos agentes (MIT) para Windows no SDK do Cursor. O que fica no PC, o que vai ao Cursor e a instalação.',
    twitterDescription:
      'Análise do TecAdRiseBot: um desktop gratuito e de código aberto para agentes de IA com nome. O app e a memória ficam no seu PC, mas toda chamada de modelo vai para o Cursor. Instalação, privacidade e o que não conseguimos verificar.',
    audience:
      'Usuários e desenvolvedores de Windows que querem executar vários agentes de IA agendados em um único app desktop e precisam saber o que realmente é local, o que o Cursor recebe e quanto custa a instalação.',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise do TecAdRiseBot',
    targetKeywords: [
      'análise tecadrisebot',
      'alternativa open source ao grok bot',
      'app desktop com cursor sdk',
      'desktop multiagente windows',
      'agentes de ia locais com memória e mcp',
      'agentes de ia agendados windows',
    ],
    current_hardware_mentioned: ['PC com Windows 10/11'],
    leadAnswerBlock:
      '**O TecAdRiseBot (versão 0.1.0 em 28 de outubro de 2026) é um app desktop gratuito, sob licença MIT, para Windows, que gerencia vários agentes de IA com nome, cada um com sua própria memória, servidores MCP, skills e agendamento; o app e seus arquivos ficam no seu PC, mas todas as chamadas de modelo vão para os modelos hospedados do Cursor por meio de uma chave de API do Cursor.** Não há instalador: você clona o repositório e o inicia com o Node.js. O projeto tem cerca de seis semanas e sua última atualização foi em 23 de outubro de 2026.',
    quickAnswerTop: {
      pt: {
        question: 'O TecAdRiseBot é um app de LLM local?',
        answer:
          'Não no sentido de executar um modelo no seu hardware: as chamadas de modelo vão para o Cursor, então prompts e contexto saem do PC a cada turno. O que fica local é o app, as configurações dos agentes, as notas de memória, os espaços de trabalho e o agendamento.',
        bullets: [
          'Código-fonte e instalação no [GitHub](https://github.com/tecadrise-ai/TecAdRiseBot); não há instalador, então são necessários um terminal e o Node.js 22.13 ou posterior.',
          'Somente Windows 10 e 11; o site diz que uma versão para Mac pode vir depois.',
          'Exige sua própria chave de API do Cursor; o Cursor cobra o uso dos modelos separadamente do app gratuito.',
          'Os agentes podem trocar mensagens entre si, manter notas no estilo wiki, executar servidores MCP e disparar em agendamentos no estilo cron enquanto o app estiver aberto.',
          'Uma API de controle em localhost, na porta 8787, não tem autenticação e, por isso, não deve ser exposta fora do PC.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o TecAdRiseBot?', anchor: 'what-is-tecadrisebot' },
      { label: 'Onde baixar', anchor: 'get-it' },
      { label: 'Preços', anchor: 'pricing' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'O que roda localmente e o que vai para o Cursor', anchor: 'privacy' },
      { label: 'Concorrentes e alternativas', anchor: 'tecadrisebot-competitors' },
      { label: 'Para quem é', anchor: 'who-should-use' },
      { label: 'O que não conseguimos verificar', anchor: 'who-should-not-use' },
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
            text: 'O TecAdRiseBot é um desktop gratuito e de código aberto para Windows que executa vários agentes de IA com nome, com memória, MCP e agendamentos, usando os modelos em nuvem do Cursor e não um modelo no seu PC.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala o Node.js, baixa o código, cola uma chave do Cursor e conversa com agentes que lembram de coisas, chamam ferramentas e funcionam em um cronograma.',
          },
        ],
        items: [
          'Desenvolvedor: a TecAdRise, uma empresa registrada na Polônia que vende serviços de automação com IA; nenhum fundador nem desenvolvedor individual é citado.',
          'Manutenção: os commits continuam até o fim de outubro de 2026, então nenhum aviso de projeto parado se aplica.',
          'Histórico: nenhuma versão com tag, nenhum histórico de versões além da 0.1.0 e nenhum feedback público ainda.',
          'Licença: MIT, então o código-fonte completo pode ser lido, bifurcado e recompilado.',
          'Idiomas: o site e o README estão em inglês e não listam nenhum outro idioma de interface.',
          'Independência: o desenvolvedor afirma que não é um produto oficial da Grok, da xAI nem do Cursor.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia na página do produto, no repositório do GitHub e na documentação do SDK do Cursor, verificados em 28 de outubro de 2026. A PromptQuorum não instalou, executou nem fez benchmarks do app, e o desenvolvedor não revisou esta página.',
          },
        ],
      },
      overview: {
        id: 'what-is-tecadrisebot',
        title: 'O que é o TecAdRiseBot?',
        content: [
          '**O TecAdRiseBot é uma central de controle desktop para agentes de IA: cada agente é um perfil com nome, com sua própria escolha de modelo, um bloco de instruções fixas chamado Soul, servidores MCP, uma pasta de trabalho e um agendamento.** A stack é Electron, React, TypeScript e o SDK do Cursor, e o repositório o descreve como uma alternativa gratuita e de código aberto ao Grok Bot. O site acrescenta que é um software independente e não um produto oficial da Grok ou da xAI.',
          'O desenvolvedor é a TecAdRise, cujo site se descreve como especializada em sistemas de automação orientados por IA para pequenas empresas e afirma ser registrada na Polônia. O site não cita nenhum fundador, e o repositório indica "TecAdRise" como autor.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde baixar',
        content: [
          '**O TecAdRiseBot precisa ser compilado a partir do código-fonte: não há instalador, nem versão empacotada, nem página em loja de apps, então são necessários um terminal e o Node.js.** A página Releases do GitHub contém apenas uma tag de vídeo de demonstração com um arquivo MP4.',
        ],
        columns: ['Item', 'Onde baixar'],
        rows: [
          { 'Item': 'Código-fonte e instalação', 'Onde baixar': '[Repositório no GitHub](https://github.com/tecadrise-ai/TecAdRiseBot) (MIT; o README traz os passos de instalação)' },
          { 'Item': 'Site', 'Onde baixar': '[Página do produto em tecadrise.ai](https://tecadrise.ai/products/tecadrisebot)' },
          { 'Item': 'Política de privacidade', 'Onde baixar': '[tecadrise.ai/terms](https://tecadrise.ai/terms) (termos da empresa; não menciona o app)' },
          { 'Item': 'Requisitos', 'Onde baixar': 'Windows 10/11, Node.js 22.13+, npm 10+, uma chave de API do Cursor (criada no Cursor Dashboard)' },
        ],
        note: 'Versão analisada: 0.1.0, lida no package.json do repositório em 28 de outubro de 2026. O Playwright MCP exige, além disso, Node e npx no PATH.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preços',
        content: [
          '**O app é gratuito e tem licença MIT; o custo é o uso da API do Cursor por trás dele, que o Cursor cobra da conta dona da chave.** Segundo a documentação do SDK do Cursor, as execuções do SDK seguem os mesmos preços, pools de requisições e regras do Privacy Mode dos produtos do próprio Cursor.',
        ],
        columns: ['Item', 'Custo'],
        rows: [
          { 'Item': 'App TecAdRiseBot', 'Custo': 'Gratuito (MIT)' },
          { 'Item': 'Uso da API do Cursor', 'Custo': 'Cobrado pelo Cursor na sua chave' },
          { 'Item': 'Tabela de uso no app', 'Custo': 'Registro local de tokens, não uma fatura' },
        ],
        note: 'Os preços atuais dos planos do Cursor não foram verificados nesta análise; consulte o seu próprio painel de uso do Cursor antes de executar agentes agendados, pois as rotinas podem enviar muitas requisições sem supervisão.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Os passos seguem o README do repositório; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Instale as ferramentas necessárias',
            whyItMatters: 'O README pede o Node.js 22.13 ou posterior e o npm 10 ou posterior no Windows 10 ou 11.',
          },
          {
            title: 'Clone o repositório e inicie o app',
            whyItMatters: 'O início rápido é git clone, npm install e npm run dev; o app inicia em modo de desenvolvimento por meio do Vite e do Electron, não a partir de um instalador.',
          },
          {
            title: 'Cole uma chave de API do Cursor',
            whyItMatters: 'Abra a linha da conta, depois General, e salve uma chave criada no Cursor Dashboard; o README diz que ela é guardada com o Electron safeStorage e não no banco de dados do chat.',
          },
          {
            title: 'Escolha um modelo padrão e crie um agente',
            whyItMatters: 'Os modelos vêm do seu catálogo do Cursor; cada agente pode usar seu próprio modelo, com um modo usual ou rápido e um ajuste de esforço.',
          },
          {
            title: 'Envie uma mensagem ou adicione uma rotina',
            whyItMatters: 'As rotinas só disparam enquanto o app desktop estiver em execução, então um notebook fechado significa nenhuma execução agendada.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Todos os itens abaixo vêm do README ou da página do produto.**',
        ],
        items: [
          '**Barra lateral multiagente.** Agentes com nome, cores, busca, reordenação por arrastar e chat com streaming e botão Stop.',
          '**Soul e prompt de sistema.** Um SYSTEM.md compartilhado por todos os agentes, mais um Soul por agente com regras fixas.',
          '**Mensagens entre agentes.** Os agentes podem trocar mensagens entre si, e os dois lados da conversa são armazenados.',
          '**Memória.** Um cofre no estilo wiki (index.md, pasta notes, log.md) com uma skill de gerenciamento de memória; um commit posterior acrescenta um memory.md privado por espaço de trabalho de agente.',
          '**MCP e skills.** JSON de MCP global e por agente, uma pasta de skills compartilhada com arquivos SKILL.md e servidores Playwright e AgentMail incluídos na primeira execução.',
          '**Agendador.** Rotinas em loop, intervalo, diárias, semanais, únicas e cron, com pausar, retomar e executar agora.',
          '**Agentes que se editam.** Os agentes podem ler um instantâneo da própria configuração e alterá-la com PATCH.',
          '**Tabela de uso local.** Tokens por agente, mantidos no PC.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'O que roda localmente e o que vai para o Cursor',
        content: [
          '**A documentação do SDK do Cursor afirma que toda inferência passa pelos modelos hospedados do Cursor, tanto no modo local quanto no modo em nuvem, então a expressão "roda localmente" no site do TecAdRiseBot descreve o app e seus arquivos, não o modelo.** Prompts, contexto e resultados de ferramentas são, portanto, enviados ao Cursor a cada turno, sob os termos da conta do Cursor dona da chave. Esta análise não verificou as regras de retenção do Cursor.',
          'O que fica no PC, segundo o README: a configuração dos agentes, o cofre de memória, os espaços de trabalho por agente, o banco de dados do chat e a tabela de tokens. A chave de API é guardada no Electron safeStorage. A API de controle escuta em 127.0.0.1, porta 8787, sem autenticação, e o README alerta para não expor essa porta fora do PC.',
          'A única política que o site vincula é um "Terms of Service & Privacy Policy" válido para toda a empresa, em tecadrise.ai/terms, atualizado em "January 2025" segundo o próprio cabeçalho. Ele foi escrito para o site e os serviços de automação da empresa e nunca menciona o TecAdRiseBot, então não descreve o fluxo de dados do app. A página do produto usa um banner de cookies com opção de recusar.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O código é aberto, então qualquer pessoa pode inspecionar o que o app envia, mas a PromptQuorum não auditou o código nem o tráfego de rede. Não aponte os agentes para arquivos confidenciais a menos que os termos do Cursor sejam aceitáveis para esse material.',
          },
        ],
      },
      competitors: {
        id: 'tecadrisebot-competitors',
        title: 'Concorrentes e alternativas',
        content: '**O TecAdRiseBot está entre as ferramentas de agentes autônomos do diretório; as comparações mais próximas são outros apps de agentes que mantêm memória e executam ferramentas no seu próprio computador.**',
        itemHeadings: true,
        columns: ['Ferramenta', 'Mais conhecida por'],
        rows: [
          { 'Ferramenta': '[Hermes Agent](/pt/power-local-llm/hermes-agent-review)', 'Mais conhecida por': 'Agente pessoal de linha de comando com licença MIT e memória persistente, que pode apontar para backends de modelos locais como o Ollama' },
          { 'Ferramenta': '[Agent Zero](/pt/power-local-llm/agent-zero-review)', 'Mais conhecida por': 'Agente autônomo com licença MIT e capacidade de programar, executado a partir de uma interface web em Mac, Windows ou Linux' },
          { 'Ferramenta': '[Atomic Bot](/pt/power-local-llm/atomic-bot-review)', 'Mais conhecida por': 'App desktop e mobile com instalador que empacota a stack de agentes OpenClaw, com modo local ou em nuvem paga' },
          { 'Ferramenta': '[Multica](/pt/power-local-llm/multica-review)', 'Mais conhecida por': 'Espaço de trabalho auto-hospedado para atribuir e revisar tarefas feitas por agentes de programação como Claude Code e Cursor' },
        ],
        note: 'Esta lista reflete ferramentas do mesmo segmento do diretório, não um ranking da PromptQuorum. A principal diferença em relação às duas primeiras é a origem do modelo: elas podem usar backends locais, enquanto o TecAdRiseBot usa apenas o catálogo hospedado do Cursor. Veja o [diretório de software para LLMs locais](/pt/directory) para o catálogo completo.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é',
        items: [
          '**Desenvolvedores que já pagam pelo Cursor** e querem vários agentes agendados com memória em um PC com Windows.',
          '**Quem gosta de mexer em código aberto.** Prompts, MCP e memória são arquivos simples e a licença é MIT.',
          '**Leitores que comparam estruturas de agentes** e aceitam um projeto muito jovem e uma instalação a partir do código-fonte.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade na prática.** A PromptQuorum não executou o app, então estabilidade, comportamento dos agentes e o agendador não foram testados.',
          '**Tratamento de dados no Cursor.** As regras de retenção e de treinamento para o tráfego do SDK não foram verificadas; a página de política do próprio app não as cobre.',
          '**Uso offline ou com modelo local.** As fontes não mostram nenhuma forma de usar um modelo local ou auto-hospedado; quem precisa disso deve olhar as alternativas acima.',
          '**Histórico do desenvolvedor.** Nenhum fundador é citado e o desenvolvedor não foi contatado, então compromissos de suporte e de roteiro são desconhecidos, além da declaração do site de que o suporte a Mac pode vir depois.',
          '**Histórico do projeto.** Não há versão com tag nem feedback público de usuários ainda.',
          '**Não é para iniciantes.** São necessários um terminal, o Node.js e uma chave de API com uso pago.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O TecAdRiseBot pode usar o Ollama ou outro modelo local?',
            a: 'As fontes não mostram essa opção; o modelo é sempre escolhido no catálogo do Cursor.',
          },
          {
            q: 'Ele continua funcionando com o notebook fechado?',
            a: 'Não. Segundo o desenvolvedor, as rotinas só disparam enquanto o app desktop está em execução; o projeto não tem uma máquina hospedada sempre ligada.',
          },
          {
            q: 'Ele tem relação com o Cursor ou a xAI?',
            a: 'O desenvolvedor afirma que é independente e não é um produto oficial da Grok, da xAI nem do Cursor. Ele depende, porém, de uma conta do Cursor e do SDK público do Cursor.',
          },
          {
            q: 'É seguro deixar a API de controle ativada?',
            a: 'Ela escuta apenas em 127.0.0.1 e não tem autenticação, então qualquer programa no mesmo PC pode chamá-la. O README diz para nunca expor a porta.',
          },
          {
            q: 'Haverá uma versão para Mac ou Linux?',
            a: 'O site diz que o suporte a Mac pode vir depois e não dá data; o Linux não é mencionado. Trate ambos como não anunciados.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O TecAdRiseBot é uma estrutura para Windows, com licença MIT, para executar vários agentes de IA agendados que guardam memória, com código legível e uma API de controle local documentada. Em contrapartida, tem seis semanas, não tem instalador nem versão publicada, depende inteiramente dos modelos hospedados do Cursor e não tem uma política de privacidade específica do app. Serve para desenvolvedores que já usam o Cursor e querem um desktop multiagente inspecionável; quem precisa de um modelo no próprio hardware deve começar pelo [Hermes Agent](/pt/power-local-llm/hermes-agent-review) ou pelo [Agent Zero](/pt/power-local-llm/agent-zero-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Página do produto TecAdRiseBot](https://tecadrise.ai/products/tecadrisebot) — recursos, requisitos, plataformas e declaração de independência, verificados em 28 de outubro de 2026.',
          '[TecAdRiseBot vs Grok Bot](https://tecadrise.ai/vs/tecadrisebot-vs-grok-bot) — a comparação do próprio desenvolvedor, incluindo "Mac later" e rotinas que só rodam com o app aberto; a PromptQuorum não verificou as afirmações sobre o Grok Bot.',
          '[TecAdRiseBot no GitHub](https://github.com/tecadrise-ai/TecAdRiseBot) — README, package.json (versão 0.1.0), licença MIT, data de criação e histórico de commits, lidos pela API do GitHub em 28 de outubro de 2026.',
          '[Documentação do SDK TypeScript do Cursor](https://cursor.com/docs/sdk/typescript) — runtimes, inferência em modelos hospedados, cobrança e chaves de API.',
          '[Página de termos e privacidade da TecAdRise](https://tecadrise.ai/terms) — política válida para toda a empresa, cabeçalho datado "January 2025".',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Hermes Agent](/pt/power-local-llm/hermes-agent-review) — um agente pessoal com memória persistente que pode usar modelos locais.',
          '[Análise do Agent Zero](/pt/power-local-llm/agent-zero-review) — um agente autônomo mínimo com capacidade de programar.',
          '[Diretório de software para LLMs locais](/pt/directory) — todos os apps deste segmento lado a lado.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/tecadrisebot-review-hero-ar.webp',
    title: 'مراجعة TecAdRiseBot: سطح مكتب مجاني للوكلاء على نماذج Cursor السحابية',
    seoTitle: 'مراجعة TecAdRiseBot: سطح مكتب وكلاء Windows على Cursor',
    intro:
      'TecAdRiseBot تطبيق مجاني برخصة MIT لسطح مكتب Windows لتشغيل عدة وكلاء ذكاء اصطناعي مسمّين، لكلٍّ منهم نموذجه وذاكرته وخوادم MCP ومهاراته وجدوله الزمني. بنته TecAdRise، وهي شركة مسجّلة في بولندا، على Electron وCursor TypeScript SDK، وأُنشئ مستودعه في 19 سبتمبر 2026. تعكس هذه المراجعة صفحة المنتج ومستودع GitHub ووثائق Cursor SDK كما جرى التحقق منها في 28 أكتوبر 2026.',
    metaDescription:
      'مراجعة TecAdRiseBot: تطبيق Windows مجاني برخصة MIT لإدارة عدة وكلاء ذكاء اصطناعي عبر Cursor SDK. ما يبقى على جهازك وما يذهب إلى Cursor وجهد الإعداد.',
    twitterDescription:
      'مراجعة TecAdRiseBot: سطح مكتب مفتوح المصدر ومجاني لوكلاء ذكاء اصطناعي مسمّين. يبقى التطبيق والذاكرة على جهازك، لكن كل استدعاء للنموذج يذهب إلى Cursor. الإعداد والخصوصية وما لم نتمكن من التحقق منه.',
    audience:
      'مستخدمو Windows والمطوّرون الذين يريدون تشغيل عدة وكلاء ذكاء اصطناعي مجدولين من تطبيق سطح مكتب واحد، ويحتاجون إلى معرفة ما هو محلي فعلًا وما الذي يتلقاه Cursor وما تكلفة الإعداد.',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة TecAdRiseBot',
    targetKeywords: [
      'مراجعة tecadrisebot',
      'بديل مفتوح المصدر لـ grok bot',
      'تطبيق سطح مكتب على cursor sdk',
      'سطح مكتب متعدد الوكلاء على windows',
      'وكلاء ذكاء اصطناعي بذاكرة وMCP',
      'وكلاء ذكاء اصطناعي مجدولون على windows',
    ],
    current_hardware_mentioned: ['حاسوب Windows 10/11'],
    leadAnswerBlock:
      '**TecAdRiseBot (الإصدار 0.1.0 حتى 28 أكتوبر 2026) تطبيق مجاني برخصة MIT لسطح مكتب Windows يدير عدة وكلاء ذكاء اصطناعي مسمّين، لكلٍّ منهم ذاكرته وخوادم MCP ومهاراته وجدوله الزمني؛ يبقى التطبيق وملفاته على حاسوبك، لكن جميع استدعاءات النموذج تذهب إلى النماذج المستضافة لدى Cursor عبر مفتاح Cursor API.** ولا يوجد مثبّت: تستنسخ المستودع وتشغّله باستخدام Node.js. عمر المشروع نحو ستة أسابيع، وكان آخر تحديث له في 23 أكتوبر 2026.',
    quickAnswerTop: {
      ar: {
        question: 'هل TecAdRiseBot تطبيق LLM محلي؟',
        answer:
          'ليس بمعنى تشغيل نموذج على عتادك: استدعاءات النموذج تذهب إلى Cursor، فتغادر الأوامر والسياق الحاسوب في كل دورة. أما ما يبقى محليًا فهو التطبيق وإعدادات الوكلاء وملاحظات الذاكرة ومساحات العمل والجدول الزمني.',
        bullets: [
          'الشفرة والإعداد على [GitHub](https://github.com/tecadrise-ai/TecAdRiseBot)؛ ولا يوجد مثبّت، لذا يلزم طرفية (Terminal) وNode.js 22.13 أو أحدث.',
          'يعمل على Windows 10 و11 فقط؛ ويقول الموقع إن إصدارًا لنظام Mac قد يأتي لاحقًا.',
          'يحتاج إلى مفتاح Cursor API خاص بك؛ ويحاسب Cursor على استخدام النماذج بشكل منفصل عن التطبيق المجاني.',
          'يمكن للوكلاء تبادل الرسائل، وحفظ ملاحظات بأسلوب الويكي، وتشغيل خوادم MCP، والعمل وفق جداول بأسلوب cron ما دام التطبيق مفتوحًا.',
          'واجهة تحكم محلية على المنفذ 8787 بلا مصادقة، لذا يجب ألا تُعرَّض خارج الحاسوب.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو TecAdRiseBot؟', anchor: 'what-is-tecadrisebot' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'الأسعار', anchor: 'pricing' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'ميزات أكدتها المصادر', anchor: 'key-features' },
      { label: 'ما يعمل محليًا وما يذهب إلى Cursor', anchor: 'privacy' },
      { label: 'المنافسون والبدائل', anchor: 'tecadrisebot-competitors' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'ما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
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
            text: 'TecAdRiseBot سطح مكتب Windows مجاني ومفتوح المصدر يشغّل عدة وكلاء ذكاء اصطناعي مسمّين بذاكرة وMCP وجداول زمنية، ويعتمد على نماذج Cursor السحابية لا على نموذج في حاسوبك.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّت Node.js وتنزّل الشفرة وتلصق مفتاح Cursor، ثم تتحدث مع وكلاء يتذكرون ويستدعون الأدوات ويعملون وفق جدول زمني.',
          },
        ],
        items: [
          'الجهة المطوّرة: TecAdRise، شركة مسجّلة في بولندا تبيع خدمات أتمتة بالذكاء الاصطناعي؛ ولا يُذكر مؤسس أو مطوّر فرد بالاسم.',
          'الصيانة: تتواصل الإيداعات (commits) حتى أواخر أكتوبر 2026، فلا ينطبق تحذير المشروع المهجور.',
          'السجل: لا إصدار موسوم ولا تاريخ إصدارات يتجاوز 0.1.0، ولا آراء عامة حتى الآن.',
          'الترخيص: MIT، لذا يمكن قراءة الشفرة كاملة وتفريعها وإعادة بنائها.',
          'اللغات: الموقع وملف README بالإنجليزية ولا يذكران لغة واجهة أخرى.',
          'الاستقلالية: تذكر الجهة المطوّرة أنه ليس منتجًا رسميًا من Grok أو xAI أو Cursor.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحة المنتج ومستودع GitHub ووثائق Cursor SDK، وقد جرى التحقق منها في 28 أكتوبر 2026. لم تثبّت PromptQuorum التطبيق ولم تشغّله ولم تقِس أداءه، ولم تراجع الجهة المطوّرة هذه الصفحة.',
          },
        ],
      },
      overview: {
        id: 'what-is-tecadrisebot',
        title: 'ما هو TecAdRiseBot؟',
        content: [
          '**TecAdRiseBot غرفة تحكم مكتبية لوكلاء الذكاء الاصطناعي: كل وكيل ملف تعريف مسمّى له اختيار نموذج خاص، وكتلة تعليمات ثابتة تسمى Soul، وخوادم MCP، ومجلد عمل، وجدول زمني.** والتقنيات المستخدمة هي Electron وReact وTypeScript وCursor SDK، ويصفه المستودع بأنه بديل مجاني ومفتوح المصدر لـ Grok Bot. ويضيف موقعه أنه برنامج مستقل وليس منتجًا رسميًا من Grok أو xAI.',
          'الجهة المطوّرة هي TecAdRise، ويصفها موقعها بأنها متخصصة في أنظمة الأتمتة المدعومة بالذكاء الاصطناعي للشركات الصغيرة، ويذكر أنها مسجّلة في بولندا. ولا يذكر الموقع اسم مؤسس، ويُدرج المستودع "TecAdRise" بوصفه المؤلف.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يجب بناء TecAdRiseBot من الشفرة المصدرية: لا يوجد مثبّت ولا إصدار مُحزَّم ولا صفحة في متجر تطبيقات، لذا يلزم طرفية (Terminal) وسلسلة أدوات Node.js.** ولا تحوي صفحة Releases على GitHub سوى وسم لفيديو توضيحي مع ملف MP4.',
        ],
        columns: ['البند', 'كيف تحصل عليه'],
        rows: [
          { 'البند': 'الشفرة والإعداد', 'كيف تحصل عليه': '[مستودع GitHub](https://github.com/tecadrise-ai/TecAdRiseBot) (MIT؛ يتضمن README خطوات الإعداد)' },
          { 'البند': 'الموقع', 'كيف تحصل عليه': '[صفحة المنتج على tecadrise.ai](https://tecadrise.ai/products/tecadrisebot)' },
          { 'البند': 'سياسة الخصوصية', 'كيف تحصل عليه': '[tecadrise.ai/terms](https://tecadrise.ai/terms) (شروط عامة للشركة؛ لا تذكر التطبيق)' },
          { 'البند': 'المتطلبات', 'كيف تحصل عليه': 'Windows 10/11 وNode.js 22.13+ وnpm 10+ ومفتاح Cursor API (يُنشأ في لوحة Cursor Dashboard)' },
        ],
        note: 'الإصدار الذي جرت مراجعته: 0.1.0، قُرئ من package.json في المستودع في 28 أكتوبر 2026. ويحتاج Playwright MCP أيضًا إلى Node وnpx في PATH.',
      },
      pricing: {
        id: 'pricing',
        title: 'الأسعار',
        content: [
          '**التطبيق مجاني وبرخصة MIT؛ أما التكلفة فهي استخدام Cursor API خلفه، ويحاسب عليه Cursor الحساب الذي يملك المفتاح.** وبحسب وثائق Cursor SDK، تتبع عمليات SDK الأسعار وحصص الطلبات وقواعد Privacy Mode نفسها المطبّقة على منتجات Cursor.',
        ],
        columns: ['البند', 'التكلفة'],
        rows: [
          { 'البند': 'تطبيق TecAdRiseBot', 'التكلفة': 'مجاني (MIT)' },
          { 'البند': 'استخدام Cursor API', 'التكلفة': 'يحاسب عليه Cursor مفتاحك' },
          { 'البند': 'جدول الاستخدام في التطبيق', 'التكلفة': 'سجل محلي للرموز (tokens)، وليس فاتورة' },
        ],
        note: 'لم تُراجَع أسعار خطط Cursor الحالية في هذه المراجعة؛ اطلع على لوحة الاستخدام في حسابك على Cursor قبل تشغيل وكلاء مجدولين، لأن الجداول الزمنية قد ترسل طلبات كثيرة دون إشراف.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع الخطوات ملف README في المستودع؛ ولم تنفّذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'ثبّت أدوات التشغيل',
            whyItMatters: 'يطلب README وجود Node.js 22.13 أو أحدث وnpm 10 أو أحدث على Windows 10 أو 11.',
          },
          {
            title: 'استنسخ المستودع وشغّله',
            whyItMatters: 'البدء السريع هو git clone ثم npm install ثم npm run dev؛ ويبدأ التطبيق في وضع التطوير عبر Vite وElectron، لا من مثبّت.',
          },
          {
            title: 'الصق مفتاح Cursor API',
            whyItMatters: 'افتح صف الحساب ثم General، واحفظ مفتاحًا أنشأته في لوحة Cursor Dashboard؛ ويقول README إنه يُحفظ في Electron safeStorage لا في قاعدة بيانات الدردشة.',
          },
          {
            title: 'اختر نموذجًا افتراضيًا وأنشئ وكيلًا',
            whyItMatters: 'تأتي النماذج من فهرس Cursor لديك؛ ويمكن لكل وكيل استخدام نموذجه الخاص، مع وضع اعتيادي أو سريع وإعداد للجهد.',
          },
          {
            title: 'أرسل رسالة أو أضف جدولًا زمنيًا',
            whyItMatters: 'تعمل الجداول الزمنية فقط ما دام تطبيق سطح المكتب يعمل، فإغلاق الحاسوب المحمول يعني عدم تنفيذ التشغيلات المجدولة.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'ميزات أكدتها المصادر',
        content: [
          '**كل بند أدناه مأخوذ من README أو صفحة المنتج.**',
        ],
        items: [
          '**شريط جانبي متعدد الوكلاء.** وكلاء مسمّون بألوان مع بحث وإعادة ترتيب بالسحب ودردشة متدفقة وزر إيقاف (Stop).',
          '**Soul وموجّه النظام.** ملف SYSTEM.md مشترك لجميع الوكلاء إضافة إلى Soul خاص بكل وكيل بقواعد ثابتة.',
          '**رسائل بين الوكلاء.** يمكن للوكلاء تبادل الرسائل، ويُخزَّن طرفا المحادثة.',
          '**الذاكرة.** مستودع بأسلوب الويكي (index.md ومجلد notes وlog.md) مع مهارة لإدارة الذاكرة؛ ويضيف إيداع لاحق ملف memory.md خاصًا في مساحة عمل كل وكيل.',
          '**MCP والمهارات.** ملفات MCP JSON عامة وأخرى لكل وكيل، ومجلد مهارات مشترك من ملفات SKILL.md، وخادما Playwright وAgentMail مضمّنان عند أول تشغيل.',
          '**المجدوِل.** جداول حلقية وبفواصل زمنية ويومية وأسبوعية ولمرة واحدة وبصيغة cron، مع إيقاف مؤقت واستئناف وتشغيل فوري.',
          '**وكلاء يعدّلون أنفسهم.** يستطيع الوكلاء قراءة لقطة من إعداداتهم وتعديلها عبر PATCH.',
          '**جدول استخدام محلي.** عدد الرموز (tokens) لكل وكيل، محفوظ على الحاسوب.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'ما يعمل محليًا وما يذهب إلى Cursor',
        content: [
          '**تنص وثائق Cursor SDK على أن كل الاستدلال (inference) يمر عبر النماذج المستضافة لدى Cursor في وضعيه المحلي والسحابي، لذا فعبارة "يعمل محليًا" في موقع TecAdRiseBot تصف التطبيق وملفاته لا النموذج.** وبذلك تُرسل الأوامر والسياق ونتائج الأدوات إلى Cursor في كل دورة، بموجب شروط حساب Cursor الذي يملك المفتاح. ولم تتحقق هذه المراجعة من قواعد الاحتفاظ بالبيانات لدى Cursor.',
          'وبحسب README، يبقى على الحاسوب: إعدادات الوكلاء ومستودع الذاكرة ومساحات عمل كل وكيل وقاعدة بيانات الدردشة وجدول الرموز. ويُحفظ مفتاح API في Electron safeStorage. وتستمع واجهة التحكم على 127.0.0.1 المنفذ 8787 بلا مصادقة، ويحذّر README من تعريض هذا المنفذ خارج الحاسوب.',
          'السياسة الوحيدة التي يربط بها الموقع هي "Terms of Service & Privacy Policy" عامة للشركة على tecadrise.ai/terms، وآخر تحديث لها "January 2025" بحسب ترويستها. وهي مكتوبة لموقع الشركة وخدمات الأتمتة التي تقدمها ولا تذكر TecAdRiseBot، لذا فهي لا تصف تدفق بيانات التطبيق. وتستخدم صفحة المنتج شريط موافقة على ملفات تعريف الارتباط مع خيار الرفض.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'الشفرة مفتوحة، فيمكن لأي شخص فحص ما يرسله التطبيق، لكن PromptQuorum لم تدقّق الشفرة ولا حركة الشبكة. لا توجّه الوكلاء إلى ملفات سرية ما لم تكن شروط Cursor مقبولة لتلك المواد.',
          },
        ],
      },
      competitors: {
        id: 'tecadrisebot-competitors',
        title: 'المنافسون والبدائل',
        content: '**يقع TecAdRiseBot بين أدوات الوكلاء المستقلة في الدليل؛ وأقرب المقارنات هي تطبيقات الوكلاء الأخرى التي تحتفظ بالذاكرة وتشغّل الأدوات على حاسوبك.**',
        itemHeadings: true,
        columns: ['الأداة', 'أشهر ما تُعرف به'],
        rows: [
          { 'الأداة': '[Hermes Agent](/ar/power-local-llm/hermes-agent-review)', 'أشهر ما تُعرف به': 'وكيل شخصي بسطر الأوامر برخصة MIT وبذاكرة دائمة، ويمكن توجيهه إلى واجهات نماذج محلية مثل Ollama' },
          { 'الأداة': '[Agent Zero](/ar/power-local-llm/agent-zero-review)', 'أشهر ما تُعرف به': 'وكيل مستقل برخصة MIT بقدرة على البرمجة، يُشغَّل من واجهة ويب على Mac أو Windows أو Linux' },
          { 'الأداة': '[Atomic Bot](/ar/power-local-llm/atomic-bot-review)', 'أشهر ما تُعرف به': 'تطبيق سطح مكتب وجوال بمثبّت يحزم حزمة وكلاء OpenClaw، بوضع محلي أو سحابي مدفوع' },
          { 'الأداة': '[Multica](/ar/power-local-llm/multica-review)', 'أشهر ما تُعرف به': 'مساحة عمل ذاتية الاستضافة لإسناد ومراجعة عمل وكلاء البرمجة مثل Claude Code وCursor' },
        ],
        note: 'تعكس هذه القائمة أدوات من الشريحة نفسها في الدليل، وليست ترتيبًا من PromptQuorum. والفرق الرئيسي عن أول اثنتين هو مصدر النموذج: فهما تستطيعان استخدام واجهات محلية، بينما يستخدم TecAdRiseBot فهرس Cursor المستضاف فقط. راجع [دليل برمجيات LLM المحلية](/ar/directory) للاطلاع على الفهرس الكامل.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**المطوّرون الذين يدفعون بالفعل مقابل Cursor** ويريدون عدة وكلاء مجدولين بذاكرة على حاسوب Windows.',
          '**المهتمون بالتجريب ممن يحبون الشفرة المفتوحة.** فالموجّهات وMCP والذاكرة ملفات عادية والترخيص MIT.',
          '**من يقارنون بين منصات تشغيل الوكلاء** ويقبلون مشروعًا حديث العهد جدًا وتثبيتًا بالبناء من المصدر.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الجودة عمليًا.** لم تشغّل PromptQuorum التطبيق، لذا لم يُختبر الاستقرار ولا سلوك الوكلاء ولا المجدوِل.',
          '**معالجة البيانات لدى Cursor.** لم تُراجَع شروط الاحتفاظ والتدريب الخاصة بحركة SDK؛ وصفحة سياسة التطبيق نفسها لا تغطيها.',
          '**الاستخدام دون اتصال أو بنموذج محلي.** لا تُظهر المصادر أي طريقة لاستخدام نموذج محلي أو مستضاف ذاتيًا؛ ومن يحتاج إلى ذلك فعليه النظر في البدائل أعلاه.',
          '**خلفية الجهة المطوّرة.** لا يُذكر مؤسس ولم يُتواصل مع الجهة المطوّرة، لذا فالتزامات الدعم وخارطة الطريق غير معروفة خارج ما يقوله الموقع من أن دعم Mac قد يأتي لاحقًا.',
          '**السجل.** لا يوجد إصدار موسوم ولا آراء عامة من المستخدمين حتى الآن.',
          '**غير مناسب للمبتدئين.** يلزم طرفية (Terminal) وNode.js ومفتاح API يُحاسَب على استخدامه.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يستطيع TecAdRiseBot استخدام Ollama أو نموذج محلي آخر؟',
            a: 'لا تُظهر المصادر خيارًا كهذا؛ إذ يُختار النموذج دائمًا من فهرس Cursor.',
          },
          {
            q: 'هل يواصل العمل عند إغلاق الحاسوب المحمول؟',
            a: 'لا. بحسب الجهة المطوّرة، تعمل الجداول الزمنية فقط ما دام تطبيق سطح المكتب يعمل؛ ولا يوفّر المشروع جهازًا مستضافًا يعمل على مدار الساعة.',
          },
          {
            q: 'هل له علاقة بـ Cursor أو xAI؟',
            a: 'تذكر الجهة المطوّرة أنه مستقل وليس منتجًا رسميًا من Grok أو xAI أو Cursor. لكنه يعتمد على حساب Cursor وعلى Cursor SDK العام.',
          },
          {
            q: 'هل من الآمن ترك واجهة التحكم تعمل؟',
            a: 'ترتبط بالعنوان 127.0.0.1 فقط وبلا مصادقة، لذا يستطيع أي برنامج على الحاسوب نفسه استدعاءها. ويقول README ألا يُعرَّض المنفذ أبدًا.',
          },
          {
            q: 'هل سيصدر إصدار لنظام Mac أو Linux؟',
            a: 'يقول الموقع إن دعم Mac قد يأتي لاحقًا دون تحديد موعد؛ ولا يُذكر Linux. اعتبرهما غير معلنين.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'TecAdRiseBot منصة تشغيل برخصة MIT لنظام Windows لتشغيل عدة وكلاء ذكاء اصطناعي مجدولين يحتفظون بالذاكرة، بشفرة مقروءة وواجهة تحكم محلية موثّقة. في المقابل، عمره ستة أسابيع، وبلا مثبّت أو إصدار، ويعتمد كليًا على نماذج Cursor المستضافة، ولا توجد له سياسة خصوصية خاصة بالتطبيق. يناسب المطوّرين الذين يستخدمون Cursor بالفعل ويريدون سطح مكتب متعدد الوكلاء قابلًا للفحص؛ ومن يحتاج إلى نموذج على عتاده فليبدأ بـ [Hermes Agent](/ar/power-local-llm/hermes-agent-review) أو [Agent Zero](/ar/power-local-llm/agent-zero-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[صفحة منتج TecAdRiseBot](https://tecadrise.ai/products/tecadrisebot) — الميزات والمتطلبات والمنصات وبيان الاستقلالية، جرى التحقق منها في 28 أكتوبر 2026.',
          '[TecAdRiseBot مقابل Grok Bot](https://tecadrise.ai/vs/tecadrisebot-vs-grok-bot) — مقارنة الجهة المطوّرة نفسها، وتتضمن "Mac لاحقًا" وعمل الجداول الزمنية فقط أثناء فتح التطبيق؛ ولم تتحقق PromptQuorum من ادعاءاتها بشأن Grok Bot.',
          '[TecAdRiseBot على GitHub](https://github.com/tecadrise-ai/TecAdRiseBot) — README وpackage.json (الإصدار 0.1.0) ورخصة MIT وتاريخ الإنشاء وسجل الإيداعات، قُرئت عبر GitHub API في 28 أكتوبر 2026.',
          '[وثائق Cursor TypeScript SDK](https://cursor.com/docs/sdk/typescript) — بيئات التشغيل والاستدلال على نماذج مستضافة والفوترة ومفاتيح API.',
          '[صفحة الشروط والخصوصية لدى TecAdRise](https://tecadrise.ai/terms) — سياسة عامة للشركة، وترويستها مؤرخة "January 2025".',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Hermes Agent](/ar/power-local-llm/hermes-agent-review) — وكيل شخصي بذاكرة دائمة يمكنه استخدام نماذج محلية.',
          '[مراجعة Agent Zero](/ar/power-local-llm/agent-zero-review) — وكيل مستقل بسيط بقدرة على البرمجة.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — كل التطبيقات في هذه الشريحة جنبًا إلى جنب.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/tecadrisebot-review-hero-zh.webp',
    title: 'TecAdRiseBot 评测：基于 Cursor 云端模型的免费 Windows 智能体桌面应用',
    seoTitle: 'TecAdRiseBot 评测：Cursor 驱动的智能体桌面应用',
    intro:
      'TecAdRiseBot 是一款免费、采用 MIT 许可证的 Windows 桌面应用，可同时运行多个有名字的 AI 智能体，每个智能体都有自己的模型、记忆、MCP 服务器、技能和计划任务。它基于 Electron 和 Cursor TypeScript SDK 构建，开发方是一家在波兰注册的公司 TecAdRise，代码仓库创建于 2026 年 9 月 19 日。本评测基于 2026 年 10 月 28 日核对的产品页面、GitHub 仓库和 Cursor SDK 文档。',
    metaDescription:
      'TecAdRiseBot 评测：免费、MIT 许可的 Windows 多智能体桌面应用，基于 Cursor SDK。哪些留在你的电脑上、哪些发往 Cursor，以及安装难度。',
    twitterDescription:
      'TecAdRiseBot 评测：一款免费开源的 Windows 桌面应用，用来管理有名字的 AI 智能体。应用和记忆留在你的电脑上，但每次模型调用都发往 Cursor。安装、隐私以及我们未能核实的内容。',
    audience:
      '想在一个桌面应用中运行多个定时 AI 智能体的 Windows 用户和开发者，需要了解哪些部分真正在本地、Cursor 会收到什么，以及安装需要付出什么。',
    readTime: '阅读约9分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'TecAdRiseBot 评测',
    targetKeywords: [
      'tecadrisebot 评测',
      '开源 grok bot 替代品',
      'cursor sdk 桌面应用',
      'windows 多智能体桌面应用',
      '带记忆和 mcp 的本地 ai 智能体',
      'windows 定时 ai 智能体',
    ],
    current_hardware_mentioned: ['Windows 10/11 PC'],
    leadAnswerBlock:
      '**TecAdRiseBot（截至 2026 年 10 月 28 日为 0.1.0 版）是一款免费、采用 MIT 许可证的 Windows 桌面应用，用来管理多个有名字的 AI 智能体，每个智能体都有自己的记忆、MCP 服务器、技能和计划任务；应用及其文件留在你的电脑上，但所有模型调用都通过 Cursor API 密钥发往 Cursor 的托管模型。** 它没有安装程序：你需要克隆仓库，并用 Node.js 启动。该项目大约上线六周，最近一次更新在 2026 年 10 月 23 日。',
    quickAnswerTop: {
      zh: {
        question: 'TecAdRiseBot 是本地大模型应用吗？',
        answer:
          '不是在你自己的硬件上运行模型的那种意义：模型调用发往 Cursor，因此每一轮对话的提示词和上下文都会离开电脑。留在本地的是应用本身、智能体设置、记忆笔记、工作区和计划任务。',
        bullets: [
          '源代码和安装方法见 [GitHub](https://github.com/tecadrise-ai/TecAdRiseBot)；没有安装程序，因此需要终端和 Node.js 22.13 或更高版本。',
          '仅支持 Windows 10 和 11；官网称 Mac 版本以后可能推出。',
          '需要你自己的 Cursor API 密钥；Cursor 会把模型用量与免费应用分开计费。',
          '智能体之间可以互发消息、维护 wiki 式笔记、运行 MCP 服务器，并在应用打开期间按 cron 式计划执行。',
          '8787 端口上的本地控制 API 没有身份验证，因此不能暴露到这台电脑之外。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'TecAdRiseBot 是什么？', anchor: 'what-is-tecadrisebot' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '价格', anchor: 'pricing' },
      { label: '上手步骤', anchor: 'getting-started' },
      { label: '来源确认的功能', anchor: 'key-features' },
      { label: '哪些在本地运行，哪些发往 Cursor', anchor: 'privacy' },
      { label: '竞品与替代方案', anchor: 'tecadrisebot-competitors' },
      { label: '适合谁用', anchor: 'who-should-use' },
      { label: '我们未能核实的内容', anchor: 'who-should-not-use' },
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
            text: 'TecAdRiseBot 是一款免费开源的 Windows 桌面应用，可运行多个带记忆、MCP 和计划任务的有名字的 AI 智能体，使用的是 Cursor 的云端模型，而不是你电脑上的模型。',
          },
          {
            type: 'plain-terms',
            text: '你先安装 Node.js、下载代码、粘贴一个 Cursor 密钥，然后就能与会记事、会调用工具、按时间表工作的智能体聊天。',
          },
        ],
        items: [
          '开发方：TecAdRise，一家在波兰注册、销售 AI 自动化服务的公司；没有点名任何创始人或个人开发者。',
          '维护情况：提交持续到 2026 年 10 月下旬，因此不适用“项目停更”警告。',
          '使用记录：没有带标签的正式发布，除 0.1.0 外没有版本历史，也还没有公开反馈。',
          '许可证：MIT，因此可以阅读、复刻并重新构建全部源代码。',
          '语言：官网和 README 为英文，没有列出其他界面语言。',
          '独立性：开发方称它不是 Grok、xAI 或 Cursor 的官方产品。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 2026 年 10 月 28 日核对的产品页面、GitHub 仓库和 Cursor SDK 文档。PromptQuorum 没有安装、运行或评测该应用，开发方也没有审阅本页。',
          },
        ],
      },
      overview: {
        id: 'what-is-tecadrisebot',
        title: 'TecAdRiseBot 是什么？',
        content: [
          '**TecAdRiseBot 是一个 AI 智能体的桌面控制台：每个智能体都是一份有名字的配置，包含自己的模型选择、名为 Soul 的固定指令块、MCP 服务器、工作区文件夹和计划任务。** 技术栈为 Electron、React、TypeScript 和 Cursor SDK，仓库把它描述为 Grok Bot 的免费开源替代品。官网补充说，它是独立软件，不是 Grok 或 xAI 的官方产品。',
          '开发方是 TecAdRise，其官网称公司专注于面向小企业的 AI 驱动自动化系统，并表示在波兰注册。官网没有点名创始人，仓库的作者栏写的是“TecAdRise”。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**TecAdRiseBot 必须从源代码构建：没有安装程序、没有打包发布版，也没有应用商店页面，因此需要终端和 Node.js 工具链。** GitHub Releases 里只有一个演示视频标签和一个 MP4 文件。',
        ],
        columns: ['项目', '获取方式'],
        rows: [
          { '项目': '源代码与安装', '获取方式': '[GitHub 仓库](https://github.com/tecadrise-ai/TecAdRiseBot)（MIT；README 中有安装步骤）' },
          { '项目': '官网', '获取方式': '[tecadrise.ai 产品页面](https://tecadrise.ai/products/tecadrisebot)' },
          { '项目': '隐私政策', '获取方式': '[tecadrise.ai/terms](https://tecadrise.ai/terms)（公司通用条款；未提及该应用）' },
          { '项目': '运行要求', '获取方式': 'Windows 10/11、Node.js 22.13+、npm 10+，以及一个 Cursor API 密钥（在 Cursor Dashboard 中创建）' },
        ],
        note: '评测版本：0.1.0，2026 年 10 月 28 日从仓库的 package.json 读取。Playwright MCP 另外需要 Node 和 npx 位于 PATH 中。',
      },
      pricing: {
        id: 'pricing',
        title: '价格',
        content: [
          '**应用本身免费且采用 MIT 许可证；真正的成本是背后的 Cursor API 用量，由 Cursor 向持有该密钥的账户计费。** 据 Cursor SDK 文档，SDK 运行遵循与 Cursor 自家产品相同的定价、请求额度池和隐私模式规则。',
        ],
        columns: ['项目', '费用'],
        rows: [
          { '项目': 'TecAdRiseBot 应用', '费用': '免费（MIT）' },
          { '项目': 'Cursor API 用量', '费用': '由 Cursor 向你的密钥计费' },
          { '项目': '应用内用量表', '费用': '本地 token 日志，不是发票' },
        ],
        note: '本评测没有核对 Cursor 当前的套餐价格；运行定时智能体之前，请先查看你自己的 Cursor 用量面板，因为计划任务可能在无人值守时发出大量请求。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤遵循仓库的 README；PromptQuorum 没有执行过这些步骤。**',
        ],
        numberedItems: [
          {
            title: '安装工具链',
            whyItMatters: 'README 要求在 Windows 10 或 11 上安装 Node.js 22.13 或更高版本，以及 npm 10 或更高版本。',
          },
          {
            title: '克隆仓库并启动',
            whyItMatters: '快速上手步骤是 git clone、npm install 和 npm run dev；应用通过 Vite 和 Electron 以开发模式启动，而不是通过安装程序。',
          },
          {
            title: '粘贴 Cursor API 密钥',
            whyItMatters: '打开账户行，进入 General，保存在 Cursor Dashboard 中创建的密钥；README 称密钥保存在 Electron safeStorage 中，而不是聊天数据库里。',
          },
          {
            title: '选择默认模型并创建智能体',
            whyItMatters: '模型来自你的 Cursor 目录；每个智能体可以使用自己的模型，并有常规或快速模式以及强度设置。',
          },
          {
            title: '发送消息或添加计划任务',
            whyItMatters: '计划任务只在桌面应用运行期间触发，因此合上笔记本就不会有定时运行。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源确认的功能',
        content: [
          '**以下每一项都来自 README 或产品页面。**',
        ],
        items: [
          '**多智能体侧边栏。** 有名字的智能体，带颜色、搜索、拖动排序，以及带“停止”按钮的流式聊天。',
          '**Soul 与系统提示词。** 所有智能体共用一份 SYSTEM.md，另有每个智能体各自的、带固定规则的 Soul。',
          '**智能体间消息。** 智能体之间可以互发消息，交流的双方都会被存储。',
          '**记忆。** wiki 式记忆库（index.md、notes 文件夹、log.md）和一个记忆管理技能；后来的一次提交又为每个智能体工作区增加了私有的 memory.md。',
          '**MCP 与技能。** 全局和每个智能体各自的 MCP JSON、由 SKILL.md 文件组成的共享技能文件夹，以及首次启动时内置的 Playwright 和 AgentMail 服务器。',
          '**计划任务。** 循环、间隔、每日、每周、一次性和 cron 计划，可暂停、恢复和立即运行。',
          '**可自行修改的智能体。** 智能体可以读取自己配置的快照，并用 PATCH 修改它。',
          '**本地用量表。** 每个智能体的 token 用量，保存在电脑本地。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '哪些在本地运行，哪些发往 Cursor',
        content: [
          '**Cursor SDK 文档称，无论本地模式还是云端模式，所有推理都经由 Cursor 的托管模型完成，因此 TecAdRiseBot 官网上的“本地运行”说的是应用及其文件，而不是模型。** 提示词、上下文和工具结果因此每一轮都会发往 Cursor，适用持有该密钥的 Cursor 账户的条款。本评测没有核对 Cursor 的数据保留规则。',
          '据 README，留在电脑上的有：智能体配置、记忆库、每个智能体的工作区、聊天数据库和 token 用量表。API 密钥保存在 Electron safeStorage 中。控制 API 监听 127.0.0.1 的 8787 端口，没有身份验证，README 警告不要把该端口暴露到这台电脑之外。',
          '官网链接的唯一政策是 tecadrise.ai/terms 上公司通用的“Terms of Service & Privacy Policy”，页首自述的最后更新时间为“January 2025”。它是为公司的网站和自动化服务而写的，从未提到 TecAdRiseBot，因此并不描述该应用的数据流向。产品页面带有可选择拒绝的 Cookie 横幅。',
        ],
        callouts: [
          {
            type: 'note',
            text: '代码是开放的，任何人都可以检查应用发送了什么，但 PromptQuorum 没有审计代码或网络流量。除非 Cursor 的条款对相关材料而言可以接受，否则不要让智能体接触机密文件。',
          },
        ],
      },
      competitors: {
        id: 'tecadrisebot-competitors',
        title: '竞品与替代方案',
        content: '**TecAdRiseBot 属于目录中的自主智能体类工具；最接近的对比对象，是其他在自己电脑上保留记忆并运行工具的智能体应用。**',
        itemHeadings: true,
        columns: ['工具', '最为人所知的特点'],
        rows: [
          { '工具': '[Hermes Agent](/zh/power-local-llm/hermes-agent-review)', '最为人所知的特点': 'MIT 许可的命令行个人智能体，带持久记忆，可指向 Ollama 等本地模型后端' },
          { '工具': '[Agent Zero](/zh/power-local-llm/agent-zero-review)', '最为人所知的特点': 'MIT 许可的自主智能体，具备编程能力，通过网页界面在 Mac、Windows 或 Linux 上使用' },
          { '工具': '[Atomic Bot](/zh/power-local-llm/atomic-bot-review)', '最为人所知的特点': '基于安装程序的桌面和移动应用，打包了 OpenClaw 智能体栈，提供本地或付费云端模式' },
          { '工具': '[Multica](/zh/power-local-llm/multica-review)', '最为人所知的特点': '自托管工作区，用于分配和审阅 Claude Code、Cursor 等编程智能体完成的工作' },
        ],
        note: '该列表反映的是同一目录细分中的工具，并非 PromptQuorum 的排名。与前两者的主要区别在于模型来源：它们可以使用本地后端，而 TecAdRiseBot 只使用 Cursor 的托管目录。完整目录见[本地大模型软件目录](/zh/directory)。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        items: [
          '**已经在付费使用 Cursor 的开发者**，想在 Windows 电脑上运行多个带记忆的定时智能体。',
          '**喜欢开放代码的折腾者。** 提示词、MCP 和记忆都是普通文件，许可证为 MIT。',
          '**在比较各类智能体框架的读者**，且能接受一个非常年轻的项目和从源代码构建的安装方式。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**实际使用表现。** PromptQuorum 没有运行该应用，因此稳定性、智能体行为和计划任务都没有经过测试。',
          '**Cursor 端的数据处理。** SDK 流量的保留和训练条款没有核对；应用自己的政策页面也没有涵盖这些内容。',
          '**离线或本地模型使用。** 来源中没有显示任何使用本地或自托管模型的方式；需要的读者应该看上面的替代方案。',
          '**开发方背景。** 没有点名创始人，也没有联系过开发方，因此除官网所说“Mac 支持以后可能推出”之外，支持和路线图承诺均未知。',
          '**使用记录。** 没有带标签的正式发布，也还没有公开的用户反馈。',
          '**不适合新手。** 需要终端、Node.js 和一个按用量付费的 API 密钥。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'TecAdRiseBot 能使用 Ollama 或其他本地模型吗？',
            a: '来源中没有显示这样的选项；模型始终从 Cursor 目录中选择。',
          },
          {
            q: '合上笔记本后它还能继续工作吗？',
            a: '不能。据开发方称，计划任务只在桌面应用运行期间触发；该项目没有常驻的托管机器。',
          },
          {
            q: '它与 Cursor 或 xAI 有关系吗？',
            a: '开发方称它是独立的，不是 Grok、xAI 或 Cursor 的官方产品。但它确实依赖 Cursor 账户和公开的 Cursor SDK。',
          },
          {
            q: '控制 API 可以一直开着吗？',
            a: '它只绑定到 127.0.0.1 且没有身份验证，因此同一台电脑上的任何程序都可以调用它。README 说绝不要暴露该端口。',
          },
          {
            q: '会有 Mac 或 Linux 版本吗？',
            a: '官网称 Mac 支持以后可能推出，但没有给出日期；没有提到 Linux。请把两者都视为尚未宣布。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'TecAdRiseBot 是一个采用 MIT 许可证的 Windows 框架，用来运行多个带记忆的定时 AI 智能体，源代码可读，并有文档化的本地控制 API。但另一方面，它上线仅六周，没有安装程序或正式发布版，完全依赖 Cursor 的托管模型，也没有针对该应用的隐私政策。它适合已经在用 Cursor、想要一个可检查的多智能体桌面应用的开发者；需要在自己硬件上运行模型的读者，应先看 [Hermes Agent](/zh/power-local-llm/hermes-agent-review) 或 [Agent Zero](/zh/power-local-llm/agent-zero-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[TecAdRiseBot 产品页面](https://tecadrise.ai/products/tecadrisebot) — 功能、运行要求、平台和独立性声明，2026 年 10 月 28 日核对。',
          '[TecAdRiseBot 对比 Grok Bot](https://tecadrise.ai/vs/tecadrisebot-vs-grok-bot) — 开发方自己的对比页面，包括“Mac 以后”以及计划任务只在应用打开时运行；PromptQuorum 没有核实其中关于 Grok Bot 的说法。',
          '[GitHub 上的 TecAdRiseBot](https://github.com/tecadrise-ai/TecAdRiseBot) — README、package.json（0.1.0 版）、MIT 许可证、创建日期和提交历史，2026 年 10 月 28 日通过 GitHub API 读取。',
          '[Cursor TypeScript SDK 文档](https://cursor.com/docs/sdk/typescript) — 运行时、托管模型推理、计费和 API 密钥。',
          '[TecAdRise 条款与隐私页面](https://tecadrise.ai/terms) — 公司通用政策，页首日期为“January 2025”。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Hermes Agent 评测](/zh/power-local-llm/hermes-agent-review) — 带持久记忆、可使用本地模型的个人智能体。',
          '[Agent Zero 评测](/zh/power-local-llm/agent-zero-review) — 具备编程能力的极简自主智能体。',
          '[本地大模型软件目录](/zh/directory) — 把这一细分中的所有应用并排列出。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/tecadrisebot-review-hero-ko.webp',
    title: 'TecAdRiseBot 리뷰: Cursor 클라우드 모델을 쓰는 무료 Windows 에이전트 데스크톱',
    seoTitle: 'TecAdRiseBot 리뷰: Windows 에이전트 데스크톱',
    intro:
      'TecAdRiseBot은 이름 있는 AI 에이전트 여러 개를 실행하는 무료 MIT 라이선스 Windows 데스크톱 앱으로, 에이전트마다 고유한 모델, 메모리, MCP 서버, 스킬, 일정을 가집니다. 폴란드에 등록된 회사 TecAdRise가 Electron과 Cursor TypeScript SDK로 만들었으며, 저장소는 2026년 9월 19일에 생성되었습니다. 이 리뷰는 2026년 10월 28일에 확인한 제품 페이지, GitHub 저장소, Cursor SDK 문서를 반영합니다.',
    metaDescription:
      'TecAdRiseBot 리뷰: Cursor SDK 기반의 무료 MIT 라이선스 Windows 멀티 에이전트 앱. PC에 남는 것, Cursor로 전송되는 것, 설치 난이도를 정리했습니다.',
    twitterDescription:
      'TecAdRiseBot 리뷰: 이름 있는 AI 에이전트를 위한 무료 오픈소스 Windows 데스크톱. 앱과 메모리는 PC에 남지만 모든 모델 호출은 Cursor로 전송됩니다. 설치, 개인정보, 확인하지 못한 내용.',
    audience:
      '하나의 데스크톱 앱에서 일정에 따라 움직이는 AI 에이전트 여러 개를 운영하려는 Windows 사용자와 개발자로서, 실제로 무엇이 로컬인지, Cursor가 무엇을 받는지, 설치에 어떤 수고가 드는지 알아야 하는 분.',
    readTime: '9분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'TecAdRiseBot 리뷰',
    targetKeywords: [
      'tecadrisebot 리뷰',
      '오픈소스 grok bot 대안',
      'cursor sdk 데스크톱 앱',
      'windows 멀티 에이전트 데스크톱',
      '메모리와 mcp를 갖춘 로컬 ai 에이전트',
      'windows 예약 실행 ai 에이전트',
    ],
    current_hardware_mentioned: ['Windows 10/11 PC'],
    leadAnswerBlock:
      '**TecAdRiseBot(2026년 10월 28일 기준 버전 0.1.0)은 이름 있는 AI 에이전트 여러 개를 관리하는 무료 MIT 라이선스 Windows 데스크톱 앱으로, 에이전트마다 고유한 메모리, MCP 서버, 스킬, 일정을 가집니다. 앱과 파일은 PC에 남지만 모든 모델 호출은 Cursor API 키를 통해 Cursor의 호스팅 모델로 전송됩니다.** 설치 프로그램은 없으며, 저장소를 복제해 Node.js로 실행해야 합니다. 프로젝트는 생긴 지 약 6주가 되었고 마지막 업데이트는 2026년 10월 23일이었습니다.',
    quickAnswerTop: {
      ko: {
        question: 'TecAdRiseBot은 로컬 LLM 앱입니까?',
        answer:
          '내 하드웨어에서 모델을 실행한다는 의미로는 아닙니다. 모델 호출이 Cursor로 전달되므로 프롬프트와 컨텍스트는 매 턴마다 PC를 떠납니다. 로컬에 남는 것은 앱, 에이전트 설정, 메모리 노트, 작업 공간, 일정입니다.',
        bullets: [
          '소스와 설치 방법은 [GitHub](https://github.com/tecadrise-ai/TecAdRiseBot)에 있으며, 설치 프로그램이 없으므로 터미널과 Node.js 22.13 이상이 필요합니다.',
          'Windows 10과 11 전용이며, 사이트에 따르면 Mac 버전은 나중에 나올 수 있습니다.',
          '본인의 Cursor API 키가 필요하며, 모델 사용량은 무료 앱과 별도로 Cursor가 청구합니다.',
          '에이전트는 서로 메시지를 보내고, 위키 형식의 노트를 보관하고, MCP 서버를 실행하고, 앱이 켜져 있는 동안 cron 방식의 일정에 따라 작동할 수 있습니다.',
          '8787번 포트의 로컬호스트 제어 API에는 인증이 없으므로 PC 밖으로 노출해서는 안 됩니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'TecAdRiseBot이란?', anchor: 'what-is-tecadrisebot' },
      { label: '받는 방법', anchor: 'get-it' },
      { label: '가격', anchor: 'pricing' },
      { label: '시작하기', anchor: 'getting-started' },
      { label: '출처로 확인된 기능', anchor: 'key-features' },
      { label: '로컬에서 실행되는 것과 Cursor로 전송되는 것', anchor: 'privacy' },
      { label: '경쟁 제품과 대안', anchor: 'tecadrisebot-competitors' },
      { label: '추천 대상', anchor: 'who-should-use' },
      { label: '확인하지 못한 내용', anchor: 'who-should-not-use' },
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
            text: 'TecAdRiseBot은 메모리, MCP, 일정을 갖춘 이름 있는 AI 에이전트 여러 개를 실행하는 무료 오픈소스 Windows 데스크톱으로, PC의 모델이 아니라 Cursor의 클라우드 모델을 사용합니다.',
          },
          {
            type: 'plain-terms',
            text: 'Node.js를 설치하고 코드를 내려받아 Cursor 키를 붙여 넣으면, 기억하고 도구를 호출하며 시간표에 따라 움직이는 에이전트와 대화할 수 있습니다.',
          },
        ],
        items: [
          '개발사: 폴란드에 등록된 회사 TecAdRise로, AI 자동화 서비스를 제공하며 창업자나 개별 개발자의 이름은 나와 있지 않습니다.',
          '유지 관리: 커밋이 2026년 10월 하순까지 이어지고 있으므로 방치된 프로젝트 경고는 해당되지 않습니다.',
          '이용 실적: 태그가 붙은 릴리스가 없고 0.1.0 이후의 버전 이력도 없으며, 공개된 사용자 의견도 아직 없습니다.',
          '라이선스: MIT이므로 전체 소스를 읽고, 포크하고, 다시 빌드할 수 있습니다.',
          '언어: 사이트와 README는 영어로 되어 있으며 다른 인터페이스 언어는 나와 있지 않습니다.',
          '독립성: 개발사는 Grok, xAI, Cursor의 공식 제품이 아니라고 밝힙니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 28일에 확인한 제품 페이지, GitHub 저장소, Cursor SDK 문서에 근거합니다. PromptQuorum은 앱을 설치하거나 실행하거나 벤치마크하지 않았으며, 개발사도 이 페이지를 검토하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-tecadrisebot',
        title: 'TecAdRiseBot이란?',
        content: [
          '**TecAdRiseBot은 AI 에이전트를 위한 데스크톱 관제실입니다. 에이전트는 각각 이름이 있는 프로필로, 고유한 모델 선택, Soul이라는 고정 지침 블록, MCP 서버, 작업 공간 폴더, 일정을 가집니다.** 기술 스택은 Electron, React, TypeScript, Cursor SDK이며, 저장소는 이를 Grok Bot의 무료 오픈소스 대안이라고 설명합니다. 사이트는 독립 소프트웨어이며 Grok이나 xAI의 공식 제품이 아니라고 덧붙입니다.',
          '개발사 TecAdRise는 사이트에서 소규모 기업을 위한 AI 기반 자동화 시스템을 전문으로 한다고 소개하고, 폴란드에 등록되어 있다고 밝힙니다. 사이트에는 창업자의 이름이 나와 있지 않으며, 저장소의 작성자는 "TecAdRise"로 되어 있습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '받는 방법',
        content: [
          '**TecAdRiseBot은 소스에서 직접 빌드해야 합니다. 설치 프로그램, 패키지된 릴리스, 스토어 등록이 없으므로 터미널과 Node.js 도구가 필요합니다.** GitHub Releases에는 MP4 파일이 있는 데모 영상 태그만 있습니다.',
        ],
        columns: ['항목', '받는 곳'],
        rows: [
          { '항목': '소스와 설치 방법', '받는 곳': '[GitHub 저장소](https://github.com/tecadrise-ai/TecAdRiseBot) (MIT, README에 설치 단계 수록)' },
          { '항목': '웹사이트', '받는 곳': '[tecadrise.ai 제품 페이지](https://tecadrise.ai/products/tecadrisebot)' },
          { '항목': '개인정보 처리방침', '받는 곳': '[tecadrise.ai/terms](https://tecadrise.ai/terms) (회사 전체 약관이며 앱은 언급하지 않음)' },
          { '항목': '필요 사항', '받는 곳': 'Windows 10/11, Node.js 22.13 이상, npm 10 이상, Cursor API 키(Cursor Dashboard에서 생성)' },
        ],
        note: '확인한 버전: 0.1.0으로, 2026년 10월 28일 저장소의 package.json에서 읽었습니다. Playwright MCP에는 추가로 PATH에 Node와 npx가 있어야 합니다.',
      },
      pricing: {
        id: 'pricing',
        title: '가격',
        content: [
          '**앱은 무료이며 MIT 라이선스입니다. 비용은 그 뒤에서 쓰이는 Cursor API 사용량이며, 키를 소유한 계정에 Cursor가 청구합니다.** Cursor SDK 문서에 따르면 SDK 실행에는 Cursor 자체 제품과 같은 요금, 요청 한도, Privacy Mode 규칙이 적용됩니다.',
        ],
        columns: ['항목', '비용'],
        rows: [
          { '항목': 'TecAdRiseBot 앱', '비용': '무료(MIT)' },
          { '항목': 'Cursor API 사용량', '비용': '본인 키로 Cursor가 청구' },
          { '항목': '앱 내 사용량 표', '비용': '로컬 토큰 기록이며 청구서가 아님' },
        ],
        note: '이 리뷰에서는 Cursor의 현재 요금제 가격을 확인하지 않았습니다. 예약 실행은 사람이 없는 동안 많은 요청을 보낼 수 있으므로, 에이전트를 돌리기 전에 본인의 Cursor 사용량 대시보드를 확인하십시오.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하기',
        content: [
          '**아래 단계는 저장소 README를 따른 것이며, PromptQuorum은 이를 실행해 보지 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '도구 설치',
            whyItMatters: 'README는 Windows 10 또는 11에서 Node.js 22.13 이상과 npm 10 이상을 요구합니다.',
          },
          {
            title: '저장소를 복제하고 실행',
            whyItMatters: '빠른 시작은 git clone, npm install, npm run dev이며, 앱은 설치 프로그램이 아니라 Vite와 Electron을 통한 개발 모드로 시작됩니다.',
          },
          {
            title: 'Cursor API 키 붙여 넣기',
            whyItMatters: '계정 행에서 General을 열고 Cursor Dashboard에서 만든 키를 저장합니다. README에 따르면 키는 채팅 데이터베이스가 아니라 Electron safeStorage에 보관됩니다.',
          },
          {
            title: '기본 모델을 고르고 에이전트 만들기',
            whyItMatters: '모델은 Cursor 카탈로그에서 가져오며, 에이전트마다 별도의 모델을 쓸 수 있고 일반 또는 빠른 모드와 노력 수준 설정이 있습니다.',
          },
          {
            title: '메시지를 보내거나 루틴 추가',
            whyItMatters: '루틴은 데스크톱 앱이 실행 중일 때만 작동하므로, 노트북을 닫으면 예약 실행도 이루어지지 않습니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 README 또는 제품 페이지에서 나온 것입니다.**',
        ],
        items: [
          '**멀티 에이전트 사이드바.** 색상, 검색, 드래그 정렬이 가능한 이름 있는 에이전트와 중지 버튼이 있는 스트리밍 채팅.',
          '**Soul과 시스템 프롬프트.** 모든 에이전트가 공유하는 SYSTEM.md와 에이전트별로 고정 규칙을 담는 Soul.',
          '**에이전트 간 메시지.** 에이전트끼리 메시지를 주고받을 수 있으며 양쪽 대화가 모두 저장됩니다.',
          '**메모리.** index.md, 노트 폴더, log.md로 이루어진 위키 형식 보관소와 메모리 관리 스킬이 있으며, 이후 커밋에서 에이전트 작업 공간마다 개별 memory.md가 추가되었습니다.',
          '**MCP와 스킬.** 전역 및 에이전트별 MCP JSON, SKILL.md 파일로 이루어진 공유 스킬 폴더, 첫 실행 시 함께 제공되는 Playwright와 AgentMail 서버.',
          '**스케줄러.** 반복, 간격, 매일, 매주, 한 번, cron 루틴과 일시 중지, 재개, 즉시 실행.',
          '**스스로 수정하는 에이전트.** 에이전트가 자신의 설정 스냅샷을 읽고 PATCH로 변경할 수 있습니다.',
          '**로컬 사용량 표.** 에이전트별 토큰 수를 PC에 보관합니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '로컬에서 실행되는 것과 Cursor로 전송되는 것',
        content: [
          '**Cursor SDK 문서는 로컬 모드와 클라우드 모드 모두에서 모든 추론이 Cursor의 호스팅 모델을 거친다고 밝히고 있으므로, TecAdRiseBot 사이트의 "로컬에서 실행"이라는 표현은 모델이 아니라 앱과 파일을 가리킵니다.** 따라서 프롬프트, 컨텍스트, 도구 결과는 매 턴마다 키를 소유한 Cursor 계정의 약관에 따라 Cursor로 전송됩니다. 이 리뷰에서는 Cursor의 보관 규칙을 확인하지 않았습니다.',
          'README에 따르면 PC에 남는 것은 에이전트 설정, 메모리 보관소, 에이전트별 작업 공간, 채팅 데이터베이스, 토큰 표입니다. API 키는 Electron safeStorage에 보관됩니다. 제어 API는 인증 없이 127.0.0.1의 8787번 포트에서 대기하며, README는 이 포트를 PC 밖으로 노출하지 말라고 경고합니다.',
          '사이트가 링크하는 유일한 방침은 tecadrise.ai/terms의 회사 전체 "Terms of Service & Privacy Policy"이며, 자체 머리글에 따르면 마지막 업데이트는 "January 2025"입니다. 이 문서는 회사의 웹사이트와 자동화 서비스를 위해 작성되었고 TecAdRiseBot을 전혀 언급하지 않으므로 앱의 데이터 흐름을 설명하지 않습니다. 제품 페이지에는 거부 옵션이 있는 쿠키 배너가 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '코드가 공개되어 있으므로 누구나 앱이 무엇을 보내는지 살펴볼 수 있지만, PromptQuorum은 코드나 네트워크 트래픽을 점검하지 않았습니다. Cursor의 약관이 해당 자료에 받아들일 만한 수준이 아니라면 에이전트가 기밀 파일을 다루지 않게 하십시오.',
          },
        ],
      },
      competitors: {
        id: 'tecadrisebot-competitors',
        title: '경쟁 제품과 대안',
        content: '**TecAdRiseBot은 디렉터리의 자율 에이전트 도구 가운데 하나이며, 가장 가까운 비교 대상은 메모리를 유지하고 사용자 컴퓨터에서 도구를 실행하는 다른 에이전트 앱입니다.**',
        itemHeadings: true,
        columns: ['도구', '대표 특징'],
        rows: [
          { '도구': '[Hermes Agent](/ko/power-local-llm/hermes-agent-review)', '대표 특징': '지속적인 메모리를 갖추고 Ollama 같은 로컬 모델 백엔드를 연결할 수 있는 MIT 라이선스 명령줄 개인 에이전트' },
          { '도구': '[Agent Zero](/ko/power-local-llm/agent-zero-review)', '대표 특징': '코딩 능력을 갖추고 Mac, Windows, Linux에서 웹 인터페이스로 실행하는 MIT 라이선스 자율 에이전트' },
          { '도구': '[Atomic Bot](/ko/power-local-llm/atomic-bot-review)', '대표 특징': 'OpenClaw 에이전트 스택을 패키징한 설치형 데스크톱·모바일 앱으로, 로컬 모드와 유료 클라우드 모드를 제공' },
          { '도구': '[Multica](/ko/power-local-llm/multica-review)', '대표 특징': 'Claude Code, Cursor 같은 코딩 에이전트의 작업을 배정하고 검토하는 자체 호스팅 작업 공간' },
        ],
        note: '이 목록은 디렉터리의 같은 분야에 속한 도구를 보여 줄 뿐 PromptQuorum의 순위가 아닙니다. 앞의 두 도구와의 가장 큰 차이는 모델 출처입니다. 이들은 로컬 백엔드를 쓸 수 있지만 TecAdRiseBot은 Cursor의 호스팅 카탈로그만 사용합니다. 전체 목록은 [로컬 LLM 소프트웨어 디렉터리](/ko/directory)에서 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '추천 대상',
        items: [
          '**이미 Cursor를 유료로 쓰는 개발자**로서 Windows PC에서 메모리를 갖춘 예약 실행 에이전트 여러 개를 운영하고 싶은 분.',
          '**공개된 코드를 좋아하는 실험가.** 프롬프트, MCP, 메모리가 일반 파일이고 라이선스는 MIT입니다.',
          '**에이전트 하네스를 비교하는 독자**로서 아주 젊은 프로젝트와 소스 빌드 설치를 받아들일 수 있는 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        items: [
          '**실사용 품질.** PromptQuorum은 앱을 실행해 보지 않았으므로 안정성, 에이전트의 동작, 스케줄러는 테스트하지 않았습니다.',
          '**Cursor에서의 데이터 처리.** SDK 트래픽의 보관 및 학습 조건은 확인하지 않았으며, 앱 자체의 방침 페이지도 이를 다루지 않습니다.',
          '**오프라인 또는 로컬 모델 사용.** 출처에는 로컬 또는 자체 호스팅 모델을 쓰는 방법이 나와 있지 않습니다. 이것이 필요한 분은 위의 대안을 살펴보십시오.',
          '**개발사 배경.** 창업자의 이름이 나와 있지 않고 개발사에 연락하지도 않았으므로, Mac 지원이 나중에 나올 수 있다는 사이트의 언급 외에는 지원과 로드맵에 대한 약속을 알 수 없습니다.',
          '**이용 실적.** 태그가 붙은 릴리스가 없고 공개된 사용자 의견도 아직 없습니다.',
          '**초보자에게는 맞지 않습니다.** 터미널, Node.js, 사용량에 따라 요금이 나오는 API 키가 필요합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'TecAdRiseBot에서 Ollama나 다른 로컬 모델을 쓸 수 있습니까?',
            a: '출처에는 그런 옵션이 나와 있지 않으며, 모델은 항상 Cursor 카탈로그에서 선택합니다.',
          },
          {
            q: '노트북을 닫아도 계속 작동합니까?',
            a: '아니요. 개발사에 따르면 루틴은 데스크톱 앱이 실행 중일 때만 작동하며, 프로젝트에는 항상 켜져 있는 호스팅 머신이 없습니다.',
          },
          {
            q: 'Cursor나 xAI와 관련이 있습니까?',
            a: '개발사는 독립 제품이며 Grok, xAI, Cursor의 공식 제품이 아니라고 밝힙니다. 다만 Cursor 계정과 공개된 Cursor SDK에 의존합니다.',
          },
          {
            q: '제어 API를 켜 둬도 안전합니까?',
            a: '127.0.0.1에만 바인딩되고 인증이 없으므로 같은 PC의 어떤 프로그램도 호출할 수 있습니다. README는 이 포트를 절대 노출하지 말라고 합니다.',
          },
          {
            q: 'Mac이나 Linux 버전이 나옵니까?',
            a: '사이트는 Mac 지원이 나중에 나올 수 있다고만 하며 날짜는 제시하지 않고, Linux는 언급하지 않습니다. 둘 다 발표되지 않은 것으로 보십시오.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'TecAdRiseBot은 메모리를 유지하는 예약 실행 AI 에이전트 여러 개를 돌리는 MIT 라이선스 Windows 하네스로, 읽을 수 있는 소스와 문서화된 로컬 제어 API를 갖추고 있습니다. 반면 생긴 지 6주밖에 되지 않았고, 설치 프로그램이나 릴리스가 없으며, 전적으로 Cursor의 호스팅 모델에 의존하고, 앱 전용 개인정보 처리방침이 없습니다. 이미 Cursor를 쓰면서 직접 들여다볼 수 있는 멀티 에이전트 데스크톱을 원하는 개발자에게 적합합니다. 자신의 하드웨어에서 모델을 돌려야 하는 분은 [Hermes Agent](/ko/power-local-llm/hermes-agent-review)나 [Agent Zero](/ko/power-local-llm/agent-zero-review)부터 살펴보십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[TecAdRiseBot 제품 페이지](https://tecadrise.ai/products/tecadrisebot) — 기능, 요구 사항, 플랫폼, 독립성 관련 설명. 2026년 10월 28일 확인.',
          '[TecAdRiseBot vs Grok Bot](https://tecadrise.ai/vs/tecadrisebot-vs-grok-bot) — "Mac later"와 앱이 켜져 있을 때만 루틴이 실행된다는 내용을 포함한 개발사 자체 비교. Grok Bot에 관한 주장은 PromptQuorum이 검증하지 않았습니다.',
          '[GitHub의 TecAdRiseBot](https://github.com/tecadrise-ai/TecAdRiseBot) — README, package.json(버전 0.1.0), MIT 라이선스, 생성일, 커밋 이력. 2026년 10월 28일 GitHub API로 확인.',
          '[Cursor TypeScript SDK 문서](https://cursor.com/docs/sdk/typescript) — 런타임, 호스팅 모델 추론, 요금, API 키.',
          '[TecAdRise 약관 및 개인정보 페이지](https://tecadrise.ai/terms) — 회사 전체 방침으로, 머리글 날짜는 "January 2025".',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Hermes Agent 리뷰](/ko/power-local-llm/hermes-agent-review) — 로컬 모델을 쓸 수 있는, 지속적인 메모리를 갖춘 개인 에이전트.',
          '[Agent Zero 리뷰](/ko/power-local-llm/agent-zero-review) — 코딩 능력을 갖춘 최소형 자율 에이전트.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 이 분야의 모든 앱을 한눈에 비교.',
        ],
      },
    },
  },
}
