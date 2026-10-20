// SpiritBox Ultimate Review: Windows Early Access (R6) for LM Studio Users
// Slug: spiritbox-ultimate-review
// Companion to: lm-studio-review, jan-review, gpt4all-review, friedrichai-review
// Sources: the developer's Ultimate offer, LM Studio buyer checklist, requirements, release-evidence, privacy, buyer-policy,
// about and edition-overview pages plus the Gumroad listing, all checked 2026-10-16, and a maker comment from Ryan Lucas
// (2026-10) — no hands-on testing. Scope is anchored to the R6 Early Access offer at the developer's request: the download
// is NOT described as a qualified multi-service workstation, proven GPU orchestration or a ready-to-use RAG/automation bundle.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/spiritbox-ultimate-review-hero-en.webp',
    title: 'SpiritBox Ultimate Review: Windows Early Access for LM Studio Users',
    seoTitle: 'SpiritBox Ultimate Review: Windows Early Access R6',
    intro: 'SpiritBox Ultimate is a separate Windows application for people who already run LM Studio and want to evaluate Guide-based conversations, saved chats and spoken replies together. This review is anchored to the current offer, SpiritBox Ultimate v1.12 R6, a Windows Early Access package that needs Docker Desktop and a working LM Studio server. It draws on the developer\'s [Ultimate offer page](https://spiritbox.ca/ultimate.html), [buyer checklist](https://spiritbox.ca/lm-studio-ultimate-checklist.html) and [release evidence](https://spiritbox.ca/release-status.html), checked on 16 October 2026, plus a comment from the developer, Ryan Lucas. PromptQuorum has not installed or tested the software.',
    metaDescription: 'SpiritBox Ultimate review: Windows Early Access app for LM Studio users with Guides, saved chats and spoken replies. Needs Docker; testing limits shown.',
    twitterDescription: 'SpiritBox Ultimate R6 review: a Windows Early Access app for LM Studio users, with Guides, saved chats and spoken replies. Requires Docker; verification gaps listed.',
    audience: 'Technical Windows users who already run LM Studio and want to know exactly what the SpiritBox Ultimate R6 offer covers, what it requires, and what has not been verified.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'SpiritBox Ultimate review',
    targetKeywords: [
      'spiritbox ultimate review',
      'spiritbox ultimate lm studio',
      'spiritbox ultimate r6',
      'spiritbox early access windows',
      'lm studio spoken replies',
      'lm studio docker interface',
      'spiritbox vs lm studio',
    ],
    current_models_mentioned: [
      'GPT-OSS 20B',
      'Qwen',
    ],
    current_hardware_mentioned: [
      'Windows 10/11',
      'NVIDIA GPU (24 GB)',
      'Docker Desktop',
      'WSL2',
    ],
    leadAnswerBlock: '**SpiritBox Ultimate v1.12 R6 is a Windows Early Access application that adds Guide-based conversations, saved chats and spoken replies on top of an LM Studio model you already run.** It is aimed at technical Windows users who are comfortable with Docker, and the developer\'s own release evidence leaves a fresh real-model run and a clean-PC installation unverified.',
    quickAnswerTop: {
      en: {
        question: 'Is SpiritBox Ultimate a complete local AI workstation?',
        answer: 'No, not as the current download. The R6 offer is scoped to the core conversation experience on top of LM Studio, and the broader workstation features described elsewhere on the developer\'s site are not covered by its acceptance evidence.',
        bullets: [
          'Windows 10 or 11 only; macOS and Linux are not qualified.',
          'Email support is best-effort during Early Access, with no guaranteed response time.',
          'The checklist starts with the documented Minimal profile, extracted into a new empty folder.',
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
        label: 'What Is SpiritBox Ultimate?',
        anchor: 'what-is-spiritbox-ultimate',
      },
      {
        label: 'Get It',
        anchor: 'get-it',
      },
      {
        label: 'Requirements and Setup',
        anchor: 'requirements-setup',
      },
      {
        label: 'What the R6 Package Includes and Excludes',
        anchor: 'package-scope',
      },
      {
        label: 'Privacy and Data Flow',
        anchor: 'privacy',
      },
      {
        label: 'Testing Status and Limits',
        anchor: 'testing-status',
      },
      {
        label: 'From the Maker',
        anchor: 'from-the-maker',
      },
      {
        label: 'Who Should Use It',
        anchor: 'who-should-use',
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
            text: 'SpiritBox Ultimate is a separate Windows application, currently in Early Access, that sits alongside LM Studio rather than replacing it.',
          },
          {
            type: 'plain-terms',
            text: 'You supply the model and the LM Studio server; SpiritBox Ultimate supplies the interface and the Docker-based setup around them, and its developer says plainly which parts have not been tested yet.',
          },
        ],
        items: [
          'Price and licence: $199 USD once through Gumroad; the purchase grants use of the delivered edition under its included licence.',
          'Prerequisites: Docker Desktop with WSL2 and Linux containers, plus a working LM Studio model and server.',
          'Package: the application, Windows setup scripts, LM Studio first-run guidance and third-party notices.',
          'Developer: Ryan Lucas of Alberta, Canada, who describes the release as aimed at technical Windows users.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the developer\'s Ultimate offer, buyer checklist, requirements, release-evidence, privacy and policy pages, checked on 16 October 2026, plus a comment from the developer. PromptQuorum has not installed or tested SpiritBox Ultimate.',
          },
        ],
      },
      overview: {
        id: 'what-is-spiritbox-ultimate',
        title: 'What Is SpiritBox Ultimate?',
        content: [
          '**SpiritBox Ultimate is a separate Windows application, not a model runner: it connects to the LM Studio model and server you already operate and adds Guide-based conversations, saved chats and spoken replies in one interface.**',
          'In SpiritBox, a Guide is a reusable set of conversation instructions, as described at the start of the developer\'s [Ultimate offer page](https://spiritbox.ca/ultimate.html); the [edition overview](https://spiritbox.ca/) lists "custom Spirit Guides" under the free Basic edition. That page also notes that LM Studio already offers saved chats and reusable prompt presets, so the developer frames Ultimate as a way to evaluate the three features together.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**SpiritBox Ultimate R6 is a Windows download sold once for $199 USD through Gumroad; the site shows prices in USD only.**',
        ],
        columns: [
          'Item',
          'Where to get it',
        ],
        rows: [
          {
            Item: 'Purchase',
            'Where to get it': '[Gumroad](https://spiritadmin5.gumroad.com/l/yseqxo), $199 USD',
          },
          {
            Item: 'Website',
            'Where to get it': '[SpiritBox Ultimate page](https://spiritbox.ca/ultimate.html)',
          },
          {
            Item: 'Buyer checklist',
            'Where to get it': '[LM Studio setup checklist](https://spiritbox.ca/lm-studio-ultimate-checklist.html)',
          },
          {
            Item: 'Release evidence',
            'Where to get it': '[R6 release evidence](https://spiritbox.ca/release-status.html)',
          },
          {
            Item: 'Privacy policy',
            'Where to get it': '[SpiritBox privacy page](https://spiritbox.ca/privacy.html)',
          },
          {
            Item: 'Purchase terms',
            'Where to get it': '[Buyer policies](https://spiritbox.ca/buyer-policies.html)',
          },
          {
            Item: 'Other editions',
            'Where to get it': '[Edition comparison](https://spiritbox.ca/products.html)',
          },
        ],
        note: 'Version verified on 16 October 2026: SpiritBox Ultimate v1.12 R6 (Windows Early Access), from the developer\'s release-evidence page. Setup means extracting a zip archive and following the included scripts and guidance; the sources describe no installer wizard, and a developer-level environment (Docker Desktop, WSL2) is required. Email support is best-effort during Early Access, with no guaranteed response time, uptime or installation success.',
      },
      requirements: {
        id: 'requirements-setup',
        title: 'Requirements and Setup',
        content: [
          '**R6 needs Windows 10 or 11, Docker Desktop with Compose, WSL2 and Linux containers, and an already-working LM Studio model and server; macOS and Linux are not qualified.**',
          'Hardware is not fixed. The release does not establish a general RAM or VRAM minimum; what fits depends on the model that already runs in LM Studio, and an earlier test used a 24 GB NVIDIA GPU, which is not a stated minimum. No port is listed for Ultimate. The internet is needed for initial downloads and optional integrations, but core local use needs no SpiritBox cloud account.',
          'The steps below follow the developer\'s checklist; PromptQuorum has not run them.',
        ],
        numberedItems: [
          {
            title: 'Confirm the model works in LM Studio chat',
            whyItMatters: 'A working chat does not prove that SpiritBox can reach LM Studio\'s server.',
          },
          {
            title: 'Start the LM Studio server and note its details',
            whyItMatters: 'Start it from the Developer tab, then record the model identifier and server address; see [LM Studio\'s server documentation](https://lmstudio.ai/docs/developer/core/server).',
          },
          {
            title: 'Install or check Docker Desktop',
            whyItMatters: 'R6\'s documented route needs WSL2 and Linux containers; see [Docker\'s Windows instructions](https://docs.docker.com/desktop/setup/install/windows-install/).',
          },
          {
            title: 'Back up, then extract into a new empty folder',
            whyItMatters: 'The release page advises preserving existing backups and not overwriting data or deleting volumes of an earlier installation.',
          },
          {
            title: 'Follow LMSTUDIO_FIRST.md with the Minimal profile',
            whyItMatters: 'The package\'s own guide covers the application connection steps.',
          },
        ],
      },
      scope: {
        id: 'package-scope',
        title: 'What the R6 Package Includes and Excludes',
        content: [
          '**The R6 download contains the application, Windows setup scripts, LM Studio first-run guidance and third-party notices.**',
        ],
        items: [
          '**Models.** Not included; they are separate downloads suited to your hardware.',
          '**Workflow bundles.** A configured, tested n8n, Telegram or ComfyUI bundle is not included, and the Proposal, Checklist, Repurpose and Telegram candidates are not in R6.',
          '**Optional services.** Broader workflows need separate setup and qualification.',
          '**Descriptions to avoid.** At the developer\'s request, this review does not describe the download as a qualified multi-service AI workstation, a proven GPU-orchestration system or a ready-to-use RAG or automation bundle; the R6 acceptance evidence does not support those descriptions.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**The privacy page says SpiritBox is designed to keep core inference, conversations, project files and databases on systems you control, and that actual data locations must be documented by the final qualified package.**',
          'Optional features can send data to third parties when configured or used: the page lists model acquisition, web search, Telegram, software updates, external APIs, checkout, email and support tools. The policy is labelled a plain-language draft, does not address telemetry, and names no data controller beyond the site credit to Ryan Lucas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the developer\'s declarations, not audit results. PromptQuorum has not inspected network traffic; anyone handling confidential data should test with optional integrations switched off.',
          },
        ],
      },
      testing: {
        id: 'testing-status',
        title: 'Testing Status and Limits',
        content: [
          '**The developer states that R6 has had neither a fresh real-model run nor a separate clean-PC installation test, and PromptQuorum has not tested it either.**',
        ],
        items: [
          '**Verified.** Per the release-evidence page, the R6 archive, its repeatability and all 519 payload hashes were checked, and a fresh Gumroad download matched the published checksum.',
          '**Passed in an earlier private build.** One LM Studio chat with GPT-OSS 20B and one CPU voice clip completed, including saved answer, audio replay and reopening.',
          '**Failed in that build.** The initial streamed response stayed stuck, and the sole cause of that incident was not conclusively established.',
          '**Fixed offline only.** R6 includes a streaming fix that passed offline parser and browser tests with saved text and audio; it has not had a new real-model run.',
          '**Unqualified.** Fresh-PC installation, the bundled default Qwen route, the Full-workstation features, CPU-only, AMD and Intel GPU setups, and other hardware configurations.',
          '**Not stated.** The sources do not mention code signing or SmartScreen behaviour, and the offer page prints no licence text.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The developer\'s checklist states that it is not an installation certification or proof that your hardware and model configuration will work.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'From the Maker',
        content: [
          'Ryan Lucas, the developer of SpiritBox, supplied the following comment for this review. It is presented as the developer\'s own words, not as PromptQuorum\'s independent editorial assessment:',
          '"The idea behind SpiritBox Ultimate is to bring Guide-based conversations, saved chats and spoken replies into one interface for people running local AI. The current Early Access release is aimed at Windows users who already operate LM Studio and are comfortable with Docker. The immediate priority is making that core experience dependable and clearly documenting what has and has not been verified."',
        ],
        note: '— Ryan Lucas, developer',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Windows users who already run LM Studio and are comfortable with Docker.**',
          '**Buyers who want to test the whole combination before relying on it.**',
          '**Mac or Linux users, and anyone wanting a finished installer, should consider the alternatives below.**',
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
            App: '[FriedrichAI](/power-local-llm/friedrichai-review)',
            Platforms: 'Windows',
            'Price / license': '$9.99 USD / proprietary',
            'Key difference': 'Offline assistant with its own runtime, sold on Steam',
          },
          {
            App: '[Jan](/power-local-llm/jan-review)',
            Platforms: 'macOS, Windows, Linux',
            'Price / license': 'Free / Apache 2.0 (variant)',
            'Key difference': 'Open-source desktop chat with MCP and a local API server',
          },
          {
            App: '[GPT4All](/power-local-llm/gpt4all-review)',
            Platforms: 'macOS, Windows, Linux',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source desktop app with local document chat',
          },
          {
            App: '[LM Studio](/power-local-llm/lm-studio-review)',
            Platforms: 'macOS, Windows, Linux',
            'Price / license': 'Free / proprietary',
            'Key difference': 'The model runner and local server that Ultimate connects to',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license, and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is there a cheaper SpiritBox edition?',
            a: 'Yes. The developer also sells Basic, which is free, and Pro at $49 USD; Pro adds Piper spoken replies and needs two Docker services plus LM Studio. Neither is covered by this review.',
          },
          {
            q: 'Can I get a refund?',
            a: 'The offer page states no refund policy of its own. The buyer policies say refund requests go through the Gumroad order and the terms shown at purchase, so read those before paying.',
          },
          {
            q: 'May I use it commercially or resell it?',
            a: 'The buyer policies allow personal modification and troubleshooting, but commercial redistribution, resale, white-label deployment or presenting SpiritBox as your own product requires separate written permission.',
          },
          {
            q: 'How can I check that my download is intact?',
            a: 'Compare the SHA-256 checksum of SpiritBox_Ultimate_v1.12_R6_Windows.zip (82,534,488 bytes) with the value on the release-evidence page before opening the archive.',
          },
          {
            q: 'Is this review sponsored?',
            a: 'The developer asked for unpaid editorial inclusion only, and this page contains no affiliate link.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'SpiritBox Ultimate R6 is a narrowly scoped, openly caveated Early Access offer for technical Windows users with an existing LM Studio setup who want to trial the combination themselves. Weigh that against the Docker and WSL2 prerequisites, the open verification items listed above and the absence of hands-on testing here. Readers who only need saved chats and prompt presets can stay with [LM Studio](/power-local-llm/lm-studio-review), and those who want a packaged offline assistant can compare [FriedrichAI](/power-local-llm/friedrichai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[SpiritBox Ultimate offer](https://spiritbox.ca/ultimate.html) — R6 scope, price, contents and testing limits, checked 16 October 2026.',
          '[Ultimate setup checklist for LM Studio](https://spiritbox.ca/lm-studio-ultimate-checklist.html) — steps, requirements and verification status, checked 16 October 2026.',
          '[R6 release evidence](https://spiritbox.ca/release-status.html) — version label, archive, checksum, and passed, failed and unverified items, checked 16 October 2026.',
          '[Requirements](https://spiritbox.ca/requirements.html) — operating system, container and hardware notes per edition, checked 16 October 2026.',
          '[Privacy](https://spiritbox.ca/privacy.html) and [buyer policies](https://spiritbox.ca/buyer-policies.html) — data flow, refund, licence and support terms, checked 16 October 2026.',
          '[SpiritBox home](https://spiritbox.ca/) and [About](https://spiritbox.ca/about.html) — edition overview, developer background and location, checked 16 October 2026.',
          '[SpiritBox Ultimate on Gumroad](https://spiritadmin5.gumroad.com/l/yseqxo) — checkout price in USD, checked 16 October 2026.',
          'Maker comment — supplied by Ryan Lucas by email in October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[LM Studio Review](/power-local-llm/lm-studio-review) — the model runner and local server SpiritBox Ultimate connects to.',
          '[Jan Review](/power-local-llm/jan-review) — a free, open-source desktop chat app.',
          '[GPT4All Review](/power-local-llm/gpt4all-review) — an MIT-licensed desktop app with document chat.',
          '[FriedrichAI Review](/power-local-llm/friedrichai-review) — a bought-once offline Windows assistant sold on Steam.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'SpiritBox Ultimate Review: Windows Early Access for LM Studio Users',
      description: 'SpiritBox Ultimate review: a Windows Early Access application for LM Studio users with Guide-based conversations, saved chats and spoken replies. Requirements, privacy, and what the release evidence does not confirm.',
      url: 'https://promptquorum.com/power-local-llm/spiritbox-ultimate-review',
      inLanguage: 'en',
      datePublished: '2026-10-16',
      dateModified: '2026-10-16',
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
        audienceType: 'Technical Windows users evaluating the SpiritBox Ultimate R6 Early Access offer for LM Studio',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'SpiritBox Ultimate',
        },
        {
          '@type': 'Thing',
          name: 'LM Studio',
        },
        {
          '@type': 'Thing',
          name: 'On-device AI',
        },
        {
          '@type': 'Thing',
          name: 'Local LLM',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://promptquorum.com/power-local-llm/spiritbox-ultimate-review',
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
          item: 'https://promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://promptquorum.com/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'SpiritBox Ultimate Review',
          item: 'https://promptquorum.com/power-local-llm/spiritbox-ultimate-review',
        },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/spiritbox-ultimate-review-hero-de.webp',
    title: 'SpiritBox-Ultimate-Rezension: Windows Early Access für LM-Studio-Nutzer',
    seoTitle: 'SpiritBox-Ultimate-Rezension: Early Access R6 (Windows)',
    intro: 'SpiritBox Ultimate ist eine eigenständige Windows-Anwendung für Menschen, die bereits LM Studio nutzen und Guide-basierte Unterhaltungen, gespeicherte Chats und gesprochene Antworten gemeinsam ausprobieren möchten. Diese Rezension bezieht sich auf das aktuelle Angebot, SpiritBox Ultimate v1.12 R6, ein Early-Access-Paket für Windows, das Docker Desktop und einen funktionierenden LM-Studio-Server voraussetzt. Grundlage sind die [Angebotsseite zu Ultimate](https://spiritbox.ca/ultimate.html), die [Käufer-Checkliste](https://spiritbox.ca/lm-studio-ultimate-checklist.html) und die [Release-Nachweise](https://spiritbox.ca/release-status.html) des Entwicklers, geprüft am 16. Oktober 2026, sowie ein Kommentar des Entwicklers Ryan Lucas. PromptQuorum hat die Software weder installiert noch getestet.',
    metaDescription: 'SpiritBox-Ultimate-Rezension: Early-Access-App für Windows und LM Studio mit Guides, gespeicherten Chats, Sprachausgabe. Braucht Docker; Grenzen genannt.',
    twitterDescription: 'SpiritBox-Ultimate-R6-Rezension: eine Windows-App im Early Access für LM-Studio-Nutzer mit Guides, gespeicherten Chats und gesprochenen Antworten. Benötigt Docker; Prüflücken benannt.',
    audience: 'Technisch versierte Windows-Nutzer, die bereits LM Studio verwenden und genau wissen möchten, was das Angebot SpiritBox Ultimate R6 umfasst, was es voraussetzt und was nicht überprüft wurde.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'SpiritBox Ultimate Rezension',
    targetKeywords: [
      'spiritbox ultimate test',
      'spiritbox ultimate lm studio',
      'spiritbox ultimate r6',
      'spiritbox early access windows',
      'lm studio gesprochene antworten',
      'lm studio docker oberfläche',
      'spiritbox vs lm studio',
    ],
    current_models_mentioned: [
      'GPT-OSS 20B',
      'Qwen',
    ],
    current_hardware_mentioned: [
      'Windows 10/11',
      'NVIDIA GPU (24 GB)',
      'Docker Desktop',
      'WSL2',
    ],
    leadAnswerBlock: '**SpiritBox Ultimate v1.12 R6 ist eine Windows-Anwendung im Early Access, die auf einem bereits laufenden LM-Studio-Modell Guide-basierte Unterhaltungen, gespeicherte Chats und gesprochene Antworten ergänzt.** Sie richtet sich an technisch versierte Windows-Nutzer, die mit Docker vertraut sind; laut den eigenen Release-Nachweisen des Entwicklers sind ein frischer Lauf mit einem echten Modell und eine Installation auf einem sauberen PC noch nicht überprüft.',
    quickAnswerTop: {
      de: {
        question: 'Ist SpiritBox Ultimate eine vollständige lokale KI-Workstation?',
        answer: 'Nein, nicht in Form des aktuellen Downloads. Das Angebot R6 beschränkt sich auf das zentrale Gesprächserlebnis auf Basis von LM Studio; die weitergehenden Workstation-Funktionen, die an anderer Stelle auf der Website des Entwicklers beschrieben werden, sind durch dessen Abnahmenachweise nicht abgedeckt.',
        bullets: [
          'Nur Windows 10 oder 11; macOS und Linux sind nicht qualifiziert.',
          'Der E-Mail-Support erfolgt im Early Access nach bestem Bemühen, ohne garantierte Antwortzeit.',
          'Die Checkliste beginnt mit dem dokumentierten Minimal-Profil, entpackt in einen neuen, leeren Ordner.',
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
        label: 'Was ist SpiritBox Ultimate?',
        anchor: 'what-is-spiritbox-ultimate',
      },
      {
        label: 'Bezugsquelle',
        anchor: 'get-it',
      },
      {
        label: 'Anforderungen und Einrichtung',
        anchor: 'requirements-setup',
      },
      {
        label: 'Was das R6-Paket enthält und was nicht',
        anchor: 'package-scope',
      },
      {
        label: 'Datenschutz und Datenfluss',
        anchor: 'privacy',
      },
      {
        label: 'Teststatus und Grenzen',
        anchor: 'testing-status',
      },
      {
        label: 'Vom Entwickler',
        anchor: 'from-the-maker',
      },
      {
        label: 'Für wen sich die App eignet',
        anchor: 'who-should-use',
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
            text: 'SpiritBox Ultimate ist eine eigenständige Windows-Anwendung im Early Access, die LM Studio ergänzt, statt es zu ersetzen.',
          },
          {
            type: 'plain-terms',
            text: 'Sie stellen Modell und LM-Studio-Server bereit; SpiritBox Ultimate liefert die Oberfläche und die Docker-basierte Einrichtung drumherum, und der Entwickler benennt offen, welche Teile noch nicht getestet sind.',
          },
        ],
        items: [
          'Preis und Lizenz: einmalig 199 $ USD über Gumroad; der Kauf berechtigt zur Nutzung der gelieferten Edition im Rahmen der mitgelieferten Lizenz.',
          'Voraussetzungen: Docker Desktop mit WSL2 und Linux-Containern sowie ein funktionierendes LM-Studio-Modell samt Server.',
          'Paket: die Anwendung, Windows-Einrichtungsskripte, Erststart-Hinweise für LM Studio und Hinweise zu Drittkomponenten.',
          'Entwickler: Ryan Lucas aus Alberta, Kanada, der die Version als Angebot für technisch versierte Windows-Nutzer beschreibt.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf die Seiten des Entwicklers zu Angebot, Käufer-Checkliste, Anforderungen, Release-Nachweisen, Datenschutz und Bedingungen, geprüft am 16. Oktober 2026, sowie auf einen Kommentar des Entwicklers. PromptQuorum hat SpiritBox Ultimate weder installiert noch getestet.',
          },
        ],
      },
      overview: {
        id: 'what-is-spiritbox-ultimate',
        title: 'Was ist SpiritBox Ultimate?',
        content: [
          '**SpiritBox Ultimate ist eine eigenständige Windows-Anwendung und kein Modell-Runner: Sie verbindet sich mit dem LM-Studio-Modell und -Server, den Sie bereits betreiben, und ergänzt Guide-basierte Unterhaltungen, gespeicherte Chats und gesprochene Antworten in einer Oberfläche.**',
          'Ein Guide ist in SpiritBox ein wiederverwendbarer Satz von Anweisungen für Unterhaltungen, wie zu Beginn der [Ultimate-Angebotsseite](https://spiritbox.ca/ultimate.html) des Entwicklers beschrieben; die [Editionsübersicht](https://spiritbox.ca/) nennt „custom Spirit Guides“ bei der kostenlosen Edition Basic. Dort steht außerdem, dass LM Studio bereits gespeicherte Chats und wiederverwendbare Prompt-Vorlagen bietet; der Entwickler versteht Ultimate daher als Möglichkeit, die drei Funktionen gemeinsam zu erproben.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**SpiritBox Ultimate R6 ist ein Windows-Download, der über Gumroad einmalig für 199 $ USD verkauft wird; die Website zeigt Preise nur in USD.**',
        ],
        columns: [
          'Angebot',
          'Bezugsquelle',
        ],
        rows: [
          {
            Angebot: 'Kauf',
            Bezugsquelle: '[Gumroad](https://spiritadmin5.gumroad.com/l/yseqxo), 199 $ USD',
          },
          {
            Angebot: 'Website',
            Bezugsquelle: '[Seite zu SpiritBox Ultimate](https://spiritbox.ca/ultimate.html)',
          },
          {
            Angebot: 'Käufer-Checkliste',
            Bezugsquelle: '[Checkliste für LM Studio](https://spiritbox.ca/lm-studio-ultimate-checklist.html)',
          },
          {
            Angebot: 'Release-Nachweise',
            Bezugsquelle: '[R6-Release-Nachweise](https://spiritbox.ca/release-status.html)',
          },
          {
            Angebot: 'Datenschutzerklärung',
            Bezugsquelle: '[Datenschutzseite von SpiritBox](https://spiritbox.ca/privacy.html)',
          },
          {
            Angebot: 'Kaufbedingungen',
            Bezugsquelle: '[Käuferrichtlinien](https://spiritbox.ca/buyer-policies.html)',
          },
          {
            Angebot: 'Weitere Editionen',
            Bezugsquelle: '[Editionsvergleich](https://spiritbox.ca/products.html)',
          },
        ],
        note: 'Version, geprüft am 16. Oktober 2026: SpiritBox Ultimate v1.12 R6 (Windows Early Access), laut der Release-Nachweis-Seite des Entwicklers. Die Einrichtung besteht darin, ein ZIP-Archiv zu entpacken und den mitgelieferten Skripten und Hinweisen zu folgen; die Quellen beschreiben keinen Installationsassistenten, und eine Entwickler-Umgebung (Docker Desktop, WSL2) ist erforderlich. Der E-Mail-Support erfolgt im Early Access nach bestem Bemühen, ohne garantierte Antwortzeit, Verfügbarkeit oder Installationserfolg.',
      },
      requirements: {
        id: 'requirements-setup',
        title: 'Anforderungen und Einrichtung',
        content: [
          '**R6 benötigt Windows 10 oder 11, Docker Desktop mit Compose, WSL2 und Linux-Container sowie ein bereits funktionierendes LM-Studio-Modell samt Server; macOS und Linux sind nicht qualifiziert.**',
          'Die Hardware ist nicht festgelegt. Die Version nennt kein allgemeines RAM- oder VRAM-Minimum; was passt, hängt vom Modell ab, das bereits in LM Studio läuft, und ein früherer Test nutzte eine NVIDIA-GPU mit 24 GB, was kein genanntes Minimum ist. Für Ultimate ist kein Port angegeben. Das Internet wird für erste Downloads und optionale Integrationen benötigt, doch für die lokale Kernnutzung ist kein SpiritBox-Cloud-Konto erforderlich.',
          'Die folgenden Schritte folgen der Checkliste des Entwicklers; PromptQuorum hat sie nicht ausgeführt.',
        ],
        numberedItems: [
          {
            title: 'Prüfen, ob das Modell im LM-Studio-Chat funktioniert',
            whyItMatters: 'Ein funktionierender Chat beweist nicht, dass SpiritBox den Server von LM Studio erreichen kann.',
          },
          {
            title: 'LM-Studio-Server starten und Angaben notieren',
            whyItMatters: 'Starten Sie ihn im Reiter „Developer“ und notieren Sie Modellkennung und Serveradresse; siehe die [Server-Dokumentation von LM Studio](https://lmstudio.ai/docs/developer/core/server).',
          },
          {
            title: 'Docker Desktop installieren oder prüfen',
            whyItMatters: 'Der dokumentierte Weg von R6 braucht WSL2 und Linux-Container; siehe die [Windows-Anleitung von Docker](https://docs.docker.com/desktop/setup/install/windows-install/).',
          },
          {
            title: 'Sichern, dann in einen neuen, leeren Ordner entpacken',
            whyItMatters: 'Die Release-Seite rät, vorhandene Sicherungen zu erhalten und weder Daten einer früheren Installation zu überschreiben noch deren Volumes zu löschen.',
          },
          {
            title: 'LMSTUDIO_FIRST.md mit dem Minimal-Profil befolgen',
            whyItMatters: 'Die Anleitung im Paket beschreibt die Schritte zum Verbinden der Anwendung.',
          },
        ],
      },
      scope: {
        id: 'package-scope',
        title: 'Was das R6-Paket enthält und was nicht',
        content: [
          '**Der R6-Download enthält die Anwendung, Windows-Einrichtungsskripte, Erststart-Hinweise für LM Studio und Hinweise zu Drittkomponenten.**',
        ],
        items: [
          '**Modelle.** Nicht enthalten; sie sind separate Downloads, passend zu Ihrer Hardware.',
          '**Workflow-Pakete.** Ein konfiguriertes, getestetes Paket für n8n, Telegram oder ComfyUI ist nicht enthalten, und die Kandidaten Proposal, Checklist, Repurpose und Telegram sind nicht Teil von R6.',
          '**Optionale Dienste.** Weitergehende Workflows erfordern eine eigene Einrichtung und Qualifizierung.',
          '**Zu vermeidende Beschreibungen.** Auf Wunsch des Entwicklers beschreibt diese Rezension den Download nicht als qualifizierte Multi-Service-KI-Workstation, als bewährtes GPU-Orchestrierungssystem oder als sofort einsatzbereites RAG- oder Automatisierungspaket; die R6-Abnahmenachweise stützen diese Beschreibungen nicht.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Die Datenschutzseite besagt, dass SpiritBox so ausgelegt ist, dass Kerninferenz, Unterhaltungen, Projektdateien und Datenbanken auf Systemen bleiben, die Sie kontrollieren, und dass die tatsächlichen Speicherorte vom finalen, qualifizierten Paket dokumentiert werden müssen.**',
          'Optionale Funktionen können Daten an Dritte senden, wenn sie konfiguriert oder genutzt werden: Die Seite nennt Modellbezug, Websuche, Telegram, Software-Updates, externe APIs, Checkout, E-Mail und Support-Werkzeuge. Die Erklärung ist als allgemein verständlicher Entwurf gekennzeichnet, behandelt keine Telemetrie und nennt keinen Verantwortlichen außer dem Seitenhinweis auf Ryan Lucas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Erklärungen des Entwicklers, keine Auditergebnisse. PromptQuorum hat den Netzwerkverkehr nicht untersucht; wer vertrauliche Daten verarbeitet, sollte mit ausgeschalteten optionalen Integrationen testen.',
          },
        ],
      },
      testing: {
        id: 'testing-status',
        title: 'Teststatus und Grenzen',
        content: [
          '**Der Entwickler gibt an, dass R6 weder einen frischen Lauf mit einem echten Modell noch einen separaten Installationstest auf einem sauberen PC durchlaufen hat; PromptQuorum hat die Software ebenfalls nicht getestet.**',
        ],
        items: [
          '**Geprüft.** Laut der Release-Nachweis-Seite wurden das R6-Archiv, seine Wiederholbarkeit und alle 519 Payload-Hashes kontrolliert, und ein frischer Gumroad-Download stimmte mit der veröffentlichten Prüfsumme überein.',
          '**In einem früheren privaten Build bestanden.** Ein LM-Studio-Chat mit GPT-OSS 20B und ein CPU-Sprachclip wurden abgeschlossen, einschließlich gespeicherter Antwort, Audiowiedergabe und erneutem Öffnen.',
          '**In diesem Build fehlgeschlagen.** Die zuerst gestreamte Antwort blieb hängen, und die alleinige Ursache dieses Vorfalls wurde nicht abschließend geklärt.',
          '**Nur offline behoben.** R6 enthält eine Streaming-Korrektur, die Offline-Parser- und Browser-Tests mit gespeichertem Text und Audio bestanden hat; einen neuen Lauf mit echtem Modell gab es dafür nicht.',
          '**Nicht qualifiziert.** Installation auf einem frischen PC, die mitgelieferte Standard-Qwen-Route, die Full-Workstation-Funktionen, reine CPU-, AMD- und Intel-GPU-Konfigurationen sowie weitere Hardware-Konfigurationen.',
          '**Nicht angegeben.** Die Quellen erwähnen weder Code-Signierung noch das Verhalten von SmartScreen, und die Angebotsseite enthält keinen Lizenztext.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die Checkliste des Entwicklers stellt klar, dass sie weder eine Installationszertifizierung noch ein Nachweis ist, dass Ihre Hardware- und Modellkonfiguration funktioniert.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'Vom Entwickler',
        content: [
          'Ryan Lucas, der Entwickler von SpiritBox, hat für diese Rezension den folgenden Kommentar beigesteuert. Er wird als Aussage des Entwicklers wiedergegeben, nicht als unabhängige redaktionelle Einschätzung von PromptQuorum:',
          '„Die Idee hinter SpiritBox Ultimate ist, Guide-basierte Unterhaltungen, gespeicherte Chats und gesprochene Antworten in einer Oberfläche für Menschen zusammenzubringen, die lokale KI betreiben. Die aktuelle Early-Access-Version richtet sich an Windows-Nutzer, die LM Studio bereits betreiben und mit Docker vertraut sind. Die oberste Priorität ist, dieses Kernerlebnis zuverlässig zu machen und klar zu dokumentieren, was überprüft wurde und was nicht.“',
        ],
        note: '— Ryan Lucas, Entwickler',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Windows-Nutzer, die bereits LM Studio betreiben und mit Docker vertraut sind.**',
          '**Käufer, die die gesamte Kombination testen möchten, bevor sie sich darauf verlassen.**',
          '**Mac- und Linux-Nutzer sowie alle, die einen fertigen Installer wollen, sollten die Alternativen unten prüfen.**',
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
          'Wesentlicher Unterschied',
        ],
        rows: [
          {
            App: '[FriedrichAI](/de/power-local-llm/friedrichai-review)',
            Plattformen: 'Windows',
            'Preis / Lizenz': '9,99 $ USD / proprietär',
            'Wesentlicher Unterschied': 'Offline-Assistent mit eigener Laufzeitumgebung, verkauft auf Steam',
          },
          {
            App: '[Jan](/de/power-local-llm/jan-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0 (Variante)',
            'Wesentlicher Unterschied': 'Quelloffener Desktop-Chat mit MCP und lokalem API-Server',
          },
          {
            App: '[GPT4All](/de/power-local-llm/gpt4all-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Quelloffene Desktop-App mit lokalem Dokumenten-Chat',
          },
          {
            App: '[LM Studio](/de/power-local-llm/lm-studio-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / proprietär',
            'Wesentlicher Unterschied': 'Der Modell-Runner und lokale Server, mit dem sich Ultimate verbindet',
          },
        ],
        note: 'Details zu Wettbewerbern ändern sich häufig; prüfen Sie aktuellen Preis, Lizenz und Plattformen jeder App in ihrem eigenen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Gibt es eine günstigere SpiritBox-Edition?',
            a: 'Ja. Der Entwickler verkauft außerdem Basic, das kostenlos ist, und Pro für 49 $ USD; Pro ergänzt gesprochene Antworten mit Piper und braucht zwei Docker-Dienste sowie LM Studio. Keine von beiden ist Gegenstand dieser Rezension.',
          },
          {
            q: 'Kann ich eine Rückerstattung erhalten?',
            a: 'Die Angebotsseite nennt keine eigene Rückerstattungsregel. Laut den Käuferrichtlinien laufen Erstattungsanfragen über die Gumroad-Bestellung und die beim Kauf angezeigten Bedingungen; lesen Sie diese vor der Zahlung.',
          },
          {
            q: 'Darf ich es kommerziell nutzen oder weiterverkaufen?',
            a: 'Die Käuferrichtlinien erlauben persönliche Anpassungen und Fehlersuche, doch kommerzielle Weitergabe, Weiterverkauf, White-Label-Einsatz oder die Darstellung von SpiritBox als eigenes Produkt erfordern eine gesonderte schriftliche Genehmigung.',
          },
          {
            q: 'Wie prüfe ich, ob mein Download unversehrt ist?',
            a: 'Vergleichen Sie vor dem Öffnen des Archivs die SHA-256-Prüfsumme von SpiritBox_Ultimate_v1.12_R6_Windows.zip (82.534.488 Byte) mit dem Wert auf der Release-Nachweis-Seite.',
          },
          {
            q: 'Ist diese Rezension gesponsert?',
            a: 'Der Entwickler bat ausschließlich um unbezahlte redaktionelle Aufnahme, und diese Seite enthält keinen Affiliate-Link.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'SpiritBox Ultimate R6 ist ein eng umrissenes, offen mit Einschränkungen versehenes Early-Access-Angebot für technisch versierte Windows-Nutzer mit bestehendem LM-Studio-Setup, die die Kombination selbst erproben möchten. Dem stehen die Voraussetzungen Docker und WSL2, die oben genannten offenen Prüfpunkte und das Fehlen eines praktischen Tests durch uns gegenüber. Wer nur gespeicherte Chats und Prompt-Vorlagen braucht, kann bei [LM Studio](/de/power-local-llm/lm-studio-review) bleiben, und wer einen fertig verpackten Offline-Assistenten sucht, kann [FriedrichAI](/de/power-local-llm/friedrichai-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[SpiritBox Ultimate – Angebot](https://spiritbox.ca/ultimate.html) — Umfang von R6, Preis, Inhalt und Testgrenzen, geprüft am 16. Oktober 2026.',
          '[Ultimate-Checkliste für LM Studio](https://spiritbox.ca/lm-studio-ultimate-checklist.html) — Schritte, Anforderungen und Prüfstatus, geprüft am 16. Oktober 2026.',
          '[R6-Release-Nachweise](https://spiritbox.ca/release-status.html) — Versionsbezeichnung, Archiv, Prüfsumme sowie bestandene, fehlgeschlagene und ungeprüfte Punkte, geprüft am 16. Oktober 2026.',
          '[Anforderungen](https://spiritbox.ca/requirements.html) — Hinweise zu Betriebssystem, Containern und Hardware je Edition, geprüft am 16. Oktober 2026.',
          '[Datenschutz](https://spiritbox.ca/privacy.html) und [Käuferrichtlinien](https://spiritbox.ca/buyer-policies.html) — Datenfluss, Rückerstattung, Lizenz und Support, geprüft am 16. Oktober 2026.',
          '[SpiritBox-Startseite](https://spiritbox.ca/) und [Über uns](https://spiritbox.ca/about.html) — Editionsübersicht, Hintergrund und Standort des Entwicklers, geprüft am 16. Oktober 2026.',
          '[SpiritBox Ultimate bei Gumroad](https://spiritadmin5.gumroad.com/l/yseqxo) — Kassenpreis in USD, geprüft am 16. Oktober 2026.',
          'Kommentar des Entwicklers — von Ryan Lucas im Oktober 2026 per E-Mail übermittelt.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[LM-Studio-Rezension](/de/power-local-llm/lm-studio-review) — der Modell-Runner und lokale Server, mit dem sich SpiritBox Ultimate verbindet.',
          '[Jan-Rezension](/de/power-local-llm/jan-review) — eine kostenlose, quelloffene Desktop-Chat-App.',
          '[GPT4All-Rezension](/de/power-local-llm/gpt4all-review) — eine MIT-lizenzierte Desktop-App mit Dokumenten-Chat.',
          '[FriedrichAI-Rezension](/de/power-local-llm/friedrichai-review) — ein einmalig gekaufter Offline-Assistent für Windows auf Steam.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/spiritbox-ultimate-review-hero-es.webp',
    title: 'Análisis de SpiritBox Ultimate: Early Access para Windows con LM Studio',
    seoTitle: 'Análisis de SpiritBox Ultimate: Early Access R6 en Windows',
    intro: 'SpiritBox Ultimate es una aplicación independiente para Windows pensada para quienes ya usan LM Studio y quieren evaluar juntos las conversaciones basadas en Guides, los chats guardados y las respuestas habladas. Este análisis se centra en la oferta actual, SpiritBox Ultimate v1.12 R6, un paquete en Early Access para Windows que requiere Docker Desktop y un servidor de LM Studio en funcionamiento. Se basa en la [página de la oferta Ultimate](https://spiritbox.ca/ultimate.html), la [lista de comprobación para compradores](https://spiritbox.ca/lm-studio-ultimate-checklist.html) y las [pruebas de la versión](https://spiritbox.ca/release-status.html) del desarrollador, consultadas el 16 de octubre de 2026, además de un comentario del desarrollador, Ryan Lucas. PromptQuorum no ha instalado ni probado el software.',
    metaDescription: 'Análisis de SpiritBox Ultimate: app en Early Access para Windows y LM Studio, con Guides, chats guardados y voz. Requiere Docker; límites de las pruebas.',
    twitterDescription: 'Análisis de SpiritBox Ultimate R6: app en Early Access para Windows y usuarios de LM Studio, con Guides, chats guardados y respuestas habladas. Requiere Docker; se detallan las carencias de verificación.',
    audience: 'Usuarios de Windows con conocimientos técnicos que ya usan LM Studio y quieren saber con precisión qué cubre la oferta SpiritBox Ultimate R6, qué exige y qué no se ha verificado.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análisis de SpiritBox Ultimate',
    targetKeywords: [
      'análisis spiritbox ultimate',
      'spiritbox ultimate lm studio',
      'spiritbox ultimate r6',
      'spiritbox early access windows',
      'lm studio respuestas habladas',
      'lm studio interfaz docker',
      'spiritbox vs lm studio',
    ],
    current_models_mentioned: [
      'GPT-OSS 20B',
      'Qwen',
    ],
    current_hardware_mentioned: [
      'Windows 10/11',
      'NVIDIA GPU (24 GB)',
      'Docker Desktop',
      'WSL2',
    ],
    leadAnswerBlock: '**SpiritBox Ultimate v1.12 R6 es una aplicación en Early Access para Windows que añade conversaciones basadas en Guides, chats guardados y respuestas habladas sobre un modelo de LM Studio que ya tienes en marcha.** Está dirigida a usuarios de Windows con conocimientos técnicos que se manejan con Docker, y las propias pruebas de la versión del desarrollador dejan sin verificar una ejecución nueva con un modelo real y una instalación en un PC limpio.',
    quickAnswerTop: {
      es: {
        question: '¿Es SpiritBox Ultimate una estación de trabajo de IA local completa?',
        answer: 'No, no en la descarga actual. La oferta R6 se limita a la experiencia de conversación básica sobre LM Studio, y las funciones de estación de trabajo más amplias que se describen en otras partes del sitio del desarrollador no están cubiertas por sus pruebas de aceptación.',
        bullets: [
          'Solo Windows 10 u 11; macOS y Linux no están cualificados.',
          'El soporte por correo es de mejor esfuerzo durante el Early Access, sin tiempo de respuesta garantizado.',
          'La lista de comprobación empieza con el perfil Minimal documentado, extraído en una carpeta nueva y vacía.',
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
        label: '¿Qué es SpiritBox Ultimate?',
        anchor: 'what-is-spiritbox-ultimate',
      },
      {
        label: 'Cómo obtenerla',
        anchor: 'get-it',
      },
      {
        label: 'Requisitos y puesta en marcha',
        anchor: 'requirements-setup',
      },
      {
        label: 'Qué incluye y qué excluye el paquete R6',
        anchor: 'package-scope',
      },
      {
        label: 'Privacidad y flujo de datos',
        anchor: 'privacy',
      },
      {
        label: 'Estado de las pruebas y límites',
        anchor: 'testing-status',
      },
      {
        label: 'La voz del creador',
        anchor: 'from-the-maker',
      },
      {
        label: 'Para quién es',
        anchor: 'who-should-use',
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
            text: 'SpiritBox Ultimate es una aplicación independiente para Windows, en Early Access, que se usa junto a LM Studio en lugar de sustituirlo.',
          },
          {
            type: 'plain-terms',
            text: 'Tú pones el modelo y el servidor de LM Studio; SpiritBox Ultimate aporta la interfaz y la configuración basada en Docker que los rodea, y su desarrollador dice con claridad qué partes aún no se han probado.',
          },
        ],
        items: [
          'Precio y licencia: $199 USD de pago único a través de Gumroad; la compra otorga el uso de la edición entregada bajo la licencia incluida.',
          'Requisitos previos: Docker Desktop con WSL2 y contenedores Linux, además de un modelo y un servidor de LM Studio que funcionen.',
          'Paquete: la aplicación, scripts de configuración para Windows, guía de primer arranque con LM Studio y avisos de terceros.',
          'Desarrollador: Ryan Lucas, de Alberta (Canadá), que describe la versión como dirigida a usuarios técnicos de Windows.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este análisis se basa en las páginas del desarrollador sobre la oferta, la lista de comprobación, los requisitos, las pruebas de la versión, la privacidad y las condiciones, consultadas el 16 de octubre de 2026, además de un comentario del desarrollador. PromptQuorum no ha instalado ni probado SpiritBox Ultimate.',
          },
        ],
      },
      overview: {
        id: 'what-is-spiritbox-ultimate',
        title: '¿Qué es SpiritBox Ultimate?',
        content: [
          '**SpiritBox Ultimate es una aplicación independiente para Windows, no un ejecutor de modelos: se conecta al modelo y al servidor de LM Studio que ya usas y añade conversaciones basadas en Guides, chats guardados y respuestas habladas en una sola interfaz.**',
          'En SpiritBox, un Guide es un conjunto reutilizable de instrucciones para conversaciones, tal como se describe al inicio de la [página de la oferta Ultimate](https://spiritbox.ca/ultimate.html) del desarrollador; la [descripción de ediciones](https://spiritbox.ca/) menciona "custom Spirit Guides" en la edición gratuita Basic. Esa página señala además que LM Studio ya ofrece chats guardados y preajustes de prompts reutilizables, por lo que el desarrollador plantea Ultimate como una forma de evaluar las tres funciones juntas.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerla',
        content: [
          '**SpiritBox Ultimate R6 es una descarga para Windows que se vende por única vez en $199 USD a través de Gumroad; el sitio muestra los precios solo en USD.**',
        ],
        columns: [
          'Elemento',
          'Dónde obtenerla',
        ],
        rows: [
          {
            Elemento: 'Compra',
            'Dónde obtenerla': '[Gumroad](https://spiritadmin5.gumroad.com/l/yseqxo), $199 USD',
          },
          {
            Elemento: 'Sitio web',
            'Dónde obtenerla': '[Página de SpiritBox Ultimate](https://spiritbox.ca/ultimate.html)',
          },
          {
            Elemento: 'Lista del comprador',
            'Dónde obtenerla': '[Lista de comprobación para LM Studio](https://spiritbox.ca/lm-studio-ultimate-checklist.html)',
          },
          {
            Elemento: 'Pruebas de la versión',
            'Dónde obtenerla': '[Pruebas de la versión R6](https://spiritbox.ca/release-status.html)',
          },
          {
            Elemento: 'Política de privacidad',
            'Dónde obtenerla': '[Página de privacidad de SpiritBox](https://spiritbox.ca/privacy.html)',
          },
          {
            Elemento: 'Condiciones de compra',
            'Dónde obtenerla': '[Políticas del comprador](https://spiritbox.ca/buyer-policies.html)',
          },
          {
            Elemento: 'Otras ediciones',
            'Dónde obtenerla': '[Comparación de ediciones](https://spiritbox.ca/products.html)',
          },
        ],
        note: 'Versión verificada el 16 de octubre de 2026: SpiritBox Ultimate v1.12 R6 (Early Access para Windows), según la página de pruebas de la versión del desarrollador. La instalación consiste en extraer un archivo zip y seguir los scripts y la guía incluidos; las fuentes no describen un asistente de instalación y se requiere un entorno de nivel desarrollador (Docker Desktop, WSL2). El soporte por correo es de mejor esfuerzo durante el Early Access, sin tiempo de respuesta, disponibilidad ni éxito de instalación garantizados.',
      },
      requirements: {
        id: 'requirements-setup',
        title: 'Requisitos y puesta en marcha',
        content: [
          '**R6 requiere Windows 10 u 11, Docker Desktop con Compose, WSL2 y contenedores Linux, y un modelo y un servidor de LM Studio que ya funcionen; macOS y Linux no están cualificados.**',
          'El hardware no está fijado. La versión no establece un mínimo general de RAM ni de VRAM; lo que sirve depende del modelo que ya funciona en LM Studio, y una prueba anterior usó una GPU NVIDIA de 24 GB, que no es un mínimo declarado. No se indica ningún puerto para Ultimate. Se necesita internet para las descargas iniciales y las integraciones opcionales, pero el uso local básico no requiere una cuenta en la nube de SpiritBox.',
          'Los pasos siguientes siguen la lista de comprobación del desarrollador; PromptQuorum no los ha ejecutado.',
        ],
        numberedItems: [
          {
            title: 'Comprueba que el modelo funciona en el chat de LM Studio',
            whyItMatters: 'Un chat que funciona no demuestra que SpiritBox pueda llegar al servidor de LM Studio.',
          },
          {
            title: 'Inicia el servidor de LM Studio y anota sus datos',
            whyItMatters: 'Inícialo desde la pestaña Developer y anota el identificador del modelo y la dirección del servidor; consulta la [documentación del servidor de LM Studio](https://lmstudio.ai/docs/developer/core/server).',
          },
          {
            title: 'Instala o revisa Docker Desktop',
            whyItMatters: 'La ruta documentada de R6 requiere WSL2 y contenedores Linux; consulta las [instrucciones de Docker para Windows](https://docs.docker.com/desktop/setup/install/windows-install/).',
          },
          {
            title: 'Haz una copia de seguridad y extrae en una carpeta nueva y vacía',
            whyItMatters: 'La página de la versión aconseja conservar las copias de seguridad existentes y no sobrescribir datos ni borrar volúmenes de una instalación anterior.',
          },
          {
            title: 'Sigue LMSTUDIO_FIRST.md con el perfil Minimal',
            whyItMatters: 'La propia guía del paquete cubre los pasos de conexión de la aplicación.',
          },
        ],
      },
      scope: {
        id: 'package-scope',
        title: 'Qué incluye y qué excluye el paquete R6',
        content: [
          '**La descarga R6 contiene la aplicación, scripts de configuración para Windows, guía de primer arranque con LM Studio y avisos de terceros.**',
        ],
        items: [
          '**Modelos.** No se incluyen; son descargas aparte, adecuadas a tu hardware.',
          '**Paquetes de flujos de trabajo.** No se incluye un paquete configurado y probado de n8n, Telegram o ComfyUI, y los candidatos Proposal, Checklist, Repurpose y Telegram no están en R6.',
          '**Servicios opcionales.** Los flujos de trabajo más amplios requieren una configuración y una cualificación aparte.',
          '**Descripciones que se evitan.** A petición del desarrollador, este análisis no describe la descarga como una estación de trabajo de IA multiservicio cualificada, un sistema de orquestación de GPU probado ni un paquete de RAG o automatización listo para usar; las pruebas de aceptación de R6 no respaldan esas descripciones.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**La página de privacidad dice que SpiritBox está diseñado para mantener la inferencia básica, las conversaciones, los archivos de proyecto y las bases de datos en sistemas que controlas, y que las ubicaciones reales de los datos deben documentarse en el paquete final cualificado.**',
          'Las funciones opcionales pueden enviar datos a terceros cuando se configuran o se usan: la página menciona la obtención de modelos, la búsqueda web, Telegram, las actualizaciones de software, las API externas, el pago, el correo electrónico y las herramientas de soporte. La política se presenta como un borrador en lenguaje sencillo, no trata la telemetría y no nombra a ningún responsable del tratamiento más allá del crédito del sitio a Ryan Lucas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del desarrollador, no resultados de una auditoría. PromptQuorum no ha inspeccionado el tráfico de red; quien maneje datos confidenciales debería probar con las integraciones opcionales desactivadas.',
          },
        ],
      },
      testing: {
        id: 'testing-status',
        title: 'Estado de las pruebas y límites',
        content: [
          '**El desarrollador afirma que R6 no ha tenido ni una ejecución nueva con un modelo real ni una prueba de instalación aparte en un PC limpio, y PromptQuorum tampoco lo ha probado.**',
        ],
        items: [
          '**Verificado.** Según la página de pruebas de la versión, se comprobaron el archivo R6, su repetibilidad y los 519 hashes de la carga, y una descarga nueva de Gumroad coincidió con la suma de verificación publicada.',
          '**Superado en una compilación privada anterior.** Se completaron un chat de LM Studio con GPT-OSS 20B y un clip de voz por CPU, incluidos la respuesta guardada, la reproducción del audio y la reapertura.',
          '**Fallido en esa compilación.** La primera respuesta en streaming se quedó bloqueada, y la causa única de ese incidente no se estableció de forma concluyente.',
          '**Corregido solo sin conexión.** R6 incluye una corrección del streaming que superó pruebas de analizador y de navegador sin conexión con texto y audio guardados; no ha tenido una ejecución nueva con un modelo real.',
          '**Sin cualificar.** Instalación en un PC nuevo, la ruta Qwen predeterminada incluida, las funciones de la estación de trabajo Full, configuraciones solo con CPU, con GPU AMD o Intel, y otras configuraciones de hardware.',
          '**No indicado.** Las fuentes no mencionan la firma de código ni el comportamiento de SmartScreen, y la página de la oferta no incluye el texto de la licencia.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La lista de comprobación del desarrollador indica que no es una certificación de instalación ni una prueba de que tu hardware y tu configuración de modelo vayan a funcionar.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'La voz del creador',
        content: [
          'Ryan Lucas, el desarrollador de SpiritBox, aportó el siguiente comentario para este análisis. Se presenta como palabras del propio desarrollador, no como valoración editorial independiente de PromptQuorum:',
          '"La idea de SpiritBox Ultimate es reunir en una sola interfaz las conversaciones basadas en Guides, los chats guardados y las respuestas habladas para quienes ejecutan IA local. La versión actual en Early Access está dirigida a usuarios de Windows que ya utilizan LM Studio y se sienten cómodos con Docker. La prioridad inmediata es lograr que esa experiencia básica sea fiable y documentar con claridad lo que se ha verificado y lo que no."',
        ],
        note: '— Ryan Lucas, desarrollador',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Usuarios de Windows que ya usan LM Studio y se manejan con Docker.**',
          '**Compradores que quieren probar toda la combinación antes de depender de ella.**',
          '**Quien use Mac o Linux, o quiera un instalador listo, debería mirar las alternativas de abajo.**',
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
            App: '[FriedrichAI](/es/power-local-llm/friedrichai-review)',
            Plataformas: 'Windows',
            'Precio / licencia': '$9.99 USD / propietaria',
            'Diferencia clave': 'Asistente offline con motor propio, a la venta en Steam',
          },
          {
            App: '[Jan](/es/power-local-llm/jan-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / Apache 2.0 (variante)',
            'Diferencia clave': 'Chat de escritorio de código abierto con MCP y servidor de API local',
          },
          {
            App: '[GPT4All](/es/power-local-llm/gpt4all-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'App de escritorio de código abierto con chat de documentos local',
          },
          {
            App: '[LM Studio](/es/power-local-llm/lm-studio-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / propietaria',
            'Diferencia clave': 'El ejecutor de modelos y servidor local al que se conecta Ultimate',
          },
        ],
        note: 'Los detalles de los competidores cambian a menudo; confirma el precio, la licencia y las plataformas actuales en la ficha de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Hay una edición de SpiritBox más barata?',
            a: 'Sí. El desarrollador también vende Basic, que es gratuita, y Pro por $49 USD; Pro añade respuestas habladas con Piper y necesita dos servicios de Docker además de LM Studio. Ninguna de las dos se trata en este análisis.',
          },
          {
            q: '¿Puedo pedir un reembolso?',
            a: 'La página de la oferta no indica una política de reembolso propia. Las políticas del comprador dicen que las solicitudes se tramitan a través del pedido de Gumroad y las condiciones que se muestran al comprar, así que léelas antes de pagar.',
          },
          {
            q: '¿Puedo usarlo comercialmente o revenderlo?',
            a: 'Las políticas del comprador permiten la modificación personal y la resolución de problemas, pero la redistribución comercial, la reventa, el despliegue de marca blanca o presentar SpiritBox como producto propio requieren un permiso escrito aparte.',
          },
          {
            q: '¿Cómo compruebo que mi descarga está íntegra?',
            a: 'Antes de abrir el archivo, compara la suma de verificación SHA-256 de SpiritBox_Ultimate_v1.12_R6_Windows.zip (82,534,488 bytes) con el valor de la página de pruebas de la versión.',
          },
          {
            q: '¿Es este análisis patrocinado?',
            a: 'El desarrollador pidió únicamente una inclusión editorial sin pago, y esta página no contiene ningún enlace de afiliado.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'SpiritBox Ultimate R6 es una oferta en Early Access de alcance acotado y con salvedades expuestas abiertamente, para usuarios técnicos de Windows con una configuración de LM Studio ya montada que quieren probar la combinación por sí mismos. Hay que sopesarlo frente a los requisitos de Docker y WSL2, los puntos de verificación abiertos señalados arriba y la ausencia de pruebas prácticas por nuestra parte. Quien solo necesite chats guardados y preajustes de prompts puede quedarse con [LM Studio](/es/power-local-llm/lm-studio-review), y quien busque un asistente offline ya empaquetado puede comparar [FriedrichAI](/es/power-local-llm/friedrichai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Oferta de SpiritBox Ultimate](https://spiritbox.ca/ultimate.html) — alcance de R6, precio, contenido y límites de las pruebas, consultada el 16 de octubre de 2026.',
          '[Lista de comprobación de Ultimate para LM Studio](https://spiritbox.ca/lm-studio-ultimate-checklist.html) — pasos, requisitos y estado de verificación, consultada el 16 de octubre de 2026.',
          '[Pruebas de la versión R6](https://spiritbox.ca/release-status.html) — etiqueta de versión, archivo, suma de verificación y puntos superados, fallidos y sin verificar, consultadas el 16 de octubre de 2026.',
          '[Requisitos](https://spiritbox.ca/requirements.html) — notas de sistema operativo, contenedores y hardware por edición, consultados el 16 de octubre de 2026.',
          '[Privacidad](https://spiritbox.ca/privacy.html) y [políticas del comprador](https://spiritbox.ca/buyer-policies.html) — flujo de datos, reembolso, licencia y soporte, consultadas el 16 de octubre de 2026.',
          '[Inicio de SpiritBox](https://spiritbox.ca/) y [Acerca de](https://spiritbox.ca/about.html) — descripción de ediciones, trayectoria y ubicación del desarrollador, consultadas el 16 de octubre de 2026.',
          '[SpiritBox Ultimate en Gumroad](https://spiritadmin5.gumroad.com/l/yseqxo) — precio de compra en USD, consultado el 16 de octubre de 2026.',
          'Comentario del creador — enviado por Ryan Lucas por correo electrónico en octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de LM Studio](/es/power-local-llm/lm-studio-review) — el ejecutor de modelos y servidor local al que se conecta SpiritBox Ultimate.',
          '[Análisis de Jan](/es/power-local-llm/jan-review) — una app de chat de escritorio gratuita y de código abierto.',
          '[Análisis de GPT4All](/es/power-local-llm/gpt4all-review) — una app de escritorio con licencia MIT y chat de documentos.',
          '[Análisis de FriedrichAI](/es/power-local-llm/friedrichai-review) — un asistente offline para Windows que se compra una vez en Steam.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/spiritbox-ultimate-review-hero-fr.webp',
    title: 'Avis SpiritBox Ultimate : accès anticipé sous Windows pour les utilisateurs de LM Studio',
    seoTitle: 'Avis SpiritBox Ultimate : accès anticipé R6 (Windows)',
    intro: 'SpiritBox Ultimate est une application Windows distincte, destinée aux personnes qui utilisent déjà LM Studio et souhaitent évaluer ensemble les conversations fondées sur des Guides, les discussions enregistrées et les réponses parlées. Cet avis porte sur l\'offre actuelle, SpiritBox Ultimate v1.12 R6, un paquet Windows en accès anticipé (Early Access) qui exige Docker Desktop et un serveur LM Studio opérationnel. Il s\'appuie sur la [page de l\'offre Ultimate](https://spiritbox.ca/ultimate.html), la [liste de contrôle pour acheteurs](https://spiritbox.ca/lm-studio-ultimate-checklist.html) et les [preuves de version](https://spiritbox.ca/release-status.html) du développeur, consultées le 16 octobre 2026, ainsi que sur un commentaire du développeur, Ryan Lucas. PromptQuorum n\'a ni installé ni testé le logiciel.',
    metaDescription: 'Avis SpiritBox Ultimate : appli Windows en Early Access pour LM Studio, avec Guides, discussions enregistrées et voix. Exige Docker ; limites des tests.',
    twitterDescription: 'Avis SpiritBox Ultimate R6 : application Windows en Early Access pour utilisateurs de LM Studio, avec Guides, discussions enregistrées et réponses parlées. Exige Docker ; lacunes de vérification listées.',
    audience: 'Utilisateurs Windows avertis qui exécutent déjà LM Studio et veulent savoir précisément ce que couvre l\'offre SpiritBox Ultimate R6, ce qu\'elle exige et ce qui n\'a pas été vérifié.',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'avis SpiritBox Ultimate',
    targetKeywords: [
      'avis spiritbox ultimate',
      'spiritbox ultimate lm studio',
      'spiritbox ultimate r6',
      'spiritbox early access windows',
      'lm studio réponses parlées',
      'lm studio interface docker',
      'spiritbox vs lm studio',
    ],
    current_models_mentioned: [
      'GPT-OSS 20B',
      'Qwen',
    ],
    current_hardware_mentioned: [
      'Windows 10/11',
      'NVIDIA GPU (24 GB)',
      'Docker Desktop',
      'WSL2',
    ],
    leadAnswerBlock: '**SpiritBox Ultimate v1.12 R6 est une application Windows en accès anticipé qui ajoute des conversations fondées sur des Guides, des discussions enregistrées et des réponses parlées à un modèle LM Studio que vous exécutez déjà.** Elle s\'adresse aux utilisateurs Windows avertis à l\'aise avec Docker, et les preuves de version du développeur laissent non vérifiés un nouveau test avec un modèle réel et une installation sur un PC vierge.',
    quickAnswerTop: {
      fr: {
        question: 'SpiritBox Ultimate est-il une station de travail IA locale complète ?',
        answer: 'Non, pas dans le téléchargement actuel. L\'offre R6 se limite à l\'expérience de conversation de base au-dessus de LM Studio, et les fonctions de station de travail plus larges décrites ailleurs sur le site du développeur ne sont pas couvertes par ses preuves d\'acceptation.',
        bullets: [
          'Windows 10 ou 11 uniquement ; macOS et Linux ne sont pas qualifiés.',
          'Le support par e-mail est assuré au mieux pendant l\'accès anticipé, sans délai de réponse garanti.',
          'La liste de contrôle commence par le profil Minimal documenté, extrait dans un dossier neuf et vide.',
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
        label: 'Qu\'est-ce que SpiritBox Ultimate ?',
        anchor: 'what-is-spiritbox-ultimate',
      },
      {
        label: 'Où l\'obtenir',
        anchor: 'get-it',
      },
      {
        label: 'Configuration requise et mise en place',
        anchor: 'requirements-setup',
      },
      {
        label: 'Ce que le paquet R6 inclut et exclut',
        anchor: 'package-scope',
      },
      {
        label: 'Confidentialité et flux de données',
        anchor: 'privacy',
      },
      {
        label: 'État des tests et limites',
        anchor: 'testing-status',
      },
      {
        label: 'Le mot du développeur',
        anchor: 'from-the-maker',
      },
      {
        label: 'À qui il convient',
        anchor: 'who-should-use',
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
        label: 'Lectures complémentaires',
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
            text: 'SpiritBox Ultimate est une application Windows distincte, en accès anticipé, qui s\'utilise aux côtés de LM Studio sans le remplacer.',
          },
          {
            type: 'plain-terms',
            text: 'Vous fournissez le modèle et le serveur LM Studio ; SpiritBox Ultimate apporte l\'interface et la mise en place fondée sur Docker autour d\'eux, et son développeur indique clairement quelles parties n\'ont pas encore été testées.',
          },
        ],
        items: [
          'Prix et licence : $199 USD en achat unique via Gumroad ; l\'achat donne le droit d\'utiliser l\'édition livrée selon la licence incluse.',
          'Prérequis : Docker Desktop avec WSL2 et conteneurs Linux, plus un modèle et un serveur LM Studio fonctionnels.',
          'Contenu du paquet : l\'application, des scripts d\'installation Windows, un guide de premier lancement pour LM Studio et les mentions relatives aux composants tiers.',
          'Développeur : Ryan Lucas, de l\'Alberta (Canada), qui présente cette version comme destinée aux utilisateurs Windows avertis.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cet avis se fonde sur les pages du développeur consacrées à l\'offre, à la liste de contrôle, à la configuration requise, aux preuves de version, à la confidentialité et aux conditions, consultées le 16 octobre 2026, ainsi que sur un commentaire du développeur. PromptQuorum n\'a ni installé ni testé SpiritBox Ultimate.',
          },
        ],
      },
      overview: {
        id: 'what-is-spiritbox-ultimate',
        title: 'Qu\'est-ce que SpiritBox Ultimate ?',
        content: [
          '**SpiritBox Ultimate est une application Windows distincte, et non un exécuteur de modèles : elle se connecte au modèle et au serveur LM Studio que vous utilisez déjà et ajoute des conversations fondées sur des Guides, des discussions enregistrées et des réponses parlées dans une seule interface.**',
          'Dans SpiritBox, un Guide est un ensemble réutilisable d\'instructions de conversation, comme le décrit le début de la [page de l\'offre Ultimate](https://spiritbox.ca/ultimate.html) du développeur ; l\'[aperçu des éditions](https://spiritbox.ca/) mentionne des « custom Spirit Guides » dans l\'édition gratuite Basic. Cette page rappelle aussi que LM Studio propose déjà des discussions enregistrées et des préréglages de prompts réutilisables ; le développeur présente donc Ultimate comme un moyen d\'évaluer ces trois fonctions ensemble.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l\'obtenir',
        content: [
          '**SpiritBox Ultimate R6 est un téléchargement Windows vendu en une seule fois pour $199 USD via Gumroad ; le site n\'affiche les prix qu\'en USD.**',
        ],
        columns: [
          'Élément',
          'Où l\'obtenir',
        ],
        rows: [
          {
            'Élément': 'Achat',
            'Où l\'obtenir': '[Gumroad](https://spiritadmin5.gumroad.com/l/yseqxo), $199 USD',
          },
          {
            'Élément': 'Site web',
            'Où l\'obtenir': '[Page de SpiritBox Ultimate](https://spiritbox.ca/ultimate.html)',
          },
          {
            'Élément': 'Liste de l\'acheteur',
            'Où l\'obtenir': '[Liste de contrôle pour LM Studio](https://spiritbox.ca/lm-studio-ultimate-checklist.html)',
          },
          {
            'Élément': 'Preuves de version',
            'Où l\'obtenir': '[Preuves de la version R6](https://spiritbox.ca/release-status.html)',
          },
          {
            'Élément': 'Politique de confidentialité',
            'Où l\'obtenir': '[Page de confidentialité de SpiritBox](https://spiritbox.ca/privacy.html)',
          },
          {
            'Élément': 'Conditions d\'achat',
            'Où l\'obtenir': '[Politiques acheteur](https://spiritbox.ca/buyer-policies.html)',
          },
          {
            'Élément': 'Autres éditions',
            'Où l\'obtenir': '[Comparatif des éditions](https://spiritbox.ca/products.html)',
          },
        ],
        note: 'Version vérifiée le 16 octobre 2026 : SpiritBox Ultimate v1.12 R6 (accès anticipé Windows), d\'après la page de preuves de version du développeur. La mise en place consiste à extraire une archive zip et à suivre les scripts et le guide inclus ; les sources ne décrivent aucun assistant d\'installation, et un environnement de niveau développeur (Docker Desktop, WSL2) est requis. Le support par e-mail est assuré au mieux pendant l\'accès anticipé, sans délai de réponse, disponibilité ni réussite d\'installation garantis.',
      },
      requirements: {
        id: 'requirements-setup',
        title: 'Configuration requise et mise en place',
        content: [
          '**R6 exige Windows 10 ou 11, Docker Desktop avec Compose, WSL2 et des conteneurs Linux, ainsi qu\'un modèle et un serveur LM Studio déjà fonctionnels ; macOS et Linux ne sont pas qualifiés.**',
          'Le matériel n\'est pas fixé. La version n\'établit pas de minimum général de RAM ou de VRAM ; ce qui convient dépend du modèle qui tourne déjà dans LM Studio, et un test antérieur a utilisé un GPU NVIDIA de 24 Go, ce qui n\'est pas un minimum déclaré. Aucun port n\'est indiqué pour Ultimate. Internet est nécessaire pour les premiers téléchargements et les intégrations facultatives, mais l\'usage local de base ne demande aucun compte cloud SpiritBox.',
          'Les étapes ci-dessous suivent la liste de contrôle du développeur ; PromptQuorum ne les a pas exécutées.',
        ],
        numberedItems: [
          {
            title: 'Vérifiez que le modèle fonctionne dans le chat de LM Studio',
            whyItMatters: 'Un chat qui fonctionne ne prouve pas que SpiritBox peut joindre le serveur de LM Studio.',
          },
          {
            title: 'Démarrez le serveur LM Studio et notez ses paramètres',
            whyItMatters: 'Lancez-le depuis l\'onglet Developer, puis notez l\'identifiant du modèle et l\'adresse du serveur ; voir la [documentation du serveur LM Studio](https://lmstudio.ai/docs/developer/core/server).',
          },
          {
            title: 'Installez ou vérifiez Docker Desktop',
            whyItMatters: 'La voie documentée de R6 exige WSL2 et des conteneurs Linux ; voir les [instructions Docker pour Windows](https://docs.docker.com/desktop/setup/install/windows-install/).',
          },
          {
            title: 'Sauvegardez, puis extrayez dans un dossier neuf et vide',
            whyItMatters: 'La page de la version conseille de conserver les sauvegardes existantes et de ne pas écraser les données ni supprimer les volumes d\'une installation précédente.',
          },
          {
            title: 'Suivez LMSTUDIO_FIRST.md avec le profil Minimal',
            whyItMatters: 'Le guide du paquet décrit les étapes de connexion de l\'application.',
          },
        ],
      },
      scope: {
        id: 'package-scope',
        title: 'Ce que le paquet R6 inclut et exclut',
        content: [
          '**Le téléchargement R6 contient l\'application, des scripts d\'installation Windows, un guide de premier lancement pour LM Studio et les mentions relatives aux composants tiers.**',
        ],
        items: [
          '**Modèles.** Non inclus ; ce sont des téléchargements séparés, adaptés à votre matériel.',
          '**Paquets de workflows.** Aucun paquet n8n, Telegram ou ComfyUI configuré et testé n\'est inclus, et les candidats Proposal, Checklist, Repurpose et Telegram ne font pas partie de R6.',
          '**Services facultatifs.** Les workflows plus larges demandent une mise en place et une qualification distinctes.',
          '**Descriptions à éviter.** À la demande du développeur, cet avis ne présente pas le téléchargement comme une station de travail IA multiservice qualifiée, un système d\'orchestration de GPU éprouvé ou un ensemble RAG ou d\'automatisation prêt à l\'emploi ; les preuves d\'acceptation de R6 ne soutiennent pas ces descriptions.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**La page de confidentialité indique que SpiritBox est conçu pour garder l\'inférence de base, les conversations, les fichiers de projet et les bases de données sur des systèmes que vous contrôlez, et que les emplacements réels des données doivent être documentés par le paquet final qualifié.**',
          'Des fonctions facultatives peuvent envoyer des données à des tiers lorsqu\'elles sont configurées ou utilisées : la page cite l\'obtention de modèles, la recherche web, Telegram, les mises à jour logicielles, les API externes, le paiement, l\'e-mail et les outils de support. La politique est présentée comme un brouillon en langage clair, ne traite pas de la télémétrie et ne désigne aucun responsable de traitement en dehors de la mention de Ryan Lucas sur le site.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations du développeur, non des résultats d\'audit. PromptQuorum n\'a pas inspecté le trafic réseau ; quiconque traite des données confidentielles devrait tester avec les intégrations facultatives désactivées.',
          },
        ],
      },
      testing: {
        id: 'testing-status',
        title: 'État des tests et limites',
        content: [
          '**Le développeur indique que R6 n\'a bénéficié ni d\'un nouveau test avec un modèle réel ni d\'un test d\'installation distinct sur un PC vierge ; PromptQuorum ne l\'a pas testé non plus.**',
        ],
        items: [
          '**Vérifié.** Selon la page de preuves de version, l\'archive R6, sa répétabilité et les 519 empreintes de la charge utile ont été contrôlées, et un téléchargement Gumroad récent correspondait à la somme de contrôle publiée.',
          '**Réussi dans une version privée antérieure.** Un chat LM Studio avec GPT-OSS 20B et un extrait vocal sur CPU ont abouti, y compris la réponse enregistrée, la lecture audio et la réouverture.',
          '**Échoué dans cette version.** La réponse initiale en streaming est restée bloquée, et la seule cause de cet incident n\'a pas été établie de façon concluante.',
          '**Corrigé hors ligne uniquement.** R6 inclut un correctif de streaming qui a passé des tests hors ligne d\'analyseur et de navigateur avec du texte et de l\'audio enregistrés ; il n\'a pas fait l\'objet d\'un nouveau test avec un modèle réel.',
          '**Non qualifié.** Installation sur un PC vierge, voie Qwen par défaut incluse, fonctions de la station de travail Full, configurations CPU seul, GPU AMD et Intel, et autres configurations matérielles.',
          '**Non précisé.** Les sources ne mentionnent ni la signature de code ni le comportement de SmartScreen, et la page de l\'offre ne reproduit aucun texte de licence.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La liste de contrôle du développeur précise qu\'elle n\'est ni une certification d\'installation ni la preuve que votre matériel et votre configuration de modèle fonctionneront.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'Le mot du développeur',
        content: [
          'Ryan Lucas, le développeur de SpiritBox, a fourni le commentaire suivant pour cet avis. Il est présenté comme les propres mots du développeur, et non comme une appréciation éditoriale indépendante de PromptQuorum :',
          '« L\'idée de SpiritBox Ultimate est de réunir dans une seule interface les conversations fondées sur des Guides, les discussions enregistrées et les réponses parlées pour les personnes qui font tourner une IA locale. La version actuelle en accès anticipé s\'adresse aux utilisateurs Windows qui utilisent déjà LM Studio et sont à l\'aise avec Docker. La priorité immédiate est de rendre cette expérience de base fiable et de documenter clairement ce qui a été vérifié et ce qui ne l\'a pas été. »',
        ],
        note: '— Ryan Lucas, développeur',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il convient',
        items: [
          '**Utilisateurs Windows qui utilisent déjà LM Studio et sont à l\'aise avec Docker.**',
          '**Acheteurs qui veulent tester l\'ensemble de la combinaison avant de s\'y fier.**',
          '**Les utilisateurs de Mac ou de Linux, ou ceux qui veulent un installateur clé en main, devraient voir les alternatives ci-dessous.**',
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
            Application: '[FriedrichAI](/fr/power-local-llm/friedrichai-review)',
            Plateformes: 'Windows',
            'Prix / licence': '$9.99 USD / propriétaire',
            'Différence clé': 'Assistant hors ligne avec son propre moteur, vendu sur Steam',
          },
          {
            Application: '[Jan](/fr/power-local-llm/jan-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuite / Apache 2.0 (variante)',
            'Différence clé': 'Chat de bureau open source avec MCP et serveur API local',
          },
          {
            Application: '[GPT4All](/fr/power-local-llm/gpt4all-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuite / MIT',
            'Différence clé': 'Application de bureau open source avec chat de documents local',
          },
          {
            Application: '[LM Studio](/fr/power-local-llm/lm-studio-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuite / propriétaire',
            'Différence clé': 'L\'exécuteur de modèles et serveur local auquel Ultimate se connecte',
          },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels sur la fiche de chaque application.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Existe-t-il une édition SpiritBox moins chère ?',
            a: 'Oui. Le développeur vend aussi Basic, qui est gratuite, et Pro à $49 USD ; Pro ajoute des réponses parlées avec Piper et nécessite deux services Docker ainsi que LM Studio. Aucune des deux n\'est couverte par cet avis.',
          },
          {
            q: 'Puis-je obtenir un remboursement ?',
            a: 'La page de l\'offre n\'indique pas de politique de remboursement propre. Les politiques acheteur précisent que les demandes passent par la commande Gumroad et les conditions affichées à l\'achat ; lisez-les avant de payer.',
          },
          {
            q: 'Puis-je l\'utiliser à des fins commerciales ou le revendre ?',
            a: 'Les politiques acheteur autorisent la modification personnelle et le dépannage, mais la redistribution commerciale, la revente, le déploiement en marque blanche ou la présentation de SpiritBox comme votre propre produit exigent une autorisation écrite distincte.',
          },
          {
            q: 'Comment vérifier que mon téléchargement est intact ?',
            a: 'Avant d\'ouvrir l\'archive, comparez la somme de contrôle SHA-256 de SpiritBox_Ultimate_v1.12_R6_Windows.zip (82 534 488 octets) avec la valeur indiquée sur la page de preuves de version.',
          },
          {
            q: 'Cet avis est-il sponsorisé ?',
            a: 'Le développeur a demandé uniquement une inclusion éditoriale non rémunérée, et cette page ne contient aucun lien d\'affiliation.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'SpiritBox Ultimate R6 est une offre en accès anticipé au périmètre étroit et aux réserves exposées ouvertement, pour les utilisateurs Windows avertis disposant déjà d\'une installation LM Studio et souhaitant essayer eux-mêmes la combinaison. À mettre en balance avec les prérequis Docker et WSL2, les points de vérification ouverts listés plus haut et l\'absence de test pratique de notre part. Ceux qui n\'ont besoin que de discussions enregistrées et de préréglages de prompts peuvent s\'en tenir à [LM Studio](/fr/power-local-llm/lm-studio-review), et ceux qui cherchent un assistant hors ligne tout emballé peuvent comparer [FriedrichAI](/fr/power-local-llm/friedrichai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Offre SpiritBox Ultimate](https://spiritbox.ca/ultimate.html) — périmètre de R6, prix, contenu et limites des tests, consultée le 16 octobre 2026.',
          '[Liste de contrôle Ultimate pour LM Studio](https://spiritbox.ca/lm-studio-ultimate-checklist.html) — étapes, prérequis et état de vérification, consultée le 16 octobre 2026.',
          '[Preuves de la version R6](https://spiritbox.ca/release-status.html) — étiquette de version, archive, somme de contrôle, et points réussis, échoués et non vérifiés, consultées le 16 octobre 2026.',
          '[Configuration requise](https://spiritbox.ca/requirements.html) — notes sur le système, les conteneurs et le matériel par édition, consultées le 16 octobre 2026.',
          '[Confidentialité](https://spiritbox.ca/privacy.html) et [politiques acheteur](https://spiritbox.ca/buyer-policies.html) — flux de données, remboursement, licence et support, consultées le 16 octobre 2026.',
          '[Accueil SpiritBox](https://spiritbox.ca/) et [À propos](https://spiritbox.ca/about.html) — aperçu des éditions, parcours et localisation du développeur, consultés le 16 octobre 2026.',
          '[SpiritBox Ultimate sur Gumroad](https://spiritadmin5.gumroad.com/l/yseqxo) — prix de paiement en USD, consulté le 16 octobre 2026.',
          'Commentaire du développeur — transmis par Ryan Lucas par e-mail en octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis LM Studio](/fr/power-local-llm/lm-studio-review) — l\'exécuteur de modèles et serveur local auquel SpiritBox Ultimate se connecte.',
          '[Avis Jan](/fr/power-local-llm/jan-review) — une application de chat de bureau gratuite et open source.',
          '[Avis GPT4All](/fr/power-local-llm/gpt4all-review) — une application de bureau sous licence MIT avec chat de documents.',
          '[Avis FriedrichAI](/fr/power-local-llm/friedrichai-review) — un assistant Windows hors ligne acheté une fois sur Steam.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/spiritbox-ultimate-review-hero-ja.webp',
    title: 'SpiritBox Ultimateレビュー：LM Studioユーザー向けWindows先行アクセス版',
    seoTitle: 'SpiritBox Ultimateレビュー：Windows先行アクセスR6',
    intro: 'SpiritBox Ultimateは、すでにLM Studioを使っていて、Guideを軸にした会話、保存したチャット、音声での返答をまとめて試したい人向けの、独立したWindowsアプリです。本レビューは現在のオファーであるSpiritBox Ultimate v1.12 R6（Docker Desktopと動作するLM Studioサーバーが必要な、Windows向けの先行アクセス（Early Access）パッケージ）に絞っています。開発者の[Ultimateオファーページ](https://spiritbox.ca/ultimate.html)、[購入者向けチェックリスト](https://spiritbox.ca/lm-studio-ultimate-checklist.html)、[リリース証跡](https://spiritbox.ca/release-status.html)（2026年10月16日確認）と、開発者のRyan Lucas氏からのコメントに基づいています。PromptQuorumはこのソフトウェアをインストールも検証もしていません。',
    metaDescription: 'SpiritBox Ultimateレビュー：LM Studioユーザー向けWindows先行アクセスアプリ。Guide会話、保存チャット、音声返答に対応し、Docker必須。検証の限界も解説します。',
    twitterDescription: 'SpiritBox Ultimate R6レビュー：LM Studioユーザー向けのWindows先行アクセスアプリ。Guide会話、保存チャット、音声返答を提供。Docker必須で、未検証の点も明記。',
    audience: 'すでにLM Studioを使っているWindows上級者で、SpiritBox Ultimate R6が何をカバーし、何を必要とし、何が未検証なのかを正確に知りたい人。',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'SpiritBox Ultimate レビュー',
    targetKeywords: [
      'spiritbox ultimate レビュー',
      'spiritbox ultimate lm studio',
      'spiritbox ultimate r6',
      'spiritbox 先行アクセス windows',
      'lm studio 音声返答',
      'lm studio docker インターフェース',
      'spiritbox vs lm studio',
    ],
    current_models_mentioned: [
      'GPT-OSS 20B',
      'Qwen',
    ],
    current_hardware_mentioned: [
      'Windows 10/11',
      'NVIDIA GPU (24 GB)',
      'Docker Desktop',
      'WSL2',
    ],
    leadAnswerBlock: '**SpiritBox Ultimate v1.12 R6は、すでに動かしているLM Studioのモデルの上に、Guideを軸にした会話、保存したチャット、音声での返答を加える、Windows向けの先行アクセスアプリです。** Dockerに慣れた技術志向のWindowsユーザーが対象で、開発者自身のリリース証跡でも、実モデルでの新規実行とクリーンなPCへのインストールは未検証とされています。',
    quickAnswerTop: {
      ja: {
        question: 'SpiritBox Ultimateは完成したローカルAIワークステーションですか？',
        answer: 'いいえ、現在のダウンロードはそうではありません。R6のオファーはLM Studioの上に載る中核の会話体験に限定されており、開発者サイトの他の箇所で説明されているより広いワークステーション機能は、受け入れ証跡の対象外です。',
        bullets: [
          'Windows 10または11のみ対応で、macOSとLinuxは検証対象外です。',
          '先行アクセス期間中のメールサポートはベストエフォートで、返信時間の保証はありません。',
          'チェックリストは、文書化されたMinimalプロファイルを新しい空のフォルダーに展開するところから始まります。',
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
        label: 'SpiritBox Ultimateとは?',
        anchor: 'what-is-spiritbox-ultimate',
      },
      {
        label: '入手方法',
        anchor: 'get-it',
      },
      {
        label: '要件とセットアップ',
        anchor: 'requirements-setup',
      },
      {
        label: 'R6パッケージに含まれるもの・含まれないもの',
        anchor: 'package-scope',
      },
      {
        label: 'プライバシーとデータの流れ',
        anchor: 'privacy',
      },
      {
        label: 'テストの状況と限界',
        anchor: 'testing-status',
      },
      {
        label: '開発者から',
        anchor: 'from-the-maker',
      },
      {
        label: '向いている人',
        anchor: 'who-should-use',
      },
      {
        label: '競合と代替アプリ',
        anchor: 'vs-alternatives',
      },
      {
        label: 'よくある質問',
        anchor: 'faq',
      },
      {
        label: '結論',
        anchor: 'verdict',
      },
      {
        label: '出典',
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
            text: 'SpiritBox Ultimateは、LM Studioを置き換えるのではなく併用する、先行アクセス段階の独立したWindowsアプリです。',
          },
          {
            type: 'plain-terms',
            text: 'モデルとLM Studioサーバーは自分で用意し、SpiritBox Ultimateはその周りのインターフェースとDockerベースのセットアップを担当します。開発者は、まだテストされていない部分を率直に示しています。',
          },
        ],
        items: [
          '価格とライセンス：Gumroadで一度きりの$199 USD。購入すると、同梱のライセンスに基づいて提供された版を利用できます。',
          '前提条件：WSL2とLinuxコンテナを備えたDocker Desktopと、動作するLM Studioのモデルおよびサーバー。',
          'パッケージ：アプリ本体、Windows用セットアップスクリプト、LM Studioの初回起動ガイド、サードパーティの通知。',
          '開発者：カナダ・アルバータ州のRyan Lucas氏。技術志向のWindowsユーザー向けのリリースだと説明しています。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、開発者のオファー、購入者向けチェックリスト、要件、リリース証跡、プライバシー、ポリシーの各ページ（2026年10月16日確認）と、開発者のコメントに基づいています。PromptQuorumはSpiritBox Ultimateをインストールも検証もしていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-spiritbox-ultimate',
        title: 'SpiritBox Ultimateとは?',
        content: [
          '**SpiritBox Ultimateは独立したWindowsアプリで、モデルの実行環境ではありません。すでに運用しているLM Studioのモデルとサーバーに接続し、Guideを軸にした会話、保存したチャット、音声での返答をひとつの画面で提供します。**',
          'SpiritBoxでGuideとは、再利用できる会話用の指示のまとまりのことで、開発者の[Ultimateオファーページ](https://spiritbox.ca/ultimate.html)の冒頭でもそう説明されています。[エディションの概要](https://spiritbox.ca/)では無料のBasicエディションに「custom Spirit Guides」と記載されています。同ページは、LM Studioにも保存チャットと再利用できるプロンプトプリセットがすでにあると述べており、開発者はUltimateを、この3つの機能をまとめて評価する手段と位置づけています。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**SpiritBox Ultimate R6は、Gumroadで$199 USDの買い切りで販売されるWindows向けダウンロードです。サイトの価格表示はUSDのみです。**',
        ],
        columns: [
          '項目',
          '入手先',
        ],
        rows: [
          {
            '項目': '購入',
            '入手先': '[Gumroad](https://spiritadmin5.gumroad.com/l/yseqxo)、$199 USD',
          },
          {
            '項目': 'ウェブサイト',
            '入手先': '[SpiritBox Ultimateのページ](https://spiritbox.ca/ultimate.html)',
          },
          {
            '項目': '購入者向けチェックリスト',
            '入手先': '[LM Studio向けセットアップチェックリスト](https://spiritbox.ca/lm-studio-ultimate-checklist.html)',
          },
          {
            '項目': 'リリース証跡',
            '入手先': '[R6のリリース証跡](https://spiritbox.ca/release-status.html)',
          },
          {
            '項目': 'プライバシーポリシー',
            '入手先': '[SpiritBoxのプライバシーページ](https://spiritbox.ca/privacy.html)',
          },
          {
            '項目': '購入条件',
            '入手先': '[購入者向けポリシー](https://spiritbox.ca/buyer-policies.html)',
          },
          {
            '項目': '他のエディション',
            '入手先': '[エディション比較](https://spiritbox.ca/products.html)',
          },
        ],
        note: '2026年10月16日に確認したバージョン：SpiritBox Ultimate v1.12 R6（Windows先行アクセス）。開発者のリリース証跡ページによります。セットアップはzipアーカイブを展開し、同梱のスクリプトとガイドに従う方式で、情報源にインストーラーの記載はなく、開発者レベルの環境（Docker Desktop、WSL2）が必要です。先行アクセス期間中のメールサポートはベストエフォートで、返信時間、稼働、インストール成功の保証はありません。',
      },
      requirements: {
        id: 'requirements-setup',
        title: '要件とセットアップ',
        content: [
          '**R6にはWindows 10または11、Compose対応のDocker Desktop、WSL2とLinuxコンテナ、そしてすでに動作しているLM Studioのモデルとサーバーが必要です。macOSとLinuxは検証対象外です。**',
          'ハードウェア要件は固定されていません。このリリースは、RAMやVRAMの一般的な最小値を定めていません。適合するかどうかはLM Studioですでに動いているモデルしだいで、以前のテストでは24 GBのNVIDIA GPUが使われましたが、これは明記された最小要件ではありません。Ultimateのポートは記載されていません。初回ダウンロードとオプション連携にはインターネットが必要ですが、ローカル利用の中核にSpiritBoxのクラウドアカウントは不要です。',
          '以下の手順は開発者のチェックリストに沿ったもので、PromptQuorumは実行していません。',
        ],
        numberedItems: [
          {
            title: 'LM Studioのチャットでモデルが動くか確認する',
            whyItMatters: 'チャットが動いても、SpiritBoxがLM Studioのサーバーに接続できることの証明にはなりません。',
          },
          {
            title: 'LM Studioサーバーを起動し、設定を控える',
            whyItMatters: 'Developerタブから起動し、モデル識別子とサーバーアドレスを控えます。[LM Studioのサーバードキュメント](https://lmstudio.ai/docs/developer/core/server)を参照してください。',
          },
          {
            title: 'Docker Desktopをインストールまたは確認する',
            whyItMatters: 'R6の文書化された手順にはWSL2とLinuxコンテナが必要です。[DockerのWindows向け手順](https://docs.docker.com/desktop/setup/install/windows-install/)を参照してください。',
          },
          {
            title: 'バックアップを取り、新しい空のフォルダーに展開する',
            whyItMatters: 'リリースページは、既存のバックアップを残し、以前のインストールのデータを上書きしたりボリュームを削除したりしないよう勧めています。',
          },
          {
            title: 'Minimalプロファイルで LMSTUDIO_FIRST.md に従う',
            whyItMatters: 'パッケージ付属のガイドに、アプリを接続する手順が記載されています。',
          },
        ],
      },
      scope: {
        id: 'package-scope',
        title: 'R6パッケージに含まれるもの・含まれないもの',
        content: [
          '**R6のダウンロードには、アプリ本体、Windows用セットアップスクリプト、LM Studioの初回起動ガイド、サードパーティの通知が含まれます。**',
        ],
        items: [
          '**モデル。** 含まれません。お使いのハードウェアに合ったものを別途ダウンロードします。',
          '**ワークフローのバンドル。** 設定とテストが済んだn8n、Telegram、ComfyUIのバンドルは含まれず、Proposal、Checklist、Repurpose、Telegramの各候補もR6には入っていません。',
          '**オプションのサービス。** より広いワークフローには、別途のセットアップと検証が必要です。',
          '**避けている表現。** 開発者の依頼により、本レビューはこのダウンロードを、検証済みのマルチサービスAIワークステーション、実績のあるGPUオーケストレーションシステム、すぐ使えるRAGや自動化バンドルとは表現しません。R6の受け入れ証跡はこれらの表現を裏付けていないためです。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**プライバシーのページによると、SpiritBoxは中核の推論、会話、プロジェクトファイル、データベースを利用者が管理するシステム上に置く設計で、実際のデータの保存場所は、最終的に検証されたパッケージで文書化される必要があるとされています。**',
          'オプション機能は、設定または使用した場合に第三者へデータを送ることがあります。同ページは、モデルの取得、Web検索、Telegram、ソフトウェア更新、外部API、チェックアウト、メール、サポートツールを挙げています。このポリシーは平易な言葉の草案と表示されており、テレメトリには触れておらず、サイト上のRyan Lucas氏の表記以外に管理者の名称もありません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発者の表明であり、監査の結果ではありません。PromptQuorumはネットワーク通信を検査していません。機密データを扱う場合は、オプション連携をオフにして確認してください。',
          },
        ],
      },
      testing: {
        id: 'testing-status',
        title: 'テストの状況と限界',
        content: [
          '**開発者は、R6が実モデルでの新規実行も、別のクリーンなPCでのインストールテストも経ていないと述べています。PromptQuorumも検証していません。**',
        ],
        items: [
          '**確認済み。** リリース証跡ページによると、R6のアーカイブ、その再現性、519件すべてのペイロードのハッシュが検証され、Gumroadから新たにダウンロードしたものが公開済みのチェックサムと一致しました。',
          '**以前の非公開ビルドで成功。** GPT-OSS 20BによるLM Studioでのチャット1回とCPUでの音声クリップ1件が完了し、回答の保存、音声の再生、再度開く操作も通りました。',
          '**そのビルドで失敗。** 最初のストリーミング応答が止まったままになり、このインシデントの唯一の原因は確定されていません。',
          '**オフラインでのみ修正を確認。** R6にはストリーミングの修正が含まれ、保存済みのテキストと音声を使ったオフラインのパーサーおよびブラウザーテストを通過しましたが、実モデルでの新規実行は行われていません。',
          '**未検証。** クリーンなPCへのインストール、同梱の既定Qwenルート、Fullワークステーション機能、CPUのみ・AMD・Intel GPUの構成、その他のハードウェア構成。',
          '**記載なし。** 情報源にはコード署名やSmartScreenの挙動への言及がなく、オファーページにもライセンス本文は掲載されていません。',
        ],
        callouts: [
          {
            type: 'note',
            text: '開発者のチェックリストは、インストールの認証でも、お使いのハードウェアとモデル構成で動作することの証明でもないと明記しています。',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '開発者から',
        content: [
          'SpiritBoxの開発者Ryan Lucas氏が、本レビューのために次のコメントを寄せてくれました。開発者自身の言葉として掲載するもので、PromptQuorumの独立した編集上の評価ではありません。',
          '「SpiritBox Ultimateの狙いは、ローカルAIを動かしている人のために、Guideを軸にした会話、保存したチャット、音声での返答をひとつのインターフェースにまとめることです。現在の先行アクセス版は、すでにLM Studioを運用していて、Dockerに慣れているWindowsユーザーを対象としています。当面の最優先事項は、この中核の体験を信頼できるものにすること、そして何が検証され、何が検証されていないかを明確に文書化することです。」',
        ],
        note: '— Ryan Lucas氏、開発者',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**すでにLM Studioを使い、Dockerに慣れているWindowsユーザー。**',
          '**この組み合わせ全体を、頼る前に試してみたい購入検討者。**',
          '**MacやLinuxのユーザー、完成したインストーラーが欲しい人は、下の代替アプリを検討してください。**',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替アプリ',
        columns: [
          'アプリ',
          'プラットフォーム',
          '料金/ライセンス',
          '主な違い',
        ],
        rows: [
          {
            'アプリ': '[FriedrichAI](/ja/power-local-llm/friedrichai-review)',
            'プラットフォーム': 'Windows',
            '料金/ライセンス': '$9.99 USD / プロプライエタリ',
            '主な違い': '独自のランタイムを持つオフラインアシスタント。Steamで販売',
          },
          {
            'アプリ': '[Jan](/ja/power-local-llm/jan-review)',
            'プラットフォーム': 'macOS、Windows、Linux',
            '料金/ライセンス': '無料 / Apache 2.0(派生版)',
            '主な違い': 'MCPとローカルAPIサーバーを備えた、オープンソースのデスクトップチャット',
          },
          {
            'アプリ': '[GPT4All](/ja/power-local-llm/gpt4all-review)',
            'プラットフォーム': 'macOS、Windows、Linux',
            '料金/ライセンス': '無料 / MIT',
            '主な違い': 'ローカルのドキュメントチャットを備えた、オープンソースのデスクトップアプリ',
          },
          {
            'アプリ': '[LM Studio](/ja/power-local-llm/lm-studio-review)',
            'プラットフォーム': 'macOS、Windows、Linux',
            '料金/ライセンス': '無料 / プロプライエタリ',
            '主な違い': 'Ultimateが接続する、モデル実行環境兼ローカルサーバー',
          },
        ],
        note: '競合の情報は頻繁に変わります。各アプリの最新の料金、ライセンス、対応プラットフォームは、それぞれの公式ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'もっと安いSpiritBoxのエディションはありますか?',
            a: 'はい。開発者は無料のBasicと$49 USDのProも販売しています。ProはPiperによる音声返答を追加し、LM Studioに加えて2つのDockerサービスが必要です。どちらも本レビューの対象外です。',
          },
          {
            q: '返金は受けられますか?',
            a: 'オファーページには独自の返金ポリシーの記載がありません。購入者向けポリシーによると、返金依頼はGumroadの注文と購入時に表示される条件を通じて処理されるため、支払う前に確認してください。',
          },
          {
            q: '商用利用や再販はできますか?',
            a: '購入者向けポリシーは、個人的な改変とトラブルシューティングを認めていますが、商用の再配布、再販、ホワイトラベル展開、SpiritBoxを自社製品として提示することには、別途書面による許可が必要です。',
          },
          {
            q: 'ダウンロードが壊れていないか確認するには?',
            a: 'アーカイブを開く前に、SpiritBox_Ultimate_v1.12_R6_Windows.zip（82,534,488バイト）のSHA-256チェックサムを、リリース証跡ページの値と比較してください。',
          },
          {
            q: 'このレビューはスポンサー付きですか?',
            a: '開発者が求めたのは無償の編集上の掲載のみで、このページにアフィリエイトリンクは含まれていません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: 'SpiritBox Ultimate R6は、範囲を絞り、留保事項を率直に示した先行アクセスのオファーで、すでにLM Studioの環境を持ち、この組み合わせを自分で試したい技術志向のWindowsユーザー向けです。DockerとWSL2という前提条件、上で挙げた未検証の項目、そして当サイトで実機検証をしていない点とあわせて判断してください。保存チャットとプロンプトプリセットだけで足りるなら[LM Studio](/ja/power-local-llm/lm-studio-review)だけで十分で、パッケージ化されたオフラインアシスタントを探すなら[FriedrichAI](/ja/power-local-llm/friedrichai-review)と比べられます。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[SpiritBox Ultimateのオファー](https://spiritbox.ca/ultimate.html) — R6の範囲、価格、内容、テストの限界。2026年10月16日確認。',
          '[LM Studio向けUltimateセットアップチェックリスト](https://spiritbox.ca/lm-studio-ultimate-checklist.html) — 手順、要件、検証状況。2026年10月16日確認。',
          '[R6のリリース証跡](https://spiritbox.ca/release-status.html) — バージョン表記、アーカイブ、チェックサム、成功・失敗・未検証の項目。2026年10月16日確認。',
          '[要件](https://spiritbox.ca/requirements.html) — エディションごとのOS、コンテナ、ハードウェアの注記。2026年10月16日確認。',
          '[プライバシー](https://spiritbox.ca/privacy.html)と[購入者向けポリシー](https://spiritbox.ca/buyer-policies.html) — データの流れ、返金、ライセンス、サポート。2026年10月16日確認。',
          '[SpiritBoxトップページ](https://spiritbox.ca/)と[概要](https://spiritbox.ca/about.html) — エディションの概要、開発者の経歴と所在地。2026年10月16日確認。',
          '[GumroadのSpiritBox Ultimate](https://spiritadmin5.gumroad.com/l/yseqxo) — USDでの購入価格。2026年10月16日確認。',
          '開発者のコメント — Ryan Lucas氏から2026年10月にメールで提供。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[LM Studioレビュー](/ja/power-local-llm/lm-studio-review) — SpiritBox Ultimateが接続するモデル実行環境兼ローカルサーバー。',
          '[Janレビュー](/ja/power-local-llm/jan-review) — 無料のオープンソースのデスクトップチャットアプリ。',
          '[GPT4Allレビュー](/ja/power-local-llm/gpt4all-review) — ドキュメントチャットを備えた、MITライセンスのデスクトップアプリ。',
          '[FriedrichAIレビュー](/ja/power-local-llm/friedrichai-review) — Steamで買い切りのオフラインWindowsアシスタント。',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/spiritbox-ultimate-review-hero-pt.webp',
    title: 'Análise do SpiritBox Ultimate: Early Access para Windows com LM Studio',
    seoTitle: 'Análise do SpiritBox Ultimate: Early Access R6 (Windows)',
    intro: 'O SpiritBox Ultimate é um aplicativo independente para Windows, voltado a quem já usa o LM Studio e quer avaliar em conjunto conversas baseadas em Guides, chats salvos e respostas faladas. Esta análise se concentra na oferta atual, o SpiritBox Ultimate v1.12 R6, um pacote em Early Access para Windows que exige o Docker Desktop e um servidor do LM Studio funcionando. Ela se baseia na [página da oferta Ultimate](https://spiritbox.ca/ultimate.html), na [lista de verificação para compradores](https://spiritbox.ca/lm-studio-ultimate-checklist.html) e nas [evidências da versão](https://spiritbox.ca/release-status.html) do desenvolvedor, consultadas em 16 de outubro de 2026, além de um comentário do desenvolvedor, Ryan Lucas. A PromptQuorum não instalou nem testou o software.',
    metaDescription: 'Análise do SpiritBox Ultimate: app em Early Access para Windows e LM Studio, com Guides, chats salvos e voz. Exige Docker; limites dos testes explicados.',
    twitterDescription: 'Análise do SpiritBox Ultimate R6: app em Early Access para Windows e usuários do LM Studio, com Guides, chats salvos e respostas faladas. Exige Docker; lacunas de verificação listadas.',
    audience: 'Usuários de Windows com perfil técnico que já usam o LM Studio e querem saber exatamente o que a oferta SpiritBox Ultimate R6 cobre, o que ela exige e o que não foi verificado.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do SpiritBox Ultimate',
    targetKeywords: [
      'análise spiritbox ultimate',
      'spiritbox ultimate lm studio',
      'spiritbox ultimate r6',
      'spiritbox early access windows',
      'lm studio respostas faladas',
      'lm studio interface docker',
      'spiritbox vs lm studio',
    ],
    current_models_mentioned: [
      'GPT-OSS 20B',
      'Qwen',
    ],
    current_hardware_mentioned: [
      'Windows 10/11',
      'NVIDIA GPU (24 GB)',
      'Docker Desktop',
      'WSL2',
    ],
    leadAnswerBlock: '**O SpiritBox Ultimate v1.12 R6 é um aplicativo em Early Access para Windows que adiciona conversas baseadas em Guides, chats salvos e respostas faladas a um modelo do LM Studio que você já executa.** Ele é voltado a usuários de Windows com perfil técnico e à vontade com o Docker, e as próprias evidências da versão do desenvolvedor deixam sem verificação uma nova execução com um modelo real e uma instalação em um PC limpo.',
    quickAnswerTop: {
      pt: {
        question: 'O SpiritBox Ultimate é uma estação de trabalho de IA local completa?',
        answer: 'Não, não no download atual. A oferta R6 se limita à experiência básica de conversa sobre o LM Studio, e os recursos mais amplos de estação de trabalho descritos em outras partes do site do desenvolvedor não são cobertos pelas evidências de aceitação dele.',
        bullets: [
          'Somente Windows 10 ou 11; macOS e Linux não são qualificados.',
          'O suporte por e-mail é feito com o melhor esforço durante o Early Access, sem prazo de resposta garantido.',
          'A lista de verificação começa pelo perfil Minimal documentado, extraído em uma pasta nova e vazia.',
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
        label: 'O que é o SpiritBox Ultimate?',
        anchor: 'what-is-spiritbox-ultimate',
      },
      {
        label: 'Como obter',
        anchor: 'get-it',
      },
      {
        label: 'Requisitos e configuração',
        anchor: 'requirements-setup',
      },
      {
        label: 'O que o pacote R6 inclui e exclui',
        anchor: 'package-scope',
      },
      {
        label: 'Privacidade e fluxo de dados',
        anchor: 'privacy',
      },
      {
        label: 'Status dos testes e limites',
        anchor: 'testing-status',
      },
      {
        label: 'A palavra do criador',
        anchor: 'from-the-maker',
      },
      {
        label: 'Para quem é indicado',
        anchor: 'who-should-use',
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
        label: 'Veredito',
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
            text: 'O SpiritBox Ultimate é um aplicativo independente para Windows, em Early Access, usado ao lado do LM Studio em vez de substituí-lo.',
          },
          {
            type: 'plain-terms',
            text: 'Você fornece o modelo e o servidor do LM Studio; o SpiritBox Ultimate fornece a interface e a configuração baseada em Docker em torno deles, e o desenvolvedor diz com clareza quais partes ainda não foram testadas.',
          },
        ],
        items: [
          'Preço e licença: $199 USD em pagamento único pelo Gumroad; a compra concede o uso da edição entregue sob a licença incluída.',
          'Pré-requisitos: Docker Desktop com WSL2 e contêineres Linux, além de um modelo e um servidor do LM Studio funcionando.',
          'Pacote: o aplicativo, scripts de configuração para Windows, orientações de primeira execução do LM Studio e avisos de terceiros.',
          'Desenvolvedor: Ryan Lucas, de Alberta (Canadá), que descreve a versão como voltada a usuários técnicos de Windows.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia nas páginas do desenvolvedor sobre a oferta, a lista de verificação, os requisitos, as evidências da versão, a privacidade e as políticas, consultadas em 16 de outubro de 2026, além de um comentário do desenvolvedor. A PromptQuorum não instalou nem testou o SpiritBox Ultimate.',
          },
        ],
      },
      overview: {
        id: 'what-is-spiritbox-ultimate',
        title: 'O que é o SpiritBox Ultimate?',
        content: [
          '**O SpiritBox Ultimate é um aplicativo independente para Windows, e não um executor de modelos: ele se conecta ao modelo e ao servidor do LM Studio que você já opera e adiciona conversas baseadas em Guides, chats salvos e respostas faladas em uma só interface.**',
          'No SpiritBox, um Guide é um conjunto reutilizável de instruções para conversas, conforme descrito no início da [página da oferta Ultimate](https://spiritbox.ca/ultimate.html) do desenvolvedor; a [visão geral das edições](https://spiritbox.ca/) lista "custom Spirit Guides" na edição gratuita Basic. Essa página também observa que o LM Studio já oferece chats salvos e predefinições de prompt reutilizáveis, então o desenvolvedor apresenta o Ultimate como uma forma de avaliar os três recursos em conjunto.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O SpiritBox Ultimate R6 é um download para Windows vendido uma única vez por $199 USD pelo Gumroad; o site mostra preços apenas em USD.**',
        ],
        columns: [
          'Item',
          'Onde obter',
        ],
        rows: [
          {
            Item: 'Compra',
            'Onde obter': '[Gumroad](https://spiritadmin5.gumroad.com/l/yseqxo), $199 USD',
          },
          {
            Item: 'Site',
            'Onde obter': '[Página do SpiritBox Ultimate](https://spiritbox.ca/ultimate.html)',
          },
          {
            Item: 'Lista do comprador',
            'Onde obter': '[Lista de verificação para o LM Studio](https://spiritbox.ca/lm-studio-ultimate-checklist.html)',
          },
          {
            Item: 'Evidências da versão',
            'Onde obter': '[Evidências da versão R6](https://spiritbox.ca/release-status.html)',
          },
          {
            Item: 'Política de privacidade',
            'Onde obter': '[Página de privacidade do SpiritBox](https://spiritbox.ca/privacy.html)',
          },
          {
            Item: 'Termos de compra',
            'Onde obter': '[Políticas do comprador](https://spiritbox.ca/buyer-policies.html)',
          },
          {
            Item: 'Outras edições',
            'Onde obter': '[Comparação de edições](https://spiritbox.ca/products.html)',
          },
        ],
        note: 'Versão verificada em 16 de outubro de 2026: SpiritBox Ultimate v1.12 R6 (Early Access para Windows), conforme a página de evidências da versão do desenvolvedor. A configuração consiste em extrair um arquivo zip e seguir os scripts e as orientações incluídos; as fontes não descrevem um assistente de instalação, e é preciso um ambiente em nível de desenvolvedor (Docker Desktop, WSL2). O suporte por e-mail é feito com o melhor esforço durante o Early Access, sem prazo de resposta, disponibilidade ou sucesso de instalação garantidos.',
      },
      requirements: {
        id: 'requirements-setup',
        title: 'Requisitos e configuração',
        content: [
          '**O R6 exige Windows 10 ou 11, Docker Desktop com Compose, WSL2 e contêineres Linux, e um modelo e um servidor do LM Studio que já funcionem; macOS e Linux não são qualificados.**',
          'O hardware não é fixo. A versão não estabelece um mínimo geral de RAM ou VRAM; o que serve depende do modelo que já roda no LM Studio, e um teste anterior usou uma GPU NVIDIA de 24 GB, o que não é um mínimo declarado. Nenhuma porta é indicada para o Ultimate. A internet é necessária para os downloads iniciais e as integrações opcionais, mas o uso local básico não exige conta na nuvem do SpiritBox.',
          'As etapas abaixo seguem a lista de verificação do desenvolvedor; a PromptQuorum não as executou.',
        ],
        numberedItems: [
          {
            title: 'Confirme que o modelo funciona no chat do LM Studio',
            whyItMatters: 'Um chat funcionando não prova que o SpiritBox consegue alcançar o servidor do LM Studio.',
          },
          {
            title: 'Inicie o servidor do LM Studio e anote os dados dele',
            whyItMatters: 'Inicie-o pela aba Developer e anote o identificador do modelo e o endereço do servidor; veja a [documentação do servidor do LM Studio](https://lmstudio.ai/docs/developer/core/server).',
          },
          {
            title: 'Instale ou verifique o Docker Desktop',
            whyItMatters: 'O caminho documentado do R6 exige WSL2 e contêineres Linux; veja as [instruções do Docker para Windows](https://docs.docker.com/desktop/setup/install/windows-install/).',
          },
          {
            title: 'Faça backup e extraia em uma pasta nova e vazia',
            whyItMatters: 'A página da versão recomenda preservar os backups existentes e não sobrescrever dados nem apagar volumes de uma instalação anterior.',
          },
          {
            title: 'Siga o LMSTUDIO_FIRST.md com o perfil Minimal',
            whyItMatters: 'O próprio guia do pacote cobre as etapas de conexão do aplicativo.',
          },
        ],
      },
      scope: {
        id: 'package-scope',
        title: 'O que o pacote R6 inclui e exclui',
        content: [
          '**O download do R6 contém o aplicativo, scripts de configuração para Windows, orientações de primeira execução do LM Studio e avisos de terceiros.**',
        ],
        items: [
          '**Modelos.** Não incluídos; são downloads separados, adequados ao seu hardware.',
          '**Pacotes de fluxos de trabalho.** Não há um pacote configurado e testado de n8n, Telegram ou ComfyUI, e os candidatos Proposal, Checklist, Repurpose e Telegram não estão no R6.',
          '**Serviços opcionais.** Fluxos de trabalho mais amplos exigem configuração e qualificação à parte.',
          '**Descrições a evitar.** A pedido do desenvolvedor, esta análise não descreve o download como uma estação de trabalho de IA multisserviço qualificada, um sistema de orquestração de GPU comprovado ou um pacote de RAG ou automação pronto para uso; as evidências de aceitação do R6 não sustentam essas descrições.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**A página de privacidade diz que o SpiritBox foi projetado para manter a inferência básica, as conversas, os arquivos de projeto e os bancos de dados em sistemas que você controla, e que os locais reais dos dados precisam ser documentados pelo pacote final qualificado.**',
          'Recursos opcionais podem enviar dados a terceiros quando configurados ou usados: a página cita obtenção de modelos, busca na web, Telegram, atualizações de software, APIs externas, checkout, e-mail e ferramentas de suporte. A política é rotulada como um rascunho em linguagem simples, não trata de telemetria e não nomeia um controlador de dados além do crédito do site a Ryan Lucas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas são declarações do desenvolvedor, não resultados de auditoria. A PromptQuorum não inspecionou o tráfego de rede; quem lida com dados confidenciais deve testar com as integrações opcionais desativadas.',
          },
        ],
      },
      testing: {
        id: 'testing-status',
        title: 'Status dos testes e limites',
        content: [
          '**O desenvolvedor afirma que o R6 não passou nem por uma nova execução com um modelo real nem por um teste de instalação separado em um PC limpo, e a PromptQuorum também não o testou.**',
        ],
        items: [
          '**Verificado.** Segundo a página de evidências da versão, o arquivo do R6, sua repetibilidade e todos os 519 hashes do conteúdo foram conferidos, e um download novo do Gumroad coincidiu com a soma de verificação publicada.',
          '**Aprovado em um build privado anterior.** Um chat do LM Studio com o GPT-OSS 20B e um clipe de voz em CPU foram concluídos, incluindo resposta salva, reprodução do áudio e reabertura.',
          '**Reprovado nesse build.** A resposta inicial em streaming ficou travada, e a causa única desse incidente não foi estabelecida de forma conclusiva.',
          '**Corrigido apenas offline.** O R6 inclui uma correção de streaming que passou em testes offline de analisador e de navegador com texto e áudio salvos; ela não teve uma nova execução com modelo real.',
          '**Não qualificado.** Instalação em um PC novo, a rota Qwen padrão incluída, os recursos da estação de trabalho Full, configurações somente com CPU, com GPU AMD ou Intel, e outras configurações de hardware.',
          '**Não informado.** As fontes não mencionam assinatura de código nem o comportamento do SmartScreen, e a página da oferta não traz o texto da licença.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A lista de verificação do desenvolvedor afirma que ela não é uma certificação de instalação nem prova de que seu hardware e sua configuração de modelo vão funcionar.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'A palavra do criador',
        content: [
          'Ryan Lucas, o desenvolvedor do SpiritBox, enviou o comentário a seguir para esta análise. Ele é apresentado como as palavras do próprio desenvolvedor, não como avaliação editorial independente da PromptQuorum:',
          '"A ideia por trás do SpiritBox Ultimate é reunir em uma só interface conversas baseadas em Guides, chats salvos e respostas faladas para quem executa IA local. A versão atual em Early Access é voltada a usuários de Windows que já operam o LM Studio e estão à vontade com o Docker. A prioridade imediata é tornar essa experiência básica confiável e documentar com clareza o que foi e o que não foi verificado."',
        ],
        note: '— Ryan Lucas, desenvolvedor',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é indicado',
        items: [
          '**Usuários de Windows que já usam o LM Studio e estão à vontade com o Docker.**',
          '**Compradores que querem testar toda a combinação antes de depender dela.**',
          '**Quem usa Mac ou Linux, ou quer um instalador pronto, deve ver as alternativas abaixo.**',
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
          'Principal diferença',
        ],
        rows: [
          {
            App: '[FriedrichAI](/pt/power-local-llm/friedrichai-review)',
            Plataformas: 'Windows',
            'Preço / licença': '$9.99 USD / proprietária',
            'Principal diferença': 'Assistente offline com motor próprio, vendido na Steam',
          },
          {
            App: '[Jan](/pt/power-local-llm/jan-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Gratuito / Apache 2.0 (variante)',
            'Principal diferença': 'Chat de desktop open source com MCP e servidor de API local',
          },
          {
            App: '[GPT4All](/pt/power-local-llm/gpt4all-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Gratuito / MIT',
            'Principal diferença': 'App de desktop open source com chat de documentos local',
          },
          {
            App: '[LM Studio](/pt/power-local-llm/lm-studio-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Gratuito / proprietário',
            'Principal diferença': 'O executor de modelos e servidor local ao qual o Ultimate se conecta',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme o preço, a licença e as plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Existe uma edição mais barata do SpiritBox?',
            a: 'Sim. O desenvolvedor também vende o Basic, que é gratuito, e o Pro por $49 USD; o Pro adiciona respostas faladas com o Piper e precisa de dois serviços Docker além do LM Studio. Nenhum dos dois é tratado nesta análise.',
          },
          {
            q: 'Posso pedir reembolso?',
            a: 'A página da oferta não traz uma política de reembolso própria. As políticas do comprador dizem que os pedidos passam pelo pedido no Gumroad e pelos termos exibidos na compra, então leia-os antes de pagar.',
          },
          {
            q: 'Posso usar comercialmente ou revender?',
            a: 'As políticas do comprador permitem modificação pessoal e solução de problemas, mas redistribuição comercial, revenda, implantação white-label ou apresentar o SpiritBox como produto próprio exigem permissão escrita separada.',
          },
          {
            q: 'Como confirmo que meu download está íntegro?',
            a: 'Antes de abrir o arquivo, compare a soma de verificação SHA-256 do SpiritBox_Ultimate_v1.12_R6_Windows.zip (82.534.488 bytes) com o valor da página de evidências da versão.',
          },
          {
            q: 'Esta análise é patrocinada?',
            a: 'O desenvolvedor pediu apenas inclusão editorial sem pagamento, e esta página não contém link de afiliado.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: 'O SpiritBox Ultimate R6 é uma oferta em Early Access de escopo restrito e com ressalvas expostas abertamente, para usuários técnicos de Windows que já têm o LM Studio configurado e querem experimentar a combinação por conta própria. É preciso pesar isso contra os pré-requisitos de Docker e WSL2, os pontos de verificação em aberto listados acima e a ausência de testes práticos de nossa parte. Quem precisa apenas de chats salvos e predefinições de prompt pode ficar só com o [LM Studio](/pt/power-local-llm/lm-studio-review), e quem procura um assistente offline já empacotado pode comparar o [FriedrichAI](/pt/power-local-llm/friedrichai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Oferta do SpiritBox Ultimate](https://spiritbox.ca/ultimate.html) — escopo do R6, preço, conteúdo e limites dos testes, consultada em 16 de outubro de 2026.',
          '[Lista de verificação do Ultimate para o LM Studio](https://spiritbox.ca/lm-studio-ultimate-checklist.html) — etapas, requisitos e status de verificação, consultada em 16 de outubro de 2026.',
          '[Evidências da versão R6](https://spiritbox.ca/release-status.html) — rótulo da versão, arquivo, soma de verificação e itens aprovados, reprovados e não verificados, consultadas em 16 de outubro de 2026.',
          '[Requisitos](https://spiritbox.ca/requirements.html) — notas de sistema operacional, contêineres e hardware por edição, consultados em 16 de outubro de 2026.',
          '[Privacidade](https://spiritbox.ca/privacy.html) e [políticas do comprador](https://spiritbox.ca/buyer-policies.html) — fluxo de dados, reembolso, licença e suporte, consultadas em 16 de outubro de 2026.',
          '[Página inicial do SpiritBox](https://spiritbox.ca/) e [Sobre](https://spiritbox.ca/about.html) — visão geral das edições, histórico e localização do desenvolvedor, consultados em 16 de outubro de 2026.',
          '[SpiritBox Ultimate no Gumroad](https://spiritadmin5.gumroad.com/l/yseqxo) — preço de checkout em USD, consultado em 16 de outubro de 2026.',
          'Comentário do criador — enviado por Ryan Lucas por e-mail em outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do LM Studio](/pt/power-local-llm/lm-studio-review) — o executor de modelos e servidor local ao qual o SpiritBox Ultimate se conecta.',
          '[Análise do Jan](/pt/power-local-llm/jan-review) — um app de chat de desktop gratuito e open source.',
          '[Análise do GPT4All](/pt/power-local-llm/gpt4all-review) — um app de desktop com licença MIT e chat de documentos.',
          '[Análise do FriedrichAI](/pt/power-local-llm/friedrichai-review) — um assistente offline para Windows comprado uma vez na Steam.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/spiritbox-ultimate-review-hero-ar.webp',
    title: 'مراجعة SpiritBox Ultimate: وصول مبكر لويندوز لمستخدمي LM Studio',
    seoTitle: 'مراجعة SpiritBox Ultimate: وصول مبكر لويندوز مع LM Studio',
    intro: 'SpiritBox Ultimate تطبيق ويندوز مستقل موجّه لمن يستخدمون LM Studio بالفعل ويريدون تقييم المحادثات القائمة على Guides والمحادثات المحفوظة والردود المنطوقة معًا. تركّز هذه المراجعة على العرض الحالي، SpiritBox Ultimate v1.12 R6، وهو حزمة وصول مبكر (Early Access) لويندوز تتطلب Docker Desktop وخادم LM Studio يعمل. وتستند إلى [صفحة عرض Ultimate](https://spiritbox.ca/ultimate.html) و[قائمة تحقق المشتري](https://spiritbox.ca/lm-studio-ultimate-checklist.html) و[أدلة الإصدار](https://spiritbox.ca/release-status.html) لدى المطوّر، التي جرى الاطلاع عليها في 16 أكتوبر 2026، إضافةً إلى تعليق من المطوّر Ryan Lucas. لم تقم PromptQuorum بتثبيت البرنامج أو اختباره.',
    metaDescription: 'مراجعة SpiritBox Ultimate: تطبيق وصول مبكر لويندوز لمستخدمي LM Studio يضم Guides ومحادثات محفوظة وردودًا منطوقة. يتطلب Docker، مع شرح حدود الاختبار.',
    twitterDescription: 'مراجعة SpiritBox Ultimate R6: تطبيق وصول مبكر لويندوز لمستخدمي LM Studio مع Guides ومحادثات محفوظة وردود منطوقة. يتطلب Docker، مع بيان ما لم يُتحقق منه.',
    audience: 'مستخدمو ويندوز ذوو الخبرة التقنية الذين يستخدمون LM Studio بالفعل ويريدون معرفة ما يغطيه عرض SpiritBox Ultimate R6 بدقة، وما يتطلبه، وما لم يُتحقق منه.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة SpiritBox Ultimate',
    targetKeywords: [
      'مراجعة spiritbox ultimate',
      'spiritbox ultimate lm studio',
      'spiritbox ultimate r6',
      'spiritbox وصول مبكر ويندوز',
      'lm studio ردود منطوقة',
      'lm studio واجهة docker',
      'spiritbox vs lm studio',
    ],
    current_models_mentioned: [
      'GPT-OSS 20B',
      'Qwen',
    ],
    current_hardware_mentioned: [
      'Windows 10/11',
      'NVIDIA GPU (24 GB)',
      'Docker Desktop',
      'WSL2',
    ],
    leadAnswerBlock: '**SpiritBox Ultimate v1.12 R6 تطبيق وصول مبكر لويندوز يضيف محادثات قائمة على Guides ومحادثات محفوظة وردودًا منطوقة فوق نموذج LM Studio الذي تشغّله بالفعل.** وهو موجّه لمستخدمي ويندوز ذوي الخبرة التقنية المرتاحين مع Docker، وتترك أدلة الإصدار لدى المطوّر نفسه تشغيلًا جديدًا بنموذج حقيقي وتثبيتًا على جهاز نظيف دون تحقق.',
    quickAnswerTop: {
      ar: {
        question: 'هل SpiritBox Ultimate محطة عمل ذكاء اصطناعي محلية متكاملة؟',
        answer: 'لا، ليس بصيغة التنزيل الحالية. يقتصر عرض R6 على تجربة المحادثة الأساسية فوق LM Studio، أما ميزات محطة العمل الأوسع الموصوفة في أماكن أخرى من موقع المطوّر فلا تغطيها أدلة القبول لديه.',
        bullets: [
          'يعمل على ويندوز 10 أو 11 فقط؛ أما macOS وLinux فغير مؤهَّلين.',
          'الدعم عبر البريد الإلكتروني خلال الوصول المبكر يُقدَّم بأقصى جهد ممكن، دون مدة استجابة مضمونة.',
          'تبدأ قائمة التحقق بملف التعريف Minimal الموثّق، مفكوكًا في مجلد جديد فارغ.',
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
        label: 'ما هو SpiritBox Ultimate؟',
        anchor: 'what-is-spiritbox-ultimate',
      },
      {
        label: 'كيف تحصل عليه',
        anchor: 'get-it',
      },
      {
        label: 'المتطلبات والإعداد',
        anchor: 'requirements-setup',
      },
      {
        label: 'ما تتضمنه حزمة R6 وما تستثنيه',
        anchor: 'package-scope',
      },
      {
        label: 'الخصوصية وتدفق البيانات',
        anchor: 'privacy',
      },
      {
        label: 'حالة الاختبار وحدوده',
        anchor: 'testing-status',
      },
      {
        label: 'من صانع التطبيق',
        anchor: 'from-the-maker',
      },
      {
        label: 'لمن يناسب',
        anchor: 'who-should-use',
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
            text: 'SpiritBox Ultimate تطبيق ويندوز مستقل في مرحلة الوصول المبكر، يعمل إلى جانب LM Studio ولا يحلّ محله.',
          },
          {
            type: 'plain-terms',
            text: 'أنت توفّر النموذج وخادم LM Studio، ويوفّر SpiritBox Ultimate الواجهة والإعداد القائم على Docker حولهما، ويذكر المطوّر بوضوح الأجزاء التي لم تُختبر بعد.',
          },
        ],
        items: [
          'السعر والترخيص: $199 USD دفعة واحدة عبر Gumroad؛ ويمنح الشراء حق استخدام الإصدار المسلَّم بموجب الترخيص المرفق.',
          'المتطلبات المسبقة: Docker Desktop مع WSL2 وحاويات Linux، إضافةً إلى نموذج وخادم LM Studio يعملان.',
          'محتوى الحزمة: التطبيق ونصوص إعداد ويندوز وإرشادات التشغيل الأول لـ LM Studio وإشعارات الأطراف الثالثة.',
          'المطوّر: Ryan Lucas من ألبرتا في كندا، ويصف الإصدار بأنه موجّه لمستخدمي ويندوز ذوي الخبرة التقنية.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحات المطوّر الخاصة بالعرض وقائمة تحقق المشتري والمتطلبات وأدلة الإصدار والخصوصية والسياسات، التي جرى الاطلاع عليها في 16 أكتوبر 2026، إضافةً إلى تعليق من المطوّر. لم تقم PromptQuorum بتثبيت SpiritBox Ultimate أو اختباره.',
          },
        ],
      },
      overview: {
        id: 'what-is-spiritbox-ultimate',
        title: 'ما هو SpiritBox Ultimate؟',
        content: [
          '**SpiritBox Ultimate تطبيق ويندوز مستقل وليس مشغّل نماذج: فهو يتصل بنموذج LM Studio وخادمه اللذين تشغّلهما بالفعل، ويضيف محادثات قائمة على Guides ومحادثات محفوظة وردودًا منطوقة في واجهة واحدة.**',
          'الـ Guide في SpiritBox هو مجموعة قابلة لإعادة الاستخدام من تعليمات المحادثة، كما يوضح مطلع [صفحة عرض Ultimate](https://spiritbox.ca/ultimate.html) لدى المطوّر؛ وتدرج [نظرة عامة على الإصدارات](https://spiritbox.ca/) "custom Spirit Guides" ضمن الإصدار المجاني Basic. وتشير تلك الصفحة أيضًا إلى أن LM Studio يوفّر بالفعل محادثات محفوظة وإعدادات مسبقة قابلة لإعادة الاستخدام للأوامر النصية، ولذلك يقدّم المطوّر Ultimate بوصفه وسيلة لتقييم الميزات الثلاث معًا.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**SpiritBox Ultimate R6 تنزيل لويندوز يُباع مرة واحدة بسعر $199 USD عبر Gumroad؛ ويعرض الموقع الأسعار بالدولار الأمريكي فقط.**',
        ],
        columns: [
          'العنصر',
          'مكان الحصول عليه',
        ],
        rows: [
          {
            'العنصر': 'الشراء',
            'مكان الحصول عليه': '[Gumroad](https://spiritadmin5.gumroad.com/l/yseqxo)، $199 USD',
          },
          {
            'العنصر': 'الموقع',
            'مكان الحصول عليه': '[صفحة SpiritBox Ultimate](https://spiritbox.ca/ultimate.html)',
          },
          {
            'العنصر': 'قائمة تحقق المشتري',
            'مكان الحصول عليه': '[قائمة إعداد LM Studio](https://spiritbox.ca/lm-studio-ultimate-checklist.html)',
          },
          {
            'العنصر': 'أدلة الإصدار',
            'مكان الحصول عليه': '[أدلة إصدار R6](https://spiritbox.ca/release-status.html)',
          },
          {
            'العنصر': 'سياسة الخصوصية',
            'مكان الحصول عليه': '[صفحة الخصوصية في SpiritBox](https://spiritbox.ca/privacy.html)',
          },
          {
            'العنصر': 'شروط الشراء',
            'مكان الحصول عليه': '[سياسات المشتري](https://spiritbox.ca/buyer-policies.html)',
          },
          {
            'العنصر': 'إصدارات أخرى',
            'مكان الحصول عليه': '[مقارنة الإصدارات](https://spiritbox.ca/products.html)',
          },
        ],
        note: 'الإصدار الذي جرى التحقق منه في 16 أكتوبر 2026: SpiritBox Ultimate v1.12 R6 (وصول مبكر لويندوز)، بحسب صفحة أدلة الإصدار لدى المطوّر. يتم الإعداد بفك أرشيف zip واتباع النصوص والإرشادات المرفقة؛ ولا تصف المصادر معالج تثبيت، كما يلزم توفر بيئة بمستوى المطوّرين (Docker Desktop وWSL2). والدعم عبر البريد الإلكتروني خلال الوصول المبكر يُقدَّم بأقصى جهد ممكن، دون ضمان لمدة الاستجابة أو التوافر أو نجاح التثبيت.',
      },
      requirements: {
        id: 'requirements-setup',
        title: 'المتطلبات والإعداد',
        content: [
          '**يتطلب R6 ويندوز 10 أو 11، وDocker Desktop مع Compose وWSL2 وحاويات Linux، ونموذج LM Studio وخادمًا يعملان بالفعل؛ أما macOS وLinux فغير مؤهَّلين.**',
          'العتاد غير محدد بثبات. فالإصدار لا يضع حدًّا أدنى عامًّا لـ RAM أو VRAM؛ وما يناسب يعتمد على النموذج الذي يعمل بالفعل في LM Studio، وقد استخدم اختبار سابق وحدة معالجة رسومية من NVIDIA بسعة 24 GB، وهذا ليس حدًّا أدنى معلنًا. ولا يُذكر منفذ لـ Ultimate. والإنترنت لازم للتنزيلات الأولى والتكاملات الاختيارية، لكن الاستخدام المحلي الأساسي لا يحتاج إلى حساب سحابي لدى SpiritBox.',
          'تتبع الخطوات التالية قائمة تحقق المطوّر؛ ولم تنفّذها PromptQuorum.',
        ],
        numberedItems: [
          {
            title: 'تأكد من أن النموذج يعمل في دردشة LM Studio',
            whyItMatters: 'نجاح الدردشة لا يثبت أن SpiritBox يستطيع الوصول إلى خادم LM Studio.',
          },
          {
            title: 'شغّل خادم LM Studio ودوّن بياناته',
            whyItMatters: 'شغّله من تبويب Developer ثم دوّن معرّف النموذج وعنوان الخادم؛ راجع [وثائق خادم LM Studio](https://lmstudio.ai/docs/developer/core/server).',
          },
          {
            title: 'ثبّت Docker Desktop أو تحقق منه',
            whyItMatters: 'يتطلب المسار الموثّق في R6 وجود WSL2 وحاويات Linux؛ راجع [تعليمات Docker لويندوز](https://docs.docker.com/desktop/setup/install/windows-install/).',
          },
          {
            title: 'خذ نسخة احتياطية ثم فك الأرشيف في مجلد جديد فارغ',
            whyItMatters: 'تنصح صفحة الإصدار بالاحتفاظ بالنسخ الاحتياطية الموجودة وعدم الكتابة فوق بيانات تثبيت سابق أو حذف وحداته (volumes).',
          },
          {
            title: 'اتبع LMSTUDIO_FIRST.md مع ملف التعريف Minimal',
            whyItMatters: 'يغطي الدليل المرفق في الحزمة خطوات ربط التطبيق.',
          },
        ],
      },
      scope: {
        id: 'package-scope',
        title: 'ما تتضمنه حزمة R6 وما تستثنيه',
        content: [
          '**يحتوي تنزيل R6 على التطبيق ونصوص إعداد ويندوز وإرشادات التشغيل الأول لـ LM Studio وإشعارات الأطراف الثالثة.**',
        ],
        items: [
          '**النماذج.** غير مضمّنة؛ فهي تنزيلات منفصلة تناسب عتادك.',
          '**حزم سير العمل.** لا تتضمن الحزمة حزمة مهيأة ومختبرة لـ n8n أو Telegram أو ComfyUI، كما أن مرشحات Proposal وChecklist وRepurpose وTelegram ليست ضمن R6.',
          '**الخدمات الاختيارية.** تحتاج مسارات العمل الأوسع إلى إعداد وتأهيل منفصلين.',
          '**أوصاف يُتجنَّب استخدامها.** بناءً على طلب المطوّر، لا تصف هذه المراجعة التنزيل بأنه محطة عمل ذكاء اصطناعي متعددة الخدمات مؤهَّلة، أو نظام مثبت لتنسيق وحدات GPU، أو حزمة RAG أو أتمتة جاهزة للاستخدام؛ فأدلة قبول R6 لا تدعم هذه الأوصاف.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**تذكر صفحة الخصوصية أن SpiritBox مصمَّم لإبقاء الاستدلال الأساسي والمحادثات وملفات المشاريع وقواعد البيانات على أنظمة تتحكم بها، وأن أماكن البيانات الفعلية يجب أن توثّقها الحزمة النهائية المؤهَّلة.**',
          'قد ترسل الميزات الاختيارية بيانات إلى أطراف ثالثة عند إعدادها أو استخدامها: تذكر الصفحة الحصول على النماذج والبحث على الويب وTelegram وتحديثات البرنامج وواجهات API الخارجية والدفع والبريد الإلكتروني وأدوات الدعم. وتوصَف السياسة بأنها مسودة بلغة مبسطة، ولا تتناول القياس عن بُعد (telemetry)، ولا تسمّي جهة مسؤولة عن البيانات سوى ذكر الموقع لـ Ryan Lucas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه إفادات من المطوّر وليست نتائج تدقيق. لم تفحص PromptQuorum حركة الشبكة؛ وينبغي لمن يتعامل مع بيانات سرية أن يختبر مع إيقاف التكاملات الاختيارية.',
          },
        ],
      },
      testing: {
        id: 'testing-status',
        title: 'حالة الاختبار وحدوده',
        content: [
          '**يذكر المطوّر أن R6 لم يخضع لتشغيل جديد بنموذج حقيقي ولا لاختبار تثبيت منفصل على جهاز نظيف، ولم تختبره PromptQuorum أيضًا.**',
        ],
        items: [
          '**تم التحقق.** بحسب صفحة أدلة الإصدار، جرى فحص أرشيف R6 وقابليته للتكرار وجميع قيم التجزئة البالغ عددها 519 للمحتوى، وتطابق تنزيل جديد من Gumroad مع المجموع الاختباري المنشور.',
          '**نجح في بناء خاص سابق.** اكتملت دردشة واحدة في LM Studio باستخدام GPT-OSS 20B ومقطع صوتي واحد على المعالج، بما في ذلك حفظ الإجابة وإعادة تشغيل الصوت وإعادة الفتح.',
          '**فشل في ذلك البناء.** بقيت الاستجابة المتدفقة الأولى عالقة، ولم يُحسم بصورة قاطعة السبب الوحيد لتلك الحادثة.',
          '**أُصلح دون اتصال فقط.** يتضمن R6 إصلاحًا للبث المتدفق اجتاز اختبارات المحلل والمتصفح دون اتصال بنص وصوت محفوظين؛ ولم يُجرَّب بتشغيل جديد بنموذج حقيقي.',
          '**غير مؤهَّل.** التثبيت على جهاز جديد، ومسار Qwen الافتراضي المضمَّن، وميزات محطة العمل Full، وإعدادات المعالج فقط أو وحدات GPU من AMD وIntel، وإعدادات العتاد الأخرى.',
          '**غير مذكور.** لا تذكر المصادر توقيع الشيفرة ولا سلوك SmartScreen، ولا تتضمن صفحة العرض نص الترخيص.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تنص قائمة تحقق المطوّر على أنها ليست شهادة تثبيت ولا دليلًا على أن عتادك وإعداد النموذج لديك سيعملان.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'من صانع التطبيق',
        content: [
          'قدّم Ryan Lucas، مطوّر SpiritBox، التعليق التالي لهذه المراجعة. يُعرض بوصفه كلام المطوّر نفسه، لا تقييمًا تحريريًا مستقلًّا من PromptQuorum:',
          '"فكرة SpiritBox Ultimate هي جمع المحادثات القائمة على Guides والمحادثات المحفوظة والردود المنطوقة في واجهة واحدة لمن يشغّلون الذكاء الاصطناعي المحلي. والإصدار الحالي في مرحلة الوصول المبكر موجّه لمستخدمي ويندوز الذين يشغّلون LM Studio بالفعل ويرتاحون للعمل مع Docker. وأولويتنا الفورية هي جعل هذه التجربة الأساسية موثوقة وتوثيق ما جرى التحقق منه وما لم يجرِ التحقق منه بوضوح."',
        ],
        note: '— Ryan Lucas، مطوّر',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مستخدمو ويندوز الذين يشغّلون LM Studio بالفعل ويرتاحون للعمل مع Docker.**',
          '**المشترون الراغبون في اختبار المجموعة كاملةً قبل الاعتماد عليها.**',
          '**مستخدمو Mac أو Linux ومن يريدون مثبّتًا جاهزًا عليهم النظر في البدائل أدناه.**',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: [
          'التطبيق',
          'المنصات',
          'السعر / الترخيص',
          'الفرق الرئيسي',
        ],
        rows: [
          {
            'التطبيق': '[FriedrichAI](/ar/power-local-llm/friedrichai-review)',
            'المنصات': 'ويندوز',
            'السعر / الترخيص': '$9.99 USD / مملوك',
            'الفرق الرئيسي': 'مساعد يعمل دون اتصال بمحرك خاص، يُباع على Steam',
          },
          {
            'التطبيق': '[Jan](/ar/power-local-llm/jan-review)',
            'المنصات': 'macOS وويندوز ولينكس',
            'السعر / الترخيص': 'مجاني / Apache 2.0 (صيغة مختلفة)',
            'الفرق الرئيسي': 'دردشة سطح مكتب مفتوحة المصدر مع MCP وخادم API محلي',
          },
          {
            'التطبيق': '[GPT4All](/ar/power-local-llm/gpt4all-review)',
            'المنصات': 'macOS وويندوز ولينكس',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'تطبيق سطح مكتب مفتوح المصدر مع دردشة مستندات محلية',
          },
          {
            'التطبيق': '[LM Studio](/ar/power-local-llm/lm-studio-review)',
            'المنصات': 'macOS وويندوز ولينكس',
            'السعر / الترخيص': 'مجاني / مملوك',
            'الفرق الرئيسي': 'مشغّل النماذج والخادم المحلي الذي يتصل به Ultimate',
          },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تحقق من السعر والترخيص والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل هناك إصدار أرخص من SpiritBox؟',
            a: 'نعم. يبيع المطوّر أيضًا Basic المجاني وPro بسعر $49 USD؛ ويضيف Pro ردودًا منطوقة عبر Piper ويحتاج إلى خدمتي Docker إضافةً إلى LM Studio. ولا تتناول هذه المراجعة أيًّا منهما.',
          },
          {
            q: 'هل يمكنني استرداد المبلغ؟',
            a: 'لا تذكر صفحة العرض سياسة استرداد خاصة بها. وتقول سياسات المشتري إن طلبات الاسترداد تُعالَج عبر طلب Gumroad والشروط المعروضة عند الشراء، فاقرأها قبل الدفع.',
          },
          {
            q: 'هل يمكنني استخدامه تجاريًّا أو إعادة بيعه؟',
            a: 'تسمح سياسات المشتري بالتعديل الشخصي واستكشاف الأخطاء، لكن إعادة التوزيع التجاري أو إعادة البيع أو النشر بعلامة بيضاء أو تقديم SpiritBox بوصفه منتجك الخاص تتطلب إذنًا كتابيًّا منفصلًا.',
          },
          {
            q: 'كيف أتأكد من سلامة التنزيل؟',
            a: 'قبل فتح الأرشيف، قارن المجموع الاختباري SHA-256 للملف SpiritBox_Ultimate_v1.12_R6_Windows.zip (82,534,488 بايت) بالقيمة المذكورة في صفحة أدلة الإصدار.',
          },
          {
            q: 'هل هذه المراجعة برعاية؟',
            a: 'طلب المطوّر إدراجًا تحريريًّا غير مدفوع فقط، ولا تحتوي هذه الصفحة على أي رابط إحالة.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'عرض SpiritBox Ultimate R6 هو عرض وصول مبكر محدد النطاق ومصحوب بتحفظات معلنة بصراحة، لمستخدمي ويندوز ذوي الخبرة التقنية ممن لديهم إعداد LM Studio قائم ويريدون تجربة هذه المجموعة بأنفسهم. ينبغي موازنة ذلك بمتطلبات Docker وWSL2 وبنود التحقق المفتوحة المذكورة أعلاه وغياب اختبار عملي من جانبنا. ومن يحتاج فقط إلى محادثات محفوظة وإعدادات مسبقة للأوامر النصية يمكنه الاكتفاء بـ[LM Studio](/ar/power-local-llm/lm-studio-review)، ومن يبحث عن مساعد جاهز يعمل دون اتصال فيمكنه مقارنة [FriedrichAI](/ar/power-local-llm/friedrichai-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[عرض SpiritBox Ultimate](https://spiritbox.ca/ultimate.html) — نطاق R6 والسعر والمحتوى وحدود الاختبار، جرى الاطلاع عليها في 16 أكتوبر 2026.',
          '[قائمة إعداد Ultimate لـ LM Studio](https://spiritbox.ca/lm-studio-ultimate-checklist.html) — الخطوات والمتطلبات وحالة التحقق، جرى الاطلاع عليها في 16 أكتوبر 2026.',
          '[أدلة إصدار R6](https://spiritbox.ca/release-status.html) — تسمية الإصدار والأرشيف والمجموع الاختباري والبنود الناجحة والفاشلة وغير المتحقق منها، جرى الاطلاع عليها في 16 أكتوبر 2026.',
          '[المتطلبات](https://spiritbox.ca/requirements.html) — ملاحظات نظام التشغيل والحاويات والعتاد لكل إصدار، جرى الاطلاع عليها في 16 أكتوبر 2026.',
          '[الخصوصية](https://spiritbox.ca/privacy.html) و[سياسات المشتري](https://spiritbox.ca/buyer-policies.html) — تدفق البيانات والاسترداد والترخيص وشروط الدعم، جرى الاطلاع عليها في 16 أكتوبر 2026.',
          '[الصفحة الرئيسية لـ SpiritBox](https://spiritbox.ca/) و[نبذة](https://spiritbox.ca/about.html) — نظرة عامة على الإصدارات وخلفية المطوّر وموقعه، جرى الاطلاع عليها في 16 أكتوبر 2026.',
          '[SpiritBox Ultimate على Gumroad](https://spiritadmin5.gumroad.com/l/yseqxo) — سعر الدفع بالدولار الأمريكي، جرى الاطلاع عليه في 16 أكتوبر 2026.',
          'تعليق المطوّر — قدّمه Ryan Lucas عبر البريد الإلكتروني في أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة LM Studio](/ar/power-local-llm/lm-studio-review) — مشغّل النماذج والخادم المحلي الذي يتصل به SpiritBox Ultimate.',
          '[مراجعة Jan](/ar/power-local-llm/jan-review) — تطبيق دردشة سطح مكتب مجاني ومفتوح المصدر.',
          '[مراجعة GPT4All](/ar/power-local-llm/gpt4all-review) — تطبيق سطح مكتب بترخيص MIT مع دردشة مستندات.',
          '[مراجعة FriedrichAI](/ar/power-local-llm/friedrichai-review) — مساعد ويندوز يعمل دون اتصال ويُشترى مرة واحدة على Steam.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/spiritbox-ultimate-review-hero-zh.webp',
    title: 'SpiritBox Ultimate 评测：面向 LM Studio 用户的 Windows 抢先体验版',
    seoTitle: 'SpiritBox Ultimate 评测：Windows 抢先体验 R6',
    intro: 'SpiritBox Ultimate 是一款独立的 Windows 应用，面向已经在用 LM Studio、想一并评估 Guide 式对话、已保存聊天和语音回复的用户。本评测只针对当前的 SpiritBox Ultimate v1.12 R6：这是一个 Windows 抢先体验（Early Access）包，需要 Docker Desktop 和可正常工作的 LM Studio 服务器。内容依据开发者的 [Ultimate 产品页](https://spiritbox.ca/ultimate.html)、[购买者清单](https://spiritbox.ca/lm-studio-ultimate-checklist.html)和[发布证据](https://spiritbox.ca/release-status.html)（核实于 2026 年 10 月 16 日），以及开发者 Ryan Lucas 的一段留言。PromptQuorum 没有安装或测试过该软件。',
    metaDescription: 'SpiritBox Ultimate 评测：面向 LM Studio 用户的 Windows 抢先体验应用，含 Guide 对话、已保存聊天和语音回复。需要 Docker，并说明测试局限。',
    twitterDescription: 'SpiritBox Ultimate R6 评测：面向 LM Studio 用户的 Windows 抢先体验应用，含 Guide 对话、已保存聊天和语音回复。需要 Docker，并列出未验证项。',
    audience: '已经在用 LM Studio 的 Windows 技术用户，想准确了解 SpiritBox Ultimate R6 包含什么、需要什么，以及哪些内容尚未验证。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'SpiritBox Ultimate 评测',
    targetKeywords: [
      'spiritbox ultimate 评测',
      'spiritbox ultimate lm studio',
      'spiritbox ultimate r6',
      'spiritbox 抢先体验 windows',
      'lm studio 语音回复',
      'lm studio docker 界面',
      'spiritbox vs lm studio',
    ],
    current_models_mentioned: [
      'GPT-OSS 20B',
      'Qwen',
    ],
    current_hardware_mentioned: [
      'Windows 10/11',
      'NVIDIA GPU (24 GB)',
      'Docker Desktop',
      'WSL2',
    ],
    leadAnswerBlock: '**SpiritBox Ultimate v1.12 R6 是一款 Windows 抢先体验应用，在你已经运行的 LM Studio 模型之上，增加 Guide 式对话、已保存聊天和语音回复。** 它面向熟悉 Docker 的 Windows 技术用户；开发者自己的发布证据也说明，基于真实模型的全新运行和干净电脑上的安装尚未验证。',
    quickAnswerTop: {
      zh: {
        question: 'SpiritBox Ultimate 是一套完整的本地 AI 工作站吗？',
        answer: '不是，至少当前这个下载包不是。R6 的范围限于 LM Studio 之上的核心对话体验；开发者网站其他地方描述的更广泛的工作站功能，并不在其验收证据的覆盖范围内。',
        bullets: [
          '仅支持 Windows 10 或 11；macOS 和 Linux 未经验证。',
          '抢先体验期间的邮件支持仅尽力而为，不保证响应时间。',
          '清单从文档中的 Minimal 配置档开始，并要求解压到一个全新的空文件夹。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '快速解答',
        anchor: 'quick-answer',
      },
      {
        label: 'SpiritBox Ultimate 是什么?',
        anchor: 'what-is-spiritbox-ultimate',
      },
      {
        label: '获取方式',
        anchor: 'get-it',
      },
      {
        label: '要求与设置',
        anchor: 'requirements-setup',
      },
      {
        label: 'R6 包含与不包含的内容',
        anchor: 'package-scope',
      },
      {
        label: '隐私与数据流向',
        anchor: 'privacy',
      },
      {
        label: '测试状态与局限',
        anchor: 'testing-status',
      },
      {
        label: '来自开发者',
        anchor: 'from-the-maker',
      },
      {
        label: '适合谁使用',
        anchor: 'who-should-use',
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
        label: '资料来源',
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
            text: 'SpiritBox Ultimate 是一款处于抢先体验阶段的独立 Windows 应用，与 LM Studio 搭配使用而不是取而代之。',
          },
          {
            type: 'plain-terms',
            text: '模型和 LM Studio 服务器由你自己提供；SpiritBox Ultimate 负责外围的界面和基于 Docker 的设置，开发者也直接说明了哪些部分尚未测试。',
          },
        ],
        items: [
          '价格与许可：通过 Gumroad 一次性购买，$199 USD；购买后可按随附许可使用所交付的版本。',
          '前提条件：带 WSL2 和 Linux 容器的 Docker Desktop，以及可正常工作的 LM Studio 模型和服务器。',
          '包内内容：应用本身、Windows 设置脚本、LM Studio 首次运行指引和第三方声明。',
          '开发者：来自加拿大艾伯塔省的 Ryan Lucas，他称此版本面向有技术基础的 Windows 用户。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测依据开发者的产品页、购买者清单、系统要求、发布证据、隐私和政策页面（核实于 2026 年 10 月 16 日），以及开发者的一段留言。PromptQuorum 没有安装或测试过 SpiritBox Ultimate。',
          },
        ],
      },
      overview: {
        id: 'what-is-spiritbox-ultimate',
        title: 'SpiritBox Ultimate 是什么?',
        content: [
          '**SpiritBox Ultimate 是一款独立的 Windows 应用，不是模型运行器：它连接你已在运行的 LM Studio 模型和服务器，并在同一个界面里增加 Guide 式对话、已保存聊天和语音回复。**',
          '在 SpiritBox 中，Guide 是一组可重复使用的对话指令，开发者的 [Ultimate 产品页](https://spiritbox.ca/ultimate.html)开头即作此说明；[版本概览](https://spiritbox.ca/)在免费的 Basic 版下列出了“custom Spirit Guides”。该页面还指出，LM Studio 本身已提供已保存聊天和可复用的提示词预设，因此开发者把 Ultimate 定位为一种把这三项功能放在一起评估的方式。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**SpiritBox Ultimate R6 是通过 Gumroad 一次性购买的 Windows 下载包，售价 $199 USD；网站只显示美元价格。**',
        ],
        columns: [
          '项目',
          '获取途径',
        ],
        rows: [
          {
            '项目': '购买',
            '获取途径': '[Gumroad](https://spiritadmin5.gumroad.com/l/yseqxo)，$199 USD',
          },
          {
            '项目': '网站',
            '获取途径': '[SpiritBox Ultimate 页面](https://spiritbox.ca/ultimate.html)',
          },
          {
            '项目': '购买者清单',
            '获取途径': '[LM Studio 设置清单](https://spiritbox.ca/lm-studio-ultimate-checklist.html)',
          },
          {
            '项目': '发布证据',
            '获取途径': '[R6 发布证据](https://spiritbox.ca/release-status.html)',
          },
          {
            '项目': '隐私政策',
            '获取途径': '[SpiritBox 隐私页面](https://spiritbox.ca/privacy.html)',
          },
          {
            '项目': '购买条款',
            '获取途径': '[购买者政策](https://spiritbox.ca/buyer-policies.html)',
          },
          {
            '项目': '其他版本',
            '获取途径': '[版本对比](https://spiritbox.ca/products.html)',
          },
        ],
        note: '核实于 2026 年 10 月 16 日的版本：SpiritBox Ultimate v1.12 R6（Windows 抢先体验版），来自开发者的发布证据页面。设置方式是解压 zip 压缩包并按随附的脚本和指引操作；资料来源未提到安装向导，并且需要开发者级别的环境（Docker Desktop、WSL2）。抢先体验期间的邮件支持仅尽力而为，不保证响应时间、可用性或安装成功。',
      },
      requirements: {
        id: 'requirements-setup',
        title: '要求与设置',
        content: [
          '**R6 需要 Windows 10 或 11、带 Compose 的 Docker Desktop、WSL2 和 Linux 容器，以及已能正常工作的 LM Studio 模型和服务器；macOS 和 Linux 未经验证。**',
          '硬件要求并不固定。该版本没有给出通用的最低 RAM 或 VRAM；是否够用取决于你已在 LM Studio 中运行的模型，早先的一次测试用的是 24 GB 的 NVIDIA GPU，但这并不是官方声明的最低要求。Ultimate 没有列出端口。首次下载和可选集成需要联网，但核心的本地使用不需要 SpiritBox 云账号。',
          '以下步骤依据开发者的清单；PromptQuorum 没有执行过。',
        ],
        numberedItems: [
          {
            title: '确认模型能在 LM Studio 聊天中正常工作',
            whyItMatters: '聊天能用，并不能证明 SpiritBox 可以连上 LM Studio 的服务器。',
          },
          {
            title: '启动 LM Studio 服务器并记下相关信息',
            whyItMatters: '在 Developer 标签页启动，然后记下模型标识符和服务器地址；参见 [LM Studio 服务器文档](https://lmstudio.ai/docs/developer/core/server)。',
          },
          {
            title: '安装或检查 Docker Desktop',
            whyItMatters: 'R6 的文档路线需要 WSL2 和 Linux 容器；参见 [Docker 的 Windows 安装说明](https://docs.docker.com/desktop/setup/install/windows-install/)。',
          },
          {
            title: '先备份，再解压到全新的空文件夹',
            whyItMatters: '发布页建议保留已有备份，不要覆盖旧安装的数据，也不要删除其卷。',
          },
          {
            title: '使用 Minimal 配置档并按 LMSTUDIO_FIRST.md 操作',
            whyItMatters: '包内自带的指南说明了连接应用的步骤。',
          },
        ],
      },
      scope: {
        id: 'package-scope',
        title: 'R6 包含与不包含的内容',
        content: [
          '**R6 下载包含应用本身、Windows 设置脚本、LM Studio 首次运行指引和第三方声明。**',
        ],
        items: [
          '**模型。** 不包含；需要根据你的硬件另行下载。',
          '**工作流包。** 不含已配置并经过测试的 n8n、Telegram 或 ComfyUI 工作流包，Proposal、Checklist、Repurpose 和 Telegram 这几个候选项也不在 R6 中。',
          '**可选服务。** 更广泛的工作流需要另行设置和验证。',
          '**避免的说法。** 应开发者的要求，本评测不把该下载描述为经过验证的多服务 AI 工作站、已被证明的 GPU 编排系统，或开箱即用的 RAG 或自动化套件；R6 的验收证据并不支持这些说法。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**隐私页面称，SpiritBox 的设计是让核心推理、对话、项目文件和数据库保留在你所控制的系统上，而数据的实际存放位置需要由最终通过验证的包来说明。**',
          '可选功能在配置或使用时可能把数据发送给第三方：页面列出了模型获取、网页搜索、Telegram、软件更新、外部 API、结账、电子邮件和支持工具。该政策被标注为通俗语言草稿，没有涉及遥测，除网站署名 Ryan Lucas 外也未指明数据控制者。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是开发者的声明，不是审计结果。PromptQuorum 没有检查网络流量；处理机密数据的用户应在关闭可选集成的情况下进行测试。',
          },
        ],
      },
      testing: {
        id: 'testing-status',
        title: '测试状态与局限',
        content: [
          '**开发者表示，R6 既没有进行过基于真实模型的全新运行，也没有在另一台干净的电脑上做过安装测试；PromptQuorum 同样没有测试过。**',
        ],
        items: [
          '**已验证。** 据发布证据页面，R6 压缩包、其可重复性以及全部 519 个载荷哈希均已核对，从 Gumroad 重新下载的文件与公布的校验和一致。',
          '**早先私有构建中通过。** 使用 GPT-OSS 20B 完成了一次 LM Studio 聊天和一段 CPU 语音片段，包括保存回答、回放音频和重新打开。',
          '**该构建中失败。** 最初的流式回复一直卡住，而这一事故的唯一原因没有最终确定。',
          '**仅离线修复。** R6 包含一项流式修复，已通过使用已保存文本和音频的离线解析器与浏览器测试；它没有再用真实模型运行过。',
          '**未验证。** 全新电脑上的安装、内置的默认 Qwen 路线、Full 工作站功能、仅 CPU、AMD 和 Intel GPU 的配置，以及其他硬件配置。',
          '**未说明。** 资料来源没有提到代码签名或 SmartScreen 的表现，产品页也没有给出许可证文本。',
        ],
        callouts: [
          {
            type: 'note',
            text: '开发者的清单声明，它不是安装认证，也不能证明你的硬件和模型配置一定可以工作。',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '来自开发者',
        content: [
          'SpiritBox 的开发者 Ryan Lucas 为本评测提供了以下留言。内容作为开发者本人的原话呈现，并非 PromptQuorum 独立的编辑评价：',
          '“SpiritBox Ultimate 的想法，是为运行本地 AI 的人，把 Guide 式对话、已保存聊天和语音回复集中到一个界面里。当前的抢先体验版面向已经在运行 LM Studio、且熟悉 Docker 的 Windows 用户。眼下的首要任务，是让这一核心体验变得可靠，并清楚地记录哪些已经验证、哪些尚未验证。”',
        ],
        note: '— Ryan Lucas，开发者',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁使用',
        items: [
          '**已经在用 LM Studio 且熟悉 Docker 的 Windows 用户。**',
          '**想在依赖它之前先完整试用这套组合的购买者。**',
          '**Mac 或 Linux 用户，以及想要现成安装程序的人，请看下面的替代方案。**',
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
            '应用': '[FriedrichAI](/zh/power-local-llm/friedrichai-review)',
            '平台': 'Windows',
            '价格 / 许可证': '$9.99 USD / 专有',
            '主要区别': '自带运行时的离线助手，在 Steam 上销售',
          },
          {
            '应用': '[Jan](/zh/power-local-llm/jan-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / Apache 2.0(变体)',
            '主要区别': '开源桌面聊天,支持 MCP 和本地 API 服务器',
          },
          {
            '应用': '[GPT4All](/zh/power-local-llm/gpt4all-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '开源桌面应用,支持本地文档聊天',
          },
          {
            '应用': '[LM Studio](/zh/power-local-llm/lm-studio-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / 专有',
            '主要区别': 'Ultimate 所连接的模型运行器和本地服务器',
          },
        ],
        note: '竞品信息变化频繁；请到各应用自己的页面确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '有更便宜的 SpiritBox 版本吗?',
            a: '有。开发者还销售免费的 Basic 和 $49 USD 的 Pro；Pro 增加 Piper 语音回复，需要两个 Docker 服务和 LM Studio。本评测不涉及这两个版本。',
          },
          {
            q: '可以退款吗?',
            a: '产品页没有写明自己的退款政策。购买者政策称，退款请求通过 Gumroad 订单以及购买时显示的条款处理，请在付款前阅读。',
          },
          {
            q: '可以商用或转售吗?',
            a: '购买者政策允许个人修改和排错，但商业再分发、转售、贴牌部署，或把 SpiritBox 当作自己的产品展示，都需要另行取得书面许可。',
          },
          {
            q: '如何确认我下载的文件完整?',
            a: '打开压缩包之前，请把 SpiritBox_Ultimate_v1.12_R6_Windows.zip（82,534,488 字节）的 SHA-256 校验和与发布证据页面上的数值进行比对。',
          },
          {
            q: '这篇评测有赞助吗?',
            a: '开发者只要求不付费的编辑收录，本页面不含任何联盟链接。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'SpiritBox Ultimate R6 是一个范围明确、并坦率说明保留事项的抢先体验产品，适合已有 LM Studio 环境、想亲自试用这套组合的 Windows 技术用户。需要把它与 Docker 和 WSL2 的前提条件、上文列出的未验证事项，以及我们没有亲自测试这一点放在一起权衡。如果只需要已保存聊天和提示词预设，用 [LM Studio](/zh/power-local-llm/lm-studio-review) 就够了；想要打包好的离线助手，可以对照 [FriedrichAI](/zh/power-local-llm/friedrichai-review)。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[SpiritBox Ultimate 产品页](https://spiritbox.ca/ultimate.html) — R6 的范围、价格、内容和测试局限，核实于 2026 年 10 月 16 日。',
          '[面向 LM Studio 的 Ultimate 设置清单](https://spiritbox.ca/lm-studio-ultimate-checklist.html) — 步骤、要求和验证状态，核实于 2026 年 10 月 16 日。',
          '[R6 发布证据](https://spiritbox.ca/release-status.html) — 版本标识、压缩包、校验和，以及通过、失败和未验证项，核实于 2026 年 10 月 16 日。',
          '[系统要求](https://spiritbox.ca/requirements.html) — 各版本的操作系统、容器和硬件说明，核实于 2026 年 10 月 16 日。',
          '[隐私](https://spiritbox.ca/privacy.html)和[购买者政策](https://spiritbox.ca/buyer-policies.html) — 数据流向、退款、许可和支持条款，核实于 2026 年 10 月 16 日。',
          '[SpiritBox 首页](https://spiritbox.ca/)和[关于](https://spiritbox.ca/about.html) — 版本概览、开发者背景和所在地，核实于 2026 年 10 月 16 日。',
          '[Gumroad 上的 SpiritBox Ultimate](https://spiritadmin5.gumroad.com/l/yseqxo) — 以美元计价的结账价格，核实于 2026 年 10 月 16 日。',
          '开发者留言 — 由 Ryan Lucas 于 2026 年 10 月通过电子邮件提供。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[LM Studio 评测](/zh/power-local-llm/lm-studio-review) — SpiritBox Ultimate 所连接的模型运行器和本地服务器。',
          '[Jan 评测](/zh/power-local-llm/jan-review) — 免费的开源桌面聊天应用。',
          '[GPT4All 评测](/zh/power-local-llm/gpt4all-review) — 采用 MIT 许可、支持文档聊天的桌面应用。',
          '[FriedrichAI 评测](/zh/power-local-llm/friedrichai-review) — 在 Steam 上一次性购买的 Windows 离线助手。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/spiritbox-ultimate-review-hero-ko.webp',
    title: 'SpiritBox Ultimate 리뷰: LM Studio 사용자를 위한 Windows 얼리 액세스',
    seoTitle: 'SpiritBox Ultimate 리뷰: Windows 얼리 액세스',
    intro: 'SpiritBox Ultimate는 이미 LM Studio를 사용하고 있으면서 Guide 기반 대화, 저장된 채팅, 음성 답변을 함께 평가해 보려는 사람을 위한 별도의 Windows 애플리케이션입니다. 이 리뷰는 현재 제공 중인 SpiritBox Ultimate v1.12 R6, 즉 Docker Desktop과 정상 작동하는 LM Studio 서버가 필요한 Windows 얼리 액세스(Early Access) 패키지에 초점을 맞춥니다. 개발자의 [Ultimate 제품 페이지](https://spiritbox.ca/ultimate.html), [구매자 체크리스트](https://spiritbox.ca/lm-studio-ultimate-checklist.html), [릴리스 증거](https://spiritbox.ca/release-status.html)(2026년 10월 16일 확인)와 개발자 Ryan Lucas의 코멘트를 근거로 합니다. PromptQuorum은 이 소프트웨어를 설치하거나 테스트하지 않았습니다.',
    metaDescription: 'SpiritBox Ultimate 리뷰: LM Studio 사용자용 Windows 얼리 액세스 앱. Guide 대화, 저장 채팅, 음성 답변 제공. Docker 필요, 테스트 한계 설명.',
    twitterDescription: 'SpiritBox Ultimate R6 리뷰: LM Studio 사용자를 위한 Windows 얼리 액세스 앱. Guide 대화, 저장된 채팅, 음성 답변을 제공합니다. Docker가 필요하며 미검증 항목을 정리했습니다.',
    audience: '이미 LM Studio를 사용하는 Windows 숙련 사용자로, SpiritBox Ultimate R6가 무엇을 포함하고 무엇을 요구하며 무엇이 검증되지 않았는지 정확히 알고 싶은 분.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'SpiritBox Ultimate 리뷰',
    targetKeywords: [
      'spiritbox ultimate 리뷰',
      'spiritbox ultimate lm studio',
      'spiritbox ultimate r6',
      'spiritbox 얼리 액세스 windows',
      'lm studio 음성 답변',
      'lm studio docker 인터페이스',
      'spiritbox vs lm studio',
    ],
    current_models_mentioned: [
      'GPT-OSS 20B',
      'Qwen',
    ],
    current_hardware_mentioned: [
      'Windows 10/11',
      'NVIDIA GPU (24 GB)',
      'Docker Desktop',
      'WSL2',
    ],
    leadAnswerBlock: '**SpiritBox Ultimate v1.12 R6는 이미 실행 중인 LM Studio 모델 위에 Guide 기반 대화, 저장된 채팅, 음성 답변을 더하는 Windows 얼리 액세스 애플리케이션입니다.** Docker에 익숙한 기술 지향 Windows 사용자를 대상으로 하며, 개발자 본인의 릴리스 증거에서도 실제 모델을 사용한 새 실행과 깨끗한 PC에서의 설치는 검증되지 않은 상태입니다.',
    quickAnswerTop: {
      ko: {
        question: 'SpiritBox Ultimate는 완성된 로컬 AI 워크스테이션입니까?',
        answer: '아니요, 현재 다운로드는 그렇지 않습니다. R6 제공 범위는 LM Studio 위에서 동작하는 핵심 대화 경험으로 한정되며, 개발자 사이트의 다른 곳에서 설명하는 더 넓은 워크스테이션 기능은 수락 증거의 범위에 포함되지 않습니다.',
        bullets: [
          'Windows 10 또는 11만 지원하며 macOS와 Linux는 검증되지 않았습니다.',
          '얼리 액세스 기간의 이메일 지원은 최선 노력 방식이며 응답 시간은 보장되지 않습니다.',
          '체크리스트는 문서화된 Minimal 프로필을 새 빈 폴더에 풀어 시작하도록 안내합니다.',
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
        label: 'SpiritBox Ultimate란 무엇인가?',
        anchor: 'what-is-spiritbox-ultimate',
      },
      {
        label: '어디서 받나요?',
        anchor: 'get-it',
      },
      {
        label: '요구 사항과 설정',
        anchor: 'requirements-setup',
      },
      {
        label: 'R6 패키지에 포함된 것과 제외된 것',
        anchor: 'package-scope',
      },
      {
        label: '개인정보와 데이터 흐름',
        anchor: 'privacy',
      },
      {
        label: '테스트 현황과 한계',
        anchor: 'testing-status',
      },
      {
        label: '개발자의 말',
        anchor: 'from-the-maker',
      },
      {
        label: '이런 분께 적합합니다',
        anchor: 'who-should-use',
      },
      {
        label: '경쟁 앱과 대안',
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
        label: '관련 읽을거리',
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
            text: 'SpiritBox Ultimate는 LM Studio를 대체하지 않고 함께 사용하는, 얼리 액세스 단계의 별도 Windows 애플리케이션입니다.',
          },
          {
            type: 'plain-terms',
            text: '모델과 LM Studio 서버는 직접 준비하고, SpiritBox Ultimate는 그 주변의 인터페이스와 Docker 기반 설정을 제공하며, 개발자는 아직 테스트되지 않은 부분을 솔직하게 밝히고 있습니다.',
          },
        ],
        items: [
          '가격과 라이선스: Gumroad에서 한 번 결제하는 $199 USD이며, 구매하면 포함된 라이선스에 따라 제공된 에디션을 사용할 수 있습니다.',
          '선행 조건: WSL2와 Linux 컨테이너를 갖춘 Docker Desktop, 그리고 정상 작동하는 LM Studio 모델과 서버.',
          '패키지 구성: 애플리케이션, Windows 설정 스크립트, LM Studio 첫 실행 안내, 서드파티 고지.',
          '개발자: 캐나다 앨버타 주의 Ryan Lucas이며, 이 릴리스를 기술에 익숙한 Windows 사용자 대상이라고 설명합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 개발자의 제품, 구매자 체크리스트, 요구 사항, 릴리스 증거, 개인정보, 정책 페이지(2026년 10월 16일 확인)와 개발자의 코멘트를 근거로 합니다. PromptQuorum은 SpiritBox Ultimate를 설치하거나 테스트하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-spiritbox-ultimate',
        title: 'SpiritBox Ultimate란 무엇인가?',
        content: [
          '**SpiritBox Ultimate는 모델 실행기가 아니라 별도의 Windows 애플리케이션으로, 이미 운영 중인 LM Studio 모델과 서버에 연결해 Guide 기반 대화, 저장된 채팅, 음성 답변을 하나의 화면에서 제공합니다.**',
          'SpiritBox에서 Guide는 재사용할 수 있는 대화 지침 모음이며, 개발자의 [Ultimate 제품 페이지](https://spiritbox.ca/ultimate.html) 첫머리에서도 이렇게 설명합니다. [에디션 개요](https://spiritbox.ca/)는 무료 Basic 에디션에 "custom Spirit Guides"를 나열합니다. 같은 페이지는 LM Studio에도 이미 저장된 채팅과 재사용 가능한 프롬프트 프리셋이 있다고 밝히고 있어, 개발자는 Ultimate를 이 세 가지 기능을 함께 평가하는 수단으로 제시합니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '어디서 받나요?',
        content: [
          '**SpiritBox Ultimate R6는 Gumroad에서 $199 USD에 한 번 결제하는 Windows 다운로드이며, 사이트는 가격을 USD로만 표시합니다.**',
        ],
        columns: [
          '항목',
          '받는 곳',
        ],
        rows: [
          {
            '항목': '구매',
            '받는 곳': '[Gumroad](https://spiritadmin5.gumroad.com/l/yseqxo), $199 USD',
          },
          {
            '항목': '웹사이트',
            '받는 곳': '[SpiritBox Ultimate 페이지](https://spiritbox.ca/ultimate.html)',
          },
          {
            '항목': '구매자 체크리스트',
            '받는 곳': '[LM Studio 설정 체크리스트](https://spiritbox.ca/lm-studio-ultimate-checklist.html)',
          },
          {
            '항목': '릴리스 증거',
            '받는 곳': '[R6 릴리스 증거](https://spiritbox.ca/release-status.html)',
          },
          {
            '항목': '개인정보 처리방침',
            '받는 곳': '[SpiritBox 개인정보 페이지](https://spiritbox.ca/privacy.html)',
          },
          {
            '항목': '구매 조건',
            '받는 곳': '[구매자 정책](https://spiritbox.ca/buyer-policies.html)',
          },
          {
            '항목': '다른 에디션',
            '받는 곳': '[에디션 비교](https://spiritbox.ca/products.html)',
          },
        ],
        note: '2026년 10월 16일에 확인한 버전: SpiritBox Ultimate v1.12 R6(Windows 얼리 액세스), 개발자의 릴리스 증거 페이지 기준입니다. 설정은 zip 압축 파일을 풀고 포함된 스크립트와 안내를 따르는 방식이며, 출처에는 설치 마법사에 대한 설명이 없고 개발자 수준의 환경(Docker Desktop, WSL2)이 필요합니다. 얼리 액세스 기간의 이메일 지원은 최선 노력 방식이며 응답 시간, 가동 시간, 설치 성공은 보장되지 않습니다.',
      },
      requirements: {
        id: 'requirements-setup',
        title: '요구 사항과 설정',
        content: [
          '**R6에는 Windows 10 또는 11, Compose가 포함된 Docker Desktop, WSL2와 Linux 컨테이너, 그리고 이미 정상 작동하는 LM Studio 모델과 서버가 필요하며, macOS와 Linux는 검증되지 않았습니다.**',
          '하드웨어 사양은 고정되어 있지 않습니다. 이 릴리스는 일반적인 최소 RAM이나 VRAM을 정하지 않았으며, 적합 여부는 LM Studio에서 이미 돌아가는 모델에 따라 달라집니다. 이전 테스트에서는 24 GB NVIDIA GPU를 사용했지만 이것이 명시된 최소 사양은 아닙니다. Ultimate에 대한 포트는 기재되어 있지 않습니다. 첫 다운로드와 선택형 연동에는 인터넷이 필요하지만, 핵심 로컬 사용에는 SpiritBox 클라우드 계정이 필요 없습니다.',
          '아래 단계는 개발자의 체크리스트를 따른 것이며 PromptQuorum은 직접 실행하지 않았습니다.',
        ],
        numberedItems: [
          {
            title: 'LM Studio 채팅에서 모델이 작동하는지 확인합니다',
            whyItMatters: '채팅이 작동한다고 해서 SpiritBox가 LM Studio 서버에 접속할 수 있다는 뜻은 아닙니다.',
          },
          {
            title: 'LM Studio 서버를 시작하고 정보를 기록합니다',
            whyItMatters: 'Developer 탭에서 시작한 뒤 모델 식별자와 서버 주소를 적어 둡니다. [LM Studio 서버 문서](https://lmstudio.ai/docs/developer/core/server)를 참고하십시오.',
          },
          {
            title: 'Docker Desktop을 설치하거나 확인합니다',
            whyItMatters: 'R6의 문서화된 경로에는 WSL2와 Linux 컨테이너가 필요합니다. [Docker의 Windows 설치 안내](https://docs.docker.com/desktop/setup/install/windows-install/)를 참고하십시오.',
          },
          {
            title: '백업한 뒤 새 빈 폴더에 압축을 풉니다',
            whyItMatters: '릴리스 페이지는 기존 백업을 보존하고, 이전 설치의 데이터를 덮어쓰거나 볼륨을 삭제하지 말라고 권고합니다.',
          },
          {
            title: 'Minimal 프로필로 LMSTUDIO_FIRST.md를 따릅니다',
            whyItMatters: '패키지에 포함된 안내서가 애플리케이션 연결 단계를 설명합니다.',
          },
        ],
      },
      scope: {
        id: 'package-scope',
        title: 'R6 패키지에 포함된 것과 제외된 것',
        content: [
          '**R6 다운로드에는 애플리케이션, Windows 설정 스크립트, LM Studio 첫 실행 안내, 서드파티 고지가 들어 있습니다.**',
        ],
        items: [
          '**모델.** 포함되어 있지 않으며, 하드웨어에 맞는 모델을 별도로 내려받아야 합니다.',
          '**워크플로 번들.** 구성과 테스트를 마친 n8n, Telegram, ComfyUI 번들은 포함되지 않으며, Proposal, Checklist, Repurpose, Telegram 후보도 R6에는 없습니다.',
          '**선택형 서비스.** 더 넓은 워크플로에는 별도의 설정과 검증이 필요합니다.',
          '**피하는 표현.** 개발자의 요청에 따라 이 리뷰는 해당 다운로드를 검증된 멀티 서비스 AI 워크스테이션, 입증된 GPU 오케스트레이션 시스템, 바로 쓸 수 있는 RAG 또는 자동화 번들로 설명하지 않습니다. R6 수락 증거가 이러한 설명을 뒷받침하지 않기 때문입니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 데이터 흐름',
        content: [
          '**개인정보 페이지에 따르면 SpiritBox는 핵심 추론, 대화, 프로젝트 파일, 데이터베이스를 사용자가 관리하는 시스템에 두도록 설계되었으며, 실제 데이터 위치는 최종 검증된 패키지에서 문서화되어야 합니다.**',
          '선택 기능은 설정하거나 사용할 때 데이터를 제3자에게 보낼 수 있습니다. 페이지는 모델 확보, 웹 검색, Telegram, 소프트웨어 업데이트, 외부 API, 결제, 이메일, 지원 도구를 나열합니다. 이 정책은 쉬운 말로 쓴 초안으로 표시되어 있고, 텔레메트리는 다루지 않으며, 사이트에 표기된 Ryan Lucas 외에 데이터 관리자를 명시하지 않습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발자의 선언이지 감사 결과가 아닙니다. PromptQuorum은 네트워크 트래픽을 점검하지 않았으므로, 기밀 데이터를 다루는 경우 선택 연동을 끈 상태에서 테스트하십시오.',
          },
        ],
      },
      testing: {
        id: 'testing-status',
        title: '테스트 현황과 한계',
        content: [
          '**개발자는 R6가 실제 모델을 사용한 새 실행도, 별도의 깨끗한 PC에서의 설치 테스트도 거치지 않았다고 밝히고 있으며, PromptQuorum도 테스트하지 않았습니다.**',
        ],
        items: [
          '**확인됨.** 릴리스 증거 페이지에 따르면 R6 아카이브, 재현성, 519개 페이로드 해시 전체가 확인되었고, Gumroad에서 새로 받은 파일이 공개된 체크섬과 일치했습니다.',
          '**이전 비공개 빌드에서 통과.** GPT-OSS 20B로 LM Studio 채팅 1회와 CPU 음성 클립 1개가 완료되었고, 저장된 답변, 오디오 재생, 다시 열기도 통과했습니다.',
          '**해당 빌드에서 실패.** 처음 스트리밍된 응답이 멈춘 채로 남았으며, 이 사고의 유일한 원인은 결정적으로 확인되지 않았습니다.',
          '**오프라인에서만 수정 확인.** R6에는 저장된 텍스트와 오디오로 오프라인 파서 및 브라우저 테스트를 통과한 스트리밍 수정이 포함되어 있지만, 실제 모델로 새로 실행한 적은 없습니다.',
          '**미검증.** 새 PC에서의 설치, 번들된 기본 Qwen 경로, Full 워크스테이션 기능, CPU 전용·AMD·Intel GPU 구성, 그 밖의 하드웨어 구성.',
          '**기재 없음.** 출처에는 코드 서명이나 SmartScreen 동작에 대한 언급이 없고, 제품 페이지에도 라이선스 본문이 게시되어 있지 않습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '개발자의 체크리스트는 이것이 설치 인증이 아니며, 사용자의 하드웨어와 모델 구성이 작동한다는 증거도 아니라고 밝히고 있습니다.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '개발자의 말',
        content: [
          'SpiritBox 개발자 Ryan Lucas가 이 리뷰를 위해 다음 코멘트를 보내 왔습니다. 개발자 본인의 말로 소개하는 것이며 PromptQuorum의 독립적인 편집 평가가 아닙니다.',
          '"SpiritBox Ultimate의 취지는 로컬 AI를 운영하는 사람들을 위해 Guide 기반 대화, 저장된 채팅, 음성 답변을 하나의 인터페이스로 모으는 것입니다. 현재 얼리 액세스 릴리스는 이미 LM Studio를 운영하고 있고 Docker에 익숙한 Windows 사용자를 대상으로 합니다. 당장의 우선순위는 이 핵심 경험을 믿을 수 있게 만들고, 무엇이 검증되었고 무엇이 검증되지 않았는지 명확히 문서화하는 것입니다."',
        ],
        note: '— Ryan Lucas, 개발자',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**이미 LM Studio를 사용하고 Docker에 익숙한 Windows 사용자.**',
          '**이 조합 전체를 믿고 쓰기 전에 시험해 보려는 구매자.**',
          '**Mac이나 Linux 사용자, 완성된 설치 프로그램을 원하는 분은 아래 대안을 살펴보십시오.**',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: [
          '앱',
          '플랫폼',
          '가격 / 라이선스',
          '핵심 차이',
        ],
        rows: [
          {
            '앱': '[FriedrichAI](/ko/power-local-llm/friedrichai-review)',
            '플랫폼': 'Windows',
            '가격 / 라이선스': '$9.99 USD / 독점',
            '핵심 차이': '자체 런타임을 갖춘 오프라인 어시스턴트, Steam에서 판매',
          },
          {
            '앱': '[Jan](/ko/power-local-llm/jan-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / Apache 2.0 (변형)',
            '핵심 차이': 'MCP와 로컬 API 서버를 갖춘 오픈 소스 데스크톱 채팅',
          },
          {
            '앱': '[GPT4All](/ko/power-local-llm/gpt4all-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '로컬 문서 채팅을 갖춘 오픈 소스 데스크톱 앱',
          },
          {
            '앱': '[LM Studio](/ko/power-local-llm/lm-studio-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / 독점',
            '핵심 차이': 'Ultimate가 연결하는 모델 실행기이자 로컬 서버',
          },
        ],
        note: '경쟁 앱의 정보는 자주 바뀝니다. 각 앱의 최신 가격, 라이선스, 플랫폼은 해당 공식 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '더 저렴한 SpiritBox 에디션이 있습니까?',
            a: '네. 개발자는 무료 Basic과 $49 USD의 Pro도 판매합니다. Pro는 Piper 음성 답변을 추가하며 LM Studio와 함께 두 개의 Docker 서비스가 필요합니다. 두 에디션 모두 이 리뷰의 대상이 아닙니다.',
          },
          {
            q: '환불받을 수 있습니까?',
            a: '제품 페이지에는 자체 환불 정책이 기재되어 있지 않습니다. 구매자 정책에 따르면 환불 요청은 Gumroad 주문과 구매 시 표시되는 조건을 통해 처리되므로, 결제 전에 확인하십시오.',
          },
          {
            q: '상업적으로 사용하거나 재판매해도 됩니까?',
            a: '구매자 정책은 개인적인 수정과 문제 해결을 허용하지만, 상업적 재배포, 재판매, 화이트 라벨 배포, SpiritBox를 자사 제품으로 내세우는 행위에는 별도의 서면 허가가 필요합니다.',
          },
          {
            q: '내려받은 파일이 온전한지 어떻게 확인합니까?',
            a: '압축 파일을 열기 전에 SpiritBox_Ultimate_v1.12_R6_Windows.zip(82,534,488바이트)의 SHA-256 체크섬을 릴리스 증거 페이지의 값과 비교하십시오.',
          },
          {
            q: '이 리뷰는 후원을 받았습니까?',
            a: '개발자는 무료 편집 게재만 요청했으며, 이 페이지에는 제휴 링크가 없습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'SpiritBox Ultimate R6는 범위를 좁히고 유보 사항을 솔직하게 밝힌 얼리 액세스 제품으로, 이미 LM Studio 환경을 갖추고 이 조합을 직접 시험해 보려는 기술 지향 Windows 사용자에게 맞습니다. Docker와 WSL2라는 선행 조건, 위에 정리한 미검증 항목, 그리고 저희가 직접 테스트하지 않았다는 점을 함께 고려하십시오. 저장된 채팅과 프롬프트 프리셋만 필요하다면 [LM Studio](/ko/power-local-llm/lm-studio-review)만으로 충분하고, 패키지로 완성된 오프라인 어시스턴트를 찾는다면 [FriedrichAI](/ko/power-local-llm/friedrichai-review)와 비교해 볼 수 있습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[SpiritBox Ultimate 제품 페이지](https://spiritbox.ca/ultimate.html) — R6의 범위, 가격, 구성, 테스트 한계. 2026년 10월 16일 확인.',
          '[LM Studio용 Ultimate 설정 체크리스트](https://spiritbox.ca/lm-studio-ultimate-checklist.html) — 단계, 요구 사항, 검증 현황. 2026년 10월 16일 확인.',
          '[R6 릴리스 증거](https://spiritbox.ca/release-status.html) — 버전 표기, 아카이브, 체크섬, 통과·실패·미검증 항목. 2026년 10월 16일 확인.',
          '[요구 사항](https://spiritbox.ca/requirements.html) — 에디션별 운영체제, 컨테이너, 하드웨어 안내. 2026년 10월 16일 확인.',
          '[개인정보](https://spiritbox.ca/privacy.html) 및 [구매자 정책](https://spiritbox.ca/buyer-policies.html) — 데이터 흐름, 환불, 라이선스, 지원 조건. 2026년 10월 16일 확인.',
          '[SpiritBox 홈](https://spiritbox.ca/) 및 [소개](https://spiritbox.ca/about.html) — 에디션 개요, 개발자 이력과 소재지. 2026년 10월 16일 확인.',
          '[Gumroad의 SpiritBox Ultimate](https://spiritadmin5.gumroad.com/l/yseqxo) — USD 결제 가격. 2026년 10월 16일 확인.',
          '개발자 코멘트 — Ryan Lucas가 2026년 10월 이메일로 제공.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[LM Studio 리뷰](/ko/power-local-llm/lm-studio-review) — SpiritBox Ultimate가 연결하는 모델 실행기이자 로컬 서버.',
          '[Jan 리뷰](/ko/power-local-llm/jan-review) — 무료 오픈 소스 데스크톱 채팅 앱.',
          '[GPT4All 리뷰](/ko/power-local-llm/gpt4all-review) — 문서 채팅을 갖춘 MIT 라이선스 데스크톱 앱.',
          '[FriedrichAI 리뷰](/ko/power-local-llm/friedrichai-review) — Steam에서 한 번 구매하는 오프라인 Windows 어시스턴트.',
        ],
      },
    },
  },
}
