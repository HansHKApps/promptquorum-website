// Tolaria Review: Open-Source Markdown Notes with Git and AI Agents
// Slug: tolaria-review
// Companion to: siyuan-review, blinko-review, local-llm-knowledge-retrieval-compared
// Sources: tolaria.md, tolaria.md/download, the GitHub repository refactoringhq/tolaria (README, site/ docs, docs/adr/0016, releases API,
// repository API, commits API), all checked 2026-10-24 — no hands-on testing. Free and open source (AGPL-3.0-or-later per the site); no prices to convert.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/tolaria-review-hero-en.webp',
    title: 'Tolaria Review: Open-Source Markdown Notes with Git and AI Agents',
    seoTitle: 'Tolaria Review: Free Markdown Notes App with Git and AI',
    intro: 'Tolaria is a free, open-source desktop app by Luca, the founder of Refactoring, that keeps Markdown notes as plain files in a Git-backed vault and can hand them to AI coding agents or to local and hosted models. This review is based on the project\'s [website](https://tolaria.md), documentation and GitHub repository, checked on 24 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription: 'Tolaria review: free open-source desktop app that stores notes as ordinary Markdown files in a Git vault and connects AI agents and models. Untested by us.',
    twitterDescription: 'Tolaria review: plain Markdown files, an integrated Git client and AI agents or local models on top. Free and open source; what the sources confirm and what they do not.',
    audience: 'Note-takers, researchers and developers who want a local-first Markdown notes app with AI help and need to know what the sources confirm, what the project only claims and what it costs.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Tolaria review',
    targetKeywords: [
      'tolaria review',
      'tolaria markdown notes app',
      'open source markdown notes app with git',
      'local first markdown knowledge base',
      'notes app with ai coding agents',
      'markdown vault git sync desktop',
      'tolaria ai notes',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Tolaria (stable version 2026.10.13) is free, open-source software for Markdown knowledge bases on the desktop that stores notes as plain files and connects them to the AI agents and models you choose.** It ships no AI model of its own and needs no account. Every statement here comes from the project\'s website, documentation and repository.',
    quickAnswerTop: {
      en: {
        question: 'Does Tolaria keep my notes on my own computer?',
        answer: 'Per the project, yes: notes are plain Markdown files in a folder on your disk, with no database, no proprietary format and no account. Syncing is done with Git against a remote you pick. AI features are optional and send note context only to the agent or model provider you configure, and crash reporting is opt-in through a consent dialog.',
        bullets: [
          'Notes are Markdown files with YAML frontmatter that any editor can open.',
          'Git support covers commits, history, pull and push.',
          'The AI panel works with coding-agent CLIs and with local or hosted models.',
          'Desktop builds run on Mac, Windows and Linux; iPhone and iPad are in beta.',
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
        label: 'What Is Tolaria?',
        anchor: 'what-is-tolaria',
      },
      {
        label: 'Get It',
        anchor: 'get-it',
      },
      {
        label: 'Requirements',
        anchor: 'requirements',
      },
      {
        label: 'How to Get Started',
        anchor: 'getting-started',
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
            text: 'Tolaria is an open-source desktop notes app that treats a folder of Markdown files as a Git-backed vault and lets AI agents and models work on it.',
          },
          {
            type: 'plain-terms',
            text: 'You keep ordinary text files on your disk, browse and edit them in a fast app, track changes with Git and, if you want, point an AI agent or a model at the vault.',
          },
        ],
        items: [
          'Maintenance: the repository was last updated on 24 October 2026, so no stale-project warning applies.',
          'Release channels: a manually promoted stable build (2026.10.13) and alpha builds published on pushes to the main branch.',
          'Cost: free and open source under AGPL-3.0-or-later, with no account; the website calls it free forever.',
          'AI: no bundled model; agents such as Claude Code and Codex and providers such as Ollama or hosted APIs are connected by you.',
          'Maker: Luca, founder of Refactoring; the README lists tool sponsors such as Codacy and CircleCI.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the website, documentation and GitHub repository, checked on 24 October 2026. PromptQuorum has not installed or benchmarked the app, so speed, stability and AI results are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-tolaria',
        title: 'What Is Tolaria?',
        content: [
          '**Tolaria is a desktop app for managing Markdown knowledge bases: a vault is a normal folder of Markdown files, and the app adds an editor, links between notes, saved views and a Git client on top.** The repository describes it as a "desktop app to manage markdown knowledge bases" and the website as "a second brain for the AI era"; the author says he uses it for a vault of more than 10,000 notes.',
          'The README names three uses: running a second brain or personal knowledge base, organizing company docs as context for AI, and storing the memory and procedures of AI assistants. The app is built with Tauri, React and TypeScript.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Tolaria is a free download for macOS, Windows and Linux, with a Homebrew cask on macOS; iPhone and iPad are in a TestFlight beta.**',
        ],
        columns: [
          'Option',
          'How to get it',
        ],
        rows: [
          {
            Option: 'Desktop',
            'How to get it': '[Download page](https://tolaria.md/download/) with all three desktop systems',
          },
          {
            Option: 'Homebrew',
            'How to get it': 'brew install --cask tolaria (macOS)',
          },
          {
            Option: 'iPhone and iPad',
            'How to get it': 'Beta via TestFlight; access is requested in the project Discord',
          },
          {
            Option: 'Website',
            'How to get it': '[tolaria.md](https://tolaria.md)',
          },
          {
            Option: 'Privacy policy',
            'How to get it': 'No standalone policy found; see the [telemetry design note](https://github.com/refactoringhq/tolaria/blob/main/docs/adr/0016-sentry-posthog-telemetry.md)',
          },
          {
            Option: 'Source code',
            'How to get it': '[GitHub: refactoringhq/tolaria](https://github.com/refactoringhq/tolaria), AGPL-3.0-or-later',
          },
        ],
        note: 'Version reviewed: stable 2026.10.13, released on 13 October 2026 ([release page](https://github.com/refactoringhq/tolaria/releases/tag/v2026-10-13)); alpha builds were being published the same day. The software is free and the website describes no paid tier.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**Tolaria publishes builds for the three major desktop systems; the sources state no RAM, disk or GPU requirement.**',
        ],
        columns: [
          'Item',
          'What the sources say',
        ],
        rows: [
          {
            Item: 'Operating systems',
            'What the sources say': 'macOS (Apple silicon and Intel), Windows x64 and Linux x86_64; macOS is the primary target and Windows and Linux are called "supported, early"',
          },
          {
            Item: 'Installers',
            'What the sources say': 'A .dmg for macOS, a setup .exe for Windows, and AppImage, deb and RPM files for Linux',
          },
          {
            Item: 'Hardware',
            'What the sources say': 'No minimum stated; any model inference runs in the agent or provider you connect, not in Tolaria itself',
          },
          {
            Item: 'Git',
            'What the sources say': 'Optional: a plain folder opens as a vault, and Git adds history, commits, pull and push',
          },
          {
            Item: 'Internet',
            'What the sources say': 'The README says a vault works completely offline; Git remotes and hosted model providers need a connection',
          },
        ],
        note: 'The download page lists no minimum operating-system versions. The README says Windows installers are Authenticode-signed, while the install page says that signing is still to be added after certificate provisioning; company-managed devices may need IT approval first.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**The steps follow the project\'s install page; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Install',
            whyItMatters: 'Download the stable build for your system, or run the Homebrew cask on macOS.',
          },
          {
            title: 'Open a vault',
            whyItMatters: 'Clone the Getting Started vault for a guided tour, or open an existing folder of Markdown files.',
          },
          {
            title: 'Use the command palette',
            whyItMatters: 'Press Cmd+K on macOS or Ctrl+K on Windows and Linux to reach commands.',
          },
          {
            title: 'Connect AI (optional)',
            whyItMatters: 'Add a model provider in Settings, or install a supported coding-agent CLI that Tolaria then detects.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the project\'s website, documentation or README; none has been independently tested.**',
        ],
        items: [
          '**Markdown vault and relationships.** Notes are Markdown files with YAML frontmatter; types are navigation lenses rather than enforced schemas, and notes link through wikilinks with autocomplete.',
          '**Editor.** A block-based editor with slash commands, a raw Markdown mode, whiteboards, media previews and table navigation; the documentation also has guides for spreadsheets and HTML blocks.',
          '**Git client.** Commit, push, pull, whole-vault and per-note history, diffs and conflict handling against any remote you connect.',
          '**Custom views and multiple vaults.** Saved views and sidebar sections, plus an option to load several vaults into one graph.',
          '**AI agents and models.** The AI panel streams CLI coding agents that the documentation lists as Claude Code, Codex, GitHub Copilot, OpenCode, Pi, Antigravity CLI, Kiro and Hermes Agent, and answers in chat mode from note context through Ollama, LM Studio, OpenAI, Anthropic, Gemini, OpenRouter or any OpenAI-compatible endpoint. Tolaria also exposes an MCP server that can search, read, create and update notes.',
        ],
        note: 'Agents keep their own sign-in, tools and billing; Tolaria only detects them and streams their output.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**The project describes Tolaria as files-first and offline-first: notes live in a folder you choose, there is no account, and the README says a vault works completely offline.** Sync is Git against any remote you set up, with "zero dependency on Tolaria servers" according to the README.',
          'AI is where data can leave the machine. Coding agents run on your computer under their own authentication, a hosted model provider receives the note context you send it, and Ollama or LM Studio keep that context local. Provider API keys are not stored in vault settings; you save them on the device or read them from an environment variable. Crash reporting is opt-in through a consent dialog on first launch (stack traces, app version, operating system and architecture, with no vault content or file paths, per the dialog text), and the source also has a separate analytics switch under Settings.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the project\'s declarations and observations from its source code, not audit results; PromptQuorum did not inspect network traffic. No privacy-policy page was found on the website or the download page; the closest document is the repository\'s [telemetry design note](https://github.com/refactoringhq/tolaria/blob/main/docs/adr/0016-sentry-posthog-telemetry.md).',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Writers and researchers** who want a long-lived Markdown archive that works with ordinary text tools and Git history.',
          '**People using AI coding agents on their notes** who want every change to show up as a reviewable Git diff.',
          '**Developers and teams keeping docs as AI context** who are comfortable with Git and want files they can version.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Real-world use.** PromptQuorum did not install Tolaria, so editor speed, stability and the author\'s statement about a vault of more than 10,000 notes are untested.',
          '**AI quality and cost.** The agents and models are third-party tools; their results, costs and what they send to their own providers were not examined.',
          '**Platform polish.** The project calls Windows and Linux support early, and the sources differ on Windows signing; macOS notarization is not mentioned.',
          '**Mobile beta.** The iPhone and iPad app and the TestFlight access process were not tried, and the documentation lists its feature set only briefly.',
          '**Privacy beyond the code.** No privacy policy is published, and the opt-in and path-scrubbing statements come from the repository, not an audit.',
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
            'Price / license': 'Free core, paid sync / AGPL-3.0',
            'Key difference': 'Block-level references and built-in AI agent collaboration; Tolaria centers plain Markdown files and Git',
          },
          {
            App: '[Blinko](/power-local-llm/blinko-review)',
            Platforms: 'Self-hosted web app (Docker)',
            'Price / license': 'Free / GPL-3.0',
            'Key difference': 'Self-hosted notes with RAG search through a configured LLM provider; Tolaria is a desktop app on local files',
          },
        ],
        note: 'Both apps are in the PromptQuorum directory; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I open a folder of Markdown files I already have?',
            a: 'Yes. The install guide says you can open an existing folder of Markdown files as a vault. If the folder is not a Git repository, Tolaria can initialize Git only when you ask, and it avoids broad folders such as Desktop, Documents or Downloads unless they are clearly dedicated vault folders.',
          },
          {
            q: 'What is the difference between Stable and Alpha?',
            a: 'Stable is promoted manually and is the channel the download page points to; Alpha follows every push to the main branch, so it gets features earlier but can be rougher. Several alpha builds were published within hours on 24 October 2026, and the documentation advises committing or pushing vault changes before switching channels.',
          },
          {
            q: 'Can an AI agent change my notes without asking?',
            a: 'Coding agents can edit files in the vault. The documentation describes a Vault Safe mode limited to file, search and edit tools and a Power User mode that can allow local shell commands scoped to the vault for agents that support it. Direct model chat gets no vault-write tools or shell access, and a Git-backed vault shows changes as diffs you can review and roll back.',
          },
          {
            q: 'Is there a mobile app?',
            a: 'An iPhone and iPad app is in beta through TestFlight, and access is requested in the project\'s Discord community. According to the documentation it offers a WYSIWYG editor, Git auto-commit and sync through iCloud or Files, while the AI panel and some power features are desktop-only so far.',
          },
          {
            q: 'What license is Tolaria under, and can I reuse the name?',
            a: 'The website says AGPL-3.0-or-later and the GitHub API reports AGPL-3.0. The site adds that the Tolaria name and logo are covered by a trademark policy, so check it before reusing the branding; this is not legal advice.',
          },
          {
            q: 'Who is behind Tolaria?',
            a: 'The website says it was created by Luca, the founder of Refactoring, after years of writing and note-taking, and the README says he built it for himself and shares it as open source. The README names Codacy, CodeScene, CircleCI and Unblocked as tools that support the project; no company or paid plan is described.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Tolaria is an actively developed, free, open-source way to keep Markdown notes as plain files under Git and hand them to the AI agents or models you already use. Against that, Windows and Linux builds are described as early, the project is presented by one named maker, no privacy policy is published, and none of its speed or AI claims could be checked here. It suits people who already like plain files and Git and want AI help with reviewable diffs; anyone who needs a documented privacy policy, a mature mobile app or built-in AI should test it first or look elsewhere.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Tolaria website](https://tolaria.md) — feature overview, AI paths, license and links, checked 24 October 2026.',
          '[Tolaria download page](https://tolaria.md/download/) — stable version 2026.10.13, platforms and Windows signing note, checked 24 October 2026.',
          '[Tolaria on GitHub](https://github.com/refactoringhq/tolaria) — README, documentation, release channels and telemetry design note; latest commit on 24 October 2026.',
          '[Stable release v2026-10-13](https://github.com/refactoringhq/tolaria/releases/tag/v2026-10-13) — installer files and release date, checked 24 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[SiYuan Review](/power-local-llm/siyuan-review) — a privacy-first, block-based knowledge base with built-in AI.',
          '[Blinko Review](/power-local-llm/blinko-review) — self-hosted AI notes with RAG search.',
          '[Knowledge and Retrieval Tools Compared](/power-local-llm/local-llm-knowledge-retrieval-compared) — the category comparison this review belongs to.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Tolaria Review: Open-Source Markdown Notes with Git and AI Agents',
      description: 'Tolaria review: a free, open-source desktop Markdown notes app with a built-in Git client and AI agents or models. Platforms, requirements, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/tolaria-review',
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
        audienceType: 'Note-takers, researchers and developers evaluating a local-first Markdown notes app with AI agents',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Tolaria',
        },
        {
          '@type': 'Thing',
          name: 'Markdown notes',
        },
        {
          '@type': 'Thing',
          name: 'Git',
        },
        {
          '@type': 'Thing',
          name: 'AI agents',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/tolaria-review',
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
          name: 'Tolaria Review',
          item: 'https://www.promptquorum.com/power-local-llm/tolaria-review',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/tolaria-review-hero-de.webp',
    title: 'Tolaria-Rezension: Open-Source-Markdown-Notizen mit Git und KI-Agenten',
    seoTitle: 'Tolaria-Rezension: Markdown-Notizen mit Git und KI-Agenten',
    intro: 'Tolaria ist eine kostenlose Open-Source-Desktop-App von Luca, dem Gründer von Refactoring, die Markdown-Notizen als einfache Dateien in einem Git-Tresor (Vault) verwaltet und sie an KI-Coding-Agenten oder an lokale und gehostete Modelle weitergeben kann. Diese Rezension stützt sich auf die [Website](https://tolaria.md), die Dokumentation und das GitHub-Repository des Projekts, geprüft am 24. Oktober 2026; PromptQuorum hat die App nicht selbst getestet.',
    metaDescription: 'Tolaria-Rezension: kostenlose Open-Source-App, die Markdown-Notizen als Dateien in einem Git-Vault hält und KI-Agenten und Modelle anbindet. Ungetestet.',
    twitterDescription: 'Tolaria-Rezension: einfache Markdown-Dateien, ein eingebauter Git-Client und darüber KI-Agenten oder lokale Modelle. Kostenlos und quelloffen; was die Quellen bestätigen und was nicht.',
    audience: 'Notizenschreiber, Forschende und Entwickler, die eine lokale Markdown-Notiz-App mit KI-Unterstützung suchen und wissen müssen, was die Quellen bestätigen, was das Projekt nur behauptet und was die App kostet.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Tolaria Rezension',
    targetKeywords: [
      'tolaria rezension',
      'tolaria markdown notiz app',
      'open source markdown notizen app mit git',
      'lokale markdown wissensdatenbank',
      'notiz app mit ki coding agenten',
      'markdown vault git sync desktop',
      'tolaria ki notizen',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Tolaria (stabile Version 2026.10.13) ist eine kostenlose Open-Source-Desktop-App für Markdown-Wissensdatenbanken, die Notizen als einfache Dateien speichert und mit den KI-Agenten und Modellen Ihrer Wahl verbindet.** Sie bringt kein eigenes KI-Modell mit und benötigt kein Konto. Jede Aussage hier stammt von Website, Dokumentation und Repository des Projekts.',
    quickAnswerTop: {
      de: {
        question: 'Bleiben meine Notizen bei Tolaria auf meinem eigenen Rechner?',
        answer: 'Laut Projekt ja: Notizen sind einfache Markdown-Dateien in einem Ordner auf Ihrer Festplatte, ohne Datenbank, ohne proprietäres Format und ohne Konto. Die Synchronisierung läuft über Git mit einem Remote Ihrer Wahl. KI-Funktionen sind optional und senden Notizkontext nur an den Agenten oder Modellanbieter, den Sie einrichten; Absturzberichte sind über einen Einwilligungsdialog freiwillig.',
        bullets: [
          'Notizen sind Markdown-Dateien mit YAML-Frontmatter, die sich mit jedem Editor öffnen lassen.',
          'Ein eingebauter Git-Client deckt Commits, Verlauf, Pull und Push ab.',
          'Das KI-Panel arbeitet mit Coding-Agent-CLIs sowie mit lokalen oder gehosteten Modellen.',
          'Desktop-Builds gibt es für macOS, Windows und Linux; iPhone und iPad befinden sich in der Beta.',
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
        label: 'Was ist Tolaria?',
        anchor: 'what-is-tolaria',
      },
      {
        label: 'Bezugsquelle',
        anchor: 'get-it',
      },
      {
        label: 'Anforderungen',
        anchor: 'requirements',
      },
      {
        label: 'So gelingt der Einstieg',
        anchor: 'getting-started',
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
            text: 'Tolaria ist eine quelloffene Desktop-Notiz-App, die einen Ordner mit Markdown-Dateien als Git-gestützten Vault behandelt und KI-Agenten und Modelle darauf arbeiten lässt.',
          },
          {
            type: 'plain-terms',
            text: 'Sie behalten gewöhnliche Textdateien auf Ihrer Festplatte, durchsuchen und bearbeiten sie in einer schnellen App, verfolgen Änderungen mit Git und können auf Wunsch einen KI-Agenten oder ein Modell auf den Vault ansetzen.',
          },
        ],
        items: [
          'Pflege: Das Repository wurde zuletzt am 24. Oktober 2026 aktualisiert, daher gilt keine Warnung vor einem veralteten Projekt.',
          'Release-Kanäle: ein manuell freigegebener Stable-Build (2026.10.13) und Alpha-Builds, die bei Pushes auf den Hauptzweig erscheinen.',
          'Kosten: kostenlos und quelloffen unter AGPL-3.0-or-later, ohne Konto; die Website nennt es dauerhaft kostenlos.',
          'KI: kein mitgeliefertes Modell; Agenten wie Claude Code und Codex sowie Anbieter wie Ollama oder gehostete APIs binden Sie selbst an.',
          'Hersteller: Luca, Gründer von Refactoring; das README nennt Tool-Sponsoren wie Codacy und CircleCI.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension basiert auf Website, Dokumentation und GitHub-Repository, geprüft am 24. Oktober 2026. PromptQuorum hat die App weder installiert noch gemessen; Geschwindigkeit, Stabilität und KI-Ergebnisse werden daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-tolaria',
        title: 'Was ist Tolaria?',
        content: [
          '**Tolaria ist eine Desktop-App zur Verwaltung von Markdown-Wissensdatenbanken: Ein Vault ist ein normaler Ordner mit Markdown-Dateien, und die App ergänzt Editor, Verknüpfungen zwischen Notizen, gespeicherte Ansichten und einen Git-Client.** Das Repository beschreibt sie als „desktop app to manage markdown knowledge bases“, die Website als „a second brain for the AI era“; der Autor sagt, er nutze sie für einen Vault mit mehr als 10.000 Notizen.',
          'Das README nennt drei Einsatzzwecke: ein Second Brain oder persönliches Wissen betreiben, Firmendokumente als Kontext für KI organisieren und das Gedächtnis und die Abläufe von KI-Assistenten ablegen. Die App ist mit Tauri, React und TypeScript gebaut.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Tolaria ist ein kostenloser Download für macOS, Windows und Linux, auf macOS auch als Homebrew-Cask; iPhone und iPad befinden sich in einer TestFlight-Beta.**',
        ],
        columns: [
          'Option',
          'Bezug',
        ],
        rows: [
          {
            Option: 'Desktop',
            Bezug: '[Download-Seite](https://tolaria.md/download/) für macOS, Windows und Linux',
          },
          {
            Option: 'Homebrew',
            Bezug: 'brew install --cask tolaria (macOS)',
          },
          {
            Option: 'iPhone und iPad',
            Bezug: 'Beta über TestFlight; Zugang wird im Discord des Projekts angefragt',
          },
          {
            Option: 'Website',
            Bezug: '[tolaria.md](https://tolaria.md)',
          },
          {
            Option: 'Datenschutzerklärung',
            Bezug: 'Keine eigenständige Erklärung gefunden; siehe die [Telemetrie-Entwurfsnotiz](https://github.com/refactoringhq/tolaria/blob/main/docs/adr/0016-sentry-posthog-telemetry.md)',
          },
          {
            Option: 'Quellcode',
            Bezug: '[GitHub: refactoringhq/tolaria](https://github.com/refactoringhq/tolaria), AGPL-3.0-or-later',
          },
        ],
        note: 'Geprüfte Version: Stable 2026.10.13, veröffentlicht am 13. Oktober 2026 ([Release-Seite](https://github.com/refactoringhq/tolaria/releases/tag/v2026-10-13)); am selben Tag erschienen laufend Alpha-Builds. Die Software ist kostenlos, und die Website beschreibt keine kostenpflichtige Stufe.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
          '**Tolaria veröffentlicht Builds für macOS, Windows und Linux; die Quellen nennen keine Anforderung an RAM, Speicherplatz oder GPU.**',
        ],
        columns: [
          'Punkt',
          'Angaben der Quellen',
        ],
        rows: [
          {
            Punkt: 'Betriebssysteme',
            'Angaben der Quellen': 'macOS (Apple Silicon und Intel), Windows x64 und Linux x86_64; macOS ist die Hauptplattform, Windows und Linux gelten als „supported, early“',
          },
          {
            Punkt: 'Installationsdateien',
            'Angaben der Quellen': 'Eine .dmg für macOS, eine Setup-.exe für Windows sowie AppImage-, deb- und RPM-Dateien für Linux',
          },
          {
            Punkt: 'Hardware',
            'Angaben der Quellen': 'Kein Minimum genannt; Modellinferenz läuft im angebundenen Agenten oder Anbieter, nicht in Tolaria selbst',
          },
          {
            Punkt: 'Git',
            'Angaben der Quellen': 'Optional: Ein einfacher Ordner lässt sich als Vault öffnen, Git ergänzt Verlauf, Commits, Pull und Push',
          },
          {
            Punkt: 'Internet',
            'Angaben der Quellen': 'Laut README funktioniert ein Vault vollständig offline; Git-Remotes und gehostete Modellanbieter brauchen eine Verbindung',
          },
        ],
        note: 'Die Download-Seite nennt keine Mindestversionen der Betriebssysteme. Laut README sind die Windows-Installer per Authenticode signiert, die Installationsseite sagt dagegen, diese Signatur werde nach der Zertifikatsbeschaffung noch ergänzt; auf firmenverwalteten Geräten kann zuvor eine Freigabe durch die IT nötig sein.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Schritte folgen der Installationsseite des Projekts; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Installieren',
            whyItMatters: 'Laden Sie den Stable-Build für Ihr System herunter oder nutzen Sie auf macOS den Homebrew-Cask.',
          },
          {
            title: 'Einen Vault öffnen',
            whyItMatters: 'Klonen Sie den Getting-Started-Vault für eine geführte Tour oder öffnen Sie einen vorhandenen Ordner mit Markdown-Dateien.',
          },
          {
            title: 'Die Befehlspalette nutzen',
            whyItMatters: 'Drücken Sie Cmd+K auf macOS oder Strg+K auf Windows und Linux, um Befehle aufzurufen.',
          },
          {
            title: 'KI anbinden (optional)',
            whyItMatters: 'Richten Sie in den Einstellungen einen Modellanbieter ein oder installieren Sie ein unterstütztes Coding-Agent-CLI, das Tolaria dann erkennt.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Alle folgenden Punkte stammen von Website, Dokumentation oder README des Projekts; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Markdown-Vault und Verknüpfungen.** Notizen sind Markdown-Dateien mit YAML-Frontmatter; Typen dienen der Navigation und sind keine erzwungenen Schemata, und Notizen verlinken sich über Wikilinks mit Autovervollständigung.',
          '**Editor.** Ein blockbasierter Editor mit Slash-Befehlen, rohem Markdown-Modus, Whiteboards, Medienvorschauen und Tabellennavigation; die Dokumentation enthält außerdem Anleitungen zu Tabellenblättern und HTML-Blöcken.',
          '**Git-Client.** Commit, Push, Pull, Verlauf für den ganzen Vault und je Notiz, Diffs und Konfliktbehandlung gegenüber jedem Remote, das Sie verbinden.',
          '**Eigene Ansichten und mehrere Vaults.** Gespeicherte Ansichten und Seitenleisten-Bereiche sowie die Option, mehrere Vaults in einem Graphen zu laden.',
          '**KI-Agenten und Modelle.** Das KI-Panel streamt CLI-Coding-Agenten, die die Dokumentation als Claude Code, Codex, GitHub Copilot, OpenCode, Pi, Antigravity CLI, Kiro und Hermes Agent aufführt, und antwortet im Chat-Modus aus dem Notizkontext über Ollama, LM Studio, OpenAI, Anthropic, Gemini, OpenRouter oder jeden OpenAI-kompatiblen Endpunkt. Außerdem stellt Tolaria einen MCP-Server bereit, der Notizen suchen, lesen, anlegen und aktualisieren kann.',
        ],
        note: 'Agenten behalten ihre eigene Anmeldung, ihre Werkzeuge und ihre Abrechnung; Tolaria erkennt sie nur und streamt ihre Ausgabe.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Das Projekt beschreibt Tolaria als „files-first“ und „offline-first“: Notizen liegen in einem Ordner Ihrer Wahl, es gibt kein Konto, und laut README funktioniert ein Vault vollständig offline.** Die Synchronisierung läuft über Git mit einem beliebigen Remote, nach dem README „ohne Abhängigkeit von Tolaria-Servern“.',
          'Bei der KI können Daten den Rechner verlassen. Coding-Agenten laufen auf Ihrem Computer mit ihrer eigenen Authentifizierung, ein gehosteter Modellanbieter erhält den Notizkontext, den Sie ihm senden, und Ollama oder LM Studio halten diesen Kontext lokal. API-Schlüssel der Anbieter werden nicht in den Vault-Einstellungen gespeichert; Sie hinterlegen sie auf dem Gerät oder lesen sie aus einer Umgebungsvariablen. Absturzberichte sind über einen Einwilligungsdialog beim ersten Start freiwillig (Stacktraces, App-Version, Betriebssystem und Architektur, laut Dialogtext ohne Vault-Inhalte oder Dateipfade), und der Quellcode enthält zusätzlich einen getrennten Analyse-Schalter in den Einstellungen.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Angaben des Projekts und Beobachtungen aus dem Quellcode, keine Prüfergebnisse; PromptQuorum hat den Netzwerkverkehr nicht untersucht. Auf Website und Download-Seite wurde keine Datenschutzerklärung gefunden; das nächstliegende Dokument ist die [Telemetrie-Entwurfsnotiz](https://github.com/refactoringhq/tolaria/blob/main/docs/adr/0016-sentry-posthog-telemetry.md) im Repository.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Schreibende und Forschende**, die ein langlebiges Markdown-Archiv wollen, das mit gewöhnlichen Textwerkzeugen und Git-Verlauf funktioniert.',
          '**Menschen, die KI-Coding-Agenten auf ihre Notizen ansetzen** und jede Änderung als prüfbaren Git-Diff sehen möchten.',
          '**Entwickler und Teams, die Dokumentation als KI-Kontext pflegen**, mit Git vertraut sind und versionierbare Dateien wollen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Praxiseinsatz.** PromptQuorum hat Tolaria nicht installiert; Editor-Geschwindigkeit, Stabilität und die Aussage des Autors zu einem Vault mit mehr als 10.000 Notizen sind ungetestet.',
          '**KI-Qualität und Kosten.** Die Agenten und Modelle sind Werkzeuge Dritter; ihre Ergebnisse, Kosten und das, was sie an ihre eigenen Anbieter senden, wurden nicht untersucht.',
          '**Reifegrad der Plattformen.** Das Projekt nennt die Unterstützung für Windows und Linux früh, die Quellen widersprechen sich bei der Windows-Signatur, und eine macOS-Notarisierung wird nicht erwähnt.',
          '**Mobile Beta.** Die App für iPhone und iPad und der TestFlight-Zugang wurden nicht ausprobiert, und die Dokumentation beschreibt den Funktionsumfang nur knapp.',
          '**Datenschutz jenseits des Codes.** Es gibt keine veröffentlichte Datenschutzerklärung, und die Aussagen zu Einwilligung und Pfadbereinigung stammen aus dem Repository, nicht aus einer Prüfung.',
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
            'Preis / Lizenz': 'Kostenloser Kern, Sync kostenpflichtig / AGPL-3.0',
            'Wichtigster Unterschied': 'Verweise auf Blockebene und integrierte KI-Agenten-Zusammenarbeit; Tolaria setzt auf einfache Markdown-Dateien und Git',
          },
          {
            App: '[Blinko](/de/power-local-llm/blinko-review)',
            Plattformen: 'Selbst gehostete Web-App (Docker)',
            'Preis / Lizenz': 'Kostenlos / GPL-3.0',
            'Wichtigster Unterschied': 'Selbst gehostete Notizen mit RAG-Suche über einen eingerichteten LLM-Anbieter; Tolaria ist eine Desktop-App auf lokalen Dateien',
          },
        ],
        note: 'Beide Apps stehen im PromptQuorum-Verzeichnis; prüfen Sie aktuellen Preis, Lizenz und Plattformen im jeweiligen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich einen vorhandenen Ordner mit Markdown-Dateien öffnen?',
            a: 'Ja. Laut Installationsanleitung lässt sich ein vorhandener Ordner mit Markdown-Dateien als Vault öffnen. Ist der Ordner kein Git-Repository, initialisiert Tolaria Git nur auf Ihren Wunsch und meidet breite Ordner wie Schreibtisch, Dokumente oder Downloads, sofern sie nicht eindeutig als Vault-Ordner gedacht sind.',
          },
          {
            q: 'Worin unterscheiden sich Stable und Alpha?',
            a: 'Stable wird manuell freigegeben und ist der Kanal, auf den die Download-Seite verweist; Alpha folgt jedem Push auf den Hauptzweig, erhält Funktionen früher, kann aber unausgereifter sein. Am 24. Oktober 2026 erschienen innerhalb weniger Stunden mehrere Alpha-Builds, und die Dokumentation rät, Vault-Änderungen vor einem Kanalwechsel zu committen oder zu pushen.',
          },
          {
            q: 'Kann ein KI-Agent meine Notizen ohne Rückfrage ändern?',
            a: 'Coding-Agenten können Dateien im Vault bearbeiten. Die Dokumentation beschreibt einen Modus „Vault Safe“, der auf Datei-, Such- und Bearbeitungswerkzeuge beschränkt ist, und einen Modus „Power User“, der bei unterstützenden Agenten lokale Shell-Befehle im Vault erlauben kann. Der Chat mit direkten Modellen erhält keine Schreibwerkzeuge und keinen Shell-Zugriff, und ein Git-Vault zeigt Änderungen als Diffs, die Sie prüfen und zurückrollen können.',
          },
          {
            q: 'Gibt es eine mobile App?',
            a: 'Eine App für iPhone und iPad befindet sich über TestFlight in der Beta; der Zugang wird in der Discord-Community des Projekts angefragt. Laut Dokumentation bietet sie einen WYSIWYG-Editor, automatische Git-Commits und Synchronisierung über iCloud oder Dateien, während das KI-Panel und einige Profifunktionen bisher nur am Desktop verfügbar sind.',
          },
          {
            q: 'Unter welcher Lizenz steht Tolaria, und darf ich den Namen verwenden?',
            a: 'Die Website nennt AGPL-3.0-or-later, die GitHub-API meldet AGPL-3.0. Die Website ergänzt, dass Name und Logo von Tolaria durch eine Markenrichtlinie geschützt sind; prüfen Sie diese vor einer Verwendung der Marke. Dies ist keine Rechtsberatung.',
          },
          {
            q: 'Wer steht hinter Tolaria?',
            a: 'Laut Website wurde es von Luca, dem Gründer von Refactoring, nach Jahren des Schreibens und Notierens geschaffen, und laut README hat er es für sich selbst gebaut und teilt es als Open Source. Das README nennt Codacy, CodeScene, CircleCI und Unblocked als Werkzeuge, die das Projekt unterstützen; ein Unternehmen oder ein Bezahlplan wird nicht beschrieben.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Tolaria ist ein aktiv entwickelter, kostenloser, quelloffener Weg, Markdown-Notizen als einfache Dateien unter Git zu halten und den KI-Agenten oder Modellen zu übergeben, die Sie ohnehin nutzen. Dagegen stehen: Die Windows- und Linux-Builds gelten als früh, das Projekt wird von einem einzelnen namentlich genannten Hersteller getragen, es gibt keine veröffentlichte Datenschutzerklärung, und keine seiner Geschwindigkeits- oder KI-Aussagen ließ sich hier prüfen. Es passt zu Menschen, die einfache Dateien und Git mögen und KI-Hilfe mit prüfbaren Diffs wünschen; wer eine dokumentierte Datenschutzerklärung, eine ausgereifte mobile App oder eingebaute KI braucht, sollte es zuerst testen oder weitersuchen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von Tolaria](https://tolaria.md) — Funktionsüberblick, KI-Wege, Lizenz und Links, geprüft am 24. Oktober 2026.',
          '[Download-Seite von Tolaria](https://tolaria.md/download/) — stabile Version 2026.10.13, Plattformen und Hinweis zur Windows-Signatur.',
          '[Tolaria auf GitHub](https://github.com/refactoringhq/tolaria) — README, Dokumentation, Release-Kanäle und Telemetrie-Entwurfsnotiz; letzter Commit am 24. Oktober 2026.',
          '[Stable-Release v2026-10-13](https://github.com/refactoringhq/tolaria/releases/tag/v2026-10-13) — Installationsdateien und Veröffentlichungsdatum.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[SiYuan-Rezension](/de/power-local-llm/siyuan-review) — eine datenschutzfreundliche, blockbasierte Wissensdatenbank mit integrierter KI.',
          '[Blinko-Rezension](/de/power-local-llm/blinko-review) — selbst gehostete KI-Notizen mit RAG-Suche.',
          '[Lokale Wissens- und Retrieval-Tools im Vergleich](/de/power-local-llm/local-llm-knowledge-retrieval-compared) — der Kategorievergleich, zu dem diese Rezension gehört.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/tolaria-review-hero-es.webp',
    title: 'Reseña de Tolaria: notas Markdown de código abierto con Git y agentes de IA',
    seoTitle: 'Reseña de Tolaria: notas Markdown con Git y agentes IA',
    intro: 'Tolaria es una aplicación de escritorio gratuita y de código abierto, creada por Luca, fundador de Refactoring, que guarda tus notas Markdown como archivos simples en un vault gestionado con Git y puede entregarlas a agentes de código con IA o a modelos locales y alojados. Esta reseña se basa en el [sitio web](https://tolaria.md), la documentación y el repositorio de GitHub del proyecto, consultados el 24 de octubre de 2026; PromptQuorum no ha probado la aplicación en la práctica.',
    metaDescription: 'Reseña de Tolaria: app gratuita de código abierto que guarda notas Markdown como archivos en un vault Git y conecta agentes de IA y modelos. Sin probar.',
    twitterDescription: 'Reseña de Tolaria: archivos Markdown simples, un cliente Git integrado y, encima, agentes de IA o modelos locales. Gratis y de código abierto; qué confirman las fuentes y qué no.',
    audience: 'Personas que toman notas, investigadores y desarrolladores que quieren una app de notas Markdown local con ayuda de IA y necesitan saber qué confirman las fuentes, qué solo afirma el proyecto y cuánto cuesta.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña tolaria',
    targetKeywords: [
      'reseña tolaria',
      'tolaria app de notas markdown',
      'app de notas markdown código abierto con git',
      'base de conocimiento markdown local',
      'app de notas con agentes de código ia',
      'vault markdown sincronización git escritorio',
      'tolaria notas ia',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Tolaria (versión estable 2026.10.13) es una aplicación de escritorio gratuita y de código abierto para bases de conocimiento en Markdown, que guarda las notas como archivos simples y las conecta con los agentes de IA y los modelos que elijas.** No incluye ningún modelo de IA propio ni exige cuenta. Todo lo que se afirma aquí procede del sitio web, la documentación y el repositorio del proyecto.',
    quickAnswerTop: {
      es: {
        question: '¿Tolaria guarda mis notas en mi propio ordenador?',
        answer: 'Según el proyecto, sí: las notas son archivos Markdown simples en una carpeta de tu disco, sin base de datos, sin formato propietario y sin cuenta. La sincronización se hace con Git contra el remoto que elijas. Las funciones de IA son opcionales y solo envían el contexto de las notas al agente o proveedor de modelos que configures; los informes de fallos son voluntarios mediante un cuadro de consentimiento.',
        bullets: [
          'Las notas son archivos Markdown con frontmatter YAML que cualquier editor puede abrir.',
          'Un cliente Git integrado cubre commits, historial, pull y push.',
          'El panel de IA funciona con CLI de agentes de código y con modelos locales o alojados.',
          'Hay versiones de escritorio para macOS, Windows y Linux; iPhone y iPad están en beta.',
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
        label: '¿Qué es Tolaria?',
        anchor: 'what-is-tolaria',
      },
      {
        label: 'Dónde conseguirlo',
        anchor: 'get-it',
      },
      {
        label: 'Requisitos',
        anchor: 'requirements',
      },
      {
        label: 'Cómo empezar',
        anchor: 'getting-started',
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
            text: 'Tolaria es una aplicación de notas de escritorio y de código abierto que trata una carpeta de archivos Markdown como un vault respaldado por Git y deja que agentes de IA y modelos trabajen sobre él.',
          },
          {
            type: 'plain-terms',
            text: 'Conservas archivos de texto normales en tu disco, los exploras y editas en una app rápida, sigues los cambios con Git y, si quieres, apuntas un agente de IA o un modelo al vault.',
          },
        ],
        items: [
          'Mantenimiento: el repositorio se actualizó por última vez el 24 de octubre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado.',
          'Canales de publicación: una versión estable promovida a mano (2026.10.13) y compilaciones alfa publicadas con cada push a la rama principal.',
          'Coste: gratis y de código abierto bajo AGPL-3.0-or-later, sin cuenta; el sitio web lo llama gratis para siempre.',
          'IA: sin modelo incluido; tú conectas agentes como Claude Code y Codex y proveedores como Ollama o APIs alojadas.',
          'Responsable: Luca, fundador de Refactoring; el README menciona herramientas patrocinadoras como Codacy y CircleCI.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web, la documentación y el repositorio de GitHub, consultados el 24 de octubre de 2026. PromptQuorum no ha instalado ni medido la aplicación, así que no se evalúan la velocidad, la estabilidad ni los resultados de la IA.',
          },
        ],
      },
      overview: {
        id: 'what-is-tolaria',
        title: '¿Qué es Tolaria?',
        content: [
          '**Tolaria es una aplicación de escritorio para gestionar bases de conocimiento en Markdown: un vault es una carpeta normal de archivos Markdown, y la app añade un editor, vínculos entre notas, vistas guardadas y un cliente Git.** El repositorio la describe como «desktop app to manage markdown knowledge bases» y el sitio web como «a second brain for the AI era»; el autor dice que la usa para un vault de más de 10.000 notas.',
          'El README menciona tres usos: llevar un segundo cerebro o una base de conocimiento personal, organizar documentos de empresa como contexto para la IA y guardar la memoria y los procedimientos de asistentes de IA. La app está hecha con Tauri, React y TypeScript.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**Tolaria se descarga gratis para macOS, Windows y Linux, con un cask de Homebrew en macOS; iPhone y iPad están en una beta de TestFlight.**',
        ],
        columns: [
          'Opción',
          'Cómo conseguirlo',
        ],
        rows: [
          {
            'Opción': 'Escritorio',
            'Cómo conseguirlo': '[Página de descarga](https://tolaria.md/download/) para macOS, Windows y Linux',
          },
          {
            'Opción': 'Homebrew',
            'Cómo conseguirlo': 'brew install --cask tolaria (macOS)',
          },
          {
            'Opción': 'iPhone y iPad',
            'Cómo conseguirlo': 'Beta por TestFlight; el acceso se solicita en el Discord del proyecto',
          },
          {
            'Opción': 'Sitio web',
            'Cómo conseguirlo': '[tolaria.md](https://tolaria.md)',
          },
          {
            'Opción': 'Política de privacidad',
            'Cómo conseguirlo': 'No se encontró una política propia; consulta la [nota de diseño sobre telemetría](https://github.com/refactoringhq/tolaria/blob/main/docs/adr/0016-sentry-posthog-telemetry.md)',
          },
          {
            'Opción': 'Código fuente',
            'Cómo conseguirlo': '[GitHub: refactoringhq/tolaria](https://github.com/refactoringhq/tolaria), AGPL-3.0-or-later',
          },
        ],
        note: 'Versión revisada: estable 2026.10.13, publicada el 13 de octubre de 2026 ([página de la versión](https://github.com/refactoringhq/tolaria/releases/tag/v2026-10-13)); ese mismo día se publicaban compilaciones alfa. El software es gratuito y el sitio web no describe ningún plan de pago.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**Tolaria publica compilaciones para macOS, Windows y Linux; las fuentes no indican ningún requisito de RAM, disco o GPU.**',
        ],
        columns: [
          'Elemento',
          'Qué dicen las fuentes',
        ],
        rows: [
          {
            Elemento: 'Sistemas operativos',
            'Qué dicen las fuentes': 'macOS (Apple silicon e Intel), Windows x64 y Linux x86_64; macOS es el objetivo principal y Windows y Linux figuran como «supported, early»',
          },
          {
            Elemento: 'Instaladores',
            'Qué dicen las fuentes': 'Un .dmg para macOS, un .exe de instalación para Windows y archivos AppImage, deb y RPM para Linux',
          },
          {
            Elemento: 'Hardware',
            'Qué dicen las fuentes': 'No se indica mínimo; la inferencia del modelo se ejecuta en el agente o proveedor que conectes, no en Tolaria',
          },
          {
            Elemento: 'Git',
            'Qué dicen las fuentes': 'Opcional: una carpeta simple se abre como vault y Git añade historial, commits, pull y push',
          },
          {
            Elemento: 'Internet',
            'Qué dicen las fuentes': 'Según el README, un vault funciona totalmente sin conexión; los remotos Git y los proveedores alojados necesitan conexión',
          },
        ],
        note: 'La página de descarga no indica versiones mínimas de sistema operativo. El README dice que los instaladores de Windows están firmados con Authenticode, mientras que la página de instalación señala que esa firma se añadirá tras obtener el certificado; en equipos gestionados por una empresa puede hacer falta la aprobación de TI.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Los pasos siguen la página de instalación del proyecto; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Instalar',
            whyItMatters: 'Descarga la versión estable para tu sistema o usa el cask de Homebrew en macOS.',
          },
          {
            title: 'Abrir un vault',
            whyItMatters: 'Clona el vault Getting Started para una visita guiada, o abre una carpeta existente de archivos Markdown.',
          },
          {
            title: 'Usar la paleta de comandos',
            whyItMatters: 'Pulsa Cmd+K en macOS o Ctrl+K en Windows y Linux para acceder a los comandos.',
          },
          {
            title: 'Conectar la IA (opcional)',
            whyItMatters: 'Añade un proveedor de modelos en los ajustes o instala un CLI de agente de código compatible, que Tolaria detecta después.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Todo lo que sigue procede del sitio web, la documentación o el README del proyecto; nada se ha probado de forma independiente.**',
        ],
        items: [
          '**Vault Markdown y relaciones.** Las notas son archivos Markdown con frontmatter YAML; los tipos son guías de navegación y no esquemas obligatorios, y las notas se enlazan con wikilinks con autocompletado.',
          '**Editor.** Un editor por bloques con comandos slash, modo Markdown en bruto, pizarras, vistas previas de medios y navegación por tablas; la documentación incluye además guías sobre hojas de cálculo y bloques HTML.',
          '**Cliente Git.** Commit, push, pull, historial del vault completo y por nota, diffs y gestión de conflictos contra cualquier remoto que conectes.',
          '**Vistas personalizadas y varios vaults.** Vistas guardadas y secciones de la barra lateral, además de una opción para cargar varios vaults en un mismo grafo.',
          '**Agentes de IA y modelos.** El panel de IA transmite en directo agentes de código en CLI que la documentación enumera como Claude Code, Codex, GitHub Copilot, OpenCode, Pi, Antigravity CLI, Kiro y Hermes Agent, y responde en modo chat a partir del contexto de las notas mediante Ollama, LM Studio, OpenAI, Anthropic, Gemini, OpenRouter o cualquier punto de acceso compatible con OpenAI. Tolaria también expone un servidor MCP que puede buscar, leer, crear y actualizar notas.',
        ],
        note: 'Los agentes conservan su propio inicio de sesión, sus herramientas y su facturación; Tolaria solo los detecta y transmite su salida.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**El proyecto describe Tolaria como «files-first» y «offline-first»: las notas viven en una carpeta que tú eliges, no hay cuenta y, según el README, un vault funciona totalmente sin conexión.** La sincronización es Git contra cualquier remoto que configures, con «cero dependencia de los servidores de Tolaria» según el README.',
          'La IA es donde los datos pueden salir del equipo. Los agentes de código se ejecutan en tu ordenador con su propia autenticación, un proveedor de modelos alojado recibe el contexto de las notas que le envías, y Ollama o LM Studio mantienen ese contexto en local. Las claves de API de los proveedores no se guardan en los ajustes del vault: las guardas en el dispositivo o las lees desde una variable de entorno. Los informes de fallos son voluntarios mediante un cuadro de consentimiento en el primer arranque (trazas de error, versión de la app, sistema operativo y arquitectura, sin contenido del vault ni rutas de archivo según el texto del cuadro), y el código fuente incluye además un interruptor de analítica independiente en los ajustes.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del proyecto y observaciones de su código fuente, no resultados de una auditoría; PromptQuorum no inspeccionó el tráfico de red. No se encontró ninguna política de privacidad en el sitio web ni en la página de descarga; el documento más cercano es la [nota de diseño sobre telemetría](https://github.com/refactoringhq/tolaria/blob/main/docs/adr/0016-sentry-posthog-telemetry.md) del repositorio.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Escritores e investigadores** que quieren un archivo Markdown duradero que funcione con herramientas de texto normales y con el historial de Git.',
          '**Personas que usan agentes de código con IA sobre sus notas** y quieren ver cada cambio como un diff de Git revisable.',
          '**Desarrolladores y equipos que mantienen documentación como contexto para la IA**, que se manejan con Git y quieren archivos versionables.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Uso real.** PromptQuorum no instaló Tolaria, así que la velocidad del editor, su estabilidad y lo que dice el autor sobre un vault de más de 10.000 notas no están probados.',
          '**Calidad y coste de la IA.** Los agentes y los modelos son herramientas de terceros; no se examinaron sus resultados, sus costes ni lo que envían a sus propios proveedores.',
          '**Madurez de las plataformas.** El proyecto califica de temprano el soporte para Windows y Linux, las fuentes discrepan sobre la firma de Windows y no se menciona la notarización de macOS.',
          '**Beta móvil.** No se probó la app para iPhone y iPad ni el proceso de acceso por TestFlight, y la documentación describe sus funciones solo brevemente.',
          '**Privacidad más allá del código.** No hay política de privacidad publicada, y lo que se dice sobre el consentimiento y el borrado de rutas viene del repositorio, no de una auditoría.',
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
            'Precio / licencia': 'Núcleo gratis, sync de pago / AGPL-3.0',
            'Diferencia clave': 'Referencias a nivel de bloque y colaboración integrada con agentes de IA; Tolaria se centra en archivos Markdown simples y Git',
          },
          {
            App: '[Blinko](/es/power-local-llm/blinko-review)',
            Plataformas: 'App web autoalojada (Docker)',
            'Precio / licencia': 'Gratis / GPL-3.0',
            'Diferencia clave': 'Notas autoalojadas con búsqueda RAG mediante un proveedor de LLM configurado; Tolaria es una app de escritorio sobre archivos locales',
          },
        ],
        note: 'Ambas apps están en el directorio de PromptQuorum; confirma el precio, la licencia y las plataformas actuales en la ficha de cada una.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo abrir una carpeta de archivos Markdown que ya tengo?',
            a: 'Sí. La guía de instalación dice que puedes abrir una carpeta existente de archivos Markdown como vault. Si la carpeta no es un repositorio Git, Tolaria solo inicializa Git cuando se lo pides y evita carpetas amplias como Escritorio, Documentos o Descargas, salvo que sean claramente carpetas dedicadas al vault.',
          },
          {
            q: '¿Qué diferencia hay entre Stable y Alpha?',
            a: 'Stable se promueve a mano y es el canal al que apunta la página de descarga; Alpha sigue cada push a la rama principal, recibe las novedades antes pero puede ser más inestable. El 24 de octubre de 2026 se publicaron varias compilaciones alfa en pocas horas, y la documentación aconseja confirmar o subir los cambios del vault antes de cambiar de canal.',
          },
          {
            q: '¿Puede un agente de IA cambiar mis notas sin preguntar?',
            a: 'Los agentes de código pueden editar archivos del vault. La documentación describe un modo «Vault Safe» limitado a herramientas de archivos, búsqueda y edición, y un modo «Power User» que puede permitir comandos de shell locales limitados al vault en los agentes que los admiten. El chat con modelos directos no recibe herramientas de escritura ni acceso a la shell, y un vault con Git muestra los cambios como diffs que puedes revisar y revertir.',
          },
          {
            q: '¿Hay una app móvil?',
            a: 'Una app para iPhone y iPad está en beta mediante TestFlight, y el acceso se solicita en la comunidad de Discord del proyecto. Según la documentación ofrece un editor WYSIWYG, commits automáticos de Git y sincronización mediante iCloud o Archivos, mientras que el panel de IA y algunas funciones avanzadas son por ahora solo de escritorio.',
          },
          {
            q: '¿Con qué licencia se distribuye Tolaria y puedo reutilizar el nombre?',
            a: 'El sitio web indica AGPL-3.0-or-later y la API de GitHub informa AGPL-3.0. El sitio añade que el nombre y el logotipo de Tolaria están cubiertos por una política de marca; consúltala antes de reutilizar la imagen. Esto no es asesoramiento legal.',
          },
          {
            q: '¿Quién está detrás de Tolaria?',
            a: 'Según el sitio web, la creó Luca, fundador de Refactoring, tras años de escribir y tomar notas, y según el README la hizo para sí mismo y la comparte como código abierto. El README cita a Codacy, CodeScene, CircleCI y Unblocked como herramientas que apoyan el proyecto; no se describe ninguna empresa ni plan de pago.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Tolaria es una forma gratuita, de código abierto y con desarrollo activo de mantener notas Markdown como archivos simples bajo Git y entregarlas a los agentes de IA o modelos que ya usas. En contra, las versiones para Windows y Linux se describen como tempranas, el proyecto lo presenta un único responsable con nombre, no hay política de privacidad publicada y no se pudo comprobar aquí ninguna de sus afirmaciones sobre velocidad o IA. Encaja con quien ya aprecia los archivos simples y Git y quiere ayuda de IA con diffs revisables; quien necesite una política de privacidad documentada, una app móvil madura o IA integrada debería probarla primero o buscar otra opción.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Tolaria](https://tolaria.md) — resumen de funciones, vías de IA, licencia y enlaces, consultado el 24 de octubre de 2026.',
          '[Página de descarga de Tolaria](https://tolaria.md/download/) — versión estable 2026.10.13, plataformas y nota sobre la firma de Windows.',
          '[Tolaria en GitHub](https://github.com/refactoringhq/tolaria) — README, documentación, canales de publicación y nota de diseño sobre telemetría; último commit el 24 de octubre de 2026.',
          '[Versión estable v2026-10-13](https://github.com/refactoringhq/tolaria/releases/tag/v2026-10-13) — archivos de instalación y fecha de publicación.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de SiYuan](/es/power-local-llm/siyuan-review) — una base de conocimiento por bloques y centrada en la privacidad, con IA integrada.',
          '[Reseña de Blinko](/es/power-local-llm/blinko-review) — notas con IA autoalojadas y búsqueda RAG.',
          '[Herramientas locales de conocimiento y recuperación comparadas](/es/power-local-llm/local-llm-knowledge-retrieval-compared) — la comparativa de categoría a la que pertenece esta reseña.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/tolaria-review-hero-fr.webp',
    title: 'Test de Tolaria : notes Markdown open source avec Git et agents IA',
    seoTitle: 'Test de Tolaria : notes Markdown avec Git et agents IA',
    intro: 'Tolaria est une application de bureau gratuite et open source, créée par Luca, fondateur de Refactoring, qui conserve vos notes Markdown sous forme de fichiers simples dans un coffre (vault) géré par Git et peut les confier à des agents de code IA ou à des modèles locaux et hébergés. Ce test s’appuie sur le [site](https://tolaria.md), la documentation et le dépôt GitHub du projet, consultés le 24 octobre 2026 ; PromptQuorum n’a pas testé l’application en pratique.',
    metaDescription: 'Test de Tolaria : appli gratuite et open source qui garde les notes Markdown en fichiers dans un vault Git et relie agents IA et modèles. Non testée.',
    twitterDescription: 'Test de Tolaria : des fichiers Markdown simples, un client Git intégré, puis des agents IA ou des modèles locaux. Gratuit et open source ; ce que les sources confirment ou non.',
    audience: 'Personnes qui prennent des notes, chercheurs et développeurs qui veulent une application de notes Markdown locale avec aide IA et qui doivent savoir ce que les sources confirment, ce que le projet affirme seulement et ce que cela coûte.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test tolaria',
    targetKeywords: [
      'test tolaria',
      'tolaria application notes markdown',
      'application notes markdown open source avec git',
      'base de connaissances markdown locale',
      'application de notes avec agents de code ia',
      'vault markdown synchronisation git bureau',
      'tolaria notes ia',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Tolaria (version stable 2026.10.13) est une application de bureau gratuite et open source pour bases de connaissances Markdown, qui stocke les notes en fichiers simples et les relie aux agents IA et aux modèles de votre choix.** Elle n’embarque aucun modèle d’IA et ne demande aucun compte. Chaque affirmation ci-dessous provient du site, de la documentation et du dépôt du projet.',
    quickAnswerTop: {
      fr: {
        question: 'Tolaria garde-t-elle mes notes sur mon propre ordinateur ?',
        answer: 'Selon le projet, oui : les notes sont de simples fichiers Markdown dans un dossier de votre disque, sans base de données, sans format propriétaire et sans compte. La synchronisation passe par Git vers un dépôt distant de votre choix. Les fonctions d’IA sont facultatives et n’envoient le contexte des notes qu’à l’agent ou au fournisseur de modèle que vous configurez ; les rapports de plantage sont activables par une boîte de dialogue de consentement.',
        bullets: [
          'Les notes sont des fichiers Markdown avec frontmatter YAML, ouvrables dans n’importe quel éditeur.',
          'Un client Git intégré gère les commits, l’historique, le pull et le push.',
          'Le panneau d’IA fonctionne avec des CLI d’agents de code et avec des modèles locaux ou hébergés.',
          'Des versions de bureau existent pour macOS, Windows et Linux ; iPhone et iPad sont en bêta.',
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
        label: 'Qu’est-ce que Tolaria ?',
        anchor: 'what-is-tolaria',
      },
      {
        label: 'Où l’obtenir',
        anchor: 'get-it',
      },
      {
        label: 'Prérequis',
        anchor: 'requirements',
      },
      {
        label: 'Premiers pas',
        anchor: 'getting-started',
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
            text: 'Tolaria est une application de notes de bureau open source qui traite un dossier de fichiers Markdown comme un vault géré par Git et laisse des agents IA et des modèles y travailler.',
          },
          {
            type: 'plain-terms',
            text: 'Vous gardez de simples fichiers texte sur votre disque, vous les parcourez et les modifiez dans une application rapide, vous suivez les changements avec Git et, si vous le souhaitez, vous branchez un agent IA ou un modèle sur le vault.',
          },
        ],
        items: [
          'Maintenance : le dépôt a été mis à jour pour la dernière fois le 24 octobre 2026 ; aucun avertissement de projet inactif ne s’applique.',
          'Canaux de publication : une version stable promue manuellement (2026.10.13) et des versions alpha publiées à chaque push sur la branche principale.',
          'Coût : gratuit et open source sous AGPL-3.0-or-later, sans compte ; le site le dit gratuit pour toujours.',
          'IA : aucun modèle fourni ; vous connectez vous-même des agents comme Claude Code ou Codex et des fournisseurs comme Ollama ou des API hébergées.',
          'Éditeur : Luca, fondateur de Refactoring ; le README cite des outils sponsors comme Codacy et CircleCI.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s’appuie sur le site, la documentation et le dépôt GitHub, consultés le 24 octobre 2026. PromptQuorum n’a ni installé ni mesuré l’application : rapidité, stabilité et résultats de l’IA ne sont pas évalués.',
          },
        ],
      },
      overview: {
        id: 'what-is-tolaria',
        title: 'Qu’est-ce que Tolaria ?',
        content: [
          '**Tolaria est une application de bureau pour gérer des bases de connaissances Markdown : un vault est un dossier ordinaire de fichiers Markdown, auquel l’application ajoute un éditeur, des liens entre notes, des vues enregistrées et un client Git.** Le dépôt la décrit comme une « desktop app to manage markdown knowledge bases » et le site comme « a second brain for the AI era » ; l’auteur dit s’en servir pour un vault de plus de 10 000 notes.',
          'Le README cite trois usages : tenir un second cerveau ou une base de connaissances personnelle, organiser des documents d’entreprise comme contexte pour l’IA, et stocker la mémoire et les procédures d’assistants IA. L’application est développée avec Tauri, React et TypeScript.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Tolaria se télécharge gratuitement pour macOS, Windows et Linux, avec un cask Homebrew sur macOS ; iPhone et iPad sont en bêta TestFlight.**',
        ],
        columns: [
          'Option',
          'Comment l’obtenir',
        ],
        rows: [
          {
            Option: 'Bureau',
            'Comment l’obtenir': '[Page de téléchargement](https://tolaria.md/download/) pour macOS, Windows et Linux',
          },
          {
            Option: 'Homebrew',
            'Comment l’obtenir': 'brew install --cask tolaria (macOS)',
          },
          {
            Option: 'iPhone et iPad',
            'Comment l’obtenir': 'Bêta via TestFlight ; l’accès se demande sur le Discord du projet',
          },
          {
            Option: 'Site web',
            'Comment l’obtenir': '[tolaria.md](https://tolaria.md)',
          },
          {
            Option: 'Politique de confidentialité',
            'Comment l’obtenir': 'Aucune politique dédiée trouvée ; voir la [note de conception sur la télémétrie](https://github.com/refactoringhq/tolaria/blob/main/docs/adr/0016-sentry-posthog-telemetry.md)',
          },
          {
            Option: 'Code source',
            'Comment l’obtenir': '[GitHub : refactoringhq/tolaria](https://github.com/refactoringhq/tolaria), AGPL-3.0-or-later',
          },
        ],
        note: 'Version testée : stable 2026.10.13, publiée le 13 octobre 2026 ([page de la version](https://github.com/refactoringhq/tolaria/releases/tag/v2026-10-13)) ; des versions alpha paraissaient le jour même. Le logiciel est gratuit et le site ne décrit aucune offre payante.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**Tolaria publie des versions pour macOS, Windows et Linux ; les sources n’indiquent aucune exigence de RAM, d’espace disque ou de GPU.**',
        ],
        columns: [
          'Élément',
          'Ce que disent les sources',
        ],
        rows: [
          {
            'Élément': 'Systèmes',
            'Ce que disent les sources': 'macOS (Apple silicon et Intel), Windows x64 et Linux x86_64 ; macOS est la cible principale, Windows et Linux sont dits « supported, early »',
          },
          {
            'Élément': 'Installeurs',
            'Ce que disent les sources': 'Un .dmg pour macOS, un .exe d’installation pour Windows, et des fichiers AppImage, deb et RPM pour Linux',
          },
          {
            'Élément': 'Matériel',
            'Ce que disent les sources': 'Aucun minimum indiqué ; l’inférence se fait dans l’agent ou le fournisseur connecté, pas dans Tolaria',
          },
          {
            'Élément': 'Git',
            'Ce que disent les sources': 'Facultatif : un simple dossier s’ouvre comme vault, Git ajoute historique, commits, pull et push',
          },
          {
            'Élément': 'Internet',
            'Ce que disent les sources': 'Selon le README, un vault fonctionne entièrement hors ligne ; les dépôts Git distants et les fournisseurs hébergés exigent une connexion',
          },
        ],
        note: 'La page de téléchargement n’indique aucune version minimale des systèmes. Le README dit que les installeurs Windows sont signés Authenticode, alors que la page d’installation précise que cette signature sera ajoutée après l’obtention du certificat ; sur un poste géré par l’entreprise, une validation de la DSI peut être nécessaire.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Les étapes suivent la page d’installation du projet ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Installer',
            whyItMatters: 'Téléchargez la version stable pour votre système ou utilisez le cask Homebrew sur macOS.',
          },
          {
            title: 'Ouvrir un vault',
            whyItMatters: 'Clonez le vault Getting Started pour une visite guidée, ou ouvrez un dossier existant de fichiers Markdown.',
          },
          {
            title: 'Utiliser la palette de commandes',
            whyItMatters: 'Appuyez sur Cmd+K sous macOS ou Ctrl+K sous Windows et Linux pour accéder aux commandes.',
          },
          {
            title: 'Connecter l’IA (facultatif)',
            whyItMatters: 'Ajoutez un fournisseur de modèle dans les réglages ou installez un CLI d’agent de code pris en charge, que Tolaria détecte ensuite.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Tout ce qui suit provient du site, de la documentation ou du README du projet ; rien n’a été testé de façon indépendante.**',
        ],
        items: [
          '**Vault Markdown et relations.** Les notes sont des fichiers Markdown avec frontmatter YAML ; les types servent de repères de navigation et non de schémas imposés, et les notes se relient par des wikilinks avec saisie semi-automatique.',
          '**Éditeur.** Un éditeur par blocs avec commandes slash, mode Markdown brut, tableaux blancs, aperçus de médias et navigation dans les tableaux ; la documentation propose aussi des guides sur les feuilles de calcul et les blocs HTML.',
          '**Client Git.** Commit, push, pull, historique du vault entier et par note, diffs et gestion des conflits avec tout dépôt distant que vous connectez.',
          '**Vues personnalisées et plusieurs vaults.** Vues enregistrées et sections de la barre latérale, plus une option pour charger plusieurs vaults dans un même graphe.',
          '**Agents IA et modèles.** Le panneau d’IA diffuse en continu des agents de code en CLI que la documentation cite comme Claude Code, Codex, GitHub Copilot, OpenCode, Pi, Antigravity CLI, Kiro et Hermes Agent, et répond en mode chat à partir du contexte des notes via Ollama, LM Studio, OpenAI, Anthropic, Gemini, OpenRouter ou tout point d’accès compatible OpenAI. Tolaria expose aussi un serveur MCP capable de chercher, lire, créer et mettre à jour des notes.',
        ],
        note: 'Les agents gardent leur propre connexion, leurs outils et leur facturation ; Tolaria se contente de les détecter et d’afficher leur sortie.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**Le projet décrit Tolaria comme « files-first » et « offline-first » : les notes vivent dans un dossier de votre choix, il n’y a pas de compte et, selon le README, un vault fonctionne entièrement hors ligne.** La synchronisation passe par Git vers n’importe quel dépôt distant, avec « zéro dépendance aux serveurs de Tolaria » d’après le README.',
          'C’est avec l’IA que des données peuvent quitter l’ordinateur. Les agents de code s’exécutent sur votre machine avec leur propre authentification, un fournisseur de modèle hébergé reçoit le contexte des notes que vous lui envoyez, et Ollama ou LM Studio gardent ce contexte en local. Les clés d’API des fournisseurs ne sont pas stockées dans les réglages du vault : vous les enregistrez sur l’appareil ou les lisez depuis une variable d’environnement. Les rapports de plantage sont facultatifs grâce à une boîte de dialogue de consentement au premier lancement (traces de pile, version de l’application, système et architecture, sans contenu de vault ni chemins de fichiers selon le texte de la boîte), et le code source comporte aussi un interrupteur d’analyse distinct dans les réglages.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations du projet et des observations tirées de son code source, non des résultats d’audit ; PromptQuorum n’a pas inspecté le trafic réseau. Aucune politique de confidentialité n’a été trouvée sur le site ni sur la page de téléchargement ; le document le plus proche est la [note de conception sur la télémétrie](https://github.com/refactoringhq/tolaria/blob/main/docs/adr/0016-sentry-posthog-telemetry.md) du dépôt.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle s’adresse',
        items: [
          '**Rédacteurs et chercheurs** qui veulent une archive Markdown durable, compatible avec les outils texte ordinaires et l’historique Git.',
          '**Personnes qui confient leurs notes à des agents de code IA** et veulent voir chaque changement sous forme de diff Git vérifiable.',
          '**Développeurs et équipes qui tiennent leur documentation comme contexte pour l’IA**, à l’aise avec Git et désireux de fichiers versionnables.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Usage réel.** PromptQuorum n’a pas installé Tolaria ; la rapidité de l’éditeur, sa stabilité et l’affirmation de l’auteur sur un vault de plus de 10 000 notes ne sont pas testées.',
          '**Qualité et coût de l’IA.** Les agents et les modèles sont des outils tiers ; leurs résultats, leurs coûts et ce qu’ils envoient à leurs propres fournisseurs n’ont pas été examinés.',
          '**Maturité des plateformes.** Le projet qualifie de précoce la prise en charge de Windows et Linux, les sources divergent sur la signature Windows et la notarisation macOS n’est pas mentionnée.',
          '**Bêta mobile.** L’application iPhone et iPad et la procédure d’accès TestFlight n’ont pas été essayées, et la documentation n’en décrit les fonctions que brièvement.',
          '**Confidentialité au-delà du code.** Aucune politique de confidentialité n’est publiée, et les affirmations sur le consentement et l’effacement des chemins viennent du dépôt, pas d’un audit.',
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
            'Prix / licence': 'Cœur gratuit, synchro payante / AGPL-3.0',
            'Différence clé': 'Références au niveau des blocs et collaboration IA intégrée ; Tolaria mise sur de simples fichiers Markdown et Git',
          },
          {
            Application: '[Blinko](/fr/power-local-llm/blinko-review)',
            Plateformes: 'Application web auto-hébergée (Docker)',
            'Prix / licence': 'Gratuit / GPL-3.0',
            'Différence clé': 'Notes auto-hébergées avec recherche RAG via un fournisseur de LLM configuré ; Tolaria est une application de bureau sur fichiers locaux',
          },
        ],
        note: 'Les deux applications figurent dans l’annuaire PromptQuorum ; vérifiez le prix, la licence et les plateformes actuels dans chaque fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Puis-je ouvrir un dossier de fichiers Markdown que j’ai déjà ?',
            a: 'Oui. Le guide d’installation indique qu’un dossier existant de fichiers Markdown peut s’ouvrir comme vault. Si le dossier n’est pas un dépôt Git, Tolaria n’initialise Git que sur demande et évite les dossiers larges comme Bureau, Documents ou Téléchargements, sauf s’ils sont clairement dédiés au vault.',
          },
          {
            q: 'Quelle différence entre Stable et Alpha ?',
            a: 'Stable est promue manuellement et c’est le canal vers lequel pointe la page de téléchargement ; Alpha suit chaque push sur la branche principale, reçoit les nouveautés plus tôt mais peut être plus instable. Plusieurs versions alpha sont parues en quelques heures le 24 octobre 2026, et la documentation conseille de valider ou de pousser les changements du vault avant de changer de canal.',
          },
          {
            q: 'Un agent IA peut-il modifier mes notes sans demander ?',
            a: 'Les agents de code peuvent modifier les fichiers du vault. La documentation décrit un mode « Vault Safe » limité aux outils de fichiers, de recherche et d’édition, et un mode « Power User » qui peut autoriser des commandes shell locales limitées au vault pour les agents qui les gèrent. Le chat avec les modèles directs ne reçoit ni outils d’écriture ni accès au shell, et un vault Git présente les changements sous forme de diffs que vous pouvez relire et annuler.',
          },
          {
            q: 'Existe-t-il une application mobile ?',
            a: 'Une application pour iPhone et iPad est en bêta via TestFlight, et l’accès se demande dans la communauté Discord du projet. Selon la documentation, elle propose un éditeur WYSIWYG, des commits Git automatiques et une synchronisation par iCloud ou Fichiers, tandis que le panneau d’IA et certaines fonctions avancées restent pour l’instant réservés au bureau.',
          },
          {
            q: 'Sous quelle licence est Tolaria, et puis-je réutiliser son nom ?',
            a: 'Le site indique AGPL-3.0-or-later et l’API GitHub renvoie AGPL-3.0. Le site précise que le nom et le logo de Tolaria sont couverts par une politique de marque ; consultez-la avant de réutiliser l’identité visuelle. Ceci n’est pas un conseil juridique.',
          },
          {
            q: 'Qui est derrière Tolaria ?',
            a: 'Selon le site, Tolaria a été créée par Luca, fondateur de Refactoring, après des années d’écriture et de prise de notes, et d’après le README il l’a conçue pour lui-même et la partage en open source. Le README cite Codacy, CodeScene, CircleCI et Unblocked comme outils soutenant le projet ; aucune entreprise ni offre payante n’est décrite.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Tolaria est une façon gratuite, open source et activement développée de garder des notes Markdown en fichiers simples sous Git et de les confier aux agents IA ou aux modèles que vous utilisez déjà. En contrepartie, les versions Windows et Linux sont qualifiées de précoces, le projet est porté par un seul éditeur nommé, aucune politique de confidentialité n’est publiée, et aucune de ses affirmations sur la rapidité ou l’IA n’a pu être vérifiée ici. Elle convient à ceux qui aiment déjà les fichiers simples et Git et veulent une aide IA avec des diffs vérifiables ; qui a besoin d’une politique de confidentialité documentée, d’une application mobile mature ou d’une IA intégrée devrait d’abord l’essayer ou chercher ailleurs.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de Tolaria](https://tolaria.md) — aperçu des fonctions, voies d’IA, licence et liens, consulté le 24 octobre 2026.',
          '[Page de téléchargement de Tolaria](https://tolaria.md/download/) — version stable 2026.10.13, plateformes et remarque sur la signature Windows.',
          '[Tolaria sur GitHub](https://github.com/refactoringhq/tolaria) — README, documentation, canaux de publication et note de conception sur la télémétrie ; dernier commit le 24 octobre 2026.',
          '[Version stable v2026-10-13](https://github.com/refactoringhq/tolaria/releases/tag/v2026-10-13) — fichiers d’installation et date de publication.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Avis SiYuan](/fr/power-local-llm/siyuan-review) — une base de connaissances par blocs axée sur la confidentialité, avec IA intégrée.',
          '[Avis Blinko](/fr/power-local-llm/blinko-review) — notes IA auto-hébergées avec recherche RAG.',
          '[Outils locaux de connaissance et de recherche comparés](/fr/power-local-llm/local-llm-knowledge-retrieval-compared) — la comparaison de catégorie dont relève ce test.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/tolaria-review-hero-ja.webp',
    title: 'Tolariaレビュー：GitとAIエージェントに対応したオープンソースのMarkdownノートアプリ',
    seoTitle: 'Tolariaレビュー：GitとAIに対応するMarkdownノート',
    intro: 'Tolariaは、Refactoring創業者のLucaが公開している無料のオープンソース・デスクトップアプリです。MarkdownのノートをプレーンなファイルとしてGit管理のvaultに保存し、AIコーディングエージェントやローカル／クラウドのモデルに渡せます。本レビューはプロジェクトの[公式サイト](https://tolaria.md)、ドキュメント、GitHubリポジトリを2026年10月24日に確認した内容に基づいており、PromptQuorumは実機での動作テストを行っていません。',
    metaDescription: 'Tolariaレビュー：MarkdownノートをプレーンファイルとしてGit管理のvaultに保存し、AIエージェントやモデルと連携する無料のオープンソースアプリ。未検証。',
    twitterDescription: 'Tolariaレビュー：プレーンなMarkdownファイル、内蔵Gitクライアント、その上にAIエージェントやローカルモデル。無料のオープンソースで、情報源が確認した点と未確認の点。',
    audience: 'AI支援付きのローカル優先Markdownノートアプリを探しているノート利用者、研究者、開発者で、情報源が確認していること、プロジェクトが主張しているだけのこと、費用を知りたい方向けです。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'tolaria レビュー',
    targetKeywords: [
      'tolaria レビュー',
      'tolaria markdown ノートアプリ',
      'git対応 オープンソース markdown ノートアプリ',
      'ローカル markdown ナレッジベース',
      'aiエージェント対応 ノートアプリ',
      'markdown vault git 同期 デスクトップ',
      'tolaria ai ノート',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Tolaria（安定版 2026.10.13）は、ノートをプレーンなファイルで保存し、利用者が選んだAIエージェントやモデルにつなぐ、無料のオープンソース・デスクトップ向けMarkdownナレッジベースアプリです。** 独自のAIモデルは同梱されず、アカウントも不要です。以下の内容はすべてプロジェクトの公式サイト、ドキュメント、リポジトリに基づいています。',
    quickAnswerTop: {
      ja: {
        question: 'Tolariaはノートを自分のパソコンに保存したままにできますか。',
        answer: 'プロジェクトによれば可能です。ノートはディスク上のフォルダにあるプレーンなMarkdownファイルで、データベースも独自形式もアカウントもありません。同期は利用者が選ぶリモートに対するGitで行います。AI機能は任意で、設定したエージェントやモデル提供元にだけノートの内容を送り、クラッシュレポートは同意ダイアログによるオプトインです。',
        bullets: [
          'ノートはYAML frontmatter付きのMarkdownファイルで、どのエディタでも開けます。',
          '内蔵Gitクライアントでコミット、履歴、pull、pushを扱えます。',
          'AIパネルはコーディングエージェントのCLIと、ローカルまたはホスト型のモデルに対応します。',
          'デスクトップ版はmacOS、Windows、Linux向けで、iPhoneとiPadはベータ版です。',
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
        label: 'Tolariaとは',
        anchor: 'what-is-tolaria',
      },
      {
        label: '入手方法',
        anchor: 'get-it',
      },
      {
        label: '動作要件',
        anchor: 'requirements',
      },
      {
        label: '始め方',
        anchor: 'getting-started',
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
            text: 'Tolariaは、MarkdownファイルのフォルダをGit管理のvaultとして扱い、AIエージェントやモデルに作業させられるオープンソースのデスクトップ向けノートアプリです。',
          },
          {
            type: 'plain-terms',
            text: 'ディスク上の普通のテキストファイルを高速なアプリで閲覧・編集し、変更はGitで追跡し、必要ならAIエージェントやモデルをvaultに接続します。',
          },
        ],
        items: [
          'メンテナンス：リポジトリは2026年10月24日に更新されており、更新停止の警告は該当しません。',
          'リリースチャンネル：手動で昇格する安定版（2026.10.13）と、メインブランチへのプッシュごとに公開されるアルファ版があります。',
          '費用：AGPL-3.0-or-laterの無料オープンソースで、アカウントは不要です。公式サイトは「永久に無料」としています。',
          'AI：モデルは同梱されません。Claude CodeやCodexなどのエージェント、Ollamaやホスト型APIなどの提供元を利用者が接続します。',
          '開発元：Refactoring創業者のLuca。READMEにはCodacyやCircleCIなどのツールスポンサーが載っています。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは公式サイト、ドキュメント、GitHubリポジトリを2026年10月24日に確認した内容に基づきます。PromptQuorumはアプリをインストールも計測もしていないため、速度、安定性、AIの結果は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-tolaria',
        title: 'Tolariaとは',
        content: [
          '**Tolariaは、Markdownのナレッジベースを管理するデスクトップアプリです。vaultはMarkdownファイルが入った普通のフォルダで、アプリはその上にエディタ、ノート間のリンク、保存ビュー、Gitクライアントを加えます。** リポジトリでは「desktop app to manage markdown knowledge bases」、公式サイトでは「a second brain for the AI era」と説明されており、作者は1万件を超えるノートのvaultで使っていると述べています。',
          'READMEは用途として、セカンドブレインや個人の知識管理、AIの文脈として使う社内ドキュメントの整理、AIアシスタントの記憶や手順の保管の3つを挙げています。アプリはTauri、React、TypeScriptで作られており。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Tolariaは無料で、macOS、Windows、Linux向けに配布されており、macOSにはHomebrew caskもあります。iPhoneとiPadはTestFlightのベータ版です。**',
        ],
        columns: [
          '項目',
          '入手方法',
        ],
        rows: [
          {
            '項目': 'デスクトップ',
            '入手方法': 'macOS、Windows、Linux向けの[ダウンロードページ](https://tolaria.md/download/)',
          },
          {
            '項目': 'Homebrew',
            '入手方法': 'brew install --cask tolaria（macOS）',
          },
          {
            '項目': 'iPhone・iPad',
            '入手方法': 'TestFlightのベータ版。アクセスはプロジェクトのDiscordで依頼します',
          },
          {
            '項目': '公式サイト',
            '入手方法': '[tolaria.md](https://tolaria.md)',
          },
          {
            '項目': 'プライバシーポリシー',
            '入手方法': '独立したポリシーは見つからず、[テレメトリの設計メモ](https://github.com/refactoringhq/tolaria/blob/main/docs/adr/0016-sentry-posthog-telemetry.md)を参照',
          },
          {
            '項目': 'ソースコード',
            '入手方法': '[GitHub: refactoringhq/tolaria](https://github.com/refactoringhq/tolaria)、AGPL-3.0-or-later',
          },
        ],
        note: '確認したバージョン：安定版2026.10.13（2026年10月13日リリース、[リリースページ](https://github.com/refactoringhq/tolaria/releases/tag/v2026-10-13)）。同日にもアルファ版が公開されていました。ソフトウェアは無料で、公式サイトに有料プランの記載はありません。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: [
          '**TolariaはmacOS、Windows、Linux向けのビルドを公開しており、RAM、ディスク、GPUの要件は情報源に記載がありません。**',
        ],
        columns: [
          '項目',
          '情報源の記載',
        ],
        rows: [
          {
            '項目': '対応OS',
            '情報源の記載': 'macOS（Apple siliconとIntel）、Windows x64、Linux x86_64。macOSが主対象で、WindowsとLinuxは「supported, early」とされています',
          },
          {
            '項目': 'インストーラー',
            '情報源の記載': 'macOS用.dmg、Windows用セットアップ.exe、Linux用のAppImage、deb、RPM',
          },
          {
            '項目': 'ハードウェア',
            '情報源の記載': '最低要件の記載なし。モデルの推論は接続したエージェントや提供元で行われ、Tolaria自体では行われません',
          },
          {
            '項目': 'Git',
            '情報源の記載': '任意：普通のフォルダをvaultとして開け、Gitで履歴、コミット、pull、pushが加わります',
          },
          {
            '項目': 'インターネット',
            '情報源の記載': 'READMEではvaultは完全にオフラインで動作するとされ、Gitリモートとホスト型モデルには接続が必要です',
          },
        ],
        note: 'ダウンロードページには最低OSバージョンの記載がありません。READMEはWindowsインストーラーがAuthenticode署名済みとしていますが、インストールページでは証明書の準備後に署名を追加するとしており、企業管理の端末ではIT部門の承認が必要になる場合があります。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**手順はプロジェクトのインストールページに沿ったもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'インストールする',
            whyItMatters: '自分のOS向けの安定版をダウンロードするか、macOSではHomebrew caskを使います。',
          },
          {
            title: 'vaultを開く',
            whyItMatters: 'ガイド付きツアー用のGetting Started vaultをクローンするか、既存のMarkdownフォルダを開きます。',
          },
          {
            title: 'コマンドパレットを使う',
            whyItMatters: 'macOSではCmd+K、WindowsとLinuxではCtrl+Kでコマンドを呼び出します。',
          },
          {
            title: 'AIを接続する（任意）',
            whyItMatters: '設定でモデル提供元を追加するか、対応するコーディングエージェントのCLIをインストールするとTolariaが検出します。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下はすべてプロジェクトの公式サイト、ドキュメント、READMEに基づく内容で、独自に検証したものはありません。**',
        ],
        items: [
          '**Markdown vaultとリレーション。** ノートはYAML frontmatter付きのMarkdownファイルです。タイプは強制スキーマではなくナビゲーション用の切り口で、ノート同士はオートコンプリート付きのwikilinkで結ばれます。',
          '**エディタ。** スラッシュコマンド、生のMarkdownモード、ホワイトボード、メディアプレビュー、表の操作に対応したブロックベースのエディタです。ドキュメントにはスプレッドシートとHTMLブロックの手引きもあります。',
          '**Gitクライアント。** コミット、push、pull、vault全体とノートごとの履歴、差分、競合の処理を、接続した任意のリモートに対して行えます。',
          '**カスタムビューと複数vault。** 保存ビューとサイドバーのセクションに加え、複数のvaultを1つのグラフに読み込むオプションがあります。',
          '**AIエージェントとモデル。** AIパネルは、ドキュメントがClaude Code、Codex、GitHub Copilot、OpenCode、Pi、Antigravity CLI、Kiro、Hermes Agentと挙げるCLIコーディングエージェントをストリーミング表示し、Ollama、LM Studio、OpenAI、Anthropic、Gemini、OpenRouter、OpenAI互換エンドポイント経由で、ノートの内容を踏まえたチャット形式の回答も行います。Tolariaはノートの検索、読み取り、作成、更新ができるMCPサーバーも公開しています。',
        ],
        note: 'エージェントは各自のサインイン、ツール、課金を保持し、Tolariaは検出して出力を表示するだけです。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**プロジェクトはTolariaを「files-first」「offline-first」と説明しています。ノートは自分で選んだフォルダにあり、アカウントは不要で、READMEによればvaultは完全にオフラインで動作します。** 同期は設定した任意のリモートに対するGitで行い、READMEでは「Tolariaのサーバーへの依存はゼロ」とされています。',
          'データがパソコンの外に出る可能性があるのはAIの部分です。コーディングエージェントは各自の認証でお使いのPC上で動作し、ホスト型のモデル提供元には送信したノートの内容が渡され、OllamaやLM Studioを使えばその内容はローカルに留まります。提供元のAPIキーはvaultの設定には保存されず、端末に保存するか環境変数から読み込みます。クラッシュレポートは初回起動時の同意ダイアログによるオプトインで（スタックトレース、アプリのバージョン、OSとアーキテクチャ。ダイアログの文言ではvaultの内容やファイルパスは含まれません）、ソースコードには設定内に使用状況分析の別スイッチもあります。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらはプロジェクトの申告とソースコードからの観察であり、監査結果ではありません。PromptQuorumはネットワーク通信を調べていません。公式サイトとダウンロードページにプライバシーポリシーのページは見つからず、最も近い文書はリポジトリ内の[テレメトリの設計メモ](https://github.com/refactoringhq/tolaria/blob/main/docs/adr/0016-sentry-posthog-telemetry.md)です。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**ライターや研究者**：通常のテキストツールとGit履歴で使える、長く使えるMarkdownアーカイブがほしい方。',
          '**ノートにAIコーディングエージェントを使う人**：すべての変更をレビュー可能なGit差分として確認したい方。',
          '**ドキュメントをAIの文脈として管理する開発者・チーム**：Gitに慣れていて、バージョン管理できるファイルを求める方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実際の使用感。** PromptQuorumはTolariaをインストールしていないため、エディタの速度、安定性、作者が述べる1万件超のノートを持つvaultでの動作は検証していません。',
          '**AIの品質と費用。** エージェントやモデルはサードパーティ製のツールであり、その結果、費用、各提供元への送信内容は確認していません。',
          '**プラットフォームの成熟度。** プロジェクトはWindowsとLinuxの対応を初期段階としており、Windowsの署名については情報源の記載が食い違い、macOSのnotarizationには触れられていません。',
          '**モバイルのベータ版。** iPhone・iPad向けアプリとTestFlightへのアクセス手順は試しておらず、ドキュメントも機能について簡単にしか触れていません。',
          '**コード以外のプライバシー。** プライバシーポリシーは公開されておらず、オプトインやパス除去に関する記述はリポジトリに基づくもので、監査ではありません。',
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
            '価格／ライセンス': '基本無料、同期は有料 / AGPL-3.0',
            '主な違い': 'ブロック単位の参照とAIエージェント連携を内蔵。TolariaはプレーンなMarkdownファイルとGitが中心',
          },
          {
            'アプリ': '[Blinko](/ja/power-local-llm/blinko-review)',
            '対応プラットフォーム': 'セルフホスト型Webアプリ（Docker）',
            '価格／ライセンス': '無料 / GPL-3.0',
            '主な違い': '設定したLLM提供元を介したRAG検索付きのセルフホスト型ノート。Tolariaはローカルファイル上のデスクトップアプリ',
          },
        ],
        note: '両アプリともPromptQuorumのディレクトリに掲載されています。最新の価格、ライセンス、対応プラットフォームは各アプリの掲載ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'すでに持っているMarkdownフォルダを開けますか。',
            a: 'はい。インストールガイドによれば、既存のMarkdownフォルダをvaultとして開けます。フォルダがGitリポジトリでない場合、TolariaはGitの初期化を依頼されたときだけ行い、デスクトップ、ドキュメント、ダウンロードのような広いフォルダは、明らかにvault専用でない限り避けます。',
          },
          {
            q: 'StableとAlphaの違いは何ですか。',
            a: 'Stableは手動で昇格され、ダウンロードページが指すチャンネルです。Alphaはメインブランチへのプッシュごとに更新され、機能が早く届く一方、安定性は劣ることがあります。2026年10月24日には数時間のうちに複数のアルファ版が公開されており、ドキュメントはチャンネルを切り替える前にvaultの変更をコミットまたはpushするよう勧めています。',
          },
          {
            q: 'AIエージェントは確認なしにノートを変更できますか。',
            a: 'コーディングエージェントはvault内のファイルを編集できます。ドキュメントには、ファイル・検索・編集ツールに限定した「Vault Safe」モードと、対応するエージェントに対してvaultに限定したローカルのシェルコマンドを許可できる「Power User」モードが記載されています。直接モデルとのチャットには書き込みツールもシェルアクセスもなく、Git管理のvaultなら変更を差分として確認して元に戻せます。',
          },
          {
            q: 'モバイルアプリはありますか。',
            a: 'iPhoneとiPad向けアプリはTestFlightでベータ提供中で、アクセスはプロジェクトのDiscordコミュニティで依頼します。ドキュメントによればWYSIWYGエディタ、Gitの自動コミット、iCloudまたはファイル経由の同期を備え、AIパネルや一部の上級機能は今のところデスクトップ専用です。',
          },
          {
            q: 'Tolariaのライセンスは何で、名前は再利用できますか。',
            a: '公式サイトはAGPL-3.0-or-later、GitHub APIはAGPL-3.0と示しています。サイトは、Tolariaの名称とロゴが商標ポリシーの対象だとも記しているので、ブランドを再利用する前に確認してください。これは法的助言ではありません。',
          },
          {
            q: 'Tolariaは誰が作っていますか。',
            a: '公式サイトによれば、Refactoring創業者のLucaが長年の執筆とノート作りを経て作ったもので、READMEでは自分のために作り、オープンソースとして共有しているとされています。READMEはCodacy、CodeScene、CircleCI、Unblockedをプロジェクトを支えるツールとして挙げており、会社や有料プランの説明はありません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'Tolariaは、Markdownノートをプレーンなファイルのまま Gitで管理し、すでに使っているAIエージェントやモデルに渡せる、積極的に開発されている無料のオープンソースの選択肢です。一方で、WindowsとLinuxのビルドは初期段階とされ、プロジェクトは名前の挙がる1人の開発者が提示しており、プライバシーポリシーは公開されておらず、速度やAIに関する主張は本稿では確認できませんでした。プレーンなファイルとGitが好きで、レビュー可能な差分つきのAI支援がほしい方に向いています。文書化されたプライバシーポリシー、成熟したモバイルアプリ、組み込みのAIが必要な方は、先に試すか別の選択肢を探してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Tolaria公式サイト](https://tolaria.md) — 機能概要、AIの利用経路、ライセンス、リンク。2026年10月24日に確認。',
          '[Tolariaダウンロードページ](https://tolaria.md/download/) — 安定版2026.10.13、対応プラットフォーム、Windows署名に関する注記。2026年10月24日に確認。',
          '[GitHubのTolaria](https://github.com/refactoringhq/tolaria) — README、ドキュメント、リリースチャンネル、テレメトリの設計メモ。最新コミットは2026年10月24日。',
          '[安定版リリース v2026-10-13](https://github.com/refactoringhq/tolaria/releases/tag/v2026-10-13) — インストーラーのファイルとリリース日。2026年10月24日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[SiYuanレビュー](/ja/power-local-llm/siyuan-review) — プライバシー重視のブロック型ナレッジベース。AIを内蔵。',
          '[Blinkoレビュー](/ja/power-local-llm/blinko-review) — RAG検索付きのセルフホスト型AIノート。',
          '[ローカル知識・検索ツール比較](/ja/power-local-llm/local-llm-knowledge-retrieval-compared) — 本レビューが属するカテゴリ比較。',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/tolaria-review-hero-pt.webp',
    title: 'Análise do Tolaria: notas Markdown de código aberto com Git e agentes de IA',
    seoTitle: 'Análise do Tolaria: notas Markdown com Git e agentes de IA',
    intro: 'O Tolaria é um aplicativo de desktop gratuito e de código aberto, criado por Luca, fundador da Refactoring, que guarda suas notas Markdown como arquivos simples em um vault controlado pelo Git e pode entregá-las a agentes de código com IA ou a modelos locais e hospedados. Esta análise se baseia no [site](https://tolaria.md), na documentação e no repositório do GitHub do projeto, consultados em 24 de outubro de 2026; a PromptQuorum não testou o aplicativo na prática.',
    metaDescription: 'Análise do Tolaria: app gratuito de código aberto que guarda notas Markdown como arquivos em um vault Git e conecta agentes de IA e modelos. Sem testes.',
    twitterDescription: 'Análise do Tolaria: arquivos Markdown simples, cliente Git integrado e, por cima, agentes de IA ou modelos locais. Gratuito e de código aberto; o que as fontes confirmam e o que não.',
    audience: 'Quem faz anotações, pesquisadores e desenvolvedores que querem um app de notas Markdown local com ajuda de IA e precisam saber o que as fontes confirmam, o que o projeto apenas afirma e quanto custa.',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise tolaria',
    targetKeywords: [
      'análise tolaria',
      'tolaria app de notas markdown',
      'app de notas markdown código aberto com git',
      'base de conhecimento markdown local',
      'app de notas com agentes de código ia',
      'vault markdown sincronização git desktop',
      'tolaria notas ia',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**O Tolaria (versão estável 2026.10.13) é um aplicativo de desktop gratuito e de código aberto para bases de conhecimento em Markdown, que guarda as notas como arquivos simples e as conecta aos agentes de IA e aos modelos que você escolher.** Ele não traz nenhum modelo de IA próprio e não exige conta. Tudo o que está aqui vem do site, da documentação e do repositório do projeto.',
    quickAnswerTop: {
      pt: {
        question: 'O Tolaria mantém minhas notas no meu próprio computador?',
        answer: 'Segundo o projeto, sim: as notas são arquivos Markdown simples em uma pasta do seu disco, sem banco de dados, sem formato proprietário e sem conta. A sincronização é feita com Git em um remoto que você escolhe. Os recursos de IA são opcionais e só enviam o contexto das notas ao agente ou provedor de modelos que você configurar; os relatórios de falhas são voluntários, por meio de uma caixa de consentimento.',
        bullets: [
          'As notas são arquivos Markdown com frontmatter YAML que qualquer editor abre.',
          'Um cliente Git integrado cobre commits, histórico, pull e push.',
          'O painel de IA funciona com CLIs de agentes de código e com modelos locais ou hospedados.',
          'Há versões para desktop em macOS, Windows e Linux; iPhone e iPad estão em beta.',
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
        label: 'O que é o Tolaria?',
        anchor: 'what-is-tolaria',
      },
      {
        label: 'Onde obter',
        anchor: 'get-it',
      },
      {
        label: 'Requisitos',
        anchor: 'requirements',
      },
      {
        label: 'Como começar',
        anchor: 'getting-started',
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
            text: 'O Tolaria é um app de notas de desktop e de código aberto que trata uma pasta de arquivos Markdown como um vault controlado pelo Git e deixa agentes de IA e modelos trabalharem sobre ele.',
          },
          {
            type: 'plain-terms',
            text: 'Você mantém arquivos de texto comuns no disco, navega e edita em um app rápido, acompanha as mudanças com o Git e, se quiser, aponta um agente de IA ou um modelo para o vault.',
          },
        ],
        items: [
          'Manutenção: o repositório foi atualizado pela última vez em 24 de outubro de 2026, então não se aplica nenhum aviso de projeto parado.',
          'Canais de lançamento: uma versão estável promovida manualmente (2026.10.13) e builds alfa publicados a cada push na branch principal.',
          'Custo: gratuito e de código aberto sob AGPL-3.0-or-later, sem conta; o site o chama de gratuito para sempre.',
          'IA: nenhum modelo incluído; você conecta agentes como Claude Code e Codex e provedores como Ollama ou APIs hospedadas.',
          'Responsável: Luca, fundador da Refactoring; o README cita ferramentas patrocinadoras como Codacy e CircleCI.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site, na documentação e no repositório do GitHub, consultados em 24 de outubro de 2026. A PromptQuorum não instalou nem mediu o aplicativo, então velocidade, estabilidade e resultados da IA não são avaliados.',
          },
        ],
      },
      overview: {
        id: 'what-is-tolaria',
        title: 'O que é o Tolaria?',
        content: [
          '**O Tolaria é um aplicativo de desktop para gerenciar bases de conhecimento em Markdown: um vault é uma pasta comum de arquivos Markdown, e o app acrescenta editor, vínculos entre notas, visualizações salvas e um cliente Git.** O repositório o descreve como "desktop app to manage markdown knowledge bases" e o site como "a second brain for the AI era"; o autor diz usá-lo em um vault com mais de 10.000 notas.',
          'O README cita três usos: manter um segundo cérebro ou uma base de conhecimento pessoal, organizar documentos da empresa como contexto para a IA e guardar a memória e os procedimentos de assistentes de IA. O app é feito com Tauri, React e TypeScript.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Tolaria é um download gratuito para macOS, Windows e Linux, com um cask do Homebrew no macOS; iPhone e iPad estão em um beta no TestFlight.**',
        ],
        columns: [
          'Opção',
          'Onde obter',
        ],
        rows: [
          {
            'Opção': 'Desktop',
            'Onde obter': '[Página de download](https://tolaria.md/download/) para macOS, Windows e Linux',
          },
          {
            'Opção': 'Homebrew',
            'Onde obter': 'brew install --cask tolaria (macOS)',
          },
          {
            'Opção': 'iPhone e iPad',
            'Onde obter': 'Beta pelo TestFlight; o acesso é pedido no Discord do projeto',
          },
          {
            'Opção': 'Site',
            'Onde obter': '[tolaria.md](https://tolaria.md)',
          },
          {
            'Opção': 'Política de privacidade',
            'Onde obter': 'Nenhuma política própria encontrada; veja a [nota de projeto sobre telemetria](https://github.com/refactoringhq/tolaria/blob/main/docs/adr/0016-sentry-posthog-telemetry.md)',
          },
          {
            'Opção': 'Código-fonte',
            'Onde obter': '[GitHub: refactoringhq/tolaria](https://github.com/refactoringhq/tolaria), AGPL-3.0-or-later',
          },
        ],
        note: 'Versão analisada: estável 2026.10.13, lançada em 13 de outubro de 2026 ([página da versão](https://github.com/refactoringhq/tolaria/releases/tag/v2026-10-13)); builds alfa eram publicados no mesmo dia. O software é gratuito e o site não descreve nenhum plano pago.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**O Tolaria publica builds para macOS, Windows e Linux; as fontes não indicam nenhum requisito de RAM, disco ou GPU.**',
        ],
        columns: [
          'Item',
          'O que dizem as fontes',
        ],
        rows: [
          {
            Item: 'Sistemas operacionais',
            'O que dizem as fontes': 'macOS (Apple silicon e Intel), Windows x64 e Linux x86_64; o macOS é o alvo principal e Windows e Linux constam como "supported, early"',
          },
          {
            Item: 'Instaladores',
            'O que dizem as fontes': 'Um .dmg para macOS, um .exe de instalação para Windows e arquivos AppImage, deb e RPM para Linux',
          },
          {
            Item: 'Hardware',
            'O que dizem as fontes': 'Nenhum mínimo informado; a inferência do modelo roda no agente ou provedor que você conectar, não no Tolaria',
          },
          {
            Item: 'Git',
            'O que dizem as fontes': 'Opcional: uma pasta simples abre como vault e o Git acrescenta histórico, commits, pull e push',
          },
          {
            Item: 'Internet',
            'O que dizem as fontes': 'Segundo o README, um vault funciona totalmente offline; remotos Git e provedores hospedados exigem conexão',
          },
        ],
        note: 'A página de download não informa versões mínimas de sistema operacional. O README diz que os instaladores do Windows têm assinatura Authenticode, enquanto a página de instalação afirma que essa assinatura ainda será acrescentada após a obtenção do certificado; em dispositivos gerenciados por empresas, pode ser preciso aprovação da TI.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Os passos seguem a página de instalação do projeto; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Instalar',
            whyItMatters: 'Baixe a versão estável para o seu sistema ou use o cask do Homebrew no macOS.',
          },
          {
            title: 'Abrir um vault',
            whyItMatters: 'Clone o vault Getting Started para um tour guiado, ou abra uma pasta existente de arquivos Markdown.',
          },
          {
            title: 'Usar a paleta de comandos',
            whyItMatters: 'Pressione Cmd+K no macOS ou Ctrl+K no Windows e no Linux para acessar os comandos.',
          },
          {
            title: 'Conectar a IA (opcional)',
            whyItMatters: 'Adicione um provedor de modelos nas configurações ou instale uma CLI de agente de código compatível, que o Tolaria passa a detectar.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Tudo o que segue vem do site, da documentação ou do README do projeto; nada foi testado de forma independente.**',
        ],
        items: [
          '**Vault Markdown e relações.** As notas são arquivos Markdown com frontmatter YAML; os tipos são guias de navegação e não esquemas obrigatórios, e as notas se ligam por wikilinks com preenchimento automático.',
          '**Editor.** Um editor em blocos com comandos de barra, modo Markdown bruto, quadros brancos, pré-visualização de mídia e navegação em tabelas; a documentação também traz guias sobre planilhas e blocos HTML.',
          '**Cliente Git.** Commit, push, pull, histórico do vault inteiro e por nota, diffs e tratamento de conflitos em qualquer remoto que você conectar.',
          '**Visualizações personalizadas e vários vaults.** Visualizações salvas e seções da barra lateral, além de uma opção para carregar vários vaults em um único grafo.',
          '**Agentes de IA e modelos.** O painel de IA transmite em tempo real agentes de código em CLI que a documentação lista como Claude Code, Codex, GitHub Copilot, OpenCode, Pi, Antigravity CLI, Kiro e Hermes Agent, e responde em modo de chat a partir do contexto das notas por meio de Ollama, LM Studio, OpenAI, Anthropic, Gemini, OpenRouter ou qualquer endpoint compatível com a OpenAI. O Tolaria também expõe um servidor MCP que pode buscar, ler, criar e atualizar notas.',
        ],
        note: 'Os agentes mantêm o próprio login, as próprias ferramentas e a própria cobrança; o Tolaria apenas os detecta e transmite a saída deles.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**O projeto descreve o Tolaria como "files-first" e "offline-first": as notas ficam em uma pasta de sua escolha, não há conta e, segundo o README, um vault funciona totalmente offline.** A sincronização é Git em qualquer remoto que você configurar, com "zero dependência dos servidores do Tolaria" segundo o README.',
          'É na IA que os dados podem sair do computador. Os agentes de código rodam na sua máquina com a própria autenticação, um provedor de modelos hospedado recebe o contexto das notas que você envia, e Ollama ou LM Studio mantêm esse contexto local. As chaves de API dos provedores não são guardadas nas configurações do vault: você as salva no dispositivo ou as lê de uma variável de ambiente. Os relatórios de falhas são voluntários por meio de uma caixa de consentimento na primeira abertura (stack traces, versão do app, sistema operacional e arquitetura, sem conteúdo do vault nem caminhos de arquivo, conforme o texto da caixa), e o código-fonte também tem uma chave separada de análise de uso nas configurações.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Essas são declarações do projeto e observações do código-fonte, não resultados de auditoria; a PromptQuorum não inspecionou o tráfego de rede. Nenhuma política de privacidade foi encontrada no site nem na página de download; o documento mais próximo é a [nota de projeto sobre telemetria](https://github.com/refactoringhq/tolaria/blob/main/docs/adr/0016-sentry-posthog-telemetry.md) do repositório.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Escritores e pesquisadores** que querem um arquivo Markdown duradouro, compatível com ferramentas de texto comuns e com o histórico do Git.',
          '**Pessoas que usam agentes de código com IA nas próprias notas** e querem ver cada mudança como um diff do Git revisável.',
          '**Desenvolvedores e equipes que mantêm documentação como contexto para a IA**, à vontade com o Git e que querem arquivos versionáveis.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Uso real.** A PromptQuorum não instalou o Tolaria, então a velocidade do editor, a estabilidade e a afirmação do autor sobre um vault com mais de 10.000 notas não foram testadas.',
          '**Qualidade e custo da IA.** Os agentes e os modelos são ferramentas de terceiros; seus resultados, custos e o que enviam aos próprios provedores não foram examinados.',
          '**Maturidade das plataformas.** O projeto chama de inicial o suporte a Windows e Linux, as fontes divergem sobre a assinatura do Windows e a notarização do macOS não é mencionada.',
          '**Beta móvel.** O app para iPhone e iPad e o processo de acesso pelo TestFlight não foram testados, e a documentação descreve seus recursos apenas de forma breve.',
          '**Privacidade além do código.** Não há política de privacidade publicada, e as afirmações sobre consentimento e remoção de caminhos vêm do repositório, não de uma auditoria.',
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
            'Preço / licença': 'Núcleo grátis, sync pago / AGPL-3.0',
            'Diferença principal': 'Referências em nível de bloco e colaboração integrada com agentes de IA; o Tolaria se baseia em arquivos Markdown simples e Git',
          },
          {
            App: '[Blinko](/pt/power-local-llm/blinko-review)',
            Plataformas: 'App web auto-hospedado (Docker)',
            'Preço / licença': 'Grátis / GPL-3.0',
            'Diferença principal': 'Notas auto-hospedadas com busca RAG por um provedor de LLM configurado; o Tolaria é um app de desktop sobre arquivos locais',
          },
        ],
        note: 'Os dois apps estão no diretório da PromptQuorum; confirme preço, licença e plataformas atuais na ficha de cada um.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso abrir uma pasta de arquivos Markdown que já tenho?',
            a: 'Sim. O guia de instalação diz que você pode abrir uma pasta existente de arquivos Markdown como vault. Se a pasta não for um repositório Git, o Tolaria só inicializa o Git quando você pede e evita pastas amplas como Área de Trabalho, Documentos ou Downloads, a menos que sejam claramente dedicadas ao vault.',
          },
          {
            q: 'Qual é a diferença entre Stable e Alpha?',
            a: 'O Stable é promovido manualmente e é o canal para o qual a página de download aponta; o Alpha acompanha cada push na branch principal, recebe novidades mais cedo, mas pode ser mais instável. Vários builds alfa foram publicados em poucas horas em 24 de outubro de 2026, e a documentação recomenda fazer commit ou push das mudanças do vault antes de trocar de canal.',
          },
          {
            q: 'Um agente de IA pode alterar minhas notas sem perguntar?',
            a: 'Os agentes de código podem editar arquivos do vault. A documentação descreve um modo "Vault Safe", limitado a ferramentas de arquivo, busca e edição, e um modo "Power User", que pode permitir comandos de shell locais restritos ao vault nos agentes que os suportam. O chat com modelos diretos não recebe ferramentas de escrita nem acesso ao shell, e um vault com Git mostra as mudanças como diffs que você pode revisar e desfazer.',
          },
          {
            q: 'Existe um app para celular?',
            a: 'Um app para iPhone e iPad está em beta pelo TestFlight, e o acesso é pedido na comunidade do Discord do projeto. Segundo a documentação, ele oferece editor WYSIWYG, commits automáticos do Git e sincronização por iCloud ou Arquivos, enquanto o painel de IA e alguns recursos avançados ainda são exclusivos do desktop.',
          },
          {
            q: 'Qual é a licença do Tolaria e posso reutilizar o nome?',
            a: 'O site indica AGPL-3.0-or-later e a API do GitHub informa AGPL-3.0. O site acrescenta que o nome e o logotipo do Tolaria são cobertos por uma política de marca; consulte-a antes de reutilizar a identidade visual. Isto não é aconselhamento jurídico.',
          },
          {
            q: 'Quem está por trás do Tolaria?',
            a: 'Segundo o site, ele foi criado por Luca, fundador da Refactoring, depois de anos escrevendo e fazendo anotações, e segundo o README ele o construiu para si e o compartilha como código aberto. O README cita Codacy, CodeScene, CircleCI e Unblocked como ferramentas que apoiam o projeto; nenhuma empresa nem plano pago é descrito.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'O Tolaria é uma forma gratuita, de código aberto e com desenvolvimento ativo de manter notas Markdown como arquivos simples sob o Git e entregá-las aos agentes de IA ou modelos que você já usa. Em contrapartida, os builds para Windows e Linux são descritos como iniciais, o projeto é apresentado por um único responsável nomeado, não há política de privacidade publicada e nenhuma de suas afirmações sobre velocidade ou IA pôde ser verificada aqui. Serve a quem já gosta de arquivos simples e Git e quer ajuda de IA com diffs revisáveis; quem precisa de uma política de privacidade documentada, de um app móvel maduro ou de IA integrada deve testá-lo antes ou procurar outra opção.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Tolaria](https://tolaria.md) — visão geral dos recursos, caminhos de IA, licença e links, consultado em 24 de outubro de 2026.',
          '[Página de download do Tolaria](https://tolaria.md/download/) — versão estável 2026.10.13, plataformas e nota sobre a assinatura do Windows.',
          '[Tolaria no GitHub](https://github.com/refactoringhq/tolaria) — README, documentação, canais de lançamento e nota de projeto sobre telemetria; último commit em 24 de outubro de 2026.',
          '[Versão estável v2026-10-13](https://github.com/refactoringhq/tolaria/releases/tag/v2026-10-13) — arquivos de instalação e data de lançamento.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do SiYuan](/pt/power-local-llm/siyuan-review) — uma base de conhecimento em blocos focada em privacidade, com IA integrada.',
          '[Análise do Blinko](/pt/power-local-llm/blinko-review) — notas com IA auto-hospedadas e busca RAG.',
          '[Ferramentas locais de conhecimento e recuperação comparadas](/pt/power-local-llm/local-llm-knowledge-retrieval-compared) — a comparação de categoria a que esta análise pertence.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/tolaria-review-hero-ar.webp',
    title: 'مراجعة Tolaria: ملاحظات Markdown مفتوحة المصدر مع Git ووكلاء الذكاء الاصطناعي',
    seoTitle: 'مراجعة Tolaria: ملاحظات Markdown مع Git ووكلاء الذكاء',
    intro: 'Tolaria تطبيق سطح مكتب مجاني ومفتوح المصدر من Luca مؤسس Refactoring، يحفظ ملاحظات Markdown كملفات عادية داخل مخزن (vault) يديره Git، ويمكنه تمريرها إلى وكلاء برمجة بالذكاء الاصطناعي أو إلى نماذج محلية ومستضافة. تستند هذه المراجعة إلى [الموقع](https://tolaria.md) والوثائق ومستودع GitHub الخاص بالمشروع، وقد جرى الاطلاع عليها في 24 أكتوبر 2026؛ ولم تجرّب PromptQuorum التطبيق عمليًا.',
    metaDescription: 'مراجعة Tolaria: تطبيق سطح مكتب مجاني مفتوح المصدر يحفظ ملاحظات Markdown كملفات في مخزن Git ويربط وكلاء الذكاء الاصطناعي والنماذج. لم نجرّبه.',
    twitterDescription: 'مراجعة Tolaria: ملفات Markdown عادية وعميل Git مدمج ووكلاء ذكاء اصطناعي أو نماذج محلية فوقها. مجاني ومفتوح المصدر؛ ما تؤكده المصادر وما لا تؤكده.',
    audience: 'كتّاب الملاحظات والباحثون والمطورون الذين يريدون تطبيق ملاحظات Markdown محليًا مع مساعدة الذكاء الاصطناعي، ويحتاجون إلى معرفة ما تؤكده المصادر وما يكتفي المشروع بادعائه وكم يكلّف.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Tolaria',
    targetKeywords: [
      'مراجعة tolaria',
      'تطبيق ملاحظات markdown tolaria',
      'تطبيق ملاحظات markdown مفتوح المصدر مع git',
      'قاعدة معرفة markdown محلية',
      'تطبيق ملاحظات مع وكلاء برمجة بالذكاء الاصطناعي',
      'مخزن markdown ومزامنة git على سطح المكتب',
      'tolaria ملاحظات ذكاء اصطناعي',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Tolaria (الإصدار المستقر 2026.10.13) تطبيق سطح مكتب مجاني ومفتوح المصدر لقواعد المعرفة بصيغة Markdown، يخزّن الملاحظات كملفات عادية ويربطها بوكلاء الذكاء الاصطناعي والنماذج التي تختارها.** لا يأتي مع نموذج ذكاء اصطناعي خاص به ولا يتطلب حسابًا. كل ما يرد هنا مصدره موقع المشروع ووثائقه ومستودعه.',
    quickAnswerTop: {
      ar: {
        question: 'هل يُبقي Tolaria ملاحظاتي على جهازي؟',
        answer: 'بحسب المشروع، نعم: الملاحظات ملفات Markdown عادية في مجلد على قرصك، بلا قاعدة بيانات ولا صيغة مملوكة ولا حساب. تتم المزامنة عبر Git مع مستودع بعيد تختاره. ميزات الذكاء الاصطناعي اختيارية ولا ترسل سياق الملاحظات إلا إلى الوكيل أو مزوّد النماذج الذي تضبطه، وتقارير الأعطال اختيارية عبر مربع حوار للموافقة.',
        bullets: [
          'الملاحظات ملفات Markdown مع YAML frontmatter يمكن لأي محرر فتحها.',
          'عميل Git مدمج يغطي الالتزامات (commits) والسجل وعمليتي pull وpush.',
          'تعمل لوحة الذكاء الاصطناعي مع واجهات أوامر وكلاء البرمجة ومع نماذج محلية أو مستضافة.',
          'تتوفر نسخ سطح المكتب لأنظمة macOS وWindows وLinux، وتطبيق iPhone وiPad في مرحلة تجريبية.',
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
        label: 'ما هو Tolaria؟',
        anchor: 'what-is-tolaria',
      },
      {
        label: 'كيف تحصل عليه',
        anchor: 'get-it',
      },
      {
        label: 'المتطلبات',
        anchor: 'requirements',
      },
      {
        label: 'كيف تبدأ',
        anchor: 'getting-started',
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
            text: 'Tolaria تطبيق ملاحظات مفتوح المصدر لسطح المكتب يتعامل مع مجلد ملفات Markdown بوصفه مخزنًا يديره Git ويتيح لوكلاء الذكاء الاصطناعي والنماذج العمل عليه.',
          },
          {
            type: 'plain-terms',
            text: 'تحتفظ بملفات نصية عادية على قرصك، وتتصفحها وتحررها في تطبيق سريع، وتتتبع التغييرات عبر Git، ويمكنك إن شئت توجيه وكيل ذكاء اصطناعي أو نموذج إلى المخزن.',
          },
        ],
        items: [
          'الصيانة: حُدّث المستودع آخر مرة في 24 أكتوبر 2026، لذلك لا ينطبق تحذير المشروع المتوقف.',
          'قنوات الإصدار: نسخة مستقرة تُرقّى يدويًا (2026.10.13) ونسخ ألفا تُنشر مع كل دفعة إلى الفرع الرئيسي.',
          'التكلفة: مجاني ومفتوح المصدر بترخيص AGPL-3.0-or-later ودون حساب؛ ويصفه الموقع بأنه مجاني دائمًا.',
          'الذكاء الاصطناعي: لا نموذج مضمّنًا؛ تربط بنفسك وكلاء مثل Claude Code وCodex ومزوّدين مثل Ollama أو واجهات برمجة مستضافة.',
          'الجهة المطورة: Luca مؤسس Refactoring؛ ويذكر ملف README أدوات داعمة مثل Codacy وCircleCI.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى الموقع والوثائق ومستودع GitHub، وقد جرى الاطلاع عليها في 24 أكتوبر 2026. لم تثبّت PromptQuorum التطبيق ولم تقِس أداءه، لذلك لا يُقيَّم هنا السرعة ولا الاستقرار ولا نتائج الذكاء الاصطناعي.',
          },
        ],
      },
      overview: {
        id: 'what-is-tolaria',
        title: 'ما هو Tolaria؟',
        content: [
          '**Tolaria تطبيق سطح مكتب لإدارة قواعد المعرفة بصيغة Markdown: المخزن مجلد عادي من ملفات Markdown، ويضيف التطبيق محررًا وروابط بين الملاحظات وعروضًا محفوظة وعميل Git.** يصفه المستودع بأنه «desktop app to manage markdown knowledge bases» ويصفه الموقع بأنه «a second brain for the AI era»؛ ويقول مؤلفه إنه يستخدمه لمخزن يضم أكثر من 10,000 ملاحظة.',
          'يذكر ملف README ثلاثة استخدامات: إدارة «دماغ ثانٍ» أو قاعدة معرفة شخصية، وتنظيم وثائق الشركة بوصفها سياقًا للذكاء الاصطناعي، وحفظ ذاكرة مساعدي الذكاء الاصطناعي وإجراءاتهم. التطبيق مبني بـ Tauri وReact وTypeScript.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**Tolaria متاح للتنزيل مجانًا لأنظمة macOS وWindows وLinux، مع حزمة Homebrew cask على macOS؛ أما iPhone وiPad فهما في نسخة تجريبية عبر TestFlight.**',
        ],
        columns: [
          'الخيار',
          'مصدر الحصول عليه',
        ],
        rows: [
          {
            'الخيار': 'سطح المكتب',
            'مصدر الحصول عليه': '[صفحة التنزيل](https://tolaria.md/download/) لأنظمة macOS وWindows وLinux',
          },
          {
            'الخيار': 'Homebrew',
            'مصدر الحصول عليه': 'brew install --cask tolaria (على macOS)',
          },
          {
            'الخيار': 'iPhone وiPad',
            'مصدر الحصول عليه': 'نسخة تجريبية عبر TestFlight؛ يُطلب الوصول في Discord الخاص بالمشروع',
          },
          {
            'الخيار': 'الموقع',
            'مصدر الحصول عليه': '[tolaria.md](https://tolaria.md)',
          },
          {
            'الخيار': 'سياسة الخصوصية',
            'مصدر الحصول عليه': 'لم نجد سياسة مستقلة؛ راجع [مذكرة تصميم القياس عن بُعد](https://github.com/refactoringhq/tolaria/blob/main/docs/adr/0016-sentry-posthog-telemetry.md)',
          },
          {
            'الخيار': 'الشيفرة المصدرية',
            'مصدر الحصول عليه': '[GitHub: refactoringhq/tolaria](https://github.com/refactoringhq/tolaria)، AGPL-3.0-or-later',
          },
        ],
        note: 'الإصدار الذي رُوجع: المستقر 2026.10.13 الصادر في 13 أكتوبر 2026 ([صفحة الإصدار](https://github.com/refactoringhq/tolaria/releases/tag/v2026-10-13))؛ وكانت نسخ ألفا تُنشر في اليوم نفسه. البرنامج مجاني ولا يصف الموقع أي باقة مدفوعة.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**ينشر Tolaria نسخًا لأنظمة macOS وWindows وLinux؛ ولا تذكر المصادر أي متطلبات للذاكرة أو القرص أو وحدة الرسوميات.**',
        ],
        columns: [
          'البند',
          'ما تقوله المصادر',
        ],
        rows: [
          {
            'البند': 'أنظمة التشغيل',
            'ما تقوله المصادر': 'macOS (Apple silicon وIntel) وWindows x64 وLinux x86_64؛ macOS هو الهدف الرئيسي، أما Windows وLinux فموصوفان بـ «supported, early»',
          },
          {
            'البند': 'ملفات التثبيت',
            'ما تقوله المصادر': 'ملف dmg. لنظام macOS وملف exe. للتثبيت على Windows وملفات AppImage وdeb وRPM على Linux',
          },
          {
            'البند': 'العتاد',
            'ما تقوله المصادر': 'لا حد أدنى مذكور؛ يجري استدلال النموذج في الوكيل أو المزوّد الذي تربطه، لا في Tolaria نفسه',
          },
          {
            'البند': 'Git',
            'ما تقوله المصادر': 'اختياري: يُفتح المجلد العادي كمخزن، ويضيف Git السجل والالتزامات وpull وpush',
          },
          {
            'البند': 'الإنترنت',
            'ما تقوله المصادر': 'يقول README إن المخزن يعمل دون اتصال بالكامل؛ أما مستودعات Git البعيدة والمزوّدون المستضافون فيحتاجون إلى اتصال',
          },
        ],
        note: 'لا تذكر صفحة التنزيل حدًا أدنى لإصدارات أنظمة التشغيل. يقول README إن مثبّتات Windows موقّعة بتوقيع Authenticode، بينما تذكر صفحة التثبيت أن هذا التوقيع سيُضاف بعد الحصول على الشهادة؛ وقد تحتاج الأجهزة المُدارة من الشركات إلى موافقة قسم تقنية المعلومات أولًا.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع الخطوات صفحة التثبيت الخاصة بالمشروع؛ ولم تنفّذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'التثبيت',
            whyItMatters: 'نزّل النسخة المستقرة لنظامك أو استخدم حزمة Homebrew cask على macOS.',
          },
          {
            title: 'فتح مخزن',
            whyItMatters: 'استنسخ مخزن Getting Started لجولة موجّهة، أو افتح مجلدًا موجودًا من ملفات Markdown.',
          },
          {
            title: 'استخدام لوحة الأوامر',
            whyItMatters: 'اضغط Cmd+K على macOS أو Ctrl+K على Windows وLinux للوصول إلى الأوامر.',
          },
          {
            title: 'ربط الذكاء الاصطناعي (اختياري)',
            whyItMatters: 'أضف مزوّد نماذج من الإعدادات أو ثبّت واجهة أوامر لوكيل برمجة مدعوم ليكتشفه Tolaria.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل ما يلي مصدره موقع المشروع أو وثائقه أو ملف README؛ ولم يُختبر أي منه بشكل مستقل.**',
        ],
        items: [
          '**مخزن Markdown والعلاقات.** الملاحظات ملفات Markdown مع YAML frontmatter؛ والأنواع وسيلة تنقّل لا مخططات مفروضة، وترتبط الملاحظات عبر wikilinks مع الإكمال التلقائي.',
          '**المحرر.** محرر قائم على الكتل مع أوامر الشرطة المائلة ووضع Markdown الخام وألواح الرسم ومعاينات الوسائط والتنقل في الجداول؛ وتتضمن الوثائق أيضًا أدلة عن الجداول الحسابية وكتل HTML.',
          '**عميل Git.** التزام وpush وpull وسجل للمخزن كله ولكل ملاحظة، وفروقات (diffs) ومعالجة التعارضات مع أي مستودع بعيد تربطه.',
          '**عروض مخصصة وعدة مخازن.** عروض محفوظة وأقسام في الشريط الجانبي، إضافة إلى خيار تحميل عدة مخازن في رسم بياني واحد.',
          '**وكلاء الذكاء الاصطناعي والنماذج.** تبثّ لوحة الذكاء الاصطناعي وكلاء برمجة بواجهة الأوامر تذكرهم الوثائق: Claude Code وCodex وGitHub Copilot وOpenCode وPi وAntigravity CLI وKiro وHermes Agent، وتجيب في وضع المحادثة انطلاقًا من سياق الملاحظات عبر Ollama أو LM Studio أو OpenAI أو Anthropic أو Gemini أو OpenRouter أو أي نقطة نهاية متوافقة مع OpenAI. كما يوفّر Tolaria خادم MCP يمكنه البحث في الملاحظات وقراءتها وإنشاءها وتحديثها.',
        ],
        note: 'يحتفظ كل وكيل بتسجيل دخوله وأدواته وفوترته؛ أما Tolaria فيكتشفهم ويبثّ مخرجاتهم فقط.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**يصف المشروع Tolaria بأنه «files-first» و«offline-first»: تعيش الملاحظات في مجلد تختاره، ولا يوجد حساب، ويقول README إن المخزن يعمل دون اتصال بالكامل.** المزامنة عبر Git مع أي مستودع بعيد تُعدّه، و«دون أي اعتماد على خوادم Tolaria» بحسب README.',
          'الذكاء الاصطناعي هو الموضع الذي قد تغادر فيه البيانات الجهاز. يعمل وكلاء البرمجة على حاسوبك بمصادقتهم الخاصة، ويتلقى مزوّد النماذج المستضاف سياق الملاحظات الذي ترسله إليه، بينما تُبقي Ollama أو LM Studio هذا السياق محليًا. لا تُخزَّن مفاتيح واجهات البرمجة للمزوّدين في إعدادات المخزن؛ بل تحفظها على الجهاز أو تقرؤها من متغير بيئة. تقارير الأعطال اختيارية عبر مربع حوار للموافقة عند أول تشغيل (تتبّعات الأخطاء وإصدار التطبيق ونظام التشغيل والمعمارية، دون محتوى المخزن أو مسارات الملفات بحسب نص المربع)، ويتضمن الكود المصدري كذلك مفتاحًا منفصلًا للتحليلات في الإعدادات.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات من المشروع وملاحظات من شيفرته المصدرية، لا نتائج تدقيق؛ ولم تفحص PromptQuorum حركة الشبكة. لم نعثر على صفحة لسياسة الخصوصية في الموقع أو في صفحة التنزيل؛ وأقرب وثيقة هي [مذكرة تصميم القياس عن بُعد](https://github.com/refactoringhq/tolaria/blob/main/docs/adr/0016-sentry-posthog-telemetry.md) في المستودع.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**الكتّاب والباحثون** الذين يريدون أرشيف Markdown طويل الأمد يعمل مع أدوات النصوص العادية وسجل Git.',
          '**من يستخدمون وكلاء البرمجة بالذكاء الاصطناعي على ملاحظاتهم** ويريدون أن يظهر كل تغيير على شكل فرق Git قابل للمراجعة.',
          '**المطورون والفرق الذين يحتفظون بالوثائق سياقًا للذكاء الاصطناعي** ويتقنون Git ويريدون ملفات قابلة لإدارة الإصدارات.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الاستخدام الفعلي.** لم تثبّت PromptQuorum تطبيق Tolaria، لذلك لم تُختبر سرعة المحرر ولا استقراره ولا قول المؤلف عن مخزن يضم أكثر من 10,000 ملاحظة.',
          '**جودة الذكاء الاصطناعي وكلفته.** الوكلاء والنماذج أدوات من جهات خارجية؛ ولم تُفحص نتائجها ولا تكاليفها ولا ما ترسله إلى مزوّديها.',
          '**نضج المنصات.** يصف المشروع دعم Windows وLinux بأنه في مرحلة مبكرة، وتختلف المصادر بشأن توقيع Windows، ولا يُذكر توثيق macOS (notarization).',
          '**النسخة التجريبية للجوال.** لم يُجرَّب تطبيق iPhone وiPad ولا آلية الوصول عبر TestFlight، ولا تصف الوثائق ميزاته إلا بإيجاز.',
          '**الخصوصية خارج الشيفرة.** لا توجد سياسة خصوصية منشورة، وما يُقال عن الموافقة وإزالة المسارات مصدره المستودع لا تدقيق مستقل.',
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
            'السعر / الرخصة': 'نواة مجانية ومزامنة مدفوعة / AGPL-3.0',
            'الفرق الأبرز': 'مراجع على مستوى الكتلة وتعاون مدمج مع وكلاء الذكاء الاصطناعي؛ أما Tolaria فيرتكز على ملفات Markdown العادية وGit',
          },
          {
            'التطبيق': '[Blinko](/ar/power-local-llm/blinko-review)',
            'المنصات': 'تطبيق ويب مستضاف ذاتيًا (Docker)',
            'السعر / الرخصة': 'مجاني / GPL-3.0',
            'الفرق الأبرز': 'ملاحظات مستضافة ذاتيًا مع بحث RAG عبر مزوّد LLM مضبوط؛ أما Tolaria فتطبيق سطح مكتب على ملفات محلية',
          },
        ],
        note: 'التطبيقان موجودان في دليل PromptQuorum؛ تأكد من السعر والترخيص والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكنني فتح مجلد ملفات Markdown أملكه بالفعل؟',
            a: 'نعم. يذكر دليل التثبيت أنه يمكنك فتح مجلد موجود من ملفات Markdown كمخزن. وإذا لم يكن المجلد مستودع Git، فلا يهيّئ Tolaria مستودع Git إلا بطلبك، ويتجنب المجلدات الواسعة مثل سطح المكتب والمستندات والتنزيلات ما لم تكن مجلدات مخصصة بوضوح للمخزن.',
          },
          {
            q: 'ما الفرق بين Stable وAlpha؟',
            a: 'تُرقّى Stable يدويًا وهي القناة التي تشير إليها صفحة التنزيل؛ أما Alpha فتتبع كل دفعة إلى الفرع الرئيسي، فتصلها الميزات أبكر لكنها قد تكون أقل استقرارًا. نُشرت عدة نسخ ألفا خلال ساعات في 24 أكتوبر 2026، وتنصح الوثائق بإجراء commit أو push لتغييرات المخزن قبل تبديل القناة.',
          },
          {
            q: 'هل يستطيع وكيل ذكاء اصطناعي تغيير ملاحظاتي دون أن يسأل؟',
            a: 'يستطيع وكلاء البرمجة تعديل ملفات المخزن. وتصف الوثائق وضع «Vault Safe» المقتصر على أدوات الملفات والبحث والتحرير، ووضع «Power User» الذي قد يتيح أوامر shell محلية محصورة في المخزن للوكلاء الذين يدعمونها. أما المحادثة مع النماذج المباشرة فلا تحصل على أدوات كتابة ولا على shell، ويعرض مخزن Git التغييرات على شكل diffs يمكنك مراجعتها والتراجع عنها.',
          },
          {
            q: 'هل يوجد تطبيق للجوال؟',
            a: 'تطبيق iPhone وiPad في مرحلة تجريبية عبر TestFlight، ويُطلب الوصول في مجتمع Discord الخاص بالمشروع. وبحسب الوثائق فهو يقدّم محرر WYSIWYG والتزامات Git تلقائية ومزامنة عبر iCloud أو الملفات، بينما لوحة الذكاء الاصطناعي وبعض الميزات المتقدمة متاحة حتى الآن على سطح المكتب فقط.',
          },
          {
            q: 'ما ترخيص Tolaria، وهل يمكنني إعادة استخدام الاسم؟',
            a: 'يذكر الموقع AGPL-3.0-or-later وتُبلغ واجهة GitHub البرمجية عن AGPL-3.0. ويضيف الموقع أن اسم Tolaria وشعاره تغطيهما سياسة علامة تجارية؛ راجعها قبل إعادة استخدام الهوية البصرية. وهذا ليس استشارة قانونية.',
          },
          {
            q: 'من يقف وراء Tolaria؟',
            a: 'بحسب الموقع أنشأه Luca مؤسس Refactoring بعد سنوات من الكتابة وتدوين الملاحظات، ويقول README إنه بناه لنفسه ويشاركه كمصدر مفتوح. ويسمّي README كلًّا من Codacy وCodeScene وCircleCI وUnblocked أدواتٍ تدعم المشروع؛ ولا تُوصف شركة ولا باقة مدفوعة.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'Tolaria طريقة مجانية ومفتوحة المصدر وبتطوير نشط للاحتفاظ بملاحظات Markdown كملفات عادية تحت Git وتسليمها إلى وكلاء الذكاء الاصطناعي أو النماذج التي تستخدمها أصلًا. في المقابل، توصف نسخ Windows وLinux بأنها مبكرة، ويقدّم المشروع مطوّر واحد مسمّى، ولا توجد سياسة خصوصية منشورة، ولم يمكن التحقق هنا من أي من ادعاءاته عن السرعة أو الذكاء الاصطناعي. يناسب من يحب الملفات العادية وGit ويريد مساعدة الذكاء الاصطناعي مع فروقات قابلة للمراجعة؛ ومن يحتاج سياسة خصوصية موثقة أو تطبيق جوال ناضجًا أو ذكاءً اصطناعيًا مدمجًا فعليه أن يجرّبه أولًا أو يبحث عن بديل.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Tolaria](https://tolaria.md) — نظرة عامة على الميزات ومسارات الذكاء الاصطناعي والترخيص والروابط، جرى الاطلاع عليه في 24 أكتوبر 2026.',
          '[صفحة تنزيل Tolaria](https://tolaria.md/download/) — الإصدار المستقر 2026.10.13 والمنصات وملاحظة توقيع Windows، جرى الاطلاع عليها في 24 أكتوبر 2026.',
          '[Tolaria على GitHub](https://github.com/refactoringhq/tolaria) — README والوثائق وقنوات الإصدار ومذكرة تصميم القياس عن بُعد؛ آخر commit في 24 أكتوبر 2026.',
          '[الإصدار المستقر v2026-10-13](https://github.com/refactoringhq/tolaria/releases/tag/v2026-10-13) — ملفات التثبيت وتاريخ الإصدار، جرى الاطلاع عليها في 24 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة SiYuan](/ar/power-local-llm/siyuan-review) — قاعدة معرفة قائمة على الكتل تضع الخصوصية أولًا مع ذكاء اصطناعي مدمج.',
          '[مراجعة Blinko](/ar/power-local-llm/blinko-review) — ملاحظات ذكاء اصطناعي مستضافة ذاتيًا مع بحث RAG.',
          '[مقارنة أدوات المعرفة والاسترجاع المحلية](/ar/power-local-llm/local-llm-knowledge-retrieval-compared) — مقارنة الفئة التي تنتمي إليها هذه المراجعة.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/tolaria-review-hero-zh.webp',
    title: 'Tolaria 评测：支持 Git 和 AI 智能体的开源 Markdown 笔记应用',
    seoTitle: 'Tolaria 评测：支持 Git 与 AI 的 Markdown 笔记',
    intro: 'Tolaria 是 Refactoring 创始人 Luca 开发的免费开源桌面应用，把 Markdown 笔记作为普通文件保存在由 Git 管理的 vault 中，并可交给 AI 编程智能体或本地、云端模型处理。本评测依据项目的[官网](https://tolaria.md)、文档和 GitHub 仓库，核对于 2026年10月24日；PromptQuorum 没有对该应用做实际测试。',
    metaDescription: 'Tolaria 评测：免费开源桌面应用，将 Markdown 笔记作为普通文件存入 Git 管理的 vault，并接入 AI 智能体和模型。我们尚未实测。',
    twitterDescription: 'Tolaria 评测：普通 Markdown 文件、内置 Git 客户端，再叠加 AI 智能体或本地模型。免费开源；来源已确认和未确认的内容。',
    audience: '想要带 AI 辅助的本地优先 Markdown 笔记应用的笔记用户、研究者和开发者，他们需要了解来源确认了什么、项目只是声称了什么，以及费用如何。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'tolaria 评测',
    targetKeywords: [
      'tolaria 评测',
      'tolaria markdown 笔记应用',
      '支持 git 的开源 markdown 笔记应用',
      '本地 markdown 知识库',
      '支持 ai 编程智能体的笔记应用',
      'markdown vault git 同步 桌面',
      'tolaria ai 笔记',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Tolaria（稳定版 2026.10.13）是一款免费开源的桌面端 Markdown 知识库应用，把笔记保存为普通文件，并连接你自选的 AI 智能体和模型。** 它不自带 AI 模型，也不需要账号。本文所有说法均来自项目的官网、文档和仓库。',
    quickAnswerTop: {
      zh: {
        question: 'Tolaria 会把笔记保留在我自己的电脑上吗？',
        answer: '据项目介绍，会：笔记是磁盘文件夹中的普通 Markdown 文件，没有数据库、专有格式和账号。同步通过 Git 连接你自选的远程仓库完成。AI 功能是可选的，只会把笔记内容发送给你配置的智能体或模型提供方；崩溃报告需通过同意对话框主动选择开启。',
        bullets: [
          '笔记是带 YAML frontmatter 的 Markdown 文件，任何编辑器都能打开。',
          '内置 Git 客户端支持提交、历史记录、pull 和 push。',
          'AI 面板可配合编程智能体的命令行工具，以及本地或托管模型使用。',
          '桌面版支持 macOS、Windows 和 Linux；iPhone 和 iPad 版处于测试阶段。',
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
        label: 'Tolaria 是什么？',
        anchor: 'what-is-tolaria',
      },
      {
        label: '获取方式',
        anchor: 'get-it',
      },
      {
        label: '运行要求',
        anchor: 'requirements',
      },
      {
        label: '上手步骤',
        anchor: 'getting-started',
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
            text: 'Tolaria 是一款开源桌面笔记应用，把一个 Markdown 文件夹当作由 Git 管理的 vault，并让 AI 智能体和模型在其上工作。',
          },
          {
            type: 'plain-terms',
            text: '你在磁盘上保留普通文本文件，用一个快速的应用浏览和编辑，用 Git 跟踪变更，需要时再让 AI 智能体或模型接入这个 vault。',
          },
        ],
        items: [
          '维护情况：仓库最近一次更新在 2026年10月24日，因此不触发停更警告。',
          '发布渠道：手动晋升的稳定版（2026.10.13），以及每次推送到主分支就发布的 alpha 版。',
          '费用：免费开源，采用 AGPL-3.0-or-later，无需账号；官网称其永久免费。',
          'AI：不含内置模型；由你自行接入 Claude Code、Codex 等智能体，以及 Ollama 或托管 API 等提供方。',
          '开发者：Refactoring 创始人 Luca；README 列出了 Codacy、CircleCI 等工具赞助方。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测依据官网、文档和 GitHub 仓库，核对于 2026年10月24日。PromptQuorum 没有安装或测量该应用，因此不评估速度、稳定性和 AI 结果。',
          },
        ],
      },
      overview: {
        id: 'what-is-tolaria',
        title: 'Tolaria 是什么？',
        content: [
          '**Tolaria 是一款管理 Markdown 知识库的桌面应用：vault 就是一个装着 Markdown 文件的普通文件夹，应用在其上增加编辑器、笔记间链接、已保存视图和 Git 客户端。** 仓库将其描述为“desktop app to manage markdown knowledge bases”，官网则称其为“a second brain for the AI era”；作者表示自己用它管理一个超过 10,000 篇笔记的 vault。',
          'README 列出三种用途：运营第二大脑或个人知识库，把公司文档整理成 AI 的上下文，以及存放 AI 助手的记忆和流程。应用基于 Tauri、React 和 TypeScript 构建。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Tolaria 可免费下载，支持 macOS、Windows 和 Linux，macOS 上另有 Homebrew cask；iPhone 和 iPad 版处于 TestFlight 测试阶段。**',
        ],
        columns: [
          '选项',
          '获取方式',
        ],
        rows: [
          {
            '选项': '桌面版',
            '获取方式': '适用于 macOS、Windows 和 Linux 的[下载页](https://tolaria.md/download/)',
          },
          {
            '选项': 'Homebrew',
            '获取方式': 'brew install --cask tolaria（macOS）',
          },
          {
            '选项': 'iPhone 和 iPad',
            '获取方式': '通过 TestFlight 测试；需在项目的 Discord 申请访问',
          },
          {
            '选项': '官网',
            '获取方式': '[tolaria.md](https://tolaria.md)',
          },
          {
            '选项': '隐私政策',
            '获取方式': '未找到独立的政策；请参阅[遥测设计说明](https://github.com/refactoringhq/tolaria/blob/main/docs/adr/0016-sentry-posthog-telemetry.md)',
          },
          {
            '选项': '源代码',
            '获取方式': '[GitHub：refactoringhq/tolaria](https://github.com/refactoringhq/tolaria)，AGPL-3.0-or-later',
          },
        ],
        note: '核对的版本：稳定版 2026.10.13，发布于 2026年10月13日（[发布页面](https://github.com/refactoringhq/tolaria/releases/tag/v2026-10-13)）；当天也在发布 alpha 版。软件免费，官网未描述任何付费档。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: [
          '**Tolaria 提供 macOS、Windows 和 Linux 版本；来源未给出内存、磁盘或 GPU 方面的要求。**',
        ],
        columns: [
          '项目',
          '来源说明',
        ],
        rows: [
          {
            '项目': '操作系统',
            '来源说明': 'macOS（Apple 芯片和 Intel）、Windows x64、Linux x86_64；macOS 是主要目标，Windows 和 Linux 被称为“supported, early”',
          },
          {
            '项目': '安装包',
            '来源说明': 'macOS 的 .dmg、Windows 的安装 .exe，以及 Linux 的 AppImage、deb 和 RPM 文件',
          },
          {
            '项目': '硬件',
            '来源说明': '未给出最低要求；模型推理在你接入的智能体或提供方中进行，而不是在 Tolaria 内部',
          },
          {
            '项目': 'Git',
            '来源说明': '可选：普通文件夹即可作为 vault 打开，Git 增加历史、提交、pull 和 push',
          },
          {
            '项目': '互联网',
            '来源说明': 'README 称 vault 可完全离线使用；Git 远程仓库和托管模型提供方需要联网',
          },
        ],
        note: '下载页没有列出最低操作系统版本。README 称 Windows 安装包已做 Authenticode 签名，而安装页说该签名将在证书办理完成后添加；企业管理的设备可能需要先经 IT 部门批准。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤依据项目的安装页；PromptQuorum 没有实际执行过。**',
        ],
        numberedItems: [
          {
            title: '安装',
            whyItMatters: '下载适合你系统的稳定版，或在 macOS 上使用 Homebrew cask。',
          },
          {
            title: '打开 vault',
            whyItMatters: '克隆 Getting Started vault 进行引导式浏览，或打开已有的 Markdown 文件夹。',
          },
          {
            title: '使用命令面板',
            whyItMatters: '在 macOS 上按 Cmd+K，在 Windows 和 Linux 上按 Ctrl+K 调出命令。',
          },
          {
            title: '接入 AI（可选）',
            whyItMatters: '在设置中添加模型提供方，或安装受支持的编程智能体命令行工具，Tolaria 随后会检测到它。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: [
          '**以下各项均来自项目的官网、文档或 README，均未经独立测试。**',
        ],
        items: [
          '**Markdown vault 与关联。** 笔记是带 YAML frontmatter 的 Markdown 文件；类型是导航视角而非强制的模式，笔记之间通过带自动补全的 wikilink 相互链接。',
          '**编辑器。** 基于块的编辑器，支持斜杠命令、原始 Markdown 模式、白板、媒体预览和表格导航；文档中还有电子表格和 HTML 块的使用指南。',
          '**Git 客户端。** 可对你连接的任意远程仓库执行提交、push、pull，查看整个 vault 和单篇笔记的历史、差异，并处理冲突。',
          '**自定义视图与多 vault。** 已保存视图和侧边栏分区，另有把多个 vault 加载进同一个图谱的选项。',
          '**AI 智能体与模型。** AI 面板以流式方式呈现命令行编程智能体（文档列出 Claude Code、Codex、GitHub Copilot、OpenCode、Pi、Antigravity CLI、Kiro 和 Hermes Agent），并通过 Ollama、LM Studio、OpenAI、Anthropic、Gemini、OpenRouter 或任意兼容 OpenAI 的端点，以聊天模式基于笔记上下文作答。Tolaria 还提供 MCP 服务器，可搜索、读取、创建和更新笔记。',
        ],
        note: '智能体保留各自的登录、工具和计费；Tolaria 只负责检测它们并呈现其输出。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**项目把 Tolaria 描述为“files-first”和“offline-first”：笔记存放在你选定的文件夹里，没有账号，README 称 vault 可完全离线使用。** 同步是对你设置的任意远程仓库使用 Git，README 称“不依赖 Tolaria 的服务器”。',
          '数据可能离开本机的环节在 AI。编程智能体在你的电脑上以各自的认证运行；托管模型提供方会收到你发送的笔记内容，而 Ollama 或 LM Studio 能把这些内容留在本地。提供方的 API 密钥不会保存在 vault 设置中，你可以保存在本设备上，或从环境变量读取。崩溃报告通过首次启动时的同意对话框选择开启（堆栈跟踪、应用版本、操作系统和架构；按对话框文字，不含 vault 内容或文件路径），源代码中还有设置里一个独立的使用分析开关。',
        ],
        callouts: [
          {
            type: 'note',
            text: '以上是项目的声明和对其源代码的观察，不是审计结果；PromptQuorum 没有检查网络流量。官网和下载页上都没有找到隐私政策页面；最接近的文档是仓库中的[遥测设计说明](https://github.com/refactoringhq/tolaria/blob/main/docs/adr/0016-sentry-posthog-telemetry.md)。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**写作者和研究者**：想要一个能用普通文本工具和 Git 历史长期维护的 Markdown 档案。',
          '**在笔记上使用 AI 编程智能体的人**：希望每次改动都以可审阅的 Git 差异呈现。',
          '**把文档当作 AI 上下文维护的开发者和团队**：熟悉 Git，想要可做版本管理的文件。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**实际使用。** PromptQuorum 没有安装 Tolaria，因此编辑器速度、稳定性，以及作者所说管理超过 10,000 篇笔记的 vault，均未经测试。',
          '**AI 质量与费用。** 智能体和模型是第三方工具；它们的结果、费用以及向各自提供方发送了什么，均未检查。',
          '**平台成熟度。** 项目称 Windows 和 Linux 支持尚处早期，来源对 Windows 签名说法不一，也没有提到 macOS 公证。',
          '**移动端测试版。** 没有试用 iPhone 和 iPad 应用及其 TestFlight 访问流程，文档对其功能也只作了简要说明。',
          '**代码之外的隐私。** 没有发布隐私政策，关于同意机制和路径清除的说法来自仓库，而非审计。',
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
            '价格 / 许可证': '核心免费，同步付费 / AGPL-3.0',
            '主要区别': '块级引用并内置 AI 智能体协作；Tolaria 以普通 Markdown 文件和 Git 为中心',
          },
          {
            '应用': '[Blinko](/zh/power-local-llm/blinko-review)',
            '平台': '自托管 Web 应用（Docker）',
            '价格 / 许可证': '免费 / GPL-3.0',
            '主要区别': '自托管笔记，通过已配置的 LLM 提供方提供 RAG 搜索；Tolaria 是基于本地文件的桌面应用',
          },
        ],
        note: '两款应用都收录在 PromptQuorum 目录中；请在各自的条目中确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '我能打开已有的 Markdown 文件夹吗？',
            a: '可以。安装指南说，可以把已有的 Markdown 文件夹作为 vault 打开。如果该文件夹不是 Git 仓库，Tolaria 只会在你要求时初始化 Git，并且避开桌面、文档、下载这类范围过宽的文件夹，除非它们明确是专用的 vault 文件夹。',
          },
          {
            q: 'Stable 和 Alpha 有什么区别？',
            a: 'Stable 由手动晋升，是下载页指向的渠道；Alpha 跟随主分支的每次推送，功能到得更早，但可能更不稳定。2026年10月24日数小时内就发布了多个 alpha 版，文档建议在切换渠道前先提交或 push vault 的改动。',
          },
          {
            q: 'AI 智能体会不经询问就改动我的笔记吗？',
            a: '编程智能体可以编辑 vault 中的文件。文档描述了仅限文件、搜索和编辑工具的“Vault Safe”模式，以及对支持的智能体可允许限定在 vault 内的本地 shell 命令的“Power User”模式。与直接模型的聊天没有写入工具，也没有 shell 访问权限，而由 Git 管理的 vault 会把改动显示为可审阅、可回滚的差异。',
          },
          {
            q: '有手机应用吗？',
            a: 'iPhone 和 iPad 应用正通过 TestFlight 测试，需在项目的 Discord 社区申请访问。据文档，它提供所见即所得编辑器、Git 自动提交，以及通过 iCloud 或“文件”同步，而 AI 面板和部分高级功能目前仅限桌面版。',
          },
          {
            q: 'Tolaria 采用什么许可证？我能复用名称吗？',
            a: '官网写的是 AGPL-3.0-or-later，GitHub API 显示为 AGPL-3.0。官网还说明 Tolaria 的名称和标志受商标政策约束；复用品牌前请先查看。这不构成法律意见。',
          },
          {
            q: 'Tolaria 是谁做的？',
            a: '据官网，它由 Refactoring 创始人 Luca 在多年写作和记笔记之后创建；README 称他为自己而做，并以开源方式分享。README 列出 Codacy、CodeScene、CircleCI 和 Unblocked 为支持项目的工具；没有描述任何公司或付费方案。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Tolaria 是一种免费、开源且开发活跃的方式：把 Markdown 笔记作为普通文件放在 Git 之下，并交给你已在使用的 AI 智能体或模型。另一方面，Windows 和 Linux 版本被描述为早期阶段，项目由一位具名开发者推出，没有发布隐私政策，其速度和 AI 方面的说法本文都无法核实。它适合已经喜欢普通文件和 Git、并希望获得带可审阅差异的 AI 辅助的人；需要有文档的隐私政策、成熟的手机应用或内置 AI 的人，应先试用或另寻他选。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Tolaria 官网](https://tolaria.md) — 功能概览、AI 使用路径、许可证和链接，核对于 2026年10月24日。',
          '[Tolaria 下载页](https://tolaria.md/download/) — 稳定版 2026.10.13、支持平台和 Windows 签名说明，核对于 2026年10月24日。',
          '[GitHub 上的 Tolaria](https://github.com/refactoringhq/tolaria) — README、文档、发布渠道和遥测设计说明；最新提交于 2026年10月24日。',
          '[稳定版发布 v2026-10-13](https://github.com/refactoringhq/tolaria/releases/tag/v2026-10-13) — 安装包文件和发布日期，核对于 2026年10月24日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[SiYuan 评测](/zh/power-local-llm/siyuan-review) — 注重隐私、内置 AI 的块级知识库。',
          '[Blinko 评测](/zh/power-local-llm/blinko-review) — 带 RAG 搜索的自托管 AI 笔记。',
          '[本地知识与检索工具对比](/zh/power-local-llm/local-llm-knowledge-retrieval-compared) — 本评测所属类别的对比文章。',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/tolaria-review-hero-ko.webp',
    title: 'Tolaria 리뷰: Git과 AI 에이전트를 지원하는 오픈소스 Markdown 노트 앱',
    seoTitle: 'Tolaria 리뷰: Git·AI 지원 Markdown 노트 앱',
    intro: 'Tolaria는 Refactoring 창업자 Luca가 만든 무료 오픈소스 데스크톱 앱으로, Markdown 노트를 일반 파일로 Git이 관리하는 vault에 보관하고 AI 코딩 에이전트나 로컬·호스팅 모델에 넘길 수 있습니다. 이 리뷰는 프로젝트의 [웹사이트](https://tolaria.md), 문서, GitHub 저장소를 2026년 10월 24일에 확인한 내용을 바탕으로 하며, PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription: 'Tolaria 리뷰: Markdown 노트를 일반 파일로 Git vault에 보관하고 AI 에이전트와 모델을 연결하는 무료 오픈소스 데스크톱 앱입니다. 직접 테스트하지 않았습니다.',
    twitterDescription: 'Tolaria 리뷰: 일반 Markdown 파일, 내장 Git 클라이언트, 그 위의 AI 에이전트와 로컬 모델. 무료 오픈소스이며, 출처가 확인한 내용과 확인하지 못한 내용을 정리했습니다.',
    audience: 'AI 지원이 있는 로컬 우선 Markdown 노트 앱을 찾는 노트 사용자, 연구자, 개발자로서 출처가 확인한 내용, 프로젝트가 주장만 하는 내용, 비용을 알아야 하는 분들입니다.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'tolaria 리뷰',
    targetKeywords: [
      'tolaria 리뷰',
      'tolaria markdown 노트 앱',
      'git 지원 오픈소스 markdown 노트 앱',
      '로컬 markdown 지식 베이스',
      'ai 코딩 에이전트 지원 노트 앱',
      'markdown vault git 동기화 데스크톱',
      'tolaria ai 노트',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Tolaria(안정 버전 2026.10.13)는 노트를 일반 파일로 저장하고, 사용자가 고른 AI 에이전트와 모델에 연결하는 무료 오픈소스 데스크톱 Markdown 지식 베이스 앱입니다.** 자체 AI 모델은 포함되지 않으며 계정도 필요하지 않습니다. 아래 내용은 모두 프로젝트의 웹사이트, 문서, 저장소에서 가져왔습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Tolaria는 노트를 내 컴퓨터에만 보관합니까?',
        answer: '프로젝트에 따르면 그렇습니다. 노트는 디스크 폴더에 있는 일반 Markdown 파일이며 데이터베이스, 독점 형식, 계정이 없습니다. 동기화는 사용자가 고른 원격 저장소에 대한 Git으로 이루어집니다. AI 기능은 선택 사항이며 설정한 에이전트나 모델 제공업체에만 노트 내용을 보내고, 충돌 보고서는 동의 대화상자를 통한 옵트인 방식입니다.',
        bullets: [
          '노트는 YAML frontmatter가 있는 Markdown 파일이며 어떤 편집기로도 열 수 있습니다.',
          '내장 Git 클라이언트로 커밋, 기록, pull, push를 처리합니다.',
          'AI 패널은 코딩 에이전트 CLI와 로컬 또는 호스팅 모델에서 작동합니다.',
          '데스크톱 빌드는 macOS, Windows, Linux용이며 iPhone과 iPad는 베타입니다.',
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
        label: 'Tolaria란?',
        anchor: 'what-is-tolaria',
      },
      {
        label: '입수 방법',
        anchor: 'get-it',
      },
      {
        label: '요구 사항',
        anchor: 'requirements',
      },
      {
        label: '시작하는 방법',
        anchor: 'getting-started',
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
            text: 'Tolaria는 Markdown 파일 폴더를 Git이 관리하는 vault로 다루고 AI 에이전트와 모델이 그 위에서 작업하게 해 주는 오픈소스 데스크톱 노트 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '디스크에 일반 텍스트 파일을 두고 빠른 앱에서 탐색·편집하며, 변경은 Git으로 추적하고, 원하면 AI 에이전트나 모델을 vault에 연결합니다.',
          },
        ],
        items: [
          '유지보수: 저장소가 2026년 10월 24일에 마지막으로 업데이트되었으므로 방치 프로젝트 경고는 해당하지 않습니다.',
          '릴리스 채널: 수동으로 승격하는 안정 빌드(2026.10.13)와 메인 브랜치에 푸시할 때마다 공개되는 알파 빌드가 있습니다.',
          '비용: AGPL-3.0-or-later의 무료 오픈소스이며 계정이 필요 없고, 웹사이트는 영구 무료라고 밝힙니다.',
          'AI: 포함된 모델은 없으며, Claude Code·Codex 같은 에이전트와 Ollama나 호스팅 API 같은 제공업체를 사용자가 직접 연결합니다.',
          '개발자: Refactoring 창업자 Luca이며, README에는 Codacy, CircleCI 등 도구 후원사가 나와 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 웹사이트, 문서, GitHub 저장소를 2026년 10월 24일에 확인한 내용을 바탕으로 합니다. PromptQuorum은 앱을 설치하거나 측정하지 않았으므로 속도, 안정성, AI 결과는 평가하지 않습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-tolaria',
        title: 'Tolaria란?',
        content: [
          '**Tolaria는 Markdown 지식 베이스를 관리하는 데스크톱 앱입니다. vault는 Markdown 파일이 든 평범한 폴더이고, 앱은 그 위에 편집기, 노트 간 링크, 저장된 보기, Git 클라이언트를 더합니다.** 저장소는 이를 "desktop app to manage markdown knowledge bases", 웹사이트는 "a second brain for the AI era"라고 설명하며, 작성자는 노트 1만 건이 넘는 vault에 쓰고 있다고 밝힙니다.',
          'README는 세 가지 용도를 듭니다. 세컨드 브레인이나 개인 지식 관리, AI의 맥락으로 쓸 회사 문서 정리, AI 어시스턴트의 기억과 절차 보관입니다. 앱은 Tauri, React, TypeScript로 만들어졌습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Tolaria는 macOS, Windows, Linux용을 무료로 내려받을 수 있고 macOS에는 Homebrew cask도 있으며, iPhone과 iPad는 TestFlight 베타입니다.**',
        ],
        columns: [
          '옵션',
          '입수 방법',
        ],
        rows: [
          {
            '옵션': '데스크톱',
            '입수 방법': 'macOS, Windows, Linux용 [다운로드 페이지](https://tolaria.md/download/)',
          },
          {
            '옵션': 'Homebrew',
            '입수 방법': 'brew install --cask tolaria (macOS)',
          },
          {
            '옵션': 'iPhone·iPad',
            '입수 방법': 'TestFlight 베타이며 접근은 프로젝트 Discord에서 요청합니다',
          },
          {
            '옵션': '웹사이트',
            '입수 방법': '[tolaria.md](https://tolaria.md)',
          },
          {
            '옵션': '개인정보 처리방침',
            '입수 방법': '독립된 방침을 찾지 못했으며 [텔레메트리 설계 메모](https://github.com/refactoringhq/tolaria/blob/main/docs/adr/0016-sentry-posthog-telemetry.md) 참고',
          },
          {
            '옵션': '소스 코드',
            '입수 방법': '[GitHub: refactoringhq/tolaria](https://github.com/refactoringhq/tolaria), AGPL-3.0-or-later',
          },
        ],
        note: '확인한 버전: 안정 버전 2026.10.13, 2026년 10월 13일 릴리스([릴리스 페이지](https://github.com/refactoringhq/tolaria/releases/tag/v2026-10-13)). 같은 날에도 알파 빌드가 공개되고 있었습니다. 소프트웨어는 무료이며 웹사이트에는 유료 요금제가 나와 있지 않습니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: [
          '**Tolaria는 macOS, Windows, Linux용 빌드를 배포하며, 출처에는 RAM, 디스크, GPU 요구 사항이 나와 있지 않습니다.**',
        ],
        columns: [
          '항목',
          '출처의 설명',
        ],
        rows: [
          {
            '항목': '운영체제',
            '출처의 설명': 'macOS(Apple silicon과 Intel), Windows x64, Linux x86_64. macOS가 주요 대상이고 Windows와 Linux는 "supported, early"로 표기됩니다',
          },
          {
            '항목': '설치 파일',
            '출처의 설명': 'macOS용 .dmg, Windows용 설치 .exe, Linux용 AppImage, deb, RPM 파일',
          },
          {
            '항목': '하드웨어',
            '출처의 설명': '최소 사양이 명시되지 않았으며, 모델 추론은 연결한 에이전트나 제공업체에서 이루어지고 Tolaria 자체에서는 이루어지지 않습니다',
          },
          {
            '항목': 'Git',
            '출처의 설명': '선택 사항: 일반 폴더도 vault로 열 수 있고 Git이 기록, 커밋, pull, push를 더합니다',
          },
          {
            '항목': '인터넷',
            '출처의 설명': 'README는 vault가 완전히 오프라인으로 작동한다고 하며, Git 원격 저장소와 호스팅 모델 제공업체에는 연결이 필요합니다',
          },
        ],
        note: '다운로드 페이지에는 최소 운영체제 버전이 나와 있지 않습니다. README는 Windows 설치 파일이 Authenticode로 서명되었다고 하지만 설치 페이지는 인증서 준비 후 서명을 추가할 예정이라고 하며, 회사가 관리하는 기기에서는 먼저 IT 부서의 승인이 필요할 수 있습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**아래 단계는 프로젝트의 설치 페이지를 따른 것이며 PromptQuorum은 실행해 보지 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '설치',
            whyItMatters: '사용 중인 시스템용 안정 빌드를 내려받거나 macOS에서는 Homebrew cask를 사용합니다.',
          },
          {
            title: 'vault 열기',
            whyItMatters: '안내 투어용 Getting Started vault를 복제하거나 기존 Markdown 폴더를 엽니다.',
          },
          {
            title: '명령 팔레트 사용',
            whyItMatters: 'macOS에서는 Cmd+K, Windows와 Linux에서는 Ctrl+K로 명령을 실행합니다.',
          },
          {
            title: 'AI 연결(선택)',
            whyItMatters: '설정에서 모델 제공업체를 추가하거나 지원되는 코딩 에이전트 CLI를 설치하면 Tolaria가 이를 감지합니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 프로젝트의 웹사이트, 문서, README에서 가져온 것이며 독립적으로 테스트한 것은 없습니다.**',
        ],
        items: [
          '**Markdown vault와 관계.** 노트는 YAML frontmatter가 있는 Markdown 파일입니다. 유형은 강제 스키마가 아니라 탐색용 관점이며, 노트는 자동 완성이 되는 wikilink로 서로 연결됩니다.',
          '**편집기.** 슬래시 명령, 원본 Markdown 모드, 화이트보드, 미디어 미리보기, 표 탐색을 지원하는 블록 기반 편집기이며, 문서에는 스프레드시트와 HTML 블록 안내도 있습니다.',
          '**Git 클라이언트.** 연결한 모든 원격 저장소에 대해 커밋, push, pull, vault 전체와 노트별 기록, diff, 충돌 처리를 할 수 있습니다.',
          '**사용자 지정 보기와 다중 vault.** 저장된 보기와 사이드바 섹션, 그리고 여러 vault를 하나의 그래프로 불러오는 옵션이 있습니다.',
          '**AI 에이전트와 모델.** AI 패널은 문서가 Claude Code, Codex, GitHub Copilot, OpenCode, Pi, Antigravity CLI, Kiro, Hermes Agent로 나열한 CLI 코딩 에이전트의 출력을 스트리밍하고, Ollama, LM Studio, OpenAI, Anthropic, Gemini, OpenRouter 또는 OpenAI 호환 엔드포인트를 통해 노트 맥락을 바탕으로 채팅 모드로 답합니다. Tolaria는 노트를 검색·읽기·생성·갱신할 수 있는 MCP 서버도 제공합니다.',
        ],
        note: '에이전트는 자체 로그인, 도구, 과금을 유지하며 Tolaria는 이를 감지해 출력을 스트리밍할 뿐입니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**프로젝트는 Tolaria를 "files-first", "offline-first"라고 설명합니다. 노트는 사용자가 고른 폴더에 있고 계정이 없으며, README에 따르면 vault는 완전히 오프라인으로 작동합니다.** 동기화는 설정한 모든 원격 저장소에 대한 Git으로 이루어지며, README는 "Tolaria 서버에 대한 의존성이 없다"고 밝힙니다.',
          '데이터가 컴퓨터를 떠날 수 있는 부분은 AI입니다. 코딩 에이전트는 자체 인증으로 사용자의 컴퓨터에서 실행되고, 호스팅 모델 제공업체는 사용자가 보낸 노트 맥락을 받으며, Ollama나 LM Studio는 그 맥락을 로컬에 유지합니다. 제공업체의 API 키는 vault 설정에 저장되지 않으며 기기에 저장하거나 환경 변수에서 읽어 옵니다. 충돌 보고서는 첫 실행 시 동의 대화상자를 통한 옵트인이고(스택 트레이스, 앱 버전, 운영체제와 아키텍처이며 대화상자 문구상 vault 내용과 파일 경로는 포함되지 않음), 소스 코드에는 설정에 별도의 사용 분석 스위치도 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 프로젝트의 선언과 소스 코드에서 관찰한 내용이며 감사 결과가 아닙니다. PromptQuorum은 네트워크 트래픽을 검사하지 않았습니다. 웹사이트와 다운로드 페이지에서 개인정보 처리방침 페이지를 찾지 못했고, 가장 가까운 문서는 저장소의 [텔레메트리 설계 메모](https://github.com/refactoringhq/tolaria/blob/main/docs/adr/0016-sentry-posthog-telemetry.md)입니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**작가와 연구자**: 일반 텍스트 도구와 Git 기록으로 오래 쓸 수 있는 Markdown 아카이브를 원하는 분.',
          '**노트에 AI 코딩 에이전트를 쓰는 사람**: 모든 변경을 검토 가능한 Git diff로 보고 싶은 분.',
          '**문서를 AI 맥락으로 관리하는 개발자와 팀**: Git에 익숙하고 버전 관리가 되는 파일을 원하는 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**실제 사용.** PromptQuorum은 Tolaria를 설치하지 않았으므로 편집기 속도, 안정성, 작성자가 말한 노트 1만 건이 넘는 vault에서의 동작은 검증하지 못했습니다.',
          '**AI 품질과 비용.** 에이전트와 모델은 서드파티 도구이며, 그 결과와 비용, 각 제공업체로 보내는 내용은 확인하지 않았습니다.',
          '**플랫폼 완성도.** 프로젝트는 Windows와 Linux 지원을 초기 단계라고 하고, Windows 서명에 대해 출처의 설명이 엇갈리며, macOS 공증은 언급되지 않습니다.',
          '**모바일 베타.** iPhone·iPad 앱과 TestFlight 접근 절차는 사용해 보지 않았으며, 문서도 기능을 간략하게만 설명합니다.',
          '**코드 밖의 개인정보.** 공개된 개인정보 처리방침이 없고, 옵트인과 경로 제거에 관한 설명은 감사가 아니라 저장소에서 나온 것입니다.',
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
            '가격 / 라이선스': '핵심 무료, 동기화 유료 / AGPL-3.0',
            '핵심 차이점': '블록 단위 참조와 내장 AI 에이전트 협업. Tolaria는 일반 Markdown 파일과 Git 중심',
          },
          {
            '앱': '[Blinko](/ko/power-local-llm/blinko-review)',
            '플랫폼': '셀프 호스팅 웹 앱(Docker)',
            '가격 / 라이선스': '무료 / GPL-3.0',
            '핵심 차이점': '설정한 LLM 제공업체를 통한 RAG 검색이 있는 셀프 호스팅 노트. Tolaria는 로컬 파일 기반 데스크톱 앱',
          },
        ],
        note: '두 앱 모두 PromptQuorum 디렉터리에 있습니다. 현재 가격, 라이선스, 플랫폼은 각 앱의 항목에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '이미 가진 Markdown 폴더를 열 수 있습니까?',
            a: '예. 설치 안내에 따르면 기존 Markdown 폴더를 vault로 열 수 있습니다. 폴더가 Git 저장소가 아니면 Tolaria는 사용자가 요청할 때만 Git을 초기화하며, 바탕 화면, 문서, 다운로드처럼 범위가 넓은 폴더는 vault 전용임이 분명하지 않은 한 피합니다.',
          },
          {
            q: 'Stable과 Alpha의 차이는 무엇입니까?',
            a: 'Stable은 수동으로 승격되며 다운로드 페이지가 가리키는 채널입니다. Alpha는 메인 브랜치에 푸시할 때마다 따라가므로 기능이 더 일찍 들어오지만 덜 안정적일 수 있습니다. 2026년 10월 24일에는 몇 시간 안에 알파 빌드가 여러 번 공개되었고, 문서는 채널을 바꾸기 전에 vault 변경 사항을 커밋하거나 push하라고 권합니다.',
          },
          {
            q: 'AI 에이전트가 묻지 않고 노트를 바꿀 수 있습니까?',
            a: '코딩 에이전트는 vault의 파일을 편집할 수 있습니다. 문서는 파일·검색·편집 도구로 제한되는 "Vault Safe" 모드와, 지원하는 에이전트에 대해 vault로 범위가 제한된 로컬 셸 명령을 허용할 수 있는 "Power User" 모드를 설명합니다. 직접 모델과의 채팅에는 쓰기 도구도 셸 접근도 없으며, Git이 관리하는 vault는 변경 사항을 검토하고 되돌릴 수 있는 diff로 보여 줍니다.',
          },
          {
            q: '모바일 앱이 있습니까?',
            a: 'iPhone과 iPad용 앱이 TestFlight 베타로 제공되며 접근은 프로젝트의 Discord 커뮤니티에서 요청합니다. 문서에 따르면 WYSIWYG 편집기, Git 자동 커밋, iCloud 또는 파일을 통한 동기화를 제공하고, AI 패널과 일부 고급 기능은 아직 데스크톱 전용입니다.',
          },
          {
            q: 'Tolaria의 라이선스는 무엇이며 이름을 재사용해도 됩니까?',
            a: '웹사이트는 AGPL-3.0-or-later라고 하고 GitHub API는 AGPL-3.0으로 보고합니다. 웹사이트는 Tolaria의 이름과 로고가 상표 정책의 적용을 받는다고도 밝히므로 브랜드를 재사용하기 전에 확인하십시오. 이는 법률 자문이 아닙니다.',
          },
          {
            q: 'Tolaria는 누가 만들었습니까?',
            a: '웹사이트에 따르면 Refactoring 창업자 Luca가 오랜 글쓰기와 노트 작성 끝에 만들었고, README는 본인이 쓰려고 만들어 오픈소스로 공유한다고 밝힙니다. README는 Codacy, CodeScene, CircleCI, Unblocked를 프로젝트를 돕는 도구로 언급하며, 회사나 유료 요금제는 설명되어 있지 않습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'Tolaria는 Markdown 노트를 일반 파일로 Git 아래에 두고, 이미 쓰고 있는 AI 에이전트나 모델에 넘기는 무료 오픈소스이자 활발히 개발되는 방법입니다. 반면 Windows와 Linux 빌드는 초기 단계로 설명되고, 프로젝트는 이름이 밝혀진 한 명의 개발자가 제시하며, 개인정보 처리방침이 공개되어 있지 않고, 속도나 AI에 관한 주장은 여기서 확인할 수 없었습니다. 일반 파일과 Git을 좋아하고 검토 가능한 diff와 함께 AI의 도움을 원하는 분에게 맞으며, 문서화된 개인정보 처리방침, 성숙한 모바일 앱, 내장 AI가 필요한 분은 먼저 써 보거나 다른 선택지를 찾아보십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Tolaria 웹사이트](https://tolaria.md) — 기능 개요, AI 사용 경로, 라이선스와 링크. 2026년 10월 24일 확인.',
          '[Tolaria 다운로드 페이지](https://tolaria.md/download/) — 안정 버전 2026.10.13, 플랫폼, Windows 서명 관련 안내. 2026년 10월 24일 확인.',
          '[GitHub의 Tolaria](https://github.com/refactoringhq/tolaria) — README, 문서, 릴리스 채널, 텔레메트리 설계 메모. 최신 커밋은 2026년 10월 24일.',
          '[안정 릴리스 v2026-10-13](https://github.com/refactoringhq/tolaria/releases/tag/v2026-10-13) — 설치 파일과 릴리스 날짜. 2026년 10월 24일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[SiYuan 리뷰](/ko/power-local-llm/siyuan-review) — 프라이버시 우선의 블록 기반 지식 베이스로 AI가 내장되어 있습니다.',
          '[Blinko 리뷰](/ko/power-local-llm/blinko-review) — RAG 검색을 지원하는 셀프 호스팅 AI 노트.',
          '[로컬 지식·검색 도구 비교](/ko/power-local-llm/local-llm-knowledge-retrieval-compared) — 이 리뷰가 속한 카테고리 비교.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 목록.',
        ],
      },
    },
  },
}
