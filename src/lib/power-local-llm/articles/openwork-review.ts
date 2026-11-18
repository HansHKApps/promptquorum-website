// OpenWork Review: Open-Source Desktop AI Agent for Your Files
// Slug: openwork-review
// Companion to: opencode-review, goose-review, atomic-agent-review, open-interpreter-review
// Sources (all read 2026-11-18, no hands-on testing): maker website (home, download, pricing), privacy policy, terms of use and subscription terms,
// GitHub repository, README, release v0.18.68 and release list (gh api), a pull request note on name collisions, and one third-party review (andrew.ooo).
// The request came from the site owner, not from the maker. No maker outreach; no founder-review badge.
// Last upstream update 2026-11-18 (latest release v0.18.68 and last commit) => no stale warning.
// Dropped on purpose: a January 2026 UC Strategies hands-on test and a Nimbalyst comparison table — the name is shared with an unrelated app distributed
// from accomplish.ai, so it is not established which product the January 2026 test covered, and the table was not read first-hand.
// Theme: 'Local AI Agents & Tool Use' (same as the other agent reviews).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openwork-review-hero-en.webp',
    title: 'OpenWork Review: Open-Source Desktop AI Agent for Your Files',
    seoTitle: 'OpenWork Review: Free Open-Source Desktop AI Agent',
    intro:
      'OpenWork is a free desktop app for macOS, Windows and Linux in which AI agents work on your own files. It is built on OpenCode and connects to cloud models with your own keys or to local models through Ollama. This review is based on the maker\'s pages, the GitHub repository and its releases, and published coverage, checked on 18 November 2026. PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'OpenWork is a free desktop AI agent app built on OpenCode that works with your own model keys or Ollama. License, pricing, privacy and limits explained.',
    twitterDescription:
      'OpenWork is a free, MIT-licensed desktop AI agent app for your files, with bring-your-own models or Ollama. Team features are paid and separately licensed.',
    audience:
      'Knowledge workers, developers and teams weighing an open-source desktop AI agent that works on local files with their own model access',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenWork',
    targetKeywords: [
      'OpenWork review',
      'OpenWork AI',
      'OpenWork Claude Cowork alternative',
      'OpenWork pricing',
      'OpenWork license',
      'OpenWork Ollama',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenWork is a free, open-source desktop app for macOS, Windows and Linux in which AI agents work on your own files, using your own model keys or local models through Ollama.** The desktop app is MIT-licensed, while the team control plane is source-available and paid beyond five users.',
    quickAnswerTop: {
      en: {
        question: 'What is OpenWork and who is it for?',
        answer:
          'OpenWork is a desktop app in which AI agents read and change files on your computer, built on the OpenCode agent. It suits people who want an open-source alternative to a single-vendor agent app and are comfortable supplying their own model access.',
        bullets: [
          'Platforms: macOS (Apple Silicon and Intel), Windows (x64, ARM64) and Linux (x64, ARM64).',
          'Price: desktop app free; OpenWork Cloud Team from $10 per user per month.',
          'License: MIT for the desktop app; a separate source-available license for the ee/ folder.',
          'Models: 50+ providers through OpenCode, your own keys, or local models through Ollama.',
          'Maker: Different AI, Inc., doing business as OpenWork, San Francisco.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Overview', anchor: 'overview' },
      { label: 'How to Get It', anchor: 'get-it' },
      { label: 'Features', anchor: 'features' },
      { label: 'Privacy and Data Flow', anchor: 'privacy' },
      { label: 'Pricing and License', anchor: 'pricing' },
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
            text: 'OpenWork is a free, open-source desktop app where AI agents work on files on your own computer, built on OpenCode and open to cloud or local models.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a chat window that can read, create and edit your documents and run tools, while you choose which AI model does the thinking. Per the maker, your files stay on your machine, but prompts go to whichever model provider you pick.',
          },
        ],
        items: [
          'No OpenWork account is needed to start, according to the maker\'s download page.',
          'Skills, Claude-compatible plugins and MCP servers can be shared with teammates in one click, per the maker.',
          'The maker labels some features as Alpha or coming soon, including scheduled tasks and assigning tasks from a phone.',
          'Releases come every few days: v0.18.64 on 3 November 2026 through v0.18.68 on 18 November 2026.',
          'PromptQuorum has not tested the app, and the maker states no hardware requirements.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'An agent that edits files and uses tools can change or delete data. Start with copies of your files, review what it does, and check how your chosen model provider handles the prompts you send. This is general information, not legal advice.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**OpenWork is a desktop app that lets AI agents work on files on your own computer, positioned by its maker as an open-source alternative to Claude Cowork and Codex.**',
          'The app is made by Different AI, Inc., doing business as OpenWork. Its privacy policy gives an address in San Francisco, California, and the maker\'s homepage states Y Combinator backing. Version 0.18.68 was released on 18 November 2026 and the repository had a commit the same day, so development is ongoing and no stale-project warning applies.',
          'Per the README, OpenWork is built on OpenCode and works with 50+ model providers: your own API keys, a ChatGPT sign-in, or local models through Ollama or any OpenAI-compatible server.',
          'For teams, the maker describes shared skills, plugins and MCP servers, plus an MCP endpoint that lets agents such as Codex, Claude Code and Cursor reuse the same setup. These descriptions are maker statements. PromptQuorum has not run the app and has not measured its speed, accuracy or resource use.',
          'The name is shared with other products. A pull request in the maker\'s repository says the npm package named openwork is an unrelated project, and a third-party blog mentions a different Openwork app from another company.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**OpenWork installs with a normal per-OS download from the maker\'s download page, and, per the maker, no account is required to start.**',
          'The GitHub release for v0.18.68 lists .dmg files for macOS (Apple Silicon and Intel), .exe installers for Windows (x64 and ARM64), and AppImage and tar.gz files for Linux (x64 and ARM64). The maker\'s release note says the Windows installers are signed with Microsoft Artifact Signing. The release also carries separate cloud and enterprise builds that need sign-in; this review covers the public app.',
        ],
        columns: ['Platform', 'How to get it'],
        rows: [
          { 'Platform': '[macOS](https://openworklabs.com/download)', 'How to get it': 'Download .dmg (Apple Silicon or Intel)' },
          { 'Platform': '[Windows](https://openworklabs.com/download)', 'How to get it': 'Download .exe installer (x64 or ARM64)' },
          { 'Platform': '[Linux](https://openworklabs.com/download)', 'How to get it': 'AppImage or tar.gz (x64 or ARM64)' },
          { 'Platform': '[GitHub](https://github.com/different-ai/openwork/releases)', 'How to get it': 'All builds and release notes' },
          { 'Platform': '[Website](https://openworklabs.com)', 'How to get it': 'Official site, pricing and docs' },
          { 'Platform': '[Privacy policy](https://openworklabs.com/privacy)', 'How to get it': 'Maker\'s privacy policy' },
        ],
        note: 'The pages read give no minimum operating system version, RAM or disk figure. Joining a team asks you to sign in after installing.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**OpenWork combines a desktop chat and automation app with sharing tools for teams.** All items below are maker claims from the website, README and pricing page unless marked otherwise.',
        ],
        items: [
          'Chat, Library and Automations on your own files, in a desktop app that needs no account.',
          'Model choice through OpenCode: 50+ providers, your own API keys, a ChatGPT sign-in, or local models via Ollama or any OpenAI-compatible server.',
          'Skills, Claude-compatible plugins and MCP servers, with a migration guide for people moving a setup from Claude Cowork.',
          'Browser automation, which the maker\'s comparison table lists as included.',
          'Scheduled tasks, which the maker labels Alpha.',
          'Not available yet per the maker: assigning tasks from a phone (Dispatch) and auto-refreshing dashboards (live artifacts), both marked coming soon.',
          'Team sharing: skills, plugins and MCP servers packaged into one link that teammates import in one click.',
          'An OpenWork MCP server that lets Codex, Claude Code, Cursor, OpenCode or another MCP client reuse your skills and connections; the client opens a browser for sign-in.',
          'OpenWork Den, a control plane for organizations to manage access, desktop policies and skill marketplaces; the team control plane can be self-hosted.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**In desktop mode, the maker says your files stay on your machine and prompts go straight to the model provider you choose.**',
          'The privacy policy says the desktop app does not collect, track or transmit data during normal use. The one exception is a bug report you start yourself, which attaches diagnostics such as the app and OpenCode versions and your operating system. The terms say the same about analytics and telemetry. Model providers you connect with your own keys are not the maker\'s sub-processors, so their own terms and retention rules apply.',
          'Other data paths exist. The website uses PostHog analytics. The cloud service collects limited operational telemetry that, per the policy, contains no personal information or user content. Hosted cloud workers are optional and run on the maker\'s sandboxed infrastructure. The OpenWork MCP is a remote server operated by the maker and needs sign-in.',
          'A third-party review from August 2026 notes that, with the OpenWork MCP, authentication and capability lookup run through the maker\'s servers even when inference is local.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Pricing and License',
        content: [
          '**The desktop app is free; paid plans add team features through OpenWork Cloud or a self-hosted control plane.** Prices are in US dollars, exclude taxes and come from the pricing page on 18 November 2026.',
          'Per the README, everything outside the ee/ folder is MIT-licensed, including the desktop app. The ee/ folder (OpenWork Den) uses the OpenWork EE License, a source-available license: production use needs a subscription, except that it is free for up to 5 users, free to evaluate for 30 days and always free for development and testing. Each ee/ release converts to MIT two years after publication. Earlier versions remain under the Functional Source License (FSL-1.1-MIT).',
          'GitHub\'s license detector lists the repository as Other. A third-party review from August 2026 says community members noticed that some components had been relicensed commercially; the README now documents the split. Check the license at the exact version you depend on.',
        ],
        columns: ['Plan', 'Price', 'Includes'],
        rows: [
          { 'Plan': 'Desktop app', 'Price': 'Free', 'Includes': 'MIT license, bring your own keys' },
          { 'Plan': 'Cloud Free', 'Price': '$0, up to 5 users', 'Includes': 'Community support' },
          { 'Plan': 'Team', 'Price': '$10/user/month', 'Includes': 'SSO/SAML, marketplace, cloud automations' },
          { 'Plan': 'Enterprise', 'Price': 'Custom', 'Includes': 'SCIM, audit log, white-labeling' },
          { 'Plan': 'Cloud Computer add-on', 'Price': '$50/member/month', 'Includes': 'Browser-accessible cloud computer' },
          { 'Plan': 'OpenWork models add-on', 'Price': '$10/user/month', 'Includes': 'Managed inference, no keys needed' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**OpenWork fits people who want an open-source desktop agent for their own files and will bring their own model access.**',
        ],
        items: [
          'People who want an agent that works on local files and are happy to use their own API keys or run Ollama.',
          'Teams that already use skills and MCP servers and want to share them from one place, with a self-hosting option.',
          'People who want to try the maker\'s migration route from a Claude Cowork setup.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Limits and What We Could Not Verify',
        content: [
          '**OpenWork is a poor fit in some situations, and several details remain unverified.**',
        ],
        items: [
          'Not a fit: anyone who needs a fully MIT-licensed stack including the team control plane, which uses the separate EE License.',
          'Not a fit: anyone who needs features the maker lists as coming soon, such as assigning tasks from a phone, or who needs scheduled tasks to be beyond Alpha.',
          'Unverified: minimum operating system versions, RAM, disk and GPU needs. None are stated on the pages read, and local-model performance through Ollama has not been measured.',
          'Unverified: the SOC 2 Type II audit that the maker\'s homepage says is complete. PromptQuorum did not read a report.',
          'Unverified: Y Combinator backing, which comes from the maker\'s homepage only.',
          'Unverified: whether the San Francisco address in the privacy policy and terms is the main office. The policy is governed by US law.',
          'Unverified: there are no app store listings, so there are no store ratings.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenWork vs Alternatives',
        itemHeadings: true,
        content: [
          '**OpenWork is one of several agent apps built around local files and tools. PromptQuorum has not compared it with the alternatives hands-on.** The notes below come from PromptQuorum\'s directory entries for each tool.',
        ],
        columns: ['Tool', 'Noted in sources'],
        rows: [
          { 'Tool': 'OpenWork', 'Noted in sources': 'MIT desktop app; mac, Windows, Linux; built on OpenCode' },
          { 'Tool': 'OpenCode', 'Noted in sources': 'MIT; terminal-first agent, 75+ providers; OpenWork builds on it' },
          { 'Tool': 'Goose', 'Noted in sources': 'Apache-2.0; desktop and CLI; Linux Foundation' },
          { 'Tool': 'Atomic Agent', 'Noted in sources': 'MIT; local-first command-line agent using llama.cpp' },
          { 'Tool': 'Open Interpreter', 'Noted in sources': 'Apache 2.0; lets a local LLM control your computer' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Can OpenWork run fully offline with local models?',
            a: 'The README says you can run local models through Ollama or any OpenAI-compatible server, and that your files stay local. It does not say whether every feature works offline: the OpenWork MCP, team sharing and cloud features need the network and sign-in.',
          },
          {
            q: 'Is this OpenWork the same as the npm package or other apps called Openwork?',
            a: 'No. A pull request in the maker\'s repository says the npm package named openwork is an unrelated project, and a third-party blog mentions another Openwork app from a different company. This review covers the desktop app from Different AI, Inc. at [openworklabs.com](https://openworklabs.com).',
          },
          {
            q: 'Can I move my Claude Cowork setup to OpenWork?',
            a: 'The maker says skills, Claude-compatible plugins and MCP servers carry over and publishes a migration guide that moves them with one prompt. PromptQuorum has not tried the migration, so check the result against your own setup.',
          },
          {
            q: 'Can I use OpenWork from Claude Code or Codex without the desktop app?',
            a: 'Yes, per the README: you add the OpenWork MCP to Codex, Claude Code, Cursor, OpenCode or another MCP client with one command or config entry. Your client then opens a browser so you can sign in and choose your OpenWork organization. The README says the desktop app is not required for this.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**OpenWork is worth trying if you want an open-source desktop agent for your own files and are comfortable choosing and paying for your own model access.**',
          'On paper it offers a free MIT desktop app, 50+ model providers, Ollama support, shared skills and MCP servers, and a self-hosting route for teams. Development is active, with five releases between 3 and 18 November 2026.',
          'The trade-offs are real. Several features are alpha or announced, the team control plane sits under a different source-available license, and system requirements and local-model performance are unverified. PromptQuorum has not tested the app. Try it on copies of non-sensitive files first.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[OpenWork website](https://openworklabs.com) — maker\'s description of features, the comparison table and plans, checked 18 November 2026.',
          '[Download page](https://openworklabs.com/download) — per-OS downloads and the current version, checked 18 November 2026.',
          '[Pricing page](https://openworklabs.com/pricing) — plans, prices, add-ons and the license note, checked 18 November 2026.',
          '[Privacy policy](https://openworklabs.com/privacy) — company address, desktop data handling, sub-processors and governing law, checked 18 November 2026.',
          '[Terms of use](https://openworklabs.com/terms) — telemetry statement and governing law, checked 18 November 2026.',
          '[Subscription terms](https://openworklabs.com/terms/subscription) — company contact address, checked 18 November 2026.',
          '[OpenWork GitHub repository](https://github.com/different-ai/openwork) — repository, last commit and project description, checked 18 November 2026.',
          '[OpenWork README](https://github.com/different-ai/openwork#readme) — models, license split, MCP setup and Ollama support, checked 18 November 2026.',
          '[Release v0.18.68](https://github.com/different-ai/openwork/releases/tag/v0.18.68) — version, date, assets and release note, checked 18 November 2026.',
          '[GitHub releases](https://github.com/different-ai/openwork/releases) — release history used for the release cadence, checked 18 November 2026.',
          '[andrew.ooo review](https://andrew.ooo/posts/openwork-open-source-claude-cowork-alternative-review/) — third-party comments on licensing and the hosted capability layer, August 2026, checked 18 November 2026.',
          '[Pull request 5385](https://github.com/different-ai/openwork/pull/5385) — note that the npm package named openwork is a different project, checked 18 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[OpenCode Review](/power-local-llm/opencode-review) — Terminal-first open-source coding agent supporting 75+ model providers, including local models.',
          '[Goose Review](/power-local-llm/goose-review) — Local-first AI agent for coding, automation, and workflows — governed by the Linux Foundation.',
          '[Atomic Agent Review](/power-local-llm/atomic-agent-review) — Local-first AI agent that browses, edits files, and runs shell commands via llama.cpp.',
          '[Open Interpreter Review](/power-local-llm/open-interpreter-review) — Lets a local LLM control your computer and execute code.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openwork-review-hero-de.webp',
    title: 'OpenWork-Rezension: quelloffene KI-Agenten-App für Ihre Dateien',
    seoTitle: 'OpenWork-Rezension: Open-Source-KI-Agent für den Desktop',
    intro:
      'OpenWork ist eine kostenlose Desktop-App für macOS, Windows und Linux, in der KI-Agenten mit Ihren eigenen Dateien arbeiten. Sie baut auf OpenCode auf und verbindet sich mit Cloud-Modellen über Ihre eigenen Schlüssel oder mit lokalen Modellen über Ollama. Diese Rezension stützt sich auf die Seiten des Herstellers, das GitHub-Repository mit seinen Releases und veröffentlichte Berichte, geprüft am 18. November 2026. PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'OpenWork ist eine Desktop-App für KI-Agenten auf OpenCode-Basis, mit eigenen Modell-Schlüsseln oder Ollama. Lizenz, Preise, Datenschutz, Grenzen.',
    twitterDescription:
      'OpenWork ist eine kostenlose, MIT-lizenzierte Desktop-App für KI-Agenten auf Ihren Dateien, mit eigenen Modellen oder Ollama. Team-Funktionen sind kostenpflichtig und anders lizenziert.',
    audience:
      'Wissensarbeiter, Entwickler und Teams, die einen quelloffenen Desktop-KI-Agenten für lokale Dateien mit eigenem Modellzugang prüfen',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenWork',
    targetKeywords: [
      'OpenWork Rezension',
      'OpenWork KI',
      'OpenWork Claude-Cowork-Alternative',
      'OpenWork Preise',
      'OpenWork Lizenz',
      'OpenWork Ollama',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenWork ist eine kostenlose, quelloffene Desktop-App für macOS, Windows und Linux, in der KI-Agenten mit Ihren eigenen Dateien arbeiten, mit Ihren eigenen Modell-Schlüsseln oder lokalen Modellen über Ollama.** Die Desktop-App steht unter der MIT-Lizenz, die Steuerungsebene für Teams ist Source-available und ab sechs Nutzern kostenpflichtig.',
    quickAnswerTop: {
      de: {
        question: 'Was ist OpenWork, und für wen ist es gedacht?',
        answer:
          'OpenWork ist eine Desktop-App, in der KI-Agenten Dateien auf Ihrem Computer lesen und ändern, aufgebaut auf dem Agenten OpenCode. Sie eignet sich für Menschen, die eine quelloffene Alternative zu einer Agenten-App eines einzelnen Anbieters suchen und ihren Modellzugang selbst mitbringen können.',
        bullets: [
          'Plattformen: macOS (Apple Silicon und Intel), Windows (x64, ARM64) und Linux (x64, ARM64).',
          'Preis: Desktop-App kostenlos; OpenWork Cloud Team ab $10 pro Nutzer und Monat.',
          'Lizenz: MIT für die Desktop-App; eine eigene Source-available-Lizenz für den Ordner ee/.',
          'Modelle: über 50 Anbieter über OpenCode, eigene Schlüssel oder lokale Modelle über Ollama.',
          'Hersteller: Different AI, Inc., geschäftlich tätig als OpenWork, San Francisco.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'Überblick', anchor: 'overview' },
      { label: 'So bekommen Sie die App', anchor: 'get-it' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Datenschutz und Datenfluss', anchor: 'privacy' },
      { label: 'Preise und Lizenz', anchor: 'pricing' },
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
            text: 'OpenWork ist eine kostenlose, quelloffene Desktop-App, in der KI-Agenten mit Dateien auf Ihrem eigenen Computer arbeiten, aufgebaut auf OpenCode und offen für Cloud- oder lokale Modelle.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als Chatfenster vor, das Ihre Dokumente lesen, erstellen und bearbeiten und Werkzeuge ausführen kann, während Sie wählen, welches KI-Modell das Denken übernimmt. Laut Hersteller bleiben Ihre Dateien auf Ihrem Rechner, aber Prompts gehen an den Modellanbieter, den Sie auswählen.',
          },
        ],
        items: [
          'Laut der Download-Seite des Herstellers ist zum Start kein OpenWork-Konto nötig.',
          'Skills, Claude-kompatible Plugins und MCP-Server lassen sich laut Hersteller mit einem Klick mit Kolleginnen und Kollegen teilen.',
          'Der Hersteller kennzeichnet einige Funktionen als Alpha oder „demnächst“, darunter geplante Aufgaben und das Zuweisen von Aufgaben vom Smartphone.',
          'Releases erscheinen alle paar Tage: v0.18.64 am 3. November 2026 bis v0.18.68 am 18. November 2026.',
          'PromptQuorum hat die App nicht getestet, und der Hersteller nennt keine Hardware-Anforderungen.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ein Agent, der Dateien bearbeitet und Werkzeuge nutzt, kann Daten verändern oder löschen. Beginnen Sie mit Kopien Ihrer Dateien, prüfen Sie, was er tut, und klären Sie, wie Ihr gewählter Modellanbieter die gesendeten Prompts behandelt. Dies ist eine allgemeine Information, keine Rechtsberatung.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**OpenWork ist eine Desktop-App, mit der KI-Agenten an Dateien auf Ihrem eigenen Computer arbeiten; der Hersteller positioniert sie als quelloffene Alternative zu Claude Cowork und Codex.**',
          'Die App stammt von Different AI, Inc., geschäftlich tätig als OpenWork. Die Datenschutzerklärung nennt eine Adresse in San Francisco, Kalifornien, und die Startseite des Herstellers nennt Unterstützung durch Y Combinator. Version 0.18.68 erschien am 18. November 2026, und im Repository gab es am selben Tag einen Commit; die Entwicklung läuft also weiter und es gilt keine Warnung vor einem veralteten Projekt.',
          'Laut README baut OpenWork auf OpenCode auf und arbeitet mit über 50 Modellanbietern: Ihren eigenen API-Schlüsseln, einer ChatGPT-Anmeldung oder lokalen Modellen über Ollama oder einen beliebigen OpenAI-kompatiblen Server.',
          'Für Teams beschreibt der Hersteller geteilte Skills, Plugins und MCP-Server sowie einen MCP-Endpunkt, mit dem Agenten wie Codex, Claude Code und Cursor dieselbe Einrichtung nutzen können. Diese Beschreibungen sind Aussagen des Herstellers. PromptQuorum hat die App nicht ausgeführt und weder Geschwindigkeit noch Genauigkeit oder Ressourcenverbrauch gemessen.',
          'Der Name wird auch von anderen Produkten verwendet. Ein Pull Request im Repository des Herstellers sagt, das npm-Paket namens openwork sei ein unabhängiges Projekt, und ein Drittanbieter-Blog erwähnt eine andere Openwork-App eines anderen Unternehmens.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So bekommen Sie die App',
        content: [
          '**OpenWork installieren Sie mit einem normalen Download pro Betriebssystem von der Download-Seite des Herstellers; laut Hersteller ist zum Start kein Konto nötig.**',
          'Das GitHub-Release v0.18.68 listet .dmg-Dateien für macOS (Apple Silicon und Intel), .exe-Installer für Windows (x64 und ARM64) sowie AppImage- und tar.gz-Dateien für Linux (x64 und ARM64). Laut Release-Hinweis des Herstellers sind die Windows-Installer mit Microsoft Artifact Signing signiert. Das Release enthält außerdem getrennte Cloud- und Enterprise-Builds, die eine Anmeldung brauchen; diese Rezension behandelt die öffentliche App.',
        ],
        columns: ['Plattform', 'So bekommen Sie sie'],
        rows: [
          { 'Plattform': '[macOS](https://openworklabs.com/download)', 'So bekommen Sie sie': '.dmg herunterladen (Apple Silicon oder Intel)' },
          { 'Plattform': '[Windows](https://openworklabs.com/download)', 'So bekommen Sie sie': '.exe-Installer herunterladen (x64 oder ARM64)' },
          { 'Plattform': '[Linux](https://openworklabs.com/download)', 'So bekommen Sie sie': 'AppImage oder tar.gz (x64 oder ARM64)' },
          { 'Plattform': '[GitHub](https://github.com/different-ai/openwork/releases)', 'So bekommen Sie sie': 'Alle Builds und Release-Hinweise' },
          { 'Plattform': '[Website](https://openworklabs.com)', 'So bekommen Sie sie': 'Offizielle Seite, Preise und Dokumentation' },
          { 'Plattform': '[Datenschutzerklärung](https://openworklabs.com/privacy)', 'So bekommen Sie sie': 'Datenschutzerklärung des Herstellers' },
        ],
        note: 'Die gelesenen Seiten nennen keine Mindestversion des Betriebssystems und keine Angabe zu RAM oder Speicherplatz. Wer einem Team beitritt, wird nach der Installation zur Anmeldung aufgefordert.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**OpenWork verbindet eine Desktop-App für Chat und Automatisierung mit Werkzeugen zum Teilen im Team.** Alle folgenden Punkte sind Aussagen des Herstellers von Website, README und Preisseite, sofern nicht anders vermerkt.',
        ],
        items: [
          'Chat, Bibliothek und Automatisierungen auf Ihren eigenen Dateien, in einer Desktop-App, die kein Konto braucht.',
          'Modellauswahl über OpenCode: über 50 Anbieter, eigene API-Schlüssel, eine ChatGPT-Anmeldung oder lokale Modelle über Ollama oder einen beliebigen OpenAI-kompatiblen Server.',
          'Skills, Claude-kompatible Plugins und MCP-Server, mit einer Migrationsanleitung für alle, die ein Setup von Claude Cowork umziehen.',
          'Browser-Automatisierung, die der Vergleichstabelle des Herstellers zufolge enthalten ist.',
          'Geplante Aufgaben, die der Hersteller als Alpha kennzeichnet.',
          'Laut Hersteller noch nicht verfügbar: Aufgaben vom Smartphone zuweisen (Dispatch) und sich automatisch aktualisierende Dashboards (Live-Artefakte), beide als „demnächst“ markiert.',
          'Teilen im Team: Skills, Plugins und MCP-Server, gebündelt in einem Link, den Kolleginnen und Kollegen mit einem Klick importieren.',
          'Ein OpenWork-MCP-Server, über den Codex, Claude Code, Cursor, OpenCode oder ein anderer MCP-Client Ihre Skills und Verbindungen wiederverwenden kann; der Client öffnet zur Anmeldung einen Browser.',
          'OpenWork Den, eine Steuerungsebene für Organisationen, um Zugriff, Desktop-Richtlinien und Skill-Marktplätze zu verwalten; die Steuerungsebene für Teams lässt sich selbst hosten.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Im Desktop-Modus bleiben Ihre Dateien laut Hersteller auf Ihrem Rechner, und Prompts gehen direkt an den von Ihnen gewählten Modellanbieter.**',
          'Die Datenschutzerklärung sagt, die Desktop-App erhebe, verfolge oder übertrage im normalen Betrieb keine Daten. Die einzige Ausnahme ist ein Fehlerbericht, den Sie selbst auslösen; er enthält Diagnoseangaben wie die Versionen von App und OpenCode sowie Ihr Betriebssystem. Die Nutzungsbedingungen sagen dasselbe zu Analyse und Telemetrie. Modellanbieter, die Sie mit eigenen Schlüsseln anbinden, sind keine Unterauftragsverarbeiter des Herstellers; für sie gelten ihre eigenen Bedingungen und Aufbewahrungsregeln.',
          'Es gibt weitere Datenpfade. Die Website nutzt PostHog-Analysen. Der Cloud-Dienst erhebt begrenzte operative Telemetrie, die laut Erklärung keine personenbezogenen Daten und keine Nutzerinhalte enthält. Gehostete Cloud-Worker sind optional und laufen auf der abgeschotteten Infrastruktur des Herstellers. Der OpenWork-MCP ist ein vom Hersteller betriebener Remote-Server und erfordert eine Anmeldung.',
          'Eine Drittanbieter-Rezension vom August 2026 merkt an, dass beim OpenWork-MCP Authentifizierung und Funktionsabfrage über die Server des Herstellers laufen, auch wenn die Inferenz lokal ist.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Preise und Lizenz',
        content: [
          '**Die Desktop-App ist kostenlos; kostenpflichtige Tarife ergänzen Team-Funktionen über OpenWork Cloud oder eine selbst gehostete Steuerungsebene.** Die Preise gelten in US-Dollar, verstehen sich ohne Steuern und stammen von der Preisseite vom 18. November 2026.',
          'Laut README steht alles außerhalb des Ordners ee/ unter der MIT-Lizenz, auch die Desktop-App. Der Ordner ee/ (OpenWork Den) steht unter der OpenWork EE License, einer Source-available-Lizenz: Für den Produktivbetrieb ist ein Abonnement nötig; kostenlos ist er für bis zu 5 Nutzer, zur Evaluierung für 30 Tage und immer für Entwicklung und Tests. Jedes ee/-Release wird zwei Jahre nach Veröffentlichung zu MIT. Frühere Versionen stehen weiter unter der Functional Source License (FSL-1.1-MIT).',
          'Der Lizenzdetektor von GitHub führt das Repository als „Other“. Eine Drittanbieter-Rezension vom August 2026 sagt, Community-Mitglieder hätten bemerkt, dass einige Komponenten kommerziell neu lizenziert wurden; das README dokumentiert die Aufteilung inzwischen. Prüfen Sie die Lizenz für genau die Version, auf die Sie sich verlassen.',
        ],
        columns: ['Tarif', 'Preis', 'Enthält'],
        rows: [
          { 'Tarif': 'Desktop-App', 'Preis': 'Kostenlos', 'Enthält': 'MIT-Lizenz, eigene Schlüssel' },
          { 'Tarif': 'Cloud Free', 'Preis': '$0, bis 5 Nutzer', 'Enthält': 'Community-Support' },
          { 'Tarif': 'Team', 'Preis': '$10/Nutzer/Monat', 'Enthält': 'SSO/SAML, Marktplatz, Cloud-Automatisierung' },
          { 'Tarif': 'Enterprise', 'Preis': 'Individuell', 'Enthält': 'SCIM, Audit-Protokoll, White-Labeling' },
          { 'Tarif': 'Zusatz Cloud Computer', 'Preis': '$50/Mitglied/Monat', 'Enthält': 'Cloud-Computer im Browser' },
          { 'Tarif': 'Zusatz OpenWork-Modelle', 'Preis': '$10/Nutzer/Monat', 'Enthält': 'Verwaltete Inferenz, keine Schlüssel nötig' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**OpenWork passt zu Menschen, die einen quelloffenen Desktop-Agenten für ihre eigenen Dateien wollen und ihren Modellzugang selbst mitbringen.**',
        ],
        items: [
          'Menschen, die einen Agenten auf lokalen Dateien möchten und gern eigene API-Schlüssel nutzen oder Ollama betreiben.',
          'Teams, die bereits Skills und MCP-Server nutzen und sie von einer Stelle aus teilen möchten, mit Option zum Selbsthosten.',
          'Menschen, die den Migrationsweg des Herstellers von einem Claude-Cowork-Setup ausprobieren möchten.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Grenzen und was wir nicht überprüfen konnten',
        content: [
          '**OpenWork passt in manchen Situationen schlecht, und mehrere Details bleiben unverifiziert.**',
        ],
        items: [
          'Nicht geeignet: alle, die einen vollständig MIT-lizenzierten Stack einschließlich der Steuerungsebene für Teams brauchen; diese steht unter der separaten EE License.',
          'Nicht geeignet: alle, die Funktionen brauchen, die der Hersteller als „demnächst“ führt, etwa Aufgaben vom Smartphone zuzuweisen, oder die geplante Aufgaben jenseits von Alpha benötigen.',
          'Nicht verifiziert: Mindestversionen des Betriebssystems sowie Bedarf an RAM, Speicherplatz und GPU. Keine davon steht auf den gelesenen Seiten, und die Leistung lokaler Modelle über Ollama wurde nicht gemessen.',
          'Nicht verifiziert: das SOC-2-Type-II-Audit, das laut Startseite des Herstellers abgeschlossen ist. PromptQuorum hat keinen Bericht gelesen.',
          'Nicht verifiziert: die Unterstützung durch Y Combinator, die nur von der Startseite des Herstellers stammt.',
          'Nicht verifiziert: ob die Adresse in San Francisco aus Datenschutzerklärung und Nutzungsbedingungen der Hauptsitz ist. Die Erklärung unterliegt US-Recht.',
          'Nicht verifiziert: Es gibt keine App-Store-Einträge, daher auch keine Store-Bewertungen.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenWork im Vergleich zu Alternativen',
        itemHeadings: true,
        content: [
          '**OpenWork ist eine von mehreren Agenten-Apps rund um lokale Dateien und Werkzeuge. PromptQuorum hat sie nicht praktisch mit den Alternativen verglichen.** Die folgenden Hinweise stammen aus den Verzeichniseinträgen von PromptQuorum zu den einzelnen Werkzeugen.',
        ],
        columns: ['Werkzeug', 'In den Quellen vermerkt'],
        rows: [
          { 'Werkzeug': 'OpenWork', 'In den Quellen vermerkt': 'MIT-Desktop-App; Mac, Windows, Linux; auf OpenCode aufgebaut' },
          { 'Werkzeug': 'OpenCode', 'In den Quellen vermerkt': 'MIT; Terminal-Agent, 75+ Anbieter; OpenWork baut darauf auf' },
          { 'Werkzeug': 'Goose', 'In den Quellen vermerkt': 'Apache-2.0; Desktop und CLI; Linux Foundation' },
          { 'Werkzeug': 'Atomic Agent', 'In den Quellen vermerkt': 'MIT; lokaler Kommandozeilen-Agent mit llama.cpp' },
          { 'Werkzeug': 'Open Interpreter', 'In den Quellen vermerkt': 'Apache 2.0; lässt ein lokales LLM Ihren Computer steuern' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Kann OpenWork mit lokalen Modellen vollständig offline laufen?',
            a: 'Laut README können Sie lokale Modelle über Ollama oder einen beliebigen OpenAI-kompatiblen Server betreiben, und Ihre Dateien bleiben lokal. Ob jede Funktion offline arbeitet, steht dort nicht: Der OpenWork-MCP, das Teilen im Team und die Cloud-Funktionen brauchen Netzwerk und Anmeldung.',
          },
          {
            q: 'Ist dieses OpenWork dasselbe wie das npm-Paket oder andere Apps namens Openwork?',
            a: 'Nein. Ein Pull Request im Repository des Herstellers sagt, das npm-Paket namens openwork sei ein unabhängiges Projekt, und ein Drittanbieter-Blog erwähnt eine andere Openwork-App eines anderen Unternehmens. Diese Rezension behandelt die Desktop-App von Different AI, Inc. unter [openworklabs.com](https://openworklabs.com).',
          },
          {
            q: 'Kann ich mein Claude-Cowork-Setup zu OpenWork umziehen?',
            a: 'Der Hersteller sagt, Skills, Claude-kompatible Plugins und MCP-Server ließen sich übernehmen, und veröffentlicht eine Migrationsanleitung, die sie mit einem Prompt umzieht. PromptQuorum hat die Migration nicht ausprobiert; prüfen Sie das Ergebnis daher an Ihrem eigenen Setup.',
          },
          {
            q: 'Kann ich OpenWork aus Claude Code oder Codex ohne die Desktop-App nutzen?',
            a: 'Ja, laut README: Sie fügen den OpenWork-MCP mit einem Befehl oder Konfigurationseintrag zu Codex, Claude Code, Cursor, OpenCode oder einem anderen MCP-Client hinzu. Ihr Client öffnet dann einen Browser, damit Sie sich anmelden und Ihre OpenWork-Organisation wählen können. Die Desktop-App ist dafür laut README nicht nötig.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**OpenWork ist einen Versuch wert, wenn Sie einen quelloffenen Desktop-Agenten für Ihre eigenen Dateien wollen und Ihren Modellzugang selbst wählen und bezahlen können.**',
          'Auf dem Papier bietet es eine kostenlose MIT-Desktop-App, über 50 Modellanbieter, Ollama-Unterstützung, geteilte Skills und MCP-Server sowie einen Selbsthosting-Weg für Teams. Die Entwicklung ist aktiv, mit fünf Releases zwischen dem 3. und dem 18. November 2026.',
          'Die Kompromisse sind real. Mehrere Funktionen sind Alpha oder angekündigt, die Steuerungsebene für Teams steht unter einer anderen Source-available-Lizenz, und Systemanforderungen sowie die Leistung lokaler Modelle sind unverifiziert. PromptQuorum hat die App nicht getestet. Probieren Sie sie zuerst mit Kopien nicht sensibler Dateien aus.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[OpenWork-Website](https://openworklabs.com) — Beschreibung des Herstellers zu Funktionen, Vergleichstabelle und Tarifen, geprüft am 18. November 2026.',
          '[Download-Seite](https://openworklabs.com/download) — Downloads pro Betriebssystem und aktuelle Version, geprüft am 18. November 2026.',
          '[Preisseite](https://openworklabs.com/pricing) — Tarife, Preise, Zusatzangebote und Lizenzhinweis, geprüft am 18. November 2026.',
          '[Datenschutzerklärung](https://openworklabs.com/privacy) — Firmenadresse, Datenverarbeitung der Desktop-App, Unterauftragsverarbeiter und anwendbares Recht, geprüft am 18. November 2026.',
          '[Nutzungsbedingungen](https://openworklabs.com/terms) — Aussage zur Telemetrie und anwendbares Recht, geprüft am 18. November 2026.',
          '[Abo-Bedingungen](https://openworklabs.com/terms/subscription) — Kontaktadresse des Unternehmens, geprüft am 18. November 2026.',
          '[OpenWork-GitHub-Repository](https://github.com/different-ai/openwork) — Repository, letzter Commit und Projektbeschreibung, geprüft am 18. November 2026.',
          '[OpenWork-README](https://github.com/different-ai/openwork#readme) — Modelle, Lizenzaufteilung, MCP-Einrichtung und Ollama-Unterstützung, geprüft am 18. November 2026.',
          '[Release v0.18.68](https://github.com/different-ai/openwork/releases/tag/v0.18.68) — Version, Datum, Dateien und Release-Hinweis, geprüft am 18. November 2026.',
          '[GitHub-Releases](https://github.com/different-ai/openwork/releases) — Release-Verlauf für die Release-Frequenz, geprüft am 18. November 2026.',
          '[andrew.ooo-Rezension](https://andrew.ooo/posts/openwork-open-source-claude-cowork-alternative-review/) — Anmerkungen eines Dritten zu Lizenz und gehosteter Funktionsebene, August 2026, geprüft am 18. November 2026.',
          '[Pull Request 5385](https://github.com/different-ai/openwork/pull/5385) — Hinweis, dass das npm-Paket namens openwork ein anderes Projekt ist, geprüft am 18. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[OpenCode-Rezension](/de/power-local-llm/opencode-review) — quelloffener Coding-Agent für das Terminal mit über 75 Modellanbietern, auch lokalen Modellen.',
          '[Goose-Rezension](/de/power-local-llm/goose-review) — lokaler KI-Agent für Programmierung, Automatisierung und Workflows — von der Linux Foundation verwaltet.',
          '[Atomic-Agent-Rezension](/de/power-local-llm/atomic-agent-review) — lokaler KI-Agent, der im Web browst, Dateien bearbeitet und Shell-Befehle über llama.cpp ausführt.',
          '[Open-Interpreter-Rezension](/de/power-local-llm/open-interpreter-review) — lässt ein lokales LLM Ihren Computer steuern und Code ausführen.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openwork-review-hero-es.webp',
    title: 'Reseña de OpenWork: agente de IA de escritorio de código abierto para tus archivos',
    seoTitle: 'Reseña de OpenWork: agente de IA de escritorio gratis',
    intro:
      'OpenWork es una app de escritorio gratuita para macOS, Windows y Linux en la que agentes de IA trabajan con tus propios archivos. Está creada sobre OpenCode y se conecta a modelos en la nube con tus propias claves o a modelos locales mediante Ollama. Esta reseña se basa en las páginas del fabricante, el repositorio de GitHub con sus versiones y cobertura publicada, comprobados el 18 de noviembre de 2026. PromptQuorum no ha probado la app en la práctica.',
    metaDescription:
      'OpenWork es una app de escritorio gratuita de agentes de IA sobre OpenCode, con tus claves de modelos u Ollama. Licencia, precios, privacidad y límites.',
    twitterDescription:
      'OpenWork es una app de escritorio gratuita con licencia MIT para agentes de IA sobre tus archivos, con tus modelos u Ollama. Las funciones de equipo son de pago y tienen otra licencia.',
    audience:
      'Profesionales del conocimiento, desarrolladores y equipos que evalúan un agente de IA de escritorio de código abierto que trabaja con archivos locales y acceso propio a modelos',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenWork',
    targetKeywords: [
      'reseña de OpenWork',
      'OpenWork IA',
      'OpenWork alternativa a Claude Cowork',
      'OpenWork precios',
      'OpenWork licencia',
      'OpenWork Ollama',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenWork es una app de escritorio gratuita y de código abierto para macOS, Windows y Linux en la que agentes de IA trabajan con tus propios archivos, con tus propias claves de modelos o modelos locales mediante Ollama.** La app de escritorio tiene licencia MIT, mientras que el plano de control para equipos es de código disponible y de pago a partir de seis usuarios.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es OpenWork y para quién es?',
        answer:
          'OpenWork es una app de escritorio en la que agentes de IA leen y modifican archivos de tu equipo, creada sobre el agente OpenCode. Encaja con quien busca una alternativa de código abierto a una app de agentes de un solo proveedor y puede aportar su propio acceso a modelos.',
        bullets: [
          'Plataformas: macOS (Apple Silicon e Intel), Windows (x64, ARM64) y Linux (x64, ARM64).',
          'Precio: app de escritorio gratuita; OpenWork Cloud Team desde $10 por usuario al mes.',
          'Licencia: MIT para la app de escritorio; una licencia distinta de código disponible para la carpeta ee/.',
          'Modelos: más de 50 proveedores mediante OpenCode, tus propias claves o modelos locales con Ollama.',
          'Fabricante: Different AI, Inc., que opera como OpenWork, San Francisco.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Resumen', anchor: 'overview' },
      { label: 'Cómo conseguirla', anchor: 'get-it' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Privacidad y flujo de datos', anchor: 'privacy' },
      { label: 'Precios y licencia', anchor: 'pricing' },
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
            text: 'OpenWork es una app de escritorio gratuita y de código abierto en la que agentes de IA trabajan con archivos de tu propio equipo, creada sobre OpenCode y abierta a modelos en la nube o locales.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en una ventana de chat que puede leer, crear y editar tus documentos y usar herramientas, mientras tú eliges qué modelo de IA hace el trabajo de razonar. Según el fabricante, tus archivos se quedan en tu equipo, pero los prompts van al proveedor de modelos que elijas.',
          },
        ],
        items: [
          'Según la página de descarga del fabricante, no hace falta una cuenta de OpenWork para empezar.',
          'Según el fabricante, las skills, los plugins compatibles con Claude y los servidores MCP se comparten con compañeros con un clic.',
          'El fabricante marca algunas funciones como Alpha o «próximamente», entre ellas las tareas programadas y asignar tareas desde el móvil.',
          'Las versiones salen cada pocos días: v0.18.64 el 3 de noviembre de 2026 hasta v0.18.68 el 18 de noviembre de 2026.',
          'PromptQuorum no ha probado la app, y el fabricante no indica requisitos de hardware.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Un agente que edita archivos y usa herramientas puede cambiar o borrar datos. Empieza con copias de tus archivos, revisa lo que hace y comprueba cómo trata tu proveedor de modelos los prompts que envías. Esta es información general, no asesoramiento jurídico.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen',
        content: [
          '**OpenWork es una app de escritorio que permite que agentes de IA trabajen con archivos de tu propio equipo; su fabricante la presenta como una alternativa de código abierto a Claude Cowork y Codex.**',
          'La app la crea Different AI, Inc., que opera como OpenWork. Su política de privacidad indica una dirección en San Francisco, California, y la página de inicio del fabricante menciona el respaldo de Y Combinator. La versión 0.18.68 se publicó el 18 de noviembre de 2026 y el repositorio tuvo un commit el mismo día, así que el desarrollo continúa y no se aplica ningún aviso de proyecto abandonado.',
          'Según el README, OpenWork está creada sobre OpenCode y funciona con más de 50 proveedores de modelos: tus propias claves de API, un inicio de sesión de ChatGPT o modelos locales mediante Ollama o cualquier servidor compatible con OpenAI.',
          'Para equipos, el fabricante describe skills, plugins y servidores MCP compartidos, además de un punto de acceso MCP que permite que agentes como Codex, Claude Code y Cursor reutilicen la misma configuración. Estas descripciones son afirmaciones del fabricante. PromptQuorum no ha ejecutado la app y no ha medido su velocidad, precisión ni uso de recursos.',
          'El nombre lo comparten otros productos. Una pull request en el repositorio del fabricante dice que el paquete de npm llamado openwork es un proyecto no relacionado, y un blog de terceros menciona otra app llamada Openwork de otra empresa.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirla',
        content: [
          '**OpenWork se instala con una descarga normal por sistema desde la página de descarga del fabricante, y, según el fabricante, no hace falta una cuenta para empezar.**',
          'La versión v0.18.68 de GitHub incluye archivos .dmg para macOS (Apple Silicon e Intel), instaladores .exe para Windows (x64 y ARM64) y archivos AppImage y tar.gz para Linux (x64 y ARM64). La nota de versión del fabricante dice que los instaladores de Windows están firmados con Microsoft Artifact Signing. La versión incluye además compilaciones de nube y de empresa por separado que exigen iniciar sesión; esta reseña trata la app pública.',
        ],
        columns: ['Plataforma', 'Cómo conseguirla'],
        rows: [
          { 'Plataforma': '[macOS](https://openworklabs.com/download)', 'Cómo conseguirla': 'Descargar el .dmg (Apple Silicon o Intel)' },
          { 'Plataforma': '[Windows](https://openworklabs.com/download)', 'Cómo conseguirla': 'Descargar el instalador .exe (x64 o ARM64)' },
          { 'Plataforma': '[Linux](https://openworklabs.com/download)', 'Cómo conseguirla': 'AppImage o tar.gz (x64 o ARM64)' },
          { 'Plataforma': '[GitHub](https://github.com/different-ai/openwork/releases)', 'Cómo conseguirla': 'Todas las compilaciones y notas de versión' },
          { 'Plataforma': '[Sitio web](https://openworklabs.com)', 'Cómo conseguirla': 'Sitio oficial, precios y documentación' },
          { 'Plataforma': '[Política de privacidad](https://openworklabs.com/privacy)', 'Cómo conseguirla': 'Política de privacidad del fabricante' },
        ],
        note: 'Las páginas leídas no indican versión mínima del sistema operativo, RAM ni espacio en disco. Unirte a un equipo te pide iniciar sesión tras la instalación.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**OpenWork combina una app de escritorio de chat y automatización con herramientas para compartir en equipo.** Todos los puntos siguientes son afirmaciones del fabricante tomadas del sitio, el README y la página de precios, salvo indicación contraria.',
        ],
        items: [
          'Chat, biblioteca y automatizaciones sobre tus propios archivos, en una app de escritorio que no necesita cuenta.',
          'Elección de modelo mediante OpenCode: más de 50 proveedores, tus propias claves de API, un inicio de sesión de ChatGPT o modelos locales con Ollama o cualquier servidor compatible con OpenAI.',
          'Skills, plugins compatibles con Claude y servidores MCP, con una guía de migración para quien traslada una configuración desde Claude Cowork.',
          'Automatización del navegador, que la tabla comparativa del fabricante indica como incluida.',
          'Tareas programadas, que el fabricante marca como Alpha.',
          'Aún no disponible según el fabricante: asignar tareas desde el móvil (Dispatch) y paneles que se actualizan solos (live artifacts), ambos marcados como «próximamente».',
          'Compartir en equipo: skills, plugins y servidores MCP empaquetados en un enlace que los compañeros importan con un clic.',
          'Un servidor MCP de OpenWork que permite que Codex, Claude Code, Cursor, OpenCode u otro cliente MCP reutilicen tus skills y conexiones; el cliente abre un navegador para iniciar sesión.',
          'OpenWork Den, un plano de control para que las organizaciones gestionen accesos, políticas de escritorio y mercados de skills; el plano de control para equipos puede alojarse por cuenta propia.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**En modo escritorio, el fabricante dice que tus archivos se quedan en tu equipo y que los prompts van directamente al proveedor de modelos que elijas.**',
          'La política de privacidad dice que la app de escritorio no recopila, rastrea ni transmite datos durante el uso normal. La única excepción es un informe de error que inicias tú mismo, que adjunta datos de diagnóstico como las versiones de la app y de OpenCode y tu sistema operativo. Los términos dicen lo mismo sobre analítica y telemetría. Los proveedores de modelos que conectas con tus propias claves no son subencargados del fabricante, así que se aplican sus propios términos y reglas de conservación.',
          'Existen otras vías de datos. El sitio web usa analítica de PostHog. El servicio en la nube recopila telemetría operativa limitada que, según la política, no contiene información personal ni contenido de usuarios. Los trabajadores alojados en la nube son opcionales y se ejecutan en la infraestructura aislada del fabricante. El MCP de OpenWork es un servidor remoto operado por el fabricante y exige iniciar sesión.',
          'Una reseña de terceros de agosto de 2026 señala que, con el MCP de OpenWork, la autenticación y la búsqueda de capacidades pasan por los servidores del fabricante aunque la inferencia sea local.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Precios y licencia',
        content: [
          '**La app de escritorio es gratuita; los planes de pago añaden funciones de equipo mediante OpenWork Cloud o un plano de control alojado por cuenta propia.** Los precios están en dólares estadounidenses, sin impuestos, y proceden de la página de precios del 18 de noviembre de 2026.',
          'Según el README, todo lo que está fuera de la carpeta ee/ tiene licencia MIT, incluida la app de escritorio. La carpeta ee/ (OpenWork Den) usa la OpenWork EE License, de código disponible: el uso en producción requiere una suscripción, salvo que es gratis hasta 5 usuarios, gratis para evaluar durante 30 días y siempre gratis para desarrollo y pruebas. Cada versión de ee/ pasa a MIT dos años después de publicarse. Las versiones anteriores siguen bajo la Functional Source License (FSL-1.1-MIT).',
          'El detector de licencias de GitHub clasifica el repositorio como «Other». Una reseña de terceros de agosto de 2026 dice que miembros de la comunidad notaron que algunos componentes se habían relicenciado de forma comercial; el README ahora documenta la separación. Comprueba la licencia de la versión exacta de la que dependes.',
        ],
        columns: ['Plan', 'Precio', 'Incluye'],
        rows: [
          { 'Plan': 'App de escritorio', 'Precio': 'Gratis', 'Incluye': 'Licencia MIT, tus propias claves' },
          { 'Plan': 'Cloud Free', 'Precio': '$0, hasta 5 usuarios', 'Incluye': 'Soporte de la comunidad' },
          { 'Plan': 'Team', 'Precio': '$10/usuario/mes', 'Incluye': 'SSO/SAML, mercado, automatizaciones en la nube' },
          { 'Plan': 'Enterprise', 'Precio': 'A medida', 'Incluye': 'SCIM, registro de auditoría, marca blanca' },
          { 'Plan': 'Extra Cloud Computer', 'Precio': '$50/miembro/mes', 'Incluye': 'Equipo en la nube accesible desde el navegador' },
          { 'Plan': 'Extra modelos OpenWork', 'Precio': '$10/usuario/mes', 'Incluye': 'Inferencia gestionada, sin claves' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**OpenWork encaja con quien quiere un agente de escritorio de código abierto para sus propios archivos y aporta su propio acceso a modelos.**',
        ],
        items: [
          'Personas que quieren un agente que trabaje con archivos locales y que usan con gusto sus propias claves de API o ejecutan Ollama.',
          'Equipos que ya usan skills y servidores MCP y quieren compartirlos desde un solo lugar, con opción de alojarlo por cuenta propia.',
          'Personas que quieren probar la vía de migración del fabricante desde una configuración de Claude Cowork.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Límites y lo que no pudimos verificar',
        content: [
          '**OpenWork encaja mal en algunas situaciones, y varios detalles siguen sin verificarse.**',
        ],
        items: [
          'No encaja: quien necesite una pila totalmente con licencia MIT que incluya el plano de control de equipo, que usa la EE License aparte.',
          'No encaja: quien necesite funciones que el fabricante lista como «próximamente», como asignar tareas desde el móvil, o quien necesite tareas programadas más allá de Alpha.',
          'Sin verificar: versiones mínimas del sistema operativo y necesidades de RAM, disco y GPU. Ninguna aparece en las páginas leídas, y el rendimiento de modelos locales con Ollama no se ha medido.',
          'Sin verificar: la auditoría SOC 2 Tipo II que la página de inicio del fabricante dice completada. PromptQuorum no leyó ningún informe.',
          'Sin verificar: el respaldo de Y Combinator, que procede solo de la página de inicio del fabricante.',
          'Sin verificar: si la dirección de San Francisco de la política de privacidad y los términos es la sede principal. La política se rige por la ley de EE. UU.',
          'Sin verificar: no hay fichas en tiendas de aplicaciones, así que no hay valoraciones de tienda.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenWork frente a las alternativas',
        itemHeadings: true,
        content: [
          '**OpenWork es una de varias apps de agentes centradas en archivos y herramientas locales. PromptQuorum no la ha comparado en la práctica con las alternativas.** Las notas siguientes proceden de las fichas del directorio de PromptQuorum para cada herramienta.',
        ],
        columns: ['Herramienta', 'Indicado en las fuentes'],
        rows: [
          { 'Herramienta': 'OpenWork', 'Indicado en las fuentes': 'App de escritorio MIT; Mac, Windows, Linux; sobre OpenCode' },
          { 'Herramienta': 'OpenCode', 'Indicado en las fuentes': 'MIT; agente de terminal, 75+ proveedores; OpenWork se basa en él' },
          { 'Herramienta': 'Goose', 'Indicado en las fuentes': 'Apache-2.0; escritorio y CLI; Linux Foundation' },
          { 'Herramienta': 'Atomic Agent', 'Indicado en las fuentes': 'MIT; agente local de línea de comandos con llama.cpp' },
          { 'Herramienta': 'Open Interpreter', 'Indicado en las fuentes': 'Apache 2.0; permite que un LLM local controle tu equipo' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puede OpenWork funcionar totalmente sin conexión con modelos locales?',
            a: 'El README dice que puedes ejecutar modelos locales con Ollama o cualquier servidor compatible con OpenAI y que tus archivos se quedan en local. No dice si todas las funciones sirven sin conexión: el MCP de OpenWork, compartir en equipo y las funciones en la nube necesitan red e inicio de sesión.',
          },
          {
            q: '¿Este OpenWork es lo mismo que el paquete de npm u otras apps llamadas Openwork?',
            a: 'No. Una pull request en el repositorio del fabricante dice que el paquete de npm llamado openwork es un proyecto no relacionado, y un blog de terceros menciona otra app llamada Openwork de otra empresa. Esta reseña trata la app de escritorio de Different AI, Inc. en [openworklabs.com](https://openworklabs.com).',
          },
          {
            q: '¿Puedo trasladar mi configuración de Claude Cowork a OpenWork?',
            a: 'El fabricante dice que las skills, los plugins compatibles con Claude y los servidores MCP se pueden trasladar y publica una guía de migración que los mueve con un solo prompt. PromptQuorum no ha probado la migración, así que comprueba el resultado con tu propia configuración.',
          },
          {
            q: '¿Puedo usar OpenWork desde Claude Code o Codex sin la app de escritorio?',
            a: 'Sí, según el README: añades el MCP de OpenWork a Codex, Claude Code, Cursor, OpenCode u otro cliente MCP con un comando o una entrada de configuración. Tu cliente abre entonces un navegador para que inicies sesión y elijas tu organización de OpenWork. Según el README, la app de escritorio no es necesaria para esto.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**OpenWork merece una prueba si quieres un agente de escritorio de código abierto para tus propios archivos y puedes elegir y pagar tu propio acceso a modelos.**',
          'Sobre el papel ofrece una app de escritorio MIT gratuita, más de 50 proveedores de modelos, compatibilidad con Ollama, skills y servidores MCP compartidos y una vía de alojamiento propio para equipos. El desarrollo es activo, con cinco versiones entre el 3 y el 18 de noviembre de 2026.',
          'Las contrapartidas son reales. Varias funciones están en Alpha o anunciadas, el plano de control de equipo usa otra licencia de código disponible, y los requisitos del sistema y el rendimiento con modelos locales no están verificados. PromptQuorum no ha probado la app. Pruébala primero con copias de archivos no sensibles.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de OpenWork](https://openworklabs.com) — descripción del fabricante de funciones, tabla comparativa y planes, comprobado el 18 de noviembre de 2026.',
          '[Página de descarga](https://openworklabs.com/download) — descargas por sistema y versión actual, comprobado el 18 de noviembre de 2026.',
          '[Página de precios](https://openworklabs.com/pricing) — planes, precios, extras y nota de licencia, comprobado el 18 de noviembre de 2026.',
          '[Política de privacidad](https://openworklabs.com/privacy) — dirección de la empresa, tratamiento de datos de la app de escritorio, subencargados y ley aplicable, comprobado el 18 de noviembre de 2026.',
          '[Términos de uso](https://openworklabs.com/terms) — declaración sobre telemetría y ley aplicable, comprobado el 18 de noviembre de 2026.',
          '[Términos de suscripción](https://openworklabs.com/terms/subscription) — dirección de contacto de la empresa, comprobado el 18 de noviembre de 2026.',
          '[Repositorio de OpenWork en GitHub](https://github.com/different-ai/openwork) — repositorio, último commit y descripción del proyecto, comprobado el 18 de noviembre de 2026.',
          '[README de OpenWork](https://github.com/different-ai/openwork#readme) — modelos, separación de licencias, configuración de MCP y compatibilidad con Ollama, comprobado el 18 de noviembre de 2026.',
          '[Versión v0.18.68](https://github.com/different-ai/openwork/releases/tag/v0.18.68) — versión, fecha, archivos y nota de versión, comprobado el 18 de noviembre de 2026.',
          '[Versiones de GitHub](https://github.com/different-ai/openwork/releases) — historial de versiones usado para el ritmo de publicación, comprobado el 18 de noviembre de 2026.',
          '[Reseña de andrew.ooo](https://andrew.ooo/posts/openwork-open-source-claude-cowork-alternative-review/) — comentarios de terceros sobre la licencia y la capa de capacidades alojada, agosto de 2026, comprobado el 18 de noviembre de 2026.',
          '[Pull request 5385](https://github.com/different-ai/openwork/pull/5385) — nota de que el paquete de npm llamado openwork es otro proyecto, comprobado el 18 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de OpenCode](/es/power-local-llm/opencode-review) — agente de programación de código abierto para terminal con más de 75 proveedores de modelos, incluidos modelos locales.',
          '[Reseña de Goose](/es/power-local-llm/goose-review) — agente de IA local para programación, automatización y flujos de trabajo — gobernado por la Linux Foundation.',
          '[Reseña de Atomic Agent](/es/power-local-llm/atomic-agent-review) — agente de IA local que navega, edita archivos y ejecuta comandos de shell mediante llama.cpp.',
          '[Reseña de Open Interpreter](/es/power-local-llm/open-interpreter-review) — permite que un LLM local controle tu equipo y ejecute código.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openwork-review-hero-fr.webp',
    title: 'Test d\'OpenWork : agent IA de bureau open source pour vos fichiers',
    seoTitle: 'Test d\'OpenWork : agent IA de bureau open source gratuit',
    intro:
      'OpenWork est une application de bureau gratuite pour macOS, Windows et Linux dans laquelle des agents IA travaillent sur vos propres fichiers. Elle repose sur OpenCode et se connecte à des modèles cloud avec vos propres clés ou à des modèles locaux via Ollama. Ce test s\'appuie sur les pages de l\'éditeur, le dépôt GitHub et ses versions, ainsi que sur des articles publiés, vérifiés le 18 novembre 2026. PromptQuorum n\'a pas testé l\'application en pratique.',
    metaDescription:
      'OpenWork est une appli de bureau gratuite d\'agents IA basée sur OpenCode, avec vos clés de modèles ou Ollama. Licence, tarifs, confidentialité et limites.',
    twitterDescription:
      'OpenWork est une appli de bureau gratuite, sous licence MIT, pour des agents IA sur vos fichiers, avec vos modèles ou Ollama. Les fonctions d\'équipe sont payantes et sous une autre licence.',
    audience:
      'Travailleurs du savoir, développeurs et équipes qui évaluent un agent IA de bureau open source travaillant sur des fichiers locaux avec leur propre accès aux modèles',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenWork',
    targetKeywords: [
      'test OpenWork',
      'OpenWork IA',
      'OpenWork alternative Claude Cowork',
      'OpenWork prix',
      'OpenWork licence',
      'OpenWork Ollama',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenWork est une application de bureau gratuite et open source pour macOS, Windows et Linux, dans laquelle des agents IA travaillent sur vos propres fichiers, avec vos propres clés de modèles ou des modèles locaux via Ollama.** L\'application de bureau est sous licence MIT, tandis que le plan de contrôle pour les équipes est à code disponible et payant au-delà de cinq utilisateurs.',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce qu\'OpenWork et à qui s\'adresse-t-il ?',
        answer:
          'OpenWork est une application de bureau dans laquelle des agents IA lisent et modifient des fichiers sur votre ordinateur, construite sur l\'agent OpenCode. Elle convient à ceux qui cherchent une alternative open source à une application d\'agent d\'un seul éditeur et qui peuvent fournir eux-mêmes leur accès aux modèles.',
        bullets: [
          'Plateformes : macOS (Apple Silicon et Intel), Windows (x64, ARM64) et Linux (x64, ARM64).',
          'Prix : application de bureau gratuite ; OpenWork Cloud Team à partir de 10 $ par utilisateur et par mois.',
          'Licence : MIT pour l\'application de bureau ; une licence distincte à code disponible pour le dossier ee/.',
          'Modèles : plus de 50 fournisseurs via OpenCode, vos propres clés ou des modèles locaux via Ollama.',
          'Éditeur : Different AI, Inc., exerçant sous le nom OpenWork, San Francisco.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Présentation', anchor: 'overview' },
      { label: 'Comment l\'obtenir', anchor: 'get-it' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Confidentialité et flux de données', anchor: 'privacy' },
      { label: 'Tarifs et licence', anchor: 'pricing' },
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
            text: 'OpenWork est une application de bureau gratuite et open source dans laquelle des agents IA travaillent sur les fichiers de votre propre ordinateur, construite sur OpenCode et ouverte aux modèles cloud ou locaux.',
          },
          {
            type: 'plain-terms',
            text: 'Imaginez une fenêtre de discussion capable de lire, créer et modifier vos documents et d\'utiliser des outils, tandis que vous choisissez quel modèle d\'IA fait le travail de réflexion. Selon l\'éditeur, vos fichiers restent sur votre machine, mais les requêtes partent chez le fournisseur de modèle que vous choisissez.',
          },
        ],
        items: [
          'Selon la page de téléchargement de l\'éditeur, aucun compte OpenWork n\'est nécessaire pour démarrer.',
          'Selon l\'éditeur, compétences, plugins compatibles Claude et serveurs MCP se partagent avec des collègues en un clic.',
          'L\'éditeur indique que certaines fonctions sont en Alpha ou « bientôt disponibles », notamment les tâches planifiées et l\'attribution de tâches depuis un téléphone.',
          'Les versions se succèdent tous les quelques jours : v0.18.64 le 3 novembre 2026 jusqu\'à v0.18.68 le 18 novembre 2026.',
          'PromptQuorum n\'a pas testé l\'application, et l\'éditeur n\'indique aucune configuration matérielle requise.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Un agent qui modifie des fichiers et utilise des outils peut changer ou supprimer des données. Commencez avec des copies de vos fichiers, vérifiez ce qu\'il fait et renseignez-vous sur la façon dont votre fournisseur de modèle traite les requêtes envoyées. Ces informations sont générales et ne constituent pas un avis juridique.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Présentation',
        content: [
          '**OpenWork est une application de bureau qui permet à des agents IA de travailler sur les fichiers de votre propre ordinateur ; son éditeur la présente comme une alternative open source à Claude Cowork et à Codex.**',
          'L\'application est publiée par Different AI, Inc., exerçant sous le nom OpenWork. Sa politique de confidentialité donne une adresse à San Francisco, en Californie, et la page d\'accueil de l\'éditeur indique un soutien de Y Combinator. La version 0.18.68 est sortie le 18 novembre 2026 et le dépôt a reçu un commit le même jour : le développement se poursuit et aucun avertissement de projet abandonné ne s\'applique.',
          'Selon le README, OpenWork repose sur OpenCode et fonctionne avec plus de 50 fournisseurs de modèles : vos propres clés API, une connexion ChatGPT ou des modèles locaux via Ollama ou n\'importe quel serveur compatible OpenAI.',
          'Pour les équipes, l\'éditeur décrit des compétences, des plugins et des serveurs MCP partagés, ainsi qu\'un point d\'accès MCP qui permet à des agents comme Codex, Claude Code et Cursor de réutiliser la même configuration. Ces descriptions sont des déclarations de l\'éditeur. PromptQuorum n\'a pas exécuté l\'application et n\'a mesuré ni sa vitesse, ni sa précision, ni sa consommation de ressources.',
          'Le nom est partagé avec d\'autres produits. Une pull request dans le dépôt de l\'éditeur indique que le paquet npm nommé openwork est un projet sans rapport, et un blog tiers mentionne une autre application Openwork d\'une autre entreprise.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Comment l\'obtenir',
        content: [
          '**OpenWork s\'installe avec un téléchargement classique par système depuis la page de téléchargement de l\'éditeur, et, selon l\'éditeur, aucun compte n\'est nécessaire pour démarrer.**',
          'La version GitHub v0.18.68 liste des fichiers .dmg pour macOS (Apple Silicon et Intel), des installateurs .exe pour Windows (x64 et ARM64) et des fichiers AppImage et tar.gz pour Linux (x64 et ARM64). La note de version de l\'éditeur indique que les installateurs Windows sont signés avec Microsoft Artifact Signing. La version contient aussi des builds cloud et entreprise distincts qui exigent une connexion ; ce test porte sur l\'application publique.',
        ],
        columns: ['Plateforme', 'Comment l\'obtenir'],
        rows: [
          { 'Plateforme': '[macOS](https://openworklabs.com/download)', 'Comment l\'obtenir': 'Télécharger le .dmg (Apple Silicon ou Intel)' },
          { 'Plateforme': '[Windows](https://openworklabs.com/download)', 'Comment l\'obtenir': 'Télécharger l\'installateur .exe (x64 ou ARM64)' },
          { 'Plateforme': '[Linux](https://openworklabs.com/download)', 'Comment l\'obtenir': 'AppImage ou tar.gz (x64 ou ARM64)' },
          { 'Plateforme': '[GitHub](https://github.com/different-ai/openwork/releases)', 'Comment l\'obtenir': 'Tous les builds et notes de version' },
          { 'Plateforme': '[Site web](https://openworklabs.com)', 'Comment l\'obtenir': 'Site officiel, tarifs et documentation' },
          { 'Plateforme': '[Politique de confidentialité](https://openworklabs.com/privacy)', 'Comment l\'obtenir': 'Politique de confidentialité de l\'éditeur' },
        ],
        note: 'Les pages lues n\'indiquent ni version minimale du système, ni RAM, ni espace disque. Rejoindre une équipe demande de se connecter après l\'installation.',
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**OpenWork associe une application de bureau de discussion et d\'automatisation à des outils de partage pour les équipes.** Tous les éléments ci-dessous sont des déclarations de l\'éditeur issues du site, du README et de la page des tarifs, sauf mention contraire.',
        ],
        items: [
          'Discussion, bibliothèque et automatisations sur vos propres fichiers, dans une application de bureau sans compte.',
          'Choix du modèle via OpenCode : plus de 50 fournisseurs, vos propres clés API, une connexion ChatGPT ou des modèles locaux via Ollama ou tout serveur compatible OpenAI.',
          'Compétences, plugins compatibles Claude et serveurs MCP, avec un guide de migration pour ceux qui déplacent une configuration depuis Claude Cowork.',
          'Automatisation du navigateur, que le tableau comparatif de l\'éditeur indique comme incluse.',
          'Tâches planifiées, que l\'éditeur signale comme Alpha.',
          'Pas encore disponible selon l\'éditeur : attribuer des tâches depuis un téléphone (Dispatch) et des tableaux de bord qui se mettent à jour automatiquement (live artifacts), tous deux marqués « bientôt ».',
          'Partage en équipe : compétences, plugins et serveurs MCP regroupés dans un lien que les collègues importent en un clic.',
          'Un serveur MCP OpenWork qui permet à Codex, Claude Code, Cursor, OpenCode ou un autre client MCP de réutiliser vos compétences et connexions ; le client ouvre un navigateur pour la connexion.',
          'OpenWork Den, un plan de contrôle permettant aux organisations de gérer les accès, les politiques de poste et les places de marché de compétences ; le plan de contrôle pour les équipes peut être auto-hébergé.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**En mode bureau, l\'éditeur indique que vos fichiers restent sur votre machine et que les requêtes partent directement chez le fournisseur de modèle que vous choisissez.**',
          'La politique de confidentialité indique que l\'application de bureau ne collecte, ne suit ni ne transmet de données lors d\'une utilisation normale. La seule exception est un rapport de bogue que vous lancez vous-même, qui joint des données de diagnostic comme les versions de l\'application et d\'OpenCode et votre système d\'exploitation. Les conditions d\'utilisation disent la même chose sur l\'analyse et la télémétrie. Les fournisseurs de modèles que vous connectez avec vos propres clés ne sont pas des sous-traitants de l\'éditeur : leurs propres conditions et règles de conservation s\'appliquent.',
          'D\'autres flux de données existent. Le site utilise l\'analyse PostHog. Le service cloud collecte une télémétrie opérationnelle limitée qui, selon la politique, ne contient ni informations personnelles ni contenu d\'utilisateur. Les agents cloud hébergés sont facultatifs et tournent sur l\'infrastructure isolée de l\'éditeur. Le MCP OpenWork est un serveur distant exploité par l\'éditeur et demande une connexion.',
          'Un test tiers d\'août 2026 relève qu\'avec le MCP OpenWork, l\'authentification et la recherche de capacités passent par les serveurs de l\'éditeur même lorsque l\'inférence est locale.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Tarifs et licence',
        content: [
          '**L\'application de bureau est gratuite ; les offres payantes ajoutent des fonctions d\'équipe via OpenWork Cloud ou un plan de contrôle auto-hébergé.** Les prix sont en dollars américains, hors taxes, et proviennent de la page des tarifs au 18 novembre 2026.',
          'Selon le README, tout ce qui se trouve hors du dossier ee/ est sous licence MIT, y compris l\'application de bureau. Le dossier ee/ (OpenWork Den) relève de la licence OpenWork EE License, à code disponible : un usage en production exige un abonnement, sauf gratuité jusqu\'à 5 utilisateurs, 30 jours d\'évaluation et usage toujours gratuit pour le développement et les tests. Chaque version de ee/ passe sous MIT deux ans après sa publication. Les versions antérieures restent sous la Functional Source License (FSL-1.1-MIT).',
          'Le détecteur de licence de GitHub classe le dépôt comme « Other ». Un test tiers d\'août 2026 indique que des membres de la communauté ont remarqué que certains composants avaient été relicenciés à titre commercial ; le README documente désormais cette séparation. Vérifiez la licence de la version exacte sur laquelle vous vous appuyez.',
        ],
        columns: ['Offre', 'Prix', 'Inclus'],
        rows: [
          { 'Offre': 'Application de bureau', 'Prix': 'Gratuit', 'Inclus': 'Licence MIT, vos propres clés' },
          { 'Offre': 'Cloud Free', 'Prix': '0 $, jusqu\'à 5 utilisateurs', 'Inclus': 'Support communautaire' },
          { 'Offre': 'Team', 'Prix': '10 $/utilisateur/mois', 'Inclus': 'SSO/SAML, place de marché, automatisations cloud' },
          { 'Offre': 'Enterprise', 'Prix': 'Sur mesure', 'Inclus': 'SCIM, journal d\'audit, marque blanche' },
          { 'Offre': 'Option Cloud Computer', 'Prix': '50 $/membre/mois', 'Inclus': 'Ordinateur cloud accessible via le navigateur' },
          { 'Offre': 'Option modèles OpenWork', 'Prix': '10 $/utilisateur/mois', 'Inclus': 'Inférence gérée, sans clés' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        content: [
          '**OpenWork convient à ceux qui veulent un agent de bureau open source pour leurs propres fichiers et qui apportent leur propre accès aux modèles.**',
        ],
        items: [
          'Ceux qui veulent un agent travaillant sur des fichiers locaux et qui utilisent volontiers leurs propres clés API ou font tourner Ollama.',
          'Les équipes qui utilisent déjà compétences et serveurs MCP et veulent les partager depuis un seul endroit, avec une option d\'auto-hébergement.',
          'Ceux qui veulent essayer la voie de migration proposée par l\'éditeur depuis une configuration Claude Cowork.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Limites et ce que nous n\'avons pas pu vérifier',
        content: [
          '**OpenWork convient mal dans certaines situations, et plusieurs points restent non vérifiés.**',
        ],
        items: [
          'Ne convient pas : ceux qui ont besoin d\'une pile entièrement sous licence MIT, plan de contrôle d\'équipe compris, car celui-ci relève de la licence EE distincte.',
          'Ne convient pas : ceux qui ont besoin de fonctions que l\'éditeur annonce comme « bientôt », par exemple attribuer des tâches depuis un téléphone, ou qui exigent des tâches planifiées au-delà du stade Alpha.',
          'Non vérifié : versions minimales du système, RAM, espace disque et GPU. Aucun de ces éléments n\'apparaît sur les pages lues, et les performances des modèles locaux via Ollama n\'ont pas été mesurées.',
          'Non vérifié : l\'audit SOC 2 Type II que la page d\'accueil de l\'éditeur dit terminé. PromptQuorum n\'a lu aucun rapport.',
          'Non vérifié : le soutien de Y Combinator, qui provient uniquement de la page d\'accueil de l\'éditeur.',
          'Non vérifié : si l\'adresse de San Francisco de la politique de confidentialité et des conditions est le siège principal. La politique est régie par le droit américain.',
          'Non vérifié : il n\'existe aucune fiche sur un magasin d\'applications, donc aucune note de magasin.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenWork face aux alternatives',
        itemHeadings: true,
        content: [
          '**OpenWork est l\'une de plusieurs applications d\'agents centrées sur les fichiers et outils locaux. PromptQuorum ne l\'a pas comparée en pratique aux alternatives.** Les notes ci-dessous proviennent des fiches de l\'annuaire PromptQuorum pour chaque outil.',
        ],
        columns: ['Outil', 'Noté dans les sources'],
        rows: [
          { 'Outil': 'OpenWork', 'Noté dans les sources': 'Appli de bureau MIT ; Mac, Windows, Linux ; basée sur OpenCode' },
          { 'Outil': 'OpenCode', 'Noté dans les sources': 'MIT ; agent terminal, 75+ fournisseurs ; OpenWork s\'appuie dessus' },
          { 'Outil': 'Goose', 'Noté dans les sources': 'Apache-2.0 ; bureau et CLI ; Linux Foundation' },
          { 'Outil': 'Atomic Agent', 'Noté dans les sources': 'MIT ; agent en ligne de commande local avec llama.cpp' },
          { 'Outil': 'Open Interpreter', 'Noté dans les sources': 'Apache 2.0 ; laisse un LLM local piloter votre ordinateur' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'OpenWork peut-il fonctionner entièrement hors ligne avec des modèles locaux ?',
            a: 'Le README indique que vous pouvez exécuter des modèles locaux via Ollama ou tout serveur compatible OpenAI et que vos fichiers restent locaux. Il ne dit pas si toutes les fonctions marchent hors ligne : le MCP OpenWork, le partage en équipe et les fonctions cloud demandent le réseau et une connexion.',
          },
          {
            q: 'Cet OpenWork est-il le même que le paquet npm ou que d\'autres applications nommées Openwork ?',
            a: 'Non. Une pull request dans le dépôt de l\'éditeur indique que le paquet npm nommé openwork est un projet sans rapport, et un blog tiers mentionne une autre application Openwork d\'une autre entreprise. Ce test porte sur l\'application de bureau de Different AI, Inc. à [openworklabs.com](https://openworklabs.com).',
          },
          {
            q: 'Puis-je déplacer ma configuration Claude Cowork vers OpenWork ?',
            a: 'L\'éditeur indique que compétences, plugins compatibles Claude et serveurs MCP se transposent et publie un guide de migration qui les déplace en une seule requête. PromptQuorum n\'a pas essayé la migration ; vérifiez donc le résultat sur votre propre configuration.',
          },
          {
            q: 'Puis-je utiliser OpenWork depuis Claude Code ou Codex sans l\'application de bureau ?',
            a: 'Oui, selon le README : vous ajoutez le MCP OpenWork à Codex, Claude Code, Cursor, OpenCode ou un autre client MCP avec une commande ou une entrée de configuration. Votre client ouvre alors un navigateur pour vous connecter et choisir votre organisation OpenWork. Selon le README, l\'application de bureau n\'est pas nécessaire pour cela.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**OpenWork vaut l\'essai si vous voulez un agent de bureau open source pour vos propres fichiers et que vous pouvez choisir et payer votre propre accès aux modèles.**',
          'Sur le papier, il propose une application de bureau MIT gratuite, plus de 50 fournisseurs de modèles, la prise en charge d\'Ollama, des compétences et serveurs MCP partagés et une voie d\'auto-hébergement pour les équipes. Le développement est actif, avec cinq versions entre le 3 et le 18 novembre 2026.',
          'Les compromis sont réels. Plusieurs fonctions sont en Alpha ou annoncées, le plan de contrôle d\'équipe relève d\'une autre licence à code disponible, et la configuration requise comme les performances des modèles locaux ne sont pas vérifiées. PromptQuorum n\'a pas testé l\'application. Essayez-la d\'abord sur des copies de fichiers non sensibles.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site OpenWork](https://openworklabs.com) — description de l\'éditeur des fonctions, du tableau comparatif et des offres, vérifié le 18 novembre 2026.',
          '[Page de téléchargement](https://openworklabs.com/download) — téléchargements par système et version actuelle, vérifié le 18 novembre 2026.',
          '[Page des tarifs](https://openworklabs.com/pricing) — offres, prix, options et mention de licence, vérifié le 18 novembre 2026.',
          '[Politique de confidentialité](https://openworklabs.com/privacy) — adresse de l\'entreprise, traitement des données de l\'application de bureau, sous-traitants et droit applicable, vérifié le 18 novembre 2026.',
          '[Conditions d\'utilisation](https://openworklabs.com/terms) — déclaration sur la télémétrie et droit applicable, vérifié le 18 novembre 2026.',
          '[Conditions d\'abonnement](https://openworklabs.com/terms/subscription) — adresse de contact de l\'entreprise, vérifié le 18 novembre 2026.',
          '[Dépôt GitHub d\'OpenWork](https://github.com/different-ai/openwork) — dépôt, dernier commit et description du projet, vérifié le 18 novembre 2026.',
          '[README d\'OpenWork](https://github.com/different-ai/openwork#readme) — modèles, séparation des licences, configuration MCP et prise en charge d\'Ollama, vérifié le 18 novembre 2026.',
          '[Version v0.18.68](https://github.com/different-ai/openwork/releases/tag/v0.18.68) — version, date, fichiers et note de version, vérifié le 18 novembre 2026.',
          '[Versions GitHub](https://github.com/different-ai/openwork/releases) — historique des versions utilisé pour le rythme de publication, vérifié le 18 novembre 2026.',
          '[Test andrew.ooo](https://andrew.ooo/posts/openwork-open-source-claude-cowork-alternative-review/) — commentaires d\'un tiers sur la licence et la couche de capacités hébergée, août 2026, vérifié le 18 novembre 2026.',
          '[Pull request 5385](https://github.com/different-ai/openwork/pull/5385) — note indiquant que le paquet npm nommé openwork est un autre projet, vérifié le 18 novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test d\'OpenCode](/fr/power-local-llm/opencode-review) — agent de code open source pour le terminal, avec plus de 75 fournisseurs de modèles, dont des modèles locaux.',
          '[Test de Goose](/fr/power-local-llm/goose-review) — agent IA local pour le code, l\'automatisation et les workflows — gouverné par la Linux Foundation.',
          '[Test d\'Atomic Agent](/fr/power-local-llm/atomic-agent-review) — agent IA local qui navigue sur le web, modifie des fichiers et exécute des commandes shell via llama.cpp.',
          '[Test d\'Open Interpreter](/fr/power-local-llm/open-interpreter-review) — laisse un LLM local piloter votre ordinateur et exécuter du code.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openwork-review-hero-ja.webp',
    title: 'OpenWorkレビュー：手元のファイルで動くオープンソースのAIエージェントアプリ',
    seoTitle: 'OpenWorkレビュー：無料のオープンソースAIエージェントアプリ',
    intro:
      'OpenWorkは、AIエージェントが手元のファイルを扱う、macOS・Windows・Linux向けの無料デスクトップアプリです。OpenCodeをベースにしており、自分のキーでクラウドモデルに、またはOllama経由でローカルモデルに接続できます。このレビューは、提供元のページ、GitHubリポジトリとリリース、公開されている記事をもとに2026年11月18日に確認した内容です。PromptQuorumはこのアプリを実際には試していません。',
    metaDescription:
      'OpenWorkはOpenCodeをベースにした無料のAIエージェントアプリで、自分のモデルキーやOllamaを使えます。ライセンス、料金、プライバシー、制約を解説します。',
    twitterDescription:
      'OpenWorkは手元のファイル向けの無料・MITライセンスのAIエージェントアプリ。自分のモデルやOllamaを利用可能。チーム機能は有料で別ライセンスです。',
    audience:
      '自分のモデル利用環境でローカルファイルを扱うオープンソースのデスクトップAIエージェントを検討している、ナレッジワーカー、開発者、チーム',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenWork',
    targetKeywords: [
      'OpenWork レビュー',
      'OpenWork AI',
      'OpenWork Claude Cowork 代替',
      'OpenWork 料金',
      'OpenWork ライセンス',
      'OpenWork Ollama',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenWorkは、AIエージェントが手元のファイルを扱う、macOS・Windows・Linux向けの無料のオープンソース・デスクトップアプリで、自分のモデルキーまたはOllama経由のローカルモデルで動かせます。** デスクトップアプリはMITライセンスで、チーム向けコントロールプレーンはソース公開型で、6人以上では有料です。',
    quickAnswerTop: {
      ja: {
        question: 'OpenWorkとは何で、誰に向いていますか？',
        answer:
          'OpenWorkは、AIエージェントがパソコン上のファイルを読み書きするデスクトップアプリで、エージェントのOpenCodeをベースにしています。単一ベンダーのエージェントアプリに代わるオープンソースの選択肢を求め、モデル利用環境を自分で用意できる人に向いています。',
        bullets: [
          '対応環境：macOS（Apple SiliconとIntel）、Windows（x64、ARM64）、Linux（x64、ARM64）。',
          '価格：デスクトップアプリは無料。OpenWork Cloud Teamは1ユーザー月額$10から。',
          'ライセンス：デスクトップアプリはMIT。ee/フォルダーは別のソース公開型ライセンス。',
          'モデル：OpenCode経由で50以上のプロバイダー、自分のキー、またはOllama経由のローカルモデル。',
          '提供元：Different AI, Inc.（OpenWorkとして事業展開）、サンフランシスコ。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: 'tldr' },
      { label: '概要', anchor: 'overview' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '機能', anchor: 'features' },
      { label: 'プライバシーとデータの流れ', anchor: 'privacy' },
      { label: '料金とライセンス', anchor: 'pricing' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '制約と確認できなかったこと', anchor: 'who-should-not-use' },
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
            text: 'OpenWorkは、AIエージェントが自分のパソコン上のファイルを扱う無料のオープンソース・デスクトップアプリで、OpenCodeをベースにクラウドモデルとローカルモデルの両方に対応しています。',
          },
          {
            type: 'plain-terms',
            text: '文書を読み、作成し、編集し、ツールも使えるチャット画面だと考えてください。どのAIモデルに考えさせるかは自分で選びます。提供元によると、ファイルは手元のパソコンに残りますが、プロンプトは選んだモデルプロバイダーに送られます。',
          },
        ],
        items: [
          '提供元のダウンロードページによると、使い始めるのにOpenWorkのアカウントは不要です。',
          '提供元によると、スキル、Claude互換プラグイン、MCPサーバーはワンクリックでチームメイトと共有できます。',
          '提供元は、スケジュールタスクやスマートフォンからのタスク割り当てなど、一部の機能をAlphaまたは近日公開としています。',
          'リリースは数日おきです。2026年11月3日のv0.18.64から2026年11月18日のv0.18.68まで続いています。',
          'PromptQuorumはこのアプリを試しておらず、提供元はハードウェア要件を示していません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'ファイルを編集しツールを使うエージェントは、データを変更したり削除したりする可能性があります。まずファイルのコピーで試し、動作を確認し、選んだモデルプロバイダーが送信したプロンプトをどう扱うかも確認してください。これは一般的な情報であり、法的助言ではありません。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**OpenWorkは、AIエージェントが自分のパソコン上のファイルを扱うためのデスクトップアプリで、提供元はClaude CoworkやCodexに代わるオープンソースの選択肢と位置づけています。**',
          'このアプリはDifferent AI, Inc.（OpenWorkとして事業展開）が提供しています。プライバシーポリシーにはカリフォルニア州サンフランシスコの住所が記載され、提供元のトップページにはY Combinatorの支援を受けていると書かれています。バージョン0.18.68は2026年11月18日に公開され、リポジトリにも同日コミットがあったため、開発は継続しており、放置プロジェクトの警告は該当しません。',
          'READMEによると、OpenWorkはOpenCodeをベースにし、50以上のモデルプロバイダーに対応します。自分のAPIキー、ChatGPTのサインイン、またはOllamaやOpenAI互換サーバー経由のローカルモデルを使えます。',
          'チーム向けに、提供元は共有スキル、プラグイン、MCPサーバーに加え、Codex、Claude Code、Cursorなどのエージェントが同じ設定を再利用できるMCPエンドポイントを説明しています。これらは提供元の説明です。PromptQuorumはアプリを実行しておらず、速度、精度、リソース使用量も測定していません。',
          '同じ名前の別の製品もあります。提供元リポジトリのプルリクエストは、openworkという名前のnpmパッケージは無関係のプロジェクトだと述べており、第三者のブログは別企業のOpenworkというアプリにも触れています。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**OpenWorkは、提供元のダウンロードページからOSごとに通常のダウンロードでインストールでき、提供元によると使い始めるのにアカウントは不要です。**',
          'GitHubのv0.18.68リリースには、macOS向けの.dmg（Apple SiliconとIntel）、Windows向けの.exeインストーラー（x64とARM64）、Linux向けのAppImageとtar.gz（x64とARM64）が並んでいます。提供元のリリースノートによると、WindowsインストーラーはMicrosoft Artifact Signingで署名されています。リリースにはサインインが必要なクラウド版とエンタープライズ版のビルドも別にありますが、このレビューは公開版アプリを対象にしています。',
        ],
        columns: ['プラットフォーム', '入手方法'],
        rows: [
          { 'プラットフォーム': '[macOS](https://openworklabs.com/download)', '入手方法': '.dmgをダウンロード（Apple SiliconまたはIntel）' },
          { 'プラットフォーム': '[Windows](https://openworklabs.com/download)', '入手方法': '.exeインストーラーをダウンロード（x64またはARM64）' },
          { 'プラットフォーム': '[Linux](https://openworklabs.com/download)', '入手方法': 'AppImageまたはtar.gz（x64またはARM64）' },
          { 'プラットフォーム': '[GitHub](https://github.com/different-ai/openwork/releases)', '入手方法': '全ビルドとリリースノート' },
          { 'プラットフォーム': '[ウェブサイト](https://openworklabs.com)', '入手方法': '公式サイト、料金、ドキュメント' },
          { 'プラットフォーム': '[プライバシーポリシー](https://openworklabs.com/privacy)', '入手方法': '提供元のプライバシーポリシー' },
        ],
        note: '確認したページには、対応OSの最低バージョン、RAM、ディスク容量の記載はありません。チームに参加する場合は、インストール後にサインインが求められます。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**OpenWorkは、チャットと自動化のデスクトップアプリに、チーム向けの共有ツールを組み合わせたものです。** 以下の項目は、特に断りがない限り、ウェブサイト、README、料金ページにある提供元の説明です。',
        ],
        items: [
          'アカウント不要のデスクトップアプリで、手元のファイルを対象にしたチャット、ライブラリ、自動化。',
          'OpenCode経由のモデル選択：50以上のプロバイダー、自分のAPIキー、ChatGPTのサインイン、またはOllamaやOpenAI互換サーバー経由のローカルモデル。',
          'スキル、Claude互換プラグイン、MCPサーバー。Claude Coworkの設定を移す人向けの移行ガイドあり。',
          'ブラウザー自動化。提供元の比較表では搭載とされています。',
          'スケジュールタスク。提供元はAlphaとしています。',
          '提供元によると未提供：スマートフォンからのタスク割り当て（Dispatch）と自動更新ダッシュボード（live artifacts）。どちらも近日公開とされています。',
          'チーム共有：スキル、プラグイン、MCPサーバーを1つのリンクにまとめ、チームメイトがワンクリックで取り込めます。',
          'Codex、Claude Code、Cursor、OpenCodeなどのMCPクライアントがスキルや接続を再利用できるOpenWork MCPサーバー。クライアントはサインインのためにブラウザーを開きます。',
          'OpenWork Den：組織がアクセス、デスクトップポリシー、スキルのマーケットプレイスを管理するためのコントロールプレーン。チーム向けコントロールプレーンはセルフホストできます。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**デスクトップモードでは、ファイルは手元のパソコンに残り、プロンプトは選んだモデルプロバイダーに直接送られると提供元は述べています。**',
          'プライバシーポリシーによると、デスクトップアプリは通常の利用中にデータを収集、追跡、送信しません。唯一の例外は自分で開始するバグ報告で、アプリとOpenCodeのバージョンやOSなどの診断情報が添付されます。利用規約も分析とテレメトリについて同じ内容を述べています。自分のキーで接続するモデルプロバイダーは提供元の再委託先ではないため、そのプロバイダー自身の規約と保持ルールが適用されます。',
          'ほかにもデータの経路があります。ウェブサイトはPostHogの分析を使っています。クラウドサービスは限定的な運用テレメトリを収集し、ポリシーによれば個人情報やユーザーコンテンツは含まれません。ホスト型のクラウドワーカーは任意で、提供元のサンドボックス化されたインフラ上で動きます。OpenWork MCPは提供元が運用するリモートサーバーで、サインインが必要です。',
          '2026年8月の第三者レビューは、OpenWork MCPを使う場合、推論がローカルでも認証と機能の検索は提供元のサーバーを経由すると指摘しています。',
        ],
      },
      pricing: {
        id: 'pricing',
        title: '料金とライセンス',
        content: [
          '**デスクトップアプリは無料です。有料プランは、OpenWork Cloudまたはセルフホストのコントロールプレーンでチーム機能を追加します。** 価格は米ドルで税別、2026年11月18日時点の料金ページによるものです。',
          'READMEによると、ee/フォルダー以外はデスクトップアプリを含めてMITライセンスです。ee/フォルダー（OpenWork Den）はソース公開型のOpenWork EE Licenseで、本番利用にはサブスクリプションが必要ですが、5ユーザーまでは無料、30日間の評価は無料、開発とテストは常に無料です。ee/の各リリースは公開から2年後にMITへ移行します。それ以前のバージョンはFunctional Source License（FSL-1.1-MIT）のままです。',
          'GitHubのライセンス検出では、このリポジトリは「Other」と表示されます。2026年8月の第三者レビューは、一部のコンポーネントが商用ライセンスに変更されたことにコミュニティが気づいたと述べており、READMEは現在この分割を記載しています。依存するバージョンごとにライセンスを確認してください。',
        ],
        columns: ['プラン', '価格', '含まれる内容'],
        rows: [
          { 'プラン': 'デスクトップアプリ', '価格': '無料', '含まれる内容': 'MITライセンス、自分のキー' },
          { 'プラン': 'Cloud Free', '価格': '$0、5ユーザーまで', '含まれる内容': 'コミュニティサポート' },
          { 'プラン': 'Team', '価格': '$10/ユーザー/月', '含まれる内容': 'SSO/SAML、マーケットプレイス、クラウド自動化' },
          { 'プラン': 'Enterprise', '価格': '個別見積', '含まれる内容': 'SCIM、監査ログ、ホワイトラベル' },
          { 'プラン': 'Cloud Computerアドオン', '価格': '$50/メンバー/月', '含まれる内容': 'ブラウザーから使うクラウドPC' },
          { 'プラン': 'OpenWork modelsアドオン', '価格': '$10/ユーザー/月', '含まれる内容': 'マネージド推論、キー不要' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**OpenWorkは、手元のファイルを扱うオープンソースのデスクトップエージェントを求め、モデル利用環境を自分で用意できる人に向いています。**',
        ],
        items: [
          'ローカルファイルで動くエージェントがほしく、自分のAPIキーを使うかOllamaを動かすことに抵抗がない人。',
          'すでにスキルやMCPサーバーを使っており、1か所から共有したいチーム（セルフホストも選べます）。',
          'Claude Coworkの設定から、提供元の移行手順を試してみたい人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '制約と確認できなかったこと',
        content: [
          '**OpenWorkが向かない場面もあり、いくつかの点は未確認です。**',
        ],
        items: [
          '向かない人：チーム向けコントロールプレーンを含めて完全にMITライセンスのスタックが必要な人。コントロールプレーンは別のEE Licenseです。',
          '向かない人：スマートフォンからのタスク割り当てなど、提供元が近日公開としている機能が必要な人、またはスケジュールタスクにAlpha以上の完成度が必要な人。',
          '未確認：対応OSの最低バージョン、RAM、ディスク、GPUの要件。確認したページには記載がなく、Ollama経由のローカルモデルの性能も測定していません。',
          '未確認：提供元のトップページが完了したと述べるSOC 2 Type II監査。PromptQuorumはレポートを読んでいません。',
          '未確認：Y Combinatorの支援。提供元のトップページの記載のみです。',
          '未確認：プライバシーポリシーと利用規約にあるサンフランシスコの住所が本社かどうか。ポリシーは米国法に準拠します。',
          '未確認：アプリストアの掲載ページがないため、ストアの評価もありません。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenWorkと代替ツールの比較',
        itemHeadings: true,
        content: [
          '**OpenWorkは、手元のファイルとツールを軸にしたエージェントアプリの1つです。PromptQuorumは代替ツールと実際に比較してはいません。** 以下のメモは、各ツールのPromptQuorumディレクトリ項目によるものです。',
        ],
        columns: ['ツール', '情報源での記載'],
        rows: [
          { 'ツール': 'OpenWork', '情報源での記載': 'MITのデスクトップアプリ、Mac・Windows・Linux、OpenCode基盤' },
          { 'ツール': 'OpenCode', '情報源での記載': 'MIT、ターミナル型エージェント、75以上のプロバイダー、OpenWorkの基盤' },
          { 'ツール': 'Goose', '情報源での記載': 'Apache-2.0、デスクトップとCLI、Linux Foundation' },
          { 'ツール': 'Atomic Agent', '情報源での記載': 'MIT、llama.cppを使うローカル優先のCLIエージェント' },
          { 'ツール': 'Open Interpreter', '情報源での記載': 'Apache 2.0、ローカルLLMにPCを操作させる' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'OpenWorkはローカルモデルで完全にオフライン動作しますか？',
            a: 'READMEは、OllamaやOpenAI互換サーバー経由でローカルモデルを動かせ、ファイルはローカルに残ると述べています。すべての機能がオフラインで動くかどうかは書かれていません。OpenWork MCP、チーム共有、クラウド機能にはネットワークとサインインが必要です。',
          },
          {
            q: 'このOpenWorkは、npmパッケージやOpenworkという名前の他のアプリと同じものですか？',
            a: 'いいえ。提供元リポジトリのプルリクエストは、openworkという名前のnpmパッケージは無関係のプロジェクトだと述べており、第三者のブログは別企業のOpenworkというアプリにも触れています。このレビューは、[openworklabs.com](https://openworklabs.com)のDifferent AI, Inc.によるデスクトップアプリを対象にしています。',
          },
          {
            q: 'Claude Coworkの設定をOpenWorkに移せますか？',
            a: '提供元は、スキル、Claude互換プラグイン、MCPサーバーは引き継げると述べ、1つのプロンプトで移す移行ガイドを公開しています。PromptQuorumは移行を試していないため、結果は自分の環境で確認してください。',
          },
          {
            q: 'デスクトップアプリなしで、Claude CodeやCodexからOpenWorkを使えますか？',
            a: 'はい、READMEによると、1つのコマンドまたは設定項目でOpenWork MCPをCodex、Claude Code、Cursor、OpenCodeなどのMCPクライアントに追加します。クライアントがブラウザーを開き、サインインしてOpenWorkの組織を選びます。READMEによると、この用途にデスクトップアプリは必須ではありません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**OpenWorkは、手元のファイルを扱うオープンソースのデスクトップエージェントがほしく、モデル利用環境を自分で選んで支払える人なら、試す価値があります。**',
          '資料上は、無料のMITデスクトップアプリ、50以上のモデルプロバイダー、Ollama対応、共有スキルとMCPサーバー、チーム向けのセルフホスト手段があります。開発は活発で、2026年11月3日から18日の間に5回のリリースがありました。',
          'トレードオフもあります。複数の機能がAlphaまたは発表段階で、チーム向けコントロールプレーンは別のソース公開型ライセンスであり、システム要件とローカルモデルの性能は未確認です。PromptQuorumはこのアプリを試していません。まず機密性のないファイルのコピーで試してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[OpenWorkのウェブサイト](https://openworklabs.com) — 提供元による機能、比較表、プランの説明, 2026年11月18日に確認.',
          '[ダウンロードページ](https://openworklabs.com/download) — OSごとのダウンロードと現在のバージョン, 2026年11月18日に確認.',
          '[料金ページ](https://openworklabs.com/pricing) — プラン、価格、アドオン、ライセンスの注記, 2026年11月18日に確認.',
          '[プライバシーポリシー](https://openworklabs.com/privacy) — 会社の住所、デスクトップアプリのデータの扱い、再委託先、準拠法, 2026年11月18日に確認.',
          '[利用規約](https://openworklabs.com/terms) — テレメトリに関する記述と準拠法, 2026年11月18日に確認.',
          '[サブスクリプション規約](https://openworklabs.com/terms/subscription) — 会社の連絡先住所, 2026年11月18日に確認.',
          '[OpenWorkのGitHubリポジトリ](https://github.com/different-ai/openwork) — リポジトリ、最新コミット、プロジェクトの説明, 2026年11月18日に確認.',
          '[OpenWorkのREADME](https://github.com/different-ai/openwork#readme) — モデル、ライセンスの分割、MCPの設定、Ollama対応, 2026年11月18日に確認.',
          '[リリースv0.18.68](https://github.com/different-ai/openwork/releases/tag/v0.18.68) — バージョン、日付、ファイル、リリースノート, 2026年11月18日に確認.',
          '[GitHubのリリース](https://github.com/different-ai/openwork/releases) — リリース頻度の確認に使ったリリース履歴, 2026年11月18日に確認.',
          '[andrew.ooのレビュー](https://andrew.ooo/posts/openwork-open-source-claude-cowork-alternative-review/) — ライセンスとホスト型の機能レイヤーに関する第三者のコメント（2026年8月）, 2026年11月18日に確認.',
          '[プルリクエスト5385](https://github.com/different-ai/openwork/pull/5385) — openworkという名前のnpmパッケージは別のプロジェクトだという注記, 2026年11月18日に確認.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[OpenCodeレビュー](/ja/power-local-llm/opencode-review) — ローカルモデルを含む75以上のプロバイダーに対応する、ターミナル中心のオープンソースのコーディングエージェント。',
          '[Gooseレビュー](/ja/power-local-llm/goose-review) — コーディング、自動化、ワークフロー向けのローカル優先AIエージェント。Linux Foundationが運営。',
          '[Atomic Agentレビュー](/ja/power-local-llm/atomic-agent-review) — ブラウジング、ファイル編集、llama.cpp経由のシェルコマンド実行を行うローカル優先AIエージェント。',
          '[Open Interpreterレビュー](/ja/power-local-llm/open-interpreter-review) — ローカルLLMにパソコンを操作させ、コードを実行させます。',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openwork-review-hero-pt.webp',
    title: 'Análise do OpenWork: agente de IA de desktop de código aberto para seus arquivos',
    seoTitle: 'Análise do OpenWork: agente de IA de desktop gratuito',
    intro:
      'O OpenWork é um app de desktop gratuito para macOS, Windows e Linux em que agentes de IA trabalham com seus próprios arquivos. Ele é criado sobre o OpenCode e se conecta a modelos na nuvem com suas próprias chaves ou a modelos locais via Ollama. Esta análise se baseia nas páginas do fabricante, no repositório do GitHub com suas versões e em cobertura publicada, conferidos em 18 de novembro de 2026. A PromptQuorum não testou o app na prática.',
    metaDescription:
      'O OpenWork é um app de desktop gratuito de agentes de IA sobre o OpenCode, com suas chaves de modelos ou Ollama. Licença, preços, privacidade e limites.',
    twitterDescription:
      'O OpenWork é um app de desktop gratuito, com licença MIT, para agentes de IA sobre seus arquivos, com seus modelos ou Ollama. Os recursos de equipe são pagos e têm outra licença.',
    audience:
      'Profissionais do conhecimento, desenvolvedores e equipes que avaliam um agente de IA de desktop de código aberto que trabalha com arquivos locais e acesso próprio a modelos',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenWork',
    targetKeywords: [
      'análise do OpenWork',
      'OpenWork IA',
      'OpenWork alternativa ao Claude Cowork',
      'OpenWork preços',
      'OpenWork licença',
      'OpenWork Ollama',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O OpenWork é um app de desktop gratuito e de código aberto para macOS, Windows e Linux em que agentes de IA trabalham com seus próprios arquivos, usando suas próprias chaves de modelos ou modelos locais via Ollama.** O app de desktop tem licença MIT, enquanto o plano de controle para equipes é de código disponível e pago a partir de seis usuários.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o OpenWork e para quem ele serve?',
        answer:
          'O OpenWork é um app de desktop em que agentes de IA leem e alteram arquivos no seu computador, criado sobre o agente OpenCode. Ele serve para quem busca uma alternativa de código aberto a um app de agentes de um único fornecedor e pode trazer o próprio acesso a modelos.',
        bullets: [
          'Plataformas: macOS (Apple Silicon e Intel), Windows (x64, ARM64) e Linux (x64, ARM64).',
          'Preço: app de desktop gratuito; OpenWork Cloud Team a partir de $10 por usuário por mês.',
          'Licença: MIT para o app de desktop; uma licença separada de código disponível para a pasta ee/.',
          'Modelos: mais de 50 provedores via OpenCode, suas próprias chaves ou modelos locais via Ollama.',
          'Fabricante: Different AI, Inc., que atua como OpenWork, San Francisco.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: 'tldr' },
      { label: 'Visão geral', anchor: 'overview' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Privacidade e fluxo de dados', anchor: 'privacy' },
      { label: 'Preços e licença', anchor: 'pricing' },
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
            text: 'O OpenWork é um app de desktop gratuito e de código aberto em que agentes de IA trabalham com arquivos do seu próprio computador, criado sobre o OpenCode e aberto a modelos na nuvem ou locais.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em uma janela de chat que pode ler, criar e editar seus documentos e usar ferramentas, enquanto você escolhe qual modelo de IA faz o raciocínio. Segundo o fabricante, seus arquivos ficam na sua máquina, mas os prompts vão para o provedor de modelos que você escolher.',
          },
        ],
        items: [
          'Segundo a página de download do fabricante, não é preciso uma conta do OpenWork para começar.',
          'Segundo o fabricante, skills, plugins compatíveis com o Claude e servidores MCP podem ser compartilhados com colegas com um clique.',
          'O fabricante marca alguns recursos como Alpha ou «em breve», entre eles tarefas agendadas e atribuir tarefas pelo celular.',
          'As versões saem a cada poucos dias: v0.18.64 em 3 de novembro de 2026 até v0.18.68 em 18 de novembro de 2026.',
          'A PromptQuorum não testou o app, e o fabricante não informa requisitos de hardware.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Um agente que edita arquivos e usa ferramentas pode alterar ou apagar dados. Comece com cópias dos seus arquivos, revise o que ele faz e confira como o seu provedor de modelos trata os prompts que você envia. Esta é uma informação geral, não aconselhamento jurídico.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O OpenWork é um app de desktop que permite que agentes de IA trabalhem com arquivos do seu próprio computador; o fabricante o apresenta como uma alternativa de código aberto ao Claude Cowork e ao Codex.**',
          'O app é feito pela Different AI, Inc., que atua como OpenWork. A política de privacidade informa um endereço em San Francisco, Califórnia, e a página inicial do fabricante cita o apoio da Y Combinator. A versão 0.18.68 foi lançada em 18 de novembro de 2026 e o repositório teve um commit no mesmo dia, então o desenvolvimento continua e nenhum aviso de projeto abandonado se aplica.',
          'Segundo o README, o OpenWork é criado sobre o OpenCode e funciona com mais de 50 provedores de modelos: suas próprias chaves de API, um login do ChatGPT ou modelos locais via Ollama ou qualquer servidor compatível com a OpenAI.',
          'Para equipes, o fabricante descreve skills, plugins e servidores MCP compartilhados, além de um endpoint MCP que permite que agentes como Codex, Claude Code e Cursor reutilizem a mesma configuração. Essas descrições são afirmações do fabricante. A PromptQuorum não executou o app e não mediu sua velocidade, precisão nem uso de recursos.',
          'O nome é compartilhado com outros produtos. Um pull request no repositório do fabricante diz que o pacote npm chamado openwork é um projeto sem relação, e um blog de terceiros menciona outro app chamado Openwork, de outra empresa.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O OpenWork é instalado com um download comum por sistema, na página de download do fabricante, e, segundo o fabricante, não é preciso conta para começar.**',
          'A versão v0.18.68 no GitHub lista arquivos .dmg para macOS (Apple Silicon e Intel), instaladores .exe para Windows (x64 e ARM64) e arquivos AppImage e tar.gz para Linux (x64 e ARM64). A nota de versão do fabricante diz que os instaladores do Windows são assinados com o Microsoft Artifact Signing. A versão também traz builds de nuvem e corporativos separados, que exigem login; esta análise trata do app público.',
        ],
        columns: ['Plataforma', 'Como obter'],
        rows: [
          { 'Plataforma': '[macOS](https://openworklabs.com/download)', 'Como obter': 'Baixar o .dmg (Apple Silicon ou Intel)' },
          { 'Plataforma': '[Windows](https://openworklabs.com/download)', 'Como obter': 'Baixar o instalador .exe (x64 ou ARM64)' },
          { 'Plataforma': '[Linux](https://openworklabs.com/download)', 'Como obter': 'AppImage ou tar.gz (x64 ou ARM64)' },
          { 'Plataforma': '[GitHub](https://github.com/different-ai/openwork/releases)', 'Como obter': 'Todas as builds e notas de versão' },
          { 'Plataforma': '[Site](https://openworklabs.com)', 'Como obter': 'Site oficial, preços e documentação' },
          { 'Plataforma': '[Política de privacidade](https://openworklabs.com/privacy)', 'Como obter': 'Política de privacidade do fabricante' },
        ],
        note: 'As páginas lidas não informam versão mínima do sistema operacional, RAM nem espaço em disco. Entrar em uma equipe pede login depois da instalação.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O OpenWork combina um app de desktop de chat e automação com ferramentas de compartilhamento para equipes.** Todos os itens abaixo são afirmações do fabricante, tiradas do site, do README e da página de preços, salvo indicação em contrário.',
        ],
        items: [
          'Chat, biblioteca e automações sobre seus próprios arquivos, em um app de desktop que não precisa de conta.',
          'Escolha de modelo via OpenCode: mais de 50 provedores, suas próprias chaves de API, um login do ChatGPT ou modelos locais via Ollama ou qualquer servidor compatível com a OpenAI.',
          'Skills, plugins compatíveis com o Claude e servidores MCP, com um guia de migração para quem leva uma configuração do Claude Cowork.',
          'Automação de navegador, que a tabela comparativa do fabricante indica como incluída.',
          'Tarefas agendadas, que o fabricante marca como Alpha.',
          'Ainda não disponível segundo o fabricante: atribuir tarefas pelo celular (Dispatch) e painéis que se atualizam sozinhos (live artifacts), ambos marcados como «em breve».',
          'Compartilhamento em equipe: skills, plugins e servidores MCP reunidos em um link que os colegas importam com um clique.',
          'Um servidor MCP do OpenWork que permite que Codex, Claude Code, Cursor, OpenCode ou outro cliente MCP reutilizem suas skills e conexões; o cliente abre um navegador para o login.',
          'O OpenWork Den, um plano de controle para organizações gerenciarem acessos, políticas de desktop e marketplaces de skills; o plano de controle para equipes pode ser hospedado por conta própria.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**No modo desktop, o fabricante diz que seus arquivos ficam na sua máquina e que os prompts vão direto para o provedor de modelos que você escolher.**',
          'A política de privacidade diz que o app de desktop não coleta, rastreia nem transmite dados durante o uso normal. A única exceção é um relatório de erro que você mesmo inicia, que anexa dados de diagnóstico, como as versões do app e do OpenCode e o seu sistema operacional. Os termos dizem o mesmo sobre análise e telemetria. Os provedores de modelos que você conecta com suas próprias chaves não são suboperadores do fabricante, então valem os termos e as regras de retenção deles.',
          'Existem outros caminhos de dados. O site usa análise do PostHog. O serviço em nuvem coleta telemetria operacional limitada que, segundo a política, não contém informações pessoais nem conteúdo do usuário. Os workers hospedados na nuvem são opcionais e rodam na infraestrutura isolada do fabricante. O MCP do OpenWork é um servidor remoto operado pelo fabricante e exige login.',
          'Uma análise de terceiros de agosto de 2026 observa que, com o MCP do OpenWork, a autenticação e a busca de capacidades passam pelos servidores do fabricante mesmo quando a inferência é local.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Preços e licença',
        content: [
          '**O app de desktop é gratuito; os planos pagos acrescentam recursos de equipe pelo OpenWork Cloud ou por um plano de controle hospedado por conta própria.** Os preços estão em dólares americanos, sem impostos, e vêm da página de preços de 18 de novembro de 2026.',
          'Segundo o README, tudo fora da pasta ee/ tem licença MIT, inclusive o app de desktop. A pasta ee/ (OpenWork Den) usa a OpenWork EE License, de código disponível: o uso em produção exige assinatura, exceto que é gratuito para até 5 usuários, gratuito para avaliar por 30 dias e sempre gratuito para desenvolvimento e testes. Cada versão de ee/ passa a MIT dois anos após a publicação. As versões anteriores continuam sob a Functional Source License (FSL-1.1-MIT).',
          'O detector de licenças do GitHub classifica o repositório como «Other». Uma análise de terceiros de agosto de 2026 diz que membros da comunidade notaram que alguns componentes foram relicenciados comercialmente; o README agora documenta a divisão. Confira a licença da versão exata de que você depende.',
        ],
        columns: ['Plano', 'Preço', 'Inclui'],
        rows: [
          { 'Plano': 'App de desktop', 'Preço': 'Grátis', 'Inclui': 'Licença MIT, suas próprias chaves' },
          { 'Plano': 'Cloud Free', 'Preço': '$0, até 5 usuários', 'Inclui': 'Suporte da comunidade' },
          { 'Plano': 'Team', 'Preço': '$10/usuário/mês', 'Inclui': 'SSO/SAML, marketplace, automações na nuvem' },
          { 'Plano': 'Enterprise', 'Preço': 'Sob consulta', 'Inclui': 'SCIM, log de auditoria, marca própria' },
          { 'Plano': 'Extra Cloud Computer', 'Preço': '$50/membro/mês', 'Inclui': 'Computador na nuvem acessível pelo navegador' },
          { 'Plano': 'Extra modelos OpenWork', 'Preço': '$10/usuário/mês', 'Inclui': 'Inferência gerenciada, sem chaves' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O OpenWork serve para quem quer um agente de desktop de código aberto para os próprios arquivos e traz o próprio acesso a modelos.**',
        ],
        items: [
          'Pessoas que querem um agente que trabalhe com arquivos locais e usam de bom grado suas próprias chaves de API ou rodam o Ollama.',
          'Equipes que já usam skills e servidores MCP e querem compartilhá-los de um só lugar, com opção de hospedagem própria.',
          'Pessoas que querem experimentar o caminho de migração do fabricante a partir de uma configuração do Claude Cowork.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Limites e o que não conseguimos verificar',
        content: [
          '**O OpenWork serve mal em algumas situações, e vários detalhes continuam sem verificação.**',
        ],
        items: [
          'Não serve: quem precisa de uma pilha totalmente com licença MIT, incluindo o plano de controle de equipe, que usa a EE License separada.',
          'Não serve: quem precisa de recursos que o fabricante lista como «em breve», como atribuir tarefas pelo celular, ou quem precisa de tarefas agendadas além do estágio Alpha.',
          'Não verificado: versões mínimas do sistema operacional e necessidades de RAM, disco e GPU. Nenhuma consta nas páginas lidas, e o desempenho de modelos locais via Ollama não foi medido.',
          'Não verificado: a auditoria SOC 2 Tipo II que a página inicial do fabricante diz estar concluída. A PromptQuorum não leu nenhum relatório.',
          'Não verificado: o apoio da Y Combinator, que vem apenas da página inicial do fabricante.',
          'Não verificado: se o endereço de San Francisco da política de privacidade e dos termos é a sede principal. A política é regida pela lei dos EUA.',
          'Não verificado: não há páginas em lojas de aplicativos, portanto não há avaliações de loja.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenWork versus alternativas',
        itemHeadings: true,
        content: [
          '**O OpenWork é um de vários apps de agentes centrados em arquivos e ferramentas locais. A PromptQuorum não o comparou na prática com as alternativas.** As notas abaixo vêm das fichas do diretório da PromptQuorum para cada ferramenta.',
        ],
        columns: ['Ferramenta', 'Registrado nas fontes'],
        rows: [
          { 'Ferramenta': 'OpenWork', 'Registrado nas fontes': 'App de desktop MIT; Mac, Windows, Linux; sobre o OpenCode' },
          { 'Ferramenta': 'OpenCode', 'Registrado nas fontes': 'MIT; agente de terminal, 75+ provedores; o OpenWork se baseia nele' },
          { 'Ferramenta': 'Goose', 'Registrado nas fontes': 'Apache-2.0; desktop e CLI; Linux Foundation' },
          { 'Ferramenta': 'Atomic Agent', 'Registrado nas fontes': 'MIT; agente local de linha de comando com llama.cpp' },
          { 'Ferramenta': 'Open Interpreter', 'Registrado nas fontes': 'Apache 2.0; deixa um LLM local controlar o computador' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O OpenWork roda totalmente offline com modelos locais?',
            a: 'O README diz que você pode rodar modelos locais via Ollama ou qualquer servidor compatível com a OpenAI e que seus arquivos ficam locais. Ele não diz se todos os recursos funcionam offline: o MCP do OpenWork, o compartilhamento em equipe e os recursos de nuvem precisam de rede e login.',
          },
          {
            q: 'Este OpenWork é o mesmo que o pacote npm ou outros apps chamados Openwork?',
            a: 'Não. Um pull request no repositório do fabricante diz que o pacote npm chamado openwork é um projeto sem relação, e um blog de terceiros menciona outro app chamado Openwork, de outra empresa. Esta análise trata do app de desktop da Different AI, Inc., em [openworklabs.com](https://openworklabs.com).',
          },
          {
            q: 'Posso levar minha configuração do Claude Cowork para o OpenWork?',
            a: 'O fabricante diz que skills, plugins compatíveis com o Claude e servidores MCP podem ser migrados e publica um guia de migração que os move com um único prompt. A PromptQuorum não testou a migração, então confira o resultado na sua própria configuração.',
          },
          {
            q: 'Posso usar o OpenWork pelo Claude Code ou pelo Codex sem o app de desktop?',
            a: 'Sim, segundo o README: você adiciona o MCP do OpenWork ao Codex, Claude Code, Cursor, OpenCode ou outro cliente MCP com um comando ou uma entrada de configuração. Seu cliente então abre um navegador para você fazer login e escolher sua organização no OpenWork. Segundo o README, o app de desktop não é necessário para isso.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O OpenWork vale o teste se você quer um agente de desktop de código aberto para os próprios arquivos e pode escolher e pagar o próprio acesso a modelos.**',
          'No papel, ele oferece um app de desktop MIT gratuito, mais de 50 provedores de modelos, suporte ao Ollama, skills e servidores MCP compartilhados e um caminho de hospedagem própria para equipes. O desenvolvimento é ativo, com cinco versões entre 3 e 18 de novembro de 2026.',
          'As trocas são reais. Vários recursos estão em Alpha ou anunciados, o plano de controle de equipe usa outra licença de código disponível, e os requisitos de sistema e o desempenho com modelos locais não foram verificados. A PromptQuorum não testou o app. Experimente primeiro com cópias de arquivos não sensíveis.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do OpenWork](https://openworklabs.com) — descrição do fabricante sobre recursos, tabela comparativa e planos, conferido em 18 de novembro de 2026.',
          '[Página de download](https://openworklabs.com/download) — downloads por sistema e versão atual, conferido em 18 de novembro de 2026.',
          '[Página de preços](https://openworklabs.com/pricing) — planos, preços, extras e nota de licença, conferido em 18 de novembro de 2026.',
          '[Política de privacidade](https://openworklabs.com/privacy) — endereço da empresa, tratamento de dados do app de desktop, suboperadores e lei aplicável, conferido em 18 de novembro de 2026.',
          '[Termos de uso](https://openworklabs.com/terms) — declaração sobre telemetria e lei aplicável, conferido em 18 de novembro de 2026.',
          '[Termos de assinatura](https://openworklabs.com/terms/subscription) — endereço de contato da empresa, conferido em 18 de novembro de 2026.',
          '[Repositório do OpenWork no GitHub](https://github.com/different-ai/openwork) — repositório, último commit e descrição do projeto, conferido em 18 de novembro de 2026.',
          '[README do OpenWork](https://github.com/different-ai/openwork#readme) — modelos, divisão de licenças, configuração do MCP e suporte ao Ollama, conferido em 18 de novembro de 2026.',
          '[Versão v0.18.68](https://github.com/different-ai/openwork/releases/tag/v0.18.68) — versão, data, arquivos e nota de versão, conferido em 18 de novembro de 2026.',
          '[Versões do GitHub](https://github.com/different-ai/openwork/releases) — histórico de versões usado para o ritmo de lançamentos, conferido em 18 de novembro de 2026.',
          '[Análise do andrew.ooo](https://andrew.ooo/posts/openwork-open-source-claude-cowork-alternative-review/) — comentários de terceiros sobre a licença e a camada de capacidades hospedada, agosto de 2026, conferido em 18 de novembro de 2026.',
          '[Pull request 5385](https://github.com/different-ai/openwork/pull/5385) — nota de que o pacote npm chamado openwork é outro projeto, conferido em 18 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do OpenCode](/pt/power-local-llm/opencode-review) — agente de programação de código aberto para terminal com mais de 75 provedores de modelos, inclusive modelos locais.',
          '[Análise do Goose](/pt/power-local-llm/goose-review) — agente de IA local para programação, automação e fluxos de trabalho — governado pela Linux Foundation.',
          '[Análise do Atomic Agent](/pt/power-local-llm/atomic-agent-review) — agente de IA local que navega, edita arquivos e executa comandos de shell via llama.cpp.',
          '[Análise do Open Interpreter](/pt/power-local-llm/open-interpreter-review) — deixa um LLM local controlar o seu computador e executar código.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openwork-review-hero-zh.webp',
    title: 'OpenWork 评测：处理您本地文件的开源桌面 AI 智能体应用',
    seoTitle: 'OpenWork 评测：免费开源的桌面 AI 智能体应用',
    intro:
      'OpenWork 是一款免费的桌面应用，支持 macOS、Windows 和 Linux，让 AI 智能体处理您自己的文件。它基于 OpenCode 构建，可使用您自己的密钥连接云端模型，也可通过 Ollama 使用本地模型。本评测依据厂商页面、GitHub 仓库及其发布版本和已发布的报道，核查日期为 2026 年 11 月 18 日。PromptQuorum 没有实际测试过该应用。',
    metaDescription:
      'OpenWork 是基于 OpenCode 的免费桌面 AI 智能体应用，可用您自己的模型密钥或 Ollama。本文说明许可证、价格、隐私与局限。',
    twitterDescription:
      'OpenWork 是面向本地文件的免费 MIT 许可桌面 AI 智能体应用，可用自带模型或 Ollama。团队功能收费且使用另一许可证。',
    audience:
      '正在评估可用自有模型处理本地文件的开源桌面 AI 智能体的知识工作者、开发者和团队',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenWork',
    targetKeywords: [
      'OpenWork 评测',
      'OpenWork AI',
      'OpenWork Claude Cowork 替代',
      'OpenWork 价格',
      'OpenWork 许可证',
      'OpenWork Ollama',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenWork 是一款免费开源的桌面应用，支持 macOS、Windows 和 Linux，让 AI 智能体处理您自己的文件，可使用您自己的模型密钥，或通过 Ollama 使用本地模型。** 桌面应用采用 MIT 许可证，而团队控制平面为源码可见许可，超过五个用户后需付费。',
    quickAnswerTop: {
      zh: {
        question: 'OpenWork 是什么，适合谁用？',
        answer:
          'OpenWork 是一款桌面应用，AI 智能体可在其中读取和修改您电脑上的文件，基于 OpenCode 智能体构建。它适合想要单一厂商智能体应用的开源替代品、并且能自行提供模型访问权限的人。',
        bullets: [
          '平台：macOS（Apple Silicon 和 Intel）、Windows（x64、ARM64）和 Linux（x64、ARM64）。',
          '价格：桌面应用免费；OpenWork Cloud Team 每用户每月 $10 起。',
          '许可证：桌面应用为 MIT；ee/ 文件夹使用另一种源码可见许可证。',
          '模型：通过 OpenCode 支持 50 多个提供商、您自己的密钥，或通过 Ollama 使用本地模型。',
          '厂商：Different AI, Inc.（以 OpenWork 名义经营），旧金山。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: '概览', anchor: 'overview' },
      { label: '如何获取', anchor: 'get-it' },
      { label: '功能', anchor: 'features' },
      { label: '隐私与数据流向', anchor: 'privacy' },
      { label: '价格与许可证', anchor: 'pricing' },
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
            text: 'OpenWork 是一款免费开源的桌面应用，让 AI 智能体处理您自己电脑上的文件，基于 OpenCode 构建，支持云端或本地模型。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作一个能读取、创建和编辑文档并使用工具的聊天窗口，由您选择哪个 AI 模型来思考。据厂商称，文件留在您的电脑上，但提示词会发送给您选择的模型提供商。',
          },
        ],
        items: [
          '据厂商下载页面，开始使用无需 OpenWork 账号。',
          '据厂商称，技能、兼容 Claude 的插件和 MCP 服务器可一键与队友共享。',
          '厂商将部分功能标为 Alpha 或即将推出，包括定时任务和从手机分配任务。',
          '发布频率很高，每隔几天一次：2026 年 11 月 3 日的 v0.18.64 到 2026 年 11 月 18 日的 v0.18.68。',
          'PromptQuorum 没有测试过该应用，厂商也没有给出硬件要求。',
        ],
        callouts: [
          {
            type: 'note',
            text: '会编辑文件并使用工具的智能体可能更改或删除数据。请先用文件副本试用，检查它的操作，并确认您选择的模型提供商如何处理您发送的提示词。以上为一般性信息，不构成法律意见。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**OpenWork 是一款让 AI 智能体处理您自己电脑上文件的桌面应用，厂商将其定位为 Claude Cowork 和 Codex 的开源替代品。**',
          '该应用由 Different AI, Inc.（以 OpenWork 名义经营）开发。其隐私政策给出了加利福尼亚州旧金山的地址，厂商首页称获得 Y Combinator 支持。0.18.68 版本于 2026 年 11 月 18 日发布，仓库当天也有提交，因此开发仍在进行，不适用项目停更警告。',
          '据 README，OpenWork 基于 OpenCode 构建，支持 50 多个模型提供商：您自己的 API 密钥、ChatGPT 登录，或通过 Ollama 或任何兼容 OpenAI 的服务器使用本地模型。',
          '面向团队，厂商介绍了共享的技能、插件和 MCP 服务器，以及一个 MCP 端点，让 Codex、Claude Code 和 Cursor 等智能体复用同一套配置。这些都是厂商的说法。PromptQuorum 没有运行该应用，也没有测量其速度、准确度或资源占用。',
          '这个名称也被其他产品使用。厂商仓库中的一个拉取请求称，名为 openwork 的 npm 包是一个无关的项目，一家第三方博客还提到另一家公司的另一款名为 Openwork 的应用。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '如何获取',
        content: [
          '**OpenWork 可从厂商下载页面按操作系统正常下载安装，据厂商称开始使用无需账号。**',
          'GitHub 上的 v0.18.68 发布列出了 macOS 的 .dmg 文件（Apple Silicon 和 Intel）、Windows 的 .exe 安装程序（x64 和 ARM64），以及 Linux 的 AppImage 和 tar.gz 文件（x64 和 ARM64）。厂商的发布说明称，Windows 安装程序使用 Microsoft Artifact Signing 签名。该发布还包含需要登录的独立云端版和企业版构建；本评测针对公开版应用。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          { '平台': '[macOS](https://openworklabs.com/download)', '获取方式': '下载 .dmg（Apple Silicon 或 Intel）' },
          { '平台': '[Windows](https://openworklabs.com/download)', '获取方式': '下载 .exe 安装程序（x64 或 ARM64）' },
          { '平台': '[Linux](https://openworklabs.com/download)', '获取方式': 'AppImage 或 tar.gz（x64 或 ARM64）' },
          { '平台': '[GitHub](https://github.com/different-ai/openwork/releases)', '获取方式': '所有构建和发布说明' },
          { '平台': '[官网](https://openworklabs.com)', '获取方式': '官方网站、价格和文档' },
          { '平台': '[隐私政策](https://openworklabs.com/privacy)', '获取方式': '厂商的隐私政策' },
        ],
        note: '所读页面没有给出最低操作系统版本、内存或磁盘要求。加入团队时，安装后会要求登录。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**OpenWork 把聊天与自动化桌面应用同面向团队的共享工具结合在一起。** 除另有说明外，以下各项均为厂商在网站、README 和价格页面中的说法。',
        ],
        items: [
          '在无需账号的桌面应用中，对您自己的文件进行聊天、资料库和自动化。',
          '通过 OpenCode 选择模型：50 多个提供商、您自己的 API 密钥、ChatGPT 登录，或通过 Ollama 或任何兼容 OpenAI 的服务器使用本地模型。',
          '技能、兼容 Claude 的插件和 MCP 服务器，并为从 Claude Cowork 迁移配置的用户提供迁移指南。',
          '浏览器自动化，厂商的对比表将其列为已包含。',
          '定时任务，厂商标为 Alpha。',
          '据厂商称尚未提供：从手机分配任务（Dispatch）和自动刷新的仪表板（live artifacts），二者均标为即将推出。',
          '团队共享：把技能、插件和 MCP 服务器打包成一个链接，队友一键导入。',
          '一个 OpenWork MCP 服务器，让 Codex、Claude Code、Cursor、OpenCode 或其他 MCP 客户端复用您的技能和连接；客户端会打开浏览器进行登录。',
          'OpenWork Den，供组织管理访问权限、桌面策略和技能市场的控制平面；团队控制平面可以自行托管。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**据厂商称，在桌面模式下，文件留在您的电脑上，提示词直接发送给您选择的模型提供商。**',
          '隐私政策称，桌面应用在正常使用期间不会收集、跟踪或传输数据。唯一的例外是您自己发起的错误报告，它会附带诊断信息，例如应用和 OpenCode 的版本以及您的操作系统。使用条款对分析和遥测的表述相同。您用自己的密钥连接的模型提供商不是厂商的子处理方，因此适用它们自己的条款和保留规则。',
          '还存在其他数据路径。网站使用 PostHog 分析。云服务收集有限的运行遥测，政策称其不含个人信息或用户内容。托管的云端工作进程是可选的，运行在厂商的沙箱化基础设施上。OpenWork MCP 是由厂商运营的远程服务器，需要登录。',
          '2026 年 8 月的一篇第三方评测指出，使用 OpenWork MCP 时，即使推理在本地进行，身份验证和能力查询也要经过厂商的服务器。',
        ],
      },
      pricing: {
        id: 'pricing',
        title: '价格与许可证',
        content: [
          '**桌面应用免费；付费方案通过 OpenWork Cloud 或自行托管的控制平面增加团队功能。** 价格以美元计，不含税，来自 2026 年 11 月 18 日的价格页面。',
          '据 README，ee/ 文件夹之外的所有内容（包括桌面应用）均为 MIT 许可。ee/ 文件夹（OpenWork Den）使用 OpenWork EE License，这是一种源码可见许可：生产使用需要订阅，但最多 5 个用户免费、30 天评估免费，开发和测试始终免费。ee/ 的每个发布版本在发布两年后转为 MIT。早期版本仍受 Functional Source License（FSL-1.1-MIT）约束。',
          'GitHub 的许可证检测将该仓库显示为 Other。2026 年 8 月的一篇第三方评测称，社区成员注意到部分组件被改为商业许可；README 现已记录这种划分。请核对您所依赖的确切版本的许可证。',
        ],
        columns: ['方案', '价格', '包含内容'],
        rows: [
          { '方案': '桌面应用', '价格': '免费', '包含内容': 'MIT 许可证，自带密钥' },
          { '方案': 'Cloud Free', '价格': '$0，最多 5 个用户', '包含内容': '社区支持' },
          { '方案': 'Team', '价格': '$10/用户/月', '包含内容': 'SSO/SAML、市场、云端自动化' },
          { '方案': 'Enterprise', '价格': '定制', '包含内容': 'SCIM、审计日志、自有品牌' },
          { '方案': 'Cloud Computer 附加项', '价格': '$50/成员/月', '包含内容': '可在浏览器中访问的云电脑' },
          { '方案': 'OpenWork models 附加项', '价格': '$10/用户/月', '包含内容': '托管推理，无需密钥' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        content: [
          '**OpenWork 适合想要一个处理自己文件的开源桌面智能体、并能自行提供模型访问权限的人。**',
        ],
        items: [
          '想要一个处理本地文件的智能体，并乐于使用自己的 API 密钥或运行 Ollama 的人。',
          '已经在用技能和 MCP 服务器、希望从一处共享它们的团队，并可选择自行托管。',
          '想试用厂商提供的、从 Claude Cowork 配置迁移的路径的人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '局限与我们无法核实的内容',
        content: [
          '**OpenWork 在某些情况下不太合适，还有几处细节未经核实。**',
        ],
        items: [
          '不适合：需要整套（包括团队控制平面）都采用 MIT 许可的人；控制平面使用另行的 EE License。',
          '不适合：需要厂商列为即将推出的功能（如从手机分配任务）的人，或需要定时任务超出 Alpha 阶段的人。',
          '未核实：最低操作系统版本，以及内存、磁盘和 GPU 要求。所读页面均未给出，通过 Ollama 使用本地模型的性能也没有测量。',
          '未核实：厂商首页称已完成的 SOC 2 Type II 审计。PromptQuorum 没有读过报告。',
          '未核实：Y Combinator 的支持，仅来自厂商首页。',
          '未核实：隐私政策和条款中的旧金山地址是否为总部。该政策适用美国法律。',
          '未核实：没有应用商店页面，因此也没有商店评分。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenWork 与替代方案对比',
        itemHeadings: true,
        content: [
          '**OpenWork 是几款围绕本地文件和工具的智能体应用之一。PromptQuorum 没有实际将它与替代方案做对比。** 下列说明来自 PromptQuorum 目录中各工具的条目。',
        ],
        columns: ['工具', '来源中的记载'],
        rows: [
          { '工具': 'OpenWork', '来源中的记载': 'MIT 桌面应用；Mac、Windows、Linux；基于 OpenCode' },
          { '工具': 'OpenCode', '来源中的记载': 'MIT；终端型智能体，75+ 提供商；OpenWork 基于它' },
          { '工具': 'Goose', '来源中的记载': 'Apache-2.0；桌面和 CLI；Linux Foundation' },
          { '工具': 'Atomic Agent', '来源中的记载': 'MIT；使用 llama.cpp 的本地优先命令行智能体' },
          { '工具': 'Open Interpreter', '来源中的记载': 'Apache 2.0；让本地 LLM 控制您的电脑' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'OpenWork 能用本地模型完全离线运行吗？',
            a: 'README 称，您可以通过 Ollama 或任何兼容 OpenAI 的服务器运行本地模型，文件保留在本地。它没有说明是否所有功能都能离线使用：OpenWork MCP、团队共享和云端功能需要网络和登录。',
          },
          {
            q: '这个 OpenWork 与 npm 包或其他名为 Openwork 的应用是同一个吗？',
            a: '不是。厂商仓库中的一个拉取请求称，名为 openwork 的 npm 包是一个无关的项目，一家第三方博客还提到另一家公司的另一款名为 Openwork 的应用。本评测针对 Different AI, Inc. 在 [openworklabs.com](https://openworklabs.com) 提供的桌面应用。',
          },
          {
            q: '我可以把 Claude Cowork 的配置迁移到 OpenWork 吗？',
            a: '厂商称，技能、兼容 Claude 的插件和 MCP 服务器可以迁移，并发布了一份只需一条提示词即可迁移的指南。PromptQuorum 没有试过迁移，请在您自己的配置上核对结果。',
          },
          {
            q: '不用桌面应用，可以从 Claude Code 或 Codex 使用 OpenWork 吗？',
            a: '可以，据 README：用一条命令或一个配置项把 OpenWork MCP 添加到 Codex、Claude Code、Cursor、OpenCode 或其他 MCP 客户端。随后客户端会打开浏览器，供您登录并选择 OpenWork 组织。据 README，这种用法不需要桌面应用。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果您想要一个处理自己文件的开源桌面智能体，并且愿意自行选择并支付模型访问费用，OpenWork 值得一试。**',
          '从资料看，它提供免费的 MIT 桌面应用、50 多个模型提供商、Ollama 支持、共享的技能和 MCP 服务器，以及面向团队的自行托管途径。开发很活跃，2026 年 11 月 3 日至 18 日之间发布了五个版本。',
          '取舍也很明显。若干功能处于 Alpha 或仅为预告，团队控制平面采用另一种源码可见许可证，系统要求和本地模型性能均未核实。PromptQuorum 没有测试过该应用。请先用不敏感文件的副本试用。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[OpenWork 官网](https://openworklabs.com) — 厂商对功能、对比表和方案的说明, 核查于 2026 年 11 月 18 日.',
          '[下载页面](https://openworklabs.com/download) — 各操作系统的下载和当前版本, 核查于 2026 年 11 月 18 日.',
          '[价格页面](https://openworklabs.com/pricing) — 方案、价格、附加项和许可证说明, 核查于 2026 年 11 月 18 日.',
          '[隐私政策](https://openworklabs.com/privacy) — 公司地址、桌面应用的数据处理、子处理方和适用法律, 核查于 2026 年 11 月 18 日.',
          '[使用条款](https://openworklabs.com/terms) — 遥测说明和适用法律, 核查于 2026 年 11 月 18 日.',
          '[订阅条款](https://openworklabs.com/terms/subscription) — 公司联系地址, 核查于 2026 年 11 月 18 日.',
          '[OpenWork GitHub 仓库](https://github.com/different-ai/openwork) — 仓库、最近一次提交和项目说明, 核查于 2026 年 11 月 18 日.',
          '[OpenWork README](https://github.com/different-ai/openwork#readme) — 模型、许可证划分、MCP 设置和 Ollama 支持, 核查于 2026 年 11 月 18 日.',
          '[发布 v0.18.68](https://github.com/different-ai/openwork/releases/tag/v0.18.68) — 版本、日期、文件和发布说明, 核查于 2026 年 11 月 18 日.',
          '[GitHub 发布页](https://github.com/different-ai/openwork/releases) — 用于判断发布频率的发布历史, 核查于 2026 年 11 月 18 日.',
          '[andrew.ooo 评测](https://andrew.ooo/posts/openwork-open-source-claude-cowork-alternative-review/) — 第三方关于许可证和托管能力层的评论（2026 年 8 月）, 核查于 2026 年 11 月 18 日.',
          '[拉取请求 5385](https://github.com/different-ai/openwork/pull/5385) — 关于名为 openwork 的 npm 包是另一个项目的说明, 核查于 2026 年 11 月 18 日.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[OpenCode 评测](/zh/power-local-llm/opencode-review) — 以终端为主的开源编程智能体，支持 75 多个模型提供商，包括本地模型。',
          '[Goose 评测](/zh/power-local-llm/goose-review) — 面向编程、自动化和工作流的本地优先 AI 智能体，由 Linux Foundation 管理。',
          '[Atomic Agent 评测](/zh/power-local-llm/atomic-agent-review) — 通过 llama.cpp 浏览网页、编辑文件并运行 shell 命令的本地优先 AI 智能体。',
          '[Open Interpreter 评测](/zh/power-local-llm/open-interpreter-review) — 让本地 LLM 控制您的电脑并执行代码。',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openwork-review-hero-ar.webp',
    title: 'مراجعة OpenWork: تطبيق مكتبي مفتوح المصدر لوكلاء الذكاء الاصطناعي يعمل على ملفاتك',
    seoTitle: 'مراجعة OpenWork: وكيل ذكاء اصطناعي مجاني لسطح المكتب',
    intro:
      'OpenWork تطبيق مكتبي مجاني لأنظمة macOS وWindows وLinux تعمل فيه وكلاء الذكاء الاصطناعي على ملفاتك الخاصة. هو مبني على OpenCode ويتصل بنماذج سحابية بمفاتيحك الخاصة أو بنماذج محلية عبر Ollama. تستند هذه المراجعة إلى صفحات الجهة المطوّرة ومستودع GitHub وإصداراته وتغطيات منشورة، وقد روجعت في 18 نوفمبر 2026. لم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'OpenWork تطبيق مكتبي مجاني لوكلاء الذكاء الاصطناعي مبني على OpenCode، بمفاتيح نماذجك أو Ollama. نشرح الترخيص والأسعار والخصوصية والقيود والحدود التقنية.',
    twitterDescription:
      'OpenWork تطبيق مكتبي مجاني بترخيص MIT لوكلاء الذكاء الاصطناعي على ملفاتك، بنماذجك الخاصة أو Ollama. ميزات الفرق مدفوعة وبترخيص مختلف.',
    audience:
      'العاملون في المعرفة والمطورون والفرق الذين يقيّمون وكيل ذكاء اصطناعي مكتبيًا مفتوح المصدر يعمل على الملفات المحلية بوصول خاص إلى النماذج',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenWork',
    targetKeywords: [
      'مراجعة OpenWork',
      'OpenWork ذكاء اصطناعي',
      'بديل Claude Cowork OpenWork',
      'أسعار OpenWork',
      'ترخيص OpenWork',
      'OpenWork Ollama',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenWork تطبيق مكتبي مجاني ومفتوح المصدر لأنظمة macOS وWindows وLinux تعمل فيه وكلاء الذكاء الاصطناعي على ملفاتك الخاصة، بمفاتيح نماذجك أو بنماذج محلية عبر Ollama.** التطبيق المكتبي بترخيص MIT، أما مستوى التحكم الخاص بالفرق فمتاح المصدر ومدفوع بعد خمسة مستخدمين.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو OpenWork ولمن يناسب؟',
        answer:
          'OpenWork تطبيق مكتبي تقرأ فيه وكلاء الذكاء الاصطناعي ملفات حاسوبك وتعدّلها، وهو مبني على وكيل OpenCode. يناسب من يبحث عن بديل مفتوح المصدر لتطبيق وكلاء من مزوّد واحد ويستطيع توفير وصوله الخاص إلى النماذج.',
        bullets: [
          'المنصات: macOS (Apple Silicon وIntel) وWindows (x64 وARM64) وLinux (x64 وARM64).',
          'السعر: التطبيق المكتبي مجاني؛ خطة OpenWork Cloud Team تبدأ من $10 لكل مستخدم شهريًا.',
          'الترخيص: MIT للتطبيق المكتبي؛ ترخيص منفصل متاح المصدر لمجلد ee/.',
          'النماذج: أكثر من 50 مزوّدًا عبر OpenCode، أو مفاتيحك الخاصة، أو نماذج محلية عبر Ollama.',
          'الجهة المطوّرة: Different AI, Inc. التي تعمل باسم OpenWork، سان فرانسيسكو.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'نظرة عامة', anchor: 'overview' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'الخصوصية وتدفق البيانات', anchor: 'privacy' },
      { label: 'الأسعار والترخيص', anchor: 'pricing' },
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
            text: 'OpenWork تطبيق مكتبي مجاني ومفتوح المصدر تعمل فيه وكلاء الذكاء الاصطناعي على ملفات حاسوبك الخاص، مبني على OpenCode ومنفتح على النماذج السحابية والمحلية.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله نافذة محادثة تستطيع قراءة مستنداتك وإنشاءها وتعديلها واستخدام أدوات، بينما تختار أنت نموذج الذكاء الاصطناعي الذي يتولى التفكير. وفق الجهة المطوّرة، تبقى ملفاتك على جهازك، لكن الأوامر النصية تذهب إلى مزوّد النماذج الذي تختاره.',
          },
        ],
        items: [
          'وفق صفحة التنزيل لدى الجهة المطوّرة، لا حاجة إلى حساب OpenWork للبدء.',
          'تقول الجهة المطوّرة إن المهارات والإضافات المتوافقة مع Claude وخوادم MCP تُشارَك مع الزملاء بنقرة واحدة.',
          'تصف الجهة المطوّرة بعض الميزات بأنها Alpha أو «قريبًا»، ومنها المهام المجدولة وإسناد المهام من الهاتف.',
          'تصدر الإصدارات كل بضعة أيام: من v0.18.64 في 3 نوفمبر 2026 إلى v0.18.68 في 18 نوفمبر 2026.',
          'لم تختبر PromptQuorum التطبيق، ولا تذكر الجهة المطوّرة متطلبات للعتاد.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'قد يغيّر الوكيل الذي يعدّل الملفات ويستخدم الأدوات البيانات أو يحذفها. ابدأ بنسخ من ملفاتك، وراجع ما يفعله، وتحقق من كيفية تعامل مزوّد النماذج الذي اخترته مع الأوامر التي ترسلها. هذه معلومات عامة وليست استشارة قانونية.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**OpenWork تطبيق مكتبي يتيح لوكلاء الذكاء الاصطناعي العمل على ملفات حاسوبك الخاص، وتقدّمه الجهة المطوّرة بديلًا مفتوح المصدر لـ Claude Cowork وCodex.**',
          'يصدر التطبيق عن Different AI, Inc. التي تعمل باسم OpenWork. تذكر سياسة الخصوصية عنوانًا في سان فرانسيسكو بكاليفورنيا، وتشير الصفحة الرئيسية للجهة المطوّرة إلى دعم من Y Combinator. صدر الإصدار 0.18.68 في 18 نوفمبر 2026، وسجّل المستودع تعديلًا في اليوم نفسه، فالتطوير مستمر ولا ينطبق تحذير المشروع المتوقف.',
          'وفق README، OpenWork مبني على OpenCode ويعمل مع أكثر من 50 مزوّد نماذج: مفاتيح API الخاصة بك، أو تسجيل الدخول عبر ChatGPT، أو نماذج محلية عبر Ollama أو أي خادم متوافق مع OpenAI.',
          'للفرق، تصف الجهة المطوّرة مهارات وإضافات وخوادم MCP مشتركة، إضافة إلى نقطة وصول MCP تتيح لوكلاء مثل Codex وClaude Code وCursor إعادة استخدام الإعداد نفسه. هذه الأوصاف أقوال الجهة المطوّرة. لم تشغّل PromptQuorum التطبيق ولم تقِس سرعته أو دقته أو استهلاكه للموارد.',
          'الاسم مشترك مع منتجات أخرى. يقول طلب دمج (pull request) في مستودع الجهة المطوّرة إن حزمة npm المسماة openwork مشروع لا صلة له بها، وتذكر مدونة من طرف ثالث تطبيقًا آخر باسم Openwork من شركة أخرى.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُثبَّت OpenWork بتنزيل عادي لكل نظام تشغيل من صفحة التنزيل لدى الجهة المطوّرة، ووفق الجهة المطوّرة لا حاجة إلى حساب للبدء.**',
          'يسرد إصدار v0.18.68 على GitHub ملفات .dmg لنظام macOS (Apple Silicon وIntel) ومثبّتات .exe لنظام Windows (x64 وARM64) وملفات AppImage وtar.gz لنظام Linux (x64 وARM64). تقول ملاحظة الإصدار لدى الجهة المطوّرة إن مثبّتات Windows موقّعة عبر Microsoft Artifact Signing. ويتضمن الإصدار أيضًا بُنى منفصلة للسحابة وللمؤسسات تتطلب تسجيل الدخول؛ وتتناول هذه المراجعة التطبيق العام.',
        ],
        columns: ['المنصة', 'كيفية الحصول عليه'],
        rows: [
          { 'المنصة': '[macOS](https://openworklabs.com/download)', 'كيفية الحصول عليه': 'نزّل ملف .dmg (Apple Silicon أو Intel)' },
          { 'المنصة': '[Windows](https://openworklabs.com/download)', 'كيفية الحصول عليه': 'نزّل مثبّت .exe (x64 أو ARM64)' },
          { 'المنصة': '[Linux](https://openworklabs.com/download)', 'كيفية الحصول عليه': 'AppImage أو tar.gz (x64 أو ARM64)' },
          { 'المنصة': '[GitHub](https://github.com/different-ai/openwork/releases)', 'كيفية الحصول عليه': 'جميع البُنى وملاحظات الإصدار' },
          { 'المنصة': '[الموقع الإلكتروني](https://openworklabs.com)', 'كيفية الحصول عليه': 'الموقع الرسمي والأسعار والتوثيق' },
          { 'المنصة': '[سياسة الخصوصية](https://openworklabs.com/privacy)', 'كيفية الحصول عليه': 'سياسة الخصوصية للجهة المطوّرة' },
        ],
        note: 'لا تذكر الصفحات التي قُرئت حدًّا أدنى لإصدار نظام التشغيل ولا مقدار الذاكرة أو مساحة القرص. الانضمام إلى فريق يطلب تسجيل الدخول بعد التثبيت.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**يجمع OpenWork بين تطبيق مكتبي للمحادثة والأتمتة وأدوات مشاركة للفرق.** جميع البنود التالية أقوال للجهة المطوّرة من الموقع وREADME وصفحة الأسعار ما لم يُذكر خلاف ذلك.',
        ],
        items: [
          'محادثة ومكتبة وأتمتة على ملفاتك الخاصة، في تطبيق مكتبي لا يحتاج إلى حساب.',
          'اختيار النموذج عبر OpenCode: أكثر من 50 مزوّدًا، أو مفاتيح API الخاصة بك، أو تسجيل الدخول عبر ChatGPT، أو نماذج محلية عبر Ollama أو أي خادم متوافق مع OpenAI.',
          'مهارات وإضافات متوافقة مع Claude وخوادم MCP، مع دليل ترحيل لمن ينقل إعدادًا من Claude Cowork.',
          'أتمتة المتصفح، وتدرجها الجهة المطوّرة في جدول المقارنة على أنها مضمّنة.',
          'مهام مجدولة، وتصفها الجهة المطوّرة بأنها Alpha.',
          'غير متاح بعد وفق الجهة المطوّرة: إسناد المهام من الهاتف (Dispatch) ولوحات المعلومات ذاتية التحديث (live artifacts)، وكلاهما موسوم بأنه «قريبًا».',
          'المشاركة داخل الفريق: مهارات وإضافات وخوادم MCP مجمّعة في رابط واحد يستورده الزملاء بنقرة واحدة.',
          'خادم MCP من OpenWork يتيح لـ Codex أو Claude Code أو Cursor أو OpenCode أو أي عميل MCP آخر إعادة استخدام مهاراتك واتصالاتك؛ ويفتح العميل متصفحًا لتسجيل الدخول.',
          'OpenWork Den، مستوى تحكم تدير به المؤسسات الوصول وسياسات سطح المكتب وأسواق المهارات؛ ويمكن استضافة مستوى التحكم الخاص بالفرق ذاتيًا.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**في الوضع المكتبي، تقول الجهة المطوّرة إن ملفاتك تبقى على جهازك وإن الأوامر النصية تذهب مباشرة إلى مزوّد النماذج الذي تختاره.**',
          'تقول سياسة الخصوصية إن التطبيق المكتبي لا يجمع بيانات ولا يتتبعها ولا ينقلها أثناء الاستخدام العادي. الاستثناء الوحيد هو تقرير خطأ تبدأه بنفسك، ويرفق معه معلومات تشخيصية مثل إصداري التطبيق وOpenCode ونظام التشغيل. وتقول شروط الاستخدام الأمر نفسه عن التحليلات والقياس عن بُعد. مزوّدو النماذج الذين تربطهم بمفاتيحك الخاصة ليسوا معالجين فرعيين لدى الجهة المطوّرة، فتسري عليهم شروطهم وقواعد الاحتفاظ بالبيانات الخاصة بهم.',
          'توجد مسارات بيانات أخرى. يستخدم الموقع تحليلات PostHog. وتجمع الخدمة السحابية قياسًا تشغيليًا محدودًا لا يتضمن، وفق السياسة، معلومات شخصية ولا محتوى المستخدمين. العمّال السحابيون المستضافون اختياريون ويعملون على بنية الجهة المطوّرة المعزولة. وخادم OpenWork MCP خادم بعيد تشغّله الجهة المطوّرة ويتطلب تسجيل الدخول.',
          'تشير مراجعة من طرف ثالث في أغسطس 2026 إلى أن المصادقة والبحث عن القدرات عند استخدام OpenWork MCP يمرّان عبر خوادم الجهة المطوّرة حتى لو كان الاستدلال محليًا.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'الأسعار والترخيص',
        content: [
          '**التطبيق المكتبي مجاني؛ وتضيف الخطط المدفوعة ميزات الفرق عبر OpenWork Cloud أو مستوى تحكم مستضاف ذاتيًا.** الأسعار بالدولار الأمريكي ودون ضرائب، ومأخوذة من صفحة الأسعار بتاريخ 18 نوفمبر 2026.',
          'وفق README، كل ما هو خارج مجلد ee/ بترخيص MIT، ومنه التطبيق المكتبي. أما مجلد ee/ (OpenWork Den) فيخضع لترخيص OpenWork EE License المتاح المصدر: يتطلب الاستخدام الإنتاجي اشتراكًا، باستثناء أنه مجاني لما يصل إلى 5 مستخدمين ومجاني للتقييم لمدة 30 يومًا ومجاني دائمًا للتطوير والاختبار. يتحول كل إصدار من ee/ إلى MIT بعد عامين من نشره. أما الإصدارات الأقدم فتبقى تحت Functional Source License (FSL-1.1-MIT).',
          'يعرض كاشف التراخيص في GitHub المستودع بوصفه «Other». وتقول مراجعة من طرف ثالث في أغسطس 2026 إن أفرادًا من المجتمع لاحظوا أن بعض المكوّنات أُعيد ترخيصها تجاريًا؛ ويوثّق README الآن هذا التقسيم. تحقق من الترخيص للإصدار الدقيق الذي تعتمد عليه.',
        ],
        columns: ['الخطة', 'السعر', 'ما تتضمنه'],
        rows: [
          { 'الخطة': 'التطبيق المكتبي', 'السعر': 'مجاني', 'ما تتضمنه': 'ترخيص MIT، مفاتيحك الخاصة' },
          { 'الخطة': 'Cloud Free', 'السعر': '$0، حتى 5 مستخدمين', 'ما تتضمنه': 'دعم المجتمع' },
          { 'الخطة': 'Team', 'السعر': '$10/مستخدم/شهر', 'ما تتضمنه': 'SSO/SAML، سوق، أتمتة سحابية' },
          { 'الخطة': 'Enterprise', 'السعر': 'حسب الطلب', 'ما تتضمنه': 'SCIM، سجل تدقيق، علامة خاصة' },
          { 'الخطة': 'إضافة Cloud Computer', 'السعر': '$50/عضو/شهر', 'ما تتضمنه': 'حاسوب سحابي يُفتح في المتصفح' },
          { 'الخطة': 'إضافة OpenWork models', 'السعر': '$10/مستخدم/شهر', 'ما تتضمنه': 'استدلال مُدار دون مفاتيح' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب OpenWork من يريد وكيلًا مكتبيًا مفتوح المصدر لملفاته الخاصة ويوفّر وصوله الخاص إلى النماذج.**',
        ],
        items: [
          'من يريد وكيلًا يعمل على الملفات المحلية ولا يمانع استخدام مفاتيح API الخاصة به أو تشغيل Ollama.',
          'الفرق التي تستخدم المهارات وخوادم MCP بالفعل وتريد مشاركتها من مكان واحد، مع خيار الاستضافة الذاتية.',
          'من يريد تجربة مسار الترحيل الذي تقدمه الجهة المطوّرة من إعداد Claude Cowork.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'القيود وما لم نتمكن من التحقق منه',
        content: [
          '**لا يناسب OpenWork بعض الحالات، وتبقى عدة تفاصيل غير متحقق منها.**',
        ],
        items: [
          'لا يناسب: من يحتاج إلى حزمة بترخيص MIT بالكامل تشمل مستوى التحكم الخاص بالفرق، فهو بترخيص EE License المنفصل.',
          'لا يناسب: من يحتاج إلى ميزات تدرجها الجهة المطوّرة «قريبًا»، مثل إسناد المهام من الهاتف، أو من يحتاج إلى مهام مجدولة تتجاوز مرحلة Alpha.',
          'غير متحقق منه: الحد الأدنى لإصدارات نظام التشغيل ومتطلبات الذاكرة والقرص ووحدة معالجة الرسومات. لا يرد أي منها في الصفحات التي قُرئت، ولم يُقَس أداء النماذج المحلية عبر Ollama.',
          'غير متحقق منه: تدقيق SOC 2 من النوع الثاني الذي تقول الصفحة الرئيسية للجهة المطوّرة إنه اكتمل. لم تقرأ PromptQuorum تقريرًا.',
          'غير متحقق منه: دعم Y Combinator، وهو وارد في الصفحة الرئيسية للجهة المطوّرة فقط.',
          'غير متحقق منه: ما إذا كان عنوان سان فرانسيسكو في سياسة الخصوصية والشروط هو المقر الرئيسي. وتخضع السياسة لقانون الولايات المتحدة.',
          'غير متحقق منه: لا توجد صفحات في متاجر التطبيقات، ولذلك لا توجد تقييمات للمتجر.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenWork مقابل البدائل',
        itemHeadings: true,
        content: [
          '**OpenWork واحد من عدة تطبيقات وكلاء تدور حول الملفات المحلية والأدوات. لم تقارنه PromptQuorum عمليًا بالبدائل.** تأتي الملاحظات التالية من مدخلات دليل PromptQuorum لكل أداة.',
        ],
        columns: ['الأداة', 'المذكور في المصادر'],
        rows: [
          { 'الأداة': 'OpenWork', 'المذكور في المصادر': 'تطبيق مكتبي بترخيص MIT؛ Mac وWindows وLinux؛ مبني على OpenCode' },
          { 'الأداة': 'OpenCode', 'المذكور في المصادر': 'MIT؛ وكيل يعمل في الطرفية، أكثر من 75 مزوّدًا؛ يقوم عليه OpenWork' },
          { 'الأداة': 'Goose', 'المذكور في المصادر': 'Apache-2.0؛ مكتبي وCLI؛ تابع لـ Linux Foundation' },
          { 'الأداة': 'Atomic Agent', 'المذكور في المصادر': 'MIT؛ وكيل سطر أوامر محلي أولًا عبر llama.cpp' },
          { 'الأداة': 'Open Interpreter', 'المذكور في المصادر': 'Apache 2.0؛ يتيح لنموذج LLM محلي التحكم في حاسوبك' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل OpenWork دون اتصال بالكامل مع النماذج المحلية؟',
            a: 'يقول README إنه يمكنك تشغيل نماذج محلية عبر Ollama أو أي خادم متوافق مع OpenAI وإن ملفاتك تبقى محلية. ولا يذكر ما إذا كانت كل الميزات تعمل دون اتصال: فخادم OpenWork MCP والمشاركة داخل الفريق والميزات السحابية تحتاج إلى الشبكة وتسجيل الدخول.',
          },
          {
            q: 'هل OpenWork هذا هو نفسه حزمة npm أو تطبيقات أخرى باسم Openwork؟',
            a: 'لا. يقول طلب دمج في مستودع الجهة المطوّرة إن حزمة npm المسماة openwork مشروع لا صلة له بها، وتذكر مدونة من طرف ثالث تطبيقًا آخر باسم Openwork من شركة أخرى. تتناول هذه المراجعة التطبيق المكتبي من Different AI, Inc. على [openworklabs.com](https://openworklabs.com).',
          },
          {
            q: 'هل يمكنني نقل إعداد Claude Cowork إلى OpenWork؟',
            a: 'تقول الجهة المطوّرة إن المهارات والإضافات المتوافقة مع Claude وخوادم MCP تنتقل معك، وتنشر دليل ترحيل ينقلها بأمر نصي واحد. لم تجرّب PromptQuorum الترحيل، فتحقق من النتيجة على إعدادك الخاص.',
          },
          {
            q: 'هل يمكنني استخدام OpenWork من Claude Code أو Codex دون التطبيق المكتبي؟',
            a: 'نعم، وفق README: تضيف OpenWork MCP إلى Codex أو Claude Code أو Cursor أو OpenCode أو عميل MCP آخر بأمر واحد أو بند إعداد واحد. ثم يفتح العميل متصفحًا لتسجّل الدخول وتختار مؤسستك في OpenWork. ويقول README إن التطبيق المكتبي ليس مطلوبًا لذلك.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق OpenWork التجربة إن كنت تريد وكيلًا مكتبيًا مفتوح المصدر لملفاتك الخاصة وتستطيع اختيار وصولك إلى النماذج ودفع تكلفته.**',
          'على الورق يقدّم تطبيقًا مكتبيًا مجانيًا بترخيص MIT وأكثر من 50 مزوّد نماذج ودعمًا لـ Ollama ومهارات وخوادم MCP مشتركة ومسار استضافة ذاتية للفرق. التطوير نشط، مع خمسة إصدارات بين 3 و18 نوفمبر 2026.',
          'المقايضات حقيقية. عدة ميزات في مرحلة Alpha أو معلنة فقط، ومستوى التحكم الخاص بالفرق بترخيص مختلف متاح المصدر، ومتطلبات النظام وأداء النماذج المحلية غير متحقق منها. لم تختبر PromptQuorum التطبيق. جرّبه أولًا على نسخ من ملفات غير حساسة.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع OpenWork](https://openworklabs.com) — وصف الجهة المطوّرة للميزات وجدول المقارنة والخطط, روجع في 18 نوفمبر 2026.',
          '[صفحة التنزيل](https://openworklabs.com/download) — التنزيلات لكل نظام تشغيل والإصدار الحالي, روجع في 18 نوفمبر 2026.',
          '[صفحة الأسعار](https://openworklabs.com/pricing) — الخطط والأسعار والإضافات وملاحظة الترخيص, روجع في 18 نوفمبر 2026.',
          '[سياسة الخصوصية](https://openworklabs.com/privacy) — عنوان الشركة ومعالجة بيانات التطبيق المكتبي والمعالجون الفرعيون والقانون الحاكم, روجع في 18 نوفمبر 2026.',
          '[شروط الاستخدام](https://openworklabs.com/terms) — بيان القياس عن بُعد والقانون الحاكم, روجع في 18 نوفمبر 2026.',
          '[شروط الاشتراك](https://openworklabs.com/terms/subscription) — عنوان التواصل مع الشركة, روجع في 18 نوفمبر 2026.',
          '[مستودع OpenWork على GitHub](https://github.com/different-ai/openwork) — المستودع وآخر تعديل ووصف المشروع, روجع في 18 نوفمبر 2026.',
          '[ملف README الخاص بـ OpenWork](https://github.com/different-ai/openwork#readme) — النماذج وتقسيم التراخيص وإعداد MCP ودعم Ollama, روجع في 18 نوفمبر 2026.',
          '[الإصدار v0.18.68](https://github.com/different-ai/openwork/releases/tag/v0.18.68) — الإصدار والتاريخ والملفات وملاحظة الإصدار, روجع في 18 نوفمبر 2026.',
          '[إصدارات GitHub](https://github.com/different-ai/openwork/releases) — سجل الإصدارات المستخدم لمعرفة وتيرة الإصدار, روجع في 18 نوفمبر 2026.',
          '[مراجعة andrew.ooo](https://andrew.ooo/posts/openwork-open-source-claude-cowork-alternative-review/) — تعليقات من طرف ثالث على الترخيص وطبقة القدرات المستضافة، أغسطس 2026, روجع في 18 نوفمبر 2026.',
          '[طلب الدمج 5385](https://github.com/different-ai/openwork/pull/5385) — ملاحظة بأن حزمة npm المسماة openwork مشروع آخر, روجع في 18 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة OpenCode](/ar/power-local-llm/opencode-review) — وكيل برمجة مفتوح المصدر يعمل في الطرفية ويدعم أكثر من 75 مزوّد نماذج، منها النماذج المحلية.',
          '[مراجعة Goose](/ar/power-local-llm/goose-review) — وكيل ذكاء اصطناعي محلي أولًا للبرمجة والأتمتة وسير العمل — تديره Linux Foundation.',
          '[مراجعة Atomic Agent](/ar/power-local-llm/atomic-agent-review) — وكيل ذكاء اصطناعي محلي أولًا يتصفح الويب ويعدّل الملفات وينفذ أوامر الطرفية عبر llama.cpp.',
          '[مراجعة Open Interpreter](/ar/power-local-llm/open-interpreter-review) — يتيح لنموذج LLM محلي التحكم في حاسوبك وتنفيذ الشيفرة.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openwork-review-hero-ko.webp',
    title: 'OpenWork 리뷰: 내 파일에서 작동하는 오픈소스 데스크톱 AI 에이전트 앱',
    seoTitle: 'OpenWork 리뷰: 무료 오픈소스 AI 에이전트 앱',
    intro:
      'OpenWork는 AI 에이전트가 내 파일에서 작업하는 macOS, Windows, Linux용 무료 데스크톱 앱입니다. OpenCode를 기반으로 하며, 직접 마련한 키로 클라우드 모델에 연결하거나 Ollama를 통해 로컬 모델에 연결할 수 있습니다. 이 리뷰는 제작사 페이지, GitHub 저장소와 릴리스, 공개된 기사를 바탕으로 2026년 11월 18일에 확인한 내용입니다. PromptQuorum은 이 앱을 직접 테스트하지 않았습니다.',
    metaDescription:
      'OpenWork는 OpenCode 기반의 무료 AI 에이전트 데스크톱 앱으로, 직접 마련한 모델 키나 Ollama를 쓸 수 있습니다. 라이선스, 가격, 개인정보, 한계를 정리했습니다.',
    twitterDescription:
      'OpenWork는 내 파일을 다루는 무료 MIT 라이선스 AI 에이전트 데스크톱 앱입니다. 자체 모델이나 Ollama를 쓸 수 있으며, 팀 기능은 유료이고 라이선스가 다릅니다.',
    audience:
      '자체 모델 접근 환경으로 로컬 파일을 다루는 오픈소스 데스크톱 AI 에이전트를 검토하는 지식 노동자, 개발자, 팀',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenWork',
    targetKeywords: [
      'OpenWork 리뷰',
      'OpenWork AI',
      'OpenWork Claude Cowork 대안',
      'OpenWork 가격',
      'OpenWork 라이선스',
      'OpenWork Ollama',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenWork는 AI 에이전트가 내 파일에서 작업하는 macOS, Windows, Linux용 무료 오픈소스 데스크톱 앱이며, 직접 마련한 모델 키나 Ollama를 통한 로컬 모델을 사용합니다.** 데스크톱 앱은 MIT 라이선스이고, 팀용 제어 플레인은 소스 공개형이며 사용자가 다섯 명을 넘으면 유료입니다.',
    quickAnswerTop: {
      ko: {
        question: 'OpenWork는 무엇이고 누구에게 맞습니까?',
        answer:
          'OpenWork는 AI 에이전트가 내 컴퓨터의 파일을 읽고 수정하는 데스크톱 앱으로, OpenCode 에이전트를 기반으로 합니다. 단일 업체의 에이전트 앱에 대한 오픈소스 대안을 찾고, 모델 접근 환경을 직접 마련할 수 있는 분께 맞습니다.',
        bullets: [
          '플랫폼: macOS(Apple Silicon 및 Intel), Windows(x64, ARM64), Linux(x64, ARM64).',
          '가격: 데스크톱 앱은 무료이며, OpenWork Cloud Team은 사용자당 월 $10부터입니다.',
          '라이선스: 데스크톱 앱은 MIT이고, ee/ 폴더는 별도의 소스 공개형 라이선스입니다.',
          '모델: OpenCode를 통한 50개 이상의 제공업체, 직접 마련한 키, 또는 Ollama를 통한 로컬 모델.',
          '제작사: Different AI, Inc.(OpenWork라는 이름으로 영업), 샌프란시스코.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: '개요', anchor: 'overview' },
      { label: '설치 방법', anchor: 'get-it' },
      { label: '기능', anchor: 'features' },
      { label: '개인정보 보호와 데이터 흐름', anchor: 'privacy' },
      { label: '가격과 라이선스', anchor: 'pricing' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '한계와 확인하지 못한 내용', anchor: 'who-should-not-use' },
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
            text: 'OpenWork는 AI 에이전트가 내 컴퓨터의 파일에서 작업하는 무료 오픈소스 데스크톱 앱으로, OpenCode를 기반으로 하며 클라우드 모델과 로컬 모델 모두에 열려 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '문서를 읽고, 만들고, 수정하며 도구도 사용할 수 있는 채팅 창이라고 생각하시면 됩니다. 어떤 AI 모델이 생각을 맡을지는 직접 고릅니다. 제작사에 따르면 파일은 내 컴퓨터에 남지만, 프롬프트는 선택한 모델 제공업체로 전송됩니다.',
          },
        ],
        items: [
          '제작사의 다운로드 페이지에 따르면 시작하는 데 OpenWork 계정은 필요하지 않습니다.',
          '제작사에 따르면 스킬, Claude 호환 플러그인, MCP 서버를 한 번의 클릭으로 팀원과 공유할 수 있습니다.',
          '제작사는 예약 작업과 휴대폰에서 작업 지시하기를 포함한 일부 기능을 Alpha 또는 출시 예정으로 표시합니다.',
          '릴리스는 며칠 간격으로 나옵니다. 2026년 11월 3일의 v0.18.64부터 2026년 11월 18일의 v0.18.68까지입니다.',
          'PromptQuorum은 이 앱을 테스트하지 않았으며, 제작사는 하드웨어 요구 사항을 밝히지 않습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '파일을 수정하고 도구를 사용하는 에이전트는 데이터를 변경하거나 삭제할 수 있습니다. 먼저 파일 사본으로 시작하고, 에이전트가 하는 일을 확인하며, 선택한 모델 제공업체가 전송한 프롬프트를 어떻게 처리하는지 확인하십시오. 이는 일반적인 정보이며 법률 자문이 아닙니다.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**OpenWork는 AI 에이전트가 내 컴퓨터의 파일에서 작업하도록 해 주는 데스크톱 앱으로, 제작사는 Claude Cowork와 Codex에 대한 오픈소스 대안으로 소개합니다.**',
          '이 앱은 Different AI, Inc.(OpenWork라는 이름으로 영업)가 만듭니다. 개인정보 처리방침에는 캘리포니아주 샌프란시스코 주소가 적혀 있고, 제작사 홈페이지는 Y Combinator의 지원을 받는다고 밝힙니다. 버전 0.18.68은 2026년 11월 18일에 출시되었고 저장소에도 같은 날 커밋이 있었으므로 개발이 계속되고 있으며, 방치된 프로젝트 경고는 해당되지 않습니다.',
          'README에 따르면 OpenWork는 OpenCode를 기반으로 하며 50개 이상의 모델 제공업체와 함께 작동합니다. 직접 마련한 API 키, ChatGPT 로그인, 또는 Ollama나 OpenAI 호환 서버를 통한 로컬 모델을 쓸 수 있습니다.',
          '팀을 위해 제작사는 공유 스킬, 플러그인, MCP 서버와 함께 Codex, Claude Code, Cursor 같은 에이전트가 같은 설정을 재사용할 수 있는 MCP 엔드포인트를 설명합니다. 이는 제작사의 설명입니다. PromptQuorum은 앱을 실행하지 않았고 속도, 정확도, 리소스 사용량을 측정하지 않았습니다.',
          '같은 이름을 쓰는 다른 제품도 있습니다. 제작사 저장소의 풀 리퀘스트는 openwork라는 이름의 npm 패키지가 관련 없는 프로젝트라고 밝히며, 제3자 블로그는 다른 회사의 Openwork라는 다른 앱을 언급합니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '설치 방법',
        content: [
          '**OpenWork는 제작사 다운로드 페이지에서 운영체제별로 일반 다운로드로 설치하며, 제작사에 따르면 시작하는 데 계정은 필요하지 않습니다.**',
          'GitHub의 v0.18.68 릴리스에는 macOS용 .dmg 파일(Apple Silicon 및 Intel), Windows용 .exe 설치 프로그램(x64 및 ARM64), Linux용 AppImage와 tar.gz 파일(x64 및 ARM64)이 올라와 있습니다. 제작사의 릴리스 노트에 따르면 Windows 설치 프로그램은 Microsoft Artifact Signing으로 서명되어 있습니다. 릴리스에는 로그인이 필요한 클라우드용과 엔터프라이즈용 빌드도 별도로 들어 있으며, 이 리뷰는 공개 앱을 다룹니다.',
        ],
        columns: ['플랫폼', '받는 방법'],
        rows: [
          { '플랫폼': '[macOS](https://openworklabs.com/download)', '받는 방법': '.dmg 다운로드(Apple Silicon 또는 Intel)' },
          { '플랫폼': '[Windows](https://openworklabs.com/download)', '받는 방법': '.exe 설치 프로그램 다운로드(x64 또는 ARM64)' },
          { '플랫폼': '[Linux](https://openworklabs.com/download)', '받는 방법': 'AppImage 또는 tar.gz(x64 또는 ARM64)' },
          { '플랫폼': '[GitHub](https://github.com/different-ai/openwork/releases)', '받는 방법': '모든 빌드와 릴리스 노트' },
          { '플랫폼': '[웹사이트](https://openworklabs.com)', '받는 방법': '공식 사이트, 가격, 문서' },
          { '플랫폼': '[개인정보 처리방침](https://openworklabs.com/privacy)', '받는 방법': '제작사의 개인정보 처리방침' },
        ],
        note: '확인한 페이지에는 최소 운영체제 버전, RAM, 디스크 용량이 나와 있지 않습니다. 팀에 참여하면 설치 후 로그인하라는 안내가 표시됩니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**OpenWork는 채팅과 자동화를 위한 데스크톱 앱에 팀용 공유 도구를 결합한 것입니다.** 아래 항목은 별도 표시가 없는 한 웹사이트, README, 가격 페이지에 나온 제작사의 설명입니다.',
        ],
        items: [
          '계정이 필요 없는 데스크톱 앱에서 내 파일을 대상으로 하는 채팅, 라이브러리, 자동화.',
          'OpenCode를 통한 모델 선택: 50개 이상의 제공업체, 직접 마련한 API 키, ChatGPT 로그인, 또는 Ollama나 OpenAI 호환 서버를 통한 로컬 모델.',
          '스킬, Claude 호환 플러그인, MCP 서버. Claude Cowork 설정을 옮기는 사용자를 위한 마이그레이션 가이드도 있습니다.',
          '브라우저 자동화. 제작사의 비교표에는 포함된 것으로 표시되어 있습니다.',
          '예약 작업. 제작사는 Alpha로 표시합니다.',
          '제작사에 따르면 아직 제공되지 않음: 휴대폰에서 작업 지시하기(Dispatch)와 자동으로 갱신되는 대시보드(live artifacts). 둘 다 출시 예정으로 표시됩니다.',
          '팀 공유: 스킬, 플러그인, MCP 서버를 하나의 링크로 묶어 팀원이 한 번의 클릭으로 가져옵니다.',
          'Codex, Claude Code, Cursor, OpenCode 등 MCP 클라이언트가 내 스킬과 연결을 재사용할 수 있게 하는 OpenWork MCP 서버. 클라이언트가 로그인을 위해 브라우저를 엽니다.',
          'OpenWork Den: 조직이 접근 권한, 데스크톱 정책, 스킬 마켓플레이스를 관리하는 제어 플레인. 팀용 제어 플레인은 직접 호스팅할 수 있습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 데이터 흐름',
        content: [
          '**데스크톱 모드에서는 파일이 내 컴퓨터에 남고 프롬프트는 선택한 모델 제공업체로 직접 전송된다고 제작사는 밝힙니다.**',
          '개인정보 처리방침에 따르면 데스크톱 앱은 일반적인 사용 중에 데이터를 수집, 추적, 전송하지 않습니다. 유일한 예외는 사용자가 직접 시작하는 버그 보고서이며, 앱과 OpenCode의 버전, 운영체제 같은 진단 정보가 첨부됩니다. 이용 약관도 분석과 텔레메트리에 대해 같은 내용을 밝힙니다. 직접 마련한 키로 연결하는 모델 제공업체는 제작사의 재처리자가 아니므로 해당 업체의 약관과 보관 규칙이 적용됩니다.',
          '다른 데이터 경로도 있습니다. 웹사이트는 PostHog 분석을 사용합니다. 클라우드 서비스는 제한적인 운영 텔레메트리를 수집하며, 방침에 따르면 개인정보나 사용자 콘텐츠는 포함되지 않습니다. 호스팅되는 클라우드 워커는 선택 사항이며 제작사의 샌드박스 인프라에서 실행됩니다. OpenWork MCP는 제작사가 운영하는 원격 서버이며 로그인이 필요합니다.',
          '2026년 8월의 제3자 리뷰는 OpenWork MCP를 쓰면 추론이 로컬이더라도 인증과 기능 조회가 제작사 서버를 거친다고 지적합니다.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: '가격과 라이선스',
        content: [
          '**데스크톱 앱은 무료이며, 유료 플랜은 OpenWork Cloud 또는 직접 호스팅하는 제어 플레인을 통해 팀 기능을 추가합니다.** 가격은 미국 달러 기준이며 세금 별도이고, 2026년 11월 18일 가격 페이지에서 가져왔습니다.',
          'README에 따르면 데스크톱 앱을 포함해 ee/ 폴더 밖의 모든 것은 MIT 라이선스입니다. ee/ 폴더(OpenWork Den)는 소스 공개형인 OpenWork EE License를 사용합니다. 운영 환경 사용에는 구독이 필요하지만, 5명까지는 무료이고 30일 평가는 무료이며 개발과 테스트는 언제나 무료입니다. ee/의 각 릴리스는 공개 2년 후 MIT로 전환됩니다. 이전 버전은 Functional Source License(FSL-1.1-MIT)로 남아 있습니다.',
          'GitHub의 라이선스 감지는 이 저장소를 Other로 표시합니다. 2026년 8월의 제3자 리뷰는 일부 구성 요소가 상업용으로 재라이선스된 것을 커뮤니티 구성원이 알아챘다고 말하며, README는 이제 이 구분을 문서화하고 있습니다. 의존하는 정확한 버전의 라이선스를 확인하십시오.',
        ],
        columns: ['플랜', '가격', '포함 내용'],
        rows: [
          { '플랜': '데스크톱 앱', '가격': '무료', '포함 내용': 'MIT 라이선스, 직접 마련한 키' },
          { '플랜': 'Cloud Free', '가격': '$0, 최대 5명', '포함 내용': '커뮤니티 지원' },
          { '플랜': 'Team', '가격': '$10/사용자/월', '포함 내용': 'SSO/SAML, 마켓플레이스, 클라우드 자동화' },
          { '플랜': 'Enterprise', '가격': '별도 문의', '포함 내용': 'SCIM, 감사 로그, 화이트 라벨' },
          { '플랜': 'Cloud Computer 추가 항목', '가격': '$50/멤버/월', '포함 내용': '브라우저로 접속하는 클라우드 컴퓨터' },
          { '플랜': 'OpenWork models 추가 항목', '가격': '$10/사용자/월', '포함 내용': '관리형 추론, 키 불필요' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        content: [
          '**OpenWork는 내 파일을 다루는 오픈소스 데스크톱 에이전트를 원하고 모델 접근 환경을 직접 마련할 수 있는 분께 맞습니다.**',
        ],
        items: [
          '로컬 파일에서 작동하는 에이전트를 원하며, 직접 마련한 API 키를 쓰거나 Ollama를 운영하는 데 거부감이 없는 분.',
          '이미 스킬과 MCP 서버를 쓰고 있으며 한곳에서 공유하고 싶은 팀. 직접 호스팅 옵션도 있습니다.',
          'Claude Cowork 설정에서 제작사가 제시하는 마이그레이션 경로를 시도해 보고 싶은 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '한계와 확인하지 못한 내용',
        content: [
          '**OpenWork가 맞지 않는 상황도 있으며, 확인하지 못한 세부 사항도 여럿 있습니다.**',
        ],
        items: [
          '맞지 않음: 팀용 제어 플레인까지 포함해 전부 MIT 라이선스인 스택이 필요한 분. 제어 플레인은 별도의 EE License를 사용합니다.',
          '맞지 않음: 휴대폰에서 작업 지시하기처럼 제작사가 출시 예정으로 올려 둔 기능이 필요한 분, 또는 Alpha를 넘어선 예약 작업이 필요한 분.',
          '확인하지 못함: 최소 운영체제 버전과 RAM, 디스크, GPU 요구 사항. 확인한 페이지에는 나와 있지 않으며, Ollama를 통한 로컬 모델 성능도 측정하지 않았습니다.',
          '확인하지 못함: 제작사 홈페이지가 완료되었다고 밝힌 SOC 2 Type II 감사. PromptQuorum은 보고서를 읽지 않았습니다.',
          '확인하지 못함: Y Combinator의 지원. 제작사 홈페이지에만 나옵니다.',
          '확인하지 못함: 개인정보 처리방침과 약관에 나온 샌프란시스코 주소가 본사인지 여부. 방침은 미국 법을 준거법으로 합니다.',
          '확인하지 못함: 앱 스토어 등록 정보가 없으므로 스토어 평점도 없습니다.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenWork와 대안 비교',
        itemHeadings: true,
        content: [
          '**OpenWork는 로컬 파일과 도구를 중심으로 한 여러 에이전트 앱 중 하나입니다. PromptQuorum은 대안들과 직접 비교해 보지 않았습니다.** 아래 메모는 각 도구에 대한 PromptQuorum 디렉터리 항목에서 가져왔습니다.',
        ],
        columns: ['도구', '출처에 기재된 내용'],
        rows: [
          { '도구': 'OpenWork', '출처에 기재된 내용': 'MIT 데스크톱 앱, Mac·Windows·Linux, OpenCode 기반' },
          { '도구': 'OpenCode', '출처에 기재된 내용': 'MIT, 터미널 중심 에이전트, 75개 이상 제공업체, OpenWork의 기반' },
          { '도구': 'Goose', '출처에 기재된 내용': 'Apache-2.0, 데스크톱과 CLI, Linux Foundation' },
          { '도구': 'Atomic Agent', '출처에 기재된 내용': 'MIT, llama.cpp를 쓰는 로컬 우선 명령줄 에이전트' },
          { '도구': 'Open Interpreter', '출처에 기재된 내용': 'Apache 2.0, 로컬 LLM이 컴퓨터를 제어하게 함' },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'OpenWork는 로컬 모델로 완전히 오프라인에서 작동합니까?',
            a: 'README는 Ollama나 OpenAI 호환 서버를 통해 로컬 모델을 실행할 수 있고 파일은 로컬에 남는다고 밝힙니다. 모든 기능이 오프라인에서 작동하는지는 나와 있지 않습니다. OpenWork MCP, 팀 공유, 클라우드 기능에는 네트워크와 로그인이 필요합니다.',
          },
          {
            q: '이 OpenWork는 npm 패키지나 Openwork라는 이름의 다른 앱과 같습니까?',
            a: '아닙니다. 제작사 저장소의 풀 리퀘스트는 openwork라는 이름의 npm 패키지가 관련 없는 프로젝트라고 밝히며, 제3자 블로그는 다른 회사의 Openwork라는 다른 앱을 언급합니다. 이 리뷰는 [openworklabs.com](https://openworklabs.com)에서 제공되는 Different AI, Inc.의 데스크톱 앱을 다룹니다.',
          },
          {
            q: 'Claude Cowork 설정을 OpenWork로 옮길 수 있습니까?',
            a: '제작사는 스킬, Claude 호환 플러그인, MCP 서버를 가져올 수 있다고 밝히며 하나의 프롬프트로 옮기는 마이그레이션 가이드를 공개합니다. PromptQuorum은 마이그레이션을 시도해 보지 않았으므로 결과는 직접 설정에서 확인하십시오.',
          },
          {
            q: '데스크톱 앱 없이 Claude Code나 Codex에서 OpenWork를 사용할 수 있습니까?',
            a: '네, README에 따르면 명령 하나 또는 설정 항목 하나로 OpenWork MCP를 Codex, Claude Code, Cursor, OpenCode 등 MCP 클라이언트에 추가합니다. 그러면 클라이언트가 브라우저를 열어 로그인하고 OpenWork 조직을 선택하게 합니다. README에 따르면 이 용도에는 데스크톱 앱이 필요하지 않습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**OpenWork는 내 파일을 다루는 오픈소스 데스크톱 에이전트를 원하고 모델 접근 환경을 직접 고르고 비용을 부담할 수 있다면 시도해 볼 만합니다.**',
          '자료상으로는 무료 MIT 데스크톱 앱, 50개 이상의 모델 제공업체, Ollama 지원, 공유 스킬과 MCP 서버, 팀을 위한 직접 호스팅 경로를 제공합니다. 개발은 활발하여 2026년 11월 3일부터 18일 사이에 다섯 차례 릴리스가 있었습니다.',
          '절충점도 분명합니다. 여러 기능이 Alpha이거나 발표 단계이고, 팀용 제어 플레인은 다른 소스 공개형 라이선스를 사용하며, 시스템 요구 사항과 로컬 모델 성능은 확인하지 못했습니다. PromptQuorum은 앱을 테스트하지 않았습니다. 먼저 민감하지 않은 파일의 사본으로 시도해 보십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[OpenWork 웹사이트](https://openworklabs.com) — 기능, 비교표, 플랜에 대한 제작사의 설명, 2026년 11월 18일 확인.',
          '[다운로드 페이지](https://openworklabs.com/download) — 운영체제별 다운로드와 현재 버전, 2026년 11월 18일 확인.',
          '[가격 페이지](https://openworklabs.com/pricing) — 플랜, 가격, 추가 항목, 라이선스 안내, 2026년 11월 18일 확인.',
          '[개인정보 처리방침](https://openworklabs.com/privacy) — 회사 주소, 데스크톱 앱의 데이터 처리, 재처리자, 준거법, 2026년 11월 18일 확인.',
          '[이용 약관](https://openworklabs.com/terms) — 텔레메트리에 관한 설명과 준거법, 2026년 11월 18일 확인.',
          '[구독 약관](https://openworklabs.com/terms/subscription) — 회사 연락처 주소, 2026년 11월 18일 확인.',
          '[OpenWork GitHub 저장소](https://github.com/different-ai/openwork) — 저장소, 마지막 커밋, 프로젝트 설명, 2026년 11월 18일 확인.',
          '[OpenWork README](https://github.com/different-ai/openwork#readme) — 모델, 라이선스 구분, MCP 설정, Ollama 지원, 2026년 11월 18일 확인.',
          '[릴리스 v0.18.68](https://github.com/different-ai/openwork/releases/tag/v0.18.68) — 버전, 날짜, 파일, 릴리스 노트, 2026년 11월 18일 확인.',
          '[GitHub 릴리스](https://github.com/different-ai/openwork/releases) — 릴리스 주기 확인에 쓴 릴리스 기록, 2026년 11월 18일 확인.',
          '[andrew.ooo 리뷰](https://andrew.ooo/posts/openwork-open-source-claude-cowork-alternative-review/) — 라이선스와 호스팅되는 기능 계층에 대한 제3자 의견(2026년 8월), 2026년 11월 18일 확인.',
          '[풀 리퀘스트 5385](https://github.com/different-ai/openwork/pull/5385) — openwork라는 이름의 npm 패키지가 다른 프로젝트라는 안내, 2026년 11월 18일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[OpenCode 리뷰](/ko/power-local-llm/opencode-review) — 로컬 모델을 포함해 75개 이상의 모델 제공업체를 지원하는 터미널 중심 오픈소스 코딩 에이전트.',
          '[Goose 리뷰](/ko/power-local-llm/goose-review) — 코딩, 자동화, 워크플로를 위한 로컬 우선 AI 에이전트 — Linux Foundation이 운영합니다.',
          '[Atomic Agent 리뷰](/ko/power-local-llm/atomic-agent-review) — 웹을 탐색하고 파일을 편집하며 llama.cpp를 통해 셸 명령을 실행하는 로컬 우선 AI 에이전트.',
          '[Open Interpreter 리뷰](/ko/power-local-llm/open-interpreter-review) — 로컬 LLM이 컴퓨터를 제어하고 코드를 실행하게 합니다.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그.',
        ],
      },
    },
  },
}
