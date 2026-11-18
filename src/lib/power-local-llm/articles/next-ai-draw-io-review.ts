// Next AI Draw.io Review: Chat-Driven draw.io Diagrams on the Web, Desktop and MCP
// Slug: next-ai-draw-io-review
// Companion to: presenton-review, kition-review, screenpipe-review
// Sources (all read 2026-11-18, no hands-on testing): maker website (home, /en/about, /en/docs), GitHub repository, README, LICENSE, release v0.5.1,
// docs/en/docker.md, docs/en/offline-deployment.md, docs/en/FAQ.md, env.example, and a third-party page (x-cmd). The request came from the site owner, not from the maker.
// Last upstream update 2026-11-14 (last commit; latest release v0.5.1 2026-10-31) => no stale warning.
// Theme: 'Productivity & Knowledge Tools' (same canonical theme as presenton-review / screenpipe-review).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/next-ai-draw-io-review-hero-en.webp',
    title: 'Next AI Draw.io Review: Chat-Driven draw.io Diagrams on the Web, Desktop and MCP',
    seoTitle: 'Next AI Draw.io Review: AI draw.io Editor and MCP',
    intro:
      'Next AI Draw.io is an open-source app where you describe a diagram in a chat and an AI draws it on an editable draw.io canvas. It runs in a browser, as a desktop app or as an MCP server, and you pick the AI provider and model yourself. This review is based on the maker\'s site, the GitHub repository and its releases, checked on 18 November 2026. PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'Next AI Draw.io lets an AI draw editable draw.io diagrams from chat. Apache-2.0, web, desktop and MCP, bring your own model. Privacy, limits, install.',
    twitterDescription:
      'Next AI Draw.io draws editable draw.io diagrams from a chat prompt with the AI model you choose. Apache-2.0, web, desktop and MCP; untested by PromptQuorum.',
    audience:
      'Developers, architects and analysts who draw architecture, flow and process diagrams and want an AI to produce the first draft',
    readTime: '6 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Next AI Draw.io',
    targetKeywords: [
      'Next AI Draw.io review',
      'Next AI Draw.io MCP',
      'AI draw.io diagram generator',
      'Next AI Draw.io Ollama',
      'Next AI Draw.io self-host',
      'Next AI Draw.io license',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Next AI Draw.io is a free Apache-2.0 app that turns a chat prompt into an editable draw.io diagram, in a browser, on Windows, macOS and Linux, or through an MCP server for AI coding agents.** It has no model of its own, so diagram quality depends on the provider and model you connect. No privacy policy was found on the maker\'s site (checked 18 November 2026), so check where your diagram data goes before using it on confidential work.',
    quickAnswerTop: {
      en: {
        question: 'What is Next AI Draw.io and who is it for?',
        answer:
          'Next AI Draw.io is a chat interface on top of the draw.io diagram editor. You describe a diagram or upload a picture, the AI you configured draws it, and you keep editing it like any draw.io file. It suits people who draw technical diagrams often and are happy to bring their own API key or local model.',
        bullets: [
          'Three ways to use it: web demo, desktop app, MCP server for Claude Code, Cursor, Codex and VS Code.',
          'License: Apache-2.0, so the code is open source and can be self-hosted.',
          'Export as .drawio, .png or .svg, so the result is not locked in.',
          'Works with 25 AI providers, including local models through Ollama.',
          'Each AI change is saved as a version you can compare or restore.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Overview', anchor: 'overview' },
      { label: 'How to Get It', anchor: 'get-it' },
      { label: 'Requirements and Models', anchor: 'requirements' },
      { label: 'Features', anchor: 'features' },
      { label: 'Privacy and Data Flow', anchor: 'privacy' },
      { label: 'Who Should Use It', anchor: 'who-should-use' },
      { label: 'Limits and What We Could Not Verify', anchor: 'who-should-not-use' },
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
            text: 'Next AI Draw.io lets you describe a diagram in chat and have an AI you choose draw it on an editable draw.io canvas, in a browser, as a desktop app or through an MCP server.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a chat window attached to the draw.io editor. The AI writes the diagram, and you can drag the shapes yourself or ask the AI to change only the ones you selected.',
          },
        ],
        items: [
          'The desktop app has installers for macOS, Windows and Linux, and the browser demo needs no install.',
          'The app is free under Apache-2.0. The demo site has a daily usage limit that your own API key lifts, and the model provider bills you separately.',
          'The latest release is v0.5.1 and the repository had a commit on 14 November 2026, so no stale-project warning applies.',
          'The maker says the task needs strong models, and small models tend to produce broken diagrams.',
          'PromptQuorum has not tested the app, and no privacy policy, terms or imprint were found.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The app sends your request and the current diagram to the AI model you picked. Do not put confidential architecture or customer data into a cloud model unless that provider\'s terms allow it.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**Next AI Draw.io is a chat front end for draw.io that produces diagrams you can keep editing by hand.**',
          'The project is maintained by an individual developer, Dayuan Jiang (GitHub user DayuanJiang), not by a company. Version 0.5.1 was released on 31 October 2026 and is the latest GitHub release. The newest commit on the default branch is from 14 November 2026, so development is ongoing.',
          'Per the README, you describe a diagram in a sentence, or upload a screenshot, a sketch, a PDF, Markdown or code, and the AI draws it on a real draw.io canvas. The app ships its own copy of draw.io, so the result is a normal draw.io diagram with several pages, restyling and export. Built-in shape libraries cover AWS, Azure, GCP and Kubernetes icons.',
          'The maker also publishes an MCP server, an npm package that lets AI agents such as Claude Code, Cursor, Codex and VS Code draw on the same canvas. MCP (Model Context Protocol) is the protocol agents use to call outside tools.',
          'These descriptions are maker statements. PromptQuorum has not run the app and has not measured diagram quality, speed or cost.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**You can open the web demo, download a desktop installer from GitHub Releases, or run it yourself with Docker.**',
          'The Releases page for v0.5.1 lists a .dmg for macOS (Apple Silicon and Intel), a Setup .exe and a portable .exe for Windows, and an AppImage, .deb and .rpm for Linux. The README tells readers to download the installer from that page. The desktop app is the same app as the web version.',
        ],
        columns: ['Platform', 'How to get it'],
        rows: [
          { 'Platform': '[Website](https://next-ai-drawio.jiang.jp/en)', 'How to get it': 'Open the editor in a browser, nothing to install' },
          { 'Platform': '[macOS](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', 'How to get it': 'Download the .dmg, Apple Silicon or Intel' },
          { 'Platform': '[Windows](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', 'How to get it': 'Download the Setup .exe or the portable .exe' },
          { 'Platform': '[Linux](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', 'How to get it': 'Download the AppImage, .deb or .rpm' },
          { 'Platform': '[Docker](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/docker.md)', 'How to get it': 'One docker run command, then open localhost:3000' },
          { 'Platform': '[MCP server](https://next-ai-drawio.jiang.jp/en/mcp)', 'How to get it': 'Add the npm package to your agent\'s MCP settings' },
        ],
        note: 'No separate privacy policy page was found (checked 18 November 2026). The site says the key you enter is kept in your browser and never stored on the server.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements and Models',
        content: [
          '**The app itself lists no hardware floor, because the AI model does the heavy work and you choose it.**',
          'The README lists 25 providers, including OpenAI, Anthropic, Google, DeepSeek, Ollama, SGLang, OpenRouter and an OpenAI-compatible preset for any other URL such as vLLM or LM Studio. You enter the provider and key in Settings. For models you host, the setup you need is that of the model server.',
        ],
        columns: ['Item', 'Stated figure'],
        rows: [
          { 'Item': 'Operating system', 'Stated figure': 'macOS, Windows, Linux (desktop); browser (demo)' },
          { 'Item': 'Hardware', 'Stated figure': 'Depends on the model you connect' },
          { 'Item': 'Model strength', 'Stated figure': 'Strong models advised; small ones may break (README)' },
          { 'Item': 'Self-hosted models', 'Stated figure': '32B+ parameters suggested (FAQ)' },
          { 'Item': 'Tool calls', 'Stated figure': 'Model server must enable tool use (FAQ)' },
          { 'Item': 'Network', 'Stated figure': 'Cloud providers need it; offline build possible' },
        ],
        note: 'The offline guide says the build downloads draw.io once, so the build machine needs internet access or a copied draw.io release.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The core is chat-driven drawing on a real draw.io canvas, with versions to undo the AI.** All items below are maker claims from the README, site and release notes.',
        ],
        items: [
          'Generate architecture diagrams, flowcharts, sequence diagrams and more from one sentence.',
          'Upload a screenshot, sketch, PDF, Markdown or code file, and the AI redraws it or draws a diagram of its content.',
          'Edit by chat, or select shapes on the canvas and ask the AI to change only those.',
          'Every AI change becomes a version card you can compare with the canvas, restore or undo.',
          'Built-in AWS, Azure, GCP and Kubernetes icon libraries, and animated connectors.',
          'Export as .drawio, .png, .svg or .drawio.svg at any time.',
          'Models that reason show their thinking; the interface comes in English, Simplified Chinese, Traditional Chinese and Japanese, with a dark mode.',
          'An MCP server with a screenshot tool so the agent can look at the drawn diagram and fix it.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**Your request and the current diagram go to the AI model you pick, so the data path depends on that provider.**',
          'The docs say the app sends your request and the current diagram to the selected model, and that the API key you enter is kept in your browser and never stored on the server. If the model runs on your own machine, for example through Ollama, the request goes to that local server instead of a cloud provider; PromptQuorum has not checked whether anything else leaves the machine.',
          'For self-hosters, the repository\'s env.example describes optional Langfuse tracing and says that with it set up the editor also sends the names of what users do. The README also describes an admin panel with observability and quota settings.',
          'No privacy policy, terms or imprint were found on the site or in the repository (checked 18 November 2026), so what the hosted demo logs is not documented.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**Next AI Draw.io fits people who draw technical diagrams often and want an AI first draft they can still edit.**',
        ],
        items: [
          'Developers and architects who want AWS, Azure, GCP or Kubernetes diagrams drafted from a description.',
          'Teams that run an AI coding agent and want it to draw diagrams through MCP.',
          'Privacy-minded users who can self-host or connect a local model through Ollama.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Limits and What We Could Not Verify',
        content: [
          '**Output quality depends on the model, and several details remain unverified.**',
        ],
        items: [
          'Limit: the README says the task needs strong models, and that small models tend to produce broken diagrams.',
          'Limit: x-cmd says output needs human review, citing misaligned connectors, duplicated nodes and inconsistent styles.',
          'Limit: the hosted demo has a daily usage limit, so regular use needs your own API key or self-hosting.',
          'Unverified: what the hosted demo or desktop app logs or sends beyond the diagram and request. No privacy policy, terms or imprint were found (checked 18 November 2026).',
          'Unverified: the maker\'s location. The GitHub profile names a city, but no policy or imprint states a country, so the directory shows no HQ flag.',
          'Unverified: any link between this project and the company behind draw.io. The README only says the app ships its own copy of draw.io.',
          'Unverified: diagram quality, speed and cost per model. PromptQuorum has not tested the app, and the maker\'s own measurements were not reviewed.',
          'Unverified: whether the desktop installers are code-signed. No source states it.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Next AI Draw.io vs Alternatives',
        itemHeadings: true,
        content: [
          '**Next AI Draw.io is a chat-driven diagram editor with an MCP server. PromptQuorum has not compared it with the alternatives hands-on.** The notes below come from the maker\'s README and from each tool\'s own PromptQuorum review.',
        ],
        columns: ['Tool', 'Noted in sources'],
        rows: [
          { 'Tool': 'Next AI Draw.io', 'Noted in sources': 'Apache-2.0; draw.io canvas; web, desktop, MCP; any provider' },
          { 'Tool': 'draw.io built-in Generate', 'Noted in sources': 'Runs inside draw.io on a hosted model or your key (README)' },
          { 'Tool': '[Presenton](/power-local-llm/presenton-review)', 'Noted in sources': 'Open-source AI slide decks; local or cloud model' },
          { 'Tool': '[Kition](/power-local-llm/kition-review)', 'Noted in sources': 'Open-source workspace; agents edit files through MCP' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Is Next AI Draw.io free?',
            a: 'The app is free under Apache-2.0. The hosted demo has a daily usage limit that you lift by entering your own provider and API key, and that provider charges you separately. The README invites sponsorship to keep the demo running.',
          },
          {
            q: 'Can I use it with local models?',
            a: 'Yes, per the README, which lists Ollama, SGLang and an OpenAI-compatible preset for URLs such as vLLM or LM Studio. The FAQ says small local models often only think and never draw, suggests 32B parameters or more, and says the model server needs tool calls turned on.',
          },
          {
            q: 'Can I run it offline or on an intranet?',
            a: 'Yes, with self-hosting. The docs say the app ships its own copy of draw.io, so the browser does not contact embed.diagrams.net, but the build needs internet access once to download draw.io. Inserting images by web address from other sites has a documented limit in exports.',
          },
          {
            q: 'How do AI coding agents use it?',
            a: 'Through the maker\'s MCP server, an npm package. The README gives one command to add it to Claude Code and one-click installs for VS Code and Cursor, and the diagram appears in your browser as the agent draws it.',
          },
          {
            q: 'Can I open the result in regular draw.io?',
            a: 'Yes, per the README: you can export as .drawio, .png, .svg or .drawio.svg at any time, and the result is a normal draw.io diagram.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Next AI Draw.io is worth a look if you draw technical diagrams regularly and are comfortable choosing and paying for your own AI model.**',
          'On paper it covers a lot: a normal draw.io canvas, version history that undoes AI changes, 25 providers including local ones, desktop installers, Docker, and an MCP server. It is free under Apache-2.0, and development is active, with a release on 31 October 2026 and a commit on 14 November 2026.',
          'The trade-offs are real. Quality depends on the model you connect, the demo is rate-limited, and no privacy policy was found, so the data path is only as clear as your chosen provider. PromptQuorum has not tested the app. Try a small, non-confidential diagram first, and use a strong model or your own server for anything that matters.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Next AI Draw.io website](https://next-ai-drawio.jiang.jp/en) — maker\'s description, editor and download links, checked 18 November 2026.',
          '[About page](https://next-ai-drawio.jiang.jp/en/about) — three ways to use the app, provider list, key handling and footer links, checked 18 November 2026.',
          '[Documentation](https://next-ai-drawio.jiang.jp/en/docs) — data sent to the model, API key handling and demo limit, checked 18 November 2026.',
          '[GitHub repository](https://github.com/DayuanJiang/next-ai-draw-io) — license, last commit and project description, checked 18 November 2026.',
          '[README](https://github.com/DayuanJiang/next-ai-draw-io#readme) — features, install options, MCP setup, providers and model advice, checked 18 November 2026.',
          '[Release v0.5.1](https://github.com/DayuanJiang/next-ai-draw-io/releases/tag/v0.5.1) — latest release version, date and installer files, checked 18 November 2026.',
          '[Docker guide](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/docker.md) — one-command container start, checked 18 November 2026.',
          '[Offline deployment guide](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/offline-deployment.md) — bundled draw.io and build requirement, checked 18 November 2026.',
          '[FAQ](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/FAQ.md) — self-hosted model advice and tool-call setting, checked 18 November 2026.',
          '[env.example](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/env.example) — optional Langfuse tracing note, checked 18 November 2026.',
          '[x-cmd page](https://www.x-cmd.com/install/next-ai-draw-io/) — third-party comment on output review, checked 18 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Presenton Review](/power-local-llm/presenton-review) — Open-source AI presentation generator that builds editable decks from a prompt, with a local or cloud model.',
          '[Kition Review](/power-local-llm/kition-review) — Open-source desktop workspace where AI agents edit documents, slides and more through MCP.',
          '[Screenpipe Review](/power-local-llm/screenpipe-review) — Desktop app that records screen and audio locally and exposes the history to agents via MCP.',
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
    next_refresh_due: '2027-05-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/next-ai-draw-io-review-hero-de.webp',
    title: 'Next-AI-Draw.io-Rezension: draw.io-Diagramme per Chat im Web, auf dem Desktop und über MCP',
    seoTitle: 'Next-AI-Draw.io-Rezension: KI-Editor für draw.io, MCP',
    intro:
      'Next AI Draw.io ist eine Open-Source-App, in der Sie ein Diagramm im Chat beschreiben und eine KI es auf einer bearbeitbaren draw.io-Fläche zeichnet. Sie läuft im Browser, als Desktop-App oder als MCP-Server, und KI-Anbieter und Modell wählen Sie selbst. Diese Rezension stützt sich auf die Seite des Entwicklers, das GitHub-Repository und die Releases, geprüft am 18. November 2026. PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'Next AI Draw.io zeichnet bearbeitbare draw.io-Diagramme per KI aus dem Chat. Apache-2.0, Web, Desktop und MCP. Datenschutz, Grenzen, Installation.',
    twitterDescription:
      'Next AI Draw.io zeichnet bearbeitbare draw.io-Diagramme aus einem Chat-Prompt mit dem KI-Modell Ihrer Wahl. Apache-2.0, Web, Desktop und MCP; von PromptQuorum nicht getestet.',
    audience:
      'Entwickler, Architekten und Analysten, die Architektur-, Ablauf- und Prozessdiagramme zeichnen und einen ersten Entwurf von einer KI erstellen lassen möchten',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Next AI Draw.io',
    targetKeywords: [
      'Next AI Draw.io Rezension',
      'Next AI Draw.io MCP',
      'KI draw.io Diagramm-Generator',
      'Next AI Draw.io Ollama',
      'Next AI Draw.io selbst hosten',
      'Next AI Draw.io Lizenz',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Next AI Draw.io ist eine kostenlose Apache-2.0-App, die aus einem Chat-Prompt ein bearbeitbares draw.io-Diagramm macht, im Browser, unter Windows, macOS und Linux oder über einen MCP-Server für KI-Coding-Agenten.** Sie hat kein eigenes Modell, die Diagrammqualität hängt also von Anbieter und Modell ab, die Sie anbinden. Auf der Seite des Entwicklers wurde keine Datenschutzerklärung gefunden (geprüft am 18. November 2026); prüfen Sie daher, wohin Ihre Diagrammdaten gehen, bevor Sie die App für vertrauliche Arbeit nutzen.',
    quickAnswerTop: {
      de: {
        question: 'Was ist Next AI Draw.io, und für wen ist es gedacht?',
        answer:
          'Next AI Draw.io ist eine Chat-Oberfläche auf dem draw.io-Diagrammeditor. Sie beschreiben ein Diagramm oder laden ein Bild hoch, die von Ihnen eingerichtete KI zeichnet es, und Sie bearbeiten es danach wie jede draw.io-Datei weiter. Die App passt zu Menschen, die oft technische Diagramme zeichnen und einen eigenen API-Schlüssel oder ein lokales Modell mitbringen.',
        bullets: [
          'Drei Nutzungswege: Web-Demo, Desktop-App, MCP-Server für Claude Code, Cursor, Codex und VS Code.',
          'Lizenz: Apache-2.0, der Code ist also Open Source und lässt sich selbst hosten.',
          'Export als .drawio, .png oder .svg, das Ergebnis ist also nicht eingesperrt.',
          'Funktioniert mit 25 KI-Anbietern, darunter lokale Modelle über Ollama.',
          'Jede KI-Änderung wird als Version gespeichert, die Sie vergleichen oder wiederherstellen können.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'Überblick', anchor: 'overview' },
      { label: 'So bekommen Sie die App', anchor: 'get-it' },
      { label: 'Anforderungen und Modelle', anchor: 'requirements' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Datenschutz und Datenfluss', anchor: 'privacy' },
      { label: 'Für wen geeignet', anchor: 'who-should-use' },
      { label: 'Grenzen und was wir nicht überprüfen konnten', anchor: 'who-should-not-use' },
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
            text: 'Next AI Draw.io lässt Sie ein Diagramm im Chat beschreiben und von einer KI Ihrer Wahl auf einer bearbeitbaren draw.io-Fläche zeichnen, im Browser, als Desktop-App oder über einen MCP-Server.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich ein Chatfenster am draw.io-Editor vor. Die KI schreibt das Diagramm, und Sie können die Formen selbst verschieben oder die KI bitten, nur die markierten Formen zu ändern.',
          },
        ],
        items: [
          'Die Desktop-App hat Installationsprogramme für macOS, Windows und Linux, und die Browser-Demo braucht keine Installation.',
          'Die App ist unter Apache-2.0 kostenlos. Die Demo-Seite hat ein tägliches Nutzungslimit, das Ihr eigener API-Schlüssel aufhebt, und der Modellanbieter stellt Ihnen separat etwas in Rechnung.',
          'Die neueste Version ist v0.5.1, und das Repository hatte am 14. November 2026 einen Commit, daher gilt keine Warnung vor einem veralteten Projekt.',
          'Der Entwickler sagt, die Aufgabe brauche starke Modelle, und kleine Modelle erzeugen oft fehlerhafte Diagramme.',
          'PromptQuorum hat die App nicht getestet, und es wurden weder Datenschutzerklärung noch Nutzungsbedingungen oder Impressum gefunden.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die App sendet Ihre Anfrage und das aktuelle Diagramm an das KI-Modell, das Sie gewählt haben. Geben Sie vertrauliche Architektur- oder Kundendaten nur dann in ein Cloud-Modell ein, wenn die Bedingungen des Anbieters das erlauben.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**Next AI Draw.io ist eine Chat-Oberfläche für draw.io, die Diagramme erzeugt, die Sie von Hand weiter bearbeiten können.**',
          'Das Projekt wird von einem einzelnen Entwickler gepflegt, Dayuan Jiang (GitHub-Nutzer DayuanJiang), nicht von einem Unternehmen. Version 0.5.1 erschien am 31. Oktober 2026 und ist das neueste GitHub-Release. Der jüngste Commit im Standard-Branch stammt vom 14. November 2026, die Entwicklung läuft also weiter.',
          'Laut README beschreiben Sie ein Diagramm in einem Satz oder laden einen Screenshot, eine Skizze, ein PDF, Markdown oder Code hoch, und die KI zeichnet es auf einer echten draw.io-Fläche. Die App bringt eine eigene Kopie von draw.io mit, das Ergebnis ist also ein normales draw.io-Diagramm mit mehreren Seiten, Umgestaltung und Export. Eingebaute Formbibliotheken decken AWS-, Azure-, GCP- und Kubernetes-Symbole ab.',
          'Der Entwickler veröffentlicht außerdem einen MCP-Server, ein npm-Paket, mit dem KI-Agenten wie Claude Code, Cursor, Codex und VS Code auf derselben Fläche zeichnen können. MCP (Model Context Protocol) ist das Protokoll, über das Agenten externe Werkzeuge aufrufen.',
          'Diese Beschreibungen sind Aussagen des Herstellers. PromptQuorum hat die App nicht ausgeführt und weder Diagrammqualität noch Geschwindigkeit oder Kosten gemessen.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So bekommen Sie die App',
        content: [
          '**Sie können die Web-Demo öffnen, ein Installationsprogramm für den Desktop von GitHub Releases laden oder die App mit Docker selbst betreiben.**',
          'Die Releases-Seite für v0.5.1 listet eine .dmg für macOS (Apple Silicon und Intel), eine Setup-.exe und eine portable .exe für Windows sowie ein AppImage, eine .deb und eine .rpm für Linux. Das README verweist darauf, das Installationsprogramm von dieser Seite zu laden. Die Desktop-App ist dieselbe App wie die Web-Version.',
        ],
        columns: ['Plattform', 'So bekommen Sie sie'],
        rows: [
          { 'Plattform': '[Website](https://next-ai-drawio.jiang.jp/en)', 'So bekommen Sie sie': 'Editor im Browser öffnen, keine Installation nötig' },
          { 'Plattform': '[macOS](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', 'So bekommen Sie sie': '.dmg laden, Apple Silicon oder Intel' },
          { 'Plattform': '[Windows](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', 'So bekommen Sie sie': 'Setup-.exe oder portable .exe laden' },
          { 'Plattform': '[Linux](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', 'So bekommen Sie sie': 'AppImage, .deb oder .rpm laden' },
          { 'Plattform': '[Docker](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/docker.md)', 'So bekommen Sie sie': 'Ein docker-run-Befehl, dann localhost:3000 öffnen' },
          { 'Plattform': '[MCP-Server](https://next-ai-drawio.jiang.jp/en/mcp)', 'So bekommen Sie sie': 'npm-Paket in den MCP-Einstellungen des Agenten ergänzen' },
        ],
        note: 'Eine eigene Seite mit einer Datenschutzerklärung wurde nicht gefunden (geprüft am 18. November 2026). Die Seite sagt, der eingegebene Schlüssel bleibe in Ihrem Browser und werde nie auf dem Server gespeichert.',
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen und Modelle',
        content: [
          '**Die App selbst nennt keine Hardware-Untergrenze, weil das KI-Modell die schwere Arbeit leistet und Sie es auswählen.**',
          'Das README nennt 25 Anbieter, darunter OpenAI, Anthropic, Google, DeepSeek, Ollama, SGLang, OpenRouter und eine OpenAI-kompatible Voreinstellung für jede andere URL, etwa vLLM oder LM Studio. Anbieter und Schlüssel tragen Sie in den Einstellungen ein. Bei selbst betriebenen Modellen gelten die Anforderungen des Modellservers.',
        ],
        columns: ['Punkt', 'Genannter Wert'],
        rows: [
          { 'Punkt': 'Betriebssystem', 'Genannter Wert': 'macOS, Windows, Linux (Desktop); Browser (Demo)' },
          { 'Punkt': 'Hardware', 'Genannter Wert': 'Hängt vom angebundenen Modell ab' },
          { 'Punkt': 'Modellstärke', 'Genannter Wert': 'Starke Modelle empfohlen; kleine können versagen (README)' },
          { 'Punkt': 'Selbst betriebene Modelle', 'Genannter Wert': '32B+ Parameter empfohlen (FAQ)' },
          { 'Punkt': 'Tool-Aufrufe', 'Genannter Wert': 'Modellserver muss Tool-Nutzung aktivieren (FAQ)' },
          { 'Punkt': 'Netzwerk', 'Genannter Wert': 'Cloud-Anbieter brauchen es; Offline-Build möglich' },
        ],
        note: 'Die Offline-Anleitung sagt, der Build lade draw.io einmal herunter, der Build-Rechner braucht also Internetzugang oder eine kopierte draw.io-Version.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Kern ist das Zeichnen per Chat auf einer echten draw.io-Fläche, mit Versionen, um KI-Änderungen rückgängig zu machen.** Alle folgenden Punkte sind Aussagen des Herstellers aus README, Website und Release-Notizen.',
        ],
        items: [
          'Architekturdiagramme, Flussdiagramme, Sequenzdiagramme und mehr aus einem Satz erzeugen.',
          'Screenshot, Skizze, PDF, Markdown oder Code hochladen, und die KI zeichnet es neu oder erstellt ein Diagramm seines Inhalts.',
          'Per Chat bearbeiten, oder Formen auf der Fläche markieren und die KI bitten, nur diese zu ändern.',
          'Jede KI-Änderung wird zu einer Versionskarte, die Sie mit der Fläche vergleichen, wiederherstellen oder rückgängig machen können.',
          'Eingebaute Symbolbibliotheken für AWS, Azure, GCP und Kubernetes sowie animierte Verbindungslinien.',
          'Export jederzeit als .drawio, .png, .svg oder .drawio.svg.',
          'Modelle mit Reasoning zeigen ihr Denken; die Oberfläche gibt es auf Englisch, in vereinfachtem und traditionellem Chinesisch und auf Japanisch, mit dunklem Modus.',
          'Ein MCP-Server mit Screenshot-Werkzeug, damit der Agent das gezeichnete Diagramm ansehen und korrigieren kann.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Ihre Anfrage und das aktuelle Diagramm gehen an das KI-Modell, das Sie wählen; der Datenweg hängt also von diesem Anbieter ab.**',
          'Laut Dokumentation sendet die App Ihre Anfrage und das aktuelle Diagramm an das gewählte Modell, und der eingegebene API-Schlüssel bleibe in Ihrem Browser und werde nie auf dem Server gespeichert. Läuft das Modell auf Ihrem eigenen Rechner, etwa über Ollama, geht die Anfrage an diesen lokalen Server statt an einen Cloud-Anbieter; PromptQuorum hat nicht geprüft, ob darüber hinaus etwas den Rechner verlässt.',
          'Für Selbst-Hoster beschreibt die env.example des Repositorys optionales Langfuse-Tracing und sagt, dass der Editor damit auch die Namen der Nutzeraktionen sendet. Das README beschreibt außerdem ein Admin-Panel mit Observability- und Kontingenteinstellungen.',
          'Auf der Seite und im Repository wurden weder Datenschutzerklärung noch Nutzungsbedingungen oder Impressum gefunden (geprüft am 18. November 2026), was die gehostete Demo protokolliert, ist daher nicht dokumentiert.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**Next AI Draw.io passt zu Menschen, die oft technische Diagramme zeichnen und einen KI-Entwurf wollen, den sie weiter bearbeiten können.**',
        ],
        items: [
          'Entwickler und Architekten, die AWS-, Azure-, GCP- oder Kubernetes-Diagramme aus einer Beschreibung entwerfen lassen möchten.',
          'Teams mit einem KI-Coding-Agenten, der über MCP Diagramme zeichnen soll.',
          'Datenschutzbewusste Nutzer, die selbst hosten oder ein lokales Modell über Ollama anbinden können.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Grenzen und was wir nicht überprüfen konnten',
        content: [
          '**Die Ausgabequalität hängt vom Modell ab, und mehrere Details sind nicht überprüft.**',
        ],
        items: [
          'Grenze: Laut README braucht die Aufgabe starke Modelle, und kleine Modelle erzeugen oft fehlerhafte Diagramme.',
          'Grenze: x-cmd sagt, die Ausgabe müsse von Menschen geprüft werden, und nennt versetzte Verbindungslinien, doppelte Knoten und uneinheitliche Stile.',
          'Grenze: Die gehostete Demo hat ein tägliches Nutzungslimit, für regelmäßige Nutzung brauchen Sie also einen eigenen API-Schlüssel oder Self-Hosting.',
          'Nicht überprüft: was die gehostete Demo oder die Desktop-App über Diagramm und Anfrage hinaus protokolliert oder sendet. Es wurden weder Datenschutzerklärung noch Nutzungsbedingungen oder Impressum gefunden (geprüft am 18. November 2026).',
          'Nicht überprüft: der Standort des Entwicklers. Das GitHub-Profil nennt eine Stadt, aber keine Richtlinie und kein Impressum nennt ein Land, daher zeigt das Verzeichnis keine Länderflagge.',
          'Nicht überprüft: jede Verbindung zwischen diesem Projekt und dem Unternehmen hinter draw.io. Das README sagt nur, die App bringe eine eigene Kopie von draw.io mit.',
          'Nicht überprüft: Diagrammqualität, Geschwindigkeit und Kosten je Modell. PromptQuorum hat die App nicht getestet, und die eigenen Messungen des Entwicklers wurden nicht geprüft.',
          'Nicht überprüft: ob die Desktop-Installationsprogramme code-signiert sind. Keine Quelle sagt dazu etwas.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Next AI Draw.io im Vergleich zu Alternativen',
        itemHeadings: true,
        content: [
          '**Next AI Draw.io ist ein Diagrammeditor mit Chat-Steuerung und MCP-Server. PromptQuorum hat ihn nicht praktisch mit den Alternativen verglichen.** Die folgenden Hinweise stammen aus dem README des Entwicklers und aus der jeweiligen PromptQuorum-Rezension des Werkzeugs.',
        ],
        columns: ['Werkzeug', 'In den Quellen vermerkt'],
        rows: [
          { 'Werkzeug': 'Next AI Draw.io', 'In den Quellen vermerkt': 'Apache-2.0; draw.io-Fläche; Web, Desktop, MCP; beliebiger Anbieter' },
          { 'Werkzeug': 'draw.io Generate (integriert)', 'In den Quellen vermerkt': 'Läuft in draw.io mit gehostetem Modell oder eigenem Schlüssel (README)' },
          { 'Werkzeug': '[Presenton](/de/power-local-llm/presenton-review)', 'In den Quellen vermerkt': 'Open-Source-KI-Folien; lokales oder Cloud-Modell' },
          { 'Werkzeug': '[Kition](/de/power-local-llm/kition-review)', 'In den Quellen vermerkt': 'Open-Source-Arbeitsbereich; Agenten bearbeiten Dateien über MCP' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Ist Next AI Draw.io kostenlos?',
            a: 'Die App ist unter Apache-2.0 kostenlos. Die gehostete Demo hat ein tägliches Nutzungslimit, das Sie mit Ihrem eigenen Anbieter und API-Schlüssel aufheben, und dieser Anbieter berechnet Ihnen separat etwas. Das README bittet um Sponsoring, damit die Demo weiterlaufen kann.',
          },
          {
            q: 'Kann ich lokale Modelle verwenden?',
            a: 'Ja, laut README, das Ollama, SGLang und eine OpenAI-kompatible Voreinstellung für URLs wie vLLM oder LM Studio nennt. Die FAQ sagt, kleine lokale Modelle würden oft nur denken und nie zeichnen, empfiehlt 32B Parameter oder mehr und verlangt, dass der Modellserver Tool-Aufrufe aktiviert hat.',
          },
          {
            q: 'Kann ich es offline oder in einem Intranet betreiben?',
            a: 'Ja, mit Self-Hosting. Laut Dokumentation bringt die App eine eigene Kopie von draw.io mit, der Browser kontaktiert embed.diagrams.net also nicht, aber der Build braucht einmal Internetzugang, um draw.io herunterzuladen. Für das Einfügen von Bildern per Webadresse von anderen Seiten ist eine Einschränkung bei Exporten dokumentiert.',
          },
          {
            q: 'Wie nutzen KI-Coding-Agenten es?',
            a: 'Über den MCP-Server des Entwicklers, ein npm-Paket. Das README nennt einen Befehl, um es zu Claude Code hinzuzufügen, und Ein-Klick-Installationen für VS Code und Cursor, und das Diagramm erscheint in Ihrem Browser, während der Agent zeichnet.',
          },
          {
            q: 'Kann ich das Ergebnis in normalem draw.io öffnen?',
            a: 'Ja, laut README: Sie können jederzeit als .drawio, .png, .svg oder .drawio.svg exportieren, und das Ergebnis ist ein normales draw.io-Diagramm.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**Next AI Draw.io lohnt einen Blick, wenn Sie regelmäßig technische Diagramme zeichnen und Ihr eigenes KI-Modell auswählen und bezahlen möchten.**',
          'Auf dem Papier deckt die App viel ab: eine normale draw.io-Fläche, eine Versionshistorie, die KI-Änderungen rückgängig macht, 25 Anbieter einschließlich lokaler, Installationsprogramme für den Desktop, Docker und einen MCP-Server. Sie ist unter Apache-2.0 kostenlos, und die Entwicklung ist aktiv, mit einem Release am 31. Oktober 2026 und einem Commit am 14. November 2026.',
          'Die Kompromisse sind real. Die Qualität hängt vom angebundenen Modell ab, die Demo ist begrenzt, und eine Datenschutzerklärung wurde nicht gefunden, der Datenweg ist also nur so klar wie Ihr gewählter Anbieter. PromptQuorum hat die App nicht getestet. Probieren Sie zuerst ein kleines, nicht vertrauliches Diagramm aus, und nutzen Sie für wichtige Arbeit ein starkes Modell oder Ihren eigenen Server.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von Next AI Draw.io](https://next-ai-drawio.jiang.jp/en) — Beschreibung des Entwicklers, Editor- und Download-Links, geprüft am 18. November 2026.',
          '[Über-Seite](https://next-ai-drawio.jiang.jp/en/about) — drei Nutzungswege, Anbieterliste, Umgang mit dem Schlüssel und Fußzeilen-Links, geprüft am 18. November 2026.',
          '[Dokumentation](https://next-ai-drawio.jiang.jp/en/docs) — an das Modell gesendete Daten, Umgang mit dem API-Schlüssel und Demo-Limit, geprüft am 18. November 2026.',
          '[GitHub-Repository](https://github.com/DayuanJiang/next-ai-draw-io) — Lizenz, letzter Commit und Projektbeschreibung, geprüft am 18. November 2026.',
          '[README](https://github.com/DayuanJiang/next-ai-draw-io#readme) — Funktionen, Installationsoptionen, MCP-Einrichtung, Anbieter und Modellhinweise, geprüft am 18. November 2026.',
          '[Release v0.5.1](https://github.com/DayuanJiang/next-ai-draw-io/releases/tag/v0.5.1) — neueste Version, Datum und Installationsdateien, geprüft am 18. November 2026.',
          '[Docker-Anleitung](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/docker.md) — Container-Start mit einem Befehl, geprüft am 18. November 2026.',
          '[Anleitung für Offline-Betrieb](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/offline-deployment.md) — mitgeliefertes draw.io und Build-Voraussetzung, geprüft am 18. November 2026.',
          '[FAQ](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/FAQ.md) — Hinweise zu selbst betriebenen Modellen und Tool-Aufruf-Einstellung, geprüft am 18. November 2026.',
          '[env.example](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/env.example) — Hinweis zu optionalem Langfuse-Tracing, geprüft am 18. November 2026.',
          '[x-cmd-Seite](https://www.x-cmd.com/install/next-ai-draw-io/) — Kommentar Dritter zur Prüfung der Ausgabe, geprüft am 18. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Presenton-Rezension](/de/power-local-llm/presenton-review) — Open-Source-KI-Präsentationsgenerator, der aus einem Prompt bearbeitbare Foliensätze erstellt, mit lokalem oder Cloud-Modell.',
          '[Kition-Rezension](/de/power-local-llm/kition-review) — Open-Source-Desktop-Arbeitsbereich, in dem KI-Agenten über MCP Dokumente, Folien und mehr bearbeiten.',
          '[Screenpipe-Rezension](/de/power-local-llm/screenpipe-review) — Desktop-App, die Bildschirm und Audio lokal aufzeichnet und den Verlauf Agenten über MCP bereitstellt.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/next-ai-draw-io-review-hero-es.webp',
    title: 'Reseña de Next AI Draw.io: diagramas de draw.io por chat en la web, el escritorio y MCP',
    seoTitle: 'Reseña de Next AI Draw.io: editor de draw.io con IA y MCP',
    intro:
      'Next AI Draw.io es una app de código abierto en la que describes un diagrama en un chat y una IA lo dibuja en un lienzo editable de draw.io. Funciona en el navegador, como app de escritorio o como servidor MCP, y el proveedor de IA y el modelo los eliges tú. Esta reseña se basa en el sitio del desarrollador, el repositorio de GitHub y sus versiones, revisados el 18 de noviembre de 2026. PromptQuorum no ha probado la app.',
    metaDescription:
      'Next AI Draw.io dibuja diagramas editables de draw.io con IA desde un chat. Apache-2.0, web, escritorio y MCP. Privacidad, límites e instalación.',
    twitterDescription:
      'Next AI Draw.io dibuja diagramas editables de draw.io desde un prompt de chat con el modelo de IA que elijas. Apache-2.0, web, escritorio y MCP; sin probar por PromptQuorum.',
    audience:
      'Desarrolladores, arquitectos y analistas que dibujan diagramas de arquitectura, flujo y procesos y quieren que una IA genere el primer borrador',
    readTime: '6 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Next AI Draw.io',
    targetKeywords: [
      'reseña de Next AI Draw.io',
      'Next AI Draw.io MCP',
      'generador de diagramas draw.io con IA',
      'Next AI Draw.io Ollama',
      'Next AI Draw.io autoalojado',
      'licencia de Next AI Draw.io',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Next AI Draw.io es una app gratuita con licencia Apache-2.0 que convierte un prompt de chat en un diagrama editable de draw.io, en un navegador, en Windows, macOS y Linux o mediante un servidor MCP para agentes de programación con IA.** No tiene modelo propio, así que la calidad del diagrama depende del proveedor y del modelo que conectes. No se encontró ninguna política de privacidad en el sitio del desarrollador (comprobado el 18 de noviembre de 2026), así que comprueba adónde van los datos de tu diagrama antes de usarla en trabajo confidencial.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es Next AI Draw.io y para quién es?',
        answer:
          'Next AI Draw.io es una interfaz de chat sobre el editor de diagramas draw.io. Describes un diagrama o subes una imagen, la IA que configuraste lo dibuja y sigues editándolo como cualquier archivo de draw.io. Encaja con quienes dibujan diagramas técnicos a menudo y aportan su propia clave de API o un modelo local.',
        bullets: [
          'Tres formas de usarla: demo web, app de escritorio y servidor MCP para Claude Code, Cursor, Codex y VS Code.',
          'Licencia: Apache-2.0, así que el código es abierto y se puede autoalojar.',
          'Exportación como .drawio, .png o .svg, así que el resultado no queda atrapado.',
          'Funciona con 25 proveedores de IA, incluidos modelos locales mediante Ollama.',
          'Cada cambio de la IA se guarda como una versión que puedes comparar o restaurar.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Resumen', anchor: 'overview' },
      { label: 'Cómo conseguirla', anchor: 'get-it' },
      { label: 'Requisitos y modelos', anchor: 'requirements' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Privacidad y flujo de datos', anchor: 'privacy' },
      { label: 'Para quién es', anchor: 'who-should-use' },
      { label: 'Límites y lo que no pudimos verificar', anchor: 'who-should-not-use' },
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
            text: 'Next AI Draw.io te deja describir un diagrama en un chat y hacer que una IA de tu elección lo dibuje en un lienzo editable de draw.io, en un navegador, como app de escritorio o mediante un servidor MCP.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en una ventana de chat pegada al editor de draw.io. La IA escribe el diagrama y tú puedes arrastrar las formas o pedirle que cambie solo las que seleccionaste.',
          },
        ],
        items: [
          'La app de escritorio tiene instaladores para macOS, Windows y Linux, y la demo en el navegador no necesita instalación.',
          'La app es gratuita con Apache-2.0. El sitio de la demo tiene un límite de uso diario que se levanta con tu propia clave de API, y el proveedor del modelo te cobra aparte.',
          'La última versión es la v0.5.1 y el repositorio tuvo un commit el 14 de noviembre de 2026, así que no aplica ninguna advertencia de proyecto abandonado.',
          'El desarrollador dice que la tarea necesita modelos potentes y que los modelos pequeños tienden a producir diagramas rotos.',
          'PromptQuorum no ha probado la app y no se encontró política de privacidad, términos ni aviso legal.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La app envía tu petición y el diagrama actual al modelo de IA que elegiste. No pongas arquitectura confidencial ni datos de clientes en un modelo en la nube salvo que los términos de ese proveedor lo permitan.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen',
        content: [
          '**Next AI Draw.io es una interfaz de chat para draw.io que produce diagramas que puedes seguir editando a mano.**',
          'El proyecto lo mantiene un desarrollador individual, Dayuan Jiang (usuario de GitHub DayuanJiang), no una empresa. La versión 0.5.1 se publicó el 31 de octubre de 2026 y es la última de GitHub. El commit más reciente de la rama principal es del 14 de noviembre de 2026, así que el desarrollo sigue activo.',
          'Según el README, describes un diagrama en una frase, o subes una captura, un boceto, un PDF, Markdown o código, y la IA lo dibuja en un lienzo real de draw.io. La app incluye su propia copia de draw.io, así que el resultado es un diagrama normal de draw.io con varias páginas, cambios de estilo y exportación. Las bibliotecas de formas integradas cubren iconos de AWS, Azure, GCP y Kubernetes.',
          'El desarrollador también publica un servidor MCP, un paquete de npm que permite a agentes de IA como Claude Code, Cursor, Codex y VS Code dibujar en el mismo lienzo. MCP (Model Context Protocol) es el protocolo con el que los agentes llaman a herramientas externas.',
          'Estas descripciones son afirmaciones del desarrollador. PromptQuorum no ha ejecutado la app ni ha medido la calidad de los diagramas, la velocidad o el coste.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirla',
        content: [
          '**Puedes abrir la demo web, descargar un instalador de escritorio desde GitHub Releases o ejecutarla tú mismo con Docker.**',
          'La página de Releases de la v0.5.1 lista un .dmg para macOS (Apple Silicon e Intel), un .exe de instalación y un .exe portátil para Windows, y un AppImage, un .deb y un .rpm para Linux. El README indica descargar el instalador desde esa página. La app de escritorio es la misma que la versión web.',
        ],
        columns: ['Plataforma', 'Cómo conseguirla'],
        rows: [
          { 'Plataforma': '[Sitio web](https://next-ai-drawio.jiang.jp/en)', 'Cómo conseguirla': 'Abre el editor en el navegador, sin instalar nada' },
          { 'Plataforma': '[macOS](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', 'Cómo conseguirla': 'Descarga el .dmg, Apple Silicon o Intel' },
          { 'Plataforma': '[Windows](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', 'Cómo conseguirla': 'Descarga el .exe de instalación o el portátil' },
          { 'Plataforma': '[Linux](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', 'Cómo conseguirla': 'Descarga el AppImage, .deb o .rpm' },
          { 'Plataforma': '[Docker](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/docker.md)', 'Cómo conseguirla': 'Un comando docker run y abre localhost:3000' },
          { 'Plataforma': '[Servidor MCP](https://next-ai-drawio.jiang.jp/en/mcp)', 'Cómo conseguirla': 'Añade el paquete de npm a la configuración MCP de tu agente' },
        ],
        note: 'No se encontró una página de política de privacidad (comprobado el 18 de noviembre de 2026). El sitio dice que la clave que introduces se guarda en tu navegador y nunca se almacena en el servidor.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos y modelos',
        content: [
          '**La app en sí no indica un mínimo de hardware, porque el modelo de IA hace el trabajo pesado y lo eliges tú.**',
          'El README enumera 25 proveedores, entre ellos OpenAI, Anthropic, Google, DeepSeek, Ollama, SGLang, OpenRouter y un preajuste compatible con OpenAI para cualquier otra URL, como vLLM o LM Studio. Introduces el proveedor y la clave en Ajustes. Para modelos que alojas tú, los requisitos son los del servidor del modelo.',
        ],
        columns: ['Elemento', 'Cifra indicada'],
        rows: [
          { 'Elemento': 'Sistema operativo', 'Cifra indicada': 'macOS, Windows, Linux (escritorio); navegador (demo)' },
          { 'Elemento': 'Hardware', 'Cifra indicada': 'Depende del modelo que conectes' },
          { 'Elemento': 'Potencia del modelo', 'Cifra indicada': 'Se aconsejan modelos potentes; los pequeños pueden fallar (README)' },
          { 'Elemento': 'Modelos autoalojados', 'Cifra indicada': 'Se sugieren 32B+ parámetros (FAQ)' },
          { 'Elemento': 'Llamadas a herramientas', 'Cifra indicada': 'El servidor del modelo debe activarlas (FAQ)' },
          { 'Elemento': 'Red', 'Cifra indicada': 'La necesitan los proveedores en la nube; build sin conexión posible' },
        ],
        note: 'La guía sin conexión dice que el build descarga draw.io una vez, así que la máquina de compilación necesita internet o una versión de draw.io copiada.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El núcleo es dibujar por chat en un lienzo real de draw.io, con versiones para deshacer a la IA.** Todos los puntos siguientes son afirmaciones del desarrollador tomadas del README, el sitio y las notas de versión.',
        ],
        items: [
          'Generar diagramas de arquitectura, diagramas de flujo, diagramas de secuencia y más a partir de una frase.',
          'Subir una captura, un boceto, un PDF, Markdown o código, y la IA lo vuelve a dibujar o dibuja un diagrama de su contenido.',
          'Editar por chat, o seleccionar formas en el lienzo y pedir a la IA que cambie solo esas.',
          'Cada cambio de la IA se convierte en una tarjeta de versión que puedes comparar con el lienzo, restaurar o deshacer.',
          'Bibliotecas de iconos integradas de AWS, Azure, GCP y Kubernetes, y conectores animados.',
          'Exportar en cualquier momento como .drawio, .png, .svg o .drawio.svg.',
          'Los modelos que razonan muestran su razonamiento; la interfaz está en inglés, chino simplificado, chino tradicional y japonés, con modo oscuro.',
          'Un servidor MCP con una herramienta de capturas para que el agente vea el diagrama dibujado y lo corrija.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**Tu petición y el diagrama actual van al modelo de IA que elijas, así que el recorrido de los datos depende de ese proveedor.**',
          'La documentación dice que la app envía tu petición y el diagrama actual al modelo seleccionado, y que la clave de API que introduces se guarda en tu navegador y nunca se almacena en el servidor. Si el modelo se ejecuta en tu propio equipo, por ejemplo mediante Ollama, la petición va a ese servidor local en lugar de a un proveedor en la nube; PromptQuorum no ha comprobado si algo más sale del equipo.',
          'Para quienes la autoaloja, el env.example del repositorio describe un rastreo opcional con Langfuse y dice que, si está configurado, el editor también envía los nombres de lo que hacen los usuarios. El README describe además un panel de administración con ajustes de observabilidad y cuotas.',
          'No se encontraron política de privacidad, términos ni aviso legal en el sitio ni en el repositorio (comprobado el 18 de noviembre de 2026), así que no está documentado qué registra la demo alojada.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**Next AI Draw.io encaja con quienes dibujan diagramas técnicos a menudo y quieren un primer borrador de IA que puedan seguir editando.**',
        ],
        items: [
          'Desarrolladores y arquitectos que quieren que se esbocen diagramas de AWS, Azure, GCP o Kubernetes a partir de una descripción.',
          'Equipos que usan un agente de programación con IA y quieren que dibuje diagramas mediante MCP.',
          'Usuarios atentos a la privacidad que pueden autoalojar la app o conectar un modelo local mediante Ollama.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Límites y lo que no pudimos verificar',
        content: [
          '**La calidad del resultado depende del modelo y varios detalles siguen sin verificar.**',
        ],
        items: [
          'Límite: según el README, la tarea necesita modelos potentes y los modelos pequeños tienden a producir diagramas rotos.',
          'Límite: x-cmd dice que el resultado necesita revisión humana y menciona conectores desalineados, nodos duplicados y estilos incoherentes.',
          'Límite: la demo alojada tiene un límite de uso diario, así que el uso habitual requiere tu propia clave de API o autoalojar la app.',
          'Sin verificar: qué registra o envía la demo alojada o la app de escritorio además del diagrama y la petición. No se encontraron política de privacidad, términos ni aviso legal (comprobado el 18 de noviembre de 2026).',
          'Sin verificar: la ubicación del desarrollador. El perfil de GitHub menciona una ciudad, pero ninguna política ni aviso legal indica un país, por eso el directorio no muestra bandera de sede.',
          'Sin verificar: cualquier vínculo entre este proyecto y la empresa detrás de draw.io. El README solo dice que la app incluye su propia copia de draw.io.',
          'Sin verificar: calidad de los diagramas, velocidad y coste por modelo. PromptQuorum no ha probado la app y no se revisaron las mediciones propias del desarrollador.',
          'Sin verificar: si los instaladores de escritorio están firmados. Ninguna fuente lo indica.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Next AI Draw.io frente a las alternativas',
        itemHeadings: true,
        content: [
          '**Next AI Draw.io es un editor de diagramas controlado por chat con un servidor MCP. PromptQuorum no lo ha comparado en la práctica con las alternativas.** Las notas siguientes proceden del README del desarrollador y de la reseña de PromptQuorum de cada herramienta.',
        ],
        columns: ['Herramienta', 'Indicado en las fuentes'],
        rows: [
          { 'Herramienta': 'Next AI Draw.io', 'Indicado en las fuentes': 'Apache-2.0; lienzo draw.io; web, escritorio, MCP; cualquier proveedor' },
          { 'Herramienta': 'Generate integrado en draw.io', 'Indicado en las fuentes': 'Funciona dentro de draw.io con un modelo alojado o tu clave (README)' },
          { 'Herramienta': '[Presenton](/es/power-local-llm/presenton-review)', 'Indicado en las fuentes': 'Presentaciones con IA de código abierto; modelo local o en la nube' },
          { 'Herramienta': '[Kition](/es/power-local-llm/kition-review)', 'Indicado en las fuentes': 'Espacio de trabajo abierto; los agentes editan archivos mediante MCP' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Next AI Draw.io es gratis?',
            a: 'La app es gratuita con Apache-2.0. La demo alojada tiene un límite de uso diario que levantas introduciendo tu propio proveedor y clave de API, y ese proveedor te cobra aparte. El README invita a patrocinar el proyecto para mantener la demo en marcha.',
          },
          {
            q: '¿Puedo usarla con modelos locales?',
            a: 'Sí, según el README, que menciona Ollama, SGLang y un preajuste compatible con OpenAI para URL como vLLM o LM Studio. La FAQ dice que los modelos locales pequeños a menudo solo piensan y nunca dibujan, sugiere 32B parámetros o más y dice que el servidor del modelo debe tener activadas las llamadas a herramientas.',
          },
          {
            q: '¿Puedo ejecutarla sin conexión o en una intranet?',
            a: 'Sí, autoalojándola. La documentación dice que la app incluye su propia copia de draw.io, así que el navegador no contacta con embed.diagrams.net, pero el build necesita internet una vez para descargar draw.io. Para insertar imágenes por dirección web de otros sitios hay una limitación documentada en las exportaciones.',
          },
          {
            q: '¿Cómo la usan los agentes de programación con IA?',
            a: 'Mediante el servidor MCP del desarrollador, un paquete de npm. El README da un comando para añadirlo a Claude Code e instalaciones con un clic para VS Code y Cursor, y el diagrama aparece en tu navegador mientras el agente dibuja.',
          },
          {
            q: '¿Puedo abrir el resultado en draw.io normal?',
            a: 'Sí, según el README: puedes exportar en cualquier momento como .drawio, .png, .svg o .drawio.svg, y el resultado es un diagrama normal de draw.io.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**Next AI Draw.io merece una mirada si dibujas diagramas técnicos con regularidad y te sientes cómodo eligiendo y pagando tu propio modelo de IA.**',
          'Sobre el papel cubre mucho: un lienzo normal de draw.io, un historial de versiones que deshace los cambios de la IA, 25 proveedores incluidos los locales, instaladores de escritorio, Docker y un servidor MCP. Es gratuita con Apache-2.0 y el desarrollo está activo, con una versión el 31 de octubre de 2026 y un commit el 14 de noviembre de 2026.',
          'Las contrapartidas son reales. La calidad depende del modelo que conectes, la demo tiene límites y no se encontró política de privacidad, así que el recorrido de los datos es tan claro como el proveedor que elijas. PromptQuorum no ha probado la app. Prueba primero un diagrama pequeño y no confidencial, y usa un modelo potente o tu propio servidor para lo que importe.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Next AI Draw.io](https://next-ai-drawio.jiang.jp/en) — descripción del desarrollador, enlaces al editor y a las descargas, revisado el 18 de noviembre de 2026.',
          '[Página Acerca de](https://next-ai-drawio.jiang.jp/en/about) — tres formas de usar la app, lista de proveedores, gestión de la clave y enlaces del pie, revisado el 18 de noviembre de 2026.',
          '[Documentación](https://next-ai-drawio.jiang.jp/en/docs) — datos enviados al modelo, gestión de la clave de API y límite de la demo, revisado el 18 de noviembre de 2026.',
          '[Repositorio de GitHub](https://github.com/DayuanJiang/next-ai-draw-io) — licencia, último commit y descripción del proyecto, revisado el 18 de noviembre de 2026.',
          '[README](https://github.com/DayuanJiang/next-ai-draw-io#readme) — funciones, opciones de instalación, configuración de MCP, proveedores y consejos sobre modelos, revisado el 18 de noviembre de 2026.',
          '[Versión v0.5.1](https://github.com/DayuanJiang/next-ai-draw-io/releases/tag/v0.5.1) — última versión, fecha y archivos de instalación, revisado el 18 de noviembre de 2026.',
          '[Guía de Docker](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/docker.md) — inicio del contenedor con un comando, revisado el 18 de noviembre de 2026.',
          '[Guía de despliegue sin conexión](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/offline-deployment.md) — draw.io incluido y requisito del build, revisado el 18 de noviembre de 2026.',
          '[FAQ](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/FAQ.md) — consejos sobre modelos autoalojados y ajuste de llamadas a herramientas, revisado el 18 de noviembre de 2026.',
          '[env.example](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/env.example) — nota sobre el rastreo opcional con Langfuse, revisado el 18 de noviembre de 2026.',
          '[Página de x-cmd](https://www.x-cmd.com/install/next-ai-draw-io/) — comentario de terceros sobre la revisión del resultado, revisado el 18 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Presenton](/es/power-local-llm/presenton-review) — generador de presentaciones con IA de código abierto que crea presentaciones editables a partir de un prompt, con un modelo local o en la nube.',
          '[Reseña de Kition](/es/power-local-llm/kition-review) — espacio de trabajo de escritorio de código abierto donde los agentes de IA editan documentos, diapositivas y más mediante MCP.',
          '[Reseña de Screenpipe](/es/power-local-llm/screenpipe-review) — app de escritorio que graba pantalla y audio en local y expone el historial a los agentes mediante MCP.',
          '[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/next-ai-draw-io-review-hero-fr.webp',
    title: 'Test de Next AI Draw.io : des diagrammes draw.io par chat sur le web, le bureau et MCP',
    seoTitle: 'Test de Next AI Draw.io : éditeur draw.io avec IA, MCP',
    intro:
      'Next AI Draw.io est une application open source où vous décrivez un diagramme dans un chat et où une IA le dessine sur un canevas draw.io modifiable. Elle fonctionne dans un navigateur, en application de bureau ou en serveur MCP, et vous choisissez vous-même le fournisseur d\'IA et le modèle. Ce test s\'appuie sur le site du développeur, le dépôt GitHub et ses versions, consultés le 18 novembre 2026. PromptQuorum n\'a pas testé l\'application.',
    metaDescription:
      'Next AI Draw.io dessine par IA des diagrammes draw.io modifiables depuis un chat. Apache-2.0, web, bureau, MCP. Confidentialité, limites, installation.',
    twitterDescription:
      'Next AI Draw.io dessine des diagrammes draw.io modifiables à partir d\'un prompt de chat avec le modèle d\'IA de votre choix. Apache-2.0, web, bureau et MCP ; non testé par PromptQuorum.',
    audience:
      'Développeurs, architectes et analystes qui dessinent des diagrammes d\'architecture, de flux et de processus et veulent qu\'une IA produise le premier brouillon',
    readTime: '6 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Next AI Draw.io',
    targetKeywords: [
      'test Next AI Draw.io',
      'Next AI Draw.io MCP',
      'générateur de diagrammes draw.io IA',
      'Next AI Draw.io Ollama',
      'Next AI Draw.io auto-hébergement',
      'licence Next AI Draw.io',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Next AI Draw.io est une application gratuite sous licence Apache-2.0 qui transforme un prompt de chat en diagramme draw.io modifiable, dans un navigateur, sous Windows, macOS et Linux ou via un serveur MCP pour agents de programmation IA.** Elle n\'a pas de modèle propre : la qualité du diagramme dépend du fournisseur et du modèle que vous connectez. Aucune politique de confidentialité n\'a été trouvée sur le site du développeur (vérifié le 18 novembre 2026) ; vérifiez où vont les données de votre diagramme avant de l\'utiliser pour un travail confidentiel.',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce que Next AI Draw.io et à qui s\'adresse-t-il ?',
        answer:
          'Next AI Draw.io est une interface de chat posée sur l\'éditeur de diagrammes draw.io. Vous décrivez un diagramme ou importez une image, l\'IA que vous avez configurée le dessine, et vous continuez à le modifier comme n\'importe quel fichier draw.io. Il convient à ceux qui dessinent souvent des diagrammes techniques et apportent leur propre clé d\'API ou un modèle local.',
        bullets: [
          'Trois usages : démo web, application de bureau, serveur MCP pour Claude Code, Cursor, Codex et VS Code.',
          'Licence : Apache-2.0, le code est donc open source et peut être auto-hébergé.',
          'Export en .drawio, .png ou .svg, le résultat n\'est donc pas enfermé.',
          'Compatible avec 25 fournisseurs d\'IA, dont des modèles locaux via Ollama.',
          'Chaque modification de l\'IA est enregistrée comme une version à comparer ou à restaurer.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Présentation', anchor: 'overview' },
      { label: 'Comment l\'obtenir', anchor: 'get-it' },
      { label: 'Configuration et modèles', anchor: 'requirements' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Confidentialité et flux de données', anchor: 'privacy' },
      { label: 'Pour qui', anchor: 'who-should-use' },
      { label: 'Limites et ce que nous n\'avons pas pu vérifier', anchor: 'who-should-not-use' },
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
            text: 'Next AI Draw.io vous laisse décrire un diagramme dans un chat et le faire dessiner par une IA de votre choix sur un canevas draw.io modifiable, dans un navigateur, en application de bureau ou via un serveur MCP.',
          },
          {
            type: 'plain-terms',
            text: 'Imaginez une fenêtre de chat collée à l\'éditeur draw.io. L\'IA écrit le diagramme, et vous pouvez déplacer les formes vous-même ou lui demander de ne modifier que celles que vous avez sélectionnées.',
          },
        ],
        items: [
          'L\'application de bureau a des installateurs pour macOS, Windows et Linux, et la démo dans le navigateur ne demande aucune installation.',
          'L\'application est gratuite sous Apache-2.0. Le site de démo a une limite d\'usage quotidienne que votre propre clé d\'API lève, et le fournisseur du modèle vous facture séparément.',
          'La dernière version est la v0.5.1 et le dépôt a reçu un commit le 14 novembre 2026, donc aucun avertissement de projet abandonné ne s\'applique.',
          'Le développeur indique que la tâche demande des modèles puissants et que les petits modèles produisent souvent des diagrammes défectueux.',
          'PromptQuorum n\'a pas testé l\'application, et aucune politique de confidentialité, aucune condition d\'utilisation ni aucune mention légale n\'a été trouvée.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'L\'application envoie votre demande et le diagramme actuel au modèle d\'IA que vous avez choisi. Ne saisissez pas d\'architecture confidentielle ni de données clients dans un modèle cloud, sauf si les conditions de ce fournisseur l\'autorisent.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Présentation',
        content: [
          '**Next AI Draw.io est une interface de chat pour draw.io qui produit des diagrammes que vous pouvez continuer à modifier à la main.**',
          'Le projet est maintenu par un développeur individuel, Dayuan Jiang (utilisateur GitHub DayuanJiang), et non par une entreprise. La version 0.5.1 a été publiée le 31 octobre 2026 et c\'est la dernière version GitHub. Le commit le plus récent de la branche par défaut date du 14 novembre 2026 : le développement se poursuit.',
          'Selon le README, vous décrivez un diagramme en une phrase, ou importez une capture d\'écran, un croquis, un PDF, du Markdown ou du code, et l\'IA le dessine sur un vrai canevas draw.io. L\'application embarque sa propre copie de draw.io : le résultat est donc un diagramme draw.io ordinaire, avec plusieurs pages, mise en forme et export. Des bibliothèques de formes intégrées couvrent les icônes AWS, Azure, GCP et Kubernetes.',
          'Le développeur publie aussi un serveur MCP, un paquet npm qui permet à des agents d\'IA comme Claude Code, Cursor, Codex et VS Code de dessiner sur le même canevas. MCP (Model Context Protocol) est le protocole par lequel les agents appellent des outils externes.',
          'Ces descriptions sont des déclarations du développeur. PromptQuorum n\'a pas exécuté l\'application et n\'a mesuré ni la qualité des diagrammes, ni la vitesse, ni le coût.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Comment l\'obtenir',
        content: [
          '**Vous pouvez ouvrir la démo web, télécharger un installateur de bureau depuis GitHub Releases ou l\'exécuter vous-même avec Docker.**',
          'La page Releases de la v0.5.1 liste un .dmg pour macOS (Apple Silicon et Intel), un .exe d\'installation et un .exe portable pour Windows, ainsi qu\'un AppImage, un .deb et un .rpm pour Linux. Le README indique de télécharger l\'installateur depuis cette page. L\'application de bureau est la même que la version web.',
        ],
        columns: ['Plateforme', 'Comment l\'obtenir'],
        rows: [
          { 'Plateforme': '[Site web](https://next-ai-drawio.jiang.jp/en)', 'Comment l\'obtenir': 'Ouvrir l\'éditeur dans un navigateur, sans installation' },
          { 'Plateforme': '[macOS](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', 'Comment l\'obtenir': 'Télécharger le .dmg, Apple Silicon ou Intel' },
          { 'Plateforme': '[Windows](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', 'Comment l\'obtenir': 'Télécharger le .exe d\'installation ou le portable' },
          { 'Plateforme': '[Linux](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', 'Comment l\'obtenir': 'Télécharger l\'AppImage, le .deb ou le .rpm' },
          { 'Plateforme': '[Docker](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/docker.md)', 'Comment l\'obtenir': 'Une commande docker run, puis ouvrir localhost:3000' },
          { 'Plateforme': '[Serveur MCP](https://next-ai-drawio.jiang.jp/en/mcp)', 'Comment l\'obtenir': 'Ajouter le paquet npm aux réglages MCP de votre agent' },
        ],
        note: 'Aucune page de politique de confidentialité n\'a été trouvée (vérifié le 18 novembre 2026). Le site indique que la clé saisie reste dans votre navigateur et n\'est jamais stockée sur le serveur.',
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration et modèles',
        content: [
          '**L\'application elle-même n\'indique aucun minimum matériel, car le modèle d\'IA fait le gros du travail et c\'est vous qui le choisissez.**',
          'Le README liste 25 fournisseurs, dont OpenAI, Anthropic, Google, DeepSeek, Ollama, SGLang, OpenRouter et un préréglage compatible OpenAI pour toute autre URL, comme vLLM ou LM Studio. Vous saisissez le fournisseur et la clé dans les Paramètres. Pour les modèles que vous hébergez, la configuration requise est celle du serveur de modèle.',
        ],
        columns: ['Élément', 'Chiffre indiqué'],
        rows: [
          { 'Élément': 'Système d\'exploitation', 'Chiffre indiqué': 'macOS, Windows, Linux (bureau) ; navigateur (démo)' },
          { 'Élément': 'Matériel', 'Chiffre indiqué': 'Dépend du modèle connecté' },
          { 'Élément': 'Puissance du modèle', 'Chiffre indiqué': 'Modèles puissants conseillés ; les petits peuvent échouer (README)' },
          { 'Élément': 'Modèles auto-hébergés', 'Chiffre indiqué': '32B+ paramètres suggérés (FAQ)' },
          { 'Élément': 'Appels d\'outils', 'Chiffre indiqué': 'Le serveur de modèle doit les activer (FAQ)' },
          { 'Élément': 'Réseau', 'Chiffre indiqué': 'Requis par les fournisseurs cloud ; build hors ligne possible' },
        ],
        note: 'Le guide hors ligne indique que le build télécharge draw.io une fois : la machine de build a donc besoin d\'internet ou d\'une version de draw.io copiée.',
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**Le cœur est le dessin par chat sur un vrai canevas draw.io, avec des versions pour annuler l\'IA.** Tous les points ci-dessous sont des déclarations du développeur tirées du README, du site et des notes de version.',
        ],
        items: [
          'Générer des diagrammes d\'architecture, des organigrammes, des diagrammes de séquence et plus à partir d\'une phrase.',
          'Importer une capture d\'écran, un croquis, un PDF, du Markdown ou du code : l\'IA le redessine ou dessine un diagramme de son contenu.',
          'Modifier par chat, ou sélectionner des formes sur le canevas et demander à l\'IA de ne changer que celles-ci.',
          'Chaque modification de l\'IA devient une carte de version que vous pouvez comparer au canevas, restaurer ou annuler.',
          'Bibliothèques d\'icônes intégrées pour AWS, Azure, GCP et Kubernetes, et connecteurs animés.',
          'Export à tout moment en .drawio, .png, .svg ou .drawio.svg.',
          'Les modèles qui raisonnent montrent leur réflexion ; l\'interface existe en anglais, chinois simplifié, chinois traditionnel et japonais, avec un mode sombre.',
          'Un serveur MCP avec un outil de capture d\'écran pour que l\'agent regarde le diagramme dessiné et le corrige.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**Votre demande et le diagramme actuel vont au modèle d\'IA que vous choisissez : le trajet des données dépend donc de ce fournisseur.**',
          'La documentation indique que l\'application envoie votre demande et le diagramme actuel au modèle sélectionné, et que la clé d\'API saisie reste dans votre navigateur sans jamais être stockée sur le serveur. Si le modèle tourne sur votre propre machine, par exemple via Ollama, la demande va à ce serveur local plutôt qu\'à un fournisseur cloud ; PromptQuorum n\'a pas vérifié si autre chose quitte la machine.',
          'Pour l\'auto-hébergement, le fichier env.example du dépôt décrit un traçage Langfuse facultatif et précise qu\'une fois configuré, l\'éditeur envoie aussi les noms des actions des utilisateurs. Le README décrit en outre un panneau d\'administration avec des réglages d\'observabilité et de quotas.',
          'Ni politique de confidentialité, ni conditions d\'utilisation, ni mentions légales n\'ont été trouvées sur le site ou dans le dépôt (vérifié le 18 novembre 2026) : ce que la démo hébergée enregistre n\'est donc pas documenté.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        content: [
          '**Next AI Draw.io convient à ceux qui dessinent souvent des diagrammes techniques et veulent un premier jet d\'IA qu\'ils peuvent encore modifier.**',
        ],
        items: [
          'Développeurs et architectes qui veulent des diagrammes AWS, Azure, GCP ou Kubernetes ébauchés à partir d\'une description.',
          'Équipes qui utilisent un agent de programmation IA et veulent qu\'il dessine des diagrammes via MCP.',
          'Utilisateurs soucieux de confidentialité qui peuvent auto-héberger l\'application ou connecter un modèle local via Ollama.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Limites et ce que nous n\'avons pas pu vérifier',
        content: [
          '**La qualité du résultat dépend du modèle, et plusieurs détails restent non vérifiés.**',
        ],
        items: [
          'Limite : selon le README, la tâche demande des modèles puissants, et les petits modèles produisent souvent des diagrammes défectueux.',
          'Limite : x-cmd indique que le résultat doit être relu par un humain et cite des connecteurs mal alignés, des nœuds en double et des styles incohérents.',
          'Limite : la démo hébergée a une limite d\'usage quotidienne ; un usage régulier demande donc votre propre clé d\'API ou l\'auto-hébergement.',
          'Non vérifié : ce que la démo hébergée ou l\'application de bureau enregistre ou envoie en plus du diagramme et de la demande. Ni politique de confidentialité, ni conditions, ni mentions légales n\'ont été trouvées (vérifié le 18 novembre 2026).',
          'Non vérifié : la localisation du développeur. Le profil GitHub cite une ville, mais aucune politique ni mention légale n\'indique de pays ; l\'annuaire n\'affiche donc pas de drapeau de siège.',
          'Non vérifié : tout lien entre ce projet et l\'entreprise derrière draw.io. Le README dit seulement que l\'application embarque sa propre copie de draw.io.',
          'Non vérifié : qualité des diagrammes, vitesse et coût selon le modèle. PromptQuorum n\'a pas testé l\'application, et les mesures du développeur n\'ont pas été examinées.',
          'Non vérifié : si les installateurs de bureau sont signés. Aucune source ne l\'indique.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Next AI Draw.io face aux alternatives',
        itemHeadings: true,
        content: [
          '**Next AI Draw.io est un éditeur de diagrammes piloté par chat, avec un serveur MCP. PromptQuorum ne l\'a pas comparé en pratique aux alternatives.** Les notes ci-dessous viennent du README du développeur et du test PromptQuorum de chaque outil.',
        ],
        columns: ['Outil', 'Noté dans les sources'],
        rows: [
          { 'Outil': 'Next AI Draw.io', 'Noté dans les sources': 'Apache-2.0 ; canevas draw.io ; web, bureau, MCP ; tout fournisseur' },
          { 'Outil': 'Generate intégré à draw.io', 'Noté dans les sources': 'Fonctionne dans draw.io avec un modèle hébergé ou votre clé (README)' },
          { 'Outil': '[Presenton](/fr/power-local-llm/presenton-review)', 'Noté dans les sources': 'Présentations IA open source ; modèle local ou cloud' },
          { 'Outil': '[Kition](/fr/power-local-llm/kition-review)', 'Noté dans les sources': 'Espace de travail open source ; les agents modifient des fichiers via MCP' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Next AI Draw.io est-il gratuit ?',
            a: 'L\'application est gratuite sous Apache-2.0. La démo hébergée a une limite d\'usage quotidienne que vous levez en saisissant votre propre fournisseur et clé d\'API, et ce fournisseur vous facture séparément. Le README invite à parrainer le projet pour maintenir la démo.',
          },
          {
            q: 'Puis-je l\'utiliser avec des modèles locaux ?',
            a: 'Oui, selon le README, qui cite Ollama, SGLang et un préréglage compatible OpenAI pour des URL comme vLLM ou LM Studio. La FAQ indique que de petits modèles locaux se contentent souvent de réfléchir sans jamais dessiner, suggère 32B paramètres ou plus et précise que le serveur de modèle doit avoir activé les appels d\'outils.',
          },
          {
            q: 'Puis-je l\'exécuter hors ligne ou sur un intranet ?',
            a: 'Oui, en auto-hébergement. La documentation indique que l\'application embarque sa propre copie de draw.io, donc le navigateur ne contacte pas embed.diagrams.net, mais le build a besoin d\'internet une fois pour télécharger draw.io. L\'insertion d\'images par adresse web depuis d\'autres sites a une limite documentée dans les exports.',
          },
          {
            q: 'Comment les agents de programmation IA l\'utilisent-ils ?',
            a: 'Via le serveur MCP du développeur, un paquet npm. Le README donne une commande pour l\'ajouter à Claude Code et des installations en un clic pour VS Code et Cursor, et le diagramme apparaît dans votre navigateur pendant que l\'agent dessine.',
          },
          {
            q: 'Puis-je ouvrir le résultat dans draw.io ordinaire ?',
            a: 'Oui, selon le README : vous pouvez exporter à tout moment en .drawio, .png, .svg ou .drawio.svg, et le résultat est un diagramme draw.io ordinaire.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Next AI Draw.io mérite un coup d\'œil si vous dessinez régulièrement des diagrammes techniques et acceptez de choisir et de payer votre propre modèle d\'IA.**',
          'Sur le papier, il couvre beaucoup : un canevas draw.io ordinaire, un historique de versions qui annule les modifications de l\'IA, 25 fournisseurs dont des locaux, des installateurs de bureau, Docker et un serveur MCP. Il est gratuit sous Apache-2.0, et le développement est actif, avec une version le 31 octobre 2026 et un commit le 14 novembre 2026.',
          'Les compromis sont réels. La qualité dépend du modèle connecté, la démo est limitée et aucune politique de confidentialité n\'a été trouvée : le trajet des données n\'est pas plus clair que le fournisseur que vous choisissez. PromptQuorum n\'a pas testé l\'application. Essayez d\'abord un petit diagramme non confidentiel, et utilisez un modèle puissant ou votre propre serveur pour ce qui compte.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site web de Next AI Draw.io](https://next-ai-drawio.jiang.jp/en) — description du développeur, liens vers l\'éditeur et les téléchargements, consulté le 18 novembre 2026.',
          '[Page À propos](https://next-ai-drawio.jiang.jp/en/about) — trois usages, liste des fournisseurs, gestion de la clé et liens du pied de page, consulté le 18 novembre 2026.',
          '[Documentation](https://next-ai-drawio.jiang.jp/en/docs) — données envoyées au modèle, gestion de la clé d\'API et limite de la démo, consulté le 18 novembre 2026.',
          '[Dépôt GitHub](https://github.com/DayuanJiang/next-ai-draw-io) — licence, dernier commit et description du projet, consulté le 18 novembre 2026.',
          '[README](https://github.com/DayuanJiang/next-ai-draw-io#readme) — fonctionnalités, options d\'installation, configuration MCP, fournisseurs et conseils sur les modèles, consulté le 18 novembre 2026.',
          '[Version v0.5.1](https://github.com/DayuanJiang/next-ai-draw-io/releases/tag/v0.5.1) — dernière version, date et fichiers d\'installation, consulté le 18 novembre 2026.',
          '[Guide Docker](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/docker.md) — démarrage du conteneur en une commande, consulté le 18 novembre 2026.',
          '[Guide de déploiement hors ligne](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/offline-deployment.md) — draw.io embarqué et prérequis du build, consulté le 18 novembre 2026.',
          '[FAQ](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/FAQ.md) — conseils sur les modèles auto-hébergés et réglage des appels d\'outils, consulté le 18 novembre 2026.',
          '[env.example](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/env.example) — note sur le traçage Langfuse facultatif, consulté le 18 novembre 2026.',
          '[Page x-cmd](https://www.x-cmd.com/install/next-ai-draw-io/) — commentaire d\'un tiers sur la relecture du résultat, consulté le 18 novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Presenton](/fr/power-local-llm/presenton-review) — générateur de présentations IA open source qui crée des présentations modifiables à partir d\'un prompt, avec un modèle local ou cloud.',
          '[Test de Kition](/fr/power-local-llm/kition-review) — espace de travail de bureau open source où des agents d\'IA modifient documents, diapositives et plus via MCP.',
          '[Test de Screenpipe](/fr/power-local-llm/screenpipe-review) — application de bureau qui enregistre l\'écran et l\'audio en local et expose l\'historique aux agents via MCP.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d\'IA locale.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/next-ai-draw-io-review-hero-ja.webp',
    title: 'Next AI Draw.io レビュー：チャットでdraw.ioの図を描く、Web・デスクトップ・MCP対応アプリ',
    seoTitle: 'Next AI Draw.ioレビュー：AIでdraw.ioの図を作成',
    intro:
      'Next AI Draw.ioは、チャットで図を説明すると、AIが編集可能なdraw.ioキャンバスに描いてくれるオープンソースのアプリです。ブラウザ、デスクトップアプリ、MCPサーバーのいずれでも使え、AIプロバイダーとモデルは自分で選びます。このレビューは、開発者のサイト、GitHubリポジトリとリリースに基づき、2026年11月18日に確認しました。PromptQuorumはこのアプリを実際には試していません。',
    metaDescription:
      'Next AI Draw.ioはチャットからAIが編集可能なdraw.ioの図を描きます。Apache-2.0、Web・デスクトップ・MCP対応。プライバシー、制限、導入方法を解説。',
    twitterDescription:
      'Next AI Draw.ioは、選んだAIモデルでチャットから編集可能なdraw.ioの図を描きます。Apache-2.0、Web・デスクトップ・MCP対応。PromptQuorumは未検証。',
    audience:
      'アーキテクチャ図、フロー図、プロセス図を描き、最初の下書きをAIに任せたい開発者、アーキテクト、アナリスト',
    readTime: '6分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Next AI Draw.io',
    targetKeywords: [
      'Next AI Draw.io レビュー',
      'Next AI Draw.io MCP',
      'AI draw.io 図 生成',
      'Next AI Draw.io Ollama',
      'Next AI Draw.io セルフホスト',
      'Next AI Draw.io ライセンス',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Next AI Draw.ioは、チャットのプロンプトを編集可能なdraw.ioの図に変えるApache-2.0の無料アプリで、ブラウザ、Windows・macOS・Linux、またはAIコーディングエージェント向けのMCPサーバー経由で使えます。** 独自のモデルは持たないため、図の品質は接続するプロバイダーとモデルによって決まります。開発者のサイトではプライバシーポリシーが見つかりませんでした（2026年11月18日確認）。そのため、機密性の高い作業で使う前に、図のデータがどこへ送られるかを確認してください。',
    quickAnswerTop: {
      ja: {
        question: 'Next AI Draw.ioとは何で、誰に向いていますか？',
        answer:
          'Next AI Draw.ioは、図表エディタdraw.ioの上に載ったチャットインターフェースです。図を説明するか画像をアップロードすると、設定したAIが描き、その後は通常のdraw.ioファイルと同じように編集を続けられます。技術的な図を頻繁に描き、自分のAPIキーやローカルモデルを用意できる人に向いています。',
        bullets: [
          '使い方は3通り：Webデモ、デスクトップアプリ、Claude Code・Cursor・Codex・VS Code向けMCPサーバー。',
          'ライセンス：Apache-2.0。コードはオープンソースで、セルフホストできます。',
          '.drawio、.png、.svgで書き出せるため、成果物が囲い込まれません。',
          'Ollama経由のローカルモデルを含む25のAIプロバイダーに対応します。',
          'AIによる変更はそれぞれバージョンとして保存され、比較や復元ができます。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: 'tldr' },
      { label: '概要', anchor: 'overview' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '動作要件とモデル', anchor: 'requirements' },
      { label: '機能', anchor: 'features' },
      { label: 'プライバシーとデータの流れ', anchor: 'privacy' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '制限と確認できなかったこと', anchor: 'who-should-not-use' },
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
            text: 'Next AI Draw.ioは、チャットで図を説明すると、選んだAIが編集可能なdraw.ioキャンバスに描いてくれるアプリで、ブラウザ、デスクトップアプリ、MCPサーバーのいずれでも使えます。',
          },
          {
            type: 'plain-terms',
            text: 'draw.ioエディタにチャット画面が付いたものと考えてください。AIが図を書き、あなたは図形を自分でドラッグしたり、選択した図形だけを変更するようAIに頼んだりできます。',
          },
        ],
        items: [
          'デスクトップアプリにはmacOS、Windows、Linux向けのインストーラーがあり、ブラウザのデモはインストール不要です。',
          'アプリはApache-2.0で無料です。デモサイトには1日の利用上限があり、自分のAPIキーで解除できます。モデルプロバイダーの料金は別にかかります。',
          '最新リリースはv0.5.1で、リポジトリには2026年11月14日にコミットがあるため、放置プロジェクトの警告は該当しません。',
          '開発者は、この作業には高性能なモデルが必要で、小さなモデルは壊れた図を出しやすいと述べています。',
          'PromptQuorumはこのアプリを試しておらず、プライバシーポリシー、利用規約、法的表示のいずれも見つかりませんでした。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このアプリは、あなたのリクエストと現在の図を、選んだAIモデルに送ります。機密性の高い構成情報や顧客データは、そのプロバイダーの規約で認められている場合を除き、クラウドモデルに入力しないでください。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**Next AI Draw.ioは、手作業で編集を続けられる図を生成する、draw.io向けのチャットフロントエンドです。**',
          'プロジェクトを保守しているのは企業ではなく、個人開発者のDayuan Jiang氏（GitHubユーザー名DayuanJiang）です。バージョン0.5.1は2026年10月31日にリリースされ、GitHubの最新リリースです。デフォルトブランチの最新コミットは2026年11月14日で、開発は続いています。',
          'READMEによると、図を一文で説明するか、スクリーンショット、スケッチ、PDF、Markdown、コードをアップロードすると、AIが本物のdraw.ioキャンバスに描きます。アプリはdraw.io本体のコピーを同梱しているため、結果は複数ページ、スタイル変更、書き出しに対応した通常のdraw.ioの図です。組み込みの図形ライブラリは、AWS、Azure、GCP、Kubernetesのアイコンに対応します。',
          '開発者はMCPサーバー（npmパッケージ）も公開しており、Claude Code、Cursor、Codex、VS Codeなどのエージェントが同じキャンバスに描けます。MCP（Model Context Protocol）は、エージェントが外部ツールを呼び出すためのプロトコルです。',
          'これらの記述は開発者の説明です。PromptQuorumはアプリを実行しておらず、図の品質、速度、コストは測定していません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Webデモを開く、GitHub Releasesからデスクトップ用インストーラーをダウンロードする、Dockerで自分で動かす、のいずれかです。**',
          'v0.5.1のReleasesページには、macOS（Apple SiliconとIntel）向けの.dmg、Windows向けのセットアップ.exeとポータブル.exe、Linux向けのAppImage、.deb、.rpmが並んでいます。READMEは、そのページからインストーラーをダウンロードするよう案内しています。デスクトップアプリはWeb版と同じアプリです。',
        ],
        columns: ['プラットフォーム', '入手方法'],
        rows: [
          { 'プラットフォーム': '[ウェブサイト](https://next-ai-drawio.jiang.jp/en)', '入手方法': 'ブラウザでエディタを開く。インストール不要' },
          { 'プラットフォーム': '[macOS](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', '入手方法': '.dmgをダウンロード（Apple SiliconまたはIntel）' },
          { 'プラットフォーム': '[Windows](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', '入手方法': 'セットアップ.exeまたはポータブル.exeをダウンロード' },
          { 'プラットフォーム': '[Linux](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', '入手方法': 'AppImage、.deb、.rpmをダウンロード' },
          { 'プラットフォーム': '[Docker](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/docker.md)', '入手方法': 'docker runを1回実行し、localhost:3000を開く' },
          { 'プラットフォーム': '[MCPサーバー](https://next-ai-drawio.jiang.jp/en/mcp)', '入手方法': 'npmパッケージをエージェントのMCP設定に追加' },
        ],
        note: 'プライバシーポリシーの専用ページは見つかりませんでした（2026年11月18日確認）。サイトは、入力したキーはブラウザに保存され、サーバーには保存されないと述べています。',
      },
      requirements: {
        id: 'requirements',
        title: '動作要件とモデル',
        content: [
          '**アプリ自体にはハードウェアの下限が示されていません。重い処理はAIモデルが担い、そのモデルは自分で選ぶためです。**',
          'READMEは25のプロバイダーを挙げており、OpenAI、Anthropic、Google、DeepSeek、Ollama、SGLang、OpenRouter、そしてvLLMやLM Studioなど他のURL向けのOpenAI互換プリセットが含まれます。プロバイダーとキーは設定画面で入力します。自分でホストするモデルについては、モデルサーバー側の要件が必要です。',
        ],
        columns: ['項目', '記載されている数値'],
        rows: [
          { '項目': 'OS', '記載されている数値': 'macOS、Windows、Linux（デスクトップ）、ブラウザ（デモ）' },
          { '項目': 'ハードウェア', '記載されている数値': '接続するモデルによる' },
          { '項目': 'モデルの性能', '記載されている数値': '高性能モデル推奨。小型は壊れる場合あり（README）' },
          { '項目': 'セルフホストモデル', '記載されている数値': '32Bパラメータ以上を推奨（FAQ）' },
          { '項目': 'ツール呼び出し', '記載されている数値': 'モデルサーバー側で有効化が必要（FAQ）' },
          { '項目': 'ネットワーク', '記載されている数値': 'クラウドには必要。オフラインビルドも可能' },
        ],
        note: 'オフライン向けガイドによると、ビルド時にdraw.ioを一度ダウンロードするため、ビルドするマシンにはインターネット接続か、コピーしたdraw.ioのリリースが必要です。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**中心となるのは、本物のdraw.ioキャンバス上でのチャット操作による作図と、AIの変更を取り消せるバージョン管理です。** 以下はすべて、README、サイト、リリースノートに基づく開発者の説明です。',
        ],
        items: [
          'アーキテクチャ図、フローチャート、シーケンス図などを一文から生成します。',
          'スクリーンショット、スケッチ、PDF、Markdown、コードをアップロードすると、AIが描き直すか、その内容の図を描きます。',
          'チャットで編集するか、キャンバス上の図形を選択して、その部分だけを変更するようAIに頼めます。',
          'AIによる変更はそれぞれバージョンカードになり、キャンバスとの比較、復元、取り消しができます。',
          'AWS、Azure、GCP、Kubernetesのアイコンライブラリと、アニメーション付きコネクタを内蔵しています。',
          '.drawio、.png、.svg、.drawio.svgでいつでも書き出せます。',
          '推論するモデルは思考過程を表示します。画面は英語、簡体字中国語、繁体字中国語、日本語に対応し、ダークモードもあります。',
          'MCPサーバーにはスクリーンショットツールがあり、エージェントが描いた図を確認して修正できます。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**リクエストと現在の図は、選んだAIモデルに送られるため、データの経路はそのプロバイダー次第です。**',
          'ドキュメントによると、アプリはリクエストと現在の図を選択したモデルに送り、入力したAPIキーはブラウザに保存されてサーバーには保存されません。モデルが自分のマシン上で動いている場合（たとえばOllama経由）は、リクエストはクラウドプロバイダーではなくそのローカルサーバーに送られます。それ以外に何かがマシンの外へ出ていないかは、PromptQuorumは確認していません。',
          'セルフホストする場合、リポジトリのenv.exampleには、任意のLangfuseトレーシングが記載されており、設定するとエディタがユーザー操作の名前も送信するとあります。READMEには、オブザーバビリティとクォータの設定を持つ管理パネルも記載されています。',
          'サイトにもリポジトリにも、プライバシーポリシー、利用規約、法的表示は見つかりませんでした（2026年11月18日確認）。そのため、ホスト版デモが何を記録するかは文書化されていません。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**Next AI Draw.ioは、技術的な図を頻繁に描き、あとから編集できるAIの下書きがほしい人に向いています。**',
        ],
        items: [
          '説明文からAWS、Azure、GCP、Kubernetesの図の下書きを作りたい開発者やアーキテクト。',
          'AIコーディングエージェントを使い、MCP経由で図を描かせたいチーム。',
          'セルフホストするか、Ollama経由でローカルモデルを接続できる、プライバシー重視のユーザー。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '制限と確認できなかったこと',
        content: [
          '**出力の品質はモデルに左右され、いくつかの点は確認できていません。**',
        ],
        items: [
          '制限：READMEによると、この作業には高性能なモデルが必要で、小さなモデルは壊れた図を出しやすいとされています。',
          '制限：x-cmdは、出力には人の確認が必要で、コネクタのずれ、ノードの重複、スタイルの不統一があると指摘しています。',
          '制限：ホスト版デモには1日の利用上限があるため、日常的に使うには自分のAPIキーかセルフホストが必要です。',
          '未確認：ホスト版デモやデスクトップアプリが、図とリクエスト以外に何を記録・送信するか。プライバシーポリシー、利用規約、法的表示は見つかりませんでした（2026年11月18日確認）。',
          '未確認：開発者の所在地。GitHubプロフィールには都市名がありますが、ポリシーや法的表示に国名の記載がないため、ディレクトリには本拠地の国旗を表示していません。',
          '未確認：このプロジェクトとdraw.ioを提供する企業との関係。READMEは、アプリがdraw.ioのコピーを同梱していると述べているだけです。',
          '未確認：モデルごとの図の品質、速度、コスト。PromptQuorumはアプリを試しておらず、開発者自身の測定も確認していません。',
          '未確認：デスクトップ用インストーラーにコード署名があるかどうか。情報源に記載はありません。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Next AI Draw.ioと代替ツールの比較',
        itemHeadings: true,
        content: [
          '**Next AI Draw.ioは、MCPサーバーを備えた、チャットで操作する図表エディタです。PromptQuorumは代替ツールとの実機比較は行っていません。** 以下の記載は、開発者のREADMEと、各ツールのPromptQuorumレビューに基づきます。',
        ],
        columns: ['ツール', '情報源での記載'],
        rows: [
          { 'ツール': 'Next AI Draw.io', '情報源での記載': 'Apache-2.0、draw.ioキャンバス、Web・デスクトップ・MCP、任意のプロバイダー' },
          { 'ツール': 'draw.io内蔵のGenerate', '情報源での記載': 'draw.io内でホスト型モデルまたは自分のキーで動作（README）' },
          { 'ツール': '[Presenton](/ja/power-local-llm/presenton-review)', '情報源での記載': 'オープンソースのAIスライド生成。ローカルまたはクラウドモデル' },
          { 'ツール': '[Kition](/ja/power-local-llm/kition-review)', '情報源での記載': 'オープンソースの作業環境。エージェントがMCP経由でファイルを編集' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Next AI Draw.ioは無料ですか？',
            a: 'アプリはApache-2.0で無料です。ホスト版デモには1日の利用上限があり、自分のプロバイダーとAPIキーを入力すると解除できます。そのプロバイダーの料金は別にかかります。READMEは、デモの運営を続けるためのスポンサーを呼びかけています。',
          },
          {
            q: 'ローカルモデルで使えますか？',
            a: 'はい。READMEにはOllama、SGLang、vLLMやLM StudioなどのURL向けOpenAI互換プリセットが挙がっています。FAQは、小さなローカルモデルは考えるだけで図を描かないことが多いと述べ、32Bパラメータ以上を勧め、モデルサーバー側でツール呼び出しを有効にする必要があるとしています。',
          },
          {
            q: 'オフラインやイントラネットで動かせますか？',
            a: 'はい、セルフホストすれば可能です。ドキュメントによると、アプリはdraw.ioのコピーを同梱しているため、ブラウザはembed.diagrams.netに接続しませんが、draw.ioをダウンロードするために、ビルド時に一度インターネット接続が必要です。他サイトの画像をWebアドレスで挿入する場合、書き出しに制限があると文書化されています。',
          },
          {
            q: 'AIコーディングエージェントはどう使いますか？',
            a: '開発者のMCPサーバー（npmパッケージ）を通じて使います。READMEには、Claude Codeに追加するコマンドと、VS CodeおよびCursor向けのワンクリックインストールが載っており、エージェントが描くのに合わせて、図がブラウザに表示されます。',
          },
          {
            q: '結果を通常のdraw.ioで開けますか？',
            a: 'はい。READMEによると、.drawio、.png、.svg、.drawio.svgでいつでも書き出せ、結果は通常のdraw.ioの図です。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**Next AI Draw.ioは、技術的な図を定期的に描き、自分でAIモデルを選んで費用を負担することに抵抗がない人なら、試す価値があります。**',
          '仕様上は幅広くカバーしています。通常のdraw.ioキャンバス、AIの変更を取り消せるバージョン履歴、ローカルを含む25のプロバイダー、デスクトップ用インストーラー、Docker、MCPサーバーです。Apache-2.0で無料、開発も活発で、2026年10月31日にリリース、2026年11月14日にコミットがあります。',
          'トレードオフは現実的です。品質は接続するモデルに左右され、デモには上限があり、プライバシーポリシーも見つからなかったため、データの経路は選んだプロバイダー並みにしか分かりません。PromptQuorumはこのアプリを試していません。まずは小さく機密性のない図で試し、重要な作業には高性能なモデルか自前のサーバーを使ってください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Next AI Draw.ioのウェブサイト](https://next-ai-drawio.jiang.jp/en) — 開発者による説明、エディタとダウンロードへのリンク。2026年11月18日に確認。',
          '[Aboutページ](https://next-ai-drawio.jiang.jp/en/about) — 3通りの使い方、プロバイダー一覧、キーの扱い、フッターのリンク。2026年11月18日に確認。',
          '[ドキュメント](https://next-ai-drawio.jiang.jp/en/docs) — モデルに送られるデータ、APIキーの扱い、デモの上限。2026年11月18日に確認。',
          '[GitHubリポジトリ](https://github.com/DayuanJiang/next-ai-draw-io) — ライセンス、最新コミット、プロジェクトの説明。2026年11月18日に確認。',
          '[README](https://github.com/DayuanJiang/next-ai-draw-io#readme) — 機能、導入方法、MCPの設定、プロバイダー、モデルに関する助言。2026年11月18日に確認。',
          '[リリースv0.5.1](https://github.com/DayuanJiang/next-ai-draw-io/releases/tag/v0.5.1) — 最新バージョン、日付、インストーラーのファイル。2026年11月18日に確認。',
          '[Dockerガイド](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/docker.md) — コマンド1つでのコンテナ起動。2026年11月18日に確認。',
          '[オフライン展開ガイド](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/offline-deployment.md) — 同梱のdraw.ioとビルド要件。2026年11月18日に確認。',
          '[FAQ](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/FAQ.md) — セルフホストモデルに関する助言とツール呼び出しの設定。2026年11月18日に確認。',
          '[env.example](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/env.example) — 任意のLangfuseトレーシングに関する記載。2026年11月18日に確認。',
          '[x-cmdのページ](https://www.x-cmd.com/install/next-ai-draw-io/) — 出力の確認に関する第三者のコメント。2026年11月18日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Presentonレビュー](/ja/power-local-llm/presenton-review) — プロンプトから編集可能なスライドを作るオープンソースのAIプレゼン生成ツール。ローカルまたはクラウドモデルを使用。',
          '[Kitionレビュー](/ja/power-local-llm/kition-review) — AIエージェントがMCP経由で文書やスライドなどを編集する、オープンソースのデスクトップ作業環境。',
          '[Screenpipeレビュー](/ja/power-local-llm/screenpipe-review) — 画面と音声をローカルに記録し、履歴をMCP経由でエージェントに提供するデスクトップアプリ。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/next-ai-draw-io-review-hero-pt.webp',
    title: 'Análise do Next AI Draw.io: diagramas do draw.io por chat na web, no desktop e via MCP',
    seoTitle: 'Análise do Next AI Draw.io: editor draw.io com IA e MCP',
    intro:
      'O Next AI Draw.io é um app de código aberto em que você descreve um diagrama em um chat e uma IA o desenha em uma tela editável do draw.io. Ele roda no navegador, como app de desktop ou como servidor MCP, e o provedor de IA e o modelo são escolhidos por você. Esta análise se baseia no site do desenvolvedor, no repositório do GitHub e nas versões publicadas, verificados em 18 de novembro de 2026. A PromptQuorum não testou o app.',
    metaDescription:
      'O Next AI Draw.io desenha diagramas editáveis do draw.io com IA a partir de um chat. Apache-2.0, web, desktop e MCP. Privacidade, limites, instalação.',
    twitterDescription:
      'O Next AI Draw.io desenha diagramas editáveis do draw.io a partir de um prompt de chat, com o modelo de IA que você escolher. Apache-2.0, web, desktop e MCP; sem teste da PromptQuorum.',
    audience:
      'Desenvolvedores, arquitetos e analistas que desenham diagramas de arquitetura, fluxo e processo e querem que uma IA produza o primeiro rascunho',
    readTime: '6 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Next AI Draw.io',
    targetKeywords: [
      'análise do Next AI Draw.io',
      'Next AI Draw.io MCP',
      'gerador de diagramas draw.io com IA',
      'Next AI Draw.io Ollama',
      'Next AI Draw.io auto-hospedagem',
      'licença do Next AI Draw.io',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O Next AI Draw.io é um app gratuito com licença Apache-2.0 que transforma um prompt de chat em um diagrama editável do draw.io, no navegador, no Windows, macOS e Linux ou por meio de um servidor MCP para agentes de programação com IA.** Ele não tem modelo próprio, então a qualidade do diagrama depende do provedor e do modelo que você conectar. Não foi encontrada política de privacidade no site do desenvolvedor (verificado em 18 de novembro de 2026); confira para onde vão os dados do seu diagrama antes de usá-lo em trabalho confidencial.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o Next AI Draw.io e para quem ele serve?',
        answer:
          'O Next AI Draw.io é uma interface de chat sobre o editor de diagramas draw.io. Você descreve um diagrama ou envia uma imagem, a IA que você configurou o desenha e você continua editando como qualquer arquivo do draw.io. Ele serve para quem desenha diagramas técnicos com frequência e leva a própria chave de API ou um modelo local.',
        bullets: [
          'Três formas de usar: demo web, app de desktop e servidor MCP para Claude Code, Cursor, Codex e VS Code.',
          'Licença: Apache-2.0, então o código é aberto e pode ser auto-hospedado.',
          'Exportação como .drawio, .png ou .svg, então o resultado não fica preso.',
          'Funciona com 25 provedores de IA, incluindo modelos locais via Ollama.',
          'Cada alteração da IA é salva como uma versão que você pode comparar ou restaurar.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: 'tldr' },
      { label: 'Visão geral', anchor: 'overview' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Requisitos e modelos', anchor: 'requirements' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Privacidade e fluxo de dados', anchor: 'privacy' },
      { label: 'Para quem serve', anchor: 'who-should-use' },
      { label: 'Limites e o que não conseguimos verificar', anchor: 'who-should-not-use' },
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
            text: 'O Next AI Draw.io deixa você descrever um diagrama em um chat e fazer uma IA da sua escolha desenhá-lo em uma tela editável do draw.io, no navegador, como app de desktop ou por meio de um servidor MCP.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em uma janela de chat acoplada ao editor do draw.io. A IA escreve o diagrama e você pode arrastar as formas ou pedir que ela altere apenas as que você selecionou.',
          },
        ],
        items: [
          'O app de desktop tem instaladores para macOS, Windows e Linux, e a demo no navegador não exige instalação.',
          'O app é gratuito sob Apache-2.0. O site da demo tem um limite diário de uso que sua própria chave de API remove, e o provedor do modelo cobra você à parte.',
          'A versão mais recente é a v0.5.1 e o repositório teve um commit em 14 de novembro de 2026, então nenhum aviso de projeto abandonado se aplica.',
          'O desenvolvedor diz que a tarefa exige modelos fortes e que modelos pequenos tendem a produzir diagramas quebrados.',
          'A PromptQuorum não testou o app, e não foram encontrados política de privacidade, termos nem aviso legal.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O app envia sua solicitação e o diagrama atual ao modelo de IA que você escolheu. Não coloque arquitetura confidencial nem dados de clientes em um modelo na nuvem, a menos que os termos desse provedor permitam.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O Next AI Draw.io é um front-end de chat para o draw.io que produz diagramas que você pode continuar editando à mão.**',
          'O projeto é mantido por um desenvolvedor individual, Dayuan Jiang (usuário do GitHub DayuanJiang), e não por uma empresa. A versão 0.5.1 foi lançada em 31 de outubro de 2026 e é a mais recente no GitHub. O commit mais novo da branch padrão é de 14 de novembro de 2026, então o desenvolvimento continua.',
          'Segundo o README, você descreve um diagrama em uma frase, ou envia uma captura de tela, um esboço, um PDF, Markdown ou código, e a IA o desenha em uma tela real do draw.io. O app inclui a própria cópia do draw.io, então o resultado é um diagrama comum do draw.io, com várias páginas, mudança de estilo e exportação. As bibliotecas de formas embutidas cobrem ícones de AWS, Azure, GCP e Kubernetes.',
          'O desenvolvedor também publica um servidor MCP, um pacote npm que permite a agentes de IA como Claude Code, Cursor, Codex e VS Code desenhar na mesma tela. MCP (Model Context Protocol) é o protocolo que os agentes usam para chamar ferramentas externas.',
          'Essas descrições são afirmações do desenvolvedor. A PromptQuorum não executou o app e não mediu a qualidade dos diagramas, a velocidade nem o custo.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**Você pode abrir a demo web, baixar um instalador de desktop no GitHub Releases ou rodar o app você mesmo com Docker.**',
          'A página de Releases da v0.5.1 lista um .dmg para macOS (Apple Silicon e Intel), um .exe de instalação e um .exe portátil para Windows, e um AppImage, um .deb e um .rpm para Linux. O README orienta baixar o instalador dessa página. O app de desktop é o mesmo da versão web.',
        ],
        columns: ['Plataforma', 'Como obter'],
        rows: [
          { 'Plataforma': '[Site](https://next-ai-drawio.jiang.jp/en)', 'Como obter': 'Abra o editor no navegador, sem instalar nada' },
          { 'Plataforma': '[macOS](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', 'Como obter': 'Baixe o .dmg, Apple Silicon ou Intel' },
          { 'Plataforma': '[Windows](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', 'Como obter': 'Baixe o .exe de instalação ou o portátil' },
          { 'Plataforma': '[Linux](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', 'Como obter': 'Baixe o AppImage, .deb ou .rpm' },
          { 'Plataforma': '[Docker](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/docker.md)', 'Como obter': 'Um comando docker run, depois abra localhost:3000' },
          { 'Plataforma': '[Servidor MCP](https://next-ai-drawio.jiang.jp/en/mcp)', 'Como obter': 'Adicione o pacote npm às configurações MCP do agente' },
        ],
        note: 'Não foi encontrada uma página de política de privacidade (verificado em 18 de novembro de 2026). O site diz que a chave que você digita fica no navegador e nunca é armazenada no servidor.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos e modelos',
        content: [
          '**O app em si não indica um mínimo de hardware, porque o modelo de IA faz o trabalho pesado e é você quem o escolhe.**',
          'O README lista 25 provedores, entre eles OpenAI, Anthropic, Google, DeepSeek, Ollama, SGLang, OpenRouter e uma predefinição compatível com OpenAI para qualquer outra URL, como vLLM ou LM Studio. Você informa o provedor e a chave em Configurações. Para modelos hospedados por você, valem os requisitos do servidor do modelo.',
        ],
        columns: ['Item', 'Valor informado'],
        rows: [
          { 'Item': 'Sistema operacional', 'Valor informado': 'macOS, Windows, Linux (desktop); navegador (demo)' },
          { 'Item': 'Hardware', 'Valor informado': 'Depende do modelo conectado' },
          { 'Item': 'Força do modelo', 'Valor informado': 'Modelos fortes recomendados; pequenos podem falhar (README)' },
          { 'Item': 'Modelos auto-hospedados', 'Valor informado': '32B+ parâmetros sugeridos (FAQ)' },
          { 'Item': 'Chamadas de ferramentas', 'Valor informado': 'O servidor do modelo precisa ativá-las (FAQ)' },
          { 'Item': 'Rede', 'Valor informado': 'Provedores na nuvem precisam; build offline possível' },
        ],
        note: 'O guia offline diz que o build baixa o draw.io uma vez, então a máquina de build precisa de internet ou de uma versão copiada do draw.io.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O núcleo é desenhar por chat em uma tela real do draw.io, com versões para desfazer a IA.** Todos os itens abaixo são afirmações do desenvolvedor no README, no site e nas notas de versão.',
        ],
        items: [
          'Gerar diagramas de arquitetura, fluxogramas, diagramas de sequência e mais a partir de uma frase.',
          'Enviar captura de tela, esboço, PDF, Markdown ou código, e a IA o redesenha ou desenha um diagrama do conteúdo.',
          'Editar por chat, ou selecionar formas na tela e pedir à IA que altere só essas.',
          'Cada alteração da IA vira um cartão de versão que você pode comparar com a tela, restaurar ou desfazer.',
          'Bibliotecas de ícones embutidas de AWS, Azure, GCP e Kubernetes, e conectores animados.',
          'Exportar a qualquer momento como .drawio, .png, .svg ou .drawio.svg.',
          'Modelos que raciocinam mostram o raciocínio; a interface está em inglês, chinês simplificado, chinês tradicional e japonês, com modo escuro.',
          'Um servidor MCP com ferramenta de captura de tela para o agente ver o diagrama desenhado e corrigi-lo.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**Sua solicitação e o diagrama atual vão para o modelo de IA que você escolher, então o caminho dos dados depende desse provedor.**',
          'A documentação diz que o app envia sua solicitação e o diagrama atual ao modelo selecionado, e que a chave de API digitada fica no navegador e nunca é armazenada no servidor. Se o modelo roda na sua própria máquina, por exemplo via Ollama, a solicitação vai para esse servidor local em vez de um provedor na nuvem; a PromptQuorum não verificou se mais alguma coisa sai da máquina.',
          'Para quem auto-hospeda, o env.example do repositório descreve um rastreamento opcional com Langfuse e diz que, com ele configurado, o editor também envia os nomes das ações dos usuários. O README descreve ainda um painel de administração com configurações de observabilidade e cotas.',
          'Não foram encontrados política de privacidade, termos nem aviso legal no site nem no repositório (verificado em 18 de novembro de 2026), então o que a demo hospedada registra não está documentado.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O Next AI Draw.io serve para quem desenha diagramas técnicos com frequência e quer um primeiro rascunho de IA que ainda possa editar.**',
        ],
        items: [
          'Desenvolvedores e arquitetos que querem esboçar diagramas de AWS, Azure, GCP ou Kubernetes a partir de uma descrição.',
          'Equipes que usam um agente de programação com IA e querem que ele desenhe diagramas via MCP.',
          'Usuários atentos à privacidade que podem auto-hospedar ou conectar um modelo local via Ollama.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Limites e o que não conseguimos verificar',
        content: [
          '**A qualidade do resultado depende do modelo, e vários detalhes não foram verificados.**',
        ],
        items: [
          'Limite: segundo o README, a tarefa exige modelos fortes, e modelos pequenos tendem a produzir diagramas quebrados.',
          'Limite: o x-cmd diz que o resultado precisa de revisão humana e cita conectores desalinhados, nós duplicados e estilos inconsistentes.',
          'Limite: a demo hospedada tem um limite diário de uso, então o uso regular exige sua própria chave de API ou auto-hospedagem.',
          'Não verificado: o que a demo hospedada ou o app de desktop registra ou envia além do diagrama e da solicitação. Não foram encontrados política de privacidade, termos nem aviso legal (verificado em 18 de novembro de 2026).',
          'Não verificado: a localização do desenvolvedor. O perfil do GitHub cita uma cidade, mas nenhuma política ou aviso legal informa um país, por isso o diretório não mostra bandeira de sede.',
          'Não verificado: qualquer vínculo entre este projeto e a empresa por trás do draw.io. O README só diz que o app inclui a própria cópia do draw.io.',
          'Não verificado: qualidade dos diagramas, velocidade e custo por modelo. A PromptQuorum não testou o app, e as medições do próprio desenvolvedor não foram revisadas.',
          'Não verificado: se os instaladores de desktop têm assinatura de código. Nenhuma fonte informa isso.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Next AI Draw.io versus alternativas',
        itemHeadings: true,
        content: [
          '**O Next AI Draw.io é um editor de diagramas controlado por chat, com servidor MCP. A PromptQuorum não o comparou na prática com as alternativas.** As observações abaixo vêm do README do desenvolvedor e da análise da PromptQuorum de cada ferramenta.',
        ],
        columns: ['Ferramenta', 'Registrado nas fontes'],
        rows: [
          { 'Ferramenta': 'Next AI Draw.io', 'Registrado nas fontes': 'Apache-2.0; tela draw.io; web, desktop, MCP; qualquer provedor' },
          { 'Ferramenta': 'Generate embutido no draw.io', 'Registrado nas fontes': 'Roda dentro do draw.io com modelo hospedado ou sua chave (README)' },
          { 'Ferramenta': '[Presenton](/pt/power-local-llm/presenton-review)', 'Registrado nas fontes': 'Apresentações com IA de código aberto; modelo local ou na nuvem' },
          { 'Ferramenta': '[Kition](/pt/power-local-llm/kition-review)', 'Registrado nas fontes': 'Espaço de trabalho aberto; agentes editam arquivos via MCP' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Next AI Draw.io é gratuito?',
            a: 'O app é gratuito sob Apache-2.0. A demo hospedada tem um limite diário de uso que você remove informando seu próprio provedor e chave de API, e esse provedor cobra você à parte. O README convida a patrocinar o projeto para manter a demo no ar.',
          },
          {
            q: 'Posso usá-lo com modelos locais?',
            a: 'Sim, segundo o README, que cita Ollama, SGLang e uma predefinição compatível com OpenAI para URLs como vLLM ou LM Studio. O FAQ diz que modelos locais pequenos muitas vezes só pensam e nunca desenham, sugere 32B parâmetros ou mais e diz que o servidor do modelo precisa ter as chamadas de ferramentas ativadas.',
          },
          {
            q: 'Posso rodá-lo offline ou em uma intranet?',
            a: 'Sim, com auto-hospedagem. A documentação diz que o app inclui a própria cópia do draw.io, então o navegador não contata embed.diagrams.net, mas o build precisa de internet uma vez para baixar o draw.io. Inserir imagens por endereço web de outros sites tem uma limitação documentada nas exportações.',
          },
          {
            q: 'Como os agentes de programação com IA o usam?',
            a: 'Por meio do servidor MCP do desenvolvedor, um pacote npm. O README dá um comando para adicioná-lo ao Claude Code e instalações com um clique para VS Code e Cursor, e o diagrama aparece no seu navegador enquanto o agente desenha.',
          },
          {
            q: 'Posso abrir o resultado no draw.io comum?',
            a: 'Sim, segundo o README: você pode exportar a qualquer momento como .drawio, .png, .svg ou .drawio.svg, e o resultado é um diagrama comum do draw.io.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O Next AI Draw.io vale uma olhada se você desenha diagramas técnicos com regularidade e se sente à vontade para escolher e pagar o seu próprio modelo de IA.**',
          'No papel, ele cobre muita coisa: uma tela comum do draw.io, um histórico de versões que desfaz as alterações da IA, 25 provedores incluindo locais, instaladores de desktop, Docker e um servidor MCP. É gratuito sob Apache-2.0 e o desenvolvimento está ativo, com uma versão em 31 de outubro de 2026 e um commit em 14 de novembro de 2026.',
          'As contrapartidas são reais. A qualidade depende do modelo conectado, a demo tem limite e não foi encontrada política de privacidade, então o caminho dos dados é tão claro quanto o provedor que você escolher. A PromptQuorum não testou o app. Experimente primeiro um diagrama pequeno e não confidencial, e use um modelo forte ou seu próprio servidor para o que importa.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Next AI Draw.io](https://next-ai-drawio.jiang.jp/en) — descrição do desenvolvedor, links do editor e dos downloads, verificado em 18 de novembro de 2026.',
          '[Página Sobre](https://next-ai-drawio.jiang.jp/en/about) — três formas de usar, lista de provedores, tratamento da chave e links do rodapé, verificado em 18 de novembro de 2026.',
          '[Documentação](https://next-ai-drawio.jiang.jp/en/docs) — dados enviados ao modelo, tratamento da chave de API e limite da demo, verificado em 18 de novembro de 2026.',
          '[Repositório do GitHub](https://github.com/DayuanJiang/next-ai-draw-io) — licença, último commit e descrição do projeto, verificado em 18 de novembro de 2026.',
          '[README](https://github.com/DayuanJiang/next-ai-draw-io#readme) — recursos, opções de instalação, configuração do MCP, provedores e conselhos sobre modelos, verificado em 18 de novembro de 2026.',
          '[Versão v0.5.1](https://github.com/DayuanJiang/next-ai-draw-io/releases/tag/v0.5.1) — versão mais recente, data e arquivos de instalação, verificado em 18 de novembro de 2026.',
          '[Guia do Docker](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/docker.md) — início do contêiner com um comando, verificado em 18 de novembro de 2026.',
          '[Guia de implantação offline](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/offline-deployment.md) — draw.io incluído e requisito do build, verificado em 18 de novembro de 2026.',
          '[FAQ](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/FAQ.md) — conselhos sobre modelos auto-hospedados e ajuste de chamadas de ferramentas, verificado em 18 de novembro de 2026.',
          '[env.example](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/env.example) — nota sobre o rastreamento opcional com Langfuse, verificado em 18 de novembro de 2026.',
          '[Página do x-cmd](https://www.x-cmd.com/install/next-ai-draw-io/) — comentário de terceiros sobre a revisão do resultado, verificado em 18 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Presenton](/pt/power-local-llm/presenton-review) — gerador de apresentações com IA de código aberto que cria apresentações editáveis a partir de um prompt, com modelo local ou na nuvem.',
          '[Análise do Kition](/pt/power-local-llm/kition-review) — espaço de trabalho de desktop de código aberto em que agentes de IA editam documentos, slides e mais via MCP.',
          '[Análise do Screenpipe](/pt/power-local-llm/screenpipe-review) — app de desktop que grava tela e áudio localmente e expõe o histórico a agentes via MCP.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/next-ai-draw-io-review-hero-zh.webp',
    title: 'Next AI Draw.io 评测：用聊天画 draw.io 图表，支持网页、桌面和 MCP',
    seoTitle: 'Next AI Draw.io 评测：AI 绘制 draw.io 图表',
    intro:
      'Next AI Draw.io 是一款开源应用：您在聊天中描述图表，AI 就会在可编辑的 draw.io 画布上绘制出来。它可以在浏览器、桌面应用或 MCP 服务器中使用，AI 提供商和模型由您自己选择。本评测基于开发者的网站、GitHub 仓库及其发布版本，核查日期为 2026 年 11 月 18 日。PromptQuorum 没有实际测试过这款应用。',
    metaDescription:
      'Next AI Draw.io 让 AI 通过聊天绘制可编辑的 draw.io 图表。Apache-2.0 开源，支持网页、桌面和 MCP，自选模型。隐私、限制与安装说明。',
    twitterDescription:
      'Next AI Draw.io 用您选择的 AI 模型，通过聊天提示绘制可编辑的 draw.io 图表。Apache-2.0，支持网页、桌面和 MCP；PromptQuorum 未测试。',
    audience:
      '经常绘制架构图、流程图和业务流程图，并希望由 AI 生成初稿的开发者、架构师和分析师',
    readTime: '阅读约6分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Next AI Draw.io',
    targetKeywords: [
      'Next AI Draw.io 评测',
      'Next AI Draw.io MCP',
      'AI draw.io 图表生成',
      'Next AI Draw.io Ollama',
      'Next AI Draw.io 自托管',
      'Next AI Draw.io 许可证',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Next AI Draw.io 是一款采用 Apache-2.0 许可证的免费应用，可把聊天提示变成可编辑的 draw.io 图表，可在浏览器、Windows、macOS 和 Linux 上使用，也可通过 MCP 服务器接入 AI 编程智能体。** 它没有自带模型，图表质量取决于您接入的提供商和模型。在开发者的网站上未找到隐私政策（2026 年 11 月 18 日核查），处理机密工作前请先确认图表数据会发送到哪里。',
    quickAnswerTop: {
      zh: {
        question: 'Next AI Draw.io 是什么，适合谁用？',
        answer:
          'Next AI Draw.io 是 draw.io 图表编辑器之上的聊天界面。您描述一个图表或上传一张图片，由您配置的 AI 绘制，之后可以像编辑任何 draw.io 文件一样继续修改。它适合经常绘制技术图表、并愿意自备 API 密钥或本地模型的人。',
        bullets: [
          '三种使用方式：网页演示、桌面应用、面向 Claude Code、Cursor、Codex 和 VS Code 的 MCP 服务器。',
          '许可证：Apache-2.0，代码开源，可自托管。',
          '可导出为 .drawio、.png 或 .svg，成果不会被锁定。',
          '支持 25 个 AI 提供商，包括通过 Ollama 使用的本地模型。',
          'AI 的每次修改都会保存为一个版本，可对比或恢复。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: '概览', anchor: 'overview' },
      { label: '如何获取', anchor: 'get-it' },
      { label: '系统要求与模型', anchor: 'requirements' },
      { label: '功能', anchor: 'features' },
      { label: '隐私与数据流向', anchor: 'privacy' },
      { label: '适合谁用', anchor: 'who-should-use' },
      { label: '局限与我们无法核实的内容', anchor: 'who-should-not-use' },
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
            text: 'Next AI Draw.io 让您在聊天中描述图表，由您选择的 AI 在可编辑的 draw.io 画布上绘制，可在浏览器、桌面应用或 MCP 服务器中使用。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作连在 draw.io 编辑器旁的聊天窗口。AI 负责写出图表，您可以自己拖动图形，也可以让 AI 只修改您选中的图形。',
          },
        ],
        items: [
          '桌面应用提供 macOS、Windows 和 Linux 的安装包，浏览器演示无需安装。',
          '应用本身在 Apache-2.0 下免费。演示站每天有使用限额，填入您自己的 API 密钥即可解除，模型提供商另行向您计费。',
          '最新发布版本是 v0.5.1，仓库在 2026 年 11 月 14 日有过提交，因此不适用项目停更警告。',
          '开发者表示，这项任务需要能力较强的模型，小模型往往会生成损坏的图表。',
          'PromptQuorum 没有测试过这款应用，也没有找到隐私政策、服务条款或法律声明。',
        ],
        callouts: [
          {
            type: 'note',
            text: '应用会把您的请求和当前图表发送给您选定的 AI 模型。除非该提供商的条款允许，否则请不要把机密架构或客户数据输入云端模型。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**Next AI Draw.io 是 draw.io 的聊天前端，生成的图表可以继续手动编辑。**',
          '项目由个人开发者 Dayuan Jiang（GitHub 用户名 DayuanJiang）维护，而不是公司。0.5.1 版本发布于 2026 年 10 月 31 日，是 GitHub 上的最新发布版本。默认分支的最新提交在 2026 年 11 月 14 日，说明开发仍在进行。',
          '根据 README，您用一句话描述图表，或上传截图、草图、PDF、Markdown 或代码，AI 就会在真实的 draw.io 画布上绘制。应用自带 draw.io 的副本，因此结果是普通的 draw.io 图表，支持多页、重新设置样式和导出。内置的图形库涵盖 AWS、Azure、GCP 和 Kubernetes 图标。',
          '开发者还发布了 MCP 服务器（一个 npm 包），让 Claude Code、Cursor、Codex 和 VS Code 等智能体可以在同一块画布上绘图。MCP（Model Context Protocol）是智能体调用外部工具所用的协议。',
          '这些描述均来自开发者自述。PromptQuorum 没有运行过这款应用，也没有测量图表质量、速度或成本。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '如何获取',
        content: [
          '**您可以打开网页演示、从 GitHub Releases 下载桌面安装包，或用 Docker 自行运行。**',
          'v0.5.1 的 Releases 页面列出了 macOS（Apple Silicon 和 Intel）的 .dmg、Windows 的安装版 .exe 和便携版 .exe，以及 Linux 的 AppImage、.deb 和 .rpm。README 指引读者从该页面下载安装包。桌面应用与网页版是同一个应用。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          { '平台': '[网站](https://next-ai-drawio.jiang.jp/en)', '获取方式': '在浏览器中打开编辑器，无需安装' },
          { '平台': '[macOS](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', '获取方式': '下载 .dmg（Apple Silicon 或 Intel）' },
          { '平台': '[Windows](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', '获取方式': '下载安装版 .exe 或便携版 .exe' },
          { '平台': '[Linux](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', '获取方式': '下载 AppImage、.deb 或 .rpm' },
          { '平台': '[Docker](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/docker.md)', '获取方式': '运行一条 docker run 命令，再打开 localhost:3000' },
          { '平台': '[MCP 服务器](https://next-ai-drawio.jiang.jp/en/mcp)', '获取方式': '把 npm 包添加到智能体的 MCP 设置中' },
        ],
        note: '未找到单独的隐私政策页面（2026 年 11 月 18 日核查）。网站称，您输入的密钥保存在浏览器中，不会存储在服务器上。',
      },
      requirements: {
        id: 'requirements',
        title: '系统要求与模型',
        content: [
          '**应用本身没有给出硬件下限，因为繁重的工作由 AI 模型完成，而模型由您自己选择。**',
          'README 列出 25 个提供商，包括 OpenAI、Anthropic、Google、DeepSeek、Ollama、SGLang、OpenRouter，以及面向 vLLM 或 LM Studio 等任意其他 URL 的 OpenAI 兼容预设。提供商和密钥在设置中填写。对于您自己托管的模型，所需配置取决于模型服务器。',
        ],
        columns: ['项目', '给出的数字'],
        rows: [
          { '项目': '操作系统', '给出的数字': 'macOS、Windows、Linux（桌面）；浏览器（演示）' },
          { '项目': '硬件', '给出的数字': '取决于您接入的模型' },
          { '项目': '模型能力', '给出的数字': '建议用强模型；小模型可能出错（README）' },
          { '项目': '自托管模型', '给出的数字': '建议 32B 以上参数（FAQ）' },
          { '项目': '工具调用', '给出的数字': '模型服务器需启用工具调用（FAQ）' },
          { '项目': '网络', '给出的数字': '云端提供商需要；可离线构建' },
        ],
        note: '离线部署指南称，构建时会下载一次 draw.io，因此构建机器需要联网，或使用已复制的 draw.io 发布包。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**核心是在真实的 draw.io 画布上通过聊天绘图，并用版本功能撤销 AI 的修改。** 以下各项均为开发者在 README、网站和发布说明中的自述。',
        ],
        items: [
          '用一句话生成架构图、流程图、时序图等。',
          '上传截图、草图、PDF、Markdown 或代码文件，AI 会重新绘制，或绘制其内容的图表。',
          '通过聊天编辑，或在画布上选中图形，让 AI 只修改这些图形。',
          'AI 的每次修改都会成为一张版本卡片，可与画布对比、恢复或撤销。',
          '内置 AWS、Azure、GCP 和 Kubernetes 图标库，以及动画连接线。',
          '随时可导出为 .drawio、.png、.svg 或 .drawio.svg。',
          '会推理的模型会显示其思考过程；界面支持英文、简体中文、繁体中文和日文，并有深色模式。',
          'MCP 服务器带有截图工具，智能体可以查看已绘制的图表并加以修正。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**您的请求和当前图表会发送给您选择的 AI 模型，因此数据流向取决于该提供商。**',
          '文档称，应用会把您的请求和当前图表发送给所选模型，您输入的 API 密钥保存在浏览器中，不会存储在服务器上。如果模型运行在您自己的机器上（例如通过 Ollama），请求会发送到该本地服务器，而不是云端提供商；PromptQuorum 没有核实是否还有其他数据离开这台机器。',
          '对于自托管用户，仓库的 env.example 描述了可选的 Langfuse 追踪，并说明启用后编辑器还会发送用户操作的名称。README 还描述了带有可观测性和配额设置的管理面板。',
          '在网站和仓库中均未找到隐私政策、服务条款或法律声明（2026 年 11 月 18 日核查），因此托管演示站会记录什么并无文档说明。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        content: [
          '**Next AI Draw.io 适合经常绘制技术图表、并希望得到仍可继续编辑的 AI 初稿的人。**',
        ],
        items: [
          '希望根据描述起草 AWS、Azure、GCP 或 Kubernetes 图表的开发者和架构师。',
          '使用 AI 编程智能体、并希望它通过 MCP 绘制图表的团队。',
          '注重隐私、能够自托管或通过 Ollama 接入本地模型的用户。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '局限与我们无法核实的内容',
        content: [
          '**输出质量取决于模型，还有若干细节无法核实。**',
        ],
        items: [
          '局限：README 称这项任务需要能力较强的模型，小模型往往会生成损坏的图表。',
          '局限：x-cmd 指出输出需要人工检查，并提到连接线错位、节点重复和样式不一致。',
          '局限：托管演示站每天有使用限额，因此经常使用需要自己的 API 密钥或自托管。',
          '未核实：托管演示站或桌面应用除图表和请求之外还会记录或发送什么。未找到隐私政策、服务条款或法律声明（2026 年 11 月 18 日核查）。',
          '未核实：开发者所在地。GitHub 个人资料写有一个城市，但没有任何政策或法律声明说明所在国家，因此目录不显示总部国旗。',
          '未核实：本项目与 draw.io 背后公司之间是否有任何关联。README 只说应用自带 draw.io 的副本。',
          '未核实：各模型下的图表质量、速度和成本。PromptQuorum 没有测试过这款应用，也没有查看开发者自己的测量数据。',
          '未核实：桌面安装包是否经过代码签名。没有来源提及。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Next AI Draw.io 与替代方案对比',
        itemHeadings: true,
        content: [
          '**Next AI Draw.io 是带 MCP 服务器、通过聊天驱动的图表编辑器。PromptQuorum 没有与替代方案做过实际对比。** 以下说明来自开发者的 README 以及 PromptQuorum 对各工具的评测。',
        ],
        columns: ['工具', '来源中的记载'],
        rows: [
          { '工具': 'Next AI Draw.io', '来源中的记载': 'Apache-2.0；draw.io 画布；网页、桌面、MCP；任意提供商' },
          { '工具': 'draw.io 内置 Generate', '来源中的记载': '在 draw.io 内使用托管模型或您的密钥运行（README）' },
          { '工具': '[Presenton](/zh/power-local-llm/presenton-review)', '来源中的记载': '开源 AI 幻灯片生成；本地或云端模型' },
          { '工具': '[Kition](/zh/power-local-llm/kition-review)', '来源中的记载': '开源工作区；智能体通过 MCP 编辑文件' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Next AI Draw.io 免费吗？',
            a: '应用本身在 Apache-2.0 下免费。托管演示站每天有使用限额，填入您自己的提供商和 API 密钥即可解除，该提供商另行向您计费。README 邀请用户赞助，以便维持演示站运行。',
          },
          {
            q: '可以搭配本地模型使用吗？',
            a: '可以，据 README，支持 Ollama、SGLang，以及面向 vLLM 或 LM Studio 等 URL 的 OpenAI 兼容预设。FAQ 称，小型本地模型常常只思考而不绘图，建议使用 32B 以上参数的模型，并要求模型服务器启用工具调用。',
          },
          {
            q: '可以离线或在内网中运行吗？',
            a: '可以，需要自托管。文档称应用自带 draw.io 的副本，浏览器不会访问 embed.diagrams.net，但构建时需要联网一次来下载 draw.io。通过网址插入其他网站图片时，导出存在已记录的限制。',
          },
          {
            q: 'AI 编程智能体如何使用它？',
            a: '通过开发者的 MCP 服务器（一个 npm 包）。README 给出了添加到 Claude Code 的一条命令，以及 VS Code 和 Cursor 的一键安装，智能体绘图时，图表会同步显示在您的浏览器中。',
          },
          {
            q: '结果可以在普通 draw.io 中打开吗？',
            a: '可以，据 README：您随时可以导出为 .drawio、.png、.svg 或 .drawio.svg，结果是普通的 draw.io 图表。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果您经常绘制技术图表，并且乐于自己选择和付费使用 AI 模型，Next AI Draw.io 值得一试。**',
          '从纸面上看，它覆盖面很广：普通的 draw.io 画布、可撤销 AI 修改的版本历史、包括本地模型在内的 25 个提供商、桌面安装包、Docker 和 MCP 服务器。它在 Apache-2.0 下免费，开发活跃，2026 年 10 月 31 日有发布，2026 年 11 月 14 日有提交。',
          '代价也是真实的。质量取决于您接入的模型，演示站有限额，且未找到隐私政策，数据流向只能和您选择的提供商一样清楚。PromptQuorum 没有测试过这款应用。请先用一张小的、不含机密的图表试用，重要工作请使用能力较强的模型或自己的服务器。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Next AI Draw.io 网站](https://next-ai-drawio.jiang.jp/en) — 开发者的说明、编辑器和下载链接，核查于 2026 年 11 月 18 日。',
          '[关于页面](https://next-ai-drawio.jiang.jp/en/about) — 三种使用方式、提供商列表、密钥处理和页脚链接，核查于 2026 年 11 月 18 日。',
          '[文档](https://next-ai-drawio.jiang.jp/en/docs) — 发送给模型的数据、API 密钥处理和演示站限额，核查于 2026 年 11 月 18 日。',
          '[GitHub 仓库](https://github.com/DayuanJiang/next-ai-draw-io) — 许可证、最新提交和项目描述，核查于 2026 年 11 月 18 日。',
          '[README](https://github.com/DayuanJiang/next-ai-draw-io#readme) — 功能、安装方式、MCP 设置、提供商和模型建议，核查于 2026 年 11 月 18 日。',
          '[发布 v0.5.1](https://github.com/DayuanJiang/next-ai-draw-io/releases/tag/v0.5.1) — 最新版本、日期和安装文件，核查于 2026 年 11 月 18 日。',
          '[Docker 指南](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/docker.md) — 一条命令启动容器，核查于 2026 年 11 月 18 日。',
          '[离线部署指南](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/offline-deployment.md) — 内置的 draw.io 和构建要求，核查于 2026 年 11 月 18 日。',
          '[FAQ](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/FAQ.md) — 自托管模型建议和工具调用设置，核查于 2026 年 11 月 18 日。',
          '[env.example](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/env.example) — 可选 Langfuse 追踪的说明，核查于 2026 年 11 月 18 日。',
          '[x-cmd 页面](https://www.x-cmd.com/install/next-ai-draw-io/) — 第三方关于输出需人工检查的评论，核查于 2026 年 11 月 18 日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Presenton 评测](/zh/power-local-llm/presenton-review) — 开源 AI 演示文稿生成器，根据提示生成可编辑的幻灯片，可用本地或云端模型。',
          '[Kition 评测](/zh/power-local-llm/kition-review) — 开源桌面工作区，AI 智能体通过 MCP 编辑文档、幻灯片等文件。',
          '[Screenpipe 评测](/zh/power-local-llm/screenpipe-review) — 在本地录制屏幕和音频，并通过 MCP 向智能体开放历史记录的桌面应用。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/next-ai-draw-io-review-hero-ar.webp',
    title: 'مراجعة Next AI Draw.io: مخططات draw.io عبر المحادثة على الويب وسطح المكتب وMCP',
    seoTitle: 'مراجعة Next AI Draw.io: محرر draw.io بالذكاء الاصطناعي',
    intro:
      'Next AI Draw.io تطبيق مفتوح المصدر تصف فيه مخططًا في محادثة فيرسمه الذكاء الاصطناعي على لوحة draw.io قابلة للتعديل. يعمل في المتصفح أو كتطبيق سطح مكتب أو كخادم MCP، وتختار أنت مزوّد الذكاء الاصطناعي والنموذج. تستند هذه المراجعة إلى موقع المطوّر ومستودع GitHub وإصداراته، وقد جرى التحقق منها في 18 نوفمبر 2026. لم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'يتيح Next AI Draw.io للذكاء الاصطناعي رسم مخططات draw.io قابلة للتعديل من محادثة. Apache-2.0 للويب وسطح المكتب وMCP مع نموذجك. الخصوصية والقيود والتثبيت.',
    twitterDescription:
      'يرسم Next AI Draw.io مخططات draw.io قابلة للتعديل من طلب في محادثة بنموذج الذكاء الاصطناعي الذي تختاره. Apache-2.0 للويب وسطح المكتب وMCP؛ لم تختبره PromptQuorum.',
    audience:
      'المطوّرون والمعماريون والمحللون الذين يرسمون مخططات البنية والتدفق والعمليات ويريدون مسودة أولى من الذكاء الاصطناعي',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Next AI Draw.io',
    targetKeywords: [
      'مراجعة Next AI Draw.io',
      'Next AI Draw.io MCP',
      'مولّد مخططات draw.io بالذكاء الاصطناعي',
      'Next AI Draw.io Ollama',
      'استضافة Next AI Draw.io ذاتيًا',
      'ترخيص Next AI Draw.io',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Next AI Draw.io تطبيق مجاني بترخيص Apache-2.0 يحوّل طلبًا في محادثة إلى مخطط draw.io قابل للتعديل، في المتصفح أو على Windows وmacOS وLinux أو عبر خادم MCP لوكلاء البرمجة بالذكاء الاصطناعي.** ليس له نموذج خاص، لذا تعتمد جودة المخطط على المزوّد والنموذج اللذين تربطهما. لم نعثر على سياسة خصوصية في موقع المطوّر (تم الفحص في 18 نوفمبر 2026)، فتحقّق من وجهة بيانات مخططك قبل استخدامه في عمل سري.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو Next AI Draw.io ولمن يناسب؟',
        answer:
          'Next AI Draw.io واجهة محادثة فوق محرر المخططات draw.io. تصف مخططًا أو ترفع صورة، فيرسمه الذكاء الاصطناعي الذي أعددته، ثم تواصل تعديله كأي ملف draw.io. يناسب من يرسمون مخططات تقنية كثيرًا ويحضرون مفتاح API خاصًا بهم أو نموذجًا محليًا.',
        bullets: [
          'ثلاث طرق للاستخدام: عرض تجريبي على الويب، وتطبيق سطح مكتب، وخادم MCP لـ Claude Code وCursor وCodex وVS Code.',
          'الترخيص: Apache-2.0، فالشيفرة مفتوحة المصدر ويمكن استضافتها ذاتيًا.',
          'التصدير بصيغ .drawio أو .png أو .svg، فلا يبقى الناتج محبوسًا.',
          'يعمل مع 25 مزوّدًا للذكاء الاصطناعي، منها نماذج محلية عبر Ollama.',
          'يُحفظ كل تغيير يجريه الذكاء الاصطناعي كإصدار يمكنك مقارنته أو استعادته.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'نظرة عامة', anchor: 'overview' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'المتطلبات والنماذج', anchor: 'requirements' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'الخصوصية وتدفق البيانات', anchor: 'privacy' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'القيود وما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
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
            text: 'يتيح لك Next AI Draw.io وصف مخطط في محادثة ليرسمه ذكاء اصطناعي من اختيارك على لوحة draw.io قابلة للتعديل، في المتصفح أو كتطبيق سطح مكتب أو عبر خادم MCP.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّل نافذة محادثة ملحقة بمحرر draw.io. يكتب الذكاء الاصطناعي المخطط، ويمكنك سحب الأشكال بنفسك أو أن تطلب منه تعديل الأشكال التي حددتها فقط.',
          },
        ],
        items: [
          'لتطبيق سطح المكتب مثبّتات لـ macOS وWindows وLinux، ولا يحتاج العرض التجريبي في المتصفح إلى تثبيت.',
          'التطبيق مجاني بترخيص Apache-2.0. للموقع التجريبي حد يومي للاستخدام يرفعه مفتاح API الخاص بك، ويحاسبك مزوّد النموذج على حدة.',
          'أحدث إصدار هو v0.5.1 وسُجّل في المستودع commit بتاريخ 14 نوفمبر 2026، فلا ينطبق تحذير المشروع المتوقف.',
          'يقول المطوّر إن المهمة تحتاج نماذج قوية، وإن النماذج الصغيرة تميل إلى إنتاج مخططات معطوبة.',
          'لم تختبر PromptQuorum التطبيق، ولم يُعثر على سياسة خصوصية أو شروط استخدام أو بيانات قانونية.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'يرسل التطبيق طلبك والمخطط الحالي إلى نموذج الذكاء الاصطناعي الذي اخترته. لا تُدخل بنية سرية أو بيانات عملاء في نموذج سحابي ما لم تسمح بذلك شروط ذلك المزوّد.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**Next AI Draw.io واجهة محادثة لـ draw.io تنتج مخططات يمكنك مواصلة تعديلها يدويًا.**',
          'يتولى صيانة المشروع مطوّر فرد هو Dayuan Jiang (مستخدم GitHub باسم DayuanJiang) وليس شركة. صدر الإصدار 0.5.1 في 31 أكتوبر 2026 وهو أحدث إصدار على GitHub. أحدث commit في الفرع الافتراضي بتاريخ 14 نوفمبر 2026، فالتطوير مستمر.',
          'وفق ملف README، تصف مخططًا في جملة، أو ترفع لقطة شاشة أو رسمًا أوليًا أو ملف PDF أو Markdown أو شيفرة، فيرسمه الذكاء الاصطناعي على لوحة draw.io حقيقية. يضم التطبيق نسخته الخاصة من draw.io، فالنتيجة مخطط draw.io عادي بعدة صفحات وإعادة تنسيق وتصدير. وتغطي مكتبات الأشكال المدمجة أيقونات AWS وAzure وGCP وKubernetes.',
          'ينشر المطوّر أيضًا خادم MCP، وهو حزمة npm تتيح لوكلاء الذكاء الاصطناعي مثل Claude Code وCursor وCodex وVS Code الرسم على اللوحة نفسها. MCP (Model Context Protocol) هو البروتوكول الذي يستخدمه الوكلاء لاستدعاء أدوات خارجية.',
          'هذه الأوصاف أقوال من المطوّر. لم تشغّل PromptQuorum التطبيق ولم تقس جودة المخططات أو السرعة أو التكلفة.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يمكنك فتح العرض التجريبي على الويب، أو تنزيل مثبّت لسطح المكتب من GitHub Releases، أو تشغيله بنفسك عبر Docker.**',
          'تسرد صفحة Releases للإصدار v0.5.1 ملف .dmg لنظام macOS (Apple Silicon وIntel)، وملف .exe للتثبيت وآخر محمولًا لنظام Windows، وملفات AppImage و.deb و.rpm لنظام Linux. ويوجّه README القارئ إلى تنزيل المثبّت من تلك الصفحة. تطبيق سطح المكتب هو نفسه نسخة الويب.',
        ],
        columns: ['المنصة', 'كيفية الحصول عليه'],
        rows: [
          { 'المنصة': '[الموقع](https://next-ai-drawio.jiang.jp/en)', 'كيفية الحصول عليه': 'افتح المحرر في المتصفح دون تثبيت' },
          { 'المنصة': '[macOS](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', 'كيفية الحصول عليه': 'نزّل ملف .dmg لـ Apple Silicon أو Intel' },
          { 'المنصة': '[Windows](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', 'كيفية الحصول عليه': 'نزّل ملف .exe للتثبيت أو المحمول' },
          { 'المنصة': '[Linux](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', 'كيفية الحصول عليه': 'نزّل AppImage أو .deb أو .rpm' },
          { 'المنصة': '[Docker](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/docker.md)', 'كيفية الحصول عليه': 'أمر docker run واحد ثم افتح localhost:3000' },
          { 'المنصة': '[خادم MCP](https://next-ai-drawio.jiang.jp/en/mcp)', 'كيفية الحصول عليه': 'أضف حزمة npm إلى إعدادات MCP للوكيل' },
        ],
        note: 'لم نعثر على صفحة مستقلة لسياسة الخصوصية (تم الفحص في 18 نوفمبر 2026). يقول الموقع إن المفتاح الذي تدخله يُحفظ في متصفحك ولا يُخزَّن على الخادم أبدًا.',
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات والنماذج',
        content: [
          '**لا يذكر التطبيق نفسه حدًا أدنى للعتاد، لأن نموذج الذكاء الاصطناعي هو من يؤدي العمل الثقيل وأنت من يختاره.**',
          'يسرد README ‏25 مزوّدًا، منها OpenAI وAnthropic وGoogle وDeepSeek وOllama وSGLang وOpenRouter، إضافة إلى إعداد مسبق متوافق مع OpenAI لأي عنوان URL آخر مثل vLLM أو LM Studio. تُدخل المزوّد والمفتاح في الإعدادات. أما النماذج التي تستضيفها بنفسك فتسري عليها متطلبات خادم النموذج.',
        ],
        columns: ['البند', 'القيمة المذكورة'],
        rows: [
          { 'البند': 'نظام التشغيل', 'القيمة المذكورة': 'macOS وWindows وLinux (سطح المكتب)؛ المتصفح (العرض التجريبي)' },
          { 'البند': 'العتاد', 'القيمة المذكورة': 'يعتمد على النموذج الذي تربطه' },
          { 'البند': 'قوة النموذج', 'القيمة المذكورة': 'يُنصح بنماذج قوية؛ قد تفشل الصغيرة (README)' },
          { 'البند': 'النماذج المستضافة ذاتيًا', 'القيمة المذكورة': 'يُقترح 32B+ معامل (FAQ)' },
          { 'البند': 'استدعاء الأدوات', 'القيمة المذكورة': 'يجب أن يفعّله خادم النموذج (FAQ)' },
          { 'البند': 'الشبكة', 'القيمة المذكورة': 'يحتاجها المزوّدون السحابيون؛ البناء دون اتصال ممكن' },
        ],
        note: 'يقول دليل العمل دون اتصال إن البناء ينزّل draw.io مرة واحدة، لذا تحتاج آلة البناء إلى الإنترنت أو إلى إصدار draw.io منسوخ.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**الجوهر هو الرسم عبر المحادثة على لوحة draw.io حقيقية، مع إصدارات للتراجع عن تغييرات الذكاء الاصطناعي.** كل ما يلي أقوال من المطوّر في README والموقع وملاحظات الإصدار.',
        ],
        items: [
          'توليد مخططات البنية والمخططات الانسيابية ومخططات التسلسل وغيرها من جملة واحدة.',
          'رفع لقطة شاشة أو رسم أولي أو ملف PDF أو Markdown أو شيفرة، فيعيد الذكاء الاصطناعي رسمها أو يرسم مخططًا لمحتواها.',
          'التعديل عبر المحادثة، أو تحديد أشكال على اللوحة وطلب تعديلها وحدها من الذكاء الاصطناعي.',
          'يصبح كل تغيير للذكاء الاصطناعي بطاقة إصدار يمكنك مقارنتها باللوحة أو استعادتها أو التراجع عنها.',
          'مكتبات أيقونات مدمجة لـ AWS وAzure وGCP وKubernetes، وموصّلات متحركة.',
          'التصدير في أي وقت بصيغ .drawio أو .png أو .svg أو .drawio.svg.',
          'تعرض النماذج المفكّرة تفكيرها؛ والواجهة متاحة بالإنجليزية والصينية المبسطة والصينية التقليدية واليابانية، مع وضع داكن.',
          'خادم MCP مع أداة لقطة شاشة ليتمكن الوكيل من رؤية المخطط المرسوم وتصحيحه.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**يذهب طلبك والمخطط الحالي إلى نموذج الذكاء الاصطناعي الذي تختاره، فيعتمد مسار البيانات على ذلك المزوّد.**',
          'تقول الوثائق إن التطبيق يرسل طلبك والمخطط الحالي إلى النموذج المحدد، وإن مفتاح API الذي تدخله يُحفظ في متصفحك ولا يُخزَّن على الخادم أبدًا. إذا كان النموذج يعمل على جهازك، مثلًا عبر Ollama، يذهب الطلب إلى ذلك الخادم المحلي بدل مزوّد سحابي؛ ولم تتحقق PromptQuorum مما إذا كان أي شيء آخر يغادر الجهاز.',
          'لمن يستضيفون التطبيق ذاتيًا، يصف ملف env.example في المستودع تتبعًا اختياريًا عبر Langfuse ويقول إنه عند إعداده يرسل المحرر أيضًا أسماء ما يفعله المستخدمون. ويصف README كذلك لوحة إدارة بإعدادات للمراقبة والحصص.',
          'لم نعثر على سياسة خصوصية ولا شروط استخدام ولا بيانات قانونية على الموقع أو في المستودع (تم الفحص في 18 نوفمبر 2026)، لذا فما يسجّله العرض التجريبي المستضاف غير موثّق.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب Next AI Draw.io من يرسمون مخططات تقنية كثيرًا ويريدون مسودة أولى من الذكاء الاصطناعي يمكنهم مواصلة تعديلها.**',
        ],
        items: [
          'المطوّرون والمعماريون الذين يريدون صياغة مخططات AWS أو Azure أو GCP أو Kubernetes من وصف.',
          'الفرق التي تستخدم وكيل برمجة بالذكاء الاصطناعي وتريد منه رسم المخططات عبر MCP.',
          'المستخدمون المهتمون بالخصوصية الذين يستطيعون الاستضافة الذاتية أو ربط نموذج محلي عبر Ollama.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'القيود وما لم نتمكن من التحقق منه',
        content: [
          '**تعتمد جودة المخرجات على النموذج، وما زالت عدة تفاصيل دون تحقق.**',
        ],
        items: [
          'قيد: يقول README إن المهمة تحتاج نماذج قوية، وإن النماذج الصغيرة تميل إلى إنتاج مخططات معطوبة.',
          'قيد: يقول x-cmd إن المخرجات تحتاج مراجعة بشرية، ويذكر موصّلات غير محاذاة وعقدًا مكررة وأنماطًا غير متسقة.',
          'قيد: للعرض التجريبي المستضاف حد يومي للاستخدام، لذا يتطلب الاستخدام المنتظم مفتاح API خاصًا بك أو استضافة ذاتية.',
          'لم يُتحقق منه: ما يسجّله العرض التجريبي المستضاف أو تطبيق سطح المكتب أو يرسله بخلاف المخطط والطلب. لم نعثر على سياسة خصوصية ولا شروط استخدام ولا بيانات قانونية (تم الفحص في 18 نوفمبر 2026).',
          'لم يُتحقق منه: موقع المطوّر. يذكر ملفه الشخصي على GitHub مدينة، لكن لا توجد سياسة أو بيانات قانونية تذكر دولة، لذا لا يعرض الدليل علم مقر الشركة.',
          'لم يُتحقق منه: أي صلة بين هذا المشروع والشركة التي تقف وراء draw.io. يقول README فقط إن التطبيق يضم نسخته الخاصة من draw.io.',
          'لم يُتحقق منه: جودة المخططات والسرعة والتكلفة لكل نموذج. لم تختبر PromptQuorum التطبيق، ولم تُراجَع قياسات المطوّر نفسه.',
          'لم يُتحقق منه: هل مثبّتات سطح المكتب موقّعة رقميًا. لا يذكر أي مصدر ذلك.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Next AI Draw.io مقابل البدائل',
        itemHeadings: true,
        content: [
          '**Next AI Draw.io محرر مخططات يُدار بالمحادثة ومعه خادم MCP. لم تقارنه PromptQuorum عمليًا بالبدائل.** تأتي الملاحظات أدناه من README المطوّر ومن مراجعة PromptQuorum لكل أداة.',
        ],
        columns: ['الأداة', 'المذكور في المصادر'],
        rows: [
          { 'الأداة': 'Next AI Draw.io', 'المذكور في المصادر': 'Apache-2.0؛ لوحة draw.io؛ ويب وسطح مكتب وMCP؛ أي مزوّد' },
          { 'الأداة': 'Generate المدمج في draw.io', 'المذكور في المصادر': 'يعمل داخل draw.io بنموذج مستضاف أو بمفتاحك (README)' },
          { 'الأداة': '[Presenton](/ar/power-local-llm/presenton-review)', 'المذكور في المصادر': 'شرائح بالذكاء الاصطناعي مفتوحة المصدر؛ نموذج محلي أو سحابي' },
          { 'الأداة': '[Kition](/ar/power-local-llm/kition-review)', 'المذكور في المصادر': 'مساحة عمل مفتوحة المصدر؛ يعدّل الوكلاء الملفات عبر MCP' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Next AI Draw.io مجاني؟',
            a: 'التطبيق مجاني بترخيص Apache-2.0. للعرض التجريبي المستضاف حد يومي للاستخدام ترفعه بإدخال مزوّدك ومفتاح API الخاصين بك، ويحاسبك ذلك المزوّد على حدة. ويدعو README إلى رعاية المشروع لإبقاء العرض التجريبي قائمًا.',
          },
          {
            q: 'هل يمكنني استخدامه مع نماذج محلية؟',
            a: 'نعم، وفق README الذي يذكر Ollama وSGLang وإعدادًا مسبقًا متوافقًا مع OpenAI لعناوين مثل vLLM أو LM Studio. وتقول FAQ إن النماذج المحلية الصغيرة كثيرًا ما تفكّر فقط ولا ترسم أبدًا، وتقترح 32B معامل أو أكثر، وتقول إن خادم النموذج يجب أن يفعّل استدعاء الأدوات.',
          },
          {
            q: 'هل يمكنني تشغيله دون اتصال أو على شبكة داخلية؟',
            a: 'نعم، بالاستضافة الذاتية. تقول الوثائق إن التطبيق يضم نسخته الخاصة من draw.io، فلا يتصل المتصفح بـ embed.diagrams.net، لكن البناء يحتاج إلى الإنترنت مرة واحدة لتنزيل draw.io. وهناك قيد موثّق في عمليات التصدير عند إدراج صور بعنوان ويب من مواقع أخرى.',
          },
          {
            q: 'كيف تستخدمه وكلاء البرمجة بالذكاء الاصطناعي؟',
            a: 'عبر خادم MCP الخاص بالمطوّر، وهو حزمة npm. يقدّم README أمرًا واحدًا لإضافته إلى Claude Code وتثبيتًا بنقرة واحدة لـ VS Code وCursor، ويظهر المخطط في متصفحك أثناء رسم الوكيل له.',
          },
          {
            q: 'هل يمكنني فتح النتيجة في draw.io العادي؟',
            a: 'نعم، وفق README: يمكنك التصدير في أي وقت بصيغ .drawio أو .png أو .svg أو .drawio.svg، والنتيجة مخطط draw.io عادي.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق Next AI Draw.io نظرة إن كنت ترسم مخططات تقنية بانتظام وتحب أن تختار نموذج الذكاء الاصطناعي بنفسك وتدفع تكلفته.**',
          'على الورق يغطي الكثير: لوحة draw.io عادية، وسجل إصدارات يتراجع عن تغييرات الذكاء الاصطناعي، و25 مزوّدًا منها محلية، ومثبّتات لسطح المكتب، وDocker، وخادم MCP. وهو مجاني بترخيص Apache-2.0 والتطوير نشط، مع إصدار في 31 أكتوبر 2026 وcommit في 14 نوفمبر 2026.',
          'المقايضات حقيقية. تعتمد الجودة على النموذج الذي تربطه، والعرض التجريبي محدود، ولم نعثر على سياسة خصوصية، فمسار البيانات لا يكون أوضح من المزوّد الذي تختاره. لم تختبر PromptQuorum التطبيق. جرّب أولًا مخططًا صغيرًا غير سري، واستخدم نموذجًا قويًا أو خادمك الخاص لما يهمك.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Next AI Draw.io](https://next-ai-drawio.jiang.jp/en) — وصف المطوّر وروابط المحرر والتنزيل، جرى التحقق في 18 نوفمبر 2026.',
          '[صفحة حول](https://next-ai-drawio.jiang.jp/en/about) — ثلاث طرق للاستخدام وقائمة المزوّدين والتعامل مع المفتاح وروابط التذييل، جرى التحقق في 18 نوفمبر 2026.',
          '[الوثائق](https://next-ai-drawio.jiang.jp/en/docs) — البيانات المرسلة إلى النموذج والتعامل مع مفتاح API وحد العرض التجريبي، جرى التحقق في 18 نوفمبر 2026.',
          '[مستودع GitHub](https://github.com/DayuanJiang/next-ai-draw-io) — الترخيص وآخر commit ووصف المشروع، جرى التحقق في 18 نوفمبر 2026.',
          '[README](https://github.com/DayuanJiang/next-ai-draw-io#readme) — الميزات وخيارات التثبيت وإعداد MCP والمزوّدون ونصائح النماذج، جرى التحقق في 18 نوفمبر 2026.',
          '[الإصدار v0.5.1](https://github.com/DayuanJiang/next-ai-draw-io/releases/tag/v0.5.1) — أحدث إصدار وتاريخه وملفات التثبيت، جرى التحقق في 18 نوفمبر 2026.',
          '[دليل Docker](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/docker.md) — تشغيل الحاوية بأمر واحد، جرى التحقق في 18 نوفمبر 2026.',
          '[دليل النشر دون اتصال](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/offline-deployment.md) — draw.io المضمَّن ومتطلب البناء، جرى التحقق في 18 نوفمبر 2026.',
          '[FAQ](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/FAQ.md) — نصائح النماذج المستضافة ذاتيًا وإعداد استدعاء الأدوات، جرى التحقق في 18 نوفمبر 2026.',
          '[env.example](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/env.example) — ملاحظة عن التتبع الاختياري عبر Langfuse، جرى التحقق في 18 نوفمبر 2026.',
          '[صفحة x-cmd](https://www.x-cmd.com/install/next-ai-draw-io/) — تعليق من طرف ثالث على مراجعة المخرجات، جرى التحقق في 18 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Presenton](/ar/power-local-llm/presenton-review) — مولّد عروض تقديمية بالذكاء الاصطناعي مفتوح المصدر ينشئ عروضًا قابلة للتعديل من طلب، بنموذج محلي أو سحابي.',
          '[مراجعة Kition](/ar/power-local-llm/kition-review) — مساحة عمل مفتوحة المصدر لسطح المكتب يعدّل فيها وكلاء الذكاء الاصطناعي المستندات والشرائح وغيرها عبر MCP.',
          '[مراجعة Screenpipe](/ar/power-local-llm/screenpipe-review) — تطبيق لسطح المكتب يسجّل الشاشة والصوت محليًا ويتيح السجل للوكلاء عبر MCP.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/next-ai-draw-io-review-hero-ko.webp',
    title: 'Next AI Draw.io 리뷰: 채팅으로 draw.io 다이어그램을 그리는 웹·데스크톱·MCP 앱',
    seoTitle: 'Next AI Draw.io 리뷰: AI draw.io 다이어그램',
    intro:
      'Next AI Draw.io는 채팅으로 다이어그램을 설명하면 AI가 편집 가능한 draw.io 캔버스에 그려 주는 오픈소스 앱입니다. 브라우저, 데스크톱 앱, MCP 서버로 사용할 수 있으며 AI 제공업체와 모델은 직접 고릅니다. 이 리뷰는 개발자의 사이트, GitHub 저장소와 릴리스를 바탕으로 2026년 11월 18일에 확인했습니다. PromptQuorum은 이 앱을 직접 테스트하지 않았습니다.',
    metaDescription:
      'Next AI Draw.io는 채팅으로 AI가 편집 가능한 draw.io 다이어그램을 그립니다. Apache-2.0, 웹·데스크톱·MCP 지원. 개인정보, 제한, 설치 방법을 정리했습니다.',
    twitterDescription:
      'Next AI Draw.io는 선택한 AI 모델로 채팅 프롬프트에서 편집 가능한 draw.io 다이어그램을 그립니다. Apache-2.0, 웹·데스크톱·MCP 지원. PromptQuorum 미테스트.',
    audience:
      '아키텍처·흐름·프로세스 다이어그램을 그리며 AI가 만든 초안으로 시작하고 싶은 개발자, 아키텍트, 분석가',
    readTime: '6분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Next AI Draw.io',
    targetKeywords: [
      'Next AI Draw.io 리뷰',
      'Next AI Draw.io MCP',
      'AI draw.io 다이어그램 생성',
      'Next AI Draw.io Ollama',
      'Next AI Draw.io 셀프 호스팅',
      'Next AI Draw.io 라이선스',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Next AI Draw.io는 채팅 프롬프트를 편집 가능한 draw.io 다이어그램으로 바꿔 주는 Apache-2.0 라이선스의 무료 앱으로, 브라우저, Windows·macOS·Linux, 또는 AI 코딩 에이전트용 MCP 서버로 사용할 수 있습니다.** 자체 모델이 없어서 다이어그램 품질은 연결하는 제공업체와 모델에 달려 있습니다. 개발자 사이트에서 개인정보 처리방침을 찾지 못했으므로(2026년 11월 18일 확인), 기밀 작업에 쓰기 전에 다이어그램 데이터가 어디로 가는지 확인하십시오.',
    quickAnswerTop: {
      ko: {
        question: 'Next AI Draw.io는 무엇이고 누구에게 맞습니까?',
        answer:
          'Next AI Draw.io는 draw.io 다이어그램 편집기 위에 얹은 채팅 인터페이스입니다. 다이어그램을 설명하거나 이미지를 올리면 설정해 둔 AI가 그려 주고, 이후에는 일반 draw.io 파일처럼 계속 편집할 수 있습니다. 기술 다이어그램을 자주 그리고 자신의 API 키나 로컬 모델을 준비할 수 있는 분께 맞습니다.',
        bullets: [
          '사용 방법은 세 가지입니다: 웹 데모, 데스크톱 앱, Claude Code·Cursor·Codex·VS Code용 MCP 서버.',
          '라이선스: Apache-2.0이므로 코드는 오픈소스이며 셀프 호스팅할 수 있습니다.',
          '.drawio, .png, .svg로 내보낼 수 있어 결과물이 묶이지 않습니다.',
          'Ollama를 통한 로컬 모델을 포함해 25개 AI 제공업체와 작동합니다.',
          'AI가 바꾼 내용은 버전으로 저장되어 비교하거나 복원할 수 있습니다.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: '개요', anchor: 'overview' },
      { label: '설치 방법', anchor: 'get-it' },
      { label: '요구 사항과 모델', anchor: 'requirements' },
      { label: '기능', anchor: 'features' },
      { label: '개인정보 보호와 데이터 흐름', anchor: 'privacy' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '제한 사항과 확인하지 못한 내용', anchor: 'who-should-not-use' },
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
            text: 'Next AI Draw.io는 채팅으로 다이어그램을 설명하면 선택한 AI가 편집 가능한 draw.io 캔버스에 그려 주는 앱으로, 브라우저, 데스크톱 앱, MCP 서버로 사용할 수 있습니다.',
          },
          {
            type: 'plain-terms',
            text: 'draw.io 편집기에 채팅 창이 붙어 있다고 생각하면 됩니다. AI가 다이어그램을 작성하고, 사용자는 도형을 직접 끌어 옮기거나 선택한 도형만 바꾸라고 AI에게 요청할 수 있습니다.',
          },
        ],
        items: [
          '데스크톱 앱에는 macOS, Windows, Linux용 설치 파일이 있고, 브라우저 데모는 설치가 필요 없습니다.',
          '앱은 Apache-2.0으로 무료입니다. 데모 사이트에는 일일 사용 한도가 있으며 자신의 API 키로 풀 수 있고, 모델 제공업체의 요금은 별도입니다.',
          '최신 릴리스는 v0.5.1이며 저장소에 2026년 11월 14일 커밋이 있으므로, 방치된 프로젝트 경고는 해당하지 않습니다.',
          '개발자는 이 작업에 성능이 높은 모델이 필요하며 작은 모델은 망가진 다이어그램을 내놓기 쉽다고 밝히고 있습니다.',
          'PromptQuorum은 이 앱을 테스트하지 않았으며, 개인정보 처리방침, 이용 약관, 법적 고지는 찾지 못했습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 앱은 요청과 현재 다이어그램을 선택한 AI 모델로 보냅니다. 해당 제공업체의 약관이 허용하는 경우가 아니라면 기밀 아키텍처나 고객 데이터를 클라우드 모델에 입력하지 마십시오.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**Next AI Draw.io는 직접 계속 편집할 수 있는 다이어그램을 만들어 주는 draw.io용 채팅 프런트엔드입니다.**',
          '이 프로젝트는 회사가 아니라 개인 개발자 Dayuan Jiang(GitHub 사용자명 DayuanJiang)이 유지합니다. 버전 0.5.1은 2026년 10월 31일에 릴리스되었으며 GitHub의 최신 릴리스입니다. 기본 브랜치의 가장 최근 커밋은 2026년 11월 14일이어서 개발이 계속되고 있습니다.',
          'README에 따르면 한 문장으로 다이어그램을 설명하거나 스크린샷, 스케치, PDF, Markdown, 코드를 올리면 AI가 실제 draw.io 캔버스에 그립니다. 앱에 draw.io 사본이 들어 있어서 결과는 여러 페이지, 스타일 변경, 내보내기를 지원하는 일반 draw.io 다이어그램입니다. 내장 도형 라이브러리는 AWS, Azure, GCP, Kubernetes 아이콘을 다룹니다.',
          '개발자는 MCP 서버(npm 패키지)도 공개하고 있어, Claude Code, Cursor, Codex, VS Code 같은 에이전트가 같은 캔버스에 그릴 수 있습니다. MCP(Model Context Protocol)는 에이전트가 외부 도구를 호출할 때 쓰는 프로토콜입니다.',
          '이 설명은 개발자의 주장입니다. PromptQuorum은 앱을 실행하지 않았고 다이어그램 품질, 속도, 비용을 측정하지 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '설치 방법',
        content: [
          '**웹 데모를 열거나, GitHub Releases에서 데스크톱 설치 파일을 받거나, Docker로 직접 실행할 수 있습니다.**',
          'v0.5.1 Releases 페이지에는 macOS(Apple Silicon과 Intel)용 .dmg, Windows용 설치 .exe와 포터블 .exe, Linux용 AppImage, .deb, .rpm이 올라와 있습니다. README는 그 페이지에서 설치 파일을 받으라고 안내합니다. 데스크톱 앱은 웹 버전과 같은 앱입니다.',
        ],
        columns: ['플랫폼', '받는 방법'],
        rows: [
          { '플랫폼': '[웹사이트](https://next-ai-drawio.jiang.jp/en)', '받는 방법': '브라우저에서 편집기를 열기, 설치 불필요' },
          { '플랫폼': '[macOS](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', '받는 방법': '.dmg 다운로드(Apple Silicon 또는 Intel)' },
          { '플랫폼': '[Windows](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', '받는 방법': '설치 .exe 또는 포터블 .exe 다운로드' },
          { '플랫폼': '[Linux](https://github.com/DayuanJiang/next-ai-draw-io/releases/latest)', '받는 방법': 'AppImage, .deb, .rpm 다운로드' },
          { '플랫폼': '[Docker](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/docker.md)', '받는 방법': 'docker run 명령 한 번 후 localhost:3000 열기' },
          { '플랫폼': '[MCP 서버](https://next-ai-drawio.jiang.jp/en/mcp)', '받는 방법': 'npm 패키지를 에이전트의 MCP 설정에 추가' },
        ],
        note: '개인정보 처리방침 전용 페이지를 찾지 못했습니다(2026년 11월 18일 확인). 사이트는 입력한 키가 브라우저에 보관되고 서버에는 저장되지 않는다고 밝힙니다.',
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항과 모델',
        content: [
          '**앱 자체에는 하드웨어 최소 사양이 제시되어 있지 않습니다. 무거운 작업은 AI 모델이 맡고 그 모델은 사용자가 고르기 때문입니다.**',
          'README에는 OpenAI, Anthropic, Google, DeepSeek, Ollama, SGLang, OpenRouter를 비롯한 25개 제공업체와, vLLM이나 LM Studio 같은 다른 URL용 OpenAI 호환 프리셋이 나와 있습니다. 제공업체와 키는 설정에서 입력합니다. 직접 호스팅하는 모델은 모델 서버의 요구 사항을 따릅니다.',
        ],
        columns: ['항목', '제시된 수치'],
        rows: [
          { '항목': '운영체제', '제시된 수치': 'macOS, Windows, Linux(데스크톱), 브라우저(데모)' },
          { '항목': '하드웨어', '제시된 수치': '연결하는 모델에 따라 다름' },
          { '항목': '모델 성능', '제시된 수치': '고성능 모델 권장, 작은 모델은 실패 가능(README)' },
          { '항목': '셀프 호스팅 모델', '제시된 수치': '32B 이상 파라미터 권장(FAQ)' },
          { '항목': '도구 호출', '제시된 수치': '모델 서버에서 활성화 필요(FAQ)' },
          { '항목': '네트워크', '제시된 수치': '클라우드 제공업체에 필요, 오프라인 빌드 가능' },
        ],
        note: '오프라인 가이드에 따르면 빌드 때 draw.io를 한 번 내려받으므로, 빌드 머신에는 인터넷 연결이나 복사해 둔 draw.io 릴리스가 필요합니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**핵심은 실제 draw.io 캔버스에서 채팅으로 그리는 것과, AI의 변경을 되돌릴 수 있는 버전 기능입니다.** 아래 항목은 모두 README, 사이트, 릴리스 노트에 나온 개발자의 주장입니다.',
        ],
        items: [
          '한 문장으로 아키텍처 다이어그램, 순서도, 시퀀스 다이어그램 등을 생성합니다.',
          '스크린샷, 스케치, PDF, Markdown, 코드 파일을 올리면 AI가 다시 그리거나 그 내용을 다이어그램으로 그립니다.',
          '채팅으로 편집하거나, 캔버스에서 도형을 선택해 그 도형만 바꾸라고 AI에게 요청할 수 있습니다.',
          'AI의 변경마다 버전 카드가 생기며, 캔버스와 비교하거나 복원하거나 되돌릴 수 있습니다.',
          'AWS, Azure, GCP, Kubernetes 아이콘 라이브러리와 애니메이션 커넥터를 내장합니다.',
          '언제든 .drawio, .png, .svg, .drawio.svg로 내보낼 수 있습니다.',
          '추론하는 모델은 사고 과정을 보여 주며, 인터페이스는 영어, 중국어 간체, 중국어 번체, 일본어를 지원하고 다크 모드가 있습니다.',
          'MCP 서버에는 스크린샷 도구가 있어 에이전트가 그려진 다이어그램을 보고 고칠 수 있습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 데이터 흐름',
        content: [
          '**요청과 현재 다이어그램은 선택한 AI 모델로 전송되므로 데이터 경로는 그 제공업체에 따라 달라집니다.**',
          '문서에 따르면 앱은 요청과 현재 다이어그램을 선택한 모델로 보내며, 입력한 API 키는 브라우저에 보관되고 서버에는 저장되지 않습니다. 모델이 사용자의 컴퓨터에서 실행된다면(예: Ollama 경유) 요청은 클라우드 제공업체가 아니라 그 로컬 서버로 갑니다. 그 밖에 다른 것이 컴퓨터 밖으로 나가는지는 PromptQuorum이 확인하지 않았습니다.',
          '셀프 호스팅하는 경우, 저장소의 env.example에는 선택 사항인 Langfuse 트레이싱이 나와 있으며, 이를 설정하면 편집기가 사용자 동작의 이름도 전송한다고 되어 있습니다. README에는 관측성과 할당량 설정이 있는 관리 패널도 설명되어 있습니다.',
          '사이트와 저장소에서 개인정보 처리방침, 이용 약관, 법적 고지를 찾지 못했으므로(2026년 11월 18일 확인) 호스팅 데모가 무엇을 기록하는지는 문서화되어 있지 않습니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        content: [
          '**Next AI Draw.io는 기술 다이어그램을 자주 그리고 계속 편집할 수 있는 AI 초안을 원하는 분께 맞습니다.**',
        ],
        items: [
          '설명만으로 AWS, Azure, GCP, Kubernetes 다이어그램의 초안을 만들고 싶은 개발자와 아키텍트.',
          'AI 코딩 에이전트를 쓰며 MCP로 다이어그램을 그리게 하고 싶은 팀.',
          '셀프 호스팅하거나 Ollama로 로컬 모델을 연결할 수 있는, 개인정보를 중시하는 사용자.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '제한 사항과 확인하지 못한 내용',
        content: [
          '**출력 품질은 모델에 달려 있으며, 여러 세부 사항은 확인하지 못했습니다.**',
        ],
        items: [
          '제한: README는 이 작업에 성능이 높은 모델이 필요하고 작은 모델은 망가진 다이어그램을 내놓기 쉽다고 밝힙니다.',
          '제한: x-cmd는 출력에 사람의 검토가 필요하다며 어긋난 커넥터, 중복된 노드, 일관되지 않은 스타일을 언급합니다.',
          '제한: 호스팅 데모에는 일일 사용 한도가 있어서, 꾸준히 쓰려면 자신의 API 키나 셀프 호스팅이 필요합니다.',
          '미확인: 호스팅 데모나 데스크톱 앱이 다이어그램과 요청 외에 무엇을 기록하거나 전송하는지. 개인정보 처리방침, 이용 약관, 법적 고지를 찾지 못했습니다(2026년 11월 18일 확인).',
          '미확인: 개발자의 소재지. GitHub 프로필에는 도시 이름이 있지만 어떤 정책이나 법적 고지에도 국가가 명시되어 있지 않아, 디렉터리에는 본사 국기를 표시하지 않았습니다.',
          '미확인: 이 프로젝트와 draw.io를 만든 회사 사이의 관계. README는 앱에 draw.io 사본이 들어 있다고만 밝힙니다.',
          '미확인: 모델별 다이어그램 품질, 속도, 비용. PromptQuorum은 앱을 테스트하지 않았고 개발자 자체 측정은 검토하지 않았습니다.',
          '미확인: 데스크톱 설치 파일에 코드 서명이 되어 있는지. 어떤 출처에도 언급이 없습니다.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Next AI Draw.io와 대안 비교',
        itemHeadings: true,
        content: [
          '**Next AI Draw.io는 MCP 서버를 갖춘, 채팅으로 조작하는 다이어그램 편집기입니다. PromptQuorum은 대안과 직접 비교해 보지 않았습니다.** 아래 내용은 개발자의 README와 각 도구에 대한 PromptQuorum 리뷰에서 가져왔습니다.',
        ],
        columns: ['도구', '출처에 기재된 내용'],
        rows: [
          { '도구': 'Next AI Draw.io', '출처에 기재된 내용': 'Apache-2.0, draw.io 캔버스, 웹·데스크톱·MCP, 모든 제공업체' },
          { '도구': 'draw.io 내장 Generate', '출처에 기재된 내용': 'draw.io 안에서 호스팅 모델 또는 자신의 키로 실행(README)' },
          { '도구': '[Presenton](/ko/power-local-llm/presenton-review)', '출처에 기재된 내용': '오픈소스 AI 슬라이드 생성, 로컬 또는 클라우드 모델' },
          { '도구': '[Kition](/ko/power-local-llm/kition-review)', '출처에 기재된 내용': '오픈소스 작업 공간, 에이전트가 MCP로 파일 편집' },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Next AI Draw.io는 무료입니까?',
            a: '앱은 Apache-2.0으로 무료입니다. 호스팅 데모에는 일일 사용 한도가 있으며 자신의 제공업체와 API 키를 입력하면 풀 수 있고, 그 제공업체의 요금은 별도입니다. README는 데모 운영을 유지할 수 있도록 후원을 권합니다.',
          },
          {
            q: '로컬 모델과 함께 쓸 수 있습니까?',
            a: '네, README에 따르면 Ollama, SGLang, 그리고 vLLM이나 LM Studio 같은 URL용 OpenAI 호환 프리셋을 지원합니다. FAQ는 작은 로컬 모델이 생각만 하고 그리지 못하는 경우가 많다고 밝히고, 32B 파라미터 이상을 권하며, 모델 서버에서 도구 호출을 켜야 한다고 설명합니다.',
          },
          {
            q: '오프라인이나 인트라넷에서 실행할 수 있습니까?',
            a: '네, 셀프 호스팅으로 가능합니다. 문서에 따르면 앱에 draw.io 사본이 들어 있어 브라우저가 embed.diagrams.net에 접속하지 않지만, draw.io를 내려받기 위해 빌드 때 한 번 인터넷 연결이 필요합니다. 다른 사이트의 이미지를 웹 주소로 삽입하면 내보내기에 제한이 있다고 문서화되어 있습니다.',
          },
          {
            q: 'AI 코딩 에이전트는 어떻게 사용합니까?',
            a: '개발자의 MCP 서버(npm 패키지)를 통해 사용합니다. README에는 Claude Code에 추가하는 명령 하나와 VS Code·Cursor용 원클릭 설치가 나와 있으며, 에이전트가 그리는 동안 다이어그램이 브라우저에 나타납니다.',
          },
          {
            q: '결과를 일반 draw.io에서 열 수 있습니까?',
            a: '네, README에 따르면 언제든 .drawio, .png, .svg, .drawio.svg로 내보낼 수 있으며 결과는 일반 draw.io 다이어그램입니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**Next AI Draw.io는 기술 다이어그램을 정기적으로 그리고, 자신이 AI 모델을 고르고 비용을 부담하는 데 거부감이 없다면 살펴볼 만합니다.**',
          '스펙상으로는 폭넓게 갖추고 있습니다. 일반 draw.io 캔버스, AI의 변경을 되돌리는 버전 기록, 로컬을 포함한 25개 제공업체, 데스크톱 설치 파일, Docker, MCP 서버입니다. Apache-2.0으로 무료이고 개발도 활발하여 2026년 10월 31일에 릴리스, 2026년 11월 14일에 커밋이 있습니다.',
          '절충점도 분명합니다. 품질은 연결한 모델에 달려 있고, 데모에는 한도가 있으며, 개인정보 처리방침을 찾지 못해서 데이터 경로는 선택한 제공업체만큼만 명확합니다. PromptQuorum은 이 앱을 테스트하지 않았습니다. 먼저 작고 기밀이 아닌 다이어그램으로 시험해 보고, 중요한 작업에는 성능이 높은 모델이나 자체 서버를 사용하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Next AI Draw.io 웹사이트](https://next-ai-drawio.jiang.jp/en) — 개발자의 설명, 편집기와 다운로드 링크. 2026년 11월 18일 확인.',
          '[소개 페이지](https://next-ai-drawio.jiang.jp/en/about) — 세 가지 사용 방법, 제공업체 목록, 키 처리, 푸터 링크. 2026년 11월 18일 확인.',
          '[문서](https://next-ai-drawio.jiang.jp/en/docs) — 모델로 전송되는 데이터, API 키 처리, 데모 한도. 2026년 11월 18일 확인.',
          '[GitHub 저장소](https://github.com/DayuanJiang/next-ai-draw-io) — 라이선스, 최근 커밋, 프로젝트 설명. 2026년 11월 18일 확인.',
          '[README](https://github.com/DayuanJiang/next-ai-draw-io#readme) — 기능, 설치 옵션, MCP 설정, 제공업체, 모델 조언. 2026년 11월 18일 확인.',
          '[릴리스 v0.5.1](https://github.com/DayuanJiang/next-ai-draw-io/releases/tag/v0.5.1) — 최신 버전, 날짜, 설치 파일. 2026년 11월 18일 확인.',
          '[Docker 가이드](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/docker.md) — 명령 한 번으로 컨테이너 시작. 2026년 11월 18일 확인.',
          '[오프라인 배포 가이드](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/offline-deployment.md) — 내장 draw.io와 빌드 요건. 2026년 11월 18일 확인.',
          '[FAQ](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/docs/en/FAQ.md) — 셀프 호스팅 모델 조언과 도구 호출 설정. 2026년 11월 18일 확인.',
          '[env.example](https://github.com/DayuanJiang/next-ai-draw-io/blob/main/env.example) — 선택 사항인 Langfuse 트레이싱 관련 설명. 2026년 11월 18일 확인.',
          '[x-cmd 페이지](https://www.x-cmd.com/install/next-ai-draw-io/) — 출력 검토에 대한 제3자 의견. 2026년 11월 18일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Presenton 리뷰](/ko/power-local-llm/presenton-review) — 프롬프트로 편집 가능한 슬라이드를 만드는 오픈소스 AI 프레젠테이션 생성기. 로컬 또는 클라우드 모델 사용.',
          '[Kition 리뷰](/ko/power-local-llm/kition-review) — AI 에이전트가 MCP로 문서, 슬라이드 등을 편집하는 오픈소스 데스크톱 작업 공간.',
          '[Screenpipe 리뷰](/ko/power-local-llm/screenpipe-review) — 화면과 오디오를 로컬에 녹화하고 기록을 MCP로 에이전트에 제공하는 데스크톱 앱.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그.',
        ],
      },
    },
  },
}
