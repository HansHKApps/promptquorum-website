// Linkwarden Review: Self-Hosted Bookmarks with Local AI Tagging
// Slug: linkwarden-review
// Companion to: karakeep-review, blinko-review
// Sources: linkwarden.app (home, pricing, privacy-policy), docs.linkwarden.app (self-hosting setup, AI tagging, environment variables, lighter setup,
// preservation), github.com/linkwarden/linkwarden (README, docker-compose.yml, releases API), the App Store lookup API (id6752550960) and the
// Google Play listing (app.linkwarden), all checked 2026-10-24 — no hands-on testing. Cloud price is the site's USD list price ($3 per user per month
// billed yearly), never converted; the iOS app was free in the US, DE and JP storefronts.

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
    heroImage: '/images/linkwarden-review-hero-en.webp',
    title: 'Linkwarden Review: Self-Hosted Bookmarks with Local AI Tagging',
    seoTitle: 'Linkwarden Review: Self-Hosted Bookmarks, Local AI Tags',
    intro: 'Linkwarden is an open-source (AGPL-3.0) bookmark manager from [Linkwarden Inc.](https://linkwarden.app) that saves a copy of every page you bookmark and can tag links automatically with an AI model you configure, either a local Ollama model or a cloud provider. You can host it yourself with Docker or pay for the maker\'s Cloud edition. This review is based on the maker\'s website and documentation, the GitHub repository and the App Store and Google Play listings, checked on 24 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription: 'Linkwarden review: self-hosted bookmark manager that archives pages and tags links with local Ollama or a cloud AI. Docker setup, Cloud price; untested.',
    twitterDescription: 'Linkwarden review: self-hosted bookmarks that archive every page, with optional AI tagging through local Ollama or a cloud provider. What the sources confirm.',
    audience: 'Self-hosters and privacy-minded readers who want a bookmark archive with optional AI tagging and need to know whether the tagging can stay on their own hardware.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Linkwarden review',
    targetKeywords: [
      'linkwarden review',
      'linkwarden ollama',
      'linkwarden ai tagging',
      'self-hosted bookmark manager',
      'linkwarden docker self-host',
      'linkwarden vs karakeep',
      'bookmark manager with local ai',
    ],
    current_models_mentioned: ['phi3:mini-4k'],
    current_hardware_mentioned: ['Docker', 'PostgreSQL', 'Meilisearch'],
    leadAnswerBlock: '**Linkwarden (version 2.16.3, released on 9 September 2026) is an AGPL-3.0 bookmark manager that archives a copy of each page you save and can tag links with an AI model you configure.** You can self-host it for free or use the paid Cloud edition.',
    quickAnswerTop: {
      en: {
        question: 'Can Linkwarden tag bookmarks with a local Ollama model?',
        answer: 'Per the project\'s documentation, yes: you set the address of your Ollama server and a model name in the `.env` file, and the documentation suggests a small model such as phi3:mini-4k is enough. It can also use OpenAI-compatible and other cloud providers instead.',
        bullets: [
          'Each saved link is stored as a readable view, a single HTML file, a screenshot and a PDF.',
          'The reader view supports highlights and annotations.',
          'Collections can be shared publicly or with team members.',
          'Native iOS and Android apps and a browser extension are listed.',
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
        label: 'What Is Linkwarden?',
        anchor: 'what-is-linkwarden',
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
        label: 'How to Self-Host',
        anchor: 'getting-started',
      },
      {
        label: 'AI Tagging: Local Ollama or Cloud',
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
            text: 'Linkwarden is an open-source bookmark manager that stores a copy of every saved page on a server you control and can add tags with an AI model that runs locally or in the cloud.',
          },
          { type: 'plain-terms', text: 'You save a link, a background worker opens the page in a browser and keeps a copy, and an AI model you have set up suggests tags so you can find it later.' },
        ],
        items: [
          'Maintenance: the latest release, 2.16.3, is from 9 September 2026 and the repository received commits on 24 October 2026, so no stale-project warning applies.',
          'AI tagging: off until you configure a provider on a self-hosted server; the maker site lists it as optional on Cloud.',
          'Cost: self-hosting is free; the managed Cloud edition is a paid subscription.',
          'Clients: web app, mobile apps and a browser extension.',
          'Testing: the sources were read, nothing was installed or benchmarked by PromptQuorum.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the maker\'s website and documentation, the GitHub repository and the app store listings, checked on 24 October 2026. PromptQuorum has not installed Linkwarden, run its AI tagging or measured its resource use.',
          },
        ],
      },
      overview: {
        id: 'what-is-linkwarden',
        title: 'What Is Linkwarden?',
        content: [
          '**Linkwarden is a collaborative bookmark manager that keeps a copy of each saved page, so the content survives if the original goes offline.** The README describes it as a self-hosted, open-source tool to collect, read, annotate and preserve pages, published by the company behind linkwarden.app, and the source is licensed AGPL-3.0.',
          'On each link a background worker produces up to four formats: a readable article view, a complete single-file HTML copy, a full-page screenshot and a PDF; sending the address to the Wayback Machine is an optional extra and is off by default per the docs. Links are organised in collections and sub-collections with tags, searched with full-text search, and can be shared with the public or with team members who have per-member permissions.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Linkwarden is a web app you either host yourself or rent as Linkwarden Cloud; the iOS and Android apps and the browser extension connect to one of the two.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          { Option: 'Linkwarden Cloud', 'How to get it': '[cloud.linkwarden.app](https://cloud.linkwarden.app), paid subscription' },
          { Option: 'Cloud price', 'How to get it': '14-day free trial, then $3 per user per month billed yearly (USD, as listed on the site)' },
          { Option: 'iPhone and iPad', 'How to get it': '[Linkwarden on the App Store](https://apps.apple.com/app/linkwarden/id6752550960), free download' },
          { Option: 'Android', 'How to get it': '[Linkwarden on Google Play](https://play.google.com/store/apps/details?id=app.linkwarden), lists in-app purchases' },
          { Option: 'Self-hosted (Docker)', 'How to get it': 'Free; follow the [setup guide](https://docs.linkwarden.app/self-hosting/setup), terminal required' },
          { Option: 'Browser extension', 'How to get it': 'Chrome, Firefox and Safari, see the [extension guide](https://docs.linkwarden.app/getting-started/browser-extension)' },
          { Option: 'Website', 'How to get it': '[linkwarden.app](https://linkwarden.app)' },
          { Option: 'Privacy policy', 'How to get it': '[linkwarden.app/privacy-policy](https://linkwarden.app/privacy-policy)' },
          { Option: 'Source code', 'How to get it': '[github.com/linkwarden/linkwarden](https://github.com/linkwarden/linkwarden), AGPL-3.0' },
        ],
        note: 'Version reviewed: 2.16.3 (GitHub release of 9 September 2026). The iOS app is at 1.4.4 and was updated on 12 October 2026 per the App Store, and the Google Play page also shows 12 October 2026. The App Store price was free in the US, German and Japanese storefronts; the Cloud price is shown in US dollars only, and no euro or yen price was found. There is no installer for the server: it is Docker or a manual Node and PostgreSQL install.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**The self-hosting guide names 4 GB of memory as a comfortable starting point, any 2-core CPU and about 1.5 GB of disk for the image.**',
        ],
        columns: ['Item', 'What the sources say'],
        rows: [
          { Item: 'Server', 'What the sources say': 'Docker Compose with three containers: Linkwarden, PostgreSQL 16 and Meilisearch; images for x86-64 and ARM64' },
          { Item: 'Secrets', 'What the sources say': '`NEXTAUTH_SECRET`, `POSTGRES_PASSWORD` and `MEILI_MASTER_KEY` must be changed from the sample values' },
          { Item: 'Local AI', 'What the sources say': 'A separate Ollama server and a pulled model if you want local tagging; no GPU is required by Linkwarden itself' },
          { Item: 'Mobile apps', 'What the sources say': 'iOS 15.1 or later per the App Store; they need a Cloud subscription or your own server' },
          { Item: 'Manual install', 'What the sources say': 'Node 20 or later, Yarn, PostgreSQL 16 or later; Meilisearch is optional for advanced search' },
        ],
        note: 'The guide describes the Docker route as the easier one; the manual install is aimed at a more technical audience.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Self-Host',
        content: [
          '**The steps follow the official setup guide for Docker Compose; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          { title: 'Download the files', whyItMatters: 'Fetch `docker-compose.yml` and `.env.sample` from the repository and save the sample as `.env`.' },
          { title: 'Set the secrets', whyItMatters: 'Edit `.env` and replace `NEXTAUTH_SECRET`, `POSTGRES_PASSWORD` and `MEILI_MASTER_KEY` with three different secret phrases.' },
          { title: 'Start the stack', whyItMatters: 'Run `docker compose up`; after a few minutes the app answers on port 3000.' },
          { title: 'Add AI tagging', whyItMatters: 'Optionally add the Ollama or OpenAI-compatible variables from the next section, restart the stack and enable tagging in Settings, Preferences.' },
        ],
      },
      features: {
        id: 'key-features',
        title: 'AI Tagging: Local Ollama or Cloud',
        content: [
          '**Tagging is optional: you choose between a local Ollama model and a cloud provider by filling in environment variables.**',
        ],
        items: [
          '**Local with Ollama.** Set `NEXT_PUBLIC_OLLAMA_ENDPOINT_URL` to your Ollama server, for example `http://localhost:11434`, and `OLLAMA_MODEL` to a pulled model; the docs say a lightweight model such as phi3:mini-4k is enough.',
          '**Cloud or compatible API.** `OPENAI_API_KEY` and `OPENAI_MODEL` work with OpenAI, and `CUSTOM_OPENAI_BASE_URL` points the same variables at any OpenAI-compatible service, with Gemini given as an example in the docs.',
          '**More providers.** The environment-variable reference also lists Azure OpenAI, Anthropic, OpenRouter and Perplexity.',
          '**Two modes.** Linkwarden can generate tags automatically when a link is added, or assign tags from a predefined list you provide; both are switched on under Settings, Preferences.',
          '**Background batches.** Tagging runs in the background worker together with archiving, in batches of five links by default (`ARCHIVE_TAKE_COUNT`).',
        ],
        note: 'The tagging is described as part of the 2.9 release; the usage page says it analyses the content of your links, but PromptQuorum did not test what text is sent to the model or how good the tags are.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**When you self-host, links, tags and preserved copies are stored in your own PostgreSQL database and data folder.** The server fetches every saved page itself in a headless browser, so the server\'s network sees each address you bookmark. With a local Ollama endpoint the tagging request goes to the address you configured; with a cloud provider the tagging request goes to that provider using your API key.',
          'The Cloud edition is run by the maker, and its [privacy policy](https://linkwarden.app/privacy-policy) is dated 31 July 2023, which is before the mobile apps appeared; it names Ontario, Canada as its country and the company as GDPR data controller. The Google Play data-safety section says no data is shared with third parties and that app info and performance data may be collected.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maker\'s statements and the documentation, not audit results. PromptQuorum has not inspected network traffic, and the documentation does not say which AI provider the Cloud edition uses for its optional tagging.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Self-hosters** who already run Docker and want pages archived on their own server.',
          '**Researchers and teams** who share collections and need annotated, preserved copies of sources.',
          '**Ollama users** who want automatic tags without sending page text to a cloud provider.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Tag quality.** PromptQuorum did not run the tagging, so accuracy, speed and the behaviour of small local models are unknown.',
          '**What the model sees.** The docs do not state how much of a page is sent for tagging, so the privacy gain of a local model is the documented endpoint behaviour, not a measured result.',
          '**Local wording.** The usage page says the feature "uses a local AI model", while the setup page also lists cloud providers; the setup page is the more detailed source and is the one used here.',
          '**Cloud AI and storage.** The Cloud edition lists optional AI tagging without naming a provider, and the answer to where its data is stored was not readable on the pricing page.',
          '**Resource use.** The docs give idle memory of about 350 MB since version 2.15 as the maker\'s figure; PromptQuorum did not measure it.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            App: '[Karakeep](/power-local-llm/karakeep-review)',
            Platforms: 'Web, iOS, Android',
            'Price / license': 'Free / AGPL-3.0',
            'Key difference': 'Self-hosted bookmark and notes app with AI tagging through OpenAI or Ollama; see its review for summaries and search',
          },
          {
            App: '[Blinko](/power-local-llm/blinko-review)',
            Platforms: 'Web (self-hosted)',
            'Price / license': 'Free / GPL-3.0',
            'Key difference': 'Self-hosted note-taking app with AI search over your notes; not a page archiver',
          },
        ],
        note: 'Karakeep is the closest match: both are self-hosted bookmark tools with optional AI tagging. Confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Which provider is used if I configure more than one?',
            a: 'The environment-variable reference says Linkwarden tries them in this order: OpenAI-compatible, Azure OpenAI, Anthropic, Ollama, OpenRouter, then Perplexity. A cloud API key left in `.env` can therefore take precedence over Ollama.',
          },
          {
            q: 'Do the mobile apps work without a server?',
            a: 'No. The App Store description states that Linkwarden needs either a Linkwarden Cloud subscription or a connection to your own self-hosted server; the apps list offline support for saved content.',
          },
          {
            q: 'Can I run it on a small machine?',
            a: 'The docs say the 2.15 rewrite lowered idle memory, and `DISABLE_BROWSER=true` skips screenshots, PDFs, HTML copies and the reader view in exchange for the lowest memory use.',
          },
          { q: 'Is there a limit on the number of links?', a: 'The pricing page lists 30,000 links per user on Cloud, and the self-hosting reference sets `MAX_LINKS_PER_USER` to 30000 by default.' },
          { q: 'Can I leave Linkwarden Cloud later?', a: 'The pricing page says links can be exported at any time and there is no lock-in; the docs also list import and export under Usage.' },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Linkwarden is an actively developed, open-source way to keep an archive of the pages you bookmark, and its documented Ollama support lets the tagging step stay on your own hardware. Against that, the self-hosted stack needs three containers and a terminal, the mobile apps depend on a server, the Cloud edition is a paid service with a dated privacy policy, and none of the AI behaviour was tested here. It suits self-hosters who already run Docker and want a page archive with optional local tagging; anyone who wants a zero-setup experience should compare the Cloud terms with Karakeep first.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Linkwarden website](https://linkwarden.app) — features, pricing and app links, checked 24 October 2026.',
          '[Self-hosting setup](https://docs.linkwarden.app/self-hosting/setup) and [AI tagging](https://docs.linkwarden.app/self-hosting/ai-worker) — requirements, Docker steps and provider variables, checked 24 October 2026.',
          '[Environment variables](https://docs.linkwarden.app/self-hosting/environment-variables) — AI provider order and defaults, checked 24 October 2026.',
          '[Linkwarden on GitHub](https://github.com/linkwarden/linkwarden) — README, license and release v2.16.3, checked 24 October 2026.',
          '[App Store](https://apps.apple.com/app/linkwarden/id6752550960) and [Google Play](https://play.google.com/store/apps/details?id=app.linkwarden) listings — app versions and requirements, checked 24 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Karakeep Review](/power-local-llm/karakeep-review) — a self-hosted bookmark and notes app with AI tagging.',
          '[Blinko Review](/power-local-llm/blinko-review) — a self-hosted note-taking app with AI search.',
          '[Ollama](https://ollama.com) — the local model runner Linkwarden can call for tagging.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Linkwarden Review: Self-Hosted Bookmarks with Local AI Tagging',
      description: 'Linkwarden review: a self-hosted bookmark manager that archives pages and tags links with a local Ollama model or a cloud AI. Setup, pricing, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/linkwarden-review',
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
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: {
        '@type': 'Audience',
        audienceType: 'Self-hosters evaluating a bookmark manager with optional local AI tagging',
      },
      about: [
        { '@type': 'Thing', name: 'Linkwarden' },
        { '@type': 'Thing', name: 'Bookmark manager' },
        { '@type': 'Thing', name: 'Self-hosting' },
        { '@type': 'Thing', name: 'Ollama' },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/linkwarden-review',
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
          name: 'Linkwarden Review',
          item: 'https://www.promptquorum.com/power-local-llm/linkwarden-review',
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
    heroImage: '/images/linkwarden-review-hero-de.webp',
    title: 'Linkwarden-Rezension: Selbst gehostete Lesezeichen mit lokaler KI',
    seoTitle: 'Linkwarden-Rezension: Lesezeichen selbst hosten, KI-Tags',
    intro: 'Linkwarden ist ein Open-Source-Lesezeichenmanager (AGPL-3.0) von [Linkwarden Inc.](https://linkwarden.app), der von jeder gespeicherten Seite eine Kopie sichert und Links automatisch mit einem von Ihnen konfigurierten KI-Modell verschlagworten kann, entweder mit einem lokalen Ollama-Modell oder mit einem Cloud-Anbieter. Sie können ihn per Docker selbst betreiben oder die kostenpflichtige Cloud-Variante des Herstellers nutzen. Diese Rezension stützt sich auf Website und Dokumentation des Herstellers, das GitHub-Repository sowie die Einträge im App Store und bei Google Play, geprüft am 24. Oktober 2026; PromptQuorum hat die App nicht selbst getestet.',
    metaDescription: 'Linkwarden-Rezension: selbst gehosteter Lesezeichenmanager, der Seiten archiviert und Links mit Ollama lokal oder Cloud-KI verschlagwortet. Ungetestet.',
    twitterDescription: 'Linkwarden-Rezension: selbst gehostete Lesezeichen, die jede Seite archivieren, mit optionaler KI-Verschlagwortung über lokales Ollama oder einen Cloud-Anbieter.',
    audience: 'Selbst-Hoster und datenschutzbewusste Leser, die ein Lesezeichen-Archiv mit optionaler KI-Verschlagwortung suchen und wissen müssen, ob die Verschlagwortung auf der eigenen Hardware bleiben kann.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Linkwarden Rezension',
    targetKeywords: [
      'linkwarden rezension',
      'linkwarden ollama',
      'linkwarden ki verschlagwortung',
      'selbst gehosteter lesezeichenmanager',
      'linkwarden docker selbst hosten',
      'linkwarden vs karakeep',
      'lesezeichenmanager mit lokaler ki',
    ],
    current_models_mentioned: ['phi3:mini-4k'],
    current_hardware_mentioned: ['Docker', 'PostgreSQL', 'Meilisearch'],
    leadAnswerBlock: '**Linkwarden (Version 2.16.3, veröffentlicht am 9. September 2026) ist ein Lesezeichenmanager unter AGPL-3.0, der von jeder gespeicherten Seite eine Kopie archiviert und Links mit einem von Ihnen konfigurierten KI-Modell verschlagworten kann.** Sie können ihn kostenlos selbst hosten oder die kostenpflichtige Cloud-Variante nutzen.',
    quickAnswerTop: {
      de: {
        question: 'Kann Linkwarden Lesezeichen mit einem lokalen Ollama-Modell verschlagworten?',
        answer: 'Laut Dokumentation des Projekts ja: Sie tragen die Adresse Ihres Ollama-Servers und einen Modellnamen in die `.env`-Datei ein, und ein kleines Modell wie phi3:mini-4k genügt nach Angaben der Dokumentation. Alternativ lassen sich OpenAI-kompatible und andere Cloud-Anbieter nutzen.',
        bullets: [
          'Jeder gespeicherte Link wird als Leseansicht, einzelne HTML-Datei, Screenshot und PDF abgelegt.',
          'Die Leseansicht unterstützt Markierungen und Anmerkungen.',
          'Sammlungen lassen sich öffentlich oder mit Teammitgliedern teilen.',
          'Native iOS- und Android-Apps sowie eine Browser-Erweiterung sind aufgeführt.',
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
        label: 'Was ist Linkwarden?',
        anchor: 'what-is-linkwarden',
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
        label: 'So hosten Sie selbst',
        anchor: 'getting-started',
      },
      {
        label: 'KI-Verschlagwortung: lokal mit Ollama oder in der Cloud',
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
            text: 'Linkwarden ist ein Open-Source-Lesezeichenmanager, der eine Kopie jeder gespeicherten Seite auf einem von Ihnen kontrollierten Server ablegt und Tags mit einem lokalen oder Cloud-KI-Modell ergänzen kann.',
          },
          {
            type: 'plain-terms',
            text: 'Sie speichern einen Link, ein Hintergrundprozess öffnet die Seite in einem Browser und behält eine Kopie, und ein von Ihnen eingerichtetes KI-Modell schlägt Tags vor, damit Sie die Seite später wiederfinden.',
          },
        ],
        items: [
          'Pflege: Die neueste Version 2.16.3 stammt vom 9. September 2026, und das Repository erhielt am 24. Oktober 2026 Commits; ein Warnhinweis für veraltete Projekte entfällt daher.',
          'KI-Verschlagwortung: auf einem selbst gehosteten Server aus, bis Sie einen Anbieter konfigurieren; die Herstellerseite nennt sie in der Cloud optional.',
          'Kosten: Selbst hosten ist kostenlos; die verwaltete Cloud-Variante ist ein kostenpflichtiges Abo.',
          'Clients: Web-App, iOS- und Android-Apps und eine Browser-Erweiterung.',
          'Test: Die Quellen wurden gelesen; PromptQuorum hat nichts installiert oder gemessen.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf Website und Dokumentation des Herstellers, das GitHub-Repository und die Store-Einträge, geprüft am 24. Oktober 2026. PromptQuorum hat Linkwarden weder installiert noch die KI-Verschlagwortung ausgeführt oder den Ressourcenbedarf gemessen.',
          },
        ],
      },
      overview: {
        id: 'what-is-linkwarden',
        title: 'Was ist Linkwarden?',
        content: [
          '**Linkwarden ist ein kollaborativer Lesezeichenmanager, der von jeder gespeicherten Seite eine Kopie aufbewahrt, sodass der Inhalt erhalten bleibt, wenn das Original verschwindet.** Die README beschreibt ihn als selbst gehostetes Open-Source-Werkzeug zum Sammeln, Lesen, Kommentieren und Bewahren von Seiten, herausgegeben von dem Unternehmen hinter linkwarden.app; der Quellcode steht unter AGPL-3.0.',
          'Zu jedem Link erzeugt ein Hintergrundprozess bis zu vier Formate: eine lesbare Artikelansicht, eine vollständige HTML-Einzeldatei, einen Screenshot der ganzen Seite und ein PDF; das Senden der Adresse an die Wayback Machine ist laut Dokumentation ein optionales Extra und standardmäßig aus. Links werden in Sammlungen und Untersammlungen mit Tags geordnet, per Volltextsuche gefunden und lassen sich öffentlich oder mit Teammitgliedern teilen, deren Rechte einzeln einstellbar sind.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Linkwarden ist eine Web-App, die Sie selbst hosten oder als Linkwarden Cloud mieten; die iOS- und Android-Apps und die Browser-Erweiterung verbinden sich mit einer der beiden Varianten.**',
        ],
        columns: ['Option', 'Bezug'],
        rows: [
          { Option: 'Linkwarden Cloud', Bezug: '[cloud.linkwarden.app](https://cloud.linkwarden.app), kostenpflichtiges Abo' },
          { Option: 'Cloud-Preis', Bezug: '14 Tage kostenlos testen, danach $3 pro Nutzer und Monat bei jährlicher Zahlung (USD, wie auf der Website angegeben)' },
          { Option: 'iPhone und iPad', Bezug: '[Linkwarden im App Store](https://apps.apple.com/app/linkwarden/id6752550960), kostenloser Download' },
          { Option: 'Android', Bezug: '[Linkwarden bei Google Play](https://play.google.com/store/apps/details?id=app.linkwarden), nennt In-App-Käufe' },
          { Option: 'Selbst gehostet (Docker)', Bezug: 'Kostenlos; dem [Einrichtungsleitfaden](https://docs.linkwarden.app/self-hosting/setup) folgen, Terminal erforderlich' },
          { Option: 'Browser-Erweiterung', Bezug: 'Chrome, Firefox und Safari, siehe die [Anleitung zur Erweiterung](https://docs.linkwarden.app/getting-started/browser-extension)' },
          { Option: 'Website', Bezug: '[linkwarden.app](https://linkwarden.app)' },
          { Option: 'Datenschutzerklärung', Bezug: '[linkwarden.app/privacy-policy](https://linkwarden.app/privacy-policy)' },
          { Option: 'Quellcode', Bezug: '[github.com/linkwarden/linkwarden](https://github.com/linkwarden/linkwarden), AGPL-3.0' },
        ],
        note: 'Geprüfte Version: 2.16.3 (GitHub-Release vom 9. September 2026). Die iOS-App steht laut App Store bei 1.4.4 und wurde am 12. Oktober 2026 aktualisiert; die Google-Play-Seite nennt ebenfalls den 12. Oktober 2026. Im App Store war die App in den Stores für die USA, Deutschland und Japan kostenlos; der Cloud-Preis wird nur in US-Dollar angezeigt, ein Euro- oder Yen-Preis wurde nicht gefunden. Für den Server gibt es kein Installationsprogramm: nötig ist Docker oder eine manuelle Installation mit Node und PostgreSQL.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
          '**Der Leitfaden zum Selbsthosting nennt 4 GB Arbeitsspeicher als komfortablen Ausgangspunkt, eine beliebige CPU mit 2 Kernen und etwa 1,5 GB Speicherplatz für das Image.**',
        ],
        columns: ['Punkt', 'Angaben der Quellen'],
        rows: [
          { Punkt: 'Server', 'Angaben der Quellen': 'Docker Compose mit drei Containern: Linkwarden, PostgreSQL 16 und Meilisearch; Images für x86-64 und ARM64' },
          { Punkt: 'Geheimnisse', 'Angaben der Quellen': '`NEXTAUTH_SECRET`, `POSTGRES_PASSWORD` und `MEILI_MASTER_KEY` müssen gegenüber den Beispielwerten geändert werden' },
          { Punkt: 'Lokale KI', 'Angaben der Quellen': 'Ein separater Ollama-Server und ein geladenes Modell, wenn Sie lokal verschlagworten wollen; Linkwarden selbst braucht keine GPU' },
          { Punkt: 'Mobile Apps', 'Angaben der Quellen': 'Laut App Store iOS 15.1 oder neuer; sie benötigen ein Cloud-Abo oder einen eigenen Server' },
          { Punkt: 'Manuelle Installation', 'Angaben der Quellen': 'Node 20 oder neuer, Yarn, PostgreSQL 16 oder neuer; Meilisearch ist für die erweiterte Suche optional' },
        ],
        note: 'Der Leitfaden beschreibt den Docker-Weg als den einfacheren; die manuelle Installation richtet sich an ein eher technisches Publikum.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So hosten Sie selbst',
        content: [
          '**Die Schritte folgen dem offiziellen Einrichtungsleitfaden für Docker Compose; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          { title: 'Dateien herunterladen', whyItMatters: 'Laden Sie `docker-compose.yml` und `.env.sample` aus dem Repository und speichern Sie die Beispieldatei als `.env`.' },
          { title: 'Geheimnisse festlegen', whyItMatters: 'Ersetzen Sie in `.env` die Werte für `NEXTAUTH_SECRET`, `POSTGRES_PASSWORD` und `MEILI_MASTER_KEY` durch drei verschiedene geheime Phrasen.' },
          { title: 'Stack starten', whyItMatters: 'Führen Sie `docker compose up` aus; nach einigen Minuten antwortet die App auf Port 3000.' },
          {
            title: 'KI-Verschlagwortung ergänzen',
            whyItMatters: 'Fügen Sie optional die Ollama- oder OpenAI-kompatiblen Variablen aus dem nächsten Abschnitt hinzu, starten Sie den Stack neu und aktivieren Sie die Verschlagwortung unter Einstellungen, Präferenzen.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'KI-Verschlagwortung: lokal mit Ollama oder in der Cloud',
        content: [
          '**Die Verschlagwortung ist optional: Über Umgebungsvariablen wählen Sie zwischen einem lokalen Ollama-Modell und einem Cloud-Anbieter.**',
        ],
        items: [
          '**Lokal mit Ollama.** Setzen Sie `NEXT_PUBLIC_OLLAMA_ENDPOINT_URL` auf Ihren Ollama-Server, zum Beispiel `http://localhost:11434`, und `OLLAMA_MODEL` auf ein geladenes Modell; laut Dokumentation genügt ein leichtes Modell wie phi3:mini-4k.',
          '**Cloud oder kompatible API.** `OPENAI_API_KEY` und `OPENAI_MODEL` funktionieren mit OpenAI, und `CUSTOM_OPENAI_BASE_URL` richtet dieselben Variablen auf jeden OpenAI-kompatiblen Dienst; als Beispiel nennt die Dokumentation Gemini.',
          '**Weitere Anbieter.** Die Referenz der Umgebungsvariablen listet außerdem Azure OpenAI, Anthropic, OpenRouter und Perplexity.',
          '**Zwei Modi.** Linkwarden kann Tags beim Hinzufügen eines Links automatisch erzeugen oder Tags aus einer vorgegebenen Liste zuweisen; beides schalten Sie unter Einstellungen, Präferenzen ein.',
          '**Hintergrund-Stapel.** Die Verschlagwortung läuft gemeinsam mit der Archivierung im Hintergrundprozess, standardmäßig in Stapeln von fünf Links (`ARCHIVE_TAKE_COUNT`).',
        ],
        note: 'Die Verschlagwortung wird als Teil der Version 2.9 beschrieben; die Nutzungsseite sagt, sie analysiere den Inhalt Ihrer Links, doch PromptQuorum hat nicht getestet, welcher Text an das Modell geht oder wie gut die Tags sind.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Beim Selbsthosting liegen Links, Tags und gesicherte Kopien in Ihrer eigenen PostgreSQL-Datenbank und im Datenordner.** Der Server ruft jede gespeicherte Seite selbst in einem Headless-Browser ab, sodass das Netzwerk des Servers jede Adresse sieht, die Sie speichern. Bei einem lokalen Ollama-Endpunkt geht die Verschlagwortungsanfrage an die von Ihnen konfigurierte Adresse; bei einem Cloud-Anbieter geht sie mit Ihrem API-Schlüssel an diesen Anbieter.',
          'Die Cloud-Variante betreibt der Hersteller; ihre [Datenschutzerklärung](https://linkwarden.app/privacy-policy) ist auf den 31. Juli 2023 datiert, also vor dem Erscheinen der mobilen Apps, und nennt Ontario, Kanada als Land und das Unternehmen als Verantwortlichen im Sinne der DSGVO. Der Datensicherheitsabschnitt bei Google Play sagt, es würden keine Daten an Dritte weitergegeben, und App-Informationen sowie Leistungsdaten könnten erhoben werden.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Aussagen des Herstellers und der Dokumentation, keine Prüfergebnisse. PromptQuorum hat den Netzwerkverkehr nicht untersucht, und die Dokumentation nennt nicht, welchen KI-Anbieter die Cloud-Variante für ihre optionale Verschlagwortung nutzt.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Selbst-Hoster**, die bereits Docker betreiben und Seiten auf dem eigenen Server archivieren möchten.',
          '**Forschende und Teams**, die Sammlungen teilen und kommentierte, gesicherte Kopien von Quellen brauchen.',
          '**Ollama-Nutzer**, die automatische Tags ohne Seitentext an einen Cloud-Anbieter wünschen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Tag-Qualität.** PromptQuorum hat die Verschlagwortung nicht ausgeführt; Genauigkeit, Tempo und das Verhalten kleiner lokaler Modelle sind unbekannt.',
          '**Was das Modell sieht.** Die Dokumentation nennt nicht, wie viel einer Seite zur Verschlagwortung gesendet wird; der Datenschutzgewinn eines lokalen Modells ist daher das dokumentierte Endpunktverhalten, kein Messergebnis.',
          '**Formulierung „lokal“.** Die Nutzungsseite sagt, die Funktion „verwende ein lokales KI-Modell“, während die Einrichtungsseite auch Cloud-Anbieter aufführt; die Einrichtungsseite ist die detailliertere Quelle und wird hier verwendet.',
          '**Cloud-KI und Speicherort.** Die Cloud-Variante nennt optionale KI-Verschlagwortung ohne Anbieter, und die Antwort auf die Frage nach dem Speicherort der Daten war auf der Preisseite nicht lesbar.',
          '**Ressourcenbedarf.** Die Dokumentation nennt seit Version 2.15 rund 350 MB Leerlauf-Arbeitsspeicher als Herstellerangabe; PromptQuorum hat das nicht gemessen.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          {
            App: '[Karakeep](/de/power-local-llm/karakeep-review)',
            Plattformen: 'Web, iOS, Android',
            'Preis / Lizenz': 'Gratis / AGPL-3.0',
            'Wichtigster Unterschied': 'Selbst gehostete Lesezeichen- und Notiz-App mit KI-Verschlagwortung über OpenAI oder Ollama; Zusammenfassungen und Suche stehen in der Rezension',
          },
          {
            App: '[Blinko](/de/power-local-llm/blinko-review)',
            Plattformen: 'Web (selbst gehostet)',
            'Preis / Lizenz': 'Gratis / GPL-3.0',
            'Wichtigster Unterschied': 'Selbst gehostete Notiz-App mit KI-Suche über Ihre Notizen; kein Seitenarchivierer',
          },
        ],
        note: 'Karakeep kommt am nächsten: Beide sind selbst gehostete Lesezeichenwerkzeuge mit optionaler KI-Verschlagwortung. Prüfen Sie aktuellen Preis, Lizenz und Plattformen jeweils auf der Seite der App.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Welcher Anbieter wird genutzt, wenn ich mehrere konfiguriere?',
            a: 'Laut Referenz der Umgebungsvariablen probiert Linkwarden sie in dieser Reihenfolge: OpenAI-kompatibel, Azure OpenAI, Anthropic, Ollama, OpenRouter, dann Perplexity. Ein in `.env` verbliebener Cloud-API-Schlüssel kann daher Vorrang vor Ollama haben.',
          },
          {
            q: 'Funktionieren die mobilen Apps ohne Server?',
            a: 'Nein. Die App-Store-Beschreibung nennt entweder ein Linkwarden-Cloud-Abo oder die Verbindung zu Ihrem eigenen Server als Voraussetzung; für gespeicherte Inhalte wird Offline-Unterstützung genannt.',
          },
          {
            q: 'Läuft es auf einem kleinen Rechner?',
            a: 'Laut Dokumentation senkte die Überarbeitung in Version 2.15 den Leerlauf-Speicherbedarf, und `DISABLE_BROWSER=true` überspringt Screenshots, PDFs, HTML-Kopien und die Leseansicht zugunsten des geringsten Speicherverbrauchs.',
          },
          {
            q: 'Gibt es eine Obergrenze für die Zahl der Links?',
            a: 'Die Preisseite nennt 30.000 Links pro Nutzer in der Cloud, und die Referenz zum Selbsthosting setzt `MAX_LINKS_PER_USER` standardmäßig auf 30000.',
          },
          {
            q: 'Kann ich Linkwarden Cloud später verlassen?',
            a: 'Die Preisseite sagt, Links lassen sich jederzeit exportieren und es gebe keine Bindung; die Dokumentation führt unter „Usage“ außerdem Import und Export auf.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Linkwarden ist ein aktiv entwickelter Open-Source-Weg, ein Archiv der gespeicherten Seiten zu führen, und die dokumentierte Ollama-Unterstützung erlaubt es, die Verschlagwortung auf der eigenen Hardware zu belassen. Dagegen braucht der selbst gehostete Stack drei Container und ein Terminal, die mobilen Apps hängen an einem Server, die Cloud-Variante ist ein kostenpflichtiger Dienst mit veralteter Datenschutzerklärung, und das KI-Verhalten wurde hier nicht getestet. Geeignet ist die App für Selbst-Hoster, die schon Docker betreiben und ein Seitenarchiv mit optionaler lokaler Verschlagwortung wollen; wer keinen Einrichtungsaufwand möchte, sollte zuerst die Cloud-Bedingungen mit Karakeep vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Linkwarden-Website](https://linkwarden.app) — Funktionen, Preise und App-Links, geprüft am 24. Oktober 2026.',
          '[Einrichtung zum Selbsthosting](https://docs.linkwarden.app/self-hosting/setup) und [KI-Verschlagwortung](https://docs.linkwarden.app/self-hosting/ai-worker) — Anforderungen, Docker-Schritte und Anbietervariablen, geprüft am 24. Oktober 2026.',
          '[Umgebungsvariablen](https://docs.linkwarden.app/self-hosting/environment-variables) — Reihenfolge der KI-Anbieter und Standardwerte, geprüft am 24. Oktober 2026.',
          '[Linkwarden auf GitHub](https://github.com/linkwarden/linkwarden) — README, Lizenz und Release v2.16.3, geprüft am 24. Oktober 2026.',
          'Einträge im [App Store](https://apps.apple.com/app/linkwarden/id6752550960) und bei [Google Play](https://play.google.com/store/apps/details?id=app.linkwarden) — App-Versionen und Voraussetzungen, geprüft am 24. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Karakeep-Rezension](/de/power-local-llm/karakeep-review) — eine selbst gehostete Lesezeichen- und Notiz-App mit KI-Verschlagwortung.',
          '[Blinko-Rezension](/de/power-local-llm/blinko-review) — eine selbst gehostete Notiz-App mit KI-Suche.',
          '[Ollama](https://ollama.com) — der lokale Modell-Runner, den Linkwarden zur Verschlagwortung aufrufen kann.',
          '[Verzeichnis lokaler KI-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
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
    heroImage: '/images/linkwarden-review-hero-es.webp',
    title: 'Reseña de Linkwarden: marcadores autoalojados con IA local',
    seoTitle: 'Reseña de Linkwarden: marcadores autoalojados con IA local',
    intro: 'Linkwarden es un gestor de marcadores de código abierto (AGPL-3.0) de [Linkwarden Inc.](https://linkwarden.app) que guarda una copia de cada página que marcas y puede etiquetar los enlaces automáticamente con un modelo de IA que tú configuras, ya sea un modelo local de Ollama o un proveedor en la nube. Puedes alojarlo tú mismo con Docker o pagar la edición Cloud del fabricante. Esta reseña se basa en el sitio web y la documentación del fabricante, el repositorio de GitHub y las fichas de App Store y Google Play, consultados el 24 de octubre de 2026; PromptQuorum no ha probado la app en la práctica.',
    metaDescription: 'Reseña de Linkwarden: gestor de marcadores autoalojado que archiva páginas y etiqueta enlaces con Ollama local o una IA en la nube. Sin probar.',
    twitterDescription: 'Reseña de Linkwarden: marcadores autoalojados que archivan cada página, con etiquetado por IA opcional mediante Ollama local o un proveedor en la nube.',
    audience: 'Personas que alojan sus propios servicios y lectores atentos a la privacidad que quieren un archivo de marcadores con etiquetado por IA opcional y necesitan saber si el etiquetado puede quedarse en su hardware.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Linkwarden',
    targetKeywords: [
      'reseña linkwarden',
      'linkwarden ollama',
      'linkwarden etiquetado ia',
      'gestor de marcadores autoalojado',
      'linkwarden docker autoalojar',
      'linkwarden vs karakeep',
      'gestor de marcadores con ia local',
    ],
    current_models_mentioned: ['phi3:mini-4k'],
    current_hardware_mentioned: ['Docker', 'PostgreSQL', 'Meilisearch'],
    leadAnswerBlock: '**Linkwarden (versión 2.16.3, publicada el 9 de septiembre de 2026) es un gestor de marcadores con licencia AGPL-3.0 que archiva una copia de cada página que guardas y puede etiquetar enlaces con un modelo de IA que tú configuras.** Puedes alojarlo gratis tú mismo o usar la edición Cloud de pago.',
    quickAnswerTop: {
      es: {
        question: '¿Puede Linkwarden etiquetar marcadores con un modelo local de Ollama?',
        answer: 'Según la documentación del proyecto, sí: indicas la dirección de tu servidor de Ollama y el nombre de un modelo en el archivo `.env`, y la documentación sugiere que basta un modelo pequeño como phi3:mini-4k. También puede usar proveedores compatibles con OpenAI y otros proveedores en la nube.',
        bullets: [
          'Cada enlace guardado se almacena como vista de lectura, un único archivo HTML, una captura de pantalla y un PDF.',
          'La vista de lectura admite resaltados y anotaciones.',
          'Las colecciones pueden compartirse públicamente o con miembros del equipo.',
          'Se indican apps nativas para iOS y Android y una extensión de navegador.',
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
        label: '¿Qué es Linkwarden?',
        anchor: 'what-is-linkwarden',
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
        label: 'Cómo autoalojarlo',
        anchor: 'getting-started',
      },
      {
        label: 'Etiquetado con IA: Ollama local o nube',
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
            text: 'Linkwarden es un gestor de marcadores de código abierto que guarda una copia de cada página en un servidor que controlas y puede añadir etiquetas con un modelo de IA local o en la nube.',
          },
          {
            type: 'plain-terms',
            text: 'Guardas un enlace, un proceso en segundo plano abre la página en un navegador y conserva una copia, y un modelo de IA que has configurado propone etiquetas para que puedas encontrarla después.',
          },
        ],
        items: [
          'Mantenimiento: la última versión, 2.16.3, es del 9 de septiembre de 2026 y el repositorio recibió commits el 24 de octubre de 2026, por lo que no se aplica ninguna advertencia de proyecto abandonado.',
          'Etiquetado con IA: desactivado hasta que configures un proveedor en un servidor autoalojado; el sitio del fabricante lo presenta como opcional en Cloud.',
          'Coste: autoalojarlo es gratis; la edición Cloud gestionada es una suscripción de pago.',
          'Clientes: app web, apps para iOS y Android y una extensión de navegador.',
          'Pruebas: se leyeron las fuentes; PromptQuorum no instaló ni midió nada.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web y la documentación del fabricante, el repositorio de GitHub y las fichas de las tiendas, consultados el 24 de octubre de 2026. PromptQuorum no ha instalado Linkwarden, ni ha ejecutado su etiquetado con IA, ni ha medido su consumo de recursos.',
          },
        ],
      },
      overview: {
        id: 'what-is-linkwarden',
        title: '¿Qué es Linkwarden?',
        content: [
          '**Linkwarden es un gestor de marcadores colaborativo que conserva una copia de cada página guardada, de modo que el contenido sobrevive si el original desaparece.** El README lo describe como una herramienta de código abierto y autoalojada para recopilar, leer, anotar y preservar páginas, publicada por la empresa que está detrás de linkwarden.app; el código fuente tiene licencia AGPL-3.0.',
          'Para cada enlace, un proceso en segundo plano genera hasta cuatro formatos: una vista de lectura del artículo, una copia HTML completa en un solo archivo, una captura de pantalla de la página entera y un PDF; enviar la dirección a la Wayback Machine es un extra opcional y, según la documentación, está desactivado por defecto. Los enlaces se organizan en colecciones y subcolecciones con etiquetas, se buscan con búsqueda de texto completo y pueden compartirse con el público o con miembros del equipo con permisos individuales.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**Linkwarden es una app web que alojas tú o alquilas como Linkwarden Cloud; las apps de iOS y Android y la extensión del navegador se conectan a una de las dos.**',
        ],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
          { 'Opción': 'Linkwarden Cloud', 'Cómo conseguirlo': '[cloud.linkwarden.app](https://cloud.linkwarden.app), suscripción de pago' },
          { 'Opción': 'Precio de Cloud', 'Cómo conseguirlo': 'Prueba gratuita de 14 días y después $3 por usuario al mes con facturación anual (USD, según el sitio)' },
          { 'Opción': 'iPhone y iPad', 'Cómo conseguirlo': '[Linkwarden en la App Store](https://apps.apple.com/app/linkwarden/id6752550960), descarga gratuita' },
          { 'Opción': 'Android', 'Cómo conseguirlo': '[Linkwarden en Google Play](https://play.google.com/store/apps/details?id=app.linkwarden), indica compras dentro de la app' },
          { 'Opción': 'Autoalojado (Docker)', 'Cómo conseguirlo': 'Gratis; sigue la [guía de instalación](https://docs.linkwarden.app/self-hosting/setup), requiere terminal' },
          { 'Opción': 'Extensión de navegador', 'Cómo conseguirlo': 'Chrome, Firefox y Safari, consulta la [guía de la extensión](https://docs.linkwarden.app/getting-started/browser-extension)' },
          { 'Opción': 'Sitio web', 'Cómo conseguirlo': '[linkwarden.app](https://linkwarden.app)' },
          { 'Opción': 'Política de privacidad', 'Cómo conseguirlo': '[linkwarden.app/privacy-policy](https://linkwarden.app/privacy-policy)' },
          { 'Opción': 'Código fuente', 'Cómo conseguirlo': '[github.com/linkwarden/linkwarden](https://github.com/linkwarden/linkwarden), AGPL-3.0' },
        ],
        note: 'Versión revisada: 2.16.3 (release de GitHub del 9 de septiembre de 2026). La app de iOS está en la 1.4.4 y se actualizó el 12 de octubre de 2026 según la App Store, y la página de Google Play también muestra el 12 de octubre de 2026. En la App Store la app era gratuita en las tiendas de EE. UU., Alemania y Japón; el precio de Cloud solo aparece en dólares estadounidenses y no se encontró precio en euros ni en yenes. No hay instalador para el servidor: se necesita Docker o una instalación manual con Node y PostgreSQL.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**La guía de autoalojamiento indica 4 GB de memoria como punto de partida cómodo, cualquier CPU de 2 núcleos y unos 1.5 GB de disco para la imagen.**',
        ],
        columns: ['Elemento', 'Qué dicen las fuentes'],
        rows: [
          { Elemento: 'Servidor', 'Qué dicen las fuentes': 'Docker Compose con tres contenedores: Linkwarden, PostgreSQL 16 y Meilisearch; imágenes para x86-64 y ARM64' },
          { Elemento: 'Secretos', 'Qué dicen las fuentes': 'Hay que cambiar `NEXTAUTH_SECRET`, `POSTGRES_PASSWORD` y `MEILI_MASTER_KEY` respecto a los valores de ejemplo' },
          { Elemento: 'IA local', 'Qué dicen las fuentes': 'Un servidor de Ollama aparte y un modelo descargado si quieres etiquetar en local; Linkwarden no requiere GPU' },
          { Elemento: 'Apps móviles', 'Qué dicen las fuentes': 'iOS 15.1 o posterior según la App Store; necesitan una suscripción Cloud o tu propio servidor' },
          { Elemento: 'Instalación manual', 'Qué dicen las fuentes': 'Node 20 o posterior, Yarn, PostgreSQL 16 o posterior; Meilisearch es opcional para la búsqueda avanzada' },
        ],
        note: 'La guía describe la vía de Docker como la más sencilla; la instalación manual está dirigida a un público más técnico.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo autoalojarlo',
        content: [
          '**Los pasos siguen la guía oficial de instalación con Docker Compose; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          { title: 'Descarga los archivos', whyItMatters: 'Descarga `docker-compose.yml` y `.env.sample` del repositorio y guarda el ejemplo como `.env`.' },
          { title: 'Define los secretos', whyItMatters: 'Edita `.env` y sustituye `NEXTAUTH_SECRET`, `POSTGRES_PASSWORD` y `MEILI_MASTER_KEY` por tres frases secretas distintas.' },
          { title: 'Arranca el stack', whyItMatters: 'Ejecuta `docker compose up`; tras unos minutos la app responde en el puerto 3000.' },
          {
            title: 'Añade el etiquetado con IA',
            whyItMatters: 'Si quieres, añade las variables de Ollama o de un servicio compatible con OpenAI de la sección siguiente, reinicia el stack y activa el etiquetado en Ajustes, Preferencias.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Etiquetado con IA: Ollama local o nube',
        content: [
          '**El etiquetado es opcional: eliges entre un modelo local de Ollama y un proveedor en la nube rellenando variables de entorno.**',
        ],
        items: [
          '**Local con Ollama.** Define `NEXT_PUBLIC_OLLAMA_ENDPOINT_URL` con tu servidor de Ollama, por ejemplo `http://localhost:11434`, y `OLLAMA_MODEL` con un modelo descargado; según la documentación basta un modelo ligero como phi3:mini-4k.',
          '**Nube o API compatible.** `OPENAI_API_KEY` y `OPENAI_MODEL` funcionan con OpenAI, y `CUSTOM_OPENAI_BASE_URL` apunta las mismas variables a cualquier servicio compatible con OpenAI; la documentación da Gemini como ejemplo.',
          '**Más proveedores.** La referencia de variables de entorno también incluye Azure OpenAI, Anthropic, OpenRouter y Perplexity.',
          '**Dos modos.** Linkwarden puede generar etiquetas automáticamente al añadir un enlace o asignarlas a partir de una lista predefinida que tú das; ambos se activan en Ajustes, Preferencias.',
          '**Lotes en segundo plano.** El etiquetado se ejecuta en el proceso de segundo plano junto con el archivado, por defecto en lotes de cinco enlaces (`ARCHIVE_TAKE_COUNT`).',
        ],
        note: 'El etiquetado se describe como parte de la versión 2.9; la página de uso dice que analiza el contenido de tus enlaces, pero PromptQuorum no probó qué texto se envía al modelo ni la calidad de las etiquetas.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**Si lo autoalojas, los enlaces, las etiquetas y las copias preservadas se guardan en tu propia base de datos PostgreSQL y en la carpeta de datos.** El servidor descarga cada página guardada por sí mismo en un navegador sin interfaz, así que la red del servidor ve cada dirección que marcas. Con un endpoint local de Ollama, la solicitud de etiquetado va a la dirección que configuraste; con un proveedor en la nube, va a ese proveedor con tu clave de API.',
          'La edición Cloud la gestiona el fabricante, y su [política de privacidad](https://linkwarden.app/privacy-policy) tiene fecha del 31 de julio de 2023, anterior a las apps móviles; nombra a Ontario, Canadá como país y a la empresa como responsable del tratamiento según el RGPD. La sección de seguridad de los datos de Google Play dice que no se comparten datos con terceros y que se puede recopilar información de la app y de rendimiento.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del fabricante y de la documentación, no resultados de una auditoría. PromptQuorum no ha inspeccionado el tráfico de red, y la documentación no indica qué proveedor de IA usa la edición Cloud para su etiquetado opcional.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Quienes alojan sus propios servicios** y ya usan Docker y quieren archivar páginas en su servidor.',
          '**Investigadores y equipos** que comparten colecciones y necesitan copias anotadas y preservadas de sus fuentes.',
          '**Usuarios de Ollama** que quieren etiquetas automáticas sin enviar el texto de las páginas a un proveedor en la nube.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad de las etiquetas.** PromptQuorum no ejecutó el etiquetado, así que se desconocen la precisión, la velocidad y el comportamiento de los modelos locales pequeños.',
          '**Qué ve el modelo.** La documentación no indica cuánto de una página se envía para etiquetar, por lo que la ventaja de privacidad de un modelo local es el comportamiento documentado del endpoint, no un resultado medido.',
          '**Redacción sobre lo «local».** La página de uso dice que la función «usa un modelo de IA local», mientras que la página de instalación también enumera proveedores en la nube; la de instalación es la fuente más detallada y es la que se usa aquí.',
          '**IA y almacenamiento en Cloud.** La edición Cloud presenta el etiquetado con IA como opcional sin nombrar proveedor, y la respuesta sobre dónde se almacenan los datos no era legible en la página de precios.',
          '**Uso de recursos.** La documentación da unos 350 MB de memoria en reposo desde la versión 2.15 como cifra del fabricante; PromptQuorum no la midió.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            App: '[Karakeep](/es/power-local-llm/karakeep-review)',
            Plataformas: 'Web, iOS, Android',
            'Precio / licencia': 'Gratis / AGPL-3.0',
            'Diferencia clave': 'App autoalojada de marcadores y notas con etiquetado por IA mediante OpenAI u Ollama; los resúmenes y la búsqueda están en su reseña',
          },
          {
            App: '[Blinko](/es/power-local-llm/blinko-review)',
            Plataformas: 'Web (autoalojada)',
            'Precio / licencia': 'Gratis / GPL-3.0',
            'Diferencia clave': 'App autoalojada de notas con búsqueda por IA sobre tus notas; no archiva páginas',
          },
        ],
        note: 'Karakeep es la más parecida: ambas son herramientas de marcadores autoalojadas con etiquetado por IA opcional. Confirma el precio, la licencia y las plataformas actuales en la página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué proveedor se usa si configuro más de uno?',
            a: 'Según la referencia de variables de entorno, Linkwarden los prueba en este orden: compatible con OpenAI, Azure OpenAI, Anthropic, Ollama, OpenRouter y después Perplexity. Por eso una clave de API en la nube que quede en `.env` puede tener prioridad sobre Ollama.',
          },
          {
            q: '¿Funcionan las apps móviles sin un servidor?',
            a: 'No. La descripción de la App Store indica que Linkwarden necesita una suscripción a Linkwarden Cloud o una conexión a tu propio servidor autoalojado; las apps indican compatibilidad sin conexión para el contenido guardado.',
          },
          {
            q: '¿Puede funcionar en un equipo pequeño?',
            a: 'Según la documentación, la reescritura de la versión 2.15 redujo la memoria en reposo, y `DISABLE_BROWSER=true` omite capturas, PDF, copias HTML y la vista de lectura a cambio del menor consumo de memoria.',
          },
          { q: '¿Hay un límite de enlaces?', a: 'La página de precios indica 30,000 enlaces por usuario en Cloud, y la referencia de autoalojamiento fija `MAX_LINKS_PER_USER` en 30000 por defecto.' },
          {
            q: '¿Puedo dejar Linkwarden Cloud más adelante?',
            a: 'La página de precios dice que los enlaces pueden exportarse en cualquier momento y que no hay dependencia del proveedor; la documentación también enumera importar y exportar en «Usage».',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Linkwarden es una forma de código abierto, con desarrollo activo, de mantener un archivo de las páginas que marcas, y su compatibilidad documentada con Ollama permite que el paso de etiquetado se quede en tu propio hardware. En contra, el stack autoalojado necesita tres contenedores y una terminal, las apps móviles dependen de un servidor, la edición Cloud es un servicio de pago con una política de privacidad antigua y aquí no se probó nada del comportamiento de la IA. Encaja con quienes ya usan Docker y quieren un archivo de páginas con etiquetado local opcional; quien busque cero configuración debería comparar primero las condiciones de Cloud con Karakeep.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Linkwarden](https://linkwarden.app) — funciones, precios y enlaces de las apps, consultado el 24 de octubre de 2026.',
          '[Guía de autoalojamiento](https://docs.linkwarden.app/self-hosting/setup) y [etiquetado con IA](https://docs.linkwarden.app/self-hosting/ai-worker) — requisitos, pasos de Docker y variables de proveedores, consultado el 24 de octubre de 2026.',
          '[Variables de entorno](https://docs.linkwarden.app/self-hosting/environment-variables) — orden de los proveedores de IA y valores por defecto, consultado el 24 de octubre de 2026.',
          '[Linkwarden en GitHub](https://github.com/linkwarden/linkwarden) — README, licencia y release v2.16.3, consultado el 24 de octubre de 2026.',
          'Fichas de la [App Store](https://apps.apple.com/app/linkwarden/id6752550960) y de [Google Play](https://play.google.com/store/apps/details?id=app.linkwarden) — versiones y requisitos de las apps, consultado el 24 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Karakeep](/es/power-local-llm/karakeep-review) — app autoalojada de marcadores y notas con etiquetado por IA.',
          '[Reseña de Blinko](/es/power-local-llm/blinko-review) — app autoalojada de notas con búsqueda por IA.',
          '[Ollama](https://ollama.com) — el ejecutor de modelos locales al que Linkwarden puede llamar para etiquetar.',
          '[Directorio de software de LLM locales](/es/directory) — el catálogo completo de herramientas de IA locales.',
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
    heroImage: '/images/linkwarden-review-hero-fr.webp',
    title: 'Test de Linkwarden : signets auto-hébergés avec IA locale',
    seoTitle: 'Test de Linkwarden : signets auto-hébergés, tags IA locaux',
    intro: 'Linkwarden est un gestionnaire de signets open source (AGPL-3.0) de [Linkwarden Inc.](https://linkwarden.app) qui conserve une copie de chaque page enregistrée et peut étiqueter les liens automatiquement avec un modèle d’IA que vous configurez, soit un modèle Ollama local, soit un fournisseur cloud. Vous pouvez l’héberger vous-même avec Docker ou payer l’édition Cloud de l’éditeur. Ce test s’appuie sur le site et la documentation de l’éditeur, le dépôt GitHub et les fiches de l’App Store et de Google Play, consultés le 24 octobre 2026 ; PromptQuorum n’a pas testé l’application en pratique.',
    metaDescription: 'Test de Linkwarden : gestionnaire de signets auto-hébergé qui archive les pages et étiquette les liens avec Ollama local ou une IA cloud. Non testé.',
    twitterDescription: 'Test de Linkwarden : signets auto-hébergés qui archivent chaque page, avec étiquetage IA facultatif via Ollama en local ou un fournisseur cloud.',
    audience: 'Auto-hébergeurs et lecteurs soucieux de leur vie privée qui veulent des signets archivés avec un étiquetage IA facultatif et doivent savoir si l’étiquetage peut rester sur leur propre matériel.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'test de Linkwarden',
    targetKeywords: [
      'test linkwarden',
      'linkwarden ollama',
      'linkwarden étiquetage ia',
      'gestionnaire de signets auto-hébergé',
      'linkwarden docker auto-héberger',
      'linkwarden vs karakeep',
      'gestionnaire de signets avec ia locale',
    ],
    current_models_mentioned: ['phi3:mini-4k'],
    current_hardware_mentioned: ['Docker', 'PostgreSQL', 'Meilisearch'],
    leadAnswerBlock: '**Linkwarden (version 2.16.3, publiée le 9 septembre 2026) est un gestionnaire de signets sous licence AGPL-3.0 qui archive une copie de chaque page enregistrée et peut étiqueter les liens avec un modèle d’IA que vous configurez.** Vous pouvez l’auto-héberger gratuitement ou utiliser l’édition Cloud payante.',
    quickAnswerTop: {
      fr: {
        question: 'Linkwarden peut-il étiqueter des signets avec un modèle Ollama local ?',
        answer: 'D’après la documentation du projet, oui : vous indiquez l’adresse de votre serveur Ollama et un nom de modèle dans le fichier `.env`, et la documentation estime qu’un petit modèle comme phi3:mini-4k suffit. Il peut aussi utiliser des fournisseurs compatibles OpenAI et d’autres fournisseurs cloud.',
        bullets: [
          'Chaque lien enregistré est conservé en vue de lecture, en fichier HTML unique, en capture d’écran et en PDF.',
          'La vue de lecture prend en charge surlignages et annotations.',
          'Les collections peuvent être partagées publiquement ou avec des membres d’équipe.',
          'Des applications natives iOS et Android et une extension de navigateur sont indiquées.',
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
        label: 'Qu’est-ce que Linkwarden ?',
        anchor: 'what-is-linkwarden',
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
        label: 'Comment l’auto-héberger',
        anchor: 'getting-started',
      },
      {
        label: 'Étiquetage IA : Ollama local ou cloud',
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
            text: 'Linkwarden est un gestionnaire de signets open source qui stocke une copie de chaque page enregistrée sur un serveur que vous contrôlez et peut ajouter des tags avec un modèle d’IA local ou cloud.',
          },
          {
            type: 'plain-terms',
            text: 'Vous enregistrez un lien, un processus en arrière-plan ouvre la page dans un navigateur et en garde une copie, et un modèle d’IA que vous avez configuré propose des tags pour la retrouver plus tard.',
          },
        ],
        items: [
          'Maintenance : la dernière version, 2.16.3, date du 9 septembre 2026 et le dépôt a reçu des commits le 24 octobre 2026 ; aucun avertissement de projet abandonné ne s’applique.',
          'Étiquetage IA : désactivé tant que vous ne configurez pas de fournisseur sur un serveur auto-hébergé ; le site de l’éditeur le présente comme facultatif dans Cloud.',
          'Coût : l’auto-hébergement est gratuit ; l’édition Cloud gérée est un abonnement payant.',
          'Clients : application web, applications iOS et Android et une extension de navigateur.',
          'Essais : les sources ont été lues ; PromptQuorum n’a rien installé ni mesuré.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s’appuie sur le site et la documentation de l’éditeur, le dépôt GitHub et les fiches des boutiques, consultés le 24 octobre 2026. PromptQuorum n’a pas installé Linkwarden, n’a pas exécuté son étiquetage IA et n’a pas mesuré sa consommation de ressources.',
          },
        ],
      },
      overview: {
        id: 'what-is-linkwarden',
        title: 'Qu’est-ce que Linkwarden ?',
        content: [
          '**Linkwarden est un gestionnaire de signets collaboratif qui conserve une copie de chaque page enregistrée, de sorte que le contenu survit si l’original disparaît.** Le README le décrit comme un outil open source et auto-hébergé pour collecter, lire, annoter et préserver des pages, publié par la société derrière linkwarden.app ; le code source est sous licence AGPL-3.0.',
          'Pour chaque lien, un processus en arrière-plan produit jusqu’à quatre formats : une vue de lecture de l’article, une copie HTML complète en un seul fichier, une capture d’écran de la page entière et un PDF ; l’envoi de l’adresse à la Wayback Machine est un extra facultatif, désactivé par défaut selon la documentation. Les liens s’organisent en collections et sous-collections avec des tags, se recherchent en texte intégral et peuvent être partagés avec le public ou avec des membres d’équipe dont les droits se règlent un par un.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Linkwarden est une application web que vous hébergez vous-même ou que vous louez sous forme de Linkwarden Cloud ; les applications iOS et Android et l’extension de navigateur se connectent à l’une des deux.**',
        ],
        columns: ['Option', 'Comment l’obtenir'],
        rows: [
          { Option: 'Linkwarden Cloud', 'Comment l’obtenir': '[cloud.linkwarden.app](https://cloud.linkwarden.app), abonnement payant' },
          { Option: 'Prix de Cloud', 'Comment l’obtenir': 'Essai gratuit de 14 jours, puis 3 $ par utilisateur et par mois facturés à l’année (USD, selon le site)' },
          { Option: 'iPhone et iPad', 'Comment l’obtenir': '[Linkwarden sur l’App Store](https://apps.apple.com/app/linkwarden/id6752550960), téléchargement gratuit' },
          { Option: 'Android', 'Comment l’obtenir': '[Linkwarden sur Google Play](https://play.google.com/store/apps/details?id=app.linkwarden), mentionne des achats intégrés' },
          { Option: 'Auto-hébergé (Docker)', 'Comment l’obtenir': 'Gratuit ; suivez le [guide d’installation](https://docs.linkwarden.app/self-hosting/setup), terminal requis' },
          { Option: 'Extension de navigateur', 'Comment l’obtenir': 'Chrome, Firefox et Safari, voir le [guide de l’extension](https://docs.linkwarden.app/getting-started/browser-extension)' },
          { Option: 'Site web', 'Comment l’obtenir': '[linkwarden.app](https://linkwarden.app)' },
          { Option: 'Confidentialité', 'Comment l’obtenir': '[linkwarden.app/privacy-policy](https://linkwarden.app/privacy-policy)' },
          { Option: 'Code source', 'Comment l’obtenir': '[github.com/linkwarden/linkwarden](https://github.com/linkwarden/linkwarden), AGPL-3.0' },
        ],
        note: 'Version testée : 2.16.3 (release GitHub du 9 septembre 2026). L’application iOS en est à la 1.4.4 et a été mise à jour le 12 octobre 2026 selon l’App Store, et la page Google Play indique aussi le 12 octobre 2026. Sur l’App Store, l’application était gratuite dans les boutiques des États-Unis, d’Allemagne et du Japon ; le prix de Cloud n’apparaît qu’en dollars américains et aucun prix en euros ni en yens n’a été trouvé. Il n’existe pas d’installateur pour le serveur : il faut Docker ou une installation manuelle avec Node et PostgreSQL.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**Le guide d’auto-hébergement cite 4 GB de mémoire comme point de départ confortable, un processeur à 2 cœurs quelconque et environ 1.5 GB de disque pour l’image.**',
        ],
        columns: ['Élément', 'Ce que disent les sources'],
        rows: [
          { 'Élément': 'Serveur', 'Ce que disent les sources': 'Docker Compose avec trois conteneurs : Linkwarden, PostgreSQL 16 et Meilisearch ; images pour x86-64 et ARM64' },
          { 'Élément': 'Secrets', 'Ce que disent les sources': '`NEXTAUTH_SECRET`, `POSTGRES_PASSWORD` et `MEILI_MASTER_KEY` doivent être modifiés par rapport aux valeurs d’exemple' },
          { 'Élément': 'IA locale', 'Ce que disent les sources': 'Un serveur Ollama distinct et un modèle téléchargé pour étiqueter en local ; Linkwarden lui-même n’exige pas de GPU' },
          { 'Élément': 'Applications mobiles', 'Ce que disent les sources': 'iOS 15.1 ou plus récent selon l’App Store ; elles exigent un abonnement Cloud ou votre propre serveur' },
          { 'Élément': 'Installation manuelle', 'Ce que disent les sources': 'Node 20 ou plus récent, Yarn, PostgreSQL 16 ou plus récent ; Meilisearch est facultatif pour la recherche avancée' },
        ],
        note: 'Le guide présente la voie Docker comme la plus simple ; l’installation manuelle s’adresse à un public plus technique.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Comment l’auto-héberger',
        content: [
          '**Les étapes suivent le guide d’installation officiel pour Docker Compose ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          { title: 'Télécharger les fichiers', whyItMatters: 'Récupérez `docker-compose.yml` et `.env.sample` dans le dépôt et enregistrez l’exemple sous le nom `.env`.' },
          { title: 'Définir les secrets', whyItMatters: 'Modifiez `.env` et remplacez `NEXTAUTH_SECRET`, `POSTGRES_PASSWORD` et `MEILI_MASTER_KEY` par trois phrases secrètes différentes.' },
          { title: 'Démarrer la pile', whyItMatters: 'Lancez `docker compose up` ; après quelques minutes, l’application répond sur le port 3000.' },
          {
            title: 'Ajouter l’étiquetage IA',
            whyItMatters: 'Ajoutez si vous le souhaitez les variables Ollama ou compatibles OpenAI de la section suivante, redémarrez la pile et activez l’étiquetage dans Paramètres, Préférences.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Étiquetage IA : Ollama local ou cloud',
        content: [
          '**L’étiquetage est facultatif : vous choisissez entre un modèle Ollama local et un fournisseur cloud en renseignant des variables d’environnement.**',
        ],
        items: [
          '**En local avec Ollama.** Définissez `NEXT_PUBLIC_OLLAMA_ENDPOINT_URL` sur votre serveur Ollama, par exemple `http://localhost:11434`, et `OLLAMA_MODEL` sur un modèle téléchargé ; selon la documentation, un modèle léger comme phi3:mini-4k suffit.',
          '**Cloud ou API compatible.** `OPENAI_API_KEY` et `OPENAI_MODEL` fonctionnent avec OpenAI, et `CUSTOM_OPENAI_BASE_URL` oriente les mêmes variables vers tout service compatible OpenAI ; la documentation donne Gemini en exemple.',
          '**Autres fournisseurs.** La référence des variables d’environnement cite aussi Azure OpenAI, Anthropic, OpenRouter et Perplexity.',
          '**Deux modes.** Linkwarden peut générer des tags automatiquement à l’ajout d’un lien, ou attribuer des tags à partir d’une liste prédéfinie que vous fournissez ; les deux s’activent dans Paramètres, Préférences.',
          '**Lots en arrière-plan.** L’étiquetage s’exécute dans le processus d’arrière-plan avec l’archivage, par défaut par lots de cinq liens (`ARCHIVE_TAKE_COUNT`).',
        ],
        note: 'L’étiquetage est décrit comme faisant partie de la version 2.9 ; la page d’utilisation dit qu’il analyse le contenu de vos liens, mais PromptQuorum n’a pas vérifié quel texte est envoyé au modèle ni la qualité des tags.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**En auto-hébergement, les liens, les tags et les copies préservées sont stockés dans votre propre base PostgreSQL et votre dossier de données.** Le serveur récupère lui-même chaque page enregistrée dans un navigateur sans interface, si bien que le réseau du serveur voit chaque adresse que vous enregistrez. Avec un point d’accès Ollama local, la requête d’étiquetage part vers l’adresse que vous avez configurée ; avec un fournisseur cloud, elle part vers ce fournisseur avec votre clé d’API.',
          'L’édition Cloud est exploitée par l’éditeur, et sa [politique de confidentialité](https://linkwarden.app/privacy-policy) est datée du 31 juillet 2023, donc antérieure aux applications mobiles ; elle cite l’Ontario, Canada comme pays et la société comme responsable du traitement au sens du RGPD. La section sur la sécurité des données de Google Play indique qu’aucune donnée n’est partagée avec des tiers et que des informations sur l’application et ses performances peuvent être collectées.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations de l’éditeur et de la documentation, pas des résultats d’audit. PromptQuorum n’a pas inspecté le trafic réseau, et la documentation n’indique pas quel fournisseur d’IA l’édition Cloud utilise pour son étiquetage facultatif.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle s’adresse',
        items: [
          '**Les auto-hébergeurs** qui utilisent déjà Docker et veulent archiver des pages sur leur propre serveur.',
          '**Chercheurs et équipes** qui partagent des collections et ont besoin de copies annotées et préservées de leurs sources.',
          '**Utilisateurs d’Ollama** qui veulent des tags automatiques sans envoyer le texte des pages à un fournisseur cloud.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité des tags.** PromptQuorum n’a pas exécuté l’étiquetage ; la précision, la vitesse et le comportement des petits modèles locaux sont inconnus.',
          '**Ce que voit le modèle.** La documentation ne précise pas quelle part d’une page est envoyée pour l’étiquetage ; l’avantage de confidentialité d’un modèle local est donc le comportement documenté du point d’accès, pas un résultat mesuré.',
          '**Formulation sur le « local ».** La page d’utilisation dit que la fonction « utilise un modèle d’IA local », alors que la page d’installation cite aussi des fournisseurs cloud ; la page d’installation est la source la plus détaillée et c’est celle retenue ici.',
          '**IA et stockage dans Cloud.** L’édition Cloud annonce un étiquetage IA facultatif sans nommer de fournisseur, et la réponse sur l’emplacement de stockage des données n’était pas lisible sur la page des tarifs.',
          '**Consommation de ressources.** La documentation donne environ 350 MB de mémoire au repos depuis la version 2.15 comme chiffre de l’éditeur ; PromptQuorum ne l’a pas mesuré.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            Application: '[Karakeep](/fr/power-local-llm/karakeep-review)',
            Plateformes: 'Web, iOS, Android',
            'Prix / licence': 'Gratuit / AGPL-3.0',
            'Différence clé': 'Application auto-hébergée de signets et de notes avec étiquetage IA via OpenAI ou Ollama ; résumés et recherche dans son test',
          },
          {
            Application: '[Blinko](/fr/power-local-llm/blinko-review)',
            Plateformes: 'Web (auto-hébergé)',
            'Prix / licence': 'Gratuit / GPL-3.0',
            'Différence clé': 'Application auto-hébergée de notes avec recherche IA dans vos notes ; n’archive pas les pages',
          },
        ],
        note: 'Karakeep est le plus proche : tous deux sont des outils de signets auto-hébergés avec étiquetage IA facultatif. Vérifiez le prix, la licence et les plateformes actuels sur la page de chaque application.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Quel fournisseur est utilisé si j’en configure plusieurs ?',
            a: 'Selon la référence des variables d’environnement, Linkwarden les essaie dans cet ordre : compatible OpenAI, Azure OpenAI, Anthropic, Ollama, OpenRouter, puis Perplexity. Une clé d’API cloud laissée dans `.env` peut donc passer avant Ollama.',
          },
          {
            q: 'Les applications mobiles fonctionnent-elles sans serveur ?',
            a: 'Non. La description de l’App Store précise que Linkwarden exige soit un abonnement Linkwarden Cloud, soit une connexion à votre propre serveur auto-hébergé ; les applications annoncent une prise en charge hors ligne du contenu enregistré.',
          },
          {
            q: 'Peut-il tourner sur une petite machine ?',
            a: 'Selon la documentation, la refonte de la version 2.15 a réduit la mémoire au repos, et `DISABLE_BROWSER=true` supprime captures, PDF, copies HTML et vue de lecture en échange d’une consommation de mémoire minimale.',
          },
          {
            q: 'Y a-t-il une limite au nombre de liens ?',
            a: 'La page des tarifs indique 30,000 liens par utilisateur dans Cloud, et la référence d’auto-hébergement fixe `MAX_LINKS_PER_USER` à 30000 par défaut.',
          },
          {
            q: 'Puis-je quitter Linkwarden Cloud plus tard ?',
            a: 'La page des tarifs indique que les liens peuvent être exportés à tout moment et qu’il n’y a pas de verrouillage ; la documentation cite aussi l’import et l’export dans « Usage ».',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Linkwarden est une solution open source, activement développée, pour conserver une archive des pages que vous enregistrez, et sa prise en charge documentée d’Ollama permet de garder l’étape d’étiquetage sur votre propre matériel. En contrepartie, la pile auto-hébergée demande trois conteneurs et un terminal, les applications mobiles dépendent d’un serveur, l’édition Cloud est un service payant dont la politique de confidentialité est ancienne, et rien du comportement de l’IA n’a été testé ici. Elle convient aux auto-hébergeurs qui utilisent déjà Docker et veulent une archive de pages avec étiquetage local facultatif ; qui veut zéro installation devrait d’abord comparer les conditions de Cloud avec Karakeep.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de Linkwarden](https://linkwarden.app) — fonctions, tarifs et liens des applications, consultés le 24 octobre 2026.',
          '[Installation en auto-hébergement](https://docs.linkwarden.app/self-hosting/setup) et [étiquetage IA](https://docs.linkwarden.app/self-hosting/ai-worker) — prérequis, étapes Docker et variables des fournisseurs, consultés le 24 octobre 2026.',
          '[Variables d’environnement](https://docs.linkwarden.app/self-hosting/environment-variables) — ordre des fournisseurs d’IA et valeurs par défaut, consultés le 24 octobre 2026.',
          '[Linkwarden sur GitHub](https://github.com/linkwarden/linkwarden) — README, licence et release v2.16.3, consultés le 24 octobre 2026.',
          'Fiches de l’[App Store](https://apps.apple.com/app/linkwarden/id6752550960) et de [Google Play](https://play.google.com/store/apps/details?id=app.linkwarden) — versions et prérequis des applications, consultés le 24 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Karakeep](/fr/power-local-llm/karakeep-review) — application auto-hébergée de signets et de notes avec étiquetage IA.',
          '[Test de Blinko](/fr/power-local-llm/blinko-review) — application auto-hébergée de notes avec recherche IA.',
          '[Ollama](https://ollama.com) — l’exécuteur de modèles locaux que Linkwarden peut appeler pour étiqueter.',
          '[Répertoire des logiciels de LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
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
    heroImage: '/images/linkwarden-review-hero-ja.webp',
    title: 'Linkwardenレビュー：ローカルAIタグ付け対応のセルフホスト型ブックマーク',
    seoTitle: 'Linkwardenレビュー：ローカルAI対応のセルフホスト型ブックマーク',
    intro: 'Linkwardenは、[Linkwarden Inc.](https://linkwarden.app)が公開するオープンソース（AGPL-3.0）のブックマーク管理ツールです。保存したページのコピーを残し、ユーザーが設定したAIモデル（ローカルのOllamaモデルまたはクラウドプロバイダー）でリンクに自動でタグを付けられます。Dockerで自分でホストすることも、開発元の有料Cloud版を使うこともできます。このレビューは、開発元のサイトとドキュメント、GitHubリポジトリ、App StoreとGoogle Playの掲載情報（2026年10月24日確認）に基づいており、PromptQuorumは実機での検証を行っていません。',
    metaDescription: 'Linkwardenレビュー：ページを保存し、ローカルのOllamaモデルまたはクラウドAIでリンクにタグを付けるセルフホスト型ブックマーク管理。Docker構成とCloud料金。未検証。',
    twitterDescription: 'Linkwardenレビュー：全ページを保存するセルフホスト型ブックマーク。ローカルOllamaまたはクラウドによるAIタグ付けは任意。情報源で確認できたこと。',
    audience: 'セルフホストを行う方やプライバシーを重視する読者のうち、任意のAIタグ付けを備えたブックマークアーカイブを探し、タグ付けを自分のハードウェア内にとどめられるか知りたい方。',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Linkwarden レビュー',
    targetKeywords: [
      'linkwarden レビュー',
      'linkwarden ollama',
      'linkwarden aiタグ付け',
      'セルフホスト ブックマーク管理',
      'linkwarden docker セルフホスト',
      'linkwarden karakeep 比較',
      'ローカルai ブックマーク管理',
    ],
    current_models_mentioned: ['phi3:mini-4k'],
    current_hardware_mentioned: ['Docker', 'PostgreSQL', 'Meilisearch'],
    leadAnswerBlock: '**Linkwarden（バージョン2.16.3、2026年9月9日公開）は、保存したページのコピーをアーカイブし、ユーザーが設定したAIモデルでリンクにタグを付けられる、AGPL-3.0のブックマーク管理ツールです。**セルフホストなら無料で、有料のCloud版も選べます。',
    quickAnswerTop: {
      ja: {
        question: 'LinkwardenはローカルのOllamaモデルでブックマークにタグを付けられますか？',
        answer: 'プロジェクトのドキュメントによれば可能です。`.env`ファイルにOllamaサーバーのアドレスとモデル名を設定し、ドキュメントはphi3:mini-4kのような小型モデルで足りるとしています。OpenAI互換のプロバイダーなどクラウドのプロバイダーも使えます。',
        bullets: [
          '保存した各リンクは、リーダー表示、単一HTMLファイル、スクリーンショット、PDFとして保存されます。',
          'リーダー表示ではハイライトと注釈が使えます。',
          'コレクションは公開したり、チームメンバーと共有したりできます。',
          'iOS・Androidのネイティブアプリとブラウザ拡張機能が案内されています。',
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
        label: 'Linkwardenとは',
        anchor: 'what-is-linkwarden',
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
        label: 'セルフホストの手順',
        anchor: 'getting-started',
      },
      {
        label: 'AIタグ付け：ローカルOllamaかクラウドか',
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
          { type: 'one-sentence', text: 'Linkwardenは、保存した全ページのコピーを自分が管理するサーバーに置き、ローカルまたはクラウドのAIモデルでタグを追加できるオープンソースのブックマーク管理ツールです。' },
          { type: 'plain-terms', text: 'リンクを保存すると、バックグラウンドの処理がブラウザでページを開いてコピーを残し、設定済みのAIモデルが後で探しやすいようにタグを提案します。' },
        ],
        items: [
          'メンテナンス：最新リリース2.16.3は2026年9月9日で、リポジトリには2026年10月24日にもコミットがあるため、更新停止の警告は該当しません。',
          'AIタグ付け：セルフホスト環境ではプロバイダーを設定するまで無効で、開発元のサイトではCloud版でも任意と案内されています。',
          '費用：セルフホストは無料で、マネージドのCloud版は有料のサブスクリプションです。',
          'クライアント：Webアプリ、iOS・Androidアプリ、ブラウザ拡張機能。',
          '検証：情報源を読んだだけで、PromptQuorumはインストールや計測を行っていません。',
        ],
        callouts: [
          { type: 'note', text: 'このレビューは、開発元のサイトとドキュメント、GitHubリポジトリ、ストアの掲載情報（2026年10月24日確認）に基づいています。PromptQuorumはLinkwardenのインストール、AIタグ付けの実行、リソース使用量の計測を行っていません。' },
        ],
      },
      overview: {
        id: 'what-is-linkwarden',
        title: 'Linkwardenとは',
        content: [
          '**Linkwardenは、保存した各ページのコピーを保持する共同利用型のブックマーク管理ツールで、元のページが消えても内容が残ります。**READMEでは、ページを収集・閲覧・注釈・保存するためのセルフホスト型オープンソースツールと説明されており、linkwarden.appを運営する会社が公開しています。ソースコードのライセンスはAGPL-3.0です。',
          'リンクごとにバックグラウンド処理が最大4つの形式を生成します。記事のリーダー表示、単一ファイルの完全なHTMLコピー、ページ全体のスクリーンショット、PDFです。ドキュメントによれば、URLをWayback Machineへ送る機能は任意の追加機能で、既定ではオフです。リンクはタグ付きのコレクションとサブコレクションで整理でき、全文検索で探せます。公開共有や、権限をメンバーごとに設定できるチーム共有も可能です。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Linkwardenは自分でホストするか、Linkwarden Cloudとして利用するWebアプリで、iOS・Androidアプリとブラウザ拡張機能はそのどちらかに接続します。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          { '項目': 'Linkwarden Cloud', '入手方法': '[cloud.linkwarden.app](https://cloud.linkwarden.app)、有料サブスクリプション' },
          { '項目': 'Cloudの料金', '入手方法': '14日間の無料トライアルのあと、年払いで1ユーザーあたり月$3（サイト記載のUSD）' },
          { '項目': 'iPhone・iPad', '入手方法': '[App StoreのLinkwarden](https://apps.apple.com/app/linkwarden/id6752550960)、無料ダウンロード' },
          { '項目': 'Android', '入手方法': '[Google PlayのLinkwarden](https://play.google.com/store/apps/details?id=app.linkwarden)、アプリ内購入ありと表示' },
          { '項目': 'セルフホスト（Docker）', '入手方法': '無料。[セットアップガイド](https://docs.linkwarden.app/self-hosting/setup)に従います。ターミナルが必要です' },
          { '項目': 'ブラウザ拡張機能', '入手方法': 'Chrome、Firefox、Safari。[拡張機能ガイド](https://docs.linkwarden.app/getting-started/browser-extension)を参照' },
          { '項目': '公式サイト', '入手方法': '[linkwarden.app](https://linkwarden.app)' },
          { '項目': 'プライバシーポリシー', '入手方法': '[linkwarden.app/privacy-policy](https://linkwarden.app/privacy-policy)' },
          { '項目': 'ソースコード', '入手方法': '[github.com/linkwarden/linkwarden](https://github.com/linkwarden/linkwarden)、AGPL-3.0' },
        ],
        note: 'レビュー対象のバージョン：2.16.3（2026年9月9日のGitHubリリース）。iOSアプリはApp Storeによれば1.4.4で2026年10月12日に更新され、Google Playのページも2026年10月12日を表示しています。App Storeでは米国・ドイツ・日本のストアで無料でした。Cloudの料金は米ドルのみの表示で、円やユーロの価格は見つかりませんでした。サーバー用のインストーラーはなく、DockerまたはNodeとPostgreSQLによる手動インストールが必要です。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: [
          '**セルフホストのガイドは、メモリ4 GBを無理のない出発点、CPUは2コアなら何でもよく、イメージ用のディスクは約1.5 GBとしています。**',
        ],
        columns: ['項目', '情報源の記載'],
        rows: [
          { '項目': 'サーバー', '情報源の記載': 'Docker Composeで3つのコンテナ（Linkwarden、PostgreSQL 16、Meilisearch）。イメージはx86-64とARM64向け' },
          { '項目': 'シークレット', '情報源の記載': '`NEXTAUTH_SECRET`、`POSTGRES_PASSWORD`、`MEILI_MASTER_KEY`をサンプル値から変更する必要があります' },
          { '項目': 'ローカルAI', '情報源の記載': 'ローカルでタグ付けするには、別のOllamaサーバーと取得済みのモデルが必要です。Linkwarden自体はGPU不要です' },
          { '項目': 'モバイルアプリ', '情報源の記載': 'App Storeによれば iOS 15.1以降。Cloudの契約または自分のサーバーが必要です' },
          { '項目': '手動インストール', '情報源の記載': 'Node 20以降、Yarn、PostgreSQL 16以降。高度な検索に使うMeilisearchは任意です' },
        ],
        note: 'ガイドはDockerを簡単な方法として説明しており、手動インストールはより技術的な読者向けとされています。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'セルフホストの手順',
        content: [
          '**手順はDocker Compose向けの公式セットアップガイドに沿っています。PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          { title: 'ファイルを取得する', whyItMatters: 'リポジトリから`docker-compose.yml`と`.env.sample`を取得し、サンプルを`.env`として保存します。' },
          { title: 'シークレットを設定する', whyItMatters: '`.env`を編集し、`NEXTAUTH_SECRET`、`POSTGRES_PASSWORD`、`MEILI_MASTER_KEY`を、それぞれ異なる秘密の文字列に置き換えます。' },
          { title: 'スタックを起動する', whyItMatters: '`docker compose up`を実行すると、数分後にポート3000でアプリが応答します。' },
          { title: 'AIタグ付けを追加する', whyItMatters: '必要に応じて次のセクションのOllamaまたはOpenAI互換の変数を追加し、スタックを再起動して、設定の環境設定でタグ付けを有効にします。' },
        ],
      },
      features: {
        id: 'key-features',
        title: 'AIタグ付け：ローカルOllamaかクラウドか',
        content: [
          '**タグ付けは任意で、環境変数を設定してローカルのOllamaモデルとクラウドプロバイダーのどちらを使うか選びます。**',
        ],
        items: [
          '**Ollamaでローカル実行。**`NEXT_PUBLIC_OLLAMA_ENDPOINT_URL`にOllamaサーバー（例：`http://localhost:11434`）、`OLLAMA_MODEL`に取得済みのモデルを設定します。ドキュメントはphi3:mini-4kのような軽量モデルで足りるとしています。',
          '**クラウドまたは互換API。**`OPENAI_API_KEY`と`OPENAI_MODEL`でOpenAIを使え、`CUSTOM_OPENAI_BASE_URL`を指定すると同じ変数でOpenAI互換のサービスに接続できます。ドキュメントはGeminiを例に挙げています。',
          '**その他のプロバイダー。**環境変数の一覧にはAzure OpenAI、Anthropic、OpenRouter、Perplexityも載っています。',
          '**2つのモード。**リンク追加時にタグを自動生成するか、ユーザーが用意した既定のタグ一覧から割り当てることができ、どちらも設定の環境設定で有効にします。',
          '**バックグラウンドのバッチ処理。**タグ付けはアーカイブと同じバックグラウンド処理で、既定では5リンクずつのバッチで実行されます（`ARCHIVE_TAKE_COUNT`）。',
        ],
        note: 'タグ付けはバージョン2.9の機能として説明されています。利用ガイドはリンクの内容を分析するとしていますが、PromptQuorumはモデルに送られるテキストやタグの品質を検証していません。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**セルフホストの場合、リンク、タグ、保存されたコピーは自分のPostgreSQLデータベースとデータフォルダに保存されます。**サーバー自身がヘッドレスブラウザで保存対象のページを取得するため、サーバーのネットワークには保存した全URLが見えます。ローカルのOllamaエンドポイントでは、タグ付けのリクエストは設定したアドレスへ送られ、クラウドプロバイダーではAPIキーを使ってそのプロバイダーへ送られます。',
          'Cloud版は開発元が運営しており、その[プライバシーポリシー](https://linkwarden.app/privacy-policy)の日付は2023年7月31日で、モバイルアプリの登場より前です。国としてカナダのオンタリオを挙げ、同社をGDPR上のデータ管理者としています。Google Playのデータセーフティの項目には、第三者とデータを共有しないこと、アプリ情報とパフォーマンスのデータが収集される場合があることが記載されています。',
        ],
        callouts: [
          { type: 'note', text: 'これらは開発元とドキュメントの記載であり、監査結果ではありません。PromptQuorumはネットワーク通信を調べておらず、Cloud版が任意のタグ付けにどのAIプロバイダーを使うかはドキュメントに記載がありません。' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**セルフホストをする人**：すでにDockerを使い、自分のサーバーにページをアーカイブしたい人。',
          '**研究者やチーム**：コレクションを共有し、注釈付きの保存コピーが必要な人。',
          '**Ollamaユーザー**：ページ本文をクラウドに送らずに自動タグを付けたい人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**タグの品質。**PromptQuorumはタグ付けを実行していないため、精度、速度、小型ローカルモデルの挙動は不明です。',
          '**モデルが見る内容。**ページのどの程度がタグ付けに送られるかはドキュメントに記載がなく、ローカルモデルのプライバシー上の利点は、文書化されたエンドポイントの挙動であって計測結果ではありません。',
          '**「ローカル」という表現。**利用ガイドは「ローカルAIモデルを使う」とする一方、セットアップのページはクラウドプロバイダーも挙げています。より詳しいのはセットアップのページなので、ここではそちらを採用しています。',
          '**CloudのAIと保存場所。**Cloud版は任意のAIタグ付けを挙げていますがプロバイダー名はなく、データの保存場所についての回答は料金ページで読み取れませんでした。',
          '**リソース使用量。**ドキュメントはバージョン2.15以降のアイドル時メモリを約350 MBと開発元の数値として挙げていますが、PromptQuorumは計測していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[Karakeep](/ja/power-local-llm/karakeep-review)', '対応プラットフォーム': 'Web、iOS、Android', '価格／ライセンス': '無料／AGPL-3.0', '主な違い': 'OpenAIまたはOllamaでAIタグ付けを行うセルフホスト型のブックマーク＆メモアプリ。要約や検索はレビューを参照' },
          { 'アプリ': '[Blinko](/ja/power-local-llm/blinko-review)', '対応プラットフォーム': 'Web（セルフホスト）', '価格／ライセンス': '無料／GPL-3.0', '主な違い': 'メモに対するAI検索を備えたセルフホスト型メモアプリ。ページのアーカイブ用ではありません' },
        ],
        note: 'Karakeepが最も近く、どちらも任意のAIタグ付けを備えたセルフホスト型ブックマークツールです。各アプリの最新の価格、ライセンス、プラットフォームはそれぞれのページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: '複数のプロバイダーを設定した場合、どれが使われますか？', a: '環境変数の一覧によれば、Linkwardenは次の順に試します。OpenAI互換、Azure OpenAI、Anthropic、Ollama、OpenRouter、Perplexityの順です。そのため`.env`にクラウドのAPIキーが残っていると、Ollamaより優先される可能性があります。' },
          { q: 'モバイルアプリはサーバーなしで使えますか？', a: '使えません。App Storeの説明は、Linkwarden Cloudの契約か、自分のセルフホストサーバーへの接続のいずれかが必要だとしています。アプリは保存済みコンテンツのオフライン対応をうたっています。' },
          { q: '小さなマシンでも動かせますか？', a: 'ドキュメントによれば、バージョン2.15の見直しでアイドル時のメモリが減りました。`DISABLE_BROWSER=true`を設定すると、スクリーンショット、PDF、HTMLコピー、リーダー表示を省いて、メモリ使用量を最小にできます。' },
          { q: 'リンク数に上限はありますか？', a: '料金ページはCloudで1ユーザーあたり30,000リンクとしており、セルフホストの変数一覧でも`MAX_LINKS_PER_USER`の既定値は30000です。' },
          { q: '後からLinkwarden Cloudをやめられますか？', a: '料金ページは、リンクはいつでもエクスポートでき、ロックインはないとしています。ドキュメントのUsageにもインポートとエクスポートが載っています。' },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'Linkwardenは、積極的に開発が続くオープンソースのツールで、保存したページのアーカイブを手元に残せます。文書化されたOllama対応により、タグ付けの処理を自分のハードウェア内にとどめられます。一方で、セルフホスト構成には3つのコンテナとターミナルが必要で、モバイルアプリはサーバーに依存し、Cloud版は古い日付のプライバシーポリシーを持つ有料サービスであり、AIの挙動はここでは検証していません。すでにDockerを使い、任意のローカルタグ付け付きのページアーカイブが欲しいセルフホスターに向いています。手間なく始めたい方は、まずCloudの条件をKarakeepと比べてください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Linkwardenの公式サイト](https://linkwarden.app) — 機能、料金、アプリへのリンク（2026年10月24日確認）。',
          '[セルフホストのセットアップ](https://docs.linkwarden.app/self-hosting/setup)と[AIタグ付け](https://docs.linkwarden.app/self-hosting/ai-worker) — 要件、Dockerの手順、プロバイダーの変数（2026年10月24日確認）。',
          '[環境変数](https://docs.linkwarden.app/self-hosting/environment-variables) — AIプロバイダーの優先順位と既定値（2026年10月24日確認）。',
          '[GitHubのLinkwarden](https://github.com/linkwarden/linkwarden) — README、ライセンス、リリースv2.16.3（2026年10月24日確認）。',
          '[App Store](https://apps.apple.com/app/linkwarden/id6752550960)と[Google Play](https://play.google.com/store/apps/details?id=app.linkwarden)の掲載情報 — アプリのバージョンと要件（2026年10月24日確認）。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Karakeepレビュー](/ja/power-local-llm/karakeep-review) — AIタグ付けを備えたセルフホスト型のブックマーク＆メモアプリ。',
          '[Blinkoレビュー](/ja/power-local-llm/blinko-review) — AI検索を備えたセルフホスト型のメモアプリ。',
          '[Ollama](https://ollama.com) — Linkwardenがタグ付けのために呼び出せるローカルモデル実行ツール。',
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
    heroImage: '/images/linkwarden-review-hero-pt.webp',
    title: 'Análise do Linkwarden: favoritos auto-hospedados com IA local',
    seoTitle: 'Análise do Linkwarden: favoritos auto-hospedados, IA local',
    intro: 'O Linkwarden é um gerenciador de favoritos de código aberto (AGPL-3.0) da [Linkwarden Inc.](https://linkwarden.app) que guarda uma cópia de cada página que você salva e pode marcar os links automaticamente com um modelo de IA que você configura, seja um modelo local do Ollama, seja um provedor na nuvem. Você pode hospedá-lo por conta própria com Docker ou pagar pela edição Cloud do fabricante. Esta análise se baseia no site e na documentação do fabricante, no repositório do GitHub e nas páginas da App Store e do Google Play, consultados em 24 de outubro de 2026; a PromptQuorum não testou o app na prática.',
    metaDescription: 'Análise do Linkwarden: gerenciador de favoritos auto-hospedado que arquiva páginas e marca links com um modelo local do Ollama ou IA na nuvem. Não testado.',
    twitterDescription: 'Análise do Linkwarden: favoritos auto-hospedados que arquivam cada página, com marcação por IA opcional via Ollama local ou provedor na nuvem.',
    audience: 'Quem hospeda os próprios serviços e leitores atentos à privacidade que querem um arquivo de favoritos com marcação por IA opcional e precisam saber se a marcação pode ficar no próprio hardware.',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Linkwarden',
    targetKeywords: [
      'análise linkwarden',
      'linkwarden ollama',
      'linkwarden marcação ia',
      'gerenciador de favoritos auto-hospedado',
      'linkwarden docker auto-hospedar',
      'linkwarden vs karakeep',
      'gerenciador de favoritos com ia local',
    ],
    current_models_mentioned: ['phi3:mini-4k'],
    current_hardware_mentioned: ['Docker', 'PostgreSQL', 'Meilisearch'],
    leadAnswerBlock: '**O Linkwarden (versão 2.16.3, lançada em 9 de setembro de 2026) é um gerenciador de favoritos com licença AGPL-3.0 que arquiva uma cópia de cada página salva e pode marcar links com um modelo de IA que você configura.** Você pode auto-hospedá-lo de graça ou usar a edição Cloud paga.',
    quickAnswerTop: {
      pt: {
        question: 'O Linkwarden consegue marcar favoritos com um modelo local do Ollama?',
        answer: 'Segundo a documentação do projeto, sim: você informa o endereço do seu servidor Ollama e o nome de um modelo no arquivo `.env`, e a documentação diz que um modelo pequeno como o phi3:mini-4k basta. Ele também pode usar provedores compatíveis com a OpenAI e outros provedores na nuvem.',
        bullets: [
          'Cada link salvo é guardado como visão de leitura, um único arquivo HTML, uma captura de tela e um PDF.',
          'A visão de leitura permite destaques e anotações.',
          'As coleções podem ser compartilhadas publicamente ou com membros da equipe.',
          'Apps nativos para iOS e Android e uma extensão de navegador são listados.',
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
        label: 'O que é o Linkwarden?',
        anchor: 'what-is-linkwarden',
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
        label: 'Como auto-hospedar',
        anchor: 'getting-started',
      },
      {
        label: 'Marcação por IA: Ollama local ou nuvem',
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
            text: 'O Linkwarden é um gerenciador de favoritos de código aberto que guarda uma cópia de cada página salva em um servidor que você controla e pode adicionar tags com um modelo de IA local ou na nuvem.',
          },
          {
            type: 'plain-terms',
            text: 'Você salva um link, um processo em segundo plano abre a página em um navegador e mantém uma cópia, e um modelo de IA que você configurou sugere tags para você encontrá-la depois.',
          },
        ],
        items: [
          'Manutenção: a versão mais recente, 2.16.3, é de 9 de setembro de 2026 e o repositório recebeu commits em 24 de outubro de 2026; por isso não se aplica aviso de projeto abandonado.',
          'Marcação por IA: desativada até você configurar um provedor em um servidor auto-hospedado; o site do fabricante a apresenta como opcional no Cloud.',
          'Custo: auto-hospedar é grátis; a edição Cloud gerenciada é uma assinatura paga.',
          'Clientes: app web, apps para iOS e Android e uma extensão de navegador.',
          'Testes: as fontes foram lidas; a PromptQuorum não instalou nem mediu nada.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site e na documentação do fabricante, no repositório do GitHub e nas páginas das lojas, consultados em 24 de outubro de 2026. A PromptQuorum não instalou o Linkwarden, não executou a marcação por IA e não mediu o uso de recursos.',
          },
        ],
      },
      overview: {
        id: 'what-is-linkwarden',
        title: 'O que é o Linkwarden?',
        content: [
          '**O Linkwarden é um gerenciador de favoritos colaborativo que guarda uma cópia de cada página salva, para que o conteúdo sobreviva caso o original saia do ar.** O README o descreve como uma ferramenta de código aberto e auto-hospedada para coletar, ler, anotar e preservar páginas, publicada pela empresa por trás do linkwarden.app; o código-fonte tem licença AGPL-3.0.',
          'Para cada link, um processo em segundo plano gera até quatro formatos: uma visão de leitura do artigo, uma cópia HTML completa em um único arquivo, uma captura de tela da página inteira e um PDF; enviar o endereço à Wayback Machine é um extra opcional e, segundo a documentação, vem desativado por padrão. Os links são organizados em coleções e subcoleções com tags, buscados por pesquisa de texto completo e podem ser compartilhados com o público ou com membros da equipe, cujas permissões são ajustáveis individualmente.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Linkwarden é um app web que você hospeda por conta própria ou aluga como Linkwarden Cloud; os apps de iOS e Android e a extensão de navegador se conectam a uma das duas opções.**',
        ],
        columns: ['Opção', 'Onde obter'],
        rows: [
          { 'Opção': 'Linkwarden Cloud', 'Onde obter': '[cloud.linkwarden.app](https://cloud.linkwarden.app), assinatura paga' },
          { 'Opção': 'Preço do Cloud', 'Onde obter': 'Teste grátis de 14 dias e depois US$ 3 por usuário ao mês com cobrança anual (USD, como informado no site)' },
          { 'Opção': 'iPhone e iPad', 'Onde obter': '[Linkwarden na App Store](https://apps.apple.com/app/linkwarden/id6752550960), download gratuito' },
          { 'Opção': 'Android', 'Onde obter': '[Linkwarden no Google Play](https://play.google.com/store/apps/details?id=app.linkwarden), indica compras no app' },
          { 'Opção': 'Auto-hospedado (Docker)', 'Onde obter': 'Grátis; siga o [guia de instalação](https://docs.linkwarden.app/self-hosting/setup), exige terminal' },
          { 'Opção': 'Extensão de navegador', 'Onde obter': 'Chrome, Firefox e Safari, veja o [guia da extensão](https://docs.linkwarden.app/getting-started/browser-extension)' },
          { 'Opção': 'Site', 'Onde obter': '[linkwarden.app](https://linkwarden.app)' },
          { 'Opção': 'Política de privacidade', 'Onde obter': '[linkwarden.app/privacy-policy](https://linkwarden.app/privacy-policy)' },
          { 'Opção': 'Código-fonte', 'Onde obter': '[github.com/linkwarden/linkwarden](https://github.com/linkwarden/linkwarden), AGPL-3.0' },
        ],
        note: 'Versão analisada: 2.16.3 (release do GitHub de 9 de setembro de 2026). O app de iOS está na 1.4.4 e foi atualizado em 12 de outubro de 2026 segundo a App Store, e a página do Google Play também mostra 12 de outubro de 2026. Na App Store o app era gratuito nas lojas dos EUA, da Alemanha e do Japão; o preço do Cloud aparece apenas em dólares americanos e não foi encontrado preço em reais, euros ou ienes. Não há instalador para o servidor: é preciso Docker ou uma instalação manual com Node e PostgreSQL.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**O guia de auto-hospedagem cita 4 GB de memória como ponto de partida confortável, qualquer CPU de 2 núcleos e cerca de 1.5 GB de disco para a imagem.**',
        ],
        columns: ['Item', 'O que dizem as fontes'],
        rows: [
          { Item: 'Servidor', 'O que dizem as fontes': 'Docker Compose com três contêineres: Linkwarden, PostgreSQL 16 e Meilisearch; imagens para x86-64 e ARM64' },
          { Item: 'Segredos', 'O que dizem as fontes': '`NEXTAUTH_SECRET`, `POSTGRES_PASSWORD` e `MEILI_MASTER_KEY` precisam ser trocados em relação aos valores de exemplo' },
          { Item: 'IA local', 'O que dizem as fontes': 'Um servidor Ollama separado e um modelo baixado se você quiser marcar localmente; o Linkwarden em si não exige GPU' },
          { Item: 'Apps móveis', 'O que dizem as fontes': 'iOS 15.1 ou superior segundo a App Store; exigem uma assinatura Cloud ou seu próprio servidor' },
          { Item: 'Instalação manual', 'O que dizem as fontes': 'Node 20 ou superior, Yarn, PostgreSQL 16 ou superior; o Meilisearch é opcional para a busca avançada' },
        ],
        note: 'O guia descreve o caminho com Docker como o mais fácil; a instalação manual é voltada a um público mais técnico.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como auto-hospedar',
        content: [
          '**Os passos seguem o guia oficial de instalação com Docker Compose; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          { title: 'Baixe os arquivos', whyItMatters: 'Baixe `docker-compose.yml` e `.env.sample` do repositório e salve o exemplo como `.env`.' },
          { title: 'Defina os segredos', whyItMatters: 'Edite o `.env` e troque `NEXTAUTH_SECRET`, `POSTGRES_PASSWORD` e `MEILI_MASTER_KEY` por três frases secretas diferentes.' },
          { title: 'Inicie a pilha', whyItMatters: 'Execute `docker compose up`; depois de alguns minutos o app responde na porta 3000.' },
          {
            title: 'Adicione a marcação por IA',
            whyItMatters: 'Se quiser, adicione as variáveis do Ollama ou de um serviço compatível com a OpenAI da próxima seção, reinicie a pilha e ative a marcação em Configurações, Preferências.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Marcação por IA: Ollama local ou nuvem',
        content: [
          '**A marcação é opcional: você escolhe entre um modelo local do Ollama e um provedor na nuvem preenchendo variáveis de ambiente.**',
        ],
        items: [
          '**Local com Ollama.** Defina `NEXT_PUBLIC_OLLAMA_ENDPOINT_URL` com o seu servidor Ollama, por exemplo `http://localhost:11434`, e `OLLAMA_MODEL` com um modelo baixado; segundo a documentação, um modelo leve como o phi3:mini-4k basta.',
          '**Nuvem ou API compatível.** `OPENAI_API_KEY` e `OPENAI_MODEL` funcionam com a OpenAI, e `CUSTOM_OPENAI_BASE_URL` aponta as mesmas variáveis para qualquer serviço compatível com a OpenAI; a documentação dá o Gemini como exemplo.',
          '**Mais provedores.** A referência de variáveis de ambiente também lista Azure OpenAI, Anthropic, OpenRouter e Perplexity.',
          '**Dois modos.** O Linkwarden pode gerar tags automaticamente ao adicionar um link ou atribuir tags de uma lista predefinida que você fornece; ambos são ativados em Configurações, Preferências.',
          '**Lotes em segundo plano.** A marcação roda no processo de segundo plano junto com o arquivamento, por padrão em lotes de cinco links (`ARCHIVE_TAKE_COUNT`).',
        ],
        note: 'A marcação é descrita como parte da versão 2.9; a página de uso diz que ela analisa o conteúdo dos seus links, mas a PromptQuorum não testou qual texto é enviado ao modelo nem a qualidade das tags.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**Ao auto-hospedar, links, tags e cópias preservadas ficam no seu próprio banco PostgreSQL e na pasta de dados.** O servidor busca cada página salva por conta própria em um navegador sem interface, então a rede do servidor enxerga cada endereço que você salva. Com um endpoint local do Ollama, a solicitação de marcação vai para o endereço que você configurou; com um provedor na nuvem, ela vai para esse provedor com a sua chave de API.',
          'A edição Cloud é operada pelo fabricante, e a sua [política de privacidade](https://linkwarden.app/privacy-policy) é datada de 31 de julho de 2023, anterior aos apps móveis; ela cita Ontário, Canadá como país e a empresa como controladora de dados no sentido do GDPR. A seção de segurança de dados do Google Play diz que nenhum dado é compartilhado com terceiros e que informações do app e de desempenho podem ser coletadas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São declarações do fabricante e da documentação, não resultados de auditoria. A PromptQuorum não inspecionou o tráfego de rede, e a documentação não informa qual provedor de IA a edição Cloud usa para a marcação opcional.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Quem hospeda os próprios serviços**, já usa Docker e quer arquivar páginas no próprio servidor.',
          '**Pesquisadores e equipes** que compartilham coleções e precisam de cópias anotadas e preservadas das fontes.',
          '**Usuários do Ollama** que querem tags automáticas sem enviar o texto das páginas a um provedor na nuvem.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade das tags.** A PromptQuorum não executou a marcação; precisão, velocidade e o comportamento de modelos locais pequenos são desconhecidos.',
          '**O que o modelo vê.** A documentação não informa quanto de uma página é enviado para marcação; por isso o ganho de privacidade de um modelo local é o comportamento documentado do endpoint, não um resultado medido.',
          '**Redação sobre o «local».** A página de uso diz que o recurso «usa um modelo de IA local», enquanto a página de instalação também lista provedores na nuvem; a de instalação é a fonte mais detalhada e é a usada aqui.',
          '**IA e armazenamento no Cloud.** A edição Cloud lista a marcação por IA como opcional sem nomear provedor, e a resposta sobre onde os dados ficam armazenados não estava legível na página de preços.',
          '**Uso de recursos.** A documentação dá cerca de 350 MB de memória ociosa desde a versão 2.15 como número do fabricante; a PromptQuorum não o mediu.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            App: '[Karakeep](/pt/power-local-llm/karakeep-review)',
            Plataformas: 'Web, iOS, Android',
            'Preço / licença': 'Grátis / AGPL-3.0',
            'Diferença principal': 'App auto-hospedado de favoritos e notas com marcação por IA via OpenAI ou Ollama; resumos e busca estão na análise dele',
          },
          {
            App: '[Blinko](/pt/power-local-llm/blinko-review)',
            Plataformas: 'Web (auto-hospedado)',
            'Preço / licença': 'Grátis / GPL-3.0',
            'Diferença principal': 'App auto-hospedado de notas com busca por IA nas suas notas; não arquiva páginas',
          },
        ],
        note: 'O Karakeep é o mais parecido: ambos são ferramentas de favoritos auto-hospedadas com marcação por IA opcional. Confirme preço, licença e plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Qual provedor é usado se eu configurar mais de um?',
            a: 'Segundo a referência de variáveis de ambiente, o Linkwarden os tenta nesta ordem: compatível com a OpenAI, Azure OpenAI, Anthropic, Ollama, OpenRouter e depois Perplexity. Por isso uma chave de API na nuvem esquecida no `.env` pode ter prioridade sobre o Ollama.',
          },
          {
            q: 'Os apps móveis funcionam sem um servidor?',
            a: 'Não. A descrição da App Store diz que o Linkwarden exige uma assinatura do Linkwarden Cloud ou uma conexão com o seu próprio servidor auto-hospedado; os apps indicam suporte offline para o conteúdo salvo.',
          },
          {
            q: 'Dá para rodar em uma máquina pequena?',
            a: 'Segundo a documentação, a reescrita da versão 2.15 reduziu a memória ociosa, e `DISABLE_BROWSER=true` dispensa capturas, PDFs, cópias HTML e a visão de leitura em troca do menor uso de memória.',
          },
          { q: 'Existe um limite de links?', a: 'A página de preços lista 30,000 links por usuário no Cloud, e a referência de auto-hospedagem define `MAX_LINKS_PER_USER` como 30000 por padrão.' },
          {
            q: 'Posso sair do Linkwarden Cloud depois?',
            a: 'A página de preços diz que os links podem ser exportados a qualquer momento e que não há dependência do fornecedor; a documentação também lista importação e exportação em «Usage».',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'O Linkwarden é uma forma de código aberto, com desenvolvimento ativo, de manter um arquivo das páginas que você salva, e o suporte documentado ao Ollama permite que a etapa de marcação fique no seu próprio hardware. Em contrapartida, a pilha auto-hospedada exige três contêineres e um terminal, os apps móveis dependem de um servidor, a edição Cloud é um serviço pago com uma política de privacidade antiga e nada do comportamento da IA foi testado aqui. Serve para quem já usa Docker e quer um arquivo de páginas com marcação local opcional; quem busca zero configuração deve primeiro comparar as condições do Cloud com o Karakeep.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Linkwarden](https://linkwarden.app) — recursos, preços e links dos apps, consultado em 24 de outubro de 2026.',
          '[Guia de auto-hospedagem](https://docs.linkwarden.app/self-hosting/setup) e [marcação por IA](https://docs.linkwarden.app/self-hosting/ai-worker) — requisitos, passos do Docker e variáveis dos provedores, consultados em 24 de outubro de 2026.',
          '[Variáveis de ambiente](https://docs.linkwarden.app/self-hosting/environment-variables) — ordem dos provedores de IA e valores padrão, consultado em 24 de outubro de 2026.',
          '[Linkwarden no GitHub](https://github.com/linkwarden/linkwarden) — README, licença e release v2.16.3, consultados em 24 de outubro de 2026.',
          'Páginas da [App Store](https://apps.apple.com/app/linkwarden/id6752550960) e do [Google Play](https://play.google.com/store/apps/details?id=app.linkwarden) — versões e requisitos dos apps, consultados em 24 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Karakeep](/pt/power-local-llm/karakeep-review) — app auto-hospedado de favoritos e notas com marcação por IA.',
          '[Análise do Blinko](/pt/power-local-llm/blinko-review) — app auto-hospedado de notas com busca por IA.',
          '[Ollama](https://ollama.com) — o executor de modelos locais que o Linkwarden pode chamar para marcar.',
          '[Diretório de software de LLM locais](/pt/directory) — o catálogo completo de ferramentas de IA local.',
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
    heroImage: '/images/linkwarden-review-hero-ar.webp',
    title: 'مراجعة Linkwarden: إشارات مرجعية مستضافة ذاتيًا مع وسم بالذكاء الاصطناعي المحلي',
    seoTitle: 'مراجعة Linkwarden: إشارات مرجعية ذاتية الاستضافة ووسم ذكي',
    intro: 'Linkwarden مدير إشارات مرجعية مفتوح المصدر (AGPL-3.0) من [Linkwarden Inc.](https://linkwarden.app)، يحفظ نسخة من كل صفحة تضيفها ويمكنه وسم الروابط تلقائيًا بنموذج ذكاء اصطناعي تضبطه أنت، سواء كان نموذج Ollama محليًا أو مزوّدًا سحابيًا. يمكنك استضافته بنفسك عبر Docker أو دفع اشتراك نسخة Cloud التي تقدمها الشركة. تستند هذه المراجعة إلى موقع الشركة ووثائقها ومستودع GitHub وصفحتي App Store وGoogle Play، وقد رُوجعت في 24 أكتوبر 2026؛ ولم تجرّب PromptQuorum التطبيق عمليًا.',
    metaDescription: 'مراجعة Linkwarden: مدير إشارات مرجعية ذاتي الاستضافة يؤرشف الصفحات ويصنّف الروابط بنموذج Ollama محلي أو ذكاء سحابي. إعداد Docker وسعر Cloud؛ دون تجربة.',
    twitterDescription: 'مراجعة Linkwarden: إشارات مرجعية ذاتية الاستضافة تؤرشف كل صفحة، مع وسم اختياري بالذكاء الاصطناعي عبر Ollama محلي أو مزوّد سحابي. ما أكدته المصادر.',
    audience: 'المستضيفون الذاتيون والقراء المهتمون بالخصوصية الذين يريدون أرشيف إشارات مرجعية مع وسم اختياري بالذكاء الاصطناعي ويحتاجون إلى معرفة هل يمكن أن يبقى الوسم على أجهزتهم.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Linkwarden',
    targetKeywords: [
      'مراجعة linkwarden',
      'linkwarden ollama',
      'وسم linkwarden بالذكاء الاصطناعي',
      'مدير إشارات مرجعية ذاتي الاستضافة',
      'استضافة linkwarden ذاتيًا docker',
      'linkwarden مقابل karakeep',
      'مدير إشارات مرجعية بذكاء اصطناعي محلي',
    ],
    current_models_mentioned: ['phi3:mini-4k'],
    current_hardware_mentioned: ['Docker', 'PostgreSQL', 'Meilisearch'],
    leadAnswerBlock: '**Linkwarden (الإصدار 2.16.3 الصادر في 9 سبتمبر 2026) مدير إشارات مرجعية برخصة AGPL-3.0 يؤرشف نسخة من كل صفحة تحفظها ويمكنه وسم الروابط بنموذج ذكاء اصطناعي تضبطه أنت.** يمكنك استضافته ذاتيًا مجانًا أو استخدام نسخة Cloud المدفوعة.',
    quickAnswerTop: {
      ar: {
        question: 'هل يستطيع Linkwarden وسم الإشارات المرجعية بنموذج Ollama محلي؟',
        answer: 'بحسب وثائق المشروع، نعم: تحدد عنوان خادم Ollama واسم النموذج في ملف `.env`، وتشير الوثائق إلى أن نموذجًا صغيرًا مثل phi3:mini-4k يكفي. ويمكنه أيضًا استخدام مزوّدين متوافقين مع OpenAI ومزوّدين سحابيين آخرين.',
        bullets: [
          'يُحفظ كل رابط على شكل عرض قراءة وملف HTML واحد ولقطة شاشة وملف PDF.',
          'يدعم عرض القراءة التظليل والتعليقات.',
          'يمكن مشاركة المجموعات علنًا أو مع أعضاء الفريق.',
          'يُذكر وجود تطبيقين أصليين لنظامي iOS وAndroid وإضافة للمتصفح.',
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
        label: 'ما هو Linkwarden؟',
        anchor: 'what-is-linkwarden',
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
        label: 'كيف تستضيفه ذاتيًا',
        anchor: 'getting-started',
      },
      {
        label: 'الوسم بالذكاء الاصطناعي: Ollama محلي أو سحابة',
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
          { type: 'one-sentence', text: 'Linkwarden مدير إشارات مرجعية مفتوح المصدر يحفظ نسخة من كل صفحة على خادم تتحكم فيه، ويمكنه إضافة وسوم بنموذج ذكاء اصطناعي محلي أو سحابي.' },
          { type: 'plain-terms', text: 'تحفظ رابطًا، فتفتح عملية في الخلفية الصفحة في متصفح وتحتفظ بنسخة منها، ويقترح نموذج الذكاء الاصطناعي الذي أعددته وسومًا تسهّل العثور عليها لاحقًا.' },
        ],
        items: [
          'الصيانة: أحدث إصدار 2.16.3 صدر في 9 سبتمبر 2026، وتلقى المستودع إيداعات في 24 أكتوبر 2026، لذلك لا ينطبق تحذير المشروع المتوقف.',
          'الوسم بالذكاء الاصطناعي: معطّل على الخادم الذاتي حتى تضبط مزوّدًا؛ ويصفه موقع الشركة بأنه اختياري في Cloud.',
          'التكلفة: الاستضافة الذاتية مجانية؛ أما نسخة Cloud المُدارة فاشتراك مدفوع.',
          'العملاء: تطبيق ويب وتطبيقا iOS وAndroid وإضافة للمتصفح.',
          'التجربة: قُرئت المصادر فقط، ولم تثبّت PromptQuorum أو تقِس أي شيء.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى موقع الشركة ووثائقها ومستودع GitHub وصفحات المتاجر، وقد رُوجعت في 24 أكتوبر 2026. لم تثبّت PromptQuorum تطبيق Linkwarden ولم تشغّل الوسم بالذكاء الاصطناعي ولم تقِس استهلاك الموارد.',
          },
        ],
      },
      overview: {
        id: 'what-is-linkwarden',
        title: 'ما هو Linkwarden؟',
        content: [
          '**Linkwarden مدير إشارات مرجعية تعاوني يحتفظ بنسخة من كل صفحة محفوظة، فيبقى المحتوى متاحًا حتى لو اختفى الأصل.** يصفه ملف README بأنه أداة مفتوحة المصدر ذاتية الاستضافة لجمع الصفحات وقراءتها والتعليق عليها وحفظها، وتنشره الشركة التي تقف خلف linkwarden.app، ورخصة الشيفرة المصدرية هي AGPL-3.0.',
          'لكل رابط تنتج عملية في الخلفية ما يصل إلى أربع صيغ: عرض قراءة للمقال، ونسخة HTML كاملة في ملف واحد، ولقطة شاشة للصفحة كاملة، وملف PDF؛ أما إرسال العنوان إلى Wayback Machine فهو إضافة اختيارية ومعطّلة افتراضيًا بحسب الوثائق. تُنظَّم الروابط في مجموعات ومجموعات فرعية مع وسوم، ويُبحث فيها بالبحث النصي الكامل، ويمكن مشاركتها علنًا أو مع أعضاء الفريق مع ضبط صلاحيات كل عضو على حدة.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**Linkwarden تطبيق ويب إما أن تستضيفه بنفسك أو تستأجره باسم Linkwarden Cloud؛ أما تطبيقا iOS وAndroid وإضافة المتصفح فتتصل بأحد الخيارين.**',
        ],
        columns: ['الخيار', 'مصدر الحصول عليه'],
        rows: [
          { 'الخيار': 'Linkwarden Cloud', 'مصدر الحصول عليه': '[cloud.linkwarden.app](https://cloud.linkwarden.app)، اشتراك مدفوع' },
          { 'الخيار': 'سعر Cloud', 'مصدر الحصول عليه': 'تجربة مجانية 14 يومًا ثم $3 لكل مستخدم شهريًا بفوترة سنوية (بالدولار الأمريكي كما يظهر في الموقع)' },
          { 'الخيار': 'iPhone وiPad', 'مصدر الحصول عليه': '[Linkwarden على App Store](https://apps.apple.com/app/linkwarden/id6752550960)، تنزيل مجاني' },
          { 'الخيار': 'Android', 'مصدر الحصول عليه': '[Linkwarden على Google Play](https://play.google.com/store/apps/details?id=app.linkwarden)، يذكر مشتريات داخل التطبيق' },
          { 'الخيار': 'ذاتي الاستضافة (Docker)', 'مصدر الحصول عليه': 'مجاني؛ اتبع [دليل الإعداد](https://docs.linkwarden.app/self-hosting/setup)، ويلزم طرفية' },
          { 'الخيار': 'إضافة المتصفح', 'مصدر الحصول عليه': 'Chrome وFirefox وSafari، راجع [دليل الإضافة](https://docs.linkwarden.app/getting-started/browser-extension)' },
          { 'الخيار': 'الموقع', 'مصدر الحصول عليه': '[linkwarden.app](https://linkwarden.app)' },
          { 'الخيار': 'سياسة الخصوصية', 'مصدر الحصول عليه': '[linkwarden.app/privacy-policy](https://linkwarden.app/privacy-policy)' },
          { 'الخيار': 'الشيفرة المصدرية', 'مصدر الحصول عليه': '[github.com/linkwarden/linkwarden](https://github.com/linkwarden/linkwarden)، برخصة AGPL-3.0' },
        ],
        note: 'الإصدار الذي رُوجع: 2.16.3 (إصدار GitHub بتاريخ 9 سبتمبر 2026). تطبيق iOS بإصدار 1.4.4 وقد حُدّث في 12 أكتوبر 2026 وفق App Store، وتعرض صفحة Google Play التاريخ نفسه. كان التطبيق مجانيًا في متاجر الولايات المتحدة وألمانيا واليابان على App Store؛ ويظهر سعر Cloud بالدولار الأمريكي فقط ولم يُعثر على سعر باليورو أو الين. لا يوجد مثبّت للخادم: يلزم Docker أو تثبيت يدوي بـ Node وPostgreSQL.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**يذكر دليل الاستضافة الذاتية 4 GB من الذاكرة كنقطة بداية مريحة، وأي معالج بنواتين، ونحو 1.5 GB من القرص للصورة.**',
        ],
        columns: ['البند', 'ما تقوله المصادر'],
        rows: [
          { 'البند': 'الخادم', 'ما تقوله المصادر': 'Docker Compose بثلاث حاويات: Linkwarden وPostgreSQL 16 وMeilisearch؛ وصور لمعماريتي x86-64 وARM64' },
          { 'البند': 'الأسرار', 'ما تقوله المصادر': 'يجب تغيير `NEXTAUTH_SECRET` و`POSTGRES_PASSWORD` و`MEILI_MASTER_KEY` عن القيم النموذجية' },
          { 'البند': 'الذكاء الاصطناعي المحلي', 'ما تقوله المصادر': 'خادم Ollama منفصل ونموذج منزَّل إذا أردت الوسم محليًا؛ ولا يتطلب Linkwarden نفسه وحدة GPU' },
          { 'البند': 'تطبيقات الجوال', 'ما تقوله المصادر': 'iOS 15.1 أو أحدث وفق App Store؛ وتحتاج إلى اشتراك Cloud أو خادمك الخاص' },
          { 'البند': 'التثبيت اليدوي', 'ما تقوله المصادر': 'Node 20 أو أحدث وYarn وPostgreSQL 16 أو أحدث؛ وMeilisearch اختياري للبحث المتقدم' },
        ],
        note: 'يصف الدليل مسار Docker بأنه الأسهل؛ أما التثبيت اليدوي فموجّه إلى جمهور أكثر تقنية.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تستضيفه ذاتيًا',
        content: [
          '**تتبع الخطوات دليل الإعداد الرسمي لـ Docker Compose؛ ولم تنفّذها PromptQuorum.**',
        ],
        numberedItems: [
          { title: 'نزّل الملفات', whyItMatters: 'نزّل `docker-compose.yml` و`.env.sample` من المستودع واحفظ النموذج باسم `.env`.' },
          { title: 'حدّد الأسرار', whyItMatters: 'عدّل `.env` واستبدل `NEXTAUTH_SECRET` و`POSTGRES_PASSWORD` و`MEILI_MASTER_KEY` بثلاث عبارات سرية مختلفة.' },
          { title: 'شغّل الحزمة', whyItMatters: 'نفّذ `docker compose up`؛ وبعد دقائق يستجيب التطبيق على المنفذ 3000.' },
          { title: 'أضف الوسم بالذكاء الاصطناعي', whyItMatters: 'أضف اختياريًا متغيرات Ollama أو الخدمة المتوافقة مع OpenAI من القسم التالي، وأعد تشغيل الحزمة، ثم فعّل الوسم من الإعدادات ثم التفضيلات.' },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الوسم بالذكاء الاصطناعي: Ollama محلي أو سحابة',
        content: [
          '**الوسم اختياري: تختار بين نموذج Ollama محلي ومزوّد سحابي بتعبئة متغيرات البيئة.**',
        ],
        items: [
          '**محليًا مع Ollama.** اضبط `NEXT_PUBLIC_OLLAMA_ENDPOINT_URL` على خادم Ollama لديك، مثل `http://localhost:11434`، واضبط `OLLAMA_MODEL` على نموذج منزَّل؛ وتذكر الوثائق أن نموذجًا خفيفًا مثل phi3:mini-4k يكفي.',
          '**السحابة أو واجهة متوافقة.** يعمل `OPENAI_API_KEY` و`OPENAI_MODEL` مع OpenAI، ويوجّه `CUSTOM_OPENAI_BASE_URL` المتغيرات نفسها إلى أي خدمة متوافقة مع OpenAI، وتذكر الوثائق Gemini مثالًا.',
          '**مزوّدون آخرون.** يسرد مرجع متغيرات البيئة أيضًا Azure OpenAI وAnthropic وOpenRouter وPerplexity.',
          '**وضعان.** يستطيع Linkwarden توليد الوسوم تلقائيًا عند إضافة رابط، أو تعيين وسوم من قائمة محددة مسبقًا تقدمها أنت؛ ويُفعَّل الوضعان من الإعدادات ثم التفضيلات.',
          '**دفعات في الخلفية.** يعمل الوسم في عملية الخلفية مع الأرشفة، وافتراضيًا على دفعات من خمسة روابط (`ARCHIVE_TAKE_COUNT`).',
        ],
        note: 'يوصف الوسم بأنه جزء من الإصدار 2.9؛ وتقول صفحة الاستخدام إنه يحلل محتوى روابطك، لكن PromptQuorum لم تختبر ما هو النص المرسل إلى النموذج ولا جودة الوسوم.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**عند الاستضافة الذاتية تُخزَّن الروابط والوسوم والنسخ المحفوظة في قاعدة PostgreSQL الخاصة بك وفي مجلد البيانات.** يجلب الخادم بنفسه كل صفحة محفوظة عبر متصفح بلا واجهة، لذلك ترى شبكة الخادم كل عنوان تحفظه. ومع نقطة Ollama محلية يذهب طلب الوسم إلى العنوان الذي ضبطته؛ ومع مزوّد سحابي يذهب إلى ذلك المزوّد بمفتاح API الخاص بك.',
          'تُدير الشركة نسخة Cloud، و[سياسة الخصوصية](https://linkwarden.app/privacy-policy) مؤرخة في 31 يوليو 2023، أي قبل ظهور تطبيقات الجوال؛ وتذكر أونتاريو في كندا بلدًا، وتسمّي الشركة مسؤول معالجة البيانات بمفهوم GDPR. ويذكر قسم أمان البيانات في Google Play أنه لا تُشارَك بيانات مع جهات خارجية وأنه قد تُجمع معلومات التطبيق وبيانات الأداء.',
        ],
        callouts: [
          { type: 'note', text: 'هذه تصريحات الشركة والوثائق وليست نتائج تدقيق. لم تفحص PromptQuorum حركة الشبكة، ولا تذكر الوثائق أي مزوّد ذكاء اصطناعي تستخدمه نسخة Cloud للوسم الاختياري.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**المستضيفون الذاتيون** الذين يشغّلون Docker بالفعل ويريدون أرشفة الصفحات على خادمهم.',
          '**الباحثون والفرق** الذين يشاركون المجموعات ويحتاجون إلى نسخ محفوظة ومعلّق عليها من المصادر.',
          '**مستخدمو Ollama** الذين يريدون وسومًا تلقائية دون إرسال نص الصفحات إلى مزوّد سحابي.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**جودة الوسوم.** لم تشغّل PromptQuorum الوسم، لذا فدقته وسرعته وسلوك النماذج المحلية الصغيرة غير معروفة.',
          '**ما يراه النموذج.** لا تذكر الوثائق مقدار ما يُرسل من الصفحة للوسم، فمكسب الخصوصية في النموذج المحلي هو سلوك النقطة الموثَّق وليس نتيجة مقيسة.',
          '**صياغة «محلي».** تقول صفحة الاستخدام إن الميزة «تستخدم نموذج ذكاء اصطناعي محليًا»، بينما تسرد صفحة الإعداد مزوّدين سحابيين أيضًا؛ وصفحة الإعداد هي الأكثر تفصيلًا وهي المعتمدة هنا.',
          '**الذكاء الاصطناعي والتخزين في Cloud.** تذكر نسخة Cloud وسمًا اختياريًا بالذكاء الاصطناعي دون تسمية المزوّد، ولم يكن الجواب عن مكان تخزين البيانات مقروءًا في صفحة الأسعار.',
          '**استهلاك الموارد.** تذكر الوثائق نحو 350 MB من الذاكرة في وضع الخمول منذ الإصدار 2.15 كرقم من الشركة؛ ولم تقسه PromptQuorum.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          {
            'التطبيق': '[Karakeep](/ar/power-local-llm/karakeep-review)',
            'المنصات': 'ويب وiOS وAndroid',
            'السعر / الرخصة': 'مجاني / AGPL-3.0',
            'الفرق الأبرز': 'تطبيق إشارات مرجعية وملاحظات ذاتي الاستضافة مع وسم بالذكاء الاصطناعي عبر OpenAI أو Ollama؛ والملخصات والبحث في مراجعته',
          },
          {
            'التطبيق': '[Blinko](/ar/power-local-llm/blinko-review)',
            'المنصات': 'ويب (ذاتي الاستضافة)',
            'السعر / الرخصة': 'مجاني / GPL-3.0',
            'الفرق الأبرز': 'تطبيق ملاحظات ذاتي الاستضافة مع بحث بالذكاء الاصطناعي في ملاحظاتك؛ ليس لأرشفة الصفحات',
          },
        ],
        note: 'Karakeep هو الأقرب: كلاهما أداة إشارات مرجعية ذاتية الاستضافة مع وسم اختياري بالذكاء الاصطناعي. تحقّق من السعر والرخصة والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'أي مزوّد يُستخدم إذا ضبطت أكثر من واحد؟',
            a: 'بحسب مرجع متغيرات البيئة يجرّبها Linkwarden بهذا الترتيب: المتوافق مع OpenAI ثم Azure OpenAI ثم Anthropic ثم Ollama ثم OpenRouter ثم Perplexity. لذلك قد يتقدم مفتاح API سحابي متروك في `.env` على Ollama.',
          },
          {
            q: 'هل تعمل تطبيقات الجوال دون خادم؟',
            a: 'لا. يذكر وصف App Store أن Linkwarden يحتاج إلى اشتراك Linkwarden Cloud أو اتصال بخادمك الذاتي الاستضافة؛ وتذكر التطبيقات دعم العمل دون اتصال للمحتوى المحفوظ.',
          },
          {
            q: 'هل يعمل على جهاز صغير؟',
            a: 'تقول الوثائق إن إعادة كتابة الإصدار 2.15 خفّضت الذاكرة في وضع الخمول، وإن `DISABLE_BROWSER=true` يتخطى لقطات الشاشة وملفات PDF ونسخ HTML وعرض القراءة مقابل أدنى استهلاك للذاكرة.',
          },
          { q: 'هل هناك حد لعدد الروابط؟', a: 'تذكر صفحة الأسعار 30,000 رابط لكل مستخدم في Cloud، ويضبط مرجع الاستضافة الذاتية `MAX_LINKS_PER_USER` على 30000 افتراضيًا.' },
          { q: 'هل يمكنني مغادرة Linkwarden Cloud لاحقًا؟', a: 'تقول صفحة الأسعار إنه يمكن تصدير الروابط في أي وقت وإنه لا يوجد ارتباط إلزامي؛ كما تسرد الوثائق الاستيراد والتصدير ضمن Usage.' },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'Linkwarden وسيلة مفتوحة المصدر وتتطور بنشاط للاحتفاظ بأرشيف للصفحات التي تحفظها، ويتيح دعم Ollama الموثَّق إبقاء خطوة الوسم على أجهزتك. في المقابل تحتاج الحزمة الذاتية الاستضافة إلى ثلاث حاويات وطرفية، وتعتمد تطبيقات الجوال على خادم، ونسخة Cloud خدمة مدفوعة بسياسة خصوصية قديمة التاريخ، ولم يُختبر هنا أي سلوك للذكاء الاصطناعي. يناسب المستضيفين الذاتيين الذين يشغّلون Docker ويريدون أرشيف صفحات مع وسم محلي اختياري؛ ومن يريد تجربة بلا إعداد فعليه أن يقارن شروط Cloud بـ Karakeep أولًا.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Linkwarden](https://linkwarden.app) — الميزات والأسعار وروابط التطبيقات، روجع في 24 أكتوبر 2026.',
          '[إعداد الاستضافة الذاتية](https://docs.linkwarden.app/self-hosting/setup) و[الوسم بالذكاء الاصطناعي](https://docs.linkwarden.app/self-hosting/ai-worker) — المتطلبات وخطوات Docker ومتغيرات المزوّدين، روجعت في 24 أكتوبر 2026.',
          '[متغيرات البيئة](https://docs.linkwarden.app/self-hosting/environment-variables) — ترتيب مزوّدي الذكاء الاصطناعي والقيم الافتراضية، روجعت في 24 أكتوبر 2026.',
          '[Linkwarden على GitHub](https://github.com/linkwarden/linkwarden) — README والرخصة والإصدار v2.16.3، روجعت في 24 أكتوبر 2026.',
          'صفحتا [App Store](https://apps.apple.com/app/linkwarden/id6752550960) و[Google Play](https://play.google.com/store/apps/details?id=app.linkwarden) — إصدارات التطبيق ومتطلباته، روجعتا في 24 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Karakeep](/ar/power-local-llm/karakeep-review) — تطبيق إشارات مرجعية وملاحظات ذاتي الاستضافة مع وسم بالذكاء الاصطناعي.',
          '[مراجعة Blinko](/ar/power-local-llm/blinko-review) — تطبيق ملاحظات ذاتي الاستضافة مع بحث بالذكاء الاصطناعي.',
          '[Ollama](https://ollama.com) — مشغّل النماذج المحلية الذي يمكن لـ Linkwarden استدعاؤه للوسم.',
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
    heroImage: '/images/linkwarden-review-hero-zh.webp',
    title: 'Linkwarden 评测：支持本地 AI 打标签的自托管书签管理器',
    seoTitle: 'Linkwarden 评测：自托管书签，支持本地 AI 打标签',
    intro: 'Linkwarden 是 [Linkwarden Inc.](https://linkwarden.app) 推出的开源（AGPL-3.0）书签管理器，会为每个收藏的网页保存一份副本，并可用你配置的 AI 模型（本地 Ollama 模型或云端服务商）为链接自动打标签。你可以用 Docker 自行托管，也可以付费使用厂商的 Cloud 版。本评测基于厂商官网与文档、GitHub 仓库以及 App Store 和 Google Play 页面（2026年10月24日查阅），PromptQuorum 未实际测试该应用。',
    metaDescription: 'Linkwarden 评测：自托管书签管理器，可归档网页，并用本地 Ollama 模型或云端 AI 为链接打标签。含 Docker 部署与 Cloud 价格；未实测。',
    twitterDescription: 'Linkwarden 评测：自托管书签，归档每个网页，可选用本地 Ollama 或云端服务商进行 AI 打标签。来源已证实的内容。',
    audience: '自托管用户和重视隐私的读者：想要带可选 AI 打标签功能的书签归档，并想知道打标签能否留在自己的硬件上。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Linkwarden 评测',
    targetKeywords: [
      'linkwarden 评测',
      'linkwarden ollama',
      'linkwarden ai 打标签',
      '自托管书签管理器',
      'linkwarden docker 自托管',
      'linkwarden 对比 karakeep',
      '本地 ai 书签管理器',
    ],
    current_models_mentioned: ['phi3:mini-4k'],
    current_hardware_mentioned: ['Docker', 'PostgreSQL', 'Meilisearch'],
    leadAnswerBlock: '**Linkwarden（版本 2.16.3，2026年9月9日发布）是采用 AGPL-3.0 许可证的书签管理器，会归档每个收藏网页的副本，并可用你配置的 AI 模型为链接打标签。**你可以免费自托管，也可以使用付费的 Cloud 版。',
    quickAnswerTop: {
      zh: {
        question: 'Linkwarden 能用本地 Ollama 模型给书签打标签吗？',
        answer: '据项目文档，可以：在 `.env` 文件中填写 Ollama 服务器地址和模型名称即可，文档称 phi3:mini-4k 这类小模型就够用。它也可以改用兼容 OpenAI 的服务和其他云端服务商。',
        bullets: [
          '每个保存的链接会存为阅读视图、单个 HTML 文件、截图和 PDF。',
          '阅读视图支持高亮和批注。',
          '收藏集可以公开分享，也可以与团队成员共享。',
          '列有 iOS 和 Android 原生应用以及浏览器扩展。',
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
        label: 'Linkwarden 是什么？',
        anchor: 'what-is-linkwarden',
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
        label: '自托管步骤',
        anchor: 'getting-started',
      },
      {
        label: 'AI 打标签：本地 Ollama 还是云端',
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
          { type: 'one-sentence', text: 'Linkwarden 是一款开源书签管理器，会把每个收藏网页的副本存放在你控制的服务器上，并可用本地或云端 AI 模型添加标签。' },
          { type: 'plain-terms', text: '你保存一个链接，后台进程会在浏览器中打开该页面并保留副本，你配置好的 AI 模型会建议标签，方便日后查找。' },
        ],
        items: [
          '维护情况：最新版本 2.16.3 发布于2026年9月9日，仓库在2026年10月24日仍有提交，因此不适用“项目停更”警告。',
          'AI 打标签：自托管服务器上需先配置服务商才会启用；厂商官网称 Cloud 版中也是可选功能。',
          '费用：自托管免费；托管的 Cloud 版为付费订阅。',
          '客户端：网页应用、iOS 和 Android 应用，以及浏览器扩展。',
          '测试：仅阅读了来源，PromptQuorum 没有安装或测量任何内容。',
        ],
        callouts: [
          { type: 'note', text: '本评测基于厂商官网与文档、GitHub 仓库及应用商店页面（2026年10月24日查阅）。PromptQuorum 没有安装 Linkwarden，也没有运行其 AI 打标签功能或测量资源占用。' },
        ],
      },
      overview: {
        id: 'what-is-linkwarden',
        title: 'Linkwarden 是什么？',
        content: [
          '**Linkwarden 是一款协作式书签管理器，会为每个保存的网页保留副本，即使原页面下线，内容也不会丢失。**README 将其描述为用于收集、阅读、批注和保存网页的自托管开源工具，由 linkwarden.app 背后的公司发布；源代码采用 AGPL-3.0 许可证。',
          '每个链接由后台进程生成最多四种格式：文章阅读视图、完整的单文件 HTML 副本、整页截图和 PDF；据文档，把地址提交到 Wayback Machine 是可选的附加功能，默认关闭。链接可按带标签的收藏集和子收藏集整理，支持全文搜索，并能公开分享，或与可逐个设置权限的团队成员共享。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Linkwarden 是一款网页应用，你可以自己托管，也可以租用 Linkwarden Cloud；iOS 和 Android 应用以及浏览器扩展会连接到这两者之一。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          { '选项': 'Linkwarden Cloud', '获取方式': '[cloud.linkwarden.app](https://cloud.linkwarden.app)，付费订阅' },
          { '选项': 'Cloud 价格', '获取方式': '14天免费试用，之后每位用户每月 $3（按年计费；USD，以官网标注为准）' },
          { '选项': 'iPhone 和 iPad', '获取方式': '[App Store 上的 Linkwarden](https://apps.apple.com/app/linkwarden/id6752550960)，免费下载' },
          { '选项': 'Android', '获取方式': '[Google Play 上的 Linkwarden](https://play.google.com/store/apps/details?id=app.linkwarden)，标注含应用内购买' },
          { '选项': '自托管（Docker）', '获取方式': '免费；按[安装指南](https://docs.linkwarden.app/self-hosting/setup)操作，需要终端' },
          { '选项': '浏览器扩展', '获取方式': 'Chrome、Firefox 和 Safari，见[扩展指南](https://docs.linkwarden.app/getting-started/browser-extension)' },
          { '选项': '官网', '获取方式': '[linkwarden.app](https://linkwarden.app)' },
          { '选项': '隐私政策', '获取方式': '[linkwarden.app/privacy-policy](https://linkwarden.app/privacy-policy)' },
          { '选项': '源代码', '获取方式': '[github.com/linkwarden/linkwarden](https://github.com/linkwarden/linkwarden)，AGPL-3.0' },
        ],
        note: '本次评测版本：2.16.3（GitHub 于2026年9月9日发布）。据 App Store，iOS 应用版本为 1.4.4，更新于2026年10月12日，Google Play 页面同样显示2026年10月12日。在美国、德国和日本的 App Store 中该应用均为免费；Cloud 价格仅以美元显示，未找到欧元或日元价格。服务器端没有安装程序，需要使用 Docker，或用 Node 和 PostgreSQL 手动安装。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: ['**自托管指南将 4 GB 内存视为比较宽裕的起点，CPU 只要 2 核即可，镜像约占 1.5 GB 磁盘空间。**'],
        columns: ['项目', '来源说明'],
        rows: [
          { '项目': '服务器', '来源说明': 'Docker Compose，三个容器：Linkwarden、PostgreSQL 16 和 Meilisearch；提供 x86-64 和 ARM64 镜像' },
          { '项目': '密钥', '来源说明': '`NEXTAUTH_SECRET`、`POSTGRES_PASSWORD` 和 `MEILI_MASTER_KEY` 必须改掉示例值' },
          { '项目': '本地 AI', '来源说明': '若想在本地打标签，需要另行部署 Ollama 服务器并拉取模型；Linkwarden 本身不需要 GPU' },
          { '项目': '移动应用', '来源说明': '据 App Store 需要 iOS 15.1 或更高版本；需要 Cloud 订阅或你自己的服务器' },
          { '项目': '手动安装', '来源说明': 'Node 20 或更高、Yarn、PostgreSQL 16 或更高；高级搜索使用的 Meilisearch 为可选' },
        ],
        note: '指南将 Docker 方式描述为更简单的途径；手动安装面向技术背景更强的用户。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '自托管步骤',
        content: ['**步骤依据官方的 Docker Compose 安装指南整理；PromptQuorum 没有执行过。**'],
        numberedItems: [
          { title: '下载文件', whyItMatters: '从仓库获取 `docker-compose.yml` 和 `.env.sample`，并把示例文件另存为 `.env`。' },
          { title: '设置密钥', whyItMatters: '编辑 `.env`，把 `NEXTAUTH_SECRET`、`POSTGRES_PASSWORD` 和 `MEILI_MASTER_KEY` 换成三个互不相同的保密字符串。' },
          { title: '启动服务', whyItMatters: '运行 `docker compose up`，几分钟后应用会在 3000 端口响应。' },
          { title: '添加 AI 打标签', whyItMatters: '如有需要，加入下一节中的 Ollama 或兼容 OpenAI 的变量，重启服务，并在设置、偏好设置中启用打标签。' },
        ],
      },
      features: {
        id: 'key-features',
        title: 'AI 打标签：本地 Ollama 还是云端',
        content: ['**打标签是可选功能：通过填写环境变量，在本地 Ollama 模型和云端服务商之间选择。**'],
        items: [
          '**用 Ollama 在本地运行。**把 `NEXT_PUBLIC_OLLAMA_ENDPOINT_URL` 设为你的 Ollama 服务器（例如 `http://localhost:11434`），把 `OLLAMA_MODEL` 设为已拉取的模型；文档称 phi3:mini-4k 这类轻量模型就够用。',
          '**云端或兼容 API。**`OPENAI_API_KEY` 和 `OPENAI_MODEL` 可用于 OpenAI，设置 `CUSTOM_OPENAI_BASE_URL` 后，同样的变量可指向任何兼容 OpenAI 的服务，文档以 Gemini 为例。',
          '**更多服务商。**环境变量参考还列出了 Azure OpenAI、Anthropic、OpenRouter 和 Perplexity。',
          '**两种模式。**Linkwarden 可在添加链接时自动生成标签，也可从你提供的预设标签列表中分配标签；两者都在设置、偏好设置中开启。',
          '**后台批处理。**打标签与归档一起在后台进程中运行，默认每批处理五个链接（`ARCHIVE_TAKE_COUNT`）。',
        ],
        note: '打标签被描述为 2.9 版本引入的功能；使用页面称其会分析链接的内容，但 PromptQuorum 没有测试发送给模型的是哪些文本，也没有评估标签的质量。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**自托管时，链接、标签和保存的副本都存放在你自己的 PostgreSQL 数据库和数据文件夹中。**服务器会在无头浏览器里自行抓取每个保存的页面，因此服务器所在的网络能看到你收藏的每个地址。使用本地 Ollama 端点时，打标签请求发往你配置的地址；使用云端服务商时，请求会带着你的 API 密钥发往该服务商。',
          'Cloud 版由厂商运营，其[隐私政策](https://linkwarden.app/privacy-policy)日期为2023年7月31日，早于移动应用出现；政策列出的国家为加拿大安大略省，并把该公司列为 GDPR 意义上的数据控制者。Google Play 的数据安全栏目称不与第三方共享数据，并可能收集应用信息和性能数据。',
        ],
        callouts: [
          { type: 'note', text: '以上是厂商和文档的说法，不是审计结果。PromptQuorum 没有检查网络流量，文档也没有说明 Cloud 版的可选打标签使用哪家 AI 服务商。' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**自托管用户**：已经在用 Docker，想把网页归档在自己的服务器上。',
          '**研究人员和团队**：需要共享收藏集，并保留带批注的资料副本。',
          '**Ollama 用户**：想要自动标签，又不想把网页文本发给云端服务商。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**标签质量。**PromptQuorum 没有运行打标签功能，因此准确性、速度以及小型本地模型的表现均属未知。',
          '**模型能看到什么。**文档没有说明打标签时会发送网页的多少内容，因此本地模型在隐私上的好处只是文档记载的端点行为，而非实测结果。',
          '**关于“本地”的表述。**使用页面称该功能“使用本地 AI 模型”，而安装页面同时列出了云端服务商；安装页面更详细，这里采用它的说法。',
          '**Cloud 版的 AI 与存储位置。**Cloud 版称 AI 打标签为可选功能但未写明服务商，价格页上关于数据存放位置的回答也无法读取。',
          '**资源占用。**文档给出自 2.15 版本起空闲内存约 350 MB，这是厂商的数字；PromptQuorum 没有实测。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[Karakeep](/zh/power-local-llm/karakeep-review)', '平台': 'Web、iOS、Android', '价格 / 许可证': '免费 / AGPL-3.0', '主要区别': '自托管的书签与笔记应用，通过 OpenAI 或 Ollama 进行 AI 打标签；摘要和搜索见其评测' },
          { '应用': '[Blinko](/zh/power-local-llm/blinko-review)', '平台': 'Web（自托管）', '价格 / 许可证': '免费 / GPL-3.0', '主要区别': '自托管笔记应用，可对笔记做 AI 搜索；不用于归档网页' },
        ],
        note: 'Karakeep 最为接近：两者都是带可选 AI 打标签的自托管书签工具。请在各应用的官方页面核实当前价格、许可证和支持平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '同时配置多个服务商时会用哪一个？', a: '据环境变量参考，Linkwarden 按以下顺序尝试：兼容 OpenAI 的服务、Azure OpenAI、Anthropic、Ollama、OpenRouter，最后是 Perplexity。因此留在 `.env` 里的云端 API 密钥可能优先于 Ollama。' },
          { q: '不连服务器，移动应用能用吗？', a: '不能。App Store 的说明称，Linkwarden 需要 Linkwarden Cloud 订阅，或连接到你自己的自托管服务器；应用列出了对已保存内容的离线支持。' },
          { q: '能在配置较低的机器上运行吗？', a: '据文档，2.15 版本的重写降低了空闲内存占用；设置 `DISABLE_BROWSER=true` 会跳过截图、PDF、HTML 副本和阅读视图，以换取最低的内存占用。' },
          { q: '链接数量有上限吗？', a: '价格页列出 Cloud 每位用户 30,000 个链接，自托管参考中 `MAX_LINKS_PER_USER` 的默认值同样是 30000。' },
          { q: '以后可以离开 Linkwarden Cloud 吗？', a: '价格页称链接可随时导出，不存在锁定；文档的 Usage 部分也列出了导入和导出。' },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Linkwarden 是一个仍在积极开发的开源方案，可以为你收藏的网页建立归档，其文档记载的 Ollama 支持让打标签这一步可以留在你自己的硬件上。不足之处在于：自托管需要三个容器和终端，移动应用依赖服务器，Cloud 版是付费服务且隐私政策日期较早，AI 方面的表现在此未经测试。它适合已在使用 Docker、想要带可选本地打标签功能的网页归档的自托管用户；想要零配置的读者，应先把 Cloud 的条款与 Karakeep 比较一下。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Linkwarden 官网](https://linkwarden.app) — 功能、价格和应用链接（2026年10月24日查阅）。',
          '[自托管安装](https://docs.linkwarden.app/self-hosting/setup)和 [AI 打标签](https://docs.linkwarden.app/self-hosting/ai-worker) — 运行要求、Docker 步骤和服务商变量（2026年10月24日查阅）。',
          '[环境变量](https://docs.linkwarden.app/self-hosting/environment-variables) — AI 服务商顺序和默认值（2026年10月24日查阅）。',
          '[GitHub 上的 Linkwarden](https://github.com/linkwarden/linkwarden) — README、许可证和 v2.16.3 发布（2026年10月24日查阅）。',
          '[App Store](https://apps.apple.com/app/linkwarden/id6752550960) 和 [Google Play](https://play.google.com/store/apps/details?id=app.linkwarden) 页面 — 应用版本和要求（2026年10月24日查阅）。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Karakeep 评测](/zh/power-local-llm/karakeep-review) — 带 AI 打标签的自托管书签与笔记应用。',
          '[Blinko 评测](/zh/power-local-llm/blinko-review) — 带 AI 搜索的自托管笔记应用。',
          '[Ollama](https://ollama.com) — Linkwarden 可调用来打标签的本地模型运行工具。',
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
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/linkwarden-review-hero-ko.webp',
    title: 'Linkwarden 리뷰: 로컬 AI 태그를 지원하는 셀프호스팅 북마크',
    seoTitle: 'Linkwarden 리뷰: 로컬 AI 태그 셀프호스팅 북마크',
    intro: 'Linkwarden은 [Linkwarden Inc.](https://linkwarden.app)가 내놓은 오픈소스(AGPL-3.0) 북마크 관리자로, 저장한 모든 페이지의 사본을 보관하고 사용자가 설정한 AI 모델(로컬 Ollama 모델 또는 클라우드 제공업체)로 링크에 자동으로 태그를 붙일 수 있습니다. Docker로 직접 호스팅하거나 제작사의 유료 Cloud 버전을 쓸 수 있습니다. 이 리뷰는 제작사의 웹사이트와 문서, GitHub 저장소, App Store와 Google Play 페이지(2026년 10월 24일 확인)를 바탕으로 하며, PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription: 'Linkwarden 리뷰: 페이지를 보관하고 로컬 Ollama 모델이나 클라우드 AI로 링크에 태그를 붙이는 셀프호스팅 북마크 관리자. Docker 구성과 Cloud 요금. 미검증.',
    twitterDescription: 'Linkwarden 리뷰: 모든 페이지를 보관하는 셀프호스팅 북마크. 로컬 Ollama나 클라우드로 하는 AI 태그는 선택 사항. 출처로 확인된 내용.',
    audience: '선택형 AI 태그가 있는 북마크 아카이브를 찾으며, 태그 지정을 자신의 하드웨어 안에 둘 수 있는지 알고 싶은 셀프호스팅 사용자와 개인정보를 중시하는 독자.',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Linkwarden 리뷰',
    targetKeywords: [
      'linkwarden 리뷰',
      'linkwarden ollama',
      'linkwarden ai 태그',
      '셀프호스팅 북마크 관리자',
      'linkwarden docker 셀프호스팅',
      'linkwarden karakeep 비교',
      '로컬 ai 북마크 관리자',
    ],
    current_models_mentioned: ['phi3:mini-4k'],
    current_hardware_mentioned: ['Docker', 'PostgreSQL', 'Meilisearch'],
    leadAnswerBlock: '**Linkwarden(버전 2.16.3, 2026년 9월 9일 출시)은 저장한 각 페이지의 사본을 보관하고 사용자가 설정한 AI 모델로 링크에 태그를 붙일 수 있는 AGPL-3.0 북마크 관리자입니다.** 셀프호스팅은 무료이며, 유료 Cloud 버전도 선택할 수 있습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Linkwarden은 로컬 Ollama 모델로 북마크에 태그를 붙일 수 있습니까?',
        answer: '프로젝트 문서에 따르면 가능합니다. `.env` 파일에 Ollama 서버 주소와 모델 이름을 지정하며, 문서는 phi3:mini-4k 같은 작은 모델이면 충분하다고 안내합니다. OpenAI 호환 서비스와 다른 클라우드 제공업체도 대신 사용할 수 있습니다.',
        bullets: [
          '저장한 각 링크는 읽기 보기, 단일 HTML 파일, 스크린샷, PDF로 보관됩니다.',
          '읽기 보기에서 하이라이트와 주석을 지원합니다.',
          '컬렉션은 공개하거나 팀 구성원과 공유할 수 있습니다.',
          'iOS와 Android 네이티브 앱 및 브라우저 확장 프로그램이 안내되어 있습니다.',
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
        label: 'Linkwarden이란?',
        anchor: 'what-is-linkwarden',
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
        label: '셀프호스팅 방법',
        anchor: 'getting-started',
      },
      {
        label: 'AI 태그: 로컬 Ollama 또는 클라우드',
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
          { type: 'one-sentence', text: 'Linkwarden은 저장한 모든 페이지의 사본을 사용자가 관리하는 서버에 두고, 로컬 또는 클라우드 AI 모델로 태그를 추가할 수 있는 오픈소스 북마크 관리자입니다.' },
          { type: 'plain-terms', text: '링크를 저장하면 백그라운드 프로세스가 브라우저로 페이지를 열어 사본을 보관하고, 설정해 둔 AI 모델이 나중에 찾기 쉽도록 태그를 제안합니다.' },
        ],
        items: [
          '유지보수: 최신 릴리스 2.16.3은 2026년 9월 9일 것이고 저장소에는 2026년 10월 24일에도 커밋이 있어, 방치된 프로젝트 경고는 해당하지 않습니다.',
          'AI 태그: 셀프호스팅 서버에서는 제공업체를 설정하기 전까지 꺼져 있으며, 제작사 사이트는 Cloud에서도 선택 사항이라고 안내합니다.',
          '비용: 셀프호스팅은 무료이고, 관리형 Cloud 버전은 유료 구독입니다.',
          '클라이언트: 웹 앱, iOS·Android 앱, 브라우저 확장 프로그램.',
          '테스트: 출처만 읽었으며 PromptQuorum은 아무것도 설치하거나 측정하지 않았습니다.',
        ],
        callouts: [
          { type: 'note', text: '이 리뷰는 제작사의 웹사이트와 문서, GitHub 저장소, 스토어 페이지(2026년 10월 24일 확인)를 바탕으로 합니다. PromptQuorum은 Linkwarden을 설치하지 않았고, AI 태그 기능을 실행하거나 리소스 사용량을 측정하지도 않았습니다.' },
        ],
      },
      overview: {
        id: 'what-is-linkwarden',
        title: 'Linkwarden이란?',
        content: [
          '**Linkwarden은 저장한 각 페이지의 사본을 보관하는 협업형 북마크 관리자로, 원본이 사라져도 내용이 남습니다.** README는 페이지를 수집·열람·주석·보존하기 위한 셀프호스팅 오픈소스 도구로 설명하며, linkwarden.app을 운영하는 회사가 공개했고 소스 코드는 AGPL-3.0 라이선스입니다.',
          '링크마다 백그라운드 프로세스가 최대 네 가지 형식을 만듭니다. 문서 읽기 보기, 완전한 단일 파일 HTML 사본, 전체 페이지 스크린샷, PDF입니다. 문서에 따르면 주소를 Wayback Machine에 보내는 기능은 선택 사항이며 기본값은 꺼짐입니다. 링크는 태그가 있는 컬렉션과 하위 컬렉션으로 정리하고 전체 텍스트 검색으로 찾을 수 있으며, 공개 공유나 구성원별 권한을 정할 수 있는 팀 공유도 가능합니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Linkwarden은 직접 호스팅하거나 Linkwarden Cloud로 이용하는 웹 앱이며, iOS·Android 앱과 브라우저 확장 프로그램은 둘 중 하나에 연결됩니다.**',
        ],
        columns: ['옵션', '입수 방법'],
        rows: [
          { '옵션': 'Linkwarden Cloud', '입수 방법': '[cloud.linkwarden.app](https://cloud.linkwarden.app), 유료 구독' },
          { '옵션': 'Cloud 요금', '입수 방법': '14일 무료 체험 후 연간 결제 시 사용자당 월 $3(사이트에 표시된 USD)' },
          { '옵션': 'iPhone·iPad', '입수 방법': '[App Store의 Linkwarden](https://apps.apple.com/app/linkwarden/id6752550960), 무료 다운로드' },
          { '옵션': 'Android', '입수 방법': '[Google Play의 Linkwarden](https://play.google.com/store/apps/details?id=app.linkwarden), 앱 내 구입 표시' },
          { '옵션': '셀프호스팅(Docker)', '입수 방법': '무료, [설치 가이드](https://docs.linkwarden.app/self-hosting/setup)를 따르며 터미널이 필요합니다' },
          { '옵션': '브라우저 확장 프로그램', '입수 방법': 'Chrome, Firefox, Safari, [확장 프로그램 가이드](https://docs.linkwarden.app/getting-started/browser-extension) 참조' },
          { '옵션': '웹사이트', '입수 방법': '[linkwarden.app](https://linkwarden.app)' },
          { '옵션': '개인정보 처리방침', '입수 방법': '[linkwarden.app/privacy-policy](https://linkwarden.app/privacy-policy)' },
          { '옵션': '소스 코드', '입수 방법': '[github.com/linkwarden/linkwarden](https://github.com/linkwarden/linkwarden), AGPL-3.0' },
        ],
        note: '리뷰 대상 버전: 2.16.3(2026년 9월 9일 GitHub 릴리스). iOS 앱은 App Store 기준 1.4.4이며 2026년 10월 12일에 업데이트되었고, Google Play 페이지도 2026년 10월 12일을 표시합니다. App Store에서는 미국, 독일, 일본 스토어에서 무료였습니다. Cloud 요금은 미국 달러로만 표시되며 원화나 유로 가격은 찾지 못했습니다. 서버용 설치 프로그램은 없고, Docker 또는 Node와 PostgreSQL을 이용한 수동 설치가 필요합니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: [
          '**셀프호스팅 가이드는 메모리 4 GB를 무난한 출발점으로, CPU는 2코어면 되고, 이미지에 약 1.5 GB의 디스크가 필요하다고 안내합니다.**',
        ],
        columns: ['항목', '출처의 설명'],
        rows: [
          { '항목': '서버', '출처의 설명': 'Docker Compose로 컨테이너 세 개(Linkwarden, PostgreSQL 16, Meilisearch), x86-64와 ARM64 이미지 제공' },
          { '항목': '비밀 값', '출처의 설명': '`NEXTAUTH_SECRET`, `POSTGRES_PASSWORD`, `MEILI_MASTER_KEY`를 샘플 값에서 바꿔야 합니다' },
          { '항목': '로컬 AI', '출처의 설명': '로컬로 태그를 지정하려면 별도의 Ollama 서버와 내려받은 모델이 필요하며, Linkwarden 자체는 GPU가 필요하지 않습니다' },
          { '항목': '모바일 앱', '출처의 설명': 'App Store 기준 iOS 15.1 이상이며, Cloud 구독 또는 자신의 서버가 필요합니다' },
          { '항목': '수동 설치', '출처의 설명': 'Node 20 이상, Yarn, PostgreSQL 16 이상이며, 고급 검색용 Meilisearch는 선택 사항입니다' },
        ],
        note: '가이드는 Docker 방식이 더 쉽다고 설명하며, 수동 설치는 더 기술적인 사용자를 대상으로 합니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '셀프호스팅 방법',
        content: [
          '**단계는 Docker Compose용 공식 설치 가이드를 따랐으며, PromptQuorum은 실행해 보지 않았습니다.**',
        ],
        numberedItems: [
          { title: '파일 내려받기', whyItMatters: '저장소에서 `docker-compose.yml`과 `.env.sample`을 받아 샘플을 `.env`로 저장합니다.' },
          { title: '비밀 값 설정', whyItMatters: '`.env`를 편집해 `NEXTAUTH_SECRET`, `POSTGRES_PASSWORD`, `MEILI_MASTER_KEY`를 서로 다른 비밀 문구 세 개로 바꿉니다.' },
          { title: '스택 시작', whyItMatters: '`docker compose up`을 실행하면 몇 분 뒤 3000번 포트에서 앱이 응답합니다.' },
          { title: 'AI 태그 추가', whyItMatters: '필요하면 다음 섹션의 Ollama 또는 OpenAI 호환 변수를 추가하고 스택을 다시 시작한 뒤, 설정, 환경설정에서 태그 지정을 켭니다.' },
        ],
      },
      features: {
        id: 'key-features',
        title: 'AI 태그: 로컬 Ollama 또는 클라우드',
        content: [
          '**태그 지정은 선택 사항이며, 환경 변수를 채워 로컬 Ollama 모델과 클라우드 제공업체 중 하나를 고릅니다.**',
        ],
        items: [
          '**Ollama로 로컬 실행.** `NEXT_PUBLIC_OLLAMA_ENDPOINT_URL`에 Ollama 서버(예: `http://localhost:11434`), `OLLAMA_MODEL`에 내려받은 모델을 지정합니다. 문서는 phi3:mini-4k 같은 경량 모델이면 충분하다고 안내합니다.',
          '**클라우드 또는 호환 API.** `OPENAI_API_KEY`와 `OPENAI_MODEL`은 OpenAI에서 동작하며, `CUSTOM_OPENAI_BASE_URL`을 지정하면 같은 변수로 OpenAI 호환 서비스에 연결할 수 있습니다. 문서는 Gemini를 예로 듭니다.',
          '**그 밖의 제공업체.** 환경 변수 참조에는 Azure OpenAI, Anthropic, OpenRouter, Perplexity도 나열되어 있습니다.',
          '**두 가지 모드.** 링크를 추가할 때 태그를 자동 생성하거나, 사용자가 지정한 미리 정의된 목록에서 태그를 할당할 수 있으며, 둘 다 설정, 환경설정에서 켭니다.',
          '**백그라운드 배치.** 태그 지정은 보관 작업과 함께 백그라운드 프로세스에서 실행되며, 기본값은 링크 다섯 개씩 배치입니다(`ARCHIVE_TAKE_COUNT`).',
        ],
        note: '태그 지정은 버전 2.9에서 추가된 기능으로 설명됩니다. 사용법 페이지는 링크의 내용을 분석한다고 하지만, PromptQuorum은 모델에 어떤 텍스트가 전송되는지와 태그 품질을 테스트하지 않았습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**셀프호스팅하면 링크, 태그, 보존된 사본이 자신의 PostgreSQL 데이터베이스와 데이터 폴더에 저장됩니다.** 서버가 헤드리스 브라우저로 저장된 페이지를 직접 가져오므로, 서버 네트워크에서는 사용자가 북마크한 모든 주소가 보입니다. 로컬 Ollama 엔드포인트를 쓰면 태그 요청은 설정한 주소로 가고, 클라우드 제공업체를 쓰면 API 키와 함께 그 제공업체로 갑니다.',
          'Cloud 버전은 제작사가 운영하며, [개인정보 처리방침](https://linkwarden.app/privacy-policy)의 날짜는 2023년 7월 31일로 모바일 앱이 나오기 전입니다. 국가로 캐나다 온타리오를 명시하고 회사를 GDPR상의 데이터 컨트롤러로 밝힙니다. Google Play의 데이터 보안 항목에는 제3자와 데이터를 공유하지 않으며 앱 정보와 성능 데이터가 수집될 수 있다고 적혀 있습니다.',
        ],
        callouts: [
          { type: 'note', text: '이는 제작사와 문서의 진술이지 감사 결과가 아닙니다. PromptQuorum은 네트워크 트래픽을 점검하지 않았으며, Cloud 버전이 선택적 태그 지정에 어떤 AI 제공업체를 쓰는지는 문서에 나와 있지 않습니다.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**셀프호스팅 사용자**: 이미 Docker를 쓰고 있으며 자신의 서버에 페이지를 보관하려는 분.',
          '**연구자와 팀**: 컬렉션을 공유하고 주석이 달린 자료 사본이 필요한 분.',
          '**Ollama 사용자**: 페이지 텍스트를 클라우드 제공업체에 보내지 않고 자동 태그를 원하는 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**태그 품질.** PromptQuorum은 태그 지정을 실행하지 않았으므로 정확도, 속도, 작은 로컬 모델의 동작은 알 수 없습니다.',
          '**모델이 보는 내용.** 문서에는 태그 지정을 위해 페이지의 얼마만큼이 전송되는지 나와 있지 않으므로, 로컬 모델의 프라이버시 이점은 측정 결과가 아니라 문서화된 엔드포인트 동작입니다.',
          '**"로컬"이라는 표현.** 사용법 페이지는 이 기능이 "로컬 AI 모델을 사용한다"고 하지만 설치 페이지는 클라우드 제공업체도 나열합니다. 더 자세한 쪽은 설치 페이지이므로 여기서는 그것을 따랐습니다.',
          '**Cloud의 AI와 저장 위치.** Cloud 버전은 선택적 AI 태그를 나열하지만 제공업체는 밝히지 않으며, 데이터가 어디에 저장되는지에 대한 답은 요금 페이지에서 읽을 수 없었습니다.',
          '**리소스 사용량.** 문서는 버전 2.15 이후 유휴 메모리를 약 350 MB라고 제작사 수치로 제시하지만, PromptQuorum은 측정하지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이점'],
        rows: [
          { '앱': '[Karakeep](/ko/power-local-llm/karakeep-review)', '플랫폼': '웹, iOS, Android', '가격 / 라이선스': '무료 / AGPL-3.0', '핵심 차이점': 'OpenAI 또는 Ollama로 AI 태그를 지정하는 셀프호스팅 북마크·메모 앱이며, 요약과 검색은 해당 리뷰 참조' },
          { '앱': '[Blinko](/ko/power-local-llm/blinko-review)', '플랫폼': '웹(셀프호스팅)', '가격 / 라이선스': '무료 / GPL-3.0', '핵심 차이점': '메모에 대한 AI 검색을 갖춘 셀프호스팅 메모 앱으로, 페이지 아카이브용은 아닙니다' },
        ],
        note: 'Karakeep이 가장 가깝습니다. 둘 다 선택형 AI 태그를 갖춘 셀프호스팅 북마크 도구입니다. 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '제공업체를 여러 개 설정하면 어느 것이 사용됩니까?', a: '환경 변수 참조에 따르면 Linkwarden은 OpenAI 호환, Azure OpenAI, Anthropic, Ollama, OpenRouter, Perplexity 순으로 시도합니다. 따라서 `.env`에 남아 있는 클라우드 API 키가 Ollama보다 우선할 수 있습니다.' },
          { q: '서버 없이 모바일 앱을 쓸 수 있습니까?', a: '아니요. App Store 설명은 Linkwarden Cloud 구독 또는 자신의 셀프호스팅 서버 연결이 필요하다고 밝히며, 앱은 저장된 콘텐츠의 오프라인 지원을 안내합니다.' },
          { q: '사양이 낮은 기기에서도 돌릴 수 있습니까?', a: '문서에 따르면 버전 2.15의 개편으로 유휴 메모리가 줄었고, `DISABLE_BROWSER=true`를 쓰면 스크린샷, PDF, HTML 사본, 읽기 보기를 생략하는 대신 메모리 사용량이 가장 낮아집니다.' },
          { q: '링크 수에 제한이 있습니까?', a: '요금 페이지는 Cloud에서 사용자당 30,000개 링크를 안내하며, 셀프호스팅 참조에서도 `MAX_LINKS_PER_USER`의 기본값은 30000입니다.' },
          { q: '나중에 Linkwarden Cloud를 떠날 수 있습니까?', a: '요금 페이지는 링크를 언제든 내보낼 수 있고 종속이 없다고 밝히며, 문서의 Usage에도 가져오기와 내보내기가 나열되어 있습니다.' },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'Linkwarden은 활발히 개발되는 오픈소스 도구로, 북마크한 페이지의 아카이브를 보관할 수 있으며 문서화된 Ollama 지원 덕분에 태그 지정 단계를 자신의 하드웨어 안에 둘 수 있습니다. 반면 셀프호스팅 구성에는 컨테이너 세 개와 터미널이 필요하고, 모바일 앱은 서버에 의존하며, Cloud 버전은 개인정보 처리방침 날짜가 오래된 유료 서비스이고, AI 동작은 여기서 테스트하지 않았습니다. 이미 Docker를 쓰며 선택형 로컬 태그가 있는 페이지 아카이브를 원하는 셀프호스팅 사용자에게 적합합니다. 설정 없이 쓰고 싶다면 먼저 Cloud 조건을 Karakeep과 비교해 보십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Linkwarden 웹사이트](https://linkwarden.app) — 기능, 요금, 앱 링크(2026년 10월 24일 확인).',
          '[셀프호스팅 설치](https://docs.linkwarden.app/self-hosting/setup)와 [AI 태그](https://docs.linkwarden.app/self-hosting/ai-worker) — 요구 사항, Docker 단계, 제공업체 변수(2026년 10월 24일 확인).',
          '[환경 변수](https://docs.linkwarden.app/self-hosting/environment-variables) — AI 제공업체 순서와 기본값(2026년 10월 24일 확인).',
          '[GitHub의 Linkwarden](https://github.com/linkwarden/linkwarden) — README, 라이선스, 릴리스 v2.16.3(2026년 10월 24일 확인).',
          '[App Store](https://apps.apple.com/app/linkwarden/id6752550960)와 [Google Play](https://play.google.com/store/apps/details?id=app.linkwarden) 페이지 — 앱 버전과 요구 사항(2026년 10월 24일 확인).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Karakeep 리뷰](/ko/power-local-llm/karakeep-review) — AI 태그를 지원하는 셀프호스팅 북마크·메모 앱.',
          '[Blinko 리뷰](/ko/power-local-llm/blinko-review) — AI 검색을 지원하는 셀프호스팅 메모 앱.',
          '[Ollama](https://ollama.com) — Linkwarden이 태그 지정을 위해 호출할 수 있는 로컬 모델 실행 도구.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
        ],
      },
    },
  },
}
