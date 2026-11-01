// EverShelf Review: Self-Hosted Pantry Manager with Optional AI
// Slug: evershelf-review
// Companion to: home-assistant-assist-review, immich-review
// Sources (all read 2026-11-01, no hands-on testing): evershelf.site (home page is rendered client-side; copy read from /js/i18n/copy.json), the GitHub API, README, Wiki pages
// (docs/wiki), .env.example, SECURITY.md, docs/ARCHITECTURE.md, docker-compose.yml and the evershelf-kiosk README of dadaloop82/EverShelf (MIT; created 2026-03-10; latest release
// v1.16.16 published 2026-10-25; last push 2026-11-01; kiosk APK under tag kiosk-1.7.24). The request came from the site owner (link from localhosted.com), not from the maker: no maker comment exists.
// EverShelf is NOT an LLM app: a PHP + SQLite pantry manager whose AI (Gemini | OpenAI | llama = OpenAI-compatible server) is optional.
// Last upstream update 2026-11-01 => no stale warning. The home-page "Privacy" is a section, not a separate policy document (pages/privacy.html serves the home page).
// Not verified: which AI features work with the Llama provider; traffic and source code were not inspected; SECURITY.md still lists 1.7.x as supported.
// Prices of Gemini/OpenAI API use are not stated by the project and are not quoted.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-01',
    dateModified: '2026-11-01',
    next_refresh_due: '2027-05-01',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/evershelf-review-hero-en.webp',
    title: 'EverShelf Review: Self-Hosted Pantry Manager with Optional AI',
    seoTitle: 'EverShelf Review: Self-Hosted Pantry Manager, Optional AI',
    intro:
      'EverShelf is a free, open-source pantry manager you host yourself, with barcode scanning, expiry tracking and shopping lists; its AI features are optional and run through Gemini, OpenAI or your own Llama server. It is not a chat or LLM app. This review reflects its website, GitHub repository, wiki and configuration files as checked on 1 November 2026.',
    metaDescription:
      'EverShelf review: a free, MIT-licensed pantry manager you host yourself, with barcode scanning, expiry alerts and optional AI via Gemini, OpenAI or Llama.',
    twitterDescription:
      'EverShelf review: a self-hosted, MIT-licensed pantry and expiry tracker whose AI is optional. Docker setup, requirements, outbound requests and what we could not verify.',
    audience:
      'Self-hosters and households who want to run their own pantry tracker, and who need to know the setup effort, which AI runs where and what the sources do not confirm.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'EverShelf review',
    targetKeywords: [
      'evershelf review',
      'self-hosted pantry manager',
      'pantry inventory app docker',
      'self-hosted expiry date tracker',
      'grocy alternative',
      'pantry app home assistant',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**EverShelf (v1.16.16 as of 1 November 2026) is a free, MIT-licensed pantry manager you host with Docker, whose AI features can be switched off or pointed at Gemini, OpenAI or a Llama server of your own.** Per its site, inventory and history stay on your server, while AI requests leave it unless you choose the Llama option. It is a household tool, not a chat assistant.',
    quickAnswerTop: {
      en: {
        question: 'Does EverShelf keep your pantry data and its AI on your own server?',
        answer:
          'Your inventory does, according to the project: it is stored in a SQLite database on your server. The AI is separate: with the Gemini or OpenAI provider, requests go to those companies, and only the Llama option points at a server you run. PromptQuorum has not inspected the network traffic.',
        bullets: [
          'Free and open source (MIT); the site calls it free forever and lists no premium tier.',
          'Server via Docker Compose; the app opens in any browser and can be added to a phone\'s home screen.',
          'An optional Android kiosk app turns a wall-mounted tablet into a kitchen display.',
          'A REST API, an MCP server for AI agents and a Home Assistant integration are linked from the repository.',
          'Not a general LLM app: the AI recognises products, reads expiry dates and suggests recipes, per the README.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is EverShelf?', anchor: 'what-is-evershelf' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Requirements', anchor: 'requirements' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Key Features', anchor: 'key-features' },
      { label: 'AI Features and Where They Run', anchor: 'ai-features' },
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
          {
            type: 'one-sentence',
            text: 'EverShelf is an open-source, self-hosted pantry manager that tracks stock, expiry dates and shopping lists, with optional AI helpers for recognising products and writing recipes.',
          },
          {
            type: 'plain-terms',
            text: 'You run EverShelf on a home server, scan products with a phone camera, and it tells you what is running out or about to expire and what to buy.',
          },
        ],
        items: [
          'Maintenance: version v1.16.16 was released on 25 October 2026 and the repository changed on 1 November 2026, so no stale-project warning applies; the project started in March 2026.',
          'Operator: the README credits one developer, Stimpfl Daniel; the code is on GitHub under the MIT licence.',
          'Setup: Docker Compose from the README plus a hand-edited .env file; AI needs a provider key or a Llama server address.',
          'Cost: free; the site lists optional donations and no premium tier.',
          'Scope: pantry and shopping management, so this is not a language-model app.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the project\'s website, README, wiki, example configuration and GitHub activity, checked on 1 November 2026. PromptQuorum has not installed EverShelf, so scanning accuracy, AI quality and speed are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-evershelf',
        title: 'What Is EverShelf?',
        content: [
          '**EverShelf is a self-hosted web application for tracking what is in your pantry, when it expires and what to buy next.** The README calls it a "self-hosted pantry manager — inventory, barcode scan, AI recipes, less waste"; it is written in PHP with an SQLite database and a single-page front end, and the code is open source under the MIT licence.',
          'The README credits one developer, Stimpfl Daniel (GitHub: dadaloop82), and asks for more contributors. An unrelated iOS app from Joshumi Technologies uses the same name; the README states that there is no affiliation.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Get It',
        content: [
          '**EverShelf is a server you install yourself; the documented route is Docker Compose, and phones and tablets reach it through a browser or the Android kiosk app.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          { 'Option': 'Server (Docker Compose)', 'How to get it': '[README quick start](https://github.com/dadaloop82/EverShelf#-quick-start): clone the repository, copy .env.example to .env, run docker compose up -d' },
          { 'Option': 'Browser and phone', 'How to get it': 'Open the server address in a browser (port 8080 in the supplied compose file); on a phone, add it to the home screen' },
          { 'Option': 'Android kiosk tablet', 'How to get it': '[evershelf-kiosk.apk](https://github.com/dadaloop82/EverShelf/releases/download/kiosk-latest/evershelf-kiosk.apk) (version 1.7.24, Android 7.0 or later)' },
          { 'Option': 'Unraid', 'How to get it': '[Community Applications template and guide](https://github.com/dadaloop82/EverShelf/blob/main/docs/wiki/Unraid.md)' },
          { 'Option': 'Website', 'How to get it': '[evershelf.site](https://evershelf.site)' },
          { 'Option': 'Privacy statement', 'How to get it': '[evershelf.site, Privacy section](https://evershelf.site/#privacy): a short statement on the home page; no separate policy document was found' },
          { 'Option': 'Source code', 'How to get it': '[github.com/dadaloop82/EverShelf](https://github.com/dadaloop82/EverShelf)' },
          { 'Option': 'Demo', 'How to get it': '[evershelf.site/demo](https://evershelf.site/demo), which the README says includes AI' },
        ],
        note: 'Version reviewed: v1.16.16, published on 25 October 2026 per the GitHub release; the repository\'s last change was on 1 November 2026. Installing needs a terminal, Docker and a hand-edited .env file, so this is a developer-style setup rather than a double-click install. The GitHub release list carries only the Android kiosk APK.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**The sources give no RAM or CPU minimum; the stated needs are Docker or PHP 8.0+, a camera for scanning and, for AI, a provider key or a Llama server.**',
        ],
        columns: ['Item', 'What the sources say'],
        rows: [
          { 'Item': 'Server', 'What the sources say': 'Docker with Compose, or a PHP 8.0+ web server pointed at the repository root with a writable data/ folder' },
          { 'Item': 'Storage', 'What the sources say': 'SQLite database in the data volume; the built-in backup is stored in that same volume, so copy it elsewhere' },
          { 'Item': 'Memory and CPU', 'What the sources say': 'Not stated in the sources read' },
          { 'Item': 'Camera', 'What the sources say': 'Barcode scanning uses the device camera in the browser (QuaggaJS, per the wiki)' },
          { 'Item': 'Kiosk', 'What the sources say': 'Android 7.0 (API 24) or later; optional Bluetooth kitchen scale support' },
          { 'Item': 'AI', 'What the sources say': 'An API key for Gemini or OpenAI, or the address of an OpenAI-compatible Llama server such as Ollama, llama.cpp or vLLM' },
          { 'Item': 'Network', 'What the sources say': 'Built for a trusted home network; for internet access the security policy expects your own authentication layer' },
        ],
        note: 'These items come from the README, wiki and SECURITY.md; PromptQuorum did not measure resource use.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**These steps follow the project\'s README; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Fetch the code and the config template',
            whyItMatters: 'Run git clone for the repository, then copy .env.example to .env in the project folder.',
          },
          {
            title: 'Choose the AI setting',
            whyItMatters: 'In .env, set AI_ENABLED=false to run without AI, or set AI_PROVIDER to gemini, openai or llama and add the matching key or base URL.',
          },
          {
            title: 'Start the container',
            whyItMatters: 'Run docker compose up -d and open http://localhost:8080; to update later, the README gives docker compose pull followed by docker compose up -d.',
          },
          {
            title: 'Pair your devices',
            whyItMatters: 'If API_TOKEN is set, the web interface asks for a one-time pairing code, shown under Settings, System, Security on a paired device or in the server log.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Key Features',
        content: [
          '**Every item below comes from the project\'s README or wiki; none has been tested by PromptQuorum.**',
        ],
        items: [
          '**Inventory.** Barcode scanning, storage locations, expiry dates, opened packs, favourites and CSV import and export.',
          '**Shopping.** A smart shopping list with anti-waste quantities, recipes that add missing items after deducting what you have, and optional Bring! sync.',
          '**Cooking.** Step-by-step recipes with spoken instructions, timers and zero-waste tips.',
          '**Alerts and calendar.** Expiry notifications through ntfy, a JSON webhook or Home Assistant, plus an ICS feed for Google or Apple Calendar.',
          '**Integrations.** A REST API, an MCP server, a Home Assistant integration in a separate repository, a Health Bridge with Fuel Mode, and the Android kiosk with a Bluetooth scale gateway.',
        ],
        note: 'Part of the README\'s release notes is written in Italian.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI Features and Where They Run',
        content: [
          '**One AI provider is active at a time, chosen in .env: Gemini, OpenAI, or "llama", an OpenAI-compatible endpoint you run yourself; AI can also be switched off.**',
        ],
        items: [
          '**Product recognition.** AI identifies a product from a camera photo, and with a Gemini key it can be asked about barcodes that other lookups miss.',
          '**Expiry dates.** AI reads a photo of the label and fills in the expiry field.',
          '**Recipes and chat.** AI writes recipes from what is in the pantry and offers a chat; recipes can also come from a connected Mealie instance.',
          '**Providers.** The example configuration documents Gemini, OpenAI with a changeable base URL and model, and a Llama option for Ollama, llama.cpp or vLLM. The wiki describes the AI features in terms of Gemini and does not say which of them work with a local model.',
          '**Cost controls.** The example file sets a daily cap on Gemini classification calls and can estimate token costs.',
        ],
        note: 'These are the project\'s own statements. PromptQuorum did not test recognition accuracy, recipe quality or any local model.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**The site states that inventory and history stay on your device or home server, that AI is optional and that there is no telemetry.** The architecture notes describe a SQLite database in the data folder, and the security policy assumes a trusted home network.',
          'Outside requests named in the sources: the AI provider you pick (Gemini or OpenAI, unless you use the Llama option), Open Food Facts for unknown barcodes, Open Prices for price estimates, and optional services such as Bring!, ntfy, Google Drive backup and a PayPal donation link. Error reports go to a local, redacted log, and sending them to GitHub is a second opt-in. The README says a one-time dialog offers a donation or nothing and that no advertising is shown. The public demo uses cloud AI.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the project\'s declarations, not audit results. PromptQuorum has not inspected network traffic or the source code.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Self-hosters with a Docker server or NAS** who want a private pantry and expiry tracker.',
          '**Households that cook from the pantry** and want a shared shopping list, expiry alerts and recipes built from what is on hand.',
          '**Home Assistant users** who want expiry and shopping data in their smart home or in an MCP-connected agent.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**AI quality.** Product recognition, expiry reading and recipe quality were not tested, and the sources do not say which AI features work with a local Llama model.',
          '**Maturity.** The project began in March 2026 and credits one developer; PromptQuorum did not assess its stability or security.',
          '**Security documentation.** SECURITY.md still lists 1.7.x as the supported line, well behind the current v1.16.16.',
          '**Data claims.** "No telemetry" and "data stays at home" are the project\'s statements; traffic was not inspected.',
          '**Hardware needs.** No RAM or CPU minimum is documented, and speed on a small device such as a Raspberry Pi was not checked.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        content: [
          'The directory has one other review in the same smart-home layer: a voice assistant inside Home Assistant, the platform EverShelf offers an integration for. The project\'s own site compares EverShelf with [Grocy](https://grocy.info), [Mealie](https://mealie.io) and [KitchenOwl](https://kitchenowl.org); those pantry and recipe managers are not in the directory, and PromptQuorum did not verify that comparison.',
        ],
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[Home Assistant Assist](/power-local-llm/home-assistant-assist-review)', 'Platforms': 'Home Assistant, web, iOS, Android', 'Price / license': 'Free / Apache-2.0', 'Key difference': 'Voice control for a smart home, not a pantry tracker' },
        ],
        note: 'Confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is EverShelf a local LLM?',
            a: 'No. It is a pantry manager written in PHP; its AI is delegated to Gemini, OpenAI or a Llama server you run, and the site says the pantry features work without AI.',
          },
          {
            q: 'How do I back up my data?',
            a: 'The release notes say a daily backup runs as a database snapshot, but it is stored inside the data volume, so copy it off the volume yourself.',
          },
          {
            q: 'Does it work with Home Assistant or AI agents?',
            a: 'The repository links a Home Assistant integration (ha-evershelf) and an MCP server for agents; PromptQuorum tested neither.',
          },
          {
            q: 'Does it work on a phone or tablet?',
            a: 'It opens in a browser and can be added to the home screen, and the Android kiosk app is meant for wall-mounted tablets. The site and README link no App Store or Google Play listing.',
          },
          {
            q: 'Which languages does the interface support?',
            a: 'The README lists Italian, English, German, French, Spanish and Chinese, and the app opens in the language of a link such as ?lang=de; contributors add a language by translating translations/en.json.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'EverShelf is a free, actively updated way to track a pantry, expiry dates and shopping on a server you control, with optional AI for recognising products, reading expiry labels and writing recipes. Against that, setup needs Docker and a hand-edited .env file, the AI runs on Gemini or OpenAI unless you configure your own Llama server, the project is under a year old, and none of the AI or privacy claims could be checked here. It suits households that already self-host; anyone who wants a double-click app or a language-model assistant should look elsewhere.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[EverShelf website](https://evershelf.site) — features, FAQ and privacy statement, checked 1 November 2026.',
          '[EverShelf on GitHub](https://github.com/dadaloop82/EverShelf) — README, releases, example configuration, security policy and commit activity, checked 1 November 2026.',
          '[EverShelf wiki pages in the repository](https://github.com/dadaloop82/EverShelf/tree/main/docs/wiki) — features, installation and AI providers, checked 1 November 2026.',
          '[EverShelf Android kiosk README](https://github.com/dadaloop82/EverShelf/blob/main/evershelf-kiosk/README.md) — version, minimum Android level and download, checked 1 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Home Assistant Assist Review](/power-local-llm/home-assistant-assist-review) — the voice assistant built into Home Assistant, which EverShelf offers an integration for.',
          '[Immich Review](/power-local-llm/immich-review) — another self-hosted household app whose AI runs on your own server.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'EverShelf Review: Self-Hosted Pantry Manager with Optional AI',
      description:
        'EverShelf review: a free, open-source pantry manager you host yourself, with barcode scanning, expiry tracking and optional AI via Gemini, OpenAI or a Llama server. Setup, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/evershelf-review',
      inLanguage: 'en',
      datePublished: '2026-11-01',
      dateModified: '2026-11-01',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Self-hosters evaluating a private pantry and expiry tracker with optional AI' },
      about: [
        { '@type': 'Thing', name: 'EverShelf' },
        { '@type': 'Thing', name: 'Self-hosted pantry manager' },
        { '@type': 'Thing', name: 'Expiry tracking' },
        { '@type': 'Thing', name: 'Docker' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/evershelf-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'EverShelf Review', item: 'https://www.promptquorum.com/power-local-llm/evershelf-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-01',
    dateModified: '2026-11-01',
    next_refresh_due: '2027-05-01',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/evershelf-review-hero-de.webp',
    title: 'EverShelf-Rezension: selbst gehosteter Vorratsmanager mit optionaler KI',
    seoTitle: 'EverShelf-Rezension: Vorratsmanager mit optionaler KI',
    intro:
      'EverShelf ist ein kostenloser, quelloffener Vorratsmanager zum Selbsthosten mit Barcode-Scan, Ablaufverfolgung und Einkaufslisten; die KI-Funktionen sind optional und laufen über Gemini, OpenAI oder einen eigenen Llama-Server. Es ist keine Chat- oder LLM-App. Diese Rezension beruht auf Website, GitHub-Repository, Wiki und Konfigurationsdateien, geprüft am 1. November 2026.',
    metaDescription:
      'EverShelf-Rezension: kostenloser Vorratsmanager (MIT) zum Selbsthosten mit Barcode-Scan, Ablaufwarnungen und optionaler KI über Gemini, OpenAI oder Llama.',
    twitterDescription:
      'EverShelf-Rezension: ein selbst gehosteter, MIT-lizenzierter Vorrats- und Ablauf-Tracker mit optionaler KI. Docker-Einrichtung, Anforderungen, ausgehende Anfragen und was wir nicht prüfen konnten.',
    audience:
      'Selbsthoster und Haushalte, die einen eigenen Vorratsmanager betreiben möchten und wissen müssen, wie aufwendig die Einrichtung ist, welche KI wo läuft und was die Quellen nicht bestätigen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'EverShelf Rezension',
    targetKeywords: [
      'evershelf rezension',
      'vorratsmanager selbst hosten',
      'vorrats app docker',
      'ablaufdatum tracker selbst gehostet',
      'grocy alternative',
      'vorrats app home assistant',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**EverShelf (v1.16.16, Stand 1. November 2026) ist ein kostenloser Vorratsmanager unter MIT-Lizenz, den Sie mit Docker selbst betreiben und dessen KI-Funktionen sich abschalten oder auf Gemini, OpenAI oder einen eigenen Llama-Server richten lassen.** Laut Website bleiben Bestand und Verlauf auf Ihrem Server, KI-Anfragen verlassen ihn dagegen, außer Sie wählen die Llama-Option. Es ist ein Haushaltswerkzeug, kein Chat-Assistent.',
    quickAnswerTop: {
      de: {
        question: 'Bleiben Ihre Vorratsdaten und die KI bei EverShelf auf Ihrem eigenen Server?',
        answer:
          'Der Bestand laut Projekt ja: Er liegt in einer SQLite-Datenbank auf Ihrem Server. Die KI ist davon getrennt: Beim Anbieter Gemini oder OpenAI gehen Anfragen an diese Unternehmen, nur die Llama-Option zeigt auf einen Server, den Sie selbst betreiben. PromptQuorum hat den Netzwerkverkehr nicht untersucht.',
        bullets: [
          'Kostenlos und quelloffen (MIT); die Website nennt es dauerhaft kostenlos und führt keine Premium-Stufe auf.',
          'Server per Docker Compose; die App läuft in jedem Browser und lässt sich zum Startbildschirm des Smartphones hinzufügen.',
          'Eine optionale Android-Kiosk-App macht ein Wandtablet zur Küchenanzeige.',
          'Eine REST-API, ein MCP-Server für KI-Agenten und eine Home-Assistant-Integration sind im Repository verlinkt.',
          'Keine allgemeine LLM-App: Laut README erkennt die KI Produkte, liest Ablaufdaten und schlägt Rezepte vor.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist EverShelf?', anchor: 'what-is-evershelf' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Anforderungen', anchor: 'requirements' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Wichtige Funktionen', anchor: 'key-features' },
      { label: 'KI-Funktionen und wo sie laufen', anchor: 'ai-features' },
      { label: 'Datenfluss und Datenschutz', anchor: 'privacy' },
      { label: 'Für wen sich die Software eignet', anchor: 'who-should-use' },
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
            text: 'EverShelf ist ein quelloffener, selbst gehosteter Vorratsmanager, der Bestand, Ablaufdaten und Einkaufslisten verwaltet und optionale KI-Helfer zum Erkennen von Produkten und für Rezepte bietet.',
          },
          {
            type: 'plain-terms',
            text: 'Sie betreiben EverShelf auf einem Heimserver, scannen Produkte mit der Smartphone-Kamera, und die Software zeigt, was zur Neige geht oder bald abläuft und was Sie einkaufen sollten.',
          },
        ],
        items: [
          'Pflege: Version v1.16.16 erschien am 25. Oktober 2026, das Repository wurde am 1. November 2026 geändert, daher gilt keine Warnung vor einem verwaisten Projekt; das Projekt startete im März 2026.',
          'Betreiber: Die README nennt einen Entwickler, Stimpfl Daniel; der Code liegt unter MIT-Lizenz auf GitHub.',
          'Einrichtung: Docker Compose laut README plus eine von Hand bearbeitete .env-Datei; für KI braucht es einen Anbieter-Schlüssel oder die Adresse eines Llama-Servers.',
          'Kosten: kostenlos; die Website nennt freiwillige Spenden und keine Premium-Stufe.',
          'Umfang: Vorrats- und Einkaufsverwaltung, also keine Sprachmodell-App.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension beruht auf Website, README, Wiki, Beispielkonfiguration und GitHub-Aktivität des Projekts, geprüft am 1. November 2026. PromptQuorum hat EverShelf nicht installiert; Scan-Genauigkeit, KI-Qualität und Geschwindigkeit wurden daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-evershelf',
        title: 'Was ist EverShelf?',
        content: [
          '**EverShelf ist eine selbst gehostete Webanwendung, die festhält, was in Ihrem Vorrat liegt, wann es abläuft und was als Nächstes eingekauft werden sollte.** Die README nennt es einen „self-hosted pantry manager — inventory, barcode scan, AI recipes, less waste“; es ist in PHP mit SQLite-Datenbank und einer Single-Page-Oberfläche geschrieben, der Code ist unter der MIT-Lizenz quelloffen.',
          'Die README nennt einen Entwickler, Stimpfl Daniel (GitHub: dadaloop82), und wünscht sich weitere Mitwirkende. Eine nicht verwandte iOS-App von Joshumi Technologies trägt denselben Namen; die README stellt klar, dass keine Verbindung besteht.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Bezugsquelle',
        content: [
          '**EverShelf ist ein Server, den Sie selbst installieren; der dokumentierte Weg ist Docker Compose, Smartphones und Tablets greifen per Browser oder über die Android-Kiosk-App darauf zu.**',
        ],
        columns: ['Option', 'Bezug'],
        rows: [
          { 'Option': 'Server (Docker Compose)', 'Bezug': '[Schnellstart in der README](https://github.com/dadaloop82/EverShelf#-quick-start): Repository klonen, .env.example nach .env kopieren, docker compose up -d ausführen' },
          { 'Option': 'Browser und Smartphone', 'Bezug': 'Serveradresse im Browser öffnen (Port 8080 in der mitgelieferten Compose-Datei); auf dem Smartphone zum Startbildschirm hinzufügen' },
          { 'Option': 'Android-Kiosk-Tablet', 'Bezug': '[evershelf-kiosk.apk](https://github.com/dadaloop82/EverShelf/releases/download/kiosk-latest/evershelf-kiosk.apk) (Version 1.7.24, Android 7.0 oder neuer)' },
          { 'Option': 'Unraid', 'Bezug': '[Community-Applications-Vorlage und Anleitung](https://github.com/dadaloop82/EverShelf/blob/main/docs/wiki/Unraid.md)' },
          { 'Option': 'Website', 'Bezug': '[evershelf.site](https://evershelf.site)' },
          { 'Option': 'Datenschutzhinweis', 'Bezug': '[evershelf.site, Abschnitt „Privacy“](https://evershelf.site/#privacy): kurze Erklärung auf der Startseite; ein eigenes Richtliniendokument wurde nicht gefunden' },
          { 'Option': 'Quellcode', 'Bezug': '[github.com/dadaloop82/EverShelf](https://github.com/dadaloop82/EverShelf)' },
          { 'Option': 'Demo', 'Bezug': '[evershelf.site/demo](https://evershelf.site/demo), die laut README KI enthält' },
        ],
        note: 'Geprüfte Version: v1.16.16, laut GitHub-Release am 25. Oktober 2026 veröffentlicht; die letzte Änderung im Repository war am 1. November 2026. Für die Installation brauchen Sie ein Terminal, Docker und eine von Hand bearbeitete .env-Datei – es ist also eine Entwickler-Einrichtung und keine Installation per Doppelklick. Die GitHub-Release-Liste enthält nur die Android-Kiosk-APK.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
          '**Die Quellen nennen kein RAM- oder CPU-Minimum; genannt werden Docker oder PHP 8.0+, eine Kamera zum Scannen und für KI ein Anbieter-Schlüssel oder ein Llama-Server.**',
        ],
        columns: ['Punkt', 'Angaben der Quellen'],
        rows: [
          { 'Punkt': 'Server', 'Angaben der Quellen': 'Docker mit Compose oder ein PHP-8.0+-Webserver, der auf das Repository-Stammverzeichnis zeigt, mit beschreibbarem Ordner data/' },
          { 'Punkt': 'Speicher', 'Angaben der Quellen': 'SQLite-Datenbank im Daten-Volume; die eingebaute Sicherung liegt im selben Volume, kopieren Sie sie also an einen anderen Ort' },
          { 'Punkt': 'Arbeitsspeicher und CPU', 'Angaben der Quellen': 'In den gelesenen Quellen nicht angegeben' },
          { 'Punkt': 'Kamera', 'Angaben der Quellen': 'Der Barcode-Scan nutzt die Gerätekamera im Browser (QuaggaJS laut Wiki)' },
          { 'Punkt': 'Kiosk', 'Angaben der Quellen': 'Android 7.0 (API 24) oder neuer; optional Unterstützung für Bluetooth-Küchenwaagen' },
          { 'Punkt': 'KI', 'Angaben der Quellen': 'Ein API-Schlüssel für Gemini oder OpenAI oder die Adresse eines OpenAI-kompatiblen Llama-Servers wie Ollama, llama.cpp oder vLLM' },
          { 'Punkt': 'Netzwerk', 'Angaben der Quellen': 'Für ein vertrauenswürdiges Heimnetz gedacht; für den Zugriff aus dem Internet erwartet die Sicherheitsrichtlinie eine eigene Authentifizierungsschicht' },
        ],
        note: 'Diese Angaben stammen aus README, Wiki und SECURITY.md; PromptQuorum hat den Ressourcenverbrauch nicht gemessen.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Diese Schritte folgen der README des Projekts; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Code und Konfigurationsvorlage holen',
            whyItMatters: 'Das Repository mit git clone laden und im Projektordner .env.example nach .env kopieren.',
          },
          {
            title: 'KI-Einstellung wählen',
            whyItMatters: 'In der .env AI_ENABLED=false setzen, um ohne KI zu arbeiten, oder AI_PROVIDER auf gemini, openai oder llama stellen und den passenden Schlüssel oder die Basis-URL eintragen.',
          },
          {
            title: 'Container starten',
            whyItMatters: 'docker compose up -d ausführen und http://localhost:8080 öffnen; für spätere Updates nennt die README docker compose pull und danach docker compose up -d.',
          },
          {
            title: 'Geräte koppeln',
            whyItMatters: 'Ist API_TOKEN gesetzt, verlangt die Weboberfläche einen einmaligen Kopplungscode; er steht auf einem gekoppelten Gerät unter Einstellungen, System, Sicherheit oder im Serverlog.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Wichtige Funktionen',
        content: [
          '**Jeder der folgenden Punkte stammt aus der README oder dem Wiki des Projekts; PromptQuorum hat keinen davon getestet.**',
        ],
        items: [
          '**Bestand.** Barcode-Scan, Lagerorte, Ablaufdaten, angebrochene Packungen, Favoriten sowie CSV-Import und -Export.',
          '**Einkauf.** Eine intelligente Einkaufsliste mit Mengen gegen Verschwendung, Rezepte, die fehlende Zutaten nach Abzug des Vorhandenen auf die Liste setzen, und optionale Bring!-Synchronisierung.',
          '**Kochen.** Rezepte Schritt für Schritt mit Sprachausgabe, Timern und Tipps gegen Lebensmittelverschwendung.',
          '**Warnungen und Kalender.** Ablaufbenachrichtigungen über ntfy, einen JSON-Webhook oder Home Assistant sowie ein ICS-Feed für Google oder Apple Kalender.',
          '**Integrationen.** Eine REST-API, ein MCP-Server, eine Home-Assistant-Integration in einem eigenen Repository, eine Health Bridge mit Fuel Mode und der Android-Kiosk mit Bluetooth-Waagen-Gateway.',
        ],
        note: 'Ein Teil der Release-Notizen in der README ist auf Italienisch verfasst.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'KI-Funktionen und wo sie laufen',
        content: [
          '**Es ist immer ein KI-Anbieter aktiv, festgelegt in der .env: Gemini, OpenAI oder „llama“, ein OpenAI-kompatibler Endpunkt, den Sie selbst betreiben; die KI lässt sich auch abschalten.**',
        ],
        items: [
          '**Produkterkennung.** Die KI erkennt ein Produkt auf einem Kamerafoto, und mit einem Gemini-Schlüssel kann sie zu Barcodes befragt werden, die andere Abfragen nicht finden.',
          '**Ablaufdaten.** Die KI liest ein Foto des Etiketts und trägt das Ablaufdatum ein.',
          '**Rezepte und Chat.** Die KI schreibt Rezepte aus dem, was im Vorrat liegt, und bietet einen Chat; Rezepte können auch aus einer verbundenen Mealie-Instanz stammen.',
          '**Anbieter.** Die Beispielkonfiguration dokumentiert Gemini, OpenAI mit änderbarer Basis-URL und änderbarem Modell sowie eine Llama-Option für Ollama, llama.cpp oder vLLM. Das Wiki beschreibt die KI-Funktionen anhand von Gemini und sagt nicht, welche davon mit einem lokalen Modell funktionieren.',
          '**Kostenkontrolle.** Die Beispieldatei legt eine Tagesobergrenze für Gemini-Klassifizierungsaufrufe fest und kann Token-Kosten schätzen.',
        ],
        note: 'Das sind die eigenen Angaben des Projekts. PromptQuorum hat weder die Erkennungsgenauigkeit noch die Rezeptqualität noch ein lokales Modell getestet.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Die Website erklärt, dass Bestand und Verlauf auf Ihrem Gerät oder Heimserver bleiben, die KI optional ist und es keine Telemetrie gibt.** Die Architekturnotizen beschreiben eine SQLite-Datenbank im Datenordner, und die Sicherheitsrichtlinie geht von einem vertrauenswürdigen Heimnetz aus.',
          'In den Quellen genannte Anfragen nach außen: der gewählte KI-Anbieter (Gemini oder OpenAI, außer bei der Llama-Option), Open Food Facts für unbekannte Barcodes, Open Prices für Preisschätzungen sowie optionale Dienste wie Bring!, ntfy, Google-Drive-Sicherung und ein PayPal-Spendenlink. Fehlerberichte landen in einem lokalen, geschwärzten Log, das Senden an GitHub ist eine zweite Einwilligung. Laut README bietet ein einmaliger Dialog eine Spende oder nichts an, Werbung wird nicht angezeigt. Die öffentliche Demo nutzt Cloud-KI.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Erklärungen des Projekts, keine Prüfergebnisse. PromptQuorum hat weder den Netzwerkverkehr noch den Quellcode untersucht.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die Software eignet',
        items: [
          '**Selbsthoster mit Docker-Server oder NAS**, die einen privaten Vorrats- und Ablauf-Tracker möchten.',
          '**Haushalte, die aus dem Vorrat kochen** und eine gemeinsame Einkaufsliste, Ablaufwarnungen und Rezepte aus vorhandenen Zutaten wünschen.',
          '**Home-Assistant-Nutzer**, die Ablauf- und Einkaufsdaten im Smart Home oder in einem MCP-angebundenen Agenten haben möchten.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**KI-Qualität.** Produkterkennung, Ablaufdatum-Erkennung und Rezeptqualität wurden nicht getestet, und die Quellen sagen nicht, welche KI-Funktionen mit einem lokalen Llama-Modell laufen.',
          '**Reife.** Das Projekt begann im März 2026 und nennt einen Entwickler; PromptQuorum hat weder Stabilität noch Sicherheit bewertet.',
          '**Sicherheitsdokumentation.** SECURITY.md nennt weiterhin 1.7.x als unterstützte Linie, weit hinter der aktuellen v1.16.16.',
          '**Datenangaben.** „Keine Telemetrie“ und „Daten bleiben zu Hause“ sind Aussagen des Projekts; der Datenverkehr wurde nicht untersucht.',
          '**Hardwarebedarf.** Es gibt kein dokumentiertes RAM- oder CPU-Minimum, und die Geschwindigkeit auf einem kleinen Gerät wie dem Raspberry Pi wurde nicht geprüft.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        content: [
          'Im Verzeichnis gibt es eine weitere Rezension derselben Smart-Home-Schicht: ein Sprachassistent in Home Assistant, der Plattform, für die EverShelf eine Integration anbietet. Die Website des Projekts vergleicht EverShelf mit [Grocy](https://grocy.info), [Mealie](https://mealie.io) und [KitchenOwl](https://kitchenowl.org); diese Vorrats- und Rezeptmanager stehen nicht im Verzeichnis, und PromptQuorum hat den Vergleich nicht überprüft.',
        ],
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          { 'App': '[Home Assistant Assist](/de/power-local-llm/home-assistant-assist-review)', 'Plattformen': 'Home Assistant, Web, iOS, Android', 'Preis / Lizenz': 'Kostenlos / Apache-2.0', 'Wichtigster Unterschied': 'Sprachsteuerung für das Smart Home, kein Vorrats-Tracker' },
        ],
        note: 'Prüfen Sie Preis, Lizenz und Plattformen jeder App auf deren eigener Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist EverShelf ein lokales LLM?',
            a: 'Nein. Es ist ein in PHP geschriebener Vorratsmanager; die KI wird an Gemini, OpenAI oder einen von Ihnen betriebenen Llama-Server ausgelagert, und laut Website funktionieren die Vorratsfunktionen auch ohne KI.',
          },
          {
            q: 'Wie sichere ich meine Daten?',
            a: 'Laut Release-Notizen läuft täglich eine Sicherung als Datenbank-Snapshot, sie liegt aber im Daten-Volume, daher müssen Sie sie selbst vom Volume wegkopieren.',
          },
          {
            q: 'Funktioniert es mit Home Assistant oder KI-Agenten?',
            a: 'Das Repository verlinkt eine Home-Assistant-Integration (ha-evershelf) und einen MCP-Server für Agenten; PromptQuorum hat keines von beiden getestet.',
          },
          {
            q: 'Läuft es auf Smartphone oder Tablet?',
            a: 'Es öffnet sich im Browser und lässt sich zum Startbildschirm hinzufügen; die Android-Kiosk-App ist für Wandtablets gedacht. Website und README verlinken keinen App-Store- oder Google-Play-Eintrag.',
          },
          {
            q: 'Welche Sprachen unterstützt die Oberfläche?',
            a: 'Die README nennt Italienisch, Englisch, Deutsch, Französisch, Spanisch und Chinesisch, und die App öffnet sich in der Sprache eines Links wie ?lang=de; weitere Sprachen ergänzen Mitwirkende, indem sie translations/en.json übersetzen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'EverShelf ist ein kostenloser, aktiv gepflegter Weg, Vorrat, Ablaufdaten und Einkauf auf einem Server zu verwalten, den Sie kontrollieren, mit optionaler KI zum Erkennen von Produkten, Lesen von Ablaufetiketten und Schreiben von Rezepten. Dagegen stehen eine Einrichtung mit Docker und einer von Hand bearbeiteten .env-Datei, KI bei Gemini oder OpenAI, sofern Sie keinen eigenen Llama-Server konfigurieren, ein Projekt von unter einem Jahr Alter und KI- sowie Datenschutzangaben, die hier nicht überprüft werden konnten. Es passt zu Haushalten, die ohnehin selbst hosten; wer eine App mit Doppelklick-Installation oder einen Sprachmodell-Assistenten sucht, sollte anderswo schauen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[EverShelf-Website](https://evershelf.site) — Funktionen, FAQ und Datenschutzhinweis, geprüft am 1. November 2026.',
          '[EverShelf auf GitHub](https://github.com/dadaloop82/EverShelf) — README, Releases, Beispielkonfiguration, Sicherheitsrichtlinie und Commit-Aktivität, geprüft am 1. November 2026.',
          '[EverShelf-Wiki-Seiten im Repository](https://github.com/dadaloop82/EverShelf/tree/main/docs/wiki) — Funktionen, Installation und KI-Anbieter, geprüft am 1. November 2026.',
          '[README der EverShelf-Android-Kiosk-App](https://github.com/dadaloop82/EverShelf/blob/main/evershelf-kiosk/README.md) — Version, minimale Android-Version und Download, geprüft am 1. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Home Assistant Assist – Rezension](/de/power-local-llm/home-assistant-assist-review) — der in Home Assistant eingebaute Sprachassistent, für den EverShelf eine Integration anbietet.',
          '[Immich – Rezension](/de/power-local-llm/immich-review) — eine weitere selbst gehostete Haushalts-App, deren KI auf Ihrem eigenen Server läuft.',
          '[Local-LLM-Software-Verzeichnis](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-01',
    dateModified: '2026-11-01',
    next_refresh_due: '2027-05-01',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/evershelf-review-hero-es.webp',
    title: 'Reseña de EverShelf: gestor de despensa autoalojado con IA opcional',
    seoTitle: 'Reseña de EverShelf: gestor de despensa con IA opcional',
    intro:
      'EverShelf es un gestor de despensa gratuito y de código abierto que alojas tú mismo, con escaneo de códigos de barras, control de caducidad y listas de la compra; sus funciones de IA son opcionales y funcionan con Gemini, OpenAI o tu propio servidor Llama. No es una app de chat ni un LLM. Esta reseña refleja su sitio web, su repositorio de GitHub, su wiki y sus archivos de configuración, revisados el 1 de noviembre de 2026.',
    metaDescription:
      'Reseña de EverShelf: gestor de despensa gratuito con licencia MIT que alojas tú mismo, con escaneo de códigos de barras, avisos de caducidad e IA opcional.',
    twitterDescription:
      'Reseña de EverShelf: un control de despensa y caducidad autoalojado, con licencia MIT y con IA opcional. Instalación con Docker, requisitos, conexiones salientes y lo que no pudimos verificar.',
    audience:
      'Personas y hogares que quieren alojar su propio control de despensa y necesitan saber cuánto cuesta la instalación, qué IA se ejecuta dónde y qué no confirman las fuentes.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de EverShelf',
    targetKeywords: [
      'reseña evershelf',
      'gestor de despensa autoalojado',
      'app de despensa docker',
      'control de caducidad autoalojado',
      'alternativa a grocy',
      'app de despensa home assistant',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**EverShelf (v1.16.16 a 1 de noviembre de 2026) es un gestor de despensa gratuito con licencia MIT que alojas con Docker; sus funciones de IA se pueden desactivar o dirigir a Gemini, OpenAI o a un servidor Llama propio.** Según su sitio, el inventario y el historial permanecen en tu servidor, mientras que las peticiones de IA salen de él salvo que elijas la opción Llama. Es una herramienta doméstica, no un asistente de chat.',
    quickAnswerTop: {
      es: {
        question: '¿EverShelf mantiene los datos de tu despensa y su IA en tu propio servidor?',
        answer:
          'El inventario sí, según el proyecto: se guarda en una base de datos SQLite en tu servidor. La IA es aparte: con el proveedor Gemini u OpenAI las peticiones van a esas empresas, y solo la opción Llama apunta a un servidor que gestionas tú. PromptQuorum no ha inspeccionado el tráfico de red.',
        bullets: [
          'Gratuito y de código abierto (MIT); el sitio lo describe como gratis para siempre y no lista ningún plan premium.',
          'Servidor con Docker Compose; la app se abre en cualquier navegador y se puede añadir a la pantalla de inicio del móvil.',
          'Una app de quiosco para Android, opcional, convierte una tablet de pared en una pantalla de cocina.',
          'Desde el repositorio se enlazan una API REST, un servidor MCP para agentes de IA y una integración con Home Assistant.',
          'No es una app de LLM de uso general: según el README, la IA reconoce productos, lee fechas de caducidad y sugiere recetas.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es EverShelf?', anchor: 'what-is-evershelf' },
      { label: 'Dónde conseguirlo', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: 'Funciones principales', anchor: 'key-features' },
      { label: 'Funciones de IA y dónde se ejecutan', anchor: 'ai-features' },
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
          {
            type: 'one-sentence',
            text: 'EverShelf es un gestor de despensa de código abierto y autoalojado que controla existencias, fechas de caducidad y listas de la compra, con ayudantes de IA opcionales para reconocer productos y escribir recetas.',
          },
          {
            type: 'plain-terms',
            text: 'Ejecutas EverShelf en un servidor doméstico, escaneas productos con la cámara del móvil y te indica qué se está acabando o caduca pronto y qué comprar.',
          },
        ],
        items: [
          'Mantenimiento: la versión v1.16.16 salió el 25 de octubre de 2026 y el repositorio cambió el 1 de noviembre de 2026, así que no hay aviso de proyecto abandonado; el proyecto empezó en marzo de 2026.',
          'Responsable: el README acredita a un desarrollador, Stimpfl Daniel; el código está en GitHub con licencia MIT.',
          'Instalación: Docker Compose según el README más un archivo .env editado a mano; la IA necesita una clave de proveedor o la dirección de un servidor Llama.',
          'Coste: gratuito; el sitio menciona donaciones opcionales y ningún plan premium.',
          'Alcance: gestión de despensa y compras, por lo que no es una app de modelos de lenguaje.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web, el README, la wiki, la configuración de ejemplo y la actividad en GitHub del proyecto, revisados el 1 de noviembre de 2026. PromptQuorum no ha instalado EverShelf, así que no se evalúan la precisión del escaneo, la calidad de la IA ni la velocidad.',
          },
        ],
      },
      overview: {
        id: 'what-is-evershelf',
        title: '¿Qué es EverShelf?',
        content: [
          '**EverShelf es una aplicación web autoalojada que registra qué hay en tu despensa, cuándo caduca y qué comprar a continuación.** El README la llama «self-hosted pantry manager — inventory, barcode scan, AI recipes, less waste»; está escrita en PHP con una base de datos SQLite y una interfaz de una sola página, y su código es abierto bajo la licencia MIT.',
          'El README acredita a un desarrollador, Stimpfl Daniel (GitHub: dadaloop82), y pide más colaboradores. Una app de iOS sin relación, de Joshumi Technologies, usa el mismo nombre; el README aclara que no hay vínculo.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Dónde conseguirlo',
        content: [
          '**EverShelf es un servidor que instalas tú mismo; la vía documentada es Docker Compose, y los móviles y tablets acceden mediante un navegador o la app de quiosco para Android.**',
        ],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
          { 'Opción': 'Servidor (Docker Compose)', 'Cómo conseguirlo': '[Inicio rápido del README](https://github.com/dadaloop82/EverShelf#-quick-start): clona el repositorio, copia .env.example a .env y ejecuta docker compose up -d' },
          { 'Opción': 'Navegador y móvil', 'Cómo conseguirlo': 'Abre la dirección del servidor en un navegador (puerto 8080 en el archivo compose incluido); en el móvil, añádela a la pantalla de inicio' },
          { 'Opción': 'Tablet de quiosco Android', 'Cómo conseguirlo': '[evershelf-kiosk.apk](https://github.com/dadaloop82/EverShelf/releases/download/kiosk-latest/evershelf-kiosk.apk) (versión 1.7.24, Android 7.0 o posterior)' },
          { 'Opción': 'Unraid', 'Cómo conseguirlo': '[Plantilla de Community Applications y guía](https://github.com/dadaloop82/EverShelf/blob/main/docs/wiki/Unraid.md)' },
          { 'Opción': 'Sitio web', 'Cómo conseguirlo': '[evershelf.site](https://evershelf.site)' },
          { 'Opción': 'Aviso de privacidad', 'Cómo conseguirlo': '[evershelf.site, sección Privacy](https://evershelf.site/#privacy): una declaración breve en la página principal; no se encontró un documento de política aparte' },
          { 'Opción': 'Código fuente', 'Cómo conseguirlo': '[github.com/dadaloop82/EverShelf](https://github.com/dadaloop82/EverShelf)' },
          { 'Opción': 'Demo', 'Cómo conseguirlo': '[evershelf.site/demo](https://evershelf.site/demo), que según el README incluye IA' },
        ],
        note: 'Versión revisada: v1.16.16, publicada el 25 de octubre de 2026 según la release de GitHub; el último cambio del repositorio fue el 1 de noviembre de 2026. La instalación requiere un terminal, Docker y un archivo .env editado a mano, así que es una configuración para desarrolladores y no una instalación con doble clic. La lista de releases de GitHub solo incluye el APK de quiosco para Android.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**Las fuentes no dan un mínimo de RAM ni de CPU; las necesidades indicadas son Docker o PHP 8.0+, una cámara para escanear y, para la IA, una clave de proveedor o un servidor Llama.**',
        ],
        columns: ['Elemento', 'Qué dicen las fuentes'],
        rows: [
          { 'Elemento': 'Servidor', 'Qué dicen las fuentes': 'Docker con Compose, o un servidor web con PHP 8.0+ apuntando a la raíz del repositorio con una carpeta data/ con permiso de escritura' },
          { 'Elemento': 'Almacenamiento', 'Qué dicen las fuentes': 'Base de datos SQLite en el volumen de datos; la copia de seguridad integrada se guarda en ese mismo volumen, así que cópiala a otro sitio' },
          { 'Elemento': 'Memoria y CPU', 'Qué dicen las fuentes': 'No se indica en las fuentes leídas' },
          { 'Elemento': 'Cámara', 'Qué dicen las fuentes': 'El escaneo de códigos de barras usa la cámara del dispositivo en el navegador (QuaggaJS, según la wiki)' },
          { 'Elemento': 'Quiosco', 'Qué dicen las fuentes': 'Android 7.0 (API 24) o posterior; compatibilidad opcional con básculas de cocina Bluetooth' },
          { 'Elemento': 'IA', 'Qué dicen las fuentes': 'Una clave de API de Gemini u OpenAI, o la dirección de un servidor Llama compatible con OpenAI como Ollama, llama.cpp o vLLM' },
          { 'Elemento': 'Red', 'Qué dicen las fuentes': 'Pensado para una red doméstica de confianza; para acceder desde internet la política de seguridad espera que añadas tu propia capa de autenticación' },
        ],
        note: 'Estos datos proceden del README, la wiki y SECURITY.md; PromptQuorum no midió el uso de recursos.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Estos pasos siguen el README del proyecto; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Obtén el código y la plantilla de configuración',
            whyItMatters: 'Ejecuta git clone del repositorio y copia .env.example a .env en la carpeta del proyecto.',
          },
          {
            title: 'Elige el ajuste de IA',
            whyItMatters: 'En .env, pon AI_ENABLED=false para trabajar sin IA, o establece AI_PROVIDER en gemini, openai o llama y añade la clave o la URL base correspondiente.',
          },
          {
            title: 'Inicia el contenedor',
            whyItMatters: 'Ejecuta docker compose up -d y abre http://localhost:8080; para actualizar más adelante, el README indica docker compose pull y luego docker compose up -d.',
          },
          {
            title: 'Empareja tus dispositivos',
            whyItMatters: 'Si API_TOKEN está definido, la interfaz web pide un código de emparejamiento de un solo uso, que aparece en Ajustes, Sistema, Seguridad en un dispositivo ya emparejado o en el registro del servidor.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones principales',
        content: [
          '**Todo lo que sigue procede del README o de la wiki del proyecto; PromptQuorum no ha probado nada.**',
        ],
        items: [
          '**Inventario.** Escaneo de códigos de barras, ubicaciones de almacenamiento, fechas de caducidad, envases abiertos, favoritos e importación y exportación en CSV.',
          '**Compras.** Una lista de la compra inteligente con cantidades contra el desperdicio, recetas que añaden los ingredientes que faltan tras descontar lo que ya tienes y sincronización opcional con Bring!.',
          '**Cocina.** Recetas paso a paso con instrucciones habladas, temporizadores y consejos de desperdicio cero.',
          '**Avisos y calendario.** Notificaciones de caducidad mediante ntfy, un webhook JSON o Home Assistant, además de un feed ICS para Google o Apple Calendar.',
          '**Integraciones.** Una API REST, un servidor MCP, una integración con Home Assistant en otro repositorio, un Health Bridge con Fuel Mode y el quiosco Android con una pasarela para báscula Bluetooth.',
        ],
        note: 'Parte de las notas de versión del README está escrita en italiano.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Funciones de IA y dónde se ejecutan',
        content: [
          '**Hay un solo proveedor de IA activo a la vez, elegido en .env: Gemini, OpenAI o «llama», un endpoint compatible con OpenAI que gestionas tú; la IA también se puede desactivar.**',
        ],
        items: [
          '**Reconocimiento de productos.** La IA identifica un producto a partir de una foto de la cámara y, con una clave de Gemini, se le puede consultar por códigos de barras que otras búsquedas no encuentran.',
          '**Fechas de caducidad.** La IA lee una foto de la etiqueta y rellena el campo de caducidad.',
          '**Recetas y chat.** La IA escribe recetas con lo que hay en la despensa y ofrece un chat; las recetas también pueden venir de una instancia de Mealie conectada.',
          '**Proveedores.** La configuración de ejemplo documenta Gemini, OpenAI con URL base y modelo modificables, y una opción Llama para Ollama, llama.cpp o vLLM. La wiki describe las funciones de IA en términos de Gemini y no indica cuáles funcionan con un modelo local.',
          '**Control de costes.** El archivo de ejemplo fija un límite diario de llamadas de clasificación a Gemini y puede estimar el coste en tokens.',
        ],
        note: 'Son afirmaciones del propio proyecto. PromptQuorum no probó la precisión del reconocimiento, la calidad de las recetas ni ningún modelo local.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**El sitio afirma que el inventario y el historial permanecen en tu dispositivo o servidor doméstico, que la IA es opcional y que no hay telemetría.** Las notas de arquitectura describen una base de datos SQLite en la carpeta de datos, y la política de seguridad parte de una red doméstica de confianza.',
          'Peticiones externas que nombran las fuentes: el proveedor de IA que elijas (Gemini u OpenAI, salvo con la opción Llama), Open Food Facts para códigos de barras desconocidos, Open Prices para estimar precios y servicios opcionales como Bring!, ntfy, la copia de seguridad en Google Drive y un enlace de donación de PayPal. Los informes de error van a un registro local con datos ocultos, y enviarlos a GitHub es una segunda aceptación voluntaria. Según el README, un diálogo único ofrece donar o nada, y no se muestra publicidad. La demo pública usa IA en la nube.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del proyecto, no resultados de una auditoría. PromptQuorum no ha inspeccionado el tráfico de red ni el código fuente.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Quienes alojan sus propios servicios con un servidor Docker o un NAS** y quieren un control privado de despensa y caducidad.',
          '**Hogares que cocinan con lo que tienen** y quieren una lista de la compra compartida, avisos de caducidad y recetas hechas con lo disponible.',
          '**Usuarios de Home Assistant** que quieren los datos de caducidad y compras en su hogar inteligente o en un agente conectado por MCP.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad de la IA.** No se probaron el reconocimiento de productos, la lectura de caducidades ni la calidad de las recetas, y las fuentes no dicen qué funciones de IA funcionan con un modelo Llama local.',
          '**Madurez.** El proyecto empezó en marzo de 2026 y acredita a un desarrollador; PromptQuorum no evaluó su estabilidad ni su seguridad.',
          '**Documentación de seguridad.** SECURITY.md sigue listando 1.7.x como la línea con soporte, muy por detrás de la actual v1.16.16.',
          '**Afirmaciones sobre datos.** «Sin telemetría» y «los datos se quedan en casa» son declaraciones del proyecto; no se inspeccionó el tráfico.',
          '**Necesidades de hardware.** No hay un mínimo documentado de RAM ni de CPU, y no se comprobó la velocidad en un dispositivo pequeño como una Raspberry Pi.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        content: [
          'El directorio tiene otra reseña de la misma capa de hogar inteligente: un asistente de voz dentro de Home Assistant, la plataforma para la que EverShelf ofrece una integración. El sitio del propio proyecto compara EverShelf con [Grocy](https://grocy.info), [Mealie](https://mealie.io) y [KitchenOwl](https://kitchenowl.org); esos gestores de despensa y recetas no están en el directorio y PromptQuorum no verificó esa comparación.',
        ],
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[Home Assistant Assist](/es/power-local-llm/home-assistant-assist-review)', 'Plataformas': 'Home Assistant, web, iOS, Android', 'Precio / licencia': 'Gratis / Apache-2.0', 'Diferencia clave': 'Control por voz del hogar inteligente, no un control de despensa' },
        ],
        note: 'Confirma el precio, la licencia y las plataformas actuales de cada app en su propia página.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿EverShelf es un LLM local?',
            a: 'No. Es un gestor de despensa escrito en PHP; su IA se delega en Gemini, OpenAI o un servidor Llama que gestionas tú, y según el sitio las funciones de despensa funcionan sin IA.',
          },
          {
            q: '¿Cómo hago una copia de seguridad de mis datos?',
            a: 'Según las notas de versión, cada día se hace una copia como instantánea de la base de datos, pero se guarda dentro del volumen de datos, así que debes copiarla tú fuera del volumen.',
          },
          {
            q: '¿Funciona con Home Assistant o con agentes de IA?',
            a: 'El repositorio enlaza una integración con Home Assistant (ha-evershelf) y un servidor MCP para agentes; PromptQuorum no probó ninguno de los dos.',
          },
          {
            q: '¿Funciona en un móvil o una tablet?',
            a: 'Se abre en un navegador y se puede añadir a la pantalla de inicio, y la app de quiosco para Android está pensada para tablets de pared. El sitio y el README no enlazan ninguna ficha de App Store ni de Google Play.',
          },
          {
            q: '¿Qué idiomas admite la interfaz?',
            a: 'El README enumera italiano, inglés, alemán, francés, español y chino, y la app se abre en el idioma de un enlace como ?lang=de; los colaboradores añaden un idioma traduciendo translations/en.json.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'EverShelf es una forma gratuita y con actualizaciones frecuentes de controlar la despensa, las fechas de caducidad y las compras en un servidor que tú controlas, con IA opcional para reconocer productos, leer etiquetas de caducidad y escribir recetas. En contra, la instalación exige Docker y un archivo .env editado a mano, la IA funciona con Gemini u OpenAI salvo que configures tu propio servidor Llama, el proyecto tiene menos de un año y no se pudo comprobar ninguna de las afirmaciones sobre IA ni privacidad. Encaja con hogares que ya alojan sus servicios; quien busque una app con instalación de doble clic o un asistente de modelo de lenguaje debería mirar en otra parte.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de EverShelf](https://evershelf.site) — funciones, preguntas frecuentes y aviso de privacidad, revisados el 1 de noviembre de 2026.',
          '[EverShelf en GitHub](https://github.com/dadaloop82/EverShelf) — README, releases, configuración de ejemplo, política de seguridad y actividad de commits, revisados el 1 de noviembre de 2026.',
          '[Páginas de la wiki de EverShelf en el repositorio](https://github.com/dadaloop82/EverShelf/tree/main/docs/wiki) — funciones, instalación y proveedores de IA, revisadas el 1 de noviembre de 2026.',
          '[README de la app de quiosco para Android de EverShelf](https://github.com/dadaloop82/EverShelf/blob/main/evershelf-kiosk/README.md) — versión, nivel mínimo de Android y descarga, revisados el 1 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Home Assistant Assist](/es/power-local-llm/home-assistant-assist-review) — el asistente de voz integrado en Home Assistant, para el que EverShelf ofrece una integración.',
          '[Reseña de Immich](/es/power-local-llm/immich-review) — otra app doméstica autoalojada cuya IA se ejecuta en tu propio servidor.',
          '[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-01',
    dateModified: '2026-11-01',
    next_refresh_due: '2027-05-01',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/evershelf-review-hero-fr.webp',
    title: 'Test d’EverShelf : gestionnaire de garde-manger auto-hébergé avec IA facultative',
    seoTitle: 'Test d’EverShelf : garde-manger auto-hébergé, IA en option',
    intro:
      'EverShelf est un gestionnaire de garde-manger gratuit et open source que vous hébergez vous-même, avec scan de codes-barres, suivi des dates de péremption et listes de courses ; ses fonctions d’IA sont facultatives et passent par Gemini, OpenAI ou votre propre serveur Llama. Ce n’est pas une application de chat ni un LLM. Ce test s’appuie sur son site, son dépôt GitHub, son wiki et ses fichiers de configuration, consultés le 1er novembre 2026.',
    metaDescription:
      'Test d’EverShelf : garde-manger gratuit (licence MIT) à héberger soi-même, avec scan de codes-barres, alertes de péremption et IA facultative.',
    twitterDescription:
      'Test d’EverShelf : un suivi de garde-manger et de péremption auto-hébergé, sous licence MIT, à IA facultative. Installation Docker, prérequis, requêtes sortantes et ce que nous n’avons pas pu vérifier.',
    audience:
      'Les particuliers et foyers qui veulent héberger leur propre suivi de garde-manger et doivent savoir quel effort l’installation demande, quelle IA s’exécute où et ce que les sources ne confirment pas.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'test EverShelf',
    targetKeywords: [
      'test evershelf',
      'gestionnaire de garde-manger auto-hébergé',
      'application garde-manger docker',
      'suivi de péremption auto-hébergé',
      'alternative à grocy',
      'application garde-manger home assistant',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**EverShelf (v1.16.16 au 1er novembre 2026) est un gestionnaire de garde-manger gratuit, sous licence MIT, que vous hébergez avec Docker et dont les fonctions d’IA peuvent être désactivées ou dirigées vers Gemini, OpenAI ou un serveur Llama à vous.** Selon son site, l’inventaire et l’historique restent sur votre serveur, alors que les requêtes d’IA le quittent, sauf si vous choisissez l’option Llama. C’est un outil domestique, pas un assistant de chat.',
    quickAnswerTop: {
      fr: {
        question: 'EverShelf garde-t-il les données de votre garde-manger et son IA sur votre propre serveur ?',
        answer:
          'L’inventaire, d’après le projet : il est stocké dans une base SQLite sur votre serveur. L’IA est à part : avec le fournisseur Gemini ou OpenAI, les requêtes partent chez ces entreprises, et seule l’option Llama pointe vers un serveur que vous exploitez. PromptQuorum n’a pas inspecté le trafic réseau.',
        bullets: [
          'Gratuit et open source (MIT) ; le site le dit gratuit pour toujours et ne mentionne aucune offre premium.',
          'Serveur via Docker Compose ; l’application s’ouvre dans n’importe quel navigateur et peut être ajoutée à l’écran d’accueil du téléphone.',
          'Une application kiosque Android facultative transforme une tablette murale en écran de cuisine.',
          'Une API REST, un serveur MCP pour agents d’IA et une intégration Home Assistant sont liés depuis le dépôt.',
          'Pas une application LLM généraliste : selon le README, l’IA reconnaît les produits, lit les dates de péremption et propose des recettes.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce qu’EverShelf ?', anchor: 'what-is-evershelf' },
      { label: 'Où l’obtenir', anchor: 'get-it' },
      { label: 'Prérequis', anchor: 'requirements' },
      { label: 'Premiers pas', anchor: 'getting-started' },
      { label: 'Fonctions principales', anchor: 'key-features' },
      { label: 'Fonctions d’IA et où elles s’exécutent', anchor: 'ai-features' },
      { label: 'Flux de données et confidentialité', anchor: 'privacy' },
      { label: 'À qui il s’adresse', anchor: 'who-should-use' },
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
          {
            type: 'one-sentence',
            text: 'EverShelf est un gestionnaire de garde-manger open source et auto-hébergé qui suit les stocks, les dates de péremption et les listes de courses, avec des assistants d’IA facultatifs pour reconnaître les produits et rédiger des recettes.',
          },
          {
            type: 'plain-terms',
            text: 'Vous faites tourner EverShelf sur un serveur domestique, vous scannez les produits avec la caméra du téléphone, et il indique ce qui manque bientôt ou périme et ce qu’il faut acheter.',
          },
        ],
        items: [
          'Maintenance : la version v1.16.16 est sortie le 25 octobre 2026 et le dépôt a changé le 1er novembre 2026, donc aucun avertissement de projet abandonné ne s’applique ; le projet a démarré en mars 2026.',
          'Éditeur : le README cite un développeur, Stimpfl Daniel ; le code est sur GitHub sous licence MIT.',
          'Installation : Docker Compose selon le README et un fichier .env modifié à la main ; l’IA demande une clé de fournisseur ou l’adresse d’un serveur Llama.',
          'Coût : gratuit ; le site mentionne des dons facultatifs et aucune offre premium.',
          'Périmètre : gestion du garde-manger et des courses, donc pas une application de modèle de langage.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s’appuie sur le site, le README, le wiki, la configuration d’exemple et l’activité GitHub du projet, consultés le 1er novembre 2026. PromptQuorum n’a pas installé EverShelf ; la précision du scan, la qualité de l’IA et la vitesse ne sont donc pas évaluées.',
          },
        ],
      },
      overview: {
        id: 'what-is-evershelf',
        title: 'Qu’est-ce qu’EverShelf ?',
        content: [
          '**EverShelf est une application web auto-hébergée qui suit ce que contient votre garde-manger, quand cela périme et ce qu’il faut acheter ensuite.** Le README la présente comme un « self-hosted pantry manager — inventory, barcode scan, AI recipes, less waste » ; elle est écrite en PHP avec une base SQLite et une interface monopage, et son code est open source sous licence MIT.',
          'Le README cite un développeur, Stimpfl Daniel (GitHub : dadaloop82), et cherche d’autres contributeurs. Une application iOS sans rapport, de Joshumi Technologies, porte le même nom ; le README précise qu’il n’y a aucun lien.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Où l’obtenir',
        content: [
          '**EverShelf est un serveur que vous installez vous-même ; la voie documentée est Docker Compose, et les téléphones et tablettes y accèdent via un navigateur ou l’application kiosque Android.**',
        ],
        columns: ['Option', 'Comment l’obtenir'],
        rows: [
          { 'Option': 'Serveur (Docker Compose)', 'Comment l’obtenir': '[Démarrage rapide du README](https://github.com/dadaloop82/EverShelf#-quick-start) : cloner le dépôt, copier .env.example vers .env, exécuter docker compose up -d' },
          { 'Option': 'Navigateur et téléphone', 'Comment l’obtenir': 'Ouvrir l’adresse du serveur dans un navigateur (port 8080 dans le fichier compose fourni) ; sur un téléphone, l’ajouter à l’écran d’accueil' },
          { 'Option': 'Tablette kiosque Android', 'Comment l’obtenir': '[evershelf-kiosk.apk](https://github.com/dadaloop82/EverShelf/releases/download/kiosk-latest/evershelf-kiosk.apk) (version 1.7.24, Android 7.0 ou plus récent)' },
          { 'Option': 'Unraid', 'Comment l’obtenir': '[Modèle Community Applications et guide](https://github.com/dadaloop82/EverShelf/blob/main/docs/wiki/Unraid.md)' },
          { 'Option': 'Site web', 'Comment l’obtenir': '[evershelf.site](https://evershelf.site)' },
          { 'Option': 'Déclaration de confidentialité', 'Comment l’obtenir': '[evershelf.site, section Privacy](https://evershelf.site/#privacy) : une courte déclaration sur la page d’accueil ; aucun document de politique distinct n’a été trouvé' },
          { 'Option': 'Code source', 'Comment l’obtenir': '[github.com/dadaloop82/EverShelf](https://github.com/dadaloop82/EverShelf)' },
          { 'Option': 'Démo', 'Comment l’obtenir': '[evershelf.site/demo](https://evershelf.site/demo), qui inclut l’IA selon le README' },
        ],
        note: 'Version testée : v1.16.16, publiée le 25 octobre 2026 selon la release GitHub ; la dernière modification du dépôt date du 1er novembre 2026. L’installation demande un terminal, Docker et un fichier .env modifié à la main : c’est une configuration de développeur, pas une installation par double-clic. La liste des releases GitHub ne contient que l’APK kiosque Android.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**Les sources ne donnent aucun minimum de RAM ou de processeur ; les besoins indiqués sont Docker ou PHP 8.0+, une caméra pour scanner et, pour l’IA, une clé de fournisseur ou un serveur Llama.**',
        ],
        columns: ['Élément', 'Ce que disent les sources'],
        rows: [
          { 'Élément': 'Serveur', 'Ce que disent les sources': 'Docker avec Compose, ou un serveur web PHP 8.0+ pointant vers la racine du dépôt avec un dossier data/ accessible en écriture' },
          { 'Élément': 'Stockage', 'Ce que disent les sources': 'Base SQLite dans le volume de données ; la sauvegarde intégrée est stockée dans ce même volume, copiez-la donc ailleurs' },
          { 'Élément': 'Mémoire et processeur', 'Ce que disent les sources': 'Non indiqué dans les sources consultées' },
          { 'Élément': 'Caméra', 'Ce que disent les sources': 'Le scan de codes-barres utilise la caméra de l’appareil dans le navigateur (QuaggaJS, d’après le wiki)' },
          { 'Élément': 'Kiosque', 'Ce que disent les sources': 'Android 7.0 (API 24) ou plus récent ; prise en charge facultative d’une balance de cuisine Bluetooth' },
          { 'Élément': 'IA', 'Ce que disent les sources': 'Une clé d’API Gemini ou OpenAI, ou l’adresse d’un serveur Llama compatible OpenAI comme Ollama, llama.cpp ou vLLM' },
          { 'Élément': 'Réseau', 'Ce que disent les sources': 'Conçu pour un réseau domestique de confiance ; pour un accès depuis internet, la politique de sécurité attend que vous ajoutiez votre propre couche d’authentification' },
        ],
        note: 'Ces éléments proviennent du README, du wiki et de SECURITY.md ; PromptQuorum n’a pas mesuré la consommation de ressources.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Ces étapes suivent le README du projet ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Récupérer le code et le modèle de configuration',
            whyItMatters: 'Exécutez git clone sur le dépôt, puis copiez .env.example vers .env dans le dossier du projet.',
          },
          {
            title: 'Choisir le réglage de l’IA',
            whyItMatters: 'Dans .env, mettez AI_ENABLED=false pour travailler sans IA, ou réglez AI_PROVIDER sur gemini, openai ou llama et ajoutez la clé ou l’URL de base correspondante.',
          },
          {
            title: 'Démarrer le conteneur',
            whyItMatters: 'Exécutez docker compose up -d et ouvrez http://localhost:8080 ; pour mettre à jour plus tard, le README indique docker compose pull puis docker compose up -d.',
          },
          {
            title: 'Associer vos appareils',
            whyItMatters: 'Si API_TOKEN est défini, l’interface web demande un code d’association à usage unique, affiché sous Réglages, Système, Sécurité sur un appareil déjà associé ou dans le journal du serveur.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions principales',
        content: [
          '**Tout ce qui suit provient du README ou du wiki du projet ; PromptQuorum n’a rien testé.**',
        ],
        items: [
          '**Inventaire.** Scan de codes-barres, lieux de stockage, dates de péremption, paquets entamés, favoris et import et export CSV.',
          '**Courses.** Une liste de courses intelligente avec des quantités anti-gaspillage, des recettes qui ajoutent les ingrédients manquants après déduction du stock, et une synchronisation facultative avec Bring!.',
          '**Cuisine.** Recettes pas à pas avec instructions vocales, minuteurs et astuces anti-gaspillage.',
          '**Alertes et calendrier.** Notifications de péremption via ntfy, un webhook JSON ou Home Assistant, plus un flux ICS pour Google ou Apple Calendar.',
          '**Intégrations.** Une API REST, un serveur MCP, une intégration Home Assistant dans un dépôt séparé, un Health Bridge avec Fuel Mode et le kiosque Android avec passerelle pour balance Bluetooth.',
        ],
        note: 'Une partie des notes de version du README est rédigée en italien.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Fonctions d’IA et où elles s’exécutent',
        content: [
          '**Un seul fournisseur d’IA est actif à la fois, choisi dans .env : Gemini, OpenAI ou « llama », un point d’accès compatible OpenAI que vous exploitez vous-même ; l’IA peut aussi être désactivée.**',
        ],
        items: [
          '**Reconnaissance de produits.** L’IA identifie un produit à partir d’une photo de la caméra et, avec une clé Gemini, on peut l’interroger sur les codes-barres que les autres recherches ne trouvent pas.',
          '**Dates de péremption.** L’IA lit une photo de l’étiquette et renseigne le champ de péremption.',
          '**Recettes et chat.** L’IA rédige des recettes à partir de ce que contient le garde-manger et propose un chat ; les recettes peuvent aussi venir d’une instance Mealie connectée.',
          '**Fournisseurs.** La configuration d’exemple documente Gemini, OpenAI avec URL de base et modèle modifiables, et une option Llama pour Ollama, llama.cpp ou vLLM. Le wiki décrit les fonctions d’IA en termes de Gemini et n’indique pas lesquelles fonctionnent avec un modèle local.',
          '**Contrôle des coûts.** Le fichier d’exemple fixe un plafond quotidien d’appels de classification Gemini et peut estimer le coût en tokens.',
        ],
        note: 'Ce sont les déclarations du projet lui-même. PromptQuorum n’a testé ni la précision de la reconnaissance, ni la qualité des recettes, ni aucun modèle local.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**Le site affirme que l’inventaire et l’historique restent sur votre appareil ou votre serveur domestique, que l’IA est facultative et qu’il n’y a pas de télémétrie.** Les notes d’architecture décrivent une base SQLite dans le dossier de données, et la politique de sécurité suppose un réseau domestique de confiance.',
          'Requêtes sortantes citées par les sources : le fournisseur d’IA choisi (Gemini ou OpenAI, sauf avec l’option Llama), Open Food Facts pour les codes-barres inconnus, Open Prices pour les estimations de prix, et des services facultatifs comme Bring!, ntfy, la sauvegarde sur Google Drive et un lien de don PayPal. Les rapports d’erreur vont dans un journal local expurgé, et leur envoi vers GitHub est un second consentement. Selon le README, une boîte de dialogue unique propose un don ou rien, et aucune publicité n’est affichée. La démo publique utilise une IA dans le cloud.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations du projet, pas des résultats d’audit. PromptQuorum n’a inspecté ni le trafic réseau ni le code source.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s’adresse',
        items: [
          '**Les auto-hébergeurs avec un serveur Docker ou un NAS** qui veulent un suivi privé du garde-manger et des péremptions.',
          '**Les foyers qui cuisinent avec ce qu’ils ont** et veulent une liste de courses partagée, des alertes de péremption et des recettes composées avec le stock.',
          '**Les utilisateurs de Home Assistant** qui veulent les données de péremption et de courses dans leur maison connectée ou dans un agent relié en MCP.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité de l’IA.** La reconnaissance de produits, la lecture des dates et la qualité des recettes n’ont pas été testées, et les sources n’indiquent pas quelles fonctions d’IA marchent avec un modèle Llama local.',
          '**Maturité.** Le projet a débuté en mars 2026 et cite un développeur ; PromptQuorum n’a évalué ni sa stabilité ni sa sécurité.',
          '**Documentation de sécurité.** SECURITY.md indique toujours 1.7.x comme version prise en charge, très en retard sur la v1.16.16 actuelle.',
          '**Affirmations sur les données.** « Pas de télémétrie » et « les données restent à la maison » sont des déclarations du projet ; le trafic n’a pas été inspecté.',
          '**Besoins matériels.** Aucun minimum de RAM ou de processeur n’est documenté, et la vitesse sur un petit appareil comme un Raspberry Pi n’a pas été vérifiée.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        content: [
          'Le répertoire contient un autre test de la même couche maison connectée : un assistant vocal intégré à Home Assistant, la plateforme pour laquelle EverShelf propose une intégration. Le site du projet compare EverShelf à [Grocy](https://grocy.info), [Mealie](https://mealie.io) et [KitchenOwl](https://kitchenowl.org) ; ces gestionnaires de garde-manger et de recettes ne figurent pas dans le répertoire, et PromptQuorum n’a pas vérifié cette comparaison.',
        ],
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'Application': '[Home Assistant Assist](/fr/power-local-llm/home-assistant-assist-review)', 'Plateformes': 'Home Assistant, web, iOS, Android', 'Prix / licence': 'Gratuit / Apache-2.0', 'Différence clé': 'Commande vocale de la maison connectée, pas un suivi de garde-manger' },
        ],
        note: 'Vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre page.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'EverShelf est-il un LLM local ?',
            a: 'Non. C’est un gestionnaire de garde-manger écrit en PHP ; son IA est déléguée à Gemini, OpenAI ou à un serveur Llama que vous exploitez, et selon le site les fonctions de garde-manger marchent sans IA.',
          },
          {
            q: 'Comment sauvegarder mes données ?',
            a: 'Selon les notes de version, une sauvegarde quotidienne s’exécute sous forme d’instantané de la base, mais elle est stockée dans le volume de données : copiez-la vous-même hors du volume.',
          },
          {
            q: 'Fonctionne-t-il avec Home Assistant ou des agents d’IA ?',
            a: 'Le dépôt renvoie vers une intégration Home Assistant (ha-evershelf) et un serveur MCP pour agents ; PromptQuorum n’a testé ni l’un ni l’autre.',
          },
          {
            q: 'Fonctionne-t-il sur un téléphone ou une tablette ?',
            a: 'Il s’ouvre dans un navigateur et peut être ajouté à l’écran d’accueil, et l’application kiosque Android est prévue pour les tablettes murales. Le site et le README ne renvoient vers aucune fiche App Store ni Google Play.',
          },
          {
            q: 'Quelles langues l’interface prend-elle en charge ?',
            a: 'Le README cite l’italien, l’anglais, l’allemand, le français, l’espagnol et le chinois, et l’application s’ouvre dans la langue d’un lien comme ?lang=de ; les contributeurs ajoutent une langue en traduisant translations/en.json.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'EverShelf est un moyen gratuit et régulièrement mis à jour de suivre garde-manger, dates de péremption et courses sur un serveur que vous contrôlez, avec une IA facultative pour reconnaître les produits, lire les étiquettes de péremption et rédiger des recettes. En contrepartie, l’installation demande Docker et un fichier .env modifié à la main, l’IA passe par Gemini ou OpenAI sauf si vous configurez votre propre serveur Llama, le projet a moins d’un an et aucune des déclarations sur l’IA ou la confidentialité n’a pu être vérifiée ici. Il convient aux foyers qui hébergent déjà leurs services ; qui veut une application à installer par double-clic ou un assistant à modèle de langage doit chercher ailleurs.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site web d’EverShelf](https://evershelf.site) — fonctions, FAQ et déclaration de confidentialité, consultés le 1er novembre 2026.',
          '[EverShelf sur GitHub](https://github.com/dadaloop82/EverShelf) — README, releases, configuration d’exemple, politique de sécurité et activité des commits, consultés le 1er novembre 2026.',
          '[Pages du wiki d’EverShelf dans le dépôt](https://github.com/dadaloop82/EverShelf/tree/main/docs/wiki) — fonctions, installation et fournisseurs d’IA, consultées le 1er novembre 2026.',
          '[README de l’application kiosque Android d’EverShelf](https://github.com/dadaloop82/EverShelf/blob/main/evershelf-kiosk/README.md) — version, niveau Android minimal et téléchargement, consultés le 1er novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Home Assistant Assist](/fr/power-local-llm/home-assistant-assist-review) — l’assistant vocal intégré à Home Assistant, pour lequel EverShelf propose une intégration.',
          '[Test d’Immich](/fr/power-local-llm/immich-review) — une autre application domestique auto-hébergée dont l’IA s’exécute sur votre propre serveur.',
          '[Répertoire de logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-01',
    dateModified: '2026-11-01',
    next_refresh_due: '2027-05-01',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/evershelf-review-hero-ja.webp',
    title: 'EverShelfレビュー：AIを任意で使えるセルフホスト型パントリー管理アプリ',
    seoTitle: 'EverShelfレビュー：AI任意のセルフホスト型在庫管理',
    intro:
      'EverShelfは、バーコードスキャン、賞味期限の管理、買い物リストを備えた、無料でオープンソースのセルフホスト型パントリー管理アプリです。AI機能は任意で、Gemini、OpenAI、または自前のLlamaサーバーを通じて動作します。チャットやLLMのアプリではありません。このレビューは、2026年11月1日に確認した公式サイト、GitHubリポジトリ、Wiki、設定ファイルに基づいています。',
    metaDescription:
      'EverShelfレビュー：バーコードスキャンと賞味期限アラートを備えた、MITライセンスの無料セルフホスト型パントリー管理アプリ。AIはGemini、OpenAI、Llamaで任意利用。',
    twitterDescription:
      'EverShelfレビュー：MITライセンスのセルフホスト型パントリー・賞味期限管理アプリで、AIは任意です。Dockerでの導入、動作要件、外部への通信、確認できなかった点を解説します。',
    audience:
      '自宅でパントリー管理アプリを運用したい個人や世帯向け。導入の手間、AIがどこで動くか、情報源が裏付けていない点を知りたい方が対象です。',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'EverShelf レビュー',
    targetKeywords: [
      'evershelf レビュー',
      'セルフホスト パントリー管理',
      '在庫管理アプリ docker',
      '賞味期限管理 セルフホスト',
      'grocy 代替',
      'パントリー管理 home assistant',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**EverShelf（2026年11月1日時点でv1.16.16）は、Dockerで運用するMITライセンスの無料パントリー管理アプリで、AI機能はオフにすることも、Gemini、OpenAI、自前のLlamaサーバーに向けることもできます。** 公式サイトによると在庫と履歴は自分のサーバーに残りますが、AIへのリクエストはLlamaを選ばない限りサーバーの外に出ます。家庭向けのツールであり、チャットアシスタントではありません。',
    quickAnswerTop: {
      ja: {
        question: 'EverShelfはパントリーのデータとAIを自分のサーバーに留めますか？',
        answer:
          '在庫データについては、プロジェクトの説明ではそのとおりです。自分のサーバー上のSQLiteデータベースに保存されます。AIは別で、GeminiまたはOpenAIを選ぶとリクエストはそれらの企業に送られ、自分で運用するサーバーを指すのはLlamaの選択肢だけです。PromptQuorumはネットワーク通信を検査していません。',
        bullets: [
          '無料でオープンソース（MIT）。公式サイトは「永久に無料」としており、有料プランの記載はありません。',
          'サーバーはDocker Composeで構築し、アプリは任意のブラウザで開け、スマートフォンのホーム画面にも追加できます。',
          '任意のAndroidキオスクアプリで、壁掛けタブレットをキッチン用ディスプレイにできます。',
          'REST API、AIエージェント向けのMCPサーバー、Home Assistant連携がリポジトリからリンクされています。',
          '汎用のLLMアプリではありません。READMEによると、AIは商品の認識、賞味期限の読み取り、レシピの提案を担います。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'EverShelfとは', anchor: 'what-is-evershelf' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '動作要件', anchor: 'requirements' },
      { label: '始め方', anchor: 'getting-started' },
      { label: '主な機能', anchor: 'key-features' },
      { label: 'AI機能と実行場所', anchor: 'ai-features' },
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
          {
            type: 'one-sentence',
            text: 'EverShelfは、在庫、賞味期限、買い物リストを管理するオープンソースのセルフホスト型パントリー管理アプリで、商品の認識やレシピ作成を助けるAIを任意で使えます。',
          },
          {
            type: 'plain-terms',
            text: '自宅のサーバーでEverShelfを動かし、スマートフォンのカメラで商品をスキャンすると、なくなりそうなものや期限が近いもの、買うべきものを教えてくれます。',
          },
        ],
        items: [
          'メンテナンス：v1.16.16は2026年10月25日にリリースされ、リポジトリは2026年11月1日に更新されたため、放置プロジェクトの警告は該当しません。プロジェクトの開始は2026年3月です。',
          '運営：READMEにはStimpfl Daniel氏1名が記載されています。コードはMITライセンスでGitHubに公開されています。',
          '導入：READMEのDocker Composeと、手作業で編集する.envファイルが必要です。AIにはプロバイダーのキーかLlamaサーバーのアドレスが要ります。',
          '費用：無料。公式サイトには任意の寄付が記載され、有料プランはありません。',
          '範囲：パントリーと買い物の管理アプリであり、言語モデルのアプリではありません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、2026年11月1日に確認したプロジェクトの公式サイト、README、Wiki、設定例、GitHubの更新状況に基づいています。PromptQuorumはEverShelfをインストールしていないため、スキャンの精度、AIの品質、速度は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-evershelf',
        title: 'EverShelfとは',
        content: [
          '**EverShelfは、パントリーに何があり、いつ期限が切れ、次に何を買うべきかを記録するセルフホスト型のWebアプリケーションです。** READMEは「self-hosted pantry manager — inventory, barcode scan, AI recipes, less waste」と紹介しています。PHPとSQLiteデータベース、シングルページのフロントエンドで作られ、コードはMITライセンスのオープンソースです。',
          'READMEにはStimpfl Daniel氏（GitHub：dadaloop82）1名が記載され、協力者を募っています。Joshumi Technologiesの無関係なiOSアプリが同じ名前を使っていますが、READMEは関係がないと明記しています。',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: '入手方法',
        content: [
          '**EverShelfは自分でインストールするサーバーです。文書化されている方法はDocker Composeで、スマートフォンやタブレットからはブラウザまたはAndroidキオスクアプリでアクセスします。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          { '項目': 'サーバー（Docker Compose）', '入手方法': '[READMEのクイックスタート](https://github.com/dadaloop82/EverShelf#-quick-start)：リポジトリをクローンし、.env.exampleを.envにコピーして、docker compose up -dを実行' },
          { '項目': 'ブラウザとスマートフォン', '入手方法': 'サーバーのアドレスをブラウザで開きます（付属のcomposeファイルではポート8080）。スマートフォンではホーム画面に追加' },
          { '項目': 'Androidキオスクタブレット', '入手方法': '[evershelf-kiosk.apk](https://github.com/dadaloop82/EverShelf/releases/download/kiosk-latest/evershelf-kiosk.apk)（バージョン1.7.24、Android 7.0以降）' },
          { '項目': 'Unraid', '入手方法': '[Community Applicationsのテンプレートとガイド](https://github.com/dadaloop82/EverShelf/blob/main/docs/wiki/Unraid.md)' },
          { '項目': '公式サイト', '入手方法': '[evershelf.site](https://evershelf.site)' },
          { '項目': 'プライバシーに関する記載', '入手方法': '[evershelf.site のPrivacyセクション](https://evershelf.site/#privacy)：トップページ上の短い説明で、独立したポリシー文書は見つかりませんでした' },
          { '項目': 'ソースコード', '入手方法': '[github.com/dadaloop82/EverShelf](https://github.com/dadaloop82/EverShelf)' },
          { '項目': 'デモ', '入手方法': '[evershelf.site/demo](https://evershelf.site/demo)。READMEによるとAIも含まれます' },
        ],
        note: '確認したバージョン：v1.16.16。GitHubのリリースによると2026年10月25日に公開され、リポジトリの最終更新は2026年11月1日です。導入にはターミナル、Docker、手作業で編集する.envファイルが必要で、ダブルクリックでインストールできるタイプではなく開発者向けの構成です。GitHubのリリース一覧にあるのはAndroidキオスクのAPKだけです。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: [
          '**情報源にはRAMやCPUの最小要件がありません。記載されている条件は、DockerまたはPHP 8.0以上、スキャン用のカメラ、AI用のプロバイダーキーまたはLlamaサーバーです。**',
        ],
        columns: ['項目', '情報源の記載'],
        rows: [
          { '項目': 'サーバー', '情報源の記載': 'Docker Compose、またはリポジトリのルートを指すPHP 8.0以上のWebサーバー（書き込み可能なdata/フォルダー付き）' },
          { '項目': 'ストレージ', '情報源の記載': 'データボリューム内のSQLiteデータベース。内蔵バックアップも同じボリュームに保存されるため、別の場所にコピーしてください' },
          { '項目': 'メモリとCPU', '情報源の記載': '確認した情報源には記載なし' },
          { '項目': 'カメラ', '情報源の記載': 'バーコードのスキャンはブラウザ経由で端末のカメラを使用（Wikiによると QuaggaJS）' },
          { '項目': 'キオスク', '情報源の記載': 'Android 7.0（API 24）以降。Bluetoothキッチンスケールへの対応は任意' },
          { '項目': 'AI', '情報源の記載': 'GeminiまたはOpenAIのAPIキー、またはOllama、llama.cpp、vLLMなどOpenAI互換のLlamaサーバーのアドレス' },
          { '項目': 'ネットワーク', '情報源の記載': '信頼できる家庭内ネットワーク向け。インターネットからアクセスする場合、セキュリティポリシーは独自の認証レイヤーを前提としています' },
        ],
        note: 'これらの項目はREADME、Wiki、SECURITY.mdによるものです。PromptQuorumはリソース使用量を測定していません。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**以下の手順はプロジェクトのREADMEに沿ったもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'コードと設定テンプレートを取得する',
            whyItMatters: 'リポジトリをgit cloneし、プロジェクトのフォルダーで.env.exampleを.envにコピーします。',
          },
          {
            title: 'AIの設定を選ぶ',
            whyItMatters: '.envでAI_ENABLED=falseにするとAIなしで使えます。AIを使う場合はAI_PROVIDERをgemini、openai、llamaのいずれかにし、対応するキーまたはベースURLを追加します。',
          },
          {
            title: 'コンテナを起動する',
            whyItMatters: 'docker compose up -dを実行し、http://localhost:8080を開きます。後で更新する際は、READMEにdocker compose pullに続けてdocker compose up -dと記載されています。',
          },
          {
            title: '端末をペアリングする',
            whyItMatters: 'API_TOKENを設定している場合、Web画面で一度きりのペアリングコードが求められます。コードはペアリング済みの端末の設定、システム、セキュリティ、またはサーバーのログに表示されます。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '主な機能',
        content: [
          '**以下はすべてプロジェクトのREADMEまたはWikiの記載であり、PromptQuorumは一つも検証していません。**',
        ],
        items: [
          '**在庫管理。** バーコードのスキャン、保管場所、賞味期限、開封済みの商品、お気に入り、CSVのインポートとエクスポート。',
          '**買い物。** 食品ロスを減らす数量を提案するスマート買い物リスト、手持ちを差し引いて不足分を追加するレシピ連携、任意のBring!同期。',
          '**料理。** 音声読み上げ、タイマー、食品ロス削減のヒントを備えた手順付きレシピ。',
          '**アラートとカレンダー。** ntfy、JSON Webhook、Home Assistantによる期限通知と、GoogleカレンダーやAppleカレンダー向けのICSフィード。',
          '**連携。** REST API、MCPサーバー、別リポジトリのHome Assistant連携、Fuel ModeつきのHealth Bridge、Bluetoothスケールのゲートウェイを備えたAndroidキオスク。',
        ],
        note: 'READMEのリリースノートの一部はイタリア語で書かれています。',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI機能と実行場所',
        content: [
          '**AIプロバイダーは同時に一つだけ有効で、.envで選びます。Gemini、OpenAI、または自分で運用するOpenAI互換エンドポイントの「llama」で、AIをオフにすることもできます。**',
        ],
        items: [
          '**商品の認識。** AIはカメラの写真から商品を識別し、Geminiのキーがあれば、他の検索で見つからないバーコードについても問い合わせられます。',
          '**賞味期限。** AIがラベルの写真を読み取り、期限欄に入力します。',
          '**レシピとチャット。** AIはパントリーにあるものからレシピを作り、チャットも提供します。レシピは連携したMealieインスタンスから取得することもできます。',
          '**プロバイダー。** 設定例には、Gemini、ベースURLとモデルを変更できるOpenAI、Ollama・llama.cpp・vLLM向けのLlamaの選択肢が記載されています。WikiはAI機能をGeminiを前提に説明しており、どれがローカルモデルで動くかは書かれていません。',
          '**コスト管理。** 設定例にはGeminiの分類呼び出しの1日あたり上限があり、トークンコストの概算も出せます。',
        ],
        note: 'これらはプロジェクト自身の説明です。PromptQuorumは認識精度、レシピの品質、ローカルモデルのいずれも検証していません。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**公式サイトは、在庫と履歴は端末または自宅のサーバーに残り、AIは任意で、テレメトリーはないと説明しています。** アーキテクチャのメモにはdataフォルダー内のSQLiteデータベースが記され、セキュリティポリシーは信頼できる家庭内ネットワークを前提にしています。',
          '情報源に挙げられている外部への通信は、選んだAIプロバイダー（Llamaを選ばない場合はGeminiまたはOpenAI）、未知のバーコード用のOpen Food Facts、価格の概算用のOpen Prices、そしてBring!、ntfy、Google Driveへのバックアップ、PayPalの寄付リンクなどの任意サービスです。エラーレポートは機密情報を伏せたローカルのログに書かれ、GitHubへの送信は二段階目の任意設定です。READMEによると、一度だけ表示されるダイアログは寄付かなしかを選ぶもので、広告は表示されません。公開デモはクラウドのAIを使います。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらはプロジェクトの申告であり、監査の結果ではありません。PromptQuorumはネットワーク通信もソースコードも検査していません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**DockerサーバーやNASを持つセルフホスト派**で、プライベートなパントリーと賞味期限の管理を求める人。',
          '**パントリーにあるもので料理する世帯**で、共有の買い物リスト、期限アラート、手持ち食材のレシピがほしい人。',
          '**Home Assistantユーザー**で、期限や買い物のデータをスマートホームやMCP接続のエージェントで使いたい人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**AIの品質。** 商品認識、賞味期限の読み取り、レシピの品質は検証しておらず、どのAI機能がローカルのLlamaモデルで動くかも情報源に書かれていません。',
          '**成熟度。** プロジェクトは2026年3月に始まり、記載されている開発者は1名です。安定性とセキュリティはPromptQuorumでは評価していません。',
          '**セキュリティ文書。** SECURITY.mdは今もサポート対象を1.7.xとしており、現行のv1.16.16から大きく遅れています。',
          '**データに関する説明。** 「テレメトリーなし」「データは自宅に残る」はプロジェクトの説明で、通信は検査していません。',
          '**必要なハードウェア。** RAMやCPUの最小要件は文書化されておらず、Raspberry Piのような小型機器での速度も確認していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        content: [
          'ディレクトリには、同じスマートホーム層でもう1件レビューがあります。EverShelfが連携を提供しているHome Assistant内の音声アシスタントです。プロジェクトの公式サイトは[Grocy](https://grocy.info)、[Mealie](https://mealie.io)、[KitchenOwl](https://kitchenowl.org)と比較していますが、これらのパントリー・レシピ管理ツールはディレクトリに掲載されておらず、PromptQuorumはその比較を検証していません。',
        ],
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[Home Assistant Assist](/ja/power-local-llm/home-assistant-assist-review)', '対応プラットフォーム': 'Home Assistant、Web、iOS、Android', '価格／ライセンス': '無料 / Apache-2.0', '主な違い': 'スマートホームの音声操作用で、パントリー管理ではない' },
        ],
        note: '各アプリの最新の価格、ライセンス、対応プラットフォームは、それぞれの公式ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'EverShelfはローカルLLMですか？',
            a: 'いいえ。PHPで書かれたパントリー管理アプリで、AIはGemini、OpenAI、または自分で運用するLlamaサーバーに任せます。公式サイトによると、パントリー機能はAIなしでも動作します。',
          },
          {
            q: 'データのバックアップはどうしますか？',
            a: 'リリースノートによると、毎日データベースのスナップショットとしてバックアップが作られますが、保存先はデータボリューム内なので、ボリュームの外へ自分でコピーする必要があります。',
          },
          {
            q: 'Home AssistantやAIエージェントと連携できますか？',
            a: 'リポジトリにはHome Assistant連携（ha-evershelf）とエージェント向けMCPサーバーへのリンクがあります。PromptQuorumはどちらも検証していません。',
          },
          {
            q: 'スマートフォンやタブレットで使えますか？',
            a: 'ブラウザで開いてホーム画面に追加でき、Androidキオスクアプリは壁掛けタブレット向けです。公式サイトとREADMEには、App StoreやGoogle Playのページへのリンクはありません。',
          },
          {
            q: 'どの言語に対応していますか？',
            a: 'READMEにはイタリア語、英語、ドイツ語、フランス語、スペイン語、中国語が挙げられ、?lang=deのようなリンクの言語でアプリが開きます。言語を追加するには、協力者がtranslations/en.jsonを翻訳します。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'EverShelfは、自分で管理するサーバー上で、パントリー、賞味期限、買い物を管理できる、無料で更新も活発な選択肢です。商品の認識、賞味期限ラベルの読み取り、レシピ作成には任意のAIを使えます。一方で、導入にはDockerと手作業で編集する.envファイルが必要で、自前のLlamaサーバーを設定しない限りAIはGeminiまたはOpenAIで動き、プロジェクトは1年未満で、AIとプライバシーに関する説明は確認できませんでした。すでに自宅でサービスを運用している世帯に向いており、ダブルクリックで入れられるアプリや言語モデルのアシスタントを求める方は、ほかを探すのがよいでしょう。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[EverShelf公式サイト](https://evershelf.site) — 機能、FAQ、プライバシーに関する記載。2026年11月1日に確認。',
          '[GitHubのEverShelf](https://github.com/dadaloop82/EverShelf) — README、リリース、設定例、セキュリティポリシー、コミットの更新状況。2026年11月1日に確認。',
          '[リポジトリ内のEverShelf Wikiページ](https://github.com/dadaloop82/EverShelf/tree/main/docs/wiki) — 機能、導入方法、AIプロバイダー。2026年11月1日に確認。',
          '[EverShelf AndroidキオスクのREADME](https://github.com/dadaloop82/EverShelf/blob/main/evershelf-kiosk/README.md) — バージョン、必要なAndroidの最低バージョン、ダウンロード。2026年11月1日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Home Assistant Assistのレビュー](/ja/power-local-llm/home-assistant-assist-review) — EverShelfが連携を提供している、Home Assistant内蔵の音声アシスタント。',
          '[Immichのレビュー](/ja/power-local-llm/immich-review) — AIが自分のサーバー上で動く、もう一つのセルフホスト型の家庭向けアプリ。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-01',
    dateModified: '2026-11-01',
    next_refresh_due: '2027-05-01',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/evershelf-review-hero-pt.webp',
    title: 'Análise do EverShelf: gerenciador de despensa auto-hospedado com IA opcional',
    seoTitle: 'Análise do EverShelf: despensa auto-hospedada, IA opcional',
    intro:
      'O EverShelf é um gerenciador de despensa gratuito e de código aberto que você hospeda por conta própria, com leitura de código de barras, controle de validade e listas de compras; os recursos de IA são opcionais e funcionam com Gemini, OpenAI ou o seu próprio servidor Llama. Não é um app de chat nem um LLM. Esta análise reflete o site, o repositório no GitHub, a wiki e os arquivos de configuração, conferidos em 1º de novembro de 2026.',
    metaDescription:
      'Análise do EverShelf: despensa gratuita (licença MIT) que você mesmo hospeda, com leitura de código de barras, alertas de validade e IA opcional.',
    twitterDescription:
      'Análise do EverShelf: um controle de despensa e validade auto-hospedado, com licença MIT e IA opcional. Instalação com Docker, requisitos, conexões externas e o que não conseguimos verificar.',
    audience:
      'Pessoas e famílias que querem rodar o próprio controle de despensa e precisam saber o esforço de instalação, onde cada IA é executada e o que as fontes não confirmam.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise do EverShelf',
    targetKeywords: [
      'análise evershelf',
      'gerenciador de despensa auto-hospedado',
      'app de despensa docker',
      'controle de validade auto-hospedado',
      'alternativa ao grocy',
      'app de despensa home assistant',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**O EverShelf (v1.16.16 em 1º de novembro de 2026) é um gerenciador de despensa gratuito, com licença MIT, que você hospeda com Docker e cujos recursos de IA podem ser desligados ou apontados para Gemini, OpenAI ou um servidor Llama seu.** Segundo o site, o estoque e o histórico ficam no seu servidor, enquanto as solicitações de IA saem dele, a menos que você escolha a opção Llama. É uma ferramenta doméstica, não um assistente de chat.',
    quickAnswerTop: {
      pt: {
        question: 'O EverShelf mantém os dados da sua despensa e a IA no seu próprio servidor?',
        answer:
          'O estoque sim, segundo o projeto: ele fica em um banco SQLite no seu servidor. A IA é separada: com o provedor Gemini ou OpenAI, as solicitações vão para essas empresas, e só a opção Llama aponta para um servidor que você mesmo opera. A PromptQuorum não inspecionou o tráfego de rede.',
        bullets: [
          'Gratuito e de código aberto (MIT); o site diz que é grátis para sempre e não lista nenhum plano premium.',
          'Servidor com Docker Compose; o app abre em qualquer navegador e pode ser adicionado à tela inicial do celular.',
          'Um app de quiosque para Android, opcional, transforma um tablet de parede em um painel de cozinha.',
          'Uma API REST, um servidor MCP para agentes de IA e uma integração com o Home Assistant estão linkados no repositório.',
          'Não é um app de LLM de uso geral: segundo o README, a IA reconhece produtos, lê datas de validade e sugere receitas.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o EverShelf?', anchor: 'what-is-evershelf' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Principais recursos', anchor: 'key-features' },
      { label: 'Recursos de IA e onde eles rodam', anchor: 'ai-features' },
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
          {
            type: 'one-sentence',
            text: 'O EverShelf é um gerenciador de despensa de código aberto e auto-hospedado que controla estoque, datas de validade e listas de compras, com assistentes de IA opcionais para reconhecer produtos e escrever receitas.',
          },
          {
            type: 'plain-terms',
            text: 'Você roda o EverShelf em um servidor doméstico, escaneia produtos com a câmera do celular, e ele avisa o que está acabando ou vencendo e o que comprar.',
          },
        ],
        items: [
          'Manutenção: a versão v1.16.16 saiu em 25 de outubro de 2026 e o repositório foi alterado em 1º de novembro de 2026, então não vale o aviso de projeto abandonado; o projeto começou em março de 2026.',
          'Responsável: o README credita um desenvolvedor, Stimpfl Daniel; o código está no GitHub sob licença MIT.',
          'Instalação: Docker Compose conforme o README e um arquivo .env editado à mão; a IA exige uma chave de provedor ou o endereço de um servidor Llama.',
          'Custo: gratuito; o site menciona doações opcionais e nenhum plano premium.',
          'Escopo: gestão de despensa e compras, portanto não é um app de modelo de linguagem.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site, no README, na wiki, na configuração de exemplo e na atividade no GitHub do projeto, conferidos em 1º de novembro de 2026. A PromptQuorum não instalou o EverShelf, então precisão da leitura, qualidade da IA e velocidade não foram avaliadas.',
          },
        ],
      },
      overview: {
        id: 'what-is-evershelf',
        title: 'O que é o EverShelf?',
        content: [
          '**O EverShelf é um aplicativo web auto-hospedado que registra o que há na sua despensa, quando vence e o que comprar em seguida.** O README o descreve como “self-hosted pantry manager — inventory, barcode scan, AI recipes, less waste”; ele é escrito em PHP com banco SQLite e uma interface de página única, e o código é aberto sob a licença MIT.',
          'O README credita um desenvolvedor, Stimpfl Daniel (GitHub: dadaloop82), e pede mais colaboradores. Um app de iOS sem relação, da Joshumi Technologies, usa o mesmo nome; o README esclarece que não há vínculo.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Onde obter',
        content: [
          '**O EverShelf é um servidor que você mesmo instala; o caminho documentado é o Docker Compose, e celulares e tablets o acessam pelo navegador ou pelo app de quiosque para Android.**',
        ],
        columns: ['Opção', 'Onde obter'],
        rows: [
          { 'Opção': 'Servidor (Docker Compose)', 'Onde obter': '[Início rápido do README](https://github.com/dadaloop82/EverShelf#-quick-start): clone o repositório, copie .env.example para .env e execute docker compose up -d' },
          { 'Opção': 'Navegador e celular', 'Onde obter': 'Abra o endereço do servidor no navegador (porta 8080 no arquivo compose fornecido); no celular, adicione à tela inicial' },
          { 'Opção': 'Tablet de quiosque Android', 'Onde obter': '[evershelf-kiosk.apk](https://github.com/dadaloop82/EverShelf/releases/download/kiosk-latest/evershelf-kiosk.apk) (versão 1.7.24, Android 7.0 ou superior)' },
          { 'Opção': 'Unraid', 'Onde obter': '[Modelo do Community Applications e guia](https://github.com/dadaloop82/EverShelf/blob/main/docs/wiki/Unraid.md)' },
          { 'Opção': 'Site oficial', 'Onde obter': '[evershelf.site](https://evershelf.site)' },
          { 'Opção': 'Aviso de privacidade', 'Onde obter': '[evershelf.site, seção Privacy](https://evershelf.site/#privacy): uma declaração curta na página inicial; não foi encontrado um documento de política separado' },
          { 'Opção': 'Código-fonte', 'Onde obter': '[github.com/dadaloop82/EverShelf](https://github.com/dadaloop82/EverShelf)' },
          { 'Opção': 'Demo', 'Onde obter': '[evershelf.site/demo](https://evershelf.site/demo), que segundo o README inclui IA' },
        ],
        note: 'Versão analisada: v1.16.16, publicada em 25 de outubro de 2026 segundo a release do GitHub; a última alteração do repositório foi em 1º de novembro de 2026. A instalação exige terminal, Docker e um arquivo .env editado à mão, então é uma configuração para desenvolvedores, não uma instalação com duplo clique. A lista de releases do GitHub traz apenas o APK de quiosque para Android.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**As fontes não dão um mínimo de RAM nem de CPU; as necessidades indicadas são Docker ou PHP 8.0+, uma câmera para escanear e, para a IA, uma chave de provedor ou um servidor Llama.**',
        ],
        columns: ['Item', 'O que dizem as fontes'],
        rows: [
          { 'Item': 'Servidor', 'O que dizem as fontes': 'Docker com Compose, ou um servidor web com PHP 8.0+ apontando para a raiz do repositório com uma pasta data/ gravável' },
          { 'Item': 'Armazenamento', 'O que dizem as fontes': 'Banco SQLite no volume de dados; o backup integrado fica nesse mesmo volume, então copie-o para outro lugar' },
          { 'Item': 'Memória e CPU', 'O que dizem as fontes': 'Não informado nas fontes lidas' },
          { 'Item': 'Câmera', 'O que dizem as fontes': 'A leitura de código de barras usa a câmera do dispositivo no navegador (QuaggaJS, segundo a wiki)' },
          { 'Item': 'Quiosque', 'O que dizem as fontes': 'Android 7.0 (API 24) ou superior; suporte opcional a balanças de cozinha Bluetooth' },
          { 'Item': 'IA', 'O que dizem as fontes': 'Uma chave de API do Gemini ou da OpenAI, ou o endereço de um servidor Llama compatível com OpenAI, como Ollama, llama.cpp ou vLLM' },
          { 'Item': 'Rede', 'O que dizem as fontes': 'Feito para uma rede doméstica confiável; para acessar pela internet, a política de segurança espera que você adicione sua própria camada de autenticação' },
        ],
        note: 'Esses itens vêm do README, da wiki e do SECURITY.md; a PromptQuorum não mediu o uso de recursos.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Estes passos seguem o README do projeto; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Obtenha o código e o modelo de configuração',
            whyItMatters: 'Execute git clone do repositório e copie .env.example para .env na pasta do projeto.',
          },
          {
            title: 'Escolha a configuração de IA',
            whyItMatters: 'No .env, defina AI_ENABLED=false para usar sem IA, ou ajuste AI_PROVIDER para gemini, openai ou llama e adicione a chave ou a URL base correspondente.',
          },
          {
            title: 'Inicie o contêiner',
            whyItMatters: 'Execute docker compose up -d e abra http://localhost:8080; para atualizar depois, o README indica docker compose pull e em seguida docker compose up -d.',
          },
          {
            title: 'Pareie seus dispositivos',
            whyItMatters: 'Se API_TOKEN estiver definido, a interface web pede um código de pareamento de uso único, exibido em Configurações, Sistema, Segurança em um dispositivo já pareado ou no log do servidor.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Principais recursos',
        content: [
          '**Tudo o que segue vem do README ou da wiki do projeto; a PromptQuorum não testou nada.**',
        ],
        items: [
          '**Estoque.** Leitura de código de barras, locais de armazenamento, datas de validade, embalagens abertas, favoritos e importação e exportação em CSV.',
          '**Compras.** Uma lista de compras inteligente com quantidades contra o desperdício, receitas que adicionam os ingredientes que faltam depois de descontar o que você tem e sincronização opcional com o Bring!.',
          '**Cozinha.** Receitas passo a passo com instruções faladas, temporizadores e dicas de desperdício zero.',
          '**Alertas e calendário.** Notificações de validade por ntfy, webhook JSON ou Home Assistant, além de um feed ICS para Google ou Apple Calendar.',
          '**Integrações.** Uma API REST, um servidor MCP, uma integração com o Home Assistant em outro repositório, um Health Bridge com Fuel Mode e o quiosque Android com gateway para balança Bluetooth.',
        ],
        note: 'Parte das notas de versão do README está escrita em italiano.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Recursos de IA e onde eles rodam',
        content: [
          '**Apenas um provedor de IA fica ativo por vez, escolhido no .env: Gemini, OpenAI ou “llama”, um endpoint compatível com OpenAI que você mesmo opera; a IA também pode ser desligada.**',
        ],
        items: [
          '**Reconhecimento de produtos.** A IA identifica um produto a partir de uma foto da câmera e, com uma chave do Gemini, pode ser consultada sobre códigos de barras que outras buscas não encontram.',
          '**Datas de validade.** A IA lê uma foto do rótulo e preenche o campo de validade.',
          '**Receitas e chat.** A IA escreve receitas com o que há na despensa e oferece um chat; as receitas também podem vir de uma instância do Mealie conectada.',
          '**Provedores.** A configuração de exemplo documenta Gemini, OpenAI com URL base e modelo alteráveis, e uma opção Llama para Ollama, llama.cpp ou vLLM. A wiki descreve os recursos de IA em termos do Gemini e não diz quais funcionam com um modelo local.',
          '**Controle de custos.** O arquivo de exemplo define um limite diário de chamadas de classificação ao Gemini e pode estimar o custo em tokens.',
        ],
        note: 'São afirmações do próprio projeto. A PromptQuorum não testou a precisão do reconhecimento, a qualidade das receitas nem nenhum modelo local.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**O site afirma que o estoque e o histórico ficam no seu dispositivo ou servidor doméstico, que a IA é opcional e que não há telemetria.** As notas de arquitetura descrevem um banco SQLite na pasta de dados, e a política de segurança parte de uma rede doméstica confiável.',
          'Solicitações externas citadas nas fontes: o provedor de IA escolhido (Gemini ou OpenAI, exceto com a opção Llama), o Open Food Facts para códigos de barras desconhecidos, o Open Prices para estimar preços e serviços opcionais como Bring!, ntfy, backup no Google Drive e um link de doação do PayPal. Os relatórios de erro vão para um log local com dados ocultados, e enviá-los ao GitHub é uma segunda adesão voluntária. Segundo o README, uma caixa de diálogo única oferece doar ou nada, e nenhuma publicidade é exibida. A demo pública usa IA na nuvem.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São declarações do projeto, não resultados de auditoria. A PromptQuorum não inspecionou o tráfego de rede nem o código-fonte.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Quem hospeda os próprios serviços com um servidor Docker ou NAS** e quer um controle privado de despensa e validade.',
          '**Famílias que cozinham com o que têm** e querem lista de compras compartilhada, alertas de validade e receitas feitas com o que está à mão.',
          '**Usuários do Home Assistant** que querem os dados de validade e compras na casa inteligente ou em um agente conectado por MCP.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade da IA.** Reconhecimento de produtos, leitura de validade e qualidade das receitas não foram testados, e as fontes não dizem quais recursos de IA funcionam com um modelo Llama local.',
          '**Maturidade.** O projeto começou em março de 2026 e credita um desenvolvedor; a PromptQuorum não avaliou sua estabilidade nem sua segurança.',
          '**Documentação de segurança.** O SECURITY.md ainda lista a 1.7.x como a linha com suporte, bem atrás da atual v1.16.16.',
          '**Afirmações sobre dados.** “Sem telemetria” e “os dados ficam em casa” são declarações do projeto; o tráfego não foi inspecionado.',
          '**Necessidades de hardware.** Não há mínimo documentado de RAM nem de CPU, e a velocidade em um dispositivo pequeno como um Raspberry Pi não foi verificada.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        content: [
          'O diretório tem outra análise da mesma camada de casa inteligente: um assistente de voz dentro do Home Assistant, a plataforma para a qual o EverShelf oferece uma integração. O site do próprio projeto compara o EverShelf com [Grocy](https://grocy.info), [Mealie](https://mealie.io) e [KitchenOwl](https://kitchenowl.org); esses gerenciadores de despensa e receitas não estão no diretório, e a PromptQuorum não verificou essa comparação.',
        ],
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[Home Assistant Assist](/pt/power-local-llm/home-assistant-assist-review)', 'Plataformas': 'Home Assistant, web, iOS, Android', 'Preço / licença': 'Grátis / Apache-2.0', 'Diferença principal': 'Controle por voz da casa inteligente, não um controle de despensa' },
        ],
        note: 'Confirme o preço, a licença e as plataformas atuais de cada app na própria página dele.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O EverShelf é um LLM local?',
            a: 'Não. É um gerenciador de despensa escrito em PHP; a IA é delegada ao Gemini, à OpenAI ou a um servidor Llama que você opera, e segundo o site os recursos de despensa funcionam sem IA.',
          },
          {
            q: 'Como faço backup dos meus dados?',
            a: 'Segundo as notas de versão, um backup diário roda como instantâneo do banco, mas fica dentro do volume de dados, então você mesmo precisa copiá-lo para fora do volume.',
          },
          {
            q: 'Funciona com o Home Assistant ou com agentes de IA?',
            a: 'O repositório linka uma integração com o Home Assistant (ha-evershelf) e um servidor MCP para agentes; a PromptQuorum não testou nenhum dos dois.',
          },
          {
            q: 'Funciona em celular ou tablet?',
            a: 'Ele abre no navegador e pode ser adicionado à tela inicial, e o app de quiosque para Android é voltado a tablets de parede. O site e o README não linkam nenhuma página na App Store ou no Google Play.',
          },
          {
            q: 'Quais idiomas a interface suporta?',
            a: 'O README lista italiano, inglês, alemão, francês, espanhol e chinês, e o app abre no idioma de um link como ?lang=de; colaboradores adicionam um idioma traduzindo translations/en.json.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O EverShelf é uma forma gratuita e com atualizações frequentes de controlar despensa, validade e compras em um servidor que você controla, com IA opcional para reconhecer produtos, ler rótulos de validade e escrever receitas. Em contrapartida, a instalação exige Docker e um arquivo .env editado à mão, a IA roda no Gemini ou na OpenAI a menos que você configure o seu próprio servidor Llama, o projeto tem menos de um ano e nenhuma das afirmações sobre IA ou privacidade pôde ser verificada aqui. Combina com famílias que já hospedam seus serviços; quem quer um app com instalação por duplo clique ou um assistente de modelo de linguagem deve procurar em outro lugar.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do EverShelf](https://evershelf.site) — recursos, FAQ e aviso de privacidade, conferidos em 1º de novembro de 2026.',
          '[EverShelf no GitHub](https://github.com/dadaloop82/EverShelf) — README, releases, configuração de exemplo, política de segurança e atividade de commits, conferidos em 1º de novembro de 2026.',
          '[Páginas da wiki do EverShelf no repositório](https://github.com/dadaloop82/EverShelf/tree/main/docs/wiki) — recursos, instalação e provedores de IA, conferidas em 1º de novembro de 2026.',
          '[README do app de quiosque Android do EverShelf](https://github.com/dadaloop82/EverShelf/blob/main/evershelf-kiosk/README.md) — versão, nível mínimo do Android e download, conferidos em 1º de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Home Assistant Assist](/pt/power-local-llm/home-assistant-assist-review) — o assistente de voz integrado ao Home Assistant, para o qual o EverShelf oferece uma integração.',
          '[Análise do Immich](/pt/power-local-llm/immich-review) — outro app doméstico auto-hospedado cuja IA roda no seu próprio servidor.',
          '[Diretório de software para LLMs locais](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-01',
    dateModified: '2026-11-01',
    next_refresh_due: '2027-05-01',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/evershelf-review-hero-ar.webp',
    title: 'مراجعة EverShelf: مدير مخزن طعام مستضاف ذاتيًا مع ذكاء اصطناعي اختياري',
    seoTitle: 'مراجعة EverShelf: مخزن طعام ذاتي الاستضافة بذكاء اختياري',
    intro:
      'EverShelf مدير مخزن طعام مجاني ومفتوح المصدر تستضيفه بنفسك، مع مسح الباركود وتتبّع تواريخ الانتهاء وقوائم التسوق؛ وميزات الذكاء الاصطناعي فيه اختيارية وتعمل عبر Gemini أو OpenAI أو خادم Llama خاص بك. وهو ليس تطبيق دردشة ولا LLM. تعكس هذه المراجعة موقعه ومستودعه على GitHub وويكيه وملفات إعداده كما جرى التحقق منها في 1 نوفمبر 2026.',
    metaDescription:
      'مراجعة EverShelf: مدير مخزن طعام مجاني برخصة MIT تستضيفه بنفسك، مع مسح الباركود وتنبيهات الانتهاء وذكاء اصطناعي اختياري عبر Gemini أو OpenAI أو Llama.',
    twitterDescription:
      'مراجعة EverShelf: أداة مستضافة ذاتيًا برخصة MIT لتتبّع المخزن وتواريخ الانتهاء، والذكاء الاصطناعي فيها اختياري. التثبيت عبر Docker والمتطلبات والطلبات الخارجية وما لم نتمكن من التحقق منه.',
    audience:
      'الأفراد والأسر الذين يريدون تشغيل أداة خاصة بهم لإدارة المخزن، ويحتاجون إلى معرفة جهد التثبيت وأين يعمل الذكاء الاصطناعي وما لا تؤكده المصادر.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة EverShelf',
    targetKeywords: [
      'مراجعة evershelf',
      'مدير مخزن طعام مستضاف ذاتيا',
      'تطبيق مخزن طعام docker',
      'تتبع تاريخ الانتهاء مستضاف ذاتيا',
      'بديل grocy',
      'تطبيق مخزن طعام home assistant',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**EverShelf (الإصدار v1.16.16 حتى 1 نوفمبر 2026) مدير مخزن طعام مجاني برخصة MIT تستضيفه عبر Docker، ويمكن إيقاف ميزات الذكاء الاصطناعي فيه أو توجيهها إلى Gemini أو OpenAI أو خادم Llama خاص بك.** وبحسب موقعه يبقى المخزون والسجل على خادمك، بينما تغادره طلبات الذكاء الاصطناعي ما لم تختر خيار Llama. هو أداة منزلية وليس مساعد دردشة.',
    quickAnswerTop: {
      ar: {
        question: 'هل يُبقي EverShelf بيانات مخزنك والذكاء الاصطناعي على خادمك الخاص؟',
        answer:
          'المخزون نعم، بحسب المشروع: فهو محفوظ في قاعدة بيانات SQLite على خادمك. أما الذكاء الاصطناعي فمنفصل: مع مزوّد Gemini أو OpenAI تذهب الطلبات إلى هاتين الشركتين، وخيار Llama وحده يشير إلى خادم تديره بنفسك. لم تفحص PromptQuorum حركة الشبكة.',
        bullets: [
          'مجاني ومفتوح المصدر (MIT)؛ ويصفه الموقع بأنه مجاني دائمًا ولا يذكر أي باقة مدفوعة.',
          'الخادم عبر Docker Compose؛ ويفتح التطبيق في أي متصفح ويمكن إضافته إلى الشاشة الرئيسية للهاتف.',
          'تطبيق كشك اختياري لنظام Android يحوّل لوحًا مثبتًا على الحائط إلى شاشة مطبخ.',
          'تتوفر في المستودع روابط إلى واجهة REST API وخادم MCP لوكلاء الذكاء الاصطناعي وتكامل مع Home Assistant.',
          'ليس تطبيق LLM عامًا: بحسب README يتعرّف الذكاء الاصطناعي على المنتجات ويقرأ تواريخ الانتهاء ويقترح وصفات.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو EverShelf؟', anchor: 'what-is-evershelf' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'المتطلبات', anchor: 'requirements' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'الميزات الرئيسية', anchor: 'key-features' },
      { label: 'ميزات الذكاء الاصطناعي وأين تعمل', anchor: 'ai-features' },
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
          {
            type: 'one-sentence',
            text: 'EverShelf مدير مخزن طعام مفتوح المصدر ومستضاف ذاتيًا يتتبع المخزون وتواريخ الانتهاء وقوائم التسوق، مع مساعدات ذكاء اصطناعي اختيارية للتعرف على المنتجات وكتابة الوصفات.',
          },
          {
            type: 'plain-terms',
            text: 'تشغّل EverShelf على خادم منزلي وتمسح المنتجات بكاميرا الهاتف، فيخبرك بما يوشك على النفاد أو الانتهاء وبما عليك شراؤه.',
          },
        ],
        items: [
          'الصيانة: صدر الإصدار v1.16.16 في 25 أكتوبر 2026 وتغيّر المستودع في 1 نوفمبر 2026، فلا ينطبق تحذير المشروع المتوقف؛ وبدأ المشروع في مارس 2026.',
          'الجهة المشغّلة: يذكر README مطوّرًا واحدًا هو Stimpfl Daniel؛ والشيفرة على GitHub برخصة MIT.',
          'التثبيت: Docker Compose وفق README مع ملف .env يُعدَّل يدويًا؛ ويحتاج الذكاء الاصطناعي إلى مفتاح مزوّد أو عنوان خادم Llama.',
          'التكلفة: مجاني؛ ويذكر الموقع تبرعات اختيارية ولا يذكر باقة مدفوعة.',
          'النطاق: إدارة المخزن والتسوق، فهو ليس تطبيق نموذج لغوي.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى موقع المشروع وREADME والويكي والإعداد النموذجي ونشاط GitHub كما جرى التحقق منها في 1 نوفمبر 2026. لم تثبّت PromptQuorum تطبيق EverShelf، لذلك لم تُقيَّم دقة المسح ولا جودة الذكاء الاصطناعي ولا السرعة.',
          },
        ],
      },
      overview: {
        id: 'what-is-evershelf',
        title: 'ما هو EverShelf؟',
        content: [
          '**EverShelf تطبيق ويب مستضاف ذاتيًا يسجّل ما في مخزنك ومتى ينتهي وما الذي يجب شراؤه بعد ذلك.** يصفه README بأنه "self-hosted pantry manager — inventory, barcode scan, AI recipes, less waste"؛ وهو مكتوب بلغة PHP مع قاعدة بيانات SQLite وواجهة أمامية من صفحة واحدة، وشيفرته مفتوحة المصدر برخصة MIT.',
          'يذكر README مطوّرًا واحدًا هو Stimpfl Daniel (على GitHub: dadaloop82) ويطلب مساهمين آخرين. ويستخدم تطبيق iOS لا علاقة له من Joshumi Technologies الاسم نفسه؛ ويوضح README أنه لا توجد أي صلة.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'كيف تحصل عليه',
        content: [
          '**EverShelf خادم تثبّته بنفسك؛ والطريق الموثّق هو Docker Compose، وتصل إليه الهواتف واللوحات عبر المتصفح أو تطبيق الكشك لنظام Android.**',
        ],
        columns: ['الخيار', 'مصدر الحصول عليه'],
        rows: [
          { 'الخيار': 'الخادم (Docker Compose)', 'مصدر الحصول عليه': '[البدء السريع في README](https://github.com/dadaloop82/EverShelf#-quick-start): انسخ المستودع بـ git clone، ثم انسخ .env.example إلى .env، ثم شغّل docker compose up -d' },
          { 'الخيار': 'المتصفح والهاتف', 'مصدر الحصول عليه': 'افتح عنوان الخادم في المتصفح (المنفذ 8080 في ملف compose المرفق)؛ وعلى الهاتف أضفه إلى الشاشة الرئيسية' },
          { 'الخيار': 'لوح كشك Android', 'مصدر الحصول عليه': '[evershelf-kiosk.apk](https://github.com/dadaloop82/EverShelf/releases/download/kiosk-latest/evershelf-kiosk.apk) (الإصدار 1.7.24، Android 7.0 أو أحدث)' },
          { 'الخيار': 'Unraid', 'مصدر الحصول عليه': '[قالب Community Applications ودليله](https://github.com/dadaloop82/EverShelf/blob/main/docs/wiki/Unraid.md)' },
          { 'الخيار': 'الموقع الرسمي', 'مصدر الحصول عليه': '[evershelf.site](https://evershelf.site)' },
          { 'الخيار': 'بيان الخصوصية', 'مصدر الحصول عليه': '[evershelf.site، قسم Privacy](https://evershelf.site/#privacy): بيان قصير في الصفحة الرئيسية؛ ولم نجد وثيقة سياسة منفصلة' },
          { 'الخيار': 'الشيفرة المصدرية', 'مصدر الحصول عليه': '[github.com/dadaloop82/EverShelf](https://github.com/dadaloop82/EverShelf)' },
          { 'الخيار': 'عرض تجريبي', 'مصدر الحصول عليه': '[evershelf.site/demo](https://evershelf.site/demo)، ويشمل الذكاء الاصطناعي بحسب README' },
        ],
        note: 'الإصدار الذي رُوجع: v1.16.16، نُشر في 25 أكتوبر 2026 بحسب إصدار GitHub؛ وكان آخر تغيير في المستودع في 1 نوفمبر 2026. يتطلب التثبيت طرفية وDocker وملف .env يُعدَّل يدويًا، فهو إعداد موجّه للمطوّرين وليس تثبيتًا بنقرتين. ولا تضم قائمة إصدارات GitHub سوى ملف APK لكشك Android.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**لا تذكر المصادر حدًا أدنى من الذاكرة أو المعالج؛ والمتطلبات المذكورة هي Docker أو PHP 8.0+، وكاميرا للمسح، ومفتاح مزوّد أو خادم Llama للذكاء الاصطناعي.**',
        ],
        columns: ['البند', 'ما تقوله المصادر'],
        rows: [
          { 'البند': 'الخادم', 'ما تقوله المصادر': 'Docker مع Compose، أو خادم ويب بلغة PHP 8.0+ يشير إلى جذر المستودع مع مجلد data/ قابل للكتابة' },
          { 'البند': 'التخزين', 'ما تقوله المصادر': 'قاعدة بيانات SQLite في وحدة تخزين البيانات؛ والنسخة الاحتياطية المدمجة تُحفظ في الوحدة نفسها، فانسخها إلى مكان آخر' },
          { 'البند': 'الذاكرة والمعالج', 'ما تقوله المصادر': 'غير مذكور في المصادر التي قرأناها' },
          { 'البند': 'الكاميرا', 'ما تقوله المصادر': 'يستخدم مسح الباركود كاميرا الجهاز في المتصفح (QuaggaJS بحسب الويكي)' },
          { 'البند': 'الكشك', 'ما تقوله المصادر': 'Android 7.0 (API 24) أو أحدث؛ مع دعم اختياري لموازين المطبخ عبر Bluetooth' },
          { 'البند': 'الذكاء الاصطناعي', 'ما تقوله المصادر': 'مفتاح API من Gemini أو OpenAI، أو عنوان خادم Llama متوافق مع OpenAI مثل Ollama أو llama.cpp أو vLLM' },
          { 'البند': 'الشبكة', 'ما تقوله المصادر': 'مصمم لشبكة منزلية موثوقة؛ وللوصول من الإنترنت تتوقع سياسة الأمان أن تضيف طبقة مصادقة خاصة بك' },
        ],
        note: 'تأتي هذه البنود من README والويكي وSECURITY.md؛ ولم تقِس PromptQuorum استهلاك الموارد.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع هذه الخطوات README الخاص بالمشروع؛ ولم تنفّذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'احصل على الشيفرة وقالب الإعداد',
            whyItMatters: 'نفّذ git clone للمستودع، ثم انسخ .env.example إلى .env داخل مجلد المشروع.',
          },
          {
            title: 'اختر إعداد الذكاء الاصطناعي',
            whyItMatters: 'في .env اضبط AI_ENABLED=false للعمل من دون ذكاء اصطناعي، أو اضبط AI_PROVIDER على gemini أو openai أو llama وأضف المفتاح أو عنوان URL الأساسي المناسب.',
          },
          {
            title: 'شغّل الحاوية',
            whyItMatters: 'نفّذ docker compose up -d وافتح http://localhost:8080؛ وللتحديث لاحقًا يذكر README الأمر docker compose pull ثم docker compose up -d.',
          },
          {
            title: 'اقرن أجهزتك',
            whyItMatters: 'إذا ضُبط API_TOKEN تطلب واجهة الويب رمز اقتران لمرة واحدة، ويظهر في الإعدادات ثم النظام ثم الأمان على جهاز مقترن بالفعل أو في سجل الخادم.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات الرئيسية',
        content: [
          '**كل ما يلي مأخوذ من README أو ويكي المشروع؛ ولم تختبر PromptQuorum أيًّا منه.**',
        ],
        items: [
          '**المخزون.** مسح الباركود، وأماكن التخزين، وتواريخ الانتهاء، والعبوات المفتوحة، والمفضلة، واستيراد CSV وتصديره.',
          '**التسوق.** قائمة تسوق ذكية بكميات تحدّ من الهدر، ووصفات تضيف المكوّنات الناقصة بعد خصم ما لديك، ومزامنة اختيارية مع Bring!.',
          '**الطبخ.** وصفات خطوة بخطوة مع تعليمات منطوقة ومؤقتات ونصائح لتقليل الهدر.',
          '**التنبيهات والتقويم.** إشعارات الانتهاء عبر ntfy أو webhook بصيغة JSON أو Home Assistant، إضافة إلى موجز ICS لتقويم Google أو Apple.',
          '**التكاملات.** واجهة REST API وخادم MCP وتكامل Home Assistant في مستودع منفصل وHealth Bridge مع Fuel Mode وكشك Android مع بوابة لميزان Bluetooth.',
        ],
        note: 'جزء من ملاحظات الإصدار في README مكتوب بالإيطالية.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'ميزات الذكاء الاصطناعي وأين تعمل',
        content: [
          '**يعمل مزوّد ذكاء اصطناعي واحد فقط في كل مرة ويُختار في ملف .env: Gemini أو OpenAI أو "llama"، وهي نقطة اتصال متوافقة مع OpenAI تديرها بنفسك؛ ويمكن أيضًا إيقاف الذكاء الاصطناعي.**',
        ],
        items: [
          '**التعرف على المنتجات.** يحدد الذكاء الاصطناعي المنتج من صورة الكاميرا، ومع مفتاح Gemini يمكن سؤاله عن باركودات لا تجدها عمليات البحث الأخرى.',
          '**تواريخ الانتهاء.** يقرأ الذكاء الاصطناعي صورة الملصق ويملأ حقل تاريخ الانتهاء.',
          '**الوصفات والدردشة.** يكتب الذكاء الاصطناعي وصفات من محتويات المخزن ويوفّر دردشة؛ ويمكن أن تأتي الوصفات أيضًا من نسخة Mealie متصلة.',
          '**المزوّدون.** يوثّق الإعداد النموذجي Gemini وOpenAI مع عنوان URL أساسي ونموذج قابلين للتغيير، وخيار Llama لـ Ollama أو llama.cpp أو vLLM. ويصف الويكي ميزات الذكاء الاصطناعي بدلالة Gemini ولا يذكر أيًّا منها يعمل مع نموذج محلي.',
          '**ضبط التكلفة.** يحدد الملف النموذجي سقفًا يوميًا لاستدعاءات التصنيف إلى Gemini ويمكنه تقدير تكلفة الرموز.',
        ],
        note: 'هذه أقوال المشروع نفسه. لم تختبر PromptQuorum دقة التعرف ولا جودة الوصفات ولا أي نموذج محلي.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**يذكر الموقع أن المخزون والسجل يبقيان على جهازك أو خادمك المنزلي، وأن الذكاء الاصطناعي اختياري، وأنه لا توجد قياسات عن بُعد.** وتصف ملاحظات البنية قاعدة بيانات SQLite في مجلد البيانات، وتفترض سياسة الأمان شبكة منزلية موثوقة.',
          'الطلبات الخارجية المذكورة في المصادر: مزوّد الذكاء الاصطناعي الذي تختاره (Gemini أو OpenAI، إلا مع خيار Llama)، وOpen Food Facts للباركودات المجهولة، وOpen Prices لتقدير الأسعار، وخدمات اختيارية مثل Bring! وntfy والنسخ الاحتياطي إلى Google Drive ورابط تبرع عبر PayPal. وتُكتب تقارير الأخطاء في سجل محلي مع إخفاء البيانات الحساسة، وإرسالها إلى GitHub موافقة ثانية اختيارية. ويقول README إن مربع حوار يظهر مرة واحدة يعرض التبرع أو لا شيء، وإنه لا تُعرض إعلانات. ويستخدم العرض التجريبي العام ذكاءً اصطناعيًا سحابيًا.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه إقرارات من المشروع وليست نتائج تدقيق. لم تفحص PromptQuorum حركة الشبكة ولا الشيفرة المصدرية.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**من يستضيفون خدماتهم بأنفسهم على خادم Docker أو NAS** ويريدون أداة خاصة لتتبّع المخزن وتواريخ الانتهاء.',
          '**الأسر التي تطبخ مما في مخزنها** وتريد قائمة تسوق مشتركة وتنبيهات انتهاء ووصفات من المكوّنات المتوفرة.',
          '**مستخدمو Home Assistant** الذين يريدون بيانات الانتهاء والتسوق في منزلهم الذكي أو في وكيل متصل عبر MCP.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**جودة الذكاء الاصطناعي.** لم نختبر التعرف على المنتجات ولا قراءة تواريخ الانتهاء ولا جودة الوصفات، ولا تذكر المصادر أي ميزات ذكاء اصطناعي تعمل مع نموذج Llama محلي.',
          '**النضج.** بدأ المشروع في مارس 2026 ويذكر مطوّرًا واحدًا؛ ولم تقيّم PromptQuorum استقراره ولا أمانه.',
          '**وثائق الأمان.** ما زال SECURITY.md يذكر 1.7.x بوصفه الفرع المدعوم، وهو متأخر كثيرًا عن v1.16.16 الحالي.',
          '**ادعاءات البيانات.** عبارتا "لا قياسات عن بُعد" و"البيانات تبقى في البيت" من أقوال المشروع؛ ولم نفحص حركة الشبكة.',
          '**احتياجات العتاد.** لا يوجد حد أدنى موثّق للذاكرة أو المعالج، ولم نتحقق من السرعة على جهاز صغير مثل Raspberry Pi.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        content: [
          'في الدليل مراجعة أخرى ضمن طبقة المنزل الذكي نفسها: مساعد صوتي داخل Home Assistant، المنصة التي يوفّر لها EverShelf تكاملًا. ويقارن موقع المشروع نفسه بين EverShelf و[Grocy](https://grocy.info) و[Mealie](https://mealie.io) و[KitchenOwl](https://kitchenowl.org)؛ وأدوات إدارة المخزن والوصفات هذه ليست في الدليل، ولم تتحقق PromptQuorum من تلك المقارنة.',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          { 'التطبيق': '[Home Assistant Assist](/ar/power-local-llm/home-assistant-assist-review)', 'المنصات': 'Home Assistant، ويب، iOS، Android', 'السعر / الرخصة': 'مجاني / Apache-2.0', 'الفرق الأبرز': 'تحكم صوتي في المنزل الذكي وليس أداة لتتبّع المخزن' },
        ],
        note: 'تحقق من السعر والرخصة والمنصات الحالية لكل تطبيق في صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل EverShelf نموذج LLM محلي؟',
            a: 'لا. هو مدير مخزن طعام مكتوب بلغة PHP؛ ويُفوَّض الذكاء الاصطناعي فيه إلى Gemini أو OpenAI أو خادم Llama تديره بنفسك، ويقول الموقع إن ميزات المخزن تعمل من دون ذكاء اصطناعي.',
          },
          {
            q: 'كيف أنسخ بياناتي احتياطيًا؟',
            a: 'بحسب ملاحظات الإصدار تعمل نسخة احتياطية يومية على هيئة لقطة من قاعدة البيانات، لكنها تُحفظ داخل وحدة تخزين البيانات، فعليك نسخها بنفسك إلى خارج الوحدة.',
          },
          {
            q: 'هل يعمل مع Home Assistant أو وكلاء الذكاء الاصطناعي؟',
            a: 'يربط المستودع بتكامل مع Home Assistant (ha-evershelf) وبخادم MCP للوكلاء؛ ولم تختبر PromptQuorum أيًّا منهما.',
          },
          {
            q: 'هل يعمل على الهاتف أو اللوح؟',
            a: 'يفتح في المتصفح ويمكن إضافته إلى الشاشة الرئيسية، وتطبيق الكشك لنظام Android مخصص للألواح المثبتة على الحائط. ولا يربط الموقع ولا README بصفحة في App Store أو Google Play.',
          },
          {
            q: 'ما اللغات التي تدعمها الواجهة؟',
            a: 'يذكر README الإيطالية والإنجليزية والألمانية والفرنسية والإسبانية والصينية، ويفتح التطبيق بلغة الرابط مثل ?lang=de؛ ويضيف المساهمون لغة جديدة بترجمة translations/en.json.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'EverShelf وسيلة مجانية ومحدَّثة باستمرار لتتبّع المخزن وتواريخ الانتهاء والتسوق على خادم تتحكم فيه، مع ذكاء اصطناعي اختياري للتعرف على المنتجات وقراءة ملصقات الانتهاء وكتابة الوصفات. في المقابل يتطلب التثبيت Docker وملف .env يُعدَّل يدويًا، ويعمل الذكاء الاصطناعي عبر Gemini أو OpenAI ما لم تُعدّ خادم Llama خاصًا بك، والمشروع عمره أقل من عام، ولم نستطع التحقق هنا من أي من ادعاءات الذكاء الاصطناعي أو الخصوصية. يناسب الأسر التي تستضيف خدماتها أصلًا؛ ومن يريد تطبيقًا يُثبَّت بنقرتين أو مساعدًا بنموذج لغوي فعليه البحث في مكان آخر.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع EverShelf](https://evershelf.site) — الميزات والأسئلة الشائعة وبيان الخصوصية، جرى التحقق منها في 1 نوفمبر 2026.',
          '[EverShelf على GitHub](https://github.com/dadaloop82/EverShelf) — README والإصدارات والإعداد النموذجي وسياسة الأمان ونشاط الالتزامات، جرى التحقق منها في 1 نوفمبر 2026.',
          '[صفحات ويكي EverShelf في المستودع](https://github.com/dadaloop82/EverShelf/tree/main/docs/wiki) — الميزات والتثبيت ومزوّدو الذكاء الاصطناعي، جرى التحقق منها في 1 نوفمبر 2026.',
          '[README لتطبيق كشك Android الخاص بـ EverShelf](https://github.com/dadaloop82/EverShelf/blob/main/evershelf-kiosk/README.md) — الإصدار والحد الأدنى لمستوى Android والتنزيل، جرى التحقق منها في 1 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Home Assistant Assist](/ar/power-local-llm/home-assistant-assist-review) — المساعد الصوتي المدمج في Home Assistant، وهو منصة يوفّر لها EverShelf تكاملًا.',
          '[مراجعة Immich](/ar/power-local-llm/immich-review) — تطبيق منزلي آخر مستضاف ذاتيًا يعمل ذكاؤه الاصطناعي على خادمك الخاص.',
          '[دليل برامج LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-01',
    dateModified: '2026-11-01',
    next_refresh_due: '2027-05-01',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/evershelf-review-hero-zh.webp',
    title: 'EverShelf 评测：AI 可选的自托管食品储藏室管理应用',
    seoTitle: 'EverShelf 评测：AI 可选的自托管食品储藏室管理',
    intro:
      'EverShelf 是一款免费开源、可自行托管的食品储藏室管理应用，支持条码扫描、保质期跟踪和购物清单；AI 功能为可选项，可通过 Gemini、OpenAI 或你自己的 Llama 服务器运行。它不是聊天或 LLM 应用。本评测基于 2026 年 11 月 1 日查看的官网、GitHub 仓库、Wiki 和配置文件。',
    metaDescription:
      'EverShelf 评测：免费、采用 MIT 许可证的自托管储藏室管理应用，支持条码扫描和保质期提醒，AI 功能可选，可用 Gemini、OpenAI 或 Llama 服务器。',
    twitterDescription:
      'EverShelf 评测：采用 MIT 许可证的自托管储藏室与保质期管理应用，AI 为可选项。涵盖 Docker 部署、运行要求、对外请求以及我们未能核实的内容。',
    audience:
      '想自己运行储藏室管理应用的个人和家庭，需要了解部署成本、AI 在哪里运行，以及哪些内容来源并未证实。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'EverShelf 评测',
    targetKeywords: [
      'evershelf 评测',
      '自托管 储藏室管理',
      '库存管理 应用 docker',
      '自托管 保质期提醒',
      'grocy 替代',
      '储藏室管理 home assistant',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**EverShelf（截至 2026 年 11 月 1 日为 v1.16.16）是一款采用 MIT 许可证、用 Docker 自行托管的免费储藏室管理应用，AI 功能可以关闭，也可以指向 Gemini、OpenAI 或你自己的 Llama 服务器。** 按其官网所述，库存和历史记录留在你的服务器上，而 AI 请求会离开服务器，除非你选择 Llama 选项。它是家用工具，不是聊天助手。',
    quickAnswerTop: {
      zh: {
        question: 'EverShelf 会把储藏室数据和 AI 都留在你自己的服务器上吗？',
        answer:
          '据项目所述，库存数据会：它保存在你服务器上的 SQLite 数据库中。AI 则是另一回事：选择 Gemini 或 OpenAI 时，请求会发往这些公司，只有 Llama 选项指向你自己运行的服务器。PromptQuorum 未检查网络流量。',
        bullets: [
          '免费开源（MIT）；官网称永久免费，没有列出高级付费版。',
          '服务器通过 Docker Compose 部署；应用可在任何浏览器中打开，也可添加到手机主屏幕。',
          '可选的 Android 展台应用能把壁挂平板变成厨房显示屏。',
          '仓库中链接了 REST API、面向 AI 智能体的 MCP 服务器和 Home Assistant 集成。',
          '不是通用 LLM 应用：据 README，AI 负责识别商品、读取保质期和推荐食谱。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'EverShelf 是什么？', anchor: 'what-is-evershelf' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '运行要求', anchor: 'requirements' },
      { label: '上手步骤', anchor: 'getting-started' },
      { label: '主要功能', anchor: 'key-features' },
      { label: 'AI 功能及运行位置', anchor: 'ai-features' },
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
          {
            type: 'one-sentence',
            text: 'EverShelf 是一款开源、可自托管的储藏室管理应用，用来管理库存、保质期和购物清单，并提供可选的 AI 助手来识别商品和编写食谱。',
          },
          {
            type: 'plain-terms',
            text: '你在家用服务器上运行 EverShelf，用手机摄像头扫描商品，它会告诉你哪些快用完或快过期，以及该买什么。',
          },
        ],
        items: [
          '维护情况：v1.16.16 于 2026 年 10 月 25 日发布，仓库在 2026 年 11 月 1 日有更新，因此不适用停止维护警告；项目始于 2026 年 3 月。',
          '运营方：README 署名一位开发者 Stimpfl Daniel；代码在 GitHub 上以 MIT 许可证发布。',
          '部署：按 README 使用 Docker Compose，并手动编辑 .env 文件；AI 需要服务商密钥或 Llama 服务器地址。',
          '费用：免费；官网提到可选捐赠，没有高级付费版。',
          '范围：储藏室和购物管理，因此不是语言模型应用。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 2026 年 11 月 1 日查看的项目官网、README、Wiki、示例配置和 GitHub 动态。PromptQuorum 未安装 EverShelf，因此未评估扫描准确度、AI 质量和速度。',
          },
        ],
      },
      overview: {
        id: 'what-is-evershelf',
        title: 'EverShelf 是什么？',
        content: [
          '**EverShelf 是一款自托管的 Web 应用，用来记录储藏室里有什么、何时过期以及接下来该买什么。** README 称其为“self-hosted pantry manager — inventory, barcode scan, AI recipes, less waste”；它用 PHP 编写，搭配 SQLite 数据库和单页前端，代码以 MIT 许可证开源。',
          'README 署名一位开发者 Stimpfl Daniel（GitHub：dadaloop82），并希望有更多贡献者加入。Joshumi Technologies 有一款无关的 iOS 应用使用相同名称；README 明确表示两者没有关联。',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: '获取方式',
        content: [
          '**EverShelf 是需要你自己安装的服务器；文档给出的方式是 Docker Compose，手机和平板通过浏览器或 Android 展台应用访问。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          { '选项': '服务器（Docker Compose）', '获取方式': '[README 快速开始](https://github.com/dadaloop82/EverShelf#-quick-start)：克隆仓库，把 .env.example 复制为 .env，运行 docker compose up -d' },
          { '选项': '浏览器与手机', '获取方式': '在浏览器中打开服务器地址（随附的 compose 文件使用 8080 端口）；在手机上可添加到主屏幕' },
          { '选项': 'Android 展台平板', '获取方式': '[evershelf-kiosk.apk](https://github.com/dadaloop82/EverShelf/releases/download/kiosk-latest/evershelf-kiosk.apk)（版本 1.7.24，Android 7.0 或更高）' },
          { '选项': 'Unraid', '获取方式': '[Community Applications 模板与指南](https://github.com/dadaloop82/EverShelf/blob/main/docs/wiki/Unraid.md)' },
          { '选项': '官方网站', '获取方式': '[evershelf.site](https://evershelf.site)' },
          { '选项': '隐私说明', '获取方式': '[evershelf.site 的 Privacy 部分](https://evershelf.site/#privacy)：首页上的简短说明；未发现独立的政策文件' },
          { '选项': '源代码', '获取方式': '[github.com/dadaloop82/EverShelf](https://github.com/dadaloop82/EverShelf)' },
          { '选项': '演示', '获取方式': '[evershelf.site/demo](https://evershelf.site/demo)，README 称其包含 AI' },
        ],
        note: '评测版本：v1.16.16，据 GitHub 发布记录于 2026 年 10 月 25 日发布；仓库最近一次更改在 2026 年 11 月 1 日。安装需要终端、Docker 和手动编辑的 .env 文件，属于面向开发者的部署方式，而不是双击安装。GitHub 发布列表中只有 Android 展台 APK。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: [
          '**来源未给出 RAM 或 CPU 最低要求；已说明的条件是 Docker 或 PHP 8.0+、用于扫描的摄像头，以及用于 AI 的服务商密钥或 Llama 服务器。**',
        ],
        columns: ['项目', '来源说明'],
        rows: [
          { '项目': '服务器', '来源说明': 'Docker 加 Compose，或指向仓库根目录、data/ 文件夹可写的 PHP 8.0+ Web 服务器' },
          { '项目': '存储', '来源说明': '数据卷中的 SQLite 数据库；内置备份保存在同一个数据卷里，请复制到别处' },
          { '项目': '内存与 CPU', '来源说明': '已阅读的来源中未说明' },
          { '项目': '摄像头', '来源说明': '条码扫描在浏览器中使用设备摄像头（据 Wiki 为 QuaggaJS）' },
          { '项目': '展台', '来源说明': 'Android 7.0（API 24）或更高；可选支持蓝牙厨房秤' },
          { '项目': 'AI', '来源说明': 'Gemini 或 OpenAI 的 API 密钥，或 Ollama、llama.cpp、vLLM 等兼容 OpenAI 的 Llama 服务器地址' },
          { '项目': '网络', '来源说明': '为可信的家庭网络设计；若要从互联网访问，安全政策要求你自行添加认证层' },
        ],
        note: '这些条目来自 README、Wiki 和 SECURITY.md；PromptQuorum 未测量资源占用。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤依据项目 README，PromptQuorum 未实际运行。**',
        ],
        numberedItems: [
          {
            title: '获取代码和配置模板',
            whyItMatters: '用 git clone 拉取仓库，然后在项目文件夹中把 .env.example 复制为 .env。',
          },
          {
            title: '选择 AI 设置',
            whyItMatters: '在 .env 中设置 AI_ENABLED=false 即可不使用 AI；若使用，请把 AI_PROVIDER 设为 gemini、openai 或 llama，并填入对应的密钥或基础 URL。',
          },
          {
            title: '启动容器',
            whyItMatters: '运行 docker compose up -d 并打开 http://localhost:8080；以后更新时，README 给出的做法是先 docker compose pull，再 docker compose up -d。',
          },
          {
            title: '配对你的设备',
            whyItMatters: '若设置了 API_TOKEN，网页界面会要求输入一次性配对码，该码显示在已配对设备的“设置、系统、安全”中，或在服务器日志里。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '主要功能',
        content: [
          '**以下每一项都来自项目的 README 或 Wiki；PromptQuorum 均未测试。**',
        ],
        items: [
          '**库存。** 条码扫描、存放位置、保质期、已开封商品、收藏，以及 CSV 导入和导出。',
          '**购物。** 带防浪费数量的智能购物清单、扣除已有库存后把缺少的食材加入清单的食谱，以及可选的 Bring! 同步。',
          '**烹饪。** 逐步食谱，带语音朗读、计时器和零浪费小贴士。',
          '**提醒与日历。** 通过 ntfy、JSON Webhook 或 Home Assistant 发送过期通知，另有适用于 Google 或 Apple 日历的 ICS 订阅源。',
          '**集成。** REST API、MCP 服务器、位于独立仓库的 Home Assistant 集成、带 Fuel Mode 的 Health Bridge，以及带蓝牙秤网关的 Android 展台。',
        ],
        note: 'README 中的部分发布说明是用意大利语写的。',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI 功能及运行位置',
        content: [
          '**同一时间只启用一个 AI 服务商，在 .env 中选择：Gemini、OpenAI，或“llama”，即你自己运行的兼容 OpenAI 的端点；AI 也可以关闭。**',
        ],
        items: [
          '**商品识别。** AI 根据摄像头照片识别商品；配有 Gemini 密钥时，还可以查询其他查询方式找不到的条码。',
          '**保质期。** AI 读取标签照片并填写保质期字段。',
          '**食谱与聊天。** AI 根据储藏室里现有的东西编写食谱，并提供聊天；食谱也可以来自已连接的 Mealie 实例。',
          '**服务商。** 示例配置记录了 Gemini、可更改基础 URL 和模型的 OpenAI，以及面向 Ollama、llama.cpp 或 vLLM 的 Llama 选项。Wiki 是按 Gemini 来描述 AI 功能的，没有说明哪些功能能用本地模型。',
          '**成本控制。** 示例文件为 Gemini 分类调用设置了每日上限，并可估算 token 成本。',
        ],
        note: '这些是项目自己的说法。PromptQuorum 未测试识别准确度、食谱质量或任何本地模型。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**官网称库存和历史记录留在你的设备或家用服务器上，AI 是可选的，并且没有遥测。** 架构说明提到 data 文件夹中的 SQLite 数据库，安全政策则以可信的家庭网络为前提。',
          '来源中提到的对外请求有：你选择的 AI 服务商（除非使用 Llama 选项，否则是 Gemini 或 OpenAI）、用于未知条码的 Open Food Facts、用于价格估算的 Open Prices，以及 Bring!、ntfy、Google Drive 备份和 PayPal 捐赠链接等可选服务。错误报告写入经过脱敏的本地日志，发送到 GitHub 需要再次主动选择。README 称，一次性对话框只提供捐赠或不捐赠的选择，不展示广告。公开演示使用云端 AI。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是项目自己的声明，不是审计结果。PromptQuorum 未检查网络流量或源代码。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**拥有 Docker 服务器或 NAS 的自托管用户**，想要私有的储藏室与保质期管理。',
          '**用储藏室里现有食材做饭的家庭**，想要共享购物清单、过期提醒和用现有食材生成的食谱。',
          '**Home Assistant 用户**，想把保质期和购物数据放进智能家居或接入 MCP 的智能体。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**AI 质量。** 商品识别、保质期读取和食谱质量均未测试，来源也没有说明哪些 AI 功能能配合本地 Llama 模型使用。',
          '**成熟度。** 项目始于 2026 年 3 月，署名开发者为一人；PromptQuorum 未评估其稳定性和安全性。',
          '**安全文档。** SECURITY.md 仍把 1.7.x 列为受支持版本，远落后于当前的 v1.16.16。',
          '**数据声明。** “无遥测”和“数据留在家中”是项目的说法；我们未检查流量。',
          '**硬件需求。** 没有文档化的 RAM 或 CPU 最低要求，在树莓派等小型设备上的速度也未检查。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        content: [
          '目录中在同一智能家居层还有一篇评测：Home Assistant 内的语音助手，EverShelf 为这个平台提供了集成。项目官网把 EverShelf 与 [Grocy](https://grocy.info)、[Mealie](https://mealie.io) 和 [KitchenOwl](https://kitchenowl.org) 做了比较；这些储藏室和食谱管理工具不在目录中，PromptQuorum 也未核实该比较。',
        ],
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[Home Assistant Assist](/zh/power-local-llm/home-assistant-assist-review)', '平台': 'Home Assistant、Web、iOS、Android', '价格 / 许可证': '免费 / Apache-2.0', '主要区别': '用于智能家居的语音控制，不是储藏室管理工具' },
        ],
        note: '请到各应用自己的页面确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'EverShelf 是本地 LLM 吗？',
            a: '不是。它是用 PHP 编写的储藏室管理应用，AI 交给 Gemini、OpenAI 或你自己运行的 Llama 服务器；官网称储藏室功能不用 AI 也能工作。',
          },
          {
            q: '如何备份我的数据？',
            a: '据发布说明，每天会以数据库快照的形式自动备份，但备份存放在数据卷内部，所以需要你自己把它复制到数据卷之外。',
          },
          {
            q: '能和 Home Assistant 或 AI 智能体配合使用吗？',
            a: '仓库链接了 Home Assistant 集成（ha-evershelf）和面向智能体的 MCP 服务器；PromptQuorum 两者都没有测试。',
          },
          {
            q: '能在手机或平板上使用吗？',
            a: '它可在浏览器中打开并添加到主屏幕，Android 展台应用面向壁挂平板。官网和 README 都没有链接 App Store 或 Google Play 页面。',
          },
          {
            q: '界面支持哪些语言？',
            a: 'README 列出意大利语、英语、德语、法语、西班牙语和中文，应用会按 ?lang=de 这类链接的语言打开；贡献者翻译 translations/en.json 即可新增语言。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'EverShelf 是一种免费且更新活跃的方式，可以在你自己掌控的服务器上管理储藏室、保质期和购物，并提供可选的 AI 来识别商品、读取保质期标签和编写食谱。不足之处是：部署需要 Docker 和手动编辑的 .env 文件，除非自行配置 Llama 服务器，AI 会走 Gemini 或 OpenAI，项目还不到一年，而 AI 和隐私方面的说法在这里都无法核实。它适合本来就在自托管服务的家庭；想要双击安装的应用或语言模型助手的人，应该另寻他选。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[EverShelf 官网](https://evershelf.site) — 功能、FAQ 和隐私说明，2026 年 11 月 1 日查看。',
          '[GitHub 上的 EverShelf](https://github.com/dadaloop82/EverShelf) — README、发布记录、示例配置、安全政策和提交动态，2026 年 11 月 1 日查看。',
          '[仓库中的 EverShelf Wiki 页面](https://github.com/dadaloop82/EverShelf/tree/main/docs/wiki) — 功能、安装和 AI 服务商，2026 年 11 月 1 日查看。',
          '[EverShelf Android 展台应用 README](https://github.com/dadaloop82/EverShelf/blob/main/evershelf-kiosk/README.md) — 版本、最低 Android 级别和下载，2026 年 11 月 1 日查看。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Home Assistant Assist 评测](/zh/power-local-llm/home-assistant-assist-review) — 内置于 Home Assistant 的语音助手，EverShelf 为其提供集成。',
          '[Immich 评测](/zh/power-local-llm/immich-review) — 另一款 AI 在你自己服务器上运行的自托管家用应用。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具完整目录。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-01',
    dateModified: '2026-11-01',
    next_refresh_due: '2027-05-01',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/evershelf-review-hero-ko.webp',
    title: 'EverShelf 리뷰: AI를 선택적으로 쓰는 셀프 호스팅 식료품 저장실 관리 앱',
    seoTitle: 'EverShelf 리뷰: AI 선택형 셀프 호스팅 저장실 관리',
    intro:
      'EverShelf는 바코드 스캔, 유통기한 추적, 장보기 목록을 갖춘 무료 오픈소스 셀프 호스팅 식료품 저장실 관리 앱입니다. AI 기능은 선택 사항이며 Gemini, OpenAI 또는 직접 운영하는 Llama 서버로 동작합니다. 채팅이나 LLM 앱은 아닙니다. 이 리뷰는 2026년 11월 1일에 확인한 공식 사이트, GitHub 저장소, 위키, 설정 파일을 바탕으로 합니다.',
    metaDescription:
      'EverShelf 리뷰: 바코드 스캔과 유통기한 알림을 갖춘 무료 MIT 라이선스 셀프 호스팅 저장실 관리 앱. AI는 선택 사항이며 Gemini, OpenAI, Llama 서버를 지원합니다.',
    twitterDescription:
      'EverShelf 리뷰: MIT 라이선스의 셀프 호스팅 저장실·유통기한 관리 앱으로 AI는 선택 사항입니다. Docker 설치, 요구 사항, 외부 요청, 확인하지 못한 사항을 다룹니다.',
    audience:
      '직접 저장실 관리 앱을 운영하려는 개인과 가정으로, 설치에 드는 수고, AI가 어디서 실행되는지, 출처가 확인해 주지 않는 내용을 알아야 하는 분을 위한 글입니다.',
    readTime: '8분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'EverShelf 리뷰',
    targetKeywords: [
      'evershelf 리뷰',
      '셀프 호스팅 저장실 관리',
      '재고 관리 앱 docker',
      '셀프 호스팅 유통기한 관리',
      'grocy 대안',
      '저장실 관리 home assistant',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**EverShelf(2026년 11월 1일 기준 v1.16.16)는 Docker로 운영하는 MIT 라이선스의 무료 저장실 관리 앱으로, AI 기능을 끄거나 Gemini, OpenAI 또는 직접 운영하는 Llama 서버로 연결할 수 있습니다.** 공식 사이트에 따르면 재고와 기록은 내 서버에 남지만, Llama 옵션을 고르지 않으면 AI 요청은 서버 밖으로 나갑니다. 가정용 도구이며 채팅 어시스턴트가 아닙니다.',
    quickAnswerTop: {
      ko: {
        question: 'EverShelf는 저장실 데이터와 AI를 내 서버에 두나요?',
        answer:
          '재고 데이터는 프로젝트 설명상 그렇습니다. 내 서버의 SQLite 데이터베이스에 저장됩니다. AI는 별개로, Gemini나 OpenAI를 고르면 요청이 해당 회사로 가고, 직접 운영하는 서버를 가리키는 것은 Llama 옵션뿐입니다. PromptQuorum은 네트워크 트래픽을 검사하지 않았습니다.',
        bullets: [
          '무료 오픈소스(MIT)이며, 공식 사이트는 영구 무료라고 밝히고 프리미엄 요금제는 따로 없습니다.',
          '서버는 Docker Compose로 구축하며, 앱은 모든 브라우저에서 열리고 휴대폰 홈 화면에 추가할 수 있습니다.',
          '선택 사항인 Android 키오스크 앱으로 벽걸이 태블릿을 주방 디스플레이로 쓸 수 있습니다.',
          'REST API, AI 에이전트용 MCP 서버, Home Assistant 연동이 저장소에 링크되어 있습니다.',
          '범용 LLM 앱이 아닙니다. README에 따르면 AI는 상품 인식, 유통기한 읽기, 레시피 제안을 맡습니다.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'EverShelf란?', anchor: 'what-is-evershelf' },
      { label: '입수 방법', anchor: 'get-it' },
      { label: '요구 사항', anchor: 'requirements' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '주요 기능', anchor: 'key-features' },
      { label: 'AI 기능과 실행 위치', anchor: 'ai-features' },
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
          {
            type: 'one-sentence',
            text: 'EverShelf는 재고, 유통기한, 장보기 목록을 관리하는 오픈소스 셀프 호스팅 저장실 관리 앱으로, 상품 인식과 레시피 작성을 돕는 AI를 선택적으로 쓸 수 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '집 서버에서 EverShelf를 실행하고 휴대폰 카메라로 상품을 스캔하면, 떨어져 가거나 곧 만료되는 것과 사야 할 것을 알려 줍니다.',
          },
        ],
        items: [
          '유지보수: v1.16.16이 2026년 10월 25일에 출시되었고 저장소가 2026년 11월 1일에 변경되어 방치 프로젝트 경고는 해당하지 않습니다. 프로젝트는 2026년 3월에 시작되었습니다.',
          '운영자: README에는 개발자 한 명, Stimpfl Daniel이 표기되어 있으며 코드는 MIT 라이선스로 GitHub에 공개되어 있습니다.',
          '설치: README의 Docker Compose와 직접 편집하는 .env 파일이 필요하며, AI에는 제공업체 키나 Llama 서버 주소가 필요합니다.',
          '비용: 무료입니다. 공식 사이트에는 선택적 후원이 안내되어 있고 프리미엄 요금제는 없습니다.',
          '범위: 저장실과 장보기 관리 앱이며 언어 모델 앱은 아닙니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 11월 1일에 확인한 프로젝트의 공식 사이트, README, 위키, 예시 설정, GitHub 활동을 바탕으로 합니다. PromptQuorum은 EverShelf를 설치하지 않았으므로 스캔 정확도, AI 품질, 속도는 평가하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-evershelf',
        title: 'EverShelf란?',
        content: [
          '**EverShelf는 저장실에 무엇이 있는지, 언제 만료되는지, 다음에 무엇을 사야 하는지 기록하는 셀프 호스팅 웹 애플리케이션입니다.** README는 이를 “self-hosted pantry manager — inventory, barcode scan, AI recipes, less waste”라고 소개합니다. PHP와 SQLite 데이터베이스, 싱글 페이지 프런트엔드로 만들어졌고 코드는 MIT 라이선스의 오픈소스입니다.',
          'README에는 개발자 한 명, Stimpfl Daniel(GitHub: dadaloop82)이 표기되어 있으며 더 많은 기여자를 찾고 있습니다. Joshumi Technologies의 무관한 iOS 앱이 같은 이름을 쓰고 있는데, README는 아무 관련이 없다고 밝힙니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: '입수 방법',
        content: [
          '**EverShelf는 직접 설치하는 서버입니다. 문서화된 방법은 Docker Compose이며, 휴대폰과 태블릿은 브라우저나 Android 키오스크 앱으로 접속합니다.**',
        ],
        columns: ['옵션', '입수 방법'],
        rows: [
          { '옵션': '서버(Docker Compose)', '입수 방법': '[README 빠른 시작](https://github.com/dadaloop82/EverShelf#-quick-start): 저장소를 클론하고 .env.example을 .env로 복사한 뒤 docker compose up -d 실행' },
          { '옵션': '브라우저와 휴대폰', '입수 방법': '브라우저에서 서버 주소를 엽니다(제공된 compose 파일에서는 포트 8080). 휴대폰에서는 홈 화면에 추가' },
          { '옵션': 'Android 키오스크 태블릿', '입수 방법': '[evershelf-kiosk.apk](https://github.com/dadaloop82/EverShelf/releases/download/kiosk-latest/evershelf-kiosk.apk)(버전 1.7.24, Android 7.0 이상)' },
          { '옵션': 'Unraid', '입수 방법': '[Community Applications 템플릿과 안내서](https://github.com/dadaloop82/EverShelf/blob/main/docs/wiki/Unraid.md)' },
          { '옵션': '공식 웹사이트', '입수 방법': '[evershelf.site](https://evershelf.site)' },
          { '옵션': '개인정보 안내', '입수 방법': '[evershelf.site의 Privacy 섹션](https://evershelf.site/#privacy): 홈페이지의 짧은 설명이며 별도의 정책 문서는 찾지 못했습니다' },
          { '옵션': '소스 코드', '입수 방법': '[github.com/dadaloop82/EverShelf](https://github.com/dadaloop82/EverShelf)' },
          { '옵션': '데모', '입수 방법': '[evershelf.site/demo](https://evershelf.site/demo), README에 따르면 AI가 포함되어 있음' },
        ],
        note: '확인한 버전: v1.16.16, GitHub 릴리스 기준으로 2026년 10월 25일에 공개되었고 저장소의 마지막 변경은 2026년 11월 1일입니다. 설치에는 터미널, Docker, 직접 편집하는 .env 파일이 필요하므로 더블클릭 설치가 아니라 개발자용 구성입니다. GitHub 릴리스 목록에는 Android 키오스크 APK만 있습니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: [
          '**출처에는 RAM이나 CPU 최소 사양이 없습니다. 명시된 조건은 Docker 또는 PHP 8.0 이상, 스캔용 카메라, AI용 제공업체 키 또는 Llama 서버입니다.**',
        ],
        columns: ['항목', '출처의 설명'],
        rows: [
          { '항목': '서버', '출처의 설명': 'Docker와 Compose, 또는 쓰기 가능한 data/ 폴더가 있는 저장소 루트를 가리키는 PHP 8.0 이상 웹 서버' },
          { '항목': '저장소', '출처의 설명': '데이터 볼륨 안의 SQLite 데이터베이스. 내장 백업도 같은 볼륨에 저장되므로 다른 곳으로 복사해야 합니다' },
          { '항목': '메모리와 CPU', '출처의 설명': '읽은 출처에는 명시되어 있지 않음' },
          { '항목': '카메라', '출처의 설명': '바코드 스캔은 브라우저에서 기기 카메라를 사용(위키에 따르면 QuaggaJS)' },
          { '항목': '키오스크', '출처의 설명': 'Android 7.0(API 24) 이상. 블루투스 주방 저울 지원은 선택 사항' },
          { '항목': 'AI', '출처의 설명': 'Gemini 또는 OpenAI API 키, 또는 Ollama, llama.cpp, vLLM 같은 OpenAI 호환 Llama 서버 주소' },
          { '항목': '네트워크', '출처의 설명': '신뢰할 수 있는 가정 내 네트워크를 전제로 설계됨. 인터넷에서 접속하려면 보안 정책상 자체 인증 계층이 필요합니다' },
        ],
        note: '이 항목들은 README, 위키, SECURITY.md에서 가져온 것이며 PromptQuorum은 리소스 사용량을 측정하지 않았습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**다음 단계는 프로젝트 README를 따른 것이며 PromptQuorum이 직접 실행하지는 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '코드와 설정 템플릿 가져오기',
            whyItMatters: '저장소를 git clone한 다음 프로젝트 폴더에서 .env.example을 .env로 복사합니다.',
          },
          {
            title: 'AI 설정 고르기',
            whyItMatters: '.env에서 AI_ENABLED=false로 두면 AI 없이 쓸 수 있습니다. AI를 쓰려면 AI_PROVIDER를 gemini, openai, llama 중 하나로 설정하고 해당 키나 기본 URL을 추가합니다.',
          },
          {
            title: '컨테이너 시작',
            whyItMatters: 'docker compose up -d를 실행하고 http://localhost:8080을 엽니다. 나중에 업데이트할 때는 README에 docker compose pull 다음 docker compose up -d를 실행하라고 되어 있습니다.',
          },
          {
            title: '기기 페어링',
            whyItMatters: 'API_TOKEN을 설정하면 웹 화면에서 일회용 페어링 코드를 요구합니다. 이 코드는 이미 페어링된 기기의 설정, 시스템, 보안 메뉴 또는 서버 로그에 표시됩니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '주요 기능',
        content: [
          '**아래 항목은 모두 프로젝트의 README나 위키에서 가져온 것이며 PromptQuorum이 테스트한 것은 없습니다.**',
        ],
        items: [
          '**재고.** 바코드 스캔, 보관 위치, 유통기한, 개봉한 제품, 즐겨찾기, CSV 가져오기와 내보내기.',
          '**장보기.** 음식물 낭비를 줄이는 수량을 제안하는 스마트 장보기 목록, 가진 재료를 뺀 뒤 부족한 재료를 목록에 추가하는 레시피, 선택 사항인 Bring! 동기화.',
          '**요리.** 음성 안내, 타이머, 낭비 제로 팁이 포함된 단계별 레시피.',
          '**알림과 캘린더.** ntfy, JSON 웹훅, Home Assistant를 통한 유통기한 알림과 Google·Apple 캘린더용 ICS 피드.',
          '**연동.** REST API, MCP 서버, 별도 저장소의 Home Assistant 연동, Fuel Mode가 있는 Health Bridge, 블루투스 저울 게이트웨이가 있는 Android 키오스크.',
        ],
        note: 'README 릴리스 노트의 일부는 이탈리아어로 작성되어 있습니다.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI 기능과 실행 위치',
        content: [
          '**AI 제공업체는 한 번에 하나만 활성화되며 .env에서 고릅니다. Gemini, OpenAI, 또는 직접 운영하는 OpenAI 호환 엔드포인트인 “llama”이고, AI를 끌 수도 있습니다.**',
        ],
        items: [
          '**상품 인식.** AI는 카메라 사진으로 상품을 식별하며, Gemini 키가 있으면 다른 조회로 찾지 못한 바코드도 물어볼 수 있습니다.',
          '**유통기한.** AI가 라벨 사진을 읽어 유통기한 칸을 채웁니다.',
          '**레시피와 채팅.** AI는 저장실에 있는 재료로 레시피를 쓰고 채팅을 제공합니다. 레시피는 연결된 Mealie 인스턴스에서 가져올 수도 있습니다.',
          '**제공업체.** 예시 설정에는 Gemini, 기본 URL과 모델을 바꿀 수 있는 OpenAI, Ollama·llama.cpp·vLLM용 Llama 옵션이 문서화되어 있습니다. 위키는 AI 기능을 Gemini 기준으로 설명하며 어떤 기능이 로컬 모델에서 동작하는지는 밝히지 않습니다.',
          '**비용 관리.** 예시 파일에는 Gemini 분류 호출의 일일 상한이 있고 토큰 비용을 추정할 수 있습니다.',
        ],
        note: '이는 프로젝트 자체의 설명입니다. PromptQuorum은 인식 정확도, 레시피 품질, 로컬 모델을 테스트하지 않았습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**공식 사이트는 재고와 기록이 내 기기나 가정용 서버에 남고, AI는 선택 사항이며, 텔레메트리가 없다고 설명합니다.** 아키텍처 문서에는 data 폴더의 SQLite 데이터베이스가 설명되어 있고, 보안 정책은 신뢰할 수 있는 가정 내 네트워크를 전제로 합니다.',
          '출처에 언급된 외부 요청은 선택한 AI 제공업체(Llama 옵션이 아니라면 Gemini 또는 OpenAI), 알 수 없는 바코드를 위한 Open Food Facts, 가격 추정을 위한 Open Prices, 그리고 Bring!, ntfy, Google Drive 백업, PayPal 후원 링크 같은 선택 서비스입니다. 오류 보고서는 민감 정보를 가린 로컬 로그에 기록되며 GitHub로 보내는 것은 두 번째로 직접 켜야 하는 옵션입니다. README에 따르면 한 번만 표시되는 대화상자는 후원 또는 아무것도 하지 않기를 고르게 하며 광고는 표시되지 않습니다. 공개 데모는 클라우드 AI를 사용합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 프로젝트의 선언일 뿐 감사 결과가 아닙니다. PromptQuorum은 네트워크 트래픽이나 소스 코드를 검사하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**Docker 서버나 NAS를 가진 셀프 호스팅 사용자**로, 개인 저장실·유통기한 관리 도구가 필요한 분.',
          '**저장실에 있는 재료로 요리하는 가정**으로, 공유 장보기 목록, 유통기한 알림, 있는 재료로 만든 레시피를 원하는 분.',
          '**Home Assistant 사용자**로, 유통기한과 장보기 데이터를 스마트홈이나 MCP로 연결한 에이전트에서 쓰고 싶은 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**AI 품질.** 상품 인식, 유통기한 읽기, 레시피 품질은 테스트하지 않았고, 어떤 AI 기능이 로컬 Llama 모델에서 동작하는지 출처에 나와 있지 않습니다.',
          '**성숙도.** 프로젝트는 2026년 3월에 시작되었고 표기된 개발자는 한 명입니다. 안정성과 보안은 PromptQuorum이 평가하지 않았습니다.',
          '**보안 문서.** SECURITY.md는 여전히 1.7.x를 지원 버전으로 적고 있어 현재 v1.16.16과 큰 차이가 있습니다.',
          '**데이터 관련 주장.** “텔레메트리 없음”과 “데이터는 집에 남음”은 프로젝트의 설명이며 트래픽은 검사하지 않았습니다.',
          '**하드웨어 요구.** 문서화된 RAM·CPU 최소 사양이 없고 Raspberry Pi 같은 소형 기기에서의 속도도 확인하지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        content: [
          '디렉터리에는 같은 스마트홈 계층의 다른 리뷰가 하나 있습니다. EverShelf가 연동을 제공하는 Home Assistant 안의 음성 어시스턴트입니다. 프로젝트 공식 사이트는 EverShelf를 [Grocy](https://grocy.info), [Mealie](https://mealie.io), [KitchenOwl](https://kitchenowl.org)과 비교하는데, 이 저장실·레시피 관리 도구들은 디렉터리에 없고 PromptQuorum은 그 비교를 검증하지 않았습니다.',
        ],
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이점'],
        rows: [
          { '앱': '[Home Assistant Assist](/ko/power-local-llm/home-assistant-assist-review)', '플랫폼': 'Home Assistant, 웹, iOS, Android', '가격 / 라이선스': '무료 / Apache-2.0', '핵심 차이점': '스마트홈 음성 제어용이며 저장실 관리 도구가 아님' },
        ],
        note: '각 앱의 최신 가격, 라이선스, 플랫폼은 해당 앱의 공식 페이지에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'EverShelf는 로컬 LLM인가요?',
            a: '아니요. PHP로 작성된 저장실 관리 앱이며, AI는 Gemini, OpenAI 또는 직접 운영하는 Llama 서버에 맡깁니다. 공식 사이트에 따르면 저장실 기능은 AI 없이도 동작합니다.',
          },
          {
            q: '데이터는 어떻게 백업하나요?',
            a: '릴리스 노트에 따르면 매일 데이터베이스 스냅샷으로 백업이 실행되지만 데이터 볼륨 안에 저장되므로, 볼륨 밖으로 직접 복사해야 합니다.',
          },
          {
            q: 'Home Assistant나 AI 에이전트와 함께 쓸 수 있나요?',
            a: '저장소에는 Home Assistant 연동(ha-evershelf)과 에이전트용 MCP 서버 링크가 있습니다. PromptQuorum은 둘 다 테스트하지 않았습니다.',
          },
          {
            q: '휴대폰이나 태블릿에서 쓸 수 있나요?',
            a: '브라우저에서 열어 홈 화면에 추가할 수 있고, Android 키오스크 앱은 벽걸이 태블릿용입니다. 공식 사이트와 README에는 App Store나 Google Play 페이지 링크가 없습니다.',
          },
          {
            q: '인터페이스는 어떤 언어를 지원하나요?',
            a: 'README에는 이탈리아어, 영어, 독일어, 프랑스어, 스페인어, 중국어가 나와 있고, ?lang=de 같은 링크의 언어로 앱이 열립니다. 기여자가 translations/en.json을 번역하면 언어를 추가할 수 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'EverShelf는 내가 관리하는 서버에서 저장실, 유통기한, 장보기를 관리할 수 있는 무료이며 업데이트가 활발한 방법으로, 상품 인식, 유통기한 라벨 읽기, 레시피 작성에 선택적으로 AI를 쓸 수 있습니다. 반면 설치에는 Docker와 직접 편집하는 .env 파일이 필요하고, 직접 Llama 서버를 설정하지 않으면 AI는 Gemini나 OpenAI에서 동작하며, 프로젝트는 1년이 채 안 되었고, AI와 개인정보 관련 주장은 여기서 확인할 수 없었습니다. 이미 집에서 서비스를 운영하는 가정에 어울리며, 더블클릭으로 설치하는 앱이나 언어 모델 어시스턴트를 원하는 분은 다른 곳을 찾아보는 편이 좋습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[EverShelf 공식 사이트](https://evershelf.site) — 기능, FAQ, 개인정보 안내. 2026년 11월 1일 확인.',
          '[GitHub의 EverShelf](https://github.com/dadaloop82/EverShelf) — README, 릴리스, 예시 설정, 보안 정책, 커밋 활동. 2026년 11월 1일 확인.',
          '[저장소 안의 EverShelf 위키 페이지](https://github.com/dadaloop82/EverShelf/tree/main/docs/wiki) — 기능, 설치, AI 제공업체. 2026년 11월 1일 확인.',
          '[EverShelf Android 키오스크 README](https://github.com/dadaloop82/EverShelf/blob/main/evershelf-kiosk/README.md) — 버전, 최소 Android 수준, 다운로드. 2026년 11월 1일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Home Assistant Assist 리뷰](/ko/power-local-llm/home-assistant-assist-review) — EverShelf가 연동을 제공하는, Home Assistant에 내장된 음성 어시스턴트.',
          '[Immich 리뷰](/ko/power-local-llm/immich-review) — AI가 내 서버에서 실행되는 또 다른 셀프 호스팅 가정용 앱.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 목록.',
        ],
      },
    },
  },
}
