// Coil Review: A Mac Agent Harness That Shows Which Model Answered
// Slug: coil-review
// Companion to: goose-review, agent-zero-review, openclaw-review
// Sources: the official Coil page, privacy policy and support page at ohmslaw.net (maker brand Silo Systems) and the Mac App Store
// listing (id6788070684), all read 2026-10-24 — no hands-on testing. The listing prints version dates without a year, so 1.16.0
// ("3d ago") is dated 2026-10-20. Prices read per storefront 2026-10-24: US $14.99, DE/FR/ES 17,99 EUR, JP 2,500 JPY, BR R$ 99,90,
// KR 25,000 KRW; ZH and AR carry USD per docs/geo-translation.md.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/coil-review-hero-en.webp',
    title: 'Coil Review: A Mac Agent Harness That Shows Which Model Answered',
    seoTitle: 'Coil Review: Mac Agent Harness With Routing Receipts',
    intro:
      'Coil is a Mac App Store app from Silo Systems that, per its own pages, sends each turn either to a fast on-device router model or to a stronger worker model, prints a routing receipt on every reply and asks before it touches files in one chosen folder. This review reflects the maker\'s site, privacy policy and the App Store listing as checked on 24 October 2026.',
    metaDescription:
      'Coil review: Mac-only on-device agent app with router and worker models, routing receipts and approval-gated folder tools. Price, needs and open questions.',
    twitterDescription:
      'Coil review: a Mac-only agent harness that routes turns between two on-device models and shows a receipt for each reply. Requirements, price and what is unverified.',
    audience:
      'Mac owners with an Apple silicon machine who want to know what Coil needs, what it costs, how its folder tools and privacy claims work and which statements the sources leave unconfirmed.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Coil review',
    targetKeywords: [
      'coil review',
      'local agent harness mac',
      'on-device ai agent mac app store',
      'router and worker model',
      'coil local ai harness',
      'private ai agent apple silicon',
    ],
    current_hardware_mentioned: ['Mac with Apple Silicon'],
    leadAnswerBlock:
      '**Coil (version 1.16.0, updated 20 October 2026) is a Mac App Store app for $14.99, with no stated license, that, per the developer, runs open-weights models on your Mac and splits each turn between a small router and a stronger worker model.** Every behavior and privacy statement in this review comes from the maker\'s own pages; PromptQuorum has not installed or tested it.',
    quickAnswerTop: {
      en: {
        question: 'What do I need to run Coil?',
        answer:
          'A Mac with Apple silicon, macOS 14 or newer and at least 16 GB of unified memory, per the App Store listing. The first run downloads model weights after you agree.',
        bullets: [
          'Shows a receipt for every reply: model, tier, role, confidence and tokens per second.',
          'Lets you preview a route before it runs and pick another loaded model or cancel.',
          'Limits file tools to one folder you choose and shows a preview before any write.',
          'Works offline after the model download; an optional cloud mode is off by default.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Coil?', anchor: 'what-is-coil' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'What You Need', anchor: 'requirements' },
      { label: 'Pricing', anchor: 'pricing' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Privacy and Network Use', anchor: 'privacy' },
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
            text: 'Coil is a Mac-only app that runs open-weights models on-device and shows which model handled each turn.',
          },
          {
            type: 'plain-terms',
            text: 'A small model decides whether a question is quick or hard, a stronger model takes the hard ones, and the app asks before it changes files in the folder you picked.',
          },
        ],
        items: [
          'Maintenance: the listing shows 15 versions from 1.2.0 on 8 July to 1.16.0 on 20 October 2026, so it is actively updated and no stale-project warning applies.',
          'License: not stated, and no public repository was found.',
          'Reach: Mac only; there is no Windows, Linux or mobile version.',
          'Ratings: the App Store shows too few ratings to display a score.',
          'Basis: the maker\'s site and policy and the store listing, read on 24 October 2026, with no hands-on testing.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum has not installed, tested or benchmarked Coil. Behavior, speed and privacy statements below are the maker\'s own.',
          },
        ],
      },
      overview: {
        id: 'what-is-coil',
        title: 'What Is Coil?',
        content: [
          '**Coil, listed on the Mac App Store as "Coil - Local AI Harness", is an agent harness: a wrapper that runs open-weights language models on Apple silicon and decides which model handles each request.** The page calls it "a local agent harness that shows its work". It is published under the brand Silo Systems; the App Store seller is Omar Quddusi.',
          'The design has two tiers. A fast router answers or dispatches quick turns, and a stronger worker takes harder ones; the model residency table shows which models are loaded, pinned or evicted against your memory budget. The maker says it is not a cloud chatbot and does not run unrestricted shell commands. The same maker also sells a second Mac app, Matadoor.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Coil is sold only through the Mac App Store; there is no direct download.**',
        ],
        columns: ['Channel', 'Link'],
        rows: [
          { 'Channel': 'Mac App Store (macOS 14+)', 'Link': '[Coil - Local AI Harness](https://apps.apple.com/us/app/id6788070684)' },
          { 'Channel': 'Website', 'Link': '[ohmslaw.net/apps/coil](https://ohmslaw.net/apps/coil)' },
          { 'Channel': 'Privacy policy', 'Link': '[ohmslaw.net/apps/coil/privacy](https://ohmslaw.net/apps/coil/privacy)' },
          { 'Channel': 'Support', 'Link': '[ohmslaw.net/apps/coil/support](https://ohmslaw.net/apps/coil/support)' },
        ],
        note: 'Version reviewed: 1.16.0, shown on the App Store as updated 3 days before this check; the listing prints no year, so PromptQuorum dates it 20 October 2026, the latest upstream update at the time of checking. The app is 14.6 MB; model weights are a separate download. No source repository, Windows, Linux, Android or iPhone version was found.',
      },
      requirements: {
        id: 'requirements',
        title: 'What You Need',
        content: [
          '**Coil needs a Mac with Apple silicon, macOS 14.0 or later and at least 16 GB of unified memory; the listing recommends 36 GB for the strong-worker tier.**',
        ],
        columns: ['Item', 'Per the sources'],
        rows: [
          { 'Item': 'Chip and memory', 'Per the sources': 'Apple silicon, 16 GB or more' },
          { 'Item': 'Operating system', 'Per the sources': 'macOS 14.0 or later' },
          { 'Item': 'First-run downloads', 'Per the sources': 'Chat weights from Hugging Face, after consent' },
          { 'Item': 'Embedding model', 'Per the sources': 'Downloads at first launch' },
        ],
        note: 'The support page gives no disk figures and names no models or download sizes. Models that the maker has not tested are estimated from published size and format, never selected by default and need an extra confirmation.',
      },
      pricing: {
        id: 'pricing',
        title: 'Pricing',
        content: [
          '**Coil is a one-time purchase of $14.99 with no subscription and no in-app purchases.** Family Sharing covers up to six family members.',
        ],
        columns: ['Storefront', 'Price'],
        rows: [
          { 'Storefront': 'United States', 'Price': '$14.99' },
          { 'Storefront': 'Germany, France, Spain', 'Price': '17,99 €' },
          { 'Storefront': 'Japan', 'Price': '¥2,500' },
          { 'Storefront': 'Brazil', 'Price': 'R$ 99,90' },
          { 'Storefront': 'South Korea', 'Price': '₩25,000' },
        ],
        note: 'Read from each country\'s App Store page on 24 October 2026; prices are set by the store and can change. No free trial was mentioned. Bring Your Own Key, if you switch it on, adds whatever your chosen provider charges.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the maker\'s page or the App Store description.**',
        ],
        items: [
          '**Router and worker.** One small model handles quick turns and a stronger one handles hard work.',
          '**Routing receipts.** Each reply shows model, tier, role, confidence and speed; trace receipts can be exported and keep hashes and outcomes, not file text.',
          '**Route preview.** Set to Always, Ambiguous or Never, it shows destination, model residency, reason, context counts and tool scope before a request runs.',
          '**Reviewed workspace tools.** Read, Write, Edit and a read-only bounded shell, limited to one folder, with policy modes inspect-only, review-changes and ask-every-tool.',
          '**Workspace map and wiki.** Swift types, protocols and functions are drawn as a graph; wiki pages are drafted but written only after approval.',
          '**Local memory.** Conversations are distilled into a store you can search, pin and delete; version 1.16.0 added using saved memory in replies.',
          '**Signed model catalog.** Version 1.13.0 added a signed catalog with per-file model verification.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Network Use',
        content: [
          '**The privacy policy (version 1.2, effective 23 September 2026) says Coil collects nothing about you, has no account, no analytics and no telemetry, and that none of your content reaches Silo Systems.** The App Store label says "Data Not Collected", which Apple notes is the developer\'s own statement.',
          'The policy names four network paths: model downloads from Hugging Face, App Store update traffic, an optional model-catalog check that is off by default and downloads only a signed file from ohmslaw.net, and Bring Your Own Key. With that last option on, your message plus built context such as memories and excerpts goes directly to the provider you configure (OpenAI, Anthropic, Gemini or OpenRouter, per the App Store notes) with the key kept in the macOS Keychain; Ollama on your own machine keeps requests on your network. Removing the app does not delete your data from its container.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maker\'s statements. PromptQuorum has not audited the app or its network traffic.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Mac owners with 16 GB or more** who want an on-device agent that reports which model answered.',
          '**People who want approval before file changes,** limited to one folder.',
          '**Buyers who prefer a one-time price** to a subscription.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on quality and speed.** PromptQuorum did not run Coil, and the sources give no benchmark figures or model names.',
          '**License and code.** None is stated and no repository was found, so the code cannot be inspected.',
          '**Track record.** The App Store shows too few ratings for a score, and the version history shown starts on 8 July 2026.',
          '**Privacy claims.** The no-telemetry and offline statements were not checked against network traffic.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[Goose](/power-local-llm/goose-review)', 'Platforms': 'macOS, Windows, Linux', 'Price / license': 'Free / Apache-2.0', 'Key difference': 'Open-source agent for coding and automation; works with local or cloud models' },
          { 'App': '[Agent Zero](/power-local-llm/agent-zero-review)', 'Platforms': 'macOS, Windows, Linux', 'Price / license': 'Free / MIT', 'Key difference': 'Minimal open-source autonomous agent with coding ability' },
          { 'App': '[OpenClaw](/power-local-llm/openclaw-review)', 'Platforms': 'macOS, Windows, Linux', 'Price / license': 'Free / MIT', 'Key difference': 'Open-source orchestration framework for agent workflows' },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Coil work offline?',
            a: 'Per the privacy policy, yes once the chat weights and the embedding model are downloaded; the cloud mode is the only path that needs internet for replies.',
          },
          {
            q: 'Can Coil run commands on my Mac?',
            a: 'The maker says it does not run unrestricted shell commands. Its shell is read-only and bounded, and Write and Edit show a preview or diff first.',
          },
          {
            q: 'Can I use my own API key?',
            a: 'Yes, as an optional mode that is off by default; version 1.12.0 added it for OpenAI, Anthropic, Gemini and OpenRouter.',
          },
          {
            q: 'Is there an iPhone or Windows version?',
            a: 'None was found; the page lists only Mac, macOS 14 or later, on Apple silicon.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Coil is a one-time-purchase Mac app that, per its maker, keeps open-weights models and your data on the machine, splits work between a router and a stronger worker and shows a receipt for every reply, with file tools limited to one approved folder. It was updated three days before this check and has a clear privacy policy. Against that, it states no license, is Mac-only, needs 16 GB or more, has too few ratings for a score and every behavior and privacy claim comes from the maker. It suits Mac owners who value transparent routing and approval prompts; readers who want open code or other systems can compare [Goose](/power-local-llm/goose-review) or [Agent Zero](/power-local-llm/agent-zero-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Coil on ohmslaw.net](https://ohmslaw.net/apps/coil) — maker page: description, features, price and platform, checked 24 October 2026.',
          '[Coil privacy policy](https://ohmslaw.net/apps/coil/privacy) and [support page](https://ohmslaw.net/apps/coil/support) — data handling, network paths, model downloads and workspace tools.',
          '[Coil on the Mac App Store](https://apps.apple.com/us/app/id6788070684) — version history, requirements, size, age rating and the developer\'s privacy label.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Goose Review](/power-local-llm/goose-review) — an open-source local-first agent for coding and automation.',
          '[Agent Zero Review](/power-local-llm/agent-zero-review) — a minimal autonomous agent with coding ability.',
          '[OpenClaw Review](/power-local-llm/openclaw-review) — an orchestration framework for agent workflows.',
          '[Local LLM Code & Development Compared](/power-local-llm/local-llm-code-development-compared) — the category comparison for coding and agent tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Coil Review: A Mac Agent Harness That Shows Which Model Answered',
      description:
        'Coil review: a Mac-only on-device agent app with a router and worker model, routing receipts and approval-gated folder tools. Price, requirements and what the sources leave unconfirmed.',
      url: 'https://promptquorum.com/power-local-llm/coil-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Mac owners evaluating an on-device AI agent app' },
      about: [
        { '@type': 'Thing', name: 'Coil' },
        { '@type': 'Thing', name: 'Local AI agent harness' },
        { '@type': 'Thing', name: 'On-device language models on Apple silicon' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/coil-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Coil Review', item: 'https://promptquorum.com/power-local-llm/coil-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/coil-review-hero-de.webp',
    title: 'Coil-Rezension: Ein Mac-Agent-Harness, das zeigt, welches Modell geantwortet hat',
    seoTitle: 'Coil-Rezension: Mac-Agent-Harness mit Routing-Belegen',
    intro:
      'Coil ist eine Mac-App aus dem Mac App Store von Silo Systems, die laut eigenen Angaben jede Anfrage entweder an ein schnelles Router-Modell oder an ein stärkeres Worker-Modell auf dem Gerät schickt, bei jeder Antwort einen Routing-Beleg anzeigt und nachfragt, bevor sie Dateien in einem gewählten Ordner anfasst. Diese Rezension gibt Website, Datenschutzerklärung und App-Store-Eintrag des Herstellers wieder, wie sie am 24. Oktober 2026 geprüft wurden.',
    metaDescription:
      'Coil-Rezension: Mac-App mit Router- und Worker-Modell auf dem Gerät, Routing-Belegen und Ordner-Werkzeugen mit Freigabe. Preis, Bedarf, offene Punkte.',
    twitterDescription:
      'Coil-Rezension: Agent-Harness nur für den Mac, das Anfragen zwischen zwei Modellen auf dem Gerät verteilt und jede Antwort belegt. Bedarf, Preis, Ungeprüftes.',
    audience:
      'Mac-Besitzer mit Apple-Silicon-Rechner, die wissen möchten, was Coil benötigt, was es kostet, wie Ordner-Werkzeuge und Datenschutzangaben funktionieren und welche Aussagen die Quellen unbestätigt lassen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Coil Rezension',
    targetKeywords: [
      'coil rezension',
      'lokales agent harness mac',
      'ki agent auf dem gerät mac app store',
      'router und worker modell',
      'coil local ai harness',
      'privater ki agent apple silicon',
    ],
    current_hardware_mentioned: ['Mac with Apple Silicon'],
    leadAnswerBlock:
      '**Coil (Version 1.16.0, aktualisiert am 20. Oktober 2026) ist eine Mac-App aus dem Mac App Store für 17,99 €, deren Lizenz nicht angegeben ist und die laut Hersteller offene Modelle auf Ihrem Mac ausführt und jede Anfrage auf einen kleinen Router und ein stärkeres Worker-Modell verteilt.** Alle Angaben zu Verhalten und Datenschutz in dieser Rezension stammen von den Seiten des Herstellers; PromptQuorum hat die App weder installiert noch getestet.',
    quickAnswerTop: {
      de: {
        question: 'Was brauche ich, um Coil auszuführen?',
        answer:
          'Laut App-Store-Eintrag einen Mac mit Apple Silicon, macOS 14 oder neuer und mindestens 16 GB Unified Memory. Beim ersten Start werden nach Ihrer Zustimmung Modellgewichte heruntergeladen.',
        bullets: [
          'Zeigt bei jeder Antwort einen Beleg: Modell, Stufe, Rolle, Konfidenz und Tokens pro Sekunde.',
          'Erlaubt eine Routenvorschau vor der Ausführung, samt Wahl eines anderen geladenen Modells oder Abbruch.',
          'Beschränkt Datei-Werkzeuge auf einen gewählten Ordner und zeigt vor jedem Schreiben eine Vorschau.',
          'Arbeitet nach dem Modell-Download offline; ein optionaler Cloud-Modus ist standardmäßig aus.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Coil?', anchor: 'what-is-coil' },
      { label: 'Bezugsquellen', anchor: 'get-it' },
      { label: 'Was Sie benötigen', anchor: 'requirements' },
      { label: 'Preis', anchor: 'pricing' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Datenschutz und Netzwerknutzung', anchor: 'privacy' },
      { label: 'Für wen geeignet', anchor: 'who-should-use' },
      { label: 'Was wir nicht prüfen konnten', anchor: 'who-should-not-use' },
      { label: 'Konkurrenten und Alternativen', anchor: 'vs-alternatives' },
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
            text: 'Coil ist eine App nur für den Mac, die offene Modelle auf dem Gerät ausführt und zeigt, welches Modell jede Anfrage bearbeitet hat.',
          },
          {
            type: 'plain-terms',
            text: 'Ein kleines Modell entscheidet, ob eine Frage einfach oder schwierig ist, ein stärkeres Modell übernimmt die schwierigen, und die App fragt nach, bevor sie Dateien im gewählten Ordner ändert.',
          },
        ],
        items: [
          'Pflege: Der Eintrag zeigt 15 Versionen von 1.2.0 am 8. Juli bis 1.16.0 am 20. Oktober 2026; die App wird also aktiv aktualisiert, eine Warnung vor veralteten Projekten entfällt.',
          'Lizenz: nicht angegeben; es wurde kein öffentliches Repository gefunden.',
          'Reichweite: nur Mac; es gibt keine Version für Windows, Linux oder Mobilgeräte.',
          'Bewertungen: Im App Store sind zu wenige Bewertungen vorhanden, um eine Note anzuzeigen.',
          'Grundlage: Website und Datenschutzerklärung des Herstellers sowie der Store-Eintrag, gelesen am 24. Oktober 2026, ohne eigenen Test.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum hat Coil weder installiert, getestet noch bewertet. Aussagen zu Verhalten, Tempo und Datenschutz stammen vom Hersteller.',
          },
        ],
      },
      overview: {
        id: 'what-is-coil',
        title: 'Was ist Coil?',
        content: [
          '**Coil, im Mac App Store als „Coil - Local AI Harness“ geführt, ist ein Agent-Harness: eine Hülle, die offene Sprachmodelle auf Apple Silicon ausführt und entscheidet, welches Modell welche Anfrage bearbeitet.** Die Seite nennt es „a local agent harness that shows its work“. Veröffentlicht wird es unter der Marke Silo Systems; Verkäufer im App Store ist Omar Quddusi.',
          'Das Design hat zwei Stufen. Ein schneller Router beantwortet einfache Anfragen oder leitet sie weiter, ein stärkeres Worker-Modell übernimmt schwierigere; die Residenz-Tabelle zeigt, welche Modelle geladen, angeheftet oder verdrängt sind, gemessen an Ihrem Speicherbudget. Laut Hersteller ist es kein Cloud-Chatbot und führt keine uneingeschränkten Shell-Befehle aus. Derselbe Hersteller verkauft außerdem eine zweite Mac-App, Matadoor.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquellen',
        content: [
          '**Coil gibt es nur über den Mac App Store; einen direkten Download gibt es nicht.**',
        ],
        columns: ['Kanal', 'Link'],
        rows: [
          { 'Kanal': 'Mac App Store (macOS 14+)', 'Link': '[Coil - Local AI Harness](https://apps.apple.com/de/app/id6788070684)' },
          { 'Kanal': 'Website', 'Link': '[ohmslaw.net/apps/coil](https://ohmslaw.net/apps/coil)' },
          { 'Kanal': 'Datenschutzerklärung', 'Link': '[ohmslaw.net/apps/coil/privacy](https://ohmslaw.net/apps/coil/privacy)' },
          { 'Kanal': 'Support', 'Link': '[ohmslaw.net/apps/coil/support](https://ohmslaw.net/apps/coil/support)' },
        ],
        note: 'Geprüfte Version: 1.16.0, im App Store drei Tage vor dieser Prüfung als aktualisiert angezeigt; der Eintrag nennt kein Jahr, daher datiert PromptQuorum sie auf den 20. Oktober 2026, das jüngste Upstream-Update zum Prüfzeitpunkt. Die App ist 14,6 MB groß; Modellgewichte sind ein separater Download. Es wurde weder ein Quell-Repository noch eine Version für Windows, Linux, Android oder iPhone gefunden.',
      },
      requirements: {
        id: 'requirements',
        title: 'Was Sie benötigen',
        content: [
          '**Coil benötigt einen Mac mit Apple Silicon, macOS 14.0 oder neuer und mindestens 16 GB Unified Memory; für die Stufe des starken Workers empfiehlt der Eintrag 36 GB.**',
        ],
        columns: ['Punkt', 'Laut Quellen'],
        rows: [
          { 'Punkt': 'Chip und Speicher', 'Laut Quellen': 'Apple Silicon, 16 GB oder mehr' },
          { 'Punkt': 'Betriebssystem', 'Laut Quellen': 'macOS 14.0 oder neuer' },
          { 'Punkt': 'Downloads beim ersten Start', 'Laut Quellen': 'Chat-Gewichte von Hugging Face, nach Zustimmung' },
          { 'Punkt': 'Embedding-Modell', 'Laut Quellen': 'Wird beim ersten Start geladen' },
        ],
        note: 'Die Support-Seite nennt keine Festplattenwerte und keine Modelle oder Downloadgrößen. Vom Hersteller ungetestete Modelle werden aus veröffentlichter Größe und Format geschätzt, nie standardmäßig gewählt und erfordern eine zusätzliche Bestätigung.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preis',
        content: [
          '**Coil ist ein Einmalkauf für 17,99 € im deutschen Store, ohne Abo und ohne In-App-Käufe.** Die Familienfreigabe gilt für bis zu sechs Familienmitglieder.',
        ],
        columns: ['Store', 'Preis'],
        rows: [
          { 'Store': 'Deutschland, Frankreich, Spanien', 'Preis': '17,99 €' },
          { 'Store': 'USA', 'Preis': '$14.99' },
          { 'Store': 'Japan', 'Preis': '¥2,500' },
          { 'Store': 'Brasilien', 'Preis': 'R$ 99,90' },
          { 'Store': 'Südkorea', 'Preis': '₩25,000' },
        ],
        note: 'Am 24. Oktober 2026 auf der App-Store-Seite des jeweiligen Landes abgelesen; die Preise legt der Store fest und sie können sich ändern. Eine kostenlose Testphase wurde nicht erwähnt. „Bring Your Own Key“ verursacht, wenn Sie es einschalten, zusätzlich die Kosten Ihres gewählten Anbieters.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt von der Seite des Herstellers oder der App-Store-Beschreibung.**',
        ],
        items: [
          '**Router und Worker.** Ein kleines Modell bearbeitet einfache Anfragen, ein stärkeres die schwierigen.',
          '**Routing-Belege.** Jede Antwort zeigt Modell, Stufe, Rolle, Konfidenz und Tempo; Trace-Belege lassen sich exportieren und enthalten Hashes und Ergebnisse, keinen Dateitext.',
          '**Routenvorschau.** Mit den Einstellungen „Immer“, „Bei Mehrdeutigkeit“ oder „Nie“ zeigt sie vor der Ausführung Ziel, Modellresidenz, Grund, Kontextumfang und Werkzeugumfang.',
          '**Geprüfte Workspace-Werkzeuge.** Lesen, Schreiben, Bearbeiten und eine schreibgeschützte, begrenzte Shell, beschränkt auf einen Ordner, mit den Richtlinienmodi „nur prüfen“, „Änderungen prüfen“ und „bei jedem Werkzeug fragen“.',
          '**Workspace-Karte und Wiki.** Swift-Typen, Protokolle und Funktionen werden als Graph dargestellt; Wiki-Seiten werden entworfen, aber erst nach Freigabe geschrieben.',
          '**Lokales Gedächtnis.** Unterhaltungen werden in einen Speicher verdichtet, den Sie durchsuchen, anheften und löschen können; Version 1.16.0 ergänzte die Nutzung des gespeicherten Gedächtnisses in Antworten.',
          '**Signierter Modellkatalog.** Version 1.13.0 ergänzte einen signierten Katalog mit Prüfung jeder Modelldatei.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Netzwerknutzung',
        content: [
          '**Die Datenschutzerklärung (Version 1.2, gültig ab 23. September 2026) besagt, dass Coil nichts über Sie erhebt, kein Konto, keine Analyse und keine Telemetrie hat und dass keiner Ihrer Inhalte Silo Systems erreicht.** Das App-Store-Label lautet „Daten werden nicht erfasst“, was laut Apple die eigene Angabe des Entwicklers ist.',
          'Die Erklärung nennt vier Netzwerkpfade: Modell-Downloads von Hugging Face, App-Store-Update-Verkehr, eine optionale Prüfung des Modellkatalogs, die standardmäßig aus ist und nur eine signierte Datei von ohmslaw.net lädt, sowie „Bring Your Own Key“. Ist Letzteres eingeschaltet, geht Ihre Nachricht samt aufgebautem Kontext wie Erinnerungen und Auszügen direkt an den von Ihnen eingerichteten Anbieter (laut App-Store-Hinweisen OpenAI, Anthropic, Gemini oder OpenRouter); der Schlüssel liegt im macOS-Schlüsselbund, und Ollama auf dem eigenen Rechner hält Anfragen im eigenen Netz. Das Entfernen der App löscht Ihre Daten im Container nicht.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Aussagen des Herstellers. PromptQuorum hat die App und ihren Netzwerkverkehr nicht geprüft.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        items: [
          '**Mac-Besitzer mit 16 GB oder mehr,** die einen Agenten auf dem Gerät wünschen, der meldet, welches Modell geantwortet hat.',
          '**Menschen, die vor Dateiänderungen gefragt werden möchten,** begrenzt auf einen Ordner.',
          '**Käufer, die einen Einmalpreis einem Abo vorziehen.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht prüfen konnten',
        items: [
          '**Qualität und Tempo in der Praxis.** PromptQuorum hat Coil nicht ausgeführt, und die Quellen nennen weder Benchmarkwerte noch Modellnamen.',
          '**Lizenz und Code.** Keine ist angegeben und es wurde kein Repository gefunden, der Code lässt sich also nicht einsehen.',
          '**Erfahrungswerte.** Der App Store zeigt zu wenige Bewertungen für eine Note, und der angezeigte Versionsverlauf beginnt am 8. Juli 2026.',
          '**Datenschutzangaben.** Die Aussagen zu fehlender Telemetrie und Offline-Betrieb wurden nicht am Netzwerkverkehr geprüft.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Konkurrenten und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          { 'App': '[Goose](/de/power-local-llm/goose-review)', 'Plattformen': 'macOS, Windows, Linux', 'Preis / Lizenz': 'Kostenlos / Apache-2.0', 'Wichtigster Unterschied': 'Open-Source-Agent für Coding und Automatisierung; arbeitet mit lokalen oder Cloud-Modellen' },
          { 'App': '[Agent Zero](/de/power-local-llm/agent-zero-review)', 'Plattformen': 'macOS, Windows, Linux', 'Preis / Lizenz': 'Kostenlos / MIT', 'Wichtigster Unterschied': 'Minimalistischer autonomer Open-Source-Agent mit Coding-Fähigkeiten' },
          { 'App': '[OpenClaw](/de/power-local-llm/openclaw-review)', 'Plattformen': 'macOS, Windows, Linux', 'Preis / Lizenz': 'Kostenlos / MIT', 'Wichtigster Unterschied': 'Open-Source-Orchestrierungs-Framework für Agenten-Workflows' },
        ],
        note: 'Details der Konkurrenten ändern sich häufig; prüfen Sie Preis, Lizenz und Plattformen jeder App im jeweiligen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Funktioniert Coil offline?',
            a: 'Laut Datenschutzerklärung ja, sobald Chat-Gewichte und Embedding-Modell geladen sind; nur der Cloud-Modus braucht für Antworten Internet.',
          },
          {
            q: 'Kann Coil Befehle auf meinem Mac ausführen?',
            a: 'Laut Hersteller führt es keine uneingeschränkten Shell-Befehle aus. Die Shell ist schreibgeschützt und begrenzt, und Schreiben und Bearbeiten zeigen zuvor eine Vorschau oder einen Diff.',
          },
          {
            q: 'Kann ich meinen eigenen API-Schlüssel verwenden?',
            a: 'Ja, als optionaler Modus, der standardmäßig aus ist; Version 1.12.0 ergänzte ihn für OpenAI, Anthropic, Gemini und OpenRouter.',
          },
          {
            q: 'Gibt es eine Version für iPhone oder Windows?',
            a: 'Es wurde keine gefunden; die Seite nennt nur Mac, macOS 14 oder neuer, auf Apple Silicon.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Coil ist eine Mac-App im Einmalkauf, die laut Hersteller offene Modelle und Ihre Daten auf dem Rechner hält, die Arbeit zwischen einem Router und einem stärkeren Worker aufteilt und jede Antwort belegt, mit Datei-Werkzeugen, die auf einen freigegebenen Ordner beschränkt sind. Sie wurde drei Tage vor dieser Prüfung aktualisiert und hat eine klare Datenschutzerklärung. Dagegen steht: Lizenz nicht angegeben, nur Mac, mindestens 16 GB nötig, zu wenige Bewertungen für eine Note, und jede Aussage zu Verhalten und Datenschutz stammt vom Hersteller. Sie eignet sich für Mac-Besitzer, die transparentes Routing und Freigabeabfragen schätzen; wer offenen Code oder andere Systeme möchte, kann [Goose](/de/power-local-llm/goose-review) oder [Agent Zero](/de/power-local-llm/agent-zero-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Coil auf ohmslaw.net](https://ohmslaw.net/apps/coil) — Herstellerseite: Beschreibung, Funktionen, Preis und Plattform, geprüft am 24. Oktober 2026.',
          '[Coil-Datenschutzerklärung](https://ohmslaw.net/apps/coil/privacy) und [Support-Seite](https://ohmslaw.net/apps/coil/support) — Datenverarbeitung, Netzwerkpfade, Modell-Downloads und Workspace-Werkzeuge.',
          '[Coil im Mac App Store](https://apps.apple.com/de/app/id6788070684) — Versionsverlauf, Anforderungen, Größe, Altersfreigabe und das Datenschutz-Label des Entwicklers.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Goose-Rezension](/de/power-local-llm/goose-review) — ein Open-Source-Agent mit Lokal-first-Ansatz für Coding und Automatisierung.',
          '[Agent-Zero-Rezension](/de/power-local-llm/agent-zero-review) — ein minimalistischer autonomer Agent mit Coding-Fähigkeiten.',
          '[OpenClaw-Rezension](/de/power-local-llm/openclaw-review) — ein Orchestrierungs-Framework für Agenten-Workflows.',
          '[Lokale LLMs für Code und Entwicklung im Vergleich](/de/power-local-llm/local-llm-code-development-compared) — der Kategorievergleich für Coding- und Agenten-Werkzeuge.',
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
    theme: 'Overview & Reference',
    heroImage: '/images/coil-review-hero-es.webp',
    title: 'Reseña de Coil: un arnés de agentes para Mac que muestra qué modelo respondió',
    seoTitle: 'Reseña de Coil: arnés de agentes para Mac con recibos',
    intro:
      'Coil es una app de Mac App Store de Silo Systems que, según sus propias páginas, envía cada turno a un modelo enrutador rápido o a un modelo trabajador más potente en el dispositivo, muestra un recibo de enrutamiento en cada respuesta y pide confirmación antes de tocar archivos de una carpeta elegida. Esta reseña refleja el sitio, la política de privacidad y la ficha de App Store del fabricante, revisados el 24 de octubre de 2026.',
    metaDescription:
      'Reseña de Coil: app solo para Mac con enrutador y modelo trabajador locales, recibos de enrutamiento y carpetas con aprobación. Precio y requisitos.',
    twitterDescription:
      'Reseña de Coil: arnés de agentes solo para Mac que reparte los turnos entre dos modelos locales y muestra un recibo por respuesta. Requisitos, precio y lo no verificado.',
    audience:
      'Propietarios de un Mac con Apple silicon que quieren saber qué necesita Coil, cuánto cuesta, cómo funcionan sus herramientas de carpeta y sus afirmaciones de privacidad, y qué dejan sin confirmar las fuentes.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Coil',
    targetKeywords: [
      'reseña de coil',
      'arnés de agentes local mac',
      'agente de ia en el dispositivo mac app store',
      'modelo enrutador y trabajador',
      'coil local ai harness',
      'agente de ia privado apple silicon',
    ],
    current_hardware_mentioned: ['Mac with Apple Silicon'],
    leadAnswerBlock:
      '**Coil (versión 1.16.0, actualizada el 20 de octubre de 2026) es una app de Mac App Store de 17,99 €, sin licencia indicada, que según el fabricante ejecuta modelos de pesos abiertos en tu Mac y reparte cada turno entre un enrutador pequeño y un modelo trabajador más potente.** Todo lo que esta reseña dice sobre su comportamiento y su privacidad procede de las páginas del propio fabricante; PromptQuorum no la ha instalado ni probado.',
    quickAnswerTop: {
      es: {
        question: '¿Qué necesito para ejecutar Coil?',
        answer:
          'Según la ficha de App Store, un Mac con Apple silicon, macOS 14 o posterior y al menos 16 GB de memoria unificada. En el primer arranque se descargan pesos de modelos tras tu consentimiento.',
        bullets: [
          'Muestra un recibo en cada respuesta: modelo, nivel, rol, confianza y tokens por segundo.',
          'Permite previsualizar la ruta antes de ejecutarla y elegir otro modelo cargado o cancelar.',
          'Limita las herramientas de archivos a una carpeta que elijas y muestra una vista previa antes de escribir.',
          'Funciona sin conexión tras descargar el modelo; un modo en la nube opcional viene desactivado.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Coil?', anchor: 'what-is-coil' },
      { label: 'Dónde conseguirla', anchor: 'get-it' },
      { label: 'Qué necesitas', anchor: 'requirements' },
      { label: 'Precio', anchor: 'pricing' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Privacidad y uso de la red', anchor: 'privacy' },
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
            text: 'Coil es una app solo para Mac que ejecuta modelos de pesos abiertos en el dispositivo y muestra qué modelo atendió cada turno.',
          },
          {
            type: 'plain-terms',
            text: 'Un modelo pequeño decide si una pregunta es rápida o difícil, un modelo más potente se encarga de las difíciles y la app pide confirmación antes de cambiar archivos de la carpeta que elegiste.',
          },
        ],
        items: [
          'Mantenimiento: la ficha muestra 15 versiones, de la 1.2.0 el 8 de julio a la 1.16.0 el 20 de octubre de 2026, así que se actualiza con frecuencia y no corresponde el aviso de proyecto abandonado.',
          'Licencia: no indicada; no se encontró un repositorio público.',
          'Alcance: solo Mac; no hay versión para Windows, Linux ni móvil.',
          'Valoraciones: App Store muestra pocas valoraciones para ofrecer una nota.',
          'Base: el sitio y la política del fabricante y la ficha de la tienda, leídos el 24 de octubre de 2026, sin pruebas propias.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum no ha instalado, probado ni medido Coil. Las afirmaciones sobre comportamiento, velocidad y privacidad son del propio fabricante.',
          },
        ],
      },
      overview: {
        id: 'what-is-coil',
        title: '¿Qué es Coil?',
        content: [
          '**Coil, que aparece en Mac App Store como «Coil - Local AI Harness», es un arnés de agentes: una capa que ejecuta modelos de lenguaje de pesos abiertos en Apple silicon y decide qué modelo atiende cada petición.** La página lo describe como «a local agent harness that shows its work». Se publica bajo la marca Silo Systems; el vendedor en App Store es Omar Quddusi.',
          'El diseño tiene dos niveles. Un enrutador rápido responde o deriva los turnos sencillos y un modelo trabajador más potente se ocupa de los difíciles; la tabla de residencia muestra qué modelos están cargados, fijados o expulsados según tu presupuesto de memoria. El fabricante afirma que no es un chatbot en la nube y que no ejecuta comandos de shell sin restricciones. El mismo fabricante vende una segunda app para Mac, Matadoor.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirla',
        content: [
          '**Coil se vende solo en Mac App Store; no hay descarga directa.**',
        ],
        columns: ['Canal', 'Enlace'],
        rows: [
          { 'Canal': 'Mac App Store (macOS 14+)', 'Enlace': '[Coil - Local AI Harness](https://apps.apple.com/es/app/id6788070684)' },
          { 'Canal': 'Sitio web', 'Enlace': '[ohmslaw.net/apps/coil](https://ohmslaw.net/apps/coil)' },
          { 'Canal': 'Política de privacidad', 'Enlace': '[ohmslaw.net/apps/coil/privacy](https://ohmslaw.net/apps/coil/privacy)' },
          { 'Canal': 'Soporte', 'Enlace': '[ohmslaw.net/apps/coil/support](https://ohmslaw.net/apps/coil/support)' },
        ],
        note: 'Versión revisada: 1.16.0, que App Store mostraba como actualizada tres días antes de esta revisión; la ficha no indica el año, así que PromptQuorum la fecha el 20 de octubre de 2026, la última actualización del proyecto en el momento de la comprobación. La app ocupa 14.6 MB; los pesos de los modelos son una descarga aparte. No se encontró repositorio de código ni versión para Windows, Linux, Android o iPhone.',
      },
      requirements: {
        id: 'requirements',
        title: 'Qué necesitas',
        content: [
          '**Coil necesita un Mac con Apple silicon, macOS 14.0 o posterior y al menos 16 GB de memoria unificada; para el nivel del trabajador potente, la ficha recomienda 36 GB.**',
        ],
        columns: ['Elemento', 'Según las fuentes'],
        rows: [
          { 'Elemento': 'Chip y memoria', 'Según las fuentes': 'Apple silicon, 16 GB o más' },
          { 'Elemento': 'Sistema operativo', 'Según las fuentes': 'macOS 14.0 o posterior' },
          { 'Elemento': 'Descargas del primer arranque', 'Según las fuentes': 'Pesos de chat desde Hugging Face, con tu consentimiento' },
          { 'Elemento': 'Modelo de embeddings', 'Según las fuentes': 'Se descarga en el primer arranque' },
        ],
        note: 'La página de soporte no da cifras de disco ni nombra modelos o tamaños de descarga. Los modelos que el fabricante no ha probado se estiman a partir del tamaño y formato publicados, nunca se eligen por defecto y exigen una confirmación adicional.',
      },
      pricing: {
        id: 'pricing',
        title: 'Precio',
        content: [
          '**Coil es una compra única de 17,99 € en la tienda española, sin suscripción ni compras dentro de la app.** Compartir en familia cubre hasta seis miembros.',
        ],
        columns: ['Tienda', 'Precio'],
        rows: [
          { 'Tienda': 'España, Alemania, Francia', 'Precio': '17,99 €' },
          { 'Tienda': 'Estados Unidos', 'Precio': '$14.99' },
          { 'Tienda': 'Japón', 'Precio': '¥2,500' },
          { 'Tienda': 'Brasil', 'Precio': 'R$ 99,90' },
          { 'Tienda': 'Corea del Sur', 'Precio': '₩25,000' },
        ],
        note: 'Consultado en la página de App Store de cada país el 24 de octubre de 2026; los precios los fija la tienda y pueden cambiar. No se mencionó prueba gratuita. Si activas Bring Your Own Key, se suma lo que cobre el proveedor que elijas.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada elemento de abajo procede de la página del fabricante o de la descripción de App Store.**',
        ],
        items: [
          '**Enrutador y trabajador.** Un modelo pequeño atiende los turnos rápidos y uno más potente el trabajo difícil.',
          '**Recibos de enrutamiento.** Cada respuesta muestra modelo, nivel, rol, confianza y velocidad; los recibos de traza se pueden exportar y conservan hashes y resultados, no el texto de los archivos.',
          '**Vista previa de ruta.** Con los ajustes Siempre, Ambiguo o Nunca, muestra destino, residencia del modelo, motivo, tamaños de contexto y alcance de herramientas antes de ejecutar la petición.',
          '**Herramientas de espacio de trabajo revisadas.** Leer, escribir, editar y un shell de solo lectura y acotado, limitados a una carpeta, con los modos de política solo inspeccionar, revisar cambios y preguntar en cada herramienta.',
          '**Mapa del espacio de trabajo y wiki.** Los tipos, protocolos y funciones de Swift se dibujan como un grafo; las páginas de wiki se redactan, pero solo se escriben tras tu aprobación.',
          '**Memoria local.** Las conversaciones se resumen en un almacén que puedes buscar, fijar y borrar; la versión 1.16.0 añadió el uso de la memoria guardada en las respuestas.',
          '**Catálogo de modelos firmado.** La versión 1.13.0 añadió un catálogo firmado con verificación de cada archivo de modelo.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y uso de la red',
        content: [
          '**La política de privacidad (versión 1.2, vigente desde el 23 de septiembre de 2026) afirma que Coil no recopila nada sobre ti, no tiene cuenta, analítica ni telemetría y que ningún contenido tuyo llega a Silo Systems.** La etiqueta de App Store dice «Datos no recopilados», algo que Apple aclara que es una declaración del propio desarrollador.',
          'La política nombra cuatro vías de red: descargas de modelos desde Hugging Face, el tráfico de actualizaciones de App Store, una comprobación opcional del catálogo de modelos, desactivada por defecto, que solo descarga un archivo firmado de ohmslaw.net, y Bring Your Own Key. Con esta última activada, tu mensaje y el contexto construido, como recuerdos y fragmentos, van directamente al proveedor que configures (OpenAI, Anthropic, Gemini u OpenRouter, según las notas de App Store); la clave se guarda en el llavero de macOS y Ollama en tu propio equipo mantiene las peticiones en tu red. Desinstalar la app no borra tus datos de su contenedor.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son afirmaciones del fabricante. PromptQuorum no ha auditado la app ni su tráfico de red.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Propietarios de un Mac con 16 GB o más** que quieren un agente en el dispositivo que indique qué modelo respondió.',
          '**Personas que quieren aprobar antes de que se cambien archivos,** limitado a una carpeta.',
          '**Compradores que prefieren un pago único** a una suscripción.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad y velocidad en la práctica.** PromptQuorum no ejecutó Coil y las fuentes no ofrecen cifras de rendimiento ni nombres de modelos.',
          '**Licencia y código.** No se indica ninguna y no se encontró repositorio, así que el código no se puede revisar.',
          '**Trayectoria.** App Store muestra pocas valoraciones para una nota y el historial de versiones visible empieza el 8 de julio de 2026.',
          '**Afirmaciones de privacidad.** Las declaraciones sobre ausencia de telemetría y uso sin conexión no se contrastaron con el tráfico de red.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[Goose](/es/power-local-llm/goose-review)', 'Plataformas': 'macOS, Windows, Linux', 'Precio / licencia': 'Gratis / Apache-2.0', 'Diferencia clave': 'Agente de código abierto para programación y automatización; funciona con modelos locales o en la nube' },
          { 'App': '[Agent Zero](/es/power-local-llm/agent-zero-review)', 'Plataformas': 'macOS, Windows, Linux', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Agente autónomo mínimo de código abierto con capacidad de programación' },
          { 'App': '[OpenClaw](/es/power-local-llm/openclaw-review)', 'Plataformas': 'macOS, Windows, Linux', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Framework de orquestación de código abierto para flujos de trabajo de agentes' },
        ],
        note: 'Los datos de la competencia cambian a menudo; confirma el precio, la licencia y las plataformas actuales en la ficha de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona Coil sin conexión?',
            a: 'Según la política de privacidad, sí, una vez descargados los pesos de chat y el modelo de embeddings; solo el modo en la nube necesita internet para responder.',
          },
          {
            q: '¿Puede Coil ejecutar comandos en mi Mac?',
            a: 'El fabricante dice que no ejecuta comandos de shell sin restricciones. Su shell es de solo lectura y acotado, y Escribir y Editar muestran antes una vista previa o un diff.',
          },
          {
            q: '¿Puedo usar mi propia clave de API?',
            a: 'Sí, como modo opcional desactivado por defecto; la versión 1.12.0 lo añadió para OpenAI, Anthropic, Gemini y OpenRouter.',
          },
          {
            q: '¿Hay versión para iPhone o Windows?',
            a: 'No se encontró ninguna; la página solo indica Mac, macOS 14 o posterior, con Apple silicon.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Coil es una app de Mac de pago único que, según su fabricante, mantiene los modelos de pesos abiertos y tus datos en el equipo, reparte el trabajo entre un enrutador y un modelo más potente y muestra un recibo por respuesta, con herramientas de archivos limitadas a una carpeta aprobada. Se actualizó tres días antes de esta revisión y tiene una política de privacidad clara. En contra: no indica licencia, es solo para Mac, exige 16 GB o más, tiene pocas valoraciones para una nota y todo lo que dice sobre comportamiento y privacidad procede del fabricante. Encaja con quienes valoran un enrutamiento transparente y las confirmaciones de aprobación; quien busque código abierto u otros sistemas puede comparar [Goose](/es/power-local-llm/goose-review) o [Agent Zero](/es/power-local-llm/agent-zero-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Coil en ohmslaw.net](https://ohmslaw.net/apps/coil) — página del fabricante: descripción, funciones, precio y plataforma, revisada el 24 de octubre de 2026.',
          '[Política de privacidad de Coil](https://ohmslaw.net/apps/coil/privacy) y [página de soporte](https://ohmslaw.net/apps/coil/support) — tratamiento de datos, vías de red, descargas de modelos y herramientas del espacio de trabajo.',
          '[Coil en Mac App Store](https://apps.apple.com/es/app/id6788070684) — historial de versiones, requisitos, tamaño, clasificación por edad y la etiqueta de privacidad del desarrollador.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Goose](/es/power-local-llm/goose-review) — un agente de código abierto, local primero, para programación y automatización.',
          '[Reseña de Agent Zero](/es/power-local-llm/agent-zero-review) — un agente autónomo mínimo con capacidad de programación.',
          '[Reseña de OpenClaw](/es/power-local-llm/openclaw-review) — un framework de orquestación para flujos de trabajo de agentes.',
          '[LLM locales para código y desarrollo: comparativa](/es/power-local-llm/local-llm-code-development-compared) — la comparativa de la categoría de herramientas de programación y agentes.',
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
    theme: 'Overview & Reference',
    heroImage: '/images/coil-review-hero-fr.webp',
    title: 'Test de Coil : un harnais d’agent pour Mac qui montre quel modèle a répondu',
    seoTitle: 'Test de Coil : harnais d’agent Mac avec reçus de routage',
    intro:
      'Coil est une application du Mac App Store de Silo Systems qui, d’après ses propres pages, envoie chaque tour soit à un modèle routeur rapide, soit à un modèle de travail plus puissant sur l’appareil, affiche un reçu de routage à chaque réponse et demande confirmation avant de toucher aux fichiers d’un dossier choisi. Ce test reflète le site, la politique de confidentialité et la fiche App Store de l’éditeur, consultés le 24 octobre 2026.',
    metaDescription:
      'Test de Coil : app Mac avec routeur et modèle de travail sur l’appareil, reçus de routage et dossiers soumis à approbation. Prix, besoins, réserves.',
    twitterDescription:
      'Test de Coil : harnais d’agent réservé au Mac qui répartit les tours entre deux modèles locaux et affiche un reçu par réponse. Besoins, prix et points non vérifiés.',
    audience:
      'Les propriétaires d’un Mac Apple silicon qui veulent savoir ce que demande Coil, combien il coûte, comment fonctionnent ses outils de dossier et ses affirmations de confidentialité, et ce que les sources laissent sans confirmation.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'test de Coil',
    targetKeywords: [
      'test de coil',
      'harnais d’agent local mac',
      'agent ia sur l’appareil mac app store',
      'modèle routeur et modèle de travail',
      'coil local ai harness',
      'agent ia privé apple silicon',
    ],
    current_hardware_mentioned: ['Mac with Apple Silicon'],
    leadAnswerBlock:
      '**Coil (version 1.16.0, mise à jour le 20 octobre 2026) est une application du Mac App Store à 17,99 €, sans licence indiquée, qui exécute selon l’éditeur des modèles à poids ouverts sur votre Mac et répartit chaque tour entre un petit routeur et un modèle de travail plus puissant.** Toutes les affirmations de ce test sur le comportement et la confidentialité viennent des pages de l’éditeur ; PromptQuorum ne l’a ni installée ni testée.',
    quickAnswerTop: {
      fr: {
        question: 'De quoi ai-je besoin pour faire tourner Coil ?',
        answer:
          'D’après la fiche App Store, d’un Mac Apple silicon, de macOS 14 ou plus récent et d’au moins 16 Go de mémoire unifiée. Le premier lancement télécharge des poids de modèles après votre accord.',
        bullets: [
          'Affiche un reçu à chaque réponse : modèle, niveau, rôle, confiance et tokens par seconde.',
          'Permet de prévisualiser l’itinéraire avant son exécution, puis de choisir un autre modèle chargé ou d’annuler.',
          'Limite les outils de fichiers à un dossier choisi et affiche un aperçu avant toute écriture.',
          'Fonctionne hors ligne après le téléchargement du modèle ; un mode cloud facultatif est désactivé par défaut.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce que Coil ?', anchor: 'what-is-coil' },
      { label: 'Où l’obtenir', anchor: 'get-it' },
      { label: 'Ce qu’il vous faut', anchor: 'requirements' },
      { label: 'Tarif', anchor: 'pricing' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Confidentialité et usage du réseau', anchor: 'privacy' },
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
            text: 'Coil est une application réservée au Mac qui exécute des modèles à poids ouverts sur l’appareil et montre quel modèle a traité chaque tour.',
          },
          {
            type: 'plain-terms',
            text: 'Un petit modèle décide si une question est simple ou difficile, un modèle plus puissant prend les difficiles, et l’application demande confirmation avant de modifier des fichiers du dossier choisi.',
          },
        ],
        items: [
          'Maintenance : la fiche affiche 15 versions, de la 1.2.0 le 8 juillet à la 1.16.0 le 20 octobre 2026 ; l’application est donc activement mise à jour et aucun avertissement de projet abandonné ne s’applique.',
          'Licence : non indiquée ; aucun dépôt public n’a été trouvé.',
          'Portée : Mac uniquement ; il n’existe pas de version Windows, Linux ou mobile.',
          'Avis : l’App Store affiche trop peu d’évaluations pour donner une note.',
          'Base : le site et la politique de l’éditeur ainsi que la fiche du magasin, lus le 24 octobre 2026, sans test pratique.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum n’a ni installé, ni testé, ni mesuré Coil. Les affirmations sur le comportement, la vitesse et la confidentialité sont celles de l’éditeur.',
          },
        ],
      },
      overview: {
        id: 'what-is-coil',
        title: 'Qu’est-ce que Coil ?',
        content: [
          '**Coil, présenté sur le Mac App Store sous le nom « Coil - Local AI Harness », est un harnais d’agent : une couche qui exécute des modèles de langage à poids ouverts sur Apple silicon et décide quel modèle traite chaque requête.** La page le décrit comme « a local agent harness that shows its work ». Il est publié sous la marque Silo Systems ; le vendeur sur l’App Store est Omar Quddusi.',
          'La conception comporte deux niveaux. Un routeur rapide répond aux tours simples ou les aiguille, et un modèle de travail plus puissant prend les plus difficiles ; le tableau de résidence indique quels modèles sont chargés, épinglés ou évincés selon votre budget mémoire. L’éditeur affirme que ce n’est pas un chatbot cloud et qu’il n’exécute pas de commandes shell sans restriction. Le même éditeur vend une seconde application Mac, Matadoor.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Coil n’est vendu que sur le Mac App Store ; il n’existe pas de téléchargement direct.**',
        ],
        columns: ['Canal', 'Lien'],
        rows: [
          { 'Canal': 'Mac App Store (macOS 14+)', 'Lien': '[Coil - Local AI Harness](https://apps.apple.com/fr/app/id6788070684)' },
          { 'Canal': 'Site web', 'Lien': '[ohmslaw.net/apps/coil](https://ohmslaw.net/apps/coil)' },
          { 'Canal': 'Politique de confidentialité', 'Lien': '[ohmslaw.net/apps/coil/privacy](https://ohmslaw.net/apps/coil/privacy)' },
          { 'Canal': 'Assistance', 'Lien': '[ohmslaw.net/apps/coil/support](https://ohmslaw.net/apps/coil/support)' },
        ],
        note: 'Version testée : 1.16.0, indiquée sur l’App Store comme mise à jour trois jours avant cette vérification ; la fiche n’affiche pas l’année, PromptQuorum la date donc du 20 octobre 2026, dernière mise à jour du projet au moment de la vérification. L’application pèse 14.6 Mo ; les poids des modèles sont un téléchargement distinct. Aucun dépôt de code ni version pour Windows, Linux, Android ou iPhone n’a été trouvé.',
      },
      requirements: {
        id: 'requirements',
        title: 'Ce qu’il vous faut',
        content: [
          '**Coil exige un Mac Apple silicon, macOS 14.0 ou plus récent et au moins 16 Go de mémoire unifiée ; la fiche recommande 36 Go pour le niveau du modèle de travail puissant.**',
        ],
        columns: ['Élément', 'Selon les sources'],
        rows: [
          { 'Élément': 'Puce et mémoire', 'Selon les sources': 'Apple silicon, 16 Go ou plus' },
          { 'Élément': 'Système d’exploitation', 'Selon les sources': 'macOS 14.0 ou plus récent' },
          { 'Élément': 'Téléchargements au premier lancement', 'Selon les sources': 'Poids de chat depuis Hugging Face, après accord' },
          { 'Élément': 'Modèle d’embeddings', 'Selon les sources': 'Téléchargé au premier lancement' },
        ],
        note: 'La page d’assistance ne donne aucun chiffre de disque et ne nomme ni modèles ni tailles de téléchargement. Les modèles non testés par l’éditeur sont estimés d’après la taille et le format publiés, jamais choisis par défaut et demandent une confirmation supplémentaire.',
      },
      pricing: {
        id: 'pricing',
        title: 'Tarif',
        content: [
          '**Coil est un achat unique à 17,99 € sur le magasin français, sans abonnement ni achats intégrés.** Le partage familial couvre jusqu’à six membres.',
        ],
        columns: ['Magasin', 'Prix'],
        rows: [
          { 'Magasin': 'France, Allemagne, Espagne', 'Prix': '17,99 €' },
          { 'Magasin': 'États-Unis', 'Prix': '$14.99' },
          { 'Magasin': 'Japon', 'Prix': '¥2,500' },
          { 'Magasin': 'Brésil', 'Prix': 'R$ 99,90' },
          { 'Magasin': 'Corée du Sud', 'Prix': '₩25,000' },
        ],
        note: 'Relevé sur la page App Store de chaque pays le 24 octobre 2026 ; les prix sont fixés par le magasin et peuvent changer. Aucun essai gratuit n’est mentionné. Si vous activez Bring Your Own Key, s’ajoute ce que facture le fournisseur choisi.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque point ci-dessous provient de la page de l’éditeur ou de la description App Store.**',
        ],
        items: [
          '**Routeur et modèle de travail.** Un petit modèle traite les tours rapides et un plus puissant le travail difficile.',
          '**Reçus de routage.** Chaque réponse indique modèle, niveau, rôle, confiance et vitesse ; les reçus de trace sont exportables et conservent empreintes et résultats, pas le texte des fichiers.',
          '**Aperçu de l’itinéraire.** Réglé sur Toujours, Ambigu ou Jamais, il montre destination, résidence du modèle, raison, tailles de contexte et périmètre des outils avant l’exécution.',
          '**Outils d’espace de travail contrôlés.** Lire, écrire, modifier et un shell en lecture seule et borné, limités à un dossier, avec les modes de politique inspection seule, vérification des modifications et confirmation à chaque outil.',
          '**Carte de l’espace de travail et wiki.** Les types, protocoles et fonctions Swift sont tracés sous forme de graphe ; les pages de wiki sont rédigées mais écrites seulement après approbation.',
          '**Mémoire locale.** Les conversations sont condensées dans un magasin où vous pouvez chercher, épingler et supprimer ; la version 1.16.0 a ajouté l’usage de la mémoire enregistrée dans les réponses.',
          '**Catalogue de modèles signé.** La version 1.13.0 a ajouté un catalogue signé avec vérification de chaque fichier de modèle.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et usage du réseau',
        content: [
          '**La politique de confidentialité (version 1.2, en vigueur depuis le 23 septembre 2026) indique que Coil ne collecte rien sur vous, n’a ni compte, ni analytique, ni télémétrie, et qu’aucun de vos contenus n’atteint Silo Systems.** L’étiquette de l’App Store indique « Données non collectées », ce qu’Apple précise être une déclaration du développeur.',
          'La politique nomme quatre flux réseau : téléchargements de modèles depuis Hugging Face, trafic de mises à jour de l’App Store, une vérification facultative du catalogue de modèles, désactivée par défaut, qui ne télécharge qu’un fichier signé depuis ohmslaw.net, et Bring Your Own Key. Lorsque cette dernière option est active, votre message et le contexte construit, comme souvenirs et extraits, partent directement vers le fournisseur que vous configurez (OpenAI, Anthropic, Gemini ou OpenRouter, d’après les notes de l’App Store) ; la clé est conservée dans le trousseau macOS, et Ollama sur votre propre machine garde les requêtes sur votre réseau. Supprimer l’application n’efface pas vos données de son conteneur.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations de l’éditeur. PromptQuorum n’a audité ni l’application ni son trafic réseau.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s’adresse',
        items: [
          '**Les propriétaires d’un Mac avec 16 Go ou plus** qui veulent un agent sur l’appareil indiquant quel modèle a répondu.',
          '**Ceux qui veulent approuver avant toute modification de fichier,** limitée à un dossier.',
          '**Les acheteurs qui préfèrent un prix unique** à un abonnement.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité et vitesse en pratique.** PromptQuorum n’a pas exécuté Coil, et les sources ne donnent ni chiffres de performance ni noms de modèles.',
          '**Licence et code.** Aucune n’est indiquée et aucun dépôt n’a été trouvé : le code ne peut pas être inspecté.',
          '**Historique.** L’App Store affiche trop peu d’évaluations pour une note, et l’historique de versions visible commence le 8 juillet 2026.',
          '**Affirmations de confidentialité.** Les déclarations sur l’absence de télémétrie et l’usage hors ligne n’ont pas été vérifiées sur le trafic réseau.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'Application': '[Goose](/fr/power-local-llm/goose-review)', 'Plateformes': 'macOS, Windows, Linux', 'Prix / licence': 'Gratuit / Apache-2.0', 'Différence clé': 'Agent open source pour le code et l’automatisation ; fonctionne avec des modèles locaux ou cloud' },
          { 'Application': '[Agent Zero](/fr/power-local-llm/agent-zero-review)', 'Plateformes': 'macOS, Windows, Linux', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Agent autonome open source minimal capable de coder' },
          { 'Application': '[OpenClaw](/fr/power-local-llm/openclaw-review)', 'Plateformes': 'macOS, Windows, Linux', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Framework d’orchestration open source pour les workflows d’agents' },
        ],
        note: 'Les informations sur les concurrents évoluent souvent ; vérifiez prix, licence et plateformes actuels sur la fiche de chaque application.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Coil fonctionne-t-il hors ligne ?',
            a: 'D’après la politique de confidentialité, oui une fois les poids de chat et le modèle d’embeddings téléchargés ; seul le mode cloud a besoin d’internet pour répondre.',
          },
          {
            q: 'Coil peut-il exécuter des commandes sur mon Mac ?',
            a: 'L’éditeur dit qu’il n’exécute pas de commandes shell sans restriction. Son shell est en lecture seule et borné, et Écrire et Modifier montrent d’abord un aperçu ou un diff.',
          },
          {
            q: 'Puis-je utiliser ma propre clé d’API ?',
            a: 'Oui, comme mode facultatif désactivé par défaut ; la version 1.12.0 l’a ajouté pour OpenAI, Anthropic, Gemini et OpenRouter.',
          },
          {
            q: 'Existe-t-il une version iPhone ou Windows ?',
            a: 'Aucune n’a été trouvée ; la page ne mentionne que Mac, macOS 14 ou plus récent, sur Apple silicon.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Coil est une application Mac à achat unique qui, selon son éditeur, garde les modèles à poids ouverts et vos données sur la machine, répartit le travail entre un routeur et un modèle plus puissant et affiche un reçu par réponse, avec des outils de fichiers limités à un dossier approuvé. Elle a été mise à jour trois jours avant cette vérification et dispose d’une politique de confidentialité claire. En face : licence non indiquée, Mac uniquement, 16 Go ou plus requis, trop peu d’évaluations pour une note, et chaque affirmation sur le comportement et la confidentialité vient de l’éditeur. Elle convient à ceux qui apprécient un routage transparent et des demandes d’approbation ; ceux qui veulent du code ouvert ou d’autres systèmes peuvent comparer [Goose](/fr/power-local-llm/goose-review) ou [Agent Zero](/fr/power-local-llm/agent-zero-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Coil sur ohmslaw.net](https://ohmslaw.net/apps/coil) — page de l’éditeur : description, fonctions, prix et plateforme, consultée le 24 octobre 2026.',
          '[Politique de confidentialité de Coil](https://ohmslaw.net/apps/coil/privacy) et [page d’assistance](https://ohmslaw.net/apps/coil/support) — traitement des données, flux réseau, téléchargements de modèles et outils d’espace de travail.',
          '[Coil sur le Mac App Store](https://apps.apple.com/fr/app/id6788070684) — historique des versions, configuration requise, taille, classification d’âge et étiquette de confidentialité du développeur.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Goose](/fr/power-local-llm/goose-review) — un agent open source, local d’abord, pour le code et l’automatisation.',
          '[Test d’Agent Zero](/fr/power-local-llm/agent-zero-review) — un agent autonome minimal capable de coder.',
          '[Test d’OpenClaw](/fr/power-local-llm/openclaw-review) — un framework d’orchestration pour les workflows d’agents.',
          '[LLM locaux pour le code et le développement : comparatif](/fr/power-local-llm/local-llm-code-development-compared) — le comparatif de la catégorie des outils de code et d’agents.',
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
    theme: 'Overview & Reference',
    heroImage: '/images/coil-review-hero-ja.webp',
    title: 'Coilレビュー：どのモデルが答えたかを示すMac用エージェントハーネス',
    seoTitle: 'Coilレビュー：ルーティングレシート付きMac用ハーネス',
    intro:
      'Coilは、Silo SystemsがMac App Storeで提供するアプリです。公式ページによると、各ターンを端末上の高速なルーターモデルか、より強力なワーカーモデルに振り分け、返信ごとにルーティングレシートを表示し、選んだフォルダのファイルに触れる前に確認を求めます。本レビューは、2026年10月24日に確認した開発元のサイト、プライバシーポリシー、App Storeの掲載内容に基づきます。',
    metaDescription:
      'Coilレビュー：端末上のルーターとワーカーモデル、ルーティングレシート、承認制フォルダツールを備えたMac専用アプリ。価格、必要環境、未確認点。',
    twitterDescription:
      'Coilレビュー：2つの端末内モデルにターンを振り分け、返信ごとにレシートを示すMac専用ハーネス。必要環境、価格、未確認点。',
    audience:
      'Apple siliconのMacを使っていて、Coilに必要な環境、価格、フォルダツールとプライバシー主張の仕組み、情報源が確認していない点を知りたい方。',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Coil レビュー',
    targetKeywords: [
      'coil レビュー',
      'ローカル エージェント ハーネス mac',
      'オンデバイス ai エージェント mac app store',
      'ルーター ワーカー モデル',
      'coil local ai harness',
      'プライベート ai エージェント apple silicon',
    ],
    current_hardware_mentioned: ['Mac with Apple Silicon'],
    leadAnswerBlock:
      '**Coil（バージョン1.16.0、2026年10月20日更新）は、ライセンスの記載がない¥2,500のMac App Storeアプリで、開発元によると、オープンウェイトモデルをMac上で動かし、各ターンを小さなルーターとより強力なワーカーモデルに振り分けます。** 本レビューの動作とプライバシーに関する記述はすべて開発元のページに基づくもので、PromptQuorumはインストールも検証もしていません。',
    quickAnswerTop: {
      ja: {
        question: 'Coilを動かすには何が必要ですか？',
        answer:
          'App Storeの掲載によると、Apple siliconのMac、macOS 14以降、16 GB以上のユニファイドメモリが必要です。初回起動時に、同意したうえでモデルの重みをダウンロードします。',
        bullets: [
          '返信ごとにモデル、ティア、役割、信頼度、毎秒トークン数のレシートを表示します。',
          '実行前にルートをプレビューし、読み込み済みの別モデルを選ぶか、キャンセルできます。',
          'ファイルツールは選んだ1つのフォルダに限定され、書き込み前にプレビューが表示されます。',
          'モデルのダウンロード後はオフラインで動作し、任意のクラウドモードは初期設定でオフです。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Coilとは', anchor: 'what-is-coil' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '必要な環境', anchor: 'requirements' },
      { label: '料金', anchor: 'pricing' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: 'プライバシーとネットワーク利用', anchor: 'privacy' },
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
            text: 'Coilはオープンウェイトモデルを端末上で動かし、各ターンをどのモデルが処理したかを示すMac専用アプリです。',
          },
          {
            type: 'plain-terms',
            text: '小さなモデルが質問の難易度を判断し、難しいものは強力なモデルが担当します。選んだフォルダのファイルを変更する前には、アプリが確認を求めます。',
          },
        ],
        items: [
          'メンテナンス：掲載には2026年7月8日の1.2.0から10月20日の1.16.0まで15のバージョンが表示されており、活発に更新されているため、放置プロジェクトの警告は該当しません。',
          'ライセンス：記載なし。公開リポジトリも見つかりませんでした。',
          '対応範囲：Macのみ。Windows、Linux、モバイル版はありません。',
          '評価：App Storeには、スコアを表示するだけの評価数がありません。',
          '根拠：開発元のサイトとポリシー、ストアの掲載内容（2026年10月24日確認）。実機での検証は行っていません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorumはCoilをインストール・検証・ベンチマークしていません。動作、速度、プライバシーに関する記述は開発元によるものです。',
          },
        ],
      },
      overview: {
        id: 'what-is-coil',
        title: 'Coilとは',
        content: [
          '**CoilはMac App Storeで「Coil - Local AI Harness」として掲載されているエージェントハーネスです。Apple silicon上でオープンウェイトの言語モデルを動かし、各リクエストをどのモデルが処理するかを決めます。** 公式ページは「a local agent harness that shows its work」と説明しています。ブランド名はSilo Systems、App Storeの販売元はOmar Quddusiです。',
          '設計は2段構成です。高速なルーターが簡単なターンに答えるか振り分け、より強力なワーカーモデルが難しいターンを担当します。モデル常駐テーブルには、メモリ予算に対してどのモデルが読み込み済み・固定・退避されているかが表示されます。開発元は、クラウドチャットボットではなく、制限のないシェルコマンドも実行しないと述べています。同じ開発元は、もう1本のMacアプリMatadoorも販売しています。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**CoilはMac App Storeでのみ販売されており、直接ダウンロードはありません。**',
        ],
        columns: ['入手先', 'リンク'],
        rows: [
          { '入手先': 'Mac App Store（macOS 14以降）', 'リンク': '[Coil - Local AI Harness](https://apps.apple.com/jp/app/id6788070684)' },
          { '入手先': '公式サイト', 'リンク': '[ohmslaw.net/apps/coil](https://ohmslaw.net/apps/coil)' },
          { '入手先': 'プライバシーポリシー', 'リンク': '[ohmslaw.net/apps/coil/privacy](https://ohmslaw.net/apps/coil/privacy)' },
          { '入手先': 'サポート', 'リンク': '[ohmslaw.net/apps/coil/support](https://ohmslaw.net/apps/coil/support)' },
        ],
        note: '確認したバージョン：1.16.0。App Storeでは今回の確認の3日前に更新と表示されていましたが、年の記載がないため、PromptQuorumは確認時点の最新アップストリーム更新として2026年10月20日としています。アプリのサイズは14.6 MBで、モデルの重みは別途ダウンロードです。ソースリポジトリや、Windows・Linux・Android・iPhone版は見つかりませんでした。',
      },
      requirements: {
        id: 'requirements',
        title: '必要な環境',
        content: [
          '**CoilにはApple siliconのMac、macOS 14.0以降、16 GB以上のユニファイドメモリが必要で、強力なワーカーのティアには36 GBが推奨されています。**',
        ],
        columns: ['項目', '情報源の記載'],
        rows: [
          { '項目': 'チップとメモリ', '情報源の記載': 'Apple silicon、16 GB以上' },
          { '項目': 'OS', '情報源の記載': 'macOS 14.0以降' },
          { '項目': '初回起動時のダウンロード', '情報源の記載': 'チャット用の重みをHugging Faceから（同意後）' },
          { '項目': '埋め込みモデル', '情報源の記載': '初回起動時にダウンロード' },
        ],
        note: 'サポートページにはディスク容量の数値がなく、モデル名やダウンロードサイズも記載されていません。開発元が検証していないモデルは公開されているサイズと形式から見積もられ、初期選択にはならず、追加の確認が必要です。',
      },
      pricing: {
        id: 'pricing',
        title: '料金',
        content: [
          '**Coilは日本のストアで¥2,500の買い切りで、サブスクリプションもアプリ内課金もありません。** ファミリー共有は最大6人まで利用できます。',
        ],
        columns: ['ストア', '価格'],
        rows: [
          { 'ストア': '日本', '価格': '¥2,500' },
          { 'ストア': '米国', '価格': '$14.99' },
          { 'ストア': 'ドイツ・フランス・スペイン', '価格': '17,99 €' },
          { 'ストア': 'ブラジル', '価格': 'R$ 99,90' },
          { 'ストア': '韓国', '価格': '₩25,000' },
        ],
        note: '2026年10月24日に各国のApp Storeページで確認しました。価格はストアが設定するもので、変更されることがあります。無料トライアルの記載はありませんでした。Bring Your Own Keyをオンにすると、選んだプロバイダーの料金が別途かかります。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下の項目はすべて、開発元のページまたはApp Storeの説明に基づきます。**',
        ],
        items: [
          '**ルーターとワーカー。** 小さなモデルが簡単なターンを、より強力なモデルが難しい作業を担当します。',
          '**ルーティングレシート。** 返信ごとにモデル、ティア、役割、信頼度、速度を表示します。トレースレシートはエクスポートでき、ファイルの本文ではなくハッシュと結果を保持します。',
          '**ルートのプレビュー。** 「常に」「あいまいな場合」「しない」から選べ、実行前に送信先、モデルの常駐状況、理由、コンテキスト数、ツールの範囲を表示します。',
          '**確認付きワークスペースツール。** 読み取り、書き込み、編集、読み取り専用で範囲の限られたシェルを1つのフォルダに限定して提供し、ポリシーモードは「検査のみ」「変更を確認」「ツールごとに確認」です。',
          '**ワークスペースマップとWiki。** Swiftの型、プロトコル、関数をグラフで表示します。Wikiページは下書きされますが、承認後にのみ書き込まれます。',
          '**ローカルメモリ。** 会話は検索・固定・削除できるストアに要約されます。バージョン1.16.0で、保存したメモリを返信に使う機能が追加されました。',
          '**署名付きモデルカタログ。** バージョン1.13.0で、モデルファイルごとの検証を伴う署名付きカタログが追加されました。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとネットワーク利用',
        content: [
          '**プライバシーポリシー（バージョン1.2、2026年9月23日施行）は、Coilがユーザーに関する情報を収集せず、アカウント・分析・テレメトリもなく、コンテンツがSilo Systemsに届くことはないと述べています。** App Storeの表示は「データは収集されません」で、Appleはこれが開発元自身の申告であると注記しています。',
          'ポリシーは4つのネットワーク経路を挙げています。Hugging Faceからのモデルダウンロード、App Storeのアップデート通信、初期設定でオフの任意のモデルカタログ確認（ohmslaw.netから署名付きファイルのみを取得）、そしてBring Your Own Keyです。最後の機能をオンにすると、メッセージと、記憶や抜粋などCoilが組み立てたコンテキストが、設定したプロバイダー（App Storeの更新履歴ではOpenAI、Anthropic、Gemini、OpenRouter）へ直接送られます。キーはmacOSのキーチェーンに保存され、自分のマシン上のOllamaを使えばリクエストは自分のネットワーク内にとどまります。アプリを削除しても、コンテナ内のデータは削除されません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発元の主張です。PromptQuorumはアプリやそのネットワーク通信を監査していません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**16 GB以上のMacをお持ちで、** どのモデルが答えたかを示すオンデバイスのエージェントがほしい方。',
          '**ファイル変更の前に承認したい方。** 対象は1つのフォルダに限られます。',
          '**サブスクより買い切りを好む方。**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実際の品質と速度。** PromptQuorumはCoilを実行しておらず、情報源にもベンチマーク値やモデル名はありません。',
          '**ライセンスとコード。** 記載がなくリポジトリも見つからないため、コードを確認できません。',
          '**実績。** App Storeには評価スコアを出すだけの評価数がなく、表示されるバージョン履歴は2026年7月8日から始まります。',
          '**プライバシーの主張。** テレメトリなし・オフライン動作という記述は、ネットワーク通信で確認していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[Goose](/ja/power-local-llm/goose-review)', '対応プラットフォーム': 'macOS、Windows、Linux', '価格／ライセンス': '無料／Apache-2.0', '主な違い': 'コーディングと自動化向けのオープンソースエージェント。ローカルモデルもクラウドモデルも利用可能' },
          { 'アプリ': '[Agent Zero](/ja/power-local-llm/agent-zero-review)', '対応プラットフォーム': 'macOS、Windows、Linux', '価格／ライセンス': '無料／MIT', '主な違い': 'コーディング能力を備えた最小構成のオープンソース自律エージェント' },
          { 'アプリ': '[OpenClaw](/ja/power-local-llm/openclaw-review)', '対応プラットフォーム': 'macOS、Windows、Linux', '価格／ライセンス': '無料／MIT', '主な違い': 'エージェントワークフロー向けのオープンソースのオーケストレーションフレームワーク' },
        ],
        note: '競合の情報は頻繁に変わります。価格、ライセンス、対応プラットフォームは各アプリの掲載ページでご確認ください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Coilはオフラインで使えますか？',
            a: 'プライバシーポリシーによると、チャット用の重みと埋め込みモデルをダウンロードした後は可能です。返信にインターネットが必要なのはクラウドモードだけです。',
          },
          {
            q: 'CoilはMac上でコマンドを実行できますか？',
            a: '開発元は、制限のないシェルコマンドは実行しないと述べています。シェルは読み取り専用で範囲が限られており、書き込みと編集は事前にプレビューまたは差分が表示されます。',
          },
          {
            q: '自分のAPIキーは使えますか？',
            a: '使えます。初期設定でオフの任意モードで、バージョン1.12.0でOpenAI、Anthropic、Gemini、OpenRouter向けに追加されました。',
          },
          {
            q: 'iPhone版やWindows版はありますか？',
            a: '見つかりませんでした。公式ページに記載があるのは、Apple silicon搭載のMac、macOS 14以降のみです。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Coilは買い切りのMacアプリで、開発元によれば、オープンウェイトモデルとデータをマシン上にとどめ、ルーターとより強力なワーカーに作業を振り分け、返信ごとにレシートを示します。ファイルツールは承認した1つのフォルダに限定されます。今回の確認の3日前に更新されており、プライバシーポリシーも明確です。一方で、ライセンスの記載がなく、Mac専用で、16 GB以上が必要で、評価スコアを出すだけの評価数がなく、動作とプライバシーに関する主張はすべて開発元によるものです。透明なルーティングと承認プロンプトを重視するMacユーザーに向いています。オープンなコードや他のOSを求める方は、[Goose](/ja/power-local-llm/goose-review)や[Agent Zero](/ja/power-local-llm/agent-zero-review)と比較してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[ohmslaw.netのCoil](https://ohmslaw.net/apps/coil) — 開発元ページ：説明、機能、価格、対応プラットフォーム（2026年10月24日確認）。',
          '[Coilのプライバシーポリシー](https://ohmslaw.net/apps/coil/privacy)と[サポートページ](https://ohmslaw.net/apps/coil/support) — データの扱い、ネットワーク経路、モデルのダウンロード、ワークスペースツール。',
          '[Mac App StoreのCoil](https://apps.apple.com/jp/app/id6788070684) — バージョン履歴、必要環境、サイズ、年齢区分、開発元のプライバシー表示。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Gooseレビュー](/ja/power-local-llm/goose-review) — コーディングと自動化向けのローカルファーストなオープンソースエージェント。',
          '[Agent Zeroレビュー](/ja/power-local-llm/agent-zero-review) — コーディング能力を備えた最小構成の自律エージェント。',
          '[OpenClawレビュー](/ja/power-local-llm/openclaw-review) — エージェントワークフロー向けのオーケストレーションフレームワーク。',
          '[コード・開発向けローカルLLM徹底比較](/ja/power-local-llm/local-llm-code-development-compared) — コーディング・エージェントツールのカテゴリ比較。',
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
    theme: 'Overview & Reference',
    heroImage: '/images/coil-review-hero-pt.webp',
    title: 'Análise do Coil: um harness de agentes para Mac que mostra qual modelo respondeu',
    seoTitle: 'Análise do Coil: harness de agentes para Mac com recibos',
    intro:
      'O Coil é um app da Mac App Store da Silo Systems que, segundo as próprias páginas, envia cada turno para um modelo roteador rápido ou para um modelo de trabalho mais forte no dispositivo, mostra um recibo de roteamento em cada resposta e pede confirmação antes de mexer em arquivos de uma pasta escolhida. Esta análise reflete o site, a política de privacidade e a página da App Store do fabricante, verificados em 24 de outubro de 2026.',
    metaDescription:
      'Análise do Coil: app só para Mac com roteador e modelo de trabalho no dispositivo, recibos de roteamento e pastas com aprovação. Preço e requisitos.',
    twitterDescription:
      'Análise do Coil: harness de agentes só para Mac que divide os turnos entre dois modelos locais e mostra um recibo por resposta. Requisitos, preço e o que não foi verificado.',
    audience:
      'Donos de um Mac com Apple silicon que querem saber o que o Coil exige, quanto custa, como funcionam suas ferramentas de pasta e suas alegações de privacidade e o que as fontes deixam sem confirmação.',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Coil',
    targetKeywords: [
      'análise do coil',
      'harness de agentes local mac',
      'agente de ia no dispositivo mac app store',
      'modelo roteador e de trabalho',
      'coil local ai harness',
      'agente de ia privado apple silicon',
    ],
    current_hardware_mentioned: ['Mac with Apple Silicon'],
    leadAnswerBlock:
      '**O Coil (versão 1.16.0, atualizada em 20 de outubro de 2026) é um app da Mac App Store de R$ 99,90, sem licença informada, que, segundo o fabricante, executa modelos de pesos abertos no seu Mac e divide cada turno entre um roteador pequeno e um modelo de trabalho mais forte.** Tudo o que esta análise diz sobre comportamento e privacidade vem das páginas do próprio fabricante; a PromptQuorum não instalou nem testou o app.',
    quickAnswerTop: {
      pt: {
        question: 'O que preciso para executar o Coil?',
        answer:
          'Segundo a página da App Store, um Mac com Apple silicon, macOS 14 ou mais recente e pelo menos 16 GB de memória unificada. A primeira execução baixa pesos de modelos depois que você concorda.',
        bullets: [
          'Mostra um recibo em cada resposta: modelo, nível, papel, confiança e tokens por segundo.',
          'Permite pré-visualizar a rota antes de executar e escolher outro modelo carregado ou cancelar.',
          'Limita as ferramentas de arquivos a uma pasta que você escolhe e mostra uma prévia antes de qualquer gravação.',
          'Funciona offline depois do download do modelo; um modo em nuvem opcional vem desativado.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Coil?', anchor: 'what-is-coil' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'O que você precisa', anchor: 'requirements' },
      { label: 'Preço', anchor: 'pricing' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Privacidade e uso da rede', anchor: 'privacy' },
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
            text: 'O Coil é um app só para Mac que executa modelos de pesos abertos no dispositivo e mostra qual modelo atendeu cada turno.',
          },
          {
            type: 'plain-terms',
            text: 'Um modelo pequeno decide se a pergunta é rápida ou difícil, um modelo mais forte fica com as difíceis e o app pede confirmação antes de alterar arquivos da pasta que você escolheu.',
          },
        ],
        items: [
          'Manutenção: a página mostra 15 versões, da 1.2.0 em 8 de julho à 1.16.0 em 20 de outubro de 2026; o app é atualizado ativamente e o aviso de projeto abandonado não se aplica.',
          'Licença: não informada; nenhum repositório público foi encontrado.',
          'Alcance: só Mac; não há versão para Windows, Linux ou celular.',
          'Avaliações: a App Store mostra poucas avaliações para exibir uma nota.',
          'Base: o site e a política do fabricante e a página da loja, lidos em 24 de outubro de 2026, sem teste prático.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A PromptQuorum não instalou, testou nem mediu o Coil. As afirmações sobre comportamento, velocidade e privacidade são do próprio fabricante.',
          },
        ],
      },
      overview: {
        id: 'what-is-coil',
        title: 'O que é o Coil?',
        content: [
          '**O Coil, listado na Mac App Store como “Coil - Local AI Harness”, é um harness de agentes: uma camada que executa modelos de linguagem de pesos abertos em Apple silicon e decide qual modelo atende cada pedido.** A página o descreve como “a local agent harness that shows its work”. Ele é publicado sob a marca Silo Systems; o vendedor na App Store é Omar Quddusi.',
          'O projeto tem dois níveis. Um roteador rápido responde ou encaminha os turnos simples, e um modelo de trabalho mais forte cuida dos difíceis; a tabela de residência mostra quais modelos estão carregados, fixados ou removidos em relação ao seu orçamento de memória. O fabricante diz que não é um chatbot em nuvem e que não executa comandos de shell irrestritos. O mesmo fabricante vende um segundo app para Mac, o Matadoor.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Coil é vendido apenas pela Mac App Store; não há download direto.**',
        ],
        columns: ['Canal', 'Link'],
        rows: [
          { 'Canal': 'Mac App Store (macOS 14+)', 'Link': '[Coil - Local AI Harness](https://apps.apple.com/br/app/id6788070684)' },
          { 'Canal': 'Site', 'Link': '[ohmslaw.net/apps/coil](https://ohmslaw.net/apps/coil)' },
          { 'Canal': 'Política de privacidade', 'Link': '[ohmslaw.net/apps/coil/privacy](https://ohmslaw.net/apps/coil/privacy)' },
          { 'Canal': 'Suporte', 'Link': '[ohmslaw.net/apps/coil/support](https://ohmslaw.net/apps/coil/support)' },
        ],
        note: 'Versão analisada: 1.16.0, que a App Store mostrava como atualizada três dias antes desta verificação; a página não informa o ano, então a PromptQuorum a data em 20 de outubro de 2026, a atualização mais recente do projeto na hora da verificação. O app tem 14.6 MB; os pesos dos modelos são um download separado. Não foi encontrado repositório de código nem versão para Windows, Linux, Android ou iPhone.',
      },
      requirements: {
        id: 'requirements',
        title: 'O que você precisa',
        content: [
          '**O Coil exige um Mac com Apple silicon, macOS 14.0 ou mais recente e pelo menos 16 GB de memória unificada; para o nível do modelo de trabalho forte, a página recomenda 36 GB.**',
        ],
        columns: ['Item', 'Segundo as fontes'],
        rows: [
          { 'Item': 'Chip e memória', 'Segundo as fontes': 'Apple silicon, 16 GB ou mais' },
          { 'Item': 'Sistema operacional', 'Segundo as fontes': 'macOS 14.0 ou mais recente' },
          { 'Item': 'Downloads na primeira execução', 'Segundo as fontes': 'Pesos de chat do Hugging Face, após consentimento' },
          { 'Item': 'Modelo de embeddings', 'Segundo as fontes': 'Baixado na primeira execução' },
        ],
        note: 'A página de suporte não traz valores de disco nem nomeia modelos ou tamanhos de download. Modelos que o fabricante não testou são estimados pelo tamanho e formato publicados, nunca são escolhidos por padrão e exigem uma confirmação extra.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preço',
        content: [
          '**O Coil é uma compra única de R$ 99,90 na loja brasileira, sem assinatura e sem compras dentro do app.** O Compartilhamento Familiar cobre até seis membros.',
        ],
        columns: ['Loja', 'Preço'],
        rows: [
          { 'Loja': 'Brasil', 'Preço': 'R$ 99,90' },
          { 'Loja': 'Estados Unidos', 'Preço': '$14.99' },
          { 'Loja': 'Alemanha, França, Espanha', 'Preço': '17,99 €' },
          { 'Loja': 'Japão', 'Preço': '¥2,500' },
          { 'Loja': 'Coreia do Sul', 'Preço': '₩25,000' },
        ],
        note: 'Lido na página da App Store de cada país em 24 de outubro de 2026; os preços são definidos pela loja e podem mudar. Nenhum teste gratuito foi mencionado. Se você ativar o Bring Your Own Key, soma-se o que o provedor escolhido cobrar.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem da página do fabricante ou da descrição da App Store.**',
        ],
        items: [
          '**Roteador e modelo de trabalho.** Um modelo pequeno atende os turnos rápidos e um mais forte cuida do trabalho difícil.',
          '**Recibos de roteamento.** Cada resposta mostra modelo, nível, papel, confiança e velocidade; os recibos de rastreamento podem ser exportados e guardam hashes e resultados, não o texto dos arquivos.',
          '**Prévia da rota.** Com as opções Sempre, Ambíguo ou Nunca, mostra destino, residência do modelo, motivo, contagens de contexto e escopo das ferramentas antes de executar o pedido.',
          '**Ferramentas de workspace revisadas.** Ler, gravar, editar e um shell somente leitura e limitado, restritos a uma pasta, com os modos de política só inspecionar, revisar alterações e perguntar a cada ferramenta.',
          '**Mapa do workspace e wiki.** Tipos, protocolos e funções em Swift são desenhados como um grafo; as páginas da wiki são redigidas, mas só gravadas depois da aprovação.',
          '**Memória local.** As conversas são resumidas em um repositório que você pode pesquisar, fixar e apagar; a versão 1.16.0 adicionou o uso da memória salva nas respostas.',
          '**Catálogo de modelos assinado.** A versão 1.13.0 adicionou um catálogo assinado com verificação de cada arquivo de modelo.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e uso da rede',
        content: [
          '**A política de privacidade (versão 1.2, em vigor desde 23 de setembro de 2026) diz que o Coil não coleta nada sobre você, não tem conta, análise nem telemetria e que nenhum conteúdo seu chega à Silo Systems.** O rótulo da App Store diz “Dados não coletados”, o que a Apple observa ser uma declaração do próprio desenvolvedor.',
          'A política cita quatro caminhos de rede: downloads de modelos do Hugging Face, tráfego de atualização da App Store, uma verificação opcional do catálogo de modelos, desativada por padrão, que só baixa um arquivo assinado de ohmslaw.net, e o Bring Your Own Key. Com este último ativado, sua mensagem e o contexto montado, como memórias e trechos, vão diretamente ao provedor que você configurar (OpenAI, Anthropic, Gemini ou OpenRouter, segundo as notas da App Store); a chave fica no Chaveiro do macOS, e o Ollama na sua própria máquina mantém os pedidos na sua rede. Remover o app não apaga seus dados do contêiner.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São afirmações do fabricante. A PromptQuorum não auditou o app nem o tráfego de rede.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Donos de Mac com 16 GB ou mais** que querem um agente no dispositivo que informe qual modelo respondeu.',
          '**Pessoas que querem aprovar antes de alterações em arquivos,** limitadas a uma pasta.',
          '**Compradores que preferem preço único** a assinatura.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade e velocidade na prática.** A PromptQuorum não executou o Coil, e as fontes não trazem números de benchmark nem nomes de modelos.',
          '**Licença e código.** Nenhuma é informada e nenhum repositório foi encontrado, então o código não pode ser inspecionado.',
          '**Histórico.** A App Store mostra poucas avaliações para uma nota, e o histórico de versões visível começa em 8 de julho de 2026.',
          '**Alegações de privacidade.** As afirmações sobre ausência de telemetria e uso offline não foram conferidas com o tráfego de rede.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[Goose](/pt/power-local-llm/goose-review)', 'Plataformas': 'macOS, Windows, Linux', 'Preço / licença': 'Grátis / Apache-2.0', 'Diferença principal': 'Agente de código aberto para programação e automação; funciona com modelos locais ou em nuvem' },
          { 'App': '[Agent Zero](/pt/power-local-llm/agent-zero-review)', 'Plataformas': 'macOS, Windows, Linux', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Agente autônomo mínimo de código aberto com capacidade de programação' },
          { 'App': '[OpenClaw](/pt/power-local-llm/openclaw-review)', 'Plataformas': 'macOS, Windows, Linux', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Framework de orquestração de código aberto para fluxos de trabalho de agentes' },
        ],
        note: 'Os dados dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Coil funciona offline?',
            a: 'Segundo a política de privacidade, sim, depois que os pesos de chat e o modelo de embeddings forem baixados; só o modo em nuvem precisa de internet para responder.',
          },
          {
            q: 'O Coil pode executar comandos no meu Mac?',
            a: 'O fabricante diz que ele não executa comandos de shell irrestritos. O shell é somente leitura e limitado, e Gravar e Editar mostram antes uma prévia ou um diff.',
          },
          {
            q: 'Posso usar minha própria chave de API?',
            a: 'Sim, como modo opcional desativado por padrão; a versão 1.12.0 o adicionou para OpenAI, Anthropic, Gemini e OpenRouter.',
          },
          {
            q: 'Existe versão para iPhone ou Windows?',
            a: 'Nenhuma foi encontrada; a página lista apenas Mac, macOS 14 ou mais recente, em Apple silicon.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O Coil é um app de Mac de compra única que, segundo o fabricante, mantém modelos de pesos abertos e seus dados na máquina, divide o trabalho entre um roteador e um modelo mais forte e mostra um recibo por resposta, com ferramentas de arquivos limitadas a uma pasta aprovada. Foi atualizado três dias antes desta verificação e tem uma política de privacidade clara. Em contrapartida: licença não informada, só Mac, exige 16 GB ou mais, poucas avaliações para uma nota e toda afirmação sobre comportamento e privacidade vem do fabricante. Serve para donos de Mac que valorizam roteamento transparente e pedidos de aprovação; quem quer código aberto ou outros sistemas pode comparar [Goose](/pt/power-local-llm/goose-review) ou [Agent Zero](/pt/power-local-llm/agent-zero-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Coil em ohmslaw.net](https://ohmslaw.net/apps/coil) — página do fabricante: descrição, recursos, preço e plataforma, verificada em 24 de outubro de 2026.',
          '[Política de privacidade do Coil](https://ohmslaw.net/apps/coil/privacy) e [página de suporte](https://ohmslaw.net/apps/coil/support) — tratamento de dados, caminhos de rede, downloads de modelos e ferramentas de workspace.',
          '[Coil na Mac App Store](https://apps.apple.com/br/app/id6788070684) — histórico de versões, requisitos, tamanho, classificação etária e o rótulo de privacidade do desenvolvedor.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Goose](/pt/power-local-llm/goose-review) — um agente de código aberto, local em primeiro lugar, para programação e automação.',
          '[Análise do Agent Zero](/pt/power-local-llm/agent-zero-review) — um agente autônomo mínimo com capacidade de programação.',
          '[Análise do OpenClaw](/pt/power-local-llm/openclaw-review) — um framework de orquestração para fluxos de trabalho de agentes.',
          '[LLMs locais para código e desenvolvimento: comparativo](/pt/power-local-llm/local-llm-code-development-compared) — o comparativo da categoria de ferramentas de programação e agentes.',
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
    theme: 'Overview & Reference',
    heroImage: '/images/coil-review-hero-ar.webp',
    title: 'مراجعة Coil: إطار وكيل لنظام Mac يُظهر أي نموذج أجاب',
    seoTitle: 'مراجعة Coil: إطار وكيل لـ Mac مع إيصالات توجيه',
    intro:
      'Coil تطبيق من Mac App Store تقدّمه Silo Systems، وهو بحسب صفحاته الرسمية يرسل كل جولة إما إلى نموذج موجّه سريع أو إلى نموذج عامل أقوى على الجهاز، ويعرض إيصال توجيه مع كل رد، ويطلب الموافقة قبل لمس الملفات في مجلد تختاره. تعكس هذه المراجعة موقع الجهة المطوّرة وسياسة الخصوصية وصفحة App Store كما جرى فحصها في 24 أكتوبر 2026.',
    metaDescription:
      'مراجعة Coil: تطبيق لنظام Mac فقط بنموذج موجّه ونموذج عامل على الجهاز وإيصالات توجيه وأدوات مجلد تتطلب الموافقة. السعر والمتطلبات والنقاط غير المؤكدة.',
    twitterDescription:
      'مراجعة Coil: إطار وكيل لنظام Mac فقط يوزّع الجولات بين نموذجين على الجهاز ويعرض إيصالًا لكل رد. المتطلبات والسعر وما لم يُتحقق منه.',
    audience:
      'أصحاب أجهزة Mac بمعالج Apple silicon الذين يريدون معرفة ما يحتاجه Coil وكم يكلّف وكيف تعمل أدوات المجلد وادعاءات الخصوصية وما تتركه المصادر دون تأكيد.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Coil',
    targetKeywords: [
      'مراجعة coil',
      'إطار وكيل محلي mac',
      'وكيل ذكاء اصطناعي على الجهاز mac app store',
      'نموذج موجّه ونموذج عامل',
      'coil local ai harness',
      'وكيل ذكاء اصطناعي خاص apple silicon',
    ],
    current_hardware_mentioned: ['Mac with Apple Silicon'],
    leadAnswerBlock:
      '**Coil (الإصدار 1.16.0، حُدّث في 20 أكتوبر 2026) تطبيق من Mac App Store بسعر $14.99 دون ترخيص معلن، يشغّل بحسب المطوّر نماذج مفتوحة الأوزان على جهاز Mac لديك ويوزّع كل جولة بين موجّه صغير ونموذج عامل أقوى.** كل ما تذكره هذه المراجعة عن سلوكه وخصوصيته مصدره صفحات الجهة المطوّرة نفسها؛ ولم تثبّته PromptQuorum أو تختبره.',
    quickAnswerTop: {
      ar: {
        question: 'ما الذي أحتاجه لتشغيل Coil؟',
        answer:
          'بحسب صفحة App Store: جهاز Mac بمعالج Apple silicon ونظام macOS 14 أو أحدث و16 GB على الأقل من الذاكرة الموحّدة. وفي أول تشغيل تُنزَّل أوزان النماذج بعد موافقتك.',
        bullets: [
          'يعرض إيصالًا مع كل رد: النموذج والمستوى والدور ودرجة الثقة وعدد الرموز في الثانية.',
          'يتيح معاينة المسار قبل التنفيذ واختيار نموذج محمّل آخر أو الإلغاء.',
          'يقصر أدوات الملفات على مجلد واحد تختاره ويعرض معاينة قبل أي كتابة.',
          'يعمل دون اتصال بعد تنزيل النموذج؛ ووضع السحابة الاختياري معطّل افتراضيًا.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Coil؟', anchor: 'what-is-coil' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'ما تحتاجه', anchor: 'requirements' },
      { label: 'السعر', anchor: 'pricing' },
      { label: 'الميزات التي أكدتها المصادر', anchor: 'key-features' },
      { label: 'الخصوصية واستخدام الشبكة', anchor: 'privacy' },
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
            text: 'Coil تطبيق لنظام Mac فقط يشغّل نماذج مفتوحة الأوزان على الجهاز ويُظهر أي نموذج عالج كل جولة.',
          },
          {
            type: 'plain-terms',
            text: 'يقرر نموذج صغير ما إذا كان السؤال سريعًا أم صعبًا، ويتولى نموذج أقوى الأسئلة الصعبة، ويطلب التطبيق الموافقة قبل تغيير الملفات في المجلد الذي اخترته.',
          },
        ],
        items: [
          'الصيانة: تعرض الصفحة 15 إصدارًا من 1.2.0 في 8 يوليو إلى 1.16.0 في 20 أكتوبر 2026، فالتطبيق يُحدَّث بنشاط ولا ينطبق تحذير المشروع المهجور.',
          'الترخيص: غير معلن؛ ولم يُعثر على مستودع عام.',
          'النطاق: Mac فقط؛ ولا توجد نسخة لـ Windows أو Linux أو الهاتف.',
          'التقييمات: يعرض App Store عددًا قليلًا من التقييمات لا يكفي لإظهار درجة.',
          'الأساس: موقع الجهة المطوّرة وسياستها وصفحة المتجر، قُرئت في 24 أكتوبر 2026، دون اختبار عملي.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'لم تثبّت PromptQuorum تطبيق Coil ولم تختبره ولم تقِس أداءه. العبارات المتعلقة بالسلوك والسرعة والخصوصية أدناه من الجهة المطوّرة نفسها.',
          },
        ],
      },
      overview: {
        id: 'what-is-coil',
        title: 'ما هو Coil؟',
        content: [
          '**Coil، المدرج في Mac App Store باسم «Coil - Local AI Harness»، إطار وكيل: طبقة تشغّل نماذج لغوية مفتوحة الأوزان على Apple silicon وتقرر أي نموذج يتولى كل طلب.** تصفه الصفحة بأنه «a local agent harness that shows its work». يُنشر تحت علامة Silo Systems، والبائع في App Store هو Omar Quddusi.',
          'للتصميم مستويان. موجّه سريع يجيب عن الجولات البسيطة أو يحوّلها، ونموذج عامل أقوى يتولى الأصعب؛ ويبيّن جدول الإقامة أي النماذج محمّلة أو مثبّتة أو مُخرَجة مقابل ميزانية ذاكرتك. تقول الجهة المطوّرة إنه ليس روبوت دردشة سحابيًا ولا ينفّذ أوامر shell غير مقيّدة. وتبيع الجهة نفسها تطبيق Mac ثانيًا هو Matadoor.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُباع Coil عبر Mac App Store فقط؛ ولا يوجد تنزيل مباشر.**',
        ],
        columns: ['القناة', 'الرابط'],
        rows: [
          { 'القناة': 'Mac App Store (macOS 14+)', 'الرابط': '[Coil - Local AI Harness](https://apps.apple.com/us/app/id6788070684)' },
          { 'القناة': 'الموقع', 'الرابط': '[ohmslaw.net/apps/coil](https://ohmslaw.net/apps/coil)' },
          { 'القناة': 'سياسة الخصوصية', 'الرابط': '[ohmslaw.net/apps/coil/privacy](https://ohmslaw.net/apps/coil/privacy)' },
          { 'القناة': 'الدعم', 'الرابط': '[ohmslaw.net/apps/coil/support](https://ohmslaw.net/apps/coil/support)' },
        ],
        note: 'الإصدار المراجَع: 1.16.0، وكان App Store يعرضه محدَّثًا قبل ثلاثة أيام من هذا الفحص؛ ولا تذكر الصفحة السنة، لذا تؤرّخه PromptQuorum في 20 أكتوبر 2026، وهو آخر تحديث للمشروع وقت الفحص. حجم التطبيق 14.6 MB، وأوزان النماذج تنزيل منفصل. لم يُعثر على مستودع للشيفرة ولا على نسخة لـ Windows أو Linux أو Android أو iPhone.',
      },
      requirements: {
        id: 'requirements',
        title: 'ما تحتاجه',
        content: [
          '**يحتاج Coil إلى جهاز Mac بمعالج Apple silicon ونظام macOS 14.0 أو أحدث و16 GB على الأقل من الذاكرة الموحّدة؛ وتوصي الصفحة بـ 36 GB لمستوى النموذج العامل القوي.**',
        ],
        columns: ['البند', 'بحسب المصادر'],
        rows: [
          { 'البند': 'المعالج والذاكرة', 'بحسب المصادر': 'Apple silicon، 16 GB أو أكثر' },
          { 'البند': 'نظام التشغيل', 'بحسب المصادر': 'macOS 14.0 أو أحدث' },
          { 'البند': 'التنزيلات عند أول تشغيل', 'بحسب المصادر': 'أوزان الدردشة من Hugging Face بعد الموافقة' },
          { 'البند': 'نموذج التضمين', 'بحسب المصادر': 'يُنزَّل عند أول تشغيل' },
        ],
        note: 'لا تذكر صفحة الدعم أرقامًا للقرص ولا تسمّي نماذج أو أحجام تنزيل. أما النماذج التي لم تختبرها الجهة المطوّرة فتُقدَّر متطلباتها من الحجم والصيغة المنشورين، ولا تُختار افتراضيًا، وتتطلب تأكيدًا إضافيًا.',
      },
      pricing: {
        id: 'pricing',
        title: 'السعر',
        content: [
          '**Coil عملية شراء لمرة واحدة بسعر $14.99 دون اشتراك ودون مشتريات داخل التطبيق.** وتشمل المشاركة العائلية ما يصل إلى ستة أفراد.',
        ],
        columns: ['المتجر', 'السعر'],
        rows: [
          { 'المتجر': 'الولايات المتحدة', 'السعر': '$14.99' },
          { 'المتجر': 'ألمانيا وفرنسا وإسبانيا', 'السعر': '17,99 €' },
          { 'المتجر': 'اليابان', 'السعر': '¥2,500' },
          { 'المتجر': 'البرازيل', 'السعر': 'R$ 99,90' },
          { 'المتجر': 'كوريا الجنوبية', 'السعر': '₩25,000' },
        ],
        note: 'قُرئت من صفحة App Store لكل بلد في 24 أكتوبر 2026؛ والأسعار يحددها المتجر وقد تتغير. ولم يُذكر وجود تجربة مجانية. وإذا فعّلت Bring Your Own Key فسيُضاف ما يتقاضاه المزوّد الذي تختاره.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل بند أدناه مصدره صفحة الجهة المطوّرة أو وصف App Store.**',
        ],
        items: [
          '**الموجّه والنموذج العامل.** يتولى نموذج صغير الجولات السريعة ونموذج أقوى العمل الصعب.',
          '**إيصالات التوجيه.** يعرض كل رد النموذج والمستوى والدور ودرجة الثقة والسرعة؛ ويمكن تصدير إيصالات التتبع وهي تحتفظ بالبصمات والنتائج لا بنص الملفات.',
          '**معاينة المسار.** عند ضبطها على دائمًا أو عند الالتباس أو أبدًا، تعرض الوجهة وإقامة النموذج والسبب وأعداد السياق ونطاق الأدوات قبل تنفيذ الطلب.',
          '**أدوات مساحة عمل خاضعة للمراجعة.** قراءة وكتابة وتحرير ومحيط أوامر للقراءة فقط ومحدود، مقصورة على مجلد واحد، مع أوضاع سياسة هي الفحص فقط ومراجعة التغييرات والسؤال عند كل أداة.',
          '**خريطة مساحة العمل والويكي.** تُرسم أنواع Swift وبروتوكولاتها ودوالها في رسم بياني؛ وتُصاغ صفحات الويكي مسودات ولا تُكتب إلا بعد الموافقة.',
          '**ذاكرة محلية.** تُلخَّص المحادثات في مخزن يمكنك البحث فيه وتثبيت عناصره وحذفها؛ وأضاف الإصدار 1.16.0 استخدام الذاكرة المحفوظة في الردود.',
          '**كتالوج نماذج موقّع.** أضاف الإصدار 1.13.0 كتالوجًا موقّعًا مع تحقق من كل ملف نموذج.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية واستخدام الشبكة',
        content: [
          '**تقول سياسة الخصوصية (الإصدار 1.2، سارية من 23 سبتمبر 2026) إن Coil لا يجمع أي شيء عنك، وليس له حساب ولا تحليلات ولا قياس عن بُعد، وإن شيئًا من محتواك لا يصل إلى Silo Systems.** وتقول بطاقة App Store «لا تُجمع بيانات»، وتشير Apple إلى أنها إفادة من المطوّر نفسه.',
          'تذكر السياسة أربعة مسارات للشبكة: تنزيلات النماذج من Hugging Face، وحركة تحديثات App Store، وفحصًا اختياريًا لكتالوج النماذج معطّلًا افتراضيًا ولا يُنزّل سوى ملف موقّع من ohmslaw.net، وخيار Bring Your Own Key. وعند تفعيل الأخير تذهب رسالتك مع السياق المبني، مثل الذكريات والمقتطفات، مباشرة إلى المزوّد الذي تضبطه (OpenAI أو Anthropic أو Gemini أو OpenRouter بحسب ملاحظات App Store)، ويُحفظ المفتاح في سلسلة مفاتيح macOS، ويبقي Ollama على جهازك الطلبات داخل شبكتك. وحذف التطبيق لا يحذف بياناتك من حاويته.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه إفادات من الجهة المطوّرة. لم تدقق PromptQuorum التطبيق ولا حركة الشبكة الخاصة به.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**أصحاب أجهزة Mac بذاكرة 16 GB أو أكثر** الذين يريدون وكيلًا على الجهاز يُبلغهم أي نموذج أجاب.',
          '**من يريدون الموافقة قبل تغيير الملفات،** ضمن مجلد واحد.',
          '**المشترون الذين يفضلون سعرًا لمرة واحدة** على الاشتراك.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الجودة والسرعة عمليًا.** لم تشغّل PromptQuorum تطبيق Coil، ولا تقدّم المصادر أرقام اختبارات أداء ولا أسماء نماذج.',
          '**الترخيص والشيفرة.** لا يوجد ترخيص معلن ولم يُعثر على مستودع، لذا لا يمكن فحص الشيفرة.',
          '**السجل.** يعرض App Store عددًا قليلًا من التقييمات لا يكفي لدرجة، ويبدأ سجل الإصدارات الظاهر في 8 يوليو 2026.',
          '**ادعاءات الخصوصية.** لم تُقارَن عبارات غياب القياس عن بُعد والعمل دون اتصال بحركة الشبكة.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          { 'التطبيق': '[Goose](/ar/power-local-llm/goose-review)', 'المنصات': 'macOS وWindows وLinux', 'السعر / الرخصة': 'مجاني / Apache-2.0', 'الفرق الأبرز': 'وكيل مفتوح المصدر للبرمجة والأتمتة؛ يعمل مع نماذج محلية أو سحابية' },
          { 'التطبيق': '[Agent Zero](/ar/power-local-llm/agent-zero-review)', 'المنصات': 'macOS وWindows وLinux', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'وكيل مستقل مفتوح المصدر بحد أدنى من المكوّنات وقدرة على البرمجة' },
          { 'التطبيق': '[OpenClaw](/ar/power-local-llm/openclaw-review)', 'المنصات': 'macOS وWindows وLinux', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'إطار تنسيق مفتوح المصدر لسير عمل الوكلاء' },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تأكد من السعر والرخصة والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل Coil دون اتصال؟',
            a: 'بحسب سياسة الخصوصية نعم، بعد تنزيل أوزان الدردشة ونموذج التضمين؛ ووضع السحابة وحده يحتاج إلى الإنترنت للرد.',
          },
          {
            q: 'هل يستطيع Coil تنفيذ أوامر على جهاز Mac الخاص بي؟',
            a: 'تقول الجهة المطوّرة إنه لا ينفّذ أوامر shell غير مقيّدة. فالـ shell فيه للقراءة فقط ومحدود، وتعرض الكتابة والتحرير معاينة أو فرقًا قبل التنفيذ.',
          },
          {
            q: 'هل يمكنني استخدام مفتاح API الخاص بي؟',
            a: 'نعم، كوضع اختياري معطّل افتراضيًا؛ وأضافه الإصدار 1.12.0 لـ OpenAI وAnthropic وGemini وOpenRouter.',
          },
          {
            q: 'هل توجد نسخة لـ iPhone أو Windows؟',
            a: 'لم يُعثر على أي منهما؛ فالصفحة تذكر Mac فقط، مع macOS 14 أو أحدث، على Apple silicon.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Coil تطبيق Mac بسعر شراء واحد يُبقي بحسب مطوّره النماذج مفتوحة الأوزان وبياناتك على الجهاز، ويوزّع العمل بين موجّه ونموذج أقوى، ويعرض إيصالًا لكل رد، مع أدوات ملفات مقصورة على مجلد موافَق عليه. حُدّث قبل ثلاثة أيام من هذا الفحص ولديه سياسة خصوصية واضحة. في المقابل: لا ترخيص معلنًا، وMac فقط، ويتطلب 16 GB أو أكثر، وتقييماته قليلة لا تكفي لدرجة، وكل ادعاء عن السلوك والخصوصية مصدره الجهة المطوّرة. يناسب أصحاب Mac الذين يقدّرون التوجيه الشفاف وطلبات الموافقة؛ ومن يريد شيفرة مفتوحة أو أنظمة أخرى يمكنه مقارنة [Goose](/ar/power-local-llm/goose-review) أو [Agent Zero](/ar/power-local-llm/agent-zero-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Coil على ohmslaw.net](https://ohmslaw.net/apps/coil) — صفحة الجهة المطوّرة: الوصف والميزات والسعر والمنصة، فُحصت في 24 أكتوبر 2026.',
          '[سياسة خصوصية Coil](https://ohmslaw.net/apps/coil/privacy) و[صفحة الدعم](https://ohmslaw.net/apps/coil/support) — التعامل مع البيانات ومسارات الشبكة وتنزيلات النماذج وأدوات مساحة العمل.',
          '[Coil في Mac App Store](https://apps.apple.com/us/app/id6788070684) — سجل الإصدارات والمتطلبات والحجم والتصنيف العمري وبطاقة الخصوصية لدى المطوّر.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Goose](/ar/power-local-llm/goose-review) — وكيل مفتوح المصدر محلي أولًا للبرمجة والأتمتة.',
          '[مراجعة Agent Zero](/ar/power-local-llm/agent-zero-review) — وكيل مستقل بحد أدنى من المكوّنات وقدرة على البرمجة.',
          '[مراجعة OpenClaw](/ar/power-local-llm/openclaw-review) — إطار تنسيق لسير عمل الوكلاء.',
          '[مقارنة نماذج LLM المحلية للبرمجة والتطوير](/ar/power-local-llm/local-llm-code-development-compared) — مقارنة فئة أدوات البرمجة والوكلاء.',
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
    theme: 'Overview & Reference',
    heroImage: '/images/coil-review-hero-zh.webp',
    title: 'Coil 评测：会显示由哪个模型作答的 Mac 智能体框架',
    seoTitle: 'Coil 评测：仅限 Mac、带路由回执的设备端智能体框架',
    intro:
      'Coil 是 Silo Systems 在 Mac App Store 上架的应用。据其官方页面介绍，它会把每一轮对话交给设备上的快速路由模型或更强的工作模型，在每条回复后显示路由回执，并在改动你所选文件夹中的文件之前先征求同意。本评测基于 2026年10月24日核对的开发方网站、隐私政策和 App Store 页面。',
    metaDescription:
      'Coil 评测：仅限 Mac 的设备端智能体应用，含路由模型与工作模型、路由回执和需审批的文件夹工具。涵盖价格、配置要求、隐私说法与未核实事项。',
    twitterDescription:
      'Coil 评测：仅限 Mac 的智能体框架，在两个设备端模型间分配对话并为每条回复附上回执。配置要求、价格与未核实内容。',
    audience:
      '使用 Apple silicon Mac、想了解 Coil 需要什么配置、价格多少、文件夹工具和隐私说法如何运作，以及哪些说法来源未予证实的读者。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Coil 评测',
    targetKeywords: [
      'coil 评测',
      '本地智能体框架 mac',
      '设备端 ai 智能体 mac app store',
      '路由模型 工作模型',
      'coil local ai harness',
      '私密 ai 智能体 apple silicon',
    ],
    current_hardware_mentioned: ['Mac with Apple Silicon'],
    leadAnswerBlock:
      '**Coil（1.16.0 版，2026年10月20日更新）是 Mac App Store 上售价 $14.99 的应用，未标明许可证；据开发方称，它在你的 Mac 上运行开放权重模型，并把每一轮对话分给小型路由模型和更强的工作模型。** 本评测中关于其行为和隐私的所有说法均来自开发方自己的页面；PromptQuorum 未安装也未测试该应用。',
    quickAnswerTop: {
      zh: {
        question: '运行 Coil 需要什么？',
        answer:
          '据 App Store 页面，需要 Apple silicon 的 Mac、macOS 14 或更高版本以及至少 16 GB 统一内存。首次运行时会在你同意后下载模型权重。',
        bullets: [
          '每条回复都显示回执：模型、层级、角色、置信度和每秒词元数。',
          '执行前可预览路由，并选择另一个已加载的模型或取消。',
          '文件工具仅限你选定的一个文件夹，写入前会显示预览。',
          '模型下载后可离线使用；可选的云端模式默认关闭。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Coil 是什么？', anchor: 'what-is-coil' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '配置要求', anchor: 'requirements' },
      { label: '定价', anchor: 'pricing' },
      { label: '来源已证实的功能', anchor: 'key-features' },
      { label: '隐私与网络使用', anchor: 'privacy' },
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
            text: 'Coil 是仅限 Mac 的应用，在设备上运行开放权重模型，并显示每一轮由哪个模型处理。',
          },
          {
            type: 'plain-terms',
            text: '小模型先判断问题是简单还是困难，困难的交给更强的模型，应用在改动你所选文件夹里的文件之前会先征求同意。',
          },
        ],
        items: [
          '维护情况：页面显示 15 个版本，从 7月8日的 1.2.0 到 2026年10月20日的 1.16.0，更新活跃，不适用“项目停更”警告。',
          '许可证：未标明；未找到公开代码仓库。',
          '适用范围：仅限 Mac，没有 Windows、Linux 或移动版本。',
          '评分：App Store 上的评分数量太少，不显示分数。',
          '依据：开发方网站与政策以及商店页面，于2026年10月24日查阅，未做实际测试。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum 未安装、测试或测评 Coil。下文有关行为、速度和隐私的说法均来自开发方。',
          },
        ],
      },
      overview: {
        id: 'what-is-coil',
        title: 'Coil 是什么？',
        content: [
          '**Coil 在 Mac App Store 上的名称为“Coil - Local AI Harness”，是一个智能体框架：在 Apple silicon 上运行开放权重语言模型的外层程序，并决定每个请求由哪个模型处理。** 页面称其为“a local agent harness that shows its work”。它以 Silo Systems 品牌发布，App Store 上的销售方为 Omar Quddusi。',
          '设计分为两层。快速路由模型回答简单的轮次或负责分派，更强的工作模型处理较难的轮次；模型驻留表会对照你的内存预算显示哪些模型已加载、已固定或已移出。开发方称它不是云端聊天机器人，也不会运行不受限制的 shell 命令。同一开发方还销售第二款 Mac 应用 Matadoor。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Coil 仅通过 Mac App Store 销售，没有直接下载。**',
        ],
        columns: ['渠道', '链接'],
        rows: [
          { '渠道': 'Mac App Store（macOS 14+）', '链接': '[Coil - Local AI Harness](https://apps.apple.com/us/app/id6788070684)' },
          { '渠道': '官方网站', '链接': '[ohmslaw.net/apps/coil](https://ohmslaw.net/apps/coil)' },
          { '渠道': '隐私政策', '链接': '[ohmslaw.net/apps/coil/privacy](https://ohmslaw.net/apps/coil/privacy)' },
          { '渠道': '支持页面', '链接': '[ohmslaw.net/apps/coil/support](https://ohmslaw.net/apps/coil/support)' },
        ],
        note: '评测版本：1.16.0，App Store 显示其在本次核对前三天更新；页面不显示年份，因此 PromptQuorum 将其记为 2026年10月20日，即核对时的最新上游更新。应用大小为 14.6 MB，模型权重需另行下载。未找到源代码仓库，也未找到 Windows、Linux、Android 或 iPhone 版本。',
      },
      requirements: {
        id: 'requirements',
        title: '配置要求',
        content: [
          '**Coil 需要 Apple silicon 的 Mac、macOS 14.0 或更高版本以及至少 16 GB 统一内存；页面建议强力工作模型层级使用 36 GB。**',
        ],
        columns: ['项目', '来源所述'],
        rows: [
          { '项目': '芯片与内存', '来源所述': 'Apple silicon，16 GB 或以上' },
          { '项目': '操作系统', '来源所述': 'macOS 14.0 或更高版本' },
          { '项目': '首次运行的下载', '来源所述': '对话权重来自 Hugging Face，需先同意' },
          { '项目': '嵌入模型', '来源所述': '首次启动时下载' },
        ],
        note: '支持页面没有给出磁盘数据，也未列出模型名称或下载大小。开发方未测试过的模型，其需求按公开的大小和格式估算，不会被默认选中，且需额外确认。',
      },
      pricing: {
        id: 'pricing',
        title: '定价',
        content: [
          '**Coil 为一次性购买，售价 $14.99，无订阅，无应用内购买。** 家人共享最多可覆盖六位家庭成员。',
        ],
        columns: ['商店', '价格'],
        rows: [
          { '商店': '美国', '价格': '$14.99' },
          { '商店': '德国、法国、西班牙', '价格': '17,99 €' },
          { '商店': '日本', '价格': '¥2,500' },
          { '商店': '巴西', '价格': 'R$ 99,90' },
          { '商店': '韩国', '价格': '₩25,000' },
        ],
        note: '于2026年10月24日从各国 App Store 页面读取；价格由商店设定，可能变动。未提及免费试用。若开启 Bring Your Own Key，还需另付所选服务商的费用。',
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: [
          '**以下各项均来自开发方页面或 App Store 说明。**',
        ],
        items: [
          '**路由与工作模型。** 小模型处理简单轮次，更强的模型处理困难任务。',
          '**路由回执。** 每条回复显示模型、层级、角色、置信度和速度；追踪回执可导出，保留哈希和结果，不含文件文本。',
          '**路由预览。** 可设为“总是”“不确定时”或“从不”，在请求执行前显示目的地、模型驻留情况、原因、上下文数量和工具范围。',
          '**经审查的工作区工具。** 读取、写入、编辑以及只读且有边界的 shell，仅限一个文件夹，策略模式有“仅检查”“审查更改”和“每次工具都询问”。',
          '**工作区地图与知识库。** Swift 类型、协议和函数以图形展示；知识库页面先起草，经批准后才会写入。',
          '**本地记忆。** 对话被提炼进可搜索、可固定、可删除的存储；1.16.0 版新增了在回复中使用已保存记忆。',
          '**签名模型目录。** 1.13.0 版新增带逐文件模型校验的签名目录。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与网络使用',
        content: [
          '**隐私政策（1.2 版，2026年9月23日生效）称，Coil 不收集任何关于你的信息，没有账户、分析或遥测，你的内容也不会到达 Silo Systems。** App Store 标签为“未收集数据”，Apple 注明这是开发者自己的声明。',
          '政策列出四条网络路径：从 Hugging Face 下载模型、App Store 更新流量、默认关闭且只从 ohmslaw.net 下载签名文件的可选模型目录检查，以及 Bring Your Own Key。开启最后一项后，你的消息以及记忆、摘录等构建的上下文会直接发往你配置的服务商（据 App Store 更新说明为 OpenAI、Anthropic、Gemini 或 OpenRouter），密钥存放在 macOS 钥匙串中；使用你自己机器上的 Ollama 则请求留在你的网络内。删除应用不会删除其容器中的数据。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是开发方的说法。PromptQuorum 未审计该应用及其网络流量。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**内存 16 GB 或以上的 Mac 用户，** 想要一个会说明由哪个模型作答的设备端智能体。',
          '**希望在文件被改动前先批准的人，** 范围限于一个文件夹。',
          '**更喜欢一次性付费而非订阅的买家。**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**实际质量与速度。** PromptQuorum 未运行 Coil，来源中也没有基准数据或模型名称。',
          '**许可证与代码。** 未标明许可证，也未找到代码仓库，因此无法检查代码。',
          '**历史记录。** App Store 评分数量不足以显示分数，可见的版本历史从2026年7月8日开始。',
          '**隐私说法。** 无遥测和可离线使用的说法未与网络流量核对。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[Goose](/zh/power-local-llm/goose-review)', '平台': 'macOS、Windows、Linux', '价格 / 许可证': '免费 / Apache-2.0', '主要区别': '面向编程与自动化的开源智能体；可配合本地或云端模型' },
          { '应用': '[Agent Zero](/zh/power-local-llm/agent-zero-review)', '平台': 'macOS、Windows、Linux', '价格 / 许可证': '免费 / MIT', '主要区别': '具备编程能力的极简开源自主智能体' },
          { '应用': '[OpenClaw](/zh/power-local-llm/openclaw-review)', '平台': 'macOS、Windows、Linux', '价格 / 许可证': '免费 / MIT', '主要区别': '面向智能体工作流的开源编排框架' },
        ],
        note: '竞品信息变化较快；请在各应用自己的页面确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Coil 可以离线使用吗？',
            a: '据隐私政策，下载完对话权重和嵌入模型后可以；只有云端模式在回复时需要联网。',
          },
          {
            q: 'Coil 能在我的 Mac 上运行命令吗？',
            a: '开发方称它不运行不受限制的 shell 命令。其 shell 为只读且有边界，写入和编辑会先显示预览或差异。',
          },
          {
            q: '我可以使用自己的 API 密钥吗？',
            a: '可以，这是默认关闭的可选模式；1.12.0 版为 OpenAI、Anthropic、Gemini 和 OpenRouter 加入了该功能。',
          },
          {
            q: '有 iPhone 或 Windows 版本吗？',
            a: '未找到；页面只列出 Apple silicon 上的 Mac、macOS 14 或更高版本。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Coil 是一次性购买的 Mac 应用，据其开发方称，开放权重模型和你的数据都留在本机，工作在路由模型与更强的工作模型之间分配，每条回复都有回执，文件工具仅限一个已批准的文件夹。它在本次核对前三天刚更新，并有清晰的隐私政策。但另一方面：未标明许可证、仅限 Mac、需要 16 GB 或以上内存、评分数量不足以显示分数，且所有关于行为和隐私的说法都来自开发方。它适合看重透明路由和审批提示的 Mac 用户；想要开源代码或其他系统的读者可以对比 [Goose](/zh/power-local-llm/goose-review) 或 [Agent Zero](/zh/power-local-llm/agent-zero-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[ohmslaw.net 上的 Coil](https://ohmslaw.net/apps/coil) — 开发方页面：说明、功能、价格与平台，2026年10月24日查阅。',
          '[Coil 隐私政策](https://ohmslaw.net/apps/coil/privacy)与[支持页面](https://ohmslaw.net/apps/coil/support) — 数据处理、网络路径、模型下载和工作区工具。',
          '[Mac App Store 上的 Coil](https://apps.apple.com/us/app/id6788070684) — 版本历史、系统要求、大小、年龄分级和开发者的隐私标签。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Goose 评测](/zh/power-local-llm/goose-review) — 面向编程与自动化的本地优先开源智能体。',
          '[Agent Zero 评测](/zh/power-local-llm/agent-zero-review) — 具备编程能力的极简自主智能体。',
          '[OpenClaw 评测](/zh/power-local-llm/openclaw-review) — 面向智能体工作流的编排框架。',
          '[本地 LLM 代码与开发横向对比](/zh/power-local-llm/local-llm-code-development-compared) — 编程与智能体工具类别的横向对比。',
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
    theme: 'Overview & Reference',
    heroImage: '/images/coil-review-hero-ko.webp',
    title: 'Coil 리뷰: 어떤 모델이 답했는지 보여 주는 Mac용 에이전트 하니스',
    seoTitle: 'Coil 리뷰: 라우팅 영수증을 주는 Mac 에이전트',
    intro:
      'Coil은 Silo Systems가 Mac App Store에서 제공하는 앱입니다. 공식 페이지에 따르면 각 턴을 기기 안의 빠른 라우터 모델 또는 더 강력한 워커 모델에 보내고, 답변마다 라우팅 영수증을 표시하며, 선택한 폴더의 파일을 건드리기 전에 승인을 요청합니다. 이 리뷰는 2026년 10월 24일에 확인한 개발사 사이트, 개인정보 처리방침, App Store 등록 정보를 바탕으로 합니다.',
    metaDescription:
      'Coil 리뷰: 기기 내 라우터·워커 모델, 라우팅 영수증, 승인 방식 폴더 도구를 갖춘 Mac 전용 앱. 가격, 요구 사양, 미확인 사항.',
    twitterDescription:
      'Coil 리뷰: 두 기기 내 모델에 턴을 나누고 답변마다 영수증을 보여 주는 Mac 전용 하니스. 요구 사양, 가격, 미확인 사항.',
    audience:
      'Apple silicon Mac을 사용하며 Coil에 필요한 사양, 가격, 폴더 도구와 개인정보 보호 주장의 작동 방식, 출처가 확인하지 않은 내용을 알고 싶은 분.',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Coil 리뷰',
    targetKeywords: [
      'coil 리뷰',
      '로컬 에이전트 하니스 mac',
      '온디바이스 ai 에이전트 mac app store',
      '라우터 워커 모델',
      'coil local ai harness',
      '프라이빗 ai 에이전트 apple silicon',
    ],
    current_hardware_mentioned: ['Mac with Apple Silicon'],
    leadAnswerBlock:
      '**Coil(버전 1.16.0, 2026년 10월 20일 업데이트)은 라이선스가 명시되지 않은 ₩25,000짜리 Mac App Store 앱으로, 개발사에 따르면 오픈 웨이트 모델을 Mac에서 실행하고 각 턴을 작은 라우터와 더 강력한 워커 모델에 나누어 맡깁니다.** 이 리뷰의 동작과 개인정보 보호에 관한 서술은 모두 개발사 자체 페이지에서 나온 것이며, PromptQuorum은 설치하거나 테스트하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Coil을 실행하려면 무엇이 필요합니까?',
        answer:
          'App Store 등록 정보에 따르면 Apple silicon Mac, macOS 14 이상, 16 GB 이상의 통합 메모리가 필요합니다. 첫 실행 시 동의한 뒤 모델 가중치를 내려받습니다.',
        bullets: [
          '답변마다 모델, 티어, 역할, 신뢰도, 초당 토큰 수가 담긴 영수증을 표시합니다.',
          '실행 전에 경로를 미리 보고 다른 로드된 모델을 고르거나 취소할 수 있습니다.',
          '파일 도구는 선택한 폴더 하나로 제한되며 쓰기 전에 미리보기를 보여 줍니다.',
          '모델을 내려받은 뒤에는 오프라인으로 작동하며, 선택 사항인 클라우드 모드는 기본적으로 꺼져 있습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Coil이란?', anchor: 'what-is-coil' },
      { label: '입수 방법', anchor: 'get-it' },
      { label: '필요한 사양', anchor: 'requirements' },
      { label: '요금', anchor: 'pricing' },
      { label: '출처로 확인된 기능', anchor: 'key-features' },
      { label: '개인정보 보호와 네트워크 사용', anchor: 'privacy' },
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
            text: 'Coil은 오픈 웨이트 모델을 기기에서 실행하고 각 턴을 어떤 모델이 처리했는지 보여 주는 Mac 전용 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '작은 모델이 질문이 쉬운지 어려운지 판단하고, 어려운 질문은 더 강력한 모델이 맡으며, 선택한 폴더의 파일을 바꾸기 전에 앱이 승인을 요청합니다.',
          },
        ],
        items: [
          '유지 관리: 등록 정보에는 7월 8일의 1.2.0부터 2026년 10월 20일의 1.16.0까지 15개 버전이 표시되어 활발히 업데이트되고 있으므로 방치된 프로젝트 경고는 해당하지 않습니다.',
          '라이선스: 명시되지 않았으며 공개 저장소도 찾지 못했습니다.',
          '지원 범위: Mac 전용이며 Windows, Linux, 모바일 버전은 없습니다.',
          '평점: App Store에는 점수를 표시할 만큼의 평가가 없습니다.',
          '근거: 개발사 사이트와 방침, 스토어 등록 정보(2026년 10월 24일 확인). 직접 테스트는 하지 않았습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum은 Coil을 설치하거나 테스트하거나 벤치마크하지 않았습니다. 아래의 동작, 속도, 개인정보 보호 관련 서술은 개발사의 주장입니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-coil',
        title: 'Coil이란?',
        content: [
          '**Coil은 Mac App Store에 「Coil - Local AI Harness」로 등록된 에이전트 하니스로, Apple silicon에서 오픈 웨이트 언어 모델을 실행하고 각 요청을 어떤 모델이 처리할지 결정하는 래퍼입니다.** 페이지는 이를 「a local agent harness that shows its work」라고 설명합니다. 브랜드는 Silo Systems이고 App Store 판매자는 Omar Quddusi입니다.',
          '설계는 두 단계입니다. 빠른 라우터가 간단한 턴에 답하거나 분배하고, 더 강력한 워커 모델이 어려운 턴을 맡습니다. 모델 상주 표에는 메모리 예산에 비추어 어떤 모델이 로드, 고정, 제거되었는지 표시됩니다. 개발사는 클라우드 챗봇이 아니며 제한 없는 셸 명령을 실행하지 않는다고 밝힙니다. 같은 개발사가 두 번째 Mac 앱인 Matadoor도 판매합니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Coil은 Mac App Store에서만 판매되며 직접 다운로드는 없습니다.**',
        ],
        columns: ['경로', '링크'],
        rows: [
          { '경로': 'Mac App Store (macOS 14 이상)', '링크': '[Coil - Local AI Harness](https://apps.apple.com/kr/app/id6788070684)' },
          { '경로': '웹사이트', '링크': '[ohmslaw.net/apps/coil](https://ohmslaw.net/apps/coil)' },
          { '경로': '개인정보 처리방침', '링크': '[ohmslaw.net/apps/coil/privacy](https://ohmslaw.net/apps/coil/privacy)' },
          { '경로': '지원', '링크': '[ohmslaw.net/apps/coil/support](https://ohmslaw.net/apps/coil/support)' },
        ],
        note: '확인한 버전: 1.16.0. App Store에는 이번 확인 3일 전에 업데이트된 것으로 표시되었으나 연도가 적혀 있지 않아, PromptQuorum은 확인 시점의 최신 업스트림 업데이트로 2026년 10월 20일로 기록합니다. 앱 크기는 14.6 MB이며 모델 가중치는 별도로 내려받습니다. 소스 저장소와 Windows, Linux, Android, iPhone 버전은 찾지 못했습니다.',
      },
      requirements: {
        id: 'requirements',
        title: '필요한 사양',
        content: [
          '**Coil에는 Apple silicon Mac, macOS 14.0 이상, 16 GB 이상의 통합 메모리가 필요하며, 강력한 워커 티어에는 36 GB를 권장합니다.**',
        ],
        columns: ['항목', '출처 기준'],
        rows: [
          { '항목': '칩과 메모리', '출처 기준': 'Apple silicon, 16 GB 이상' },
          { '항목': '운영 체제', '출처 기준': 'macOS 14.0 이상' },
          { '항목': '첫 실행 시 다운로드', '출처 기준': '채팅 가중치를 Hugging Face에서, 동의 후' },
          { '항목': '임베딩 모델', '출처 기준': '첫 실행 시 다운로드' },
        ],
        note: '지원 페이지에는 디스크 용량 수치가 없고 모델 이름이나 다운로드 크기도 적혀 있지 않습니다. 개발사가 테스트하지 않은 모델은 공개된 크기와 형식으로 요구 사양을 추정하며, 기본값으로 선택되지 않고 추가 확인이 필요합니다.',
      },
      pricing: {
        id: 'pricing',
        title: '요금',
        content: [
          '**Coil은 한국 스토어에서 ₩25,000의 일회성 구매이며 구독과 앱 내 구입은 없습니다.** 가족 공유는 최대 여섯 명까지 적용됩니다.',
        ],
        columns: ['스토어', '가격'],
        rows: [
          { '스토어': '한국', '가격': '₩25,000' },
          { '스토어': '미국', '가격': '$14.99' },
          { '스토어': '독일·프랑스·스페인', '가격': '17,99 €' },
          { '스토어': '일본', '가격': '¥2,500' },
          { '스토어': '브라질', '가격': 'R$ 99,90' },
        ],
        note: '2026년 10월 24일에 각 국가의 App Store 페이지에서 확인했습니다. 가격은 스토어가 정하며 바뀔 수 있습니다. 무료 체험에 대한 언급은 없었습니다. Bring Your Own Key를 켜면 선택한 제공업체의 요금이 별도로 듭니다.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 개발사 페이지 또는 App Store 설명에서 나온 것입니다.**',
        ],
        items: [
          '**라우터와 워커.** 작은 모델이 빠른 턴을, 더 강력한 모델이 어려운 작업을 처리합니다.',
          '**라우팅 영수증.** 답변마다 모델, 티어, 역할, 신뢰도, 속도를 표시하며, 추적 영수증은 내보낼 수 있고 파일 본문이 아닌 해시와 결과만 보관합니다.',
          '**경로 미리보기.** 항상, 모호할 때, 안 함 중에서 설정하며, 요청이 실행되기 전에 목적지, 모델 상주 상태, 이유, 컨텍스트 수, 도구 범위를 보여 줍니다.',
          '**검토를 거치는 작업 공간 도구.** 읽기, 쓰기, 편집과 읽기 전용의 제한된 셸을 폴더 하나로 제한해 제공하며, 정책 모드는 검사만, 변경 사항 검토, 도구마다 확인입니다.',
          '**작업 공간 지도와 위키.** Swift 타입, 프로토콜, 함수를 그래프로 보여 주고, 위키 페이지는 초안만 작성하며 승인 후에야 기록됩니다.',
          '**로컬 메모리.** 대화는 검색, 고정, 삭제할 수 있는 저장소로 요약되며, 버전 1.16.0에서 저장된 메모리를 답변에 사용하는 기능이 추가되었습니다.',
          '**서명된 모델 카탈로그.** 버전 1.13.0에서 모델 파일별 검증이 포함된 서명 카탈로그가 추가되었습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 네트워크 사용',
        content: [
          '**개인정보 처리방침(버전 1.2, 2026년 9월 23일 시행)은 Coil이 사용자에 관한 어떤 정보도 수집하지 않으며 계정, 분석, 원격 측정이 없고 사용자 콘텐츠가 Silo Systems에 전달되지 않는다고 밝힙니다.** App Store 표시는 「데이터 수집 안 함」이며, Apple은 이것이 개발자 본인의 진술이라고 덧붙입니다.',
          '방침은 네 가지 네트워크 경로를 언급합니다. Hugging Face에서의 모델 다운로드, App Store 업데이트 트래픽, 기본적으로 꺼져 있고 ohmslaw.net에서 서명된 파일만 내려받는 선택적 모델 카탈로그 확인, 그리고 Bring Your Own Key입니다. 마지막 기능을 켜면 메시지와 기억·발췌 같은 구성된 컨텍스트가 사용자가 설정한 제공업체(App Store 업데이트 노트 기준 OpenAI, Anthropic, Gemini, OpenRouter)로 직접 전송되며, 키는 macOS 키체인에 저장됩니다. 본인 기기의 Ollama를 쓰면 요청이 자신의 네트워크 안에 머뭅니다. 앱을 삭제해도 컨테이너 안의 데이터는 삭제되지 않습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발사의 진술입니다. PromptQuorum은 앱이나 네트워크 트래픽을 감사하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**16 GB 이상의 Mac을 가진 분,** 어떤 모델이 답했는지 알려 주는 온디바이스 에이전트를 원하는 경우.',
          '**파일을 바꾸기 전에 승인하고 싶은 분.** 범위는 폴더 하나로 제한됩니다.',
          '**구독보다 일회성 가격을 선호하는 분.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**실제 품질과 속도.** PromptQuorum은 Coil을 실행하지 않았으며 출처에도 벤치마크 수치나 모델 이름이 없습니다.',
          '**라이선스와 코드.** 명시된 라이선스가 없고 저장소도 찾지 못해 코드를 검토할 수 없습니다.',
          '**이력.** App Store에는 점수를 낼 만큼의 평가가 없고, 표시되는 버전 기록은 2026년 7월 8일부터 시작합니다.',
          '**개인정보 보호 주장.** 원격 측정 없음과 오프라인 작동에 관한 진술은 네트워크 트래픽으로 확인하지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이'],
        rows: [
          { '앱': '[Goose](/ko/power-local-llm/goose-review)', '플랫폼': 'macOS, Windows, Linux', '가격 / 라이선스': '무료 / Apache-2.0', '핵심 차이': '코딩과 자동화를 위한 오픈 소스 에이전트이며 로컬 또는 클라우드 모델과 함께 사용 가능' },
          { '앱': '[Agent Zero](/ko/power-local-llm/agent-zero-review)', '플랫폼': 'macOS, Windows, Linux', '가격 / 라이선스': '무료 / MIT', '핵심 차이': '코딩 능력을 갖춘 최소 구성의 오픈 소스 자율 에이전트' },
          { '앱': '[OpenClaw](/ko/power-local-llm/openclaw-review)', '플랫폼': 'macOS, Windows, Linux', '가격 / 라이선스': '무료 / MIT', '핵심 차이': '에이전트 워크플로를 위한 오픈 소스 오케스트레이션 프레임워크' },
        ],
        note: '경쟁 제품의 정보는 자주 바뀝니다. 현재 가격, 라이선스, 플랫폼은 각 앱의 등록 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Coil은 오프라인에서 작동합니까?',
            a: '개인정보 처리방침에 따르면 채팅 가중치와 임베딩 모델을 내려받은 뒤에는 가능합니다. 답변에 인터넷이 필요한 것은 클라우드 모드뿐입니다.',
          },
          {
            q: 'Coil이 내 Mac에서 명령을 실행할 수 있습니까?',
            a: '개발사는 제한 없는 셸 명령을 실행하지 않는다고 밝힙니다. 셸은 읽기 전용이며 범위가 제한되고, 쓰기와 편집은 먼저 미리보기 또는 diff를 보여 줍니다.',
          },
          {
            q: '내 API 키를 사용할 수 있습니까?',
            a: '예, 기본적으로 꺼져 있는 선택 모드이며 버전 1.12.0에서 OpenAI, Anthropic, Gemini, OpenRouter용으로 추가되었습니다.',
          },
          {
            q: 'iPhone이나 Windows 버전이 있습니까?',
            a: '찾지 못했습니다. 페이지에는 Apple silicon의 Mac, macOS 14 이상만 기재되어 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Coil은 일회성 구매 Mac 앱으로, 개발사에 따르면 오픈 웨이트 모델과 사용자 데이터를 기기 안에 두고, 작업을 라우터와 더 강력한 워커에 나누며, 답변마다 영수증을 보여 주고, 파일 도구를 승인된 폴더 하나로 제한합니다. 이번 확인 3일 전에 업데이트되었고 개인정보 처리방침도 명확합니다. 반면 라이선스가 명시되어 있지 않고, Mac 전용이며, 16 GB 이상이 필요하고, 점수를 낼 만큼의 평가가 없으며, 동작과 개인정보 보호에 관한 모든 주장이 개발사에서 나왔습니다. 투명한 라우팅과 승인 요청을 중시하는 Mac 사용자에게 적합합니다. 공개된 코드나 다른 운영 체제를 원한다면 [Goose](/ko/power-local-llm/goose-review) 또는 [Agent Zero](/ko/power-local-llm/agent-zero-review)와 비교해 보십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[ohmslaw.net의 Coil](https://ohmslaw.net/apps/coil) — 개발사 페이지: 설명, 기능, 가격, 플랫폼(2026년 10월 24일 확인).',
          '[Coil 개인정보 처리방침](https://ohmslaw.net/apps/coil/privacy) 및 [지원 페이지](https://ohmslaw.net/apps/coil/support) — 데이터 처리, 네트워크 경로, 모델 다운로드, 작업 공간 도구.',
          '[Mac App Store의 Coil](https://apps.apple.com/kr/app/id6788070684) — 버전 기록, 요구 사양, 크기, 연령 등급, 개발자의 개인정보 보호 표시.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Goose 리뷰](/ko/power-local-llm/goose-review) — 코딩과 자동화를 위한 로컬 우선 오픈 소스 에이전트.',
          '[Agent Zero 리뷰](/ko/power-local-llm/agent-zero-review) — 코딩 능력을 갖춘 최소 구성의 자율 에이전트.',
          '[OpenClaw 리뷰](/ko/power-local-llm/openclaw-review) — 에이전트 워크플로를 위한 오케스트레이션 프레임워크.',
          '[코드·개발용 로컬 LLM 비교](/ko/power-local-llm/local-llm-code-development-compared) — 코딩 및 에이전트 도구 카테고리 비교.',
        ],
      },
    },
  },
}
