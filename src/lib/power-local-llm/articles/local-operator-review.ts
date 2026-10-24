// Local Operator Review: free, MIT-licensed desktop AI agent app (Mac, Windows, Linux)
// Slug: local-operator-review
// Companion to: open-interpreter-review, agent-zero-review, nanobot-review
// Sources: local-operator.com (home, /download, /privacy-policy), github.com/damianvtran/local-operator-ui (releases: v0.42.2,
// 2026-10-24) and github.com/damianvtran/local-operator (README, MIT licence, releases: v0.88.3, 2026-10-24), all checked 2026-10-24 —
// no hands-on testing. The website's /download page is stale (v0.12.8 of 2026-02-11, macOS files 0.19.7); GitHub Releases is the
// primary source for the version.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/local-operator-review-hero-en.webp',
    title: 'Local Operator Review: Free Desktop AI Agent for Your Computer',
    seoTitle: 'Local Operator Review: Free Desktop AI Agent App',
    intro:
      'Local Operator is a free, MIT-licensed desktop app from [Radient Inc.](https://radienthq.com) in which AI agents plan a task, have the plan checked by a separate agent and then write and run code on your own Mac, Windows or Linux computer. The model behind it can be a local Ollama model, your own API keys or the maker\'s hosted Radient Pass. This review is based on the maker\'s website, its two GitHub repositories and its privacy policy, checked on 24 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'Local Operator review: free MIT-licensed desktop AI agent for Mac, Windows and Linux. Local Ollama or hosted models, privacy and install; untested.',
    twitterDescription:
      'Local Operator review: a free, open-source desktop agent that runs code on your computer with a local or hosted model. What the sources confirm and what they do not.',
    audience:
      'Mac, Windows and Linux users who want an approval-gated AI agent working on their own files, and need to know what stays on the computer, what the model provider sees and what the sources leave unconfirmed.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Local Operator review',
    targetKeywords: [
      'local operator review',
      'local operator ai agent',
      'local operator ollama',
      'open source desktop ai agent',
      'ai agent that runs code on your computer',
      'local operator radient',
      'local operator download',
    ],
    current_models_mentioned: ['Ollama', 'LM Studio', 'vLLM', 'llama.cpp'],
    current_hardware_mentioned: ['Apple silicon', 'x86_64'],
    leadAnswerBlock:
      '**Local Operator (desktop app version 0.42.2, released on 24 October 2026) is a free, MIT-licensed desktop app whose AI agents write and run code on your own computer.** The agent and your files stay local, but the model can be hosted, in which case it receives your conversation. Every statement here comes from the maker\'s site, its GitHub repositories and its privacy policy.',
    quickAnswerTop: {
      en: {
        question: 'Does Local Operator keep my data on my computer?',
        answer:
          'Your files, yes; your conversation depends on the model. Per the maker, the files stay on the computer, while the text of the conversation goes to whichever model you pick, so only a local Ollama model keeps everything at home. The agent also searches the web by default, which you can switch off.',
        bullets: [
          'You ask in plain language and the agent shows its plan first.',
          'A separate security-checking agent reviews each action before you approve it.',
          'Scheduled agents can repeat a job in the background.',
          'Teams of agents and subagents can split larger jobs.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Local Operator?', anchor: 'what-is-local-operator' },
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
          { type: 'one-sentence', text: 'Local Operator is a free, open-source desktop app in which AI agents write and run code on your computer, using a local Ollama model, your own API keys or the maker\'s hosted Radient Pass.' },
          { type: 'plain-terms', text: 'You describe a job such as sorting a folder of invoices, the app shows a plan, a second agent checks it, you approve, and the code runs on your machine.' },
        ],
        items: [
            'Maintenance: the desktop app (0.42.2) and the agent runtime (0.88.3) both shipped releases on 24 October 2026, so no stale-project warning applies.',
            'Models: local servers such as Ollama, LM Studio, vLLM and llama.cpp, or hosted providers through your own keys or Radient Pass.',
            'Safety: reads run automatically, while file writes and shell commands ask first and show the exact command.',
            'Cost: the app is free and open source; per the maker, the only thing you might pay for is AI model usage.',
            'Maker: Radient Inc., with both repositories published under the MIT license.',
          ],
        callouts: [
          { type: 'note', text: 'This review is based on the maker\'s website, its GitHub repositories and its privacy policy, checked on 24 October 2026. PromptQuorum has not installed or run the app, so task quality and speed are not assessed.' },
        ],
      },
      overview: {
        id: 'what-is-local-operator',
        title: 'What Is Local Operator?',
        content: [
            '**Local Operator is an open-source agent app from Radient Inc. that turns a plain-language request into a plan and then runs real code on your computer to carry it out.** It has two parts: the desktop app in the repository [local-operator-ui](https://github.com/damianvtran/local-operator-ui) and the Python agent runtime in [local-operator](https://github.com/damianvtran/local-operator), which also runs as a terminal app called `lop`.',
            'The site presents it as a team of agents: you can save agents, group them into teams with a manager, schedule recurring work and borrow shared agents from the Agent Hub, which is powered by Radient. The core repository was created on 25 January 2025.',
          ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
            '**Local Operator is a free download for macOS, Windows and Linux (x86_64); the installers are hosted on GitHub Releases.**',
          ],
        columns: [ 'Option', 'How to get it' ],
        rows: [
            { 'Option': 'macOS', 'How to get it': '[Desktop app on GitHub Releases](https://github.com/damianvtran/local-operator-ui/releases/latest): .dmg for Apple silicon and for Intel' },
            { 'Option': 'Windows', 'How to get it': 'Same release page: .exe installer for x64, for Arm64 or a combined one' },
            { 'Option': 'Linux (x86_64)', 'How to get it': 'Same release page: .AppImage, .deb and .rpm; there is no Arm64 Linux build' },
            { 'Option': 'Terminal', 'How to get it': '`npx local-operator-ui` (needs Node.js 22.13.1 or newer)' },
            { 'Option': 'Website', 'How to get it': '[local-operator.com](https://local-operator.com)' },
            { 'Option': 'Privacy policy', 'How to get it': '[local-operator.com/privacy-policy](https://local-operator.com/privacy-policy)' },
            { 'Option': 'Source code', 'How to get it': 'MIT license: [local-operator](https://github.com/damianvtran/local-operator) (agent runtime) and [local-operator-ui](https://github.com/damianvtran/local-operator-ui) (desktop app)' },
          ],
        note: 'Version reviewed: desktop app 0.42.2, released on 24 October 2026 per its GitHub release, on top of agent runtime 0.88.3. The website\'s download page still shows version 0.12.8 from 11 February 2026 and macOS files named 0.19.7, so it is out of date; GitHub Releases is newer and is used here. Both repositories published several releases on 24 October 2026.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
            '**The download page lists macOS 11 or newer, Windows 10 or newer and a recent x86_64 Linux, plus a model to talk to.** It states no RAM or VRAM minimum.',
          ],
        columns: [ 'Item', 'What the sources say' ],
        rows: [
            { 'Item': 'macOS', 'What the sources say': 'macOS 11 (Big Sur) or newer, Intel or Apple silicon' },
            { 'Item': 'Windows', 'What the sources say': 'Windows 10 or newer, x64 or Arm64' },
            { 'Item': 'Linux', 'What the sources say': 'Recent x86_64 distribution, for example Ubuntu 18.04+, Debian 10+ or Fedora 32+; the .deb and .rpm install Python 3.12 packages' },
            { 'Item': 'Disk', 'What the sources say': 'A few hundred megabytes for the installer plus room for the backend, which the app sets up on first run' },
            { 'Item': 'Model', 'What the sources say': 'A local Ollama model (free, works offline), your own API keys or a Radient Pass balance' },
          ],
        note: 'The page predates the current releases, so check the system requirements again when you download. How much memory a local model needs depends on the model you choose, not on the app.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
            '**The steps follow the maker\'s download page and first-run description; PromptQuorum has not run them.**',
          ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Run the installer for your system. On macOS the first launch is blocked until you choose Open Anyway under System Settings, Privacy & Security; Windows may show a SmartScreen warning with More info, Run anyway.',
          },
          {
            title: 'Let it set up',
            whyItMatters: 'On first run the app installs its own backend, which takes a minute or two, and opens straight into a chat.',
          },
          {
            title: 'Connect a model',
            whyItMatters: 'Choose Ollama, your own API keys or Radient Pass; you can switch per agent or per conversation.',
          },
          {
            title: 'Ask for something small',
            whyItMatters: 'The agent shows its plan, a separate agent checks it, and you approve before anything runs.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
            '**Every item below comes from the maker\'s website or the project README; none has been independently tested.**',
          ],
        items: [
            '**Plan, check, approve.** The agent shows a plan, a separate security-checking agent reviews each proposed action, and you sign off. Per the README, reads run automatically while writes and shell commands show the exact command and ask first.',
            '**Writes its own tools.** When a task needs a capability that does not exist, the agent writes code to provide it, and it shows each command and its output as a receipt.',
            '**Teams and subagents.** Agents can be grouped into teams with a manager, and work can be split across subagents that run in parallel, each showing its elapsed time, context use and cost.',
            '**Schedules and memory.** Recurring tasks run in the background on a schedule, and an agent keeps what you teach it for later requests.',
            '**Desktop extras.** A Chromium browser pane with an approval prompt before the agent acts on a page, and a file canvas that opens markdown, code, PDFs, spreadsheets, images, audio and video.',
            '**Connections.** MCP servers are supported, and devices you own can be paired into a mesh so sessions are reachable from each of them.',
          ],
        note: 'The README also describes phone access and a browser extension; both need extra setup that this review did not examine.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
            '**The maker says your files never have to leave your computer, while the text of your conversation goes to whichever model you pick.** With a local Ollama model nothing leaves; with Radient Pass or your own API keys the conversation goes to that provider under its terms. No account is required, and one is needed only for the optional cloud platform.',
            'Web search is on by default according to the README, and can be switched off with `lop search off`; fetching web pages has its own switch. By default a command the agent runs can see your environment variables. The privacy policy, effective 4 April 2025, says Radient may collect device, usage and log data and, for cloud accounts, name and email.',
          ],
        callouts: [
          { type: 'note', text: 'These are the maker\'s declarations, not audit results. PromptQuorum has not inspected the app\'s network traffic or confirmed which data each setting stops.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
            '**Desktop users with file chores** such as sorting, renaming or summarising documents, who want an agent that asks before it writes.',
            '**Ollama users** who want a graphical agent app that can run on a local model.',
            '**Tinkerers** who value an MIT-licensed project with open repositories and frequent releases.',
          ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
            '**Task quality and speed.** PromptQuorum did not run the app, so the maker\'s examples, such as the invoice job, are not reproduced.',
            '**Local-model results.** The sources give no minimum model or hardware for useful agent work, and local models were not tried.',
            '**The security check.** How reliably the separate checking agent catches a harmful command is the maker\'s description, not a tested property.',
            '**Code signing.** The download page warns of macOS and Windows prompts; whether the installers are signed was not checked.',
            '**Version drift.** The website still shows version 0.12.8 and the repositories release several times a day, so features can change between your download and this review.',
          ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
            { 'App': '[Open Interpreter](/power-local-llm/open-interpreter-review)', 'Platforms': 'Windows, macOS, Linux', 'Price / license': 'Free / Apache 2.0', 'Key difference': 'Lets a local model control your computer and run code; check its own review for install path and license terms' },
            { 'App': '[Agent Zero](/power-local-llm/agent-zero-review)', 'Platforms': 'Windows, macOS, Linux', 'Price / license': 'Free / MIT', 'Key difference': 'Self-hosted agent that runs in Docker with a web interface rather than a native installer' },
            { 'App': '[Nanobot](/power-local-llm/nanobot-review)', 'Platforms': 'Windows, macOS, Linux', 'Price / license': 'Free / MIT', 'Key difference': 'Self-hosted personal agent with persistent memory, MCP tools and chat-app integrations, used from a web or command-line interface' },
          ],
        note: 'These are the PromptQuorum reviews in the same segment; confirm each app\'s current price, license and platforms on its own site.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can Local Operator run fully offline?',
            a: 'Per the maker, yes with a local Ollama model, which it calls the most private option and says works offline. Web search is on by default, so switch it off if nothing should leave the machine.',
          },
          {
            q: 'Why does the download page show an older version?',
            a: 'The page still lists version 0.12.8 from 11 February 2026 and macOS files named 0.19.7, while GitHub Releases shows desktop app 0.42.2 from 24 October 2026. Take installers from the GitHub release page.',
          },
          {
            q: 'Will the agent change files without asking?',
            a: 'By default it asks first. The README says reads run automatically, writes and shell commands show the exact command, and turning approvals off is an explicit choice.',
          },
          {
            q: 'What does Radient Pass cost?',
            a: 'The sources give no price here: Radient Pass is described as an optional prepaid balance across hosted providers, billed by compute used. Check the maker\'s page before relying on it.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Local Operator is an actively released, MIT-licensed way to run a code-writing agent on your own computer, with an approval step before anything is written or executed and the option to use a local Ollama model. Against that, it is untested here, a hosted model sees your conversation, the website lags the releases, and the project ships so often that this review will age quickly. It suits Mac, Windows and Linux users who want a graphical agent for their own files and will check the version, the model setting and the web-search setting before trusting it with anything sensitive.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
            '[Local Operator website](https://local-operator.com) — home page, download page, privacy and pricing sections, checked 24 October 2026.',
            '[local-operator-ui releases](https://github.com/damianvtran/local-operator-ui/releases) — desktop app version 0.42.2 and its installer files, published 24 October 2026.',
            '[local-operator repository](https://github.com/damianvtran/local-operator) — README, MIT license and agent runtime releases, checked 24 October 2026.',
            '[Privacy policy](https://local-operator.com/privacy-policy) — data collection and sharing, effective 4 April 2025.',
          ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
            '[Open Interpreter Review](/power-local-llm/open-interpreter-review) — an agent that lets a model control your computer and run code.',
            '[Agent Zero Review](/power-local-llm/agent-zero-review) — a self-hosted agent that runs in Docker.',
            '[Nanobot Review](/power-local-llm/nanobot-review) — a self-hosted personal agent with persistent memory.',
            '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
          ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Local Operator Review: Free Desktop AI Agent for Your Computer',
      description:
        'Local Operator review: a free, MIT-licensed desktop AI agent for Mac, Windows and Linux. Version, install, model options, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/local-operator-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desktop users evaluating a free open-source AI agent app' },
      about: [
        { '@type': 'Thing', name: 'Local Operator' },
        { '@type': 'Thing', name: 'AI agents' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'Desktop software' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/local-operator-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Local Operator Review', item: 'https://www.promptquorum.com/power-local-llm/local-operator-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/local-operator-review-hero-de.webp',
    title: 'Local-Operator-Rezension: Kostenloser KI-Agent für den Desktop',
    seoTitle: 'Local-Operator-Rezension: Kostenlose KI-Agenten-App',
    intro:
      'Local Operator ist eine kostenlose Desktop-App unter MIT-Lizenz von [Radient Inc.](https://radienthq.com), in der KI-Agenten eine Aufgabe planen, den Plan von einem separaten Agenten prüfen lassen und dann Code auf Ihrem eigenen Mac-, Windows- oder Linux-Rechner schreiben und ausführen. Als Modell dient ein lokales Ollama-Modell, Ihr eigener API-Schlüssel oder das gehostete Radient Pass des Herstellers. Diese Rezension stützt sich auf die Website des Herstellers, seine beiden GitHub-Repositories und die Datenschutzerklärung, geprüft am 24. Oktober 2026; PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'Local-Operator-Rezension: kostenloser KI-Agent (MIT) für Mac, Windows und Linux. Lokales Ollama oder gehostete Modelle, Datenschutz, Version; ungetestet.',
    twitterDescription:
      'Local-Operator-Rezension: ein kostenloser Open-Source-Desktop-Agent, der Code auf Ihrem Rechner ausführt, mit lokalem oder gehostetem Modell. Was die Quellen bestätigen und was nicht.',
    audience:
      'Mac-, Windows- und Linux-Nutzer, die einen KI-Agenten mit Freigabeschritt für ihre eigenen Dateien suchen und wissen müssen, was auf dem Rechner bleibt, was der Modellanbieter sieht und was die Quellen offenlassen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Local Operator Rezension',
    targetKeywords: [
      'local operator rezension',
      'local operator ki agent',
      'local operator ollama',
      'open source desktop ki agent',
      'ki agent der code auf dem rechner ausführt',
      'local operator radient',
      'local operator download',
    ],
    current_models_mentioned: ['Ollama', 'LM Studio', 'vLLM', 'llama.cpp'],
    current_hardware_mentioned: ['Apple silicon', 'x86_64'],
    leadAnswerBlock:
      '**Local Operator (Desktop-App in Version 0.42.2, veröffentlicht am 24. Oktober 2026) ist eine kostenlose Desktop-App unter MIT-Lizenz, deren KI-Agenten Code auf Ihrem eigenen Rechner schreiben und ausführen.** Agent und Dateien bleiben lokal, das Modell kann aber gehostet sein und erhält dann Ihre Unterhaltung. Alle Aussagen stammen von der Website des Herstellers, seinen GitHub-Repositories und der Datenschutzerklärung.',
    quickAnswerTop: {
      de: {
        question: 'Bleiben meine Daten bei Local Operator auf meinem Rechner?',
        answer:
          'Ihre Dateien ja, Ihre Unterhaltung hängt vom Modell ab. Laut Hersteller bleiben die Dateien auf dem Rechner, während der Text der Unterhaltung an das gewählte Modell geht; nur ein lokales Ollama-Modell hält also alles zu Hause. Der Agent sucht standardmäßig auch im Web, was sich abschalten lässt.',
        bullets: [
          'Sie fragen in normaler Sprache, und der Agent zeigt zuerst seinen Plan.',
          'Ein separater Sicherheitsagent prüft jede Aktion, bevor Sie sie freigeben.',
          'Geplante Agenten können einen Auftrag im Hintergrund wiederholen.',
          'Agententeams und Subagenten können größere Aufgaben aufteilen.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Local Operator?', anchor: 'what-is-local-operator' },
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
          { type: 'one-sentence', text: 'Local Operator ist eine kostenlose Open-Source-Desktop-App, in der KI-Agenten Code auf Ihrem Rechner schreiben und ausführen, mit einem lokalen Ollama-Modell, eigenen API-Schlüsseln oder dem gehosteten Radient Pass des Herstellers.' },
          { type: 'plain-terms', text: 'Sie beschreiben eine Aufgabe, etwa einen Ordner voller Rechnungen zu sortieren, die App zeigt einen Plan, ein zweiter Agent prüft ihn, Sie geben frei, und der Code läuft auf Ihrem Rechner.' },
        ],
        items: [
            'Pflege: Desktop-App (0.42.2) und Agenten-Laufzeit (0.88.3) haben beide am 24. Oktober 2026 Releases veröffentlicht, daher gilt keine Warnung vor einem verwaisten Projekt.',
            'Modelle: lokale Server wie Ollama, LM Studio, vLLM und llama.cpp oder gehostete Anbieter über eigene Schlüssel oder Radient Pass.',
            'Sicherheit: Lesezugriffe laufen automatisch, Schreibzugriffe und Shell-Befehle fragen vorher nach und zeigen den genauen Befehl.',
            'Kosten: Die App ist kostenlos und Open Source; laut Hersteller kann höchstens die Nutzung von KI-Modellen etwas kosten.',
            'Hersteller: Radient Inc., beide Repositories stehen unter der MIT-Lizenz.',
          ],
        callouts: [
          { type: 'note', text: 'Diese Rezension stützt sich auf die Website des Herstellers, seine GitHub-Repositories und die Datenschutzerklärung, geprüft am 24. Oktober 2026. PromptQuorum hat die App weder installiert noch ausgeführt; Aufgabenqualität und Geschwindigkeit sind daher nicht bewertet.' },
        ],
      },
      overview: {
        id: 'what-is-local-operator',
        title: 'Was ist Local Operator?',
        content: [
            '**Local Operator ist eine Open-Source-Agenten-App von Radient Inc., die eine Anfrage in normaler Sprache in einen Plan verwandelt und dann echten Code auf Ihrem Rechner ausführt.** Sie besteht aus zwei Teilen: der Desktop-App im Repository [local-operator-ui](https://github.com/damianvtran/local-operator-ui) und der Python-Agenten-Laufzeit in [local-operator](https://github.com/damianvtran/local-operator), die auch als Terminal-App namens `lop` läuft.',
            'Die Website stellt es als Team von Agenten dar: Sie können Agenten speichern, sie mit einem Manager zu Teams bündeln, wiederkehrende Aufgaben planen und geteilte Agenten aus dem Agent Hub übernehmen, der von Radient betrieben wird. Das Kern-Repository wurde am 25. Januar 2025 angelegt.',
          ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
            '**Local Operator ist ein kostenloser Download für macOS, Windows und Linux (x86_64); die Installer liegen auf GitHub Releases.**',
          ],
        columns: [ 'Option', 'Bezug' ],
        rows: [
            { 'Option': 'macOS', 'Bezug': '[Desktop-App auf GitHub Releases](https://github.com/damianvtran/local-operator-ui/releases/latest): .dmg für Apple Silicon und für Intel' },
            { 'Option': 'Windows', 'Bezug': 'Gleiche Release-Seite: .exe-Installer für x64, für Arm64 oder ein kombinierter' },
            { 'Option': 'Linux (x86_64)', 'Bezug': 'Gleiche Release-Seite: .AppImage, .deb und .rpm; es gibt keinen Arm64-Build für Linux' },
            { 'Option': 'Terminal', 'Bezug': '`npx local-operator-ui` (benötigt Node.js 22.13.1 oder neuer)' },
            { 'Option': 'Website', 'Bezug': '[local-operator.com](https://local-operator.com)' },
            { 'Option': 'Datenschutzerklärung', 'Bezug': '[local-operator.com/privacy-policy](https://local-operator.com/privacy-policy)' },
            { 'Option': 'Quellcode', 'Bezug': 'MIT-Lizenz: [local-operator](https://github.com/damianvtran/local-operator) (Agenten-Laufzeit) und [local-operator-ui](https://github.com/damianvtran/local-operator-ui) (Desktop-App)' },
          ],
        note: 'Geprüfte Version: Desktop-App 0.42.2, laut GitHub-Release am 24. Oktober 2026 veröffentlicht, auf Agenten-Laufzeit 0.88.3. Die Download-Seite der Website zeigt noch Version 0.12.8 vom 11. Februar 2026 und macOS-Dateien mit 0.19.7, ist also veraltet; GitHub Releases ist neuer und wird hier verwendet. Beide Repositories veröffentlichten am 24. Oktober 2026 mehrere Releases.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
            '**Die Download-Seite nennt macOS 11 oder neuer, Windows 10 oder neuer und ein aktuelles x86_64-Linux, dazu ein Modell als Gegenüber.** Ein Minimum an RAM oder VRAM wird nicht genannt.',
          ],
        columns: [ 'Punkt', 'Angaben der Quellen' ],
        rows: [
            { 'Punkt': 'macOS', 'Angaben der Quellen': 'macOS 11 (Big Sur) oder neuer, Intel oder Apple Silicon' },
            { 'Punkt': 'Windows', 'Angaben der Quellen': 'Windows 10 oder neuer, x64 oder Arm64' },
            { 'Punkt': 'Linux', 'Angaben der Quellen': 'Aktuelle x86_64-Distribution, etwa Ubuntu 18.04+, Debian 10+ oder Fedora 32+; .deb und .rpm installieren Python-3.12-Pakete' },
            { 'Punkt': 'Speicherplatz', 'Angaben der Quellen': 'Einige hundert Megabyte für den Installer plus Platz für das Backend, das die App beim ersten Start einrichtet' },
            { 'Punkt': 'Modell', 'Angaben der Quellen': 'Ein lokales Ollama-Modell (kostenlos, offline nutzbar), eigene API-Schlüssel oder ein Radient-Pass-Guthaben' },
          ],
        note: 'Die Seite stammt aus der Zeit vor den aktuellen Releases; prüfen Sie die Systemanforderungen beim Download erneut. Wie viel Speicher ein lokales Modell braucht, hängt vom gewählten Modell ab, nicht von der App.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
            '**Die Schritte folgen der Download-Seite und der Erststart-Beschreibung des Herstellers; PromptQuorum hat sie nicht ausgeführt.**',
          ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Starten Sie den Installer für Ihr System. Unter macOS wird der erste Start blockiert, bis Sie in den Systemeinstellungen unter Datenschutz & Sicherheit „Trotzdem öffnen“ wählen; Windows zeigt eventuell eine SmartScreen-Warnung mit „Weitere Informationen“ und „Trotzdem ausführen“.',
          },
          {
            title: 'Einrichtung abwarten',
            whyItMatters: 'Beim ersten Start installiert die App ihr eigenes Backend, was ein bis zwei Minuten dauert, und öffnet direkt einen Chat.',
          },
          {
            title: 'Modell verbinden',
            whyItMatters: 'Wählen Sie Ollama, eigene API-Schlüssel oder Radient Pass; pro Agent oder Unterhaltung lässt sich wechseln.',
          },
          {
            title: 'Etwas Kleines anfragen',
            whyItMatters: 'Der Agent zeigt seinen Plan, ein separater Agent prüft ihn, und Sie geben frei, bevor etwas läuft.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
            '**Jeder Punkt unten stammt von der Website des Herstellers oder aus dem Projekt-README; keiner wurde unabhängig getestet.**',
          ],
        items: [
            '**Planen, prüfen, freigeben.** Der Agent zeigt einen Plan, ein separater Sicherheitsagent prüft jede vorgeschlagene Aktion, und Sie geben frei. Laut README laufen Lesezugriffe automatisch, während Schreibzugriffe und Shell-Befehle den genauen Befehl zeigen und vorher nachfragen.',
            '**Schreibt eigene Werkzeuge.** Braucht eine Aufgabe eine nicht vorhandene Fähigkeit, schreibt der Agent dafür Code und zeigt jeden Befehl samt Ausgabe als Beleg.',
            '**Teams und Subagenten.** Agenten lassen sich mit einem Manager zu Teams bündeln, und Arbeit kann auf parallel laufende Subagenten verteilt werden, die jeweils Laufzeit, Kontextnutzung und Kosten anzeigen.',
            '**Zeitpläne und Gedächtnis.** Wiederkehrende Aufgaben laufen nach Zeitplan im Hintergrund, und ein Agent behält, was Sie ihm beibringen, für spätere Anfragen.',
            '**Desktop-Extras.** Ein Chromium-Browserbereich mit Rückfrage, bevor der Agent auf einer Seite handelt, und eine Dateiansicht für Markdown, Code, PDFs, Tabellen, Bilder, Audio und Video.',
            '**Anbindungen.** MCP-Server werden unterstützt, und eigene Geräte lassen sich zu einem Mesh koppeln, sodass Sitzungen von jedem erreichbar sind.',
          ],
        note: 'Das README beschreibt außerdem Handyzugriff und eine Browser-Erweiterung; beides erfordert zusätzliche Einrichtung, die diese Rezension nicht untersucht hat.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
            '**Der Hersteller sagt, Ihre Dateien müssten Ihren Rechner nie verlassen, während der Text Ihrer Unterhaltung an das gewählte Modell geht.** Mit einem lokalen Ollama-Modell verlässt nichts den Rechner; bei Radient Pass oder eigenen API-Schlüsseln geht die Unterhaltung an den jeweiligen Anbieter und unterliegt dessen Bedingungen. Ein Konto ist nicht nötig, nur für die optionale Cloud-Plattform.',
            'Die Websuche ist laut README standardmäßig aktiv und lässt sich mit `lop search off` abschalten; das Abrufen von Webseiten hat einen eigenen Schalter. Standardmäßig sieht ein vom Agenten ausgeführter Befehl Ihre Umgebungsvariablen. Die Datenschutzerklärung (gültig ab 4. April 2025) nennt, dass Radient Geräte-, Nutzungs- und Protokolldaten und bei Cloud-Konten Name und E-Mail erheben kann.',
          ],
        callouts: [
          { type: 'note', text: 'Das sind Angaben des Herstellers, keine Prüfergebnisse. PromptQuorum hat den Netzwerkverkehr der App nicht untersucht und nicht bestätigt, welche Daten jede Einstellung unterbindet.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
            '**Desktop-Nutzer mit Dateiarbeit** wie Sortieren, Umbenennen oder Zusammenfassen von Dokumenten, die einen Agenten wollen, der vor dem Schreiben nachfragt.',
            '**Ollama-Nutzer**, die eine grafische Agenten-App suchen, die mit einem lokalen Modell laufen kann.',
            '**Tüftler**, denen ein MIT-lizenziertes Projekt mit offenen Repositories und häufigen Releases wichtig ist.',
          ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
            '**Aufgabenqualität und Geschwindigkeit.** PromptQuorum hat die App nicht ausgeführt; die Beispiele des Herstellers, etwa die Rechnungsaufgabe, wurden nicht nachvollzogen.',
            '**Ergebnisse mit lokalen Modellen.** Die Quellen nennen kein Mindestmodell und keine Mindesthardware für brauchbare Agentenarbeit, und lokale Modelle wurden nicht ausprobiert.',
            '**Die Sicherheitsprüfung.** Wie zuverlässig der separate Prüfagent einen schädlichen Befehl erkennt, ist die Beschreibung des Herstellers, keine getestete Eigenschaft.',
            '**Codesignatur.** Die Download-Seite warnt vor Hinweisen von macOS und Windows; ob die Installer signiert sind, wurde nicht geprüft.',
            '**Versionsdrift.** Die Website zeigt noch Version 0.12.8, und die Repositories veröffentlichen mehrmals täglich, sodass sich Funktionen zwischen Ihrem Download und dieser Rezension ändern können.',
          ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
            { 'App': '[Open Interpreter](/de/power-local-llm/open-interpreter-review)', 'Plattformen': 'Windows, macOS, Linux', 'Preis / Lizenz': 'Gratis / Apache 2.0', 'Wichtigster Unterschied': 'Lässt ein lokales Modell Ihren Rechner steuern und Code ausführen; Installationsweg und Lizenz stehen in der eigenen Rezension' },
            { 'App': '[Agent Zero](/de/power-local-llm/agent-zero-review)', 'Plattformen': 'Windows, macOS, Linux', 'Preis / Lizenz': 'Gratis / MIT', 'Wichtigster Unterschied': 'Selbst gehosteter Agent in Docker mit Weboberfläche statt nativem Installer' },
            { 'App': '[Nanobot](/de/power-local-llm/nanobot-review)', 'Plattformen': 'Windows, macOS, Linux', 'Preis / Lizenz': 'Gratis / MIT', 'Wichtigster Unterschied': 'Selbst gehosteter persönlicher Agent mit dauerhaftem Gedächtnis, MCP-Tools und Chat-App-Anbindungen, bedient über Web- oder Kommandozeile' },
          ],
        note: 'Das sind die PromptQuorum-Rezensionen im selben Segment; prüfen Sie aktuellen Preis, Lizenz und Plattformen jeweils auf der Website der App.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann Local Operator vollständig offline laufen?',
            a: 'Laut Hersteller ja, mit einem lokalen Ollama-Modell, das er als privateste Option bezeichnet und das offline funktioniert. Die Websuche ist standardmäßig aktiv; schalten Sie sie ab, wenn nichts den Rechner verlassen soll.',
          },
          {
            q: 'Warum zeigt die Download-Seite eine ältere Version?',
            a: 'Die Seite nennt noch Version 0.12.8 vom 11. Februar 2026 und macOS-Dateien mit 0.19.7, während GitHub Releases die Desktop-App 0.42.2 vom 24. Oktober 2026 zeigt. Laden Sie Installer von der GitHub-Release-Seite.',
          },
          {
            q: 'Ändert der Agent Dateien ohne Rückfrage?',
            a: 'Standardmäßig fragt er vorher. Laut README laufen Lesezugriffe automatisch, Schreibzugriffe und Shell-Befehle zeigen den genauen Befehl, und das Abschalten der Freigaben ist eine bewusste Entscheidung.',
          },
          {
            q: 'Was kostet Radient Pass?',
            a: 'Die Quellen nennen hier keinen Preis: Radient Pass wird als optionales Prepaid-Guthaben für gehostete Anbieter beschrieben, abgerechnet nach genutzter Rechenleistung. Prüfen Sie die Seite des Herstellers, bevor Sie darauf bauen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Local Operator ist ein aktiv veröffentlichter, MIT-lizenzierter Weg, einen Code schreibenden Agenten auf dem eigenen Rechner laufen zu lassen, mit einem Freigabeschritt vor jedem Schreiben oder Ausführen und der Möglichkeit, ein lokales Ollama-Modell zu nutzen. Dagegen steht: Hier ungetestet, ein gehostetes Modell sieht Ihre Unterhaltung, die Website hinkt den Releases hinterher, und das Projekt veröffentlicht so oft, dass diese Rezension schnell altert. Es passt zu Mac-, Windows- und Linux-Nutzern, die einen grafischen Agenten für eigene Dateien wollen und Version, Modelleinstellung und Websuche prüfen, bevor sie ihm Sensibles anvertrauen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
            '[Website von Local Operator](https://local-operator.com) — Startseite, Download-Seite, Abschnitte zu Datenschutz und Preisen, geprüft am 24. Oktober 2026.',
            '[Releases von local-operator-ui](https://github.com/damianvtran/local-operator-ui/releases) — Desktop-App in Version 0.42.2 und ihre Installer-Dateien, veröffentlicht am 24. Oktober 2026.',
            '[Repository local-operator](https://github.com/damianvtran/local-operator) — README, MIT-Lizenz und Releases der Agenten-Laufzeit, geprüft am 24. Oktober 2026.',
            '[Datenschutzerklärung](https://local-operator.com/privacy-policy) — Datenerhebung und -weitergabe, gültig ab 4. April 2025.',
          ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
            '[Open-Interpreter-Rezension](/de/power-local-llm/open-interpreter-review) — ein Agent, der ein Modell Ihren Rechner steuern und Code ausführen lässt.',
            '[Agent-Zero-Rezension](/de/power-local-llm/agent-zero-review) — ein selbst gehosteter Agent, der in Docker läuft.',
            '[Nanobot-Rezension](/de/power-local-llm/nanobot-review) — ein selbst gehosteter persönlicher Agent mit dauerhaftem Gedächtnis.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/local-operator-review-hero-es.webp',
    title: 'Reseña de Local Operator: agente de IA de escritorio gratuito',
    seoTitle: 'Reseña de Local Operator: app de agentes de IA gratis',
    intro:
      'Local Operator es una app de escritorio gratuita con licencia MIT de [Radient Inc.](https://radienthq.com) en la que agentes de IA planifican una tarea, hacen que otro agente revise el plan y luego escriben y ejecutan código en tu propio Mac, Windows o Linux. El modelo puede ser uno local de Ollama, tus propias claves de API o el Radient Pass alojado del fabricante. Esta reseña se basa en el sitio del fabricante, sus dos repositorios de GitHub y su política de privacidad, consultados el 24 de octubre de 2026; PromptQuorum no ha probado la app en la práctica.',
    metaDescription:
      'Reseña de Local Operator: agente de IA gratuito (MIT) para Mac, Windows y Linux. Ollama local o modelos alojados, privacidad y versión; sin probar.',
    twitterDescription:
      'Reseña de Local Operator: un agente de escritorio gratuito y de código abierto que ejecuta código en tu ordenador con un modelo local o alojado. Qué confirman las fuentes y qué no.',
    audience:
      'Usuarios de Mac, Windows y Linux que quieren un agente de IA con aprobación previa para sus propios archivos y necesitan saber qué se queda en el ordenador, qué ve el proveedor del modelo y qué dejan sin confirmar las fuentes.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Local Operator',
    targetKeywords: [
      'reseña local operator',
      'local operator agente ia',
      'local operator ollama',
      'agente de ia de escritorio de código abierto',
      'agente de ia que ejecuta código en tu ordenador',
      'local operator radient',
      'descargar local operator',
    ],
    current_models_mentioned: ['Ollama', 'LM Studio', 'vLLM', 'llama.cpp'],
    current_hardware_mentioned: ['Apple silicon', 'x86_64'],
    leadAnswerBlock:
      '**Local Operator (app de escritorio en la versión 0.42.2, publicada el 24 de octubre de 2026) es una app de escritorio gratuita con licencia MIT cuyos agentes de IA escriben y ejecutan código en tu propio ordenador.** El agente y tus archivos se quedan en local, pero el modelo puede estar alojado y entonces recibe tu conversación. Todo lo que se afirma aquí procede del sitio del fabricante, sus repositorios de GitHub y su política de privacidad.',
    quickAnswerTop: {
      es: {
        question: '¿Local Operator mantiene mis datos en mi ordenador?',
        answer:
          'Tus archivos sí; tu conversación depende del modelo. Según el fabricante, los archivos se quedan en el ordenador, mientras que el texto de la conversación va al modelo que elijas, así que solo un modelo local de Ollama lo mantiene todo en casa. El agente además busca en la web por defecto, algo que se puede desactivar.',
        bullets: [
          'Pides en lenguaje normal y el agente muestra primero su plan.',
          'Un agente de seguridad independiente revisa cada acción antes de que la apruebes.',
          'Los agentes programados pueden repetir un trabajo en segundo plano.',
          'Equipos de agentes y subagentes pueden repartirse trabajos más grandes.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Local Operator?', anchor: 'what-is-local-operator' },
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
          { type: 'one-sentence', text: 'Local Operator es una app de escritorio gratuita y de código abierto en la que agentes de IA escriben y ejecutan código en tu ordenador, con un modelo local de Ollama, tus propias claves de API o el Radient Pass alojado del fabricante.' },
          { type: 'plain-terms', text: 'Describes un trabajo, por ejemplo ordenar una carpeta de facturas, la app muestra un plan, un segundo agente lo revisa, tú lo apruebas y el código se ejecuta en tu equipo.' },
        ],
        items: [
            'Mantenimiento: la app de escritorio (0.42.2) y el motor de agentes (0.88.3) publicaron versiones el 24 de octubre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado.',
            'Modelos: servidores locales como Ollama, LM Studio, vLLM y llama.cpp, o proveedores alojados con tus claves o Radient Pass.',
            'Seguridad: las lecturas se ejecutan solas, mientras que las escrituras de archivos y los comandos de shell preguntan antes y muestran el comando exacto.',
            'Coste: la app es gratuita y de código abierto; según el fabricante, lo único por lo que podrías pagar es el uso de modelos de IA.',
            'Fabricante: Radient Inc., con ambos repositorios publicados bajo licencia MIT.',
          ],
        callouts: [
          { type: 'note', text: 'Esta reseña se basa en el sitio del fabricante, sus repositorios de GitHub y su política de privacidad, consultados el 24 de octubre de 2026. PromptQuorum no ha instalado ni ejecutado la app, por lo que no se evalúan la calidad de las tareas ni la velocidad.' },
        ],
      },
      overview: {
        id: 'what-is-local-operator',
        title: '¿Qué es Local Operator?',
        content: [
            '**Local Operator es una app de agentes de código abierto de Radient Inc. que convierte una petición en lenguaje normal en un plan y luego ejecuta código real en tu ordenador para llevarlo a cabo.** Tiene dos partes: la app de escritorio del repositorio [local-operator-ui](https://github.com/damianvtran/local-operator-ui) y el motor de agentes en Python de [local-operator](https://github.com/damianvtran/local-operator), que también funciona como app de terminal llamada `lop`.',
            'El sitio la presenta como un equipo de agentes: puedes guardar agentes, agruparlos en equipos con un responsable, programar trabajos recurrentes y tomar agentes compartidos del Agent Hub, impulsado por Radient. El repositorio principal se creó el 25 de enero de 2025.',
          ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
            '**Local Operator es una descarga gratuita para macOS, Windows y Linux (x86_64); los instaladores están en GitHub Releases.**',
          ],
        columns: [ 'Opción', 'Cómo conseguirlo' ],
        rows: [
            { 'Opción': 'macOS', 'Cómo conseguirlo': '[App de escritorio en GitHub Releases](https://github.com/damianvtran/local-operator-ui/releases/latest): .dmg para Apple silicon y para Intel' },
            { 'Opción': 'Windows', 'Cómo conseguirlo': 'Misma página de versiones: instalador .exe para x64, para Arm64 o combinado' },
            { 'Opción': 'Linux (x86_64)', 'Cómo conseguirlo': 'Misma página de versiones: .AppImage, .deb y .rpm; no hay compilación de Linux para Arm64' },
            { 'Opción': 'Terminal', 'Cómo conseguirlo': '`npx local-operator-ui` (requiere Node.js 22.13.1 o posterior)' },
            { 'Opción': 'Sitio web', 'Cómo conseguirlo': '[local-operator.com](https://local-operator.com)' },
            { 'Opción': 'Política de privacidad', 'Cómo conseguirlo': '[local-operator.com/privacy-policy](https://local-operator.com/privacy-policy)' },
            { 'Opción': 'Código fuente', 'Cómo conseguirlo': 'Licencia MIT: [local-operator](https://github.com/damianvtran/local-operator) (motor de agentes) y [local-operator-ui](https://github.com/damianvtran/local-operator-ui) (app de escritorio)' },
          ],
        note: 'Versión revisada: app de escritorio 0.42.2, publicada el 24 de octubre de 2026 según su versión de GitHub, sobre el motor de agentes 0.88.3. La página de descarga del sitio aún muestra la versión 0.12.8 del 11 de febrero de 2026 y archivos de macOS llamados 0.19.7, por lo que está desactualizada; GitHub Releases es más reciente y es el que se usa aquí. Ambos repositorios publicaron varias versiones el 24 de octubre de 2026.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
            '**La página de descarga indica macOS 11 o posterior, Windows 10 o posterior y un Linux x86_64 reciente, además de un modelo con el que hablar.** No indica un mínimo de RAM ni de VRAM.',
          ],
        columns: [ 'Elemento', 'Qué dicen las fuentes' ],
        rows: [
            { 'Elemento': 'macOS', 'Qué dicen las fuentes': 'macOS 11 (Big Sur) o posterior, Intel o Apple silicon' },
            { 'Elemento': 'Windows', 'Qué dicen las fuentes': 'Windows 10 o posterior, x64 o Arm64' },
            { 'Elemento': 'Linux', 'Qué dicen las fuentes': 'Distribución x86_64 reciente, por ejemplo Ubuntu 18.04+, Debian 10+ o Fedora 32+; los paquetes .deb y .rpm instalan paquetes de Python 3.12' },
            { 'Elemento': 'Disco', 'Qué dicen las fuentes': 'Unos cientos de megabytes para el instalador, más espacio para el backend que la app configura en el primer arranque' },
            { 'Elemento': 'Modelo', 'Qué dicen las fuentes': 'Un modelo local de Ollama (gratuito, funciona sin conexión), tus propias claves de API o un saldo de Radient Pass' },
          ],
        note: 'La página es anterior a las versiones actuales, así que vuelve a comprobar los requisitos del sistema al descargar. La memoria que necesita un modelo local depende del modelo que elijas, no de la app.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
            '**Los pasos siguen la página de descarga y la descripción del primer arranque del fabricante; PromptQuorum no los ha ejecutado.**',
          ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Ejecuta el instalador de tu sistema. En macOS el primer arranque se bloquea hasta que eliges «Abrir igualmente» en Ajustes del Sistema, Privacidad y seguridad; Windows puede mostrar un aviso de SmartScreen con «Más información», «Ejecutar de todas formas».',
          },
          {
            title: 'Deja que se configure',
            whyItMatters: 'En el primer arranque la app instala su propio backend, lo que tarda uno o dos minutos, y abre directamente un chat.',
          },
          {
            title: 'Conecta un modelo',
            whyItMatters: 'Elige Ollama, tus propias claves de API o Radient Pass; puedes cambiar por agente o por conversación.',
          },
          {
            title: 'Pide algo pequeño',
            whyItMatters: 'El agente muestra su plan, un agente independiente lo revisa y tú lo apruebas antes de que se ejecute nada.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
            '**Cada elemento de abajo procede del sitio del fabricante o del README del proyecto; ninguno se ha probado de forma independiente.**',
          ],
        items: [
            '**Planificar, revisar, aprobar.** El agente muestra un plan, un agente de seguridad independiente revisa cada acción propuesta y tú das el visto bueno. Según el README, las lecturas se ejecutan solas, mientras que las escrituras y los comandos de shell muestran el comando exacto y preguntan antes.',
            '**Escribe sus propias herramientas.** Cuando una tarea necesita una capacidad que no existe, el agente escribe código para proporcionarla y muestra cada comando y su salida como recibo.',
            '**Equipos y subagentes.** Los agentes pueden agruparse en equipos con un responsable, y el trabajo puede repartirse entre subagentes que se ejecutan en paralelo, cada uno con su tiempo, uso de contexto y coste.',
            '**Programación y memoria.** Las tareas recurrentes se ejecutan en segundo plano según un calendario, y un agente conserva lo que le enseñas para peticiones posteriores.',
            '**Extras de escritorio.** Un panel de navegador Chromium con confirmación antes de que el agente actúe en una página, y un lienzo de archivos que abre Markdown, código, PDF, hojas de cálculo, imágenes, audio y vídeo.',
            '**Conexiones.** Se admiten servidores MCP, y tus dispositivos pueden emparejarse en una malla para acceder a las sesiones desde cualquiera de ellos.',
          ],
        note: 'El README también describe el acceso desde el móvil y una extensión de navegador; ambos requieren una configuración adicional que esta reseña no examinó.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
            '**El fabricante dice que tus archivos nunca tienen por qué salir de tu ordenador, mientras que el texto de tu conversación va al modelo que elijas.** Con un modelo local de Ollama no sale nada; con Radient Pass o tus propias claves de API, la conversación va a ese proveedor según sus condiciones. No hace falta cuenta, salvo para la plataforma en la nube opcional.',
            'La búsqueda web está activada por defecto según el README y se desactiva con `lop search off`; la descarga de páginas web tiene su propio interruptor. Por defecto, un comando que ejecuta el agente puede ver tus variables de entorno. La política de privacidad, en vigor desde el 4 de abril de 2025, dice que Radient puede recopilar datos del dispositivo, de uso y de registros y, en las cuentas en la nube, nombre y correo electrónico.',
          ],
        callouts: [
          { type: 'note', text: 'Son declaraciones del fabricante, no resultados de una auditoría. PromptQuorum no ha inspeccionado el tráfico de red de la app ni ha confirmado qué datos impide cada ajuste.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
            '**Usuarios de escritorio con tareas de archivos** como ordenar, renombrar o resumir documentos, que quieren un agente que pregunte antes de escribir.',
            '**Usuarios de Ollama** que buscan una app de agentes gráfica capaz de funcionar con un modelo local.',
            '**Aficionados a trastear** que valoran un proyecto con licencia MIT, repositorios abiertos y versiones frecuentes.',
          ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
            '**Calidad y velocidad de las tareas.** PromptQuorum no ejecutó la app, así que los ejemplos del fabricante, como el de las facturas, no se reprodujeron.',
            '**Resultados con modelos locales.** Las fuentes no dan un modelo ni un hardware mínimos para un trabajo de agente útil, y no se probaron modelos locales.',
            '**La comprobación de seguridad.** La fiabilidad con la que el agente revisor detecta un comando dañino es la descripción del fabricante, no una propiedad probada.',
            '**Firma del código.** La página de descarga avisa de mensajes de macOS y Windows; no se comprobó si los instaladores están firmados.',
            '**Desfase de versiones.** El sitio aún muestra la versión 0.12.8 y los repositorios publican varias veces al día, así que las funciones pueden cambiar entre tu descarga y esta reseña.',
          ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
            { 'App': '[Open Interpreter](/es/power-local-llm/open-interpreter-review)', 'Plataformas': 'Windows, macOS, Linux', 'Precio / licencia': 'Gratis / Apache 2.0', 'Diferencia clave': 'Permite que un modelo local controle tu ordenador y ejecute código; la vía de instalación y la licencia están en su propia reseña' },
            { 'App': '[Agent Zero](/es/power-local-llm/agent-zero-review)', 'Plataformas': 'Windows, macOS, Linux', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Agente autoalojado que se ejecuta en Docker con interfaz web en lugar de un instalador nativo' },
            { 'App': '[Nanobot](/es/power-local-llm/nanobot-review)', 'Plataformas': 'Windows, macOS, Linux', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Agente personal autoalojado con memoria persistente, herramientas MCP e integraciones con apps de chat, usado desde la web o la línea de comandos' },
          ],
        note: 'Son las reseñas de PromptQuorum del mismo segmento; confirma el precio, la licencia y las plataformas actuales en el sitio de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puede Local Operator funcionar totalmente sin conexión?',
            a: 'Según el fabricante, sí con un modelo local de Ollama, que describe como la opción más privada y que funciona sin conexión. La búsqueda web está activada por defecto; desactívala si nada debe salir del equipo.',
          },
          {
            q: '¿Por qué la página de descarga muestra una versión más antigua?',
            a: 'La página aún indica la versión 0.12.8 del 11 de febrero de 2026 y archivos de macOS llamados 0.19.7, mientras que GitHub Releases muestra la app de escritorio 0.42.2 del 24 de octubre de 2026. Descarga los instaladores desde la página de versiones de GitHub.',
          },
          {
            q: '¿Cambia el agente archivos sin preguntar?',
            a: 'Por defecto pregunta antes. El README dice que las lecturas se ejecutan solas, que las escrituras y los comandos de shell muestran el comando exacto, y que desactivar las aprobaciones es una decisión explícita.',
          },
          {
            q: '¿Cuánto cuesta Radient Pass?',
            a: 'Las fuentes no dan aquí un precio: Radient Pass se describe como un saldo prepago opcional para proveedores alojados, cobrado según la capacidad de cálculo usada. Consulta la página del fabricante antes de contar con él.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Local Operator es una forma con versiones activas y licencia MIT de ejecutar en tu propio ordenador un agente que escribe código, con un paso de aprobación antes de escribir o ejecutar nada y la opción de usar un modelo local de Ollama. En contra: aquí no se ha probado, un modelo alojado ve tu conversación, el sitio va por detrás de las versiones y el proyecto publica tan a menudo que esta reseña envejecerá rápido. Encaja con usuarios de Mac, Windows y Linux que quieren un agente gráfico para sus propios archivos y que comprobarán la versión, el ajuste del modelo y el de la búsqueda web antes de confiarle algo delicado.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
            '[Sitio de Local Operator](https://local-operator.com) — página de inicio, página de descarga, secciones de privacidad y precios, consultadas el 24 de octubre de 2026.',
            '[Versiones de local-operator-ui](https://github.com/damianvtran/local-operator-ui/releases) — app de escritorio 0.42.2 y sus archivos de instalación, publicada el 24 de octubre de 2026.',
            '[Repositorio local-operator](https://github.com/damianvtran/local-operator) — README, licencia MIT y versiones del motor de agentes, consultados el 24 de octubre de 2026.',
            '[Política de privacidad](https://local-operator.com/privacy-policy) — recopilación y uso compartido de datos, en vigor desde el 4 de abril de 2025.',
          ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
            '[Reseña de Open Interpreter](/es/power-local-llm/open-interpreter-review) — un agente que deja que un modelo controle tu ordenador y ejecute código.',
            '[Reseña de Agent Zero](/es/power-local-llm/agent-zero-review) — un agente autoalojado que se ejecuta en Docker.',
            '[Reseña de Nanobot](/es/power-local-llm/nanobot-review) — un agente personal autoalojado con memoria persistente.',
            '[Directorio de software LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/local-operator-review-hero-fr.webp',
    title: 'Test de Local Operator : agent IA de bureau gratuit',
    seoTitle: 'Test de Local Operator : appli d’agents IA gratuite',
    intro:
      'Local Operator est une appli de bureau gratuite sous licence MIT, éditée par [Radient Inc.](https://radienthq.com), dans laquelle des agents IA planifient une tâche, font vérifier le plan par un agent distinct, puis écrivent et exécutent du code sur votre propre Mac, PC Windows ou Linux. Le modèle peut être un modèle Ollama local, vos propres clés d’API ou le Radient Pass hébergé de l’éditeur. Ce test s’appuie sur le site de l’éditeur, ses deux dépôts GitHub et sa politique de confidentialité, consultés le 24 octobre 2026 ; PromptQuorum n’a pas testé l’appli en pratique.',
    metaDescription:
      'Test de Local Operator : agent IA gratuit (MIT) pour Mac, Windows et Linux. Ollama local ou modèles hébergés, confidentialité, version ; non testé.',
    twitterDescription:
      'Test de Local Operator : un agent de bureau gratuit et open source qui exécute du code sur votre ordinateur avec un modèle local ou hébergé. Ce que les sources confirment ou non.',
    audience:
      'Utilisateurs de Mac, Windows et Linux qui veulent un agent IA soumis à validation pour leurs propres fichiers et doivent savoir ce qui reste sur l’ordinateur, ce que voit le fournisseur du modèle et ce que les sources laissent ouvert.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'test Local Operator',
    targetKeywords: [
      'test local operator',
      'local operator agent ia',
      'local operator ollama',
      'agent ia de bureau open source',
      'agent ia qui exécute du code sur votre ordinateur',
      'local operator radient',
      'local operator téléchargement',
    ],
    current_models_mentioned: ['Ollama', 'LM Studio', 'vLLM', 'llama.cpp'],
    current_hardware_mentioned: ['Apple silicon', 'x86_64'],
    leadAnswerBlock:
      '**Local Operator (appli de bureau en version 0.42.2, publiée le 24 octobre 2026) est une appli de bureau gratuite sous licence MIT dont les agents IA écrivent et exécutent du code sur votre propre ordinateur.** L’agent et vos fichiers restent en local, mais le modèle peut être hébergé et reçoit alors votre conversation. Chaque affirmation provient du site de l’éditeur, de ses dépôts GitHub et de sa politique de confidentialité.',
    quickAnswerTop: {
      fr: {
        question: 'Local Operator garde-t-il mes données sur mon ordinateur ?',
        answer:
          'Vos fichiers, oui ; votre conversation dépend du modèle. Selon l’éditeur, les fichiers restent sur l’ordinateur, tandis que le texte de la conversation part vers le modèle choisi : seul un modèle Ollama local garde tout chez vous. L’agent effectue aussi des recherches web par défaut, ce qui se désactive.',
        bullets: [
          'Vous demandez en langage courant et l’agent montre d’abord son plan.',
          'Un agent de sécurité distinct examine chaque action avant que vous la validiez.',
          'Des agents planifiés peuvent répéter une tâche en arrière-plan.',
          'Des équipes d’agents et des sous-agents peuvent se répartir les tâches plus longues.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce que Local Operator ?', anchor: 'what-is-local-operator' },
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
          { type: 'one-sentence', text: 'Local Operator est une appli de bureau gratuite et open source dans laquelle des agents IA écrivent et exécutent du code sur votre ordinateur, avec un modèle Ollama local, vos propres clés d’API ou le Radient Pass hébergé de l’éditeur.' },
          { type: 'plain-terms', text: 'Vous décrivez une tâche, par exemple trier un dossier de factures, l’appli montre un plan, un second agent le vérifie, vous validez, et le code s’exécute sur votre machine.' },
        ],
        items: [
            'Maintenance : l’appli de bureau (0.42.2) et le moteur d’agents (0.88.3) ont tous deux publié des versions le 24 octobre 2026, donc aucun avertissement de projet délaissé ne s’applique.',
            'Modèles : serveurs locaux comme Ollama, LM Studio, vLLM et llama.cpp, ou fournisseurs hébergés via vos clés ou Radient Pass.',
            'Sécurité : les lectures s’exécutent seules, tandis que les écritures de fichiers et les commandes shell demandent d’abord et affichent la commande exacte.',
            'Coût : l’appli est gratuite et open source ; d’après l’éditeur, seule l’utilisation de modèles d’IA peut coûter.',
            'Éditeur : Radient Inc., les deux dépôts étant publiés sous licence MIT.',
          ],
        callouts: [
          { type: 'note', text: 'Ce test s’appuie sur le site de l’éditeur, ses dépôts GitHub et sa politique de confidentialité, consultés le 24 octobre 2026. PromptQuorum n’a ni installé ni exécuté l’appli : la qualité des résultats et la vitesse ne sont donc pas évaluées.' },
        ],
      },
      overview: {
        id: 'what-is-local-operator',
        title: 'Qu’est-ce que Local Operator ?',
        content: [
            '**Local Operator est une appli d’agents open source éditée par Radient Inc. qui transforme une demande en langage courant en plan, puis exécute du vrai code sur votre ordinateur pour l’accomplir.** Elle comprend deux parties : l’appli de bureau du dépôt [local-operator-ui](https://github.com/damianvtran/local-operator-ui) et le moteur d’agents Python du dépôt [local-operator](https://github.com/damianvtran/local-operator), qui fonctionne aussi comme appli de terminal nommée `lop`.',
            'Le site la présente comme une équipe d’agents : vous pouvez enregistrer des agents, les regrouper en équipes avec un responsable, planifier des tâches récurrentes et reprendre des agents partagés depuis l’Agent Hub, propulsé par Radient. Le dépôt principal a été créé le 25 janvier 2025.',
          ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
            '**Local Operator se télécharge gratuitement pour macOS, Windows et Linux (x86_64) ; les installateurs sont hébergés sur GitHub Releases.**',
          ],
        columns: [ 'Option', 'Comment l’obtenir' ],
        rows: [
            { 'Option': 'macOS', 'Comment l’obtenir': '[Appli de bureau sur GitHub Releases](https://github.com/damianvtran/local-operator-ui/releases/latest) : .dmg pour Apple silicon et pour Intel' },
            { 'Option': 'Windows', 'Comment l’obtenir': 'Même page de versions : installateur .exe pour x64, pour Arm64 ou combiné' },
            { 'Option': 'Linux (x86_64)', 'Comment l’obtenir': 'Même page de versions : .AppImage, .deb et .rpm ; il n’existe pas de build Linux Arm64' },
            { 'Option': 'Terminal', 'Comment l’obtenir': '`npx local-operator-ui` (nécessite Node.js 22.13.1 ou plus récent)' },
            { 'Option': 'Site web', 'Comment l’obtenir': '[local-operator.com](https://local-operator.com)' },
            { 'Option': 'Politique de confidentialité', 'Comment l’obtenir': '[local-operator.com/privacy-policy](https://local-operator.com/privacy-policy)' },
            { 'Option': 'Code source', 'Comment l’obtenir': 'Licence MIT : [local-operator](https://github.com/damianvtran/local-operator) (moteur d’agents) et [local-operator-ui](https://github.com/damianvtran/local-operator-ui) (appli de bureau)' },
          ],
        note: 'Version testée : appli de bureau 0.42.2, publiée le 24 octobre 2026 d’après sa version GitHub, sur le moteur d’agents 0.88.3. La page de téléchargement du site affiche encore la version 0.12.8 du 11 février 2026 et des fichiers macOS nommés 0.19.7 : elle est donc périmée ; GitHub Releases est plus récent et sert de référence ici. Les deux dépôts ont publié plusieurs versions le 24 octobre 2026.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
            '**La page de téléchargement indique macOS 11 ou plus récent, Windows 10 ou plus récent et un Linux x86_64 récent, plus un modèle avec lequel dialoguer.** Aucun minimum de RAM ou de VRAM n’est indiqué.',
          ],
        columns: [ 'Élément', 'Ce que disent les sources' ],
        rows: [
            { 'Élément': 'macOS', 'Ce que disent les sources': 'macOS 11 (Big Sur) ou plus récent, Intel ou Apple silicon' },
            { 'Élément': 'Windows', 'Ce que disent les sources': 'Windows 10 ou plus récent, x64 ou Arm64' },
            { 'Élément': 'Linux', 'Ce que disent les sources': 'Distribution x86_64 récente, par exemple Ubuntu 18.04+, Debian 10+ ou Fedora 32+ ; les paquets .deb et .rpm installent des paquets Python 3.12' },
            { 'Élément': 'Disque', 'Ce que disent les sources': 'Quelques centaines de mégaoctets pour l’installateur, plus la place du moteur que l’appli installe au premier lancement' },
            { 'Élément': 'Modèle', 'Ce que disent les sources': 'Un modèle Ollama local (gratuit, utilisable hors ligne), vos propres clés d’API ou un solde Radient Pass' },
          ],
        note: 'La page est antérieure aux versions actuelles : vérifiez de nouveau la configuration requise au moment du téléchargement. La mémoire nécessaire à un modèle local dépend du modèle choisi, pas de l’appli.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
            '**Les étapes suivent la page de téléchargement et la description du premier lancement par l’éditeur ; PromptQuorum ne les a pas exécutées.**',
          ],
        numberedItems: [
          {
            title: 'Installer l’appli',
            whyItMatters: 'Lancez l’installateur de votre système. Sous macOS, le premier lancement est bloqué tant que vous ne choisissez pas « Ouvrir quand même » dans Réglages Système, Confidentialité et sécurité ; Windows peut afficher un avertissement SmartScreen avec « Informations complémentaires », « Exécuter quand même ».',
          },
          {
            title: 'Laisser la configuration se faire',
            whyItMatters: 'Au premier lancement, l’appli installe son propre moteur, ce qui prend une à deux minutes, et ouvre directement un chat.',
          },
          {
            title: 'Connecter un modèle',
            whyItMatters: 'Choisissez Ollama, vos propres clés d’API ou Radient Pass ; vous pouvez changer par agent ou par conversation.',
          },
          {
            title: 'Demander une petite tâche',
            whyItMatters: 'L’agent montre son plan, un agent distinct le vérifie, et vous validez avant que quoi que ce soit ne s’exécute.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
            '**Chaque élément ci-dessous provient du site de l’éditeur ou du README du projet ; aucun n’a été testé de façon indépendante.**',
          ],
        items: [
            '**Planifier, vérifier, valider.** L’agent montre un plan, un agent de sécurité distinct examine chaque action proposée, et vous validez. D’après le README, les lectures s’exécutent seules, tandis que les écritures et les commandes shell affichent la commande exacte et demandent d’abord.',
            '**Écrit ses propres outils.** Quand une tâche exige une capacité inexistante, l’agent écrit du code pour la fournir et montre chaque commande et sa sortie sous forme de reçu.',
            '**Équipes et sous-agents.** Les agents peuvent être regroupés en équipes avec un responsable, et le travail réparti entre des sous-agents qui s’exécutent en parallèle, chacun affichant sa durée, son contexte utilisé et son coût.',
            '**Planification et mémoire.** Les tâches récurrentes s’exécutent en arrière-plan selon un calendrier, et un agent retient ce que vous lui apprenez pour les demandes suivantes.',
            '**Extras du bureau.** Un volet navigateur Chromium avec confirmation avant que l’agent agisse sur une page, et un canevas de fichiers qui ouvre Markdown, code, PDF, tableurs, images, audio et vidéo.',
            '**Connexions.** Les serveurs MCP sont pris en charge, et vos appareils peuvent être appairés en maillage pour accéder aux sessions depuis chacun d’eux.',
          ],
        note: 'Le README décrit aussi l’accès depuis un téléphone et une extension de navigateur ; les deux exigent une configuration supplémentaire que ce test n’a pas examinée.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
            '**L’éditeur affirme que vos fichiers n’ont jamais besoin de quitter votre ordinateur, tandis que le texte de votre conversation part vers le modèle choisi.** Avec un modèle Ollama local, rien ne sort ; avec Radient Pass ou vos propres clés d’API, la conversation va chez ce fournisseur, selon ses conditions. Aucun compte n’est requis, sauf pour la plateforme cloud facultative.',
            'La recherche web est active par défaut d’après le README et se désactive avec `lop search off` ; la récupération de pages web a son propre interrupteur. Par défaut, une commande exécutée par l’agent peut voir vos variables d’environnement. La politique de confidentialité, en vigueur depuis le 4 avril 2025, indique que Radient peut collecter des données d’appareil, d’usage et de journaux et, pour les comptes cloud, le nom et l’e-mail.',
          ],
        callouts: [
          { type: 'note', text: 'Ce sont des déclarations de l’éditeur, pas des résultats d’audit. PromptQuorum n’a pas inspecté le trafic réseau de l’appli ni confirmé quelles données chaque réglage empêche.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle s’adresse',
        items: [
            '**Utilisateurs de bureau ayant des corvées de fichiers** comme trier, renommer ou résumer des documents, qui veulent un agent qui demande avant d’écrire.',
            '**Utilisateurs d’Ollama** qui cherchent une appli d’agents graphique pouvant fonctionner avec un modèle local.',
            '**Bricoleurs** qui apprécient un projet sous licence MIT, aux dépôts ouverts et aux versions fréquentes.',
          ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
            '**Qualité et vitesse des tâches.** PromptQuorum n’a pas exécuté l’appli ; les exemples de l’éditeur, comme la tâche sur les factures, n’ont pas été reproduits.',
            '**Résultats avec des modèles locaux.** Les sources ne donnent ni modèle ni matériel minimal pour un travail d’agent utile, et les modèles locaux n’ont pas été essayés.',
            '**Le contrôle de sécurité.** La fiabilité avec laquelle l’agent vérificateur détecte une commande nuisible relève de la description de l’éditeur, pas d’une propriété testée.',
            '**Signature du code.** La page de téléchargement annonce des invites de macOS et de Windows ; nous n’avons pas vérifié si les installateurs sont signés.',
            '**Dérive des versions.** Le site affiche encore la version 0.12.8 et les dépôts publient plusieurs fois par jour : les fonctions peuvent changer entre votre téléchargement et ce test.',
          ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
            { 'Application': '[Open Interpreter](/fr/power-local-llm/open-interpreter-review)', 'Plateformes': 'Windows, macOS, Linux', 'Prix / licence': 'Gratuit / Apache 2.0', 'Différence clé': 'Permet à un modèle local de piloter votre ordinateur et d’exécuter du code ; installation et licence détaillées dans son propre test' },
            { 'Application': '[Agent Zero](/fr/power-local-llm/agent-zero-review)', 'Plateformes': 'Windows, macOS, Linux', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Agent auto-hébergé exécuté dans Docker avec une interface web plutôt qu’un installateur natif' },
            { 'Application': '[Nanobot](/fr/power-local-llm/nanobot-review)', 'Plateformes': 'Windows, macOS, Linux', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Agent personnel auto-hébergé avec mémoire persistante, outils MCP et intégrations d’applis de messagerie, utilisé via le web ou la ligne de commande' },
          ],
        note: 'Ce sont les tests PromptQuorum du même segment ; vérifiez le prix, la licence et les plateformes actuels sur le site de chaque appli.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Local Operator peut-il fonctionner entièrement hors ligne ?',
            a: 'Selon l’éditeur, oui avec un modèle Ollama local, qu’il présente comme l’option la plus privée et qui fonctionne hors ligne. La recherche web est active par défaut ; désactivez-la si rien ne doit quitter la machine.',
          },
          {
            q: 'Pourquoi la page de téléchargement affiche-t-elle une version plus ancienne ?',
            a: 'La page indique encore la version 0.12.8 du 11 février 2026 et des fichiers macOS nommés 0.19.7, alors que GitHub Releases affiche l’appli de bureau 0.42.2 du 24 octobre 2026. Prenez les installateurs sur la page de versions GitHub.',
          },
          {
            q: 'L’agent modifie-t-il des fichiers sans demander ?',
            a: 'Par défaut, il demande d’abord. Le README indique que les lectures s’exécutent seules, que les écritures et les commandes shell affichent la commande exacte, et que désactiver les validations est un choix explicite.',
          },
          {
            q: 'Combien coûte Radient Pass ?',
            a: 'Les sources n’indiquent pas de prix ici : Radient Pass est décrit comme un solde prépayé facultatif pour des fournisseurs hébergés, facturé selon la puissance de calcul utilisée. Consultez la page de l’éditeur avant de vous y fier.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Local Operator est une façon activement mise à jour et sous licence MIT de faire tourner un agent qui écrit du code sur votre propre ordinateur, avec une étape de validation avant toute écriture ou exécution et la possibilité d’utiliser un modèle Ollama local. En contrepartie, il n’a pas été testé ici, un modèle hébergé voit votre conversation, le site accuse un retard sur les versions, et le projet publie si souvent que ce test vieillira vite. Il convient aux utilisateurs de Mac, Windows et Linux qui veulent un agent graphique pour leurs propres fichiers et qui vérifieront la version, le réglage du modèle et celui de la recherche web avant de lui confier des données sensibles.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
            '[Site de Local Operator](https://local-operator.com) — page d’accueil, page de téléchargement, sections confidentialité et tarifs, consultés le 24 octobre 2026.',
            '[Versions de local-operator-ui](https://github.com/damianvtran/local-operator-ui/releases) — appli de bureau 0.42.2 et ses fichiers d’installation, publiée le 24 octobre 2026.',
            '[Dépôt local-operator](https://github.com/damianvtran/local-operator) — README, licence MIT et versions du moteur d’agents, consultés le 24 octobre 2026.',
            '[Politique de confidentialité](https://local-operator.com/privacy-policy) — collecte et partage des données, en vigueur depuis le 4 avril 2025.',
          ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
            '[Test d’Open Interpreter](/fr/power-local-llm/open-interpreter-review) — un agent qui laisse un modèle piloter votre ordinateur et exécuter du code.',
            '[Test d’Agent Zero](/fr/power-local-llm/agent-zero-review) — un agent auto-hébergé qui s’exécute dans Docker.',
            '[Test de Nanobot](/fr/power-local-llm/nanobot-review) — un agent personnel auto-hébergé avec mémoire persistante.',
            '[Répertoire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/local-operator-review-hero-ja.webp',
    title: 'Local Operatorレビュー：自分のPCでコードを実行する無料AIエージェント',
    seoTitle: 'Local Operatorレビュー：無料のデスクトップAIエージェント',
    intro:
      'Local Operatorは、[Radient Inc.](https://radienthq.com)が提供する、MITライセンスの無料デスクトップアプリです。AIエージェントがタスクを計画し、別のエージェントに計画を確認させたうえで、お使いのMac・Windows・Linux上でコードを書いて実行します。モデルにはローカルのOllamaモデル、自分のAPIキー、開発元のホスト型Radient Passを使えます。このレビューは開発元のウェブサイト、2つのGitHubリポジトリ、プライバシーポリシー（2026年10月24日確認）に基づいており、PromptQuorumはアプリを実際には試していません。',
    metaDescription:
      'Local Operatorレビュー：Mac・Windows・Linux向けのMITライセンスの無料AIエージェント。ローカルのOllamaやホスト型モデル、プライバシー、版数を解説（未検証）。',
    twitterDescription:
      'Local Operatorレビュー：ローカルまたはホスト型モデルで自分のPC上のコードを実行する、無料のオープンソース・デスクトップエージェント。情報源が確認した点と未確認の点。',
    audience:
      '自分のファイルを承認制のAIエージェントに任せたいMac・Windows・Linuxユーザーで、PCに残るデータ、モデル提供元が見るデータ、情報源が未確認としている点を知りたい方。',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Local Operator レビュー',
    targetKeywords: [
      'local operator レビュー',
      'local operator aiエージェント',
      'local operator ollama',
      'オープンソース デスクトップ aiエージェント',
      'pcでコードを実行するaiエージェント',
      'local operator radient',
      'local operator ダウンロード',
    ],
    current_models_mentioned: ['Ollama', 'LM Studio', 'vLLM', 'llama.cpp'],
    current_hardware_mentioned: ['Apple silicon', 'x86_64'],
    leadAnswerBlock:
      '**Local Operator（デスクトップアプリ版0.42.2、2026年10月24日公開）は、AIエージェントが自分のPC上でコードを書いて実行する、MITライセンスの無料デスクトップアプリです。** エージェントとファイルはローカルに残りますが、モデルはホスト型にもでき、その場合は会話がモデル側に送られます。ここでの記述はすべて開発元のサイト、GitHubリポジトリ、プライバシーポリシーに基づきます。',
    quickAnswerTop: {
      ja: {
        question: 'Local Operatorはデータを自分のPC内にとどめますか？',
        answer:
          'ファイルはとどまりますが、会話はモデル次第です。開発元によると、ファイルはPC内にとどまり、会話のテキストは選んだモデルに送られるため、すべてを手元に置けるのはローカルのOllamaモデルだけです。エージェントは初期設定でウェブ検索も行いますが、オフにできます。',
        bullets: [
          '普通の言葉で依頼すると、エージェントが先に計画を示します。',
          '承認の前に、別のセキュリティ確認エージェントが各操作を点検します。',
          'スケジュール設定したエージェントが、バックグラウンドで作業を繰り返せます。',
          'エージェントのチームやサブエージェントで、大きな作業を分担できます。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Local Operatorとは', anchor: 'what-is-local-operator' },
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
          { type: 'one-sentence', text: 'Local Operatorは、AIエージェントが自分のPC上でコードを書いて実行する無料のオープンソース・デスクトップアプリで、ローカルのOllamaモデル、自分のAPIキー、開発元のホスト型Radient Passを使えます。' },
          { type: 'plain-terms', text: '請求書フォルダの整理などの作業を伝えると、アプリが計画を示し、別のエージェントが確認し、承認するとコードが自分のPC上で動きます。' },
        ],
        items: [
            'メンテナンス：デスクトップアプリ（0.42.2）とエージェント実行基盤（0.88.3）はどちらも2026年10月24日にリリースされており、更新停止の警告は該当しません。',
            'モデル：Ollama、LM Studio、vLLM、llama.cppなどのローカルサーバー、または自分のキーやRadient Pass経由のホスト型プロバイダー。',
            '安全性：読み取りは自動で実行され、ファイルの書き込みやシェルコマンドは事前に正確なコマンドを示して確認を求めます。',
            '費用：アプリは無料のオープンソースで、開発元によると、費用が発生しうるのはAIモデルの利用分だけです。',
            '開発元：Radient Inc.。2つのリポジトリはどちらもMITライセンスで公開されています。',
          ],
        callouts: [
          { type: 'note', text: 'このレビューは開発元のウェブサイト、GitHubリポジトリ、プライバシーポリシー（2026年10月24日確認）に基づきます。PromptQuorumはアプリをインストールも実行もしていないため、タスクの品質や速度は評価していません。' },
        ],
      },
      overview: {
        id: 'what-is-local-operator',
        title: 'Local Operatorとは',
        content: [
            '**Local Operatorは、Radient Inc.が提供するオープンソースのエージェントアプリで、普通の言葉の依頼を計画に変え、実際のコードを自分のPC上で実行して作業を進めます。** 構成は2つで、リポジトリ[local-operator-ui](https://github.com/damianvtran/local-operator-ui)のデスクトップアプリと、[local-operator](https://github.com/damianvtran/local-operator)のPython製エージェント実行基盤（`lop`というターミナルアプリとしても動作）です。',
            'サイトでは「エージェントのチーム」として紹介されています。エージェントを保存し、マネージャー付きのチームにまとめ、定期作業をスケジュールし、Radientが運営するAgent Hubで共有エージェントを取り込めます。コアのリポジトリは2025年1月25日に作成されました。',
          ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
            '**Local OperatorはmacOS、Windows、Linux（x86_64）向けの無料ダウンロードで、インストーラーはGitHub Releasesにあります。**',
          ],
        columns: [ '項目', '入手方法' ],
        rows: [
            { '項目': 'macOS', '入手方法': '[GitHub Releasesのデスクトップアプリ](https://github.com/damianvtran/local-operator-ui/releases/latest)：Apple silicon版とIntel版の.dmg' },
            { '項目': 'Windows', '入手方法': '同じリリースページ：x64用、Arm64用、または両対応の.exeインストーラー' },
            { '項目': 'Linux（x86_64）', '入手方法': '同じリリースページ：.AppImage、.deb、.rpm。Arm64向けLinuxビルドはありません' },
            { '項目': 'ターミナル', '入手方法': '`npx local-operator-ui`（Node.js 22.13.1以降が必要）' },
            { '項目': 'ウェブサイト', '入手方法': '[local-operator.com](https://local-operator.com)' },
            { '項目': 'プライバシーポリシー', '入手方法': '[local-operator.com/privacy-policy](https://local-operator.com/privacy-policy)' },
            { '項目': 'ソースコード', '入手方法': 'MITライセンス：[local-operator](https://github.com/damianvtran/local-operator)（エージェント実行基盤）、[local-operator-ui](https://github.com/damianvtran/local-operator-ui)（デスクトップアプリ）' },
          ],
        note: '確認した版：デスクトップアプリ0.42.2（GitHubのリリースによれば2026年10月24日公開）、エージェント実行基盤0.88.3。サイトのダウンロードページは2026年2月11日の0.12.8のままで、macOS用ファイルは0.19.7と表示されており、古い情報です。GitHub Releasesのほうが新しいため、ここではそちらを採用しています。両リポジトリとも2026年10月24日に複数回リリースされました。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: [
            '**ダウンロードページはmacOS 11以降、Windows 10以降、最近のx86_64 Linux、および対話相手のモデルを挙げています。** RAMやVRAMの最低要件は記載されていません。',
          ],
        columns: [ '項目', '情報源の記載' ],
        rows: [
            { '項目': 'macOS', '情報源の記載': 'macOS 11（Big Sur）以降、IntelまたはApple silicon' },
            { '項目': 'Windows', '情報源の記載': 'Windows 10以降、x64またはArm64' },
            { '項目': 'Linux', '情報源の記載': '最近のx86_64ディストリビューション（Ubuntu 18.04以降、Debian 10以降、Fedora 32以降など）。.debと.rpmはPython 3.12のパッケージをインストールします' },
            { '項目': 'ディスク', '情報源の記載': 'インストーラー用に数百MBと、初回起動時にアプリが構築するバックエンド用の空き容量' },
            { '項目': 'モデル', '情報源の記載': 'ローカルのOllamaモデル（無料・オフライン可）、自分のAPIキー、またはRadient Passの残高' },
          ],
        note: 'このページは現行リリースより古いため、ダウンロード時にシステム要件を再確認してください。ローカルモデルに必要なメモリは、アプリではなく選ぶモデルで決まります。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
            '**手順は開発元のダウンロードページと初回起動の説明に沿ったもので、PromptQuorumは実行していません。**',
          ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: 'お使いのシステム用のインストーラーを実行します。macOSでは、システム設定の「プライバシーとセキュリティ」で「このまま開く」を選ぶまで初回起動がブロックされます。Windowsでは「詳細情報」から「実行」を選ぶSmartScreenの警告が出ることがあります。',
          },
          {
            title: 'セットアップを待つ',
            whyItMatters: '初回起動時にアプリが独自のバックエンドをインストールします。1〜2分かかり、そのままチャット画面が開きます。',
          },
          {
            title: 'モデルを接続する',
            whyItMatters: 'Ollama、自分のAPIキー、Radient Passから選びます。エージェントごと、会話ごとに切り替えられます。',
          },
          {
            title: '小さな依頼から試す',
            whyItMatters: 'エージェントが計画を示し、別のエージェントが確認し、承認するまで何も実行されません。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
            '**以下の項目はすべて開発元のサイトまたはプロジェクトのREADMEに基づくもので、独自に検証したものはありません。**',
          ],
        items: [
            '**計画・確認・承認。** エージェントが計画を示し、別のセキュリティ確認エージェントが各操作を点検し、ユーザーが承認します。READMEによると、読み取りは自動で実行され、書き込みとシェルコマンドは正確なコマンドを示して事前に確認します。',
            '**自分でツールを書く。** 必要な機能がない作業では、エージェントがコードを書いて補い、各コマンドとその出力を記録として表示します。',
            '**チームとサブエージェント。** エージェントをマネージャー付きのチームにまとめられ、作業を並列のサブエージェントに分担できます。各サブエージェントは経過時間、コンテキスト使用量、コストを表示します。',
            '**スケジュールとメモリ。** 定期タスクはスケジュールに沿ってバックグラウンドで実行され、エージェントは教えられた内容を以後の依頼に生かします。',
            '**デスクトップ版の追加機能。** エージェントがページを操作する前に確認を求めるChromiumのブラウザーペインと、Markdown、コード、PDF、表計算、画像、音声、動画を開けるファイルキャンバス。',
            '**接続。** MCPサーバーに対応し、所有する端末同士をメッシュとして接続して、どの端末からもセッションにアクセスできます。',
          ],
        note: 'READMEにはスマートフォンからのアクセスとブラウザー拡張機能も記載されていますが、どちらも追加設定が必要で、このレビューでは確認していません。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
            '**開発元は、ファイルがPCの外に出る必要はなく、会話のテキストは選んだモデルに送られるとしています。** ローカルのOllamaモデルなら何も外に出ません。Radient Passや自分のAPIキーを使う場合、会話はそのプロバイダーに送られ、その利用規約に従います。アカウントは不要で、任意のクラウドプラットフォームを使うときだけ必要です。',
            'READMEによればウェブ検索は初期設定でオンで、`lop search off`でオフにできます。ウェブページの取得には別のスイッチがあります。既定では、エージェントが実行するコマンドからPCの環境変数が見えます。2025年4月4日施行のプライバシーポリシーには、Radientがデバイス情報、利用状況、ログを収集することがあり、クラウドアカウントでは氏名とメールアドレスも収集すると記載されています。',
          ],
        callouts: [
          { type: 'note', text: 'これらは開発元の申告であり、監査結果ではありません。PromptQuorumはアプリの通信を調べておらず、各設定がどのデータを止めるのかも確認していません。' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
            '**ファイル整理などの作業があるデスクトップユーザー**：書類の仕分け、名前の変更、要約などを、書き込み前に確認してくれるエージェントに任せたい方。',
            '**Ollamaユーザー**：ローカルモデルで動かせるGUIのエージェントアプリを探している方。',
            '**試すのが好きな方**：MITライセンスで、リポジトリが公開され、リリースも頻繁なプロジェクトを重視する方。',
          ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
            '**タスクの品質と速度。** PromptQuorumはアプリを実行しておらず、請求書の例など開発元のデモは再現していません。',
            '**ローカルモデルでの結果。** 実用的なエージェント作業に必要な最低限のモデルやハードウェアは情報源にはなく、ローカルモデルも試していません。',
            '**セキュリティ確認。** 別のエージェントが有害なコマンドをどれだけ確実に見つけるかは開発元の説明であり、検証した特性ではありません。',
            '**コード署名。** ダウンロードページはmacOSとWindowsの確認画面に触れていますが、インストーラーが署名されているかは確認していません。',
            '**版のずれ。** サイトは0.12.8のままで、リポジトリは1日に何度もリリースされるため、ダウンロード時点とこのレビューの間で機能が変わる可能性があります。',
          ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
            { 'アプリ': '[Open Interpreter](/ja/power-local-llm/open-interpreter-review)', '対応プラットフォーム': 'Windows、macOS、Linux', '価格／ライセンス': '無料／Apache 2.0', '主な違い': 'ローカルモデルにPCを操作させてコードを実行する。導入方法とライセンスは専用レビューを参照' },
            { 'アプリ': '[Agent Zero](/ja/power-local-llm/agent-zero-review)', '対応プラットフォーム': 'Windows、macOS、Linux', '価格／ライセンス': '無料／MIT', '主な違い': 'Docker上で動くセルフホスト型のエージェントで、ネイティブのインストーラーではなくウェブ画面を使う' },
            { 'アプリ': '[Nanobot](/ja/power-local-llm/nanobot-review)', '対応プラットフォーム': 'Windows、macOS、Linux', '価格／ライセンス': '無料／MIT', '主な違い': '永続メモリ、MCPツール、チャットアプリ連携を備えたセルフホスト型の個人用エージェントで、ウェブまたはコマンドラインで使う' },
          ],
        note: '同じセグメントのPromptQuorumのレビューです。各アプリの現在の価格、ライセンス、対応プラットフォームは公式サイトで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Local Operatorは完全にオフラインで動きますか？',
            a: '開発元によれば、ローカルのOllamaモデルなら動作します。最もプライベートな選択肢でオフラインでも使えるとしています。ウェブ検索は初期設定でオンなので、何も外に出したくない場合はオフにしてください。',
          },
          {
            q: 'ダウンロードページが古い版を表示しているのはなぜですか？',
            a: 'ページには2026年2月11日の0.12.8とmacOS用の0.19.7が残っていますが、GitHub Releasesでは2026年10月24日のデスクトップアプリ0.42.2が表示されます。インストーラーはGitHubのリリースページから入手してください。',
          },
          {
            q: 'エージェントは確認なしにファイルを変更しますか？',
            a: '既定では事前に確認します。READMEによると、読み取りは自動で実行され、書き込みとシェルコマンドは正確なコマンドを示し、承認をオフにするには明示的な操作が必要です。',
          },
          {
            q: 'Radient Passの料金はいくらですか？',
            a: '情報源には料金の記載がありません。Radient Passはホスト型プロバイダー向けの任意のプリペイド残高で、使った計算量に応じて課金されると説明されています。利用前に開発元のページをご確認ください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Local Operatorは、書き込みや実行の前に承認の手順があり、ローカルのOllamaモデルも使える、MITライセンスでリリースが活発なコード実行エージェントです。一方で、ここでは未検証であり、ホスト型モデルでは会話が先方に渡り、サイトはリリースに追いついておらず、リリースの頻度が高いためこのレビューもすぐ古くなります。自分のファイル向けにGUIのエージェントを求め、機微な作業を任せる前にバージョン、モデル設定、ウェブ検索の設定を確認できるMac・Windows・Linuxユーザーに向いています。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
            '[Local Operatorのウェブサイト](https://local-operator.com) — ホーム、ダウンロードページ、プライバシーと料金の各セクション（2026年10月24日確認）。',
            '[local-operator-uiのリリース](https://github.com/damianvtran/local-operator-ui/releases) — デスクトップアプリ0.42.2とインストーラーファイル（2026年10月24日公開）。',
            '[local-operatorリポジトリ](https://github.com/damianvtran/local-operator) — README、MITライセンス、エージェント実行基盤のリリース（2026年10月24日確認）。',
            '[プライバシーポリシー](https://local-operator.com/privacy-policy) — データの収集と共有（2025年4月4日施行）。',
          ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
            '[Open Interpreterレビュー](/ja/power-local-llm/open-interpreter-review) — モデルにPCを操作させてコードを実行するエージェント。',
            '[Agent Zeroレビュー](/ja/power-local-llm/agent-zero-review) — Dockerで動くセルフホスト型エージェント。',
            '[Nanobotレビュー](/ja/power-local-llm/nanobot-review) — 永続メモリを持つセルフホスト型の個人用エージェント。',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/local-operator-review-hero-pt.webp',
    title: 'Análise do Local Operator: agente de IA de desktop gratuito',
    seoTitle: 'Análise do Local Operator: app de agentes de IA grátis',
    intro:
      'O Local Operator é um app de desktop gratuito, com licença MIT, da [Radient Inc.](https://radienthq.com), em que agentes de IA planejam uma tarefa, pedem que outro agente revise o plano e depois escrevem e executam código no seu próprio Mac, Windows ou Linux. O modelo pode ser um modelo local do Ollama, suas próprias chaves de API ou o Radient Pass hospedado do fabricante. Esta análise se baseia no site do fabricante, nos seus dois repositórios do GitHub e na política de privacidade, consultados em 24 de outubro de 2026; a PromptQuorum não testou o app na prática.',
    metaDescription:
      'Análise do Local Operator: agente de IA gratuito (MIT) para Mac, Windows e Linux. Ollama local ou modelos hospedados, privacidade e versão; sem teste.',
    twitterDescription:
      'Análise do Local Operator: um agente de desktop gratuito e de código aberto que executa código no seu computador com modelo local ou hospedado. O que as fontes confirmam e o que não.',
    audience:
      'Usuários de Mac, Windows e Linux que querem um agente de IA com aprovação prévia para os próprios arquivos e precisam saber o que fica no computador, o que o provedor do modelo vê e o que as fontes deixam sem confirmação.',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Local Operator',
    targetKeywords: [
      'análise local operator',
      'local operator agente de ia',
      'local operator ollama',
      'agente de ia de desktop de código aberto',
      'agente de ia que executa código no seu computador',
      'local operator radient',
      'baixar local operator',
    ],
    current_models_mentioned: ['Ollama', 'LM Studio', 'vLLM', 'llama.cpp'],
    current_hardware_mentioned: ['Apple silicon', 'x86_64'],
    leadAnswerBlock:
      '**O Local Operator (app de desktop na versão 0.42.2, lançada em 24 de outubro de 2026) é um app de desktop gratuito, com licença MIT, cujos agentes de IA escrevem e executam código no seu próprio computador.** O agente e seus arquivos ficam locais, mas o modelo pode ser hospedado e, nesse caso, recebe a sua conversa. Tudo o que se afirma aqui vem do site do fabricante, dos seus repositórios do GitHub e da sua política de privacidade.',
    quickAnswerTop: {
      pt: {
        question: 'O Local Operator mantém meus dados no meu computador?',
        answer:
          'Seus arquivos, sim; sua conversa depende do modelo. Segundo o fabricante, os arquivos ficam no computador, enquanto o texto da conversa vai para o modelo que você escolher, então só um modelo local do Ollama mantém tudo em casa. O agente também pesquisa na web por padrão, o que pode ser desativado.',
        bullets: [
          'Você pede em linguagem comum e o agente mostra primeiro o plano.',
          'Um agente de segurança separado revisa cada ação antes de você aprová-la.',
          'Agentes agendados podem repetir um trabalho em segundo plano.',
          'Equipes de agentes e subagentes podem dividir trabalhos maiores.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Local Operator?', anchor: 'what-is-local-operator' },
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
          { type: 'one-sentence', text: 'O Local Operator é um app de desktop gratuito e de código aberto em que agentes de IA escrevem e executam código no seu computador, com um modelo local do Ollama, suas próprias chaves de API ou o Radient Pass hospedado do fabricante.' },
          { type: 'plain-terms', text: 'Você descreve um trabalho, como organizar uma pasta de notas fiscais, o app mostra um plano, um segundo agente o verifica, você aprova e o código roda na sua máquina.' },
        ],
        items: [
            'Manutenção: o app de desktop (0.42.2) e o motor de agentes (0.88.3) lançaram versões em 24 de outubro de 2026, então nenhum aviso de projeto abandonado se aplica.',
            'Modelos: servidores locais como Ollama, LM Studio, vLLM e llama.cpp, ou provedores hospedados com suas chaves ou o Radient Pass.',
            'Segurança: as leituras rodam sozinhas, enquanto gravações de arquivos e comandos de shell perguntam antes e mostram o comando exato.',
            'Custo: o app é gratuito e de código aberto; segundo o fabricante, o único custo possível é o uso de modelos de IA.',
            'Fabricante: Radient Inc., com os dois repositórios publicados sob a licença MIT.',
          ],
        callouts: [
          { type: 'note', text: 'Esta análise se baseia no site do fabricante, nos repositórios do GitHub e na política de privacidade, consultados em 24 de outubro de 2026. A PromptQuorum não instalou nem executou o app, então a qualidade das tarefas e a velocidade não foram avaliadas.' },
        ],
      },
      overview: {
        id: 'what-is-local-operator',
        title: 'O que é o Local Operator?',
        content: [
            '**O Local Operator é um app de agentes de código aberto da Radient Inc. que transforma um pedido em linguagem comum em um plano e depois executa código de verdade no seu computador para cumpri-lo.** Ele tem duas partes: o app de desktop do repositório [local-operator-ui](https://github.com/damianvtran/local-operator-ui) e o motor de agentes em Python de [local-operator](https://github.com/damianvtran/local-operator), que também roda como app de terminal chamado `lop`.',
            'O site o apresenta como uma equipe de agentes: você pode salvar agentes, agrupá-los em equipes com um gerente, agendar trabalhos recorrentes e puxar agentes compartilhados do Agent Hub, que é da Radient. O repositório principal foi criado em 25 de janeiro de 2025.',
          ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
            '**O Local Operator é um download gratuito para macOS, Windows e Linux (x86_64); os instaladores ficam no GitHub Releases.**',
          ],
        columns: [ 'Opção', 'Onde obter' ],
        rows: [
            { 'Opção': 'macOS', 'Onde obter': '[App de desktop no GitHub Releases](https://github.com/damianvtran/local-operator-ui/releases/latest): .dmg para Apple silicon e para Intel' },
            { 'Opção': 'Windows', 'Onde obter': 'Mesma página de versões: instalador .exe para x64, para Arm64 ou combinado' },
            { 'Opção': 'Linux (x86_64)', 'Onde obter': 'Mesma página de versões: .AppImage, .deb e .rpm; não existe build de Linux para Arm64' },
            { 'Opção': 'Terminal', 'Onde obter': '`npx local-operator-ui` (requer Node.js 22.13.1 ou mais recente)' },
            { 'Opção': 'Site', 'Onde obter': '[local-operator.com](https://local-operator.com)' },
            { 'Opção': 'Política de privacidade', 'Onde obter': '[local-operator.com/privacy-policy](https://local-operator.com/privacy-policy)' },
            { 'Opção': 'Código-fonte', 'Onde obter': 'Licença MIT: [local-operator](https://github.com/damianvtran/local-operator) (motor de agentes) e [local-operator-ui](https://github.com/damianvtran/local-operator-ui) (app de desktop)' },
          ],
        note: 'Versão analisada: app de desktop 0.42.2, lançada em 24 de outubro de 2026 segundo seu release no GitHub, sobre o motor de agentes 0.88.3. A página de download do site ainda mostra a versão 0.12.8 de 11 de fevereiro de 2026 e arquivos de macOS chamados 0.19.7, portanto está desatualizada; o GitHub Releases é mais recente e é o usado aqui. Os dois repositórios publicaram várias versões em 24 de outubro de 2026.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
            '**A página de download indica macOS 11 ou mais recente, Windows 10 ou mais recente e um Linux x86_64 recente, além de um modelo para conversar.** Ela não informa mínimo de RAM nem de VRAM.',
          ],
        columns: [ 'Item', 'O que dizem as fontes' ],
        rows: [
            { 'Item': 'macOS', 'O que dizem as fontes': 'macOS 11 (Big Sur) ou mais recente, Intel ou Apple silicon' },
            { 'Item': 'Windows', 'O que dizem as fontes': 'Windows 10 ou mais recente, x64 ou Arm64' },
            { 'Item': 'Linux', 'O que dizem as fontes': 'Distribuição x86_64 recente, por exemplo Ubuntu 18.04+, Debian 10+ ou Fedora 32+; os pacotes .deb e .rpm instalam pacotes do Python 3.12' },
            { 'Item': 'Disco', 'O que dizem as fontes': 'Algumas centenas de megabytes para o instalador, mais espaço para o backend, que o app configura na primeira execução' },
            { 'Item': 'Modelo', 'O que dizem as fontes': 'Um modelo local do Ollama (gratuito, funciona offline), suas próprias chaves de API ou um saldo do Radient Pass' },
          ],
        note: 'A página é anterior às versões atuais, então confira de novo os requisitos do sistema ao baixar. A memória que um modelo local exige depende do modelo escolhido, não do app.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
            '**Os passos seguem a página de download e a descrição da primeira execução do fabricante; a PromptQuorum não os executou.**',
          ],
        numberedItems: [
          {
            title: 'Instale o app',
            whyItMatters: 'Execute o instalador do seu sistema. No macOS, a primeira abertura é bloqueada até você escolher «Abrir Mesmo Assim» em Ajustes do Sistema, Privacidade e Segurança; o Windows pode exibir um aviso do SmartScreen com «Mais informações», «Executar assim mesmo».',
          },
          {
            title: 'Deixe configurar',
            whyItMatters: 'Na primeira execução, o app instala seu próprio backend, o que leva um ou dois minutos, e abre direto um chat.',
          },
          {
            title: 'Conecte um modelo',
            whyItMatters: 'Escolha Ollama, suas próprias chaves de API ou o Radient Pass; dá para trocar por agente ou por conversa.',
          },
          {
            title: 'Peça algo pequeno',
            whyItMatters: 'O agente mostra o plano, um agente separado o verifica e você aprova antes de qualquer execução.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
            '**Cada item abaixo vem do site do fabricante ou do README do projeto; nenhum foi testado de forma independente.**',
          ],
        items: [
            '**Planejar, verificar, aprovar.** O agente mostra um plano, um agente de segurança separado revisa cada ação proposta e você dá o aval. Segundo o README, as leituras rodam sozinhas, enquanto gravações e comandos de shell mostram o comando exato e perguntam antes.',
            '**Escreve as próprias ferramentas.** Quando uma tarefa exige uma capacidade que não existe, o agente escreve código para fornecê-la e mostra cada comando e sua saída como recibo.',
            '**Equipes e subagentes.** Os agentes podem ser agrupados em equipes com um gerente, e o trabalho pode ser dividido entre subagentes que rodam em paralelo, cada um mostrando seu tempo, uso de contexto e custo.',
            '**Agendamentos e memória.** Tarefas recorrentes rodam em segundo plano num calendário, e um agente guarda o que você ensina para pedidos futuros.',
            '**Extras de desktop.** Um painel de navegador Chromium com confirmação antes de o agente agir numa página, e uma tela de arquivos que abre Markdown, código, PDFs, planilhas, imagens, áudio e vídeo.',
            '**Conexões.** Há suporte a servidores MCP, e seus dispositivos podem ser pareados numa malha para acessar as sessões a partir de qualquer um deles.',
          ],
        note: 'O README também descreve acesso pelo celular e uma extensão de navegador; ambos exigem configuração extra que esta análise não examinou.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
            '**O fabricante diz que seus arquivos nunca precisam sair do computador, enquanto o texto da sua conversa vai para o modelo que você escolher.** Com um modelo local do Ollama nada sai; com o Radient Pass ou suas próprias chaves de API, a conversa vai para esse provedor, sob os termos dele. Não é preciso conta, exceto para a plataforma em nuvem opcional.',
            'A pesquisa na web vem ativada por padrão, segundo o README, e pode ser desligada com `lop search off`; a busca de páginas web tem um interruptor próprio. Por padrão, um comando executado pelo agente pode ver suas variáveis de ambiente. A política de privacidade, em vigor desde 4 de abril de 2025, diz que a Radient pode coletar dados do dispositivo, de uso e de logs e, em contas na nuvem, nome e e-mail.',
          ],
        callouts: [
          { type: 'note', text: 'São declarações do fabricante, não resultados de auditoria. A PromptQuorum não inspecionou o tráfego de rede do app nem confirmou quais dados cada configuração impede.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
            '**Usuários de desktop com tarefas de arquivos**, como organizar, renomear ou resumir documentos, que querem um agente que pergunte antes de gravar.',
            '**Usuários do Ollama** que procuram um app de agentes gráfico capaz de rodar com um modelo local.',
            '**Entusiastas** que valorizam um projeto com licença MIT, repositórios abertos e lançamentos frequentes.',
          ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
            '**Qualidade e velocidade das tarefas.** A PromptQuorum não executou o app, então os exemplos do fabricante, como o das notas fiscais, não foram reproduzidos.',
            '**Resultados com modelos locais.** As fontes não dão modelo nem hardware mínimos para um trabalho de agente útil, e modelos locais não foram testados.',
            '**A verificação de segurança.** A confiabilidade com que o agente revisor detecta um comando nocivo é a descrição do fabricante, não uma propriedade testada.',
            '**Assinatura de código.** A página de download avisa sobre mensagens do macOS e do Windows; não conferimos se os instaladores são assinados.',
            '**Defasagem de versão.** O site ainda mostra a versão 0.12.8 e os repositórios lançam várias vezes ao dia, então os recursos podem mudar entre o seu download e esta análise.',
          ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
            { 'App': '[Open Interpreter](/pt/power-local-llm/open-interpreter-review)', 'Plataformas': 'Windows, macOS, Linux', 'Preço / licença': 'Grátis / Apache 2.0', 'Diferença principal': 'Deixa um modelo local controlar seu computador e executar código; instalação e licença estão na própria análise' },
            { 'App': '[Agent Zero](/pt/power-local-llm/agent-zero-review)', 'Plataformas': 'Windows, macOS, Linux', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Agente auto-hospedado que roda no Docker com interface web, em vez de um instalador nativo' },
            { 'App': '[Nanobot](/pt/power-local-llm/nanobot-review)', 'Plataformas': 'Windows, macOS, Linux', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Agente pessoal auto-hospedado com memória persistente, ferramentas MCP e integrações com apps de chat, usado pela web ou pela linha de comando' },
          ],
        note: 'São as análises da PromptQuorum do mesmo segmento; confirme preço, licença e plataformas atuais no site de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Local Operator pode rodar totalmente offline?',
            a: 'Segundo o fabricante, sim, com um modelo local do Ollama, que ele descreve como a opção mais privada e que funciona offline. A pesquisa na web vem ativada por padrão; desligue-a se nada puder sair da máquina.',
          },
          {
            q: 'Por que a página de download mostra uma versão mais antiga?',
            a: 'A página ainda indica a versão 0.12.8 de 11 de fevereiro de 2026 e arquivos de macOS chamados 0.19.7, enquanto o GitHub Releases mostra o app de desktop 0.42.2 de 24 de outubro de 2026. Baixe os instaladores da página de releases do GitHub.',
          },
          {
            q: 'O agente altera arquivos sem perguntar?',
            a: 'Por padrão ele pergunta antes. O README diz que as leituras rodam sozinhas, que gravações e comandos de shell mostram o comando exato, e que desligar as aprovações é uma escolha explícita.',
          },
          {
            q: 'Quanto custa o Radient Pass?',
            a: 'As fontes não informam preço aqui: o Radient Pass é descrito como um saldo pré-pago opcional para provedores hospedados, cobrado pela capacidade de processamento usada. Consulte a página do fabricante antes de contar com ele.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O Local Operator é uma forma, com lançamentos frequentes e licença MIT, de rodar no seu próprio computador um agente que escreve código, com uma etapa de aprovação antes de gravar ou executar qualquer coisa e a opção de usar um modelo local do Ollama. Em contrapartida, não foi testado aqui, um modelo hospedado vê a sua conversa, o site fica atrás dos lançamentos e o projeto publica com tanta frequência que esta análise vai envelhecer rápido. Serve para usuários de Mac, Windows e Linux que querem um agente gráfico para os próprios arquivos e que vão conferir a versão, a configuração do modelo e a da pesquisa na web antes de confiar a ele algo sensível.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
            '[Site do Local Operator](https://local-operator.com) — página inicial, página de download, seções de privacidade e preços, consultados em 24 de outubro de 2026.',
            '[Releases do local-operator-ui](https://github.com/damianvtran/local-operator-ui/releases) — app de desktop 0.42.2 e seus arquivos de instalação, publicados em 24 de outubro de 2026.',
            '[Repositório local-operator](https://github.com/damianvtran/local-operator) — README, licença MIT e releases do motor de agentes, consultados em 24 de outubro de 2026.',
            '[Política de privacidade](https://local-operator.com/privacy-policy) — coleta e compartilhamento de dados, em vigor desde 4 de abril de 2025.',
          ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
            '[Análise do Open Interpreter](/pt/power-local-llm/open-interpreter-review) — um agente que deixa um modelo controlar seu computador e executar código.',
            '[Análise do Agent Zero](/pt/power-local-llm/agent-zero-review) — um agente auto-hospedado que roda no Docker.',
            '[Análise do Nanobot](/pt/power-local-llm/nanobot-review) — um agente pessoal auto-hospedado com memória persistente.',
            '[Diretório de software LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/local-operator-review-hero-ar.webp',
    title: 'مراجعة Local Operator: وكيل ذكاء اصطناعي مجاني يشغّل الشيفرة على حاسوبك',
    seoTitle: 'مراجعة Local Operator: تطبيق وكلاء ذكاء اصطناعي مجاني',
    intro:
      'Local Operator تطبيق سطح مكتب مجاني برخصة MIT من [Radient Inc.](https://radienthq.com) تخطّط فيه وكلاء الذكاء الاصطناعي للمهمة، ثم يراجع وكيل منفصل الخطة، وبعدها تكتب الشيفرة وتنفّذها على حاسوبك الذي يعمل بنظام Mac أو Windows أو Linux. يمكن أن يكون النموذج نموذج Ollama محليًا أو مفاتيح API الخاصة بك أو خدمة Radient Pass المستضافة لدى الشركة. تستند هذه المراجعة إلى موقع الشركة ومستودعيها على GitHub وسياسة الخصوصية، وقد جرى التحقق منها في 24 أكتوبر 2026، ولم تجرّب PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'مراجعة Local Operator: وكيل ذكاء اصطناعي مجاني برخصة MIT لأنظمة Mac وWindows وLinux. Ollama محلي أو نماذج مستضافة، والخصوصية والإصدار والتثبيت؛ دون اختبار.',
    twitterDescription:
      'مراجعة Local Operator: وكيل سطح مكتب مجاني ومفتوح المصدر ينفّذ الشيفرة على حاسوبك بنموذج محلي أو مستضاف. ما تؤكده المصادر وما لا تؤكده.',
    audience:
      'مستخدمو Mac وWindows وLinux الذين يريدون وكيل ذكاء اصطناعي بخطوة موافقة يعمل على ملفاتهم، ويحتاجون إلى معرفة ما يبقى على الحاسوب وما يراه مزوّد النموذج وما تتركه المصادر دون تأكيد.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Local Operator',
    targetKeywords: [
      'مراجعة local operator',
      'local operator وكيل ذكاء اصطناعي',
      'local operator ollama',
      'وكيل ذكاء اصطناعي مفتوح المصدر لسطح المكتب',
      'وكيل ذكاء اصطناعي ينفذ الشيفرة على حاسوبك',
      'local operator radient',
      'تنزيل local operator',
    ],
    current_models_mentioned: ['Ollama', 'LM Studio', 'vLLM', 'llama.cpp'],
    current_hardware_mentioned: ['Apple silicon', 'x86_64'],
    leadAnswerBlock:
      '**Local Operator (تطبيق سطح المكتب بالإصدار 0.42.2، صدر في 24 أكتوبر 2026) تطبيق سطح مكتب مجاني برخصة MIT تكتب وكلاؤه الشيفرة وتنفّذها على حاسوبك.** يبقى الوكيل وملفاتك محليين، لكن النموذج قد يكون مستضافًا، وعندئذٍ يتلقى محادثتك. كل ما يرد هنا مصدره موقع الشركة ومستودعاتها على GitHub وسياسة الخصوصية.',
    quickAnswerTop: {
      ar: {
        question: 'هل يُبقي Local Operator بياناتي على حاسوبي؟',
        answer:
          'ملفاتك نعم، أما محادثتك فتعتمد على النموذج. بحسب الشركة تبقى الملفات على الحاسوب بينما يذهب نص المحادثة إلى النموذج الذي تختاره، لذا لا يُبقي كل شيء لديك إلا نموذج Ollama محلي. كما يبحث الوكيل في الويب افتراضيًا ويمكن إيقاف ذلك.',
        bullets: [
          'تطلب بلغتك العادية فيعرض الوكيل خطته أولًا.',
          'يراجع وكيل أمان منفصل كل إجراء قبل أن توافق عليه.',
          'يمكن للوكلاء المجدولين تكرار مهمة في الخلفية.',
          'يمكن لفرق الوكلاء والوكلاء الفرعيين تقسيم المهام الأكبر.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Local Operator؟', anchor: 'what-is-local-operator' },
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
          { type: 'one-sentence', text: 'Local Operator تطبيق سطح مكتب مجاني ومفتوح المصدر تكتب فيه وكلاء الذكاء الاصطناعي الشيفرة وتنفّذها على حاسوبك، باستخدام نموذج Ollama محلي أو مفاتيح API الخاصة بك أو خدمة Radient Pass المستضافة لدى الشركة.' },
          { type: 'plain-terms', text: 'تصف مهمة مثل ترتيب مجلد فواتير، فيعرض التطبيق خطة، ويراجعها وكيل ثانٍ، وتوافق أنت، ثم تعمل الشيفرة على جهازك.' },
        ],
        items: [
            'الصيانة: أصدر تطبيق سطح المكتب (0.42.2) ومحرك الوكلاء (0.88.3) إصدارات في 24 أكتوبر 2026، فلا ينطبق تحذير المشروع المتوقف.',
            'النماذج: خوادم محلية مثل Ollama وLM Studio وvLLM وllama.cpp، أو مزوّدون مستضافون عبر مفاتيحك أو Radient Pass.',
            'الأمان: تعمل عمليات القراءة تلقائيًا، أما كتابة الملفات وأوامر الصدفة فتسأل أولًا وتعرض الأمر بدقة.',
            'التكلفة: التطبيق مجاني ومفتوح المصدر، وبحسب الشركة فالشيء الوحيد الذي قد تدفع مقابله هو استخدام نماذج الذكاء الاصطناعي.',
            'الشركة: Radient Inc.، وكلا المستودعين منشوران برخصة MIT.',
          ],
        callouts: [
          { type: 'note', text: 'تستند هذه المراجعة إلى موقع الشركة ومستودعاتها على GitHub وسياسة الخصوصية، وقد جرى التحقق منها في 24 أكتوبر 2026. لم تثبّت PromptQuorum التطبيق ولم تشغّله، لذلك لم تُقيَّم جودة المهام ولا سرعتها.' },
        ],
      },
      overview: {
        id: 'what-is-local-operator',
        title: 'ما هو Local Operator؟',
        content: [
            '**Local Operator تطبيق وكلاء مفتوح المصدر من Radient Inc. يحوّل طلبًا بلغة عادية إلى خطة ثم ينفّذ شيفرة حقيقية على حاسوبك لإنجازها.** يتألف من جزأين: تطبيق سطح المكتب في المستودع [local-operator-ui](https://github.com/damianvtran/local-operator-ui) ومحرك الوكلاء المكتوب بلغة Python في [local-operator](https://github.com/damianvtran/local-operator)، ويعمل أيضًا كتطبيق طرفية باسم `lop`.',
            'يقدّمه الموقع بوصفه فريقًا من الوكلاء: يمكنك حفظ الوكلاء وجمعهم في فرق يقودها مدير، وجدولة المهام المتكررة، وسحب وكلاء مشتركين من Agent Hub الذي تشغّله Radient. أُنشئ المستودع الأساسي في 25 يناير 2025.',
          ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
            '**Local Operator متاح للتنزيل مجانًا لأنظمة macOS وWindows وLinux (x86_64)، وملفات التثبيت مستضافة على GitHub Releases.**',
          ],
        columns: [ 'الخيار', 'مصدر الحصول عليه' ],
        rows: [
            { 'الخيار': 'macOS', 'مصدر الحصول عليه': '[تطبيق سطح المكتب على GitHub Releases](https://github.com/damianvtran/local-operator-ui/releases/latest): ملف .dmg لمعالجات Apple silicon ولمعالجات Intel' },
            { 'الخيار': 'Windows', 'مصدر الحصول عليه': 'صفحة الإصدارات نفسها: مثبّت .exe لمعمارية x64 أو Arm64 أو مثبّت مشترك' },
            { 'الخيار': 'Linux (x86_64)', 'مصدر الحصول عليه': 'صفحة الإصدارات نفسها: ‎.AppImage و‎.deb و‎.rpm؛ ولا يوجد بناء لـ Linux على Arm64' },
            { 'الخيار': 'الطرفية', 'مصدر الحصول عليه': '`npx local-operator-ui` (يتطلب Node.js 22.13.1 أو أحدث)' },
            { 'الخيار': 'الموقع', 'مصدر الحصول عليه': '[local-operator.com](https://local-operator.com)' },
            { 'الخيار': 'سياسة الخصوصية', 'مصدر الحصول عليه': '[local-operator.com/privacy-policy](https://local-operator.com/privacy-policy)' },
            { 'الخيار': 'الشيفرة المصدرية', 'مصدر الحصول عليه': 'رخصة MIT: ‏[local-operator](https://github.com/damianvtran/local-operator) (محرك الوكلاء) و[local-operator-ui](https://github.com/damianvtran/local-operator-ui) (تطبيق سطح المكتب)' },
          ],
        note: 'الإصدار الذي روجع: تطبيق سطح المكتب 0.42.2، صدر في 24 أكتوبر 2026 بحسب إصداره على GitHub، فوق محرك الوكلاء 0.88.3. ما زالت صفحة التنزيل في الموقع تعرض الإصدار 0.12.8 بتاريخ 11 فبراير 2026 وملفات macOS باسم 0.19.7، فهي قديمة؛ و GitHub Releases أحدث ولذلك اعتُمد هنا. نشر المستودعان عدة إصدارات في 24 أكتوبر 2026.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
            '**تذكر صفحة التنزيل نظام macOS 11 أو أحدث وWindows 10 أو أحدث وتوزيعة Linux حديثة بمعمارية x86_64، إضافة إلى نموذج للتحدث معه.** ولا تذكر حدًّا أدنى للذاكرة العشوائية أو لذاكرة الرسوميات.',
          ],
        columns: [ 'البند', 'ما تقوله المصادر' ],
        rows: [
            { 'البند': 'macOS', 'ما تقوله المصادر': 'نظام macOS 11 (Big Sur) أو أحدث، بمعالج Intel أو Apple silicon' },
            { 'البند': 'Windows', 'ما تقوله المصادر': 'نظام Windows 10 أو أحدث، بمعمارية x64 أو Arm64' },
            { 'البند': 'Linux', 'ما تقوله المصادر': 'توزيعة x86_64 حديثة، مثل Ubuntu 18.04+ أو Debian 10+ أو Fedora 32+؛ وتثبّت حزمتا ‎.deb و‎.rpm حزم Python 3.12' },
            { 'البند': 'القرص', 'ما تقوله المصادر': 'بضع مئات من الميغابايت للمثبّت، إضافة إلى مساحة للواجهة الخلفية التي يعدّها التطبيق عند أول تشغيل' },
            { 'البند': 'النموذج', 'ما تقوله المصادر': 'نموذج Ollama محلي (مجاني ويعمل دون اتصال) أو مفاتيح API الخاصة بك أو رصيد Radient Pass' },
          ],
        note: 'الصفحة أقدم من الإصدارات الحالية، فتحقق من متطلبات النظام مرة أخرى عند التنزيل. وحجم الذاكرة الذي يحتاجه النموذج المحلي يعتمد على النموذج الذي تختاره لا على التطبيق.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
            '**تتبع الخطوات صفحة التنزيل ووصف أول تشغيل لدى الشركة؛ ولم تنفّذها PromptQuorum.**',
          ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'شغّل المثبّت الخاص بنظامك. في macOS يُحظر أول تشغيل إلى أن تختار «فتح على أي حال» من إعدادات النظام ثم الخصوصية والأمان؛ وقد يعرض Windows تحذير SmartScreen فتختار «مزيد من المعلومات» ثم «تشغيل على أي حال».',
          },
          {
            title: 'دعه يُعدّ نفسه',
            whyItMatters: 'عند أول تشغيل يثبّت التطبيق واجهته الخلفية بنفسه وهذا يستغرق دقيقة أو دقيقتين، ثم يفتح محادثة مباشرة.',
          },
          {
            title: 'اربط نموذجًا',
            whyItMatters: 'اختر Ollama أو مفاتيح API الخاصة بك أو Radient Pass؛ ويمكنك التبديل لكل وكيل أو لكل محادثة.',
          },
          {
            title: 'اطلب شيئًا صغيرًا',
            whyItMatters: 'يعرض الوكيل خطته ويراجعها وكيل منفصل، وتوافق أنت قبل أن يُنفَّذ أي شيء.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
            '**كل بند أدناه مصدره موقع الشركة أو ملف README للمشروع، ولم يُختبر أي منها بصورة مستقلة.**',
          ],
        items: [
            '**خطّط وراجع ووافق.** يعرض الوكيل خطة، ويراجع وكيل أمان منفصل كل إجراء مقترح، وتعطي أنت الموافقة. وبحسب README تعمل القراءة تلقائيًا، أما الكتابة وأوامر الصدفة فتعرض الأمر بدقة وتسأل أولًا.',
            '**يكتب أدواته بنفسه.** حين تحتاج مهمة إلى قدرة غير موجودة يكتب الوكيل شيفرة لتوفيرها، ويعرض كل أمر ومخرجاته كإيصال.',
            '**الفرق والوكلاء الفرعيون.** يمكن جمع الوكلاء في فرق يقودها مدير، وتقسيم العمل بين وكلاء فرعيين يعملون بالتوازي، يعرض كل منهم زمنه واستهلاكه للسياق وتكلفته.',
            '**الجدولة والذاكرة.** تعمل المهام المتكررة في الخلفية وفق جدول، ويحتفظ الوكيل بما تعلّمه إياه للطلبات اللاحقة.',
            '**إضافات سطح المكتب.** لوحة متصفح Chromium تطلب موافقتك قبل أن يتصرف الوكيل في صفحة، ولوحة ملفات تفتح Markdown والشيفرة وملفات PDF والجداول والصور والصوت والفيديو.',
            '**الاتصالات.** تُدعم خوادم MCP، ويمكن إقران أجهزتك في شبكة متشابكة لتصل إلى الجلسات من أي منها.',
          ],
        note: 'يصف README أيضًا الوصول من الهاتف وإضافة متصفح؛ وكلاهما يحتاج إعدادًا إضافيًا لم تفحصه هذه المراجعة.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
            '**تقول الشركة إن ملفاتك لا تحتاج إلى مغادرة حاسوبك، بينما يذهب نص محادثتك إلى النموذج الذي تختاره.** مع نموذج Ollama محلي لا يغادر شيء الجهاز؛ ومع Radient Pass أو مفاتيح API الخاصة بك تذهب المحادثة إلى ذلك المزوّد وفق شروطه. لا يلزم حساب إلا للمنصة السحابية الاختيارية.',
            'البحث في الويب مفعّل افتراضيًا بحسب README ويمكن إيقافه بالأمر `lop search off`، ولجلب صفحات الويب مفتاح مستقل. وافتراضيًا يستطيع الأمر الذي ينفّذه الوكيل رؤية متغيرات البيئة لديك. وتقول سياسة الخصوصية، السارية من 4 أبريل 2025، إن Radient قد تجمع بيانات الجهاز والاستخدام والسجلات، وتجمع الاسم والبريد الإلكتروني لحسابات السحابة.',
          ],
        callouts: [
          { type: 'note', text: 'هذه إفادات من الشركة وليست نتائج تدقيق. لم تفحص PromptQuorum حركة الشبكة للتطبيق ولم تتأكد من البيانات التي يمنعها كل إعداد.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
            '**مستخدمو سطح المكتب الذين لديهم أعمال ملفات** مثل فرز المستندات أو إعادة تسميتها أو تلخيصها، ويريدون وكيلًا يسأل قبل أن يكتب.',
            '**مستخدمو Ollama** الذين يبحثون عن تطبيق وكلاء رسومي يمكنه العمل بنموذج محلي.',
            '**المهتمون بالتجريب** ممن يقدّرون مشروعًا برخصة MIT ومستودعات مفتوحة وإصدارات متكررة.',
          ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
            '**جودة المهام وسرعتها.** لم تشغّل PromptQuorum التطبيق، لذا لم تُعَد أمثلة الشركة، مثل مهمة الفواتير.',
            '**نتائج النماذج المحلية.** لا تذكر المصادر حدًّا أدنى للنموذج أو العتاد لعمل وكيل مفيد، ولم تُجرَّب النماذج المحلية.',
            '**فحص الأمان.** مدى موثوقية اكتشاف الوكيل المراجع لأمر ضار هو وصف الشركة، وليس خاصية جرى اختبارها.',
            '**توقيع الشيفرة.** تحذّر صفحة التنزيل من رسائل macOS وWindows؛ ولم نتحقق من توقيع المثبّتات.',
            '**اختلاف الإصدارات.** ما زال الموقع يعرض الإصدار 0.12.8 وتُصدر المستودعات عدة مرات في اليوم، فقد تتغير الميزات بين تنزيلك وهذه المراجعة.',
          ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
            { 'التطبيق': '[Open Interpreter](/ar/power-local-llm/open-interpreter-review)', 'المنصات': 'Windows وmacOS وLinux', 'السعر / الرخصة': 'مجاني / Apache 2.0', 'الفرق الأبرز': 'يتيح لنموذج محلي التحكم بحاسوبك وتنفيذ الشيفرة؛ طريقة التثبيت والرخصة في مراجعته الخاصة' },
            { 'التطبيق': '[Agent Zero](/ar/power-local-llm/agent-zero-review)', 'المنصات': 'Windows وmacOS وLinux', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'وكيل مستضاف ذاتيًا يعمل داخل Docker بواجهة ويب بدل مثبّت أصلي' },
            { 'التطبيق': '[Nanobot](/ar/power-local-llm/nanobot-review)', 'المنصات': 'Windows وmacOS وLinux', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'وكيل شخصي مستضاف ذاتيًا بذاكرة دائمة وأدوات MCP وتكامل مع تطبيقات المحادثة، يُستخدم عبر الويب أو سطر الأوامر' },
          ],
        note: 'هذه مراجعات PromptQuorum في القطاع نفسه؛ تأكد من السعر والرخصة والمنصات الحالية في موقع كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل Local Operator دون اتصال بالإنترنت كليًا؟',
            a: 'بحسب الشركة نعم، مع نموذج Ollama محلي تصفه بأنه الخيار الأكثر خصوصية ويعمل دون اتصال. البحث في الويب مفعّل افتراضيًا، فأوقفه إن كان يجب ألا يغادر شيء الجهاز.',
          },
          {
            q: 'لماذا تعرض صفحة التنزيل إصدارًا أقدم؟',
            a: 'ما زالت الصفحة تذكر الإصدار 0.12.8 بتاريخ 11 فبراير 2026 وملفات macOS باسم 0.19.7، بينما يعرض GitHub Releases تطبيق سطح المكتب 0.42.2 بتاريخ 24 أكتوبر 2026. نزّل المثبّتات من صفحة الإصدارات على GitHub.',
          },
          {
            q: 'هل يغيّر الوكيل الملفات دون سؤال؟',
            a: 'افتراضيًا يسأل أولًا. يقول README إن القراءة تعمل تلقائيًا وإن الكتابة وأوامر الصدفة تعرض الأمر بدقة، وإن إيقاف الموافقات خيار صريح.',
          },
          {
            q: 'كم يكلّف Radient Pass؟',
            a: 'لا تذكر المصادر هنا سعرًا: يوصف Radient Pass بأنه رصيد مسبق الدفع اختياري لدى مزوّدين مستضافين، ويُحاسَب بحسب الحوسبة المستخدمة. راجع صفحة الشركة قبل الاعتماد عليه.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Local Operator طريقة بإصدارات نشطة ورخصة MIT لتشغيل وكيل يكتب الشيفرة على حاسوبك، مع خطوة موافقة قبل كتابة أي شيء أو تنفيذه وإمكانية استخدام نموذج Ollama محلي. في المقابل لم يُختبر هنا، والنموذج المستضاف يرى محادثتك، والموقع متأخر عن الإصدارات، والمشروع يُصدر بوتيرة تجعل هذه المراجعة تتقادم سريعًا. يناسب مستخدمي Mac وWindows وLinux الذين يريدون وكيلًا رسوميًا لملفاتهم ويتحققون من الإصدار وإعداد النموذج وإعداد البحث في الويب قبل أن يأتمنوه على أي شيء حساس.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
            '[موقع Local Operator](https://local-operator.com) — الصفحة الرئيسية وصفحة التنزيل وقسما الخصوصية والتسعير، جرى التحقق منها في 24 أكتوبر 2026.',
            '[إصدارات local-operator-ui](https://github.com/damianvtran/local-operator-ui/releases) — تطبيق سطح المكتب 0.42.2 وملفات تثبيته، نُشر في 24 أكتوبر 2026.',
            '[مستودع local-operator](https://github.com/damianvtran/local-operator) — README ورخصة MIT وإصدارات محرك الوكلاء، جرى التحقق منها في 24 أكتوبر 2026.',
            '[سياسة الخصوصية](https://local-operator.com/privacy-policy) — جمع البيانات ومشاركتها، سارية من 4 أبريل 2025.',
          ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
            '[مراجعة Open Interpreter](/ar/power-local-llm/open-interpreter-review) — وكيل يتيح لنموذج التحكم بحاسوبك وتنفيذ الشيفرة.',
            '[مراجعة Agent Zero](/ar/power-local-llm/agent-zero-review) — وكيل مستضاف ذاتيًا يعمل داخل Docker.',
            '[مراجعة Nanobot](/ar/power-local-llm/nanobot-review) — وكيل شخصي مستضاف ذاتيًا بذاكرة دائمة.',
            '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/local-operator-review-hero-zh.webp',
    title: 'Local Operator 评测：在你电脑上运行代码的免费桌面 AI 智能体',
    seoTitle: 'Local Operator 评测：免费桌面 AI 智能体应用',
    intro:
      'Local Operator 是 [Radient Inc.](https://radienthq.com) 推出的免费桌面应用，采用 MIT 许可证：AI 智能体先规划任务，由另一个智能体检查计划，再在你自己的 Mac、Windows 或 Linux 电脑上编写并运行代码。模型可以是本地 Ollama 模型、你自己的 API 密钥，或厂商托管的 Radient Pass。本评测依据厂商网站、两个 GitHub 仓库和隐私政策（2026 年 10 月 24 日核查），PromptQuorum 未实际测试该应用。',
    metaDescription:
      'Local Operator 评测：适用于 Mac、Windows 和 Linux 的免费 MIT 许可 AI 智能体，支持本地 Ollama 与托管模型，涵盖隐私、版本与安装（未实测）。',
    twitterDescription:
      'Local Operator 评测：免费开源的桌面智能体，用本地或托管模型在你的电脑上运行代码。来源已证实和未证实的内容。',
    audience:
      '想让带审批步骤的 AI 智能体处理自己文件的 Mac、Windows 和 Linux 用户，需要了解哪些数据留在电脑上、模型提供方能看到什么，以及来源未能证实的内容。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Local Operator 评测',
    targetKeywords: [
      'local operator 评测',
      'local operator ai 智能体',
      'local operator ollama',
      '开源桌面 ai 智能体',
      '在电脑上运行代码的 ai 智能体',
      'local operator radient',
      'local operator 下载',
    ],
    current_models_mentioned: ['Ollama', 'LM Studio', 'vLLM', 'llama.cpp'],
    current_hardware_mentioned: ['Apple silicon', 'x86_64'],
    leadAnswerBlock:
      '**Local Operator（桌面应用 0.42.2 版，2026 年 10 月 24 日发布）是一款免费、采用 MIT 许可证的桌面应用，其 AI 智能体在你自己的电脑上编写并运行代码。** 智能体和你的文件留在本地，但模型可以是托管的，此时对话内容会发送给模型提供方。本文所有说法均来自厂商网站、GitHub 仓库和隐私政策。',
    quickAnswerTop: {
      zh: {
        question: 'Local Operator 会把我的数据留在电脑上吗？',
        answer:
          '文件会，对话则取决于模型。据厂商所述，文件留在电脑上，而对话文本会发送给你选择的模型，因此只有本地 Ollama 模型才能让一切都留在本机。智能体默认还会联网搜索，可以关闭。',
        bullets: [
          '你用日常语言提出需求，智能体会先展示计划。',
          '在你批准之前，独立的安全检查智能体会审查每个操作。',
          '定时智能体可以在后台重复执行任务。',
          '智能体团队和子智能体可以分担较大的任务。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Local Operator 是什么？', anchor: 'what-is-local-operator' },
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
          { type: 'one-sentence', text: 'Local Operator 是一款免费开源的桌面应用，AI 智能体在你的电脑上编写并运行代码，可使用本地 Ollama 模型、你自己的 API 密钥或厂商托管的 Radient Pass。' },
          { type: 'plain-terms', text: '你描述一项工作，比如整理发票文件夹，应用会给出计划，第二个智能体检查，你批准后，代码就在你的电脑上运行。' },
        ],
        items: [
            '维护情况：桌面应用（0.42.2）和智能体运行时（0.88.3）都在 2026 年 10 月 24 日发布了版本，因此不适用项目停更警告。',
            '模型：Ollama、LM Studio、vLLM、llama.cpp 等本地服务器，或通过你自己的密钥、Radient Pass 使用托管服务商。',
            '安全：读取操作自动执行，写入文件和 shell 命令会先询问并显示完整命令。',
            '费用：应用免费开源，据厂商所述，唯一可能产生的费用是 AI 模型的使用量。',
            '厂商：Radient Inc.，两个仓库均采用 MIT 许可证发布。',
          ],
        callouts: [
          { type: 'note', text: '本评测依据厂商网站、GitHub 仓库和隐私政策（2026 年 10 月 24 日核查）。PromptQuorum 未安装或运行该应用，因此未评估任务质量与速度。' },
        ],
      },
      overview: {
        id: 'what-is-local-operator',
        title: 'Local Operator 是什么？',
        content: [
            '**Local Operator 是 Radient Inc. 推出的开源智能体应用，它把日常语言的请求变成计划，再在你的电脑上运行真实代码来完成。** 它由两部分组成：仓库 [local-operator-ui](https://github.com/damianvtran/local-operator-ui) 中的桌面应用，以及 [local-operator](https://github.com/damianvtran/local-operator) 中的 Python 智能体运行时，后者也可作为名为 `lop` 的终端应用使用。',
            '网站把它描述为一支智能体团队：你可以保存智能体，把它们与一名管理者组成团队，安排定期任务，并从由 Radient 提供支持的 Agent Hub 获取他人分享的智能体。核心仓库创建于 2025 年 1 月 25 日。',
          ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
            '**Local Operator 可免费下载，支持 macOS、Windows 和 Linux（x86_64），安装包托管在 GitHub Releases。**',
          ],
        columns: [ '选项', '获取方式' ],
        rows: [
            { '选项': 'macOS', '获取方式': '[GitHub Releases 上的桌面应用](https://github.com/damianvtran/local-operator-ui/releases/latest)：Apple 芯片版和 Intel 版 .dmg' },
            { '选项': 'Windows', '获取方式': '同一发布页：x64、Arm64 或二合一的 .exe 安装程序' },
            { '选项': 'Linux（x86_64）', '获取方式': '同一发布页：.AppImage、.deb 和 .rpm；没有 Arm64 的 Linux 构建' },
            { '选项': '终端', '获取方式': '`npx local-operator-ui`（需要 Node.js 22.13.1 或更高版本）' },
            { '选项': '官方网站', '获取方式': '[local-operator.com](https://local-operator.com)' },
            { '选项': '隐私政策', '获取方式': '[local-operator.com/privacy-policy](https://local-operator.com/privacy-policy)' },
            { '选项': '源代码', '获取方式': 'MIT 许可证：[local-operator](https://github.com/damianvtran/local-operator)（智能体运行时）和 [local-operator-ui](https://github.com/damianvtran/local-operator-ui)（桌面应用）' },
          ],
        note: '评测版本：桌面应用 0.42.2（据 GitHub 发布页，2026 年 10 月 24 日发布），基于智能体运行时 0.88.3。网站下载页仍显示 2026 年 2 月 11 日的 0.12.8 版，macOS 文件名为 0.19.7，已经过时；GitHub Releases 更新，因此本文以它为准。两个仓库在 2026 年 10 月 24 日都发布了多个版本。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: [
            '**下载页列出的要求是 macOS 11 或更高版本、Windows 10 或更高版本、较新的 x86_64 Linux，外加一个可对话的模型。** 页面未给出内存或显存的最低要求。',
          ],
        columns: [ '项目', '来源说明' ],
        rows: [
            { '项目': 'macOS', '来源说明': 'macOS 11（Big Sur）或更高版本，Intel 或 Apple 芯片' },
            { '项目': 'Windows', '来源说明': 'Windows 10 或更高版本，x64 或 Arm64' },
            { '项目': 'Linux', '来源说明': '较新的 x86_64 发行版，例如 Ubuntu 18.04+、Debian 10+ 或 Fedora 32+；.deb 和 .rpm 会安装 Python 3.12 软件包' },
            { '项目': '磁盘', '来源说明': '安装程序需要几百 MB，另需为首次运行时应用搭建的后端预留空间' },
            { '项目': '模型', '来源说明': '本地 Ollama 模型（免费，可离线）、你自己的 API 密钥，或 Radient Pass 余额' },
          ],
        note: '该页面早于当前版本，下载时请再次核对系统要求。本地模型需要多少内存取决于你选的模型，而不是应用本身。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
            '**以下步骤依据厂商的下载页和首次运行说明，PromptQuorum 未实际执行。**',
          ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '运行适合你系统的安装程序。在 macOS 上，首次启动会被拦截，需在“系统设置”的“隐私与安全性”中选择“仍要打开”；Windows 可能弹出 SmartScreen 警告，需点“更多信息”再选“仍要运行”。',
          },
          {
            title: '等待初始化',
            whyItMatters: '首次运行时应用会安装自己的后端，需要一到两分钟，并直接打开聊天界面。',
          },
          {
            title: '连接模型',
            whyItMatters: '在 Ollama、你自己的 API 密钥和 Radient Pass 中选择；可按智能体或按对话切换。',
          },
          {
            title: '先试一件小事',
            whyItMatters: '智能体展示计划，独立的智能体检查，你批准后才会运行任何内容。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: [
            '**以下每一项都来自厂商网站或项目 README，均未经独立测试。**',
          ],
        items: [
            '**计划、检查、批准。** 智能体先展示计划，独立的安全检查智能体审查每个拟执行的操作，再由你批准。据 README，读取操作自动执行，写入和 shell 命令会显示完整命令并先询问。',
            '**自己编写工具。** 当任务需要不存在的能力时，智能体会编写代码来补足，并把每条命令及其输出作为记录展示出来。',
            '**团队与子智能体。** 智能体可与管理者组成团队，工作可分给并行运行的子智能体，每个子智能体显示耗时、上下文用量和费用。',
            '**定时与记忆。** 定期任务按计划在后台运行，智能体会记住你教给它的内容，用于之后的请求。',
            '**桌面端附加功能。** 带有操作前确认的 Chromium 浏览器窗格，以及可打开 Markdown、代码、PDF、电子表格、图片、音频和视频的文件画布。',
            '**连接。** 支持 MCP 服务器，你自己的设备可以配对成网状网络，从任一设备访问会话。',
          ],
        note: 'README 还介绍了手机访问和浏览器扩展，两者都需要额外设置，本评测未予检验。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
            '**厂商称你的文件无需离开电脑，而对话文本会发送给你选择的模型。** 使用本地 Ollama 模型时没有任何内容离开本机；使用 Radient Pass 或你自己的 API 密钥时，对话会发往该提供方，并适用其条款。无需账户，仅在使用可选的云平台时才需要。',
            '据 README，联网搜索默认开启，可用 `lop search off` 关闭；抓取网页另有单独开关。默认情况下，智能体运行的命令可以看到你的环境变量。隐私政策（2025 年 4 月 4 日生效）称，Radient 可能收集设备、使用和日志数据，云账户还会收集姓名和电子邮件。',
          ],
        callouts: [
          { type: 'note', text: '以上是厂商的声明，而非审计结果。PromptQuorum 未检查该应用的网络流量，也未确认每项设置究竟会阻止哪些数据。' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
            '**有文件整理需求的桌面用户**，例如分类、重命名或总结文档，希望智能体在写入前先询问。',
            '**Ollama 用户**，想要一个可配合本地模型运行的图形界面智能体应用。',
            '**喜欢折腾的人**，看重采用 MIT 许可证、仓库公开且更新频繁的项目。',
          ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
            '**任务质量与速度。** PromptQuorum 未运行该应用，厂商的示例（如发票整理）未被复现。',
            '**本地模型的效果。** 来源没有给出有效完成智能体工作所需的最低模型或硬件，我们也没有试用本地模型。',
            '**安全检查。** 独立的检查智能体能多可靠地发现有害命令，只是厂商的说法，并非经过测试的特性。',
            '**代码签名。** 下载页提到了 macOS 和 Windows 的提示；我们未核实安装程序是否已签名。',
            '**版本漂移。** 网站仍显示 0.12.8，而仓库一天发布多次，因此从你下载到本评测之间，功能可能已经变化。',
          ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
            { '应用': '[Open Interpreter](/zh/power-local-llm/open-interpreter-review)', '平台': 'Windows、macOS、Linux', '价格 / 许可证': '免费 / Apache 2.0', '主要区别': '让本地模型控制你的电脑并运行代码；安装方式和许可证见其自己的评测' },
            { '应用': '[Agent Zero](/zh/power-local-llm/agent-zero-review)', '平台': 'Windows、macOS、Linux', '价格 / 许可证': '免费 / MIT', '主要区别': '在 Docker 中运行的自托管智能体，使用网页界面而非原生安装程序' },
            { '应用': '[Nanobot](/zh/power-local-llm/nanobot-review)', '平台': 'Windows、macOS、Linux', '价格 / 许可证': '免费 / MIT', '主要区别': '带持久记忆、MCP 工具和聊天应用集成的自托管个人智能体，通过网页或命令行使用' },
          ],
        note: '这些是 PromptQuorum 同一细分领域的评测；请在各应用官网确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Local Operator 能完全离线运行吗？',
            a: '据厂商所述，搭配本地 Ollama 模型可以，厂商称其为最私密的选择，并且可离线使用。联网搜索默认开启，如果不希望任何内容离开本机，请将其关闭。',
          },
          {
            q: '为什么下载页显示的是较旧的版本？',
            a: '该页面仍列出 2026 年 2 月 11 日的 0.12.8 版以及名为 0.19.7 的 macOS 文件，而 GitHub Releases 显示的是 2026 年 10 月 24 日的桌面应用 0.42.2。请从 GitHub 发布页获取安装程序。',
          },
          {
            q: '智能体会在不询问的情况下修改文件吗？',
            a: '默认会先询问。README 说明，读取自动执行，写入和 shell 命令会显示完整命令，关闭审批需要用户明确选择。',
          },
          {
            q: 'Radient Pass 要多少钱？',
            a: '来源未在此给出价格：Radient Pass 被描述为面向托管服务商的可选预付余额，按所用算力计费。依赖它之前请先查看厂商页面。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Local Operator 是一种发布频繁、采用 MIT 许可证的方式，让会写代码的智能体在你自己的电脑上运行，在写入或执行任何内容之前有审批步骤，也可以使用本地 Ollama 模型。不足之处在于：本文未实测，托管模型会看到你的对话，网站落后于版本发布，项目发布太频繁，本评测很快就会过时。它适合想用图形界面智能体处理自己文件的 Mac、Windows 和 Linux 用户，并且需要在交给它敏感事务前先检查版本、模型设置和联网搜索设置。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
            '[Local Operator 官网](https://local-operator.com) — 首页、下载页、隐私与定价部分，2026 年 10 月 24 日核查。',
            '[local-operator-ui 发布页](https://github.com/damianvtran/local-operator-ui/releases) — 桌面应用 0.42.2 及其安装文件，2026 年 10 月 24 日发布。',
            '[local-operator 仓库](https://github.com/damianvtran/local-operator) — README、MIT 许可证和智能体运行时的发布记录，2026 年 10 月 24 日核查。',
            '[隐私政策](https://local-operator.com/privacy-policy) — 数据收集与共享，2025 年 4 月 4 日生效。',
          ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
            '[Open Interpreter 评测](/zh/power-local-llm/open-interpreter-review) — 让模型控制你的电脑并运行代码的智能体。',
            '[Agent Zero 评测](/zh/power-local-llm/agent-zero-review) — 在 Docker 中运行的自托管智能体。',
            '[Nanobot 评测](/zh/power-local-llm/nanobot-review) — 带持久记忆的自托管个人智能体。',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/local-operator-review-hero-ko.webp',
    title: 'Local Operator 리뷰: 내 컴퓨터에서 코드를 실행하는 무료 AI 에이전트',
    seoTitle: 'Local Operator 리뷰: 무료 데스크톱 AI 에이전트 앱',
    intro:
      'Local Operator는 [Radient Inc.](https://radienthq.com)가 만든 MIT 라이선스의 무료 데스크톱 앱으로, AI 에이전트가 작업을 계획하고 별도의 에이전트가 계획을 점검한 뒤 사용자의 Mac, Windows 또는 Linux 컴퓨터에서 코드를 작성해 실행합니다. 모델은 로컬 Ollama 모델, 직접 발급한 API 키, 제작사가 호스팅하는 Radient Pass 중에서 고를 수 있습니다. 이 리뷰는 제작사 웹사이트, 두 개의 GitHub 저장소, 개인정보 처리방침(2026년 10월 24일 확인)을 바탕으로 하며, PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription:
      'Local Operator 리뷰: Mac, Windows, Linux용 MIT 라이선스 무료 AI 에이전트. 로컬 Ollama와 호스팅 모델, 개인정보, 버전, 설치를 정리했습니다(미검증).',
    twitterDescription:
      'Local Operator 리뷰: 로컬 또는 호스팅 모델로 내 컴퓨터에서 코드를 실행하는 무료 오픈소스 데스크톱 에이전트. 출처가 확인한 내용과 확인하지 못한 내용.',
    audience:
      '자신의 파일을 승인 절차가 있는 AI 에이전트에 맡기려는 Mac, Windows, Linux 사용자로, 컴퓨터에 남는 데이터, 모델 제공자가 보는 데이터, 출처가 확인하지 못한 내용을 알고 싶은 분.',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Local Operator 리뷰',
    targetKeywords: [
      'local operator 리뷰',
      'local operator ai 에이전트',
      'local operator ollama',
      '오픈소스 데스크톱 ai 에이전트',
      '내 컴퓨터에서 코드를 실행하는 ai 에이전트',
      'local operator radient',
      'local operator 다운로드',
    ],
    current_models_mentioned: ['Ollama', 'LM Studio', 'vLLM', 'llama.cpp'],
    current_hardware_mentioned: ['Apple silicon', 'x86_64'],
    leadAnswerBlock:
      '**Local Operator(데스크톱 앱 0.42.2 버전, 2026년 10월 24일 출시)는 AI 에이전트가 사용자의 컴퓨터에서 코드를 작성해 실행하는 MIT 라이선스의 무료 데스크톱 앱입니다.** 에이전트와 파일은 로컬에 남지만 모델은 호스팅형일 수 있으며, 그 경우 대화가 모델 제공자에게 전달됩니다. 여기의 모든 내용은 제작사 사이트, GitHub 저장소, 개인정보 처리방침에 근거합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Local Operator는 내 데이터를 컴퓨터 안에 두나요?',
        answer:
          '파일은 그렇지만 대화는 모델에 따라 다릅니다. 제작사에 따르면 파일은 컴퓨터에 남고 대화 텍스트는 선택한 모델로 전송되므로, 모든 것을 내 컴퓨터에 두려면 로컬 Ollama 모델을 써야 합니다. 에이전트는 기본적으로 웹 검색도 하지만 끌 수 있습니다.',
        bullets: [
          '일상적인 말로 요청하면 에이전트가 먼저 계획을 보여 줍니다.',
          '승인하기 전에 별도의 보안 점검 에이전트가 각 동작을 검토합니다.',
          '예약된 에이전트는 백그라운드에서 작업을 반복할 수 있습니다.',
          '에이전트 팀과 하위 에이전트가 큰 작업을 나누어 맡을 수 있습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Local Operator란?', anchor: 'what-is-local-operator' },
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
          { type: 'one-sentence', text: 'Local Operator는 AI 에이전트가 내 컴퓨터에서 코드를 작성해 실행하는 무료 오픈소스 데스크톱 앱이며, 로컬 Ollama 모델, 직접 발급한 API 키, 제작사가 호스팅하는 Radient Pass를 쓸 수 있습니다.' },
          { type: 'plain-terms', text: '송장 폴더 정리 같은 작업을 설명하면 앱이 계획을 보여 주고, 두 번째 에이전트가 점검하며, 승인하면 코드가 내 컴퓨터에서 실행됩니다.' },
        ],
        items: [
            '유지 관리: 데스크톱 앱(0.42.2)과 에이전트 런타임(0.88.3) 모두 2026년 10월 24일에 릴리스되었으므로 방치된 프로젝트 경고는 해당되지 않습니다.',
            '모델: Ollama, LM Studio, vLLM, llama.cpp 같은 로컬 서버, 또는 직접 발급한 키나 Radient Pass를 통한 호스팅 제공자.',
            '안전: 읽기는 자동으로 실행되고, 파일 쓰기와 셸 명령은 먼저 정확한 명령을 보여 주며 확인을 요청합니다.',
            '비용: 앱은 무료 오픈소스이며, 제작사에 따르면 비용이 들 수 있는 것은 AI 모델 사용량뿐입니다.',
            '제작사: Radient Inc.이며 두 저장소 모두 MIT 라이선스로 공개되어 있습니다.',
          ],
        callouts: [
          { type: 'note', text: '이 리뷰는 제작사 웹사이트, GitHub 저장소, 개인정보 처리방침(2026년 10월 24일 확인)을 바탕으로 합니다. PromptQuorum은 앱을 설치하거나 실행하지 않았으므로 작업 품질과 속도는 평가하지 않았습니다.' },
        ],
      },
      overview: {
        id: 'what-is-local-operator',
        title: 'Local Operator란?',
        content: [
            '**Local Operator는 Radient Inc.의 오픈소스 에이전트 앱으로, 일상적인 말로 한 요청을 계획으로 바꾸고 실제 코드를 내 컴퓨터에서 실행해 작업을 수행합니다.** 구성은 두 부분입니다. 저장소 [local-operator-ui](https://github.com/damianvtran/local-operator-ui)의 데스크톱 앱과 [local-operator](https://github.com/damianvtran/local-operator)의 Python 에이전트 런타임이며, 후자는 `lop`라는 터미널 앱으로도 실행됩니다.',
            '사이트는 이를 에이전트 팀으로 소개합니다. 에이전트를 저장하고, 관리자와 함께 팀으로 묶고, 반복 작업을 예약하며, Radient가 운영하는 Agent Hub에서 공유된 에이전트를 가져올 수 있습니다. 핵심 저장소는 2025년 1월 25일에 만들어졌습니다.',
          ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
            '**Local Operator는 macOS, Windows, Linux(x86_64)용 무료 다운로드이며, 설치 파일은 GitHub Releases에 있습니다.**',
          ],
        columns: [ '옵션', '입수 방법' ],
        rows: [
            { '옵션': 'macOS', '입수 방법': '[GitHub Releases의 데스크톱 앱](https://github.com/damianvtran/local-operator-ui/releases/latest): Apple 실리콘용과 Intel용 .dmg' },
            { '옵션': 'Windows', '입수 방법': '같은 릴리스 페이지: x64용, Arm64용 또는 통합 .exe 설치 프로그램' },
            { '옵션': 'Linux(x86_64)', '입수 방법': '같은 릴리스 페이지: .AppImage, .deb, .rpm. Arm64 Linux 빌드는 없습니다' },
            { '옵션': '터미널', '입수 방법': '`npx local-operator-ui`(Node.js 22.13.1 이상 필요)' },
            { '옵션': '웹사이트', '입수 방법': '[local-operator.com](https://local-operator.com)' },
            { '옵션': '개인정보 처리방침', '입수 방법': '[local-operator.com/privacy-policy](https://local-operator.com/privacy-policy)' },
            { '옵션': '소스 코드', '입수 방법': 'MIT 라이선스: [local-operator](https://github.com/damianvtran/local-operator)(에이전트 런타임), [local-operator-ui](https://github.com/damianvtran/local-operator-ui)(데스크톱 앱)' },
          ],
        note: '확인한 버전: 데스크톱 앱 0.42.2(GitHub 릴리스 기준 2026년 10월 24일 출시), 에이전트 런타임 0.88.3 기반. 웹사이트의 다운로드 페이지에는 아직 2026년 2월 11일의 0.12.8 버전과 0.19.7이라는 macOS 파일이 표시되어 있어 오래된 정보입니다. GitHub Releases가 더 최신이므로 여기서는 그쪽을 기준으로 했습니다. 두 저장소 모두 2026년 10월 24일에 여러 차례 릴리스되었습니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: [
            '**다운로드 페이지는 macOS 11 이상, Windows 10 이상, 최신 x86_64 Linux, 그리고 대화할 모델을 요구 사항으로 듭니다.** RAM이나 VRAM 최소 사양은 명시하지 않습니다.',
          ],
        columns: [ '항목', '출처의 설명' ],
        rows: [
            { '항목': 'macOS', '출처의 설명': 'macOS 11(Big Sur) 이상, Intel 또는 Apple 실리콘' },
            { '항목': 'Windows', '출처의 설명': 'Windows 10 이상, x64 또는 Arm64' },
            { '항목': 'Linux', '출처의 설명': '최신 x86_64 배포판(예: Ubuntu 18.04+, Debian 10+, Fedora 32+). .deb와 .rpm은 Python 3.12 패키지를 설치합니다' },
            { '항목': '디스크', '출처의 설명': '설치 프로그램용 수백 MB와, 첫 실행 때 앱이 설정하는 백엔드를 위한 공간' },
            { '항목': '모델', '출처의 설명': '로컬 Ollama 모델(무료, 오프라인 가능), 직접 발급한 API 키 또는 Radient Pass 잔액' },
          ],
        note: '이 페이지는 현재 릴리스보다 오래되었으므로 다운로드할 때 시스템 요구 사항을 다시 확인하십시오. 로컬 모델에 필요한 메모리는 앱이 아니라 선택한 모델에 따라 달라집니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
            '**아래 단계는 제작사의 다운로드 페이지와 첫 실행 설명을 따른 것이며, PromptQuorum은 직접 실행하지 않았습니다.**',
          ],
        numberedItems: [
          {
            title: '앱 설치하기',
            whyItMatters: '사용 중인 시스템용 설치 프로그램을 실행합니다. macOS에서는 시스템 설정의 개인정보 보호 및 보안에서 "그래도 열기"를 선택할 때까지 첫 실행이 차단되며, Windows에서는 "추가 정보" 후 "실행"을 누르는 SmartScreen 경고가 나타날 수 있습니다.',
          },
          {
            title: '설정이 끝나기를 기다리기',
            whyItMatters: '첫 실행 때 앱이 자체 백엔드를 설치하며 1~2분이 걸리고, 곧바로 채팅 화면이 열립니다.',
          },
          {
            title: '모델 연결하기',
            whyItMatters: 'Ollama, 직접 발급한 API 키, Radient Pass 중에서 고릅니다. 에이전트별 또는 대화별로 바꿀 수 있습니다.',
          },
          {
            title: '작은 작업부터 요청하기',
            whyItMatters: '에이전트가 계획을 보여 주고 별도의 에이전트가 점검하며, 승인하기 전에는 아무것도 실행되지 않습니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
            '**아래 항목은 모두 제작사 웹사이트 또는 프로젝트 README에서 나온 것이며, 독립적으로 테스트한 것은 없습니다.**',
          ],
        items: [
            '**계획, 점검, 승인.** 에이전트가 계획을 보여 주고, 별도의 보안 점검 에이전트가 제안된 각 동작을 검토하며, 사용자가 승인합니다. README에 따르면 읽기는 자동으로 실행되고 쓰기와 셸 명령은 정확한 명령을 보여 주며 먼저 확인을 요청합니다.',
            '**자체 도구 작성.** 작업에 없는 기능이 필요하면 에이전트가 코드를 작성해 해결하고, 각 명령과 그 출력을 기록으로 보여 줍니다.',
            '**팀과 하위 에이전트.** 에이전트를 관리자와 함께 팀으로 묶을 수 있고, 작업을 병렬로 실행되는 하위 에이전트에 나눌 수 있으며, 각 하위 에이전트는 경과 시간, 컨텍스트 사용량, 비용을 표시합니다.',
            '**예약과 기억.** 반복 작업은 일정에 따라 백그라운드에서 실행되고, 에이전트는 가르쳐 준 내용을 이후 요청에 활용합니다.',
            '**데스크톱 추가 기능.** 에이전트가 페이지에서 동작하기 전에 확인을 요청하는 Chromium 브라우저 창과, Markdown, 코드, PDF, 스프레드시트, 이미지, 오디오, 비디오를 여는 파일 캔버스.',
            '**연결.** MCP 서버를 지원하며, 가지고 있는 기기들을 메시로 연결해 어느 기기에서든 세션에 접근할 수 있습니다.',
          ],
        note: 'README에는 휴대폰 접속과 브라우저 확장 프로그램도 설명되어 있으나, 둘 다 추가 설정이 필요해 이 리뷰에서는 검토하지 않았습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
            '**제작사는 파일이 컴퓨터를 떠날 필요가 없으며 대화 텍스트는 선택한 모델로 전송된다고 밝힙니다.** 로컬 Ollama 모델을 쓰면 아무것도 밖으로 나가지 않고, Radient Pass나 직접 발급한 API 키를 쓰면 대화가 해당 제공자에게 전달되어 그 약관이 적용됩니다. 계정은 필요 없으며, 선택 사항인 클라우드 플랫폼을 쓸 때만 필요합니다.',
            'README에 따르면 웹 검색은 기본적으로 켜져 있으며 `lop search off`로 끌 수 있고, 웹 페이지 가져오기에는 별도의 스위치가 있습니다. 기본적으로 에이전트가 실행하는 명령은 사용자의 환경 변수를 볼 수 있습니다. 2025년 4월 4일부터 시행된 개인정보 처리방침은 Radient가 기기, 사용, 로그 데이터를 수집할 수 있고 클라우드 계정의 경우 이름과 이메일을 수집한다고 밝힙니다.',
          ],
        callouts: [
          { type: 'note', text: '이것은 제작사의 진술이며 감사 결과가 아닙니다. PromptQuorum은 앱의 네트워크 트래픽을 점검하지 않았고 각 설정이 어떤 데이터를 막는지도 확인하지 않았습니다.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
            '**파일 정리 작업이 있는 데스크톱 사용자**: 문서를 분류하거나 이름을 바꾸거나 요약할 때, 쓰기 전에 먼저 묻는 에이전트를 원하는 분.',
            '**Ollama 사용자**: 로컬 모델로 실행할 수 있는 그래픽 에이전트 앱을 찾는 분.',
            '**직접 만져 보기 좋아하는 분**: MIT 라이선스에 저장소가 공개되어 있고 릴리스가 잦은 프로젝트를 중시하는 분.',
          ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
            '**작업 품질과 속도.** PromptQuorum은 앱을 실행하지 않았으므로 송장 작업 같은 제작사의 예시는 재현하지 않았습니다.',
            '**로컬 모델의 결과.** 쓸 만한 에이전트 작업에 필요한 최소 모델이나 하드웨어는 출처에 없으며, 로컬 모델도 시험하지 않았습니다.',
            '**보안 점검.** 별도의 점검 에이전트가 해로운 명령을 얼마나 확실히 잡아내는지는 제작사의 설명일 뿐 테스트된 특성이 아닙니다.',
            '**코드 서명.** 다운로드 페이지는 macOS와 Windows의 경고창을 언급하지만, 설치 프로그램이 서명되어 있는지는 확인하지 않았습니다.',
            '**버전 불일치.** 웹사이트는 아직 0.12.8을 표시하고 저장소는 하루에도 여러 번 릴리스하므로, 다운로드 시점과 이 리뷰 사이에 기능이 바뀔 수 있습니다.',
          ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이점'],
        rows: [
            { '앱': '[Open Interpreter](/ko/power-local-llm/open-interpreter-review)', '플랫폼': 'Windows, macOS, Linux', '가격 / 라이선스': '무료 / Apache 2.0', '핵심 차이점': '로컬 모델이 컴퓨터를 제어하고 코드를 실행하게 함. 설치 방법과 라이선스는 해당 리뷰 참고' },
            { '앱': '[Agent Zero](/ko/power-local-llm/agent-zero-review)', '플랫폼': 'Windows, macOS, Linux', '가격 / 라이선스': '무료 / MIT', '핵심 차이점': 'Docker에서 실행되는 자체 호스팅 에이전트로, 네이티브 설치 프로그램 대신 웹 화면을 사용' },
            { '앱': '[Nanobot](/ko/power-local-llm/nanobot-review)', '플랫폼': 'Windows, macOS, Linux', '가격 / 라이선스': '무료 / MIT', '핵심 차이점': '영구 메모리, MCP 도구, 채팅 앱 연동을 갖춘 자체 호스팅 개인 에이전트로, 웹이나 명령줄에서 사용' },
          ],
        note: '같은 세그먼트의 PromptQuorum 리뷰입니다. 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 사이트에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Local Operator는 완전히 오프라인으로 실행할 수 있나요?',
            a: '제작사에 따르면 로컬 Ollama 모델로는 가능하며, 이를 가장 프라이빗한 선택지로 소개하고 오프라인에서도 동작한다고 합니다. 웹 검색은 기본적으로 켜져 있으므로 아무것도 밖으로 나가면 안 된다면 끄십시오.',
          },
          {
            q: '다운로드 페이지에 왜 이전 버전이 표시되나요?',
            a: '이 페이지에는 아직 2026년 2월 11일의 0.12.8 버전과 0.19.7이라는 macOS 파일이 남아 있지만, GitHub Releases에는 2026년 10월 24일의 데스크톱 앱 0.42.2가 표시됩니다. 설치 파일은 GitHub 릴리스 페이지에서 받으십시오.',
          },
          {
            q: '에이전트가 묻지 않고 파일을 바꾸나요?',
            a: '기본적으로는 먼저 묻습니다. README에 따르면 읽기는 자동으로 실행되고 쓰기와 셸 명령은 정확한 명령을 보여 주며, 승인을 끄는 것은 사용자가 명시적으로 선택해야 합니다.',
          },
          {
            q: 'Radient Pass는 얼마인가요?',
            a: '출처에는 가격이 나와 있지 않습니다. Radient Pass는 호스팅 제공자를 위한 선택형 선불 잔액이며 사용한 연산량만큼 청구된다고 설명됩니다. 의존하기 전에 제작사 페이지를 확인하십시오.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Local Operator는 릴리스가 활발하고 MIT 라이선스인, 코드를 작성하는 에이전트를 내 컴퓨터에서 실행하는 방법으로, 쓰거나 실행하기 전에 승인 단계가 있고 로컬 Ollama 모델도 쓸 수 있습니다. 반면 여기서는 테스트하지 않았고, 호스팅 모델은 대화를 보게 되며, 웹사이트가 릴리스를 따라가지 못하고, 릴리스가 너무 잦아 이 리뷰도 금방 낡습니다. 자신의 파일을 위한 그래픽 에이전트를 원하고, 민감한 작업을 맡기기 전에 버전과 모델 설정, 웹 검색 설정을 확인할 Mac, Windows, Linux 사용자에게 적합합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
            '[Local Operator 웹사이트](https://local-operator.com) — 홈, 다운로드 페이지, 개인정보와 요금 섹션(2026년 10월 24일 확인).',
            '[local-operator-ui 릴리스](https://github.com/damianvtran/local-operator-ui/releases) — 데스크톱 앱 0.42.2와 설치 파일(2026년 10월 24일 출시).',
            '[local-operator 저장소](https://github.com/damianvtran/local-operator) — README, MIT 라이선스, 에이전트 런타임 릴리스(2026년 10월 24일 확인).',
            '[개인정보 처리방침](https://local-operator.com/privacy-policy) — 데이터 수집과 공유(2025년 4월 4일 시행).',
          ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
            '[Open Interpreter 리뷰](/ko/power-local-llm/open-interpreter-review) — 모델이 컴퓨터를 제어하고 코드를 실행하게 하는 에이전트.',
            '[Agent Zero 리뷰](/ko/power-local-llm/agent-zero-review) — Docker에서 실행되는 자체 호스팅 에이전트.',
            '[Nanobot 리뷰](/ko/power-local-llm/nanobot-review) — 영구 메모리를 갖춘 자체 호스팅 개인 에이전트.',
            '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
          ],
      },
    },
  },
}
