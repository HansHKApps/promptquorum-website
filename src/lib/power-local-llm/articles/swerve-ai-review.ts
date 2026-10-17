// Swerve Review: AI Story and Character Chat for iPhone
// Slug: swerve-ai-review
// Companion to: agnai-review, risuai-review, backyard-ai-review-local-roleplay
// Sources: the App Store listing (id6754301136, US/DE/FR/ES/JP/BR storefronts + iTunes lookup), getswerve.com, its privacy notice
// (last updated 2026-06-19) and its terms, all read 2026-10-17 — no hands-on testing.
// Version 1.32.0 (released 2026-10-07) is the version shown on the listing (tile pqReview.version must match).
// Prices: each locale shows its own App Store storefront (US $12.49 Pro / gems from $2.49, DE+FR+ES 14,99 EUR / gems from 2,99 EUR,
// JP 2,000 JPY / gems from 400 JPY, BR R$ 79,90 / gems from R$ 14,90). ZH/AR/KO use the US storefront in USD (the Korean storefront has
// no listing). Never FX-converted.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    heroImage: '/images/swerve-ai-review-hero-en.webp',
    title: 'Swerve Review: AI Story and Character Chat for iPhone',
    seoTitle: 'Swerve Review: AI Story and Character Chat for iPhone',
    intro:
      'Swerve: AI Chat & Stories is an iPhone app from MSPW Labs, Inc. where you talk to AI characters and play branching stories. This review covers what its App Store listing, website, privacy notice and terms document, what they leave unsaid, and how it compares with roleplay apps that run on a computer you control.',
    metaDescription:
      'Swerve review: free iPhone app for AI character chat and branching stories. In-app purchases, 18+ rating, cloud service, privacy and local alternatives.',
    twitterDescription:
      'Swerve review: freemium iPhone roleplay app with branching stories. Pricing, age rating, what the privacy notice says, limits, and local alternatives.',
    audience:
      'iPhone owners weighing an AI roleplay and story app — covers features, pricing, privacy, age rating, limits, and alternatives that run locally.',
    readTime: '6 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Swerve review',
    targetKeywords: [
      'swerve ai review',
      'swerve ai chat and stories',
      'swerve app iphone',
      'mspw labs swerve',
      'ai character chat app iphone',
      'ai roleplay app ios',
      'swerve privacy',
      'local roleplay alternatives',
    ],
    current_hardware_mentioned: ['iPhone'],
    leadAnswerBlock:
      '**Swerve: AI Chat & Stories is a free, closed-source iPhone app for roleplay chats and branching stories; it is an online service, not a local-AI app.** Per its App Store listing it needs iOS 18.0 or later. This review covers version 1.32.0, last updated October 7, 2026, and rests on public sources only, not on hands-on testing.',
    quickAnswerTop: {
      en: {
        question: 'Is Swerve worth installing for AI character chat and stories on an iPhone?',
        answer:
          'Maybe, if you want a large library of ready-made characters and story controls in a mobile app and accept an online service. If you want characters that stay on local hardware, or a privacy notice without ad-network sharing, look at the local alternatives below.',
        bullets: [
          'More than 500,000 community-created characters, plus your own, public or private.',
          'Story controls: multi-character scenes, personas, pinned memory, swipe, edit and branch from any message.',
          'Free download; a Pro tier and gem packs are in-app purchases.',
          'The privacy notice says identifiers and internet activity were sold or shared with ad networks in the past 12 months.',
          'Android and web versions are waitlist-only.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get Swerve', anchor: 'get-it' },
      { label: 'Swerve at a Glance', anchor: 'at-a-glance' },
      { label: 'What Swerve Is', anchor: 'what-is-swerve' },
      { label: 'Features', anchor: 'features' },
      { label: 'Pricing, Privacy and Data', anchor: 'privacy' },
      { label: 'Age Rating and Content', anchor: 'age-content' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Swerve vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Swerve', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Swerve', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Swerve, by MSPW Labs, Inc., is a freemium iPhone app built around story-driven chats with AI characters.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a mobile story engine with a big character catalog: you type what your character does, and the AI cast answers.',
          },
        ],
        items: [
          'Version reviewed: 1.32.0, as shown on the [App Store listing](https://apps.apple.com/us/app/swerve-ai-chat/id6754301136).',
          'Where it runs: the listing, website and notice name no AI model or host, and no on-device mode is documented.',
          'Age: rated 18+ on the App Store, with frequent sexual content or nudity listed in the age-rating details.',
          'Language: the listing is English only.',
          'Openness: closed source; no public repository was found.',
        ],
      },
      getItSwerve: {
        id: 'get-it',
        title: 'Get Swerve',
        content: [
          '**Swerve is distributed through the Apple App Store as an iPhone-only app.** The download is 116.9 MB and free, with in-app purchases.',
        ],
        columns: ['Channel', 'Get It'],
        rows: [
          {
            'Channel': 'Apple App Store',
            'Get It': '[Swerve on the App Store](https://apps.apple.com/us/app/swerve-ai-chat/id6754301136)',
          },
          {
            'Channel': 'Website',
            'Get It': '[getswerve.com](https://www.getswerve.com/)',
          },
          {
            'Channel': 'Privacy policy',
            'Get It': '[Swerve privacy notice](https://www.getswerve.com/privacy)',
          },
          {
            'Channel': 'Terms',
            'Get It': '[Swerve terms and conditions](https://www.getswerve.com/terms)',
          },
        ],
        note: 'The website offers Android only as a [waitlist](https://www.getswerve.com/android), and the web version is a waitlist too. No public source repository was found.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Swerve at a Glance',
        columns: ['Attribute', 'Swerve'],
        rows: [
          { 'Attribute': 'Platform', 'Swerve': 'iPhone, iOS 18.0+' },
          { 'Attribute': 'Price', 'Swerve': 'Free, in-app purchases' },
          { 'Attribute': 'License', 'Swerve': 'Closed source' },
          { 'Attribute': 'Runs offline', 'Swerve': 'No on-device mode documented' },
          { 'Attribute': 'Group chats', 'Swerve': 'Yes, several characters per story' },
          { 'Attribute': 'Lorebooks / world info', 'Swerve': 'Not stated in the listing' },
          { 'Attribute': 'Age rating', 'Swerve': '18+' },
          { 'Attribute': 'Version / last update', 'Swerve': '1.32.0 / October 7, 2026' },
          { 'Attribute': 'Interface language', 'Swerve': 'English' },
        ],
        note: 'Attributes follow the roleplay comparison used in the Local AI App Directory. They come from the App Store listing and website, which do not cover every feature.',
      },
      whatIsSwerve: {
        id: 'what-is-swerve',
        title: 'What Swerve Is',
        content: [
          '**Swerve is an interactive-fiction chat app: you "play stories in your own words" and AI characters respond.** The listing describes more than 500,000 community-created characters across genres such as romance, drama, anime and fantasy.',
          'It is published by MSPW Labs, Inc., a US company. The website calls getswerve.com "the only official Swerve AI website", so treat similarly named apps and sites as different products.',
          'This review draws on those four public sources only. It includes no hands-on testing, so answer quality, memory reliability, moderation and speed are not rated here.',
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The app combines a character catalog with fine-grained control over each story.** Everything below comes from the App Store listing.',
        ],
        items: [
          '**Characters.** Browse community characters or create your own and share them publicly or keep them private.',
          '**Story modes.** Chat one-on-one or bring several characters into the same story, and play as any character through personas.',
          '**Memory.** Pin the details characters should remember.',
          '**Control.** Request another reply, edit messages, or start a new path from any message. Version 1.32.0 adds automatic drafts and a rewind preview that shows how many messages it will remove.',
          '**Community.** The listing links a Discord community.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Pricing, Privacy and Data',
        content: [
          '**Swerve is free to download, with in-app purchases for a Pro tier, gem packs and, on some storefronts, a Swerve Lite tier.** On the US storefront Pro costs $12.49 and gem packs start at $2.49. The listing does not say what Pro or the gems unlock, so check the paywall in the app first.',
          '**The privacy notice, last updated June 19, 2026, says Swerve collects names, email addresses and usernames, plus IP address, device and app IDs, app activity and crash reports.** Payments run through Apple and RevenueCat, and signing in with Facebook or X can share profile details such as name, email, friends list and picture.',
          '**The notice also says identifiers and internet activity were sold or shared with ad networks in the past 12 months, and the App Store label lists identifiers used to track you across other companies\' apps and websites.** It names no AI provider, lists "AI platforms" only as a category of recipient, and does not say whether chats are used to train models. These are the developer\'s own statements; this review did not inspect network traffic.',
        ],
      },
      ageContent: {
        id: 'age-content',
        title: 'Age Rating and Content',
        content: [
          '**Swerve is for adults: the App Store rating is 18+ and the terms say the services are intended for users who are at least 18.** The age-rating details list frequent profanity and sexual content or nudity, while the terms\' content policy allows romantic themes between adult characters only if they are non-explicit. This review did not test how the app moderates content.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Large character library',
            'What it means in real use': 'More than 500,000 community characters to start from.',
            'Limitation / caveat': 'Quality and moderation vary by character; none were tested here.',
          },
          {
            'Benefit': 'Story control',
            'What it means in real use': 'Swipe, edit, branch and rewind any message.',
            'Limitation / caveat': 'Drafts and the rewind preview are new in 1.32.0.',
          },
          {
            'Benefit': 'Pinned memory',
            'What it means in real use': 'Characters are told to remember details you pin.',
            'Limitation / caveat': 'No memory size or accuracy figures are published.',
          },
          {
            'Benefit': 'Free to start',
            'What it means in real use': 'Download and try at no cost.',
            'Limitation / caveat': 'Pro and gem packs cost extra; what they unlock is not described.',
          },
          {
            'Benefit': 'Frequent updates',
            'What it means in real use': 'The version history shows 25 releases from March 23 to October 7.',
            'Limitation / caveat': 'All but the latest list only "Bug fixes and performance improvements".',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Swerve vs. Alternatives',
        columns: ['App', 'Platforms', 'Price and license', 'Where it runs', 'Key difference'],
        rows: [
          {
            'App': 'Swerve',
            'Platforms': 'iPhone',
            'Price and license': 'Freemium, closed source',
            'Where it runs': 'Developer\'s cloud service',
            'Key difference': 'Ready-made community characters; no desktop or Android build yet',
          },
          {
            'App': '[Agnai](/power-local-llm/agnai-review)',
            'Platforms': 'Web',
            'Price and license': 'Free, AGPL-3.0',
            'Where it runs': 'Browser UI, external model backend',
            'Key difference': 'Open source; you choose the model backend',
          },
          {
            'App': '[RisuAI](/power-local-llm/risuai-review)',
            'Platforms': 'Web, desktop, mobile',
            'Price and license': 'Free, GPL 3.0',
            'Where it runs': 'Your backend or an API you supply',
            'Key difference': 'Open source and cross-platform; bring your own model',
          },
          {
            'App': '[Backyard AI](/power-local-llm/backyard-ai-review-local-roleplay)',
            'Platforms': 'Mac, Windows',
            'Price and license': 'Freemium, closed source',
            'Where it runs': 'On your own computer',
            'Key difference': 'Characters run locally; desktop only',
          },
        ],
        note: 'Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each app\'s own listing before deciding.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Swerve',
        items: [
          '**Adults who want ready-made characters on a phone.** The 500,000+ library saves building a cast from scratch.',
          '**Story players who like to steer.** Branching, editing and pinned memory give control over each scene.',
          '**Anyone happy with a cloud service.** Nothing in the listing promises offline or on-device use.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Swerve',
        items: [
          '**Anyone who needs offline or on-device chat.** [Backyard AI](/power-local-llm/backyard-ai-review-local-roleplay) runs characters on your own computer.',
          '**Android, Mac or Windows users.** Only an iPhone build exists; [RisuAI](/power-local-llm/risuai-review) covers web, desktop and mobile.',
          '**Anyone who needs open source or a strict privacy posture.** The code is not public; read the notice under Pricing, Privacy and Data first.',
          '**Anyone under 18.** The app is rated and intended for adults.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Swerve work offline?',
            a: 'The listing, website and privacy notice document no offline or on-device mode, and the community character library implies an online service.',
          },
          {
            q: 'Is Swerve Pro a subscription?',
            a: 'The listing does not say. The terms state that subscriptions renew monthly through Apple, can be cancelled in Apple subscription settings, and that all sales are final.',
          },
          {
            q: 'Can I delete my Swerve account and data?',
            a: 'The website links an account-deletion page, and the notice says data is deactivated or deleted after account termination, with some kept for fraud prevention and legal reasons.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Swerve is a good fit on paper for adult iPhone users who want a big character catalog and fine control over interactive stories, and who are comfortable with a cloud service.',
          'The caveats are transparency and privacy: it is closed source, names no AI provider, and its privacy notice describes sharing with ad networks.',
          'If you want characters on your own hardware, start with [Backyard AI](/power-local-llm/backyard-ai-review-local-roleplay); if you want open source, try [RisuAI](/power-local-llm/risuai-review) or [Agnai](/power-local-llm/agnai-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Swerve on the App Store](https://apps.apple.com/us/app/swerve-ai-chat/id6754301136) — version, price, requirements, age rating, features and developer.',
          '[Swerve website](https://www.getswerve.com/) — the developer\'s own description and platform availability.',
          '[Swerve privacy notice](https://www.getswerve.com/privacy) — data collection, ad-network sharing and retention.',
          '[Swerve terms and conditions](https://www.getswerve.com/terms) — age limit, content policy and subscription terms.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Backyard AI Review](/power-local-llm/backyard-ai-review-local-roleplay) — a desktop client that runs roleplay characters locally.',
          '[RisuAI Review](/power-local-llm/risuai-review) — an open-source roleplay frontend for web, desktop and mobile.',
          '[Agnai Review](/power-local-llm/agnai-review) — an open-source browser roleplay frontend with character cards.',
          '[The Local AI App Directory](/directory) — a broader directory of local and cloud AI apps across platforms.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    heroImage: '/images/swerve-ai-review-hero-de.webp',
    title: 'Swerve Rezension: KI-Story- und Charakter-Chat für das iPhone',
    seoTitle: 'Swerve Rezension: KI-Story- und Charakter-Chat fürs iPhone',
    intro:
      'Swerve: AI Chat & Stories ist eine iPhone-App von MSPW Labs, Inc., mit der man mit KI-Charakteren chattet und verzweigte Geschichten spielt. Diese Rezension beschreibt, was App-Store-Eintrag, Website, Datenschutzhinweis und Nutzungsbedingungen dokumentieren, was sie offenlassen und wie die App im Vergleich zu Rollenspiel-Apps abschneidet, die auf eigener Hardware laufen.',
    metaDescription:
      'Swerve Rezension: kostenlose iPhone-App für KI-Charakter-Chat und verzweigte Geschichten. In-App-Käufe, 18+, Cloud, Datenschutz, lokale Alternativen.',
    twitterDescription:
      'Swerve Rezension: eine Freemium-iPhone-App für KI-Charakter-Chat und verzweigte Geschichten. Preise, Altersfreigabe 18+, Datenschutzhinweis, Grenzen und lokale Rollenspiel-Alternativen.',
    audience:
      'iPhone-Nutzer, die eine KI-Rollenspiel- und Story-App abwägen — behandelt Funktionen, Preise, Datenschutz, Altersfreigabe, Grenzen und lokal laufende Alternativen.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Swerve Rezension',
    targetKeywords: [
      'swerve ai test',
      'swerve ai chat and stories',
      'swerve app iphone',
      'mspw labs swerve',
      'ki charakter chat app iphone',
      'ki rollenspiel app ios',
      'swerve datenschutz',
      'lokale rollenspiel alternativen',
    ],
    current_hardware_mentioned: ['iPhone'],
    leadAnswerBlock:
      '**Swerve: AI Chat & Stories ist eine kostenlose, nicht quelloffene iPhone-App zum Chatten mit KI-Charakteren und für verzweigte Geschichten; sie ist ein Online-Dienst, keine lokale KI-App.** Laut App-Store-Eintrag setzt sie iOS 18.0 oder neuer voraus. Diese Rezension behandelt Version 1.32.0, zuletzt aktualisiert am 7. Oktober 2026, und beruht auf Eintrag, Website, Datenschutzhinweis und Nutzungsbedingungen, nicht auf praktischen Tests.',
    quickAnswerTop: {
      de: {
        question: 'Lohnt sich Swerve für KI-Charakter-Chat und Geschichten auf dem iPhone?',
        answer:
          'Vielleicht, wenn Sie eine große Bibliothek fertiger Charaktere und Story-Steuerung in einer mobilen App wollen und einen Online-Dienst akzeptieren. Wenn Sie Charaktere auf eigener Hardware oder einen Datenschutzhinweis ohne Weitergabe an Werbenetzwerke bevorzugen, sehen Sie sich die lokalen Alternativen unten an.',
        bullets: [
          'Mehr als 500.000 Community-Charaktere, dazu eigene, öffentlich oder privat.',
          'Story-Steuerung: Szenen mit mehreren Charakteren, Personas, fixiertes Gedächtnis, Wischen, Bearbeiten und Verzweigen ab jeder Nachricht.',
          'Kostenloser Download; ein Pro-Tarif und Gem-Pakete sind In-App-Käufe.',
          'Laut Datenschutzhinweis wurden Kennungen und Internetaktivität in den letzten 12 Monaten an Werbenetzwerke verkauft oder weitergegeben.',
          'Android- und Web-Version gibt es nur als Warteliste.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Swerve herunterladen', anchor: 'get-it' },
      { label: 'Swerve im Überblick', anchor: 'at-a-glance' },
      { label: 'Was Swerve ist', anchor: 'what-is-swerve' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Preise, Datenschutz und Daten', anchor: 'privacy' },
      { label: 'Altersfreigabe und Inhalte', anchor: 'age-content' },
      { label: 'Vorteile und Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Swerve im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen Swerve geeignet ist', anchor: 'who-should-use' },
      { label: 'Für wen Swerve nicht geeignet ist', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Swerve von MSPW Labs, Inc. ist eine Freemium-iPhone-App, mit der man mit KI-Charakteren chattet und verzweigte Geschichten spielt.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich eine mobile Story-Engine mit großem Charakterkatalog vor: Sie tippen, was Ihre Figur tut, und die KI-Besetzung antwortet.',
          },
        ],
        items: [
          'Geprüfte Version: 1.32.0, wie im [App-Store-Eintrag](https://apps.apple.com/de/app/swerve-ai-chat-stories/id6754301136) angezeigt.',
          'Wo sie läuft: Eintrag, Website und Hinweis nennen kein KI-Modell und keinen Host; ein On-Device-Modus ist nicht dokumentiert.',
          'Alter: im App Store ab 18 Jahren eingestuft; die Altersdetails nennen häufige sexuelle Inhalte oder Nacktheit.',
          'Sprache: Der Eintrag ist nur auf Englisch.',
          'Offenheit: nicht quelloffen; ein öffentliches Repository wurde nicht gefunden.',
        ],
      },
      getItSwerve: {
        id: 'get-it',
        title: 'Swerve herunterladen',
        content: [
          '**Swerve wird über den Apple App Store als reine iPhone-App vertrieben.** Der Download ist 116,9 MB groß und kostenlos, mit In-App-Käufen.',
        ],
        columns: ['Kanal', 'Bezugsquelle'],
        rows: [
          {
            'Kanal': 'Apple App Store',
            'Bezugsquelle': '[Swerve im App Store](https://apps.apple.com/de/app/swerve-ai-chat-stories/id6754301136)',
          },
          {
            'Kanal': 'Website',
            'Bezugsquelle': '[getswerve.com](https://www.getswerve.com/)',
          },
          {
            'Kanal': 'Datenschutz',
            'Bezugsquelle': '[Datenschutzhinweis von Swerve](https://www.getswerve.com/privacy)',
          },
          {
            'Kanal': 'Nutzungsbedingungen',
            'Bezugsquelle': '[Nutzungsbedingungen von Swerve](https://www.getswerve.com/terms)',
          },
        ],
        note: 'Die Website bietet Android nur als [Warteliste](https://www.getswerve.com/android) an, die Web-Version ebenfalls. Ein öffentliches Quell-Repository wurde nicht gefunden.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Swerve im Überblick',
        columns: ['Merkmal', 'Swerve'],
        rows: [
          { 'Merkmal': 'Plattform', 'Swerve': 'iPhone, iOS 18.0+' },
          { 'Merkmal': 'Preis', 'Swerve': 'Kostenlos, In-App-Käufe' },
          { 'Merkmal': 'Lizenz', 'Swerve': 'Nicht quelloffen' },
          { 'Merkmal': 'Läuft offline', 'Swerve': 'Kein On-Device-Modus dokumentiert' },
          { 'Merkmal': 'Gruppenchats', 'Swerve': 'Ja, mehrere Charaktere pro Story' },
          { 'Merkmal': 'Lorebooks / World Info', 'Swerve': 'Im Eintrag nicht genannt' },
          { 'Merkmal': 'Altersfreigabe', 'Swerve': '18+' },
          { 'Merkmal': 'Version / letztes Update', 'Swerve': '1.32.0 / 7. Oktober 2026' },
          { 'Merkmal': 'Sprache der Oberfläche', 'Swerve': 'Englisch' },
        ],
        note: 'Die Merkmale folgen dem Rollenspiel-Vergleich des Local AI App Directory. Sie stammen aus App-Store-Eintrag und Website, die nicht jede Funktion abdecken.',
      },
      whatIsSwerve: {
        id: 'what-is-swerve',
        title: 'Was Swerve ist',
        content: [
          '**Swerve ist eine Interactive-Fiction-Chat-App: Man „spielt Geschichten in eigenen Worten“, und KI-Charaktere antworten.** Der Eintrag beschreibt mehr als 500.000 von der Community erstellte Charaktere in Genres wie Romantik, Drama, Anime und Fantasy.',
          'Herausgegeben wird sie von MSPW Labs, Inc., einem US-Unternehmen. Die Website nennt getswerve.com „die einzige offizielle Swerve-AI-Website“; ähnlich benannte Apps und Seiten sind daher andere Produkte.',
          'Diese Rezension stützt sich nur auf Eintrag, Website, Datenschutzhinweis und Nutzungsbedingungen. Praktische Tests fehlen, daher werden Antwortqualität, Zuverlässigkeit des Gedächtnisses, Moderation und Geschwindigkeit hier nicht bewertet.',
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Die App verbindet einen Charakterkatalog mit feiner Kontrolle über jede Geschichte.** Alles Folgende stammt aus dem App-Store-Eintrag.',
        ],
        items: [
          '**Charaktere.** Community-Charaktere durchsuchen oder eigene erstellen und öffentlich teilen oder privat halten.',
          '**Story-Modi.** Einzeln chatten oder mehrere Charaktere in dieselbe Geschichte holen und über Personas als beliebiger Charakter spielen.',
          '**Gedächtnis.** Details fixieren, die Charaktere sich merken sollen.',
          '**Kontrolle.** Eine andere Antwort anfordern, Nachrichten bearbeiten oder ab jeder Nachricht einen neuen Pfad beginnen. Version 1.32.0 ergänzt automatische Entwürfe und eine Vorschau beim Zurückspulen, die zeigt, wie viele Nachrichten entfernt werden.',
          '**Community.** Der Eintrag verlinkt eine Discord-Community.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Preise, Datenschutz und Daten',
        content: [
          '**Swerve ist kostenlos herunterladbar, mit In-App-Käufen für einen Pro-Tarif, Gem-Pakete und in manchen Stores einen Tarif Swerve Lite.** Im deutschen Store kostet Pro 14,99 €, Gem-Pakete beginnen bei 2,99 €. Der Eintrag sagt nicht, was Pro oder die Gems freischalten; prüfen Sie daher zuerst die Bezahlseite in der App.',
          '**Laut Datenschutzhinweis (zuletzt aktualisiert am 19. Juni 2026) erhebt Swerve Namen, E-Mail-Adressen und Benutzernamen sowie IP-Adresse, Geräte- und App-Kennungen, App-Aktivität und Absturzberichte.** Zahlungen laufen über Apple und RevenueCat; bei der Anmeldung mit Facebook oder X können Profildaten wie Name, E-Mail, Freundesliste und Bild übermittelt werden.',
          '**Der Hinweis nennt außerdem, dass Kennungen und Internetaktivität in den letzten 12 Monaten an Werbenetzwerke verkauft oder weitergegeben wurden; das App-Store-Label führt Kennungen auf, die zum Tracking über Apps und Websites anderer Unternehmen dienen.** Er nennt keinen KI-Anbieter, führt „KI-Plattformen“ nur als Empfängerkategorie auf und sagt nicht, ob Chats zum Training von Modellen verwendet werden. Dies sind Angaben des Entwicklers; diese Rezension hat den Netzwerkverkehr nicht geprüft.',
        ],
      },
      ageContent: {
        id: 'age-content',
        title: 'Altersfreigabe und Inhalte',
        content: [
          '**Swerve richtet sich an Erwachsene: Die App-Store-Einstufung ist 18+, und die Bedingungen sagen, dass die Dienste für Nutzer ab 18 Jahren gedacht sind.** Die Altersdetails nennen häufige Obszönitäten und sexuelle Inhalte oder Nacktheit, während die Inhaltsrichtlinie der Bedingungen romantische Themen zwischen erwachsenen Charakteren nur erlaubt, wenn sie nicht explizit sind. Diese Rezension hat nicht getestet, wie die App Inhalte moderiert.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Vorteile und Einschränkungen',
        columns: ['Vorteil', 'Was das im Alltag bedeutet', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'Große Charakterbibliothek',
            'Was das im Alltag bedeutet': 'Mehr als 500.000 Community-Charaktere als Ausgangspunkt.',
            'Einschränkung / Hinweis': 'Qualität und Moderation schwanken je Charakter; hier wurde keiner getestet.',
          },
          {
            'Vorteil': 'Story-Kontrolle',
            'Was das im Alltag bedeutet': 'Jede Nachricht wischen, bearbeiten, verzweigen und zurückspulen.',
            'Einschränkung / Hinweis': 'Entwürfe und die Vorschau beim Zurückspulen sind neu in 1.32.0.',
          },
          {
            'Vorteil': 'Fixiertes Gedächtnis',
            'Was das im Alltag bedeutet': 'Charaktere sollen sich fixierte Details merken.',
            'Einschränkung / Hinweis': 'Zu Umfang und Genauigkeit des Gedächtnisses gibt es keine Angaben.',
          },
          {
            'Vorteil': 'Kostenloser Einstieg',
            'Was das im Alltag bedeutet': 'Herunterladen und ohne Kosten ausprobieren.',
            'Einschränkung / Hinweis': 'Pro und Gem-Pakete kosten extra; was sie freischalten, ist nicht beschrieben.',
          },
          {
            'Vorteil': 'Häufige Updates',
            'Was das im Alltag bedeutet': 'Die Versionshistorie zeigt 25 Releases vom 23. März bis 7. Oktober.',
            'Einschränkung / Hinweis': 'Alle außer dem neuesten nennen nur „Bug fixes and performance improvements“.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Swerve im Vergleich zu Alternativen',
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Wo sie läuft', 'Wichtigster Unterschied'],
        rows: [
          {
            'App': 'Swerve',
            'Plattformen': 'iPhone',
            'Preis und Lizenz': 'Freemium, nicht quelloffen',
            'Wo sie läuft': 'Cloud-Dienst des Entwicklers',
            'Wichtigster Unterschied': 'Fertige Community-Charaktere; noch kein Desktop- oder Android-Build',
          },
          {
            'App': '[Agnai](/de/power-local-llm/agnai-review)',
            'Plattformen': 'Web',
            'Preis und Lizenz': 'Kostenlos, AGPL-3.0',
            'Wo sie läuft': 'Browser-Oberfläche, externes Modell-Backend',
            'Wichtigster Unterschied': 'Quelloffen; Sie wählen das Modell-Backend',
          },
          {
            'App': '[RisuAI](/de/power-local-llm/risuai-review)',
            'Plattformen': 'Web, Desktop, Mobil',
            'Preis und Lizenz': 'Kostenlos, GPL 3.0',
            'Wo sie läuft': 'Ihr Backend oder eine eigene API',
            'Wichtigster Unterschied': 'Quelloffen und plattformübergreifend; eigenes Modell mitbringen',
          },
          {
            'App': '[Backyard AI](/de/power-local-llm/backyard-ai-review-local-roleplay)',
            'Plattformen': 'Mac, Windows',
            'Preis und Lizenz': 'Freemium, nicht quelloffen',
            'Wo sie läuft': 'Auf Ihrem eigenen Computer',
            'Wichtigster Unterschied': 'Charaktere laufen lokal; nur Desktop',
          },
        ],
        note: 'Plattform-, Preis- und Funktionsangaben zu Apps Dritter ändern sich häufig. Prüfen Sie die aktuellen Angaben im jeweiligen Eintrag der App, bevor Sie sich entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen Swerve geeignet ist',
        items: [
          '**Erwachsene, die fertige Charaktere auf dem Handy wollen.** Die Bibliothek mit über 500.000 Charakteren erspart es, eine Besetzung selbst aufzubauen.',
          '**Story-Spieler, die gern steuern.** Verzweigen, Bearbeiten und fixiertes Gedächtnis geben Kontrolle über jede Szene.',
          '**Alle, die mit einem Cloud-Dienst zufrieden sind.** Der Eintrag verspricht keine Offline- oder On-Device-Nutzung.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen Swerve nicht geeignet ist',
        items: [
          '**Alle, die Offline- oder On-Device-Chat brauchen.** [Backyard AI](/de/power-local-llm/backyard-ai-review-local-roleplay) führt Charaktere auf Ihrem eigenen Computer aus.',
          '**Android-, Mac- oder Windows-Nutzer.** Es gibt nur einen iPhone-Build; [RisuAI](/de/power-local-llm/risuai-review) deckt Web, Desktop und Mobil ab.',
          '**Alle, die Open Source oder strengen Datenschutz brauchen.** Der Code ist nicht öffentlich; lesen Sie zuerst den Hinweis unter „Preise, Datenschutz und Daten“.',
          '**Alle unter 18.** Die App ist für Erwachsene eingestuft und gedacht.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Funktioniert Swerve offline?',
            a: 'Eintrag, Website und Datenschutzhinweis dokumentieren keinen Offline- oder On-Device-Modus, und die Community-Charakterbibliothek deutet auf einen Online-Dienst hin.',
          },
          {
            q: 'Ist Swerve Pro ein Abonnement?',
            a: 'Der Eintrag sagt es nicht. Die Bedingungen besagen, dass Abonnements monatlich über Apple verlängert werden, in den Apple-Abo-Einstellungen gekündigt werden können und alle Verkäufe endgültig sind.',
          },
          {
            q: 'Kann ich mein Swerve-Konto und meine Daten löschen?',
            a: 'Die Website verlinkt eine Seite zur Kontolöschung, und laut Hinweis werden Daten nach Kontobeendigung deaktiviert oder gelöscht; einiges bleibt zur Betrugsprävention und aus rechtlichen Gründen erhalten.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'Swerve passt auf dem Papier zu erwachsenen iPhone-Nutzern, die einen großen Charakterkatalog und feine Kontrolle über interaktive Geschichten wollen und mit einem Cloud-Dienst leben können.',
          'Die Vorbehalte betreffen Transparenz und Datenschutz: Die App ist nicht quelloffen, nennt keinen KI-Anbieter, und ihr Datenschutzhinweis beschreibt eine Weitergabe an Werbenetzwerke.',
          'Wenn Sie Charaktere auf eigener Hardware wollen, beginnen Sie mit [Backyard AI](/de/power-local-llm/backyard-ai-review-local-roleplay); für Open Source probieren Sie [RisuAI](/de/power-local-llm/risuai-review) oder [Agnai](/de/power-local-llm/agnai-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Swerve im App Store](https://apps.apple.com/de/app/swerve-ai-chat-stories/id6754301136) — Version, Preis, Anforderungen, Altersfreigabe, Funktionen und Entwickler.',
          '[Swerve-Website](https://www.getswerve.com/) — Selbstbeschreibung des Entwicklers und Plattformverfügbarkeit.',
          '[Datenschutzhinweis von Swerve](https://www.getswerve.com/privacy) — Datenerhebung, Weitergabe an Werbenetzwerke und Speicherdauer.',
          '[Nutzungsbedingungen von Swerve](https://www.getswerve.com/terms) — Altersgrenze, Inhaltsrichtlinie und Abo-Bedingungen.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Backyard AI Rezension](/de/power-local-llm/backyard-ai-review-local-roleplay) — ein Desktop-Client, der Rollenspiel-Charaktere lokal ausführt.',
          '[RisuAI Rezension](/de/power-local-llm/risuai-review) — ein quelloffenes Rollenspiel-Frontend für Web, Desktop und Mobil.',
          '[Agnai Rezension](/de/power-local-llm/agnai-review) — ein quelloffenes Browser-Rollenspiel-Frontend mit Charakterkarten.',
          '[Das Local AI App Directory](/de/directory) — ein breiteres Verzeichnis lokaler und Cloud-KI-Apps für verschiedene Plattformen.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    heroImage: '/images/swerve-ai-review-hero-fr.webp',
    title: 'Test de Swerve : chat d’histoires et de personnages IA sur iPhone',
    seoTitle: 'Test de Swerve : personnages IA et histoires sur iPhone',
    intro:
      'Swerve: AI Chat & Stories est une application iPhone de MSPW Labs, Inc. pour discuter avec des personnages IA et jouer des histoires à embranchements. Ce test présente ce que documentent sa fiche App Store, son site, son avis de confidentialité et ses conditions, ce qu’ils laissent de côté, et comment l’application se compare aux applications de jeu de rôle qui tournent sur votre propre matériel.',
    metaDescription:
      'Test de Swerve : appli iPhone gratuite de chat avec personnages IA et histoires à embranchements. Achats intégrés, 18+, cloud, vie privée, alternatives.',
    twitterDescription:
      'Test de Swerve : une application iPhone freemium de chat avec personnages IA et d’histoires à embranchements. Prix, classement 18+, confidentialité, limites et alternatives locales.',
    audience:
      'Propriétaires d’iPhone qui comparent une application de jeu de rôle et d’histoires IA — fonctions, prix, confidentialité, classement par âge, limites et alternatives locales.',
    readTime: '6 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Test de Swerve',
    targetKeywords: [
      'swerve ai avis',
      'swerve ai chat and stories',
      'swerve app iphone',
      'mspw labs swerve',
      'application chat personnages ia iphone',
      'application jeu de rôle ia ios',
      'swerve confidentialité',
      'alternatives locales jeu de rôle',
    ],
    current_hardware_mentioned: ['iPhone'],
    leadAnswerBlock:
      '**Swerve: AI Chat & Stories est une application iPhone gratuite et propriétaire pour discuter avec des personnages IA et jouer des histoires à embranchements ; c’est un service en ligne, pas une application d’IA locale.** Selon sa fiche App Store, elle exige iOS 18.0 ou version ultérieure. Ce test porte sur la version 1.32.0, mise à jour pour la dernière fois le 7 octobre 2026, et repose sur la fiche publique, le site, l’avis de confidentialité et les conditions, pas sur des essais pratiques.',
    quickAnswerTop: {
      fr: {
        question: 'Swerve vaut-il l’installation pour le chat avec personnages IA et les histoires sur iPhone ?',
        answer:
          'Peut-être, si vous voulez une grande bibliothèque de personnages prêts à l’emploi et des commandes d’histoire dans une application mobile, et si vous acceptez un service en ligne. Si vous préférez des personnages sur votre propre matériel, ou un avis de confidentialité sans partage avec des réseaux publicitaires, consultez les alternatives locales ci-dessous.',
        bullets: [
          'Plus de 500 000 personnages créés par la communauté, plus les vôtres, publics ou privés.',
          'Commandes d’histoire : scènes multi-personnages, personas, mémoire épinglée, balayage, modification et embranchement depuis n’importe quel message.',
          'Téléchargement gratuit ; une offre Pro et des packs de gems sont des achats intégrés.',
          'L’avis de confidentialité indique que des identifiants et de l’activité Internet ont été vendus ou partagés avec des réseaux publicitaires au cours des 12 derniers mois.',
          'Les versions Android et web n’existent que sous forme de liste d’attente.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir Swerve', anchor: 'get-it' },
      { label: 'Swerve en un coup d’œil', anchor: 'at-a-glance' },
      { label: 'Ce qu’est Swerve', anchor: 'what-is-swerve' },
      { label: 'Fonctions', anchor: 'features' },
      { label: 'Prix, confidentialité et données', anchor: 'privacy' },
      { label: 'Classement par âge et contenu', anchor: 'age-content' },
      { label: 'Avantages et limites', anchor: 'tradeoffs' },
      { label: 'Swerve face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Pour qui Swerve est adapté', anchor: 'who-should-use' },
      { label: 'Pour qui Swerve n’est pas adapté', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Swerve, de MSPW Labs, Inc., est une application iPhone freemium pour discuter avec des personnages IA et jouer des histoires à embranchements.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-y un moteur d’histoires mobile doté d’un grand catalogue de personnages : vous tapez ce que fait votre personnage, et la distribution IA répond.',
          },
        ],
        items: [
          'Version testée : 1.32.0, telle qu’affichée sur la [fiche App Store](https://apps.apple.com/fr/app/swerve-ai-chat-stories/id6754301136).',
          'Où elle tourne : la fiche, le site et l’avis ne citent ni modèle d’IA ni hébergeur, et aucun mode sur l’appareil n’est documenté.',
          'Âge : classée 18+ sur l’App Store, avec des contenus sexuels ou de nudité fréquents indiqués dans les détails de classement.',
          'Langue : la fiche est uniquement en anglais.',
          'Ouverture : code non public ; aucun dépôt public n’a été trouvé.',
        ],
      },
      getItSwerve: {
        id: 'get-it',
        title: 'Obtenir Swerve',
        content: [
          '**Swerve est distribuée via l’Apple App Store, uniquement pour iPhone.** Le téléchargement pèse 116.9 Mo et il est gratuit, avec des achats intégrés.',
        ],
        columns: ['Canal', 'Où l’obtenir'],
        rows: [
          {
            'Canal': 'Apple App Store',
            'Où l’obtenir': '[Swerve sur l’App Store](https://apps.apple.com/fr/app/swerve-ai-chat-stories/id6754301136)',
          },
          {
            'Canal': 'Site web',
            'Où l’obtenir': '[getswerve.com](https://www.getswerve.com/)',
          },
          {
            'Canal': 'Confidentialité',
            'Où l’obtenir': '[Avis de confidentialité de Swerve](https://www.getswerve.com/privacy)',
          },
          {
            'Canal': 'Conditions',
            'Où l’obtenir': '[Conditions générales de Swerve](https://www.getswerve.com/terms)',
          },
        ],
        note: 'Le site ne propose Android que sous forme de [liste d’attente](https://www.getswerve.com/android), et la version web aussi. Aucun dépôt public du code source n’a été trouvé.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Swerve en un coup d’œil',
        columns: ['Critère', 'Swerve'],
        rows: [
          { 'Critère': 'Plateforme', 'Swerve': 'iPhone, iOS 18.0+' },
          { 'Critère': 'Prix', 'Swerve': 'Gratuit, achats intégrés' },
          { 'Critère': 'Licence', 'Swerve': 'Code non public' },
          { 'Critère': 'Fonctionne hors ligne', 'Swerve': 'Aucun mode local documenté' },
          { 'Critère': 'Chats de groupe', 'Swerve': 'Oui, plusieurs personnages par histoire' },
          { 'Critère': 'Lorebooks / world info', 'Swerve': 'Non mentionné dans la fiche' },
          { 'Critère': 'Classement par âge', 'Swerve': '18+' },
          { 'Critère': 'Version / dernière MAJ', 'Swerve': '1.32.0 / 7 octobre 2026' },
          { 'Critère': 'Langue de l’interface', 'Swerve': 'Anglais' },
        ],
        note: 'Les critères suivent la comparaison de jeu de rôle du Local AI App Directory. Ils proviennent de la fiche App Store et du site, qui ne couvrent pas toutes les fonctions.',
      },
      whatIsSwerve: {
        id: 'what-is-swerve',
        title: 'Ce qu’est Swerve',
        content: [
          '**Swerve est une application de chat de fiction interactive : on « joue des histoires avec ses propres mots » et des personnages IA répondent.** La fiche décrit plus de 500 000 personnages créés par la communauté, dans des genres comme la romance, le drame, l’anime et la fantasy.',
          'Elle est publiée par MSPW Labs, Inc., une société américaine. Le site présente getswerve.com comme « le seul site officiel de Swerve AI » ; des applications et sites au nom proche sont donc d’autres produits.',
          'Ce test s’appuie uniquement sur la fiche, le site, l’avis de confidentialité et les conditions. Il ne comprend aucun essai pratique : la qualité des réponses, la fiabilité de la mémoire, la modération et la vitesse ne sont donc pas notées ici.',
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctions',
        content: [
          '**L’application associe un catalogue de personnages à un contrôle fin de chaque histoire.** Tout ce qui suit provient de la fiche App Store.',
        ],
        items: [
          '**Personnages.** Parcourez les personnages de la communauté ou créez les vôtres, à partager publiquement ou à garder privés.',
          '**Modes d’histoire.** Discutez en tête-à-tête ou réunissez plusieurs personnages dans la même histoire, et jouez n’importe quel personnage grâce aux personas.',
          '**Mémoire.** Épinglez les détails que les personnages doivent retenir.',
          '**Contrôle.** Demandez une autre réponse, modifiez des messages ou ouvrez un nouveau chemin depuis n’importe quel message. La version 1.32.0 ajoute des brouillons automatiques et un aperçu du retour en arrière indiquant combien de messages seront supprimés.',
          '**Communauté.** La fiche renvoie vers une communauté Discord.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Prix, confidentialité et données',
        content: [
          '**Swerve se télécharge gratuitement, avec des achats intégrés pour une offre Pro, des packs de gems et, sur certains stores, une offre Swerve Lite.** Sur le store français, Pro coûte 14,99 € et les packs de gems commencent à 2,99 €. La fiche ne dit pas ce que Pro ou les gems débloquent ; vérifiez donc d’abord l’écran de paiement dans l’application.',
          '**Selon l’avis de confidentialité, mis à jour pour la dernière fois le 19 juin 2026, Swerve collecte noms, adresses e-mail et noms d’utilisateur, ainsi que l’adresse IP, les identifiants d’appareil et d’application, l’activité dans l’application et les rapports de plantage.** Les paiements passent par Apple et RevenueCat, et la connexion via Facebook ou X peut transmettre des informations de profil comme le nom, l’e-mail, la liste d’amis et la photo.',
          '**L’avis indique aussi que des identifiants et de l’activité Internet ont été vendus ou partagés avec des réseaux publicitaires au cours des 12 derniers mois, et l’étiquette App Store liste des identifiants servant à vous suivre sur les applications et sites d’autres entreprises.** Il ne cite aucun fournisseur d’IA, ne mentionne les « plateformes d’IA » que comme catégorie de destinataires, et ne précise pas si les conversations servent à entraîner des modèles. Ce sont des déclarations du développeur ; ce test n’a pas inspecté le trafic réseau.',
        ],
      },
      ageContent: {
        id: 'age-content',
        title: 'Classement par âge et contenu',
        content: [
          '**Swerve s’adresse aux adultes : le classement App Store est 18+ et les conditions précisent que les services sont destinés aux personnes d’au moins 18 ans.** Les détails de classement indiquent des grossièretés et des contenus sexuels ou de nudité fréquents, tandis que la politique de contenu des conditions n’autorise les thèmes romantiques entre personnages adultes que s’ils ne sont pas explicites. Ce test n’a pas évalué la façon dont l’application modère les contenus.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Avantages et limites',
        columns: ['Avantage', 'Ce que cela donne en pratique', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Grande bibliothèque de personnages',
            'Ce que cela donne en pratique': 'Plus de 500 000 personnages de la communauté pour commencer.',
            'Limite / réserve': 'Qualité et modération varient selon le personnage ; aucun n’a été testé ici.',
          },
          {
            'Avantage': 'Contrôle de l’histoire',
            'Ce que cela donne en pratique': 'Balayer, modifier, créer un embranchement et revenir en arrière sur tout message.',
            'Limite / réserve': 'Les brouillons et l’aperçu du retour en arrière sont nouveaux dans la 1.32.0.',
          },
          {
            'Avantage': 'Mémoire épinglée',
            'Ce que cela donne en pratique': 'Les personnages doivent retenir les détails épinglés.',
            'Limite / réserve': 'Aucune taille ni précision de mémoire n’est publiée.',
          },
          {
            'Avantage': 'Gratuit pour commencer',
            'Ce que cela donne en pratique': 'Téléchargement et essai sans frais.',
            'Limite / réserve': 'Pro et les packs de gems sont payants ; ce qu’ils débloquent n’est pas décrit.',
          },
          {
            'Avantage': 'Mises à jour fréquentes',
            'Ce que cela donne en pratique': 'L’historique montre 25 versions du 23 mars au 7 octobre.',
            'Limite / réserve': 'Toutes sauf la dernière indiquent seulement « Bug fixes and performance improvements ».',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Swerve face aux alternatives',
        columns: ['Application', 'Plateformes', 'Prix et licence', 'Où elle tourne', 'Différence principale'],
        rows: [
          {
            'Application': 'Swerve',
            'Plateformes': 'iPhone',
            'Prix et licence': 'Freemium, code non public',
            'Où elle tourne': 'Service cloud du développeur',
            'Différence principale': 'Personnages communautaires prêts à l’emploi ; pas encore de version bureau ni Android',
          },
          {
            'Application': '[Agnai](/fr/power-local-llm/agnai-review)',
            'Plateformes': 'Web',
            'Prix et licence': 'Gratuit, AGPL-3.0',
            'Où elle tourne': 'Interface navigateur, backend de modèle externe',
            'Différence principale': 'Open source ; vous choisissez le backend de modèle',
          },
          {
            'Application': '[RisuAI](/fr/power-local-llm/risuai-review)',
            'Plateformes': 'Web, bureau, mobile',
            'Prix et licence': 'Gratuit, GPL 3.0',
            'Où elle tourne': 'Votre backend ou une API que vous fournissez',
            'Différence principale': 'Open source et multiplateforme ; apportez votre modèle',
          },
          {
            'Application': '[Backyard AI](/fr/power-local-llm/backyard-ai-review-local-roleplay)',
            'Plateformes': 'Mac, Windows',
            'Prix et licence': 'Freemium, code non public',
            'Où elle tourne': 'Sur votre propre ordinateur',
            'Différence principale': 'Personnages exécutés en local ; bureau uniquement',
          },
        ],
        note: 'Les détails de plateforme, de prix et de fonctions des applications tierces changent fréquemment. Vérifiez les informations actuelles sur la fiche de chaque application avant de décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui Swerve est adapté',
        items: [
          '**Les adultes qui veulent des personnages prêts à l’emploi sur mobile.** La bibliothèque de plus de 500 000 personnages évite de constituer une distribution de zéro.',
          '**Les joueurs d’histoires qui aiment piloter.** Embranchements, modification et mémoire épinglée donnent le contrôle de chaque scène.',
          '**Ceux qui sont à l’aise avec un service cloud.** Rien dans la fiche ne promet un usage hors ligne ou sur l’appareil.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Pour qui Swerve n’est pas adapté',
        items: [
          '**Ceux qui ont besoin d’un chat hors ligne ou sur l’appareil.** [Backyard AI](/fr/power-local-llm/backyard-ai-review-local-roleplay) exécute les personnages sur votre propre ordinateur.',
          '**Les utilisateurs d’Android, de Mac ou de Windows.** Seule une version iPhone existe ; [RisuAI](/fr/power-local-llm/risuai-review) couvre web, bureau et mobile.',
          '**Ceux qui exigent l’open source ou une confidentialité stricte.** Le code n’est pas public ; lisez d’abord l’avis sous « Prix, confidentialité et données ».',
          '**Les moins de 18 ans.** L’application est classée et destinée aux adultes.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Swerve fonctionne-t-elle hors ligne ?',
            a: 'La fiche, le site et l’avis de confidentialité ne documentent aucun mode hors ligne ou sur l’appareil, et la bibliothèque de personnages communautaires laisse penser à un service en ligne.',
          },
          {
            q: 'Swerve Pro est-il un abonnement ?',
            a: 'La fiche ne le dit pas. Les conditions indiquent que les abonnements se renouvellent chaque mois via Apple, peuvent être résiliés dans les réglages d’abonnement Apple, et que toutes les ventes sont définitives.',
          },
          {
            q: 'Puis-je supprimer mon compte Swerve et mes données ?',
            a: 'Le site renvoie vers une page de suppression de compte, et l’avis indique que les données sont désactivées ou supprimées après la clôture du compte, certaines étant conservées pour prévenir la fraude et pour des raisons légales.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Sur le papier, Swerve convient aux adultes sur iPhone qui veulent un grand catalogue de personnages et un contrôle fin des histoires interactives, et qui acceptent un service cloud.',
          'Les réserves tiennent à la transparence et à la confidentialité : le code n’est pas public, aucun fournisseur d’IA n’est cité, et l’avis de confidentialité décrit un partage avec des réseaux publicitaires.',
          'Si vous voulez des personnages sur votre propre matériel, commencez par [Backyard AI](/fr/power-local-llm/backyard-ai-review-local-roleplay) ; pour l’open source, essayez [RisuAI](/fr/power-local-llm/risuai-review) ou [Agnai](/fr/power-local-llm/agnai-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Swerve sur l’App Store](https://apps.apple.com/fr/app/swerve-ai-chat-stories/id6754301136) — version, prix, prérequis, classement par âge, fonctions et développeur.',
          '[Site web de Swerve](https://www.getswerve.com/) — description du développeur et disponibilité par plateforme.',
          '[Avis de confidentialité de Swerve](https://www.getswerve.com/privacy) — collecte de données, partage avec les réseaux publicitaires et conservation.',
          '[Conditions générales de Swerve](https://www.getswerve.com/terms) — limite d’âge, politique de contenu et conditions d’abonnement.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Test de Backyard AI](/fr/power-local-llm/backyard-ai-review-local-roleplay) — un client de bureau qui exécute des personnages de jeu de rôle en local.',
          '[Test de RisuAI](/fr/power-local-llm/risuai-review) — une interface de jeu de rôle open source pour web, bureau et mobile.',
          '[Test d’Agnai](/fr/power-local-llm/agnai-review) — une interface de jeu de rôle open source dans le navigateur, avec cartes de personnages.',
          '[Le Local AI App Directory](/fr/directory) — un annuaire plus large d’applications d’IA locales et cloud, toutes plateformes.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    heroImage: '/images/swerve-ai-review-hero-ja.webp',
    title: 'Swerveレビュー：iPhone向けAIストーリー＆キャラクターチャット',
    seoTitle: 'Swerveレビュー：iPhoneのAIキャラチャットとストーリー',
    intro:
      'Swerve: AI Chat & Stories は、MSPW Labs, Inc.が提供する、AIキャラクターとチャットし、分岐するストーリーを遊べるiPhoneアプリです。このレビューでは、App Storeの掲載情報、公式サイト、プライバシー通知、利用規約が記載している内容と記載していない点、そして自分のハードウェアで動くロールプレイアプリとの違いを整理します。',
    metaDescription:
      'Swerveのレビュー。AIキャラクターとのチャットとインタラクティブなストーリーを楽しめる無料のiPhoneアプリ。アプリ内課金、18+、クラウド、プライバシー、ローカルの代替も紹介。',
    twitterDescription:
      'Swerveのレビュー：AIキャラクターチャットと分岐ストーリーのフリーミアムiPhoneアプリ。料金、18+、プライバシー通知、制約、ローカルの代替を解説します。',
    audience:
      'AIロールプレイ・ストーリーアプリを検討中のiPhoneユーザー向け。機能、料金、プライバシー、年齢区分、制約、ローカルで動く代替を扱います。',
    readTime: '6分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Swerveレビュー',
    targetKeywords: [
      'swerve ai レビュー',
      'swerve ai chat and stories',
      'swerve アプリ iphone',
      'mspw labs swerve',
      'aiキャラクターチャット iphone',
      'aiロールプレイ アプリ ios',
      'swerve プライバシー',
      'ローカル ロールプレイ 代替',
    ],
    current_hardware_mentioned: ['iPhone'],
    leadAnswerBlock:
      '**Swerve: AI Chat & Stories は、AIキャラクターとチャットし、分岐するストーリーを遊べる無料のクローズドソースiPhoneアプリです。ローカルAIアプリではなく、オンラインサービスです。** App Storeの掲載情報によると、iOS 18.0以降が必要です。このレビューはバージョン1.32.0（最終更新日：2026年10月7日）が対象で、公開されている掲載情報、公式サイト、プライバシー通知、利用規約に基づいており、実機での検証は行っていません。',
    quickAnswerTop: {
      ja: {
        question: 'iPhoneでAIキャラクターチャットやストーリーを楽しむなら、Swerveは入れる価値がありますか？',
        answer:
          '用意済みキャラクターの大きなライブラリとストーリー操作をモバイルアプリで使いたく、オンラインサービスで構わないなら、検討の余地があります。自分のハードウェアで動くキャラクターや、広告ネットワークへの共有がないプライバシー通知を求めるなら、後述のローカルの代替を確認してください。',
        bullets: [
          'コミュニティ作成のキャラクターが50万体以上。自作も公開・非公開で作れます。',
          'ストーリー操作：複数キャラクターの場面、ペルソナ、固定メモリ、スワイプ、編集、任意のメッセージからの分岐。',
          'ダウンロードは無料。Proプランとジェムパックはアプリ内課金です。',
          'プライバシー通知には、識別子とインターネット活動を過去12か月に広告ネットワークへ販売または共有したと記載されています。',
          'Android版とWeb版はウェイトリストのみです。',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Swerveの入手方法', anchor: 'get-it' },
      { label: 'Swerveの概要', anchor: 'at-a-glance' },
      { label: 'Swerveとは', anchor: 'what-is-swerve' },
      { label: '機能', anchor: 'features' },
      { label: '料金・プライバシー・データ', anchor: 'privacy' },
      { label: '年齢区分とコンテンツ', anchor: 'age-content' },
      { label: 'メリットと制約', anchor: 'tradeoffs' },
      { label: 'Swerveと代替アプリの比較', anchor: 'vs-alternatives' },
      { label: 'Swerveが向いている人', anchor: 'who-should-use' },
      { label: 'Swerveが向いていない人', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
      { label: '情報源', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MSPW Labs, Inc.のSwerveは、AIキャラクターとチャットし、分岐するストーリーを遊べるフリーミアムのiPhoneアプリです。',
          },
          {
            type: 'plain-terms',
            text: '大きなキャラクターカタログを備えたモバイル向けストーリーエンジンと考えてください。キャラクターの行動を入力すると、AIの登場人物が応答します。',
          },
        ],
        items: [
          'レビュー対象バージョン：1.32.0（[App Storeの掲載情報](https://apps.apple.com/jp/app/swerve-ai-chat-stories/id6754301136)に表示）。',
          '動作場所：掲載情報、公式サイト、通知のいずれもAIモデルやホストを明示しておらず、オンデバイスモードの記載もありません。',
          '年齢：App Storeでは18+。年齢区分の詳細には、性的な内容やヌードが頻繁に含まれると記載されています。',
          '言語：掲載情報は英語のみです。',
          'オープン性：クローズドソース。公開リポジトリは見つかりませんでした。',
        ],
      },
      getItSwerve: {
        id: 'get-it',
        title: 'Swerveの入手方法',
        content: [
          '**SwerveはApple App Store経由で配布されるiPhone専用アプリです。** ダウンロードサイズは116.9 MBで、無料（アプリ内課金あり）です。',
        ],
        columns: ['入手経路', '入手先'],
        rows: [
          {
            '入手経路': 'Apple App Store',
            '入手先': '[App StoreのSwerve](https://apps.apple.com/jp/app/swerve-ai-chat-stories/id6754301136)',
          },
          {
            '入手経路': '公式サイト',
            '入手先': '[getswerve.com](https://www.getswerve.com/)',
          },
          {
            '入手経路': 'プライバシー',
            '入手先': '[Swerveのプライバシー通知](https://www.getswerve.com/privacy)',
          },
          {
            '入手経路': '利用規約',
            '入手先': '[Swerveの利用規約](https://www.getswerve.com/terms)',
          },
        ],
        note: '公式サイトではAndroid版は[ウェイトリスト](https://www.getswerve.com/android)のみで、Web版もウェイトリストです。公開されているソースリポジトリは見つかりませんでした。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Swerveの概要',
        columns: ['項目', 'Swerve'],
        rows: [
          { '項目': 'プラットフォーム', 'Swerve': 'iPhone、iOS 18.0以降' },
          { '項目': '価格', 'Swerve': '無料（アプリ内課金あり）' },
          { '項目': 'ライセンス', 'Swerve': 'クローズドソース' },
          { '項目': 'オフライン動作', 'Swerve': 'オンデバイスモードの記載なし' },
          { '項目': 'グループチャット', 'Swerve': '可（1つのストーリーに複数キャラ）' },
          { '項目': 'ロアブック／ワールド情報', 'Swerve': '掲載情報に記載なし' },
          { '項目': '年齢区分', 'Swerve': '18+' },
          { '項目': 'バージョン／最終更新', 'Swerve': '1.32.0／2026年10月7日' },
          { '項目': 'UI言語', 'Swerve': '英語' },
        ],
        note: '項目はLocal AI App Directoryのロールプレイ比較に準じています。内容はApp Storeの掲載情報と公式サイトに基づいており、すべての機能を網羅しているわけではありません。',
      },
      whatIsSwerve: {
        id: 'what-is-swerve',
        title: 'Swerveとは',
        content: [
          '**Swerveはインタラクティブフィクションのチャットアプリで、「自分の言葉でストーリーを遊ぶ」と、AIキャラクターが応答します。** 掲載情報には、ロマンス、ドラマ、アニメ、ファンタジーなどのジャンルにわたる、コミュニティ作成の50万体以上のキャラクターがあると説明されています。',
          '提供元は米国企業のMSPW Labs, Inc.です。公式サイトはgetswerve.comを「Swerve AIの唯一の公式サイト」としているため、名前の似たアプリやサイトは別の製品として扱ってください。',
          'このレビューは掲載情報、公式サイト、プライバシー通知、利用規約のみに基づいています。実機での検証は含まないため、回答の質、メモリの信頼性、コンテンツ管理、速度は評価していません。',
        ],
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**このアプリは、キャラクターカタログと、各ストーリーを細かく制御する機能を組み合わせています。** 以下はすべてApp Storeの掲載情報に基づきます。',
        ],
        items: [
          '**キャラクター。** コミュニティのキャラクターを探すか、自作して公開または非公開にできます。',
          '**ストーリーモード。** 1対1でチャットするか、複数のキャラクターを同じストーリーに招き、ペルソナで好きなキャラクターとして遊べます。',
          '**メモリ。** キャラクターに覚えてほしい情報を固定できます。',
          '**操作。** 別の返信を求める、メッセージを編集する、任意のメッセージから新しい分岐を始めることができます。バージョン1.32.0では、自動下書きと、削除されるメッセージ数を示す巻き戻しプレビューが加わりました。',
          '**コミュニティ。** 掲載情報にDiscordコミュニティへのリンクがあります。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '料金・プライバシー・データ',
        content: [
          '**Swerveは無料でダウンロードでき、Proプラン、ジェムパック、一部のストアではSwerve Liteプランがアプリ内課金で用意されています。** 日本のストアではProが¥2,000、ジェムパックは¥400からです。掲載情報にはProやジェムで何が使えるようになるか記載がないため、まずアプリ内の購入画面を確認してください。',
          '**プライバシー通知（最終更新日：2026年6月19日）によると、Swerveは氏名、メールアドレス、ユーザー名のほか、IPアドレス、デバイスID・アプリID、アプリの利用状況、クラッシュレポートを収集します。** 決済はAppleとRevenueCat経由で処理され、FacebookやXでログインすると、氏名、メール、友達リスト、写真などのプロフィール情報が共有される場合があります。',
          '**通知には、識別子とインターネット活動を過去12か月に広告ネットワークへ販売または共有したとも記載されており、App Storeのラベルには、他社のアプリやWebサイトをまたいでユーザーを追跡するために使われる識別子が挙げられています。** AIプロバイダーは明記されず、「AIプラットフォーム」は受領者のカテゴリとして挙げられているだけで、チャットがモデルの学習に使われるかどうかも書かれていません。これらは開発元自身の記述であり、このレビューではネットワーク通信の検査は行っていません。',
        ],
      },
      ageContent: {
        id: 'age-content',
        title: '年齢区分とコンテンツ',
        content: [
          '**Swerveは成人向けです。App Storeの区分は18+で、利用規約にもサービスは18歳以上の利用者を対象とすると記載されています。** 年齢区分の詳細には、下品な言葉や性的な内容・ヌードが頻繁に含まれるとある一方、規約のコンテンツポリシーは、成人キャラクター同士の恋愛的なテーマを露骨でない場合に限り認めています。このレビューでは、アプリがコンテンツをどう管理しているかは検証していません。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'メリットと制約',
        columns: ['メリット', '実際の使い勝手', '制約・注意点'],
        rows: [
          {
            'メリット': '大規模なキャラクターライブラリ',
            '実際の使い勝手': '50万体以上のコミュニティキャラクターから始められます。',
            '制約・注意点': '品質とコンテンツ管理はキャラクターごとに異なり、ここでは検証していません。',
          },
          {
            'メリット': 'ストーリー操作',
            '実際の使い勝手': '任意のメッセージをスワイプ、編集、分岐、巻き戻しできます。',
            '制約・注意点': '下書きと巻き戻しプレビューは1.32.0で追加されたばかりです。',
          },
          {
            'メリット': '固定メモリ',
            '実際の使い勝手': '固定した情報をキャラクターが覚えるようになっています。',
            '制約・注意点': 'メモリの容量や精度に関する数値は公開されていません。',
          },
          {
            'メリット': '無料で始められる',
            '実際の使い勝手': '費用をかけずにダウンロードして試せます。',
            '制約・注意点': 'Proとジェムパックは有料で、何が使えるようになるかの説明はありません。',
          },
          {
            'メリット': '頻繁なアップデート',
            '実際の使い勝手': 'バージョン履歴には3月23日から10月7日までに25回のリリースがあります。',
            '制約・注意点': '最新版以外は「Bug fixes and performance improvements」とのみ記載されています。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Swerveと代替アプリの比較',
        columns: ['アプリ', '対応プラットフォーム', '価格とライセンス', '動作場所', '主な違い'],
        rows: [
          {
            'アプリ': 'Swerve',
            '対応プラットフォーム': 'iPhone',
            '価格とライセンス': 'フリーミアム、クローズドソース',
            '動作場所': '開発元のクラウドサービス',
            '主な違い': '用意済みのコミュニティキャラクター。デスクトップ版・Android版はまだなし',
          },
          {
            'アプリ': '[Agnai](/ja/power-local-llm/agnai-review)',
            '対応プラットフォーム': 'Web',
            '価格とライセンス': '無料、AGPL-3.0',
            '動作場所': 'ブラウザUI、外部のモデルバックエンド',
            '主な違い': 'オープンソース。モデルのバックエンドを自分で選べます',
          },
          {
            'アプリ': '[RisuAI](/ja/power-local-llm/risuai-review)',
            '対応プラットフォーム': 'Web、デスクトップ、モバイル',
            '価格とライセンス': '無料、GPL 3.0',
            '動作場所': '自分のバックエンドまたは用意したAPI',
            '主な違い': 'オープンソースでマルチプラットフォーム。モデルは自分で用意します',
          },
          {
            'アプリ': '[Backyard AI](/ja/power-local-llm/backyard-ai-review-local-roleplay)',
            '対応プラットフォーム': 'Mac、Windows',
            '価格とライセンス': 'フリーミアム、クローズドソース',
            '動作場所': '自分のコンピューター上',
            '主な違い': 'キャラクターがローカルで動作。デスクトップのみ',
          },
        ],
        note: 'サードパーティ製アプリのプラットフォーム、価格、機能の詳細は頻繁に変わります。決める前に、各アプリの掲載情報で最新の内容を確認してください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Swerveが向いている人',
        items: [
          '**用意済みのキャラクターをスマホで使いたい成人。** 50万体以上のライブラリがあるので、一からキャラクターを揃える手間が省けます。',
          '**ストーリーを自分で操作したいプレイヤー。** 分岐、編集、固定メモリで各場面をコントロールできます。',
          '**クラウドサービスで問題ない人。** 掲載情報にはオフラインやオンデバイスでの利用の記載はありません。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Swerveが向いていない人',
        items: [
          '**オフラインやオンデバイスのチャットが必要な人。** [Backyard AI](/ja/power-local-llm/backyard-ai-review-local-roleplay)なら自分のコンピューター上でキャラクターを動かせます。',
          '**Android、Mac、Windowsのユーザー。** iPhone版しかありません。[RisuAI](/ja/power-local-llm/risuai-review)はWeb、デスクトップ、モバイルに対応しています。',
          '**オープンソースや厳格なプライバシーが必要な人。** コードは非公開です。まず「料金・プライバシー・データ」の通知の内容を確認してください。',
          '**18歳未満の人。** このアプリは成人向けの区分・想定です。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Swerveはオフラインで使えますか？',
            a: '掲載情報、公式サイト、プライバシー通知のいずれにも、オフラインやオンデバイスのモードの記載はなく、コミュニティのキャラクターライブラリからもオンラインサービスであることがうかがえます。',
          },
          {
            q: 'Swerve Proはサブスクリプションですか？',
            a: '掲載情報には記載がありません。規約には、サブスクリプションはApple経由で毎月更新され、Appleのサブスクリプション設定で解約でき、すべての販売は最終であると記載されています。',
          },
          {
            q: 'Swerveのアカウントとデータは削除できますか？',
            a: '公式サイトにアカウント削除ページへのリンクがあり、通知にはアカウント終了後にデータが無効化または削除されると記載されています。ただし、不正防止や法的な理由で一部は保持されます。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: [
          'Swerveは、大規模なキャラクターカタログとインタラクティブなストーリーの細かな操作を求め、クラウドサービスで構わない成人のiPhoneユーザーに、紙の上では適しています。',
          '注意点は透明性とプライバシーです。クローズドソースで、AIプロバイダーは明記されておらず、プライバシー通知には広告ネットワークへの共有が記載されています。',
          '自分のハードウェアでキャラクターを動かしたいなら[Backyard AI](/ja/power-local-llm/backyard-ai-review-local-roleplay)から、オープンソースなら[RisuAI](/ja/power-local-llm/risuai-review)や[Agnai](/ja/power-local-llm/agnai-review)を試してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[App StoreのSwerve](https://apps.apple.com/jp/app/swerve-ai-chat-stories/id6754301136) — バージョン、価格、動作要件、年齢区分、機能、開発元。',
          '[Swerve公式サイト](https://www.getswerve.com/) — 開発元自身の説明とプラットフォームの提供状況。',
          '[Swerveのプライバシー通知](https://www.getswerve.com/privacy) — データ収集、広告ネットワークへの共有、保持。',
          '[Swerveの利用規約](https://www.getswerve.com/terms) — 年齢制限、コンテンツポリシー、サブスクリプション条件。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Backyard AIレビュー](/ja/power-local-llm/backyard-ai-review-local-roleplay) — ロールプレイのキャラクターをローカルで動かすデスクトップクライアント。',
          '[RisuAIレビュー](/ja/power-local-llm/risuai-review) — Web、デスクトップ、モバイル対応のオープンソースのロールプレイフロントエンド。',
          '[Agnaiレビュー](/ja/power-local-llm/agnai-review) — キャラクターカード対応のオープンソースのブラウザ型ロールプレイフロントエンド。',
          '[Local AI App Directory](/ja/directory) — 各プラットフォームのローカルAIアプリとクラウドAIアプリを集めた、より広範なディレクトリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    heroImage: '/images/swerve-ai-review-hero-zh.webp',
    title: 'Swerve评测：面向iPhone的AI故事与角色聊天应用',
    seoTitle: 'Swerve评测：iPhone上的AI角色聊天与故事应用',
    intro:
      'Swerve: AI Chat & Stories 是MSPW Labs, Inc.推出的iPhone应用，可与AI角色聊天并游玩分支故事。本评测梳理其App Store页面、官网、隐私声明和条款中记载的内容、未说明的部分，以及它与可在自有硬件上运行的角色扮演应用相比如何。',
    metaDescription:
      'Swerve评测：免费的iPhone应用，支持AI角色聊天与互动故事。含应用内购买、18+分级、云端服务、隐私声明、局限性，以及可本地运行的角色扮演替代品。',
    twitterDescription:
      'Swerve评测：免费增值的iPhone应用，支持AI角色聊天与分支故事。价格、18+分级、隐私声明、局限性及本地角色扮演替代品。',
    audience:
      '正在考虑AI角色扮演与故事应用的iPhone用户——涵盖功能、价格、隐私、年龄分级、局限性以及可本地运行的替代品。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Swerve评测',
    targetKeywords: [
      'swerve ai 评测',
      'swerve ai chat and stories',
      'swerve 应用 iphone',
      'mspw labs swerve',
      'ai角色聊天应用 iphone',
      'ai角色扮演应用 ios',
      'swerve 隐私',
      '本地角色扮演替代品',
    ],
    current_hardware_mentioned: ['iPhone'],
    leadAnswerBlock:
      '**Swerve: AI Chat & Stories 是一款免费、闭源的iPhone应用，用于与AI角色聊天并游玩分支故事；它是在线服务，而非本地AI应用。** 根据App Store页面，它需要iOS 18.0或更高版本。本评测针对1.32.0版本（最后更新于2026年10月7日），依据公开的页面、官网、隐私声明和条款，并非实际上手测试。',
    quickAnswerTop: {
      zh: {
        question: '想在iPhone上玩AI角色聊天和故事，Swerve值得安装吗？',
        answer:
          '如果你想在手机应用里使用大量现成角色和故事控制功能，并且接受在线服务，可以考虑。如果你更看重角色在自有硬件上运行，或希望隐私声明中没有向广告网络共享数据，请看下文的本地替代品。',
        bullets: [
          '超过50万个社区创建的角色，也可自建角色并选择公开或私有。',
          '故事控制：多角色场景、人设、固定记忆、滑动换回复、编辑，并可从任意消息开启新分支。',
          '免费下载；Pro档位和宝石包为应用内购买。',
          '隐私声明称，过去12个月内标识符和互联网活动数据曾被出售或共享给广告网络。',
          'Android版和网页版目前仅开放候补名单。',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: '获取Swerve', anchor: 'get-it' },
      { label: 'Swerve概览', anchor: 'at-a-glance' },
      { label: 'Swerve是什么', anchor: 'what-is-swerve' },
      { label: '功能', anchor: 'features' },
      { label: '价格、隐私与数据', anchor: 'privacy' },
      { label: '年龄分级与内容', anchor: 'age-content' },
      { label: '优势与局限', anchor: 'tradeoffs' },
      { label: 'Swerve与替代品对比', anchor: 'vs-alternatives' },
      { label: '适合使用Swerve的人', anchor: 'who-should-use' },
      { label: '不适合使用Swerve的人', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MSPW Labs, Inc.的Swerve是一款免费增值的iPhone应用，可与AI角色聊天并游玩分支故事。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作拥有庞大角色库的手机故事引擎：你输入角色的行动，AI演员阵容负责回应。',
          },
        ],
        items: [
          '评测版本：1.32.0，见[App Store页面](https://apps.apple.com/us/app/swerve-ai-chat/id6754301136)。',
          '运行位置：页面、官网和声明均未说明所用AI模型或托管方，也没有记载设备端模式。',
          '年龄：App Store分级为18+，年龄分级详情列出频繁出现的性内容或裸露。',
          '语言：页面仅提供英文。',
          '开放性：闭源；未找到公开代码仓库。',
        ],
      },
      getItSwerve: {
        id: 'get-it',
        title: '获取Swerve',
        content: [
          '**Swerve通过Apple App Store分发，仅支持iPhone。** 下载大小为116.9 MB，免费下载，含应用内购买。',
        ],
        columns: ['渠道', '获取方式'],
        rows: [
          {
            '渠道': 'Apple App Store',
            '获取方式': '[App Store上的Swerve](https://apps.apple.com/us/app/swerve-ai-chat/id6754301136)',
          },
          {
            '渠道': '官网',
            '获取方式': '[getswerve.com](https://www.getswerve.com/)',
          },
          {
            '渠道': '隐私',
            '获取方式': '[Swerve隐私声明](https://www.getswerve.com/privacy)',
          },
          {
            '渠道': '条款',
            '获取方式': '[Swerve条款与条件](https://www.getswerve.com/terms)',
          },
        ],
        note: '官网上Android版仅提供[候补名单](https://www.getswerve.com/android)，网页版同样是候补名单。未找到公开的源代码仓库。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Swerve概览',
        columns: ['属性', 'Swerve'],
        rows: [
          { '属性': '平台', 'Swerve': 'iPhone，iOS 18.0+' },
          { '属性': '价格', 'Swerve': '免费，含应用内购买' },
          { '属性': '许可证', 'Swerve': '闭源' },
          { '属性': '可离线运行', 'Swerve': '未记载设备端模式' },
          { '属性': '群聊', 'Swerve': '支持，一个故事可有多个角色' },
          { '属性': '设定集 / 世界信息', 'Swerve': '页面未说明' },
          { '属性': '年龄分级', 'Swerve': '18+' },
          { '属性': '版本 / 最近更新', 'Swerve': '1.32.0 / 2026年10月7日' },
          { '属性': '界面语言', 'Swerve': '英语' },
        ],
        note: '这些属性沿用Local AI App Directory的角色扮演对比项，来自App Store页面和官网，并未覆盖所有功能。',
      },
      whatIsSwerve: {
        id: 'what-is-swerve',
        title: 'Swerve是什么',
        content: [
          '**Swerve是一款互动小说式聊天应用：你“用自己的话玩故事”，AI角色随之回应。** 页面称其拥有超过50万个社区创建的角色，涵盖浪漫、剧情、动漫和奇幻等类型。',
          '它由美国公司MSPW Labs, Inc.发布。官网称getswerve.com是“Swerve AI唯一的官方网站”，因此名称相近的应用和网站应视为不同产品。',
          '本评测仅依据App Store页面、官网、隐私声明和条款，不含实际上手测试，因此回答质量、记忆可靠性、内容审核和速度均未在此评分。',
        ],
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**这款应用把角色库与对每个故事的精细控制结合在一起。** 以下内容均来自App Store页面。',
        ],
        items: [
          '**角色。** 浏览社区角色，或自建角色并选择公开分享或保持私有。',
          '**故事模式。** 可一对一聊天，也可让多个角色进入同一个故事，并通过人设扮演任意角色。',
          '**记忆。** 固定希望角色记住的细节。',
          '**控制。** 可要求换一个回复、编辑消息，或从任意消息开启新的分支。1.32.0版新增自动草稿，以及会显示将删除多少条消息的回退预览。',
          '**社区。** 页面链接了Discord社区。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '价格、隐私与数据',
        content: [
          '**Swerve可免费下载，应用内购买包括Pro档位、宝石包，部分商店还有Swerve Lite档位。** 在美国商店，Pro售价为$12.49，宝石包起价$2.49。页面没有说明Pro或宝石解锁什么，请先查看应用内的付费页面。',
          '**隐私声明（最后更新于2026年6月19日）称，Swerve会收集姓名、电子邮件地址和用户名，以及IP地址、设备与应用标识符、应用活动和崩溃报告。** 付款通过Apple和RevenueCat处理；使用Facebook或X登录时，可能会共享姓名、邮箱、好友列表和头像等资料。',
          '**声明还称，过去12个月内标识符和互联网活动数据曾被出售或共享给广告网络，App Store隐私标签也列出了用于跨其他公司应用和网站追踪你的标识符。** 声明没有点名任何AI提供方，仅把“AI平台”列为接收方类别，也没有说明聊天内容是否用于训练模型。以上均为开发者自己的说法，本评测未检查网络流量。',
        ],
      },
      ageContent: {
        id: 'age-content',
        title: '年龄分级与内容',
        content: [
          '**Swerve面向成年人：App Store分级为18+，条款也称服务面向年满18岁的用户。** 年龄分级详情列出频繁的粗俗用语以及性内容或裸露，而条款中的内容政策只允许成年角色之间不露骨的浪漫主题。本评测未测试应用如何审核内容。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '优势与局限',
        columns: ['优势', '实际使用中的意义', '局限 / 注意事项'],
        rows: [
          {
            '优势': '庞大的角色库',
            '实际使用中的意义': '可从超过50万个社区角色开始。',
            '局限 / 注意事项': '角色质量和审核情况因角色而异，此处均未测试。',
          },
          {
            '优势': '故事控制',
            '实际使用中的意义': '可对任意消息滑动换回复、编辑、分支和回退。',
            '局限 / 注意事项': '草稿和回退预览是1.32.0版新增的。',
          },
          {
            '优势': '固定记忆',
            '实际使用中的意义': '角色会被要求记住你固定的细节。',
            '局限 / 注意事项': '未公布记忆容量或准确度数据。',
          },
          {
            '优势': '免费开始',
            '实际使用中的意义': '无需付费即可下载试用。',
            '局限 / 注意事项': 'Pro和宝石包需另外付费，解锁内容未作说明。',
          },
          {
            '优势': '更新频繁',
            '实际使用中的意义': '版本历史显示3月23日至10月7日共有25次发布。',
            '局限 / 注意事项': '除最新版本外，其余仅写“Bug fixes and performance improvements”。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Swerve与替代品对比',
        columns: ['应用', '平台', '价格与许可证', '运行位置', '主要区别'],
        rows: [
          {
            '应用': 'Swerve',
            '平台': 'iPhone',
            '价格与许可证': '免费增值，闭源',
            '运行位置': '开发者的云端服务',
            '主要区别': '现成的社区角色；暂无桌面版或Android版',
          },
          {
            '应用': '[Agnai](/zh/power-local-llm/agnai-review)',
            '平台': '网页',
            '价格与许可证': '免费，AGPL-3.0',
            '运行位置': '浏览器界面，外部模型后端',
            '主要区别': '开源；可自选模型后端',
          },
          {
            '应用': '[RisuAI](/zh/power-local-llm/risuai-review)',
            '平台': '网页、桌面、移动',
            '价格与许可证': '免费，GPL 3.0',
            '运行位置': '你自己的后端或你提供的API',
            '主要区别': '开源且跨平台；自带模型',
          },
          {
            '应用': '[Backyard AI](/zh/power-local-llm/backyard-ai-review-local-roleplay)',
            '平台': 'Mac、Windows',
            '价格与许可证': '免费增值，闭源',
            '运行位置': '在你自己的电脑上',
            '主要区别': '角色在本地运行；仅限桌面',
          },
        ],
        note: '第三方应用的平台、价格和功能细节经常变化。做决定前，请在各应用自己的页面核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合使用Swerve的人',
        items: [
          '**想在手机上使用现成角色的成年人。** 50万个以上的角色库省去了从零搭建阵容的工作。',
          '**喜欢掌控剧情的故事玩家。** 分支、编辑和固定记忆让你能控制每一个场景。',
          '**能接受云端服务的人。** 页面没有承诺离线或设备端使用。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '不适合使用Swerve的人',
        items: [
          '**需要离线或设备端聊天的人。** [Backyard AI](/zh/power-local-llm/backyard-ai-review-local-roleplay)在你自己的电脑上运行角色。',
          '**Android、Mac或Windows用户。** 目前只有iPhone版；[RisuAI](/zh/power-local-llm/risuai-review)覆盖网页、桌面和移动端。',
          '**需要开源或严格隐私保障的人。** 代码不公开；请先阅读“价格、隐私与数据”中的声明。',
          '**18岁以下的人。** 该应用按成年人分级，也面向成年人。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Swerve可以离线使用吗？',
            a: '页面、官网和隐私声明均未记载离线或设备端模式，社区角色库也表明它是在线服务。',
          },
          {
            q: 'Swerve Pro是订阅吗？',
            a: '页面没有说明。条款称订阅通过Apple按月续订，可在Apple订阅设置中取消，且所有销售均为最终销售。',
          },
          {
            q: '我能删除Swerve账号和数据吗？',
            a: '官网链接了账号删除页面，声明称账号终止后数据会被停用或删除，部分数据会出于防欺诈和法律原因保留。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '从纸面上看，Swerve适合想要庞大角色库和精细互动故事控制、并能接受云端服务的成年iPhone用户。',
          '需要注意的是透明度和隐私：它是闭源的，没有点名AI提供方，隐私声明还描述了向广告网络的共享。',
          '如果想让角色在自有硬件上运行，请先看[Backyard AI](/zh/power-local-llm/backyard-ai-review-local-roleplay)；想要开源，可试试[RisuAI](/zh/power-local-llm/risuai-review)或[Agnai](/zh/power-local-llm/agnai-review)。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[App Store上的Swerve](https://apps.apple.com/us/app/swerve-ai-chat/id6754301136) — 版本、价格、系统要求、年龄分级、功能和开发者。',
          '[Swerve官网](https://www.getswerve.com/) — 开发者自己的介绍和平台可用性。',
          '[Swerve隐私声明](https://www.getswerve.com/privacy) — 数据收集、向广告网络共享和保留期限。',
          '[Swerve条款与条件](https://www.getswerve.com/terms) — 年龄限制、内容政策和订阅条款。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Backyard AI评测](/zh/power-local-llm/backyard-ai-review-local-roleplay) — 在本地运行角色扮演角色的桌面客户端。',
          '[RisuAI评测](/zh/power-local-llm/risuai-review) — 支持网页、桌面和移动端的开源角色扮演前端。',
          '[Agnai评测](/zh/power-local-llm/agnai-review) — 带角色卡的开源浏览器角色扮演前端。',
          '[Local AI App Directory](/zh/directory) — 涵盖各平台本地与云端AI应用的更全面目录。',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    heroImage: '/images/swerve-ai-review-hero-es.webp',
    title: 'Reseña de Swerve: chat de historias y personajes con IA para iPhone',
    seoTitle: 'Reseña de Swerve: chat de historias y personajes con IA',
    intro:
      'Swerve: AI Chat & Stories es una app para iPhone de MSPW Labs, Inc. para chatear con personajes de IA y jugar historias con ramificaciones. Esta reseña recoge lo que documentan su ficha de la App Store, su sitio web, su aviso de privacidad y sus términos, lo que dejan sin decir y cómo se compara con apps de rol que puedes ejecutar en tu propio hardware.',
    metaDescription:
      'Reseña de Swerve: app gratuita para iPhone de chat con personajes de IA e historias ramificadas. Compras en la app, 18+, nube, privacidad y alternativas.',
    twitterDescription:
      'Reseña de Swerve: una app freemium para iPhone de chat con personajes de IA e historias con ramificaciones. Precios, clasificación 18+, aviso de privacidad, límites y alternativas locales.',
    audience:
      'Usuarios de iPhone que valoran una app de rol e historias con IA — cubre funciones, precios, privacidad, clasificación por edad, límites y alternativas que se ejecutan en local.',
    readTime: '6 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Reseña de Swerve',
    targetKeywords: [
      'swerve ai reseña',
      'swerve ai chat and stories',
      'swerve app iphone',
      'mspw labs swerve',
      'app chat personajes ia iphone',
      'app rol con ia ios',
      'swerve privacidad',
      'alternativas locales de rol',
    ],
    current_hardware_mentioned: ['iPhone'],
    leadAnswerBlock:
      '**Swerve: AI Chat & Stories es una app gratuita y de código cerrado para iPhone con la que chatear con personajes de IA y jugar historias con ramificaciones; es un servicio en línea, no una app de IA local.** Según su ficha de la App Store, requiere iOS 18.0 o posterior. Esta reseña cubre la versión 1.32.0, actualizada por última vez el 7 de octubre de 2026, y se basa en la ficha pública, el sitio web, el aviso de privacidad y los términos, no en pruebas prácticas.',
    quickAnswerTop: {
      es: {
        question: '¿Vale la pena instalar Swerve para chatear con personajes de IA y jugar historias en el iPhone?',
        answer:
          'Quizá, si quieres una gran biblioteca de personajes ya hechos y controles de historia en una app móvil, y aceptas un servicio en línea. Si prefieres personajes en tu propio hardware, o un aviso de privacidad sin compartición con redes publicitarias, mira las alternativas locales de abajo.',
        bullets: [
          'Más de 500.000 personajes creados por la comunidad, además de los tuyos, públicos o privados.',
          'Controles de historia: escenas con varios personajes, personas, memoria fijada, deslizar, editar y ramificar desde cualquier mensaje.',
          'Descarga gratuita; un nivel Pro y paquetes de gemas son compras dentro de la app.',
          'El aviso de privacidad dice que identificadores y actividad en internet se vendieron o compartieron con redes publicitarias en los últimos 12 meses.',
          'Las versiones para Android y web son solo lista de espera.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Conseguir Swerve', anchor: 'get-it' },
      { label: 'Swerve de un vistazo', anchor: 'at-a-glance' },
      { label: 'Qué es Swerve', anchor: 'what-is-swerve' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Precios, privacidad y datos', anchor: 'privacy' },
      { label: 'Clasificación por edad y contenido', anchor: 'age-content' },
      { label: 'Ventajas y limitaciones', anchor: 'tradeoffs' },
      { label: 'Swerve frente a las alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quién es Swerve', anchor: 'who-should-use' },
      { label: 'Para quién no es Swerve', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Swerve, de MSPW Labs, Inc., es una app freemium para iPhone con la que chatear con personajes de IA y jugar historias con ramificaciones.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en un motor de historias móvil con un gran catálogo de personajes: escribes lo que hace tu personaje y el reparto de IA responde.',
          },
        ],
        items: [
          'Versión analizada: 1.32.0, tal como aparece en la [ficha de la App Store](https://apps.apple.com/es/app/swerve-ai-chat-stories/id6754301136).',
          'Dónde se ejecuta: la ficha, el sitio y el aviso no nombran ningún modelo de IA ni proveedor de alojamiento, y no se documenta un modo en el dispositivo.',
          'Edad: clasificada 18+ en la App Store, con contenido sexual o desnudez frecuentes en los detalles de clasificación.',
          'Idioma: la ficha está solo en inglés.',
          'Apertura: código cerrado; no se encontró un repositorio público.',
        ],
      },
      getItSwerve: {
        id: 'get-it',
        title: 'Conseguir Swerve',
        content: [
          '**Swerve se distribuye a través de la App Store de Apple como app solo para iPhone.** La descarga pesa 116.9 MB y es gratuita, con compras dentro de la app.',
        ],
        columns: ['Canal', 'Dónde conseguirla'],
        rows: [
          {
            'Canal': 'App Store de Apple',
            'Dónde conseguirla': '[Swerve en la App Store](https://apps.apple.com/es/app/swerve-ai-chat-stories/id6754301136)',
          },
          {
            'Canal': 'Sitio web',
            'Dónde conseguirla': '[getswerve.com](https://www.getswerve.com/)',
          },
          {
            'Canal': 'Privacidad',
            'Dónde conseguirla': '[Aviso de privacidad de Swerve](https://www.getswerve.com/privacy)',
          },
          {
            'Canal': 'Términos',
            'Dónde conseguirla': '[Términos y condiciones de Swerve](https://www.getswerve.com/terms)',
          },
        ],
        note: 'El sitio ofrece Android solo como [lista de espera](https://www.getswerve.com/android), y la versión web también. No se encontró un repositorio público del código fuente.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Swerve de un vistazo',
        columns: ['Atributo', 'Swerve'],
        rows: [
          { 'Atributo': 'Plataforma', 'Swerve': 'iPhone, iOS 18.0+' },
          { 'Atributo': 'Precio', 'Swerve': 'Gratis, compras en la app' },
          { 'Atributo': 'Licencia', 'Swerve': 'Código cerrado' },
          { 'Atributo': 'Funciona sin conexión', 'Swerve': 'Sin modo local documentado' },
          { 'Atributo': 'Chats grupales', 'Swerve': 'Sí, varios personajes por historia' },
          { 'Atributo': 'Lorebooks / world info', 'Swerve': 'No se menciona en la ficha' },
          { 'Atributo': 'Clasificación por edad', 'Swerve': '18+' },
          { 'Atributo': 'Versión / última act.', 'Swerve': '1.32.0 / 7 de octubre de 2026' },
          { 'Atributo': 'Idioma de la interfaz', 'Swerve': 'Inglés' },
        ],
        note: 'Los atributos siguen la comparativa de rol del Local AI App Directory. Proceden de la ficha de la App Store y del sitio web, que no cubren todas las funciones.',
      },
      whatIsSwerve: {
        id: 'what-is-swerve',
        title: 'Qué es Swerve',
        content: [
          '**Swerve es una app de chat de ficción interactiva: «juegas historias con tus propias palabras» y los personajes de IA responden.** La ficha describe más de 500.000 personajes creados por la comunidad, de géneros como romance, drama, anime y fantasía.',
          'La publica MSPW Labs, Inc., una empresa estadounidense. El sitio web llama a getswerve.com «el único sitio web oficial de Swerve AI», así que trata las apps y sitios de nombre parecido como productos distintos.',
          'Esta reseña se apoya solo en la ficha, el sitio web, el aviso de privacidad y los términos. No incluye pruebas prácticas, por lo que aquí no se valoran la calidad de las respuestas, la fiabilidad de la memoria, la moderación ni la velocidad.',
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**La app combina un catálogo de personajes con un control detallado de cada historia.** Todo lo que sigue procede de la ficha de la App Store.',
        ],
        items: [
          '**Personajes.** Explora personajes de la comunidad o crea los tuyos y compártelos públicamente o mantenlos privados.',
          '**Modos de historia.** Chatea de uno en uno o lleva a varios personajes a la misma historia, y juega como cualquier personaje mediante personas.',
          '**Memoria.** Fija los detalles que los personajes deben recordar.',
          '**Control.** Pide otra respuesta, edita mensajes o abre un camino nuevo desde cualquier mensaje. La versión 1.32.0 añade borradores automáticos y una vista previa al retroceder que muestra cuántos mensajes se eliminarán.',
          '**Comunidad.** La ficha enlaza una comunidad de Discord.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Precios, privacidad y datos',
        content: [
          '**Swerve se descarga gratis, con compras dentro de la app para un nivel Pro, paquetes de gemas y, en algunas tiendas, un nivel Swerve Lite.** En la tienda española, Pro cuesta 14,99 € y los paquetes de gemas empiezan en 2,99 €. La ficha no dice qué desbloquean Pro ni las gemas, así que revisa primero la pantalla de pago en la app.',
          '**Según el aviso de privacidad, actualizado por última vez el 19 de junio de 2026, Swerve recopila nombres, direcciones de correo y nombres de usuario, además de dirección IP, identificadores de dispositivo y de app, actividad en la app e informes de fallos.** Los pagos pasan por Apple y RevenueCat, e iniciar sesión con Facebook o X puede compartir datos de perfil como nombre, correo, lista de amigos y foto.',
          '**El aviso también dice que identificadores y actividad en internet se vendieron o compartieron con redes publicitarias en los últimos 12 meses, y la etiqueta de la App Store enumera identificadores usados para rastrearte entre apps y sitios web de otras empresas.** No nombra ningún proveedor de IA, menciona las «plataformas de IA» solo como categoría de destinatarios y no aclara si los chats se usan para entrenar modelos. Son declaraciones del propio desarrollador; esta reseña no inspeccionó el tráfico de red.',
        ],
      },
      ageContent: {
        id: 'age-content',
        title: 'Clasificación por edad y contenido',
        content: [
          '**Swerve es para adultos: la clasificación de la App Store es 18+ y los términos dicen que los servicios están pensados para usuarios de al menos 18 años.** Los detalles de clasificación enumeran palabrotas y contenido sexual o desnudez frecuentes, mientras que la política de contenido de los términos solo permite temas románticos entre personajes adultos si no son explícitos. Esta reseña no probó cómo modera la app el contenido.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Ventajas y limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / salvedad'],
        rows: [
          {
            'Ventaja': 'Gran biblioteca de personajes',
            'Qué significa en el uso real': 'Más de 500.000 personajes de la comunidad para empezar.',
            'Limitación / salvedad': 'La calidad y la moderación varían según el personaje; aquí no se probó ninguno.',
          },
          {
            'Ventaja': 'Control de la historia',
            'Qué significa en el uso real': 'Deslizar, editar, ramificar y retroceder cualquier mensaje.',
            'Limitación / salvedad': 'Los borradores y la vista previa al retroceder son nuevos en la 1.32.0.',
          },
          {
            'Ventaja': 'Memoria fijada',
            'Qué significa en el uso real': 'Se pide a los personajes que recuerden los detalles que fijas.',
            'Limitación / salvedad': 'No se publican cifras de tamaño ni de precisión de la memoria.',
          },
          {
            'Ventaja': 'Gratis para empezar',
            'Qué significa en el uso real': 'Descarga y prueba sin coste.',
            'Limitación / salvedad': 'Pro y los paquetes de gemas cuestan aparte; no se describe qué desbloquean.',
          },
          {
            'Ventaja': 'Actualizaciones frecuentes',
            'Qué significa en el uso real': 'El historial muestra 25 versiones del 23 de marzo al 7 de octubre.',
            'Limitación / salvedad': 'Todas menos la última indican solo «Bug fixes and performance improvements».',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Swerve frente a las alternativas',
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Dónde se ejecuta', 'Diferencia clave'],
        rows: [
          {
            'App': 'Swerve',
            'Plataformas': 'iPhone',
            'Precio y licencia': 'Freemium, código cerrado',
            'Dónde se ejecuta': 'Servicio en la nube del desarrollador',
            'Diferencia clave': 'Personajes de la comunidad ya hechos; aún sin versión de escritorio ni Android',
          },
          {
            'App': '[Agnai](/es/power-local-llm/agnai-review)',
            'Plataformas': 'Web',
            'Precio y licencia': 'Gratis, AGPL-3.0',
            'Dónde se ejecuta': 'Interfaz en el navegador, backend de modelo externo',
            'Diferencia clave': 'Código abierto; tú eliges el backend del modelo',
          },
          {
            'App': '[RisuAI](/es/power-local-llm/risuai-review)',
            'Plataformas': 'Web, escritorio, móvil',
            'Precio y licencia': 'Gratis, GPL 3.0',
            'Dónde se ejecuta': 'Tu backend o una API que aportes',
            'Diferencia clave': 'Código abierto y multiplataforma; traes tu propio modelo',
          },
          {
            'App': '[Backyard AI](/es/power-local-llm/backyard-ai-review-local-roleplay)',
            'Plataformas': 'Mac, Windows',
            'Precio y licencia': 'Freemium, código cerrado',
            'Dónde se ejecuta': 'En tu propio ordenador',
            'Diferencia clave': 'Los personajes se ejecutan en local; solo escritorio',
          },
        ],
        note: 'Los detalles de plataforma, precio y funciones de las apps de terceros cambian con frecuencia. Verifica los datos actuales en la ficha de cada app antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es Swerve',
        items: [
          '**Adultos que quieren personajes ya hechos en el móvil.** La biblioteca de más de 500.000 personajes evita montar un reparto desde cero.',
          '**Jugadores de historias a los que les gusta dirigir.** Ramificar, editar y la memoria fijada dan control sobre cada escena.',
          '**Quien se sienta cómodo con un servicio en la nube.** Nada en la ficha promete uso sin conexión ni en el dispositivo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quién no es Swerve',
        items: [
          '**Quien necesite chat sin conexión o en el dispositivo.** [Backyard AI](/es/power-local-llm/backyard-ai-review-local-roleplay) ejecuta los personajes en tu propio ordenador.',
          '**Usuarios de Android, Mac o Windows.** Solo existe una versión para iPhone; [RisuAI](/es/power-local-llm/risuai-review) cubre web, escritorio y móvil.',
          '**Quien necesite código abierto o una privacidad estricta.** El código no es público; lee primero el aviso en «Precios, privacidad y datos».',
          '**Menores de 18 años.** La app está clasificada y pensada para adultos.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona Swerve sin conexión?',
            a: 'La ficha, el sitio web y el aviso de privacidad no documentan ningún modo sin conexión ni en el dispositivo, y la biblioteca de personajes de la comunidad apunta a un servicio en línea.',
          },
          {
            q: '¿Swerve Pro es una suscripción?',
            a: 'La ficha no lo dice. Los términos indican que las suscripciones se renuevan cada mes a través de Apple, se pueden cancelar en los ajustes de suscripciones de Apple y que todas las ventas son definitivas.',
          },
          {
            q: '¿Puedo eliminar mi cuenta de Swerve y mis datos?',
            a: 'El sitio web enlaza una página para eliminar la cuenta, y el aviso dice que los datos se desactivan o eliminan tras cerrar la cuenta, conservándose algunos para prevenir fraudes y por motivos legales.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'Swerve encaja, sobre el papel, con adultos usuarios de iPhone que quieren un gran catálogo de personajes y un control detallado de historias interactivas, y que están cómodos con un servicio en la nube.',
          'Las salvedades son la transparencia y la privacidad: es de código cerrado, no nombra ningún proveedor de IA y su aviso de privacidad describe compartición con redes publicitarias.',
          'Si quieres personajes en tu propio hardware, empieza por [Backyard AI](/es/power-local-llm/backyard-ai-review-local-roleplay); si quieres código abierto, prueba [RisuAI](/es/power-local-llm/risuai-review) o [Agnai](/es/power-local-llm/agnai-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Swerve en la App Store](https://apps.apple.com/es/app/swerve-ai-chat-stories/id6754301136) — versión, precio, requisitos, clasificación por edad, funciones y desarrollador.',
          '[Sitio web de Swerve](https://www.getswerve.com/) — la descripción del propio desarrollador y la disponibilidad por plataforma.',
          '[Aviso de privacidad de Swerve](https://www.getswerve.com/privacy) — recopilación de datos, compartición con redes publicitarias y conservación.',
          '[Términos y condiciones de Swerve](https://www.getswerve.com/terms) — límite de edad, política de contenido y condiciones de suscripción.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Backyard AI](/es/power-local-llm/backyard-ai-review-local-roleplay) — un cliente de escritorio que ejecuta personajes de rol en local.',
          '[Reseña de RisuAI](/es/power-local-llm/risuai-review) — un frontend de rol de código abierto para web, escritorio y móvil.',
          '[Reseña de Agnai](/es/power-local-llm/agnai-review) — un frontend de rol de código abierto en el navegador con tarjetas de personaje.',
          '[El Local AI App Directory](/es/directory) — un directorio más amplio de apps de IA locales y en la nube, de todas las plataformas.',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    heroImage: '/images/swerve-ai-review-hero-pt.webp',
    title: 'Análise do Swerve: chat de histórias e personagens com IA para iPhone',
    seoTitle: 'Análise do Swerve: chat de histórias e personagens com IA',
    intro:
      'Swerve: AI Chat & Stories é um app para iPhone da MSPW Labs, Inc. para conversar com personagens de IA e jogar histórias com ramificações. Esta análise mostra o que a página da App Store, o site, o aviso de privacidade e os termos documentam, o que deixam sem dizer e como o app se compara a apps de roleplay que você pode rodar no seu próprio hardware.',
    metaDescription:
      'Análise do Swerve: app gratuito para iPhone de chat com personagens de IA e histórias ramificadas. Compras no app, 18+, nuvem, privacidade, alternativas.',
    twitterDescription:
      'Análise do Swerve: um app freemium para iPhone de chat com personagens de IA e histórias com ramificações. Preços, classificação 18+, aviso de privacidade, limites e alternativas locais.',
    audience:
      'Usuários de iPhone que avaliam um app de roleplay e histórias com IA — cobre recursos, preços, privacidade, classificação etária, limites e alternativas que rodam localmente.',
    readTime: '6 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Análise do Swerve',
    targetKeywords: [
      'swerve ai análise',
      'swerve ai chat and stories',
      'swerve app iphone',
      'mspw labs swerve',
      'app de chat com personagens de ia iphone',
      'app de roleplay com ia ios',
      'swerve privacidade',
      'alternativas locais de roleplay',
    ],
    current_hardware_mentioned: ['iPhone'],
    leadAnswerBlock:
      '**Swerve: AI Chat & Stories é um app gratuito e de código fechado para iPhone para conversar com personagens de IA e jogar histórias com ramificações; é um serviço online, não um app de IA local.** Segundo a página da App Store, ele exige iOS 18.0 ou posterior. Esta análise cobre a versão 1.32.0, atualizada pela última vez em 7 de outubro de 2026, e se baseia na página pública, no site, no aviso de privacidade e nos termos, não em testes práticos.',
    quickAnswerTop: {
      pt: {
        question: 'Vale a pena instalar o Swerve para chat com personagens de IA e histórias no iPhone?',
        answer:
          'Talvez, se você quer uma grande biblioteca de personagens prontos e controles de história em um app de celular e aceita um serviço online. Se você prefere personagens no seu próprio hardware, ou um aviso de privacidade sem compartilhamento com redes de anúncios, veja as alternativas locais abaixo.',
        bullets: [
          'Mais de 500.000 personagens criados pela comunidade, além dos seus, públicos ou privados.',
          'Controles de história: cenas com vários personagens, personas, memória fixada, deslizar, editar e ramificar a partir de qualquer mensagem.',
          'Download gratuito; um nível Pro e pacotes de gemas são compras no app.',
          'O aviso de privacidade diz que identificadores e atividade na internet foram vendidos ou compartilhados com redes de anúncios nos últimos 12 meses.',
          'As versões para Android e web são apenas lista de espera.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Baixar o Swerve', anchor: 'get-it' },
      { label: 'Swerve em resumo', anchor: 'at-a-glance' },
      { label: 'O que é o Swerve', anchor: 'what-is-swerve' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Preços, privacidade e dados', anchor: 'privacy' },
      { label: 'Classificação etária e conteúdo', anchor: 'age-content' },
      { label: 'Vantagens e limitações', anchor: 'tradeoffs' },
      { label: 'Swerve versus alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem o Swerve serve', anchor: 'who-should-use' },
      { label: 'Para quem o Swerve não serve', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Swerve, da MSPW Labs, Inc., é um app freemium para iPhone para conversar com personagens de IA e jogar histórias com ramificações.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como um motor de histórias para celular com um grande catálogo de personagens: você digita o que seu personagem faz e o elenco de IA responde.',
          },
        ],
        items: [
          'Versão analisada: 1.32.0, como exibida na [página da App Store](https://apps.apple.com/br/app/swerve-ai-chat-stories/id6754301136).',
          'Onde roda: a página, o site e o aviso não citam nenhum modelo de IA nem provedor de hospedagem, e não há modo no dispositivo documentado.',
          'Idade: classificado 18+ na App Store, com conteúdo sexual ou nudez frequentes nos detalhes da classificação.',
          'Idioma: a página está apenas em inglês.',
          'Abertura: código fechado; nenhum repositório público foi encontrado.',
        ],
      },
      getItSwerve: {
        id: 'get-it',
        title: 'Baixar o Swerve',
        content: [
          '**O Swerve é distribuído pela App Store da Apple como um app só para iPhone.** O download tem 116.9 MB e é gratuito, com compras no app.',
        ],
        columns: ['Canal', 'Onde obter'],
        rows: [
          {
            'Canal': 'App Store da Apple',
            'Onde obter': '[Swerve na App Store](https://apps.apple.com/br/app/swerve-ai-chat-stories/id6754301136)',
          },
          {
            'Canal': 'Site',
            'Onde obter': '[getswerve.com](https://www.getswerve.com/)',
          },
          {
            'Canal': 'Privacidade',
            'Onde obter': '[Aviso de privacidade do Swerve](https://www.getswerve.com/privacy)',
          },
          {
            'Canal': 'Termos',
            'Onde obter': '[Termos e condições do Swerve](https://www.getswerve.com/terms)',
          },
        ],
        note: 'O site oferece o Android apenas como [lista de espera](https://www.getswerve.com/android), e a versão web também. Nenhum repositório público do código-fonte foi encontrado.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Swerve em resumo',
        columns: ['Atributo', 'Swerve'],
        rows: [
          { 'Atributo': 'Plataforma', 'Swerve': 'iPhone, iOS 18.0+' },
          { 'Atributo': 'Preço', 'Swerve': 'Grátis, compras no app' },
          { 'Atributo': 'Licença', 'Swerve': 'Código fechado' },
          { 'Atributo': 'Funciona offline', 'Swerve': 'Sem modo local documentado' },
          { 'Atributo': 'Chats em grupo', 'Swerve': 'Sim, vários personagens por história' },
          { 'Atributo': 'Lorebooks / world info', 'Swerve': 'Não citado na página' },
          { 'Atributo': 'Classificação etária', 'Swerve': '18+' },
          { 'Atributo': 'Versão / última atualização', 'Swerve': '1.32.0 / 7 de outubro de 2026' },
          { 'Atributo': 'Idioma da interface', 'Swerve': 'Inglês' },
        ],
        note: 'Os atributos seguem a comparação de roleplay do Local AI App Directory. Vêm da página da App Store e do site, que não cobrem todos os recursos.',
      },
      whatIsSwerve: {
        id: 'what-is-swerve',
        title: 'O que é o Swerve',
        content: [
          '**O Swerve é um app de chat de ficção interativa: você «joga histórias com as suas próprias palavras» e os personagens de IA respondem.** A página descreve mais de 500.000 personagens criados pela comunidade, em gêneros como romance, drama, anime e fantasia.',
          'Ele é publicado pela MSPW Labs, Inc., uma empresa dos EUA. O site chama getswerve.com de «o único site oficial do Swerve AI», então trate apps e sites de nome parecido como produtos diferentes.',
          'Esta análise usa apenas a página, o site, o aviso de privacidade e os termos. Não inclui testes práticos, portanto qualidade das respostas, confiabilidade da memória, moderação e velocidade não são avaliadas aqui.',
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O app combina um catálogo de personagens com controle detalhado de cada história.** Tudo abaixo vem da página da App Store.',
        ],
        items: [
          '**Personagens.** Explore personagens da comunidade ou crie os seus e compartilhe publicamente ou mantenha privados.',
          '**Modos de história.** Converse individualmente ou leve vários personagens para a mesma história, e jogue como qualquer personagem por meio de personas.',
          '**Memória.** Fixe os detalhes que os personagens devem lembrar.',
          '**Controle.** Peça outra resposta, edite mensagens ou comece um novo caminho a partir de qualquer mensagem. A versão 1.32.0 adiciona rascunhos automáticos e uma prévia ao voltar que mostra quantas mensagens serão removidas.',
          '**Comunidade.** A página tem link para uma comunidade no Discord.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Preços, privacidade e dados',
        content: [
          '**O Swerve é gratuito para baixar, com compras no app para um nível Pro, pacotes de gemas e, em algumas lojas, um nível Swerve Lite.** Na loja brasileira, o Pro custa R$ 79,90 e os pacotes de gemas começam em R$ 14,90. A página não diz o que o Pro ou as gemas liberam, então confira primeiro a tela de pagamento no app.',
          '**Segundo o aviso de privacidade, atualizado pela última vez em 19 de junho de 2026, o Swerve coleta nomes, endereços de e-mail e nomes de usuário, além de endereço IP, identificadores de dispositivo e de app, atividade no app e relatórios de falhas.** Os pagamentos passam pela Apple e pela RevenueCat, e entrar com Facebook ou X pode compartilhar dados de perfil como nome, e-mail, lista de amigos e foto.',
          '**O aviso também diz que identificadores e atividade na internet foram vendidos ou compartilhados com redes de anúncios nos últimos 12 meses, e o rótulo da App Store lista identificadores usados para rastrear você em apps e sites de outras empresas.** Ele não cita nenhum provedor de IA, menciona as «plataformas de IA» apenas como categoria de destinatários e não diz se os chats são usados para treinar modelos. São declarações do próprio desenvolvedor; esta análise não inspecionou o tráfego de rede.',
        ],
      },
      ageContent: {
        id: 'age-content',
        title: 'Classificação etária e conteúdo',
        content: [
          '**O Swerve é para adultos: a classificação da App Store é 18+ e os termos dizem que os serviços se destinam a usuários com pelo menos 18 anos.** Os detalhes da classificação listam palavrões e conteúdo sexual ou nudez frequentes, enquanto a política de conteúdo dos termos só permite temas românticos entre personagens adultos se não forem explícitos. Esta análise não testou como o app modera o conteúdo.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Vantagens e limitações',
        columns: ['Vantagem', 'O que significa no uso real', 'Limitação / ressalva'],
        rows: [
          {
            'Vantagem': 'Grande biblioteca de personagens',
            'O que significa no uso real': 'Mais de 500.000 personagens da comunidade para começar.',
            'Limitação / ressalva': 'Qualidade e moderação variam por personagem; nenhum foi testado aqui.',
          },
          {
            'Vantagem': 'Controle da história',
            'O que significa no uso real': 'Deslizar, editar, ramificar e voltar em qualquer mensagem.',
            'Limitação / ressalva': 'Os rascunhos e a prévia ao voltar são novidades da 1.32.0.',
          },
          {
            'Vantagem': 'Memória fixada',
            'O que significa no uso real': 'Os personagens devem lembrar os detalhes que você fixa.',
            'Limitação / ressalva': 'Não há números publicados sobre tamanho ou precisão da memória.',
          },
          {
            'Vantagem': 'Grátis para começar',
            'O que significa no uso real': 'Baixe e experimente sem custo.',
            'Limitação / ressalva': 'Pro e pacotes de gemas custam à parte; o que liberam não é descrito.',
          },
          {
            'Vantagem': 'Atualizações frequentes',
            'O que significa no uso real': 'O histórico mostra 25 versões de 23 de março a 7 de outubro.',
            'Limitação / ressalva': 'Todas, exceto a mais recente, trazem só «Bug fixes and performance improvements».',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Swerve versus alternativas',
        columns: ['App', 'Plataformas', 'Preço e licença', 'Onde roda', 'Diferença principal'],
        rows: [
          {
            'App': 'Swerve',
            'Plataformas': 'iPhone',
            'Preço e licença': 'Freemium, código fechado',
            'Onde roda': 'Serviço na nuvem do desenvolvedor',
            'Diferença principal': 'Personagens da comunidade prontos; ainda sem versão desktop ou Android',
          },
          {
            'App': '[Agnai](/pt/power-local-llm/agnai-review)',
            'Plataformas': 'Web',
            'Preço e licença': 'Grátis, AGPL-3.0',
            'Onde roda': 'Interface no navegador, backend de modelo externo',
            'Diferença principal': 'Código aberto; você escolhe o backend do modelo',
          },
          {
            'App': '[RisuAI](/pt/power-local-llm/risuai-review)',
            'Plataformas': 'Web, desktop, celular',
            'Preço e licença': 'Grátis, GPL 3.0',
            'Onde roda': 'Seu backend ou uma API que você fornece',
            'Diferença principal': 'Código aberto e multiplataforma; você traz o modelo',
          },
          {
            'App': '[Backyard AI](/pt/power-local-llm/backyard-ai-review-local-roleplay)',
            'Plataformas': 'Mac, Windows',
            'Preço e licença': 'Freemium, código fechado',
            'Onde roda': 'No seu próprio computador',
            'Diferença principal': 'Personagens rodam localmente; só desktop',
          },
        ],
        note: 'Detalhes de plataforma, preço e recursos de apps de terceiros mudam com frequência. Confira as informações atuais na página de cada app antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o Swerve serve',
        items: [
          '**Adultos que querem personagens prontos no celular.** A biblioteca com mais de 500.000 personagens evita montar um elenco do zero.',
          '**Jogadores de histórias que gostam de conduzir.** Ramificar, editar e a memória fixada dão controle sobre cada cena.',
          '**Quem se sente à vontade com um serviço na nuvem.** Nada na página promete uso offline ou no dispositivo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o Swerve não serve',
        items: [
          '**Quem precisa de chat offline ou no dispositivo.** O [Backyard AI](/pt/power-local-llm/backyard-ai-review-local-roleplay) roda os personagens no seu próprio computador.',
          '**Usuários de Android, Mac ou Windows.** Só existe uma versão para iPhone; o [RisuAI](/pt/power-local-llm/risuai-review) cobre web, desktop e celular.',
          '**Quem precisa de código aberto ou de privacidade rigorosa.** O código não é público; leia primeiro o aviso em «Preços, privacidade e dados».',
          '**Menores de 18 anos.** O app é classificado e destinado a adultos.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Swerve funciona offline?',
            a: 'A página, o site e o aviso de privacidade não documentam nenhum modo offline ou no dispositivo, e a biblioteca de personagens da comunidade indica um serviço online.',
          },
          {
            q: 'O Swerve Pro é uma assinatura?',
            a: 'A página não diz. Os termos afirmam que as assinaturas são renovadas mensalmente pela Apple, podem ser canceladas nos ajustes de assinaturas da Apple e que todas as vendas são finais.',
          },
          {
            q: 'Posso excluir minha conta do Swerve e meus dados?',
            a: 'O site tem link para uma página de exclusão de conta, e o aviso diz que os dados são desativados ou excluídos após o encerramento da conta, com alguns mantidos para prevenir fraudes e por motivos legais.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'No papel, o Swerve combina com adultos usuários de iPhone que querem um grande catálogo de personagens e controle detalhado de histórias interativas, e que aceitam um serviço na nuvem.',
          'As ressalvas são transparência e privacidade: o código é fechado, nenhum provedor de IA é citado e o aviso de privacidade descreve compartilhamento com redes de anúncios.',
          'Se você quer personagens no seu próprio hardware, comece pelo [Backyard AI](/pt/power-local-llm/backyard-ai-review-local-roleplay); se quer código aberto, experimente o [RisuAI](/pt/power-local-llm/risuai-review) ou o [Agnai](/pt/power-local-llm/agnai-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Swerve na App Store](https://apps.apple.com/br/app/swerve-ai-chat-stories/id6754301136) — versão, preço, requisitos, classificação etária, recursos e desenvolvedor.',
          '[Site do Swerve](https://www.getswerve.com/) — a descrição do próprio desenvolvedor e a disponibilidade por plataforma.',
          '[Aviso de privacidade do Swerve](https://www.getswerve.com/privacy) — coleta de dados, compartilhamento com redes de anúncios e retenção.',
          '[Termos e condições do Swerve](https://www.getswerve.com/terms) — limite de idade, política de conteúdo e condições de assinatura.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Backyard AI](/pt/power-local-llm/backyard-ai-review-local-roleplay) — um cliente desktop que roda personagens de roleplay localmente.',
          '[Análise do RisuAI](/pt/power-local-llm/risuai-review) — um frontend de roleplay de código aberto para web, desktop e celular.',
          '[Análise do Agnai](/pt/power-local-llm/agnai-review) — um frontend de roleplay de código aberto no navegador com cartões de personagem.',
          '[O Local AI App Directory](/pt/directory) — um diretório mais amplo de apps de IA locais e na nuvem, de todas as plataformas.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    heroImage: '/images/swerve-ai-review-hero-ar.webp',
    title: 'مراجعة Swerve: دردشة قصص وشخصيات بالذكاء الاصطناعي على iPhone',
    seoTitle: 'مراجعة Swerve: دردشة الشخصيات والقصص بالذكاء الاصطناعي',
    intro:
      'Swerve: AI Chat & Stories تطبيق iPhone من MSPW Labs, Inc. للدردشة مع شخصيات الذكاء الاصطناعي ولعب قصص متفرعة. تعرض هذه المراجعة ما توثّقه صفحة App Store والموقع الرسمي وإشعار الخصوصية والشروط، وما تتركه دون ذكر، وكيف يقارن التطبيق بتطبيقات لعب الأدوار التي يمكن تشغيلها على جهازك.',
    metaDescription:
      'مراجعة Swerve: تطبيق iPhone مجاني للدردشة مع شخصيات الذكاء الاصطناعي وقصص متفرعة. مشتريات داخل التطبيق وتصنيف +18 وخدمة سحابية وخصوصية وبدائل محلية.',
    twitterDescription:
      'مراجعة Swerve: تطبيق iPhone بنموذج فريميوم للدردشة مع شخصيات الذكاء الاصطناعي وقصص متفرعة. الأسعار وتصنيف +18 وإشعار الخصوصية والحدود وبدائل محلية.',
    audience:
      'مستخدمو iPhone الذين يقيّمون تطبيقًا للعب الأدوار والقصص بالذكاء الاصطناعي — يغطي الميزات والأسعار والخصوصية والتصنيف العمري والحدود والبدائل التي تعمل محليًا.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Swerve',
    targetKeywords: [
      'مراجعة swerve ai',
      'swerve ai chat and stories',
      'تطبيق swerve iphone',
      'mspw labs swerve',
      'تطبيق دردشة شخصيات ذكاء اصطناعي iphone',
      'تطبيق لعب أدوار بالذكاء الاصطناعي ios',
      'خصوصية swerve',
      'بدائل لعب أدوار محلية',
    ],
    current_hardware_mentioned: ['iPhone'],
    leadAnswerBlock:
      '**Swerve: AI Chat & Stories تطبيق iPhone مجاني ومغلق المصدر للدردشة مع شخصيات الذكاء الاصطناعي ولعب قصص متفرعة؛ وهو خدمة عبر الإنترنت وليس تطبيق ذكاء اصطناعي محليًا.** وفق صفحته في App Store يتطلب iOS 18.0 أو أحدث. تغطي هذه المراجعة الإصدار 1.32.0 الذي حُدّث آخر مرة في 7 أكتوبر 2026، وتعتمد على الصفحة العامة والموقع الرسمي وإشعار الخصوصية والشروط، لا على اختبار عملي.',
    quickAnswerTop: {
      ar: {
        question: 'هل يستحق Swerve التثبيت للدردشة مع شخصيات الذكاء الاصطناعي ولعب القصص على iPhone؟',
        answer:
          'ربما، إذا كنت تريد مكتبة كبيرة من الشخصيات الجاهزة وأدوات تحكم في القصة داخل تطبيق للجوال وتقبل خدمة عبر الإنترنت. وإذا كنت تفضّل شخصيات تعمل على جهازك، أو إشعار خصوصية بلا مشاركة مع شبكات الإعلانات، فراجع البدائل المحلية أدناه.',
        bullets: [
          'أكثر من 500,000 شخصية أنشأها المجتمع، إضافة إلى شخصياتك العامة أو الخاصة.',
          'أدوات التحكم في القصة: مشاهد متعددة الشخصيات وشخصيات مستخدم وذاكرة مثبّتة والسحب للتبديل والتعديل والتفرّع من أي رسالة.',
          'التنزيل مجاني؛ أما مستوى Pro وحزم الجواهر فهي مشتريات داخل التطبيق.',
          'يقول إشعار الخصوصية إن المعرّفات والنشاط على الإنترنت بيعت أو شوركت مع شبكات الإعلانات خلال آخر 12 شهرًا.',
          'نسختا Android والويب متاحتان عبر قائمة الانتظار فقط.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'الحصول على Swerve', anchor: 'get-it' },
      { label: 'Swerve في لمحة', anchor: 'at-a-glance' },
      { label: 'ما هو Swerve', anchor: 'what-is-swerve' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'الأسعار والخصوصية والبيانات', anchor: 'privacy' },
      { label: 'التصنيف العمري والمحتوى', anchor: 'age-content' },
      { label: 'المزايا والقيود', anchor: 'tradeoffs' },
      { label: 'Swerve مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'لمن يناسب Swerve', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب Swerve', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Swerve من MSPW Labs, Inc. تطبيق iPhone بنموذج فريميوم للدردشة مع شخصيات الذكاء الاصطناعي ولعب قصص متفرعة.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله محرك قصص للجوال مع كتالوج كبير من الشخصيات: تكتب ما تفعله شخصيتك فيرد طاقم الذكاء الاصطناعي.',
          },
        ],
        items: [
          'الإصدار الذي تغطيه المراجعة: 1.32.0 كما يظهر في [صفحة App Store](https://apps.apple.com/us/app/swerve-ai-chat/id6754301136).',
          'مكان التشغيل: لا تذكر الصفحة ولا الموقع ولا الإشعار أي نموذج ذكاء اصطناعي أو مضيفًا، ولا يوجد وضع على الجهاز موثّق.',
          'العمر: مصنّف +18 في App Store، وتذكر تفاصيل التصنيف محتوى جنسيًا أو عريًا متكررًا.',
          'اللغة: الصفحة متوفرة بالإنجليزية فقط.',
          'الانفتاح: مغلق المصدر؛ ولم يُعثر على مستودع عام.',
        ],
      },
      getItSwerve: {
        id: 'get-it',
        title: 'الحصول على Swerve',
        content: [
          '**يُوزَّع Swerve عبر متجر Apple App Store كتطبيق لجهاز iPhone فقط.** حجم التنزيل 116.9 MB وهو مجاني مع مشتريات داخل التطبيق.',
        ],
        columns: ['القناة', 'الحصول عليه'],
        rows: [
          {
            'القناة': 'Apple App Store',
            'الحصول عليه': '[Swerve في App Store](https://apps.apple.com/us/app/swerve-ai-chat/id6754301136)',
          },
          {
            'القناة': 'الموقع',
            'الحصول عليه': '[getswerve.com](https://www.getswerve.com/)',
          },
          {
            'القناة': 'الخصوصية',
            'الحصول عليه': '[إشعار خصوصية Swerve](https://www.getswerve.com/privacy)',
          },
          {
            'القناة': 'الشروط',
            'الحصول عليه': '[شروط Swerve وأحكامه](https://www.getswerve.com/terms)',
          },
        ],
        note: 'يقدّم الموقع نسخة Android عبر [قائمة انتظار](https://www.getswerve.com/android) فقط، ونسخة الويب كذلك. لم يُعثر على مستودع عام للشيفرة المصدرية.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Swerve في لمحة',
        columns: ['الخاصية', 'Swerve'],
        rows: [
          { 'الخاصية': 'المنصة', 'Swerve': 'iPhone، iOS 18.0+' },
          { 'الخاصية': 'السعر', 'Swerve': 'مجاني مع مشتريات داخل التطبيق' },
          { 'الخاصية': 'الترخيص', 'Swerve': 'مغلق المصدر' },
          { 'الخاصية': 'يعمل دون إنترنت', 'Swerve': 'لا يوجد وضع على الجهاز موثّق' },
          { 'الخاصية': 'دردشات جماعية', 'Swerve': 'نعم، عدة شخصيات في القصة' },
          { 'الخاصية': 'كتب المعلومات / world info', 'Swerve': 'غير مذكورة في الصفحة' },
          { 'الخاصية': 'التصنيف العمري', 'Swerve': '+18' },
          { 'الخاصية': 'الإصدار / آخر تحديث', 'Swerve': '1.32.0 / 7 أكتوبر 2026' },
          { 'الخاصية': 'لغة الواجهة', 'Swerve': 'الإنجليزية' },
        ],
        note: 'تتبع الخصائص مقارنة لعب الأدوار في Local AI App Directory. وهي مأخوذة من صفحة App Store والموقع الرسمي اللذين لا يغطيان كل الميزات.',
      },
      whatIsSwerve: {
        id: 'what-is-swerve',
        title: 'ما هو Swerve',
        content: [
          '**Swerve تطبيق دردشة للخيال التفاعلي: «تلعب القصص بكلماتك أنت» فتستجيب شخصيات الذكاء الاصطناعي.** تصف الصفحة أكثر من 500,000 شخصية أنشأها المجتمع في أنواع مثل الرومانسية والدراما والأنمي والفانتازيا.',
          'ينشره MSPW Labs, Inc.، وهي شركة أمريكية. ويصف الموقع getswerve.com بأنه «الموقع الرسمي الوحيد لـ Swerve AI»، لذا تعامل مع التطبيقات والمواقع المشابهة في الاسم على أنها منتجات مختلفة.',
          'تعتمد هذه المراجعة على الصفحة والموقع وإشعار الخصوصية والشروط فقط، ولا تتضمن اختبارًا عمليًا، لذلك لا تُقيَّم هنا جودة الإجابات أو موثوقية الذاكرة أو الإشراف على المحتوى أو السرعة.',
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**يجمع التطبيق بين كتالوج شخصيات وتحكم دقيق في كل قصة.** كل ما يلي مأخوذ من صفحة App Store.',
        ],
        items: [
          '**الشخصيات.** تصفّح شخصيات المجتمع أو أنشئ شخصياتك وشاركها علنًا أو أبقها خاصة.',
          '**أوضاع القصة.** دردش فرديًا أو أدخل عدة شخصيات في القصة نفسها، والعب بدور أي شخصية عبر شخصيات المستخدم.',
          '**الذاكرة.** ثبّت التفاصيل التي ينبغي أن تتذكرها الشخصيات.',
          '**التحكم.** اطلب ردًا آخر أو عدّل الرسائل أو ابدأ مسارًا جديدًا من أي رسالة. يضيف الإصدار 1.32.0 مسودات تلقائية ومعاينة للتراجع تعرض عدد الرسائل التي ستُحذف.',
          '**المجتمع.** تتضمن الصفحة رابطًا إلى مجتمع Discord.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الأسعار والخصوصية والبيانات',
        content: [
          '**تنزيل Swerve مجاني مع مشتريات داخل التطبيق لمستوى Pro وحزم الجواهر، ولمستوى Swerve Lite في بعض المتاجر.** في متجر الولايات المتحدة يبلغ سعر Pro ‏$12.49 وتبدأ حزم الجواهر من $2.49. لا توضح الصفحة ما الذي يفتحه Pro أو الجواهر، لذا راجع شاشة الدفع في التطبيق أولًا.',
          '**وفق إشعار الخصوصية الذي حُدّث آخر مرة في 19 يونيو 2026، يجمع Swerve الأسماء وعناوين البريد الإلكتروني وأسماء المستخدمين، إضافة إلى عنوان IP ومعرّفات الجهاز والتطبيق ونشاط التطبيق وتقارير الأعطال.** تمر المدفوعات عبر Apple وRevenueCat، وقد يؤدي تسجيل الدخول عبر Facebook أو X إلى مشاركة بيانات الملف الشخصي مثل الاسم والبريد وقائمة الأصدقاء والصورة.',
          '**ويقول الإشعار أيضًا إن المعرّفات والنشاط على الإنترنت بيعت أو شوركت مع شبكات الإعلانات خلال آخر 12 شهرًا، وتدرج بطاقة App Store معرّفات تُستخدم لتتبعك عبر تطبيقات ومواقع شركات أخرى.** لا يسمّي الإشعار أي مزوّد للذكاء الاصطناعي، ويذكر «منصات الذكاء الاصطناعي» فقط كفئة من المستلمين، ولا يوضح هل تُستخدم المحادثات لتدريب النماذج. هذه تصريحات المطوّر نفسه، ولم تفحص هذه المراجعة حركة الشبكة.',
        ],
      },
      ageContent: {
        id: 'age-content',
        title: 'التصنيف العمري والمحتوى',
        content: [
          '**Swerve موجّه للبالغين: تصنيفه في App Store هو +18 وتقول الشروط إن الخدمات مخصصة للمستخدمين الذين لا تقل أعمارهم عن 18 عامًا.** تذكر تفاصيل التصنيف ألفاظًا نابية ومحتوى جنسيًا أو عريًا متكررًا، بينما لا تسمح سياسة المحتوى في الشروط بالموضوعات الرومانسية بين الشخصيات البالغة إلا إذا كانت غير صريحة. لم تختبر هذه المراجعة كيف يشرف التطبيق على المحتوى.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المزايا والقيود',
        columns: ['الميزة', 'ما تعنيه في الاستخدام الفعلي', 'القيد / التحفظ'],
        rows: [
          {
            'الميزة': 'مكتبة شخصيات كبيرة',
            'ما تعنيه في الاستخدام الفعلي': 'أكثر من 500,000 شخصية من المجتمع للبدء بها.',
            'القيد / التحفظ': 'تختلف الجودة والإشراف من شخصية لأخرى، ولم تُختبر أي منها هنا.',
          },
          {
            'الميزة': 'التحكم في القصة',
            'ما تعنيه في الاستخدام الفعلي': 'السحب والتعديل والتفرّع والتراجع في أي رسالة.',
            'القيد / التحفظ': 'المسودات ومعاينة التراجع جديدتان في الإصدار 1.32.0.',
          },
          {
            'الميزة': 'ذاكرة مثبّتة',
            'ما تعنيه في الاستخدام الفعلي': 'يُطلب من الشخصيات تذكّر التفاصيل التي تثبّتها.',
            'القيد / التحفظ': 'لا تُنشر أرقام عن حجم الذاكرة أو دقتها.',
          },
          {
            'الميزة': 'مجاني للبدء',
            'ما تعنيه في الاستخدام الفعلي': 'نزّل التطبيق وجرّبه دون تكلفة.',
            'القيد / التحفظ': 'Pro وحزم الجواهر بتكلفة إضافية ولا يُوصف ما تفتحه.',
          },
          {
            'الميزة': 'تحديثات متكررة',
            'ما تعنيه في الاستخدام الفعلي': 'يُظهر سجل الإصدارات 25 إصدارًا من 23 مارس إلى 7 أكتوبر.',
            'القيد / التحفظ': 'كلها عدا الأحدث تذكر فقط «Bug fixes and performance improvements».',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Swerve مقابل البدائل',
        columns: ['التطبيق', 'المنصات', 'السعر والترخيص', 'مكان التشغيل', 'الفرق الأساسي'],
        rows: [
          {
            'التطبيق': 'Swerve',
            'المنصات': 'iPhone',
            'السعر والترخيص': 'فريميوم، مغلق المصدر',
            'مكان التشغيل': 'خدمة سحابية للمطوّر',
            'الفرق الأساسي': 'شخصيات مجتمع جاهزة؛ لا توجد نسخة سطح مكتب أو Android بعد',
          },
          {
            'التطبيق': '[Agnai](/ar/power-local-llm/agnai-review)',
            'المنصات': 'الويب',
            'السعر والترخيص': 'مجاني، AGPL-3.0',
            'مكان التشغيل': 'واجهة متصفح مع خلفية نموذج خارجية',
            'الفرق الأساسي': 'مفتوح المصدر؛ تختار خلفية النموذج بنفسك',
          },
          {
            'التطبيق': '[RisuAI](/ar/power-local-llm/risuai-review)',
            'المنصات': 'الويب وسطح المكتب والجوال',
            'السعر والترخيص': 'مجاني، GPL 3.0',
            'مكان التشغيل': 'خلفيتك أو واجهة API توفرها',
            'الفرق الأساسي': 'مفتوح المصدر ومتعدد المنصات؛ تحضر نموذجك بنفسك',
          },
          {
            'التطبيق': '[Backyard AI](/ar/power-local-llm/backyard-ai-review-local-roleplay)',
            'المنصات': 'Mac وWindows',
            'السعر والترخيص': 'فريميوم، مغلق المصدر',
            'مكان التشغيل': 'على حاسوبك',
            'الفرق الأساسي': 'تعمل الشخصيات محليًا؛ سطح المكتب فقط',
          },
        ],
        note: 'تتغير تفاصيل المنصات والأسعار والميزات للتطبيقات الخارجية كثيرًا. تحقق من التفاصيل الحالية في صفحة كل تطبيق قبل أن تقرر.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب Swerve',
        items: [
          '**البالغون الذين يريدون شخصيات جاهزة على الجوال.** توفّر المكتبة التي تضم أكثر من 500,000 شخصية عناء بناء طاقم من الصفر.',
          '**لاعبو القصص الذين يحبون توجيه الأحداث.** يمنحك التفرّع والتعديل والذاكرة المثبّتة تحكمًا في كل مشهد.',
          '**من يرتاح لخدمة سحابية.** لا شيء في الصفحة يعد بالاستخدام دون إنترنت أو على الجهاز.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب Swerve',
        items: [
          '**من يحتاج إلى دردشة دون إنترنت أو على الجهاز.** يشغّل [Backyard AI](/ar/power-local-llm/backyard-ai-review-local-roleplay) الشخصيات على حاسوبك.',
          '**مستخدمو Android أو Mac أو Windows.** توجد نسخة iPhone فقط؛ ويغطي [RisuAI](/ar/power-local-llm/risuai-review) الويب وسطح المكتب والجوال.',
          '**من يحتاج إلى مصدر مفتوح أو خصوصية صارمة.** الشيفرة غير عامة؛ اقرأ أولًا الإشعار تحت «الأسعار والخصوصية والبيانات».',
          '**من هم دون 18 عامًا.** التطبيق مصنّف للبالغين وموجّه لهم.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل Swerve دون إنترنت؟',
            a: 'لا توثّق الصفحة ولا الموقع ولا إشعار الخصوصية أي وضع دون إنترنت أو على الجهاز، وتشير مكتبة شخصيات المجتمع إلى أنه خدمة عبر الإنترنت.',
          },
          {
            q: 'هل Swerve Pro اشتراك؟',
            a: 'لا تذكر الصفحة ذلك. تنص الشروط على أن الاشتراكات تتجدد شهريًا عبر Apple ويمكن إلغاؤها من إعدادات الاشتراكات في Apple، وأن جميع المبيعات نهائية.',
          },
          {
            q: 'هل يمكنني حذف حسابي وبياناتي في Swerve؟',
            a: 'يتضمن الموقع رابطًا إلى صفحة حذف الحساب، ويقول الإشعار إن البيانات تُعطَّل أو تُحذف بعد إنهاء الحساب، مع الاحتفاظ ببعضها لمنع الاحتيال ولأسباب قانونية.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          'يناسب Swerve نظريًا مستخدمي iPhone البالغين الذين يريدون كتالوج شخصيات كبيرًا وتحكمًا دقيقًا في القصص التفاعلية ويرتاحون لخدمة سحابية.',
          'التحفظات تتعلق بالشفافية والخصوصية: فهو مغلق المصدر، ولا يسمّي أي مزوّد للذكاء الاصطناعي، ويصف إشعار خصوصيته مشاركة مع شبكات الإعلانات.',
          'إذا كنت تريد شخصيات على جهازك فابدأ بـ [Backyard AI](/ar/power-local-llm/backyard-ai-review-local-roleplay)؛ وإذا أردت مصدرًا مفتوحًا فجرّب [RisuAI](/ar/power-local-llm/risuai-review) أو [Agnai](/ar/power-local-llm/agnai-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Swerve في App Store](https://apps.apple.com/us/app/swerve-ai-chat/id6754301136) — الإصدار والسعر والمتطلبات والتصنيف العمري والميزات والمطوّر.',
          '[موقع Swerve](https://www.getswerve.com/) — وصف المطوّر نفسه وتوفر المنصات.',
          '[إشعار خصوصية Swerve](https://www.getswerve.com/privacy) — جمع البيانات والمشاركة مع شبكات الإعلانات والاحتفاظ.',
          '[شروط Swerve وأحكامه](https://www.getswerve.com/terms) — الحد الأدنى للعمر وسياسة المحتوى وشروط الاشتراك.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Backyard AI](/ar/power-local-llm/backyard-ai-review-local-roleplay) — عميل سطح مكتب يشغّل شخصيات لعب الأدوار محليًا.',
          '[مراجعة RisuAI](/ar/power-local-llm/risuai-review) — واجهة لعب أدوار مفتوحة المصدر للويب وسطح المكتب والجوال.',
          '[مراجعة Agnai](/ar/power-local-llm/agnai-review) — واجهة لعب أدوار مفتوحة المصدر في المتصفح مع بطاقات شخصيات.',
          '[Local AI App Directory](/ar/directory) — دليل أوسع لتطبيقات الذكاء الاصطناعي المحلية والسحابية على مختلف المنصات.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    heroImage: '/images/swerve-ai-review-hero-ko.webp',
    title: 'Swerve 리뷰: iPhone용 AI 스토리·캐릭터 채팅 앱',
    seoTitle: 'Swerve 리뷰: iPhone AI 캐릭터 채팅과 스토리',
    intro:
      'Swerve: AI Chat & Stories는 MSPW Labs, Inc.가 만든 iPhone 앱으로, AI 캐릭터와 채팅하고 분기형 스토리를 즐길 수 있습니다. 이 리뷰는 App Store 페이지, 공식 웹사이트, 개인정보 고지, 약관이 밝히는 내용과 밝히지 않는 내용, 그리고 자신의 하드웨어에서 실행할 수 있는 롤플레이 앱과의 비교를 다룹니다.',
    metaDescription:
      'Swerve 리뷰: AI 캐릭터 채팅과 인터랙티브 스토리를 제공하는 무료 iPhone 앱. 인앱 결제, 18+ 등급, 클라우드 서비스, 개인정보 고지, 한계, 로컬 대안을 정리했습니다.',
    twitterDescription:
      'Swerve 리뷰: AI 캐릭터 채팅과 분기형 스토리를 제공하는 프리미엄 iPhone 앱. 가격, 18+ 등급, 개인정보 고지, 한계, 로컬 롤플레이 대안.',
    audience:
      'AI 롤플레이·스토리 앱을 고민하는 iPhone 사용자를 위한 글입니다. 기능, 가격, 개인정보, 연령 등급, 한계, 로컬에서 실행되는 대안을 다룹니다.',
    readTime: '6분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Swerve 리뷰',
    targetKeywords: [
      'swerve ai 리뷰',
      'swerve ai chat and stories',
      'swerve 앱 iphone',
      'mspw labs swerve',
      'ai 캐릭터 채팅 앱 iphone',
      'ai 롤플레이 앱 ios',
      'swerve 개인정보',
      '로컬 롤플레이 대안',
    ],
    current_hardware_mentioned: ['iPhone'],
    leadAnswerBlock:
      '**Swerve: AI Chat & Stories는 AI 캐릭터와 채팅하고 분기형 스토리를 즐기는 무료 비공개 소스 iPhone 앱이며, 로컬 AI 앱이 아니라 온라인 서비스입니다.** App Store 페이지에 따르면 iOS 18.0 이상이 필요합니다. 이 리뷰는 2026년 10월 7일에 마지막으로 업데이트된 버전 1.32.0을 다루며, 직접 사용해 본 결과가 아니라 공개된 페이지, 웹사이트, 개인정보 고지, 약관에 근거합니다.',
    quickAnswerTop: {
      ko: {
        question: 'iPhone에서 AI 캐릭터 채팅과 스토리를 즐기려면 Swerve를 설치할 만한가요?',
        answer:
          '모바일 앱에서 준비된 캐릭터 라이브러리와 스토리 제어 기능을 쓰고 싶고 온라인 서비스를 받아들일 수 있다면 고려해 볼 만합니다. 자신의 하드웨어에서 실행되는 캐릭터나 광고 네트워크 공유가 없는 개인정보 고지를 원한다면 아래의 로컬 대안을 확인하십시오.',
        bullets: [
          '커뮤니티가 만든 캐릭터 50만 개 이상이며, 직접 만든 캐릭터도 공개 또는 비공개로 둘 수 있습니다.',
          '스토리 제어: 다중 캐릭터 장면, 페르소나, 고정 메모리, 스와이프, 편집, 임의 메시지에서 분기.',
          '다운로드는 무료이며 Pro 등급과 젬 패키지는 인앱 결제입니다.',
          '개인정보 고지에 따르면 식별자와 인터넷 활동이 지난 12개월 동안 광고 네트워크에 판매되거나 공유되었습니다.',
          'Android 및 웹 버전은 대기자 명단만 운영합니다.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Swerve 받기', anchor: 'get-it' },
      { label: 'Swerve 한눈에 보기', anchor: 'at-a-glance' },
      { label: 'Swerve란', anchor: 'what-is-swerve' },
      { label: '기능', anchor: 'features' },
      { label: '가격, 개인정보 및 데이터', anchor: 'privacy' },
      { label: '연령 등급과 콘텐츠', anchor: 'age-content' },
      { label: '장점과 한계', anchor: 'tradeoffs' },
      { label: 'Swerve와 대안 비교', anchor: 'vs-alternatives' },
      { label: 'Swerve가 적합한 사용자', anchor: 'who-should-use' },
      { label: 'Swerve가 적합하지 않은 사용자', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 글', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MSPW Labs, Inc.의 Swerve는 AI 캐릭터와 채팅하고 분기형 스토리를 즐기는 프리미엄 iPhone 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '대규모 캐릭터 카탈로그를 갖춘 모바일 스토리 엔진이라고 생각하시면 됩니다. 캐릭터가 하는 행동을 입력하면 AI 출연진이 응답합니다.',
          },
        ],
        items: [
          '리뷰 대상 버전: 1.32.0이며 [App Store 페이지](https://apps.apple.com/us/app/swerve-ai-chat/id6754301136)에 표시된 버전입니다.',
          '실행 위치: 페이지, 웹사이트, 고지 어디에도 AI 모델이나 호스트가 명시되어 있지 않으며 온디바이스 모드도 문서화되어 있지 않습니다.',
          '연령: App Store에서 18+로 분류되며, 연령 등급 상세에 빈번한 성적 콘텐츠 또는 노출이 명시되어 있습니다.',
          '언어: 페이지는 영어로만 제공됩니다.',
          '공개성: 비공개 소스이며 공개 저장소는 찾지 못했습니다.',
        ],
      },
      getItSwerve: {
        id: 'get-it',
        title: 'Swerve 받기',
        content: [
          '**Swerve는 Apple App Store를 통해 배포되는 iPhone 전용 앱입니다.** 다운로드 크기는 116.9 MB이며 무료이고 인앱 결제가 있습니다.',
        ],
        columns: ['채널', '받는 곳'],
        rows: [
          {
            '채널': 'Apple App Store',
            '받는 곳': '[App Store의 Swerve](https://apps.apple.com/us/app/swerve-ai-chat/id6754301136)',
          },
          {
            '채널': '웹사이트',
            '받는 곳': '[getswerve.com](https://www.getswerve.com/)',
          },
          {
            '채널': '개인정보',
            '받는 곳': '[Swerve 개인정보 고지](https://www.getswerve.com/privacy)',
          },
          {
            '채널': '약관',
            '받는 곳': '[Swerve 이용 약관](https://www.getswerve.com/terms)',
          },
        ],
        note: '웹사이트는 Android를 [대기자 명단](https://www.getswerve.com/android)으로만 제공하며 웹 버전도 대기자 명단입니다. 공개 소스 저장소는 찾지 못했습니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Swerve 한눈에 보기',
        columns: ['항목', 'Swerve'],
        rows: [
          { '항목': '플랫폼', 'Swerve': 'iPhone, iOS 18.0 이상' },
          { '항목': '가격', 'Swerve': '무료, 인앱 결제' },
          { '항목': '라이선스', 'Swerve': '비공개 소스' },
          { '항목': '오프라인 실행', 'Swerve': '온디바이스 모드 문서 없음' },
          { '항목': '그룹 채팅', 'Swerve': '예, 한 스토리에 여러 캐릭터' },
          { '항목': '로어북 / 월드 정보', 'Swerve': '페이지에 명시 없음' },
          { '항목': '연령 등급', 'Swerve': '18+' },
          { '항목': '버전 / 마지막 업데이트', 'Swerve': '1.32.0 / 2026년 10월 7일' },
          { '항목': '인터페이스 언어', 'Swerve': '영어' },
        ],
        note: '항목은 Local AI App Directory의 롤플레이 비교 기준을 따릅니다. App Store 페이지와 웹사이트에서 가져왔으며 모든 기능을 다루지는 않습니다.',
      },
      whatIsSwerve: {
        id: 'what-is-swerve',
        title: 'Swerve란',
        content: [
          '**Swerve는 인터랙티브 픽션 채팅 앱으로, "자신의 말로 스토리를 플레이"하면 AI 캐릭터가 응답합니다.** 페이지에는 로맨스, 드라마, 애니메이션, 판타지 같은 장르에 걸친 커뮤니티 제작 캐릭터가 50만 개 이상이라고 설명되어 있습니다.',
          '발행사는 미국 기업인 MSPW Labs, Inc.입니다. 웹사이트는 getswerve.com을 "Swerve AI의 유일한 공식 웹사이트"라고 밝히고 있으므로 이름이 비슷한 앱이나 사이트는 다른 제품으로 보셔야 합니다.',
          '이 리뷰는 페이지, 웹사이트, 개인정보 고지, 약관만을 근거로 합니다. 직접 사용해 본 테스트는 포함하지 않으므로 응답 품질, 메모리 신뢰성, 콘텐츠 관리, 속도는 여기서 평가하지 않습니다.',
        ],
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**이 앱은 캐릭터 카탈로그와 각 스토리에 대한 세밀한 제어를 결합합니다.** 아래 내용은 모두 App Store 페이지에서 가져왔습니다.',
        ],
        items: [
          '**캐릭터.** 커뮤니티 캐릭터를 둘러보거나 직접 만들어 공개로 공유하거나 비공개로 둘 수 있습니다.',
          '**스토리 모드.** 일대일로 채팅하거나 여러 캐릭터를 같은 스토리에 불러올 수 있으며, 페르소나로 원하는 캐릭터를 연기할 수 있습니다.',
          '**메모리.** 캐릭터가 기억해야 할 세부 정보를 고정할 수 있습니다.',
          '**제어.** 다른 답변을 요청하거나 메시지를 편집하거나 임의의 메시지에서 새 경로를 시작할 수 있습니다. 버전 1.32.0은 자동 임시 저장과 삭제될 메시지 수를 보여 주는 되감기 미리보기를 추가했습니다.',
          '**커뮤니티.** 페이지에 Discord 커뮤니티 링크가 있습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '가격, 개인정보 및 데이터',
        content: [
          '**Swerve는 무료로 다운로드할 수 있으며 Pro 등급, 젬 패키지, 일부 스토어에서는 Swerve Lite 등급이 인앱 결제로 제공됩니다.** 미국 스토어에서 Pro는 $12.49이고 젬 패키지는 $2.49부터 시작합니다. 페이지에는 Pro나 젬으로 무엇이 열리는지 나와 있지 않으므로 먼저 앱 안의 결제 화면을 확인하십시오.',
          '**개인정보 고지(2026년 6월 19일 마지막 업데이트)에 따르면 Swerve는 이름, 이메일 주소, 사용자 이름과 함께 IP 주소, 기기 및 앱 식별자, 앱 활동, 충돌 보고서를 수집합니다.** 결제는 Apple과 RevenueCat을 통해 처리되며, Facebook 또는 X로 로그인하면 이름, 이메일, 친구 목록, 사진 같은 프로필 정보가 공유될 수 있습니다.',
          '**고지에는 지난 12개월 동안 식별자와 인터넷 활동이 광고 네트워크에 판매되거나 공유되었다는 내용도 있으며, App Store 라벨에는 다른 회사의 앱과 웹사이트 전반에서 사용자를 추적하는 데 쓰이는 식별자가 표시되어 있습니다.** AI 제공업체는 명시되지 않으며 "AI 플랫폼"은 수신자 범주로만 언급되고, 채팅이 모델 학습에 쓰이는지도 밝히지 않습니다. 이는 개발사 자신의 진술이며, 이 리뷰는 네트워크 트래픽을 점검하지 않았습니다.',
        ],
      },
      ageContent: {
        id: 'age-content',
        title: '연령 등급과 콘텐츠',
        content: [
          '**Swerve는 성인을 위한 앱입니다. App Store 등급은 18+이며 약관도 서비스가 만 18세 이상 사용자를 대상으로 한다고 밝힙니다.** 연령 등급 상세에는 빈번한 욕설과 성적 콘텐츠 또는 노출이 명시되어 있는 반면, 약관의 콘텐츠 정책은 성인 캐릭터 사이의 로맨틱한 주제를 노골적이지 않은 경우에만 허용합니다. 이 리뷰는 앱이 콘텐츠를 어떻게 관리하는지는 테스트하지 않았습니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장점과 한계',
        columns: ['장점', '실제 사용에서의 의미', '한계 / 주의점'],
        rows: [
          {
            '장점': '대규모 캐릭터 라이브러리',
            '실제 사용에서의 의미': '50만 개 이상의 커뮤니티 캐릭터로 시작할 수 있습니다.',
            '한계 / 주의점': '품질과 콘텐츠 관리는 캐릭터마다 다르며 여기서는 테스트하지 않았습니다.',
          },
          {
            '장점': '스토리 제어',
            '실제 사용에서의 의미': '모든 메시지를 스와이프, 편집, 분기, 되감기할 수 있습니다.',
            '한계 / 주의점': '임시 저장과 되감기 미리보기는 1.32.0에서 새로 추가되었습니다.',
          },
          {
            '장점': '고정 메모리',
            '실제 사용에서의 의미': '고정한 세부 정보를 캐릭터가 기억하도록 되어 있습니다.',
            '한계 / 주의점': '메모리 용량이나 정확도 수치는 공개되어 있지 않습니다.',
          },
          {
            '장점': '무료로 시작',
            '실제 사용에서의 의미': '비용 없이 다운로드해 써 볼 수 있습니다.',
            '한계 / 주의점': 'Pro와 젬 패키지는 별도 비용이며 무엇이 열리는지 설명되어 있지 않습니다.',
          },
          {
            '장점': '잦은 업데이트',
            '실제 사용에서의 의미': '버전 기록에 3월 23일부터 10월 7일까지 25번의 릴리스가 있습니다.',
            '한계 / 주의점': '최신 버전을 제외하면 모두 "Bug fixes and performance improvements"만 적혀 있습니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Swerve와 대안 비교',
        columns: ['앱', '플랫폼', '가격 및 라이선스', '실행 위치', '핵심 차이'],
        rows: [
          {
            '앱': 'Swerve',
            '플랫폼': 'iPhone',
            '가격 및 라이선스': '프리미엄, 비공개 소스',
            '실행 위치': '개발사의 클라우드 서비스',
            '핵심 차이': '준비된 커뮤니티 캐릭터. 데스크톱·Android 빌드는 아직 없음',
          },
          {
            '앱': '[Agnai](/ko/power-local-llm/agnai-review)',
            '플랫폼': '웹',
            '가격 및 라이선스': '무료, AGPL-3.0',
            '실행 위치': '브라우저 UI, 외부 모델 백엔드',
            '핵심 차이': '오픈 소스. 모델 백엔드를 직접 선택',
          },
          {
            '앱': '[RisuAI](/ko/power-local-llm/risuai-review)',
            '플랫폼': '웹, 데스크톱, 모바일',
            '가격 및 라이선스': '무료, GPL 3.0',
            '실행 위치': '직접 구성한 백엔드 또는 제공한 API',
            '핵심 차이': '오픈 소스에 멀티 플랫폼. 모델은 직접 준비',
          },
          {
            '앱': '[Backyard AI](/ko/power-local-llm/backyard-ai-review-local-roleplay)',
            '플랫폼': 'Mac, Windows',
            '가격 및 라이선스': '프리미엄, 비공개 소스',
            '실행 위치': '내 컴퓨터',
            '핵심 차이': '캐릭터가 로컬에서 실행. 데스크톱 전용',
          },
        ],
        note: '서드파티 앱의 플랫폼, 가격, 기능 세부 사항은 자주 바뀝니다. 결정하기 전에 각 앱의 공식 페이지에서 최신 정보를 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Swerve가 적합한 사용자',
        items: [
          '**휴대폰에서 준비된 캐릭터를 쓰고 싶은 성인.** 50만 개 이상의 라이브러리 덕분에 출연진을 처음부터 만들 필요가 없습니다.',
          '**스토리를 직접 이끌고 싶은 플레이어.** 분기, 편집, 고정 메모리로 각 장면을 제어할 수 있습니다.',
          '**클라우드 서비스가 괜찮은 사용자.** 페이지 어디에도 오프라인이나 온디바이스 사용을 약속하는 내용은 없습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Swerve가 적합하지 않은 사용자',
        items: [
          '**오프라인 또는 온디바이스 채팅이 필요한 사용자.** [Backyard AI](/ko/power-local-llm/backyard-ai-review-local-roleplay)는 내 컴퓨터에서 캐릭터를 실행합니다.',
          '**Android, Mac, Windows 사용자.** iPhone 빌드만 있으며, [RisuAI](/ko/power-local-llm/risuai-review)는 웹, 데스크톱, 모바일을 지원합니다.',
          '**오픈 소스나 엄격한 개인정보 보호가 필요한 사용자.** 코드는 공개되어 있지 않으므로 먼저 "가격, 개인정보 및 데이터"의 고지를 읽으십시오.',
          '**만 18세 미만.** 이 앱은 성인 등급이며 성인을 대상으로 합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Swerve는 오프라인에서 작동하나요?',
            a: '페이지, 웹사이트, 개인정보 고지 어디에도 오프라인 또는 온디바이스 모드가 문서화되어 있지 않으며, 커뮤니티 캐릭터 라이브러리는 온라인 서비스임을 시사합니다.',
          },
          {
            q: 'Swerve Pro는 구독인가요?',
            a: '페이지에는 나와 있지 않습니다. 약관에는 구독이 Apple을 통해 매월 갱신되고 Apple 구독 설정에서 취소할 수 있으며 모든 판매는 최종이라고 명시되어 있습니다.',
          },
          {
            q: 'Swerve 계정과 데이터를 삭제할 수 있나요?',
            a: '웹사이트에 계정 삭제 페이지 링크가 있으며, 고지에 따르면 계정 종료 후 데이터는 비활성화되거나 삭제되고 일부는 사기 방지와 법적 사유로 보관됩니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          'Swerve는 대규모 캐릭터 카탈로그와 인터랙티브 스토리에 대한 세밀한 제어를 원하고 클라우드 서비스를 받아들일 수 있는 성인 iPhone 사용자에게 서류상으로는 잘 맞습니다.',
          '유의점은 투명성과 개인정보입니다. 비공개 소스이고, AI 제공업체를 밝히지 않으며, 개인정보 고지에는 광고 네트워크와의 공유가 기술되어 있습니다.',
          '자신의 하드웨어에서 캐릭터를 실행하고 싶다면 [Backyard AI](/ko/power-local-llm/backyard-ai-review-local-roleplay)부터 시작하고, 오픈 소스를 원한다면 [RisuAI](/ko/power-local-llm/risuai-review)나 [Agnai](/ko/power-local-llm/agnai-review)를 써 보십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 Swerve](https://apps.apple.com/us/app/swerve-ai-chat/id6754301136) — 버전, 가격, 요구 사항, 연령 등급, 기능, 개발사.',
          '[Swerve 웹사이트](https://www.getswerve.com/) — 개발사 자신의 설명과 플랫폼별 제공 현황.',
          '[Swerve 개인정보 고지](https://www.getswerve.com/privacy) — 데이터 수집, 광고 네트워크 공유, 보관.',
          '[Swerve 이용 약관](https://www.getswerve.com/terms) — 연령 제한, 콘텐츠 정책, 구독 조건.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Backyard AI 리뷰](/ko/power-local-llm/backyard-ai-review-local-roleplay) — 롤플레이 캐릭터를 로컬에서 실행하는 데스크톱 클라이언트.',
          '[RisuAI 리뷰](/ko/power-local-llm/risuai-review) — 웹, 데스크톱, 모바일용 오픈 소스 롤플레이 프런트엔드.',
          '[Agnai 리뷰](/ko/power-local-llm/agnai-review) — 캐릭터 카드를 지원하는 오픈 소스 브라우저 롤플레이 프런트엔드.',
          '[Local AI App Directory](/ko/directory) — 여러 플랫폼의 로컬 및 클라우드 AI 앱을 모은 더 폭넓은 디렉터리.',
        ],
      },
    },
  },
}
