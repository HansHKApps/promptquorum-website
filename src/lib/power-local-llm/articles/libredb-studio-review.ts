// LibreDB Studio Review: Open-Source SQL Editor With an Optional Local AI Agent
// Slug: libredb-studio-review
// Companion to: tabby-review, continue-dev-review, cline-review, aider-review, local-llm-code-development-compared
// Sources: the official website libredb.org (home, security model, privacy policy, platform page) and the public GitHub repository
// libredb/libredb-studio (README, package.json, Releases), all checked 2026-10-23 — no hands-on use.
// Last upstream update 2026-10-23 (release libredb-studio-0.1.102; feature release 1.0.0 on 2026-10-17) => no stale warning (owner rule 2026-10-16).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Coding Assistants',
    heroImage: '/images/libredb-studio-review-hero-en.webp',
    title: 'LibreDB Studio Review: Open-Source SQL Editor With an Optional Local AI Agent',
    seoTitle: 'LibreDB Studio Review: SQL Editor With a Local AI Agent',
    intro:
      'LibreDB Studio is an MIT-licensed database editor at [libredb.org](https://libredb.org) that runs in the browser and is deployed next to your data with Docker, npx or a package manager. It connects to 41 database engines through one interface and adds an optional AI layer that can use a local Ollama model instead of a cloud API. This review reflects the website, its security page and the public GitHub repository, as checked on 23 October 2026; PromptQuorum did not test the software hands-on.',
    metaDescription:
      'LibreDB Studio review: a free MIT-licensed browser SQL editor for 41 database engines with an optional AI agent that can run on local Ollama. Setup and limits.',
    twitterDescription:
      'LibreDB Studio review: an open-source SQL editor for 41 database engines in the browser, with an optional AI agent that can use a local Ollama model. What the sources confirm and what stays untested.',
    audience:
      'Developers and data teams who want one self-hosted SQL editor for many databases and are weighing whether its AI features can stay on local models.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LibreDB Studio review',
    targetKeywords: [
      'libredb studio review',
      'libredb studio',
      'open source sql editor',
      'self-hosted database editor',
      'database ide ollama',
      'ai sql assistant local llm',
      'libredb studio vs dbeaver',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**LibreDB Studio is a free, self-hosted SQL editor that, by its own description, connects to 41 database engines from one browser tab and can send its AI questions to a local Ollama model.** Its AI agent reads only seven of those engines, and the AI is off until you configure a model.',
    quickAnswerTop: {
      en: {
        question: 'Can LibreDB Studio use a local LLM for its AI features?',
        answer:
          'Yes, according to its README and security page: you can point it at Ollama, LM Studio or any OpenAI-compatible endpoint, and with no model configured the AI is switched off. PromptQuorum did not test this.',
        bullets: [
          'Studio itself is MIT-licensed and free; a separate Platform layer for access governance is paid beyond 4 seats.',
          'Setup is one command (Docker or npx); only Linux has a double-click desktop build.',
          'Hosted models such as Gemini or OpenAI see your query and schema.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is LibreDB Studio?', anchor: 'what-is-libredb' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Pricing and License', anchor: 'plans-and-pricing' },
      { label: 'Features and AI', anchor: 'key-features' },
      { label: 'Privacy and Data Flow', anchor: 'privacy' },
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
          {
            type: 'one-sentence',
            text: 'LibreDB Studio is an open-source SQL editor that runs in the browser next to your databases and offers an AI assistant and agent that can use a local model.',
          },
          {
            type: 'plain-terms',
            text: 'You start it with one command, open it in a browser, add connections to your databases and write queries; if you also connect a model such as one served by Ollama, it can explain plans and draft SQL.',
          },
        ],
        items: [
          'Reach: one interface for 41 engines, from PostgreSQL, MySQL and SQLite to MongoDB, Redis, ClickHouse and Kubernetes.',
          'Agent: the read-only database agent runs on PostgreSQL, SQLite, DuckDB, SQL Server, MySQL, Kubernetes and MongoDB.',
          'Version: 1.0.0 was released on 17 October 2026, and the project last shipped an update on 23 October 2026.',
          'Operator: the website\'s privacy policy names Sekoya Grup Bilisim ve Teknoloji Ltd. Sti., registered in Türkiye.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the official website, its security page and the public GitHub repository, checked on 23 October 2026. It involved no hands-on use, benchmarking or security testing.',
          },
        ],
      },
      overview: {
        id: 'what-is-libredb',
        title: 'What Is LibreDB Studio?',
        content: [
          '**According to its website, LibreDB Studio is "the database editor that deploys next to your data": a web application you run as a container, a Helm chart or an npm package instead of installing a client on every laptop.** You open it in a browser, including on a phone or tablet, and work with tables, queries and schemas through a Monaco-based SQL editor, the same editor core as VS Code.',
          'It is primarily a database tool, not an AI product. The AI features are an optional layer: a model-backed assistant that explains execution plans and profiles tables, and an agent that drafts read-only queries and writes a cited report. They accept Gemini, OpenAI, Ollama or any OpenAI-compatible endpoint. This review covers only the free, MIT-licensed LibreDB Studio, not the separate LibreDB Platform.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Most platforms need one terminal command, and only Linux offers a double-click desktop app.** On first start the admin password is printed to the log, and a browser reached at anything other than localhost or HTTPS needs `AUTH_COOKIE_SECURE=false` or login fails silently, according to the README.',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          {
            'Platform': 'Any OS (Docker)',
            'Where to get it': '`docker run -p 3000:3000 ghcr.io/libredb/libredb-studio:latest`, then open http://localhost:3000',
          },
          {
            'Platform': 'Any OS (Node.js 24+)',
            'Where to get it': '`npx @libredb/studio`',
          },
          {
            'Platform': 'macOS',
            'Where to get it': '`brew trust libredb/tap && brew install libredb/tap/libredb-studio`',
          },
          {
            'Platform': 'Windows',
            'Where to get it': '`winget install LibreDB.Studio` (portable zip with a bundled Node.js runtime)',
          },
          {
            'Platform': 'Linux desktop',
            'Where to get it': '[GitHub Releases](https://github.com/libredb/libredb-studio/releases) (AppImage or .deb desktop app, x64 and arm64)',
          },
          {
            'Platform': 'Source code',
            'Where to get it': '[libredb/libredb-studio on GitHub](https://github.com/libredb/libredb-studio) (MIT)',
          },
          {
            'Platform': 'Website',
            'Where to get it': '[libredb.org](https://libredb.org) (documentation, security model and live demo)',
          },
          {
            'Platform': 'Privacy policy',
            'Where to get it': '[libredb.org/privacy-policy](https://libredb.org/privacy-policy/) (last updated 19 October 2026)',
          },
        ],
        note: 'Version reviewed: 1.0.0, released on 17 October 2026; the repository last shipped an update on 23 October 2026. A terminal is required except for the Linux desktop app, and Docker or Node.js 24+ must be available for the first two rows. The README also lists Helm, Snap, deb and rpm packages and one-click deploys, which were not tested.',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'Pricing and License',
        content: [
          '**LibreDB Studio is free: the website states "MIT license. All of it, nothing held back" and "no paid edition, no hosted offering, and no capability held back."** Single sign-on, role-based access control, the audit log and the AI features all ship in the MIT build.',
          'The separate LibreDB Platform, a self-hosted layer for governing database access, is "paid beyond 4 seats", with a free tier of 1 admin and 3 users for 12 months. Its page gives no price and says a quote is sent for the number of seats you need.',
        ],
        note: 'Cloud AI providers bill separately: Gemini, OpenAI and similar APIs are charged by the provider, while a local Ollama model costs only your own hardware.',
      },
      features: {
        id: 'key-features',
        title: 'Features and AI',
        content: [
          '**The editor is the core product; the AI layer sits on top and stays off until you configure a model.** The items below come from the README and the website.',
        ],
        items: [
          '**Editor.** Schema-aware autocomplete, multi-tab workspace, a command palette, visual EXPLAIN plans, interactive ER diagrams and schema diff with generated migration SQL.',
          '**Engines.** 41 engines through one interface, including PostgreSQL, MySQL, Oracle, SQL Server, SQLite, DuckDB, MongoDB, Redis, ClickHouse, Snowflake, BigQuery, Kafka and Kubernetes; three of them are read-only by design.',
          '**Database agent.** In the README\'s description you state an objective, the agent drafts SQL, reads the results and writes a report that cites them. It is read-only, bounded to 18 to 45 statements per run and never executes what it recommends. Agent mode needs a model that can call tools; Plan mode, which only drafts a statement for you to run, works with any model.',
          '**Other AI helpers.** Pre-execution risk analysis for destructive statements, plain-language EXPLAIN summaries and AI-written data profiles.',
          '**Governance.** OIDC single sign-on, role-based access control, an audit log and an MCP server; AI-agent and MCP operations appear in the audit trail.',
        ],
        note: 'The README says the embedded npm package carries no agent surface; the agent exists only in the standalone application.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**With no `LLM_*` setting the AI rail does not render and, according to the README, nothing leaves your network; with Ollama or a custom endpoint configured, the AI is on even without an API key.** The security page says that with a hosted model "the cloud LLM sees the query", and the schema is sent as context. The data profiler also sends each column\'s minimum and maximum, which are real values from your data.',
          'The security page recommends running the AI against a local Ollama or LM Studio for sensitive data. It also lists its own limits: connection details, including database passwords and SSH keys, sit unencrypted in the browser\'s localStorage, and in env-mode local login passwords are compared without hashing. Display masking of sensitive columns is a screen-level feature, not a security boundary. The website\'s privacy policy covers only the site, which loads Google Analytics and Meta Pixel after consent.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the project\'s own statements. PromptQuorum did not audit the code, inspect network traffic or test the local-model path.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Teams that run many database types and want one self-hosted editor with single sign-on and an audit log.**',
          '**Developers who want AI help with SQL but need the model to stay on their own hardware.**',
          '**Anyone who prefers a browser tool to installing a desktop client on every machine.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**The local-model path.** The README says Ollama works and recommends it for sensitive data; which models give usable SQL, and how well tool-calling Agent mode runs on them, was not tested.',
          '**Product telemetry.** The privacy policy covers only the website, so whether the application itself sends usage data is not stated in the sources read.',
          '**Engine depth.** Agent mode covers seven engines, and the README notes per-engine limits; the other engines were not exercised.',
          '**Security claims.** The release checksums, scans and role controls on the security page are the project\'s statements and were not audited.',
          '**Hands-on quality.** Speed, editor quality, large-result behaviour and the mobile views were not tested.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            'App': '[Tabby](/power-local-llm/tabby-review)',
            'Platforms': 'Self-hosted server, IDE plugins',
            'Price / license': 'Free / Apache 2.0',
            'Key difference': 'Self-hosted code-completion assistant for editors; it is not a database client',
          },
          {
            'App': '[Continue.dev](/power-local-llm/continue-dev-review)',
            'Platforms': 'VS Code, JetBrains',
            'Price / license': 'Free / Apache 2.0',
            'Key difference': 'Open-source coding assistant in the IDE that works with local models via Ollama',
          },
          {
            'App': '[Cline](/power-local-llm/cline-review)',
            'Platforms': 'VS Code',
            'Price / license': 'Free / Apache 2.0',
            'Key difference': 'Autonomous coding agent inside VS Code that can edit files and run commands',
          },
          {
            'App': '[Aider](/power-local-llm/aider-review)',
            'Platforms': 'Terminal',
            'Price / license': 'Free / Apache 2.0',
            'Key difference': 'Terminal pair-programming tool that edits a git repository with local or cloud models',
          },
        ],
        note: 'None of these is a database editor; they are the closest reviewed tools in the same directory category, all built around AI help for code. Competitor details change often; confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does LibreDB Studio send my data to the cloud?',
            a: 'Not by default: with no model configured the AI is off. If you choose Gemini or OpenAI, the query and schema context go to that provider.',
          },
          {
            q: 'Which databases can the AI agent read?',
            a: 'PostgreSQL, SQLite, DuckDB, SQL Server, MySQL, Kubernetes and MongoDB; on other engines the plan-only mode still drafts SQL for you to run yourself.',
          },
          {
            q: 'Is LibreDB Studio free for commercial use?',
            a: 'The Studio is MIT-licensed, which permits commercial use; the separate Platform governance layer is paid beyond 4 seats.',
          },
          {
            q: 'Can I run it without Docker?',
            a: 'Yes: `npx @libredb/studio` with Node.js 24+, Homebrew, winget or the Linux desktop app, according to the README.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'LibreDB Studio is a broad, open-source SQL editor with an AI layer that is optional and can be pointed at a local model. The sources describe it clearly, including its own security limits, and the license is plain MIT. It suits teams that want one self-hosted editor for many engines; the local-AI path, telemetry and day-to-day quality are untested, and the agent covers only seven engines. If you want AI help for code rather than databases, compare [Tabby](/power-local-llm/tabby-review) or [Continue.dev](/power-local-llm/continue-dev-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[LibreDB Studio website](https://libredb.org) — product description, engines, license and distribution channels, checked 23 October 2026.',
          '[LibreDB security model](https://libredb.org/security/) — authentication, credential storage and AI data flow, checked 23 October 2026.',
          '[LibreDB privacy policy](https://libredb.org/privacy-policy/) — website data, operator and retention; last updated 19 October 2026.',
          '[LibreDB Platform page](https://libredb.org/platform/) — the paid governance layer and its free tier, checked 23 October 2026.',
          '[libredb/libredb-studio on GitHub](https://github.com/libredb/libredb-studio) — README, package version 1.0.0 and release assets, checked 23 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Tabby Review](/power-local-llm/tabby-review) — a self-hosted code-completion assistant.',
          '[Continue.dev Review](/power-local-llm/continue-dev-review) — an open-source IDE assistant that works with Ollama.',
          '[Cline Review](/power-local-llm/cline-review) — an autonomous coding agent for VS Code.',
          '[Aider Review](/power-local-llm/aider-review) — terminal pair programming with local or cloud models.',
          '[Local LLM Code Development Compared](/power-local-llm/local-llm-code-development-compared) — the category comparison.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LibreDB Studio Review: Open-Source SQL Editor With an Optional Local AI Agent',
      description:
        'LibreDB Studio review: an MIT-licensed browser SQL editor for 41 database engines with an optional AI agent that can use a local Ollama model. What the website and README claim and what stays unverified.',
      url: 'https://promptquorum.com/power-local-llm/libredb-studio-review',
      inLanguage: 'en',
      datePublished: '2026-10-23',
      dateModified: '2026-10-23',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Developers and data teams evaluating a self-hosted SQL editor' },
      about: [
        { '@type': 'Thing', name: 'LibreDB Studio' },
        { '@type': 'Thing', name: 'Self-hosted SQL editor' },
        { '@type': 'Thing', name: 'Local LLM database assistant' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/libredb-studio-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'LibreDB Studio Review', item: 'https://promptquorum.com/power-local-llm/libredb-studio-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Coding Assistants',
    heroImage: '/images/libredb-studio-review-hero-de.webp',
    title: 'LibreDB-Studio-Rezension: Quelloffener SQL-Editor mit optionalem lokalem KI-Agenten',
    seoTitle: 'LibreDB-Studio-Rezension: SQL-Editor mit lokalem KI-Agent',
    intro:
      'LibreDB Studio ist ein MIT-lizenzierter Datenbank-Editor unter [libredb.org](https://libredb.org), der im Browser läuft und mit Docker, npx oder einem Paketmanager direkt neben Ihren Daten betrieben wird. Er verbindet 41 Datenbank-Engines über eine einzige Oberfläche und ergänzt eine optionale KI-Schicht, die statt einer Cloud-API auch ein lokales Ollama-Modell nutzen kann. Diese Rezension gibt die Website, die Sicherheitsseite und das öffentliche GitHub-Repository wieder, wie am 23. Oktober 2026 geprüft; PromptQuorum hat die Software nicht praktisch getestet.',
    metaDescription:
      'LibreDB-Studio-Rezension: kostenloser, MIT-lizenzierter SQL-Editor im Browser für 41 Datenbank-Engines mit optionalem KI-Agenten für lokales Ollama. Setup, Grenzen.',
    twitterDescription:
      'LibreDB-Studio-Rezension: quelloffener SQL-Editor im Browser für 41 Datenbank-Engines, mit optionalem KI-Agenten, der ein lokales Ollama-Modell nutzen kann. Was die Quellen bestätigen und was ungetestet bleibt.',
    audience:
      'Entwickler und Datenteams, die einen selbst gehosteten SQL-Editor für viele Datenbanken suchen und prüfen möchten, ob sich die KI-Funktionen auf lokalen Modellen betreiben lassen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LibreDB Studio Rezension',
    targetKeywords: [
      'libredb studio rezension',
      'libredb studio',
      'open source sql editor',
      'selbst gehosteter datenbank editor',
      'datenbank ide ollama',
      'ki sql assistent lokales llm',
      'libredb studio vs dbeaver',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**LibreDB Studio ist ein kostenloser, selbst gehosteter SQL-Editor, der sich laut eigener Beschreibung aus einem Browser-Tab mit 41 Datenbank-Engines verbindet und KI-Fragen an ein lokales Ollama-Modell schicken kann.** Der KI-Agent liest nur sieben dieser Engines, und die KI bleibt aus, bis Sie ein Modell einrichten.',
    quickAnswerTop: {
      de: {
        question: 'Kann LibreDB Studio für seine KI-Funktionen ein lokales LLM nutzen?',
        answer:
          'Ja, laut README und Sicherheitsseite: Sie können es auf Ollama, LM Studio oder jeden OpenAI-kompatiblen Endpunkt richten, und ohne konfiguriertes Modell ist die KI abgeschaltet. PromptQuorum hat das nicht getestet.',
        bullets: [
          'Studio selbst ist MIT-lizenziert und kostenlos; eine separate Platform-Schicht für Zugriffs-Governance kostet ab 5 Plätzen.',
          'Die Einrichtung ist ein Befehl (Docker oder npx); nur Linux hat eine Desktop-App zum Doppelklicken.',
          'Gehostete Modelle wie Gemini oder OpenAI sehen Ihre Abfrage und das Schema.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist LibreDB Studio?', anchor: 'what-is-libredb' },
      { label: 'Bezugsquellen', anchor: 'get-it' },
      { label: 'Preis und Lizenz', anchor: 'plans-and-pricing' },
      { label: 'Funktionen und KI', anchor: 'key-features' },
      { label: 'Datenschutz und Datenfluss', anchor: 'privacy' },
      { label: 'Für wen geeignet', anchor: 'who-should-use' },
      { label: 'Was wir nicht prüfen konnten', anchor: 'who-should-not-use' },
      { label: 'Wettbewerber und Alternativen', anchor: 'vs-alternatives' },
      { label: 'Häufige Fragen', anchor: 'faq' },
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
            text: 'LibreDB Studio ist ein quelloffener SQL-Editor, der im Browser neben Ihren Datenbanken läuft und einen KI-Assistenten und -Agenten bietet, die ein lokales Modell nutzen können.',
          },
          {
            type: 'plain-terms',
            text: 'Sie starten ihn mit einem Befehl, öffnen ihn im Browser, legen Verbindungen zu Ihren Datenbanken an und schreiben Abfragen; verbinden Sie zusätzlich ein Modell, etwa über Ollama, kann er Ausführungspläne erklären und SQL entwerfen.',
          },
        ],
        items: [
          'Reichweite: eine Oberfläche für 41 Engines, von PostgreSQL, MySQL und SQLite bis MongoDB, Redis, ClickHouse und Kubernetes.',
          'Agent: Der schreibgeschützte Datenbank-Agent läuft auf PostgreSQL, SQLite, DuckDB, SQL Server, MySQL, Kubernetes und MongoDB.',
          'Version: 1.0.0 erschien am 17. Oktober 2026, das letzte Update des Projekts folgte am 23. Oktober 2026.',
          'Betreiber: Die Datenschutzerklärung der Website nennt die Sekoya Grup Bilisim ve Teknoloji Ltd. Sti. mit Sitz in der Türkei.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension beruht auf der offiziellen Website, der Sicherheitsseite und dem öffentlichen GitHub-Repository, geprüft am 23. Oktober 2026. Es gab keine praktische Nutzung, keine Benchmarks und keine Sicherheitstests.',
          },
        ],
      },
      overview: {
        id: 'what-is-libredb',
        title: 'Was ist LibreDB Studio?',
        content: [
          '**Laut Website ist LibreDB Studio „der Datenbank-Editor, der neben Ihren Daten läuft“: eine Webanwendung, die Sie als Container, Helm-Chart oder npm-Paket betreiben, statt auf jedem Laptop einen Client zu installieren.** Sie öffnen sie im Browser, auch auf Smartphone oder Tablet, und arbeiten mit Tabellen, Abfragen und Schemas in einem SQL-Editor auf Monaco-Basis, dem Editorkern von VS Code.',
          'Es ist in erster Linie ein Datenbank-Werkzeug, kein KI-Produkt. Die KI-Funktionen sind eine optionale Schicht: ein modellgestützter Assistent, der Ausführungspläne erklärt und Tabellen profiliert, und ein Agent, der schreibgeschützte Abfragen entwirft und einen belegten Bericht schreibt. Sie akzeptieren Gemini, OpenAI, Ollama oder jeden OpenAI-kompatiblen Endpunkt. Diese Rezension behandelt nur das kostenlose, MIT-lizenzierte LibreDB Studio, nicht die separate LibreDB Platform.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquellen',
        content: [
          '**Auf den meisten Plattformen genügt ein Terminal-Befehl, und nur Linux bietet eine Desktop-App zum Doppelklicken.** Beim ersten Start wird das Admin-Passwort ins Log geschrieben, und ein Browser, der nicht über localhost oder HTTPS zugreift, braucht laut README `AUTH_COOKIE_SECURE=false`, sonst schlägt der Login stillschweigend fehl.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            'Plattform': 'Jedes Betriebssystem (Docker)',
            'Bezugsquelle': '`docker run -p 3000:3000 ghcr.io/libredb/libredb-studio:latest`, danach http://localhost:3000 öffnen',
          },
          {
            'Plattform': 'Jedes Betriebssystem (Node.js 24+)',
            'Bezugsquelle': '`npx @libredb/studio`',
          },
          {
            'Plattform': 'macOS',
            'Bezugsquelle': '`brew trust libredb/tap && brew install libredb/tap/libredb-studio`',
          },
          {
            'Plattform': 'Windows',
            'Bezugsquelle': '`winget install LibreDB.Studio` (portables Zip mit gebündelter Node.js-Laufzeit)',
          },
          {
            'Plattform': 'Linux-Desktop',
            'Bezugsquelle': '[GitHub Releases](https://github.com/libredb/libredb-studio/releases) (Desktop-App als AppImage oder .deb, x64 und arm64)',
          },
          {
            'Plattform': 'Quellcode',
            'Bezugsquelle': '[libredb/libredb-studio auf GitHub](https://github.com/libredb/libredb-studio) (MIT)',
          },
          {
            'Plattform': 'Website',
            'Bezugsquelle': '[libredb.org](https://libredb.org) (Dokumentation, Sicherheitsmodell und Live-Demo)',
          },
          {
            'Plattform': 'Datenschutzerklärung',
            'Bezugsquelle': '[libredb.org/privacy-policy](https://libredb.org/privacy-policy/) (zuletzt aktualisiert am 19. Oktober 2026)',
          },
        ],
        note: 'Geprüfte Version: 1.0.0, veröffentlicht am 17. Oktober 2026; das Repository lieferte zuletzt am 23. Oktober 2026 ein Update. Außer für die Linux-Desktop-App ist ein Terminal nötig, und für die ersten beiden Zeilen müssen Docker beziehungsweise Node.js 24+ vorhanden sein. Die README nennt zusätzlich Helm, Snap, deb- und rpm-Pakete sowie Ein-Klick-Deployments, die nicht getestet wurden.',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'Preis und Lizenz',
        content: [
          '**LibreDB Studio ist kostenlos: Die Website erklärt „MIT license. All of it, nothing held back“ und „no paid edition, no hosted offering, and no capability held back“.** Single Sign-on, rollenbasierte Zugriffskontrolle, das Audit-Log und die KI-Funktionen sind alle im MIT-Build enthalten.',
          'Die separate LibreDB Platform, eine selbst gehostete Schicht zur Steuerung des Datenbankzugriffs, ist „paid beyond 4 seats“, mit einer kostenlosen Stufe aus 1 Admin und 3 Nutzern für 12 Monate. Die Seite nennt keinen Preis und erklärt, dass für die benötigte Platzzahl ein Angebot verschickt wird.',
        ],
        note: 'Cloud-KI-Anbieter rechnen separat ab: Gemini, OpenAI und ähnliche APIs werden vom Anbieter berechnet, ein lokales Ollama-Modell kostet nur Ihre eigene Hardware.',
      },
      features: {
        id: 'key-features',
        title: 'Funktionen und KI',
        content: [
          '**Der Editor ist das Kernprodukt; die KI-Schicht sitzt darüber und bleibt aus, bis Sie ein Modell konfigurieren.** Die folgenden Punkte stammen aus der README und der Website.',
        ],
        items: [
          '**Editor.** Schemabewusste Autovervollständigung, Multi-Tab-Arbeitsbereich, Befehlspalette, grafische EXPLAIN-Pläne, interaktive ER-Diagramme und Schema-Diff mit erzeugtem Migrations-SQL.',
          '**Engines.** 41 Engines über eine Oberfläche, darunter PostgreSQL, MySQL, Oracle, SQL Server, SQLite, DuckDB, MongoDB, Redis, ClickHouse, Snowflake, BigQuery, Kafka und Kubernetes; drei davon sind konstruktionsbedingt schreibgeschützt.',
          '**Datenbank-Agent.** Laut README beschreiben Sie ein Ziel, der Agent entwirft SQL, liest die Ergebnisse und schreibt einen Bericht, der sie belegt. Er ist schreibgeschützt, auf 18 bis 45 Anweisungen pro Lauf begrenzt und führt nie aus, was er empfiehlt. Der Agent-Modus braucht ein Modell mit Tool-Aufrufen; der Plan-Modus, der nur eine Anweisung zum Selbstausführen entwirft, funktioniert mit jedem Modell.',
          '**Weitere KI-Helfer.** Risikoanalyse vor der Ausführung zerstörerischer Anweisungen, EXPLAIN-Zusammenfassungen in einfacher Sprache und KI-geschriebene Datenprofile.',
          '**Governance.** OIDC-Single-Sign-on, rollenbasierte Zugriffskontrolle, ein Audit-Log und ein MCP-Server; Vorgänge von KI-Agent und MCP erscheinen im Audit-Trail.',
        ],
        note: 'Laut README enthält das eingebettete npm-Paket keine Agent-Oberfläche; den Agenten gibt es nur in der eigenständigen Anwendung.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Ohne `LLM_*`-Einstellung wird die KI-Leiste nicht angezeigt, und laut README verlässt nichts Ihr Netzwerk; ist Ollama oder ein eigener Endpunkt konfiguriert, ist die KI auch ohne API-Schlüssel aktiv.** Die Sicherheitsseite sagt, dass bei einem gehosteten Modell „the cloud LLM sees the query“, und das Schema wird als Kontext mitgeschickt. Der Datenprofiler sendet zudem Minimum und Maximum jeder Spalte, also echte Werte aus Ihren Daten.',
          'Die Sicherheitsseite empfiehlt, die KI bei sensiblen Daten gegen ein lokales Ollama oder LM Studio laufen zu lassen. Sie nennt auch eigene Grenzen: Verbindungsdaten, einschließlich Datenbankpasswörtern und SSH-Schlüsseln, liegen unverschlüsselt im localStorage des Browsers, und beim lokalen Login im Env-Modus werden Passwörter ohne Hash verglichen. Die Anzeigemaskierung sensibler Spalten ist eine Funktion auf Bildschirmebene, keine Sicherheitsgrenze. Die Datenschutzerklärung der Website betrifft nur die Website, die nach Einwilligung Google Analytics und Meta Pixel lädt.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind die eigenen Angaben des Projekts. PromptQuorum hat weder den Code geprüft noch den Netzwerkverkehr untersucht oder den Weg über lokale Modelle getestet.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        items: [
          '**Teams, die viele Datenbanktypen betreiben und einen selbst gehosteten Editor mit Single Sign-on und Audit-Log wünschen.**',
          '**Entwickler, die KI-Hilfe bei SQL wollen, das Modell aber auf der eigenen Hardware halten müssen.**',
          '**Alle, die ein Browser-Werkzeug der Installation eines Desktop-Clients auf jedem Rechner vorziehen.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht prüfen konnten',
        items: [
          '**Der Weg über lokale Modelle.** Laut README funktioniert Ollama und wird für sensible Daten empfohlen; welche Modelle brauchbares SQL liefern und wie gut der Agent-Modus mit Tool-Aufrufen darauf läuft, wurde nicht getestet.',
          '**Produkt-Telemetrie.** Die Datenschutzerklärung betrifft nur die Website; ob die Anwendung selbst Nutzungsdaten sendet, geht aus den gelesenen Quellen nicht hervor.',
          '**Tiefe pro Engine.** Der Agent-Modus deckt sieben Engines ab, und die README nennt Einschränkungen je Engine; die übrigen Engines wurden nicht ausprobiert.',
          '**Sicherheitsangaben.** Die Prüfsummen, Scans und Rollenkontrollen auf der Sicherheitsseite sind Aussagen des Projekts und wurden nicht geprüft.',
          '**Praktische Qualität.** Geschwindigkeit, Editorqualität, Verhalten bei großen Ergebnissen und die mobilen Ansichten wurden nicht getestet.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wesentlicher Unterschied'],
        rows: [
          {
            'App': '[Tabby](/de/power-local-llm/tabby-review)',
            'Plattformen': 'Selbst gehosteter Server, IDE-Plugins',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0',
            'Wesentlicher Unterschied': 'Selbst gehosteter Assistent für Code-Vervollständigung in Editoren; kein Datenbank-Client',
          },
          {
            'App': '[Continue.dev](/de/power-local-llm/continue-dev-review)',
            'Plattformen': 'VS Code, JetBrains',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0',
            'Wesentlicher Unterschied': 'Quelloffener Coding-Assistent in der IDE, der über Ollama mit lokalen Modellen arbeitet',
          },
          {
            'App': '[Cline](/de/power-local-llm/cline-review)',
            'Plattformen': 'VS Code',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0',
            'Wesentlicher Unterschied': 'Autonomer Coding-Agent in VS Code, der Dateien bearbeiten und Befehle ausführen kann',
          },
          {
            'App': '[Aider](/de/power-local-llm/aider-review)',
            'Plattformen': 'Terminal',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0',
            'Wesentlicher Unterschied': 'Terminal-Werkzeug fürs Pair Programming, das ein Git-Repository mit lokalen oder Cloud-Modellen bearbeitet',
          },
        ],
        note: 'Keines davon ist ein Datenbank-Editor; es sind die nächstliegenden rezensierten Werkzeuge derselben Verzeichniskategorie, alle auf KI-Hilfe für Code ausgelegt. Details der Wettbewerber ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen auf der jeweiligen Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufige Fragen',
        faqs: [
          {
            q: 'Sendet LibreDB Studio meine Daten in die Cloud?',
            a: 'Standardmäßig nicht: Ohne konfiguriertes Modell ist die KI aus. Wählen Sie Gemini oder OpenAI, gehen Abfrage und Schema-Kontext an diesen Anbieter.',
          },
          {
            q: 'Welche Datenbanken kann der KI-Agent lesen?',
            a: 'PostgreSQL, SQLite, DuckDB, SQL Server, MySQL, Kubernetes und MongoDB; auf anderen Engines entwirft der reine Plan-Modus weiterhin SQL, das Sie selbst ausführen.',
          },
          {
            q: 'Ist LibreDB Studio für kommerzielle Nutzung kostenlos?',
            a: 'Studio steht unter der MIT-Lizenz, die kommerzielle Nutzung erlaubt; die separate Governance-Schicht Platform ist ab 5 Plätzen kostenpflichtig.',
          },
          {
            q: 'Kann ich es ohne Docker betreiben?',
            a: 'Ja: laut README mit `npx @libredb/studio` und Node.js 24+, mit Homebrew, winget oder der Linux-Desktop-App.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'LibreDB Studio ist ein breit aufgestellter, quelloffener SQL-Editor mit einer optionalen KI-Schicht, die sich auf ein lokales Modell richten lässt. Die Quellen beschreiben ihn klar, einschließlich seiner eigenen Sicherheitsgrenzen, und die Lizenz ist schlicht MIT. Er passt zu Teams, die einen selbst gehosteten Editor für viele Engines wollen; der lokale KI-Weg, die Telemetrie und die Alltagsqualität sind ungetestet, und der Agent deckt nur sieben Engines ab. Wer KI-Hilfe für Code statt für Datenbanken sucht, vergleicht [Tabby](/de/power-local-llm/tabby-review) oder [Continue.dev](/de/power-local-llm/continue-dev-review).',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[LibreDB-Studio-Website](https://libredb.org) — Produktbeschreibung, Engines, Lizenz und Vertriebswege, geprüft am 23. Oktober 2026.',
          '[LibreDB-Sicherheitsmodell](https://libredb.org/security/) — Authentifizierung, Speicherung von Zugangsdaten und KI-Datenfluss, geprüft am 23. Oktober 2026.',
          '[LibreDB-Datenschutzerklärung](https://libredb.org/privacy-policy/) — Website-Daten, Betreiber und Speicherdauer; zuletzt aktualisiert am 19. Oktober 2026.',
          '[LibreDB-Platform-Seite](https://libredb.org/platform/) — die kostenpflichtige Governance-Schicht und ihre kostenlose Stufe, geprüft am 23. Oktober 2026.',
          '[libredb/libredb-studio auf GitHub](https://github.com/libredb/libredb-studio) — README, Paketversion 1.0.0 und Release-Dateien, geprüft am 23. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Tabby-Rezension](/de/power-local-llm/tabby-review) — ein selbst gehosteter Assistent für Code-Vervollständigung.',
          '[Continue.dev-Rezension](/de/power-local-llm/continue-dev-review) — ein quelloffener IDE-Assistent, der mit Ollama arbeitet.',
          '[Cline-Rezension](/de/power-local-llm/cline-review) — ein autonomer Coding-Agent für VS Code.',
          '[Aider-Rezension](/de/power-local-llm/aider-review) — Pair Programming im Terminal mit lokalen oder Cloud-Modellen.',
          '[Lokale LLMs für die Softwareentwicklung im Vergleich](/de/power-local-llm/local-llm-code-development-compared) — der Kategorievergleich.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Coding Assistants',
    heroImage: '/images/libredb-studio-review-hero-es.webp',
    title: 'Reseña de LibreDB Studio: editor SQL de código abierto con agente de IA local opcional',
    seoTitle: 'Reseña de LibreDB Studio: editor SQL con agente de IA local',
    intro:
      'LibreDB Studio es un editor de bases de datos con licencia MIT en [libredb.org](https://libredb.org) que funciona en el navegador y se despliega junto a tus datos con Docker, npx o un gestor de paquetes. Conecta 41 motores de bases de datos con una sola interfaz y añade una capa de IA opcional que puede usar un modelo Ollama local en lugar de una API en la nube. Esta reseña refleja el sitio web, su página de seguridad y el repositorio público de GitHub, consultados el 23 de octubre de 2026; PromptQuorum no probó el software en la práctica.',
    metaDescription:
      'Reseña de LibreDB Studio: editor SQL gratuito con licencia MIT en el navegador para 41 motores de bases de datos, con agente de IA opcional que puede usar Ollama local.',
    twitterDescription:
      'Reseña de LibreDB Studio: editor SQL de código abierto para 41 motores de bases de datos en el navegador, con agente de IA opcional que puede usar un modelo Ollama local. Qué confirman las fuentes y qué queda sin probar.',
    audience:
      'Desarrolladores y equipos de datos que quieren un único editor SQL autoalojado para muchas bases de datos y se preguntan si sus funciones de IA pueden funcionar con modelos locales.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de LibreDB Studio',
    targetKeywords: [
      'reseña libredb studio',
      'libredb studio',
      'editor sql de código abierto',
      'editor de bases de datos autoalojado',
      'ide de bases de datos ollama',
      'asistente sql con ia llm local',
      'libredb studio vs dbeaver',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**LibreDB Studio es un editor SQL gratuito y autoalojado que, según su propia descripción, se conecta a 41 motores de bases de datos desde una pestaña del navegador y puede enviar sus consultas de IA a un modelo Ollama local.** Su agente de IA solo lee siete de esos motores, y la IA permanece desactivada hasta que configuras un modelo.',
    quickAnswerTop: {
      es: {
        question: '¿Puede LibreDB Studio usar un LLM local para sus funciones de IA?',
        answer:
          'Sí, según su README y su página de seguridad: puedes apuntarlo a Ollama, LM Studio o cualquier endpoint compatible con OpenAI, y sin modelo configurado la IA queda desactivada. PromptQuorum no lo probó.',
        bullets: [
          'Studio es gratuito y tiene licencia MIT; una capa Platform aparte para gobernanza de accesos es de pago a partir de 5 puestos.',
          'La instalación es un solo comando (Docker o npx); solo Linux tiene una app de escritorio de doble clic.',
          'Los modelos alojados, como Gemini u OpenAI, ven tu consulta y el esquema.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es LibreDB Studio?', anchor: 'what-is-libredb' },
      { label: 'Dónde conseguirlo', anchor: 'get-it' },
      { label: 'Precio y licencia', anchor: 'plans-and-pricing' },
      { label: 'Funciones e IA', anchor: 'key-features' },
      { label: 'Privacidad y flujo de datos', anchor: 'privacy' },
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
          {
            type: 'one-sentence',
            text: 'LibreDB Studio es un editor SQL de código abierto que funciona en el navegador junto a tus bases de datos y ofrece un asistente y un agente de IA que pueden usar un modelo local.',
          },
          {
            type: 'plain-terms',
            text: 'Lo inicias con un comando, lo abres en el navegador, añades conexiones a tus bases de datos y escribes consultas; si además conectas un modelo, por ejemplo servido por Ollama, puede explicar planes de ejecución y redactar SQL.',
          },
        ],
        items: [
          'Alcance: una interfaz para 41 motores, desde PostgreSQL, MySQL y SQLite hasta MongoDB, Redis, ClickHouse y Kubernetes.',
          'Agente: el agente de base de datos de solo lectura funciona en PostgreSQL, SQLite, DuckDB, SQL Server, MySQL, Kubernetes y MongoDB.',
          'Versión: la 1.0.0 salió el 17 de octubre de 2026 y el proyecto publicó su última actualización el 23 de octubre de 2026.',
          'Operador: la política de privacidad del sitio nombra a Sekoya Grup Bilisim ve Teknoloji Ltd. Sti., registrada en Turquía.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web oficial, su página de seguridad y el repositorio público de GitHub, consultados el 23 de octubre de 2026. No hubo uso práctico, benchmarks ni pruebas de seguridad.',
          },
        ],
      },
      overview: {
        id: 'what-is-libredb',
        title: '¿Qué es LibreDB Studio?',
        content: [
          '**Según su sitio web, LibreDB Studio es «el editor de bases de datos que se despliega junto a tus datos»: una aplicación web que ejecutas como contenedor, chart de Helm o paquete npm en lugar de instalar un cliente en cada portátil.** La abres en el navegador, también en un móvil o una tablet, y trabajas con tablas, consultas y esquemas en un editor SQL basado en Monaco, el mismo núcleo de editor que VS Code.',
          'Es ante todo una herramienta de bases de datos, no un producto de IA. Las funciones de IA son una capa opcional: un asistente respaldado por un modelo que explica planes de ejecución y perfila tablas, y un agente que redacta consultas de solo lectura y escribe un informe con citas. Aceptan Gemini, OpenAI, Ollama o cualquier endpoint compatible con OpenAI. Esta reseña cubre solo LibreDB Studio, gratuito y con licencia MIT, no la LibreDB Platform aparte.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**En la mayoría de las plataformas basta un comando de terminal, y solo Linux ofrece una app de escritorio de doble clic.** En el primer arranque la contraseña de administrador se imprime en el registro, y un navegador que acceda por algo distinto de localhost o HTTPS necesita `AUTH_COOKIE_SECURE=false` o el inicio de sesión falla en silencio, según el README.',
        ],
        columns: ['Plataforma', 'Dónde conseguirlo'],
        rows: [
          {
            'Plataforma': 'Cualquier sistema (Docker)',
            'Dónde conseguirlo': '`docker run -p 3000:3000 ghcr.io/libredb/libredb-studio:latest` y abre http://localhost:3000',
          },
          {
            'Plataforma': 'Cualquier sistema (Node.js 24+)',
            'Dónde conseguirlo': '`npx @libredb/studio`',
          },
          {
            'Plataforma': 'macOS',
            'Dónde conseguirlo': '`brew trust libredb/tap && brew install libredb/tap/libredb-studio`',
          },
          {
            'Plataforma': 'Windows',
            'Dónde conseguirlo': '`winget install LibreDB.Studio` (zip portátil con un entorno Node.js incluido)',
          },
          {
            'Plataforma': 'Escritorio Linux',
            'Dónde conseguirlo': '[GitHub Releases](https://github.com/libredb/libredb-studio/releases) (app de escritorio AppImage o .deb, x64 y arm64)',
          },
          {
            'Plataforma': 'Código fuente',
            'Dónde conseguirlo': '[libredb/libredb-studio en GitHub](https://github.com/libredb/libredb-studio) (MIT)',
          },
          {
            'Plataforma': 'Sitio web',
            'Dónde conseguirlo': '[libredb.org](https://libredb.org) (documentación, modelo de seguridad y demo en vivo)',
          },
          {
            'Plataforma': 'Política de privacidad',
            'Dónde conseguirlo': '[libredb.org/privacy-policy](https://libredb.org/privacy-policy/) (última actualización: 19 de octubre de 2026)',
          },
        ],
        note: 'Versión revisada: 1.0.0, publicada el 17 de octubre de 2026; el repositorio publicó su última actualización el 23 de octubre de 2026. Hace falta una terminal salvo en la app de escritorio de Linux, y para las dos primeras filas debe haber Docker o Node.js 24+. El README también menciona paquetes Helm, Snap, deb y rpm y despliegues con un clic, que no se probaron.',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'Precio y licencia',
        content: [
          '**LibreDB Studio es gratuito: el sitio afirma «MIT license. All of it, nothing held back» y «no paid edition, no hosted offering, and no capability held back».** El inicio de sesión único, el control de acceso por roles, el registro de auditoría y las funciones de IA vienen todos en la versión MIT.',
          'La LibreDB Platform aparte, una capa autoalojada para gobernar el acceso a las bases de datos, es «paid beyond 4 seats», con un nivel gratuito de 1 administrador y 3 usuarios durante 12 meses. Su página no da precio y dice que se envía un presupuesto según el número de puestos.',
        ],
        note: 'Los proveedores de IA en la nube cobran aparte: Gemini, OpenAI y APIs similares las cobra el proveedor, mientras que un modelo Ollama local solo cuesta tu propio hardware.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones e IA',
        content: [
          '**El editor es el producto principal; la capa de IA va encima y permanece desactivada hasta que configuras un modelo.** Los puntos siguientes salen del README y del sitio web.',
        ],
        items: [
          '**Editor.** Autocompletado que conoce el esquema, espacio de trabajo con varias pestañas, paleta de comandos, planes EXPLAIN visuales, diagramas ER interactivos y comparación de esquemas con SQL de migración generado.',
          '**Motores.** 41 motores con una sola interfaz, entre ellos PostgreSQL, MySQL, Oracle, SQL Server, SQLite, DuckDB, MongoDB, Redis, ClickHouse, Snowflake, BigQuery, Kafka y Kubernetes; tres de ellos son de solo lectura por diseño.',
          '**Agente de base de datos.** Según el README, indicas un objetivo, el agente redacta SQL, lee los resultados y escribe un informe que los cita. Es de solo lectura, está limitado a entre 18 y 45 sentencias por ejecución y nunca ejecuta lo que recomienda. El modo Agent necesita un modelo capaz de llamar herramientas; el modo Plan, que solo redacta una sentencia para que la ejecutes tú, funciona con cualquier modelo.',
          '**Otros ayudantes de IA.** Análisis de riesgo antes de ejecutar sentencias destructivas, resúmenes de EXPLAIN en lenguaje sencillo y perfiles de datos redactados por IA.',
          '**Gobernanza.** Inicio de sesión único OIDC, control de acceso por roles, registro de auditoría y un servidor MCP; las operaciones del agente de IA y de MCP aparecen en el rastro de auditoría.',
        ],
        note: 'El README indica que el paquete npm incrustable no incluye la superficie del agente; el agente existe solo en la aplicación independiente.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**Sin ningún ajuste `LLM_*`, la barra de IA no se muestra y, según el README, nada sale de tu red; con Ollama o un endpoint propio configurado, la IA está activa incluso sin clave de API.** La página de seguridad dice que con un modelo alojado «the cloud LLM sees the query», y el esquema se envía como contexto. El perfilador de datos envía además el mínimo y el máximo de cada columna, que son valores reales de tus datos.',
          'La página de seguridad recomienda ejecutar la IA contra un Ollama o LM Studio local cuando los datos son sensibles. También enumera sus propios límites: los datos de conexión, incluidas contraseñas de bases de datos y claves SSH, quedan sin cifrar en el localStorage del navegador, y en el inicio de sesión local en modo env las contraseñas se comparan sin hash. El enmascarado de columnas sensibles es una función a nivel de pantalla, no un límite de seguridad. La política de privacidad del sitio cubre solo el sitio web, que carga Google Analytics y Meta Pixel tras el consentimiento.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas son declaraciones del propio proyecto. PromptQuorum no auditó el código, no inspeccionó el tráfico de red ni probó la ruta con modelos locales.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Equipos que manejan muchos tipos de bases de datos y quieren un editor autoalojado con inicio de sesión único y registro de auditoría.**',
          '**Desarrolladores que quieren ayuda de IA con SQL pero necesitan que el modelo se quede en su propio hardware.**',
          '**Quienes prefieren una herramienta de navegador a instalar un cliente de escritorio en cada equipo.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**La ruta con modelos locales.** El README dice que Ollama funciona y lo recomienda para datos sensibles; qué modelos dan un SQL útil y cómo rinde con ellos el modo Agent con llamadas a herramientas no se probó.',
          '**Telemetría del producto.** La política de privacidad cubre solo el sitio web, así que las fuentes leídas no indican si la propia aplicación envía datos de uso.',
          '**Profundidad por motor.** El modo Agent cubre siete motores y el README señala límites por motor; los demás motores no se ejercitaron.',
          '**Declaraciones de seguridad.** Las sumas de verificación, los análisis y los controles de roles de la página de seguridad son afirmaciones del proyecto y no se auditaron.',
          '**Calidad en uso real.** No se probaron la velocidad, la calidad del editor, el comportamiento con resultados grandes ni las vistas móviles.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            'App': '[Tabby](/es/power-local-llm/tabby-review)',
            'Plataformas': 'Servidor autoalojado, plugins de IDE',
            'Precio / licencia': 'Gratis / Apache 2.0',
            'Diferencia clave': 'Asistente autoalojado de autocompletado de código para editores; no es un cliente de bases de datos',
          },
          {
            'App': '[Continue.dev](/es/power-local-llm/continue-dev-review)',
            'Plataformas': 'VS Code, JetBrains',
            'Precio / licencia': 'Gratis / Apache 2.0',
            'Diferencia clave': 'Asistente de programación de código abierto en el IDE que funciona con modelos locales mediante Ollama',
          },
          {
            'App': '[Cline](/es/power-local-llm/cline-review)',
            'Plataformas': 'VS Code',
            'Precio / licencia': 'Gratis / Apache 2.0',
            'Diferencia clave': 'Agente de programación autónomo dentro de VS Code que puede editar archivos y ejecutar comandos',
          },
          {
            'App': '[Aider](/es/power-local-llm/aider-review)',
            'Plataformas': 'Terminal',
            'Precio / licencia': 'Gratis / Apache 2.0',
            'Diferencia clave': 'Herramienta de pair programming en la terminal que edita un repositorio git con modelos locales o en la nube',
          },
        ],
        note: 'Ninguna de estas es un editor de bases de datos; son las herramientas reseñadas más cercanas de la misma categoría del directorio, todas pensadas para ayuda de IA con código. Los detalles de la competencia cambian a menudo; confirma el precio, la licencia y las plataformas actuales en la página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿LibreDB Studio envía mis datos a la nube?',
            a: 'No por defecto: sin modelo configurado la IA está desactivada. Si eliges Gemini u OpenAI, la consulta y el contexto del esquema van a ese proveedor.',
          },
          {
            q: '¿Qué bases de datos puede leer el agente de IA?',
            a: 'PostgreSQL, SQLite, DuckDB, SQL Server, MySQL, Kubernetes y MongoDB; en otros motores el modo Plan sigue redactando SQL para que lo ejecutes tú.',
          },
          {
            q: '¿Es LibreDB Studio gratuito para uso comercial?',
            a: 'Studio tiene licencia MIT, que permite el uso comercial; la capa de gobernanza Platform, aparte, es de pago a partir de 5 puestos.',
          },
          {
            q: '¿Puedo ejecutarlo sin Docker?',
            a: 'Sí: con `npx @libredb/studio` y Node.js 24+, con Homebrew, con winget o con la app de escritorio de Linux, según el README.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'LibreDB Studio es un editor SQL de código abierto muy amplio, con una capa de IA opcional que se puede apuntar a un modelo local. Las fuentes lo describen con claridad, incluidos sus propios límites de seguridad, y la licencia es una MIT sencilla. Encaja con equipos que quieren un editor autoalojado para muchos motores; la ruta de IA local, la telemetría y la calidad del día a día no se probaron, y el agente cubre solo siete motores. Si buscas ayuda de IA para código y no para bases de datos, compara [Tabby](/es/power-local-llm/tabby-review) o [Continue.dev](/es/power-local-llm/continue-dev-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de LibreDB Studio](https://libredb.org) — descripción del producto, motores, licencia y canales de distribución, consultado el 23 de octubre de 2026.',
          '[Modelo de seguridad de LibreDB](https://libredb.org/security/) — autenticación, almacenamiento de credenciales y flujo de datos de la IA, consultado el 23 de octubre de 2026.',
          '[Política de privacidad de LibreDB](https://libredb.org/privacy-policy/) — datos del sitio, operador y conservación; última actualización el 19 de octubre de 2026.',
          '[Página de LibreDB Platform](https://libredb.org/platform/) — la capa de gobernanza de pago y su nivel gratuito, consultada el 23 de octubre de 2026.',
          '[libredb/libredb-studio en GitHub](https://github.com/libredb/libredb-studio) — README, versión 1.0.0 del paquete y archivos de la versión, consultados el 23 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Tabby](/es/power-local-llm/tabby-review) — un asistente autoalojado de autocompletado de código.',
          '[Reseña de Continue.dev](/es/power-local-llm/continue-dev-review) — un asistente de IDE de código abierto que funciona con Ollama.',
          '[Reseña de Cline](/es/power-local-llm/cline-review) — un agente de programación autónomo para VS Code.',
          '[Reseña de Aider](/es/power-local-llm/aider-review) — pair programming en la terminal con modelos locales o en la nube.',
          '[LLM locales para desarrollo de código: comparativa](/es/power-local-llm/local-llm-code-development-compared) — la comparativa de la categoría.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Coding Assistants',
    heroImage: '/images/libredb-studio-review-hero-fr.webp',
    title: 'Test de LibreDB Studio : éditeur SQL open source avec agent IA local facultatif',
    seoTitle: 'Test de LibreDB Studio : éditeur SQL avec agent IA local',
    intro:
      'LibreDB Studio est un éditeur de bases de données sous licence MIT, disponible sur [libredb.org](https://libredb.org), qui fonctionne dans le navigateur et se déploie à côté de vos données avec Docker, npx ou un gestionnaire de paquets. Il relie 41 moteurs de bases de données par une seule interface et ajoute une couche d\'IA facultative qui peut utiliser un modèle Ollama local plutôt qu\'une API cloud. Ce test reflète le site web, sa page de sécurité et le dépôt GitHub public, consultés le 23 octobre 2026 ; PromptQuorum n\'a pas testé le logiciel en pratique.',
    metaDescription:
      'Test de LibreDB Studio : éditeur SQL gratuit sous licence MIT dans le navigateur pour 41 moteurs de bases de données, avec agent IA facultatif pour Ollama local.',
    twitterDescription:
      'Test de LibreDB Studio : éditeur SQL open source pour 41 moteurs de bases de données dans le navigateur, avec un agent IA facultatif utilisable avec un modèle Ollama local. Ce que confirment les sources et ce qui reste non testé.',
    audience:
      'Développeurs et équipes data qui veulent un seul éditeur SQL auto-hébergé pour de nombreuses bases et se demandent si ses fonctions d\'IA peuvent rester sur des modèles locaux.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'test de LibreDB Studio',
    targetKeywords: [
      'test libredb studio',
      'libredb studio',
      'éditeur sql open source',
      'éditeur de base de données auto-hébergé',
      'ide base de données ollama',
      'assistant sql ia llm local',
      'libredb studio vs dbeaver',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**LibreDB Studio est un éditeur SQL gratuit et auto-hébergé qui, selon sa propre description, se connecte à 41 moteurs de bases de données depuis un seul onglet du navigateur et peut envoyer ses requêtes d\'IA à un modèle Ollama local.** Son agent IA ne lit que sept de ces moteurs, et l\'IA reste désactivée tant que vous ne configurez pas de modèle.',
    quickAnswerTop: {
      fr: {
        question: 'LibreDB Studio peut-il utiliser un LLM local pour ses fonctions d\'IA ?',
        answer:
          'Oui, d\'après son README et sa page de sécurité : vous pouvez le diriger vers Ollama, LM Studio ou tout point d\'accès compatible OpenAI, et sans modèle configuré l\'IA est désactivée. PromptQuorum ne l\'a pas testé.',
        bullets: [
          'Studio est sous licence MIT et gratuit ; une couche Platform distincte de gouvernance des accès est payante au-delà de 4 places.',
          'L\'installation tient en une commande (Docker ou npx) ; seul Linux dispose d\'une application de bureau à double-clic.',
          'Les modèles hébergés, comme Gemini ou OpenAI, voient votre requête et le schéma.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que LibreDB Studio ?', anchor: 'what-is-libredb' },
      { label: 'Où le trouver', anchor: 'get-it' },
      { label: 'Prix et licence', anchor: 'plans-and-pricing' },
      { label: 'Fonctions et IA', anchor: 'key-features' },
      { label: 'Confidentialité et flux de données', anchor: 'privacy' },
      { label: 'À qui il s\'adresse', anchor: 'who-should-use' },
      { label: 'Ce que nous n\'avons pas pu vérifier', anchor: 'who-should-not-use' },
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
          {
            type: 'one-sentence',
            text: 'LibreDB Studio est un éditeur SQL open source qui s\'exécute dans le navigateur à côté de vos bases de données et propose un assistant et un agent IA pouvant utiliser un modèle local.',
          },
          {
            type: 'plain-terms',
            text: 'Vous le lancez avec une commande, l\'ouvrez dans un navigateur, ajoutez des connexions à vos bases et écrivez des requêtes ; si vous connectez aussi un modèle, par exemple servi par Ollama, il peut expliquer les plans d\'exécution et rédiger du SQL.',
          },
        ],
        items: [
          'Portée : une interface pour 41 moteurs, de PostgreSQL, MySQL et SQLite à MongoDB, Redis, ClickHouse et Kubernetes.',
          'Agent : l\'agent de base de données en lecture seule fonctionne sur PostgreSQL, SQLite, DuckDB, SQL Server, MySQL, Kubernetes et MongoDB.',
          'Version : la 1.0.0 est sortie le 17 octobre 2026 et le projet a publié sa dernière mise à jour le 23 octobre 2026.',
          'Opérateur : la politique de confidentialité du site nomme Sekoya Grup Bilisim ve Teknoloji Ltd. Sti., enregistrée en Turquie.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test repose sur le site officiel, sa page de sécurité et le dépôt GitHub public, consultés le 23 octobre 2026. Il n\'a comporté ni utilisation pratique, ni benchmark, ni test de sécurité.',
          },
        ],
      },
      overview: {
        id: 'what-is-libredb',
        title: 'Qu\'est-ce que LibreDB Studio ?',
        content: [
          '**Selon son site, LibreDB Studio est « l\'éditeur de bases de données qui se déploie à côté de vos données » : une application web que vous exécutez sous forme de conteneur, de chart Helm ou de paquet npm au lieu d\'installer un client sur chaque portable.** Vous l\'ouvrez dans un navigateur, y compris sur un téléphone ou une tablette, et travaillez sur les tables, requêtes et schémas dans un éditeur SQL basé sur Monaco, le même cœur d\'éditeur que VS Code.',
          'C\'est avant tout un outil de bases de données, pas un produit d\'IA. Les fonctions d\'IA forment une couche facultative : un assistant adossé à un modèle qui explique les plans d\'exécution et profile les tables, et un agent qui rédige des requêtes en lecture seule et écrit un rapport avec citations. Elles acceptent Gemini, OpenAI, Ollama ou tout point d\'accès compatible OpenAI. Ce test ne couvre que LibreDB Studio, gratuit et sous licence MIT, pas la LibreDB Platform distincte.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où le trouver',
        content: [
          '**Sur la plupart des plateformes, une commande de terminal suffit, et seul Linux propose une application de bureau à double-clic.** Au premier démarrage, le mot de passe administrateur est affiché dans le journal, et un navigateur qui y accède autrement que par localhost ou HTTPS a besoin de `AUTH_COOKIE_SECURE=false`, faute de quoi la connexion échoue silencieusement, selon le README.',
        ],
        columns: ['Plateforme', 'Où le trouver'],
        rows: [
          {
            'Plateforme': 'Tout système (Docker)',
            'Où le trouver': '`docker run -p 3000:3000 ghcr.io/libredb/libredb-studio:latest`, puis ouvrir http://localhost:3000',
          },
          {
            'Plateforme': 'Tout système (Node.js 24+)',
            'Où le trouver': '`npx @libredb/studio`',
          },
          {
            'Plateforme': 'macOS',
            'Où le trouver': '`brew trust libredb/tap && brew install libredb/tap/libredb-studio`',
          },
          {
            'Plateforme': 'Windows',
            'Où le trouver': '`winget install LibreDB.Studio` (zip portable avec un environnement Node.js intégré)',
          },
          {
            'Plateforme': 'Bureau Linux',
            'Où le trouver': '[GitHub Releases](https://github.com/libredb/libredb-studio/releases) (application de bureau AppImage ou .deb, x64 et arm64)',
          },
          {
            'Plateforme': 'Code source',
            'Où le trouver': '[libredb/libredb-studio sur GitHub](https://github.com/libredb/libredb-studio) (MIT)',
          },
          {
            'Plateforme': 'Site web',
            'Où le trouver': '[libredb.org](https://libredb.org) (documentation, modèle de sécurité et démo en ligne)',
          },
          {
            'Plateforme': 'Politique de confidentialité',
            'Où le trouver': '[libredb.org/privacy-policy](https://libredb.org/privacy-policy/) (dernière mise à jour le 19 octobre 2026)',
          },
        ],
        note: 'Version testée : 1.0.0, publiée le 17 octobre 2026 ; le dépôt a publié sa dernière mise à jour le 23 octobre 2026. Un terminal est requis sauf pour l\'application de bureau Linux, et Docker ou Node.js 24+ doit être disponible pour les deux premières lignes. Le README mentionne aussi des paquets Helm, Snap, deb et rpm et des déploiements en un clic, qui n\'ont pas été testés.',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'Prix et licence',
        content: [
          '**LibreDB Studio est gratuit : le site affirme « MIT license. All of it, nothing held back » et « no paid edition, no hosted offering, and no capability held back ».** L\'authentification unique, le contrôle d\'accès par rôles, le journal d\'audit et les fonctions d\'IA sont tous inclus dans la version MIT.',
          'La LibreDB Platform distincte, une couche auto-hébergée de gouvernance de l\'accès aux bases, est « paid beyond 4 seats », avec un niveau gratuit de 1 administrateur et 3 utilisateurs pendant 12 mois. Sa page n\'indique aucun prix et précise qu\'un devis est envoyé selon le nombre de places.',
        ],
        note: 'Les fournisseurs d\'IA cloud facturent à part : Gemini, OpenAI et les API similaires sont facturées par le fournisseur, alors qu\'un modèle Ollama local ne coûte que votre propre matériel.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions et IA',
        content: [
          '**L\'éditeur est le produit principal ; la couche d\'IA se superpose et reste désactivée tant que vous ne configurez pas de modèle.** Les points ci-dessous viennent du README et du site web.',
        ],
        items: [
          '**Éditeur.** Saisie semi-automatique qui connaît le schéma, espace de travail multi-onglets, palette de commandes, plans EXPLAIN visuels, diagrammes ER interactifs et comparaison de schémas avec SQL de migration généré.',
          '**Moteurs.** 41 moteurs derrière une seule interface, dont PostgreSQL, MySQL, Oracle, SQL Server, SQLite, DuckDB, MongoDB, Redis, ClickHouse, Snowflake, BigQuery, Kafka et Kubernetes ; trois d\'entre eux sont en lecture seule par conception.',
          '**Agent de base de données.** D\'après le README, vous énoncez un objectif, l\'agent rédige du SQL, lit les résultats et écrit un rapport qui les cite. Il est en lecture seule, limité à 18 à 45 instructions par exécution et n\'exécute jamais ce qu\'il recommande. Le mode Agent exige un modèle capable d\'appeler des outils ; le mode Plan, qui se contente de rédiger une instruction que vous exécutez vous-même, fonctionne avec n\'importe quel modèle.',
          '**Autres assistants IA.** Analyse de risque avant l\'exécution d\'instructions destructrices, résumés EXPLAIN en langage clair et profils de données rédigés par l\'IA.',
          '**Gouvernance.** Authentification unique OIDC, contrôle d\'accès par rôles, journal d\'audit et serveur MCP ; les opérations de l\'agent IA et de MCP apparaissent dans la piste d\'audit.',
        ],
        note: 'Le README indique que le paquet npm intégrable ne comporte pas la surface de l\'agent ; l\'agent n\'existe que dans l\'application autonome.',
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**Sans aucun réglage `LLM_*`, le panneau d\'IA ne s\'affiche pas et, d\'après le README, rien ne quitte votre réseau ; avec Ollama ou un point d\'accès personnalisé configuré, l\'IA est active même sans clé d\'API.** La page de sécurité indique qu\'avec un modèle hébergé « the cloud LLM sees the query », et le schéma est envoyé comme contexte. Le profileur de données envoie en outre le minimum et le maximum de chaque colonne, qui sont de vraies valeurs de vos données.',
          'La page de sécurité recommande d\'exécuter l\'IA avec un Ollama ou un LM Studio local pour les données sensibles. Elle énumère aussi ses propres limites : les détails de connexion, y compris les mots de passe de bases et les clés SSH, sont stockés sans chiffrement dans le localStorage du navigateur, et dans la connexion locale en mode env les mots de passe sont comparés sans hachage. Le masquage des colonnes sensibles est une fonction d\'affichage, pas une frontière de sécurité. La politique de confidentialité du site ne couvre que le site, qui charge Google Analytics et Meta Pixel après consentement.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Il s\'agit des déclarations du projet lui-même. PromptQuorum n\'a pas audité le code, inspecté le trafic réseau ni testé le chemin avec modèles locaux.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s\'adresse',
        items: [
          '**Les équipes qui gèrent de nombreux types de bases et veulent un éditeur auto-hébergé avec authentification unique et journal d\'audit.**',
          '**Les développeurs qui veulent une aide d\'IA pour le SQL mais doivent garder le modèle sur leur propre matériel.**',
          '**Ceux qui préfèrent un outil dans le navigateur à l\'installation d\'un client de bureau sur chaque poste.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Le chemin avec modèles locaux.** Le README indique qu\'Ollama fonctionne et le recommande pour les données sensibles ; quels modèles donnent du SQL exploitable et comment le mode Agent avec appels d\'outils se comporte dessus n\'a pas été testé.',
          '**La télémétrie du produit.** La politique de confidentialité ne couvre que le site ; les sources lues n\'indiquent pas si l\'application elle-même envoie des données d\'usage.',
          '**La profondeur par moteur.** Le mode Agent couvre sept moteurs et le README note des limites par moteur ; les autres moteurs n\'ont pas été essayés.',
          '**Les déclarations de sécurité.** Les sommes de contrôle, analyses et contrôles de rôles de la page de sécurité sont des affirmations du projet et n\'ont pas été auditées.',
          '**La qualité à l\'usage.** La vitesse, la qualité de l\'éditeur, le comportement avec de gros résultats et les vues mobiles n\'ont pas été testés.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            'Application': '[Tabby](/fr/power-local-llm/tabby-review)',
            'Plateformes': 'Serveur auto-hébergé, extensions d\'IDE',
            'Prix / licence': 'Gratuit / Apache 2.0',
            'Différence clé': 'Assistant auto-hébergé de complétion de code pour éditeurs ; ce n\'est pas un client de base de données',
          },
          {
            'Application': '[Continue.dev](/fr/power-local-llm/continue-dev-review)',
            'Plateformes': 'VS Code, JetBrains',
            'Prix / licence': 'Gratuit / Apache 2.0',
            'Différence clé': 'Assistant de programmation open source dans l\'IDE, compatible avec les modèles locaux via Ollama',
          },
          {
            'Application': '[Cline](/fr/power-local-llm/cline-review)',
            'Plateformes': 'VS Code',
            'Prix / licence': 'Gratuit / Apache 2.0',
            'Différence clé': 'Agent de programmation autonome dans VS Code, capable de modifier des fichiers et d\'exécuter des commandes',
          },
          {
            'Application': '[Aider](/fr/power-local-llm/aider-review)',
            'Plateformes': 'Terminal',
            'Prix / licence': 'Gratuit / Apache 2.0',
            'Différence clé': 'Outil de pair programming en terminal qui modifie un dépôt git avec des modèles locaux ou cloud',
          },
        ],
        note: 'Aucun de ces outils n\'est un éditeur de bases de données ; ce sont les outils testés les plus proches dans la même catégorie du répertoire, tous conçus pour l\'aide de l\'IA sur le code. Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels sur la page de chaque application.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'LibreDB Studio envoie-t-il mes données dans le cloud ?',
            a: 'Pas par défaut : sans modèle configuré, l\'IA est désactivée. Si vous choisissez Gemini ou OpenAI, la requête et le contexte du schéma partent chez ce fournisseur.',
          },
          {
            q: 'Quelles bases l\'agent IA peut-il lire ?',
            a: 'PostgreSQL, SQLite, DuckDB, SQL Server, MySQL, Kubernetes et MongoDB ; sur les autres moteurs, le mode Plan rédige quand même du SQL que vous exécutez vous-même.',
          },
          {
            q: 'LibreDB Studio est-il gratuit pour un usage commercial ?',
            a: 'Studio est sous licence MIT, qui autorise l\'usage commercial ; la couche de gouvernance Platform, distincte, est payante au-delà de 4 places.',
          },
          {
            q: 'Puis-je l\'exécuter sans Docker ?',
            a: 'Oui : avec `npx @libredb/studio` et Node.js 24+, avec Homebrew, winget ou l\'application de bureau Linux, d\'après le README.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'LibreDB Studio est un éditeur SQL open source très large, doté d\'une couche d\'IA facultative qu\'on peut diriger vers un modèle local. Les sources le décrivent clairement, y compris ses propres limites de sécurité, et la licence est une simple MIT. Il convient aux équipes qui veulent un éditeur auto-hébergé pour de nombreux moteurs ; le chemin d\'IA locale, la télémétrie et la qualité au quotidien n\'ont pas été testés, et l\'agent ne couvre que sept moteurs. Si vous cherchez une aide d\'IA pour le code plutôt que pour les bases de données, comparez [Tabby](/fr/power-local-llm/tabby-review) ou [Continue.dev](/fr/power-local-llm/continue-dev-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site web de LibreDB Studio](https://libredb.org) — description du produit, moteurs, licence et canaux de distribution, consulté le 23 octobre 2026.',
          '[Modèle de sécurité de LibreDB](https://libredb.org/security/) — authentification, stockage des identifiants et flux de données de l\'IA, consulté le 23 octobre 2026.',
          '[Politique de confidentialité de LibreDB](https://libredb.org/privacy-policy/) — données du site, opérateur et conservation ; dernière mise à jour le 19 octobre 2026.',
          '[Page LibreDB Platform](https://libredb.org/platform/) — la couche de gouvernance payante et son niveau gratuit, consultée le 23 octobre 2026.',
          '[libredb/libredb-studio sur GitHub](https://github.com/libredb/libredb-studio) — README, version 1.0.0 du paquet et fichiers de la version, consultés le 23 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Tabby](/fr/power-local-llm/tabby-review) — un assistant auto-hébergé de complétion de code.',
          '[Test de Continue.dev](/fr/power-local-llm/continue-dev-review) — un assistant d\'IDE open source compatible avec Ollama.',
          '[Test de Cline](/fr/power-local-llm/cline-review) — un agent de programmation autonome pour VS Code.',
          '[Test d\'Aider](/fr/power-local-llm/aider-review) — pair programming en terminal avec des modèles locaux ou cloud.',
          '[LLM locaux pour le développement de code : comparatif](/fr/power-local-llm/local-llm-code-development-compared) — le comparatif de la catégorie.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Coding Assistants',
    heroImage: '/images/libredb-studio-review-hero-ja.webp',
    title: 'LibreDB Studioレビュー：ローカルAIエージェントも使えるオープンソースSQLエディタ',
    seoTitle: 'LibreDB Studioレビュー：ローカルAIエージェント対応SQLエディタ',
    intro:
      'LibreDB Studioは、[libredb.org](https://libredb.org)で提供されるMITライセンスのデータベースエディタです。ブラウザで動作し、Docker、npx、パッケージマネージャーでデータの隣にデプロイします。41種類のデータベースエンジンを1つの画面で扱え、クラウドAPIの代わりにローカルのOllamaモデルを使える任意のAI機能が加わります。このレビューは、2026年10月23日に確認した公式サイト、セキュリティページ、公開GitHubリポジトリの内容に基づいており、PromptQuorumはソフトウェアを実際には試していません。',
    metaDescription:
      'LibreDB Studioレビュー：41種類のデータベースエンジンに対応する無料のMITライセンス製ブラウザ型SQLエディタ。ローカルOllamaで動かせる任意のAIエージェントも解説します。',
    twitterDescription:
      'LibreDB Studioレビュー：ブラウザで41種類のデータベースエンジンを扱えるオープンソースのSQLエディタ。ローカルOllamaモデルも使える任意のAIエージェント付き。情報源が確認していることと未検証の点を整理します。',
    audience:
      '多数のデータベースに対応するセルフホスト型SQLエディタを探していて、AI機能をローカルモデルのまま使えるかを検討している開発者とデータチーム。',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LibreDB Studio レビュー',
    targetKeywords: [
      'libredb studio レビュー',
      'libredb studio',
      'オープンソース sql エディタ',
      'セルフホスト データベース エディタ',
      'データベース ide ollama',
      'ai sql アシスタント ローカル llm',
      'libredb studio vs dbeaver',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**LibreDB Studioは無料のセルフホスト型SQLエディタで、公式の説明によれば、1つのブラウザタブから41種類のデータベースエンジンに接続し、AIへの質問をローカルのOllamaモデルに送れます。** AIエージェントが読み取れるのはそのうち7エンジンのみで、モデルを設定するまでAIはオフです。',
    quickAnswerTop: {
      ja: {
        question: 'LibreDB StudioのAI機能はローカルLLMで使えますか？',
        answer:
          'READMEとセキュリティページによれば使えます。Ollama、LM Studio、またはOpenAI互換のエンドポイントを指定でき、モデルを設定しなければAIはオフです。PromptQuorumはこれを検証していません。',
        bullets: [
          'Studio自体はMITライセンスで無料です。アクセス管理用の別製品Platformは、5席目から有料です。',
          'セットアップはコマンド1つ（Dockerまたはnpx）で、ダブルクリックで入れられるデスクトップ版はLinuxだけです。',
          'GeminiやOpenAIなどのホスト型モデルには、クエリとスキーマが渡ります。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'LibreDB Studioとは', anchor: 'what-is-libredb' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '料金とライセンス', anchor: 'plans-and-pricing' },
      { label: '機能とAI', anchor: 'key-features' },
      { label: 'プライバシーとデータの流れ', anchor: 'privacy' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '検証できなかった点', anchor: 'who-should-not-use' },
      { label: '競合と代替', anchor: 'vs-alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
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
            text: 'LibreDB Studioは、データベースの隣でブラウザ上で動くオープンソースのSQLエディタで、ローカルモデルも使えるAIアシスタントとエージェントを備えています。',
          },
          {
            type: 'plain-terms',
            text: 'コマンド1つで起動し、ブラウザで開いてデータベースへの接続を追加し、クエリを書きます。Ollamaなどで動くモデルも接続すれば、実行計画の説明やSQLの下書きもできます。',
          },
        ],
        items: [
          '対応範囲：PostgreSQL、MySQL、SQLiteからMongoDB、Redis、ClickHouse、Kubernetesまで、41エンジンを1つの画面で扱えます。',
          'エージェント：読み取り専用のデータベースエージェントは、PostgreSQL、SQLite、DuckDB、SQL Server、MySQL、Kubernetes、MongoDBで動きます。',
          'バージョン：1.0.0は2026年10月17日に公開され、プロジェクトの最新の更新は2026年10月23日です。',
          '運営者：サイトのプライバシーポリシーは、トルコで登録されたSekoya Grup Bilisim ve Teknoloji Ltd. Sti.を挙げています。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、2026年10月23日に確認した公式サイト、セキュリティページ、公開GitHubリポジトリに基づいています。実際の利用、ベンチマーク、セキュリティテストは行っていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-libredb',
        title: 'LibreDB Studioとは',
        content: [
          '**公式サイトによれば、LibreDB Studioは「データの隣にデプロイされるデータベースエディタ」です。ノートPCごとにクライアントを入れる代わりに、コンテナ、Helmチャート、npmパッケージとして動かすWebアプリケーションです。** ブラウザ（スマートフォンやタブレットも可）で開き、VS Codeと同じエディタ基盤であるMonacoベースのSQLエディタで、テーブル、クエリ、スキーマを扱います。',
          '本質的にはデータベースツールであり、AI製品ではありません。AI機能は任意の層で、実行計画を説明しテーブルをプロファイルするモデル対応アシスタントと、読み取り専用のクエリを下書きして根拠付きのレポートを書くエージェントがあります。Gemini、OpenAI、Ollama、またはOpenAI互換のエンドポイントを使えます。このレビューが扱うのは無料でMITライセンスのLibreDB Studioのみで、別製品のLibreDB Platformは対象外です。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**多くのプラットフォームではターミナルのコマンド1つで足り、ダブルクリックで使えるデスクトップアプリはLinuxだけです。** READMEによれば、初回起動時に管理者パスワードがログに出力されます。localhostやHTTPS以外でブラウザからアクセスする場合は`AUTH_COOKIE_SECURE=false`が必要で、設定しないとログインが何も表示されないまま失敗します。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': '全OS（Docker）',
            '入手先': '`docker run -p 3000:3000 ghcr.io/libredb/libredb-studio:latest`を実行し、http://localhost:3000を開きます',
          },
          {
            'プラットフォーム': '全OS（Node.js 24以上）',
            '入手先': '`npx @libredb/studio`',
          },
          {
            'プラットフォーム': 'macOS',
            '入手先': '`brew trust libredb/tap && brew install libredb/tap/libredb-studio`',
          },
          {
            'プラットフォーム': 'Windows',
            '入手先': '`winget install LibreDB.Studio`（Node.jsランタイム同梱のポータブルzip）',
          },
          {
            'プラットフォーム': 'Linuxデスクトップ',
            '入手先': '[GitHub Releases](https://github.com/libredb/libredb-studio/releases)（AppImageまたは.debのデスクトップアプリ、x64とarm64）',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '[GitHubのlibredb/libredb-studio](https://github.com/libredb/libredb-studio)（MIT）',
          },
          {
            'プラットフォーム': '公式サイト',
            '入手先': '[libredb.org](https://libredb.org)（ドキュメント、セキュリティモデル、ライブデモ）',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[libredb.org/privacy-policy](https://libredb.org/privacy-policy/)（最終更新2026年10月19日）',
          },
        ],
        note: '確認したバージョン：1.0.0（2026年10月17日公開）。リポジトリの最新の更新は2026年10月23日です。Linuxのデスクトップアプリ以外はターミナルが必要で、最初の2行にはDockerまたはNode.js 24以上が必要です。READMEにはHelm、Snap、deb、rpmのパッケージやワンクリックデプロイも載っていますが、試していません。',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: '料金とライセンス',
        content: [
          '**LibreDB Studioは無料です。サイトには「MIT license. All of it, nothing held back」「no paid edition, no hosted offering, and no capability held back」とあります。** シングルサインオン、ロールベースのアクセス制御、監査ログ、AI機能はすべてMIT版に含まれます。',
          '別製品のLibreDB Platformは、データベースへのアクセスを統制するセルフホスト型の層で、「paid beyond 4 seats」とされ、無料枠は管理者1人とユーザー3人を12か月間です。ページに価格はなく、必要な席数に応じて見積もりを送るとあります。',
        ],
        note: 'クラウドAIプロバイダーの料金は別です。GeminiやOpenAIなどのAPIは提供元が課金し、ローカルのOllamaモデルで必要なのは自分のハードウェアだけです。',
      },
      features: {
        id: 'key-features',
        title: '機能とAI',
        content: [
          '**中心になるのはエディタで、AIはその上に載る層です。モデルを設定するまでオフのままです。** 以下はREADMEと公式サイトの内容です。',
        ],
        items: [
          '**エディタ。** スキーマを理解するオートコンプリート、マルチタブの作業領域、コマンドパレット、視覚的なEXPLAIN、インタラクティブなER図、移行SQLを生成するスキーマ差分。',
          '**エンジン。** PostgreSQL、MySQL、Oracle、SQL Server、SQLite、DuckDB、MongoDB、Redis、ClickHouse、Snowflake、BigQuery、Kafka、Kubernetesなど41エンジンを1つの画面で扱えます。うち3つは設計上、読み取り専用です。',
          '**データベースエージェント。** READMEによれば、目的を伝えるとエージェントがSQLを下書きし、結果を読み、それを引用したレポートを書きます。読み取り専用で、1回の実行は18〜45文に制限され、推奨した内容を自分で実行することはありません。Agentモードにはツール呼び出しができるモデルが必要で、自分で実行する文を下書きするだけのPlanモードはどのモデルでも使えます。',
          '**その他のAI補助。** 破壊的な文の実行前リスク分析、平易な言葉によるEXPLAINの要約、AIが書くデータプロファイル。',
          '**ガバナンス。** OIDCシングルサインオン、ロールベースのアクセス制御、監査ログ、MCPサーバー。AIエージェントとMCPの操作は監査記録に残ります。',
        ],
        note: 'READMEによれば、組み込み用のnpmパッケージにはエージェントの画面は含まれません。エージェントはスタンドアロンのアプリケーションにのみあります。',
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**`LLM_*`の設定が何もなければAIのパネルは表示されず、READMEによればネットワークの外には何も出ません。OllamaまたはカスタムエンドポイントはAPIキーなしでも設定済みとみなされ、その場合はAIが有効になります。** セキュリティページには、ホスト型モデルでは「the cloud LLM sees the query」とあり、スキーマもコンテキストとして送られます。データプロファイラーは各列の最小値と最大値も送り、これは実際のデータの値です。',
          'セキュリティページは、機微なデータにはローカルのOllamaまたはLM StudioでAIを動かすことを勧めています。自らの限界も挙げています。データベースのパスワードやSSH鍵を含む接続情報はブラウザのlocalStorageに暗号化されずに保存され、envモードのローカルログインではパスワードがハッシュ化されずに照合されます。機微な列のマスキングは画面表示上の機能で、セキュリティ上の境界ではありません。サイトのプライバシーポリシーが対象とするのはWebサイトのみで、同意後にGoogle AnalyticsとMeta Pixelを読み込みます。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらはプロジェクト自身の説明です。PromptQuorumはコードの監査、ネットワーク通信の検査、ローカルモデル経路の検証を行っていません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**多種類のデータベースを運用し、シングルサインオンと監査ログを備えたセルフホスト型エディタ1つにまとめたいチーム。**',
          '**SQLでAIの助けがほしいが、モデルは自分のハードウェア上に置きたい開発者。**',
          '**マシンごとにデスクトップクライアントを入れるより、ブラウザのツールを好む人。**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '検証できなかった点',
        items: [
          '**ローカルモデルの経路。** READMEはOllamaが動くとし、機微なデータに勧めています。どのモデルが実用的なSQLを出すか、ツール呼び出しを使うAgentモードがその上でどれだけ動くかは検証していません。',
          '**製品のテレメトリ。** プライバシーポリシーはWebサイトのみが対象で、アプリケーション自体が利用データを送るかどうかは、読んだ情報源には書かれていません。',
          '**エンジンごとの深さ。** Agentモードは7エンジンが対象で、READMEにはエンジンごとの制限が書かれています。それ以外のエンジンは試していません。',
          '**セキュリティの記述。** セキュリティページのチェックサム、スキャン、ロール制御はプロジェクトの主張であり、監査していません。',
          '**実際の品質。** 速度、エディタの品質、大きな結果の扱い、モバイル表示は試していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替',
        columns: ['アプリ', 'プラットフォーム', '価格 / ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[Tabby](/ja/power-local-llm/tabby-review)',
            'プラットフォーム': 'セルフホストサーバー、IDEプラグイン',
            '価格 / ライセンス': '無料 / Apache 2.0',
            '主な違い': 'エディタ向けのセルフホスト型コード補完アシスタント。データベースクライアントではありません',
          },
          {
            'アプリ': '[Continue.dev](/ja/power-local-llm/continue-dev-review)',
            'プラットフォーム': 'VS Code、JetBrains',
            '価格 / ライセンス': '無料 / Apache 2.0',
            '主な違い': 'IDE内で動くオープンソースのコーディングアシスタントで、Ollama経由でローカルモデルを使えます',
          },
          {
            'アプリ': '[Cline](/ja/power-local-llm/cline-review)',
            'プラットフォーム': 'VS Code',
            '価格 / ライセンス': '無料 / Apache 2.0',
            '主な違い': 'VS Code内で動く自律型コーディングエージェントで、ファイルの編集やコマンドの実行ができます',
          },
          {
            'アプリ': '[Aider](/ja/power-local-llm/aider-review)',
            'プラットフォーム': 'ターミナル',
            '価格 / ライセンス': '無料 / Apache 2.0',
            '主な違い': 'ローカルまたはクラウドのモデルでgitリポジトリを編集する、ターミナル用のペアプログラミングツール',
          },
        ],
        note: 'いずれもデータベースエディタではありません。同じディレクトリカテゴリでレビュー済みの最も近いツールで、どれもコードに対するAI支援を軸にしています。競合の詳細は頻繁に変わるため、価格、ライセンス、対応プラットフォームは各アプリのページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'LibreDB Studioはデータをクラウドに送りますか？',
            a: '既定では送りません。モデルを設定しなければAIはオフです。GeminiやOpenAIを選ぶと、クエリとスキーマのコンテキストがそのプロバイダーに送られます。',
          },
          {
            q: 'AIエージェントはどのデータベースを読めますか？',
            a: 'PostgreSQL、SQLite、DuckDB、SQL Server、MySQL、Kubernetes、MongoDBです。それ以外のエンジンでも、Planモードは自分で実行するSQLの下書きを作れます。',
          },
          {
            q: 'LibreDB Studioは商用利用でも無料ですか？',
            a: 'StudioはMITライセンスで商用利用が認められています。別製品のガバナンス層Platformは、5席目から有料です。',
          },
          {
            q: 'Dockerなしで動かせますか？',
            a: 'はい。READMEによれば、Node.js 24以上での`npx @libredb/studio`、Homebrew、winget、Linuxのデスクトップアプリが使えます。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'LibreDB Studioは、幅広い対応範囲を持つオープンソースのSQLエディタで、AIは任意の層でありローカルモデルに向けられます。情報源は自らのセキュリティ上の限界も含めて明確に説明しており、ライセンスも単純なMITです。多くのエンジンを1つのセルフホスト型エディタにまとめたいチームに向いています。ローカルAIの経路、テレメトリ、日常的な品質は未検証で、エージェントが対象とするのは7エンジンのみです。データベースではなくコードへのAI支援がほしい場合は、[Tabby](/ja/power-local-llm/tabby-review)や[Continue.dev](/ja/power-local-llm/continue-dev-review)と比べてください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[LibreDB Studio公式サイト](https://libredb.org) — 製品説明、エンジン、ライセンス、配布チャネル。2026年10月23日に確認。',
          '[LibreDBのセキュリティモデル](https://libredb.org/security/) — 認証、認証情報の保存、AIのデータの流れ。2026年10月23日に確認。',
          '[LibreDBのプライバシーポリシー](https://libredb.org/privacy-policy/) — サイトのデータ、運営者、保持期間。最終更新2026年10月19日。',
          '[LibreDB Platformのページ](https://libredb.org/platform/) — 有料のガバナンス層と無料枠。2026年10月23日に確認。',
          '[GitHubのlibredb/libredb-studio](https://github.com/libredb/libredb-studio) — README、パッケージのバージョン1.0.0、リリースのファイル。2026年10月23日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Tabbyレビュー](/ja/power-local-llm/tabby-review) — セルフホスト型のコード補完アシスタント。',
          '[Continue.devレビュー](/ja/power-local-llm/continue-dev-review) — Ollamaと連携するオープンソースのIDEアシスタント。',
          '[Clineレビュー](/ja/power-local-llm/cline-review) — VS Code向けの自律型コーディングエージェント。',
          '[Aiderレビュー](/ja/power-local-llm/aider-review) — ローカルまたはクラウドのモデルによるターミナルでのペアプログラミング。',
          '[ローカルLLMによるコード開発の比較](/ja/power-local-llm/local-llm-code-development-compared) — カテゴリ比較。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Coding Assistants',
    heroImage: '/images/libredb-studio-review-hero-pt.webp',
    title: 'Análise do LibreDB Studio: editor SQL de código aberto com agente de IA local opcional',
    seoTitle: 'Análise do LibreDB Studio: editor SQL com agente de IA local',
    intro:
      'O LibreDB Studio é um editor de bancos de dados com licença MIT em [libredb.org](https://libredb.org) que roda no navegador e é implantado ao lado dos seus dados com Docker, npx ou um gerenciador de pacotes. Ele conecta 41 mecanismos de banco de dados por uma única interface e acrescenta uma camada de IA opcional que pode usar um modelo Ollama local em vez de uma API na nuvem. Esta análise reflete o site, a página de segurança e o repositório público no GitHub, consultados em 23 de outubro de 2026; a PromptQuorum não testou o software na prática.',
    metaDescription:
      'Análise do LibreDB Studio: editor SQL gratuito com licença MIT no navegador para 41 mecanismos de banco de dados, com agente de IA opcional que pode usar o Ollama local.',
    twitterDescription:
      'Análise do LibreDB Studio: editor SQL de código aberto para 41 mecanismos de banco de dados no navegador, com agente de IA opcional que pode usar um modelo Ollama local. O que as fontes confirmam e o que ficou sem teste.',
    audience:
      'Desenvolvedores e equipes de dados que querem um único editor SQL auto-hospedado para muitos bancos de dados e avaliam se as funções de IA podem ficar em modelos locais.',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise do LibreDB Studio',
    targetKeywords: [
      'análise libredb studio',
      'libredb studio',
      'editor sql de código aberto',
      'editor de banco de dados auto-hospedado',
      'ide de banco de dados ollama',
      'assistente sql com ia llm local',
      'libredb studio vs dbeaver',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**O LibreDB Studio é um editor SQL gratuito e auto-hospedado que, pela própria descrição, conecta-se a 41 mecanismos de banco de dados a partir de uma aba do navegador e pode enviar suas perguntas de IA a um modelo Ollama local.** O agente de IA lê apenas sete desses mecanismos, e a IA fica desligada até você configurar um modelo.',
    quickAnswerTop: {
      pt: {
        question: 'O LibreDB Studio pode usar um LLM local nas funções de IA?',
        answer:
          'Sim, segundo o README e a página de segurança: você pode apontá-lo para o Ollama, o LM Studio ou qualquer endpoint compatível com a OpenAI, e sem modelo configurado a IA fica desativada. A PromptQuorum não testou isso.',
        bullets: [
          'O Studio em si tem licença MIT e é gratuito; uma camada Platform separada, de governança de acessos, é paga a partir de 5 vagas.',
          'A instalação é um comando (Docker ou npx); só o Linux tem um app de desktop de clique duplo.',
          'Modelos hospedados, como Gemini ou OpenAI, veem sua consulta e o esquema.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o LibreDB Studio?', anchor: 'what-is-libredb' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'Preço e licença', anchor: 'plans-and-pricing' },
      { label: 'Recursos e IA', anchor: 'key-features' },
      { label: 'Privacidade e fluxo de dados', anchor: 'privacy' },
      { label: 'Para quem é', anchor: 'who-should-use' },
      { label: 'O que não conseguimos verificar', anchor: 'who-should-not-use' },
      { label: 'Concorrentes e alternativas', anchor: 'vs-alternatives' },
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
            text: 'O LibreDB Studio é um editor SQL de código aberto que roda no navegador ao lado dos seus bancos de dados e oferece um assistente e um agente de IA que podem usar um modelo local.',
          },
          {
            type: 'plain-terms',
            text: 'Você o inicia com um comando, abre no navegador, adiciona conexões com seus bancos de dados e escreve consultas; se também conectar um modelo, por exemplo servido pelo Ollama, ele pode explicar planos de execução e rascunhar SQL.',
          },
        ],
        items: [
          'Alcance: uma interface para 41 mecanismos, do PostgreSQL, MySQL e SQLite ao MongoDB, Redis, ClickHouse e Kubernetes.',
          'Agente: o agente de banco de dados somente leitura funciona em PostgreSQL, SQLite, DuckDB, SQL Server, MySQL, Kubernetes e MongoDB.',
          'Versão: a 1.0.0 saiu em 17 de outubro de 2026, e o projeto publicou a última atualização em 23 de outubro de 2026.',
          'Operadora: a política de privacidade do site cita a Sekoya Grup Bilisim ve Teknoloji Ltd. Sti., registrada na Turquia.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site oficial, na página de segurança e no repositório público no GitHub, consultados em 23 de outubro de 2026. Não houve uso prático, benchmark nem teste de segurança.',
          },
        ],
      },
      overview: {
        id: 'what-is-libredb',
        title: 'O que é o LibreDB Studio?',
        content: [
          '**Segundo o site, o LibreDB Studio é «o editor de banco de dados que é implantado ao lado dos seus dados»: um aplicativo web que você executa como contêiner, chart do Helm ou pacote npm, em vez de instalar um cliente em cada notebook.** Você o abre no navegador, inclusive no celular ou no tablet, e trabalha com tabelas, consultas e esquemas em um editor SQL baseado no Monaco, o mesmo núcleo de editor do VS Code.',
          'É, antes de tudo, uma ferramenta de banco de dados, não um produto de IA. As funções de IA são uma camada opcional: um assistente com apoio de modelo que explica planos de execução e perfila tabelas, e um agente que rascunha consultas somente leitura e escreve um relatório com citações. Elas aceitam Gemini, OpenAI, Ollama ou qualquer endpoint compatível com a OpenAI. Esta análise cobre apenas o LibreDB Studio, gratuito e com licença MIT, não a LibreDB Platform, que é separada.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**Na maioria das plataformas basta um comando de terminal, e só o Linux oferece um app de desktop de clique duplo.** Na primeira inicialização a senha de administrador é impressa no log, e um navegador que acesse por algo diferente de localhost ou HTTPS precisa de `AUTH_COOKIE_SECURE=false`, senão o login falha em silêncio, segundo o README.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            'Plataforma': 'Qualquer sistema (Docker)',
            'Onde obter': '`docker run -p 3000:3000 ghcr.io/libredb/libredb-studio:latest` e abra http://localhost:3000',
          },
          {
            'Plataforma': 'Qualquer sistema (Node.js 24+)',
            'Onde obter': '`npx @libredb/studio`',
          },
          {
            'Plataforma': 'macOS',
            'Onde obter': '`brew trust libredb/tap && brew install libredb/tap/libredb-studio`',
          },
          {
            'Plataforma': 'Windows',
            'Onde obter': '`winget install LibreDB.Studio` (zip portátil com um ambiente Node.js incluído)',
          },
          {
            'Plataforma': 'Desktop Linux',
            'Onde obter': '[GitHub Releases](https://github.com/libredb/libredb-studio/releases) (app de desktop AppImage ou .deb, x64 e arm64)',
          },
          {
            'Plataforma': 'Código-fonte',
            'Onde obter': '[libredb/libredb-studio no GitHub](https://github.com/libredb/libredb-studio) (MIT)',
          },
          {
            'Plataforma': 'Site',
            'Onde obter': '[libredb.org](https://libredb.org) (documentação, modelo de segurança e demonstração ao vivo)',
          },
          {
            'Plataforma': 'Política de privacidade',
            'Onde obter': '[libredb.org/privacy-policy](https://libredb.org/privacy-policy/) (última atualização em 19 de outubro de 2026)',
          },
        ],
        note: 'Versão analisada: 1.0.0, publicada em 17 de outubro de 2026; o repositório publicou a última atualização em 23 de outubro de 2026. É preciso um terminal, exceto no app de desktop do Linux, e Docker ou Node.js 24+ devem estar disponíveis para as duas primeiras linhas. O README também lista pacotes Helm, Snap, deb e rpm e implantações com um clique, que não foram testados.',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'Preço e licença',
        content: [
          '**O LibreDB Studio é gratuito: o site afirma «MIT license. All of it, nothing held back» e «no paid edition, no hosted offering, and no capability held back».** Login único, controle de acesso por papéis, log de auditoria e funções de IA vêm todos na versão MIT.',
          'A LibreDB Platform, separada, uma camada auto-hospedada para governar o acesso aos bancos de dados, é «paid beyond 4 seats», com um nível gratuito de 1 administrador e 3 usuários por 12 meses. A página não informa preço e diz que um orçamento é enviado conforme o número de vagas.',
        ],
        note: 'Os provedores de IA na nuvem cobram à parte: Gemini, OpenAI e APIs semelhantes são cobrados pelo provedor, enquanto um modelo Ollama local custa apenas o seu próprio hardware.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos e IA',
        content: [
          '**O editor é o produto principal; a camada de IA fica por cima e permanece desligada até você configurar um modelo.** Os itens abaixo vêm do README e do site.',
        ],
        items: [
          '**Editor.** Autocompletar que conhece o esquema, área de trabalho com várias abas, paleta de comandos, planos EXPLAIN visuais, diagramas ER interativos e comparação de esquemas com SQL de migração gerado.',
          '**Mecanismos.** 41 mecanismos em uma única interface, entre eles PostgreSQL, MySQL, Oracle, SQL Server, SQLite, DuckDB, MongoDB, Redis, ClickHouse, Snowflake, BigQuery, Kafka e Kubernetes; três deles são somente leitura por concepção.',
          '**Agente de banco de dados.** Segundo o README, você declara um objetivo, o agente rascunha SQL, lê os resultados e escreve um relatório que os cita. É somente leitura, limitado a 18 a 45 instruções por execução e nunca executa o que recomenda. O modo Agent exige um modelo capaz de chamar ferramentas; o modo Plan, que apenas rascunha uma instrução para você executar, funciona com qualquer modelo.',
          '**Outros auxiliares de IA.** Análise de risco antes de executar instruções destrutivas, resumos de EXPLAIN em linguagem simples e perfis de dados escritos por IA.',
          '**Governança.** Login único OIDC, controle de acesso por papéis, log de auditoria e um servidor MCP; operações do agente de IA e do MCP aparecem na trilha de auditoria.',
        ],
        note: 'O README diz que o pacote npm incorporável não traz a superfície do agente; o agente existe apenas na aplicação independente.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**Sem nenhuma configuração `LLM_*`, o painel de IA não aparece e, segundo o README, nada sai da sua rede; com Ollama ou um endpoint próprio configurado, a IA fica ativa mesmo sem chave de API.** A página de segurança diz que, com um modelo hospedado, «the cloud LLM sees the query», e o esquema é enviado como contexto. O perfilador de dados também envia o mínimo e o máximo de cada coluna, que são valores reais dos seus dados.',
          'A página de segurança recomenda executar a IA com um Ollama ou LM Studio local para dados sensíveis. Ela também lista os próprios limites: os dados de conexão, incluindo senhas de bancos e chaves SSH, ficam sem criptografia no localStorage do navegador, e no login local em modo env as senhas são comparadas sem hash. O mascaramento de colunas sensíveis é um recurso de exibição, não uma barreira de segurança. A política de privacidade do site cobre apenas o site, que carrega Google Analytics e Meta Pixel após o consentimento.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas são declarações do próprio projeto. A PromptQuorum não auditou o código, não inspecionou o tráfego de rede nem testou o caminho com modelos locais.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é',
        items: [
          '**Equipes que lidam com muitos tipos de banco de dados e querem um editor auto-hospedado com login único e log de auditoria.**',
          '**Desenvolvedores que querem ajuda de IA com SQL, mas precisam manter o modelo no próprio hardware.**',
          '**Quem prefere uma ferramenta no navegador a instalar um cliente de desktop em cada máquina.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**O caminho com modelos locais.** O README diz que o Ollama funciona e o recomenda para dados sensíveis; quais modelos geram SQL utilizável e como o modo Agent com chamada de ferramentas se comporta neles não foi testado.',
          '**Telemetria do produto.** A política de privacidade cobre apenas o site; as fontes lidas não informam se a própria aplicação envia dados de uso.',
          '**Profundidade por mecanismo.** O modo Agent cobre sete mecanismos e o README aponta limites por mecanismo; os demais não foram exercitados.',
          '**Declarações de segurança.** As somas de verificação, as varreduras e os controles de papéis da página de segurança são afirmações do projeto e não foram auditados.',
          '**Qualidade no uso real.** Velocidade, qualidade do editor, comportamento com resultados grandes e as telas para celular não foram testados.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            'App': '[Tabby](/pt/power-local-llm/tabby-review)',
            'Plataformas': 'Servidor auto-hospedado, plugins de IDE',
            'Preço / licença': 'Grátis / Apache 2.0',
            'Diferença principal': 'Assistente auto-hospedado de autocompletar código para editores; não é um cliente de banco de dados',
          },
          {
            'App': '[Continue.dev](/pt/power-local-llm/continue-dev-review)',
            'Plataformas': 'VS Code, JetBrains',
            'Preço / licença': 'Grátis / Apache 2.0',
            'Diferença principal': 'Assistente de programação de código aberto na IDE que funciona com modelos locais via Ollama',
          },
          {
            'App': '[Cline](/pt/power-local-llm/cline-review)',
            'Plataformas': 'VS Code',
            'Preço / licença': 'Grátis / Apache 2.0',
            'Diferença principal': 'Agente de programação autônomo dentro do VS Code que pode editar arquivos e executar comandos',
          },
          {
            'App': '[Aider](/pt/power-local-llm/aider-review)',
            'Plataformas': 'Terminal',
            'Preço / licença': 'Grátis / Apache 2.0',
            'Diferença principal': 'Ferramenta de pair programming no terminal que edita um repositório git com modelos locais ou na nuvem',
          },
        ],
        note: 'Nenhum deles é um editor de banco de dados; são as ferramentas analisadas mais próximas, na mesma categoria do diretório, todas voltadas à ajuda de IA com código. Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O LibreDB Studio envia meus dados para a nuvem?',
            a: 'Não por padrão: sem modelo configurado, a IA fica desligada. Se você escolher Gemini ou OpenAI, a consulta e o contexto do esquema vão para esse provedor.',
          },
          {
            q: 'Quais bancos de dados o agente de IA consegue ler?',
            a: 'PostgreSQL, SQLite, DuckDB, SQL Server, MySQL, Kubernetes e MongoDB; em outros mecanismos, o modo Plan ainda rascunha SQL para você executar.',
          },
          {
            q: 'O LibreDB Studio é gratuito para uso comercial?',
            a: 'O Studio tem licença MIT, que permite uso comercial; a camada de governança Platform, separada, é paga a partir de 5 vagas.',
          },
          {
            q: 'Posso rodá-lo sem Docker?',
            a: 'Sim: com `npx @libredb/studio` e Node.js 24+, com Homebrew, winget ou o app de desktop do Linux, segundo o README.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O LibreDB Studio é um editor SQL de código aberto amplo, com uma camada de IA opcional que pode ser apontada para um modelo local. As fontes o descrevem com clareza, inclusive seus próprios limites de segurança, e a licença é uma MIT simples. Serve a equipes que querem um editor auto-hospedado para muitos mecanismos; o caminho de IA local, a telemetria e a qualidade no dia a dia não foram testados, e o agente cobre apenas sete mecanismos. Se você quer ajuda de IA para código e não para bancos de dados, compare o [Tabby](/pt/power-local-llm/tabby-review) ou o [Continue.dev](/pt/power-local-llm/continue-dev-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do LibreDB Studio](https://libredb.org) — descrição do produto, mecanismos, licença e canais de distribuição, consultado em 23 de outubro de 2026.',
          '[Modelo de segurança do LibreDB](https://libredb.org/security/) — autenticação, armazenamento de credenciais e fluxo de dados da IA, consultado em 23 de outubro de 2026.',
          '[Política de privacidade do LibreDB](https://libredb.org/privacy-policy/) — dados do site, operadora e retenção; última atualização em 19 de outubro de 2026.',
          '[Página da LibreDB Platform](https://libredb.org/platform/) — a camada de governança paga e seu nível gratuito, consultada em 23 de outubro de 2026.',
          '[libredb/libredb-studio no GitHub](https://github.com/libredb/libredb-studio) — README, versão 1.0.0 do pacote e arquivos da versão, consultados em 23 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Tabby](/pt/power-local-llm/tabby-review) — um assistente auto-hospedado de autocompletar código.',
          '[Análise do Continue.dev](/pt/power-local-llm/continue-dev-review) — um assistente de IDE de código aberto que funciona com o Ollama.',
          '[Análise do Cline](/pt/power-local-llm/cline-review) — um agente de programação autônomo para o VS Code.',
          '[Análise do Aider](/pt/power-local-llm/aider-review) — pair programming no terminal com modelos locais ou na nuvem.',
          '[LLMs locais para desenvolvimento de código: comparativo](/pt/power-local-llm/local-llm-code-development-compared) — o comparativo da categoria.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Coding Assistants',
    heroImage: '/images/libredb-studio-review-hero-ar.webp',
    title: 'مراجعة LibreDB Studio: محرّر SQL مفتوح المصدر مع وكيل ذكاء اصطناعي محلي اختياري',
    seoTitle: 'مراجعة LibreDB Studio: محرّر SQL مع وكيل ذكاء اصطناعي محلي',
    intro:
      'LibreDB Studio محرّر قواعد بيانات بترخيص MIT على [libredb.org](https://libredb.org) يعمل في المتصفح ويُنشر بجوار بياناتك عبر Docker أو npx أو مدير حزم. يربط 41 محرك قواعد بيانات بواجهة واحدة ويضيف طبقة ذكاء اصطناعي اختيارية يمكنها استخدام نموذج Ollama محلي بدلاً من واجهة API سحابية. تعكس هذه المراجعة الموقع وصفحة الأمان ومستودع GitHub العام، كما جرى فحصها في 23 أكتوبر 2026؛ ولم تختبر PromptQuorum البرنامج عمليًا.',
    metaDescription:
      'مراجعة LibreDB Studio: محرّر SQL مجاني بترخيص MIT في المتصفح لـ 41 محرك قواعد بيانات، مع وكيل ذكاء اصطناعي اختياري يعمل على Ollama محلي. التثبيت والحدود.',
    twitterDescription:
      'مراجعة LibreDB Studio: محرّر SQL مفتوح المصدر في المتصفح لـ 41 محرك قواعد بيانات، مع وكيل ذكاء اصطناعي اختياري يمكنه استخدام نموذج Ollama محلي. ما تؤكده المصادر وما بقي دون اختبار.',
    audience:
      'المطوّرون وفرق البيانات الذين يريدون محرّر SQL واحدًا مستضافًا ذاتيًا لقواعد بيانات كثيرة، ويتساءلون عمّا إذا كان بوسع ميزات الذكاء الاصطناعي فيه أن تبقى على نماذج محلية.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة LibreDB Studio',
    targetKeywords: [
      'مراجعة libredb studio',
      'libredb studio',
      'محرر sql مفتوح المصدر',
      'محرر قواعد بيانات مستضاف ذاتيا',
      'ide قواعد بيانات ollama',
      'مساعد sql بالذكاء الاصطناعي نموذج محلي',
      'libredb studio vs dbeaver',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**LibreDB Studio محرّر SQL مجاني ومستضاف ذاتيًا يتصل، بحسب وصفه الخاص، بـ 41 محرك قواعد بيانات من علامة تبويب واحدة في المتصفح، ويمكنه إرسال أسئلة الذكاء الاصطناعي إلى نموذج Ollama محلي.** ولا يقرأ وكيله الذكي سوى سبعة من هذه المحركات، ويبقى الذكاء الاصطناعي معطّلًا حتى تضبط نموذجًا.',
    quickAnswerTop: {
      ar: {
        question: 'هل يستطيع LibreDB Studio استخدام نموذج لغوي محلي لميزات الذكاء الاصطناعي؟',
        answer:
          'نعم، بحسب ملف README وصفحة الأمان: يمكنك توجيهه إلى Ollama أو LM Studio أو أي نقطة نهاية متوافقة مع OpenAI، وبلا نموذج مضبوط يبقى الذكاء الاصطناعي معطّلًا. لم تختبر PromptQuorum ذلك.',
        bullets: [
          'Studio نفسه بترخيص MIT ومجاني؛ أما طبقة Platform المنفصلة لحوكمة الوصول فمدفوعة بعد 4 مقاعد.',
          'التثبيت بأمر واحد (Docker أو npx)؛ ولا يتوافر تطبيق سطح مكتب بنقرة مزدوجة إلا على Linux.',
          'النماذج المستضافة مثل Gemini أو OpenAI ترى استعلامك والمخطط.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو LibreDB Studio؟', anchor: 'what-is-libredb' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'السعر والترخيص', anchor: 'plans-and-pricing' },
      { label: 'الميزات والذكاء الاصطناعي', anchor: 'key-features' },
      { label: 'الخصوصية وتدفق البيانات', anchor: 'privacy' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'ما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
      { label: 'المنافسون والبدائل', anchor: 'vs-alternatives' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم', anchor: 'verdict' },
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
            text: 'LibreDB Studio محرّر SQL مفتوح المصدر يعمل في المتصفح بجوار قواعد بياناتك ويقدّم مساعدًا ووكيلًا بالذكاء الاصطناعي يمكنهما استخدام نموذج محلي.',
          },
          {
            type: 'plain-terms',
            text: 'تشغّله بأمر واحد، وتفتحه في المتصفح، وتضيف اتصالات بقواعد بياناتك، وتكتب الاستعلامات؛ وإذا ربطت نموذجًا أيضًا، مثل نموذج يخدمه Ollama، فيمكنه شرح خطط التنفيذ وصياغة SQL.',
          },
        ],
        items: [
          'النطاق: واجهة واحدة لـ 41 محركًا، من PostgreSQL وMySQL وSQLite إلى MongoDB وRedis وClickHouse وKubernetes.',
          'الوكيل: يعمل وكيل قواعد البيانات للقراءة فقط على PostgreSQL وSQLite وDuckDB وSQL Server وMySQL وKubernetes وMongoDB.',
          'الإصدار: صدر 1.0.0 في 17 أكتوبر 2026، ونشر المشروع آخر تحديث في 23 أكتوبر 2026.',
          'الجهة المشغّلة: تذكر سياسة خصوصية الموقع شركة Sekoya Grup Bilisim ve Teknoloji Ltd. Sti. المسجّلة في تركيا.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى الموقع الرسمي وصفحة الأمان ومستودع GitHub العام، كما جرى فحصها في 23 أكتوبر 2026. ولم يتضمن العمل استخدامًا عمليًا أو اختبارات أداء أو اختبارات أمنية.',
          },
        ],
      },
      overview: {
        id: 'what-is-libredb',
        title: 'ما هو LibreDB Studio؟',
        content: [
          '**بحسب موقعه، LibreDB Studio هو «محرّر قواعد البيانات الذي يُنشر بجوار بياناتك»: تطبيق ويب تشغّله على شكل حاوية أو مخطط Helm أو حزمة npm بدلًا من تثبيت عميل على كل حاسوب محمول.** تفتحه في المتصفح، بما في ذلك على الهاتف أو اللوح، وتعمل مع الجداول والاستعلامات والمخططات في محرّر SQL مبني على Monaco، وهو نواة المحرّر نفسها في VS Code.',
          'هو في الأساس أداة قواعد بيانات لا منتج ذكاء اصطناعي. وميزات الذكاء الاصطناعي طبقة اختيارية: مساعد مدعوم بنموذج يشرح خطط التنفيذ ويحلّل الجداول، ووكيل يصوغ استعلامات للقراءة فقط ويكتب تقريرًا مدعومًا بالاستشهادات. وهي تقبل Gemini وOpenAI وOllama أو أي نقطة نهاية متوافقة مع OpenAI. تغطي هذه المراجعة LibreDB Studio المجاني بترخيص MIT فقط، لا LibreDB Platform المنفصل.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يكفي أمر طرفية واحد على معظم المنصات، ولا يتوافر تطبيق سطح مكتب بنقرة مزدوجة إلا على Linux.** عند أول تشغيل تُطبع كلمة مرور المسؤول في السجل، وأي متصفح يصل عبر عنوان غير localhost أو HTTPS يحتاج إلى `AUTH_COOKIE_SECURE=false` وإلا فشل تسجيل الدخول بصمت، بحسب ملف README.',
        ],
        columns: ['المنصة', 'مكان الحصول عليه'],
        rows: [
          {
            'المنصة': 'أي نظام (Docker)',
            'مكان الحصول عليه': '`docker run -p 3000:3000 ghcr.io/libredb/libredb-studio:latest` ثم افتح http://localhost:3000',
          },
          {
            'المنصة': 'أي نظام (Node.js 24+)',
            'مكان الحصول عليه': '`npx @libredb/studio`',
          },
          {
            'المنصة': 'macOS',
            'مكان الحصول عليه': '`brew trust libredb/tap && brew install libredb/tap/libredb-studio`',
          },
          {
            'المنصة': 'Windows',
            'مكان الحصول عليه': '`winget install LibreDB.Studio` (ملف zip محمول يتضمن بيئة Node.js)',
          },
          {
            'المنصة': 'سطح مكتب Linux',
            'مكان الحصول عليه': '[GitHub Releases](https://github.com/libredb/libredb-studio/releases) (تطبيق سطح مكتب بصيغة AppImage أو ‎.deb، لمعماريتي x64 وarm64)',
          },
          {
            'المنصة': 'الشفرة المصدرية',
            'مكان الحصول عليه': '[libredb/libredb-studio على GitHub](https://github.com/libredb/libredb-studio) (MIT)',
          },
          {
            'المنصة': 'الموقع الرسمي',
            'مكان الحصول عليه': '[libredb.org](https://libredb.org) (التوثيق ونموذج الأمان وعرض تجريبي مباشر)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مكان الحصول عليه': '[libredb.org/privacy-policy](https://libredb.org/privacy-policy/) (آخر تحديث في 19 أكتوبر 2026)',
          },
        ],
        note: 'الإصدار الذي رُوجع: 1.0.0، صدر في 17 أكتوبر 2026؛ ونشر المستودع آخر تحديث في 23 أكتوبر 2026. يلزم استخدام الطرفية إلا مع تطبيق سطح مكتب Linux، ويجب توفر Docker أو Node.js 24+ للصفين الأولين. ويذكر README أيضًا حزم Helm وSnap وdeb وrpm وعمليات نشر بنقرة واحدة لم تُختبر.',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'السعر والترخيص',
        content: [
          '**LibreDB Studio مجاني: يذكر الموقع «MIT license. All of it, nothing held back» و«no paid edition, no hosted offering, and no capability held back».** وتأتي كل من المصادقة الموحّدة والتحكم بالوصول حسب الأدوار وسجل التدقيق وميزات الذكاء الاصطناعي ضمن إصدار MIT.',
          'أما LibreDB Platform المنفصل، وهو طبقة مستضافة ذاتيًا لحوكمة الوصول إلى قواعد البيانات، فهو «paid beyond 4 seats»، مع مستوى مجاني من مسؤول واحد و3 مستخدمين لمدة 12 شهرًا. ولا تذكر صفحته سعرًا، وتقول إن عرض سعر يُرسل بحسب عدد المقاعد.',
        ],
        note: 'يتقاضى مزوّدو الذكاء الاصطناعي السحابيون أجورهم على حدة: تحاسب الجهة المزوّدة على Gemini وOpenAI وواجهات API المشابهة، بينما لا يكلّف نموذج Ollama المحلي سوى عتادك.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات والذكاء الاصطناعي',
        content: [
          '**المحرّر هو المنتج الأساسي؛ وطبقة الذكاء الاصطناعي فوقه وتبقى معطّلة حتى تضبط نموذجًا.** تأتي البنود التالية من README والموقع.',
        ],
        items: [
          '**المحرّر.** إكمال تلقائي يعرف المخطط، ومساحة عمل متعددة التبويبات، ولوحة أوامر، وخطط EXPLAIN مرئية، ومخططات ER تفاعلية، ومقارنة مخططات مع SQL ترحيل مُولَّد.',
          '**المحركات.** 41 محركًا عبر واجهة واحدة، منها PostgreSQL وMySQL وOracle وSQL Server وSQLite وDuckDB وMongoDB وRedis وClickHouse وSnowflake وBigQuery وKafka وKubernetes؛ وثلاثة منها للقراءة فقط بحكم التصميم.',
          '**وكيل قواعد البيانات.** بحسب README تحدّد هدفًا فيصوغ الوكيل SQL ويقرأ النتائج ويكتب تقريرًا يستشهد بها. هو للقراءة فقط، ومحدود بين 18 و45 عبارة في كل تشغيل، ولا ينفّذ أبدًا ما يوصي به. يحتاج وضع Agent إلى نموذج يستطيع استدعاء الأدوات؛ أما وضع Plan الذي يكتفي بصياغة عبارة لتنفّذها بنفسك فيعمل مع أي نموذج.',
          '**مساعدات ذكاء اصطناعي أخرى.** تحليل مخاطر قبل تنفيذ العبارات المدمّرة، وملخصات EXPLAIN بلغة مبسّطة، وملفات بيانات تعريفية يكتبها الذكاء الاصطناعي.',
          '**الحوكمة.** مصادقة موحّدة OIDC، وتحكم بالوصول حسب الأدوار، وسجل تدقيق، وخادم MCP؛ وتظهر عمليات وكيل الذكاء الاصطناعي وMCP في سجل التدقيق.',
        ],
        note: 'يذكر README أن حزمة npm المضمَّنة لا تتضمن واجهة الوكيل؛ فالوكيل موجود في التطبيق المستقل فقط.',
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**من دون أي إعداد `LLM_*` لا يظهر شريط الذكاء الاصطناعي، وبحسب README لا يغادر شيء شبكتك؛ وعند ضبط Ollama أو نقطة نهاية مخصّصة يصبح الذكاء الاصطناعي مفعّلًا حتى من دون مفتاح API.** وتقول صفحة الأمان إنه مع نموذج مستضاف «the cloud LLM sees the query»، ويُرسل المخطط بوصفه سياقًا. ويرسل محلّل البيانات كذلك القيمة الدنيا والقصوى لكل عمود، وهي قيم حقيقية من بياناتك.',
          'توصي صفحة الأمان بتشغيل الذكاء الاصطناعي على Ollama أو LM Studio محلي عند التعامل مع بيانات حساسة. وتعدّد أيضًا حدودها: تُحفظ تفاصيل الاتصال، ومنها كلمات مرور قواعد البيانات ومفاتيح SSH، غير مشفّرة في localStorage بالمتصفح، وفي تسجيل الدخول المحلي بوضع env تُقارن كلمات المرور دون تجزئة. وإخفاء الأعمدة الحساسة ميزة على مستوى الشاشة وليس حدًّا أمنيًا. وتغطي سياسة خصوصية الموقع الموقع نفسه فقط، وهو يحمّل Google Analytics وMeta Pixel بعد الموافقة.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات المشروع نفسه. لم تدقّق PromptQuorum الشفرة، ولم تفحص حركة الشبكة، ولم تختبر مسار النماذج المحلية.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**الفرق التي تدير أنواعًا كثيرة من قواعد البيانات وتريد محرّرًا مستضافًا ذاتيًا مع مصادقة موحّدة وسجل تدقيق.**',
          '**المطوّرون الذين يريدون مساعدة الذكاء الاصطناعي في SQL لكنهم يحتاجون إلى إبقاء النموذج على عتادهم.**',
          '**من يفضّلون أداة في المتصفح على تثبيت عميل سطح مكتب على كل جهاز.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**مسار النماذج المحلية.** يقول README إن Ollama يعمل ويوصي به للبيانات الحساسة؛ أما أي النماذج تعطي SQL صالحًا وكيف يعمل وضع Agent الذي يستدعي الأدوات عليها فلم يُختبر.',
          '**قياسات المنتج عن بُعد.** تغطي سياسة الخصوصية الموقع فقط؛ وما إذا كان التطبيق نفسه يرسل بيانات استخدام لا تذكره المصادر المقروءة.',
          '**العمق لكل محرك.** يغطي وضع Agent سبعة محركات، ويذكر README حدودًا لكل محرك؛ ولم تُجرَّب المحركات الأخرى.',
          '**ادعاءات الأمان.** المجاميع الاختبارية وعمليات الفحص وضوابط الأدوار في صفحة الأمان هي تصريحات المشروع ولم تُدقَّق.',
          '**الجودة في الاستخدام الفعلي.** لم تُختبر السرعة ولا جودة المحرّر ولا التعامل مع النتائج الكبيرة ولا العروض المخصّصة للجوال.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': '[Tabby](/ar/power-local-llm/tabby-review)',
            'المنصات': 'خادم مستضاف ذاتيًا، إضافات IDE',
            'السعر / الترخيص': 'مجاني / Apache 2.0',
            'الفرق الرئيسي': 'مساعد مستضاف ذاتيًا لإكمال الشيفرة في المحررات؛ وليس عميل قواعد بيانات',
          },
          {
            'التطبيق': '[Continue.dev](/ar/power-local-llm/continue-dev-review)',
            'المنصات': 'VS Code وJetBrains',
            'السعر / الترخيص': 'مجاني / Apache 2.0',
            'الفرق الرئيسي': 'مساعد برمجة مفتوح المصدر داخل بيئة التطوير يعمل مع النماذج المحلية عبر Ollama',
          },
          {
            'التطبيق': '[Cline](/ar/power-local-llm/cline-review)',
            'المنصات': 'VS Code',
            'السعر / الترخيص': 'مجاني / Apache 2.0',
            'الفرق الرئيسي': 'وكيل برمجة مستقل داخل VS Code يستطيع تحرير الملفات وتنفيذ الأوامر',
          },
          {
            'التطبيق': '[Aider](/ar/power-local-llm/aider-review)',
            'المنصات': 'الطرفية',
            'السعر / الترخيص': 'مجاني / Apache 2.0',
            'الفرق الرئيسي': 'أداة برمجة زوجية في الطرفية تحرّر مستودع git بنماذج محلية أو سحابية',
          },
        ],
        note: 'ليس أي منها محرّر قواعد بيانات؛ بل هي أقرب الأدوات التي رُوجعت في فئة الدليل نفسها، وكلها مبنية على مساعدة الذكاء الاصطناعي في الشيفرة. تتغير تفاصيل المنافسين كثيرًا؛ فتأكد من السعر والترخيص والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يرسل LibreDB Studio بياناتي إلى السحابة؟',
            a: 'ليس افتراضيًا: من دون نموذج مضبوط يكون الذكاء الاصطناعي معطّلًا. وإذا اخترت Gemini أو OpenAI فإن الاستعلام وسياق المخطط يذهبان إلى ذلك المزوّد.',
          },
          {
            q: 'ما قواعد البيانات التي يستطيع وكيل الذكاء الاصطناعي قراءتها؟',
            a: 'PostgreSQL وSQLite وDuckDB وSQL Server وMySQL وKubernetes وMongoDB؛ وفي المحركات الأخرى يظل وضع Plan يصوغ SQL لتنفّذه بنفسك.',
          },
          {
            q: 'هل LibreDB Studio مجاني للاستخدام التجاري؟',
            a: 'Studio بترخيص MIT الذي يسمح بالاستخدام التجاري؛ أما طبقة الحوكمة Platform المنفصلة فمدفوعة بعد 4 مقاعد.',
          },
          {
            q: 'هل يمكنني تشغيله دون Docker؟',
            a: 'نعم: بحسب README عبر `npx @libredb/studio` مع Node.js 24+، أو عبر Homebrew أو winget أو تطبيق سطح مكتب Linux.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم',
        content:
          'LibreDB Studio محرّر SQL مفتوح المصدر واسع النطاق، مع طبقة ذكاء اصطناعي اختيارية يمكن توجيهها إلى نموذج محلي. تصفه المصادر بوضوح، بما في ذلك حدوده الأمنية، والترخيص MIT بسيط. يناسب الفرق التي تريد محرّرًا واحدًا مستضافًا ذاتيًا لمحركات كثيرة؛ أما مسار الذكاء الاصطناعي المحلي والقياس عن بُعد والجودة اليومية فلم تُختبر، ولا يغطي الوكيل سوى سبعة محركات. وإذا كنت تريد مساعدة الذكاء الاصطناعي للشيفرة لا لقواعد البيانات فقارن [Tabby](/ar/power-local-llm/tabby-review) أو [Continue.dev](/ar/power-local-llm/continue-dev-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع LibreDB Studio](https://libredb.org) — وصف المنتج والمحركات والترخيص وقنوات التوزيع، جرى فحصه في 23 أكتوبر 2026.',
          '[نموذج الأمان في LibreDB](https://libredb.org/security/) — المصادقة وتخزين بيانات الاعتماد وتدفق بيانات الذكاء الاصطناعي، جرى فحصه في 23 أكتوبر 2026.',
          '[سياسة خصوصية LibreDB](https://libredb.org/privacy-policy/) — بيانات الموقع والجهة المشغّلة ومدد الاحتفاظ؛ آخر تحديث في 19 أكتوبر 2026.',
          '[صفحة LibreDB Platform](https://libredb.org/platform/) — طبقة الحوكمة المدفوعة ومستواها المجاني، جرى فحصها في 23 أكتوبر 2026.',
          '[libredb/libredb-studio على GitHub](https://github.com/libredb/libredb-studio) — README وإصدار الحزمة 1.0.0 وملفات الإصدار، جرى فحصها في 23 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Tabby](/ar/power-local-llm/tabby-review) — مساعد مستضاف ذاتيًا لإكمال الشيفرة.',
          '[مراجعة Continue.dev](/ar/power-local-llm/continue-dev-review) — مساعد مفتوح المصدر في بيئة التطوير يعمل مع Ollama.',
          '[مراجعة Cline](/ar/power-local-llm/cline-review) — وكيل برمجة مستقل لـ VS Code.',
          '[مراجعة Aider](/ar/power-local-llm/aider-review) — برمجة زوجية في الطرفية بنماذج محلية أو سحابية.',
          '[النماذج اللغوية المحلية لتطوير الشيفرة: مقارنة](/ar/power-local-llm/local-llm-code-development-compared) — مقارنة الفئة.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Coding Assistants',
    heroImage: '/images/libredb-studio-review-hero-zh.webp',
    title: 'LibreDB Studio评测：自带可选本地AI智能体的开源SQL编辑器',
    seoTitle: 'LibreDB Studio评测：带本地AI智能体的SQL编辑器',
    intro:
      'LibreDB Studio是一款采用MIT许可证的数据库编辑器，网址为[libredb.org](https://libredb.org)，在浏览器中运行，可通过Docker、npx或包管理器部署在数据旁边。它用同一界面连接41种数据库引擎，并提供可选的AI层，可使用本地Ollama模型而不是云端API。本评测依据2026年10月23日查阅的官网、安全页面和公开GitHub仓库；PromptQuorum没有实际上手测试该软件。',
    metaDescription:
      'LibreDB Studio评测：免费、MIT许可证的浏览器SQL编辑器，支持41种数据库引擎，可选AI智能体能运行在本地Ollama上。安装方式与局限。',
    twitterDescription:
      'LibreDB Studio评测：浏览器中的开源SQL编辑器，支持41种数据库引擎，可选AI智能体可使用本地Ollama模型。哪些内容有来源佐证，哪些尚未测试。',
    audience:
      '想用一个自托管SQL编辑器管理多种数据库，并想了解其AI功能能否留在本地模型上的开发者和数据团队。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LibreDB Studio评测',
    targetKeywords: [
      'libredb studio 评测',
      'libredb studio',
      '开源 sql 编辑器',
      '自托管数据库编辑器',
      '数据库 ide ollama',
      'ai sql 助手 本地大模型',
      'libredb studio vs dbeaver',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**LibreDB Studio是一款免费的自托管SQL编辑器，据其自身介绍，可在一个浏览器标签页中连接41种数据库引擎，并能把AI提问发送给本地Ollama模型。** 其AI智能体只能读取其中7种引擎，且在配置模型之前AI处于关闭状态。',
    quickAnswerTop: {
      zh: {
        question: 'LibreDB Studio的AI功能能用本地大模型吗？',
        answer:
          '据其README和安全页面，可以：可指向Ollama、LM Studio或任何兼容OpenAI的端点，未配置模型时AI功能关闭。PromptQuorum没有测试过这一点。',
        bullets: [
          'Studio本身采用MIT许可证且免费；另有一层用于访问治理的Platform，超过4个席位后收费。',
          '安装只需一条命令（Docker或npx）；只有Linux有可双击安装的桌面版。',
          'Gemini、OpenAI等托管模型会看到你的查询和表结构。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'LibreDB Studio是什么？', anchor: 'what-is-libredb' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '价格与许可证', anchor: 'plans-and-pricing' },
      { label: '功能与AI', anchor: 'key-features' },
      { label: '隐私与数据流向', anchor: 'privacy' },
      { label: '适合哪些人', anchor: 'who-should-use' },
      { label: '我们无法核实的内容', anchor: 'who-should-not-use' },
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
          {
            type: 'one-sentence',
            text: 'LibreDB Studio是一款在浏览器中运行、部署在数据库旁边的开源SQL编辑器，提供可使用本地模型的AI助手和智能体。',
          },
          {
            type: 'plain-terms',
            text: '用一条命令启动，在浏览器中打开，添加数据库连接并编写查询；如果再接入一个模型（例如由Ollama提供的模型），它就能解释执行计划并起草SQL。',
          },
        ],
        items: [
          '覆盖范围：同一界面支持41种引擎，从PostgreSQL、MySQL、SQLite到MongoDB、Redis、ClickHouse和Kubernetes。',
          '智能体：只读数据库智能体可运行在PostgreSQL、SQLite、DuckDB、SQL Server、MySQL、Kubernetes和MongoDB上。',
          '版本：1.0.0于2026年10月17日发布，项目最近一次更新是2026年10月23日。',
          '运营方：网站隐私政策列出的是在土耳其注册的Sekoya Grup Bilisim ve Teknoloji Ltd. Sti.。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测依据2026年10月23日查阅的官方网站、安全页面和公开GitHub仓库。过程中没有实际使用、基准测试或安全测试。',
          },
        ],
      },
      overview: {
        id: 'what-is-libredb',
        title: 'LibreDB Studio是什么？',
        content: [
          '**据其网站介绍，LibreDB Studio是“部署在数据旁边的数据库编辑器”：一个以容器、Helm chart或npm包形式运行的Web应用，不必在每台笔记本上安装客户端。** 你在浏览器（包括手机和平板）中打开它，通过基于Monaco的SQL编辑器处理表、查询和表结构，Monaco也是VS Code的编辑器内核。',
          '它首先是一款数据库工具，而不是AI产品。AI功能是可选的一层：一个由模型驱动、可解释执行计划并分析表的助手，以及一个起草只读查询并撰写带引用报告的智能体。它们支持Gemini、OpenAI、Ollama或任何兼容OpenAI的端点。本评测只涉及免费、MIT许可证的LibreDB Studio，不包括另行提供的LibreDB Platform。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**大多数平台只需一条终端命令，只有Linux提供可双击安装的桌面应用。** 据README，首次启动时管理员密码会打印在日志中；若通过localhost或HTTPS以外的地址访问，需要设置`AUTH_COOKIE_SECURE=false`，否则登录会悄无声息地失败。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': '任意系统（Docker）',
            '获取方式': '运行`docker run -p 3000:3000 ghcr.io/libredb/libredb-studio:latest`，然后打开http://localhost:3000',
          },
          {
            '平台': '任意系统（Node.js 24+）',
            '获取方式': '`npx @libredb/studio`',
          },
          {
            '平台': 'macOS',
            '获取方式': '`brew trust libredb/tap && brew install libredb/tap/libredb-studio`',
          },
          {
            '平台': 'Windows',
            '获取方式': '`winget install LibreDB.Studio`（内置Node.js运行时的便携zip）',
          },
          {
            '平台': 'Linux桌面',
            '获取方式': '[GitHub Releases](https://github.com/libredb/libredb-studio/releases)（AppImage或.deb桌面应用，x64和arm64）',
          },
          {
            '平台': '源代码',
            '获取方式': '[GitHub上的libredb/libredb-studio](https://github.com/libredb/libredb-studio)（MIT）',
          },
          {
            '平台': '官方网站',
            '获取方式': '[libredb.org](https://libredb.org)（文档、安全模型和在线演示）',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[libredb.org/privacy-policy](https://libredb.org/privacy-policy/)（最后更新于2026年10月19日）',
          },
        ],
        note: '评测版本：1.0.0，发布于2026年10月17日；仓库最近一次更新是2026年10月23日。除Linux桌面应用外都需要终端，前两行还需要已安装Docker或Node.js 24+。README还列出了Helm、Snap、deb、rpm软件包和一键部署，这些均未测试。',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: '价格与许可证',
        content: [
          '**LibreDB Studio免费：网站写明“MIT license. All of it, nothing held back”以及“no paid edition, no hosted offering, and no capability held back”。** 单点登录、基于角色的访问控制、审计日志和AI功能都包含在MIT版本中。',
          '另行提供的LibreDB Platform是用于治理数据库访问的自托管层，属于“paid beyond 4 seats”，免费档为1名管理员加3名用户，期限12个月。该页面没有给出价格，只说会按所需席位数发送报价。',
        ],
        note: '云端AI提供商另行计费：Gemini、OpenAI等API由提供商收费，而本地Ollama模型只消耗你自己的硬件。',
      },
      features: {
        id: 'key-features',
        title: '功能与AI',
        content: [
          '**编辑器是核心产品；AI层叠加在其上，配置模型之前保持关闭。** 以下各项来自README和网站。',
        ],
        items: [
          '**编辑器。** 感知表结构的自动补全、多标签工作区、命令面板、可视化EXPLAIN、交互式ER图，以及可生成迁移SQL的表结构对比。',
          '**引擎。** 同一界面支持41种引擎，包括PostgreSQL、MySQL、Oracle、SQL Server、SQLite、DuckDB、MongoDB、Redis、ClickHouse、Snowflake、BigQuery、Kafka和Kubernetes；其中三种在设计上为只读。',
          '**数据库智能体。** 据README，你说明目标，智能体起草SQL、读取结果，并撰写引用这些结果的报告。它只读，每次运行限制在18至45条语句，且绝不执行自己推荐的内容。Agent模式需要能调用工具的模型；只起草语句、由你自己执行的Plan模式则适用于任何模型。',
          '**其他AI辅助。** 执行破坏性语句前的风险分析、用平实语言写成的EXPLAIN摘要，以及由AI撰写的数据概况。',
          '**治理。** OIDC单点登录、基于角色的访问控制、审计日志和MCP服务器；AI智能体和MCP的操作会出现在审计记录中。',
        ],
        note: 'README称，嵌入式npm包不含智能体界面；智能体仅存在于独立应用中。',
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**不设置任何`LLM_*`选项时，AI面板不会显示，据README，没有任何数据离开你的网络；配置了Ollama或自定义端点后，即使没有API密钥，AI也会开启。** 安全页面写道，使用托管模型时“the cloud LLM sees the query”，并且表结构会作为上下文发送。数据概况功能还会发送每一列的最小值和最大值，这些是你数据中的真实值。',
          '安全页面建议处理敏感数据时让AI对接本地Ollama或LM Studio。它也列出了自身的局限：包括数据库密码和SSH密钥在内的连接信息以未加密形式保存在浏览器localStorage中；在env模式的本地登录中，密码未经哈希直接比对。敏感列的显示遮蔽只是屏幕层面的功能，不构成安全边界。网站的隐私政策只涵盖网站本身，网站在用户同意后会加载Google Analytics和Meta Pixel。',
        ],
        callouts: [
          {
            type: 'note',
            text: '以上都是项目自身的说法。PromptQuorum没有审计代码、检查网络流量，也没有测试本地模型路径。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**管理多种数据库、希望用一个带单点登录和审计日志的自托管编辑器的团队。**',
          '**想要SQL方面的AI帮助，但需要让模型留在自有硬件上的开发者。**',
          '**更愿意用浏览器工具，而不想在每台机器上安装桌面客户端的人。**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**本地模型路径。** README称Ollama可用并推荐用于敏感数据；哪些模型能产出可用的SQL，以及需要调用工具的Agent模式在这些模型上表现如何，均未测试。',
          '**产品遥测。** 隐私政策只涵盖网站；应用本身是否发送使用数据，在已读来源中没有说明。',
          '**各引擎的深度。** Agent模式覆盖七种引擎，README还注明了各引擎的限制；其余引擎未做试用。',
          '**安全方面的说法。** 安全页面上的校验和、扫描和角色控制都是项目的自述，未经审计。',
          '**实际使用质量。** 速度、编辑器质量、大结果集的表现和移动端视图均未测试。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          {
            '应用': '[Tabby](/zh/power-local-llm/tabby-review)',
            '平台': '自托管服务器、IDE插件',
            '价格 / 许可证': '免费 / Apache 2.0',
            '主要区别': '面向编辑器的自托管代码补全助手；不是数据库客户端',
          },
          {
            '应用': '[Continue.dev](/zh/power-local-llm/continue-dev-review)',
            '平台': 'VS Code、JetBrains',
            '价格 / 许可证': '免费 / Apache 2.0',
            '主要区别': 'IDE中的开源编程助手，可通过Ollama使用本地模型',
          },
          {
            '应用': '[Cline](/zh/power-local-llm/cline-review)',
            '平台': 'VS Code',
            '价格 / 许可证': '免费 / Apache 2.0',
            '主要区别': 'VS Code内的自主编程智能体，可编辑文件并运行命令',
          },
          {
            '应用': '[Aider](/zh/power-local-llm/aider-review)',
            '平台': '终端',
            '价格 / 许可证': '免费 / Apache 2.0',
            '主要区别': '终端中的结对编程工具，用本地或云端模型编辑git仓库',
          },
        ],
        note: '它们都不是数据库编辑器；这些是同一目录类别中已评测的最接近的工具，全部围绕针对代码的AI辅助。竞品信息变化很快，请到各应用自己的页面确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'LibreDB Studio会把我的数据发送到云端吗？',
            a: '默认不会：未配置模型时AI处于关闭状态。如果你选择Gemini或OpenAI，查询和表结构上下文会发送给该提供商。',
          },
          {
            q: 'AI智能体能读取哪些数据库？',
            a: 'PostgreSQL、SQLite、DuckDB、SQL Server、MySQL、Kubernetes和MongoDB；在其他引擎上，仅规划的Plan模式仍可起草SQL，由你自己执行。',
          },
          {
            q: 'LibreDB Studio可以免费商用吗？',
            a: 'Studio采用MIT许可证，允许商业使用；另行提供的Platform治理层超过4个席位后收费。',
          },
          {
            q: '不用Docker也能运行吗？',
            a: '可以：据README，可使用Node.js 24+配合`npx @libredb/studio`，或使用Homebrew、winget，以及Linux桌面应用。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'LibreDB Studio是一款覆盖面很广的开源SQL编辑器，AI层可选，并可指向本地模型。来源对它的描述很清楚，包括它自己指出的安全局限，许可证也只是简单的MIT。它适合想用一个自托管编辑器管理多种引擎的团队；本地AI路径、遥测情况和日常使用质量均未测试，智能体也只覆盖七种引擎。如果你想要的是针对代码而不是针对数据库的AI帮助，可以对比[Tabby](/zh/power-local-llm/tabby-review)或[Continue.dev](/zh/power-local-llm/continue-dev-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[LibreDB Studio官方网站](https://libredb.org) — 产品介绍、引擎、许可证和分发渠道，2026年10月23日查阅。',
          '[LibreDB安全模型](https://libredb.org/security/) — 身份验证、凭据存储和AI数据流向，2026年10月23日查阅。',
          '[LibreDB隐私政策](https://libredb.org/privacy-policy/) — 网站数据、运营方和保留期限；最后更新于2026年10月19日。',
          '[LibreDB Platform页面](https://libredb.org/platform/) — 收费的治理层及其免费档，2026年10月23日查阅。',
          '[GitHub上的libredb/libredb-studio](https://github.com/libredb/libredb-studio) — README、软件包版本1.0.0和发布文件，2026年10月23日查阅。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Tabby评测](/zh/power-local-llm/tabby-review) — 自托管的代码补全助手。',
          '[Continue.dev评测](/zh/power-local-llm/continue-dev-review) — 可配合Ollama使用的开源IDE助手。',
          '[Cline评测](/zh/power-local-llm/cline-review) — 面向VS Code的自主编程智能体。',
          '[Aider评测](/zh/power-local-llm/aider-review) — 使用本地或云端模型的终端结对编程。',
          '[本地大模型代码开发对比](/zh/power-local-llm/local-llm-code-development-compared) — 类别对比。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Coding Assistants',
    heroImage: '/images/libredb-studio-review-hero-ko.webp',
    title: 'LibreDB Studio 리뷰: 로컬 AI 에이전트를 선택할 수 있는 오픈소스 SQL 편집기',
    seoTitle: 'LibreDB Studio 리뷰: 로컬 AI 에이전트 SQL 편집기',
    intro:
      'LibreDB Studio는 [libredb.org](https://libredb.org)에서 제공하는 MIT 라이선스 데이터베이스 편집기로, 브라우저에서 실행되며 Docker, npx 또는 패키지 관리자로 데이터 옆에 배포합니다. 41개 데이터베이스 엔진을 하나의 화면으로 연결하고, 클라우드 API 대신 로컬 Ollama 모델을 쓸 수 있는 선택형 AI 계층을 더합니다. 이 리뷰는 2026년 10월 23일에 확인한 공식 웹사이트, 보안 페이지, 공개 GitHub 저장소를 바탕으로 하며, PromptQuorum은 소프트웨어를 직접 테스트하지 않았습니다.',
    metaDescription:
      'LibreDB Studio 리뷰: 41개 데이터베이스 엔진을 지원하는 무료 MIT 라이선스 브라우저 SQL 편집기. 로컬 Ollama로 실행할 수 있는 선택형 AI 에이전트를 살펴봅니다.',
    twitterDescription:
      'LibreDB Studio 리뷰: 브라우저에서 41개 데이터베이스 엔진을 다루는 오픈소스 SQL 편집기. 로컬 Ollama 모델도 쓸 수 있는 선택형 AI 에이전트와 검증되지 않은 부분을 정리했습니다.',
    audience:
      '여러 데이터베이스를 위한 셀프 호스팅 SQL 편집기 하나를 찾고, AI 기능을 로컬 모델에 둘 수 있는지 따져 보려는 개발자와 데이터 팀.',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LibreDB Studio 리뷰',
    targetKeywords: [
      'libredb studio 리뷰',
      'libredb studio',
      '오픈소스 sql 편집기',
      '셀프 호스팅 데이터베이스 편집기',
      '데이터베이스 ide ollama',
      'ai sql 어시스턴트 로컬 llm',
      'libredb studio vs dbeaver',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**LibreDB Studio는 무료 셀프 호스팅 SQL 편집기로, 자체 설명에 따르면 브라우저 탭 하나에서 41개 데이터베이스 엔진에 연결하고 AI 질문을 로컬 Ollama 모델로 보낼 수 있습니다.** AI 에이전트가 읽을 수 있는 엔진은 그중 7개뿐이며, 모델을 설정하기 전까지 AI는 꺼져 있습니다.',
    quickAnswerTop: {
      ko: {
        question: 'LibreDB Studio의 AI 기능에 로컬 LLM을 쓸 수 있나요?',
        answer:
          'README와 보안 페이지에 따르면 쓸 수 있습니다. Ollama, LM Studio 또는 OpenAI 호환 엔드포인트를 지정할 수 있고, 모델을 설정하지 않으면 AI는 꺼져 있습니다. PromptQuorum은 이를 테스트하지 않았습니다.',
        bullets: [
          'Studio 자체는 MIT 라이선스이며 무료입니다. 접근 거버넌스용 별도 계층인 Platform은 5석부터 유료입니다.',
          '설치는 명령어 하나(Docker 또는 npx)이며, 더블클릭으로 설치하는 데스크톱 앱은 Linux에만 있습니다.',
          'Gemini나 OpenAI 같은 호스팅 모델은 쿼리와 스키마를 볼 수 있습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'LibreDB Studio란?', anchor: 'what-is-libredb' },
      { label: '받는 방법', anchor: 'get-it' },
      { label: '가격과 라이선스', anchor: 'plans-and-pricing' },
      { label: '기능과 AI', anchor: 'key-features' },
      { label: '개인정보와 데이터 흐름', anchor: 'privacy' },
      { label: '추천 대상', anchor: 'who-should-use' },
      { label: '확인하지 못한 부분', anchor: 'who-should-not-use' },
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
          {
            type: 'one-sentence',
            text: 'LibreDB Studio는 데이터베이스 옆에서 브라우저로 실행되는 오픈소스 SQL 편집기이며, 로컬 모델을 쓸 수 있는 AI 어시스턴트와 에이전트를 제공합니다.',
          },
          {
            type: 'plain-terms',
            text: '명령어 하나로 실행해 브라우저에서 열고, 데이터베이스 연결을 추가해 쿼리를 작성합니다. Ollama 등으로 제공되는 모델을 함께 연결하면 실행 계획을 설명하고 SQL 초안을 작성할 수 있습니다.',
          },
        ],
        items: [
          '지원 범위: PostgreSQL, MySQL, SQLite부터 MongoDB, Redis, ClickHouse, Kubernetes까지 41개 엔진을 하나의 화면으로 다룹니다.',
          '에이전트: 읽기 전용 데이터베이스 에이전트는 PostgreSQL, SQLite, DuckDB, SQL Server, MySQL, Kubernetes, MongoDB에서 동작합니다.',
          '버전: 1.0.0은 2026년 10월 17일에 공개되었고, 프로젝트의 마지막 업데이트는 2026년 10월 23일입니다.',
          '운영 주체: 웹사이트 개인정보처리방침은 튀르키예에 등록된 Sekoya Grup Bilisim ve Teknoloji Ltd. Sti.를 명시합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 23일에 확인한 공식 웹사이트, 보안 페이지, 공개 GitHub 저장소를 바탕으로 합니다. 직접 사용, 벤치마크, 보안 테스트는 하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-libredb',
        title: 'LibreDB Studio란?',
        content: [
          '**웹사이트에 따르면 LibreDB Studio는 “데이터 옆에 배포하는 데이터베이스 편집기”입니다. 노트북마다 클라이언트를 설치하는 대신 컨테이너, Helm 차트, npm 패키지로 실행하는 웹 애플리케이션입니다.** 스마트폰이나 태블릿을 포함해 브라우저에서 열고, VS Code와 같은 편집기 코어인 Monaco 기반 SQL 편집기로 테이블, 쿼리, 스키마를 다룹니다.',
          '기본적으로 데이터베이스 도구이며 AI 제품이 아닙니다. AI 기능은 선택형 계층으로, 실행 계획을 설명하고 테이블을 분석하는 모델 기반 어시스턴트와, 읽기 전용 쿼리 초안을 만들고 근거를 인용한 보고서를 쓰는 에이전트가 있습니다. Gemini, OpenAI, Ollama 또는 OpenAI 호환 엔드포인트를 쓸 수 있습니다. 이 리뷰는 무료 MIT 라이선스의 LibreDB Studio만 다루며, 별도 제품인 LibreDB Platform은 다루지 않습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '받는 방법',
        content: [
          '**대부분의 플랫폼에서는 터미널 명령어 하나면 되고, 더블클릭으로 설치하는 데스크톱 앱은 Linux에만 있습니다.** README에 따르면 처음 실행할 때 관리자 비밀번호가 로그에 출력되며, localhost나 HTTPS가 아닌 주소로 접속하는 브라우저에서는 `AUTH_COOKIE_SECURE=false`가 필요합니다. 설정하지 않으면 로그인이 아무 표시 없이 실패합니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': '모든 OS(Docker)',
            '받는 곳': '`docker run -p 3000:3000 ghcr.io/libredb/libredb-studio:latest` 실행 후 http://localhost:3000 접속',
          },
          {
            '플랫폼': '모든 OS(Node.js 24 이상)',
            '받는 곳': '`npx @libredb/studio`',
          },
          {
            '플랫폼': 'macOS',
            '받는 곳': '`brew trust libredb/tap && brew install libredb/tap/libredb-studio`',
          },
          {
            '플랫폼': 'Windows',
            '받는 곳': '`winget install LibreDB.Studio`(Node.js 런타임이 포함된 휴대용 zip)',
          },
          {
            '플랫폼': 'Linux 데스크톱',
            '받는 곳': '[GitHub Releases](https://github.com/libredb/libredb-studio/releases)(AppImage 또는 .deb 데스크톱 앱, x64 및 arm64)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '[GitHub의 libredb/libredb-studio](https://github.com/libredb/libredb-studio)(MIT)',
          },
          {
            '플랫폼': '웹사이트',
            '받는 곳': '[libredb.org](https://libredb.org)(문서, 보안 모델, 라이브 데모)',
          },
          {
            '플랫폼': '개인정보처리방침',
            '받는 곳': '[libredb.org/privacy-policy](https://libredb.org/privacy-policy/)(최종 업데이트 2026년 10월 19일)',
          },
        ],
        note: '확인한 버전: 1.0.0(2026년 10월 17일 공개). 저장소의 마지막 업데이트는 2026년 10월 23일입니다. Linux 데스크톱 앱을 제외하면 터미널이 필요하며, 첫 두 행에는 Docker 또는 Node.js 24 이상이 있어야 합니다. README에는 Helm, Snap, deb, rpm 패키지와 원클릭 배포도 나와 있지만 테스트하지 않았습니다.',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: '가격과 라이선스',
        content: [
          '**LibreDB Studio는 무료입니다. 웹사이트에는 “MIT license. All of it, nothing held back”과 “no paid edition, no hosted offering, and no capability held back”이라고 적혀 있습니다.** 싱글 사인온, 역할 기반 접근 제어, 감사 로그, AI 기능이 모두 MIT 빌드에 포함됩니다.',
          '별도 제품인 LibreDB Platform은 데이터베이스 접근을 통제하는 셀프 호스팅 계층으로 “paid beyond 4 seats”이며, 무료 구간은 관리자 1명과 사용자 3명에 12개월입니다. 해당 페이지에는 가격이 없고, 필요한 좌석 수에 맞춰 견적을 보내 준다고 되어 있습니다.',
        ],
        note: '클라우드 AI 제공업체는 별도로 과금합니다. Gemini, OpenAI 같은 API는 제공업체가 청구하고, 로컬 Ollama 모델은 본인 하드웨어 비용만 듭니다.',
      },
      features: {
        id: 'key-features',
        title: '기능과 AI',
        content: [
          '**핵심 제품은 편집기이고, AI 계층은 그 위에 얹혀 있으며 모델을 설정하기 전까지 꺼져 있습니다.** 아래 항목은 README와 웹사이트에서 가져왔습니다.',
        ],
        items: [
          '**편집기.** 스키마를 인식하는 자동 완성, 멀티 탭 작업 공간, 명령 팔레트, 시각적 EXPLAIN 계획, 대화형 ER 다이어그램, 마이그레이션 SQL을 생성하는 스키마 비교.',
          '**엔진.** PostgreSQL, MySQL, Oracle, SQL Server, SQLite, DuckDB, MongoDB, Redis, ClickHouse, Snowflake, BigQuery, Kafka, Kubernetes 등 41개 엔진을 하나의 화면으로 다룹니다. 그중 세 가지는 설계상 읽기 전용입니다.',
          '**데이터베이스 에이전트.** README에 따르면 목표를 입력하면 에이전트가 SQL 초안을 만들고 결과를 읽은 뒤 그 결과를 인용한 보고서를 씁니다. 읽기 전용이고, 한 번 실행에 18~45개 문장으로 제한되며, 권장한 내용을 직접 실행하지 않습니다. Agent 모드에는 도구를 호출할 수 있는 모델이 필요하고, 사용자가 직접 실행할 문장의 초안만 만드는 Plan 모드는 어떤 모델에서도 동작합니다.',
          '**기타 AI 도우미.** 파괴적인 문장 실행 전 위험 분석, 쉬운 말로 풀어 쓴 EXPLAIN 요약, AI가 작성하는 데이터 프로필.',
          '**거버넌스.** OIDC 싱글 사인온, 역할 기반 접근 제어, 감사 로그, MCP 서버. AI 에이전트와 MCP 작업은 감사 기록에 남습니다.',
        ],
        note: 'README에 따르면 임베드용 npm 패키지에는 에이전트 화면이 없으며, 에이전트는 독립 실행형 애플리케이션에만 있습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 데이터 흐름',
        content: [
          '**`LLM_*` 설정이 전혀 없으면 AI 패널이 표시되지 않고 README에 따르면 네트워크 밖으로 나가는 것이 없습니다. Ollama나 사용자 지정 엔드포인트는 API 키 없이도 설정된 것으로 간주되어 AI가 켜집니다.** 보안 페이지는 호스팅 모델을 쓰면 “the cloud LLM sees the query”라고 밝히며, 스키마도 컨텍스트로 전송됩니다. 데이터 프로파일러는 각 열의 최솟값과 최댓값도 보내는데, 이는 실제 데이터의 값입니다.',
          '보안 페이지는 민감한 데이터에는 로컬 Ollama나 LM Studio에서 AI를 실행하라고 권합니다. 자체 한계도 적어 두었습니다. 데이터베이스 비밀번호와 SSH 키를 포함한 연결 정보가 브라우저 localStorage에 암호화되지 않은 채 저장되고, env 모드의 로컬 로그인에서는 비밀번호가 해시 없이 비교됩니다. 민감한 열의 표시 마스킹은 화면 수준의 기능이며 보안 경계가 아닙니다. 웹사이트의 개인정보처리방침은 사이트에만 해당하며, 사이트는 동의 후 Google Analytics와 Meta Pixel을 불러옵니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 프로젝트 자체의 설명입니다. PromptQuorum은 코드를 감사하거나 네트워크 트래픽을 검사하거나 로컬 모델 경로를 테스트하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '추천 대상',
        items: [
          '**여러 종류의 데이터베이스를 운영하며, 싱글 사인온과 감사 로그를 갖춘 셀프 호스팅 편집기 하나를 원하는 팀.**',
          '**SQL 작업에 AI의 도움을 받고 싶지만 모델은 자체 하드웨어에 두어야 하는 개발자.**',
          '**기기마다 데스크톱 클라이언트를 설치하기보다 브라우저 도구를 선호하는 분.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 부분',
        items: [
          '**로컬 모델 경로.** README는 Ollama가 동작하며 민감한 데이터에 권장한다고 하지만, 어떤 모델이 쓸 만한 SQL을 내놓는지, 도구 호출을 쓰는 Agent 모드가 그 위에서 얼마나 잘 동작하는지는 테스트하지 않았습니다.',
          '**제품 텔레메트리.** 개인정보처리방침은 웹사이트에만 해당하며, 애플리케이션 자체가 사용 데이터를 보내는지는 읽은 출처에 나와 있지 않습니다.',
          '**엔진별 깊이.** Agent 모드는 7개 엔진을 지원하고 README에는 엔진별 제한이 적혀 있습니다. 나머지 엔진은 써 보지 않았습니다.',
          '**보안 관련 주장.** 보안 페이지의 체크섬, 스캔, 역할 제어는 프로젝트의 설명이며 감사하지 않았습니다.',
          '**실사용 품질.** 속도, 편집기 품질, 큰 결과의 처리, 모바일 화면은 테스트하지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이'],
        rows: [
          {
            '앱': '[Tabby](/ko/power-local-llm/tabby-review)',
            '플랫폼': '셀프 호스팅 서버, IDE 플러그인',
            '가격 / 라이선스': '무료 / Apache 2.0',
            '핵심 차이': '편집기용 셀프 호스팅 코드 자동 완성 어시스턴트이며, 데이터베이스 클라이언트가 아닙니다',
          },
          {
            '앱': '[Continue.dev](/ko/power-local-llm/continue-dev-review)',
            '플랫폼': 'VS Code, JetBrains',
            '가격 / 라이선스': '무료 / Apache 2.0',
            '핵심 차이': 'IDE에서 동작하는 오픈소스 코딩 어시스턴트로, Ollama를 통해 로컬 모델을 쓸 수 있습니다',
          },
          {
            '앱': '[Cline](/ko/power-local-llm/cline-review)',
            '플랫폼': 'VS Code',
            '가격 / 라이선스': '무료 / Apache 2.0',
            '핵심 차이': 'VS Code 안에서 파일을 편집하고 명령을 실행할 수 있는 자율형 코딩 에이전트',
          },
          {
            '앱': '[Aider](/ko/power-local-llm/aider-review)',
            '플랫폼': '터미널',
            '가격 / 라이선스': '무료 / Apache 2.0',
            '핵심 차이': '로컬 또는 클라우드 모델로 git 저장소를 편집하는 터미널 페어 프로그래밍 도구',
          },
        ],
        note: '이 중 어느 것도 데이터베이스 편집기는 아닙니다. 같은 디렉터리 카테고리에서 리뷰한 가장 가까운 도구들이며, 모두 코드에 대한 AI 지원을 중심으로 합니다. 경쟁 제품의 세부 사항은 자주 바뀌므로 가격, 라이선스, 플랫폼은 각 앱의 페이지에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'LibreDB Studio는 내 데이터를 클라우드로 보내나요?',
            a: '기본적으로는 아닙니다. 모델을 설정하지 않으면 AI는 꺼져 있습니다. Gemini나 OpenAI를 선택하면 쿼리와 스키마 컨텍스트가 해당 제공업체로 전송됩니다.',
          },
          {
            q: 'AI 에이전트는 어떤 데이터베이스를 읽을 수 있나요?',
            a: 'PostgreSQL, SQLite, DuckDB, SQL Server, MySQL, Kubernetes, MongoDB입니다. 다른 엔진에서도 Plan 모드는 사용자가 직접 실행할 SQL 초안을 만들어 줍니다.',
          },
          {
            q: 'LibreDB Studio는 상업적 용도로도 무료인가요?',
            a: 'Studio는 상업적 사용을 허용하는 MIT 라이선스입니다. 별도의 거버넌스 계층인 Platform은 5석부터 유료입니다.',
          },
          {
            q: 'Docker 없이 실행할 수 있나요?',
            a: '네. README에 따르면 Node.js 24 이상에서 `npx @libredb/studio`를 쓰거나, Homebrew, winget, Linux 데스크톱 앱을 사용할 수 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'LibreDB Studio는 지원 범위가 넓은 오픈소스 SQL 편집기이며, AI는 선택형 계층이고 로컬 모델로 향하게 할 수 있습니다. 출처들은 자체 보안 한계까지 포함해 명확히 설명하고 있고, 라이선스도 단순한 MIT입니다. 여러 엔진을 위한 셀프 호스팅 편집기 하나를 원하는 팀에 맞습니다. 로컬 AI 경로, 텔레메트리, 일상적인 품질은 테스트하지 않았고, 에이전트는 7개 엔진만 지원합니다. 데이터베이스가 아니라 코드에 대한 AI 지원이 필요하다면 [Tabby](/ko/power-local-llm/tabby-review)나 [Continue.dev](/ko/power-local-llm/continue-dev-review)를 비교해 보세요.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[LibreDB Studio 웹사이트](https://libredb.org) — 제품 설명, 엔진, 라이선스, 배포 채널. 2026년 10월 23일 확인.',
          '[LibreDB 보안 모델](https://libredb.org/security/) — 인증, 자격 증명 저장, AI 데이터 흐름. 2026년 10월 23일 확인.',
          '[LibreDB 개인정보처리방침](https://libredb.org/privacy-policy/) — 웹사이트 데이터, 운영 주체, 보관 기간. 최종 업데이트 2026년 10월 19일.',
          '[LibreDB Platform 페이지](https://libredb.org/platform/) — 유료 거버넌스 계층과 무료 구간. 2026년 10월 23일 확인.',
          '[GitHub의 libredb/libredb-studio](https://github.com/libredb/libredb-studio) — README, 패키지 버전 1.0.0, 릴리스 파일. 2026년 10월 23일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Tabby 리뷰](/ko/power-local-llm/tabby-review) — 셀프 호스팅 코드 자동 완성 어시스턴트.',
          '[Continue.dev 리뷰](/ko/power-local-llm/continue-dev-review) — Ollama와 함께 쓰는 오픈소스 IDE 어시스턴트.',
          '[Cline 리뷰](/ko/power-local-llm/cline-review) — VS Code용 자율형 코딩 에이전트.',
          '[Aider 리뷰](/ko/power-local-llm/aider-review) — 로컬 또는 클라우드 모델로 하는 터미널 페어 프로그래밍.',
          '[코드 개발용 로컬 LLM 비교](/ko/power-local-llm/local-llm-code-development-compared) — 카테고리 비교.',
        ],
      },
    },
  },
}
