// Logseq Review: open-source, local-first outliner with an optional MCP server for AI tools
// Slug: logseq-review
// Companion to: logseq-copilot-review (a third-party AI plugin, NOT Logseq itself), obsidian-logseq-ai-plugins, siyuan-review, blinko-review
// Sources: github.com/logseq/logseq (README, Releases 2.0.2 of 2026-10-07, licence AGPL-3.0), logseq.com and its privacy policy
// (last updated 2023-07-28, read from the site's page script), github.com/logseq/docs db-version.md, the App Store listing id1601013908
// (iTunes lookup API), all checked 2026-10-24 — no hands-on testing. Sync prices are the Open Collective tiers quoted in the docs (USD), never converted.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/logseq-review-hero-en.webp',
    title: 'Logseq Review: Open-Source Outliner With Local-First Notes',
    seoTitle: 'Logseq Review: Local-First Notes and an Optional AI Server',
    intro: 'Logseq is an open-source outliner and knowledge base from [Logseq, Inc.](https://logseq.com) that keeps your notes on your own device. The app has no built-in AI model; the current database-version beta adds an optional MCP server so that an external AI client can read and edit a graph. This review is based on the project\'s website, GitHub repository, documentation and privacy policy, checked on 24 October 2026; PromptQuorum has not tested the app hands-on. The AI plugin [logseq-copilot](/power-local-llm/logseq-copilot-review) is a separate third-party project, not Logseq itself.',
    metaDescription: 'Logseq review: open-source notes app that keeps data on your device, with an optional MCP server for AI tools. Install, pricing, privacy, untested points.',
    twitterDescription: 'Logseq review: local-first, open-source notes with no built-in AI but an optional MCP server. What the sources confirm and what they do not.',
    audience: 'Note-takers who want to know whether Logseq keeps data on their device, how AI tools can connect to it and what the sources leave unconfirmed.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Logseq review',
    targetKeywords: [
      'logseq review',
      'logseq ai',
      'logseq mcp server',
      'logseq local-first notes',
      'logseq open source',
      'logseq database version beta',
      'logseq vs obsidian local ai',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Logseq (version 2.0.2, a beta of the database version) is an open-source outliner and knowledge base that stores your notes on your own device.** Its README warns that data loss is possible in this beta and recommends automated backups. Every statement here comes from the project\'s own website, repository and documentation.',
    quickAnswerTop: {
      en: {
        question: 'Does Logseq run AI models on my device?',
        answer: 'No. The sources describe no language model inside Logseq itself; AI arrives through an optional MCP server, switched on under Settings, AI, that lets an external client work with your graph. The docs name LM Studio, which runs models locally, and the cloud-based Gemini CLI as example clients.',
        bullets: [
          'The server listens on 127.0.0.1 and requires a bearer token that you create.',
          'Changes made through it can be undone in the app, and an edit can be previewed with a "pretend" option.',
          'The docs list editing pages, tags and properties and reading block children as still to do.',
          'Chat and slash-command AI comes from community plugins, which are not part of Logseq.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Quick Answer',
        anchor: 'quick-answer',
      },
      {
        label: 'What Is Logseq?',
        anchor: 'what-is-murmur',
      },
      {
        label: 'Get It',
        anchor: 'get-it',
      },
      {
        label: 'Features Confirmed by the Sources',
        anchor: 'key-features',
      },
      {
        label: 'Data Flow and Privacy',
        anchor: 'privacy',
      },
      {
        label: 'Who Should Use It',
        anchor: 'who-should-use',
      },
      {
        label: 'What We Could Not Verify',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Competitors and Alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Frequently Asked Questions',
        anchor: 'faq',
      },
      {
        label: 'Verdict',
        anchor: 'verdict',
      },
      {
        label: 'Sources',
        anchor: 'sources',
      },
      {
        label: 'Related Reading',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Logseq stores your notes locally, has no AI model of its own and offers an optional MCP server so that external AI clients can use your graph.',
          },
          {
            type: 'plain-terms',
            text: 'You write linked notes as nested bullet points that stay on your computer or phone; if you want an AI to help, you connect a separate AI tool to Logseq yourself.',
          },
        ],
        items: [
          'Maintenance: the latest release, 2.0.2, is dated 7 October 2026 and the repository was last pushed to on 23 October 2026, so no stale-project warning applies.',
          'License: AGPL-3.0, with the source on GitHub; the maker is Logseq, Inc.',
          'Cost: the app is free for personal use according to the website; Logseq Sync is a paid add-on that can also be self-hosted.',
          'Formats: older file graphs and newer database graphs; the 2.0 line works with the database version.',
          'Platforms: desktop apps for macOS, Windows and Linux, a web app, and mobile apps that are partly invite-only.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the project\'s website, repository, documentation and privacy policy, checked on 24 October 2026. PromptQuorum has not installed or loaded Logseq, so stability and the MCP workflow are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-logseq',
        title: 'What Is Logseq?',
        content: [
          '**Logseq is an outliner: you write notes as nested bullet blocks, link them with page references, and browse backlinks, with journals, tasks and queries on top.** It is made by Logseq, Inc., a Delaware corporation according to its privacy policy, and its source code is public.',
          '**The project now ships two kinds of graph.** File graphs, the older format, keep pages as Markdown or Org-mode files; the newer database ("DB") graphs, introduced with the version reviewed here, keep content in a database. The README calls the DB version a beta and the new mobile app and real-time sync alpha, states that data loss is possible, and recommends automated backups and a dedicated test graph before moving real work.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Get It',
        content: [
          '**Logseq is a free download for macOS, Windows and Linux from the GitHub Releases page, which hosts ready-made installers, so no terminal step is needed.**',
        ],
        columns: [
          'Option',
          'How to get it',
        ],
        rows: [
          {
            Option: 'Desktop',
            'How to get it': '[Logseq releases on GitHub](https://github.com/logseq/logseq/releases/latest): .dmg for macOS (Apple silicon and Intel), .exe installer for Windows (x64 and ARM64), AppImage for Linux (x86_64 and ARM64)',
          },
          {
            Option: 'Web app',
            'How to get it': '[app.logseq.com](https://app.logseq.com/), named in the 2.0.2 release notes',
          },
          {
            Option: 'iPhone and iPad',
            'How to get it': 'The DB-version iOS app is in TestFlight beta per the release notes ([join the beta](https://testflight.apple.com/join/eBcJ9Hpc)); an older App Store listing, [Logseq](https://apps.apple.com/us/app/logseq/id1601013908), shows version 0.10.9 from April 2024',
          },
          {
            Option: 'Android',
            'How to get it': 'An APK, Logseq-android-2.0.2.apk, is attached to the 2.0.2 release on GitHub',
          },
          {
            Option: 'Website',
            'How to get it': '[logseq.com](https://logseq.com)',
          },
          {
            Option: 'Privacy policy',
            'How to get it': '[logseq.com/privacy-policy](https://logseq.com/privacy-policy)',
          },
          {
            Option: 'Source code',
            'How to get it': '[github.com/logseq/logseq](https://github.com/logseq/logseq), AGPL-3.0',
          },
        ],
        note: 'Version reviewed: 2.0.2, released on 7 October 2026 and titled "Desktop APP 2.0.2 (Beta Testing)". The release before the 2.0 line was 0.10.15 of 1 December 2025. The README also offers a Linux install script run with curl, and the 2.0.2 notes list a fix for the Windows installer crash on Windows 11 24H2 and newer.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the Logseq README, documentation or release notes; none has been tested by PromptQuorum.**',
        ],
        items: [
          '**Outliner and database graphs.** Blocks and pages are "nodes" that can carry tags and properties, with built-in tags for tasks, journals, queries, flashcards, assets and templates, plus table views.',
          '**MCP server (optional).** Once enabled, an MCP client can search nodes, create and list pages, tags and properties, add blocks and edit block titles, with several changes batched in one call.',
          '**Sync and Publish.** Logseq Sync, which also supports real-time collaboration, is described as a paid feature included for Open Collective backers at $5 a month and sponsors at $15 a month; Publish shares read-only pages at [logseq.io](https://logseq.io). Both are optional.',
          '**Plugins and themes.** A plugin marketplace and a JavaScript plugin SDK extend the app; AI chat plugins are community-made, not part of Logseq.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**The privacy policy, last updated on 28 July 2023, says Logseq, Inc. collects identity, contact and transaction data that you provide, and technical data collected automatically through the app: device information, operating system, platform (Electron or browser) and release version.** It also defines usage data about how the services are used.',
          'The website says you own your data locally, and the policy\'s data tables do not list note content. Sync, Publish and the web app are the points where data would leave the device, under their own terms. The optional MCP server runs on localhost, but the AI client you connect decides where the data goes: a local one such as LM Studio keeps it on the machine, while a cloud-hosted client such as the Gemini CLI would send graph content to its provider.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maker\'s declarations, not audit results. The policy predates the 2.0 beta and its sync, MCP and mobile features, and PromptQuorum has not inspected the app\'s network traffic.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Note-takers who want an open-source outliner** with backlinks and daily journals and accept a beta.',
          '**People who already run a local model tool** such as LM Studio and want it to read or draft notes through MCP.',
          '**Existing file-graph users** who want to try the database version on a test graph first.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Reliability on large graphs.** PromptQuorum did not install or load the app, so speed, crashes and import quality are unknown.',
          '**Mobile status.** The docs call the Android app not yet open for alpha testing, yet an APK is attached to the 2.0.2 release; which mobile build is meant for general use is not clear.',
          '**File format.** The site advertises "Markdown files" so that you can open notes in other tools, while the DB-version docs describe database graphs backed up as SQLite; whether Markdown stays a primary format is not reconciled.',
          '**Terms of Use.** The privacy policy was read but not the full Terms of Use, so the conditions for Sync and Publish accounts are unchecked.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: [
          'App',
          'Platforms',
          'Price / license',
          'Key difference',
        ],
        rows: [
          {
            App: '[SiYuan](/power-local-llm/siyuan-review)',
            Platforms: 'macOS, Windows, Linux, iOS, Android',
            'Price / license': 'AGPL-3.0 / free core, paid sync',
            'Key difference': 'Block-based workspace with AI agent features that call a model provider you configure',
          },
          {
            App: '[Blinko](/power-local-llm/blinko-review)',
            Platforms: 'Self-hosted web app (Docker)',
            'Price / license': 'GPL-3.0 / free',
            'Key difference': 'Self-hosted notes with RAG search that calls an external LLM by default',
          },
        ],
        note: 'Only notes apps with a PromptQuorum review are listed; confirm each app\'s current price, license and platforms on its own site.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I host Sync and Publish myself?',
            a: 'Yes, per the docs: set a Sync Server URL or Publish Server URL under Settings, Advanced. Self-hosting Publish also needs a Cloudflare account.',
          },
          {
            q: 'Can I move an existing file-based graph to the database version?',
            a: 'The docs describe a File to DB graph importer in the three-dots menu under Import. A block with several queries, embeds or quotes imports only the first of each.',
          },
          {
            q: 'What does Sync encrypt?',
            a: 'The docs only say to set an encryption password once under Settings, Encryption before creating a synced graph; they do not describe the cryptography, and PromptQuorum has not checked for an independent audit.',
          },
          {
            q: 'Does Logseq have a command line?',
            a: 'For DB graphs, yes: a logseq CLI runs commands independently of the app, for example in CI, and comes with the nightly desktop build. It can also start the MCP server without the app.',
          },
          {
            q: 'How many plugins work with the database version?',
            a: 'The docs count more than 65 plugins that support DB graphs. AI plugins are community-made, so check each plugin\'s README for the model it calls; [logseq-copilot](/power-local-llm/logseq-copilot-review) is reviewed separately.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Logseq is an actively updated notes tool, open source and local-first, and its AI role is deliberately small: external clients connect through an optional server. Against that, the release covered here is a beta, mobile availability is uneven and PromptQuorum has not tested it hands-on. It suits note-takers who accept a beta and want to bring their own AI tools; anyone who needs a settled setup should check which release line they are installing before moving real notes.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Logseq on GitHub](https://github.com/logseq/logseq) — README, licence and repository activity, checked 24 October 2026.',
          '[Logseq 2.0.2 release](https://github.com/logseq/logseq/releases/tag/2.0.2) — release notes, installer files and publication date.',
          '[Logseq website](https://logseq.com) — product claims and download page, checked 24 October 2026.',
          '[Logseq privacy policy](https://logseq.com/privacy-policy) — data collected, last updated 28 July 2023.',
          '[Logseq DB version docs](https://github.com/logseq/docs/blob/master/db-version.md) — MCP server, Sync, Publish, plugins, importer and CLI.',
          '[Logseq on the App Store](https://apps.apple.com/us/app/logseq/id1601013908) — older iOS listing with its version and release date.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[logseq-copilot Review](/power-local-llm/logseq-copilot-review) — the third-party AI plugin for Logseq, reviewed separately.',
          '[Obsidian and Logseq AI Plugins, Compared](/power-local-llm/obsidian-logseq-ai-plugins) — AI plugin options across both notes apps.',
          '[Local LLM With Logseq and Joplin](/power-local-llm/local-llm-with-logseq-and-joplin) — running local models alongside these notes apps.',
          '[Local Knowledge and Retrieval Tools Compared](/power-local-llm/local-llm-knowledge-retrieval-compared) — the category comparison for notes integrations.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Logseq Review: Open-Source Outliner With Local-First Notes',
      description: 'Logseq review: local-first, open-source note-taking with an optional MCP server for AI tools. Install options, pricing, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/logseq-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: {
        '@type': 'Audience',
        audienceType: 'Note-takers evaluating an open-source, local-first notes app and its AI options',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Logseq',
        },
        {
          '@type': 'Thing',
          name: 'Note-taking software',
        },
        {
          '@type': 'Thing',
          name: 'Model Context Protocol',
        },
        {
          '@type': 'Thing',
          name: 'Local-first software',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/logseq-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://www.promptquorum.com/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Logseq Review',
          item: 'https://www.promptquorum.com/power-local-llm/logseq-review',
        },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/logseq-review-hero-de.webp',
    title: 'Logseq-Rezension: Quelloffener Outliner mit lokalen Notizen',
    seoTitle: 'Logseq-Rezension: Lokale Notizen und optionaler KI-Server',
    intro: 'Logseq ist ein quelloffener Outliner und Wissensspeicher von [Logseq, Inc.](https://logseq.com), der Ihre Notizen auf Ihrem eigenen Gerät hält. Die App enthält kein eigenes KI-Modell; die aktuelle Beta der Datenbankversion ergänzt einen optionalen MCP-Server, über den ein externer KI-Client einen Graphen lesen und bearbeiten kann. Diese Rezension stützt sich auf die Website des Projekts, das GitHub-Repository, die Dokumentation und die Datenschutzerklärung, geprüft am 24. Oktober 2026; PromptQuorum hat die App nicht selbst getestet. Das KI-Plugin [logseq-copilot](/de/power-local-llm/logseq-copilot-review) ist ein eigenständiges Drittprojekt und nicht Logseq selbst.',
    metaDescription: 'Logseq-Rezension: quelloffene Notiz-App mit Daten auf Ihrem Gerät und optionalem MCP-Server für KI-Werkzeuge. Installation, Preis, Datenschutz.',
    twitterDescription: 'Logseq-Rezension: lokale, quelloffene Notizen ohne eingebaute KI, aber mit optionalem MCP-Server. Was die Quellen bestätigen und was nicht.',
    audience: 'Notizen-Schreibende, die wissen möchten, ob Logseq Daten auf dem Gerät belässt, wie sich KI-Werkzeuge anbinden lassen und was die Quellen offenlassen.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Logseq Rezension',
    targetKeywords: [
      'logseq rezension',
      'logseq ki',
      'logseq mcp server',
      'logseq lokale notizen',
      'logseq open source',
      'logseq datenbankversion beta',
      'logseq vs obsidian lokale ki',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Logseq (Version 2.0.2, eine Beta der Datenbankversion) ist ein quelloffener Outliner und Wissensspeicher, der Ihre Notizen auf Ihrem eigenen Gerät ablegt.** Die README warnt, dass in dieser Beta Datenverlust möglich ist, und empfiehlt automatische Backups. Alle Aussagen hier stammen von der Website, dem Repository und der Dokumentation des Projekts.',
    quickAnswerTop: {
      de: {
        question: 'Führt Logseq KI-Modelle auf meinem Gerät aus?',
        answer: 'Nein. Die Quellen beschreiben kein Sprachmodell in Logseq selbst; KI kommt über einen optionalen MCP-Server ins Spiel, den Sie unter Settings, AI einschalten und der einem externen Client den Zugriff auf Ihren Graphen erlaubt. Die Dokumentation nennt als Beispiel-Clients LM Studio, das Modelle lokal ausführt, und die cloudbasierte Gemini CLI.',
        bullets: [
          'Der Server lauscht auf 127.0.0.1 und verlangt ein Bearer-Token, das Sie selbst erstellen.',
          'Änderungen darüber lassen sich in der App rückgängig machen, und eine Änderung kann mit der Option „pretend“ vorab simuliert werden.',
          'Das Bearbeiten von Seiten, Tags und Eigenschaften sowie das Lesen von Unterblöcken führt die Dokumentation noch als offene Aufgabe.',
          'Chat- und Slash-Befehl-KI stammt aus Community-Plugins, die nicht zu Logseq gehören.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Kurzantwort',
        anchor: 'quick-answer',
      },
      {
        label: 'Was ist Logseq?',
        anchor: 'what-is-murmur',
      },
      {
        label: 'Bezugsquelle',
        anchor: 'get-it',
      },
      {
        label: 'Von den Quellen bestätigte Funktionen',
        anchor: 'key-features',
      },
      {
        label: 'Datenfluss und Datenschutz',
        anchor: 'privacy',
      },
      {
        label: 'Für wen sich die App eignet',
        anchor: 'who-should-use',
      },
      {
        label: 'Was wir nicht überprüfen konnten',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Wettbewerber und Alternativen',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Häufig gestellte Fragen',
        anchor: 'faq',
      },
      {
        label: 'Fazit',
        anchor: 'verdict',
      },
      {
        label: 'Quellen',
        anchor: 'sources',
      },
      {
        label: 'Weiterführende Artikel',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Logseq speichert Ihre Notizen lokal, hat kein eigenes KI-Modell und bietet einen optionalen MCP-Server, über den externe KI-Clients Ihren Graphen nutzen können.',
          },
          {
            type: 'plain-terms',
            text: 'Sie schreiben verknüpfte Notizen als verschachtelte Aufzählungspunkte, die auf Ihrem Computer oder Telefon bleiben; soll eine KI helfen, verbinden Sie selbst ein separates KI-Werkzeug mit Logseq.',
          },
        ],
        items: [
          'Pflege: Die neueste Version 2.0.2 stammt vom 7. Oktober 2026, das Repository erhielt zuletzt am 23. Oktober 2026 einen Push; eine Warnung vor einem veralteten Projekt entfällt daher.',
          'Lizenz: AGPL-3.0, der Quellcode liegt auf GitHub; Hersteller ist Logseq, Inc.',
          'Kosten: Laut Website ist die App für den persönlichen Gebrauch kostenlos; Logseq Sync ist ein kostenpflichtiges Zusatzangebot, das sich auch selbst hosten lässt.',
          'Formate: ältere Dateigraphen und neuere Datenbankgraphen; die 2.0-Linie arbeitet mit der Datenbankversion.',
          'Plattformen: Desktop-Apps für macOS, Windows und Linux, eine Web-App sowie mobile Apps, die teils nur auf Einladung verfügbar sind.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf die Website, das Repository, die Dokumentation und die Datenschutzerklärung des Projekts, geprüft am 24. Oktober 2026. PromptQuorum hat Logseq weder installiert noch geladen; Stabilität und der MCP-Ablauf sind daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-logseq',
        title: 'Was ist Logseq?',
        content: [
          '**Logseq ist ein Outliner: Sie schreiben Notizen als verschachtelte Aufzählungsblöcke, verknüpfen sie über Seitenverweise und durchsuchen Rückverweise, ergänzt um Journale, Aufgaben und Abfragen.** Hersteller ist Logseq, Inc., laut Datenschutzerklärung eine Delaware-Gesellschaft; der Quellcode ist öffentlich.',
          '**Das Projekt liefert inzwischen zwei Arten von Graphen.** Dateigraphen, das ältere Format, halten Seiten als Markdown- oder Org-mode-Dateien; die neueren Datenbankgraphen („DB“), eingeführt mit der hier besprochenen Version, speichern Inhalte in einer Datenbank. Die README nennt die DB-Version eine Beta, die neue mobile App und die Echtzeit-Synchronisierung eine Alpha, erklärt Datenverlust für möglich und empfiehlt automatische Backups sowie einen eigenen Testgraphen, bevor Sie echte Arbeit übertragen.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Bezugsquelle',
        content: [
          '**Logseq ist ein kostenloser Download für macOS, Windows und Linux auf der GitHub-Releases-Seite, die fertige Installer bereitstellt; ein Terminal-Schritt ist nicht nötig.**',
        ],
        columns: [
          'Option',
          'Bezug',
        ],
        rows: [
          {
            Option: 'Desktop',
            Bezug: '[Logseq-Releases auf GitHub](https://github.com/logseq/logseq/releases/latest): .dmg für macOS (Apple Silicon und Intel), .exe-Installer für Windows (x64 und ARM64), AppImage für Linux (x86_64 und ARM64)',
          },
          {
            Option: 'Web-App',
            Bezug: '[app.logseq.com](https://app.logseq.com/), in den Release-Notes von 2.0.2 genannt',
          },
          {
            Option: 'iPhone und iPad',
            Bezug: 'Die iOS-App der DB-Version läuft laut Release-Notes als TestFlight-Beta ([Beta beitreten](https://testflight.apple.com/join/eBcJ9Hpc)); ein älterer App-Store-Eintrag, [Logseq](https://apps.apple.com/us/app/logseq/id1601013908), zeigt Version 0.10.9 vom April 2024',
          },
          {
            Option: 'Android',
            Bezug: 'Ein APK, Logseq-android-2.0.2.apk, hängt am Release 2.0.2 auf GitHub',
          },
          {
            Option: 'Website',
            Bezug: '[logseq.com](https://logseq.com)',
          },
          {
            Option: 'Datenschutzerklärung',
            Bezug: '[logseq.com/privacy-policy](https://logseq.com/privacy-policy)',
          },
          {
            Option: 'Quellcode',
            Bezug: '[github.com/logseq/logseq](https://github.com/logseq/logseq), AGPL-3.0',
          },
        ],
        note: 'Geprüfte Version: 2.0.2, veröffentlicht am 7. Oktober 2026 und betitelt „Desktop APP 2.0.2 (Beta Testing)“. Vor der 2.0-Linie erschien zuletzt 0.10.15 vom 1. Dezember 2025. Die README bietet außerdem ein Linux-Installationsskript, das per curl ausgeführt wird, und die Notizen zu 2.0.2 nennen einen Fix für den Absturz des Windows-Installers unter Windows 11 24H2 und neuer.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Alle folgenden Punkte stammen aus der Logseq-README, der Dokumentation oder den Release-Notes; PromptQuorum hat keinen davon getestet.**',
        ],
        items: [
          '**Outliner und Datenbankgraphen.** Blöcke und Seiten sind „Knoten“ mit Tags und Eigenschaften; eingebaute Tags gibt es für Aufgaben, Journale, Abfragen, Lernkarten, Dateianhänge und Vorlagen, dazu Tabellenansichten.',
          '**MCP-Server (optional).** Nach dem Einschalten kann ein MCP-Client Knoten suchen, Seiten, Tags und Eigenschaften anlegen und auflisten, Blöcke hinzufügen und Blocktitel bearbeiten; mehrere Änderungen lassen sich in einem Aufruf bündeln.',
          '**Sync und Publish.** Logseq Sync, das auch Zusammenarbeit in Echtzeit unterstützt, gilt als kostenpflichtige Funktion, die Open-Collective-Unterstützern für 5 US-Dollar im Monat und Sponsoren für 15 US-Dollar im Monat offensteht; Publish teilt schreibgeschützte Seiten unter [logseq.io](https://logseq.io). Beides ist optional.',
          '**Plugins und Themes.** Ein Plugin-Marktplatz und ein JavaScript-Plugin-SDK erweitern die App; KI-Chat-Plugins stammen aus der Community und gehören nicht zu Logseq.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Die Datenschutzerklärung, zuletzt aktualisiert am 28. Juli 2023, besagt, dass Logseq, Inc. Identitäts-, Kontakt- und Transaktionsdaten erhebt, die Sie angeben, sowie technische Daten, die die App automatisch erfasst: Geräteinformationen, Betriebssystem, Plattform (Electron oder Browser) und Release-Version.** Zudem definiert sie Nutzungsdaten darüber, wie die Dienste verwendet werden.',
          'Die Website sagt, Ihre Daten gehörten Ihnen lokal, und die Datentabellen der Erklärung führen keine Notizinhalte auf. Sync, Publish und die Web-App sind die Stellen, an denen Daten das Gerät verlassen würden, jeweils nach eigenen Bedingungen. Der optionale MCP-Server läuft auf localhost, aber der angebundene KI-Client entscheidet, wohin die Daten gehen: Ein lokaler wie LM Studio hält sie auf dem Rechner, ein cloudgehosteter Client wie die Gemini CLI würde Graph-Inhalte an seinen Anbieter senden.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Angaben des Herstellers, keine Prüfergebnisse. Die Erklärung ist älter als die 2.0-Beta mit ihren Sync-, MCP- und Mobilfunktionen, und PromptQuorum hat den Netzwerkverkehr der App nicht untersucht.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Notizen-Schreibende, die einen quelloffenen Outliner wollen,** mit Rückverweisen und täglichen Journalen und eine Beta akzeptieren.',
          '**Wer bereits ein lokales Modellwerkzeug nutzt,** etwa LM Studio, und es per MCP Notizen lesen oder entwerfen lassen möchte.',
          '**Bestehende Dateigraph-Nutzer,** die die Datenbankversion zunächst an einem Testgraphen ausprobieren wollen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Zuverlässigkeit bei großen Graphen.** PromptQuorum hat die App weder installiert noch geladen; Geschwindigkeit, Abstürze und Importqualität sind daher unbekannt.',
          '**Stand der mobilen Apps.** Die Dokumentation nennt die Android-App noch nicht für Alpha-Tests geöffnet, dennoch hängt ein APK am Release 2.0.2; welcher mobile Build für die allgemeine Nutzung gedacht ist, bleibt unklar.',
          '**Dateiformat.** Die Website wirbt mit „Markdown files“, damit sich Notizen in anderen Werkzeugen öffnen lassen, während die Dokumentation der DB-Version Datenbankgraphen beschreibt, die als SQLite gesichert werden; ob Markdown ein primäres Format bleibt, ist nicht geklärt.',
          '**Nutzungsbedingungen.** Die Datenschutzerklärung wurde gelesen, die vollständigen Nutzungsbedingungen nicht; die Bedingungen für Sync- und Publish-Konten sind daher ungeprüft.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: [
          'App',
          'Plattformen',
          'Preis / Lizenz',
          'Wichtigster Unterschied',
        ],
        rows: [
          {
            App: '[SiYuan](/de/power-local-llm/siyuan-review)',
            Plattformen: 'macOS, Windows, Linux, iOS, Android',
            'Preis / Lizenz': 'AGPL-3.0 / Kern kostenlos, Sync kostenpflichtig',
            'Wichtigster Unterschied': 'Blockbasierter Arbeitsbereich mit KI-Agentenfunktionen, die einen von Ihnen konfigurierten Modellanbieter aufrufen',
          },
          {
            App: '[Blinko](/de/power-local-llm/blinko-review)',
            Plattformen: 'Selbst gehostete Web-App (Docker)',
            'Preis / Lizenz': 'GPL-3.0 / kostenlos',
            'Wichtigster Unterschied': 'Selbst gehostete Notizen mit RAG-Suche, die standardmäßig ein externes LLM aufruft',
          },
        ],
        note: 'Aufgeführt sind nur Notiz-Apps mit einer PromptQuorum-Rezension; prüfen Sie Preis, Lizenz und Plattformen jeder App auf deren eigener Website.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich Sync und Publish selbst hosten?',
            a: 'Ja, laut Dokumentation: Tragen Sie unter Settings, Advanced eine Sync-Server-URL oder Publish-Server-URL ein. Für selbst gehostetes Publish brauchen Sie zusätzlich ein Cloudflare-Konto.',
          },
          {
            q: 'Kann ich einen bestehenden Dateigraphen in die Datenbankversion übernehmen?',
            a: 'Die Dokumentation beschreibt einen Importer „File to DB graph“ im Drei-Punkte-Menü unter Import. Ein Block mit mehreren Abfragen, Einbettungen oder Zitaten wird nur jeweils mit dem ersten Element importiert.',
          },
          {
            q: 'Was verschlüsselt Sync?',
            a: 'Die Dokumentation sagt nur, dass Sie vor dem Anlegen eines synchronisierten Graphen einmalig unter Settings, Encryption ein Verschlüsselungspasswort festlegen; die Kryptografie beschreibt sie nicht, und PromptQuorum hat nicht nach einem unabhängigen Audit gesucht.',
          },
          {
            q: 'Hat Logseq eine Befehlszeile?',
            a: 'Für DB-Graphen ja: Eine logseq-CLI führt Befehle unabhängig von der App aus, etwa in CI, und kommt mit dem Nightly-Desktop-Build. Sie kann auch den MCP-Server ohne die App starten.',
          },
          {
            q: 'Wie viele Plugins funktionieren mit der Datenbankversion?',
            a: 'Die Dokumentation zählt mehr als 65 Plugins mit DB-Unterstützung. KI-Plugins stammen aus der Community; prüfen Sie in der README jedes Plugins, welches Modell es aufruft. [logseq-copilot](/de/power-local-llm/logseq-copilot-review) wird separat besprochen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Logseq ist ein aktiv gepflegtes Notizwerkzeug, quelloffen und lokal ausgerichtet, und seine KI-Rolle bleibt bewusst klein: Externe Clients verbinden sich über einen optionalen Server. Dem stehen eine Beta in der hier besprochenen Version, ungleichmäßig verfügbare mobile Apps und fehlende eigene Tests gegenüber. Es passt zu Notizen-Schreibenden, die eine Beta akzeptieren und eigene KI-Werkzeuge mitbringen; wer ein gefestigtes Setup braucht, sollte vor dem Umzug echter Notizen prüfen, welche Release-Linie er installiert.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Logseq auf GitHub](https://github.com/logseq/logseq) — README, Lizenz und Repository-Aktivität, geprüft am 24. Oktober 2026.',
          '[Logseq-Release 2.0.2](https://github.com/logseq/logseq/releases/tag/2.0.2) — Release-Notes, Installer-Dateien und Veröffentlichungsdatum.',
          '[Logseq-Website](https://logseq.com) — Produktaussagen und Download-Seite, geprüft am 24. Oktober 2026.',
          '[Logseq-Datenschutzerklärung](https://logseq.com/privacy-policy) — erhobene Daten, zuletzt aktualisiert am 28. Juli 2023.',
          '[Logseq-Dokumentation zur DB-Version](https://github.com/logseq/docs/blob/master/db-version.md) — MCP-Server, Sync, Publish, Plugins, Importer und CLI.',
          '[Logseq im App Store](https://apps.apple.com/us/app/logseq/id1601013908) — älterer iOS-Eintrag mit Version und Veröffentlichungsdatum.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[logseq-copilot-Rezension](/de/power-local-llm/logseq-copilot-review) — das separat besprochene KI-Plugin eines Drittanbieters für Logseq.',
          '[Obsidian- und Logseq-KI-Plugins im Vergleich](/de/power-local-llm/obsidian-logseq-ai-plugins) — KI-Plugin-Optionen für beide Notiz-Apps.',
          '[Lokale LLMs mit Logseq und Joplin](/de/power-local-llm/local-llm-with-logseq-and-joplin) — lokale Modelle neben diesen Notiz-Apps betreiben.',
          '[Lokale Wissens- und Retrieval-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-knowledge-retrieval-compared) — der Kategorievergleich für Notiz-Integrationen.',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/logseq-review-hero-es.webp',
    title: 'Reseña de Logseq: esquema de código abierto y notas locales',
    seoTitle: 'Reseña de Logseq: notas locales y servidor de IA opcional',
    intro: 'Logseq es un organizador en esquema y base de conocimiento de código abierto de [Logseq, Inc.](https://logseq.com) que guarda tus notas en tu propio dispositivo. La app no incluye ningún modelo de IA; la beta actual de la versión con base de datos añade un servidor MCP opcional para que un cliente de IA externo pueda leer y editar un grafo. Esta reseña se basa en el sitio web del proyecto, su repositorio de GitHub, la documentación y la política de privacidad, consultados el 24 de octubre de 2026; PromptQuorum no ha probado la app en persona. El plugin de IA [logseq-copilot](/es/power-local-llm/logseq-copilot-review) es un proyecto independiente de terceros, no Logseq en sí.',
    metaDescription: 'Reseña de Logseq: app de notas de código abierto con datos en tu dispositivo y servidor MCP opcional para herramientas de IA. Instalación y precio.',
    twitterDescription: 'Reseña de Logseq: notas locales y de código abierto sin IA integrada, pero con servidor MCP opcional. Qué confirman las fuentes y qué no.',
    audience: 'Personas que toman notas y quieren saber si Logseq mantiene los datos en su dispositivo, cómo se conectan herramientas de IA y qué dejan sin confirmar las fuentes.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Logseq',
    targetKeywords: [
      'reseña logseq',
      'logseq ia',
      'logseq servidor mcp',
      'logseq notas locales',
      'logseq código abierto',
      'logseq versión base de datos beta',
      'logseq vs obsidian ia local',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Logseq (versión 2.0.2, una beta de la versión con base de datos) es un organizador en esquema y base de conocimiento de código abierto que guarda tus notas en tu propio dispositivo.** Su README advierte de que en esta beta es posible perder datos y recomienda copias de seguridad automáticas. Todo lo que se dice aquí procede del sitio web, el repositorio y la documentación del propio proyecto.',
    quickAnswerTop: {
      es: {
        question: '¿Ejecuta Logseq modelos de IA en mi dispositivo?',
        answer: 'No. Las fuentes no describen ningún modelo de lenguaje dentro de Logseq; la IA llega mediante un servidor MCP opcional, que se activa en Settings, AI y permite que un cliente externo trabaje con tu grafo. La documentación cita como clientes de ejemplo LM Studio, que ejecuta modelos en local, y la Gemini CLI, basada en la nube.',
        bullets: [
          'El servidor escucha en 127.0.0.1 y exige un token Bearer que creas tú.',
          'Los cambios hechos a través de él se pueden deshacer en la app, y una edición se puede previsualizar con la opción «pretend».',
          'La documentación lista como pendientes la edición de páginas, etiquetas y propiedades y la lectura de bloques hijos.',
          'La IA de chat y de comandos con barra procede de plugins de la comunidad, que no forman parte de Logseq.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Respuesta rápida',
        anchor: 'quick-answer',
      },
      {
        label: '¿Qué es Logseq?',
        anchor: 'what-is-murmur',
      },
      {
        label: 'Dónde conseguirlo',
        anchor: 'get-it',
      },
      {
        label: 'Funciones confirmadas por las fuentes',
        anchor: 'key-features',
      },
      {
        label: 'Flujo de datos y privacidad',
        anchor: 'privacy',
      },
      {
        label: 'Para quién es',
        anchor: 'who-should-use',
      },
      {
        label: 'Lo que no pudimos verificar',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Competidores y alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Preguntas frecuentes',
        anchor: 'faq',
      },
      {
        label: 'Veredicto',
        anchor: 'verdict',
      },
      {
        label: 'Fuentes',
        anchor: 'sources',
      },
      {
        label: 'Lecturas relacionadas',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Logseq guarda tus notas en local, no tiene un modelo de IA propio y ofrece un servidor MCP opcional para que clientes de IA externos usen tu grafo.',
          },
          {
            type: 'plain-terms',
            text: 'Escribes notas enlazadas como viñetas anidadas que se quedan en tu ordenador o teléfono; si quieres que una IA ayude, conectas tú mismo una herramienta de IA aparte a Logseq.',
          },
        ],
        items: [
          'Mantenimiento: la última versión, la 2.0.2, es del 7 de octubre de 2026 y el repositorio recibió su último push el 23 de octubre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado.',
          'Licencia: AGPL-3.0, con el código fuente en GitHub; el creador es Logseq, Inc.',
          'Coste: según el sitio web, la app es gratuita para uso personal; Logseq Sync es un complemento de pago que también se puede autoalojar.',
          'Formatos: grafos de archivos más antiguos y grafos de base de datos más recientes; la línea 2.0 trabaja con la versión de base de datos.',
          'Plataformas: apps de escritorio para macOS, Windows y Linux, una app web y apps móviles que en parte son solo por invitación.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web, el repositorio, la documentación y la política de privacidad del proyecto, consultados el 24 de octubre de 2026. PromptQuorum no ha instalado ni cargado Logseq, así que la estabilidad y el flujo con MCP no se evalúan.',
          },
        ],
      },
      overview: {
        id: 'what-is-logseq',
        title: '¿Qué es Logseq?',
        content: [
          '**Logseq es un organizador en esquema: escribes notas como bloques de viñetas anidados, los enlazas con referencias de página y consultas los enlaces entrantes, con diarios, tareas y consultas encima.** Lo desarrolla Logseq, Inc., una sociedad de Delaware según su política de privacidad, y su código fuente es público.',
          '**El proyecto ofrece ahora dos tipos de grafo.** Los grafos de archivos, el formato anterior, guardan las páginas como archivos Markdown u Org-mode; los grafos de base de datos («DB»), introducidos con la versión que se reseña aquí, guardan el contenido en una base de datos. El README califica la versión DB de beta y la nueva app móvil y la sincronización en tiempo real de alfa, afirma que es posible perder datos y recomienda copias de seguridad automáticas y un grafo de prueba propio antes de pasar trabajo real.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Dónde conseguirlo',
        content: [
          '**Logseq se descarga gratis para macOS, Windows y Linux desde la página de Releases de GitHub, que ofrece instaladores listos, así que no hace falta usar la terminal.**',
        ],
        columns: [
          'Opción',
          'Cómo conseguirlo',
        ],
        rows: [
          {
            'Opción': 'Escritorio',
            'Cómo conseguirlo': '[Releases de Logseq en GitHub](https://github.com/logseq/logseq/releases/latest): .dmg para macOS (Apple silicon e Intel), instalador .exe para Windows (x64 y ARM64), AppImage para Linux (x86_64 y ARM64)',
          },
          {
            'Opción': 'App web',
            'Cómo conseguirlo': '[app.logseq.com](https://app.logseq.com/), citada en las notas de la versión 2.0.2',
          },
          {
            'Opción': 'iPhone y iPad',
            'Cómo conseguirlo': 'Según las notas de la versión, la app de iOS de la versión DB está en beta por TestFlight ([unirse a la beta](https://testflight.apple.com/join/eBcJ9Hpc)); una ficha antigua de la App Store, [Logseq](https://apps.apple.com/us/app/logseq/id1601013908), muestra la versión 0.10.9 de abril de 2024',
          },
          {
            'Opción': 'Android',
            'Cómo conseguirlo': 'Un APK, Logseq-android-2.0.2.apk, está adjunto a la versión 2.0.2 en GitHub',
          },
          {
            'Opción': 'Sitio web',
            'Cómo conseguirlo': '[logseq.com](https://logseq.com)',
          },
          {
            'Opción': 'Política de privacidad',
            'Cómo conseguirlo': '[logseq.com/privacy-policy](https://logseq.com/privacy-policy)',
          },
          {
            'Opción': 'Código fuente',
            'Cómo conseguirlo': '[github.com/logseq/logseq](https://github.com/logseq/logseq), AGPL-3.0',
          },
        ],
        note: 'Versión analizada: 2.0.2, publicada el 7 de octubre de 2026 y titulada «Desktop APP 2.0.2 (Beta Testing)». La versión anterior a la línea 2.0 fue la 0.10.15, del 1 de diciembre de 2025. El README ofrece además un script de instalación para Linux que se ejecuta con curl, y las notas de la 2.0.2 recogen una corrección del fallo del instalador de Windows en Windows 11 24H2 y posteriores.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Todo lo siguiente procede del README, la documentación o las notas de versión de Logseq; PromptQuorum no ha probado nada de ello.**',
        ],
        items: [
          '**Organizador en esquema y grafos de base de datos.** Los bloques y las páginas son «nodos» que pueden llevar etiquetas y propiedades, con etiquetas integradas para tareas, diarios, consultas, tarjetas de estudio, archivos adjuntos y plantillas, además de vistas de tabla.',
          '**Servidor MCP (opcional).** Una vez activado, un cliente MCP puede buscar nodos, crear y listar páginas, etiquetas y propiedades, añadir bloques y editar títulos de bloque, agrupando varios cambios en una sola llamada.',
          '**Sync y Publish.** Logseq Sync, que también admite colaboración en tiempo real, se describe como una función de pago incluida para los colaboradores de Open Collective a 5 dólares al mes y para los patrocinadores a 15 dólares al mes; Publish comparte páginas de solo lectura en [logseq.io](https://logseq.io). Ambos son opcionales.',
          '**Plugins y temas.** Un mercado de plugins y un SDK de plugins en JavaScript amplían la app; los plugins de chat con IA los crea la comunidad y no forman parte de Logseq.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**La política de privacidad, actualizada por última vez el 28 de julio de 2023, indica que Logseq, Inc. recopila datos de identidad, contacto y transacciones que tú facilitas, y datos técnicos que recoge automáticamente la app: información del dispositivo, sistema operativo, plataforma (Electron o navegador) y versión.** También define datos de uso sobre cómo se utilizan los servicios.',
          'El sitio web afirma que los datos son tuyos en local, y las tablas de datos de la política no incluyen el contenido de las notas. Sync, Publish y la app web son los puntos donde los datos saldrían del dispositivo, con sus propias condiciones. El servidor MCP opcional se ejecuta en localhost, pero el cliente de IA que conectes decide adónde van los datos: uno local como LM Studio los mantiene en el equipo, mientras que un cliente alojado en la nube como la Gemini CLI enviaría el contenido del grafo a su proveedor.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del fabricante, no resultados de una auditoría. La política es anterior a la beta 2.0 y a sus funciones de sincronización, MCP y móvil, y PromptQuorum no ha inspeccionado el tráfico de red de la app.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Quienes toman notas y quieren un organizador en esquema de código abierto,** con enlaces entrantes y diarios, y aceptan una beta.',
          '**Quienes ya usan una herramienta de modelos locales,** como LM Studio, y quieren que lea o redacte notas mediante MCP.',
          '**Usuarios actuales de grafos de archivos** que quieren probar antes la versión de base de datos en un grafo de prueba.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Fiabilidad con grafos grandes.** PromptQuorum no instaló ni cargó la app, así que se desconocen la velocidad, los fallos y la calidad de la importación.',
          '**Estado de las apps móviles.** La documentación dice que la app de Android aún no está abierta a pruebas alfa, pero hay un APK adjunto a la versión 2.0.2; no queda claro qué compilación móvil está pensada para el público general.',
          '**Formato de archivo.** El sitio anuncia «Markdown files» para abrir las notas en otras herramientas, mientras que la documentación de la versión DB describe grafos de base de datos con copias en SQLite; no se concilia si Markdown sigue siendo un formato principal.',
          '**Términos de uso.** Se leyó la política de privacidad pero no los términos de uso completos, así que las condiciones de las cuentas de Sync y Publish quedan sin comprobar.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: [
          'App',
          'Plataformas',
          'Precio / licencia',
          'Diferencia clave',
        ],
        rows: [
          {
            App: '[SiYuan](/es/power-local-llm/siyuan-review)',
            Plataformas: 'macOS, Windows, Linux, iOS, Android',
            'Precio / licencia': 'AGPL-3.0 / núcleo gratis, sincronización de pago',
            'Diferencia clave': 'Espacio de trabajo por bloques con funciones de agente de IA que llaman a un proveedor de modelos que configuras',
          },
          {
            App: '[Blinko](/es/power-local-llm/blinko-review)',
            Plataformas: 'App web autoalojada (Docker)',
            'Precio / licencia': 'GPL-3.0 / gratis',
            'Diferencia clave': 'Notas autoalojadas con búsqueda RAG que por defecto llama a un LLM externo',
          },
        ],
        note: 'Solo se incluyen apps de notas con una reseña de PromptQuorum; comprueba el precio, la licencia y las plataformas actuales de cada app en su propio sitio.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo alojar Sync y Publish por mi cuenta?',
            a: 'Sí, según la documentación: indica una URL de servidor de Sync o de Publish en Settings, Advanced. Para alojar Publish por tu cuenta necesitas además una cuenta de Cloudflare.',
          },
          {
            q: '¿Puedo pasar un grafo de archivos existente a la versión de base de datos?',
            a: 'La documentación describe un importador «File to DB graph» en el menú de tres puntos, en Import. Un bloque con varias consultas, inserciones o citas solo importa el primero de cada tipo.',
          },
          {
            q: '¿Qué cifra Sync?',
            a: 'La documentación solo indica que, antes de crear un grafo sincronizado, se fije una vez una contraseña de cifrado en Settings, Encryption; no describe la criptografía y PromptQuorum no ha comprobado si existe una auditoría independiente.',
          },
          {
            q: '¿Tiene Logseq una línea de comandos?',
            a: 'Para los grafos DB, sí: una CLI de logseq ejecuta comandos con independencia de la app, por ejemplo en CI, y se incluye con la compilación nightly de escritorio. También puede iniciar el servidor MCP sin la app.',
          },
          {
            q: '¿Cuántos plugins funcionan con la versión de base de datos?',
            a: 'La documentación cuenta más de 65 plugins compatibles con grafos DB. Los plugins de IA los crea la comunidad, así que revisa el README de cada uno para saber a qué modelo llama; [logseq-copilot](/es/power-local-llm/logseq-copilot-review) se reseña por separado.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Logseq es una herramienta de notas con actualizaciones activas, de código abierto y local, y su papel en IA es deliberadamente pequeño: los clientes externos se conectan a través de un servidor opcional. Enfrente están una versión beta, una disponibilidad móvil desigual y la falta de pruebas propias. Encaja con quienes aceptan una beta y traen sus propias herramientas de IA; quien necesite una configuración asentada debería comprobar qué línea de versiones instala antes de trasladar notas reales.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Logseq en GitHub](https://github.com/logseq/logseq) — README, licencia y actividad del repositorio, consultados el 24 de octubre de 2026.',
          '[Versión 2.0.2 de Logseq](https://github.com/logseq/logseq/releases/tag/2.0.2) — notas de la versión, archivos de instalación y fecha de publicación.',
          '[Sitio web de Logseq](https://logseq.com) — afirmaciones del producto y página de descarga, consultados el 24 de octubre de 2026.',
          '[Política de privacidad de Logseq](https://logseq.com/privacy-policy) — datos recopilados, actualizada por última vez el 28 de julio de 2023.',
          '[Documentación de la versión DB de Logseq](https://github.com/logseq/docs/blob/master/db-version.md) — servidor MCP, Sync, Publish, plugins, importador y CLI.',
          '[Logseq en la App Store](https://apps.apple.com/us/app/logseq/id1601013908) — ficha antigua de iOS con su versión y fecha de publicación.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de logseq-copilot](/es/power-local-llm/logseq-copilot-review) — el plugin de IA de terceros para Logseq, reseñado por separado.',
          '[Plugins de IA para Obsidian y Logseq, comparados](/es/power-local-llm/obsidian-logseq-ai-plugins) — opciones de plugins de IA para ambas apps de notas.',
          '[LLM local con Logseq y Joplin](/es/power-local-llm/local-llm-with-logseq-and-joplin) — usar modelos locales junto a estas apps de notas.',
          '[Herramientas locales de conocimiento y recuperación comparadas](/es/power-local-llm/local-llm-knowledge-retrieval-compared) — la comparativa de categoría para integraciones de notas.',
          '[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/logseq-review-hero-fr.webp',
    title: 'Test de Logseq : outliner open source et notes locales',
    seoTitle: 'Test de Logseq : notes locales et serveur IA optionnel',
    intro: 'Logseq est un outliner et une base de connaissances open source de [Logseq, Inc.](https://logseq.com) qui garde vos notes sur votre propre appareil. L’application n’embarque aucun modèle d’IA ; la bêta actuelle de la version à base de données ajoute un serveur MCP optionnel qui permet à un client d’IA externe de lire et de modifier un graphe. Ce test s’appuie sur le site du projet, son dépôt GitHub, sa documentation et sa politique de confidentialité, consultés le 24 octobre 2026 ; PromptQuorum n’a pas testé l’application en pratique. Le plugin d’IA [logseq-copilot](/fr/power-local-llm/logseq-copilot-review) est un projet tiers distinct, et non Logseq lui-même.',
    metaDescription: 'Test de Logseq : application de notes open source qui garde les données sur votre appareil, avec serveur MCP optionnel pour outils d’IA. Prix.',
    twitterDescription: 'Test de Logseq : notes locales et open source sans IA intégrée, mais avec un serveur MCP optionnel. Ce que les sources confirment ou non.',
    audience: 'Les personnes qui prennent des notes et veulent savoir si Logseq garde les données sur l’appareil, comment y brancher des outils d’IA et ce que les sources laissent sans réponse.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test Logseq',
    targetKeywords: [
      'test logseq',
      'logseq ia',
      'logseq serveur mcp',
      'logseq notes locales',
      'logseq open source',
      'logseq version base de données bêta',
      'logseq vs obsidian ia locale',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Logseq (version 2.0.2, une bêta de la version à base de données) est un outliner et une base de connaissances open source qui stocke vos notes sur votre propre appareil.** Son README avertit qu’une perte de données est possible dans cette bêta et recommande des sauvegardes automatiques. Toutes les affirmations ci-dessous proviennent du site, du dépôt et de la documentation du projet.',
    quickAnswerTop: {
      fr: {
        question: 'Logseq exécute-t-il des modèles d’IA sur mon appareil ?',
        answer: 'Non. Les sources ne décrivent aucun modèle de langage dans Logseq lui-même ; l’IA passe par un serveur MCP optionnel, activé dans Settings, AI, qui permet à un client externe de travailler avec votre graphe. La documentation cite en exemple LM Studio, qui exécute des modèles en local, et la Gemini CLI, hébergée dans le cloud.',
        bullets: [
          'Le serveur écoute sur 127.0.0.1 et exige un jeton Bearer que vous créez vous-même.',
          'Les modifications faites par ce biais peuvent être annulées dans l’application, et une modification peut être simulée avec l’option « pretend ».',
          'La documentation range l’édition des pages, des tags et des propriétés ainsi que la lecture des blocs enfants parmi les tâches restantes.',
          'L’IA de chat et de commandes slash vient de plugins communautaires, qui ne font pas partie de Logseq.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Réponse rapide',
        anchor: 'quick-answer',
      },
      {
        label: 'Qu’est-ce que Logseq ?',
        anchor: 'what-is-murmur',
      },
      {
        label: 'Où l’obtenir',
        anchor: 'get-it',
      },
      {
        label: 'Fonctions confirmées par les sources',
        anchor: 'key-features',
      },
      {
        label: 'Flux de données et confidentialité',
        anchor: 'privacy',
      },
      {
        label: 'À qui elle s’adresse',
        anchor: 'who-should-use',
      },
      {
        label: 'Ce que nous n’avons pas pu vérifier',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Concurrents et alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Questions fréquentes',
        anchor: 'faq',
      },
      {
        label: 'Verdict',
        anchor: 'verdict',
      },
      {
        label: 'Sources',
        anchor: 'sources',
      },
      {
        label: 'Lectures associées',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Logseq stocke vos notes en local, n’a pas de modèle d’IA propre et propose un serveur MCP optionnel pour que des clients d’IA externes utilisent votre graphe.',
          },
          {
            type: 'plain-terms',
            text: 'Vous écrivez des notes reliées sous forme de puces imbriquées qui restent sur votre ordinateur ou votre téléphone ; pour obtenir l’aide d’une IA, vous connectez vous-même un outil d’IA distinct à Logseq.',
          },
        ],
        items: [
          'Maintenance : la dernière version, la 2.0.2, date du 7 octobre 2026 et le dépôt a reçu son dernier push le 23 octobre 2026 ; aucun avertissement de projet abandonné ne s’applique donc.',
          'Licence : AGPL-3.0, code source sur GitHub ; l’éditeur est Logseq, Inc.',
          'Coût : selon le site, l’application est gratuite pour un usage personnel ; Logseq Sync est un module payant qui peut aussi être auto-hébergé.',
          'Formats : graphes de fichiers plus anciens et graphes de base de données plus récents ; la série 2.0 fonctionne avec la version à base de données.',
          'Plateformes : applications de bureau pour macOS, Windows et Linux, une application web et des applications mobiles en partie sur invitation uniquement.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s’appuie sur le site, le dépôt, la documentation et la politique de confidentialité du projet, consultés le 24 octobre 2026. PromptQuorum n’a ni installé ni chargé Logseq ; la stabilité et le fonctionnement avec MCP ne sont donc pas évalués.',
          },
        ],
      },
      overview: {
        id: 'what-is-logseq',
        title: 'Qu’est-ce que Logseq ?',
        content: [
          '**Logseq est un outliner : vous écrivez des notes sous forme de blocs à puces imbriqués, vous les reliez par des références de page et vous parcourez les rétroliens, avec en plus des journaux, des tâches et des requêtes.** Il est édité par Logseq, Inc., une société du Delaware selon sa politique de confidentialité, et son code source est public.',
          '**Le projet propose désormais deux types de graphes.** Les graphes de fichiers, le format historique, conservent les pages sous forme de fichiers Markdown ou Org-mode ; les graphes de base de données (« DB »), introduits avec la version testée ici, stockent le contenu dans une base de données. Le README qualifie la version DB de bêta, la nouvelle application mobile et la synchronisation en temps réel d’alpha, indique qu’une perte de données est possible et recommande des sauvegardes automatiques et un graphe de test dédié avant d’y déplacer un vrai travail.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Où l’obtenir',
        content: [
          '**Logseq se télécharge gratuitement pour macOS, Windows et Linux depuis la page Releases de GitHub, qui propose des installateurs prêts à l’emploi ; aucune étape dans le terminal n’est nécessaire.**',
        ],
        columns: [
          'Option',
          'Comment l’obtenir',
        ],
        rows: [
          {
            Option: 'Bureau',
            'Comment l’obtenir': '[Releases de Logseq sur GitHub](https://github.com/logseq/logseq/releases/latest) : .dmg pour macOS (Apple silicon et Intel), installateur .exe pour Windows (x64 et ARM64), AppImage pour Linux (x86_64 et ARM64)',
          },
          {
            Option: 'Application web',
            'Comment l’obtenir': '[app.logseq.com](https://app.logseq.com/), mentionnée dans les notes de version 2.0.2',
          },
          {
            Option: 'iPhone et iPad',
            'Comment l’obtenir': 'Selon les notes de version, l’application iOS de la version DB est en bêta TestFlight ([rejoindre la bêta](https://testflight.apple.com/join/eBcJ9Hpc)) ; une ancienne fiche de l’App Store, [Logseq](https://apps.apple.com/us/app/logseq/id1601013908), affiche la version 0.10.9 d’avril 2024',
          },
          {
            Option: 'Android',
            'Comment l’obtenir': 'Un APK, Logseq-android-2.0.2.apk, est joint à la version 2.0.2 sur GitHub',
          },
          {
            Option: 'Site web',
            'Comment l’obtenir': '[logseq.com](https://logseq.com)',
          },
          {
            Option: 'Confidentialité',
            'Comment l’obtenir': '[logseq.com/privacy-policy](https://logseq.com/privacy-policy)',
          },
          {
            Option: 'Code source',
            'Comment l’obtenir': '[github.com/logseq/logseq](https://github.com/logseq/logseq), AGPL-3.0',
          },
        ],
        note: 'Version testée : 2.0.2, publiée le 7 octobre 2026 et intitulée « Desktop APP 2.0.2 (Beta Testing) ». La version précédant la série 2.0 était la 0.10.15 du 1er décembre 2025. Le README propose aussi un script d’installation Linux exécuté avec curl, et les notes de la 2.0.2 mentionnent un correctif du plantage de l’installateur Windows sous Windows 11 24H2 et versions ultérieures.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Tous les points ci-dessous proviennent du README, de la documentation ou des notes de version de Logseq ; PromptQuorum n’en a testé aucun.**',
        ],
        items: [
          '**Outliner et graphes de base de données.** Les blocs et les pages sont des « nœuds » pouvant porter des tags et des propriétés, avec des tags intégrés pour les tâches, les journaux, les requêtes, les cartes mémoire, les fichiers joints et les modèles, ainsi que des vues en tableau.',
          '**Serveur MCP (optionnel).** Une fois activé, un client MCP peut rechercher des nœuds, créer et lister des pages, des tags et des propriétés, ajouter des blocs et modifier des titres de blocs, plusieurs modifications pouvant être regroupées en un seul appel.',
          '**Sync et Publish.** Logseq Sync, qui prend aussi en charge la collaboration en temps réel, est décrit comme une fonction payante incluse pour les contributeurs Open Collective à 5 dollars par mois et pour les sponsors à 15 dollars par mois ; Publish partage des pages en lecture seule sur [logseq.io](https://logseq.io). Les deux sont optionnels.',
          '**Plugins et thèmes.** Une place de marché de plugins et un SDK JavaScript étendent l’application ; les plugins de chat IA viennent de la communauté et ne font pas partie de Logseq.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**La politique de confidentialité, mise à jour pour la dernière fois le 28 juillet 2023, indique que Logseq, Inc. collecte des données d’identité, de contact et de transaction que vous fournissez, ainsi que des données techniques recueillies automatiquement par l’application : informations sur l’appareil, système d’exploitation, plateforme (Electron ou navigateur) et version.** Elle définit aussi des données d’usage sur la manière dont les services sont utilisés.',
          'Le site affirme que vos données restent à vous en local, et les tableaux de données de la politique ne mentionnent pas le contenu des notes. Sync, Publish et l’application web sont les points où des données quitteraient l’appareil, selon leurs propres conditions. Le serveur MCP optionnel tourne sur localhost, mais c’est le client d’IA connecté qui décide où vont les données : un client local comme LM Studio les garde sur la machine, tandis qu’un client hébergé dans le cloud comme la Gemini CLI enverrait le contenu du graphe à son fournisseur.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations de l’éditeur, pas des résultats d’audit. La politique est antérieure à la bêta 2.0 et à ses fonctions de synchronisation, de MCP et de mobile, et PromptQuorum n’a pas inspecté le trafic réseau de l’application.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle s’adresse',
        items: [
          '**Les personnes qui prennent des notes et veulent un outliner open source,** avec rétroliens et journaux quotidiens, et acceptent une bêta.',
          '**Ceux qui utilisent déjà un outil de modèles locaux** comme LM Studio et veulent qu’il lise ou rédige des notes via MCP.',
          '**Les utilisateurs actuels de graphes de fichiers** qui souhaitent d’abord essayer la version à base de données sur un graphe de test.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Fiabilité sur de gros graphes.** PromptQuorum n’a ni installé ni chargé l’application ; la vitesse, les plantages et la qualité de l’import sont donc inconnus.',
          '**Statut du mobile.** La documentation dit que l’application Android n’est pas encore ouverte aux tests alpha, mais un APK est joint à la version 2.0.2 ; on ne sait pas quelle version mobile est destinée au grand public.',
          '**Format des fichiers.** Le site met en avant des « Markdown files » pour ouvrir ses notes dans d’autres outils, alors que la documentation de la version DB décrit des graphes de base de données sauvegardés en SQLite ; la place de Markdown comme format principal n’est pas clarifiée.',
          '**Conditions d’utilisation.** La politique de confidentialité a été lue, mais pas l’intégralité des conditions d’utilisation ; les conditions des comptes Sync et Publish ne sont donc pas vérifiées.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: [
          'Application',
          'Plateformes',
          'Prix / licence',
          'Différence clé',
        ],
        rows: [
          {
            Application: '[SiYuan](/fr/power-local-llm/siyuan-review)',
            Plateformes: 'macOS, Windows, Linux, iOS, Android',
            'Prix / licence': 'AGPL-3.0 / noyau gratuit, synchronisation payante',
            'Différence clé': 'Espace de travail par blocs avec des fonctions d’agent IA qui appellent un fournisseur de modèles que vous configurez',
          },
          {
            Application: '[Blinko](/fr/power-local-llm/blinko-review)',
            Plateformes: 'Application web auto-hébergée (Docker)',
            'Prix / licence': 'GPL-3.0 / gratuit',
            'Différence clé': 'Notes auto-hébergées avec recherche RAG qui appelle par défaut un LLM externe',
          },
        ],
        note: 'Seules les applications de notes ayant un test PromptQuorum figurent ici ; vérifiez le prix, la licence et les plateformes actuels de chaque application sur son propre site.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Puis-je héberger moi-même Sync et Publish ?',
            a: 'Oui, d’après la documentation : indiquez une URL de serveur Sync ou Publish dans Settings, Advanced. L’auto-hébergement de Publish demande en plus un compte Cloudflare.',
          },
          {
            q: 'Puis-je migrer un graphe de fichiers existant vers la version à base de données ?',
            a: 'La documentation décrit un importateur « File to DB graph » dans le menu à trois points, sous Import. Un bloc contenant plusieurs requêtes, intégrations ou citations n’importe que le premier élément de chaque type.',
          },
          {
            q: 'Que chiffre Sync ?',
            a: 'La documentation indique seulement de définir une fois un mot de passe de chiffrement dans Settings, Encryption avant de créer un graphe synchronisé ; elle ne décrit pas la cryptographie, et PromptQuorum n’a pas cherché d’audit indépendant.',
          },
          {
            q: 'Logseq a-t-il une ligne de commande ?',
            a: 'Pour les graphes DB, oui : une CLI logseq exécute des commandes indépendamment de l’application, par exemple en CI, et vient avec la version de bureau nightly. Elle peut aussi démarrer le serveur MCP sans l’application.',
          },
          {
            q: 'Combien de plugins fonctionnent avec la version à base de données ?',
            a: 'La documentation compte plus de 65 plugins compatibles avec les graphes DB. Les plugins d’IA viennent de la communauté ; consultez le README de chacun pour savoir quel modèle il appelle. [logseq-copilot](/fr/power-local-llm/logseq-copilot-review) fait l’objet d’un test séparé.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Logseq est un outil de notes activement mis à jour, open source et local, et son rôle en matière d’IA reste volontairement modeste : des clients externes s’y connectent via un serveur optionnel. En face, la version testée est une bêta, la disponibilité mobile est inégale et rien n’a été essayé en pratique. Il convient à ceux qui acceptent une bêta et apportent leurs propres outils d’IA ; qui a besoin d’une configuration stabilisée devrait vérifier quelle série de versions il installe avant d’y déplacer de vraies notes.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Logseq sur GitHub](https://github.com/logseq/logseq) — README, licence et activité du dépôt, consultés le 24 octobre 2026.',
          '[Version 2.0.2 de Logseq](https://github.com/logseq/logseq/releases/tag/2.0.2) — notes de version, fichiers d’installation et date de publication.',
          '[Site web de Logseq](https://logseq.com) — affirmations sur le produit et page de téléchargement, consultés le 24 octobre 2026.',
          '[Politique de confidentialité de Logseq](https://logseq.com/privacy-policy) — données collectées, mise à jour pour la dernière fois le 28 juillet 2023.',
          '[Documentation de la version DB de Logseq](https://github.com/logseq/docs/blob/master/db-version.md) — serveur MCP, Sync, Publish, plugins, importateur et CLI.',
          '[Logseq sur l’App Store](https://apps.apple.com/us/app/logseq/id1601013908) — ancienne fiche iOS avec sa version et sa date de publication.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de logseq-copilot](/fr/power-local-llm/logseq-copilot-review) — le plugin d’IA tiers pour Logseq, testé séparément.',
          '[Plugins d’IA pour Obsidian et Logseq : comparatif](/fr/power-local-llm/obsidian-logseq-ai-plugins) — les options de plugins d’IA pour les deux applications de notes.',
          '[LLM local avec Logseq et Joplin](/fr/power-local-llm/local-llm-with-logseq-and-joplin) — faire tourner des modèles locaux avec ces applications de notes.',
          '[Outils locaux de connaissance et de recherche : comparatif](/fr/power-local-llm/local-llm-knowledge-retrieval-compared) — le comparatif de catégorie pour les intégrations de notes.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/logseq-review-hero-ja.webp',
    title: 'Logseqレビュー：ローカル保存のオープンソース・アウトライナー',
    seoTitle: 'Logseqレビュー：ローカル保存ノートと任意のAIサーバー',
    intro: 'Logseqは、[Logseq, Inc.](https://logseq.com)が開発するオープンソースのアウトライナー兼ナレッジベースで、ノートを自分の端末に保存します。アプリ自体にはAIモデルが含まれません。現行のデータベース版ベータには任意のMCPサーバーが加わり、外部のAIクライアントからグラフを読み書きできます。このレビューは、2026年10月24日に確認したプロジェクトの公式サイト、GitHubリポジトリ、ドキュメント、プライバシーポリシーに基づきます。PromptQuorumは実機でのテストを行っていません。AIプラグインの[logseq-copilot](/ja/power-local-llm/logseq-copilot-review)は第三者の別プロジェクトで、Logseq本体ではありません。',
    metaDescription: 'Logseqレビュー：データを端末に置くオープンソースのノートアプリ。AIツール向けの任意MCPサーバーを備えます。導入方法、料金、プライバシー、未検証の点を解説します。',
    twitterDescription: 'Logseqレビュー：AI非搭載のローカル保存オープンソースノート。任意のMCPサーバーあり。情報源で確認できた点とできなかった点。',
    audience: 'Logseqがデータを端末に残すのか、AIツールをどう接続できるのか、情報源がどこまで確認できていないのかを知りたいノートユーザー向けです。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'logseq レビュー',
    targetKeywords: [
      'logseq レビュー',
      'logseq ai',
      'logseq mcp サーバー',
      'logseq ローカル ノート',
      'logseq オープンソース',
      'logseq データベース版 ベータ',
      'logseq obsidian ローカルai 比較',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Logseq（バージョン2.0.2、データベース版のベータ）は、ノートを自分の端末に保存するオープンソースのアウトライナー兼ナレッジベースです。**READMEは、このベータではデータ消失の可能性があるとして、自動バックアップを推奨しています。本記事の記載はすべて、プロジェクト自身のサイト、リポジトリ、ドキュメントに基づきます。',
    quickAnswerTop: {
      ja: {
        question: 'LogseqはAIモデルを端末上で実行しますか？',
        answer: 'いいえ。情報源には、Logseq本体に言語モデルが含まれるという記載はありません。AIは任意のMCPサーバー経由で利用します。Settings、AIで有効にすると、外部クライアントがグラフを扱えます。ドキュメントは例として、モデルをローカルで動かすLM Studioと、クラウド型のGemini CLIを挙げています。',
        bullets: [
          'サーバーは127.0.0.1で待ち受け、自分で作成したBearerトークンを必要とします。',
          'MCP経由の変更はアプリ内で元に戻せます。「pretend」オプションで編集内容を事前に確認することもできます。',
          'ページ・タグ・プロパティの編集や、子ブロックの読み取りは、ドキュメント上まだ未対応の項目です。',
          'チャットやスラッシュコマンドのAIはコミュニティ製プラグインによるもので、Logseqには含まれません。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'クイックアンサー',
        anchor: 'quick-answer',
      },
      {
        label: 'Logseqとは',
        anchor: 'what-is-murmur',
      },
      {
        label: '入手方法',
        anchor: 'get-it',
      },
      {
        label: '情報源で確認できた機能',
        anchor: 'key-features',
      },
      {
        label: 'データの流れとプライバシー',
        anchor: 'privacy',
      },
      {
        label: '向いている人',
        anchor: 'who-should-use',
      },
      {
        label: '確認できなかった点',
        anchor: 'who-should-not-use',
      },
      {
        label: '競合と代替ツール',
        anchor: 'vs-alternatives',
      },
      {
        label: 'よくある質問',
        anchor: 'faq',
      },
      {
        label: '総評',
        anchor: 'verdict',
      },
      {
        label: '情報源',
        anchor: 'sources',
      },
      {
        label: '関連記事',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Logseqはノートをローカルに保存し、独自のAIモデルは持たず、外部のAIクライアントがグラフを使える任意のMCPサーバーを備えています。',
          },
          {
            type: 'plain-terms',
            text: 'リンクし合うノートを入れ子の箇条書きで書き、データはパソコンやスマートフォンに残ります。AIの助けが必要な場合は、別のAIツールをご自身でLogseqに接続します。',
          },
        ],
        items: [
          'メンテナンス：最新リリースの2.0.2は2026年10月7日付で、リポジトリには2026年10月23日に最後のプッシュがありました。放置プロジェクトの警告は該当しません。',
          'ライセンス：AGPL-3.0で、ソースコードはGitHubにあります。開発元はLogseq, Inc.です。',
          '費用：サイトによれば、個人利用ではアプリは無料です。Logseq Syncは有料の追加サービスで、セルフホストも可能です。',
          '形式：従来のファイルグラフと新しいデータベースグラフがあり、2.0系はデータベース版で動作します。',
          '対応環境：macOS・Windows・Linuxのデスクトップアプリ、ウェブアプリ、一部は招待制のモバイルアプリです。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、2026年10月24日に確認したプロジェクトのサイト、リポジトリ、ドキュメント、プライバシーポリシーに基づきます。PromptQuorumはLogseqをインストールも読み込みもしていないため、安定性とMCPの使い勝手は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-logseq',
        title: 'Logseqとは',
        content: [
          '**Logseqはアウトライナーです。ノートを入れ子の箇条書きブロックとして書き、ページ参照でつなぎ、バックリンクをたどれます。その上にジャーナル、タスク、クエリがあります。**開発元のLogseq, Inc.は、プライバシーポリシーによればデラウェア州の法人で、ソースコードは公開されています。',
          '**現在は2種類のグラフがあります。**従来のファイルグラフは、ページをMarkdownまたはOrg-modeのファイルとして保持します。本記事で扱う版で導入された新しいデータベース（DB）グラフは、内容をデータベースに保存します。READMEはDB版をベータ、新しいモバイルアプリとリアルタイム同期をアルファと位置づけ、データ消失の可能性があるとして、自動バックアップと専用のテストグラフを用意してから実際の作業を移すよう勧めています。',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: '入手方法',
        content: [
          '**LogseqはGitHubのReleasesページからmacOS・Windows・Linux向けに無料でダウンロードできます。インストーラーが用意されており、ターミナル操作は不要です。**',
        ],
        columns: [
          '項目',
          '入手方法',
        ],
        rows: [
          {
            '項目': 'デスクトップ',
            '入手方法': '[GitHubのLogseqリリース](https://github.com/logseq/logseq/releases/latest)：macOS向け.dmg（Apple siliconとIntel）、Windows向け.exeインストーラー（x64とARM64）、Linux向けAppImage（x86_64とARM64）',
          },
          {
            '項目': 'ウェブアプリ',
            '入手方法': '[app.logseq.com](https://app.logseq.com/)。2.0.2のリリースノートに記載があります',
          },
          {
            '項目': 'iPhone・iPad',
            '入手方法': 'リリースノートによれば、DB版のiOSアプリはTestFlightベータです（[ベータに参加](https://testflight.apple.com/join/eBcJ9Hpc)）。古いApp Storeの掲載[Logseq](https://apps.apple.com/us/app/logseq/id1601013908)は、2024年4月のバージョン0.10.9を示しています',
          },
          {
            '項目': 'Android',
            '入手方法': 'APKのLogseq-android-2.0.2.apkが、GitHubの2.0.2リリースに添付されています',
          },
          {
            '項目': '公式サイト',
            '入手方法': '[logseq.com](https://logseq.com)',
          },
          {
            '項目': 'プライバシーポリシー',
            '入手方法': '[logseq.com/privacy-policy](https://logseq.com/privacy-policy)',
          },
          {
            '項目': 'ソースコード',
            '入手方法': '[github.com/logseq/logseq](https://github.com/logseq/logseq)、AGPL-3.0',
          },
        ],
        note: '確認したバージョン：2.0.2（2026年10月7日公開、タイトルは「Desktop APP 2.0.2 (Beta Testing)」）。2.0系の前のリリースは2025年12月1日の0.10.15です。READMEにはcurlで実行するLinux用インストールスクリプトもあり、2.0.2のノートにはWindows 11 24H2以降でのWindowsインストーラーのクラッシュ修正が記載されています。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下はすべてLogseqのREADME、ドキュメント、リリースノートの記載で、PromptQuorumは一つも検証していません。**',
        ],
        items: [
          '**アウトライナーとデータベースグラフ。**ブロックとページは「ノード」で、タグとプロパティを付けられます。タスク、ジャーナル、クエリ、フラッシュカード、アセット、テンプレート用の組み込みタグと、テーブル表示があります。',
          '**MCPサーバー（任意）。**有効にすると、MCPクライアントがノードの検索、ページ・タグ・プロパティの作成と一覧表示、ブロックの追加、ブロックタイトルの編集を行えます。複数の変更を1回の呼び出しにまとめることもできます。',
          '**SyncとPublish。**リアルタイム共同編集にも対応するLogseq Syncは有料機能と説明されており、Open Collectiveのバッカーは月5米ドル、スポンサーは月15米ドルで利用できます。Publishは読み取り専用のページを[logseq.io](https://logseq.io)で共有します。どちらも任意です。',
          '**プラグインとテーマ。**プラグインのマーケットプレイスとJavaScriptのプラグインSDKでアプリを拡張できます。AIチャット系のプラグインはコミュニティ製で、Logseqには含まれません。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**2023年7月28日更新のプライバシーポリシーによれば、Logseq, Inc.はユーザーが提供する識別情報・連絡先・取引データと、アプリが自動的に収集する技術データ（端末情報、OS、プラットフォーム（Electronまたはブラウザ）、リリースバージョン）を収集します。**サービスの利用状況に関する利用データも定義されています。',
          'サイトは、データは手元のローカルにあるとしており、ポリシーのデータ表にノートの内容は挙がっていません。データが端末の外に出るのは、Sync、Publish、ウェブアプリの利用時で、それぞれ独自の規約に従います。任意のMCPサーバーはlocalhostで動作しますが、データの行き先は接続するAIクライアント次第です。LM Studioのようなローカルのクライアントなら端末内にとどまり、Gemini CLIのようなクラウド型のクライアントならグラフの内容を提供元に送ることになります。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発元の申告であり、監査結果ではありません。ポリシーは2.0ベータとその同期・MCP・モバイル機能より前のもので、PromptQuorumはアプリの通信を調べていません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**オープンソースのアウトライナーを求めるノートユーザー。**バックリンクとデイリージャーナルを使いたく、ベータを許容できる方。',
          '**LM Studioなどのローカルモデルツールをすでに使っている方。**MCP経由でノートを読ませたり下書きさせたりしたい場合。',
          '**既存のファイルグラフのユーザー。**まずテスト用グラフでデータベース版を試したい方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**大規模グラフでの信頼性。**PromptQuorumはアプリをインストールも読み込みもしていないため、速度、クラッシュ、インポート品質は不明です。',
          '**モバイルの状況。**ドキュメントはAndroidアプリをアルファテスト未開放としていますが、2.0.2リリースにはAPKが添付されています。一般向けのモバイルビルドがどれなのかは明確ではありません。',
          '**ファイル形式。**サイトは他のツールでノートを開けるとして「Markdown files」を掲げていますが、DB版のドキュメントはSQLiteでバックアップするデータベースグラフを説明しており、Markdownが引き続き主要な形式かどうかは整理されていません。',
          '**利用規約。**プライバシーポリシーは読みましたが、利用規約の全文は読んでいないため、SyncとPublishのアカウント条件は未確認です。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: [
          'アプリ',
          '対応プラットフォーム',
          '価格／ライセンス',
          '主な違い',
        ],
        rows: [
          {
            'アプリ': '[SiYuan](/ja/power-local-llm/siyuan-review)',
            '対応プラットフォーム': 'macOS、Windows、Linux、iOS、Android',
            '価格／ライセンス': 'AGPL-3.0／コアは無料、同期は有料',
            '主な違い': 'ブロック単位のワークスペース。設定したモデル提供元を呼び出すAIエージェント機能付き',
          },
          {
            'アプリ': '[Blinko](/ja/power-local-llm/blinko-review)',
            '対応プラットフォーム': 'セルフホスト型ウェブアプリ（Docker）',
            '価格／ライセンス': 'GPL-3.0／無料',
            '主な違い': 'セルフホスト型のノート。RAG検索は既定で外部LLMを呼び出す',
          },
        ],
        note: '掲載はPromptQuorumのレビューがあるノートアプリのみです。各アプリの最新の価格・ライセンス・対応プラットフォームは、公式サイトでご確認ください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'SyncとPublishを自分でホストできますか？',
            a: 'ドキュメントによれば可能です。Settings、AdvancedでSyncサーバーURLまたはPublishサーバーURLを設定します。Publishをセルフホストするには、Cloudflareのアカウントも必要です。',
          },
          {
            q: '既存のファイルグラフをデータベース版に移せますか？',
            a: 'ドキュメントには、三点メニューのImportにある「File to DB graph」インポーターが記載されています。複数のクエリ、埋め込み、引用を含むブロックは、それぞれ最初の1件だけがインポートされます。',
          },
          {
            q: 'Syncは何を暗号化しますか？',
            a: 'ドキュメントは、同期グラフを作る前にSettings、Encryptionで暗号化パスワードを一度設定するとだけ述べています。暗号方式の説明はなく、PromptQuorumは第三者監査の有無を確認していません。',
          },
          {
            q: 'Logseqにコマンドラインはありますか？',
            a: 'DBグラフ向けにあります。logseq CLIはアプリとは独立してコマンドを実行でき、たとえばCIでも使え、nightlyのデスクトップビルドに含まれます。アプリなしでMCPサーバーを起動することもできます。',
          },
          {
            q: 'データベース版に対応するプラグインはいくつありますか？',
            a: 'ドキュメントは、DBグラフに対応するプラグインを65以上と数えています。AIプラグインはコミュニティ製のため、呼び出すモデルは各プラグインのREADMEで確認してください。[logseq-copilot](/ja/power-local-llm/logseq-copilot-review)は別にレビューしています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'Logseqは、活発に更新されるオープンソースでローカル志向のノートツールで、AIの役割は意図的に小さく、外部クライアントが任意のサーバー経由で接続します。一方で、本記事の対象版はベータで、モバイルの提供状況にはばらつきがあり、実機でのテストは行っていません。ベータを許容し、自分のAIツールを持ち込める方に向いています。安定した環境が必要な方は、実際のノートを移す前に、どのリリース系列をインストールするかを確認してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[GitHub上のLogseq](https://github.com/logseq/logseq) — README、ライセンス、リポジトリの動き（2026年10月24日確認）。',
          '[Logseq 2.0.2リリース](https://github.com/logseq/logseq/releases/tag/2.0.2) — リリースノート、インストーラーファイル、公開日。',
          '[Logseq公式サイト](https://logseq.com) — 製品の説明とダウンロードページ（2026年10月24日確認）。',
          '[Logseqのプライバシーポリシー](https://logseq.com/privacy-policy) — 収集されるデータ（2023年7月28日更新）。',
          '[LogseqのDB版ドキュメント](https://github.com/logseq/docs/blob/master/db-version.md) — MCPサーバー、Sync、Publish、プラグイン、インポーター、CLI。',
          '[App StoreのLogseq](https://apps.apple.com/us/app/logseq/id1601013908) — バージョンと公開日が分かる古いiOS掲載。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[logseq-copilotレビュー](/ja/power-local-llm/logseq-copilot-review) — Logseq向け第三者製AIプラグインの別レビュー。',
          '[ObsidianとLogseqのAIプラグイン比較](/ja/power-local-llm/obsidian-logseq-ai-plugins) — 両ノートアプリのAIプラグインの選択肢。',
          '[LogseqとJoplinでローカルLLMを使う](/ja/power-local-llm/local-llm-with-logseq-and-joplin) — これらのノートアプリと並べてローカルモデルを動かす方法。',
          '[ローカル知識・検索ツール比較](/ja/power-local-llm/local-llm-knowledge-retrieval-compared) — ノート連携のカテゴリ比較。',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/logseq-review-hero-pt.webp',
    title: 'Análise do Logseq: outliner de código aberto com notas locais',
    seoTitle: 'Análise do Logseq: notas locais e servidor de IA opcional',
    intro: 'O Logseq é um outliner e base de conhecimento de código aberto da [Logseq, Inc.](https://logseq.com) que guarda suas notas no seu próprio dispositivo. O app não traz nenhum modelo de IA; a beta atual da versão com banco de dados adiciona um servidor MCP opcional para que um cliente de IA externo possa ler e editar um grafo. Esta análise se baseia no site do projeto, no repositório do GitHub, na documentação e na política de privacidade, consultados em 24 de outubro de 2026; a PromptQuorum não testou o app na prática. O plugin de IA [logseq-copilot](/pt/power-local-llm/logseq-copilot-review) é um projeto independente de terceiros, não o Logseq em si.',
    metaDescription: 'Análise do Logseq: app de notas de código aberto com dados no seu dispositivo e servidor MCP opcional para ferramentas de IA. Instalação e preço.',
    twitterDescription: 'Análise do Logseq: notas locais e de código aberto sem IA embutida, mas com servidor MCP opcional. O que as fontes confirmam e o que não confirmam.',
    audience: 'Quem faz anotações e quer saber se o Logseq mantém os dados no dispositivo, como conectar ferramentas de IA e o que as fontes deixam sem confirmação.',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Logseq',
    targetKeywords: [
      'análise logseq',
      'logseq ia',
      'logseq servidor mcp',
      'logseq notas locais',
      'logseq código aberto',
      'logseq versão banco de dados beta',
      'logseq vs obsidian ia local',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**O Logseq (versão 2.0.2, uma beta da versão com banco de dados) é um outliner e base de conhecimento de código aberto que guarda suas notas no seu próprio dispositivo.** O README avisa que nesta beta pode haver perda de dados e recomenda backups automáticos. Tudo o que está aqui vem do site, do repositório e da documentação do próprio projeto.',
    quickAnswerTop: {
      pt: {
        question: 'O Logseq executa modelos de IA no meu dispositivo?',
        answer: 'Não. As fontes não descrevem nenhum modelo de linguagem dentro do próprio Logseq; a IA chega por um servidor MCP opcional, ativado em Settings, AI, que permite a um cliente externo trabalhar com o seu grafo. A documentação cita como clientes de exemplo o LM Studio, que executa modelos localmente, e a Gemini CLI, baseada na nuvem.',
        bullets: [
          'O servidor escuta em 127.0.0.1 e exige um token Bearer que você mesmo cria.',
          'As alterações feitas por ele podem ser desfeitas no app, e uma edição pode ser simulada com a opção «pretend».',
          'A documentação lista como pendentes a edição de páginas, tags e propriedades e a leitura de blocos filhos.',
          'A IA de chat e de comandos com barra vem de plugins da comunidade, que não fazem parte do Logseq.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Resposta rápida',
        anchor: 'quick-answer',
      },
      {
        label: 'O que é o Logseq?',
        anchor: 'what-is-murmur',
      },
      {
        label: 'Onde obter',
        anchor: 'get-it',
      },
      {
        label: 'Recursos confirmados pelas fontes',
        anchor: 'key-features',
      },
      {
        label: 'Fluxo de dados e privacidade',
        anchor: 'privacy',
      },
      {
        label: 'Para quem serve',
        anchor: 'who-should-use',
      },
      {
        label: 'O que não conseguimos verificar',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Concorrentes e alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Perguntas frequentes',
        anchor: 'faq',
      },
      {
        label: 'Veredicto',
        anchor: 'verdict',
      },
      {
        label: 'Fontes',
        anchor: 'sources',
      },
      {
        label: 'Leituras relacionadas',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Logseq guarda suas notas localmente, não tem modelo de IA próprio e oferece um servidor MCP opcional para que clientes de IA externos usem o seu grafo.',
          },
          {
            type: 'plain-terms',
            text: 'Você escreve notas ligadas entre si como tópicos aninhados que ficam no seu computador ou celular; se quiser a ajuda de uma IA, você mesmo conecta uma ferramenta de IA separada ao Logseq.',
          },
        ],
        items: [
          'Manutenção: a versão mais recente, a 2.0.2, é de 7 de outubro de 2026 e o repositório recebeu o último push em 23 de outubro de 2026, então nenhum aviso de projeto parado se aplica.',
          'Licença: AGPL-3.0, com o código-fonte no GitHub; o criador é a Logseq, Inc.',
          'Custo: segundo o site, o app é gratuito para uso pessoal; o Logseq Sync é um complemento pago que também pode ser hospedado por conta própria.',
          'Formatos: grafos de arquivos mais antigos e grafos de banco de dados mais novos; a linha 2.0 trabalha com a versão de banco de dados.',
          'Plataformas: apps de desktop para macOS, Windows e Linux, um app web e apps móveis que em parte são só por convite.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site, no repositório, na documentação e na política de privacidade do projeto, consultados em 24 de outubro de 2026. A PromptQuorum não instalou nem carregou o Logseq, então a estabilidade e o fluxo com MCP não são avaliados.',
          },
        ],
      },
      overview: {
        id: 'what-is-logseq',
        title: 'O que é o Logseq?',
        content: [
          '**O Logseq é um outliner: você escreve notas como blocos de tópicos aninhados, liga-os com referências de página e navega pelos backlinks, com diários, tarefas e consultas por cima.** Ele é feito pela Logseq, Inc., uma empresa de Delaware segundo a política de privacidade, e o código-fonte é público.',
          '**O projeto agora oferece dois tipos de grafo.** Os grafos de arquivos, o formato mais antigo, guardam as páginas como arquivos Markdown ou Org-mode; os grafos de banco de dados («DB»), introduzidos com a versão analisada aqui, guardam o conteúdo em um banco de dados. O README chama a versão DB de beta e o novo app móvel e a sincronização em tempo real de alfa, afirma que pode haver perda de dados e recomenda backups automáticos e um grafo de teste dedicado antes de levar trabalho de verdade.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Onde obter',
        content: [
          '**O Logseq é um download gratuito para macOS, Windows e Linux na página de Releases do GitHub, que oferece instaladores prontos, então não é preciso usar o terminal.**',
        ],
        columns: [
          'Opção',
          'Onde obter',
        ],
        rows: [
          {
            'Opção': 'Desktop',
            'Onde obter': '[Releases do Logseq no GitHub](https://github.com/logseq/logseq/releases/latest): .dmg para macOS (Apple silicon e Intel), instalador .exe para Windows (x64 e ARM64), AppImage para Linux (x86_64 e ARM64)',
          },
          {
            'Opção': 'App web',
            'Onde obter': '[app.logseq.com](https://app.logseq.com/), citado nas notas da versão 2.0.2',
          },
          {
            'Opção': 'iPhone e iPad',
            'Onde obter': 'Segundo as notas da versão, o app de iOS da versão DB está em beta pelo TestFlight ([entrar na beta](https://testflight.apple.com/join/eBcJ9Hpc)); uma ficha antiga da App Store, [Logseq](https://apps.apple.com/us/app/logseq/id1601013908), mostra a versão 0.10.9 de abril de 2024',
          },
          {
            'Opção': 'Android',
            'Onde obter': 'Um APK, Logseq-android-2.0.2.apk, está anexado à versão 2.0.2 no GitHub',
          },
          {
            'Opção': 'Site',
            'Onde obter': '[logseq.com](https://logseq.com)',
          },
          {
            'Opção': 'Política de privacidade',
            'Onde obter': '[logseq.com/privacy-policy](https://logseq.com/privacy-policy)',
          },
          {
            'Opção': 'Código-fonte',
            'Onde obter': '[github.com/logseq/logseq](https://github.com/logseq/logseq), AGPL-3.0',
          },
        ],
        note: 'Versão analisada: 2.0.2, lançada em 7 de outubro de 2026 e intitulada «Desktop APP 2.0.2 (Beta Testing)». A versão anterior à linha 2.0 foi a 0.10.15, de 1º de dezembro de 2025. O README também oferece um script de instalação para Linux executado com curl, e as notas da 2.0.2 listam uma correção para a falha do instalador do Windows no Windows 11 24H2 e posteriores.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Tudo o que segue vem do README, da documentação ou das notas de versão do Logseq; a PromptQuorum não testou nenhum item.**',
        ],
        items: [
          '**Outliner e grafos de banco de dados.** Blocos e páginas são «nós» que podem ter tags e propriedades, com tags integradas para tarefas, diários, consultas, cartões de estudo, anexos e modelos, além de visualizações em tabela.',
          '**Servidor MCP (opcional).** Depois de ativado, um cliente MCP pode buscar nós, criar e listar páginas, tags e propriedades, adicionar blocos e editar títulos de blocos, agrupando várias alterações em uma única chamada.',
          '**Sync e Publish.** O Logseq Sync, que também permite colaboração em tempo real, é descrito como um recurso pago incluído para apoiadores do Open Collective a 5 dólares por mês e patrocinadores a 15 dólares por mês; o Publish compartilha páginas somente leitura em [logseq.io](https://logseq.io). Ambos são opcionais.',
          '**Plugins e temas.** Um marketplace de plugins e um SDK de plugins em JavaScript ampliam o app; os plugins de chat com IA são feitos pela comunidade e não fazem parte do Logseq.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**A política de privacidade, atualizada pela última vez em 28 de julho de 2023, diz que a Logseq, Inc. coleta dados de identidade, contato e transações que você fornece, e dados técnicos coletados automaticamente pelo app: informações do dispositivo, sistema operacional, plataforma (Electron ou navegador) e versão.** Ela também define dados de uso sobre como os serviços são utilizados.',
          'O site diz que seus dados ficam com você, localmente, e as tabelas de dados da política não listam o conteúdo das notas. Sync, Publish e o app web são os pontos em que os dados sairiam do dispositivo, sob termos próprios. O servidor MCP opcional roda em localhost, mas o cliente de IA que você conecta decide para onde os dados vão: um cliente local como o LM Studio os mantém na máquina, enquanto um cliente hospedado na nuvem como a Gemini CLI enviaria o conteúdo do grafo ao seu provedor.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São declarações do fabricante, não resultados de auditoria. A política é anterior à beta 2.0 e às suas funções de sincronização, MCP e mobile, e a PromptQuorum não inspecionou o tráfego de rede do app.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Quem faz anotações e quer um outliner de código aberto,** com backlinks e diários, e aceita uma beta.',
          '**Quem já usa uma ferramenta de modelos locais,** como o LM Studio, e quer que ela leia ou rascunhe notas via MCP.',
          '**Usuários atuais de grafos de arquivos** que querem testar antes a versão de banco de dados em um grafo de teste.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Confiabilidade com grafos grandes.** A PromptQuorum não instalou nem carregou o app, então velocidade, travamentos e qualidade da importação são desconhecidos.',
          '**Situação do mobile.** A documentação diz que o app de Android ainda não está aberto a testes alfa, mas há um APK anexado à versão 2.0.2; não está claro qual build móvel se destina ao público geral.',
          '**Formato de arquivo.** O site anuncia «Markdown files» para abrir as notas em outras ferramentas, enquanto a documentação da versão DB descreve grafos de banco de dados com backup em SQLite; não se concilia se o Markdown continua sendo um formato principal.',
          '**Termos de uso.** A política de privacidade foi lida, mas não os termos de uso completos, então as condições das contas de Sync e Publish não foram verificadas.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: [
          'App',
          'Plataformas',
          'Preço / licença',
          'Diferença principal',
        ],
        rows: [
          {
            App: '[SiYuan](/pt/power-local-llm/siyuan-review)',
            Plataformas: 'macOS, Windows, Linux, iOS, Android',
            'Preço / licença': 'AGPL-3.0 / núcleo gratuito, sincronização paga',
            'Diferença principal': 'Espaço de trabalho por blocos com recursos de agente de IA que chamam um provedor de modelos configurado por você',
          },
          {
            App: '[Blinko](/pt/power-local-llm/blinko-review)',
            Plataformas: 'App web auto-hospedado (Docker)',
            'Preço / licença': 'GPL-3.0 / gratuito',
            'Diferença principal': 'Notas auto-hospedadas com busca RAG que, por padrão, chama um LLM externo',
          },
        ],
        note: 'Só aparecem apps de notas com uma análise da PromptQuorum; confira preço, licença e plataformas atuais de cada app no site dele.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso hospedar o Sync e o Publish por conta própria?',
            a: 'Sim, segundo a documentação: informe uma URL de servidor de Sync ou de Publish em Settings, Advanced. Hospedar o Publish por conta própria exige ainda uma conta na Cloudflare.',
          },
          {
            q: 'Posso levar um grafo de arquivos existente para a versão de banco de dados?',
            a: 'A documentação descreve um importador «File to DB graph» no menu de três pontos, em Import. Um bloco com várias consultas, incorporações ou citações importa apenas o primeiro de cada tipo.',
          },
          {
            q: 'O que o Sync criptografa?',
            a: 'A documentação diz apenas para definir uma vez uma senha de criptografia em Settings, Encryption antes de criar um grafo sincronizado; ela não descreve a criptografia, e a PromptQuorum não verificou se existe uma auditoria independente.',
          },
          {
            q: 'O Logseq tem linha de comando?',
            a: 'Para grafos DB, sim: uma CLI do logseq executa comandos independentemente do app, por exemplo em CI, e acompanha o build nightly do desktop. Ela também pode iniciar o servidor MCP sem o app.',
          },
          {
            q: 'Quantos plugins funcionam com a versão de banco de dados?',
            a: 'A documentação conta mais de 65 plugins compatíveis com grafos DB. Os plugins de IA são feitos pela comunidade, então confira o README de cada um para saber qual modelo ele chama; o [logseq-copilot](/pt/power-local-llm/logseq-copilot-review) tem análise própria.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'O Logseq é uma ferramenta de notas com atualizações ativas, de código aberto e local, e seu papel em IA é deliberadamente pequeno: clientes externos se conectam por um servidor opcional. Em contrapartida, a versão analisada é uma beta, a disponibilidade móvel é irregular e nada foi testado na prática. Serve para quem aceita uma beta e traz as próprias ferramentas de IA; quem precisa de uma configuração estabelecida deve conferir qual linha de versões está instalando antes de levar notas de verdade.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Logseq no GitHub](https://github.com/logseq/logseq) — README, licença e atividade do repositório, consultados em 24 de outubro de 2026.',
          '[Versão 2.0.2 do Logseq](https://github.com/logseq/logseq/releases/tag/2.0.2) — notas da versão, arquivos de instalação e data de publicação.',
          '[Site do Logseq](https://logseq.com) — afirmações sobre o produto e página de download, consultados em 24 de outubro de 2026.',
          '[Política de privacidade do Logseq](https://logseq.com/privacy-policy) — dados coletados, atualizada pela última vez em 28 de julho de 2023.',
          '[Documentação da versão DB do Logseq](https://github.com/logseq/docs/blob/master/db-version.md) — servidor MCP, Sync, Publish, plugins, importador e CLI.',
          '[Logseq na App Store](https://apps.apple.com/us/app/logseq/id1601013908) — ficha antiga do iOS com versão e data de lançamento.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do logseq-copilot](/pt/power-local-llm/logseq-copilot-review) — o plugin de IA de terceiros para o Logseq, analisado separadamente.',
          '[Plugins de IA para Obsidian e Logseq, comparados](/pt/power-local-llm/obsidian-logseq-ai-plugins) — opções de plugins de IA para os dois apps de notas.',
          '[LLM local com Logseq e Joplin](/pt/power-local-llm/local-llm-with-logseq-and-joplin) — usar modelos locais junto com esses apps de notas.',
          '[Ferramentas locais de conhecimento e recuperação comparadas](/pt/power-local-llm/local-llm-knowledge-retrieval-compared) — a comparação de categoria para integrações de notas.',
          '[Diretório de software para LLMs locais](/pt/directory) — o catálogo completo de ferramentas de IA local.',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/logseq-review-hero-ar.webp',
    title: 'مراجعة Logseq: أداة مخطط هرمي مفتوحة المصدر بملاحظات محلية',
    seoTitle: 'مراجعة Logseq: ملاحظات محلية وخادم ذكاء اصطناعي اختياري',
    intro: 'Logseq أداة مفتوحة المصدر لتدوين الملاحظات بالمخطط الهرمي وقاعدة معرفة من [Logseq, Inc.](https://logseq.com)، وهي تحفظ ملاحظاتك على جهازك. لا يتضمن التطبيق نفسه أي نموذج ذكاء اصطناعي؛ أما النسخة التجريبية الحالية من إصدار قاعدة البيانات فتضيف خادم MCP اختيارياً يتيح لعميل ذكاء اصطناعي خارجي قراءة الرسم البياني وتعديله. تستند هذه المراجعة إلى موقع المشروع ومستودع GitHub والتوثيق وسياسة الخصوصية، التي جرى الاطلاع عليها في 24 أكتوبر 2026؛ ولم تختبر PromptQuorum التطبيق عملياً. إضافة الذكاء الاصطناعي [logseq-copilot](/ar/power-local-llm/logseq-copilot-review) مشروع مستقل من طرف ثالث وليست جزءاً من Logseq نفسه.',
    metaDescription: 'مراجعة Logseq: تطبيق ملاحظات مفتوح المصدر يبقي البيانات على جهازك مع خادم MCP اختياري لأدوات الذكاء الاصطناعي. طريقة التثبيت والسعر والخصوصية.',
    twitterDescription: 'مراجعة Logseq: ملاحظات محلية مفتوحة المصدر بلا ذكاء اصطناعي مدمج مع خادم MCP اختياري. ما تؤكده المصادر وما لا تؤكده.',
    audience: 'لمن يدوّن الملاحظات ويريد أن يعرف هل يُبقي Logseq بياناته على الجهاز، وكيف تُربط أدوات الذكاء الاصطناعي به، وما الذي تتركه المصادر دون تأكيد.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Logseq',
    targetKeywords: [
      'مراجعة logseq',
      'logseq ذكاء اصطناعي',
      'logseq خادم mcp',
      'logseq ملاحظات محلية',
      'logseq مفتوح المصدر',
      'logseq نسخة قاعدة البيانات تجريبية',
      'logseq مقابل obsidian ذكاء اصطناعي محلي',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Logseq (الإصدار 2.0.2، نسخة تجريبية من إصدار قاعدة البيانات) أداة مفتوحة المصدر لتدوين الملاحظات بالمخطط الهرمي وقاعدة معرفة تحفظ ملاحظاتك على جهازك.** يحذّر ملف README من احتمال فقدان البيانات في هذه النسخة التجريبية ويوصي بالنسخ الاحتياطي التلقائي. كل ما يرد هنا مصدره موقع المشروع ومستودعه وتوثيقه.',
    quickAnswerTop: {
      ar: {
        question: 'هل يشغّل Logseq نماذج الذكاء الاصطناعي على جهازي؟',
        answer: 'لا. لا تصف المصادر أي نموذج لغوي داخل Logseq نفسه؛ يصل الذكاء الاصطناعي عبر خادم MCP اختياري يُفعَّل من Settings، AI ويتيح لعميل خارجي التعامل مع الرسم البياني الخاص بك. يذكر التوثيق مثالين للعملاء: LM Studio الذي يشغّل النماذج محلياً، وGemini CLI القائم على السحابة.',
        bullets: [
          'يستمع الخادم على 127.0.0.1 ويشترط رمز Bearer تنشئه بنفسك.',
          'يمكن التراجع في التطبيق عن التغييرات التي تتم عبره، كما يمكن معاينة أي تعديل بخيار «pretend».',
          'يدرج التوثيق تعديل الصفحات والوسوم والخصائص وقراءة الكتل الفرعية ضمن ما لم يُنجز بعد.',
          'الذكاء الاصطناعي للمحادثة وأوامر الشرطة المائلة يأتي من إضافات المجتمع، وهي ليست جزءاً من Logseq.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'إجابة سريعة',
        anchor: 'quick-answer',
      },
      {
        label: 'ما هو Logseq؟',
        anchor: 'what-is-murmur',
      },
      {
        label: 'كيف تحصل عليه',
        anchor: 'get-it',
      },
      {
        label: 'الميزات التي أكدتها المصادر',
        anchor: 'key-features',
      },
      {
        label: 'تدفق البيانات والخصوصية',
        anchor: 'privacy',
      },
      {
        label: 'لمن يناسب',
        anchor: 'who-should-use',
      },
      {
        label: 'ما لم نتمكن من التحقق منه',
        anchor: 'who-should-not-use',
      },
      {
        label: 'المنافسون والبدائل',
        anchor: 'vs-alternatives',
      },
      {
        label: 'الأسئلة الشائعة',
        anchor: 'faq',
      },
      {
        label: 'الخلاصة',
        anchor: 'verdict',
      },
      {
        label: 'المصادر',
        anchor: 'sources',
      },
      {
        label: 'قراءات ذات صلة',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'يحفظ Logseq ملاحظاتك محلياً، وليس له نموذج ذكاء اصطناعي خاص، ويوفر خادم MCP اختيارياً تستخدم عبره عملاء الذكاء الاصطناعي الخارجيون رسمك البياني.',
          },
          {
            type: 'plain-terms',
            text: 'تكتب ملاحظات مترابطة على شكل نقاط متداخلة تبقى على حاسوبك أو هاتفك؛ وإن أردت مساعدة من الذكاء الاصطناعي فعليك أنت ربط أداة ذكاء اصطناعي منفصلة بـ Logseq.',
          },
        ],
        items: [
          'الصيانة: أحدث إصدار 2.0.2 بتاريخ 7 أكتوبر 2026، وآخر دفع إلى المستودع في 23 أكتوبر 2026، لذلك لا ينطبق تحذير المشروع المتوقف.',
          'الرخصة: AGPL-3.0 مع الشيفرة المصدرية على GitHub؛ والجهة المطورة هي Logseq, Inc.',
          'التكلفة: بحسب الموقع، التطبيق مجاني للاستخدام الشخصي؛ أما Logseq Sync فإضافة مدفوعة يمكن أيضاً استضافتها ذاتياً.',
          'الصيغ: رسوم الملفات الأقدم ورسوم قاعدة البيانات الأحدث؛ وسلسلة 2.0 تعمل مع إصدار قاعدة البيانات.',
          'المنصات: تطبيقات سطح المكتب لأنظمة macOS وWindows وLinux، وتطبيق ويب، وتطبيقات جوال بعضها بدعوة فقط.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى موقع المشروع ومستودعه وتوثيقه وسياسة الخصوصية، التي جرى الاطلاع عليها في 24 أكتوبر 2026. لم تثبّت PromptQuorum تطبيق Logseq ولم تحمّله، لذا لم يُقيَّم الثبات ولا سير العمل مع MCP.',
          },
        ],
      },
      overview: {
        id: 'what-is-logseq',
        title: 'ما هو Logseq؟',
        content: [
          '**Logseq أداة مخطط هرمي: تكتب الملاحظات ككتل نقطية متداخلة وتربطها بمراجع الصفحات وتتصفح الروابط الخلفية، ومعها اليوميات والمهام والاستعلامات.** تطوّره Logseq, Inc.، وهي شركة مسجلة في ديلاوير بحسب سياسة الخصوصية، وشيفرته المصدرية متاحة للعموم.',
          '**يقدّم المشروع الآن نوعين من الرسوم البيانية.** رسوم الملفات، وهي الصيغة الأقدم، تحفظ الصفحات كملفات Markdown أو Org-mode؛ أما رسوم قاعدة البيانات («DB») التي أُدخلت مع الإصدار موضوع هذه المراجعة فتحفظ المحتوى في قاعدة بيانات. يصف README إصدار DB بأنه تجريبي (بيتا)، والتطبيق الجديد للجوال والمزامنة الفورية بأنهما في مرحلة ألفا، ويقرر أن فقدان البيانات ممكن، وينصح بنسخ احتياطي تلقائي وبرسم بياني تجريبي مخصص قبل نقل عمل حقيقي.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'كيف تحصل عليه',
        content: [
          '**يتوافر Logseq للتنزيل المجاني على macOS وWindows وLinux من صفحة Releases على GitHub التي تضم مثبّتات جاهزة، فلا حاجة إلى خطوة في الطرفية.**',
        ],
        columns: [
          'الخيار',
          'مصدر الحصول عليه',
        ],
        rows: [
          {
            'الخيار': 'سطح المكتب',
            'مصدر الحصول عليه': '[إصدارات Logseq على GitHub](https://github.com/logseq/logseq/releases/latest): ملف .dmg لنظام macOS (Apple silicon وIntel)، ومثبّت .exe لنظام Windows (x64 وARM64)، وAppImage لنظام Linux (x86_64 وARM64)',
          },
          {
            'الخيار': 'تطبيق الويب',
            'مصدر الحصول عليه': '[app.logseq.com](https://app.logseq.com/)، ورد ذكره في ملاحظات الإصدار 2.0.2',
          },
          {
            'الخيار': 'iPhone وiPad',
            'مصدر الحصول عليه': 'بحسب ملاحظات الإصدار، تطبيق iOS لإصدار DB في نسخة TestFlight تجريبية ([الانضمام إلى النسخة التجريبية](https://testflight.apple.com/join/eBcJ9Hpc))؛ وصفحة أقدم في App Store بعنوان [Logseq](https://apps.apple.com/us/app/logseq/id1601013908) تعرض الإصدار 0.10.9 من أبريل 2024',
          },
          {
            'الخيار': 'Android',
            'مصدر الحصول عليه': 'ملف APK باسم Logseq-android-2.0.2.apk مرفق بالإصدار 2.0.2 على GitHub',
          },
          {
            'الخيار': 'الموقع',
            'مصدر الحصول عليه': '[logseq.com](https://logseq.com)',
          },
          {
            'الخيار': 'سياسة الخصوصية',
            'مصدر الحصول عليه': '[logseq.com/privacy-policy](https://logseq.com/privacy-policy)',
          },
          {
            'الخيار': 'الشيفرة المصدرية',
            'مصدر الحصول عليه': '[github.com/logseq/logseq](https://github.com/logseq/logseq)، الرخصة AGPL-3.0',
          },
        ],
        note: 'الإصدار الذي رُوجع: 2.0.2، صدر في 7 أكتوبر 2026 وعنوانه «Desktop APP 2.0.2 (Beta Testing)». الإصدار السابق لسلسلة 2.0 هو 0.10.15 بتاريخ 1 ديسمبر 2025. ويقدّم README أيضاً سكربت تثبيت لنظام Linux يُشغَّل بأمر curl، وتذكر ملاحظات 2.0.2 إصلاحاً لانهيار مثبّت Windows على Windows 11 24H2 وما بعده.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل ما يلي مصدره README وتوثيق Logseq وملاحظات الإصدار، ولم تختبر PromptQuorum أياً منه.**',
        ],
        items: [
          '**المخطط الهرمي ورسوم قاعدة البيانات.** الكتل والصفحات «عُقد» يمكن أن تحمل وسوماً وخصائص، مع وسوم مدمجة للمهام واليوميات والاستعلامات والبطاقات التعليمية والمرفقات والقوالب، إضافة إلى عروض الجداول.',
          '**خادم MCP (اختياري).** بعد تفعيله يستطيع عميل MCP البحث في العقد، وإنشاء الصفحات والوسوم والخصائص وعرضها، وإضافة الكتل وتعديل عناوينها، مع تجميع عدة تغييرات في استدعاء واحد.',
          '**Sync وPublish.** يوصف Logseq Sync، الذي يدعم أيضاً التعاون الفوري، بأنه ميزة مدفوعة متاحة لداعمي Open Collective بسعر 5 دولارات شهرياً وللرعاة بسعر 15 دولاراً شهرياً؛ ويشارك Publish صفحات للقراءة فقط على [logseq.io](https://logseq.io). وكلاهما اختياري.',
          '**الإضافات والسمات.** يوسّع سوق للإضافات وحزمة تطوير إضافات بلغة JavaScript التطبيق؛ وإضافات محادثة الذكاء الاصطناعي من صنع المجتمع وليست جزءاً من Logseq.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**تذكر سياسة الخصوصية، التي حُدّثت آخر مرة في 28 يوليو 2023، أن Logseq, Inc. تجمع بيانات الهوية والاتصال والمعاملات التي تقدمها، وبيانات تقنية يجمعها التطبيق تلقائياً: معلومات الجهاز ونظام التشغيل والمنصة (Electron أو المتصفح) ونسخة الإصدار.** وتعرّف السياسة أيضاً بيانات الاستخدام المتعلقة بكيفية استخدام الخدمات.',
          'يقول الموقع إن بياناتك ملكك محلياً، ولا تدرج جداول البيانات في السياسة محتوى الملاحظات. وتكون Sync وPublish وتطبيق الويب هي المواضع التي قد تغادر فيها البيانات الجهاز، وفق شروط كل منها. يعمل خادم MCP الاختياري على localhost، لكن عميل الذكاء الاصطناعي الذي تربطه هو من يحدد وجهة البيانات: فالعميل المحلي مثل LM Studio يُبقيها على الجهاز، أما العميل المستضاف في السحابة مثل Gemini CLI فسيرسل محتوى الرسم البياني إلى مزوّده.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات من الجهة المطورة وليست نتائج تدقيق. السياسة أقدم من النسخة التجريبية 2.0 ومن ميزات المزامنة وMCP والجوال فيها، ولم تفحص PromptQuorum حركة الشبكة للتطبيق.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**من يدوّنون الملاحظات ويريدون أداة مخطط هرمي مفتوحة المصدر** مع روابط خلفية ويوميات ويقبلون نسخة تجريبية.',
          '**من يستخدمون بالفعل أداة نماذج محلية** مثل LM Studio ويريدون أن تقرأ الملاحظات أو تصوغ مسوداتها عبر MCP.',
          '**مستخدمو رسوم الملفات الحاليون** الذين يريدون تجربة إصدار قاعدة البيانات أولاً على رسم تجريبي.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الموثوقية مع الرسوم الكبيرة.** لم تثبّت PromptQuorum التطبيق ولم تحمّله، لذا تبقى السرعة والانهيارات وجودة الاستيراد مجهولة.',
          '**وضع تطبيقات الجوال.** يقول التوثيق إن تطبيق Android لم يُفتح بعد لاختبارات ألفا، مع أن ملف APK مرفق بالإصدار 2.0.2؛ ولا يتضح أي بناء للجوال مخصص للاستخدام العام.',
          '**صيغة الملفات.** يروّج الموقع لـ «Markdown files» لفتح الملاحظات في أدوات أخرى، بينما يصف توثيق إصدار DB رسوماً في قاعدة بيانات تُنسخ احتياطياً بصيغة SQLite؛ ولم يُوفَّق بين الأمرين في بقاء Markdown صيغة رئيسية.',
          '**شروط الاستخدام.** قُرئت سياسة الخصوصية دون شروط الاستخدام كاملة، لذا لم تُراجَع شروط حسابات Sync وPublish.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: [
          'التطبيق',
          'المنصات',
          'السعر / الرخصة',
          'الفرق الأبرز',
        ],
        rows: [
          {
            'التطبيق': '[SiYuan](/ar/power-local-llm/siyuan-review)',
            'المنصات': 'macOS وWindows وLinux وiOS وAndroid',
            'السعر / الرخصة': 'AGPL-3.0 / النواة مجانية والمزامنة مدفوعة',
            'الفرق الأبرز': 'مساحة عمل قائمة على الكتل بميزات وكيل ذكاء اصطناعي تستدعي مزوّد نماذج تضبطه أنت',
          },
          {
            'التطبيق': '[Blinko](/ar/power-local-llm/blinko-review)',
            'المنصات': 'تطبيق ويب مستضاف ذاتياً (Docker)',
            'السعر / الرخصة': 'GPL-3.0 / مجاني',
            'الفرق الأبرز': 'ملاحظات مستضافة ذاتياً مع بحث RAG يستدعي نموذجاً لغوياً خارجياً افتراضياً',
          },
        ],
        note: 'لم تُدرج إلا تطبيقات الملاحظات التي لها مراجعة في PromptQuorum؛ تحقق من السعر والرخصة والمنصات الحالية لكل تطبيق في موقعه.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكنني استضافة Sync وPublish بنفسي؟',
            a: 'نعم بحسب التوثيق: حدّد عنوان خادم Sync أو خادم Publish في Settings، Advanced. وتتطلب استضافة Publish ذاتياً حساب Cloudflare أيضاً.',
          },
          {
            q: 'هل يمكنني نقل رسم ملفات قائم إلى إصدار قاعدة البيانات؟',
            a: 'يصف التوثيق أداة استيراد «File to DB graph» في قائمة النقاط الثلاث ضمن Import. والكتلة التي تحتوي على عدة استعلامات أو تضمينات أو اقتباسات تستورد الأول فقط من كل نوع.',
          },
          {
            q: 'ماذا تشفّر Sync؟',
            a: 'يكتفي التوثيق بالقول إن عليك ضبط كلمة مرور تشفير مرة واحدة في Settings، Encryption قبل إنشاء رسم بياني متزامن؛ ولا يصف آلية التشفير، ولم تتحقق PromptQuorum من وجود تدقيق مستقل.',
          },
          {
            q: 'هل لدى Logseq سطر أوامر؟',
            a: 'لرسوم DB نعم: أداة logseq CLI تنفذ الأوامر بمعزل عن التطبيق، مثلاً في CI، وتأتي مع بناء سطح المكتب الليلي (nightly). ويمكنها أيضاً تشغيل خادم MCP دون التطبيق.',
          },
          {
            q: 'كم عدد الإضافات التي تعمل مع إصدار قاعدة البيانات؟',
            a: 'يعدّ التوثيق أكثر من 65 إضافة تدعم رسوم DB. وإضافات الذكاء الاصطناعي من صنع المجتمع، فراجع README كل إضافة لمعرفة النموذج الذي تستدعيه؛ وتُراجَع [logseq-copilot](/ar/power-local-llm/logseq-copilot-review) على حدة.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'Logseq أداة ملاحظات محدّثة باستمرار، مفتوحة المصدر وتعطي الأولوية للتخزين المحلي، ودورها في الذكاء الاصطناعي صغير عن قصد: يتصل العملاء الخارجيون عبر خادم اختياري. في المقابل، الإصدار موضوع المراجعة نسخة تجريبية، وتوافر الجوال متفاوت، ولم يُجرَّب شيء عملياً. يناسب من يقبلون نسخة تجريبية ويحضرون أدوات الذكاء الاصطناعي الخاصة بهم؛ ومن يحتاج إلى إعداد مستقر عليه أن يتحقق من سلسلة الإصدارات التي يثبّتها قبل نقل ملاحظاته الحقيقية.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Logseq على GitHub](https://github.com/logseq/logseq) — README والرخصة ونشاط المستودع، اطُّلع عليها في 24 أكتوبر 2026.',
          '[إصدار Logseq 2.0.2](https://github.com/logseq/logseq/releases/tag/2.0.2) — ملاحظات الإصدار وملفات التثبيت وتاريخ النشر.',
          '[موقع Logseq](https://logseq.com) — ادعاءات المنتج وصفحة التنزيل، اطُّلع عليهما في 24 أكتوبر 2026.',
          '[سياسة خصوصية Logseq](https://logseq.com/privacy-policy) — البيانات المجموعة، حُدّثت آخر مرة في 28 يوليو 2023.',
          '[توثيق إصدار DB من Logseq](https://github.com/logseq/docs/blob/master/db-version.md) — خادم MCP وSync وPublish والإضافات وأداة الاستيراد وCLI.',
          '[Logseq على App Store](https://apps.apple.com/us/app/logseq/id1601013908) — صفحة iOS أقدم تعرض الإصدار وتاريخ صدوره.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة logseq-copilot](/ar/power-local-llm/logseq-copilot-review) — إضافة الذكاء الاصطناعي من طرف ثالث لـ Logseq، وتُراجَع على حدة.',
          '[مقارنة إضافات الذكاء الاصطناعي لـ Obsidian وLogseq](/ar/power-local-llm/obsidian-logseq-ai-plugins) — خيارات إضافات الذكاء الاصطناعي لتطبيقي الملاحظات.',
          '[نموذج لغوي محلي مع Logseq وJoplin](/ar/power-local-llm/local-llm-with-logseq-and-joplin) — تشغيل النماذج المحلية إلى جانب تطبيقات الملاحظات هذه.',
          '[مقارنة أدوات المعرفة والاسترجاع المحلية](/ar/power-local-llm/local-llm-knowledge-retrieval-compared) — مقارنة الفئة الخاصة بتكاملات الملاحظات.',
          '[دليل برامج LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/logseq-review-hero-zh.webp',
    title: 'Logseq 评测：开源大纲笔记，数据留在本地',
    seoTitle: 'Logseq 评测：本地优先笔记应用与可选的 AI 服务器',
    intro: 'Logseq 是 [Logseq, Inc.](https://logseq.com) 开发的开源大纲笔记与知识库，把笔记保存在你自己的设备上。应用本身不含任何 AI 模型；当前数据库版 Beta 新增了一个可选的 MCP 服务器，外部 AI 客户端可以通过它读取和编辑图谱。本评测基于项目官网、GitHub 仓库、文档和隐私政策，核查日期为 2026 年 10 月 24 日；PromptQuorum 未实际测试该应用。AI 插件 [logseq-copilot](/zh/power-local-llm/logseq-copilot-review) 是独立的第三方项目，并非 Logseq 本身。',
    metaDescription: 'Logseq 评测：把数据留在设备上的开源笔记应用，可选 MCP 服务器连接 AI 工具。安装方式、价格、隐私，以及来源未能确认的内容一并说明，PromptQuorum 未实测。',
    twitterDescription: 'Logseq 评测：本地优先的开源笔记，无内置 AI，但有可选 MCP 服务器。来源证实了什么，又有哪些无法确认。',
    audience: '想知道 Logseq 是否把数据留在设备上、AI 工具如何接入、以及来源还有哪些未能确认的笔记用户。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'logseq 评测',
    targetKeywords: [
      'logseq 评测',
      'logseq ai',
      'logseq mcp 服务器',
      'logseq 本地笔记',
      'logseq 开源',
      'logseq 数据库版 beta',
      'logseq obsidian 本地ai 对比',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Logseq（版本 2.0.2，数据库版的 Beta）是一款开源的大纲笔记与知识库，把笔记保存在你自己的设备上。**其 README 警告该 Beta 可能造成数据丢失，并建议开启自动备份。本文所有表述均来自项目自己的官网、仓库和文档。',
    quickAnswerTop: {
      zh: {
        question: 'Logseq 会在我的设备上运行 AI 模型吗？',
        answer: '不会。来源中没有提到 Logseq 自身内置语言模型；AI 通过可选的 MCP 服务器接入，在 Settings、AI 中启用后，外部客户端即可使用你的图谱。文档举的示例客户端是在本地运行模型的 LM Studio，以及基于云的 Gemini CLI。',
        bullets: [
          '服务器监听 127.0.0.1，并要求你自己创建的 Bearer 令牌。',
          '通过它做出的更改可以在应用内撤销，编辑内容也可用“pretend”选项先预览。',
          '文档把编辑页面、标签和属性，以及读取子块列为尚未完成的事项。',
          '聊天和斜杠命令类 AI 来自社区插件，不属于 Logseq。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '快速回答',
        anchor: 'quick-answer',
      },
      {
        label: 'Logseq 是什么？',
        anchor: 'what-is-murmur',
      },
      {
        label: '获取方式',
        anchor: 'get-it',
      },
      {
        label: '来源已证实的功能',
        anchor: 'key-features',
      },
      {
        label: '数据流向与隐私',
        anchor: 'privacy',
      },
      {
        label: '适合哪些人',
        anchor: 'who-should-use',
      },
      {
        label: '我们未能核实的内容',
        anchor: 'who-should-not-use',
      },
      {
        label: '竞品与替代方案',
        anchor: 'vs-alternatives',
      },
      {
        label: '常见问题',
        anchor: 'faq',
      },
      {
        label: '结论',
        anchor: 'verdict',
      },
      {
        label: '来源',
        anchor: 'sources',
      },
      {
        label: '相关阅读',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Logseq 把笔记存放在本地，自身没有 AI 模型，并提供一个可选的 MCP 服务器，供外部 AI 客户端使用你的图谱。',
          },
          {
            type: 'plain-terms',
            text: '你用嵌套的项目符号写互相链接的笔记，数据留在电脑或手机上；想要 AI 帮忙时，需要自己把另一个 AI 工具连接到 Logseq。',
          },
        ],
        items: [
          '维护情况：最新版本 2.0.2 发布于 2026 年 10 月 7 日，仓库最近一次推送是 2026 年 10 月 23 日，因此不适用“项目停滞”警告。',
          '许可证：AGPL-3.0，源代码在 GitHub；开发方为 Logseq, Inc.。',
          '费用：据官网，个人使用免费；Logseq Sync 是付费附加服务，也可以自行托管。',
          '格式：较早的文件图谱和较新的数据库图谱并存；2.0 系列使用数据库版。',
          '平台：macOS、Windows 和 Linux 桌面应用，一个网页版，以及部分仅限受邀使用的移动应用。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于项目官网、仓库、文档和隐私政策，核查日期为 2026 年 10 月 24 日。PromptQuorum 既未安装也未加载 Logseq，因此稳定性和 MCP 的使用体验均未评估。',
          },
        ],
      },
      overview: {
        id: 'what-is-logseq',
        title: 'Logseq 是什么？',
        content: [
          '**Logseq 是一款大纲笔记：你以嵌套的项目符号块写笔记，用页面引用把它们链接起来并浏览反向链接，此外还有日志、任务和查询。**据其隐私政策，开发方 Logseq, Inc. 是一家特拉华州公司，源代码公开。',
          '**项目现在提供两种图谱。**文件图谱是较早的格式，把页面保存为 Markdown 或 Org-mode 文件；本文所评版本引入的数据库（“DB”）图谱则把内容存放在数据库中。README 称 DB 版为 Beta，新的移动应用和实时同步为 Alpha，并指出可能丢失数据，建议先开启自动备份并建立专用的测试图谱，再迁移真实工作。',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: '获取方式',
        content: [
          '**Logseq 可从 GitHub 的 Releases 页面免费下载，支持 macOS、Windows 和 Linux，页面直接提供现成的安装包，无需使用终端。**',
        ],
        columns: [
          '选项',
          '获取方式',
        ],
        rows: [
          {
            '选项': '桌面版',
            '获取方式': '[GitHub 上的 Logseq 发布页](https://github.com/logseq/logseq/releases/latest)：macOS 的 .dmg（Apple 芯片和 Intel）、Windows 的 .exe 安装包（x64 和 ARM64）、Linux 的 AppImage（x86_64 和 ARM64）',
          },
          {
            '选项': '网页版',
            '获取方式': '[app.logseq.com](https://app.logseq.com/)，2.0.2 版本说明中有提及',
          },
          {
            '选项': 'iPhone 和 iPad',
            '获取方式': '据版本说明，DB 版的 iOS 应用处于 TestFlight 测试阶段（[加入测试](https://testflight.apple.com/join/eBcJ9Hpc)）；较早的 App Store 页面 [Logseq](https://apps.apple.com/us/app/logseq/id1601013908) 显示的是 2024 年 4 月的 0.10.9 版',
          },
          {
            '选项': 'Android',
            '获取方式': 'GitHub 上的 2.0.2 版本附带了 APK：Logseq-android-2.0.2.apk',
          },
          {
            '选项': '官网',
            '获取方式': '[logseq.com](https://logseq.com)',
          },
          {
            '选项': '隐私政策',
            '获取方式': '[logseq.com/privacy-policy](https://logseq.com/privacy-policy)',
          },
          {
            '选项': '源代码',
            '获取方式': '[github.com/logseq/logseq](https://github.com/logseq/logseq)，AGPL-3.0',
          },
        ],
        note: '所评版本：2.0.2，发布于 2026 年 10 月 7 日，标题为“Desktop APP 2.0.2 (Beta Testing)”。2.0 系列之前的版本是 2025 年 12 月 1 日的 0.10.15。README 还提供用 curl 运行的 Linux 安装脚本，2.0.2 的说明中列出了对 Windows 11 24H2 及更新系统上 Windows 安装程序崩溃的修复。',
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: [
          '**以下各项均来自 Logseq 的 README、文档或版本说明，PromptQuorum 均未测试。**',
        ],
        items: [
          '**大纲笔记与数据库图谱。**块和页面都是“节点”，可以带标签和属性，内置标签涵盖任务、日志、查询、闪卡、附件和模板，另有表格视图。',
          '**MCP 服务器（可选）。**启用后，MCP 客户端可以搜索节点，创建并列出页面、标签和属性，添加块并编辑块标题，多项更改可合并为一次调用。',
          '**Sync 与 Publish。**Logseq Sync 也支持实时协作，文档称其为付费功能，Open Collective 的支持者（每月 5 美元）和赞助者（每月 15 美元）可以使用；Publish 在 [logseq.io](https://logseq.io) 上分享只读页面。两者都是可选的。',
          '**插件与主题。**插件市场和 JavaScript 插件 SDK 可扩展应用；AI 聊天类插件由社区制作，不属于 Logseq。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**隐私政策最近更新于 2023 年 7 月 28 日，其中说明 Logseq, Inc. 会收集你提供的身份、联系和交易数据，以及应用自动采集的技术数据：设备信息、操作系统、平台（Electron 或浏览器）和发布版本。**政策还定义了关于服务使用方式的使用数据。',
          '官网称数据在本地归你所有，政策的数据表中也没有列出笔记内容。数据可能离开设备的环节是 Sync、Publish 和网页版，各有自己的条款。可选的 MCP 服务器在 localhost 上运行，但数据流向取决于你接入的 AI 客户端：LM Studio 这类本地客户端把数据留在本机，而 Gemini CLI 这类云端客户端会把图谱内容发送给其提供方。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是开发方的声明，不是审计结果。该政策早于 2.0 Beta 及其同步、MCP 和移动功能，PromptQuorum 也没有检查该应用的网络流量。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**想要开源大纲笔记的用户。**需要反向链接和每日日志，并能接受 Beta 版本。',
          '**已在使用本地模型工具的人。**例如 LM Studio，希望它通过 MCP 读取或起草笔记。',
          '**现有的文件图谱用户。**想先用测试图谱试用数据库版。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**大型图谱下的可靠性。**PromptQuorum 没有安装或加载该应用，因此速度、崩溃情况和导入质量均未知。',
          '**移动端状态。**文档称 Android 应用尚未开放 Alpha 测试，但 2.0.2 版本附带了 APK；哪个移动端构建面向普通用户并不明确。',
          '**文件格式。**官网宣传“Markdown files”，称笔记可在其他工具中打开，而 DB 版文档描述的是以 SQLite 备份的数据库图谱；Markdown 是否仍是主要格式，两者并未厘清。',
          '**使用条款。**我们读了隐私政策，但没有读完整的使用条款，因此 Sync 和 Publish 账户的条件未经核实。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: [
          '应用',
          '平台',
          '价格 / 许可证',
          '主要区别',
        ],
        rows: [
          {
            '应用': '[SiYuan](/zh/power-local-llm/siyuan-review)',
            '平台': 'macOS、Windows、Linux、iOS、Android',
            '价格 / 许可证': 'AGPL-3.0 / 核心免费，同步付费',
            '主要区别': '基于块的工作空间，AI 代理功能会调用你配置的模型服务商',
          },
          {
            '应用': '[Blinko](/zh/power-local-llm/blinko-review)',
            '平台': '自托管网页应用（Docker）',
            '价格 / 许可证': 'GPL-3.0 / 免费',
            '主要区别': '自托管笔记，RAG 搜索默认调用外部 LLM',
          },
        ],
        note: '这里只列出已有 PromptQuorum 评测的笔记应用；请到各应用官网核实其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '我可以自己托管 Sync 和 Publish 吗？',
            a: '可以，据文档：在 Settings、Advanced 中填写 Sync 服务器 URL 或 Publish 服务器 URL。自托管 Publish 还需要一个 Cloudflare 账户。',
          },
          {
            q: '可以把现有的文件图谱迁移到数据库版吗？',
            a: '文档介绍了三点菜单 Import 下的“File to DB graph”导入器。包含多个查询、嵌入或引用的块，每种只会导入第一个。',
          },
          {
            q: 'Sync 加密什么？',
            a: '文档只说明在创建同步图谱之前，要先在 Settings、Encryption 中设置一次加密密码；没有描述具体的加密机制，PromptQuorum 也没有查证是否存在独立审计。',
          },
          {
            q: 'Logseq 有命令行吗？',
            a: '针对 DB 图谱有：logseq CLI 可独立于应用运行命令，例如用于 CI，并随 nightly 桌面版提供。它也可以在没有应用的情况下启动 MCP 服务器。',
          },
          {
            q: '有多少插件支持数据库版？',
            a: '文档统计有 65 个以上的插件支持 DB 图谱。AI 插件由社区制作，请查看各插件的 README 了解它调用哪个模型；[logseq-copilot](/zh/power-local-llm/logseq-copilot-review) 另有单独评测。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Logseq 是一款持续更新、开源且本地优先的笔记工具，它在 AI 方面的角色刻意保持很小：外部客户端通过可选的服务器接入。另一方面，本文所评版本是 Beta，移动端的提供情况参差不齐，也没有做过实际测试。它适合能接受 Beta 并自带 AI 工具的用户；需要稳定环境的人，在迁移真实笔记之前应先确认自己安装的是哪个发布系列。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[GitHub 上的 Logseq](https://github.com/logseq/logseq) — README、许可证与仓库动态，核查于 2026 年 10 月 24 日。',
          '[Logseq 2.0.2 版本](https://github.com/logseq/logseq/releases/tag/2.0.2) — 版本说明、安装文件和发布日期。',
          '[Logseq 官网](https://logseq.com) — 产品说明和下载页面，核查于 2026 年 10 月 24 日。',
          '[Logseq 隐私政策](https://logseq.com/privacy-policy) — 所收集的数据，最近更新于 2023 年 7 月 28 日。',
          '[Logseq DB 版文档](https://github.com/logseq/docs/blob/master/db-version.md) — MCP 服务器、Sync、Publish、插件、导入器和 CLI。',
          '[App Store 上的 Logseq](https://apps.apple.com/us/app/logseq/id1601013908) — 带有版本和发布日期的较早 iOS 页面。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[logseq-copilot 评测](/zh/power-local-llm/logseq-copilot-review) — 面向 Logseq 的第三方 AI 插件，单独评测。',
          '[Obsidian 与 Logseq 的 AI 插件对比](/zh/power-local-llm/obsidian-logseq-ai-plugins) — 两款笔记应用的 AI 插件选择。',
          '[在 Logseq 和 Joplin 中使用本地 LLM](/zh/power-local-llm/local-llm-with-logseq-and-joplin) — 与这些笔记应用搭配运行本地模型。',
          '[本地知识与检索工具对比](/zh/power-local-llm/local-llm-knowledge-retrieval-compared) — 笔记集成类别的对比文章。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具完整目录。',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/logseq-review-hero-ko.webp',
    title: 'Logseq 리뷰: 로컬 저장 오픈소스 아웃라이너',
    seoTitle: 'Logseq 리뷰: 로컬 우선 노트와 선택형 AI 서버',
    intro: 'Logseq는 [Logseq, Inc.](https://logseq.com)가 만든 오픈소스 아웃라이너 겸 지식 베이스로, 노트를 사용자의 기기에 보관합니다. 앱 자체에는 AI 모델이 없으며, 현재의 데이터베이스 버전 베타에는 외부 AI 클라이언트가 그래프를 읽고 편집할 수 있는 선택형 MCP 서버가 추가되었습니다. 이 리뷰는 2026년 10월 24일에 확인한 프로젝트 웹사이트, GitHub 저장소, 문서, 개인정보 처리방침을 바탕으로 하며, PromptQuorum은 앱을 직접 테스트하지 않았습니다. AI 플러그인 [logseq-copilot](/ko/power-local-llm/logseq-copilot-review)은 별도의 서드파티 프로젝트이며 Logseq 자체가 아닙니다.',
    metaDescription: 'Logseq 리뷰: 데이터를 기기에 두는 오픈소스 노트 앱, AI 도구용 선택형 MCP 서버 제공. 설치 방법, 가격, 개인정보, 미확인 사항을 정리했습니다.',
    twitterDescription: 'Logseq 리뷰: AI가 내장되지 않은 로컬 우선 오픈소스 노트와 선택형 MCP 서버. 출처로 확인된 것과 확인되지 않은 것.',
    audience: 'Logseq가 데이터를 기기에 두는지, AI 도구를 어떻게 연결할 수 있는지, 출처가 무엇을 확인하지 못했는지 알고 싶은 노트 사용자를 위한 글입니다.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'logseq 리뷰',
    targetKeywords: [
      'logseq 리뷰',
      'logseq ai',
      'logseq mcp 서버',
      'logseq 로컬 노트',
      'logseq 오픈소스',
      'logseq 데이터베이스 버전 베타',
      'logseq obsidian 로컬 ai 비교',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Logseq(버전 2.0.2, 데이터베이스 버전의 베타)는 노트를 사용자의 기기에 보관하는 오픈소스 아웃라이너 겸 지식 베이스입니다.** README는 이 베타에서 데이터 손실이 발생할 수 있다고 경고하며 자동 백업을 권장합니다. 이 글의 모든 내용은 프로젝트의 웹사이트, 저장소, 문서에서 가져왔습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Logseq는 내 기기에서 AI 모델을 실행하나요?',
        answer: '아니요. 출처에는 Logseq 자체에 언어 모델이 들어 있다는 설명이 없습니다. AI는 선택형 MCP 서버를 통해 연결되며, Settings, AI에서 켜면 외부 클라이언트가 그래프를 다룰 수 있습니다. 문서는 예시 클라이언트로 모델을 로컬에서 실행하는 LM Studio와 클라우드 기반의 Gemini CLI를 듭니다.',
        bullets: [
          '서버는 127.0.0.1에서 대기하며, 직접 만든 Bearer 토큰이 필요합니다.',
          '이를 통한 변경은 앱에서 되돌릴 수 있고, "pretend" 옵션으로 편집 결과를 미리 확인할 수 있습니다.',
          '페이지·태그·속성 편집과 하위 블록 읽기는 문서에서 아직 남은 작업으로 분류되어 있습니다.',
          '채팅과 슬래시 명령 방식의 AI는 커뮤니티 플러그인에서 오며 Logseq에 포함되지 않습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '빠른 답변',
        anchor: 'quick-answer',
      },
      {
        label: 'Logseq란?',
        anchor: 'what-is-murmur',
      },
      {
        label: '입수 방법',
        anchor: 'get-it',
      },
      {
        label: '출처로 확인된 기능',
        anchor: 'key-features',
      },
      {
        label: '데이터 흐름과 개인정보',
        anchor: 'privacy',
      },
      {
        label: '이런 분께 적합합니다',
        anchor: 'who-should-use',
      },
      {
        label: '확인하지 못한 사항',
        anchor: 'who-should-not-use',
      },
      {
        label: '경쟁 제품과 대안',
        anchor: 'vs-alternatives',
      },
      {
        label: '자주 묻는 질문',
        anchor: 'faq',
      },
      {
        label: '결론',
        anchor: 'verdict',
      },
      {
        label: '출처',
        anchor: 'sources',
      },
      {
        label: '관련 글',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Logseq는 노트를 로컬에 저장하고 자체 AI 모델은 없으며, 외부 AI 클라이언트가 그래프를 사용할 수 있는 선택형 MCP 서버를 제공합니다.',
          },
          {
            type: 'plain-terms',
            text: '서로 연결된 노트를 들여쓰기 목록으로 작성하고 데이터는 컴퓨터나 휴대폰에 남습니다. AI의 도움이 필요하면 별도의 AI 도구를 직접 Logseq에 연결합니다.',
          },
        ],
        items: [
          '유지 관리: 최신 릴리스 2.0.2는 2026년 10월 7일자이고 저장소에는 2026년 10월 23일에 마지막 푸시가 있어, 방치된 프로젝트 경고는 적용되지 않습니다.',
          '라이선스: AGPL-3.0이며 소스 코드는 GitHub에 있습니다. 개발사는 Logseq, Inc.입니다.',
          '비용: 웹사이트에 따르면 개인 사용은 무료이며, Logseq Sync는 유료 부가 서비스로 직접 호스팅할 수도 있습니다.',
          '형식: 기존의 파일 그래프와 새로운 데이터베이스 그래프가 있으며, 2.0 계열은 데이터베이스 버전으로 동작합니다.',
          '플랫폼: macOS·Windows·Linux 데스크톱 앱, 웹 앱, 일부는 초대 전용인 모바일 앱입니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 24일에 확인한 프로젝트의 웹사이트, 저장소, 문서, 개인정보 처리방침을 바탕으로 합니다. PromptQuorum은 Logseq를 설치하거나 불러와 보지 않았으므로 안정성과 MCP 사용 흐름은 평가하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-logseq',
        title: 'Logseq란?',
        content: [
          '**Logseq는 아웃라이너입니다. 노트를 들여쓰기 블록으로 작성하고, 페이지 참조로 서로 연결하며, 백링크를 탐색할 수 있고, 그 위에 저널·작업·쿼리가 있습니다.** 개인정보 처리방침에 따르면 개발사 Logseq, Inc.는 델라웨어 법인이며, 소스 코드는 공개되어 있습니다.',
          '**프로젝트는 이제 두 종류의 그래프를 제공합니다.** 이전 형식인 파일 그래프는 페이지를 Markdown 또는 Org-mode 파일로 보관하고, 이 글에서 다루는 버전에서 도입된 데이터베이스("DB") 그래프는 내용을 데이터베이스에 저장합니다. README는 DB 버전을 베타, 새 모바일 앱과 실시간 동기화를 알파로 규정하고, 데이터 손실이 발생할 수 있다고 밝히며, 실제 작업을 옮기기 전에 자동 백업과 전용 테스트 그래프를 준비하라고 권합니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: '입수 방법',
        content: [
          '**Logseq는 GitHub Releases 페이지에서 macOS, Windows, Linux용을 무료로 내려받을 수 있으며, 설치 파일이 제공되므로 터미널 작업이 필요하지 않습니다.**',
        ],
        columns: [
          '옵션',
          '입수 방법',
        ],
        rows: [
          {
            '옵션': '데스크톱',
            '입수 방법': '[GitHub의 Logseq 릴리스](https://github.com/logseq/logseq/releases/latest): macOS용 .dmg(Apple 실리콘과 Intel), Windows용 .exe 설치 파일(x64와 ARM64), Linux용 AppImage(x86_64와 ARM64)',
          },
          {
            '옵션': '웹 앱',
            '입수 방법': '[app.logseq.com](https://app.logseq.com/), 2.0.2 릴리스 노트에 언급되어 있습니다',
          },
          {
            '옵션': 'iPhone·iPad',
            '입수 방법': '릴리스 노트에 따르면 DB 버전의 iOS 앱은 TestFlight 베타입니다([베타 참여](https://testflight.apple.com/join/eBcJ9Hpc)). 이전 App Store 항목 [Logseq](https://apps.apple.com/us/app/logseq/id1601013908)에는 2024년 4월의 0.10.9 버전이 표시됩니다',
          },
          {
            '옵션': 'Android',
            '입수 방법': 'GitHub의 2.0.2 릴리스에 APK인 Logseq-android-2.0.2.apk가 첨부되어 있습니다',
          },
          {
            '옵션': '웹사이트',
            '입수 방법': '[logseq.com](https://logseq.com)',
          },
          {
            '옵션': '개인정보 처리방침',
            '입수 방법': '[logseq.com/privacy-policy](https://logseq.com/privacy-policy)',
          },
          {
            '옵션': '소스 코드',
            '입수 방법': '[github.com/logseq/logseq](https://github.com/logseq/logseq), AGPL-3.0',
          },
        ],
        note: '확인한 버전: 2.0.2, 2026년 10월 7일 공개, 제목은 "Desktop APP 2.0.2 (Beta Testing)"입니다. 2.0 계열 이전 릴리스는 2025년 12월 1일의 0.10.15입니다. README에는 curl로 실행하는 Linux 설치 스크립트도 있으며, 2.0.2 노트에는 Windows 11 24H2 이상에서 Windows 설치 프로그램이 충돌하던 문제의 수정이 기재되어 있습니다.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 Logseq의 README, 문서, 릴리스 노트에서 가져온 것이며 PromptQuorum이 테스트한 것은 없습니다.**',
        ],
        items: [
          '**아웃라이너와 데이터베이스 그래프.** 블록과 페이지는 태그와 속성을 가질 수 있는 "노드"이며, 작업·저널·쿼리·플래시카드·첨부 파일·템플릿용 기본 태그와 표 보기가 있습니다.',
          '**MCP 서버(선택).** 켜면 MCP 클라이언트가 노드를 검색하고, 페이지·태그·속성을 만들고 나열하며, 블록을 추가하고 블록 제목을 편집할 수 있습니다. 여러 변경을 한 번의 호출로 묶을 수도 있습니다.',
          '**Sync와 Publish.** 실시간 협업도 지원하는 Logseq Sync는 유료 기능으로 설명되며, Open Collective 후원자는 월 5달러, 스폰서는 월 15달러에 이용할 수 있습니다. Publish는 읽기 전용 페이지를 [logseq.io](https://logseq.io)에서 공유합니다. 둘 다 선택 사항입니다.',
          '**플러그인과 테마.** 플러그인 마켓플레이스와 JavaScript 플러그인 SDK로 앱을 확장할 수 있습니다. AI 채팅 플러그인은 커뮤니티가 만든 것으로 Logseq에 포함되지 않습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**2023년 7월 28일에 마지막으로 갱신된 개인정보 처리방침에 따르면, Logseq, Inc.는 사용자가 제공하는 신원·연락처·거래 데이터와 앱이 자동으로 수집하는 기술 데이터(기기 정보, 운영체제, 플랫폼(Electron 또는 브라우저), 릴리스 버전)를 수집합니다.** 서비스 이용 방식에 관한 사용 데이터도 정의되어 있습니다.',
          '웹사이트는 데이터가 로컬에서 사용자 소유라고 밝히며, 방침의 데이터 표에는 노트 내용이 나열되어 있지 않습니다. 데이터가 기기를 떠나는 지점은 Sync, Publish, 웹 앱이며 각각 별도의 약관을 따릅니다. 선택형 MCP 서버는 localhost에서 실행되지만, 데이터가 어디로 가는지는 연결하는 AI 클라이언트가 정합니다. LM Studio 같은 로컬 클라이언트는 데이터를 기기에 두고, Gemini CLI 같은 클라우드 클라이언트는 그래프 내용을 제공사로 보내게 됩니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발사의 선언이지 감사 결과가 아닙니다. 방침은 2.0 베타와 그 동기화·MCP·모바일 기능보다 앞선 것이며, PromptQuorum은 앱의 네트워크 트래픽을 점검하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**오픈소스 아웃라이너를 원하는 노트 사용자.** 백링크와 일일 저널을 쓰고 싶고 베타를 감수할 수 있는 분.',
          '**이미 로컬 모델 도구를 쓰는 분.** LM Studio 등으로 MCP를 통해 노트를 읽히거나 초안을 쓰게 하고 싶은 경우.',
          '**기존 파일 그래프 사용자.** 먼저 테스트 그래프로 데이터베이스 버전을 써 보고 싶은 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**대형 그래프에서의 안정성.** PromptQuorum은 앱을 설치하거나 불러오지 않았으므로 속도, 충돌, 가져오기 품질은 알 수 없습니다.',
          '**모바일 상태.** 문서는 Android 앱이 아직 알파 테스트에 열리지 않았다고 하지만 2.0.2 릴리스에는 APK가 첨부되어 있습니다. 일반 사용자용 모바일 빌드가 무엇인지는 분명하지 않습니다.',
          '**파일 형식.** 웹사이트는 다른 도구에서 노트를 열 수 있다며 "Markdown files"를 내세우지만, DB 버전 문서는 SQLite로 백업하는 데이터베이스 그래프를 설명하며, Markdown이 여전히 주요 형식인지는 정리되어 있지 않습니다.',
          '**이용 약관.** 개인정보 처리방침은 읽었지만 이용 약관 전문은 읽지 않았으므로 Sync와 Publish 계정의 조건은 확인하지 못했습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: [
          '앱',
          '플랫폼',
          '가격 / 라이선스',
          '핵심 차이점',
        ],
        rows: [
          {
            '앱': '[SiYuan](/ko/power-local-llm/siyuan-review)',
            '플랫폼': 'macOS, Windows, Linux, iOS, Android',
            '가격 / 라이선스': 'AGPL-3.0 / 핵심 무료, 동기화 유료',
            '핵심 차이점': '블록 기반 작업 공간으로, 사용자가 설정한 모델 제공자를 호출하는 AI 에이전트 기능 포함',
          },
          {
            '앱': '[Blinko](/ko/power-local-llm/blinko-review)',
            '플랫폼': '셀프 호스팅 웹 앱(Docker)',
            '가격 / 라이선스': 'GPL-3.0 / 무료',
            '핵심 차이점': '셀프 호스팅 노트이며 RAG 검색이 기본적으로 외부 LLM을 호출',
          },
        ],
        note: 'PromptQuorum 리뷰가 있는 노트 앱만 나열했습니다. 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 사이트에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Sync와 Publish를 직접 호스팅할 수 있나요?',
            a: '네, 문서에 따르면 가능합니다. Settings, Advanced에서 Sync 서버 URL 또는 Publish 서버 URL을 지정합니다. Publish를 직접 호스팅하려면 Cloudflare 계정도 필요합니다.',
          },
          {
            q: '기존 파일 그래프를 데이터베이스 버전으로 옮길 수 있나요?',
            a: '문서에는 점 세 개 메뉴의 Import 아래에 있는 "File to DB graph" 가져오기 도구가 설명되어 있습니다. 쿼리, 임베드, 인용이 여러 개 들어 있는 블록은 종류별로 첫 번째만 가져옵니다.',
          },
          {
            q: 'Sync는 무엇을 암호화하나요?',
            a: '문서는 동기화 그래프를 만들기 전에 Settings, Encryption에서 암호화 비밀번호를 한 번 설정하라고만 안내합니다. 암호 방식은 설명하지 않으며, PromptQuorum은 독립 감사가 있는지 확인하지 않았습니다.',
          },
          {
            q: 'Logseq에 명령줄 도구가 있나요?',
            a: 'DB 그래프용으로 있습니다. logseq CLI는 앱과 별개로 명령을 실행하며, 예를 들어 CI에서 쓸 수 있고 nightly 데스크톱 빌드에 포함됩니다. 앱 없이 MCP 서버를 시작할 수도 있습니다.',
          },
          {
            q: '데이터베이스 버전에서 동작하는 플러그인은 몇 개인가요?',
            a: '문서는 DB 그래프를 지원하는 플러그인을 65개 이상으로 집계합니다. AI 플러그인은 커뮤니티가 만든 것이므로 어떤 모델을 호출하는지 각 플러그인의 README에서 확인하세요. [logseq-copilot](/ko/power-local-llm/logseq-copilot-review)은 따로 리뷰했습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'Logseq는 활발히 업데이트되는 오픈소스·로컬 우선 노트 도구이며, AI에서의 역할은 의도적으로 작습니다. 외부 클라이언트가 선택형 서버를 통해 연결하는 방식입니다. 반면 이 글이 다룬 버전은 베타이고, 모바일 제공 상황은 고르지 않으며, 직접 테스트는 하지 않았습니다. 베타를 감수하고 자신의 AI 도구를 가져올 수 있는 분께 맞습니다. 안정된 환경이 필요하다면 실제 노트를 옮기기 전에 어느 릴리스 계열을 설치하는지 확인하세요.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[GitHub의 Logseq](https://github.com/logseq/logseq) — README, 라이선스, 저장소 활동. 2026년 10월 24일 확인.',
          '[Logseq 2.0.2 릴리스](https://github.com/logseq/logseq/releases/tag/2.0.2) — 릴리스 노트, 설치 파일, 공개일.',
          '[Logseq 웹사이트](https://logseq.com) — 제품 설명과 다운로드 페이지. 2026년 10월 24일 확인.',
          '[Logseq 개인정보 처리방침](https://logseq.com/privacy-policy) — 수집 데이터. 2023년 7월 28일 마지막 갱신.',
          '[Logseq DB 버전 문서](https://github.com/logseq/docs/blob/master/db-version.md) — MCP 서버, Sync, Publish, 플러그인, 가져오기 도구, CLI.',
          '[App Store의 Logseq](https://apps.apple.com/us/app/logseq/id1601013908) — 버전과 공개일이 표시된 이전 iOS 항목.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[logseq-copilot 리뷰](/ko/power-local-llm/logseq-copilot-review) — Logseq용 서드파티 AI 플러그인, 별도 리뷰.',
          '[Obsidian과 Logseq AI 플러그인 비교](/ko/power-local-llm/obsidian-logseq-ai-plugins) — 두 노트 앱의 AI 플러그인 선택지.',
          '[Logseq와 Joplin에서 로컬 LLM 쓰기](/ko/power-local-llm/local-llm-with-logseq-and-joplin) — 이 노트 앱들과 함께 로컬 모델을 실행하는 방법.',
          '[로컬 지식·검색 도구 비교](/ko/power-local-llm/local-llm-knowledge-retrieval-compared) — 노트 연동 카테고리 비교 글.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 목록.',
        ],
      },
    },
  },
}
