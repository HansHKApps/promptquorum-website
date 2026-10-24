// LobeHub Review (formerly LobeChat) -- slug kept as lobechat-review so existing links, the directory tile and the comparison article keep resolving.
// Companion to: open-webui-review, librechat-review, big-agi-review, local-llm-chat-assistants-compared
// Sources (all checked 2026-10-24, no hands-on use): lobehub.com, lobehub.com/pricing.md, github.com/lobehub/lobehub (README, LICENSE, releases v2.2.20,
// docs/usage/providers/ollama.mdx), lobehub.com/privacy (last updated 2026-03-05).
// Last upstream update 2026-10-24 (repository push; latest release v2.2.20 on 2026-10-18) => no stale warning (owner rule 2026-10-16).
// Rewritten on the hub skin 2026-10-24; star counts come from the directory tile (GEO Rule 49).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'
import { starsFor } from '@/lib/power-local-llm/app-facts'

const st = {
  en: starsFor('en'), de: starsFor('de'), fr: starsFor('fr'), ja: starsFor('ja'), zh: starsFor('zh'),
  es: starsFor('es'), pt: starsFor('pt'), ar: starsFor('ar'), ko: starsFor('ko'),
}

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Tools & Interfaces',
    heroImage: '/images/lobechat-review-hero-en.webp',
    title: 'LobeHub Review (Formerly LobeChat): Agent Workspace With Desktop Apps and Self-Hosting',
    seoTitle: 'LobeHub Review (Formerly LobeChat): Agent Workspace',
    intro:
      '[LobeHub](https://lobehub.com), formerly LobeChat, is an open-source AI workspace whose source lives at [github.com/lobehub/lobehub](https://github.com/lobehub/lobehub). It started as a self-hosted chat interface and now describes itself as an agent collaboration platform: you build agents, group them into teams and let them run on a schedule. This review covers what it does today, where it runs, whether local models work, the license and the plans.',
    metaDescription:
      'Review of LobeHub, the renamed LobeChat: desktop apps for macOS, Windows and Linux, a cloud service, Docker self-hosting, Ollama support and plans.',
    twitterDescription:
      'What LobeHub offers after the LobeChat rename: three desktop installers, cloud plans, Docker hosting, local models via Ollama, license terms and what we could not verify.',
    audience:
      'People choosing between a hosted AI workspace, a desktop app and a self-hosted server, and who want to know how local models fit in.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LobeHub review',
    targetKeywords: ['LobeHub review', 'LobeChat', 'LobeHub vs Open WebUI', 'LobeHub license', 'LobeHub desktop app'],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**LobeHub is hybrid rather than purely local: the same open-source product runs as a desktop app, as a hosted cloud service and as a server you host yourself, and it reaches local models through a connector such as Ollama.** Its focus has moved from a plain chat window to agents that work in teams, so anyone who only wants a simple local chat front end may find it larger than needed.',
    quickAnswerTop: {
      en: {
        question: 'Is LobeHub a local app?',
        answer:
          'Partly. The desktop installers and the self-hosted server run on your own machine, but the main product is a cloud service, and local models are reached through a provider connector such as Ollama.',
        bullets: [
          'A free cloud plan exists, with three paid plans priced in US dollars only.',
          'The license is Apache-2.0-based, with a commercial-license condition for derivative products.',
          'PromptQuorum did not test the apps hands-on.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is LobeHub?', anchor: 'what-is-lobehub' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Features', anchor: 'key-features' },
      { label: 'Self-Hosting', anchor: 'self-hosting' },
      { label: 'Using Local Models', anchor: 'local-models' },
      { label: 'Plans and Pricing', anchor: 'plans-and-pricing' },
      { label: 'License', anchor: 'license' },
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
            text: 'LobeHub, the successor of LobeChat, is an open-source workspace for building AI agents and running them together, available as desktop apps, in the cloud or on your own server.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a chat app that grew into a small AI team: you describe an agent, it gets tools and memory, and several agents can work on the same task. You choose whether it runs on your computer, on LobeHub\'s servers or on yours.',
          },
        ],
        items: [
          'Rename: the project and its repository moved from LobeChat to LobeHub; the old repository address redirects.',
          'Platforms: desktop installers for macOS, Windows and Linux (version 2.2.20, published 18 October 2026), plus the cloud app and self-hosting.',
          'Local models: Ollama is a supported provider, set up like any other.',
          `Code: ${st.en('lobechat')} GitHub stars; the repository was last updated on 24 October 2026.`,
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the official website, the GitHub repository and its documentation, and the privacy policy, checked on 24 October 2026. It involved no hands-on use or benchmarking.',
          },
        ],
      },
      overview: {
        id: 'what-is-lobehub',
        title: 'What Is LobeHub?',
        content: [
          '**LobeHub is an open-source platform for creating AI agents and running them as a team, formerly known as LobeChat.** The GitHub description calls it a "Chief Agent Operator" that hires, schedules and reports on your agents; the website calls it an agent collaboration platform.',
          'The original LobeChat was a self-hosted chat interface for many model providers. Today\'s README adds an Agent Builder, Agent Groups that work on a task in parallel, Pages for writing with several agents, scheduled runs, projects, shared workspaces and a Personal Memory feature. This review covers the product as published in the [LobeHub repository](https://github.com/lobehub/lobehub); the LICENSE file there still uses the name LobeChat.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**There are three ways to run LobeHub: install a desktop app, open the cloud service in a browser, or host it yourself.** The desktop installers need no terminal.',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          {
            'Platform': 'macOS',
            'Where to get it': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest) (.dmg for Apple silicon and for Intel)',
          },
          {
            'Platform': 'Windows',
            'Where to get it': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest) (setup .exe)',
          },
          {
            'Platform': 'Linux',
            'Where to get it': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest) (AppImage, .deb, .rpm and snap)',
          },
          {
            'Platform': 'Web (cloud)',
            'Where to get it': '[app.lobehub.com](https://app.lobehub.com) (LobeHub Cloud, account required)',
          },
          {
            'Platform': 'Self-hosted',
            'Where to get it': '[Self-hosting section of the README](https://github.com/lobehub/lobehub#-self-hosting) (Docker or one-click deploy)',
          },
          {
            'Platform': 'Source code',
            'Where to get it': '[lobehub/lobehub on GitHub](https://github.com/lobehub/lobehub) (LobeHub Community License)',
          },
          {
            'Platform': 'Website',
            'Where to get it': '[lobehub.com](https://lobehub.com)',
          },
          {
            'Platform': 'Privacy policy',
            'Where to get it': '[lobehub.com/privacy](https://lobehub.com/privacy) (last updated 5 March 2026)',
          },
        ],
        note: 'Version reviewed: 2.2.20, published on GitHub Releases on 18 October 2026; the repository itself was updated on 24 October 2026, so there is no stale warning. Self-hosting needs a terminal, as described below.',
      },
      features: {
        id: 'key-features',
        title: 'Features',
        content: [
          '**Agents are the unit of work in LobeHub; chat is only one way to talk to them.** The list below comes from the README and the website.',
        ],
        items: [
          '**Agent Builder.** Describe the agent once and the setup is configured for you.',
          '**Agent Groups, Pages and Schedule.** Several agents work on a task with shared context, write together on a page, or run at set times while you are away.',
          '**Skills.** The README cites a library of 10,000+ tools and MCP-compatible plugins.',
          '**Models.** Many providers sit behind one interface, so you can switch models inside the same conversation setup.',
          '**Personal Memory and IM Gateway.** Agents can learn from how you work and be reached in the chat apps you already use.',
        ],
        note: 'What each model can do (vision, tool use, context length) depends on the model you connect, not on LobeHub.',
      },
      selfHost: {
        id: 'self-hosting',
        title: 'Self-Hosting',
        content: [
          '**Self-hosting needs a terminal and Docker, or a cloud account for the one-click deploy.** The README describes two routes.',
        ],
        items: [
          '**Docker.** Create a folder, run the setup script from the README (`bash <(curl -fsSL https://lobe.li/setup.sh)`), then start the stack with `docker compose up -d`.',
          '**One-click deploy.** Buttons for Vercel, Zeabur, Sealos, RepoCloud and Alibaba Cloud; the README asks for an `OPENAI_API_KEY` in the environment variables.',
        ],
        note: 'The README links a Docker Deployment Guide for the details. We did not run a self-hosted instance for this review.',
      },
      localModels: {
        id: 'local-models',
        title: 'Using Local Models',
        content: [
          '**LobeHub lists Ollama as a provider and documents the setup.** Install [Ollama](/local-llms/how-to-install-ollama), then allow cross-origin requests by setting the `OLLAMA_ORIGINS` environment variable to `*` and restarting Ollama, and LobeHub can chat with the models Ollama serves.',
          'That step comes from the documentation for the browser version. We did not test whether the desktop apps need it, or whether they work fully offline.',
        ],
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'Plans and Pricing',
        content: [
          '**LobeHub Cloud is freemium; the apps and the self-hosted server are free of charge under the license.** Prices on the pricing page are in US dollars only; no local-currency prices were found.',
        ],
        columns: ['Plan', 'Price', 'What it includes'],
        rows: [
          {
            'Plan': 'Free',
            'Price': '$0',
            'What it includes': '500K credits a month, 100 MB vector storage',
          },
          {
            'Plan': 'Starter',
            'Price': '$12.9 a month ($9.9 billed yearly)',
            'What it includes': '5M credits, 1 GB files',
          },
          {
            'Plan': 'Premium',
            'Price': '$24.9 a month ($19.9 billed yearly)',
            'What it includes': '15M credits, 2 GB files',
          },
          {
            'Plan': 'Ultimate',
            'Price': '$49.9 a month ($39.9 billed yearly)',
            'What it includes': '35M credits, 4 GB files',
          },
        ],
        note: 'Enterprise pricing is by contact. The source says the figures reflect the marketing site and recommends checking in-app billing; model usage on a self-hosted server is billed by whichever provider you connect.',
      },
      license: {
        id: 'license',
        title: 'License',
        content: [
          '**LobeHub uses the LobeHub Community License, which is based on Apache License 2.0 and is not plain MIT or Apache.** Commercial use is allowed, including as a frontend and backend service without modifying the source code. Developing and distributing a derivative work requires a commercial license from LobeHub (contact hello@lobehub.com). Contributors also agree that their code may be used commercially, including in the cloud edition, and that the producer may change the license terms.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**People who want agents, schedules and shared memory in one workspace**, not only a chat window.',
          '**Users who want a double-click install** on macOS, Windows or Linux and an optional cloud account.',
          '**Self-hosters** comfortable with Docker who want one interface for cloud and Ollama models.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**The apps in use.** Installation, speed, stability and the desktop apps were not tested.',
          '**Offline use.** Whether the desktop apps work without an internet connection, or reach Ollama without the cross-origin step, is not stated in the sources we read.',
          '**Cloud data handling.** The privacy policy says chat logs are stored locally by default and sync to cloud servers if you turn on cloud sync, and that chat content is not used for model training in the mobile app; it does not address the desktop or self-hosted versions, and we did not audit any of this.',
          '**Skill count.** The 10,000+ figure is the README\'s claim.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            'App': '[Open WebUI](/local-llms/open-webui-review)',
            'Platforms': 'Web, desktop',
            'Price / license': 'Free / BSD 3-Clause',
            'Key difference': 'Self-hosted interface with built-in RAG, usually run with Ollama',
          },
          {
            'App': '[LibreChat](/power-local-llm/librechat-review)',
            'Platforms': 'Web',
            'Price / license': 'Free / MIT',
            'Key difference': 'Self-hosted multi-provider chat with team features',
          },
          {
            'App': '[Big-AGI](/local-llms/big-agi-review)',
            'Platforms': 'Web',
            'Price / license': 'Free / MIT',
            'Key difference': 'Multi-provider front end with personas; you bring your own keys',
          },
          {
            'App': '[Cherry Studio](/local-llms/cherry-studio-ai-desktop-client)',
            'Platforms': 'Desktop',
            'Price / license': 'Free / AGPL 3.0',
            'Key difference': 'Single-user desktop client with no server to run',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is LobeChat the same as LobeHub?',
            a: 'Yes. LobeHub is the current name of the project that was called LobeChat; the repository now lives at lobehub/lobehub and the older address redirects to it.',
          },
          {
            q: 'Can LobeHub run offline?',
            a: 'Unknown. Only the provider connection to a local Ollama server is documented, and offline use of the desktop apps was not tested.',
          },
          {
            q: 'Do I need an account?',
            a: 'For LobeHub Cloud, yes. The privacy policy lists an email address and name among the data it collects. Desktop apps and self-hosting were not checked for an account requirement.',
          },
          {
            q: 'Is the self-hosted version free?',
            a: 'Yes under the license, including commercial use as is; you pay only the model providers you connect.',
          },
          {
            q: 'Where do I report problems or ask for features?',
            a: 'The README points to the GitHub issues page and a Discord community.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'LobeHub has outgrown the chat front end it started as: it is now an agent workspace you can install, rent or host. Its release cadence, installers for three desktop systems and documented Ollama support are real strengths. The hybrid model, a cloud-first product and untested offline use mean readers who need strictly local operation should verify that on their own machine first.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[LobeHub website](https://lobehub.com) — product description, checked 24 October 2026.',
          '[LobeHub pricing](https://lobehub.com/pricing.md) — plans, credits and storage, checked 24 October 2026.',
          '[LobeHub on GitHub](https://github.com/lobehub/lobehub) — README, LICENSE, releases (2.2.20) and repository activity, checked 24 October 2026.',
          '[Using Ollama in LobeHub](https://github.com/lobehub/lobehub/blob/main/docs/usage/providers/ollama.mdx) — provider setup, checked 24 October 2026.',
          '[LobeHub privacy policy](https://lobehub.com/privacy) — data collected and storage; last updated 5 March 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Open WebUI Review](/local-llms/open-webui-review) — a self-hosted interface for local models with built-in RAG.',
          '[LibreChat Review](/power-local-llm/librechat-review) — an open-source multi-model chat interface you host yourself.',
          '[Big-AGI Review](/local-llms/big-agi-review) — a multi-provider chat front end with personas.',
          '[LobeChat, Big-AGI, NextChat, Page Assist, Chatbox Compared](/local-llms/lobechat-bigagi-nextchat-pageassist-chatbox-compared) — five chat apps side by side.',
          '[Local LLM Chat Assistants Compared](/power-local-llm/local-llm-chat-assistants-compared) — the category comparison.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LobeHub Review (Formerly LobeChat): Agent Workspace With Desktop Apps and Self-Hosting',
      description: 'Review of LobeHub, the renamed LobeChat: desktop apps for macOS, Windows and Linux, a cloud service, Docker self-hosting, Ollama support and plans.',
      url: 'https://promptquorum.com/local-llms/lobechat-review',
      inLanguage: 'en',
      datePublished: '2026-09-11',
      dateModified: '2026-10-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'People evaluating an AI agent workspace' },
      about: [
        { '@type': 'SoftwareApplication', name: 'LobeHub' },
        { '@type': 'Thing', name: 'LobeChat' },
        { '@type': 'Thing', name: 'Self-hosted AI chat' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/local-llms/lobechat-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Local LLMs', item: 'https://promptquorum.com/local-llms' },
        { '@type': 'ListItem', position: 3, name: 'LobeHub Review', item: 'https://promptquorum.com/local-llms/lobechat-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Tools & Interfaces',
    heroImage: '/images/lobechat-review-hero-de.webp',
    title: 'LobeHub-Rezension (früher LobeChat): Agenten-Workspace mit Desktop-Apps und Self-Hosting',
    seoTitle: 'LobeHub-Rezension (früher LobeChat): Agenten-Workspace',
    intro:
      '[LobeHub](https://lobehub.com), früher LobeChat, ist ein Open-Source-KI-Workspace, dessen Quellcode unter [github.com/lobehub/lobehub](https://github.com/lobehub/lobehub) liegt. Es begann als selbst gehostete Chat-Oberfläche und beschreibt sich heute als Plattform für die Zusammenarbeit von Agenten: Sie bauen Agenten, fassen sie zu Teams zusammen und lassen sie nach Zeitplan arbeiten. Diese Rezension behandelt den heutigen Funktionsumfang, die Betriebsarten, die Nutzung lokaler Modelle, die Lizenz und die Tarife.',
    metaDescription:
      'Rezension von LobeHub, dem umbenannten LobeChat: Desktop-Apps für macOS, Windows und Linux, Cloud-Dienst, Docker-Hosting, Ollama-Anbindung und Tarife.',
    twitterDescription:
      'Was LobeHub nach der Umbenennung von LobeChat bietet: drei Desktop-Installer, Cloud-Tarife, Docker-Hosting, lokale Modelle über Ollama, Lizenz und offene Punkte.',
    audience:
      'Menschen, die zwischen einem gehosteten KI-Workspace, einer Desktop-App und einem selbst betriebenen Server wählen und wissen möchten, wie lokale Modelle dazupassen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LobeHub review',
    targetKeywords: ['LobeHub review', 'LobeChat', 'LobeHub vs Open WebUI', 'LobeHub license', 'LobeHub desktop app'],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**LobeHub ist hybrid statt rein lokal: Dasselbe Open-Source-Produkt läuft als Desktop-App, als gehosteter Cloud-Dienst und als Server, den Sie selbst betreiben, und lokale Modelle erreicht es über einen Anschluss wie Ollama.** Der Schwerpunkt hat sich vom schlichten Chatfenster zu Agenten verschoben, die im Team arbeiten; wer nur eine einfache lokale Chat-Oberfläche sucht, findet es womöglich größer als nötig.',
    quickAnswerTop: {
      de: {
        question: 'Ist LobeHub eine lokale App?',
        answer:
          'Teilweise. Die Desktop-Installer und der selbst gehostete Server laufen auf Ihrem eigenen Rechner, das Hauptprodukt ist jedoch ein Cloud-Dienst, und lokale Modelle werden über einen Provider-Anschluss wie Ollama eingebunden.',
        bullets: [
          'Es gibt einen kostenlosen Cloud-Tarif und drei Bezahltarife, die nur in US-Dollar ausgewiesen sind.',
          'Die Lizenz basiert auf Apache 2.0, mit einer Bedingung zur kommerziellen Lizenz für abgeleitete Produkte.',
          'PromptQuorum hat die Apps nicht praktisch getestet.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist LobeHub?', anchor: 'what-is-lobehub' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Funktionen', anchor: 'key-features' },
      { label: 'Self-Hosting', anchor: 'self-hosting' },
      { label: 'Lokale Modelle nutzen', anchor: 'local-models' },
      { label: 'Tarife und Preise', anchor: 'plans-and-pricing' },
      { label: 'Lizenz', anchor: 'license' },
      { label: 'Für wen es sich eignet', anchor: 'who-should-use' },
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
          {
            type: 'one-sentence',
            text: 'LobeHub, der Nachfolger von LobeChat, ist ein Open-Source-Workspace zum Bauen von KI-Agenten und zum gemeinsamen Betrieb, verfügbar als Desktop-App, in der Cloud oder auf Ihrem eigenen Server.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als Chat-App vor, die zu einem kleinen KI-Team herangewachsen ist: Sie beschreiben einen Agenten, er erhält Werkzeuge und ein Gedächtnis, und mehrere Agenten können an derselben Aufgabe arbeiten. Sie entscheiden, ob es auf Ihrem Computer, auf den Servern von LobeHub oder auf Ihren eigenen läuft.',
          },
        ],
        items: [
          'Umbenennung: Projekt und Repository wurden von LobeChat in LobeHub umbenannt; die alte Repository-Adresse leitet weiter.',
          'Plattformen: Desktop-Installer für macOS, Windows und Linux (Version 2.2.20, veröffentlicht am 18. Oktober 2026) sowie die Cloud-App und Self-Hosting.',
          'Lokale Modelle: Ollama ist ein unterstützter Provider und wird wie jeder andere eingerichtet.',
          `Code: ${st.de('lobechat')} GitHub-Sterne; das Repository wurde zuletzt am 24. Oktober 2026 aktualisiert.`,
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf die offizielle Website, das GitHub-Repository mit Dokumentation und die Datenschutzerklärung, geprüft am 24. Oktober 2026. Praktische Tests oder Benchmarks gab es nicht.',
          },
        ],
      },
      overview: {
        id: 'what-is-lobehub',
        title: 'Was ist LobeHub?',
        content: [
          '**LobeHub ist eine Open-Source-Plattform, um KI-Agenten zu erstellen und als Team arbeiten zu lassen; früher hieß sie LobeChat.** Die GitHub-Beschreibung nennt sie einen „Chief Agent Operator“, der Ihre Agenten einstellt, einplant und über sie berichtet; die Website spricht von einer Plattform für die Zusammenarbeit von Agenten.',
          'Das ursprüngliche LobeChat war eine selbst gehostete Chat-Oberfläche für viele Modellanbieter. Die heutige README ergänzt einen Agent Builder, Agentengruppen, die parallel an einer Aufgabe arbeiten, Pages zum gemeinsamen Schreiben mit mehreren Agenten, zeitgesteuerte Läufe, Projekte, gemeinsame Workspaces und die Funktion Personal Memory. Diese Rezension behandelt das Produkt, wie es im [LobeHub-Repository](https://github.com/lobehub/lobehub) veröffentlicht ist; die LICENSE-Datei dort verwendet noch den Namen LobeChat.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**LobeHub lässt sich auf drei Wegen nutzen: eine Desktop-App installieren, den Cloud-Dienst im Browser öffnen oder selbst hosten.** Die Desktop-Installer brauchen kein Terminal.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            'Plattform': 'macOS',
            'Bezugsquelle': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest) (.dmg für Apple Silicon und für Intel)',
          },
          {
            'Plattform': 'Windows',
            'Bezugsquelle': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest) (Setup-.exe)',
          },
          {
            'Plattform': 'Linux',
            'Bezugsquelle': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest) (AppImage, .deb, .rpm und Snap)',
          },
          {
            'Plattform': 'Web (Cloud)',
            'Bezugsquelle': '[app.lobehub.com](https://app.lobehub.com) (LobeHub Cloud, Konto erforderlich)',
          },
          {
            'Plattform': 'Selbst gehostet',
            'Bezugsquelle': '[Abschnitt Self-Hosting der README](https://github.com/lobehub/lobehub#-self-hosting) (Docker oder One-Click-Deploy)',
          },
          {
            'Plattform': 'Quellcode',
            'Bezugsquelle': '[lobehub/lobehub auf GitHub](https://github.com/lobehub/lobehub) (LobeHub Community License)',
          },
          {
            'Plattform': 'Website',
            'Bezugsquelle': '[lobehub.com](https://lobehub.com)',
          },
          {
            'Plattform': 'Datenschutzerklärung',
            'Bezugsquelle': '[lobehub.com/privacy](https://lobehub.com/privacy) (zuletzt aktualisiert am 5. März 2026)',
          },
        ],
        note: 'Geprüfte Version: 2.2.20, veröffentlicht auf GitHub Releases am 18. Oktober 2026; das Repository selbst wurde am 24. Oktober 2026 aktualisiert, daher gibt es keine Warnung wegen fehlender Pflege. Self-Hosting erfordert ein Terminal, wie unten beschrieben.',
      },
      features: {
        id: 'key-features',
        title: 'Funktionen',
        content: [
          '**In LobeHub sind Agenten die Arbeitseinheit; der Chat ist nur eine Möglichkeit, mit ihnen zu sprechen.** Die Liste stammt aus der README und von der Website.',
        ],
        items: [
          '**Agent Builder.** Sie beschreiben den Agenten einmal, und die Einrichtung wird für Sie vorgenommen.',
          '**Agentengruppen, Pages und Zeitplan.** Mehrere Agenten arbeiten mit gemeinsamem Kontext an einer Aufgabe, schreiben zusammen auf einer Seite oder laufen zu festgelegten Zeiten, während Sie abwesend sind.',
          '**Skills.** Die README nennt eine Bibliothek mit mehr als 10.000 Werkzeugen und MCP-kompatiblen Plugins.',
          '**Modelle.** Viele Anbieter stehen hinter einer Oberfläche, sodass Sie das Modell innerhalb derselben Konversationseinrichtung wechseln können.',
          '**Personal Memory und IM Gateway.** Agenten können aus Ihrer Arbeitsweise lernen und in den Chat-Apps erreichbar sein, die Sie ohnehin nutzen.',
        ],
        note: 'Was ein Modell kann (Bildverständnis, Werkzeugnutzung, Kontextlänge), hängt vom angebundenen Modell ab, nicht von LobeHub.',
      },
      selfHost: {
        id: 'self-hosting',
        title: 'Self-Hosting',
        content: [
          '**Self-Hosting erfordert ein Terminal und Docker oder ein Cloud-Konto für das One-Click-Deployment.** Die README beschreibt zwei Wege.',
        ],
        items: [
          '**Docker.** Legen Sie einen Ordner an, führen Sie das Setup-Skript aus der README aus (`bash <(curl -fsSL https://lobe.li/setup.sh)`) und starten Sie den Stack mit `docker compose up -d`.',
          '**One-Click-Deployment.** Schaltflächen für Vercel, Zeabur, Sealos, RepoCloud und Alibaba Cloud; die README verlangt einen `OPENAI_API_KEY` in den Umgebungsvariablen.',
        ],
        note: 'Für Einzelheiten verweist die README auf eine Docker-Deployment-Anleitung. Für diese Rezension haben wir keine selbst gehostete Instanz betrieben.',
      },
      localModels: {
        id: 'local-models',
        title: 'Lokale Modelle nutzen',
        content: [
          '**LobeHub führt Ollama als Provider auf und dokumentiert die Einrichtung.** Installieren Sie [Ollama](/de/local-llms/how-to-install-ollama), erlauben Sie dann Cross-Origin-Anfragen, indem Sie die Umgebungsvariable `OLLAMA_ORIGINS` auf `*` setzen und Ollama neu starten; danach kann LobeHub mit den von Ollama bereitgestellten Modellen chatten.',
          'Dieser Schritt stammt aus der Dokumentation der Browser-Version. Ob die Desktop-Apps ihn benötigen oder vollständig offline funktionieren, haben wir nicht getestet.',
        ],
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'Tarife und Preise',
        content: [
          '**LobeHub Cloud arbeitet nach dem Freemium-Modell; die Apps und der selbst gehostete Server sind laut Lizenz kostenlos.** Die Preise auf der Preisseite sind nur in US-Dollar angegeben; Preise in Landeswährung wurden nicht gefunden.',
        ],
        columns: ['Tarif', 'Preis', 'Enthalten'],
        rows: [
          {
            'Tarif': 'Free',
            'Preis': '0 USD',
            'Enthalten': '500K Credits pro Monat, 100 MB Vektorspeicher',
          },
          {
            'Tarif': 'Starter',
            'Preis': '12,9 USD pro Monat (9,9 USD bei jährlicher Abrechnung)',
            'Enthalten': '5M Credits, 1 GB Dateien',
          },
          {
            'Tarif': 'Premium',
            'Preis': '24,9 USD pro Monat (19,9 USD bei jährlicher Abrechnung)',
            'Enthalten': '15M Credits, 2 GB Dateien',
          },
          {
            'Tarif': 'Ultimate',
            'Preis': '49,9 USD pro Monat (39,9 USD bei jährlicher Abrechnung)',
            'Enthalten': '35M Credits, 4 GB Dateien',
          },
        ],
        note: 'Enterprise-Preise gibt es auf Anfrage. Laut Quelle spiegeln die Zahlen die Marketing-Website wider; sie empfiehlt, die Abrechnung in der App zu prüfen. Die Modellnutzung auf einem selbst gehosteten Server rechnet der jeweils angebundene Anbieter ab.',
      },
      license: {
        id: 'license',
        title: 'Lizenz',
        content: [
          '**LobeHub verwendet die LobeHub Community License, die auf der Apache License 2.0 basiert und weder reines MIT noch reines Apache ist.** Die kommerzielle Nutzung ist erlaubt, auch als Frontend- und Backend-Dienst ohne Änderung des Quellcodes. Wer ein abgeleitetes Werk entwickelt und verbreitet, benötigt eine kommerzielle Lizenz von LobeHub (Kontakt: hello@lobehub.com). Mitwirkende stimmen zudem zu, dass ihr Code kommerziell genutzt werden darf, auch in der Cloud-Edition, und dass der Hersteller die Lizenzbedingungen ändern kann.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen es sich eignet',
        items: [
          '**Menschen, die Agenten, Zeitpläne und gemeinsames Gedächtnis in einem Workspace möchten**, nicht nur ein Chatfenster.',
          '**Nutzer, die eine Installation per Doppelklick** unter macOS, Windows oder Linux und optional ein Cloud-Konto wünschen.',
          '**Self-Hoster**, die mit Docker vertraut sind und eine Oberfläche für Cloud- und Ollama-Modelle wollen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Die Apps im Einsatz.** Installation, Geschwindigkeit, Stabilität und die Desktop-Apps wurden nicht getestet.',
          '**Offline-Nutzung.** Ob die Desktop-Apps ohne Internetverbindung funktionieren oder Ollama ohne den Cross-Origin-Schritt erreichen, geht aus den von uns gelesenen Quellen nicht hervor.',
          '**Datenverarbeitung in der Cloud.** Laut Datenschutzerklärung werden Chatprotokolle standardmäßig lokal gespeichert und mit den Cloud-Servern synchronisiert, wenn Sie die Cloud-Synchronisierung aktivieren; in der mobilen App werde Chat-Inhalt nicht für das Modelltraining verwendet. Die Desktop- und Self-Hosted-Versionen behandelt sie nicht, und wir haben nichts davon geprüft.',
          '**Anzahl der Skills.** Die Angabe von mehr als 10.000 ist die Behauptung der README.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wesentlicher Unterschied'],
        rows: [
          {
            'App': '[Open WebUI](/de/local-llms/open-webui-review)',
            'Plattformen': 'Web, Desktop',
            'Preis / Lizenz': 'Kostenlos / BSD 3-Clause',
            'Wesentlicher Unterschied': 'Selbst gehostete Oberfläche mit integriertem RAG, meist mit Ollama betrieben',
          },
          {
            'App': '[LibreChat](/de/power-local-llm/librechat-review)',
            'Plattformen': 'Web',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Selbst gehosteter Multi-Provider-Chat mit Teamfunktionen',
          },
          {
            'App': '[Big-AGI](/de/local-llms/big-agi-review)',
            'Plattformen': 'Web',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Multi-Provider-Oberfläche mit Personas; Sie bringen Ihre eigenen Schlüssel mit',
          },
          {
            'App': '[Cherry Studio](/de/local-llms/cherry-studio-ai-desktop-client)',
            'Plattformen': 'Desktop',
            'Preis / Lizenz': 'Kostenlos / AGPL 3.0',
            'Wesentlicher Unterschied': 'Desktop-Client für Einzelnutzer ohne Server',
          },
        ],
        note: 'Angaben zu Wettbewerbern ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen jeder App auf deren eigener Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist LobeChat dasselbe wie LobeHub?',
            a: 'Ja. LobeHub ist der aktuelle Name des Projekts, das früher LobeChat hieß; das Repository liegt jetzt unter lobehub/lobehub, und die ältere Adresse leitet dorthin weiter.',
          },
          {
            q: 'Kann LobeHub offline laufen?',
            a: 'Unbekannt. Dokumentiert ist nur die Anbindung an einen lokalen Ollama-Server; die Offline-Nutzung der Desktop-Apps wurde nicht getestet.',
          },
          {
            q: 'Brauche ich ein Konto?',
            a: 'Für LobeHub Cloud ja. Die Datenschutzerklärung nennt unter den erhobenen Daten E-Mail-Adresse und Name. Ob Desktop-Apps und Self-Hosting ein Konto verlangen, haben wir nicht geprüft.',
          },
          {
            q: 'Ist die selbst gehostete Version kostenlos?',
            a: 'Ja, laut Lizenz, auch für die kommerzielle Nutzung in unveränderter Form; Sie bezahlen nur die Modellanbieter, die Sie anbinden.',
          },
          {
            q: 'Wo melde ich Probleme oder wünsche Funktionen?',
            a: 'Die README verweist auf die GitHub-Issues-Seite und eine Discord-Community.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'LobeHub ist der Chat-Oberfläche, mit der es begann, entwachsen: Es ist heute ein Agenten-Workspace, den man installieren, mieten oder selbst hosten kann. Der Release-Rhythmus, Installer für drei Desktop-Systeme und die dokumentierte Ollama-Unterstützung sind echte Stärken. Das hybride Modell, ein Cloud-zentriertes Produkt und die ungetestete Offline-Nutzung bedeuten: Wer ausschließlich lokal arbeiten muss, sollte das zuerst auf dem eigenen Rechner prüfen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[LobeHub-Website](https://lobehub.com) — Produktbeschreibung, geprüft am 24. Oktober 2026.',
          '[LobeHub-Preise](https://lobehub.com/pricing.md) — Tarife, Credits und Speicher, geprüft am 24. Oktober 2026.',
          '[LobeHub auf GitHub](https://github.com/lobehub/lobehub) — README, LICENSE, Releases (2.2.20) und Repository-Aktivität, geprüft am 24. Oktober 2026.',
          '[Using Ollama in LobeHub](https://github.com/lobehub/lobehub/blob/main/docs/usage/providers/ollama.mdx) — Einrichtung des Providers, geprüft am 24. Oktober 2026.',
          '[LobeHub-Datenschutzerklärung](https://lobehub.com/privacy) — erhobene Daten und Speicherung; zuletzt aktualisiert am 5. März 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Open-WebUI-Rezension](/de/local-llms/open-webui-review) — eine selbst gehostete Oberfläche für lokale Modelle mit integriertem RAG.',
          '[LibreChat-Rezension](/de/power-local-llm/librechat-review) — eine Open-Source-Chat-Oberfläche für mehrere Modelle, die Sie selbst hosten.',
          '[Big-AGI-Rezension](/de/local-llms/big-agi-review) — eine Chat-Oberfläche für mehrere Anbieter mit Personas.',
          '[LobeChat, Big-AGI, NextChat, Page Assist und Chatbox im Vergleich](/de/local-llms/lobechat-bigagi-nextchat-pageassist-chatbox-compared) — fünf Chat-Apps nebeneinander.',
          '[Lokale LLM-Chat-Assistenten im Vergleich](/de/power-local-llm/local-llm-chat-assistants-compared) — der Kategorievergleich.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Tools & Interfaces',
    heroImage: '/images/lobechat-review-hero-es.webp',
    title: 'Reseña de LobeHub (antes LobeChat): espacio de agentes con apps de escritorio y autoalojamiento',
    seoTitle: 'Reseña de LobeHub (antes LobeChat): espacio de agentes',
    intro:
      '[LobeHub](https://lobehub.com), antes LobeChat, es un espacio de trabajo de IA de código abierto cuyo código fuente está en [github.com/lobehub/lobehub](https://github.com/lobehub/lobehub). Empezó como una interfaz de chat autoalojada y hoy se describe como una plataforma de colaboración entre agentes: creas agentes, los agrupas en equipos y los dejas trabajar según un horario. Esta reseña cubre lo que hace hoy, dónde se ejecuta, si funcionan los modelos locales, la licencia y los planes.',
    metaDescription:
      'Reseña de LobeHub, el LobeChat renombrado: apps para macOS, Windows y Linux, servicio en la nube, autoalojamiento con Docker, Ollama y planes de pago.',
    twitterDescription:
      'Qué ofrece LobeHub tras el cambio de nombre de LobeChat: tres instaladores de escritorio, planes en la nube, Docker, modelos locales con Ollama, licencia y puntos sin verificar.',
    audience:
      'Personas que eligen entre un espacio de IA alojado, una app de escritorio y un servidor propio, y quieren saber cómo encajan los modelos locales.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LobeHub review',
    targetKeywords: ['LobeHub review', 'LobeChat', 'LobeHub vs Open WebUI', 'LobeHub license', 'LobeHub desktop app'],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**LobeHub es híbrido y no puramente local: el mismo producto de código abierto se ejecuta como app de escritorio, como servicio en la nube y como servidor que alojas tú, y llega a los modelos locales mediante un conector como Ollama.** Su enfoque ha pasado de una simple ventana de chat a agentes que trabajan en equipo, así que quien solo quiera una interfaz de chat local sencilla puede encontrarlo más grande de lo necesario.',
    quickAnswerTop: {
      es: {
        question: '¿Es LobeHub una app local?',
        answer:
          'En parte. Los instaladores de escritorio y el servidor autoalojado se ejecutan en tu propio equipo, pero el producto principal es un servicio en la nube, y los modelos locales se conectan mediante un proveedor como Ollama.',
        bullets: [
          'Hay un plan gratuito en la nube y tres planes de pago con precios solo en dólares estadounidenses.',
          'La licencia se basa en Apache 2.0, con una condición de licencia comercial para productos derivados.',
          'PromptQuorum no probó las apps en la práctica.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es LobeHub?', anchor: 'what-is-lobehub' },
      { label: 'Cómo obtenerlo', anchor: 'get-it' },
      { label: 'Funciones', anchor: 'key-features' },
      { label: 'Autoalojamiento', anchor: 'self-hosting' },
      { label: 'Usar modelos locales', anchor: 'local-models' },
      { label: 'Planes y precios', anchor: 'plans-and-pricing' },
      { label: 'Licencia', anchor: 'license' },
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
            text: 'LobeHub, el sucesor de LobeChat, es un espacio de trabajo de código abierto para crear agentes de IA y hacerlos trabajar juntos, disponible como app de escritorio, en la nube o en tu propio servidor.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en una app de chat que ha crecido hasta ser un pequeño equipo de IA: describes un agente, recibe herramientas y memoria, y varios agentes pueden trabajar en la misma tarea. Tú decides si se ejecuta en tu equipo, en los servidores de LobeHub o en los tuyos.',
          },
        ],
        items: [
          'Cambio de nombre: el proyecto y su repositorio pasaron de LobeChat a LobeHub; la dirección antigua del repositorio redirige.',
          'Plataformas: instaladores de escritorio para macOS, Windows y Linux (versión 2.2.20, publicada el 18 de octubre de 2026), además de la app en la nube y el autoalojamiento.',
          'Modelos locales: Ollama es un proveedor compatible y se configura como cualquier otro.',
          `Código: ${st.es('lobechat')} estrellas en GitHub; el repositorio se actualizó por última vez el 24 de octubre de 2026.`,
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web oficial, el repositorio de GitHub con su documentación y la política de privacidad, consultados el 24 de octubre de 2026. No hubo uso práctico ni pruebas de rendimiento.',
          },
        ],
      },
      overview: {
        id: 'what-is-lobehub',
        title: '¿Qué es LobeHub?',
        content: [
          '**LobeHub es una plataforma de código abierto para crear agentes de IA y hacerlos trabajar como equipo; antes se llamaba LobeChat.** La descripción de GitHub la presenta como un "Chief Agent Operator" que contrata, programa e informa sobre tus agentes; el sitio web habla de una plataforma de colaboración entre agentes.',
          'El LobeChat original era una interfaz de chat autoalojada para muchos proveedores de modelos. El README actual añade un Agent Builder, grupos de agentes que trabajan en paralelo en una tarea, Pages para escribir con varios agentes, ejecuciones programadas, proyectos, espacios de trabajo compartidos y una función de Personal Memory. Esta reseña cubre el producto tal como se publica en el [repositorio de LobeHub](https://github.com/lobehub/lobehub); el archivo LICENSE de ese repositorio todavía usa el nombre LobeChat.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerlo',
        content: [
          '**LobeHub se puede usar de tres maneras: instalar una app de escritorio, abrir el servicio en la nube en un navegador o alojarlo tú mismo.** Los instaladores de escritorio no requieren terminal.',
        ],
        columns: ['Plataforma', 'Dónde obtenerlo'],
        rows: [
          {
            'Plataforma': 'macOS',
            'Dónde obtenerlo': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest) (.dmg para Apple silicon y para Intel)',
          },
          {
            'Plataforma': 'Windows',
            'Dónde obtenerlo': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest) (.exe de instalación)',
          },
          {
            'Plataforma': 'Linux',
            'Dónde obtenerlo': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest) (AppImage, .deb, .rpm y snap)',
          },
          {
            'Plataforma': 'Web (nube)',
            'Dónde obtenerlo': '[app.lobehub.com](https://app.lobehub.com) (LobeHub Cloud, requiere cuenta)',
          },
          {
            'Plataforma': 'Autoalojado',
            'Dónde obtenerlo': '[Sección de autoalojamiento del README](https://github.com/lobehub/lobehub#-self-hosting) (Docker o despliegue con un clic)',
          },
          {
            'Plataforma': 'Código fuente',
            'Dónde obtenerlo': '[lobehub/lobehub en GitHub](https://github.com/lobehub/lobehub) (LobeHub Community License)',
          },
          {
            'Plataforma': 'Sitio web',
            'Dónde obtenerlo': '[lobehub.com](https://lobehub.com)',
          },
          {
            'Plataforma': 'Política de privacidad',
            'Dónde obtenerlo': '[lobehub.com/privacy](https://lobehub.com/privacy) (última actualización: 5 de marzo de 2026)',
          },
        ],
        note: 'Versión revisada: 2.2.20, publicada en GitHub Releases el 18 de octubre de 2026; el propio repositorio se actualizó el 24 de octubre de 2026, por lo que no hay aviso de proyecto sin mantenimiento. El autoalojamiento requiere una terminal, como se describe más abajo.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones',
        content: [
          '**En LobeHub los agentes son la unidad de trabajo; el chat es solo una forma de hablar con ellos.** La lista procede del README y del sitio web.',
        ],
        items: [
          '**Agent Builder.** Describes el agente una vez y la configuración se hace por ti.',
          '**Grupos de agentes, Pages y programación.** Varios agentes trabajan en una tarea con contexto compartido, escriben juntos en una página o se ejecutan a horas fijas mientras estás ausente.',
          '**Skills.** El README cita una biblioteca de más de 10,000 herramientas y plugins compatibles con MCP.',
          '**Modelos.** Muchos proveedores detrás de una sola interfaz, de modo que puedes cambiar de modelo dentro de la misma configuración de conversación.',
          '**Personal Memory e IM Gateway.** Los agentes pueden aprender de tu forma de trabajar y estar disponibles en las apps de mensajería que ya usas.',
        ],
        note: 'Lo que puede hacer cada modelo (visión, uso de herramientas, longitud de contexto) depende del modelo que conectes, no de LobeHub.',
      },
      selfHost: {
        id: 'self-hosting',
        title: 'Autoalojamiento',
        content: [
          '**El autoalojamiento requiere una terminal y Docker, o una cuenta en la nube para el despliegue con un clic.** El README describe dos vías.',
        ],
        items: [
          '**Docker.** Crea una carpeta, ejecuta el script de instalación del README (`bash <(curl -fsSL https://lobe.li/setup.sh)`) y arranca la pila con `docker compose up -d`.',
          '**Despliegue con un clic.** Botones para Vercel, Zeabur, Sealos, RepoCloud y Alibaba Cloud; el README pide una `OPENAI_API_KEY` en las variables de entorno.',
        ],
        note: 'Para los detalles, el README enlaza una guía de despliegue con Docker. No ejecutamos una instancia autoalojada para esta reseña.',
      },
      localModels: {
        id: 'local-models',
        title: 'Usar modelos locales',
        content: [
          '**LobeHub incluye Ollama como proveedor y documenta la configuración.** Instala [Ollama](/es/local-llms/how-to-install-ollama), permite las solicitudes de origen cruzado definiendo la variable de entorno `OLLAMA_ORIGINS` con el valor `*` y reinicia Ollama; después LobeHub puede chatear con los modelos que sirve Ollama.',
          'Ese paso procede de la documentación de la versión para navegador. No probamos si las apps de escritorio lo necesitan ni si funcionan por completo sin conexión.',
        ],
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'Planes y precios',
        content: [
          '**LobeHub Cloud es freemium; las apps y el servidor autoalojado son gratuitos según la licencia.** Los precios de la página de precios están solo en dólares estadounidenses; no se encontraron precios en moneda local.',
        ],
        columns: ['Plan', 'Precio', 'Qué incluye'],
        rows: [
          {
            'Plan': 'Free',
            'Precio': '0 USD',
            'Qué incluye': '500K créditos al mes, 100 MB de almacenamiento vectorial',
          },
          {
            'Plan': 'Starter',
            'Precio': '12.9 USD al mes (9.9 USD con facturación anual)',
            'Qué incluye': '5M créditos, 1 GB de archivos',
          },
          {
            'Plan': 'Premium',
            'Precio': '24.9 USD al mes (19.9 USD con facturación anual)',
            'Qué incluye': '15M créditos, 2 GB de archivos',
          },
          {
            'Plan': 'Ultimate',
            'Precio': '49.9 USD al mes (39.9 USD con facturación anual)',
            'Qué incluye': '35M créditos, 4 GB de archivos',
          },
        ],
        note: 'El precio Enterprise se consulta por contacto. Según la fuente, las cifras reflejan el sitio de marketing y recomienda revisar la facturación dentro de la app; el uso de modelos en un servidor autoalojado lo factura el proveedor que conectes.',
      },
      license: {
        id: 'license',
        title: 'Licencia',
        content: [
          '**LobeHub usa la LobeHub Community License, basada en la Apache License 2.0 y que no es MIT ni Apache en su forma simple.** Se permite el uso comercial, incluso como servicio de frontend y backend sin modificar el código fuente. Desarrollar y distribuir una obra derivada exige una licencia comercial de LobeHub (contacto: hello@lobehub.com). Además, quienes contribuyen aceptan que su código se use comercialmente, también en la edición en la nube, y que el productor pueda cambiar las condiciones de la licencia.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Quienes quieren agentes, programación y memoria compartida en un solo espacio**, no solo una ventana de chat.',
          '**Usuarios que prefieren una instalación con doble clic** en macOS, Windows o Linux y, opcionalmente, una cuenta en la nube.',
          '**Quienes autoaloja** y se sienten cómodos con Docker y quieren una interfaz para modelos en la nube y con Ollama.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Las apps en uso.** No se probaron la instalación, la velocidad, la estabilidad ni las apps de escritorio.',
          '**Uso sin conexión.** Las fuentes que leímos no indican si las apps de escritorio funcionan sin internet ni si llegan a Ollama sin el paso de origen cruzado.',
          '**Tratamiento de datos en la nube.** La política de privacidad dice que los registros de chat se guardan localmente de forma predeterminada y se sincronizan con los servidores en la nube si activas esa sincronización, y que en la app móvil el contenido del chat no se usa para entrenar modelos; no trata las versiones de escritorio ni autoalojadas, y no auditamos nada de esto.',
          '**Número de skills.** La cifra de más de 10,000 es una afirmación del README.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            'App': '[Open WebUI](/es/local-llms/open-webui-review)',
            'Plataformas': 'Web, escritorio',
            'Precio / licencia': 'Gratis / BSD 3-Clause',
            'Diferencia clave': 'Interfaz autoalojada con RAG integrado, normalmente usada con Ollama',
          },
          {
            'App': '[LibreChat](/es/power-local-llm/librechat-review)',
            'Plataformas': 'Web',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Chat multiproveedor autoalojado con funciones de equipo',
          },
          {
            'App': '[Big-AGI](/es/local-llms/big-agi-review)',
            'Plataformas': 'Web',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Interfaz multiproveedor con personas; traes tus propias claves',
          },
          {
            'App': '[Cherry Studio](/es/local-llms/cherry-studio-ai-desktop-client)',
            'Plataformas': 'Escritorio',
            'Precio / licencia': 'Gratis / AGPL 3.0',
            'Diferencia clave': 'Cliente de escritorio para un solo usuario, sin servidor',
          },
        ],
        note: 'Los datos de los competidores cambian a menudo; confirma el precio, la licencia y las plataformas actuales en la página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿LobeChat es lo mismo que LobeHub?',
            a: 'Sí. LobeHub es el nombre actual del proyecto que se llamaba LobeChat; el repositorio está ahora en lobehub/lobehub y la dirección anterior redirige a él.',
          },
          {
            q: '¿Puede LobeHub funcionar sin conexión?',
            a: 'No se sabe. Solo está documentada la conexión con un servidor local de Ollama, y el uso sin conexión de las apps de escritorio no se probó.',
          },
          {
            q: '¿Necesito una cuenta?',
            a: 'Para LobeHub Cloud, sí. La política de privacidad incluye la dirección de correo y el nombre entre los datos que recoge. No comprobamos si las apps de escritorio y el autoalojamiento exigen una cuenta.',
          },
          {
            q: '¿La versión autoalojada es gratuita?',
            a: 'Sí según la licencia, también para uso comercial sin modificar; solo pagas a los proveedores de modelos que conectes.',
          },
          {
            q: '¿Dónde informo de problemas o pido funciones?',
            a: 'El README remite a la página de issues de GitHub y a una comunidad de Discord.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'LobeHub ha superado la interfaz de chat con la que empezó: ahora es un espacio de agentes que puedes instalar, contratar o alojar. Su ritmo de versiones, los instaladores para tres sistemas de escritorio y la compatibilidad documentada con Ollama son puntos fuertes reales. El modelo híbrido, un producto centrado en la nube y el uso sin conexión sin probar implican que quien necesite funcionamiento estrictamente local debería comprobarlo primero en su propio equipo.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de LobeHub](https://lobehub.com) — descripción del producto, consultado el 24 de octubre de 2026.',
          '[Precios de LobeHub](https://lobehub.com/pricing.md) — planes, créditos y almacenamiento, consultado el 24 de octubre de 2026.',
          '[LobeHub en GitHub](https://github.com/lobehub/lobehub) — README, LICENSE, versiones (2.2.20) y actividad del repositorio, consultado el 24 de octubre de 2026.',
          '[Using Ollama in LobeHub](https://github.com/lobehub/lobehub/blob/main/docs/usage/providers/ollama.mdx) — configuración del proveedor, consultado el 24 de octubre de 2026.',
          '[Política de privacidad de LobeHub](https://lobehub.com/privacy) — datos recogidos y almacenamiento; última actualización el 5 de marzo de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Open WebUI](/es/local-llms/open-webui-review) — una interfaz autoalojada para modelos locales con RAG integrado.',
          '[Reseña de LibreChat](/es/power-local-llm/librechat-review) — una interfaz de chat multimodelo de código abierto que alojas tú.',
          '[Reseña de Big-AGI](/es/local-llms/big-agi-review) — una interfaz de chat multiproveedor con personas.',
          '[LobeChat, Big-AGI, NextChat, Page Assist y Chatbox comparados](/es/local-llms/lobechat-bigagi-nextchat-pageassist-chatbox-compared) — cinco apps de chat lado a lado.',
          '[Asistentes de chat con LLM local comparados](/es/power-local-llm/local-llm-chat-assistants-compared) — la comparativa de la categoría.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Tools & Interfaces',
    heroImage: '/images/lobechat-review-hero-fr.webp',
    title: 'Test de LobeHub (ex-LobeChat) : espace d\'agents avec applications de bureau et auto-hébergement',
    seoTitle: 'Test de LobeHub (ex-LobeChat) : espace de travail d\'agents',
    intro:
      '[LobeHub](https://lobehub.com), anciennement LobeChat, est un espace de travail IA open source dont le code source se trouve sur [github.com/lobehub/lobehub](https://github.com/lobehub/lobehub). Il a débuté comme interface de chat auto-hébergée et se présente aujourd\'hui comme une plateforme de collaboration entre agents : vous créez des agents, vous les regroupez en équipes et vous les faites travailler selon un calendrier. Ce test couvre ce qu\'il fait aujourd\'hui, où il fonctionne, l\'usage des modèles locaux, la licence et les offres.',
    metaDescription:
      'Test de LobeHub, le LobeChat rebaptisé : applications macOS, Windows et Linux, service cloud, auto-hébergement Docker, prise en charge d\'Ollama et offres.',
    twitterDescription:
      'Ce que propose LobeHub depuis le changement de nom de LobeChat : trois installateurs de bureau, offres cloud, Docker, modèles locaux via Ollama, licence et points non vérifiés.',
    audience:
      'Personnes qui choisissent entre un espace IA hébergé, une application de bureau et un serveur auto-hébergé, et qui veulent savoir comment s\'intègrent les modèles locaux.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LobeHub review',
    targetKeywords: ['LobeHub review', 'LobeChat', 'LobeHub vs Open WebUI', 'LobeHub license', 'LobeHub desktop app'],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**LobeHub est hybride plutôt que purement local : le même produit open source fonctionne en application de bureau, en service cloud hébergé et en serveur que vous hébergez vous-même, et il atteint les modèles locaux par un connecteur comme Ollama.** Son centre de gravité est passé d\'une simple fenêtre de chat à des agents qui travaillent en équipe ; qui ne veut qu\'une interface de chat locale simple la trouvera peut-être plus vaste que nécessaire.',
    quickAnswerTop: {
      fr: {
        question: 'LobeHub est-il une application locale ?',
        answer:
          'En partie. Les installateurs de bureau et le serveur auto-hébergé tournent sur votre propre machine, mais le produit principal est un service cloud, et les modèles locaux passent par un connecteur de fournisseur comme Ollama.',
        bullets: [
          'Une offre cloud gratuite existe, avec trois offres payantes affichées uniquement en dollars américains.',
          'La licence est basée sur Apache 2.0, avec une condition de licence commerciale pour les produits dérivés.',
          'PromptQuorum n\'a pas testé les applications en pratique.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que LobeHub ?', anchor: 'what-is-lobehub' },
      { label: 'Où le trouver', anchor: 'get-it' },
      { label: 'Fonctions', anchor: 'key-features' },
      { label: 'Auto-hébergement', anchor: 'self-hosting' },
      { label: 'Utiliser des modèles locaux', anchor: 'local-models' },
      { label: 'Offres et tarifs', anchor: 'plans-and-pricing' },
      { label: 'Licence', anchor: 'license' },
      { label: 'À qui il convient', anchor: 'who-should-use' },
      { label: 'Ce que nous n\'avons pas pu vérifier', anchor: 'who-should-not-use' },
      { label: 'Concurrents et alternatives', anchor: 'vs-alternatives' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LobeHub, successeur de LobeChat, est un espace de travail open source pour créer des agents IA et les faire travailler ensemble, disponible en application de bureau, dans le cloud ou sur votre propre serveur.',
          },
          {
            type: 'plain-terms',
            text: 'Imaginez une application de chat devenue une petite équipe d\'IA : vous décrivez un agent, il reçoit des outils et une mémoire, et plusieurs agents peuvent travailler sur la même tâche. Vous choisissez s\'il tourne sur votre ordinateur, sur les serveurs de LobeHub ou sur les vôtres.',
          },
        ],
        items: [
          'Changement de nom : le projet et son dépôt sont passés de LobeChat à LobeHub ; l\'ancienne adresse du dépôt redirige.',
          'Plateformes : installateurs de bureau pour macOS, Windows et Linux (version 2.2.20, publiée le 18 octobre 2026), plus l\'application cloud et l\'auto-hébergement.',
          'Modèles locaux : Ollama est un fournisseur pris en charge, configuré comme n\'importe quel autre.',
          `Code : ${st.fr('lobechat')} étoiles GitHub ; le dépôt a été mis à jour pour la dernière fois le 24 octobre 2026.`,
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s\'appuie sur le site officiel, le dépôt GitHub avec sa documentation et la politique de confidentialité, consultés le 24 octobre 2026. Il n\'a comporté ni usage pratique ni benchmark.',
          },
        ],
      },
      overview: {
        id: 'what-is-lobehub',
        title: 'Qu\'est-ce que LobeHub ?',
        content: [
          '**LobeHub est une plateforme open source pour créer des agents IA et les faire travailler en équipe ; elle s\'appelait auparavant LobeChat.** La description GitHub la présente comme un « Chief Agent Operator » qui recrute, planifie et rend compte de vos agents ; le site web parle d\'une plateforme de collaboration entre agents.',
          'Le LobeChat d\'origine était une interface de chat auto-hébergée pour de nombreux fournisseurs de modèles. Le README actuel ajoute un Agent Builder, des groupes d\'agents qui travaillent en parallèle sur une tâche, des Pages pour écrire avec plusieurs agents, des exécutions planifiées, des projets, des espaces de travail partagés et une fonction Personal Memory. Ce test porte sur le produit tel qu\'il est publié dans le [dépôt LobeHub](https://github.com/lobehub/lobehub) ; le fichier LICENSE y emploie encore le nom LobeChat.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où le trouver',
        content: [
          '**LobeHub s\'utilise de trois façons : installer une application de bureau, ouvrir le service cloud dans un navigateur ou l\'héberger vous-même.** Les installateurs de bureau ne demandent aucun terminal.',
        ],
        columns: ['Plateforme', 'Où le trouver'],
        rows: [
          {
            'Plateforme': 'macOS',
            'Où le trouver': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest) (.dmg pour Apple silicon et pour Intel)',
          },
          {
            'Plateforme': 'Windows',
            'Où le trouver': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest) (.exe d\'installation)',
          },
          {
            'Plateforme': 'Linux',
            'Où le trouver': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest) (AppImage, .deb, .rpm et snap)',
          },
          {
            'Plateforme': 'Web (cloud)',
            'Où le trouver': '[app.lobehub.com](https://app.lobehub.com) (LobeHub Cloud, compte requis)',
          },
          {
            'Plateforme': 'Auto-hébergé',
            'Où le trouver': '[Section d\'auto-hébergement du README](https://github.com/lobehub/lobehub#-self-hosting) (Docker ou déploiement en un clic)',
          },
          {
            'Plateforme': 'Code source',
            'Où le trouver': '[lobehub/lobehub sur GitHub](https://github.com/lobehub/lobehub) (LobeHub Community License)',
          },
          {
            'Plateforme': 'Site web',
            'Où le trouver': '[lobehub.com](https://lobehub.com)',
          },
          {
            'Plateforme': 'Politique de confidentialité',
            'Où le trouver': '[lobehub.com/privacy](https://lobehub.com/privacy) (dernière mise à jour : 5 mars 2026)',
          },
        ],
        note: 'Version testée : 2.2.20, publiée sur GitHub Releases le 18 octobre 2026 ; le dépôt lui-même a été mis à jour le 24 octobre 2026, il n\'y a donc pas d\'avertissement d\'abandon. L\'auto-hébergement exige un terminal, comme décrit ci-dessous.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions',
        content: [
          '**Dans LobeHub, l\'agent est l\'unité de travail ; le chat n\'est qu\'une façon de lui parler.** La liste ci-dessous provient du README et du site web.',
        ],
        items: [
          '**Agent Builder.** Vous décrivez l\'agent une fois et la configuration se fait pour vous.',
          '**Groupes d\'agents, Pages et planification.** Plusieurs agents travaillent sur une tâche avec un contexte partagé, écrivent ensemble sur une page ou s\'exécutent à heures fixes pendant votre absence.',
          '**Skills.** Le README cite une bibliothèque de plus de 10 000 outils et plugins compatibles MCP.',
          '**Modèles.** De nombreux fournisseurs derrière une seule interface, ce qui permet de changer de modèle au sein de la même configuration de conversation.',
          '**Personal Memory et IM Gateway.** Les agents peuvent apprendre de votre façon de travailler et être joignables dans les messageries que vous utilisez déjà.',
        ],
        note: 'Ce que peut faire un modèle (vision, usage d\'outils, longueur de contexte) dépend du modèle connecté, pas de LobeHub.',
      },
      selfHost: {
        id: 'self-hosting',
        title: 'Auto-hébergement',
        content: [
          '**L\'auto-hébergement demande un terminal et Docker, ou un compte cloud pour le déploiement en un clic.** Le README décrit deux voies.',
        ],
        items: [
          '**Docker.** Créez un dossier, exécutez le script d\'installation du README (`bash <(curl -fsSL https://lobe.li/setup.sh)`), puis démarrez la pile avec `docker compose up -d`.',
          '**Déploiement en un clic.** Boutons pour Vercel, Zeabur, Sealos, RepoCloud et Alibaba Cloud ; le README demande une `OPENAI_API_KEY` dans les variables d\'environnement.',
        ],
        note: 'Pour le détail, le README renvoie à un guide de déploiement Docker. Nous n\'avons pas exploité d\'instance auto-hébergée pour ce test.',
      },
      localModels: {
        id: 'local-models',
        title: 'Utiliser des modèles locaux',
        content: [
          '**LobeHub liste Ollama comme fournisseur et documente la configuration.** Installez [Ollama](/fr/local-llms/how-to-install-ollama), autorisez les requêtes inter-origines en définissant la variable d\'environnement `OLLAMA_ORIGINS` sur `*`, puis redémarrez Ollama ; LobeHub peut alors dialoguer avec les modèles servis par Ollama.',
          'Cette étape provient de la documentation de la version navigateur. Nous n\'avons pas testé si les applications de bureau en ont besoin ni si elles fonctionnent entièrement hors ligne.',
        ],
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'Offres et tarifs',
        content: [
          '**LobeHub Cloud est freemium ; les applications et le serveur auto-hébergé sont gratuits selon la licence.** Les prix de la page tarifaire sont uniquement en dollars américains ; aucun prix en monnaie locale n\'a été trouvé.',
        ],
        columns: ['Offre', 'Prix', 'Contenu'],
        rows: [
          {
            'Offre': 'Free',
            'Prix': '0 USD',
            'Contenu': '500K crédits par mois, 100 Mo de stockage vectoriel',
          },
          {
            'Offre': 'Starter',
            'Prix': '12.9 USD par mois (9.9 USD en facturation annuelle)',
            'Contenu': '5M crédits, 1 Go de fichiers',
          },
          {
            'Offre': 'Premium',
            'Prix': '24.9 USD par mois (19.9 USD en facturation annuelle)',
            'Contenu': '15M crédits, 2 Go de fichiers',
          },
          {
            'Offre': 'Ultimate',
            'Prix': '49.9 USD par mois (39.9 USD en facturation annuelle)',
            'Contenu': '35M crédits, 4 Go de fichiers',
          },
        ],
        note: 'Le tarif Enterprise est communiqué sur contact. Selon la source, ces chiffres reflètent le site marketing et elle recommande de vérifier la facturation dans l\'application ; l\'usage des modèles sur un serveur auto-hébergé est facturé par le fournisseur que vous connectez.',
      },
      license: {
        id: 'license',
        title: 'Licence',
        content: [
          '**LobeHub utilise la LobeHub Community License, basée sur l\'Apache License 2.0, qui n\'est ni du MIT ni de l\'Apache pur.** L\'usage commercial est autorisé, y compris comme service frontend et backend sans modifier le code source. Développer et distribuer une œuvre dérivée exige une licence commerciale de LobeHub (contact : hello@lobehub.com). Les contributeurs acceptent en outre que leur code puisse être utilisé commercialement, y compris dans l\'édition cloud, et que l\'éditeur puisse modifier les conditions de la licence.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il convient',
        items: [
          '**Ceux qui veulent des agents, des planifications et une mémoire partagée dans un seul espace**, pas seulement une fenêtre de chat.',
          '**Les utilisateurs qui souhaitent une installation par double-clic** sur macOS, Windows ou Linux et, en option, un compte cloud.',
          '**Les auto-hébergeurs** à l\'aise avec Docker qui veulent une interface pour les modèles cloud et Ollama.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Les applications à l\'usage.** L\'installation, la vitesse, la stabilité et les applications de bureau n\'ont pas été testées.',
          '**L\'usage hors ligne.** Les sources lues n\'indiquent pas si les applications de bureau fonctionnent sans connexion internet ni si elles joignent Ollama sans l\'étape inter-origines.',
          '**Le traitement des données dans le cloud.** La politique de confidentialité indique que les journaux de chat sont stockés localement par défaut et synchronisés avec les serveurs cloud si vous activez la synchronisation, et que dans l\'application mobile le contenu des chats n\'est pas utilisé pour l\'entraînement des modèles ; elle ne traite pas les versions de bureau ni auto-hébergées, et nous n\'avons rien audité.',
          '**Le nombre de skills.** Le chiffre de plus de 10 000 est une affirmation du README.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            'Application': '[Open WebUI](/fr/local-llms/open-webui-review)',
            'Plateformes': 'Web, bureau',
            'Prix / licence': 'Gratuit / BSD 3-Clause',
            'Différence clé': 'Interface auto-hébergée avec RAG intégré, généralement utilisée avec Ollama',
          },
          {
            'Application': '[LibreChat](/fr/power-local-llm/librechat-review)',
            'Plateformes': 'Web',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Chat multi-fournisseurs auto-hébergé avec fonctions d\'équipe',
          },
          {
            'Application': '[Big-AGI](/fr/local-llms/big-agi-review)',
            'Plateformes': 'Web',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Interface multi-fournisseurs avec personas ; vous apportez vos propres clés',
          },
          {
            'Application': '[Cherry Studio](/fr/local-llms/cherry-studio-ai-desktop-client)',
            'Plateformes': 'Bureau',
            'Prix / licence': 'Gratuit / AGPL 3.0',
            'Différence clé': 'Client de bureau mono-utilisateur, sans serveur à gérer',
          },
        ],
        note: 'Les informations sur les concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels sur la page de chaque application.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'LobeChat est-il la même chose que LobeHub ?',
            a: 'Oui. LobeHub est le nom actuel du projet qui s\'appelait LobeChat ; le dépôt se trouve désormais à l\'adresse lobehub/lobehub et l\'ancienne adresse y redirige.',
          },
          {
            q: 'LobeHub peut-il fonctionner hors ligne ?',
            a: 'Inconnu. Seule la connexion à un serveur Ollama local est documentée, et l\'usage hors ligne des applications de bureau n\'a pas été testé.',
          },
          {
            q: 'Ai-je besoin d\'un compte ?',
            a: 'Pour LobeHub Cloud, oui. La politique de confidentialité cite l\'adresse e-mail et le nom parmi les données collectées. Nous n\'avons pas vérifié si les applications de bureau et l\'auto-hébergement exigent un compte.',
          },
          {
            q: 'La version auto-hébergée est-elle gratuite ?',
            a: 'Oui selon la licence, y compris pour un usage commercial tel quel ; vous ne payez que les fournisseurs de modèles que vous connectez.',
          },
          {
            q: 'Où signaler un problème ou demander une fonction ?',
            a: 'Le README renvoie à la page d\'issues GitHub et à une communauté Discord.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'LobeHub a dépassé l\'interface de chat dont il est parti : c\'est désormais un espace d\'agents que l\'on peut installer, louer ou héberger. Son rythme de versions, ses installateurs pour trois systèmes de bureau et la prise en charge documentée d\'Ollama sont de vrais atouts. Le modèle hybride, un produit centré sur le cloud et un usage hors ligne non testé impliquent que ceux qui exigent un fonctionnement strictement local doivent d\'abord le vérifier sur leur propre machine.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site web de LobeHub](https://lobehub.com) — description du produit, consultée le 24 octobre 2026.',
          '[Tarifs de LobeHub](https://lobehub.com/pricing.md) — offres, crédits et stockage, consultés le 24 octobre 2026.',
          '[LobeHub sur GitHub](https://github.com/lobehub/lobehub) — README, LICENSE, versions (2.2.20) et activité du dépôt, consultés le 24 octobre 2026.',
          '[Using Ollama in LobeHub](https://github.com/lobehub/lobehub/blob/main/docs/usage/providers/ollama.mdx) — configuration du fournisseur, consultée le 24 octobre 2026.',
          '[Politique de confidentialité de LobeHub](https://lobehub.com/privacy) — données collectées et stockage ; dernière mise à jour le 5 mars 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Test d\'Open WebUI](/fr/local-llms/open-webui-review) — une interface auto-hébergée pour modèles locaux avec RAG intégré.',
          '[Test de LibreChat](/fr/power-local-llm/librechat-review) — une interface de chat multi-modèles open source que vous hébergez.',
          '[Test de Big-AGI](/fr/local-llms/big-agi-review) — une interface de chat multi-fournisseurs avec personas.',
          '[LobeChat, Big-AGI, NextChat, Page Assist et Chatbox comparés](/fr/local-llms/lobechat-bigagi-nextchat-pageassist-chatbox-compared) — cinq applications de chat côte à côte.',
          '[Assistants de chat LLM locaux comparés](/fr/power-local-llm/local-llm-chat-assistants-compared) — le comparatif de la catégorie.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Tools & Interfaces',
    heroImage: '/images/lobechat-review-hero-ja.webp',
    title: 'LobeHubレビュー（旧LobeChat）：デスクトップアプリとセルフホストに対応したエージェント基盤',
    seoTitle: 'LobeHubレビュー（旧LobeChat）：エージェント基盤',
    intro:
      '[LobeHub](https://lobehub.com)は旧LobeChatで、ソースコードを[github.com/lobehub/lobehub](https://github.com/lobehub/lobehub)に公開しているオープンソースのAIワークスペースです。もともとはセルフホスト型のチャット画面でしたが、現在はエージェント協働プラットフォームを名乗っています。エージェントを作り、チームにまとめ、スケジュールで動かせます。このレビューでは、現在の機能、動作環境、ローカルモデルの使い方、ライセンス、プランを扱います。',
    metaDescription:
      '名称変更後のLobeHub（旧LobeChat）を解説。3つのデスクトップOS用アプリ、クラウド、Dockerセルフホスト、Ollama対応、ライセンス、料金を紹介します。',
    twitterDescription:
      'LobeChatから名称が変わったLobeHubの現在地：3つのインストーラー、クラウドプラン、Docker運用、Ollama経由のローカルモデル、ライセンス、未確認の点。',
    audience:
      'ホスト型のAIワークスペース、デスクトップアプリ、セルフホストのサーバーのどれにするか迷っていて、ローカルモデルとの関係を知りたい方。',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LobeHub review',
    targetKeywords: ['LobeHub review', 'LobeChat', 'LobeHub vs Open WebUI', 'LobeHub license', 'LobeHub desktop app'],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**LobeHubは純粋なローカルアプリではなくハイブリッドです。同じオープンソース製品がデスクトップアプリ、ホスト型クラウドサービス、自分で運用するサーバーとして動き、ローカルモデルにはOllamaなどのコネクタ経由で接続します。** 焦点は単純なチャット画面から、チームで動くエージェントへ移っているため、シンプルなローカルチャット画面だけが欲しい方には大きすぎる場合があります。',
    quickAnswerTop: {
      ja: {
        question: 'LobeHubはローカルアプリですか？',
        answer:
          '一部だけそうです。デスクトップ版インストーラーとセルフホストのサーバーは自分のマシンで動きますが、主力製品はクラウドサービスで、ローカルモデルはOllamaなどのプロバイダー接続で利用します。',
        bullets: [
          '無料のクラウドプランがあり、有料プランは3種類で、価格は米ドル表記のみです。',
          'ライセンスはApache 2.0ベースで、派生製品には商用ライセンスの条件があります。',
          'PromptQuorumはアプリを実際には試していません。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'LobeHubとは?', anchor: 'what-is-lobehub' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '機能', anchor: 'key-features' },
      { label: 'セルフホスト', anchor: 'self-hosting' },
      { label: 'ローカルモデルの使い方', anchor: 'local-models' },
      { label: 'プランと料金', anchor: 'plans-and-pricing' },
      { label: 'ライセンス', anchor: 'license' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかった点', anchor: 'who-should-not-use' },
      { label: '競合と代替アプリ', anchor: 'vs-alternatives' },
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
            text: 'LobeChatの後継であるLobeHubは、AIエージェントを作って一緒に動かすためのオープンソースのワークスペースで、デスクトップアプリ、クラウド、自分のサーバーのいずれでも使えます。',
          },
          {
            type: 'plain-terms',
            text: 'チャットアプリが小さなAIチームに成長したものと考えてください。エージェントを説明するとツールとメモリが与えられ、複数のエージェントが同じ作業を進められます。動かす場所は、自分のパソコン、LobeHubのサーバー、自分のサーバーから選べます。',
          },
        ],
        items: [
          '名称変更：プロジェクトとリポジトリはLobeChatからLobeHubに変わり、旧リポジトリのアドレスは転送されます。',
          '対応環境：macOS、Windows、Linux用のデスクトップインストーラー（バージョン2.2.20、2026年10月18日公開）に加え、クラウド版とセルフホストがあります。',
          'ローカルモデル：Ollamaは対応プロバイダーで、他と同じように設定します。',
          `コード：GitHubスターは${st.ja('lobechat')}、リポジトリの最終更新は2026年10月24日です。`,
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、公式サイト、GitHubリポジトリとそのドキュメント、プライバシーポリシーを2026年10月24日に確認した内容に基づきます。実際の使用やベンチマークは行っていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-lobehub',
        title: 'LobeHubとは?',
        content: [
          '**LobeHubは、AIエージェントを作ってチームとして動かすためのオープンソースのプラットフォームで、以前の名称はLobeChatです。** GitHubの説明では、エージェントを採用し、スケジュールし、報告させる「Chief Agent Operator」とされ、公式サイトではエージェント協働プラットフォームと説明されています。',
          '最初のLobeChatは、多くのモデル提供元に対応するセルフホスト型のチャット画面でした。現在のREADMEには、Agent Builder、1つの作業を並列で進めるエージェントグループ、複数のエージェントと文章を書くPages、スケジュール実行、プロジェクト、共有ワークスペース、Personal Memoryが加わっています。このレビューは[LobeHubリポジトリ](https://github.com/lobehub/lobehub)で公開されている製品を対象とします。同リポジトリのLICENSEファイルには、まだLobeChatの名称が使われています。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**LobeHubの使い方は3通りです。デスクトップアプリをインストールする、ブラウザーでクラウドサービスを開く、自分でホストする。** デスクトップ版インストーラーにターミナルは不要です。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'macOS',
            '入手先': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest)（Apple silicon用とIntel用の.dmg）',
          },
          {
            'プラットフォーム': 'Windows',
            '入手先': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest)（セットアップ用.exe）',
          },
          {
            'プラットフォーム': 'Linux',
            '入手先': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest)（AppImage、.deb、.rpm、snap）',
          },
          {
            'プラットフォーム': 'ウェブ（クラウド）',
            '入手先': '[app.lobehub.com](https://app.lobehub.com)（LobeHub Cloud、アカウントが必要）',
          },
          {
            'プラットフォーム': 'セルフホスト',
            '入手先': '[READMEのセルフホスト項目](https://github.com/lobehub/lobehub#-self-hosting)（Dockerまたはワンクリックデプロイ）',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '[GitHubのlobehub/lobehub](https://github.com/lobehub/lobehub)（LobeHub Community License）',
          },
          {
            'プラットフォーム': '公式サイト',
            '入手先': '[lobehub.com](https://lobehub.com)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[lobehub.com/privacy](https://lobehub.com/privacy)（最終更新：2026年3月5日）',
          },
        ],
        note: '確認したバージョン：2.2.20（2026年10月18日にGitHub Releasesで公開）。リポジトリ自体は2026年10月24日に更新されているため、メンテナンス停止の警告は出していません。セルフホストには、後述のとおりターミナルが必要です。',
      },
      features: {
        id: 'key-features',
        title: '機能',
        content: [
          '**LobeHubではエージェントが作業の単位で、チャットはその1つの対話手段にすぎません。** 以下はREADMEと公式サイトの記載に基づきます。',
        ],
        items: [
          '**Agent Builder。** エージェントを一度説明すれば、設定は自動で行われます。',
          '**エージェントグループ、Pages、スケジュール。** 複数のエージェントが共有コンテキストで1つの作業を進めたり、1ページを共同で書いたり、不在中も決めた時刻に実行したりします。',
          '**Skills。** READMEは、10,000以上のツールとMCP対応プラグインのライブラリがあるとしています。',
          '**モデル。** 多くのプロバイダーを1つの画面にまとめており、同じ会話設定の中でモデルを切り替えられます。',
          '**Personal MemoryとIM Gateway。** エージェントは作業の仕方から学び、普段使うチャットアプリから呼び出せます。',
        ],
        note: '各モデルでできること（画像認識、ツール利用、コンテキスト長）は、LobeHubではなく接続するモデルによって決まります。',
      },
      selfHost: {
        id: 'self-hosting',
        title: 'セルフホスト',
        content: [
          '**セルフホストにはターミナルとDockerが必要です。ワンクリックデプロイにはクラウドのアカウントが必要です。** READMEは2つの方法を説明しています。',
        ],
        items: [
          '**Docker。** フォルダーを作り、READMEのセットアップスクリプト（`bash <(curl -fsSL https://lobe.li/setup.sh)`）を実行し、`docker compose up -d`でスタックを起動します。',
          '**ワンクリックデプロイ。** Vercel、Zeabur、Sealos、RepoCloud、Alibaba Cloud用のボタンがあります。READMEでは環境変数に`OPENAI_API_KEY`を設定するよう求めています。',
        ],
        note: '詳細はREADMEにリンクされているDockerデプロイガイドを参照してください。このレビューのためにセルフホスト環境は動かしていません。',
      },
      localModels: {
        id: 'local-models',
        title: 'ローカルモデルの使い方',
        content: [
          '**LobeHubはOllamaをプロバイダーとして挙げ、設定方法を文書化しています。** [Ollama](/ja/local-llms/how-to-install-ollama)をインストールし、環境変数`OLLAMA_ORIGINS`を`*`に設定してOllamaを再起動し、クロスオリジンのリクエストを許可すると、LobeHubからOllamaが提供するモデルとチャットできます。',
          'この手順はブラウザー版のドキュメントに基づきます。デスクトップアプリで必要かどうか、完全にオフラインで動くかどうかは確認していません。',
        ],
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'プランと料金',
        content: [
          '**LobeHub Cloudはフリーミアムです。アプリとセルフホストのサーバーは、ライセンス上無料で使えます。** 料金ページの価格は米ドル表記のみで、現地通貨の価格は見つかりませんでした。',
        ],
        columns: ['プラン', '価格', '含まれる内容'],
        rows: [
          {
            'プラン': 'Free',
            '価格': '0 USD',
            '含まれる内容': '月500Kクレジット、ベクトルストレージ100 MB',
          },
          {
            'プラン': 'Starter',
            '価格': '月12.9 USD（年払いは9.9 USD）',
            '含まれる内容': '5Mクレジット、ファイル1 GB',
          },
          {
            'プラン': 'Premium',
            '価格': '月24.9 USD（年払いは19.9 USD）',
            '含まれる内容': '15Mクレジット、ファイル2 GB',
          },
          {
            'プラン': 'Ultimate',
            '価格': '月49.9 USD（年払いは39.9 USD）',
            '含まれる内容': '35Mクレジット、ファイル4 GB',
          },
        ],
        note: 'Enterpriseの料金は問い合わせ制です。情報源によると、これらの数字はマーケティングサイトの設定を反映しており、アプリ内の請求画面での確認を勧めています。セルフホストのサーバーでのモデル利用は、接続した提供元が請求します。',
      },
      license: {
        id: 'license',
        title: 'ライセンス',
        content: [
          '**LobeHubはLobeHub Community Licenseを採用しています。これはApache License 2.0をベースにしたもので、単純なMITやApacheではありません。** ソースコードを改変しなければ、フロントエンドとバックエンドのサービスとしての利用を含め、商用利用が認められます。派生物を開発して配布する場合は、LobeHubの商用ライセンスが必要です（連絡先：hello@lobehub.com）。また、コントリビューターは、自分のコードがクラウド版を含めて商用に使われること、提供元がライセンス条件を変更できることに同意します。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**チャット画面だけでなく、エージェント、スケジュール、共有メモリを1つの場所で使いたい方。**',
          '**macOS、Windows、Linuxでダブルクリックでインストールし、必要に応じてクラウドアカウントも使いたい方。**',
          '**Dockerに慣れたセルフホスト派で、クラウドモデルとOllamaを1つの画面で使いたい方。**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**アプリの実際の使用感。** インストール、速度、安定性、デスクトップアプリは試していません。',
          '**オフライン利用。** デスクトップアプリがインターネットなしで動くか、クロスオリジンの手順なしでOllamaに接続できるかは、確認した情報源に記載がありません。',
          '**クラウドでのデータの扱い。** プライバシーポリシーによると、チャットログは既定でローカルに保存され、クラウド同期をオンにするとクラウドサーバーに同期されます。モバイルアプリではチャット内容をモデルの学習に使わないとされています。デスクトップ版とセルフホスト版には触れておらず、これらの内容は監査していません。',
          '**Skillsの数。** 10,000以上という数字はREADMEの主張です。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替アプリ',
        columns: ['アプリ', 'プラットフォーム', '価格 / ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[Open WebUI](/ja/local-llms/open-webui-review)',
            'プラットフォーム': 'ウェブ、デスクトップ',
            '価格 / ライセンス': '無料 / BSD 3-Clause',
            '主な違い': 'RAG内蔵のセルフホスト型画面で、通常はOllamaと組み合わせて使う',
          },
          {
            'アプリ': '[LibreChat](/ja/power-local-llm/librechat-review)',
            'プラットフォーム': 'ウェブ',
            '価格 / ライセンス': '無料 / MIT',
            '主な違い': 'チーム機能を備えたセルフホスト型のマルチプロバイダーチャット',
          },
          {
            'アプリ': '[Big-AGI](/ja/local-llms/big-agi-review)',
            'プラットフォーム': 'ウェブ',
            '価格 / ライセンス': '無料 / MIT',
            '主な違い': 'ペルソナ付きのマルチプロバイダー画面で、自分のAPIキーを使う',
          },
          {
            'アプリ': '[Cherry Studio](/ja/local-llms/cherry-studio-ai-desktop-client)',
            'プラットフォーム': 'デスクトップ',
            '価格 / ライセンス': '無料 / AGPL 3.0',
            '主な違い': 'サーバー不要の個人向けデスクトップクライアント',
          },
        ],
        note: '競合の情報は頻繁に変わります。価格、ライセンス、対応プラットフォームは各アプリのページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'LobeChatとLobeHubは同じものですか？',
            a: 'はい。LobeHubは、以前LobeChatと呼ばれていたプロジェクトの現在の名称です。リポジトリはlobehub/lobehubに移り、旧アドレスはそこへ転送されます。',
          },
          {
            q: 'LobeHubはオフラインで動きますか？',
            a: '不明です。文書化されているのはローカルのOllamaサーバーへの接続だけで、デスクトップアプリのオフライン利用は試していません。',
          },
          {
            q: 'アカウントは必要ですか？',
            a: 'LobeHub Cloudでは必要です。プライバシーポリシーは、収集するデータにメールアドレスと名前を挙げています。デスクトップアプリとセルフホストでアカウントが必要かどうかは確認していません。',
          },
          {
            q: 'セルフホスト版は無料ですか？',
            a: 'はい。ライセンス上、改変しない限り商用利用も含めて無料です。支払うのは、接続するモデル提供元の分だけです。',
          },
          {
            q: '不具合の報告や機能の要望はどこにすればよいですか？',
            a: 'READMEは、GitHubのIssuesページとDiscordコミュニティを案内しています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'LobeHubは、出発点だったチャット画面の枠を超え、インストールも、契約も、自己ホストもできるエージェント基盤になりました。リリースの頻度、3つのデスクトップOS向けインストーラー、文書化されたOllama対応は確かな強みです。ハイブリッド型でクラウド中心の製品であり、オフライン利用は未検証のため、厳密にローカルだけで運用したい方は、まず自分のマシンで確認してください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[LobeHub公式サイト](https://lobehub.com) — 製品説明、2026年10月24日確認。',
          '[LobeHub料金ページ](https://lobehub.com/pricing.md) — プラン、クレジット、ストレージ、2026年10月24日確認。',
          '[GitHubのLobeHub](https://github.com/lobehub/lobehub) — README、LICENSE、リリース（2.2.20）、リポジトリの更新状況、2026年10月24日確認。',
          '[Using Ollama in LobeHub](https://github.com/lobehub/lobehub/blob/main/docs/usage/providers/ollama.mdx) — プロバイダーの設定、2026年10月24日確認。',
          '[LobeHubプライバシーポリシー](https://lobehub.com/privacy) — 収集データと保存、最終更新は2026年3月5日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Open WebUIレビュー](/ja/local-llms/open-webui-review) — RAG内蔵のローカルモデル向けセルフホスト型画面。',
          '[LibreChatレビュー](/ja/power-local-llm/librechat-review) — 自分でホストするオープンソースのマルチモデルチャット画面。',
          '[Big-AGIレビュー](/ja/local-llms/big-agi-review) — ペルソナ付きのマルチプロバイダー対応チャット画面。',
          '[LobeChat、Big-AGI、NextChat、Page Assist、Chatboxの比較](/ja/local-llms/lobechat-bigagi-nextchat-pageassist-chatbox-compared) — 5つのチャットアプリの比較。',
          '[ローカルLLMチャットアシスタント比較](/ja/power-local-llm/local-llm-chat-assistants-compared) — カテゴリー比較。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Tools & Interfaces',
    heroImage: '/images/lobechat-review-hero-pt.webp',
    title: 'Análise do LobeHub (antigo LobeChat): espaço de agentes com apps de desktop e hospedagem própria',
    seoTitle: 'Análise do LobeHub (antigo LobeChat): espaço de agentes',
    intro:
      'O [LobeHub](https://lobehub.com), antigo LobeChat, é um espaço de trabalho de IA de código aberto cujo código-fonte fica em [github.com/lobehub/lobehub](https://github.com/lobehub/lobehub). Ele começou como uma interface de chat auto-hospedada e hoje se descreve como uma plataforma de colaboração entre agentes: você cria agentes, agrupa em equipes e os deixa trabalhar em horários programados. Esta análise cobre o que ele faz hoje, onde roda, se os modelos locais funcionam, a licença e os planos.',
    metaDescription:
      'Análise do LobeHub, o LobeChat renomeado: apps para macOS, Windows e Linux, serviço na nuvem, hospedagem com Docker, suporte ao Ollama e planos.',
    twitterDescription:
      'O que o LobeHub oferece após a mudança de nome do LobeChat: três instaladores de desktop, planos na nuvem, Docker, modelos locais via Ollama, licença e pontos sem verificação.',
    audience:
      'Pessoas que escolhem entre um espaço de IA hospedado, um app de desktop e um servidor próprio e querem saber como os modelos locais se encaixam.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LobeHub review',
    targetKeywords: ['LobeHub review', 'LobeChat', 'LobeHub vs Open WebUI', 'LobeHub license', 'LobeHub desktop app'],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**O LobeHub é híbrido, e não puramente local: o mesmo produto de código aberto roda como app de desktop, como serviço hospedado na nuvem e como servidor que você hospeda, e chega a modelos locais por meio de um conector como o Ollama.** O foco deixou de ser uma simples janela de chat e passou para agentes que trabalham em equipe, então quem quer apenas uma interface de chat local simples pode achá-lo maior que o necessário.',
    quickAnswerTop: {
      pt: {
        question: 'O LobeHub é um app local?',
        answer:
          'Em parte. Os instaladores de desktop e o servidor auto-hospedado rodam no seu próprio computador, mas o produto principal é um serviço na nuvem, e os modelos locais são acessados por um conector de provedor como o Ollama.',
        bullets: [
          'Existe um plano gratuito na nuvem e três planos pagos com preços apenas em dólares americanos.',
          'A licença é baseada na Apache 2.0, com uma condição de licença comercial para produtos derivados.',
          'A PromptQuorum não testou os apps na prática.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o LobeHub?', anchor: 'what-is-lobehub' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Recursos', anchor: 'key-features' },
      { label: 'Hospedagem própria', anchor: 'self-hosting' },
      { label: 'Usar modelos locais', anchor: 'local-models' },
      { label: 'Planos e preços', anchor: 'plans-and-pricing' },
      { label: 'Licença', anchor: 'license' },
      { label: 'Para quem é indicado', anchor: 'who-should-use' },
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
            text: 'O LobeHub, sucessor do LobeChat, é um espaço de trabalho de código aberto para criar agentes de IA e fazê-los trabalhar juntos, disponível como app de desktop, na nuvem ou no seu próprio servidor.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em um app de chat que virou uma pequena equipe de IA: você descreve um agente, ele ganha ferramentas e memória, e vários agentes podem trabalhar na mesma tarefa. Você decide se ele roda no seu computador, nos servidores do LobeHub ou nos seus.',
          },
        ],
        items: [
          'Mudança de nome: o projeto e o repositório passaram de LobeChat para LobeHub; o endereço antigo do repositório redireciona.',
          'Plataformas: instaladores de desktop para macOS, Windows e Linux (versão 2.2.20, publicada em 18 de outubro de 2026), além do app na nuvem e da hospedagem própria.',
          'Modelos locais: o Ollama é um provedor compatível e é configurado como qualquer outro.',
          `Código: ${st.pt('lobechat')} estrelas no GitHub; o repositório foi atualizado pela última vez em 24 de outubro de 2026.`,
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site oficial, no repositório do GitHub com a documentação e na política de privacidade, consultados em 24 de outubro de 2026. Não houve uso prático nem testes de desempenho.',
          },
        ],
      },
      overview: {
        id: 'what-is-lobehub',
        title: 'O que é o LobeHub?',
        content: [
          '**O LobeHub é uma plataforma de código aberto para criar agentes de IA e fazê-los trabalhar em equipe; antes se chamava LobeChat.** A descrição no GitHub o apresenta como um "Chief Agent Operator" que contrata, agenda e presta contas sobre seus agentes; o site fala em uma plataforma de colaboração entre agentes.',
          'O LobeChat original era uma interface de chat auto-hospedada para muitos provedores de modelos. O README atual acrescenta um Agent Builder, grupos de agentes que trabalham em paralelo em uma tarefa, Pages para escrever com vários agentes, execuções agendadas, projetos, espaços de trabalho compartilhados e um recurso de Personal Memory. Esta análise cobre o produto como publicado no [repositório do LobeHub](https://github.com/lobehub/lobehub); o arquivo LICENSE ali ainda usa o nome LobeChat.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O LobeHub pode ser usado de três formas: instalar um app de desktop, abrir o serviço na nuvem em um navegador ou hospedá-lo você mesmo.** Os instaladores de desktop não exigem terminal.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            'Plataforma': 'macOS',
            'Onde obter': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest) (.dmg para Apple silicon e para Intel)',
          },
          {
            'Plataforma': 'Windows',
            'Onde obter': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest) (.exe de instalação)',
          },
          {
            'Plataforma': 'Linux',
            'Onde obter': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest) (AppImage, .deb, .rpm e snap)',
          },
          {
            'Plataforma': 'Web (nuvem)',
            'Onde obter': '[app.lobehub.com](https://app.lobehub.com) (LobeHub Cloud, conta necessária)',
          },
          {
            'Plataforma': 'Auto-hospedado',
            'Onde obter': '[Seção de hospedagem própria do README](https://github.com/lobehub/lobehub#-self-hosting) (Docker ou implantação com um clique)',
          },
          {
            'Plataforma': 'Código-fonte',
            'Onde obter': '[lobehub/lobehub no GitHub](https://github.com/lobehub/lobehub) (LobeHub Community License)',
          },
          {
            'Plataforma': 'Site',
            'Onde obter': '[lobehub.com](https://lobehub.com)',
          },
          {
            'Plataforma': 'Política de privacidade',
            'Onde obter': '[lobehub.com/privacy](https://lobehub.com/privacy) (última atualização: 5 de março de 2026)',
          },
        ],
        note: 'Versão analisada: 2.2.20, publicada no GitHub Releases em 18 de outubro de 2026; o próprio repositório foi atualizado em 24 de outubro de 2026, portanto não há aviso de projeto sem manutenção. A hospedagem própria exige um terminal, como descrito abaixo.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos',
        content: [
          '**No LobeHub, o agente é a unidade de trabalho; o chat é apenas uma forma de conversar com ele.** A lista abaixo vem do README e do site.',
        ],
        items: [
          '**Agent Builder.** Você descreve o agente uma vez e a configuração é feita para você.',
          '**Grupos de agentes, Pages e agendamento.** Vários agentes trabalham em uma tarefa com contexto compartilhado, escrevem juntos em uma página ou rodam em horários definidos enquanto você está fora.',
          '**Skills.** O README cita uma biblioteca com mais de 10.000 ferramentas e plugins compatíveis com MCP.',
          '**Modelos.** Muitos provedores atrás de uma única interface, de modo que você pode trocar de modelo dentro da mesma configuração de conversa.',
          '**Personal Memory e IM Gateway.** Os agentes podem aprender com o seu jeito de trabalhar e ficar acessíveis nos apps de mensagens que você já usa.',
        ],
        note: 'O que cada modelo consegue fazer (visão, uso de ferramentas, tamanho de contexto) depende do modelo conectado, não do LobeHub.',
      },
      selfHost: {
        id: 'self-hosting',
        title: 'Hospedagem própria',
        content: [
          '**A hospedagem própria exige um terminal e o Docker, ou uma conta na nuvem para a implantação com um clique.** O README descreve dois caminhos.',
        ],
        items: [
          '**Docker.** Crie uma pasta, execute o script de configuração do README (`bash <(curl -fsSL https://lobe.li/setup.sh)`) e inicie a pilha com `docker compose up -d`.',
          '**Implantação com um clique.** Botões para Vercel, Zeabur, Sealos, RepoCloud e Alibaba Cloud; o README pede uma `OPENAI_API_KEY` nas variáveis de ambiente.',
        ],
        note: 'Para os detalhes, o README aponta para um guia de implantação com Docker. Não executamos uma instância auto-hospedada para esta análise.',
      },
      localModels: {
        id: 'local-models',
        title: 'Usar modelos locais',
        content: [
          '**O LobeHub lista o Ollama como provedor e documenta a configuração.** Instale o [Ollama](/pt/local-llms/how-to-install-ollama), permita requisições de origem cruzada definindo a variável de ambiente `OLLAMA_ORIGINS` como `*` e reinicie o Ollama; depois disso, o LobeHub pode conversar com os modelos servidos pelo Ollama.',
          'Esse passo vem da documentação da versão para navegador. Não testamos se os apps de desktop precisam dele nem se funcionam totalmente offline.',
        ],
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'Planos e preços',
        content: [
          '**O LobeHub Cloud é freemium; os apps e o servidor auto-hospedado são gratuitos conforme a licença.** Os preços da página de preços estão apenas em dólares americanos; não foram encontrados preços em moeda local.',
        ],
        columns: ['Plano', 'Preço', 'O que inclui'],
        rows: [
          {
            'Plano': 'Free',
            'Preço': '0 USD',
            'O que inclui': '500K créditos por mês, 100 MB de armazenamento vetorial',
          },
          {
            'Plano': 'Starter',
            'Preço': '12.9 USD por mês (9.9 USD com cobrança anual)',
            'O que inclui': '5M créditos, 1 GB de arquivos',
          },
          {
            'Plano': 'Premium',
            'Preço': '24.9 USD por mês (19.9 USD com cobrança anual)',
            'O que inclui': '15M créditos, 2 GB de arquivos',
          },
          {
            'Plano': 'Ultimate',
            'Preço': '49.9 USD por mês (39.9 USD com cobrança anual)',
            'O que inclui': '35M créditos, 4 GB de arquivos',
          },
        ],
        note: 'O preço Enterprise é informado mediante contato. Segundo a fonte, os valores refletem o site de marketing e ela recomenda conferir a cobrança dentro do app; o uso de modelos em um servidor auto-hospedado é cobrado pelo provedor que você conectar.',
      },
      license: {
        id: 'license',
        title: 'Licença',
        content: [
          '**O LobeHub usa a LobeHub Community License, baseada na Apache License 2.0 e que não é MIT nem Apache em sua forma simples.** O uso comercial é permitido, inclusive como serviço de frontend e backend sem modificar o código-fonte. Desenvolver e distribuir uma obra derivada exige uma licença comercial da LobeHub (contato: hello@lobehub.com). Os colaboradores também concordam que seu código pode ser usado comercialmente, inclusive na edição em nuvem, e que o produtor pode alterar os termos da licença.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é indicado',
        items: [
          '**Quem quer agentes, agendamentos e memória compartilhada em um só espaço**, e não apenas uma janela de chat.',
          '**Usuários que preferem instalar com um duplo clique** no macOS, Windows ou Linux e, opcionalmente, ter uma conta na nuvem.',
          '**Quem hospeda por conta própria**, está à vontade com o Docker e quer uma interface para modelos na nuvem e do Ollama.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Os apps em uso.** Instalação, velocidade, estabilidade e os apps de desktop não foram testados.',
          '**Uso offline.** As fontes que lemos não dizem se os apps de desktop funcionam sem internet nem se chegam ao Ollama sem o passo de origem cruzada.',
          '**Tratamento de dados na nuvem.** A política de privacidade diz que os registros de chat ficam armazenados localmente por padrão e são sincronizados com os servidores na nuvem se você ativar a sincronização, e que no app móvel o conteúdo do chat não é usado para treinar modelos; ela não trata das versões de desktop nem auto-hospedadas, e não auditamos nada disso.',
          '**Quantidade de skills.** O número de mais de 10.000 é uma afirmação do README.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            'App': '[Open WebUI](/pt/local-llms/open-webui-review)',
            'Plataformas': 'Web, desktop',
            'Preço / licença': 'Grátis / BSD 3-Clause',
            'Diferença principal': 'Interface auto-hospedada com RAG integrado, normalmente usada com o Ollama',
          },
          {
            'App': '[LibreChat](/pt/power-local-llm/librechat-review)',
            'Plataformas': 'Web',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Chat multiprovedor auto-hospedado com recursos de equipe',
          },
          {
            'App': '[Big-AGI](/pt/local-llms/big-agi-review)',
            'Plataformas': 'Web',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Interface multiprovedor com personas; você traz suas próprias chaves',
          },
          {
            'App': '[Cherry Studio](/pt/local-llms/cherry-studio-ai-desktop-client)',
            'Plataformas': 'Desktop',
            'Preço / licença': 'Grátis / AGPL 3.0',
            'Diferença principal': 'Cliente de desktop para um único usuário, sem servidor',
          },
        ],
        note: 'Os dados dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O LobeChat é o mesmo que o LobeHub?',
            a: 'Sim. LobeHub é o nome atual do projeto que se chamava LobeChat; o repositório agora fica em lobehub/lobehub e o endereço anterior redireciona para ele.',
          },
          {
            q: 'O LobeHub funciona offline?',
            a: 'Não se sabe. Só a conexão com um servidor Ollama local está documentada, e o uso offline dos apps de desktop não foi testado.',
          },
          {
            q: 'Preciso de uma conta?',
            a: 'Para o LobeHub Cloud, sim. A política de privacidade lista e-mail e nome entre os dados coletados. Não verificamos se os apps de desktop e a hospedagem própria exigem conta.',
          },
          {
            q: 'A versão auto-hospedada é gratuita?',
            a: 'Sim, conforme a licença, inclusive para uso comercial sem modificação; você paga apenas os provedores de modelos que conectar.',
          },
          {
            q: 'Onde relato problemas ou peço recursos?',
            a: 'O README aponta para a página de issues do GitHub e para uma comunidade no Discord.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O LobeHub superou a interface de chat com a qual começou: hoje é um espaço de agentes que você pode instalar, assinar ou hospedar. O ritmo de lançamentos, os instaladores para três sistemas de desktop e o suporte documentado ao Ollama são pontos fortes reais. O modelo híbrido, um produto voltado à nuvem e o uso offline não testado significam que quem precisa de operação estritamente local deve verificar isso primeiro no próprio computador.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do LobeHub](https://lobehub.com) — descrição do produto, consultado em 24 de outubro de 2026.',
          '[Preços do LobeHub](https://lobehub.com/pricing.md) — planos, créditos e armazenamento, consultados em 24 de outubro de 2026.',
          '[LobeHub no GitHub](https://github.com/lobehub/lobehub) — README, LICENSE, versões (2.2.20) e atividade do repositório, consultados em 24 de outubro de 2026.',
          '[Using Ollama in LobeHub](https://github.com/lobehub/lobehub/blob/main/docs/usage/providers/ollama.mdx) — configuração do provedor, consultada em 24 de outubro de 2026.',
          '[Política de privacidade do LobeHub](https://lobehub.com/privacy) — dados coletados e armazenamento; última atualização em 5 de março de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Open WebUI](/pt/local-llms/open-webui-review) — uma interface auto-hospedada para modelos locais com RAG integrado.',
          '[Análise do LibreChat](/pt/power-local-llm/librechat-review) — uma interface de chat multimodelo de código aberto que você hospeda.',
          '[Análise do Big-AGI](/pt/local-llms/big-agi-review) — uma interface de chat multiprovedor com personas.',
          '[LobeChat, Big-AGI, NextChat, Page Assist e Chatbox comparados](/pt/local-llms/lobechat-bigagi-nextchat-pageassist-chatbox-compared) — cinco apps de chat lado a lado.',
          '[Assistentes de chat com LLM local comparados](/pt/power-local-llm/local-llm-chat-assistants-compared) — a comparação da categoria.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Tools & Interfaces',
    heroImage: '/images/lobechat-review-hero-ar.webp',
    title: 'مراجعة LobeHub (LobeChat سابقًا): مساحة عمل للوكلاء مع تطبيقات سطح المكتب والاستضافة الذاتية',
    seoTitle: 'مراجعة LobeHub (LobeChat سابقًا): مساحة عمل للوكلاء',
    intro:
      'يُعدّ [LobeHub](https://lobehub.com)، المعروف سابقًا باسم LobeChat، مساحة عمل مفتوحة المصدر للذكاء الاصطناعي، وشيفرته المصدرية على [github.com/lobehub/lobehub](https://github.com/lobehub/lobehub). بدأ واجهة دردشة مستضافة ذاتيًا، ويصف نفسه اليوم بأنه منصة للتعاون بين الوكلاء: تنشئ وكلاء، وتجمعهم في فرق، وتشغّلهم وفق جدول زمني. تتناول هذه المراجعة ما يقدمه اليوم، وأين يعمل، وهل تعمل النماذج المحلية، والترخيص، والخطط.',
    metaDescription:
      'مراجعة LobeHub، النسخة المعاد تسميتها من LobeChat: تطبيقات macOS وWindows وLinux وخدمة سحابية واستضافة Docker ودعم Ollama والترخيص وأسعار الخطط.',
    twitterDescription:
      'ما يقدمه LobeHub بعد تغيير اسم LobeChat: ثلاثة مثبّتات لسطح المكتب وخطط سحابية واستضافة Docker ونماذج محلية عبر Ollama والترخيص وما لم نتحقق منه.',
    audience:
      'من يختار بين مساحة عمل ذكاء اصطناعي مستضافة وتطبيق سطح مكتب وخادم يديره بنفسه، ويريد معرفة كيف تندمج النماذج المحلية.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LobeHub review',
    targetKeywords: ['LobeHub review', 'LobeChat', 'LobeHub vs Open WebUI', 'LobeHub license', 'LobeHub desktop app'],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**LobeHub منتج هجين وليس محليًا بالكامل: يعمل المنتج المفتوح المصدر نفسه كتطبيق لسطح المكتب وكخدمة سحابية مستضافة وكخادم تستضيفه بنفسك، ويصل إلى النماذج المحلية عبر موصّل مثل Ollama.** انتقل تركيزه من نافذة دردشة بسيطة إلى وكلاء يعملون ضمن فريق، لذا قد يجده من يريد واجهة دردشة محلية بسيطة فقط أكبر من حاجته.',
    quickAnswerTop: {
      ar: {
        question: 'هل LobeHub تطبيق محلي؟',
        answer:
          'جزئيًا. تعمل مثبّتات سطح المكتب والخادم المستضاف ذاتيًا على جهازك، لكن المنتج الرئيسي خدمة سحابية، وتُستخدم النماذج المحلية عبر موصّل مزوّد مثل Ollama.',
        bullets: [
          'توجد خطة سحابية مجانية وثلاث خطط مدفوعة، وأسعارها معلنة بالدولار الأمريكي فقط.',
          'الترخيص مبني على Apache 2.0 مع شرط ترخيص تجاري للمنتجات المشتقة.',
          'لم تختبر PromptQuorum التطبيقات عمليًا.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو LobeHub؟', anchor: 'what-is-lobehub' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'الميزات', anchor: 'key-features' },
      { label: 'الاستضافة الذاتية', anchor: 'self-hosting' },
      { label: 'استخدام النماذج المحلية', anchor: 'local-models' },
      { label: 'الخطط والأسعار', anchor: 'plans-and-pricing' },
      { label: 'الترخيص', anchor: 'license' },
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
          {
            type: 'one-sentence',
            text: 'LobeHub، خليفة LobeChat، مساحة عمل مفتوحة المصدر لإنشاء وكلاء الذكاء الاصطناعي وتشغيلهم معًا، ومتاحة كتطبيق لسطح المكتب أو في السحابة أو على خادمك الخاص.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله تطبيق دردشة نما حتى صار فريقًا صغيرًا من الذكاء الاصطناعي: تصف وكيلًا فيحصل على أدوات وذاكرة، ويمكن لعدة وكلاء العمل على المهمة نفسها. وأنت تقرر هل يعمل على حاسوبك أو على خوادم LobeHub أو على خوادمك.',
          },
        ],
        items: [
          'تغيير الاسم: انتقل المشروع ومستودعه من LobeChat إلى LobeHub، ويُحوَّل عنوان المستودع القديم إلى الجديد.',
          'المنصات: مثبّتات سطح المكتب لأنظمة macOS وWindows وLinux (الإصدار 2.2.20، نُشر في 18 أكتوبر 2026)، إضافة إلى التطبيق السحابي والاستضافة الذاتية.',
          'النماذج المحلية: Ollama مزوّد مدعوم ويُضبط مثل أي مزوّد آخر.',
          `الشيفرة: ${st.ar('lobechat')} نجمة على GitHub، وآخر تحديث للمستودع في 24 أكتوبر 2026.`,
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى الموقع الرسمي ومستودع GitHub وتوثيقه وسياسة الخصوصية، وقد روجعت في 24 أكتوبر 2026. ولم تتضمن استخدامًا عمليًا ولا اختبارات أداء.',
          },
        ],
      },
      overview: {
        id: 'what-is-lobehub',
        title: 'ما هو LobeHub؟',
        content: [
          '**LobeHub منصة مفتوحة المصدر لإنشاء وكلاء الذكاء الاصطناعي وتشغيلهم كفريق، وكان اسمها سابقًا LobeChat.** يصفه وصف GitHub بأنه "Chief Agent Operator" يوظّف وكلاءك ويجدولهم ويرفع تقارير عنهم، بينما يسميه الموقع منصة للتعاون بين الوكلاء.',
          'كان LobeChat الأصلي واجهة دردشة مستضافة ذاتيًا لعدد كبير من مزوّدي النماذج. ويضيف ملف README الحالي أداة Agent Builder، ومجموعات وكلاء تعمل بالتوازي على مهمة واحدة، وPages للكتابة مع عدة وكلاء، وتشغيلًا مجدولًا، ومشاريع، ومساحات عمل مشتركة، وميزة Personal Memory. تتناول هذه المراجعة المنتج كما هو منشور في [مستودع LobeHub](https://github.com/lobehub/lobehub)؛ ولا يزال ملف LICENSE هناك يستخدم اسم LobeChat.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يمكن استخدام LobeHub بثلاث طرق: تثبيت تطبيق سطح مكتب، أو فتح الخدمة السحابية في المتصفح، أو استضافته بنفسك.** مثبّتات سطح المكتب لا تحتاج إلى طرفية.',
        ],
        columns: ['المنصة', 'مكان الحصول عليه'],
        rows: [
          {
            'المنصة': 'macOS',
            'مكان الحصول عليه': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest) (ملف .dmg لمعالجات Apple silicon ولمعالجات Intel)',
          },
          {
            'المنصة': 'Windows',
            'مكان الحصول عليه': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest) (ملف التثبيت .exe)',
          },
          {
            'المنصة': 'Linux',
            'مكان الحصول عليه': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest) (AppImage و.deb و.rpm وsnap)',
          },
          {
            'المنصة': 'الويب (السحابة)',
            'مكان الحصول عليه': '[app.lobehub.com](https://app.lobehub.com) (LobeHub Cloud، يلزم حساب)',
          },
          {
            'المنصة': 'استضافة ذاتية',
            'مكان الحصول عليه': '[قسم الاستضافة الذاتية في README](https://github.com/lobehub/lobehub#-self-hosting) (Docker أو النشر بنقرة واحدة)',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'مكان الحصول عليه': '[lobehub/lobehub على GitHub](https://github.com/lobehub/lobehub) (LobeHub Community License)',
          },
          {
            'المنصة': 'الموقع الرسمي',
            'مكان الحصول عليه': '[lobehub.com](https://lobehub.com)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مكان الحصول عليه': '[lobehub.com/privacy](https://lobehub.com/privacy) (آخر تحديث: 5 مارس 2026)',
          },
        ],
        note: 'الإصدار الذي روجعناه: 2.2.20، نُشر على GitHub Releases في 18 أكتوبر 2026؛ وحُدّث المستودع نفسه في 24 أكتوبر 2026، لذلك لا يوجد تحذير من توقف الصيانة. تتطلب الاستضافة الذاتية طرفية كما هو موضح أدناه.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات',
        content: [
          '**الوكيل هو وحدة العمل في LobeHub، والدردشة إحدى طرق التحدث معه فقط.** القائمة التالية مأخوذة من README والموقع.',
        ],
        items: [
          '**Agent Builder.** تصف الوكيل مرة واحدة فيُجرى الإعداد نيابة عنك.',
          '**مجموعات الوكلاء وPages والجدولة.** يعمل عدة وكلاء على مهمة بسياق مشترك، أو يكتبون معًا في صفحة واحدة، أو يعملون في أوقات محددة أثناء غيابك.',
          '**Skills.** يذكر README مكتبة تضم أكثر من 10,000 أداة وإضافة متوافقة مع MCP.',
          '**النماذج.** مزوّدون كثيرون خلف واجهة واحدة، فيمكنك تبديل النموذج داخل إعداد المحادثة نفسه.',
          '**Personal Memory وIM Gateway.** يمكن للوكلاء التعلم من طريقة عملك والوصول إليهم عبر تطبيقات المراسلة التي تستخدمها أصلًا.',
        ],
        note: 'ما يستطيع كل نموذج فعله (الرؤية، استخدام الأدوات، طول السياق) يعتمد على النموذج الذي تربطه، لا على LobeHub.',
      },
      selfHost: {
        id: 'self-hosting',
        title: 'الاستضافة الذاتية',
        content: [
          '**تتطلب الاستضافة الذاتية طرفية وDocker، أو حسابًا سحابيًا للنشر بنقرة واحدة.** يصف README طريقين.',
        ],
        items: [
          '**Docker.** أنشئ مجلدًا، ثم شغّل سكربت الإعداد الوارد في README (`bash <(curl -fsSL https://lobe.li/setup.sh)`)، وابدأ المكوّنات بالأمر `docker compose up -d`.',
          '**النشر بنقرة واحدة.** أزرار لكل من Vercel وZeabur وSealos وRepoCloud وAlibaba Cloud؛ ويطلب README وضع `OPENAI_API_KEY` في متغيرات البيئة.',
        ],
        note: 'للتفاصيل يشير README إلى دليل نشر Docker. لم نشغّل نسخة مستضافة ذاتيًا من أجل هذه المراجعة.',
      },
      localModels: {
        id: 'local-models',
        title: 'استخدام النماذج المحلية',
        content: [
          '**يدرج LobeHub مزوّد Ollama ويوثّق طريقة إعداده.** ثبّت [Ollama](/ar/local-llms/how-to-install-ollama)، ثم اسمح بالطلبات عبر المصادر المختلفة بضبط متغير البيئة `OLLAMA_ORIGINS` على القيمة `*` وأعد تشغيل Ollama؛ بعدها يستطيع LobeHub الدردشة مع النماذج التي يقدمها Ollama.',
          'هذه الخطوة مأخوذة من توثيق نسخة المتصفح. لم نختبر هل تحتاج إليها تطبيقات سطح المكتب، ولا هل تعمل دون اتصال بالإنترنت تمامًا.',
        ],
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'الخطط والأسعار',
        content: [
          '**LobeHub Cloud يعمل بنموذج فريميوم؛ أما التطبيقات والخادم المستضاف ذاتيًا فمجانية بموجب الترخيص.** أسعار صفحة الأسعار معلنة بالدولار الأمريكي فقط، ولم نجد أسعارًا بالعملات المحلية.',
        ],
        columns: ['الخطة', 'السعر', 'ما تشمله'],
        rows: [
          {
            'الخطة': 'Free',
            'السعر': '$0',
            'ما تشمله': '500K رصيد شهريًا، وتخزين متجهات 100 MB',
          },
          {
            'الخطة': 'Starter',
            'السعر': '$12.9 شهريًا ($9.9 عند الدفع السنوي)',
            'ما تشمله': '5M رصيد، وملفات 1 GB',
          },
          {
            'الخطة': 'Premium',
            'السعر': '$24.9 شهريًا ($19.9 عند الدفع السنوي)',
            'ما تشمله': '15M رصيد، وملفات 2 GB',
          },
          {
            'الخطة': 'Ultimate',
            'السعر': '$49.9 شهريًا ($39.9 عند الدفع السنوي)',
            'ما تشمله': '35M رصيد، وملفات 4 GB',
          },
        ],
        note: 'أسعار Enterprise تُعلَن عند التواصل. وبحسب المصدر، تعكس الأرقام إعدادات الموقع التسويقي، وهو يوصي بالتحقق من الفوترة داخل التطبيق؛ أما استهلاك النماذج على خادم مستضاف ذاتيًا فيحاسبك عليه المزوّد الذي تربطه.',
      },
      license: {
        id: 'license',
        title: 'الترخيص',
        content: [
          '**يستخدم LobeHub ترخيص LobeHub Community License المبني على Apache License 2.0، وهو ليس MIT ولا Apache بصيغته البسيطة.** الاستخدام التجاري مسموح، بما في ذلك كخدمة واجهة أمامية وخلفية دون تعديل الشيفرة المصدرية. أما تطوير عمل مشتق وتوزيعه فيتطلب ترخيصًا تجاريًا من LobeHub (للتواصل: hello@lobehub.com). كما يوافق المساهمون على أن تُستخدم شيفرتهم تجاريًا، بما في ذلك في النسخة السحابية، وعلى أن للجهة المنتجة تعديل شروط الترخيص.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**من يريد وكلاء وجداول زمنية وذاكرة مشتركة في مساحة واحدة**، لا نافذة دردشة فقط.',
          '**المستخدمون الذين يفضلون التثبيت بنقرتين** على macOS أو Windows أو Linux، مع حساب سحابي اختياري.',
          '**من يستضيف بنفسه** ويرتاح للتعامل مع Docker ويريد واجهة واحدة للنماذج السحابية ونماذج Ollama.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**التطبيقات أثناء الاستخدام.** لم نختبر التثبيت ولا السرعة ولا الاستقرار ولا تطبيقات سطح المكتب.',
          '**الاستخدام دون اتصال.** لا تذكر المصادر التي قرأناها هل تعمل تطبيقات سطح المكتب دون إنترنت، ولا هل تصل إلى Ollama دون خطوة المصادر المختلفة.',
          '**معالجة البيانات في السحابة.** تقول سياسة الخصوصية إن سجلات الدردشة تُخزَّن محليًا افتراضيًا وتُزامَن مع الخوادم السحابية إذا فعّلت المزامنة السحابية، وإن محتوى الدردشة في تطبيق الجوال لا يُستخدم في تدريب النماذج؛ ولا تتناول نسختي سطح المكتب والاستضافة الذاتية، ولم ندقق أيًّا من ذلك.',
          '**عدد Skills.** رقم أكثر من 10,000 ادعاء وارد في README.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': '[Open WebUI](/ar/local-llms/open-webui-review)',
            'المنصات': 'ويب، سطح المكتب',
            'السعر / الترخيص': 'مجاني / BSD 3-Clause',
            'الفرق الرئيسي': 'واجهة مستضافة ذاتيًا مع RAG مدمج، وتُشغَّل عادة مع Ollama',
          },
          {
            'التطبيق': '[LibreChat](/ar/power-local-llm/librechat-review)',
            'المنصات': 'ويب',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'دردشة متعددة المزوّدين مستضافة ذاتيًا مع ميزات للفرق',
          },
          {
            'التطبيق': '[Big-AGI](/ar/local-llms/big-agi-review)',
            'المنصات': 'ويب',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'واجهة متعددة المزوّدين مع شخصيات؛ تستخدم مفاتيحك الخاصة',
          },
          {
            'التطبيق': '[Cherry Studio](/ar/local-llms/cherry-studio-ai-desktop-client)',
            'المنصات': 'سطح المكتب',
            'السعر / الترخيص': 'مجاني / AGPL 3.0',
            'الفرق الرئيسي': 'عميل سطح مكتب لمستخدم واحد دون خادم',
          },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تحقق من السعر والترخيص والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل LobeChat هو نفسه LobeHub؟',
            a: 'نعم. LobeHub هو الاسم الحالي للمشروع الذي كان يُسمى LobeChat؛ ويقع المستودع الآن على lobehub/lobehub، ويُحوَّل العنوان القديم إليه.',
          },
          {
            q: 'هل يعمل LobeHub دون اتصال بالإنترنت؟',
            a: 'غير معروف. الموثّق فقط هو الاتصال بخادم Ollama محلي، ولم نختبر استخدام تطبيقات سطح المكتب دون اتصال.',
          },
          {
            q: 'هل أحتاج إلى حساب؟',
            a: 'مع LobeHub Cloud نعم. تدرج سياسة الخصوصية عنوان البريد الإلكتروني والاسم ضمن البيانات التي تجمعها. ولم نتحقق هل تتطلب تطبيقات سطح المكتب والاستضافة الذاتية حسابًا.',
          },
          {
            q: 'هل النسخة المستضافة ذاتيًا مجانية؟',
            a: 'نعم بموجب الترخيص، بما في ذلك الاستخدام التجاري دون تعديل؛ وتدفع فقط لمزوّدي النماذج الذين تربطهم.',
          },
          {
            q: 'أين أبلّغ عن المشكلات أو أطلب ميزات؟',
            a: 'يشير README إلى صفحة المشكلات على GitHub وإلى مجتمع على Discord.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'تجاوز LobeHub واجهة الدردشة التي بدأ بها: فهو اليوم مساحة عمل للوكلاء يمكنك تثبيتها أو الاشتراك فيها أو استضافتها. ويُعدّ إيقاع الإصدارات ومثبّتات أنظمة سطح المكتب الثلاثة ودعم Ollama الموثّق نقاط قوة حقيقية. غير أن النموذج الهجين ومنتجًا متمحورًا حول السحابة واستخدامًا دون اتصال لم يُختبر، يعنيان أن من يحتاج إلى تشغيل محلي صارم عليه التحقق من ذلك أولًا على جهازه.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع LobeHub](https://lobehub.com) — وصف المنتج، روجع في 24 أكتوبر 2026.',
          '[أسعار LobeHub](https://lobehub.com/pricing.md) — الخطط والأرصدة والتخزين، روجعت في 24 أكتوبر 2026.',
          '[LobeHub على GitHub](https://github.com/lobehub/lobehub) — README وLICENSE والإصدارات (2.2.20) ونشاط المستودع، روجعت في 24 أكتوبر 2026.',
          '[Using Ollama in LobeHub](https://github.com/lobehub/lobehub/blob/main/docs/usage/providers/ollama.mdx) — إعداد المزوّد، روجع في 24 أكتوبر 2026.',
          '[سياسة خصوصية LobeHub](https://lobehub.com/privacy) — البيانات المجمّعة والتخزين؛ آخر تحديث في 5 مارس 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Open WebUI](/ar/local-llms/open-webui-review) — واجهة مستضافة ذاتيًا للنماذج المحلية مع RAG مدمج.',
          '[مراجعة LibreChat](/ar/power-local-llm/librechat-review) — واجهة دردشة مفتوحة المصدر متعددة النماذج تستضيفها بنفسك.',
          '[مراجعة Big-AGI](/ar/local-llms/big-agi-review) — واجهة دردشة متعددة المزوّدين مع شخصيات.',
          '[مقارنة LobeChat وBig-AGI وNextChat وPage Assist وChatbox](/ar/local-llms/lobechat-bigagi-nextchat-pageassist-chatbox-compared) — خمسة تطبيقات دردشة جنبًا إلى جنب.',
          '[مقارنة مساعدي الدردشة بنماذج LLM محلية](/ar/power-local-llm/local-llm-chat-assistants-compared) — مقارنة الفئة.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Tools & Interfaces',
    heroImage: '/images/lobechat-review-hero-zh.webp',
    title: 'LobeHub 评测（原 LobeChat）：支持桌面应用和自托管的智能体工作区',
    seoTitle: 'LobeHub 评测（原 LobeChat）：智能体工作区',
    intro:
      '[LobeHub](https://lobehub.com)原名 LobeChat，是一个开源的 AI 工作区，源代码位于 [github.com/lobehub/lobehub](https://github.com/lobehub/lobehub)。它最初是自托管的聊天界面，如今自称智能体协作平台：你可以创建智能体、把它们组成团队，并让它们按计划运行。本评测介绍它目前的功能、运行方式、本地模型的用法、许可证和套餐。',
    metaDescription:
      '改名后的 LobeHub（原 LobeChat）评测：覆盖 macOS、Windows、Linux 三端应用、云服务、Docker 自托管、Ollama 本地模型、许可证条款和各档套餐价格。',
    twitterDescription:
      'LobeChat 更名为 LobeHub 之后有什么：三个桌面安装包、云端套餐、Docker 托管、通过 Ollama 使用本地模型、许可证，以及未能核实的内容。',
    audience:
      '正在托管式 AI 工作区、桌面应用和自托管服务器之间做选择，并想了解本地模型如何接入的读者。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LobeHub review',
    targetKeywords: ['LobeHub review', 'LobeChat', 'LobeHub vs Open WebUI', 'LobeHub license', 'LobeHub desktop app'],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**LobeHub 是混合型而非纯本地：同一款开源产品可以作为桌面应用、托管云服务和自建服务器运行，通过 Ollama 等连接器使用本地模型。** 它的重心已从简单的聊天窗口转向以团队方式工作的智能体，因此只想要简单本地聊天界面的用户可能会觉得它过于庞大。',
    quickAnswerTop: {
      zh: {
        question: 'LobeHub 是本地应用吗？',
        answer:
          '只是一部分。桌面安装包和自托管服务器运行在你自己的设备上，但主要产品是云服务，本地模型则通过 Ollama 等提供商连接来使用。',
        bullets: [
          '有免费的云端套餐，另有三个付费套餐，价格仅以美元标示。',
          '许可证基于 Apache 2.0，衍生产品需满足商业许可证条件。',
          'PromptQuorum 没有实际试用这些应用。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'LobeHub 是什么？', anchor: 'what-is-lobehub' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '功能', anchor: 'key-features' },
      { label: '自托管', anchor: 'self-hosting' },
      { label: '使用本地模型', anchor: 'local-models' },
      { label: '套餐与价格', anchor: 'plans-and-pricing' },
      { label: '许可证', anchor: 'license' },
      { label: '适合哪些人使用', anchor: 'who-should-use' },
      { label: '我们无法核实的内容', anchor: 'who-should-not-use' },
      { label: '竞品与替代方案', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
      { label: '延伸阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LobeHub 是 LobeChat 的后继者，是一个用于创建 AI 智能体并让它们协同工作的开源工作区，可作为桌面应用、云服务或在你自己的服务器上使用。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作一个长成了小型 AI 团队的聊天应用：你描述一个智能体，它就获得工具和记忆，多个智能体还能处理同一项任务。它运行在你的电脑、LobeHub 的服务器还是你自己的服务器上，由你决定。',
          },
        ],
        items: [
          '更名：项目及其仓库已从 LobeChat 改名为 LobeHub，旧仓库地址会自动跳转。',
          '平台：提供 macOS、Windows 和 Linux 桌面安装包（版本 2.2.20，2026年10月18日发布），另有云端应用和自托管。',
          '本地模型：Ollama 是受支持的提供商，设置方式与其他提供商相同。',
          `代码：GitHub 星标 ${st.zh('lobechat')}，仓库最近更新于2026年10月24日。`,
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于官方网站、GitHub 仓库及其文档和隐私政策，核查日期为2026年10月24日。未进行实际使用或基准测试。',
          },
        ],
      },
      overview: {
        id: 'what-is-lobehub',
        title: 'LobeHub 是什么？',
        content: [
          '**LobeHub 是一个用于创建 AI 智能体并让它们以团队方式工作的开源平台，原名 LobeChat。** GitHub 简介把它称为“Chief Agent Operator”，负责聘用、安排和汇报你的智能体；官网则称其为智能体协作平台。',
          '最初的 LobeChat 是面向众多模型提供商的自托管聊天界面。目前的 README 增加了 Agent Builder、可并行处理同一任务的智能体群组、与多个智能体共同写作的 Pages、定时运行、项目、共享工作区以及 Personal Memory 功能。本评测针对 [LobeHub 仓库](https://github.com/lobehub/lobehub)中发布的产品；该仓库的 LICENSE 文件仍在使用 LobeChat 这个名称。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**LobeHub 有三种使用方式：安装桌面应用、在浏览器中打开云服务，或自行托管。** 桌面安装包不需要终端。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'macOS',
            '获取方式': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest)（Apple 芯片版和 Intel 版 .dmg）',
          },
          {
            '平台': 'Windows',
            '获取方式': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest)（安装程序 .exe）',
          },
          {
            '平台': 'Linux',
            '获取方式': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest)（AppImage、.deb、.rpm 和 snap）',
          },
          {
            '平台': '网页（云端）',
            '获取方式': '[app.lobehub.com](https://app.lobehub.com)（LobeHub Cloud，需要账号）',
          },
          {
            '平台': '自托管',
            '获取方式': '[README 中的自托管部分](https://github.com/lobehub/lobehub#-self-hosting)（Docker 或一键部署）',
          },
          {
            '平台': '源代码',
            '获取方式': '[GitHub 上的 lobehub/lobehub](https://github.com/lobehub/lobehub)（LobeHub Community License）',
          },
          {
            '平台': '官方网站',
            '获取方式': '[lobehub.com](https://lobehub.com)',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[lobehub.com/privacy](https://lobehub.com/privacy)（最后更新：2026年3月5日）',
          },
        ],
        note: '评测版本：2.2.20，于2026年10月18日发布在 GitHub Releases；仓库本身在2026年10月24日有更新，因此没有停止维护的警告。自托管需要终端，详见下文。',
      },
      features: {
        id: 'key-features',
        title: '功能',
        content: [
          '**在 LobeHub 中，智能体是工作的基本单位，聊天只是与它们交流的一种方式。** 以下内容来自 README 和官网。',
        ],
        items: [
          '**Agent Builder。** 只需描述一次智能体，配置会自动完成。',
          '**智能体群组、Pages 和定时任务。** 多个智能体在共享上下文中处理同一任务、在同一页面上协作写作，或在你不在时按设定时间运行。',
          '**Skills。** README 称有超过 10,000 个工具和兼容 MCP 的插件库。',
          '**模型。** 众多提供商集中在一个界面后面，可以在同一个对话设置中切换模型。',
          '**Personal Memory 和 IM Gateway。** 智能体可以从你的工作方式中学习，并出现在你已在使用的聊天应用里。',
        ],
        note: '各模型能做什么（视觉、工具调用、上下文长度）取决于你连接的模型，而不是 LobeHub。',
      },
      selfHost: {
        id: 'self-hosting',
        title: '自托管',
        content: [
          '**自托管需要终端和 Docker；一键部署则需要云服务账号。** README 介绍了两种方式。',
        ],
        items: [
          '**Docker。** 新建一个文件夹，运行 README 中的安装脚本（`bash <(curl -fsSL https://lobe.li/setup.sh)`），然后用 `docker compose up -d` 启动。',
          '**一键部署。** 提供 Vercel、Zeabur、Sealos、RepoCloud 和阿里云的按钮；README 要求在环境变量中填写 `OPENAI_API_KEY`。',
        ],
        note: '详细步骤请参阅 README 中链接的 Docker 部署指南。本评测没有运行自托管实例。',
      },
      localModels: {
        id: 'local-models',
        title: '使用本地模型',
        content: [
          '**LobeHub 把 Ollama 列为提供商，并提供了设置文档。** 安装 [Ollama](/zh/local-llms/how-to-install-ollama)，将环境变量 `OLLAMA_ORIGINS` 设为 `*` 以允许跨域请求，再重启 Ollama，LobeHub 就能与 Ollama 提供的模型对话。',
          '这一步来自浏览器版的文档。桌面应用是否需要它，以及能否完全离线运行，我们没有测试。',
        ],
      },
      pricing: {
        id: 'plans-and-pricing',
        title: '套餐与价格',
        content: [
          '**LobeHub Cloud 采用免费增值模式；应用和自托管服务器按许可证可免费使用。** 价格页上的价格仅以美元标示，我们没有找到本地货币价格。',
        ],
        columns: ['套餐', '价格', '包含内容'],
        rows: [
          {
            '套餐': 'Free',
            '价格': '$0',
            '包含内容': '每月 500K 积分，100 MB 向量存储',
          },
          {
            '套餐': 'Starter',
            '价格': '$12.9/月（按年计费 $9.9）',
            '包含内容': '5M 积分，1 GB 文件',
          },
          {
            '套餐': 'Premium',
            '价格': '$24.9/月（按年计费 $19.9）',
            '包含内容': '15M 积分，2 GB 文件',
          },
          {
            '套餐': 'Ultimate',
            '价格': '$49.9/月（按年计费 $39.9）',
            '包含内容': '35M 积分，4 GB 文件',
          },
        ],
        note: 'Enterprise 价格需联系咨询。据来源称，这些数字反映的是营销网站的配置，并建议在应用内核对账单；自托管服务器上的模型用量由你所连接的提供商计费。',
      },
      license: {
        id: 'license',
        title: '许可证',
        content: [
          '**LobeHub 使用 LobeHub Community License，它基于 Apache License 2.0，并不是单纯的 MIT 或 Apache。** 允许商业使用，包括在不修改源代码的情况下作为前端和后端服务使用。开发并分发衍生作品需要向 LobeHub 获取商业许可证（联系邮箱：hello@lobehub.com）。贡献者还需同意其代码可用于商业用途（包括云版本），并同意发布方可以变更许可条款。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人使用',
        items: [
          '**希望在一个工作区里使用智能体、定时任务和共享记忆的人**，而不只是一个聊天窗口。',
          '**希望在 macOS、Windows 或 Linux 上双击安装，并可选配云账号的用户。**',
          '**熟悉 Docker 的自托管用户**，希望用一个界面同时使用云端模型和 Ollama 模型。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**应用的实际表现。** 安装、速度、稳定性和桌面应用均未测试。',
          '**离线使用。** 我们阅读的来源没有说明桌面应用能否在没有网络时运行，也没有说明能否跳过跨域步骤直接连接 Ollama。',
          '**云端数据处理。** 隐私政策称，聊天记录默认保存在本地，开启云同步后会同步到云服务器；移动应用不会将聊天内容用于模型训练。政策没有涉及桌面版和自托管版，我们也没有审核其中任何一项。',
          '**Skills 数量。** 超过 10,000 这一数字是 README 的说法。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          {
            '应用': '[Open WebUI](/zh/local-llms/open-webui-review)',
            '平台': '网页、桌面',
            '价格 / 许可证': '免费 / BSD 3-Clause',
            '主要区别': '内置 RAG 的自托管界面，通常搭配 Ollama 使用',
          },
          {
            '应用': '[LibreChat](/zh/power-local-llm/librechat-review)',
            '平台': '网页',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '带团队功能的自托管多提供商聊天',
          },
          {
            '应用': '[Big-AGI](/zh/local-llms/big-agi-review)',
            '平台': '网页',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '带角色设定的多提供商界面，需自备密钥',
          },
          {
            '应用': '[Cherry Studio](/zh/local-llms/cherry-studio-ai-desktop-client)',
            '平台': '桌面',
            '价格 / 许可证': '免费 / AGPL 3.0',
            '主要区别': '无需服务器的单用户桌面客户端',
          },
        ],
        note: '竞品信息经常变化，请在各应用自己的页面上确认当前的价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'LobeChat 和 LobeHub 是同一个东西吗？',
            a: '是的。LobeHub 是原名 LobeChat 的项目的现用名称；仓库现位于 lobehub/lobehub，旧地址会跳转到新地址。',
          },
          {
            q: 'LobeHub 可以离线运行吗？',
            a: '不清楚。文档中只记载了连接本地 Ollama 服务器的方式，桌面应用的离线使用没有经过测试。',
          },
          {
            q: '我需要账号吗？',
            a: '使用 LobeHub Cloud 需要。隐私政策把电子邮箱和姓名列为其收集的数据。桌面应用和自托管是否需要账号，我们没有核实。',
          },
          {
            q: '自托管版本免费吗？',
            a: '是的，按许可证规定，未经修改的商业使用也免费；你只需要向所连接的模型提供商付费。',
          },
          {
            q: '在哪里反馈问题或提出功能需求？',
            a: 'README 指向 GitHub 的 Issues 页面和一个 Discord 社区。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'LobeHub 已经超越了它最初的聊天界面：如今它是一个可以安装、订阅或自行托管的智能体工作区。发布节奏、覆盖三大桌面系统的安装包，以及有文档记载的 Ollama 支持，都是实实在在的优势。混合模式、以云为中心的产品形态，以及未经测试的离线使用，意味着需要严格本地运行的读者应先在自己的设备上验证。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[LobeHub 官方网站](https://lobehub.com) — 产品介绍，核查于2026年10月24日。',
          '[LobeHub 价格页](https://lobehub.com/pricing.md) — 套餐、积分和存储，核查于2026年10月24日。',
          '[GitHub 上的 LobeHub](https://github.com/lobehub/lobehub) — README、LICENSE、发布版本（2.2.20）和仓库活动，核查于2026年10月24日。',
          '[Using Ollama in LobeHub](https://github.com/lobehub/lobehub/blob/main/docs/usage/providers/ollama.mdx) — 提供商设置，核查于2026年10月24日。',
          '[LobeHub 隐私政策](https://lobehub.com/privacy) — 收集的数据和存储方式，最后更新于2026年3月5日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[Open WebUI 评测](/zh/local-llms/open-webui-review) — 面向本地模型、内置 RAG 的自托管界面。',
          '[LibreChat 评测](/zh/power-local-llm/librechat-review) — 可自行托管的开源多模型聊天界面。',
          '[Big-AGI 评测](/zh/local-llms/big-agi-review) — 带角色设定的多提供商聊天界面。',
          '[LobeChat、Big-AGI、NextChat、Page Assist 与 Chatbox 对比](/zh/local-llms/lobechat-bigagi-nextchat-pageassist-chatbox-compared) — 五款聊天应用并排比较。',
          '[本地 LLM 聊天助手对比](/zh/power-local-llm/local-llm-chat-assistants-compared) — 该类别的对比文章。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Tools & Interfaces',
    heroImage: '/images/lobechat-review-hero-ko.webp',
    title: 'LobeHub 리뷰(구 LobeChat): 데스크톱 앱과 셀프 호스팅을 지원하는 에이전트 워크스페이스',
    seoTitle: 'LobeHub 리뷰(구 LobeChat): 에이전트 워크스페이스',
    intro:
      '[LobeHub](https://lobehub.com)는 구 LobeChat으로, 소스 코드를 [github.com/lobehub/lobehub](https://github.com/lobehub/lobehub)에 공개한 오픈 소스 AI 워크스페이스입니다. 처음에는 셀프 호스팅 채팅 인터페이스였으나 지금은 에이전트 협업 플랫폼을 표방합니다. 에이전트를 만들고, 팀으로 묶고, 일정에 따라 실행할 수 있습니다. 이 리뷰에서는 현재 기능, 실행 환경, 로컬 모델 사용법, 라이선스, 요금제를 다룹니다.',
    metaDescription:
      '이름이 바뀐 LobeHub(구 LobeChat)를 소개합니다. 세 가지 데스크톱 OS용 앱, 클라우드, Docker 셀프 호스팅, Ollama 지원, 라이선스와 요금제를 정리했습니다.',
    twitterDescription:
      'LobeChat에서 LobeHub로 이름이 바뀐 뒤 달라진 점: 설치 프로그램 세 종, 클라우드 요금제, Docker 운영, Ollama 로컬 모델, 라이선스, 확인하지 못한 사항.',
    audience:
      '호스팅형 AI 워크스페이스, 데스크톱 앱, 직접 운영하는 서버 중에서 고민하며 로컬 모델이 어떻게 연결되는지 알고 싶은 분.',
    readTime: '8분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LobeHub review',
    targetKeywords: ['LobeHub review', 'LobeChat', 'LobeHub vs Open WebUI', 'LobeHub license', 'LobeHub desktop app'],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**LobeHub는 순수한 로컬 앱이 아니라 하이브리드입니다. 같은 오픈 소스 제품이 데스크톱 앱, 호스팅형 클라우드 서비스, 직접 운영하는 서버로 실행되며, 로컬 모델은 Ollama 같은 커넥터를 통해 사용합니다.** 초점이 단순한 채팅 창에서 팀으로 일하는 에이전트로 옮겨졌기 때문에, 간단한 로컬 채팅 인터페이스만 원하는 분께는 필요 이상으로 클 수 있습니다.',
    quickAnswerTop: {
      ko: {
        question: 'LobeHub는 로컬 앱입니까?',
        answer:
          '일부만 그렇습니다. 데스크톱 설치 프로그램과 셀프 호스팅 서버는 사용자의 컴퓨터에서 실행되지만 주력 제품은 클라우드 서비스이며, 로컬 모델은 Ollama 같은 제공자 연결로 사용합니다.',
        bullets: [
          '무료 클라우드 요금제가 있고 유료 요금제는 세 가지이며, 가격은 미국 달러로만 표시됩니다.',
          '라이선스는 Apache 2.0 기반이며, 파생 제품에는 상용 라이선스 조건이 있습니다.',
          'PromptQuorum은 앱을 직접 사용해 보지 않았습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'LobeHub란 무엇인가?', anchor: 'what-is-lobehub' },
      { label: '어디서 받나요?', anchor: 'get-it' },
      { label: '기능', anchor: 'key-features' },
      { label: '셀프 호스팅', anchor: 'self-hosting' },
      { label: '로컬 모델 사용하기', anchor: 'local-models' },
      { label: '요금제와 가격', anchor: 'plans-and-pricing' },
      { label: '라이선스', anchor: 'license' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 사항', anchor: 'who-should-not-use' },
      { label: '경쟁 앱과 대안', anchor: 'vs-alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LobeChat의 후속인 LobeHub는 AI 에이전트를 만들어 함께 실행하는 오픈 소스 워크스페이스로, 데스크톱 앱, 클라우드, 직접 운영하는 서버에서 사용할 수 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '채팅 앱이 작은 AI 팀으로 성장한 것이라고 생각하면 됩니다. 에이전트를 설명하면 도구와 메모리가 주어지고, 여러 에이전트가 같은 작업을 함께 처리할 수 있습니다. 내 컴퓨터, LobeHub 서버, 내 서버 중 어디에서 실행할지는 직접 정합니다.',
          },
        ],
        items: [
          '이름 변경: 프로젝트와 저장소가 LobeChat에서 LobeHub로 바뀌었으며, 이전 저장소 주소는 새 주소로 연결됩니다.',
          '플랫폼: macOS, Windows, Linux용 데스크톱 설치 프로그램(버전 2.2.20, 2026년 10월 18일 공개)과 클라우드 앱, 셀프 호스팅이 있습니다.',
          '로컬 모델: Ollama는 지원되는 제공자이며 다른 제공자와 같은 방식으로 설정합니다.',
          `코드: GitHub 스타 ${st.ko('lobechat')}개, 저장소는 2026년 10월 24일에 마지막으로 업데이트되었습니다.`,
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 공식 웹사이트, GitHub 저장소와 문서, 개인정보 처리방침을 2026년 10월 24일에 확인한 내용을 바탕으로 합니다. 직접 사용이나 벤치마크는 하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-lobehub',
        title: 'LobeHub란 무엇인가?',
        content: [
          '**LobeHub는 AI 에이전트를 만들어 팀으로 일하게 하는 오픈 소스 플랫폼이며, 이전 이름은 LobeChat입니다.** GitHub 설명은 에이전트를 채용하고, 일정을 잡고, 보고하게 하는 "Chief Agent Operator"라고 소개하며, 웹사이트는 에이전트 협업 플랫폼이라고 설명합니다.',
          '처음의 LobeChat은 여러 모델 제공자를 지원하는 셀프 호스팅 채팅 인터페이스였습니다. 현재 README에는 Agent Builder, 한 작업을 병렬로 처리하는 에이전트 그룹, 여러 에이전트와 함께 글을 쓰는 Pages, 예약 실행, 프로젝트, 공유 워크스페이스, Personal Memory 기능이 더해졌습니다. 이 리뷰는 [LobeHub 저장소](https://github.com/lobehub/lobehub)에 공개된 제품을 다루며, 해당 저장소의 LICENSE 파일은 아직 LobeChat이라는 이름을 사용합니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '어디서 받나요?',
        content: [
          '**LobeHub는 세 가지 방식으로 사용할 수 있습니다. 데스크톱 앱을 설치하거나, 브라우저에서 클라우드 서비스를 열거나, 직접 호스팅합니다.** 데스크톱 설치 프로그램에는 터미널이 필요 없습니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'macOS',
            '받는 곳': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest)(Apple silicon용과 Intel용 .dmg)',
          },
          {
            '플랫폼': 'Windows',
            '받는 곳': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest)(설치용 .exe)',
          },
          {
            '플랫폼': 'Linux',
            '받는 곳': '[GitHub Releases](https://github.com/lobehub/lobehub/releases/latest)(AppImage, .deb, .rpm, snap)',
          },
          {
            '플랫폼': '웹(클라우드)',
            '받는 곳': '[app.lobehub.com](https://app.lobehub.com)(LobeHub Cloud, 계정 필요)',
          },
          {
            '플랫폼': '셀프 호스팅',
            '받는 곳': '[README의 셀프 호스팅 항목](https://github.com/lobehub/lobehub#-self-hosting)(Docker 또는 원클릭 배포)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '[GitHub의 lobehub/lobehub](https://github.com/lobehub/lobehub)(LobeHub Community License)',
          },
          {
            '플랫폼': '웹사이트',
            '받는 곳': '[lobehub.com](https://lobehub.com)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[lobehub.com/privacy](https://lobehub.com/privacy)(최종 업데이트: 2026년 3월 5일)',
          },
        ],
        note: '확인한 버전: 2.2.20(2026년 10월 18일 GitHub Releases에 공개). 저장소 자체는 2026년 10월 24일에 업데이트되어 유지보수 중단 경고는 없습니다. 셀프 호스팅에는 아래 설명처럼 터미널이 필요합니다.',
      },
      features: {
        id: 'key-features',
        title: '기능',
        content: [
          '**LobeHub에서는 에이전트가 작업 단위이며, 채팅은 에이전트와 대화하는 한 가지 방법일 뿐입니다.** 아래 목록은 README와 웹사이트를 바탕으로 합니다.',
        ],
        items: [
          '**Agent Builder.** 에이전트를 한 번 설명하면 설정이 자동으로 이루어집니다.',
          '**에이전트 그룹, Pages, 일정.** 여러 에이전트가 공유 컨텍스트로 한 작업을 처리하거나, 한 페이지를 함께 작성하거나, 자리를 비운 사이에도 정해진 시간에 실행됩니다.',
          '**Skills.** README는 10,000개 이상의 도구와 MCP 호환 플러그인 라이브러리가 있다고 밝힙니다.',
          '**모델.** 여러 제공자가 하나의 인터페이스 뒤에 모여 있어, 같은 대화 설정 안에서 모델을 바꿀 수 있습니다.',
          '**Personal Memory와 IM Gateway.** 에이전트는 사용자의 작업 방식에서 학습하고, 이미 쓰는 메신저 앱에서도 호출할 수 있습니다.',
        ],
        note: '각 모델이 할 수 있는 일(비전, 도구 사용, 컨텍스트 길이)은 LobeHub가 아니라 연결한 모델에 따라 달라집니다.',
      },
      selfHost: {
        id: 'self-hosting',
        title: '셀프 호스팅',
        content: [
          '**셀프 호스팅에는 터미널과 Docker가 필요하며, 원클릭 배포에는 클라우드 계정이 필요합니다.** README는 두 가지 방법을 설명합니다.',
        ],
        items: [
          '**Docker.** 폴더를 만들고 README의 설치 스크립트(`bash <(curl -fsSL https://lobe.li/setup.sh)`)를 실행한 뒤 `docker compose up -d`로 스택을 시작합니다.',
          '**원클릭 배포.** Vercel, Zeabur, Sealos, RepoCloud, Alibaba Cloud용 버튼이 있으며, README는 환경 변수에 `OPENAI_API_KEY`를 넣도록 안내합니다.',
        ],
        note: '자세한 내용은 README에 링크된 Docker 배포 가이드를 참고하십시오. 이 리뷰를 위해 셀프 호스팅 인스턴스를 실행하지는 않았습니다.',
      },
      localModels: {
        id: 'local-models',
        title: '로컬 모델 사용하기',
        content: [
          '**LobeHub는 Ollama를 제공자로 제시하고 설정 방법을 문서로 제공합니다.** [Ollama](/ko/local-llms/how-to-install-ollama)를 설치하고 환경 변수 `OLLAMA_ORIGINS`를 `*`로 설정해 교차 출처 요청을 허용한 뒤 Ollama를 다시 시작하면, LobeHub에서 Ollama가 제공하는 모델과 채팅할 수 있습니다.',
          '이 단계는 브라우저 버전 문서에 근거합니다. 데스크톱 앱에서도 필요한지, 완전히 오프라인으로 동작하는지는 테스트하지 않았습니다.',
        ],
      },
      pricing: {
        id: 'plans-and-pricing',
        title: '요금제와 가격',
        content: [
          '**LobeHub Cloud는 프리미엄 모델입니다. 앱과 셀프 호스팅 서버는 라이선스에 따라 무료입니다.** 가격 페이지의 금액은 미국 달러로만 표시되며, 현지 통화 가격은 찾지 못했습니다.',
        ],
        columns: ['요금제', '가격', '포함 내용'],
        rows: [
          {
            '요금제': 'Free',
            '가격': '$0',
            '포함 내용': '월 500K 크레딧, 벡터 저장소 100 MB',
          },
          {
            '요금제': 'Starter',
            '가격': '월 $12.9(연간 결제 시 $9.9)',
            '포함 내용': '5M 크레딧, 파일 1 GB',
          },
          {
            '요금제': 'Premium',
            '가격': '월 $24.9(연간 결제 시 $19.9)',
            '포함 내용': '15M 크레딧, 파일 2 GB',
          },
          {
            '요금제': 'Ultimate',
            '가격': '월 $49.9(연간 결제 시 $39.9)',
            '포함 내용': '35M 크레딧, 파일 4 GB',
          },
        ],
        note: 'Enterprise 가격은 문의를 통해 안내됩니다. 출처에 따르면 이 수치는 마케팅 사이트의 설정을 반영하며, 앱 안의 결제 화면에서 확인할 것을 권합니다. 셀프 호스팅 서버에서의 모델 사용량은 연결한 제공자가 청구합니다.',
      },
      license: {
        id: 'license',
        title: '라이선스',
        content: [
          '**LobeHub는 Apache License 2.0을 기반으로 한 LobeHub Community License를 사용하며, 단순한 MIT나 Apache가 아닙니다.** 소스 코드를 수정하지 않는다면 프런트엔드와 백엔드 서비스로 쓰는 것을 포함해 상업적 사용이 허용됩니다. 파생물을 개발해 배포하려면 LobeHub의 상용 라이선스가 필요합니다(문의: hello@lobehub.com). 또한 기여자는 자신의 코드가 클라우드 버전을 포함해 상업적으로 사용될 수 있으며, 제작자가 라이선스 조건을 변경할 수 있다는 점에 동의합니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**채팅 창만이 아니라 에이전트, 일정, 공유 메모리를 한곳에서 쓰고 싶은 분.**',
          '**macOS, Windows, Linux에서 더블클릭으로 설치하고, 필요하면 클라우드 계정도 쓰고 싶은 분.**',
          '**Docker에 익숙한 셀프 호스팅 사용자로, 클라우드 모델과 Ollama 모델을 하나의 화면에서 쓰고 싶은 분.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**앱의 실제 사용감.** 설치, 속도, 안정성, 데스크톱 앱은 테스트하지 않았습니다.',
          '**오프라인 사용.** 데스크톱 앱이 인터넷 없이 동작하는지, 교차 출처 설정 없이 Ollama에 연결되는지는 확인한 출처에 나와 있지 않습니다.',
          '**클라우드 데이터 처리.** 개인정보 처리방침에 따르면 채팅 로그는 기본적으로 로컬에 저장되고, 클라우드 동기화를 켜면 클라우드 서버로 동기화됩니다. 모바일 앱에서는 채팅 내용을 모델 학습에 사용하지 않는다고 합니다. 데스크톱 버전과 셀프 호스팅 버전은 다루지 않으며, 이 내용들은 감사하지 않았습니다.',
          '**Skills 수.** 10,000개 이상이라는 수치는 README의 주장입니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이'],
        rows: [
          {
            '앱': '[Open WebUI](/ko/local-llms/open-webui-review)',
            '플랫폼': '웹, 데스크톱',
            '가격 / 라이선스': '무료 / BSD 3-Clause',
            '핵심 차이': 'RAG 내장 셀프 호스팅 인터페이스, 보통 Ollama와 함께 사용',
          },
          {
            '앱': '[LibreChat](/ko/power-local-llm/librechat-review)',
            '플랫폼': '웹',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '팀 기능을 갖춘 셀프 호스팅 멀티 제공자 채팅',
          },
          {
            '앱': '[Big-AGI](/ko/local-llms/big-agi-review)',
            '플랫폼': '웹',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '페르소나를 지원하는 멀티 제공자 인터페이스, 자신의 키를 사용',
          },
          {
            '앱': '[Cherry Studio](/ko/local-llms/cherry-studio-ai-desktop-client)',
            '플랫폼': '데스크톱',
            '가격 / 라이선스': '무료 / AGPL 3.0',
            '핵심 차이': '서버가 필요 없는 1인용 데스크톱 클라이언트',
          },
        ],
        note: '경쟁 앱의 정보는 자주 바뀌므로, 현재 가격, 라이선스, 플랫폼은 각 앱의 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'LobeChat과 LobeHub는 같은 것입니까?',
            a: '예. LobeHub는 예전에 LobeChat이라 불리던 프로젝트의 현재 이름입니다. 저장소는 이제 lobehub/lobehub에 있으며 이전 주소는 이곳으로 연결됩니다.',
          },
          {
            q: 'LobeHub는 오프라인에서 동작합니까?',
            a: '알 수 없습니다. 문서에 나와 있는 것은 로컬 Ollama 서버 연결뿐이며, 데스크톱 앱의 오프라인 사용은 테스트하지 않았습니다.',
          },
          {
            q: '계정이 필요합니까?',
            a: 'LobeHub Cloud에는 필요합니다. 개인정보 처리방침은 수집 데이터로 이메일 주소와 이름을 꼽습니다. 데스크톱 앱과 셀프 호스팅에 계정이 필요한지는 확인하지 않았습니다.',
          },
          {
            q: '셀프 호스팅 버전은 무료입니까?',
            a: '예. 라이선스상 수정하지 않는 한 상업적 사용을 포함해 무료이며, 연결하는 모델 제공자에게만 비용을 지불합니다.',
          },
          {
            q: '문제 신고나 기능 요청은 어디에 합니까?',
            a: 'README는 GitHub Issues 페이지와 Discord 커뮤니티를 안내합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'LobeHub는 출발점이었던 채팅 인터페이스를 넘어, 설치하거나 구독하거나 직접 호스팅할 수 있는 에이전트 워크스페이스가 되었습니다. 릴리스 주기, 세 가지 데스크톱 OS용 설치 프로그램, 문서화된 Ollama 지원은 분명한 강점입니다. 하이브리드 방식이고 클라우드 중심 제품이며 오프라인 사용이 검증되지 않았으므로, 엄격하게 로컬로만 운영해야 하는 분은 먼저 자신의 컴퓨터에서 확인하시기 바랍니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[LobeHub 웹사이트](https://lobehub.com) — 제품 설명, 2026년 10월 24일 확인.',
          '[LobeHub 가격](https://lobehub.com/pricing.md) — 요금제, 크레딧, 저장소, 2026년 10월 24일 확인.',
          '[GitHub의 LobeHub](https://github.com/lobehub/lobehub) — README, LICENSE, 릴리스(2.2.20), 저장소 활동, 2026년 10월 24일 확인.',
          '[Using Ollama in LobeHub](https://github.com/lobehub/lobehub/blob/main/docs/usage/providers/ollama.mdx) — 제공자 설정, 2026년 10월 24일 확인.',
          '[LobeHub 개인정보 처리방침](https://lobehub.com/privacy) — 수집 데이터와 저장 방식, 최종 업데이트 2026년 3월 5일.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Open WebUI 리뷰](/ko/local-llms/open-webui-review) — RAG를 내장한 로컬 모델용 셀프 호스팅 인터페이스.',
          '[LibreChat 리뷰](/ko/power-local-llm/librechat-review) — 직접 호스팅하는 오픈 소스 멀티 모델 채팅 인터페이스.',
          '[Big-AGI 리뷰](/ko/local-llms/big-agi-review) — 페르소나를 지원하는 멀티 제공자 채팅 인터페이스.',
          '[LobeChat, Big-AGI, NextChat, Page Assist, Chatbox 비교](/ko/local-llms/lobechat-bigagi-nextchat-pageassist-chatbox-compared) — 채팅 앱 다섯 가지를 나란히 비교.',
          '[로컬 LLM 채팅 어시스턴트 비교](/ko/power-local-llm/local-llm-chat-assistants-compared) — 카테고리 비교.',
        ],
      },
    },
  },
}
